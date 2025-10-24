import { carNameValidation } from '../../src/util/validation';

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
  test.each(['pobi,crong,honux', 'pobi, jaav, crong, honux'])(
    '유효한 자동차 이름: %s',
    (validCarNames) => {
      expect(() => carNameValidation(validCarNames)).not.toThrow();
    },
  );
});
