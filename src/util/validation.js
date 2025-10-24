import { ERROR_MESSAGES } from '../constants.js';

export const carNameValidation = (userInput) => {
  const carNames = userInput.split(',').map((name) => name.trim());

  const isValidCarName = carNames.every((name) => name.length <= 5 && name.length > 0);
  const hasDuplicateNames = new Set(carNames).size !== carNames.length;
  const isValidLength = carNames.length >= 2;
  if (hasDuplicateNames) {
    throw new Error(ERROR_MESSAGES.DUPLICATE_CAR_NAME);
  }

  if (!isValidLength) {
    throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME_LENGTH);
  }

  if (!isValidCarName) {
    throw new Error(ERROR_MESSAGES.INVALID_CAR_NAME);
  }
};
