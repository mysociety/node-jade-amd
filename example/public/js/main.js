require(
  {    

    baseUrl: '/js',
    
    paths: {
    }
  }
);


require([
  'templates/sample',  // the template function (note it in turns requires jadeRuntime so you don't need to)
  'domReady!'          // don't run until the dom is ready
  ],
  function(sample) {
    var pre = document.getElementById('rendered_in_client');
    pre.innerHTML = "About to run renderer";
    var html = sample({});
    
    // what horrid escaping - who wrote this code!?!
    pre.innerHTML = html.replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
);
