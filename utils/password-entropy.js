import { ALPHA, NUMBERS, SYMBOLS } from './constants.js';

export const passwordEntropy = (password, numbers = true, symbols = true) => {
  let alphabet = ALPHA;
  numbers && (alphabet += NUMBERS);
  symbols && (alphabet += SYMBOLS);

  return (password.length * Math.log2(alphabet.length)).toFixed(2);
};

export const estimatedCrackingTime = (entropy, crackingRate = 1e11) => {
  return parseTime((Math.pow(2, entropy) / crackingRate).toFixed(0));
};

const parseTime = (seconds) => {
  if (seconds < 60) {
    return `${seconds} seconds`;
  } else {
    const minutes = Math.round(seconds / 60);
    if (seconds / 60 < 60) {
      return `${seconds % 60} minutes`;
    } else {
      const hours = Math.round(minutes / 60);
      if (hours < 24) {
        return `${hours} hours`;
      } else {
        const days = Math.round(hours / 24);
        if (days < 365) {
          return `${days} days`;
        } else {
          const years = Math.round(days / 365);
          return `${years} years`;
        }
      }
    }
  }
};
