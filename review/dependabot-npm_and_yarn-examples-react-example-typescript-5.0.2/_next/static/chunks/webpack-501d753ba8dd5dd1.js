!function(){"use strict";var e,t,n,r,c,f,a,o={},u={};function i(e){var t=u[e];if(void 0!==t)return t.exports;var n=u[e]={exports:{}},r=!0;try{o[e](n,n.exports,i),r=!1}finally{r&&delete u[e]}return n.exports}i.m=o,e=[],i.O=function(t,n,r,c){if(n){c=c||0;for(var f=e.length;f>0&&e[f-1][2]>c;f--)e[f]=e[f-1];e[f]=[n,r,c];return}for(var a=1/0,f=0;f<e.length;f++){for(var n=e[f][0],r=e[f][1],c=e[f][2],o=!0,u=0;u<n.length;u++)a>=c&&Object.keys(i.O).every(function(e){return i.O[e](n[u])})?n.splice(u--,1):(o=!1,c<a&&(a=c));if(o){e.splice(f--,1);var d=r();void 0!==d&&(t=d)}}return t},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,{a:t}),t},i.d=function(e,t){for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce(function(t,n){return i.f[n](e,t),t},[]))},i.u=function(e){return"static/chunks/"+e+"."+({195:"ce35a9ae297cb4c6",211:"a414c5ae12d81b73",214:"0678a34e5db0462d",679:"456acc848dc4160a",1042:"7e5c35ae9d055ca5",2164:"061f79f64a58000f",2574:"11cd357f37683691",2884:"8d66a7fc99a5b8a5",3436:"8e0b25d824b495dd",3473:"86d8eb6f53930f9d",3565:"5066e2a54328cd4f",3573:"e4315d72e1397d46",3643:"39d0d52c153e6a5b",3681:"08c48804e0cba4d3",3870:"a7adfe6d0ab1a30a",4002:"425912eaaab9f53c",4414:"cf31c4203e318804",4540:"598e41d5508db752",5463:"7ed3055b337590c9",6039:"68eb39d67be6ee29",6339:"be25877fe7711aa2",6713:"c2129374d4a0ef64",6846:"ce8991869e528bfa",6900:"1d7b2ed333d3dd76",6934:"341fc1afdd01e482",7111:"b79a7c34d01148c5",7136:"6b267646fd0fd285",7182:"899c3e6ea3a56cb1",7542:"8482f98e692582cf",7635:"58277449747dbe43",7645:"572419c420c8d7f7",7669:"a66556c80b033dd1",8308:"b08569ab5f8a7539",8624:"1681b51be16b362e",8695:"ba51a1d367d12aec",9583:"76bcb89d2c698912",9631:"62df2b79e8831077"})[e]+".js"},i.miniCssF=function(e){return"static/css/"+({2888:"91b9ce21c6bca82d",9883:"adbea44a33624551"})[e]+".css"},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t={},n="_N_E:",i.l=function(e,r,c,f){if(t[e]){t[e].push(r);return}if(void 0!==c)for(var a,o,u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var b=u[d];if(b.getAttribute("src")==e||b.getAttribute("data-webpack")==n+c){a=b;break}}a||(o=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,i.nc&&a.setAttribute("nonce",i.nc),a.setAttribute("data-webpack",n+c),a.src=i.tu(e)),t[e]=[r];var s=function(n,r){a.onerror=a.onload=null,clearTimeout(l);var c=t[e];if(delete t[e],a.parentNode&&a.parentNode.removeChild(a),c&&c.forEach(function(e){return e(r)}),n)return n(r)},l=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),o&&document.head.appendChild(a)},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.tt=function(){return void 0===r&&(r={createScriptURL:function(e){return e}},"undefined"!=typeof trustedTypes&&trustedTypes.createPolicy&&(r=trustedTypes.createPolicy("nextjs#bundler",r))),r},i.tu=function(e){return i.tt().createScriptURL(e)},i.p="/mono/review/dependabot-npm_and_yarn-examples-react-example-typescript-5.0.2/_next/",c={2272:0},i.f.j=function(e,t){var n=i.o(c,e)?c[e]:void 0;if(0!==n){if(n)t.push(n[2]);else if(2272!=e){var r=new Promise(function(t,r){n=c[e]=[t,r]});t.push(n[2]=r);var f=i.p+i.u(e),a=Error();i.l(f,function(t){if(i.o(c,e)&&(0!==(n=c[e])&&(c[e]=void 0),n)){var r=t&&("load"===t.type?"missing":t.type),f=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+f+")",a.name="ChunkLoadError",a.type=r,a.request=f,n[1](a)}},"chunk-"+e,e)}else c[e]=0}},i.O.j=function(e){return 0===c[e]},f=function(e,t){var n,r,f=t[0],a=t[1],o=t[2],u=0;if(f.some(function(e){return 0!==c[e]})){for(n in a)i.o(a,n)&&(i.m[n]=a[n]);if(o)var d=o(i)}for(e&&e(t);u<f.length;u++)r=f[u],i.o(c,r)&&c[r]&&c[r][0](),c[r]=0;return i.O(d)},(a=self.webpackChunk_N_E=self.webpackChunk_N_E||[]).forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))}();