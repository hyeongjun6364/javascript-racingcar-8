import { Console, Random } from '@woowacourse/mission-utils';
import { MESSAGES } from './constants.js';
import Car from './Car.js';

class App {
  #cars;
  #tryCount;

  async run() {
    const carNames = await this.userInput(MESSAGES.userInput);
    const tryCount = await this.userInput(MESSAGES.userInputTryCount);
    this.setCars(carNames);
    this.setTryCount(tryCount);
    this.startRacing();
  }

  startRacing() {
    for (let i = 0; i < this.#tryCount; i++) {
      this.moveCars();
    }
  }

  moveCars() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }

  async userInput(content) {
    return await Console.readLineAsync(content);
  }

  printResult(content) {
    Console.print(content);
  }

  setCars(carNames) {
    this.#cars = carNames.split(',').map((name) => new Car(name.trim()));
  }

  setTryCount(count) {
    this.#tryCount = count;
  }
}

export default App;
