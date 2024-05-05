/* global CONFIG */
/* global NexT, CONFIG */

//tippy.js
(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll|overlay)/.test(r+s+p)?e:n(o(e))}function i(e){return e&&e.referenceNode?e.referenceNode:e}function r(e){return 11===e?re:10===e?pe:re||pe}function p(e){if(!e)return document.documentElement;for(var o=r(10)?document.body:null,n=e.offsetParent||null;n===o&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TH','TD','TABLE'].indexOf(n.nodeName)&&'static'===t(n,'position')?p(n):n:e?e.ownerDocument.documentElement:document.documentElement}function s(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||p(e.firstElementChild)===e)}function d(e){return null===e.parentNode?e:d(e.parentNode)}function a(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var l=r.commonAncestorContainer;if(e!==l&&t!==l||n.contains(i))return s(l)?l:p(l);var f=d(e);return f.host?a(f.host,t):a(e,d(t).host)}function l(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function f(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=l(t,'top'),i=l(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function m(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'])+parseFloat(e['border'+n+'Width'])}function h(e,t,o,n){return ee(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],r(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function c(e){var t=e.body,o=e.documentElement,n=r(10)&&getComputedStyle(o);return{height:h('Height',t,o,n),width:h('Width',t,o,n)}}function g(e){return le({},e,{right:e.left+e.width,bottom:e.top+e.height})}function u(e){var o={};try{if(r(10)){o=e.getBoundingClientRect();var n=l(e,'top'),i=l(e,'left');o.top+=n,o.left+=i,o.bottom+=n,o.right+=i}else o=e.getBoundingClientRect()}catch(t){}var p={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},s='HTML'===e.nodeName?c(e.ownerDocument):{},d=s.width||e.clientWidth||p.width,a=s.height||e.clientHeight||p.height,f=e.offsetWidth-d,h=e.offsetHeight-a;if(f||h){var u=t(e);f-=m(u,'x'),h-=m(u,'y'),p.width-=f,p.height-=h}return g(p)}function b(e,o){var i=2<arguments.length&&void 0!==arguments[2]&&arguments[2],p=r(10),s='HTML'===o.nodeName,d=u(e),a=u(o),l=n(e),m=t(o),h=parseFloat(m.borderTopWidth),c=parseFloat(m.borderLeftWidth);i&&s&&(a.top=ee(a.top,0),a.left=ee(a.left,0));var b=g({top:d.top-a.top-h,left:d.left-a.left-c,width:d.width,height:d.height});if(b.marginTop=0,b.marginLeft=0,!p&&s){var w=parseFloat(m.marginTop),y=parseFloat(m.marginLeft);b.top-=h-w,b.bottom-=h-w,b.left-=c-y,b.right-=c-y,b.marginTop=w,b.marginLeft=y}return(p&&!i?o.contains(l):o===l&&'BODY'!==l.nodeName)&&(b=f(b,o)),b}function w(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=e.ownerDocument.documentElement,n=b(e,o),i=ee(o.clientWidth,window.innerWidth||0),r=ee(o.clientHeight,window.innerHeight||0),p=t?0:l(o),s=t?0:l(o,'left'),d={top:p-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:i,height:r};return g(d)}function y(e){var n=e.nodeName;if('BODY'===n||'HTML'===n)return!1;if('fixed'===t(e,'position'))return!0;var i=o(e);return!!i&&y(i)}function E(e){if(!e||!e.parentElement||r())return document.documentElement;for(var o=e.parentElement;o&&'none'===t(o,'transform');)o=o.parentElement;return o||document.documentElement}function v(e,t,r,p){var s=4<arguments.length&&void 0!==arguments[4]&&arguments[4],d={top:0,left:0},l=s?E(e):a(e,i(t));if('viewport'===p)d=w(l,s);else{var f;'scrollParent'===p?(f=n(o(t)),'BODY'===f.nodeName&&(f=e.ownerDocument.documentElement)):'window'===p?f=e.ownerDocument.documentElement:f=p;var m=b(f,l,s);if('HTML'===f.nodeName&&!y(l)){var h=c(e.ownerDocument),g=h.height,u=h.width;d.top+=m.top-m.marginTop,d.bottom=g+m.top,d.left+=m.left-m.marginLeft,d.right=u+m.left}else d=m}r=r||0;var v='number'==typeof r;return d.left+=v?r:r.left||0,d.top+=v?r:r.top||0,d.right-=v?r:r.right||0,d.bottom-=v?r:r.bottom||0,d}function x(e){var t=e.width,o=e.height;return t*o}function O(e,t,o,n,i){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=v(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return le({key:e},s[e],{area:x(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function L(e,t,o){var n=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,r=n?E(t):a(t,i(o));return b(o,r,n)}function S(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function T(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function C(e,t,o){o=o.split('-')[0];var n=S(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[T(s)],i}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=D(e,function(e){return e[t]===o});return e.indexOf(n)}function P(t,o,n){var i=void 0===n?t:t.slice(0,N(t,'name',n));return i.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var n=t['function']||t.fn;t.enabled&&e(n)&&(o.offsets.popper=g(o.offsets.popper),o.offsets.reference=g(o.offsets.reference),o=n(o,t))}),o}function k(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=L(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=O(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=C(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=P(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function W(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function B(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function H(){return this.state.isDestroyed=!0,W(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[B('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function A(e){var t=e.ownerDocument;return t?t.defaultView:window}function M(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||M(n(p.parentNode),t,o,i),i.push(p)}function F(e,t,o,i){o.updateBound=i,A(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return M(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=F(this.reference,this.options,this.state,this.scheduleUpdate))}function R(e,t){return A(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function U(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=R(this.reference,this.state))}function Y(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function V(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&Y(t[o])&&(n='px'),e.style[o]=t[o]+n})}function j(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function q(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=$,p=function(e){return e},s=r(i.width),d=r(n.width),a=-1!==['left','right'].indexOf(e.placement),l=-1!==e.placement.indexOf('-'),f=t?a||l||s%2==d%2?r:Z:p,m=t?r:p;return{left:f(1==s%2&&1==d%2&&!l&&t?n.left-1:n.left),top:m(n.top),bottom:m(n.bottom),right:f(n.right)}}function K(e,t,o){var n=D(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function z(e){return'end'===e?'start':'start'===e?'end':e}function G(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=he.indexOf(e),n=he.slice(o+1).concat(he.slice(0,o));return t?n.reverse():n}function _(e,t,o,n){var i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+i[1],p=i[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=n;}var d=g(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?ee(document.documentElement.clientHeight,window.innerHeight||0):ee(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function X(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(D(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return _(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){Y(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function J(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=Y(+n)?[+n,0]:X(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}var Q=Math.min,Z=Math.floor,$=Math.round,ee=Math.max,te='undefined'!=typeof window&&'undefined'!=typeof document&&'undefined'!=typeof navigator,oe=function(){for(var e=['Edge','Trident','Firefox'],t=0;t<e.length;t+=1)if(te&&0<=navigator.userAgent.indexOf(e[t]))return 1;return 0}(),ne=te&&window.Promise,ie=ne?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},oe))}},re=te&&!!(window.MSInputMethodContext&&document.documentMode),pe=te&&/MSIE 10/.test(navigator.userAgent),se=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},de=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),ae=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},le=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},fe=te&&/Firefox/i.test(navigator.userAgent),me=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],he=me.slice(3),ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},ge=function(){function t(o,n){var i=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};se(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=ie(this.update.bind(this)),this.options=le({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(le({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){i.options.modifiers[e]=le({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return le({name:e},i.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return de(t,[{key:'update',value:function(){return k.call(this)}},{key:'destroy',value:function(){return H.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return U.call(this)}}]),t}();return ge.Utils=('undefined'==typeof window?global:window).PopperUtils,ge.placements=me,ge.Defaults={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:ae({},d,r[d]),end:ae({},d,r[d]+r[a]-p[a])};e.offsets.popper=le({},p,l[n])}return e}},offset:{order:200,enabled:!0,fn:J,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||p(e.instance.popper);e.instance.reference===o&&(o=p(o));var n=B('transform'),i=e.instance.popper.style,r=i.top,s=i.left,d=i[n];i.top='',i.left='',i[n]='';var a=v(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=s,i[n]=d,t.boundaries=a;var l=t.priority,f=e.offsets.popper,m={primary:function(e){var o=f[e];return f[e]<a[e]&&!t.escapeWithReference&&(o=ee(f[e],a[e])),ae({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=f[o];return f[e]>a[e]&&!t.escapeWithReference&&(n=Q(f[o],a[e]-('right'===e?f.width:f.height))),ae({},o,n)}};return l.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';f=le({},f,m[t](e))}),e.offsets.popper=f,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Z,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var n;if(!K(e.instance.modifiers,'arrow','keepTogether'))return e;var i=o.element;if('string'==typeof i){if(i=e.instance.popper.querySelector(i),!i)return e;}else if(!e.instance.popper.contains(i))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',c=a?'bottom':'right',u=S(i)[l];d[c]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[c]-u)),d[m]+u>s[c]&&(e.offsets.popper[m]+=d[m]+u-s[c]),e.offsets.popper=g(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f]),E=parseFloat(w['border'+f+'Width']),v=b-e.offsets.popper[m]-y-E;return v=ee(Q(s[l]-u,v),0),e.arrowElement=i,e.offsets.arrow=(n={},ae(n,m,$(v)),ae(n,h,''),n),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(W(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=v(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=T(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=G(n);break;case ce.COUNTERCLOCKWISE:p=G(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=T(n);var a=e.offsets.popper,l=e.offsets.reference,f=Z,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u),E=!!t.flipVariationsByContent&&(w&&'start'===r&&c||w&&'end'===r&&h||!w&&'start'===r&&u||!w&&'end'===r&&g),v=y||E;(m||b||v)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),v&&(r=z(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=le({},e.offsets.popper,C(e.instance.popper,e.offsets.reference,e.placement)),e=P(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport',flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=T(t),e.offsets.popper=g(i),e}},hide:{order:800,enabled:!0,fn:function(e){if(!K(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=D(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=D(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===r?t.gpuAcceleration:r,l=p(e.instance.popper),f=u(l),m={position:i.position},h=q(e,2>window.devicePixelRatio||!fe),c='bottom'===o?'top':'bottom',g='right'===n?'left':'right',b=B('transform');if(d='bottom'==c?'HTML'===l.nodeName?-l.clientHeight+h.bottom:-f.height+h.bottom:h.top,s='right'==g?'HTML'===l.nodeName?-l.clientWidth+h.right:-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[g]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==g?-1:1;m[c]=d*w,m[g]=s*y,m.willChange=c+', '+g}var E={"x-placement":e.placement};return e.attributes=le({},E,e.attributes),e.styles=le({},m,e.styles),e.arrowStyles=le({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return V(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&V(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,n,i){var r=L(i,t,e,o.positionFixed),p=O(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),V(t,{position:o.positionFixed?'fixed':'absolute'}),o},gpuAcceleration:void 0}}},ge});
//# sourceMappingURL=popper.min.js.map
var tippy=function(t){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t;function e(){return(e=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}var n={passive:!0};function r(t,e){t.innerHTML=e}function i(t){return!(!t||!t._tippy||t._tippy.reference!==t)}function o(t,e){return{}.hasOwnProperty.call(t,e)}function a(t){return c(t)?[t]:function(t){return s(t,"NodeList")}(t)?y(t):Array.isArray(t)?t:y(document.querySelectorAll(t))}function p(t,e,n){if(Array.isArray(t)){var r=t[e];return null==r?Array.isArray(n)?n[e]:n:r}return t}function u(t,e){return t&&t.modifiers&&t.modifiers[e]}function s(t,e){var n={}.toString.call(t);return 0===n.indexOf("[object")&&n.indexOf(e+"]")>-1}function c(t){return s(t,"Element")}function l(t){return s(t,"MouseEvent")}function f(t,e){return"function"==typeof t?t.apply(void 0,e):t}function d(t,e,n,r){t.filter((function(t){return t.name===e}))[0][n]=r}function v(){return document.createElement("div")}function m(t,e){t.forEach((function(t){t&&(t.style.transitionDuration=e+"ms")}))}function g(t,e){t.forEach((function(t){t&&t.setAttribute("data-state",e)}))}function h(t,e){return 0===e?t:function(r){clearTimeout(n),n=setTimeout((function(){t(r)}),e)};var n}function b(t,e,n){t&&t!==e&&t.apply(void 0,n)}function y(t){return[].slice.call(t)}function w(t,e){for(;t;){if(e(t))return t;t=t.parentElement}return null}function E(t,e){return t.indexOf(e)>-1}function A(t){return t.split(/\s+/).filter(Boolean)}function T(t,e){return void 0!==t?t:e}function x(t){return[].concat(t)}function C(t){var e=x(t)[0];return e&&e.ownerDocument||document}function I(t,e){-1===t.indexOf(e)&&t.push(e)}function O(t){return"number"==typeof t?t:parseFloat(t)}function D(t,e,n){void 0===e&&(e=5);var r={top:0,right:0,bottom:0,left:0};return Object.keys(r).reduce((function(r,i){return r[i]="number"==typeof e?e:e[i],t===i&&(r[i]="number"==typeof e?e+n:e[t]+n),r}),r)}var L={isTouch:!1},k=0;function M(){L.isTouch||(L.isTouch=!0,window.performance&&document.addEventListener("mousemove",S))}function S(){var t=performance.now();t-k<20&&(L.isTouch=!1,document.removeEventListener("mousemove",S)),k=t}function P(){var t=document.activeElement;if(i(t)){var e=t._tippy;t.blur&&!e.state.isVisible&&t.blur()}}var V="undefined"!=typeof window&&"undefined"!=typeof document,B=V?navigator.userAgent:"",H=/MSIE |Trident\//.test(B),U=V&&/iPhone|iPad|iPod/.test(navigator.platform);function N(t){var e=t&&U&&L.isTouch;document.body.classList[e?"add":"remove"]("tippy-iOS")}var z=e({allowHTML:!0,animation:"fade",appendTo:function(){return document.body},aria:"describedby",arrow:!0,boundary:"scrollParent",content:"",delay:0,distance:10,duration:[300,250],flip:!0,flipBehavior:"flip",flipOnUpdate:!1,hideOnClick:!0,ignoreAttributes:!1,inertia:!1,interactive:!1,interactiveBorder:2,interactiveDebounce:0,lazy:!0,maxWidth:350,multiple:!1,offset:0,onAfterUpdate:function(){},onBeforeUpdate:function(){},onCreate:function(){},onDestroy:function(){},onHidden:function(){},onHide:function(){},onMount:function(){},onShow:function(){},onShown:function(){},onTrigger:function(){},onUntrigger:function(){},placement:"top",plugins:[],popperOptions:{},role:"tooltip",showOnCreate:!1,theme:"",touch:!0,trigger:"mouseenter focus",triggerTarget:null,updateDuration:0,zIndex:9999},{animateFill:!1,followCursor:!1,inlinePositioning:!1,sticky:!1}),R=Object.keys(z),q=["arrow","boundary","distance","flip","flipBehavior","flipOnUpdate","offset","placement","popperOptions"];function F(t){var n=(t.plugins||[]).reduce((function(e,n){var r=n.name,i=n.defaultValue;return r&&(e[r]=void 0!==t[r]?t[r]:i),e}),{});return e({},t,{},n)}function j(t,n){var r=e({},n,{content:f(n.content,[t])},n.ignoreAttributes?{}:function(t,n){return(n?Object.keys(F(e({},z,{plugins:n}))):R).reduce((function(e,n){var r=(t.getAttribute("data-tippy-"+n)||"").trim();if(!r)return e;if("content"===n)e[n]=r;else try{e[n]=JSON.parse(r)}catch(t){e[n]=r}return e}),{})}(t,n.plugins));return r.interactive&&(r.aria=null),r}function _(t){return t.split("-")[0]}function W(t){t.setAttribute("data-inertia","")}function X(t){t.setAttribute("data-interactive","")}function Y(t,e){if(c(e.content))r(t,""),t.appendChild(e.content);else if("function"!=typeof e.content){t[e.allowHTML?"innerHTML":"textContent"]=e.content}}function J(t){return{tooltip:t.querySelector(".tippy-tooltip"),content:t.querySelector(".tippy-content"),arrow:t.querySelector(".tippy-arrow")||t.querySelector(".tippy-svg-arrow")}}function G(t){var e=v();return!0===t?e.className="tippy-arrow":(e.className="tippy-svg-arrow",c(t)?e.appendChild(t):r(e,t)),e}function K(t,e){var n=v();n.className="tippy-popper",n.style.position="absolute",n.style.top="0",n.style.left="0";var r=v();r.className="tippy-tooltip",r.id="tippy-"+t,r.setAttribute("data-state","hidden"),r.setAttribute("tabindex","-1"),$(r,"add",e.theme);var i=v();return i.className="tippy-content",i.setAttribute("data-state","hidden"),e.interactive&&X(r),e.arrow&&(r.setAttribute("data-arrow",""),r.appendChild(G(e.arrow))),e.inertia&&W(r),Y(i,e),r.appendChild(i),n.appendChild(r),Q(n,e,e),n}function Q(t,e,n){var r,i=J(t),o=i.tooltip,a=i.content,p=i.arrow;t.style.zIndex=""+n.zIndex,o.setAttribute("data-animation",n.animation),o.style.maxWidth="number"==typeof(r=n.maxWidth)?r+"px":r,n.role?o.setAttribute("role",n.role):o.removeAttribute("role"),e.content!==n.content&&Y(a,n),!e.arrow&&n.arrow?(o.appendChild(G(n.arrow)),o.setAttribute("data-arrow","")):e.arrow&&!n.arrow?(o.removeChild(p),o.removeAttribute("data-arrow")):e.arrow!==n.arrow&&(o.removeChild(p),o.appendChild(G(n.arrow))),!e.interactive&&n.interactive?X(o):e.interactive&&!n.interactive&&function(t){t.removeAttribute("data-interactive")}(o),!e.inertia&&n.inertia?W(o):e.inertia&&!n.inertia&&function(t){t.removeAttribute("data-inertia")}(o),e.theme!==n.theme&&($(o,"remove",e.theme),$(o,"add",n.theme))}function Z(t,e,n){["transitionend","webkitTransitionEnd"].forEach((function(r){t[e+"EventListener"](r,n)}))}function $(t,e,n){A(n).forEach((function(n){t.classList[e](n+"-theme")}))}var tt=1,et=[],nt=[];function rt(r,i){var a,s,c,v=j(r,e({},z,{},F(i)));if(!v.multiple&&r._tippy)return null;var k,M,S,P,V,B=!1,U=!1,R=!1,W=0,X=[],Y=h(Dt,v.interactiveDebounce),G=C(v.triggerTarget||r),$=tt++,rt=K($,v),it=J(rt),ot=(V=v.plugins).filter((function(t,e){return V.indexOf(t)===e})),at=it.tooltip,pt=it.content,ut=[at,pt],st={id:$,reference:r,popper:rt,popperChildren:it,popperInstance:null,props:v,state:{currentPlacement:null,isEnabled:!0,isVisible:!1,isDestroyed:!1,isMounted:!1,isShown:!1},plugins:ot,clearDelayTimeouts:function(){clearTimeout(a),clearTimeout(s),cancelAnimationFrame(c)},setProps:function(t){if(st.state.isDestroyed)return;gt("onBeforeUpdate",[st,t]),It();var n=st.props,i=j(r,e({},st.props,{},t,{ignoreAttributes:!0}));i.ignoreAttributes=T(t.ignoreAttributes,n.ignoreAttributes),st.props=i,Ct(),n.interactiveDebounce!==i.interactiveDebounce&&(yt(),Y=h(Dt,i.interactiveDebounce));Q(rt,n,i),st.popperChildren=J(rt),n.triggerTarget&&!i.triggerTarget?x(n.triggerTarget).forEach((function(t){t.removeAttribute("aria-expanded")})):i.triggerTarget&&r.removeAttribute("aria-expanded");if(bt(),st.popperInstance)if(q.some((function(e){return o(t,e)&&t[e]!==n[e]}))){var a=st.popperInstance.reference;st.popperInstance.destroy(),St(),st.popperInstance.reference=a,st.state.isVisible&&st.popperInstance.enableEventListeners()}else st.popperInstance.update();gt("onAfterUpdate",[st,t])},setContent:function(t){st.setProps({content:t})},show:function(t){void 0===t&&(t=p(st.props.duration,0,z.duration));var e=st.state.isVisible,n=st.state.isDestroyed,r=!st.state.isEnabled,i=L.isTouch&&!st.props.touch;if(e||n||r||i)return;if(vt().hasAttribute("disabled"))return;st.popperInstance||St();if(gt("onShow",[st],!1),!1===st.props.onShow(st))return;Et(),rt.style.visibility="visible",st.state.isVisible=!0,st.state.isMounted||m(ut.concat(rt),0);M=function(){st.state.isVisible&&(m([rt],st.props.updateDuration),m(ut,t),g(ut,"visible"),ht(),bt(),I(nt,st),N(!0),st.state.isMounted=!0,gt("onMount",[st]),function(t,e){Tt(t,e)}(t,(function(){st.state.isShown=!0,gt("onShown",[st])})))},function(){W=0;var t,e=st.props.appendTo,n=vt();t=st.props.interactive&&e===z.appendTo||"parent"===e?n.parentNode:f(e,[n]);t.contains(rt)||t.appendChild(rt);d(st.popperInstance.modifiers,"flip","enabled",st.props.flip),st.popperInstance.enableEventListeners(),st.popperInstance.update()}()},hide:function(t){void 0===t&&(t=p(st.props.duration,1,z.duration));var e=!st.state.isVisible&&!B,n=st.state.isDestroyed,r=!st.state.isEnabled&&!B;if(e||n||r)return;if(gt("onHide",[st],!1),!1===st.props.onHide(st)&&!B)return;At(),rt.style.visibility="hidden",st.state.isVisible=!1,st.state.isShown=!1,m(ut,t),g(ut,"hidden"),ht(),bt(),function(t,e){Tt(t,(function(){!st.state.isVisible&&rt.parentNode&&rt.parentNode.contains(rt)&&e()}))}(t,(function(){st.popperInstance.disableEventListeners(),st.popperInstance.options.placement=st.props.placement,rt.parentNode.removeChild(rt),0===(nt=nt.filter((function(t){return t!==st}))).length&&N(!1),st.state.isMounted=!1,gt("onHidden",[st])}))},enable:function(){st.state.isEnabled=!0},disable:function(){st.hide(),st.state.isEnabled=!1},destroy:function(){if(st.state.isDestroyed)return;B=!0,st.clearDelayTimeouts(),st.hide(0),It(),delete r._tippy,st.popperInstance&&st.popperInstance.destroy();B=!1,st.state.isDestroyed=!0,gt("onDestroy",[st])}};r._tippy=st,rt._tippy=st;var ct=ot.map((function(t){return t.fn(st)})),lt=r.hasAttribute("aria-expanded");return Ct(),bt(),v.lazy||St(),gt("onCreate",[st]),v.showOnCreate&&Vt(),rt.addEventListener("mouseenter",(function(){st.props.interactive&&st.state.isVisible&&st.clearDelayTimeouts()})),rt.addEventListener("mouseleave",(function(t){st.props.interactive&&E(st.props.trigger,"mouseenter")&&(Y(t),G.addEventListener("mousemove",Y))})),st;function ft(){var t=st.props.touch;return Array.isArray(t)?t:[t,0]}function dt(){return"hold"===ft()[0]}function vt(){return P||r}function mt(t){return st.state.isMounted&&!st.state.isVisible||L.isTouch||k&&"focus"===k.type?0:p(st.props.delay,t?0:1,z.delay)}function gt(t,e,n){var r;(void 0===n&&(n=!0),ct.forEach((function(n){o(n,t)&&n[t].apply(n,e)})),n)&&(r=st.props)[t].apply(r,e)}function ht(){var t=st.props.aria;if(t){var e="aria-"+t,n=at.id;x(st.props.triggerTarget||r).forEach((function(t){var r=t.getAttribute(e);if(st.state.isVisible)t.setAttribute(e,r?r+" "+n:n);else{var i=r&&r.replace(n,"").trim();i?t.setAttribute(e,i):t.removeAttribute(e)}}))}}function bt(){lt||x(st.props.triggerTarget||r).forEach((function(t){st.props.interactive?t.setAttribute("aria-expanded",st.state.isVisible&&t===vt()?"true":"false"):t.removeAttribute("aria-expanded")}))}function yt(){G.body.removeEventListener("mouseleave",Bt),G.removeEventListener("mousemove",Y),et=et.filter((function(t){return t!==Y}))}function wt(t){if(!st.props.interactive||!rt.contains(t.target)){if(vt().contains(t.target)){if(L.isTouch)return;if(st.state.isVisible&&E(st.props.trigger,"click"))return}!0===st.props.hideOnClick&&(U=!1,st.clearDelayTimeouts(),st.hide(),R=!0,setTimeout((function(){R=!1})),st.state.isMounted||At())}}function Et(){G.addEventListener("mousedown",wt,!0)}function At(){G.removeEventListener("mousedown",wt,!0)}function Tt(t,e){function n(t){t.target===at&&(Z(at,"remove",n),e())}if(0===t)return e();Z(at,"remove",S),Z(at,"add",n),S=n}function xt(t,e,n){void 0===n&&(n=!1),x(st.props.triggerTarget||r).forEach((function(r){r.addEventListener(t,e,n),X.push({node:r,eventType:t,handler:e,options:n})}))}function Ct(){dt()&&(xt("touchstart",Ot,n),xt("touchend",Lt,n)),A(st.props.trigger).forEach((function(t){if("manual"!==t)switch(xt(t,Ot),t){case"mouseenter":xt("mouseleave",Lt);break;case"focus":xt(H?"focusout":"blur",kt);break;case"focusin":xt("focusout",kt)}}))}function It(){X.forEach((function(t){var e=t.node,n=t.eventType,r=t.handler,i=t.options;e.removeEventListener(n,r,i)})),X=[]}function Ot(t){var e=!1;if(st.state.isEnabled&&!Mt(t)&&!R){if(k=t,P=t.currentTarget,bt(),!st.state.isVisible&&l(t)&&et.forEach((function(e){return e(t)})),"click"!==t.type||E(st.props.trigger,"mouseenter")&&!U||!1===st.props.hideOnClick||!st.state.isVisible){var n=ft(),r=n[0],i=n[1];L.isTouch&&"hold"===r&&i?a=setTimeout((function(){Vt(t)}),i):Vt(t)}else e=!0;"click"===t.type&&(U=!e),e&&Bt(t)}}function Dt(t){var e=w(t.target,(function(t){return t===r||t===rt}));"mousemove"===t.type&&e||function(t,e){var n=e.clientX,r=e.clientY;return t.every((function(t){var e=t.popperRect,i=t.tooltipRect,o=t.interactiveBorder,a=Math.min(e.top,i.top),p=Math.max(e.right,i.right),u=Math.max(e.bottom,i.bottom),s=Math.min(e.left,i.left);return a-r>o||r-u>o||s-n>o||n-p>o}))}(y(rt.querySelectorAll(".tippy-popper")).concat(rt).map((function(t){var e=t._tippy,n=e.popperChildren.tooltip,r=e.props.interactiveBorder;return{popperRect:t.getBoundingClientRect(),tooltipRect:n.getBoundingClientRect(),interactiveBorder:r}})),t)&&(yt(),Bt(t))}function Lt(t){if(!(Mt(t)||E(st.props.trigger,"click")&&U))return st.props.interactive?(G.body.addEventListener("mouseleave",Bt),G.addEventListener("mousemove",Y),I(et,Y),void Y(t)):void Bt(t)}function kt(t){(E(st.props.trigger,"focusin")||t.target===vt())&&(st.props.interactive&&t.relatedTarget&&rt.contains(t.relatedTarget)||Bt(t))}function Mt(t){var e="ontouchstart"in window,n=E(t.type,"touch"),r=dt();return e&&L.isTouch&&r&&!n||L.isTouch&&!r&&n}function St(){var n,i=st.props.popperOptions,o=st.popperChildren.arrow,a=u(i,"flip"),p=u(i,"preventOverflow");function s(t){var e=st.state.currentPlacement;st.state.currentPlacement=t.placement,st.props.flip&&!st.props.flipOnUpdate&&(t.flipped&&(st.popperInstance.options.placement=t.placement),d(st.popperInstance.modifiers,"flip","enabled",!1)),at.setAttribute("data-placement",t.placement),!1!==t.attributes["x-out-of-boundaries"]?at.setAttribute("data-out-of-boundaries",""):at.removeAttribute("data-out-of-boundaries");var r=_(t.placement),i=E(["top","bottom"],r),o=E(["bottom","right"],r);at.style.top="0",at.style.left="0",at.style[i?"top":"left"]=(o?1:-1)*n+"px",e&&e!==t.placement&&st.popperInstance.update()}var c=e({eventsEnabled:!1,placement:st.props.placement},i,{modifiers:e({},i&&i.modifiers,{tippyDistance:{enabled:!0,order:0,fn:function(t){n=function(t,e){var n="string"==typeof e&&E(e,"rem"),r=t.documentElement;return r&&n?parseFloat(getComputedStyle(r).fontSize||String(16))*O(e):O(e)}(G,st.props.distance);var e=_(t.placement),r=D(e,p&&p.padding,n),i=D(e,a&&a.padding,n),o=st.popperInstance.modifiers;return d(o,"preventOverflow","padding",r),d(o,"flip","padding",i),t}},preventOverflow:e({boundariesElement:st.props.boundary},p),flip:e({enabled:st.props.flip,behavior:st.props.flipBehavior},a),arrow:e({element:o,enabled:!!o},u(i,"arrow")),offset:e({offset:st.props.offset},u(i,"offset"))}),onCreate:function(t){s(t),b(i&&i.onCreate,c.onCreate,[t]),Pt()},onUpdate:function(t){s(t),b(i&&i.onUpdate,c.onUpdate,[t]),Pt()}});st.popperInstance=new t(r,rt,c)}function Pt(){0===W?(W++,st.popperInstance.update()):M&&1===W&&(W++,rt.offsetHeight,M())}function Vt(t){st.clearDelayTimeouts(),st.popperInstance||St(),t&&gt("onTrigger",[st,t]),Et();var e=mt(!0);e?a=setTimeout((function(){st.show()}),e):st.show()}function Bt(t){if(st.clearDelayTimeouts(),gt("onUntrigger",[st,t]),st.state.isVisible){if(!(E(st.props.trigger,"mouseenter")&&E(st.props.trigger,"click")&&E(["mouseleave","mousemove"],t.type)&&U)){var e=mt(!1);e?s=setTimeout((function(){st.state.isVisible&&st.hide()}),e):c=requestAnimationFrame((function(){st.hide()}))}}else At()}}function it(t,r,i){void 0===r&&(r={}),void 0===i&&(i=[]),i=z.plugins.concat(r.plugins||i),document.addEventListener("touchstart",M,e({},n,{capture:!0})),window.addEventListener("blur",P);var o=e({},r,{plugins:i}),p=a(t).reduce((function(t,e){var n=e&&rt(e,o);return n&&t.push(n),t}),[]);return c(t)?p[0]:p}it.version="5.2.1",it.defaultProps=z,it.setDefaultProps=function(t){Object.keys(t).forEach((function(e){z[e]=t[e]}))},it.currentInput=L;var ot={mouseover:"mouseenter",focusin:"focus",click:"click"};var at={name:"animateFill",defaultValue:!1,fn:function(t){var e=t.popperChildren,n=e.tooltip,r=e.content,i=t.props.animateFill?function(){var t=v();return t.className="tippy-backdrop",g([t],"hidden"),t}():null;function o(){t.popperChildren.backdrop=i}return{onCreate:function(){i&&(o(),n.insertBefore(i,n.firstElementChild),n.setAttribute("data-animatefill",""),n.style.overflow="hidden",t.setProps({animation:"shift-away",arrow:!1}))},onMount:function(){if(i){var t=n.style.transitionDuration,e=Number(t.replace("ms",""));r.style.transitionDelay=Math.round(e/10)+"ms",i.style.transitionDuration=t,g([i],"visible")}},onShow:function(){i&&(i.style.transitionDuration="0ms")},onHide:function(){i&&g([i],"hidden")},onAfterUpdate:function(){o()}}}};var pt={name:"followCursor",defaultValue:!1,fn:function(t){var e,n=t.reference,r=t.popper,i=null,o=C(t.props.triggerTarget||n),a=null,p=!1,u=t.props;function s(){return"manual"===t.props.trigger.trim()}function c(){var e=!!s()||null!==a&&!(0===a.clientX&&0===a.clientY);return t.props.followCursor&&e}function f(){return L.isTouch||"initial"===t.props.followCursor&&t.state.isVisible}function d(){t.popperInstance&&i&&(t.popperInstance.reference=i)}function v(){if(c()||t.props.placement!==u.placement){var e=u.placement,n=e.split("-")[1];p=!0,t.setProps({placement:c()&&n?e.replace(n,"start"===n?"end":"start"):e}),p=!1}}function m(){t.popperInstance&&c()&&f()&&t.popperInstance.disableEventListeners()}function g(){c()?o.addEventListener("mousemove",y):d()}function h(){c()&&y(e)}function b(){o.removeEventListener("mousemove",y)}function y(o){var a=e=o,p=a.clientX,u=a.clientY;if(t.popperInstance&&t.state.currentPlacement){var s=w(o.target,(function(t){return t===n})),c=t.props.followCursor,l="horizontal"===c,d="vertical"===c,v=E(["top","bottom"],_(t.state.currentPlacement)),m=function(t,e){var n=e?t.offsetWidth:t.offsetHeight;return{size:n,x:e?n:0,y:e?0:n}}(r,v),g=m.size,h=m.x,y=m.y;!s&&t.props.interactive||(null===i&&(i=t.popperInstance.reference),t.popperInstance.reference={referenceNode:n,clientWidth:0,clientHeight:0,getBoundingClientRect:function(){var t=n.getBoundingClientRect();return{width:v?g:0,height:v?0:g,top:(l?t.top:u)-y,bottom:(l?t.bottom:u)+y,left:(d?t.left:p)-h,right:(d?t.right:p)+h}}},t.popperInstance.update()),f()&&b()}}return{onAfterUpdate:function(t,e){var n;p||(n=e,Object.keys(n).forEach((function(t){u[t]=T(n[t],u[t])})),e.placement&&v()),e.placement&&m(),requestAnimationFrame(h)},onMount:function(){h(),m()},onShow:function(){s()&&(e=a={clientX:0,clientY:0},v(),g())},onTrigger:function(t,n){a||(l(n)&&(a={clientX:n.clientX,clientY:n.clientY},e=n),v(),g())},onUntrigger:function(){t.state.isVisible||(b(),a=null)},onHidden:function(){b(),d(),a=null}}}};var ut={name:"inlinePositioning",defaultValue:!1,fn:function(t){var e=t.reference;function n(){return!!t.props.inlinePositioning}return{onHidden:function(){n()&&(t.popperInstance.reference=e)},onShow:function(){n()&&(t.popperInstance.reference={referenceNode:e,clientWidth:0,clientHeight:0,getBoundingClientRect:function(){return function(t,e,n){if(n.length<2||null===t)return e;switch(t){case"top":case"bottom":var r=n[0],i=n[n.length-1],o="top"===t,a=r.top,p=i.bottom,u=o?r.left:i.left,s=o?r.right:i.right;return{top:a,bottom:p,left:u,right:s,width:s-u,height:p-a};case"left":case"right":var c=Math.min.apply(Math,n.map((function(t){return t.left}))),l=Math.max.apply(Math,n.map((function(t){return t.right}))),f=n.filter((function(e){return"left"===t?e.left===c:e.right===l})),d=f[0].top,v=f[f.length-1].bottom;return{top:d,bottom:v,left:c,right:l,width:l-c,height:v-d};default:return e}}(t.state.currentPlacement&&_(t.state.currentPlacement),e.getBoundingClientRect(),y(e.getClientRects()))}})}}}};var st={name:"sticky",defaultValue:!1,fn:function(t){var e=t.reference,n=t.popper;function r(e){return!0===t.props.sticky||t.props.sticky===e}var i=null,o=null;function a(){var p=r("reference")?(t.popperInstance?t.popperInstance.reference:e).getBoundingClientRect():null,u=r("popper")?n.getBoundingClientRect():null;(p&&ct(i,p)||u&&ct(o,u))&&t.popperInstance.update(),i=p,o=u,t.state.isMounted&&requestAnimationFrame(a)}return{onMount:function(){t.props.sticky&&a()}}}};function ct(t,e){return!t||!e||(t.top!==e.top||t.right!==e.right||t.bottom!==e.bottom||t.left!==e.left)}return V&&function(t){var e=document.createElement("style");e.textContent=t,e.setAttribute("data-tippy-stylesheet","");var n=document.head,r=document.querySelector("head>style,head>link");r?n.insertBefore(e,r):n.appendChild(e)}(".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100vw - 10px);transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-property:transform}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;background-color:#333;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top]>.tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left]>.tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right]>.tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-interactive][data-state=visible]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{position:absolute;border-color:transparent;border-style:solid}.tippy-content{padding:5px 9px}"),it.setDefaultProps({plugins:[at,pt,ut,st]}),it.createSingleton=function(t,n,r){void 0===n&&(n={}),void 0===r&&(r=[]),r=n.plugins||r,t.forEach((function(t){t.disable()}));var i,o,a=e({},z,{},n).aria,p=!1,u=t.map((function(t){return t.reference})),s={fn:function(e){function n(t){if(i){var n="aria-"+i;t&&!e.props.interactive?o.setAttribute(n,e.popperChildren.tooltip.id):o.removeAttribute(n)}}return{onAfterUpdate:function(t,n){var r=n.aria;void 0!==r&&r!==a&&(p?(p=!0,e.setProps({aria:null}),p=!1):a=r)},onDestroy:function(){t.forEach((function(t){t.enable()}))},onMount:function(){n(!0)},onUntrigger:function(){n(!1)},onTrigger:function(r,p){var s=p.currentTarget,c=u.indexOf(s);s!==o&&(o=s,i=a,e.state.isVisible&&n(!0),e.popperInstance.reference=s,e.setContent(t[c].props.content))}}}};return it(v(),e({},n,{plugins:[s].concat(r),aria:null,triggerTarget:u}))},it.delegate=function(t,n,r){void 0===r&&(r=[]),r=n.plugins||r;var i,o,a=[],p=[],u=n.target,s=(i=["target"],o=e({},n),i.forEach((function(t){delete o[t]})),o),c=e({},s,{plugins:r,trigger:"manual"}),l=e({},s,{plugins:r,showOnCreate:!0}),f=it(t,c);function d(t){if(t.target){var e=t.target.closest(u);if(e)if(E(e.getAttribute("data-tippy-trigger")||n.trigger||z.trigger,ot[t.type])){var r=it(e,l);r&&(p=p.concat(r))}}}function v(t,e,n,r){void 0===r&&(r=!1),t.addEventListener(e,n,r),a.push({node:t,eventType:e,handler:n,options:r})}return x(f).forEach((function(t){var e=t.destroy;t.destroy=function(t){void 0===t&&(t=!0),t&&p.forEach((function(t){t.destroy()})),p=[],a.forEach((function(t){var e=t.node,n=t.eventType,r=t.handler,i=t.options;e.removeEventListener(n,r,i)})),a=[],e()},function(t){var e=t.reference;v(e,"mouseover",d),v(e,"focusin",d),v(e,"click",d)}(t)})),f},it.hideAll=function(t){var e=void 0===t?{}:t,n=e.exclude,r=e.duration;nt.forEach((function(t){var e=!1;n&&(e=i(n)?t.reference===n:t.popper===n.popper),e||t.hide(r)}))},it.roundArrow='<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>',it}(Popper);
//# sourceMappingURL=tippy-bundle.iife.min.js.map


//js

//sweatalert
//js
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.swal=e():t.swal=e()}(this,function(){return function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=8)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o="swal-button";e.CLASS_NAMES={MODAL:"swal-modal",OVERLAY:"swal-overlay",SHOW_MODAL:"swal-overlay--show-modal",MODAL_TITLE:"swal-title",MODAL_TEXT:"swal-text",ICON:"swal-icon",ICON_CUSTOM:"swal-icon--custom",CONTENT:"swal-content",FOOTER:"swal-footer",BUTTON_CONTAINER:"swal-button-container",BUTTON:o,CONFIRM_BUTTON:o+"--confirm",CANCEL_BUTTON:o+"--cancel",DANGER_BUTTON:o+"--danger",BUTTON_LOADING:o+"--loading",BUTTON_LOADER:o+"__loader"},e.default=e.CLASS_NAMES},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.getNode=function(t){var e="."+t;return document.querySelector(e)},e.stringToNode=function(t){var e=document.createElement("div");return e.innerHTML=t.trim(),e.firstChild},e.insertAfter=function(t,e){var n=e.nextSibling;e.parentNode.insertBefore(t,n)},e.removeNode=function(t){t.parentElement.removeChild(t)},e.throwErr=function(t){throw t=t.replace(/ +(?= )/g,""),"SweetAlert: "+(t=t.trim())},e.isPlainObject=function(t){if("[object Object]"!==Object.prototype.toString.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype},e.ordinalSuffixOf=function(t){var e=t%10,n=t%100;return 1===e&&11!==n?t+"st":2===e&&12!==n?t+"nd":3===e&&13!==n?t+"rd":t+"th"}},function(t,e,n){"use strict";function o(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}Object.defineProperty(e,"__esModule",{value:!0}),o(n(25));var r=n(26);e.overlayMarkup=r.default,o(n(27)),o(n(28)),o(n(29));var i=n(0),a=i.default.MODAL_TITLE,s=i.default.MODAL_TEXT,c=i.default.ICON,l=i.default.FOOTER;e.iconMarkup='\n  <div class="'+c+'"></div>',e.titleMarkup='\n  <div class="'+a+'"></div>\n',e.textMarkup='\n  <div class="'+s+'"></div>',e.footerMarkup='\n  <div class="'+l+'"></div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1);e.CONFIRM_KEY="confirm",e.CANCEL_KEY="cancel";var r={visible:!0,text:null,value:null,className:"",closeModal:!0},i=Object.assign({},r,{visible:!1,text:"Cancel",value:null}),a=Object.assign({},r,{text:"OK",value:!0});e.defaultButtonList={cancel:i,confirm:a};var s=function(t){switch(t){case e.CONFIRM_KEY:return a;case e.CANCEL_KEY:return i;default:var n=t.charAt(0).toUpperCase()+t.slice(1);return Object.assign({},r,{text:n,value:t})}},c=function(t,e){var n=s(t);return!0===e?Object.assign({},n,{visible:!0}):"string"==typeof e?Object.assign({},n,{visible:!0,text:e}):o.isPlainObject(e)?Object.assign({visible:!0},n,e):Object.assign({},n,{visible:!1})},l=function(t){for(var e={},n=0,o=Object.keys(t);n<o.length;n++){var r=o[n],a=t[r],s=c(r,a);e[r]=s}return e.cancel||(e.cancel=i),e},u=function(t){var n={};switch(t.length){case 1:n[e.CANCEL_KEY]=Object.assign({},i,{visible:!1});break;case 2:n[e.CANCEL_KEY]=c(e.CANCEL_KEY,t[0]),n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t[1]);break;default:o.throwErr("Invalid number of 'buttons' in array ("+t.length+").\n      If you want more than 2 buttons, you need to use an object!")}return n};e.getButtonListOpts=function(t){var n=e.defaultButtonList;return"string"==typeof t?n[e.CONFIRM_KEY]=c(e.CONFIRM_KEY,t):Array.isArray(t)?n=u(t):o.isPlainObject(t)?n=l(t):!0===t?n=u([!0,!0]):!1===t?n=u([!1,!1]):void 0===t&&(n=e.defaultButtonList),n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=n(0),a=i.default.MODAL,s=i.default.OVERLAY,c=n(30),l=n(31),u=n(32),f=n(33);e.injectElIntoModal=function(t){var e=o.getNode(a),n=o.stringToNode(t);return e.appendChild(n),n};var d=function(t){t.className=a,t.textContent=""},p=function(t,e){d(t);var n=e.className;n&&t.classList.add(n)};e.initModalContent=function(t){var e=o.getNode(a);p(e,t),c.default(t.icon),l.initTitle(t.title),l.initText(t.text),f.default(t.content),u.default(t.buttons,t.dangerMode)};var m=function(){var t=o.getNode(s),e=o.stringToNode(r.modalMarkup);t.appendChild(e)};e.default=m},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r={isOpen:!1,promise:null,actions:{},timer:null},i=Object.assign({},r);e.resetState=function(){i=Object.assign({},r)},e.setActionValue=function(t){if("string"==typeof t)return a(o.CONFIRM_KEY,t);for(var e in t)a(e,t[e])};var a=function(t,e){i.actions[t]||(i.actions[t]={}),Object.assign(i.actions[t],{value:e})};e.setActionOptionsFor=function(t,e){var n=(void 0===e?{}:e).closeModal,o=void 0===n||n;Object.assign(i.actions[t],{closeModal:o})},e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(0),a=i.default.OVERLAY,s=i.default.SHOW_MODAL,c=i.default.BUTTON,l=i.default.BUTTON_LOADING,u=n(5);e.openModal=function(){o.getNode(a).classList.add(s),u.default.isOpen=!0};var f=function(){o.getNode(a).classList.remove(s),u.default.isOpen=!1};e.onAction=function(t){void 0===t&&(t=r.CANCEL_KEY);var e=u.default.actions[t],n=e.value;if(!1===e.closeModal){var i=c+"--"+t;o.getNode(i).classList.add(l)}else f();u.default.promise.resolve(n)},e.getState=function(){var t=Object.assign({},u.default);return delete t.promise,delete t.timer,t},e.stopLoading=function(){for(var t=document.querySelectorAll("."+c),e=0;e<t.length;e++){t[e].classList.remove(l)}}},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){(function(e){t.exports=e.sweetAlert=n(9)}).call(e,n(7))},function(t,e,n){(function(e){t.exports=e.swal=n(10)}).call(e,n(7))},function(t,e,n){"undefined"!=typeof window&&n(11),n(16);var o=n(23).default;t.exports=o},function(t,e,n){var o=n(12);"string"==typeof o&&(o=[[t.i,o,""]]);var r={insertAt:"top"};r.transform=void 0;n(14)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,'.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}',""])},function(t,e){function n(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=o(r);return[n].concat(r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"})).concat([i]).join("\n")}return[n].join("\n")}function o(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var o=n(e,t);return e[2]?"@media "+e[2]+"{"+o+"}":o}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){function o(t,e){for(var n=0;n<t.length;n++){var o=t[n],r=m[o.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](o.parts[i]);for(;i<o.parts.length;i++)r.parts.push(u(o.parts[i],e))}else{for(var a=[],i=0;i<o.parts.length;i++)a.push(u(o.parts[i],e));m[o.id]={id:o.id,refs:1,parts:a}}}}function r(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s=i[1],c=i[2],l=i[3],u={css:s,media:c,sourceMap:l};o[a]?o[a].parts.push(u):n.push(o[a]={id:a,parts:[u]})}return n}function i(t,e){var n=v(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=w[w.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),w.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function a(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=w.indexOf(t);e>=0&&w.splice(e,1)}function s(t){var e=document.createElement("style");return t.attrs.type="text/css",l(e,t.attrs),i(t,e),e}function c(t){var e=document.createElement("link");return t.attrs.type="text/css",t.attrs.rel="stylesheet",l(e,t.attrs),i(t,e),e}function l(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i=e.transform(t.css)))return function(){};t.css=i}if(e.singleton){var l=h++;n=g||(g=s(e)),o=f.bind(null,n,l,!1),r=f.bind(null,n,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(e),o=p.bind(null,n,e),r=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),o=d.bind(null,n),r=function(){a(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}function f(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e){var n=e.css,o=e.media;if(o&&t.setAttribute("media",o),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function p(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=y(o)),r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}var m={},b=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),v=function(t){var e={};return function(n){return void 0===e[n]&&(e[n]=t.call(this,n)),e[n]}}(function(t){return document.querySelector(t)}),g=null,h=0,w=[],y=n(15);t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},e.attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||(e.singleton=b()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=r(t,e);return o(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var s=n[a],c=m[s.id];c.refs--,i.push(c)}if(t){o(r(t,e),e)}for(var a=0;a<i.length;a++){var c=i[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete m[c.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});if(/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r))return t;var i;return i=0===r.indexOf("//")?r:0===r.indexOf("/")?n+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")"})}},function(t,e,n){var o=n(17);"undefined"==typeof window||window.Promise||(window.Promise=o),n(21),String.prototype.includes||(String.prototype.includes=function(t,e){"use strict";return"number"!=typeof e&&(e=0),!(e+t.length>this.length)&&-1!==this.indexOf(t,e)}),Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(t,e){if(null==this)throw new TypeError('"this" is null or not defined');var n=Object(this),o=n.length>>>0;if(0===o)return!1;for(var r=0|e,i=Math.max(r>=0?r:o-Math.abs(r),0);i<o;){if(function(t,e){return t===e||"number"==typeof t&&"number"==typeof e&&isNaN(t)&&isNaN(e)}(n[i],t))return!0;i++}return!1}}),"undefined"!=typeof window&&function(t){t.forEach(function(t){t.hasOwnProperty("remove")||Object.defineProperty(t,"remove",{configurable:!0,enumerable:!0,writable:!0,value:function(){this.parentNode.removeChild(this)}})})}([Element.prototype,CharacterData.prototype,DocumentType.prototype])},function(t,e,n){(function(e){!function(n){function o(){}function r(t,e){return function(){t.apply(e,arguments)}}function i(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],f(t,this)}function a(t,e){for(;3===t._state;)t=t._value;if(0===t._state)return void t._deferreds.push(e);t._handled=!0,i._immediateFn(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?s:c)(e.promise,t._value);var o;try{o=n(t._value)}catch(t){return void c(e.promise,t)}s(e.promise,o)})}function s(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof i)return t._state=3,t._value=e,void l(t);if("function"==typeof n)return void f(r(n,e),t)}t._state=1,t._value=e,l(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,l(t)}function l(t){2===t._state&&0===t._deferreds.length&&i._immediateFn(function(){t._handled||i._unhandledRejectionFn(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)a(t,t._deferreds[e]);t._deferreds=null}function u(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function f(t,e){var n=!1;try{t(function(t){n||(n=!0,s(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout;i.prototype.catch=function(t){return this.then(null,t)},i.prototype.then=function(t,e){var n=new this.constructor(o);return a(this,new u(t,e,n)),n},i.all=function(t){var e=Array.prototype.slice.call(t);return new i(function(t,n){function o(i,a){try{if(a&&("object"==typeof a||"function"==typeof a)){var s=a.then;if("function"==typeof s)return void s.call(a,function(t){o(i,t)},n)}e[i]=a,0==--r&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var r=e.length,i=0;i<e.length;i++)o(i,e[i])})},i.resolve=function(t){return t&&"object"==typeof t&&t.constructor===i?t:new i(function(e){e(t)})},i.reject=function(t){return new i(function(e,n){n(t)})},i.race=function(t){return new i(function(e,n){for(var o=0,r=t.length;o<r;o++)t[o].then(e,n)})},i._immediateFn="function"==typeof e&&function(t){e(t)}||function(t){d(t,0)},i._unhandledRejectionFn=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)},i._setImmediateFn=function(t){i._immediateFn=t},i._setUnhandledRejectionFn=function(t){i._unhandledRejectionFn=t},void 0!==t&&t.exports?t.exports=i:n.Promise||(n.Promise=i)}(this)}).call(e,n(18).setImmediate)},function(t,e,n){function o(t,e){this._id=t,this._clearFn=e}var r=Function.prototype.apply;e.setTimeout=function(){return new o(r.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new o(r.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t&&t.close()},o.prototype.unref=o.prototype.ref=function(){},o.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},n(19),e.setImmediate=setImmediate,e.clearImmediate=clearImmediate},function(t,e,n){(function(t,e){!function(t,n){"use strict";function o(t){"function"!=typeof t&&(t=new Function(""+t));for(var e=new Array(arguments.length-1),n=0;n<e.length;n++)e[n]=arguments[n+1];var o={callback:t,args:e};return l[c]=o,s(c),c++}function r(t){delete l[t]}function i(t){var e=t.callback,o=t.args;switch(o.length){case 0:e();break;case 1:e(o[0]);break;case 2:e(o[0],o[1]);break;case 3:e(o[0],o[1],o[2]);break;default:e.apply(n,o)}}function a(t){if(u)setTimeout(a,0,t);else{var e=l[t];if(e){u=!0;try{i(e)}finally{r(t),u=!1}}}}if(!t.setImmediate){var s,c=1,l={},u=!1,f=t.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(t);d=d&&d.setTimeout?d:t,"[object process]"==={}.toString.call(t.process)?function(){s=function(t){e.nextTick(function(){a(t)})}}():function(){if(t.postMessage&&!t.importScripts){var e=!0,n=t.onmessage;return t.onmessage=function(){e=!1},t.postMessage("","*"),t.onmessage=n,e}}()?function(){var e="setImmediate$"+Math.random()+"$",n=function(n){n.source===t&&"string"==typeof n.data&&0===n.data.indexOf(e)&&a(+n.data.slice(e.length))};t.addEventListener?t.addEventListener("message",n,!1):t.attachEvent("onmessage",n),s=function(n){t.postMessage(e+n,"*")}}():t.MessageChannel?function(){var t=new MessageChannel;t.port1.onmessage=function(t){a(t.data)},s=function(e){t.port2.postMessage(e)}}():f&&"onreadystatechange"in f.createElement("script")?function(){var t=f.documentElement;s=function(e){var n=f.createElement("script");n.onreadystatechange=function(){a(e),n.onreadystatechange=null,t.removeChild(n),n=null},t.appendChild(n)}}():function(){s=function(t){setTimeout(a,0,t)}}(),d.setImmediate=o,d.clearImmediate=r}}("undefined"==typeof self?void 0===t?this:t:self)}).call(e,n(7),n(20))},function(t,e){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(t){if(u===setTimeout)return setTimeout(t,0);if((u===n||!u)&&setTimeout)return u=setTimeout,setTimeout(t,0);try{return u(t,0)}catch(e){try{return u.call(null,t,0)}catch(e){return u.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function a(){b&&p&&(b=!1,p.length?m=p.concat(m):v=-1,m.length&&s())}function s(){if(!b){var t=r(a);b=!0;for(var e=m.length;e;){for(p=m,m=[];++v<e;)p&&p[v].run();v=-1,e=m.length}p=null,b=!1,i(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var u,f,d=t.exports={};!function(){try{u="function"==typeof setTimeout?setTimeout:n}catch(t){u=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(t){f=o}}();var p,m=[],b=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];m.push(new c(t,e)),1!==m.length||b||r(s)},c.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=l,d.addListener=l,d.once=l,d.off=l,d.removeListener=l,d.removeAllListeners=l,d.emit=l,d.prependListener=l,d.prependOnceListener=l,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},function(t,e,n){"use strict";n(22).polyfill()},function(t,e,n){"use strict";function o(t,e){if(void 0===t||null===t)throw new TypeError("Cannot convert first argument to object");for(var n=Object(t),o=1;o<arguments.length;o++){var r=arguments[o];if(void 0!==r&&null!==r)for(var i=Object.keys(Object(r)),a=0,s=i.length;a<s;a++){var c=i[a],l=Object.getOwnPropertyDescriptor(r,c);void 0!==l&&l.enumerable&&(n[c]=r[c])}}return n}function r(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:o})}t.exports={assign:o,polyfill:r}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(24),r=n(6),i=n(5),a=n(36),s=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if("undefined"!=typeof window){var n=a.getOpts.apply(void 0,t);return new Promise(function(t,e){i.default.promise={resolve:t,reject:e},o.default(n),setTimeout(function(){r.openModal()})})}};s.close=r.onAction,s.getState=r.getState,s.setActionValue=i.setActionValue,s.stopLoading=r.stopLoading,s.setDefaults=a.setDefaults,e.default=s},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(0),i=r.default.MODAL,a=n(4),s=n(34),c=n(35),l=n(1);e.init=function(t){o.getNode(i)||(document.body||l.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"),s.default(),a.default()),a.initModalContent(t),c.default(t)},e.default=e.init},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.MODAL;e.modalMarkup='\n  <div class="'+r+'" role="dialog" aria-modal="true"></div>',e.default=e.modalMarkup},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.OVERLAY,i='<div \n    class="'+r+'"\n    tabIndex="-1">\n  </div>';e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.ICON;e.errorIconMarkup=function(){var t=r+"--error",e=t+"__line";return'\n    <div class="'+t+'__x-mark">\n      <span class="'+e+" "+e+'--left"></span>\n      <span class="'+e+" "+e+'--right"></span>\n    </div>\n  '},e.warningIconMarkup=function(){var t=r+"--warning";return'\n    <span class="'+t+'__body">\n      <span class="'+t+'__dot"></span>\n    </span>\n  '},e.successIconMarkup=function(){var t=r+"--success";return'\n    <span class="'+t+"__line "+t+'__line--long"></span>\n    <span class="'+t+"__line "+t+'__line--tip"></span>\n\n    <div class="'+t+'__ring"></div>\n    <div class="'+t+'__hide-corners"></div>\n  '}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.CONTENT;e.contentMarkup='\n  <div class="'+r+'">\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),r=o.default.BUTTON_CONTAINER,i=o.default.BUTTON,a=o.default.BUTTON_LOADER;e.buttonMarkup='\n  <div class="'+r+'">\n\n    <button\n      class="'+i+'"\n    ></button>\n\n    <div class="'+a+'">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n'},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(4),r=n(2),i=n(0),a=i.default.ICON,s=i.default.ICON_CUSTOM,c=["error","warning","success","info"],l={error:r.errorIconMarkup(),warning:r.warningIconMarkup(),success:r.successIconMarkup()},u=function(t,e){var n=a+"--"+t;e.classList.add(n);var o=l[t];o&&(e.innerHTML=o)},f=function(t,e){e.classList.add(s);var n=document.createElement("img");n.src=t,e.appendChild(n)},d=function(t){if(t){var e=o.injectElIntoModal(r.iconMarkup);c.includes(t)?u(t,e):f(t,e)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(2),r=n(4),i=function(t){navigator.userAgent.includes("AppleWebKit")&&(t.style.display="none",t.offsetHeight,t.style.display="")};e.initTitle=function(t){if(t){var e=r.injectElIntoModal(o.titleMarkup);e.textContent=t,i(e)}},e.initText=function(t){if(t){var e=document.createDocumentFragment();t.split("\n").forEach(function(t,n,o){e.appendChild(document.createTextNode(t)),n<o.length-1&&e.appendChild(document.createElement("br"))});var n=r.injectElIntoModal(o.textMarkup);n.appendChild(e),i(n)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(4),i=n(0),a=i.default.BUTTON,s=i.default.DANGER_BUTTON,c=n(3),l=n(2),u=n(6),f=n(5),d=function(t,e,n){var r=e.text,i=e.value,d=e.className,p=e.closeModal,m=o.stringToNode(l.buttonMarkup),b=m.querySelector("."+a),v=a+"--"+t;if(b.classList.add(v),d){(Array.isArray(d)?d:d.split(" ")).filter(function(t){return t.length>0}).forEach(function(t){b.classList.add(t)})}n&&t===c.CONFIRM_KEY&&b.classList.add(s),b.textContent=r;var g={};return g[t]=i,f.setActionValue(g),f.setActionOptionsFor(t,{closeModal:p}),b.addEventListener("click",function(){return u.onAction(t)}),m},p=function(t,e){var n=r.injectElIntoModal(l.footerMarkup);for(var o in t){var i=t[o],a=d(o,i,e);i.visible&&n.appendChild(a)}0===n.children.length&&n.remove()};e.default=p},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(3),r=n(4),i=n(2),a=n(5),s=n(6),c=n(0),l=c.default.CONTENT,u=function(t){t.addEventListener("input",function(t){var e=t.target,n=e.value;a.setActionValue(n)}),t.addEventListener("keyup",function(t){if("Enter"===t.key)return s.onAction(o.CONFIRM_KEY)}),setTimeout(function(){t.focus(),a.setActionValue("")},0)},f=function(t,e,n){var o=document.createElement(e),r=l+"__"+e;o.classList.add(r);for(var i in n){var a=n[i];o[i]=a}"input"===e&&u(o),t.appendChild(o)},d=function(t){if(t){var e=r.injectElIntoModal(i.contentMarkup),n=t.element,o=t.attributes;"string"==typeof n?f(e,n,o):e.appendChild(n)}};e.default=d},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(2),i=function(){var t=o.stringToNode(r.overlayMarkup);document.body.appendChild(t)};e.default=i},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(5),r=n(6),i=n(1),a=n(3),s=n(0),c=s.default.MODAL,l=s.default.BUTTON,u=s.default.OVERLAY,f=function(t){t.preventDefault(),v()},d=function(t){t.preventDefault(),g()},p=function(t){if(o.default.isOpen)switch(t.key){case"Escape":return r.onAction(a.CANCEL_KEY)}},m=function(t){if(o.default.isOpen)switch(t.key){case"Tab":return f(t)}},b=function(t){if(o.default.isOpen)return"Tab"===t.key&&t.shiftKey?d(t):void 0},v=function(){var t=i.getNode(l);t&&(t.tabIndex=0,t.focus())},g=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l),n=e.length-1,o=e[n];o&&o.focus()},h=function(t){t[t.length-1].addEventListener("keydown",m)},w=function(t){t[0].addEventListener("keydown",b)},y=function(){var t=i.getNode(c),e=t.querySelectorAll("."+l);e.length&&(h(e),w(e))},x=function(t){if(i.getNode(u)===t.target)return r.onAction(a.CANCEL_KEY)},_=function(t){var e=i.getNode(u);e.removeEventListener("click",x),t&&e.addEventListener("click",x)},k=function(t){o.default.timer&&clearTimeout(o.default.timer),t&&(o.default.timer=window.setTimeout(function(){return r.onAction(a.CANCEL_KEY)},t))},O=function(t){t.closeOnEsc?document.addEventListener("keyup",p):document.removeEventListener("keyup",p),t.dangerMode?v():g(),y(),_(t.closeOnClickOutside),k(t.timer)};e.default=O},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r=n(3),i=n(37),a=n(38),s={title:null,text:null,icon:null,buttons:r.defaultButtonList,content:null,className:null,closeOnClickOutside:!0,closeOnEsc:!0,dangerMode:!1,timer:null},c=Object.assign({},s);e.setDefaults=function(t){c=Object.assign({},s,t)};var l=function(t){var e=t&&t.button,n=t&&t.buttons;return void 0!==e&&void 0!==n&&o.throwErr("Cannot set both 'button' and 'buttons' options!"),void 0!==e?{confirm:e}:n},u=function(t){return o.ordinalSuffixOf(t+1)},f=function(t,e){o.throwErr(u(e)+" argument ('"+t+"') is invalid")},d=function(t,e){var n=t+1,r=e[n];o.isPlainObject(r)||void 0===r||o.throwErr("Expected "+u(n)+" argument ('"+r+"') to be a plain object")},p=function(t,e){var n=t+1,r=e[n];void 0!==r&&o.throwErr("Unexpected "+u(n)+" argument ("+r+")")},m=function(t,e,n,r){var i=typeof e,a="string"===i,s=e instanceof Element;if(a){if(0===n)return{text:e};if(1===n)return{text:e,title:r[0]};if(2===n)return d(n,r),{icon:e};f(e,n)}else{if(s&&0===n)return d(n,r),{content:e};if(o.isPlainObject(e))return p(n,r),e;f(e,n)}};e.getOpts=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n={};t.forEach(function(e,o){var r=m(0,e,o,t);Object.assign(n,r)});var o=l(n);n.buttons=r.getButtonListOpts(o),delete n.button,n.content=i.getContentOpts(n.content);var u=Object.assign({},s,c,n);return Object.keys(u).forEach(function(t){a.DEPRECATED_OPTS[t]&&a.logDeprecation(t)}),u}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(1),r={element:"input",attributes:{placeholder:""}};e.getContentOpts=function(t){var e={};return o.isPlainObject(t)?Object.assign(e,t):t instanceof Element?{element:t}:"input"===t?r:null}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.logDeprecation=function(t){var n=e.DEPRECATED_OPTS[t],o=n.onlyRename,r=n.replacement,i=n.subOption,a=n.link,s=o?"renamed":"deprecated",c='SweetAlert warning: "'+t+'" option has been '+s+".";if(r){c+=" Please use"+(i?' "'+i+'" in ':" ")+'"'+r+'" instead.'}var l="https://sweetalert.js.org";c+=a?" More details: "+l+a:" More details: "+l+"/guides/#upgrading-from-1x",console.warn(c)},e.DEPRECATED_OPTS={type:{replacement:"icon",link:"/docs/#icon"},imageUrl:{replacement:"icon",link:"/docs/#icon"},customClass:{replacement:"className",onlyRename:!0,link:"/docs/#classname"},imageSize:{},showCancelButton:{replacement:"buttons",link:"/docs/#buttons"},showConfirmButton:{replacement:"button",link:"/docs/#button"},confirmButtonText:{replacement:"button",link:"/docs/#button"},confirmButtonColor:{},cancelButtonText:{replacement:"buttons",link:"/docs/#buttons"},closeOnConfirm:{replacement:"button",subOption:"closeModal",link:"/docs/#button"},closeOnCancel:{replacement:"buttons",subOption:"closeModal",link:"/docs/#buttons"},showLoaderOnConfirm:{replacement:"buttons"},animation:{},inputType:{replacement:"content",link:"/docs/#content"},inputValue:{replacement:"content",link:"/docs/#content"},inputPlaceholder:{replacement:"content",link:"/docs/#content"},html:{replacement:"content",link:"/docs/#content"},allowEscapeKey:{replacement:"closeOnEsc",onlyRename:!0,link:"/docs/#closeonesc"},allowClickOutside:{replacement:"closeOnClickOutside",onlyRename:!0,link:"/docs/#closeonclickoutside"}}}])});
//min

document.addEventListener('DOMContentLoaded', () => {

  const isRight = CONFIG.sidebar.position === 'right';

  const sidebarToggleMotion = {
    mouse: {},
    init : function() {
      window.addEventListener('mousedown', this.mousedownHandler.bind(this));
      window.addEventListener('mouseup', this.mouseupHandler.bind(this));
      document.querySelector('.sidebar-dimmer').addEventListener('click', this.clickHandler.bind(this));
      document.querySelector('.sidebar-toggle').addEventListener('click', this.clickHandler.bind(this));
      window.addEventListener('sidebar:show', this.showSidebar);
      window.addEventListener('sidebar:hide', this.hideSidebar);
    },
    mousedownHandler: function(event) {
      this.mouse.X = event.pageX;
      this.mouse.Y = event.pageY;
    },
    mouseupHandler: function(event) {
      const deltaX = event.pageX - this.mouse.X;
      const deltaY = event.pageY - this.mouse.Y;
      const clickingBlankPart = Math.hypot(deltaX, deltaY) < 20 && event.target.matches('.main');
      // Fancybox has z-index property, but medium-zoom does not, so the sidebar will overlay the zoomed image.
      if (clickingBlankPart || event.target.matches('img.medium-zoom-image')) {
        this.hideSidebar();
      }
    },
    clickHandler: function() {
      document.body.classList.contains('sidebar-active') ? this.hideSidebar() : this.showSidebar();
    },
    showSidebar: function() {
      document.body.classList.add('sidebar-active');
      const animateAction = isRight ? 'fadeInRight' : 'fadeInLeft';
      document.querySelectorAll('.sidebar .animated').forEach((element, index) => {
        element.style.animationDelay = (100 * index) + 'ms';
        element.classList.remove(animateAction);
        setTimeout(() => {
          // Trigger a DOM reflow
          element.classList.add(animateAction);
        });
      });
    },
    hideSidebar: function() {
      document.body.classList.remove('sidebar-active');
    }
  };
  if (CONFIG.sidebar.display !== 'remove') sidebarToggleMotion.init();

  function updateFooterPosition() {
    const footer = document.querySelector('.footer');
    const containerHeight = document.querySelector('.main').offsetHeight + footer.offsetHeight;
    footer.classList.toggle('footer-fixed', containerHeight <= window.innerHeight);
  }

  updateFooterPosition();
  window.addEventListener('resize', updateFooterPosition);
  window.addEventListener('scroll', updateFooterPosition, { passive: true });
});

function hideanime(){$(query_lg_rp ).attr(classcss,lg_rp+classanime_fi);}
function displayanime(){$(query_lg_rp ).attr(classcss,lg_rp+classanime_fid);  }

function desktop_vi(){
  $(query_tp_pu1).css(desktop_toppic_height);
  $(query_tp_pu2).css(desktop_toppic_height);
  $(query_tp_pu3).css(desktop_toppic_height);
  $(query_tp_pu4).css(desktop_toppic_height);
  $(query_tp_pu5).css(desktop_toppic_height);

  $(query_tp_img1).css(desktop_toppic_rate);
  $(query_tp_img2).css(desktop_toppic_rate);
  $(query_tp_img3).css(desktop_toppic_rate);
  $(query_tp_img4).css(desktop_toppic_rate);
  $(query_tp_img5).css(desktop_toppic_rate);

  $(query_toppic).css(desktop_toppic_height);
  $(query_postblock).css(desktopcss);  
  $(query_block_archive).css(desktop_toppic_height)
}
function mobile_vi(){
  $(query_tp_pu1).css(mobiletop_toppic_height);
  $(query_tp_pu2).css(mobiletop_toppic_height);
  $(query_tp_pu3).css(mobiletop_toppic_height);
  $(query_tp_pu4).css(mobiletop_toppic_height);
  $(query_tp_pu5).css(mobiletop_toppic_height);

  $(query_tp_img1).css(mobiletop_toppic_rate);
  $(query_tp_img2).css(mobiletop_toppic_rate);
  $(query_tp_img3).css(mobiletop_toppic_rate);
  $(query_tp_img4).css(mobiletop_toppic_rate);
  $(query_tp_img5).css(mobiletop_toppic_rate);
  
  $(query_b_img).css(mobiletop_toppic_height);
  $(query_postblock).css(mobilecss);  
  $(query_block_archive).css(mobiletop_toppic_height) 
}
window.addEventListener("load",mobile_ch);
function mobile1_vi(){
  $(query_sb).css(css_hidesb);
}
function desktop1_vi(){
  $(query_sb).css(css_displaysb);
}
function mobile_ch(){
  width_load= window.innerWidth;
  if (width_load<lg_maxwidth){
    mobile_vi(); 
  }
  if (width_load<sb_maxwidth){
    mobile1_vi();
  }
}
window.addEventListener("resize",lg_interval);
function lg_interval(){
  display_lg=$(query_lg_rp).css(visibility);
  width= window.innerWidth;
  if (width<sb_maxwidth){
    mobile1_vi();
  }else{
    desktop1_vi();
  }
  if (width<lg_maxwidth){
    $(query_lga).text(text_hide);
    $(query_lga).css(css_hide);
    hideanime(); 
    lg_hide();
    mobile_vi();
    
  }else{
    $(query_lga).css(css_display);  
    displayanime();
    lg_display1();
    desktop_vi();
    if (display_lg===hide){
      if ($(query_lga).text()!=text_display){
        $(query_lga).text(text_display);
      }
    }   
  }

}
// 获取canvas元素
const canvas = document.querySelector('.canvas-sakura');

// 设置canvas画布的宽高为浏览器视口宽高
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// 使用2d的绘图方式
const ctx = canvas.getContext('2d');

// 定义花瓣的数量
const SAKURA_SUM = 220;
// 花瓣数组
const sakuraArray = [];

/**
 * 定义花瓣类
 */
class Sakura {
    // 构造方法
    constructor() {
        // 随机生成花瓣的x, y坐标
        this.x = Math.random() * canvas.width;
        this.y = (Math.random() * canvas.height * 2) - canvas.height;
        // 随机生成花瓣的宽高
        this.width = Math.random() * 15 + 30;
        this.height = Math.random() * 12 + 25;
        // 随机透明度
        this.opacity = this.width / 50;
        // 设置一个随机数，后面实现旋转角度效果时会用到
        this.rotate = Math.random();
        // 速度初始化
        this.xSpeed = Math.random() * 2 + 1;
        this.ySpeed = Math.random() + 1.5;
        this.rotateSpeed = Math.random() * 0.02;
    }

    // 绘制
    draw() {
        // 当花瓣超过canvas画布边界后，重新设置花瓣的坐标、速度、和转速
        // 实现花瓣连续飘落的效果
        if (this.x > canvas.width || this.y > canvas.height) {
            this.x = -sakuraImg.width; // 刚好藏住
            this.y = (Math.random() * canvas.height * 2) - canvas.height;
            this.rotate = Math.random();
            this.rotateSpeed = Math.random() * 0.02;
            this.xSpeed = Math.random() * 2 + 0.5;
            this.ySpeed = Math.random() + 1;
        }

        // ctx.globalAlpha 为 canvas 全局透明度设置基准值，实现绘制出来的花瓣具有透明度效果
        ctx.globalAlpha = this.opacity;

        // 随机旋转花瓣旋转角度，cos和sin的范围均为[-1, 1]，加入调整系数，保证花瓣变形可控
        const cos = Math.cos(this.rotate) * [0.2, 0.6][Math.floor(Math.random() * 2)];
        const sin = Math.sin(this.rotate) * [0.2, 0.6][Math.floor(Math.random() * 2)];

        // 绘制花瓣，将canvas坐标系的原点设置在花瓣的左上角
        ctx.setTransform(cos, sin, -sin, cos, this.x, this.y);
        ctx.drawImage(
            sakuraImg,
            0,
            0,
            this.width * [0.6, 0.8][Math.floor(Math.random() * 2)],
            this.height * [0.6,0.8][Math.floor(Math.random() * 2)]
        );
        ctx.setTransform(1, 0, 0, 1, 0, 0); // 重置canvas坐标系为初始状态
    }

    // 花瓣动画
    animate() {
        // 修改花瓣的属性，使花瓣位置发生变化
        this.x += this.xSpeed + mouseX * 5;
        this.y += this.ySpeed + mouseX * 2;
        this.rotate += this.rotateSpeed;
        // 绘制花瓣
        this.draw();
    }
}

/**
 * 定义渲染方法
 */
function render() {
    // 使用clearRect方法清除画布内的内容，以便下一次绘制新的内容
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 遍历花瓣数组，进行花瓣动画绘制
    sakuraArray.forEach(sakura => sakura.animate());
    // 使用requestAnimationFrame方法进行高效的动画渲染，保证在浏览器的刷新频率下去更新动画
    window.requestAnimationFrame(render);
}

// 加载花瓣图片
const sakuraImg = new Image();
sakuraImg.src = '/image/sakura.png';
// 等花瓣图片加载完毕，将数目为SAKURA_SUM的花瓣实例保存到数组中
sakuraImg.addEventListener('load', () => {
    for (let i = 0; i < SAKURA_SUM; i++) {
        sakuraArray.push(new Sakura())
    }
    // 开始渲染花瓣动画
    render();

    // 监听浏览器窗口大小变化，重新设置canvas的宽高
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
  // 定义鼠标、触屏事件监听回调函数
  let mouseX = 0;
  
// 监听鼠标移动事件和触屏移动事件


function lg_btn(){
	$(query_lga)[0].addEventListener("click",function(){
		if($(query_lga).text()===text_hide){
    
      hideanime();
      $(query_lg_rp ).css(css_hide);
      $(query_lga).text(text_display);
			
		}else{
			
      displayanime();
      $(query_lg_rp).css(css_display);
      $(query_lga).text(text_hide);
			
		}
	})
}
function lg_hide(){
    $(query_lg).css(hide_width);
    $(query_lg_rp_li).css(hide_width);
    $(query_lg_rp).css(hide_width);
    $(query_lg_rp).css(css_hide);
  }
function lg_display(){
  $(query_lg).css(css_width_lg);
  $(query_lg_rp_li).css(css_width_lgrp_li);
  $(query_lg_rp).css(css_width_lgrp);
  $(query_lg_rp).css(css_display);
}
function lg_display1(){
  $(query_lg).css(css_width_lg);
  $(query_lg_rp_li).css(css_width_lgrp_li);
  $(query_lg_rp).css(css_width_lgrp);
}

lg_btn();



lg_interval();

function imgch1(n1,n2){
  $(query_pu1+n1+query_pu3).css(dis_none);
  $(query_pu1+n2+query_pu3).css(dis_block);
  $(query_b_img).css(cssanime,b_img_anime);
	n1=n2;
  if(n2<5){
    n2+=1;
	}else{
		n2=1;
	} 
	setTimeout(function(){imgch2(n1,n2)},time);
}
function imgch2(n1,n2){
	setTimeout(function(){imgch1(n1,n2)},time);
}


n1=1;
n2=2;
time=5000;

setTimeout(function(){imgch1(n1,n2)},time);
if($(".posthead-notice").text()!==""){
  tippy($(".posthead-notice")[0],{
    content: "记得点我，看一下公告😤",
    animation: "fade",
    arrow: false
  })
}
if($(".post-nav-item-top-prev-page").text()!==""){
  tippy($(".post-nav-item-top-prev-page>a")[0],{
    content: "点我进入下一页ο(=•ω＜=)ρ⌒☆",
    animation: "fade",
    arrow: false
  })
}
if($(".post-nav-item-top-next-page").text()!==""){
  tippy($(".post-nav-item-top-next-page>a")[0],{
    content: "点我返回上一页ο(=•ω＜=)ρ⌒☆",
    animation: "fade",
    arrow: false
  })
}
if($(".brand").text()!==""){
  tippy($(".brand")[0],{
    content: "别碰我，让我转会儿🤪",
    followCursor: "honrizontal",
    arrow: false
  })
}
if($(".site-subtitle").text()!==""){
  tippy($(".site-subtitle")[0],{
    content: "这是副标题，小朋友不要乱动😗",
    followCursor: "honrizontal",
    arrow: false

  })
}
if($(".b-site-statement").text()!==""){
  tippy($(".b-site-statement")[0],{
    content: "乖孩子别干坏事🤐",
    followCursor: "honrizontal",
    arrow: false

  })
}
if($(".left-guide").text()!==""){
  tippy($(".left-guide>a")[0],{
    content: "我有两重身份😤，我可能可以收起或者展开",
    followCursor: "honrizontal",
    arrow: false
  })
}


if($(".home-post-block").text()!==""){
  $(".home-post-block").each(function(){
    $(this)[0].oncontextmenu = function(){
      return false;
    }
    tippy($(this)[0],{
      content: "别看了快点进来吧😋",
      animation: "fade",
      arrow: false,
      duration: 1000,
      placement: "right",
      delay: 1000,
      followCursor: "honzirital",
    })
  })
}
if($(".hm_top_img").text()!==""){
  $(".hm_top_img>div").each(function(){
    tippy($(this)[0],{
      content: "心动了吗，心动了就点吧😇",
      animation: "fade",
      arrow: false,
      delay: 400,
      followCursor: "honrizontal",
    })
    $(this).css({"cursor":"pointer"})
    $(this).children("a").attr("title","")
    $(this)[0].addEventListener("click",function(){
      location.href=$(this).children("a").attr("href");
    })
  })
}

if($(".post-meta-item>time").text()!==""){
  time=$(".post-meta-item>time")
  time[0].onmouseover = function(){
    return false;
  }
  content=time.attr("title")
  time.attr("title","")
  tippy(time[0],{
    content: content,
    animation: "fade"
  })
}
if($(".nohome-post-block").text()!==""){
  $(".post-title").each(function(){
    tippy($(this)[0],{
      content: "这是标题，没有什么好看的😎",
      animation: "fade",
      arrow: false,
      delay: 500
    })
  })
}
tippy($(".back-to-top")[0],{
  content: "点我返回顶端😁",
  animation: "fade",
  arrow: false
})
tippy($(".menu-item-home")[0],{
  content: "点我返回首页😁",
  animation: "fade",
  arrow: false
})
tippy($(".menu-item-about")[0],{
  content: "点我去到关于界面😁",
  animation: "fade",
  arrow: false
})
tippy($(".menu-item-archives")[0],{
  content: "所有好看的都在这里😁",
  animation: "fade",
  arrow: false
})
tippy($(".menu-item-log")[0],{
  content: "更新日志你要看吗😁",
  animation: "fade",
  arrow: false
})
tippy($(".menu-item-search")[0],{
  content: "点我全文搜索😁",
  animation: "fade",
  arrow: false
})
tippy($(".menu-item-tags")[0],{
  content: "点我去到标签界面😁",
  animation: "fade",
  arrow: false
})
tippy($(".menu-item-categories")[0],{
  content: "点我去到分类界面😁",
  animation: "fade",
  arrow: false
})


if($(".post-tags").text()!==""){
  $(".post-tags").each(function(){
    tippy($(this)[0],{
      content: "这是标签，没有什么好看的😎",
      animation: "fade",
      arrow: false,
      delay: 500,
    })
  })
}


if($(".post-nav").text()!==""){
  $(".post-nav>.post-nav-item>a").each(function(){

    tippy($(this)[0],{
      content: "点击快速翻页😎\
      下一页为"+$(this).attr("title"),
      animation: "fade",
      arrow: false
    })
    $(this).attr("title","")
  })
}

if($(".nohome-post-body").text()!==""){
  $(".nohome-post-body>p>img").each(function(){
    tippy($(this)[0],{
      content: "喜欢吗🥵，喜欢就多看点😍",
      animation: "fade",
      duration: 1000,
      arrow: false,
      placement: "left",
      followCursor: "honrizontal",
    })
  })
}

$(".left_guide_posts_title>.lg-item").each(function(){
  $(this).css("cursor","pointer")
  $(this).children("a").attr("title","")
  $(this)[0].addEventListener("click",function(){
    location.href=$(this).children("a").attr("href")
  })
  tippy($(this)[0],{
    content: "看那么久干嘛不点吗？🤗",
    animation: "fade",
    arrow: false,
    placement: "top-end",
    delay: 500,
    followCursor: "honrizontal"
  })
})
$(".sb-tag-cloud-tags>a").each(function(){
  tippy($(this)[0],{
    content: "按会社名分类😁",
    animation: "fade",
    arrow: false,
    
  })
})
$(".b-contact-us").each(function(){
  tippy($(this)[0],{
    content: "这是群号，想加赶紧加，右键自动复制😁",
    animation: "fade",
    arrow: false
  })
  $(this)[0].oncontextmenu = function(){
    return false;
  }
  $(this)[0].addEventListener("contextmenu",function(){  
    navigator.clipboard.writeText("829701655").then(() => {
      swal({
        title: "已侦测到鼠标右键喵",
        text: "(✿◕‿◕✿)已经帮你自动复制啦",
        icon: "success",
        button: "谢谢你自动复制侠!",
      });
    },() => {
      swal({
        title: "已侦测到鼠标右键喵",
        text: "(＞︿＜)但是貌似失败了",
        icon: "error",
        button: "自动复制侠让你失望了!",
      });
    });
  })
})


$(".nohome-post-body>p>a").each(function(){
  $(this)[0].oncontextmenu = function(){
    return false;
  }
  tippy($(this)[0],{
    content: "直接点击，跳转出来就是链接😊",
    animation: "fade",
    arrow: false,
  })
  var href=$(this).attr("href")
  $(this)[0].addEventListener("contextmenu",function(){  
    window.open(href);
    swal({
      title: "已侦测到鼠标右键喵",
      text: "(✿◕‿◕✿)已经帮你自动跳转啦,跳转里面的文本就是链接😊",
      icon: "success",
      button: "谢谢你自动跳转侠!",
    });
  })
})
/*
if($(".posthead-notice").text()!=""){
  $(".posthead-notice>a")[0].addEventListener("mouseover",function(){
    
  })
}*/