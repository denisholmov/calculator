// Здесь описываем логику калькулятора

import { sum, multiply, substract } from './math.js';

const OPERATIONS = {
  sum: '+',
  substract: '-',
  multiply: '*',
  divison: '/',
}; // Описали доступные операции

export const calculate = ({ a, b, operation }) => {
  let result = null;

  switch (operation) {
    case OPERATIONS.sum:
      result = sum(a, b);
      break;

    case OPERATIONS.substract:
      result = substract(a, b);
      break;

    case OPERATIONS.multiply:
      result = multiply(a, b);
      break;

    case OPERATIONS.divison:
      result = divison(a, b);
      break;

    default:
      break;
  }

  return result;
}; // описали логику
