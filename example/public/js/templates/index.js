define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><head><title>jade-amd example app</title><script');
buf.push(attrs({ 'src':('/js/require.js'), 'data-main':("/js/main"), 'type':('text/javascript'), 'charset':('utf-8') }, {"src":true,"data-main":true,"type":true,"charset":true}));
buf.push('></script></head><body><h1>Sample app</h1><p>This is an example app that demonstrates the wrapping that occurs</p><h2>Sample Jade</h2><pre>' + escape((interp =  sampleJade ) == null ? '' : interp) + '</pre><h2>Jade as HTML (done on server)</h2><pre>' + escape((interp =  sampleHTML ) == null ? '' : interp) + '</pre><h2>Jade as HTML (rendered in client)</h2><pre');
buf.push(attrs({ 'id':('rendered_in_client') }, {}));
buf.push('>ERROR - this should be replaced by the rendered content</pre><h2>Compiled Jade client function</h2><pre>' + escape((interp =  sampleFunction ) == null ? '' : interp) + '</pre><h2>AMD wrapped compiled Jade client function</h2><pre>' + escape((interp =  sampleAMD ) == null ? '' : interp) + '</pre><h2>AMD wrapped Jade runtime</h2><pre>' + escape((interp =  jadeRuntimeAmdString ) == null ? '' : interp) + '</pre></body>');
}
return buf.join("");
};
});
