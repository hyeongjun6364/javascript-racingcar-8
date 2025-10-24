import { carNameValidation, tryCountValidation } from '../src/util/validation';

describe('자동차 이름 유효성 검사', () => {
  test('자동차 이름이 1자 이상 5자 이하인지 검사', () => {
    const invalidCarNames = 'pobi,jaavja,crong,honux';
    expect(() => carNameValidation(invalidCarNames)).toThrow('[ERROR]');
  });
  test('자동차 이름에 빈 값이 있는지 검사', () => {
    const invalidCarNames = 'pobi,,crong,honux';
    expect(() => carNameValidation(invalidCarNames)).toThrow('[ERROR]');
  });
  test('자동차 이름이 중복되는지 검사', () => {
    const invalidCarNames = 'pobi,jaavja,crong,honux,pobi';
    expect(() => carNameValidation(invalidCarNames)).toThrow('[ERROR]');
  });
  test('자동차 이름이 2대 이상인지 검사', () => {
    const invalidCarNames = 'pobi';
    expect(() => carNameValidation(invalidCarNames)).toThrow('[ERROR]');
  });
});

describe('시도할 횟수 유효성 검사', () => {
  test('시도할 횟수가 숫자인지 검사', () => {
    const invalidTryCount = 'abc';
    expect(() => tryCountValidation(invalidTryCount)).toThrow('[ERROR]');
  });
  test('시도할 횟수가 1 이상 30 이하인지 검사', () => {
    const invalidTryCount = '31';
    expect(() => tryCountValidation(invalidTryCount)).toThrow('[ERROR]');
  });
});
