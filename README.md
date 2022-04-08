# Node password generator

## About

A Node random password generator. It generates a random password with a given length from alphabetic, numeric and special characters.
It allows for saving the passwords in a `passwords.txt` file (it appends new passwords if the file already exists). Also, it displays
an entropy value used for estimating the cracking time.

Note: password cracking times depend upon several factors, not entropy alone. This is just a toy example.

## Usage

```bash
$ passgen -h
Usage: passgen [options]

Simple password generator

Options:
  -V, --version          output the version number
  -l, --length <number>  length of the password (default: 8)
  -s, --save             save the password to passwords.txt
  -nn, --no-numbers      do not include numbers
  -ns, --no-symbols      do not include special characters
  -h, --help             display help for command
```

## Sym-linking

Run inside the project folder run `npm link` for generating a symlink. This allows running the program from anywhere in the filesystem with the command `passgen`.

Run `npm unlink passgen` for un-linking.

## Running

Either run the script with `node index.js` or create a link as explained above and use the `passgen` command.

## Acknowledgement

Thanks to [Brad Traversy](https://github.com/bradtraversy) for his [tutorial](https://www.youtube.com/watch?v=3Xx83JAktXk). This project adds the entropy and cracking time computations.
