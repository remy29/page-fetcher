const request = require('request');
const { host, path } = require('./constants');
const fs = require('fs');

const fetcher = function() {
  request(host, (error, response, body) => {
    fs.writeFile(path, body, (err) => {
      if (err) console.log(err);
    });
    const stats = fs.statSync('index.html');
    const bytes = stats['size'];
    console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
  });
};

fetcher();