'use strict';
var parse = require('./parse');

module.exports = compileClient;
function compileClient(str, options){
  options = options || { filename: '' };
  return '(function (React) {\n  ' +
  parse(str, options).split('\n').join('\n  ') +
  '\n}(require("react")))';
}
