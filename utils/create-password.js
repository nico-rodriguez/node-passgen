import { ALPHA, NUMBERS, SYMBOLS } from './constants.js';

export const createPassword = (
  length = 8,
  hasNumbers = true,
  hasSymbols = true
) => {
  let chars = ALPHA;
  hasNumbers && (chars += NUMBERS);
  hasSymbols && (chars += SYMBOLS);

  // Get <length> random characters from <char>
  // Use map to perform, for example, [0, 1, 2, ,3] => ['f', '5', '$', 'l']
  // And finally join the random characters
  const password = [...Array(length).keys()]
    .map(() => chars.charAt(Math.floor(Math.random() * chars.length)))
    .join('');

  return password;
};
