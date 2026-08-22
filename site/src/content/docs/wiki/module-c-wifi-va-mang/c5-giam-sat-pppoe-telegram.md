---
title: "C5 — Giám sát PPPoE & Cảnh báo Telegram (MikroTik)"
description: "Hướng dẫn cấu hình script tự động giám sát trạng thái kết nối PPPoE đa WAN trên MikroTik RouterOS và gửi cảnh báo mất mạng hoặc khôi phục qua Telegram bot."
module: "c"
level: "4-6"
tags: ["MikroTik", "PPPoE", "Telegram", "giám sát", "RouterOS", "script"]
---

## Mục tiêu

- Tự động hóa việc giám sát đường truyền Internet (PPPoE) đa WAN trên router MikroTik tại các công trình.
- Nhận thông báo tức thời qua Telegram khi có sự cố mất kết nối hoặc khi đường truyền được khôi phục.
- Nắm rõ nguyên lý định tuyến probe IP và cơ chế chống gửi cảnh báo rác (spam alert).

---

## 1. Nguyên lý hoạt động

Hệ thống giám sát gồm 3 thành phần chính hoạt động phối hợp:

1. **Route probe riêng biệt:** Mỗi đường WAN PPPoE được gán một IP public cố định (ví dụ `8.8.8.8` cho WAN 1, `9.9.9.9` cho WAN 2) làm đích kiểm tra. Gói tin ping bắt buộc phải đi qua gateway PPPoE tương ứng. Nhờ đó, router kiểm tra được khả năng ra Internet thực tế chứ không chỉ kiểm tra trạng thái up/down của cổng vật lý.
2. **Script kiểm tra định kỳ:** Chạy qua Scheduler (mặc định 3 phút/lần). Script thực hiện ping probe IP theo từng đường truyền.
3. **Cơ chế lọc nhiễu & cảnh báo:**
   - **Chống báo ảo:** Chỉ kích hoạt sự cố khi số lần ping lỗi liên tiếp đạt ngưỡng `pppMonFailLimit` (mặc định 3 lần).
   - **Chống spam tin nhắn:** Khi đường truyền đứt, script chỉ gửi 1 thông báo duy nhất trong ngày. Khi đường truyền có mạng trở lại, script tự động gửi 1 thông báo phục hồi (Recovery).
   - **Gửi tin qua Telegram Bot:** Sử dụng `/tool fetch` để gọi trực tiếp API Telegram với nội dung đã được mã hóa UTF-8/URL encoding.

---

## 2. Các bước cài đặt chi tiết

### Bước 1: Đặt tên router (Identity)

Tên router sẽ được đính kèm vào nội dung tin nhắn Telegram để kỹ thuật viên biết chính xác công trình nào đang gặp sự cố.

Vào **System → Identity** hoặc chạy lệnh CLI (lưu ý chỉ dùng ký tự ASCII không dấu):

```routeros
/system identity set name="NHA-ANH-THACH"
```

---

### Bước 2: Tạo route probe kiểm tra Internet

Tạo các static route trỏ IP probe ra đúng interface PPPoE của từng nhà mạng:

```routeros
/ip route
add dst-address=8.8.8.8/32 gateway=pppoe-out1 comment="PPPoE-monitor-isp1"
add dst-address=9.9.9.9/32 gateway=pppoe-out2 comment="PPPoE-monitor-isp2"
```

> **Lưu ý:**
> - `pppoe-out1` và `pppoe-out2` là tên interface PPPoE mặc định. Nếu router đặt tên khác, cần đổi tên gateway cho khớp.
> - Chọn 2 IP DNS public khác nhau cho 2 WAN để tránh xung đột định tuyến (ví dụ `8.8.8.8` của Google và `9.9.9.9` của Quad9).

---

### Bước 3: Tạo Script giám sát (`pppoe-monitor`)

