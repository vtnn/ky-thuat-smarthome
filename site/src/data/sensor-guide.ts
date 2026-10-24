export type SensorState = {
  scenario: string;
  sensor: string;
  sensitivity: string;
  activity: string;
  barrier: string;
  noise: string;
};

export const profiles = [
  { id: 'pir', title: 'PIR', summary: 'Nhận thay đổi hồng ngoại trong vùng quan sát.',
    strength: 'Đáng cân nhắc cho nhu cầu đi qua bật đèn.',
    limit: 'Người ít cử động và vật cản cần được xét riêng.',
    verify: 'Góc quét, nhiệt độ nền, hướng người đi và vị trí lắp.' },
  { id: 'radar58', title: 'Radar chuyển động 5,8 GHz', summary: 'Nhóm thiết bị phát hiện chuyển động bằng radar.',
    strength: 'Có thể phù hợp với phát hiện đi lại, tùy thiết kế sản phẩm.',
    limit: 'Không suy ra khả năng giữ hiện diện từ tần số.',
    verify: 'Phạm vi phát hiện và kích hoạt ngoài khu vực mong muốn.' },
  { id: 'presence24', title: 'Radar hiện diện 24 GHz', summary: 'Sản phẩm thiết kế cho hiện diện và cử động nhỏ.',
    strength: 'Đáng thử khi người ngồi lâu, ít cử động.',
    limit: 'Thuật toán, vị trí và môi trường quyết định kết quả.',
    verify: 'Khả năng giữ hiện diện, độ trễ và nhiễu trong phòng thực.' },
  { id: 'presence60', title: 'Radar hiện diện 60 GHz', summary: 'Sản phẩm hiện diện; tính năng không gian tùy mẫu.',
    strength: 'Có mẫu hỗ trợ vùng và nhận biết vị trí.',
    limit: '60 GHz không mặc định có phân vùng hay lọc mọi nguồn nhiễu.',
    verify: 'Tính năng đúng mã máy, nền tảng tích hợp và cấu hình vùng.' },
];

export const options = {
  sensor: profiles.map(p => ({ id: p.id, label: p.title })),
  sensitivity: [
    { id: 'high', label: 'Cao' }, { id: 'medium', label: 'Vừa' }, { id: 'low', label: 'Thấp' },
  ],
  activity: [
    { id: 'walking', label: 'Đi lại' }, { id: 'typing', label: 'Cử động nhẹ' },
    { id: 'still', label: 'Ngồi yên / ít cử động' }, { id: 'empty', label: 'Phòng trống' },
  ],
  barrier: [
    { id: 'none', label: 'Không vật cản' }, { id: 'glass', label: 'Vách kính khô' },
    { id: 'wet', label: 'Kính đọng nước' },
  ],
  noise: [
    { id: 'none', label: 'Môi trường tĩnh' }, { id: 'fan', label: 'Quạt / rèm chuyển động' },
    { id: 'sun', label: 'Nắng + gió làm vật chuyển động' }, { id: 'water', label: 'Nước / hơi' },
    { id: 'outside', label: 'Người ngoài vùng cần theo dõi' },
  ],
};

