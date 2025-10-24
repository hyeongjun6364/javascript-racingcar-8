import { MESSAGES } from './constants.js';
import Car from './Car.js';
import { printResult, userInput } from './util/console.js';

class App {
  #cars;
  #tryCount;

  async run() {
    const carNames = await userInput(MESSAGES.userInput);
    const tryCount = await userInput(MESSAGES.userInputTryCount);
    this.setCars(carNames);
    this.setTryCount(tryCount);
    this.startRacing();
  }

  startRacing() {
    printResult(MESSAGES.printRunResult);
    for (let i = 0; i < this.#tryCount; i++) {
      this.moveCars();
      this.printRaceStatus();
    }
  }

  moveCars() {
    this.#cars.forEach((car) => {
      car.move();
    });
  }

  printRaceStatus() {
    const status = this.#cars.map((car) => `${car.name}: ${'-'.repeat(car.distance)}`).join('\n');
    printResult(status + '\n');
  }

  setCars(carNames) {
    this.#cars = carNames.split(',').map((name) => new Car(name.trim()));
  }

  setTryCount(count) {
    this.#tryCount = count;
  }
}

export default App;