1. Trên Winbox, vào **System → Scripts → +**.
2. Thiết lập thông số:
   - **Name:** `pppoe-monitor`
   - **Policy:** Tích chọn `read`, `write`, `test`.
   - **Source:** Dán toàn bộ đoạn mã bên dưới. Cập nhật `pppMonBotToken`, `pppMonChatId` và điều chỉnh các dòng `$checkLine` ở cuối script theo đúng thực tế công trình.

> **Lưu ý quan trọng:** Dán mã trực tiếp vào giao diện Scripts trên Winbox/WebFig, không paste vào cửa sổ Terminal CLI vì CLI không hỗ trợ ký tự tiếng Việt có dấu.

```routeros
# ================================================================
# CẤU HÌNH DÙNG CHUNG - mỗi MikroTik chỉ sửa khối này
# ================================================================
:global pppMonBotToken "8624350503:AAFU3sLc-YSmZEydYlLZdxtkV29TifIXikg"
:global pppMonChatId "-5341184222"
:global pppMonFailLimit 3
:global pppMonPingCount 3
:global pppMonDebug true

# Trạng thái dùng chung, tự khởi tạo và giữ giữa các lần Scheduler chạy.
:global pppMonFailCount
:global pppMonLastAlert
:global pppMonAlertOpen

:if ([:typeof $pppMonFailCount] != "array") do={
    :set pppMonFailCount {"_init"=0}
}
:if ([:typeof $pppMonLastAlert] != "array") do={
    :set pppMonLastAlert {"_init"=""}
}
:if ([:typeof $pppMonAlertOpen] != "array") do={
    :set pppMonAlertOpen {"_init"=false}
}

:if ($pppMonDebug = true) do={
    :log info ("[PPPoE-MON] RUN | router=" . [/system identity get name])
}

# ================================================================
# HÀM DÙNG CHUNG - không cần nhân bản theo từng ISP
# ================================================================
:local checkLine do={
    :global pppMonBotToken
    :global pppMonChatId
    :global pppMonFailLimit
    :global pppMonPingCount
    :global pppMonDebug
    :global pppMonFailCount
    :global pppMonLastAlert
    :global pppMonAlertOpen

    # Đọc thông tin PPPoE, định dạng và gửi một thông báo Telegram.
    :local notify do={
        :global pppMonBotToken
        :global pppMonChatId
        :global pppMonDebug

        :local pppoeId [/interface pppoe-client find where name=$pppoeName]
        :if ([:len $pppoeId] = 0) do={
            :log error ("[PPPoE-MON] ERROR | PPPoE not found | interface=" . $pppoeName)
            :return false
        }

        :local routerName [/system identity get name]
        :local pppoeUser [/interface pppoe-client get $pppoeId user]
        :local wanPort [/interface pppoe-client get $pppoeId interface]
        :local pppoeComment [/interface pppoe-client get $pppoeId comment]
        :local currentIp "Không có"

        :if ([:len $pppoeUser] = 0) do={ :set pppoeUser "Không khai báo" }
        :if ([:len $pppoeComment] = 0) do={ :set pppoeComment "Không có" }

        :do {
            :local addressIds [/ip address find where interface=$pppoeName]
            :if ([:len $addressIds] > 0) do={
                :set currentIp [/ip address get [:pick $addressIds 0] address]
            }
        } on-error={ :set currentIp "Không có" }

        :local tgHeader ""
        :if ($eventName = "down") do={
            :set tgHeader "\F0\9F\94\B4 MẤT KẾT NỐI INTERNET"
        } else={
            :set tgHeader "\F0\9F\9F\A2 INTERNET ĐÃ KHÔI PHỤC"
        }

        # Dùng tiền tố tg* để tránh trùng tên thuộc tính có sẵn của RouterOS.
        :local tgText ($tgHeader . "\n")
        :set tgText ($tgText . "------------------------------\n")
        :set tgText ($tgText . "\F0\9F\8F\A0 Nhà / Router: " . $routerName . "\n")
        :set tgText ($tgText . "\F0\9F\8C\90 Đường truyền: " . $lineLabel . "\n")
        :set tgText ($tgText . "\F0\9F\91\A4 Tài khoản PPPoE: " . $pppoeUser . "\n")
        :set tgText ($tgText . "\F0\9F\94\8C Interface: " . $pppoeName . " qua " . $wanPort . "\n")
        :set tgText ($tgText . "\F0\9F\93\9D Comment: " . $pppoeComment . "\n")
        :set tgText ($tgText . "\F0\9F\8C\8D IP hiện tại: " . $currentIp . "\n")
        :set tgText ($tgText . "\F0\9F\93\A1 Điểm kiểm tra: " . $probeAddress . "\n")
        :set tgText ($tgText . "\F0\9F\95\92 Thời gian: " . [/system clock get date] . " " . [/system clock get time] . "\n")

        # Encode các ký tự đặc biệt của application/x-www-form-urlencoded.
        # Ký tự UTF-8 được giữ nguyên; Telegram nhận nội dung ở dạng UTF-8.
        :local formText ""
        :for formIndex from=0 to=([:len $tgText] - 1) do={
            :local formChar [:pick $tgText $formIndex ($formIndex + 1)]
            :if ($formChar = "%") do={
                :set formText ($formText . "%25")
            } else={
                :if ($formChar = "&") do={
                    :set formText ($formText . "%26")
                } else={
                    :if ($formChar = "+") do={
                        :set formText ($formText . "%2B")
                    } else={
                        :if ($formChar = "=") do={
                            :set formText ($formText . "%3D")
                        } else={
                            :if ($formChar = " ") do={
                                :set formText ($formText . "%20")
                            } else={
                                :if ($formChar = "\n") do={
                                    :set formText ($formText . "%0A")
                                } else={
                                    :if ($formChar = "\r") do={
                                        # Bỏ CR, chỉ giữ LF để xuống dòng.
                                        :set formText $formText
                                    } else={
                                        :set formText ($formText . $formChar)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }

        :local telegramUrl ("https://api.telegram.org/bot" . $pppMonBotToken . "/sendMessage")
        :local requestBody ("chat_id=" . $pppMonChatId . "&text=" . $formText)
        :local telegramSent false

        :if ($pppMonDebug = true) do={
            :log info ("[PPPoE-MON] TELEGRAM | event=" . $eventName . \
                " | line=" . $lineLabel . " | status=SENDING")
        }

        :do {
            /tool fetch url=$telegramUrl http-method=post \
                http-header-field="Content-Type:application/x-www-form-urlencoded" \
                http-data=$requestBody keep-result=no check-certificate=no
            :set telegramSent true
            :log info ("[PPPoE-MON] TELEGRAM | event=" . $eventName . \
                " | line=" . $lineLabel . " | status=SUCCESS")
        } on-error={
            :log error ("[PPPoE-MON] TELEGRAM | event=" . $eventName . \
                " | line=" . $lineLabel . " | status=FAILED")
        }

        :return $telegramSent
    }

    :local pppoeId [/interface pppoe-client find where name=$pppoeName]
    :if ([:len $pppoeId] = 0) do={
        :log error ("[PPPoE-MON] ERROR | check skipped | interface=" . $pppoeName)
        :return
    }

    :local failStateType [:typeof ($pppMonFailCount->$lineKey)]
    :if (($failStateType = "nothing") || ($failStateType = "nil")) do={
        :set ($pppMonFailCount->$lineKey) 0
    }
    :local alertDateStateType [:typeof ($pppMonLastAlert->$lineKey)]
    :if (($alertDateStateType = "nothing") || ($alertDateStateType = "nil")) do={
        :set ($pppMonLastAlert->$lineKey) ""
    }
    :local alertOpenStateType [:typeof ($pppMonAlertOpen->$lineKey)]
    :if (($alertOpenStateType = "nothing") || ($alertOpenStateType = "nil")) do={
        :set ($pppMonAlertOpen->$lineKey) false
    }

    :if ($pppMonDebug = true) do={
        :log info ("[PPPoE-MON] CHECK | line=" . $lineLabel . \
            " | interface=" . $pppoeName . " | probe=" . $probeAddress)
    }

    :local pingReplies 0
    :do {
        :set pingReplies [/ping address=$probeAddress interface=$pppoeName \
            count=$pppMonPingCount interval=500ms]
    } on-error={ :set pingReplies 0 }

    :if ($pingReplies > 0) do={
        :if ($pppMonDebug = true) do={
            :log info ("[PPPoE-MON] RESULT | line=" . $lineLabel . \
                " | status=UP | replies=" . $pingReplies . "/" . $pppMonPingCount . \
                " | previous-fails=" . ($pppMonFailCount->$lineKey))
        }

        :if (($pppMonAlertOpen->$lineKey) = true) do={
            :local recoverySent [$notify eventName="up" lineLabel=$lineLabel \
                pppoeName=$pppoeName probeAddress=$probeAddress]
            :if ($recoverySent = true) do={
                :set ($pppMonAlertOpen->$lineKey) false
            }
        }

        :set ($pppMonFailCount->$lineKey) 0
    } else={
        :local failCount (($pppMonFailCount->$lineKey) + 1)
        :if ($failCount > $pppMonFailLimit) do={ :set failCount $pppMonFailLimit }
        :set ($pppMonFailCount->$lineKey) $failCount
        :log warning ("[PPPoE-MON] RESULT | line=" . $lineLabel . \
            " | status=DOWN | replies=0/" . $pppMonPingCount . \
            " | fail=" . $failCount . "/" . $pppMonFailLimit)

        :local today [/system clock get date]
        :if ($failCount >= $pppMonFailLimit) do={
            :if (($pppMonLastAlert->$lineKey) != $today) do={
                :local alertSent [$notify eventName="down" lineLabel=$lineLabel \
                    pppoeName=$pppoeName probeAddress=$probeAddress]
                :if ($alertSent = true) do={
                    :set ($pppMonLastAlert->$lineKey) $today
                    :set ($pppMonAlertOpen->$lineKey) true
                }
            } else={
                :if ($pppMonDebug = true) do={
                    :log info ("[PPPoE-MON] ALERT-SKIP | line=" . $lineLabel . \
                        " | reason=already-sent-today")
                }
            }
        }
    }

    :if ($pppMonDebug = true) do={
        :log info ("[PPPoE-MON] END | line=" . $lineLabel)
    }
}

# ================================================================
# KHAI BÁO ĐƯỜNG TRUYỀN
# lineKey phải duy nhất, viết liền và không đổi sau khi đưa vào sử dụng.
# lineLabel là tên đẹp sẽ xuất hiện trong thông báo.
# ================================================================
$checkLine lineKey="isp1" lineLabel="ISP 1 - đường chính" \
    pppoeName="pppoe-out1" probeAddress="8.8.8.8"

$checkLine lineKey="isp2" lineLabel="ISP 2 - dự phòng" \
    pppoeName="pppoe-out2" probeAddress="9.9.9.9"

:if ($pppMonDebug = true) do={
    :log info "[PPPoE-MON] DONE | all configured lines checked"
}
```

