const assert = require('assert');

const FileParser = require('../src/file-parser');

const expectedResult = [
  { word: 'a', count: 2, sentenceNumbers: [ 1, 1 ] },
  { word: 'all', count: 1, sentenceNumbers: [ 2 ] },
  { word: 'alphabetical', count: 1, sentenceNumbers: [ 2 ] },
  { word: 'an', count: 2, sentenceNumbers: [ 1, 2 ] },
  { word: 'appeared', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'arbitrary', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'bonus', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'concordance', count: 1, sentenceNumbers: [ 2 ] },
  { word: 'document', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'each', count: 2, sentenceNumbers: [ 1, 1 ] },
  { word: 'english', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'frequencies', count: 1, sentenceNumbers: [ 3 ] },
  { word: 'generate', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'given', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'ie', count: 1, sentenceNumbers: [ 2 ] },
  { word: 'in', count: 2, sentenceNumbers: [ 1, 1 ] },
  { word: 'label', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'labeled', count: 1, sentenceNumbers: [ 2 ] },
  { word: 'list', count: 1, sentenceNumbers: [ 2 ] },
  { word: 'numbers', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'occurrence', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'occurrences', count: 1, sentenceNumbers: [ 2 ] },
  { word: 'of', count: 1, sentenceNumbers: [ 2 ] },
  { word: 'program', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'sentence', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'text', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'that', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'the', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'which', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'will', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'with', count: 2, sentenceNumbers: [ 2, 1 ] },
  { word: 'word', count: 3, sentenceNumbers: [ 2, 2, 1 ] },
  { word: 'write', count: 1, sentenceNumbers: [ 1 ] },
  { word: 'written', count: 1, sentenceNumbers: [ 1 ] }
];

(async () => {
  const fileParser = new FileParser('/tests/test-text.txt');
  console.log('Started processing of the file. Please wait.');
  const result = await fileParser.startProcessing();
  assert.deepEqual(expectedResult, result);
  console.log('Test successfuly finished.');
})();
