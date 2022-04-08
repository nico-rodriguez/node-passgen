#!/usr/bin/env node
import chalk from 'chalk';
import clipboardy from 'clipboardy';
import { program } from 'commander';
import { createPassword } from './utils/create-password.js';
import {
  estimatedCrackingTime,
  passwordEntropy,
} from './utils/password-entropy.js';
import { savePassword } from './utils/save-password.js';

program.version('1.0.0.0').description('Simple password generator');

program
  .option(
    '-l, --length <number>',
    'length of the password',
    // Parse the received argument from string to number
    (v, p) => parseInt(v, 10),
    8
  )
  .option('-s, --save', 'save the password to passwords.txt')
  .option('-nn, --no-numbers', 'do not include numbers')
  .option('-ns, --no-symbols', 'do not include special characters');

program.parse();

const { length, save, numbers, symbols } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);

if (save) {
  savePassword(generatedPassword);
}

// Copy password to the clipboard
clipboardy.writeSync(generatedPassword);

console.log(chalk.blue('Generated password: ') + chalk.bold(generatedPassword));

const entropy = passwordEntropy(generatedPassword, numbers, symbols);
console.log(chalk.yellow('Password entropy: ') + chalk.bold(entropy));
console.log(
  chalk.yellow('Estimated cracking time: ') +
    chalk.bold(estimatedCrackingTime(entropy))
);
console.log(chalk.yellow('Password copied to the clipboard'));
