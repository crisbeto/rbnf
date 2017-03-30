const fs = require('fs');
const path = require('path');
const rulesDir = './rules/';

fs.readdirSync(rulesDir).forEach(name => {
  let contents = fs
    .readFileSync(path.join(rulesDir, name))
    .toString()
    .replace(/(\+ )?this\.renderNumber\(([^\)]+)\)( \+)?/g, '');

  fs.writeFile(path.join(rulesDir, name), 'module.exports = ' + contents);
});