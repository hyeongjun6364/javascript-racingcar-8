import { Console } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';

class App {
  #cars;
  #tryCount;
  async run() {
    const carNames = await this.userInput(MESSAGES.userInput);
    const count = await this.userInput(MESSAGES.userInputTryCount);
  }

  async userInput(content) {
    return await Console.readLineAsync(content);
  }
}

export default App;
