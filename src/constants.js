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
  invalidCarNameRange: '[ERROR] 자동차 이름은 1자 이상 5자 이하이어야 합니다.',
  dumplicateCarName: '[ERROR] 중복된 자동차 이름이 존재합니다.',
  invalidCarNameLength: '[ERROR] 자동차는 최소 2대 이상이어야 합니다.',
  emptyCarName: '[ERROR] 빈 자동차 이름이 존재합니다.',
  invalidTryCount: '[ERROR] 시도할 횟수는 숫자여야 합니다.',
  invalidTryCountRange: '[ERROR] 시도할 횟수는 1 이상 30 이하의 숫자여야 합니다.',
});
