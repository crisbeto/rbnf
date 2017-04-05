const fs = require('fs');
const path = require('path');
const del = require('del');
const beautify = require('js-beautify').js_beautify;

const inDir = './original-rules/';
const outDir = './rules/';

del.sync(outDir);
fs.mkdirSync(outDir);

/**
 * Generates Numeral.js-compatible ordinal functions from CLDR data. This means stripping away
 * the expressions that add the number itself and that include the minus sign.
 * Note that doing this with Regex isn't the best idea, but it should get the job
 * done since the expressions are pretty simple.
 */
fs.readdirSync(inDir).forEach(name => {
  let contents = fs
    .readFileSync(path.join(inDir, name))
    .toString()
    .replace(/(\+ )?this\.renderNumber\(([^\)]+)\)( \+)?/g, '')
    .replace(/if \(n < 0\) return "(.*?)" \+/g, 'if (n < 0) return')
    .replace(/"-|−"/g, '"'); // replaces minus sign that comes after the character

  fs.writeFile(path.join(outDir, name), beautify('module.exports = ' + contents, {
    indent_level: 2
  }));
});
