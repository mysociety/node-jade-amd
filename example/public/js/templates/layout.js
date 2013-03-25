define(['jadeRuntime'], function(jade) {
return function anonymous(locals, attrs, escape, rethrow, merge) {
attrs = attrs || jade.attrs; escape = escape || jade.escape; rethrow = rethrow || jade.rethrow; merge = merge || jade.merge;
var buf = [];
with (locals || {}) {
var interp;
buf.push('<!DOCTYPE html><head><title>jade-amd example app</title><script>var require = { urlArgs: \'cacheBuster\' };  </script><script src="/js/require.js" data-main="/js/main" type="text/javascript" charset="utf-8"></script></head><body><p>content goes here</p></body>');
}
return buf.join("");
};
});
