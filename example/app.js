var express    = require('express'),
    jade       = require('jade'),
    fs         = require('fs'),
    toAmdString           = require('../lib/jade-amd').toAmdString,
    jadeRuntimeAmdString  = require('../lib/jade-amd').jadeRuntimeAmdString,
    jadeAmdMiddleware     =  require('../lib/jade-amd').jadeAmdMiddleware;

var app = module.exports = express.createServer();


app.configure(function(){
  app.use(express.logger('dev'));
  app.set('view engine', 'jade');
  app.set('views', __dirname + '/views');
  app.set('view options', { layout: false, pretty: true, });
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.favicon());

  // In this example we'll use a boolean variable to decide what mode to run in. 
  // In a proper app you'd probably decide this in a more felxible way - in a 
  // `config` file for example.
  var inDev = app.settings.env == 'development';

  // Trap all the requests for compiled templates and serve them from the jade 
  // on disk. The first argument is where this middleware is mounted - and 
  // should match the path to the template files used from the browser.
  //
  // By default it looks in the app.set('views') directory for the templates. 
  // Put this BEFORE the `static` middleware or it will serve the javascript 
  // instead.
  if (inDev) {
    app.use( '/js/templates/', jadeAmdMiddleware({}) );
  }

  // Choose which directory to serve static assets from. When developing use 
  // 'public' which has all the individual files in. When not developing (ie 
  // production or testing) use the output from the build process - which 
  // minifies and combines all the files together.
  var publicDir         = __dirname + '/public';
  var publicMinifiedDir = __dirname + '/public-minified';
  app.use(express.static( inDev ? publicDir : publicMinifiedDir ));


  app.use(app.router);

  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.get('/', function (req,res) {
  
  fs.readFile(
    __dirname + '/views/sample.jade',
    function(err, sampleJade) {
      if (err) throw err;

      var sampleFunction = jade.compile(sampleJade, {client: true, compileDebug: false })  

      res.locals({
        sampleJade          : sampleJade,
        sampleHTML          : jade.compile(sampleJade)({}),
        sampleFunction      : sampleFunction.toString(),
        sampleAMD           : toAmdString(sampleFunction),
        jadeRuntimeAmdString: jadeRuntimeAmdString,
      });

      res.render('index');
    }
  );
});

app.listen(3000);
console.log("Example jade-amd Express app started: http://localhost:3000");
