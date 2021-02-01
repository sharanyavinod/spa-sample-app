/*! For license information please see main.b2f8a426.chunk.js.LICENSE.txt */
(this["webpackJsonpspa-sample-app"]=this["webpackJsonpspa-sample-app"]||[]).push([[0],{25:function(e,t,n){e.exports=n(66)},30:function(e,t,n){},31:function(e,t,n){},43:function(e,t,n){var a,r=n(9),o=n(8);(function(){try{return"undefined"!==typeof self}catch(e){return!1}})()&&self,a=function(){return function(){"use strict";var e={"./src/ComponentMapping.ts":function(e,t,n){var a;n.r(t),n.d(t,{ComponentMapping:function(){return i},MapTo:function(){return c}});var i=function(){function e(){return r(this,e),a||(a=this),a}return o(e,[{key:"map",value:function(t,n){e.map(t,n)}},{key:"get",value:function(t){return e.get(t)}}],[{key:"map",value:function(e,t){var n=this;e&&t&&("string"===typeof e?[e]:e).forEach((function(e){n.mapping[e]=t}))}},{key:"get",value:function(e){return this.mapping[e]}},{key:"instance",get:function(){return new this}}]),e}();i.mapping={};var c=function(e){return function(t){return i.instance.map(e,t)}}},"./src/types.ts":function(e,t,n){n.r(t),n.d(t,{ComponentMapping:function(){return a.ComponentMapping},MapTo:function(){return a.MapTo}});var a=n("./src/ComponentMapping.ts")}},t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}return n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n("./src/types.ts")}()},e.exports=a()},5:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(18),i=n.n(o),c=(n(30),n(31),n(2)),u=n(5),s=n.n(u),l={emptyLabel:"Text",isEmpty:function(e){return!e||!e.text||e.text.trim().length<1},resourceType:"wknd-spa-react/components/text"},p=function(e){var t=e.cqPath,n=e.richText,a=e.text;return n?r.a.createElement("div",{className:"aem_text",id:t.substr(t.lastIndexOf("/")+1),"data-rte-editelement":!0,dangerouslySetInnerHTML:{__html:a}}):r.a.createElement("div",{className:"aem_text"},a)},f=p,m=(Object(c.withMappable)(p,l),function(e){var t=e.items,n=function e(t){var n;if(t&&t.url)return t.children&&t.children.length&&(n=r.a.createElement("ul",null,t.children&&t.children.map((function(t){return e(t)})))),r.a.createElement("li",{key:t.url},function(e){if(e&&e.url&&e.title)return r.a.createElement("a",{className:s.a.nav_item,href:e.url},e.title)}(t),n)};return r.a.createElement("header",null,r.a.createElement("nav",null,r.a.createElement("ul",{className:s.a.nav_container},t&&t.map((function(e){return n(e)})))))}),h=Object(c.withMappable)(c.Page);Object(c.MapTo)("wknd-spa-react/components/text")(f,l),Object(c.MapTo)("wknd-spa-react/components/header")(m),Object(c.MapTo)("wcm/foundation/components/responsivegrid")(c.ResponsiveGrid);var d=function(){return r.a.createElement("div",{className:"sample-content"},r.a.createElement("h4",null,"SPA Sample Content"),r.a.createElement("p",null,"A towel, [The Hitchhiker's Guide to the Galaxy] says, is about the most massively useful thing an interstellar hitchhiker can have. Partly it has great practical value. You can wrap it around you for warmth as you bound across the cold moons of Jaglan Beta; you can lie on it on the brilliant marble-sanded beaches of Santraginus V, inhaling the heady sea vapors; you can sleep under it beneath the stars which shine so redly on the desert world of Kakrafoon; use it to sail a miniraft down the slow heavy River Moth; wet it for use in hand-to-hand-combat; wrap it round your head to ward off noxious fumes or avoid the gaze of the Ravenous Bugblatter Beast of Traal (such a mind-boggingly stupid animal, it assumes that if you can't see it, it can't see you); you can wave your towel in emergencies as a distress signal, and of course dry yourself off with it if it still seems to be clean enough."))},y=function(){return r.a.createElement("main",{style:{margin:"10px"}},r.a.createElement("h2",null,"SPA + AEM Leaf Component"),r.a.createElement(d,null),r.a.createElement("h4",null,"AEM Page"),r.a.createElement(h,{pagePath:"/content/wknd-spa-react/us/en/home"}))},g=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(22),w=n(4),b=n(19),E=n(20),M=n(24),x=n(23),k={headers:{Authorization:"Basic YWRtaW46YWRtaW4="}},j=new(function(e){Object(M.a)(n,e);var t=Object(x.a)(n);function n(){return Object(b.a)(this,n),t.apply(this,arguments)}return Object(E.a)(n,[{key:"fetch",value:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){if(!e){var t="Fetching model rejected for path: "+e;return Promise.reject(new Error(t))}var n="".concat(this._apiHost).concat(e);return fetch(n,k).then((function(e){if(e.status>=200&&e.status<300)return e.json();var t=new Error("while fetching the model for url: "+n,e.statusText||e.status);return t.response=e,Promise.reject(t)}))}))}]),n}(w.ModelClient))("http://localhost:4502");w.ModelManager.initializeAsync({modelClient:j}),i.a.render(r.a.createElement(v.a,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.b2f8a426.chunk.js.map