let e;function t(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},i=r.parcelRequire28bf;function o(e){let[t,r]=e.split(",").reduce((e,t)=>{let[r,n]=e;return void 0===n?[r,Number(t)]:(r.push({x:n,y:Number(t)}),[r,void 0])},[[],void 0]);if(t.length<3)throw Error("too few coordinates (expected at least six)");if(void 0!==r)throw Error("odd number of coordinates (expected even)");return t}function s(...e){return e.length<3?0:Math.abs(e.reduce((t,r,n)=>{let l=0===n?e[e.length-1]:e[n-1];return t+(r.y*l.x-.5*(r.x*r.y+l.x*l.y+(l.x-r.x)*(r.y-l.y)))},0))}null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){l[e]=t},r.parcelRequire28bf=i),i.register("27Lyk",function(e,r){"use strict";t(e.exports,"register",()=>n,e=>n=e),t(e.exports,"resolve",()=>l,e=>l=e);var n,l,i={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)i[t[r]]=e[t[r]]},l=function(e){var t=i[e];if(null==t)throw Error("Could not resolve bundle with id "+e);return t}}),i("27Lyk").register(JSON.parse('{"4aVq6":"index.7558d866.js","l8PHz":"test.f9713f46.svg"}'));var a={};a=new URL(i("27Lyk").resolve("l8PHz"),import.meta.url).toString();const u={debug:!1,perf:!1};function h(e){if(null==e||"object"!=typeof e)return e;if(Array.isArray(e))return e.map(h);let t={};for(let r in e){let n=e[r];null!=e&&"object"==typeof e?t[r]=h(n):t[r]=n}return t}const c="-xin-data",d=`.${c}`,f="-xin-event",p=`.${f}`,m=Symbol("xin-path"),g=Symbol("xin-value"),b=e=>e[m];function y(e){return"object"==typeof e&&null!==e&&e[g]||e}const v=new WeakMap,$=new WeakMap,w=e=>{let t=e.cloneNode();if(t instanceof HTMLElement){let r=$.get(e),n=v.get(e);null!=r&&$.set(t,h(r)),null!=n&&v.set(t,h(n))}for(let r of e instanceof HTMLTemplateElement?e.content.childNodes:e.childNodes)r instanceof HTMLElement||r instanceof DocumentFragment?t.appendChild(w(r)):t.appendChild(r.cloneNode());return t},E=new WeakMap,x=e=>{let t=document.body.parentElement;for(;null!=e.parentElement&&e.parentElement!==t;){let t=E.get(e);if(null!=t)return t;e=e.parentElement}return!1},A=Symbol("observer should be removed"),_=[],S=[];let C=!1;class M{constructor(e,t){let r;let n="string"==typeof t?`"${t}"`:`function ${t.name}`;if("string"==typeof e)this.test=t=>"string"==typeof t&&""!==t&&(e.startsWith(t)||t.startsWith(e)),r=`test = "${e}"`;else if(e instanceof RegExp)this.test=e.test.bind(e),r=`test = "${e.toString()}"`;else if(e instanceof Function)this.test=e,r=`test = function ${e.name}`;else throw Error("expect listener test to be a string, RegExp, or test function");if(this.description=`${r}, ${n}`,"function"==typeof t)this.callback=t;else throw Error("expect callback to be a path or function");_.push(this)}}const O=()=>{u.perf&&console.time("xin async update");let t=[...S];for(let e of t)_.filter(t=>{let r;try{r=t.test(e)}catch(r){throw Error(`Listener ${t.description} threw "${r}" at "${e}"`)}return r===A?(j(t),!1):r}).forEach(t=>{let r;try{r=t.callback(e)}catch(r){console.error(`Listener ${t.description} threw "${r}" handling "${e}"`)}r===A&&j(t)});S.splice(0),C=!1,"function"==typeof e&&e(),u.perf&&console.timeEnd("xin async update")},k=t=>{let r="string"==typeof t?t:b(t);if(void 0===r)throw console.error("touch was called on an invalid target",t),Error("touch was called on an invalid target");!1===C&&(new Promise(t=>{e=t}),C=setTimeout(O)),null==S.find(e=>r.startsWith(e))&&S.push(r)},L=(e,t)=>new M(e,t),j=e=>{let t=_.indexOf(e);if(t>-1)_.splice(t,1);else throw Error("unobserve failed, listener not found")},T=e=>{try{return JSON.stringify(e)}catch(e){return"{has circular references}"}},P=(...e)=>Error(e.map(T).join(" ")),F=()=>new Date(parseInt("1000000000",36)+Date.now()).valueOf().toString(36).slice(1);let D=0;const N=()=>(parseInt("10000",36)+ ++D).toString(36).slice(-5),q=()=>F()+N(),R={},H={};function B(e){if(""===e)return[];if(Array.isArray(e))return e;{let t=[];for(;e.length>0;){let r=e.search(/\[[^\]]+\]/);if(-1===r){t.push(e.split("."));break}{let n=e.slice(0,r);e=e.slice(r),""!==n&&t.push(n.split(".")),r=e.indexOf("]")+1,t.push(e.slice(1,r-1)),"."===e.slice(r,r+1)&&(r+=1),e=e.slice(r)}}return t}}const W=new WeakMap;function z(e,t){void 0===W.get(e)&&W.set(e,{}),void 0===W.get(e)[t]&&(W.get(e)[t]={});let r=W.get(e)[t];return"_auto_"===t?e.forEach((e,t)=>{void 0===e._auto_&&(e._auto_=q()),r[e._auto_+""]=t}):e.forEach((e,n)=>{r[U(e,t)+""]=n}),r}function I(e,t,r,n){var l;let i;let o=""!==t?(l=r+"",(void 0===(i=(void 0===W.get(e)||void 0===W.get(e)[t]?z(e,t):W.get(e)[t])[l])||U(e[i],t)+""!==l)&&(i=z(e,t)[l]),i):r;if(n===R)return e.splice(o,1),W.delete(e),Symbol("deleted");if(n===H)""===t&&void 0===e[o]&&(e[o]={});else if(void 0!==n){if(void 0!==o)e[o]=n;else if(""!==t&&U(n,t)+""==r+"")e.push(n),o=e.length-1;else throw Error(`byIdPath insert failed at [${t}=${r}]`)}return e[o]}function V(e){if(!Array.isArray(e))throw P("setByPath failed: expected array, found",e)}function Q(e){if(null==e||!(e instanceof Object))throw P("setByPath failed: expected Object, found",e)}function U(e,t){let r,n,l,i;let o=B(t),s=e;for(r=0,n=o.length;void 0!==s&&r<n;r++){let e=o[r];if(Array.isArray(e))for(l=0,i=e.length;void 0!==s&&l<i;l++){let t=e[l];s=s[t]}else if(0===s.length){if(s=s[e.slice(1)],"="!==e[0])return}else if(e.includes("=")){let[t,...r]=e.split("=");s=I(s,t,r.join("="))}else s=s[l=parseInt(e,10)]}return s}const Z=["sort","splice","copyWithin","fill","pop","push","reverse","shift","unshift"],G={},J=/^\.?([^.[\](),])+(\.[^.[\](),]+|\[\d+\]|\[[^=[\](),]*=[^[\]()]+\])*$/,Y=e=>J.test(e),K=(e="",t="")=>""===e?t:null!==t.match(/^\d+$/)||t.includes("=")?`${e}[${t}]`:`${e}.${t}`,X=(e="")=>({get(t,r){if(r===m)return e;if(r===g)return t;if("symbol"==typeof r)return t[r];let n=r,l=n.match(/^([^.[]+)\.(.+)$/)??n.match(/^([^\]]+)(\[.+)/)??n.match(/^(\[[^\]]+\])\.(.+)$/)??n.match(/^(\[[^\]]+\])\[(.+)$/);if(null!==l){let[,r,n]=l,i=K(e,r),o=U(t,r);return null!==o&&"object"==typeof o?new Proxy(o,X(i))[n]:o}if(n.startsWith("[")&&n.endsWith("]")&&(n=n.substring(1,n.length-1)),!Array.isArray(t)&&void 0!==t[n]||Array.isArray(t)&&n.includes("=")){let r;if(n.includes("=")){let[e,l]=n.split("=");r=t.find(t=>`${U(t,e)}`===l)}else r=t[n];if(null!==r&&"object"==typeof r){let t=K(e,n);return new Proxy(r,X(t))}return"function"==typeof r?r.bind(t):r}if(!Array.isArray(t))return t[n];{let r=t[n];return"function"==typeof r?(...r)=>{let l=Array.prototype[n].apply(t,r);return Z.includes(n)&&k(e),l}:"object"==typeof r?new Proxy(r,X(K(e,n))):r}},set(t,r,n){null!=n&&n[m]&&(n=n[g]);let l=K(e,r);if(!Y(l))throw Error(`setting invalid path ${l}`);let i=ee[l];return null!=i&&null!=i[g]&&(i=i[g]),i!==n&&function(e,t,r){let n=e,l=B(t);for(;null!=n&&l.length>0;){let e=l.shift();if("string"==typeof e){let t=e.indexOf("=");if(t>-1){0===t?Q(n):V(n);let i=e.slice(0,t),o=e.slice(t+1);if(n=I(n,i,o,l.length>0?H:r),0===l.length)return!0}else{V(n);let t=parseInt(e,10);if(l.length>0)n=n[t];else{if(r!==R){if(n[t]===r)return!1;n[t]=r}else n.splice(t,1);return!0}}}else if(Array.isArray(e)&&e.length>0)for(Q(n);e.length>0;){let t=e.shift();if(e.length>0||l.length>0){var i,o;i=n,o=e.length>0?{}:[],void 0===i[t]&&void 0!==o&&(i[t]=o),n=i[t]}else{if(r!==R){if(n[t]===r)return!1;n[t]=r}else{if(!Object.prototype.hasOwnProperty.call(n,t))return!1;delete n[t]}return!0}}else throw Error(`setByPath failed, bad path ${t}`)}throw Error(`setByPath(${e}, ${t}, ${r}) failed`)}(G,l,n)&&k(l),!0}}),ee=new Proxy(G,X()),{document:et,MutationObserver:er}=globalThis,en=(e,t)=>{let r=$.get(e);for(let n of r){let{path:r,binding:l,options:i}=n,{toDOM:o}=l;if(null!=o){if(r.startsWith("^")){let t=x(e);if(null!=t&&null!=t[m])r=n.path=`${t[m]}${r.substring(1)}`;else throw console.error(`Cannot resolve relative binding ${r}`,e,"is not part of a list"),Error(`Cannot resolve relative binding ${r}`)}(null==t||r.startsWith(t))&&o(e,ee[r],i)}}};if(null!=er){let e=new er(e=>{e.forEach(e=>{[...e.addedNodes].forEach(e=>{e instanceof HTMLElement&&[...e.querySelectorAll(d)].forEach(e=>en(e))})})});e.observe(et.body,{subtree:!0,childList:!0})}((e,t)=>{let r="function"==typeof t?t:ee[t];if("function"!=typeof r)throw Error(`observe expects a function or path to a function, ${t} is neither`);return L(e,r)})(()=>!0,e=>{let t=et.querySelectorAll(d);for(let r of t)en(r,e)});const el=e=>{let t=e.target.closest(d);for(;null!=t;){let e=$.get(t);for(let r of e){let{binding:e,path:n}=r,{fromDOM:l}=e;if(null!=l){let e;try{e=l(t,r.options)}catch(e){throw console.error("Cannot get value from",t,"via",r),Error("Cannot obtain value fromDOM")}if(null!=e){let t=ee[n];if(null==t)ee[n]=e;else{let r=null!=t[m]?t[g]:t,l=null!=e[m]?e[g]:e;r!==l&&(ee[n]=l)}}}}t=t.parentElement.closest(d)}};null!=globalThis.document&&(et.body.addEventListener("change",el,!0),et.body.addEventListener("input",el,!0));const ei=new Set,eo=e=>{let t=e?.target.closest(p),r=!1,n=new Proxy(e,{get(t,n){if("stopPropagation"===n)return()=>{e.stopPropagation(),r=!0};{let e=t[n];return"function"==typeof e?e.bind(t):e}}});for(;!r&&null!=t;){let l=v.get(t),i=l[e.type]||[];for(let e of i){if("function"==typeof e)e(n);else{let t=ee[e];if("function"==typeof t)t(n);else throw Error(`no event handler found at path ${e}`)}if(r)continue}t=null!=t.parentElement?t.parentElement.closest(p):null}},es=(e,t,r)=>{let n=v.get(e);e.classList.add(f),null==n&&(n={},v.set(e,n)),n[t]||(n[t]=[]),n[t].includes(r)||n[t].push(r),ei.has(t)||(ei.add(t),et.body.addEventListener(t,eo,!0))},ea=(e,t)=>{let r=new Event(t);e.dispatchEvent(r)},eu=e=>e instanceof HTMLInputElement?e.type:e instanceof HTMLSelectElement&&e.hasAttribute("multiple")?"multi-select":"other",eh=(e,t)=>{switch(eu(e)){case"radio":e.checked=e.value===t;break;case"checkbox":e.checked=t;break;case"date":e.valueAsDate=new Date(t);break;case"multi-select":for(let r of[...e.querySelectorAll("option")])r.selected=t[r.value];break;default:e.value=t}},ec=e=>{switch(eu(e)){case"radio":{let t=e.parentElement?.querySelector(`[name="${e.name}"]:checked`);return null!=t?t.value:null}case"checkbox":return e.checked;case"date":return e.valueAsDate.toISOString();case"multi-select":return[...e.querySelectorAll("option")].reduce((e,t)=>(e[t.value]=t.selected,e),{});default:return e.value}},{ResizeObserver:ed}=globalThis,ef=null!=ed?new ed(e=>{for(let t of e){let e=t.target;ea(e,"resize")}}):{observe(){},unobserve(){}};function ep(e){let t=document.createElement("xin-slot");""!==e.name&&t.setAttribute("name",e.name),e.replaceWith(t)}const em=(e,t)=>{let r=!1;if(null!=e&&null!=t){if("string"==typeof t)e.textContent=t;else if(Array.isArray(t))t.forEach(t=>{e.append(t instanceof Node?w(t):t),t instanceof Node&&null!=t.querySelector("slot")&&(r=!0)});else if(t instanceof HTMLElement||t instanceof DocumentFragment){let n=[...t.querySelectorAll("slot")];n.length>0&&(r=!0,n.forEach(ep)),e.append(w(t))}else throw Error("expect text content or document node")}return r},eg=(e,t=250)=>{let r;let n=Date.now()-t,l=!1;return(...i)=>{if(clearTimeout(r),r=setTimeout(async()=>{e(...i),n=Date.now()},t),!l&&Date.now()-n>=t){l=!0;try{e(...i),n=Date.now()}finally{l=!1}}}},eb=Symbol("list-binding");function ey(e,t){let r=[...e.querySelectorAll(d)];for(let n of(e.matches(d)&&r.unshift(e),r)){let e=$.get(n);for(let r of e)r.path.startsWith("^")&&(r.path=`${t}${r.path.substring(1)}`),null!=r.binding.toDOM&&r.binding.toDOM(n,ee[r.path])}}class ev{_array=[];constructor(e,t={}){if(this.boundElement=e,this.itemToElement=new WeakMap,1!==e.children.length)throw Error("ListBinding expects an element with exactly one child element");if(e.children[0]instanceof HTMLTemplateElement){let t=e.children[0];if(1!==t.content.children.length)throw Error("ListBinding expects a template with exactly one child element");this.template=w(t.content.children[0])}else this.template=e.children[0],this.template.remove();this.listTop=document.createElement("div"),this.listBottom=document.createElement("div"),this.boundElement.append(this.listTop),this.boundElement.append(this.listBottom),this.options=t,null!=t.virtual&&(ef.observe(this.boundElement),this._update=eg(()=>{this.update(this._array,!0)},16),this.boundElement.addEventListener("scroll",this._update),this.boundElement.addEventListener("resize",this._update))}visibleSlice(){let{virtual:e,hiddenProp:t,visibleProp:r}=this.options,n=this._array;void 0!==t&&(n=n.filter(e=>!0!==e[t])),void 0!==r&&(n=n.filter(e=>!0===e[r]));let l=0,i=n.length-1,o=0,s=0;if(null!=e){let t=this.boundElement.offsetWidth,r=this.boundElement.offsetHeight,a=null!=e.width?Math.max(1,Math.floor(t/e.width)):1,u=Math.ceil(r/e.height)+1,h=Math.ceil(n.length/a),c=Math.floor(this.boundElement.scrollTop/e.height);c>h-u+1&&(c=Math.max(0,h-u+1)),i=(l=c*a)+a*u-1,o=c*e.height,s=Math.max(h*e.height-r-o,0)}return{items:n,firstItem:l,lastItem:i,topBuffer:o,bottomBuffer:s}}update(e,t){null==e&&(e=[]),this._array=e;let{initInstance:r,updateInstance:n,hiddenProp:l,visibleProp:i}=this.options,o=b(e),s=this.visibleSlice();this.boundElement.classList.toggle("-xin-empty-list",0===s.items.length);let a=this._previousSlice,{firstItem:h,lastItem:c,topBuffer:d,bottomBuffer:f}=s;if(void 0===l&&void 0===i&&!0===t&&null!=a&&h===a.firstItem&&c===a.lastItem)return;this._previousSlice=s;let p=0,m=0,g=0;for(let e of[...this.boundElement.children]){if(e===this.listTop||e===this.listBottom)continue;let t=E.get(e);if(null==t)e.remove();else{let r=s.items.indexOf(t);(r<h||r>c)&&(e.remove(),this.itemToElement.delete(t),E.delete(e),p++)}}this.listTop.style.height=String(d)+"px",this.listBottom.style.height=String(f)+"px";let v=[],{idPath:$}=this.options;for(let e=h;e<=c;e++){let t=s.items[e];if(void 0===t)continue;let l=this.itemToElement.get(y(t));if(null==l){if(g++,l=w(this.template),"object"==typeof t&&(this.itemToElement.set(y(t),l),E.set(l,y(t))),this.boundElement.insertBefore(l,this.listBottom),null!=$){let e=t[$],r=`${o}[${$}=${e}]`;ey(l,r)}else{let t=`${o}[${e}]`;ey(l,t)}null!=r&&r(l,t)}null!=n&&n(l,t),v.push(l)}let x=null;for(let e of v)e.previousElementSibling!==x&&(m++,x?.nextElementSibling!=null?this.boundElement.insertBefore(e,x.nextElementSibling):this.boundElement.insertBefore(e,this.listBottom)),x=e;u.perf&&console.log(o,"updated",{removed:p,created:g,moved:m})}}const e$=(e,t)=>{let r=e[eb];return null==r&&(r=new ev(e,t),e[eb]=r),r},ew={value:{toDOM(e,t){eh(e,t)},fromDOM:e=>ec(e)},text:{toDOM(e,t){e.textContent=t}},enabled:{toDOM(e,t){e.disabled=!t}},disabled:{toDOM(e,t){e.disabled=!!t}},style:{toDOM(e,t){if("object"==typeof t)for(let r of Object.keys(t))e.style[r]=t[r];else if("string"==typeof t)e.setAttribute("style",t);else throw Error("style binding expects either a string or object")}},list:{toDOM(e,t,r){let n=e$(e,r);n.update(t)}}};function eE(e,t,r){return t<e?e:t>r?r:t}function ex(e,t,r){return(r=eE(0,r,1))*(t-e)+e}const eA=e=>("00"+Math.round(Number(e)).toString(16)).slice(-2);class e_{constructor(e,t,r){e/=255,t/=255,r/=255;let n=Math.max(e,t,r),l=n-Math.min(e,t,r),i=0!==l?n===e?(t-r)/l:n===t?2+(r-e)/l:4+(e-t)/l:0;this.h=60*i<0?60*i+360:60*i,this.s=0!==l?n<=.5?l/(2*n-l):l/(2-(2*n-l)):0,this.l=(2*n-l)/2}}const eS=void 0!==globalThis.document?globalThis.document.createElement("span"):void 0;class eC{static fromCss(e){let t=e;eS instanceof HTMLSpanElement&&(eS.style.color=e,document.body.appendChild(eS),t=getComputedStyle(eS).color,eS.remove());let[r,n,l,i]=t.match(/[\d.]+/g);return new eC(Number(r),Number(n),Number(l),null==i?1:Number(i))}static fromHsl(e,t,r,n=1){return eC.fromCss(`hsla(${e.toFixed(0)}, ${(100*t).toFixed(0)}%, ${(100*r).toFixed(0)}%, ${n.toFixed(2)})`)}constructor(e,t,r,n=1){this.r=eE(0,e,255),this.g=eE(0,t,255),this.b=eE(0,r,255),this.a=void 0!==n?eE(0,n,1):n=1}get inverse(){return new eC(255-this.r,255-this.g,255-this.b,this.a)}get inverseLuminance(){let{h:e,s:t,l:r}=this._hsl;return eC.fromHsl(e,t,1-r,this.a)}get rgb(){let{r:e,g:t,b:r}=this;return`rgb(${e.toFixed(0)},${t.toFixed(0)},${r.toFixed(0)})`}get rgba(){let{r:e,g:t,b:r,a:n}=this;return`rgba(${e.toFixed(0)},${t.toFixed(0)},${r.toFixed(0)},${n.toFixed(2)})`}get RGBA(){return[this.r/255,this.g/255,this.b/255,this.a]}get ARGB(){return[this.a,this.r/255,this.g/255,this.b/255]}get _hsl(){return null==this._hslCached&&(this._hslCached=new e_(this.r,this.g,this.b)),this._hslCached}get hsl(){let{h:e,s:t,l:r}=this._hsl;return`hsl(${e.toFixed(0)}, ${(100*t).toFixed(0)}%, ${(100*r).toFixed(0)}%)`}get hsla(){let{h:e,s:t,l:r}=this._hsl;return`hsla(${e.toFixed(0)}, ${(100*t).toFixed(0)}%, ${(100*r).toFixed(0)}%, ${this.a.toFixed(2)})`}get mono(){let e=255*this.brightness;return new eC(e,e,e)}get brightness(){return(.299*this.r+.587*this.g+.114*this.b)/255}get html(){return 1===this.a?"#"+eA(this.r)+eA(this.g)+eA(this.b):"#"+eA(this.r)+eA(this.g)+eA(this.b)+eA(Math.floor(255*this.a))}brighten(e){let{h:t,s:r,l:n}=this._hsl;return n=eE(0,n+e*(1-n),1),eC.fromHsl(t,r,n,this.a)}darken(e){let{h:t,s:r,l:n}=this._hsl;return n=eE(0,n*(1-e),1),eC.fromHsl(t,r,n,this.a)}saturate(e){let{h:t,s:r,l:n}=this._hsl;return r=eE(0,r+e*(1-r),1),eC.fromHsl(t,r,n,this.a)}desaturate(e){let{h:t,s:r,l:n}=this._hsl;return r=eE(0,r*(1-e),1),eC.fromHsl(t,r,n,this.a)}rotate(e){let{h:t,s:r,l:n}=this._hsl;return t=(t+360+e)%360,eC.fromHsl(t,r,n,this.a)}opacity(e){let{h:t,s:r,l:n}=this._hsl;return eC.fromHsl(t,r,n,e)}swatch(){let{r:e,g:t,b:r,a:n}=this;console.log(`%c   %c ${this.html}, rgba(${e}, ${t}, ${r}, ${n}), ${this.hsla}`,`background-color: rgba(${e}, ${t}, ${r}, ${n})`,"background-color: #eee")}blend(e,t){return new eC(ex(this.r,e.r,t),ex(this.g,e.g,t),ex(this.b,e.b,t),ex(this.a,e.a,t))}}function eM(e){return e.replace(/[A-Z]/g,e=>`-${e.toLocaleLowerCase()}`)}const eO={},ek=(e,...t)=>{void 0===eO[e]&&(eO[e]=globalThis.document.createElement(e));let r=eO[e].cloneNode(),n={};for(let e of t)e instanceof Element||e instanceof DocumentFragment||"string"==typeof e||"number"==typeof e?r instanceof HTMLTemplateElement?r.content.append(e):r.append(e):Object.assign(n,e);for(let e of Object.keys(n)){let t=n[e];if("apply"===e)t(r);else if("style"===e){if("object"==typeof t)for(let e of Object.keys(t))e.startsWith("--")?r.style.setProperty(e,t[e]):r.style[e]=t[e];else r.setAttribute("style",t)}else if(null!=e.match(/^on[A-Z]/)){let n=e.substring(2).toLowerCase();es(r,n,t)}else if(null!=e.match(/^bind[A-Z]/)){let n=e.substring(4,5).toLowerCase()+e.substring(5),l=ew[n];if(void 0!==l)!function(e,t,r,n){let l;if(e instanceof DocumentFragment)throw Error("bind cannot bind to a DocumentFragment");if("object"==typeof t&&void 0===t[m]&&void 0===n){let{value:e}=t;l="string"==typeof e?e:e[m],n=t,delete n.value}else l="string"==typeof t?t:t[m];if(null==l)throw Error("bind requires a path or object with xin Proxy");let{toDOM:i}=r;e.classList.add(c);let o=$.get(e);null==o&&(o=[],$.set(e,o)),o.push({path:l,binding:r,options:n}),null==i||l.startsWith("^")||k(l)}(r,t,l);else throw Error(`${e} is not allowed, bindings.${n} is not defined`)}else if(void 0!==r[e])r[e]=t;else{let n=eM(e);"class"===n?t.split(" ").forEach(e=>{r.classList.add(e)}):void 0!==r[n]?r[n]=t:"boolean"==typeof t?t?r.setAttribute(n,""):r.removeAttribute(n):r.setAttribute(n,t)}}return r},eL=new Proxy({fragment:(...e)=>{let t=globalThis.document.createDocumentFragment();for(let r of e)t.append(r);return t}},{get(e,t){if(null==(t=t.replace(/[A-Z]/g,e=>`-${e.toLocaleLowerCase()}`)).match(/^\w+(-\w+)*$/))throw Error(`${t} does not appear to be a valid element tagName`);return void 0===e[t]&&(e[t]=(...e)=>ek(t,...e)),e[t]},set(){throw Error("You may not add new properties to elements")}}),ej=["animation-iteration-count","flex","flex-base","flex-grow","flex-shrink","gap","opacity","order","tab-size","widows","z-index","zoom"],eT=(e,t,r)=>void 0===r?"":"string"==typeof r||ej.includes(t)?`${e}  ${t}: ${r};`:`${e}  ${t}: ${r}px;`,eP=(e,t,r="")=>{let n=eM(e);if("object"!=typeof t)return eT(r,n,t);{let n=Object.keys(t).map(e=>eP(e,t[e],`${r}  `)).join("\n");return`${r}  ${e} {
${n}
${r}  }`}},eF=(e,t="")=>{let r=Object.keys(e).map(r=>{let n=e[r];if("string"==typeof n){if("@import"===r)return`@import url('${n}');`;throw Error("top-level string value only allowed for `@import`")}let l=Object.keys(n).map(e=>eP(e,n[e])).join("\n");return`${t}${r} {
${l}
}`});return r.join("\n\n")};new Proxy({},{get(e,t){if(null==e[t]){let[,r,,n,l,i]=(t=t.replace(/[A-Z]/g,e=>`-${e.toLocaleLowerCase()}`)).match(/^([^\d_]*)((_)?(\d+)(\w*))?$/);if(r=`--${r}`,null!=l){let o=null==n?Number(l)/100:-Number(l)/100;switch(i){case"b":{let n=getComputedStyle(document.body).getPropertyValue(r);e[t]=o>0?eC.fromCss(n).brighten(o).rgba:eC.fromCss(n).darken(-o).rgba}break;case"s":{let n=getComputedStyle(document.body).getPropertyValue(r);e[t]=o>0?eC.fromCss(n).saturate(o).rgba:eC.fromCss(n).desaturate(-o).rgba}break;case"h":{let n=getComputedStyle(document.body).getPropertyValue(r);e[t]=eC.fromCss(n).rotate(100*o).rgba,console.log(eC.fromCss(n).hsla,eC.fromCss(n).rotate(o).hsla)}break;case"o":{let n=getComputedStyle(document.body).getPropertyValue(r);e[t]=eC.fromCss(n).opacity(o).rgba}break;case"":e[t]=`calc(var(${r}) * ${o})`;break;default:throw console.error(i),Error(`Unrecognized method ${i} for css variable ${r}`)}}else e[t]=`var(${r})`}return e[t]}});let eD=0;class eN extends HTMLElement{static elements=eL;content=eL.slot();static StyleNode(e){return eL.style(eF(e))}static elementCreator(e){if(null==this._elementCreator){let t=null!=e?e.tag:null;null!=t||((t=eM(this.name)).startsWith("-")&&(t=t.substring(1)),t.includes("-")||(t+="-elt"));let r=0;for(;null==this._elementCreator;){r+=1;let n=1===r?t:`${t}-${r}`;try{window.customElements.define(n,this,e),this._elementCreator=eL[n]}catch(e){throw Error(`could not define ${this.name} as <${n}>: ${String(e)}`)}}}return this._elementCreator}initAttributes(...e){let t={},r={},n=new MutationObserver(t=>{let r=!1;t.forEach(t=>{r=!!(t.attributeName&&e.includes(t.attributeName.replace(/-([a-z])/g,(e,t)=>t.toLocaleUpperCase())))}),r&&void 0!==this.queueRender&&this.queueRender(!1)});n.observe(this,{attributes:!0}),e.forEach(e=>{t[e]=h(this[e]);let n=eM(e);Object.defineProperty(this,e,{enumerable:!1,get(){return"boolean"==typeof t[e]?this.hasAttribute(n):this.hasAttribute(n)?"number"==typeof t[e]?parseFloat(this.getAttribute(n)):this.getAttribute(n):void 0!==r[e]?r[e]:t[e]},set(l){"boolean"==typeof t[e]?l!==this[e]&&(l?this.setAttribute(n,""):this.removeAttribute(n),this.queueRender()):"number"==typeof t[e]?l!==parseFloat(this[e])&&(this.setAttribute(n,l),this.queueRender()):("object"==typeof l||`${l}`!=`${this[e]}`)&&(null==l||"object"==typeof l?this.removeAttribute(n):this.setAttribute(n,l),this.queueRender(),r[e]=l)}})})}initValue(){let e=Object.getOwnPropertyDescriptor(this,"value");if(void 0===e||void 0!==e.get||void 0!==e.set)return;let t=this.hasAttribute("value")?this.getAttribute("value"):h(this.value);delete this.value,Object.defineProperty(this,"value",{enumerable:!1,get:()=>t,set(e){t!==e&&(t=e,this.queueRender(!0))}})}get refs(){let e=null!=this.shadowRoot?this.shadowRoot:this;return null==this._refs&&(this._refs=new Proxy({},{get(t,r){if(void 0===t[r]){let n=e.querySelector(`[data-ref="${r}"]`);if(null==n&&(n=e.querySelector(r)),null==n)throw Error(`elementRef "${r}" does not exist!`);n.removeAttribute("data-ref"),t[r]=n}return t[r]}})),this._refs}constructor(){super(),eD+=1,this.initAttributes("hidden"),this.instanceId=`${this.tagName.toLocaleLowerCase()}-${eD}`,this._value=h(this.defaultValue)}connectedCallback(){this.hydrate(),null!=this.role&&this.setAttribute("role",this.role),void 0!==this.onResize&&(ef.observe(this),null==this._onResize&&(this._onResize=this.onResize.bind(this)),this.addEventListener("resize",this._onResize)),null!=this.value&&null!=this.getAttribute("value")&&(this._value=this.getAttribute("value")),this.queueRender()}disconnectedCallback(){ef.unobserve(this)}_changeQueued=!1;_renderQueued=!1;queueRender(e=!1){this._hydrated&&(this._changeQueued||(this._changeQueued=e),this._renderQueued||(this._renderQueued=!0,requestAnimationFrame(()=>{this._changeQueued&&ea(this,"change"),this._changeQueued=!1,this._renderQueued=!1,this.render()})))}_hydrated=!1;hydrate(){if(!this._hydrated){this.initValue();let e="function"==typeof this.content?this.content():this.content;if(void 0!==this.styleNode){let t=this.attachShadow({mode:"open"});t.appendChild(this.styleNode),em(t,e)}else{let t=[...this.childNodes];if(em(this,e)&&t.length>0){let e={"":this};[...this.querySelectorAll("xin-slot")].forEach(t=>{e[t.name]=t}),t.forEach(t=>{let r=e[""],n=t instanceof Element?e[t.slot]:r;(void 0!==n?n:r).append(t)})}}this._hydrated=!0}}render(){}}(class extends eN{name="";content=null;constructor(){super(),this.initAttributes("name")}}).elementCreator({tag:"xin-slot"});const eq="xinjs polygons demo",eR=new Proxy({},{get:(e,t)=>(e[t]||(e[t]=(...e)=>{let r=document.createElementNS("http://www.w3.org/2000/svg",t),n={};return e.forEach(e=>{"string"==typeof e?r.append(e):"object"==typeof e&&e.constructor===Object?Object.assign(n,e):r.append(e)}),Object.keys(n).forEach(e=>{r.setAttribute(e,n[e])}),r}),e[t])});document.head.querySelector("title").textContent=eq;const eH=document.querySelector("main"),{h1:eB,div:eW,button:ez,input:eI}=eL;let eV=eW({class:"elastic"});function eQ(e,t){return(Math.random()*(t-e)+e).toFixed(0)+"%"}const eU=Symbol("text");function eZ(e,t){let r=e[eU];if(void 0===r){let[t,n]=e.getAttribute("points").split(",");e[eU]=r=eR.text({x:t,y:n}),r.style.zIndex=1,e.parentElement.append(r),r.setAttribute("stroke",e.getAttribute("fill"))}r.textContent=t}const{settings:eG,handlers:eJ}=function(e){let t={};return Object.keys(e).forEach(r=>{ee[r]=e[r],t[r]=ee[r]}),t}({settings:{threshold:.01},handlers:{async loadSvg(){var e;let t=await fetch((e=a)&&e.__esModule?e.default:e),r=await t.text();eV.innerHTML=r,eJ.randomColors()},randomColors(){[...document.querySelectorAll("polygon")].forEach(e=>{e.setAttribute("fill",`hsl(${(360*Math.random()).toFixed(0)}, ${eQ(25,100)}, ${eQ(25,75)})`)})},area(){let e=0;[...document.querySelectorAll("polygon")].forEach(t=>{try{let r=o(t.getAttribute("points"));if(r.length>3){let n=s(...r);e+=n;let l=`A ${n}`;eZ(t,l)}}catch(e){console.error(e)}}),console.log({totalArea:e})},simplify(){let e=0,t=0;[...document.querySelectorAll("polygon")].forEach(r=>{try{let n=o(r.getAttribute("points")),l=n.length;if(n.length>3){n=function(e,t=.5){return e.length<4?e:e.reduce((e,r)=>(e.length<2?e.unshift(r):s(r,e[0],e[1])<t?e[0]=r:e.unshift(r),e),[])}(n,eG.threshold);let e=`${l} -> ${n.length}`;eZ(r,e),r.setAttribute("points",n.map(e=>`${e.x},${e.y}`).join(","))}e+=l,t+=n.length}catch(e){console.error(e)}}),console.log({totalPoints:e,totalRemaining:t,reduction:((1-t/e)*100).toFixed(1)+"%"})}}});try{eH.append(eB(eq),eW({class:"bar"},ez("Reload",{onClick:eJ.loadSvg}),ez("Areas",{onClick:eJ.area}),ez("Simplify",{onClick:eJ.simplify}),eI({title:"threshold",placeholder:"threshold",min:"0.01",step:"0.01",max:"5",type:"range",bindValue:"settings.threshold"}),eI({type:"number",step:"0.01",bindValue:"settings.threshold"})),eV)}catch(e){console.log(e)}eJ.loadSvg().catch(e=>console.error(e));
//# sourceMappingURL=index.7558d866.js.map
