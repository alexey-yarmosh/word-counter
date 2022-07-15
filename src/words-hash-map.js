const WORD_REGEX = /^\w+$/;

class WordsHashMap {
  constructor () {
    this.hashMap = {}
  }

  addWord (word, index) {
    const wordField = this.hashMap[word];
    if (!WORD_REGEX.test(word)) {
      return;
    }
    if (!wordField) {
      this.hashMap[word] = {
        word,
        count: 1,
        sentenceNumbers: [index + 1]
      }
    } else {
      wordField.count += 1;
      wordField.sentenceNumbers.push(index + 1);
    }
  }

  getResult () {
    return Object.values(this.hashMap).sort((term1, term2) => term1.word > term2.word ? 1 : -1);
  }
}

module.exports = WordsHashMap;
