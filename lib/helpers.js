export const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng eftir whitespace
 * stöfum (bil, nýlína o.fl.).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
export function split(str) {
  if (!isString(str)) {
    return [];
  }

  return str.split(/\s+/).filter(Boolean);
}
console.assert(
  split('halló heimur\nhæ').length === 3,
  'splitOnWhitespace: skilar fylki af lengd 3 ef þrjú orð eru gefin',
);