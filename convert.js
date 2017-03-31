const fs = require('fs');
const path = require('path');
const beautify = require('js-beautify').js_beautify;
const rulesDir = './rules/';
const simpleNegativeExpr = /if \(n < 0\) return "(.*?);/g;
const simplePositiveExpr = /if \(n >= 0\)/g;

fs.readdirSync(rulesDir).forEach(name => {
  let contents = fs
    .readFileSync(path.join(rulesDir, name))
    .toString()
    .replace(/(\+ )?this\.renderNumber\(([^\)]+)\)( \+)?/g, '');

  if (simpleNegativeExpr.test(contents) && simplePositiveExpr.test(contents)) {
    contents = contents.replace(simpleNegativeExpr, '').replace(simplePositiveExpr, '');
  }

  fs.writeFile(path.join(rulesDir, name), beautify('module.exports = ' + contents, {
    indent_level: 2
  }));
});