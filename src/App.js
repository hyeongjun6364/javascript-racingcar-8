import { MESSAGES } from './constants.js';
import Car from './Car.js';
import { printResult, userInput } from './util/console.js';
import { carNameValidation, tryCountValidation } from './util/validation.js';

class App {
  #cars;
  #tryCount;

  async run() {
    const carNames = await userInput(MESSAGES.userInput);
    const tryCount = await userInput(MESSAGES.userInputTryCount);
    carNameValidation(carNames);
    tryCountValidation(tryCount);
    this.setCars(carNames);
    this.setTryCount(tryCount);
    this.startRacing();
    this.winnerResult();
  }

  startRacing() {
    printResult(MESSAGES.printRunResult);
    for (let i = 0; i < this.#tryCount; i++) {
      this.moveCars();
      this.printRaceStatus();
    }
  }

  moveCars() {
    this.getCars().forEach((car) => {
      car.move();
    });
  }

  printRaceStatus() {
    const status = this.getCars()
      .map((car) => `${car.getName()} : ${'-'.repeat(car.getDistance())}`)
      .join('\n');
    printResult(status + '\n');
  }

  winnerResult() {
    const winners = this.getWinners();
    printResult(MESSAGES.printFinalWinner + winners.map((car) => car.getName()).join(', '));
  }

  getWinners() {
    const maxDistance = Math.max(...this.getCars().map((car) => car.getDistance()));
    return this.getCars().filter((car) => car.getDistance() === maxDistance);
  }

  setCars(carNames) {
    this.#cars = carNames.split(',').map((name) => new Car(name.trim()));
  }

  setTryCount(count) {
    this.#tryCount = count;
  }

  getCars() {
    return this.#cars;
  }
}

export default App;
