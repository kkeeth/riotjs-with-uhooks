(()=>{"use strict";var e,r,n,t={},o={};function i(e){var r=o[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=o[e]={id:e,loaded:!1,exports:{}};try{var c={id:e,module:n,factory:t[e],require:i};i.i.forEach((function(e){e(c)})),n=c.module,c.factory.call(n.exports,n,n.exports,c.require)}catch(e){throw n.error=e,e}return n.loaded=!0,n.exports}i.m=t,i.c=o,i.i=[],e=[],i.O=(r,n,t,o)=>{if(!n){var c=1/0;for(l=0;l<e.length;l++){for(var[n,t,o]=e[l],d=!0,a=0;a<n.length;a++)(!1&o||c>=o)&&Object.keys(i.O).every((e=>i.O[e](n[a])))?n.splice(a--,1):(d=!1,o<c&&(c=o));if(d){e.splice(l--,1);var u=t();void 0!==u&&(r=u)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,t,o]},i.F={},i.E=e=>{Object.keys(i.F).map((r=>{i.F[r](e)}))},i.d=(e,r)=>{for(var n in r)i.o(r,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce(((r,n)=>(i.f[n](e,r),r)),[])),i.u=e=>({229:"pages/home",521:"pages/about"}[e]+".bundle.js"),i.hu=e=>e+"."+i.h()+".hot-update.js",i.hmrF=()=>"runtime."+i.h()+".hot-update.json",i.h=()=>"fda36b772976afc75f77",i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="uhooks:",i.l=(e,t,o,c)=>{if(r[e])r[e].push(t);else{var d,a;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var s=u[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){d=s;break}}d||(a=!0,(d=document.createElement("script")).charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.setAttribute("data-webpack",n+o),d.src=e),r[e]=[t];var f=(n,t)=>{d.onerror=d.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],d.parentNode&&d.parentNode.removeChild(d),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:d}),12e4);d.onerror=f.bind(null,d.onerror),d.onload=f.bind(null,d.onload),a&&document.head.appendChild(d)}},i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e,r,n,t,o={},c=i.c,d=[],a=[],u="idle";function l(e){u=e;for(var r=[],n=0;n<a.length;n++)r[n]=a[n].call(null,e);return Promise.all(r)}function s(e){if(0===r.length)return e();var n=r;return r=[],Promise.all(n).then((function(){return s(e)}))}function f(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return l("check").then(i.hmrM).then((function(t){return t?l("prepare").then((function(){var o=[];return r=[],n=[],Promise.all(Object.keys(i.hmrC).reduce((function(e,r){return i.hmrC[r](t.c,t.r,t.m,e,n,o),e}),[])).then((function(){return s((function(){return e?h(e):l("ready").then((function(){return o}))}))}))})):l(v()?"ready":"idle")}))}function p(e){return"ready"!==u?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status")})):h(e)}function h(e){e=e||{},v();var r=n.map((function(r){return r(e)}));n=void 0;var o=r.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return l("abort").then((function(){throw o[0]}));var i=l("dispose");r.forEach((function(e){e.dispose&&e.dispose()}));var c,d=l("apply"),a=function(e){c||(c=e)},u=[];return r.forEach((function(e){if(e.apply){var r=e.apply(a);if(r)for(var n=0;n<r.length;n++)u.push(r[n])}})),Promise.all([i,d]).then((function(){return c?l("fail").then((function(){throw c})):t?h(e).then((function(e){return u.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):l("idle").then((function(){return u}))}))}function v(){if(t)return n||(n=[]),Object.keys(i.hmrI).forEach((function(e){t.forEach((function(r){i.hmrI[e](r,n)}))})),t=void 0,!0}i.hmrD=o,i.i.push((function(h){var v,m,y,g,b=h.module,E=function(n,t){var o=c[t];if(!o)return n;var i=function(r){if(o.hot.active){if(c[r]){var i=c[r].parents;-1===i.indexOf(t)&&i.push(t)}else d=[t],e=r;-1===o.children.indexOf(r)&&o.children.push(r)}else console.warn("[HMR] unexpected require("+r+") from disposed module "+t),d=[];return n(r)},a=function(e){return{configurable:!0,enumerable:!0,get:function(){return n[e]},set:function(r){n[e]=r}}};for(var f in n)Object.prototype.hasOwnProperty.call(n,f)&&"e"!==f&&Object.defineProperty(i,f,a(f));return i.e=function(e){return function(e){switch(u){case"ready":return l("prepare"),r.push(e),s((function(){return l("ready")})),e;case"prepare":return r.push(e),e;default:return e}}(n.e(e))},i}(h.require,h.id);b.hot=(v=h.id,m=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==v,_requireSelf:function(){d=m.parents.slice(),e=y?void 0:v,i(v)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,u){case"idle":n=[],Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,n)})),l("ready");break;case"ready":Object.keys(i.hmrI).forEach((function(e){i.hmrI[e](v,n)}));break;case"prepare":case"check":case"dispose":case"apply":(t=t||[]).push(v)}},check:f,apply:p,status:function(e){if(!e)return u;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:o[v]},e=void 0,g),b.parents=d,b.children=[],d=[],h.require=E})),i.hmrC={},i.hmrI={}})(),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var r=i.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={666:0};i.f.j=(r,n)=>{var t=i.o(e,r)?e[r]:void 0;if(0!==t)if(t)n.push(t[2]);else if(666!=r){var o=new Promise(((n,o)=>t=e[r]=[n,o]));n.push(t[2]=o);var c=i.p+i.u(r),d=new Error;i.l(c,(n=>{if(i.o(e,r)&&(0!==(t=e[r])&&(e[r]=void 0),t)){var o=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;d.message="Loading chunk "+r+" failed.\n("+o+": "+c+")",d.name="ChunkLoadError",d.type=o,d.request=c,t[1](d)}}),"chunk-"+r,r)}else e[r]=0},i.F.j=r=>{if((!i.o(e,r)||void 0===e[r])&&666!=r){e[r]=null;var n=document.createElement("link");i.nc&&n.setAttribute("nonce",i.nc),n.rel="prefetch",n.as="script",n.href=i.p+i.u(r),document.head.appendChild(n)}};var r,n,t,o,c={};function d(e){return new Promise(((r,n)=>{c[e]=r;var t=i.p+i.hu(e),o=new Error;i.l(t,(r=>{if(c[e]){c[e]=void 0;var t=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;o.message="Loading hot update chunk "+e+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function a(c){function d(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),c=o.id,d=o.chain,u=i.c[c];if(u&&(!u.hot._selfAccepted||u.hot._selfInvalidated)){if(u.hot._selfDeclined)return{type:"self-declined",chain:d,moduleId:c};if(u.hot._main)return{type:"unaccepted",chain:d,moduleId:c};for(var l=0;l<u.parents.length;l++){var s=u.parents[l],f=i.c[s];if(f){if(f.hot._declinedDependencies[c])return{type:"declined",chain:d.concat([s]),moduleId:c,parentId:s};-1===r.indexOf(s)&&(f.hot._acceptedDependencies[c]?(n[s]||(n[s]=[]),a(n[s],[c])):(delete n[s],r.push(s),t.push({chain:d.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function a(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}i.f&&delete i.f.jsonpHmr,r=void 0;var u={},l=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(i.o(n,p)){var h,v=n[p],m=!1,y=!1,g=!1,b="";switch((h=v?d(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(m=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":c.onDeclined&&c.onDeclined(h),c.ignoreDeclined||(m=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":c.onUnaccepted&&c.onUnaccepted(h),c.ignoreUnaccepted||(m=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":c.onAccepted&&c.onAccepted(h),y=!0;break;case"disposed":c.onDisposed&&c.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(m)return{error:m};if(y)for(p in s[p]=v,a(l,h.outdatedModules),h.outdatedDependencies)i.o(h.outdatedDependencies,p)&&(u[p]||(u[p]=[]),a(u[p],h.outdatedDependencies[p]));g&&(a(l,[h.moduleId]),s[p]=f)}n=void 0;for(var E,w=[],_=0;_<l.length;_++){var k=l[_],I=i.c[k];I&&(I.hot._selfAccepted||I.hot._main)&&s[k]!==f&&!I.hot._selfInvalidated&&w.push({module:k,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var r;t.forEach((function(r){delete e[r]})),t=void 0;for(var n,o=l.slice();o.length>0;){var c=o.pop(),d=i.c[c];if(d){var a={},s=d.hot._disposeHandlers;for(_=0;_<s.length;_++)s[_].call(null,a);for(i.hmrD[c]=a,d.hot.active=!1,delete i.c[c],delete u[c],_=0;_<d.children.length;_++){var f=i.c[d.children[_]];f&&(r=f.parents.indexOf(c))>=0&&f.parents.splice(r,1)}}}for(var p in u)if(i.o(u,p)&&(d=i.c[p]))for(E=u[p],_=0;_<E.length;_++)n=E[_],(r=d.children.indexOf(n))>=0&&d.children.splice(r,1)},apply:function(e){for(var r in s)i.o(s,r)&&(i.m[r]=s[r]);for(var n=0;n<o.length;n++)o[n](i);for(var t in u)if(i.o(u,t)){var d=i.c[t];if(d){E=u[t];for(var a=[],f=[],p=[],h=0;h<E.length;h++){var v=E[h],m=d.hot._acceptedDependencies[v],y=d.hot._acceptedErrorHandlers[v];if(m){if(-1!==a.indexOf(m))continue;a.push(m),f.push(y),p.push(v)}}for(var g=0;g<a.length;g++)try{a[g].call(null,E)}catch(r){if("function"==typeof f[g])try{f[g](r,{moduleId:t,dependencyId:p[g]})}catch(n){c.onErrored&&c.onErrored({type:"accept-error-handler-errored",moduleId:t,dependencyId:p[g],error:n,originalError:r}),c.ignoreErrored||(e(n),e(r))}else c.onErrored&&c.onErrored({type:"accept-errored",moduleId:t,dependencyId:p[g],error:r}),c.ignoreErrored||e(r)}}}for(var b=0;b<w.length;b++){var _=w[b],k=_.module;try{_.require(k)}catch(r){if("function"==typeof _.errorHandler)try{_.errorHandler(r,{moduleId:k,module:i.c[k]})}catch(n){c.onErrored&&c.onErrored({type:"self-accept-error-handler-errored",moduleId:k,error:n,originalError:r}),c.ignoreErrored||(e(n),e(r))}else c.onErrored&&c.onErrored({type:"self-accept-errored",moduleId:k,error:r}),c.ignoreErrored||e(r)}}return l}}}self.webpackHotUpdateuhooks=(e,r,t)=>{for(var d in r)i.o(r,d)&&(n[d]=r[d]);t&&o.push(t),c[e]&&(c[e](),c[e]=void 0)},i.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(a)),i.o(n,e)||(n[e]=i.m[e])},i.hmrC.jsonp=function(c,u,l,s,f,p){f.push(a),r={},t=u,n=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],c.forEach((function(n){i.o(e,n)&&void 0!==e[n]&&(s.push(d(n)),r[n]=!0)})),i.f&&(i.f.jsonpHmr=function(n,t){r&&!i.o(r,n)&&i.o(e,n)&&void 0!==e[n]&&(t.push(d(n)),r[n]=!0)})},i.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(i.p+i.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},i.O.j=r=>0===e[r];var u=(r,n)=>{var t,o,[c,d,a]=n,u=0;for(t in d)i.o(d,t)&&(i.m[t]=d[t]);if(a)var l=a(i);for(r&&r(n);u<c.length;u++)o=c[u],i.o(e,o)&&e[o]&&e[o][0](),e[c[u]]=0;return i.O(l)},l=self.webpackChunkuhooks=self.webpackChunkuhooks||[];l.forEach(u.bind(null,0)),l.push=u.bind(null,l.push.bind(l))})()})();
//# sourceMappingURL=runtime.bundle.js.map