# word-counter

## Prerequirements

1. Node.js v14 or higher (use `node -v` to check your version)
2. run `npm i` from the root of the repo

## Usage

Run `npm start [filepath]` command where [filepath] is a path relative to the root of the repository.

Example with the `text.txt` file stored in this repo:

`npm start text.txt`

## Alternative usage

Run `node index.js [filepath]` command.

## Run test

Run `npm test` command.

## Timings

- 1h15m - implement key algorithm and choose between custom/library solution
- 20m - add simple test
- 1h - move from sync read of file to streaming and compare memory consumption
- 15m - beatify and divide the code into modules
- 20m - add CLI interface
- 15m - write documentation
