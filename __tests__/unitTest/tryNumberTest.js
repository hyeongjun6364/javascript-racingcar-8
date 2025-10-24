import { tryCountValidation } from '../../src/util/validation.js';

describe('시도할 횟수 유효성 검사', () => {
  test('시도할 횟수가 숫자인지 검사', () => {
    const invalidTryCount = 'abc';
    expect(() => tryCountValidation(invalidTryCount)).toThrow('[ERROR]');
  });
  test('시도할 횟수가 1 이상 30 이하인지 검사', () => {
    const invalidTryCount = '31';
    expect(() => tryCountValidation(invalidTryCount)).toThrow('[ERROR]');
  });
  test.each(['1', '15', '30'])('유효한 시도할 횟수: %s', (validTryCount) => {
    expect(() => tryCountValidation(validTryCount)).not.toThrow();
  });
});
