import { Random } from '@woowacourse/mission-utils';
import { MAX_NUMBER_RANGE, MIN_NUMBER_RANGE, MOVE_CONDITION_NUMBER } from './constants.js';

class Car {
  #name;
  #distance;
  constructor(name) {
    this.#name = name;
    this.setDistance(0);
  }

  move() {
    const randomNumber = Random.pickNumberInRange(MIN_NUMBER_RANGE, MAX_NUMBER_RANGE);
    if (randomNumber >= MOVE_CONDITION_NUMBER) {
      this.#distance += 1;
    }
  }

  getDistance() {
    return this.#distance;
  }

  setDistance(distance) {
    this.#distance = distance;
  }

  getName() {
    return this.#name;
  }
}

export default Car;