---

## 3. Cấu hình Scheduler chạy định kỳ

Thiết lập Scheduler để router tự động kích hoạt script kiểm tra sau mỗi 3 phút.

### Cấu hình qua giao diện Winbox

1. Vào **System → Scheduler → +**.
2. Điền các thông số:
   - **Name:** `pppoe-monitor-every-3m`
   - **Interval:** `00:03:00`
   - **On Event:** `/system script run pppoe-monitor`
   - **Policy:** Tích chọn `read`, `write`, `test`.

### Lệnh CLI tương đương

```routeros
/system scheduler add name="pppoe-monitor-every-3m" interval=3m on-event="/system script run pppoe-monitor" policy=read,write,test comment="PPPoE-monitor"
```

---

## 4. Mở rộng cho hệ thống có 3 đường WAN trở lên

Khi công trình có thêm đường truyền thứ 3 (ví dụ `pppoe-out3`), chỉ cần thực hiện thêm 2 thao tác:

1. Thêm static route probe cho WAN 3 qua CLI:
   ```routeros
   /ip route add dst-address=1.1.1.1/32 gateway=pppoe-out3 comment="PPPoE-monitor-isp3"
   ```
2. Thêm một dòng gọi hàm `$checkLine` ở cuối Script `pppoe-monitor`:
   ```routeros
   $checkLine lineKey="isp3" lineLabel="ISP 3 - đường phụ 2" pppoeName="pppoe-out3" probeAddress="1.1.1.1"
   ```

