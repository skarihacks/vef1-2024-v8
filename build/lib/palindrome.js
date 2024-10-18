import { isString } from './helpers.js';
import { reverse } from './reverse.js';

export function palindrome(str) {
  if (!isString(str)) {
    return false;
  }

  if (str === '') {
    return false;
  }

  const reversed = reverse(str);

  return str.toLocaleLowerCase() === reversed.toLocaleLowerCase();
}
