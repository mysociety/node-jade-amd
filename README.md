# Jade to AMD conversion helpers

This module lets you use Jade easily on the browser in an AMD environment - like RequireJS.

It provides:

  * a method to return an AMD wrapped Jade runtime.js
  * a method to compile Jade templates to AMD wrapped functions
  * connect middleware to serve the complied templates for development
  * example of a build that puts files in the right place for something like RequireJS to bundle
  * Jade version agnostic - it uses the Jade that you've npm installed.


## Installation

    npm install jade-amd


## Introduction

See the `README.md` file in the `example` folder. It contains a guided tour through all the moving parts.


## Components

These are the interesting bits:


### Connect middleware

The middleware is there for when you are developing. It intercepts requests for template js and compiles and serves the templates directly. This means that you don't need to make any changes to the browser-side code.

    var jadeAmd = require('jade-amd');
    app.use( '/js/templates/', jadeAmd.jadeAmdMiddleware({}) );


### Jade Runtime

Jade ships with a `runtime.js` that lets you run precompiled templates on the client with out requiring the whole of the Jade templating system. This script needs to be wrapped to work with AMD loaders such as RequireJS:

    # wrap Jade's runtime.js in AMD semantics
    jade-amd --runtime > public/js/jadeRuntime.js


### Compile and wrap the templates

Goes through all the `.jade` files and compiles them to JavaScript, and then wraps them for AMD loaders. See the `README.md` and `Makefile` in the `example` folder for more details on how to integrate into your project.

    # compile and wrap you templates
    jade-amd --out public/js/templates views/


### Using the Jade templates on the browser.

Assuming that you have used RequireJS your browser JavaScript will now look something like this:

    require([ 'templates/person' ], function(personTemplate) {
      var rendered_content = personTemplate({ name: 'Joe Bloggs' });
    });

And you can use exactly the same template on the server side!


## Inspiration

 * https://github.com/visionmedia/jade/issues/634
 * https://github.com/pgherveou/squid/blob/master/src/lib/JadeBuilder.coffee

