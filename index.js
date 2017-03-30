module.exports = function(locale) {
  return require('./rules/' + locale.toLowerCase().replace(/-/g, '_'));
}
