export const MIN_NUMBER_RANGE = 0;
export const MAX_NUMBER_RANGE = 9;
export const MOVE_CONDITION_NUMBER = 4;

export const MESSAGES = Object.freeze({
  userInput: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  userInputTryCount: '시도할 횟수는 몇 회인가요?\n',
  printRunResult: '\n실행 결과',
  printFinalWinner: '최종 우승자 : ',
});

export const ERROR_MESSAGES = Object.freeze({
  INVALID_CAR_NAME: '[ERROR] 자동차 이름은 1자 이상 5자 이하이어야 합니다.',
  DUPLICATE_CAR_NAME: '[ERROR] 중복된 자동차 이름이 존재합니다.',
});
