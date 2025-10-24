import { ERROR_MESSAGES } from '../constants.js';

export const carNameValidation = (userInput) => {
  const carNames = userInput.split(',').map((name) => name.trim());

  const isValidCarName = carNames.every((name) => name.length <= 5 && name.length > 0);

  if (!isValidCarName) {
    throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME);
  }
};
