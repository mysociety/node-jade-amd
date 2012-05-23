var jade = require('jade'),
    fs   = require('fs');

/**
 * Wrap the output of `jade.compile` in an AMD string.
 *
 * Options:
 * 
 *   - `jadeRuntime` the name to use in the define, default to 'jadeRuntime'
 *
 * @param {Function} fn
 * @param {Options} options
 * @return {String}
 * @api public
 */

exports.toAmdString = function (fn, options) {

  // make this optional
  options = options || {};

  var jadeRuntime = options.jadeRuntime || 'jadeRuntime';
  
  // top and tail the function as a string
  var amdString = "define(['" + jadeRuntime +"'], function(jade) {\nreturn " + fn.toString() + ";\n});\n";
  
  return amdString;
  
};

var jadeRuntimePath   = require.resolve('jade/runtime');
var jadeRuntimeSource = fs.readFileSync( jadeRuntimePath );

exports.jadeRuntimeAmdString = "define([], function() {\nvar "
  + jadeRuntimeSource
  + "\nreturn jade;\n});\n";  


