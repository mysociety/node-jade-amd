define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow) {
var attrs = jade.attrs, escape = jade.escape, rethrow = jade.rethrow;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<h1>Hello ' + escape((interp = locals.name || 'World') == null ? '' : interp) + '!</h1>');
}
return buf.join("");
};
});
