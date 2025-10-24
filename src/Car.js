import { Random } from '@woowacourse/mission-utils';
import { MAX_NUMBER_RANGE, MIN_NUMBER_RANGE, MOVE_CONDITION_NUMBER } from './constants.js';

class Car {
  constructor(name) {
    this.name = name;
    this.distance = 0;
  }

  move() {
    const randomNumber = Random.pickNumberInRange(MIN_NUMBER_RANGE, MAX_NUMBER_RANGE);
    if (randomNumber >= MOVE_CONDITION_NUMBER) {
      this.distance += 1;
    }
  }
}

export default Car;
