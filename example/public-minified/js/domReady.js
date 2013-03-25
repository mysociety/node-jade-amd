/**
 * @license RequireJS domReady 1.0.0 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */

define([],function(){function a(e){for(var t=0,r;r=e[t];t++)r(n)}function f(){var e=r,n=i;t&&(e.length&&(r=[],a(e)),s.resourcesDone&&n.length&&(i=[],a(n)))}function l(){t||(t=!0,u&&clearInterval(u),f())}function c(e){return t?e(n):r.push(e),c}var e=typeof window!="undefined"&&window.document,t=!e,n=e?document:null,r=[],i=[],s=requirejs||require||{},o=s.resourcesReady,u;return"resourcesReady"in s&&(s.resourcesReady=function(e){o&&o(e),e&&f()}),e&&(document.addEventListener?(document.addEventListener("DOMContentLoaded",l,!1),window.addEventListener("load",l,!1)):window.attachEvent&&(window.attachEvent("onload",l),self===self.top&&(u=setInterval(function(){try{document.body&&(document.documentElement.doScroll("left"),l())}catch(e){}},30))),document.readyState==="complete"&&l()),c.withResources=function(e){return t&&s.resourcesDone?e(n):i.push(e),c},c.version="1.0.0",c.load=function(e,t,n,r){r.isBuild?n(null):c(n)},c});