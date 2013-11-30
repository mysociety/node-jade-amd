var jade = require('jade');
var fs = require('fs');
var url = require('url');

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

exports.version = require("../package.json").version;

exports.toAmdString = function (fn, options) {
  // make this optional
  options = options || {};

  var jadeRuntime = options.jadeRuntime || 'jadeRuntime';

  // top and tail the function as a string
  var amdString = "define(['" + jadeRuntime + "'], function(jade) {\nreturn " + fn.toString() + ";\n});\n";

  return amdString;
};

var jadeRuntimePath = require.resolve('jade/runtime');
var jadeRuntimeSource = fs.readFileSync(jadeRuntimePath);

exports.jadeRuntimeAmdString = "define([], function() {\n"
  // 0.25.0 has no 'var' at start, 0.26.0 does
  + ( /^\s*var /.test(jadeRuntimeSource) ? '' : 'var jade = ' )
  + jadeRuntimeSource
  + "\nreturn jade;\n});\n";

exports.jadeAmdMiddleware = function (options) {
  return function (req, res, next) {
    var url_path = url.parse(req.url).pathname;
    var jade_path = url_path.replace(/\.js$/, '.jade');
    var views_dir = options.views || req.app.set('views');
    var template_abs_path = views_dir + jade_path;

    fs.readFile(template_abs_path, function (err, template) {
      if (err) return next(err);

      res.header('content-type', 'application/javascript');

      res.end(
        exports.toAmdString(
          jade.compile(
            template,
            { client: true, compileDebug: false, filename : template_abs_path }
          )
        )
      );
    });
  }
};