export const scenarios = [
  { id: 'corridor', title: 'Hành lang / cầu thang', problem: 'Cần bật đèn khi đi qua, hạn chế bắt sang phòng bên.',
    advice: 'Cân nhắc PIR có vùng quét phù hợp trước; thử ở cả hai hướng đi.',
    tradeoff: 'Phát hiện đi qua không có nghĩa là giữ đèn khi đứng yên lâu.',
    check: 'Thử từ chiếu nghỉ, cửa phòng và điểm khuất; kiểm tra thời gian giữ sáng.',
    config: { sensor: 'pir', sensitivity: 'medium', activity: 'walking', barrier: 'none', noise: 'none' } },
  { id: 'bedroom', title: 'Phòng ngủ / làm việc', problem: 'Người đọc sách hoặc ngồi làm việc ít cử động; phòng có thể có quạt, rèm.',
    advice: 'Cân nhắc thiết bị hiện diện đã thử với tư thế sử dụng thật.',
    tradeoff: 'Cần hiệu chỉnh và thử phòng trống; tăng độ nhạy có thể tăng kích hoạt ngoài ý muốn.',
    check: 'Thử khi ngồi lâu, quay lưng, bật quạt; không tắt điều hòa chỉ vì một lần mất hiện diện.',
    config: { sensor: 'presence24', sensitivity: 'high', activity: 'still', barrier: 'none', noise: 'fan' } },
  { id: 'bathroom', title: 'WC có vách kính', problem: 'Người có thể ít cử động hoặc ở sau vách so với vị trí cảm biến.',
    advice: 'Ưu tiên bố trí quan sát đúng khu vực; thử cảm biến hiện diện với vách thực tế.',
    tradeoff: 'Đổi công nghệ chưa chắc giải quyết được vị trí lắp bị che.',
    check: 'Thử cửa đóng/mở, người ở cả hai phía vách và quạt hút đang chạy.',
    config: { sensor: 'presence24', sensitivity: 'high', activity: 'still', barrier: 'glass', noise: 'fan' } },
  { id: 'sunny', title: 'Khu vực nắng / gió', problem: 'Nắng, gió và vật chuyển động có thể làm điều kiện phát hiện thay đổi.',
    advice: 'Khảo sát môi trường và cấp bảo vệ trước khi chọn công nghệ.',
    tradeoff: 'Hạ độ nhạy có thể giảm khả năng bắt người ở vùng cần dùng.',
    check: 'Thử khi phòng trống vào lúc nắng mạnh; chọn đúng loại trong/ngoài nhà.',
    config: { sensor: 'pir', sensitivity: 'medium', activity: 'empty', barrier: 'none', noise: 'sun' } },
  { id: 'steam', title: 'Phòng tắm / kính đọng nước', problem: 'Có vật cản, nước và điều kiện ẩm cần xét đồng thời.',
    advice: 'Xem lại vị trí lắp và điều kiện làm việc của thiết bị trước khi nâng cấp.',
    tradeoff: 'Không có kết luận chung cho mọi độ dày kính, màng nước và cách lắp.',
    check: 'Đối chiếu cấp bảo vệ, điều kiện ngưng tụ; thử khu khô/khu ướt với vị trí dùng thật.',
    config: { sensor: 'presence60', sensitivity: 'high', activity: 'typing', barrier: 'wet', noise: 'water' } },
  { id: 'security', title: 'Chống xâm nhập', problem: 'Cần báo động đúng khi hệ thống được bật bảo vệ.',
    advice: 'Chọn đầu báo và trung tâm báo động theo thiết kế an ninh, không chỉ theo công nghệ.',
    tradeoff: 'Cảm biến tiện nghi dùng bật đèn chưa đủ cơ sở để cam kết chống trộm.',
    check: 'Thử chế độ bảo vệ, mất kết nối, pin yếu, nguồn dự phòng và cách nhận cảnh báo.',
    config: { sensor: 'pir', sensitivity: 'medium', activity: 'empty', barrier: 'none', noise: 'fan' } },
];

export function scenarioState(id: string): SensorState {
  const scenario = scenarios.find(s => s.id === id) ?? scenarios[0];
  return { scenario: scenario.id, ...scenario.config };
}

export function parseState(params: URLSearchParams): SensorState {
  const state = scenarioState(params.get('scenario') ?? '');
  for (const key of Object.keys(options) as (keyof typeof options)[]) {
    const value = params.get(key);
    if (options[key].some(option => option.id === value)) state[key] = value!;
  }
  return state;
}

export function isCustomized(state: SensorState): boolean {
  const preset = scenarioState(state.scenario);
  return (Object.keys(options) as (keyof typeof options)[]).some(key => state[key] !== preset[key]);
}

