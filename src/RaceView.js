import { MESSAGES } from './constants.js';
import { printResult } from './util/console.js';

class RaceView {
  static printRaceStatus(cars) {
    const raceStatus = cars
      .map((car) => `${car.getName()} : ${'-'.repeat(car.getDistance())}`)
      .join('\n');
    printResult(raceStatus + '\n');
  }

  static printWinners(winners) {
    printResult(MESSAGES.printFinalWinner + winners.map((car) => car.getName()).join(', '));
  }
}
export default RaceView;
