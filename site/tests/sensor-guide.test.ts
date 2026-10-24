import test from 'node:test';
import assert from 'node:assert/strict';
import { profiles, scenarios, options, scenarioState, parseState, stateURL, isCustomized, evaluateSensor } from '../src/data/sensor-guide.ts';

test('URL thiếu hoặc sai giá trị khôi phục mặc định hợp lệ, không nhận HTML làm tùy chọn', () => {
  assert.deepEqual(parseState(new URLSearchParams()), scenarioState('corridor'));
  const state = parseState(new URLSearchParams('scenario=bathroom&sensor=<img>&activity=wrong'));
  assert.deepEqual(state, scenarioState('bathroom'));
});

test('URL chuyên sâu giữ đủ cấu hình tùy chỉnh và tình huống', () => {
  const state = { ...scenarioState('bedroom'), sensor: 'pir', sensitivity: 'low', noise: 'none' };
  const url = new URL(stateURL(state), 'https://example.test');
  assert.equal(url.pathname, '/wiki/giai-phap/05a-mo-phong-cam-bien/');
  assert.deepEqual(parseState(url.searchParams), state);
  assert.equal(isCustomized(state), true);
});

test('reset khôi phục đúng preset và không làm thay đổi dữ liệu tình huống', () => {
  const state = scenarioState('bathroom');
  state.activity = 'empty';
  assert.equal(isCustomized(state), true);
  const reset = scenarioState('bathroom');
  assert.equal(isCustomized(reset), false);
  assert.notEqual(reset.activity, 'empty');
});

test('PIR bị hạn chế khi người ít cử động hoặc ở sau kính', () => {
  const state = scenarioState('corridor');
  assert.equal(evaluateSensor(state).detection.level, 'likely');
  assert.equal(evaluateSensor({ ...state, activity: 'still' }).detection.level, 'limited');
  assert.equal(evaluateSensor({ ...state, barrier: 'glass' }).detection.level, 'limited');
});

test('radar sau kính và radar chuyển động với người ngồi yên yêu cầu kiểm tra thực tế', () => {
  const state = { ...scenarioState('corridor'), sensor: 'radar58' };
  assert.equal(evaluateSensor({ ...state, activity: 'still' }).detection.level, 'unknown');
  assert.equal(evaluateSensor({ ...state, sensor: 'presence60', barrier: 'wet' }).detection.level, 'unknown');
});

test('phòng trống có nhiễu không báo là phát hiện người hoặc đảm bảo đèn hoạt động đúng', () => {
  const result = evaluateSensor({ ...scenarioState('bedroom'), activity: 'empty' });
  assert.equal(result.detection.level, 'absent');
  assert.equal(result.interference.level, 'possible');
  assert.equal(result.needsTest, true);
});

test('hạ độ nhạy với vi chuyển động nhắc đánh đổi, không cam kết loại nhiễu', () => {
  const state = scenarioState('bedroom');
  const high = evaluateSensor({ ...state, sensitivity: 'high' });
  const low = evaluateSensor({ ...state, sensitivity: 'low' });
  assert.equal(high.detection.level, 'likely');
  assert.equal(low.detection.level, 'limited');
  assert.equal(low.interference.level, 'possible');
});

test('mọi tổ hợp hợp lệ trả kết quả có giải thích, không phần trăm giả làm số đo', () => {
  for (const profile of profiles)
    for (const sensitivity of options.sensitivity)
      for (const activity of options.activity)
        for (const barrier of options.barrier)
          for (const noise of options.noise) {
            const result = evaluateSensor({ ...scenarioState('corridor'), sensor: profile.id,
              sensitivity: sensitivity.id, activity: activity.id, barrier: barrier.id, noise: noise.id });
            assert.ok(result.detection.label && result.detection.detail && result.interference.detail && result.action);
            assert.doesNotMatch(JSON.stringify(result), /%/);
          }
  assert.equal(scenarios.length, 6);
});
