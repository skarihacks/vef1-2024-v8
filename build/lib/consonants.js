import { isString, split } from './helpers.js';
import { CONSONANTS } from './constants.js';

function countGivenCharactersInString(str, characters) {
  if (!isString(str)) {
    return 0;
  }

  const splitStr = split(str, '');

  let count = 0;

  for (const char of splitStr) {
    if (characters.includes(char)) {
      count += 1;
    }
  }

  return count;
}

export function consonants(str) {
  return countGivenCharactersInString(str, CONSONANTS);
}