export function stateURL(state: SensorState, view: 'quick' | 'deep' = 'deep'): string {
  const path = view === 'deep' ? '05a-mo-phong-cam-bien' : '05-cam-bien';
  return '/wiki/giai-phap/' + path + '/?' + new URLSearchParams(state).toString();
}

type Assessment = { level: string; label: string; detail: string };

export function evaluateSensor(state: SensorState) {
  const radar = state.sensor !== 'pir';
  let detection: Assessment = {
    level: 'likely', label: 'Đáng thử cho nhu cầu này',
    detail: 'Có cơ sở lựa chọn ban đầu; khoảng cách, hướng lắp và thuật toán vẫn cần được thử tại phòng.',
  };
  if (state.activity === 'empty') {
    detection = { level: 'absent', label: 'Không có người trong giả định',
      detail: 'Phòng trống dùng để kiểm tra kích hoạt ngoài ý muốn, không để chấm khả năng bắt người.' };
  } else if (!radar && (state.barrier !== 'none' || state.activity !== 'walking')) {
    detection = { level: 'limited', label: 'Có hạn chế cần xử lý',
      detail: state.barrier !== 'none'
        ? 'Vách kính có thể cản hồng ngoại mà PIR dùng. Nên đổi vị trí quan sát thay vì trông chờ tăng độ nhạy.'
        : 'PIR cần thay đổi hồng ngoại trong vùng quét; người ít cử động có thể không tạo kích hoạt mới.' };
  } else if (radar && (state.barrier !== 'none' || (state.sensor === 'radar58' && state.activity !== 'walking'))) {
    detection = { level: 'unknown', label: 'Cần kiểm tra thực tế',
      detail: 'Chưa đủ cơ sở suy ra khả năng phát hiện từ tần số và vật cản. Cần đúng mã thiết bị và thử nghiệm tại vị trí lắp.' };
  } else if (state.sensitivity === 'low' && state.activity !== 'walking') {
    detection = { level: 'limited', label: 'Cần cân đối độ nhạy',
      detail: 'Giảm nhạy có thể làm mất cử động nhỏ cần phát hiện. Mức Thấp không tương đương nhau giữa các thiết bị.' };
  }
  const interference: Assessment = state.noise === 'none'
    ? { level: 'low', label: 'Chưa đưa nguồn nhiễu vào bài toán',
      detail: 'Môi trường tĩnh là giả định để so sánh, không phải xác nhận phòng thực không có nhiễu.' }
    : { level: 'possible', label: 'Có yếu tố cần thử khi phòng trống',
      detail: !radar && state.noise === 'fan'
        ? 'Vật chuyển động chưa chắc làm PIR kích hoạt; cần xem biến đổi nhiệt, vị trí và luồng khí, không mặc định miễn nhiễm.'
        : 'Nguồn nhiễu chỉ là yếu tố khảo sát. Mô hình chưa biết vị trí, khoảng cách và khả năng lọc của thiết bị cụ thể.' };
  const needsTest = detection.level === 'unknown' || interference.level === 'possible';
  const action = state.scenario === 'security'
    ? 'Xác nhận thiết bị và thiết kế báo động phù hợp; mô phỏng này không đánh giá cấp an ninh.'
    : state.barrier !== 'none'
      ? 'Kiểm tra vị trí quan sát trước, rồi thử cả lúc có người và phòng trống; không hứa khả năng xuyên vách.'
      : state.sensitivity === 'low'
        ? 'Thử lại người ít cử động ở vị trí xa nhất sau khi hạ nhạy, đồng thời kiểm tra phòng trống.'
        : 'Thử vị trí sử dụng thực, sau đó để phòng trống với các nguồn nhiễu đang hoạt động; ghi lại thời gian báo vắng.';
  return { detection, interference, needsTest, action,
    conclusion: needsTest ? 'Cần kiểm tra thực tế trước khi chốt.'
      : detection.level === 'limited' ? 'Xem lại nhu cầu, vị trí hoặc công nghệ.'
      : 'Có hướng lựa chọn ban đầu; xác nhận bằng thử nghiệm.' };
}
