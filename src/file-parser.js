const path = require('path');
const nlp = require('compromise');
const { streamFile } = require('compromise-speed');

const WordsHashMap = require('./words-hash-map');

nlp.extend(streamFile);

class FileParser {
  constructor (filename) {
    this.filename = filename;
    this.wordsHashMap = new WordsHashMap();
  }

  async startProcessing () {
    await nlp.streamFile(path.join(__dirname, '..', this.filename), (batch) => {
      const termList = batch.termList();
      termList.forEach(term => {
        this.wordsHashMap.addWord(term.normal, term.index[0]);
      });
    });
    return this.wordsHashMap.getResult();
  }
}

module.exports = FileParser;
