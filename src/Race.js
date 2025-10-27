import { MESSAGES } from './constants.js';
import Car from './Car.js';
import { printResult } from './util/console.js';
import RaceView from './RaceView.js';

class Race {
  #cars;
  #tryCount;

  constructor(carNames, tryCount) {
    this.#tryCount = tryCount;
    this.setCars(carNames);
  }

  startRacing() {
    printResult(MESSAGES.printRunResult);
    for (let i = 0; i < this.#tryCount; i++) {
      this.moveCars();
      RaceView.printRaceStatus(this.getCars());
    }
  }

  moveCars() {
    this.getCars().forEach((car) => {
      car.move();
    });
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

export default Race;
