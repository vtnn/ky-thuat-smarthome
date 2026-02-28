---
title: "Phần mềm ETS"
module: "b"
level: "4-6"
tags: ["KNX", "ETS", "lập trình"]
---
# B3.04 — Phần Mềm ETS

## Cài đặt
1. Tải từ [my.knx.org](https://my.knx.org). Cài trên Windows (.NET Framework).
2. Kích hoạt license (Demo miễn phí ≤ 5 thiết bị).

## Tạo Project
1. New Project → Đặt tên `[Công trình] - [Năm]`.
2. Tạo Building Structure: Building → Floor → Room.

## Import Product Database
1. Catalog → Import → file `.knxprod` từ hãng.
2. Import: Push Button, Actuator, Binary Input, DALI Gateway, Power Supply, IP Gateway.

## Thêm thiết bị
1. Kéo từ Catalog vào Topology (Line).
2. ETS gán Physical Address tự động.
3. Kéo vào Room trong Building Structure.

## Tạo Group Address
Format 3 cấp: `Main/Middle/Sub`. Quy ước: 0=Switching, 1=Dimming, 2=Blinds, 3=Scenes, 4=Status.

## Liên kết Communication Objects
- Kéo thả object từ thiết bị → vào Group Address.
- Ví dụ: Push Button "Switch" → GA `0/0/1` ← Switch Actuator "Switching".

## Download
1. Kết nối KNX/IP Gateway (cùng LAN).
2. Bus → Connection → Chọn Gateway → Test.
3. Full Download (lần đầu) hoặc Partial Download (sửa đổi).

## Group Monitor
- Bus → Group Monitor → Start → xem telegram real-time.
- Debug: nhấn nút → xem telegram xuất hiện không.
