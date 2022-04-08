import fs from 'fs';
import path from 'path';
import os from 'os';
import { fileURLToPath } from 'url';

import chalk from 'chalk';

export const savePassword = (password) => {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  fs.open(
    path.join(dirname, '../', 'passwords.txt'),
    'a',
    parseInt('0644', 8),
    (error, fd) => {
      fs.write(fd, password + os.EOL, null, 'utf-8', () => {
        fs.close(fd, () => {
          console.log(chalk.green('Password saved to passwords.txt'));
        });
      });
    }
  );
};
