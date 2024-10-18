import { isString, split } from './helpers.js';

export function shortest(str) {
    if (!isString(str)) {
      return null;
    }
  
    const words = split(str, ' ');
  
    let shortestWord = '';
    for (const word of words) {
      if (shortestWord === '' || word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
    return shortestWord;
  }
