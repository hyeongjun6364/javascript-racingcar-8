import { MESSAGES } from './constants.js';
import Car from './Car.js';
import { printResult, userInput } from './util/console.js';
import { carNameValidation, tryCountValidation } from './util/validation.js';
import RaceView from './RaceView.js';
import Race from './Race.js';

class App {
  async run() {
    const carNames = await userInput(MESSAGES.userInput);
    const tryCount = await userInput(MESSAGES.userInputTryCount);
    carNameValidation(carNames);
    tryCountValidation(tryCount);
    const race = new Race(carNames, tryCount);
    race.startRacing();
    RaceView.printWinners(race.getWinners());
  }
}

export default App;