---

## 5. Kiểm tra vận hành và xử lý lỗi

### Kiểm tra chạy thử

1. **Chạy thủ công:** Vào **System → Scripts**, chọn `pppoe-monitor` và nhấn **Run Script**.
2. **Xem log hoạt động:** Mở cửa sổ **Log**, lọc từ khóa `PPPoE-MON`. Router cần ghi nhận đủ trạng thái của từng line và kết thúc bằng dòng `DONE | all configured lines checked`.
3. **Xem log qua CLI:**
   ```routeros
   /log print where message~"PPPoE-MON"
   ```
4. **Tắt chế độ Debug:** Khi hệ thống đã vận hành ổn định, đổi `:global pppMonDebug true` thành `false` trong script để tránh làm đầy bộ nhớ log của router.

---

### Reset trạng thái để test lại

Trong quá trình nghiệm thu hoặc test rút dây mạng, nếu script đã gửi thông báo trong ngày thì nó sẽ bỏ qua các lần test tiếp theo để chống spam. Để xóa bộ đếm và test lại ngay:

1. Tạo một script phụ tên `pppoe-monitor-reset` trong **System → Scripts** (cùng quyền `read, write, test`).
2. Dán nội dung sau và nhấn **Run Script**:

```routeros
:global pppMonFailCount
:global pppMonLastAlert
:global pppMonAlertOpen

:set pppMonFailCount {"_init"=0}
:set pppMonLastAlert {"_init"=""}
:set pppMonAlertOpen {"_init"=false}

:log warning "[PPPoE-MON] STATE | reset"
```

