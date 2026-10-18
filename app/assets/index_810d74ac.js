(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function No(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const Ie={},Ws=[],zt=()=>{},Kc=()=>!1,lr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Bo=e=>e.startsWith("onUpdate:"),We=Object.assign,Fo=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Zu=Object.prototype.hasOwnProperty,$e=(e,t)=>Zu.call(e,t),ve=Array.isArray,Js=e=>Da(e)==="[object Map]",cr=e=>Da(e)==="[object Set]",hi=e=>Da(e)==="[object Date]",ye=e=>typeof e=="function",Ue=e=>typeof e=="string",jt=e=>typeof e=="symbol",De=e=>e!==null&&typeof e=="object",Yc=e=>(De(e)||ye(e))&&ye(e.then)&&ye(e.catch),Wc=Object.prototype.toString,Da=e=>Wc.call(e),ep=e=>Da(e).slice(8,-1),Jc=e=>Da(e)==="[object Object]",zo=e=>Ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ga=No(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),dr=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},tp=/-\w/g,Et=dr(e=>e.replace(tp,t=>t.slice(1).toUpperCase())),sp=/\B([A-Z])/g,xs=dr(e=>e.replace(sp,"-$1").toLowerCase()),ur=dr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Or=dr(e=>e?`on${ur(e)}`:""),bs=(e,t)=>!Object.is(e,t),Ln=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Xc=(e,t,s,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:s})},Ho=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ap=e=>{const t=Ue(e)?Number(e):NaN;return isNaN(t)?e:t};let mi;const pr=()=>mi||(mi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function fr(e){if(ve(e)){const t={};for(let s=0;s<e.length;s++){const a=e[s],n=Ue(a)?ip(a):fr(a);if(n)for(const r in n)t[r]=n[r]}return t}else if(Ue(e)||De(e))return e}const np=/;(?![^(]*\))/g,rp=/:([^]+)/,op=/\/\*[^]*?\*\//g;function ip(e){const t={};return e.replace(op,"").split(np).forEach(s=>{if(s){const a=s.split(rp);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Ve(e){let t="";if(Ue(e))t=e;else if(ve(e))for(let s=0;s<e.length;s++){const a=Ve(e[s]);a&&(t+=a+" ")}else if(De(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const lp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cp=No(lp);function Qc(e){return!!e||e===""}function dp(e,t){if(e.length!==t.length)return!1;let s=!0;for(let a=0;s&&a<e.length;a++)s=hr(e[a],t[a]);return s}function hr(e,t){if(e===t)return!0;let s=hi(e),a=hi(t);if(s||a)return s&&a?e.getTime()===t.getTime():!1;if(s=jt(e),a=jt(t),s||a)return e===t;if(s=ve(e),a=ve(t),s||a)return s&&a?dp(e,t):!1;if(s=De(e),a=De(t),s||a){if(!s||!a)return!1;const n=Object.keys(e).length,r=Object.keys(t).length;if(n!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(l&&!i||!l&&i||!hr(e[o],t[o]))return!1}}return String(e)===String(t)}function Zc(e,t){return e.findIndex(s=>hr(s,t))}const ed=e=>!!(e&&e.__v_isRef===!0),he=e=>Ue(e)?e:e==null?"":ve(e)||De(e)&&(e.toString===Wc||!ye(e.toString))?ed(e)?he(e.value):JSON.stringify(e,td,2):String(e),td=(e,t)=>ed(t)?td(e,t.value):Js(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[a,n],r)=>(s[$r(a,r)+" =>"]=n,s),{})}:cr(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>$r(s))}:jt(t)?$r(t):De(t)&&!ve(t)&&!Jc(t)?String(t):t,$r=(e,t="")=>{var s;return jt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Ze;class sd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ze,!t&&Ze&&(this.index=(Ze.scopes||(Ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Ze;try{return Ze=this,t()}finally{Ze=s}}}on(){++this._on===1&&(this.prevScope=Ze,Ze=this)}off(){this._on>0&&--this._on===0&&(Ze=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(this.effects.length=0,s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function ad(e){return new sd(e)}function nd(){return Ze}function up(e,t=!1){Ze&&Ze.cleanups.push(e)}let Ne;const Mr=new WeakSet;class rd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ze&&Ze.active&&Ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Mr.has(this)&&(Mr.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gi(this),ld(this);const t=Ne,s=Ct;Ne=this,Ct=!0;try{return this.fn()}finally{cd(this),Ne=t,Ct=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)qo(t);this.deps=this.depsTail=void 0,gi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Mr.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ho(this)&&this.run()}get dirty(){return ho(this)}}let od=0,ba,va;function id(e,t=!1){if(e.flags|=8,t){e.next=va,va=e;return}e.next=ba,ba=e}function jo(){od++}function Uo(){if(--od>0)return;if(va){let t=va;for(va=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;ba;){let t=ba;for(ba=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=s}}if(e)throw e}function ld(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function cd(e){let t,s=e.depsTail,a=s;for(;a;){const n=a.prevDep;a.version===-1?(a===s&&(s=n),qo(a),pp(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=n}e.deps=t,e.depsTail=s}function ho(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(dd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function dd(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Aa)||(e.globalVersion=Aa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ho(e))))return;e.flags|=2;const t=e.dep,s=Ne,a=Ct;Ne=e,Ct=!0;try{ld(e);const n=e.fn(e._value);(t.version===0||bs(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{Ne=s,Ct=a,cd(e),e.flags&=-3}}function qo(e,t=!1){const{dep:s,prevSub:a,nextSub:n}=e;if(a&&(a.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=a,e.nextSub=void 0),s.subs===e&&(s.subs=a,!a&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)qo(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function pp(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Ct=!0;const ud=[];function as(){ud.push(Ct),Ct=!1}function ns(){const e=ud.pop();Ct=e===void 0?!0:e}function gi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=Ne;Ne=void 0;try{t()}finally{Ne=s}}}let Aa=0;class fp{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Vo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ne||!Ct||Ne===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==Ne)s=this.activeLink=new fp(Ne,this),Ne.deps?(s.prevDep=Ne.depsTail,Ne.depsTail.nextDep=s,Ne.depsTail=s):Ne.deps=Ne.depsTail=s,pd(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const a=s.nextDep;a.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=a),s.prevDep=Ne.depsTail,s.nextDep=void 0,Ne.depsTail.nextDep=s,Ne.depsTail=s,Ne.deps===s&&(Ne.deps=a)}return s}trigger(t){this.version++,Aa++,this.notify(t)}notify(t){jo();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Uo()}}}function pd(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)pd(a)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Hn=new WeakMap,Bs=Symbol(""),mo=Symbol(""),Ca=Symbol("");function et(e,t,s){if(Ct&&Ne){let a=Hn.get(e);a||Hn.set(e,a=new Map);let n=a.get(s);n||(a.set(s,n=new Vo),n.map=a,n.key=s),n.track()}}function ts(e,t,s,a,n,r){const o=Hn.get(e);if(!o){Aa++;return}const l=i=>{i&&i.trigger()};if(jo(),t==="clear")o.forEach(l);else{const i=ve(e),c=i&&zo(s);if(i&&s==="length"){const u=Number(a);o.forEach((d,p)=>{(p==="length"||p===Ca||!jt(p)&&p>=u)&&l(d)})}else switch((s!==void 0||o.has(void 0))&&l(o.get(s)),c&&l(o.get(Ca)),t){case"add":i?c&&l(o.get("length")):(l(o.get(Bs)),Js(e)&&l(o.get(mo)));break;case"delete":i||(l(o.get(Bs)),Js(e)&&l(o.get(mo)));break;case"set":Js(e)&&l(o.get(Bs));break}}Uo()}function hp(e,t){const s=Hn.get(e);return s&&s.get(t)}function Hs(e){const t=Ae(e);return t===e?t:(et(t,"iterate",Ca),St(e)?t:t.map(Xe))}function mr(e){return et(e=Ae(e),"iterate",Ca),e}const mp={__proto__:null,[Symbol.iterator](){return Lr(this,Symbol.iterator,Xe)},concat(...e){return Hs(this).concat(...e.map(t=>ve(t)?Hs(t):t))},entries(){return Lr(this,"entries",e=>(e[1]=Xe(e[1]),e))},every(e,t){return Ut(this,"every",e,t,void 0,arguments)},filter(e,t){return Ut(this,"filter",e,t,s=>s.map(Xe),arguments)},find(e,t){return Ut(this,"find",e,t,Xe,arguments)},findIndex(e,t){return Ut(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ut(this,"findLast",e,t,Xe,arguments)},findLastIndex(e,t){return Ut(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ut(this,"forEach",e,t,void 0,arguments)},includes(...e){return Rr(this,"includes",e)},indexOf(...e){return Rr(this,"indexOf",e)},join(e){return Hs(this).join(e)},lastIndexOf(...e){return Rr(this,"lastIndexOf",e)},map(e,t){return Ut(this,"map",e,t,void 0,arguments)},pop(){return oa(this,"pop")},push(...e){return oa(this,"push",e)},reduce(e,...t){return bi(this,"reduce",e,t)},reduceRight(e,...t){return bi(this,"reduceRight",e,t)},shift(){return oa(this,"shift")},some(e,t){return Ut(this,"some",e,t,void 0,arguments)},splice(...e){return oa(this,"splice",e)},toReversed(){return Hs(this).toReversed()},toSorted(e){return Hs(this).toSorted(e)},toSpliced(...e){return Hs(this).toSpliced(...e)},unshift(...e){return oa(this,"unshift",e)},values(){return Lr(this,"values",Xe)}};function Lr(e,t,s){const a=mr(e),n=a[t]();return a!==e&&!St(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=s(r.value)),r}),n}const gp=Array.prototype;function Ut(e,t,s,a,n,r){const o=mr(e),l=o!==e&&!St(e),i=o[t];if(i!==gp[t]){const d=i.apply(e,r);return l?Xe(d):d}let c=s;o!==e&&(l?c=function(d,p){return s.call(this,Xe(d),p,e)}:s.length>2&&(c=function(d,p){return s.call(this,d,p,e)}));const u=i.call(o,c,a);return l&&n?n(u):u}function bi(e,t,s,a){const n=mr(e);let r=s;return n!==e&&(St(e)?s.length>3&&(r=function(o,l,i){return s.call(this,o,l,i,e)}):r=function(o,l,i){return s.call(this,o,Xe(l),i,e)}),n[t](r,...a)}function Rr(e,t,s){const a=Ae(e);et(a,"iterate",Ca);const n=a[t](...s);return(n===-1||n===!1)&&Yo(s[0])?(s[0]=Ae(s[0]),a[t](...s)):n}function oa(e,t,s=[]){as(),jo();const a=Ae(e)[t].apply(e,s);return Uo(),ns(),a}const bp=No("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(jt));function vp(e){jt(e)||(e=String(e));const t=Ae(this);return et(t,"has",e),t.hasOwnProperty(e)}class hd{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,a){if(s==="__v_skip")return t.__v_skip;const n=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return r;if(s==="__v_raw")return a===(n?r?Cp:vd:r?bd:gd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=ve(t);if(!n){let i;if(o&&(i=mp[s]))return i;if(s==="hasOwnProperty")return vp}const l=Reflect.get(t,s,qe(t)?t:a);if((jt(s)?fd.has(s):bp(s))||(n||et(t,"get",s),r))return l;if(qe(l)){const i=o&&zo(s)?l:l.value;return n&&De(i)?bo(i):i}return De(l)?n?bo(l):Nt(l):l}}class md extends hd{constructor(t=!1){super(!1,t)}set(t,s,a,n){let r=t[s];if(!this._isShallow){const i=_s(r);if(!St(a)&&!_s(a)&&(r=Ae(r),a=Ae(a)),!ve(t)&&qe(r)&&!qe(a))return i||(r.value=a),!0}const o=ve(t)&&zo(s)?Number(s)<t.length:$e(t,s),l=Reflect.set(t,s,a,qe(t)?t:n);return t===Ae(n)&&(o?bs(a,r)&&ts(t,"set",s,a):ts(t,"add",s,a)),l}deleteProperty(t,s){const a=$e(t,s);t[s];const n=Reflect.deleteProperty(t,s);return n&&a&&ts(t,"delete",s,void 0),n}has(t,s){const a=Reflect.has(t,s);return(!jt(s)||!fd.has(s))&&et(t,"has",s),a}ownKeys(t){return et(t,"iterate",ve(t)?"length":Bs),Reflect.ownKeys(t)}}class _p extends hd{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const yp=new md,wp=new _p,xp=new md(!0);const go=e=>e,za=e=>Reflect.getPrototypeOf(e);function Tp(e,t,s){return function(...a){const n=this.__v_raw,r=Ae(n),o=Js(r),l=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,c=n[e](...a),u=s?go:t?jn:Xe;return!t&&et(r,"iterate",i?mo:Bs),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:l?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Ha(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Sp(e,t){const s={get(n){const r=this.__v_raw,o=Ae(r),l=Ae(n);e||(bs(n,l)&&et(o,"get",n),et(o,"get",l));const{has:i}=za(o),c=t?go:e?jn:Xe;if(i.call(o,n))return c(r.get(n));if(i.call(o,l))return c(r.get(l));r!==o&&r.get(n)},get size(){const n=this.__v_raw;return!e&&et(Ae(n),"iterate",Bs),n.size},has(n){const r=this.__v_raw,o=Ae(r),l=Ae(n);return e||(bs(n,l)&&et(o,"has",n),et(o,"has",l)),n===l?r.has(n):r.has(n)||r.has(l)},forEach(n,r){const o=this,l=o.__v_raw,i=Ae(l),c=t?go:e?jn:Xe;return!e&&et(i,"iterate",Bs),l.forEach((u,d)=>n.call(r,c(u),c(d),o))}};return We(s,e?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(n){!t&&!St(n)&&!_s(n)&&(n=Ae(n));const r=Ae(this);return za(r).has.call(r,n)||(r.add(n),ts(r,"add",n,n)),this},set(n,r){!t&&!St(r)&&!_s(r)&&(r=Ae(r));const o=Ae(this),{has:l,get:i}=za(o);let c=l.call(o,n);c||(n=Ae(n),c=l.call(o,n));const u=i.call(o,n);return o.set(n,r),c?bs(r,u)&&ts(o,"set",n,r):ts(o,"add",n,r),this},delete(n){const r=Ae(this),{has:o,get:l}=za(r);let i=o.call(r,n);i||(n=Ae(n),i=o.call(r,n)),l&&l.call(r,n);const c=r.delete(n);return i&&ts(r,"delete",n,void 0),c},clear(){const n=Ae(this),r=n.size!==0,o=n.clear();return r&&ts(n,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(n=>{s[n]=Tp(n,e,t)}),s}function Go(e,t){const s=Sp(e,t);return(a,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?a:Reflect.get($e(s,n)&&n in a?s:a,n,r)}const kp={get:Go(!1,!1)},Ep={get:Go(!1,!0)},Ap={get:Go(!0,!1)};const gd=new WeakMap,bd=new WeakMap,vd=new WeakMap,Cp=new WeakMap;function Pp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Op(e){return e.__v_skip||!Object.isExtensible(e)?0:Pp(ep(e))}function Nt(e){return _s(e)?e:Ko(e,!1,yp,kp,gd)}function _d(e){return Ko(e,!1,xp,Ep,bd)}function bo(e){return Ko(e,!0,wp,Ap,vd)}function Ko(e,t,s,a,n){if(!De(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Op(e);if(r===0)return e;const o=n.get(e);if(o)return o;const l=new Proxy(e,r===2?a:s);return n.set(e,l),l}function vs(e){return _s(e)?vs(e.__v_raw):!!(e&&e.__v_isReactive)}function _s(e){return!!(e&&e.__v_isReadonly)}function St(e){return!!(e&&e.__v_isShallow)}function Yo(e){return e?!!e.__v_raw:!1}function Ae(e){const t=e&&e.__v_raw;return t?Ae(t):e}function Wo(e){return!$e(e,"__v_skip")&&Object.isExtensible(e)&&Xc(e,"__v_skip",!0),e}const Xe=e=>De(e)?Nt(e):e,jn=e=>De(e)?bo(e):e;function qe(e){return e?e.__v_isRef===!0:!1}function Me(e){return yd(e,!1)}function $p(e){return yd(e,!0)}function yd(e,t){return qe(e)?e:new Mp(e,t)}class Mp{constructor(t,s){this.dep=new Vo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:Ae(t),this._value=s?t:Xe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,a=this.__v_isShallow||St(t)||_s(t);t=a?t:Ae(t),bs(t,s)&&(this._rawValue=t,this._value=a?t:Xe(t),this.dep.trigger())}}function ut(e){return qe(e)?e.value:e}const Lp={get:(e,t,s)=>t==="__v_raw"?e:ut(Reflect.get(e,t,s)),set:(e,t,s,a)=>{const n=e[t];return qe(n)&&!qe(s)?(n.value=s,!0):Reflect.set(e,t,s,a)}};function wd(e){return vs(e)?e:new Proxy(e,Lp)}function Rp(e){const t=ve(e)?new Array(e.length):{};for(const s in e)t[s]=Ip(e,s);return t}class Dp{constructor(t,s,a){this._object=t,this._key=s,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return hp(Ae(this._object),this._key)}}function Ip(e,t,s){const a=e[t];return qe(a)?a:new Dp(e,t,s)}class Np{constructor(t,s,a){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Vo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Aa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Ne!==this)return id(this,!0),!0}get value(){const t=this.dep.track();return dd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bp(e,t,s=!1){let a,n;return ye(e)?a=e:(a=e.get,n=e.set),new Np(a,n,s)}const ja={},Un=new WeakMap;let Ls;function Fp(e,t=!1,s=Ls){if(s){let a=Un.get(s);a||Un.set(s,a=[]),a.push(e)}}function zp(e,t,s=Ie){const{immediate:a,deep:n,once:r,scheduler:o,augmentJob:l,call:i}=s,c=y=>n?y:St(y)||n===!1||n===0?ss(y,1):ss(y);let u,d,p,f,g=!1,b=!1;if(qe(e)?(d=()=>e.value,g=St(e)):vs(e)?(d=()=>c(e),g=!0):ve(e)?(b=!0,g=e.some(y=>vs(y)||St(y)),d=()=>e.map(y=>{if(qe(y))return y.value;if(vs(y))return c(y);if(ye(y))return i?i(y,2):y()})):ye(e)?t?d=i?()=>i(e,2):e:d=()=>{if(p){as();try{p()}finally{ns()}}const y=Ls;Ls=u;try{return i?i(e,3,[f]):e(f)}finally{Ls=y}}:d=zt,t&&n){const y=d,w=n===!0?1/0:n;d=()=>ss(y(),w)}const v=nd(),h=()=>{u.stop(),v&&v.active&&Fo(v.effects,u)};if(r&&t){const y=t;t=(...w)=>{y(...w),h()}}let m=b?new Array(e.length).fill(ja):ja;const _=y=>{if(!(!(u.flags&1)||!u.dirty&&!y))if(t){const w=u.run();if(n||g||(b?w.some((x,E)=>bs(x,m[E])):bs(w,m))){p&&p();const x=Ls;Ls=u;try{const E=[w,m===ja?void 0:b&&m[0]===ja?[]:m,f];m=w,i?i(t,3,E):t(...E)}finally{Ls=x}}}else u.run()};return l&&l(_),u=new rd(d),u.scheduler=o?()=>o(_,!1):_,f=y=>Fp(y,!1,u),p=u.onStop=()=>{const y=Un.get(u);if(y){if(i)i(y,4);else for(const w of y)w();Un.delete(u)}},t?a?_(!0):m=u.run():o?o(_.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function ss(e,t=1/0,s){if(t<=0||!De(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,qe(e))ss(e.value,t,s);else if(ve(e))for(let a=0;a<e.length;a++)ss(e[a],t,s);else if(cr(e)||Js(e))e.forEach(a=>{ss(a,t,s)});else if(Jc(e)){for(const a in e)ss(e[a],t,s);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&ss(e[a],t,s)}return e}function Ia(e,t,s,a){try{return a?e(...a):e()}catch(n){gr(n,t,s)}}function Pt(e,t,s,a){if(ye(e)){const n=Ia(e,t,s,a);return n&&Yc(n)&&n.catch(r=>{gr(r,t,s)}),n}if(ve(e)){const n=[];for(let r=0;r<e.length;r++)n.push(Pt(e[r],t,s,a));return n}}function gr(e,t,s,a=!0){const n=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ie;if(t){let l=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,i,c)===!1)return}l=l.parent}if(r){as(),Ia(r,null,10,[e,i,c]),ns();return}}Hp(e,s,n,a,o)}function Hp(e,t,s,a=!0,n=!1){if(n)throw e;console.error(e)}const ot=[];let Rt=-1;const Xs=[];let ps=null,Ks=0;const xd=Promise.resolve();let qn=null;function Jo(e){const t=qn||xd;return e?t.then(this?e.bind(this):e):t}function jp(e){let t=Rt+1,s=ot.length;for(;t<s;){const a=t+s>>>1,n=ot[a],r=Pa(n);r<e||r===e&&n.flags&2?t=a+1:s=a}return t}function Xo(e){if(!(e.flags&1)){const t=Pa(e),s=ot[ot.length-1];!s||!(e.flags&2)&&t>=Pa(s)?ot.push(e):ot.splice(jp(t),0,e),e.flags|=1,Td()}}function Td(){qn||(qn=xd.then(kd))}function Up(e){ve(e)?Xs.push(...e):ps&&e.id===-1?ps.splice(Ks+1,0,e):e.flags&1||(Xs.push(e),e.flags|=1),Td()}function vi(e,t,s=Rt+1){for(;s<ot.length;s++){const a=ot[s];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;ot.splice(s,1),s--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function Sd(e){if(Xs.length){const t=[...new Set(Xs)].sort((s,a)=>Pa(s)-Pa(a));if(Xs.length=0,ps){ps.push(...t);return}for(ps=t,Ks=0;Ks<ps.length;Ks++){const s=ps[Ks];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ps=null,Ks=0}}const Pa=e=>e.id==null?e.flags&2?-1:1/0:e.id;function kd(e){try{for(Rt=0;Rt<ot.length;Rt++){const t=ot[Rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ia(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Rt<ot.length;Rt++){const t=ot[Rt];t&&(t.flags&=-2)}Rt=-1,ot.length=0,Sd(),qn=null,(ot.length||Xs.length)&&kd()}}let bt=null,Ed=null;function Vn(e){const t=bt;return bt=e,Ed=e&&e.type.__scopeId||null,t}function vo(e,t=bt,s){if(!t||e._n)return e;const a=(...n)=>{a._d&&Yn(-1);const r=Vn(t);let o;try{o=e(...n)}finally{Vn(r),a._d&&Yn(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function Bt(e,t){if(bt===null)return e;const s=wr(bt),a=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[r,o,l,i=Ie]=t[n];r&&(ye(r)&&(r={mounted:r,updated:r}),r.deep&&ss(o),a.push({dir:r,instance:s,value:o,oldValue:void 0,arg:l,modifiers:i}))}return e}function Es(e,t,s,a){const n=e.dirs,r=t&&t.dirs;for(let o=0;o<n.length;o++){const l=n[o];r&&(l.oldValue=r[o].value);let i=l.dir[a];i&&(as(),Pt(i,s,8,[e.el,l,e,t]),ns())}}const qp=Symbol("_vte"),Ad=e=>e.__isTeleport,Zt=Symbol("_leaveCb"),Ua=Symbol("_enterCb");function Vp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lt(()=>{e.isMounted=!0}),Id(()=>{e.isUnmounting=!0}),e}const wt=[Function,Array],Cd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:wt,onEnter:wt,onAfterEnter:wt,onEnterCancelled:wt,onBeforeLeave:wt,onLeave:wt,onAfterLeave:wt,onLeaveCancelled:wt,onBeforeAppear:wt,onAppear:wt,onAfterAppear:wt,onAppearCancelled:wt},Pd=e=>{const t=e.subTree;return t.component?Pd(t.component):t},Gp={name:"BaseTransition",props:Cd,setup(e,{slots:t}){const s=ti(),a=Vp();return()=>{const n=t.default&&Md(t.default(),!0);if(!n||!n.length)return;const r=Od(n),o=Ae(e),{mode:l}=o;if(a.isLeaving)return Dr(r);const i=_i(r);if(!i)return Dr(r);let c=_o(i,o,a,s,d=>c=d);i.type!==it&&Oa(i,c);let u=s.subTree&&_i(s.subTree);if(u&&u.type!==it&&!Rs(u,i)&&Pd(s).type!==it){let d=_o(u,o,a,s);if(Oa(u,d),l==="out-in"&&i.type!==it)return a.isLeaving=!0,d.afterLeave=()=>{a.isLeaving=!1,s.job.flags&8||s.update(),delete d.afterLeave,u=void 0},Dr(r);l==="in-out"&&i.type!==it?d.delayLeave=(p,f,g)=>{const b=$d(a,u);b[String(u.key)]=u,p[Zt]=()=>{f(),p[Zt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function Od(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==it){t=s;break}}return t}const Kp=Gp;function $d(e,t){const{leavingVNodes:s}=e;let a=s.get(t.type);return a||(a=Object.create(null),s.set(t.type,a)),a}function _o(e,t,s,a,n){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:b,onBeforeAppear:v,onAppear:h,onAfterAppear:m,onAppearCancelled:_}=t,y=String(e.key),w=$d(s,e),x=(L,C)=>{L&&Pt(L,a,9,C)},E=(L,C)=>{const k=C[1];x(L,C),ve(L)?L.every(S=>S.length<=1)&&k():L.length<=1&&k()},I={mode:o,persisted:l,beforeEnter(L){let C=i;if(!s.isMounted)if(r)C=v||i;else return;L[Zt]&&L[Zt](!0);const k=w[y];k&&Rs(e,k)&&k.el[Zt]&&k.el[Zt](),x(C,[L])},enter(L){let C=c,k=u,S=d;if(!s.isMounted)if(r)C=h||c,k=m||u,S=_||d;else return;let $=!1;const z=L[Ua]=H=>{$||($=!0,H?x(S,[L]):x(k,[L]),I.delayedLeave&&I.delayedLeave(),L[Ua]=void 0)};C?E(C,[L,z]):z()},leave(L,C){const k=String(e.key);if(L[Ua]&&L[Ua](!0),s.isUnmounting)return C();x(p,[L]);let S=!1;const $=L[Zt]=z=>{S||(S=!0,C(),z?x(b,[L]):x(g,[L]),L[Zt]=void 0,w[k]===e&&delete w[k])};w[k]=e,f?E(f,[L,$]):$()},clone(L){const C=_o(L,t,s,a,n);return n&&n(C),C}};return I}function Dr(e){if(br(e))return e=ys(e),e.children=null,e}function _i(e){if(!br(e))return Ad(e.type)&&e.children?Od(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&ye(s.default))return s.default()}}function Oa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Oa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Md(e,t=!1,s){let a=[],n=0;for(let r=0;r<e.length;r++){let o=e[r];const l=s==null?o.key:String(s)+String(o.key!=null?o.key:r);o.type===Be?(o.patchFlag&128&&n++,a=a.concat(Md(o.children,t,l))):(t||o.type!==it)&&a.push(l!=null?ys(o,{key:l}):o)}if(n>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function Ld(e,t){return ye(e)?We({name:e.name},t,{setup:e}):e}function Rd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Gn=new WeakMap;function _a(e,t,s,a,n=!1){if(ve(e)){e.forEach((g,b)=>_a(g,t&&(ve(t)?t[b]:t),s,a,n));return}if(ya(a)&&!n){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&_a(e,t,s,a.component.subTree);return}const r=a.shapeFlag&4?wr(a.component):a.el,o=n?null:r,{i:l,r:i}=e,c=t&&t.r,u=l.refs===Ie?l.refs={}:l.refs,d=l.setupState,p=Ae(d),f=d===Ie?Kc:g=>$e(p,g);if(c!=null&&c!==i){if(yi(t),Ue(c))u[c]=null,f(c)&&(d[c]=null);else if(qe(c)){c.value=null;const g=t;g.k&&(u[g.k]=null)}}if(ye(i))Ia(i,l,12,[o,u]);else{const g=Ue(i),b=qe(i);if(g||b){const v=()=>{if(e.f){const h=g?f(i)?d[i]:u[i]:i.value;if(n)ve(h)&&Fo(h,r);else if(ve(h))h.includes(r)||h.push(r);else if(g)u[i]=[r],f(i)&&(d[i]=u[i]);else{const m=[r];i.value=m,e.k&&(u[e.k]=m)}}else g?(u[i]=o,f(i)&&(d[i]=o)):b&&(i.value=o,e.k&&(u[e.k]=o))};if(o){const h=()=>{v(),Gn.delete(e)};h.id=-1,Gn.set(e,h),mt(h,s)}else yi(e),v()}}}function yi(e){const t=Gn.get(e);t&&(t.flags|=8,Gn.delete(e))}pr().requestIdleCallback;pr().cancelIdleCallback;const ya=e=>!!e.type.__asyncLoader,br=e=>e.type.__isKeepAlive;function Yp(e,t){Dd(e,"a",t)}function Wp(e,t){Dd(e,"da",t)}function Dd(e,t,s=tt){const a=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(vr(t,a,s),s){let n=s.parent;for(;n&&n.parent;)br(n.parent.vnode)&&Jp(a,t,s,n),n=n.parent}}function Jp(e,t,s,a){const n=vr(t,e,a,!0);is(()=>{Fo(a[t],n)},s)}function vr(e,t,s=tt,a=!1){if(s){const n=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{as();const l=Na(s),i=Pt(t,s,e,o);return l(),ns(),i});return a?n.unshift(r):n.push(r),r}}const os=e=>(t,s=tt)=>{(!Ma||e==="sp")&&vr(e,(...a)=>t(...a),s)},Xp=os("bm"),lt=os("m"),Qp=os("bu"),Zp=os("u"),Id=os("bum"),is=os("um"),ef=os("sp"),tf=os("rtg"),sf=os("rtc");function af(e,t=tt){vr("ec",e,t)}const nf="components",Nd=Symbol.for("v-ndc");function rf(e){return Ue(e)?of(nf,e,!1)||e:e||Nd}function of(e,t,s=!0,a=!1){const n=bt||tt;if(n){const r=n.type;{const l=Wf(r,!1);if(l&&(l===t||l===Et(t)||l===ur(Et(t))))return r}const o=wi(n[e]||r[e],t)||wi(n.appContext[e],t);return!o&&a?r:o}}function wi(e,t){return e&&(e[t]||e[Et(t)]||e[ur(Et(t))])}function Jt(e,t,s,a){let n;const r=s,o=ve(e);if(o||Ue(e)){const l=o&&vs(e);let i=!1,c=!1;l&&(i=!St(e),c=_s(e),e=mr(e)),n=new Array(e.length);for(let u=0,d=e.length;u<d;u++)n[u]=t(i?c?jn(Xe(e[u])):Xe(e[u]):e[u],u,void 0,r)}else if(typeof e=="number"){n=new Array(e);for(let l=0;l<e;l++)n[l]=t(l+1,l,void 0,r)}else if(De(e))if(e[Symbol.iterator])n=Array.from(e,(l,i)=>t(l,i,void 0,r));else{const l=Object.keys(e);n=new Array(l.length);for(let i=0,c=l.length;i<c;i++){const u=l[i];n[i]=t(e[u],u,i,r)}}else n=[];return n}const yo=e=>e?nu(e)?wr(e):yo(e.parent):null,wa=We(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yo(e.parent),$root:e=>yo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Fd(e),$forceUpdate:e=>e.f||(e.f=()=>{Xo(e.update)}),$nextTick:e=>e.n||(e.n=Jo.bind(e.proxy)),$watch:e=>Pf.bind(e)}),Ir=(e,t)=>e!==Ie&&!e.__isScriptSetup&&$e(e,t),lf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:a,data:n,props:r,accessCache:o,type:l,appContext:i}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return a[t];case 2:return n[t];case 4:return s[t];case 3:return r[t]}else{if(Ir(a,t))return o[t]=1,a[t];if(n!==Ie&&$e(n,t))return o[t]=2,n[t];if((c=e.propsOptions[0])&&$e(c,t))return o[t]=3,r[t];if(s!==Ie&&$e(s,t))return o[t]=4,s[t];wo&&(o[t]=0)}}const u=wa[t];let d,p;if(u)return t==="$attrs"&&et(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(s!==Ie&&$e(s,t))return o[t]=4,s[t];if(p=i.config.globalProperties,$e(p,t))return p[t]},set({_:e},t,s){const{data:a,setupState:n,ctx:r}=e;return Ir(n,t)?(n[t]=s,!0):a!==Ie&&$e(a,t)?(a[t]=s,!0):$e(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:a,appContext:n,propsOptions:r,type:o}},l){let i,c;return!!(s[l]||e!==Ie&&l[0]!=="$"&&$e(e,l)||Ir(t,l)||(i=r[0])&&$e(i,l)||$e(a,l)||$e(wa,l)||$e(n.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:$e(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function xi(e){return ve(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let wo=!0;function cf(e){const t=Fd(e),s=e.proxy,a=e.ctx;wo=!1,t.beforeCreate&&Ti(t.beforeCreate,e,"bc");const{data:n,computed:r,methods:o,watch:l,provide:i,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:f,updated:g,activated:b,deactivated:v,beforeDestroy:h,beforeUnmount:m,destroyed:_,unmounted:y,render:w,renderTracked:x,renderTriggered:E,errorCaptured:I,serverPrefetch:L,expose:C,inheritAttrs:k,components:S,directives:$,filters:z}=t;if(c&&df(c,a,null),o)for(const J in o){const W=o[J];ye(W)&&(a[J]=W.bind(s))}if(n){const J=n.call(s,s);De(J)&&(e.data=Nt(J))}if(wo=!0,r)for(const J in r){const W=r[J],ie=ye(W)?W.bind(s,s):ye(W.get)?W.get.bind(s,s):zt,X=!ye(W)&&ye(W.set)?W.set.bind(s):zt,V=ge({get:ie,set:X});Object.defineProperty(a,J,{enumerable:!0,configurable:!0,get:()=>V.value,set:ee=>V.value=ee})}if(l)for(const J in l)Bd(l[J],a,s,J);if(i){const J=ye(i)?i.call(s):i;Reflect.ownKeys(J).forEach(W=>{Rn(W,J[W])})}u&&Ti(u,e,"c");function Y(J,W){ve(W)?W.forEach(ie=>J(ie.bind(s))):W&&J(W.bind(s))}if(Y(Xp,d),Y(lt,p),Y(Qp,f),Y(Zp,g),Y(Yp,b),Y(Wp,v),Y(af,I),Y(sf,x),Y(tf,E),Y(Id,m),Y(is,y),Y(ef,L),ve(C))if(C.length){const J=e.exposed||(e.exposed={});C.forEach(W=>{Object.defineProperty(J,W,{get:()=>s[W],set:ie=>s[W]=ie,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===zt&&(e.render=w),k!=null&&(e.inheritAttrs=k),S&&(e.components=S),$&&(e.directives=$),L&&Rd(e)}function df(e,t,s=zt){ve(e)&&(e=xo(e));for(const a in e){const n=e[a];let r;De(n)?"default"in n?r=kt(n.from||a,n.default,!0):r=kt(n.from||a):r=kt(n),qe(r)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[a]=r}}function Ti(e,t,s){Pt(ve(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,s)}function Bd(e,t,s,a){let n=a.includes(".")?Qd(s,a):()=>s[a];if(Ue(e)){const r=t[e];ye(r)&&Qs(n,r)}else if(ye(e))Qs(n,e.bind(s));else if(De(e))if(ve(e))e.forEach(r=>Bd(r,t,s,a));else{const r=ye(e.handler)?e.handler.bind(s):t[e.handler];ye(r)&&Qs(n,r,e)}}function Fd(e){const t=e.type,{mixins:s,extends:a}=t,{mixins:n,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let i;return l?i=l:!n.length&&!s&&!a?i=t:(i={},n.length&&n.forEach(c=>Kn(i,c,o,!0)),Kn(i,t,o)),De(t)&&r.set(t,i),i}function Kn(e,t,s,a=!1){const{mixins:n,extends:r}=t;r&&Kn(e,r,s,!0),n&&n.forEach(o=>Kn(e,o,s,!0));for(const o in t)if(!(a&&o==="expose")){const l=uf[o]||s&&s[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const uf={data:Si,props:ki,emits:ki,methods:ha,computed:ha,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:ha,directives:ha,watch:ff,provide:Si,inject:pf};function Si(e,t){return t?e?function(){return We(ye(e)?e.call(this,this):e,ye(t)?t.call(this,this):t)}:t:e}function pf(e,t){return ha(xo(e),xo(t))}function xo(e){if(ve(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function nt(e,t){return e?[...new Set([].concat(e,t))]:t}function ha(e,t){return e?We(Object.create(null),e,t):t}function ki(e,t){return e?ve(e)&&ve(t)?[...new Set([...e,...t])]:We(Object.create(null),xi(e),xi(t??{})):t}function ff(e,t){if(!e)return t;if(!t)return e;const s=We(Object.create(null),e);for(const a in t)s[a]=nt(e[a],t[a]);return s}function zd(){return{app:null,config:{isNativeTag:Kc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hf=0;function mf(e,t){return function(a,n=null){ye(a)||(a=We({},a)),n!=null&&!De(n)&&(n=null);const r=zd(),o=new WeakSet,l=[];let i=!1;const c=r.app={_uid:hf++,_component:a,_props:n,_container:null,_context:r,_instance:null,version:Xf,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&ye(u.install)?(o.add(u),u.install(c,...d)):ye(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,p){if(!i){const f=c._ceVNode||st(a,n);return f.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(f,u,p),i=!0,c._container=u,u.__vue_app__=c,wr(f.component)}},onUnmount(u){l.push(u)},unmount(){i&&(Pt(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Fs;Fs=c;try{return u()}finally{Fs=d}}};return c}}let Fs=null;function Rn(e,t){if(tt){let s=tt.provides;const a=tt.parent&&tt.parent.provides;a===s&&(s=tt.provides=Object.create(a)),s[e]=t}}function kt(e,t,s=!1){const a=ti();if(a||Fs){let n=Fs?Fs._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return s&&ye(t)?t.call(a&&a.proxy):t}}function gf(){return!!(ti()||Fs)}const Hd={},jd=()=>Object.create(Hd),Ud=e=>Object.getPrototypeOf(e)===Hd;function bf(e,t,s,a=!1){const n={},r=jd();e.propsDefaults=Object.create(null),qd(e,t,n,r);for(const o in e.propsOptions[0])o in n||(n[o]=void 0);s?e.props=a?n:_d(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function vf(e,t,s,a){const{props:n,attrs:r,vnode:{patchFlag:o}}=e,l=Ae(n),[i]=e.propsOptions;let c=!1;if((a||o>0)&&!(o&16)){if(o&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(_r(e.emitsOptions,p))continue;const f=t[p];if(i)if($e(r,p))f!==r[p]&&(r[p]=f,c=!0);else{const g=Et(p);n[g]=To(i,l,g,f,e,!1)}else f!==r[p]&&(r[p]=f,c=!0)}}}else{qd(e,t,n,r)&&(c=!0);let u;for(const d in l)(!t||!$e(t,d)&&((u=xs(d))===d||!$e(t,u)))&&(i?s&&(s[d]!==void 0||s[u]!==void 0)&&(n[d]=To(i,l,d,void 0,e,!0)):delete n[d]);if(r!==l)for(const d in r)(!t||!$e(t,d))&&(delete r[d],c=!0)}c&&ts(e.attrs,"set","")}function qd(e,t,s,a){const[n,r]=e.propsOptions;let o=!1,l;if(t)for(let i in t){if(ga(i))continue;const c=t[i];let u;n&&$e(n,u=Et(i))?!r||!r.includes(u)?s[u]=c:(l||(l={}))[u]=c:_r(e.emitsOptions,i)||(!(i in a)||c!==a[i])&&(a[i]=c,o=!0)}if(r){const i=Ae(s),c=l||Ie;for(let u=0;u<r.length;u++){const d=r[u];s[d]=To(n,i,d,c[d],e,!$e(c,d))}}return o}function To(e,t,s,a,n,r){const o=e[s];if(o!=null){const l=$e(o,"default");if(l&&a===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&ye(i)){const{propsDefaults:c}=n;if(s in c)a=c[s];else{const u=Na(n);a=c[s]=i.call(null,t),u()}}else a=i;n.ce&&n.ce._setProp(s,a)}o[0]&&(r&&!l?a=!1:o[1]&&(a===""||a===xs(s))&&(a=!0))}return a}const _f=new WeakMap;function Vd(e,t,s=!1){const a=s?_f:t.propsCache,n=a.get(e);if(n)return n;const r=e.props,o={},l=[];let i=!1;if(!ye(e)){const u=d=>{i=!0;const[p,f]=Vd(d,t,!0);We(o,p),f&&l.push(...f)};!s&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!r&&!i)return De(e)&&a.set(e,Ws),Ws;if(ve(r))for(let u=0;u<r.length;u++){const d=Et(r[u]);Ei(d)&&(o[d]=Ie)}else if(r)for(const u in r){const d=Et(u);if(Ei(d)){const p=r[u],f=o[d]=ve(p)||ye(p)?{type:p}:We({},p),g=f.type;let b=!1,v=!0;if(ve(g))for(let h=0;h<g.length;++h){const m=g[h],_=ye(m)&&m.name;if(_==="Boolean"){b=!0;break}else _==="String"&&(v=!1)}else b=ye(g)&&g.name==="Boolean";f[0]=b,f[1]=v,(b||$e(f,"default"))&&l.push(d)}}const c=[o,l];return De(e)&&a.set(e,c),c}function Ei(e){return e[0]!=="$"&&!ga(e)}const Qo=e=>e==="_"||e==="_ctx"||e==="$stable",Zo=e=>ve(e)?e.map(It):[It(e)],yf=(e,t,s)=>{if(t._n)return t;const a=vo((...n)=>Zo(t(...n)),s);return a._c=!1,a},Gd=(e,t,s)=>{const a=e._ctx;for(const n in e){if(Qo(n))continue;const r=e[n];if(ye(r))t[n]=yf(n,r,a);else if(r!=null){const o=Zo(r);t[n]=()=>o}}},Kd=(e,t)=>{const s=Zo(t);e.slots.default=()=>s},Yd=(e,t,s)=>{for(const a in t)(s||!Qo(a))&&(e[a]=t[a])},wf=(e,t,s)=>{const a=e.slots=jd();if(e.vnode.shapeFlag&32){const n=t._;n?(Yd(a,t,s),s&&Xc(a,"_",n,!0)):Gd(t,a)}else t&&Kd(e,t)},xf=(e,t,s)=>{const{vnode:a,slots:n}=e;let r=!0,o=Ie;if(a.shapeFlag&32){const l=t._;l?s&&l===1?r=!1:Yd(n,t,s):(r=!t.$stable,Gd(t,n)),o=t}else t&&(Kd(e,t),o={default:1});if(r)for(const l in n)!Qo(l)&&o[l]==null&&delete n[l]},mt=Nf;function Tf(e){return Sf(e)}function Sf(e,t){const s=pr();s.__VUE__=!0;const{insert:a,remove:n,patchProp:r,createElement:o,createText:l,createComment:i,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:f=zt,insertStaticContent:g}=e,b=(T,O,P,M=null,q=null,D=null,B=void 0,U=null,ae=!!O.dynamicChildren)=>{if(T===O)return;T&&!Rs(T,O)&&(M=j(T),ee(T,q,D,!0),T=null),O.patchFlag===-2&&(ae=!1,O.dynamicChildren=null);const{type:ne,ref:pe,shapeFlag:te}=O;switch(ne){case yr:v(T,O,P,M);break;case it:h(T,O,P,M);break;case Dn:T==null&&m(O,P,M,B);break;case Be:S(T,O,P,M,q,D,B,U,ae);break;default:te&1?w(T,O,P,M,q,D,B,U,ae):te&6?$(T,O,P,M,q,D,B,U,ae):(te&64||te&128)&&ne.process(T,O,P,M,q,D,B,U,ae,Z)}pe!=null&&q?_a(pe,T&&T.ref,D,O||T,!O):pe==null&&T&&T.ref!=null&&_a(T.ref,null,D,T,!0)},v=(T,O,P,M)=>{if(T==null)a(O.el=l(O.children),P,M);else{const q=O.el=T.el;O.children!==T.children&&c(q,O.children)}},h=(T,O,P,M)=>{T==null?a(O.el=i(O.children||""),P,M):O.el=T.el},m=(T,O,P,M)=>{[T.el,T.anchor]=g(T.children,O,P,M,T.el,T.anchor)},_=({el:T,anchor:O},P,M)=>{let q;for(;T&&T!==O;)q=p(T),a(T,P,M),T=q;a(O,P,M)},y=({el:T,anchor:O})=>{let P;for(;T&&T!==O;)P=p(T),n(T),T=P;n(O)},w=(T,O,P,M,q,D,B,U,ae)=>{if(O.type==="svg"?B="svg":O.type==="math"&&(B="mathml"),T==null)x(O,P,M,q,D,B,U,ae);else{const ne=T.el&&T.el._isVueCE?T.el:null;try{ne&&ne._beginPatch(),L(T,O,q,D,B,U,ae)}finally{ne&&ne._endPatch()}}},x=(T,O,P,M,q,D,B,U)=>{let ae,ne;const{props:pe,shapeFlag:te,transition:oe,dirs:de}=T;if(ae=T.el=o(T.type,D,pe&&pe.is,pe),te&8?u(ae,T.children):te&16&&I(T.children,ae,null,M,q,Nr(T,D),B,U),de&&Es(T,null,M,"created"),E(ae,T,T.scopeId,B,M),pe){for(const be in pe)be!=="value"&&!ga(be)&&r(ae,be,null,pe[be],D,M);"value"in pe&&r(ae,"value",null,pe.value,D),(ne=pe.onVnodeBeforeMount)&&Lt(ne,M,T)}de&&Es(T,null,M,"beforeMount");const me=kf(q,oe);me&&oe.beforeEnter(ae),a(ae,O,P),((ne=pe&&pe.onVnodeMounted)||me||de)&&mt(()=>{ne&&Lt(ne,M,T),me&&oe.enter(ae),de&&Es(T,null,M,"mounted")},q)},E=(T,O,P,M,q)=>{if(P&&f(T,P),M)for(let D=0;D<M.length;D++)f(T,M[D]);if(q){let D=q.subTree;if(O===D||eu(D.type)&&(D.ssContent===O||D.ssFallback===O)){const B=q.vnode;E(T,B,B.scopeId,B.slotScopeIds,q.parent)}}},I=(T,O,P,M,q,D,B,U,ae=0)=>{for(let ne=ae;ne<T.length;ne++){const pe=T[ne]=U?fs(T[ne]):It(T[ne]);b(null,pe,O,P,M,q,D,B,U)}},L=(T,O,P,M,q,D,B)=>{const U=O.el=T.el;let{patchFlag:ae,dynamicChildren:ne,dirs:pe}=O;ae|=T.patchFlag&16;const te=T.props||Ie,oe=O.props||Ie;let de;if(P&&As(P,!1),(de=oe.onVnodeBeforeUpdate)&&Lt(de,P,O,T),pe&&Es(O,T,P,"beforeUpdate"),P&&As(P,!0),(te.innerHTML&&oe.innerHTML==null||te.textContent&&oe.textContent==null)&&u(U,""),ne?C(T.dynamicChildren,ne,U,P,M,Nr(O,q),D):B||W(T,O,U,null,P,M,Nr(O,q),D,!1),ae>0){if(ae&16)k(U,te,oe,P,q);else if(ae&2&&te.class!==oe.class&&r(U,"class",null,oe.class,q),ae&4&&r(U,"style",te.style,oe.style,q),ae&8){const me=O.dynamicProps;for(let be=0;be<me.length;be++){const _e=me[be],Ee=te[_e],ze=oe[_e];(ze!==Ee||_e==="value")&&r(U,_e,Ee,ze,q,P)}}ae&1&&T.children!==O.children&&u(U,O.children)}else!B&&ne==null&&k(U,te,oe,P,q);((de=oe.onVnodeUpdated)||pe)&&mt(()=>{de&&Lt(de,P,O,T),pe&&Es(O,T,P,"updated")},M)},C=(T,O,P,M,q,D,B)=>{for(let U=0;U<O.length;U++){const ae=T[U],ne=O[U],pe=ae.el&&(ae.type===Be||!Rs(ae,ne)||ae.shapeFlag&198)?d(ae.el):P;b(ae,ne,pe,null,M,q,D,B,!0)}},k=(T,O,P,M,q)=>{if(O!==P){if(O!==Ie)for(const D in O)!ga(D)&&!(D in P)&&r(T,D,O[D],null,q,M);for(const D in P){if(ga(D))continue;const B=P[D],U=O[D];B!==U&&D!=="value"&&r(T,D,U,B,q,M)}"value"in P&&r(T,"value",O.value,P.value,q)}},S=(T,O,P,M,q,D,B,U,ae)=>{const ne=O.el=T?T.el:l(""),pe=O.anchor=T?T.anchor:l("");let{patchFlag:te,dynamicChildren:oe,slotScopeIds:de}=O;de&&(U=U?U.concat(de):de),T==null?(a(ne,P,M),a(pe,P,M),I(O.children||[],P,pe,q,D,B,U,ae)):te>0&&te&64&&oe&&T.dynamicChildren?(C(T.dynamicChildren,oe,P,q,D,B,U),(O.key!=null||q&&O===q.subTree)&&Wd(T,O,!0)):W(T,O,P,pe,q,D,B,U,ae)},$=(T,O,P,M,q,D,B,U,ae)=>{O.slotScopeIds=U,T==null?O.shapeFlag&512?q.ctx.activate(O,P,M,B,ae):z(O,P,M,q,D,B,ae):H(T,O,ae)},z=(T,O,P,M,q,D,B)=>{const U=T.component=qf(T,M,q);if(br(T)&&(U.ctx.renderer=Z),Vf(U,!1,B),U.asyncDep){if(q&&q.registerDep(U,Y,B),!T.el){const ae=U.subTree=st(it);h(null,ae,O,P),T.placeholder=ae.el}}else Y(U,T,O,P,q,D,B)},H=(T,O,P)=>{const M=O.component=T.component;if(Df(T,O,P))if(M.asyncDep&&!M.asyncResolved){J(M,O,P);return}else M.next=O,M.update();else O.el=T.el,M.vnode=O},Y=(T,O,P,M,q,D,B)=>{const U=()=>{if(T.isMounted){let{next:te,bu:oe,u:de,parent:me,vnode:be}=T;{const yt=Jd(T);if(yt){te&&(te.el=be.el,J(T,te,B)),yt.asyncDep.then(()=>{T.isUnmounted||U()});return}}let _e=te,Ee;As(T,!1),te?(te.el=be.el,J(T,te,B)):te=be,oe&&Ln(oe),(Ee=te.props&&te.props.onVnodeBeforeUpdate)&&Lt(Ee,me,te,be),As(T,!0);const ze=Ci(T),_t=T.subTree;T.subTree=ze,b(_t,ze,d(_t.el),j(_t),T,q,D),te.el=ze.el,_e===null&&If(T,ze.el),de&&mt(de,q),(Ee=te.props&&te.props.onVnodeUpdated)&&mt(()=>Lt(Ee,me,te,be),q)}else{let te;const{el:oe,props:de}=O,{bm:me,m:be,parent:_e,root:Ee,type:ze}=T,_t=ya(O);As(T,!1),me&&Ln(me),!_t&&(te=de&&de.onVnodeBeforeMount)&&Lt(te,_e,O),As(T,!0);{Ee.ce&&Ee.ce._def.shadowRoot!==!1&&Ee.ce._injectChildStyle(ze);const yt=T.subTree=Ci(T);b(null,yt,P,M,T,q,D),O.el=yt.el}if(be&&mt(be,q),!_t&&(te=de&&de.onVnodeMounted)){const yt=O;mt(()=>Lt(te,_e,yt),q)}(O.shapeFlag&256||_e&&ya(_e.vnode)&&_e.vnode.shapeFlag&256)&&T.a&&mt(T.a,q),T.isMounted=!0,O=P=M=null}};T.scope.on();const ae=T.effect=new rd(U);T.scope.off();const ne=T.update=ae.run.bind(ae),pe=T.job=ae.runIfDirty.bind(ae);pe.i=T,pe.id=T.uid,ae.scheduler=()=>Xo(pe),As(T,!0),ne()},J=(T,O,P)=>{O.component=T;const M=T.vnode.props;T.vnode=O,T.next=null,vf(T,O.props,M,P),xf(T,O.children,P),as(),vi(T),ns()},W=(T,O,P,M,q,D,B,U,ae=!1)=>{const ne=T&&T.children,pe=T?T.shapeFlag:0,te=O.children,{patchFlag:oe,shapeFlag:de}=O;if(oe>0){if(oe&128){X(ne,te,P,M,q,D,B,U,ae);return}else if(oe&256){ie(ne,te,P,M,q,D,B,U,ae);return}}de&8?(pe&16&&Q(ne,q,D),te!==ne&&u(P,te)):pe&16?de&16?X(ne,te,P,M,q,D,B,U,ae):Q(ne,q,D,!0):(pe&8&&u(P,""),de&16&&I(te,P,M,q,D,B,U,ae))},ie=(T,O,P,M,q,D,B,U,ae)=>{T=T||Ws,O=O||Ws;const ne=T.length,pe=O.length,te=Math.min(ne,pe);let oe;for(oe=0;oe<te;oe++){const de=O[oe]=ae?fs(O[oe]):It(O[oe]);b(T[oe],de,P,null,q,D,B,U,ae)}ne>pe?Q(T,q,D,!0,!1,te):I(O,P,M,q,D,B,U,ae,te)},X=(T,O,P,M,q,D,B,U,ae)=>{let ne=0;const pe=O.length;let te=T.length-1,oe=pe-1;for(;ne<=te&&ne<=oe;){const de=T[ne],me=O[ne]=ae?fs(O[ne]):It(O[ne]);if(Rs(de,me))b(de,me,P,null,q,D,B,U,ae);else break;ne++}for(;ne<=te&&ne<=oe;){const de=T[te],me=O[oe]=ae?fs(O[oe]):It(O[oe]);if(Rs(de,me))b(de,me,P,null,q,D,B,U,ae);else break;te--,oe--}if(ne>te){if(ne<=oe){const de=oe+1,me=de<pe?O[de].el:M;for(;ne<=oe;)b(null,O[ne]=ae?fs(O[ne]):It(O[ne]),P,me,q,D,B,U,ae),ne++}}else if(ne>oe)for(;ne<=te;)ee(T[ne],q,D,!0),ne++;else{const de=ne,me=ne,be=new Map;for(ne=me;ne<=oe;ne++){const ft=O[ne]=ae?fs(O[ne]):It(O[ne]);ft.key!=null&&be.set(ft.key,ne)}let _e,Ee=0;const ze=oe-me+1;let _t=!1,yt=0;const ra=new Array(ze);for(ne=0;ne<ze;ne++)ra[ne]=0;for(ne=de;ne<=te;ne++){const ft=T[ne];if(Ee>=ze){ee(ft,q,D,!0);continue}let Mt;if(ft.key!=null)Mt=be.get(ft.key);else for(_e=me;_e<=oe;_e++)if(ra[_e-me]===0&&Rs(ft,O[_e])){Mt=_e;break}Mt===void 0?ee(ft,q,D,!0):(ra[Mt-me]=ne+1,Mt>=yt?yt=Mt:_t=!0,b(ft,O[Mt],P,null,q,D,B,U,ae),Ee++)}const ui=_t?Ef(ra):Ws;for(_e=ui.length-1,ne=ze-1;ne>=0;ne--){const ft=me+ne,Mt=O[ft],pi=O[ft+1],fi=ft+1<pe?pi.el||pi.placeholder:M;ra[ne]===0?b(null,Mt,P,fi,q,D,B,U,ae):_t&&(_e<0||ne!==ui[_e]?V(Mt,P,fi,2):_e--)}}},V=(T,O,P,M,q=null)=>{const{el:D,type:B,transition:U,children:ae,shapeFlag:ne}=T;if(ne&6){V(T.component.subTree,O,P,M);return}if(ne&128){T.suspense.move(O,P,M);return}if(ne&64){B.move(T,O,P,Z);return}if(B===Be){a(D,O,P);for(let te=0;te<ae.length;te++)V(ae[te],O,P,M);a(T.anchor,O,P);return}if(B===Dn){_(T,O,P);return}if(M!==2&&ne&1&&U)if(M===0)U.beforeEnter(D),a(D,O,P),mt(()=>U.enter(D),q);else{const{leave:te,delayLeave:oe,afterLeave:de}=U,me=()=>{T.ctx.isUnmounted?n(D):a(D,O,P)},be=()=>{D._isLeaving&&D[Zt](!0),te(D,()=>{me(),de&&de()})};oe?oe(D,me,be):be()}else a(D,O,P)},ee=(T,O,P,M=!1,q=!1)=>{const{type:D,props:B,ref:U,children:ae,dynamicChildren:ne,shapeFlag:pe,patchFlag:te,dirs:oe,cacheIndex:de}=T;if(te===-2&&(q=!1),U!=null&&(as(),_a(U,null,P,T,!0),ns()),de!=null&&(O.renderCache[de]=void 0),pe&256){O.ctx.deactivate(T);return}const me=pe&1&&oe,be=!ya(T);let _e;if(be&&(_e=B&&B.onVnodeBeforeUnmount)&&Lt(_e,O,T),pe&6)N(T.component,P,M);else{if(pe&128){T.suspense.unmount(P,M);return}me&&Es(T,null,O,"beforeUnmount"),pe&64?T.type.remove(T,O,P,Z,M):ne&&!ne.hasOnce&&(D!==Be||te>0&&te&64)?Q(ne,O,P,!1,!0):(D===Be&&te&384||!q&&pe&16)&&Q(ae,O,P),M&&G(T)}(be&&(_e=B&&B.onVnodeUnmounted)||me)&&mt(()=>{_e&&Lt(_e,O,T),me&&Es(T,null,O,"unmounted")},P)},G=T=>{const{type:O,el:P,anchor:M,transition:q}=T;if(O===Be){R(P,M);return}if(O===Dn){y(T);return}const D=()=>{n(P),q&&!q.persisted&&q.afterLeave&&q.afterLeave()};if(T.shapeFlag&1&&q&&!q.persisted){const{leave:B,delayLeave:U}=q,ae=()=>B(P,D);U?U(T.el,D,ae):ae()}else D()},R=(T,O)=>{let P;for(;T!==O;)P=p(T),n(T),T=P;n(O)},N=(T,O,P)=>{const{bum:M,scope:q,job:D,subTree:B,um:U,m:ae,a:ne}=T;Ai(ae),Ai(ne),M&&Ln(M),q.stop(),D&&(D.flags|=8,ee(B,T,O,P)),U&&mt(U,O),mt(()=>{T.isUnmounted=!0},O)},Q=(T,O,P,M=!1,q=!1,D=0)=>{for(let B=D;B<T.length;B++)ee(T[B],O,P,M,q)},j=T=>{if(T.shapeFlag&6)return j(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const O=p(T.anchor||T.el),P=O&&O[qp];return P?p(P):O};let K=!1;const se=(T,O,P)=>{T==null?O._vnode&&ee(O._vnode,null,null,!0):b(O._vnode||null,T,O,null,null,null,P),O._vnode=T,K||(K=!0,vi(),Sd(),K=!1)},Z={p:b,um:ee,m:V,r:G,mt:z,mc:I,pc:W,pbc:C,n:j,o:e};return{render:se,hydrate:void 0,createApp:mf(se)}}function Nr({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function As({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function kf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wd(e,t,s=!1){const a=e.children,n=t.children;if(ve(a)&&ve(n))for(let r=0;r<a.length;r++){const o=a[r];let l=n[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[r]=fs(n[r]),l.el=o.el),!s&&l.patchFlag!==-2&&Wd(o,l)),l.type===yr&&l.patchFlag!==-1&&(l.el=o.el),l.type===it&&!l.el&&(l.el=o.el)}}function Ef(e){const t=e.slice(),s=[0];let a,n,r,o,l;const i=e.length;for(a=0;a<i;a++){const c=e[a];if(c!==0){if(n=s[s.length-1],e[n]<c){t[a]=n,s.push(a);continue}for(r=0,o=s.length-1;r<o;)l=r+o>>1,e[s[l]]<c?r=l+1:o=l;c<e[s[r]]&&(r>0&&(t[a]=s[r-1]),s[r]=a)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}function Jd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jd(t)}function Ai(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Af=Symbol.for("v-scx"),Cf=()=>kt(Af);function Qs(e,t,s){return Xd(e,t,s)}function Xd(e,t,s=Ie){const{immediate:a,deep:n,flush:r,once:o}=s,l=We({},s),i=t&&a||!t&&r!=="post";let c;if(Ma){if(r==="sync"){const f=Cf();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!i){const f=()=>{};return f.stop=zt,f.resume=zt,f.pause=zt,f}}const u=tt;l.call=(f,g,b)=>Pt(f,u,g,b);let d=!1;r==="post"?l.scheduler=f=>{mt(f,u&&u.suspense)}:r!=="sync"&&(d=!0,l.scheduler=(f,g)=>{g?f():Xo(f)}),l.augmentJob=f=>{t&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const p=zp(e,t,l);return Ma&&(c?c.push(p):i&&p()),p}function Pf(e,t,s){const a=this.proxy,n=Ue(e)?e.includes(".")?Qd(a,e):()=>a[e]:e.bind(a,a);let r;ye(t)?r=t:(r=t.handler,s=t);const o=Na(this),l=Xd(n,r.bind(a),s);return o(),l}function Qd(e,t){const s=t.split(".");return()=>{let a=e;for(let n=0;n<s.length&&a;n++)a=a[s[n]];return a}}const Of=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Et(t)}Modifiers`]||e[`${xs(t)}Modifiers`];function $f(e,t,...s){if(e.isUnmounted)return;const a=e.vnode.props||Ie;let n=s;const r=t.startsWith("update:"),o=r&&Of(a,t.slice(7));o&&(o.trim&&(n=s.map(u=>Ue(u)?u.trim():u)),o.number&&(n=s.map(Ho)));let l,i=a[l=Or(t)]||a[l=Or(Et(t))];!i&&r&&(i=a[l=Or(xs(t))]),i&&Pt(i,e,6,n);const c=a[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Pt(c,e,6,n)}}const Mf=new WeakMap;function Zd(e,t,s=!1){const a=s?Mf:t.emitsCache,n=a.get(e);if(n!==void 0)return n;const r=e.emits;let o={},l=!1;if(!ye(e)){const i=c=>{const u=Zd(c,t,!0);u&&(l=!0,We(o,u))};!s&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!l?(De(e)&&a.set(e,null),null):(ve(r)?r.forEach(i=>o[i]=null):We(o,r),De(e)&&a.set(e,o),o)}function _r(e,t){return!e||!lr(t)?!1:(t=t.slice(2).replace(/Once$/,""),$e(e,t[0].toLowerCase()+t.slice(1))||$e(e,xs(t))||$e(e,t))}function Ci(e){const{type:t,vnode:s,proxy:a,withProxy:n,propsOptions:[r],slots:o,attrs:l,emit:i,render:c,renderCache:u,props:d,data:p,setupState:f,ctx:g,inheritAttrs:b}=e,v=Vn(e);let h,m;try{if(s.shapeFlag&4){const y=n||a,w=y;h=It(c.call(w,y,u,d,f,p,g)),m=l}else{const y=t;h=It(y.length>1?y(d,{attrs:l,slots:o,emit:i}):y(d,null)),m=t.props?l:Lf(l)}}catch(y){xa.length=0,gr(y,e,1),h=st(it)}let _=h;if(m&&b!==!1){const y=Object.keys(m),{shapeFlag:w}=_;y.length&&w&7&&(r&&y.some(Bo)&&(m=Rf(m,r)),_=ys(_,m,!1,!0))}return s.dirs&&(_=ys(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(s.dirs):s.dirs),s.transition&&Oa(_,s.transition),h=_,Vn(v),h}const Lf=e=>{let t;for(const s in e)(s==="class"||s==="style"||lr(s))&&((t||(t={}))[s]=e[s]);return t},Rf=(e,t)=>{const s={};for(const a in e)(!Bo(a)||!(a.slice(9)in t))&&(s[a]=e[a]);return s};function Df(e,t,s){const{props:a,children:n,component:r}=e,{props:o,children:l,patchFlag:i}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&i>=0){if(i&1024)return!0;if(i&16)return a?Pi(a,o,c):!!o;if(i&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==a[p]&&!_r(c,p))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:a===o?!1:a?o?Pi(a,o,c):!0:!!o;return!1}function Pi(e,t,s){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let n=0;n<a.length;n++){const r=a[n];if(t[r]!==e[r]&&!_r(s,r))return!0}return!1}function If({vnode:e,parent:t},s){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=s,t=t.parent;else break}}const eu=e=>e.__isSuspense;function Nf(e,t){t&&t.pendingBranch?ve(e)?t.effects.push(...e):t.effects.push(e):Up(e)}const Be=Symbol.for("v-fgt"),yr=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),xa=[];let vt=null;function ue(e=!1){xa.push(vt=e?null:[])}function Bf(){xa.pop(),vt=xa[xa.length-1]||null}let $a=1;function Yn(e,t=!1){$a+=e,e<0&&vt&&t&&(vt.hasOnce=!0)}function tu(e){return e.dynamicChildren=$a>0?vt||Ws:null,Bf(),$a>0&&vt&&vt.push(e),e}function fe(e,t,s,a,n,r){return tu(A(e,t,s,a,n,r,!0))}function su(e,t,s,a,n){return tu(st(e,t,s,a,n,!0))}function Wn(e){return e?e.__v_isVNode===!0:!1}function Rs(e,t){return e.type===t.type&&e.key===t.key}const au=({key:e})=>e??null,In=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Ue(e)||qe(e)||ye(e)?{i:bt,r:e,k:t,f:!!s}:e:null);function A(e,t=null,s=null,a=0,n=null,r=e===Be?0:1,o=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&au(t),ref:t&&In(t),scopeId:Ed,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:bt};return l?(ei(i,s),r&128&&e.normalize(i)):s&&(i.shapeFlag|=Ue(s)?8:16),$a>0&&!o&&vt&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&vt.push(i),i}const st=Ff;function Ff(e,t=null,s=null,a=0,n=null,r=!1){if((!e||e===Nd)&&(e=it),Wn(e)){const l=ys(e,t,!0);return s&&ei(l,s),$a>0&&!r&&vt&&(l.shapeFlag&6?vt[vt.indexOf(e)]=l:vt.push(l)),l.patchFlag=-2,l}if(Jf(e)&&(e=e.__vccOpts),t){t=zf(t);let{class:l,style:i}=t;l&&!Ue(l)&&(t.class=Ve(l)),De(i)&&(Yo(i)&&!ve(i)&&(i=We({},i)),t.style=fr(i))}const o=Ue(e)?1:eu(e)?128:Ad(e)?64:De(e)?4:ye(e)?2:0;return A(e,t,s,a,n,o,r,!0)}function zf(e){return e?Yo(e)||Ud(e)?We({},e):e:null}function ys(e,t,s=!1,a=!1){const{props:n,ref:r,patchFlag:o,children:l,transition:i}=e,c=t?Hf(n||{},t):n,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&au(c),ref:t&&t.ref?s&&r?ve(r)?r.concat(In(t)):[r,In(t)]:In(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Be?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ys(e.ssContent),ssFallback:e.ssFallback&&ys(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&a&&Oa(u,i.clone(u)),u}function Fe(e=" ",t=0){return st(yr,null,e,t)}function pt(e,t){const s=st(Dn,null,e);return s.staticCount=t,s}function xe(e="",t=!1){return t?(ue(),su(it,null,e)):st(it,null,e)}function It(e){return e==null||typeof e=="boolean"?st(it):ve(e)?st(Be,null,e.slice()):Wn(e)?fs(e):st(yr,null,String(e))}function fs(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ys(e)}function ei(e,t){let s=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(ve(t))s=16;else if(typeof t=="object")if(a&65){const n=t.default;n&&(n._c&&(n._d=!1),ei(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!Ud(t)?t._ctx=bt:n===3&&bt&&(bt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ye(t)?(t={default:t,_ctx:bt},s=32):(t=String(t),a&64?(s=16,t=[Fe(t)]):s=8);e.children=t,e.shapeFlag|=s}function Hf(...e){const t={};for(let s=0;s<e.length;s++){const a=e[s];for(const n in a)if(n==="class")t.class!==a.class&&(t.class=Ve([t.class,a.class]));else if(n==="style")t.style=fr([t.style,a.style]);else if(lr(n)){const r=t[n],o=a[n];o&&r!==o&&!(ve(r)&&r.includes(o))&&(t[n]=r?[].concat(r,o):o)}else n!==""&&(t[n]=a[n])}return t}function Lt(e,t,s,a=null){Pt(e,t,7,[s,a])}const jf=zd();let Uf=0;function qf(e,t,s){const a=e.type,n=(t?t.appContext:e.appContext)||jf,r={uid:Uf++,vnode:e,type:a,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vd(a,n),emitsOptions:Zd(a,n),emit:null,emitted:null,propsDefaults:Ie,inheritAttrs:a.inheritAttrs,ctx:Ie,data:Ie,props:Ie,attrs:Ie,slots:Ie,refs:Ie,setupState:Ie,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=$f.bind(null,r),e.ce&&e.ce(r),r}let tt=null;const ti=()=>tt||bt;let Jn,So;{const e=pr(),t=(s,a)=>{let n;return(n=e[s])||(n=e[s]=[]),n.push(a),r=>{n.length>1?n.forEach(o=>o(r)):n[0](r)}};Jn=t("__VUE_INSTANCE_SETTERS__",s=>tt=s),So=t("__VUE_SSR_SETTERS__",s=>Ma=s)}const Na=e=>{const t=tt;return Jn(e),e.scope.on(),()=>{e.scope.off(),Jn(t)}},Oi=()=>{tt&&tt.scope.off(),Jn(null)};function nu(e){return e.vnode.shapeFlag&4}let Ma=!1;function Vf(e,t=!1,s=!1){t&&So(t);const{props:a,children:n}=e.vnode,r=nu(e);bf(e,a,r,t),wf(e,n,s||t);const o=r?Gf(e,t):void 0;return t&&So(!1),o}function Gf(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,lf);const{setup:a}=s;if(a){as();const n=e.setupContext=a.length>1?Yf(e):null,r=Na(e),o=Ia(a,e,0,[e.props,n]),l=Yc(o);if(ns(),r(),(l||e.sp)&&!ya(e)&&Rd(e),l){if(o.then(Oi,Oi),t)return o.then(i=>{$i(e,i)}).catch(i=>{gr(i,e,0)});e.asyncDep=o}else $i(e,o)}else ru(e)}function $i(e,t,s){ye(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:De(t)&&(e.setupState=wd(t)),ru(e)}function ru(e,t,s){const a=e.type;e.render||(e.render=a.render||zt);{const n=Na(e);as();try{cf(e)}finally{ns(),n()}}}const Kf={get(e,t){return et(e,"get",""),e[t]}};function Yf(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Kf),slots:e.slots,emit:e.emit,expose:t}}function wr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wd(Wo(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in wa)return wa[s](e)},has(t,s){return s in t||s in wa}})):e.proxy}function Wf(e,t=!0){return ye(e)?e.displayName||e.name:e.name||t&&e.__name}function Jf(e){return ye(e)&&"__vccOpts"in e}const ge=(e,t)=>Bp(e,t,Ma);function si(e,t,s){try{Yn(-1);const a=arguments.length;return a===2?De(t)&&!ve(t)?Wn(t)?st(e,null,[t]):st(e,t):st(e,null,t):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Wn(s)&&(s=[s]),st(e,t,s))}finally{Yn(1)}}const Xf="3.5.24";let ko;const Mi=typeof window<"u"&&window.trustedTypes;if(Mi)try{ko=Mi.createPolicy("vue",{createHTML:e=>e})}catch{}const ou=ko?e=>ko.createHTML(e):e=>e,Qf="http://www.w3.org/2000/svg",Zf="http://www.w3.org/1998/Math/MathML",Xt=typeof document<"u"?document:null,Li=Xt&&Xt.createElement("template"),eh={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,a)=>{const n=t==="svg"?Xt.createElementNS(Qf,e):t==="mathml"?Xt.createElementNS(Zf,e):s?Xt.createElement(e,{is:s}):Xt.createElement(e);return e==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:e=>Xt.createTextNode(e),createComment:e=>Xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,a,n,r){const o=s?s.previousSibling:t.lastChild;if(n&&(n===r||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===r||!(n=n.nextSibling)););else{Li.innerHTML=ou(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Li.content;if(a==="svg"||a==="mathml"){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}t.insertBefore(l,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},ls="transition",ia="animation",La=Symbol("_vtc"),iu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},th=We({},Cd,iu),sh=e=>(e.displayName="Transition",e.props=th,e),ah=sh((e,{slots:t})=>si(Kp,nh(e),t)),Cs=(e,t=[])=>{ve(e)?e.forEach(s=>s(...t)):e&&e(...t)},Ri=e=>e?ve(e)?e.some(t=>t.length>1):e.length>1:!1;function nh(e){const t={};for(const S in e)S in iu||(t[S]=e[S]);if(e.css===!1)return t;const{name:s="v",type:a,duration:n,enterFromClass:r=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:l=`${s}-enter-to`,appearFromClass:i=r,appearActiveClass:c=o,appearToClass:u=l,leaveFromClass:d=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=e,g=rh(n),b=g&&g[0],v=g&&g[1],{onBeforeEnter:h,onEnter:m,onEnterCancelled:_,onLeave:y,onLeaveCancelled:w,onBeforeAppear:x=h,onAppear:E=m,onAppearCancelled:I=_}=t,L=(S,$,z,H)=>{S._enterCancelled=H,Ps(S,$?u:l),Ps(S,$?c:o),z&&z()},C=(S,$)=>{S._isLeaving=!1,Ps(S,d),Ps(S,f),Ps(S,p),$&&$()},k=S=>($,z)=>{const H=S?E:m,Y=()=>L($,S,z);Cs(H,[$,Y]),Di(()=>{Ps($,S?i:r),qt($,S?u:l),Ri(H)||Ii($,a,b,Y)})};return We(t,{onBeforeEnter(S){Cs(h,[S]),qt(S,r),qt(S,o)},onBeforeAppear(S){Cs(x,[S]),qt(S,i),qt(S,c)},onEnter:k(!1),onAppear:k(!0),onLeave(S,$){S._isLeaving=!0;const z=()=>C(S,$);qt(S,d),S._enterCancelled?(qt(S,p),Fi(S)):(Fi(S),qt(S,p)),Di(()=>{S._isLeaving&&(Ps(S,d),qt(S,f),Ri(y)||Ii(S,a,v,z))}),Cs(y,[S,z])},onEnterCancelled(S){L(S,!1,void 0,!0),Cs(_,[S])},onAppearCancelled(S){L(S,!0,void 0,!0),Cs(I,[S])},onLeaveCancelled(S){C(S),Cs(w,[S])}})}function rh(e){if(e==null)return null;if(De(e))return[Br(e.enter),Br(e.leave)];{const t=Br(e);return[t,t]}}function Br(e){return ap(e)}function qt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[La]||(e[La]=new Set)).add(t)}function Ps(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const s=e[La];s&&(s.delete(t),s.size||(e[La]=void 0))}function Di(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let oh=0;function Ii(e,t,s,a){const n=e._endId=++oh,r=()=>{n===e._endId&&a()};if(s!=null)return setTimeout(r,s);const{type:o,timeout:l,propCount:i}=ih(e,t);if(!o)return a();const c=o+"end";let u=0;const d=()=>{e.removeEventListener(c,p),r()},p=f=>{f.target===e&&++u>=i&&d()};setTimeout(()=>{u<i&&d()},l+1),e.addEventListener(c,p)}function ih(e,t){const s=window.getComputedStyle(e),a=g=>(s[g]||"").split(", "),n=a(`${ls}Delay`),r=a(`${ls}Duration`),o=Ni(n,r),l=a(`${ia}Delay`),i=a(`${ia}Duration`),c=Ni(l,i);let u=null,d=0,p=0;t===ls?o>0&&(u=ls,d=o,p=r.length):t===ia?c>0&&(u=ia,d=c,p=i.length):(d=Math.max(o,c),u=d>0?o>c?ls:ia:null,p=u?u===ls?r.length:i.length:0);const f=u===ls&&/\b(?:transform|all)(?:,|$)/.test(a(`${ls}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:f}}function Ni(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,a)=>Bi(s)+Bi(e[a])))}function Bi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Fi(e){return(e?e.ownerDocument:document).body.offsetHeight}function lh(e,t,s){const a=e[La];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Xn=Symbol("_vod"),lu=Symbol("_vsh"),qa={name:"show",beforeMount(e,{value:t},{transition:s}){e[Xn]=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):la(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:a}){!t!=!s&&(a?t?(a.beforeEnter(e),la(e,!0),a.enter(e)):a.leave(e,()=>{la(e,!1)}):la(e,t))},beforeUnmount(e,{value:t}){la(e,t)}};function la(e,t){e.style.display=t?e[Xn]:"none",e[lu]=!t}const ch=Symbol(""),dh=/(?:^|;)\s*display\s*:/;function uh(e,t,s){const a=e.style,n=Ue(s);let r=!1;if(s&&!n){if(t)if(Ue(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();s[l]==null&&Nn(a,l,"")}else for(const o in t)s[o]==null&&Nn(a,o,"");for(const o in s)o==="display"&&(r=!0),Nn(a,o,s[o])}else if(n){if(t!==s){const o=a[ch];o&&(s+=";"+o),a.cssText=s,r=dh.test(s)}}else t&&e.removeAttribute("style");Xn in e&&(e[Xn]=r?a.display:"",e[lu]&&(a.display="none"))}const zi=/\s*!important$/;function Nn(e,t,s){if(ve(s))s.forEach(a=>Nn(e,t,a));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const a=ph(e,t);zi.test(s)?e.setProperty(xs(a),s.replace(zi,""),"important"):e[a]=s}}const Hi=["Webkit","Moz","ms"],Fr={};function ph(e,t){const s=Fr[t];if(s)return s;let a=Et(t);if(a!=="filter"&&a in e)return Fr[t]=a;a=ur(a);for(let n=0;n<Hi.length;n++){const r=Hi[n]+a;if(r in e)return Fr[t]=r}return t}const ji="http://www.w3.org/1999/xlink";function Ui(e,t,s,a,n,r=cp(t)){a&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(ji,t.slice(6,t.length)):e.setAttributeNS(ji,t,s):s==null||r&&!Qc(s)?e.removeAttribute(t):e.setAttribute(t,r?"":jt(s)?String(s):s)}function qi(e,t,s,a,n){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?ou(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,i=s==null?e.type==="checkbox"?"on":"":String(s);(l!==i||!("_value"in e))&&(e.value=i),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=Qc(s):s==null&&l==="string"?(s="",o=!0):l==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(n||t)}function Ds(e,t,s,a){e.addEventListener(t,s,a)}function fh(e,t,s,a){e.removeEventListener(t,s,a)}const Vi=Symbol("_vei");function hh(e,t,s,a,n=null){const r=e[Vi]||(e[Vi]={}),o=r[t];if(a&&o)o.value=a;else{const[l,i]=mh(t);if(a){const c=r[t]=vh(a,n);Ds(e,l,c,i)}else o&&(fh(e,l,o,i),r[t]=void 0)}}const Gi=/(?:Once|Passive|Capture)$/;function mh(e){let t;if(Gi.test(e)){t={};let a;for(;a=e.match(Gi);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xs(e.slice(2)),t]}let zr=0;const gh=Promise.resolve(),bh=()=>zr||(gh.then(()=>zr=0),zr=Date.now());function vh(e,t){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;Pt(_h(a,s.value),t,5,[a])};return s.value=e,s.attached=bh(),s}function _h(e,t){if(ve(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(a=>n=>!n._stopped&&a&&a(n))}else return t}const Ki=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yh=(e,t,s,a,n,r)=>{const o=n==="svg";t==="class"?lh(e,a,o):t==="style"?uh(e,s,a):lr(t)?Bo(t)||hh(e,t,s,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wh(e,t,a,o))?(qi(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Ui(e,t,a,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ue(a))?qi(e,Et(t),a,r,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Ui(e,t,a,o))};function wh(e,t,s,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ki(t)&&ye(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Ki(t)&&Ue(s)?!1:t in e}const Qn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ve(t)?s=>Ln(t,s):t};function xh(e){e.target.composing=!0}function Yi(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Zs=Symbol("_assign");function Wi(e,t,s){return t&&(e=e.trim()),s&&(e=Ho(e)),e}const Bn={created(e,{modifiers:{lazy:t,trim:s,number:a}},n){e[Zs]=Qn(n);const r=a||n.props&&n.props.type==="number";Ds(e,t?"change":"input",o=>{o.target.composing||e[Zs](Wi(e.value,s,r))}),(s||r)&&Ds(e,"change",()=>{e.value=Wi(e.value,s,r)}),t||(Ds(e,"compositionstart",xh),Ds(e,"compositionend",Yi),Ds(e,"change",Yi))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:a,trim:n,number:r}},o){if(e[Zs]=Qn(o),e.composing)return;const l=(r||e.type==="number")&&!/^0\d/.test(e.value)?Ho(e.value):e.value,i=t??"";l!==i&&(document.activeElement===e&&e.type!=="range"&&(a&&t===s||n&&e.value.trim()===i)||(e.value=i))}},cu={deep:!0,created(e,t,s){e[Zs]=Qn(s),Ds(e,"change",()=>{const a=e._modelValue,n=Th(e),r=e.checked,o=e[Zs];if(ve(a)){const l=Zc(a,n),i=l!==-1;if(r&&!i)o(a.concat(n));else if(!r&&i){const c=[...a];c.splice(l,1),o(c)}}else if(cr(a)){const l=new Set(a);r?l.add(n):l.delete(n),o(l)}else o(du(e,r))})},mounted:Ji,beforeUpdate(e,t,s){e[Zs]=Qn(s),Ji(e,t,s)}};function Ji(e,{value:t,oldValue:s},a){e._modelValue=t;let n;if(ve(t))n=Zc(t,a.props.value)>-1;else if(cr(t))n=t.has(a.props.value);else{if(t===s)return;n=hr(t,du(e,!0))}e.checked!==n&&(e.checked=n)}function Th(e){return"_value"in e?e._value:e.value}function du(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Sh=["ctrl","shift","alt","meta"],kh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Sh.some(s=>e[`${s}Key`]&&!t.includes(s))},zs=(e,t)=>{const s=e._withMods||(e._withMods={}),a=t.join(".");return s[a]||(s[a]=((n,...r)=>{for(let o=0;o<t.length;o++){const l=kh[t[o]];if(l&&l(n,t))return}return e(n,...r)}))},Eh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},es=(e,t)=>{const s=e._withKeys||(e._withKeys={}),a=t.join(".");return s[a]||(s[a]=(n=>{if(!("key"in n))return;const r=xs(n.key);if(t.some(o=>o===r||Eh[o]===r))return e(n)}))},Ah=We({patchProp:yh},eh);let Xi;function Ch(){return Xi||(Xi=Tf(Ah))}const Ph=((...e)=>{const t=Ch().createApp(...e),{mount:s}=t;return t.mount=a=>{const n=$h(a);if(!n)return;const r=t._component;!ye(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const o=s(n,!1,Oh(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),o},t});function Oh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $h(e){return Ue(e)?document.querySelector(e):e}let uu;const xr=e=>uu=e,pu=Symbol();function Eo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ta;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ta||(Ta={}));function Mh(){const e=ad(!0),t=e.run(()=>Me({}));let s=[],a=[];const n=Wo({install(r){xr(n),n._a=r,r.provide(pu,n),r.config.globalProperties.$pinia=n,a.forEach(o=>s.push(o)),a=[]},use(r){return this._a?s.push(r):a.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return n}const fu=()=>{};function Qi(e,t,s,a=fu){e.add(t);const n=()=>{e.delete(t)&&a()};return!s&&nd()&&up(n),n}function js(e,...t){e.forEach(s=>{s(...t)})}const Lh=e=>e(),Zi=Symbol(),Hr=Symbol();function Ao(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,a)=>e.set(a,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const a=t[s],n=e[s];Eo(n)&&Eo(a)&&e.hasOwnProperty(s)&&!qe(a)&&!vs(a)?e[s]=Ao(n,a):e[s]=a}return e}const Rh=Symbol();function Dh(e){return!Eo(e)||!Object.prototype.hasOwnProperty.call(e,Rh)}const{assign:us}=Object;function Ih(e){return!!(qe(e)&&e.effect)}function Nh(e,t,s,a){const{state:n,actions:r,getters:o}=t,l=s.state.value[e];let i;function c(){l||(s.state.value[e]=n?n():{});const u=Rp(s.state.value[e]);return us(u,r,Object.keys(o||{}).reduce((d,p)=>(d[p]=Wo(ge(()=>{xr(s);const f=s._s.get(e);return o[p].call(f,f)})),d),{}))}return i=hu(e,c,t,s,a,!0),i}function hu(e,t,s={},a,n,r){let o;const l=us({actions:{}},s),i={deep:!0};let c,u,d=new Set,p=new Set,f;const g=a.state.value[e];!r&&!g&&(a.state.value[e]={}),Me({});let b;function v(I){let L;c=u=!1,typeof I=="function"?(I(a.state.value[e]),L={type:Ta.patchFunction,storeId:e,events:f}):(Ao(a.state.value[e],I),L={type:Ta.patchObject,payload:I,storeId:e,events:f});const C=b=Symbol();Jo().then(()=>{b===C&&(c=!0)}),u=!0,js(d,L,a.state.value[e])}const h=r?function(){const{state:L}=s,C=L?L():{};this.$patch(k=>{us(k,C)})}:fu;function m(){o.stop(),d.clear(),p.clear(),a._s.delete(e)}const _=(I,L="")=>{if(Zi in I)return I[Hr]=L,I;const C=function(){xr(a);const k=Array.from(arguments),S=new Set,$=new Set;function z(J){S.add(J)}function H(J){$.add(J)}js(p,{args:k,name:C[Hr],store:w,after:z,onError:H});let Y;try{Y=I.apply(this&&this.$id===e?this:w,k)}catch(J){throw js($,J),J}return Y instanceof Promise?Y.then(J=>(js(S,J),J)).catch(J=>(js($,J),Promise.reject(J))):(js(S,Y),Y)};return C[Zi]=!0,C[Hr]=L,C},y={_p:a,$id:e,$onAction:Qi.bind(null,p),$patch:v,$reset:h,$subscribe(I,L={}){const C=Qi(d,I,L.detached,()=>k()),k=o.run(()=>Qs(()=>a.state.value[e],S=>{(L.flush==="sync"?u:c)&&I({storeId:e,type:Ta.direct,events:f},S)},us({},i,L)));return C},$dispose:m},w=Nt(y);a._s.set(e,w);const E=(a._a&&a._a.runWithContext||Lh)(()=>a._e.run(()=>(o=ad()).run(()=>t({action:_}))));for(const I in E){const L=E[I];if(qe(L)&&!Ih(L)||vs(L))r||(g&&Dh(L)&&(qe(L)?L.value=g[I]:Ao(L,g[I])),a.state.value[e][I]=L);else if(typeof L=="function"){const C=_(L,I);E[I]=C,l.actions[I]=L}}return us(w,E),us(Ae(w),E),Object.defineProperty(w,"$state",{get:()=>a.state.value[e],set:I=>{v(L=>{us(L,I)})}}),a._p.forEach(I=>{us(w,o.run(()=>I({store:w,app:a._a,pinia:a,options:l})))}),g&&r&&s.hydrate&&s.hydrate(w.$state,g),c=!0,u=!0,w}function Bh(e,t,s){let a;const n=typeof t=="function";a=n?s:t;function r(o,l){const i=gf();return o=o||(i?kt(pu,null):null),o&&xr(o),o=uu,o._s.has(e)||(n?hu(e,t,a,o):Nh(e,a,o)),o._s.get(e)}return r.$id=e,r}const Ys=typeof document<"u";function mu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&mu(e.default)}const Oe=Object.assign;function jr(e,t){const s={};for(const a in t){const n=t[a];s[a]=Ot(n)?n.map(e):e(n)}return s}const Sa=()=>{},Ot=Array.isArray;function el(e,t){const s={};for(const a in e)s[a]=a in t?t[a]:e[a];return s}const gu=/#/g,zh=/&/g,Hh=/\//g,jh=/=/g,Uh=/\?/g,bu=/\+/g,qh=/%5B/g,Vh=/%5D/g,vu=/%5E/g,Gh=/%60/g,_u=/%7B/g,Kh=/%7C/g,yu=/%7D/g,Yh=/%20/g;function ai(e){return e==null?"":encodeURI(""+e).replace(Kh,"|").replace(qh,"[").replace(Vh,"]")}function Wh(e){return ai(e).replace(_u,"{").replace(yu,"}").replace(vu,"^")}function Co(e){return ai(e).replace(bu,"%2B").replace(Yh,"+").replace(gu,"%23").replace(zh,"%26").replace(Gh,"`").replace(_u,"{").replace(yu,"}").replace(vu,"^")}function Jh(e){return Co(e).replace(jh,"%3D")}function Xh(e){return ai(e).replace(gu,"%23").replace(Uh,"%3F")}function Qh(e){return Xh(e).replace(Hh,"%2F")}function Ra(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Zh=/\/$/,em=e=>e.replace(Zh,"");function Ur(e,t,s="/"){let a,n={},r="",o="";const l=t.indexOf("#");let i=t.indexOf("?");return i=l>=0&&i>l?-1:i,i>=0&&(a=t.slice(0,i),r=t.slice(i,l>0?l:t.length),n=e(r.slice(1))),l>=0&&(a=a||t.slice(0,l),o=t.slice(l,t.length)),a=nm(a??t,s),{fullPath:a+r+o,path:a,query:n,hash:Ra(o)}}function tm(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function tl(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function sm(e,t,s){const a=t.matched.length-1,n=s.matched.length-1;return a>-1&&a===n&&ea(t.matched[a],s.matched[n])&&wu(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function ea(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!am(e[s],t[s]))return!1;return!0}function am(e,t){return Ot(e)?sl(e,t):Ot(t)?sl(t,e):e===t}function sl(e,t){return Ot(t)?e.length===t.length&&e.every((s,a)=>s===t[a]):e.length===1&&e[0]===t}function nm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),a=e.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let r=s.length-1,o,l;for(o=0;o<a.length;o++)if(l=a[o],l!==".")if(l==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+a.slice(o).join("/")}const cs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Po=(function(e){return e.pop="pop",e.push="push",e})({}),qr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function rm(e){if(!e)if(Ys){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),em(e)}const om=/^[^#]+#/;function im(e,t){return e.replace(om,"#")+t}function lm(e,t){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-s.left-(t.left||0),top:a.top-s.top-(t.top||0)}}const Tr=()=>({left:window.scrollX,top:window.scrollY});function cm(e){let t;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#"),n=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!n)return;t=lm(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function al(e,t){return(history.state?history.state.position-t:-1)+e}const Oo=new Map;function dm(e,t){Oo.set(e,t)}function um(e){const t=Oo.get(e);return Oo.delete(e),t}function pm(e){return typeof e=="string"||e&&typeof e=="object"}function xu(e){return typeof e=="string"||typeof e=="symbol"}let je=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Tu=Symbol("");je.MATCHER_NOT_FOUND+"",je.NAVIGATION_GUARD_REDIRECT+"",je.NAVIGATION_ABORTED+"",je.NAVIGATION_CANCELLED+"",je.NAVIGATION_DUPLICATED+"";function ta(e,t){return Oe(new Error,{type:e,[Tu]:!0},t)}function Vt(e,t){return e instanceof Error&&Tu in e&&(t==null||!!(e.type&t))}const fm=["params","query","hash"];function hm(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of fm)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function mm(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<s.length;++a){const n=s[a].replace(bu," "),r=n.indexOf("="),o=Ra(r<0?n:n.slice(0,r)),l=r<0?null:Ra(n.slice(r+1));if(o in t){let i=t[o];Ot(i)||(i=t[o]=[i]),i.push(l)}else t[o]=l}return t}function nl(e){let t="";for(let s in e){const a=e[s];if(s=Jh(s),a==null){a!==void 0&&(t+=(t.length?"&":"")+s);continue}(Ot(a)?a.map(n=>n&&Co(n)):[a&&Co(a)]).forEach(n=>{n!==void 0&&(t+=(t.length?"&":"")+s,n!=null&&(t+="="+n))})}return t}function gm(e){const t={};for(const s in e){const a=e[s];a!==void 0&&(t[s]=Ot(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return t}const bm=Symbol(""),rl=Symbol(""),Sr=Symbol(""),ni=Symbol(""),$o=Symbol("");function ca(){let e=[];function t(a){return e.push(a),()=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function hs(e,t,s,a,n,r=o=>o()){const o=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((l,i)=>{const c=p=>{p===!1?i(ta(je.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?i(p):pm(p)?i(ta(je.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&a.enterCallbacks[n]===o&&typeof p=="function"&&o.push(p),l())},u=r(()=>e.call(a&&a.instances[n],t,s,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(p=>i(p))})}function Vr(e,t,s,a,n=r=>r()){const r=[];for(const o of e)for(const l in o.components){let i=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(mu(i)){const c=(i.__vccOpts||i)[t];c&&r.push(hs(c,s,a,o,l,n))}else{let c=i();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const d=Fh(u)?u.default:u;o.mods[l]=u,o.components[l]=d;const p=(d.__vccOpts||d)[t];return p&&hs(p,s,a,o,l,n)()}))}}return r}function vm(e,t){const s=[],a=[],n=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(c=>ea(c,l))?a.push(l):s.push(l));const i=e.matched[o];i&&(t.matched.find(c=>ea(c,i))||n.push(i))}return[s,a,n]}let _m=()=>location.protocol+"//"+location.host;function Su(e,t){const{pathname:s,search:a,hash:n}=t,r=e.indexOf("#");if(r>-1){let o=n.includes(e.slice(r))?e.slice(r).length:1,l=n.slice(o);return l[0]!=="/"&&(l="/"+l),tl(l,"")}return tl(s,e)+a+n}function ym(e,t,s,a){let n=[],r=[],o=null;const l=({state:p})=>{const f=Su(e,location),g=s.value,b=t.value;let v=0;if(p){if(s.value=f,t.value=p,o&&o===g){o=null;return}v=b?p.position-b.position:0}else a(f);n.forEach(h=>{h(s.value,g,{delta:v,type:Po.pop,direction:v?v>0?qr.forward:qr.back:qr.unknown})})};function i(){o=s.value}function c(p){n.push(p);const f=()=>{const g=n.indexOf(p);g>-1&&n.splice(g,1)};return r.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Oe({},p.state,{scroll:Tr()}),"")}}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:i,listen:c,destroy:d}}function ol(e,t,s,a=!1,n=!1){return{back:e,current:t,forward:s,replaced:a,position:window.history.length,scroll:n?Tr():null}}function wm(e){const{history:t,location:s}=window,a={value:Su(e,s)},n={value:t.state};n.value||r(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(i,c,u){const d=e.indexOf("#"),p=d>-1?(s.host&&document.querySelector("base")?e:e.slice(d))+i:_m()+e+i;try{t[u?"replaceState":"pushState"](c,"",p),n.value=c}catch(f){console.error(f),s[u?"replace":"assign"](p)}}function o(i,c){r(i,Oe({},t.state,ol(n.value.back,i,n.value.forward,!0),c,{position:n.value.position}),!0),a.value=i}function l(i,c){const u=Oe({},n.value,t.state,{forward:i,scroll:Tr()});r(u.current,u,!0),r(i,Oe({},ol(a.value,i,null),{position:u.position+1},c),!1),a.value=i}return{location:a,state:n,push:l,replace:o}}function xm(e){e=rm(e);const t=wm(e),s=ym(e,t.state,t.location,t.replace);function a(r,o=!0){o||s.pauseListeners(),history.go(r)}const n=Oe({location:"",base:e,go:a,createHref:im.bind(null,e)},t,s);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function Tm(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),xm(e)}let Ns=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ke=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ke||{});const Sm={type:Ns.Static,value:""},km=/[a-zA-Z0-9_]/;function Em(e){if(!e)return[[]];if(e==="/")return[[Sm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${s})/"${c}": ${f}`)}let s=Ke.Static,a=s;const n=[];let r;function o(){r&&n.push(r),r=[]}let l=0,i,c="",u="";function d(){c&&(s===Ke.Static?r.push({type:Ns.Static,value:c}):s===Ke.Param||s===Ke.ParamRegExp||s===Ke.ParamRegExpEnd?(r.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Ns.Param,value:c,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=i}for(;l<e.length;){if(i=e[l++],i==="\\"&&s!==Ke.ParamRegExp){a=s,s=Ke.EscapeNext;continue}switch(s){case Ke.Static:i==="/"?(c&&d(),o()):i===":"?(d(),s=Ke.Param):p();break;case Ke.EscapeNext:p(),s=a;break;case Ke.Param:i==="("?s=Ke.ParamRegExp:km.test(i)?p():(d(),s=Ke.Static,i!=="*"&&i!=="?"&&i!=="+"&&l--);break;case Ke.ParamRegExp:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:s=Ke.ParamRegExpEnd:u+=i;break;case Ke.ParamRegExpEnd:d(),s=Ke.Static,i!=="*"&&i!=="?"&&i!=="+"&&l--,u="";break;default:t("Unknown state");break}}return s===Ke.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),o(),n}const il="[^/]+?",Am={sensitive:!1,strict:!1,start:!0,end:!0};var rt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(rt||{});const Cm=/[.+*?^${}()[\]/\\]/g;function Pm(e,t){const s=Oe({},Am,t),a=[];let n=s.start?"^":"";const r=[];for(const c of e){const u=c.length?[]:[rt.Root];s.strict&&!c.length&&(n+="/");for(let d=0;d<c.length;d++){const p=c[d];let f=rt.Segment+(s.sensitive?rt.BonusCaseSensitive:0);if(p.type===Ns.Static)d||(n+="/"),n+=p.value.replace(Cm,"\\$&"),f+=rt.Static;else if(p.type===Ns.Param){const{value:g,repeatable:b,optional:v,regexp:h}=p;r.push({name:g,repeatable:b,optional:v});const m=h||il;if(m!==il){f+=rt.BonusCustomRegExp;try{`${m}`}catch(y){throw new Error(`Invalid custom RegExp for param "${g}" (${m}): `+y.message)}}let _=b?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;d||(_=v&&c.length<2?`(?:/${_})`:"/"+_),v&&(_+="?"),n+=_,f+=rt.Dynamic,v&&(f+=rt.BonusOptional),b&&(f+=rt.BonusRepeatable),m===".*"&&(f+=rt.BonusWildcard)}u.push(f)}a.push(u)}if(s.strict&&s.end){const c=a.length-1;a[c][a[c].length-1]+=rt.BonusStrict}s.strict||(n+="/?"),s.end?n+="$":s.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const o=new RegExp(n,s.sensitive?"":"i");function l(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const f=u[p]||"",g=r[p-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function i(c){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of p)if(f.type===Ns.Static)u+=f.value;else if(f.type===Ns.Param){const{value:g,repeatable:b,optional:v}=f,h=g in c?c[g]:"";if(Ot(h)&&!b)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const m=Ot(h)?h.join("/"):h;if(!m)if(v)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=m}}return u||"/"}return{re:o,score:a,keys:r,parse:l,stringify:i}}function Om(e,t){let s=0;for(;s<e.length&&s<t.length;){const a=t[s]-e[s];if(a)return a;s++}return e.length<t.length?e.length===1&&e[0]===rt.Static+rt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===rt.Static+rt.Segment?1:-1:0}function ku(e,t){let s=0;const a=e.score,n=t.score;for(;s<a.length&&s<n.length;){const r=Om(a[s],n[s]);if(r)return r;s++}if(Math.abs(n.length-a.length)===1){if(ll(a))return 1;if(ll(n))return-1}return n.length-a.length}function ll(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $m={strict:!1,end:!0,sensitive:!1};function Mm(e,t,s){const a=Pm(Em(e.path),s),n=Oe(a,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function Lm(e,t){const s=[],a=new Map;t=el($m,t);function n(d){return a.get(d)}function r(d,p,f){const g=!f,b=dl(d);b.aliasOf=f&&f.record;const v=el(t,d),h=[b];if("alias"in d){const y=typeof d.alias=="string"?[d.alias]:d.alias;for(const w of y)h.push(dl(Oe({},b,{components:f?f.record.components:b.components,path:w,aliasOf:f?f.record:b})))}let m,_;for(const y of h){const{path:w}=y;if(p&&w[0]!=="/"){const x=p.record.path,E=x[x.length-1]==="/"?"":"/";y.path=p.record.path+(w&&E+w)}if(m=Mm(y,p,v),f?f.alias.push(m):(_=_||m,_!==m&&_.alias.push(m),g&&d.name&&!ul(m)&&o(d.name)),Eu(m)&&i(m),b.children){const x=b.children;for(let E=0;E<x.length;E++)r(x[E],m,f&&f.children[E])}f=f||m}return _?()=>{o(_)}:Sa}function o(d){if(xu(d)){const p=a.get(d);p&&(a.delete(d),s.splice(s.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=s.indexOf(d);p>-1&&(s.splice(p,1),d.record.name&&a.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function l(){return s}function i(d){const p=Im(d,s);s.splice(p,0,d),d.record.name&&!ul(d)&&a.set(d.record.name,d)}function c(d,p){let f,g={},b,v;if("name"in d&&d.name){if(f=a.get(d.name),!f)throw ta(je.MATCHER_NOT_FOUND,{location:d});v=f.record.name,g=Oe(cl(p.params,f.keys.filter(_=>!_.optional).concat(f.parent?f.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),d.params&&cl(d.params,f.keys.map(_=>_.name))),b=f.stringify(g)}else if(d.path!=null)b=d.path,f=s.find(_=>_.re.test(b)),f&&(g=f.parse(b),v=f.record.name);else{if(f=p.name?a.get(p.name):s.find(_=>_.re.test(p.path)),!f)throw ta(je.MATCHER_NOT_FOUND,{location:d,currentLocation:p});v=f.record.name,g=Oe({},p.params,d.params),b=f.stringify(g)}const h=[];let m=f;for(;m;)h.unshift(m.record),m=m.parent;return{name:v,path:b,params:g,matched:h,meta:Dm(h)}}e.forEach(d=>r(d));function u(){s.length=0,a.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:l,getRecordMatcher:n}}function cl(e,t){const s={};for(const a of t)a in e&&(s[a]=e[a]);return s}function dl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Rm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Rm(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const a in e.components)t[a]=typeof s=="object"?s[a]:s;return t}function ul(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dm(e){return e.reduce((t,s)=>Oe(t,s.meta),{})}function Im(e,t){let s=0,a=t.length;for(;s!==a;){const r=s+a>>1;ku(e,t[r])<0?a=r:s=r+1}const n=Nm(e);return n&&(a=t.lastIndexOf(n,a-1)),a}function Nm(e){let t=e;for(;t=t.parent;)if(Eu(t)&&ku(e,t)===0)return t}function Eu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function pl(e){const t=kt(Sr),s=kt(ni),a=ge(()=>{const i=ut(e.to);return t.resolve(i)}),n=ge(()=>{const{matched:i}=a.value,{length:c}=i,u=i[c-1],d=s.matched;if(!u||!d.length)return-1;const p=d.findIndex(ea.bind(null,u));if(p>-1)return p;const f=fl(i[c-2]);return c>1&&fl(u)===f&&d[d.length-1].path!==f?d.findIndex(ea.bind(null,i[c-2])):p}),r=ge(()=>n.value>-1&&jm(s.params,a.value.params)),o=ge(()=>n.value>-1&&n.value===s.matched.length-1&&wu(s.params,a.value.params));function l(i={}){if(Hm(i)){const c=t[ut(e.replace)?"replace":"push"](ut(e.to)).catch(Sa);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:a,href:ge(()=>a.value.href),isActive:r,isExactActive:o,navigate:l}}function Bm(e){return e.length===1?e[0]:e}const Fm=Ld({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:pl,setup(e,{slots:t}){const s=Nt(pl(e)),{options:a}=kt(Sr),n=ge(()=>({[hl(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[hl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&Bm(t.default(s));return e.custom?r:si("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:n.value},r)}}}),zm=Fm;function Hm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jm(e,t){for(const s in t){const a=t[s],n=e[s];if(typeof a=="string"){if(a!==n)return!1}else if(!Ot(n)||n.length!==a.length||a.some((r,o)=>r!==n[o]))return!1}return!0}function fl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const hl=(e,t,s)=>e??t??s,Um=Ld({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const a=kt($o),n=ge(()=>e.route||a.value),r=kt(rl,0),o=ge(()=>{let c=ut(r);const{matched:u}=n.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=ge(()=>n.value.matched[o.value]);Rn(rl,ge(()=>o.value+1)),Rn(bm,l),Rn($o,n);const i=Me();return Qs(()=>[i.value,l.value,e.name],([c,u,d],[p,f,g])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!ea(u,f)||!p)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=n.value,u=e.name,d=l.value,p=d&&d.components[u];if(!p)return ml(s.default,{Component:p,route:c});const f=d.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=si(p,Oe({},g,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:i}));return ml(s.default,{Component:v,route:c})||v}}});function ml(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Au=Um;function qm(e){const t=Lm(e.routes,e),s=e.parseQuery||mm,a=e.stringifyQuery||nl,n=e.history,r=ca(),o=ca(),l=ca(),i=$p(cs);let c=cs;Ys&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jr.bind(null,j=>""+j),d=jr.bind(null,Qh),p=jr.bind(null,Ra);function f(j,K){let se,Z;return xu(j)?(se=t.getRecordMatcher(j),Z=K):Z=j,t.addRoute(Z,se)}function g(j){const K=t.getRecordMatcher(j);K&&t.removeRoute(K)}function b(){return t.getRoutes().map(j=>j.record)}function v(j){return!!t.getRecordMatcher(j)}function h(j,K){if(K=Oe({},K||i.value),typeof j=="string"){const P=Ur(s,j,K.path),M=t.resolve({path:P.path},K),q=n.createHref(P.fullPath);return Oe(P,M,{params:p(M.params),hash:Ra(P.hash),redirectedFrom:void 0,href:q})}let se;if(j.path!=null)se=Oe({},j,{path:Ur(s,j.path,K.path).path});else{const P=Oe({},j.params);for(const M in P)P[M]==null&&delete P[M];se=Oe({},j,{params:d(P)}),K.params=d(K.params)}const Z=t.resolve(se,K),F=j.hash||"";Z.params=u(p(Z.params));const T=tm(a,Oe({},j,{hash:Wh(F),path:Z.path})),O=n.createHref(T);return Oe({fullPath:T,hash:F,query:a===nl?gm(j.query):j.query||{}},Z,{redirectedFrom:void 0,href:O})}function m(j){return typeof j=="string"?Ur(s,j,i.value.path):Oe({},j)}function _(j,K){if(c!==j)return ta(je.NAVIGATION_CANCELLED,{from:K,to:j})}function y(j){return E(j)}function w(j){return y(Oe(m(j),{replace:!0}))}function x(j,K){const se=j.matched[j.matched.length-1];if(se&&se.redirect){const{redirect:Z}=se;let F=typeof Z=="function"?Z(j,K):Z;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=m(F):{path:F},F.params={}),Oe({query:j.query,hash:j.hash,params:F.path!=null?{}:j.params},F)}}function E(j,K){const se=c=h(j),Z=i.value,F=j.state,T=j.force,O=j.replace===!0,P=x(se,Z);if(P)return E(Oe(m(P),{state:typeof P=="object"?Oe({},F,P.state):F,force:T,replace:O}),K||se);const M=se;M.redirectedFrom=K;let q;return!T&&sm(a,Z,se)&&(q=ta(je.NAVIGATION_DUPLICATED,{to:M,from:Z}),V(Z,Z,!0,!1)),(q?Promise.resolve(q):C(M,Z)).catch(D=>Vt(D)?Vt(D,je.NAVIGATION_GUARD_REDIRECT)?D:X(D):W(D,M,Z)).then(D=>{if(D){if(Vt(D,je.NAVIGATION_GUARD_REDIRECT))return E(Oe({replace:O},m(D.to),{state:typeof D.to=="object"?Oe({},F,D.to.state):F,force:T}),K||M)}else D=S(M,Z,!0,O,F);return k(M,Z,D),D})}function I(j,K){const se=_(j,K);return se?Promise.reject(se):Promise.resolve()}function L(j){const K=R.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(j):j()}function C(j,K){let se;const[Z,F,T]=vm(j,K);se=Vr(Z.reverse(),"beforeRouteLeave",j,K);for(const P of Z)P.leaveGuards.forEach(M=>{se.push(hs(M,j,K))});const O=I.bind(null,j,K);return se.push(O),Q(se).then(()=>{se=[];for(const P of r.list())se.push(hs(P,j,K));return se.push(O),Q(se)}).then(()=>{se=Vr(F,"beforeRouteUpdate",j,K);for(const P of F)P.updateGuards.forEach(M=>{se.push(hs(M,j,K))});return se.push(O),Q(se)}).then(()=>{se=[];for(const P of T)if(P.beforeEnter)if(Ot(P.beforeEnter))for(const M of P.beforeEnter)se.push(hs(M,j,K));else se.push(hs(P.beforeEnter,j,K));return se.push(O),Q(se)}).then(()=>(j.matched.forEach(P=>P.enterCallbacks={}),se=Vr(T,"beforeRouteEnter",j,K,L),se.push(O),Q(se))).then(()=>{se=[];for(const P of o.list())se.push(hs(P,j,K));return se.push(O),Q(se)}).catch(P=>Vt(P,je.NAVIGATION_CANCELLED)?P:Promise.reject(P))}function k(j,K,se){l.list().forEach(Z=>L(()=>Z(j,K,se)))}function S(j,K,se,Z,F){const T=_(j,K);if(T)return T;const O=K===cs,P=Ys?history.state:{};se&&(Z||O?n.replace(j.fullPath,Oe({scroll:O&&P&&P.scroll},F)):n.push(j.fullPath,F)),i.value=j,V(j,K,se,O),X()}let $;function z(){$||($=n.listen((j,K,se)=>{if(!N.listening)return;const Z=h(j),F=x(Z,N.currentRoute.value);if(F){E(Oe(F,{replace:!0,force:!0}),Z).catch(Sa);return}c=Z;const T=i.value;Ys&&dm(al(T.fullPath,se.delta),Tr()),C(Z,T).catch(O=>Vt(O,je.NAVIGATION_ABORTED|je.NAVIGATION_CANCELLED)?O:Vt(O,je.NAVIGATION_GUARD_REDIRECT)?(E(Oe(m(O.to),{force:!0}),Z).then(P=>{Vt(P,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&!se.delta&&se.type===Po.pop&&n.go(-1,!1)}).catch(Sa),Promise.reject()):(se.delta&&n.go(-se.delta,!1),W(O,Z,T))).then(O=>{O=O||S(Z,T,!1),O&&(se.delta&&!Vt(O,je.NAVIGATION_CANCELLED)?n.go(-se.delta,!1):se.type===Po.pop&&Vt(O,je.NAVIGATION_ABORTED|je.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),k(Z,T,O)}).catch(Sa)}))}let H=ca(),Y=ca(),J;function W(j,K,se){X(j);const Z=Y.list();return Z.length?Z.forEach(F=>F(j,K,se)):console.error(j),Promise.reject(j)}function ie(){return J&&i.value!==cs?Promise.resolve():new Promise((j,K)=>{H.add([j,K])})}function X(j){return J||(J=!j,z(),H.list().forEach(([K,se])=>j?se(j):K()),H.reset()),j}function V(j,K,se,Z){const{scrollBehavior:F}=e;if(!Ys||!F)return Promise.resolve();const T=!se&&um(al(j.fullPath,0))||(Z||!se)&&history.state&&history.state.scroll||null;return Jo().then(()=>F(j,K,T)).then(O=>O&&cm(O)).catch(O=>W(O,j,K))}const ee=j=>n.go(j);let G;const R=new Set,N={currentRoute:i,listening:!0,addRoute:f,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:v,getRoutes:b,resolve:h,options:e,push:y,replace:w,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:Y.add,isReady:ie,install(j){j.component("RouterLink",zm),j.component("RouterView",Au),j.config.globalProperties.$router=N,Object.defineProperty(j.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(i)}),Ys&&!G&&i.value===cs&&(G=!0,y(n.location).catch(Z=>{}));const K={};for(const Z in cs)Object.defineProperty(K,Z,{get:()=>i.value[Z],enumerable:!0});j.provide(Sr,N),j.provide(ni,_d(K)),j.provide($o,i);const se=j.unmount;R.add(j),j.unmount=function(){R.delete(j),R.size<1&&(c=cs,$&&$(),$=null,i.value=cs,G=!1,J=!1),se()}}};function Q(j){return j.reduce((K,se)=>K.then(()=>L(se)),Promise.resolve())}return N}function ct(){return kt(Sr)}function Ba(e){return kt(ni)}var Vm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ma={exports:{}},Gm=ma.exports,gl;function Km(){return gl||(gl=1,(function(e,t){(function(s,a){var n={};s.PubSub?(n=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=n,a(n)),e!==void 0&&e.exports&&(t=e.exports=n),t.PubSub=n,e.exports=t=n})(typeof window=="object"&&window||Gm||Vm,function(s){var a={},n=-1,r="*";function o(b){var v;for(v in b)if(Object.prototype.hasOwnProperty.call(b,v))return!0;return!1}function l(b){return function(){throw b}}function i(b,v,h){try{b(v,h)}catch(m){setTimeout(l(m),0)}}function c(b,v,h){b(v,h)}function u(b,v,h,m){var _=a[v],y=m?c:i,w;if(Object.prototype.hasOwnProperty.call(a,v))for(w in _)Object.prototype.hasOwnProperty.call(_,w)&&y(_[w],b,h)}function d(b,v,h){return function(){var _=String(b),y=_.lastIndexOf(".");for(u(b,b,v,h);y!==-1;)_=_.substr(0,y),y=_.lastIndexOf("."),u(b,_,v,h);u(b,r,v,h)}}function p(b){var v=String(b),h=!!(Object.prototype.hasOwnProperty.call(a,v)&&o(a[v]));return h}function f(b){for(var v=String(b),h=p(v)||p(r),m=v.lastIndexOf(".");!h&&m!==-1;)v=v.substr(0,m),m=v.lastIndexOf("."),h=p(v);return h}function g(b,v,h,m){b=typeof b=="symbol"?b.toString():b;var _=d(b,v,m),y=f(b);return y?(h===!0?_():setTimeout(_,0),!0):!1}s.publish=function(b,v){return g(b,v,!1,s.immediateExceptions)},s.publishSync=function(b,v){return g(b,v,!0,s.immediateExceptions)},s.subscribe=function(b,v){if(typeof v!="function")return!1;b=typeof b=="symbol"?b.toString():b,Object.prototype.hasOwnProperty.call(a,b)||(a[b]={});var h="uid_"+String(++n);return a[b][h]=v,h},s.subscribeAll=function(b){return s.subscribe(r,b)},s.subscribeOnce=function(b,v){var h=s.subscribe(b,function(){s.unsubscribe(h),v.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){a={}},s.clearSubscriptions=function(v){var h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&h.indexOf(v)===0&&delete a[h]},s.countSubscriptions=function(v){var h,m,_=0;for(h in a)if(Object.prototype.hasOwnProperty.call(a,h)&&h.indexOf(v)===0){for(m in a[h])_++;break}return _},s.getSubscriptions=function(v){var h,m=[];for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&h.indexOf(v)===0&&m.push(h);return m},s.unsubscribe=function(b){var v=function(I){var L;for(L in a)if(Object.prototype.hasOwnProperty.call(a,L)&&L.indexOf(I)===0)return!0;return!1},h=typeof b=="string"&&(Object.prototype.hasOwnProperty.call(a,b)||v(b)),m=!h&&typeof b=="string",_=typeof b=="function",y=!1,w,x,E;if(h){s.clearSubscriptions(b);return}for(w in a)if(Object.prototype.hasOwnProperty.call(a,w)){if(x=a[w],m&&x[b]){delete x[b],y=b;break}if(_)for(E in x)Object.prototype.hasOwnProperty.call(x,E)&&x[E]===b&&(delete x[E],y=!0)}return y}})})(ma,ma.exports)),ma.exports}var Ym=Km();const ce=Cu(Ym);let Ye=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Wm={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function ws(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function Jm(e,t){let s;const a=()=>{if(s)return s;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),s=ws(n),s.then(r=>{r.onclose=()=>s=void 0},()=>{}),s};return(n,r)=>a().then(o=>r(o.transaction(t,n).objectStore(t)))}let Gr;function Fa(){return Gr||(Gr=Jm("keyval-store","keyval")),Gr}function Xm(e,t=Fa()){return t("readonly",s=>ws(s.get(e)))}function bl(e,t,s=Fa()){return s("readwrite",a=>(a.put(t,e),ws(a.transaction)))}function Kr(e,t=Fa()){return t("readwrite",s=>(s.delete(e),ws(s.transaction)))}function Pu(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},ws(e.transaction)}function Us(e=Fa()){return e("readonly",t=>{if(t.getAllKeys)return ws(t.getAllKeys());const s=[];return Pu(t,a=>s.push(a.key)).then(()=>s)})}function Qm(e=Fa()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([ws(t.getAllKeys()),ws(t.getAll())]).then(([a,n])=>a.map((r,o)=>[r,n[o]]));const s=[];return e("readonly",a=>Pu(a,n=>s.push([n.key,n.value])).then(()=>s))})}const sa=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Zn=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!Zn(e[s],t[s]))return!1;return!0}if(sa(e)&&sa(t)){const s=Object.entries(e),a=new Set(Object.keys(t));if(s.length!==a.size)return!1;for(const[n,r]of s){if(!Zn(r,t[n]))return!1;a.delete(n)}return a.size===0}return!1},Va=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(sa(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Zm=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",vl=e=>e>="0"&&e<="9"||e==="-",eg=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var re;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(re||(re={}));const _l={"(":re.TOK_LPAREN,")":re.TOK_RPAREN,"*":re.TOK_STAR,",":re.TOK_COMMA,".":re.TOK_DOT,":":re.TOK_COLON,"@":re.TOK_CURRENT,$:re.TOK_ROOT,"]":re.TOK_RBRACKET,"{":re.TOK_LBRACE,"}":re.TOK_RBRACE},tg={"!":!0,"<":!0,"=":!0,">":!0},sg={"	":!0,"\n":!0,"\r":!0," ":!0};class ag{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let a,n,r;for(;this._current<t.length;)if(Zm(t[this._current]))a=this._current,n=this.consumeUnquotedIdentifier(t),s.push({start:a,type:re.TOK_UNQUOTEDIDENTIFIER,value:n});else if(_l[t[this._current]]!==void 0)s.push({start:this._current,type:_l[t[this._current]],value:t[this._current]}),this._current+=1;else if(vl(t[this._current]))r=this.consumeNumber(t),s.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),s.push(r);else if(t[this._current]==='"')a=this._current,n=this.consumeQuotedIdentifier(t),s.push({start:a,type:re.TOK_QUOTEDIDENTIFIER,value:n});else if(t[this._current]==="'")a=this._current,n=this.consumeRawStringLiteral(t),s.push({start:a,type:re.TOK_LITERAL,value:n});else if(t[this._current]==="`"){a=this._current;const o=this.consumeLiteral(t);s.push({start:a,type:re.TOK_LITERAL,value:o})}else if(tg[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&s.push(r);else if(sg[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:a,type:re.TOK_AND,value:"&&"})):s.push({start:a,type:re.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:a,type:re.TOK_OR,value:"||"})):s.push({start:a,type:re.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&eg(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==='"')?n+=2:n+=1,this._current=n}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const a=t.length;for(;vl(t[this._current])&&this._current<a;)this._current+=1;const n=parseInt(t.slice(s,this._current),10);return{start:s,value:n,type:re.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:re.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:re.TOK_FLATTEN,value:"[]"}):{start:s,type:re.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,a=t[s];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:re.TOK_NE,value:"!="}):{start:s,type:re.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:re.TOK_LTE,value:"<="}):{start:s,type:re.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:s,type:re.TOK_GTE,value:">="}):{start:s,type:re.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:re.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let n=t.slice(s,this._current).trimLeft();n=n.replace("\\`","`");const r=this.looksLikeJSON(n)?JSON.parse(n):JSON.parse(`"${n}"`);return this._current+=1,r}looksLikeJSON(t){const a=["true","false","null"],n="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(n.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Ou=new ag,Qe={[re.TOK_EOF]:0,[re.TOK_UNQUOTEDIDENTIFIER]:0,[re.TOK_QUOTEDIDENTIFIER]:0,[re.TOK_RBRACKET]:0,[re.TOK_RPAREN]:0,[re.TOK_COMMA]:0,[re.TOK_RBRACE]:0,[re.TOK_NUMBER]:0,[re.TOK_CURRENT]:0,[re.TOK_EXPREF]:0,[re.TOK_ROOT]:0,[re.TOK_PIPE]:1,[re.TOK_OR]:2,[re.TOK_AND]:3,[re.TOK_EQ]:5,[re.TOK_GT]:5,[re.TOK_LT]:5,[re.TOK_GTE]:5,[re.TOK_LTE]:5,[re.TOK_NE]:5,[re.TOK_FLATTEN]:9,[re.TOK_STAR]:20,[re.TOK_FILTER]:21,[re.TOK_DOT]:40,[re.TOK_NOT]:45,[re.TOK_LBRACE]:50,[re.TOK_LBRACKET]:55,[re.TOK_LPAREN]:60};class ng{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==re.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return s}loadTokens(t){this.tokens=[...Ou.tokenize(t),{type:re.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let a=this.nud(s),n=this.lookahead(0);for(;t<Qe[n];)this.advance(),a=this.led(n,a),n=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,a,n;switch(t.type){case re.TOK_LITERAL:return{type:"Literal",value:t.value};case re.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case re.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===re.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case re.TOK_NOT:return a=this.expression(Qe.Not),{type:"NotExpression",children:[a]};case re.TOK_STAR:return s={type:"Identity"},a=this.lookahead(0)===re.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Qe.Star),{type:"ValueProjection",children:[s,a]};case re.TOK_FILTER:return this.led(t.type,{type:"Identity"});case re.TOK_LBRACE:return this.parseMultiselectHash();case re.TOK_FLATTEN:return s={type:re.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(Qe.Flatten),{type:"Projection",children:[s,a]};case re.TOK_LBRACKET:return this.lookahead(0)===re.TOK_NUMBER||this.lookahead(0)===re.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===re.TOK_STAR&&this.lookahead(1)===re.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(Qe.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case re.TOK_CURRENT:return{type:re.TOK_CURRENT};case re.TOK_ROOT:return{type:re.TOK_ROOT};case re.TOK_EXPREF:return n=this.expression(Qe.Expref),{type:"ExpressionReference",children:[n]};case re.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==re.TOK_RPAREN;)this.lookahead(0)===re.TOK_CURRENT?(n={type:re.TOK_CURRENT},this.advance()):n=this.expression(0),o.push(n);return this.match(re.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,s){let a;switch(t){case re.TOK_DOT:const n=Qe.Dot;return this.lookahead(0)!==re.TOK_STAR?(a=this.parseDotRHS(n),{type:"Subexpression",children:[s,a]}):(this.advance(),a=this.parseProjectionRHS(n),{type:"ValueProjection",children:[s,a]});case re.TOK_PIPE:return a=this.expression(Qe.Pipe),{type:re.TOK_PIPE,children:[s,a]};case re.TOK_OR:return a=this.expression(Qe.Or),{type:"OrExpression",children:[s,a]};case re.TOK_AND:return a=this.expression(Qe.And),{type:"AndExpression",children:[s,a]};case re.TOK_LPAREN:const r=s.name,o=[];let l;for(;this.lookahead(0)!==re.TOK_RPAREN;)this.lookahead(0)===re.TOK_CURRENT?(l={type:re.TOK_CURRENT},this.advance()):l=this.expression(0),this.lookahead(0)===re.TOK_COMMA&&this.match(re.TOK_COMMA),o.push(l);return this.match(re.TOK_RPAREN),{name:r,type:"Function",children:o};case re.TOK_FILTER:const c=this.expression(0);return this.match(re.TOK_RBRACKET),a=this.lookahead(0)===re.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Qe.Filter),{type:"FilterProjection",children:[s,a,c]};case re.TOK_FLATTEN:const u={type:re.TOK_FLATTEN,children:[s]},d=this.parseProjectionRHS(Qe.Flatten);return{type:"Projection",children:[u,d]};case re.TOK_EQ:case re.TOK_NE:case re.TOK_GT:case re.TOK_GTE:case re.TOK_LT:case re.TOK_LTE:return this.parseComparator(s,t);case re.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===re.TOK_NUMBER||p.type===re.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(s,a)):(this.match(re.TOK_STAR),this.match(re.TOK_RBRACKET),a=this.parseProjectionRHS(Qe.Star),{type:"Projection",children:[s,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const a=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===re.TOK_COLON||this.lookahead(1)===re.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(re.TOK_RBRACKET),t}projectIfSlice(t,s){const a={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[a,this.parseProjectionRHS(Qe.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let s=0,a=this.lookahead(0);for(;a!==re.TOK_RBRACKET&&s<3;){if(a===re.TOK_COLON)s+=1,this.advance();else if(a===re.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}a=this.lookahead(0)}return this.match(re.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const a=this.expression(Qe[s]);return{type:"Comparator",name:s,children:[t,a]}}parseDotRHS(t){const s=this.lookahead(0);if([re.TOK_UNQUOTEDIDENTIFIER,re.TOK_QUOTEDIDENTIFIER,re.TOK_STAR].includes(s))return this.expression(t);if(s===re.TOK_LBRACKET)return this.match(re.TOK_LBRACKET),this.parseMultiselectList();if(s===re.TOK_LBRACE)return this.match(re.TOK_LBRACE),this.parseMultiselectHash();const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseProjectionRHS(t){if(Qe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===re.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===re.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===re.TOK_DOT)return this.match(re.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==re.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===re.TOK_COMMA&&(this.match(re.TOK_COMMA),this.lookahead(0)===re.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(re.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[re.TOK_UNQUOTEDIDENTIFIER,re.TOK_QUOTEDIDENTIFIER];let a,n,r;for(;;){if(a=this.lookaheadToken(0),!s.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(n=a.value,this.advance(),this.match(re.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:n}),this.lookahead(0)===re.TOK_COMMA)this.match(re.TOK_COMMA);else if(this.lookahead(0)===re.TOK_RBRACE){this.match(re.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const $u=new ng;var le;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(le||(le={}));class rg{constructor(t){this.TYPE_NAME_TABLE={[le.TYPE_NUMBER]:"number",[le.TYPE_ANY]:"any",[le.TYPE_STRING]:"string",[le.TYPE_ARRAY]:"array",[le.TYPE_OBJECT]:"object",[le.TYPE_BOOLEAN]:"boolean",[le.TYPE_EXPREF]:"expression",[le.TYPE_NULL]:"null",[le.TYPE_ARRAY_NUMBER]:"Array<number>",[le.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let a=0;for(let n=0;n<s.length;n+=1)a+=s[n];return a/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[a,n]=s;return a.includes(n)},this.functionEndsWith=s=>{const[a,n]=s;return a.includes(n,a.length-n.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[a,n]=s;return n.join(a)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>sa(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const a=[],n=this._interpreter,r=s[0],o=s[1];for(let l=0;l<o.length;l+=1)a.push(n.visit(r,o[l]));return a},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===le.TYPE_NUMBER)return Math.max(...s);const n=s;let r=n[0];for(let o=1;o<n.length;o+=1)r.localeCompare(n[o])<0&&(r=n[o]);return r},this.functionMaxBy=s=>{const a=s[1],n=s[0],r=this.createKeyFunction(a,[le.TYPE_NUMBER,le.TYPE_STRING]);let o=-1/0,l,i;for(let c=0;c<n.length;c+=1)i=r&&r(n[c]),i!==void 0&&i>o&&(o=i,l=n[c]);return l},this.functionMerge=s=>{let a={};for(let n=0;n<s.length;n+=1){const r=s[n];a=Object.assign(a,r)}return a},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===le.TYPE_NUMBER)return Math.min(...s);const n=s;let r=n[0];for(let o=1;o<n.length;o+=1)n[o].localeCompare(r)<0&&(r=n[o]);return r},this.functionMinBy=s=>{const a=s[1],n=s[0],r=this.createKeyFunction(a,[le.TYPE_NUMBER,le.TYPE_STRING]);let o=1/0,l,i;for(let c=0;c<n.length;c+=1)i=r&&r(n[c]),i!==void 0&&i<o&&(o=i,l=n[c]);return l},this.functionNotNull=s=>{for(let a=0;a<s.length;a+=1)if(this.getTypeName(s[a])!==le.TYPE_NULL)return s[a];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===le.TYPE_STRING){const r=s;let o="";for(let l=r.length-1;l>=0;l-=1)o+=r[l];return o}const n=s.slice(0);return n.reverse(),n},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const a=s[0].slice(0);if(a.length===0)return a;const n=this._interpreter,r=s[1],o=this.getTypeName(n.visit(r,a[0]));if(o!==void 0&&![le.TYPE_NUMBER,le.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const l=[];for(let i=0;i<a.length;i+=1)l.push([i,a[i]]);l.sort((i,c)=>{const u=n.visit(r,i[1]),d=n.visit(r,c[1]);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);return u>d?1:u<d?-1:i[0]-c[0]});for(let i=0;i<l.length;i+=1)a[i]=l[i][1];return a},this.functionStartsWith=([s,a])=>s.startsWith(a),this.functionSum=([s])=>s.reduce((a,n)=>a+n,0),this.functionToArray=([s])=>this.getTypeName(s)===le.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const a=this.getTypeName(s);let n;return a===le.TYPE_NUMBER?s:a===le.TYPE_STRING&&(n=+s,!isNaN(n))?n:null},this.functionToString=([s])=>this.getTypeName(s)===le.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case le.TYPE_NUMBER:return"number";case le.TYPE_STRING:return"string";case le.TYPE_ARRAY:return"array";case le.TYPE_OBJECT:return"object";case le.TYPE_BOOLEAN:return"boolean";case le.TYPE_EXPREF:return"expref";case le.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[le.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[le.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[le.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[le.TYPE_STRING,le.TYPE_ARRAY]},{types:[le.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[le.TYPE_STRING]},{types:[le.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[le.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[le.TYPE_STRING]},{types:[le.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[le.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[le.TYPE_STRING,le.TYPE_ARRAY,le.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[le.TYPE_EXPREF]},{types:[le.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[le.TYPE_ARRAY_NUMBER,le.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[le.TYPE_ARRAY]},{types:[le.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[le.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[le.TYPE_ARRAY_NUMBER,le.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[le.TYPE_ARRAY]},{types:[le.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[le.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[le.TYPE_STRING,le.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[le.TYPE_ARRAY_STRING,le.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[le.TYPE_ARRAY]},{types:[le.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[le.TYPE_STRING]},{types:[le.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[le.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[le.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[le.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[le.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[le.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[le.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:a}}callFunction(t,s){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,a._signature),a._func.call(this,s)}validateInputSignatures(t,s){for(let a=0;a<s.length;a+=1)if("variadic"in s[a]&&a!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,s,a){var n,r;let o;this.validateInputSignatures(t,a);const l=a.filter(b=>{var v;return(v=!b.optional)!==null&&v!==void 0?v:!1}).length,i=(r=(n=a[a.length-1])===null||n===void 0?void 0:n.variadic)!==null&&r!==void 0?r:!1,c=s.length<l,u=s.length>a.length,d=c&&(!i&&l>1||i)?"at least ":"";if(i&&c||!i&&(c||u))throw o=a.length>1,new Error(`ArgumentError: ${t}() takes ${d}${l} argument${o&&"s"||""} but received ${s.length}`);let p,f,g;for(let b=0;b<a.length;b+=1){g=!1,p=a[b].types,f=this.getTypeName(s[b]);let v;for(v=0;v<p.length;v+=1)if(f!==void 0&&this.typeMatches(f,p[v],s[b])){g=!0;break}if(!g&&f!==void 0){const h=p.map(m=>this.TYPE_NAME_TABLE[m]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${b+1} to be type (${h}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,s,a){if(s===le.TYPE_ANY)return!0;if(s===le.TYPE_ARRAY_STRING||s===le.TYPE_ARRAY_NUMBER||s===le.TYPE_ARRAY){if(s===le.TYPE_ARRAY)return t===le.TYPE_ARRAY;if(t===le.TYPE_ARRAY){let n;s===le.TYPE_ARRAY_NUMBER?n=le.TYPE_NUMBER:s===le.TYPE_ARRAY_STRING&&(n=le.TYPE_STRING);for(let r=0;r<a.length;r+=1){const o=this.getTypeName(a[r]);if(o!==void 0&&n!==void 0&&!this.typeMatches(o,n,a[r]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return le.TYPE_STRING;case"[object Number]":return le.TYPE_NUMBER;case"[object Array]":return le.TYPE_ARRAY;case"[object Boolean]":return le.TYPE_BOOLEAN;case"[object Null]":return le.TYPE_NULL;case"[object Object]":return t.jmespathType===re.TOK_EXPREF?le.TYPE_EXPREF:le.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const a=this._interpreter;return r=>{const o=a.visit(t,r);if(!s.includes(this.getTypeName(o))){const l=`TypeError: expected one of (${s.map(i=>this.TYPE_NAME_TABLE[i]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(l)}return o}}}class og{constructor(){this._rootValue=null,this.runtime=new rg(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let a,n,r,o,l,i,c,u,d,p,f;switch(t.type){case"Field":return s===null?null:sa(s)?(i=s[t.name],i===void 0?null:i):null;case"Subexpression":for(r=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(t.children[0],s),u=this.visit(t.children[1],c),u;case"Index":if(!Array.isArray(s))return null;let g=t.value;return g<0&&(g=s.length+g),r=s[g],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(s))return null;const b=[...t.children],v=this.computeSliceParams(s.length,b),[h,m,_]=v;if(r=[],_>0)for(p=h;p<m;p+=_)r.push(s[p]);else for(p=h;p>m;p+=_)r.push(s[p]);return r;case"Projection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;for(d=[],p=0;p<f.length;p+=1)n=this.visit(t.children[1],f[p]),n!==null&&d.push(n);return d;case"ValueProjection":if(f=this.visit(t.children[0],s),!sa(f))return null;d=[];const y=Object.values(f);for(p=0;p<y.length;p+=1)n=this.visit(t.children[1],y[p]),n!==null&&d.push(n);return d;case"FilterProjection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;const w=[],x=[];for(p=0;p<f.length;p+=1)a=this.visit(t.children[2],f[p]),Va(a)||w.push(f[p]);for(let S=0;S<w.length;S+=1)n=this.visit(t.children[1],w[S]),n!==null&&x.push(n);return x;case"Comparator":switch(o=this.visit(t.children[0],s),l=this.visit(t.children[1],s),t.name){case re.TOK_EQ:r=Zn(o,l);break;case re.TOK_NE:r=!Zn(o,l);break;case re.TOK_GT:r=o>l;break;case re.TOK_GTE:r=o>=l;break;case re.TOK_LT:r=o<l;break;case re.TOK_LTE:r=o<=l;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case re.TOK_FLATTEN:const E=this.visit(t.children[0],s);if(!Array.isArray(E))return null;let I=[];for(p=0;p<E.length;p+=1)n=E[p],Array.isArray(n)?I=[...I,...n]:I.push(n);return I;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(d=[],p=0;p<t.children.length;p+=1)d.push(this.visit(t.children[p],s));return d;case"MultiSelectHash":if(s===null)return null;d={};let L;for(p=0;p<t.children.length;p+=1)L=t.children[p],d[L.name]=this.visit(L.value,s);return d;case"OrExpression":return a=this.visit(t.children[0],s),Va(a)&&(a=this.visit(t.children[1],s)),a;case"AndExpression":return o=this.visit(t.children[0],s),Va(o)?o:this.visit(t.children[1],s);case"NotExpression":return o=this.visit(t.children[0],s),Va(o);case"Literal":return t.value;case re.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case re.TOK_CURRENT:return s;case re.TOK_ROOT:return this._rootValue;case"Function":const C=[];for(let S=0;S<t.children.length;S+=1)C.push(this.visit(t.children[S],s));return this.runtime.callFunction(t.name,C);case"ExpressionReference":const k=t.children[0];return k.jmespathType=re.TOK_EXPREF,k;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[a,n,r]=s;if(r===null)r=1;else if(r===0){const l=new Error("Invalid slice, step cannot be 0");throw l.name="RuntimeError",l}const o=r<0;return a=a===null?o?t-1:0:this.capSliceRange(t,a,r),n=n===null?o?-1:t:this.capSliceRange(t,n,r),[a,n,r]}capSliceRange(t,s,a){let n=s;return n<0?(n+=t,n<0&&(n=a<0?-1:0)):n>=t&&(n=a<0?t-1:t),n}}const ri=new og,ig=le.TYPE_ANY,lg=le.TYPE_ARRAY,cg=le.TYPE_ARRAY_NUMBER,dg=le.TYPE_ARRAY_STRING,ug=le.TYPE_BOOLEAN,pg=le.TYPE_EXPREF,fg=le.TYPE_NULL,hg=le.TYPE_NUMBER,mg=le.TYPE_OBJECT,gg=le.TYPE_STRING;function bg(e){return $u.parse(e)}function vg(e){return Ou.tokenize(e)}const _g=(e,t,s)=>{ri.runtime.registerFunction(e,t,s)};function yg(e,t){const s=$u.parse(t);return ri.search(s,e)}const wg=ri,xt={compile:bg,registerFunction:_g,search:yg,tokenize:vg,TreeInterpreter:wg,TYPE_ANY:ig,TYPE_ARRAY_NUMBER:cg,TYPE_ARRAY_STRING:dg,TYPE_ARRAY:lg,TYPE_BOOLEAN:ug,TYPE_EXPREF:pg,TYPE_NULL:fg,TYPE_NUMBER:hg,TYPE_OBJECT:mg,TYPE_STRING:gg},Dt=class Dt{static async appendPrompt(t,s){bl(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{Us().then(a=>{a=a.filter(n=>n.indexOf(this.DELIM_PROMPTS)!=-1),a.length>Dt.MAX_PROMPTS_VALS&&Kr(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(s=>{let a=JSON.stringify({ts:Date.now(),name:s[1]});bl(s[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(n=>console.error("~IDB Failed | ",n))})}static async keys(t,s){Us().then(a=>{a=a.filter(n=>n.indexOf(t)!=-1),s&&s(a)})}static async get(t,s){Xm(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{s&&s(a)}})}static async entries(t,s){Qm().then(a=>{a=a.filter(n=>n[0].indexOf(t)!=-1),a=a.map(n=>{try{n[1]=JSON.parse(LZString.decompressFromUTF16(n[1]))}catch{}finally{}return n}),s&&s(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,a){let n="";switch(t){case"PROMPTS_COUNT":Us().then(o=>{o=o.filter(l=>l.indexOf(this.DELIM_PROMPTS)!=-1),n=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,n&&a&&a(n)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":Us().then(o=>{o.forEach(l=>{l.indexOf(this.DELIM_PROMPTS)!=-1&&l.split(Dt.DELIM_PROMPTS)[0]==s&&Kr(l)})}),n="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",n);break;case"VIR_COUNT":Us().then(o=>{o=o.filter(l=>l.indexOf(this.DELIM_VIR)!=-1),n=`There are ${o.length} VNR names in local IDB storage.`,n&&a&&a(n)});break;case"VIR_CLEAR":let r=0;await Us().then(o=>{o.forEach(l=>{l.indexOf(this.DELIM_VIR)!=-1&&l.split(Dt.DELIM_VIR)[0]==s&&(r++,Kr(l))})}),n=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),n="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",n),n&&a&&a(n)}};Dt.MAX_TYPEAHEAD_ROWS=14,Dt.MAX_PROMPTS_VALS=50,Dt.DELIM_PROMPTS="_",Dt.DELIM_VIR="-",Dt.DELIM_SNDX="|";let Is=Dt;const Te=Bh("AppState",()=>{const e=ct(),t="DEV",s="BMA Tourney v0.0.5 ",a="#app",n=Nt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_TOURNEYS:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS",WC__APP__HEAD_MID__HEAD_MID_PRIVATE:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__LOBBY:"WC.APP.FOOT.LOBBY",WC__APP__FOOT__TOURNEYS:"WC.APP.FOOT.TOURNEYS",WC__APP__FOOT__PRIVATE:"WC.APP.FOOT.PRIVATE",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",ROUTE__INVITES_HYDRATE:"ROUTE.INVITES_HYDRATE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",SSE__CORE__INVITE_SYNC:"SSE.CORE.INVITE_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let r=Nt([]),o=Nt([]),l=Nt([]);const i=$=>{r.push($),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},c=$=>{if(!$?.guid)return;const z=l.findIndex(H=>H.guid===$.guid);z>=0?l.splice(z,1,$):l.push($)},u=$=>{const z=l.findIndex(H=>H.guid===$);z>=0&&l.splice(z,1)},d=$=>{l.splice(0,l.length,...Array.isArray($)?$:[])},p=$=>{o.push($),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},f=()=>{const $=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",$),$)try{const z=JSON.parse($);return console.log("[appState] Parsed session_user:",z),z}catch(z){console.error("Failed to parse session_user from localStorage:",z)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},g=Me({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:f()}),b=Me({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),v=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",Is.compr(JSON.stringify(b.value.features)));else{let $=Is.decompr(localStorage.getItem("feature_flags"));$=Object.assign(b.value.features,JSON.parse($));for(let z in $)typeof b.value?.env_override[t][z]<"u"&&($[z]=b.value.env_override[t][z]);localStorage.setItem("feature_flags",Is.compr(JSON.stringify(b.value.features=$)))}},h=()=>{const $=document.querySelector(a);if($){const z=$.dataset;for(let H in z){const Y=H.replace(/^sync/,""),J=Object.keys(b.value.features).find(W=>W.toLowerCase()===Y.toLowerCase());if(J){const W=b.value.features[J]?.state;W&&(z[H]=W)}}}},m=($="Theme",z={state:"dark"})=>{const H=document.querySelector(a);H&&(H.dataset["sync"+$]=z.state)},_=($="Theme",z={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&z){let Y=JSON.parse(Is.decompr(localStorage.getItem("feature_flags")));Y[$]={state:z.state},localStorage.setItem("feature_flags",Is.compr(JSON.stringify(b.value.features=Y))),m($,z),ce.publish("APP.ROUTE_SYNC",`{ "${$}": ${JSON.stringify(z)}}`)}},y=$=>{const z=b.value?.features?.Lang?.state;let H=E.value.microcopy.language.filter(Y=>Y.code==z)[0]?.copy;if(H=H.filter(Y=>Y[0]==$)[0],H)return H[1]},w=($=":version")=>{let[z,H,Y]=$.split(" ");switch(z=z.toLocaleLowerCase(),Y=="true"&&(Y=!0),Y=="false"&&(Y=!1),z){case":version":neodigmToast.q(`Version Q ${g.value.session_app.version}`,"brand");break;case":feature":_(H,{state:Y});break;case":route":neodigmToast.q(`route ${H}`,"brand"),e.push({name:H});break}};v(),h();const x=Nt({designer:"guided_tour",notifications:{unread:0}}),E=Me({sports:Ye,microcopy:Wm.getMeta()}),I=ge(()=>g.value.session_user.fname+" "+g.value.session_user.lname),L=()=>{console.log("[appState] Saving session_user to localStorage:",g.value.session_user),localStorage.setItem("session_user",JSON.stringify(g.value.session_user))},C=()=>{localStorage.removeItem("session_user")};function k($){return g.value.session_user.authenticated=!0,g.value.session_user.token=$,L(),g.value.session_app.route="chat"}function S(){return g.value.session_user.authenticated=!1,g.value.session_user.token="",g.value.session_user.guid="",C(),API_ORCH.setTJO(null),g.value.session_app.route="auth"}return{appCLIFeatures:b,appDesigner:x,appMeta:E,appSession:g,clearSessionUser:C,concatFirstLast:I,coreBetSlip:o,coreInvites:l,coreTourn:r,doCLI:w,doLogin:k,doLogout:S,hierTopics:n,i18n:y,pushCoreTourn:i,pushcoreBetSlip:p,removeInvite:u,saveSessionUser:L,setCoreInvites:d,setFeaturePersistPub:_,upsertInvite:c}}),Yr="mvvBrand",xg=400,aa={scanIntervalId:null,processedElements:new WeakSet,init(){const t=new URLSearchParams(window.location.search).get("brand");t!==null&&(t==="null"||t===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(t)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(e){if(e)try{localStorage.setItem(Yr,e),console.log("[BrandManager] Brand token set:",e)}catch(t){console.error("[BrandManager] Failed to set brand:",t)}},getBrand(){try{return localStorage.getItem(Yr)}catch(e){return console.error("[BrandManager] Failed to get brand:",e),null}},clearBrand(){localStorage.removeItem(Yr),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const e=this.getBrand();return e?{"x-m5t-brand":e}:{}},hydrateBrandElements(){const e=this.getBrand();if(!e)return;const t=document.querySelectorAll("[data-mvv-brand]");t.forEach(s=>{s.getAttribute("data-mvv-brand")==="token"&&(s.textContent=e)}),t.length>0&&console.log(`[BrandManager] Hydrated ${t.length} brand elements with token:`,e)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},xg),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const e=this.getBrand();if(!e)return;const t=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{t.push(s)}),document.querySelectorAll("*").forEach(s=>{s.shadowRoot&&s.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(a=>{t.push(a)})}),t.forEach(s=>{if(this.processedElements.has(s))return;const a=s.getAttribute("src");if(a&&!a.includes("&brand=")){const n=`${a}&brand=${e}`;s.setAttribute("src",n),this.processedElements.add(s),console.log("[BrandManager] Updated src for element:",s)}})}},Mo="bma_anon_session",oi="bma_pending_join_intent",Tg=1440*60*1e3,ka=Object.freeze({AUTHED:"authed",PREVIEW:"preview",DENIED:"denied"});function Sg(e,t={}){return(typeof mvvLegit<"u"&&mvvLegit&&typeof mvvLegit.isRouteAllowed=="function"?mvvLegit.isRouteAllowed(e):!1)?ka.AUTHED:t?.previewAllowed?ka.PREVIEW:ka.DENIED}function yl(e){const t=typeof neodigmOpt<"u"&&neodigmOpt?.ROOT||null;t&&(t.dataset.authTier=e)}function Mu(){let e=sessionStorage.getItem(Mo);return e||(e=`anon_${typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}`,sessionStorage.setItem(Mo,e)),e}function kg(){sessionStorage.removeItem(Mo)}function Eg(e,t=null){const s={tournamentGuid:e,joinSlug:t||null,sessionId:Mu(),capturedAt:Date.now()};return sessionStorage.setItem(oi,JSON.stringify(s)),s}function Ag(){const e=sessionStorage.getItem(oi);if(!e)return null;try{const t=JSON.parse(e);return!t?.capturedAt||Date.now()-t.capturedAt>Tg?(Lo(),null):t}catch{return Lo(),null}}function Lo(){sessionStorage.removeItem(oi)}function Cg(){const e=Ag();return kg(),Lo(),e}const He=class He{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),He.setTJO(null),location.reload()}static async doSignin(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",a)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),s&&s(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",a)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),s&&s(r)}}static async checkUserName(t,s=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return s&&s(r),r}static async resetHash(t,s,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const n=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,r={method:"POST",body:JSON.stringify({guid:t,hash:n}),headers:He.genHeaders()},l=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();a&&a(l)}static genHeaders(t={}){let s={};s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company);const a=aa.getBrandHeader();return Object.assign(s,a),s}static async fetchTournaments(t=null){const s={method:"GET",headers:He.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(n),n}static async fetchTournamentPreview(t,s=null,a=null){typeof s=="function"&&(a=s,s=null);const n={"Content-Type":"application/json","X-Bma-Anon-Session":Mu()};Object.assign(n,aa.getBrandHeader());let r=`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/preview`;s&&(r+=`?s=${encodeURIComponent(s)}`);const l=await fetch(r,{method:"GET",headers:n});let i=null;try{i=await l.json()}catch{i=null}const c={data:i,status:l.status,ok:l.ok};return a&&a(c),c}static async createTournament(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:He.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament`,a);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return s&&s(o),o}static async fetchBetSlips(t,s="",a="",n=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(r+=`/${s}`),s&&a&&(r+=`/${a}`);const o={method:"GET",headers:He.genHeaders()},i=await(await fetch(this.API_baseURI+r,o)).json();return n&&n(i),i}static async fetchLeaderboard(t,s="",a=null){let n=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(n+=`&user=${s}`);const r={method:"GET",headers:He.genHeaders()},l=await(await fetch(this.API_baseURI+n,r)).json();return a&&a(l),l}static async fetchGlobalLeaderboard(t=null){const s=`/m5t/${this.API_ver}/coreLeaderboard`,a={method:"GET",headers:He.genHeaders()},r=await(await fetch(this.API_baseURI+s,a)).json();return t&&t(r),r}static async fetchAllTimeLeaderboard(t="ALL",s=100,a="td",n=null){const r=new URLSearchParams({sport:t,limit:String(s),sort:a}),o=`/m5t/${this.API_ver}/coreLeaderboard/alltime?${r.toString()}`,l={method:"GET",headers:He.genHeaders()},c=await(await fetch(this.API_baseURI+o,l)).json();return n&&n(c),c}static async postBetSlips(t,s=null){const a=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(l=>l.json())}),n=await Promise.all(a);return s&&s(n),n}static async fetchPromotions(t=null){const s={method:"GET",headers:He.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",s)).json();return t&&t(n),n}static async sendInvite(t,s,a=null){const n={method:"POST",body:JSON.stringify(s),headers:He.genHeaders()},r=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/invite`,n);let o=null;try{o=await r.json()}catch{o=null}const l={data:o,status:r.status,ok:r.ok};return a&&a(l),l}static async fetchInvitesForTournament(t,s=null){const a={method:"GET",headers:He.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/invites`,a);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return s&&s(o),o}static async fetchMyInvites(t={},s=null){typeof t=="function"&&(s=t,t={});let a=`${this.API_baseURI}/m5t/${this.API_ver}/invites/mine`;t.include==="all"&&(a+="?include=all");const n={method:"GET",headers:He.genHeaders()},r=await fetch(a,n);let o=null;try{o=await r.json()}catch{o=null}const l={data:o,status:r.status,ok:r.ok};return s&&s(l),l}static async acceptInvite(t,s=null){const a={method:"POST",headers:He.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/accept`,a);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return s&&s(o),o}static async declineInvite(t,s=null){const a={method:"POST",headers:He.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/decline`,a);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return s&&s(o),o}static async revokeInvite(t,s=null){const a={method:"POST",headers:He.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/revoke`,a);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return s&&s(o),o}};He.API_baseURI="https://machfive-bmacdev-rest.onrender.com",He.API_ver="v5",He.jsState={},He.jsMeta={},He.jsTJO=null;let ke=He;const na={shootConfetti(){if(typeof confetti=="function"){let a=function(n,r){confetti({...t,...r,particleCount:Math.floor(e*n)})};var s=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const a in t)e[a]&&t[a]!=e[a]&&(s[a]=e[a]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},Ts=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s},Pg={class:"auth-page"},Og={__name:"splash_route",setup(e){const t=ct(),s=Ba();return Te(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,n)=>(ue(),fe("div",Pg,[...n[0]||(n[0]=[pt('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),A("div",{class:"auth-page-right"},[A("div",{class:"auth-card splash-content"},[A("p",{class:"splash-message"},"Loading Tournaments..."),A("br"),A("br"),A("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[A("div")])])],-1)])]))}},wl=Ts(Og,[["__scopeId","data-v-994bad53"]]);class $g{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(s=>{let a=!1;for(const n of s){if(n.attributeName==="data-sync-theme"){const r=t.getAttribute("data-sync-theme")||"dark";r!==this._theme&&(this._theme=r,a=!0)}if(n.attributeName==="data-sync-motif"){const r=t.getAttribute("data-sync-motif")||"brand";r!==this._motif&&(this._motif=r,a=!0)}if(n.attributeName==="data-sync-lang"){const r=t.getAttribute("data-sync-lang")||"en";r!==this._lang&&(this._lang=r,a=!0)}}a&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(s){console.warn("[BMAThemeResolver] Listener error:",s)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const Re=new $g().init(),Lu={mobile:"(orientation: portrait), (max-width: 768px)"};function Ge(){return`
    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    :host {
      font-family: 'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
    }

    /* Shared keyframe animations */
    @keyframes bma-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    @keyframes bma-glow-pulse {
      0%, 100% { box-shadow: var(--status-live-glow, 0 0 8px rgba(0,230,118,0.2)); }
      50% { box-shadow: 0 0 16px rgba(0,230,118,0.4); }
    }

    @keyframes bma-fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes bma-slideUp {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes bma-fillProgress {
      from { width: 0%; }
      to { width: var(--progress-target, 0%); }
    }

    @keyframes bma-shimmer {
      0% { background-position: -200% 0; }
      100% { background-position: 200% 0; }
    }

    /* Screen reader only */
    .bma-sr-only {
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    }
  `}function Ss(){return`
    /* Press feedback on all interactive elements */
    [role="button"]:active,
    button:active {
      transform: scale(0.97);
      transition: transform 75ms ease;
    }

    /* Keyboard focus ring */
    [role="button"]:focus-visible,
    button:focus-visible {
      outline: none;
      box-shadow: var(--focus-ring, 0 0 0 2px rgba(255, 215, 0, 0.4));
    }
  `}class Mg extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Re.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=Re.theme;let s=this.getAttribute("data-sport-group")||"Soccer",a,n;s==="Multi"?(a="Multi",n=`var(--sport-icon__Multi--${t})`):(a=s.replaceAll(" ","_"),n=`var(--sport-icon__${a}--${t})`),this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}

        :host {
          display: inline-block;
          width: 30px; height: 30px;
          border-radius: 50%;
          background-color: transparent;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          border: none;
        }

        :host([data-sport-group="${s}"]) {
          background-image: ${n};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",Mg);class Lg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Re.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,s={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),n=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(n){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),l=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:l.title,sportDescription:l.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,a){s!==a&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const s=t.scrollHeight-t.clientHeight,a=this.getAttribute("data-compact")==="true";!a&&s>2?this.setAttribute("data-compact","true"):a&&s<-10&&this.removeAttribute("data-compact")})}getTheme(){return Re.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(n=>Array.isArray(n))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(n=>Array.isArray(n))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const a=s.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:s.find(r=>Array.isArray(r))?.length||0,max:parseInt(a?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const n=JSON.parse(a);if(!Array.isArray(n))return null;const r=n.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===s&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[s]&&o[s].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=Ye.find(a=>a.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(a=>{const n=a.title||"Match";let r="TBD";if(a.scheduled_at)try{r=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=a.scheduled_at}return`  ${n} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let a="";for(let n=0;n<s;n++){const r=t[n].key,o=Ye.find(i=>i.key===r),l=o?o.group:"default";a+=`<bma-sport-icon sport="${r}" data-sport-group="${l}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),s=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}
        ${Ss()}
        :host {
          display: block;
          aspect-ratio: 1 / 1.2; /* width / height */
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: var(--card-radius, var(--radius-lg, 12px));
          transition: border-color var(--transition-normal, 0.25s ease);
        }

        :host(:hover) {
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-4px);
        }

        /* Small variant */
        :host([data-n55-size="small"]) {
          min-width: 192px;  /* 256px - 64px */
          max-width: 320px;  /* 384px - 64px */
        }

        /* Medium variant (default) */
        :host([data-n55-size="medium"]) {
          min-width: 256px;
          max-width: 384px;
        }

        /* Large variant */
        :host([data-n55-size="large"]) {
          min-width: 320px;  /* 256px + 64px */
          max-width: 448px;  /* 384px + 64px */
        }

        /* Tournament status-based styling */
        :host([data-bma-tourn-class="UPCOMING"]) .card {
          background: linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--app-core-color--green-3__dark--brand, #14b963) 100%);
        }

        :host([data-bma-tourn-class="LOCKED"]) .card {
          background: linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--app-core-color--yellow-3__dark--brand, #F7C60D) 100%);
        }

        :host([data-bma-tourn-class="COMPLETED"]) .card {
          background: linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--app-core-color--red-1__dark--brand, #51090B) 100%);
        }

        /* Trophy badges for tournament winners — directly above info button */
        .badge-ribbon {
          width: clamp(72px, 45vw, 180px);
          height: clamp(72px, 45vw, 180px);
          margin: 0 auto 4px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: none;
          position: relative;
          z-index: 8;
        }

        .badge-ribbon.visible {
          display: block;
        }

        /* Badge variants */
        .badge-ribbon.gold {
          background-image: var(--trophy-gold-short);
        }

        .badge-ribbon.silver {
          background-image: var(--trophy-silver-short);
        }

        .badge-ribbon.bronze {
          background-image: var(--trophy-bronze-short);
        }

        /* Wait state - blur and make unclickable */
        :host([data-bma-tourn-wait="true"]) .card {
          filter: blur(2px);
          opacity: 0.6;
          pointer-events: none;
          cursor: wait;
        }

        :host([data-bma-tourn-wait="true"]) {
          pointer-events: none;
          cursor: wait;
        }

        :host([data-bma-tourn-wait="true"])  neodigm-juicebar { position: absolute; display: block; width: 100%; top: 2px; }
        :host([data-bma-tourn-wait="false"]) neodigm-juicebar { display: none; }


        .card {
          position: relative;
          background: linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--surface-default, #161616) 100%);
          border: none;
          border-radius: var(--card-radius, var(--radius-lg, 12px));
          color: var(--app-core-color--white-5__dark--brand, #fff);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          user-select: none;
          transition: transform var(--transition-normal, 0.3s ease), box-shadow var(--transition-normal, 0.3s ease);
          box-shadow: var(--card-shadow, 0 3px 6px rgba(0,0,0,0.4)), var(--shadow-inset-top, inset 0 1px 0 rgba(255,255,255,0.05));
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
        }

        .chevron-cover {
          display: none;
        }

        .card-header {
          z-index: 4;
          position: relative;
        }

        .card-body,
        .card-actions,
        .card-bottom-section {
          position: relative;
          z-index: 2;
        }

        .card:hover {
          box-shadow: var(--card-shadow-hover, 0 6px 12px rgba(0,0,0,0.4)), var(--shadow-inset-top, inset 0 1px 0 rgba(255,255,255,0.05));
          filter: brightness(1.04);
        }

        .card:focus-visible {
          outline: none;
          box-shadow: var(--focus-ring, 0 0 0 2px rgba(255, 215, 0, 0.4)), var(--card-shadow, 0 3px 6px rgba(0,0,0,0.4));
        }

        /* Status-based card accents */
        .card[data-bma-tourn-status="COMPLETED"] {
          QQQQopacity: 0.9;
        }

        .card[data-bma-tourn-status="COMPLETED"]:hover {
          QQQQopacity: 1;
        }

        .card-header {
          display: flex;
          flex-direction: column;
          height: 132px;
          flex-shrink: 0;
          padding: 12px 10px 14px;
          background: var(--card-bg, #181818);
          overflow: hidden;
          box-shadow:
            var(--shadow-inset-depth, inset 0 -8px 12px rgba(0, 0, 0, 0.4)),
            var(--shadow-inset-top, inset 0 1px 0 rgba(255, 255, 255, 0.05));
          background-image:
            linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(0,0,0,0.15) 100%);
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }

        .header-top .sport-tag {
          gap: 0.2rem;
        }

        .header-top .sport-count {
          margin-left: 0.15rem;
        }

        .header-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-width: 0;
          min-height: 0;
        }

        .txt-caption {
          font-size: 16px; font-weight: var(--weight-semibold, 600);
          color: #FFFFFF;
          margin: 0 0 2px 0;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-wrap: break-word;
        }
        :host([data-bma-tourn-class="LOCKED"]) .txt-caption {
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
        }
        :host([data-bma-tourn-class="COMPLETED"]) .txt-caption {
          color: var(--status-completed-text, #CD5659);
        }

        .tagline {
          font-size: 13px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          margin: 0;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          font-style: italic;
          word-wrap: break-word;
          min-height: 0;
        }

        .sport-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: var(--app-core-color--gray-6__dark--brand, #b0b0b0);
          text-transform: uppercase;
          font-weight: var(--weight-medium, 500);
        }

        .sport-count {
          margin-left: 0.25rem;
          font-size: 0.7rem;
          color: var(--app-core-color--gray-5__dark--brand, #888);
        }

        .status {
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full, 9999px);
          font-size: var(--badge-font-size, 0.7rem);
          font-weight: var(--badge-font-weight, 600);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .header-badges {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .game-mode-badge {
          padding: 0.2rem 0.5rem;
          border-radius: var(--radius-full, 9999px);
          font-size: var(--badge-font-size, 0.7rem);
          font-weight: var(--badge-font-weight, 600);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: rgba(255, 255, 255, 0.5);
          background: transparent;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
        }

        .status.UPCOMING {
          background: var(--status-upcoming-bg, rgba(0, 230, 118, 0.12));
          color: var(--status-upcoming-text, #00E676);
          box-shadow: inset 0 0 0 1px var(--status-upcoming-border, rgba(0, 230, 118, 0.30));
        }

        .status.LOCKED {
          background: var(--status-locked-bg, rgba(247, 198, 13, 0.12));
          color: var(--status-locked-text, #F7C60D);
          box-shadow: inset 0 0 0 1px var(--status-locked-border, rgba(247, 198, 13, 0.30));
        }

        .status.COMPLETED {
          background: var(--status-completed-bg, rgba(150, 150, 150, 0.10));
          color: var(--status-completed-text, #969696);
          box-shadow: inset 0 0 0 1px var(--status-completed-border, rgba(150, 150, 150, 0.25));
        }

        .card-body {
          display: grid;
          grid-template-rows: auto 1fr auto;
          flex: 1 1 auto;
          min-height: 0;
          margin-top: 8px;
        }

        .info-item {
          display: grid;
          grid-template-columns: 32% 32% 32%;
          gap: 2%;
          text-align: center;
          margin: 0 6px;
          min-width: 0;
          width: calc(100% - 12px);
          padding-bottom: 2px;
        }

        .info-item .info-cell {
          border-radius: 0;
          padding: 2px 1px;
          position: relative;
        }

        .info-item .info-cell > P {
          margin: 4px 0;
        }

        .info-cell .info-label {
          font-size: 0.62rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.6px;
          margin-bottom: 3px;
          white-space: nowrap;
        }

        .card-bottom-section .info-cell .info-label {
          color: rgba(255, 255, 255, 0.6);
        }

        .info-cell .info-value {
          font-size: clamp(0.92rem, 0.82rem + 0.5vw, 1.25rem);
          font-weight: var(--weight-bold, 700);
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
          line-height: 1.1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .card-bottom-section .info-cell .info-value {
          color: #FFD700;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
        }

        /* Action buttons */
        .card-actions {
          display: flex;
          gap: 6px;
          margin-top: 8px;
          padding: 0 12px 8px;
          flex-shrink: 0;
        }

        .btn-info,
        .btn-join,
        .btn-play {
          flex: 1;
          height: 28px;
          padding: 5px;
          border: none;
          border-radius: var(--btn-radius, var(--radius-md, 8px));
          font-size: 0.875rem;
          font-weight: var(--weight-semibold, 600);
          cursor: pointer;
          transition: all var(--transition-normal, 0.2s ease);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        /* Default INFO button - green for UPCOMING */
        .btn-info {
          background: var(--status-upcoming-bg, rgba(0, 230, 118, 0.15));
          color: var(--status-upcoming-text, #00E676);
          border: none;
          box-shadow: inset 0 0 0 1px var(--status-upcoming-border, rgba(0, 230, 118, 0.3));
          position: relative;
          overflow: hidden;
          font-weight: var(--weight-semibold, 600);
        }

        .btn-info:hover {
          background: rgba(0, 230, 118, 0.25);
          box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.4), var(--shadow-glow-green, 0 0 12px rgba(0, 230, 118, 0.3));
          color: #00FF88;
        }

        /* Yellow INFO button for LOCKED status */
        :host([data-bma-tourn-status="LOCKED"][data-user-participating]) .btn-info {
          background: var(--status-locked-bg, rgba(247, 198, 13, 0.15));
          color: var(--status-locked-text, #F7C60D);
          border: none;
          box-shadow: inset 0 0 0 1px var(--status-locked-border, rgba(247, 198, 13, 0.3));
        }

        :host([data-bma-tourn-status="LOCKED"][data-user-participating]) .btn-info:hover {
          background: rgba(247, 198, 13, 0.25);
          box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.4), var(--shadow-glow-gold, 0 0 12px rgba(247, 198, 13, 0.3));
          color: #FFD700;
        }

        /* Gray INFO button for LOCKED tournaments user hasn't joined */
        :host([data-bma-tourn-status="LOCKED"]:not([data-user-participating])) .btn-info {
          background: rgba(30, 30, 30, 0.85);
          color: #FAFAFA;
          border: none;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
        }

        :host([data-bma-tourn-status="LOCKED"]:not([data-user-participating])) .btn-info:hover {
          background: rgba(50, 50, 50, 0.9);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25), 0 0 12px rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
        }

        /* Gray INFO button for COMPLETED status */
        :host([data-bma-tourn-status="COMPLETED"]) .btn-info {
          background: rgba(30, 30, 30, 0.85);
          color: #FAFAFA;
          border: none;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
        }

        :host([data-bma-tourn-status="COMPLETED"]) .btn-info:hover {
          background: rgba(50, 50, 50, 0.9);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25), 0 0 12px rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
        }

        .btn-join {
          background: linear-gradient(135deg, var(--status-upcoming-text, #00E676) 0%, var(--app-core-color--yellow-3__dark--brand, #FFD700) 100%);
          color: #000000;
          display: none;
          position: relative;
          border: none;
          box-shadow: 0 4px 15px rgba(0, 230, 118, 0.4);
          text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
          font-weight: 600;
          font-size: 0.875rem;
          letter-spacing: 0.5px;
          animation: subtle-pulse 2s ease-in-out infinite;
        }

        @keyframes subtle-pulse {
          0%, 100% { transform: scale(1); box-shadow: 0 4px 15px rgba(0, 230, 118, 0.4); }
          50% { transform: scale(1.02); box-shadow: 0 6px 20px rgba(0, 230, 118, 0.5); }
        }

        .btn-join::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 10px,
            rgba(0, 0, 0, 0.02) 10px,
            rgba(0, 0, 0, 0.02) 20px
          );
          pointer-events: none;
        }

        .btn-join.visible {
          display: block;
        }

        .btn-join:hover {
          background: linear-gradient(135deg, #00FF88 0%, #FFE033 100%);
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 8px 25px rgba(0, 230, 118, 0.6);
          animation: none;
        }

        .btn-play {
          background: linear-gradient(180deg, #FFD700 0%, #FFC107 100%);
          color: #000;
          display: none;
          position: relative;
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.15);
        }

        .btn-play.visible {
          display: block;
        }

        .btn-play:hover {
          background: linear-gradient(180deg, #FFE033 0%, #FFD700 100%);
          transform: translateY(-1px);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0, 0, 0, 0.2);
        }

/*  Neodigm Marquee Begin  */
neodigm-marquee pre { color: var( --app-core-color--yellow-1__dark--brand ) !important; }

.QQQQcard-focus__feedback {
    visibility: hidden;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    width: 100%;
    overflow: hidden;
    position: absolute;
    top: 132px;
    left: 0;
    right: 0;
    z-index: 5;
}

:host([data-bma-tourn-class="COMPLETED"]) .card-focus__feedback {
    display: none;
}

/*  Neodigm Marquee End  */

        /* Progress Bar - now in bottom section */
        .card-entrants__dataviz {
          padding: 0 10px 6px;
        }

        /* Bottom Section with solid background matching header */
        .card-bottom-section {
          background: var(--card-bg, #181818);
          padding: 8px 0 6px;
          margin-top: auto;
          flex-shrink: 0;
        }

        /* Compact overrides removed — compact values are now the base defaults */

        @media (max-width: 768px) {
          .card-bottom-section {
            padding: 12px 0 8px;
          }

          .card-entrants__dataviz {
            padding: 0 12px 10px;
          }

          .info-item {
            margin: 0 6px;
            width: calc(100% - 12px);
            padding-bottom: 6px;
            gap: 4px;
          }

          .info-item .info-cell {
            padding: 4px 2px;
          }

          .info-cell .info-label {
            font-size: 0.56rem;
            margin-bottom: 4px;
          }

          .info-cell .info-value {
            font-size: 0.9rem;
          }
        }

        @media (max-width: 390px) {
          .info-item {
            margin: 0 4px;
            width: calc(100% - 8px);
            gap: 3px;
          }

          .info-item .info-cell {
            padding: 4px 1px;
          }

          .info-cell .info-label {
            font-size: 0.52rem;
            letter-spacing: 0.7px;
          }

          .info-cell .info-value {
            font-size: 0.84rem;
          }
        }

        .progress-container {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .progress-label {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.6);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          font-weight: 600;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: var(--progress-bg, rgba(255, 255, 255, 0.08));
          border-radius: var(--progress-radius, var(--radius-sm, 4px));
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          border-radius: var(--progress-radius, var(--radius-sm, 4px));
          animation: fillProgress 3.2s ease-in forwards;
          background: linear-gradient(90deg, #00C853 0%, #00E676 50%, #00C853 100%);
          background-size: 200% 100%;
          position: relative;
        }


        @keyframes fillProgress {
          from {
            width: 0%;
          }
        }

        /* Progress bar colors based on status */
        :host([data-bma-tourn-status="UPCOMING"]) .progress-fill {
          background: var(--status-upcoming-text, var(--app-core-color--green-3__dark--brand, #14b963));
        }

        :host([data-bma-tourn-status="LOCKED"]) .progress-fill {
          background: var(--status-locked-text, var(--app-core-color--yellow-3__dark--brand, #F7C60D));
        }

        :host([data-bma-tourn-status="COMPLETED"]) .progress-fill {
          background: var(--status-completed-text, var(--app-core-color--gray-6__dark--brand, #969696));
        }

        :host([data-bma-tourn-status="DRAFT"]) .progress-fill {
          background: var(--app-core-color--gray-5__dark--brand, #484848);
        }
/*  Neodigm JuiceBar Begin  */
neodigm-juicebar{
    display: block;
    height: 4px; width: 99%;
    background-color: #f8f8f8;
    overflow: hidden;
}
neodigm-juicebar[data-n55-size='pico']  { height: 1px; }
neodigm-juicebar[data-n55-size='micro'] { height: 2px; }
neodigm-juicebar[data-n55-size='milli'],
neodigm-juicebar[data-n55-size='xsmall']{ height: 3px; }  /*  Milli and XSmall same  */
neodigm-juicebar[data-n55-size='small'] { height: 4px; }
neodigm-juicebar[data-n55-size='medium']{ height: 8px; }
neodigm-juicebar[data-n55-size='large'] { height: 12px; }
neodigm-juicebar[data-n55-size='xlarge']{ height: 16px; }
[data-n55-ampm-theme="light"] neodigm-juicebar { background-color: #f8f8f8; }
[data-n55-ampm-theme="dark"] neodigm-juicebar { background-color: var( --neodigm-theme-night-alt ); }

neodigm-juicebar > DIV {
    height: 100%;
    background-color: var( --neodigm-theme-brand );
    animation: juicebar_linear 1s infinite ease-in-out;
    transform-origin: 0% 50%;
}
neodigm-juicebar[data-n55-show="false"] { visibility: hidden; }

[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='brand'] > DIV{ background-color: var( --neodigm-theme-brand )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='primary'] > DIV{ background-color: var( --neodigm-theme-primary )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='secondary'] > DIV{ background-color: var( --neodigm-theme-secondary )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='success'] > DIV{ background-color: var( --neodigm-theme-success )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='danger'] > DIV{ background-color: var( --neodigm-theme-danger )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='warning'] > DIV{ background-color: var( --neodigm-theme-warning )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='info'] > DIV{ background-color: var( --neodigm-theme-info )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='disabled'] > DIV{ background-color: var( --neodigm-theme-disabled )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='night'] > DIV{ background-color: var( --neodigm-theme-night )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='marcom'] > DIV{ background-color: var( --neodigm-theme-marcom )}
[data-n55-ampm-theme="light"] neodigm-juicebar[data-n55-theme='party'] > DIV{ background-color: var( --neodigm-theme-party )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='brand'] > DIV{ background-color: var( --neodigm-theme-brand-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='primary'] > DIV{ background-color: var( --neodigm-theme-primary-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='secondary'] > DIV{ background-color: var( --neodigm-theme-secondary-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='success'] > DIV{ background-color: var( --neodigm-theme-success-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='danger'] > DIV{ background-color: var( --neodigm-theme-danger-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='warning'] > DIV{ background-color: var( --neodigm-theme-warning-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='info'] > DIV{ background-color: var( --neodigm-theme-info-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='disabled'] > DIV{ background-color: var( --neodigm-theme-disabled-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='night'] > DIV{ background-color: var( --neodigm-theme-night-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='marcom'] > DIV{ background-color: var( --neodigm-theme-marcom-alt )}
[data-n55-ampm-theme="dark"] neodigm-juicebar[data-n55-theme='party'] > DIV{ background-color: var( --neodigm-theme-party-alt )}

@keyframes juicebar_linear {
    0% { transform: translateX(0) scaleX(0); }
    30% { transform: translateX(0) scaleX(-0.4); }
    100% { transform: translateX(100%) scaleX(0.8); }
}
/*  Neodigm JuiceBar End  */ 

      </style>

      <div class="card" data-sync-theme="${s}">
        <div class="chevron-cover"></div>
        <div class="card-header">
          <div class="header-top">
            <span class="sport-tag">${this.sportsDisplay}</span>
            <span class="header-badges">
              ${(()=>{const r=this.gameModeBadge?.label||(this.gameType==="DEFAULT_FORMAT"?"Bet Max Tourney":"");return r?`<span class="game-mode-badge">${r}</span>`:""})()}
              <span class="status ${this.status.toUpperCase()}">${this.status.toUpperCase()==="LOCKED"?"IN PROGRESS":this.status.toUpperCase()==="UPCOMING"?"OPEN":this.status}</span>
            </span>
          </div>
          <section class="header-content">
            <h3 class="txt-caption">${this.caption}</h3>
            <p class="tagline">${this.tagline}</p>
          </section>
        </div>
        <!--
        <output class="card-focus__feedback">
          <neodigm-marquee data-n55-marquee-text="${this.marqueeText}"
          data-n55-marquee-size="small">
          <pre data-n55-theme="warning"></pre>
          </neodigm-marquee>
        </output>
        -->
<output class="card-focus__feedback" style="display: none;">
<neodigm-marquee data-n55-marquee-text="${this.marqueeText}"
data-n55-marquee-size="small"
style="padding: 7px 0 4px 0; height: 34px; background-color: #323232">
<pre data-n55-theme="warning" style="padding: 7px 0 4px 0; height: 34px; background-color: #161616"></pre>
</neodigm-marquee>
</output>

        <div class="card-body">
          <output class="card-waiting">
            <neodigm-juicebar role="progressbar" data-n55-theme="brand" data-n55-size="medium"
            style="background-color: #242424;"><div></div></neodigm-juicebar>
          </output>
        </div>
        <div class="badge-ribbon ${this.getUserBadge()?"visible":""} ${this.getBadgeClass()}"></div>
        <nav class="card-actions">
          <button class="btn-info" aria-label="Tournament information"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Info</button>
          <button class="btn-join ${!this.isUserParticipating()&&this.status.toUpperCase()!=="LOCKED"&&this.status.toUpperCase()!=="COMPLETED"?"visible":""}" aria-label="Join tournament">Join</button>
          <button class="btn-play ${this.isUserParticipating()&&this.status.toUpperCase()!=="COMPLETED"?"visible":""}" aria-label="Play tournament">Play</button>
        </nav>
        <div class="card-bottom-section">
          <aside class="card-entrants__dataviz">
            <div class="progress-container">
              <div class="progress-label">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -1px; margin-right: 2px; opacity: 0.6;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>Entrants</span>
                <span>${this.entitiesData.current} / ${this.entitiesData.max}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width: ${(this.entitiesData.current/this.entitiesData.max*100).toFixed(1)}%"></div>
              </div>
            </div>
          </aside>
          <div class="info-item">
            <section class="info-cell">
              <p class="info-label">Entry</p>
              <p class="info-value">${this.entryFee}</p>
            </section>
            <section class="info-cell">
              <p class="info-label">Games</p>
              <p class="info-value">${this.matches==0?"TBD":this.matches+(()=>{try{return JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(r=>r.override_last_match_close===!0)?"+":""}catch{return""}})()}</p>
            </section>
            <section class="info-cell">
              <p class="info-label">Starting TD$</p>
              <p class="info-value">${Number(this.tournament_dollars).toLocaleString()}</p>
            </section>
          </div>
        </div>
      </div>
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",Lg);class Rg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".stake-input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,a){if(s!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?na.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}get potentialProfit(){const t=parseFloat(this.stake)||0,a=(parseFloat(this.payout)||0)-t;return a>0?a.toFixed(2):"0.00"}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".hero-value");t&&(t.textContent=this.potentialProfit)}setupEventListeners(){const t=this.shadowRoot.querySelector(".close-btn");t&&t.addEventListener("click",()=>{const a={teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")};ce.publish("COREBETSLIP.CLOSE",JSON.stringify({...a,timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:a}))});const s=this.shadowRoot.querySelector(".stake-input");s&&s.addEventListener("input",a=>{this.setAttribute("data-stake",a.target.value)})}render(){const t=parseInt(this.odds,10),s=Number.isFinite(t)?t>0?`+${t}`:`${t}`:this.odds,a=this.stake!=="0"?this.stake:"",n=(this.type||"").toUpperCase();this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}

        :host {
          display: block;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          animation: bma-slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .card {
          position: relative;
          background: #1f1f1f;
          border-radius: var(--card-radius, 12px);
          overflow: hidden;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.05),
            0 4px 16px rgba(0, 0, 0, 0.4);
          isolation: isolate;
        }

        /* Subtle gold wash — this card is always "being built" (pending-like) */
        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(247, 198, 13, 0.035);
          pointer-events: none;
          z-index: 0;
        }

        .body {
          position: relative;
          z-index: 1;
          padding: 12px;
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 12px;
          min-width: 0;
        }

        /* Header: match description. Right-padded to clear the close button. */
        .header {
          padding-right: 40px;
          min-width: 0;
        }

        .match-desc {
          font-size: 0.8rem;
          color: var(--text-primary, #fff);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }

        /* Close button — occupies the slot the status pill does in bet-existing */
        .close-btn {
          position: absolute;
          top: 8px;
          right: 8px;
          z-index: 2;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.06);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          color: var(--text-secondary, #b0b0b0);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: background 0.15s ease, color 0.15s ease, box-shadow 0.15s ease;
        }

        .close-btn:hover {
          background: rgba(205, 86, 89, 0.18);
          color: var(--status-completed-text, #CD5659);
          box-shadow: inset 0 0 0 1px rgba(205, 86, 89, 0.4);
        }

        .close-btn svg { width: 12px; height: 12px; }

        /* Middle: selection | odds pill | bet-type meta */
        .middle {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 10px;
          align-items: center;
          min-width: 0;
        }

        .selection {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary, #fff);
          letter-spacing: -0.01em;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .odds {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px;
          background: #262626;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--text-primary, #fff);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.01em;
          min-width: 56px;
        }

        .bet-type {
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--text-muted, #808080);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          text-align: right;
        }

        /* Footer: stake input (left) + potential profit (right) */
        .footer {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 12px;
          padding-top: 8px;
          border-top: 1px dashed rgba(255, 255, 255, 0.06);
        }

        .stake-cell {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .stake-label {
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--text-muted, #808080);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          line-height: 1;
        }

        .stake-input-wrap {
          position: relative;
          display: flex;
          align-items: center;
        }

        .stake-input-wrap::before {
          content: 'TD$';
          position: absolute;
          left: 10px;
          font-size: 0.72rem;
          font-weight: 700;
          color: var(--text-muted, #808080);
          pointer-events: none;
          letter-spacing: 0.3px;
        }

        .stake-input {
          width: 100%;
          max-width: 160px;
          padding: 8px 10px 8px 42px;
          background: #262626;
          border: none;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
          border-radius: 6px;
          color: var(--text-primary, #fff);
          font-size: 0.95rem;
          font-weight: 700;
          font-variant-numeric: tabular-nums;
          box-sizing: border-box;
          transition: box-shadow 0.15s ease;
        }

        .stake-input:focus {
          outline: none;
          box-shadow: inset 0 0 0 1px var(--status-locked-text, #F7C60D);
        }

        .stake-input::-webkit-outer-spin-button,
        .stake-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .stake-input[type=number] { -moz-appearance: textfield; }

        .hero-cell {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
        }

        .hero {
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
          color: var(--status-locked-text, #F7C60D);
        }

        .hero-sublabel {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-primary, #fff);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          line-height: 1;
        }

        @media (orientation: portrait), (max-width: 768px) {
          .body { padding: 10px; gap: 10px; }
          .header { padding-right: 36px; }
          .match-desc { font-size: 0.75rem; }
          .selection { font-size: 0.88rem; }
          .odds { padding: 5px 10px; font-size: 0.82rem; min-width: 50px; }
          .stake-input { padding: 7px 10px 7px 40px; font-size: 0.88rem; max-width: 140px; }
          .hero { font-size: 1.15rem; }
        }
      </style>

      <div class="card">
        <button class="close-btn" aria-label="Remove bet">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <line x1="6" y1="6" x2="18" y2="18"/>
            <line x1="18" y1="6" x2="6" y2="18"/>
          </svg>
        </button>
        <div class="body">
          <div class="header">
            <div class="match-desc">${this.abbreviatedTitle}</div>
          </div>
          <div class="middle">
            <div class="selection">${this.teamPoints}</div>
            <div class="odds">${s}</div>
            <div class="bet-type">${n}</div>
          </div>
          <div class="footer">
            <div class="stake-cell">
              <span class="stake-label">Stake</span>
              <div class="stake-input-wrap">
                <input
                  class="stake-input"
                  type="number"
                  min="0"
                  value="${a}"
                  placeholder="0"
                  aria-label="Stake amount"
                />
              </div>
            </div>
            <div class="hero-cell">
              <span class="hero">+TD$ <span class="hero-value">${this.potentialProfit}</span></span>
              <span class="hero-sublabel">To win</span>
            </div>
          </div>
        </div>
      </div>
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",Rg);class Dg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Re.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=Ye.find(a=>a.key===t);return s?s.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing tournament tags:",s),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const a=this.scoreboard;if(!a||!a.time_remaining)return!1;const n=a.time_remaining.toLowerCase();return n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Re.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const s=this.shadowRoot?.querySelector(".countdown");s&&(s.textContent=t)}attributeChangedCallback(t,s,a){s!==a&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const a=s-t;if(a<=0)return"";const n=Math.floor(a/(1e3*60*60)),r=Math.floor(a%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const a=s.time_remaining.toLowerCase();if(a==="final")return{type:"final",text:"Final",color:"#969696"};if(a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")){const n=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,r=s.period!==void 0&&s.period!==null&&s.period!==0;if(n||r)return{type:"live",text:s.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let a=this.scheduledAt;if(!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a=a+"Z"),new Date(a)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,a,n,r){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const l=o.classList.contains("btn--active"),i={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:a,price:n,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:i,isActive:l,button:o}}))}renderButton(t,s,a,n,r=!1){if(!a)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const o=a.price,l=a.point;let i="";return t==="spread"?i=`${l>0?`+${l}`:l}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?i=o:t==="total"&&(i=`${n}${l}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${r?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${o}"
                    ${l?`data-point="${l}"`:""}
                    ${r?'data-disabled="true"':""}>
            ${i}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const s=this.isMatchInProgressLocked(),a=this.isDisabled||s,n=this.getGameStatus(),r=this.scoreboard,o=r?.home_score||0,l=r?.away_score||0,i=n?.type==="live"||n?.type==="final",c=parseInt(o),u=parseInt(l),d=n?.type==="final",p=n?.type==="live",f=i&&d&&c>u,g=i&&d&&u>c,b=i&&p&&c>u,v=i&&p&&u>c,h=t?.spreads?.outcomes?.find(E=>E.name===this.homeTeam),m=t?.spreads?.outcomes?.find(E=>E.name===this.awayTeam),_=t?.h2h?.outcomes?.find(E=>E.name===this.homeTeam),y=t?.h2h?.outcomes?.find(E=>E.name===this.awayTeam),w=t?.totals?.outcomes?.find(E=>E.name==="Over"),x=t?.totals?.outcomes?.find(E=>E.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                ${Ss()}

                :host {
                    display: block;
                    padding: 0 6px;
                }

                .card {
                    padding: 1rem 1rem 0.75rem;
                    margin-bottom: 12px;
                    border: none;
                    border-radius: 0;
                    transition: all var(--transition-normal, 0.3s ease);
                    background: linear-gradient(135deg, var(--surface-brand-muted, rgba(46, 139, 87, 0.1)), var(--surface-brand-subtle, rgba(46, 139, 87, 0.05)));
                    box-shadow: var(--card-shadow, 0 3px 6px rgba(0,0,0,0.4)), var(--shadow-inset-top, inset 0 1px 0 rgba(255,255,255,0.05));
                    position: relative;
                    cursor: default;
                }

                .card--final {
                    opacity: 0.85;
                }

                :host([data-is-disabled="true"]) .card {
                    opacity: var(--state-disabled-opacity, 0.38);
                    cursor: not-allowed;
                    pointer-events: none;
                }

                /* ── Header strip ── */
                .header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid var(--status-upcoming-border, rgba(46, 139, 87, 0.2));
                }

                .header bma-sport-icon {
                    flex-shrink: 0;
                }

                .sport-label {
                    font-size: 0.65rem;
                    font-weight: var(--weight-semibold, 600);
                    color: var(--status-locked-text, #F7C60D);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .date {
                    font-size: 0.8rem;
                    color: var(--status-locked-text, #F7C60D);
                    font-weight: var(--weight-medium, 500);
                    white-space: nowrap;
                    margin-left: auto;
                }

                .header-spacer {
                    flex: 1;
                }

                .status-badge {
                    padding: var(--badge-padding, 2px 8px);
                    border-radius: var(--radius-full, 9999px);
                    font-size: var(--badge-font-size, 0.7rem);
                    font-weight: var(--badge-font-weight, 600);
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                .status-badge--live {
                    background: var(--status-live-bg, rgba(0, 230, 118, 0.15));
                    color: var(--status-live-text, #00E676);
                    border: none;
                    box-shadow: inset 0 0 0 1px var(--status-live-border, rgba(0, 230, 118, 0.3));
                }

                .status-badge--upcoming {
                    background: var(--status-locked-bg, rgba(247, 198, 13, 0.15));
                    color: var(--status-locked-text, #F7C60D);
                    border: none;
                    box-shadow: inset 0 0 0 1px var(--status-locked-border, rgba(247, 198, 13, 0.3));
                }

                .status-badge--final,
                .status-badge--scheduled {
                    background: var(--status-completed-bg, rgba(150, 150, 150, 0.15));
                    color: var(--status-completed-text, #969696);
                    border: none;
                    box-shadow: inset 0 0 0 1px var(--status-completed-border, rgba(150, 150, 150, 0.3));
                }

                .live-dot {
                    width: 6px;
                    height: 6px;
                    background: var(--status-live-text, #00E676);
                    border-radius: 50%;
                    animation: bma-pulse 1.5s ease-in-out infinite;
                }

                /* ── Column labels row ── */
                .labels-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr 1fr;
                    gap: 6px;
                    margin-bottom: 6px;
                    margin-left: calc(35% + 8px);
                }

                .labels-row span {
                    font-size: 0.65rem;
                    font-weight: var(--weight-semibold, 600);
                    text-transform: uppercase;
                    text-align: center;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                    letter-spacing: 0.5px;
                }

                /* ── Team rows ── */
                .rows-container {
                    display: grid;
                    grid-template-rows: auto auto;
                }

                .row {
                    display: grid;
                    grid-template-columns: 35% 65%;
                    gap: 8px;
                    align-items: center;
                    margin-bottom: 6px;
                }

                .row:last-child {
                    margin-bottom: 0;
                }

                .row--home { grid-row: 2; }
                .row--away { grid-row: 1; }

                :host([data-sport-key^="soccer_"]) .row--home { grid-row: 1; }
                :host([data-sport-key^="soccer_"]) .row--away { grid-row: 2; }

                .team {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    min-width: 0;
                }

                .team-name {
                    font-weight: var(--weight-semibold, 600);
                    font-size: 0.85rem;
                    color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    flex: 1;
                    min-width: 0;
                }

                .team-score {
                    font-size: 1.1rem;
                    font-weight: var(--weight-bold, 700);
                    padding: 2px 8px;
                    min-width: 32px;
                    text-align: center;
                    flex-shrink: 0;
                    border-radius: var(--badge-radius, 6px);
                }

                .team--home .team-score,
                .team--away .team-score {
                    color: var(--status-locked-text, #F7C60D);
                    background: var(--status-locked-bg, rgba(247, 198, 13, 0.12));
                }

                .team-score.score--leading {
                    color: var(--status-upcoming-text, #00E676);
                    background: var(--status-upcoming-bg, rgba(0, 230, 118, 0.12));
                }

                .team-score.score--trailing {
                    color: var(--status-locked-text, #F7C60D);
                    background: var(--status-locked-bg, rgba(247, 198, 13, 0.12));
                }

                .team--winner .team-name {
                    color: var(--status-upcoming-text, #00E676);
                }

                .team--winner .team-score {
                    color: var(--status-upcoming-text, #00E676);
                    background: rgba(0, 230, 118, 0.15);
                    font-size: 1.2rem;
                }

                .team--loser {
                    opacity: 0.55;
                }

                /* ── Betting Buttons ── */
                .buttons {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 6px;
                }

                .btn {
                    padding: 10px 8px;
                    border: none;
                    box-shadow: inset 0 0 0 1px var(--app-core-color--gray-4__dark--brand, #323232);
                    border-radius: var(--btn-radius, var(--radius-md, 8px));
                    background: var(--surface-default, #161616);
                    color: var(--app-core-color--white-5__dark--brand, #fff);
                    font-size: 0.75rem;
                    font-weight: var(--weight-semibold, 600);
                    cursor: pointer;
                    transition: all var(--transition-normal, 0.2s ease);
                    text-align: center;
                    line-height: 1.4;
                }

                .btn--empty {
                    opacity: 0.2;
                    cursor: not-allowed;
                }

                .btn--pending {
                    opacity: 0.5;
                    cursor: not-allowed;
                    background: var(--app-core-color--gray-3__dark--brand, #181818);
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
                }

                .btn-pending-label {
                    font-size: 0.62rem;
                    font-weight: 600;
                    line-height: 1.1;
                    letter-spacing: 0.02em;
                    text-transform: uppercase;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                }

                .btn--disabled {
                    opacity: var(--state-disabled-opacity, 0.4);
                    cursor: not-allowed;
                    background: var(--app-core-color--gray-3__dark--brand, #181818);
                    box-shadow: inset 0 0 0 1px var(--app-core-color--gray-5__dark--brand, #484848);
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                    pointer-events: none;
                }

                .btn:not(.btn--empty):not(.btn--disabled):hover {
                    box-shadow: inset 0 0 0 1px var(--status-locked-text, #F7C60D);
                    background: var(--app-core-color--gray-3__dark--brand, #181818);
                    color: var(--status-locked-text, #F7C60D);
                }

                .btn:not(.btn--empty):not(.btn--disabled):active {
                    background: var(--status-locked-text, #F7C60D);
                    color: #000;
                }

                .btn--selected {
                    box-shadow: inset 0 0 0 1px var(--status-locked-text, #F7C60D);
                    background: color-mix(in srgb, var(--app-core-color--yellow-1__dark--brand, #6D5706) 15%, var(--surface-default, #161616));
                    color: var(--status-locked-text, #F7C60D);
                    font-weight: var(--weight-bold, 700);
                }

                .btn--active {
                    border: none;
                    box-shadow: inset 0 0 0 1px var(--status-locked-text, #F7C60D), var(--shadow-glow-gold, 0 0 12px rgba(247, 198, 13, 0.3));
                }

                .btn[data-bet-type="money"]:not([data-price^="-"])::before {
                    content: "+";
                }

                .btn-odds:not([data-price-value^="-"])::before {
                    content: "+";
                }

                /* ── Mobile responsive ── */
                @media (max-width: 768px) {
                    .card {
                        padding: 0.75rem 0.75rem 0.5rem;
                    }

                    .header {
                        gap: 6px;
                    }

                    .date {
                        font-size: 0.7rem;
                    }

                    .status-badge {
                        font-size: 0.65rem;
                        padding: 2px 6px;
                    }

                    .labels-row {
                        margin-left: calc(40% + 6px);
                    }

                    .labels-row span {
                        font-size: 0.55rem;
                    }

                    .row {
                        grid-template-columns: 40% 60%;
                        gap: 6px;
                    }

                    .team-name {
                        font-size: 0.75rem;
                        white-space: normal;
                        overflow: visible;
                        text-overflow: unset;
                        line-height: 1.2;
                    }

                    .team-score {
                        font-size: 0.9rem;
                        padding: 2px 4px;
                        min-width: 24px;
                    }

                    .team--winner .team-score {
                        font-size: 0.95rem;
                    }

                    .buttons {
                        gap: 4px;
                    }

                    .row {
                        margin-bottom: 10px;
                    }

                    .btn {
                        padding: 10px 2px;
                        font-size: 0.65rem;
                    }
                }
            </style>

            <div class="card ${n?`card--${n.type}`:""}">
                <!-- Full-width header strip -->
                <div class="header">
                    ${this.sportKey?`
                        <bma-sport-icon
                            sport="${this.sportKey}"
                            data-sport-group="${this.sportGroup}"
                            style="width: 22px; height: 22px;">
                        </bma-sport-icon>
                        <span class="sport-label">${this.getSportAbbr()}</span>
                    `:""}
                    ${n&&n.type!=="scheduled"?`
                        <div class="status-badge status-badge--${n.type}">
                            ${n.type==="live"?'<span class="live-dot"></span>':""}
                            <span class="countdown">${n.text}</span>
                        </div>
                    `:""}
                    <span class="date">${this.formatDate(this.scheduledAt)}</span>
                </div>

                <!-- Column labels row -->
                
                    <div class="labels-row">
                        <span>SPREAD</span>
                        <span>MONEY</span>
                        <span>TOTAL</span>
                    </div>
                

                <!-- Team rows -->
                <div class="rows-container">
                    <div class="row row--home">
                        <div class="team team--home ${f?"team--winner":""} ${g?"team--loser":""}">
                            <span class="team-name">${this.homeTeam}</span>
                            ${i?`<span class="team-score ${b?"score--leading":""} ${v?"score--trailing":""}">${o}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","home",h,null,a)}
                                ${this.renderButton("money","home",_,null,a)}
                                ${this.renderButton("total","under",x,"U",a)}
                            </div>
                        `}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${g?"team--winner":""} ${f?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${i?`<span class="team-score ${v?"score--leading":""} ${b?"score--trailing":""}">${l}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","away",m,null,a)}
                                ${this.renderButton("money","away",y,null,a)}
                                ${this.renderButton("total","over",w,"O",a)}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(E=>{const I=E.dataset.betType,L=E.dataset.team,C=E.dataset.price,k=E.dataset.point||null;E.addEventListener("click",S=>this.handleButtonClick(S,I,L,C,k))})}}customElements.define("bma-bet-match-card",Dg);const Ig='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',Ng='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>';class Bg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Re.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch{return null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=Ye.find(s=>s.key===this.sportId);return t?t.group:""}get theme(){return Re.theme}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||""}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let s=this.scheduledAt;!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s+="Z");const a=new Date(s)-t;if(a<=0)return"";const n=Math.floor(a/36e5),r=Math.floor(a%36e5/6e4);return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let l=this.scheduledAt;!l.includes("Z")&&!l.match(/[+-]\d{2}:\d{2}$/)&&(l+="Z"),a=new Date(l)<new Date(Date.now()-300*1e3)}let n,r;if(t?.time_remaining){const l=t.time_remaining;l==="Final"?(n="FINAL",r="Final"):l==="In Progress"?(n="LIVE",r="In Progress"):(n="LIVE",r=l)}else s&&a?(n="FINAL",r="Final"):(n="UPCOMING",r="Upcoming");const o=n==="UPCOMING"?this.getCountdownText():"";return{status:n,timeRemaining:r,countdown:o}}render(){const{status:t,timeRemaining:s,countdown:a}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,r=this.scheduledAt?na.formatDateLocal(this.scheduledAt):"",o=this.getSportAbbr(),l=t==="LIVE"?"live":t==="FINAL"?"final":"upcoming",i=t==="LIVE"?"Live":t==="FINAL"?"Final":"Upcoming",c=t==="FINAL"?Ng:Ig,u=parseInt(this.homeScore),d=parseInt(this.awayScore),p=n&&t==="FINAL"&&u>d,f=n&&t==="FINAL"&&d>u;this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}

        :host {
          display: block;
          width: 100%;
        }

        .card {
          position: relative;
          background: #1f1f1f;
          border-radius: var(--card-radius, 12px);
          overflow: hidden;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.05),
            0 4px 16px rgba(0, 0, 0, 0.35);
          margin-bottom: 10px;
          isolation: isolate;
        }

        /* Faint state-tinted wash over the surface (parity with bet-existing) */
        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .card.live::before    { background: rgba(0, 230, 118, 0.04); }
        .card.final::before   { background: transparent; }
        .card.upcoming::before { background: rgba(247, 198, 13, 0.035); }

        .body {
          position: relative;
          z-index: 1;
          padding: 12px;
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 10px;
        }

        /* Header: sport chip + match title. Right-padded to clear the pill. */
        .header {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-right: 96px;
          min-width: 0;
        }

        .sport {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 8px;
          background: rgba(255, 255, 255, 0.04);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
          border-radius: 6px;
          font-size: 0.65rem;
          font-weight: 800;
          color: var(--status-locked-text, #F7C60D);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          line-height: 1;
          flex-shrink: 0;
        }

        .match-title {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }

        /* Status pill — top-right, matches bet-existing style */
        .pill {
          position: absolute;
          top: 10px;
          right: 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 3px 8px 3px 6px;
          border-radius: 999px;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1;
          z-index: 2;
        }

        .pill svg { width: 12px; height: 12px; flex-shrink: 0; }

        .card.live .pill {
          background: rgba(0, 230, 118, 0.14);
          color: var(--status-upcoming-text, #00E676);
        }
        .card.final .pill {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.75);
        }
        .card.upcoming .pill {
          background: rgba(247, 198, 13, 0.14);
          color: var(--status-locked-text, #F7C60D);
        }

        .pill-dot {
          display: none;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
        }

        .card.live .pill-dot { display: inline-block; animation: match-pulse 1.5s ease-in-out infinite; }
        .card.live .pill-icon { display: none; }

        @keyframes match-pulse {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }

        /* Team rows */
        .teams {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .team {
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: center;
          gap: 12px;
          padding: 6px 0;
        }

        .team-name {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary, #fff);
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }

        .team-score {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--text-primary, #fff);
          font-variant-numeric: tabular-nums;
          letter-spacing: -0.02em;
          min-width: 36px;
          text-align: right;
        }

        .team.winner .team-name,
        .team.winner .team-score {
          color: var(--status-upcoming-text, #00E676);
        }

        .team.loser .team-name,
        .team.loser .team-score {
          color: rgba(255, 255, 255, 0.5);
        }

        .vs {
          font-size: 0.75rem;
          font-weight: 700;
          color: var(--text-muted, #808080);
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        /* Footer — scheduled time + time remaining / countdown */
        .footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding-top: 8px;
          border-top: 1px dashed rgba(255, 255, 255, 0.06);
          font-size: 0.72rem;
          color: var(--text-secondary, #b0b0b0);
        }

        .time-meta {
          font-variant-numeric: tabular-nums;
          color: var(--text-primary, #fff);
        }

        .time-remaining {
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .card.live .time-remaining { color: var(--status-upcoming-text, #00E676); }
        .card.upcoming .time-remaining { color: var(--status-locked-text, #F7C60D); }

        .countdown-badge {
          display: inline-flex;
          align-items: center;
          padding: 2px 7px;
          border-radius: 999px;
          background: rgba(247, 198, 13, 0.14);
          color: var(--status-locked-text, #F7C60D);
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.3px;
          margin-left: 6px;
        }

        @media (orientation: portrait), (max-width: 768px) {
          .body { padding: 10px; }
          .header { padding-right: 84px; }
          .match-title { font-size: 0.72rem; }
          .team-name { font-size: 0.88rem; }
          .team-score { font-size: 1.05rem; min-width: 32px; }
        }
      </style>

      <div class="card ${l}">
        <div class="pill">
          <span class="pill-dot"></span>
          <span class="pill-icon">${c}</span>
          <span class="pill-label">${i}</span>
        </div>
        <div class="body">
          <div class="header">
            ${o?`<span class="sport">
              ${this.sportId?`<bma-sport-icon sport="${this.sportId}" data-sport-group="${this.sportGroup}" style="width: 14px; height: 14px;"></bma-sport-icon>`:""}
              ${o}
            </span>`:""}
            <span class="match-title">${this.matchTitle}</span>
          </div>

          ${n?`
            <div class="teams">
              <div class="team ${p?"winner":f?"loser":""}">
                <span class="team-name">${this.homeTeam}</span>
                <span class="team-score">${this.homeScore}</span>
              </div>
              <div class="team ${f?"winner":p?"loser":""}">
                <span class="team-name">${this.awayTeam}</span>
                <span class="team-score">${this.awayScore}</span>
              </div>
            </div>
          `:`
            <div class="teams">
              <div class="team">
                <span class="team-name">${this.homeTeam}</span>
                <span class="vs">vs</span>
              </div>
              <div class="team">
                <span class="team-name">${this.awayTeam}</span>
                <span class="team-score" style="color: rgba(255,255,255,0.3); font-size: 0.82rem; font-weight: 600;">—</span>
              </div>
            </div>
          `}

          <div class="footer">
            <span class="time-meta">${r}</span>
            <span class="time-remaining">
              ${s||t}${a?`<span class="countdown-badge">${a}</span>`:""}
            </span>
          </div>
        </div>
      </div>
    `}}customElements.define("bma-match-status",Bg);const Fg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',zg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',Hg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',jg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class ms extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Re.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){s!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){ms.currentlyExpanded&&ms.currentlyExpanded!==this&&ms.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),s.classList.add("expanded"),ms.currentlyExpanded=this):(t.classList.remove("open"),s.classList.remove("expanded"),ms.currentlyExpanded===this&&(ms.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),s&&s.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",s=>{s.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let s=0,a=0,n=0,r=0,o=0;return t.forEach(l=>{const i=l.bet||[];if(i.length===0)return;const c=i[0];Object.keys(c).filter(d=>d!=="short_title").forEach(d=>{const p=c[d];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?s++:a++:(n++,r+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:s,losses:a,pending:n,total:s+a+n,pendingStakes:r,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches,a=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(i=>{const c=i.bet||[];if(c.length===0)return!1;if(a)return!0;const u=c[0],d=Object.keys(u).filter(p=>p!=="short_title")[0];return u[d]?.reconciled===!0});if(n.length===0){if(!a){const i=t.reduce((c,u)=>{const d=(u.bet||[])[0];if(!d)return c;const p=Object.keys(d).filter(f=>f!=="short_title");return c+p.filter(f=>d[f]?.reconciled!==!0).length},0);if(i>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${i} pending bet${i!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const r={};s.forEach(i=>{const c=i.guid||i.id||i.odds_id;c&&(r[c]=i)});const o={};n.forEach(i=>{const c=i.coreMatches__guid||i.match_guid||i.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const u=r[c];if(u){o[c].matchTitle=u.short_title||u.title||"Unknown Match";const d=u.sport_id,p=Ye.find(f=>f.key===d);o[c].sportKey=p?.group||"default"}o[c].bets.push(i)});let l="";if(Object.keys(o).forEach(i=>{const c=o[i],u=c.sportKey||"default",d=c.matchTitle||"Unknown Match",p=c.bets.length;l+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${u}"></bma-sport-icon>
                    <span class="match-title">${d}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const g=f.bet||[];if(g.length===0)return;const b=g[0];Object.keys(b).filter(h=>h!=="short_title").forEach(h=>{const m=b[h];if(!m||typeof m!="object")return;const _=(m.type||"").toUpperCase(),y=parseFloat(m.stake||m.wager||0),w=parseFloat(m.payout||0),x=parseInt(m.odds,10),E=Number.isFinite(x)?x>0?`+${x}`:`${x}`:"—",I=m.reconciled===!0,L=w-y,C=.01;let k,S,$,z,H;I?w>y+C?(k="won",S="Won",$=zg,z=`+TD$ ${L.toFixed(2)}`,H="Profit"):w<y-C?(k="lost",S="Lost",$=Hg,z=`-TD$ ${y.toFixed(2)}`,H="Lost"):(k="push",S="Push",$=jg,z=`TD$ ${y.toFixed(2)}`,H="Returned"):(k="pending",S="Pending",$=Fg,z=L>0?`+TD$ ${L.toFixed(2)}`:"TD$ 0.00",H="To win"),l+=`<div class="bet-item ${k}">
                        <div class="bet-item__pill">
                            <span class="bet-item__pill-dot"></span>
                            <span class="bet-item__pill-icon">${$}</span>
                            <span class="bet-item__pill-label">${S}</span>
                        </div>
                        <div class="bet-item__body">
                            <div class="bet-item__middle">
                                <div class="bet-item__team">${h}</div>
                                <div class="bet-item__odds">${E}</div>
                                <div class="bet-item__meta">
                                    <div class="bet-item__type">${_}</div>
                                    <div class="bet-item__stake">TD$ ${y.toFixed(2)} stake</div>
                                </div>
                            </div>
                            <div class="bet-item__footer">
                                <div class="bet-item__hero">${z}</div>
                                <div class="bet-item__sublabel">${H}</div>
                            </div>
                        </div>
                    </div>`})})}),!a){const i=t.reduce((c,u)=>{const d=(u.bet||[])[0];if(!d)return c;const p=Object.keys(d).filter(f=>f!=="short_title");return c+p.filter(f=>d[f]?.reconciled!==!0).length},0);i>0&&(l+=`<p class="hidden-bets-note">+ ${i} pending bet${i!==1?"s":""} hidden until settled</p>`)}return l}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",s=this.unqualified?"leaderboard-card--unqualified":"",a=parseFloat(this.startingDollars||0),n=this.combinedBetslips;let r=0,o=0,l=0;n.forEach(m=>{const _=m.bet||[];if(_.length===0)return;const y=_[0];Object.keys(y).filter(w=>w!=="short_title").forEach(w=>{const x=y[w];if(!x||typeof x!="object")return;const E=parseFloat(x.stake||0),I=parseFloat(x.payout||0);r+=E,x.reconciled===!0?l+=I:o+=E})});const i=Math.max(0,a-r),c=m=>Math.abs(m)<.01?0:m,u=r-o,d=c(a-u+l),p=d,f=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",g=c(p-a),b=g>=0?"+":"",v=g>0?"profit-up":g<0?"profit-down":"profit-even",h=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                ${Ss()}

                :host {
                    display: block;
                    margin-bottom: 0.75rem;
                    contain: layout style;
                    min-width: 0;
                    max-width: 100%;
                }

                * {
                    box-sizing: border-box;
                }

                /* Qualified users keep the green signature — a meaningful
                   "in the running" signal. Unqualified drops to flat dark. */
                .leaderboard-card {
                    background: rgba(46, 139, 87, 0.12);
                    border: none;
                    box-shadow:
                        inset 0 0 0 1px rgba(46, 139, 87, 0.25),
                        0 4px 16px rgba(0, 0, 0, 0.3);
                    border-radius: var(--card-radius, var(--radius-lg, 12px));
                    padding: 1rem 1rem 0 1rem;
                    user-select: none;
                    transition: box-shadow 0.2s ease;
                }

                .leaderboard-card:hover {
                    box-shadow:
                        inset 0 0 0 1px rgba(46, 139, 87, 0.45),
                        0 6px 20px rgba(0, 0, 0, 0.4);
                }

                .leaderboard-card--current-user {
                    border-left: 3px solid var(--status-locked-text, #FFD700);
                }

                .leaderboard-card--unqualified {
                    background: #1f1f1f;
                    box-shadow:
                        inset 0 0 0 1px rgba(255, 255, 255, 0.05),
                        0 4px 16px rgba(0, 0, 0, 0.4);
                    opacity: 0.7;
                }

                .leaderboard-card--unqualified:hover {
                    opacity: 1;
                    box-shadow:
                        inset 0 0 0 1px rgba(255, 255, 255, 0.12),
                        0 6px 20px rgba(0, 0, 0, 0.5);
                }

                .leaderboard-card--unqualified .leaderboard-card__rank {
                    color: rgba(255, 255, 255, 0.35);
                    font-size: 1rem;
                }

                .leaderboard-card--unqualified .dollars-amount {
                    color: rgba(255, 255, 255, 0.65);
                    text-shadow: none;
                }

                .unbet-badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    margin-top: 4px;
                    padding: 2px 6px;
                    border-radius: 4px;
                    font-size: 0.6rem;
                    font-weight: 700;
                    letter-spacing: 0.3px;
                    text-transform: uppercase;
                    background: rgba(255, 82, 82, 0.15);
                    color: var(--status-loss-text, #FF5252);
                    align-self: flex-start;
                    flex-basis: 100%;
                    order: 99;
                    width: fit-content;
                }

                .leaderboard-card__user {
                    flex-wrap: wrap;
                    row-gap: 2px;
                }

                .leaderboard-card__header {
                    display: grid;
                    grid-template-columns: 40px 1fr auto 36px;
                    align-items: center;
                    gap: 0.75rem;
                    column-gap: 1rem;
                }

                .leaderboard-card__rank {
                    font-size: 1.25rem;
                    font-weight: 900;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    text-align: center;
                }

                .leaderboard-card__user {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }

                .badge-trophy {
                    width: 32px;
                    height: 32px;
                    flex-shrink: 0;
                }

                .badge-trophy--gold {
                    background-color: rgba(255, 215, 0, 0.15);
                    background-image: var(--trophy-gold-tall);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    border-radius: var(--badge-radius, 6px);
                }

                .badge-trophy--silver {
                    background-color: rgba(192, 192, 192, 0.15);
                    background-image: var(--trophy-silver-tall);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    border-radius: var(--badge-radius, 6px);
                }

                .badge-trophy--bronze {
                    background-color: rgba(205, 127, 50, 0.15);
                    background-image: var(--trophy-bronze-tall);
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    border-radius: var(--badge-radius, 6px);
                }

                .leaderboard-card__username {
                    font-size: 1.125rem;
                    font-weight: 600;
                    color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .you-badge {
                    display: inline-block;
                    padding: 0.1rem 0.4rem;
                    border-radius: var(--radius-sm, 4px);
                    font-size: 0.6rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    background: rgba(255, 215, 0, 0.2);
                    color: var(--status-locked-text, #FFD700);
                    vertical-align: middle;
                    margin-left: 0.35rem;
                }

                .leaderboard-card__balance {
                    text-align: right;
                }

                .dollars-amount {
                    font-size: 1.35rem;
                    font-weight: 900;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    text-shadow: 0 2px 8px rgba(247, 198, 13, 0.4);
                }

                /* KPI Strip */
                .kpi-strip {
                    display: flex;
                    gap: 0;
                    margin: 0.6rem -1rem 0 -1rem;
                }

                .kpi-card {
                    flex: 1;
                    padding: 0.5rem 0.6rem;
                    border-radius: 0;
                    background: rgba(255, 255, 255, 0.04);
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                    border-right: 1px solid rgba(255, 255, 255, 0.05);
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .kpi-card:last-child {
                    border-right: none;
                }

                .kpi-card__label {
                    font-size: 0.65rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: rgba(255, 255, 255, 0.55);
                    margin-bottom: auto;
                    line-height: 1.2;
                }

                .kpi-card__value {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.9);
                    margin-top: 0.25rem;
                    white-space: nowrap;
                }

                .kpi-card__value.profit-up { color: var(--status-upcoming-text, #00E676); }
                .kpi-card__value.profit-down { color: var(--status-loss-text, #FF5252); }
                .kpi-card__value.profit-even { color: rgba(255, 255, 255, 0.5); }
                .kpi-card__value--risk { color: var(--status-locked-text, #FFD700); }
                .kpi-card__value--max-win { color: var(--status-upcoming-text, #00E676); }
                .kpi-card__value--none {
                    color: rgba(255, 255, 255, 0.3);
                }

                .expand-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: var(--status-locked-bg, rgba(247, 198, 13, 0.12));
                    border: none;
                    box-shadow: inset 0 0 0 1px var(--status-locked-border, rgba(247, 198, 13, 0.3));
                    border-radius: var(--badge-radius, 6px);
                    transition: all var(--transition-normal, 0.2s ease);
                    cursor: pointer;
                    user-select: none;
                    font-size: 0;
                }

                .expand-icon::after {
                    content: '';
                    display: block;
                    width: 10px;
                    height: 10px;
                    border-right: 3px solid var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    border-bottom: 3px solid var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    transform: rotate(-45deg);
                    margin-left: -2px;
                    transition: transform 0.3s ease;
                }

                .expand-icon.expanded::after {
                    transform: rotate(45deg);
                    margin-left: 0;
                    margin-top: -3px;
                }

                .expand-icon:hover {
                    background: rgba(247, 198, 13, 0.25);
                    box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.6);
                }

                /* Details Section */
                .leaderboard-card__details {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    margin-top: 0;
                    padding-top: 0;
                    border-top: 1px solid transparent;
                    transition: max-height 0.35s ease, opacity 0.25s ease, margin-top 0.35s ease, padding-top 0.35s ease, border-color 0.35s ease;
                    will-change: max-height, opacity;
                }

                .leaderboard-card__details.open {
                    max-height: 2000px;
                    opacity: 1;
                    margin-top: 1.5rem;
                    padding-top: 1.5rem;
                    border-top-color: rgba(255, 255, 255, 0.06);
                }

                .details-summary {
                    display: flex;
                    gap: 24px;
                    margin-bottom: 16px;
                    padding: 12px 16px;
                    background: rgba(255, 255, 255, 0.04);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                    border-radius: 8px;
                    flex-wrap: wrap;
                }

                .details-summary__stat {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .details-summary__stat-label {
                    font-size: 0.6rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.6px;
                    color: var(--text-muted, #808080);
                    line-height: 1;
                }

                .details-summary__stat-value {
                    font-size: 1rem;
                    font-weight: 800;
                    color: var(--text-primary, #fff);
                    font-variant-numeric: tabular-nums;
                    line-height: 1;
                }

                .details-summary__stat-value--accent {
                    color: var(--status-locked-text, #F7C60D);
                }

                .bets-scroll-container {
                    max-height: 440px;
                    overflow-y: auto;
                    padding-right: 0.25rem;
                }

                .bets-scroll-container::-webkit-scrollbar {
                    width: 4px;
                }

                .bets-scroll-container::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.03);
                    border-radius: var(--progress-radius, var(--radius-sm, 4px));
                }

                .bets-scroll-container::-webkit-scrollbar-thumb {
                    background: rgba(247, 198, 13, 0.35);
                    border-radius: var(--progress-radius, var(--radius-sm, 4px));
                }

                .bets-scroll-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(247, 198, 13, 0.6);
                }

                /* Match Group Header Band */
                .match-group-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1rem;
                    margin-bottom: 0.5rem;
                    background: rgba(255, 255, 255, 0.04);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
                    border-left: 3px solid var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    border-radius: var(--badge-radius, 6px);
                }

                .match-group-header:not(:first-child) {
                    margin-top: 1.5rem;
                }

                .match-title {
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: var(--text-primary, #fff);
                    letter-spacing: 0.5px;
                    flex: 1;
                    min-width: 0;
                }

                .match-bet-count {
                    font-size: 0.82rem;
                    color: var(--status-locked-text, #F7C60D);
                    font-weight: 700;
                    white-space: nowrap;
                }

                .match-group-header bma-sport-icon {
                    flex-shrink: 0;
                }

                /* ───────────────────────────────────────────────────────────
                   Bet Item — aligned with bma-bet-existing language.
                   Flat #1f1f1f surface, hairline border, faint state-tint
                   wash via ::before, status pill top-right, hero profit number
                   pinned in the footer above a dashed divider.
                   ─────────────────────────────────────────────────────────── */
                .bet-item {
                    position: relative;
                    background: #1f1f1f;
                    border-radius: var(--card-radius, 12px);
                    overflow: hidden;
                    box-shadow:
                        inset 0 0 0 1px rgba(255, 255, 255, 0.05),
                        0 4px 16px rgba(0, 0, 0, 0.4);
                    margin-bottom: 0.75rem;
                    isolation: isolate;
                }

                .bet-item::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 0;
                }
                .bet-item.pending::before { background: rgba(247, 198, 13, 0.035); }
                .bet-item.won::before     { background: rgba(0, 230, 118, 0.035); }
                .bet-item.lost::before    { background: rgba(205, 86, 89, 0.035); }
                .bet-item.push::before    { background: transparent; }

                .bet-item__body {
                    position: relative;
                    z-index: 1;
                    padding: 12px;
                    display: grid;
                    grid-template-rows: auto auto;
                    gap: 12px;
                    min-width: 0;
                }

                .bet-item__middle {
                    display: grid;
                    grid-template-columns: 1fr auto auto;
                    gap: 10px;
                    align-items: center;
                    padding-right: 96px; /* room for absolute pill */
                    min-width: 0;
                }

                .bet-item__team {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: var(--text-primary, #fff);
                    letter-spacing: -0.01em;
                    min-width: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }

                .bet-item__odds {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 6px 12px;
                    background: #262626;
                    box-shadow:
                        inset 0 0 0 1px rgba(255, 255, 255, 0.12),
                        0 1px 2px rgba(0, 0, 0, 0.3);
                    border-radius: 6px;
                    font-size: 0.9rem;
                    font-weight: 800;
                    color: var(--text-primary, #fff);
                    font-variant-numeric: tabular-nums;
                    letter-spacing: 0.01em;
                    min-width: 56px;
                }

                .bet-item__meta {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 2px;
                    text-align: right;
                }

                .bet-item__type {
                    font-size: 0.6rem;
                    font-weight: 800;
                    color: var(--text-muted, #808080);
                    text-transform: uppercase;
                    letter-spacing: 0.6px;
                }

                .bet-item__stake {
                    font-size: 0.72rem;
                    color: var(--text-secondary, #b0b0b0);
                    font-variant-numeric: tabular-nums;
                }

                .bet-item__footer {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    align-items: center;
                    gap: 12px;
                    padding-top: 8px;
                    border-top: 1px dashed rgba(255, 255, 255, 0.06);
                }

                .bet-item__hero {
                    font-size: 1.3rem;
                    font-weight: 800;
                    line-height: 1;
                    letter-spacing: -0.02em;
                    font-variant-numeric: tabular-nums;
                }

                .bet-item.pending .bet-item__hero { color: var(--status-locked-text, #F7C60D); }
                .bet-item.won     .bet-item__hero { color: var(--status-upcoming-text, #00E676); }
                .bet-item.lost    .bet-item__hero { color: var(--status-completed-text, #CD5659); text-decoration: line-through; text-decoration-thickness: 2px; }
                .bet-item.push    .bet-item__hero { color: var(--text-secondary, #b0b0b0); }

                .bet-item__sublabel {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: var(--text-primary, #fff);
                    text-transform: uppercase;
                    letter-spacing: 0.6px;
                    line-height: 1;
                    justify-self: end;
                }

                /* Status pill — docks top-right */
                .bet-item__pill {
                    position: absolute;
                    top: 10px;
                    right: 10px;
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 3px 8px 3px 6px;
                    border-radius: 999px;
                    font-size: 0.65rem;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    line-height: 1;
                    z-index: 2;
                }

                .bet-item__pill svg { width: 12px; height: 12px; flex-shrink: 0; }

                .bet-item.pending .bet-item__pill {
                    background: rgba(247, 198, 13, 0.14);
                    color: var(--status-locked-text, #F7C60D);
                }
                .bet-item.won .bet-item__pill {
                    background: rgba(0, 230, 118, 0.14);
                    color: var(--status-upcoming-text, #00E676);
                }
                .bet-item.lost .bet-item__pill {
                    background: rgba(205, 86, 89, 0.14);
                    color: var(--status-completed-text, #CD5659);
                }
                .bet-item.push .bet-item__pill {
                    background: rgba(255, 255, 255, 0.08);
                    color: var(--text-secondary, #b0b0b0);
                }

                .bet-item__pill-dot {
                    display: none;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: currentColor;
                    margin-right: 2px;
                }

                .bet-item.pending .bet-item__pill-dot { display: inline-block; animation: bet-item-pulse 1.5s ease-in-out infinite; }
                .bet-item.pending .bet-item__pill-icon { display: none; }

                @keyframes bet-item-pulse {
                    0%, 100% { opacity: 1; }
                    50%      { opacity: 0.3; }
                }

                .no-bets {
                    text-align: center;
                    padding: 2rem;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                    font-style: italic;
                }

                .no-bets--hidden {
                    padding: 1.25rem 1rem;
                    font-style: normal;
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 0.8rem;
                }

                .hidden-bets-note {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 6px;
                    margin: 12px auto 4px;
                    padding: 8px 14px;
                    width: fit-content;
                    background: rgba(247, 198, 13, 0.08);
                    box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.18);
                    border-radius: 999px;
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: var(--status-locked-text, #F7C60D);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-style: normal;
                }

                .hidden-bets-note::before {
                    content: '';
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    background: currentColor;
                    -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z'/></svg>") center/contain no-repeat;
                            mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'><path d='M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z'/></svg>") center/contain no-repeat;
                    flex-shrink: 0;
                }

                /* Responsive - Portrait/Mobile */
                @media (orientation: portrait), (max-width: 768px) {
                    .leaderboard-card {
                        padding: 0.65rem 0.65rem 0 0.65rem;
                    }

                    .leaderboard-card__header {
                        grid-template-columns: 28px 1fr auto 32px;
                        gap: 0.4rem;
                    }

                    .leaderboard-card__rank {
                        font-size: 1rem;
                    }

                    .leaderboard-card__username {
                        font-size: 0.82rem;
                    }

                    .you-badge {
                        font-size: 0.5rem;
                        padding: 0.05rem 0.3rem;
                        margin-left: 0.2rem;
                    }

                    .dollars-amount {
                        font-size: 0.85rem;
                    }

                    .kpi-strip {
                        margin: 0.5rem -0.65rem 0 -0.65rem;
                    }

                    .kpi-card {
                        padding: 0.4rem 0.25rem;
                    }

                    .kpi-card__label {
                        font-size: 0.5rem;
                        letter-spacing: 0.3px;
                    }

                    .kpi-card__value {
                        font-size: 0.72rem;
                    }

                    .kpi-card__value--none {
                        font-size: 0.58rem;
                    }

                    /* Details section */
                    .leaderboard-card__details {
                        margin-top: 0.75rem;
                        padding-top: 0.75rem;
                    }

                    .details-summary {
                        gap: 0.75rem;
                        margin-bottom: 0.75rem;
                        padding-bottom: 0.5rem;
                    }

                    .details-summary { gap: 16px; padding: 10px 12px; }
                    .details-summary__stat-value { font-size: 0.9rem; }

                    /* Match group header */
                    .match-group-header {
                        padding: 0.5rem 0.65rem;
                        gap: 0.4rem;
                    }

                    .match-title {
                        font-size: 0.72rem;
                    }

                    .match-bet-count {
                        font-size: 0.62rem;
                    }

                    /* Bet item cards mobile — tighter padding + type scale.
                       Middle collapses to 2 columns (team | odds) and the
                       meta wraps to its own row so narrow viewports don't
                       truncate the team name down to "Denver N...". */
                    .bet-item {
                        margin-bottom: 0.6rem;
                    }

                    .bet-item__body { padding: 10px; gap: 10px; }
                    .bet-item__middle {
                        padding-right: 84px;
                        grid-template-columns: 1fr auto;
                        row-gap: 6px;
                    }
                    .bet-item__meta {
                        grid-column: 1 / -1;
                        flex-direction: row;
                        align-items: baseline;
                        justify-content: flex-start;
                        gap: 8px;
                        text-align: left;
                    }
                    .bet-item__team { font-size: 0.88rem; }
                    .bet-item__odds { padding: 5px 10px; font-size: 0.82rem; min-width: 50px; }
                    .bet-item__hero { font-size: 1.15rem; }

                    /* Badge size */
                    .badge-trophy {
                        width: 20px;
                        height: 20px;
                    }

                    .expand-icon {
                        width: 28px;
                        height: 28px;
                    }

                    .expand-icon::after {
                        width: 8px;
                        height: 8px;
                        border-width: 2.5px;
                    }
                }
            </style>

            <div class="leaderboard-card ${t} ${s}">
                <div class="leaderboard-card__header">
                    <div class="leaderboard-card__rank">${this.rank==="—"?"—":"#"+this.rank}</div>

                    <div class="leaderboard-card__user">
                        ${f}
                        <span class="leaderboard-card__username">${this.username}</span>
                        ${this.isCurrentUser?'<span class="you-badge">YOU</span>':""}
                        ${this.unqualified&&i>0?`<span class="unbet-badge">TD$ ${i.toFixed(0)} unbet</span>`:""}
                    </div>

                    <div class="leaderboard-card__balance">
                        <span class="dollars-amount">TD$ ${d.toFixed(2)}</span>
                    </div>

                    <span class="expand-icon"></span>
                </div>

                <div class="kpi-strip">
                    <div class="kpi-card">
                        <div class="kpi-card__label">Gain / Loss</div>
                        <div class="kpi-card__value ${v}">${b}TD$ ${Math.abs(g).toFixed(2)}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Bet Record</div>
                        <div class="kpi-card__value">${h.wins}W - ${h.losses}L</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">At Risk</div>
                        <div class="kpi-card__value ${h.pending>0?"kpi-card__value--risk":"kpi-card__value--none"}">${h.pending>0?"TD$ "+h.pendingStakes.toFixed(0):"TD$ 0"}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Max Win</div>
                        <div class="kpi-card__value ${h.pending>0?"kpi-card__value--max-win":"kpi-card__value--none"}">${h.pending>0?"TD$ "+h.pendingMaxPayout.toFixed(0):"TD$ 0"}</div>
                    </div>
                </div>

                <div class="leaderboard-card__details">
                    <div class="details-summary">
                        <div class="details-summary__stat">
                            <span class="details-summary__stat-label">Total Bets</span>
                            <span class="details-summary__stat-value">${this.totalBetslips}</span>
                        </div>
                        <div class="details-summary__stat">
                            <span class="details-summary__stat-label">Total Payout</span>
                            <span class="details-summary__stat-value details-summary__stat-value--accent">TD$ ${parseFloat(this.totalPayout||0).toFixed(2)}</span>
                        </div>
                    </div>

                    <div class="bets-scroll-container">
                        ${this.renderBetsTable()}
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-leaderboard-card",ms);class Ru{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:a}=t.Bet,{home_team_id:n,home_team_score:r,away_team_id:o,away_team_score:l}=t.Match,i=s?.toUpperCase()||"",c=parseFloat(r)||0,u=parseFloat(l)||0;if(c===0&&u===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${i} bet:`,{home:`${n} (${c})`,away:`${o} (${u})`,scope:a}),i){case"MONEY":return this._evaluateMoneyline(a.team_id,n,o,c,u);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,n,o,c,u);case"TOTAL":return this._evaluateTotal(a.over,a.under,c,u);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",i),!1}}static _evaluateMoneyline(t,s,a,n,r){const o=t===s,l=t===a;if(!o&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const i=n>r,c=r>n;if(n===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const d=o&&i||l&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${d?"WON":"LOST"}`),d}static _evaluateSpread(t,s,a,n,r,o){const l=t===a,i=t===n;if(!l&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let u=r,d=o;l?u=r+c:d=o+c;const p=u>d,f=d>u;if(u===d)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const b=l&&p||i&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${b?"WON":"LOST"}`),b}static _evaluateTotal(t,s,a,n){const r=a+n,o=t&&t!=="";if(!o&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const i=parseFloat(o?t:s);if(r===i)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=r>i,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${i} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<i,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${i} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:a,stake:n}=t.Bet,r=s?.toUpperCase()||"",o=parseFloat(a)||0,l=parseFloat(n)||0;if(l<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",l),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let i=0;switch(r){case"SPREAD":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:l,payout:i});break;case"MONEY":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:l,payout:i});break;case"TOTAL":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:l,payout:i});break;case"PROP":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:l,payout:i});break;case"PARLAY":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:l,payout:i});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),i=0;break}return parseFloat(i.toFixed(2))}static calcAmericanOddsPayout(t,s){let a=0;return t>0?a=s*(t/100):t<0?a=s/(Math.abs(t)/100):a=0,s+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function xl(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function ii(e={},t={}){const s=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>s.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:xl(t[a])&&xl(e[a])&&Object.keys(t[a]).length>0&&ii(e[a],t[a])})}const Du={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ht(){const e=typeof document<"u"?document:{};return ii(e,Du),e}const Ug={document:Du,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function dt(){const e=typeof window<"u"?window:{};return ii(e,Ug),e}function qg(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function Vg(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function Iu(e,t=0){return setTimeout(e,t)}function er(){return Date.now()}function Gg(e){const t=dt();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function Kg(e,t="x"){const s=dt();let a,n,r;const o=Gg(e);return s.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(l=>l.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix(n==="none"?"":n)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=r.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?n=r.m41:a.length===16?n=parseFloat(a[12]):n=parseFloat(a[4])),t==="y"&&(s.WebKitCSSMatrix?n=r.m42:a.length===16?n=parseFloat(a[13]):n=parseFloat(a[5])),n||0}function Ga(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Yg(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function gt(...e){const t=Object(e[0]);for(let s=1;s<e.length;s+=1){const a=e[s];if(a!=null&&!Yg(a)){const n=Object.keys(Object(a)).filter(r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype");for(let r=0,o=n.length;r<o;r+=1){const l=n[r],i=Object.getOwnPropertyDescriptor(a,l);i!==void 0&&i.enumerable&&(Ga(t[l])&&Ga(a[l])?a[l].__swiper__?t[l]=a[l]:gt(t[l],a[l]):!Ga(t[l])&&Ga(a[l])?(t[l]={},a[l].__swiper__?t[l]=a[l]:gt(t[l],a[l])):t[l]=a[l])}}}return t}function qs(e,t,s){e.style.setProperty(t,s)}function Nu({swiper:e,targetPosition:t,side:s}){const a=dt(),n=-e.translate;let r=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const i=t>n?"next":"prev",c=(d,p)=>i==="next"&&d>=p||i==="prev"&&d<=p,u=()=>{o=new Date().getTime(),r===null&&(r=o);const d=Math.max(Math.min((o-r)/l,1),0),p=.5-Math.cos(d*Math.PI)/2;let f=n+p*(t-n);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[s]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:f})}),a.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=a.requestAnimationFrame(u)};u()}function Ft(e,t=""){const s=dt(),a=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(n=>n.matches(t)):a}function Wg(e,t){const s=[t];for(;s.length>0;){const a=s.shift();if(e===a)return!0;s.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function Jg(e,t){const s=dt();let a=t.contains(e);return!a&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=Wg(e,t))),a}function tr(e){try{console.warn(e);return}catch{}}function sr(e,t=[]){const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:qg(t)),s}function Xg(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function Qg(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function gs(e,t){return dt().getComputedStyle(e,null).getPropertyValue(t)}function ar(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function Bu(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function Ro(e,t,s){const a=dt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Gt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function Tl(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:s=>s}).createHTML(t):e.innerHTML=t}let Wr;function Zg(){const e=dt(),t=Ht();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Fu(){return Wr||(Wr=Zg()),Wr}let Jr;function eb({userAgent:e}={}){const t=Fu(),s=dt(),a=s.navigator.platform,n=e||s.navigator.userAgent,r={ios:!1,android:!1},o=s.screen.width,l=s.screen.height,i=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=a==="Win32";let f=a==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&g.indexOf(`${o}x${l}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),i&&!p&&(r.os="android",r.android=!0),(c||d||u)&&(r.os="ios",r.ios=!0),r}function zu(e={}){return Jr||(Jr=eb(e)),Jr}let Xr;function tb(){const e=dt(),t=zu();let s=!1;function a(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(a()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[i,c]=l.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));s=i<16||i===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=a(),o=r||n&&t.ios;return{isSafari:s||r,needPerspectiveFix:s,need3dFix:o,isWebView:n}}function Hu(){return Xr||(Xr=tb()),Xr}function sb({swiper:e,on:t,emit:s}){const a=dt();let n=null,r=null;const o=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(u=>{r=a.requestAnimationFrame(()=>{const{width:d,height:p}=e;let f=d,g=p;u.forEach(({contentBoxSize:b,contentRect:v,target:h})=>{h&&h!==e.el||(f=v?v.width:(b[0]||b).inlineSize,g=v?v.height:(b[0]||b).blockSize)}),(f!==d||g!==p)&&o()})}),n.observe(e.el))},i=()=>{r&&a.cancelAnimationFrame(r),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof a.ResizeObserver<"u"){l();return}a.addEventListener("resize",o),a.addEventListener("orientationchange",c)}),t("destroy",()=>{i(),a.removeEventListener("resize",o),a.removeEventListener("orientationchange",c)})}function ab({swiper:e,extendParams:t,on:s,emit:a}){const n=[],r=dt(),o=(c,u={})=>{const d=r.MutationObserver||r.WebkitMutationObserver,p=new d(f=>{if(e.__preventObserver__)return;if(f.length===1){a("observerUpdate",f[0]);return}const g=function(){a("observerUpdate",f[0])};r.requestAnimationFrame?r.requestAnimationFrame(g):r.setTimeout(g,0)});p.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),n.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=Bu(e.hostEl);for(let u=0;u<c.length;u+=1)o(c[u])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},i=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",l),s("destroy",i)}var nb={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const n=s?"unshift":"push";return e.split(" ").forEach(r=>{a.eventsListeners[r]||(a.eventsListeners[r]=[]),a.eventsListeners[r][n](t)}),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function n(...r){a.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,t.apply(a,r)}return n.__emitterProxy=t,a.on(e,n,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].forEach((n,r)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&s.eventsListeners[a].splice(r,1)})}),s},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let s,a,n;return typeof e[0]=="string"||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),n=t):(s=e[0].events,a=e[0].data,n=e[0].context||t),a.unshift(n),(Array.isArray(s)?s:s.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(n,[o,...a])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(n,a)})}),t}};function rb(){const e=this;let t,s;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=a.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(gs(a,"padding-left")||0,10)-parseInt(gs(a,"padding-right")||0,10),s=s-parseInt(gs(a,"padding-top")||0,10)-parseInt(gs(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function ob(){const e=this;function t(C,k){return parseFloat(C.getPropertyValue(e.getDirectionLabel(k))||0)}const s=e.params,{wrapperEl:a,slidesEl:n,rtlTranslate:r,wrongRTL:o}=e,l=e.virtual&&s.virtual.enabled,i=l?e.virtual.slides.length:e.slides.length,c=Ft(n,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:c.length;let d=[];const p=[],f=[];let g=s.slidesOffsetBefore;typeof g=="function"&&(g=s.slidesOffsetBefore.call(e));let b=s.slidesOffsetAfter;typeof b=="function"&&(b=s.slidesOffsetAfter.call(e));const v=e.snapGrid.length,h=e.slidesGrid.length,m=e.size-g-b;let _=s.spaceBetween,y=-g,w=0,x=0;if(typeof m>"u")return;typeof _=="string"&&_.indexOf("%")>=0?_=parseFloat(_.replace("%",""))/100*m:typeof _=="string"&&(_=parseFloat(_)),e.virtualSize=-_-g-b,c.forEach(C=>{r?C.style.marginLeft="":C.style.marginRight="",C.style.marginBottom="",C.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(qs(a,"--swiper-centered-offset-before",""),qs(a,"--swiper-centered-offset-after","")),s.cssMode&&(qs(a,"--swiper-slides-offset-before",`${g}px`),qs(a,"--swiper-slides-offset-after",`${b}px`));const E=s.grid&&s.grid.rows>1&&e.grid;E?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let I;const L=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(C=>typeof s.breakpoints[C].slidesPerView<"u").length>0;for(let C=0;C<u;C+=1){I=0;const k=c[C];if(!(k&&(E&&e.grid.updateSlide(C,k,c),gs(k,"display")==="none"))){if(l&&s.slidesPerView==="auto")s.virtual.slidesPerViewAutoSlideSize&&(I=s.virtual.slidesPerViewAutoSlideSize),I&&k&&(s.roundLengths&&(I=Math.floor(I)),k.style[e.getDirectionLabel("width")]=`${I}px`);else if(s.slidesPerView==="auto"){L&&(k.style[e.getDirectionLabel("width")]="");const S=getComputedStyle(k),$=k.style.transform,z=k.style.webkitTransform;if($&&(k.style.transform="none"),z&&(k.style.webkitTransform="none"),s.roundLengths)I=e.isHorizontal()?Ro(k,"width"):Ro(k,"height");else{const H=t(S,"width"),Y=t(S,"padding-left"),J=t(S,"padding-right"),W=t(S,"margin-left"),ie=t(S,"margin-right"),X=S.getPropertyValue("box-sizing");if(X&&X==="border-box")I=H+W+ie;else{const{clientWidth:V,offsetWidth:ee}=k;I=H+Y+J+W+ie+(ee-V)}}$&&(k.style.transform=$),z&&(k.style.webkitTransform=z),s.roundLengths&&(I=Math.floor(I))}else I=(m-(s.slidesPerView-1)*_)/s.slidesPerView,s.roundLengths&&(I=Math.floor(I)),k&&(k.style[e.getDirectionLabel("width")]=`${I}px`);k&&(k.swiperSlideSize=I),f.push(I),s.centeredSlides?(y=y+I/2+w/2+_,w===0&&C!==0&&(y=y-m/2-_),C===0&&(y=y-m/2-_),Math.abs(y)<1/1e3&&(y=0),s.roundLengths&&(y=Math.floor(y)),x%s.slidesPerGroup===0&&d.push(y),p.push(y)):(s.roundLengths&&(y=Math.floor(y)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup===0&&d.push(y),p.push(y),y=y+I+_),e.virtualSize+=I+_,w=I,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,m)+b,r&&o&&(s.effect==="slide"||s.effect==="coverflow")&&(a.style.width=`${e.virtualSize+_}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+_}px`),E&&e.grid.updateWrapperSize(I,d),!s.centeredSlides){const C=s.slidesPerView!=="auto"&&s.slidesPerView%1!==0,k=s.snapToSlideEdge&&!s.loop&&(s.slidesPerView==="auto"||C);let S=d.length;if(k){let z;if(s.slidesPerView==="auto"){z=1;let H=0;for(let Y=f.length-1;Y>=0&&(H+=f[Y]+(Y<f.length-1?_:0),H<=m);Y-=1)z=f.length-Y}else z=Math.floor(s.slidesPerView);S=Math.max(u-z,0)}const $=[];for(let z=0;z<d.length;z+=1){let H=d[z];s.roundLengths&&(H=Math.floor(H)),k?z<=S&&$.push(H):d[z]<=e.virtualSize-m&&$.push(H)}d=$,Math.floor(e.virtualSize-m)-Math.floor(d[d.length-1])>1&&(k||d.push(e.virtualSize-m))}if(l&&s.loop){const C=f[0]+_;if(s.slidesPerGroup>1){const k=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),S=C*s.slidesPerGroup;for(let $=0;$<k;$+=1)d.push(d[d.length-1]+S)}for(let k=0;k<e.virtual.slidesBefore+e.virtual.slidesAfter;k+=1)s.slidesPerGroup===1&&d.push(d[d.length-1]+C),p.push(p[p.length-1]+C),e.virtualSize+=C}if(d.length===0&&(d=[0]),_!==0){const C=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");c.filter((k,S)=>!s.cssMode||s.loop?!0:S!==c.length-1).forEach(k=>{k.style[C]=`${_}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let C=0;f.forEach(S=>{C+=S+(_||0)}),C-=_;const k=C>m?C-m:0;d=d.map(S=>S<=0?-g:S>k?k+b:S)}if(s.centerInsufficientSlides){let C=0;if(f.forEach(k=>{C+=k+(_||0)}),C-=_,C<m){const k=(m-C)/2;d.forEach((S,$)=>{d[$]=S-k}),p.forEach((S,$)=>{p[$]=S+k})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:p,slidesSizesGrid:f}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){qs(a,"--swiper-centered-offset-before",`${-d[0]}px`),qs(a,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const C=-e.snapGrid[0],k=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(S=>S+C),e.slidesGrid=e.slidesGrid.map(S=>S+k)}if(u!==i&&e.emit("slidesLengthChange"),d.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==h&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const C=`${s.containerModifierClass}backface-hidden`,k=e.el.classList.contains(C);u<=s.maxBackfaceHiddenSlides?k||e.el.classList.add(C):k&&e.el.classList.remove(C)}}function ib(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let n=0,r;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>a?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{s.push(l)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const l=t.activeIndex+r;if(l>t.slides.length&&!a)break;s.push(o(l))}else s.push(o(t.activeIndex));for(r=0;r<s.length;r+=1)if(typeof s[r]<"u"){const l=s[r].offsetHeight;n=l>n?l:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function lb(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()}const Sl=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function cb(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:n,snapGrid:r}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;n&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=s.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let i=0;i<a.length;i+=1){const c=a[i];let u=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(u-=a[0].swiperSlideOffset);const d=(o+(s.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),p=(o-r[0]+(s.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),f=-(o-u),g=f+t.slidesSizesGrid[i],b=f>=0&&f<=t.size-t.slidesSizesGrid[i],v=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;v&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(i)),Sl(c,v,s.slideVisibleClass),Sl(c,b,s.slideFullyVisibleClass),c.progress=n?-d:d,c.originalProgress=n?-p:p}}function db(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:r,isEnd:o,progressLoop:l}=t;const i=r,c=o;if(a===0)n=0,r=!0,o=!0;else{n=(e-t.minTranslate())/a;const u=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;r=u||n<=0,o=d||n>=1,u&&(n=0),d&&(n=1)}if(s.loop){const u=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[u],f=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],b=Math.abs(e);b>=p?l=(b-p)/g:l=(b+g-f)/g,l>1&&(l-=1)}Object.assign(t,{progress:n,progressLoop:l,isBeginning:r,isEnd:o}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!i&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(i&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",n)}const Qr=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function ub(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:n}=e,r=e.virtual&&s.virtual.enabled,o=e.grid&&s.grid&&s.grid.rows>1,l=d=>Ft(a,`.${s.slideClass}${d}, swiper-slide${d}`)[0];let i,c,u;if(r)if(s.loop){let d=n-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),i=l(`[data-swiper-slide-index="${d}"]`)}else i=l(`[data-swiper-slide-index="${n}"]`);else o?(i=t.find(d=>d.column===n),u=t.find(d=>d.column===n+1),c=t.find(d=>d.column===n-1)):i=t[n];i&&(o||(u=Qg(i,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!u&&(u=t[0]),c=Xg(i,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(d=>{Qr(d,d===i,s.slideActiveClass),Qr(d,d===u,s.slideNextClass),Qr(d,d===c,s.slidePrevClass)}),e.emitSlidesClasses()}const Fn=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(s());if(a){let n=a.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(a.shadowRoot?n=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(n=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},Zr=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Do=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=n,l=[o-t];l.push(...Array.from({length:t}).map((i,c)=>o+a+c)),e.slides.forEach((i,c)=>{l.includes(i.column)&&Zr(e,c)});return}const r=n+a-1;if(e.params.rewind||e.params.loop)for(let o=n-t;o<=r+t;o+=1){const l=(o%s+s)%s;(l<n||l>r)&&Zr(e,l)}else for(let o=Math.max(n-t,0);o<=Math.min(r+t,s-1);o+=1)o!==n&&(o>r||o<n)&&Zr(e,o)};function pb(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let n;for(let r=0;r<t.length;r+=1)typeof t[r+1]<"u"?a>=t[r]&&a<t[r+1]-(t[r+1]-t[r])/2?n=r:a>=t[r]&&a<t[r+1]&&(n=r+1):a>=t[r]&&(n=r);return s.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function fb(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:n,activeIndex:r,realIndex:o,snapIndex:l}=t;let i=e,c;const u=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof i>"u"&&(i=pb(t)),a.indexOf(s)>=0)c=a.indexOf(s);else{const f=Math.min(n.slidesPerGroupSkip,i);c=f+Math.floor((i-f)/n.slidesPerGroup)}if(c>=a.length&&(c=a.length-1),i===r&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(i===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(i);return}const d=t.grid&&n.grid&&n.grid.rows>1;let p;if(t.virtual&&n.virtual.enabled)n.loop?p=u(i):p=i;else if(d){const f=t.slides.find(b=>b.column===i);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),p=Math.floor(g/n.grid.rows)}else if(t.slides[i]){const f=t.slides[i].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=i}else p=i;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:r,activeIndex:i}),t.initialized&&Do(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function hb(e,t){const s=this,a=s.params;let n=e.closest(`.${a.slideClass}, swiper-slide`);!n&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!n&&l.matches&&l.matches(`.${a.slideClass}, swiper-slide`)&&(n=l)});let r=!1,o;if(n){for(let l=0;l<s.slides.length;l+=1)if(s.slides[l]===n){r=!0,o=l;break}}if(n&&r)s.clickedSlide=n,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=o;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}a.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var mb={updateSize:rb,updateSlides:ob,updateAutoHeight:ib,updateSlidesOffset:lb,updateSlidesProgress:cb,updateProgress:db,updateSlidesClasses:ub,updateActiveIndex:fb,updateClickedSlide:hb};function gb(e=this.isHorizontal()?"x":"y"){const t=this,{params:s,rtlTranslate:a,translate:n,wrapperEl:r}=t;if(s.virtualTranslate)return a?-n:n;if(s.cssMode)return n;let o=Kg(r,e);return o+=t.cssOverflowAdjustment(),a&&(o=-o),o||0}function bb(e,t){const s=this,{rtlTranslate:a,params:n,wrapperEl:r,progress:o}=s;let l=0,i=0;const c=0;s.isHorizontal()?l=a?-e:e:i=e,n.roundLengths&&(l=Math.floor(l),i=Math.floor(i)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?l:i,n.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-l:-i:n.virtualTranslate||(s.isHorizontal()?l-=s.cssOverflowAdjustment():i-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${i}px, ${c}px)`);let u;const d=s.maxTranslate()-s.minTranslate();d===0?u=0:u=(e-s.minTranslate())/d,u!==o&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function vb(){return-this.snapGrid[0]}function _b(){return-this.snapGrid[this.snapGrid.length-1]}function yb(e=0,t=this.params.speed,s=!0,a=!0,n){const r=this,{params:o,wrapperEl:l}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const i=r.minTranslate(),c=r.maxTranslate();let u;if(a&&e>i?u=i:a&&e<c?u=c:u=e,r.updateProgress(u),o.cssMode){const d=r.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return Nu({swiper:r,targetPosition:-u,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(r.setTransition(0),r.setTranslate(u),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(u),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var wb={getTranslate:gb,setTranslate:bb,minTranslate:vb,maxTranslate:_b,translateTo:yb};function xb(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function ju({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:n,previousIndex:r}=e;let o=s;o||(n>r?o="next":n<r?o="prev":o="reset"),e.emit(`transition${a}`),t&&o==="reset"?e.emit(`slideResetTransition${a}`):t&&n!==r&&(e.emit(`slideChangeTransition${a}`),o==="next"?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`))}function Tb(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),ju({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function Sb(e=!0,t){const s=this,{params:a}=s;s.animating=!1,!a.cssMode&&(s.setTransition(0),ju({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var kb={setTransition:xb,transitionStart:Tb,transitionEnd:Sb};function Eb(e=0,t,s=!0,a,n){typeof e=="string"&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:i,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:p,wrapperEl:f,enabled:g}=r;if(!g&&!a&&!n||r.destroyed||r.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=r.params.speed);const b=Math.min(r.params.slidesPerGroupSkip,o);let v=b+Math.floor((o-b)/r.params.slidesPerGroup);v>=i.length&&(v=i.length-1);const h=-i[v];if(l.normalizeSlideIndex)for(let E=0;E<c.length;E+=1){const I=-Math.floor(h*100),L=Math.floor(c[E]*100),C=Math.floor(c[E+1]*100);typeof c[E+1]<"u"?I>=L&&I<C-(C-L)/2?o=E:I>=L&&I<C&&(o=E+1):I>=L&&(o=E)}if(r.initialized&&o!==d&&(!r.allowSlideNext&&(p?h>r.translate&&h>r.minTranslate():h<r.translate&&h<r.minTranslate())||!r.allowSlidePrev&&h>r.translate&&h>r.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(h);let m;o>d?m="next":o<d?m="prev":m="reset";const _=r.virtual&&r.params.virtual.enabled;if(!(_&&n)&&(p&&-h===r.translate||!p&&h===r.translate))return r.updateActiveIndex(o),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),l.effect!=="slide"&&r.setTranslate(h),m!=="reset"&&(r.transitionStart(s,m),r.transitionEnd(s,m)),!1;if(l.cssMode){const E=r.isHorizontal(),I=p?h:-h;if(t===0)_&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),_&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[E?"scrollLeft":"scrollTop"]=I})):f[E?"scrollLeft":"scrollTop"]=I,_&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Nu({swiper:r,targetPosition:I,side:E?"left":"top"}),!0;f.scrollTo({[E?"left":"top"]:I,behavior:"smooth"})}return!0}const x=Hu().isSafari;return _&&!n&&x&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(t),r.setTranslate(h),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,m),t===0?r.transitionEnd(s,m):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(I){!r||r.destroyed||I.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,m))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Ab(e=0,t,s=!0,a){typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof t>"u"&&(t=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let o=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)o=o+n.virtual.slidesBefore;else{let l;if(r){const b=o*n.params.grid.rows;l=n.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===b).column}else l=n.getSlideIndexByData(o);const i=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=n.params,p=c||!!u||!!d;let f=n.params.slidesPerView;f==="auto"?f=n.slidesPerViewDynamic():(f=Math.ceil(parseFloat(n.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let g=i-l<f;if(p&&(g=g||l<Math.ceil(f/2)),a&&p&&n.params.slidesPerView!=="auto"&&!r&&(g=!1),g){const b=p?l<n.activeIndex?"prev":"next":l-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:b,slideTo:!0,activeSlideIndex:b==="next"?l+1:l-i+1,slideRealIndex:b==="next"?n.realIndex:void 0})}if(r){const b=o*n.params.grid.rows;o=n.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===b).column}else o=n.getSlideIndexByData(o)}return requestAnimationFrame(()=>{n.slideTo(o,t,s,a)}),n}function Cb(e,t=!0,s){const a=this,{enabled:n,params:r,animating:o}=a;if(!n||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let l=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const i=a.activeIndex<r.slidesPerGroupSkip?1:l,c=a.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+i,e,t,s)}),!0}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+i,e,t,s)}function Pb(e,t=!0,s){const a=this,{params:n,snapGrid:r,slidesGrid:o,rtlTranslate:l,enabled:i,animating:c}=a;if(!i||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const u=a.virtual&&n.virtual.enabled;if(n.loop){if(c&&!u&&n.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const d=l?a.translate:-a.translate;function p(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const f=p(d),g=r.map(m=>p(m)),b=n.freeMode&&n.freeMode.enabled;let v=r[g.indexOf(f)-1];if(typeof v>"u"&&(n.cssMode||b)){let m;r.forEach((_,y)=>{f>=_&&(m=y)}),typeof m<"u"&&(v=b?r[m]:r[m>0?m-1:m])}let h=0;if(typeof v<"u"&&(h=o.indexOf(v),h<0&&(h=a.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(h=h-a.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),n.rewind&&a.isBeginning){const m=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(m,e,t,s)}else if(n.loop&&a.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{a.slideTo(h,e,t,s)}),!0;return a.slideTo(h,e,t,s)}function Ob(e,t=!0,s){const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,s)}function $b(e,t=!0,s,a=.5){const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let r=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,r),l=o+Math.floor((r-o)/n.params.slidesPerGroup),i=n.rtlTranslate?n.translate:-n.translate;if(i>=n.snapGrid[l]){const c=n.snapGrid[l],u=n.snapGrid[l+1];i-c>(u-c)*a&&(r+=n.params.slidesPerGroup)}else{const c=n.snapGrid[l-1],u=n.snapGrid[l];i-c<=(u-c)*a&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,t,s)}function Mb(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.getSlideIndexWhenGrid(e.clickedIndex),r;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):n>(l?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),n=e.getSlideIndex(Ft(s,`${o}[data-swiper-slide-index="${r}"]`)[0]),Iu(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var Lb={slideTo:Eb,slideToLoop:Ab,slideNext:Cb,slidePrev:Pb,slideReset:Ob,slideToClosest:$b,slideToClickedSlide:Mb};function Rb(e,t){const s=this,{params:a,slidesEl:n}=s;if(!a.loop||s.virtual&&s.params.virtual.enabled)return;const r=()=>{Ft(n,`.${a.slideClass}, swiper-slide`).forEach((g,b)=>{g.setAttribute("data-swiper-slide-index",b)})},o=()=>{const f=Ft(n,`.${a.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(s.recalcSlides(),s.updateSlides())},l=s.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||l)&&o();const i=a.slidesPerGroup*(l?a.grid.rows:1),c=s.slides.length%i!==0,u=l&&s.slides.length%a.grid.rows!==0,d=f=>{for(let g=0;g<f;g+=1){const b=s.isElement?sr("swiper-slide",[a.slideBlankClass]):sr("div",[a.slideClass,a.slideBlankClass]);s.slidesEl.append(b)}};if(c){if(a.loopAddBlankSlides){const f=i-s.slides.length%i;d(f),s.recalcSlides(),s.updateSlides()}else tr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(u){if(a.loopAddBlankSlides){const f=a.grid.rows-s.slides.length%a.grid.rows;d(f),s.recalcSlides(),s.updateSlides()}else tr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const p=a.centeredSlides||!!a.slidesOffsetBefore||!!a.slidesOffsetAfter;s.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function Db({slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:a,activeSlideIndex:n,initial:r,byController:o,byMousewheel:l}={}){const i=this;if(!i.params.loop)return;i.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:p,params:f}=i,{centeredSlides:g,slidesOffsetBefore:b,slidesOffsetAfter:v,initialSlide:h}=f,m=g||!!b||!!v;if(i.allowSlidePrev=!0,i.allowSlideNext=!0,i.virtual&&f.virtual.enabled){t&&(!m&&i.snapIndex===0?i.slideTo(i.virtual.slides.length,0,!1,!0):m&&i.snapIndex<f.slidesPerView?i.slideTo(i.virtual.slides.length+i.snapIndex,0,!1,!0):i.snapIndex===i.snapGrid.length-1&&i.slideTo(i.virtual.slidesBefore,0,!1,!0)),i.allowSlidePrev=u,i.allowSlideNext=d,i.emit("loopFix");return}let _=f.slidesPerView;_==="auto"?_=i.slidesPerViewDynamic():(_=Math.ceil(parseFloat(f.slidesPerView,10)),m&&_%2===0&&(_=_+1));const y=f.slidesPerGroupAuto?_:f.slidesPerGroup;let w=m?Math.max(y,Math.ceil(_/2)):y;w%y!==0&&(w+=y-w%y),w+=f.loopAdditionalSlides,i.loopedSlides=w;const x=i.grid&&f.grid&&f.grid.rows>1;c.length<_+w||i.params.effect==="cards"&&c.length<_+w*2?tr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):x&&f.grid.fill==="row"&&tr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const E=[],I=[],L=x?Math.ceil(c.length/f.grid.rows):c.length,C=r&&L-h<_&&!m;let k=C?h:i.activeIndex;typeof n>"u"?n=i.getSlideIndex(c.find(W=>W.classList.contains(f.slideActiveClass))):k=n;const S=s==="next"||!s,$=s==="prev"||!s;let z=0,H=0;const J=(x?c[n].column:n)+(m&&typeof a>"u"?-_/2+.5:0);if(J<w){z=Math.max(w-J,y);for(let W=0;W<w-J;W+=1){const ie=W-Math.floor(W/L)*L;if(x){const X=L-ie-1;for(let V=c.length-1;V>=0;V-=1)c[V].column===X&&E.push(V)}else E.push(L-ie-1)}}else if(J+_>L-w){H=Math.max(J-(L-w*2),y),C&&(H=Math.max(H,_-L+h+1));for(let W=0;W<H;W+=1){const ie=W-Math.floor(W/L)*L;x?c.forEach((X,V)=>{X.column===ie&&I.push(V)}):I.push(ie)}}if(i.__preventObserver__=!0,requestAnimationFrame(()=>{i.__preventObserver__=!1}),i.params.effect==="cards"&&c.length<_+w*2&&(I.includes(n)&&I.splice(I.indexOf(n),1),E.includes(n)&&E.splice(E.indexOf(n),1)),$&&E.forEach(W=>{c[W].swiperLoopMoveDOM=!0,p.prepend(c[W]),c[W].swiperLoopMoveDOM=!1}),S&&I.forEach(W=>{c[W].swiperLoopMoveDOM=!0,p.append(c[W]),c[W].swiperLoopMoveDOM=!1}),i.recalcSlides(),f.slidesPerView==="auto"?i.updateSlides():x&&(E.length>0&&$||I.length>0&&S)&&i.slides.forEach((W,ie)=>{i.grid.updateSlide(ie,W,i.slides)}),f.watchSlidesProgress&&i.updateSlidesOffset(),t){if(E.length>0&&$){if(typeof e>"u"){const W=i.slidesGrid[k],X=i.slidesGrid[k+z]-W;l?i.setTranslate(i.translate-X):(i.slideTo(k+Math.ceil(z),0,!1,!0),a&&(i.touchEventsData.startTranslate=i.touchEventsData.startTranslate-X,i.touchEventsData.currentTranslate=i.touchEventsData.currentTranslate-X))}else if(a){const W=x?E.length/f.grid.rows:E.length;i.slideTo(i.activeIndex+W,0,!1,!0),i.touchEventsData.currentTranslate=i.translate}}else if(I.length>0&&S)if(typeof e>"u"){const W=i.slidesGrid[k],X=i.slidesGrid[k-H]-W;l?i.setTranslate(i.translate-X):(i.slideTo(k-H,0,!1,!0),a&&(i.touchEventsData.startTranslate=i.touchEventsData.startTranslate-X,i.touchEventsData.currentTranslate=i.touchEventsData.currentTranslate-X))}else{const W=x?I.length/f.grid.rows:I.length;i.slideTo(i.activeIndex-W,0,!1,!0)}}if(i.allowSlidePrev=u,i.allowSlideNext=d,i.controller&&i.controller.control&&!o){const W={slideRealIndex:e,direction:s,setTranslate:a,activeSlideIndex:n,byController:!0};Array.isArray(i.controller.control)?i.controller.control.forEach(ie=>{!ie.destroyed&&ie.params.loop&&ie.loopFix({...W,slideTo:ie.params.slidesPerView===f.slidesPerView?t:!1})}):i.controller.control instanceof i.constructor&&i.controller.control.params.loop&&i.controller.control.loopFix({...W,slideTo:i.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}i.emit("loopFix")}function Ib(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;a[r]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),a.forEach(n=>{s.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Nb={loopCreate:Rb,loopFix:Db,loopDestroy:Ib};function Bb(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Fb(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var zb={setGrabCursor:Bb,unsetGrabCursor:Fb};function Hb(e,t=this){function s(a){if(!a||a===Ht()||a===dt())return null;a.assignedSlot&&(a=a.assignedSlot);const n=a.closest(e);return!n&&!a.getRootNode?null:n||s(a.getRootNode().host)}return s(t)}function kl(e,t,s){const a=dt(),{params:n}=e,r=n.edgeSwipeDetection,o=n.edgeSwipeThreshold;return r&&(s<=o||s>=a.innerWidth-o)?r==="prevent"?(t.preventDefault(),!0):!1:!0}function jb(e){const t=this,s=Ht();let a=e;a.originalEvent&&(a=a.originalEvent);const n=t.touchEventsData;if(a.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==a.pointerId)return;n.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(n.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){kl(t,a,a.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:l}=t;if(!l||!r.simulateTouch&&a.pointerType==="mouse"||t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let i=a.target;if(r.touchEventsTarget==="wrapper"&&!Jg(i,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||n.isTouched&&n.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",u=a.composedPath?a.composedPath():a.path;c&&a.target&&a.target.shadowRoot&&u&&(i=u[0]);const d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(a.target&&a.target.shadowRoot);if(r.noSwiping&&(p?Hb(d,i):i.closest(d))){t.allowClick=!0;return}if(r.swipeHandler&&!i.closest(r.swipeHandler))return;o.currentX=a.pageX,o.currentY=a.pageY;const f=o.currentX,g=o.currentY;if(!kl(t,a,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=g,n.touchStartTime=er(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let b=!0;i.matches(n.focusableElements)&&(b=!1,i.nodeName==="SELECT"&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==i&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!i.matches(n.focusableElements))&&s.activeElement.blur();const v=b&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||v)&&!i.isContentEditable&&a.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function Ub(e){const t=Ht(),s=this,a=s.touchEventsData,{params:n,touches:r,rtlTranslate:o,enabled:l}=s;if(!l||!n.simulateTouch&&e.pointerType==="mouse")return;let i=e;if(i.originalEvent&&(i=i.originalEvent),i.type==="pointermove"&&(a.touchId!==null||i.pointerId!==a.pointerId))return;let c;if(i.type==="touchmove"){if(c=[...i.changedTouches].find(w=>w.identifier===a.touchId),!c||c.identifier!==a.touchId)return}else c=i;if(!a.isTouched){a.startMoving&&a.isScrolling&&s.emit("touchMoveOpposite",i);return}const u=c.pageX,d=c.pageY;if(i.preventedByNestedSwiper){r.startX=u,r.startY=d;return}if(!s.allowTouchMove){i.target.matches(a.focusableElements)||(s.allowClick=!1),a.isTouched&&(Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d}),a.touchStartTime=er());return}if(n.touchReleaseOnEdges&&!n.loop)if(s.isVertical()){if(d<r.startY&&s.translate<=s.maxTranslate()||d>r.startY&&s.translate>=s.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(o&&(u>r.startX&&-s.translate<=s.maxTranslate()||u<r.startX&&-s.translate>=s.minTranslate()))return;if(!o&&(u<r.startX&&s.translate<=s.maxTranslate()||u>r.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==i.target&&i.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&i.target===t.activeElement&&i.target.matches(a.focusableElements)){a.isMoved=!0,s.allowClick=!1;return}a.allowTouchCallbacks&&s.emit("touchMove",i),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=u,r.currentY=d;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(p**2+f**2)<s.params.threshold)return;if(typeof a.isScrolling>"u"){let w;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?a.isScrolling=!1:p*p+f*f>=25&&(w=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,a.isScrolling=s.isHorizontal()?w>n.touchAngle:90-w>n.touchAngle)}if(a.isScrolling&&s.emit("touchMoveOpposite",i),typeof a.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(a.startMoving=!0),a.isScrolling||i.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;s.allowClick=!1,!n.cssMode&&i.cancelable&&i.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&i.stopPropagation();let g=s.isHorizontal()?p:f,b=s.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),b=Math.abs(b)*(o?1:-1)),r.diff=g,g*=n.touchRatio,o&&(g=-g,b=-b);const v=s.touchesDirection;s.swipeDirection=g>0?"prev":"next",s.touchesDirection=b>0?"prev":"next";const h=s.params.loop&&!n.cssMode,m=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!a.isMoved){if(h&&m&&s.loopFix({direction:s.swipeDirection}),a.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(w)}a.allowMomentumBounce=!1,n.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",i)}if(new Date().getTime(),n._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&v!==s.touchesDirection&&h&&m&&Math.abs(g)>=1){Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}s.emit("sliderMove",i),a.isMoved=!0,a.currentTranslate=g+a.startTranslate;let _=!0,y=n.resistanceRatio;if(n.touchReleaseOnEdges&&(y=0),g>0?(h&&m&&a.allowThresholdMove&&a.currentTranslate>(n.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(n.slidesPerView!=="auto"&&s.slides.length-n.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>s.minTranslate()&&(_=!1,n.resistance&&(a.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+a.startTranslate+g)**y))):g<0&&(h&&m&&a.allowThresholdMove&&a.currentTranslate<(n.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(n.slidesPerView!=="auto"&&s.slides.length-n.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(n.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),a.currentTranslate<s.maxTranslate()&&(_=!1,n.resistance&&(a.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-a.startTranslate-g)**y))),_&&(i.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(a.currentTranslate=a.startTranslate),n.threshold>0)if(Math.abs(g)>n.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,a.currentTranslate=a.startTranslate,r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{a.currentTranslate=a.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&s.freeMode||n.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(a.currentTranslate),s.setTranslate(a.currentTranslate))}function qb(e){const t=this,s=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let n;if(a.type==="touchend"||a.type==="touchcancel"){if(n=[...a.changedTouches].find(w=>w.identifier===s.touchId),!n||n.identifier!==s.touchId)return}else{if(s.touchId!==null||a.pointerId!==s.pointerId)return;n=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:o,touches:l,rtlTranslate:i,slidesGrid:c,enabled:u}=t;if(!u||!o.simulateTouch&&a.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",a),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=er(),p=d-s.touchStartTime;if(t.allowClick){const w=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(w&&w[0]||a.target,w),t.emit("tap click",a),p<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(s.lastClickTime=er(),Iu(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||l.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let f;if(o.followFinger?f=i?t.translate:-t.translate:f=-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let b=0,v=t.slidesSizesGrid[0];for(let w=0;w<c.length;w+=w<o.slidesPerGroupSkip?1:o.slidesPerGroup){const x=w<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[w+x]<"u"?(g||f>=c[w]&&f<c[w+x])&&(b=w,v=c[w+x]-c[w]):(g||f>=c[w])&&(b=w,v=c[c.length-1]-c[c.length-2])}let h=null,m=null;o.rewind&&(t.isBeginning?m=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const _=(f-c[b])/v,y=b<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(_>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?h:b+y):t.slideTo(b)),t.swipeDirection==="prev"&&(_>1-o.longSwipesRatio?t.slideTo(b+y):m!==null&&_<0&&Math.abs(_)>o.longSwipesRatio?t.slideTo(m):t.slideTo(b))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(b+y):t.slideTo(b):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:b+y),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:b))}}function El(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:n,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Vb(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Gb(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const r=e.maxTranslate()-e.minTranslate();r===0?n=0:n=(e.translate-e.minTranslate())/r,n!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Kb(e){const t=this;Fn(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Yb(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Uu=(e,t)=>{const s=Ht(),{params:a,el:n,wrapperEl:r,device:o}=e,l=!!a.nested,i=t==="on"?"addEventListener":"removeEventListener",c=t;!n||typeof n=="string"||(s[i]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),n[i]("touchstart",e.onTouchStart,{passive:!1}),n[i]("pointerdown",e.onTouchStart,{passive:!1}),s[i]("touchmove",e.onTouchMove,{passive:!1,capture:l}),s[i]("pointermove",e.onTouchMove,{passive:!1,capture:l}),s[i]("touchend",e.onTouchEnd,{passive:!0}),s[i]("pointerup",e.onTouchEnd,{passive:!0}),s[i]("pointercancel",e.onTouchEnd,{passive:!0}),s[i]("touchcancel",e.onTouchEnd,{passive:!0}),s[i]("pointerout",e.onTouchEnd,{passive:!0}),s[i]("pointerleave",e.onTouchEnd,{passive:!0}),s[i]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&n[i]("click",e.onClick,!0),a.cssMode&&r[i]("scroll",e.onScroll),a.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",El,!0):e[c]("observerUpdate",El,!0),n[i]("load",e.onLoad,{capture:!0}))};function Wb(){const e=this,{params:t}=e;e.onTouchStart=jb.bind(e),e.onTouchMove=Ub.bind(e),e.onTouchEnd=qb.bind(e),e.onDocumentTouchStart=Yb.bind(e),t.cssMode&&(e.onScroll=Gb.bind(e)),e.onClick=Vb.bind(e),e.onLoad=Kb.bind(e),Uu(e,"on")}function Jb(){Uu(this,"off")}var Xb={attachEvents:Wb,detachEvents:Jb};const Al=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Qb(){const e=this,{realIndex:t,initialized:s,params:a,el:n}=e,r=a.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=Ht(),l=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",i=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:o.querySelector(a.breakpointsBase),c=e.getBreakpoint(r,l,i);if(!c||e.currentBreakpoint===c)return;const d=(c in r?r[c]:void 0)||e.originalParams,p=Al(e,a),f=Al(e,d),g=e.params.grabCursor,b=d.grabCursor,v=a.enabled;p&&!f?(n.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(n.classList.add(`${a.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&a.grid.fill==="column")&&n.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!b?e.unsetGrabCursor():!g&&b&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(x=>{if(typeof d[x]>"u")return;const E=a[x]&&a[x].enabled,I=d[x]&&d[x].enabled;E&&!I&&e[x].disable(),!E&&I&&e[x].enable()});const h=d.direction&&d.direction!==a.direction,m=a.loop&&(d.slidesPerView!==a.slidesPerView||h),_=a.loop;h&&s&&e.changeDirection(),gt(e.params,d);const y=e.params.enabled,w=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!y?e.disable():!v&&y&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",d),s&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!_&&w?(e.loopCreate(t),e.updateSlides()):_&&!w&&e.loopDestroy()),e.emit("breakpoint",d)}function Zb(e,t="window",s){if(!e||t==="container"&&!s)return;let a=!1;const n=dt(),r=t==="window"?n.innerHeight:s.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const i=parseFloat(l.substr(1));return{value:r*i,point:l}}return{value:l,point:l}});o.sort((l,i)=>parseInt(l.value,10)-parseInt(i.value,10));for(let l=0;l<o.length;l+=1){const{point:i,value:c}=o[l];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(a=i):c<=s.clientWidth&&(a=i)}return a||"max"}var ev={setBreakpoint:Qb,getBreakpoint:Zb};function tv(e,t){const s=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(n=>{a[n]&&s.push(t+n)}):typeof a=="string"&&s.push(t+a)}),s}function sv(){const e=this,{classNames:t,params:s,rtl:a,el:n,device:r}=e,o=tv(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...o),n.classList.add(...t),e.emitContainerClasses()}function av(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var nv={addClasses:sv,removeClasses:av};function rv(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const n=e.slides.length-1,r=e.slidesGrid[n]+e.slidesSizesGrid[n]+a*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var ov={checkOverflow:rv},Cl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function iv(e,t){return function(a={}){const n=Object.keys(a)[0],r=a[n];if(typeof r!="object"||r===null){gt(t,a);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in r)){gt(t,a);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),gt(t,a)}}const eo={eventsEmitter:nb,update:mb,translate:wb,transition:kb,slide:Lb,loop:Nb,grabCursor:zb,events:Xb,breakpoints:ev,checkOverflow:ov,classes:nv},to={};class Tt{constructor(...t){let s,a;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?a=t[0]:[s,a]=t,a||(a={}),a=gt({},a),s&&!a.el&&(a.el=s);const n=Ht();if(a.el&&typeof a.el=="string"&&n.querySelectorAll(a.el).length>1){const i=[];return n.querySelectorAll(a.el).forEach(c=>{const u=gt({},a,{el:c});i.push(new Tt(u))}),i}const r=this;r.__swiper__=!0,r.support=Fu(),r.device=zu({userAgent:a.userAgent}),r.browser=Hu(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],a.modules&&Array.isArray(a.modules)&&a.modules.forEach(i=>{typeof i=="function"&&r.modules.indexOf(i)<0&&r.modules.push(i)});const o={};r.modules.forEach(i=>{i({params:a,swiper:r,extendParams:iv(a,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const l=gt({},Cl,o);return r.params=gt({},l,to,a),r.originalParams=gt({},r.params),r.passedParams=gt({},a),r.params&&r.params.on&&Object.keys(r.params.on).forEach(i=>{r.on(i,r.params.on[i])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:s,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:a}=this,n=Ft(s,`.${a.slideClass}, swiper-slide`),r=ar(n[0]);return ar(t)-r}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:a}=t;t.slides=Ft(s,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const a=this;t=Math.min(Math.max(t,0),1);const n=a.minTranslate(),o=(a.maxTranslate()-n)*t+n;a.translateTo(o,typeof s>"u"?0:s),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(a=>{const n=t.getSlideClasses(a);s.push({slideEl:a,classNames:n}),t.emit("_slideClass",a,n)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t="current",s=!1){const a=this,{params:n,slides:r,slidesGrid:o,slidesSizesGrid:l,size:i,activeIndex:c}=a;let u=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let d=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let f=c+1;f<r.length;f+=1)r[f]&&!p&&(d+=Math.ceil(r[f].swiperSlideSize),u+=1,d>i&&(p=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!p&&(d+=r[f].swiperSlideSize,u+=1,d>i&&(p=!0))}else if(t==="current")for(let d=c+1;d<r.length;d+=1)(s?o[d]+l[d]-o[c]<i:o[d]-o[c]<i)&&(u+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<i&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Fn(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let r;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)n(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const o=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;r=t.slideTo(o.length-1,0,!1,!0)}else r=t.slideTo(t.activeIndex,0,!1,!0);r||n()}a.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s=!0){const a=this,n=a.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${n}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(r=>{t==="vertical"?r.style.width="":r.style.height=""}),a.emit("changeDirection"),s&&a.update()),a}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let a=t||s.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=s,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const n=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(n()):Ft(a,n())[0];return!o&&s.params.createElements&&(o=sr("div",s.params.wrapperClass),a.append(o),Ft(a,`.${s.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(s,{el:a,wrapperEl:o,slidesEl:s.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:o,hostEl:s.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||gs(a,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||gs(a,"direction")==="rtl"),wrongRTL:gs(o,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const n=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?Fn(s,r):r.addEventListener("load",o=>{Fn(s,o.target)})}),Do(s),s.initialized=!0,Do(s),s.emit("init"),s.emit("afterInit"),s}destroy(t=!0,s=!0){const a=this,{params:n,el:r,wrapperEl:o,slides:l}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),n.loop&&a.loopDestroy(),s&&(a.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),l&&l.length&&l.forEach(i=>{i.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),i.removeAttribute("style"),i.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(i=>{a.off(i)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),Vg(a)),a.destroyed=!0),null}static extendDefaults(t){gt(to,t)}static get extendedDefaults(){return to}static get defaults(){return Cl}static installModule(t){Tt.prototype.__modules__||(Tt.prototype.__modules__=[]);const s=Tt.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>Tt.installModule(s)),Tt):(Tt.installModule(t),Tt)}}Object.keys(eo).forEach(e=>{Object.keys(eo[e]).forEach(t=>{Tt.prototype[t]=eo[e][t]})});Tt.use([sb,ab]);function lv(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach(n=>{if(!s[n]&&s.auto===!0){let r=Ft(e.el,`.${a[n]}`)[0];r||(r=sr("div",a[n]),r.className=a[n],e.el.append(r)),s[n]=r,t[n]=r}}),s}function da(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function cv({swiper:e,extendParams:t,on:s,emit:a}){const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let r,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function i(h,m){const{bulletActiveClass:_}=e.params.pagination;h&&(h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${_}-${m}`),h=h[`${m==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${_}-${m}-${m}`)))}function c(h,m,_){if(h=h%_,m=m%_,m===h+1)return"next";if(m===h-1)return"previous"}function u(h){const m=h.target.closest(da(e.params.pagination.bulletClass));if(!m)return;h.preventDefault();const _=ar(m)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===_)return;const y=c(e.realIndex,_,e.slides.length);y==="next"?e.slideNext():y==="previous"?e.slidePrev():e.slideToLoop(_)}else e.slideTo(_)}function d(){const h=e.rtl,m=e.params.pagination;if(l())return;let _=e.pagination.el;_=Gt(_);let y,w;const x=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,E=e.params.loop?Math.ceil(x/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(w=e.previousRealIndex||0,y=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(y=e.snapIndex,w=e.previousSnapIndex):(w=e.previousIndex||0,y=e.activeIndex||0),m.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const I=e.pagination.bullets;let L,C,k;if(m.dynamicBullets&&(r=Ro(I[0],e.isHorizontal()?"width":"height"),_.forEach(S=>{S.style[e.isHorizontal()?"width":"height"]=`${r*(m.dynamicMainBullets+4)}px`}),m.dynamicMainBullets>1&&w!==void 0&&(o+=y-(w||0),o>m.dynamicMainBullets-1?o=m.dynamicMainBullets-1:o<0&&(o=0)),L=Math.max(y-o,0),C=L+(Math.min(I.length,m.dynamicMainBullets)-1),k=(C+L)/2),I.forEach(S=>{const $=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(z=>`${m.bulletActiveClass}${z}`)].map(z=>typeof z=="string"&&z.includes(" ")?z.split(" "):z).flat();S.classList.remove(...$)}),_.length>1)I.forEach(S=>{const $=ar(S);$===y?S.classList.add(...m.bulletActiveClass.split(" ")):e.isElement&&S.setAttribute("part","bullet"),m.dynamicBullets&&($>=L&&$<=C&&S.classList.add(...`${m.bulletActiveClass}-main`.split(" ")),$===L&&i(S,"prev"),$===C&&i(S,"next"))});else{const S=I[y];if(S&&S.classList.add(...m.bulletActiveClass.split(" ")),e.isElement&&I.forEach(($,z)=>{$.setAttribute("part",z===y?"bullet-active":"bullet")}),m.dynamicBullets){const $=I[L],z=I[C];for(let H=L;H<=C;H+=1)I[H]&&I[H].classList.add(...`${m.bulletActiveClass}-main`.split(" "));i($,"prev"),i(z,"next")}}if(m.dynamicBullets){const S=Math.min(I.length,m.dynamicMainBullets+4),$=(r*S-r)/2-k*r,z=h?"right":"left";I.forEach(H=>{H.style[e.isHorizontal()?z:"top"]=`${$}px`})}}_.forEach((I,L)=>{if(m.type==="fraction"&&(I.querySelectorAll(da(m.currentClass)).forEach(C=>{C.textContent=m.formatFractionCurrent(y+1)}),I.querySelectorAll(da(m.totalClass)).forEach(C=>{C.textContent=m.formatFractionTotal(E)})),m.type==="progressbar"){let C;m.progressbarOpposite?C=e.isHorizontal()?"vertical":"horizontal":C=e.isHorizontal()?"horizontal":"vertical";const k=(y+1)/E;let S=1,$=1;C==="horizontal"?S=k:$=k,I.querySelectorAll(da(m.progressbarFillClass)).forEach(z=>{z.style.transform=`translate3d(0,0,0) scaleX(${S}) scaleY(${$})`,z.style.transitionDuration=`${e.params.speed}ms`})}m.type==="custom"&&m.renderCustom?(Tl(I,m.renderCustom(e,y+1,E)),L===0&&a("paginationRender",I)):(L===0&&a("paginationRender",I),a("paginationUpdate",I)),e.params.watchOverflow&&e.enabled&&I.classList[e.isLocked?"add":"remove"](m.lockClass)})}function p(){const h=e.params.pagination;if(l())return;const m=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let _=e.pagination.el;_=Gt(_);let y="";if(h.type==="bullets"){let w=e.params.loop?Math.ceil(m/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&w>m&&(w=m);for(let x=0;x<w;x+=1)h.renderBullet?y+=h.renderBullet.call(e,x,h.bulletClass):y+=`<${h.bulletElement} ${e.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?y=h.renderFraction.call(e,h.currentClass,h.totalClass):y=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?y=h.renderProgressbar.call(e,h.progressbarFillClass):y=`<span class="${h.progressbarFillClass}"></span>`),e.pagination.bullets=[],_.forEach(w=>{h.type!=="custom"&&Tl(w,y||""),h.type==="bullets"&&e.pagination.bullets.push(...w.querySelectorAll(da(h.bulletClass)))}),h.type!=="custom"&&a("paginationRender",_[0])}function f(){e.params.pagination=lv(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const h=e.params.pagination;if(!h.el)return;let m;typeof h.el=="string"&&e.isElement&&(m=e.el.querySelector(h.el)),!m&&typeof h.el=="string"&&(m=[...document.querySelectorAll(h.el)]),m||(m=h.el),!(!m||m.length===0)&&(e.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(m)&&m.length>1&&(m=[...e.el.querySelectorAll(h.el)],m.length>1&&(m=m.find(_=>Bu(_,".swiper")[0]===e.el))),Array.isArray(m)&&m.length===1&&(m=m[0]),Object.assign(e.pagination,{el:m}),m=Gt(m),m.forEach(_=>{h.type==="bullets"&&h.clickable&&_.classList.add(...(h.clickableClass||"").split(" ")),_.classList.add(h.modifierClass+h.type),_.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(_.classList.add(`${h.modifierClass}${h.type}-dynamic`),o=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&_.classList.add(h.progressbarOppositeClass),h.clickable&&_.addEventListener("click",u),e.enabled||_.classList.add(h.lockClass)}))}function g(){const h=e.params.pagination;if(l())return;let m=e.pagination.el;m&&(m=Gt(m),m.forEach(_=>{_.classList.remove(h.hiddenClass),_.classList.remove(h.modifierClass+h.type),_.classList.remove(e.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(_.classList.remove(...(h.clickableClass||"").split(" ")),_.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(_=>_.classList.remove(...h.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const h=e.params.pagination;let{el:m}=e.pagination;m=Gt(m),m.forEach(_=>{_.classList.remove(h.horizontalClass,h.verticalClass),_.classList.add(e.isHorizontal()?h.horizontalClass:h.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?v():(f(),p(),d())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),s("snapIndexChange",()=>{d()}),s("snapGridLengthChange",()=>{p(),d()}),s("destroy",()=>{g()}),s("enable disable",()=>{let{el:h}=e.pagination;h&&(h=Gt(h),h.forEach(m=>m.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{d()}),s("click",(h,m)=>{const _=m.target,y=Gt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&y&&y.length>0&&!_.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&_===e.navigation.nextEl||e.navigation.prevEl&&_===e.navigation.prevEl))return;const w=y[0].classList.contains(e.params.pagination.hiddenClass);a(w===!0?"paginationShow":"paginationHide"),y.forEach(x=>x.classList.toggle(e.params.pagination.hiddenClass))}});const b=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=Gt(h),h.forEach(m=>m.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),d()},v=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:h}=e.pagination;h&&(h=Gt(h),h.forEach(m=>m.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:b,disable:v,render:p,update:d,init:f,destroy:g})}function dv({swiper:e,extendParams:t,on:s,emit:a,params:n}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,l=n&&n.autoplay?n.autoplay.delay:3e3,i=n&&n.autoplay?n.autoplay.delay:3e3,c,u=new Date().getTime(),d,p,f,g,b,v;function h(J){!e||e.destroyed||!e.wrapperEl||J.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",h),!(v||J.detail&&J.detail.bySwiperTouchMove)&&L())}const m=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(i=c,d=!1);const J=e.autoplay.paused?c:u+i-new Date().getTime();e.autoplay.timeLeft=J,a("autoplayTimeLeft",J,J/l),o=requestAnimationFrame(()=>{m()})},_=()=>{let J;return e.virtual&&e.params.virtual.enabled?J=e.slides.find(ie=>ie.classList.contains("swiper-slide-active")):J=e.slides[e.activeIndex],J?parseInt(J.getAttribute("data-swiper-autoplay"),10):void 0},y=()=>{let J=e.params.autoplay.delay;const W=_();return!Number.isNaN(W)&&W>0&&(J=W),J},w=J=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),m();let W=J;typeof W>"u"&&(W=y(),l=W,i=W),c=W;const ie=e.params.speed,X=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(ie,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,ie,!0,!0),a("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(ie,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,ie,!0,!0),a("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{w()})))};return W>0?(clearTimeout(r),r=setTimeout(()=>{X()},W)):requestAnimationFrame(()=>{X()}),W},x=()=>{u=new Date().getTime(),e.autoplay.running=!0,w(),a("autoplayStart")},E=()=>{e.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),a("autoplayStop")},I=(J,W)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(r),J||(b=!0);const ie=()=>{a("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",h):L()};if(e.autoplay.paused=!0,W){ie();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),ie())},L=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),b?(b=!1,w(c)):w(),e.autoplay.paused=!1,a("autoplayResume"))},C=()=>{if(e.destroyed||!e.autoplay.running)return;const J=Ht();J.visibilityState==="hidden"&&(b=!0,I(!0)),J.visibilityState==="visible"&&L()},k=J=>{J.pointerType==="mouse"&&(b=!0,v=!0,!(e.animating||e.autoplay.paused)&&I(!0))},S=J=>{J.pointerType==="mouse"&&(v=!1,e.autoplay.paused&&L())},$=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",k),e.el.addEventListener("pointerleave",S))},z=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",k),e.el.removeEventListener("pointerleave",S))},H=()=>{Ht().addEventListener("visibilitychange",C)},Y=()=>{Ht().removeEventListener("visibilitychange",C)};s("init",()=>{e.params.autoplay.enabled&&($(),H(),x())}),s("destroy",()=>{z(),Y(),e.autoplay.running&&E()}),s("_freeModeStaticRelease",()=>{(f||b)&&L()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?E():I(!0,!0)}),s("beforeTransitionStart",(J,W,ie)=>{e.destroyed||!e.autoplay.running||(ie||!e.params.autoplay.disableOnInteraction?I(!0,!0):E())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){E();return}p=!0,f=!1,b=!1,g=setTimeout(()=>{b=!0,f=!0,I(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(r),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&L(),f=!1,p=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=y(),l=y())}),Object.assign(e.autoplay,{start:x,stop:E,pause:I,resume:L})}const uv={class:"home-layout"},pv={class:"sticky-header-group"},fv=["data-user-name"],hv={class:"home-tabs",id:"home-tabs--id"},mv={class:"home-tab home-tab--lobby home-tab--active","data-home-tab":"lobby-active"},gv={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},bv={class:"home-tab home-tab--lobby","data-home-tab":"lobby-completed"},vv={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},_v={class:"home-tab home-tab--my home-tab--active","data-home-tab":"my-active"},yv={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},wv={class:"home-tab home-tab--my","data-home-tab":"my-completed"},xv={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Tv={class:"home-tab home-tab--private home-tab--active","data-home-tab":"private-all"},Sv={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},kv={class:"home-tab home-tab--private","data-home-tab":"private-invites"},Ev={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Av={class:"create-cta-banner__content"},Cv={__name:"home_route",setup(e){const t=ct(),s=Te();window.CoreBetSlip=Ru;const a=()=>{t.push({name:"create_tournament_route"})};document.addEventListener("click",u=>{const d=u.target;if(d&&d.dataset?.promotionTopic){const p={timestamp:Date.now(),heroImg:d.dataset.promotionHeroImg||"",caption:d.dataset.promotionCaption||"",tagline:d.dataset.promotionTagline||"",toast:d.dataset.promotionToast||"",topic:d.dataset.promotionTopic||"",topicToken:d.dataset.promotionTopicToken||"",marquee:d.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",p),ce.publish(s.hierTopics.PROMOTION__CLICK,JSON.stringify(p))}d&&d.dataset?.publishRouteHome&&(d.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(f=>{f.classList.toggle("dash-nav__btn--active",f===d)}),ce.publish(d.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),d&&d.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const n=(u,d=!1,p="cards",f={})=>{const g=document.querySelector(".tournaments-grid");if(!g)return;g.innerHTML="",g.style.animation="none",g.offsetHeight,g.style.animation="panel-enter 0.3s ease-out both",g.classList.toggle("tournaments-grid--list",p==="list");const b=document.getElementById("app"),v=b?.getAttribute("data-sync-theme")||"dark",h=b?.getAttribute("data-sync-lang")||"en",m=b?.getAttribute("data-sync-motif")||"brand",_=(x="")=>String(x).replace(/\S+/g,E=>/[A-Z]/.test(E)&&E===E.toUpperCase()?E:E.charAt(0).toUpperCase()+E.slice(1).toLowerCase()),y=x=>{const E=document.createElement("bma-tournament-list-card");E.setAttribute("data-bma-tourn-guid",x.guid||""),E.setAttribute("data-bma-tourn-caption",x.caption||""),E.setAttribute("data-bma-tourn-tagline",x.tagline||""),E.setAttribute("data-bma-tourn-status",x.status||""),E.setAttribute("data-bma-tourn-class",x.status||""),E.setAttribute("data-bma-tourn-game-type",x.class||"DEFAULT"),E.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(x.sports_allowed)?JSON.stringify(x.sports_allowed):""),E.setAttribute("data-bma-tourn-entities",x.entities?JSON.stringify(x.entities):""),E.setAttribute("data-bma-tourn-entry_fee",x.entry_fee||"0"),E.setAttribute("data-bma-tourn-tournament_dollars",x.tournament_dollars||"0"),E.setAttribute("data-bma-tourn-matches",x.matches_expanded?.length||"0"),E.setAttribute("data-bma-tourn-tags",Array.isArray(x.tags)?JSON.stringify(x.tags):"[]"),E.setAttribute("data-bma-tourn-window_start_time",x.window_start_time||""),E.setAttribute("data-bma-tourn-window_end_time",x.window_end_time||""),E.setAttribute("data-sync-theme",v);try{const I=s.appSession?.session_user?.guid,L=(x.status||x.class)==="COMPLETED",C=x.entities?.guids||[],k=I&&C.includes(I);if(L&&k&&typeof window.GameMode?.get=="function"){const S=window.GameMode.get(x.class||"DEFAULT_FORMAT");if(S&&typeof S.rankLeaderboard=="function"){const $=C.map(Y=>{const J=Array.isArray(x.combined_betslips)?x.combined_betslips.filter(W=>W.entity_guid===Y||W.user_guid===Y||W.guid===Y):[];return{guid:Y,bets:J,tournament_dollars:x.tournament_dollars,timestamp:x.status_time}}),z=S.rankLeaderboard($,x),H=z.findIndex(Y=>Y.guid===I);H>=0&&(E.setAttribute("data-user-rank",String(H+1)),E.setAttribute("data-user-total",String(z.length)))}}}catch{}return E},w=x=>{const E=document.createElement("article"),I=x.status||"DRAFT";E.className=`tournament-item tournament-status-${I.toLowerCase()}`;const L=document.createElement("bma-tournament-card");return L.setAttribute("data-bma-tourn-id",x.id||""),L.setAttribute("data-bma-tourn-guid",x.guid||""),L.setAttribute("data-bma-tourn-caption",x.caption||""),L.setAttribute("data-bma-tourn-tagline",x.tagline||""),L.setAttribute("data-bma-tourn-window_start_time",x.window_start_time||""),L.setAttribute("data-bma-tourn-window_end_time",x.window_end_time||""),L.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(x.sports_allowed)?JSON.stringify(x.sports_allowed):x.sports_allowed||""),L.setAttribute("data-bma-tourn-entities",x.entities?JSON.stringify(x.entities):""),L.setAttribute("data-bma-tourn-tournament_dollars",x.tournament_dollars||""),L.setAttribute("data-bma-tourn-prize_distro",Array.isArray(x.prize_distro)?JSON.stringify(x.prize_distro):x.prize_distro||""),L.setAttribute("data-bma-tourn-matches",Array.isArray(x.matches_guids)?JSON.stringify(x.matches_guids):x.matches_guids||""),L.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(x.matches_expanded)?JSON.stringify(x.matches_expanded):x.matches_expanded||""),L.setAttribute("data-bma-tourn-entry_fee",x.entry_fee||""),L.setAttribute("data-bma-tourn-rake",x.rake||""),L.setAttribute("data-bma-tourn-tags",Array.isArray(x.tags)?JSON.stringify(x.tags):x.tags||""),L.setAttribute("data-bma-tourn-comments",x.comments||""),L.setAttribute("data-bma-tourn-class",x.status||""),L.setAttribute("data-bma-tourn-game-type",x.class||"DEFAULT"),L.setAttribute("data-bma-tourn-status",x.status||""),L.setAttribute("data-sync-theme",v),L.setAttribute("data-sync-lang",h),L.setAttribute("data-sync-motif",m),L.setAttribute("data-n55-size","medium"),L.setAttribute("data-n55-enchanted-cta-ambient","none"),L.setAttribute("data-tourn-custom-css",""),L.setAttribute("data-tourn-trophy","0"),L.setAttribute("data-bma-tourn-focus",""),L.setAttribute("data-bma-tourn-wait","false"),E.appendChild(L),E};if(d){u.forEach(E=>{if(E.type==="stats"){const N=document.createElement("div");N.className="tournament-category tournament-category--stats",N.innerHTML=E.html||"",g.appendChild(N);return}const I=document.createElement("div");I.className="tournament-category";const L=document.createElement("header");L.className="tournament-category-header";const C=document.createElement("div");if(C.className="category-title-line",E.tournaments){const N=document.createElement("span");N.className="category-count-pill";const Q=(()=>{const j=E.sportKey;if(!j||j==="all")return'<span class="category-count-pill__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg></span>';if(j==="multi")return'<span class="category-count-pill__icon"><bma-sport-icon sport="multi" data-sport-group="Multi"></bma-sport-icon></span>';const se=Ye.find(Z=>Z.key===j)?.group||"default";return`<span class="category-count-pill__icon"><bma-sport-icon sport="${j}" data-sport-group="${se}"></bma-sport-icon></span>`})();N.classList.add("category-count-pill--with-icon"),N.innerHTML=`${Q}<span class="category-count-pill__num">${E.tournaments.length}</span>`,C.appendChild(N)}const k=document.createElement("h2");k.className="category-title",k.textContent=_(E.title),C.appendChild(k);const{tab:S="lobby",subStatus:$="all",sort:z="default",result:H="all",odds:Y="all"}=f,W=E.title.toLowerCase().includes("completed"),ie=!W&&S==="my",X=(N,Q,j)=>`<option value="${N}"${j?" selected":""}>${Q}</option>`;let V="";S==="lobby"?V=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${X("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${X("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${X("default","Starting TD$: Default",z==="default")}
              ${X("td_high","Starting TD$: High to Low",z==="td_high")}
              ${X("td_low","Starting TD$: Low to High",z==="td_low")}
            </select>
          `:S==="my"&&ie?V=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${X("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${X("all","Status: All",$==="all")}
              ${X("active","Status: Active",$==="active")}
              ${X("upcoming","Status: Upcoming",$==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${X("all","Odds: All",Y==="all")}
              ${X("available","Odds: Available",Y==="available")}
              ${X("none","Odds: Not Available",Y==="none")}
            </select>
          `:(S==="my"&&W||S==="completed")&&(V=`
            <select class="category-dropdown" data-filter-type="result">
              ${X("all","Result: All",H==="all")}
              ${X("trophy","Result: Won Trophy",H==="trophy")}
              ${X("no_trophy","Result: No Trophy",H==="no_trophy")}
            </select>
          `),L.appendChild(C);const ee=localStorage.getItem("bma_view_mode")||"cards",G=document.createElement("div");if(G.className="category-controls",V){const N=document.createElement("button");N.className="category-filter-toggle",N.setAttribute("aria-label","Toggle filters"),N.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filters <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>',G.appendChild(N)}const R=document.createElement("span");if(R.className="category-view-btns",R.innerHTML=`
          <button class="category-view-btn${ee==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            <span>Card</span>
          </button>
          <button class="category-view-btn${ee==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            <span>List</span>
          </button>
        `,G.appendChild(R),L.appendChild(G),V){const N=document.createElement("div");if(N.className="category-filter-row",N.style.display=window._bmaFilterRowOpen?"":"none",N.innerHTML=V,L.appendChild(N),window._bmaFilterRowOpen){const Q=L.querySelector(".category-filter-toggle");Q&&Q.classList.add("category-filter-toggle--open")}}if(I.appendChild(L),g.appendChild(I),E.tournaments.length===0){const N=E.emptyMessage||"No tournaments available",j=Object.prototype.hasOwnProperty.call(E,"emptySubtext")?E.emptySubtext||"":"Check back later for new tournaments",K=E.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',se=document.createElement("div");se.className="tournaments-empty",se.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",se.innerHTML=`
            ${K}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${N}</p>
            ${j?`<p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${j}</p>`:""}
          `,I.appendChild(se)}else{const N=document.createElement("div");if(N.className="card-rail",E.tournaments.forEach((Q,j)=>{const K=p==="list"?y(Q):w(Q);K.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",K.style.animationDelay=`${Math.min(j*50,300)}ms`,N.appendChild(K)}),I.appendChild(N),E.tournaments.length>1){const Q=document.createElement("div");Q.className="card-rail__dots";for(let j=0;j<E.tournaments.length;j++){const K=document.createElement("span");K.className=`card-rail__dot${j===0?" card-rail__dot--active":""}`,Q.appendChild(K)}I.appendChild(Q)}if(E.tournaments.length>1){const Q=document.createElement("button");Q.className="card-rail__arrow card-rail__arrow--prev",Q.setAttribute("aria-label","Previous card"),Q.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',Q.style.opacity="0";const j=document.createElement("button");j.className="card-rail__arrow card-rail__arrow--next",j.setAttribute("aria-label","Next card"),j.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',I.appendChild(Q),I.appendChild(j);const K=I.querySelector(".card-rail__dots");N.addEventListener("scroll",()=>{const se=N.scrollLeft,Z=N.firstElementChild?.offsetWidth||1,T=Math.round(se/(Z+12));K&&K.querySelectorAll(".card-rail__dot").forEach((P,M)=>{P.classList.toggle("card-rail__dot--active",M===T)}),Q.style.opacity=se<=10?"0":"";const O=N.scrollWidth-N.clientWidth;j.style.opacity=se>=O-10?"0":""},{passive:!0}),Q.addEventListener("click",()=>{const se=N.firstElementChild?.offsetWidth||300;N.scrollBy({left:-(se+12),behavior:"smooth"})}),j.addEventListener("click",()=>{const se=N.firstElementChild?.offsetWidth||300;N.scrollBy({left:se+12,behavior:"smooth"})})}}});const x=g.dataset.filterContext;if(x!=="lobby"&&x!=="private"&&g.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let E="No tournaments available",I="Check back later for new tournaments";x==="my"?(E="You haven't joined any tournaments yet",I="Head to the lobby to find tournaments"):x==="completed"&&(E="No completed tournaments yet",I="Tournaments will appear here once they finish");const L=document.createElement("div");L.className="tournaments-empty",L.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",L.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${E}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${I}</p>
        `,g.appendChild(L)}}else u.forEach((x,E)=>{const I=p==="list"?y(x):w(x);I.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",I.style.animationDelay=`${Math.min(E*50,300)}ms`,g.appendChild(I)})},r=u=>{document.querySelectorAll("bma-tournament-card").forEach(p=>{p.setAttribute("data-sync-theme",u)})},o=u=>{const d=document.querySelectorAll("bma-tournament-card"),p=Date.now().toString();d.forEach(f=>{if(f===u){if(f.setAttribute("data-bma-tourn-focus",p),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="")}}else if(f.setAttribute("data-bma-tourn-focus",""),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="none")}}),typeof neodigmMarquee<"u"&&neodigmMarquee.init()},l=u=>{const{action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...b}=u.detail;console.log("[home_route] Tournament action:",{action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...b}),o(u.target),ce.publish("WC.TOURN_ACTION",JSON.stringify({action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...b,timestamp:Date.now()}))};let i=null;const c=()=>{const u=document.getElementById("home-datetime--id");if(!u)return;const d=new Date,p=d.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),f=d.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});u.textContent=`${p} · ${f}`};return lt(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}c(),i=setInterval(c,24e3);const u=document.getElementById("app");if(u){const g=s.appCLIFeatures.features.theme?.state,b=s.appCLIFeatures.features.lang?.state,v=s.appCLIFeatures.features.motif?.state,h=s.appSession.session_user.guid;g&&(u.setAttribute("data-sync-theme",g),document.body.setAttribute("data-sync-theme",g)),b&&u.setAttribute("data-sync-lang",b),v&&u.setAttribute("data-sync-motif",v),h&&u.setAttribute("data-user-guid",h)}window._homeRouteRenderCards=n;const d=ce.subscribe("APP.ROUTE_SYNC",(g,b)=>{try{const v=JSON.parse(b);v.theme&&r(v.theme.state)}catch(v){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",v)}});if(window._homeRoutePubSubToken=d,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),ce.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",l),window._pendingTournGuid){const g=window._pendingTournGuid;delete window._pendingTournGuid,setTimeout(()=>{ce.publish("WC.TOURN_ACTION",JSON.stringify({action:"PLAY",tournamentGuid:g,timestamp:Date.now()}))},800)}const p=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,f=new Tt(".featured-swiper",{modules:[dv,cv],slidesPerView:1,spaceBetween:16,loop:p>1,initialSlide:p>1?1:0,centeredSlides:p>1,autoplay:p>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:p>1?1.7:1,spaceBetween:10,centeredSlides:p>1},640:{slidesPerView:Math.min(2,p),spaceBetween:16,centeredSlides:!1},1024:{slidesPerView:Math.min(3,p),spaceBetween:20,centeredSlides:!1},1280:{slidesPerView:Math.min(3,p),spaceBetween:24,centeredSlides:!1}}});window.featuredSwiper=f,ce.publish(s.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),is(()=>{i&&clearInterval(i),document.removeEventListener("bma-tournament-action",l),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&ce.unsubscribe(window._homeRoutePubSubToken)}),(u,d)=>(ue(),fe("main",uv,[A("div",pv,[A("bma-app-head-top",{"data-user-name":ut(s).appSession.session_user.name||"Guest"},null,8,fv),d[0]||(d[0]=A("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),d[19]||(d[19]=pt('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div><div class="home-datetime" id="home-datetime--id" aria-hidden="true">—</div><bma-scores-banner id="bma-scores-banner--id"></bma-scores-banner></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports>',2)),A("nav",hv,[A("button",mv,[(ue(),fe("svg",gv,[...d[1]||(d[1]=[A("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[2]||(d[2]=Fe(" Active ",-1))]),A("button",bv,[(ue(),fe("svg",vv,[...d[3]||(d[3]=[A("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),d[4]||(d[4]=Fe(" Completed ",-1))]),A("button",_v,[(ue(),fe("svg",yv,[...d[5]||(d[5]=[A("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[6]||(d[6]=Fe(" Active ",-1)),d[7]||(d[7]=A("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{visibility:"hidden"}},"0",-1))]),A("button",wv,[(ue(),fe("svg",xv,[...d[8]||(d[8]=[A("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),d[9]||(d[9]=Fe(" Completed ",-1))]),A("button",Tv,[(ue(),fe("svg",Sv,[...d[10]||(d[10]=[A("path",{d:"M7 4V2h10v2h5v3c0 2.76-2.24 5-5 5h-.58c-.59 1.85-2.17 3.31-4.42 3.79V19h4v2H8v-2h4v-3.21C9.75 15.31 8.17 13.85 7.58 12H7c-2.76 0-5-2.24-5-5V4h5zm0 2H4v1c0 1.3.84 2.4 2 2.82V6zm10 3.82C18.16 9.4 19 8.3 19 7V6h-3v3.82z"},null,-1)])])),d[11]||(d[11]=Fe(" Bet Max Pools ",-1)),d[12]||(d[12]=A("span",{class:"home-tab__badge",id:"home-tab-private-badge"},"0",-1))]),A("button",kv,[(ue(),fe("svg",Ev,[...d[13]||(d[13]=[A("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"},null,-1)])])),d[14]||(d[14]=Fe(" Invites ",-1)),d[15]||(d[15]=A("span",{class:"home-tab__badge home-tab__badge--soft",id:"home-tab-invites-badge"},"0",-1))])]),A("section",{class:"create-cta-banner",onClick:a},[d[18]||(d[18]=A("div",{class:"create-cta-banner__glow","aria-hidden":"true"},null,-1)),A("div",Av,[d[17]||(d[17]=pt('<div class="create-cta-banner__text"><span class="create-cta-banner__eyebrow" aria-label="Tournament perks"><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--1">Select Your Sports</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--2">Choose Your Game Mode</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--3">Invite Your Friends</span><span class="create-cta-banner__eyebrow-progress" aria-hidden="true"></span></span><span class="create-cta-banner__title">Start Your Own Bet Max Pool!</span><span class="create-cta-banner__sub">Your contest, your rules, your friends. Start a Bet Max Pool for Free.</span></div><div class="create-cta-banner__trophies" aria-hidden="true"><span class="create-cta-banner__trophy create-cta-banner__trophy--silver"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--gold"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--bronze"></span></div>',2)),A("button",{class:"create-cta-banner__btn",type:"button",onClick:zs(a,["stop"])},[...d[16]||(d[16]=[A("span",null,"Create",-1),A("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[A("polyline",{points:"9 18 15 12 9 6"})],-1)])])])]),d[20]||(d[20]=pt('<section class="tournaments-section"><div class="tournaments-grid"></div></section><section class="invites-section"><div class="invites-list" id="invites-list"></div><div class="invites-empty" id="invites-empty" hidden><svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><p class="invites-empty__head">No pending invites</p><p class="invites-empty__sub">When a friend invites you to a Bet Max Pool, it&#39;ll show up here.</p></div></section><bma-app-foot-branded></bma-app-foot-branded>',3))]))}},Pv={};function Ov(e,t){return ue(),fe("main",null,[...t[0]||(t[0]=[A("h1",null,"App FAQ",-1)])])}const Ka=Ts(Pv,[["render",Ov]]),$v={};function Mv(e,t){return ue(),fe("main",null,[...t[0]||(t[0]=[A("h1",null,"App Help",-1)])])}const Lv=Ts($v,[["render",Mv]]),Qt=class Qt{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,s,a,n=!0){this.strChat=a,this.isDebug=n;const r=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${r}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(l){Qt.onSSEOpen(l)},this.sseEvent.onmessage=function(l){Qt.onSSEMessage(l)},this.sseEvent.onerror=function(l){Qt.onSSEError(l)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),ce.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break;case"INVITE_SYNC":this.isDebug&&console.warn(" ~... sse INVITE_SYNC | ",s),ce.publish("SSE.CORE.INVITE_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Qt.sseEvent=null,Qt.strChat=null,Qt.isDebug=!0,Qt.sessionId=null;let nr=Qt;class rs{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,a){return new Promise((n,r)=>{const o=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});o.onload=n,o.onerror=r,s.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(s,a,n){const r=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});n&&(r.onload=function(){n()}),s.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(s,a){let n=s.createElement("link");n.rel="stylesheet",n.href=a,s.getElementsByTagName("head")[0].appendChild(n)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let a=s.split(""),n=[],r=!1;return a.forEach(o=>{o=="-"?r=!0:(n.push(r?o.toUpperCase():o),r=!1)}),n.join("")},doDataLayer:function(s,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+a),window.dataLayer&&window.dataLayer.push({event:s,msg:a})},isJSON:function(s){let a=!1;try{a=typeof JSON.parse(s)}catch{}return a=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",n=>{n?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(n.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(n?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:s=>{let a=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(a=""),a},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((a,n)=>(a<<5)-a+n.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const n=56;a.forEach((o,l)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=s},l*n),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},l*(n+n)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;a.forEach((o,l)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=s},l*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},l*r+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,a,n=neodigmOpt.neodigmMetronome.countTo){const r=[16,n];return[...document.querySelectorAll(s)].forEach(function(o,l){let i=Math.abs(Number(o.textContent)-a);neodigmMetronome.unsubscribe(r[1]+l).subscribe(function(c){let u=Number(o.textContent);if(!Number.isNaN(u)&&!isNaN(u)&&a!=u){let d=i/r[0];d=Math.round(d),c!=0?o.textContent=u<a?u+d:u-d:o.textContent=a}},r[1]+l,r[0])}),neodigmUtils},typeOff:async function(s){let a=document.querySelector(s?.q1st);if(a){let n=a.textContent.length,r=window.getComputedStyle(a),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-o+"px");n;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},s.uniqueDelay*n--)}},typeOn:async function(s){let a=document.querySelector(s?.q1st);if(a){a.dataset.n55Typeon=0;let n=s.msg.replaceAll("|","   |   ")+"   ",r=n.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&r.length){let o=a.dataset.n55Typeon=neodigmUtils.f02x(r.length);n=r[o]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(o=>{let l=n[n.length-(o+1)];l=="|"&&(l="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=l,s?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,n.length)}return neodigmUtils},getValJSON:function(s,a){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+a+'": "'+s+'" }')}},walkDOM3:function(s,a,n=!1){let r=null;if(!r&&s?.dataset[a]&&(r=s),!r&&s?.parentNode?.dataset[a]&&(r=s.parentNode),!r&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[a]&&(r=s.parentNode.parentNode),r)return n?r:r.dataset[a]},doSetT:function(s,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,a):setTimeout(s,a)},shake:function(s,a=!0){return[...document.querySelectorAll(s)].forEach(function(n,r){n.classList.add("shake__an"),setTimeout(function(){n.classList.remove("shake__an")},460)}),rs.neodigmUtils},hardReload:function(s="n55reset"){const a=new URLSearchParams(window.location.search);a.set(s,new Date().getTime());const n=a.toString();window.location.search=n}}))}const Rv={class:"auth-page"},Dv={class:"auth-page-right"},Iv={class:"auth-card"},Nv={class:"form-group"},Bv={class:"form-group"},Fv={class:"password-input-wrapper"},zv=["type"],Hv={style:{"text-align":"right"}},jv={class:"auth-link-center"},Uv={__name:"signin_route",setup(e){const t=ct(),s=Te(),a=(p="signin")=>{t.push({name:p})};let n=null;const r=Me(!1),o=()=>{r.value=!r.value},l=(p=3,f=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const g=Math.floor(Math.random()*p)+f,b=document.querySelector(".img__bg")?.classList;b&&(b.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),b.add(`img__bg--${g}`)),n||(n=ce.subscribe("APP__ROUTE_SYNC",(v,h)=>{const m=JSON.parse(h);switch(Object.keys(m)[0]){case"Motif":l();break;case"Lang":i();break}}))},i=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(b=>b.code==f)[0]?.copy;g=g.filter(b=>b[0]==p.dataset.syncMicrocopyText)[0],g&&(p.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(b=>b.code==f)[0]?.copy;g=g.filter(b=>b[0]==p.dataset.syncMicrocopyPlaceholder)[0],g&&(p.placeholder=g[1])})},c=p=>{rs.neodigmUtils().shake(p||"#inp__text--email")},u=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},d=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let g=null,b=null;if(!p?.value)g="Please enter your email",b="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)g="Please enter a valid email address",b="#inp__text--email";else if(!f?.value)g="Please enter your password",b="#inp__text--password";else if(f.value.length<10)g="Password must be at least 10 characters",b="#inp__text--password";else{const v={email:p.value,hash:rs.neodigmUtils().genHash(f.value)};ke.doSignin(v,h=>{const y=(h?.entity?.tags||[]).find(x=>x.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=v.email,s.appSession.session_user.fname=h?.entity?.first,s.appSession.session_user.lname=h?.entity?.last,s.appSession.session_user.userName=y,s.appSession.session_user.name=y,s.appSession.session_user.guid=h?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const x=h?.entity?.guid||s.appSession.session_user.guid;nr.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",x,s,!0)}const w=Cg();if(w?.tournamentGuid){const x={name:"preview_route",params:{guid:w.tournamentGuid}};w.joinSlug&&(x.query={s:w.joinSlug}),t.push(x)}})}g&&(c(b),neodigmToast.q(g,"danger"))};return lt(()=>{l(),i()}),(p,f)=>(ue(),fe("div",Rv,[f[10]||(f[10]=pt('<div class="auth-page-left" data-v-c062b40e><div class="auth-bg" data-v-c062b40e><div class="auth-bg-image" data-v-c062b40e></div><div class="auth-bg-image" data-v-c062b40e></div><div class="auth-bg-image" data-v-c062b40e></div></div><div class="auth-overlay" data-v-c062b40e></div><div class="auth-branding-content" data-v-c062b40e><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-c062b40e><p class="auth-branding-tagline" data-v-c062b40e>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-c062b40e>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-c062b40e> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),A("div",Dv,[A("div",Iv,[f[9]||(f[9]=A("div",{class:"auth-header"},[A("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),A("form",{class:"auth-form",onSubmit:zs(d,["prevent"])},[A("div",Nv,[f[4]||(f[4]=A("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),A("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=g=>u())},null,32)]),A("div",Bv,[f[5]||(f[5]=A("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),A("div",Fv,[A("input",{id:"inp__text--password",type:r.value?"text":"password",autocomplete:"current-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,zv),A("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=g=>o()),tabindex:"-1"},[A("span",{class:Ve(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),A("div",Hv,[A("a",{class:"auth-link",onClick:f[2]||(f[2]=g=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=A("div",{class:"auth-actions"},[A("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),A("p",jv,[f[6]||(f[6]=A("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Fe()),A("a",{class:"auth-link",onClick:f[3]||(f[3]=g=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},qv=Ts(Uv,[["__scopeId","data-v-c062b40e"]]),Vv={class:"auth-page"},Gv={__name:"signout_route",setup(e){const t=ct();Te();const s=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(n,r)=>(ue(),fe("div",Vv,[r[1]||(r[1]=pt('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),A("div",{class:"auth-page-right"},[A("div",{class:"auth-card"},[r[0]||(r[0]=A("div",{class:"auth-header"},[A("h1",{class:"auth-title"},"Sign Out"),A("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),A("div",{class:"auth-actions"},[A("button",{onClick:s,class:"btn btn-red"}," Sign Out "),A("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},Kv=Ts(Gv,[["__scopeId","data-v-15bfefd6"]]),Yv={class:"auth-page"},Wv={class:"auth-page-right"},Jv={class:"auth-card auth-card-wide"},Xv={class:"form-row"},Qv={class:"form-group"},Zv={class:"form-group"},e_={class:"form-group"},t_={class:"form-group"},s_={class:"form-group"},a_={class:"password-input-wrapper"},n_=["type"],r_={class:"form-group"},o_={class:"password-input-wrapper"},i_=["type"],l_={class:"form-group form-group-checkbox"},c_={class:"checkbox-label"},d_={class:"auth-link-center"},u_={__name:"signup_route",setup(e){const t=ct(),s=Te(),a=(_="signin")=>{t.push({name:_})};let n=null,r=null;const o=Me(!1),l=Me(!1),i=Me(!1),c=()=>{o.value=!o.value},u=()=>{l.value=!l.value},d=_=>{_.preventDefault(),ce.publish(s.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(_=3,y=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":_=3,y=1;break;case"white_label":_=3,y=4;break}const w=Math.floor(Math.random()*_)+y,x=document.querySelector(".img__bg")?.classList;x&&(x.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),x.add(`img__bg--${w}`)),n||(n=ce.subscribe("APP__ROUTE_SYNC",(E,I)=>{const L=JSON.parse(I);switch(Object.keys(L)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(_=>{const y=s.appCLIFeatures?.features?.lang?.state;let w=s.appMeta.microcopy.language.filter(x=>x.code==y)[0]?.copy;w=w.filter(x=>x[0]==_.dataset.syncMicrocopyText)[0],w&&(_.textContent=w[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(_=>{const y=s.appCLIFeatures?.features?.lang?.state;let w=s.appMeta.microcopy.language.filter(x=>x.code==y)[0]?.copy;w=w.filter(x=>x[0]==_.dataset.syncMicrocopyPlaceholder)[0],w&&(_.placeholder=w[1])})},g=_=>{rs.neodigmUtils().shake(_||"#inp__text--email")},b=()=>{let _=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(_)},v=_=>{const y=[];return _.length<10&&y.push("at least 10 characters"),/[a-z]/.test(_)||y.push("1 lowercase"),/[A-Z]/.test(_)||y.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(_)||y.push("1 special character"),/[^\x00-\x7F]/.test(_)&&y.push("ASCII characters only"),y},h=async()=>{const _=document.querySelector("#inp__text--username"),y=_?.value?.trim();if(y)try{(await ke.checkUserName(y)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),_.value="",_.focus())}catch(w){console.error("Error checking username:",w)}},m=()=>{const _=document.querySelector("#inp__text--first-name"),y=document.querySelector("#inp__text--last-name"),w=document.querySelector("#inp__text--email"),x=document.querySelector("#inp__text--username"),E=document.querySelector("#inp__text--password"),I=document.querySelector("#inp__text--verify-password");let L=null,C=null;if(!_?.value)L="Please enter your first name",C="#inp__text--first-name";else if(!y?.value)L="Please enter your last name",C="#inp__text--last-name";else if(!w?.value)L="Please enter your email",C="#inp__text--email";else if(w.value.indexOf("@")===-1||w.value.indexOf(".")===-1)L="Please enter a valid email address",C="#inp__text--email";else if(!x?.value)L="Please enter a user name",C="#inp__text--username";else if(!E?.value)L="Please enter a password",C="#inp__text--password";else{const k=v(E.value);if(k.length>0)L="Password must have:|"+k.join(", "),C="#inp__text--password";else if(!I?.value)L="Please verify your password",C="#inp__text--verify-password";else if(E.value!==I.value)L="Passwords do not match",C="#inp__text--verify-password";else{const S=_.value.trim(),$=y.value.trim(),z=[{userName:x.value.trim(),ts:Date.now()}],H={email:w.value,hash:rs.neodigmUtils().genHash(E.value),first:S,last:$,company:"",phone:"",tags:z};ke.doSignup(H,Y=>{Y.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}L&&(g(C),neodigmToast.q(L,"danger"))};return lt(()=>{p(),f(),r||(r=ce.subscribe(s.hierTopics.ROUTE__SIGNUP__TERMS,(_,y)=>{JSON.parse(y).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),i.value=!0)}))}),(_,y)=>(ue(),fe("div",Yv,[y[23]||(y[23]=pt('<div class="auth-page-left" data-v-e1a086be><div class="auth-bg" data-v-e1a086be><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div></div><div class="auth-overlay" data-v-e1a086be></div><div class="auth-branding-content" data-v-e1a086be><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-e1a086be><p class="auth-branding-tagline" data-v-e1a086be>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-e1a086be>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-e1a086be> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),A("div",Wv,[A("div",Jv,[A("form",{class:"auth-form",onSubmit:zs(m,["prevent"])},[A("div",Xv,[A("div",Qv,[y[12]||(y[12]=A("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),A("input",{id:"inp__text--first-name",type:"text",autocomplete:"given-name","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"First name",onKeyup:y[0]||(y[0]=es(w=>m(),["enter"]))},null,32)]),A("div",Zv,[y[13]||(y[13]=A("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),A("input",{id:"inp__text--last-name",type:"text",autocomplete:"family-name","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Last name",onKeyup:y[1]||(y[1]=es(w=>m(),["enter"]))},null,32)])]),A("div",e_,[y[14]||(y[14]=A("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),A("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:y[2]||(y[2]=w=>b()),onKeyup:y[3]||(y[3]=es(w=>m(),["enter"]))},null,32)]),A("div",t_,[y[15]||(y[15]=A("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),A("input",{id:"inp__text--username",type:"text",autocomplete:"username","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:y[4]||(y[4]=w=>h()),onKeyup:y[5]||(y[5]=es(w=>m(),["enter"]))},null,32)]),A("div",s_,[y[16]||(y[16]=A("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),A("div",a_,[A("input",{id:"inp__text--password",type:o.value?"text":"password",autocomplete:"new-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:y[6]||(y[6]=es(w=>m(),["enter"]))},null,40,n_),A("button",{type:"button",class:"password-toggle-btn",onClick:y[7]||(y[7]=w=>c()),tabindex:"-1"},[A("span",{class:Ve(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),y[17]||(y[17]=A("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),A("div",r_,[y[18]||(y[18]=A("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),A("div",o_,[A("input",{id:"inp__text--verify-password",type:l.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:y[8]||(y[8]=es(w=>m(),["enter"]))},null,40,i_),A("button",{type:"button",class:"password-toggle-btn",onClick:y[9]||(y[9]=w=>u()),tabindex:"-1"},[A("span",{class:Ve(l.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),A("div",l_,[A("label",c_,[Bt(A("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":y[10]||(y[10]=w=>i.value=w),class:"terms-checkbox"},null,512),[[cu,i.value]]),y[19]||(y[19]=A("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),A("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:d},"Terms")])]),y[22]||(y[22]=A("div",{class:"auth-actions"},[A("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),A("p",d_,[y[20]||(y[20]=A("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),y[21]||(y[21]=Fe()),A("a",{class:"auth-link",onClick:y[11]||(y[11]=w=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},p_=Ts(u_,[["__scopeId","data-v-e1a086be"]]),f_={class:"auth-page"},h_={class:"auth-page-right"},m_={class:"auth-card"},g_={class:"form-group"},b_={class:"auth-link-center"},v_={__name:"forgot_route",setup(e){const t=ct(),s=Te(),a=(c="signin_route")=>{t.push({name:c})};let n=null;const r=(c=3,u=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,u=1;break;case"white_label":c=3,u=4;break}const d=Math.floor(Math.random()*c)+u,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${d}`)),n||(n=ce.subscribe("APP__ROUTE_SYNC",(f,g)=>{const b=JSON.parse(g);switch(Object.keys(b)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const u=s.appCLIFeatures?.features?.lang?.state;let d=s.appMeta.microcopy.language.filter(p=>p.code==u)[0]?.copy;d=d.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],d&&(c.textContent=d[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const u=s.appCLIFeatures?.features?.lang?.state;let d=s.appMeta.microcopy.language.filter(p=>p.code==u)[0]?.copy;d=d.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],d&&(c.placeholder=d[1])})},l=c=>{rs.neodigmUtils().shake(c||"#inp__text--email")},i=()=>{const c=document.querySelector("#inp__text--email");let u=null,d=null;if(!c?.value)u="Please enter your email address",d="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)u="Please enter a valid email address",d="#inp__text--email";else{const p={method:"GET",headers:ke.genHeaders()};fetch(ke.API_baseURI+"/m5t/"+ke.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}u&&(l(d),neodigmToast.q(u,"danger"))};return lt(()=>{r(),o()}),(c,u)=>(ue(),fe("div",f_,[u[7]||(u[7]=pt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),A("div",h_,[A("div",m_,[u[6]||(u[6]=A("div",{class:"auth-header"},[A("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),A("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),A("form",{class:"auth-form",onSubmit:zs(i,["prevent"])},[A("div",g_,[u[2]||(u[2]=A("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),A("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:u[0]||(u[0]=es(d=>i(),["enter"]))},null,32)]),u[5]||(u[5]=A("div",{class:"auth-actions"},[A("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),A("p",b_,[u[3]||(u[3]=A("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),u[4]||(u[4]=Fe()),A("a",{class:"auth-link",onClick:u[1]||(u[1]=d=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},__={class:"auth-page"},y_={class:"auth-page-right"},w_={class:"auth-card"},x_={class:"form-group"},T_={class:"password-input-wrapper"},S_=["type"],k_={class:"form-group"},E_={class:"password-input-wrapper"},A_=["type"],C_={__name:"resethash_route",setup(e){const t=ct(),s=Te(),a=()=>{t.push({name:"home_route"})};let n=null;const r=Me(!1),o=Me(!1),l=()=>{r.value=!r.value},i=()=>{o.value=!o.value},c=(g=3,b=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":g=3,b=1;break;case"white_label":g=3,b=4;break}const v=Math.floor(Math.random()*g)+b,h=document.querySelector(".img__bg")?.classList;h&&(h.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),h.add(`img__bg--${v}`)),n||(n=ce.subscribe("APP__ROUTE_SYNC",(m,_)=>{const y=JSON.parse(_);switch(Object.keys(y)[0]){case"Motif":c();break;case"Lang":u();break}}))},u=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const b=s.appCLIFeatures?.features?.lang?.state;let v=s.appMeta.microcopy.language.filter(h=>h.code==b)[0]?.copy;v=v.filter(h=>h[0]==g.dataset.syncMicrocopyText)[0],v&&(g.textContent=v[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const b=s.appCLIFeatures?.features?.lang?.state;let v=s.appMeta.microcopy.language.filter(h=>h.code==b)[0]?.copy;v=v.filter(h=>h[0]==g.dataset.syncMicrocopyPlaceholder)[0],v&&(g.placeholder=v[1])})},d=g=>{rs.neodigmUtils().shake(g||"#inp__text--password")},p=g=>{const b=[];return g.length<10&&b.push("at least 10 characters"),/[a-z]/.test(g)||b.push("1 lowercase"),/[A-Z]/.test(g)||b.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||b.push("1 special character"),/[^\x00-\x7F]/.test(g)&&b.push("ASCII characters only"),b},f=()=>{const g=document.querySelector("#inp__text--password"),b=document.querySelector("#inp__text--verify-password");let v=null,h=null;if(!g?.value)v="Please enter a password",h="#inp__text--password";else{const m=p(g.value);if(m.length>0)v="Password must have:|"+m.join(", "),h="#inp__text--password";else if(!b?.value)v="Please verify your password",h="#inp__text--verify-password";else if(g.value!==b.value)v="Passwords do not match",h="#inp__text--verify-password";else{const _=s.appSession.session_user.email||"",y={email:_,hash:rs.neodigmUtils().genHash(g.value),modified_by:_},w={method:"POST",body:JSON.stringify(y),headers:ke.genHeaders()};fetch(ke.API_baseURI+"/m5t/"+ke.API_ver+"/acctEntity/resetHash",w).then(x=>x.json()).then(x=>{x.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(x=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}v&&(d(h),neodigmToast.q(v,"danger"))};return lt(()=>{c(),u()}),(g,b)=>(ue(),fe("div",__,[b[9]||(b[9]=pt('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),A("div",y_,[A("div",w_,[b[8]||(b[8]=A("div",{class:"auth-header"},[A("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),A("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),A("form",{class:"auth-form",onSubmit:zs(f,["prevent"])},[A("div",x_,[b[4]||(b[4]=A("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),A("div",T_,[A("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:b[0]||(b[0]=es(v=>f(),["enter"]))},null,40,S_),A("button",{type:"button",class:"password-toggle-btn",onClick:b[1]||(b[1]=v=>l()),tabindex:"-1"},[A("span",{class:Ve(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),b[5]||(b[5]=A("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),A("div",k_,[b[6]||(b[6]=A("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),A("div",E_,[A("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:b[2]||(b[2]=es(v=>f(),["enter"]))},null,40,A_),A("button",{type:"button",class:"password-toggle-btn",onClick:b[3]||(b[3]=v=>i()),tabindex:"-1"},[A("span",{class:Ve(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),A("div",{class:"auth-actions"},[b[7]||(b[7]=A("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),A("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},P_=Ts(C_,[["__scopeId","data-v-3ae2c87b"]]),O_={class:"auth-page"},$_={class:"auth-page-right"},M_={class:"auth-card"},L_={class:"verification-content"},R_={class:"timer-display"},D_={__name:"verf_link_route",setup(e){const t=ct();Ba(),Te();const s=Me(7200);let a=null;const n=o=>{const l=Math.floor(o/3600),i=Math.floor(o%3600/60),c=o%60;return`${l.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{a=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return lt(()=>{r()}),is(()=>{a&&clearInterval(a)}),(o,l)=>(ue(),fe("div",O_,[l[4]||(l[4]=pt('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),A("div",$_,[A("div",M_,[l[3]||(l[3]=A("div",{class:"auth-header"},[A("h1",{class:"auth-title"},"Check Your Email"),A("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),A("div",L_,[l[0]||(l[0]=A("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),l[1]||(l[1]=A("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),l[2]||(l[2]=A("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),A("div",R_,he(n(s.value)),1)])])])]))}},I_=Ts(D_,[["__scopeId","data-v-d92b2a33"]]);class N_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-email","data-active-count","data-played-count","data-trophy-count"]}connectedCallback(){this._unsub=Re.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",s=this.getAttribute("data-email")||"",a=this.getAttribute("data-active-count")||"0",n=this.getAttribute("data-played-count")||"0",r=this.getAttribute("data-trophy-count")||"0",o=t.charAt(0).toUpperCase(),l=new Date,i=l.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),c=l.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"}),u=`${i} · ${c}`;this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                :host {
                    display: block;
                    width: 100%;
                }
                .hero {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 32px 24px 24px;
                    background: linear-gradient(135deg, #1a5235 0%, #0f3320 100%);
                    border-top: 2px solid rgba(255, 215, 0, 0.3);
                    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                    position: relative;
                    overflow: hidden;
                }
                .hero__avatar {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: #2A3A2E;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.8rem;
                    font-weight: 800;
                    color: var(--status-locked-text, #F7C60D);
                    text-transform: uppercase;
                    margin-bottom: 12px;
                    box-shadow: 0 0 0 3px rgba(247, 198, 13, 0.2);
                }
                .hero__name {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 4px;
                }
                .hero__email {
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.45);
                    margin-bottom: 4px;
                }
                .hero__timestamp {
                    font-size: 0.75rem;
                    color: var(--status-locked-text, #F7C60D);
                    font-weight: 600;
                    letter-spacing: 0.4px;
                    margin-bottom: 16px;
                    opacity: 0.85;
                }
                .hero__kpis {
                    display: flex;
                    gap: 0;
                    width: 100%;
                    max-width: 360px;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }
                .hero__kpi {
                    flex: 1;
                    text-align: center;
                    padding: 12px 8px 4px;
                    border-right: 1px solid rgba(255, 255, 255, 0.06);
                }
                .hero__kpi:last-child { border-right: none; }
                .hero__kpi-value {
                    display: block;
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    font-variant-numeric: tabular-nums;
                }
                .hero__kpi-label {
                    display: block;
                    font-size: 0.6rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.45);
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-top: 2px;
                }
                @media (max-width: 480px) {
                    .hero { padding: 24px 16px 16px; }
                    .hero__avatar { width: 56px; height: 56px; font-size: 1.4rem; }
                    .hero__name { font-size: 1.15rem; }
                    .hero__kpi-value { font-size: 0.95rem; }
                }
            </style>
            <div class="hero">
                <div class="hero__avatar">${o}</div>
                <div class="hero__name">${t}</div>
                ${s?`<div class="hero__email">${s}</div>`:""}
                <div class="hero__timestamp">${u}</div>
                <div class="hero__kpis">
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${a}</span>
                        <span class="hero__kpi-label">Active</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${n}</span>
                        <span class="hero__kpi-label">Played</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${r}</span>
                        <span class="hero__kpi-label">Trophies</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-profile-hero",N_);class B_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-played","data-first-place","data-trophies","data-favorite-sport","data-favorite-sport-group","data-win-rate","data-win-loss-record"]}connectedCallback(){this._unsub=Re.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-played")||"0",s=this.getAttribute("data-first-place")||"0",a=this.getAttribute("data-trophies")||"0",n=this.getAttribute("data-favorite-sport")||"—",r=this.getAttribute("data-favorite-sport-group")||"",o=this.getAttribute("data-win-rate")||"—",l=this.getAttribute("data-win-loss-record")||"",i=r?`<bma-sport-icon data-sport-group="${r.toLowerCase()}" style="width:20px;height:20px;"></bma-sport-icon>`:"";this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                :host { display: block; width: 100%; }
                .panel {
                    background: #222222;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                    max-width: min(90%, 820px);
                    margin: 0 auto;
                }
                .panel__header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 16px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }
                .panel__icon { color: var(--status-locked-text, #F7C60D); flex-shrink: 0; }
                .panel__title {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: rgba(255, 255, 255, 0.85);
                }
                .row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                }
                .row:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
                .row:last-child { border-bottom: none; }
                .row__label {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    font-size: 0.82rem;
                    color: rgba(255, 255, 255, 0.7);
                }
                .row__label svg { width: 16px; height: 16px; opacity: 0.55; flex-shrink: 0; }
                .row__value {
                    display: inline-flex;
                    align-items: baseline;
                    gap: 8px;
                    font-size: 1.05rem;
                    font-weight: 800;
                    color: var(--status-locked-text, #F7C60D);
                    font-variant-numeric: tabular-nums;
                }
                .row__value--sport {
                    gap: 8px;
                    align-items: center;
                    color: rgba(255, 255, 255, 0.95);
                    font-size: 0.9rem;
                    font-weight: 700;
                }
                .row__sub {
                    font-size: 0.72rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.45);
                }
                @media (max-width: 640px) {
                    .panel { max-width: 100%; border-radius: 0; }
                    .panel__header { padding: 12px 14px; }
                    .row { padding: 10px 14px; }
                    .row__label { font-size: 0.78rem; }
                    .row__value { font-size: 0.95rem; }
                }
            </style>
            <div class="panel">
                <div class="panel__header">
                    <svg class="panel__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                    <span class="panel__title">Your Stats</span>
                </div>
                <div class="row">
                    <span class="row__label">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                        Tournaments Played
                    </span>
                    <span class="row__value">${t}</span>
                </div>
                <div class="row">
                    <span class="row__label">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
                        1st Place Finishes
                    </span>
                    <span class="row__value">${s}</span>
                </div>
                <div class="row">
                    <span class="row__label">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 5.18L20 8l-4 3.9.94 5.5L12 14.78 7.06 17.4 8 11.9 4 8l5.61-.82L12 2z"/></svg>
                        Total Trophies
                    </span>
                    <span class="row__value">${a}</span>
                </div>
                <div class="row">
                    <span class="row__label">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                        Favorite Sport
                    </span>
                    <span class="row__value row__value--sport">${i}<span>${n}</span></span>
                </div>
                <div class="row">
                    <span class="row__label">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                        Bet Win Rate
                    </span>
                    <span class="row__value">${o}${l?`<span class="row__sub">${l}</span>`:""}</span>
                </div>
            </div>
        `}}customElements.define("bma-profile-stats",B_);class F_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._openPanels={private:!0,public:!0}}static get observedAttributes(){return["data-contests","data-private-contests"]}connectedCallback(){this._unsub=Re.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}get contests(){const t=this.getAttribute("data-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}get privateContests(){const t=this.getAttribute("data-private-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ye.find(a=>a.key===t)?.group||""}render(){const t=this.contests,s=this.privateContests,a=i=>`<span class="chip chip--${i==="LOCKED"?"locked":i==="UPCOMING"?"upcoming":i==="COMPLETED"?"completed":"default"}">${i==="LOCKED"?"In Progress":i==="UPCOMING"?"Open":i==="COMPLETED"?"Completed":i}</span>`,n=i=>i===1?'<div class="card__trophy" style="background-image: var(--trophy-gold-tall);"></div>':i===2?'<div class="card__trophy" style="background-image: var(--trophy-silver-tall);"></div>':i===3?'<div class="card__trophy" style="background-image: var(--trophy-bronze-tall);"></div>':"",r=i=>{const c=i.sports?.[0]||"",u=this._sportGroup(c),d=u?`<bma-sport-icon data-sport-group="${u}" style="width:18px;height:18px;flex-shrink:0;opacity:0.7;"></bma-sport-icon>`:"",p=i.startTime?na.formatDateLocal(i.startTime,{month:"short",day:"numeric"}):"",f=i.placement?n(i.placement):"",g=i.isHosting?'<span class="chip chip--host">Host</span>':"";return`
                <div class="card" data-contest-id="${i.id||""}">
                    <div class="card__top">
                        <div class="card__info">
                            ${d}
                            <span class="card__name">${i.name||"Tournament"}</span>
                        </div>
                        <div class="card__right">
                            ${g}
                            ${a(i.status)}
                            <svg class="card__arrow" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                        </div>
                    </div>
                    <div class="card__bottom">
                        <span class="card__meta">${p}${p&&i.sport?" · ":""}${i.sport||""}</span>
                        ${f}
                    </div>
                </div>
            `},o=t.map(r).join(""),l=s.map(r).join("");this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                :host { display: block; width: 100%; }
                .panel {
                    background: #222222;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                    max-width: min(90%, 820px);
                    margin: 0 auto;
                }
                .panel__header {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 14px 16px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                    width: 100%;
                    background: transparent;
                    border-top: none;
                    border-left: none;
                    border-right: none;
                    color: inherit;
                    font-family: inherit;
                    text-align: left;
                    cursor: pointer;
                    -webkit-tap-highlight-color: transparent;
                    user-select: none;
                }
                .panel__header:hover {
                    background: rgba(255, 255, 255, 0.03);
                }
                .panel__icon { color: var(--status-locked-text, #F7C60D); flex-shrink: 0; }
                .panel__title {
                    font-size: 0.8rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: rgba(255, 255, 255, 0.85);
                    flex: 1;
                }
                .panel__count {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    min-width: 22px;
                    height: 22px;
                    padding: 0 7px;
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.06);
                    color: rgba(255, 255, 255, 0.55);
                    font-size: 0.7rem;
                    font-weight: 800;
                    font-variant-numeric: tabular-nums;
                    line-height: 1;
                    flex-shrink: 0;
                }
                .panel__chevron {
                    opacity: 0.55;
                    flex-shrink: 0;
                    transition: transform 0.2s ease;
                }
                .panel--collapsed .panel__chevron {
                    transform: rotate(-90deg);
                }
                .panel--collapsed .panel__header {
                    border-bottom-color: transparent;
                }
                .panel__body {
                    overflow: hidden;
                    max-height: 4000px;
                    transition: max-height 0.25s ease;
                }
                .panel--collapsed .panel__body {
                    max-height: 0;
                }
                .card {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                    padding: 12px 16px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .card:hover { background: rgba(255, 255, 255, 0.04) !important; }
                .card:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
                .card:last-child { border-bottom: none; }
                .card__top {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 10px;
                }
                .card__info {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    min-width: 0;
                    flex: 1;
                }
                .card__name {
                    font-size: 0.88rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.95);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .card__right {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                }
                .card__bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 8px;
                }
                .card__meta {
                    font-size: 0.72rem;
                    color: rgba(255, 255, 255, 0.45);
                }
                .card__trophy {
                    width: 28px;
                    height: 28px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    flex-shrink: 0;
                }
                .chip {
                    display: inline-block;
                    padding: 3px 8px;
                    border-radius: 4px;
                    font-size: 0.62rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .chip--locked {
                    background: rgba(247, 198, 13, 0.12);
                    color: var(--status-locked-text, #F7C60D);
                }
                .chip--upcoming {
                    background: rgba(0, 230, 118, 0.1);
                    color: var(--status-upcoming-text, #00E676);
                }
                .chip--completed {
                    background: rgba(205, 86, 89, 0.12);
                    color: var(--status-completed-text, #CD5659);
                }
                .chip--default {
                    background: rgba(255, 255, 255, 0.06);
                    color: rgba(255, 255, 255, 0.45);
                }
                .chip--host {
                    background: rgba(247, 198, 13, 0.12);
                    color: var(--status-locked-text, #F7C60D);
                    box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.25);
                }
                .card__arrow {
                    width: 16px;
                    height: 16px;
                    opacity: 0.3;
                    flex-shrink: 0;
                }
                .card:hover .card__arrow {
                    opacity: 0.6;
                }
                .empty {
                    padding: 32px 16px;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.4);
                    font-size: 0.85rem;
                }
                @media (max-width: 640px) {
                    .panel { max-width: 100%; border-radius: 0; }
                    .card { padding: 10px 14px; }
                    .card__name { font-size: 0.82rem; }
                    .card__trophy { width: 24px; height: 24px; }
                }
            </style>
            <div class="panel ${this._openPanels.private?"":"panel--collapsed"}" data-panel="private">
                <button class="panel__header" type="button" data-toggle="private" aria-expanded="${this._openPanels.private}">
                    <svg class="panel__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    <span class="panel__title">Bet Max Pool History</span>
                    <span class="panel__count">${s.length}</span>
                    <svg class="panel__chevron" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </button>
                <div class="panel__body">
                    ${s.length>0?l:`<div class="empty">You haven't hosted or joined a Bet Max Pool yet.</div>`}
                </div>
            </div>

            <div class="panel ${this._openPanels.public?"":"panel--collapsed"}" data-panel="public" style="margin-top: 16px;">
                <button class="panel__header" type="button" data-toggle="public" aria-expanded="${this._openPanels.public}">
                    <svg class="panel__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
                    <span class="panel__title">Public Tourney History</span>
                    <span class="panel__count">${t.length}</span>
                    <svg class="panel__chevron" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </button>
                <div class="panel__body">
                    ${t.length>0?o:'<div class="empty">No contest history yet</div>'}
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".card[data-contest-id]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.contestId;c&&this.dispatchEvent(new CustomEvent("contest-click",{detail:{contestGuid:c},bubbles:!0,composed:!0}))})}),this.shadowRoot.querySelectorAll("[data-toggle]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.toggle;this._openPanels[c]=!this._openPanels[c];const u=this.shadowRoot.querySelector(`[data-panel="${c}"]`);u&&u.classList.toggle("panel--collapsed",!this._openPanels[c]),i.setAttribute("aria-expanded",String(this._openPanels[c]))})})}}customElements.define("bma-profile-history",F_);class z_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-active-section","data-sections"]}connectedCallback(){this._unsub=Re.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}get activeSection(){return this.getAttribute("data-active-section")||"overview"}render(){const t=this.activeSection,o=((this.getAttribute("data-sections")||"profile")==="top-players"?[{id:"overall",label:"Overall",icon:'<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>'},{id:"earnings",label:"TD$ Won",icon:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>'}]:[{id:"overview",label:"Overview",icon:'<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>'},{id:"contests",label:"Tourneys",icon:'<path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>'},{id:"guide",label:"How to Play",icon:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>'},{id:"account",label:"Account",icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',desktopOnly:!0}]).map(l=>`
            <button class="nav-item ${l.id===t?"nav-item--active":""}${l.desktopOnly?" nav-item--desktop-only":""}" data-section="${l.id}" type="button">
                <svg class="nav-item__icon" viewBox="0 0 24 24" fill="currentColor">${l.icon}</svg>
                <span class="nav-item__label">${l.label}</span>
            </button>
        `).join("");this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                :host {
                    display: block;
                }

                .nav {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    padding: 8px;
                    min-width: 180px;
                }

                .nav-item {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 10px 14px;
                    border: none;
                    border-radius: 8px;
                    background: transparent;
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.85rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: background 0.15s, color 0.15s;
                    -webkit-tap-highlight-color: transparent;
                    text-align: left;
                    width: 100%;
                }

                .nav-item:hover {
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.85);
                }

                .nav-item--active {
                    background: rgba(247, 198, 13, 0.08);
                    color: var(--status-locked-text, #F7C60D);
                }

                .nav-item--active:hover {
                    background: rgba(247, 198, 13, 0.12);
                }

                .nav-item__icon {
                    width: 18px;
                    height: 18px;
                    flex-shrink: 0;
                    opacity: 0.7;
                }

                .nav-item--active .nav-item__icon {
                    opacity: 1;
                }

                .nav-item__label {
                    white-space: nowrap;
                }

                /* Mobile: horizontal segmented rail */
                @media (max-width: 768px) {
                    .nav {
                        flex-direction: row;
                        min-width: 0;
                        padding: 10px 12px;
                        gap: 6px;
                        background: #1A1A1A;
                        border-top: 1px solid rgba(255, 255, 255, 0.06);
                        border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                        overflow-x: auto;
                        scrollbar-width: none;
                        position: sticky;
                        top: 52px;
                        z-index: 90;
                    }
                    .nav::-webkit-scrollbar { display: none; }

                    .nav-item {
                        flex: 1;
                        flex-shrink: 0;
                        padding: 10px 14px;
                        border-radius: 8px;
                        font-size: 0.78rem;
                        gap: 6px;
                        justify-content: center;
                        background: rgba(255, 255, 255, 0.04);
                        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
                    }

                    .nav-item:hover {
                        background: rgba(255, 255, 255, 0.08);
                    }

                    .nav-item--active {
                        background: rgba(247, 198, 13, 0.12);
                        box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.3);
                    }

                    .nav-item--active:hover {
                        background: rgba(247, 198, 13, 0.16);
                    }

                    .nav-item__icon {
                        width: 14px;
                        height: 14px;
                    }

                    .nav-item--desktop-only {
                        display: none;
                    }
                }
            </style>
            <nav class="nav">
                ${o}
            </nav>
        `,this.shadowRoot.querySelectorAll(".nav-item").forEach(l=>{l.addEventListener("click",()=>{const i=l.dataset.section;this.setAttribute("data-active-section",i),this.dispatchEvent(new CustomEvent("section-change",{detail:{section:i},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-nav",z_);class H_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Re.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}render(){this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                :host { display: block; width: 100%; }

                .guide {
                    max-width: min(92%, 820px);
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                /* Section */
                .section {
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }

                .section__header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                }

                .section__icon {
                    width: 22px;
                    height: 22px;
                    color: var(--status-locked-text, #F7C60D);
                    flex-shrink: 0;
                }

                .section__title {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.95);
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                }

                .section__intro {
                    font-size: 0.85rem;
                    color: rgba(255, 255, 255, 0.65);
                    line-height: 1.5;
                    margin: 0;
                }

                /* Quick start cards */
                .steps-row {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 10px;
                }

                .step-card {
                    background: #222222;
                    border-radius: 8px;
                    padding: 16px 14px;
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                }

                .step-card__text {
                    display: flex;
                    flex-direction: column;
                    gap: 3px;
                    min-width: 0;
                }

                .step-card__num {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(247, 198, 13, 0.15);
                    box-shadow: 0 0 0 2px rgba(247, 198, 13, 0.25);
                    color: var(--status-locked-text, #F7C60D);
                    font-size: 1.1rem;
                    font-weight: 900;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .step-card__title {
                    font-size: 0.9rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    letter-spacing: 0.3px;
                }

                .step-card__desc {
                    font-size: 0.8rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.5;
                }

                /* Game mode carousel */
                .modes-rail {
                    display: flex;
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;
                    gap: 12px;
                    padding: 0 4px;
                    scrollbar-width: none;
                    -webkit-overflow-scrolling: touch;
                }
                .modes-rail::-webkit-scrollbar { display: none; }

                .mode-card {
                    flex: 0 0 85%;
                    max-width: 400px;
                    scroll-snap-align: center;
                    background: #222222;
                    border-radius: 10px;
                    padding: 20px 16px;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }

                .mode-card__title {
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }

                .mode-card__desc {
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.55);
                    line-height: 1.4;
                    margin: 0;
                }

                .mode-card__badge {
                    display: inline-block;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 0.58rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .mode-card__badge--active {
                    background: rgba(0, 230, 118, 0.12);
                    color: var(--status-upcoming-text, #00E676);
                }

                .mode-card__badge--soon {
                    background: rgba(247, 198, 13, 0.12);
                    color: var(--status-locked-text, #F7C60D);
                }

                .mode-card ul {
                    margin: 0;
                    padding: 0 0 0 16px;
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.6);
                    line-height: 1.7;
                }

                /* Mode nav (arrows + dots) */
                .modes-nav {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 16px;
                    padding: 10px 0 0;
                }

                .modes-arrow {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                    border: none;
                    background: rgba(255, 255, 255, 0.06);
                    color: rgba(255, 255, 255, 0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: background 0.15s, color 0.15s;
                    flex-shrink: 0;
                    -webkit-tap-highlight-color: transparent;
                }

                .modes-arrow:hover {
                    background: rgba(247, 198, 13, 0.15);
                    color: var(--status-locked-text, #F7C60D);
                }

                .modes-arrow svg {
                    width: 18px;
                    height: 18px;
                    fill: currentColor;
                }

                .modes-dots {
                    display: flex;
                    justify-content: center;
                    gap: 6px;
                    padding: 10px 0 0;
                }

                .modes-dot {
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.2);
                    transition: all 0.2s ease;
                    border: none;
                    padding: 0;
                    cursor: pointer;
                }

                .modes-dot--active {
                    background: var(--status-locked-text, #F7C60D);
                    width: 16px;
                    border-radius: 3px;
                }

                @media (min-width: 641px) {
                    .mode-card { flex: 0 0 46%; }
                }

                /* Banded rows */
                .rows {
                    display: flex;
                    flex-direction: column;
                    background: #222222;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                }

                .row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 12px;
                    padding: 10px 14px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                    font-size: 0.82rem;
                }

                .row:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
                .row:last-child { border-bottom: none; }

                .row__key {
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.9);
                    flex-shrink: 0;
                }

                .row__val {
                    color: rgba(255, 255, 255, 0.55);
                    text-align: right;
                    flex: 1;
                }

                .row--win .row__key { color: var(--status-upcoming-text, #00E676); }
                .row--lose .row__key { color: #FF5252; }
                .row--push .row__key { color: var(--status-locked-text, #F7C60D); }

                /* Subsection label */
                .sub-label {
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: rgba(255, 255, 255, 0.45);
                    margin: 4px 0;
                }

                /* Tip callout */
                .tip {
                    border-left: 3px solid var(--status-locked-text, #F7C60D);
                    padding: 10px 14px;
                    font-size: 0.82rem;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.5;
                    background: rgba(247, 198, 13, 0.04);
                    border-radius: 0 6px 6px 0;
                }

                .tip strong { color: var(--status-locked-text, #F7C60D); }

                /* Coming soon card */
                .coming-soon {
                    background: rgba(247, 198, 13, 0.06);
                    border-radius: 8px;
                    padding: 14px;
                    box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.15);
                    font-size: 0.82rem;
                    color: rgba(255, 255, 255, 0.7);
                    line-height: 1.5;
                }

                .coming-soon strong {
                    color: var(--status-locked-text, #F7C60D);
                }

                /* Odds visual */
                .odds-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 10px;
                }

                .odds-card {
                    background: #222222;
                    border-radius: 8px;
                    padding: 14px;
                    text-align: center;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                }

                .odds-card__value {
                    font-size: 1.4rem;
                    font-weight: 800;
                    color: var(--status-locked-text, #F7C60D);
                    margin-bottom: 4px;
                }

                .odds-card__label {
                    font-size: 0.72rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.5);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 6px;
                }

                .odds-card__desc {
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.55);
                    line-height: 1.4;
                }

                @media (max-width: 640px) {
                    .guide { max-width: 100%; gap: 20px; padding: 0 8px; }

                    .section__header { padding-bottom: 6px; }
                    .section__title { font-size: 0.85rem; }
                    .section__intro { font-size: 0.82rem; }

                    /* Steps */
                    .steps-row { grid-template-columns: 1fr; gap: 6px; }
                    .step-card { padding: 12px; gap: 10px; }
                    .step-card__num { width: 34px; height: 34px; font-size: 0.95rem; }
                    .step-card__title { font-size: 0.85rem; }
                    .step-card__desc { font-size: 0.78rem; }

                    /* Mode carousel */
                    .mode-card { flex: 0 0 82%; padding: 16px 14px; }
                    .mode-card__title { font-size: 0.85rem; }
                    .mode-card__desc { font-size: 0.72rem; }
                    .mode-card ul { font-size: 0.72rem; line-height: 1.6; }

                    .modes-arrow { width: 28px; height: 28px; }
                    .modes-arrow svg { width: 14px; height: 14px; }

                    /* Odds: stack */
                    .odds-row { grid-template-columns: 1fr; gap: 8px; }
                    .odds-card { padding: 12px; }
                    .odds-card__value { font-size: 1.15rem; }
                    .odds-card__desc { font-size: 0.72rem; }

                    /* Rows: stack label/value */
                    .row { flex-direction: column; gap: 2px; align-items: flex-start; padding: 8px 12px; }
                    .row__val { text-align: left; font-size: 0.75rem; }
                    .row__key { font-size: 0.78rem; }

                    .sub-label { font-size: 0.68rem; }
                    .tip { font-size: 0.78rem; padding: 8px 12px; }

                    .coming-soon { font-size: 0.78rem; padding: 12px; }
                }
            </style>

            <div class="guide">

                <!-- QUICK START -->
                <div class="section">
                    <div class="section__header">
                        <svg class="section__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                        <span class="section__title">Quick Start</span>
                    </div>
                    <p class="section__intro">A free-to-play sports tournament platform where you compete against other players by making picks on real sports games.</p>
                    <div class="steps-row">
                        <div class="step-card">
                            <span class="step-card__num">1</span>
                            <div class="step-card__text">
                                <span class="step-card__title">Join a Tournament</span>
                                <span class="step-card__desc">Browse daily, weekly, or seasonal tournaments and join for free.</span>
                            </div>
                        </div>
                        <div class="step-card">
                            <span class="step-card__num">2</span>
                            <div class="step-card__text">
                                <span class="step-card__title">Make Your Picks</span>
                                <span class="step-card__desc">Place bets using Tournament Dollars (TD$) on real games.</span>
                            </div>
                        </div>
                        <div class="step-card">
                            <span class="step-card__num">3</span>
                            <div class="step-card__text">
                                <span class="step-card__title">Climb the Leaderboard</span>
                                <span class="step-card__desc">Grow your TD$ balance. Highest balance wins.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- GAME MODES -->
                <div class="section">
                    <div class="section__header">
                        <svg class="section__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19h0c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75h0c1.55 0 2.74-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg>
                        <span class="section__title">Game Modes</span>
                    </div>
                    <div class="modes-rail" id="guide-modes-rail">
                        <div class="mode-card">
                            <div class="mode-card__title">Bet Max Tourney <span class="mode-card__badge mode-card__badge--active">Default</span></div>
                            <p class="mode-card__desc">The flagship mode. Place any bets, reinvest winnings, grow your balance.</p>
                            <ul>
                                <li>Place any bets across the slate</li>
                                <li>Wager entire starting TD$ to qualify</li>
                                <li>Reinvest winnings to compound</li>
                                <li>Highest projected balance wins</li>
                            </ul>
                        </div>
                        <div class="mode-card">
                            <div class="mode-card__title">Set It and Forget It</div>
                            <p class="mode-card__desc">Build a balanced lineup with one of each bet type across the slate.</p>
                            <ul>
                                <li>One Spread, Money Line, and O/U required</li>
                                <li>Spend entire TD$ balance</li>
                                <li>One bet per match per type</li>
                                <li>Highest total payout wins</li>
                            </ul>
                        </div>
                        <div class="mode-card" style="box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2); background: rgba(247, 198, 13, 0.04);">
                            <div class="mode-card__title">Longshot Mayhem <span class="mode-card__badge mode-card__badge--soon">Coming Soon</span></div>
                            <p class="mode-card__desc">Boosted payouts on underdogs and plus-money plays. Chalk barely moves the needle, upsets blow the pool wide open.</p>
                            <ul>
                                <li>Plus-money bets pay a bonus</li>
                                <li>Favorites pay lighter than usual</li>
                                <li>Upsets launch you up the board</li>
                                <li>High variance, high reward</li>
                            </ul>
                        </div>
                        <div class="mode-card" style="box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2); background: rgba(247, 198, 13, 0.04);">
                            <div class="mode-card__title">Bracket Mode <span class="mode-card__badge mode-card__badge--soon">Coming Soon</span></div>
                            <p class="mode-card__desc">Classic head-to-head bracket. Pick winners round by round and survive all the way to the final matchup.</p>
                            <ul>
                                <li>Fill out the bracket up front</li>
                                <li>Advance through each round</li>
                                <li>Most rounds survived wins</li>
                                <li>Head-to-head against every entrant</li>
                            </ul>
                        </div>
                        <div class="mode-card" style="box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2); background: rgba(247, 198, 13, 0.04);">
                            <div class="mode-card__title">Survivor <span class="mode-card__badge mode-card__badge--soon">Coming Soon</span></div>
                            <p class="mode-card__desc">One pick a day, and your pick has to hit. Miss once and you're out. Last entrant standing takes the pool.</p>
                            <ul>
                                <li>One bet per day</li>
                                <li>Must win to advance</li>
                                <li>One miss eliminates you</li>
                                <li>Last entrant standing wins</li>
                            </ul>
                        </div>
                        <div class="mode-card" style="box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2); background: rgba(247, 198, 13, 0.04);">
                            <div class="mode-card__title">Squads <span class="mode-card__badge mode-card__badge--soon">Coming Soon</span></div>
                            <p class="mode-card__desc">Team-based competition. Your squad's total score is the combined sum of all members' TD$ balances.</p>
                            <ul>
                                <li>Form or join a squad</li>
                                <li>Compete as a team</li>
                                <li>Combined TD$ determines rank</li>
                            </ul>
                        </div>
                    </div>
                    <div class="modes-nav">
                        <button class="modes-arrow" id="guide-modes-prev" type="button" aria-label="Previous">
                            <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
                        </button>
                        <div class="modes-dots" id="guide-modes-dots">
                            <button class="modes-dot modes-dot--active" type="button"></button>
                            <button class="modes-dot" type="button"></button>
                            <button class="modes-dot" type="button"></button>
                            <button class="modes-dot" type="button"></button>
                            <button class="modes-dot" type="button"></button>
                            <button class="modes-dot" type="button"></button>
                        </div>
                        <button class="modes-arrow" id="guide-modes-next" type="button" aria-label="Next">
                            <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                        </button>
                    </div>
                </div>

                <!-- SCORING & TD$ -->
                <div class="section">
                    <div class="section__header">
                        <svg class="section__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>
                        <span class="section__title">Scoring & TD$</span>
                    </div>
                    <div class="rows">
                        <div class="row"><span class="row__key">Starting Balance</span><span class="row__val">Varies by tournament (e.g., TD$ 500)</span></div>
                        <div class="row"><span class="row__key">Goal</span><span class="row__val">Highest balance at tournament end wins</span></div>
                        <div class="row"><span class="row__key">Qualification</span><span class="row__val">Must wager entire starting TD$ to qualify</span></div>
                        <div class="row"><span class="row__key">Note</span><span class="row__val">TD$ cannot be withdrawn or converted to real money</span></div>
                    </div>
                    <div class="sub-label">Pick Outcomes</div>
                    <div class="rows">
                        <div class="row row--win"><span class="row__key">Win</span><span class="row__val">Pick correct. Earn TD$ based on odds. (100 TD$ at +150 = 150 profit)</span></div>
                        <div class="row row--lose"><span class="row__key">Lose</span><span class="row__val">Pick wrong. Lose the TD$ wagered.</span></div>
                        <div class="row row--push"><span class="row__key">Push</span><span class="row__val">Result lands on the line. TD$ returned.</span></div>
                    </div>
                    <div class="sub-label">Understanding Odds</div>
                    <div class="odds-row">
                        <div class="odds-card">
                            <div class="odds-card__value">+150</div>
                            <div class="odds-card__label">Underdog</div>
                            <div class="odds-card__desc">Bet 100 TD$, win 150 TD$ profit. Higher number = bigger payout.</div>
                        </div>
                        <div class="odds-card">
                            <div class="odds-card__value">-110</div>
                            <div class="odds-card__label">Favorite</div>
                            <div class="odds-card__desc">Bet 110 TD$ to win 100 TD$ profit. Higher number = safer pick.</div>
                        </div>
                    </div>
                    <div class="tip">
                        <strong>Pro Tip:</strong> Place bets early and reinvest your winnings as they settle. Compounding your balance is the key to climbing the leaderboard.
                    </div>
                </div>

                <!-- MECHANICS -->
                <div class="section">
                    <div class="section__header">
                        <svg class="section__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.488.488 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>
                        <span class="section__title">How It Works</span>
                    </div>
                    <div class="steps-row">
                        <div class="step-card">
                            <span class="step-card__num">1</span>
                            <div class="step-card__text">
                                <span class="step-card__title">Browse & Join</span>
                                <span class="step-card__desc">Check sport, length, start time. Click Join to enter.</span>
                            </div>
                        </div>
                        <div class="step-card">
                            <span class="step-card__num">2</span>
                            <div class="step-card__text">
                                <span class="step-card__title">Pick & Wager</span>
                                <span class="step-card__desc">Choose bet type, set TD$ amount, confirm.</span>
                            </div>
                        </div>
                        <div class="step-card">
                            <span class="step-card__num">3</span>
                            <div class="step-card__text">
                                <span class="step-card__title">Track & Win</span>
                                <span class="step-card__desc">Watch the leaderboard. Top players earn trophies.</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- GLOSSARY -->
                <div class="section">
                    <div class="section__header">
                        <svg class="section__icon" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/></svg>
                        <span class="section__title">Glossary</span>
                    </div>
                    <div class="sub-label">Betting Terms</div>
                    <div class="rows">
                        <div class="row"><span class="row__key">Moneyline</span><span class="row__val">Bet on which team wins outright</span></div>
                        <div class="row"><span class="row__key">Spread</span><span class="row__val">Handicap applied to the favorite</span></div>
                        <div class="row"><span class="row__key">Totals (O/U)</span><span class="row__val">Combined score over or under a set number</span></div>
                        <div class="row"><span class="row__key">Push</span><span class="row__val">Result lands on the line, wager returned</span></div>
                        <div class="row"><span class="row__key">Favorite</span><span class="row__val">Expected winner, negative odds (-)</span></div>
                        <div class="row"><span class="row__key">Underdog</span><span class="row__val">Expected loser, positive odds (+)</span></div>
                        <div class="row"><span class="row__key">Cover</span><span class="row__val">When a team beats the point spread</span></div>
                    </div>
                    <div class="sub-label">Sports Quick Reference</div>
                    <div class="rows">
                        <div class="row"><span class="row__key">NFL</span><span class="row__val">Touchdown, Field Goal, Sack, Interception, Red Zone</span></div>
                        <div class="row"><span class="row__key">NBA</span><span class="row__val">Three-Pointer, Rebound, Assist, Double-Double</span></div>
                        <div class="row"><span class="row__key">MLB</span><span class="row__val">Home Run, RBI, Strikeout, Run Line</span></div>
                        <div class="row"><span class="row__key">NHL</span><span class="row__val">Goal, Assist, Power Play, Puck Line</span></div>
                        <div class="row"><span class="row__key">Soccer</span><span class="row__val">Clean Sheet, Stoppage Time, Corner Kick</span></div>
                    </div>
                </div>

            </div>
        `;const t=this.shadowRoot.getElementById("guide-modes-rail"),s=this.shadowRoot.querySelectorAll("#guide-modes-dots .modes-dot"),a=this.shadowRoot.getElementById("guide-modes-prev"),n=this.shadowRoot.getElementById("guide-modes-next");if(t&&s.length){const r=()=>(t.firstElementChild?.offsetWidth||300)+12;t.addEventListener("scroll",()=>{const o=Math.round(t.scrollLeft/r());s.forEach((l,i)=>l.classList.toggle("modes-dot--active",i===o))},{passive:!0}),s.forEach((o,l)=>{o.addEventListener("click",()=>{t.scrollTo({left:l*r(),behavior:"smooth"})})}),a&&a.addEventListener("click",()=>{t.scrollBy({left:-r(),behavior:"smooth"})}),n&&n.addEventListener("click",()=>{t.scrollBy({left:r(),behavior:"smooth"})})}}}customElements.define("bma-profile-guide",H_);const j_={class:"profile-layout"},U_={class:"profile-shell"},q_={class:"profile-sidebar"},V_=["data-active-section"],G_={class:"profile-content"},K_={class:"profile-panel"},Y_={class:"profile-panel"},W_={class:"profile-panel"},J_={class:"profile-panel profile-panel--account-desktop"},X_={class:"account-panel"},Q_={class:"mobile-account-bar"},Z_={__name:"profile_route",setup(e){const t=ct(),s=Te(),a=Me("overview"),n=Me(!1),r=()=>{t.push({name:"home_route"})},o=d=>{a.value=d.detail?.section||"overview"},l=d=>{const p=d.detail?.contestGuid;p&&(window._pendingTournGuid=p,t.push({name:"home_route"}))},i=()=>{const d=s.appSession?.session_user||{},p=d.guid,f=s.coreTourn.length>0?s.coreTourn[s.coreTourn.length-1].data:[],g=f.filter(Y=>(Y.entities?.guids||[]).includes(p)),b=g.filter(Y=>["LOCKED","UPCOMING"].includes(Y.status||Y.class)),v=g.filter(Y=>(Y.status||Y.class)==="COMPLETED");let h=0,m=0,_=0;g.forEach(Y=>{(Array.isArray(Y.tags)?Y.tags:[]).forEach(W=>{if(!W||typeof W!="object")return;const ie=(W.entity_guid===p?W.badge:null)||(typeof W[p]=="string"?W[p]:null);typeof ie=="string"&&ie.startsWith("--badge__ribbon--")&&(ie==="--badge__ribbon--gold"?h++:ie==="--badge__ribbon--silver"?m++:ie==="--badge__ribbon--bronze"&&_++)})});const y={};g.forEach(Y=>{(Y.sports_allowed||[]).forEach(J=>{const ie=Ye.find(X=>X.key===J.key)?.group||"Other";y[ie]=(y[ie]||0)+1})});let w="",x="",E=0;Object.entries(y).forEach(([Y,J])=>{J>E&&(E=J,w=Y,x=Y)});const I=Pe._betStatsCache?.stats||null;let L="—",C="";if(I){const Y=I.wins+I.losses;Y>0&&(L=Math.round(I.wins/Y*100)+"%",C=`${I.wins}-${I.losses}`)}const k=Y=>{let J=null;(Array.isArray(Y.tags)?Y.tags:[]).forEach(ee=>{if(!ee||typeof ee!="object")return;const G=(ee.entity_guid===p?ee.badge:null)||(typeof ee[p]=="string"?ee[p]:null);G==="--badge__ribbon--gold"?J=1:G==="--badge__ribbon--silver"?J=2:G==="--badge__ribbon--bronze"&&(J=3)});const ie=Y.sports_allowed?.[0]?.key||"",X=Ye.find(ee=>ee.key===ie),V=!!(Y.creator_guid&&Y.creator_guid===p);return{id:Y.guid,name:Y.caption||"Tournament",sport:X?.title||"",sports:[ie],status:Y.status||Y.class||"",placement:J,startTime:Y.window_start_time,isPrivate:Y.is_private===!0,isHosting:V}},S=(Y,J)=>new Date(J.status_time||0)-new Date(Y.status_time||0),$=[...g].filter(Y=>Y.is_private!==!0).sort(S).slice(0,20).map(k),H=f.filter(Y=>Y.is_private===!0).filter(Y=>{const J=Y.creator_guid&&Y.creator_guid===p,W=(Y.entities?.guids||[]).includes(p);return J||W}).sort(S).slice(0,20).map(k);return{username:d.userName||d.name||"Player",email:d.email||"",activeCount:b.length,playedCount:v.length,trophyCount:h+m+_,gold:h,silver:m,bronze:_,firstPlace:h,favSport:w,favGroup:x,winRate:L,record:C,recentContests:$,privateContests:H}},c=()=>{const d=i(),p=document.querySelector("bma-profile-hero");p&&(p.setAttribute("data-username",d.username),p.setAttribute("data-email",d.email),p.setAttribute("data-active-count",String(d.activeCount)),p.setAttribute("data-played-count",String(d.playedCount)),p.setAttribute("data-trophy-count",String(d.trophyCount)));const f=document.querySelector("bma-profile-stats");f&&(f.setAttribute("data-played",String(d.playedCount)),f.setAttribute("data-first-place",String(d.firstPlace)),f.setAttribute("data-trophies",String(d.trophyCount)),f.setAttribute("data-favorite-sport",d.favSport),f.setAttribute("data-favorite-sport-group",d.favGroup),f.setAttribute("data-win-rate",d.winRate),f.setAttribute("data-win-loss-record",d.record));const g=document.querySelector("bma-profile-history");g&&(g.setAttribute("data-contests",JSON.stringify(d.recentContests)),g.setAttribute("data-private-contests",JSON.stringify(d.privateContests)));const b=document.getElementById("profile-trophy-pack");b&&(b.innerHTML=`
        <div class="trophy-pack__header">My Trophies</div>
        <div class="trophy-podium">
          <div class="podium-col podium-col--silver">
            <div class="podium-col__trophy" style="background-image: var(--trophy-silver-tall); width: 56px; height: 56px;"></div>
            <span class="podium-col__count" style="color: #C0C0C0;">&times;${d.silver}</span>
            <div class="podium-col__pedestal podium-col__pedestal--silver">
              <span class="podium-col__place">2nd</span>
            </div>
          </div>
          <div class="podium-col podium-col--gold">
            <div class="podium-col__trophy" style="background-image: var(--trophy-gold-tall); width: 72px; height: 72px;"></div>
            <span class="podium-col__count" style="color: var(--status-locked-text, #FFD700);">&times;${d.gold}</span>
            <div class="podium-col__pedestal podium-col__pedestal--gold">
              <span class="podium-col__place">1st</span>
            </div>
          </div>
          <div class="podium-col podium-col--bronze">
            <div class="podium-col__trophy" style="background-image: var(--trophy-bronze-tall); width: 48px; height: 48px;"></div>
            <span class="podium-col__count" style="color: #DA954B;">&times;${d.bronze}</span>
            <div class="podium-col__pedestal podium-col__pedestal--bronze">
              <span class="podium-col__place">3rd</span>
            </div>
          </div>
        </div>
      `)};let u=null;return lt(async()=>{if(!s.appSession.session_user.authenticated){t.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),c();const d=s.appSession?.session_user?.guid;d&&Pe._ensureBetStatsCache(d).then(p=>{p&&c()}),u=ce.subscribe(s.hierTopics.ROUTE__HOME_HYDRATE,()=>{c()})}),is(()=>{u&&ce.unsubscribe(u)}),(d,p)=>(ue(),fe("main",j_,[A("div",{class:"profile-header"},[A("button",{class:"profile-header__back",onClick:r,"aria-label":"Back"},[...p[7]||(p[7]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[A("polyline",{points:"15 18 9 12 15 6"})],-1)])]),p[8]||(p[8]=A("h1",{class:"profile-header__title"},"My Profile",-1))]),p[18]||(p[18]=A("bma-profile-hero",null,null,-1)),A("div",U_,[A("aside",q_,[A("bma-profile-nav",{"data-active-section":a.value,onSectionChange:o},null,40,V_)]),A("div",G_,[Bt(A("section",K_,[...p[9]||(p[9]=[A("div",{id:"profile-trophy-pack",class:"trophy-pack"},null,-1),A("bma-profile-stats",null,null,-1)])],512),[[qa,a.value==="overview"]]),Bt(A("section",Y_,[A("bma-profile-history",{onContestClick:l},null,32)],512),[[qa,a.value==="contests"]]),Bt(A("section",W_,[...p[10]||(p[10]=[A("bma-profile-guide",null,null,-1)])],512),[[qa,a.value==="guide"]]),Bt(A("section",J_,[A("div",X_,[A("button",{class:"account-btn",onClick:p[0]||(p[0]=f=>ut(ce).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[11]||(p[11]=[A("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[A("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Fe(" Change Password ",-1)])]),A("button",{class:"account-btn account-btn--signout",onClick:p[1]||(p[1]=f=>ut(ce).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[12]||(p[12]=[A("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[A("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Fe(" Sign Out ",-1)])])])],512),[[qa,a.value==="account"]])])]),A("div",Q_,[n.value?(ue(),fe("div",{key:0,class:"mobile-account-scrim",onClick:p[2]||(p[2]=f=>n.value=!1)})):xe("",!0),n.value?(ue(),fe("div",{key:1,class:"mobile-account-bar__panel",onClick:p[5]||(p[5]=zs(()=>{},["stop"]))},[A("button",{class:"account-btn",onClick:p[3]||(p[3]=f=>ut(ce).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[13]||(p[13]=[A("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[A("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Fe(" Change Password ",-1)])]),A("button",{class:"account-btn account-btn--signout",onClick:p[4]||(p[4]=f=>ut(ce).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[14]||(p[14]=[A("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[A("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Fe(" Sign Out ",-1)])])])):xe("",!0),A("div",{class:"mobile-account-bar__trigger",onClick:p[6]||(p[6]=f=>n.value=!n.value)},[p[16]||(p[16]=A("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[A("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})],-1)),p[17]||(p[17]=A("span",null,"Account",-1)),(ue(),fe("svg",{class:Ve(["mobile-account-bar__chevron",n.value?"mobile-account-bar__chevron--open":""]),viewBox:"0 0 24 24",fill:"currentColor"},[...p[15]||(p[15]=[A("path",{d:"M7 10l5 5 5-5z"},null,-1)])],2))])])]))}};class e0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-rank","data-trophies","data-td-dollars"]}connectedCallback(){this._unsub=Re.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",s=this.getAttribute("data-rank")||"—",a=this.getAttribute("data-trophies")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),r=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString(),o=t.charAt(0).toUpperCase();this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                :host { display: block; width: 100%; }

                .hero {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 28px 24px 20px;
                    background: linear-gradient(135deg, #1a5235 0%, #0f3320 100%);
                    border-top: 2px solid rgba(255, 215, 0, 0.3);
                    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                    position: relative;
                    overflow: hidden;
                }

                .hero__label {
                    font-size: 0.7rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1.5px;
                    color: rgba(255, 255, 255, 0.55);
                    margin-bottom: 8px;
                }

                .hero__rank-row {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 4px;
                }

                .hero__avatar {
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    background: #2A3A2E;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1rem;
                    font-weight: 800;
                    color: var(--status-locked-text, #F7C60D);
                    text-transform: uppercase;
                }

                .hero__rank {
                    font-size: 1.8rem;
                    font-weight: 900;
                    color: var(--status-locked-text, #F7C60D);
                    line-height: 1;
                }

                .hero__name {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.95);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    margin-bottom: 16px;
                }

                .hero__kpis {
                    display: flex;
                    width: 100%;
                    max-width: 360px;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                }

                .hero__kpi {
                    flex: 1;
                    text-align: center;
                    padding: 12px 8px 4px;
                    border-right: 1px solid rgba(255, 255, 255, 0.06);
                }

                .hero__kpi:last-child { border-right: none; }

                .hero__kpi-value {
                    display: block;
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    font-variant-numeric: tabular-nums;
                }

                .hero__kpi-label {
                    display: block;
                    font-size: 0.6rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.45);
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-top: 2px;
                }

                @media (max-width: 480px) {
                    .hero { padding: 20px 16px 14px; }
                    .hero__rank { font-size: 1.5rem; }
                    .hero__name { font-size: 0.95rem; }
                    .hero__kpi-value { font-size: 0.95rem; }
                }
            </style>
            <div class="hero">
                <span class="hero__label">Your Global Rank</span>
                <div class="hero__rank-row">
                    <div class="hero__avatar">${o}</div>
                    <span class="hero__rank">${s==="—"?"—":"#"+s}</span>
                </div>
                <div class="hero__name">${t}</div>
                <div class="hero__kpis">
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${a}</span>
                        <span class="hero__kpi-label">Trophies</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">TD$ ${r}</span>
                        <span class="hero__kpi-label">Total Earned</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-top-players-hero",e0);const t0={class:"top-players-layout"},s0={class:"top-players-shell"},a0={class:"top-players-sidebar"},n0=["data-active-section"],r0={__name:"top_players_route",setup(e){const t=ct(),s=Te(),a=Me("overall"),n=()=>{t.push({name:"home_route"})},r=i=>{const c=i.detail?.section||"overall";a.value=c;const u=document.querySelector(`#global-leaderboard-container .glb__tab[data-tab="${c}"]`);u&&u.click()},o=i=>{const c=s.appSession?.session_user?.guid,u=s.appSession?.session_user?.userName||s.appSession?.session_user?.name||"Player",d=i.find(f=>f.user_guid===c),p=document.querySelector("bma-top-players-hero");if(p)if(d){const f=i.indexOf(d)+1;p.setAttribute("data-username",d.username||u),p.setAttribute("data-rank",String(f)),p.setAttribute("data-trophies",String(d.tournaments_won||0)),p.setAttribute("data-td-dollars",String(d.total_payout||0))}else p.setAttribute("data-username",u),p.setAttribute("data-rank","—"),p.setAttribute("data-trophies","0"),p.setAttribute("data-td-dollars","0")},l=async()=>{try{const i=Pe._globalLBCache?.ALL;let c;i?.data&&Date.now()-i.ts<300*1e3?c=i.data:(c=await ke.fetchAllTimeLeaderboard("ALL",100,"td"),Pe._globalLBCache&&(Pe._globalLBCache.ALL={data:c,ts:Date.now(),inflight:!1})),o(c?.data||[]),typeof window._renderTopPlayers=="function"&&await window._renderTopPlayers("ALL")}catch(i){console.warn("[top_players_route] load failed",i)}};return lt(()=>{if(!s.appSession.session_user.authenticated){t.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),requestAnimationFrame(()=>{l()})}),(i,c)=>(ue(),fe("main",t0,[A("div",{class:"top-players-header"},[A("button",{class:"top-players-header__back",onClick:n,"aria-label":"Back"},[...c[0]||(c[0]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[A("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=A("h1",{class:"top-players-header__title"},"Top Players",-1))]),c[3]||(c[3]=A("bma-top-players-hero",null,null,-1)),A("div",s0,[A("aside",a0,[A("bma-profile-nav",{"data-active-section":a.value,onSectionChange:r,"data-sections":"top-players"},null,40,n0)]),c[2]||(c[2]=A("div",{class:"top-players-content"},[A("div",{id:"global-leaderboard-container"},[A("div",{class:"leaderboard-empty"},[A("p",null,"Loading leaderboard...")])])],-1))])]))}},o0={class:"play-cntr","data-current-tourn-guid":"","data-current-tourn-action":""},i0={id:"play-section-PLAY",class:"play-section",style:{display:"none","padding-top":"8px"}},l0={class:"bet-grid"},c0={class:"bet-grid__slip","data-active-bet-tab":"MYBETS"},d0={class:"bet-grid__slip-BETSLIP",style:{display:"none"},"data-bets-valid":"false"},u0=["innerHTML"],p0={__name:"play_route",setup(e){const t=ct(),s=Ba(),a=Te(),n=window.EMPTY_BETSLIP_HTML||"",r=()=>{t.push({name:"home_route"})},o=()=>{const i=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),u=document.querySelector(".bet-grid__toggle-container"),d=document.querySelector(".bet-grid__select"),p=document.querySelector(".bet-grid__slip");if(!i||!c||!u||!d||!p){console.warn("[play_route] initBetGridToggle: missing elements");return}const f=window.matchMedia("(orientation: portrait)").matches,g=window.matchMedia("(max-width: 768px)").matches,b=h=>{d.classList.toggle("collapsed",h),p.classList.toggle("collapsed",!h),c.textContent=h?"Close Bet Slip":"Open Bet Slip",u.classList.toggle("bet-grid__toggle-container--open",h)};(f||g)&&b(!1);let v=null;i.addEventListener("pointerdown",h=>{v=h.pointerId}),i.addEventListener("pointerup",h=>{if(h.pointerId!==v)return;v=null;const m=!p.classList.contains("collapsed");b(!m)}),i.addEventListener("pointercancel",()=>{v=null}),i.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation()})},l=i=>{const c=i.target.closest("[data-publish-route-home], [data-sodapop-close]");c&&c.dataset?.publishRouteHome?.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&(document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(d=>{d.classList.toggle("dash-nav__btn--active",d===c)}),ce.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`))};return lt(async()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}const i=s.query.guid||"",c=s.query.action||"INFO";if(!i){console.warn("[play_route] No tournament guid provided"),t.push({name:"home_route"});return}const u=a.appSession?.session_user?.guid;if(u)try{const d=await ke.fetchBetSlips(u,i);d?.rows&&(a.pushcoreBetSlip({timestamp:Date.now(),source:"API",data:d.rows}),setTimeout(()=>{ce.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(d))},300))}catch(d){console.warn("[play_route] fetchBetSlips failed:",d)}document.body.classList.add("route-locked"),document.addEventListener("click",l),window.initBetGridToggle=o,requestAnimationFrame(()=>{typeof Pe.initPlayScreen=="function"&&Pe.initPlayScreen(i,c)})}),is(()=>{document.body.classList.remove("route-locked"),document.removeEventListener("click",l),delete window.initBetGridToggle;const i=document.querySelector(".play-cntr");i&&(i.dataset.currentTournGuid="",i.dataset.currentTournAction="")}),(i,c)=>(ue(),fe("article",o0,[A("div",{class:"head-caption tourn-dashboard"},[A("div",{class:"head-caption__back",onClick:r,role:"button",tabindex:"0","aria-label":"Back"},[...c[0]||(c[0]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[A("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=A("section",{class:"head-caption__content"},[A("h3",{id:"pop-play__tourn-caption--id",class:"pop-play__tourn-caption"},"Tournament"),A("p",{id:"pop-play__tourn-tagline--id",class:"pop-play__tourn-tagline"},"Loading...")],-1))]),c[6]||(c[6]=pt('<div class="dash-stats"><div class="dash-stat"><span class="dash-stat__label">TD$ Balance</span><span class="dash-stat__value" id="dashboard-td-balance">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--balance" style="width:100%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">At Risk</span><span class="dash-stat__value dash-stat__value--pending" id="dashboard-td-pending">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--pending" style="width:0%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">Rank</span><span class="dash-stat__value" id="dashboard-rank"><span class="tourn-dashboard__rank-text">-/-</span><span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--participants" style="width:0%;"></div></div></div></div><nav class="dash-nav"><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><span>Info</span></button><button id="btn-join__play--id" class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="visibility:hidden;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><span>Play</span></button><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"></path></svg><span>Leaderboard</span></button></nav><div id="play-section-INFO" class="play-section play-section--active"><div id="pop-play__caro-info-summary2--id"></div><div id="pop-play__caro-info-summary1--id"></div><div id="pop-play__caro-info-list--id"></div></div>',3)),A("div",i0,[A("article",l0,[c[5]||(c[5]=pt('<section class="bet-grid__select"><bma-game-mode-progress id="game-mode-progress" hidden></bma-game-mode-progress><article class="select-grid"></article></section><div class="bet-grid__toggle-container"><button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle bet slip"><span class="bet-grid__toggle-summary"><span class="bet-grid__toggle-badge" id="bet-grid-toggle-count">0</span><span class="bet-grid__toggle-label">Bets</span></span><span class="bet-grid__toggle-action"><span class="bet-grid__toggle-text">Open Bet Slip</span><svg class="bet-grid__toggle-chevron" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 14l5-5 5 5z"></path></svg></span></button></div>',2)),A("aside",c0,[c[3]||(c[3]=pt('<nav class="bet-slip__tabs"><button class="bet-slip-tab" data-bet-tab="BETSLIP">Bet Slip<span class="bet-slip-tab__badge bet-slip-tab__badge--slip" id="bet-slip-tab-slip-badge" style="visibility:hidden;">0</span></button><button class="bet-slip-tab" data-bet-tab="MYBETS">My Bets<span class="bet-slip-tab__badge bet-slip-tab__badge--mybets" id="bet-slip-tab-mybets-badge" style="visibility:hidden;">0</span></button></nav>',1)),A("section",d0,[A("div",{class:"bet-grid__slip-BETSLIP-content",innerHTML:ut(n)},null,8,u0),c[2]||(c[2]=pt('<output class="bet-grid__slip-BETSLIP-summary"><div class="summary-row summary-row--labels"><div class="summary-cell">TD$</div><div class="summary-cell">Stake</div><div class="summary-cell">Payout</div></div><div class="summary-row summary-row--values"><div id="summary-balance" class="summary-cell">0.00</div><div id="summary-stake" class="summary-cell">0.00</div><div id="summary-payout" class="summary-cell">0.00</div></div></output><button class="bet-grid__slip-BETSLIP-cta" data-publish-betslip="COREBETSLIP.BET">BET!</button>',2))]),c[4]||(c[4]=A("div",{class:"bet-grid__slip-MYBETS"},null,-1))])])]),c[7]||(c[7]=A("div",{id:"play-section-LEADERBOARD",class:"play-section",style:{display:"none"}},[A("div",{id:"pop-play__caro-leaderboard--id"})],-1)),c[8]||(c[8]=A("br",null,null,-1))]))}},f0={class:"preview-cntr"},h0={class:"head-caption tourn-dashboard"},m0={class:"head-caption__content"},g0={class:"pop-play__tourn-caption"},b0={class:"pop-play__tourn-tagline"},v0={key:0,class:"preview-wrap"},_0={key:0,class:"preview-invite-band"},y0={class:"info-summary-pack"},w0={class:"info-summary-pack__stat"},x0={class:"info-summary-pack__stat-value",style:{color:"var(--status-upcoming-text, #00E676)"}},T0={class:"info-summary-pack__stat"},S0={class:"info-summary-pack__stat-value"},k0={class:"info-summary-pack__stat"},E0={class:"info-summary-pack__stat-value"},A0={class:"info-pack info-pack--padded"},C0={class:"info-progress-status"},P0={class:"info-progress-status__row"},O0={key:0,class:"preview-countdown"},$0={class:"preview-schedule-row"},M0={class:"preview-schedule-value"},L0={class:"preview-schedule-value"},R0={key:1,class:"info-pack info-pack--padded preview-joined"},D0={class:"preview-section-row"},I0={class:"preview-section-meta"},N0={class:"preview-players-row"},B0={class:"preview-player-avatar"},F0={class:"preview-player-name"},z0={key:0,class:"preview-player-more"},H0={key:2,class:"info-pack info-pack--padded preview-trophies"},j0={class:"preview-trophy-podium"},U0={key:0,class:"preview-trophy preview-trophy--silver"},q0={class:"preview-trophy-count"},V0={key:1,class:"preview-trophy preview-trophy--gold"},G0={class:"preview-trophy-count"},K0={key:2,class:"preview-trophy preview-trophy--bronze"},Y0={class:"preview-trophy-count"},W0={class:"info-pack preview-legend"},J0={class:"preview-legend-item"},X0={class:"preview-legend-value"},Q0={class:"preview-legend-item"},Z0={class:"preview-legend-value"},ey={class:"preview-legend-item"},ty={class:"preview-legend-value",style:{color:"var(--status-locked-text, #F7C60D)"}},sy={key:3,class:"info-pack info-pack--padded preview-invite-composer"},ay={class:"preview-section-row"},ny={key:0,class:"preview-section-meta"},ry=["disabled"],oy=["disabled"],iy={key:0,class:"invite-form__hint"},ly={key:1,class:"invite-form__error"},cy={key:2,class:"invite-sent-list"},dy={class:"invite-sent-row__main"},uy={class:"invite-sent-row__name"},py=["onClick","aria-label"],fy={class:"preview-cta-bar"},hy={key:1,class:"preview-cta-hint"},my={key:2,class:"preview-cta-hint"},gy={key:1,class:"preview-empty"},by={__name:"preview_route",setup(e){const t=ct(),s=Ba(),a=Te(),n=ge(()=>s.params.guid||""),r=ge(()=>s.query.s||null),o=Me(null),l=Me("idle"),i=ge(()=>{if(a.coreTourn.length){const M=a.coreTourn[a.coreTourn.length-1].data.find(q=>q.guid===n.value);if(M)return M}return o.value}),c=ge(()=>a.appSession?.session_user?.authenticated===!0),u=ge(()=>!c.value),d=ge(()=>a.appSession?.session_user?.guid||""),p=ge(()=>!c.value||!i.value?!1:(i.value.entities?.guids||[]).includes(d.value)),f=ge(()=>{if(!c.value||!i.value)return!1;const P=i.value.creator_guid;return!!P&&P===d.value}),g=Me(""),b=Me(!1),v=Me(""),h=Me([]);let m=null;const _=P=>{const M=(P||"").trim();return M?M.includes("@")?{email:M}:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(M)?{user_guid:M}:{userName:M}:null},y=async()=>{v.value="";const P=_(g.value);if(P){b.value=!0;try{const M=await ke.sendInvite(n.value,P);if(M.ok&&M.data?.invite){if(h.value=[M.data.invite,...h.value],g.value="",typeof neodigmToast<"u"){const D=M.data.invite.invitee_display_name||M.data.invite.invitee_user_name||"them";neodigmToast.q(`Invite sent to ${D}.`,"success")}return}const q=M.data?.error||`http_${M.status}`;v.value=(()=>{if(q==="invitee_not_found")return"Couldn't find that player on BMA. You can still share the invite link.";if(q==="already_invited")return"You've already invited them. Check the list below.";if(q==="already_joined")return"They're already in this pool.";if(q==="pool_full")return"Pool is full.";if(q==="cooldown_active"){const D=M.data?.retry_after_hours;return D?`They declined recently. Try again in ${D}h.`:"They declined recently. Try again tomorrow."}return q==="rate_limited"?"Too many invites for now. Try again in a few minutes.":q==="not_creator"?"Only the pool creator can send invites.":q==="not_private"?"This pool doesn't accept directed invites.":q==="invalid_request_shape"?"Enter a User Name or Email to send an invite.":"Couldn't send invite right now. Try again."})()}catch(M){console.warn("[preview_route] sendInvite failed:",M),v.value="Network error. Try again."}finally{b.value=!1}}},w=async P=>{if(!P)return;const M=h.value;h.value=M.filter(D=>D.guid!==P),(await ke.revokeInvite(P)).ok?typeof neodigmToast<"u"&&neodigmToast.q("Invite revoked.","info"):(h.value=M,typeof neodigmToast<"u"&&neodigmToast.q("Couldn't revoke. Try again.","warning"))},x=async()=>{if(!f.value||!n.value)return;const P=await ke.fetchInvitesForTournament(n.value);P.ok&&Array.isArray(P.data?.invites)&&(h.value=P.data.invites)},E=ge(()=>{const P=h.value||[],M=P.filter(U=>(U.status||"").toUpperCase()==="PENDING").length,q=P.filter(U=>(U.status||"").toUpperCase()==="ACCEPTED").length,D=P.filter(U=>(U.status||"").toUpperCase()==="DECLINED").length,B=typeof i.value?.invited_count=="number"?i.value.invited_count:M;return{pending:M,accepted:q,declined:D,invited:B}}),I=ge(()=>{const P=i.value;if(!P)return"";if(P.share_url)return P.share_url;const q=`${window.location.origin+window.location.pathname}#/preview/${P.guid||n.value}`;return P.join_slug?`${q}?s=${encodeURIComponent(P.join_slug)}`:q}),L=ge(()=>Number(i.value?.tournament_dollars||0)),C=ge(()=>{const P=i.value;return P?typeof P.entities?.count=="number"?P.entities.count:P.entities?.guids?.length||0:0}),k=ge(()=>i.value?.entities?.max||0),S=ge(()=>i.value?.matches_expanded?.length||0),$=ge(()=>{const P=i.value;return P?P.format?.on_going!==void 0?P.format.on_going:(P.tags||[]).some(M=>M.override_last_match_close===!0):!1}),z=ge(()=>{const P=i.value;return P?P.format?.odds_locked_at_start!==void 0?P.format.odds_locked_at_start:(P.tags||[]).some(M=>M.match_inprogress_lock===!0):!1}),H=ge(()=>{const P=i.value;if(!P)return null;if(P.trophies){const U=P.trophies.gold||0,ae=P.trophies.silver||0,ne=P.trophies.bronze||0;return U+ae+ne===0?null:{gold:U,silver:ae,bronze:ne}}const M=(P.tags||[]).find(U=>U.badge_gold!==void 0||U.badge_silver!==void 0||U.badge_bronze!==void 0);if(!M)return null;const q=M.badge_gold||0,D=M.badge_silver||0,B=M.badge_bronze||0;return q+D+B===0?null:{gold:q,silver:D,bronze:B}}),Y=ge(()=>{const P=o.value?.joined_players||i.value?.joined_players;return Array.isArray(P)?P:[]}),J=ge(()=>Math.max(0,C.value-Y.value.length)),W=ge(()=>z.value?"Locked Odds":"Live Odds"),ie=ge(()=>$.value?"On-going":"Fixed Slate"),X=ge(()=>{const P=i.value;if(!P)return"Bet Max Tourney";const M=P.game_mode?.class||P.class||"DEFAULT_FORMAT";return M==="DEFAULT_FORMAT"?"Bet Max Tourney":P.game_mode?.label||M}),V=ge(()=>{if(G.value!=="UPCOMING")return"";const P=i.value;if(!P?.window_start_time)return"";let M=P.window_start_time;!M.includes("Z")&&!M.match(/[+-]\d{2}:\d{2}$/)&&(M+="Z");const q=new Date(M).getTime()-Date.now();if(q<=0)return"Starting now";const D=Math.floor(q/36e5),B=Math.floor(q%36e5/6e4);return D>=24?`Starts in ${Math.floor(D/24)}d ${D%24}h`:D>0?`Starts in ${D}h ${B}m`:B>5?`Starts in ${B}m`:"Starting soon"}),ee=ge(()=>S.value===0?"TBD":`${S.value}${$.value?"+":""}`),G=ge(()=>i.value?.status||""),R=ge(()=>G.value==="LOCKED"?"In Progress":G.value==="UPCOMING"?"Open for Entry":G.value==="COMPLETED"?"Completed":G.value),N=ge(()=>G.value==="LOCKED"?"var(--status-locked-text, #F7C60D)":G.value==="UPCOMING"?"var(--status-upcoming-text, #00E676)":G.value==="COMPLETED"?"var(--status-completed-text, #CD5659)":"#fff"),Q=ge(()=>c.value?p.value?"View Tournament":G.value==="COMPLETED"?"View Results":G.value==="LOCKED"?"View Tournament":i.value?.is_private===!0?"Join Bet Max Pool":"Join Tournament":"Sign Up to Join"),j=()=>{c.value?t.push({name:"home_route"}):t.push({name:"signin_route"})},K=()=>{if(i.value){if(!c.value){Eg(n.value,r.value),t.push({name:"signup_route"});return}if(p.value||G.value!=="UPCOMING"){t.push({name:"play_route",query:{guid:n.value,action:"INFO"}});return}ce.publish(a.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:n.value,ts:Date.now()}))}},se=async()=>{const P=I.value;if(!P)return;const M=i.value?.caption||"Join my tournament",q=`You're invited to join ${M} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:M,text:q,url:P});return}catch(D){if(D?.name==="AbortError")return}try{await navigator.clipboard.writeText(P),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(D){console.warn("[preview_route] clipboard write failed:",D),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Long-press to copy: "+P,"danger")}},Z=ge(()=>{const P=i.value;return P?(P.game_mode?.class||P.game_mode_class||"DEFAULT_FORMAT")==="DEFAULT_FORMAT":!0}),F=P=>{if(!P)return"TBD";let M=new Date(P);if(!P.includes("Z")&&!P.match(/[+-]\d{2}:\d{2}$/)&&(M=new Date(P+"Z")),isNaN(M.getTime()))return"TBD";const q=Z.value?{weekday:"short",month:"short",day:"numeric"}:{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return M.toLocaleString(void 0,q)},T=async()=>{if(n.value){l.value="loading";try{const{data:P,status:M,ok:q}=await ke.fetchTournamentPreview(n.value,r.value);q&&P?(o.value=P,l.value="ok"):M===404?l.value="not_found":M===410?l.value="archived":l.value="error"}catch(P){console.warn("[preview_route] fetchTournamentPreview failed:",P),l.value="error"}}},O=ge(()=>{switch(l.value){case"loading":return"Loading tournament…";case"not_found":return"This tournament doesn't exist or the link is wrong.";case"archived":return"This tournament has ended and been archived.";case"error":return"Couldn't load this tournament. Please try again.";default:return"Tournament details aren't available yet."}});return lt(()=>{document.body.classList.add("route-tournament-preview"),T(),setTimeout(()=>x(),0),m=ce.subscribe(a.hierTopics.SSE__CORE__INVITE_SYNC,(P,M)=>{try{const q=JSON.parse(M),D=JSON.parse(q.msg),{invite:B,action:U}=D?.[0]||{};if(!B?.guid||B.tournament_guid!==n.value)return;const ae=h.value.findIndex(ne=>ne.guid===B.guid);if(U==="accepted"||U==="declined"||U==="expired"){if(ae>=0){const ne=[...h.value];ne[ae]={...ne[ae],...B},h.value=ne}}else U==="revoked"&&ae>=0&&(h.value=h.value.filter(ne=>ne.guid!==B.guid))}catch(q){console.warn("[preview_route] INVITE_SYNC handler error:",q)}})}),is(()=>{document.body.classList.remove("route-tournament-preview"),m&&ce.unsubscribe(m)}),(P,M)=>(ue(),fe("main",f0,[A("div",h0,[A("div",{class:"head-caption__back",onClick:j,role:"button",tabindex:"0","aria-label":"Back"},[...M[1]||(M[1]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[A("polyline",{points:"15 18 9 12 15 6"})],-1)])]),A("section",m0,[A("h3",g0,he(i.value?.caption||"Tournament"),1),A("p",b0,he(i.value?.tagline||(u.value?"You're invited to a tournament":"")),1)])]),i.value?(ue(),fe("div",v0,[u.value?(ue(),fe("div",_0,[...M[2]||(M[2]=[A("img",{class:"preview-invite-band__logo",src:"https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&format=png",alt:"Bet Max Tourney"},null,-1),A("div",{class:"preview-invite-band__text"},[A("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[A("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})]),A("span",null,"You're invited to join this tournament")],-1)])])):xe("",!0),A("div",y0,[A("div",w0,[M[3]||(M[3]=A("span",{class:"info-summary-pack__stat-label"},"Starting TD$",-1)),A("span",x0,"TD$ "+he(L.value.toLocaleString()),1)]),A("div",T0,[M[4]||(M[4]=A("span",{class:"info-summary-pack__stat-label"},"Players",-1)),A("span",S0,he(C.value)+" / "+he(k.value),1)]),A("div",k0,[M[5]||(M[5]=A("span",{class:"info-summary-pack__stat-label"},"Games",-1)),A("span",E0,he(ee.value),1)])]),A("div",A0,[A("div",C0,[A("div",P0,[M[6]||(M[6]=A("span",{class:"info-progress-status__label"},"Status",-1)),A("span",{class:"info-progress-status__value",style:fr({color:N.value})},he(R.value),5)]),V.value?(ue(),fe("div",O0,he(V.value),1)):xe("",!0)]),M[9]||(M[9]=A("div",{class:"info-progress-divider"},null,-1)),A("div",$0,[A("div",null,[M[7]||(M[7]=A("span",{class:"info-progress-status__label"},"Starts",-1)),A("span",M0,he(F(i.value.window_start_time)),1)]),A("div",null,[M[8]||(M[8]=A("span",{class:"info-progress-status__label"},"Ends (est.)",-1)),A("span",L0,he(F(i.value.window_end_time)),1)])])]),Y.value.length>0?(ue(),fe("div",R0,[A("div",D0,[M[10]||(M[10]=A("span",{class:"preview-section-label"},"Who's In",-1)),A("span",I0,[Fe(he(C.value)+" joined",1),f.value&&E.value.invited>0?(ue(),fe(Be,{key:0},[Fe(" · "+he(E.value.invited)+" invited",1)],64)):xe("",!0)])]),A("div",N0,[(ue(!0),fe(Be,null,Jt(Y.value,q=>(ue(),fe("div",{class:"preview-player-chip",key:q.username},[A("div",B0,he((q.username||"?").charAt(0).toUpperCase()),1),A("span",F0,he(q.username),1)]))),128)),J.value>0?(ue(),fe("div",z0," +"+he(J.value)+" more ",1)):xe("",!0)])])):xe("",!0),H.value?(ue(),fe("div",H0,[M[17]||(M[17]=A("span",{class:"preview-section-label"},"Trophies",-1)),A("div",j0,[H.value.silver>0?(ue(),fe("div",U0,[M[11]||(M[11]=A("div",{class:"preview-trophy-img"},null,-1)),A("span",q0,"×"+he(H.value.silver),1),M[12]||(M[12]=A("span",{class:"preview-trophy-place"},"2nd",-1))])):xe("",!0),H.value.gold>0?(ue(),fe("div",V0,[M[13]||(M[13]=A("div",{class:"preview-trophy-img preview-trophy-img--lg"},null,-1)),A("span",G0,"×"+he(H.value.gold),1),M[14]||(M[14]=A("span",{class:"preview-trophy-place"},"1st",-1))])):xe("",!0),H.value.bronze>0?(ue(),fe("div",K0,[M[15]||(M[15]=A("div",{class:"preview-trophy-img"},null,-1)),A("span",Y0,"×"+he(H.value.bronze),1),M[16]||(M[16]=A("span",{class:"preview-trophy-place"},"3rd",-1))])):xe("",!0)])])):xe("",!0),A("div",W0,[A("div",J0,[M[18]||(M[18]=A("span",{class:"preview-legend-label"},"Odds Format",-1)),A("span",X0,he(W.value),1)]),A("div",Q0,[M[19]||(M[19]=A("span",{class:"preview-legend-label"},"Format",-1)),A("span",Z0,he(ie.value),1)]),A("div",ey,[M[20]||(M[20]=A("span",{class:"preview-legend-label"},"Game Mode",-1)),A("span",ty,he(X.value),1)]),M[21]||(M[21]=A("div",{class:"preview-legend-item"},[A("span",{class:"preview-legend-label"},"Entry"),A("span",{class:"preview-legend-value",style:{color:"var(--status-upcoming-text, #00E676)"}},"Free")],-1))]),f.value&&i.value?.is_private===!0?(ue(),fe("div",sy,[A("div",ay,[M[22]||(M[22]=A("span",{class:"preview-section-label"},"Invite players",-1)),E.value.pending+E.value.accepted+E.value.declined>0?(ue(),fe("span",ny,[E.value.pending>0?(ue(),fe(Be,{key:0},[Fe(he(E.value.pending)+" pending",1)],64)):xe("",!0),E.value.accepted>0?(ue(),fe(Be,{key:1},[E.value.pending>0?(ue(),fe(Be,{key:0},[Fe(" · ")],64)):xe("",!0),Fe(" "+he(E.value.accepted)+" accepted ",1)],64)):xe("",!0),E.value.declined>0?(ue(),fe(Be,{key:2},[E.value.pending>0||E.value.accepted>0?(ue(),fe(Be,{key:0},[Fe(" · ")],64)):xe("",!0),Fe(" "+he(E.value.declined)+" declined ",1)],64)):xe("",!0)])):xe("",!0)]),A("form",{class:"invite-form",onSubmit:zs(y,["prevent"]),autocomplete:"off"},[Bt(A("input",{type:"text",class:"invite-form__input","onUpdate:modelValue":M[0]||(M[0]=q=>g.value=q),disabled:b.value,placeholder:"User Name or Email",name:"invite-recipient",autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off","data-lpignore":"true","data-1p-ignore":"true","data-form-type":"other"},null,8,ry),[[Bn,g.value]]),A("button",{type:"submit",class:"invite-form__btn",disabled:b.value||!g.value.trim()},he(b.value?"Sending...":"Send"),9,oy)],32),v.value?(ue(),fe("p",ly,he(v.value),1)):(ue(),fe("p",iy," Goes to their in-app inbox. For friends not on BMA yet, use the Share link below. ")),h.value.length>0?(ue(),fe("div",cy,[(ue(!0),fe(Be,null,Jt(h.value,q=>(ue(),fe("div",{class:"invite-sent-row",key:q.guid},[A("div",dy,[A("span",uy,he(q.invitee_display_name||q.invitee_user_name||"Invitee"),1),A("span",{class:Ve(["invite-sent-row__status","invite-sent-row__status--"+(q.status||"pending").toLowerCase()])},he((q.status||"PENDING").toLowerCase()),3)]),(q.status||"").toUpperCase()==="PENDING"?(ue(),fe("button",{key:0,class:"invite-sent-row__revoke",type:"button",onClick:D=>w(q.guid),"aria-label":"Revoke invite to "+(q.invitee_display_name||"invitee")},"Revoke",8,py)):xe("",!0)]))),128))])):xe("",!0)])):xe("",!0),A("div",fy,[f.value?(ue(),fe("button",{key:0,class:"preview-share-btn",onClick:se,"aria-label":"Share invite link"},[...M[23]||(M[23]=[A("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[A("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})],-1),A("span",null,"Share Invite Link",-1)])])):xe("",!0),A("button",{class:"preview-cta-btn",onClick:K},he(Q.value),1),u.value?(ue(),fe("p",hy," Sign up is quick. You'll come right back to join. ")):f.value?(ue(),fe("p",my," You're the host. Share the link to fill your lobby. ")):xe("",!0)])])):(ue(),fe("div",gy,[A("p",null,he(O.value),1),l.value!=="loading"?(ue(),fe("button",{key:0,class:"preview-empty-btn",onClick:j},"Back")):xe("",!0)]))]))}},vy={class:"create-cntr"},_y={class:"create-steps"},yy=["onClick"],wy={class:"create-steps__num"},xy={class:"create-steps__label"},Ty={class:"create-wrap"},Sy={key:0,class:"create-banner create-banner--error"},ky={key:1,class:"create-step"},Ey={key:0,class:"create-banner create-banner--gate",role:"status"},Ay={class:"create-banner__msg"},Cy={class:"create-field"},Py={key:0,class:"create-field__hint"},Oy={key:1,class:"create-field__hint create-field__hint--muted"},$y={class:"create-field"},My={key:0,class:"create-field__hint"},Ly={key:1,class:"create-field__hint create-field__hint--muted"},Ry={class:"create-field"},Dy=["data-offset","onClick"],Iy={class:"create-day-chip__dow"},Ny={class:"create-day-chip__date"},By={key:0,class:"create-day-chip__tag"},Fy={class:"create-field"},zy={class:"create-chip-row"},Hy=["onClick"],jy={key:0,class:"create-field__hint"},Uy={key:1,class:"create-field__hint create-field__hint--muted"},qy={key:1,class:"create-duration"},Vy={class:"create-duration__range"},Gy={class:"create-duration__day"},Ky={class:"create-duration__day"},Yy={class:"create-duration__num-row"},Wy={class:"create-duration__num"},Jy={class:"create-duration__label"},Xy={key:2,class:"create-step"},Qy={class:"create-mode-list"},Zy=["disabled","onClick"],e1={class:"create-mode__head"},t1={class:"create-mode__title"},s1={class:"create-mode__desc"},a1={key:0,class:"create-mode__check","aria-hidden":"true"},n1={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},r1={key:3,class:"create-step"},o1={class:"create-sports-header"},i1={class:"create-sports-counter__num"},l1={class:"create-sport-picker"},c1=["disabled","onClick"],d1={class:"create-sport-pick__icon"},u1=["sport","data-sport-group"],p1={class:"create-sport-pick__title"},f1={key:0,class:"create-sport-pick__check","aria-hidden":"true"},h1={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},m1={key:1,class:"create-slate"},g1={class:"create-slate__rows"},b1={class:"create-slate-row__icon"},v1=["sport","data-sport-group"],_1={class:"create-slate-row__main"},y1={class:"create-slate-row__title"},w1={key:0,class:"create-slate-row__status"},x1={key:1,class:"create-slate-row__status create-slate-row__status--muted"},T1=["aria-label","onClick"],S1={key:0,class:"create-slate__footnote"},k1={key:1,class:"create-slate__footnote create-slate__footnote--muted"},E1={key:4,class:"create-step"},A1={class:"create-field"},C1={key:0,class:"create-field__hint"},P1={key:1,class:"create-field__hint create-field__hint--muted"},O1={class:"create-toggle"},$1={key:5,class:"create-step"},M1={class:"create-review-card"},L1={class:"create-review-row"},R1={class:"create-review-value"},D1={key:0,class:"create-review-row"},I1={class:"create-review-value"},N1={class:"create-review-row"},B1={class:"create-review-value"},F1={class:"create-review-row"},z1={class:"create-review-value"},H1={class:"create-review-row"},j1={class:"create-review-value"},U1={class:"create-review-row"},q1={class:"create-review-value"},V1={class:"create-nav"},G1=["disabled"],K1=["disabled"],Y1=["disabled"],so=7,W1=28,Pl=2,J1={__name:"create_tournament_route",setup(e){const t=ct(),s=Te(),a=[{id:1,label:"Basics"},{id:2,label:"Game Mode"},{id:3,label:"Sports"},{id:4,label:"Players"},{id:5,label:"Review"}],n=Me(1),r=[{key:"DEFAULT_FORMAT",title:"Bet Max Tourney",tagline:"The classic",description:"Place bets across every game on your slate. Mix spreads, moneylines, and totals to build your edge and chase the biggest win in the pool.",available:!0},{key:"SET_AND_FORGET",title:"Set It and Forget It",tagline:"Coming soon",description:"Lock in all your picks before the window opens. No in-window edits, the slate plays itself out while you watch.",available:!1},{key:"LONGSHOT_MAYHEM",title:"Longshot Mayhem",tagline:"Coming soon",description:"Boosted payouts on underdogs and plus-money plays. Chalk barely moves the needle, upsets blow the pool wide open.",available:!1},{key:"BRACKET_MODE",title:"Bracket Mode",tagline:"Coming soon",description:"Classic head-to-head bracket. Pick winners round by round and survive all the way to the final matchup.",available:!1},{key:"SURVIVOR",title:"Survivor",tagline:"Coming soon",description:"One pick a day, and your pick has to hit. Miss once and you're out. Last entrant standing takes the pool.",available:!1},{key:"SQUADS",title:"Squads",tagline:"Coming soon",description:"Team up with friends and bet together. Squad scores stack across the roster, compete as a crew for the top of the board.",available:!1}],o=ge(()=>{const D=s.appSession?.session_user?.guid;if(!D)return null;const B=s.coreTourn?.length?s.coreTourn[s.coreTourn.length-1]:null;return B&&(B.data||[]).find(ae=>{if(!ae?.creator_guid||ae.creator_guid!==D||ae.is_private!==!0)return!1;const ne=ae.status||ae.class;return ne==="UPCOMING"||ne==="LOCKED"})||null}),l=ge(()=>{const D=o.value?.window_end_time;if(!D)return"";let B=new Date(D);return!D.includes("Z")&&!D.match(/[+-]\d{2}:\d{2}$/)&&(B=new Date(D+"Z")),isNaN(B.getTime())?"":B.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}),i=ge(()=>{const D=s.appSession?.session_user||{};return D.first||D.username||"My"}),c=ge(()=>{const D=new Date().toLocaleString(void 0,{month:"long"});return`${i.value}'s ${D} Pool`}),u=D=>{const B=U=>String(U).padStart(2,"0");return`${D.getFullYear()}-${B(D.getMonth()+1)}-${B(D.getDate())}`},d=(()=>{const D=new Date;return D.setHours(0,0,0,0),D})(),p=(D,B)=>{const U=new Date(D.getTime());return U.setDate(U.getDate()+B),U},f=Array.from({length:W1},(D,B)=>B),g=D=>p(d,D),b=D=>D.toLocaleDateString(void 0,{weekday:"short"}),v=D=>D.toLocaleDateString(void 0,{month:"short",day:"numeric"}),h=D=>D===0?"Today":D===1?"Tomorrow":"",m=[{key:1,label:"1 day"},{key:2,label:"2 days"},{key:3,label:"3 days"},{key:5,label:"5 days"},{key:7,label:"7 days"}],_=(()=>{const D=(6-d.getDay()+7)%7;return D===0?0:D})(),y=Me({caption:c.value,tagline:"",sportKeys:[],gameMode:"DEFAULT_FORMAT",startOffset:_,lengthDays:3,maxEntrants:10,creatorParticipating:!0}),w=D=>{const B=r.find(U=>U.key===D);!B||!B.available||(y.value.gameMode=D)},x=ge(()=>u(p(d,y.value.startOffset))),E=ge(()=>{const D=y.value.startOffset+Math.max(1,y.value.lengthDays)-1;return u(p(d,D))}),I=Me(typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`draft_${crypto.randomUUID()}`:`draft_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`),L=Me(!1),C=Me(""),k=Me({}),S=Me(null),$=(D,B=!1)=>{if(!D)return"";const[U,ae,ne]=D.split("-").map(Number);return new Date(U,(ae||1)-1,ne||1,B?23:0,B?59:0,0,0).toISOString()},z=ge(()=>$(x.value,!1)),H=ge(()=>$(E.value,!0)),Y=D=>{if(!D)return"";const[B,U,ae]=D.split("-").map(Number);return new Date(B,(U||1)-1,ae||1).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})},J=D=>{if(!D)return NaN;const[B,U,ae]=D.split("-").map(Number);return new Date(B,(U||1)-1,ae||1,0,0,0,0).getTime()},W=ge(()=>{if(!x.value||!E.value)return 0;const D=J(x.value),B=J(E.value);return isNaN(D)||isNaN(B)?0:Math.max(1,Math.round((B-D)/(24*3600*1e3))+1)}),ie=ge(()=>{const D=new Set,B=[],U=s.coreTourn?.length?s.coreTourn[s.coreTourn.length-1]:null;if(!U)return B;for(const ae of U.data||[]){const ne=Array.isArray(ae.matches_expanded)?ae.matches_expanded:[];for(const pe of ne){const te=pe.guid||pe.odds_id||pe.id;!te||D.has(te)||(D.add(te),B.push(pe))}}return B}),X=D=>{if(!D||!z.value||!H.value)return 0;const B=new Date(z.value).getTime(),U=new Date(H.value).getTime();return ie.value.reduce((ae,ne)=>{if(ne.sport_id!==D)return ae;const pe=ne.scheduled_at||"";let te=new Date(pe);!pe.includes("Z")&&!pe.match(/[+-]\d{2}:\d{2}$/)&&(te=new Date(pe+"Z"));const oe=te.getTime();return isNaN(oe)?ae:oe>=B&&oe<=U?ae+1:ae},0)},V=ge(()=>(s.appMeta?.sports||[]).filter(B=>B.active===!0&&!B.has_outrights).map(B=>({key:B.key,title:B.title||B.description||B.key,group:B.group||"default"})).sort((B,U)=>B.title.localeCompare(U.title))),ee=D=>V.value.find(B=>B.key===D)||{key:D,title:D,group:"default"},G=ge(()=>y.value.sportKeys.length>=Pl),R=D=>{const B=y.value.sportKeys.indexOf(D);if(B>=0){y.value.sportKeys.splice(B,1);return}if(y.value.sportKeys.length>=2){C.value="Free tier is limited to 2 sports. Deselect one first.";return}y.value.sportKeys.push(D)},N=D=>y.value.sportKeys.includes(D),Q=ge(()=>y.value.sportKeys.reduce((D,B)=>D+X(B),0)),j=ge(()=>{const D={},B=J(x.value),U=J(E.value),ae=d.getTime();isNaN(B)?D.window="Pick a start day.":B<ae&&(D.window="Start day can't be in the past."),isNaN(U)?D.window=D.window||"Pick a length.":B&&U<B&&(D.window="End day must be on or after the start day."),y.value.lengthDays>so&&(D.window=`Free tier contests max out at ${so} days.`);const ne=(y.value.caption||"").trim();(ne.length<3||ne.length>60)&&(D.caption="Name must be 3 to 60 characters."),(y.value.tagline||"").trim().length>120&&(D.tagline="Tagline max is 120 characters.");const te=r.find(de=>de.key===y.value.gameMode);(!te||!te.available)&&(D.mode="Pick a game mode."),y.value.sportKeys.length<1&&(D.sports="Pick at least one sport."),y.value.sportKeys.length>2&&(D.sports="Free tier is limited to 2 sports.");const oe=Number(y.value.maxEntrants);return oe>=2&&oe<=10||(D.max="Max entrants must be between 2 and 10."),D}),K=D=>{const B=j.value;return D===1?!B.window&&!B.caption&&!B.tagline:D===2?!B.mode:D===3?!B.sports:D===4?!B.max:D===5?!B.window&&!B.caption&&!B.tagline&&!B.mode&&!B.sports&&!B.max:!0},se=ge(()=>K(n.value)),Z=()=>{if(C.value="",!se.value){C.value="Please complete this step before moving on.",k.value=j.value;return}k.value={},n.value<a.length&&n.value++},F=()=>{C.value="",k.value={},n.value>1&&n.value--},T=D=>{D<n.value&&(n.value=D,C.value="",k.value={})},O=()=>({caption:y.value.caption.trim(),tagline:y.value.tagline.trim()||void 0,sports_allowed:y.value.sportKeys.map(D=>({key:D})),window_start_time:z.value,window_end_time:H.value,entities:{max:Number(y.value.maxEntrants)},creator_participating:y.value.creatorParticipating,game_mode_class:y.value.gameMode,client_draft_id:I.value}),P=D=>{console.warn("[create_tournament_route] server rejected create:",{httpStatus:D?.status,ok:D?.ok,data:D?.data});const B=D?.data?.error||`http_${D?.status||"unknown"}`,U=D?.data?.reason?` (${D.data.reason})`:"",ae=D?.data?.message||D?.data?.detail||"";switch(B){case"invalid_caption":return k.value.caption=`Name rejected${U}.`,n.value=1,"Please fix the tournament name.";case"invalid_tagline":return k.value.tagline=`Tagline rejected${U}.`,n.value=1,"Please fix the tagline.";case"invalid_sports":return k.value.sports=`Sports rejected${U}.`,n.value=3,"Please review your sport selection.";case"invalid_window":return k.value.window=`Window rejected${U}.`,n.value=1,"Please review the tournament window.";case"invalid_max_entrants":return k.value.max="Max entrants rejected.",n.value=4,"Max entrants must be between 2 and 10.";case"invalid_request_shape":return`Request rejected as malformed${ae?": "+ae:""}.`;case"active_limit_reached":return"You already have an active contest. Cancel or finish it first.";case"tier_gate_violation":return`That option isn't available on the free tier yet${D?.data?.field?` (${D.data.field})`:""}.`;case"rate_limited":return"Too many create attempts. Try again in a bit.";case"unauthenticated":return"Your session expired. Please sign in again.";case"internal":return"Server error. Please try again in a moment.";default:return`Server said: ${B}${ae?" · "+ae:""}`}},M=async()=>{if(C.value="",k.value={},!K(5)){C.value="Please check all steps before publishing.",k.value=j.value;return}L.value=!0;try{const D=O();console.log("[create_tournament_route] POST /m5t/v5/tournament payload:",D);const B=await ke.createTournament(D);if(console.log("[create_tournament_route] response:",B),B.ok&&B.data?.tournament){const U=B.data.tournament;s.pushCoreTourn({timestamp:Date.now(),source:"API",data:[U]}),typeof neodigmToast<"u"&&neodigmToast.q("Tournament created. Share the link to invite friends.","success"),t.push({name:"preview_route",params:{guid:U.guid},query:U.join_slug?{s:U.join_slug}:void 0});return}C.value=P(B)}catch(D){console.warn("[create_tournament_route] createTournament failed:",D),C.value="Network error. Please try again."}finally{L.value=!1}},q=()=>t.push({name:"home_route"});return lt(()=>{document.body.classList.add("route-create-tournament"),window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),requestAnimationFrame(()=>{const D=S.value;if(!D)return;const B=D.querySelector(`[data-offset="${y.value.startOffset}"]`);if(B){const U=B.offsetLeft-D.clientWidth/2+B.offsetWidth/2;D.scrollLeft=Math.max(0,U)}})}),is(()=>{document.body.classList.remove("route-create-tournament")}),(()=>{const D=new Date;return D.setHours(0,0,0,0),u(D)})(),(D,B)=>(ue(),fe("main",vy,[A("div",{class:"create-header"},[A("button",{class:"create-header__back",onClick:q,"aria-label":"Back to home"},[...B[4]||(B[4]=[A("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[A("polyline",{points:"15 18 9 12 15 6"})],-1)])]),B[5]||(B[5]=A("h1",{class:"create-header__title"},"Create a Tournament",-1))]),A("div",_y,[(ue(),fe(Be,null,Jt(a,U=>A("div",{key:U.id,class:Ve(["create-steps__dot",{"create-steps__dot--active":U.id===n.value,"create-steps__dot--complete":U.id<n.value}]),onClick:ae=>T(U.id)},[A("span",wy,he(U.id),1),A("span",xy,he(U.label),1)],10,yy)),64))]),A("div",Ty,[C.value?(ue(),fe("div",Sy,he(C.value),1)):xe("",!0),n.value===1?(ue(),fe("section",ky,[o.value?(ue(),fe("div",Ey,[B[6]||(B[6]=A("span",{class:"create-banner__tag create-banner__tag--gate"},"ACTIVE POOL",-1)),A("span",Ay,[A("strong",null,he(o.value.caption||"Your pool"),1),Fe(" is still running"+he(l.value?` through ${l.value}`:"")+". Free tier runs one pool at a time, so your next one opens up as soon as this one wraps. ",1)])])):xe("",!0),B[12]||(B[12]=A("div",{class:"create-banner create-banner--dev",role:"status"},[A("span",{class:"create-banner__tag"},"BETA"),A("span",{class:"create-banner__msg"},"Feature in active development.")],-1)),B[13]||(B[13]=A("h4",{class:"create-step__heading"},"Name it and set the window",-1)),B[14]||(B[14]=A("p",{class:"create-step__hint"},"Quick setup: a name for the invite, a start day, and how long it runs.",-1)),A("label",Cy,[B[7]||(B[7]=A("span",{class:"create-field__label"},"Name",-1)),Bt(A("input",{type:"text","onUpdate:modelValue":B[0]||(B[0]=U=>y.value.caption=U),maxlength:"60",placeholder:"Name your tournament",autocapitalize:"words",autocomplete:"off",enterkeyhint:"next",class:Ve(["create-field__input",{"create-field__input--error":k.value.caption}])},null,2),[[Bn,y.value.caption]]),k.value.caption?(ue(),fe("span",Py,he(k.value.caption),1)):(ue(),fe("span",Oy,he((y.value.caption||"").length)+" / 60",1))]),A("label",$y,[B[8]||(B[8]=A("span",{class:"create-field__label"},[Fe("Tagline "),A("span",{class:"create-field__optional"},"(optional)")],-1)),Bt(A("input",{type:"text","onUpdate:modelValue":B[1]||(B[1]=U=>y.value.tagline=U),maxlength:"120",placeholder:"One line about your contest",autocapitalize:"sentences",autocomplete:"off",enterkeyhint:"next",class:Ve(["create-field__input",{"create-field__input--error":k.value.tagline}])},null,2),[[Bn,y.value.tagline]]),k.value.tagline?(ue(),fe("span",My,he(k.value.tagline),1)):(ue(),fe("span",Ly,he((y.value.tagline||"").length)+" / 120",1))]),A("div",Ry,[B[9]||(B[9]=A("span",{class:"create-field__label"},"Starts",-1)),A("div",{class:"create-day-scroller",ref_key:"dayScrollerEl",ref:S},[(ue(!0),fe(Be,null,Jt(ut(f),U=>(ue(),fe("button",{key:U,type:"button",class:Ve(["create-day-chip",{"create-day-chip--on":y.value.startOffset===U}]),"data-offset":U,onClick:ae=>y.value.startOffset=U},[A("span",Iy,he(b(g(U))),1),A("span",Ny,he(v(g(U))),1),h(U)?(ue(),fe("span",By,he(h(U)),1)):xe("",!0)],10,Dy))),128))],512)]),A("div",Fy,[B[10]||(B[10]=A("span",{class:"create-field__label"},"Length",-1)),A("div",zy,[(ue(),fe(Be,null,Jt(m,U=>A("button",{key:U.key,type:"button",class:Ve(["create-chip",{"create-chip--on":y.value.lengthDays===U.key}]),onClick:ae=>y.value.lengthDays=U.key},he(U.label),11,Hy)),64))]),k.value.window?(ue(),fe("span",jy,he(k.value.window),1)):(ue(),fe("span",Uy,"Free tier runs up to "+he(so)+" days."))]),W.value>0?(ue(),fe("div",qy,[A("div",Vy,[A("span",Gy,he(Y(x.value)),1),B[11]||(B[11]=A("span",{class:"create-duration__arrow"},"→",-1)),A("span",Ky,he(Y(E.value)),1)]),A("div",Yy,[A("span",Wy,he(W.value),1),A("span",Jy,he(W.value===1?"day":"days")+" of play",1)])])):xe("",!0)])):xe("",!0),n.value===2?(ue(),fe("section",Xy,[B[16]||(B[16]=A("h4",{class:"create-step__heading"},"Choose a game mode",-1)),B[17]||(B[17]=A("p",{class:"create-step__hint"},"Only Bet Max Tourney is live right now. More modes are in development.",-1)),A("div",Qy,[(ue(),fe(Be,null,Jt(r,U=>A("button",{key:U.key,type:"button",class:Ve(["create-mode",{"create-mode--on":y.value.gameMode===U.key&&U.available,"create-mode--disabled":!U.available}]),disabled:!U.available,onClick:ae=>w(U.key)},[A("div",e1,[A("span",t1,he(U.title),1),A("span",{class:Ve(["create-mode__tagline",{"create-mode__tagline--soon":!U.available}])},he(U.tagline),3)]),A("p",s1,he(U.description),1),y.value.gameMode===U.key&&U.available?(ue(),fe("span",a1,[...B[15]||(B[15]=[A("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[A("polyline",{points:"20 6 9 17 4 12"})],-1)])])):xe("",!0)],10,Zy)),64))]),k.value.mode?(ue(),fe("span",n1,he(k.value.mode),1)):xe("",!0)])):xe("",!0),n.value===3?(ue(),fe("section",r1,[A("div",o1,[B[19]||(B[19]=A("div",null,[A("h4",{class:"create-step__heading",style:{"margin-bottom":"4px"}},"Pick your sports"),A("p",{class:"create-step__hint",style:{margin:"0"}},"Tap a chip to add it. Games scheduled during your window will be added automatically as odds post.")],-1)),A("div",{class:Ve(["create-sports-counter",{"create-sports-counter--max":G.value}])},[A("span",i1,he(y.value.sportKeys.length),1),B[18]||(B[18]=A("span",{class:"create-sports-counter__divider"},"/",-1)),A("span",{class:"create-sports-counter__max"},he(Pl))],2)]),A("div",l1,[(ue(!0),fe(Be,null,Jt(V.value,U=>(ue(),fe("button",{key:U.key,type:"button",class:Ve(["create-sport-pick",{"create-sport-pick--on":N(U.key),"create-sport-pick--disabled":G.value&&!N(U.key)}]),disabled:G.value&&!N(U.key),onClick:ae=>R(U.key)},[A("span",d1,[A("bma-sport-icon",{sport:U.key,"data-sport-group":U.group},null,8,u1)]),A("span",p1,he(U.title),1),N(U.key)?(ue(),fe("span",f1,[...B[20]||(B[20]=[A("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[A("polyline",{points:"20 6 9 17 4 12"})],-1)])])):xe("",!0)],10,c1))),128))]),k.value.sports?(ue(),fe("span",h1,he(k.value.sports),1)):xe("",!0),y.value.sportKeys.length>0?(ue(),fe("div",m1,[B[22]||(B[22]=A("div",{class:"create-slate__label"},"Your slate",-1)),A("div",g1,[(ue(!0),fe(Be,null,Jt(y.value.sportKeys,U=>(ue(),fe("div",{key:U,class:"create-slate-row"},[A("span",b1,[A("bma-sport-icon",{sport:U,"data-sport-group":ee(U).group},null,8,v1)]),A("div",_1,[A("span",y1,he(ee(U).title),1),X(U)>0?(ue(),fe("span",w1,he(X(U))+" game"+he(X(U)===1?"":"s")+" available this window",1)):(ue(),fe("span",x1," Games will be added when odds post "))]),A("button",{class:"create-slate-row__remove",type:"button","aria-label":"Remove "+ee(U).title,onClick:ae=>R(U)},[...B[21]||(B[21]=[A("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[A("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),A("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,T1)]))),128))]),Q.value>0?(ue(),fe("div",S1,he(Q.value)+" game"+he(Q.value===1?"":"s")+" already on the slate · more added during the tournament. ",1)):(ue(),fe("div",k1," No games are on the slate yet. They'll populate as odds post. "))])):xe("",!0)])):xe("",!0),n.value===4?(ue(),fe("section",E1,[B[25]||(B[25]=A("h4",{class:"create-step__heading"},"How many players?",-1)),B[26]||(B[26]=A("p",{class:"create-step__hint"},"Up to 10 on the free tier. You're in by default — toggle off if you're just hosting.",-1)),A("label",A1,[B[23]||(B[23]=A("span",{class:"create-field__label"},"Max Entrants",-1)),Bt(A("input",{type:"number",min:"2",max:"10",inputmode:"numeric",pattern:"[0-9]*","onUpdate:modelValue":B[2]||(B[2]=U=>y.value.maxEntrants=U),class:Ve(["create-field__input create-field__input--num",{"create-field__input--error":k.value.max}])},null,2),[[Bn,y.value.maxEntrants,void 0,{number:!0}]]),k.value.max?(ue(),fe("span",C1,he(k.value.max),1)):(ue(),fe("span",P1,"Free tier max is 10."))]),A("label",O1,[Bt(A("input",{type:"checkbox","onUpdate:modelValue":B[3]||(B[3]=U=>y.value.creatorParticipating=U)},null,512),[[cu,y.value.creatorParticipating]]),B[24]||(B[24]=A("span",null,"I'm playing in this tournament",-1))]),B[27]||(B[27]=A("p",{class:"create-step__note"}," You'll be able to invite friends by User Name or Email once your pool is published. Look for the Invite panel on the pool's info page. ",-1))])):xe("",!0),n.value===5?(ue(),fe("section",$1,[B[35]||(B[35]=A("h4",{class:"create-step__heading"},"Ready to publish?",-1)),B[36]||(B[36]=A("p",{class:"create-step__hint"},"Here's what your invitees will see. Tap any step number above to edit.",-1)),A("div",M1,[A("div",L1,[B[28]||(B[28]=A("span",{class:"create-review-label"},"Name",-1)),A("span",R1,he(y.value.caption),1)]),y.value.tagline?(ue(),fe("div",D1,[B[29]||(B[29]=A("span",{class:"create-review-label"},"Tagline",-1)),A("span",I1,he(y.value.tagline),1)])):xe("",!0),A("div",N1,[B[30]||(B[30]=A("span",{class:"create-review-label"},"Dates",-1)),A("span",B1,he(Y(x.value))+" → "+he(Y(E.value)),1)]),A("div",F1,[B[31]||(B[31]=A("span",{class:"create-review-label"},"Sports",-1)),A("span",z1,[(ue(!0),fe(Be,null,Jt(y.value.sportKeys,U=>(ue(),fe("span",{key:U,class:"create-review-pill"},he((V.value.find(ae=>ae.key===U)||{}).title||U)+" · "+he(X(U)),1))),128))])]),A("div",H1,[B[32]||(B[32]=A("span",{class:"create-review-label"},"Players",-1)),A("span",j1,"Up to "+he(y.value.maxEntrants)+" · "+he(y.value.creatorParticipating?"you're in":"hosting only"),1)]),A("div",U1,[B[33]||(B[33]=A("span",{class:"create-review-label"},"Format",-1)),A("span",q1,he((r.find(U=>U.key===y.value.gameMode)||{}).title||"Bet Max Tourney")+" · Fixed Slate · TD$ 500",1)]),B[34]||(B[34]=A("div",{class:"create-review-row"},[A("span",{class:"create-review-label"},"Trophies"),A("span",{class:"create-review-value"},"1 Gold · 1 Silver · 1 Bronze")],-1))])])):xe("",!0),A("div",V1,[A("button",{class:"create-nav__btn create-nav__btn--ghost",onClick:F,disabled:n.value===1||L.value},"Back",8,G1),n.value<a.length?(ue(),fe("button",{key:0,class:"create-nav__btn create-nav__btn--primary",onClick:Z,disabled:!se.value},"Next",8,K1)):(ue(),fe("button",{key:1,class:"create-nav__btn create-nav__btn--primary",onClick:M,disabled:L.value},he(L.value?"Publishing…":"Publish Tournament"),9,Y1))])])]))}},Ea=qm({history:Tm(),routes:[{path:"/",name:"splash_route",component:wl},{path:"/splash_route",name:"splash_route",component:wl},{path:"/error_route",name:"error_route",component:Ka},{path:"/forgot_route",name:"forgot_route",component:v_},{path:"/resetforgot_route",name:"resetforgot_route",component:Ka},{path:"/resethash_route",name:"resethash_route",component:P_},{path:"/signin_route",name:"signin_route",component:qv},{path:"/signout_route",name:"signout_route",component:Kv},{path:"/signup_route",name:"signup_route",component:p_},{path:"/verf_link_route",name:"verf_link_route",component:I_},{path:"/offline_route",name:"offline_route",component:Ka},{path:"/home_route",name:"home_route",component:Cv},{path:"/profile_route",name:"profile_route",component:Z_},{path:"/top_players_route",name:"top_players_route",component:r0},{path:"/play_route",name:"play_route",component:p0},{path:"/create_tournament_route",name:"create_tournament_route",component:J1},{path:"/preview/:guid",name:"preview_route",component:by,meta:{previewAllowed:!0}},{path:"/appFAQ",name:"appFAQ",component:Ka},{path:"/appHelp",name:"appHelp",component:Lv}]});Ea.beforeEach((e,t,s)=>{if(e.query.brand!==void 0){const a=e.query.brand;a==="null"||a===""?aa.clearBrand():aa.setBrand(a);const n={...e.query};delete n.brand,s({...e,query:n,replace:!0})}else s()});class X1 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Re.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,s,a){s!==a&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),s=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(s)?s[1]?.length||0:s.guids?.length||0,max:Array.isArray(s)?parseInt(s[0]?.max||0):s.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Re.theme}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return!1;try{const a=this.getAttribute("data-bma-tourn-entities"),n=a?JSON.parse(a):{guids:[]};return(Array.isArray(n)?n[1]||[]:n.guids||[]).includes(s)}catch{return!1}}getUserTrophy(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;try{const a=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const n of a){if(typeof n!="object"||!n)continue;let r=null;if(n.entity_guid===s&&n.badge?r=n.badge:n[s]&&(r=n[s]),r?.includes("gold"))return"gold";if(r?.includes("silver"))return"silver";if(r?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let s=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z"));const a=Date.now(),n=s.getTime()-a;if(n<=0)return null;const r=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),l=Math.floor(n%36e5/6e4);return r>0?`${r}d ${o}h`:o>0?`${o}h ${l}m`:`${l}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const s=this.getCountdown();t.textContent=s||"",s||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},s=this.sportsAllowed;if(!Array.isArray(s)||s.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const a=Math.min(s.length,3);let n="";for(let r=0;r<a;r++){const o=s[r].key||s[r],l=Ye.find(u=>u.key===o),i=l?l.group:"default",c=t[o]||o.replace(/^[a-z]+_/,"").toUpperCase();n+=`<span class="lc__sport-item"><bma-sport-icon sport="${o}" data-sport-group="${i}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return s.length>3&&(n+=`<span class="lc__sport-count" data-sport-overflow="true">+${s.length-3}</span>`),n}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(s=>{const a=s.key||s;return t[a]||a.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,s,a,n){const r=(t-s)/2,o=2*Math.PI*r,l=o-a/100*o,i=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${i}" cy="${i}" r="${r}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${s}" />
            <circle cx="${i}" cy="${i}" r="${r}"
                fill="none" stroke="${n}" stroke-width="${s}"
                stroke-linecap="round"
                stroke-dasharray="${o}"
                stroke-dashoffset="${l}"
                transform="rotate(-90 ${i} ${i})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation(),this.dispatchAction(s.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",s=>{s.stopPropagation();const a=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(a,"info")})}render(){const t=this.isUserParticipating(),s=this.getUserTrophy(),a=this.status.toLowerCase(),n=t&&this.status!=="COMPLETED",r=!t&&this.status==="UPCOMING";this.userRank,(this.entities.current/(this.entities.max||1)*100).toFixed(1);const o=this.getCountdown();return this._renderSlim({isParticipating:t,trophy:s,statusClass:a,showPlay:n,showJoin:r,countdown:o})}_renderSlim({statusClass:t,showPlay:s,showJoin:a,trophy:n,countdown:r}){this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating");const o=this.status==="LOCKED"?"IN PROGRESS":this.status==="UPCOMING"?"OPEN":this.status==="COMPLETED"?"COMPLETED":this.status,l=(()=>{if(this.matches==0)return"TBD";let y="";try{JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(x=>x.override_last_match_close===!0)&&(y="+")}catch{}return`${this.matches}${y}`})();this.entryFee&&this.entryFee!=="Free"&&this.entryFee;const i=parseFloat(this.tournamentDollars||0).toLocaleString(),c=`${this.entities.current}/${this.entities.max}`,u=this.status==="COMPLETED"?"Ended":this.status==="LOCKED"?"Ends":this.status==="UPCOMING"?"Locks":"Starts",d=r||(this.status==="COMPLETED"?"—":"Soon"),p=(this.sportsAllowed||[]).slice(0,3).map(y=>{const w=y.key||"",x=Ye.find(L=>L.key===w),E=x?.group||"default",I=x?.abbr||x?.title||w.split("_").pop().toUpperCase().slice(0,4);return`
                    <span class="lcs__sport">
                        <bma-sport-icon sport="${w}" data-sport-group="${E}"></bma-sport-icon>
                        <span class="lcs__sport-label">${I}</span>
                    </span>
                `}).join(""),f=(this.sportsAllowed?.length||0)>3?`<span class="lcs__sport-more">+${this.sportsAllowed.length-3}</span>`:"";let g="";n?g=`<div class="lcs__trophy-hero lcs__trophy-hero--${n}" aria-label="You won ${n}"></div>`:this.status==="COMPLETED"&&this.isUserParticipating()&&this.userRank!=="-"&&this.userRank!==""&&(g=`
                <div class="lcs__rank-hero" aria-label="Your rank ${this.userRank} of ${this.userTotal}">
                    <span class="lcs__rank-hero__place">#${this.userRank}</span>
                    <span class="lcs__rank-hero__total">/ ${this.userTotal}</span>
                </div>
            `);const v=this.gameModeBadge?.label||(this.gameType==="DEFAULT_FORMAT"?"Bet Max Tourney":""),h=v?`<span class="lcs__pill lcs__pill--neutral">${v}</span>`:"",m=`<span class="lcs__pill lcs__pill--${t}">${o}</span>`,_=(()=>{const y=`<button class="lcs__btn lcs__btn--info" data-action="INFO" aria-label="Info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span>Info</span>
            </button>`;let w="";return s?w='<button class="lcs__btn lcs__btn--play" data-action="PLAY" aria-label="Play"><span>Play</span></button>':a?w='<button class="lcs__btn lcs__btn--join" data-action="JOIN" aria-label="Join"><span>Join</span></button>':w='<button class="lcs__btn lcs__btn--view" data-action="INFO" aria-label="View"><span>View</span></button>',`${y}${w}`})();this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                ${Ss()}

                :host {
                    display: block;
                    margin-bottom: 8px;
                    width: 100%;
                }

                .lcs {
                    position: relative;
                    display: grid;
                    grid-template-columns: 4px 1fr;
                    background: var(--surface-raised, #222222);
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                    cursor: pointer;
                    transition: background 0.15s ease, box-shadow 0.15s ease;
                }
                .lcs:hover {
                    background: var(--surface-overlay, #2a2a2a);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
                }

                /* Status color strip — 4px accent on the left in the
                   same palette as the tournament card hero (green /
                   gold / red). Always present. */
                .lcs__strip {
                    align-self: stretch;
                    background: rgba(255, 255, 255, 0.15);
                }
                :host([data-bma-tourn-class="UPCOMING"])  .lcs__strip { background: var(--status-upcoming-text, #00E676); }
                :host([data-bma-tourn-class="LOCKED"])    .lcs__strip { background: var(--status-locked-text, #F7C60D); }
                :host([data-bma-tourn-class="COMPLETED"]) .lcs__strip { background: var(--status-completed-text, #CD5659); }

                /* Body is a vertical stack: upper (two-column), kpi-strip. */
                .lcs__body {
                    display: flex;
                    flex-direction: column;
                    min-width: 0;
                }

                /* Upper block is a two-column grid:
                     left  = sports, title (wraps), game-mode pill
                     right = status pill + action buttons stacked
                   This lets long titles grow downward without crashing
                   into the status pill or buttons. */
                .lcs__upper {
                    display: grid;
                    grid-template-columns: 1fr auto;
                    align-items: start;
                    gap: 10px 12px;
                    padding: 12px 14px 12px;
                    min-width: 0;
                }
                .lcs__main {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    min-width: 0;
                }
                .lcs__side {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 8px;
                    flex-shrink: 0;
                }
                .lcs__sports {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    flex-shrink: 0;
                    flex-wrap: wrap;
                }
                .lcs__sport {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    padding: 4px 8px 4px 5px;
                    background: rgba(255, 255, 255, 0.06);
                    border-radius: 999px;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
                }
                .lcs__sport bma-sport-icon {
                    width: 16px;
                    height: 16px;
                }
                .lcs__sport-label {
                    font-size: 0.65rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.85);
                    text-transform: uppercase;
                    letter-spacing: 0.4px;
                }
                .lcs__sport-more {
                    font-size: 0.65rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.45);
                    align-self: center;
                }
                .lcs__name {
                    font-size: 0.98rem;
                    font-weight: 700;
                    color: #fff;
                    /* Wrap long titles onto a second line instead of
                       truncating or running into the status pill. */
                    overflow-wrap: break-word;
                    word-break: break-word;
                    min-width: 0;
                    line-height: 1.25;
                }
                .lcs__mode-row {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    flex-wrap: wrap;
                }

                /* ── TROPHY HERO (won completed tournaments) ──────── */
                .lcs__trophy-hero {
                    width: 40px;
                    height: 40px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    flex-shrink: 0;
                    filter: drop-shadow(0 3px 8px rgba(0, 0, 0, 0.4));
                    margin-right: 2px;
                }
                .lcs__trophy-hero--gold   { background-image: var(--trophy-gold-tall); filter: drop-shadow(0 3px 10px rgba(255, 215, 0, 0.45)); }
                .lcs__trophy-hero--silver { background-image: var(--trophy-silver-tall); filter: drop-shadow(0 3px 10px rgba(192, 192, 192, 0.4)); }
                .lcs__trophy-hero--bronze { background-image: var(--trophy-bronze-tall); filter: drop-shadow(0 3px 10px rgba(218, 149, 75, 0.4)); }

                /* Rank hero — fills the trophy slot for completed
                   tournaments where the user didn't medal. Single line:
                   "#5 / 25". */
                .lcs__rank-hero {
                    display: inline-flex;
                    align-items: baseline;
                    gap: 3px;
                    padding: 4px 10px;
                    border-radius: 999px;
                    background: rgba(255, 255, 255, 0.04);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
                    flex-shrink: 0;
                    line-height: 1;
                    white-space: nowrap;
                    font-variant-numeric: tabular-nums;
                }
                .lcs__rank-hero__place {
                    font-size: 0.95rem;
                    font-weight: 800;
                    color: #fff;
                }
                .lcs__rank-hero__total {
                    font-size: 0.75rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.5);
                }

                /* Stacked action buttons on the right side. */
                .lcs__actions {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    flex-shrink: 0;
                }
                .lcs__pill {
                    display: inline-flex;
                    align-items: center;
                    font-size: 0.62rem;
                    font-weight: 800;
                    letter-spacing: 0.6px;
                    text-transform: uppercase;
                    padding: 4px 10px;
                    border-radius: 999px;
                    white-space: nowrap;
                }
                .lcs__pill--upcoming {
                    color: var(--status-upcoming-text, #00E676);
                    background: rgba(0, 230, 118, 0.12);
                    box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.35);
                }
                .lcs__pill--locked {
                    color: var(--status-locked-text, #F7C60D);
                    background: rgba(247, 198, 13, 0.12);
                    box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.35);
                }
                .lcs__pill--completed {
                    color: var(--status-completed-text, #CD5659);
                    background: rgba(205, 86, 89, 0.12);
                    box-shadow: inset 0 0 0 1px rgba(205, 86, 89, 0.35);
                }
                .lcs__pill--neutral {
                    color: rgba(255, 255, 255, 0.7);
                    background: rgba(255, 255, 255, 0.05);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
                }

                /* Action buttons — styled to match bma-tournament-card.
                   Info: translucent status color + inset border, pulsing
                   Join gradient, and solid gold Play. Kept compact so the
                   list row stays dense. */
                .lcs__btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    min-height: 34px;
                    padding: 0 14px;
                    border: none;
                    border-radius: var(--btn-radius, var(--radius-md, 8px));
                    font-size: 0.78rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    cursor: pointer;
                    font-family: inherit;
                    transition: transform 0.1s ease, box-shadow 0.2s ease, background 0.2s ease;
                }
                .lcs__btn:active { transform: scale(0.97); }

                /* INFO — status-tinted translucent pill, green default. */
                .lcs__btn--info {
                    color: var(--status-upcoming-text, #00E676);
                    background: var(--status-upcoming-bg, rgba(0, 230, 118, 0.15));
                    box-shadow: inset 0 0 0 1px var(--status-upcoming-border, rgba(0, 230, 118, 0.3));
                }
                .lcs__btn--info:hover {
                    background: rgba(0, 230, 118, 0.25);
                    color: #00FF88;
                    box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.4), 0 0 12px rgba(0, 230, 118, 0.3);
                }
                /* Info turns gold when user is in a LIVE contest. */
                :host([data-bma-tourn-status="LOCKED"][data-user-participating]) .lcs__btn--info {
                    color: var(--status-locked-text, #F7C60D);
                    background: var(--status-locked-bg, rgba(247, 198, 13, 0.15));
                    box-shadow: inset 0 0 0 1px var(--status-locked-border, rgba(247, 198, 13, 0.3));
                }
                :host([data-bma-tourn-status="LOCKED"][data-user-participating]) .lcs__btn--info:hover {
                    background: rgba(247, 198, 13, 0.25);
                    color: #FFD700;
                    box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.4), 0 0 12px rgba(247, 198, 13, 0.3);
                }
                /* Info goes neutral/gray for LOCKED-not-joined and COMPLETED. */
                :host([data-bma-tourn-status="LOCKED"]:not([data-user-participating])) .lcs__btn--info,
                :host([data-bma-tourn-status="COMPLETED"]) .lcs__btn--info {
                    color: #FAFAFA;
                    background: rgba(30, 30, 30, 0.85);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
                }
                :host([data-bma-tourn-status="LOCKED"]:not([data-user-participating])) .lcs__btn--info:hover,
                :host([data-bma-tourn-status="COMPLETED"]) .lcs__btn--info:hover {
                    background: rgba(50, 50, 50, 0.9);
                    color: #fff;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25), 0 0 12px rgba(255, 255, 255, 0.15);
                }

                /* JOIN — gradient + pulse, matches the main card's CTA. */
                .lcs__btn--join {
                    color: #000;
                    background: linear-gradient(135deg, var(--status-upcoming-text, #00E676) 0%, var(--app-core-color--yellow-3__dark--brand, #FFD700) 100%);
                    box-shadow: 0 4px 15px rgba(0, 230, 118, 0.4);
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
                    font-weight: 600;
                    letter-spacing: 0.5px;
                    position: relative;
                    overflow: hidden;
                    animation: lcs-join-pulse 2s ease-in-out infinite;
                }
                .lcs__btn--join::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.02) 10px, rgba(0, 0, 0, 0.02) 20px);
                    pointer-events: none;
                }
                .lcs__btn--join:hover {
                    background: linear-gradient(135deg, #00FF88 0%, #FFE033 100%);
                    transform: translateY(-2px) scale(1.04);
                    box-shadow: 0 8px 25px rgba(0, 230, 118, 0.6);
                    animation: none;
                }
                @keyframes lcs-join-pulse {
                    0%, 100% { transform: scale(1); box-shadow: 0 4px 15px rgba(0, 230, 118, 0.4); }
                    50%      { transform: scale(1.02); box-shadow: 0 6px 20px rgba(0, 230, 118, 0.5); }
                }

                /* PLAY — solid gold gradient, matches the main card. */
                .lcs__btn--play {
                    color: #000;
                    background: linear-gradient(180deg, #FFD700 0%, #FFC107 100%);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.15);
                    font-weight: 600;
                }
                .lcs__btn--play:hover {
                    background: linear-gradient(180deg, #FFE033 0%, #FFD700 100%);
                    transform: translateY(-1px);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0, 0, 0, 0.2);
                }

                /* VIEW (completed, not joined) — neutral pill. */
                .lcs__btn--view {
                    color: rgba(255, 255, 255, 0.9);
                    background: rgba(255, 255, 255, 0.08);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
                }
                .lcs__btn--view:hover {
                    background: rgba(255, 255, 255, 0.14);
                    color: #fff;
                }

                /* ── KPI STRIP: labeled columns at the bottom ────── */
                .lcs__kpi {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 4px;
                    padding: 10px 14px 12px;
                    border-top: 1px solid rgba(255, 255, 255, 0.06);
                    background: rgba(255, 255, 255, 0.015);
                }
                .lcs__kpi-cell {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    gap: 2px;
                    min-width: 0;
                }
                .lcs__kpi-label {
                    font-size: 0.58rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: rgba(255, 255, 255, 0.45);
                }
                .lcs__kpi-value {
                    font-size: 0.88rem;
                    font-weight: 800;
                    color: #fff;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    max-width: 100%;
                    line-height: 1.15;
                }
                .lcs__kpi-value--td {
                    color: var(--status-locked-text, #F7C60D);
                }
                .lcs__kpi-value--green {
                    color: var(--status-upcoming-text, #00E676);
                }

                /* Subtle alternating stripe for list rhythm. */
                :host(:nth-of-type(even)) .lcs {
                    background: var(--surface-default, #1e1e1e);
                }
                :host(:nth-of-type(even)) .lcs:hover {
                    background: var(--surface-overlay, #2a2a2a);
                }

                :host([data-bma-tourn-wait="true"]) .lcs {
                    opacity: 0.55;
                    filter: blur(0.5px);
                    pointer-events: none;
                    cursor: wait;
                }

                /* Mobile: keep Info label visible (same as main card).
                   Only tighten type sizes on narrow phones. */
                @media (max-width: 480px) {
                    .lcs__name { font-size: 0.9rem; }
                    .lcs__kpi-value { font-size: 0.82rem; }
                }
            </style>

            <div class="lcs">
                <span class="lcs__strip" aria-hidden="true"></span>
                <div class="lcs__body">
                    <div class="lcs__upper">
                        <div class="lcs__main">
                            <span class="lcs__sports">${p}${f}</span>
                            <span class="lcs__name">${this.caption}</span>
                            ${h?`<span class="lcs__mode-row">${h}</span>`:""}
                        </div>
                        <div class="lcs__side">
                            ${m}
                            ${g}
                            <div class="lcs__actions">
                                ${_}
                            </div>
                        </div>
                    </div>

                    <div class="lcs__kpi">
                        <div class="lcs__kpi-cell">
                            <span class="lcs__kpi-label">${u}</span>
                            <span class="lcs__kpi-value">${d}</span>
                        </div>
                        <div class="lcs__kpi-cell">
                            <span class="lcs__kpi-label">Joined</span>
                            <span class="lcs__kpi-value lcs__kpi-value--green">${c}</span>
                        </div>
                        <div class="lcs__kpi-cell">
                            <span class="lcs__kpi-label">Games</span>
                            <span class="lcs__kpi-value">${l}</span>
                        </div>
                        <div class="lcs__kpi-cell">
                            <span class="lcs__kpi-label">Starting TD$</span>
                            <span class="lcs__kpi-value lcs__kpi-value--td">${i}</span>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-tournament-list-card",X1);const zn=`
<div class="bet-slip__empty">
  <svg class="bet-slip__empty-graphic" viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="none">
    <circle cx="80" cy="80" r="60" fill="rgba(247, 198, 13, 0.06)"/>
    <circle cx="80" cy="80" r="60" stroke="rgba(247, 198, 13, 0.18)" stroke-width="1"/>
    <g transform="translate(54, 44)">
      <path d="M2 4 A4 4 0 0 1 6 0 L46 0 A4 4 0 0 1 50 4 L50 68 L42 63 L34 68 L26 63 L18 68 L10 63 L2 68 Z"
            stroke="#F7C60D"
            stroke-width="2.5"
            stroke-linejoin="round"
            stroke-linecap="round"
            fill="rgba(247, 198, 13, 0.04)"/>
      <rect x="12" y="16" width="22" height="3" rx="1.5" fill="rgba(255, 255, 255, 0.85)"/>
      <rect x="38" y="16" width="10" height="3" rx="1.5" fill="#F7C60D"/>
      <rect x="12" y="28" width="28" height="2.5" rx="1.25" fill="rgba(255, 255, 255, 0.45)"/>
      <rect x="12" y="42" width="22" height="3" rx="1.5" fill="rgba(255, 255, 255, 0.85)"/>
      <rect x="38" y="42" width="10" height="3" rx="1.5" fill="#F7C60D"/>
      <rect x="12" y="54" width="28" height="2.5" rx="1.25" fill="rgba(255, 255, 255, 0.45)"/>
    </g>
  </svg>
  <h3 class="bet-slip__empty-title">Bet Slip Empty</h3>
  <p class="bet-slip__empty-subtitle">Add selections to place bet</p>
</div>
`.trim();typeof window<"u"&&(window.EMPTY_BETSLIP_HTML=zn);const Pe={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,a=null,n=0){const r=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),l=document.querySelector("#summary-payout");r&&(this.updateTDBalance("#summary-balance",e),e<0?r.classList.add("summary-cell__red"):r.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),l&&(l.textContent=s.toFixed(2),s<0?l.classList.add("summary-cell__red"):l.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(i){let u="";if(a){const p=a.tournament_dollars||0,f=e-p;f>0?u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(u=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const d=e<0?"#FF5252":"#00E676";i.innerHTML=`<span style="color: ${d};">TD$ ${e.toLocaleString()}</span>${u}`}if(c){const u=n||s||0;let d="";u>0&&(d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${u.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${d}`}if(a&&a.tournament_dollars){const u=a.tournament_dollars,d=document.querySelector(".dash-stat__gauge-fill--balance");if(d){const f=Math.max(e/u*100,0);d.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(t/u*100,100);p.style.width=`${f}%`}}this.updateBetSlipToggleSummary()},updateBetSlipToggleSummary(){const e=document.getElementById("bet-grid-toggle-count"),t=document.querySelector(".bet-grid__toggle-container");if(!e||!t)return;const s=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").length;e.textContent=s,t.classList.toggle("bet-grid__toggle-container--has-bets",s>0);const a=document.getElementById("bet-slip-tab-slip-badge");a&&(a.textContent=s,a.style.visibility=s>0?"visible":"hidden");const n=document.getElementById("bet-slip-tab-mybets-badge");if(n){const r=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing").length;n.textContent=r,n.style.visibility=r>0?"visible":"hidden"}},_globalLBCache:{},async prefetchGlobalLeaderboard(e="ALL"){const s=this._globalLBCache[e];if(s?.data&&Date.now()-s.ts<3e5)return s.data;if(s?.inflight)return null;this._globalLBCache[e]={data:s?.data||null,ts:s?.ts||0,inflight:!0};try{const a=await ke.fetchAllTimeLeaderboard(e,100,"td");return this._globalLBCache[e]={data:a,ts:Date.now(),inflight:!1},console.log(`[appEvents] All-time leaderboard prefetched [${e}]:`,a?.count||0,"rows, last_updated:",a?.last_updated),a}catch(a){return console.warn(`[appEvents] All-time leaderboard prefetch failed [${e}]:`,a),this._globalLBCache[e]&&(this._globalLBCache[e].inflight=!1),null}},_betStatsCache:{stats:null,ts:0,inflight:!1},async _ensureBetStatsCache(e){const s=Date.now();if(this._betStatsCache.stats&&s-this._betStatsCache.ts<3e5)return this._betStatsCache.stats;if(this._betStatsCache.inflight)return null;this._betStatsCache.inflight=!0;try{const n=(await ke.fetchBetSlips(e))?.rows||[];let r=0,o=0,l=0;return n.forEach(i=>{(i.bet||[]).forEach(u=>{Object.keys(u).forEach(d=>{if(d==="short_title")return;const p=u[d];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?r++:o++:l++)})})}),this._betStatsCache={stats:{wins:r,losses:o,pending:l},ts:s,inflight:!1},this._betStatsCache.stats}catch(a){return console.warn("[app_events] fetchBetSlips failed for stats panel",a),this._betStatsCache.inflight=!1,null}},buildStatsPanel(e,t,s=null){if(!t||!e||e.length===0)return"";const a=e.filter(g=>(g.entities?.guids||[]).includes(t)),n=a.filter(g=>(g.status||g.class)==="COMPLETED").length;let r=0,o=0;a.forEach(g=>{(Array.isArray(g.tags)?g.tags:[]).forEach(v=>{if(!v||typeof v!="object")return;const h=(v.entity_guid===t?v.badge:null)||(typeof v[t]=="string"?v[t]:null);typeof h=="string"&&h.startsWith("--badge__ribbon--")&&(o++,h==="--badge__ribbon--gold"&&r++)})});const l={};a.forEach(g=>{(Array.isArray(g.sports_allowed)?g.sports_allowed:[]).forEach(v=>{const m=Ye.find(_=>_.key===v.key)?.group||"Other";l[m]=(l[m]||0)+1})});let i="—",c="",u=0;Object.entries(l).forEach(([g,b])=>{b>u&&(u=b,i=g,c=g)});let d="—",p="Pending";if(s){const g=s.wins+s.losses;g>0?(d=`${Math.round(s.wins/g*100)}%`,p=`${s.wins}-${s.losses}`):(d="—",p="No settled bets")}const f=c?`<bma-sport-icon data-sport-group="${c.toLowerCase()}"></bma-sport-icon>`:"";return`
            <div class="stats-panel">
                <div class="stats-panel__header">
                    <svg class="stats-panel__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
                    <span class="stats-panel__title">Your Stats</span>
                </div>
                <div class="stats-panel__rows">
                    <div class="stats-row">
                        <span class="stats-row__label">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                            Tournaments Played
                        </span>
                        <span class="stats-row__value">${n}</span>
                    </div>
                    <div class="stats-row">
                        <span class="stats-row__label">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
                            1st Place Finishes
                        </span>
                        <span class="stats-row__value">${r}</span>
                    </div>
                    <div class="stats-row">
                        <span class="stats-row__label">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 5.18L20 8l-4 3.9.94 5.5L12 14.78 7.06 17.4 8 11.9 4 8l5.61-.82L12 2z"/></svg>
                            Total Trophies
                        </span>
                        <span class="stats-row__value">${o}</span>
                    </div>
                    <div class="stats-row">
                        <span class="stats-row__label">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/></svg>
                            Favorite Sport
                        </span>
                        <span class="stats-row__value stats-row__value--sport">
                            ${f}
                            <span>${i}</span>
                        </span>
                    </div>
                    <div class="stats-row">
                        <span class="stats-row__label">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                            Bet Win Rate
                        </span>
                        <span class="stats-row__value">
                            ${d}
                            <span class="stats-row__sub">${p}</span>
                        </span>
                    </div>
                </div>
            </div>
        `},categorizeTournaments(e,t,s,a,n={}){const r=[],{subStatus:o="all",sort:l="default",result:i="all",odds:c="all"}=n,u=L=>(L.entities?.guids||[]).includes(a),d=L=>L.status==="UPCOMING"||L.class==="UPCOMING",p=L=>L.status==="LOCKED"||L.class==="LOCKED",f=L=>d(L)||p(L),g=L=>L.status==="COMPLETED"||L.class==="COMPLETED",b=L=>Array.isArray(L.matches_expanded)&&L.matches_expanded.length>0,v=(L,C)=>(L.sports_allowed||[]).some(k=>k.key===C),h=L=>{if(!L)return"";const C=String(L),k=C.toLowerCase(),S=Ye.find($=>$.key===C||String($.key).toLowerCase()===k||String($.title||"").toLowerCase()===k);return S?.title?S.title:/^[a-zA-Z]{2,5}$/.test(C)?C.toUpperCase():C},m=L=>{const C=L.tags||[];for(const k of C)if(!(typeof k!="object"||!k)&&(k.entity_guid===a&&k.badge||k[a]))return!0;return!1},_=L=>{if(l==="default")return L;const C=[...L];switch(l){case"starting_soon":C.sort((k,S)=>new Date(k.window_start_time||0)-new Date(S.window_start_time||0));break;case"most_entrants":C.sort((k,S)=>(S.entities?.guids?.length||0)-(k.entities?.guids?.length||0));break;case"fewest_spots":C.sort((k,S)=>{const $=(k.entities?.max||0)-(k.entities?.guids?.length||0),z=(S.entities?.max||0)-(S.entities?.guids?.length||0);return $-z});break;case"recently_active":C.sort((k,S)=>new Date(S.status_time||0)-new Date(k.status_time||0));break;case"newest":C.sort((k,S)=>new Date(S.status_time||0)-new Date(k.status_time||0));break;case"td_high":C.sort((k,S)=>parseFloat(S.tournament_dollars||0)-parseFloat(k.tournament_dollars||0));break;case"td_low":C.sort((k,S)=>parseFloat(k.tournament_dollars||0)-parseFloat(S.tournament_dollars||0));break}return C},y=L=>i==="all"?L:i==="trophy"?L.filter(C=>m(C)):i==="no_trophy"?L.filter(C=>!m(C)):L;let w=e,x="",E=s||"all";if(s==="multi"?(w=e.filter(L=>(L.sports_allowed?.length||0)>1),x="Multi-Sport "):s!=="all"&&(w=e.filter(L=>v(L,s)),x=h(s)+" "),t==="lobby"){const L=n.lobbySubTab||"active";let C=w.filter(k=>k.is_private!==!0);if(L==="completed"){const k=_(C.filter(S=>g(S))).slice(0,20);k.length>0?r.push({title:`Recently Completed ${x}Tournaments`,tournaments:k}):r.push({title:`Recently Completed ${x}Tournaments`,tournaments:[],emptyMessage:"No recently completed tournaments",emptySubtext:"Finished public tournaments will show up here."})}else{let k=C.filter(z=>f(z));o==="open"?k=k.filter(z=>d(z)):o==="locked"&&(k=k.filter(z=>p(z)));const S=_(k.filter(z=>d(z)&&!u(z)));r.push({title:`Open Entry ${x}Tournaments`,tournaments:S});const $=_(k.filter(z=>p(z)&&!u(z)));$.length>0&&r.push({title:`In Progress - Entry Closed ${x}Tournaments`,tournaments:$})}}else if(t==="my"){const L=n.mySubTab||"active",C=w.filter(k=>u(k));if(L==="completed"){const k=y(C.filter($=>g($))),S=_(k);S.length>0?r.push({title:`Your Completed ${x}Tournaments`,tournaments:S}):r.push({title:`Completed ${x}Tournaments`,tournaments:[],emptyMessage:"No completed contests yet",emptySubtext:"Finished tournaments you joined will show here."})}else{let k=C.filter($=>f($));o==="active"?k=k.filter($=>p($)):o==="upcoming"&&(k=k.filter($=>d($))),c==="available"?k=k.filter($=>b($)):c==="none"&&(k=k.filter($=>!b($)));const S=_(k);S.length>0?r.push({title:`Your Active ${x}Tournaments`,tournaments:S}):r.push({title:`Active ${x}Tournaments`,tournaments:[],emptyMessage:"No active contests",emptySubtext:"Join a tournament from the Lobby and it'll show up here."})}}else if(t==="private")if((n.privateSubTab||"all")==="invites")r.push({title:"Invites",tournaments:[],emptyMessage:"No pending invites",emptySubtext:null});else{const C=w.filter($=>$.is_private===!0),k=_(C.filter($=>$.creator_guid&&$.creator_guid===a)),S=_(C.filter($=>(!$.creator_guid||$.creator_guid!==a)&&u($)));k.length>0&&r.push({title:"Running",tournaments:k}),S.length>0&&r.push({title:"Playing In",tournaments:S}),k.length===0&&S.length===0&&r.push({title:"Bet Max Pools",tournaments:[],emptyMessage:"No pools yet",emptySubtext:"Start your own Bet Max Pool. Your contest, your rules."})}else r.push({title:"Tournaments",tournaments:e});const I=E==="all"||E==="multi"?"":h(E);return r.forEach(L=>{L.sportKey=E,L.sportLabel=I}),r},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=Te();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let a=0,n=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const v=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(h=>h.tournament_guid===e.guid);console.log("[Dashboard Update] Found",v.length,"existing bets for this tournament"),v.forEach(h=>{(h.bet||[]).forEach(_=>{Object.keys(_).filter(w=>w!=="short_title").forEach(w=>{const x=_[w];x&&(x.stake&&(a+=parseFloat(x.stake)),x.reconciled===!0&&x.payout>0&&(n+=parseFloat(x.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const b=parseFloat(o.textContent)||0;r=Math.max(0,b-a),console.log("[Dashboard Update] Summary total stakes:",b,"Pending:",r)}const l=a+r,i=s-a-r+n;console.log("[Dashboard Update] TD$:",s,"Committed:",a,"Pending:",r,"Payouts:",n,"=> Balance:",i);const c=document.getElementById("dashboard-td-balance");if(c){const b=i-s;let v="";b>0?v=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${b.toLocaleString()})</span>`:b<0&&(v=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${b.toLocaleString()})</span>`);const h=i<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${h};">TD$ ${i.toLocaleString()}</span>${v}`}const u=document.getElementById("dashboard-td-pending"),d=document.querySelector(".dash-stat__gauge-fill--pending");if(u){const b=r>0?r:l,v=n||0;let h="";if(v>0&&(h=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${v.toLocaleString()})</span>`),u.innerHTML=`TD$ ${b.toLocaleString()}${h}`,d){const m=Math.min(b/s*100,100);d.style.width=`${m}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const b=Math.max(i/s*100,0);p.style.width=`${b}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&e){const b=e.entities?.guids?.length||0,v=e.entities?.max||100,h=b/v*100;f.style.width=`${h}%`}const g=document.getElementById("game-mode-progress");if(g){const b=e.class||"DEFAULT",v=t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(h=>h.coreTournaments__guid===e.guid||h.tournament_guid===e.guid):[];g.setAttribute("data-game-mode-class",b),g.setAttribute("data-starting-td",String(e.tournament_dollars||0)),g.setAttribute("data-tags",JSON.stringify(e.tags||[])),g.setAttribute("data-bets",JSON.stringify(v))}},renderMatchCards(e){if(!e)return;const t=document.querySelector(".select-grid");if(!t)return;if(t.innerHTML="",!e.matches_expanded||!Array.isArray(e.matches_expanded)||e.matches_expanded.length===0){t.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const s=new Date,a=u=>{let d=null;try{d=typeof u.scoreboard_data=="string"?JSON.parse(u.scoreboard_data):u.scoreboard_data}catch{}const p=(d?.time_remaining||"").toString().trim().toLowerCase();if(p)return p==="final"||p.startsWith("final")||p==="game over"||p==="ended"?"final":"live";const f=new Date(u.scheduled_at).getTime();if(isNaN(f))return"upcoming";const g=s.getTime();if(g<f)return"upcoming";const b=14400*1e3;return g-f>b?"final":"live"},n={upcoming:[],live:[],final:[]};e.matches_expanded.forEach(u=>n[a(u)].push(u)),n.upcoming.sort((u,d)=>new Date(u.scheduled_at)-new Date(d.scheduled_at)),n.live.sort((u,d)=>new Date(u.scheduled_at)-new Date(d.scheduled_at)),n.final.sort((u,d)=>new Date(d.scheduled_at)-new Date(u.scheduled_at));const r=[{key:"upcoming",label:"Upcoming",matches:n.upcoming},{key:"live",label:"Live",matches:n.live},{key:"final",label:"Final",matches:n.final}],l=r.filter(u=>u.matches.length>0).length>1,i=[];r.forEach(u=>{u.matches.length!==0&&(l&&i.push({kind:"header",section:u}),u.matches.forEach(d=>i.push({kind:"match",match:d})))});const c=()=>{const d=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let p=0;d&&Te().coreTourn.length>0&&(p=Te().coreTourn[Te().coreTourn.length-1].data.find(_=>_.guid===d)?.tournament_dollars||0);const f=document.querySelector(".bet-grid__slip-BETSLIP-content"),g=f?f.querySelectorAll("bma-bet-entry"):[],b=Array.from(g).map(h=>({matchGuid:h.getAttribute("data-match-guid"),type:h.getAttribute("data-content-type"),teamPoints:h.getAttribute("data-content-team-points"),odds:h.getAttribute("data-content-odds"),stake:h.getAttribute("data-stake"),payout:h.getAttribute("data-payout"),matchTitle:h.getAttribute("data-match-title"),abbreviatedTitle:h.getAttribute("data-abbreviated-title"),scheduledAt:h.getAttribute("data-scheduled-at")})),v=Te();ce.publish(v.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:p,bets:b,timestamp:Date.now()}))};i.forEach(u=>{if(u.kind==="header"){const v=document.createElement("div");v.className=`play-match-group-header play-match-group-header--${u.section.key}`,v.innerHTML=`
                    <span class="play-match-group-header__label">${u.section.label}</span>
                    <span class="play-match-group-header__count">${u.section.matches.length}</span>
                `,t.appendChild(v);return}const d=u.match,f=new Date(d.scheduled_at)<s;let g=!1;try{g=(typeof d.scoreboard_data=="string"?JSON.parse(d.scoreboard_data):d.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const b=document.createElement("bma-bet-match-card");if(b.setAttribute("data-match-id",d.id),b.setAttribute("data-match-guid",d.odds_id||d.guid||d.id),b.setAttribute("data-match-title",d.title),b.setAttribute("data-match-short-title",d.short_title||d.title),b.setAttribute("data-scheduled-at",d.scheduled_at),b.setAttribute("data-home-team",d.home_team_id||"Home"),b.setAttribute("data-away-team",d.away_team_id||"Away"),b.setAttribute("data-is-disabled",f||g?"true":"false"),b.setAttribute("data-sync-theme","dark"),d.odds_markets){const v=typeof d.odds_markets=="string"?d.odds_markets:JSON.stringify(d.odds_markets);b.setAttribute("data-odds-markets",v)}if(d.scoreboard_data){const v=typeof d.scoreboard_data=="string"?d.scoreboard_data:JSON.stringify(d.scoreboard_data);b.setAttribute("data-scoreboard",v)}if(e&&e.tags){const v=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);b.setAttribute("data-tournament-tags",v)}if(d.sport_id)b.setAttribute("data-sport-key",d.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const v=e.sports_allowed[0];v&&v.key&&b.setAttribute("data-sport-key",v.key)}b.addEventListener("bet-button-click",v=>{const{betData:h,isActive:m,button:_}=v.detail;if(m){const y=document.querySelector(".bet-grid__slip-BETSLIP-content");if(y){const w=y.querySelectorAll("bma-bet-entry");let x=!1;w.forEach(E=>{if(x)return;const I=E.getAttribute("data-content-type"),L=E.getAttribute("data-content-odds");I===h.type&&L===h.price&&(E.remove(),x=!0)}),y.children.length===0&&(y.innerHTML=zn)}_.classList.remove("btn--active"),setTimeout(()=>{c()},100)}else{const y=document.querySelector(".play-cntr"),w=y?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const I=window.GameMode.get(w),L=Te(),C=L.coreBetSlip.length>0?L.coreBetSlip[L.coreBetSlip.length-1].data.filter(S=>S.coreTournaments__guid===y?.dataset?.currentTournGuid):[],k=I.canPlaceBet({matchGuid:h.matchGuid,type:h.type,team:h.team},C,null);if(!k.allowed){typeof neodigmToast<"u"&&neodigmToast.q(k.reason,"warning",3e3);return}}document.querySelectorAll("bma-bet-match-card").forEach(I=>{I.shadowRoot.querySelectorAll(".btn--selected").forEach(L=>{L.classList.remove("btn--selected")})}),_.classList.add("btn--selected"),_.classList.add("btn--active");const x=Te(),E=h.type;E==="spread"?ce.publish(x.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(h)):E==="money"?ce.publish(x.hierTopics.COREBETSLIP__MONEY,JSON.stringify(h)):E==="total"&&ce.publish(x.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(h)),ce.publish(x.hierTopics.COREBETSLIP,JSON.stringify(h))}}),t.appendChild(b)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector("[data-publish-betslip]");s&&delete s.dataset.processing;const a=document.querySelector(".bet-grid__slip-BETSLIP-content");a&&(a.innerHTML=zn);const n=Te();if(n.coreTourn.length>0){const l=n.coreTourn[n.coreTourn.length-1].data.find(i=>i.guid===e);l&&Pe.renderMatchCards(l)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{ce.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const r=document.querySelector(".bet-grid__slip");r&&r.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const n=a.getAttribute("data-match-guid"),r=a.getAttribute("data-home-team"),o=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(i=>{if(i.disabled)return;const c=i.dataset.betType,p=i.dataset.team==="home"?r:o;t.some(g=>{if(g.coreMatches__guid!==n)return!1;const b=g.bet||[];if(b.length===0)return!1;const v=b[0],m=Object.keys(v).filter(w=>w!=="short_title")[0],y=v[m]?.type;return c==="total"?y===c:y===c&&m===p})&&(i.disabled=!0,i.classList.add("btn--disabled"))})})},initPlayScreen(e,t="INFO"){const s=Te(),a=document.querySelector(".play-cntr");if(!a){console.warn("[app_events] initPlayScreen: .play-cntr not found");return}e&&(a.dataset.currentTournGuid=e),t&&(a.dataset.currentTournAction=t);const n=a.dataset.currentTournGuid,r=a.dataset.currentTournAction||"INFO";if(n&&s.coreTourn.length>0){const f=s.coreTourn[s.coreTourn.length-1].data.find(b=>b.guid===n),g=f?.class||"DEFAULT";a.dataset.gameType=g,console.log("[app_events] Game mode:",g,"for tournament:",f?.caption)}console.log("[app_events] play_route mounted - GUID:",n,"action:",r),window.initBetGridToggle&&window.initBetGridToggle(),Pe.updatePlayButton(),Pe.populateInfoPage();let o=r==="PLAY"||r==="JOIN"?"PLAY":r;if(n&&s.coreTourn.length>0&&s.coreTourn[s.coreTourn.length-1].data.find(g=>g.guid===n)?.status==="COMPLETED"&&(o="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),o){const p=`ROUTE.HOME.SODAPOP_PLAY.${o}`;console.log("[app_events] Publishing initial topic:",p),ce.publish(p,JSON.stringify({tournamentGuid:n,timestamp:Date.now()}))}if(!n||s.coreTourn.length===0)return;const i=s.coreTourn[s.coreTourn.length-1].data.find(p=>p.guid===n);if(!i)return;Pe.renderMatchCards(i);const c=document.querySelector("#pop-play__tourn-caption--id"),u=document.querySelector("#pop-play__tourn-tagline--id");c&&(c.textContent=i.caption),u&&(u.textContent=i.tagline),Pe.updateTournamentDashboard(i);const d=document.getElementById("dashboard-rank");if(d){const p=i.entities?.guids?.length||0;d.innerHTML=`<span class="tourn-dashboard__rank-text">-/${p}</span>`}Pe.updateBetSlipToggleSummary()},updatePlayButton(){const e=Te(),t=document.querySelector(".play-cntr"),s=t?.dataset?.currentTournGuid,a=t?.dataset?.currentTournAction||"INFO",n=document.getElementById("btn-join__play--id");if(!n||!s||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(u=>u.guid===s);if(!o)return;const l=e.appSession?.session_user?.guid,i=o.entities?.guids?.includes(l),c=o.status;n.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!i)&&(n.style.visibility="",c==="UPCOMING"&&!i?a==="INFO"?(n.textContent="Join",n.dataset.requiresJoin="true"):a==="PLAY"&&(n.textContent="Play",n.dataset.requiresJoin="false"):(n.textContent="Play",n.dataset.requiresJoin="false"))},populateInfoPage(){const e=Te(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(M=>M.guid===s);if(!n)return;const r=document.getElementById("pop-play__caro-info-summary1--id");if(!r)return;const o=M=>{if(!M)return"N/A";let q=new Date(M);return!M.includes("Z")&&!M.match(/[+-]\d{2}:\d{2}$/)&&(q=new Date(M+"Z")),isNaN(q.getTime())?"Invalid Date":q.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};n.status&&`${n.status.toLowerCase()}`;const l={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},i=n.sports_allowed&&Array.isArray(n.sports_allowed)?n.sports_allowed.map(M=>{const q=M.key||M,D=Ye.find(ae=>ae.key===q),B=D?D.group:"default",U=l[q]||D?.title||q;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${q}" data-sport-group="${B}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${U}</span>
                </span>`}).join(""):"N/A",c=e.appSession?.session_user?.guid,u=n.entities?.guids?.includes(c),d=n.entities?.guids?.length||0,p=n.entities?.max||0;(d/(p||1)*100).toFixed(1);const f=(()=>{const M=new Date(n.window_start_time),q=new Date(n.window_end_time),D=new Date;if(isNaN(M.getTime())||isNaN(q.getTime()))return"";const B=q-M,U=D-M;let ae=0,ne="";if(D<M){ae=0;const pe=M-D,te=Math.floor(pe/864e5),oe=Math.floor(pe%864e5/36e5);ne=te>0?`First match in ${te}d ${oe}h`:`First match in ${oe}h`}else if(D>q){const pe=new Date(q.getFullYear(),q.getMonth(),q.getDate()),te=new Date(D.getFullYear(),D.getMonth(),D.getDate());ae=pe.getTime()===te.getTime()?95:100,ne=ae===100?"Tournament Complete":"Last Day"}else{ae=Math.min(100,U/B*100);const pe=Math.ceil(B/864e5),te=Math.ceil(U/864e5);ne=te>=pe?"Last Day":`Day ${te} of ${pe}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${ne}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${ae.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),g=n.tags||[],v=g.some(M=>M.override_last_match_close===!0)?"+":"",h=g.some(M=>M.match_inprogress_lock===!0),m=g.some(M=>M.override_last_match_close===!0);let _="Bet Max Tourney",y=null,w="";if(typeof window.GameMode<"u"){const M=window.GameMode.get(n.class||"DEFAULT"),q=M.getEffectiveRules(n);if(y=M.getBadge(),_=M.label,q.stakeRule==="SPEND_ALL"&&(w+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend entire starting TD$ amount</span></div>'),q.requiredBetTypes.length>0){const D=q.requiredBetTypes.map(B=>B==="SPREAD"?"Spread":B==="MONEY"?"Money Line":"Over/Under").join(", ");w+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${D}</span></div>`}q.oneBetPerMatchPerType&&(w+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const x=(()=>{const q=(n.tags||[]).find(ae=>ae.badge_gold!==void 0||ae.badge_silver!==void 0||ae.badge_bronze!==void 0);if(!q)return null;const D=q.badge_gold||0,B=q.badge_silver||0,U=q.badge_bronze||0;return D===0&&B===0&&U===0?null:{gold:D,silver:B,bronze:U}})();n.status==="LOCKED"||n.status==="UPCOMING"||n.status,n.status==="LOCKED"||n.status==="UPCOMING"||n.status==="COMPLETED"||n.status;const E=n.matches_expanded?.length||0,I=E===0?"TBD":`${E}${v}`;`${Number(n.tournament_dollars||0).toLocaleString()}${d}${p}${I}`;const L=n.status==="LOCKED"?"In Progress":n.status==="UPCOMING"?"Open":n.status,C=n.status==="LOCKED"?"var(--status-locked-text, #F7C60D)":n.status==="UPCOMING"?"var(--status-upcoming-text, #00E676)":"var(--status-completed-text, #CD5659)",k=`
            <div class="info-detail-row"><span>Game Mode</span><span>${_}${y?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${y.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${y.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${h?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${h?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${m?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${m?"On-going":"Fixed slate"}</span></div>
            ${w}
        `,S=`
            <div class="info-detail-row"><span>Sports</span><span>${i}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${o(n.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends <span style="color: rgba(255,255,255,0.45); font-weight: 400; margin-left: 4px;">(estimated)</span></span><span>${o(n.window_end_time)}</span></div>
        `,$=x?`
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${x.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${x.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${x.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${x.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${x.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${x.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            <div style="padding: 16px 0 0;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); padding: 0 16px 8px;">Trophy Breakdown</div>
                ${x.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${x.gold}</span>
                </div>`:""}
                ${x.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${x.silver}</span>
                </div>`:""}
                ${x.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${x.bronze}</span>
                </div>`:""}
            </div>
        `:`<div class="info-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
            <p>No trophies configured for this tournament</p>
        </div>`,z=(()=>{if(!n.matches_expanded||!Array.isArray(n.matches_expanded)||n.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let M=0,q=0,D=0;const B=new Date;n.matches_expanded.forEach(oe=>{let de=null;try{de=typeof oe.scoreboard_data=="string"?JSON.parse(oe.scoreboard_data):oe.scoreboard_data}catch{}de?.time_remaining?de.time_remaining.toLowerCase()==="final"?M++:q++:new Date(oe.scheduled_at)<B?M++:D++});const U=q>0?"live":"upcoming",ae=[];M>0&&ae.push(`<span class="match-filter-btn${U==="final"?" match-filter--active":""}" data-filter="final">${M} Final</span>`),q>0&&ae.push(`<span class="match-filter-btn match-filter-btn--live${U==="live"?" match-filter--active":""}" data-filter="live">${q} Live</span>`),D>0&&ae.push(`<span class="match-filter-btn match-filter-btn--upcoming${U==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${D} Upcoming</span>`);const ne=ae.length>0?`<div class="match-filter-bar">${ae.join("")}</div>`:"",pe=new Date,te=n.matches_expanded.map(oe=>{const de=oe.scoreboard_data?typeof oe.scoreboard_data=="string"?oe.scoreboard_data:JSON.stringify(oe.scoreboard_data):"";let me="upcoming",be=null;try{be=typeof oe.scoreboard_data=="string"?JSON.parse(oe.scoreboard_data):oe.scoreboard_data}catch{}be?.time_remaining?me=be.time_remaining.toLowerCase()==="final"?"final":"live":me=new Date(oe.scheduled_at)<pe?"final":"upcoming";const _e=me!==U;return`<bma-match-status
                    data-match-guid="${oe.guid||oe.odds_id||oe.id||""}"
                    data-match-title="${oe.short_title||oe.title||"Match"}"
                    data-match-scheduled-at="${oe.scheduled_at||""}"
                    data-match-home-team="${oe.home_team_id||"Home"}"
                    data-match-away-team="${oe.away_team_id||"Away"}"
                    data-match-home-score="${oe.home_team_score!==null&&oe.home_team_score!==void 0?oe.home_team_score:""}"
                    data-match-away-score="${oe.away_team_score!==null&&oe.away_team_score!==void 0?oe.away_team_score:""}"
                    data-match-scoreboard="${de.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${oe.sport_id||""}"
                    data-match-status="${me}"
                    data-sync-theme="dark"
                    style="${_e?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${ne}
                </div>
                <div class="matches-list" id="info-matches-scroll">
                    ${te}
                </div>
            `})(),H=n.status==="UPCOMING"?"Accepting new players. Place bets before each match starts.":n.status==="LOCKED"?"No new entrants. Joined players can still bet on matches that haven't started yet.":n.status==="COMPLETED"?"All matches settled. Final standings locked in.":"",Y=`
            <div class="info-summary-pack">
                <div class="info-summary-pack__stat">
                    <span class="info-summary-pack__stat-label">Starting TD$</span>
                    <span class="info-summary-pack__stat-value" style="color: var(--status-upcoming-text, #00E676);">TD$ ${Number(n.tournament_dollars||0).toLocaleString()}</span>
                </div>
                <div class="info-summary-pack__stat">
                    <span class="info-summary-pack__stat-label">Players</span>
                    <span class="info-summary-pack__stat-value">${d} / ${p}</span>
                </div>
                <div class="info-summary-pack__stat">
                    <span class="info-summary-pack__stat-label">Games</span>
                    <span class="info-summary-pack__stat-value">${I}</span>
                </div>
            </div>
        `,ee=`
            <div class="info-pack info-legend info-legend--open">
                <button class="info-legend__toggle" aria-expanded="true" data-info-legend-toggle>
                    <span class="info-legend__toggle-left">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                        <span>Legend</span>
                    </span>
                    <svg class="info-legend__toggle-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
                <div class="info-legend__content">
                    <div class="info-legend__item">
                        <span class="info-legend__term">Odds Format · ${h?"Locked Odds":"Live Odds"}</span>
                        <span class="info-legend__def">${h?"Odds freeze at each match's scheduled start.":"Odds move with real-world markets throughout each game."}</span>
                    </div>
                    <div class="info-legend__item">
                        <span class="info-legend__term">Format · ${m?"On-going":"Fixed Slate"}</span>
                        <span class="info-legend__def">${m?"New matches are added as odds become available throughout the tournament.":"The slate is fixed at the start of the tournament. No new matches will be added."}</span>
                    </div>
                    <div class="info-legend__item">
                        <span class="info-legend__term">Game Mode · ${_}</span>
                        <span class="info-legend__def">${_==="Bet Max Tourney"?"Open betting across the full tournament slate. Rank by your TD$ balance. Pending bets don't move it; only settled wins and losses do. Ties break on Max Win, then earliest bet placed.":"See tournament rules for scoring and stake requirements."}</span>
                    </div>
                </div>
            </div>
        `,R=e.appSession?.session_user?.guid||"",N=!!n.creator_guid&&n.creator_guid===R;console.log("[info share] isCreator check:",{viewerGuid:R,creator_guid:n.creator_guid,created_by_user:n.created_by_user,is_private:n.is_private,join_slug:n.join_slug,share_url:n.share_url,tournament_guid:n.guid,isCreator:N});const Q=n.share_url||`${window.location.origin}${window.location.pathname}#/preview/${n.guid}${n.join_slug?"?s="+encodeURIComponent(n.join_slug):""}`,j=N?`
            <div class="info-pack info-pack--padded info-share-pack" data-tournament-guid="${n.guid||""}">
                <div class="info-share-pack__text">
                    <span class="info-share-pack__title">You're the host</span>
                    <span class="info-share-pack__sub">Invite friends directly or share the link.</span>
                </div>
                <form class="info-invite-form" data-info-invite-form autocomplete="off">
                    <input
                        type="text"
                        class="info-invite-form__input"
                        data-info-invite-input
                        name="invite-recipient"
                        placeholder="User Name or Email"
                        autocapitalize="off"
                        autocorrect="off"
                        spellcheck="false"
                        autocomplete="off"
                        data-lpignore="true"
                        data-1p-ignore="true"
                        data-form-type="other"
                    />
                    <button type="submit" class="info-invite-form__btn" data-info-invite-send>Send</button>
                </form>
                <p class="info-invite-form__status" data-info-invite-status hidden></p>
                <button class="info-share-pack__btn info-share-pack__btn--secondary" data-info-share-btn data-share-url="${Q.replace(/"/g,"&quot;")}" data-share-caption="${(n.caption||"tournament").replace(/"/g,"&quot;")}" aria-label="Share invite link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
                    <span>Share Invite Link</span>
                </button>
            </div>
        `:"",K=`
            <div class="info-pack info-pack--padded">
                <div class="info-progress-status">
                    <div class="info-progress-status__row">
                        <span class="info-progress-status__label">Status</span>
                        <span class="info-progress-status__value" style="color: ${C};">${L}</span>
                    </div>
                    ${H?`<div class="info-progress-status__hint">${H}</div>`:""}
                </div>
                ${f?`<div class="info-progress-divider"></div>${f}`:""}
            </div>
        `;r.innerHTML=`
            <div class="info-wrap">
                ${j}
                ${K}
                ${Y}
                ${ee}
                <div class="info-pack">
                    <div class="info-tabs">
                        <button class="info-tab info-tab--active" data-info-tab="summary"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Summary</button>
                        <button class="info-tab" data-info-tab="trophies"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Trophies</button>
                        <button class="info-tab" data-info-tab="matches"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> Matches</button>
                    </div>
                    <div class="info-tab-panel" data-info-panel="summary">${S}${k}</div>
                    <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${$}</div>
                    <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${z}</div>
                </div>
            </div>
        `;const se=r.querySelector("[data-info-legend-toggle]");se&&se.addEventListener("click",()=>{const q=se.closest(".info-legend").classList.toggle("info-legend--open");se.setAttribute("aria-expanded",String(q))});const Z=r.querySelector("[data-info-invite-form]");Z&&Z.addEventListener("submit",async M=>{M.preventDefault();const q=Z.querySelector("[data-info-invite-input]"),D=Z.querySelector("[data-info-invite-send]"),B=Z.parentElement.querySelector("[data-info-invite-status]"),U=(q?.value||"").trim();if(!U||!D)return;let ae=null;U.includes("@")?ae={email:U}:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(U)?ae={user_guid:U}:ae={userName:U},D.disabled=!0;const ne=D.textContent;D.textContent="Sending...",B&&(B.hidden=!0,B.textContent="");try{const pe=await ke.sendInvite(n.guid,ae);if(pe.ok&&pe.data?.invite){q.value="";const te=pe.data.invite.invitee_display_name||pe.data.invite.invitee_user_name||"them";typeof neodigmToast<"u"&&neodigmToast.q(`Invite sent to ${te}.`,"success")}else{const te=pe.data?.error||`http_${pe.status}`,oe=(()=>{if(te==="invitee_not_found")return"Couldn't find that player. Share the link instead.";if(te==="already_invited")return"You've already invited them.";if(te==="already_joined")return"They're already in this pool.";if(te==="pool_full")return"Pool is full.";if(te==="cooldown_active"){const de=pe.data?.retry_after_hours;return de?`They declined recently. Try again in ${de}h.`:"They declined recently. Try again tomorrow."}return te==="rate_limited"?"Too many invites. Try again in a few minutes.":te==="not_creator"?"Only the pool creator can send invites.":te==="not_private"?"This pool doesn't accept directed invites.":te==="invalid_request_shape"?"Enter a User Name or Email.":"Couldn't send invite. Try again."})();B&&(B.textContent=oe,B.hidden=!1,B.classList.add("info-invite-form__status--error"))}}catch(pe){console.warn("[info invite] send failed:",pe),B&&(B.textContent="Network error. Try again.",B.hidden=!1,B.classList.add("info-invite-form__status--error"))}finally{D.disabled=!1,D.textContent=ne}});const F=r.querySelector("[data-info-share-btn]");F&&F.addEventListener("click",async()=>{const M=F.dataset.shareUrl,q=F.dataset.shareCaption||"tournament";if(!M)return;const D=`Join ${q}`,B=`You're invited to join ${q} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:D,text:B,url:M});return}catch(U){if(U?.name==="AbortError")return}try{await navigator.clipboard.writeText(M),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(U){console.warn("[info share] clipboard write failed:",U),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Link: "+M,"danger")}}),r.querySelectorAll(".info-tab").forEach(M=>{M.addEventListener("click",()=>{r.querySelectorAll(".info-tab").forEach(D=>D.classList.remove("info-tab--active")),M.classList.add("info-tab--active");const q=M.dataset.infoTab;r.querySelectorAll(".info-tab-panel").forEach(D=>{D.style.display=D.dataset.infoPanel===q?"":"none"})})});const T=r.querySelector('[data-info-panel="matches"]');T&&T.addEventListener("click",M=>{const q=M.target.closest(".match-filter-btn");q&&(T.querySelectorAll(".match-filter-btn").forEach(D=>D.classList.remove("match-filter--active")),q.classList.add("match-filter--active"),T.querySelectorAll("bma-match-status").forEach(D=>{D.style.display=D.dataset.matchStatus===q.dataset.filter?"":"none"}))});const O=document.getElementById("pop-play__caro-info-summary2--id");O&&(O.innerHTML="");const P=document.getElementById("pop-play__caro-info-list--id");P&&(P.innerHTML="")},async populateLeaderboard(){const e=Te(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,a=e.appSession?.session_user?.guid;if(!s){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const n=document.getElementById("pop-play__caro-leaderboard--id");if(!n)return;let r=document.getElementById("leaderboard-loading-banner");r||(r=document.createElement("neodigm-juicebar"),r.id="leaderboard-loading-banner",r.setAttribute("role","progressbar"),r.setAttribute("data-n55-theme","warning"),r.setAttribute("data-n55-size","small"),r.innerHTML="<div></div>",r.style.cssText=`
                width: 100%;
                margin: 6px;
            `,n.parentNode.insertBefore(r,n)),r.style.visibility="visible";try{const o=await ke.fetchLeaderboard(s),l=o?.data||o?.rows;if(l&&l.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(H=>H.guid===s),u=c?.class||"DEFAULT_FORMAT",d=window.GameMode?.get?.(u),p=d?.rankLeaderboard?d.rankLeaderboard(l.map(H=>{const Y=typeof H.combined_betslips=="string"?(()=>{try{return JSON.parse(H.combined_betslips)}catch{return[]}})():H.combined_betslips||[];return{...H,bets:Y,timestamp:H.created_at||H.updated_at||0}}),c):l,f=parseFloat(c?.tournament_dollars||0),g=H=>{if(u!=="DEFAULT_FORMAT"||f<=0)return!0;let Y=0;return(H.bets||[]).forEach(J=>{(J.bet||[]).forEach(W=>{Object.keys(W).forEach(ie=>{ie!=="short_title"&&(Y+=parseFloat(W[ie]?.stake||0))})})}),Y>=f-.01},v=(()=>{if(u!=="DEFAULT_FORMAT")return"";const Y=(c?.tags||[]).find(j=>j.badge_gold!==void 0||j.badge_silver!==void 0||j.badge_bronze!==void 0);if(!Y)return"";const J=Y.badge_gold||0,W=Y.badge_silver||0,ie=Y.badge_bronze||0;if(J===0&&W===0&&ie===0)return"";const V=p.some(j=>(j.bets||[]).some(K=>(K.bet||[]).some(se=>Object.keys(se).some(Z=>Z!=="short_title"&&se[Z]?.reconciled===!0))))?p.filter(g):[],ee=j=>{if(!j)return'<span class="podium-slot__empty">Open</span>';const K=j.user_guid===a;return`<span class="podium-slot__name${K?" podium-slot__name--you":""}">${j.username||"Unknown"}${K?' <span class="podium-slot__you">YOU</span>':""}</span>`},G=Array.from({length:J},(j,K)=>ee(V[K])).join(""),R=Array.from({length:W},(j,K)=>ee(V[J+K])).join(""),N=Array.from({length:ie},(j,K)=>ee(V[J+W+K])).join(""),Q=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
                        <div class="leaderboard-podium">
                            <div class="leaderboard-podium__title">Trophy Preview</div>
                            <div class="leaderboard-podium__pack">
                                ${W>0?`<div class="podium-slot podium-slot--silver">
                                    <div class="podium-slot__trophy podium-slot__trophy--silver"></div>
                                    <span class="podium-slot__count">&times;${W}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--silver">
                                        <div class="podium-slot__names">${R}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${J>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${J}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${G}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${ie>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${ie}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${N}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${Q?`<div class="leaderboard-podium__label">${Q}</div>`:""}
                        </div>
                    `})(),y=`
                    <div class="leaderboard-tabs-wrap">
                        <div class="leaderboard-tabs">
                            <button class="leaderboard-tab leaderboard-tab--active" data-lb-tab="rules">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                                Leaderboard Rules
                            </button>
                            <button class="leaderboard-tab" data-lb-tab="tips">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/></svg>
                                Tips
                            </button>
                        </div>
                        <div class="leaderboard-privacy-banner" data-lb-panel="rules">${`
                    ${u==="DEFAULT_FORMAT"?`
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/></svg>
                        <span><strong>Rank by your TD$ balance.</strong> Your TD$ only moves when a bet settles: wins add the payout, losses subtract the stake. Pending bets don't count until they settle. Higher TD$ wins; ties break on Max Win, then earliest bet placed.</span>
                    </div>
                `:""}
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        <span><strong>Pending bets are hidden</strong> from other players until settled. Your own pending bets are always visible to you.</span>
                    </div>
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                        <span><strong>Spend your entire starting TD$ balance</strong> to qualify for a finishing position.</span>
                    </div>
                `}</div>
                        <div class="leaderboard-privacy-banner" data-lb-panel="tips" style="display: none;">
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                        <span><strong>Reinvest your winnings.</strong> When bets settle, your winnings bump your balance. Redeploy that TD$ into new bets to compound your position.</span>
                    </div>
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg>
                        <span><strong>Diversify across matches.</strong> Stacking TD$ on one game maximizes upside but also variance. Spreading across games smooths volatility and keeps you in the hunt.</span>
                    </div>
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/></svg>
                        <span><strong>Chase upside on longshots.</strong> Positive odds bets pay more than they risk. A well-placed +200 on the right underdog can leap you up the leaderboard.</span>
                    </div>
                </div>
                    </div>
                `,w=(H,Y,J=!1)=>{let W="";if(c?.tags&&Array.isArray(c.tags)){const R=c.tags.find(N=>!!(typeof N=="object"&&N!==null&&(N.entity_guid===H.user_guid&&N.badge&&N.badge.startsWith("--badge__ribbon--")||N[H.user_guid]&&N[H.user_guid].startsWith("--badge__ribbon--"))));if(R){const N=R.badge||R[H.user_guid];N==="--badge__ribbon--gold"?W="badge-trophy--gold":N==="--badge__ribbon--silver"?W="badge-trophy--silver":N==="--badge__ribbon--bronze"&&(W="badge-trophy--bronze")}}const ie=H.combined_betslips?typeof H.combined_betslips=="string"?H.combined_betslips:JSON.stringify(H.combined_betslips):"[]";let X="[]";if(H.combined_betslips&&c?.matches_expanded){const R=typeof H.combined_betslips=="string"?JSON.parse(H.combined_betslips):H.combined_betslips,N=[...new Set(R.map(j=>j.coreMatches__guid||j.match_guid||j.odds_id).filter(Boolean))],Q=c.matches_expanded.filter(j=>{const K=j.guid||j.id||j.odds_id;return N.includes(K)});X=JSON.stringify(Q)}const V=parseFloat(H.calculated_tournament_dollars||0),ee=parseInt(H.total_betslips||0),G=V===0&&ee===0?c?.tournament_dollars||0:H.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${Y}"
                            data-username="${H.username||"Unknown"}"
                            data-user-guid="${H.user_guid||""}"
                            data-tournament-dollars="${G}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${H.total_betslips||0}"
                            data-total-payout="${H.total_payout||0}"
                            data-combined-betslips="${ie.replace(/"/g,"&quot;")}"
                            data-user-matches="${X.replace(/"/g,"&quot;")}"
                            data-badge-class="${W}"
                            data-is-current-user="${H.user_guid===a}"
                            data-unqualified="${J}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `},x=p.filter(g),E=p.filter(H=>!g(H)),L=(u==="DEFAULT_FORMAT"&&x.length>0?`
                    <div class="leaderboard-divider leaderboard-divider--qualified">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                            <span class="leaderboard-divider__title">Qualified</span>
                            <span class="leaderboard-divider__subtitle">Ranked for tournament prizes</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                `:"")+x.map((H,Y)=>w(H,Y+1,!1)).join(""),C=E.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${E.map(H=>w(H,"—",!0)).join("")}
                `:"";n.innerHTML=v+y+L+C,requestAnimationFrame(()=>{n.querySelectorAll("bma-leaderboard-card").forEach((H,Y)=>{H.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",H.style.animationDelay=`${Math.min(Y*60,400)}ms`})}),n.querySelectorAll(".leaderboard-tab").forEach(H=>{H.addEventListener("click",()=>{const Y=H.dataset.lbTab;n.querySelectorAll(".leaderboard-tab").forEach(J=>J.classList.remove("leaderboard-tab--active")),H.classList.add("leaderboard-tab--active"),n.querySelectorAll("[data-lb-panel]").forEach(J=>{J.style.display=J.dataset.lbPanel===Y?"":"none"})})});const k=x.findIndex(H=>H.user_guid===a),S=c?.entities?.guids?.length||p.length,$=k>=0?k+1:"—",z=document.getElementById("dashboard-rank");if(z){const H=$==="—"?"—":`${$}/${S}`;z.innerHTML=`<span class="tourn-dashboard__rank-text">${H}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else n.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),n.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=Te(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(r=>r.guid===s);n&&(console.log("[appEvents] Hydrating play popup for tournament:",s),this.populateInfoPage(),this.renderMatchCards(n),this.updateTournamentDashboard(n),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:s,subStatus:a,sort:n,result:r}=e,o=(c,u,d,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${u}">${d}</button>`;let l="";s==="lobby"?l+=`
                <div class="filter-section">
                    <div class="filter-section__title">Status</div>
                    <div class="filter-chips">
                        ${o("subStatus","all","All",a==="all")}
                        ${o("subStatus","open","Open",a==="open")}
                        ${o("subStatus","locked","Locked",a==="locked")}
                        ${o("subStatus","completed","Recently Completed",a==="completed")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${o("sort","default","Default",n==="default")}
                        ${o("sort","starting_soon","Starting Soon",n==="starting_soon")}
                        ${o("sort","most_entrants","Most Entrants",n==="most_entrants")}
                        ${o("sort","fewest_spots","Fewest Spots Left",n==="fewest_spots")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Entry Fee</div>
                    <div class="filter-chips">
                        ${o("fee","free","Free",!0,!0)}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Game Mode</div>
                    <div class="filter-chips">
                        ${o("mode","default","Default",!0,!0)}
                    </div>
                </div>`:s==="my"?l+=`
                <div class="filter-section">
                    <div class="filter-section__title">Status</div>
                    <div class="filter-chips">
                        ${o("subStatus","all","All",a==="all")}
                        ${o("subStatus","active","Active",a==="active")}
                        ${o("subStatus","upcoming","Upcoming",a==="upcoming")}
                        ${o("subStatus","completed","Completed",a==="completed")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Result</div>
                    <div class="filter-chips">
                        ${o("result","all","All",r==="all")}
                        ${o("result","trophy","Won Trophy",r==="trophy")}
                        ${o("result","no_trophy","No Trophy",r==="no_trophy")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${o("sort","default","Default",n==="default")}
                        ${o("sort","recently_active","Recently Active",n==="recently_active")}
                        ${o("sort","starting_soon","Starting Soon",n==="starting_soon")}
                    </div>
                </div>`:s==="completed"&&(l+=`
                <div class="filter-section">
                    <div class="filter-section__title">Result</div>
                    <div class="filter-chips">
                        ${o("result","all","All",r==="all")}
                        ${o("result","trophy","Won Trophy",r==="trophy")}
                        ${o("result","no_trophy","No Trophy",r==="no_trophy")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${o("sort","default","Default",n==="default")}
                        ${o("sort","newest","Newest First",n==="newest")}
                    </div>
                </div>`);const i={lobby:{subStatus:"all",sort:"default",result:"all"},my:{subStatus:"all",sort:"default",result:"all"},completed:{subStatus:"all",sort:"default",result:"all"}};neodigmSodaPop.setOnAfterOpen(()=>{const c=document.getElementById("filter-popup__content--id");if(!c)return;c.innerHTML=`
                ${l}
                <div class="filter-actions">
                    <button class="filter-btn filter-btn--reset" id="filter-reset-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
                        Reset
                    </button>
                    <button class="filter-btn filter-btn--apply" id="filter-apply-btn">Apply</button>
                </div>
            `;let u={subStatus:a,sort:n,result:r};c.addEventListener("click",d=>{const p=d.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,g=p.dataset.filterVal;u[f]=g,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(b=>b.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const d=i[s]||i.lobby;u={...d},Object.keys(d).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${d[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(u)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){ce.subscribe("APP",(C,k)=>{console.warn("~~ sub all APP | "+C+"|"+k)}),ce.subscribe("WC",(C,k)=>{console.warn("~~ sub all WC  | "+C+"|"+k)}),ce.subscribe("ROUTE",(C,k)=>{console.warn("~~ sub all ROUTE  | "+C+"|"+k)});let t="lobby",s="all",a="all",n="all",r="active",o="active",l="default",i="all",c="all",u=localStorage.getItem("bma_view_mode")||"cards";const d=()=>{s="all";const C=document.querySelector("bma-app-head-sports");C&&C.setAttribute("data-selected-chip","all")},p=()=>{const C=document.getElementById("filter-bar__count--id");if(!C)return;let k=0;a!=="all"&&k++,l!=="default"&&k++,i!=="all"&&k++,C.textContent=k,C.style.display=k>0?"":"none"},f=()=>{document.querySelectorAll(".home-tab").forEach($=>$.classList.remove("home-tab--active"));let k=null;if(t==="lobby"?k=o==="completed"?'[data-home-tab="lobby-completed"]':'[data-home-tab="lobby-active"]':t==="private"?k=n==="invites"?'[data-home-tab="private-invites"]':'[data-home-tab="private-all"]':t==="my"&&(k=r==="completed"?'[data-home-tab="my-completed"]':'[data-home-tab="my-active"]'),!k)return;const S=document.querySelector(k);S&&S.classList.add("home-tab--active")},g=()=>{a="all",l="default",i="all",c="all"};document.addEventListener("click",C=>{const k=C.target.closest(".category-filter-toggle");if(k){const z=k.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(z){const H=z.style.display!=="none";z.style.display=H?"none":"",k.classList.toggle("category-filter-toggle--open",!H),window._bmaFilterRowOpen=!H}return}const S=C.target.closest("[data-view-mode]");if(S){const $=S.dataset.viewMode;if($===u)return;u=$,localStorage.setItem("bma_view_mode",$),document.querySelectorAll("[data-view-mode]").forEach(z=>z.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${$}"]`).forEach(z=>z.classList.add("view-toggle__btn--active")),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"}))}}),document.addEventListener("click",C=>{const k=C.target.closest("[data-home-tab]");if(!k)return;const S=k.dataset.homeTab;let $=!1;if(S==="lobby-active"||S==="lobby-completed"){const z=S==="lobby-completed"?"completed":"active";if(t==="lobby"&&z===o)return;t="lobby",o=z,$=!0}else if(S==="my-active"||S==="my-completed"){const z=S==="my-completed"?"completed":"active";if(t==="my"&&z===r)return;t="my",r=z,$=!0}else if(S==="private-all"||S==="private-invites"){const z=S==="private-invites"?"invites":"all";if(t==="private"&&z===n)return;t="private",n=z,document.body.dataset.privateSub=z,$=!0}$&&(d(),g(),p(),document.querySelectorAll(".home-tab").forEach(z=>z.classList.remove("home-tab--active")),k.classList.add("home-tab--active"),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"})))}),document.addEventListener("change",C=>{const k=C.target.closest(".category-dropdown");if(!k)return;const S=k.dataset.filterType,$=k.value;S==="subStatus"?a=$:S==="sort"?l=$:S==="result"?i=$:S==="odds"&&(c=$),p(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),ce.subscribe(e.hierTopics.COREBETSLIP,(C,k)=>{JSON.parse(k);let S=16;switch(C){case e.hierTopics.COREBETSLIP__BET:S=5,na.shootConfetti(),console.log("~~~  |  "+C+" | ",k);const $=document.querySelector("[data-bets-valid]");$&&($.dataset.betsValid="false");const z=document.querySelector("neodigm-sodapop");z&&z.setAttribute("data-wait","true");const H=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(H.length===0){console.warn("[app_events] No bets to submit"),z&&z.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const Y=document.querySelector(".play-cntr"),J=Y?.dataset?.currentTournGuid,W=e.appSession?.session_user?.guid;if(!J||!W){console.error("[app_events] Missing tournament or user GUID"),z&&z.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const ie=Array.from(H).map(K=>{const se=K.getAttribute("data-content-team-points"),Z=K.getAttribute("data-content-odds"),F=K.getAttribute("data-stake")||"0",T=K.getAttribute("data-content-type"),O=K.getAttribute("data-payout")||"0",P=K.getAttribute("data-match-guid")||"",M={};return M[se]={type:T,stake:parseFloat(F),odds:parseFloat(Z),payout:parseFloat(O),reconciled:!1},{acctEntity__guid:W,coreTournaments__guid:J,coreMatches__guid:P,bet:[M],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",ie);const X=Y?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const K=window.GameMode.get(X),Z=[...e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(P=>P.coreTournaments__guid===J):[],...ie],T=(e.coreTourn.length>0?e.coreTourn[e.coreTourn.length-1]:null)?.data.find(P=>P.guid===J),O=K.validateBetSlip(Z,T,0);if(!O.valid){console.log("[app_events] Game mode validation failed:",O.errors),typeof neodigmToast<"u"&&O.errors.forEach(M=>neodigmToast.q(M,"warning",4e3)),z&&z.setAttribute("data-wait","false");const P=document.querySelector("[data-publish-betslip]");P&&delete P.dataset.processing;break}}ke.postBetSlips(ie).then(K=>{console.log("[app_events] Bet slips posted successfully:",K);const se=ie.reduce((Z,F)=>{const T=F.bet[0],O=Object.keys(T)[0];return Z+(T[O]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${se.toFixed(2)}`,"success"),ke.fetchBetSlips(W,J).then(Z=>{if(Z?.rows){const F={timestamp:Date.now(),source:"API",data:Z.rows};e.pushcoreBetSlip(F),console.log("[app_events] Refreshed bet slips in store:",Z.rows.length,"items")}Pe.refreshPlayPopupUI(J,Z),z&&z.setAttribute("data-wait","false")}).catch(Z=>{console.error("[app_events] Error fetching fresh bet slips:",Z);const F=document.querySelector("[data-publish-betslip]");F&&delete F.dataset.processing,$&&($.dataset.betsValid="true"),z&&z.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(K=>{console.error("[app_events] Error posting bet slips:",K);const se=document.querySelector("[data-publish-betslip]");se&&delete se.dataset.processing,$&&($.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),z&&z.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:S=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&k){k=JSON.parse(k);const se=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&se){const Z=e.coreBetSlip[0].data.filter(U=>U.coreTournaments__guid===se),F=[],T=[],O=[];Z.forEach(U=>{const ae=U.bet||[];if(ae.length===0)return;const ne=ae[0];Object.keys(ne).filter(te=>te!=="short_title").forEach(te=>{const oe=ne[te],de=oe?.reconciled!==!1,me=parseFloat(oe?.payout||0);de?me===0?T.push(U):O.push(U):F.push(U)})});const P=xt.search(F,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,M=xt.search(T,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,q=P+M,D=xt.search(O,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,B=k.tournament_dollars-q+D;Pe.updateTDBalance("#summary-balance",B)}else Pe.updateTDBalance("#summary-balance",k.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let ee=0,G=0,R=0;if(e.coreBetSlip.length>0){const se=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(se){const F=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(D=>D.coreTournaments__guid===se),T=[],O=[],P=[];F.forEach(D=>{const B=D.bet||[];if(B.length===0)return;const U=B[0];Object.keys(U).filter(ne=>ne!=="short_title").forEach(ne=>{const pe=U[ne],te=pe?.reconciled!==!1,oe=parseFloat(pe?.payout||0);te?oe===0?O.push(D):P.push(D):T.push(D)})}),ee=xt.search(T,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,G=xt.search(P,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const M=xt.search(O,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,q=xt.search(P,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;R=M+q}}let N=!0,Q=0;const j=document.querySelector("[data-bets-valid]");if(j&&k){k=JSON.parse(k),k.pending_stake_sum=0,k.pending_payout_sum=0,k.bets.length||(N=!1),k.bets.forEach(P=>{P.stake=Number(P.stake),P.stake>0?k.pending_stake_sum+=P.stake:N=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(P=>{const M=parseFloat(P.getAttribute("data-payout")||"0");k.pending_payout_sum+=M});const se=ee+k.pending_stake_sum,Z=G+k.pending_payout_sum;Q=parseFloat((k.tournament_dollars-se-R+G).toFixed(2));const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let O=null;T&&e.coreTourn.length>0&&(O=e.coreTourn[e.coreTourn.length-1]?.data?.find(M=>M.guid===T)),Pe.updateSummaryAndDashboard(Q,se,Z,O,k.pending_payout_sum||0),(k.tournament_dollars<0||Q<0)&&(N=!1),j.dataset.betsValid=N}break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S,"QUITE").vibrate()});const b=()=>{const k=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;k&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(H=>H.guid===k)?.tournament_dollars||0),ce.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:S,timestamp:Date.now()}))},v=()=>{const k=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;k&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(V=>V.guid===k)?.tournament_dollars||0);let $=0,z=0,H=0,Y=0;if(e.coreBetSlip.length>0&&k){const X=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(j=>j.coreTournaments__guid===k);console.log("[app_events] Filtered bets for tournament:",k,"found:",X.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",X[0]);const V=[],ee=[],G=[];X.forEach(j=>{const K=j.bet||[];if(K.length===0)return;const se=K[0];Object.keys(se).filter(F=>F!=="short_title").forEach(F=>{const T=se[F],O=T?.reconciled!==!1,P=parseFloat(T?.payout||0);O?P===0?ee.push(j):G.push(j):V.push(j)})}),console.log("[app_events] Bet categories:",{unreconciled:V.length,reconciledZero:ee.length,reconciledNonZero:G.length});const R=xt.search(V,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,N=xt.search(ee,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Q=xt.search(G,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;H=N+Q,z=xt.search(G,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Y=xt.search(V,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,$=R,console.log("[app_events] Balance calculation:",{unreconciledStakes:R,lostBetStakes:N,wonBetStakes:Q,allReconciledStakes:H,displayedStake:$,reconciledPayouts:z,tournamentDollars:S,calculatedBalance:S-$-H+z})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const J=S-$-H+z;let W=null;k&&e.coreTourn.length>0&&(W=e.coreTourn[e.coreTourn.length-1].data.find(X=>X.guid===k)),Pe.updateSummaryAndDashboard(J,$,z,W,Y)};ce.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(C,k)=>{const $=JSON.parse(k)?.rows||[],z=document.querySelector(".bet-grid__slip-MYBETS");if(!z)return;if(z.innerHTML="",$.length===0){z.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const W=document.querySelector(".bet-grid__slip");W&&W.setAttribute("data-active-bet-tab","BETSLIP"),b();return}$.forEach(W=>{if((W.bet||[]).length===0)return;const X=document.createElement("bma-bet-existing");X.setAttribute("data-corebetslip",JSON.stringify(W)),z.appendChild(X)});const H=document.querySelector(".bet-grid__slip");H&&H.setAttribute("data-active-bet-tab","MYBETS"),Te().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Pe.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",$.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),v()},200)}),document.addEventListener("click",C=>{const k=C.target;if(k&&k.classList.contains("bet-slip-tab")){const S=k.dataset.betTab,$=document.querySelector(".bet-grid__slip");S&&$&&($.setAttribute("data-active-bet-tab",S),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",S))}if(k&&k.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(k.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}k.dataset.processing="true";const $=k.dataset.publishBetslip;ce.publish($,JSON.stringify({timestamp:Date.now()}))}});const h=()=>{const k=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;k&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(J=>J.guid===k)?.tournament_dollars||0);const $=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),z=Array.from($).map(H=>({teamPoints:H.getAttribute("data-content-team-points"),odds:H.getAttribute("data-content-odds"),stake:H.getAttribute("data-stake")||"0",type:H.getAttribute("data-content-type"),abbreviatedTitle:H.getAttribute("data-abbreviated-title"),scheduledAt:H.getAttribute("data-scheduled-at")}));ce.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:S,bets:z,timestamp:Date.now()}))},m=(C,k)=>{const S=JSON.parse(k),$=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!$){console.error("[app_events] Bet slip container not found");return}const z=$.querySelector(".bet-slip__empty");z&&z.remove();let H="";S.type==="total"?H=S.team==="over"?"Over":"Under":S.team==="home"?H=S.homeTeam:S.team==="away"&&(H=S.awayTeam);let Y=H;if(S.point)if(S.type==="spread"){const ee=parseFloat(S.point)>0?`+${S.point}`:S.point;Y=`${H} ${ee}`}else S.type==="total"&&(Y=`${H} ${S.point}`);const J=document.createElement("bma-bet-entry");J.setAttribute("data-content-team-points",Y),J.setAttribute("data-content-odds",S.price||"0"),J.setAttribute("data-content-stake-text","0"),J.setAttribute("data-content-type",S.type||""),J.setAttribute("data-abbreviated-title",S.abbreviatedTitle||`${S.homeTeam} vs ${S.awayTeam}`),J.setAttribute("data-scheduled-at",S.scheduledAt||""),J.setAttribute("data-match-guid",S.matchGuid||""),J.setAttribute("data-home-team",S.homeTeam||""),J.setAttribute("data-away-team",S.awayTeam||""),J.setAttribute("data-bet-team",H||"");const ie=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(ie&&e.coreTourn.length>0){const G=e.coreTourn[e.coreTourn.length-1].data.find(R=>R.guid===ie);if(G?.sports_allowed&&G.sports_allowed.length>0){const R=G.sports_allowed[0];J.setAttribute("data-sport-key",R.key||"");const N=Ye.find(Q=>Q.key===R.key);J.setAttribute("data-sport-group",N?.group||"")}}$.appendChild(J),console.log("[app_events] Bet entry appended to container:",J,"Container children:",$.children.length),setTimeout(()=>{y(J)},0);const X=document.querySelector(".bet-grid__slip");X&&(X.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const V=$.querySelectorAll("bma-bet-entry").length;V>=3?requestAnimationFrame(()=>{setTimeout(()=>{const ee=document.querySelector(".bet-grid__slip");ee&&(console.log("[app_events] Scrolling parent to bottom - bet count:",V,"scrollHeight:",ee.scrollHeight,"current scrollTop:",ee.scrollTop),ee.scrollTo({top:ee.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",ee.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",V,"bet cards (need 3+)"),setTimeout(()=>{h()},200),console.log("[app_events] Created bet entry:",{teamPoints:Y,odds:S.price,type:S.type})};ce.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(C,k)=>{m(C,k),_()}),ce.subscribe(e.hierTopics.COREBETSLIP__MONEY,(C,k)=>{m(C,k),_()}),ce.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(C,k)=>{m(C,k),_()});function _(){const C=window.matchMedia("(orientation: portrait)").matches,k=window.matchMedia("(max-width: 768px)").matches;if(C||k){const S=document.querySelector(".bet-grid__select"),$=document.querySelector(".bet-grid__slip"),z=document.querySelector(".bet-grid__toggle-text");S&&$&&z&&(S.classList.add("collapsed"),$.classList.remove("collapsed"),z.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const y=C=>{const k={sport:{key:C.getAttribute("data-sport-key")||"",group:C.getAttribute("data-sport-group")||""},Match:{scheduled_at:C.getAttribute("data-scheduled-at")||"",home_team_id:C.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:C.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:C.getAttribute("data-bet-team")||"",over:"",under:""},type:C.getAttribute("data-content-type")||"",odds:C.getAttribute("data-content-odds")||"0",stake:C.getAttribute("data-stake")||"0"}},S=Ru.calcPayout(k);C.setAttribute("data-payout",S.toString()),console.log("[app_events] Payout calculated:",{stake:k.Bet.stake,odds:k.Bet.odds,payout:S})};new MutationObserver(C=>{C.forEach(k=>{k.type==="attributes"&&k.attributeName==="data-stake"&&k.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",k.target.getAttribute("data-stake")),y(k.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{h()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",C=>{console.log("[app_events] Removing bet entry:",C.detail);const k=C.target,S=C.detail;k.remove(),setTimeout(()=>{const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Y){const J=Te(),W=J.coreTourn[J.coreTourn.length-1];if(W&&W.data){const ie=W.data.find(X=>X.guid===Y);ie&&Pe.updateTournamentDashboard(ie)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(H=>{(H.shadowRoot?.querySelectorAll(".btn")||[]).forEach(J=>{const W=J.dataset.betType,ie=J.dataset.price,X=W===S.type,V=ie===S.odds;X&&V&&J.classList.contains("btn--active")&&(J.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:W,btnPrice:ie}))})});const z=document.querySelector(".bet-grid__slip-BETSLIP-content");z&&z.children.length===0&&(z.innerHTML=zn),setTimeout(()=>{h()},100)}),ce.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(C,k)=>{const S=JSON.parse(k);S&&S.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${S.guid}"]`)}),ce.subscribe(e.hierTopics.WC__APP__FOOT,(C,k)=>{switch(JSON.parse(k),C){case"WC.APP.FOOT.LOBBY":case"WC.APP.FOOT.ALL_SPORTS":ce.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"LOBBY",timestamp:Date.now()}));break;case"WC.APP.FOOT.TOURNEYS":ce.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_TOURNEYS,JSON.stringify({tab:"TOURNEYS",timestamp:Date.now()}));break;case"WC.APP.FOOT.PRIVATE":case"WC.APP.FOOT.MY_TOURNEYS":ce.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_PRIVATE,JSON.stringify({tab:"PRIVATE",timestamp:Date.now()}));break;case"WC.APP.FOOT.LEADERBOARD":ce.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case"WC.APP.FOOT.MY_PROFILE":neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break}}),ce.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(C,k)=>{const S=JSON.parse(k);let $=16;C=="WC.APP.HEAD_SPORTS.PREV"||C=="WC.APP.HEAD_SPORTS.NEXT"||C=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?$=3:(s=S.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${S.group})`),p(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),$&&neodigmWired4Sound&&neodigmWired4Sound.sound($).vibrate()}),ce.subscribe(e.hierTopics.WC__APP__HEAD_MID,(C,k)=>{JSON.parse(k);let S=16;const $=(z,H="active")=>{t=z,n="all",r=H,o="active",document.body.dataset.tournFilter=z,document.body.dataset.privateSub=n,d(),g(),p(),f(),(window.location.hash||"").startsWith("#/home_route")||(window.location.hash||"")==="#/"||!window.location.hash||(typeof neodigmSodaPop<"u"&&neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/home_route"),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}))};switch(C){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":$("lobby");break;case"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS":$("my","active");break;case"WC.APP.HEAD_MID.HEAD_MID_PRIVATE":case"WC.APP.HEAD_MID.HEAD_MID_MY":$("private");break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":$("my","completed");break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":S=16,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/top_players_route";break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":ce.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()}),ce.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(C,k)=>{JSON.parse(k);let S=16;switch(C){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const $=window.deferredPWAPrompt;if(!$){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{$.prompt();const{outcome:H}=await $.userChoice;H==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),S=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(H){console.error("PWA install error:",H),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const Y=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:Y});const J=document.getElementById("app");J&&J.setAttribute("data-sync-theme",Y),document.body.setAttribute("data-sync-theme",Y)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":Ea.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":Ea.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()});const x=C=>{document.querySelectorAll(".play-section").forEach(S=>{S.style.display="none",S.classList.remove("play-section--active")});const k=document.getElementById(`play-section-${C}`);k&&(k.style.display="",k.classList.add("play-section--active"))},E=(C,k)=>{const S=C.split(".").pop(),$=document.querySelectorAll(".play-cntr .dash-nav__btn"),H=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");x(S),$.forEach(Y=>{const J=Y.dataset.publishRouteHome?.split(".").pop()||"";Y.classList.toggle("dash-nav__btn--active",J===S)}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),H&&(H.style.overflow=S==="PLAY"?"hidden":"auto")};ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",E);let I=null;ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(C,k)=>{if(E(C),I){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}I=setTimeout(()=>{I=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),Pe.populateLeaderboard()}),ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(C,k)=>{JSON.parse(k);const S=document.getElementById("btn-join__play--id");if(!S){console.warn("[app_events] PLAY button not found");return}const $=S.dataset.requiresJoin==="true",z=S.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",z,"requiresJoin:",$),$&&z==="join"){const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,J=Te();if(!Y){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",Y),ce.publish(J.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:Y,timestamp:Date.now()})),S.textContent="Play",S.dataset.requiresJoin="false",setTimeout(()=>{E(C),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else E(C),console.log("[app_events] Advancing carousel to PLAY page")}),ce.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(C,k)=>{JSON.parse(k);let S=10;switch(C){case"WC.APP.HEAD_TOP.USER_PROFILE":S=0,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break;case"WC.APP.HEAD_TOP.LOGO":const $=e.appSession.session_app.version,z=new Date().getFullYear();$&&neodigmToast&&neodigmToast.q(`${$} 4/22/2026, 8:41:26 PM|© ${z} Bet Max Action`,"night");break;case"WC.APP.HEAD_TOP.CREATE_CONTEST":ce.publish(e.hierTopics.WC__APP__FOOT__MY_TOURNEYS,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(C,k)=>{const S=JSON.parse(k);let $=0;switch(S?.action){case"JOIN":$=512;break;case"PLAY":$=8;break;case"INFO":$=8;break}if($){const z=S?.tournamentGuid,H=S?.action;console.log("[app_events] Navigating to play_route:",z,H),setTimeout(()=>{Ea.push({name:"play_route",query:{guid:z,action:H}})},$)}}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(C,k)=>{const S=JSON.parse(k);let $=16;switch(S?.action){case"FOCUS":$=3;break;case"SPORT_ICON":$=10;break;case"JOIN":$=5;break;case"PLAY":$=16;break}$&&neodigmWired4Sound&&neodigmWired4Sound.sound($).vibrate()}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(C,k)=>{const S=JSON.parse(k);let $=0,z="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),S?.tournamentStatus){case"UPCOMING":z="success";break;case"LOCKED":z="warning";break;case"COMPLETED":z="danger";break}switch(S?.action){case"SPORT_ICON":S?.sportTitle==S?.sportDescription?$=S?.sportTitle:$=S?.sportTitle+"|"+S?.sportDescription;break}$&&neodigmToast&&neodigmToast.q($,z)}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,async(C,k)=>{const S=JSON.parse(k);if(S?.action==="JOIN"){const z=Te().appSession?.session_user?.guid;if(!z){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const H=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);H&&(H.setAttribute("data-bma-tourn-wait","true"),na.shootConfetti());const Y={acctEntityGuid:z,tournamentGuid:S.tournamentGuid};try{const J={method:"POST",body:JSON.stringify(Y),headers:ke.genHeaders()};console.log("Posting to:",ke.API_baseURI+"/m5t/"+ke.API_ver+"/coreTournaments/join",Y);const ie=await(await fetch(ke.API_baseURI+"/m5t/"+ke.API_ver+"/coreTournaments/join",J)).json();if(console.log("Join response:",ie),ie.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const X=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);if(X){X.setAttribute("data-bma-tourn-wait","false");const V=X.getAttribute("data-bma-tourn-entities");if(V)try{const ee=JSON.parse(V);ee.guids.includes(z)||(ee.guids.push(z),X.setAttribute("data-bma-tourn-entities",JSON.stringify(ee)))}catch(ee){console.error("Failed to parse entities:",ee)}}},3e3);else{const X=ie?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(X,"danger");const V=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);V&&V.setAttribute("data-bma-tourn-wait","false")}}catch(J){console.error("Join tournament error:",J),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),ce.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(C,k)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const S=Te();if(t="lobby",s="all",a="all",l="default",i="all",c="all",S.coreTourn.length>0){console.log("[app_events] coreTourn already populated, hydrating from existing data"),ce.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"REMOUNT"}));return}try{const $=await ke.fetchTournaments();console.log("[app_events] Tournaments fetched:",$),$?.rows&&Array.isArray($.rows)?(S.pushCoreTourn({timestamp:Date.now(),source:"API",data:$.rows}),console.log("[app_events] Pushed to coreTourn, length:",S.coreTourn.length),ce.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",$)}catch($){console.error("[app_events] Error fetching tournaments:",$),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),ce.subscribe(e.hierTopics.PROMOTION__LOAD,async(C,k)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const S=await ke.fetchPromotions();if(console.log("[app_events] Promotions fetched:",S),S?.ok&&S?.data&&Array.isArray(S.data)){const $=S.data.filter(H=>H.class==="banner"&&H.status==="LIVE");console.log("[app_events] Banner promotions:",$);const z=document.querySelector(".featured-swiper .swiper-wrapper");if(!z){console.warn("[app_events] Swiper wrapper not found");return}if(z.innerHTML="",$.forEach((H,Y)=>{const J=document.createElement("div");J.className="swiper-slide";const W=document.createElement("div");W.className=`featured-card featured-card--${Y+1}`;const ie=H.hero_img?encodeURI(H.hero_img):"";W.style.backgroundImage=`url("${ie}")`,W.setAttribute("data-promotion-hero-img",H.hero_img||""),W.setAttribute("data-promotion-caption",H.caption||""),W.setAttribute("data-promotion-tagline",H.tagline||""),W.setAttribute("data-promotion-toast",H.toast||""),W.setAttribute("data-promotion-topic",H.topic?.topic||""),W.setAttribute("data-promotion-topic-token",H.topic?.token||""),W.setAttribute("data-promotion-marquee",H.maquee||""),J.appendChild(W),z.appendChild(J)}),console.log("[app_events] Created",$.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),$.length===1){const H=document.querySelector(".featured-swiper .swiper-wrapper");H&&(H.style.justifyContent="center")}}}catch(S){console.error("[app_events] Error fetching promotions:",S)}}),ce.subscribe(e.hierTopics.PROMOTION__CLICK,(C,k)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const S=JSON.parse(k);console.log("[app_events] Promotion clicked:",S),S.toast&&typeof neodigmToast<"u"&&neodigmToast.q(S.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const $=document.querySelector(".l-promotion #promoHero");$&&S.heroImg&&($.src=S.heroImg);const z=document.querySelector(".l-promotion #promCaption");z&&S.caption&&(z.textContent=S.caption);const H=document.querySelector(".l-promotion #promoTagline");return H&&S.tagline&&(/<[^>]+>/.test(S.tagline)?H.innerHTML=S.tagline:H.textContent=S.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(S){console.error("[app_events] Error handling promotion click:",S)}}),ce.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(C,k)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const S=Te();if(S.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const $=S.coreTourn[S.coreTourn.length-1],z=S.coreTourn.length>1?S.coreTourn[S.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",$);const H=[];if(z){const X=$.data,V=z.data;X.forEach(ee=>{const G=V.find(R=>R.guid===ee.guid);G&&G.status!==ee.status&&(console.log(`[app_events] Status changed for tournament ${ee.guid}: ${G.status} -> ${ee.status}`),H.push(ee.guid))})}const Y=S.appSession?.session_user?.guid,J=[...$.data].sort((X,V)=>{const ee=X.status||X.class,G=V.status||V.class,R=X.entities?.guids||[],N=V.entities?.guids||[],Q=R.includes(Y),j=N.includes(Y),K=(D,B)=>{const U=new Date(D.status_time||0).getTime();return new Date(B.status_time||0).getTime()-U},se=ee==="LOCKED"&&Q,Z=G==="LOCKED"&&j;if(se&&!Z)return-1;if(!se&&Z)return 1;if(se&&Z)return K(X,V);const F=ee==="UPCOMING",T=G==="UPCOMING";if(F&&!T)return-1;if(!F&&T)return 1;if(F&&T)return K(X,V);const O=ee==="COMPLETED"&&Q,P=G==="COMPLETED"&&j;if(O&&!P)return-1;if(!O&&P)return 1;if(O&&P)return K(X,V);const M=ee==="COMPLETED"&&!Q,q=G==="COMPLETED"&&!j;return M&&!q?1:!M&&q?-1:K(X,V)}),W=Pe.categorizeTournaments(J,t,s,Y,{subStatus:a,sort:l,result:i,privateSubTab:n,mySubTab:r,lobbySubTab:o});if(console.log(`[app_events] Categorized into ${W.length} categories for filter: ${t}/${s} sub:${a} sort:${l} result:${i}`),document.body.dataset.tournFilter=t,window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const X=document.querySelector(".tournaments-grid");X&&(X.dataset.filterContext=t),window._homeRouteRenderCards(W,!0,u,{tab:t,subStatus:a,sort:l,result:i,odds:c});const V=J.filter(se=>{const Z=se.status||se.class,F=se.entities?.guids||[];return(Z==="LOCKED"||Z==="UPCOMING")&&F.includes(Y)}).length,ee=J.reduce((se,Z)=>{const F=Z.status||Z.class,T=Z.entities?.guids||[];return(F==="LOCKED"||F==="UPCOMING")&&T.includes(Y)?se+parseFloat(Z.tournament_dollars||0):se},0),G=document.querySelector("bma-app-foot");G&&G.setAttribute("data-active-count",String(V));const R=document.querySelector("bma-app-head-mid");R&&R.setAttribute("data-active-count",String(V));const N=document.querySelector("bma-app-head-top");N&&(N.setAttribute("data-active-count",String(V)),N.setAttribute("data-td-dollars",String(ee)));const Q=document.getElementById("home-tab-active-badge");Q&&(Q.textContent=V,Q.style.visibility=V>0?"visible":"hidden");const j=J.filter(se=>{if(se.is_private!==!0)return!1;const Z=se.entities?.guids||[];return se.creator_guid===Y||Z.includes(Y)}).length,K=document.getElementById("home-tab-private-badge");if(K&&(K.textContent=j),R&&R.setAttribute("data-private-count",String(j)),G&&G.setAttribute("data-private-count",String(j)),H.length>0){const se=$.data;H.forEach(Z=>{const F=se.find(T=>T.guid===Z);if(F){const T=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{ce.publish(S.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:Z,status:F.status,timestamp:Date.now()}))},T)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available");const ie=document.getElementById("bma-scores-banner--id");if(ie){const X=new Set,V=[];for(const ee of $.data){const G=Array.isArray(ee.matches_expanded)?ee.matches_expanded:[];for(const R of G){const N=R.guid||R.id||R.odds_id;!N||X.has(N)||(X.add(N),V.push(R))}}ie.setAttribute("data-matches",JSON.stringify(V))}Pe.prefetchGlobalLeaderboard()}),ce.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(C,k)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",k);const S=Te();try{const $=JSON.parse(k);console.log("[app_events] SSE tournament sync data:",$);const z=JSON.parse($.msg);if(console.log("[app_events] Parsed tournaments array:",z),!Array.isArray(z)){console.warn("[app_events] SSE msg is not an array:",z);return}S.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:z}),console.log("[app_events] Pushed SSE data to coreTourn, length:",S.coreTourn.length),ce.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),document.querySelector(".play-cntr")&&(console.log("[SSE] Play route is active, triggering real-time update"),Pe.hydratePlayPopup())}catch($){console.error("[app_events] Error processing SSE tournament sync:",$)}}),ce.subscribe(e.hierTopics.SSE__CORE__INVITE_SYNC,(C,k)=>{console.log("[app_events] SSE__CORE__INVITE_SYNC event received");const S=Te();try{const $=JSON.parse(k),z=JSON.parse($.msg);if(!Array.isArray(z)||z.length===0){console.warn("[app_events] INVITE_SYNC msg not an array:",z);return}const{invite:H,action:Y}=z[0]||{};if(!H?.guid||!Y){console.warn("[app_events] INVITE_SYNC missing invite or action:",z[0]);return}switch(Y){case"created":S.upsertInvite(H);break;case"revoked":case"accepted":case"declined":case"expired":S.removeInvite(H.guid);break;default:console.warn("[app_events] INVITE_SYNC unknown action:",Y);return}ce.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:Y,inviteGuid:H.guid,timestamp:Date.now()}))}catch($){console.error("[app_events] Error processing INVITE_SYNC:",$)}});const L=()=>{const C=document.getElementById("invites-list");if(!C)return;const k=(e.coreInvites||[]).filter(H=>(H.status||"").toUpperCase()==="PENDING");k.sort((H,Y)=>new Date(Y.invited_at||0)-new Date(H.invited_at||0)),C.innerHTML="",k.forEach(H=>{const Y=document.createElement("bma-invite-card"),J=H.tournament_preview||{},W=(J.sports_allowed||[])[0]||{},ie=Ye.find(X=>X.key===W.key);Y.setAttribute("data-invite-guid",H.guid||""),Y.setAttribute("data-tournament-caption",H.tournament_caption||J.caption||"Bet Max Pool"),Y.setAttribute("data-invited-by-name",H.invited_by?.display_name||H.invited_by?.userName||"A friend"),Y.setAttribute("data-expires-at",H.expires_at||""),W.key&&Y.setAttribute("data-sport-key",W.key),ie?.group&&Y.setAttribute("data-sport-group",ie.group),Y.setAttribute("data-entrants-count",String(J.entities?.count??J.entities?.guids?.length??0)),Y.setAttribute("data-entrants-max",String(J.entities?.max??0)),J.window_start_time&&Y.setAttribute("data-window-start",J.window_start_time),C.appendChild(Y)});const S=document.getElementById("home-tab-invites-badge");S&&(S.textContent=k.length,S.style.visibility=k.length>0?"visible":"hidden");const $=document.querySelector("bma-app-head-mid");$&&$.setAttribute("data-invites-count",String(k.length));const z=document.querySelector("bma-app-foot");z&&z.setAttribute("data-invites-count",String(k.length))};document.addEventListener("invite-accept",async C=>{const k=C.detail?.inviteGuid;if(!k)return;const S=await ke.acceptInvite(k);if(S.ok&&S.data?.tournament){e.pushCoreTourn({timestamp:Date.now(),source:"API",data:[S.data.tournament]}),e.removeInvite(k),ce.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"accepted",inviteGuid:k,timestamp:Date.now()})),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"INVITE_ACCEPT"})),typeof neodigmToast<"u"&&neodigmToast.q("Joined the pool. Good luck.","success");return}const $=S.data?.error||`http_${S.status}`,z=$==="pool_full"?"This pool just filled up. Ask the host to create another.":$==="expired"?"This invite has expired. Ask the host to send a new one.":$==="already_accepted"?"You already joined this pool.":$==="not_invitee"?"This invite isn't yours.":$==="invite_not_found"?"Invite not found. It may have been revoked.":"Couldn't accept right now. Try again in a moment.";typeof neodigmToast<"u"&&neodigmToast.q(z,"warning"),["pool_full","expired","already_accepted","invite_not_found"].includes($)&&(e.removeInvite(k),ce.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"cleanup",inviteGuid:k,timestamp:Date.now()})))}),document.addEventListener("invite-decline",async C=>{const k=C.detail?.inviteGuid;if(!k)return;e.removeInvite(k),ce.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"declined",inviteGuid:k,timestamp:Date.now()}));const S=await ke.declineInvite(k);S.ok||(console.warn("[app_events] decline failed:",S.status,S.data),typeof neodigmToast<"u"&&neodigmToast.q("Couldn't decline right now. Try again.","warning"))}),ce.subscribe(e.hierTopics.ROUTE__INVITES_HYDRATE,()=>{L()}),e.appSession?.session_user?.authenticated&&ke.fetchMyInvites().then(C=>{C.ok&&Array.isArray(C.data?.invites)?(e.setCoreInvites(C.data.invites),ce.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"bootstrap",count:C.data.invites.length,timestamp:Date.now()})),console.log(`[app_events] Invites bootstrap: ${C.data.invites.length} pending`)):console.warn("[app_events] Invites bootstrap failed:",C.status,C.data)}).catch(C=>{console.warn("[app_events] Invites bootstrap error:",C)}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const C=document.querySelector("#caption__my-profile");C&&(C.textContent="My Profile");const k=document.getElementById("profile-trophy-username");k&&(k.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const S=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",S),console.log("[app_events] coreTourn length:",e.coreTourn.length),!S||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const z=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",z.length);const H=ie=>{const X=document.getElementById("profile-stats-panel");X&&(X.innerHTML=Pe.buildStatsPanel(z,S,ie))};H(Pe._betStatsCache?.stats||null),Pe._ensureBetStatsCache(S).then(ie=>{ie&&H(ie)});let Y=0,J=0,W=0;z.forEach((ie,X)=>{if(!ie.tags||!Array.isArray(ie.tags)){console.log(`[app_events] Tournament ${X} has no tags or tags not an array`);return}ie.tags.forEach((V,ee)=>{if(typeof V=="object"&&V!==null){let G=null;V.entity_guid===S&&V.badge?G=V.badge:V[S]&&(G=V[S]),G==="--badge__ribbon--gold"?Y++:G==="--badge__ribbon--silver"?J++:G==="--badge__ribbon--bronze"&&W++}})}),setTimeout(()=>{let ie=document.querySelectorAll(".badge-counter");if(ie.length===0){const X=document.querySelector("neodigm-sodapop");X&&(ie=X.querySelectorAll(".badge-counter"))}ie.length>=3?(ie[0].textContent=J,ie[1].textContent=Y,ie[2].textContent=W,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const ie=document.querySelector("#profile-tournaments-list");if(!ie||!S||e.coreTourn.length===0)return;const ee=e.coreTourn[e.coreTourn.length-1].data.filter(Q=>{try{return(typeof Q.entities=="string"?JSON.parse(Q.entities):Q.entities)?.guids?.includes(S)}catch{return!1}}),G={LOCKED:0,UPCOMING:1,COMPLETED:2};ee.sort((Q,j)=>{const K=G[Q.status]??3,se=G[j.status]??3;return K!==se?K-se:new Date(j.status_time||0)-new Date(Q.status_time||0)});const R=Q=>{let j=ee;if(Q==="active"?j=ee.filter(K=>K.status==="LOCKED"||K.status==="UPCOMING"):Q==="completed"&&(j=ee.filter(K=>K.status==="COMPLETED")),j.length===0){ie.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}ie.innerHTML=j.map(K=>{const se=K.entities?JSON.stringify(K.entities).replace(/"/g,"&quot;"):"",Z=K.tags?JSON.stringify(K.tags).replace(/"/g,"&quot;"):"[]",F=K.sports_allowed?JSON.stringify(K.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${K.guid||""}"
                                        data-bma-tourn-caption="${K.caption||""}"
                                        data-bma-tourn-tagline="${K.tagline||""}"
                                        data-bma-tourn-status="${K.status||""}"
                                        data-bma-tourn-class="${K.status||""}"
                                        data-bma-tourn-sports_allowed="${F}"
                                        data-bma-tourn-entities="${se}"
                                        data-bma-tourn-entry_fee="${K.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${K.tournament_dollars||0}"
                                        data-bma-tourn-matches="${K.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${Z}"
                                        data-bma-tourn-window_start_time="${K.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${K.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{ie.querySelectorAll("bma-tournament-list-card").forEach((K,se)=>{K.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",K.style.animationDelay=`${Math.min(se*60,400)}ms`})})};R("all");const N=document.querySelector(".profile-tournaments__filters");N&&N.addEventListener("click",Q=>{const j=Q.target.closest(".profile-tourn-filter");j&&(N.querySelectorAll(".profile-tourn-filter").forEach(K=>K.classList.remove("profile-tourn-filter--active")),j.classList.add("profile-tourn-filter--active"),R(j.dataset.filter))})},600)},1e3)},"sodapop_my_profile"))},3e3),window._renderTopPlayers=async function(C="ALL"){const k=Te(),S=document.getElementById("global-leaderboard-container");if(S){S.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{let $;const z=Pe._globalLBCache[C];z?.data&&Date.now()-z.ts<300*1e3?(console.log(`[Global Leaderboard] Using prefetched cache [${C}]`),$=z.data):(console.log(`[Global Leaderboard] Cache miss [${C}], fetching fresh`),$=await ke.fetchAllTimeLeaderboard(C,100,"td"),Pe._globalLBCache[C]={data:$,ts:Date.now(),inflight:!1});const H=$?.data||[],Y=$?.last_updated||null,J=k.coreTourn.length>0?k.coreTourn[k.coreTourn.length-1].data:[];if(!H.length){S.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const W=S,ie=k.appSession?.session_user?.guid,X={};H.forEach(Z=>{const F=Z.user_guid;X[F]={username:Z.username||"Unknown",user_guid:F,totalTDWon:parseFloat(Z.total_payout||0),totalPayout:parseFloat(Z.total_payout||0),totalBets:parseInt(Z.total_betslips||0),tournamentsPlayed:parseInt(Z.tournaments_joined||0),tournamentsWon:parseInt(Z.tournaments_won||0),totalTD:parseFloat(Z.total_td_dollars||0),gold:0,silver:0,bronze:0,sports:new Set}}),J.forEach(Z=>{!Z.tags||!Array.isArray(Z.tags)||Z.tags.forEach(F=>{if(typeof F!="object"||!F)return;let T=null,O=null;if(F.entity_guid&&F.badge){if(F.entity_guid==="SYSTEM")return;T=F.entity_guid,O=F.badge}else{const M=Object.keys(F);for(const q of M){const D=F[q];if(typeof D=="string"&&D.startsWith("--badge__ribbon--")){T=q,O=D;break}}}if(!T||!O)return;X[T]||(X[T]={username:T.substring(0,8),user_guid:T,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,totalTD:0,gold:0,silver:0,bronze:0,sports:new Set});const P=X[T];O==="--badge__ribbon--gold"?P.gold++:O==="--badge__ribbon--silver"?P.silver++:O==="--badge__ribbon--bronze"&&P.bronze++})});const V=Object.values(X).filter(Z=>Z.username!=="Unknown");if(Y){const Z=Math.round((Date.now()-new Date(Y).getTime())/6e4),F=Z<1?"just now":Z===1?"1 minute ago":`${Z} minutes ago`;console.log(`[Global Leaderboard] Server last updated ${F}`)}const ee=V.filter(Z=>Z.gold+Z.silver+Z.bronze>0),G=new Set;V.forEach(Z=>Z.sports.forEach(F=>G.add(F)));const R={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},N=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let Q="all";const j=(Z,F)=>{let T=[...V],O;Z==="overall"&&(T=T.filter(te=>te.gold+te.silver+te.bronze>0)),Z==="bysport"&&F&&F!=="all"&&(T=T.filter(te=>te.sports.has(F)));const P=W.querySelector(".glb__note");switch(P&&P.remove(),Z){case"overall":T.sort((te,oe)=>oe.gold*100+oe.silver*10+oe.bronze-(te.gold*100+te.silver*10+te.bronze)||oe.totalPayout-te.totalPayout||oe.totalBets-te.totalBets),O=(te,oe,de,me,be)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${oe<3?"glb__rank--top3":""}">#${oe+1}</span>
                                                <span class="glb__avatar" style="background: ${me};">${de}</span>
                                                <span class="glb__name">${te.username}</span>
                                                ${be?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right">
                                                ${te.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${te.gold}</span></div>`:""}
                                                ${te.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${te.silver}</span></div>`:""}
                                                ${te.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${te.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":T=T.filter(te=>te.totalTDWon>0),T.sort((te,oe)=>oe.totalTDWon-te.totalTDWon),O=(te,oe,de,me,be)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${oe<3?"glb__rank--top3":""}">#${oe+1}</span>
                                                <span class="glb__avatar" style="background: ${me};">${de}</span>
                                                <span class="glb__name">${te.username}</span>
                                                ${be?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__earnings">TD$ ${Math.round(te.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":T.sort((te,oe)=>oe.totalPayout-te.totalPayout||oe.totalBets-te.totalBets),O=(te,oe,de,me,be)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${oe<3?"glb__rank--top3":""}">#${oe+1}</span>
                                                <span class="glb__avatar" style="background: ${me};">${de}</span>
                                                <span class="glb__name">${te.username}</span>
                                                ${be?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right" style="gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${te.totalBets} bets</span>
                                                <span class="glb__earnings">TD$ ${te.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const M=W.querySelector(".glb__list");if(!M)return;if(T.length===0){const te=Z==="earnings"?"No TD$ won from reconciled bets yet":Z==="bysport"?"No players found for this sport":"No leaderboard data available";M.innerHTML=`<div class="leaderboard-empty"><p>${te}</p></div>`;return}const q=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],D=te=>q[te.charCodeAt(0)%q.length];let B="";if(Z==="overall"&&T.length>=3){const te=(oe,de,me,be,_e)=>{const Ee=T[oe],ze=Ee.user_guid===ie;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${de===1?80:de===2?64:56}px; height: ${de===1?80:de===2?64:56}px; background-image: var(${be}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${ze?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${Ee.username}${ze?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${Ee.gold+Ee.silver+Ee.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${me}px; background: linear-gradient(180deg, ${_e}33 0%, ${_e}0D 100%); border-top: 3px solid ${_e}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${_e};">${de===1?"1st":de===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};B=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${te(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${te(0,1,90,"--badge__gold","#FFD700")}
                                        ${te(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const U='<div class="info-section__title">Rankings</div>',ae='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',ne='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(Z==="bysport"&&!W.querySelector(".glb__note")){const oe=document.createElement("div");oe.className="glb__note",oe.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",oe.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const de=W.querySelector(".glb__sport-filters");de&&de.parentNode.insertBefore(oe,de)}let pe="";if(Z==="earnings"&&T.length>=3){const te=(oe,de,me,be)=>{const _e=T[oe],Ee=_e.user_guid===ie;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${de===1?80:de===2?64:56}px; height: ${de===1?80:de===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${Ee?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${_e.username}${Ee?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(_e.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${me}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${de===1?"1st":de===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};pe=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${te(1,2,70,"#00E676")}
                                        ${te(0,1,90,"#00E676")}
                                        ${te(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(Z==="overall")M.innerHTML=B+ae+U+T.map((te,oe)=>{const de=(te.username||"?")[0].toUpperCase(),me=D(te.username),be=te.user_guid===ie;return O(te,oe,de,me,be)}).join("");else if(Z==="earnings"){const te='<div class="info-section__title">TD$ Won</div>';M.innerHTML=pe+ne+te+T.map((oe,de)=>{const me=(oe.username||"?")[0].toUpperCase(),be=D(oe.username),_e=oe.user_guid===ie;return O(oe,de,me,be,_e)}).join("")}else if(Z==="bysport"){let te="";if(T.length>=3){const de=(me,be,_e)=>{const Ee=T[me],ze=Ee.user_guid===ie,_t=D(Ee.username),yt=(Ee.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${_t}; width: ${be===1?48:38}px; height: ${be===1?48:38}px; font-size: ${be===1?"1rem":"0.8rem"};">${yt}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${ze?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${Ee.username}${ze?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Ee.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${_e}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${be===1?"1st":be===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};te=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${de(1,2,70)}
                                            ${de(0,1,90)}
                                            ${de(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const oe='<div class="info-section__title">Rankings</div>';M.innerHTML=te+oe+T.map((de,me)=>{const be=(de.username||"?")[0].toUpperCase(),_e=D(de.username),Ee=de.user_guid===ie;return O(de,me,be,_e,Ee)}).join("")}requestAnimationFrame(()=>{M.querySelectorAll(".glb__card, .info-row").forEach((te,oe)=>{te.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",te.style.animationDelay=`${Math.min(oe*50,400)}ms`})})},K=[...G].map(Z=>{const F=R[Z]||Z.replace(/^[a-z]+_/,"").toUpperCase(),T=Ye.find(P=>P.key===Z),O=T?T.group:"default";return`<button class="glb__sport-chip" data-sport="${Z}">
                                <bma-sport-icon sport="${Z}" data-sport-group="${O}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${F}</span>
                            </button>`}).join("");W.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${N.map((Z,F)=>`
                                    <button class="glb__tab ${F===0?"glb__tab--active":""}" data-tab="${Z.id}">${Z.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${K}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const se=document.createElement("style");se.textContent=`
                            /* === MOBILE-FIRST BASE (320-480px) === */

                            /* Tabs */
                            .glb__tabs {
                                display: flex; gap: 6px; margin-bottom: 12px;
                                overflow-x: auto; scrollbar-width: none;
                                -webkit-overflow-scrolling: touch;
                            }
                            .glb__tabs::-webkit-scrollbar { display: none; }
                            .glb__tab {
                                padding: 8px 12px; background: rgba(46, 139, 87, 0.1);
                                border: 1px solid rgba(46, 139, 87, 0.25); border-radius: 6px;
                                color: var(--app-core-color--white-5__dark--brand, #FAFAFA); font-size: clamp(0.65rem, 2vw, 0.78rem); font-weight: 600;
                                text-transform: uppercase; letter-spacing: 0.04em;
                                cursor: pointer; transition: all 0.2s ease; text-align: center;
                                white-space: nowrap; flex-shrink: 0; min-height: 40px;
                                display: flex; align-items: center; justify-content: center;
                            }
                            .glb__tab *, .glb__tab { pointer-events: auto; }
                            .glb__tab:hover { background: rgba(46, 139, 87, 0.2); border-color: rgba(46, 139, 87, 0.4); }
                            .glb__tab--active { background: rgba(247, 198, 13, 0.1); color: var(--status-locked-text, #F7C60D); border-color: rgba(247, 198, 13, 0.35); }

                            /* Sport chips */
                            .glb__sport-filters {
                                display: flex; gap: 6px; margin-bottom: 12px;
                                overflow-x: auto; scrollbar-width: none;
                                -webkit-overflow-scrolling: touch; padding: 2px 0;
                            }
                            .glb__sport-filters::-webkit-scrollbar { display: none; }
                            .glb__sport-chip {
                                padding: 6px 12px; background: transparent;
                                border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 20px;
                                color: rgba(255, 255, 255, 0.5); font-size: clamp(0.68rem, 1.8vw, 0.8rem);
                                font-weight: 600; cursor: pointer; transition: all 0.2s ease;
                                white-space: nowrap; flex-shrink: 0; min-height: 36px;
                                display: inline-flex; align-items: center; gap: 5px;
                            }
                            .glb__sport-chip:hover { border-color: rgba(255, 215, 0, 0.3); color: rgba(255, 215, 0, 0.7); }
                            .glb__sport-chip--active { background: rgba(0, 230, 118, 0.12); border-color: rgba(0, 230, 118, 0.3); color: var(--status-upcoming-text, #00E676); }

                            /* Card row */
                            .glb__card {
                                display: grid;
                                grid-template-columns: auto 1fr;
                                gap: clamp(4px, 1vw, 6px) clamp(8px, 2vw, 12px);
                                padding: 12px 16px;
                                border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                            }
                            .glb__card:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
                            .glb__card:last-child { border-bottom: none; }
                            .glb__card--you { border-left: 3px solid #FFD700; background: rgba(247, 198, 13, 0.04) !important; }
                            /* When card contains glb__row, card is just a wrapper */
                            .glb__card:has(.glb__row) { display: block; padding: 0; border-bottom: none; }
                            .glb__card:has(.glb__row):nth-child(even) { background: transparent; }

                            /* Ranking list rows (own class, not shared with info-row) */
                            .glb__row {
                                display: flex;
                                justify-content: space-between;
                                align-items: center;
                                padding: 12px 16px;
                                border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                                max-width: 1080px;
                                margin: 0 auto;
                            }
                            .glb__row:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
                            .glb__row:last-child { border-bottom: none; }
                            .glb__row-left { display: flex; align-items: center; gap: 8px; min-width: 0; flex: 1; }
                            .glb__row-right { display: flex; align-items: center; gap: 4px; flex-shrink: 0; }

                            /* Rank + avatar column — spans all rows */
                            .glb__left {
                                grid-row: 1 / -1;
                                display: flex; align-items: center; gap: clamp(4px, 1.5vw, 8px);
                            }
                            .glb__rank { font-size: clamp(0.95rem, 3vw, 1.15rem); font-weight: 800; color: var(--status-upcoming-text, #00E676); min-width: clamp(28px, 8vw, 36px); }
                            .glb__rank--top3 { color: var(--status-locked-text, #F7C60D); }
                            .glb__avatar {
                                width: clamp(28px, 8vw, 34px); height: clamp(28px, 8vw, 34px);
                                border-radius: 50%; display: flex; align-items: center; justify-content: center;
                                font-size: clamp(0.7rem, 2vw, 0.82rem); font-weight: 700; flex-shrink: 0; text-transform: uppercase; color: var(--app-core-color--white-5__dark--brand, #FAFAFA);
                            }

                            /* Content column */
                            .glb__top { display: flex; align-items: center; gap: clamp(6px, 2vw, 10px); overflow: hidden; }
                            .glb__name { font-size: clamp(0.85rem, 2.8vw, 1.05rem); font-weight: 700; color: var(--app-core-color--white-5__dark--brand, #FAFAFA); flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
                            .glb__earnings { font-size: clamp(0.82rem, 2.5vw, 1rem); font-weight: 700; color: var(--status-upcoming-text, #00E676); flex-shrink: 0; }

                            /* Badges — right side of top row */
                            .glb__badges { display: flex; gap: clamp(2px, 1vw, 6px); align-items: center; flex-shrink: 0; margin-left: auto; padding-right: 2px; }
                            .glb__badge { display: flex; align-items: center; gap: 1px; font-size: clamp(0.75rem, 2vw, 0.9rem); font-weight: 800; }
                            .glb__badge-icon {
                                width: clamp(34px, 10vw, 44px); height: clamp(34px, 10vw, 44px);
                                background-size: contain; background-repeat: no-repeat; background-position: center;
                                margin: -6px 0;
                            }

                            /* Trophies tab — bigger badges */
                            .glb__mid { display: flex; gap: clamp(10px, 3vw, 16px); align-items: center; flex-wrap: wrap; }
                            .glb__badge--big { gap: clamp(4px, 1vw, 6px); font-size: clamp(0.72rem, 2vw, 0.9rem); }
                            .glb__badge-icon--big {
                                width: clamp(40px, 12vw, 56px); height: clamp(40px, 12vw, 56px);
                                margin: -8px 0;
                            }

                            /* Stats row */
                            .glb__bot {
                                display: flex; gap: 4px; flex-wrap: wrap; align-items: center;
                                font-size: clamp(0.72rem, 2vw, 0.85rem); color: rgba(255, 255, 255, 0.45);
                                line-height: 1.4;
                            }
                            /* Trophy showcase row for Trophies tab */
                            .glb__trophies-row {
                                display: flex; justify-content: space-around; align-items: center;
                                padding: clamp(4px, 1vw, 8px) 0;
                            }
                            .glb__trophy-cell {
                                display: flex; flex-direction: column; align-items: center; gap: 2px;
                            }
                            .glb__trophy-img {
                                width: clamp(44px, 14vw, 64px); height: clamp(44px, 14vw, 64px);
                                background-size: contain; background-repeat: no-repeat; background-position: center;
                            }
                            .glb__trophy-num {
                                font-size: clamp(1rem, 3vw, 1.3rem); font-weight: 800;
                                font-family: 'SF Mono', 'Monaco', monospace;
                            }

                            .glb__trophy-band {
                                grid-column: 1 / -1;
                                display: flex; justify-content: center; align-items: center; gap: 10px;
                                background: rgba(247, 198, 13, 0.08);
                                border: 1px solid rgba(247, 198, 13, 0.12);
                                margin: 6px 0 0 0;
                                padding: 6px 16px;
                                border-radius: 20px;
                                font-size: clamp(0.68rem, 1.8vw, 0.78rem);
                                font-weight: 600; color: var(--status-locked-text, #F7C60D);
                                letter-spacing: 0.03em;
                            }

                            .glb__you-badge {
                                font-size: 0.65rem; font-weight: 700; color: #101010;
                                background: #F7C60D; padding: 2px 8px; border-radius: 3px;
                                text-transform: uppercase; letter-spacing: 0.05em;
                                flex-shrink: 0; margin-left: 4px;
                                display: none;
                            }
                            @media (min-width: 481px) {
                                .glb__you-badge { display: inline-block; }
                            }

                            .glb__val { font-weight: 600; color: rgba(255, 255, 255, 0.75); }
                            .glb__val--green { color: var(--status-upcoming-text, #00E676); }
                            .glb__sep { color: rgba(255, 255, 255, 0.2); }

                            /* Divider after top 3 */
                            .glb__divider { height: 2px; margin: 0; background: linear-gradient(90deg, transparent, rgba(255, 215, 0, 0.3), rgba(192, 192, 192, 0.3), rgba(218, 149, 75, 0.3), transparent); }

                            /* === TABLET (481px+) === */
                            @media (min-width: 481px) {
                                .glb__tab { padding: 10px 16px; font-size: 0.8rem; border-radius: 8px; }
                                .glb__sport-chip { padding: 8px 14px; font-size: 0.8rem; gap: 6px; }
                                .glb__card { padding: 14px; gap: 6px 12px; }
                                .glb__rank { font-size: 1.2rem; min-width: 36px; }
                                .glb__avatar { width: 34px; height: 34px; font-size: 0.85rem; }
                                .glb__name { font-size: 1.05rem; }
                                .glb__badge-icon { width: 44px; height: 44px; margin: -8px 0; }
                                .glb__badge-icon--big { width: 56px; height: 56px; margin: -10px 0; }
                                .glb__trophy-img { width: 56px; height: 56px; }
                                .glb__trophy-num { font-size: 1.2rem; }
                                .glb__bot { font-size: 0.88rem; gap: 6px; }
                                .glb__divider { margin: 10px 0; }
                            }

                            /* === DESKTOP (769px+) === */
                            @media (min-width: 769px) {
                                .glb__tabs { gap: 8px; }
                                .glb__tab { padding: 10px 20px; font-size: 0.85rem; flex: 1; }
                                .glb__sport-chip { padding: 8px 16px; font-size: 0.85rem; }
                                .glb__card { padding: 16px 20px; gap: 8px 14px; max-width: 900px; margin-left: auto; margin-right: auto; margin-bottom: 6px; }
                                .glb__rank { font-size: 1.35rem; min-width: 40px; }
                                .glb__avatar { width: 38px; height: 38px; font-size: 0.9rem; }
                                .glb__name { font-size: 1.15rem; }
                                .glb__earnings { font-size: 1.1rem; }
                                .glb__badge-icon { width: 52px; height: 52px; margin: -10px 0; }
                                .glb__badge { gap: 4px; font-size: 0.85rem; }
                                .glb__badge-icon--big { width: 64px; height: 64px; margin: -12px 0; }
                                .glb__trophy-img { width: 72px; height: 72px; }
                                .glb__trophy-num { font-size: 1.4rem; }
                                .glb__badge--big { gap: 6px; font-size: 1rem; }
                                .glb__bot { font-size: 0.95rem; gap: 8px; }
                                .glb__divider { margin: 12px auto; max-width: 900px; }
                                .glb__card:hover { transform: translateX(2px); }
                            }
                        `,W.prepend(se),j("overall"),W.querySelectorAll(".glb__tab").forEach(Z=>{Z.addEventListener("click",()=>{W.querySelectorAll(".glb__tab").forEach(O=>O.classList.remove("glb__tab--active")),Z.classList.add("glb__tab--active");const F=Z.dataset.tab,T=W.querySelector(".glb__sport-filters");T&&(T.style.display=F==="bysport"?"flex":"none"),j(F,F==="bysport"?Q:void 0)})}),W.querySelectorAll(".glb__sport-chip").forEach(Z=>{Z.addEventListener("click",()=>{W.querySelectorAll(".glb__sport-chip").forEach(F=>F.classList.remove("glb__sport-chip--active")),Z.classList.add("glb__sport-chip--active"),Q=Z.dataset.sport,j("bysport",Q)})})}catch($){console.error("[appEvents] Error fetching global leaderboard:",$);const z=document.getElementById("global-leaderboard-container");z&&(z.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>')}}},setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){window._renderTopPlayers&&await window._renderTopPlayers()},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}};class Q1 extends HTMLElement{constructor(){super(),this.selectedItem="foot_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Re.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count","data-private-count","data-invites-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_lobby"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),ce.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){Re.theme;const t=Re.isDark,s=[{name:"foot_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.LOBBY"},{name:"foot_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.FOOT.TOURNEYS"},{name:"foot_private",caption:"Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.PRIVATE"},{name:"foot_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_profile",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],a=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,r=parseInt(this.getAttribute("data-invites-count"))||0,o=l=>{const i=this.selectedItem===l.name;let c="";return l.name==="foot_tourneys"?c=`<span class="nav-badge">${a}</span>`:l.name==="foot_private"&&(c=`<span class="nav-badge">${n}</span>`,r>0&&(c+=`<span class="nav-badge nav-badge--invite" aria-label="${r} pending invite${r===1?"":"s"}">${r}</span>`)),`
        <div
          class="nav-item ${i?"nav-selected":"nav-unselected"}"
          data-item="${l.name}"
          role="button"
          tabindex="0"
          aria-label="${l.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${l.iconVar}"></div>
            ${c}
          </div>
          <span class="nav-caption">${l.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}
        ${Ss()}

        :host {
          display: none; /* Hidden by default */
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          box-sizing: border-box;
          z-index: 248;
          background: var(--surface-sticky, #141414);
          border-top: 1px solid var(--card-border, rgba(255, 255, 255, 0.08));
          box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.3), var(--shadow-inset-top, inset 0 1px 0 rgba(255,255,255,0.05));
          padding-bottom: env(safe-area-inset-bottom, 0px);
          padding-left: env(safe-area-inset-left, 0px);
          padding-right: env(safe-area-inset-right, 0px);
        }

        /* Show only on mobile */
        @media ${Lu.mobile} {
          :host {
            display: block;
          }
        }

        .foot-container {
          max-width: var(--bma-app-head__max--width, 1180px);
          margin: 0 auto;
          padding: 0.25rem 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 0;
        }

        .nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.25rem 0.25rem;
          cursor: pointer;
          transition: all var(--transition-normal, 250ms ease);
          border-top: 2px solid transparent;
          user-select: none;
          min-height: var(--touch-preferred, 48px);
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          border-radius: 0;
          background-color: transparent;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          transition: all var(--transition-normal, 250ms ease);
          filter: brightness(70%);
          margin-bottom: 0.125rem;
        }

        .nav-icon[data-icon-var="--nav-icon__sports--"] {
          background-image: var(--nav-icon__trophy--${t?"dark":"light"});
        }

        /* My Tourneys — Material Symbols "calendar_today" inlined. */
        .nav-icon[data-icon-var="--nav-icon__my_tourneys--"] {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='${t?"%23fff":"%23000"}' viewBox='0 -960 960 960'%3E%3Cpath d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80zm0-80h560v-400H200zm0-480h560v-80H200zm0 0v-80z'/%3E%3C/svg%3E");
        }

        .nav-icon[data-icon-var="--nav-icon__trophy--"] {
          background-image: var(--nav-icon__person_celebrate--${t?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__leaderboard--"] {
          background-image: var(--nav-icon__social_leaderboard--${t?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__my_profile_circle--"] {
          background-image: var(--nav-icon__account_circle--${t?"dark":"light"});
        }

        .nav-icon-wrap {
          position: relative;
          display: inline-flex;
        }

        .nav-badge {
          position: absolute;
          top: -10px;
          right: -10px;
          min-width: 16px;
          height: 16px;
          padding: 0 4px;
          border-radius: var(--radius-full, 9999px);
          background: var(--status-upcoming-text, #00E676);
          color: #000;
          font-size: 0.6rem;
          font-weight: var(--weight-bold, 700);
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          box-shadow: 0 0 0 2px var(--surface-sticky, #161616);
        }
        .nav-badge--soft {
          background: var(--status-locked-text, #F7C60D);
        }
        /* Secondary invite pill. Sits flush below the primary count pill
           on the Pools tile so both share corner space without overlap.
           Gold + pulsing so pending invites pull the eye. */
        .nav-badge--invite {
          top: 6px;
          right: -10px;
          background: var(--status-locked-text, #F7C60D);
          color: #000;
          animation: nav-badge--invite__pulse 2s ease-in-out infinite;
        }
        @keyframes nav-badge--invite__pulse {
          0%, 100% { box-shadow: 0 0 0 2px var(--surface-sticky, #161616), 0 0 0 0 rgba(247, 198, 13, 0.55); }
          50%      { box-shadow: 0 0 0 2px var(--surface-sticky, #161616), 0 0 0 5px rgba(247, 198, 13, 0); }
        }

        .nav-caption {
          font-size: 0.7rem;
          font-weight: var(--weight-semibold, 600);
          text-align: center;
          line-height: 1.2;
        }

        /* Unselected state */
        .nav-unselected {
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          border-top-color: transparent;
        }

        /* Selected state — gold accent for brand consistency */
        .nav-selected {
          color: var(--status-locked-text, #F7C60D);
          border-top-color: var(--status-locked-text, #F7C60D);
        }

        .nav-selected .nav-icon {
          filter: brightness(120%);
        }
      </style>

      <div class="foot-container">
        ${s.map(l=>o(l)).join("")}
      </div>
    `,s.forEach(l=>{const i=this.shadowRoot.querySelector(`[data-item="${l.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(l.name,l.topic)),i.addEventListener("keypress",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.handleItemClick(l.name,l.topic))}))})}}customElements.define("bma-app-foot",Q1);const Z1=["data-selected-item"],ew={__name:"App",setup(e){const t=ct(),s=Ba(),a=Te(),n=ge(()=>{const c=s.name;return c==="home_route"||c==="top_players_route"}),r=Me("foot_lobby"),o=c=>c==="my"?"foot_tourneys":c==="private"?"foot_private":"foot_lobby",l=()=>{const c=window.location.hash||"";if(c.startsWith("#/top_players_route"))r.value="foot_leaderboard";else if(c.startsWith("#/home_route")||c==="#/"||!c){const u=document.body.dataset.tournFilter||"lobby";r.value=o(u)}};Qs(()=>s.name,()=>l(),{immediate:!0});let i=null;return lt(()=>{i=ce.subscribe("ROUTE.HOME_HYDRATE",()=>l())}),is(()=>{i&&ce.unsubscribe(i)}),lt(()=>{setTimeout(()=>{const c=a.appSession?.session_user?.guid,u=a.appSession?.session_user?.authenticated;c&&u&&a.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",c),nr.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",c,a,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((c=null)=>{t.currentRoute.value?.meta?.previewAllowed||(neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${c}`,"primary"),t.push({name:c}))}).setOnState((c=null)=>{c&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=c)}).init({BASE:ke.API_baseURI})},2e3),setTimeout(()=>{Pe.bindAppListeners(a)},3e3),t.beforeEach((c,u,d)=>{if(c.name==="splash_route")return yl(ka.AUTHED),d();if(!c.name)return d(!1);const p=Sg(c.name,c.meta);if(yl(p),p===ka.DENIED)return d(!1);d()}),(c,u)=>(ue(),fe(Be,null,[st(ut(Au),null,{default:vo(({Component:d})=>[st(ah,{name:"slide-left"},{default:vo(()=>[(ue(),su(rf(d)))]),_:2},1024)]),_:1}),n.value?(ue(),fe("bma-app-foot",{key:0,"data-selected-item":r.value},null,8,Z1)):xe("",!0)],64))}};class qu{constructor(){this.id="DEFAULT",this.label="Bet Max Tourney",this.description="Place any bets you want across the tournament slate."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:[],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:0,stakeRule:"FREE",stakeMin:1,stakeMax:null,allowPartialSubmit:!0,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!1}}getEffectiveRules(t){const s=this.rules;if(!t?.tags||!Array.isArray(t.tags))return s;const a=t.tags.find(n=>typeof n=="object"&&n!==null&&n.game_rules);return a?.game_rules?{...s,...a.game_rules}:s}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","totalBets"],bonuses:[],penalizeMissing:!1}}_parseBets(t){const s=[];return t.forEach(a=>{const n=a.coreMatches__guid||a.match_guid||"";(a.bet||[]).forEach(o=>{Object.keys(o).forEach(l=>{if(l==="short_title")return;const i=o[l];i&&s.push({matchGuid:n,type:(i.type||"").toUpperCase(),team:l,stake:parseFloat(i.stake||0),payout:parseFloat(i.payout||0),odds:parseFloat(i.odds||0),reconciled:i.reconciled||!1})})})}),s}_getTypeCounts(t){const s={};return t.forEach(a=>{s[a.type]=(s[a.type]||0)+1}),s}_getTotalStakes(t){return parseFloat(t.reduce((s,a)=>s+a.stake,0).toFixed(2))}_typeLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money Line";case"TOTAL":return"Over/Under";default:return t}}_typeShortLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money";case"TOTAL":return"Total";default:return t}}canPlaceBet(t,s,a){const n=this.getEffectiveRules(a),r=this._parseBets(s),o=(t.type||"").toUpperCase();return n.oneBetPerMatchPerType&&r.find(i=>i.matchGuid===t.matchGuid&&i.type===o)?{allowed:!1,reason:`You already have a ${this._typeLabel(o)} bet on this match`}:n.maxBetsPerType>0&&r.filter(i=>i.type===o).length>=n.maxBetsPerType?{allowed:!1,reason:`Maximum ${n.maxBetsPerType} ${this._typeLabel(o)} bets reached`}:n.maxBetsTotal>0&&r.length>=n.maxBetsTotal?{allowed:!1,reason:`Maximum ${n.maxBetsTotal} total bets reached`}:{allowed:!0,reason:null}}validateBetSlip(t,s,a){const n=this.getEffectiveRules(s),r=[],o=[],l=this._parseBets(t),i=this._getTypeCounts(l),c=this._getTotalStakes(l),u=parseFloat(s?.tournament_dollars||0);if(n.requiredBetTypes.forEach(d=>{i[d]||r.push(`You need at least one ${this._typeLabel(d)} bet`)}),n.minBetsTotal>0&&l.length<n.minBetsTotal&&r.push(`Place at least ${n.minBetsTotal} bets`),n.stakeRule==="SPEND_ALL"&&u>0){if(c<u){const d=parseFloat((u-c).toFixed(2));r.push(`You have TD$ ${d.toLocaleString()} left to spend — use your entire balance`)}else if(c>u+.01){const d=parseFloat((c-u).toFixed(2));r.push(`You've exceeded your TD$ balance by ${d.toLocaleString()}`)}}return!n.allowPartialSubmit&&r.length>0,{valid:r.length===0,errors:r,warnings:o}}scoreEntry(t,s){const a=parseFloat(t.total_payout||0);return{score:a,breakdown:{payout:a}}}rankLeaderboard(t,s){return[...t].sort((a,n)=>{const r=this.scoreEntry(a,s).score;return this.scoreEntry(n,s).score-r})}getProgressUI(t,s){const a=this.getEffectiveRules(s),n=a.requiredBetTypes.length>0,r=a.stakeRule==="SPEND_ALL";if(!n&&!r)return{type:"NONE",percent:0,label:"",hints:[],typesStatus:[],complete:!0};const o=this._parseBets(t),l=this._getTypeCounts(o),i=this._getTotalStakes(o),c=parseFloat(s?.tournament_dollars||0),u=c>0?Math.min(100,Math.round(i/c*100)):0,d=a.requiredBetTypes.every(h=>l[h]),p=!r||Math.abs(i-c)<.01,f=a.requiredBetTypes.map(h=>({type:h,label:this._typeShortLabel(h),placed:!!l[h],count:l[h]||0})),g=[],v=a.requiredBetTypes.filter(h=>!l[h]).map(h=>this._typeLabel(h));return v.length>0&&!p?g.push(`Need a ${v.join(", ")} bet · Spend all TD$ ${Math.round(c).toLocaleString()}`):v.length>0?g.push(`Need a ${v.join(", ")} bet`):!p&&i<c&&g.push(`TD$ ${Math.round(c-i).toLocaleString()} left to allocate`),{type:n?"BET_TYPES":"STAKE_PROGRESS",percent:u,label:r?`TD$ ${Math.round(i).toLocaleString()} / ${Math.round(c).toLocaleString()} spent`:`${o.length} bets placed`,typesStatus:f,hints:g,complete:d&&p}}getValidationMessages(t,s,a){return this.getProgressUI(t,s).hints}getBadge(){return null}getRulesHTML(t){return"<p>Place bets on any matches in the tournament. The player with the highest total payout wins.</p>"}getEmptyStateText(){return"Select a match to start betting"}}class Ol extends qu{constructor(){super(),this.id="DEFAULT_FORMAT",this.label="Bet Max Tourney",this.description="Place any bets you want across the tournament slate."}get scoring(){return{method:"SETTLED_PNL",rankBy:["score","pendingPayout","firstBetTime"],bonuses:[],penalizeMissing:!1}}_firstBetTime(t){const s=t?.bets||[];let a=1/0;for(const n of s){const r=n?.create_time||n?.timestamp||n?.status_time;if(!r)continue;const o=new Date(r).getTime();!isNaN(o)&&o<a&&(a=o)}return a}scoreEntry(t,s){const a=parseFloat(t.tournament_dollars??s?.tournament_dollars??0),n=this._parseBets(t.bets||[]);let r=0,o=0,l=0,i=0,c=0;n.forEach(v=>{r+=v.stake,v.reconciled?(o+=v.stake,c+=v.payout):(l+=v.stake,i+=v.payout)});const u=a-r,d=parseFloat((a-o+c).toFixed(2)),p=d,b=!(this.getEffectiveRules(s).stakeRule==="SPEND_ALL")||r>=a-.01;return{score:d,breakdown:{startingTD:parseFloat(a.toFixed(2)),remainingTD:parseFloat(u.toFixed(2)),totalStakes:parseFloat(r.toFixed(2)),committedStakes:parseFloat(o.toFixed(2)),pendingStakes:parseFloat(l.toFixed(2)),balance:parseFloat(p.toFixed(2)),pendingPayout:parseFloat(i.toFixed(2)),settledPayout:parseFloat(c.toFixed(2)),firstBetTime:this._firstBetTime(t),qualified:b}}}rankLeaderboard(t,s){return[...t].map(a=>({entry:a,...this.scoreEntry(a,s)})).sort((a,n)=>a.breakdown.qualified!==n.breakdown.qualified?a.breakdown.qualified?-1:1:n.score!==a.score?n.score-a.score:n.breakdown.pendingPayout!==a.breakdown.pendingPayout?n.breakdown.pendingPayout-a.breakdown.pendingPayout:a.breakdown.firstBetTime-n.breakdown.firstBetTime).map(a=>a.entry)}}class tw extends qu{constructor(){super(),this.id="SET_IT_AND_FORGET_IT",this.label="Set It and Forget It",this.description="Build your lineup with one of each bet type across the slate. Spend all your TD$."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:["SPREAD","MONEY","TOTAL"],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:3,stakeRule:"SPEND_ALL",stakeMin:1,stakeMax:null,allowPartialSubmit:!1,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!0}}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","betCount","timestamp"],bonuses:[],penalizeMissing:!0}}getBadge(){return{label:"Set & Forget",color:"ghost"}}getEmptyStateText(){return"Build your lineup — place one of each bet type and spend all your TD$"}getRulesHTML(t){const s=t?.tournament_dollars||0;return`
            <div style="padding: 12px 0;">
                <p style="margin: 0 0 8px; font-weight: 600; color: rgba(255,255,255,0.85);">Set It and Forget It Rules:</p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.8;">
                    <li>Place at least one <strong>Spread</strong>, one <strong>Money Line</strong>, and one <strong>Over/Under</strong> bet</li>
                    <li>You must spend your entire <strong>TD$ ${Number(s).toLocaleString()}</strong> balance across all bets</li>
                    <li>One bet per match per bet type (no duplicates)</li>
                    <li>Highest total payout wins the tournament</li>
                </ul>
            </div>`}}var Ya={exports:{}},ao={},Kt={},Os={},no={},ro={},oo={},$l;function rr(){return $l||($l=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class s extends t{constructor(m){if(super(),!e.IDENTIFIER.test(m))throw new Error("CodeGen: name must be a valid identifier");this.str=m}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=s;class a extends t{constructor(m){super(),this._items=typeof m=="string"?[m]:m}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const m=this._items[0];return m===""||m==='""'}get str(){var m;return(m=this._str)!==null&&m!==void 0?m:this._str=this._items.reduce((_,y)=>`${_}${y}`,"")}get names(){var m;return(m=this._names)!==null&&m!==void 0?m:this._names=this._items.reduce((_,y)=>(y instanceof s&&(_[y.str]=(_[y.str]||0)+1),_),{})}}e._Code=a,e.nil=new a("");function n(h,...m){const _=[h[0]];let y=0;for(;y<m.length;)l(_,m[y]),_.push(h[++y]);return new a(_)}e._=n;const r=new a("+");function o(h,...m){const _=[f(h[0])];let y=0;for(;y<m.length;)_.push(r),l(_,m[y]),_.push(r,f(h[++y]));return i(_),new a(_)}e.str=o;function l(h,m){m instanceof a?h.push(...m._items):m instanceof s?h.push(m):h.push(d(m))}e.addCodeArg=l;function i(h){let m=1;for(;m<h.length-1;){if(h[m]===r){const _=c(h[m-1],h[m+1]);if(_!==void 0){h.splice(m-1,3,_);continue}h[m++]="+"}m++}}function c(h,m){if(m==='""')return h;if(h==='""')return m;if(typeof h=="string")return m instanceof s||h[h.length-1]!=='"'?void 0:typeof m!="string"?`${h.slice(0,-1)}${m}"`:m[0]==='"'?h.slice(0,-1)+m.slice(1):void 0;if(typeof m=="string"&&m[0]==='"'&&!(h instanceof s))return`"${h}${m.slice(1)}`}function u(h,m){return m.emptyStr()?h:h.emptyStr()?m:o`${h}${m}`}e.strConcat=u;function d(h){return typeof h=="number"||typeof h=="boolean"||h===null?h:f(Array.isArray(h)?h.join(","):h)}function p(h){return new a(f(h))}e.stringify=p;function f(h){return JSON.stringify(h).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=f;function g(h){return typeof h=="string"&&e.IDENTIFIER.test(h)?new a(`.${h}`):n`[${h}]`}e.getProperty=g;function b(h){if(typeof h=="string"&&e.IDENTIFIER.test(h))return new a(`${h}`);throw new Error(`CodeGen: invalid export name: ${h}, use explicit $id name mapping`)}e.getEsmExportName=b;function v(h){return new a(h.toString())}e.regexpCode=v})(oo)),oo}var io={},Ml;function Ll(){return Ml||(Ml=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=rr();class s extends Error{constructor(c){super(`CodeGen: "code" for ${c} not defined`),this.value=c.value}}var a;(function(i){i[i.Started=0]="Started",i[i.Completed=1]="Completed"})(a||(e.UsedValueState=a={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class n{constructor({prefixes:c,parent:u}={}){this._names={},this._prefixes=c,this._parent=u}toName(c){return c instanceof t.Name?c:this.name(c)}name(c){return new t.Name(this._newName(c))}_newName(c){const u=this._names[c]||this._nameGroup(c);return`${c}${u.index++}`}_nameGroup(c){var u,d;if(!((d=(u=this._parent)===null||u===void 0?void 0:u._prefixes)===null||d===void 0)&&d.has(c)||this._prefixes&&!this._prefixes.has(c))throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);return this._names[c]={prefix:c,index:0}}}e.Scope=n;class r extends t.Name{constructor(c,u){super(u),this.prefix=c}setValue(c,{property:u,itemIndex:d}){this.value=c,this.scopePath=(0,t._)`.${new t.Name(u)}[${d}]`}}e.ValueScopeName=r;const o=(0,t._)`\n`;class l extends n{constructor(c){super(c),this._values={},this._scope=c.scope,this.opts={...c,_n:c.lines?o:t.nil}}get(){return this._scope}name(c){return new r(c,this._newName(c))}value(c,u){var d;if(u.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const p=this.toName(c),{prefix:f}=p,g=(d=u.key)!==null&&d!==void 0?d:u.ref;let b=this._values[f];if(b){const m=b.get(g);if(m)return m}else b=this._values[f]=new Map;b.set(g,p);const v=this._scope[f]||(this._scope[f]=[]),h=v.length;return v[h]=u.ref,p.setValue(u,{property:f,itemIndex:h}),p}getValue(c,u){const d=this._values[c];if(d)return d.get(u)}scopeRefs(c,u=this._values){return this._reduceValues(u,d=>{if(d.scopePath===void 0)throw new Error(`CodeGen: name "${d}" has no value`);return(0,t._)`${c}${d.scopePath}`})}scopeCode(c=this._values,u,d){return this._reduceValues(c,p=>{if(p.value===void 0)throw new Error(`CodeGen: name "${p}" has no value`);return p.value.code},u,d)}_reduceValues(c,u,d={},p){let f=t.nil;for(const g in c){const b=c[g];if(!b)continue;const v=d[g]=d[g]||new Map;b.forEach(h=>{if(v.has(h))return;v.set(h,a.Started);let m=u(h);if(m){const _=this.opts.es5?e.varKinds.var:e.varKinds.const;f=(0,t._)`${f}${_} ${h} = ${m};${this.opts._n}`}else if(m=p?.(h))f=(0,t._)`${f}${m}${this.opts._n}`;else throw new s(h);v.set(h,a.Completed)})}return f}}e.ValueScope=l})(io)),io}var Rl;function Se(){return Rl||(Rl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=rr(),s=Ll();var a=rr();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return a._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return a.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return a.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return a.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return a.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return a.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return a.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return a.Name}});var n=Ll();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return n.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return n.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return n.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return n.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class r{optimizeNodes(){return this}optimizeNames(R,N){return this}}class o extends r{constructor(R,N,Q){super(),this.varKind=R,this.name=N,this.rhs=Q}render({es5:R,_n:N}){const Q=R?s.varKinds.var:this.varKind,j=this.rhs===void 0?"":` = ${this.rhs}`;return`${Q} ${this.name}${j};`+N}optimizeNames(R,N){if(R[this.name.str])return this.rhs&&(this.rhs=z(this.rhs,R,N)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class l extends r{constructor(R,N,Q){super(),this.lhs=R,this.rhs=N,this.sideEffects=Q}render({_n:R}){return`${this.lhs} = ${this.rhs};`+R}optimizeNames(R,N){if(!(this.lhs instanceof t.Name&&!R[this.lhs.str]&&!this.sideEffects))return this.rhs=z(this.rhs,R,N),this}get names(){const R=this.lhs instanceof t.Name?{}:{...this.lhs.names};return $(R,this.rhs)}}class i extends l{constructor(R,N,Q,j){super(R,Q,j),this.op=N}render({_n:R}){return`${this.lhs} ${this.op}= ${this.rhs};`+R}}class c extends r{constructor(R){super(),this.label=R,this.names={}}render({_n:R}){return`${this.label}:`+R}}class u extends r{constructor(R){super(),this.label=R,this.names={}}render({_n:R}){return`break${this.label?` ${this.label}`:""};`+R}}class d extends r{constructor(R){super(),this.error=R}render({_n:R}){return`throw ${this.error};`+R}get names(){return this.error.names}}class p extends r{constructor(R){super(),this.code=R}render({_n:R}){return`${this.code};`+R}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(R,N){return this.code=z(this.code,R,N),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class f extends r{constructor(R=[]){super(),this.nodes=R}render(R){return this.nodes.reduce((N,Q)=>N+Q.render(R),"")}optimizeNodes(){const{nodes:R}=this;let N=R.length;for(;N--;){const Q=R[N].optimizeNodes();Array.isArray(Q)?R.splice(N,1,...Q):Q?R[N]=Q:R.splice(N,1)}return R.length>0?this:void 0}optimizeNames(R,N){const{nodes:Q}=this;let j=Q.length;for(;j--;){const K=Q[j];K.optimizeNames(R,N)||(H(R,K.names),Q.splice(j,1))}return Q.length>0?this:void 0}get names(){return this.nodes.reduce((R,N)=>S(R,N.names),{})}}class g extends f{render(R){return"{"+R._n+super.render(R)+"}"+R._n}}class b extends f{}class v extends g{}v.kind="else";class h extends g{constructor(R,N){super(N),this.condition=R}render(R){let N=`if(${this.condition})`+super.render(R);return this.else&&(N+="else "+this.else.render(R)),N}optimizeNodes(){super.optimizeNodes();const R=this.condition;if(R===!0)return this.nodes;let N=this.else;if(N){const Q=N.optimizeNodes();N=this.else=Array.isArray(Q)?new v(Q):Q}if(N)return R===!1?N instanceof h?N:N.nodes:this.nodes.length?this:new h(Y(R),N instanceof h?[N]:N.nodes);if(!(R===!1||!this.nodes.length))return this}optimizeNames(R,N){var Q;if(this.else=(Q=this.else)===null||Q===void 0?void 0:Q.optimizeNames(R,N),!!(super.optimizeNames(R,N)||this.else))return this.condition=z(this.condition,R,N),this}get names(){const R=super.names;return $(R,this.condition),this.else&&S(R,this.else.names),R}}h.kind="if";class m extends g{}m.kind="for";class _ extends m{constructor(R){super(),this.iteration=R}render(R){return`for(${this.iteration})`+super.render(R)}optimizeNames(R,N){if(super.optimizeNames(R,N))return this.iteration=z(this.iteration,R,N),this}get names(){return S(super.names,this.iteration.names)}}class y extends m{constructor(R,N,Q,j){super(),this.varKind=R,this.name=N,this.from=Q,this.to=j}render(R){const N=R.es5?s.varKinds.var:this.varKind,{name:Q,from:j,to:K}=this;return`for(${N} ${Q}=${j}; ${Q}<${K}; ${Q}++)`+super.render(R)}get names(){const R=$(super.names,this.from);return $(R,this.to)}}class w extends m{constructor(R,N,Q,j){super(),this.loop=R,this.varKind=N,this.name=Q,this.iterable=j}render(R){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(R)}optimizeNames(R,N){if(super.optimizeNames(R,N))return this.iterable=z(this.iterable,R,N),this}get names(){return S(super.names,this.iterable.names)}}class x extends g{constructor(R,N,Q){super(),this.name=R,this.args=N,this.async=Q}render(R){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(R)}}x.kind="func";class E extends f{render(R){return"return "+super.render(R)}}E.kind="return";class I extends g{render(R){let N="try"+super.render(R);return this.catch&&(N+=this.catch.render(R)),this.finally&&(N+=this.finally.render(R)),N}optimizeNodes(){var R,N;return super.optimizeNodes(),(R=this.catch)===null||R===void 0||R.optimizeNodes(),(N=this.finally)===null||N===void 0||N.optimizeNodes(),this}optimizeNames(R,N){var Q,j;return super.optimizeNames(R,N),(Q=this.catch)===null||Q===void 0||Q.optimizeNames(R,N),(j=this.finally)===null||j===void 0||j.optimizeNames(R,N),this}get names(){const R=super.names;return this.catch&&S(R,this.catch.names),this.finally&&S(R,this.finally.names),R}}class L extends g{constructor(R){super(),this.error=R}render(R){return`catch(${this.error})`+super.render(R)}}L.kind="catch";class C extends g{render(R){return"finally"+super.render(R)}}C.kind="finally";class k{constructor(R,N={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...N,_n:N.lines?`
`:""},this._extScope=R,this._scope=new s.Scope({parent:R}),this._nodes=[new b]}toString(){return this._root.render(this.opts)}name(R){return this._scope.name(R)}scopeName(R){return this._extScope.name(R)}scopeValue(R,N){const Q=this._extScope.value(R,N);return(this._values[Q.prefix]||(this._values[Q.prefix]=new Set)).add(Q),Q}getScopeValue(R,N){return this._extScope.getValue(R,N)}scopeRefs(R){return this._extScope.scopeRefs(R,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(R,N,Q,j){const K=this._scope.toName(N);return Q!==void 0&&j&&(this._constants[K.str]=Q),this._leafNode(new o(R,K,Q)),K}const(R,N,Q){return this._def(s.varKinds.const,R,N,Q)}let(R,N,Q){return this._def(s.varKinds.let,R,N,Q)}var(R,N,Q){return this._def(s.varKinds.var,R,N,Q)}assign(R,N,Q){return this._leafNode(new l(R,N,Q))}add(R,N){return this._leafNode(new i(R,e.operators.ADD,N))}code(R){return typeof R=="function"?R():R!==t.nil&&this._leafNode(new p(R)),this}object(...R){const N=["{"];for(const[Q,j]of R)N.length>1&&N.push(","),N.push(Q),(Q!==j||this.opts.es5)&&(N.push(":"),(0,t.addCodeArg)(N,j));return N.push("}"),new t._Code(N)}if(R,N,Q){if(this._blockNode(new h(R)),N&&Q)this.code(N).else().code(Q).endIf();else if(N)this.code(N).endIf();else if(Q)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(R){return this._elseNode(new h(R))}else(){return this._elseNode(new v)}endIf(){return this._endBlockNode(h,v)}_for(R,N){return this._blockNode(R),N&&this.code(N).endFor(),this}for(R,N){return this._for(new _(R),N)}forRange(R,N,Q,j,K=this.opts.es5?s.varKinds.var:s.varKinds.let){const se=this._scope.toName(R);return this._for(new y(K,se,N,Q),()=>j(se))}forOf(R,N,Q,j=s.varKinds.const){const K=this._scope.toName(R);if(this.opts.es5){const se=N instanceof t.Name?N:this.var("_arr",N);return this.forRange("_i",0,(0,t._)`${se}.length`,Z=>{this.var(K,(0,t._)`${se}[${Z}]`),Q(K)})}return this._for(new w("of",j,K,N),()=>Q(K))}forIn(R,N,Q,j=this.opts.es5?s.varKinds.var:s.varKinds.const){if(this.opts.ownProperties)return this.forOf(R,(0,t._)`Object.keys(${N})`,Q);const K=this._scope.toName(R);return this._for(new w("in",j,K,N),()=>Q(K))}endFor(){return this._endBlockNode(m)}label(R){return this._leafNode(new c(R))}break(R){return this._leafNode(new u(R))}return(R){const N=new E;if(this._blockNode(N),this.code(R),N.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(E)}try(R,N,Q){if(!N&&!Q)throw new Error('CodeGen: "try" without "catch" and "finally"');const j=new I;if(this._blockNode(j),this.code(R),N){const K=this.name("e");this._currNode=j.catch=new L(K),N(K)}return Q&&(this._currNode=j.finally=new C,this.code(Q)),this._endBlockNode(L,C)}throw(R){return this._leafNode(new d(R))}block(R,N){return this._blockStarts.push(this._nodes.length),R&&this.code(R).endBlock(N),this}endBlock(R){const N=this._blockStarts.pop();if(N===void 0)throw new Error("CodeGen: not in self-balancing block");const Q=this._nodes.length-N;if(Q<0||R!==void 0&&Q!==R)throw new Error(`CodeGen: wrong number of nodes: ${Q} vs ${R} expected`);return this._nodes.length=N,this}func(R,N=t.nil,Q,j){return this._blockNode(new x(R,N,Q)),j&&this.code(j).endFunc(),this}endFunc(){return this._endBlockNode(x)}optimize(R=1){for(;R-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(R){return this._currNode.nodes.push(R),this}_blockNode(R){this._currNode.nodes.push(R),this._nodes.push(R)}_endBlockNode(R,N){const Q=this._currNode;if(Q instanceof R||N&&Q instanceof N)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${N?`${R.kind}/${N.kind}`:R.kind}"`)}_elseNode(R){const N=this._currNode;if(!(N instanceof h))throw new Error('CodeGen: "else" without "if"');return this._currNode=N.else=R,this}get _root(){return this._nodes[0]}get _currNode(){const R=this._nodes;return R[R.length-1]}set _currNode(R){const N=this._nodes;N[N.length-1]=R}}e.CodeGen=k;function S(G,R){for(const N in R)G[N]=(G[N]||0)+(R[N]||0);return G}function $(G,R){return R instanceof t._CodeOrName?S(G,R.names):G}function z(G,R,N){if(G instanceof t.Name)return Q(G);if(!j(G))return G;return new t._Code(G._items.reduce((K,se)=>(se instanceof t.Name&&(se=Q(se)),se instanceof t._Code?K.push(...se._items):K.push(se),K),[]));function Q(K){const se=N[K.str];return se===void 0||R[K.str]!==1?K:(delete R[K.str],se)}function j(K){return K instanceof t._Code&&K._items.some(se=>se instanceof t.Name&&R[se.str]===1&&N[se.str]!==void 0)}}function H(G,R){for(const N in R)G[N]=(G[N]||0)-(R[N]||0)}function Y(G){return typeof G=="boolean"||typeof G=="number"||G===null?!G:(0,t._)`!${ee(G)}`}e.not=Y;const J=V(e.operators.AND);function W(...G){return G.reduce(J)}e.and=W;const ie=V(e.operators.OR);function X(...G){return G.reduce(ie)}e.or=X;function V(G){return(R,N)=>R===t.nil?N:N===t.nil?R:(0,t._)`${ee(R)} ${G} ${ee(N)}`}function ee(G){return G instanceof t.Name?G:(0,t._)`(${G})`}})(ro)),ro}var we={},Dl;function Ce(){if(Dl)return we;Dl=1,Object.defineProperty(we,"__esModule",{value:!0}),we.checkStrictMode=we.getErrorPath=we.Type=we.useFunc=we.setEvaluated=we.evaluatedPropsToName=we.mergeEvaluated=we.eachItem=we.unescapeJsonPointer=we.escapeJsonPointer=we.escapeFragment=we.unescapeFragment=we.schemaRefOrVal=we.schemaHasRulesButRef=we.schemaHasRules=we.checkUnknownRules=we.alwaysValidSchema=we.toHash=void 0;const e=Se(),t=rr();function s(w){const x={};for(const E of w)x[E]=!0;return x}we.toHash=s;function a(w,x){return typeof x=="boolean"?x:Object.keys(x).length===0?!0:(n(w,x),!r(x,w.self.RULES.all))}we.alwaysValidSchema=a;function n(w,x=w.schema){const{opts:E,self:I}=w;if(!E.strictSchema||typeof x=="boolean")return;const L=I.RULES.keywords;for(const C in x)L[C]||y(w,`unknown keyword: "${C}"`)}we.checkUnknownRules=n;function r(w,x){if(typeof w=="boolean")return!w;for(const E in w)if(x[E])return!0;return!1}we.schemaHasRules=r;function o(w,x){if(typeof w=="boolean")return!w;for(const E in w)if(E!=="$ref"&&x.all[E])return!0;return!1}we.schemaHasRulesButRef=o;function l({topSchemaRef:w,schemaPath:x},E,I,L){if(!L){if(typeof E=="number"||typeof E=="boolean")return E;if(typeof E=="string")return(0,e._)`${E}`}return(0,e._)`${w}${x}${(0,e.getProperty)(I)}`}we.schemaRefOrVal=l;function i(w){return d(decodeURIComponent(w))}we.unescapeFragment=i;function c(w){return encodeURIComponent(u(w))}we.escapeFragment=c;function u(w){return typeof w=="number"?`${w}`:w.replace(/~/g,"~0").replace(/\//g,"~1")}we.escapeJsonPointer=u;function d(w){return w.replace(/~1/g,"/").replace(/~0/g,"~")}we.unescapeJsonPointer=d;function p(w,x){if(Array.isArray(w))for(const E of w)x(E);else x(w)}we.eachItem=p;function f({mergeNames:w,mergeToName:x,mergeValues:E,resultToName:I}){return(L,C,k,S)=>{const $=k===void 0?C:k instanceof e.Name?(C instanceof e.Name?w(L,C,k):x(L,C,k),k):C instanceof e.Name?(x(L,k,C),C):E(C,k);return S===e.Name&&!($ instanceof e.Name)?I(L,$):$}}we.mergeEvaluated={props:f({mergeNames:(w,x,E)=>w.if((0,e._)`${E} !== true && ${x} !== undefined`,()=>{w.if((0,e._)`${x} === true`,()=>w.assign(E,!0),()=>w.assign(E,(0,e._)`${E} || {}`).code((0,e._)`Object.assign(${E}, ${x})`))}),mergeToName:(w,x,E)=>w.if((0,e._)`${E} !== true`,()=>{x===!0?w.assign(E,!0):(w.assign(E,(0,e._)`${E} || {}`),b(w,E,x))}),mergeValues:(w,x)=>w===!0?!0:{...w,...x},resultToName:g}),items:f({mergeNames:(w,x,E)=>w.if((0,e._)`${E} !== true && ${x} !== undefined`,()=>w.assign(E,(0,e._)`${x} === true ? true : ${E} > ${x} ? ${E} : ${x}`)),mergeToName:(w,x,E)=>w.if((0,e._)`${E} !== true`,()=>w.assign(E,x===!0?!0:(0,e._)`${E} > ${x} ? ${E} : ${x}`)),mergeValues:(w,x)=>w===!0?!0:Math.max(w,x),resultToName:(w,x)=>w.var("items",x)})};function g(w,x){if(x===!0)return w.var("props",!0);const E=w.var("props",(0,e._)`{}`);return x!==void 0&&b(w,E,x),E}we.evaluatedPropsToName=g;function b(w,x,E){Object.keys(E).forEach(I=>w.assign((0,e._)`${x}${(0,e.getProperty)(I)}`,!0))}we.setEvaluated=b;const v={};function h(w,x){return w.scopeValue("func",{ref:x,code:v[x.code]||(v[x.code]=new t._Code(x.code))})}we.useFunc=h;var m;(function(w){w[w.Num=0]="Num",w[w.Str=1]="Str"})(m||(we.Type=m={}));function _(w,x,E){if(w instanceof e.Name){const I=x===m.Num;return E?I?(0,e._)`"[" + ${w} + "]"`:(0,e._)`"['" + ${w} + "']"`:I?(0,e._)`"/" + ${w}`:(0,e._)`"/" + ${w}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return E?(0,e.getProperty)(w).toString():"/"+u(w)}we.getErrorPath=_;function y(w,x,E=w.opts.strictSchema){if(E){if(x=`strict mode: ${x}`,E===!0)throw new Error(x);w.self.logger.warn(x)}}return we.checkStrictMode=y,we}var Wa={},Il;function ks(){if(Il)return Wa;Il=1,Object.defineProperty(Wa,"__esModule",{value:!0});const e=Se(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return Wa.default=t,Wa}var Nl;function kr(){return Nl||(Nl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=Se(),s=Ce(),a=ks();e.keywordError={message:({keyword:v})=>(0,t.str)`must pass "${v}" keyword validation`},e.keyword$DataError={message:({keyword:v,schemaType:h})=>h?(0,t.str)`"${v}" keyword must be ${h} ($data)`:(0,t.str)`"${v}" keyword is invalid ($data)`};function n(v,h=e.keywordError,m,_){const{it:y}=v,{gen:w,compositeRule:x,allErrors:E}=y,I=d(v,h,m);_??(x||E)?i(w,I):c(y,(0,t._)`[${I}]`)}e.reportError=n;function r(v,h=e.keywordError,m){const{it:_}=v,{gen:y,compositeRule:w,allErrors:x}=_,E=d(v,h,m);i(y,E),w||x||c(_,a.default.vErrors)}e.reportExtraError=r;function o(v,h){v.assign(a.default.errors,h),v.if((0,t._)`${a.default.vErrors} !== null`,()=>v.if(h,()=>v.assign((0,t._)`${a.default.vErrors}.length`,h),()=>v.assign(a.default.vErrors,null)))}e.resetErrorsCount=o;function l({gen:v,keyword:h,schemaValue:m,data:_,errsCount:y,it:w}){if(y===void 0)throw new Error("ajv implementation error");const x=v.name("err");v.forRange("i",y,a.default.errors,E=>{v.const(x,(0,t._)`${a.default.vErrors}[${E}]`),v.if((0,t._)`${x}.instancePath === undefined`,()=>v.assign((0,t._)`${x}.instancePath`,(0,t.strConcat)(a.default.instancePath,w.errorPath))),v.assign((0,t._)`${x}.schemaPath`,(0,t.str)`${w.errSchemaPath}/${h}`),w.opts.verbose&&(v.assign((0,t._)`${x}.schema`,m),v.assign((0,t._)`${x}.data`,_))})}e.extendErrors=l;function i(v,h){const m=v.const("err",h);v.if((0,t._)`${a.default.vErrors} === null`,()=>v.assign(a.default.vErrors,(0,t._)`[${m}]`),(0,t._)`${a.default.vErrors}.push(${m})`),v.code((0,t._)`${a.default.errors}++`)}function c(v,h){const{gen:m,validateName:_,schemaEnv:y}=v;y.$async?m.throw((0,t._)`new ${v.ValidationError}(${h})`):(m.assign((0,t._)`${_}.errors`,h),m.return(!1))}const u={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function d(v,h,m){const{createErrors:_}=v.it;return _===!1?(0,t._)`{}`:p(v,h,m)}function p(v,h,m={}){const{gen:_,it:y}=v,w=[f(y,m),g(v,m)];return b(v,h,w),_.object(...w)}function f({errorPath:v},{instancePath:h}){const m=h?(0,t.str)`${v}${(0,s.getErrorPath)(h,s.Type.Str)}`:v;return[a.default.instancePath,(0,t.strConcat)(a.default.instancePath,m)]}function g({keyword:v,it:{errSchemaPath:h}},{schemaPath:m,parentSchema:_}){let y=_?h:(0,t.str)`${h}/${v}`;return m&&(y=(0,t.str)`${y}${(0,s.getErrorPath)(m,s.Type.Str)}`),[u.schemaPath,y]}function b(v,{params:h,message:m},_){const{keyword:y,data:w,schemaValue:x,it:E}=v,{opts:I,propertyName:L,topSchemaRef:C,schemaPath:k}=E;_.push([u.keyword,y],[u.params,typeof h=="function"?h(v):h||(0,t._)`{}`]),I.messages&&_.push([u.message,typeof m=="function"?m(v):m]),I.verbose&&_.push([u.schema,x],[u.parentSchema,(0,t._)`${C}${k}`],[a.default.data,w]),L&&_.push([u.propertyName,L])}})(no)),no}var Bl;function sw(){if(Bl)return Os;Bl=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.boolOrEmptySchema=Os.topBoolOrEmptySchema=void 0;const e=kr(),t=Se(),s=ks(),a={message:"boolean schema is false"};function n(l){const{gen:i,schema:c,validateName:u}=l;c===!1?o(l,!1):typeof c=="object"&&c.$async===!0?i.return(s.default.data):(i.assign((0,t._)`${u}.errors`,null),i.return(!0))}Os.topBoolOrEmptySchema=n;function r(l,i){const{gen:c,schema:u}=l;u===!1?(c.var(i,!1),o(l)):c.var(i,!0)}Os.boolOrEmptySchema=r;function o(l,i){const{gen:c,data:u}=l,d={gen:c,keyword:"false schema",data:u,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:l};(0,e.reportError)(d,a,void 0,i)}return Os}var Je={},$s={},Fl;function Vu(){if(Fl)return $s;Fl=1,Object.defineProperty($s,"__esModule",{value:!0}),$s.getRules=$s.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function s(n){return typeof n=="string"&&t.has(n)}$s.isJSONType=s;function a(){const n={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...n,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},n.number,n.string,n.array,n.object],post:{rules:[]},all:{},keywords:{}}}return $s.getRules=a,$s}var Yt={},zl;function Gu(){if(zl)return Yt;zl=1,Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.shouldUseRule=Yt.shouldUseGroup=Yt.schemaHasRulesForType=void 0;function e({schema:a,self:n},r){const o=n.RULES.types[r];return o&&o!==!0&&t(a,o)}Yt.schemaHasRulesForType=e;function t(a,n){return n.rules.some(r=>s(a,r))}Yt.shouldUseGroup=t;function s(a,n){var r;return a[n.keyword]!==void 0||((r=n.definition.implements)===null||r===void 0?void 0:r.some(o=>a[o]!==void 0))}return Yt.shouldUseRule=s,Yt}var Hl;function or(){if(Hl)return Je;Hl=1,Object.defineProperty(Je,"__esModule",{value:!0}),Je.reportTypeError=Je.checkDataTypes=Je.checkDataType=Je.coerceAndCheckDataType=Je.getJSONTypes=Je.getSchemaTypes=Je.DataType=void 0;const e=Vu(),t=Gu(),s=kr(),a=Se(),n=Ce();var r;(function(m){m[m.Correct=0]="Correct",m[m.Wrong=1]="Wrong"})(r||(Je.DataType=r={}));function o(m){const _=l(m.type);if(_.includes("null")){if(m.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!_.length&&m.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');m.nullable===!0&&_.push("null")}return _}Je.getSchemaTypes=o;function l(m){const _=Array.isArray(m)?m:m?[m]:[];if(_.every(e.isJSONType))return _;throw new Error("type must be JSONType or JSONType[]: "+_.join(","))}Je.getJSONTypes=l;function i(m,_){const{gen:y,data:w,opts:x}=m,E=u(_,x.coerceTypes),I=_.length>0&&!(E.length===0&&_.length===1&&(0,t.schemaHasRulesForType)(m,_[0]));if(I){const L=g(_,w,x.strictNumbers,r.Wrong);y.if(L,()=>{E.length?d(m,_,E):v(m)})}return I}Je.coerceAndCheckDataType=i;const c=new Set(["string","number","integer","boolean","null"]);function u(m,_){return _?m.filter(y=>c.has(y)||_==="array"&&y==="array"):[]}function d(m,_,y){const{gen:w,data:x,opts:E}=m,I=w.let("dataType",(0,a._)`typeof ${x}`),L=w.let("coerced",(0,a._)`undefined`);E.coerceTypes==="array"&&w.if((0,a._)`${I} == 'object' && Array.isArray(${x}) && ${x}.length == 1`,()=>w.assign(x,(0,a._)`${x}[0]`).assign(I,(0,a._)`typeof ${x}`).if(g(_,x,E.strictNumbers),()=>w.assign(L,x))),w.if((0,a._)`${L} !== undefined`);for(const k of y)(c.has(k)||k==="array"&&E.coerceTypes==="array")&&C(k);w.else(),v(m),w.endIf(),w.if((0,a._)`${L} !== undefined`,()=>{w.assign(x,L),p(m,L)});function C(k){switch(k){case"string":w.elseIf((0,a._)`${I} == "number" || ${I} == "boolean"`).assign(L,(0,a._)`"" + ${x}`).elseIf((0,a._)`${x} === null`).assign(L,(0,a._)`""`);return;case"number":w.elseIf((0,a._)`${I} == "boolean" || ${x} === null
              || (${I} == "string" && ${x} && ${x} == +${x})`).assign(L,(0,a._)`+${x}`);return;case"integer":w.elseIf((0,a._)`${I} === "boolean" || ${x} === null
              || (${I} === "string" && ${x} && ${x} == +${x} && !(${x} % 1))`).assign(L,(0,a._)`+${x}`);return;case"boolean":w.elseIf((0,a._)`${x} === "false" || ${x} === 0 || ${x} === null`).assign(L,!1).elseIf((0,a._)`${x} === "true" || ${x} === 1`).assign(L,!0);return;case"null":w.elseIf((0,a._)`${x} === "" || ${x} === 0 || ${x} === false`),w.assign(L,null);return;case"array":w.elseIf((0,a._)`${I} === "string" || ${I} === "number"
              || ${I} === "boolean" || ${x} === null`).assign(L,(0,a._)`[${x}]`)}}}function p({gen:m,parentData:_,parentDataProperty:y},w){m.if((0,a._)`${_} !== undefined`,()=>m.assign((0,a._)`${_}[${y}]`,w))}function f(m,_,y,w=r.Correct){const x=w===r.Correct?a.operators.EQ:a.operators.NEQ;let E;switch(m){case"null":return(0,a._)`${_} ${x} null`;case"array":E=(0,a._)`Array.isArray(${_})`;break;case"object":E=(0,a._)`${_} && typeof ${_} == "object" && !Array.isArray(${_})`;break;case"integer":E=I((0,a._)`!(${_} % 1) && !isNaN(${_})`);break;case"number":E=I();break;default:return(0,a._)`typeof ${_} ${x} ${m}`}return w===r.Correct?E:(0,a.not)(E);function I(L=a.nil){return(0,a.and)((0,a._)`typeof ${_} == "number"`,L,y?(0,a._)`isFinite(${_})`:a.nil)}}Je.checkDataType=f;function g(m,_,y,w){if(m.length===1)return f(m[0],_,y,w);let x;const E=(0,n.toHash)(m);if(E.array&&E.object){const I=(0,a._)`typeof ${_} != "object"`;x=E.null?I:(0,a._)`!${_} || ${I}`,delete E.null,delete E.array,delete E.object}else x=a.nil;E.number&&delete E.integer;for(const I in E)x=(0,a.and)(x,f(I,_,y,w));return x}Je.checkDataTypes=g;const b={message:({schema:m})=>`must be ${m}`,params:({schema:m,schemaValue:_})=>typeof m=="string"?(0,a._)`{type: ${m}}`:(0,a._)`{type: ${_}}`};function v(m){const _=h(m);(0,s.reportError)(_,b)}Je.reportTypeError=v;function h(m){const{gen:_,data:y,schema:w}=m,x=(0,n.schemaRefOrVal)(m,w,"type");return{gen:_,keyword:"type",data:y,schema:w.type,schemaCode:x,schemaValue:x,parentSchema:w,params:{},it:m}}return Je}var ua={},jl;function aw(){if(jl)return ua;jl=1,Object.defineProperty(ua,"__esModule",{value:!0}),ua.assignDefaults=void 0;const e=Se(),t=Ce();function s(n,r){const{properties:o,items:l}=n.schema;if(r==="object"&&o)for(const i in o)a(n,i,o[i].default);else r==="array"&&Array.isArray(l)&&l.forEach((i,c)=>a(n,c,i.default))}ua.assignDefaults=s;function a(n,r,o){const{gen:l,compositeRule:i,data:c,opts:u}=n;if(o===void 0)return;const d=(0,e._)`${c}${(0,e.getProperty)(r)}`;if(i){(0,t.checkStrictMode)(n,`default is ignored for: ${d}`);return}let p=(0,e._)`${d} === undefined`;u.useDefaults==="empty"&&(p=(0,e._)`${p} || ${d} === null || ${d} === ""`),l.if(p,(0,e._)`${d} = ${(0,e.stringify)(o)}`)}return ua}var At={},Le={},Ul;function $t(){if(Ul)return Le;Ul=1,Object.defineProperty(Le,"__esModule",{value:!0}),Le.validateUnion=Le.validateArray=Le.usePattern=Le.callValidateCode=Le.schemaProperties=Le.allSchemaProperties=Le.noPropertyInData=Le.propertyInData=Le.isOwnProperty=Le.hasPropFunc=Le.reportMissingProp=Le.checkMissingProp=Le.checkReportMissingProp=void 0;const e=Se(),t=Ce(),s=ks(),a=Ce();function n(m,_){const{gen:y,data:w,it:x}=m;y.if(u(y,w,_,x.opts.ownProperties),()=>{m.setParams({missingProperty:(0,e._)`${_}`},!0),m.error()})}Le.checkReportMissingProp=n;function r({gen:m,data:_,it:{opts:y}},w,x){return(0,e.or)(...w.map(E=>(0,e.and)(u(m,_,E,y.ownProperties),(0,e._)`${x} = ${E}`)))}Le.checkMissingProp=r;function o(m,_){m.setParams({missingProperty:_},!0),m.error()}Le.reportMissingProp=o;function l(m){return m.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}Le.hasPropFunc=l;function i(m,_,y){return(0,e._)`${l(m)}.call(${_}, ${y})`}Le.isOwnProperty=i;function c(m,_,y,w){const x=(0,e._)`${_}${(0,e.getProperty)(y)} !== undefined`;return w?(0,e._)`${x} && ${i(m,_,y)}`:x}Le.propertyInData=c;function u(m,_,y,w){const x=(0,e._)`${_}${(0,e.getProperty)(y)} === undefined`;return w?(0,e.or)(x,(0,e.not)(i(m,_,y))):x}Le.noPropertyInData=u;function d(m){return m?Object.keys(m).filter(_=>_!=="__proto__"):[]}Le.allSchemaProperties=d;function p(m,_){return d(_).filter(y=>!(0,t.alwaysValidSchema)(m,_[y]))}Le.schemaProperties=p;function f({schemaCode:m,data:_,it:{gen:y,topSchemaRef:w,schemaPath:x,errorPath:E},it:I},L,C,k){const S=k?(0,e._)`${m}, ${_}, ${w}${x}`:_,$=[[s.default.instancePath,(0,e.strConcat)(s.default.instancePath,E)],[s.default.parentData,I.parentData],[s.default.parentDataProperty,I.parentDataProperty],[s.default.rootData,s.default.rootData]];I.opts.dynamicRef&&$.push([s.default.dynamicAnchors,s.default.dynamicAnchors]);const z=(0,e._)`${S}, ${y.object(...$)}`;return C!==e.nil?(0,e._)`${L}.call(${C}, ${z})`:(0,e._)`${L}(${z})`}Le.callValidateCode=f;const g=(0,e._)`new RegExp`;function b({gen:m,it:{opts:_}},y){const w=_.unicodeRegExp?"u":"",{regExp:x}=_.code,E=x(y,w);return m.scopeValue("pattern",{key:E.toString(),ref:E,code:(0,e._)`${x.code==="new RegExp"?g:(0,a.useFunc)(m,x)}(${y}, ${w})`})}Le.usePattern=b;function v(m){const{gen:_,data:y,keyword:w,it:x}=m,E=_.name("valid");if(x.allErrors){const L=_.let("valid",!0);return I(()=>_.assign(L,!1)),L}return _.var(E,!0),I(()=>_.break()),E;function I(L){const C=_.const("len",(0,e._)`${y}.length`);_.forRange("i",0,C,k=>{m.subschema({keyword:w,dataProp:k,dataPropType:t.Type.Num},E),_.if((0,e.not)(E),L)})}}Le.validateArray=v;function h(m){const{gen:_,schema:y,keyword:w,it:x}=m;if(!Array.isArray(y))throw new Error("ajv implementation error");if(y.some(C=>(0,t.alwaysValidSchema)(x,C))&&!x.opts.unevaluated)return;const I=_.let("valid",!1),L=_.name("_valid");_.block(()=>y.forEach((C,k)=>{const S=m.subschema({keyword:w,schemaProp:k,compositeRule:!0},L);_.assign(I,(0,e._)`${I} || ${L}`),m.mergeValidEvaluated(S,L)||_.if((0,e.not)(I))})),m.result(I,()=>m.reset(),()=>m.error(!0))}return Le.validateUnion=h,Le}var ql;function nw(){if(ql)return At;ql=1,Object.defineProperty(At,"__esModule",{value:!0}),At.validateKeywordUsage=At.validSchemaType=At.funcKeywordCode=At.macroKeywordCode=void 0;const e=Se(),t=ks(),s=$t(),a=kr();function n(p,f){const{gen:g,keyword:b,schema:v,parentSchema:h,it:m}=p,_=f.macro.call(m.self,v,h,m),y=c(g,b,_);m.opts.validateSchema!==!1&&m.self.validateSchema(_,!0);const w=g.name("valid");p.subschema({schema:_,schemaPath:e.nil,errSchemaPath:`${m.errSchemaPath}/${b}`,topSchemaRef:y,compositeRule:!0},w),p.pass(w,()=>p.error(!0))}At.macroKeywordCode=n;function r(p,f){var g;const{gen:b,keyword:v,schema:h,parentSchema:m,$data:_,it:y}=p;i(y,f);const w=!_&&f.compile?f.compile.call(y.self,h,m,y):f.validate,x=c(b,v,w),E=b.let("valid");p.block$data(E,I),p.ok((g=f.valid)!==null&&g!==void 0?g:E);function I(){if(f.errors===!1)k(),f.modifying&&o(p),S(()=>p.error());else{const $=f.async?L():C();f.modifying&&o(p),S(()=>l(p,$))}}function L(){const $=b.let("ruleErrs",null);return b.try(()=>k((0,e._)`await `),z=>b.assign(E,!1).if((0,e._)`${z} instanceof ${y.ValidationError}`,()=>b.assign($,(0,e._)`${z}.errors`),()=>b.throw(z))),$}function C(){const $=(0,e._)`${x}.errors`;return b.assign($,null),k(e.nil),$}function k($=f.async?(0,e._)`await `:e.nil){const z=y.opts.passContext?t.default.this:t.default.self,H=!("compile"in f&&!_||f.schema===!1);b.assign(E,(0,e._)`${$}${(0,s.callValidateCode)(p,x,z,H)}`,f.modifying)}function S($){var z;b.if((0,e.not)((z=f.valid)!==null&&z!==void 0?z:E),$)}}At.funcKeywordCode=r;function o(p){const{gen:f,data:g,it:b}=p;f.if(b.parentData,()=>f.assign(g,(0,e._)`${b.parentData}[${b.parentDataProperty}]`))}function l(p,f){const{gen:g}=p;g.if((0,e._)`Array.isArray(${f})`,()=>{g.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,a.extendErrors)(p)},()=>p.error())}function i({schemaEnv:p},f){if(f.async&&!p.$async)throw new Error("async keyword in sync schema")}function c(p,f,g){if(g===void 0)throw new Error(`keyword "${f}" failed to compile`);return p.scopeValue("keyword",typeof g=="function"?{ref:g}:{ref:g,code:(0,e.stringify)(g)})}function u(p,f,g=!1){return!f.length||f.some(b=>b==="array"?Array.isArray(p):b==="object"?p&&typeof p=="object"&&!Array.isArray(p):typeof p==b||g&&typeof p>"u")}At.validSchemaType=u;function d({schema:p,opts:f,self:g,errSchemaPath:b},v,h){if(Array.isArray(v.keyword)?!v.keyword.includes(h):v.keyword!==h)throw new Error("ajv implementation error");const m=v.dependencies;if(m?.some(_=>!Object.prototype.hasOwnProperty.call(p,_)))throw new Error(`parent schema must have dependencies of ${h}: ${m.join(",")}`);if(v.validateSchema&&!v.validateSchema(p[h])){const y=`keyword "${h}" value is invalid at path "${b}": `+g.errorsText(v.validateSchema.errors);if(f.validateSchema==="log")g.logger.error(y);else throw new Error(y)}}return At.validateKeywordUsage=d,At}var Wt={},Vl;function rw(){if(Vl)return Wt;Vl=1,Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.extendSubschemaMode=Wt.extendSubschemaData=Wt.getSubschema=void 0;const e=Se(),t=Ce();function s(r,{keyword:o,schemaProp:l,schema:i,schemaPath:c,errSchemaPath:u,topSchemaRef:d}){if(o!==void 0&&i!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(o!==void 0){const p=r.schema[o];return l===void 0?{schema:p,schemaPath:(0,e._)`${r.schemaPath}${(0,e.getProperty)(o)}`,errSchemaPath:`${r.errSchemaPath}/${o}`}:{schema:p[l],schemaPath:(0,e._)`${r.schemaPath}${(0,e.getProperty)(o)}${(0,e.getProperty)(l)}`,errSchemaPath:`${r.errSchemaPath}/${o}/${(0,t.escapeFragment)(l)}`}}if(i!==void 0){if(c===void 0||u===void 0||d===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:i,schemaPath:c,topSchemaRef:d,errSchemaPath:u}}throw new Error('either "keyword" or "schema" must be passed')}Wt.getSubschema=s;function a(r,o,{dataProp:l,dataPropType:i,data:c,dataTypes:u,propertyName:d}){if(c!==void 0&&l!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:p}=o;if(l!==void 0){const{errorPath:g,dataPathArr:b,opts:v}=o,h=p.let("data",(0,e._)`${o.data}${(0,e.getProperty)(l)}`,!0);f(h),r.errorPath=(0,e.str)`${g}${(0,t.getErrorPath)(l,i,v.jsPropertySyntax)}`,r.parentDataProperty=(0,e._)`${l}`,r.dataPathArr=[...b,r.parentDataProperty]}if(c!==void 0){const g=c instanceof e.Name?c:p.let("data",c,!0);f(g),d!==void 0&&(r.propertyName=d)}u&&(r.dataTypes=u);function f(g){r.data=g,r.dataLevel=o.dataLevel+1,r.dataTypes=[],o.definedProperties=new Set,r.parentData=o.data,r.dataNames=[...o.dataNames,g]}}Wt.extendSubschemaData=a;function n(r,{jtdDiscriminator:o,jtdMetadata:l,compositeRule:i,createErrors:c,allErrors:u}){i!==void 0&&(r.compositeRule=i),c!==void 0&&(r.createErrors=c),u!==void 0&&(r.allErrors=u),r.jtdDiscriminator=o,r.jtdMetadata=l}return Wt.extendSubschemaMode=n,Wt}var at={},lo,Gl;function Ku(){return Gl||(Gl=1,lo=function e(t,s){if(t===s)return!0;if(t&&s&&typeof t=="object"&&typeof s=="object"){if(t.constructor!==s.constructor)return!1;var a,n,r;if(Array.isArray(t)){if(a=t.length,a!=s.length)return!1;for(n=a;n--!==0;)if(!e(t[n],s[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();if(r=Object.keys(t),a=r.length,a!==Object.keys(s).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(s,r[n]))return!1;for(n=a;n--!==0;){var o=r[n];if(!e(t[o],s[o]))return!1}return!0}return t!==t&&s!==s}),lo}var co={exports:{}},Kl;function ow(){if(Kl)return co.exports;Kl=1;var e=co.exports=function(a,n,r){typeof n=="function"&&(r=n,n={}),r=n.cb||r;var o=typeof r=="function"?r:r.pre||function(){},l=r.post||function(){};t(n,o,l,a,"",a)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(a,n,r,o,l,i,c,u,d,p){if(o&&typeof o=="object"&&!Array.isArray(o)){n(o,l,i,c,u,d,p);for(var f in o){var g=o[f];if(Array.isArray(g)){if(f in e.arrayKeywords)for(var b=0;b<g.length;b++)t(a,n,r,g[b],l+"/"+f+"/"+b,i,l,f,o,b)}else if(f in e.propsKeywords){if(g&&typeof g=="object")for(var v in g)t(a,n,r,g[v],l+"/"+f+"/"+s(v),i,l,f,o,v)}else(f in e.keywords||a.allKeys&&!(f in e.skipKeywords))&&t(a,n,r,g,l+"/"+f,i,l,f,o)}r(o,l,i,c,u,d,p)}}function s(a){return a.replace(/~/g,"~0").replace(/\//g,"~1")}return co.exports}var Yl;function Er(){if(Yl)return at;Yl=1,Object.defineProperty(at,"__esModule",{value:!0}),at.getSchemaRefs=at.resolveUrl=at.normalizeId=at._getFullPath=at.getFullPath=at.inlineRef=void 0;const e=Ce(),t=Ku(),s=ow(),a=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function n(b,v=!0){return typeof b=="boolean"?!0:v===!0?!o(b):v?l(b)<=v:!1}at.inlineRef=n;const r=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function o(b){for(const v in b){if(r.has(v))return!0;const h=b[v];if(Array.isArray(h)&&h.some(o)||typeof h=="object"&&o(h))return!0}return!1}function l(b){let v=0;for(const h in b){if(h==="$ref")return 1/0;if(v++,!a.has(h)&&(typeof b[h]=="object"&&(0,e.eachItem)(b[h],m=>v+=l(m)),v===1/0))return 1/0}return v}function i(b,v="",h){h!==!1&&(v=d(v));const m=b.parse(v);return c(b,m)}at.getFullPath=i;function c(b,v){return b.serialize(v).split("#")[0]+"#"}at._getFullPath=c;const u=/#\/?$/;function d(b){return b?b.replace(u,""):""}at.normalizeId=d;function p(b,v,h){return h=d(h),b.resolve(v,h)}at.resolveUrl=p;const f=/^[a-z_][-a-z0-9._]*$/i;function g(b,v){if(typeof b=="boolean")return{};const{schemaId:h,uriResolver:m}=this.opts,_=d(b[h]||v),y={"":_},w=i(m,_,!1),x={},E=new Set;return s(b,{allKeys:!0},(C,k,S,$)=>{if($===void 0)return;const z=w+k;let H=y[$];typeof C[h]=="string"&&(H=Y.call(this,C[h])),J.call(this,C.$anchor),J.call(this,C.$dynamicAnchor),y[k]=H;function Y(W){const ie=this.opts.uriResolver.resolve;if(W=d(H?ie(H,W):W),E.has(W))throw L(W);E.add(W);let X=this.refs[W];return typeof X=="string"&&(X=this.refs[X]),typeof X=="object"?I(C,X.schema,W):W!==d(z)&&(W[0]==="#"?(I(C,x[W],W),x[W]=C):this.refs[W]=z),W}function J(W){if(typeof W=="string"){if(!f.test(W))throw new Error(`invalid anchor "${W}"`);Y.call(this,`#${W}`)}}}),x;function I(C,k,S){if(k!==void 0&&!t(C,k))throw L(S)}function L(C){return new Error(`reference "${C}" resolves to more than one schema`)}}return at.getSchemaRefs=g,at}var Wl;function Ar(){if(Wl)return Kt;Wl=1,Object.defineProperty(Kt,"__esModule",{value:!0}),Kt.getData=Kt.KeywordCxt=Kt.validateFunctionCode=void 0;const e=sw(),t=or(),s=Gu(),a=or(),n=aw(),r=nw(),o=rw(),l=Se(),i=ks(),c=Er(),u=Ce(),d=kr();function p(F){if(w(F)&&(E(F),y(F))){v(F);return}f(F,()=>(0,e.topBoolOrEmptySchema)(F))}Kt.validateFunctionCode=p;function f({gen:F,validateName:T,schema:O,schemaEnv:P,opts:M},q){M.code.es5?F.func(T,(0,l._)`${i.default.data}, ${i.default.valCxt}`,P.$async,()=>{F.code((0,l._)`"use strict"; ${m(O,M)}`),b(F,M),F.code(q)}):F.func(T,(0,l._)`${i.default.data}, ${g(M)}`,P.$async,()=>F.code(m(O,M)).code(q))}function g(F){return(0,l._)`{${i.default.instancePath}="", ${i.default.parentData}, ${i.default.parentDataProperty}, ${i.default.rootData}=${i.default.data}${F.dynamicRef?(0,l._)`, ${i.default.dynamicAnchors}={}`:l.nil}}={}`}function b(F,T){F.if(i.default.valCxt,()=>{F.var(i.default.instancePath,(0,l._)`${i.default.valCxt}.${i.default.instancePath}`),F.var(i.default.parentData,(0,l._)`${i.default.valCxt}.${i.default.parentData}`),F.var(i.default.parentDataProperty,(0,l._)`${i.default.valCxt}.${i.default.parentDataProperty}`),F.var(i.default.rootData,(0,l._)`${i.default.valCxt}.${i.default.rootData}`),T.dynamicRef&&F.var(i.default.dynamicAnchors,(0,l._)`${i.default.valCxt}.${i.default.dynamicAnchors}`)},()=>{F.var(i.default.instancePath,(0,l._)`""`),F.var(i.default.parentData,(0,l._)`undefined`),F.var(i.default.parentDataProperty,(0,l._)`undefined`),F.var(i.default.rootData,i.default.data),T.dynamicRef&&F.var(i.default.dynamicAnchors,(0,l._)`{}`)})}function v(F){const{schema:T,opts:O,gen:P}=F;f(F,()=>{O.$comment&&T.$comment&&$(F),C(F),P.let(i.default.vErrors,null),P.let(i.default.errors,0),O.unevaluated&&h(F),I(F),z(F)})}function h(F){const{gen:T,validateName:O}=F;F.evaluated=T.const("evaluated",(0,l._)`${O}.evaluated`),T.if((0,l._)`${F.evaluated}.dynamicProps`,()=>T.assign((0,l._)`${F.evaluated}.props`,(0,l._)`undefined`)),T.if((0,l._)`${F.evaluated}.dynamicItems`,()=>T.assign((0,l._)`${F.evaluated}.items`,(0,l._)`undefined`))}function m(F,T){const O=typeof F=="object"&&F[T.schemaId];return O&&(T.code.source||T.code.process)?(0,l._)`/*# sourceURL=${O} */`:l.nil}function _(F,T){if(w(F)&&(E(F),y(F))){x(F,T);return}(0,e.boolOrEmptySchema)(F,T)}function y({schema:F,self:T}){if(typeof F=="boolean")return!F;for(const O in F)if(T.RULES.all[O])return!0;return!1}function w(F){return typeof F.schema!="boolean"}function x(F,T){const{schema:O,gen:P,opts:M}=F;M.$comment&&O.$comment&&$(F),k(F),S(F);const q=P.const("_errs",i.default.errors);I(F,q),P.var(T,(0,l._)`${q} === ${i.default.errors}`)}function E(F){(0,u.checkUnknownRules)(F),L(F)}function I(F,T){if(F.opts.jtd)return Y(F,[],!1,T);const O=(0,t.getSchemaTypes)(F.schema),P=(0,t.coerceAndCheckDataType)(F,O);Y(F,O,!P,T)}function L(F){const{schema:T,errSchemaPath:O,opts:P,self:M}=F;T.$ref&&P.ignoreKeywordsWithRef&&(0,u.schemaHasRulesButRef)(T,M.RULES)&&M.logger.warn(`$ref: keywords ignored in schema at path "${O}"`)}function C(F){const{schema:T,opts:O}=F;T.default!==void 0&&O.useDefaults&&O.strictSchema&&(0,u.checkStrictMode)(F,"default is ignored in the schema root")}function k(F){const T=F.schema[F.opts.schemaId];T&&(F.baseId=(0,c.resolveUrl)(F.opts.uriResolver,F.baseId,T))}function S(F){if(F.schema.$async&&!F.schemaEnv.$async)throw new Error("async schema in sync schema")}function $({gen:F,schemaEnv:T,schema:O,errSchemaPath:P,opts:M}){const q=O.$comment;if(M.$comment===!0)F.code((0,l._)`${i.default.self}.logger.log(${q})`);else if(typeof M.$comment=="function"){const D=(0,l.str)`${P}/$comment`,B=F.scopeValue("root",{ref:T.root});F.code((0,l._)`${i.default.self}.opts.$comment(${q}, ${D}, ${B}.schema)`)}}function z(F){const{gen:T,schemaEnv:O,validateName:P,ValidationError:M,opts:q}=F;O.$async?T.if((0,l._)`${i.default.errors} === 0`,()=>T.return(i.default.data),()=>T.throw((0,l._)`new ${M}(${i.default.vErrors})`)):(T.assign((0,l._)`${P}.errors`,i.default.vErrors),q.unevaluated&&H(F),T.return((0,l._)`${i.default.errors} === 0`))}function H({gen:F,evaluated:T,props:O,items:P}){O instanceof l.Name&&F.assign((0,l._)`${T}.props`,O),P instanceof l.Name&&F.assign((0,l._)`${T}.items`,P)}function Y(F,T,O,P){const{gen:M,schema:q,data:D,allErrors:B,opts:U,self:ae}=F,{RULES:ne}=ae;if(q.$ref&&(U.ignoreKeywordsWithRef||!(0,u.schemaHasRulesButRef)(q,ne))){M.block(()=>j(F,"$ref",ne.all.$ref.definition));return}U.jtd||W(F,T),M.block(()=>{for(const te of ne.rules)pe(te);pe(ne.post)});function pe(te){(0,s.shouldUseGroup)(q,te)&&(te.type?(M.if((0,a.checkDataType)(te.type,D,U.strictNumbers)),J(F,te),T.length===1&&T[0]===te.type&&O&&(M.else(),(0,a.reportTypeError)(F)),M.endIf()):J(F,te),B||M.if((0,l._)`${i.default.errors} === ${P||0}`))}}function J(F,T){const{gen:O,schema:P,opts:{useDefaults:M}}=F;M&&(0,n.assignDefaults)(F,T.type),O.block(()=>{for(const q of T.rules)(0,s.shouldUseRule)(P,q)&&j(F,q.keyword,q.definition,T.type)})}function W(F,T){F.schemaEnv.meta||!F.opts.strictTypes||(ie(F,T),F.opts.allowUnionTypes||X(F,T),V(F,F.dataTypes))}function ie(F,T){if(T.length){if(!F.dataTypes.length){F.dataTypes=T;return}T.forEach(O=>{G(F.dataTypes,O)||N(F,`type "${O}" not allowed by context "${F.dataTypes.join(",")}"`)}),R(F,T)}}function X(F,T){T.length>1&&!(T.length===2&&T.includes("null"))&&N(F,"use allowUnionTypes to allow union type keyword")}function V(F,T){const O=F.self.RULES.all;for(const P in O){const M=O[P];if(typeof M=="object"&&(0,s.shouldUseRule)(F.schema,M)){const{type:q}=M.definition;q.length&&!q.some(D=>ee(T,D))&&N(F,`missing type "${q.join(",")}" for keyword "${P}"`)}}}function ee(F,T){return F.includes(T)||T==="number"&&F.includes("integer")}function G(F,T){return F.includes(T)||T==="integer"&&F.includes("number")}function R(F,T){const O=[];for(const P of F.dataTypes)G(T,P)?O.push(P):T.includes("integer")&&P==="number"&&O.push("integer");F.dataTypes=O}function N(F,T){const O=F.schemaEnv.baseId+F.errSchemaPath;T+=` at "${O}" (strictTypes)`,(0,u.checkStrictMode)(F,T,F.opts.strictTypes)}class Q{constructor(T,O,P){if((0,r.validateKeywordUsage)(T,O,P),this.gen=T.gen,this.allErrors=T.allErrors,this.keyword=P,this.data=T.data,this.schema=T.schema[P],this.$data=O.$data&&T.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,u.schemaRefOrVal)(T,this.schema,P,this.$data),this.schemaType=O.schemaType,this.parentSchema=T.schema,this.params={},this.it=T,this.def=O,this.$data)this.schemaCode=T.gen.const("vSchema",Z(this.$data,T));else if(this.schemaCode=this.schemaValue,!(0,r.validSchemaType)(this.schema,O.schemaType,O.allowUndefined))throw new Error(`${P} value must be ${JSON.stringify(O.schemaType)}`);("code"in O?O.trackErrors:O.errors!==!1)&&(this.errsCount=T.gen.const("_errs",i.default.errors))}result(T,O,P){this.failResult((0,l.not)(T),O,P)}failResult(T,O,P){this.gen.if(T),P?P():this.error(),O?(this.gen.else(),O(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(T,O){this.failResult((0,l.not)(T),void 0,O)}fail(T){if(T===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(T),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(T){if(!this.$data)return this.fail(T);const{schemaCode:O}=this;this.fail((0,l._)`${O} !== undefined && (${(0,l.or)(this.invalid$data(),T)})`)}error(T,O,P){if(O){this.setParams(O),this._error(T,P),this.setParams({});return}this._error(T,P)}_error(T,O){(T?d.reportExtraError:d.reportError)(this,this.def.error,O)}$dataError(){(0,d.reportError)(this,this.def.$dataError||d.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,d.resetErrorsCount)(this.gen,this.errsCount)}ok(T){this.allErrors||this.gen.if(T)}setParams(T,O){O?Object.assign(this.params,T):this.params=T}block$data(T,O,P=l.nil){this.gen.block(()=>{this.check$data(T,P),O()})}check$data(T=l.nil,O=l.nil){if(!this.$data)return;const{gen:P,schemaCode:M,schemaType:q,def:D}=this;P.if((0,l.or)((0,l._)`${M} === undefined`,O)),T!==l.nil&&P.assign(T,!0),(q.length||D.validateSchema)&&(P.elseIf(this.invalid$data()),this.$dataError(),T!==l.nil&&P.assign(T,!1)),P.else()}invalid$data(){const{gen:T,schemaCode:O,schemaType:P,def:M,it:q}=this;return(0,l.or)(D(),B());function D(){if(P.length){if(!(O instanceof l.Name))throw new Error("ajv implementation error");const U=Array.isArray(P)?P:[P];return(0,l._)`${(0,a.checkDataTypes)(U,O,q.opts.strictNumbers,a.DataType.Wrong)}`}return l.nil}function B(){if(M.validateSchema){const U=T.scopeValue("validate$data",{ref:M.validateSchema});return(0,l._)`!${U}(${O})`}return l.nil}}subschema(T,O){const P=(0,o.getSubschema)(this.it,T);(0,o.extendSubschemaData)(P,this.it,T),(0,o.extendSubschemaMode)(P,T);const M={...this.it,...P,items:void 0,props:void 0};return _(M,O),M}mergeEvaluated(T,O){const{it:P,gen:M}=this;P.opts.unevaluated&&(P.props!==!0&&T.props!==void 0&&(P.props=u.mergeEvaluated.props(M,T.props,P.props,O)),P.items!==!0&&T.items!==void 0&&(P.items=u.mergeEvaluated.items(M,T.items,P.items,O)))}mergeValidEvaluated(T,O){const{it:P,gen:M}=this;if(P.opts.unevaluated&&(P.props!==!0||P.items!==!0))return M.if(O,()=>this.mergeEvaluated(T,l.Name)),!0}}Kt.KeywordCxt=Q;function j(F,T,O,P){const M=new Q(F,O,T);"code"in O?O.code(M,P):M.$data&&O.validate?(0,r.funcKeywordCode)(M,O):"macro"in O?(0,r.macroKeywordCode)(M,O):(O.compile||O.validate)&&(0,r.funcKeywordCode)(M,O)}const K=/^\/(?:[^~]|~0|~1)*$/,se=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function Z(F,{dataLevel:T,dataNames:O,dataPathArr:P}){let M,q;if(F==="")return i.default.rootData;if(F[0]==="/"){if(!K.test(F))throw new Error(`Invalid JSON-pointer: ${F}`);M=F,q=i.default.rootData}else{const ae=se.exec(F);if(!ae)throw new Error(`Invalid JSON-pointer: ${F}`);const ne=+ae[1];if(M=ae[2],M==="#"){if(ne>=T)throw new Error(U("property/index",ne));return P[T-ne]}if(ne>T)throw new Error(U("data",ne));if(q=O[T-ne],!M)return q}let D=q;const B=M.split("/");for(const ae of B)ae&&(q=(0,l._)`${q}${(0,l.getProperty)((0,u.unescapeJsonPointer)(ae))}`,D=(0,l._)`${D} && ${q}`);return D;function U(ae,ne){return`Cannot access ${ae} ${ne} levels up, current level is ${T}`}}return Kt.getData=Z,Kt}var Ja={},Jl;function li(){if(Jl)return Ja;Jl=1,Object.defineProperty(Ja,"__esModule",{value:!0});class e extends Error{constructor(s){super("validation failed"),this.errors=s,this.ajv=this.validation=!0}}return Ja.default=e,Ja}var Xa={},Xl;function Cr(){if(Xl)return Xa;Xl=1,Object.defineProperty(Xa,"__esModule",{value:!0});const e=Er();class t extends Error{constructor(a,n,r,o){super(o||`can't resolve reference ${r} from id ${n}`),this.missingRef=(0,e.resolveUrl)(a,n,r),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(a,this.missingRef))}}return Xa.default=t,Xa}var ht={},Ql;function ci(){if(Ql)return ht;Ql=1,Object.defineProperty(ht,"__esModule",{value:!0}),ht.resolveSchema=ht.getCompilingSchema=ht.resolveRef=ht.compileSchema=ht.SchemaEnv=void 0;const e=Se(),t=li(),s=ks(),a=Er(),n=Ce(),r=Ar();class o{constructor(h){var m;this.refs={},this.dynamicAnchors={};let _;typeof h.schema=="object"&&(_=h.schema),this.schema=h.schema,this.schemaId=h.schemaId,this.root=h.root||this,this.baseId=(m=h.baseId)!==null&&m!==void 0?m:(0,a.normalizeId)(_?.[h.schemaId||"$id"]),this.schemaPath=h.schemaPath,this.localRefs=h.localRefs,this.meta=h.meta,this.$async=_?.$async,this.refs={}}}ht.SchemaEnv=o;function l(v){const h=u.call(this,v);if(h)return h;const m=(0,a.getFullPath)(this.opts.uriResolver,v.root.baseId),{es5:_,lines:y}=this.opts.code,{ownProperties:w}=this.opts,x=new e.CodeGen(this.scope,{es5:_,lines:y,ownProperties:w});let E;v.$async&&(E=x.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const I=x.scopeName("validate");v.validateName=I;const L={gen:x,allErrors:this.opts.allErrors,data:s.default.data,parentData:s.default.parentData,parentDataProperty:s.default.parentDataProperty,dataNames:[s.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:x.scopeValue("schema",this.opts.code.source===!0?{ref:v.schema,code:(0,e.stringify)(v.schema)}:{ref:v.schema}),validateName:I,ValidationError:E,schema:v.schema,schemaEnv:v,rootId:m,baseId:v.baseId||m,schemaPath:e.nil,errSchemaPath:v.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let C;try{this._compilations.add(v),(0,r.validateFunctionCode)(L),x.optimize(this.opts.code.optimize);const k=x.toString();C=`${x.scopeRefs(s.default.scope)}return ${k}`,this.opts.code.process&&(C=this.opts.code.process(C,v));const $=new Function(`${s.default.self}`,`${s.default.scope}`,C)(this,this.scope.get());if(this.scope.value(I,{ref:$}),$.errors=null,$.schema=v.schema,$.schemaEnv=v,v.$async&&($.$async=!0),this.opts.code.source===!0&&($.source={validateName:I,validateCode:k,scopeValues:x._values}),this.opts.unevaluated){const{props:z,items:H}=L;$.evaluated={props:z instanceof e.Name?void 0:z,items:H instanceof e.Name?void 0:H,dynamicProps:z instanceof e.Name,dynamicItems:H instanceof e.Name},$.source&&($.source.evaluated=(0,e.stringify)($.evaluated))}return v.validate=$,v}catch(k){throw delete v.validate,delete v.validateName,C&&this.logger.error("Error compiling schema, function code:",C),k}finally{this._compilations.delete(v)}}ht.compileSchema=l;function i(v,h,m){var _;m=(0,a.resolveUrl)(this.opts.uriResolver,h,m);const y=v.refs[m];if(y)return y;let w=p.call(this,v,m);if(w===void 0){const x=(_=v.localRefs)===null||_===void 0?void 0:_[m],{schemaId:E}=this.opts;x&&(w=new o({schema:x,schemaId:E,root:v,baseId:h}))}if(w!==void 0)return v.refs[m]=c.call(this,w)}ht.resolveRef=i;function c(v){return(0,a.inlineRef)(v.schema,this.opts.inlineRefs)?v.schema:v.validate?v:l.call(this,v)}function u(v){for(const h of this._compilations)if(d(h,v))return h}ht.getCompilingSchema=u;function d(v,h){return v.schema===h.schema&&v.root===h.root&&v.baseId===h.baseId}function p(v,h){let m;for(;typeof(m=this.refs[h])=="string";)h=m;return m||this.schemas[h]||f.call(this,v,h)}function f(v,h){const m=this.opts.uriResolver.parse(h),_=(0,a._getFullPath)(this.opts.uriResolver,m);let y=(0,a.getFullPath)(this.opts.uriResolver,v.baseId,void 0);if(Object.keys(v.schema).length>0&&_===y)return b.call(this,m,v);const w=(0,a.normalizeId)(_),x=this.refs[w]||this.schemas[w];if(typeof x=="string"){const E=f.call(this,v,x);return typeof E?.schema!="object"?void 0:b.call(this,m,E)}if(typeof x?.schema=="object"){if(x.validate||l.call(this,x),w===(0,a.normalizeId)(h)){const{schema:E}=x,{schemaId:I}=this.opts,L=E[I];return L&&(y=(0,a.resolveUrl)(this.opts.uriResolver,y,L)),new o({schema:E,schemaId:I,root:v,baseId:y})}return b.call(this,m,x)}}ht.resolveSchema=f;const g=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function b(v,{baseId:h,schema:m,root:_}){var y;if(((y=v.fragment)===null||y===void 0?void 0:y[0])!=="/")return;for(const E of v.fragment.slice(1).split("/")){if(typeof m=="boolean")return;const I=m[(0,n.unescapeFragment)(E)];if(I===void 0)return;m=I;const L=typeof m=="object"&&m[this.opts.schemaId];!g.has(E)&&L&&(h=(0,a.resolveUrl)(this.opts.uriResolver,h,L))}let w;if(typeof m!="boolean"&&m.$ref&&!(0,n.schemaHasRulesButRef)(m,this.RULES)){const E=(0,a.resolveUrl)(this.opts.uriResolver,h,m.$ref);w=f.call(this,_,E)}const{schemaId:x}=this.opts;if(w=w||new o({schema:m,schemaId:x,root:_,baseId:h}),w.schema!==w.root.schema)return w}return ht}const iw="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",lw="Meta-schema for $data reference (JSON AnySchema extension proposal)",cw="object",dw=["$data"],uw={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},pw=!1,fw={$id:iw,description:lw,type:cw,required:dw,properties:uw,additionalProperties:pw};var Qa={},pa={exports:{}},uo,Zl;function Yu(){if(Zl)return uo;Zl=1;const e=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),t=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function s(p){let f="",g=0,b=0;for(b=0;b<p.length;b++)if(g=p[b].charCodeAt(0),g!==48){if(!(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102))return"";f+=p[b];break}for(b+=1;b<p.length;b++){if(g=p[b].charCodeAt(0),!(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102))return"";f+=p[b]}return f}const a=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function n(p){return p.length=0,!0}function r(p,f,g){if(p.length){const b=s(p);if(b!=="")f.push(b);else return g.error=!0,!1;p.length=0}return!0}function o(p){let f=0;const g={error:!1,address:"",zone:""},b=[],v=[];let h=!1,m=!1,_=r;for(let y=0;y<p.length;y++){const w=p[y];if(!(w==="["||w==="]"))if(w===":"){if(h===!0&&(m=!0),!_(v,b,g))break;if(++f>7){g.error=!0;break}y>0&&p[y-1]===":"&&(h=!0),b.push(":");continue}else if(w==="%"){if(!_(v,b,g))break;_=n}else{v.push(w);continue}}return v.length&&(_===n?g.zone=v.join(""):m?b.push(v.join("")):b.push(s(v))),g.address=b.join(""),g}function l(p){if(i(p,":")<2)return{host:p,isIPV6:!1};const f=o(p);if(f.error)return{host:p,isIPV6:!1};{let g=f.address,b=f.address;return f.zone&&(g+="%"+f.zone,b+="%25"+f.zone),{host:g,isIPV6:!0,escapedHost:b}}}function i(p,f){let g=0;for(let b=0;b<p.length;b++)p[b]===f&&g++;return g}function c(p){let f=p;const g=[];let b=-1,v=0;for(;v=f.length;){if(v===1){if(f===".")break;if(f==="/"){g.push("/");break}else{g.push(f);break}}else if(v===2){if(f[0]==="."){if(f[1]===".")break;if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&(f[1]==="."||f[1]==="/")){g.push("/");break}}else if(v===3&&f==="/.."){g.length!==0&&g.pop(),g.push("/");break}if(f[0]==="."){if(f[1]==="."){if(f[2]==="/"){f=f.slice(3);continue}}else if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&f[1]==="."){if(f[2]==="/"){f=f.slice(2);continue}else if(f[2]==="."&&f[3]==="/"){f=f.slice(3),g.length!==0&&g.pop();continue}}if((b=f.indexOf("/",1))===-1){g.push(f);break}else g.push(f.slice(0,b)),f=f.slice(b)}return g.join("")}function u(p,f){const g=f!==!0?escape:unescape;return p.scheme!==void 0&&(p.scheme=g(p.scheme)),p.userinfo!==void 0&&(p.userinfo=g(p.userinfo)),p.host!==void 0&&(p.host=g(p.host)),p.path!==void 0&&(p.path=g(p.path)),p.query!==void 0&&(p.query=g(p.query)),p.fragment!==void 0&&(p.fragment=g(p.fragment)),p}function d(p){const f=[];if(p.userinfo!==void 0&&(f.push(p.userinfo),f.push("@")),p.host!==void 0){let g=unescape(p.host);if(!t(g)){const b=l(g);b.isIPV6===!0?g=`[${b.escapedHost}]`:g=p.host}f.push(g)}return(typeof p.port=="number"||typeof p.port=="string")&&(f.push(":"),f.push(String(p.port))),f.length?f.join(""):void 0}return uo={nonSimpleDomain:a,recomposeAuthority:d,normalizeComponentEncoding:u,removeDotSegments:c,isIPv4:t,isUUID:e,normalizeIPv6:l,stringArrayToHexStripped:s},uo}var po,ec;function hw(){if(ec)return po;ec=1;const{isUUID:e}=Yu(),t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,s=["http","https","ws","wss","urn","urn:uuid"];function a(w){return s.indexOf(w)!==-1}function n(w){return w.secure===!0?!0:w.secure===!1?!1:w.scheme?w.scheme.length===3&&(w.scheme[0]==="w"||w.scheme[0]==="W")&&(w.scheme[1]==="s"||w.scheme[1]==="S")&&(w.scheme[2]==="s"||w.scheme[2]==="S"):!1}function r(w){return w.host||(w.error=w.error||"HTTP URIs must have a host."),w}function o(w){const x=String(w.scheme).toLowerCase()==="https";return(w.port===(x?443:80)||w.port==="")&&(w.port=void 0),w.path||(w.path="/"),w}function l(w){return w.secure=n(w),w.resourceName=(w.path||"/")+(w.query?"?"+w.query:""),w.path=void 0,w.query=void 0,w}function i(w){if((w.port===(n(w)?443:80)||w.port==="")&&(w.port=void 0),typeof w.secure=="boolean"&&(w.scheme=w.secure?"wss":"ws",w.secure=void 0),w.resourceName){const[x,E]=w.resourceName.split("?");w.path=x&&x!=="/"?x:void 0,w.query=E,w.resourceName=void 0}return w.fragment=void 0,w}function c(w,x){if(!w.path)return w.error="URN can not be parsed",w;const E=w.path.match(t);if(E){const I=x.scheme||w.scheme||"urn";w.nid=E[1].toLowerCase(),w.nss=E[2];const L=`${I}:${x.nid||w.nid}`,C=y(L);w.path=void 0,C&&(w=C.parse(w,x))}else w.error=w.error||"URN can not be parsed.";return w}function u(w,x){if(w.nid===void 0)throw new Error("URN without nid cannot be serialized");const E=x.scheme||w.scheme||"urn",I=w.nid.toLowerCase(),L=`${E}:${x.nid||I}`,C=y(L);C&&(w=C.serialize(w,x));const k=w,S=w.nss;return k.path=`${I||x.nid}:${S}`,x.skipEscape=!0,k}function d(w,x){const E=w;return E.uuid=E.nss,E.nss=void 0,!x.tolerant&&(!E.uuid||!e(E.uuid))&&(E.error=E.error||"UUID is not valid."),E}function p(w){const x=w;return x.nss=(w.uuid||"").toLowerCase(),x}const f={scheme:"http",domainHost:!0,parse:r,serialize:o},g={scheme:"https",domainHost:f.domainHost,parse:r,serialize:o},b={scheme:"ws",domainHost:!0,parse:l,serialize:i},v={scheme:"wss",domainHost:b.domainHost,parse:b.parse,serialize:b.serialize},_={http:f,https:g,ws:b,wss:v,urn:{scheme:"urn",parse:c,serialize:u,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:d,serialize:p,skipNormalize:!0}};Object.setPrototypeOf(_,null);function y(w){return w&&(_[w]||_[w.toLowerCase()])||void 0}return po={wsIsSecure:n,SCHEMES:_,isValidSchemeName:a,getSchemeHandler:y},po}var tc;function mw(){if(tc)return pa.exports;tc=1;const{normalizeIPv6:e,removeDotSegments:t,recomposeAuthority:s,normalizeComponentEncoding:a,isIPv4:n,nonSimpleDomain:r}=Yu(),{SCHEMES:o,getSchemeHandler:l}=hw();function i(v,h){return typeof v=="string"?v=p(g(v,h),h):typeof v=="object"&&(v=g(p(v,h),h)),v}function c(v,h,m){const _=m?Object.assign({scheme:"null"},m):{scheme:"null"},y=u(g(v,_),g(h,_),_,!0);return _.skipEscape=!0,p(y,_)}function u(v,h,m,_){const y={};return _||(v=g(p(v,m),m),h=g(p(h,m),m)),m=m||{},!m.tolerant&&h.scheme?(y.scheme=h.scheme,y.userinfo=h.userinfo,y.host=h.host,y.port=h.port,y.path=t(h.path||""),y.query=h.query):(h.userinfo!==void 0||h.host!==void 0||h.port!==void 0?(y.userinfo=h.userinfo,y.host=h.host,y.port=h.port,y.path=t(h.path||""),y.query=h.query):(h.path?(h.path[0]==="/"?y.path=t(h.path):((v.userinfo!==void 0||v.host!==void 0||v.port!==void 0)&&!v.path?y.path="/"+h.path:v.path?y.path=v.path.slice(0,v.path.lastIndexOf("/")+1)+h.path:y.path=h.path,y.path=t(y.path)),y.query=h.query):(y.path=v.path,h.query!==void 0?y.query=h.query:y.query=v.query),y.userinfo=v.userinfo,y.host=v.host,y.port=v.port),y.scheme=v.scheme),y.fragment=h.fragment,y}function d(v,h,m){return typeof v=="string"?(v=unescape(v),v=p(a(g(v,m),!0),{...m,skipEscape:!0})):typeof v=="object"&&(v=p(a(v,!0),{...m,skipEscape:!0})),typeof h=="string"?(h=unescape(h),h=p(a(g(h,m),!0),{...m,skipEscape:!0})):typeof h=="object"&&(h=p(a(h,!0),{...m,skipEscape:!0})),v.toLowerCase()===h.toLowerCase()}function p(v,h){const m={host:v.host,scheme:v.scheme,userinfo:v.userinfo,port:v.port,path:v.path,query:v.query,nid:v.nid,nss:v.nss,uuid:v.uuid,fragment:v.fragment,reference:v.reference,resourceName:v.resourceName,secure:v.secure,error:""},_=Object.assign({},h),y=[],w=l(_.scheme||m.scheme);w&&w.serialize&&w.serialize(m,_),m.path!==void 0&&(_.skipEscape?m.path=unescape(m.path):(m.path=escape(m.path),m.scheme!==void 0&&(m.path=m.path.split("%3A").join(":")))),_.reference!=="suffix"&&m.scheme&&y.push(m.scheme,":");const x=s(m);if(x!==void 0&&(_.reference!=="suffix"&&y.push("//"),y.push(x),m.path&&m.path[0]!=="/"&&y.push("/")),m.path!==void 0){let E=m.path;!_.absolutePath&&(!w||!w.absolutePath)&&(E=t(E)),x===void 0&&E[0]==="/"&&E[1]==="/"&&(E="/%2F"+E.slice(2)),y.push(E)}return m.query!==void 0&&y.push("?",m.query),m.fragment!==void 0&&y.push("#",m.fragment),y.join("")}const f=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function g(v,h){const m=Object.assign({},h),_={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0};let y=!1;m.reference==="suffix"&&(m.scheme?v=m.scheme+":"+v:v="//"+v);const w=v.match(f);if(w){if(_.scheme=w[1],_.userinfo=w[3],_.host=w[4],_.port=parseInt(w[5],10),_.path=w[6]||"",_.query=w[7],_.fragment=w[8],isNaN(_.port)&&(_.port=w[5]),_.host)if(n(_.host)===!1){const I=e(_.host);_.host=I.host.toLowerCase(),y=I.isIPV6}else y=!0;_.scheme===void 0&&_.userinfo===void 0&&_.host===void 0&&_.port===void 0&&_.query===void 0&&!_.path?_.reference="same-document":_.scheme===void 0?_.reference="relative":_.fragment===void 0?_.reference="absolute":_.reference="uri",m.reference&&m.reference!=="suffix"&&m.reference!==_.reference&&(_.error=_.error||"URI is not a "+m.reference+" reference.");const x=l(m.scheme||_.scheme);if(!m.unicodeSupport&&(!x||!x.unicodeSupport)&&_.host&&(m.domainHost||x&&x.domainHost)&&y===!1&&r(_.host))try{_.host=URL.domainToASCII(_.host.toLowerCase())}catch(E){_.error=_.error||"Host's domain name can not be converted to ASCII: "+E}(!x||x&&!x.skipNormalize)&&(v.indexOf("%")!==-1&&(_.scheme!==void 0&&(_.scheme=unescape(_.scheme)),_.host!==void 0&&(_.host=unescape(_.host))),_.path&&(_.path=escape(unescape(_.path))),_.fragment&&(_.fragment=encodeURI(decodeURIComponent(_.fragment)))),x&&x.parse&&x.parse(_,m)}else _.error=_.error||"URI can not be parsed.";return _}const b={SCHEMES:o,normalize:i,resolve:c,resolveComponent:u,equal:d,serialize:p,parse:g};return pa.exports=b,pa.exports.default=b,pa.exports.fastUri=b,pa.exports}var sc;function gw(){if(sc)return Qa;sc=1,Object.defineProperty(Qa,"__esModule",{value:!0});const e=mw();return e.code='require("ajv/dist/runtime/uri").default',Qa.default=e,Qa}var ac;function bw(){return ac||(ac=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=Ar();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var s=Se();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return s._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return s.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return s.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return s.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return s.CodeGen}});const a=li(),n=Cr(),r=Vu(),o=ci(),l=Se(),i=Er(),c=or(),u=Ce(),d=fw,p=gw(),f=(X,V)=>new RegExp(X,V);f.code="new RegExp";const g=["removeAdditional","useDefaults","coerceTypes"],b=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),v={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},h={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},m=200;function _(X){var V,ee,G,R,N,Q,j,K,se,Z,F,T,O,P,M,q,D,B,U,ae,ne,pe,te,oe,de;const me=X.strict,be=(V=X.code)===null||V===void 0?void 0:V.optimize,_e=be===!0||be===void 0?1:be||0,Ee=(G=(ee=X.code)===null||ee===void 0?void 0:ee.regExp)!==null&&G!==void 0?G:f,ze=(R=X.uriResolver)!==null&&R!==void 0?R:p.default;return{strictSchema:(Q=(N=X.strictSchema)!==null&&N!==void 0?N:me)!==null&&Q!==void 0?Q:!0,strictNumbers:(K=(j=X.strictNumbers)!==null&&j!==void 0?j:me)!==null&&K!==void 0?K:!0,strictTypes:(Z=(se=X.strictTypes)!==null&&se!==void 0?se:me)!==null&&Z!==void 0?Z:"log",strictTuples:(T=(F=X.strictTuples)!==null&&F!==void 0?F:me)!==null&&T!==void 0?T:"log",strictRequired:(P=(O=X.strictRequired)!==null&&O!==void 0?O:me)!==null&&P!==void 0?P:!1,code:X.code?{...X.code,optimize:_e,regExp:Ee}:{optimize:_e,regExp:Ee},loopRequired:(M=X.loopRequired)!==null&&M!==void 0?M:m,loopEnum:(q=X.loopEnum)!==null&&q!==void 0?q:m,meta:(D=X.meta)!==null&&D!==void 0?D:!0,messages:(B=X.messages)!==null&&B!==void 0?B:!0,inlineRefs:(U=X.inlineRefs)!==null&&U!==void 0?U:!0,schemaId:(ae=X.schemaId)!==null&&ae!==void 0?ae:"$id",addUsedSchema:(ne=X.addUsedSchema)!==null&&ne!==void 0?ne:!0,validateSchema:(pe=X.validateSchema)!==null&&pe!==void 0?pe:!0,validateFormats:(te=X.validateFormats)!==null&&te!==void 0?te:!0,unicodeRegExp:(oe=X.unicodeRegExp)!==null&&oe!==void 0?oe:!0,int32range:(de=X.int32range)!==null&&de!==void 0?de:!0,uriResolver:ze}}class y{constructor(V={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,V=this.opts={...V,..._(V)};const{es5:ee,lines:G}=this.opts.code;this.scope=new l.ValueScope({scope:{},prefixes:b,es5:ee,lines:G}),this.logger=S(V.logger);const R=V.validateFormats;V.validateFormats=!1,this.RULES=(0,r.getRules)(),w.call(this,v,V,"NOT SUPPORTED"),w.call(this,h,V,"DEPRECATED","warn"),this._metaOpts=C.call(this),V.formats&&I.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),V.keywords&&L.call(this,V.keywords),typeof V.meta=="object"&&this.addMetaSchema(V.meta),E.call(this),V.validateFormats=R}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:V,meta:ee,schemaId:G}=this.opts;let R=d;G==="id"&&(R={...d},R.id=R.$id,delete R.$id),ee&&V&&this.addMetaSchema(R,R[G],!1)}defaultMeta(){const{meta:V,schemaId:ee}=this.opts;return this.opts.defaultMeta=typeof V=="object"?V[ee]||V:void 0}validate(V,ee){let G;if(typeof V=="string"){if(G=this.getSchema(V),!G)throw new Error(`no schema with key or ref "${V}"`)}else G=this.compile(V);const R=G(ee);return"$async"in G||(this.errors=G.errors),R}compile(V,ee){const G=this._addSchema(V,ee);return G.validate||this._compileSchemaEnv(G)}compileAsync(V,ee){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:G}=this.opts;return R.call(this,V,ee);async function R(Z,F){await N.call(this,Z.$schema);const T=this._addSchema(Z,F);return T.validate||Q.call(this,T)}async function N(Z){Z&&!this.getSchema(Z)&&await R.call(this,{$ref:Z},!0)}async function Q(Z){try{return this._compileSchemaEnv(Z)}catch(F){if(!(F instanceof n.default))throw F;return j.call(this,F),await K.call(this,F.missingSchema),Q.call(this,Z)}}function j({missingSchema:Z,missingRef:F}){if(this.refs[Z])throw new Error(`AnySchema ${Z} is loaded but ${F} cannot be resolved`)}async function K(Z){const F=await se.call(this,Z);this.refs[Z]||await N.call(this,F.$schema),this.refs[Z]||this.addSchema(F,Z,ee)}async function se(Z){const F=this._loading[Z];if(F)return F;try{return await(this._loading[Z]=G(Z))}finally{delete this._loading[Z]}}}addSchema(V,ee,G,R=this.opts.validateSchema){if(Array.isArray(V)){for(const Q of V)this.addSchema(Q,void 0,G,R);return this}let N;if(typeof V=="object"){const{schemaId:Q}=this.opts;if(N=V[Q],N!==void 0&&typeof N!="string")throw new Error(`schema ${Q} must be string`)}return ee=(0,i.normalizeId)(ee||N),this._checkUnique(ee),this.schemas[ee]=this._addSchema(V,G,ee,R,!0),this}addMetaSchema(V,ee,G=this.opts.validateSchema){return this.addSchema(V,ee,!0,G),this}validateSchema(V,ee){if(typeof V=="boolean")return!0;let G;if(G=V.$schema,G!==void 0&&typeof G!="string")throw new Error("$schema must be a string");if(G=G||this.opts.defaultMeta||this.defaultMeta(),!G)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const R=this.validate(G,V);if(!R&&ee){const N="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(N);else throw new Error(N)}return R}getSchema(V){let ee;for(;typeof(ee=x.call(this,V))=="string";)V=ee;if(ee===void 0){const{schemaId:G}=this.opts,R=new o.SchemaEnv({schema:{},schemaId:G});if(ee=o.resolveSchema.call(this,R,V),!ee)return;this.refs[V]=ee}return ee.validate||this._compileSchemaEnv(ee)}removeSchema(V){if(V instanceof RegExp)return this._removeAllSchemas(this.schemas,V),this._removeAllSchemas(this.refs,V),this;switch(typeof V){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const ee=x.call(this,V);return typeof ee=="object"&&this._cache.delete(ee.schema),delete this.schemas[V],delete this.refs[V],this}case"object":{const ee=V;this._cache.delete(ee);let G=V[this.opts.schemaId];return G&&(G=(0,i.normalizeId)(G),delete this.schemas[G],delete this.refs[G]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(V){for(const ee of V)this.addKeyword(ee);return this}addKeyword(V,ee){let G;if(typeof V=="string")G=V,typeof ee=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),ee.keyword=G);else if(typeof V=="object"&&ee===void 0){if(ee=V,G=ee.keyword,Array.isArray(G)&&!G.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(z.call(this,G,ee),!ee)return(0,u.eachItem)(G,N=>H.call(this,N)),this;J.call(this,ee);const R={...ee,type:(0,c.getJSONTypes)(ee.type),schemaType:(0,c.getJSONTypes)(ee.schemaType)};return(0,u.eachItem)(G,R.type.length===0?N=>H.call(this,N,R):N=>R.type.forEach(Q=>H.call(this,N,R,Q))),this}getKeyword(V){const ee=this.RULES.all[V];return typeof ee=="object"?ee.definition:!!ee}removeKeyword(V){const{RULES:ee}=this;delete ee.keywords[V],delete ee.all[V];for(const G of ee.rules){const R=G.rules.findIndex(N=>N.keyword===V);R>=0&&G.rules.splice(R,1)}return this}addFormat(V,ee){return typeof ee=="string"&&(ee=new RegExp(ee)),this.formats[V]=ee,this}errorsText(V=this.errors,{separator:ee=", ",dataVar:G="data"}={}){return!V||V.length===0?"No errors":V.map(R=>`${G}${R.instancePath} ${R.message}`).reduce((R,N)=>R+ee+N)}$dataMetaSchema(V,ee){const G=this.RULES.all;V=JSON.parse(JSON.stringify(V));for(const R of ee){const N=R.split("/").slice(1);let Q=V;for(const j of N)Q=Q[j];for(const j in G){const K=G[j];if(typeof K!="object")continue;const{$data:se}=K.definition,Z=Q[j];se&&Z&&(Q[j]=ie(Z))}}return V}_removeAllSchemas(V,ee){for(const G in V){const R=V[G];(!ee||ee.test(G))&&(typeof R=="string"?delete V[G]:R&&!R.meta&&(this._cache.delete(R.schema),delete V[G]))}}_addSchema(V,ee,G,R=this.opts.validateSchema,N=this.opts.addUsedSchema){let Q;const{schemaId:j}=this.opts;if(typeof V=="object")Q=V[j];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof V!="boolean")throw new Error("schema must be object or boolean")}let K=this._cache.get(V);if(K!==void 0)return K;G=(0,i.normalizeId)(Q||G);const se=i.getSchemaRefs.call(this,V,G);return K=new o.SchemaEnv({schema:V,schemaId:j,meta:ee,baseId:G,localRefs:se}),this._cache.set(K.schema,K),N&&!G.startsWith("#")&&(G&&this._checkUnique(G),this.refs[G]=K),R&&this.validateSchema(V,!0),K}_checkUnique(V){if(this.schemas[V]||this.refs[V])throw new Error(`schema with key or id "${V}" already exists`)}_compileSchemaEnv(V){if(V.meta?this._compileMetaSchema(V):o.compileSchema.call(this,V),!V.validate)throw new Error("ajv implementation error");return V.validate}_compileMetaSchema(V){const ee=this.opts;this.opts=this._metaOpts;try{o.compileSchema.call(this,V)}finally{this.opts=ee}}}y.ValidationError=a.default,y.MissingRefError=n.default,e.default=y;function w(X,V,ee,G="error"){for(const R in X){const N=R;N in V&&this.logger[G](`${ee}: option ${R}. ${X[N]}`)}}function x(X){return X=(0,i.normalizeId)(X),this.schemas[X]||this.refs[X]}function E(){const X=this.opts.schemas;if(X)if(Array.isArray(X))this.addSchema(X);else for(const V in X)this.addSchema(X[V],V)}function I(){for(const X in this.opts.formats){const V=this.opts.formats[X];V&&this.addFormat(X,V)}}function L(X){if(Array.isArray(X)){this.addVocabulary(X);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const V in X){const ee=X[V];ee.keyword||(ee.keyword=V),this.addKeyword(ee)}}function C(){const X={...this.opts};for(const V of g)delete X[V];return X}const k={log(){},warn(){},error(){}};function S(X){if(X===!1)return k;if(X===void 0)return console;if(X.log&&X.warn&&X.error)return X;throw new Error("logger must implement log, warn and error methods")}const $=/^[a-z_$][a-z0-9_$:-]*$/i;function z(X,V){const{RULES:ee}=this;if((0,u.eachItem)(X,G=>{if(ee.keywords[G])throw new Error(`Keyword ${G} is already defined`);if(!$.test(G))throw new Error(`Keyword ${G} has invalid name`)}),!!V&&V.$data&&!("code"in V||"validate"in V))throw new Error('$data keyword must have "code" or "validate" function')}function H(X,V,ee){var G;const R=V?.post;if(ee&&R)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:N}=this;let Q=R?N.post:N.rules.find(({type:K})=>K===ee);if(Q||(Q={type:ee,rules:[]},N.rules.push(Q)),N.keywords[X]=!0,!V)return;const j={keyword:X,definition:{...V,type:(0,c.getJSONTypes)(V.type),schemaType:(0,c.getJSONTypes)(V.schemaType)}};V.before?Y.call(this,Q,j,V.before):Q.rules.push(j),N.all[X]=j,(G=V.implements)===null||G===void 0||G.forEach(K=>this.addKeyword(K))}function Y(X,V,ee){const G=X.rules.findIndex(R=>R.keyword===ee);G>=0?X.rules.splice(G,0,V):(X.rules.push(V),this.logger.warn(`rule ${ee} is not defined`))}function J(X){let{metaSchema:V}=X;V!==void 0&&(X.$data&&this.opts.$data&&(V=ie(V)),X.validateSchema=this.compile(V,!0))}const W={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function ie(X){return{anyOf:[X,W]}}})(ao)),ao}var Za={},en={},tn={},nc;function vw(){if(nc)return tn;nc=1,Object.defineProperty(tn,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return tn.default=e,tn}var ds={},rc;function _w(){if(rc)return ds;rc=1,Object.defineProperty(ds,"__esModule",{value:!0}),ds.callRef=ds.getValidate=void 0;const e=Cr(),t=$t(),s=Se(),a=ks(),n=ci(),r=Ce(),o={keyword:"$ref",schemaType:"string",code(c){const{gen:u,schema:d,it:p}=c,{baseId:f,schemaEnv:g,validateName:b,opts:v,self:h}=p,{root:m}=g;if((d==="#"||d==="#/")&&f===m.baseId)return y();const _=n.resolveRef.call(h,m,f,d);if(_===void 0)throw new e.default(p.opts.uriResolver,f,d);if(_ instanceof n.SchemaEnv)return w(_);return x(_);function y(){if(g===m)return i(c,b,g,g.$async);const E=u.scopeValue("root",{ref:m});return i(c,(0,s._)`${E}.validate`,m,m.$async)}function w(E){const I=l(c,E);i(c,I,E,E.$async)}function x(E){const I=u.scopeValue("schema",v.code.source===!0?{ref:E,code:(0,s.stringify)(E)}:{ref:E}),L=u.name("valid"),C=c.subschema({schema:E,dataTypes:[],schemaPath:s.nil,topSchemaRef:I,errSchemaPath:d},L);c.mergeEvaluated(C),c.ok(L)}}};function l(c,u){const{gen:d}=c;return u.validate?d.scopeValue("validate",{ref:u.validate}):(0,s._)`${d.scopeValue("wrapper",{ref:u})}.validate`}ds.getValidate=l;function i(c,u,d,p){const{gen:f,it:g}=c,{allErrors:b,schemaEnv:v,opts:h}=g,m=h.passContext?a.default.this:s.nil;p?_():y();function _(){if(!v.$async)throw new Error("async schema referenced by sync schema");const E=f.let("valid");f.try(()=>{f.code((0,s._)`await ${(0,t.callValidateCode)(c,u,m)}`),x(u),b||f.assign(E,!0)},I=>{f.if((0,s._)`!(${I} instanceof ${g.ValidationError})`,()=>f.throw(I)),w(I),b||f.assign(E,!1)}),c.ok(E)}function y(){c.result((0,t.callValidateCode)(c,u,m),()=>x(u),()=>w(u))}function w(E){const I=(0,s._)`${E}.errors`;f.assign(a.default.vErrors,(0,s._)`${a.default.vErrors} === null ? ${I} : ${a.default.vErrors}.concat(${I})`),f.assign(a.default.errors,(0,s._)`${a.default.vErrors}.length`)}function x(E){var I;if(!g.opts.unevaluated)return;const L=(I=d?.validate)===null||I===void 0?void 0:I.evaluated;if(g.props!==!0)if(L&&!L.dynamicProps)L.props!==void 0&&(g.props=r.mergeEvaluated.props(f,L.props,g.props));else{const C=f.var("props",(0,s._)`${E}.evaluated.props`);g.props=r.mergeEvaluated.props(f,C,g.props,s.Name)}if(g.items!==!0)if(L&&!L.dynamicItems)L.items!==void 0&&(g.items=r.mergeEvaluated.items(f,L.items,g.items));else{const C=f.var("items",(0,s._)`${E}.evaluated.items`);g.items=r.mergeEvaluated.items(f,C,g.items,s.Name)}}}return ds.callRef=i,ds.default=o,ds}var oc;function yw(){if(oc)return en;oc=1,Object.defineProperty(en,"__esModule",{value:!0});const e=vw(),t=_w(),s=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return en.default=s,en}var sn={},an={},ic;function ww(){if(ic)return an;ic=1,Object.defineProperty(an,"__esModule",{value:!0});const e=Se(),t=e.operators,s={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},a={message:({keyword:r,schemaCode:o})=>(0,e.str)`must be ${s[r].okStr} ${o}`,params:({keyword:r,schemaCode:o})=>(0,e._)`{comparison: ${s[r].okStr}, limit: ${o}}`},n={keyword:Object.keys(s),type:"number",schemaType:"number",$data:!0,error:a,code(r){const{keyword:o,data:l,schemaCode:i}=r;r.fail$data((0,e._)`${l} ${s[o].fail} ${i} || isNaN(${l})`)}};return an.default=n,an}var nn={},lc;function xw(){if(lc)return nn;lc=1,Object.defineProperty(nn,"__esModule",{value:!0});const e=Se(),s={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:a})=>(0,e.str)`must be multiple of ${a}`,params:({schemaCode:a})=>(0,e._)`{multipleOf: ${a}}`},code(a){const{gen:n,data:r,schemaCode:o,it:l}=a,i=l.opts.multipleOfPrecision,c=n.let("res"),u=i?(0,e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${i}`:(0,e._)`${c} !== parseInt(${c})`;a.fail$data((0,e._)`(${o} === 0 || (${c} = ${r}/${o}, ${u}))`)}};return nn.default=s,nn}var rn={},on={},cc;function Tw(){if(cc)return on;cc=1,Object.defineProperty(on,"__esModule",{value:!0});function e(t){const s=t.length;let a=0,n=0,r;for(;n<s;)a++,r=t.charCodeAt(n++),r>=55296&&r<=56319&&n<s&&(r=t.charCodeAt(n),(r&64512)===56320&&n++);return a}return on.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',on}var dc;function Sw(){if(dc)return rn;dc=1,Object.defineProperty(rn,"__esModule",{value:!0});const e=Se(),t=Ce(),s=Tw(),n={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:r,schemaCode:o}){const l=r==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${l} than ${o} characters`},params:({schemaCode:r})=>(0,e._)`{limit: ${r}}`},code(r){const{keyword:o,data:l,schemaCode:i,it:c}=r,u=o==="maxLength"?e.operators.GT:e.operators.LT,d=c.opts.unicode===!1?(0,e._)`${l}.length`:(0,e._)`${(0,t.useFunc)(r.gen,s.default)}(${l})`;r.fail$data((0,e._)`${d} ${u} ${i}`)}};return rn.default=n,rn}var ln={},uc;function kw(){if(uc)return ln;uc=1,Object.defineProperty(ln,"__esModule",{value:!0});const e=$t(),t=Ce(),s=Se(),n={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:r})=>(0,s.str)`must match pattern "${r}"`,params:({schemaCode:r})=>(0,s._)`{pattern: ${r}}`},code(r){const{gen:o,data:l,$data:i,schema:c,schemaCode:u,it:d}=r,p=d.opts.unicodeRegExp?"u":"";if(i){const{regExp:f}=d.opts.code,g=f.code==="new RegExp"?(0,s._)`new RegExp`:(0,t.useFunc)(o,f),b=o.let("valid");o.try(()=>o.assign(b,(0,s._)`${g}(${u}, ${p}).test(${l})`),()=>o.assign(b,!1)),r.fail$data((0,s._)`!${b}`)}else{const f=(0,e.usePattern)(r,c);r.fail$data((0,s._)`!${f}.test(${l})`)}}};return ln.default=n,ln}var cn={},pc;function Ew(){if(pc)return cn;pc=1,Object.defineProperty(cn,"__esModule",{value:!0});const e=Se(),s={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:n}){const r=a==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${r} than ${n} properties`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:n,data:r,schemaCode:o}=a,l=n==="maxProperties"?e.operators.GT:e.operators.LT;a.fail$data((0,e._)`Object.keys(${r}).length ${l} ${o}`)}};return cn.default=s,cn}var dn={},fc;function Aw(){if(fc)return dn;fc=1,Object.defineProperty(dn,"__esModule",{value:!0});const e=$t(),t=Se(),s=Ce(),n={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:r}})=>(0,t.str)`must have required property '${r}'`,params:({params:{missingProperty:r}})=>(0,t._)`{missingProperty: ${r}}`},code(r){const{gen:o,schema:l,schemaCode:i,data:c,$data:u,it:d}=r,{opts:p}=d;if(!u&&l.length===0)return;const f=l.length>=p.loopRequired;if(d.allErrors?g():b(),p.strictRequired){const m=r.parentSchema.properties,{definedProperties:_}=r.it;for(const y of l)if(m?.[y]===void 0&&!_.has(y)){const w=d.schemaEnv.baseId+d.errSchemaPath,x=`required property "${y}" is not defined at "${w}" (strictRequired)`;(0,s.checkStrictMode)(d,x,d.opts.strictRequired)}}function g(){if(f||u)r.block$data(t.nil,v);else for(const m of l)(0,e.checkReportMissingProp)(r,m)}function b(){const m=o.let("missing");if(f||u){const _=o.let("valid",!0);r.block$data(_,()=>h(m,_)),r.ok(_)}else o.if((0,e.checkMissingProp)(r,l,m)),(0,e.reportMissingProp)(r,m),o.else()}function v(){o.forOf("prop",i,m=>{r.setParams({missingProperty:m}),o.if((0,e.noPropertyInData)(o,c,m,p.ownProperties),()=>r.error())})}function h(m,_){r.setParams({missingProperty:m}),o.forOf(m,i,()=>{o.assign(_,(0,e.propertyInData)(o,c,m,p.ownProperties)),o.if((0,t.not)(_),()=>{r.error(),o.break()})},t.nil)}}};return dn.default=n,dn}var un={},hc;function Cw(){if(hc)return un;hc=1,Object.defineProperty(un,"__esModule",{value:!0});const e=Se(),s={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:n}){const r=a==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${r} than ${n} items`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:n,data:r,schemaCode:o}=a,l=n==="maxItems"?e.operators.GT:e.operators.LT;a.fail$data((0,e._)`${r}.length ${l} ${o}`)}};return un.default=s,un}var pn={},fn={},mc;function di(){if(mc)return fn;mc=1,Object.defineProperty(fn,"__esModule",{value:!0});const e=Ku();return e.code='require("ajv/dist/runtime/equal").default',fn.default=e,fn}var gc;function Pw(){if(gc)return pn;gc=1,Object.defineProperty(pn,"__esModule",{value:!0});const e=or(),t=Se(),s=Ce(),a=di(),r={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i:o,j:l}})=>(0,t.str)`must NOT have duplicate items (items ## ${l} and ${o} are identical)`,params:({params:{i:o,j:l}})=>(0,t._)`{i: ${o}, j: ${l}}`},code(o){const{gen:l,data:i,$data:c,schema:u,parentSchema:d,schemaCode:p,it:f}=o;if(!c&&!u)return;const g=l.let("valid"),b=d.items?(0,e.getSchemaTypes)(d.items):[];o.block$data(g,v,(0,t._)`${p} === false`),o.ok(g);function v(){const y=l.let("i",(0,t._)`${i}.length`),w=l.let("j");o.setParams({i:y,j:w}),l.assign(g,!0),l.if((0,t._)`${y} > 1`,()=>(h()?m:_)(y,w))}function h(){return b.length>0&&!b.some(y=>y==="object"||y==="array")}function m(y,w){const x=l.name("item"),E=(0,e.checkDataTypes)(b,x,f.opts.strictNumbers,e.DataType.Wrong),I=l.const("indices",(0,t._)`{}`);l.for((0,t._)`;${y}--;`,()=>{l.let(x,(0,t._)`${i}[${y}]`),l.if(E,(0,t._)`continue`),b.length>1&&l.if((0,t._)`typeof ${x} == "string"`,(0,t._)`${x} += "_"`),l.if((0,t._)`typeof ${I}[${x}] == "number"`,()=>{l.assign(w,(0,t._)`${I}[${x}]`),o.error(),l.assign(g,!1).break()}).code((0,t._)`${I}[${x}] = ${y}`)})}function _(y,w){const x=(0,s.useFunc)(l,a.default),E=l.name("outer");l.label(E).for((0,t._)`;${y}--;`,()=>l.for((0,t._)`${w} = ${y}; ${w}--;`,()=>l.if((0,t._)`${x}(${i}[${y}], ${i}[${w}])`,()=>{o.error(),l.assign(g,!1).break(E)})))}}};return pn.default=r,pn}var hn={},bc;function Ow(){if(bc)return hn;bc=1,Object.defineProperty(hn,"__esModule",{value:!0});const e=Se(),t=Ce(),s=di(),n={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:r})=>(0,e._)`{allowedValue: ${r}}`},code(r){const{gen:o,data:l,$data:i,schemaCode:c,schema:u}=r;i||u&&typeof u=="object"?r.fail$data((0,e._)`!${(0,t.useFunc)(o,s.default)}(${l}, ${c})`):r.fail((0,e._)`${u} !== ${l}`)}};return hn.default=n,hn}var mn={},vc;function $w(){if(vc)return mn;vc=1,Object.defineProperty(mn,"__esModule",{value:!0});const e=Se(),t=Ce(),s=di(),n={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:r})=>(0,e._)`{allowedValues: ${r}}`},code(r){const{gen:o,data:l,$data:i,schema:c,schemaCode:u,it:d}=r;if(!i&&c.length===0)throw new Error("enum must have non-empty array");const p=c.length>=d.opts.loopEnum;let f;const g=()=>f??(f=(0,t.useFunc)(o,s.default));let b;if(p||i)b=o.let("valid"),r.block$data(b,v);else{if(!Array.isArray(c))throw new Error("ajv implementation error");const m=o.const("vSchema",u);b=(0,e.or)(...c.map((_,y)=>h(m,y)))}r.pass(b);function v(){o.assign(b,!1),o.forOf("v",u,m=>o.if((0,e._)`${g()}(${l}, ${m})`,()=>o.assign(b,!0).break()))}function h(m,_){const y=c[_];return typeof y=="object"&&y!==null?(0,e._)`${g()}(${l}, ${m}[${_}])`:(0,e._)`${l} === ${y}`}}};return mn.default=n,mn}var _c;function Mw(){if(_c)return sn;_c=1,Object.defineProperty(sn,"__esModule",{value:!0});const e=ww(),t=xw(),s=Sw(),a=kw(),n=Ew(),r=Aw(),o=Cw(),l=Pw(),i=Ow(),c=$w(),u=[e.default,t.default,s.default,a.default,n.default,r.default,o.default,l.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},i.default,c.default];return sn.default=u,sn}var gn={},Vs={},yc;function Wu(){if(yc)return Vs;yc=1,Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.validateAdditionalItems=void 0;const e=Se(),t=Ce(),a={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:r}})=>(0,e.str)`must NOT have more than ${r} items`,params:({params:{len:r}})=>(0,e._)`{limit: ${r}}`},code(r){const{parentSchema:o,it:l}=r,{items:i}=o;if(!Array.isArray(i)){(0,t.checkStrictMode)(l,'"additionalItems" is ignored when "items" is not an array of schemas');return}n(r,i)}};function n(r,o){const{gen:l,schema:i,data:c,keyword:u,it:d}=r;d.items=!0;const p=l.const("len",(0,e._)`${c}.length`);if(i===!1)r.setParams({len:o.length}),r.pass((0,e._)`${p} <= ${o.length}`);else if(typeof i=="object"&&!(0,t.alwaysValidSchema)(d,i)){const g=l.var("valid",(0,e._)`${p} <= ${o.length}`);l.if((0,e.not)(g),()=>f(g)),r.ok(g)}function f(g){l.forRange("i",o.length,p,b=>{r.subschema({keyword:u,dataProp:b,dataPropType:t.Type.Num},g),d.allErrors||l.if((0,e.not)(g),()=>l.break())})}}return Vs.validateAdditionalItems=n,Vs.default=a,Vs}var bn={},Gs={},wc;function Ju(){if(wc)return Gs;wc=1,Object.defineProperty(Gs,"__esModule",{value:!0}),Gs.validateTuple=void 0;const e=Se(),t=Ce(),s=$t(),a={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(r){const{schema:o,it:l}=r;if(Array.isArray(o))return n(r,"additionalItems",o);l.items=!0,!(0,t.alwaysValidSchema)(l,o)&&r.ok((0,s.validateArray)(r))}};function n(r,o,l=r.schema){const{gen:i,parentSchema:c,data:u,keyword:d,it:p}=r;b(c),p.opts.unevaluated&&l.length&&p.items!==!0&&(p.items=t.mergeEvaluated.items(i,l.length,p.items));const f=i.name("valid"),g=i.const("len",(0,e._)`${u}.length`);l.forEach((v,h)=>{(0,t.alwaysValidSchema)(p,v)||(i.if((0,e._)`${g} > ${h}`,()=>r.subschema({keyword:d,schemaProp:h,dataProp:h},f)),r.ok(f))});function b(v){const{opts:h,errSchemaPath:m}=p,_=l.length,y=_===v.minItems&&(_===v.maxItems||v[o]===!1);if(h.strictTuples&&!y){const w=`"${d}" is ${_}-tuple, but minItems or maxItems/${o} are not specified or different at path "${m}"`;(0,t.checkStrictMode)(p,w,h.strictTuples)}}}return Gs.validateTuple=n,Gs.default=a,Gs}var xc;function Lw(){if(xc)return bn;xc=1,Object.defineProperty(bn,"__esModule",{value:!0});const e=Ju(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:s=>(0,e.validateTuple)(s,"items")};return bn.default=t,bn}var vn={},Tc;function Rw(){if(Tc)return vn;Tc=1,Object.defineProperty(vn,"__esModule",{value:!0});const e=Se(),t=Ce(),s=$t(),a=Wu(),r={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:o}})=>(0,e.str)`must NOT have more than ${o} items`,params:({params:{len:o}})=>(0,e._)`{limit: ${o}}`},code(o){const{schema:l,parentSchema:i,it:c}=o,{prefixItems:u}=i;c.items=!0,!(0,t.alwaysValidSchema)(c,l)&&(u?(0,a.validateAdditionalItems)(o,u):o.ok((0,s.validateArray)(o)))}};return vn.default=r,vn}var _n={},Sc;function Dw(){if(Sc)return _n;Sc=1,Object.defineProperty(_n,"__esModule",{value:!0});const e=Se(),t=Ce(),a={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:n,max:r}})=>r===void 0?(0,e.str)`must contain at least ${n} valid item(s)`:(0,e.str)`must contain at least ${n} and no more than ${r} valid item(s)`,params:({params:{min:n,max:r}})=>r===void 0?(0,e._)`{minContains: ${n}}`:(0,e._)`{minContains: ${n}, maxContains: ${r}}`},code(n){const{gen:r,schema:o,parentSchema:l,data:i,it:c}=n;let u,d;const{minContains:p,maxContains:f}=l;c.opts.next?(u=p===void 0?1:p,d=f):u=1;const g=r.const("len",(0,e._)`${i}.length`);if(n.setParams({min:u,max:d}),d===void 0&&u===0){(0,t.checkStrictMode)(c,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(d!==void 0&&u>d){(0,t.checkStrictMode)(c,'"minContains" > "maxContains" is always invalid'),n.fail();return}if((0,t.alwaysValidSchema)(c,o)){let _=(0,e._)`${g} >= ${u}`;d!==void 0&&(_=(0,e._)`${_} && ${g} <= ${d}`),n.pass(_);return}c.items=!0;const b=r.name("valid");d===void 0&&u===1?h(b,()=>r.if(b,()=>r.break())):u===0?(r.let(b,!0),d!==void 0&&r.if((0,e._)`${i}.length > 0`,v)):(r.let(b,!1),v()),n.result(b,()=>n.reset());function v(){const _=r.name("_valid"),y=r.let("count",0);h(_,()=>r.if(_,()=>m(y)))}function h(_,y){r.forRange("i",0,g,w=>{n.subschema({keyword:"contains",dataProp:w,dataPropType:t.Type.Num,compositeRule:!0},_),y()})}function m(_){r.code((0,e._)`${_}++`),d===void 0?r.if((0,e._)`${_} >= ${u}`,()=>r.assign(b,!0).break()):(r.if((0,e._)`${_} > ${d}`,()=>r.assign(b,!1).break()),u===1?r.assign(b,!0):r.if((0,e._)`${_} >= ${u}`,()=>r.assign(b,!0)))}}};return _n.default=a,_n}var fo={},kc;function Iw(){return kc||(kc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=Se(),s=Ce(),a=$t();e.error={message:({params:{property:i,depsCount:c,deps:u}})=>{const d=c===1?"property":"properties";return(0,t.str)`must have ${d} ${u} when property ${i} is present`},params:({params:{property:i,depsCount:c,deps:u,missingProperty:d}})=>(0,t._)`{property: ${i},
    missingProperty: ${d},
    depsCount: ${c},
    deps: ${u}}`};const n={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(i){const[c,u]=r(i);o(i,c),l(i,u)}};function r({schema:i}){const c={},u={};for(const d in i){if(d==="__proto__")continue;const p=Array.isArray(i[d])?c:u;p[d]=i[d]}return[c,u]}function o(i,c=i.schema){const{gen:u,data:d,it:p}=i;if(Object.keys(c).length===0)return;const f=u.let("missing");for(const g in c){const b=c[g];if(b.length===0)continue;const v=(0,a.propertyInData)(u,d,g,p.opts.ownProperties);i.setParams({property:g,depsCount:b.length,deps:b.join(", ")}),p.allErrors?u.if(v,()=>{for(const h of b)(0,a.checkReportMissingProp)(i,h)}):(u.if((0,t._)`${v} && (${(0,a.checkMissingProp)(i,b,f)})`),(0,a.reportMissingProp)(i,f),u.else())}}e.validatePropertyDeps=o;function l(i,c=i.schema){const{gen:u,data:d,keyword:p,it:f}=i,g=u.name("valid");for(const b in c)(0,s.alwaysValidSchema)(f,c[b])||(u.if((0,a.propertyInData)(u,d,b,f.opts.ownProperties),()=>{const v=i.subschema({keyword:p,schemaProp:b},g);i.mergeValidEvaluated(v,g)},()=>u.var(g,!0)),i.ok(g))}e.validateSchemaDeps=l,e.default=n})(fo)),fo}var yn={},Ec;function Nw(){if(Ec)return yn;Ec=1,Object.defineProperty(yn,"__esModule",{value:!0});const e=Se(),t=Ce(),a={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:n})=>(0,e._)`{propertyName: ${n.propertyName}}`},code(n){const{gen:r,schema:o,data:l,it:i}=n;if((0,t.alwaysValidSchema)(i,o))return;const c=r.name("valid");r.forIn("key",l,u=>{n.setParams({propertyName:u}),n.subschema({keyword:"propertyNames",data:u,dataTypes:["string"],propertyName:u,compositeRule:!0},c),r.if((0,e.not)(c),()=>{n.error(!0),i.allErrors||r.break()})}),n.ok(c)}};return yn.default=a,yn}var wn={},Ac;function Xu(){if(Ac)return wn;Ac=1,Object.defineProperty(wn,"__esModule",{value:!0});const e=$t(),t=Se(),s=ks(),a=Ce(),r={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:o})=>(0,t._)`{additionalProperty: ${o.additionalProperty}}`},code(o){const{gen:l,schema:i,parentSchema:c,data:u,errsCount:d,it:p}=o;if(!d)throw new Error("ajv implementation error");const{allErrors:f,opts:g}=p;if(p.props=!0,g.removeAdditional!=="all"&&(0,a.alwaysValidSchema)(p,i))return;const b=(0,e.allSchemaProperties)(c.properties),v=(0,e.allSchemaProperties)(c.patternProperties);h(),o.ok((0,t._)`${d} === ${s.default.errors}`);function h(){l.forIn("key",u,x=>{!b.length&&!v.length?y(x):l.if(m(x),()=>y(x))})}function m(x){let E;if(b.length>8){const I=(0,a.schemaRefOrVal)(p,c.properties,"properties");E=(0,e.isOwnProperty)(l,I,x)}else b.length?E=(0,t.or)(...b.map(I=>(0,t._)`${x} === ${I}`)):E=t.nil;return v.length&&(E=(0,t.or)(E,...v.map(I=>(0,t._)`${(0,e.usePattern)(o,I)}.test(${x})`))),(0,t.not)(E)}function _(x){l.code((0,t._)`delete ${u}[${x}]`)}function y(x){if(g.removeAdditional==="all"||g.removeAdditional&&i===!1){_(x);return}if(i===!1){o.setParams({additionalProperty:x}),o.error(),f||l.break();return}if(typeof i=="object"&&!(0,a.alwaysValidSchema)(p,i)){const E=l.name("valid");g.removeAdditional==="failing"?(w(x,E,!1),l.if((0,t.not)(E),()=>{o.reset(),_(x)})):(w(x,E),f||l.if((0,t.not)(E),()=>l.break()))}}function w(x,E,I){const L={keyword:"additionalProperties",dataProp:x,dataPropType:a.Type.Str};I===!1&&Object.assign(L,{compositeRule:!0,createErrors:!1,allErrors:!1}),o.subschema(L,E)}}};return wn.default=r,wn}var xn={},Cc;function Bw(){if(Cc)return xn;Cc=1,Object.defineProperty(xn,"__esModule",{value:!0});const e=Ar(),t=$t(),s=Ce(),a=Xu(),n={keyword:"properties",type:"object",schemaType:"object",code(r){const{gen:o,schema:l,parentSchema:i,data:c,it:u}=r;u.opts.removeAdditional==="all"&&i.additionalProperties===void 0&&a.default.code(new e.KeywordCxt(u,a.default,"additionalProperties"));const d=(0,t.allSchemaProperties)(l);for(const v of d)u.definedProperties.add(v);u.opts.unevaluated&&d.length&&u.props!==!0&&(u.props=s.mergeEvaluated.props(o,(0,s.toHash)(d),u.props));const p=d.filter(v=>!(0,s.alwaysValidSchema)(u,l[v]));if(p.length===0)return;const f=o.name("valid");for(const v of p)g(v)?b(v):(o.if((0,t.propertyInData)(o,c,v,u.opts.ownProperties)),b(v),u.allErrors||o.else().var(f,!0),o.endIf()),r.it.definedProperties.add(v),r.ok(f);function g(v){return u.opts.useDefaults&&!u.compositeRule&&l[v].default!==void 0}function b(v){r.subschema({keyword:"properties",schemaProp:v,dataProp:v},f)}}};return xn.default=n,xn}var Tn={},Pc;function Fw(){if(Pc)return Tn;Pc=1,Object.defineProperty(Tn,"__esModule",{value:!0});const e=$t(),t=Se(),s=Ce(),a=Ce(),n={keyword:"patternProperties",type:"object",schemaType:"object",code(r){const{gen:o,schema:l,data:i,parentSchema:c,it:u}=r,{opts:d}=u,p=(0,e.allSchemaProperties)(l),f=p.filter(y=>(0,s.alwaysValidSchema)(u,l[y]));if(p.length===0||f.length===p.length&&(!u.opts.unevaluated||u.props===!0))return;const g=d.strictSchema&&!d.allowMatchingProperties&&c.properties,b=o.name("valid");u.props!==!0&&!(u.props instanceof t.Name)&&(u.props=(0,a.evaluatedPropsToName)(o,u.props));const{props:v}=u;h();function h(){for(const y of p)g&&m(y),u.allErrors?_(y):(o.var(b,!0),_(y),o.if(b))}function m(y){for(const w in g)new RegExp(y).test(w)&&(0,s.checkStrictMode)(u,`property ${w} matches pattern ${y} (use allowMatchingProperties)`)}function _(y){o.forIn("key",i,w=>{o.if((0,t._)`${(0,e.usePattern)(r,y)}.test(${w})`,()=>{const x=f.includes(y);x||r.subschema({keyword:"patternProperties",schemaProp:y,dataProp:w,dataPropType:a.Type.Str},b),u.opts.unevaluated&&v!==!0?o.assign((0,t._)`${v}[${w}]`,!0):!x&&!u.allErrors&&o.if((0,t.not)(b),()=>o.break())})})}}};return Tn.default=n,Tn}var Sn={},Oc;function zw(){if(Oc)return Sn;Oc=1,Object.defineProperty(Sn,"__esModule",{value:!0});const e=Ce(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(s){const{gen:a,schema:n,it:r}=s;if((0,e.alwaysValidSchema)(r,n)){s.fail();return}const o=a.name("valid");s.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},o),s.failResult(o,()=>s.reset(),()=>s.error())},error:{message:"must NOT be valid"}};return Sn.default=t,Sn}var kn={},$c;function Hw(){if($c)return kn;$c=1,Object.defineProperty(kn,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:$t().validateUnion,error:{message:"must match a schema in anyOf"}};return kn.default=t,kn}var En={},Mc;function jw(){if(Mc)return En;Mc=1,Object.defineProperty(En,"__esModule",{value:!0});const e=Se(),t=Ce(),a={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:n})=>(0,e._)`{passingSchemas: ${n.passing}}`},code(n){const{gen:r,schema:o,parentSchema:l,it:i}=n;if(!Array.isArray(o))throw new Error("ajv implementation error");if(i.opts.discriminator&&l.discriminator)return;const c=o,u=r.let("valid",!1),d=r.let("passing",null),p=r.name("_valid");n.setParams({passing:d}),r.block(f),n.result(u,()=>n.reset(),()=>n.error(!0));function f(){c.forEach((g,b)=>{let v;(0,t.alwaysValidSchema)(i,g)?r.var(p,!0):v=n.subschema({keyword:"oneOf",schemaProp:b,compositeRule:!0},p),b>0&&r.if((0,e._)`${p} && ${u}`).assign(u,!1).assign(d,(0,e._)`[${d}, ${b}]`).else(),r.if(p,()=>{r.assign(u,!0),r.assign(d,b),v&&n.mergeEvaluated(v,e.Name)})})}}};return En.default=a,En}var An={},Lc;function Uw(){if(Lc)return An;Lc=1,Object.defineProperty(An,"__esModule",{value:!0});const e=Ce(),t={keyword:"allOf",schemaType:"array",code(s){const{gen:a,schema:n,it:r}=s;if(!Array.isArray(n))throw new Error("ajv implementation error");const o=a.name("valid");n.forEach((l,i)=>{if((0,e.alwaysValidSchema)(r,l))return;const c=s.subschema({keyword:"allOf",schemaProp:i},o);s.ok(o),s.mergeEvaluated(c)})}};return An.default=t,An}var Cn={},Rc;function qw(){if(Rc)return Cn;Rc=1,Object.defineProperty(Cn,"__esModule",{value:!0});const e=Se(),t=Ce(),a={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:r})=>(0,e.str)`must match "${r.ifClause}" schema`,params:({params:r})=>(0,e._)`{failingKeyword: ${r.ifClause}}`},code(r){const{gen:o,parentSchema:l,it:i}=r;l.then===void 0&&l.else===void 0&&(0,t.checkStrictMode)(i,'"if" without "then" and "else" is ignored');const c=n(i,"then"),u=n(i,"else");if(!c&&!u)return;const d=o.let("valid",!0),p=o.name("_valid");if(f(),r.reset(),c&&u){const b=o.let("ifClause");r.setParams({ifClause:b}),o.if(p,g("then",b),g("else",b))}else c?o.if(p,g("then")):o.if((0,e.not)(p),g("else"));r.pass(d,()=>r.error(!0));function f(){const b=r.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},p);r.mergeEvaluated(b)}function g(b,v){return()=>{const h=r.subschema({keyword:b},p);o.assign(d,p),r.mergeValidEvaluated(h,d),v?o.assign(v,(0,e._)`${b}`):r.setParams({ifClause:b})}}}};function n(r,o){const l=r.schema[o];return l!==void 0&&!(0,t.alwaysValidSchema)(r,l)}return Cn.default=a,Cn}var Pn={},Dc;function Vw(){if(Dc)return Pn;Dc=1,Object.defineProperty(Pn,"__esModule",{value:!0});const e=Ce(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:s,parentSchema:a,it:n}){a.if===void 0&&(0,e.checkStrictMode)(n,`"${s}" without "if" is ignored`)}};return Pn.default=t,Pn}var Ic;function Gw(){if(Ic)return gn;Ic=1,Object.defineProperty(gn,"__esModule",{value:!0});const e=Wu(),t=Lw(),s=Ju(),a=Rw(),n=Dw(),r=Iw(),o=Nw(),l=Xu(),i=Bw(),c=Fw(),u=zw(),d=Hw(),p=jw(),f=Uw(),g=qw(),b=Vw();function v(h=!1){const m=[u.default,d.default,p.default,f.default,g.default,b.default,o.default,l.default,r.default,i.default,c.default];return h?m.push(t.default,a.default):m.push(e.default,s.default),m.push(n.default),m}return gn.default=v,gn}var On={},$n={},Nc;function Kw(){if(Nc)return $n;Nc=1,Object.defineProperty($n,"__esModule",{value:!0});const e=Se(),s={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:a})=>(0,e.str)`must match format "${a}"`,params:({schemaCode:a})=>(0,e._)`{format: ${a}}`},code(a,n){const{gen:r,data:o,$data:l,schema:i,schemaCode:c,it:u}=a,{opts:d,errSchemaPath:p,schemaEnv:f,self:g}=u;if(!d.validateFormats)return;l?b():v();function b(){const h=r.scopeValue("formats",{ref:g.formats,code:d.code.formats}),m=r.const("fDef",(0,e._)`${h}[${c}]`),_=r.let("fType"),y=r.let("format");r.if((0,e._)`typeof ${m} == "object" && !(${m} instanceof RegExp)`,()=>r.assign(_,(0,e._)`${m}.type || "string"`).assign(y,(0,e._)`${m}.validate`),()=>r.assign(_,(0,e._)`"string"`).assign(y,m)),a.fail$data((0,e.or)(w(),x()));function w(){return d.strictSchema===!1?e.nil:(0,e._)`${c} && !${y}`}function x(){const E=f.$async?(0,e._)`(${m}.async ? await ${y}(${o}) : ${y}(${o}))`:(0,e._)`${y}(${o})`,I=(0,e._)`(typeof ${y} == "function" ? ${E} : ${y}.test(${o}))`;return(0,e._)`${y} && ${y} !== true && ${_} === ${n} && !${I}`}}function v(){const h=g.formats[i];if(!h){w();return}if(h===!0)return;const[m,_,y]=x(h);m===n&&a.pass(E());function w(){if(d.strictSchema===!1){g.logger.warn(I());return}throw new Error(I());function I(){return`unknown format "${i}" ignored in schema at path "${p}"`}}function x(I){const L=I instanceof RegExp?(0,e.regexpCode)(I):d.code.formats?(0,e._)`${d.code.formats}${(0,e.getProperty)(i)}`:void 0,C=r.scopeValue("formats",{key:i,ref:I,code:L});return typeof I=="object"&&!(I instanceof RegExp)?[I.type||"string",I.validate,(0,e._)`${C}.validate`]:["string",I,C]}function E(){if(typeof h=="object"&&!(h instanceof RegExp)&&h.async){if(!f.$async)throw new Error("async format in sync schema");return(0,e._)`await ${y}(${o})`}return typeof _=="function"?(0,e._)`${y}(${o})`:(0,e._)`${y}.test(${o})`}}}};return $n.default=s,$n}var Bc;function Yw(){if(Bc)return On;Bc=1,Object.defineProperty(On,"__esModule",{value:!0});const t=[Kw().default];return On.default=t,On}var Ms={},Fc;function Ww(){return Fc||(Fc=1,Object.defineProperty(Ms,"__esModule",{value:!0}),Ms.contentVocabulary=Ms.metadataVocabulary=void 0,Ms.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],Ms.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),Ms}var zc;function Jw(){if(zc)return Za;zc=1,Object.defineProperty(Za,"__esModule",{value:!0});const e=yw(),t=Mw(),s=Gw(),a=Yw(),n=Ww(),r=[e.default,t.default,(0,s.default)(),a.default,n.metadataVocabulary,n.contentVocabulary];return Za.default=r,Za}var Mn={},fa={},Hc;function Xw(){if(Hc)return fa;Hc=1,Object.defineProperty(fa,"__esModule",{value:!0}),fa.DiscrError=void 0;var e;return(function(t){t.Tag="tag",t.Mapping="mapping"})(e||(fa.DiscrError=e={})),fa}var jc;function Qw(){if(jc)return Mn;jc=1,Object.defineProperty(Mn,"__esModule",{value:!0});const e=Se(),t=Xw(),s=ci(),a=Cr(),n=Ce(),o={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:l,tagName:i}})=>l===t.DiscrError.Tag?`tag "${i}" must be string`:`value of tag "${i}" must be in oneOf`,params:({params:{discrError:l,tag:i,tagName:c}})=>(0,e._)`{error: ${l}, tag: ${c}, tagValue: ${i}}`},code(l){const{gen:i,data:c,schema:u,parentSchema:d,it:p}=l,{oneOf:f}=d;if(!p.opts.discriminator)throw new Error("discriminator: requires discriminator option");const g=u.propertyName;if(typeof g!="string")throw new Error("discriminator: requires propertyName");if(u.mapping)throw new Error("discriminator: mapping is not supported");if(!f)throw new Error("discriminator: requires oneOf keyword");const b=i.let("valid",!1),v=i.const("tag",(0,e._)`${c}${(0,e.getProperty)(g)}`);i.if((0,e._)`typeof ${v} == "string"`,()=>h(),()=>l.error(!1,{discrError:t.DiscrError.Tag,tag:v,tagName:g})),l.ok(b);function h(){const y=_();i.if(!1);for(const w in y)i.elseIf((0,e._)`${v} === ${w}`),i.assign(b,m(y[w]));i.else(),l.error(!1,{discrError:t.DiscrError.Mapping,tag:v,tagName:g}),i.endIf()}function m(y){const w=i.name("valid"),x=l.subschema({keyword:"oneOf",schemaProp:y},w);return l.mergeEvaluated(x,e.Name),w}function _(){var y;const w={},x=I(d);let E=!0;for(let k=0;k<f.length;k++){let S=f[k];if(S?.$ref&&!(0,n.schemaHasRulesButRef)(S,p.self.RULES)){const z=S.$ref;if(S=s.resolveRef.call(p.self,p.schemaEnv.root,p.baseId,z),S instanceof s.SchemaEnv&&(S=S.schema),S===void 0)throw new a.default(p.opts.uriResolver,p.baseId,z)}const $=(y=S?.properties)===null||y===void 0?void 0:y[g];if(typeof $!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${g}"`);E=E&&(x||I(S)),L($,k)}if(!E)throw new Error(`discriminator: "${g}" must be required`);return w;function I({required:k}){return Array.isArray(k)&&k.includes(g)}function L(k,S){if(k.const)C(k.const,S);else if(k.enum)for(const $ of k.enum)C($,S);else throw new Error(`discriminator: "properties/${g}" must have "const" or "enum"`)}function C(k,S){if(typeof k!="string"||k in w)throw new Error(`discriminator: "${g}" values must be unique strings`);w[k]=S}}}};return Mn.default=o,Mn}const Zw="http://json-schema.org/draft-07/schema#",e2="http://json-schema.org/draft-07/schema#",t2="Core schema meta-schema",s2={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},a2=["object","boolean"],n2={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},r2={$schema:Zw,$id:e2,title:t2,definitions:s2,type:a2,properties:n2,default:!0};var Uc;function o2(){return Uc||(Uc=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const s=bw(),a=Jw(),n=Qw(),r=r2,o=["/properties"],l="http://json-schema.org/draft-07/schema";class i extends s.default{_addVocabularies(){super._addVocabularies(),a.default.forEach(g=>this.addVocabulary(g)),this.opts.discriminator&&this.addKeyword(n.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const g=this.opts.$data?this.$dataMetaSchema(r,o):r;this.addMetaSchema(g,l,!1),this.refs["http://json-schema.org/schema"]=l}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(l)?l:void 0)}}t.Ajv=i,e.exports=t=i,e.exports.Ajv=i,Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var c=Ar();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return c.KeywordCxt}});var u=Se();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return u._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return u.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return u.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return u.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return u.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return u.CodeGen}});var d=li();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return d.default}});var p=Cr();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return p.default}})})(Ya,Ya.exports)),Ya.exports}var i2=o2();const l2=Cu(i2),c2={$id:"gameModeRules",type:"object",required:["betTypes","requiredBetTypes","maxBetsPerType","maxBetsTotal","minBetsTotal","stakeRule","stakeMin","allowPartialSubmit","allowBetModification","lockOnFirstBet","oneBetPerMatchPerType"],properties:{betTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},minItems:1,description:"Allowed bet types for this game mode"},requiredBetTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},description:"Bet types the user MUST place. Empty = no requirement."},maxBetsPerType:{type:"integer",minimum:-1,description:"Max bets per bet type per match. -1 = unlimited."},maxBetsTotal:{type:"integer",minimum:-1,description:"Max total bets across all matches. -1 = unlimited."},minBetsTotal:{type:"integer",minimum:0,description:"Min total bets required before submission. 0 = none."},stakeRule:{type:"string",enum:["FREE","SPEND_ALL","MIN_MAX"],description:"FREE = any amount | SPEND_ALL = must use entire TD$ | MIN_MAX = within range"},stakeMin:{type:["number","null"],minimum:0,description:"Min stake per bet. null = no minimum."},stakeMax:{type:["number","null"],minimum:0,description:"Max stake per bet. null = no maximum."},allowPartialSubmit:{type:"boolean",description:"Can user submit with incomplete lineup?"},allowBetModification:{type:"boolean",description:"Can user change/remove bets after placing?"},lockOnFirstBet:{type:"boolean",description:"Does placing first bet lock user into the tournament?"},oneBetPerMatchPerType:{type:"boolean",description:"Restrict to one bet per match per bet type?"}},additionalProperties:!1},d2={$id:"gameModeScoring",type:"object",required:["method","rankBy","penalizeMissing"],properties:{method:{type:"string",enum:["PAYOUT_SUM","PROFIT","WIN_RATE","CUSTOM"],description:"Primary scoring method"},rankBy:{type:"array",items:{type:"string"},minItems:1,description:"Ordered tiebreaker fields"},bonuses:{type:"array",items:{type:"object",properties:{condition:{type:"string"},points:{type:"number"},label:{type:"string"}}},description:"Bonus scoring rules"},penalizeMissing:{type:"boolean",description:"Penalize users who did not place all required bets?"}},additionalProperties:!1},Qu=new l2({allErrors:!0}),qc=Qu.compile(c2),Vc=Qu.compile(d2),u2=e=>{const t=[];qc(e.rules)||qc.errors.forEach(r=>{t.push(`rules${r.instancePath}: ${r.message}`)}),Vc(e.scoring)||Vc.errors.forEach(r=>{t.push(`scoring${r.instancePath}: ${r.message}`)});const n=e.rules;return n.requiredBetTypes.forEach(r=>{n.betTypes.includes(r)||t.push(`requiredBetTypes contains "${r}" which is not in betTypes`)}),n.stakeRule==="MIN_MAX"&&n.stakeMin==null&&n.stakeMax==null&&t.push("stakeRule is MIN_MAX but neither stakeMin nor stakeMax is set"),n.minBetsTotal>0&&n.requiredBetTypes.length>n.minBetsTotal&&t.push(`requiredBetTypes (${n.requiredBetTypes.length}) exceeds minBetsTotal (${n.minBetsTotal})`),{valid:t.length===0,errors:t}},p2=e=>{const t=e.rules,s=e.scoring;return{"mode.id":e.id,"mode.label":e.label,"mode.description":e.description,"rules.betTypes":t.betTypes.join(", "),"rules.requiredBetTypes":t.requiredBetTypes.length>0?t.requiredBetTypes.join(", "):"(none)","rules.maxBetsPerType":t.maxBetsPerType===-1?"Unlimited":String(t.maxBetsPerType),"rules.maxBetsTotal":t.maxBetsTotal===-1?"Unlimited":String(t.maxBetsTotal),"rules.minBetsTotal":String(t.minBetsTotal),"rules.stakeRule":t.stakeRule,"rules.stakeMin":t.stakeMin!=null?String(t.stakeMin):"(none)","rules.stakeMax":t.stakeMax!=null?String(t.stakeMax):"(none)","rules.allowPartialSubmit":String(t.allowPartialSubmit),"rules.allowBetModification":String(t.allowBetModification),"rules.lockOnFirstBet":String(t.lockOnFirstBet),"rules.oneBetPerMatchPerType":String(t.oneBetPerMatchPerType),"scoring.method":s.method,"scoring.rankBy":s.rankBy.join(", "),"scoring.bonuses":s.bonuses.length>0?JSON.stringify(s.bonuses):"(none)","scoring.penalizeMissing":String(s.penalizeMissing),"ui.badge":e.getBadge()?`${e.getBadge().label} (${e.getBadge().color})`:"(none)","ui.emptyStateText":e.getEmptyStateText()}},ir={DEFAULT:new Ol,DEFAULT_FORMAT:new Ol,SET_IT_AND_FORGET_IT:new tw},Io=e=>ir[e]||ir.DEFAULT,f2=()=>Object.keys(ir),h2=()=>{const e={};return Object.entries(ir).forEach(([t,s])=>{e[t]=u2(s)}),e};typeof window<"u"&&(window.GameMode={get:Io,modes:f2,validate:h2,dump:e=>p2(Io(e))});class m2 extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Re.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name","data-active-count","data-td-dollars"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}handleLogoClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}handleCreateContestClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.CREATE_CONTEST",JSON.stringify({timestamp:Date.now()}))}render(){const t=Re.isDark,s=this.getAttribute("data-user-name")||"Guest",a=this.getAttribute("data-active-count")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),r=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString();this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}
        ${Ss()}

        :host {
          display: block;
          width: 100%;
          background: var(--surface-base, #141414);
        }

        .head-top-container {
          max-width: var(--bma-app-head__max--width, 1180px);
          margin: 0 auto;
          padding: 0.75rem 1rem 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .head-top-row {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin: 0 auto;
        }

        .logo-link {
          display: block;
          cursor: pointer;
        }

        .logo-img {
          height: clamp(48px, 10vw, 60px);
          width: auto;
          max-width: 220px;
          object-fit: contain;
          display: block;
        }

        .profile-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px 4px 4px;
          background: rgba(255, 215, 0, 0.1);
          border: none;
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.3);
          border-radius: var(--radius-2xl, 24px);
          cursor: pointer;
          transition: background 0.2s ease, box-shadow 0.2s ease;
          user-select: none;
        }

        .profile-pill:hover,
        .profile-pill:focus-visible {
          background: rgba(255, 215, 0, 0.2);
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.55);
          outline: none;
        }

        .profile-icon {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background-color: rgba(32, 32, 32, 0.8);
          background-image: var(--nav-icon__account_circle--${t?"dark":"vlight"});
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          flex-shrink: 0;
        }

        .profile-name {
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--status-locked-text, #F7C60D);
          white-space: nowrap;
        }

        .profile-chevron {
          width: 16px;
          height: 16px;
          fill: var(--status-locked-text, #F7C60D);
          opacity: 1;
          flex-shrink: 0;
          transition: transform 0.15s ease;
        }

        .profile-pill:hover .profile-chevron { transform: translateY(1px); }

        /* KPI row */
        .head-kpis {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          width: 100%;
          max-width: 480px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          margin-top: 8px;
        }

        .head-kpi {
          text-align: center;
          padding: 10px 8px 8px;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          user-select: none;
        }

        .head-kpi:last-child { border-right: none; }

        .head-kpi__value {
          display: block;
          font-size: 1.15rem;
          font-weight: 800;
          color: rgba(255, 255, 255, 0.95);
          line-height: 1.1;
          font-variant-numeric: tabular-nums;
        }

        .head-kpi__label {
          display: block;
          font-size: 0.65rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.45);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-top: 2px;
        }

        /* CTA slot */
        .head-kpi--cta {
          padding: 6px 4px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .head-kpi__cta {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 6px 12px;
          background: var(--status-locked-text, #F7C60D);
          color: #141414;
          border: none;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: filter 0.15s ease;
          -webkit-tap-highlight-color: transparent;
          white-space: nowrap;
        }

        .head-kpi__cta:hover { filter: brightness(1.1); }

        .head-kpi__cta svg {
          width: 14px;
          height: 14px;
          fill: currentColor;
          flex-shrink: 0;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .head-top-container { padding: 8px 12px 0; gap: 6px; }
          .head-top-row { gap: 8px; }
          .logo-img { height: 44px; }
          .profile-pill { padding: 3px 10px 3px 3px; }
          .profile-icon { width: 26px; height: 26px; }
          .profile-name { display: none; }
          .head-kpis { margin-top: 10px; }
          .head-kpi { padding: 8px 4px 6px; }
          .head-kpi__value { font-size: 0.95rem; }
          .head-kpi__label { font-size: 0.58rem; letter-spacing: 0.6px; }
          .head-kpi__cta { padding: 5px 10px; font-size: 0.62rem; }
          .head-kpi__cta svg { width: 12px; height: 12px; }
        }
        @media (max-width: 380px) {
          .head-kpi__cta-label { display: none; }
        }
      </style>

      <div class="head-top-container">
        <div class="head-top-row">
          <a href="#" class="logo-link" id="logoLink">
            <img
              src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_secondary_logo&format=png"
              alt="Bet Max Action"
              class="logo-img"
              data-m5t-brand-src-swap="true"
            />
          </a>

          <button class="profile-pill" id="profileIcon" type="button" aria-label="User Profile">
            <span class="profile-icon"></span>
            <span class="profile-name">${s}</span>
            <svg class="profile-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg>
          </button>
        </div>

        <!--
        <div class="head-kpis">
          <div class="head-kpi">
            <span class="head-kpi__value">${a}</span>
            <span class="head-kpi__label">Active</span>
          </div>
          <div class="head-kpi">
            <span class="head-kpi__value">${r}</span>
            <span class="head-kpi__label">TD$</span>
          </div>
          <div class="head-kpi head-kpi--cta">
            <button type="button" class="head-kpi__cta" id="createContestBtn" aria-label="Create Contest">
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
              <span class="head-kpi__cta-label">Create Contest</span>
            </button>
          </div>
        </div>
        -->
      </div>
    `;const o=this.shadowRoot.querySelector("#logoLink"),l=this.shadowRoot.querySelector("#profileIcon"),i=this.shadowRoot.querySelector("#createContestBtn");o&&o.addEventListener("click",c=>this.handleLogoClick(c)),l&&l.addEventListener("click",c=>this.handleProfileClick(c)),i&&i.addEventListener("click",c=>this.handleCreateContestClick(c))}}customElements.define("bma-app-head-top",m2);class g2 extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Re.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count","data-private-count","data-invites-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),ce.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=Re.isDark,s=[{name:"head_mid_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS"},{name:"head_mid_private",caption:"Bet Max Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE"},{name:"head_mid_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],a=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,r=parseInt(this.getAttribute("data-invites-count"))||0,o=l=>{const i=this.selectedTab===l.name;let c="";return l.name==="head_mid_tourneys"?c=`<span class="nav-badge">${a}</span>`:l.name==="head_mid_private"&&(c=`<span class="nav-badge">${n}</span>`,r>0&&(c+=`<span class="nav-badge nav-badge--invite" aria-label="${r} pending invite${r===1?"":"s"}">${r}</span>`)),`
        <div
          class="nav-item ${i?"nav-selected":"nav-unselected"}"
          data-tab="${l.name}"
          role="button"
          tabindex="0"
          aria-label="${l.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${l.iconVar}"></div>
            ${c}
          </div>
          <span class="nav-caption">${l.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}
        ${Ss()}

        :host {
          display: block;
          width: 100%;
          background: var(--surface-sticky, #141414);
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          box-shadow:
            var(--shadow-inset-depth, inset 0 1px 2px rgba(0, 0, 0, 0.2)),
            0 2px 6px rgba(0, 0, 0, 0.1);
        }

        /* Hide on mobile — foot takes over */
        @media ${Lu.mobile} {
          :host {
            display: none;
          }
        }

        .mid-container {
          max-width: var(--bma-app-head__max--width, 1220px);
          margin: 0 auto;
          padding: 0.25rem 0;
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 0;
        }

        .nav-item {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.5rem 0.25rem 0.375rem;
          cursor: pointer;
          transition: all var(--transition-normal, 250ms ease);
          border-bottom: 2px solid transparent;
          user-select: none;
          min-height: 48px;
        }

        .nav-icon {
          width: 24px;
          height: 24px;
          border-radius: 0;
          background-color: transparent;
          background-position: center;
          background-repeat: no-repeat;
          background-size: contain;
          transition: all var(--transition-normal, 250ms ease);
          filter: brightness(70%);
          margin-bottom: 0.125rem;
        }

        .nav-icon[data-icon-var="--nav-icon__sports--"] {
          background-image: var(--nav-icon__trophy--${t?"dark":"light"});
        }

        /* My Tourneys — Material Symbols "calendar_today" inlined.
           Reads as "my schedule of contests"; kept local to this component
           to avoid adding a shared CSS var just for one tab. */
        .nav-icon[data-icon-var="--nav-icon__my_tourneys--"] {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='${t?"%23fff":"%23000"}' viewBox='0 -960 960 960'%3E%3Cpath d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80zm0-80h560v-400H200zm0-480h560v-80H200zm0 0v-80z'/%3E%3C/svg%3E");
        }

        .nav-icon[data-icon-var="--nav-icon__trophy--"] {
          background-image: var(--nav-icon__person_celebrate--${t?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__leaderboard--"] {
          background-image: var(--nav-icon__social_leaderboard--${t?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__my_profile_circle--"] {
          background-image: var(--nav-icon__account_circle--${t?"dark":"light"});
        }

        .nav-icon-wrap {
          position: relative;
          display: inline-flex;
        }

        .nav-badge {
          position: absolute;
          top: -10px;
          right: -10px;
          min-width: 16px;
          height: 16px;
          padding: 0 4px;
          border-radius: var(--radius-full, 9999px);
          background: var(--status-upcoming-text, #00E676);
          color: #000;
          font-size: 0.6rem;
          font-weight: var(--weight-bold, 700);
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          box-shadow: 0 0 0 2px var(--surface-overlay, #242424);
        }
        .nav-badge--soft {
          background: var(--status-locked-text, #F7C60D);
        }
        /* Secondary invite pill. Sits flush below the primary count pill
           so both share the top-right corner of the nav item without
           overlapping. Gold + attention pulse so pending invites pull
           the eye without being alarming. */
        .nav-badge--invite {
          top: 6px;
          right: -10px;
          background: var(--status-locked-text, #F7C60D);
          color: #000;
          animation: nav-badge--invite__pulse 2s ease-in-out infinite;
        }
        @keyframes nav-badge--invite__pulse {
          0%, 100% { box-shadow: 0 0 0 2px var(--surface-overlay, #242424), 0 0 0 0 rgba(247, 198, 13, 0.55); }
          50%      { box-shadow: 0 0 0 2px var(--surface-overlay, #242424), 0 0 0 5px rgba(247, 198, 13, 0); }
        }

        .nav-caption {
          font-size: 0.7rem;
          font-weight: var(--weight-semibold, 600);
          text-align: center;
          line-height: 1.2;
        }

        /* Unselected state */
        .nav-unselected {
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          border-bottom-color: transparent;
        }

        .nav-unselected:hover {
          color: var(--app-core-color--gray-7__dark--brand, rgba(255, 255, 255, 0.8));
        }

        /* Selected state — gold accent */
        .nav-selected {
          color: var(--status-locked-text, #F7C60D);
          border-bottom-color: var(--status-locked-text, #F7C60D);
        }

        .nav-selected .nav-icon {
          filter: brightness(120%);
        }
      </style>

      <div class="mid-container">
        ${s.map(l=>o(l)).join("")}
      </div>
    `,s.forEach(l=>{const i=this.shadowRoot.querySelector(`[data-tab="${l.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(l.name,l.topic)),i.addEventListener("keypress",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.handleTabClick(l.name,l.topic))}))})}}customElements.define("bma-app-head-mid",g2);class b2 extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Re.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,a){if(this.shadowRoot&&s!==a){if(t==="data-selected-chip"){if(this.selectedChip=a||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,s){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),ce.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(s=>{const a=s.getAttribute("data-chip")===this.selectedChip;s.classList.toggle("chip-selected",a),s.classList.toggle("chip-unselected",!a)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(".head-sports-container"),n=this.shadowRoot?.querySelector("#navPrev"),r=this.shadowRoot?.querySelector("#navNext");if(!t||!s||!a||!n||!r)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),l=o>8,i=t.scrollLeft<=4,c=t.scrollLeft>=o-4;a.classList.toggle("rail-has-overflow",l),t.classList.toggle("has-scroll",l),s.classList.toggle("has-overflow",l),s.classList.toggle("has-left-overflow",l&&!i),s.classList.toggle("has-right-overflow",l&&!c),n.classList.toggle("nav-disabled",!l||i),r.classList.toggle("nav-disabled",!l||c),n.setAttribute("aria-disabled",String(!l||i)),r.setAttribute("aria-disabled",String(!l||c)),n.tabIndex=!l||i?-1:0,r.tabIndex=!l||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!s||!a)return;const n=s.getBoundingClientRect(),r=a.getBoundingClientRect(),o=t.scrollWidth-t.clientWidth;if(r.left>=n.left&&r.right<=n.right)return;const l=12;let i;r.left<n.left?i=t.scrollLeft+(r.left-n.left)-l:i=t.scrollLeft+(r.right-n.right)+l,i=Math.max(0,Math.min(i,o)),!(Math.abs(t.scrollLeft-i)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:i,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const s=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=s-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const s=[...t.querySelectorAll(".sport-chip")];if(!s.length)return;const a=Math.max(0,t.scrollWidth-t.clientWidth);if(a<=8)return;const n=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,r=t.scrollLeft;let o=r,l=Number.POSITIVE_INFINITY;s.forEach(i=>{const c=Math.max(0,Math.min(i.offsetLeft-n,a)),u=Math.max(0,Math.min(i.offsetLeft+i.offsetWidth-t.clientWidth+n,a));[c,u].forEach(d=>{const p=Math.abs(d-r);p<l&&(l=p,o=d)})}),!(l<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",a=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=a.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),ce.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const s=()=>{if(!this.isPointerDown)return;const a=Date.now()-this.dragStartTime,n=this.dragDistance>10||this.dragDistance>4&&a>180;this.isPointerDown=!1,t.style.cursor="grab",n&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",s),t.addEventListener("mouseup",s),t.addEventListener("mousemove",a=>{if(!this.isPointerDown)return;a.preventDefault();const r=(a.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(r)),t.scrollLeft=this.dragStartScrollLeft-r}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=Re.isDark,n=(Te().appMeta?.sports||[]).filter(f=>f.active===!0),r=["NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],o=[...n].sort((f,g)=>{const b=f.title||f.description||"",v=g.title||g.description||"",h=r.indexOf(b),m=r.indexOf(v);return h!==-1&&m!==-1?h-m:h!==-1?-1:m!==-1?1:b.toLowerCase().localeCompare(v.toLowerCase())}),l=o.findIndex(f=>(f.title||f.description)==="NFL");if(l!==-1){const[f]=o.splice(l,1);let g=-1;o.forEach((v,h)=>{String(v.key||"").startsWith("soccer_fifa_world_cup")&&(g=h)});const b=g!==-1?g+1:o.length;o.splice(b,0,f)}const i=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...o],c=f=>{const g=this.selectedChip===f.key,b=f.key==="all";let v="";return b?v='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':v=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`,`
        <div
          class="sport-chip ${g?"chip-selected":"chip-unselected"}"
          data-chip="${f.key}"
          role="button"
          tabindex="0"
          aria-label="${f.description||f.title}"
        >
          <div class="chip-circle">
            ${v}
          </div>
          <span class="chip-title">${f.title||f.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}
        ${Ss()}

        :host {
          display: block;
          width: 100%;
          background: var(--card-bg, #181818);
          background-image: linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(0,0,0,0.15) 100%);
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
        }

        /* ═══ 3-column grid: [arrow] [scroll rail] [arrow] ═══ */
        .head-sports-container {
          max-width: var(--bma-app-head__max--width, 1220px);
          margin: 0 auto;
          display: grid;
          grid-template-columns: 40px 1fr 40px;
          align-items: center;
          padding: 10px 0;
        }

        /* When no overflow, collapse arrows and go full-width */
        .head-sports-container:not(.rail-has-overflow) {
          grid-template-columns: 0px 1fr 0px;
        }

        /* ═══ Nav arrows ═══ */
        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: var(--app-core-color--gray-4__dark--brand, #323232);
          background-size: 70% 70%;
          background-position: center;
          background-repeat: no-repeat;
          border: none;
          cursor: pointer;
          transition: opacity 0.15s ease, background-color 0.15s ease;
          opacity: 0.8;
          justify-self: center;
        }

        .nav-icon.nav-disabled {
          opacity: 0.15;
          pointer-events: none;
        }

        .nav-icon:hover {
          opacity: 1;
          background-color: var(--app-core-color--gray-5__dark--brand, #484848);
        }

        .nav-icon.nav-icon__prev { background-image: var(--nav-icon__chevron_prev--${t?"dark":"light"}); }
        .nav-icon.nav-icon__next { background-image: var(--nav-icon__chevron_next--${t?"dark":"light"}); }

        .head-sports-container:not(.rail-has-overflow) .nav-prev,
        .head-sports-container:not(.rail-has-overflow) .nav-next {
          display: none;
        }

        /* ═══ Scroll wrapper with edge fades ═══ */
        .chips-wrapper {
          position: relative;
          overflow: hidden;
          min-width: 0;
        }

        .chips-wrapper::before,
        .chips-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 24px;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.15s ease;
        }

        .chips-wrapper.has-left-overflow::before,
        .chips-wrapper.has-right-overflow::after {
          opacity: 1;
        }

        .chips-wrapper::before {
          left: 0;
          background: linear-gradient(90deg, var(--card-bg, #181818) 0%, transparent 100%);
        }

        .chips-wrapper::after {
          right: 0;
          background: linear-gradient(270deg, var(--card-bg, #181818) 0%, transparent 100%);
        }

        /* ═══ Scrollable flex row ═══ */
        .chips-container {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-snap-type: x proximity;
          padding: 4px 4px 2px;
          cursor: grab;
          scrollbar-width: none;
          -ms-overflow-style: none;
          -webkit-overflow-scrolling: touch;
        }

        .chips-container::-webkit-scrollbar { display: none; }

        /* ═══ Chip: fixed-width so circles are always equidistant ═══ */
        .sport-chip {
          flex: 0 0 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 3px;
          padding: 2px 0 0;
          cursor: pointer;
          user-select: none;
          scroll-snap-align: start;
          transition: color 0.15s ease;
        }

        /* ═══ Circle ═══ */
        .chip-circle {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--app-core-color--gray-4__dark--brand, #323232);
          flex-shrink: 0;
          transition: background-color 0.15s ease;
        }

        /* ═══ Label: 2-line wrap, fixed height so all chips match ═══ */
        .chip-title {
          font-size: 0.6rem;
          font-weight: var(--weight-semibold, 600);
          text-align: center;
          line-height: 1.25;
          height: 2.5em;
          width: 100%;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          word-break: break-word;
          padding: 0 1px;
          box-sizing: border-box;
        }

        /* ═══ States ═══ */
        .chip-unselected {
          color: rgba(255, 255, 255, 0.5);
        }

        .chip-unselected:hover {
          color: rgba(255, 255, 255, 0.8);
        }

        .chip-unselected:hover .chip-circle {
          background: var(--app-core-color--gray-5__dark--brand, #484848);
        }

        .chip-selected {
          color: #fff;
        }

        .chip-selected .chip-circle {
          background: #fff;
          color: #111;
        }

        /* ═══ Icons ═══ */
        bma-sport-icon,
        .home-icon {
          flex-shrink: 0;
        }

        .chip-unselected bma-sport-icon,
        .chip-unselected .home-icon {
          opacity: 0.75;
        }

        .chip-selected bma-sport-icon,
        .chip-selected .home-icon {
          opacity: 1;
          filter: brightness(0.15);
        }

        /* ═══ Mobile (< 769px) ═══ */
        @media (max-width: 768px) {
          .head-sports-container {
            grid-template-columns: 32px 1fr 32px;
            padding: 4px 0 0;
          }

          .head-sports-container:not(.rail-has-overflow) {
            grid-template-columns: 0px 1fr 0px;
          }

          .nav-icon {
            width: 26px;
            height: 26px;
            background-size: 66% 66%;
          }

          .chips-container {
            gap: 2px;
            padding: 2px 2px 0;
          }

          .sport-chip {
            flex: 0 0 50px;
            padding: 2px 0 0;
            gap: 2px;
          }

          .chip-circle {
            width: 36px;
            height: 36px;
          }

          .chip-title {
            font-size: 0.54rem;
          }

          .chips-wrapper::before,
          .chips-wrapper::after {
            width: 16px;
          }
        }

        /* ═══ Desktop (≥ 769px) ═══ */
        @media (min-width: 769px) {
          .sport-chip {
            flex: 0 0 76px;
          }

          .chip-circle {
            width: 46px;
            height: 46px;
          }

          .chip-title {
            font-size: 0.72rem;
          }
        }
      </style>

      <div class="head-sports-container">
        <aside class="nav-icon nav-prev nav-icon__prev" id="navPrev" role="button" tabindex="0" aria-label="Scroll left"></aside>
        <div class="chips-wrapper">
          <div class="chips-container">
            ${i.map(f=>c(f)).join("")}
          </div>
        </div>
        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,i.forEach(f=>{const g=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const u=this.shadowRoot.querySelector("#navPrev"),d=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),d&&d.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const p=this.shadowRoot.querySelector(".chips-container");p&&(p.scrollLeft=0),requestAnimationFrame(()=>{p&&(p.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",b2);class v2 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-matches","data-sync-theme"]}connectedCallback(){this._unsub=Re.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){s!==a&&this.render()}get matches(){const t=this.getAttribute("data-matches");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ye.find(a=>a.key===t)?.group||"default"}_parseScoreboard(t){const s=t.scoreboard_data;if(!s)return null;try{return typeof s=="string"?JSON.parse(s):s}catch{return null}}_getMatchDisplay(t){const s=this._parseScoreboard(t)||{},a=parseInt(s.home_score||0),n=parseInt(s.away_score||0),r=s.period||0,o=String(s.time_remaining||"").trim(),l=o.toLowerCase(),i=a>0||n>0||r>0,c=String(t.status||"").toUpperCase()==="COMPLETED"||l==="final",u=t.scheduled_at||t.start_time||"";let d=!1;if(u){const m=u.includes("Z")||/[+-]\d{2}:\d{2}$/.test(u),_=new Date(m?u:u+"Z").getTime();isNaN(_)||(d=_<=Date.now())}const f=!c&&(i||o&&l!=="scheduled"&&l!=="final"||d),g=t.home_team_id||t.home_team||"Home",b=t.away_team_id||t.away_team||"Away";if(c)return{homeName:g,awayName:b,homeScore:a,awayScore:n,statusLabel:"FINAL",statusClass:"final",showScores:!0};if(f)return{homeName:g,awayName:b,homeScore:a,awayScore:n,statusLabel:o&&l!=="in progress"?o:"LIVE",statusClass:"live",showScores:!0};const v=t.scheduled_at||t.start_time||t.status_time;let h="UPCOMING";if(v)try{const m=v.includes("Z")||/[+-]\d{2}:\d{2}$/.test(v),_=new Date(m?v:v+"Z");isNaN(_.getTime())||(h=_.toLocaleString(void 0,{weekday:"short",hour:"numeric",minute:"2-digit"}))}catch{}return{homeName:g,awayName:b,homeScore:0,awayScore:0,statusLabel:h,statusClass:"upcoming",showScores:!1}}render(){const t=Date.now(),s=720*60*1e3,a=1440*60*1e3,r=this.matches.map(c=>({match:c,display:this._getMatchDisplay(c)})).filter(c=>c.display!==null).filter(c=>{const u=c.display.statusClass;if(u==="live")return!0;const d=new Date(c.match.scheduled_at||c.match.status_time||0).getTime();return d?u==="final"?t-d<=s:u==="upcoming"?d-t<=a&&d>=t:!1:!1}),o={live:0,final:1,upcoming:2};r.sort((c,u)=>{const d=o[c.display.statusClass]??9,p=o[u.display.statusClass]??9;if(d!==p)return d-p;const f=new Date(c.match.scheduled_at||c.match.status_time||0).getTime(),g=new Date(u.match.scheduled_at||u.match.status_time||0).getTime();return c.display.statusClass==="upcoming"?f-g:g-f});const l=r.slice(0,40);if(l.length===0){this.shadowRoot.innerHTML="";return}const i=l.map(({match:c,display:u})=>{const d=this._sportGroup(c.sport_id),p=f=>u.showScores?`<span class="score-pill__score">${f}</span>`:"";return`
                <button class="score-pill score-pill--${u.statusClass}" data-match-guid="${c.guid||c.id||""}" type="button">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="score-pill__teams">
                        <span class="score-pill__team">${this._abbr(u.awayName)}</span>
                        ${p(u.awayScore)}
                    </span>
                    <span class="score-pill__sep">@</span>
                    <span class="score-pill__teams">
                        <span class="score-pill__team">${this._abbr(u.homeName)}</span>
                        ${p(u.homeScore)}
                    </span>
                    <span class="score-pill__status score-pill__status--${u.statusClass}">
                        ${u.statusClass==="live"?'<span class="live-dot"></span>':""}
                        ${u.statusLabel}
                    </span>
                </button>
            `}).join("");this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                :host {
                    display: block;
                    width: 100%;
                    min-height: 40px;
                    background: linear-gradient(180deg, rgba(46, 139, 87, 0.55), rgba(46, 139, 87, 0.4));
                    border-top: 1px solid rgba(46, 139, 87, 0.55);
                }
                .scores-rail {
                    overflow: hidden;
                    padding: 0;
                    -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%);
                    mask-image: linear-gradient(90deg, transparent 0, #000 32px, #000 calc(100% - 32px), transparent 100%);
                }
                .scores-track {
                    display: flex;
                    width: max-content;
                    animation: scores-marquee 180s linear infinite;
                }
                .scores-rail:hover .scores-track { animation-play-state: paused; }
                @keyframes scores-marquee {
                    from { transform: translateX(0); }
                    to { transform: translateX(-50%); }
                }
                @media (prefers-reduced-motion: reduce) {
                    .scores-track { animation: none; }
                }
                .score-pill {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    flex-shrink: 0;
                    padding: 10px 14px;
                    border: none;
                    border-right: 1px solid rgba(46, 139, 87, 0.25);
                    background: transparent;
                    color: rgba(255, 255, 255, 0.9);
                    font-size: 0.82rem;
                    font-weight: 600;
                    cursor: pointer;
                    -webkit-tap-highlight-color: transparent;
                }
                .score-pill:hover { background: rgba(46, 139, 87, 0.15); }
                .score-pill bma-sport-icon {
                    width: 16px;
                    height: 16px;
                    flex-shrink: 0;
                    opacity: 0.6;
                }
                .score-pill__teams {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                }
                .score-pill__team {
                    color: rgba(255, 255, 255, 0.6);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-size: 0.72rem;
                }
                .score-pill__score {
                    color: rgba(255, 255, 255, 0.95);
                    font-weight: 700;
                    font-size: 0.95rem;
                    font-variant-numeric: tabular-nums;
                }
                .score-pill__sep {
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 0.7rem;
                }
                .score-pill__status {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    padding: 2px 6px;
                    border-radius: 3px;
                    font-size: 0.62rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .score-pill__status--live {
                    color: #FF5252;
                    background: rgba(255, 82, 82, 0.12);
                }
                .score-pill__status--final {
                    color: rgba(255, 255, 255, 0.5);
                    background: rgba(255, 255, 255, 0.06);
                }
                .score-pill__status--upcoming {
                    color: var(--status-locked-text, #F7C60D);
                    background: rgba(247, 198, 13, 0.1);
                    text-transform: none;
                    letter-spacing: 0.3px;
                }
                .live-dot {
                    display: inline-block;
                    width: 6px;
                    height: 6px;
                    border-radius: 50%;
                    background: #FF5252;
                    animation: live-pulse 1.6s ease-in-out infinite;
                }
                @keyframes live-pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                @media (max-width: 480px) {
                    .score-pill { padding: 8px 12px; gap: 6px; }
                    .score-pill__team { font-size: 0.68rem; }
                    .score-pill__score { font-size: 0.85rem; }
                    .score-pill__status { font-size: 0.58rem; }
                }
            </style>
            <div class="scores-rail">
                <div class="scores-track">
                    ${i}
                    ${i}
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".score-pill").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.matchGuid;ce.publish("SCORES.MATCH_CLICK",JSON.stringify({matchGuid:u,timestamp:Date.now()}))})})}_abbr(t){if(!t)return"";const s=String(t);if(s.length<=14)return s;const a=s.split(" ");return a.length>1?a[a.length-1].slice(0,14):s.slice(0,14)}}customElements.define("bma-scores-banner",v2);class _2 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Re.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}_doLogout(){ce.publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()}))}render(){let t="";try{t=Te().appSession?.session_app?.version||""}catch{}this.shadowRoot.innerHTML=`
            <style>
                ${Ge()}
                :host {
                    display: block;
                    width: 100%;
                    color: rgba(255, 255, 255, 0.65);
                    font-size: 0.8rem;
                    line-height: 1.5;
                }
                .foot-transition {
                    display: block;
                    width: 100%;
                    height: 72px;
                    background: linear-gradient(180deg, transparent 0%, #0f3320 100%);
                    position: relative;
                    overflow: hidden;
                }
                .foot-transition svg {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: block;
                }
                .foot-body {
                    background: #0f3320;
                    padding: 32px 24px 0;
                }
                .foot-inner {
                    max-width: 1180px;
                    margin: 0 auto;
                }

                /* Partner row */
                .foot-partners {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                    padding-bottom: 24px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                }
                .partner-card {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 12px;
                    padding: 12px 16px;
                    background: rgba(255, 255, 255, 0.03);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
                    border-radius: 6px;
                }
                .partner-card__label {
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.55);
                }
                .partner-card__logo {
                    font-size: 0.82rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.8);
                    letter-spacing: 0.5px;
                    text-transform: uppercase;
                }

                /* Main columns */
                .foot-columns {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 24px;
                    padding: 32px 0;
                }
                .foot-col__title {
                    font-size: 0.72rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: rgba(255, 255, 255, 0.55);
                    margin: 0 0 12px;
                }
                .foot-col__list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .foot-col__list a {
                    color: rgba(255, 255, 255, 0.7);
                    text-decoration: none;
                    font-size: 0.78rem;
                    transition: color 0.15s ease;
                }
                .foot-col__list a:hover {
                    color: var(--status-locked-text, #F7C60D);
                }
                .foot-col__text {
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.6);
                    margin: 0;
                }

                /* Socials */
                .foot-socials {
                    display: flex;
                    gap: 8px;
                    margin-top: 10px;
                }
                .foot-social {
                    width: 32px;
                    height: 32px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 6px;
                    background: rgba(255, 255, 255, 0.04);
                    color: rgba(255, 255, 255, 0.65);
                    text-decoration: none;
                    transition: color 0.15s ease, background 0.15s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .foot-social:hover {
                    color: var(--status-locked-text, #F7C60D);
                    background: rgba(247, 198, 13, 0.1);
                }
                .foot-social svg {
                    width: 14px;
                    height: 14px;
                    fill: currentColor;
                }

                /* Bottom bar */
                .foot-bottom {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 16px;
                    flex-wrap: wrap;
                    padding: 16px 0 80px;
                    border-top: 1px solid rgba(255, 255, 255, 0.08);
                }
                .foot-meta {
                    display: inline-flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 0.7rem;
                    color: rgba(255, 255, 255, 0.4);
                }
                .foot-meta__badge {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    padding: 3px 8px;
                    border-radius: 4px;
                    background: rgba(255, 255, 255, 0.04);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
                    font-size: 0.65rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    color: rgba(255, 255, 255, 0.5);
                    user-select: none;
                    -webkit-user-select: none;
                }
                .foot-actions {
                    display: inline-flex;
                    align-items: center;
                    gap: 16px;
                }
                .foot-link {
                    color: rgba(255, 255, 255, 0.6);
                    font-size: 0.72rem;
                    text-decoration: none;
                    transition: color 0.15s ease;
                }
                .foot-link:hover { color: var(--status-locked-text, #F7C60D); }
                .foot-logout {
                    display: inline-flex;
                    align-items: center;
                    gap: 6px;
                    padding: 6px 14px;
                    border-radius: 4px;
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    background: transparent;
                    color: rgba(255, 255, 255, 0.8);
                    font-size: 0.72rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    cursor: pointer;
                    transition: all 0.15s ease;
                    -webkit-tap-highlight-color: transparent;
                }
                .foot-logout:hover {
                    border-color: var(--status-locked-text, #F7C60D);
                    color: var(--status-locked-text, #F7C60D);
                }
                .foot-logout svg {
                    width: 12px;
                    height: 12px;
                    fill: currentColor;
                }

                @media (max-width: 768px) {
                    .foot-body { padding: 24px 16px 0; }
                    .foot-partners { grid-template-columns: 1fr; }
                    .foot-columns {
                        grid-template-columns: 1fr 1fr;
                        gap: 20px 16px;
                        padding: 24px 0;
                    }
                    .foot-bottom {
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 12px;
                        padding-bottom: 80px;
                    }
                }
                @media (max-width: 480px) {
                    .foot-columns { grid-template-columns: 1fr; }
                }
            </style>

            <div class="foot-transition" aria-hidden="true">
                <svg viewBox="0 0 1440 72" preserveAspectRatio="none">
                    <path d="M0,72 L0,56 Q120,28 240,38 T480,44 T720,28 T960,40 T1200,32 T1440,48 L1440,72 Z" fill="#0f3320"/>
                    <path d="M0,72 L0,62 Q180,50 360,56 T720,50 T1080,58 T1440,54 L1440,72 Z" fill="#0a2416" opacity="0.6"/>
                </svg>
            </div>

            <div class="foot-body">
                <div class="foot-inner">
                    <!--
                    <div class="foot-partners">
                        <div class="partner-card">
                            <span class="partner-card__label">Gameplay Licensed by</span>
                            <span class="partner-card__logo">License TBD</span>
                        </div>
                        <div class="partner-card">
                            <span class="partner-card__label">Fairplay Partner</span>
                            <span class="partner-card__logo">Partner TBD</span>
                        </div>
                    </div>
                    -->

                    <div class="foot-columns">
                        <div>
                            <p class="foot-col__title">Bet Max Tourney</p>
                            <p class="foot-col__text">Tournament-style daily betting contests.</p>
                            <div class="foot-socials">
                                <a href="https://x.com/BetMaxTourney" target="_blank" rel="noopener" class="foot-social" aria-label="X">
                                    <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.65l-5.214-6.817-5.967 6.817H1.685l7.73-8.834L1.254 2.25h6.816l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                                </a>
                                <a href="https://www.linkedin.com/company/bet-max-action" target="_blank" rel="noopener" class="foot-social" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <p class="foot-col__title">Legal</p>
                            <ul class="foot-col__list">
                                <li><a href="https://www.betmaxtourney.com/terms/" target="_blank" rel="noopener">Terms of Service</a></li>
                                <li><a href="#" rel="nofollow">Privacy Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <p class="foot-col__title">Partnerships</p>
                            <ul class="foot-col__list">
                                <li><a href="#">White Label Opportunities</a></li>
                                <li><a href="#">Media Opportunities</a></li>
                                <li><a href="#">Sponsorship Opportunities</a></li>
                            </ul>
                        </div>
                        <div>
                            <p class="foot-col__title">Corporate</p>
                            <p class="foot-col__text">Operated &amp; Developed by<br><a href="https://www.betmaxaction.com" target="_blank" rel="noopener" style="color: var(--status-locked-text, #F7C60D); text-decoration: none;" data-mvv-brand="token">Bet Max Action</a> and <a href="https://www.machfivetech.com" target="_blank" rel="noopener" style="color: var(--status-locked-text, #F7C60D); text-decoration: none;">Mach Five Tech</a>.<br>All rights reserved.</p>
                        </div>
                    </div>

                    <div class="foot-bottom">
                        <span class="foot-meta">
                            <span class="foot-meta__badge">18+</span>
                            ${t?`<span>v${t}</span>`:""}
                            <span>© ${new Date().getFullYear()} Bet Max Action</span>
                        </span>
                        <span class="foot-actions">
                            <a href="https://www.betmaxtourney.com/status/" target="_blank" rel="noopener" class="foot-link">App Health</a>
                            <a href="#" class="foot-link">Helpdesk</a>
                            <button class="foot-logout" type="button" aria-label="Sign Out">
                                <svg viewBox="0 0 24 24"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
                                Sign Out
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        `;const s=this.shadowRoot.querySelector(".foot-logout");s&&s.addEventListener("click",()=>this._doLogout())}}customElements.define("bma-app-foot-branded",_2);const y2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',w2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',x2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',T2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class S2 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=s[0],n=a.short_title||"Match Info N/A",o=Object.keys(a).filter(C=>C!=="short_title")[0]||"Unknown Team",l=a[o]||{},i=l.odds??"N/A",c=(l.type||"N/A").toUpperCase(),u=parseFloat(l.stake||0),d=parseFloat(l.payout||0),p=l.reconciled!==!1,f=.01;let g,b,v;p?d>u+f?(g="won",b="Won",v=w2):d<u-f?(g="lost",b="Lost",v=x2):(g="push",b="Push",v=T2):(g="pending",b="Pending",v=y2);let h=o;if(l.type==="spread"&&l.point!==void 0){const C=parseFloat(l.point),k=C>0?`+${C}`:`${C}`;h=`${o} ${k}`}else l.type==="total"&&l.point!==void 0&&(h=`${l.team==="over"?"Over":"Under"} ${l.point}`);const m=C=>`TD$ ${C.toFixed(2)}`,_=d-u;let y,w;switch(g){case"pending":y=_>0?`+${m(_)}`:m(0),w="To win";break;case"won":y=`+${m(_)}`,w="Profit";break;case"lost":y=`-${m(u)}`,w="Lost";break;case"push":y=m(u),w="Returned";break}const x=parseInt(i,10),E=Number.isFinite(x)&&x>0?`+${x}`:`${i}`,I=t.status_time?na.formatDateLocal(t.status_time):"",L=g==="pending"?"Placed":"Settled";this.shadowRoot.innerHTML=`
      <style>
        ${Ge()}

        :host {
          display: block;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        .card {
          position: relative;
          background: #1f1f1f;
          border-radius: var(--card-radius, 12px);
          overflow: hidden;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.05),
            0 4px 16px rgba(0, 0, 0, 0.4);
          isolation: isolate;
        }

        /* Faint state-tinted wash over the base surface. Reinforces state
           without adding a discrete element. Under 5% alpha to stay subtle. */
        .card::before {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }
        .card.pending::before { background: rgba(247, 198, 13, 0.035); }
        .card.won::before     { background: rgba(0, 230, 118, 0.035); }
        .card.lost::before    { background: rgba(205, 86, 89, 0.035); }
        .card.push::before    { background: transparent; }

        /* Body grid — lifted above the state-tinted ::before via z-index */
        .body {
          position: relative;
          z-index: 1;
          padding: 12px;
          display: grid;
          grid-template-rows: auto auto auto;
          gap: 12px;
          min-width: 0;
        }

        /* Header: match description only. Timestamp moved to the footer so
           it can't collide with the absolute status pill on narrow screens. */
        .header {
          padding-right: 96px; /* room for absolute status pill */
          min-width: 0;
        }

        .match-desc {
          font-size: 0.8rem;
          color: var(--text-primary, #fff);
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          min-width: 0;
        }

        .timestamp {
          font-size: 0.68rem;
          color: var(--text-primary, #fff);
          white-space: nowrap;
          font-variant-numeric: tabular-nums;
          line-height: 1.2;
        }

        /* Status pill — docks top-right, overlays the header */
        .pill {
          position: absolute;
          top: 10px;
          right: 10px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px 3px 6px;
          border-radius: 999px;
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          line-height: 1;
          z-index: 2;
        }

        .pill svg { width: 12px; height: 12px; flex-shrink: 0; }

        .card.pending .pill {
          background: rgba(247, 198, 13, 0.14);
          color: var(--status-locked-text, #F7C60D);
        }
        .card.won .pill {
          background: rgba(0, 230, 118, 0.14);
          color: var(--status-upcoming-text, #00E676);
        }
        .card.lost .pill {
          background: rgba(205, 86, 89, 0.14);
          color: var(--status-completed-text, #CD5659);
        }
        .card.push .pill {
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-secondary, #b0b0b0);
        }

        /* Pulsing dot on the pending pill */
        .pill-dot {
          display: none;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: currentColor;
          margin-right: 2px;
        }

        .card.pending .pill-dot { display: inline-block; }
        .card.pending .pill-icon { display: none; }

        .card.pending .pill-dot {
          animation: pulse-dot 1.5s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0.3; }
        }

        /* Middle: selection | odds | side meta */
        .middle {
          display: grid;
          grid-template-columns: 1fr auto auto;
          gap: 10px;
          align-items: center;
        }

        .selection {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary, #fff);
          letter-spacing: -0.01em;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .odds {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 6px 12px;
          background: #262626;
          box-shadow:
            inset 0 0 0 1px rgba(255, 255, 255, 0.12),
            0 1px 2px rgba(0, 0, 0, 0.3);
          border-radius: 6px;
          font-size: 0.9rem;
          font-weight: 800;
          color: var(--text-primary, #fff);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.01em;
          min-width: 56px;
        }

        .side-meta {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
          text-align: right;
        }

        .bet-type {
          font-size: 0.6rem;
          font-weight: 800;
          color: var(--text-muted, #808080);
          text-transform: uppercase;
          letter-spacing: 0.6px;
        }

        .stake {
          font-size: 0.72rem;
          color: var(--text-secondary, #b0b0b0);
          font-variant-numeric: tabular-nums;
        }

        /* Footer: hero outcome on the left, sublabel + timestamp stacked right */
        .footer {
          display: grid;
          grid-template-columns: auto 1fr;
          align-items: center;
          gap: 12px;
          padding-top: 8px;
          border-top: 1px dashed rgba(255, 255, 255, 0.06);
        }

        .hero {
          font-size: 1.3rem;
          font-weight: 800;
          line-height: 1;
          letter-spacing: -0.02em;
          font-variant-numeric: tabular-nums;
        }

        .card.pending .hero { color: var(--status-locked-text, #F7C60D); }
        .card.won     .hero { color: var(--status-upcoming-text, #00E676); }
        .card.lost    .hero { color: var(--status-completed-text, #CD5659); text-decoration: line-through; text-decoration-thickness: 2px; }
        .card.push    .hero { color: var(--text-secondary, #b0b0b0); }

        .footer-meta {
          justify-self: end;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 2px;
          text-align: right;
        }

        .hero-sublabel {
          font-size: 0.65rem;
          font-weight: 700;
          color: var(--text-primary, #fff);
          text-transform: uppercase;
          letter-spacing: 0.6px;
          line-height: 1;
        }

        /* One-shot shine sweep for WON cards on first render */
        .card.won::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 40%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(0, 230, 118, 0.22) 50%,
            transparent 100%
          );
          animation: shine-sweep 1.1s cubic-bezier(0.4, 0, 0.2, 1) 0.25s 1 both;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes shine-sweep {
          0%   { transform: translateX(-100%); opacity: 0; }
          15%  { opacity: 1; }
          85%  { opacity: 1; }
          100% { transform: translateX(350%); opacity: 0; }
        }

        @media (orientation: portrait), (max-width: 768px) {
          .body { padding: 10px; gap: 10px; }
          .header { padding-right: 84px; }
          .match-desc { font-size: 0.75rem; }
          .selection { font-size: 0.88rem; }
          .odds { padding: 5px 10px; font-size: 0.82rem; min-width: 50px; }
          .hero { font-size: 1.15rem; }
        }
      </style>

      <div class="card ${g}">
        <div class="pill">
          <span class="pill-dot"></span>
          <span class="pill-icon">${v}</span>
          <span class="pill-label">${b}</span>
        </div>
        <div class="body">
          <div class="header">
            <div class="match-desc">${n}</div>
          </div>
          <div class="middle">
            <div class="selection">${h}</div>
            <div class="odds">${E}</div>
            <div class="side-meta">
              <div class="bet-type">${c}</div>
              <div class="stake">${m(u)} stake</div>
            </div>
          </div>
          <div class="footer">
            <div class="hero">${y}</div>
            <div class="footer-meta">
              <div class="hero-sublabel">${w}</div>
              <div class="timestamp">${L} · ${I}</div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",S2);class k2 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-game-mode-class","data-starting-td","data-tags","data-bets"]}connectedCallback(){this.render()}attributeChangedCallback(t,s,a){s!==a&&this.shadowRoot&&this.render()}_readJSONAttr(t){const s=this.getAttribute(t);if(!s)return null;try{return JSON.parse(s)}catch{return null}}_totalStakes(t){let s=0;for(const a of t||[]){const n=a?.bet||[];for(const r of n)for(const o of Object.keys(r)){if(o==="short_title")continue;const l=r[o],i=parseFloat(l?.stake||0);isNaN(i)||(s+=i)}}return s}render(){const t=this.getAttribute("data-game-mode-class")||"DEFAULT",s=parseFloat(this.getAttribute("data-starting-td")||0),a=this._readJSONAttr("data-tags")||[],n=this._readJSONAttr("data-bets")||[],r=Io(t),o={tournament_dollars:s,tags:a},l=r.getProgressUI(n,o);if(!l||l.type==="NONE"){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}this.removeAttribute("hidden");const i=this._totalStakes(n),c=Math.round(s).toLocaleString(),u=Math.round(i).toLocaleString(),d=Math.round(Math.max(0,s-i)).toLocaleString();if(l.complete){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}const p=l.type==="BET_TYPES"?"Build your lineup to qualify for the leaderboard.":`Bet TD$ ${c} to qualify for the leaderboard.`,f=l.hints?.[0]||`TD$ ${u} placed. TD$ ${d} to qualify.`;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          margin: 0 8px 10px;
        }
        :host([hidden]) { display: none; }

        .card {
          padding: 12px 14px;
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: var(--card-radius, 12px);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
        }

        .rule {
          font-size: 0.78rem;
          font-weight: 700;
          color: #fff;
          margin: 0 0 4px;
          line-height: 1.35;
        }
        .status {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
          line-height: 1.4;
        }
      </style>

      <div class="card">
        <p class="rule">${p}</p>
        <p class="status">${f}</p>
      </div>
    `}}customElements.define("bma-game-mode-progress",k2);class E2 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-invite-guid","data-tournament-caption","data-invited-by-name","data-expires-at","data-sport-key","data-sport-group","data-entrants-count","data-entrants-max","data-window-start"]}connectedCallback(){this.render()}attributeChangedCallback(t,s,a){s!==a&&this.shadowRoot&&this.render()}_formatCountdown(t){if(!t)return"";let s=new Date(t);if(!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),isNaN(s.getTime()))return"";const a=s.getTime()-Date.now();if(a<=0)return"Expired";const n=Math.floor(a/6e4),r=Math.floor(n/60),o=Math.floor(r/24);return o>=2?`Expires in ${o}d`:r>=1?`Expires in ${r}h`:n>=1?`Expires in ${n}m`:"Expires soon"}_formatDay(t){if(!t)return"";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),isNaN(s.getTime())?"":s.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}render(){const t=this.getAttribute("data-invite-guid")||"",s=this.getAttribute("data-tournament-caption")||"Bet Max Pool",a=this.getAttribute("data-invited-by-name")||"Someone",n=this.getAttribute("data-expires-at")||"",r=this.getAttribute("data-sport-key")||"",o=this.getAttribute("data-sport-group")||"",l=this.getAttribute("data-entrants-count")||"0",i=this.getAttribute("data-entrants-max")||"0",c=this.getAttribute("data-window-start")||"",u=this._formatCountdown(n),d=u.startsWith("Expires in ")&&u.includes("m")&&!u.includes("h")&&!u.includes("d"),p=u==="Expired"||u==="Expires soon",f=r?`<bma-sport-icon sport="${r}" data-sport-group="${o}"></bma-sport-icon>`:"",g=c?this._formatDay(c):"";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          margin: 0 0 12px;
        }

        .card {
          background: var(--card-bg, #1a1a1a);
          border-radius: 12px;
          padding: 14px 16px;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .sport-chip {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          flex-shrink: 0;
        }
        .sport-chip bma-sport-icon {
          width: 18px;
          height: 18px;
        }

        .caption-col {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
          flex: 1;
        }
        .caption {
          font-size: 0.95rem;
          font-weight: 800;
          color: #fff;
          line-height: 1.3;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .subline {
          font-size: 0.72rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.3;
        }
        .subline strong {
          color: rgba(255, 255, 255, 0.85);
          font-weight: 700;
        }

        .countdown {
          font-size: 0.68rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          padding: 3px 8px;
          border-radius: 999px;
          background: rgba(247, 198, 13, 0.1);
          color: var(--status-locked-text, #F7C60D);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .countdown--warn {
          background: rgba(205, 86, 89, 0.12);
          color: var(--status-completed-text, #CD5659);
        }

        .kpi-row {
          display: flex;
          justify-content: space-between;
          gap: 8px;
          font-size: 0.7rem;
          color: rgba(255, 255, 255, 0.5);
          padding: 6px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .kpi {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .kpi__label {
          font-size: 0.62rem;
          text-transform: uppercase;
          letter-spacing: 0.6px;
          color: rgba(255, 255, 255, 0.4);
        }
        .kpi__value {
          font-size: 0.78rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.85);
          font-variant-numeric: tabular-nums;
        }

        .action-row {
          display: flex;
          gap: 8px;
        }

        .btn {
          flex: 1;
          padding: 10px 12px;
          border-radius: 10px;
          font-family: inherit;
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          cursor: pointer;
          transition: transform 0.1s ease, background 0.15s ease;
          border: none;
          min-height: 44px;
        }
        .btn:active { transform: scale(0.98); }

        .btn--accept {
          background: var(--status-upcoming-text, #00E676);
          color: #000;
          box-shadow: 0 2px 10px rgba(0, 230, 118, 0.25);
        }
        .btn--accept:hover { filter: brightness(1.05); }

        .btn--decline {
          background: transparent;
          color: rgba(255, 255, 255, 0.65);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
        }
        .btn--decline:hover {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.85);
        }
      </style>

      <article class="card" data-invite-guid="${t}">
        <div class="meta-row">
          ${f?`<span class="sport-chip">${f}</span>`:""}
          <div class="caption-col">
            <span class="caption">${s}</span>
            <span class="subline">Invited by <strong>${a}</strong></span>
          </div>
          ${u?`<span class="countdown ${p||d?"countdown--warn":""}">${u}</span>`:""}
        </div>

        <div class="kpi-row">
          <div class="kpi">
            <span class="kpi__label">Players</span>
            <span class="kpi__value">${l} / ${i}</span>
          </div>
          <div class="kpi" style="text-align: right;">
            <span class="kpi__label">${g?"Starts":"Pool"}</span>
            <span class="kpi__value">${g||"TBD"}</span>
          </div>
        </div>

        <div class="action-row">
          <button class="btn btn--decline" type="button" data-action="decline">Decline</button>
          <button class="btn btn--accept" type="button" data-action="accept">Accept</button>
        </div>
      </article>
    `,this.shadowRoot.querySelectorAll("[data-action]").forEach(b=>{b.addEventListener("click",()=>{const v=b.dataset.action;this.dispatchEvent(new CustomEvent(`invite-${v}`,{detail:{inviteGuid:t},bubbles:!0,composed:!0}))})})}}customElements.define("bma-invite-card",E2);aa.init();window.BrandManager=aa;const Gc=`
  <template id="sodapop_promotion" data-n55-sodapop-modal="false"
    data-n55-sodapop-size="medium" data-n55-sodapop-fullscreen="false"
    data-n55-ampm-theme="dark">
    <style>
    .l-promotion { color: #fff; }
    .l-promotion IMG { width: 100%; }
    .l-promotion H1 { text-align: center; font-size: 22px; }
    </style>
    <div class="l-promotion">
      <img id="promoHero">
      <br>
      <br>
      <h1 id="promCaption"></h1>
      <br>
      <hr>
      <br>
      <div id="promoTagline"></div>
      <br>
    </div>
  </template>

  <template id="sodapop_terms" data-n55-sodapop-modal="false"
    data-n55-sodapop-size="large" data-n55-sodapop-fullscreen="false"
    data-n55-ampm-theme="dark">
    <style>
    .l-terms { color: #fff; }
    .l-terms h1 { color: var( --app-core-color--yellow-1__dark--brand); font-size: 18px; margin: 10px 0;}
    .l-terms h2 { color: var( --app-core-color--yellow-1__dark--brand); font-size: 15px; margin: 8px 0;}
    </style>
    <div class="l-terms">
      <h1>Terms and Conditions</h1>
      <p style="color:#999;font-size:.9rem;margin-bottom:2rem">
      Last updated: December 2, 2025</p>
      <div class="content">
      <h1 id="bet-max-tourney--terms--conditions-beta">
      Bet Max Tourney – Terms &amp; Conditions (Beta)</h1>
      <p>
      <strong>
      Last Updated: 12/30/2025</strong>
      </p>
      <p>
      These Terms &amp; Conditions (“Terms”) govern your access to and use of Bet Max Tourney (the “Platform”), the consumer-facing application and platform operated by Bet Max Action, Inc. (a Delaware C-Corp) (“BMA,” “we,” “us,” or “our”). By accessing or using the Platform, you agree to be bound by these Terms.</p>
      <p>
      If you do not agree, do not use the Platform.</p>
      <h2 id="1-introduction--acceptance-of-terms">
      1. Introduction &amp; Acceptance of Terms</h2>
      <p>
      Bet Max Tourney is a free-to-play, tournament-style sports gaming platform currently operating in beta. These Terms apply to all users, including beta testers. We may update these Terms from time to time, and continued use of the Platform constitutes acceptance of any changes.</p>
      <h2 id="2-eligibility--account-registration">
      2. Eligibility &amp; Account Registration</h2>
      <p>
      You must be at least 18 years old (or the age of majority in your jurisdiction, if higher) to use the Platform.</p>
      <p>
      By creating an account, you represent that:</p>
      <ul>
      <li>
      You are legally permitted to participate in free-to-play sports prediction games in your jurisdiction</li>
      <li>
      All information you provide is accurate and current</li>
      <li>
      You will maintain the security of your account credentials</li>
      </ul>
      <p>
      Usernames, contest results, and rankings may be displayed publicly within the Platform, including on leaderboards.</p>
      <p>BMA reserves the right to restrict or deny access based on location, eligibility, or other factors at its sole discretion.</p><h2 id="3-free-to-play-nature-of-the-platform">
      3. Free-to-Play Nature of the Platform</h2>
      <p>
      Bet Max Tourney is free to play.</p>
      <p>
      No real money wagering, deposits, or withdrawals are offered or supported at this time.</p>
      <p>
      Participation does not require payment, and no real-money prizes are awarded unless explicitly stated in a future, separate offering governed by additional terms.</p>
      <h3 id="3a-no-gambling">
      3A. No Gambling</h3>
      <p>
      The Platform is provided solely for entertainment purposes and may not be used in connection with any form of real-money gambling or wagering.</p>
      <h2 id="4-gameplay-tournaments--td-mechanics">
      4. Gameplay, Tournaments &amp; TD$ Mechanics</h2>
      <p>
      BMA operates tournament-style contests in which users compete against other users.</p>
      <p>
      Key mechanics include:</p>
      <ul>
      <li>
      Users are allocated a fixed amount of in-game units (“TD$”) for tournament participation</li>
      <li>
      TD$ have no real-world monetary value</li>
      <li>
      TD$ may only be used within the Platform for gameplay purposes</li>
      <li>
      Users make predictions or selections based on available markets</li>
      <li>
      Tournament rankings and outcomes are determined by predefined rules and scoring logic</li>
      </ul>
      <p>
      TD$ cannot be redeemed, transferred, exchanged, or cashed out.</p>
      <p>
      BMA reserves the right to modify tournament rules, formats, scoring logic, and TD$ mechanics at any time during beta.</p>
      <h3 id="4a-contest-rules">
      4A. Contest Rules</h3>
      <p>
      Participation in any contest offered on the Platform is subject to the official rules applicable to that contest (the “Rules”), which are made available within the Platform and incorporated by reference into these Terms. By entering a contest, you agree to be bound by the applicable Rules.</p>
      <h2 id="5-odds--game-data">
      5. Odds &amp; Game Data</h2>
      <p>
      Odds and game data displayed on the Platform are sourced from third-party sportsbook data providers and are used solely for informational and gameplay purposes.</p>
      <p>
      These odds:</p>
      <ul>
      <li>
      Are not tied to real-money wagering</li>
      <li>
      Are used solely as reference inputs for gameplay and scoring purposes and are not used to facilitate real-money wagering or to create an advantage for the Platform</li>
      <li>
      Are used to support tournament operations and scoring logic</li>
      </ul>
      <p>
      Data providers may change over time as the Platform evolves.</p>
      <p>
      BMA does not guarantee the accuracy, availability, or timeliness of third-party data.</p>
      <h2 id="6-platform-evolution-beta-status--changes">
      6. Platform Evolution, Beta Status &amp; Changes</h2>
      <p>
      The Platform is currently in beta.</p>
      <p>
      You acknowledge and agree that:</p>
      <ul>
      <li>
      Features may change, be added, or be removed</li>
      <li>
      Gameplay mechanics and data may reset</li>
      <li>
      Bugs, downtime, or errors may occur</li>
      <li>
      The Platform may evolve into new formats, including additional tournament styles or social features, at BMA’s discretion</li>
      </ul>
      <p>
      BMA makes no guarantees regarding continuity, availability, or future functionality during beta.</p>
      <h2 id="7-fair-play--prohibited-conduct">
      7. Fair Play &amp; Prohibited Conduct</h2>
      <p>
      Users may not:</p>
      <ul>
      <li>
      Exploit bugs or system weaknesses</li>
      <li>Use automation, scripts, or bots</li>
      <li>
      Engage in collusion or coordinated manipulation</li>
      <li>
      Misrepresent identity or create multiple accounts</li>
      <li>
      Attempt to interfere with platform operations</li>
      </ul>
      <p>
      BMA reserves the right to suspend or terminate accounts for violations of these rules.</p>
      <h2 id="8-intellectual-property">
      8. Intellectual Property</h2>
      <p>
      All platform content, including software, design, logos, trademarks, and game mechanics, are the property of Bet Max Action, Inc., or its licensors.</p>
      <p>
      Users may not copy, distribute, reverse engineer, or commercially exploit any part of the Platform without prior written consent.</p>
      <h2 id="9-disclaimers--limitation-of-liability">
      9. Disclaimers &amp; Limitation of Liability</h2>
      <p>
      The Platform is provided “as is” and “as available.”</p>
      <p>
      To the maximum extent permitted by law:</p>
      <ul>
      <li>
      BMA disclaims all warranties, express or implied</li>
      <li>
      BMA shall not be liable for indirect, incidental, or consequential damages</li>
      <li>
      BMA is not responsible for errors in data, scoring, or tournament outcomes</li>
      </ul>
      <p>
      Participation is at your own risk.</p>
      <h2 id="10-privacy--data-reference">
      10. Privacy &amp; Data Reference</h2>
      <p>
      Use of the Platform is subject to our Privacy Policy, which governs how user data is collected, used, and protected.</p>
      <p>
      By using BMA, you consent to data practices described in the Privacy Policy.</p>
      <h2 id="11-termination--account-suspension">
      11. Termination &amp; Account Suspension</h2>
      <p>
      BMA may suspend or terminate your account at any time, with or without notice, for violations of these Terms or for operational reasons.</p>
      <p>
      You may stop using the Platform at any time.</p>
      <h2 id="12-governing-law--miscellaneous">
      12. Governing Law &amp; Miscellaneous</h2>
      <p>
      These Terms are governed by the laws of the United States of America, without regard to conflict-of-law principles.</p>
      <p>
      If any provision is found unenforceable, the remaining provisions will remain in effect.</p>
      </div>

    </div>
  </template>




  <template id="sodapop_my_profile" data-n55-sodapop-modal="true"
    data-n55-sodapop-size="xlarge" data-n55-sodapop-fullscreen="false"
    data-n55-sodapop-transition="slide-right"
    style="padding: 0;">
    <div>
      <div class="head-caption tourn-dashboard profile-dashboard">
        <div class="head-caption__back" data-sodapop-close="true" role="button" tabindex="0" aria-label="Back">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
        <section class="head-caption__content">
          <h3 id="caption__my-profile" class="pop-play__tourn-caption">My Profile</h3>
        </section>
      </div>

      <!-- Profile Actions -->
      <div class="dash-nav">
        <button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.USER_PROFILE.INSTALL_PWA"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/></svg><span>Install</span></button>
        <button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.USER_PROFILE.RESET_PASSWORD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg><span>Password</span></button>
        <button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.USER_PROFILE.SIGNOUT"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg><span>Sign Out</span></button>
      </div>

      <!-- Trophies Surface -->
      <div class="info-surface" style="margin: 12px 8px;">
        <div id="profile-trophy-username" style="text-align: center; padding: 16px 16px 8px; font-size: 1.15rem; font-weight: 700; color: var(--status-locked-text, #F7C60D);"></div>
        <div style="font-size: 0.75rem; font-weight: 400; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.55); padding: 0 16px 12px; text-align: center;">My Trophies</div>
        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 12px; padding: 0 16px 12px;">
          <!-- Silver -->
          <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
            <div style="width: 72px; height: 72px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 4px;"></div>
            <span style="font-size: 1.15rem; font-weight: 700; color: #C0C0C0;" class="badge-counter">0</span>
            <span style="font-size: 0.75rem; font-weight: 400; color: rgba(255,255,255,0.55);">Silver</span>
          </div>
          <!-- Gold -->
          <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
            <div style="width: 88px; height: 88px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 4px;"></div>
            <span style="font-size: 1.4rem; font-weight: 700; color: var(--status-locked-text, #FFD700);" class="badge-counter">0</span>
            <span style="font-size: 0.75rem; font-weight: 400; color: rgba(255,255,255,0.55);">Gold</span>
          </div>
          <!-- Bronze -->
          <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
            <div style="width: 64px; height: 64px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 4px;"></div>
            <span style="font-size: 1rem; font-weight: 700; color: #DA954B;" class="badge-counter">0</span>
            <span style="font-size: 0.75rem; font-weight: 400; color: rgba(255,255,255,0.55);">Bronze</span>
          </div>
        </div>
      </div>

      <!-- Your Stats -->
      <div id="profile-stats-panel" style="padding: 0 8px;"></div>

      <!-- Tournament History -->
      <div style="padding: 0 8px;">
        <div style="font-size: 0.75rem; font-weight: 400; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.55); padding: 16px 8px 12px;">Your Tournaments</div>
        <div class="profile-tournaments__header">
          <div class="profile-tournaments__filters">
            <button class="profile-tourn-filter profile-tourn-filter--active" data-filter="all">All</button>
            <button class="profile-tourn-filter" data-filter="active">Active</button>
            <button class="profile-tourn-filter" data-filter="completed">Completed</button>
          </div>
        </div>
        <div id="profile-tournaments-list" class="profile-tournaments__list">
          <div class="profile-tournaments__empty">Loading tournaments...</div>
        </div>
      </div>

    </div>
  </template>

  <template id="sodapop_leaderboard" data-n55-sodapop-modal="true"
    data-n55-sodapop-size="xlarge" data-n55-sodapop-fullscreen="false"
    data-n55-sodapop-transition="slide-right"
    style="padding: 0;">
    <article class="global-leaderboard-cntr" style="min-height: 100%;">
      <div class="head-caption tourn-dashboard">
        <div class="head-caption__back" data-sodapop-close="true" role="button" tabindex="0" aria-label="Back">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
        <section class="head-caption__content">
          <h3 class="pop-play__tourn-caption">Top Players</h3>
          <p class="pop-play__tourn-tagline" id="lb-tagline">Top players across all tournaments</p>
        </section>
      </div>

      <div id="global-leaderboard-container" style="padding: 8px; max-width: 1600px; margin: 0 auto;">
        <div class="leaderboard-empty">
          <p>Loading leaderboard...</p>
        </div>
      </div>
    </article>
  </template>

  <template id="sodapop_filters" data-n55-sodapop-modal="false"
    data-n55-sodapop-size="medium" data-n55-sodapop-fullscreen="false"
    data-n55-ampm-theme="dark">
    <article>
      <div id="filter-popup__content--id" class="filter-popup"></div>
    </article>
  </template>


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Gc)}):document.body.insertAdjacentHTML("beforeend",Gc);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const Pr=Ph(ew);Pr.config.devtools=!1;Pr.use(Mh());Pr.use(Ea);Pr.mount("#app");(function(){let t=!1;const s=o=>{if(!t)return;const l=o.target;l&&typeof l.closest=="function"&&l.closest("neodigm-sodapop")||o.preventDefault()},a=()=>{const o=t,l=!!document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']");if(t=l,document.body.style.touchAction=l?"none":"",document.documentElement.style.overscrollBehavior=l?"none":"",o&&!l){const i=document.querySelector("bma-app-foot");i&&i.setAttribute("data-selected-item","foot_lobby");const c=document.querySelector("bma-app-head-mid");c&&c.setAttribute("data-selected-tab","head_mid_lobby")}},n=new MutationObserver(a),r=()=>{n.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]}),document.addEventListener("touchmove",s,{passive:!1,capture:!0}),a()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})();document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
