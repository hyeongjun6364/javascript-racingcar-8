import { ERROR_MESSAGES } from '../constants.js';

export const carNameValidation = (userInput) => {
  const carNames = userInput.split(',').map((name) => name.trim());

  const isValidCarName = carNames.every((name) => name.length <= 5 && name.length > 0);
  const hasEmptyName = carNames.some((name) => name === '');
  const hasDuplicateNames = new Set(carNames).size !== carNames.length;
  const isValidLength = carNames.length >= 2;
  if (hasDuplicateNames) {
    throw new Error(ERROR_MESSAGES.dumplicateCarName);
  }
  if (hasEmptyName) {
    throw new Error(ERROR_MESSAGES.emptyCarName);
  }

  if (!isValidLength) {
    throw new Error(ERROR_MESSAGES.invalidCarNameLength);
  }

  if (!isValidCarName) {
    throw new Error(ERROR_MESSAGES.invalidCarNameRange);
  }
};

export const tryCountValidation = (userInput) => {
  const isNumber = !isNaN(userInput);
  const invalidRange = Number(userInput) <= 30 && Number(userInput) > 0;
  if (!isNumber) {
    throw new Error(ERROR_MESSAGES.invalidTryCount);
  }
  if (!invalidRange) {
    throw new Error(ERROR_MESSAGES.invalidTryCountRange);
  }
};