---

## 6. Lưu ý an toàn và bảo mật

- **Bảo mật Bot Token:** Không đưa `pppMonBotToken` và `pppMonChatId` vào kho lưu trữ mã nguồn mở (GitHub công khai) hoặc chia sẻ trên các kênh chat không được mã hóa.
- **Quyền hạn Script:** Script chỉ cần 3 quyền `read`, `write`, `test`. Không cấp quyền `full` hay `sensitive` khi không cần thiết.
- **DNS Probe:** Chọn các DNS server công cộng có độ ổn định cao (Google `8.8.8.8`, Quad9 `9.9.9.9`, Cloudflare `1.1.1.1`) để tránh cảnh báo sai lệch do DNS server sập.

---

## 7. Checklist nghiệm thu

- [ ] Đã đặt tên công trình rõ ràng trong **System → Identity**.
- [ ] Route probe đã được tạo và trỏ chính xác vào từng interface PPPoE.
- [ ] Bot Token và Chat ID đã được cấu hình đúng nhóm nhận tin của dự án.
- [ ] Đã kích hoạt Scheduler 3 phút/lần và script chạy không báo lỗi trong Log.
- [ ] Test rút dây mạng WAN 1: Bot gửi thông báo `MẤT KẾT NỐI INTERNET` sau 3 lần fail (khoảng 1 - 2 phút).
- [ ] Test cắm lại dây mạng WAN 1: Bot gửi thông báo `INTERNET ĐÃ KHÔI PHỤC`.
- [ ] Đã tắt chế độ `pppMonDebug` trước khi bàn giao hoàn tất cho khách hàng.
