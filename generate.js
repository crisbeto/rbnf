var cldr = require('cldr');
var beautify = require('js-beautify').js_beautify;
var fs = require('fs');

function generateAllRuleFiles(dest) {
    var locales = cldr.localeIds;
    locales.forEach(function(locale) {
        generateRuleFile(locale,dest);
    });
}

function generateRuleFile(locale,dest) {
    var src = ordinalRule(locale);
    fs.writeFileSync(dest+'/'+locale+'.js',src,'utf8');
}

function serialize(js) {
    var index = 0;
    var map = {};

    var src = JSON.stringify(js, function(key, value) {
        if (typeof value === 'function') {
            var mapkey = '@@@'+index+'@@@';
            index += 1;
            map[mapkey] = value.toString();
            return mapkey;
        }
        return value;
    });

    src = src.replace(/"(@@@.*?@@@)"/g,function($0,$1) {
        return map[$1];
    });

    src = beautify(src, {
        indent_size: 4
    });

    return src;
}

function ordinalRule(locale) {
    return rbnfRules(locale,['renderDigitsOrdinal']);
}

function rbnfRules(locale,types) {
    var fns = cldr.extractRbnfFunctionByType(locale,types);
    src = serialize(fns);
    return src;
}

module.exports = generateAllRuleFiles;