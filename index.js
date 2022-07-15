const FileParser = require('./src/file-parser');

(async () => {
  try {
    const filename = process.argv[2];
    if (!filename) {
      console.error('Please provide the filepath as a command line argument.');
      process.exit(1);
    }
    const fileParser = new FileParser(filename);
    console.log('Started processing of the file. Please wait.');
    const result = await fileParser.startProcessing();
    console.log('Results:', result);
  } catch (err) {
    console.log('Something went wrong.');
    throw err;
  }
})();
