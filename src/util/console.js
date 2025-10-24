import { Console } from '@woowacourse/mission-utils';

export const userInput = async (content) => {
  return await Console.readLineAsync(content);
};

export const printResult = (content) => {
  Console.print(content);
};
