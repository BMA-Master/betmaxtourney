(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function No(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const Re={},Ys=[],Bt=()=>{},Kc=()=>!1,ir=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Io=e=>e.startsWith("onUpdate:"),Ke=Object.assign,Bo=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Zu=Object.prototype.hasOwnProperty,Ae=(e,t)=>Zu.call(e,t),be=Array.isArray,Ws=e=>Da(e)==="[object Map]",lr=e=>Da(e)==="[object Set]",fi=e=>Da(e)==="[object Date]",ye=e=>typeof e=="function",Fe=e=>typeof e=="string",zt=e=>typeof e=="symbol",Le=e=>e!==null&&typeof e=="object",Yc=e=>(Le(e)||ye(e))&&ye(e.then)&&ye(e.catch),Wc=Object.prototype.toString,Da=e=>Wc.call(e),ep=e=>Da(e).slice(8,-1),Jc=e=>Da(e)==="[object Object]",Fo=e=>Fe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ga=No(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cr=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},tp=/-\w/g,Et=cr(e=>e.replace(tp,t=>t.slice(1).toUpperCase())),sp=/\B([A-Z])/g,xs=cr(e=>e.replace(sp,"-$1").toLowerCase()),dr=cr(e=>e.charAt(0).toUpperCase()+e.slice(1)),Cr=cr(e=>e?`on${dr(e)}`:""),bs=(e,t)=>!Object.is(e,t),Ln=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Xc=(e,t,s,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:s})},zo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},ap=e=>{const t=Fe(e)?Number(e):NaN;return isNaN(t)?e:t};let hi;const ur=()=>hi||(hi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function pr(e){if(be(e)){const t={};for(let s=0;s<e.length;s++){const a=e[s],n=Fe(a)?ip(a):pr(a);if(n)for(const r in n)t[r]=n[r]}return t}else if(Fe(e)||Le(e))return e}const np=/;(?![^(]*\))/g,rp=/:([^]+)/,op=/\/\*[^]*?\*\//g;function ip(e){const t={};return e.replace(op,"").split(np).forEach(s=>{if(s){const a=s.split(rp);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Ue(e){let t="";if(Fe(e))t=e;else if(be(e))for(let s=0;s<e.length;s++){const a=Ue(e[s]);a&&(t+=a+" ")}else if(Le(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const lp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cp=No(lp);function Qc(e){return!!e||e===""}function dp(e,t){if(e.length!==t.length)return!1;let s=!0;for(let a=0;s&&a<e.length;a++)s=fr(e[a],t[a]);return s}function fr(e,t){if(e===t)return!0;let s=fi(e),a=fi(t);if(s||a)return s&&a?e.getTime()===t.getTime():!1;if(s=zt(e),a=zt(t),s||a)return e===t;if(s=be(e),a=be(t),s||a)return s&&a?dp(e,t):!1;if(s=Le(e),a=Le(t),s||a){if(!s||!a)return!1;const n=Object.keys(e).length,r=Object.keys(t).length;if(n!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(l&&!i||!l&&i||!fr(e[o],t[o]))return!1}}return String(e)===String(t)}function Zc(e,t){return e.findIndex(s=>fr(s,t))}const ed=e=>!!(e&&e.__v_isRef===!0),he=e=>Fe(e)?e:e==null?"":be(e)||Le(e)&&(e.toString===Wc||!ye(e.toString))?ed(e)?he(e.value):JSON.stringify(e,td,2):String(e),td=(e,t)=>ed(t)?td(e,t.value):Ws(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[a,n],r)=>(s[Or(a,r)+" =>"]=n,s),{})}:lr(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Or(s))}:zt(t)?Or(t):Le(t)&&!be(t)&&!Jc(t)?String(t):t,Or=(e,t="")=>{var s;return zt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Qe;class sd{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qe,!t&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Qe;try{return Qe=this,t()}finally{Qe=s}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){this._on>0&&--this._on===0&&(Qe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(this.effects.length=0,s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function ad(e){return new sd(e)}function nd(){return Qe}function up(e,t=!1){Qe&&Qe.cleanups.push(e)}let De;const $r=new WeakSet;class rd{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&Qe.active&&Qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$r.has(this)&&($r.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||id(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mi(this),ld(this);const t=De,s=Pt;De=this,Pt=!0;try{return this.fn()}finally{cd(this),De=t,Pt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Uo(t);this.deps=this.depsTail=void 0,mi(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$r.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ho(this)&&this.run()}get dirty(){return ho(this)}}let od=0,ba,_a;function id(e,t=!1){if(e.flags|=8,t){e.next=_a,_a=e;return}e.next=ba,ba=e}function Ho(){od++}function jo(){if(--od>0)return;if(_a){let t=_a;for(_a=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;ba;){let t=ba;for(ba=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=s}}if(e)throw e}function ld(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function cd(e){let t,s=e.depsTail,a=s;for(;a;){const n=a.prevDep;a.version===-1?(a===s&&(s=n),Uo(a),pp(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=n}e.deps=t,e.depsTail=s}function ho(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(dd(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function dd(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Pa)||(e.globalVersion=Pa,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ho(e))))return;e.flags|=2;const t=e.dep,s=De,a=Pt;De=e,Pt=!0;try{ld(e);const n=e.fn(e._value);(t.version===0||bs(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{De=s,Pt=a,cd(e),e.flags&=-3}}function Uo(e,t=!1){const{dep:s,prevSub:a,nextSub:n}=e;if(a&&(a.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=a,e.nextSub=void 0),s.subs===e&&(s.subs=a,!a&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Uo(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function pp(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let Pt=!0;const ud=[];function ss(){ud.push(Pt),Pt=!1}function as(){const e=ud.pop();Pt=e===void 0?!0:e}function mi(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=De;De=void 0;try{t()}finally{De=s}}}let Pa=0;class fp{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!De||!Pt||De===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==De)s=this.activeLink=new fp(De,this),De.deps?(s.prevDep=De.depsTail,De.depsTail.nextDep=s,De.depsTail=s):De.deps=De.depsTail=s,pd(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const a=s.nextDep;a.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=a),s.prevDep=De.depsTail,s.nextDep=void 0,De.depsTail.nextDep=s,De.depsTail=s,De.deps===s&&(De.deps=a)}return s}trigger(t){this.version++,Pa++,this.notify(t)}notify(t){Ho();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{jo()}}}function pd(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)pd(a)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const zn=new WeakMap,Bs=Symbol(""),mo=Symbol(""),Aa=Symbol("");function Ze(e,t,s){if(Pt&&De){let a=zn.get(e);a||zn.set(e,a=new Map);let n=a.get(s);n||(a.set(s,n=new qo),n.map=a,n.key=s),n.track()}}function Qt(e,t,s,a,n,r){const o=zn.get(e);if(!o){Pa++;return}const l=i=>{i&&i.trigger()};if(Ho(),t==="clear")o.forEach(l);else{const i=be(e),c=i&&Fo(s);if(i&&s==="length"){const d=Number(a);o.forEach((u,p)=>{(p==="length"||p===Aa||!zt(p)&&p>=d)&&l(u)})}else switch((s!==void 0||o.has(void 0))&&l(o.get(s)),c&&l(o.get(Aa)),t){case"add":i?c&&l(o.get("length")):(l(o.get(Bs)),Ws(e)&&l(o.get(mo)));break;case"delete":i||(l(o.get(Bs)),Ws(e)&&l(o.get(mo)));break;case"set":Ws(e)&&l(o.get(Bs));break}}jo()}function hp(e,t){const s=zn.get(e);return s&&s.get(t)}function zs(e){const t=Se(e);return t===e?t:(Ze(t,"iterate",Aa),Tt(e)?t:t.map(We))}function hr(e){return Ze(e=Se(e),"iterate",Aa),e}const mp={__proto__:null,[Symbol.iterator](){return Mr(this,Symbol.iterator,We)},concat(...e){return zs(this).concat(...e.map(t=>be(t)?zs(t):t))},entries(){return Mr(this,"entries",e=>(e[1]=We(e[1]),e))},every(e,t){return Ht(this,"every",e,t,void 0,arguments)},filter(e,t){return Ht(this,"filter",e,t,s=>s.map(We),arguments)},find(e,t){return Ht(this,"find",e,t,We,arguments)},findIndex(e,t){return Ht(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Ht(this,"findLast",e,t,We,arguments)},findLastIndex(e,t){return Ht(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Ht(this,"forEach",e,t,void 0,arguments)},includes(...e){return Lr(this,"includes",e)},indexOf(...e){return Lr(this,"indexOf",e)},join(e){return zs(this).join(e)},lastIndexOf(...e){return Lr(this,"lastIndexOf",e)},map(e,t){return Ht(this,"map",e,t,void 0,arguments)},pop(){return oa(this,"pop")},push(...e){return oa(this,"push",e)},reduce(e,...t){return gi(this,"reduce",e,t)},reduceRight(e,...t){return gi(this,"reduceRight",e,t)},shift(){return oa(this,"shift")},some(e,t){return Ht(this,"some",e,t,void 0,arguments)},splice(...e){return oa(this,"splice",e)},toReversed(){return zs(this).toReversed()},toSorted(e){return zs(this).toSorted(e)},toSpliced(...e){return zs(this).toSpliced(...e)},unshift(...e){return oa(this,"unshift",e)},values(){return Mr(this,"values",We)}};function Mr(e,t,s){const a=hr(e),n=a[t]();return a!==e&&!Tt(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=s(r.value)),r}),n}const gp=Array.prototype;function Ht(e,t,s,a,n,r){const o=hr(e),l=o!==e&&!Tt(e),i=o[t];if(i!==gp[t]){const u=i.apply(e,r);return l?We(u):u}let c=s;o!==e&&(l?c=function(u,p){return s.call(this,We(u),p,e)}:s.length>2&&(c=function(u,p){return s.call(this,u,p,e)}));const d=i.call(o,c,a);return l&&n?n(d):d}function gi(e,t,s,a){const n=hr(e);let r=s;return n!==e&&(Tt(e)?s.length>3&&(r=function(o,l,i){return s.call(this,o,l,i,e)}):r=function(o,l,i){return s.call(this,o,We(l),i,e)}),n[t](r,...a)}function Lr(e,t,s){const a=Se(e);Ze(a,"iterate",Aa);const n=a[t](...s);return(n===-1||n===!1)&&Ko(s[0])?(s[0]=Se(s[0]),a[t](...s)):n}function oa(e,t,s=[]){ss(),Ho();const a=Se(e)[t].apply(e,s);return jo(),as(),a}const bp=No("__proto__,__v_isRef,__isVue"),fd=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(zt));function _p(e){zt(e)||(e=String(e));const t=Se(this);return Ze(t,"has",e),t.hasOwnProperty(e)}class hd{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,a){if(s==="__v_skip")return t.__v_skip;const n=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return r;if(s==="__v_raw")return a===(n?r?Ap:_d:r?bd:gd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=be(t);if(!n){let i;if(o&&(i=mp[s]))return i;if(s==="hasOwnProperty")return _p}const l=Reflect.get(t,s,ze(t)?t:a);if((zt(s)?fd.has(s):bp(s))||(n||Ze(t,"get",s),r))return l;if(ze(l)){const i=o&&Fo(s)?l:l.value;return n&&Le(i)?bo(i):i}return Le(l)?n?bo(l):es(l):l}}class md extends hd{constructor(t=!1){super(!1,t)}set(t,s,a,n){let r=t[s];if(!this._isShallow){const i=vs(r);if(!Tt(a)&&!vs(a)&&(r=Se(r),a=Se(a)),!be(t)&&ze(r)&&!ze(a))return i||(r.value=a),!0}const o=be(t)&&Fo(s)?Number(s)<t.length:Ae(t,s),l=Reflect.set(t,s,a,ze(t)?t:n);return t===Se(n)&&(o?bs(a,r)&&Qt(t,"set",s,a):Qt(t,"add",s,a)),l}deleteProperty(t,s){const a=Ae(t,s);t[s];const n=Reflect.deleteProperty(t,s);return n&&a&&Qt(t,"delete",s,void 0),n}has(t,s){const a=Reflect.has(t,s);return(!zt(s)||!fd.has(s))&&Ze(t,"has",s),a}ownKeys(t){return Ze(t,"iterate",be(t)?"length":Bs),Reflect.ownKeys(t)}}class vp extends hd{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const yp=new md,wp=new vp,xp=new md(!0);const go=e=>e,za=e=>Reflect.getPrototypeOf(e);function Tp(e,t,s){return function(...a){const n=this.__v_raw,r=Se(n),o=Ws(r),l=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,c=n[e](...a),d=s?go:t?Hn:We;return!t&&Ze(r,"iterate",i?mo:Bs),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:l?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Ha(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Sp(e,t){const s={get(n){const r=this.__v_raw,o=Se(r),l=Se(n);e||(bs(n,l)&&Ze(o,"get",n),Ze(o,"get",l));const{has:i}=za(o),c=t?go:e?Hn:We;if(i.call(o,n))return c(r.get(n));if(i.call(o,l))return c(r.get(l));r!==o&&r.get(n)},get size(){const n=this.__v_raw;return!e&&Ze(Se(n),"iterate",Bs),n.size},has(n){const r=this.__v_raw,o=Se(r),l=Se(n);return e||(bs(n,l)&&Ze(o,"has",n),Ze(o,"has",l)),n===l?r.has(n):r.has(n)||r.has(l)},forEach(n,r){const o=this,l=o.__v_raw,i=Se(l),c=t?go:e?Hn:We;return!e&&Ze(i,"iterate",Bs),l.forEach((d,u)=>n.call(r,c(d),c(u),o))}};return Ke(s,e?{add:Ha("add"),set:Ha("set"),delete:Ha("delete"),clear:Ha("clear")}:{add(n){!t&&!Tt(n)&&!vs(n)&&(n=Se(n));const r=Se(this);return za(r).has.call(r,n)||(r.add(n),Qt(r,"add",n,n)),this},set(n,r){!t&&!Tt(r)&&!vs(r)&&(r=Se(r));const o=Se(this),{has:l,get:i}=za(o);let c=l.call(o,n);c||(n=Se(n),c=l.call(o,n));const d=i.call(o,n);return o.set(n,r),c?bs(r,d)&&Qt(o,"set",n,r):Qt(o,"add",n,r),this},delete(n){const r=Se(this),{has:o,get:l}=za(r);let i=o.call(r,n);i||(n=Se(n),i=o.call(r,n)),l&&l.call(r,n);const c=r.delete(n);return i&&Qt(r,"delete",n,void 0),c},clear(){const n=Se(this),r=n.size!==0,o=n.clear();return r&&Qt(n,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(n=>{s[n]=Tp(n,e,t)}),s}function Vo(e,t){const s=Sp(e,t);return(a,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?a:Reflect.get(Ae(s,n)&&n in a?s:a,n,r)}const Ep={get:Vo(!1,!1)},kp={get:Vo(!1,!0)},Pp={get:Vo(!0,!1)};const gd=new WeakMap,bd=new WeakMap,_d=new WeakMap,Ap=new WeakMap;function Cp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Op(e){return e.__v_skip||!Object.isExtensible(e)?0:Cp(ep(e))}function es(e){return vs(e)?e:Go(e,!1,yp,Ep,gd)}function vd(e){return Go(e,!1,xp,kp,bd)}function bo(e){return Go(e,!0,wp,Pp,_d)}function Go(e,t,s,a,n){if(!Le(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=Op(e);if(r===0)return e;const o=n.get(e);if(o)return o;const l=new Proxy(e,r===2?a:s);return n.set(e,l),l}function _s(e){return vs(e)?_s(e.__v_raw):!!(e&&e.__v_isReactive)}function vs(e){return!!(e&&e.__v_isReadonly)}function Tt(e){return!!(e&&e.__v_isShallow)}function Ko(e){return e?!!e.__v_raw:!1}function Se(e){const t=e&&e.__v_raw;return t?Se(t):e}function Yo(e){return!Ae(e,"__v_skip")&&Object.isExtensible(e)&&Xc(e,"__v_skip",!0),e}const We=e=>Le(e)?es(e):e,Hn=e=>Le(e)?bo(e):e;function ze(e){return e?e.__v_isRef===!0:!1}function Ne(e){return yd(e,!1)}function $p(e){return yd(e,!0)}function yd(e,t){return ze(e)?e:new Mp(e,t)}class Mp{constructor(t,s){this.dep=new qo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:Se(t),this._value=s?t:We(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,a=this.__v_isShallow||Tt(t)||vs(t);t=a?t:Se(t),bs(t,s)&&(this._rawValue=t,this._value=a?t:We(t),this.dep.trigger())}}function ut(e){return ze(e)?e.value:e}const Lp={get:(e,t,s)=>t==="__v_raw"?e:ut(Reflect.get(e,t,s)),set:(e,t,s,a)=>{const n=e[t];return ze(n)&&!ze(s)?(n.value=s,!0):Reflect.set(e,t,s,a)}};function wd(e){return _s(e)?e:new Proxy(e,Lp)}function Rp(e){const t=be(e)?new Array(e.length):{};for(const s in e)t[s]=Np(e,s);return t}class Dp{constructor(t,s,a){this._object=t,this._key=s,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return hp(Se(this._object),this._key)}}function Np(e,t,s){const a=e[t];return ze(a)?a:new Dp(e,t,s)}class Ip{constructor(t,s,a){this.fn=t,this.setter=s,this._value=void 0,this.dep=new qo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Pa-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return id(this,!0),!0}get value(){const t=this.dep.track();return dd(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Bp(e,t,s=!1){let a,n;return ye(e)?a=e:(a=e.get,n=e.set),new Ip(a,n,s)}const ja={},jn=new WeakMap;let Ls;function Fp(e,t=!1,s=Ls){if(s){let a=jn.get(s);a||jn.set(s,a=[]),a.push(e)}}function zp(e,t,s=Re){const{immediate:a,deep:n,once:r,scheduler:o,augmentJob:l,call:i}=s,c=v=>n?v:Tt(v)||n===!1||n===0?Zt(v,1):Zt(v);let d,u,p,f,g=!1,_=!1;if(ze(e)?(u=()=>e.value,g=Tt(e)):_s(e)?(u=()=>c(e),g=!0):be(e)?(_=!0,g=e.some(v=>_s(v)||Tt(v)),u=()=>e.map(v=>{if(ze(v))return v.value;if(_s(v))return c(v);if(ye(v))return i?i(v,2):v()})):ye(e)?t?u=i?()=>i(e,2):e:u=()=>{if(p){ss();try{p()}finally{as()}}const v=Ls;Ls=d;try{return i?i(e,3,[f]):e(f)}finally{Ls=v}}:u=Bt,t&&n){const v=u,w=n===!0?1/0:n;u=()=>Zt(v(),w)}const y=nd(),m=()=>{d.stop(),y&&y.active&&Bo(y.effects,d)};if(r&&t){const v=t;t=(...w)=>{v(...w),m()}}let h=_?new Array(e.length).fill(ja):ja;const b=v=>{if(!(!(d.flags&1)||!d.dirty&&!v))if(t){const w=d.run();if(n||g||(_?w.some((x,P)=>bs(x,h[P])):bs(w,h))){p&&p();const x=Ls;Ls=d;try{const P=[w,h===ja?void 0:_&&h[0]===ja?[]:h,f];h=w,i?i(t,3,P):t(...P)}finally{Ls=x}}}else d.run()};return l&&l(b),d=new rd(u),d.scheduler=o?()=>o(b,!1):b,f=v=>Fp(v,!1,d),p=d.onStop=()=>{const v=jn.get(d);if(v){if(i)i(v,4);else for(const w of v)w();jn.delete(d)}},t?a?b(!0):h=d.run():o?o(b.bind(null,!0),!0):d.run(),m.pause=d.pause.bind(d),m.resume=d.resume.bind(d),m.stop=m,m}function Zt(e,t=1/0,s){if(t<=0||!Le(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,ze(e))Zt(e.value,t,s);else if(be(e))for(let a=0;a<e.length;a++)Zt(e[a],t,s);else if(lr(e)||Ws(e))e.forEach(a=>{Zt(a,t,s)});else if(Jc(e)){for(const a in e)Zt(e[a],t,s);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Zt(e[a],t,s)}return e}function Na(e,t,s,a){try{return a?e(...a):e()}catch(n){mr(n,t,s)}}function At(e,t,s,a){if(ye(e)){const n=Na(e,t,s,a);return n&&Yc(n)&&n.catch(r=>{mr(r,t,s)}),n}if(be(e)){const n=[];for(let r=0;r<e.length;r++)n.push(At(e[r],t,s,a));return n}}function mr(e,t,s,a=!0){const n=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Re;if(t){let l=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const d=l.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,i,c)===!1)return}l=l.parent}if(r){ss(),Na(r,null,10,[e,i,c]),as();return}}Hp(e,s,n,a,o)}function Hp(e,t,s,a=!0,n=!1){if(n)throw e;console.error(e)}const ot=[];let Rt=-1;const Js=[];let ps=null,Gs=0;const xd=Promise.resolve();let Un=null;function Wo(e){const t=Un||xd;return e?t.then(this?e.bind(this):e):t}function jp(e){let t=Rt+1,s=ot.length;for(;t<s;){const a=t+s>>>1,n=ot[a],r=Ca(n);r<e||r===e&&n.flags&2?t=a+1:s=a}return t}function Jo(e){if(!(e.flags&1)){const t=Ca(e),s=ot[ot.length-1];!s||!(e.flags&2)&&t>=Ca(s)?ot.push(e):ot.splice(jp(t),0,e),e.flags|=1,Td()}}function Td(){Un||(Un=xd.then(Ed))}function Up(e){be(e)?Js.push(...e):ps&&e.id===-1?ps.splice(Gs+1,0,e):e.flags&1||(Js.push(e),e.flags|=1),Td()}function bi(e,t,s=Rt+1){for(;s<ot.length;s++){const a=ot[s];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;ot.splice(s,1),s--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function Sd(e){if(Js.length){const t=[...new Set(Js)].sort((s,a)=>Ca(s)-Ca(a));if(Js.length=0,ps){ps.push(...t);return}for(ps=t,Gs=0;Gs<ps.length;Gs++){const s=ps[Gs];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}ps=null,Gs=0}}const Ca=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ed(e){try{for(Rt=0;Rt<ot.length;Rt++){const t=ot[Rt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Na(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Rt<ot.length;Rt++){const t=ot[Rt];t&&(t.flags&=-2)}Rt=-1,ot.length=0,Sd(),Un=null,(ot.length||Js.length)&&Ed()}}let gt=null,kd=null;function qn(e){const t=gt;return gt=e,kd=e&&e.type.__scopeId||null,t}function _o(e,t=gt,s){if(!t||e._n)return e;const a=(...n)=>{a._d&&Kn(-1);const r=qn(t);let o;try{o=e(...n)}finally{qn(r),a._d&&Kn(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function ts(e,t){if(gt===null)return e;const s=yr(gt),a=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[r,o,l,i=Re]=t[n];r&&(ye(r)&&(r={mounted:r,updated:r}),r.deep&&Zt(o),a.push({dir:r,instance:s,value:o,oldValue:void 0,arg:l,modifiers:i}))}return e}function ks(e,t,s,a){const n=e.dirs,r=t&&t.dirs;for(let o=0;o<n.length;o++){const l=n[o];r&&(l.oldValue=r[o].value);let i=l.dir[a];i&&(ss(),At(i,s,8,[e.el,l,e,t]),as())}}const qp=Symbol("_vte"),Pd=e=>e.__isTeleport,Jt=Symbol("_leaveCb"),Ua=Symbol("_enterCb");function Vp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lt(()=>{e.isMounted=!0}),Nd(()=>{e.isUnmounting=!0}),e}const yt=[Function,Array],Ad={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:yt,onEnter:yt,onAfterEnter:yt,onEnterCancelled:yt,onBeforeLeave:yt,onLeave:yt,onAfterLeave:yt,onLeaveCancelled:yt,onBeforeAppear:yt,onAppear:yt,onAfterAppear:yt,onAppearCancelled:yt},Cd=e=>{const t=e.subTree;return t.component?Cd(t.component):t},Gp={name:"BaseTransition",props:Ad,setup(e,{slots:t}){const s=ei(),a=Vp();return()=>{const n=t.default&&Md(t.default(),!0);if(!n||!n.length)return;const r=Od(n),o=Se(e),{mode:l}=o;if(a.isLeaving)return Rr(r);const i=_i(r);if(!i)return Rr(r);let c=vo(i,o,a,s,u=>c=u);i.type!==it&&Oa(i,c);let d=s.subTree&&_i(s.subTree);if(d&&d.type!==it&&!Rs(d,i)&&Cd(s).type!==it){let u=vo(d,o,a,s);if(Oa(d,u),l==="out-in"&&i.type!==it)return a.isLeaving=!0,u.afterLeave=()=>{a.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,d=void 0},Rr(r);l==="in-out"&&i.type!==it?u.delayLeave=(p,f,g)=>{const _=$d(a,d);_[String(d.key)]=d,p[Jt]=()=>{f(),p[Jt]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function Od(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==it){t=s;break}}return t}const Kp=Gp;function $d(e,t){const{leavingVNodes:s}=e;let a=s.get(t.type);return a||(a=Object.create(null),s.set(t.type,a)),a}function vo(e,t,s,a,n){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:y,onAppear:m,onAfterAppear:h,onAppearCancelled:b}=t,v=String(e.key),w=$d(s,e),x=(S,k)=>{S&&At(S,a,9,k)},P=(S,k)=>{const T=k[1];x(S,k),be(S)?S.every(O=>O.length<=1)&&T():S.length<=1&&T()},R={mode:o,persisted:l,beforeEnter(S){let k=i;if(!s.isMounted)if(r)k=y||i;else return;S[Jt]&&S[Jt](!0);const T=w[v];T&&Rs(e,T)&&T.el[Jt]&&T.el[Jt](),x(k,[S])},enter(S){let k=c,T=d,O=u;if(!s.isMounted)if(r)k=m||c,T=h||d,O=b||u;else return;let D=!1;const V=S[Ua]=Q=>{D||(D=!0,Q?x(O,[S]):x(T,[S]),R.delayedLeave&&R.delayedLeave(),S[Ua]=void 0)};k?P(k,[S,V]):V()},leave(S,k){const T=String(e.key);if(S[Ua]&&S[Ua](!0),s.isUnmounting)return k();x(p,[S]);let O=!1;const D=S[Jt]=V=>{O||(O=!0,k(),V?x(_,[S]):x(g,[S]),S[Jt]=void 0,w[T]===e&&delete w[T])};w[T]=e,f?P(f,[S,D]):D()},clone(S){const k=vo(S,t,s,a,n);return n&&n(k),k}};return R}function Rr(e){if(gr(e))return e=ys(e),e.children=null,e}function _i(e){if(!gr(e))return Pd(e.type)&&e.children?Od(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&ye(s.default))return s.default()}}function Oa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Oa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Md(e,t=!1,s){let a=[],n=0;for(let r=0;r<e.length;r++){let o=e[r];const l=s==null?o.key:String(s)+String(o.key!=null?o.key:r);o.type===qe?(o.patchFlag&128&&n++,a=a.concat(Md(o.children,t,l))):(t||o.type!==it)&&a.push(l!=null?ys(o,{key:l}):o)}if(n>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function Ld(e,t){return ye(e)?Ke({name:e.name},t,{setup:e}):e}function Rd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Vn=new WeakMap;function va(e,t,s,a,n=!1){if(be(e)){e.forEach((g,_)=>va(g,t&&(be(t)?t[_]:t),s,a,n));return}if(ya(a)&&!n){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&va(e,t,s,a.component.subTree);return}const r=a.shapeFlag&4?yr(a.component):a.el,o=n?null:r,{i:l,r:i}=e,c=t&&t.r,d=l.refs===Re?l.refs={}:l.refs,u=l.setupState,p=Se(u),f=u===Re?Kc:g=>Ae(p,g);if(c!=null&&c!==i){if(vi(t),Fe(c))d[c]=null,f(c)&&(u[c]=null);else if(ze(c)){c.value=null;const g=t;g.k&&(d[g.k]=null)}}if(ye(i))Na(i,l,12,[o,d]);else{const g=Fe(i),_=ze(i);if(g||_){const y=()=>{if(e.f){const m=g?f(i)?u[i]:d[i]:i.value;if(n)be(m)&&Bo(m,r);else if(be(m))m.includes(r)||m.push(r);else if(g)d[i]=[r],f(i)&&(u[i]=d[i]);else{const h=[r];i.value=h,e.k&&(d[e.k]=h)}}else g?(d[i]=o,f(i)&&(u[i]=o)):_&&(i.value=o,e.k&&(d[e.k]=o))};if(o){const m=()=>{y(),Vn.delete(e)};m.id=-1,Vn.set(e,m),ht(m,s)}else vi(e),y()}}}function vi(e){const t=Vn.get(e);t&&(t.flags|=8,Vn.delete(e))}ur().requestIdleCallback;ur().cancelIdleCallback;const ya=e=>!!e.type.__asyncLoader,gr=e=>e.type.__isKeepAlive;function Yp(e,t){Dd(e,"a",t)}function Wp(e,t){Dd(e,"da",t)}function Dd(e,t,s=tt){const a=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(br(t,a,s),s){let n=s.parent;for(;n&&n.parent;)gr(n.parent.vnode)&&Jp(a,t,s,n),n=n.parent}}function Jp(e,t,s,a){const n=br(t,e,a,!0);os(()=>{Bo(a[t],n)},s)}function br(e,t,s=tt,a=!1){if(s){const n=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{ss();const l=Ia(s),i=At(t,s,e,o);return l(),as(),i});return a?n.unshift(r):n.push(r),r}}const rs=e=>(t,s=tt)=>{(!Ma||e==="sp")&&br(e,(...a)=>t(...a),s)},Xp=rs("bm"),lt=rs("m"),Qp=rs("bu"),Zp=rs("u"),Nd=rs("bum"),os=rs("um"),ef=rs("sp"),tf=rs("rtg"),sf=rs("rtc");function af(e,t=tt){br("ec",e,t)}const nf="components",Id=Symbol.for("v-ndc");function rf(e){return Fe(e)?of(nf,e,!1)||e:e||Id}function of(e,t,s=!0,a=!1){const n=gt||tt;if(n){const r=n.type;{const l=Wf(r,!1);if(l&&(l===t||l===Et(t)||l===dr(Et(t))))return r}const o=yi(n[e]||r[e],t)||yi(n.appContext[e],t);return!o&&a?r:o}}function yi(e,t){return e&&(e[t]||e[Et(t)]||e[dr(Et(t))])}function ds(e,t,s,a){let n;const r=s,o=be(e);if(o||Fe(e)){const l=o&&_s(e);let i=!1,c=!1;l&&(i=!Tt(e),c=vs(e),e=hr(e)),n=new Array(e.length);for(let d=0,u=e.length;d<u;d++)n[d]=t(i?c?Hn(We(e[d])):We(e[d]):e[d],d,void 0,r)}else if(typeof e=="number"){n=new Array(e);for(let l=0;l<e;l++)n[l]=t(l+1,l,void 0,r)}else if(Le(e))if(e[Symbol.iterator])n=Array.from(e,(l,i)=>t(l,i,void 0,r));else{const l=Object.keys(e);n=new Array(l.length);for(let i=0,c=l.length;i<c;i++){const d=l[i];n[i]=t(e[d],d,i,r)}}else n=[];return n}const yo=e=>e?nu(e)?yr(e):yo(e.parent):null,wa=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yo(e.parent),$root:e=>yo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Fd(e),$forceUpdate:e=>e.f||(e.f=()=>{Jo(e.update)}),$nextTick:e=>e.n||(e.n=Wo.bind(e.proxy)),$watch:e=>Cf.bind(e)}),Dr=(e,t)=>e!==Re&&!e.__isScriptSetup&&Ae(e,t),lf={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:a,data:n,props:r,accessCache:o,type:l,appContext:i}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return a[t];case 2:return n[t];case 4:return s[t];case 3:return r[t]}else{if(Dr(a,t))return o[t]=1,a[t];if(n!==Re&&Ae(n,t))return o[t]=2,n[t];if((c=e.propsOptions[0])&&Ae(c,t))return o[t]=3,r[t];if(s!==Re&&Ae(s,t))return o[t]=4,s[t];wo&&(o[t]=0)}}const d=wa[t];let u,p;if(d)return t==="$attrs"&&Ze(e.attrs,"get",""),d(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(s!==Re&&Ae(s,t))return o[t]=4,s[t];if(p=i.config.globalProperties,Ae(p,t))return p[t]},set({_:e},t,s){const{data:a,setupState:n,ctx:r}=e;return Dr(n,t)?(n[t]=s,!0):a!==Re&&Ae(a,t)?(a[t]=s,!0):Ae(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:a,appContext:n,propsOptions:r,type:o}},l){let i,c;return!!(s[l]||e!==Re&&l[0]!=="$"&&Ae(e,l)||Dr(t,l)||(i=r[0])&&Ae(i,l)||Ae(a,l)||Ae(wa,l)||Ae(n.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:Ae(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function wi(e){return be(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let wo=!0;function cf(e){const t=Fd(e),s=e.proxy,a=e.ctx;wo=!1,t.beforeCreate&&xi(t.beforeCreate,e,"bc");const{data:n,computed:r,methods:o,watch:l,provide:i,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:g,activated:_,deactivated:y,beforeDestroy:m,beforeUnmount:h,destroyed:b,unmounted:v,render:w,renderTracked:x,renderTriggered:P,errorCaptured:R,serverPrefetch:S,expose:k,inheritAttrs:T,components:O,directives:D,filters:V}=t;if(c&&df(c,a,null),o)for(const Z in o){const K=o[Z];ye(K)&&(a[Z]=K.bind(s))}if(n){const Z=n.call(s,s);Le(Z)&&(e.data=es(Z))}if(wo=!0,r)for(const Z in r){const K=r[Z],ie=ye(K)?K.bind(s,s):ye(K.get)?K.get.bind(s,s):Bt,J=!ye(K)&&ye(K.set)?K.set.bind(s):Bt,z=ge({get:ie,set:J});Object.defineProperty(a,Z,{enumerable:!0,configurable:!0,get:()=>z.value,set:ee=>z.value=ee})}if(l)for(const Z in l)Bd(l[Z],a,s,Z);if(i){const Z=ye(i)?i.call(s):i;Reflect.ownKeys(Z).forEach(K=>{Rn(K,Z[K])})}d&&xi(d,e,"c");function X(Z,K){be(K)?K.forEach(ie=>Z(ie.bind(s))):K&&Z(K.bind(s))}if(X(Xp,u),X(lt,p),X(Qp,f),X(Zp,g),X(Yp,_),X(Wp,y),X(af,R),X(sf,x),X(tf,P),X(Nd,h),X(os,v),X(ef,S),be(k))if(k.length){const Z=e.exposed||(e.exposed={});k.forEach(K=>{Object.defineProperty(Z,K,{get:()=>s[K],set:ie=>s[K]=ie,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===Bt&&(e.render=w),T!=null&&(e.inheritAttrs=T),O&&(e.components=O),D&&(e.directives=D),S&&Rd(e)}function df(e,t,s=Bt){be(e)&&(e=xo(e));for(const a in e){const n=e[a];let r;Le(n)?"default"in n?r=St(n.from||a,n.default,!0):r=St(n.from||a):r=St(n),ze(r)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[a]=r}}function xi(e,t,s){At(be(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,s)}function Bd(e,t,s,a){let n=a.includes(".")?Qd(s,a):()=>s[a];if(Fe(e)){const r=t[e];ye(r)&&Xs(n,r)}else if(ye(e))Xs(n,e.bind(s));else if(Le(e))if(be(e))e.forEach(r=>Bd(r,t,s,a));else{const r=ye(e.handler)?e.handler.bind(s):t[e.handler];ye(r)&&Xs(n,r,e)}}function Fd(e){const t=e.type,{mixins:s,extends:a}=t,{mixins:n,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let i;return l?i=l:!n.length&&!s&&!a?i=t:(i={},n.length&&n.forEach(c=>Gn(i,c,o,!0)),Gn(i,t,o)),Le(t)&&r.set(t,i),i}function Gn(e,t,s,a=!1){const{mixins:n,extends:r}=t;r&&Gn(e,r,s,!0),n&&n.forEach(o=>Gn(e,o,s,!0));for(const o in t)if(!(a&&o==="expose")){const l=uf[o]||s&&s[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const uf={data:Ti,props:Si,emits:Si,methods:ha,computed:ha,beforeCreate:nt,created:nt,beforeMount:nt,mounted:nt,beforeUpdate:nt,updated:nt,beforeDestroy:nt,beforeUnmount:nt,destroyed:nt,unmounted:nt,activated:nt,deactivated:nt,errorCaptured:nt,serverPrefetch:nt,components:ha,directives:ha,watch:ff,provide:Ti,inject:pf};function Ti(e,t){return t?e?function(){return Ke(ye(e)?e.call(this,this):e,ye(t)?t.call(this,this):t)}:t:e}function pf(e,t){return ha(xo(e),xo(t))}function xo(e){if(be(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function nt(e,t){return e?[...new Set([].concat(e,t))]:t}function ha(e,t){return e?Ke(Object.create(null),e,t):t}function Si(e,t){return e?be(e)&&be(t)?[...new Set([...e,...t])]:Ke(Object.create(null),wi(e),wi(t??{})):t}function ff(e,t){if(!e)return t;if(!t)return e;const s=Ke(Object.create(null),e);for(const a in t)s[a]=nt(e[a],t[a]);return s}function zd(){return{app:null,config:{isNativeTag:Kc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let hf=0;function mf(e,t){return function(a,n=null){ye(a)||(a=Ke({},a)),n!=null&&!Le(n)&&(n=null);const r=zd(),o=new WeakSet,l=[];let i=!1;const c=r.app={_uid:hf++,_component:a,_props:n,_container:null,_context:r,_instance:null,version:Xf,get config(){return r.config},set config(d){},use(d,...u){return o.has(d)||(d&&ye(d.install)?(o.add(d),d.install(c,...u)):ye(d)&&(o.add(d),d(c,...u))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,u){return u?(r.components[d]=u,c):r.components[d]},directive(d,u){return u?(r.directives[d]=u,c):r.directives[d]},mount(d,u,p){if(!i){const f=c._ceVNode||st(a,n);return f.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),i=!0,c._container=d,d.__vue_app__=c,yr(f.component)}},onUnmount(d){l.push(d)},unmount(){i&&(At(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return r.provides[d]=u,c},runWithContext(d){const u=Fs;Fs=c;try{return d()}finally{Fs=u}}};return c}}let Fs=null;function Rn(e,t){if(tt){let s=tt.provides;const a=tt.parent&&tt.parent.provides;a===s&&(s=tt.provides=Object.create(a)),s[e]=t}}function St(e,t,s=!1){const a=ei();if(a||Fs){let n=Fs?Fs._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return s&&ye(t)?t.call(a&&a.proxy):t}}function gf(){return!!(ei()||Fs)}const Hd={},jd=()=>Object.create(Hd),Ud=e=>Object.getPrototypeOf(e)===Hd;function bf(e,t,s,a=!1){const n={},r=jd();e.propsDefaults=Object.create(null),qd(e,t,n,r);for(const o in e.propsOptions[0])o in n||(n[o]=void 0);s?e.props=a?n:vd(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function _f(e,t,s,a){const{props:n,attrs:r,vnode:{patchFlag:o}}=e,l=Se(n),[i]=e.propsOptions;let c=!1;if((a||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(_r(e.emitsOptions,p))continue;const f=t[p];if(i)if(Ae(r,p))f!==r[p]&&(r[p]=f,c=!0);else{const g=Et(p);n[g]=To(i,l,g,f,e,!1)}else f!==r[p]&&(r[p]=f,c=!0)}}}else{qd(e,t,n,r)&&(c=!0);let d;for(const u in l)(!t||!Ae(t,u)&&((d=xs(u))===u||!Ae(t,d)))&&(i?s&&(s[u]!==void 0||s[d]!==void 0)&&(n[u]=To(i,l,u,void 0,e,!0)):delete n[u]);if(r!==l)for(const u in r)(!t||!Ae(t,u))&&(delete r[u],c=!0)}c&&Qt(e.attrs,"set","")}function qd(e,t,s,a){const[n,r]=e.propsOptions;let o=!1,l;if(t)for(let i in t){if(ga(i))continue;const c=t[i];let d;n&&Ae(n,d=Et(i))?!r||!r.includes(d)?s[d]=c:(l||(l={}))[d]=c:_r(e.emitsOptions,i)||(!(i in a)||c!==a[i])&&(a[i]=c,o=!0)}if(r){const i=Se(s),c=l||Re;for(let d=0;d<r.length;d++){const u=r[d];s[u]=To(n,i,u,c[u],e,!Ae(c,u))}}return o}function To(e,t,s,a,n,r){const o=e[s];if(o!=null){const l=Ae(o,"default");if(l&&a===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&ye(i)){const{propsDefaults:c}=n;if(s in c)a=c[s];else{const d=Ia(n);a=c[s]=i.call(null,t),d()}}else a=i;n.ce&&n.ce._setProp(s,a)}o[0]&&(r&&!l?a=!1:o[1]&&(a===""||a===xs(s))&&(a=!0))}return a}const vf=new WeakMap;function Vd(e,t,s=!1){const a=s?vf:t.propsCache,n=a.get(e);if(n)return n;const r=e.props,o={},l=[];let i=!1;if(!ye(e)){const d=u=>{i=!0;const[p,f]=Vd(u,t,!0);Ke(o,p),f&&l.push(...f)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!i)return Le(e)&&a.set(e,Ys),Ys;if(be(r))for(let d=0;d<r.length;d++){const u=Et(r[d]);Ei(u)&&(o[u]=Re)}else if(r)for(const d in r){const u=Et(d);if(Ei(u)){const p=r[d],f=o[u]=be(p)||ye(p)?{type:p}:Ke({},p),g=f.type;let _=!1,y=!0;if(be(g))for(let m=0;m<g.length;++m){const h=g[m],b=ye(h)&&h.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(y=!1)}else _=ye(g)&&g.name==="Boolean";f[0]=_,f[1]=y,(_||Ae(f,"default"))&&l.push(u)}}const c=[o,l];return Le(e)&&a.set(e,c),c}function Ei(e){return e[0]!=="$"&&!ga(e)}const Xo=e=>e==="_"||e==="_ctx"||e==="$stable",Qo=e=>be(e)?e.map(Nt):[Nt(e)],yf=(e,t,s)=>{if(t._n)return t;const a=_o((...n)=>Qo(t(...n)),s);return a._c=!1,a},Gd=(e,t,s)=>{const a=e._ctx;for(const n in e){if(Xo(n))continue;const r=e[n];if(ye(r))t[n]=yf(n,r,a);else if(r!=null){const o=Qo(r);t[n]=()=>o}}},Kd=(e,t)=>{const s=Qo(t);e.slots.default=()=>s},Yd=(e,t,s)=>{for(const a in t)(s||!Xo(a))&&(e[a]=t[a])},wf=(e,t,s)=>{const a=e.slots=jd();if(e.vnode.shapeFlag&32){const n=t._;n?(Yd(a,t,s),s&&Xc(a,"_",n,!0)):Gd(t,a)}else t&&Kd(e,t)},xf=(e,t,s)=>{const{vnode:a,slots:n}=e;let r=!0,o=Re;if(a.shapeFlag&32){const l=t._;l?s&&l===1?r=!1:Yd(n,t,s):(r=!t.$stable,Gd(t,n)),o=t}else t&&(Kd(e,t),o={default:1});if(r)for(const l in n)!Xo(l)&&o[l]==null&&delete n[l]},ht=If;function Tf(e){return Sf(e)}function Sf(e,t){const s=ur();s.__VUE__=!0;const{insert:a,remove:n,patchProp:r,createElement:o,createText:l,createComment:i,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=Bt,insertStaticContent:g}=e,_=(E,M,L,H=null,W=null,B=null,F=void 0,q=null,ne=!!M.dynamicChildren)=>{if(E===M)return;E&&!Rs(E,M)&&(H=N(E),ee(E,W,B,!0),E=null),M.patchFlag===-2&&(ne=!1,M.dynamicChildren=null);const{type:re,ref:oe,shapeFlag:se}=M;switch(re){case vr:y(E,M,L,H);break;case it:m(E,M,L,H);break;case Dn:E==null&&h(M,L,H,F);break;case qe:O(E,M,L,H,W,B,F,q,ne);break;default:se&1?w(E,M,L,H,W,B,F,q,ne):se&6?D(E,M,L,H,W,B,F,q,ne):(se&64||se&128)&&re.process(E,M,L,H,W,B,F,q,ne,te)}oe!=null&&W?va(oe,E&&E.ref,B,M||E,!M):oe==null&&E&&E.ref!=null&&va(E.ref,null,B,E,!0)},y=(E,M,L,H)=>{if(E==null)a(M.el=l(M.children),L,H);else{const W=M.el=E.el;M.children!==E.children&&c(W,M.children)}},m=(E,M,L,H)=>{E==null?a(M.el=i(M.children||""),L,H):M.el=E.el},h=(E,M,L,H)=>{[E.el,E.anchor]=g(E.children,M,L,H,E.el,E.anchor)},b=({el:E,anchor:M},L,H)=>{let W;for(;E&&E!==M;)W=p(E),a(E,L,H),E=W;a(M,L,H)},v=({el:E,anchor:M})=>{let L;for(;E&&E!==M;)L=p(E),n(E),E=L;n(M)},w=(E,M,L,H,W,B,F,q,ne)=>{if(M.type==="svg"?F="svg":M.type==="math"&&(F="mathml"),E==null)x(M,L,H,W,B,F,q,ne);else{const re=E.el&&E.el._isVueCE?E.el:null;try{re&&re._beginPatch(),S(E,M,W,B,F,q,ne)}finally{re&&re._endPatch()}}},x=(E,M,L,H,W,B,F,q)=>{let ne,re;const{props:oe,shapeFlag:se,transition:le,dirs:fe}=E;if(ne=E.el=o(E.type,B,oe&&oe.is,oe),se&8?d(ne,E.children):se&16&&R(E.children,ne,null,H,W,Nr(E,B),F,q),fe&&ks(E,null,H,"created"),P(ne,E,E.scopeId,F,H),oe){for(const ve in oe)ve!=="value"&&!ga(ve)&&r(ne,ve,null,oe[ve],B,H);"value"in oe&&r(ne,"value",null,oe.value,B),(re=oe.onVnodeBeforeMount)&&Lt(re,H,E)}fe&&ks(E,null,H,"beforeMount");const me=Ef(W,le);me&&le.beforeEnter(ne),a(ne,M,L),((re=oe&&oe.onVnodeMounted)||me||fe)&&ht(()=>{re&&Lt(re,H,E),me&&le.enter(ne),fe&&ks(E,null,H,"mounted")},W)},P=(E,M,L,H,W)=>{if(L&&f(E,L),H)for(let B=0;B<H.length;B++)f(E,H[B]);if(W){let B=W.subTree;if(M===B||eu(B.type)&&(B.ssContent===M||B.ssFallback===M)){const F=W.vnode;P(E,F,F.scopeId,F.slotScopeIds,W.parent)}}},R=(E,M,L,H,W,B,F,q,ne=0)=>{for(let re=ne;re<E.length;re++){const oe=E[re]=q?fs(E[re]):Nt(E[re]);_(null,oe,M,L,H,W,B,F,q)}},S=(E,M,L,H,W,B,F)=>{const q=M.el=E.el;let{patchFlag:ne,dynamicChildren:re,dirs:oe}=M;ne|=E.patchFlag&16;const se=E.props||Re,le=M.props||Re;let fe;if(L&&Ps(L,!1),(fe=le.onVnodeBeforeUpdate)&&Lt(fe,L,M,E),oe&&ks(M,E,L,"beforeUpdate"),L&&Ps(L,!0),(se.innerHTML&&le.innerHTML==null||se.textContent&&le.textContent==null)&&d(q,""),re?k(E.dynamicChildren,re,q,L,H,Nr(M,W),B):F||K(E,M,q,null,L,H,Nr(M,W),B,!1),ne>0){if(ne&16)T(q,se,le,L,W);else if(ne&2&&se.class!==le.class&&r(q,"class",null,le.class,W),ne&4&&r(q,"style",se.style,le.style,W),ne&8){const me=M.dynamicProps;for(let ve=0;ve<me.length;ve++){const _e=me[ve],Ie=se[_e],Ve=le[_e];(Ve!==Ie||_e==="value")&&r(q,_e,Ie,Ve,W,L)}}ne&1&&E.children!==M.children&&d(q,M.children)}else!F&&re==null&&T(q,se,le,L,W);((fe=le.onVnodeUpdated)||oe)&&ht(()=>{fe&&Lt(fe,L,M,E),oe&&ks(M,E,L,"updated")},H)},k=(E,M,L,H,W,B,F)=>{for(let q=0;q<M.length;q++){const ne=E[q],re=M[q],oe=ne.el&&(ne.type===qe||!Rs(ne,re)||ne.shapeFlag&198)?u(ne.el):L;_(ne,re,oe,null,H,W,B,F,!0)}},T=(E,M,L,H,W)=>{if(M!==L){if(M!==Re)for(const B in M)!ga(B)&&!(B in L)&&r(E,B,M[B],null,W,H);for(const B in L){if(ga(B))continue;const F=L[B],q=M[B];F!==q&&B!=="value"&&r(E,B,q,F,W,H)}"value"in L&&r(E,"value",M.value,L.value,W)}},O=(E,M,L,H,W,B,F,q,ne)=>{const re=M.el=E?E.el:l(""),oe=M.anchor=E?E.anchor:l("");let{patchFlag:se,dynamicChildren:le,slotScopeIds:fe}=M;fe&&(q=q?q.concat(fe):fe),E==null?(a(re,L,H),a(oe,L,H),R(M.children||[],L,oe,W,B,F,q,ne)):se>0&&se&64&&le&&E.dynamicChildren?(k(E.dynamicChildren,le,L,W,B,F,q),(M.key!=null||W&&M===W.subTree)&&Wd(E,M,!0)):K(E,M,L,oe,W,B,F,q,ne)},D=(E,M,L,H,W,B,F,q,ne)=>{M.slotScopeIds=q,E==null?M.shapeFlag&512?W.ctx.activate(M,L,H,F,ne):V(M,L,H,W,B,F,ne):Q(E,M,ne)},V=(E,M,L,H,W,B,F)=>{const q=E.component=qf(E,H,W);if(gr(E)&&(q.ctx.renderer=te),Vf(q,!1,F),q.asyncDep){if(W&&W.registerDep(q,X,F),!E.el){const ne=q.subTree=st(it);m(null,ne,M,L),E.placeholder=ne.el}}else X(q,E,M,L,W,B,F)},Q=(E,M,L)=>{const H=M.component=E.component;if(Df(E,M,L))if(H.asyncDep&&!H.asyncResolved){Z(H,M,L);return}else H.next=M,H.update();else M.el=E.el,H.vnode=M},X=(E,M,L,H,W,B,F)=>{const q=()=>{if(E.isMounted){let{next:se,bu:le,u:fe,parent:me,vnode:ve}=E;{const $t=Jd(E);if($t){se&&(se.el=ve.el,Z(E,se,F)),$t.asyncDep.then(()=>{E.isUnmounted||q()});return}}let _e=se,Ie;Ps(E,!1),se?(se.el=ve.el,Z(E,se,F)):se=ve,le&&Ln(le),(Ie=se.props&&se.props.onVnodeBeforeUpdate)&&Lt(Ie,me,se,ve),Ps(E,!0);const Ve=Pi(E),vt=E.subTree;E.subTree=Ve,_(vt,Ve,u(vt.el),N(vt),E,W,B),se.el=Ve.el,_e===null&&Nf(E,Ve.el),fe&&ht(fe,W),(Ie=se.props&&se.props.onVnodeUpdated)&&ht(()=>Lt(Ie,me,se,ve),W)}else{let se;const{el:le,props:fe}=M,{bm:me,m:ve,parent:_e,root:Ie,type:Ve}=E,vt=ya(M);Ps(E,!1),me&&Ln(me),!vt&&(se=fe&&fe.onVnodeBeforeMount)&&Lt(se,_e,M),Ps(E,!0);{Ie.ce&&Ie.ce._def.shadowRoot!==!1&&Ie.ce._injectChildStyle(Ve);const $t=E.subTree=Pi(E);_(null,$t,L,H,E,W,B),M.el=$t.el}if(ve&&ht(ve,W),!vt&&(se=fe&&fe.onVnodeMounted)){const $t=M;ht(()=>Lt(se,_e,$t),W)}(M.shapeFlag&256||_e&&ya(_e.vnode)&&_e.vnode.shapeFlag&256)&&E.a&&ht(E.a,W),E.isMounted=!0,M=L=H=null}};E.scope.on();const ne=E.effect=new rd(q);E.scope.off();const re=E.update=ne.run.bind(ne),oe=E.job=ne.runIfDirty.bind(ne);oe.i=E,oe.id=E.uid,ne.scheduler=()=>Jo(oe),Ps(E,!0),re()},Z=(E,M,L)=>{M.component=E;const H=E.vnode.props;E.vnode=M,E.next=null,_f(E,M.props,H,L),xf(E,M.children,L),ss(),bi(E),as()},K=(E,M,L,H,W,B,F,q,ne=!1)=>{const re=E&&E.children,oe=E?E.shapeFlag:0,se=M.children,{patchFlag:le,shapeFlag:fe}=M;if(le>0){if(le&128){J(re,se,L,H,W,B,F,q,ne);return}else if(le&256){ie(re,se,L,H,W,B,F,q,ne);return}}fe&8?(oe&16&&U(re,W,B),se!==re&&d(L,se)):oe&16?fe&16?J(re,se,L,H,W,B,F,q,ne):U(re,W,B,!0):(oe&8&&d(L,""),fe&16&&R(se,L,H,W,B,F,q,ne))},ie=(E,M,L,H,W,B,F,q,ne)=>{E=E||Ys,M=M||Ys;const re=E.length,oe=M.length,se=Math.min(re,oe);let le;for(le=0;le<se;le++){const fe=M[le]=ne?fs(M[le]):Nt(M[le]);_(E[le],fe,L,null,W,B,F,q,ne)}re>oe?U(E,W,B,!0,!1,se):R(M,L,H,W,B,F,q,ne,se)},J=(E,M,L,H,W,B,F,q,ne)=>{let re=0;const oe=M.length;let se=E.length-1,le=oe-1;for(;re<=se&&re<=le;){const fe=E[re],me=M[re]=ne?fs(M[re]):Nt(M[re]);if(Rs(fe,me))_(fe,me,L,null,W,B,F,q,ne);else break;re++}for(;re<=se&&re<=le;){const fe=E[se],me=M[le]=ne?fs(M[le]):Nt(M[le]);if(Rs(fe,me))_(fe,me,L,null,W,B,F,q,ne);else break;se--,le--}if(re>se){if(re<=le){const fe=le+1,me=fe<oe?M[fe].el:H;for(;re<=le;)_(null,M[re]=ne?fs(M[re]):Nt(M[re]),L,me,W,B,F,q,ne),re++}}else if(re>le)for(;re<=se;)ee(E[re],W,B,!0),re++;else{const fe=re,me=re,ve=new Map;for(re=me;re<=le;re++){const pt=M[re]=ne?fs(M[re]):Nt(M[re]);pt.key!=null&&ve.set(pt.key,re)}let _e,Ie=0;const Ve=le-me+1;let vt=!1,$t=0;const ra=new Array(Ve);for(re=0;re<Ve;re++)ra[re]=0;for(re=fe;re<=se;re++){const pt=E[re];if(Ie>=Ve){ee(pt,W,B,!0);continue}let Mt;if(pt.key!=null)Mt=ve.get(pt.key);else for(_e=me;_e<=le;_e++)if(ra[_e-me]===0&&Rs(pt,M[_e])){Mt=_e;break}Mt===void 0?ee(pt,W,B,!0):(ra[Mt-me]=re+1,Mt>=$t?$t=Mt:vt=!0,_(pt,M[Mt],L,null,W,B,F,q,ne),Ie++)}const di=vt?kf(ra):Ys;for(_e=di.length-1,re=Ve-1;re>=0;re--){const pt=me+re,Mt=M[pt],ui=M[pt+1],pi=pt+1<oe?ui.el||ui.placeholder:H;ra[re]===0?_(null,Mt,L,pi,W,B,F,q,ne):vt&&(_e<0||re!==di[_e]?z(Mt,L,pi,2):_e--)}}},z=(E,M,L,H,W=null)=>{const{el:B,type:F,transition:q,children:ne,shapeFlag:re}=E;if(re&6){z(E.component.subTree,M,L,H);return}if(re&128){E.suspense.move(M,L,H);return}if(re&64){F.move(E,M,L,te);return}if(F===qe){a(B,M,L);for(let se=0;se<ne.length;se++)z(ne[se],M,L,H);a(E.anchor,M,L);return}if(F===Dn){b(E,M,L);return}if(H!==2&&re&1&&q)if(H===0)q.beforeEnter(B),a(B,M,L),ht(()=>q.enter(B),W);else{const{leave:se,delayLeave:le,afterLeave:fe}=q,me=()=>{E.ctx.isUnmounted?n(B):a(B,M,L)},ve=()=>{B._isLeaving&&B[Jt](!0),se(B,()=>{me(),fe&&fe()})};le?le(B,me,ve):ve()}else a(B,M,L)},ee=(E,M,L,H=!1,W=!1)=>{const{type:B,props:F,ref:q,children:ne,dynamicChildren:re,shapeFlag:oe,patchFlag:se,dirs:le,cacheIndex:fe}=E;if(se===-2&&(W=!1),q!=null&&(ss(),va(q,null,L,E,!0),as()),fe!=null&&(M.renderCache[fe]=void 0),oe&256){M.ctx.deactivate(E);return}const me=oe&1&&le,ve=!ya(E);let _e;if(ve&&(_e=F&&F.onVnodeBeforeUnmount)&&Lt(_e,M,E),oe&6)$(E.component,L,H);else{if(oe&128){E.suspense.unmount(L,H);return}me&&ks(E,null,M,"beforeUnmount"),oe&64?E.type.remove(E,M,L,te,H):re&&!re.hasOnce&&(B!==qe||se>0&&se&64)?U(re,M,L,!1,!0):(B===qe&&se&384||!W&&oe&16)&&U(ne,M,L),H&&Y(E)}(ve&&(_e=F&&F.onVnodeUnmounted)||me)&&ht(()=>{_e&&Lt(_e,M,E),me&&ks(E,null,M,"unmounted")},L)},Y=E=>{const{type:M,el:L,anchor:H,transition:W}=E;if(M===qe){A(L,H);return}if(M===Dn){v(E);return}const B=()=>{n(L),W&&!W.persisted&&W.afterLeave&&W.afterLeave()};if(E.shapeFlag&1&&W&&!W.persisted){const{leave:F,delayLeave:q}=W,ne=()=>F(L,B);q?q(E.el,B,ne):ne()}else B()},A=(E,M)=>{let L;for(;E!==M;)L=p(E),n(E),E=L;n(M)},$=(E,M,L)=>{const{bum:H,scope:W,job:B,subTree:F,um:q,m:ne,a:re}=E;ki(ne),ki(re),H&&Ln(H),W.stop(),B&&(B.flags|=8,ee(F,E,M,L)),q&&ht(q,M),ht(()=>{E.isUnmounted=!0},M)},U=(E,M,L,H=!1,W=!1,B=0)=>{for(let F=B;F<E.length;F++)ee(E[F],M,L,H,W)},N=E=>{if(E.shapeFlag&6)return N(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const M=p(E.anchor||E.el),L=M&&M[qp];return L?p(L):M};let G=!1;const j=(E,M,L)=>{E==null?M._vnode&&ee(M._vnode,null,null,!0):_(M._vnode||null,E,M,null,null,null,L),M._vnode=E,G||(G=!0,bi(),Sd(),G=!1)},te={p:_,um:ee,m:z,r:Y,mt:V,mc:R,pc:K,pbc:k,n:N,o:e};return{render:j,hydrate:void 0,createApp:mf(j)}}function Nr({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function Ps({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Ef(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Wd(e,t,s=!1){const a=e.children,n=t.children;if(be(a)&&be(n))for(let r=0;r<a.length;r++){const o=a[r];let l=n[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[r]=fs(n[r]),l.el=o.el),!s&&l.patchFlag!==-2&&Wd(o,l)),l.type===vr&&l.patchFlag!==-1&&(l.el=o.el),l.type===it&&!l.el&&(l.el=o.el)}}function kf(e){const t=e.slice(),s=[0];let a,n,r,o,l;const i=e.length;for(a=0;a<i;a++){const c=e[a];if(c!==0){if(n=s[s.length-1],e[n]<c){t[a]=n,s.push(a);continue}for(r=0,o=s.length-1;r<o;)l=r+o>>1,e[s[l]]<c?r=l+1:o=l;c<e[s[r]]&&(r>0&&(t[a]=s[r-1]),s[r]=a)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}function Jd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Jd(t)}function ki(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Pf=Symbol.for("v-scx"),Af=()=>St(Pf);function Xs(e,t,s){return Xd(e,t,s)}function Xd(e,t,s=Re){const{immediate:a,deep:n,flush:r,once:o}=s,l=Ke({},s),i=t&&a||!t&&r!=="post";let c;if(Ma){if(r==="sync"){const f=Af();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!i){const f=()=>{};return f.stop=Bt,f.resume=Bt,f.pause=Bt,f}}const d=tt;l.call=(f,g,_)=>At(f,d,g,_);let u=!1;r==="post"?l.scheduler=f=>{ht(f,d&&d.suspense)}:r!=="sync"&&(u=!0,l.scheduler=(f,g)=>{g?f():Jo(f)}),l.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=zp(e,t,l);return Ma&&(c?c.push(p):i&&p()),p}function Cf(e,t,s){const a=this.proxy,n=Fe(e)?e.includes(".")?Qd(a,e):()=>a[e]:e.bind(a,a);let r;ye(t)?r=t:(r=t.handler,s=t);const o=Ia(this),l=Xd(n,r.bind(a),s);return o(),l}function Qd(e,t){const s=t.split(".");return()=>{let a=e;for(let n=0;n<s.length&&a;n++)a=a[s[n]];return a}}const Of=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${Et(t)}Modifiers`]||e[`${xs(t)}Modifiers`];function $f(e,t,...s){if(e.isUnmounted)return;const a=e.vnode.props||Re;let n=s;const r=t.startsWith("update:"),o=r&&Of(a,t.slice(7));o&&(o.trim&&(n=s.map(d=>Fe(d)?d.trim():d)),o.number&&(n=s.map(zo)));let l,i=a[l=Cr(t)]||a[l=Cr(Et(t))];!i&&r&&(i=a[l=Cr(xs(t))]),i&&At(i,e,6,n);const c=a[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,At(c,e,6,n)}}const Mf=new WeakMap;function Zd(e,t,s=!1){const a=s?Mf:t.emitsCache,n=a.get(e);if(n!==void 0)return n;const r=e.emits;let o={},l=!1;if(!ye(e)){const i=c=>{const d=Zd(c,t,!0);d&&(l=!0,Ke(o,d))};!s&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!l?(Le(e)&&a.set(e,null),null):(be(r)?r.forEach(i=>o[i]=null):Ke(o,r),Le(e)&&a.set(e,o),o)}function _r(e,t){return!e||!ir(t)?!1:(t=t.slice(2).replace(/Once$/,""),Ae(e,t[0].toLowerCase()+t.slice(1))||Ae(e,xs(t))||Ae(e,t))}function Pi(e){const{type:t,vnode:s,proxy:a,withProxy:n,propsOptions:[r],slots:o,attrs:l,emit:i,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:g,inheritAttrs:_}=e,y=qn(e);let m,h;try{if(s.shapeFlag&4){const v=n||a,w=v;m=Nt(c.call(w,v,d,u,f,p,g)),h=l}else{const v=t;m=Nt(v.length>1?v(u,{attrs:l,slots:o,emit:i}):v(u,null)),h=t.props?l:Lf(l)}}catch(v){xa.length=0,mr(v,e,1),m=st(it)}let b=m;if(h&&_!==!1){const v=Object.keys(h),{shapeFlag:w}=b;v.length&&w&7&&(r&&v.some(Io)&&(h=Rf(h,r)),b=ys(b,h,!1,!0))}return s.dirs&&(b=ys(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(s.dirs):s.dirs),s.transition&&Oa(b,s.transition),m=b,qn(y),m}const Lf=e=>{let t;for(const s in e)(s==="class"||s==="style"||ir(s))&&((t||(t={}))[s]=e[s]);return t},Rf=(e,t)=>{const s={};for(const a in e)(!Io(a)||!(a.slice(9)in t))&&(s[a]=e[a]);return s};function Df(e,t,s){const{props:a,children:n,component:r}=e,{props:o,children:l,patchFlag:i}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&i>=0){if(i&1024)return!0;if(i&16)return a?Ai(a,o,c):!!o;if(i&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==a[p]&&!_r(c,p))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:a===o?!1:a?o?Ai(a,o,c):!0:!!o;return!1}function Ai(e,t,s){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let n=0;n<a.length;n++){const r=a[n];if(t[r]!==e[r]&&!_r(s,r))return!0}return!1}function Nf({vnode:e,parent:t},s){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=s,t=t.parent;else break}}const eu=e=>e.__isSuspense;function If(e,t){t&&t.pendingBranch?be(e)?t.effects.push(...e):t.effects.push(e):Up(e)}const qe=Symbol.for("v-fgt"),vr=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Dn=Symbol.for("v-stc"),xa=[];let bt=null;function ue(e=!1){xa.push(bt=e?null:[])}function Bf(){xa.pop(),bt=xa[xa.length-1]||null}let $a=1;function Kn(e,t=!1){$a+=e,e<0&&bt&&t&&(bt.hasOnce=!0)}function tu(e){return e.dynamicChildren=$a>0?bt||Ys:null,Bf(),$a>0&&bt&&bt.push(e),e}function pe(e,t,s,a,n,r){return tu(C(e,t,s,a,n,r,!0))}function su(e,t,s,a,n){return tu(st(e,t,s,a,n,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function Rs(e,t){return e.type===t.type&&e.key===t.key}const au=({key:e})=>e??null,Nn=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Fe(e)||ze(e)||ye(e)?{i:gt,r:e,k:t,f:!!s}:e:null);function C(e,t=null,s=null,a=0,n=null,r=e===qe?0:1,o=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&au(t),ref:t&&Nn(t),scopeId:kd,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:gt};return l?(Zo(i,s),r&128&&e.normalize(i)):s&&(i.shapeFlag|=Fe(s)?8:16),$a>0&&!o&&bt&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&bt.push(i),i}const st=Ff;function Ff(e,t=null,s=null,a=0,n=null,r=!1){if((!e||e===Id)&&(e=it),Yn(e)){const l=ys(e,t,!0);return s&&Zo(l,s),$a>0&&!r&&bt&&(l.shapeFlag&6?bt[bt.indexOf(e)]=l:bt.push(l)),l.patchFlag=-2,l}if(Jf(e)&&(e=e.__vccOpts),t){t=zf(t);let{class:l,style:i}=t;l&&!Fe(l)&&(t.class=Ue(l)),Le(i)&&(Ko(i)&&!be(i)&&(i=Ke({},i)),t.style=pr(i))}const o=Fe(e)?1:eu(e)?128:Pd(e)?64:Le(e)?4:ye(e)?2:0;return C(e,t,s,a,n,o,r,!0)}function zf(e){return e?Ko(e)||Ud(e)?Ke({},e):e:null}function ys(e,t,s=!1,a=!1){const{props:n,ref:r,patchFlag:o,children:l,transition:i}=e,c=t?Hf(n||{},t):n,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&au(c),ref:t&&t.ref?s&&r?be(r)?r.concat(Nn(t)):[r,Nn(t)]:Nn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==qe?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ys(e.ssContent),ssFallback:e.ssFallback&&ys(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&a&&Oa(d,i.clone(d)),d}function et(e=" ",t=0){return st(vr,null,e,t)}function _t(e,t){const s=st(Dn,null,e);return s.staticCount=t,s}function Oe(e="",t=!1){return t?(ue(),su(it,null,e)):st(it,null,e)}function Nt(e){return e==null||typeof e=="boolean"?st(it):be(e)?st(qe,null,e.slice()):Yn(e)?fs(e):st(vr,null,String(e))}function fs(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ys(e)}function Zo(e,t){let s=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(be(t))s=16;else if(typeof t=="object")if(a&65){const n=t.default;n&&(n._c&&(n._d=!1),Zo(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!Ud(t)?t._ctx=gt:n===3&&gt&&(gt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else ye(t)?(t={default:t,_ctx:gt},s=32):(t=String(t),a&64?(s=16,t=[et(t)]):s=8);e.children=t,e.shapeFlag|=s}function Hf(...e){const t={};for(let s=0;s<e.length;s++){const a=e[s];for(const n in a)if(n==="class")t.class!==a.class&&(t.class=Ue([t.class,a.class]));else if(n==="style")t.style=pr([t.style,a.style]);else if(ir(n)){const r=t[n],o=a[n];o&&r!==o&&!(be(r)&&r.includes(o))&&(t[n]=r?[].concat(r,o):o)}else n!==""&&(t[n]=a[n])}return t}function Lt(e,t,s,a=null){At(e,t,7,[s,a])}const jf=zd();let Uf=0;function qf(e,t,s){const a=e.type,n=(t?t.appContext:e.appContext)||jf,r={uid:Uf++,vnode:e,type:a,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new sd(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Vd(a,n),emitsOptions:Zd(a,n),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:a.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=$f.bind(null,r),e.ce&&e.ce(r),r}let tt=null;const ei=()=>tt||gt;let Wn,So;{const e=ur(),t=(s,a)=>{let n;return(n=e[s])||(n=e[s]=[]),n.push(a),r=>{n.length>1?n.forEach(o=>o(r)):n[0](r)}};Wn=t("__VUE_INSTANCE_SETTERS__",s=>tt=s),So=t("__VUE_SSR_SETTERS__",s=>Ma=s)}const Ia=e=>{const t=tt;return Wn(e),e.scope.on(),()=>{e.scope.off(),Wn(t)}},Ci=()=>{tt&&tt.scope.off(),Wn(null)};function nu(e){return e.vnode.shapeFlag&4}let Ma=!1;function Vf(e,t=!1,s=!1){t&&So(t);const{props:a,children:n}=e.vnode,r=nu(e);bf(e,a,r,t),wf(e,n,s||t);const o=r?Gf(e,t):void 0;return t&&So(!1),o}function Gf(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,lf);const{setup:a}=s;if(a){ss();const n=e.setupContext=a.length>1?Yf(e):null,r=Ia(e),o=Na(a,e,0,[e.props,n]),l=Yc(o);if(as(),r(),(l||e.sp)&&!ya(e)&&Rd(e),l){if(o.then(Ci,Ci),t)return o.then(i=>{Oi(e,i)}).catch(i=>{mr(i,e,0)});e.asyncDep=o}else Oi(e,o)}else ru(e)}function Oi(e,t,s){ye(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Le(t)&&(e.setupState=wd(t)),ru(e)}function ru(e,t,s){const a=e.type;e.render||(e.render=a.render||Bt);{const n=Ia(e);ss();try{cf(e)}finally{as(),n()}}}const Kf={get(e,t){return Ze(e,"get",""),e[t]}};function Yf(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Kf),slots:e.slots,emit:e.emit,expose:t}}function yr(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(wd(Yo(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in wa)return wa[s](e)},has(t,s){return s in t||s in wa}})):e.proxy}function Wf(e,t=!0){return ye(e)?e.displayName||e.name:e.name||t&&e.__name}function Jf(e){return ye(e)&&"__vccOpts"in e}const ge=(e,t)=>Bp(e,t,Ma);function ti(e,t,s){try{Kn(-1);const a=arguments.length;return a===2?Le(t)&&!be(t)?Yn(t)?st(e,null,[t]):st(e,t):st(e,null,t):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Yn(s)&&(s=[s]),st(e,t,s))}finally{Kn(1)}}const Xf="3.5.24";let Eo;const $i=typeof window<"u"&&window.trustedTypes;if($i)try{Eo=$i.createPolicy("vue",{createHTML:e=>e})}catch{}const ou=Eo?e=>Eo.createHTML(e):e=>e,Qf="http://www.w3.org/2000/svg",Zf="http://www.w3.org/1998/Math/MathML",Yt=typeof document<"u"?document:null,Mi=Yt&&Yt.createElement("template"),eh={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,a)=>{const n=t==="svg"?Yt.createElementNS(Qf,e):t==="mathml"?Yt.createElementNS(Zf,e):s?Yt.createElement(e,{is:s}):Yt.createElement(e);return e==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:e=>Yt.createTextNode(e),createComment:e=>Yt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Yt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,a,n,r){const o=s?s.previousSibling:t.lastChild;if(n&&(n===r||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===r||!(n=n.nextSibling)););else{Mi.innerHTML=ou(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Mi.content;if(a==="svg"||a==="mathml"){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}t.insertBefore(l,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},is="transition",ia="animation",La=Symbol("_vtc"),iu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},th=Ke({},Ad,iu),sh=e=>(e.displayName="Transition",e.props=th,e),ah=sh((e,{slots:t})=>ti(Kp,nh(e),t)),As=(e,t=[])=>{be(e)?e.forEach(s=>s(...t)):e&&e(...t)},Li=e=>e?be(e)?e.some(t=>t.length>1):e.length>1:!1;function nh(e){const t={};for(const O in e)O in iu||(t[O]=e[O]);if(e.css===!1)return t;const{name:s="v",type:a,duration:n,enterFromClass:r=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:l=`${s}-enter-to`,appearFromClass:i=r,appearActiveClass:c=o,appearToClass:d=l,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=e,g=rh(n),_=g&&g[0],y=g&&g[1],{onBeforeEnter:m,onEnter:h,onEnterCancelled:b,onLeave:v,onLeaveCancelled:w,onBeforeAppear:x=m,onAppear:P=h,onAppearCancelled:R=b}=t,S=(O,D,V,Q)=>{O._enterCancelled=Q,Cs(O,D?d:l),Cs(O,D?c:o),V&&V()},k=(O,D)=>{O._isLeaving=!1,Cs(O,u),Cs(O,f),Cs(O,p),D&&D()},T=O=>(D,V)=>{const Q=O?P:h,X=()=>S(D,O,V);As(Q,[D,X]),Ri(()=>{Cs(D,O?i:r),jt(D,O?d:l),Li(Q)||Di(D,a,_,X)})};return Ke(t,{onBeforeEnter(O){As(m,[O]),jt(O,r),jt(O,o)},onBeforeAppear(O){As(x,[O]),jt(O,i),jt(O,c)},onEnter:T(!1),onAppear:T(!0),onLeave(O,D){O._isLeaving=!0;const V=()=>k(O,D);jt(O,u),O._enterCancelled?(jt(O,p),Bi(O)):(Bi(O),jt(O,p)),Ri(()=>{O._isLeaving&&(Cs(O,u),jt(O,f),Li(v)||Di(O,a,y,V))}),As(v,[O,V])},onEnterCancelled(O){S(O,!1,void 0,!0),As(b,[O])},onAppearCancelled(O){S(O,!0,void 0,!0),As(R,[O])},onLeaveCancelled(O){k(O),As(w,[O])}})}function rh(e){if(e==null)return null;if(Le(e))return[Ir(e.enter),Ir(e.leave)];{const t=Ir(e);return[t,t]}}function Ir(e){return ap(e)}function jt(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[La]||(e[La]=new Set)).add(t)}function Cs(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const s=e[La];s&&(s.delete(t),s.size||(e[La]=void 0))}function Ri(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let oh=0;function Di(e,t,s,a){const n=e._endId=++oh,r=()=>{n===e._endId&&a()};if(s!=null)return setTimeout(r,s);const{type:o,timeout:l,propCount:i}=ih(e,t);if(!o)return a();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),r()},p=f=>{f.target===e&&++d>=i&&u()};setTimeout(()=>{d<i&&u()},l+1),e.addEventListener(c,p)}function ih(e,t){const s=window.getComputedStyle(e),a=g=>(s[g]||"").split(", "),n=a(`${is}Delay`),r=a(`${is}Duration`),o=Ni(n,r),l=a(`${ia}Delay`),i=a(`${ia}Duration`),c=Ni(l,i);let d=null,u=0,p=0;t===is?o>0&&(d=is,u=o,p=r.length):t===ia?c>0&&(d=ia,u=c,p=i.length):(u=Math.max(o,c),d=u>0?o>c?is:ia:null,p=d?d===is?r.length:i.length:0);const f=d===is&&/\b(?:transform|all)(?:,|$)/.test(a(`${is}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function Ni(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,a)=>Ii(s)+Ii(e[a])))}function Ii(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Bi(e){return(e?e.ownerDocument:document).body.offsetHeight}function lh(e,t,s){const a=e[La];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Jn=Symbol("_vod"),lu=Symbol("_vsh"),qa={name:"show",beforeMount(e,{value:t},{transition:s}){e[Jn]=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):la(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:a}){!t!=!s&&(a?t?(a.beforeEnter(e),la(e,!0),a.enter(e)):a.leave(e,()=>{la(e,!1)}):la(e,t))},beforeUnmount(e,{value:t}){la(e,t)}};function la(e,t){e.style.display=t?e[Jn]:"none",e[lu]=!t}const ch=Symbol(""),dh=/(?:^|;)\s*display\s*:/;function uh(e,t,s){const a=e.style,n=Fe(s);let r=!1;if(s&&!n){if(t)if(Fe(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();s[l]==null&&In(a,l,"")}else for(const o in t)s[o]==null&&In(a,o,"");for(const o in s)o==="display"&&(r=!0),In(a,o,s[o])}else if(n){if(t!==s){const o=a[ch];o&&(s+=";"+o),a.cssText=s,r=dh.test(s)}}else t&&e.removeAttribute("style");Jn in e&&(e[Jn]=r?a.display:"",e[lu]&&(a.display="none"))}const Fi=/\s*!important$/;function In(e,t,s){if(be(s))s.forEach(a=>In(e,t,a));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const a=ph(e,t);Fi.test(s)?e.setProperty(xs(a),s.replace(Fi,""),"important"):e[a]=s}}const zi=["Webkit","Moz","ms"],Br={};function ph(e,t){const s=Br[t];if(s)return s;let a=Et(t);if(a!=="filter"&&a in e)return Br[t]=a;a=dr(a);for(let n=0;n<zi.length;n++){const r=zi[n]+a;if(r in e)return Br[t]=r}return t}const Hi="http://www.w3.org/1999/xlink";function ji(e,t,s,a,n,r=cp(t)){a&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Hi,t.slice(6,t.length)):e.setAttributeNS(Hi,t,s):s==null||r&&!Qc(s)?e.removeAttribute(t):e.setAttribute(t,r?"":zt(s)?String(s):s)}function Ui(e,t,s,a,n){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?ou(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,i=s==null?e.type==="checkbox"?"on":"":String(s);(l!==i||!("_value"in e))&&(e.value=i),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=Qc(s):s==null&&l==="string"?(s="",o=!0):l==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(n||t)}function Ds(e,t,s,a){e.addEventListener(t,s,a)}function fh(e,t,s,a){e.removeEventListener(t,s,a)}const qi=Symbol("_vei");function hh(e,t,s,a,n=null){const r=e[qi]||(e[qi]={}),o=r[t];if(a&&o)o.value=a;else{const[l,i]=mh(t);if(a){const c=r[t]=_h(a,n);Ds(e,l,c,i)}else o&&(fh(e,l,o,i),r[t]=void 0)}}const Vi=/(?:Once|Passive|Capture)$/;function mh(e){let t;if(Vi.test(e)){t={};let a;for(;a=e.match(Vi);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):xs(e.slice(2)),t]}let Fr=0;const gh=Promise.resolve(),bh=()=>Fr||(gh.then(()=>Fr=0),Fr=Date.now());function _h(e,t){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;At(vh(a,s.value),t,5,[a])};return s.value=e,s.attached=bh(),s}function vh(e,t){if(be(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(a=>n=>!n._stopped&&a&&a(n))}else return t}const Gi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,yh=(e,t,s,a,n,r)=>{const o=n==="svg";t==="class"?lh(e,a,o):t==="style"?uh(e,s,a):ir(t)?Io(t)||hh(e,t,s,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):wh(e,t,a,o))?(Ui(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ji(e,t,a,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Fe(a))?Ui(e,Et(t),a,r,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),ji(e,t,a,o))};function wh(e,t,s,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Gi(t)&&ye(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Gi(t)&&Fe(s)?!1:t in e}const Xn=e=>{const t=e.props["onUpdate:modelValue"]||!1;return be(t)?s=>Ln(t,s):t};function xh(e){e.target.composing=!0}function Ki(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Qs=Symbol("_assign");function Yi(e,t,s){return t&&(e=e.trim()),s&&(e=zo(e)),e}const zr={created(e,{modifiers:{lazy:t,trim:s,number:a}},n){e[Qs]=Xn(n);const r=a||n.props&&n.props.type==="number";Ds(e,t?"change":"input",o=>{o.target.composing||e[Qs](Yi(e.value,s,r))}),(s||r)&&Ds(e,"change",()=>{e.value=Yi(e.value,s,r)}),t||(Ds(e,"compositionstart",xh),Ds(e,"compositionend",Ki),Ds(e,"change",Ki))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:s,modifiers:{lazy:a,trim:n,number:r}},o){if(e[Qs]=Xn(o),e.composing)return;const l=(r||e.type==="number")&&!/^0\d/.test(e.value)?zo(e.value):e.value,i=t??"";l!==i&&(document.activeElement===e&&e.type!=="range"&&(a&&t===s||n&&e.value.trim()===i)||(e.value=i))}},cu={deep:!0,created(e,t,s){e[Qs]=Xn(s),Ds(e,"change",()=>{const a=e._modelValue,n=Th(e),r=e.checked,o=e[Qs];if(be(a)){const l=Zc(a,n),i=l!==-1;if(r&&!i)o(a.concat(n));else if(!r&&i){const c=[...a];c.splice(l,1),o(c)}}else if(lr(a)){const l=new Set(a);r?l.add(n):l.delete(n),o(l)}else o(du(e,r))})},mounted:Wi,beforeUpdate(e,t,s){e[Qs]=Xn(s),Wi(e,t,s)}};function Wi(e,{value:t,oldValue:s},a){e._modelValue=t;let n;if(be(t))n=Zc(t,a.props.value)>-1;else if(lr(t))n=t.has(a.props.value);else{if(t===s)return;n=fr(t,du(e,!0))}e.checked!==n&&(e.checked=n)}function Th(e){return"_value"in e?e._value:e.value}function du(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Sh=["ctrl","shift","alt","meta"],Eh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Sh.some(s=>e[`${s}Key`]&&!t.includes(s))},na=(e,t)=>{const s=e._withMods||(e._withMods={}),a=t.join(".");return s[a]||(s[a]=((n,...r)=>{for(let o=0;o<t.length;o++){const l=Eh[t[o]];if(l&&l(n,t))return}return e(n,...r)}))},kh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Xt=(e,t)=>{const s=e._withKeys||(e._withKeys={}),a=t.join(".");return s[a]||(s[a]=(n=>{if(!("key"in n))return;const r=xs(n.key);if(t.some(o=>o===r||kh[o]===r))return e(n)}))},Ph=Ke({patchProp:yh},eh);let Ji;function Ah(){return Ji||(Ji=Tf(Ph))}const Ch=((...e)=>{const t=Ah().createApp(...e),{mount:s}=t;return t.mount=a=>{const n=$h(a);if(!n)return;const r=t._component;!ye(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const o=s(n,!1,Oh(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),o},t});function Oh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function $h(e){return Fe(e)?document.querySelector(e):e}let uu;const wr=e=>uu=e,pu=Symbol();function ko(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Ta;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Ta||(Ta={}));function Mh(){const e=ad(!0),t=e.run(()=>Ne({}));let s=[],a=[];const n=Yo({install(r){wr(n),n._a=r,r.provide(pu,n),r.config.globalProperties.$pinia=n,a.forEach(o=>s.push(o)),a=[]},use(r){return this._a?s.push(r):a.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return n}const fu=()=>{};function Xi(e,t,s,a=fu){e.add(t);const n=()=>{e.delete(t)&&a()};return!s&&nd()&&up(n),n}function Hs(e,...t){e.forEach(s=>{s(...t)})}const Lh=e=>e(),Qi=Symbol(),Hr=Symbol();function Po(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,a)=>e.set(a,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const a=t[s],n=e[s];ko(n)&&ko(a)&&e.hasOwnProperty(s)&&!ze(a)&&!_s(a)?e[s]=Po(n,a):e[s]=a}return e}const Rh=Symbol();function Dh(e){return!ko(e)||!Object.prototype.hasOwnProperty.call(e,Rh)}const{assign:us}=Object;function Nh(e){return!!(ze(e)&&e.effect)}function Ih(e,t,s,a){const{state:n,actions:r,getters:o}=t,l=s.state.value[e];let i;function c(){l||(s.state.value[e]=n?n():{});const d=Rp(s.state.value[e]);return us(d,r,Object.keys(o||{}).reduce((u,p)=>(u[p]=Yo(ge(()=>{wr(s);const f=s._s.get(e);return o[p].call(f,f)})),u),{}))}return i=hu(e,c,t,s,a,!0),i}function hu(e,t,s={},a,n,r){let o;const l=us({actions:{}},s),i={deep:!0};let c,d,u=new Set,p=new Set,f;const g=a.state.value[e];!r&&!g&&(a.state.value[e]={}),Ne({});let _;function y(R){let S;c=d=!1,typeof R=="function"?(R(a.state.value[e]),S={type:Ta.patchFunction,storeId:e,events:f}):(Po(a.state.value[e],R),S={type:Ta.patchObject,payload:R,storeId:e,events:f});const k=_=Symbol();Wo().then(()=>{_===k&&(c=!0)}),d=!0,Hs(u,S,a.state.value[e])}const m=r?function(){const{state:S}=s,k=S?S():{};this.$patch(T=>{us(T,k)})}:fu;function h(){o.stop(),u.clear(),p.clear(),a._s.delete(e)}const b=(R,S="")=>{if(Qi in R)return R[Hr]=S,R;const k=function(){wr(a);const T=Array.from(arguments),O=new Set,D=new Set;function V(Z){O.add(Z)}function Q(Z){D.add(Z)}Hs(p,{args:T,name:k[Hr],store:w,after:V,onError:Q});let X;try{X=R.apply(this&&this.$id===e?this:w,T)}catch(Z){throw Hs(D,Z),Z}return X instanceof Promise?X.then(Z=>(Hs(O,Z),Z)).catch(Z=>(Hs(D,Z),Promise.reject(Z))):(Hs(O,X),X)};return k[Qi]=!0,k[Hr]=S,k},v={_p:a,$id:e,$onAction:Xi.bind(null,p),$patch:y,$reset:m,$subscribe(R,S={}){const k=Xi(u,R,S.detached,()=>T()),T=o.run(()=>Xs(()=>a.state.value[e],O=>{(S.flush==="sync"?d:c)&&R({storeId:e,type:Ta.direct,events:f},O)},us({},i,S)));return k},$dispose:h},w=es(v);a._s.set(e,w);const P=(a._a&&a._a.runWithContext||Lh)(()=>a._e.run(()=>(o=ad()).run(()=>t({action:b}))));for(const R in P){const S=P[R];if(ze(S)&&!Nh(S)||_s(S))r||(g&&Dh(S)&&(ze(S)?S.value=g[R]:Po(S,g[R])),a.state.value[e][R]=S);else if(typeof S=="function"){const k=b(S,R);P[R]=k,l.actions[R]=S}}return us(w,P),us(Se(w),P),Object.defineProperty(w,"$state",{get:()=>a.state.value[e],set:R=>{y(S=>{us(S,R)})}}),a._p.forEach(R=>{us(w,o.run(()=>R({store:w,app:a._a,pinia:a,options:l})))}),g&&r&&s.hydrate&&s.hydrate(w.$state,g),c=!0,d=!0,w}function Bh(e,t,s){let a;const n=typeof t=="function";a=n?s:t;function r(o,l){const i=gf();return o=o||(i?St(pu,null):null),o&&wr(o),o=uu,o._s.has(e)||(n?hu(e,t,a,o):Ih(e,a,o)),o._s.get(e)}return r.$id=e,r}const Ks=typeof document<"u";function mu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Fh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&mu(e.default)}const Pe=Object.assign;function jr(e,t){const s={};for(const a in t){const n=t[a];s[a]=Ct(n)?n.map(e):e(n)}return s}const Sa=()=>{},Ct=Array.isArray;function Zi(e,t){const s={};for(const a in e)s[a]=a in t?t[a]:e[a];return s}const gu=/#/g,zh=/&/g,Hh=/\//g,jh=/=/g,Uh=/\?/g,bu=/\+/g,qh=/%5B/g,Vh=/%5D/g,_u=/%5E/g,Gh=/%60/g,vu=/%7B/g,Kh=/%7C/g,yu=/%7D/g,Yh=/%20/g;function si(e){return e==null?"":encodeURI(""+e).replace(Kh,"|").replace(qh,"[").replace(Vh,"]")}function Wh(e){return si(e).replace(vu,"{").replace(yu,"}").replace(_u,"^")}function Ao(e){return si(e).replace(bu,"%2B").replace(Yh,"+").replace(gu,"%23").replace(zh,"%26").replace(Gh,"`").replace(vu,"{").replace(yu,"}").replace(_u,"^")}function Jh(e){return Ao(e).replace(jh,"%3D")}function Xh(e){return si(e).replace(gu,"%23").replace(Uh,"%3F")}function Qh(e){return Xh(e).replace(Hh,"%2F")}function Ra(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Zh=/\/$/,em=e=>e.replace(Zh,"");function Ur(e,t,s="/"){let a,n={},r="",o="";const l=t.indexOf("#");let i=t.indexOf("?");return i=l>=0&&i>l?-1:i,i>=0&&(a=t.slice(0,i),r=t.slice(i,l>0?l:t.length),n=e(r.slice(1))),l>=0&&(a=a||t.slice(0,l),o=t.slice(l,t.length)),a=nm(a??t,s),{fullPath:a+r+o,path:a,query:n,hash:Ra(o)}}function tm(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function el(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function sm(e,t,s){const a=t.matched.length-1,n=s.matched.length-1;return a>-1&&a===n&&Zs(t.matched[a],s.matched[n])&&wu(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Zs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function wu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!am(e[s],t[s]))return!1;return!0}function am(e,t){return Ct(e)?tl(e,t):Ct(t)?tl(t,e):e===t}function tl(e,t){return Ct(t)?e.length===t.length&&e.every((s,a)=>s===t[a]):e.length===1&&e[0]===t}function nm(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),a=e.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let r=s.length-1,o,l;for(o=0;o<a.length;o++)if(l=a[o],l!==".")if(l==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+a.slice(o).join("/")}const ls={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Co=(function(e){return e.pop="pop",e.push="push",e})({}),qr=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function rm(e){if(!e)if(Ks){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),em(e)}const om=/^[^#]+#/;function im(e,t){return e.replace(om,"#")+t}function lm(e,t){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-s.left-(t.left||0),top:a.top-s.top-(t.top||0)}}const xr=()=>({left:window.scrollX,top:window.scrollY});function cm(e){let t;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#"),n=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!n)return;t=lm(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function sl(e,t){return(history.state?history.state.position-t:-1)+e}const Oo=new Map;function dm(e,t){Oo.set(e,t)}function um(e){const t=Oo.get(e);return Oo.delete(e),t}function pm(e){return typeof e=="string"||e&&typeof e=="object"}function xu(e){return typeof e=="string"||typeof e=="symbol"}let Be=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const Tu=Symbol("");Be.MATCHER_NOT_FOUND+"",Be.NAVIGATION_GUARD_REDIRECT+"",Be.NAVIGATION_ABORTED+"",Be.NAVIGATION_CANCELLED+"",Be.NAVIGATION_DUPLICATED+"";function ea(e,t){return Pe(new Error,{type:e,[Tu]:!0},t)}function Ut(e,t){return e instanceof Error&&Tu in e&&(t==null||!!(e.type&t))}const fm=["params","query","hash"];function hm(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of fm)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function mm(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<s.length;++a){const n=s[a].replace(bu," "),r=n.indexOf("="),o=Ra(r<0?n:n.slice(0,r)),l=r<0?null:Ra(n.slice(r+1));if(o in t){let i=t[o];Ct(i)||(i=t[o]=[i]),i.push(l)}else t[o]=l}return t}function al(e){let t="";for(let s in e){const a=e[s];if(s=Jh(s),a==null){a!==void 0&&(t+=(t.length?"&":"")+s);continue}(Ct(a)?a.map(n=>n&&Ao(n)):[a&&Ao(a)]).forEach(n=>{n!==void 0&&(t+=(t.length?"&":"")+s,n!=null&&(t+="="+n))})}return t}function gm(e){const t={};for(const s in e){const a=e[s];a!==void 0&&(t[s]=Ct(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return t}const bm=Symbol(""),nl=Symbol(""),Tr=Symbol(""),ai=Symbol(""),$o=Symbol("");function ca(){let e=[];function t(a){return e.push(a),()=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function hs(e,t,s,a,n,r=o=>o()){const o=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((l,i)=>{const c=p=>{p===!1?i(ea(Be.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?i(p):pm(p)?i(ea(Be.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&a.enterCallbacks[n]===o&&typeof p=="function"&&o.push(p),l())},d=r(()=>e.call(a&&a.instances[n],t,s,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>i(p))})}function Vr(e,t,s,a,n=r=>r()){const r=[];for(const o of e)for(const l in o.components){let i=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(mu(i)){const c=(i.__vccOpts||i)[t];c&&r.push(hs(c,s,a,o,l,n))}else{let c=i();r.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const u=Fh(d)?d.default:d;o.mods[l]=d,o.components[l]=u;const p=(u.__vccOpts||u)[t];return p&&hs(p,s,a,o,l,n)()}))}}return r}function _m(e,t){const s=[],a=[],n=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(c=>Zs(c,l))?a.push(l):s.push(l));const i=e.matched[o];i&&(t.matched.find(c=>Zs(c,i))||n.push(i))}return[s,a,n]}let vm=()=>location.protocol+"//"+location.host;function Su(e,t){const{pathname:s,search:a,hash:n}=t,r=e.indexOf("#");if(r>-1){let o=n.includes(e.slice(r))?e.slice(r).length:1,l=n.slice(o);return l[0]!=="/"&&(l="/"+l),el(l,"")}return el(s,e)+a+n}function ym(e,t,s,a){let n=[],r=[],o=null;const l=({state:p})=>{const f=Su(e,location),g=s.value,_=t.value;let y=0;if(p){if(s.value=f,t.value=p,o&&o===g){o=null;return}y=_?p.position-_.position:0}else a(f);n.forEach(m=>{m(s.value,g,{delta:y,type:Co.pop,direction:y?y>0?qr.forward:qr.back:qr.unknown})})};function i(){o=s.value}function c(p){n.push(p);const f=()=>{const g=n.indexOf(p);g>-1&&n.splice(g,1)};return r.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Pe({},p.state,{scroll:xr()}),"")}}function u(){for(const p of r)p();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:i,listen:c,destroy:u}}function rl(e,t,s,a=!1,n=!1){return{back:e,current:t,forward:s,replaced:a,position:window.history.length,scroll:n?xr():null}}function wm(e){const{history:t,location:s}=window,a={value:Su(e,s)},n={value:t.state};n.value||r(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(i,c,d){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+i:vm()+e+i;try{t[d?"replaceState":"pushState"](c,"",p),n.value=c}catch(f){console.error(f),s[d?"replace":"assign"](p)}}function o(i,c){r(i,Pe({},t.state,rl(n.value.back,i,n.value.forward,!0),c,{position:n.value.position}),!0),a.value=i}function l(i,c){const d=Pe({},n.value,t.state,{forward:i,scroll:xr()});r(d.current,d,!0),r(i,Pe({},rl(a.value,i,null),{position:d.position+1},c),!1),a.value=i}return{location:a,state:n,push:l,replace:o}}function xm(e){e=rm(e);const t=wm(e),s=ym(e,t.state,t.location,t.replace);function a(r,o=!0){o||s.pauseListeners(),history.go(r)}const n=Pe({location:"",base:e,go:a,createHref:im.bind(null,e)},t,s);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function Tm(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),xm(e)}let Is=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var je=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(je||{});const Sm={type:Is.Static,value:""},Em=/[a-zA-Z0-9_]/;function km(e){if(!e)return[[]];if(e==="/")return[[Sm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${s})/"${c}": ${f}`)}let s=je.Static,a=s;const n=[];let r;function o(){r&&n.push(r),r=[]}let l=0,i,c="",d="";function u(){c&&(s===je.Static?r.push({type:Is.Static,value:c}):s===je.Param||s===je.ParamRegExp||s===je.ParamRegExpEnd?(r.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Is.Param,value:c,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=i}for(;l<e.length;){if(i=e[l++],i==="\\"&&s!==je.ParamRegExp){a=s,s=je.EscapeNext;continue}switch(s){case je.Static:i==="/"?(c&&u(),o()):i===":"?(u(),s=je.Param):p();break;case je.EscapeNext:p(),s=a;break;case je.Param:i==="("?s=je.ParamRegExp:Em.test(i)?p():(u(),s=je.Static,i!=="*"&&i!=="?"&&i!=="+"&&l--);break;case je.ParamRegExp:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:s=je.ParamRegExpEnd:d+=i;break;case je.ParamRegExpEnd:u(),s=je.Static,i!=="*"&&i!=="?"&&i!=="+"&&l--,d="";break;default:t("Unknown state");break}}return s===je.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),n}const ol="[^/]+?",Pm={sensitive:!1,strict:!1,start:!0,end:!0};var rt=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(rt||{});const Am=/[.+*?^${}()[\]/\\]/g;function Cm(e,t){const s=Pe({},Pm,t),a=[];let n=s.start?"^":"";const r=[];for(const c of e){const d=c.length?[]:[rt.Root];s.strict&&!c.length&&(n+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=rt.Segment+(s.sensitive?rt.BonusCaseSensitive:0);if(p.type===Is.Static)u||(n+="/"),n+=p.value.replace(Am,"\\$&"),f+=rt.Static;else if(p.type===Is.Param){const{value:g,repeatable:_,optional:y,regexp:m}=p;r.push({name:g,repeatable:_,optional:y});const h=m||ol;if(h!==ol){f+=rt.BonusCustomRegExp;try{`${h}`}catch(v){throw new Error(`Invalid custom RegExp for param "${g}" (${h}): `+v.message)}}let b=_?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;u||(b=y&&c.length<2?`(?:/${b})`:"/"+b),y&&(b+="?"),n+=b,f+=rt.Dynamic,y&&(f+=rt.BonusOptional),_&&(f+=rt.BonusRepeatable),h===".*"&&(f+=rt.BonusWildcard)}d.push(f)}a.push(d)}if(s.strict&&s.end){const c=a.length-1;a[c][a[c].length-1]+=rt.BonusStrict}s.strict||(n+="/?"),s.end?n+="$":s.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const o=new RegExp(n,s.sensitive?"":"i");function l(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",g=r[p-1];u[g.name]=f&&g.repeatable?f.split("/"):f}return u}function i(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===Is.Static)d+=f.value;else if(f.type===Is.Param){const{value:g,repeatable:_,optional:y}=f,m=g in c?c[g]:"";if(Ct(m)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const h=Ct(m)?m.join("/"):m;if(!h)if(y)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);d+=h}}return d||"/"}return{re:o,score:a,keys:r,parse:l,stringify:i}}function Om(e,t){let s=0;for(;s<e.length&&s<t.length;){const a=t[s]-e[s];if(a)return a;s++}return e.length<t.length?e.length===1&&e[0]===rt.Static+rt.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===rt.Static+rt.Segment?1:-1:0}function Eu(e,t){let s=0;const a=e.score,n=t.score;for(;s<a.length&&s<n.length;){const r=Om(a[s],n[s]);if(r)return r;s++}if(Math.abs(n.length-a.length)===1){if(il(a))return 1;if(il(n))return-1}return n.length-a.length}function il(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const $m={strict:!1,end:!0,sensitive:!1};function Mm(e,t,s){const a=Cm(km(e.path),s),n=Pe(a,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function Lm(e,t){const s=[],a=new Map;t=Zi($m,t);function n(u){return a.get(u)}function r(u,p,f){const g=!f,_=cl(u);_.aliasOf=f&&f.record;const y=Zi(t,u),m=[_];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of v)m.push(cl(Pe({},_,{components:f?f.record.components:_.components,path:w,aliasOf:f?f.record:_})))}let h,b;for(const v of m){const{path:w}=v;if(p&&w[0]!=="/"){const x=p.record.path,P=x[x.length-1]==="/"?"":"/";v.path=p.record.path+(w&&P+w)}if(h=Mm(v,p,y),f?f.alias.push(h):(b=b||h,b!==h&&b.alias.push(h),g&&u.name&&!dl(h)&&o(u.name)),ku(h)&&i(h),_.children){const x=_.children;for(let P=0;P<x.length;P++)r(x[P],h,f&&f.children[P])}f=f||h}return b?()=>{o(b)}:Sa}function o(u){if(xu(u)){const p=a.get(u);p&&(a.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&a.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return s}function i(u){const p=Nm(u,s);s.splice(p,0,u),u.record.name&&!dl(u)&&a.set(u.record.name,u)}function c(u,p){let f,g={},_,y;if("name"in u&&u.name){if(f=a.get(u.name),!f)throw ea(Be.MATCHER_NOT_FOUND,{location:u});y=f.record.name,g=Pe(ll(p.params,f.keys.filter(b=>!b.optional).concat(f.parent?f.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),u.params&&ll(u.params,f.keys.map(b=>b.name))),_=f.stringify(g)}else if(u.path!=null)_=u.path,f=s.find(b=>b.re.test(_)),f&&(g=f.parse(_),y=f.record.name);else{if(f=p.name?a.get(p.name):s.find(b=>b.re.test(p.path)),!f)throw ea(Be.MATCHER_NOT_FOUND,{location:u,currentLocation:p});y=f.record.name,g=Pe({},p.params,u.params),_=f.stringify(g)}const m=[];let h=f;for(;h;)m.unshift(h.record),h=h.parent;return{name:y,path:_,params:g,matched:m,meta:Dm(m)}}e.forEach(u=>r(u));function d(){s.length=0,a.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:n}}function ll(e,t){const s={};for(const a of t)a in e&&(s[a]=e[a]);return s}function cl(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Rm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Rm(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const a in e.components)t[a]=typeof s=="object"?s[a]:s;return t}function dl(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Dm(e){return e.reduce((t,s)=>Pe(t,s.meta),{})}function Nm(e,t){let s=0,a=t.length;for(;s!==a;){const r=s+a>>1;Eu(e,t[r])<0?a=r:s=r+1}const n=Im(e);return n&&(a=t.lastIndexOf(n,a-1)),a}function Im(e){let t=e;for(;t=t.parent;)if(ku(t)&&Eu(e,t)===0)return t}function ku({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function ul(e){const t=St(Tr),s=St(ai),a=ge(()=>{const i=ut(e.to);return t.resolve(i)}),n=ge(()=>{const{matched:i}=a.value,{length:c}=i,d=i[c-1],u=s.matched;if(!d||!u.length)return-1;const p=u.findIndex(Zs.bind(null,d));if(p>-1)return p;const f=pl(i[c-2]);return c>1&&pl(d)===f&&u[u.length-1].path!==f?u.findIndex(Zs.bind(null,i[c-2])):p}),r=ge(()=>n.value>-1&&jm(s.params,a.value.params)),o=ge(()=>n.value>-1&&n.value===s.matched.length-1&&wu(s.params,a.value.params));function l(i={}){if(Hm(i)){const c=t[ut(e.replace)?"replace":"push"](ut(e.to)).catch(Sa);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:a,href:ge(()=>a.value.href),isActive:r,isExactActive:o,navigate:l}}function Bm(e){return e.length===1?e[0]:e}const Fm=Ld({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ul,setup(e,{slots:t}){const s=es(ul(e)),{options:a}=St(Tr),n=ge(()=>({[fl(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[fl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&Bm(t.default(s));return e.custom?r:ti("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:n.value},r)}}}),zm=Fm;function Hm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function jm(e,t){for(const s in t){const a=t[s],n=e[s];if(typeof a=="string"){if(a!==n)return!1}else if(!Ct(n)||n.length!==a.length||a.some((r,o)=>r!==n[o]))return!1}return!0}function pl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const fl=(e,t,s)=>e??t??s,Um=Ld({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const a=St($o),n=ge(()=>e.route||a.value),r=St(nl,0),o=ge(()=>{let c=ut(r);const{matched:d}=n.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),l=ge(()=>n.value.matched[o.value]);Rn(nl,ge(()=>o.value+1)),Rn(bm,l),Rn($o,n);const i=Ne();return Xs(()=>[i.value,l.value,e.name],([c,d,u],[p,f,g])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!Zs(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=n.value,d=e.name,u=l.value,p=u&&u.components[d];if(!p)return hl(s.default,{Component:p,route:c});const f=u.props[d],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=ti(p,Pe({},g,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[d]=null)},ref:i}));return hl(s.default,{Component:y,route:c})||y}}});function hl(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const Pu=Um;function qm(e){const t=Lm(e.routes,e),s=e.parseQuery||mm,a=e.stringifyQuery||al,n=e.history,r=ca(),o=ca(),l=ca(),i=$p(ls);let c=ls;Ks&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=jr.bind(null,N=>""+N),u=jr.bind(null,Qh),p=jr.bind(null,Ra);function f(N,G){let j,te;return xu(N)?(j=t.getRecordMatcher(N),te=G):te=N,t.addRoute(te,j)}function g(N){const G=t.getRecordMatcher(N);G&&t.removeRoute(G)}function _(){return t.getRoutes().map(N=>N.record)}function y(N){return!!t.getRecordMatcher(N)}function m(N,G){if(G=Pe({},G||i.value),typeof N=="string"){const L=Ur(s,N,G.path),H=t.resolve({path:L.path},G),W=n.createHref(L.fullPath);return Pe(L,H,{params:p(H.params),hash:Ra(L.hash),redirectedFrom:void 0,href:W})}let j;if(N.path!=null)j=Pe({},N,{path:Ur(s,N.path,G.path).path});else{const L=Pe({},N.params);for(const H in L)L[H]==null&&delete L[H];j=Pe({},N,{params:u(L)}),G.params=u(G.params)}const te=t.resolve(j,G),I=N.hash||"";te.params=d(p(te.params));const E=tm(a,Pe({},N,{hash:Wh(I),path:te.path})),M=n.createHref(E);return Pe({fullPath:E,hash:I,query:a===al?gm(N.query):N.query||{}},te,{redirectedFrom:void 0,href:M})}function h(N){return typeof N=="string"?Ur(s,N,i.value.path):Pe({},N)}function b(N,G){if(c!==N)return ea(Be.NAVIGATION_CANCELLED,{from:G,to:N})}function v(N){return P(N)}function w(N){return v(Pe(h(N),{replace:!0}))}function x(N,G){const j=N.matched[N.matched.length-1];if(j&&j.redirect){const{redirect:te}=j;let I=typeof te=="function"?te(N,G):te;return typeof I=="string"&&(I=I.includes("?")||I.includes("#")?I=h(I):{path:I},I.params={}),Pe({query:N.query,hash:N.hash,params:I.path!=null?{}:N.params},I)}}function P(N,G){const j=c=m(N),te=i.value,I=N.state,E=N.force,M=N.replace===!0,L=x(j,te);if(L)return P(Pe(h(L),{state:typeof L=="object"?Pe({},I,L.state):I,force:E,replace:M}),G||j);const H=j;H.redirectedFrom=G;let W;return!E&&sm(a,te,j)&&(W=ea(Be.NAVIGATION_DUPLICATED,{to:H,from:te}),z(te,te,!0,!1)),(W?Promise.resolve(W):k(H,te)).catch(B=>Ut(B)?Ut(B,Be.NAVIGATION_GUARD_REDIRECT)?B:J(B):K(B,H,te)).then(B=>{if(B){if(Ut(B,Be.NAVIGATION_GUARD_REDIRECT))return P(Pe({replace:M},h(B.to),{state:typeof B.to=="object"?Pe({},I,B.to.state):I,force:E}),G||H)}else B=O(H,te,!0,M,I);return T(H,te,B),B})}function R(N,G){const j=b(N,G);return j?Promise.reject(j):Promise.resolve()}function S(N){const G=A.values().next().value;return G&&typeof G.runWithContext=="function"?G.runWithContext(N):N()}function k(N,G){let j;const[te,I,E]=_m(N,G);j=Vr(te.reverse(),"beforeRouteLeave",N,G);for(const L of te)L.leaveGuards.forEach(H=>{j.push(hs(H,N,G))});const M=R.bind(null,N,G);return j.push(M),U(j).then(()=>{j=[];for(const L of r.list())j.push(hs(L,N,G));return j.push(M),U(j)}).then(()=>{j=Vr(I,"beforeRouteUpdate",N,G);for(const L of I)L.updateGuards.forEach(H=>{j.push(hs(H,N,G))});return j.push(M),U(j)}).then(()=>{j=[];for(const L of E)if(L.beforeEnter)if(Ct(L.beforeEnter))for(const H of L.beforeEnter)j.push(hs(H,N,G));else j.push(hs(L.beforeEnter,N,G));return j.push(M),U(j)}).then(()=>(N.matched.forEach(L=>L.enterCallbacks={}),j=Vr(E,"beforeRouteEnter",N,G,S),j.push(M),U(j))).then(()=>{j=[];for(const L of o.list())j.push(hs(L,N,G));return j.push(M),U(j)}).catch(L=>Ut(L,Be.NAVIGATION_CANCELLED)?L:Promise.reject(L))}function T(N,G,j){l.list().forEach(te=>S(()=>te(N,G,j)))}function O(N,G,j,te,I){const E=b(N,G);if(E)return E;const M=G===ls,L=Ks?history.state:{};j&&(te||M?n.replace(N.fullPath,Pe({scroll:M&&L&&L.scroll},I)):n.push(N.fullPath,I)),i.value=N,z(N,G,j,M),J()}let D;function V(){D||(D=n.listen((N,G,j)=>{if(!$.listening)return;const te=m(N),I=x(te,$.currentRoute.value);if(I){P(Pe(I,{replace:!0,force:!0}),te).catch(Sa);return}c=te;const E=i.value;Ks&&dm(sl(E.fullPath,j.delta),xr()),k(te,E).catch(M=>Ut(M,Be.NAVIGATION_ABORTED|Be.NAVIGATION_CANCELLED)?M:Ut(M,Be.NAVIGATION_GUARD_REDIRECT)?(P(Pe(h(M.to),{force:!0}),te).then(L=>{Ut(L,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&!j.delta&&j.type===Co.pop&&n.go(-1,!1)}).catch(Sa),Promise.reject()):(j.delta&&n.go(-j.delta,!1),K(M,te,E))).then(M=>{M=M||O(te,E,!1),M&&(j.delta&&!Ut(M,Be.NAVIGATION_CANCELLED)?n.go(-j.delta,!1):j.type===Co.pop&&Ut(M,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),T(te,E,M)}).catch(Sa)}))}let Q=ca(),X=ca(),Z;function K(N,G,j){J(N);const te=X.list();return te.length?te.forEach(I=>I(N,G,j)):console.error(N),Promise.reject(N)}function ie(){return Z&&i.value!==ls?Promise.resolve():new Promise((N,G)=>{Q.add([N,G])})}function J(N){return Z||(Z=!N,V(),Q.list().forEach(([G,j])=>N?j(N):G()),Q.reset()),N}function z(N,G,j,te){const{scrollBehavior:I}=e;if(!Ks||!I)return Promise.resolve();const E=!j&&um(sl(N.fullPath,0))||(te||!j)&&history.state&&history.state.scroll||null;return Wo().then(()=>I(N,G,E)).then(M=>M&&cm(M)).catch(M=>K(M,N,G))}const ee=N=>n.go(N);let Y;const A=new Set,$={currentRoute:i,listening:!0,addRoute:f,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:_,resolve:m,options:e,push:v,replace:w,go:ee,back:()=>ee(-1),forward:()=>ee(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:X.add,isReady:ie,install(N){N.component("RouterLink",zm),N.component("RouterView",Pu),N.config.globalProperties.$router=$,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>ut(i)}),Ks&&!Y&&i.value===ls&&(Y=!0,v(n.location).catch(te=>{}));const G={};for(const te in ls)Object.defineProperty(G,te,{get:()=>i.value[te],enumerable:!0});N.provide(Tr,$),N.provide(ai,vd(G)),N.provide($o,i);const j=N.unmount;A.add(N),N.unmount=function(){A.delete(N),A.size<1&&(c=ls,D&&D(),D=null,i.value=ls,Y=!1,Z=!1),j()}}};function U(N){return N.reduce((G,j)=>G.then(()=>S(j)),Promise.resolve())}return $}function ct(){return St(Tr)}function Ba(e){return St(ai)}var Vm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Au(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ma={exports:{}},Gm=ma.exports,ml;function Km(){return ml||(ml=1,(function(e,t){(function(s,a){var n={};s.PubSub?(n=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=n,a(n)),e!==void 0&&e.exports&&(t=e.exports=n),t.PubSub=n,e.exports=t=n})(typeof window=="object"&&window||Gm||Vm,function(s){var a={},n=-1,r="*";function o(_){var y;for(y in _)if(Object.prototype.hasOwnProperty.call(_,y))return!0;return!1}function l(_){return function(){throw _}}function i(_,y,m){try{_(y,m)}catch(h){setTimeout(l(h),0)}}function c(_,y,m){_(y,m)}function d(_,y,m,h){var b=a[y],v=h?c:i,w;if(Object.prototype.hasOwnProperty.call(a,y))for(w in b)Object.prototype.hasOwnProperty.call(b,w)&&v(b[w],_,m)}function u(_,y,m){return function(){var b=String(_),v=b.lastIndexOf(".");for(d(_,_,y,m);v!==-1;)b=b.substr(0,v),v=b.lastIndexOf("."),d(_,b,y,m);d(_,r,y,m)}}function p(_){var y=String(_),m=!!(Object.prototype.hasOwnProperty.call(a,y)&&o(a[y]));return m}function f(_){for(var y=String(_),m=p(y)||p(r),h=y.lastIndexOf(".");!m&&h!==-1;)y=y.substr(0,h),h=y.lastIndexOf("."),m=p(y);return m}function g(_,y,m,h){_=typeof _=="symbol"?_.toString():_;var b=u(_,y,h),v=f(_);return v?(m===!0?b():setTimeout(b,0),!0):!1}s.publish=function(_,y){return g(_,y,!1,s.immediateExceptions)},s.publishSync=function(_,y){return g(_,y,!0,s.immediateExceptions)},s.subscribe=function(_,y){if(typeof y!="function")return!1;_=typeof _=="symbol"?_.toString():_,Object.prototype.hasOwnProperty.call(a,_)||(a[_]={});var m="uid_"+String(++n);return a[_][m]=y,m},s.subscribeAll=function(_){return s.subscribe(r,_)},s.subscribeOnce=function(_,y){var m=s.subscribe(_,function(){s.unsubscribe(m),y.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){a={}},s.clearSubscriptions=function(y){var m;for(m in a)Object.prototype.hasOwnProperty.call(a,m)&&m.indexOf(y)===0&&delete a[m]},s.countSubscriptions=function(y){var m,h,b=0;for(m in a)if(Object.prototype.hasOwnProperty.call(a,m)&&m.indexOf(y)===0){for(h in a[m])b++;break}return b},s.getSubscriptions=function(y){var m,h=[];for(m in a)Object.prototype.hasOwnProperty.call(a,m)&&m.indexOf(y)===0&&h.push(m);return h},s.unsubscribe=function(_){var y=function(R){var S;for(S in a)if(Object.prototype.hasOwnProperty.call(a,S)&&S.indexOf(R)===0)return!0;return!1},m=typeof _=="string"&&(Object.prototype.hasOwnProperty.call(a,_)||y(_)),h=!m&&typeof _=="string",b=typeof _=="function",v=!1,w,x,P;if(m){s.clearSubscriptions(_);return}for(w in a)if(Object.prototype.hasOwnProperty.call(a,w)){if(x=a[w],h&&x[_]){delete x[_],v=_;break}if(b)for(P in x)Object.prototype.hasOwnProperty.call(x,P)&&x[P]===_&&(delete x[P],v=!0)}return v}})})(ma,ma.exports)),ma.exports}var Ym=Km();const de=Au(Ym);let Ge=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Wm={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function ws(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function Jm(e,t){let s;const a=()=>{if(s)return s;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),s=ws(n),s.then(r=>{r.onclose=()=>s=void 0},()=>{}),s};return(n,r)=>a().then(o=>r(o.transaction(t,n).objectStore(t)))}let Gr;function Fa(){return Gr||(Gr=Jm("keyval-store","keyval")),Gr}function Xm(e,t=Fa()){return t("readonly",s=>ws(s.get(e)))}function gl(e,t,s=Fa()){return s("readwrite",a=>(a.put(t,e),ws(a.transaction)))}function Kr(e,t=Fa()){return t("readwrite",s=>(s.delete(e),ws(s.transaction)))}function Cu(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},ws(e.transaction)}function js(e=Fa()){return e("readonly",t=>{if(t.getAllKeys)return ws(t.getAllKeys());const s=[];return Cu(t,a=>s.push(a.key)).then(()=>s)})}function Qm(e=Fa()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([ws(t.getAllKeys()),ws(t.getAll())]).then(([a,n])=>a.map((r,o)=>[r,n[o]]));const s=[];return e("readonly",a=>Cu(a,n=>s.push([n.key,n.value])).then(()=>s))})}const ta=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Qn=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!Qn(e[s],t[s]))return!1;return!0}if(ta(e)&&ta(t)){const s=Object.entries(e),a=new Set(Object.keys(t));if(s.length!==a.size)return!1;for(const[n,r]of s){if(!Qn(r,t[n]))return!1;a.delete(n)}return a.size===0}return!1},Va=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(ta(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Zm=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",bl=e=>e>="0"&&e<="9"||e==="-",eg=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var ae;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(ae||(ae={}));const _l={"(":ae.TOK_LPAREN,")":ae.TOK_RPAREN,"*":ae.TOK_STAR,",":ae.TOK_COMMA,".":ae.TOK_DOT,":":ae.TOK_COLON,"@":ae.TOK_CURRENT,$:ae.TOK_ROOT,"]":ae.TOK_RBRACKET,"{":ae.TOK_LBRACE,"}":ae.TOK_RBRACE},tg={"!":!0,"<":!0,"=":!0,">":!0},sg={"	":!0,"\n":!0,"\r":!0," ":!0};class ag{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let a,n,r;for(;this._current<t.length;)if(Zm(t[this._current]))a=this._current,n=this.consumeUnquotedIdentifier(t),s.push({start:a,type:ae.TOK_UNQUOTEDIDENTIFIER,value:n});else if(_l[t[this._current]]!==void 0)s.push({start:this._current,type:_l[t[this._current]],value:t[this._current]}),this._current+=1;else if(bl(t[this._current]))r=this.consumeNumber(t),s.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),s.push(r);else if(t[this._current]==='"')a=this._current,n=this.consumeQuotedIdentifier(t),s.push({start:a,type:ae.TOK_QUOTEDIDENTIFIER,value:n});else if(t[this._current]==="'")a=this._current,n=this.consumeRawStringLiteral(t),s.push({start:a,type:ae.TOK_LITERAL,value:n});else if(t[this._current]==="`"){a=this._current;const o=this.consumeLiteral(t);s.push({start:a,type:ae.TOK_LITERAL,value:o})}else if(tg[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&s.push(r);else if(sg[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:a,type:ae.TOK_AND,value:"&&"})):s.push({start:a,type:ae.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:a,type:ae.TOK_OR,value:"||"})):s.push({start:a,type:ae.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&eg(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==='"')?n+=2:n+=1,this._current=n}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const a=t.length;for(;bl(t[this._current])&&this._current<a;)this._current+=1;const n=parseInt(t.slice(s,this._current),10);return{start:s,value:n,type:ae.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:ae.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:ae.TOK_FLATTEN,value:"[]"}):{start:s,type:ae.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,a=t[s];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:ae.TOK_NE,value:"!="}):{start:s,type:ae.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:ae.TOK_LTE,value:"<="}):{start:s,type:ae.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:s,type:ae.TOK_GTE,value:">="}):{start:s,type:ae.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:ae.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let n=t.slice(s,this._current).trimLeft();n=n.replace("\\`","`");const r=this.looksLikeJSON(n)?JSON.parse(n):JSON.parse(`"${n}"`);return this._current+=1,r}looksLikeJSON(t){const a=["true","false","null"],n="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(n.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Ou=new ag,Je={[ae.TOK_EOF]:0,[ae.TOK_UNQUOTEDIDENTIFIER]:0,[ae.TOK_QUOTEDIDENTIFIER]:0,[ae.TOK_RBRACKET]:0,[ae.TOK_RPAREN]:0,[ae.TOK_COMMA]:0,[ae.TOK_RBRACE]:0,[ae.TOK_NUMBER]:0,[ae.TOK_CURRENT]:0,[ae.TOK_EXPREF]:0,[ae.TOK_ROOT]:0,[ae.TOK_PIPE]:1,[ae.TOK_OR]:2,[ae.TOK_AND]:3,[ae.TOK_EQ]:5,[ae.TOK_GT]:5,[ae.TOK_LT]:5,[ae.TOK_GTE]:5,[ae.TOK_LTE]:5,[ae.TOK_NE]:5,[ae.TOK_FLATTEN]:9,[ae.TOK_STAR]:20,[ae.TOK_FILTER]:21,[ae.TOK_DOT]:40,[ae.TOK_NOT]:45,[ae.TOK_LBRACE]:50,[ae.TOK_LBRACKET]:55,[ae.TOK_LPAREN]:60};class ng{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==ae.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return s}loadTokens(t){this.tokens=[...Ou.tokenize(t),{type:ae.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let a=this.nud(s),n=this.lookahead(0);for(;t<Je[n];)this.advance(),a=this.led(n,a),n=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,a,n;switch(t.type){case ae.TOK_LITERAL:return{type:"Literal",value:t.value};case ae.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case ae.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===ae.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case ae.TOK_NOT:return a=this.expression(Je.Not),{type:"NotExpression",children:[a]};case ae.TOK_STAR:return s={type:"Identity"},a=this.lookahead(0)===ae.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Je.Star),{type:"ValueProjection",children:[s,a]};case ae.TOK_FILTER:return this.led(t.type,{type:"Identity"});case ae.TOK_LBRACE:return this.parseMultiselectHash();case ae.TOK_FLATTEN:return s={type:ae.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(Je.Flatten),{type:"Projection",children:[s,a]};case ae.TOK_LBRACKET:return this.lookahead(0)===ae.TOK_NUMBER||this.lookahead(0)===ae.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===ae.TOK_STAR&&this.lookahead(1)===ae.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(Je.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case ae.TOK_CURRENT:return{type:ae.TOK_CURRENT};case ae.TOK_ROOT:return{type:ae.TOK_ROOT};case ae.TOK_EXPREF:return n=this.expression(Je.Expref),{type:"ExpressionReference",children:[n]};case ae.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==ae.TOK_RPAREN;)this.lookahead(0)===ae.TOK_CURRENT?(n={type:ae.TOK_CURRENT},this.advance()):n=this.expression(0),o.push(n);return this.match(ae.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,s){let a;switch(t){case ae.TOK_DOT:const n=Je.Dot;return this.lookahead(0)!==ae.TOK_STAR?(a=this.parseDotRHS(n),{type:"Subexpression",children:[s,a]}):(this.advance(),a=this.parseProjectionRHS(n),{type:"ValueProjection",children:[s,a]});case ae.TOK_PIPE:return a=this.expression(Je.Pipe),{type:ae.TOK_PIPE,children:[s,a]};case ae.TOK_OR:return a=this.expression(Je.Or),{type:"OrExpression",children:[s,a]};case ae.TOK_AND:return a=this.expression(Je.And),{type:"AndExpression",children:[s,a]};case ae.TOK_LPAREN:const r=s.name,o=[];let l;for(;this.lookahead(0)!==ae.TOK_RPAREN;)this.lookahead(0)===ae.TOK_CURRENT?(l={type:ae.TOK_CURRENT},this.advance()):l=this.expression(0),this.lookahead(0)===ae.TOK_COMMA&&this.match(ae.TOK_COMMA),o.push(l);return this.match(ae.TOK_RPAREN),{name:r,type:"Function",children:o};case ae.TOK_FILTER:const c=this.expression(0);return this.match(ae.TOK_RBRACKET),a=this.lookahead(0)===ae.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Je.Filter),{type:"FilterProjection",children:[s,a,c]};case ae.TOK_FLATTEN:const d={type:ae.TOK_FLATTEN,children:[s]},u=this.parseProjectionRHS(Je.Flatten);return{type:"Projection",children:[d,u]};case ae.TOK_EQ:case ae.TOK_NE:case ae.TOK_GT:case ae.TOK_GTE:case ae.TOK_LT:case ae.TOK_LTE:return this.parseComparator(s,t);case ae.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===ae.TOK_NUMBER||p.type===ae.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(s,a)):(this.match(ae.TOK_STAR),this.match(ae.TOK_RBRACKET),a=this.parseProjectionRHS(Je.Star),{type:"Projection",children:[s,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const a=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===ae.TOK_COLON||this.lookahead(1)===ae.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(ae.TOK_RBRACKET),t}projectIfSlice(t,s){const a={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[a,this.parseProjectionRHS(Je.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let s=0,a=this.lookahead(0);for(;a!==ae.TOK_RBRACKET&&s<3;){if(a===ae.TOK_COLON)s+=1,this.advance();else if(a===ae.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}a=this.lookahead(0)}return this.match(ae.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const a=this.expression(Je[s]);return{type:"Comparator",name:s,children:[t,a]}}parseDotRHS(t){const s=this.lookahead(0);if([ae.TOK_UNQUOTEDIDENTIFIER,ae.TOK_QUOTEDIDENTIFIER,ae.TOK_STAR].includes(s))return this.expression(t);if(s===ae.TOK_LBRACKET)return this.match(ae.TOK_LBRACKET),this.parseMultiselectList();if(s===ae.TOK_LBRACE)return this.match(ae.TOK_LBRACE),this.parseMultiselectHash();const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseProjectionRHS(t){if(Je[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===ae.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===ae.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===ae.TOK_DOT)return this.match(ae.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==ae.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===ae.TOK_COMMA&&(this.match(ae.TOK_COMMA),this.lookahead(0)===ae.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(ae.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[ae.TOK_UNQUOTEDIDENTIFIER,ae.TOK_QUOTEDIDENTIFIER];let a,n,r;for(;;){if(a=this.lookaheadToken(0),!s.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(n=a.value,this.advance(),this.match(ae.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:n}),this.lookahead(0)===ae.TOK_COMMA)this.match(ae.TOK_COMMA);else if(this.lookahead(0)===ae.TOK_RBRACE){this.match(ae.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const $u=new ng;var ce;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(ce||(ce={}));class rg{constructor(t){this.TYPE_NAME_TABLE={[ce.TYPE_NUMBER]:"number",[ce.TYPE_ANY]:"any",[ce.TYPE_STRING]:"string",[ce.TYPE_ARRAY]:"array",[ce.TYPE_OBJECT]:"object",[ce.TYPE_BOOLEAN]:"boolean",[ce.TYPE_EXPREF]:"expression",[ce.TYPE_NULL]:"null",[ce.TYPE_ARRAY_NUMBER]:"Array<number>",[ce.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let a=0;for(let n=0;n<s.length;n+=1)a+=s[n];return a/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[a,n]=s;return a.includes(n)},this.functionEndsWith=s=>{const[a,n]=s;return a.includes(n,a.length-n.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[a,n]=s;return n.join(a)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>ta(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const a=[],n=this._interpreter,r=s[0],o=s[1];for(let l=0;l<o.length;l+=1)a.push(n.visit(r,o[l]));return a},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===ce.TYPE_NUMBER)return Math.max(...s);const n=s;let r=n[0];for(let o=1;o<n.length;o+=1)r.localeCompare(n[o])<0&&(r=n[o]);return r},this.functionMaxBy=s=>{const a=s[1],n=s[0],r=this.createKeyFunction(a,[ce.TYPE_NUMBER,ce.TYPE_STRING]);let o=-1/0,l,i;for(let c=0;c<n.length;c+=1)i=r&&r(n[c]),i!==void 0&&i>o&&(o=i,l=n[c]);return l},this.functionMerge=s=>{let a={};for(let n=0;n<s.length;n+=1){const r=s[n];a=Object.assign(a,r)}return a},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===ce.TYPE_NUMBER)return Math.min(...s);const n=s;let r=n[0];for(let o=1;o<n.length;o+=1)n[o].localeCompare(r)<0&&(r=n[o]);return r},this.functionMinBy=s=>{const a=s[1],n=s[0],r=this.createKeyFunction(a,[ce.TYPE_NUMBER,ce.TYPE_STRING]);let o=1/0,l,i;for(let c=0;c<n.length;c+=1)i=r&&r(n[c]),i!==void 0&&i<o&&(o=i,l=n[c]);return l},this.functionNotNull=s=>{for(let a=0;a<s.length;a+=1)if(this.getTypeName(s[a])!==ce.TYPE_NULL)return s[a];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===ce.TYPE_STRING){const r=s;let o="";for(let l=r.length-1;l>=0;l-=1)o+=r[l];return o}const n=s.slice(0);return n.reverse(),n},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const a=s[0].slice(0);if(a.length===0)return a;const n=this._interpreter,r=s[1],o=this.getTypeName(n.visit(r,a[0]));if(o!==void 0&&![ce.TYPE_NUMBER,ce.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const l=[];for(let i=0;i<a.length;i+=1)l.push([i,a[i]]);l.sort((i,c)=>{const d=n.visit(r,i[1]),u=n.visit(r,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:i[0]-c[0]});for(let i=0;i<l.length;i+=1)a[i]=l[i][1];return a},this.functionStartsWith=([s,a])=>s.startsWith(a),this.functionSum=([s])=>s.reduce((a,n)=>a+n,0),this.functionToArray=([s])=>this.getTypeName(s)===ce.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const a=this.getTypeName(s);let n;return a===ce.TYPE_NUMBER?s:a===ce.TYPE_STRING&&(n=+s,!isNaN(n))?n:null},this.functionToString=([s])=>this.getTypeName(s)===ce.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case ce.TYPE_NUMBER:return"number";case ce.TYPE_STRING:return"string";case ce.TYPE_ARRAY:return"array";case ce.TYPE_OBJECT:return"object";case ce.TYPE_BOOLEAN:return"boolean";case ce.TYPE_EXPREF:return"expref";case ce.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[ce.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[ce.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[ce.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[ce.TYPE_STRING,ce.TYPE_ARRAY]},{types:[ce.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[ce.TYPE_STRING]},{types:[ce.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[ce.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[ce.TYPE_STRING]},{types:[ce.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[ce.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[ce.TYPE_STRING,ce.TYPE_ARRAY,ce.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[ce.TYPE_EXPREF]},{types:[ce.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[ce.TYPE_ARRAY_NUMBER,ce.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[ce.TYPE_ARRAY]},{types:[ce.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[ce.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[ce.TYPE_ARRAY_NUMBER,ce.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[ce.TYPE_ARRAY]},{types:[ce.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[ce.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[ce.TYPE_STRING,ce.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[ce.TYPE_ARRAY_STRING,ce.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[ce.TYPE_ARRAY]},{types:[ce.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[ce.TYPE_STRING]},{types:[ce.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[ce.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[ce.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[ce.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[ce.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[ce.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[ce.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:a}}callFunction(t,s){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,a._signature),a._func.call(this,s)}validateInputSignatures(t,s){for(let a=0;a<s.length;a+=1)if("variadic"in s[a]&&a!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,s,a){var n,r;let o;this.validateInputSignatures(t,a);const l=a.filter(_=>{var y;return(y=!_.optional)!==null&&y!==void 0?y:!1}).length,i=(r=(n=a[a.length-1])===null||n===void 0?void 0:n.variadic)!==null&&r!==void 0?r:!1,c=s.length<l,d=s.length>a.length,u=c&&(!i&&l>1||i)?"at least ":"";if(i&&c||!i&&(c||d))throw o=a.length>1,new Error(`ArgumentError: ${t}() takes ${u}${l} argument${o&&"s"||""} but received ${s.length}`);let p,f,g;for(let _=0;_<a.length;_+=1){g=!1,p=a[_].types,f=this.getTypeName(s[_]);let y;for(y=0;y<p.length;y+=1)if(f!==void 0&&this.typeMatches(f,p[y],s[_])){g=!0;break}if(!g&&f!==void 0){const m=p.map(h=>this.TYPE_NAME_TABLE[h]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${_+1} to be type (${m}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,s,a){if(s===ce.TYPE_ANY)return!0;if(s===ce.TYPE_ARRAY_STRING||s===ce.TYPE_ARRAY_NUMBER||s===ce.TYPE_ARRAY){if(s===ce.TYPE_ARRAY)return t===ce.TYPE_ARRAY;if(t===ce.TYPE_ARRAY){let n;s===ce.TYPE_ARRAY_NUMBER?n=ce.TYPE_NUMBER:s===ce.TYPE_ARRAY_STRING&&(n=ce.TYPE_STRING);for(let r=0;r<a.length;r+=1){const o=this.getTypeName(a[r]);if(o!==void 0&&n!==void 0&&!this.typeMatches(o,n,a[r]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return ce.TYPE_STRING;case"[object Number]":return ce.TYPE_NUMBER;case"[object Array]":return ce.TYPE_ARRAY;case"[object Boolean]":return ce.TYPE_BOOLEAN;case"[object Null]":return ce.TYPE_NULL;case"[object Object]":return t.jmespathType===ae.TOK_EXPREF?ce.TYPE_EXPREF:ce.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const a=this._interpreter;return r=>{const o=a.visit(t,r);if(!s.includes(this.getTypeName(o))){const l=`TypeError: expected one of (${s.map(i=>this.TYPE_NAME_TABLE[i]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(l)}return o}}}class og{constructor(){this._rootValue=null,this.runtime=new rg(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let a,n,r,o,l,i,c,d,u,p,f;switch(t.type){case"Field":return s===null?null:ta(s)?(i=s[t.name],i===void 0?null:i):null;case"Subexpression":for(r=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(t.children[0],s),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(s))return null;let g=t.value;return g<0&&(g=s.length+g),r=s[g],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(s))return null;const _=[...t.children],y=this.computeSliceParams(s.length,_),[m,h,b]=y;if(r=[],b>0)for(p=m;p<h;p+=b)r.push(s[p]);else for(p=m;p>h;p+=b)r.push(s[p]);return r;case"Projection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)n=this.visit(t.children[1],f[p]),n!==null&&u.push(n);return u;case"ValueProjection":if(f=this.visit(t.children[0],s),!ta(f))return null;u=[];const v=Object.values(f);for(p=0;p<v.length;p+=1)n=this.visit(t.children[1],v[p]),n!==null&&u.push(n);return u;case"FilterProjection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;const w=[],x=[];for(p=0;p<f.length;p+=1)a=this.visit(t.children[2],f[p]),Va(a)||w.push(f[p]);for(let O=0;O<w.length;O+=1)n=this.visit(t.children[1],w[O]),n!==null&&x.push(n);return x;case"Comparator":switch(o=this.visit(t.children[0],s),l=this.visit(t.children[1],s),t.name){case ae.TOK_EQ:r=Qn(o,l);break;case ae.TOK_NE:r=!Qn(o,l);break;case ae.TOK_GT:r=o>l;break;case ae.TOK_GTE:r=o>=l;break;case ae.TOK_LT:r=o<l;break;case ae.TOK_LTE:r=o<=l;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case ae.TOK_FLATTEN:const P=this.visit(t.children[0],s);if(!Array.isArray(P))return null;let R=[];for(p=0;p<P.length;p+=1)n=P[p],Array.isArray(n)?R=[...R,...n]:R.push(n);return R;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],s));return u;case"MultiSelectHash":if(s===null)return null;u={};let S;for(p=0;p<t.children.length;p+=1)S=t.children[p],u[S.name]=this.visit(S.value,s);return u;case"OrExpression":return a=this.visit(t.children[0],s),Va(a)&&(a=this.visit(t.children[1],s)),a;case"AndExpression":return o=this.visit(t.children[0],s),Va(o)?o:this.visit(t.children[1],s);case"NotExpression":return o=this.visit(t.children[0],s),Va(o);case"Literal":return t.value;case ae.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case ae.TOK_CURRENT:return s;case ae.TOK_ROOT:return this._rootValue;case"Function":const k=[];for(let O=0;O<t.children.length;O+=1)k.push(this.visit(t.children[O],s));return this.runtime.callFunction(t.name,k);case"ExpressionReference":const T=t.children[0];return T.jmespathType=ae.TOK_EXPREF,T;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[a,n,r]=s;if(r===null)r=1;else if(r===0){const l=new Error("Invalid slice, step cannot be 0");throw l.name="RuntimeError",l}const o=r<0;return a=a===null?o?t-1:0:this.capSliceRange(t,a,r),n=n===null?o?-1:t:this.capSliceRange(t,n,r),[a,n,r]}capSliceRange(t,s,a){let n=s;return n<0?(n+=t,n<0&&(n=a<0?-1:0)):n>=t&&(n=a<0?t-1:t),n}}const ni=new og,ig=ce.TYPE_ANY,lg=ce.TYPE_ARRAY,cg=ce.TYPE_ARRAY_NUMBER,dg=ce.TYPE_ARRAY_STRING,ug=ce.TYPE_BOOLEAN,pg=ce.TYPE_EXPREF,fg=ce.TYPE_NULL,hg=ce.TYPE_NUMBER,mg=ce.TYPE_OBJECT,gg=ce.TYPE_STRING;function bg(e){return $u.parse(e)}function _g(e){return Ou.tokenize(e)}const vg=(e,t,s)=>{ni.runtime.registerFunction(e,t,s)};function yg(e,t){const s=$u.parse(t);return ni.search(s,e)}const wg=ni,wt={compile:bg,registerFunction:vg,search:yg,tokenize:_g,TreeInterpreter:wg,TYPE_ANY:ig,TYPE_ARRAY_NUMBER:cg,TYPE_ARRAY_STRING:dg,TYPE_ARRAY:lg,TYPE_BOOLEAN:ug,TYPE_EXPREF:pg,TYPE_NULL:fg,TYPE_NUMBER:hg,TYPE_OBJECT:mg,TYPE_STRING:gg},Dt=class Dt{static async appendPrompt(t,s){gl(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{js().then(a=>{a=a.filter(n=>n.indexOf(this.DELIM_PROMPTS)!=-1),a.length>Dt.MAX_PROMPTS_VALS&&Kr(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(s=>{let a=JSON.stringify({ts:Date.now(),name:s[1]});gl(s[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(n=>console.error("~IDB Failed | ",n))})}static async keys(t,s){js().then(a=>{a=a.filter(n=>n.indexOf(t)!=-1),s&&s(a)})}static async get(t,s){Xm(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{s&&s(a)}})}static async entries(t,s){Qm().then(a=>{a=a.filter(n=>n[0].indexOf(t)!=-1),a=a.map(n=>{try{n[1]=JSON.parse(LZString.decompressFromUTF16(n[1]))}catch{}finally{}return n}),s&&s(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,a){let n="";switch(t){case"PROMPTS_COUNT":js().then(o=>{o=o.filter(l=>l.indexOf(this.DELIM_PROMPTS)!=-1),n=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,n&&a&&a(n)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":js().then(o=>{o.forEach(l=>{l.indexOf(this.DELIM_PROMPTS)!=-1&&l.split(Dt.DELIM_PROMPTS)[0]==s&&Kr(l)})}),n="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",n);break;case"VIR_COUNT":js().then(o=>{o=o.filter(l=>l.indexOf(this.DELIM_VIR)!=-1),n=`There are ${o.length} VNR names in local IDB storage.`,n&&a&&a(n)});break;case"VIR_CLEAR":let r=0;await js().then(o=>{o.forEach(l=>{l.indexOf(this.DELIM_VIR)!=-1&&l.split(Dt.DELIM_VIR)[0]==s&&(r++,Kr(l))})}),n=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),n="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",n),n&&a&&a(n)}};Dt.MAX_TYPEAHEAD_ROWS=14,Dt.MAX_PROMPTS_VALS=50,Dt.DELIM_PROMPTS="_",Dt.DELIM_VIR="-",Dt.DELIM_SNDX="|";let Ns=Dt;const xe=Bh("AppState",()=>{const e=ct(),t="DEV",s="BMA Tourney v0.0.5 ",a="#app",n=es({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_TOURNEYS:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS",WC__APP__HEAD_MID__HEAD_MID_PRIVATE:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__LOBBY:"WC.APP.FOOT.LOBBY",WC__APP__FOOT__TOURNEYS:"WC.APP.FOOT.TOURNEYS",WC__APP__FOOT__PRIVATE:"WC.APP.FOOT.PRIVATE",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let r=es([]),o=es([]);const l=S=>{r.push(S),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},i=S=>{o.push(S),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const S=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",S),S)try{const k=JSON.parse(S);return console.log("[appState] Parsed session_user:",k),k}catch(k){console.error("Failed to parse session_user from localStorage:",k)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Ne({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Ne({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",Ns.compr(JSON.stringify(u.value.features)));else{let S=Ns.decompr(localStorage.getItem("feature_flags"));S=Object.assign(u.value.features,JSON.parse(S));for(let k in S)typeof u.value?.env_override[t][k]<"u"&&(S[k]=u.value.env_override[t][k]);localStorage.setItem("feature_flags",Ns.compr(JSON.stringify(u.value.features=S)))}},f=()=>{const S=document.querySelector(a);if(S){const k=S.dataset;for(let T in k){const O=T.replace(/^sync/,""),D=Object.keys(u.value.features).find(V=>V.toLowerCase()===O.toLowerCase());if(D){const V=u.value.features[D]?.state;V&&(k[T]=V)}}}},g=(S="Theme",k={state:"dark"})=>{const T=document.querySelector(a);T&&(T.dataset["sync"+S]=k.state)},_=(S="Theme",k={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&k){let O=JSON.parse(Ns.decompr(localStorage.getItem("feature_flags")));O[S]={state:k.state},localStorage.setItem("feature_flags",Ns.compr(JSON.stringify(u.value.features=O))),g(S,k),de.publish("APP.ROUTE_SYNC",`{ "${S}": ${JSON.stringify(k)}}`)}},y=S=>{const k=u.value?.features?.Lang?.state;let T=b.value.microcopy.language.filter(O=>O.code==k)[0]?.copy;if(T=T.filter(O=>O[0]==S)[0],T)return T[1]},m=(S=":version")=>{let[k,T,O]=S.split(" ");switch(k=k.toLocaleLowerCase(),O=="true"&&(O=!0),O=="false"&&(O=!1),k){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":_(T,{state:O});break;case":route":neodigmToast.q(`route ${T}`,"brand"),e.push({name:T});break}};p(),f();const h=es({designer:"guided_tour",notifications:{unread:0}}),b=Ne({sports:Ge,microcopy:Wm.getMeta()}),v=ge(()=>d.value.session_user.fname+" "+d.value.session_user.lname),w=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},x=()=>{localStorage.removeItem("session_user")};function P(S){return d.value.session_user.authenticated=!0,d.value.session_user.token=S,w(),d.value.session_app.route="chat"}function R(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",x(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:h,appMeta:b,appSession:d,clearSessionUser:x,concatFirstLast:v,coreBetSlip:o,coreTourn:r,doCLI:m,doLogin:P,doLogout:R,hierTopics:n,i18n:y,pushCoreTourn:l,pushcoreBetSlip:i,saveSessionUser:w,setFeaturePersistPub:_}}),Yr="mvvBrand",xg=400,sa={scanIntervalId:null,processedElements:new WeakSet,init(){const t=new URLSearchParams(window.location.search).get("brand");t!==null&&(t==="null"||t===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(t)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(e){if(e)try{localStorage.setItem(Yr,e),console.log("[BrandManager] Brand token set:",e)}catch(t){console.error("[BrandManager] Failed to set brand:",t)}},getBrand(){try{return localStorage.getItem(Yr)}catch(e){return console.error("[BrandManager] Failed to get brand:",e),null}},clearBrand(){localStorage.removeItem(Yr),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const e=this.getBrand();return e?{"x-m5t-brand":e}:{}},hydrateBrandElements(){const e=this.getBrand();if(!e)return;const t=document.querySelectorAll("[data-mvv-brand]");t.forEach(s=>{s.getAttribute("data-mvv-brand")==="token"&&(s.textContent=e)}),t.length>0&&console.log(`[BrandManager] Hydrated ${t.length} brand elements with token:`,e)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},xg),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const e=this.getBrand();if(!e)return;const t=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{t.push(s)}),document.querySelectorAll("*").forEach(s=>{s.shadowRoot&&s.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(a=>{t.push(a)})}),t.forEach(s=>{if(this.processedElements.has(s))return;const a=s.getAttribute("src");if(a&&!a.includes("&brand=")){const n=`${a}&brand=${e}`;s.setAttribute("src",n),this.processedElements.add(s),console.log("[BrandManager] Updated src for element:",s)}})}},Mo="bma_anon_session",ri="bma_pending_join_intent",Tg=1440*60*1e3,Ea=Object.freeze({AUTHED:"authed",PREVIEW:"preview",DENIED:"denied"});function Sg(e,t={}){return(typeof mvvLegit<"u"&&mvvLegit&&typeof mvvLegit.isRouteAllowed=="function"?mvvLegit.isRouteAllowed(e):!1)?Ea.AUTHED:t?.previewAllowed?Ea.PREVIEW:Ea.DENIED}function vl(e){const t=typeof neodigmOpt<"u"&&neodigmOpt?.ROOT||null;t&&(t.dataset.authTier=e)}function Mu(){let e=sessionStorage.getItem(Mo);return e||(e=`anon_${typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}`,sessionStorage.setItem(Mo,e)),e}function Eg(){sessionStorage.removeItem(Mo)}function kg(e,t=null){const s={tournamentGuid:e,joinSlug:t||null,sessionId:Mu(),capturedAt:Date.now()};return sessionStorage.setItem(ri,JSON.stringify(s)),s}function Pg(){const e=sessionStorage.getItem(ri);if(!e)return null;try{const t=JSON.parse(e);return!t?.capturedAt||Date.now()-t.capturedAt>Tg?(Lo(),null):t}catch{return Lo(),null}}function Lo(){sessionStorage.removeItem(ri)}function Ag(){const e=Pg();return Eg(),Lo(),e}const Xe=class Xe{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Xe.setTJO(null),location.reload()}static async doSignin(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",a)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),s&&s(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",a)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),s&&s(r)}}static async checkUserName(t,s=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return s&&s(r),r}static async resetHash(t,s,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const n=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,r={method:"POST",body:JSON.stringify({guid:t,hash:n}),headers:Xe.genHeaders()},l=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();a&&a(l)}static genHeaders(t={}){let s={};s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company);const a=sa.getBrandHeader();return Object.assign(s,a),s}static async fetchTournaments(t=null){const s={method:"GET",headers:Xe.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(n),n}static async fetchTournamentPreview(t,s=null,a=null){typeof s=="function"&&(a=s,s=null);const n={"Content-Type":"application/json","X-Bma-Anon-Session":Mu()};Object.assign(n,sa.getBrandHeader());let r=`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/preview`;s&&(r+=`?s=${encodeURIComponent(s)}`);const l=await fetch(r,{method:"GET",headers:n});let i=null;try{i=await l.json()}catch{i=null}const c={data:i,status:l.status,ok:l.ok};return a&&a(c),c}static async createTournament(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:Xe.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament`,a);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return s&&s(o),o}static async fetchBetSlips(t,s="",a="",n=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(r+=`/${s}`),s&&a&&(r+=`/${a}`);const o={method:"GET",headers:Xe.genHeaders()},i=await(await fetch(this.API_baseURI+r,o)).json();return n&&n(i),i}static async fetchLeaderboard(t,s="",a=null){let n=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(n+=`&user=${s}`);const r={method:"GET",headers:Xe.genHeaders()},l=await(await fetch(this.API_baseURI+n,r)).json();return a&&a(l),l}static async fetchGlobalLeaderboard(t=null){const s=`/m5t/${this.API_ver}/coreLeaderboard`,a={method:"GET",headers:Xe.genHeaders()},r=await(await fetch(this.API_baseURI+s,a)).json();return t&&t(r),r}static async fetchAllTimeLeaderboard(t="ALL",s=100,a="td",n=null){const r=new URLSearchParams({sport:t,limit:String(s),sort:a}),o=`/m5t/${this.API_ver}/coreLeaderboard/alltime?${r.toString()}`,l={method:"GET",headers:Xe.genHeaders()},c=await(await fetch(this.API_baseURI+o,l)).json();return n&&n(c),c}static async postBetSlips(t,s=null){const a=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(l=>l.json())}),n=await Promise.all(a);return s&&s(n),n}static async fetchPromotions(t=null){const s={method:"GET",headers:Xe.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",s)).json();return t&&t(n),n}};Xe.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Xe.API_ver="v5",Xe.jsState={},Xe.jsMeta={},Xe.jsTJO=null;let $e=Xe;const aa={shootConfetti(){if(typeof confetti=="function"){let a=function(n,r){confetti({...t,...r,particleCount:Math.floor(e*n)})};var s=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const a in t)e[a]&&t[a]!=e[a]&&(s[a]=e[a]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},Ts=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s},Cg={class:"auth-page"},Og={__name:"splash_route",setup(e){const t=ct(),s=Ba();return xe(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,n)=>(ue(),pe("div",Cg,[...n[0]||(n[0]=[_t('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),C("div",{class:"auth-page-right"},[C("div",{class:"auth-card splash-content"},[C("p",{class:"splash-message"},"Loading Tournaments..."),C("br"),C("br"),C("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[C("div")])])],-1)])]))}},yl=Ts(Og,[["__scopeId","data-v-994bad53"]]);class $g{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(s=>{let a=!1;for(const n of s){if(n.attributeName==="data-sync-theme"){const r=t.getAttribute("data-sync-theme")||"dark";r!==this._theme&&(this._theme=r,a=!0)}if(n.attributeName==="data-sync-motif"){const r=t.getAttribute("data-sync-motif")||"brand";r!==this._motif&&(this._motif=r,a=!0)}if(n.attributeName==="data-sync-lang"){const r=t.getAttribute("data-sync-lang")||"en";r!==this._lang&&(this._lang=r,a=!0)}}a&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(s){console.warn("[BMAThemeResolver] Listener error:",s)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const Me=new $g().init(),Lu={mobile:"(orientation: portrait), (max-width: 768px)"};function He(){return`
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
  `}class Mg extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=Me.theme;let s=this.getAttribute("data-sport-group")||"Soccer",a,n;s==="Multi"?(a="Multi",n=`var(--sport-icon__Multi--${t})`):(a=s.replaceAll(" ","_"),n=`var(--sport-icon__${a}--${t})`),this.shadowRoot.innerHTML=`
      <style>
        ${He()}

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
    `}}customElements.define("bma-sport-icon",Mg);class Lg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Me.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,s={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),n=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(n){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),l=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:l.title,sportDescription:l.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,a){s!==a&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const s=t.scrollHeight-t.clientHeight,a=this.getAttribute("data-compact")==="true";!a&&s>2?this.setAttribute("data-compact","true"):a&&s<-10&&this.removeAttribute("data-compact")})}getTheme(){return Me.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(n=>Array.isArray(n))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(n=>Array.isArray(n))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const a=s.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:s.find(r=>Array.isArray(r))?.length||0,max:parseInt(a?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const n=JSON.parse(a);if(!Array.isArray(n))return null;const r=n.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===s&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[s]&&o[s].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=Ge.find(a=>a.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(a=>{const n=a.title||"Match";let r="TBD";if(a.scheduled_at)try{r=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=a.scheduled_at}return`  ${n} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let a="";for(let n=0;n<s;n++){const r=t[n].key,o=Ge.find(i=>i.key===r),l=o?o.group:"default";a+=`<bma-sport-icon sport="${r}" data-sport-group="${l}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),s=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${He()}
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
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",Lg);class Rg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".stake-input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,a){if(s!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?aa.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}get potentialProfit(){const t=parseFloat(this.stake)||0,a=(parseFloat(this.payout)||0)-t;return a>0?a.toFixed(2):"0.00"}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".hero-value");t&&(t.textContent=this.potentialProfit)}setupEventListeners(){const t=this.shadowRoot.querySelector(".close-btn");t&&t.addEventListener("click",()=>{const a={teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")};de.publish("COREBETSLIP.CLOSE",JSON.stringify({...a,timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:a}))});const s=this.shadowRoot.querySelector(".stake-input");s&&s.addEventListener("input",a=>{this.setAttribute("data-stake",a.target.value)})}render(){const t=parseInt(this.odds,10),s=Number.isFinite(t)?t>0?`+${t}`:`${t}`:this.odds,a=this.stake!=="0"?this.stake:"",n=(this.type||"").toUpperCase();this.shadowRoot.innerHTML=`
      <style>
        ${He()}

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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",Rg);class Dg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Me.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=Ge.find(a=>a.key===t);return s?s.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing tournament tags:",s),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const a=this.scoreboard;if(!a||!a.time_remaining)return!1;const n=a.time_remaining.toLowerCase();return n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const s=this.shadowRoot?.querySelector(".countdown");s&&(s.textContent=t)}attributeChangedCallback(t,s,a){s!==a&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const a=s-t;if(a<=0)return"";const n=Math.floor(a/(1e3*60*60)),r=Math.floor(a%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const a=s.time_remaining.toLowerCase();if(a==="final")return{type:"final",text:"Final",color:"#969696"};if(a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")){const n=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,r=s.period!==void 0&&s.period!==null&&s.period!==0;if(n||r)return{type:"live",text:s.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let a=this.scheduledAt;if(!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a=a+"Z"),new Date(a)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,a,n,r){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const l=o.classList.contains("btn--active"),i={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:a,price:n,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:i,isActive:l,button:o}}))}renderButton(t,s,a,n,r=!1){if(!a)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const o=a.price,l=a.point;let i="";return t==="spread"?i=`${l>0?`+${l}`:l}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?i=o:t==="total"&&(i=`${n}${l}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${r?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${o}"
                    ${l?`data-point="${l}"`:""}
                    ${r?'data-disabled="true"':""}>
            ${i}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const s=this.isMatchInProgressLocked(),a=this.isDisabled||s,n=this.getGameStatus(),r=this.scoreboard,o=r?.home_score||0,l=r?.away_score||0,i=n?.type==="live"||n?.type==="final",c=parseInt(o),d=parseInt(l),u=n?.type==="final",p=n?.type==="live",f=i&&u&&c>d,g=i&&u&&d>c,_=i&&p&&c>d,y=i&&p&&d>c,m=t?.spreads?.outcomes?.find(P=>P.name===this.homeTeam),h=t?.spreads?.outcomes?.find(P=>P.name===this.awayTeam),b=t?.h2h?.outcomes?.find(P=>P.name===this.homeTeam),v=t?.h2h?.outcomes?.find(P=>P.name===this.awayTeam),w=t?.totals?.outcomes?.find(P=>P.name==="Over"),x=t?.totals?.outcomes?.find(P=>P.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
                            ${i?`<span class="team-score ${_?"score--leading":""} ${y?"score--trailing":""}">${o}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","home",m,null,a)}
                                ${this.renderButton("money","home",b,null,a)}
                                ${this.renderButton("total","under",x,"U",a)}
                            </div>
                        `}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${g?"team--winner":""} ${f?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${i?`<span class="team-score ${y?"score--leading":""} ${_?"score--trailing":""}">${l}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","away",h,null,a)}
                                ${this.renderButton("money","away",v,null,a)}
                                ${this.renderButton("total","over",w,"O",a)}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(P=>{const R=P.dataset.betType,S=P.dataset.team,k=P.dataset.price,T=P.dataset.point||null;P.addEventListener("click",O=>this.handleButtonClick(O,R,S,k,T))})}}customElements.define("bma-bet-match-card",Dg);const Ng='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',Ig='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>';class Bg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch{return null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=Ge.find(s=>s.key===this.sportId);return t?t.group:""}get theme(){return Me.theme}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||""}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let s=this.scheduledAt;!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s+="Z");const a=new Date(s)-t;if(a<=0)return"";const n=Math.floor(a/36e5),r=Math.floor(a%36e5/6e4);return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let l=this.scheduledAt;!l.includes("Z")&&!l.match(/[+-]\d{2}:\d{2}$/)&&(l+="Z"),a=new Date(l)<new Date(Date.now()-300*1e3)}let n,r;if(t?.time_remaining){const l=t.time_remaining;l==="Final"?(n="FINAL",r="Final"):l==="In Progress"?(n="LIVE",r="In Progress"):(n="LIVE",r=l)}else s&&a?(n="FINAL",r="Final"):(n="UPCOMING",r="Upcoming");const o=n==="UPCOMING"?this.getCountdownText():"";return{status:n,timeRemaining:r,countdown:o}}render(){const{status:t,timeRemaining:s,countdown:a}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,r=this.scheduledAt?aa.formatDateLocal(this.scheduledAt):"",o=this.getSportAbbr(),l=t==="LIVE"?"live":t==="FINAL"?"final":"upcoming",i=t==="LIVE"?"Live":t==="FINAL"?"Final":"Upcoming",c=t==="FINAL"?Ig:Ng,d=parseInt(this.homeScore),u=parseInt(this.awayScore),p=n&&t==="FINAL"&&d>u,f=n&&t==="FINAL"&&u>d;this.shadowRoot.innerHTML=`
      <style>
        ${He()}

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
    `}}customElements.define("bma-match-status",Bg);const Fg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',zg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',Hg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',jg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class ms extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Me.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){s!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){ms.currentlyExpanded&&ms.currentlyExpanded!==this&&ms.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),s.classList.add("expanded"),ms.currentlyExpanded=this):(t.classList.remove("open"),s.classList.remove("expanded"),ms.currentlyExpanded===this&&(ms.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),s&&s.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",s=>{s.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let s=0,a=0,n=0,r=0,o=0;return t.forEach(l=>{const i=l.bet||[];if(i.length===0)return;const c=i[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?s++:a++:(n++,r+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:s,losses:a,pending:n,total:s+a+n,pendingStakes:r,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches,a=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(i=>{const c=i.bet||[];if(c.length===0)return!1;if(a)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(n.length===0){if(!a){const i=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);if(i>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${i} pending bet${i!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const r={};s.forEach(i=>{const c=i.guid||i.id||i.odds_id;c&&(r[c]=i)});const o={};n.forEach(i=>{const c=i.coreMatches__guid||i.match_guid||i.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=r[c];if(d){o[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=Ge.find(f=>f.key===u);o[c].sportKey=p?.group||"default"}o[c].bets.push(i)});let l="";if(Object.keys(o).forEach(i=>{const c=o[i],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;l+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const g=f.bet||[];if(g.length===0)return;const _=g[0];Object.keys(_).filter(m=>m!=="short_title").forEach(m=>{const h=_[m];if(!h||typeof h!="object")return;const b=(h.type||"").toUpperCase(),v=parseFloat(h.stake||h.wager||0),w=parseFloat(h.payout||0),x=parseInt(h.odds,10),P=Number.isFinite(x)?x>0?`+${x}`:`${x}`:"—",R=h.reconciled===!0,S=w-v,k=.01;let T,O,D,V,Q;R?w>v+k?(T="won",O="Won",D=zg,V=`+TD$ ${S.toFixed(2)}`,Q="Profit"):w<v-k?(T="lost",O="Lost",D=Hg,V=`-TD$ ${v.toFixed(2)}`,Q="Lost"):(T="push",O="Push",D=jg,V=`TD$ ${v.toFixed(2)}`,Q="Returned"):(T="pending",O="Pending",D=Fg,V=S>0?`+TD$ ${S.toFixed(2)}`:"TD$ 0.00",Q="To win"),l+=`<div class="bet-item ${T}">
                        <div class="bet-item__pill">
                            <span class="bet-item__pill-dot"></span>
                            <span class="bet-item__pill-icon">${D}</span>
                            <span class="bet-item__pill-label">${O}</span>
                        </div>
                        <div class="bet-item__body">
                            <div class="bet-item__middle">
                                <div class="bet-item__team">${m}</div>
                                <div class="bet-item__odds">${P}</div>
                                <div class="bet-item__meta">
                                    <div class="bet-item__type">${b}</div>
                                    <div class="bet-item__stake">TD$ ${v.toFixed(2)} stake</div>
                                </div>
                            </div>
                            <div class="bet-item__footer">
                                <div class="bet-item__hero">${V}</div>
                                <div class="bet-item__sublabel">${Q}</div>
                            </div>
                        </div>
                    </div>`})})}),!a){const i=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);i>0&&(l+=`<p class="hidden-bets-note">+ ${i} pending bet${i!==1?"s":""} hidden until settled</p>`)}return l}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",s=this.unqualified?"leaderboard-card--unqualified":"",a=parseFloat(this.startingDollars||0),n=this.combinedBetslips;let r=0,o=0,l=0;n.forEach(h=>{const b=h.bet||[];if(b.length===0)return;const v=b[0];Object.keys(v).filter(w=>w!=="short_title").forEach(w=>{const x=v[w];if(!x||typeof x!="object")return;const P=parseFloat(x.stake||0),R=parseFloat(x.payout||0);r+=P,x.reconciled===!0?l+=R:o+=P})});const i=Math.max(0,a-r),c=h=>Math.abs(h)<.01?0:h,d=r-o,u=c(a-d+l),p=u,f=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",g=c(p-a),_=g>=0?"+":"",y=g>0?"profit-up":g<0?"profit-down":"profit-even",m=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
                        <span class="dollars-amount">TD$ ${u.toFixed(2)}</span>
                    </div>

                    <span class="expand-icon"></span>
                </div>

                <div class="kpi-strip">
                    <div class="kpi-card">
                        <div class="kpi-card__label">Gain / Loss</div>
                        <div class="kpi-card__value ${y}">${_}TD$ ${Math.abs(g).toFixed(2)}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Bet Record</div>
                        <div class="kpi-card__value">${m.wins}W - ${m.losses}L</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">At Risk</div>
                        <div class="kpi-card__value ${m.pending>0?"kpi-card__value--risk":"kpi-card__value--none"}">${m.pending>0?"TD$ "+m.pendingStakes.toFixed(0):"TD$ 0"}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Max Win</div>
                        <div class="kpi-card__value ${m.pending>0?"kpi-card__value--max-win":"kpi-card__value--none"}">${m.pending>0?"TD$ "+m.pendingMaxPayout.toFixed(0):"TD$ 0"}</div>
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
        `}}customElements.define("bma-leaderboard-card",ms);class Ru{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:a}=t.Bet,{home_team_id:n,home_team_score:r,away_team_id:o,away_team_score:l}=t.Match,i=s?.toUpperCase()||"",c=parseFloat(r)||0,d=parseFloat(l)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${i} bet:`,{home:`${n} (${c})`,away:`${o} (${d})`,scope:a}),i){case"MONEY":return this._evaluateMoneyline(a.team_id,n,o,c,d);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,n,o,c,d);case"TOTAL":return this._evaluateTotal(a.over,a.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",i),!1}}static _evaluateMoneyline(t,s,a,n,r){const o=t===s,l=t===a;if(!o&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const i=n>r,c=r>n;if(n===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&i||l&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,s,a,n,r,o){const l=t===a,i=t===n;if(!l&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let d=r,u=o;l?d=r+c:u=o+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const _=l&&p||i&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${_?"WON":"LOST"}`),_}static _evaluateTotal(t,s,a,n){const r=a+n,o=t&&t!=="";if(!o&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const i=parseFloat(o?t:s);if(r===i)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=r>i,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${i} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<i,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${i} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:a,stake:n}=t.Bet,r=s?.toUpperCase()||"",o=parseFloat(a)||0,l=parseFloat(n)||0;if(l<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",l),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let i=0;switch(r){case"SPREAD":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:l,payout:i});break;case"MONEY":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:l,payout:i});break;case"TOTAL":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:l,payout:i});break;case"PROP":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:l,payout:i});break;case"PARLAY":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:l,payout:i});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),i=0;break}return parseFloat(i.toFixed(2))}static calcAmericanOddsPayout(t,s){let a=0;return t>0?a=s*(t/100):t<0?a=s/(Math.abs(t)/100):a=0,s+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function wl(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function oi(e={},t={}){const s=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>s.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:wl(t[a])&&wl(e[a])&&Object.keys(t[a]).length>0&&oi(e[a],t[a])})}const Du={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Ft(){const e=typeof document<"u"?document:{};return oi(e,Du),e}const Ug={document:Du,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function dt(){const e=typeof window<"u"?window:{};return oi(e,Ug),e}function qg(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function Vg(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function Nu(e,t=0){return setTimeout(e,t)}function Zn(){return Date.now()}function Gg(e){const t=dt();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function Kg(e,t="x"){const s=dt();let a,n,r;const o=Gg(e);return s.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(l=>l.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix(n==="none"?"":n)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=r.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?n=r.m41:a.length===16?n=parseFloat(a[12]):n=parseFloat(a[4])),t==="y"&&(s.WebKitCSSMatrix?n=r.m42:a.length===16?n=parseFloat(a[13]):n=parseFloat(a[5])),n||0}function Ga(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Yg(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function mt(...e){const t=Object(e[0]);for(let s=1;s<e.length;s+=1){const a=e[s];if(a!=null&&!Yg(a)){const n=Object.keys(Object(a)).filter(r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype");for(let r=0,o=n.length;r<o;r+=1){const l=n[r],i=Object.getOwnPropertyDescriptor(a,l);i!==void 0&&i.enumerable&&(Ga(t[l])&&Ga(a[l])?a[l].__swiper__?t[l]=a[l]:mt(t[l],a[l]):!Ga(t[l])&&Ga(a[l])?(t[l]={},a[l].__swiper__?t[l]=a[l]:mt(t[l],a[l])):t[l]=a[l])}}}return t}function Us(e,t,s){e.style.setProperty(t,s)}function Iu({swiper:e,targetPosition:t,side:s}){const a=dt(),n=-e.translate;let r=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const i=t>n?"next":"prev",c=(u,p)=>i==="next"&&u>=p||i==="prev"&&u<=p,d=()=>{o=new Date().getTime(),r===null&&(r=o);const u=Math.max(Math.min((o-r)/l,1),0),p=.5-Math.cos(u*Math.PI)/2;let f=n+p*(t-n);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[s]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:f})}),a.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=a.requestAnimationFrame(d)};d()}function It(e,t=""){const s=dt(),a=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(n=>n.matches(t)):a}function Wg(e,t){const s=[t];for(;s.length>0;){const a=s.shift();if(e===a)return!0;s.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function Jg(e,t){const s=dt();let a=t.contains(e);return!a&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=Wg(e,t))),a}function er(e){try{console.warn(e);return}catch{}}function tr(e,t=[]){const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:qg(t)),s}function Xg(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function Qg(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function gs(e,t){return dt().getComputedStyle(e,null).getPropertyValue(t)}function sr(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function Bu(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function Ro(e,t,s){const a=dt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function qt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function xl(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:s=>s}).createHTML(t):e.innerHTML=t}let Wr;function Zg(){const e=dt(),t=Ft();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Fu(){return Wr||(Wr=Zg()),Wr}let Jr;function eb({userAgent:e}={}){const t=Fu(),s=dt(),a=s.navigator.platform,n=e||s.navigator.userAgent,r={ios:!1,android:!1},o=s.screen.width,l=s.screen.height,i=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=n.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=a==="Win32";let f=a==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&g.indexOf(`${o}x${l}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),i&&!p&&(r.os="android",r.android=!0),(c||u||d)&&(r.os="ios",r.ios=!0),r}function zu(e={}){return Jr||(Jr=eb(e)),Jr}let Xr;function tb(){const e=dt(),t=zu();let s=!1;function a(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(a()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[i,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));s=i<16||i===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=a(),o=r||n&&t.ios;return{isSafari:s||r,needPerspectiveFix:s,need3dFix:o,isWebView:n}}function Hu(){return Xr||(Xr=tb()),Xr}function sb({swiper:e,on:t,emit:s}){const a=dt();let n=null,r=null;const o=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(d=>{r=a.requestAnimationFrame(()=>{const{width:u,height:p}=e;let f=u,g=p;d.forEach(({contentBoxSize:_,contentRect:y,target:m})=>{m&&m!==e.el||(f=y?y.width:(_[0]||_).inlineSize,g=y?y.height:(_[0]||_).blockSize)}),(f!==u||g!==p)&&o()})}),n.observe(e.el))},i=()=>{r&&a.cancelAnimationFrame(r),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof a.ResizeObserver<"u"){l();return}a.addEventListener("resize",o),a.addEventListener("orientationchange",c)}),t("destroy",()=>{i(),a.removeEventListener("resize",o),a.removeEventListener("orientationchange",c)})}function ab({swiper:e,extendParams:t,on:s,emit:a}){const n=[],r=dt(),o=(c,d={})=>{const u=r.MutationObserver||r.WebkitMutationObserver,p=new u(f=>{if(e.__preventObserver__)return;if(f.length===1){a("observerUpdate",f[0]);return}const g=function(){a("observerUpdate",f[0])};r.requestAnimationFrame?r.requestAnimationFrame(g):r.setTimeout(g,0)});p.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),n.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=Bu(e.hostEl);for(let d=0;d<c.length;d+=1)o(c[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},i=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",l),s("destroy",i)}var nb={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const n=s?"unshift":"push";return e.split(" ").forEach(r=>{a.eventsListeners[r]||(a.eventsListeners[r]=[]),a.eventsListeners[r][n](t)}),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function n(...r){a.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,t.apply(a,r)}return n.__emitterProxy=t,a.on(e,n,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].forEach((n,r)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&s.eventsListeners[a].splice(r,1)})}),s},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let s,a,n;return typeof e[0]=="string"||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),n=t):(s=e[0].events,a=e[0].data,n=e[0].context||t),a.unshift(n),(Array.isArray(s)?s:s.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(n,[o,...a])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(n,a)})}),t}};function rb(){const e=this;let t,s;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=a.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(gs(a,"padding-left")||0,10)-parseInt(gs(a,"padding-right")||0,10),s=s-parseInt(gs(a,"padding-top")||0,10)-parseInt(gs(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function ob(){const e=this;function t(k,T){return parseFloat(k.getPropertyValue(e.getDirectionLabel(T))||0)}const s=e.params,{wrapperEl:a,slidesEl:n,rtlTranslate:r,wrongRTL:o}=e,l=e.virtual&&s.virtual.enabled,i=l?e.virtual.slides.length:e.slides.length,c=It(n,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:c.length;let u=[];const p=[],f=[];let g=s.slidesOffsetBefore;typeof g=="function"&&(g=s.slidesOffsetBefore.call(e));let _=s.slidesOffsetAfter;typeof _=="function"&&(_=s.slidesOffsetAfter.call(e));const y=e.snapGrid.length,m=e.slidesGrid.length,h=e.size-g-_;let b=s.spaceBetween,v=-g,w=0,x=0;if(typeof h>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*h:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-g-_,c.forEach(k=>{r?k.style.marginLeft="":k.style.marginRight="",k.style.marginBottom="",k.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(Us(a,"--swiper-centered-offset-before",""),Us(a,"--swiper-centered-offset-after","")),s.cssMode&&(Us(a,"--swiper-slides-offset-before",`${g}px`),Us(a,"--swiper-slides-offset-after",`${_}px`));const P=s.grid&&s.grid.rows>1&&e.grid;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let R;const S=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(k=>typeof s.breakpoints[k].slidesPerView<"u").length>0;for(let k=0;k<d;k+=1){R=0;const T=c[k];if(!(T&&(P&&e.grid.updateSlide(k,T,c),gs(T,"display")==="none"))){if(l&&s.slidesPerView==="auto")s.virtual.slidesPerViewAutoSlideSize&&(R=s.virtual.slidesPerViewAutoSlideSize),R&&T&&(s.roundLengths&&(R=Math.floor(R)),T.style[e.getDirectionLabel("width")]=`${R}px`);else if(s.slidesPerView==="auto"){S&&(T.style[e.getDirectionLabel("width")]="");const O=getComputedStyle(T),D=T.style.transform,V=T.style.webkitTransform;if(D&&(T.style.transform="none"),V&&(T.style.webkitTransform="none"),s.roundLengths)R=e.isHorizontal()?Ro(T,"width"):Ro(T,"height");else{const Q=t(O,"width"),X=t(O,"padding-left"),Z=t(O,"padding-right"),K=t(O,"margin-left"),ie=t(O,"margin-right"),J=O.getPropertyValue("box-sizing");if(J&&J==="border-box")R=Q+K+ie;else{const{clientWidth:z,offsetWidth:ee}=T;R=Q+X+Z+K+ie+(ee-z)}}D&&(T.style.transform=D),V&&(T.style.webkitTransform=V),s.roundLengths&&(R=Math.floor(R))}else R=(h-(s.slidesPerView-1)*b)/s.slidesPerView,s.roundLengths&&(R=Math.floor(R)),T&&(T.style[e.getDirectionLabel("width")]=`${R}px`);T&&(T.swiperSlideSize=R),f.push(R),s.centeredSlides?(v=v+R/2+w/2+b,w===0&&k!==0&&(v=v-h/2-b),k===0&&(v=v-h/2-b),Math.abs(v)<1/1e3&&(v=0),s.roundLengths&&(v=Math.floor(v)),x%s.slidesPerGroup===0&&u.push(v),p.push(v)):(s.roundLengths&&(v=Math.floor(v)),(x-Math.min(e.params.slidesPerGroupSkip,x))%e.params.slidesPerGroup===0&&u.push(v),p.push(v),v=v+R+b),e.virtualSize+=R+b,w=R,x+=1}}if(e.virtualSize=Math.max(e.virtualSize,h)+_,r&&o&&(s.effect==="slide"||s.effect==="coverflow")&&(a.style.width=`${e.virtualSize+b}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),P&&e.grid.updateWrapperSize(R,u),!s.centeredSlides){const k=s.slidesPerView!=="auto"&&s.slidesPerView%1!==0,T=s.snapToSlideEdge&&!s.loop&&(s.slidesPerView==="auto"||k);let O=u.length;if(T){let V;if(s.slidesPerView==="auto"){V=1;let Q=0;for(let X=f.length-1;X>=0&&(Q+=f[X]+(X<f.length-1?b:0),Q<=h);X-=1)V=f.length-X}else V=Math.floor(s.slidesPerView);O=Math.max(d-V,0)}const D=[];for(let V=0;V<u.length;V+=1){let Q=u[V];s.roundLengths&&(Q=Math.floor(Q)),T?V<=O&&D.push(Q):u[V]<=e.virtualSize-h&&D.push(Q)}u=D,Math.floor(e.virtualSize-h)-Math.floor(u[u.length-1])>1&&(T||u.push(e.virtualSize-h))}if(l&&s.loop){const k=f[0]+b;if(s.slidesPerGroup>1){const T=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),O=k*s.slidesPerGroup;for(let D=0;D<T;D+=1)u.push(u[u.length-1]+O)}for(let T=0;T<e.virtual.slidesBefore+e.virtual.slidesAfter;T+=1)s.slidesPerGroup===1&&u.push(u[u.length-1]+k),p.push(p[p.length-1]+k),e.virtualSize+=k}if(u.length===0&&(u=[0]),b!==0){const k=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");c.filter((T,O)=>!s.cssMode||s.loop?!0:O!==c.length-1).forEach(T=>{T.style[k]=`${b}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let k=0;f.forEach(O=>{k+=O+(b||0)}),k-=b;const T=k>h?k-h:0;u=u.map(O=>O<=0?-g:O>T?T+_:O)}if(s.centerInsufficientSlides){let k=0;if(f.forEach(T=>{k+=T+(b||0)}),k-=b,k<h){const T=(h-k)/2;u.forEach((O,D)=>{u[D]=O-T}),p.forEach((O,D)=>{p[D]=O+T})}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:p,slidesSizesGrid:f}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){Us(a,"--swiper-centered-offset-before",`${-u[0]}px`),Us(a,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const k=-e.snapGrid[0],T=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(O=>O+k),e.slidesGrid=e.slidesGrid.map(O=>O+T)}if(d!==i&&e.emit("slidesLengthChange"),u.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==m&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const k=`${s.containerModifierClass}backface-hidden`,T=e.el.classList.contains(k);d<=s.maxBackfaceHiddenSlides?T||e.el.classList.add(k):T&&e.el.classList.remove(k)}}function ib(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let n=0,r;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>a?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{s.push(l)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const l=t.activeIndex+r;if(l>t.slides.length&&!a)break;s.push(o(l))}else s.push(o(t.activeIndex));for(r=0;r<s.length;r+=1)if(typeof s[r]<"u"){const l=s[r].offsetHeight;n=l>n?l:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function lb(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()}const Tl=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function cb(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:n,snapGrid:r}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;n&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=s.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let i=0;i<a.length;i+=1){const c=a[i];let d=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const u=(o+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),p=(o-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),f=-(o-d),g=f+t.slidesSizesGrid[i],_=f>=0&&f<=t.size-t.slidesSizesGrid[i],y=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;y&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(i)),Tl(c,y,s.slideVisibleClass),Tl(c,_,s.slideFullyVisibleClass),c.progress=n?-u:u,c.originalProgress=n?-p:p}}function db(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:r,isEnd:o,progressLoop:l}=t;const i=r,c=o;if(a===0)n=0,r=!0,o=!0;else{n=(e-t.minTranslate())/a;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;r=d||n<=0,o=u||n>=1,d&&(n=0),u&&(n=1)}if(s.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],g=t.slidesGrid[t.slidesGrid.length-1],_=Math.abs(e);_>=p?l=(_-p)/g:l=(_+g-f)/g,l>1&&(l-=1)}Object.assign(t,{progress:n,progressLoop:l,isBeginning:r,isEnd:o}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!i&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(i&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",n)}const Qr=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function ub(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:n}=e,r=e.virtual&&s.virtual.enabled,o=e.grid&&s.grid&&s.grid.rows>1,l=u=>It(a,`.${s.slideClass}${u}, swiper-slide${u}`)[0];let i,c,d;if(r)if(s.loop){let u=n-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),i=l(`[data-swiper-slide-index="${u}"]`)}else i=l(`[data-swiper-slide-index="${n}"]`);else o?(i=t.find(u=>u.column===n),d=t.find(u=>u.column===n+1),c=t.find(u=>u.column===n-1)):i=t[n];i&&(o||(d=Qg(i,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!d&&(d=t[0]),c=Xg(i,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{Qr(u,u===i,s.slideActiveClass),Qr(u,u===d,s.slideNextClass),Qr(u,u===c,s.slidePrevClass)}),e.emitSlidesClasses()}const Bn=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(s());if(a){let n=a.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(a.shadowRoot?n=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(n=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},Zr=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Do=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=n,l=[o-t];l.push(...Array.from({length:t}).map((i,c)=>o+a+c)),e.slides.forEach((i,c)=>{l.includes(i.column)&&Zr(e,c)});return}const r=n+a-1;if(e.params.rewind||e.params.loop)for(let o=n-t;o<=r+t;o+=1){const l=(o%s+s)%s;(l<n||l>r)&&Zr(e,l)}else for(let o=Math.max(n-t,0);o<=Math.min(r+t,s-1);o+=1)o!==n&&(o>r||o<n)&&Zr(e,o)};function pb(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let n;for(let r=0;r<t.length;r+=1)typeof t[r+1]<"u"?a>=t[r]&&a<t[r+1]-(t[r+1]-t[r])/2?n=r:a>=t[r]&&a<t[r+1]&&(n=r+1):a>=t[r]&&(n=r);return s.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function fb(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:n,activeIndex:r,realIndex:o,snapIndex:l}=t;let i=e,c;const d=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof i>"u"&&(i=pb(t)),a.indexOf(s)>=0)c=a.indexOf(s);else{const f=Math.min(n.slidesPerGroupSkip,i);c=f+Math.floor((i-f)/n.slidesPerGroup)}if(c>=a.length&&(c=a.length-1),i===r&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(i===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(i);return}const u=t.grid&&n.grid&&n.grid.rows>1;let p;if(t.virtual&&n.virtual.enabled)n.loop?p=d(i):p=i;else if(u){const f=t.slides.find(_=>_.column===i);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),p=Math.floor(g/n.grid.rows)}else if(t.slides[i]){const f=t.slides[i].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=i}else p=i;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:r,activeIndex:i}),t.initialized&&Do(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function hb(e,t){const s=this,a=s.params;let n=e.closest(`.${a.slideClass}, swiper-slide`);!n&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!n&&l.matches&&l.matches(`.${a.slideClass}, swiper-slide`)&&(n=l)});let r=!1,o;if(n){for(let l=0;l<s.slides.length;l+=1)if(s.slides[l]===n){r=!0,o=l;break}}if(n&&r)s.clickedSlide=n,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=o;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}a.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var mb={updateSize:rb,updateSlides:ob,updateAutoHeight:ib,updateSlidesOffset:lb,updateSlidesProgress:cb,updateProgress:db,updateSlidesClasses:ub,updateActiveIndex:fb,updateClickedSlide:hb};function gb(e=this.isHorizontal()?"x":"y"){const t=this,{params:s,rtlTranslate:a,translate:n,wrapperEl:r}=t;if(s.virtualTranslate)return a?-n:n;if(s.cssMode)return n;let o=Kg(r,e);return o+=t.cssOverflowAdjustment(),a&&(o=-o),o||0}function bb(e,t){const s=this,{rtlTranslate:a,params:n,wrapperEl:r,progress:o}=s;let l=0,i=0;const c=0;s.isHorizontal()?l=a?-e:e:i=e,n.roundLengths&&(l=Math.floor(l),i=Math.floor(i)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?l:i,n.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-l:-i:n.virtualTranslate||(s.isHorizontal()?l-=s.cssOverflowAdjustment():i-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${i}px, ${c}px)`);let d;const u=s.maxTranslate()-s.minTranslate();u===0?d=0:d=(e-s.minTranslate())/u,d!==o&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function _b(){return-this.snapGrid[0]}function vb(){return-this.snapGrid[this.snapGrid.length-1]}function yb(e=0,t=this.params.speed,s=!0,a=!0,n){const r=this,{params:o,wrapperEl:l}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const i=r.minTranslate(),c=r.maxTranslate();let d;if(a&&e>i?d=i:a&&e<c?d=c:d=e,r.updateProgress(d),o.cssMode){const u=r.isHorizontal();if(t===0)l[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return Iu({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;l.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(r.setTransition(0),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var wb={getTranslate:gb,setTranslate:bb,minTranslate:_b,maxTranslate:vb,translateTo:yb};function xb(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function ju({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:n,previousIndex:r}=e;let o=s;o||(n>r?o="next":n<r?o="prev":o="reset"),e.emit(`transition${a}`),t&&o==="reset"?e.emit(`slideResetTransition${a}`):t&&n!==r&&(e.emit(`slideChangeTransition${a}`),o==="next"?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`))}function Tb(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),ju({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function Sb(e=!0,t){const s=this,{params:a}=s;s.animating=!1,!a.cssMode&&(s.setTransition(0),ju({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var Eb={setTransition:xb,transitionStart:Tb,transitionEnd:Sb};function kb(e=0,t,s=!0,a,n){typeof e=="string"&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:i,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:g}=r;if(!g&&!a&&!n||r.destroyed||r.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=r.params.speed);const _=Math.min(r.params.slidesPerGroupSkip,o);let y=_+Math.floor((o-_)/r.params.slidesPerGroup);y>=i.length&&(y=i.length-1);const m=-i[y];if(l.normalizeSlideIndex)for(let P=0;P<c.length;P+=1){const R=-Math.floor(m*100),S=Math.floor(c[P]*100),k=Math.floor(c[P+1]*100);typeof c[P+1]<"u"?R>=S&&R<k-(k-S)/2?o=P:R>=S&&R<k&&(o=P+1):R>=S&&(o=P)}if(r.initialized&&o!==u&&(!r.allowSlideNext&&(p?m>r.translate&&m>r.minTranslate():m<r.translate&&m<r.minTranslate())||!r.allowSlidePrev&&m>r.translate&&m>r.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(m);let h;o>u?h="next":o<u?h="prev":h="reset";const b=r.virtual&&r.params.virtual.enabled;if(!(b&&n)&&(p&&-m===r.translate||!p&&m===r.translate))return r.updateActiveIndex(o),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),l.effect!=="slide"&&r.setTranslate(m),h!=="reset"&&(r.transitionStart(s,h),r.transitionEnd(s,h)),!1;if(l.cssMode){const P=r.isHorizontal(),R=p?m:-m;if(t===0)b&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),b&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[P?"scrollLeft":"scrollTop"]=R})):f[P?"scrollLeft":"scrollTop"]=R,b&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return Iu({swiper:r,targetPosition:R,side:P?"left":"top"}),!0;f.scrollTo({[P?"left":"top"]:R,behavior:"smooth"})}return!0}const x=Hu().isSafari;return b&&!n&&x&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(t),r.setTranslate(m),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,h),t===0?r.transitionEnd(s,h):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(R){!r||r.destroyed||R.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,h))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Pb(e=0,t,s=!0,a){typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof t>"u"&&(t=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let o=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)o=o+n.virtual.slidesBefore;else{let l;if(r){const _=o*n.params.grid.rows;l=n.slides.find(y=>y.getAttribute("data-swiper-slide-index")*1===_).column}else l=n.getSlideIndexByData(o);const i=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:u}=n.params,p=c||!!d||!!u;let f=n.params.slidesPerView;f==="auto"?f=n.slidesPerViewDynamic():(f=Math.ceil(parseFloat(n.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let g=i-l<f;if(p&&(g=g||l<Math.ceil(f/2)),a&&p&&n.params.slidesPerView!=="auto"&&!r&&(g=!1),g){const _=p?l<n.activeIndex?"prev":"next":l-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:_,slideTo:!0,activeSlideIndex:_==="next"?l+1:l-i+1,slideRealIndex:_==="next"?n.realIndex:void 0})}if(r){const _=o*n.params.grid.rows;o=n.slides.find(y=>y.getAttribute("data-swiper-slide-index")*1===_).column}else o=n.getSlideIndexByData(o)}return requestAnimationFrame(()=>{n.slideTo(o,t,s,a)}),n}function Ab(e,t=!0,s){const a=this,{enabled:n,params:r,animating:o}=a;if(!n||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let l=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const i=a.activeIndex<r.slidesPerGroupSkip?1:l,c=a.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+i,e,t,s)}),!0}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+i,e,t,s)}function Cb(e,t=!0,s){const a=this,{params:n,snapGrid:r,slidesGrid:o,rtlTranslate:l,enabled:i,animating:c}=a;if(!i||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const d=a.virtual&&n.virtual.enabled;if(n.loop){if(c&&!d&&n.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const u=l?a.translate:-a.translate;function p(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const f=p(u),g=r.map(h=>p(h)),_=n.freeMode&&n.freeMode.enabled;let y=r[g.indexOf(f)-1];if(typeof y>"u"&&(n.cssMode||_)){let h;r.forEach((b,v)=>{f>=b&&(h=v)}),typeof h<"u"&&(y=_?r[h]:r[h>0?h-1:h])}let m=0;if(typeof y<"u"&&(m=o.indexOf(y),m<0&&(m=a.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),n.rewind&&a.isBeginning){const h=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(h,e,t,s)}else if(n.loop&&a.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{a.slideTo(m,e,t,s)}),!0;return a.slideTo(m,e,t,s)}function Ob(e,t=!0,s){const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,s)}function $b(e,t=!0,s,a=.5){const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let r=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,r),l=o+Math.floor((r-o)/n.params.slidesPerGroup),i=n.rtlTranslate?n.translate:-n.translate;if(i>=n.snapGrid[l]){const c=n.snapGrid[l],d=n.snapGrid[l+1];i-c>(d-c)*a&&(r+=n.params.slidesPerGroup)}else{const c=n.snapGrid[l-1],d=n.snapGrid[l];i-c<=(d-c)*a&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,t,s)}function Mb(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.getSlideIndexWhenGrid(e.clickedIndex),r;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):n>(l?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),n=e.getSlideIndex(It(s,`${o}[data-swiper-slide-index="${r}"]`)[0]),Nu(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var Lb={slideTo:kb,slideToLoop:Pb,slideNext:Ab,slidePrev:Cb,slideReset:Ob,slideToClosest:$b,slideToClickedSlide:Mb};function Rb(e,t){const s=this,{params:a,slidesEl:n}=s;if(!a.loop||s.virtual&&s.params.virtual.enabled)return;const r=()=>{It(n,`.${a.slideClass}, swiper-slide`).forEach((g,_)=>{g.setAttribute("data-swiper-slide-index",_)})},o=()=>{const f=It(n,`.${a.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(s.recalcSlides(),s.updateSlides())},l=s.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||l)&&o();const i=a.slidesPerGroup*(l?a.grid.rows:1),c=s.slides.length%i!==0,d=l&&s.slides.length%a.grid.rows!==0,u=f=>{for(let g=0;g<f;g+=1){const _=s.isElement?tr("swiper-slide",[a.slideBlankClass]):tr("div",[a.slideClass,a.slideBlankClass]);s.slidesEl.append(_)}};if(c){if(a.loopAddBlankSlides){const f=i-s.slides.length%i;u(f),s.recalcSlides(),s.updateSlides()}else er("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(a.loopAddBlankSlides){const f=a.grid.rows-s.slides.length%a.grid.rows;u(f),s.recalcSlides(),s.updateSlides()}else er("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const p=a.centeredSlides||!!a.slidesOffsetBefore||!!a.slidesOffsetAfter;s.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function Db({slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:a,activeSlideIndex:n,initial:r,byController:o,byMousewheel:l}={}){const i=this;if(!i.params.loop)return;i.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:p,params:f}=i,{centeredSlides:g,slidesOffsetBefore:_,slidesOffsetAfter:y,initialSlide:m}=f,h=g||!!_||!!y;if(i.allowSlidePrev=!0,i.allowSlideNext=!0,i.virtual&&f.virtual.enabled){t&&(!h&&i.snapIndex===0?i.slideTo(i.virtual.slides.length,0,!1,!0):h&&i.snapIndex<f.slidesPerView?i.slideTo(i.virtual.slides.length+i.snapIndex,0,!1,!0):i.snapIndex===i.snapGrid.length-1&&i.slideTo(i.virtual.slidesBefore,0,!1,!0)),i.allowSlidePrev=d,i.allowSlideNext=u,i.emit("loopFix");return}let b=f.slidesPerView;b==="auto"?b=i.slidesPerViewDynamic():(b=Math.ceil(parseFloat(f.slidesPerView,10)),h&&b%2===0&&(b=b+1));const v=f.slidesPerGroupAuto?b:f.slidesPerGroup;let w=h?Math.max(v,Math.ceil(b/2)):v;w%v!==0&&(w+=v-w%v),w+=f.loopAdditionalSlides,i.loopedSlides=w;const x=i.grid&&f.grid&&f.grid.rows>1;c.length<b+w||i.params.effect==="cards"&&c.length<b+w*2?er("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):x&&f.grid.fill==="row"&&er("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const P=[],R=[],S=x?Math.ceil(c.length/f.grid.rows):c.length,k=r&&S-m<b&&!h;let T=k?m:i.activeIndex;typeof n>"u"?n=i.getSlideIndex(c.find(K=>K.classList.contains(f.slideActiveClass))):T=n;const O=s==="next"||!s,D=s==="prev"||!s;let V=0,Q=0;const Z=(x?c[n].column:n)+(h&&typeof a>"u"?-b/2+.5:0);if(Z<w){V=Math.max(w-Z,v);for(let K=0;K<w-Z;K+=1){const ie=K-Math.floor(K/S)*S;if(x){const J=S-ie-1;for(let z=c.length-1;z>=0;z-=1)c[z].column===J&&P.push(z)}else P.push(S-ie-1)}}else if(Z+b>S-w){Q=Math.max(Z-(S-w*2),v),k&&(Q=Math.max(Q,b-S+m+1));for(let K=0;K<Q;K+=1){const ie=K-Math.floor(K/S)*S;x?c.forEach((J,z)=>{J.column===ie&&R.push(z)}):R.push(ie)}}if(i.__preventObserver__=!0,requestAnimationFrame(()=>{i.__preventObserver__=!1}),i.params.effect==="cards"&&c.length<b+w*2&&(R.includes(n)&&R.splice(R.indexOf(n),1),P.includes(n)&&P.splice(P.indexOf(n),1)),D&&P.forEach(K=>{c[K].swiperLoopMoveDOM=!0,p.prepend(c[K]),c[K].swiperLoopMoveDOM=!1}),O&&R.forEach(K=>{c[K].swiperLoopMoveDOM=!0,p.append(c[K]),c[K].swiperLoopMoveDOM=!1}),i.recalcSlides(),f.slidesPerView==="auto"?i.updateSlides():x&&(P.length>0&&D||R.length>0&&O)&&i.slides.forEach((K,ie)=>{i.grid.updateSlide(ie,K,i.slides)}),f.watchSlidesProgress&&i.updateSlidesOffset(),t){if(P.length>0&&D){if(typeof e>"u"){const K=i.slidesGrid[T],J=i.slidesGrid[T+V]-K;l?i.setTranslate(i.translate-J):(i.slideTo(T+Math.ceil(V),0,!1,!0),a&&(i.touchEventsData.startTranslate=i.touchEventsData.startTranslate-J,i.touchEventsData.currentTranslate=i.touchEventsData.currentTranslate-J))}else if(a){const K=x?P.length/f.grid.rows:P.length;i.slideTo(i.activeIndex+K,0,!1,!0),i.touchEventsData.currentTranslate=i.translate}}else if(R.length>0&&O)if(typeof e>"u"){const K=i.slidesGrid[T],J=i.slidesGrid[T-Q]-K;l?i.setTranslate(i.translate-J):(i.slideTo(T-Q,0,!1,!0),a&&(i.touchEventsData.startTranslate=i.touchEventsData.startTranslate-J,i.touchEventsData.currentTranslate=i.touchEventsData.currentTranslate-J))}else{const K=x?R.length/f.grid.rows:R.length;i.slideTo(i.activeIndex-K,0,!1,!0)}}if(i.allowSlidePrev=d,i.allowSlideNext=u,i.controller&&i.controller.control&&!o){const K={slideRealIndex:e,direction:s,setTranslate:a,activeSlideIndex:n,byController:!0};Array.isArray(i.controller.control)?i.controller.control.forEach(ie=>{!ie.destroyed&&ie.params.loop&&ie.loopFix({...K,slideTo:ie.params.slidesPerView===f.slidesPerView?t:!1})}):i.controller.control instanceof i.constructor&&i.controller.control.params.loop&&i.controller.control.loopFix({...K,slideTo:i.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}i.emit("loopFix")}function Nb(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;a[r]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),a.forEach(n=>{s.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Ib={loopCreate:Rb,loopFix:Db,loopDestroy:Nb};function Bb(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Fb(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var zb={setGrabCursor:Bb,unsetGrabCursor:Fb};function Hb(e,t=this){function s(a){if(!a||a===Ft()||a===dt())return null;a.assignedSlot&&(a=a.assignedSlot);const n=a.closest(e);return!n&&!a.getRootNode?null:n||s(a.getRootNode().host)}return s(t)}function Sl(e,t,s){const a=dt(),{params:n}=e,r=n.edgeSwipeDetection,o=n.edgeSwipeThreshold;return r&&(s<=o||s>=a.innerWidth-o)?r==="prevent"?(t.preventDefault(),!0):!1:!0}function jb(e){const t=this,s=Ft();let a=e;a.originalEvent&&(a=a.originalEvent);const n=t.touchEventsData;if(a.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==a.pointerId)return;n.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(n.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){Sl(t,a,a.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:l}=t;if(!l||!r.simulateTouch&&a.pointerType==="mouse"||t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let i=a.target;if(r.touchEventsTarget==="wrapper"&&!Jg(i,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||n.isTouched&&n.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=a.composedPath?a.composedPath():a.path;c&&a.target&&a.target.shadowRoot&&d&&(i=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(a.target&&a.target.shadowRoot);if(r.noSwiping&&(p?Hb(u,i):i.closest(u))){t.allowClick=!0;return}if(r.swipeHandler&&!i.closest(r.swipeHandler))return;o.currentX=a.pageX,o.currentY=a.pageY;const f=o.currentX,g=o.currentY;if(!Sl(t,a,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=g,n.touchStartTime=Zn(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let _=!0;i.matches(n.focusableElements)&&(_=!1,i.nodeName==="SELECT"&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==i&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!i.matches(n.focusableElements))&&s.activeElement.blur();const y=_&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||y)&&!i.isContentEditable&&a.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function Ub(e){const t=Ft(),s=this,a=s.touchEventsData,{params:n,touches:r,rtlTranslate:o,enabled:l}=s;if(!l||!n.simulateTouch&&e.pointerType==="mouse")return;let i=e;if(i.originalEvent&&(i=i.originalEvent),i.type==="pointermove"&&(a.touchId!==null||i.pointerId!==a.pointerId))return;let c;if(i.type==="touchmove"){if(c=[...i.changedTouches].find(w=>w.identifier===a.touchId),!c||c.identifier!==a.touchId)return}else c=i;if(!a.isTouched){a.startMoving&&a.isScrolling&&s.emit("touchMoveOpposite",i);return}const d=c.pageX,u=c.pageY;if(i.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!s.allowTouchMove){i.target.matches(a.focusableElements)||(s.allowClick=!1),a.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),a.touchStartTime=Zn());return}if(n.touchReleaseOnEdges&&!n.loop)if(s.isVertical()){if(u<r.startY&&s.translate<=s.maxTranslate()||u>r.startY&&s.translate>=s.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(o&&(d>r.startX&&-s.translate<=s.maxTranslate()||d<r.startX&&-s.translate>=s.minTranslate()))return;if(!o&&(d<r.startX&&s.translate<=s.maxTranslate()||d>r.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==i.target&&i.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&i.target===t.activeElement&&i.target.matches(a.focusableElements)){a.isMoved=!0,s.allowClick=!1;return}a.allowTouchCallbacks&&s.emit("touchMove",i),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(p**2+f**2)<s.params.threshold)return;if(typeof a.isScrolling>"u"){let w;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?a.isScrolling=!1:p*p+f*f>=25&&(w=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,a.isScrolling=s.isHorizontal()?w>n.touchAngle:90-w>n.touchAngle)}if(a.isScrolling&&s.emit("touchMoveOpposite",i),typeof a.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(a.startMoving=!0),a.isScrolling||i.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;s.allowClick=!1,!n.cssMode&&i.cancelable&&i.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&i.stopPropagation();let g=s.isHorizontal()?p:f,_=s.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),_=Math.abs(_)*(o?1:-1)),r.diff=g,g*=n.touchRatio,o&&(g=-g,_=-_);const y=s.touchesDirection;s.swipeDirection=g>0?"prev":"next",s.touchesDirection=_>0?"prev":"next";const m=s.params.loop&&!n.cssMode,h=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!a.isMoved){if(m&&h&&s.loopFix({direction:s.swipeDirection}),a.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(w)}a.allowMomentumBounce=!1,n.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",i)}if(new Date().getTime(),n._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&y!==s.touchesDirection&&m&&h&&Math.abs(g)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}s.emit("sliderMove",i),a.isMoved=!0,a.currentTranslate=g+a.startTranslate;let b=!0,v=n.resistanceRatio;if(n.touchReleaseOnEdges&&(v=0),g>0?(m&&h&&a.allowThresholdMove&&a.currentTranslate>(n.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(n.slidesPerView!=="auto"&&s.slides.length-n.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>s.minTranslate()&&(b=!1,n.resistance&&(a.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+a.startTranslate+g)**v))):g<0&&(m&&h&&a.allowThresholdMove&&a.currentTranslate<(n.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(n.slidesPerView!=="auto"&&s.slides.length-n.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(n.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),a.currentTranslate<s.maxTranslate()&&(b=!1,n.resistance&&(a.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-a.startTranslate-g)**v))),b&&(i.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(a.currentTranslate=a.startTranslate),n.threshold>0)if(Math.abs(g)>n.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,a.currentTranslate=a.startTranslate,r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{a.currentTranslate=a.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&s.freeMode||n.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(a.currentTranslate),s.setTranslate(a.currentTranslate))}function qb(e){const t=this,s=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let n;if(a.type==="touchend"||a.type==="touchcancel"){if(n=[...a.changedTouches].find(w=>w.identifier===s.touchId),!n||n.identifier!==s.touchId)return}else{if(s.touchId!==null||a.pointerId!==s.pointerId)return;n=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:o,touches:l,rtlTranslate:i,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&a.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",a),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Zn(),p=u-s.touchStartTime;if(t.allowClick){const w=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(w&&w[0]||a.target,w),t.emit("tap click",a),p<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(s.lastClickTime=Zn(),Nu(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||l.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let f;if(o.followFinger?f=i?t.translate:-t.translate:f=-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let _=0,y=t.slidesSizesGrid[0];for(let w=0;w<c.length;w+=w<o.slidesPerGroupSkip?1:o.slidesPerGroup){const x=w<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[w+x]<"u"?(g||f>=c[w]&&f<c[w+x])&&(_=w,y=c[w+x]-c[w]):(g||f>=c[w])&&(_=w,y=c[c.length-1]-c[c.length-2])}let m=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const b=(f-c[_])/y,v=_<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?m:_+v):t.slideTo(_)),t.swipeDirection==="prev"&&(b>1-o.longSwipesRatio?t.slideTo(_+v):h!==null&&b<0&&Math.abs(b)>o.longSwipesRatio?t.slideTo(h):t.slideTo(_))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(_+v):t.slideTo(_):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:_+v),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:_))}}function El(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:n,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function Vb(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function Gb(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const r=e.maxTranslate()-e.minTranslate();r===0?n=0:n=(e.translate-e.minTranslate())/r,n!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function Kb(e){const t=this;Bn(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Yb(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Uu=(e,t)=>{const s=Ft(),{params:a,el:n,wrapperEl:r,device:o}=e,l=!!a.nested,i=t==="on"?"addEventListener":"removeEventListener",c=t;!n||typeof n=="string"||(s[i]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),n[i]("touchstart",e.onTouchStart,{passive:!1}),n[i]("pointerdown",e.onTouchStart,{passive:!1}),s[i]("touchmove",e.onTouchMove,{passive:!1,capture:l}),s[i]("pointermove",e.onTouchMove,{passive:!1,capture:l}),s[i]("touchend",e.onTouchEnd,{passive:!0}),s[i]("pointerup",e.onTouchEnd,{passive:!0}),s[i]("pointercancel",e.onTouchEnd,{passive:!0}),s[i]("touchcancel",e.onTouchEnd,{passive:!0}),s[i]("pointerout",e.onTouchEnd,{passive:!0}),s[i]("pointerleave",e.onTouchEnd,{passive:!0}),s[i]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&n[i]("click",e.onClick,!0),a.cssMode&&r[i]("scroll",e.onScroll),a.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",El,!0):e[c]("observerUpdate",El,!0),n[i]("load",e.onLoad,{capture:!0}))};function Wb(){const e=this,{params:t}=e;e.onTouchStart=jb.bind(e),e.onTouchMove=Ub.bind(e),e.onTouchEnd=qb.bind(e),e.onDocumentTouchStart=Yb.bind(e),t.cssMode&&(e.onScroll=Gb.bind(e)),e.onClick=Vb.bind(e),e.onLoad=Kb.bind(e),Uu(e,"on")}function Jb(){Uu(this,"off")}var Xb={attachEvents:Wb,detachEvents:Jb};const kl=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Qb(){const e=this,{realIndex:t,initialized:s,params:a,el:n}=e,r=a.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=Ft(),l=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",i=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:o.querySelector(a.breakpointsBase),c=e.getBreakpoint(r,l,i);if(!c||e.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||e.originalParams,p=kl(e,a),f=kl(e,u),g=e.params.grabCursor,_=u.grabCursor,y=a.enabled;p&&!f?(n.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(n.classList.add(`${a.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&a.grid.fill==="column")&&n.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!_?e.unsetGrabCursor():!g&&_&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(x=>{if(typeof u[x]>"u")return;const P=a[x]&&a[x].enabled,R=u[x]&&u[x].enabled;P&&!R&&e[x].disable(),!P&&R&&e[x].enable()});const m=u.direction&&u.direction!==a.direction,h=a.loop&&(u.slidesPerView!==a.slidesPerView||m),b=a.loop;m&&s&&e.changeDirection(),mt(e.params,u);const v=e.params.enabled,w=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),y&&!v?e.disable():!y&&v&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),s&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&w?(e.loopCreate(t),e.updateSlides()):b&&!w&&e.loopDestroy()),e.emit("breakpoint",u)}function Zb(e,t="window",s){if(!e||t==="container"&&!s)return;let a=!1;const n=dt(),r=t==="window"?n.innerHeight:s.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const i=parseFloat(l.substr(1));return{value:r*i,point:l}}return{value:l,point:l}});o.sort((l,i)=>parseInt(l.value,10)-parseInt(i.value,10));for(let l=0;l<o.length;l+=1){const{point:i,value:c}=o[l];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(a=i):c<=s.clientWidth&&(a=i)}return a||"max"}var e0={setBreakpoint:Qb,getBreakpoint:Zb};function t0(e,t){const s=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(n=>{a[n]&&s.push(t+n)}):typeof a=="string"&&s.push(t+a)}),s}function s0(){const e=this,{classNames:t,params:s,rtl:a,el:n,device:r}=e,o=t0(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...o),n.classList.add(...t),e.emitContainerClasses()}function a0(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var n0={addClasses:s0,removeClasses:a0};function r0(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const n=e.slides.length-1,r=e.slidesGrid[n]+e.slidesSizesGrid[n]+a*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var o0={checkOverflow:r0},Pl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function i0(e,t){return function(a={}){const n=Object.keys(a)[0],r=a[n];if(typeof r!="object"||r===null){mt(t,a);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in r)){mt(t,a);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),mt(t,a)}}const eo={eventsEmitter:nb,update:mb,translate:wb,transition:Eb,slide:Lb,loop:Ib,grabCursor:zb,events:Xb,breakpoints:e0,checkOverflow:o0,classes:n0},to={};class xt{constructor(...t){let s,a;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?a=t[0]:[s,a]=t,a||(a={}),a=mt({},a),s&&!a.el&&(a.el=s);const n=Ft();if(a.el&&typeof a.el=="string"&&n.querySelectorAll(a.el).length>1){const i=[];return n.querySelectorAll(a.el).forEach(c=>{const d=mt({},a,{el:c});i.push(new xt(d))}),i}const r=this;r.__swiper__=!0,r.support=Fu(),r.device=zu({userAgent:a.userAgent}),r.browser=Hu(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],a.modules&&Array.isArray(a.modules)&&a.modules.forEach(i=>{typeof i=="function"&&r.modules.indexOf(i)<0&&r.modules.push(i)});const o={};r.modules.forEach(i=>{i({params:a,swiper:r,extendParams:i0(a,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const l=mt({},Pl,o);return r.params=mt({},l,to,a),r.originalParams=mt({},r.params),r.passedParams=mt({},a),r.params&&r.params.on&&Object.keys(r.params.on).forEach(i=>{r.on(i,r.params.on[i])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:s,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:a}=this,n=It(s,`.${a.slideClass}, swiper-slide`),r=sr(n[0]);return sr(t)-r}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:a}=t;t.slides=It(s,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const a=this;t=Math.min(Math.max(t,0),1);const n=a.minTranslate(),o=(a.maxTranslate()-n)*t+n;a.translateTo(o,typeof s>"u"?0:s),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(a=>{const n=t.getSlideClasses(a);s.push({slideEl:a,classNames:n}),t.emit("_slideClass",a,n)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t="current",s=!1){const a=this,{params:n,slides:r,slidesGrid:o,slidesSizesGrid:l,size:i,activeIndex:c}=a;let d=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let f=c+1;f<r.length;f+=1)r[f]&&!p&&(u+=Math.ceil(r[f].swiperSlideSize),d+=1,u>i&&(p=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!p&&(u+=r[f].swiperSlideSize,d+=1,u>i&&(p=!0))}else if(t==="current")for(let u=c+1;u<r.length;u+=1)(s?o[u]+l[u]-o[c]<i:o[u]-o[c]<i)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<i&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Bn(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let r;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)n(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const o=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;r=t.slideTo(o.length-1,0,!1,!0)}else r=t.slideTo(t.activeIndex,0,!1,!0);r||n()}a.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s=!0){const a=this,n=a.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${n}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(r=>{t==="vertical"?r.style.width="":r.style.height=""}),a.emit("changeDirection"),s&&a.update()),a}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let a=t||s.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=s,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const n=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(n()):It(a,n())[0];return!o&&s.params.createElements&&(o=tr("div",s.params.wrapperClass),a.append(o),It(a,`.${s.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(s,{el:a,wrapperEl:o,slidesEl:s.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:o,hostEl:s.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||gs(a,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||gs(a,"direction")==="rtl"),wrongRTL:gs(o,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const n=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?Bn(s,r):r.addEventListener("load",o=>{Bn(s,o.target)})}),Do(s),s.initialized=!0,Do(s),s.emit("init"),s.emit("afterInit"),s}destroy(t=!0,s=!0){const a=this,{params:n,el:r,wrapperEl:o,slides:l}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),n.loop&&a.loopDestroy(),s&&(a.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),l&&l.length&&l.forEach(i=>{i.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),i.removeAttribute("style"),i.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(i=>{a.off(i)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),Vg(a)),a.destroyed=!0),null}static extendDefaults(t){mt(to,t)}static get extendedDefaults(){return to}static get defaults(){return Pl}static installModule(t){xt.prototype.__modules__||(xt.prototype.__modules__=[]);const s=xt.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>xt.installModule(s)),xt):(xt.installModule(t),xt)}}Object.keys(eo).forEach(e=>{Object.keys(eo[e]).forEach(t=>{xt.prototype[t]=eo[e][t]})});xt.use([sb,ab]);function l0(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach(n=>{if(!s[n]&&s.auto===!0){let r=It(e.el,`.${a[n]}`)[0];r||(r=tr("div",a[n]),r.className=a[n],e.el.append(r)),s[n]=r,t[n]=r}}),s}function da(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function c0({swiper:e,extendParams:t,on:s,emit:a}){const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let r,o=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function i(m,h){const{bulletActiveClass:b}=e.params.pagination;m&&(m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${b}-${h}`),m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${b}-${h}-${h}`)))}function c(m,h,b){if(m=m%b,h=h%b,h===m+1)return"next";if(h===m-1)return"previous"}function d(m){const h=m.target.closest(da(e.params.pagination.bulletClass));if(!h)return;m.preventDefault();const b=sr(h)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const v=c(e.realIndex,b,e.slides.length);v==="next"?e.slideNext():v==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function u(){const m=e.rtl,h=e.params.pagination;if(l())return;let b=e.pagination.el;b=qt(b);let v,w;const x=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,P=e.params.loop?Math.ceil(x/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(w=e.previousRealIndex||0,v=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(v=e.snapIndex,w=e.previousSnapIndex):(w=e.previousIndex||0,v=e.activeIndex||0),h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const R=e.pagination.bullets;let S,k,T;if(h.dynamicBullets&&(r=Ro(R[0],e.isHorizontal()?"width":"height"),b.forEach(O=>{O.style[e.isHorizontal()?"width":"height"]=`${r*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&w!==void 0&&(o+=v-(w||0),o>h.dynamicMainBullets-1?o=h.dynamicMainBullets-1:o<0&&(o=0)),S=Math.max(v-o,0),k=S+(Math.min(R.length,h.dynamicMainBullets)-1),T=(k+S)/2),R.forEach(O=>{const D=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(V=>`${h.bulletActiveClass}${V}`)].map(V=>typeof V=="string"&&V.includes(" ")?V.split(" "):V).flat();O.classList.remove(...D)}),b.length>1)R.forEach(O=>{const D=sr(O);D===v?O.classList.add(...h.bulletActiveClass.split(" ")):e.isElement&&O.setAttribute("part","bullet"),h.dynamicBullets&&(D>=S&&D<=k&&O.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),D===S&&i(O,"prev"),D===k&&i(O,"next"))});else{const O=R[v];if(O&&O.classList.add(...h.bulletActiveClass.split(" ")),e.isElement&&R.forEach((D,V)=>{D.setAttribute("part",V===v?"bullet-active":"bullet")}),h.dynamicBullets){const D=R[S],V=R[k];for(let Q=S;Q<=k;Q+=1)R[Q]&&R[Q].classList.add(...`${h.bulletActiveClass}-main`.split(" "));i(D,"prev"),i(V,"next")}}if(h.dynamicBullets){const O=Math.min(R.length,h.dynamicMainBullets+4),D=(r*O-r)/2-T*r,V=m?"right":"left";R.forEach(Q=>{Q.style[e.isHorizontal()?V:"top"]=`${D}px`})}}b.forEach((R,S)=>{if(h.type==="fraction"&&(R.querySelectorAll(da(h.currentClass)).forEach(k=>{k.textContent=h.formatFractionCurrent(v+1)}),R.querySelectorAll(da(h.totalClass)).forEach(k=>{k.textContent=h.formatFractionTotal(P)})),h.type==="progressbar"){let k;h.progressbarOpposite?k=e.isHorizontal()?"vertical":"horizontal":k=e.isHorizontal()?"horizontal":"vertical";const T=(v+1)/P;let O=1,D=1;k==="horizontal"?O=T:D=T,R.querySelectorAll(da(h.progressbarFillClass)).forEach(V=>{V.style.transform=`translate3d(0,0,0) scaleX(${O}) scaleY(${D})`,V.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(xl(R,h.renderCustom(e,v+1,P)),S===0&&a("paginationRender",R)):(S===0&&a("paginationRender",R),a("paginationUpdate",R)),e.params.watchOverflow&&e.enabled&&R.classList[e.isLocked?"add":"remove"](h.lockClass)})}function p(){const m=e.params.pagination;if(l())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=qt(b);let v="";if(m.type==="bullets"){let w=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&w>h&&(w=h);for(let x=0;x<w;x+=1)m.renderBullet?v+=m.renderBullet.call(e,x,m.bulletClass):v+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?v=m.renderFraction.call(e,m.currentClass,m.totalClass):v=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?v=m.renderProgressbar.call(e,m.progressbarFillClass):v=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(w=>{m.type!=="custom"&&xl(w,v||""),m.type==="bullets"&&e.pagination.bullets.push(...w.querySelectorAll(da(m.bulletClass)))}),m.type!=="custom"&&a("paginationRender",b[0])}function f(){e.params.pagination=l0(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let h;typeof m.el=="string"&&e.isElement&&(h=e.el.querySelector(m.el)),!h&&typeof m.el=="string"&&(h=[...document.querySelectorAll(m.el)]),h||(h=m.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(m.el)],h.length>1&&(h=h.find(b=>Bu(b,".swiper")[0]===e.el))),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=qt(h),h.forEach(b=>{m.type==="bullets"&&m.clickable&&b.classList.add(...(m.clickableClass||"").split(" ")),b.classList.add(m.modifierClass+m.type),b.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(b.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&b.classList.add(m.progressbarOppositeClass),m.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(m.lockClass)}))}function g(){const m=e.params.pagination;if(l())return;let h=e.pagination.el;h&&(h=qt(h),h.forEach(b=>{b.classList.remove(m.hiddenClass),b.classList.remove(m.modifierClass+m.type),b.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(b.classList.remove(...(m.clickableClass||"").split(" ")),b.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...m.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:h}=e.pagination;h=qt(h),h.forEach(b=>{b.classList.remove(m.horizontalClass,m.verticalClass),b.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?y():(f(),p(),u())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),s("snapIndexChange",()=>{u()}),s("snapGridLengthChange",()=>{p(),u()}),s("destroy",()=>{g()}),s("enable disable",()=>{let{el:m}=e.pagination;m&&(m=qt(m),m.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{u()}),s("click",(m,h)=>{const b=h.target,v=qt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&v&&v.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const w=v[0].classList.contains(e.params.pagination.hiddenClass);a(w===!0?"paginationShow":"paginationHide"),v.forEach(x=>x.classList.toggle(e.params.pagination.hiddenClass))}});const _=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=qt(m),m.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),u()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=qt(m),m.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:_,disable:y,render:p,update:u,init:f,destroy:g})}function d0({swiper:e,extendParams:t,on:s,emit:a,params:n}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,l=n&&n.autoplay?n.autoplay.delay:3e3,i=n&&n.autoplay?n.autoplay.delay:3e3,c,d=new Date().getTime(),u,p,f,g,_,y;function m(Z){!e||e.destroyed||!e.wrapperEl||Z.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(y||Z.detail&&Z.detail.bySwiperTouchMove)&&S())}const h=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(i=c,u=!1);const Z=e.autoplay.paused?c:d+i-new Date().getTime();e.autoplay.timeLeft=Z,a("autoplayTimeLeft",Z,Z/l),o=requestAnimationFrame(()=>{h()})},b=()=>{let Z;return e.virtual&&e.params.virtual.enabled?Z=e.slides.find(ie=>ie.classList.contains("swiper-slide-active")):Z=e.slides[e.activeIndex],Z?parseInt(Z.getAttribute("data-swiper-autoplay"),10):void 0},v=()=>{let Z=e.params.autoplay.delay;const K=b();return!Number.isNaN(K)&&K>0&&(Z=K),Z},w=Z=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),h();let K=Z;typeof K>"u"&&(K=v(),l=K,i=K),c=K;const ie=e.params.speed,J=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(ie,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,ie,!0,!0),a("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(ie,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,ie,!0,!0),a("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{w()})))};return K>0?(clearTimeout(r),r=setTimeout(()=>{J()},K)):requestAnimationFrame(()=>{J()}),K},x=()=>{d=new Date().getTime(),e.autoplay.running=!0,w(),a("autoplayStart")},P=()=>{e.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),a("autoplayStop")},R=(Z,K)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(r),Z||(_=!0);const ie=()=>{a("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):S()};if(e.autoplay.paused=!0,K){ie();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),ie())},S=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),_?(_=!1,w(c)):w(),e.autoplay.paused=!1,a("autoplayResume"))},k=()=>{if(e.destroyed||!e.autoplay.running)return;const Z=Ft();Z.visibilityState==="hidden"&&(_=!0,R(!0)),Z.visibilityState==="visible"&&S()},T=Z=>{Z.pointerType==="mouse"&&(_=!0,y=!0,!(e.animating||e.autoplay.paused)&&R(!0))},O=Z=>{Z.pointerType==="mouse"&&(y=!1,e.autoplay.paused&&S())},D=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",T),e.el.addEventListener("pointerleave",O))},V=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",T),e.el.removeEventListener("pointerleave",O))},Q=()=>{Ft().addEventListener("visibilitychange",k)},X=()=>{Ft().removeEventListener("visibilitychange",k)};s("init",()=>{e.params.autoplay.enabled&&(D(),Q(),x())}),s("destroy",()=>{V(),X(),e.autoplay.running&&P()}),s("_freeModeStaticRelease",()=>{(f||_)&&S()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?P():R(!0,!0)}),s("beforeTransitionStart",(Z,K,ie)=>{e.destroyed||!e.autoplay.running||(ie||!e.params.autoplay.disableOnInteraction?R(!0,!0):P())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){P();return}p=!0,f=!1,_=!1,g=setTimeout(()=>{_=!0,f=!0,R(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(r),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&S(),f=!1,p=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=v(),l=v())}),Object.assign(e.autoplay,{start:x,stop:P,pause:R,resume:S})}const u0={class:"home-layout"},p0={class:"sticky-header-group"},f0=["data-user-name"],h0={class:"home-tabs",id:"home-tabs--id"},m0={class:"home-tab home-tab--lobby home-tab--active","data-home-tab":"lobby-active"},g0={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},b0={class:"home-tab home-tab--lobby","data-home-tab":"lobby-completed"},_0={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},v0={class:"home-tab home-tab--my home-tab--active","data-home-tab":"my-active"},y0={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},w0={class:"home-tab home-tab--my","data-home-tab":"my-completed"},x0={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},T0={class:"home-tab home-tab--private home-tab--active","data-home-tab":"private-all"},S0={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},E0={class:"home-tab home-tab--private","data-home-tab":"private-invites"},k0={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},P0={class:"create-cta-banner__content"},A0={__name:"home_route",setup(e){const t=ct(),s=xe();window.CoreBetSlip=Ru;const a=()=>{t.push({name:"create_tournament_route"})};document.addEventListener("click",d=>{const u=d.target;if(u&&u.dataset?.promotionTopic){const p={timestamp:Date.now(),heroImg:u.dataset.promotionHeroImg||"",caption:u.dataset.promotionCaption||"",tagline:u.dataset.promotionTagline||"",toast:u.dataset.promotionToast||"",topic:u.dataset.promotionTopic||"",topicToken:u.dataset.promotionTopicToken||"",marquee:u.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",p),de.publish(s.hierTopics.PROMOTION__CLICK,JSON.stringify(p))}u&&u.dataset?.publishRouteHome&&(u.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(f=>{f.classList.toggle("dash-nav__btn--active",f===u)}),de.publish(u.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),u&&u.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const n=(d,u=!1,p="cards",f={})=>{const g=document.querySelector(".tournaments-grid");if(!g)return;g.innerHTML="",g.style.animation="none",g.offsetHeight,g.style.animation="panel-enter 0.3s ease-out both",g.classList.toggle("tournaments-grid--list",p==="list");const _=document.getElementById("app"),y=_?.getAttribute("data-sync-theme")||"dark",m=_?.getAttribute("data-sync-lang")||"en",h=_?.getAttribute("data-sync-motif")||"brand",b=(x="")=>String(x).replace(/\S+/g,P=>/[A-Z]/.test(P)&&P===P.toUpperCase()?P:P.charAt(0).toUpperCase()+P.slice(1).toLowerCase()),v=x=>{const P=document.createElement("bma-tournament-list-card");P.setAttribute("data-bma-tourn-guid",x.guid||""),P.setAttribute("data-bma-tourn-caption",x.caption||""),P.setAttribute("data-bma-tourn-tagline",x.tagline||""),P.setAttribute("data-bma-tourn-status",x.status||""),P.setAttribute("data-bma-tourn-class",x.status||""),P.setAttribute("data-bma-tourn-game-type",x.class||"DEFAULT"),P.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(x.sports_allowed)?JSON.stringify(x.sports_allowed):""),P.setAttribute("data-bma-tourn-entities",x.entities?JSON.stringify(x.entities):""),P.setAttribute("data-bma-tourn-entry_fee",x.entry_fee||"0"),P.setAttribute("data-bma-tourn-tournament_dollars",x.tournament_dollars||"0"),P.setAttribute("data-bma-tourn-matches",x.matches_expanded?.length||"0"),P.setAttribute("data-bma-tourn-tags",Array.isArray(x.tags)?JSON.stringify(x.tags):"[]"),P.setAttribute("data-bma-tourn-window_start_time",x.window_start_time||""),P.setAttribute("data-bma-tourn-window_end_time",x.window_end_time||""),P.setAttribute("data-sync-theme",y);try{const R=s.appSession?.session_user?.guid,S=(x.status||x.class)==="COMPLETED",k=x.entities?.guids||[],T=R&&k.includes(R);if(S&&T&&typeof window.GameMode?.get=="function"){const O=window.GameMode.get(x.class||"DEFAULT_FORMAT");if(O&&typeof O.rankLeaderboard=="function"){const D=k.map(X=>{const Z=Array.isArray(x.combined_betslips)?x.combined_betslips.filter(K=>K.entity_guid===X||K.user_guid===X||K.guid===X):[];return{guid:X,bets:Z,tournament_dollars:x.tournament_dollars,timestamp:x.status_time}}),V=O.rankLeaderboard(D,x),Q=V.findIndex(X=>X.guid===R);Q>=0&&(P.setAttribute("data-user-rank",String(Q+1)),P.setAttribute("data-user-total",String(V.length)))}}}catch{}return P},w=x=>{const P=document.createElement("article"),R=x.status||"DRAFT";P.className=`tournament-item tournament-status-${R.toLowerCase()}`;const S=document.createElement("bma-tournament-card");return S.setAttribute("data-bma-tourn-id",x.id||""),S.setAttribute("data-bma-tourn-guid",x.guid||""),S.setAttribute("data-bma-tourn-caption",x.caption||""),S.setAttribute("data-bma-tourn-tagline",x.tagline||""),S.setAttribute("data-bma-tourn-window_start_time",x.window_start_time||""),S.setAttribute("data-bma-tourn-window_end_time",x.window_end_time||""),S.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(x.sports_allowed)?JSON.stringify(x.sports_allowed):x.sports_allowed||""),S.setAttribute("data-bma-tourn-entities",x.entities?JSON.stringify(x.entities):""),S.setAttribute("data-bma-tourn-tournament_dollars",x.tournament_dollars||""),S.setAttribute("data-bma-tourn-prize_distro",Array.isArray(x.prize_distro)?JSON.stringify(x.prize_distro):x.prize_distro||""),S.setAttribute("data-bma-tourn-matches",Array.isArray(x.matches_guids)?JSON.stringify(x.matches_guids):x.matches_guids||""),S.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(x.matches_expanded)?JSON.stringify(x.matches_expanded):x.matches_expanded||""),S.setAttribute("data-bma-tourn-entry_fee",x.entry_fee||""),S.setAttribute("data-bma-tourn-rake",x.rake||""),S.setAttribute("data-bma-tourn-tags",Array.isArray(x.tags)?JSON.stringify(x.tags):x.tags||""),S.setAttribute("data-bma-tourn-comments",x.comments||""),S.setAttribute("data-bma-tourn-class",x.status||""),S.setAttribute("data-bma-tourn-game-type",x.class||"DEFAULT"),S.setAttribute("data-bma-tourn-status",x.status||""),S.setAttribute("data-sync-theme",y),S.setAttribute("data-sync-lang",m),S.setAttribute("data-sync-motif",h),S.setAttribute("data-n55-size","medium"),S.setAttribute("data-n55-enchanted-cta-ambient","none"),S.setAttribute("data-tourn-custom-css",""),S.setAttribute("data-tourn-trophy","0"),S.setAttribute("data-bma-tourn-focus",""),S.setAttribute("data-bma-tourn-wait","false"),P.appendChild(S),P};if(u){d.forEach(P=>{if(P.type==="stats"){const $=document.createElement("div");$.className="tournament-category tournament-category--stats",$.innerHTML=P.html||"",g.appendChild($);return}const R=document.createElement("div");R.className="tournament-category";const S=document.createElement("header");S.className="tournament-category-header";const k=document.createElement("div");if(k.className="category-title-line",P.tournaments){const $=document.createElement("span");$.className="category-count-pill";const U=(()=>{const N=P.sportKey;if(!N||N==="all")return'<span class="category-count-pill__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg></span>';if(N==="multi")return'<span class="category-count-pill__icon"><bma-sport-icon sport="multi" data-sport-group="Multi"></bma-sport-icon></span>';const j=Ge.find(te=>te.key===N)?.group||"default";return`<span class="category-count-pill__icon"><bma-sport-icon sport="${N}" data-sport-group="${j}"></bma-sport-icon></span>`})();$.classList.add("category-count-pill--with-icon"),$.innerHTML=`${U}<span class="category-count-pill__num">${P.tournaments.length}</span>`,k.appendChild($)}const T=document.createElement("h2");T.className="category-title",T.textContent=b(P.title),k.appendChild(T);const{tab:O="lobby",subStatus:D="all",sort:V="default",result:Q="all",odds:X="all"}=f,K=P.title.toLowerCase().includes("completed"),ie=!K&&O==="my",J=($,U,N)=>`<option value="${$}"${N?" selected":""}>${U}</option>`;let z="";O==="lobby"?z=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${J("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${J("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${J("default","Starting TD$: Default",V==="default")}
              ${J("td_high","Starting TD$: High to Low",V==="td_high")}
              ${J("td_low","Starting TD$: Low to High",V==="td_low")}
            </select>
          `:O==="my"&&ie?z=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${J("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${J("all","Status: All",D==="all")}
              ${J("active","Status: Active",D==="active")}
              ${J("upcoming","Status: Upcoming",D==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${J("all","Odds: All",X==="all")}
              ${J("available","Odds: Available",X==="available")}
              ${J("none","Odds: Not Available",X==="none")}
            </select>
          `:(O==="my"&&K||O==="completed")&&(z=`
            <select class="category-dropdown" data-filter-type="result">
              ${J("all","Result: All",Q==="all")}
              ${J("trophy","Result: Won Trophy",Q==="trophy")}
              ${J("no_trophy","Result: No Trophy",Q==="no_trophy")}
            </select>
          `),S.appendChild(k);const ee=localStorage.getItem("bma_view_mode")||"cards",Y=document.createElement("div");if(Y.className="category-controls",z){const $=document.createElement("button");$.className="category-filter-toggle",$.setAttribute("aria-label","Toggle filters"),$.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filters <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>',Y.appendChild($)}const A=document.createElement("span");if(A.className="category-view-btns",A.innerHTML=`
          <button class="category-view-btn${ee==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            <span>Card</span>
          </button>
          <button class="category-view-btn${ee==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            <span>List</span>
          </button>
        `,Y.appendChild(A),S.appendChild(Y),z){const $=document.createElement("div");if($.className="category-filter-row",$.style.display=window._bmaFilterRowOpen?"":"none",$.innerHTML=z,S.appendChild($),window._bmaFilterRowOpen){const U=S.querySelector(".category-filter-toggle");U&&U.classList.add("category-filter-toggle--open")}}if(R.appendChild(S),g.appendChild(R),P.tournaments.length===0){const $=P.emptyMessage||"No tournaments available",N=Object.prototype.hasOwnProperty.call(P,"emptySubtext")?P.emptySubtext||"":"Check back later for new tournaments",G=P.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',j=document.createElement("div");j.className="tournaments-empty",j.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",j.innerHTML=`
            ${G}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${$}</p>
            ${N?`<p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${N}</p>`:""}
          `,R.appendChild(j)}else{const $=document.createElement("div");if($.className="card-rail",P.tournaments.forEach((U,N)=>{const G=p==="list"?v(U):w(U);G.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",G.style.animationDelay=`${Math.min(N*50,300)}ms`,$.appendChild(G)}),R.appendChild($),P.tournaments.length>1){const U=document.createElement("div");U.className="card-rail__dots";for(let N=0;N<P.tournaments.length;N++){const G=document.createElement("span");G.className=`card-rail__dot${N===0?" card-rail__dot--active":""}`,U.appendChild(G)}R.appendChild(U)}if(P.tournaments.length>1){const U=document.createElement("button");U.className="card-rail__arrow card-rail__arrow--prev",U.setAttribute("aria-label","Previous card"),U.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',U.style.opacity="0";const N=document.createElement("button");N.className="card-rail__arrow card-rail__arrow--next",N.setAttribute("aria-label","Next card"),N.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',R.appendChild(U),R.appendChild(N);const G=R.querySelector(".card-rail__dots");$.addEventListener("scroll",()=>{const j=$.scrollLeft,te=$.firstElementChild?.offsetWidth||1,E=Math.round(j/(te+12));G&&G.querySelectorAll(".card-rail__dot").forEach((L,H)=>{L.classList.toggle("card-rail__dot--active",H===E)}),U.style.opacity=j<=10?"0":"";const M=$.scrollWidth-$.clientWidth;N.style.opacity=j>=M-10?"0":""},{passive:!0}),U.addEventListener("click",()=>{const j=$.firstElementChild?.offsetWidth||300;$.scrollBy({left:-(j+12),behavior:"smooth"})}),N.addEventListener("click",()=>{const j=$.firstElementChild?.offsetWidth||300;$.scrollBy({left:j+12,behavior:"smooth"})})}}});const x=g.dataset.filterContext;if(x!=="lobby"&&x!=="private"&&g.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let P="No tournaments available",R="Check back later for new tournaments";x==="my"?(P="You haven't joined any tournaments yet",R="Head to the lobby to find tournaments"):x==="completed"&&(P="No completed tournaments yet",R="Tournaments will appear here once they finish");const S=document.createElement("div");S.className="tournaments-empty",S.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",S.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${P}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${R}</p>
        `,g.appendChild(S)}}else d.forEach((x,P)=>{const R=p==="list"?v(x):w(x);R.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",R.style.animationDelay=`${Math.min(P*50,300)}ms`,g.appendChild(R)})},r=d=>{document.querySelectorAll("bma-tournament-card").forEach(p=>{p.setAttribute("data-sync-theme",d)})},o=d=>{const u=document.querySelectorAll("bma-tournament-card"),p=Date.now().toString();u.forEach(f=>{if(f===d){if(f.setAttribute("data-bma-tourn-focus",p),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="")}}else if(f.setAttribute("data-bma-tourn-focus",""),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="none")}}),typeof neodigmMarquee<"u"&&neodigmMarquee.init()},l=d=>{const{action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._}=d.detail;console.log("[home_route] Tournament action:",{action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._}),o(d.target),de.publish("WC.TOURN_ACTION",JSON.stringify({action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._,timestamp:Date.now()}))};let i=null;const c=()=>{const d=document.getElementById("home-datetime--id");if(!d)return;const u=new Date,p=u.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),f=u.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});d.textContent=`${p} · ${f}`};return lt(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}c(),i=setInterval(c,24e3);const d=document.getElementById("app");if(d){const g=s.appCLIFeatures.features.theme?.state,_=s.appCLIFeatures.features.lang?.state,y=s.appCLIFeatures.features.motif?.state,m=s.appSession.session_user.guid;g&&(d.setAttribute("data-sync-theme",g),document.body.setAttribute("data-sync-theme",g)),_&&d.setAttribute("data-sync-lang",_),y&&d.setAttribute("data-sync-motif",y),m&&d.setAttribute("data-user-guid",m)}window._homeRouteRenderCards=n;const u=de.subscribe("APP.ROUTE_SYNC",(g,_)=>{try{const y=JSON.parse(_);y.theme&&r(y.theme.state)}catch(y){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",y)}});if(window._homeRoutePubSubToken=u,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),de.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",l),window._pendingTournGuid){const g=window._pendingTournGuid;delete window._pendingTournGuid,setTimeout(()=>{de.publish("WC.TOURN_ACTION",JSON.stringify({action:"PLAY",tournamentGuid:g,timestamp:Date.now()}))},800)}const p=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,f=new xt(".featured-swiper",{modules:[d0,c0],slidesPerView:1,spaceBetween:16,loop:p>1,initialSlide:p>1?1:0,centeredSlides:p>1,autoplay:p>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:p>1?1.7:1,spaceBetween:10,centeredSlides:p>1},640:{slidesPerView:Math.min(2,p),spaceBetween:16,centeredSlides:!1},1024:{slidesPerView:Math.min(3,p),spaceBetween:20,centeredSlides:!1},1280:{slidesPerView:Math.min(3,p),spaceBetween:24,centeredSlides:!1}}});window.featuredSwiper=f,de.publish(s.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),os(()=>{i&&clearInterval(i),document.removeEventListener("bma-tournament-action",l),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&de.unsubscribe(window._homeRoutePubSubToken)}),(d,u)=>(ue(),pe("main",u0,[C("div",p0,[C("bma-app-head-top",{"data-user-name":ut(s).appSession.session_user.name||"Guest"},null,8,f0),u[0]||(u[0]=C("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),u[19]||(u[19]=_t('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div><div class="home-datetime" id="home-datetime--id" aria-hidden="true">—</div><bma-scores-banner id="bma-scores-banner--id"></bma-scores-banner></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports>',2)),C("nav",h0,[C("button",m0,[(ue(),pe("svg",g0,[...u[1]||(u[1]=[C("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),u[2]||(u[2]=et(" Active ",-1))]),C("button",b0,[(ue(),pe("svg",_0,[...u[3]||(u[3]=[C("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),u[4]||(u[4]=et(" Completed ",-1))]),C("button",v0,[(ue(),pe("svg",y0,[...u[5]||(u[5]=[C("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),u[6]||(u[6]=et(" Active ",-1)),u[7]||(u[7]=C("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{visibility:"hidden"}},"0",-1))]),C("button",w0,[(ue(),pe("svg",x0,[...u[8]||(u[8]=[C("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),u[9]||(u[9]=et(" Completed ",-1))]),C("button",T0,[(ue(),pe("svg",S0,[...u[10]||(u[10]=[C("path",{d:"M7 4V2h10v2h5v3c0 2.76-2.24 5-5 5h-.58c-.59 1.85-2.17 3.31-4.42 3.79V19h4v2H8v-2h4v-3.21C9.75 15.31 8.17 13.85 7.58 12H7c-2.76 0-5-2.24-5-5V4h5zm0 2H4v1c0 1.3.84 2.4 2 2.82V6zm10 3.82C18.16 9.4 19 8.3 19 7V6h-3v3.82z"},null,-1)])])),u[11]||(u[11]=et(" Bet Max Pools ",-1)),u[12]||(u[12]=C("span",{class:"home-tab__badge",id:"home-tab-private-badge"},"0",-1))]),C("button",E0,[(ue(),pe("svg",k0,[...u[13]||(u[13]=[C("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"},null,-1)])])),u[14]||(u[14]=et(" Invites ",-1)),u[15]||(u[15]=C("span",{class:"home-tab__badge home-tab__badge--soft",id:"home-tab-invites-badge"},"0",-1))])]),C("section",{class:"create-cta-banner",onClick:a},[u[18]||(u[18]=C("div",{class:"create-cta-banner__glow","aria-hidden":"true"},null,-1)),C("div",P0,[u[17]||(u[17]=_t('<div class="create-cta-banner__text"><span class="create-cta-banner__eyebrow" aria-label="Tournament perks"><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--1">Select Your Sports</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--2">Choose Your Game Mode</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--3">Invite Your Friends</span><span class="create-cta-banner__eyebrow-progress" aria-hidden="true"></span></span><span class="create-cta-banner__title">Start Your Own Bet Max Pool!</span><span class="create-cta-banner__sub">Your contest, your rules, your friends. Start a Bet Max Pool for Free.</span></div><div class="create-cta-banner__trophies" aria-hidden="true"><span class="create-cta-banner__trophy create-cta-banner__trophy--silver"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--gold"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--bronze"></span></div>',2)),C("button",{class:"create-cta-banner__btn",type:"button",onClick:na(a,["stop"])},[...u[16]||(u[16]=[C("span",null,"Create",-1),C("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[C("polyline",{points:"9 18 15 12 9 6"})],-1)])])])]),u[20]||(u[20]=C("section",{class:"tournaments-section"},[C("div",{class:"tournaments-grid"})],-1)),u[21]||(u[21]=C("bma-app-foot-branded",null,null,-1))]))}},C0={};function O0(e,t){return ue(),pe("main",null,[...t[0]||(t[0]=[C("h1",null,"App FAQ",-1)])])}const Ka=Ts(C0,[["render",O0]]),$0={};function M0(e,t){return ue(),pe("main",null,[...t[0]||(t[0]=[C("h1",null,"App Help",-1)])])}const L0=Ts($0,[["render",M0]]),Wt=class Wt{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,s,a,n=!0){this.strChat=a,this.isDebug=n;const r=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${r}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(l){Wt.onSSEOpen(l)},this.sseEvent.onmessage=function(l){Wt.onSSEMessage(l)},this.sseEvent.onerror=function(l){Wt.onSSEError(l)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),de.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Wt.sseEvent=null,Wt.strChat=null,Wt.isDebug=!0,Wt.sessionId=null;let ar=Wt;class ns{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,a){return new Promise((n,r)=>{const o=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});o.onload=n,o.onerror=r,s.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(s,a,n){const r=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});n&&(r.onload=function(){n()}),s.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(s,a){let n=s.createElement("link");n.rel="stylesheet",n.href=a,s.getElementsByTagName("head")[0].appendChild(n)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let a=s.split(""),n=[],r=!1;return a.forEach(o=>{o=="-"?r=!0:(n.push(r?o.toUpperCase():o),r=!1)}),n.join("")},doDataLayer:function(s,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+a),window.dataLayer&&window.dataLayer.push({event:s,msg:a})},isJSON:function(s){let a=!1;try{a=typeof JSON.parse(s)}catch{}return a=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",n=>{n?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(n.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(n?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:s=>{let a=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(a=""),a},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((a,n)=>(a<<5)-a+n.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const n=56;a.forEach((o,l)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=s},l*n),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},l*(n+n)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;a.forEach((o,l)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=s},l*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},l*r+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,a,n=neodigmOpt.neodigmMetronome.countTo){const r=[16,n];return[...document.querySelectorAll(s)].forEach(function(o,l){let i=Math.abs(Number(o.textContent)-a);neodigmMetronome.unsubscribe(r[1]+l).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&a!=d){let u=i/r[0];u=Math.round(u),c!=0?o.textContent=d<a?d+u:d-u:o.textContent=a}},r[1]+l,r[0])}),neodigmUtils},typeOff:async function(s){let a=document.querySelector(s?.q1st);if(a){let n=a.textContent.length,r=window.getComputedStyle(a),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-o+"px");n;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},s.uniqueDelay*n--)}},typeOn:async function(s){let a=document.querySelector(s?.q1st);if(a){a.dataset.n55Typeon=0;let n=s.msg.replaceAll("|","   |   ")+"   ",r=n.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&r.length){let o=a.dataset.n55Typeon=neodigmUtils.f02x(r.length);n=r[o]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(o=>{let l=n[n.length-(o+1)];l=="|"&&(l="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=l,s?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,n.length)}return neodigmUtils},getValJSON:function(s,a){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+a+'": "'+s+'" }')}},walkDOM3:function(s,a,n=!1){let r=null;if(!r&&s?.dataset[a]&&(r=s),!r&&s?.parentNode?.dataset[a]&&(r=s.parentNode),!r&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[a]&&(r=s.parentNode.parentNode),r)return n?r:r.dataset[a]},doSetT:function(s,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,a):setTimeout(s,a)},shake:function(s,a=!0){return[...document.querySelectorAll(s)].forEach(function(n,r){n.classList.add("shake__an"),setTimeout(function(){n.classList.remove("shake__an")},460)}),ns.neodigmUtils},hardReload:function(s="n55reset"){const a=new URLSearchParams(window.location.search);a.set(s,new Date().getTime());const n=a.toString();window.location.search=n}}))}const R0={class:"auth-page"},D0={class:"auth-page-right"},N0={class:"auth-card"},I0={class:"form-group"},B0={class:"form-group"},F0={class:"password-input-wrapper"},z0=["type"],H0={style:{"text-align":"right"}},j0={class:"auth-link-center"},U0={__name:"signin_route",setup(e){const t=ct(),s=xe(),a=(p="signin")=>{t.push({name:p})};let n=null;const r=Ne(!1),o=()=>{r.value=!r.value},l=(p=3,f=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const g=Math.floor(Math.random()*p)+f,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${g}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(y,m)=>{const h=JSON.parse(m);switch(Object.keys(h)[0]){case"Motif":l();break;case"Lang":i();break}}))},i=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(_=>_.code==f)[0]?.copy;g=g.filter(_=>_[0]==p.dataset.syncMicrocopyText)[0],g&&(p.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(_=>_.code==f)[0]?.copy;g=g.filter(_=>_[0]==p.dataset.syncMicrocopyPlaceholder)[0],g&&(p.placeholder=g[1])})},c=p=>{ns.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let g=null,_=null;if(!p?.value)g="Please enter your email",_="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)g="Please enter a valid email address",_="#inp__text--email";else if(!f?.value)g="Please enter your password",_="#inp__text--password";else if(f.value.length<10)g="Password must be at least 10 characters",_="#inp__text--password";else{const y={email:p.value,hash:ns.neodigmUtils().genHash(f.value)};$e.doSignin(y,m=>{const v=(m?.entity?.tags||[]).find(x=>x.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=y.email,s.appSession.session_user.fname=m?.entity?.first,s.appSession.session_user.lname=m?.entity?.last,s.appSession.session_user.userName=v,s.appSession.session_user.name=v,s.appSession.session_user.guid=m?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const x=m?.entity?.guid||s.appSession.session_user.guid;ar.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",x,s,!0)}const w=Ag();if(w?.tournamentGuid){const x={name:"preview_route",params:{guid:w.tournamentGuid}};w.joinSlug&&(x.query={s:w.joinSlug}),t.push(x)}})}g&&(c(_),neodigmToast.q(g,"danger"))};return lt(()=>{l(),i()}),(p,f)=>(ue(),pe("div",R0,[f[10]||(f[10]=_t('<div class="auth-page-left" data-v-c062b40e><div class="auth-bg" data-v-c062b40e><div class="auth-bg-image" data-v-c062b40e></div><div class="auth-bg-image" data-v-c062b40e></div><div class="auth-bg-image" data-v-c062b40e></div></div><div class="auth-overlay" data-v-c062b40e></div><div class="auth-branding-content" data-v-c062b40e><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-c062b40e><p class="auth-branding-tagline" data-v-c062b40e>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-c062b40e>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-c062b40e> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),C("div",D0,[C("div",N0,[f[9]||(f[9]=C("div",{class:"auth-header"},[C("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),C("form",{class:"auth-form",onSubmit:na(u,["prevent"])},[C("div",I0,[f[4]||(f[4]=C("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),C("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=g=>d())},null,32)]),C("div",B0,[f[5]||(f[5]=C("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),C("div",F0,[C("input",{id:"inp__text--password",type:r.value?"text":"password",autocomplete:"current-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,z0),C("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=g=>o()),tabindex:"-1"},[C("span",{class:Ue(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),C("div",H0,[C("a",{class:"auth-link",onClick:f[2]||(f[2]=g=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=C("div",{class:"auth-actions"},[C("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),C("p",j0,[f[6]||(f[6]=C("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=et()),C("a",{class:"auth-link",onClick:f[3]||(f[3]=g=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},q0=Ts(U0,[["__scopeId","data-v-c062b40e"]]),V0={class:"auth-page"},G0={__name:"signout_route",setup(e){const t=ct();xe();const s=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(n,r)=>(ue(),pe("div",V0,[r[1]||(r[1]=_t('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),C("div",{class:"auth-page-right"},[C("div",{class:"auth-card"},[r[0]||(r[0]=C("div",{class:"auth-header"},[C("h1",{class:"auth-title"},"Sign Out"),C("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),C("div",{class:"auth-actions"},[C("button",{onClick:s,class:"btn btn-red"}," Sign Out "),C("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},K0=Ts(G0,[["__scopeId","data-v-15bfefd6"]]),Y0={class:"auth-page"},W0={class:"auth-page-right"},J0={class:"auth-card auth-card-wide"},X0={class:"form-row"},Q0={class:"form-group"},Z0={class:"form-group"},e_={class:"form-group"},t_={class:"form-group"},s_={class:"form-group"},a_={class:"password-input-wrapper"},n_=["type"],r_={class:"form-group"},o_={class:"password-input-wrapper"},i_=["type"],l_={class:"form-group form-group-checkbox"},c_={class:"checkbox-label"},d_={class:"auth-link-center"},u_={__name:"signup_route",setup(e){const t=ct(),s=xe(),a=(b="signin")=>{t.push({name:b})};let n=null,r=null;const o=Ne(!1),l=Ne(!1),i=Ne(!1),c=()=>{o.value=!o.value},d=()=>{l.value=!l.value},u=b=>{b.preventDefault(),de.publish(s.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(b=3,v=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":b=3,v=1;break;case"white_label":b=3,v=4;break}const w=Math.floor(Math.random()*b)+v,x=document.querySelector(".img__bg")?.classList;x&&(x.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),x.add(`img__bg--${w}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(P,R)=>{const S=JSON.parse(R);switch(Object.keys(S)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(b=>{const v=s.appCLIFeatures?.features?.lang?.state;let w=s.appMeta.microcopy.language.filter(x=>x.code==v)[0]?.copy;w=w.filter(x=>x[0]==b.dataset.syncMicrocopyText)[0],w&&(b.textContent=w[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(b=>{const v=s.appCLIFeatures?.features?.lang?.state;let w=s.appMeta.microcopy.language.filter(x=>x.code==v)[0]?.copy;w=w.filter(x=>x[0]==b.dataset.syncMicrocopyPlaceholder)[0],w&&(b.placeholder=w[1])})},g=b=>{ns.neodigmUtils().shake(b||"#inp__text--email")},_=()=>{let b=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(b)},y=b=>{const v=[];return b.length<10&&v.push("at least 10 characters"),/[a-z]/.test(b)||v.push("1 lowercase"),/[A-Z]/.test(b)||v.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(b)||v.push("1 special character"),/[^\x00-\x7F]/.test(b)&&v.push("ASCII characters only"),v},m=async()=>{const b=document.querySelector("#inp__text--username"),v=b?.value?.trim();if(v)try{(await $e.checkUserName(v)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),b.value="",b.focus())}catch(w){console.error("Error checking username:",w)}},h=()=>{const b=document.querySelector("#inp__text--first-name"),v=document.querySelector("#inp__text--last-name"),w=document.querySelector("#inp__text--email"),x=document.querySelector("#inp__text--username"),P=document.querySelector("#inp__text--password"),R=document.querySelector("#inp__text--verify-password");let S=null,k=null;if(!b?.value)S="Please enter your first name",k="#inp__text--first-name";else if(!v?.value)S="Please enter your last name",k="#inp__text--last-name";else if(!w?.value)S="Please enter your email",k="#inp__text--email";else if(w.value.indexOf("@")===-1||w.value.indexOf(".")===-1)S="Please enter a valid email address",k="#inp__text--email";else if(!x?.value)S="Please enter a user name",k="#inp__text--username";else if(!P?.value)S="Please enter a password",k="#inp__text--password";else{const T=y(P.value);if(T.length>0)S="Password must have:|"+T.join(", "),k="#inp__text--password";else if(!R?.value)S="Please verify your password",k="#inp__text--verify-password";else if(P.value!==R.value)S="Passwords do not match",k="#inp__text--verify-password";else{const O=b.value.trim(),D=v.value.trim(),V=[{userName:x.value.trim(),ts:Date.now()}],Q={email:w.value,hash:ns.neodigmUtils().genHash(P.value),first:O,last:D,company:"",phone:"",tags:V};$e.doSignup(Q,X=>{X.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}S&&(g(k),neodigmToast.q(S,"danger"))};return lt(()=>{p(),f(),r||(r=de.subscribe(s.hierTopics.ROUTE__SIGNUP__TERMS,(b,v)=>{JSON.parse(v).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),i.value=!0)}))}),(b,v)=>(ue(),pe("div",Y0,[v[23]||(v[23]=_t('<div class="auth-page-left" data-v-e1a086be><div class="auth-bg" data-v-e1a086be><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div></div><div class="auth-overlay" data-v-e1a086be></div><div class="auth-branding-content" data-v-e1a086be><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-e1a086be><p class="auth-branding-tagline" data-v-e1a086be>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-e1a086be>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-e1a086be> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),C("div",W0,[C("div",J0,[C("form",{class:"auth-form",onSubmit:na(h,["prevent"])},[C("div",X0,[C("div",Q0,[v[12]||(v[12]=C("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),C("input",{id:"inp__text--first-name",type:"text",autocomplete:"given-name","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"First name",onKeyup:v[0]||(v[0]=Xt(w=>h(),["enter"]))},null,32)]),C("div",Z0,[v[13]||(v[13]=C("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),C("input",{id:"inp__text--last-name",type:"text",autocomplete:"family-name","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Last name",onKeyup:v[1]||(v[1]=Xt(w=>h(),["enter"]))},null,32)])]),C("div",e_,[v[14]||(v[14]=C("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),C("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:v[2]||(v[2]=w=>_()),onKeyup:v[3]||(v[3]=Xt(w=>h(),["enter"]))},null,32)]),C("div",t_,[v[15]||(v[15]=C("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),C("input",{id:"inp__text--username",type:"text",autocomplete:"username","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:v[4]||(v[4]=w=>m()),onKeyup:v[5]||(v[5]=Xt(w=>h(),["enter"]))},null,32)]),C("div",s_,[v[16]||(v[16]=C("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),C("div",a_,[C("input",{id:"inp__text--password",type:o.value?"text":"password",autocomplete:"new-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:v[6]||(v[6]=Xt(w=>h(),["enter"]))},null,40,n_),C("button",{type:"button",class:"password-toggle-btn",onClick:v[7]||(v[7]=w=>c()),tabindex:"-1"},[C("span",{class:Ue(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),v[17]||(v[17]=C("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),C("div",r_,[v[18]||(v[18]=C("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),C("div",o_,[C("input",{id:"inp__text--verify-password",type:l.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:v[8]||(v[8]=Xt(w=>h(),["enter"]))},null,40,i_),C("button",{type:"button",class:"password-toggle-btn",onClick:v[9]||(v[9]=w=>d()),tabindex:"-1"},[C("span",{class:Ue(l.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),C("div",l_,[C("label",c_,[ts(C("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":v[10]||(v[10]=w=>i.value=w),class:"terms-checkbox"},null,512),[[cu,i.value]]),v[19]||(v[19]=C("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),C("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),v[22]||(v[22]=C("div",{class:"auth-actions"},[C("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),C("p",d_,[v[20]||(v[20]=C("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),v[21]||(v[21]=et()),C("a",{class:"auth-link",onClick:v[11]||(v[11]=w=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},p_=Ts(u_,[["__scopeId","data-v-e1a086be"]]),f_={class:"auth-page"},h_={class:"auth-page-right"},m_={class:"auth-card"},g_={class:"form-group"},b_={class:"auth-link-center"},__={__name:"forgot_route",setup(e){const t=ct(),s=xe(),a=(c="signin_route")=>{t.push({name:c})};let n=null;const r=(c=3,d=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(f,g)=>{const _=JSON.parse(g);switch(Object.keys(_)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},l=c=>{ns.neodigmUtils().shake(c||"#inp__text--email")},i=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:$e.genHeaders()};fetch($e.API_baseURI+"/m5t/"+$e.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(l(u),neodigmToast.q(d,"danger"))};return lt(()=>{r(),o()}),(c,d)=>(ue(),pe("div",f_,[d[7]||(d[7]=_t('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),C("div",h_,[C("div",m_,[d[6]||(d[6]=C("div",{class:"auth-header"},[C("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),C("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),C("form",{class:"auth-form",onSubmit:na(i,["prevent"])},[C("div",g_,[d[2]||(d[2]=C("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),C("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Xt(u=>i(),["enter"]))},null,32)]),d[5]||(d[5]=C("div",{class:"auth-actions"},[C("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),C("p",b_,[d[3]||(d[3]=C("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=et()),C("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},v_={class:"auth-page"},y_={class:"auth-page-right"},w_={class:"auth-card"},x_={class:"form-group"},T_={class:"password-input-wrapper"},S_=["type"],E_={class:"form-group"},k_={class:"password-input-wrapper"},P_=["type"],A_={__name:"resethash_route",setup(e){const t=ct(),s=xe(),a=()=>{t.push({name:"home_route"})};let n=null;const r=Ne(!1),o=Ne(!1),l=()=>{r.value=!r.value},i=()=>{o.value=!o.value},c=(g=3,_=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":g=3,_=1;break;case"white_label":g=3,_=4;break}const y=Math.floor(Math.random()*g)+_,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${y}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(h,b)=>{const v=JSON.parse(b);switch(Object.keys(v)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const _=s.appCLIFeatures?.features?.lang?.state;let y=s.appMeta.microcopy.language.filter(m=>m.code==_)[0]?.copy;y=y.filter(m=>m[0]==g.dataset.syncMicrocopyText)[0],y&&(g.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const _=s.appCLIFeatures?.features?.lang?.state;let y=s.appMeta.microcopy.language.filter(m=>m.code==_)[0]?.copy;y=y.filter(m=>m[0]==g.dataset.syncMicrocopyPlaceholder)[0],y&&(g.placeholder=y[1])})},u=g=>{ns.neodigmUtils().shake(g||"#inp__text--password")},p=g=>{const _=[];return g.length<10&&_.push("at least 10 characters"),/[a-z]/.test(g)||_.push("1 lowercase"),/[A-Z]/.test(g)||_.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||_.push("1 special character"),/[^\x00-\x7F]/.test(g)&&_.push("ASCII characters only"),_},f=()=>{const g=document.querySelector("#inp__text--password"),_=document.querySelector("#inp__text--verify-password");let y=null,m=null;if(!g?.value)y="Please enter a password",m="#inp__text--password";else{const h=p(g.value);if(h.length>0)y="Password must have:|"+h.join(", "),m="#inp__text--password";else if(!_?.value)y="Please verify your password",m="#inp__text--verify-password";else if(g.value!==_.value)y="Passwords do not match",m="#inp__text--verify-password";else{const b=s.appSession.session_user.email||"",v={email:b,hash:ns.neodigmUtils().genHash(g.value),modified_by:b},w={method:"POST",body:JSON.stringify(v),headers:$e.genHeaders()};fetch($e.API_baseURI+"/m5t/"+$e.API_ver+"/acctEntity/resetHash",w).then(x=>x.json()).then(x=>{x.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(x=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}y&&(u(m),neodigmToast.q(y,"danger"))};return lt(()=>{c(),d()}),(g,_)=>(ue(),pe("div",v_,[_[9]||(_[9]=_t('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),C("div",y_,[C("div",w_,[_[8]||(_[8]=C("div",{class:"auth-header"},[C("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),C("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),C("form",{class:"auth-form",onSubmit:na(f,["prevent"])},[C("div",x_,[_[4]||(_[4]=C("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),C("div",T_,[C("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:_[0]||(_[0]=Xt(y=>f(),["enter"]))},null,40,S_),C("button",{type:"button",class:"password-toggle-btn",onClick:_[1]||(_[1]=y=>l()),tabindex:"-1"},[C("span",{class:Ue(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),_[5]||(_[5]=C("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),C("div",E_,[_[6]||(_[6]=C("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),C("div",k_,[C("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:_[2]||(_[2]=Xt(y=>f(),["enter"]))},null,40,P_),C("button",{type:"button",class:"password-toggle-btn",onClick:_[3]||(_[3]=y=>i()),tabindex:"-1"},[C("span",{class:Ue(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),C("div",{class:"auth-actions"},[_[7]||(_[7]=C("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),C("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},C_=Ts(A_,[["__scopeId","data-v-3ae2c87b"]]),O_={class:"auth-page"},$_={class:"auth-page-right"},M_={class:"auth-card"},L_={class:"verification-content"},R_={class:"timer-display"},D_={__name:"verf_link_route",setup(e){const t=ct();Ba(),xe();const s=Ne(7200);let a=null;const n=o=>{const l=Math.floor(o/3600),i=Math.floor(o%3600/60),c=o%60;return`${l.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{a=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return lt(()=>{r()}),os(()=>{a&&clearInterval(a)}),(o,l)=>(ue(),pe("div",O_,[l[4]||(l[4]=_t('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),C("div",$_,[C("div",M_,[l[3]||(l[3]=C("div",{class:"auth-header"},[C("h1",{class:"auth-title"},"Check Your Email"),C("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),C("div",L_,[l[0]||(l[0]=C("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),l[1]||(l[1]=C("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),l[2]||(l[2]=C("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),C("div",R_,he(n(s.value)),1)])])])]))}},N_=Ts(D_,[["__scopeId","data-v-d92b2a33"]]);class I_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-email","data-active-count","data-played-count","data-trophy-count"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",s=this.getAttribute("data-email")||"",a=this.getAttribute("data-active-count")||"0",n=this.getAttribute("data-played-count")||"0",r=this.getAttribute("data-trophy-count")||"0",o=t.charAt(0).toUpperCase(),l=new Date,i=l.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),c=l.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"}),d=`${i} · ${c}`;this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
                <div class="hero__timestamp">${d}</div>
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
        `}}customElements.define("bma-profile-hero",I_);class B_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-played","data-first-place","data-trophies","data-favorite-sport","data-favorite-sport-group","data-win-rate","data-win-loss-record"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-played")||"0",s=this.getAttribute("data-first-place")||"0",a=this.getAttribute("data-trophies")||"0",n=this.getAttribute("data-favorite-sport")||"—",r=this.getAttribute("data-favorite-sport-group")||"",o=this.getAttribute("data-win-rate")||"—",l=this.getAttribute("data-win-loss-record")||"",i=r?`<bma-sport-icon data-sport-group="${r.toLowerCase()}" style="width:20px;height:20px;"></bma-sport-icon>`:"";this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
        `}}customElements.define("bma-profile-stats",B_);class F_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._openPanels={private:!0,public:!0}}static get observedAttributes(){return["data-contests","data-private-contests"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}get contests(){const t=this.getAttribute("data-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}get privateContests(){const t=this.getAttribute("data-private-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ge.find(a=>a.key===t)?.group||""}render(){const t=this.contests,s=this.privateContests,a=i=>`<span class="chip chip--${i==="LOCKED"?"locked":i==="UPCOMING"?"upcoming":i==="COMPLETED"?"completed":"default"}">${i==="LOCKED"?"In Progress":i==="UPCOMING"?"Open":i==="COMPLETED"?"Completed":i}</span>`,n=i=>i===1?'<div class="card__trophy" style="background-image: var(--trophy-gold-tall);"></div>':i===2?'<div class="card__trophy" style="background-image: var(--trophy-silver-tall);"></div>':i===3?'<div class="card__trophy" style="background-image: var(--trophy-bronze-tall);"></div>':"",r=i=>{const c=i.sports?.[0]||"",d=this._sportGroup(c),u=d?`<bma-sport-icon data-sport-group="${d}" style="width:18px;height:18px;flex-shrink:0;opacity:0.7;"></bma-sport-icon>`:"",p=i.startTime?aa.formatDateLocal(i.startTime,{month:"short",day:"numeric"}):"",f=i.placement?n(i.placement):"",g=i.isHosting?'<span class="chip chip--host">Host</span>':"";return`
                <div class="card" data-contest-id="${i.id||""}">
                    <div class="card__top">
                        <div class="card__info">
                            ${u}
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
                ${He()}
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
        `,this.shadowRoot.querySelectorAll(".card[data-contest-id]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.contestId;c&&this.dispatchEvent(new CustomEvent("contest-click",{detail:{contestGuid:c},bubbles:!0,composed:!0}))})}),this.shadowRoot.querySelectorAll("[data-toggle]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.toggle;this._openPanels[c]=!this._openPanels[c];const d=this.shadowRoot.querySelector(`[data-panel="${c}"]`);d&&d.classList.toggle("panel--collapsed",!this._openPanels[c]),i.setAttribute("aria-expanded",String(this._openPanels[c]))})})}}customElements.define("bma-profile-history",F_);class z_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-active-section","data-sections"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}get activeSection(){return this.getAttribute("data-active-section")||"overview"}render(){const t=this.activeSection,o=((this.getAttribute("data-sections")||"profile")==="top-players"?[{id:"overall",label:"Overall",icon:'<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>'},{id:"earnings",label:"TD$ Won",icon:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>'}]:[{id:"overview",label:"Overview",icon:'<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>'},{id:"contests",label:"Tourneys",icon:'<path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>'},{id:"guide",label:"How to Play",icon:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>'},{id:"account",label:"Account",icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',desktopOnly:!0}]).map(l=>`
            <button class="nav-item ${l.id===t?"nav-item--active":""}${l.desktopOnly?" nav-item--desktop-only":""}" data-section="${l.id}" type="button">
                <svg class="nav-item__icon" viewBox="0 0 24 24" fill="currentColor">${l.icon}</svg>
                <span class="nav-item__label">${l.label}</span>
            </button>
        `).join("");this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
        `,this.shadowRoot.querySelectorAll(".nav-item").forEach(l=>{l.addEventListener("click",()=>{const i=l.dataset.section;this.setAttribute("data-active-section",i),this.dispatchEvent(new CustomEvent("section-change",{detail:{section:i},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-nav",z_);class H_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}render(){this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
        `;const t=this.shadowRoot.getElementById("guide-modes-rail"),s=this.shadowRoot.querySelectorAll("#guide-modes-dots .modes-dot"),a=this.shadowRoot.getElementById("guide-modes-prev"),n=this.shadowRoot.getElementById("guide-modes-next");if(t&&s.length){const r=()=>(t.firstElementChild?.offsetWidth||300)+12;t.addEventListener("scroll",()=>{const o=Math.round(t.scrollLeft/r());s.forEach((l,i)=>l.classList.toggle("modes-dot--active",i===o))},{passive:!0}),s.forEach((o,l)=>{o.addEventListener("click",()=>{t.scrollTo({left:l*r(),behavior:"smooth"})})}),a&&a.addEventListener("click",()=>{t.scrollBy({left:-r(),behavior:"smooth"})}),n&&n.addEventListener("click",()=>{t.scrollBy({left:r(),behavior:"smooth"})})}}}customElements.define("bma-profile-guide",H_);const j_={class:"profile-layout"},U_={class:"profile-shell"},q_={class:"profile-sidebar"},V_=["data-active-section"],G_={class:"profile-content"},K_={class:"profile-panel"},Y_={class:"profile-panel"},W_={class:"profile-panel"},J_={class:"profile-panel profile-panel--account-desktop"},X_={class:"account-panel"},Q_={class:"mobile-account-bar"},Z_={__name:"profile_route",setup(e){const t=ct(),s=xe(),a=Ne("overview"),n=Ne(!1),r=()=>{t.push({name:"home_route"})},o=u=>{a.value=u.detail?.section||"overview"},l=u=>{const p=u.detail?.contestGuid;p&&(window._pendingTournGuid=p,t.push({name:"home_route"}))},i=()=>{const u=s.appSession?.session_user||{},p=u.guid,f=s.coreTourn.length>0?s.coreTourn[s.coreTourn.length-1].data:[],g=f.filter(X=>(X.entities?.guids||[]).includes(p)),_=g.filter(X=>["LOCKED","UPCOMING"].includes(X.status||X.class)),y=g.filter(X=>(X.status||X.class)==="COMPLETED");let m=0,h=0,b=0;g.forEach(X=>{(Array.isArray(X.tags)?X.tags:[]).forEach(K=>{if(!K||typeof K!="object")return;const ie=(K.entity_guid===p?K.badge:null)||(typeof K[p]=="string"?K[p]:null);typeof ie=="string"&&ie.startsWith("--badge__ribbon--")&&(ie==="--badge__ribbon--gold"?m++:ie==="--badge__ribbon--silver"?h++:ie==="--badge__ribbon--bronze"&&b++)})});const v={};g.forEach(X=>{(X.sports_allowed||[]).forEach(Z=>{const ie=Ge.find(J=>J.key===Z.key)?.group||"Other";v[ie]=(v[ie]||0)+1})});let w="",x="",P=0;Object.entries(v).forEach(([X,Z])=>{Z>P&&(P=Z,w=X,x=X)});const R=ke._betStatsCache?.stats||null;let S="—",k="";if(R){const X=R.wins+R.losses;X>0&&(S=Math.round(R.wins/X*100)+"%",k=`${R.wins}-${R.losses}`)}const T=X=>{let Z=null;(Array.isArray(X.tags)?X.tags:[]).forEach(ee=>{if(!ee||typeof ee!="object")return;const Y=(ee.entity_guid===p?ee.badge:null)||(typeof ee[p]=="string"?ee[p]:null);Y==="--badge__ribbon--gold"?Z=1:Y==="--badge__ribbon--silver"?Z=2:Y==="--badge__ribbon--bronze"&&(Z=3)});const ie=X.sports_allowed?.[0]?.key||"",J=Ge.find(ee=>ee.key===ie),z=!!(X.creator_guid&&X.creator_guid===p);return{id:X.guid,name:X.caption||"Tournament",sport:J?.title||"",sports:[ie],status:X.status||X.class||"",placement:Z,startTime:X.window_start_time,isPrivate:X.is_private===!0,isHosting:z}},O=(X,Z)=>new Date(Z.status_time||0)-new Date(X.status_time||0),D=[...g].filter(X=>X.is_private!==!0).sort(O).slice(0,20).map(T),Q=f.filter(X=>X.is_private===!0).filter(X=>{const Z=X.creator_guid&&X.creator_guid===p,K=(X.entities?.guids||[]).includes(p);return Z||K}).sort(O).slice(0,20).map(T);return{username:u.userName||u.name||"Player",email:u.email||"",activeCount:_.length,playedCount:y.length,trophyCount:m+h+b,gold:m,silver:h,bronze:b,firstPlace:m,favSport:w,favGroup:x,winRate:S,record:k,recentContests:D,privateContests:Q}},c=()=>{const u=i(),p=document.querySelector("bma-profile-hero");p&&(p.setAttribute("data-username",u.username),p.setAttribute("data-email",u.email),p.setAttribute("data-active-count",String(u.activeCount)),p.setAttribute("data-played-count",String(u.playedCount)),p.setAttribute("data-trophy-count",String(u.trophyCount)));const f=document.querySelector("bma-profile-stats");f&&(f.setAttribute("data-played",String(u.playedCount)),f.setAttribute("data-first-place",String(u.firstPlace)),f.setAttribute("data-trophies",String(u.trophyCount)),f.setAttribute("data-favorite-sport",u.favSport),f.setAttribute("data-favorite-sport-group",u.favGroup),f.setAttribute("data-win-rate",u.winRate),f.setAttribute("data-win-loss-record",u.record));const g=document.querySelector("bma-profile-history");g&&(g.setAttribute("data-contests",JSON.stringify(u.recentContests)),g.setAttribute("data-private-contests",JSON.stringify(u.privateContests)));const _=document.getElementById("profile-trophy-pack");_&&(_.innerHTML=`
        <div class="trophy-pack__header">My Trophies</div>
        <div class="trophy-podium">
          <div class="podium-col podium-col--silver">
            <div class="podium-col__trophy" style="background-image: var(--trophy-silver-tall); width: 56px; height: 56px;"></div>
            <span class="podium-col__count" style="color: #C0C0C0;">&times;${u.silver}</span>
            <div class="podium-col__pedestal podium-col__pedestal--silver">
              <span class="podium-col__place">2nd</span>
            </div>
          </div>
          <div class="podium-col podium-col--gold">
            <div class="podium-col__trophy" style="background-image: var(--trophy-gold-tall); width: 72px; height: 72px;"></div>
            <span class="podium-col__count" style="color: var(--status-locked-text, #FFD700);">&times;${u.gold}</span>
            <div class="podium-col__pedestal podium-col__pedestal--gold">
              <span class="podium-col__place">1st</span>
            </div>
          </div>
          <div class="podium-col podium-col--bronze">
            <div class="podium-col__trophy" style="background-image: var(--trophy-bronze-tall); width: 48px; height: 48px;"></div>
            <span class="podium-col__count" style="color: #DA954B;">&times;${u.bronze}</span>
            <div class="podium-col__pedestal podium-col__pedestal--bronze">
              <span class="podium-col__place">3rd</span>
            </div>
          </div>
        </div>
      `)};let d=null;return lt(async()=>{if(!s.appSession.session_user.authenticated){t.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),c();const u=s.appSession?.session_user?.guid;u&&ke._ensureBetStatsCache(u).then(p=>{p&&c()}),d=de.subscribe(s.hierTopics.ROUTE__HOME_HYDRATE,()=>{c()})}),os(()=>{d&&de.unsubscribe(d)}),(u,p)=>(ue(),pe("main",j_,[C("div",{class:"profile-header"},[C("button",{class:"profile-header__back",onClick:r,"aria-label":"Back"},[...p[7]||(p[7]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[C("polyline",{points:"15 18 9 12 15 6"})],-1)])]),p[8]||(p[8]=C("h1",{class:"profile-header__title"},"My Profile",-1))]),p[18]||(p[18]=C("bma-profile-hero",null,null,-1)),C("div",U_,[C("aside",q_,[C("bma-profile-nav",{"data-active-section":a.value,onSectionChange:o},null,40,V_)]),C("div",G_,[ts(C("section",K_,[...p[9]||(p[9]=[C("div",{id:"profile-trophy-pack",class:"trophy-pack"},null,-1),C("bma-profile-stats",null,null,-1)])],512),[[qa,a.value==="overview"]]),ts(C("section",Y_,[C("bma-profile-history",{onContestClick:l},null,32)],512),[[qa,a.value==="contests"]]),ts(C("section",W_,[...p[10]||(p[10]=[C("bma-profile-guide",null,null,-1)])],512),[[qa,a.value==="guide"]]),ts(C("section",J_,[C("div",X_,[C("button",{class:"account-btn",onClick:p[0]||(p[0]=f=>ut(de).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[11]||(p[11]=[C("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),et(" Change Password ",-1)])]),C("button",{class:"account-btn account-btn--signout",onClick:p[1]||(p[1]=f=>ut(de).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[12]||(p[12]=[C("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),et(" Sign Out ",-1)])])])],512),[[qa,a.value==="account"]])])]),C("div",Q_,[n.value?(ue(),pe("div",{key:0,class:"mobile-account-scrim",onClick:p[2]||(p[2]=f=>n.value=!1)})):Oe("",!0),n.value?(ue(),pe("div",{key:1,class:"mobile-account-bar__panel",onClick:p[5]||(p[5]=na(()=>{},["stop"]))},[C("button",{class:"account-btn",onClick:p[3]||(p[3]=f=>ut(de).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[13]||(p[13]=[C("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),et(" Change Password ",-1)])]),C("button",{class:"account-btn account-btn--signout",onClick:p[4]||(p[4]=f=>ut(de).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[14]||(p[14]=[C("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),et(" Sign Out ",-1)])])])):Oe("",!0),C("div",{class:"mobile-account-bar__trigger",onClick:p[6]||(p[6]=f=>n.value=!n.value)},[p[16]||(p[16]=C("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[C("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})],-1)),p[17]||(p[17]=C("span",null,"Account",-1)),(ue(),pe("svg",{class:Ue(["mobile-account-bar__chevron",n.value?"mobile-account-bar__chevron--open":""]),viewBox:"0 0 24 24",fill:"currentColor"},[...p[15]||(p[15]=[C("path",{d:"M7 10l5 5 5-5z"},null,-1)])],2))])])]))}};class ev extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-rank","data-trophies","data-td-dollars"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",s=this.getAttribute("data-rank")||"—",a=this.getAttribute("data-trophies")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),r=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString(),o=t.charAt(0).toUpperCase();this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
        `}}customElements.define("bma-top-players-hero",ev);const tv={class:"top-players-layout"},sv={class:"top-players-shell"},av={class:"top-players-sidebar"},nv=["data-active-section"],rv={__name:"top_players_route",setup(e){const t=ct(),s=xe(),a=Ne("overall"),n=()=>{t.push({name:"home_route"})},r=i=>{const c=i.detail?.section||"overall";a.value=c;const d=document.querySelector(`#global-leaderboard-container .glb__tab[data-tab="${c}"]`);d&&d.click()},o=i=>{const c=s.appSession?.session_user?.guid,d=s.appSession?.session_user?.userName||s.appSession?.session_user?.name||"Player",u=i.find(f=>f.user_guid===c),p=document.querySelector("bma-top-players-hero");if(p)if(u){const f=i.indexOf(u)+1;p.setAttribute("data-username",u.username||d),p.setAttribute("data-rank",String(f)),p.setAttribute("data-trophies",String(u.tournaments_won||0)),p.setAttribute("data-td-dollars",String(u.total_payout||0))}else p.setAttribute("data-username",d),p.setAttribute("data-rank","—"),p.setAttribute("data-trophies","0"),p.setAttribute("data-td-dollars","0")},l=async()=>{try{const i=ke._globalLBCache?.ALL;let c;i?.data&&Date.now()-i.ts<300*1e3?c=i.data:(c=await $e.fetchAllTimeLeaderboard("ALL",100,"td"),ke._globalLBCache&&(ke._globalLBCache.ALL={data:c,ts:Date.now(),inflight:!1})),o(c?.data||[]),typeof window._renderTopPlayers=="function"&&await window._renderTopPlayers("ALL")}catch(i){console.warn("[top_players_route] load failed",i)}};return lt(()=>{if(!s.appSession.session_user.authenticated){t.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),requestAnimationFrame(()=>{l()})}),(i,c)=>(ue(),pe("main",tv,[C("div",{class:"top-players-header"},[C("button",{class:"top-players-header__back",onClick:n,"aria-label":"Back"},[...c[0]||(c[0]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[C("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=C("h1",{class:"top-players-header__title"},"Top Players",-1))]),c[3]||(c[3]=C("bma-top-players-hero",null,null,-1)),C("div",sv,[C("aside",av,[C("bma-profile-nav",{"data-active-section":a.value,onSectionChange:r,"data-sections":"top-players"},null,40,nv)]),c[2]||(c[2]=C("div",{class:"top-players-content"},[C("div",{id:"global-leaderboard-container"},[C("div",{class:"leaderboard-empty"},[C("p",null,"Loading leaderboard...")])])],-1))])]))}},ov={class:"play-cntr","data-current-tourn-guid":"","data-current-tourn-action":""},iv={id:"play-section-PLAY",class:"play-section",style:{display:"none","padding-top":"8px"}},lv={class:"bet-grid"},cv={class:"bet-grid__slip","data-active-bet-tab":"MYBETS"},dv={class:"bet-grid__slip-BETSLIP",style:{display:"none"},"data-bets-valid":"false"},uv=["innerHTML"],pv={__name:"play_route",setup(e){const t=ct(),s=Ba(),a=xe(),n=window.EMPTY_BETSLIP_HTML||"",r=()=>{t.push({name:"home_route"})},o=()=>{const i=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__toggle-container"),u=document.querySelector(".bet-grid__select"),p=document.querySelector(".bet-grid__slip");if(!i||!c||!d||!u||!p){console.warn("[play_route] initBetGridToggle: missing elements");return}const f=window.matchMedia("(orientation: portrait)").matches,g=window.matchMedia("(max-width: 768px)").matches,_=m=>{u.classList.toggle("collapsed",m),p.classList.toggle("collapsed",!m),c.textContent=m?"Close Bet Slip":"Open Bet Slip",d.classList.toggle("bet-grid__toggle-container--open",m)};(f||g)&&_(!1);let y=null;i.addEventListener("pointerdown",m=>{y=m.pointerId}),i.addEventListener("pointerup",m=>{if(m.pointerId!==y)return;y=null;const h=!p.classList.contains("collapsed");_(!h)}),i.addEventListener("pointercancel",()=>{y=null}),i.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation()})},l=i=>{const c=i.target.closest("[data-publish-route-home], [data-sodapop-close]");c&&c.dataset?.publishRouteHome?.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&(document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(u=>{u.classList.toggle("dash-nav__btn--active",u===c)}),de.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`))};return lt(async()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}const i=s.query.guid||"",c=s.query.action||"INFO";if(!i){console.warn("[play_route] No tournament guid provided"),t.push({name:"home_route"});return}const d=a.appSession?.session_user?.guid;if(d)try{const u=await $e.fetchBetSlips(d,i);u?.rows&&(a.pushcoreBetSlip({timestamp:Date.now(),source:"API",data:u.rows}),setTimeout(()=>{de.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(u))},300))}catch(u){console.warn("[play_route] fetchBetSlips failed:",u)}document.body.classList.add("route-locked"),document.addEventListener("click",l),window.initBetGridToggle=o,requestAnimationFrame(()=>{typeof ke.initPlayScreen=="function"&&ke.initPlayScreen(i,c)})}),os(()=>{document.body.classList.remove("route-locked"),document.removeEventListener("click",l),delete window.initBetGridToggle;const i=document.querySelector(".play-cntr");i&&(i.dataset.currentTournGuid="",i.dataset.currentTournAction="")}),(i,c)=>(ue(),pe("article",ov,[C("div",{class:"head-caption tourn-dashboard"},[C("div",{class:"head-caption__back",onClick:r,role:"button",tabindex:"0","aria-label":"Back"},[...c[0]||(c[0]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[C("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=C("section",{class:"head-caption__content"},[C("h3",{id:"pop-play__tourn-caption--id",class:"pop-play__tourn-caption"},"Tournament"),C("p",{id:"pop-play__tourn-tagline--id",class:"pop-play__tourn-tagline"},"Loading...")],-1))]),c[6]||(c[6]=_t('<div class="dash-stats"><div class="dash-stat"><span class="dash-stat__label">TD$ Balance</span><span class="dash-stat__value" id="dashboard-td-balance">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--balance" style="width:100%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">At Risk</span><span class="dash-stat__value dash-stat__value--pending" id="dashboard-td-pending">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--pending" style="width:0%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">Rank</span><span class="dash-stat__value" id="dashboard-rank"><span class="tourn-dashboard__rank-text">-/-</span><span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--participants" style="width:0%;"></div></div></div></div><nav class="dash-nav"><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><span>Info</span></button><button id="btn-join__play--id" class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="visibility:hidden;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><span>Play</span></button><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"></path></svg><span>Leaderboard</span></button></nav><div id="play-section-INFO" class="play-section play-section--active"><div id="pop-play__caro-info-summary2--id"></div><div id="pop-play__caro-info-summary1--id"></div><div id="pop-play__caro-info-list--id"></div></div>',3)),C("div",iv,[C("article",lv,[c[5]||(c[5]=_t('<section class="bet-grid__select"><div id="game-mode-progress" style="display:none;"></div><article class="select-grid"></article></section><div class="bet-grid__toggle-container"><button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle bet slip"><span class="bet-grid__toggle-summary"><span class="bet-grid__toggle-badge" id="bet-grid-toggle-count">0</span><span class="bet-grid__toggle-label">Bets</span></span><span class="bet-grid__toggle-action"><span class="bet-grid__toggle-text">Open Bet Slip</span><svg class="bet-grid__toggle-chevron" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 14l5-5 5 5z"></path></svg></span></button></div>',2)),C("aside",cv,[c[3]||(c[3]=_t('<nav class="bet-slip__tabs"><button class="bet-slip-tab" data-bet-tab="BETSLIP">Bet Slip<span class="bet-slip-tab__badge bet-slip-tab__badge--slip" id="bet-slip-tab-slip-badge" style="visibility:hidden;">0</span></button><button class="bet-slip-tab" data-bet-tab="MYBETS">My Bets<span class="bet-slip-tab__badge bet-slip-tab__badge--mybets" id="bet-slip-tab-mybets-badge" style="visibility:hidden;">0</span></button></nav>',1)),C("section",dv,[C("div",{class:"bet-grid__slip-BETSLIP-content",innerHTML:ut(n)},null,8,uv),c[2]||(c[2]=_t('<output class="bet-grid__slip-BETSLIP-summary"><div class="summary-row summary-row--labels"><div class="summary-cell">TD$</div><div class="summary-cell">Stake</div><div class="summary-cell">Payout</div></div><div class="summary-row summary-row--values"><div id="summary-balance" class="summary-cell">0.00</div><div id="summary-stake" class="summary-cell">0.00</div><div id="summary-payout" class="summary-cell">0.00</div></div></output><button class="bet-grid__slip-BETSLIP-cta" data-publish-betslip="COREBETSLIP.BET">BET!</button>',2))]),c[4]||(c[4]=C("div",{class:"bet-grid__slip-MYBETS"},null,-1))])])]),c[7]||(c[7]=C("div",{id:"play-section-LEADERBOARD",class:"play-section",style:{display:"none"}},[C("div",{id:"pop-play__caro-leaderboard--id"})],-1)),c[8]||(c[8]=C("br",null,null,-1))]))}},fv={class:"preview-cntr"},hv={class:"head-caption tourn-dashboard"},mv={class:"head-caption__content"},gv={class:"pop-play__tourn-caption"},bv={class:"pop-play__tourn-tagline"},_v={key:0,class:"preview-wrap"},vv={key:0,class:"preview-invite-band"},yv={class:"info-summary-pack"},wv={class:"info-summary-pack__stat"},xv={class:"info-summary-pack__stat-value",style:{color:"var(--status-upcoming-text, #00E676)"}},Tv={class:"info-summary-pack__stat"},Sv={class:"info-summary-pack__stat-value"},Ev={class:"info-summary-pack__stat"},kv={class:"info-summary-pack__stat-value"},Pv={class:"info-pack info-pack--padded"},Av={class:"info-progress-status"},Cv={class:"info-progress-status__row"},Ov={key:0,class:"preview-countdown"},$v={class:"preview-schedule-row"},Mv={class:"preview-schedule-value"},Lv={class:"preview-schedule-value"},Rv={key:1,class:"info-pack info-pack--padded preview-joined"},Dv={class:"preview-section-row"},Nv={class:"preview-section-meta"},Iv={class:"preview-players-row"},Bv={class:"preview-player-avatar"},Fv={class:"preview-player-name"},zv={key:0,class:"preview-player-more"},Hv={key:2,class:"info-pack info-pack--padded preview-trophies"},jv={class:"preview-trophy-podium"},Uv={key:0,class:"preview-trophy preview-trophy--silver"},qv={class:"preview-trophy-count"},Vv={key:1,class:"preview-trophy preview-trophy--gold"},Gv={class:"preview-trophy-count"},Kv={key:2,class:"preview-trophy preview-trophy--bronze"},Yv={class:"preview-trophy-count"},Wv={class:"info-pack preview-legend"},Jv={class:"preview-legend-item"},Xv={class:"preview-legend-value"},Qv={class:"preview-legend-item"},Zv={class:"preview-legend-value"},ey={class:"preview-legend-item"},ty={class:"preview-legend-value",style:{color:"var(--status-locked-text, #F7C60D)"}},sy={class:"preview-cta-bar"},ay={key:1,class:"preview-cta-hint"},ny={key:2,class:"preview-cta-hint"},ry={key:1,class:"preview-empty"},oy={__name:"preview_route",setup(e){const t=ct(),s=Ba(),a=xe(),n=ge(()=>s.params.guid||""),r=ge(()=>s.query.s||null),o=Ne(null),l=Ne("idle"),i=ge(()=>{if(a.coreTourn.length){const $=a.coreTourn[a.coreTourn.length-1].data.find(U=>U.guid===n.value);if($)return $}return o.value}),c=ge(()=>a.appSession?.session_user?.authenticated===!0),d=ge(()=>!c.value),u=ge(()=>a.appSession?.session_user?.guid||""),p=ge(()=>!c.value||!i.value?!1:(i.value.entities?.guids||[]).includes(u.value)),f=ge(()=>{if(!c.value||!i.value)return!1;const A=i.value.creator_guid;return!!A&&A===u.value}),g=ge(()=>{const A=i.value;if(!A)return"";if(A.share_url)return A.share_url;const U=`${window.location.origin+window.location.pathname}#/preview/${A.guid||n.value}`;return A.join_slug?`${U}?s=${encodeURIComponent(A.join_slug)}`:U}),_=ge(()=>Number(i.value?.tournament_dollars||0)),y=ge(()=>{const A=i.value;return A?typeof A.entities?.count=="number"?A.entities.count:A.entities?.guids?.length||0:0}),m=ge(()=>i.value?.entities?.max||0),h=ge(()=>i.value?.matches_expanded?.length||0),b=ge(()=>{const A=i.value;return A?A.format?.on_going!==void 0?A.format.on_going:(A.tags||[]).some($=>$.override_last_match_close===!0):!1}),v=ge(()=>{const A=i.value;return A?A.format?.odds_locked_at_start!==void 0?A.format.odds_locked_at_start:(A.tags||[]).some($=>$.match_inprogress_lock===!0):!1}),w=ge(()=>{const A=i.value;if(!A)return null;if(A.trophies){const j=A.trophies.gold||0,te=A.trophies.silver||0,I=A.trophies.bronze||0;return j+te+I===0?null:{gold:j,silver:te,bronze:I}}const $=(A.tags||[]).find(j=>j.badge_gold!==void 0||j.badge_silver!==void 0||j.badge_bronze!==void 0);if(!$)return null;const U=$.badge_gold||0,N=$.badge_silver||0,G=$.badge_bronze||0;return U+N+G===0?null:{gold:U,silver:N,bronze:G}}),x=ge(()=>{const A=o.value?.joined_players||i.value?.joined_players;return Array.isArray(A)?A:[]}),P=ge(()=>Math.max(0,y.value-x.value.length)),R=ge(()=>v.value?"Locked Odds":"Live Odds"),S=ge(()=>b.value?"On-going":"Fixed Slate"),k=ge(()=>{const A=i.value;if(!A)return"Bet Max Tourney";const $=A.game_mode?.class||A.class||"DEFAULT_FORMAT";return $==="DEFAULT_FORMAT"?"Bet Max Tourney":A.game_mode?.label||$}),T=ge(()=>{if(D.value!=="UPCOMING")return"";const A=i.value;if(!A?.window_start_time)return"";let $=A.window_start_time;!$.includes("Z")&&!$.match(/[+-]\d{2}:\d{2}$/)&&($+="Z");const U=new Date($).getTime()-Date.now();if(U<=0)return"Starting now";const N=Math.floor(U/36e5),G=Math.floor(U%36e5/6e4);return N>=24?`Starts in ${Math.floor(N/24)}d ${N%24}h`:N>0?`Starts in ${N}h ${G}m`:G>5?`Starts in ${G}m`:"Starting soon"}),O=ge(()=>h.value===0?"TBD":`${h.value}${b.value?"+":""}`),D=ge(()=>i.value?.status||""),V=ge(()=>D.value==="LOCKED"?"In Progress":D.value==="UPCOMING"?"Open for Entry":D.value==="COMPLETED"?"Completed":D.value),Q=ge(()=>D.value==="LOCKED"?"var(--status-locked-text, #F7C60D)":D.value==="UPCOMING"?"var(--status-upcoming-text, #00E676)":D.value==="COMPLETED"?"var(--status-completed-text, #CD5659)":"#fff"),X=ge(()=>c.value?p.value?"View Tournament":D.value==="COMPLETED"?"View Results":D.value==="LOCKED"?"View Tournament":i.value?.is_private===!0?"Join Bet Max Pool":"Join Tournament":"Sign Up to Join"),Z=()=>{c.value?t.push({name:"home_route"}):t.push({name:"signin_route"})},K=()=>{if(i.value){if(!c.value){kg(n.value,r.value),t.push({name:"signup_route"});return}if(p.value||D.value!=="UPCOMING"){t.push({name:"play_route",query:{guid:n.value,action:"INFO"}});return}de.publish(a.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:n.value,ts:Date.now()}))}},ie=async()=>{const A=g.value;if(!A)return;const $=i.value?.caption||"Join my tournament",U=`You're invited to join ${$} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:$,text:U,url:A});return}catch(N){if(N?.name==="AbortError")return}try{await navigator.clipboard.writeText(A),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(N){console.warn("[preview_route] clipboard write failed:",N),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Long-press to copy: "+A,"danger")}},J=ge(()=>{const A=i.value;return A?(A.game_mode?.class||A.game_mode_class||"DEFAULT_FORMAT")==="DEFAULT_FORMAT":!0}),z=A=>{if(!A)return"TBD";let $=new Date(A);if(!A.includes("Z")&&!A.match(/[+-]\d{2}:\d{2}$/)&&($=new Date(A+"Z")),isNaN($.getTime()))return"TBD";const U=J.value?{weekday:"short",month:"short",day:"numeric"}:{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return $.toLocaleString(void 0,U)},ee=async()=>{if(n.value){l.value="loading";try{const{data:A,status:$,ok:U}=await $e.fetchTournamentPreview(n.value,r.value);U&&A?(o.value=A,l.value="ok"):$===404?l.value="not_found":$===410?l.value="archived":l.value="error"}catch(A){console.warn("[preview_route] fetchTournamentPreview failed:",A),l.value="error"}}},Y=ge(()=>{switch(l.value){case"loading":return"Loading tournament…";case"not_found":return"This tournament doesn't exist or the link is wrong.";case"archived":return"This tournament has ended and been archived.";case"error":return"Couldn't load this tournament. Please try again.";default:return"Tournament details aren't available yet."}});return lt(()=>{document.body.classList.add("route-tournament-preview"),ee()}),os(()=>{document.body.classList.remove("route-tournament-preview")}),(A,$)=>(ue(),pe("main",fv,[C("div",hv,[C("div",{class:"head-caption__back",onClick:Z,role:"button",tabindex:"0","aria-label":"Back"},[...$[0]||($[0]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[C("polyline",{points:"15 18 9 12 15 6"})],-1)])]),C("section",mv,[C("h3",gv,he(i.value?.caption||"Tournament"),1),C("p",bv,he(i.value?.tagline||(d.value?"You're invited to a tournament":"")),1)])]),i.value?(ue(),pe("div",_v,[d.value?(ue(),pe("div",vv,[...$[1]||($[1]=[C("img",{class:"preview-invite-band__logo",src:"https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&format=png",alt:"Bet Max Tourney"},null,-1),C("div",{class:"preview-invite-band__text"},[C("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[C("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})]),C("span",null,"You're invited to join this tournament")],-1)])])):Oe("",!0),C("div",yv,[C("div",wv,[$[2]||($[2]=C("span",{class:"info-summary-pack__stat-label"},"Starting TD$",-1)),C("span",xv,"TD$ "+he(_.value.toLocaleString()),1)]),C("div",Tv,[$[3]||($[3]=C("span",{class:"info-summary-pack__stat-label"},"Players",-1)),C("span",Sv,he(y.value)+" / "+he(m.value),1)]),C("div",Ev,[$[4]||($[4]=C("span",{class:"info-summary-pack__stat-label"},"Games",-1)),C("span",kv,he(O.value),1)])]),C("div",Pv,[C("div",Av,[C("div",Cv,[$[5]||($[5]=C("span",{class:"info-progress-status__label"},"Status",-1)),C("span",{class:"info-progress-status__value",style:pr({color:Q.value})},he(V.value),5)]),T.value?(ue(),pe("div",Ov,he(T.value),1)):Oe("",!0)]),$[8]||($[8]=C("div",{class:"info-progress-divider"},null,-1)),C("div",$v,[C("div",null,[$[6]||($[6]=C("span",{class:"info-progress-status__label"},"Starts",-1)),C("span",Mv,he(z(i.value.window_start_time)),1)]),C("div",null,[$[7]||($[7]=C("span",{class:"info-progress-status__label"},"Ends (est.)",-1)),C("span",Lv,he(z(i.value.window_end_time)),1)])])]),x.value.length>0?(ue(),pe("div",Rv,[C("div",Dv,[$[9]||($[9]=C("span",{class:"preview-section-label"},"Who's In",-1)),C("span",Nv,he(y.value)+" joined",1)]),C("div",Iv,[(ue(!0),pe(qe,null,ds(x.value,U=>(ue(),pe("div",{class:"preview-player-chip",key:U.username},[C("div",Bv,he((U.username||"?").charAt(0).toUpperCase()),1),C("span",Fv,he(U.username),1)]))),128)),P.value>0?(ue(),pe("div",zv," +"+he(P.value)+" more ",1)):Oe("",!0)])])):Oe("",!0),w.value?(ue(),pe("div",Hv,[$[16]||($[16]=C("span",{class:"preview-section-label"},"Trophies",-1)),C("div",jv,[w.value.silver>0?(ue(),pe("div",Uv,[$[10]||($[10]=C("div",{class:"preview-trophy-img"},null,-1)),C("span",qv,"×"+he(w.value.silver),1),$[11]||($[11]=C("span",{class:"preview-trophy-place"},"2nd",-1))])):Oe("",!0),w.value.gold>0?(ue(),pe("div",Vv,[$[12]||($[12]=C("div",{class:"preview-trophy-img preview-trophy-img--lg"},null,-1)),C("span",Gv,"×"+he(w.value.gold),1),$[13]||($[13]=C("span",{class:"preview-trophy-place"},"1st",-1))])):Oe("",!0),w.value.bronze>0?(ue(),pe("div",Kv,[$[14]||($[14]=C("div",{class:"preview-trophy-img"},null,-1)),C("span",Yv,"×"+he(w.value.bronze),1),$[15]||($[15]=C("span",{class:"preview-trophy-place"},"3rd",-1))])):Oe("",!0)])])):Oe("",!0),C("div",Wv,[C("div",Jv,[$[17]||($[17]=C("span",{class:"preview-legend-label"},"Odds Format",-1)),C("span",Xv,he(R.value),1)]),C("div",Qv,[$[18]||($[18]=C("span",{class:"preview-legend-label"},"Format",-1)),C("span",Zv,he(S.value),1)]),C("div",ey,[$[19]||($[19]=C("span",{class:"preview-legend-label"},"Game Mode",-1)),C("span",ty,he(k.value),1)]),$[20]||($[20]=C("div",{class:"preview-legend-item"},[C("span",{class:"preview-legend-label"},"Entry"),C("span",{class:"preview-legend-value",style:{color:"var(--status-upcoming-text, #00E676)"}},"Free")],-1))]),C("div",sy,[f.value?(ue(),pe("button",{key:0,class:"preview-share-btn",onClick:ie,"aria-label":"Share invite link"},[...$[21]||($[21]=[C("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[C("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})],-1),C("span",null,"Share Invite Link",-1)])])):Oe("",!0),C("button",{class:"preview-cta-btn",onClick:K},he(X.value),1),d.value?(ue(),pe("p",ay," Sign up is quick. You'll come right back to join. ")):f.value?(ue(),pe("p",ny," You're the host. Share the link to fill your lobby. ")):Oe("",!0)])])):(ue(),pe("div",ry,[C("p",null,he(Y.value),1),l.value!=="loading"?(ue(),pe("button",{key:0,class:"preview-empty-btn",onClick:Z},"Back")):Oe("",!0)]))]))}},iy={class:"create-cntr"},ly={class:"create-steps"},cy=["onClick"],dy={class:"create-steps__num"},uy={class:"create-steps__label"},py={class:"create-wrap"},fy={key:0,class:"create-banner create-banner--error"},hy={key:1,class:"create-step"},my={key:0,class:"create-banner create-banner--gate",role:"status"},gy={class:"create-banner__msg"},by={class:"create-field"},_y={key:0,class:"create-field__hint"},vy={key:1,class:"create-field__hint create-field__hint--muted"},yy={class:"create-field"},wy={key:0,class:"create-field__hint"},xy={key:1,class:"create-field__hint create-field__hint--muted"},Ty={class:"create-field"},Sy=["data-offset","onClick"],Ey={class:"create-day-chip__dow"},ky={class:"create-day-chip__date"},Py={key:0,class:"create-day-chip__tag"},Ay={class:"create-field"},Cy={class:"create-chip-row"},Oy=["onClick"],$y={key:0,class:"create-field__hint"},My={key:1,class:"create-field__hint create-field__hint--muted"},Ly={key:1,class:"create-duration"},Ry={class:"create-duration__range"},Dy={class:"create-duration__day"},Ny={class:"create-duration__day"},Iy={class:"create-duration__num-row"},By={class:"create-duration__num"},Fy={class:"create-duration__label"},zy={key:2,class:"create-step"},Hy={class:"create-mode-list"},jy=["disabled","onClick"],Uy={class:"create-mode__head"},qy={class:"create-mode__title"},Vy={class:"create-mode__desc"},Gy={key:0,class:"create-mode__check","aria-hidden":"true"},Ky={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},Yy={key:3,class:"create-step"},Wy={class:"create-sports-header"},Jy={class:"create-sports-counter__num"},Xy={class:"create-sport-picker"},Qy=["disabled","onClick"],Zy={class:"create-sport-pick__icon"},e1=["sport","data-sport-group"],t1={class:"create-sport-pick__title"},s1={key:0,class:"create-sport-pick__check","aria-hidden":"true"},a1={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},n1={key:1,class:"create-slate"},r1={class:"create-slate__rows"},o1={class:"create-slate-row__icon"},i1=["sport","data-sport-group"],l1={class:"create-slate-row__main"},c1={class:"create-slate-row__title"},d1={key:0,class:"create-slate-row__status"},u1={key:1,class:"create-slate-row__status create-slate-row__status--muted"},p1=["aria-label","onClick"],f1={key:0,class:"create-slate__footnote"},h1={key:1,class:"create-slate__footnote create-slate__footnote--muted"},m1={key:4,class:"create-step"},g1={class:"create-field"},b1={key:0,class:"create-field__hint"},_1={key:1,class:"create-field__hint create-field__hint--muted"},v1={class:"create-toggle"},y1={key:5,class:"create-step"},w1={class:"create-review-card"},x1={class:"create-review-row"},T1={class:"create-review-value"},S1={key:0,class:"create-review-row"},E1={class:"create-review-value"},k1={class:"create-review-row"},P1={class:"create-review-value"},A1={class:"create-review-row"},C1={class:"create-review-value"},O1={class:"create-review-row"},$1={class:"create-review-value"},M1={class:"create-review-row"},L1={class:"create-review-value"},R1={class:"create-nav"},D1=["disabled"],N1=["disabled"],I1=["disabled"],so=7,B1=28,Al=2,F1={__name:"create_tournament_route",setup(e){const t=ct(),s=xe(),a=[{id:1,label:"Basics"},{id:2,label:"Game Mode"},{id:3,label:"Sports"},{id:4,label:"Players"},{id:5,label:"Review"}],n=Ne(1),r=[{key:"DEFAULT_FORMAT",title:"Bet Max Tourney",tagline:"The classic",description:"Place bets across every game on your slate. Mix spreads, moneylines, and totals to build your edge and chase the biggest win in the pool.",available:!0},{key:"SET_AND_FORGET",title:"Set It and Forget It",tagline:"Coming soon",description:"Lock in all your picks before the window opens. No in-window edits, the slate plays itself out while you watch.",available:!1},{key:"LONGSHOT_MAYHEM",title:"Longshot Mayhem",tagline:"Coming soon",description:"Boosted payouts on underdogs and plus-money plays. Chalk barely moves the needle, upsets blow the pool wide open.",available:!1},{key:"BRACKET_MODE",title:"Bracket Mode",tagline:"Coming soon",description:"Classic head-to-head bracket. Pick winners round by round and survive all the way to the final matchup.",available:!1},{key:"SURVIVOR",title:"Survivor",tagline:"Coming soon",description:"One pick a day, and your pick has to hit. Miss once and you're out. Last entrant standing takes the pool.",available:!1},{key:"SQUADS",title:"Squads",tagline:"Coming soon",description:"Team up with friends and bet together. Squad scores stack across the roster, compete as a crew for the top of the board.",available:!1}],o=ge(()=>{const B=s.appSession?.session_user?.guid;if(!B)return null;const F=s.coreTourn?.length?s.coreTourn[s.coreTourn.length-1]:null;return F&&(F.data||[]).find(ne=>{if(!ne?.creator_guid||ne.creator_guid!==B||ne.is_private!==!0)return!1;const re=ne.status||ne.class;return re==="UPCOMING"||re==="LOCKED"})||null}),l=ge(()=>{const B=o.value?.window_end_time;if(!B)return"";let F=new Date(B);return!B.includes("Z")&&!B.match(/[+-]\d{2}:\d{2}$/)&&(F=new Date(B+"Z")),isNaN(F.getTime())?"":F.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}),i=ge(()=>{const B=s.appSession?.session_user||{};return B.first||B.username||"My"}),c=ge(()=>{const B=new Date().toLocaleString(void 0,{month:"long"});return`${i.value}'s ${B} Pool`}),d=B=>{const F=q=>String(q).padStart(2,"0");return`${B.getFullYear()}-${F(B.getMonth()+1)}-${F(B.getDate())}`},u=(()=>{const B=new Date;return B.setHours(0,0,0,0),B})(),p=(B,F)=>{const q=new Date(B.getTime());return q.setDate(q.getDate()+F),q},f=Array.from({length:B1},(B,F)=>F),g=B=>p(u,B),_=B=>B.toLocaleDateString(void 0,{weekday:"short"}),y=B=>B.toLocaleDateString(void 0,{month:"short",day:"numeric"}),m=B=>B===0?"Today":B===1?"Tomorrow":"",h=[{key:1,label:"1 day"},{key:2,label:"2 days"},{key:3,label:"3 days"},{key:5,label:"5 days"},{key:7,label:"7 days"}],b=(()=>{const B=(6-u.getDay()+7)%7;return B===0?0:B})(),v=Ne({caption:c.value,tagline:"",sportKeys:[],gameMode:"DEFAULT_FORMAT",startOffset:b,lengthDays:3,maxEntrants:10,creatorParticipating:!0}),w=B=>{const F=r.find(q=>q.key===B);!F||!F.available||(v.value.gameMode=B)},x=ge(()=>d(p(u,v.value.startOffset))),P=ge(()=>{const B=v.value.startOffset+Math.max(1,v.value.lengthDays)-1;return d(p(u,B))}),R=Ne(typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`draft_${crypto.randomUUID()}`:`draft_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`),S=Ne(!1),k=Ne(""),T=Ne({}),O=Ne(null),D=(B,F=!1)=>{if(!B)return"";const[q,ne,re]=B.split("-").map(Number);return new Date(q,(ne||1)-1,re||1,F?23:0,F?59:0,0,0).toISOString()},V=ge(()=>D(x.value,!1)),Q=ge(()=>D(P.value,!0)),X=B=>{if(!B)return"";const[F,q,ne]=B.split("-").map(Number);return new Date(F,(q||1)-1,ne||1).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})},Z=B=>{if(!B)return NaN;const[F,q,ne]=B.split("-").map(Number);return new Date(F,(q||1)-1,ne||1,0,0,0,0).getTime()},K=ge(()=>{if(!x.value||!P.value)return 0;const B=Z(x.value),F=Z(P.value);return isNaN(B)||isNaN(F)?0:Math.max(1,Math.round((F-B)/(24*3600*1e3))+1)}),ie=ge(()=>{const B=new Set,F=[],q=s.coreTourn?.length?s.coreTourn[s.coreTourn.length-1]:null;if(!q)return F;for(const ne of q.data||[]){const re=Array.isArray(ne.matches_expanded)?ne.matches_expanded:[];for(const oe of re){const se=oe.guid||oe.odds_id||oe.id;!se||B.has(se)||(B.add(se),F.push(oe))}}return F}),J=B=>{if(!B||!V.value||!Q.value)return 0;const F=new Date(V.value).getTime(),q=new Date(Q.value).getTime();return ie.value.reduce((ne,re)=>{if(re.sport_id!==B)return ne;const oe=re.scheduled_at||"";let se=new Date(oe);!oe.includes("Z")&&!oe.match(/[+-]\d{2}:\d{2}$/)&&(se=new Date(oe+"Z"));const le=se.getTime();return isNaN(le)?ne:le>=F&&le<=q?ne+1:ne},0)},z=ge(()=>(s.appMeta?.sports||[]).filter(F=>F.active===!0&&!F.has_outrights).map(F=>({key:F.key,title:F.title||F.description||F.key,group:F.group||"default"})).sort((F,q)=>F.title.localeCompare(q.title))),ee=B=>z.value.find(F=>F.key===B)||{key:B,title:B,group:"default"},Y=ge(()=>v.value.sportKeys.length>=Al),A=B=>{const F=v.value.sportKeys.indexOf(B);if(F>=0){v.value.sportKeys.splice(F,1);return}if(v.value.sportKeys.length>=2){k.value="Free tier is limited to 2 sports. Deselect one first.";return}v.value.sportKeys.push(B)},$=B=>v.value.sportKeys.includes(B),U=ge(()=>v.value.sportKeys.reduce((B,F)=>B+J(F),0)),N=ge(()=>{const B={},F=Z(x.value),q=Z(P.value),ne=u.getTime();isNaN(F)?B.window="Pick a start day.":F<ne&&(B.window="Start day can't be in the past."),isNaN(q)?B.window=B.window||"Pick a length.":F&&q<F&&(B.window="End day must be on or after the start day."),v.value.lengthDays>so&&(B.window=`Free tier contests max out at ${so} days.`);const re=(v.value.caption||"").trim();(re.length<3||re.length>60)&&(B.caption="Name must be 3 to 60 characters."),(v.value.tagline||"").trim().length>120&&(B.tagline="Tagline max is 120 characters.");const se=r.find(fe=>fe.key===v.value.gameMode);(!se||!se.available)&&(B.mode="Pick a game mode."),v.value.sportKeys.length<1&&(B.sports="Pick at least one sport."),v.value.sportKeys.length>2&&(B.sports="Free tier is limited to 2 sports.");const le=Number(v.value.maxEntrants);return le>=2&&le<=10||(B.max="Max entrants must be between 2 and 10."),B}),G=B=>{const F=N.value;return B===1?!F.window&&!F.caption&&!F.tagline:B===2?!F.mode:B===3?!F.sports:B===4?!F.max:B===5?!F.window&&!F.caption&&!F.tagline&&!F.mode&&!F.sports&&!F.max:!0},j=ge(()=>G(n.value)),te=()=>{if(k.value="",!j.value){k.value="Please complete this step before moving on.",T.value=N.value;return}T.value={},n.value<a.length&&n.value++},I=()=>{k.value="",T.value={},n.value>1&&n.value--},E=B=>{B<n.value&&(n.value=B,k.value="",T.value={})},M=()=>({caption:v.value.caption.trim(),tagline:v.value.tagline.trim()||void 0,sports_allowed:v.value.sportKeys.map(B=>({key:B})),window_start_time:V.value,window_end_time:Q.value,entities:{max:Number(v.value.maxEntrants)},creator_participating:v.value.creatorParticipating,game_mode_class:v.value.gameMode,client_draft_id:R.value}),L=B=>{console.warn("[create_tournament_route] server rejected create:",{httpStatus:B?.status,ok:B?.ok,data:B?.data});const F=B?.data?.error||`http_${B?.status||"unknown"}`,q=B?.data?.reason?` (${B.data.reason})`:"",ne=B?.data?.message||B?.data?.detail||"";switch(F){case"invalid_caption":return T.value.caption=`Name rejected${q}.`,n.value=1,"Please fix the tournament name.";case"invalid_tagline":return T.value.tagline=`Tagline rejected${q}.`,n.value=1,"Please fix the tagline.";case"invalid_sports":return T.value.sports=`Sports rejected${q}.`,n.value=3,"Please review your sport selection.";case"invalid_window":return T.value.window=`Window rejected${q}.`,n.value=1,"Please review the tournament window.";case"invalid_max_entrants":return T.value.max="Max entrants rejected.",n.value=4,"Max entrants must be between 2 and 10.";case"invalid_request_shape":return`Request rejected as malformed${ne?": "+ne:""}.`;case"active_limit_reached":return"You already have an active contest. Cancel or finish it first.";case"tier_gate_violation":return`That option isn't available on the free tier yet${B?.data?.field?` (${B.data.field})`:""}.`;case"rate_limited":return"Too many create attempts. Try again in a bit.";case"unauthenticated":return"Your session expired. Please sign in again.";case"internal":return"Server error. Please try again in a moment.";default:return`Server said: ${F}${ne?" · "+ne:""}`}},H=async()=>{if(k.value="",T.value={},!G(5)){k.value="Please check all steps before publishing.",T.value=N.value;return}S.value=!0;try{const B=M();console.log("[create_tournament_route] POST /m5t/v5/tournament payload:",B);const F=await $e.createTournament(B);if(console.log("[create_tournament_route] response:",F),F.ok&&F.data?.tournament){const q=F.data.tournament;s.pushCoreTourn({timestamp:Date.now(),source:"API",data:[q]}),typeof neodigmToast<"u"&&neodigmToast.q("Tournament created. Share the link to invite friends.","success"),t.push({name:"preview_route",params:{guid:q.guid},query:q.join_slug?{s:q.join_slug}:void 0});return}k.value=L(F)}catch(B){console.warn("[create_tournament_route] createTournament failed:",B),k.value="Network error. Please try again."}finally{S.value=!1}},W=()=>t.push({name:"home_route"});return lt(()=>{document.body.classList.add("route-create-tournament"),window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),requestAnimationFrame(()=>{const B=O.value;if(!B)return;const F=B.querySelector(`[data-offset="${v.value.startOffset}"]`);if(F){const q=F.offsetLeft-B.clientWidth/2+F.offsetWidth/2;B.scrollLeft=Math.max(0,q)}})}),os(()=>{document.body.classList.remove("route-create-tournament")}),(()=>{const B=new Date;return B.setHours(0,0,0,0),d(B)})(),(B,F)=>(ue(),pe("main",iy,[C("div",{class:"create-header"},[C("button",{class:"create-header__back",onClick:W,"aria-label":"Back to home"},[...F[4]||(F[4]=[C("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[C("polyline",{points:"15 18 9 12 15 6"})],-1)])]),F[5]||(F[5]=C("h1",{class:"create-header__title"},"Create a Tournament",-1))]),C("div",ly,[(ue(),pe(qe,null,ds(a,q=>C("div",{key:q.id,class:Ue(["create-steps__dot",{"create-steps__dot--active":q.id===n.value,"create-steps__dot--complete":q.id<n.value}]),onClick:ne=>E(q.id)},[C("span",dy,he(q.id),1),C("span",uy,he(q.label),1)],10,cy)),64))]),C("div",py,[k.value?(ue(),pe("div",fy,he(k.value),1)):Oe("",!0),n.value===1?(ue(),pe("section",hy,[o.value?(ue(),pe("div",my,[F[6]||(F[6]=C("span",{class:"create-banner__tag create-banner__tag--gate"},"ACTIVE POOL",-1)),C("span",gy,[C("strong",null,he(o.value.caption||"Your pool"),1),et(" is still running"+he(l.value?` through ${l.value}`:"")+". Free tier runs one pool at a time, so your next one opens up as soon as this one wraps. ",1)])])):Oe("",!0),F[12]||(F[12]=C("div",{class:"create-banner create-banner--dev",role:"status"},[C("span",{class:"create-banner__tag"},"BETA"),C("span",{class:"create-banner__msg"},"Feature in active development.")],-1)),F[13]||(F[13]=C("h4",{class:"create-step__heading"},"Name it and set the window",-1)),F[14]||(F[14]=C("p",{class:"create-step__hint"},"Quick setup: a name for the invite, a start day, and how long it runs.",-1)),C("label",by,[F[7]||(F[7]=C("span",{class:"create-field__label"},"Name",-1)),ts(C("input",{type:"text","onUpdate:modelValue":F[0]||(F[0]=q=>v.value.caption=q),maxlength:"60",placeholder:"Name your tournament",autocapitalize:"words",autocomplete:"off",enterkeyhint:"next",class:Ue(["create-field__input",{"create-field__input--error":T.value.caption}])},null,2),[[zr,v.value.caption]]),T.value.caption?(ue(),pe("span",_y,he(T.value.caption),1)):(ue(),pe("span",vy,he((v.value.caption||"").length)+" / 60",1))]),C("label",yy,[F[8]||(F[8]=C("span",{class:"create-field__label"},[et("Tagline "),C("span",{class:"create-field__optional"},"(optional)")],-1)),ts(C("input",{type:"text","onUpdate:modelValue":F[1]||(F[1]=q=>v.value.tagline=q),maxlength:"120",placeholder:"One line about your contest",autocapitalize:"sentences",autocomplete:"off",enterkeyhint:"next",class:Ue(["create-field__input",{"create-field__input--error":T.value.tagline}])},null,2),[[zr,v.value.tagline]]),T.value.tagline?(ue(),pe("span",wy,he(T.value.tagline),1)):(ue(),pe("span",xy,he((v.value.tagline||"").length)+" / 120",1))]),C("div",Ty,[F[9]||(F[9]=C("span",{class:"create-field__label"},"Starts",-1)),C("div",{class:"create-day-scroller",ref_key:"dayScrollerEl",ref:O},[(ue(!0),pe(qe,null,ds(ut(f),q=>(ue(),pe("button",{key:q,type:"button",class:Ue(["create-day-chip",{"create-day-chip--on":v.value.startOffset===q}]),"data-offset":q,onClick:ne=>v.value.startOffset=q},[C("span",Ey,he(_(g(q))),1),C("span",ky,he(y(g(q))),1),m(q)?(ue(),pe("span",Py,he(m(q)),1)):Oe("",!0)],10,Sy))),128))],512)]),C("div",Ay,[F[10]||(F[10]=C("span",{class:"create-field__label"},"Length",-1)),C("div",Cy,[(ue(),pe(qe,null,ds(h,q=>C("button",{key:q.key,type:"button",class:Ue(["create-chip",{"create-chip--on":v.value.lengthDays===q.key}]),onClick:ne=>v.value.lengthDays=q.key},he(q.label),11,Oy)),64))]),T.value.window?(ue(),pe("span",$y,he(T.value.window),1)):(ue(),pe("span",My,"Free tier runs up to "+he(so)+" days."))]),K.value>0?(ue(),pe("div",Ly,[C("div",Ry,[C("span",Dy,he(X(x.value)),1),F[11]||(F[11]=C("span",{class:"create-duration__arrow"},"→",-1)),C("span",Ny,he(X(P.value)),1)]),C("div",Iy,[C("span",By,he(K.value),1),C("span",Fy,he(K.value===1?"day":"days")+" of play",1)])])):Oe("",!0)])):Oe("",!0),n.value===2?(ue(),pe("section",zy,[F[16]||(F[16]=C("h4",{class:"create-step__heading"},"Choose a game mode",-1)),F[17]||(F[17]=C("p",{class:"create-step__hint"},"Only Bet Max Tourney is live right now. More modes are in development.",-1)),C("div",Hy,[(ue(),pe(qe,null,ds(r,q=>C("button",{key:q.key,type:"button",class:Ue(["create-mode",{"create-mode--on":v.value.gameMode===q.key&&q.available,"create-mode--disabled":!q.available}]),disabled:!q.available,onClick:ne=>w(q.key)},[C("div",Uy,[C("span",qy,he(q.title),1),C("span",{class:Ue(["create-mode__tagline",{"create-mode__tagline--soon":!q.available}])},he(q.tagline),3)]),C("p",Vy,he(q.description),1),v.value.gameMode===q.key&&q.available?(ue(),pe("span",Gy,[...F[15]||(F[15]=[C("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[C("polyline",{points:"20 6 9 17 4 12"})],-1)])])):Oe("",!0)],10,jy)),64))]),T.value.mode?(ue(),pe("span",Ky,he(T.value.mode),1)):Oe("",!0)])):Oe("",!0),n.value===3?(ue(),pe("section",Yy,[C("div",Wy,[F[19]||(F[19]=C("div",null,[C("h4",{class:"create-step__heading",style:{"margin-bottom":"4px"}},"Pick your sports"),C("p",{class:"create-step__hint",style:{margin:"0"}},"Tap a chip to add it. Games scheduled during your window will be added automatically as odds post.")],-1)),C("div",{class:Ue(["create-sports-counter",{"create-sports-counter--max":Y.value}])},[C("span",Jy,he(v.value.sportKeys.length),1),F[18]||(F[18]=C("span",{class:"create-sports-counter__divider"},"/",-1)),C("span",{class:"create-sports-counter__max"},he(Al))],2)]),C("div",Xy,[(ue(!0),pe(qe,null,ds(z.value,q=>(ue(),pe("button",{key:q.key,type:"button",class:Ue(["create-sport-pick",{"create-sport-pick--on":$(q.key),"create-sport-pick--disabled":Y.value&&!$(q.key)}]),disabled:Y.value&&!$(q.key),onClick:ne=>A(q.key)},[C("span",Zy,[C("bma-sport-icon",{sport:q.key,"data-sport-group":q.group},null,8,e1)]),C("span",t1,he(q.title),1),$(q.key)?(ue(),pe("span",s1,[...F[20]||(F[20]=[C("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[C("polyline",{points:"20 6 9 17 4 12"})],-1)])])):Oe("",!0)],10,Qy))),128))]),T.value.sports?(ue(),pe("span",a1,he(T.value.sports),1)):Oe("",!0),v.value.sportKeys.length>0?(ue(),pe("div",n1,[F[22]||(F[22]=C("div",{class:"create-slate__label"},"Your slate",-1)),C("div",r1,[(ue(!0),pe(qe,null,ds(v.value.sportKeys,q=>(ue(),pe("div",{key:q,class:"create-slate-row"},[C("span",o1,[C("bma-sport-icon",{sport:q,"data-sport-group":ee(q).group},null,8,i1)]),C("div",l1,[C("span",c1,he(ee(q).title),1),J(q)>0?(ue(),pe("span",d1,he(J(q))+" game"+he(J(q)===1?"":"s")+" available this window",1)):(ue(),pe("span",u1," Games will be added when odds post "))]),C("button",{class:"create-slate-row__remove",type:"button","aria-label":"Remove "+ee(q).title,onClick:ne=>A(q)},[...F[21]||(F[21]=[C("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[C("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),C("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,p1)]))),128))]),U.value>0?(ue(),pe("div",f1,he(U.value)+" game"+he(U.value===1?"":"s")+" already on the slate · more added during the tournament. ",1)):(ue(),pe("div",h1," No games are on the slate yet. They'll populate as odds post. "))])):Oe("",!0)])):Oe("",!0),n.value===4?(ue(),pe("section",m1,[F[25]||(F[25]=C("h4",{class:"create-step__heading"},"How many players?",-1)),F[26]||(F[26]=C("p",{class:"create-step__hint"},"Up to 10 on the free tier. You're in by default — toggle off if you're just hosting.",-1)),C("label",g1,[F[23]||(F[23]=C("span",{class:"create-field__label"},"Max Entrants",-1)),ts(C("input",{type:"number",min:"2",max:"10",inputmode:"numeric",pattern:"[0-9]*","onUpdate:modelValue":F[2]||(F[2]=q=>v.value.maxEntrants=q),class:Ue(["create-field__input create-field__input--num",{"create-field__input--error":T.value.max}])},null,2),[[zr,v.value.maxEntrants,void 0,{number:!0}]]),T.value.max?(ue(),pe("span",b1,he(T.value.max),1)):(ue(),pe("span",_1,"Free tier max is 10."))]),C("label",v1,[ts(C("input",{type:"checkbox","onUpdate:modelValue":F[3]||(F[3]=q=>v.value.creatorParticipating=q)},null,512),[[cu,v.value.creatorParticipating]]),F[24]||(F[24]=C("span",null,"I'm playing in this tournament",-1))])])):Oe("",!0),n.value===5?(ue(),pe("section",y1,[F[34]||(F[34]=C("h4",{class:"create-step__heading"},"Ready to publish?",-1)),F[35]||(F[35]=C("p",{class:"create-step__hint"},"Here's what your invitees will see. Tap any step number above to edit.",-1)),C("div",w1,[C("div",x1,[F[27]||(F[27]=C("span",{class:"create-review-label"},"Name",-1)),C("span",T1,he(v.value.caption),1)]),v.value.tagline?(ue(),pe("div",S1,[F[28]||(F[28]=C("span",{class:"create-review-label"},"Tagline",-1)),C("span",E1,he(v.value.tagline),1)])):Oe("",!0),C("div",k1,[F[29]||(F[29]=C("span",{class:"create-review-label"},"Dates",-1)),C("span",P1,he(X(x.value))+" → "+he(X(P.value)),1)]),C("div",A1,[F[30]||(F[30]=C("span",{class:"create-review-label"},"Sports",-1)),C("span",C1,[(ue(!0),pe(qe,null,ds(v.value.sportKeys,q=>(ue(),pe("span",{key:q,class:"create-review-pill"},he((z.value.find(ne=>ne.key===q)||{}).title||q)+" · "+he(J(q)),1))),128))])]),C("div",O1,[F[31]||(F[31]=C("span",{class:"create-review-label"},"Players",-1)),C("span",$1,"Up to "+he(v.value.maxEntrants)+" · "+he(v.value.creatorParticipating?"you're in":"hosting only"),1)]),C("div",M1,[F[32]||(F[32]=C("span",{class:"create-review-label"},"Format",-1)),C("span",L1,he((r.find(q=>q.key===v.value.gameMode)||{}).title||"Bet Max Tourney")+" · Fixed Slate · TD$ 500",1)]),F[33]||(F[33]=C("div",{class:"create-review-row"},[C("span",{class:"create-review-label"},"Trophies"),C("span",{class:"create-review-value"},"1 Gold · 1 Silver · 1 Bronze")],-1))])])):Oe("",!0),C("div",R1,[C("button",{class:"create-nav__btn create-nav__btn--ghost",onClick:I,disabled:n.value===1||S.value},"Back",8,D1),n.value<a.length?(ue(),pe("button",{key:0,class:"create-nav__btn create-nav__btn--primary",onClick:te,disabled:!j.value},"Next",8,N1)):(ue(),pe("button",{key:1,class:"create-nav__btn create-nav__btn--primary",onClick:H,disabled:S.value},he(S.value?"Publishing…":"Publish Tournament"),9,I1))])])]))}},ka=qm({history:Tm(),routes:[{path:"/",name:"splash_route",component:yl},{path:"/splash_route",name:"splash_route",component:yl},{path:"/error_route",name:"error_route",component:Ka},{path:"/forgot_route",name:"forgot_route",component:__},{path:"/resetforgot_route",name:"resetforgot_route",component:Ka},{path:"/resethash_route",name:"resethash_route",component:C_},{path:"/signin_route",name:"signin_route",component:q0},{path:"/signout_route",name:"signout_route",component:K0},{path:"/signup_route",name:"signup_route",component:p_},{path:"/verf_link_route",name:"verf_link_route",component:N_},{path:"/offline_route",name:"offline_route",component:Ka},{path:"/home_route",name:"home_route",component:A0},{path:"/profile_route",name:"profile_route",component:Z_},{path:"/top_players_route",name:"top_players_route",component:rv},{path:"/play_route",name:"play_route",component:pv},{path:"/create_tournament_route",name:"create_tournament_route",component:F1},{path:"/preview/:guid",name:"preview_route",component:oy,meta:{previewAllowed:!0}},{path:"/appFAQ",name:"appFAQ",component:Ka},{path:"/appHelp",name:"appHelp",component:L0}]});ka.beforeEach((e,t,s)=>{if(e.query.brand!==void 0){const a=e.query.brand;a==="null"||a===""?sa.clearBrand():sa.setBrand(a);const n={...e.query};delete n.brand,s({...e,query:n,replace:!0})}else s()});class z1 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Me.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,s,a){s!==a&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),s=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(s)?s[1]?.length||0:s.guids?.length||0,max:Array.isArray(s)?parseInt(s[0]?.max||0):s.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Me.theme}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return!1;try{const a=this.getAttribute("data-bma-tourn-entities"),n=a?JSON.parse(a):{guids:[]};return(Array.isArray(n)?n[1]||[]:n.guids||[]).includes(s)}catch{return!1}}getUserTrophy(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;try{const a=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const n of a){if(typeof n!="object"||!n)continue;let r=null;if(n.entity_guid===s&&n.badge?r=n.badge:n[s]&&(r=n[s]),r?.includes("gold"))return"gold";if(r?.includes("silver"))return"silver";if(r?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let s=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z"));const a=Date.now(),n=s.getTime()-a;if(n<=0)return null;const r=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),l=Math.floor(n%36e5/6e4);return r>0?`${r}d ${o}h`:o>0?`${o}h ${l}m`:`${l}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const s=this.getCountdown();t.textContent=s||"",s||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},s=this.sportsAllowed;if(!Array.isArray(s)||s.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const a=Math.min(s.length,3);let n="";for(let r=0;r<a;r++){const o=s[r].key||s[r],l=Ge.find(d=>d.key===o),i=l?l.group:"default",c=t[o]||o.replace(/^[a-z]+_/,"").toUpperCase();n+=`<span class="lc__sport-item"><bma-sport-icon sport="${o}" data-sport-group="${i}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return s.length>3&&(n+=`<span class="lc__sport-count" data-sport-overflow="true">+${s.length-3}</span>`),n}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(s=>{const a=s.key||s;return t[a]||a.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,s,a,n){const r=(t-s)/2,o=2*Math.PI*r,l=o-a/100*o,i=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${i}" cy="${i}" r="${r}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${s}" />
            <circle cx="${i}" cy="${i}" r="${r}"
                fill="none" stroke="${n}" stroke-width="${s}"
                stroke-linecap="round"
                stroke-dasharray="${o}"
                stroke-dashoffset="${l}"
                transform="rotate(-90 ${i} ${i})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation(),this.dispatchAction(s.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",s=>{s.stopPropagation();const a=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(a,"info")})}render(){const t=this.isUserParticipating(),s=this.getUserTrophy(),a=this.status.toLowerCase(),n=t&&this.status!=="COMPLETED",r=!t&&this.status==="UPCOMING";this.userRank,(this.entities.current/(this.entities.max||1)*100).toFixed(1);const o=this.getCountdown();return this._renderSlim({isParticipating:t,trophy:s,statusClass:a,showPlay:n,showJoin:r,countdown:o})}_renderSlim({statusClass:t,showPlay:s,showJoin:a,trophy:n,countdown:r}){this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating");const o=this.status==="LOCKED"?"IN PROGRESS":this.status==="UPCOMING"?"OPEN":this.status==="COMPLETED"?"COMPLETED":this.status,l=(()=>{if(this.matches==0)return"TBD";let v="";try{JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(x=>x.override_last_match_close===!0)&&(v="+")}catch{}return`${this.matches}${v}`})();this.entryFee&&this.entryFee!=="Free"&&this.entryFee;const i=parseFloat(this.tournamentDollars||0).toLocaleString(),c=`${this.entities.current}/${this.entities.max}`,d=this.status==="COMPLETED"?"Ended":this.status==="LOCKED"?"Ends":this.status==="UPCOMING"?"Locks":"Starts",u=r||(this.status==="COMPLETED"?"—":"Soon"),p=(this.sportsAllowed||[]).slice(0,3).map(v=>{const w=v.key||"",x=Ge.find(S=>S.key===w),P=x?.group||"default",R=x?.abbr||x?.title||w.split("_").pop().toUpperCase().slice(0,4);return`
                    <span class="lcs__sport">
                        <bma-sport-icon sport="${w}" data-sport-group="${P}"></bma-sport-icon>
                        <span class="lcs__sport-label">${R}</span>
                    </span>
                `}).join(""),f=(this.sportsAllowed?.length||0)>3?`<span class="lcs__sport-more">+${this.sportsAllowed.length-3}</span>`:"";let g="";n?g=`<div class="lcs__trophy-hero lcs__trophy-hero--${n}" aria-label="You won ${n}"></div>`:this.status==="COMPLETED"&&this.isUserParticipating()&&this.userRank!=="-"&&this.userRank!==""&&(g=`
                <div class="lcs__rank-hero" aria-label="Your rank ${this.userRank} of ${this.userTotal}">
                    <span class="lcs__rank-hero__place">#${this.userRank}</span>
                    <span class="lcs__rank-hero__total">/ ${this.userTotal}</span>
                </div>
            `);const y=this.gameModeBadge?.label||(this.gameType==="DEFAULT_FORMAT"?"Bet Max Tourney":""),m=y?`<span class="lcs__pill lcs__pill--neutral">${y}</span>`:"",h=`<span class="lcs__pill lcs__pill--${t}">${o}</span>`,b=(()=>{const v=`<button class="lcs__btn lcs__btn--info" data-action="INFO" aria-label="Info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span>Info</span>
            </button>`;let w="";return s?w='<button class="lcs__btn lcs__btn--play" data-action="PLAY" aria-label="Play"><span>Play</span></button>':a?w='<button class="lcs__btn lcs__btn--join" data-action="JOIN" aria-label="Join"><span>Join</span></button>':w='<button class="lcs__btn lcs__btn--view" data-action="INFO" aria-label="View"><span>View</span></button>',`${v}${w}`})();this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
                            ${m?`<span class="lcs__mode-row">${m}</span>`:""}
                        </div>
                        <div class="lcs__side">
                            ${h}
                            ${g}
                            <div class="lcs__actions">
                                ${b}
                            </div>
                        </div>
                    </div>

                    <div class="lcs__kpi">
                        <div class="lcs__kpi-cell">
                            <span class="lcs__kpi-label">${d}</span>
                            <span class="lcs__kpi-value">${u}</span>
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
        `}}customElements.define("bma-tournament-list-card",z1);const Fn=`
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
`.trim();typeof window<"u"&&(window.EMPTY_BETSLIP_HTML=Fn);const ke={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,a=null,n=0){const r=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),l=document.querySelector("#summary-payout");r&&(this.updateTDBalance("#summary-balance",e),e<0?r.classList.add("summary-cell__red"):r.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),l&&(l.textContent=s.toFixed(2),s<0?l.classList.add("summary-cell__red"):l.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(i){let d="";if(a){const p=a.tournament_dollars||0,f=e-p;f>0?d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(d=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const u=e<0?"#FF5252":"#00E676";i.innerHTML=`<span style="color: ${u};">TD$ ${e.toLocaleString()}</span>${d}`}if(c){const d=n||s||0;let u="";d>0&&(u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${d.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${u}`}if(a&&a.tournament_dollars){const d=a.tournament_dollars,u=document.querySelector(".dash-stat__gauge-fill--balance");if(u){const f=Math.max(e/d*100,0);u.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(t/d*100,100);p.style.width=`${f}%`}}this.updateBetSlipToggleSummary()},updateBetSlipToggleSummary(){const e=document.getElementById("bet-grid-toggle-count"),t=document.querySelector(".bet-grid__toggle-container");if(!e||!t)return;const s=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").length;e.textContent=s,t.classList.toggle("bet-grid__toggle-container--has-bets",s>0);const a=document.getElementById("bet-slip-tab-slip-badge");a&&(a.textContent=s,a.style.visibility=s>0?"visible":"hidden");const n=document.getElementById("bet-slip-tab-mybets-badge");if(n){const r=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing").length;n.textContent=r,n.style.visibility=r>0?"visible":"hidden"}},_globalLBCache:{},async prefetchGlobalLeaderboard(e="ALL"){const s=this._globalLBCache[e];if(s?.data&&Date.now()-s.ts<3e5)return s.data;if(s?.inflight)return null;this._globalLBCache[e]={data:s?.data||null,ts:s?.ts||0,inflight:!0};try{const a=await $e.fetchAllTimeLeaderboard(e,100,"td");return this._globalLBCache[e]={data:a,ts:Date.now(),inflight:!1},console.log(`[appEvents] All-time leaderboard prefetched [${e}]:`,a?.count||0,"rows, last_updated:",a?.last_updated),a}catch(a){return console.warn(`[appEvents] All-time leaderboard prefetch failed [${e}]:`,a),this._globalLBCache[e]&&(this._globalLBCache[e].inflight=!1),null}},_betStatsCache:{stats:null,ts:0,inflight:!1},async _ensureBetStatsCache(e){const s=Date.now();if(this._betStatsCache.stats&&s-this._betStatsCache.ts<3e5)return this._betStatsCache.stats;if(this._betStatsCache.inflight)return null;this._betStatsCache.inflight=!0;try{const n=(await $e.fetchBetSlips(e))?.rows||[];let r=0,o=0,l=0;return n.forEach(i=>{(i.bet||[]).forEach(d=>{Object.keys(d).forEach(u=>{if(u==="short_title")return;const p=d[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?r++:o++:l++)})})}),this._betStatsCache={stats:{wins:r,losses:o,pending:l},ts:s,inflight:!1},this._betStatsCache.stats}catch(a){return console.warn("[app_events] fetchBetSlips failed for stats panel",a),this._betStatsCache.inflight=!1,null}},buildStatsPanel(e,t,s=null){if(!t||!e||e.length===0)return"";const a=e.filter(g=>(g.entities?.guids||[]).includes(t)),n=a.filter(g=>(g.status||g.class)==="COMPLETED").length;let r=0,o=0;a.forEach(g=>{(Array.isArray(g.tags)?g.tags:[]).forEach(y=>{if(!y||typeof y!="object")return;const m=(y.entity_guid===t?y.badge:null)||(typeof y[t]=="string"?y[t]:null);typeof m=="string"&&m.startsWith("--badge__ribbon--")&&(o++,m==="--badge__ribbon--gold"&&r++)})});const l={};a.forEach(g=>{(Array.isArray(g.sports_allowed)?g.sports_allowed:[]).forEach(y=>{const h=Ge.find(b=>b.key===y.key)?.group||"Other";l[h]=(l[h]||0)+1})});let i="—",c="",d=0;Object.entries(l).forEach(([g,_])=>{_>d&&(d=_,i=g,c=g)});let u="—",p="Pending";if(s){const g=s.wins+s.losses;g>0?(u=`${Math.round(s.wins/g*100)}%`,p=`${s.wins}-${s.losses}`):(u="—",p="No settled bets")}const f=c?`<bma-sport-icon data-sport-group="${c.toLowerCase()}"></bma-sport-icon>`:"";return`
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
                            ${u}
                            <span class="stats-row__sub">${p}</span>
                        </span>
                    </div>
                </div>
            </div>
        `},categorizeTournaments(e,t,s,a,n={}){const r=[],{subStatus:o="all",sort:l="default",result:i="all",odds:c="all"}=n,d=S=>(S.entities?.guids||[]).includes(a),u=S=>S.status==="UPCOMING"||S.class==="UPCOMING",p=S=>S.status==="LOCKED"||S.class==="LOCKED",f=S=>u(S)||p(S),g=S=>S.status==="COMPLETED"||S.class==="COMPLETED",_=S=>Array.isArray(S.matches_expanded)&&S.matches_expanded.length>0,y=(S,k)=>(S.sports_allowed||[]).some(T=>T.key===k),m=S=>{if(!S)return"";const k=String(S),T=k.toLowerCase(),O=Ge.find(D=>D.key===k||String(D.key).toLowerCase()===T||String(D.title||"").toLowerCase()===T);return O?.title?O.title:/^[a-zA-Z]{2,5}$/.test(k)?k.toUpperCase():k},h=S=>{const k=S.tags||[];for(const T of k)if(!(typeof T!="object"||!T)&&(T.entity_guid===a&&T.badge||T[a]))return!0;return!1},b=S=>{if(l==="default")return S;const k=[...S];switch(l){case"starting_soon":k.sort((T,O)=>new Date(T.window_start_time||0)-new Date(O.window_start_time||0));break;case"most_entrants":k.sort((T,O)=>(O.entities?.guids?.length||0)-(T.entities?.guids?.length||0));break;case"fewest_spots":k.sort((T,O)=>{const D=(T.entities?.max||0)-(T.entities?.guids?.length||0),V=(O.entities?.max||0)-(O.entities?.guids?.length||0);return D-V});break;case"recently_active":k.sort((T,O)=>new Date(O.status_time||0)-new Date(T.status_time||0));break;case"newest":k.sort((T,O)=>new Date(O.status_time||0)-new Date(T.status_time||0));break;case"td_high":k.sort((T,O)=>parseFloat(O.tournament_dollars||0)-parseFloat(T.tournament_dollars||0));break;case"td_low":k.sort((T,O)=>parseFloat(T.tournament_dollars||0)-parseFloat(O.tournament_dollars||0));break}return k},v=S=>i==="all"?S:i==="trophy"?S.filter(k=>h(k)):i==="no_trophy"?S.filter(k=>!h(k)):S;let w=e,x="",P=s||"all";if(s==="multi"?(w=e.filter(S=>(S.sports_allowed?.length||0)>1),x="Multi-Sport "):s!=="all"&&(w=e.filter(S=>y(S,s)),x=m(s)+" "),t==="lobby"){const S=n.lobbySubTab||"active";let k=w.filter(T=>T.is_private!==!0);if(S==="completed"){const T=b(k.filter(O=>g(O))).slice(0,20);T.length>0?r.push({title:`Recently Completed ${x}Tournaments`,tournaments:T}):r.push({title:`Recently Completed ${x}Tournaments`,tournaments:[],emptyMessage:"No recently completed tournaments",emptySubtext:"Finished public tournaments will show up here."})}else{let T=k.filter(V=>f(V));o==="open"?T=T.filter(V=>u(V)):o==="locked"&&(T=T.filter(V=>p(V)));const O=b(T.filter(V=>u(V)&&!d(V)));r.push({title:`Open Entry ${x}Tournaments`,tournaments:O});const D=b(T.filter(V=>p(V)&&!d(V)));D.length>0&&r.push({title:`In Progress - Entry Closed ${x}Tournaments`,tournaments:D})}}else if(t==="my"){const S=n.mySubTab||"active",k=w.filter(T=>d(T));if(S==="completed"){const T=v(k.filter(D=>g(D))),O=b(T);O.length>0?r.push({title:`Your Completed ${x}Tournaments`,tournaments:O}):r.push({title:`Completed ${x}Tournaments`,tournaments:[],emptyMessage:"No completed contests yet",emptySubtext:"Finished tournaments you joined will show here."})}else{let T=k.filter(D=>f(D));o==="active"?T=T.filter(D=>p(D)):o==="upcoming"&&(T=T.filter(D=>u(D))),c==="available"?T=T.filter(D=>_(D)):c==="none"&&(T=T.filter(D=>!_(D)));const O=b(T);O.length>0?r.push({title:`Your Active ${x}Tournaments`,tournaments:O}):r.push({title:`Active ${x}Tournaments`,tournaments:[],emptyMessage:"No active contests",emptySubtext:"Join a tournament from the Lobby and it'll show up here."})}}else if(t==="private")if((n.privateSubTab||"all")==="invites")r.push({title:"Invites",tournaments:[],emptyMessage:"No pending invites",emptySubtext:null});else{const k=w.filter(D=>D.is_private===!0),T=b(k.filter(D=>D.creator_guid&&D.creator_guid===a)),O=b(k.filter(D=>(!D.creator_guid||D.creator_guid!==a)&&d(D)));T.length>0&&r.push({title:"Running",tournaments:T}),O.length>0&&r.push({title:"Playing In",tournaments:O}),T.length===0&&O.length===0&&r.push({title:"Bet Max Pools",tournaments:[],emptyMessage:"No pools yet",emptySubtext:"Start your own Bet Max Pool. Your contest, your rules."})}else r.push({title:"Tournaments",tournaments:e});const R=P==="all"||P==="multi"?"":m(P);return r.forEach(S=>{S.sportKey=P,S.sportLabel=R}),r},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=xe();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let a=0,n=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const y=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.tournament_guid===e.guid);console.log("[Dashboard Update] Found",y.length,"existing bets for this tournament"),y.forEach(m=>{(m.bet||[]).forEach(b=>{Object.keys(b).filter(w=>w!=="short_title").forEach(w=>{const x=b[w];x&&(x.stake&&(a+=parseFloat(x.stake)),x.reconciled===!0&&x.payout>0&&(n+=parseFloat(x.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const _=parseFloat(o.textContent)||0;r=Math.max(0,_-a),console.log("[Dashboard Update] Summary total stakes:",_,"Pending:",r)}const l=a+r,i=s-a-r+n;console.log("[Dashboard Update] TD$:",s,"Committed:",a,"Pending:",r,"Payouts:",n,"=> Balance:",i);const c=document.getElementById("dashboard-td-balance");if(c){const _=i-s;let y="";_>0?y=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${_.toLocaleString()})</span>`:_<0&&(y=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${_.toLocaleString()})</span>`);const m=i<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${m};">TD$ ${i.toLocaleString()}</span>${y}`}const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".dash-stat__gauge-fill--pending");if(d){const _=r>0?r:l,y=n||0;let m="";if(y>0&&(m=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${y.toLocaleString()})</span>`),d.innerHTML=`TD$ ${_.toLocaleString()}${m}`,u){const h=Math.min(_/s*100,100);u.style.width=`${h}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const _=Math.max(i/s*100,0);p.style.width=`${_}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&e){const _=e.entities?.guids?.length||0,y=e.entities?.max||100,m=_/y*100;f.style.width=`${m}%`}const g=document.getElementById("game-mode-progress");if(g&&typeof window.GameMode<"u"){const _=e.class||"DEFAULT",y=window.GameMode.get(_),m=t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(b=>b.coreTournaments__guid===e.guid||b.tournament_guid===e.guid):[],h=y.getProgressUI(m,e);if(h.type!=="NONE"){const b=h.typesStatus?h.typesStatus.map(w=>w.placed?`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: rgba(0, 230, 118, 0.12); box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.35); color: #00E676; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.3px;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#00E676"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            ${w.label}${w.count>1?' <span style="opacity: 0.7;">×'+w.count+"</span>":""}
                        </span>`:`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: transparent; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12); color: rgba(255,255,255,0.35); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.3px;">
                            ${w.label}
                        </span>`).join(""):"",v=h.hints.length>0&&!h.complete?`<p style="font-size: 0.72rem; color: rgba(255,255,255,0.5); margin: 0; text-align: center;">${h.hints[0]}</p>`:h.complete?'<p style="font-size: 0.72rem; color: #00E676; margin: 0; text-align: center; font-weight: 600;">Lineup complete — ready to submit!</p>':"";g.style.display="block",g.innerHTML=`
                    <div style="margin: 0 8px 10px; padding: 14px 16px; background: rgba(20, 20, 20, 0.65); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background-image: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(0,0,0,0.1) 100%); border-radius: var(--card-radius, 12px); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0,0,0,0.4);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--status-locked-text, #F7C60D);">Your Lineup</span>
                            <span style="font-size: 0.75rem; font-weight: 700; color: ${h.percent>=100?"#00E676":"rgba(255,255,255,0.7)"};">${h.label}</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.06); border-radius: 6px; overflow: hidden; margin-bottom: 12px;">
                            <div style="height: 100%; width: ${h.percent}%; background: ${h.complete?"linear-gradient(90deg, #00E676, #69F0AE)":"linear-gradient(90deg, var(--status-locked-text, #F7C60D), #FFD54F)"}; border-radius: 6px; transition: width 0.3s ease;"></div>
                        </div>
                        <div style="display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: ${v?"10px":"0"};">${b}</div>
                        ${v}
                    </div>`}else g.style.display="none",g.innerHTML=""}},renderMatchCards(e){if(!e)return;const t=document.querySelector(".select-grid");if(!t)return;if(t.innerHTML="",!e.matches_expanded||!Array.isArray(e.matches_expanded)||e.matches_expanded.length===0){t.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const s=new Date,a=[...e.matches_expanded].sort((r,o)=>{const l=new Date(r.scheduled_at),i=new Date(o.scheduled_at),c=l<s,d=i<s;return c&&!d?1:!c&&d?-1:l-i}),n=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let l=0;o&&xe().coreTourn.length>0&&(l=xe().coreTourn[xe().coreTourn.length-1].data.find(g=>g.guid===o)?.tournament_dollars||0);const i=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=i?i.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=xe();de.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:l,bets:d,timestamp:Date.now()}))};a.forEach(r=>{const l=new Date(r.scheduled_at)<s;let i=!1;try{i=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",r.id),c.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),c.setAttribute("data-match-title",r.title),c.setAttribute("data-match-short-title",r.short_title||r.title),c.setAttribute("data-scheduled-at",r.scheduled_at),c.setAttribute("data-home-team",r.home_team_id||"Home"),c.setAttribute("data-away-team",r.away_team_id||"Away"),c.setAttribute("data-is-disabled",l||i?"true":"false"),c.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);c.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(r.sport_id)c.setAttribute("data-sport-key",r.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(g){const _=g.querySelectorAll("bma-bet-entry");let y=!1;_.forEach(m=>{if(y)return;const h=m.getAttribute("data-content-type"),b=m.getAttribute("data-content-odds");h===u.type&&b===u.price&&(m.remove(),y=!0)}),g.children.length===0&&(g.innerHTML=Fn)}f.classList.remove("btn--active"),setTimeout(()=>{n()},100)}else{const g=document.querySelector(".play-cntr"),_=g?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const h=window.GameMode.get(_),b=xe(),v=b.coreBetSlip.length>0?b.coreBetSlip[b.coreBetSlip.length-1].data.filter(x=>x.coreTournaments__guid===g?.dataset?.currentTournGuid):[],w=h.canPlaceBet({matchGuid:u.matchGuid,type:u.type,team:u.team},v,null);if(!w.allowed){typeof neodigmToast<"u"&&neodigmToast.q(w.reason,"warning",3e3);return}}document.querySelectorAll("bma-bet-match-card").forEach(h=>{h.shadowRoot.querySelectorAll(".btn--selected").forEach(b=>{b.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const y=xe(),m=u.type;m==="spread"?de.publish(y.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):m==="money"?de.publish(y.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):m==="total"&&de.publish(y.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),de.publish(y.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector("[data-publish-betslip]");s&&delete s.dataset.processing;const a=document.querySelector(".bet-grid__slip-BETSLIP-content");a&&(a.innerHTML=Fn);const n=xe();if(n.coreTourn.length>0){const l=n.coreTourn[n.coreTourn.length-1].data.find(i=>i.guid===e);l&&ke.renderMatchCards(l)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{de.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const r=document.querySelector(".bet-grid__slip");r&&r.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const n=a.getAttribute("data-match-guid"),r=a.getAttribute("data-home-team"),o=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(i=>{if(i.disabled)return;const c=i.dataset.betType,p=i.dataset.team==="home"?r:o;t.some(g=>{if(g.coreMatches__guid!==n)return!1;const _=g.bet||[];if(_.length===0)return!1;const y=_[0],h=Object.keys(y).filter(w=>w!=="short_title")[0],v=y[h]?.type;return c==="total"?v===c:v===c&&h===p})&&(i.disabled=!0,i.classList.add("btn--disabled"))})})},initPlayScreen(e,t="INFO"){const s=xe(),a=document.querySelector(".play-cntr");if(!a){console.warn("[app_events] initPlayScreen: .play-cntr not found");return}e&&(a.dataset.currentTournGuid=e),t&&(a.dataset.currentTournAction=t);const n=a.dataset.currentTournGuid,r=a.dataset.currentTournAction||"INFO";if(n&&s.coreTourn.length>0){const f=s.coreTourn[s.coreTourn.length-1].data.find(_=>_.guid===n),g=f?.class||"DEFAULT";a.dataset.gameType=g,console.log("[app_events] Game mode:",g,"for tournament:",f?.caption)}console.log("[app_events] play_route mounted - GUID:",n,"action:",r),window.initBetGridToggle&&window.initBetGridToggle(),ke.updatePlayButton(),ke.populateInfoPage();let o=r==="PLAY"||r==="JOIN"?"PLAY":r;if(n&&s.coreTourn.length>0&&s.coreTourn[s.coreTourn.length-1].data.find(g=>g.guid===n)?.status==="COMPLETED"&&(o="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),o){const p=`ROUTE.HOME.SODAPOP_PLAY.${o}`;console.log("[app_events] Publishing initial topic:",p),de.publish(p,JSON.stringify({tournamentGuid:n,timestamp:Date.now()}))}if(!n||s.coreTourn.length===0)return;const i=s.coreTourn[s.coreTourn.length-1].data.find(p=>p.guid===n);if(!i)return;ke.renderMatchCards(i);const c=document.querySelector("#pop-play__tourn-caption--id"),d=document.querySelector("#pop-play__tourn-tagline--id");c&&(c.textContent=i.caption),d&&(d.textContent=i.tagline),ke.updateTournamentDashboard(i);const u=document.getElementById("dashboard-rank");if(u){const p=i.entities?.guids?.length||0;u.innerHTML=`<span class="tourn-dashboard__rank-text">-/${p}</span>`}ke.updateBetSlipToggleSummary()},updatePlayButton(){const e=xe(),t=document.querySelector(".play-cntr"),s=t?.dataset?.currentTournGuid,a=t?.dataset?.currentTournAction||"INFO",n=document.getElementById("btn-join__play--id");if(!n||!s||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===s);if(!o)return;const l=e.appSession?.session_user?.guid,i=o.entities?.guids?.includes(l),c=o.status;n.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!i)&&(n.style.visibility="",c==="UPCOMING"&&!i?a==="INFO"?(n.textContent="Join",n.dataset.requiresJoin="true"):a==="PLAY"&&(n.textContent="Play",n.dataset.requiresJoin="false"):(n.textContent="Play",n.dataset.requiresJoin="false"))},populateInfoPage(){const e=xe(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(L=>L.guid===s);if(!n)return;const r=document.getElementById("pop-play__caro-info-summary1--id");if(!r)return;const o=L=>{if(!L)return"N/A";let H=new Date(L);return!L.includes("Z")&&!L.match(/[+-]\d{2}:\d{2}$/)&&(H=new Date(L+"Z")),isNaN(H.getTime())?"Invalid Date":H.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};n.status&&`${n.status.toLowerCase()}`;const l={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},i=n.sports_allowed&&Array.isArray(n.sports_allowed)?n.sports_allowed.map(L=>{const H=L.key||L,W=Ge.find(q=>q.key===H),B=W?W.group:"default",F=l[H]||W?.title||H;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${H}" data-sport-group="${B}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${F}</span>
                </span>`}).join(""):"N/A",c=e.appSession?.session_user?.guid,d=n.entities?.guids?.includes(c),u=n.entities?.guids?.length||0,p=n.entities?.max||0;(u/(p||1)*100).toFixed(1);const f=(()=>{const L=new Date(n.window_start_time),H=new Date(n.window_end_time),W=new Date;if(isNaN(L.getTime())||isNaN(H.getTime()))return"";const B=H-L,F=W-L;let q=0,ne="";if(W<L){q=0;const re=L-W,oe=Math.floor(re/864e5),se=Math.floor(re%864e5/36e5);ne=oe>0?`First match in ${oe}d ${se}h`:`First match in ${se}h`}else if(W>H){const re=new Date(H.getFullYear(),H.getMonth(),H.getDate()),oe=new Date(W.getFullYear(),W.getMonth(),W.getDate());q=re.getTime()===oe.getTime()?95:100,ne=q===100?"Tournament Complete":"Last Day"}else{q=Math.min(100,F/B*100);const re=Math.ceil(B/864e5),oe=Math.ceil(F/864e5);ne=oe>=re?"Last Day":`Day ${oe} of ${re}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${ne}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${q.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),g=n.tags||[],y=g.some(L=>L.override_last_match_close===!0)?"+":"",m=g.some(L=>L.match_inprogress_lock===!0),h=g.some(L=>L.override_last_match_close===!0);let b="Bet Max Tourney",v=null,w="";if(typeof window.GameMode<"u"){const L=window.GameMode.get(n.class||"DEFAULT"),H=L.getEffectiveRules(n);if(v=L.getBadge(),b=L.label,H.stakeRule==="SPEND_ALL"&&(w+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend entire starting TD$ amount</span></div>'),H.requiredBetTypes.length>0){const W=H.requiredBetTypes.map(B=>B==="SPREAD"?"Spread":B==="MONEY"?"Money Line":"Over/Under").join(", ");w+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${W}</span></div>`}H.oneBetPerMatchPerType&&(w+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const x=(()=>{const H=(n.tags||[]).find(q=>q.badge_gold!==void 0||q.badge_silver!==void 0||q.badge_bronze!==void 0);if(!H)return null;const W=H.badge_gold||0,B=H.badge_silver||0,F=H.badge_bronze||0;return W===0&&B===0&&F===0?null:{gold:W,silver:B,bronze:F}})();n.status==="LOCKED"||n.status==="UPCOMING"||n.status,n.status==="LOCKED"||n.status==="UPCOMING"||n.status==="COMPLETED"||n.status;const P=n.matches_expanded?.length||0,R=P===0?"TBD":`${P}${y}`;`${Number(n.tournament_dollars||0).toLocaleString()}${u}${p}${R}`;const S=n.status==="LOCKED"?"In Progress":n.status==="UPCOMING"?"Open":n.status,k=n.status==="LOCKED"?"var(--status-locked-text, #F7C60D)":n.status==="UPCOMING"?"var(--status-upcoming-text, #00E676)":"var(--status-completed-text, #CD5659)",T=`
            <div class="info-detail-row"><span>Game Mode</span><span>${b}${v?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${v.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${v.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${m?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${m?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${h?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${h?"On-going":"Fixed slate"}</span></div>
            ${w}
        `,O=`
            <div class="info-detail-row"><span>Sports</span><span>${i}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${o(n.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends <span style="color: rgba(255,255,255,0.45); font-weight: 400; margin-left: 4px;">(estimated)</span></span><span>${o(n.window_end_time)}</span></div>
        `,D=x?`
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
        </div>`,V=(()=>{if(!n.matches_expanded||!Array.isArray(n.matches_expanded)||n.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let L=0,H=0,W=0;const B=new Date;n.matches_expanded.forEach(se=>{let le=null;try{le=typeof se.scoreboard_data=="string"?JSON.parse(se.scoreboard_data):se.scoreboard_data}catch{}le?.time_remaining?le.time_remaining.toLowerCase()==="final"?L++:H++:new Date(se.scheduled_at)<B?L++:W++});const F=H>0?"live":"upcoming",q=[];L>0&&q.push(`<span class="match-filter-btn${F==="final"?" match-filter--active":""}" data-filter="final">${L} Final</span>`),H>0&&q.push(`<span class="match-filter-btn match-filter-btn--live${F==="live"?" match-filter--active":""}" data-filter="live">${H} Live</span>`),W>0&&q.push(`<span class="match-filter-btn match-filter-btn--upcoming${F==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${W} Upcoming</span>`);const ne=q.length>0?`<div class="match-filter-bar">${q.join("")}</div>`:"",re=new Date,oe=n.matches_expanded.map(se=>{const le=se.scoreboard_data?typeof se.scoreboard_data=="string"?se.scoreboard_data:JSON.stringify(se.scoreboard_data):"";let fe="upcoming",me=null;try{me=typeof se.scoreboard_data=="string"?JSON.parse(se.scoreboard_data):se.scoreboard_data}catch{}me?.time_remaining?fe=me.time_remaining.toLowerCase()==="final"?"final":"live":fe=new Date(se.scheduled_at)<re?"final":"upcoming";const ve=fe!==F;return`<bma-match-status
                    data-match-guid="${se.guid||se.odds_id||se.id||""}"
                    data-match-title="${se.short_title||se.title||"Match"}"
                    data-match-scheduled-at="${se.scheduled_at||""}"
                    data-match-home-team="${se.home_team_id||"Home"}"
                    data-match-away-team="${se.away_team_id||"Away"}"
                    data-match-home-score="${se.home_team_score!==null&&se.home_team_score!==void 0?se.home_team_score:""}"
                    data-match-away-score="${se.away_team_score!==null&&se.away_team_score!==void 0?se.away_team_score:""}"
                    data-match-scoreboard="${le.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${se.sport_id||""}"
                    data-match-status="${fe}"
                    data-sync-theme="dark"
                    style="${ve?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${ne}
                </div>
                <div class="matches-list" id="info-matches-scroll">
                    ${oe}
                </div>
            `})(),Q=n.status==="UPCOMING"?"Accepting new players. Place bets before each match starts.":n.status==="LOCKED"?"No new entrants. Joined players can still bet on matches that haven't started yet.":n.status==="COMPLETED"?"All matches settled. Final standings locked in.":"",X=`
            <div class="info-summary-pack">
                <div class="info-summary-pack__stat">
                    <span class="info-summary-pack__stat-label">Starting TD$</span>
                    <span class="info-summary-pack__stat-value" style="color: var(--status-upcoming-text, #00E676);">TD$ ${Number(n.tournament_dollars||0).toLocaleString()}</span>
                </div>
                <div class="info-summary-pack__stat">
                    <span class="info-summary-pack__stat-label">Players</span>
                    <span class="info-summary-pack__stat-value">${u} / ${p}</span>
                </div>
                <div class="info-summary-pack__stat">
                    <span class="info-summary-pack__stat-label">Games</span>
                    <span class="info-summary-pack__stat-value">${R}</span>
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
                        <span class="info-legend__term">Odds Format · ${m?"Locked Odds":"Live Odds"}</span>
                        <span class="info-legend__def">${m?"Odds freeze at each match's scheduled start.":"Odds move with real-world markets throughout each game."}</span>
                    </div>
                    <div class="info-legend__item">
                        <span class="info-legend__term">Format · ${h?"On-going":"Fixed Slate"}</span>
                        <span class="info-legend__def">${h?"New matches are added as odds become available throughout the tournament.":"The slate is fixed at the start of the tournament. No new matches will be added."}</span>
                    </div>
                    <div class="info-legend__item">
                        <span class="info-legend__term">Game Mode · ${b}</span>
                        <span class="info-legend__def">${b==="Bet Max Tourney"?"Open betting across the full tournament slate. Rank by your TD$ balance. Pending bets don't move it; only settled wins and losses do. Ties break on Max Win, then earliest bet placed.":"See tournament rules for scoring and stake requirements."}</span>
                    </div>
                </div>
            </div>
        `,A=e.appSession?.session_user?.guid||"",$=!!n.creator_guid&&n.creator_guid===A;console.log("[info share] isCreator check:",{viewerGuid:A,creator_guid:n.creator_guid,created_by_user:n.created_by_user,is_private:n.is_private,join_slug:n.join_slug,share_url:n.share_url,tournament_guid:n.guid,isCreator:$});const U=n.share_url||`${window.location.origin}${window.location.pathname}#/preview/${n.guid}${n.join_slug?"?s="+encodeURIComponent(n.join_slug):""}`,N=$?`
            <div class="info-pack info-pack--padded info-share-pack">
                <div class="info-share-pack__text">
                    <span class="info-share-pack__title">You're the host</span>
                    <span class="info-share-pack__sub">Share the invite link to fill your lobby.</span>
                </div>
                <button class="info-share-pack__btn" data-info-share-btn data-share-url="${U.replace(/"/g,"&quot;")}" data-share-caption="${(n.caption||"tournament").replace(/"/g,"&quot;")}" aria-label="Share invite link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
                    <span>Share Invite</span>
                </button>
            </div>
        `:"",G=`
            <div class="info-pack info-pack--padded">
                <div class="info-progress-status">
                    <div class="info-progress-status__row">
                        <span class="info-progress-status__label">Status</span>
                        <span class="info-progress-status__value" style="color: ${k};">${S}</span>
                    </div>
                    ${Q?`<div class="info-progress-status__hint">${Q}</div>`:""}
                </div>
                ${f?`<div class="info-progress-divider"></div>${f}`:""}
            </div>
        `;r.innerHTML=`
            <div class="info-wrap">
                ${N}
                ${G}
                ${X}
                ${ee}
                <div class="info-pack">
                    <div class="info-tabs">
                        <button class="info-tab info-tab--active" data-info-tab="summary"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Summary</button>
                        <button class="info-tab" data-info-tab="trophies"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Trophies</button>
                        <button class="info-tab" data-info-tab="matches"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> Matches</button>
                    </div>
                    <div class="info-tab-panel" data-info-panel="summary">${O}${T}</div>
                    <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${D}</div>
                    <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${V}</div>
                </div>
            </div>
        `;const j=r.querySelector("[data-info-legend-toggle]");j&&j.addEventListener("click",()=>{const H=j.closest(".info-legend").classList.toggle("info-legend--open");j.setAttribute("aria-expanded",String(H))});const te=r.querySelector("[data-info-share-btn]");te&&te.addEventListener("click",async()=>{const L=te.dataset.shareUrl,H=te.dataset.shareCaption||"tournament";if(!L)return;const W=`Join ${H}`,B=`You're invited to join ${H} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:W,text:B,url:L});return}catch(F){if(F?.name==="AbortError")return}try{await navigator.clipboard.writeText(L),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(F){console.warn("[info share] clipboard write failed:",F),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Link: "+L,"danger")}}),r.querySelectorAll(".info-tab").forEach(L=>{L.addEventListener("click",()=>{r.querySelectorAll(".info-tab").forEach(W=>W.classList.remove("info-tab--active")),L.classList.add("info-tab--active");const H=L.dataset.infoTab;r.querySelectorAll(".info-tab-panel").forEach(W=>{W.style.display=W.dataset.infoPanel===H?"":"none"})})});const I=r.querySelector('[data-info-panel="matches"]');I&&I.addEventListener("click",L=>{const H=L.target.closest(".match-filter-btn");H&&(I.querySelectorAll(".match-filter-btn").forEach(W=>W.classList.remove("match-filter--active")),H.classList.add("match-filter--active"),I.querySelectorAll("bma-match-status").forEach(W=>{W.style.display=W.dataset.matchStatus===H.dataset.filter?"":"none"}))});const E=document.getElementById("pop-play__caro-info-summary2--id");E&&(E.innerHTML="");const M=document.getElementById("pop-play__caro-info-list--id");M&&(M.innerHTML="")},async populateLeaderboard(){const e=xe(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,a=e.appSession?.session_user?.guid;if(!s){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const n=document.getElementById("pop-play__caro-leaderboard--id");if(!n)return;let r=document.getElementById("leaderboard-loading-banner");r||(r=document.createElement("neodigm-juicebar"),r.id="leaderboard-loading-banner",r.setAttribute("role","progressbar"),r.setAttribute("data-n55-theme","warning"),r.setAttribute("data-n55-size","small"),r.innerHTML="<div></div>",r.style.cssText=`
                width: 100%;
                margin: 6px;
            `,n.parentNode.insertBefore(r,n)),r.style.visibility="visible";try{const o=await $e.fetchLeaderboard(s),l=o?.data||o?.rows;if(l&&l.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(Q=>Q.guid===s),d=c?.class||"DEFAULT_FORMAT",u=window.GameMode?.get?.(d),p=u?.rankLeaderboard?u.rankLeaderboard(l.map(Q=>{const X=typeof Q.combined_betslips=="string"?(()=>{try{return JSON.parse(Q.combined_betslips)}catch{return[]}})():Q.combined_betslips||[];return{...Q,bets:X,timestamp:Q.created_at||Q.updated_at||0}}),c):l,f=parseFloat(c?.tournament_dollars||0),g=Q=>{if(d!=="DEFAULT_FORMAT"||f<=0)return!0;let X=0;return(Q.bets||[]).forEach(Z=>{(Z.bet||[]).forEach(K=>{Object.keys(K).forEach(ie=>{ie!=="short_title"&&(X+=parseFloat(K[ie]?.stake||0))})})}),X>=f-.01},y=(()=>{if(d!=="DEFAULT_FORMAT")return"";const X=(c?.tags||[]).find(N=>N.badge_gold!==void 0||N.badge_silver!==void 0||N.badge_bronze!==void 0);if(!X)return"";const Z=X.badge_gold||0,K=X.badge_silver||0,ie=X.badge_bronze||0;if(Z===0&&K===0&&ie===0)return"";const z=p.some(N=>(N.bets||[]).some(G=>(G.bet||[]).some(j=>Object.keys(j).some(te=>te!=="short_title"&&j[te]?.reconciled===!0))))?p.filter(g):[],ee=N=>{if(!N)return'<span class="podium-slot__empty">Open</span>';const G=N.user_guid===a;return`<span class="podium-slot__name${G?" podium-slot__name--you":""}">${N.username||"Unknown"}${G?' <span class="podium-slot__you">YOU</span>':""}</span>`},Y=Array.from({length:Z},(N,G)=>ee(z[G])).join(""),A=Array.from({length:K},(N,G)=>ee(z[Z+G])).join(""),$=Array.from({length:ie},(N,G)=>ee(z[Z+K+G])).join(""),U=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
                        <div class="leaderboard-podium">
                            <div class="leaderboard-podium__title">Trophy Preview</div>
                            <div class="leaderboard-podium__pack">
                                ${K>0?`<div class="podium-slot podium-slot--silver">
                                    <div class="podium-slot__trophy podium-slot__trophy--silver"></div>
                                    <span class="podium-slot__count">&times;${K}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--silver">
                                        <div class="podium-slot__names">${A}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${Z>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${Z}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${Y}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${ie>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${ie}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${$}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${U?`<div class="leaderboard-podium__label">${U}</div>`:""}
                        </div>
                    `})(),v=`
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
                    ${d==="DEFAULT_FORMAT"?`
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
                `,w=(Q,X,Z=!1)=>{let K="";if(c?.tags&&Array.isArray(c.tags)){const A=c.tags.find($=>!!(typeof $=="object"&&$!==null&&($.entity_guid===Q.user_guid&&$.badge&&$.badge.startsWith("--badge__ribbon--")||$[Q.user_guid]&&$[Q.user_guid].startsWith("--badge__ribbon--"))));if(A){const $=A.badge||A[Q.user_guid];$==="--badge__ribbon--gold"?K="badge-trophy--gold":$==="--badge__ribbon--silver"?K="badge-trophy--silver":$==="--badge__ribbon--bronze"&&(K="badge-trophy--bronze")}}const ie=Q.combined_betslips?typeof Q.combined_betslips=="string"?Q.combined_betslips:JSON.stringify(Q.combined_betslips):"[]";let J="[]";if(Q.combined_betslips&&c?.matches_expanded){const A=typeof Q.combined_betslips=="string"?JSON.parse(Q.combined_betslips):Q.combined_betslips,$=[...new Set(A.map(N=>N.coreMatches__guid||N.match_guid||N.odds_id).filter(Boolean))],U=c.matches_expanded.filter(N=>{const G=N.guid||N.id||N.odds_id;return $.includes(G)});J=JSON.stringify(U)}const z=parseFloat(Q.calculated_tournament_dollars||0),ee=parseInt(Q.total_betslips||0),Y=z===0&&ee===0?c?.tournament_dollars||0:Q.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${X}"
                            data-username="${Q.username||"Unknown"}"
                            data-user-guid="${Q.user_guid||""}"
                            data-tournament-dollars="${Y}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${Q.total_betslips||0}"
                            data-total-payout="${Q.total_payout||0}"
                            data-combined-betslips="${ie.replace(/"/g,"&quot;")}"
                            data-user-matches="${J.replace(/"/g,"&quot;")}"
                            data-badge-class="${K}"
                            data-is-current-user="${Q.user_guid===a}"
                            data-unqualified="${Z}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `},x=p.filter(g),P=p.filter(Q=>!g(Q)),S=(d==="DEFAULT_FORMAT"&&x.length>0?`
                    <div class="leaderboard-divider leaderboard-divider--qualified">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                            <span class="leaderboard-divider__title">Qualified</span>
                            <span class="leaderboard-divider__subtitle">Ranked for tournament prizes</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                `:"")+x.map((Q,X)=>w(Q,X+1,!1)).join(""),k=P.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${P.map(Q=>w(Q,"—",!0)).join("")}
                `:"";n.innerHTML=y+v+S+k,requestAnimationFrame(()=>{n.querySelectorAll("bma-leaderboard-card").forEach((Q,X)=>{Q.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",Q.style.animationDelay=`${Math.min(X*60,400)}ms`})}),n.querySelectorAll(".leaderboard-tab").forEach(Q=>{Q.addEventListener("click",()=>{const X=Q.dataset.lbTab;n.querySelectorAll(".leaderboard-tab").forEach(Z=>Z.classList.remove("leaderboard-tab--active")),Q.classList.add("leaderboard-tab--active"),n.querySelectorAll("[data-lb-panel]").forEach(Z=>{Z.style.display=Z.dataset.lbPanel===X?"":"none"})})});const T=x.findIndex(Q=>Q.user_guid===a),O=c?.entities?.guids?.length||p.length,D=T>=0?T+1:"—",V=document.getElementById("dashboard-rank");if(V){const Q=D==="—"?"—":`${D}/${O}`;V.innerHTML=`<span class="tourn-dashboard__rank-text">${Q}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else n.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),n.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=xe(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(r=>r.guid===s);n&&(console.log("[appEvents] Hydrating play popup for tournament:",s),this.populateInfoPage(),this.renderMatchCards(n),this.updateTournamentDashboard(n),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:s,subStatus:a,sort:n,result:r}=e,o=(c,d,u,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${d}">${u}</button>`;let l="";s==="lobby"?l+=`
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
            `;let d={subStatus:a,sort:n,result:r};c.addEventListener("click",u=>{const p=u.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,g=p.dataset.filterVal;d[f]=g,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(_=>_.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const u=i[s]||i.lobby;d={...u},Object.keys(u).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${u[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(d)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){de.subscribe("APP",(S,k)=>{console.warn("~~ sub all APP | "+S+"|"+k)}),de.subscribe("WC",(S,k)=>{console.warn("~~ sub all WC  | "+S+"|"+k)}),de.subscribe("ROUTE",(S,k)=>{console.warn("~~ sub all ROUTE  | "+S+"|"+k)});let t="lobby",s="all",a="all",n="all",r="active",o="active",l="default",i="all",c="all",d=localStorage.getItem("bma_view_mode")||"cards";const u=()=>{s="all";const S=document.querySelector("bma-app-head-sports");S&&S.setAttribute("data-selected-chip","all")},p=()=>{const S=document.getElementById("filter-bar__count--id");if(!S)return;let k=0;a!=="all"&&k++,l!=="default"&&k++,i!=="all"&&k++,S.textContent=k,S.style.display=k>0?"":"none"},f=()=>{document.querySelectorAll(".home-tab").forEach(O=>O.classList.remove("home-tab--active"));let k=null;if(t==="lobby"?k=o==="completed"?'[data-home-tab="lobby-completed"]':'[data-home-tab="lobby-active"]':t==="private"?k=n==="invites"?'[data-home-tab="private-invites"]':'[data-home-tab="private-all"]':t==="my"&&(k=r==="completed"?'[data-home-tab="my-completed"]':'[data-home-tab="my-active"]'),!k)return;const T=document.querySelector(k);T&&T.classList.add("home-tab--active")},g=()=>{a="all",l="default",i="all",c="all"};document.addEventListener("click",S=>{const k=S.target.closest(".category-filter-toggle");if(k){const D=k.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(D){const V=D.style.display!=="none";D.style.display=V?"none":"",k.classList.toggle("category-filter-toggle--open",!V),window._bmaFilterRowOpen=!V}return}const T=S.target.closest("[data-view-mode]");if(T){const O=T.dataset.viewMode;if(O===d)return;d=O,localStorage.setItem("bma_view_mode",O),document.querySelectorAll("[data-view-mode]").forEach(D=>D.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${O}"]`).forEach(D=>D.classList.add("view-toggle__btn--active")),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"}))}}),document.addEventListener("click",S=>{const k=S.target.closest("[data-home-tab]");if(!k)return;const T=k.dataset.homeTab;let O=!1;if(T==="lobby-active"||T==="lobby-completed"){const D=T==="lobby-completed"?"completed":"active";if(t==="lobby"&&D===o)return;t="lobby",o=D,O=!0}else if(T==="my-active"||T==="my-completed"){const D=T==="my-completed"?"completed":"active";if(t==="my"&&D===r)return;t="my",r=D,O=!0}else if(T==="private-all"||T==="private-invites"){const D=T==="private-invites"?"invites":"all";if(t==="private"&&D===n)return;t="private",n=D,O=!0}O&&(u(),g(),p(),document.querySelectorAll(".home-tab").forEach(D=>D.classList.remove("home-tab--active")),k.classList.add("home-tab--active"),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"})))}),document.addEventListener("change",S=>{const k=S.target.closest(".category-dropdown");if(!k)return;const T=k.dataset.filterType,O=k.value;T==="subStatus"?a=O:T==="sort"?l=O:T==="result"?i=O:T==="odds"&&(c=O),p(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),de.subscribe(e.hierTopics.COREBETSLIP,(S,k)=>{JSON.parse(k);let T=16;switch(S){case e.hierTopics.COREBETSLIP__BET:T=5,aa.shootConfetti(),console.log("~~~  |  "+S+" | ",k);const O=document.querySelector("[data-bets-valid]");O&&(O.dataset.betsValid="false");const D=document.querySelector("neodigm-sodapop");D&&D.setAttribute("data-wait","true");const V=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(V.length===0){console.warn("[app_events] No bets to submit"),D&&D.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const Q=document.querySelector(".play-cntr"),X=Q?.dataset?.currentTournGuid,Z=e.appSession?.session_user?.guid;if(!X||!Z){console.error("[app_events] Missing tournament or user GUID"),D&&D.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const K=Array.from(V).map(N=>{const G=N.getAttribute("data-content-team-points"),j=N.getAttribute("data-content-odds"),te=N.getAttribute("data-stake")||"0",I=N.getAttribute("data-content-type"),E=N.getAttribute("data-payout")||"0",M=N.getAttribute("data-match-guid")||"",L={};return L[G]={type:I,stake:parseFloat(te),odds:parseFloat(j),payout:parseFloat(E),reconciled:!1},{acctEntity__guid:Z,coreTournaments__guid:X,coreMatches__guid:M,bet:[L],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",K);const ie=Q?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const N=window.GameMode.get(ie),j=[...e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(M=>M.coreTournaments__guid===X):[],...K],I=(e.coreTourn.length>0?e.coreTourn[e.coreTourn.length-1]:null)?.data.find(M=>M.guid===X),E=N.validateBetSlip(j,I,0);if(!E.valid){console.log("[app_events] Game mode validation failed:",E.errors),typeof neodigmToast<"u"&&E.errors.forEach(L=>neodigmToast.q(L,"warning",4e3)),D&&D.setAttribute("data-wait","false");const M=document.querySelector("[data-publish-betslip]");M&&delete M.dataset.processing;break}}$e.postBetSlips(K).then(N=>{console.log("[app_events] Bet slips posted successfully:",N);const G=K.reduce((j,te)=>{const I=te.bet[0],E=Object.keys(I)[0];return j+(I[E]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${G.toFixed(2)}`,"success"),$e.fetchBetSlips(Z,X).then(j=>{if(j?.rows){const te={timestamp:Date.now(),source:"API",data:j.rows};e.pushcoreBetSlip(te),console.log("[app_events] Refreshed bet slips in store:",j.rows.length,"items")}ke.refreshPlayPopupUI(X,j),D&&D.setAttribute("data-wait","false")}).catch(j=>{console.error("[app_events] Error fetching fresh bet slips:",j);const te=document.querySelector("[data-publish-betslip]");te&&delete te.dataset.processing,O&&(O.dataset.betsValid="true"),D&&D.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(N=>{console.error("[app_events] Error posting bet slips:",N);const G=document.querySelector("[data-publish-betslip]");G&&delete G.dataset.processing,O&&(O.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),D&&D.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:T=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&k){k=JSON.parse(k);const G=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&G){const j=e.coreBetSlip[0].data.filter(F=>F.coreTournaments__guid===G),te=[],I=[],E=[];j.forEach(F=>{const q=F.bet||[];if(q.length===0)return;const ne=q[0];Object.keys(ne).filter(oe=>oe!=="short_title").forEach(oe=>{const se=ne[oe],le=se?.reconciled!==!1,fe=parseFloat(se?.payout||0);le?fe===0?I.push(F):E.push(F):te.push(F)})});const M=wt.search(te,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,L=wt.search(I,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,H=M+L,W=wt.search(E,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,B=k.tournament_dollars-H+W;ke.updateTDBalance("#summary-balance",B)}else ke.updateTDBalance("#summary-balance",k.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let z=0,ee=0,Y=0;if(e.coreBetSlip.length>0){const G=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(G){const te=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(W=>W.coreTournaments__guid===G),I=[],E=[],M=[];te.forEach(W=>{const B=W.bet||[];if(B.length===0)return;const F=B[0];Object.keys(F).filter(ne=>ne!=="short_title").forEach(ne=>{const re=F[ne],oe=re?.reconciled!==!1,se=parseFloat(re?.payout||0);oe?se===0?E.push(W):M.push(W):I.push(W)})}),z=wt.search(I,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ee=wt.search(M,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const L=wt.search(E,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,H=wt.search(M,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;Y=L+H}}let A=!0,$=0;const U=document.querySelector("[data-bets-valid]");if(U&&k){k=JSON.parse(k),k.pending_stake_sum=0,k.pending_payout_sum=0,k.bets.length||(A=!1),k.bets.forEach(M=>{M.stake=Number(M.stake),M.stake>0?k.pending_stake_sum+=M.stake:A=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(M=>{const L=parseFloat(M.getAttribute("data-payout")||"0");k.pending_payout_sum+=L});const G=z+k.pending_stake_sum,j=ee+k.pending_payout_sum;$=parseFloat((k.tournament_dollars-G-Y+ee).toFixed(2));const I=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let E=null;I&&e.coreTourn.length>0&&(E=e.coreTourn[e.coreTourn.length-1]?.data?.find(L=>L.guid===I)),ke.updateSummaryAndDashboard($,G,j,E,k.pending_payout_sum||0),(k.tournament_dollars<0||$<0)&&(A=!1),U.dataset.betsValid=A}break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T,"QUITE").vibrate()});const _=()=>{const k=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let T=0;k&&e.coreTourn.length>0&&(T=e.coreTourn[e.coreTourn.length-1].data.find(V=>V.guid===k)?.tournament_dollars||0),de.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:T,timestamp:Date.now()}))},y=()=>{const k=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let T=0;k&&e.coreTourn.length>0&&(T=e.coreTourn[e.coreTourn.length-1].data.find(J=>J.guid===k)?.tournament_dollars||0);let O=0,D=0,V=0,Q=0;if(e.coreBetSlip.length>0&&k){const ie=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(U=>U.coreTournaments__guid===k);console.log("[app_events] Filtered bets for tournament:",k,"found:",ie.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",ie[0]);const J=[],z=[],ee=[];ie.forEach(U=>{const N=U.bet||[];if(N.length===0)return;const G=N[0];Object.keys(G).filter(te=>te!=="short_title").forEach(te=>{const I=G[te],E=I?.reconciled!==!1,M=parseFloat(I?.payout||0);E?M===0?z.push(U):ee.push(U):J.push(U)})}),console.log("[app_events] Bet categories:",{unreconciled:J.length,reconciledZero:z.length,reconciledNonZero:ee.length});const Y=wt.search(J,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,A=wt.search(z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,$=wt.search(ee,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;V=A+$,D=wt.search(ee,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Q=wt.search(J,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,O=Y,console.log("[app_events] Balance calculation:",{unreconciledStakes:Y,lostBetStakes:A,wonBetStakes:$,allReconciledStakes:V,displayedStake:O,reconciledPayouts:D,tournamentDollars:T,calculatedBalance:T-O-V+D})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const X=T-O-V+D;let Z=null;k&&e.coreTourn.length>0&&(Z=e.coreTourn[e.coreTourn.length-1].data.find(ie=>ie.guid===k)),ke.updateSummaryAndDashboard(X,O,D,Z,Q)};de.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(S,k)=>{const O=JSON.parse(k)?.rows||[],D=document.querySelector(".bet-grid__slip-MYBETS");if(!D)return;if(D.innerHTML="",O.length===0){D.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const Z=document.querySelector(".bet-grid__slip");Z&&Z.setAttribute("data-active-bet-tab","BETSLIP"),_();return}O.forEach(Z=>{if((Z.bet||[]).length===0)return;const ie=document.createElement("bma-bet-existing");ie.setAttribute("data-corebetslip",JSON.stringify(Z)),D.appendChild(ie)});const V=document.querySelector(".bet-grid__slip");V&&V.setAttribute("data-active-bet-tab","MYBETS"),xe().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&ke.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",O.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),y()},200)}),document.addEventListener("click",S=>{const k=S.target;if(k&&k.classList.contains("bet-slip-tab")){const T=k.dataset.betTab,O=document.querySelector(".bet-grid__slip");T&&O&&(O.setAttribute("data-active-bet-tab",T),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",T))}if(k&&k.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(k.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}k.dataset.processing="true";const O=k.dataset.publishBetslip;de.publish(O,JSON.stringify({timestamp:Date.now()}))}});const m=()=>{const k=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let T=0;k&&e.coreTourn.length>0&&(T=e.coreTourn[e.coreTourn.length-1].data.find(X=>X.guid===k)?.tournament_dollars||0);const O=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),D=Array.from(O).map(V=>({teamPoints:V.getAttribute("data-content-team-points"),odds:V.getAttribute("data-content-odds"),stake:V.getAttribute("data-stake")||"0",type:V.getAttribute("data-content-type"),abbreviatedTitle:V.getAttribute("data-abbreviated-title"),scheduledAt:V.getAttribute("data-scheduled-at")}));de.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:T,bets:D,timestamp:Date.now()}))},h=(S,k)=>{const T=JSON.parse(k),O=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!O){console.error("[app_events] Bet slip container not found");return}const D=O.querySelector(".bet-slip__empty");D&&D.remove();let V="";T.type==="total"?V=T.team==="over"?"Over":"Under":T.team==="home"?V=T.homeTeam:T.team==="away"&&(V=T.awayTeam);let Q=V;if(T.point)if(T.type==="spread"){const z=parseFloat(T.point)>0?`+${T.point}`:T.point;Q=`${V} ${z}`}else T.type==="total"&&(Q=`${V} ${T.point}`);const X=document.createElement("bma-bet-entry");X.setAttribute("data-content-team-points",Q),X.setAttribute("data-content-odds",T.price||"0"),X.setAttribute("data-content-stake-text","0"),X.setAttribute("data-content-type",T.type||""),X.setAttribute("data-abbreviated-title",T.abbreviatedTitle||`${T.homeTeam} vs ${T.awayTeam}`),X.setAttribute("data-scheduled-at",T.scheduledAt||""),X.setAttribute("data-match-guid",T.matchGuid||""),X.setAttribute("data-home-team",T.homeTeam||""),X.setAttribute("data-away-team",T.awayTeam||""),X.setAttribute("data-bet-team",V||"");const K=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(K&&e.coreTourn.length>0){const ee=e.coreTourn[e.coreTourn.length-1].data.find(Y=>Y.guid===K);if(ee?.sports_allowed&&ee.sports_allowed.length>0){const Y=ee.sports_allowed[0];X.setAttribute("data-sport-key",Y.key||"");const A=Ge.find($=>$.key===Y.key);X.setAttribute("data-sport-group",A?.group||"")}}O.appendChild(X),console.log("[app_events] Bet entry appended to container:",X,"Container children:",O.children.length),setTimeout(()=>{v(X)},0);const ie=document.querySelector(".bet-grid__slip");ie&&(ie.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const J=O.querySelectorAll("bma-bet-entry").length;J>=3?requestAnimationFrame(()=>{setTimeout(()=>{const z=document.querySelector(".bet-grid__slip");z&&(console.log("[app_events] Scrolling parent to bottom - bet count:",J,"scrollHeight:",z.scrollHeight,"current scrollTop:",z.scrollTop),z.scrollTo({top:z.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",z.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",J,"bet cards (need 3+)"),setTimeout(()=>{m()},200),console.log("[app_events] Created bet entry:",{teamPoints:Q,odds:T.price,type:T.type})};de.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(S,k)=>{h(S,k),b()}),de.subscribe(e.hierTopics.COREBETSLIP__MONEY,(S,k)=>{h(S,k),b()}),de.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(S,k)=>{h(S,k),b()});function b(){const S=window.matchMedia("(orientation: portrait)").matches,k=window.matchMedia("(max-width: 768px)").matches;if(S||k){const T=document.querySelector(".bet-grid__select"),O=document.querySelector(".bet-grid__slip"),D=document.querySelector(".bet-grid__toggle-text");T&&O&&D&&(T.classList.add("collapsed"),O.classList.remove("collapsed"),D.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const v=S=>{const k={sport:{key:S.getAttribute("data-sport-key")||"",group:S.getAttribute("data-sport-group")||""},Match:{scheduled_at:S.getAttribute("data-scheduled-at")||"",home_team_id:S.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:S.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:S.getAttribute("data-bet-team")||"",over:"",under:""},type:S.getAttribute("data-content-type")||"",odds:S.getAttribute("data-content-odds")||"0",stake:S.getAttribute("data-stake")||"0"}},T=Ru.calcPayout(k);S.setAttribute("data-payout",T.toString()),console.log("[app_events] Payout calculated:",{stake:k.Bet.stake,odds:k.Bet.odds,payout:T})};new MutationObserver(S=>{S.forEach(k=>{k.type==="attributes"&&k.attributeName==="data-stake"&&k.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",k.target.getAttribute("data-stake")),v(k.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{m()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",S=>{console.log("[app_events] Removing bet entry:",S.detail);const k=S.target,T=S.detail;k.remove(),setTimeout(()=>{const Q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Q){const X=xe(),Z=X.coreTourn[X.coreTourn.length-1];if(Z&&Z.data){const K=Z.data.find(ie=>ie.guid===Q);K&&ke.updateTournamentDashboard(K)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(V=>{(V.shadowRoot?.querySelectorAll(".btn")||[]).forEach(X=>{const Z=X.dataset.betType,K=X.dataset.price,ie=Z===T.type,J=K===T.odds;ie&&J&&X.classList.contains("btn--active")&&(X.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:Z,btnPrice:K}))})});const D=document.querySelector(".bet-grid__slip-BETSLIP-content");D&&D.children.length===0&&(D.innerHTML=Fn),setTimeout(()=>{m()},100)}),de.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(S,k)=>{const T=JSON.parse(k);T&&T.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${T.guid}"]`)}),de.subscribe(e.hierTopics.WC__APP__FOOT,(S,k)=>{switch(JSON.parse(k),S){case"WC.APP.FOOT.LOBBY":case"WC.APP.FOOT.ALL_SPORTS":de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"LOBBY",timestamp:Date.now()}));break;case"WC.APP.FOOT.TOURNEYS":de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_TOURNEYS,JSON.stringify({tab:"TOURNEYS",timestamp:Date.now()}));break;case"WC.APP.FOOT.PRIVATE":case"WC.APP.FOOT.MY_TOURNEYS":de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_PRIVATE,JSON.stringify({tab:"PRIVATE",timestamp:Date.now()}));break;case"WC.APP.FOOT.LEADERBOARD":de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case"WC.APP.FOOT.MY_PROFILE":neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break}}),de.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(S,k)=>{const T=JSON.parse(k);let O=16;S=="WC.APP.HEAD_SPORTS.PREV"||S=="WC.APP.HEAD_SPORTS.NEXT"||S=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?O=3:(s=T.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${T.group})`),p(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),O&&neodigmWired4Sound&&neodigmWired4Sound.sound(O).vibrate()}),de.subscribe(e.hierTopics.WC__APP__HEAD_MID,(S,k)=>{JSON.parse(k);let T=16;const O=(D,V="active")=>{t=D,n="all",r=V,o="active",document.body.dataset.tournFilter=D,u(),g(),p(),f(),(window.location.hash||"").startsWith("#/home_route")||(window.location.hash||"")==="#/"||!window.location.hash||(typeof neodigmSodaPop<"u"&&neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/home_route"),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}))};switch(S){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":O("lobby");break;case"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS":O("my","active");break;case"WC.APP.HEAD_MID.HEAD_MID_PRIVATE":case"WC.APP.HEAD_MID.HEAD_MID_MY":O("private");break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":O("my","completed");break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":T=16,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/top_players_route";break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":de.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()}),de.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(S,k)=>{JSON.parse(k);let T=16;switch(S){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const O=window.deferredPWAPrompt;if(!O){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{O.prompt();const{outcome:V}=await O.userChoice;V==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),T=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(V){console.error("PWA install error:",V),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const Q=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:Q});const X=document.getElementById("app");X&&X.setAttribute("data-sync-theme",Q),document.body.setAttribute("data-sync-theme",Q)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":ka.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":ka.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()});const x=S=>{document.querySelectorAll(".play-section").forEach(T=>{T.style.display="none",T.classList.remove("play-section--active")});const k=document.getElementById(`play-section-${S}`);k&&(k.style.display="",k.classList.add("play-section--active"))},P=(S,k)=>{const T=S.split(".").pop(),O=document.querySelectorAll(".play-cntr .dash-nav__btn"),V=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");x(T),O.forEach(Q=>{const X=Q.dataset.publishRouteHome?.split(".").pop()||"";Q.classList.toggle("dash-nav__btn--active",X===T)}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),V&&(V.style.overflow=T==="PLAY"?"hidden":"auto")};de.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",P);let R=null;de.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(S,k)=>{if(P(S),R){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}R=setTimeout(()=>{R=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),ke.populateLeaderboard()}),de.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(S,k)=>{JSON.parse(k);const T=document.getElementById("btn-join__play--id");if(!T){console.warn("[app_events] PLAY button not found");return}const O=T.dataset.requiresJoin==="true",D=T.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",D,"requiresJoin:",O),O&&D==="join"){const Q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,X=xe();if(!Q){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",Q),de.publish(X.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:Q,timestamp:Date.now()})),T.textContent="Play",T.dataset.requiresJoin="false",setTimeout(()=>{P(S),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else P(S),console.log("[app_events] Advancing carousel to PLAY page")}),de.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(S,k)=>{JSON.parse(k);let T=10;switch(S){case"WC.APP.HEAD_TOP.USER_PROFILE":T=0,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break;case"WC.APP.HEAD_TOP.LOGO":const O=e.appSession.session_app.version,D=new Date().getFullYear();O&&neodigmToast&&neodigmToast.q(`${O} 4/22/2026, 10:29:25 AM|© ${D} Bet Max Action`,"night");break;case"WC.APP.HEAD_TOP.CREATE_CONTEST":de.publish(e.hierTopics.WC__APP__FOOT__MY_TOURNEYS,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,(S,k)=>{const T=JSON.parse(k);let O=0;switch(T?.action){case"JOIN":O=512;break;case"PLAY":O=8;break;case"INFO":O=8;break}if(O){const D=T?.tournamentGuid,V=T?.action;console.log("[app_events] Navigating to play_route:",D,V),setTimeout(()=>{ka.push({name:"play_route",query:{guid:D,action:V}})},O)}}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,(S,k)=>{const T=JSON.parse(k);let O=16;switch(T?.action){case"FOCUS":O=3;break;case"SPORT_ICON":O=10;break;case"JOIN":O=5;break;case"PLAY":O=16;break}O&&neodigmWired4Sound&&neodigmWired4Sound.sound(O).vibrate()}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,(S,k)=>{const T=JSON.parse(k);let O=0,D="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),T?.tournamentStatus){case"UPCOMING":D="success";break;case"LOCKED":D="warning";break;case"COMPLETED":D="danger";break}switch(T?.action){case"SPORT_ICON":T?.sportTitle==T?.sportDescription?O=T?.sportTitle:O=T?.sportTitle+"|"+T?.sportDescription;break}O&&neodigmToast&&neodigmToast.q(O,D)}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,async(S,k)=>{const T=JSON.parse(k);if(T?.action==="JOIN"){const D=xe().appSession?.session_user?.guid;if(!D){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const V=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${T.tournamentGuid}"]`);V&&(V.setAttribute("data-bma-tourn-wait","true"),aa.shootConfetti());const Q={acctEntityGuid:D,tournamentGuid:T.tournamentGuid};try{const X={method:"POST",body:JSON.stringify(Q),headers:$e.genHeaders()};console.log("Posting to:",$e.API_baseURI+"/m5t/"+$e.API_ver+"/coreTournaments/join",Q);const K=await(await fetch($e.API_baseURI+"/m5t/"+$e.API_ver+"/coreTournaments/join",X)).json();if(console.log("Join response:",K),K.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const ie=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${T.tournamentGuid}"]`);if(ie){ie.setAttribute("data-bma-tourn-wait","false");const J=ie.getAttribute("data-bma-tourn-entities");if(J)try{const z=JSON.parse(J);z.guids.includes(D)||(z.guids.push(D),ie.setAttribute("data-bma-tourn-entities",JSON.stringify(z)))}catch(z){console.error("Failed to parse entities:",z)}}},3e3);else{const ie=K?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(ie,"danger");const J=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${T.tournamentGuid}"]`);J&&J.setAttribute("data-bma-tourn-wait","false")}}catch(X){console.error("Join tournament error:",X),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),de.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(S,k)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const T=xe();if(t="lobby",s="all",a="all",l="default",i="all",c="all",T.coreTourn.length>0){console.log("[app_events] coreTourn already populated, hydrating from existing data"),de.publish(T.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"REMOUNT"}));return}try{const O=await $e.fetchTournaments();console.log("[app_events] Tournaments fetched:",O),O?.rows&&Array.isArray(O.rows)?(T.pushCoreTourn({timestamp:Date.now(),source:"API",data:O.rows}),console.log("[app_events] Pushed to coreTourn, length:",T.coreTourn.length),de.publish(T.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",O)}catch(O){console.error("[app_events] Error fetching tournaments:",O),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),de.subscribe(e.hierTopics.PROMOTION__LOAD,async(S,k)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const T=await $e.fetchPromotions();if(console.log("[app_events] Promotions fetched:",T),T?.ok&&T?.data&&Array.isArray(T.data)){const O=T.data.filter(V=>V.class==="banner"&&V.status==="LIVE");console.log("[app_events] Banner promotions:",O);const D=document.querySelector(".featured-swiper .swiper-wrapper");if(!D){console.warn("[app_events] Swiper wrapper not found");return}if(D.innerHTML="",O.forEach((V,Q)=>{const X=document.createElement("div");X.className="swiper-slide";const Z=document.createElement("div");Z.className=`featured-card featured-card--${Q+1}`;const K=V.hero_img?encodeURI(V.hero_img):"";Z.style.backgroundImage=`url("${K}")`,Z.setAttribute("data-promotion-hero-img",V.hero_img||""),Z.setAttribute("data-promotion-caption",V.caption||""),Z.setAttribute("data-promotion-tagline",V.tagline||""),Z.setAttribute("data-promotion-toast",V.toast||""),Z.setAttribute("data-promotion-topic",V.topic?.topic||""),Z.setAttribute("data-promotion-topic-token",V.topic?.token||""),Z.setAttribute("data-promotion-marquee",V.maquee||""),X.appendChild(Z),D.appendChild(X)}),console.log("[app_events] Created",O.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),O.length===1){const V=document.querySelector(".featured-swiper .swiper-wrapper");V&&(V.style.justifyContent="center")}}}catch(T){console.error("[app_events] Error fetching promotions:",T)}}),de.subscribe(e.hierTopics.PROMOTION__CLICK,(S,k)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const T=JSON.parse(k);console.log("[app_events] Promotion clicked:",T),T.toast&&typeof neodigmToast<"u"&&neodigmToast.q(T.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const O=document.querySelector(".l-promotion #promoHero");O&&T.heroImg&&(O.src=T.heroImg);const D=document.querySelector(".l-promotion #promCaption");D&&T.caption&&(D.textContent=T.caption);const V=document.querySelector(".l-promotion #promoTagline");return V&&T.tagline&&(/<[^>]+>/.test(T.tagline)?V.innerHTML=T.tagline:V.textContent=T.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(T){console.error("[app_events] Error handling promotion click:",T)}}),de.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(S,k)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const T=xe();if(T.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const O=T.coreTourn[T.coreTourn.length-1],D=T.coreTourn.length>1?T.coreTourn[T.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",O);const V=[];if(D){const ie=O.data,J=D.data;ie.forEach(z=>{const ee=J.find(Y=>Y.guid===z.guid);ee&&ee.status!==z.status&&(console.log(`[app_events] Status changed for tournament ${z.guid}: ${ee.status} -> ${z.status}`),V.push(z.guid))})}const Q=T.appSession?.session_user?.guid,X=[...O.data].sort((ie,J)=>{const z=ie.status||ie.class,ee=J.status||J.class,Y=ie.entities?.guids||[],A=J.entities?.guids||[],$=Y.includes(Q),U=A.includes(Q),N=(W,B)=>{const F=new Date(W.status_time||0).getTime();return new Date(B.status_time||0).getTime()-F},G=z==="LOCKED"&&$,j=ee==="LOCKED"&&U;if(G&&!j)return-1;if(!G&&j)return 1;if(G&&j)return N(ie,J);const te=z==="UPCOMING",I=ee==="UPCOMING";if(te&&!I)return-1;if(!te&&I)return 1;if(te&&I)return N(ie,J);const E=z==="COMPLETED"&&$,M=ee==="COMPLETED"&&U;if(E&&!M)return-1;if(!E&&M)return 1;if(E&&M)return N(ie,J);const L=z==="COMPLETED"&&!$,H=ee==="COMPLETED"&&!U;return L&&!H?1:!L&&H?-1:N(ie,J)}),Z=ke.categorizeTournaments(X,t,s,Q,{subStatus:a,sort:l,result:i,privateSubTab:n,mySubTab:r,lobbySubTab:o});if(console.log(`[app_events] Categorized into ${Z.length} categories for filter: ${t}/${s} sub:${a} sort:${l} result:${i}`),document.body.dataset.tournFilter=t,window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const ie=document.querySelector(".tournaments-grid");ie&&(ie.dataset.filterContext=t),window._homeRouteRenderCards(Z,!0,d,{tab:t,subStatus:a,sort:l,result:i,odds:c});const J=X.filter(G=>{const j=G.status||G.class,te=G.entities?.guids||[];return(j==="LOCKED"||j==="UPCOMING")&&te.includes(Q)}).length,z=X.reduce((G,j)=>{const te=j.status||j.class,I=j.entities?.guids||[];return(te==="LOCKED"||te==="UPCOMING")&&I.includes(Q)?G+parseFloat(j.tournament_dollars||0):G},0),ee=document.querySelector("bma-app-foot");ee&&ee.setAttribute("data-active-count",String(J));const Y=document.querySelector("bma-app-head-mid");Y&&Y.setAttribute("data-active-count",String(J));const A=document.querySelector("bma-app-head-top");A&&(A.setAttribute("data-active-count",String(J)),A.setAttribute("data-td-dollars",String(z)));const $=document.getElementById("home-tab-active-badge");$&&($.textContent=J,$.style.visibility=J>0?"visible":"hidden");const U=X.filter(G=>{if(G.is_private!==!0)return!1;const j=G.entities?.guids||[];return G.creator_guid===Q||j.includes(Q)}).length,N=document.getElementById("home-tab-private-badge");if(N&&(N.textContent=U),Y&&Y.setAttribute("data-private-count",String(U)),ee&&ee.setAttribute("data-private-count",String(U)),V.length>0){const G=O.data;V.forEach(j=>{const te=G.find(I=>I.guid===j);if(te){const I=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{de.publish(T.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:j,status:te.status,timestamp:Date.now()}))},I)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available");const K=document.getElementById("bma-scores-banner--id");if(K){const ie=new Set,J=[];for(const z of O.data){const ee=Array.isArray(z.matches_expanded)?z.matches_expanded:[];for(const Y of ee){const A=Y.guid||Y.id||Y.odds_id;!A||ie.has(A)||(ie.add(A),J.push(Y))}}K.setAttribute("data-matches",JSON.stringify(J))}ke.prefetchGlobalLeaderboard()}),de.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(S,k)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",k);const T=xe();try{const O=JSON.parse(k);console.log("[app_events] SSE tournament sync data:",O);const D=JSON.parse(O.msg);if(console.log("[app_events] Parsed tournaments array:",D),!Array.isArray(D)){console.warn("[app_events] SSE msg is not an array:",D);return}T.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:D}),console.log("[app_events] Pushed SSE data to coreTourn, length:",T.coreTourn.length),de.publish(T.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),document.querySelector(".play-cntr")&&(console.log("[SSE] Play route is active, triggering real-time update"),ke.hydratePlayPopup())}catch(O){console.error("[app_events] Error processing SSE tournament sync:",O)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const S=document.querySelector("#caption__my-profile");S&&(S.textContent="My Profile");const k=document.getElementById("profile-trophy-username");k&&(k.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const T=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",T),console.log("[app_events] coreTourn length:",e.coreTourn.length),!T||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const D=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",D.length);const V=K=>{const ie=document.getElementById("profile-stats-panel");ie&&(ie.innerHTML=ke.buildStatsPanel(D,T,K))};V(ke._betStatsCache?.stats||null),ke._ensureBetStatsCache(T).then(K=>{K&&V(K)});let Q=0,X=0,Z=0;D.forEach((K,ie)=>{if(!K.tags||!Array.isArray(K.tags)){console.log(`[app_events] Tournament ${ie} has no tags or tags not an array`);return}K.tags.forEach((J,z)=>{if(typeof J=="object"&&J!==null){let ee=null;J.entity_guid===T&&J.badge?ee=J.badge:J[T]&&(ee=J[T]),ee==="--badge__ribbon--gold"?Q++:ee==="--badge__ribbon--silver"?X++:ee==="--badge__ribbon--bronze"&&Z++}})}),setTimeout(()=>{let K=document.querySelectorAll(".badge-counter");if(K.length===0){const ie=document.querySelector("neodigm-sodapop");ie&&(K=ie.querySelectorAll(".badge-counter"))}K.length>=3?(K[0].textContent=X,K[1].textContent=Q,K[2].textContent=Z,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const K=document.querySelector("#profile-tournaments-list");if(!K||!T||e.coreTourn.length===0)return;const z=e.coreTourn[e.coreTourn.length-1].data.filter($=>{try{return(typeof $.entities=="string"?JSON.parse($.entities):$.entities)?.guids?.includes(T)}catch{return!1}}),ee={LOCKED:0,UPCOMING:1,COMPLETED:2};z.sort(($,U)=>{const N=ee[$.status]??3,G=ee[U.status]??3;return N!==G?N-G:new Date(U.status_time||0)-new Date($.status_time||0)});const Y=$=>{let U=z;if($==="active"?U=z.filter(N=>N.status==="LOCKED"||N.status==="UPCOMING"):$==="completed"&&(U=z.filter(N=>N.status==="COMPLETED")),U.length===0){K.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}K.innerHTML=U.map(N=>{const G=N.entities?JSON.stringify(N.entities).replace(/"/g,"&quot;"):"",j=N.tags?JSON.stringify(N.tags).replace(/"/g,"&quot;"):"[]",te=N.sports_allowed?JSON.stringify(N.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${N.guid||""}"
                                        data-bma-tourn-caption="${N.caption||""}"
                                        data-bma-tourn-tagline="${N.tagline||""}"
                                        data-bma-tourn-status="${N.status||""}"
                                        data-bma-tourn-class="${N.status||""}"
                                        data-bma-tourn-sports_allowed="${te}"
                                        data-bma-tourn-entities="${G}"
                                        data-bma-tourn-entry_fee="${N.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${N.tournament_dollars||0}"
                                        data-bma-tourn-matches="${N.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${j}"
                                        data-bma-tourn-window_start_time="${N.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${N.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{K.querySelectorAll("bma-tournament-list-card").forEach((N,G)=>{N.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",N.style.animationDelay=`${Math.min(G*60,400)}ms`})})};Y("all");const A=document.querySelector(".profile-tournaments__filters");A&&A.addEventListener("click",$=>{const U=$.target.closest(".profile-tourn-filter");U&&(A.querySelectorAll(".profile-tourn-filter").forEach(N=>N.classList.remove("profile-tourn-filter--active")),U.classList.add("profile-tourn-filter--active"),Y(U.dataset.filter))})},600)},1e3)},"sodapop_my_profile"))},3e3),window._renderTopPlayers=async function(S="ALL"){const k=xe(),T=document.getElementById("global-leaderboard-container");if(T){T.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{let O;const D=ke._globalLBCache[S];D?.data&&Date.now()-D.ts<300*1e3?(console.log(`[Global Leaderboard] Using prefetched cache [${S}]`),O=D.data):(console.log(`[Global Leaderboard] Cache miss [${S}], fetching fresh`),O=await $e.fetchAllTimeLeaderboard(S,100,"td"),ke._globalLBCache[S]={data:O,ts:Date.now(),inflight:!1});const V=O?.data||[],Q=O?.last_updated||null,X=k.coreTourn.length>0?k.coreTourn[k.coreTourn.length-1].data:[];if(!V.length){T.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const Z=T,K=k.appSession?.session_user?.guid,ie={};V.forEach(j=>{const te=j.user_guid;ie[te]={username:j.username||"Unknown",user_guid:te,totalTDWon:parseFloat(j.total_payout||0),totalPayout:parseFloat(j.total_payout||0),totalBets:parseInt(j.total_betslips||0),tournamentsPlayed:parseInt(j.tournaments_joined||0),tournamentsWon:parseInt(j.tournaments_won||0),totalTD:parseFloat(j.total_td_dollars||0),gold:0,silver:0,bronze:0,sports:new Set}}),X.forEach(j=>{!j.tags||!Array.isArray(j.tags)||j.tags.forEach(te=>{if(typeof te!="object"||!te)return;let I=null,E=null;if(te.entity_guid&&te.badge){if(te.entity_guid==="SYSTEM")return;I=te.entity_guid,E=te.badge}else{const L=Object.keys(te);for(const H of L){const W=te[H];if(typeof W=="string"&&W.startsWith("--badge__ribbon--")){I=H,E=W;break}}}if(!I||!E)return;ie[I]||(ie[I]={username:I.substring(0,8),user_guid:I,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,totalTD:0,gold:0,silver:0,bronze:0,sports:new Set});const M=ie[I];E==="--badge__ribbon--gold"?M.gold++:E==="--badge__ribbon--silver"?M.silver++:E==="--badge__ribbon--bronze"&&M.bronze++})});const J=Object.values(ie).filter(j=>j.username!=="Unknown");if(Q){const j=Math.round((Date.now()-new Date(Q).getTime())/6e4),te=j<1?"just now":j===1?"1 minute ago":`${j} minutes ago`;console.log(`[Global Leaderboard] Server last updated ${te}`)}const z=J.filter(j=>j.gold+j.silver+j.bronze>0),ee=new Set;J.forEach(j=>j.sports.forEach(te=>ee.add(te)));const Y={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},A=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let $="all";const U=(j,te)=>{let I=[...J],E;j==="overall"&&(I=I.filter(oe=>oe.gold+oe.silver+oe.bronze>0)),j==="bysport"&&te&&te!=="all"&&(I=I.filter(oe=>oe.sports.has(te)));const M=Z.querySelector(".glb__note");switch(M&&M.remove(),j){case"overall":I.sort((oe,se)=>se.gold*100+se.silver*10+se.bronze-(oe.gold*100+oe.silver*10+oe.bronze)||se.totalPayout-oe.totalPayout||se.totalBets-oe.totalBets),E=(oe,se,le,fe,me)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${se<3?"glb__rank--top3":""}">#${se+1}</span>
                                                <span class="glb__avatar" style="background: ${fe};">${le}</span>
                                                <span class="glb__name">${oe.username}</span>
                                                ${me?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right">
                                                ${oe.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${oe.gold}</span></div>`:""}
                                                ${oe.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${oe.silver}</span></div>`:""}
                                                ${oe.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${oe.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":I=I.filter(oe=>oe.totalTDWon>0),I.sort((oe,se)=>se.totalTDWon-oe.totalTDWon),E=(oe,se,le,fe,me)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${se<3?"glb__rank--top3":""}">#${se+1}</span>
                                                <span class="glb__avatar" style="background: ${fe};">${le}</span>
                                                <span class="glb__name">${oe.username}</span>
                                                ${me?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__earnings">TD$ ${Math.round(oe.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":I.sort((oe,se)=>se.totalPayout-oe.totalPayout||se.totalBets-oe.totalBets),E=(oe,se,le,fe,me)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${se<3?"glb__rank--top3":""}">#${se+1}</span>
                                                <span class="glb__avatar" style="background: ${fe};">${le}</span>
                                                <span class="glb__name">${oe.username}</span>
                                                ${me?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right" style="gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${oe.totalBets} bets</span>
                                                <span class="glb__earnings">TD$ ${oe.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const L=Z.querySelector(".glb__list");if(!L)return;if(I.length===0){const oe=j==="earnings"?"No TD$ won from reconciled bets yet":j==="bysport"?"No players found for this sport":"No leaderboard data available";L.innerHTML=`<div class="leaderboard-empty"><p>${oe}</p></div>`;return}const H=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],W=oe=>H[oe.charCodeAt(0)%H.length];let B="";if(j==="overall"&&I.length>=3){const oe=(se,le,fe,me,ve)=>{const _e=I[se],Ie=_e.user_guid===K;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${le===1?80:le===2?64:56}px; height: ${le===1?80:le===2?64:56}px; background-image: var(${me}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${Ie?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${_e.username}${Ie?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${_e.gold+_e.silver+_e.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${fe}px; background: linear-gradient(180deg, ${ve}33 0%, ${ve}0D 100%); border-top: 3px solid ${ve}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${ve};">${le===1?"1st":le===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};B=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${oe(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${oe(0,1,90,"--badge__gold","#FFD700")}
                                        ${oe(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const F='<div class="info-section__title">Rankings</div>',q='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',ne='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(j==="bysport"&&!Z.querySelector(".glb__note")){const se=document.createElement("div");se.className="glb__note",se.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",se.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const le=Z.querySelector(".glb__sport-filters");le&&le.parentNode.insertBefore(se,le)}let re="";if(j==="earnings"&&I.length>=3){const oe=(se,le,fe,me)=>{const ve=I[se],_e=ve.user_guid===K;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${le===1?80:le===2?64:56}px; height: ${le===1?80:le===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${_e?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${ve.username}${_e?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(ve.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${fe}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${le===1?"1st":le===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};re=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${oe(1,2,70,"#00E676")}
                                        ${oe(0,1,90,"#00E676")}
                                        ${oe(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(j==="overall")L.innerHTML=B+q+F+I.map((oe,se)=>{const le=(oe.username||"?")[0].toUpperCase(),fe=W(oe.username),me=oe.user_guid===K;return E(oe,se,le,fe,me)}).join("");else if(j==="earnings"){const oe='<div class="info-section__title">TD$ Won</div>';L.innerHTML=re+ne+oe+I.map((se,le)=>{const fe=(se.username||"?")[0].toUpperCase(),me=W(se.username),ve=se.user_guid===K;return E(se,le,fe,me,ve)}).join("")}else if(j==="bysport"){let oe="";if(I.length>=3){const le=(fe,me,ve)=>{const _e=I[fe],Ie=_e.user_guid===K,Ve=W(_e.username),vt=(_e.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${Ve}; width: ${me===1?48:38}px; height: ${me===1?48:38}px; font-size: ${me===1?"1rem":"0.8rem"};">${vt}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${Ie?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${_e.username}${Ie?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${_e.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${ve}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${me===1?"1st":me===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};oe=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${le(1,2,70)}
                                            ${le(0,1,90)}
                                            ${le(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const se='<div class="info-section__title">Rankings</div>';L.innerHTML=oe+se+I.map((le,fe)=>{const me=(le.username||"?")[0].toUpperCase(),ve=W(le.username),_e=le.user_guid===K;return E(le,fe,me,ve,_e)}).join("")}requestAnimationFrame(()=>{L.querySelectorAll(".glb__card, .info-row").forEach((oe,se)=>{oe.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",oe.style.animationDelay=`${Math.min(se*50,400)}ms`})})},N=[...ee].map(j=>{const te=Y[j]||j.replace(/^[a-z]+_/,"").toUpperCase(),I=Ge.find(M=>M.key===j),E=I?I.group:"default";return`<button class="glb__sport-chip" data-sport="${j}">
                                <bma-sport-icon sport="${j}" data-sport-group="${E}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${te}</span>
                            </button>`}).join("");Z.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${A.map((j,te)=>`
                                    <button class="glb__tab ${te===0?"glb__tab--active":""}" data-tab="${j.id}">${j.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${N}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const G=document.createElement("style");G.textContent=`
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
                        `,Z.prepend(G),U("overall"),Z.querySelectorAll(".glb__tab").forEach(j=>{j.addEventListener("click",()=>{Z.querySelectorAll(".glb__tab").forEach(E=>E.classList.remove("glb__tab--active")),j.classList.add("glb__tab--active");const te=j.dataset.tab,I=Z.querySelector(".glb__sport-filters");I&&(I.style.display=te==="bysport"?"flex":"none"),U(te,te==="bysport"?$:void 0)})}),Z.querySelectorAll(".glb__sport-chip").forEach(j=>{j.addEventListener("click",()=>{Z.querySelectorAll(".glb__sport-chip").forEach(te=>te.classList.remove("glb__sport-chip--active")),j.classList.add("glb__sport-chip--active"),$=j.dataset.sport,U("bysport",$)})})}catch(O){console.error("[appEvents] Error fetching global leaderboard:",O);const D=document.getElementById("global-leaderboard-container");D&&(D.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>')}}},setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){window._renderTopPlayers&&await window._renderTopPlayers()},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}};class H1 extends HTMLElement{constructor(){super(),this.selectedItem="foot_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count","data-private-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_lobby"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),de.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){Me.theme;const t=Me.isDark,s=[{name:"foot_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.LOBBY"},{name:"foot_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.FOOT.TOURNEYS"},{name:"foot_private",caption:"Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.PRIVATE"},{name:"foot_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_profile",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],a=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,r=o=>{const l=this.selectedItem===o.name;let i="";return o.name==="foot_tourneys"?i=`<span class="nav-badge">${a}</span>`:o.name==="foot_private"&&(i=`<span class="nav-badge">${n}</span>`),`
        <div
          class="nav-item ${l?"nav-selected":"nav-unselected"}"
          data-item="${o.name}"
          role="button"
          tabindex="0"
          aria-label="${o.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${o.iconVar}"></div>
            ${i}
          </div>
          <span class="nav-caption">${o.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${He()}
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
        ${s.map(o=>r(o)).join("")}
      </div>
    `,s.forEach(o=>{const l=this.shadowRoot.querySelector(`[data-item="${o.name}"]`);l&&(l.addEventListener("click",()=>this.handleItemClick(o.name,o.topic)),l.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleItemClick(o.name,o.topic))}))})}}customElements.define("bma-app-foot",H1);const j1=["data-selected-item"],U1={__name:"App",setup(e){const t=ct(),s=Ba(),a=xe(),n=ge(()=>{const c=s.name;return c==="home_route"||c==="top_players_route"}),r=Ne("foot_lobby"),o=c=>c==="my"?"foot_tourneys":c==="private"?"foot_private":"foot_lobby",l=()=>{const c=window.location.hash||"";if(c.startsWith("#/top_players_route"))r.value="foot_leaderboard";else if(c.startsWith("#/home_route")||c==="#/"||!c){const d=document.body.dataset.tournFilter||"lobby";r.value=o(d)}};Xs(()=>s.name,()=>l(),{immediate:!0});let i=null;return lt(()=>{i=de.subscribe("ROUTE.HOME_HYDRATE",()=>l())}),os(()=>{i&&de.unsubscribe(i)}),lt(()=>{setTimeout(()=>{const c=a.appSession?.session_user?.guid,d=a.appSession?.session_user?.authenticated;c&&d&&a.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",c),ar.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",c,a,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((c=null)=>{t.currentRoute.value?.meta?.previewAllowed||(neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${c}`,"primary"),t.push({name:c}))}).setOnState((c=null)=>{c&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=c)}).init({BASE:$e.API_baseURI})},2e3),setTimeout(()=>{ke.bindAppListeners(a)},3e3),t.beforeEach((c,d,u)=>{if(c.name==="splash_route")return vl(Ea.AUTHED),u();if(!c.name)return u(!1);const p=Sg(c.name,c.meta);if(vl(p),p===Ea.DENIED)return u(!1);u()}),(c,d)=>(ue(),pe(qe,null,[st(ut(Pu),null,{default:_o(({Component:u})=>[st(ah,{name:"slide-left"},{default:_o(()=>[(ue(),su(rf(u)))]),_:2},1024)]),_:1}),n.value?(ue(),pe("bma-app-foot",{key:0,"data-selected-item":r.value},null,8,j1)):Oe("",!0)],64))}};class qu{constructor(){this.id="DEFAULT",this.label="Bet Max Tourney",this.description="Place any bets you want across the tournament slate."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:[],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:0,stakeRule:"FREE",stakeMin:1,stakeMax:null,allowPartialSubmit:!0,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!1}}getEffectiveRules(t){const s=this.rules;if(!t?.tags||!Array.isArray(t.tags))return s;const a=t.tags.find(n=>typeof n=="object"&&n!==null&&n.game_rules);return a?.game_rules?{...s,...a.game_rules}:s}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","totalBets"],bonuses:[],penalizeMissing:!1}}_parseBets(t){const s=[];return t.forEach(a=>{const n=a.coreMatches__guid||a.match_guid||"";(a.bet||[]).forEach(o=>{Object.keys(o).forEach(l=>{if(l==="short_title")return;const i=o[l];i&&s.push({matchGuid:n,type:(i.type||"").toUpperCase(),team:l,stake:parseFloat(i.stake||0),payout:parseFloat(i.payout||0),odds:parseFloat(i.odds||0),reconciled:i.reconciled||!1})})})}),s}_getTypeCounts(t){const s={};return t.forEach(a=>{s[a.type]=(s[a.type]||0)+1}),s}_getTotalStakes(t){return parseFloat(t.reduce((s,a)=>s+a.stake,0).toFixed(2))}_typeLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money Line";case"TOTAL":return"Over/Under";default:return t}}_typeShortLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money";case"TOTAL":return"Total";default:return t}}canPlaceBet(t,s,a){const n=this.getEffectiveRules(a),r=this._parseBets(s),o=(t.type||"").toUpperCase();return n.oneBetPerMatchPerType&&r.find(i=>i.matchGuid===t.matchGuid&&i.type===o)?{allowed:!1,reason:`You already have a ${this._typeLabel(o)} bet on this match`}:n.maxBetsPerType>0&&r.filter(i=>i.type===o).length>=n.maxBetsPerType?{allowed:!1,reason:`Maximum ${n.maxBetsPerType} ${this._typeLabel(o)} bets reached`}:n.maxBetsTotal>0&&r.length>=n.maxBetsTotal?{allowed:!1,reason:`Maximum ${n.maxBetsTotal} total bets reached`}:{allowed:!0,reason:null}}validateBetSlip(t,s,a){const n=this.getEffectiveRules(s),r=[],o=[],l=this._parseBets(t),i=this._getTypeCounts(l),c=this._getTotalStakes(l),d=parseFloat(s?.tournament_dollars||0);if(n.requiredBetTypes.forEach(u=>{i[u]||r.push(`You need at least one ${this._typeLabel(u)} bet`)}),n.minBetsTotal>0&&l.length<n.minBetsTotal&&r.push(`Place at least ${n.minBetsTotal} bets`),n.stakeRule==="SPEND_ALL"&&d>0){if(c<d){const u=parseFloat((d-c).toFixed(2));r.push(`You have TD$ ${u.toLocaleString()} left to spend — use your entire balance`)}else if(c>d+.01){const u=parseFloat((c-d).toFixed(2));r.push(`You've exceeded your TD$ balance by ${u.toLocaleString()}`)}}return!n.allowPartialSubmit&&r.length>0,{valid:r.length===0,errors:r,warnings:o}}scoreEntry(t,s){const a=parseFloat(t.total_payout||0);return{score:a,breakdown:{payout:a}}}rankLeaderboard(t,s){return[...t].sort((a,n)=>{const r=this.scoreEntry(a,s).score;return this.scoreEntry(n,s).score-r})}getProgressUI(t,s){const a=this.getEffectiveRules(s),n=a.requiredBetTypes.length>0,r=a.stakeRule==="SPEND_ALL";if(!n&&!r)return{type:"NONE",percent:0,label:"",hints:[],typesStatus:[],complete:!0};const o=this._parseBets(t),l=this._getTypeCounts(o),i=this._getTotalStakes(o),c=parseFloat(s?.tournament_dollars||0),d=c>0?Math.min(100,Math.round(i/c*100)):0,u=a.requiredBetTypes.every(m=>l[m]),p=!r||Math.abs(i-c)<.01,f=a.requiredBetTypes.map(m=>({type:m,label:this._typeShortLabel(m),placed:!!l[m],count:l[m]||0})),g=[],y=a.requiredBetTypes.filter(m=>!l[m]).map(m=>this._typeLabel(m));return y.length>0&&!p?g.push(`Need a ${y.join(", ")} bet · Spend all TD$ ${Math.round(c).toLocaleString()}`):y.length>0?g.push(`Need a ${y.join(", ")} bet`):!p&&i<c&&g.push(`TD$ ${Math.round(c-i).toLocaleString()} left to allocate`),{type:n?"BET_TYPES":"STAKE_PROGRESS",percent:d,label:r?`TD$ ${Math.round(i).toLocaleString()} / ${Math.round(c).toLocaleString()} spent`:`${o.length} bets placed`,typesStatus:f,hints:g,complete:u&&p}}getValidationMessages(t,s,a){return this.getProgressUI(t,s).hints}getBadge(){return null}getRulesHTML(t){return"<p>Place bets on any matches in the tournament. The player with the highest total payout wins.</p>"}getEmptyStateText(){return"Select a match to start betting"}}class Cl extends qu{constructor(){super(),this.id="DEFAULT_FORMAT",this.label="Bet Max Tourney",this.description="Place any bets you want across the tournament slate."}get scoring(){return{method:"SETTLED_PNL",rankBy:["score","pendingPayout","firstBetTime"],bonuses:[],penalizeMissing:!1}}_firstBetTime(t){const s=t?.bets||[];let a=1/0;for(const n of s){const r=n?.status_time||n?.create_time||n?.timestamp;if(!r)continue;const o=new Date(r).getTime();!isNaN(o)&&o<a&&(a=o)}return a}scoreEntry(t,s){const a=parseFloat(t.tournament_dollars??s?.tournament_dollars??0),n=this._parseBets(t.bets||[]);let r=0,o=0,l=0,i=0,c=0;n.forEach(f=>{r+=f.stake,f.reconciled?(o+=f.stake,c+=f.payout):(l+=f.stake,i+=f.payout)});const d=a-r,u=parseFloat((a-o+c).toFixed(2)),p=u;return{score:u,breakdown:{startingTD:parseFloat(a.toFixed(2)),remainingTD:parseFloat(d.toFixed(2)),totalStakes:parseFloat(r.toFixed(2)),committedStakes:parseFloat(o.toFixed(2)),pendingStakes:parseFloat(l.toFixed(2)),balance:parseFloat(p.toFixed(2)),pendingPayout:parseFloat(i.toFixed(2)),settledPayout:parseFloat(c.toFixed(2)),firstBetTime:this._firstBetTime(t)}}}rankLeaderboard(t,s){return[...t].map(a=>({entry:a,...this.scoreEntry(a,s)})).sort((a,n)=>n.score!==a.score?n.score-a.score:n.breakdown.pendingPayout!==a.breakdown.pendingPayout?n.breakdown.pendingPayout-a.breakdown.pendingPayout:a.breakdown.firstBetTime-n.breakdown.firstBetTime).map(a=>a.entry)}}class q1 extends qu{constructor(){super(),this.id="SET_IT_AND_FORGET_IT",this.label="Set It and Forget It",this.description="Build your lineup with one of each bet type across the slate. Spend all your TD$."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:["SPREAD","MONEY","TOTAL"],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:3,stakeRule:"SPEND_ALL",stakeMin:1,stakeMax:null,allowPartialSubmit:!1,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!0}}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","betCount","timestamp"],bonuses:[],penalizeMissing:!0}}getBadge(){return{label:"Set & Forget",color:"ghost"}}getEmptyStateText(){return"Build your lineup — place one of each bet type and spend all your TD$"}getRulesHTML(t){const s=t?.tournament_dollars||0;return`
            <div style="padding: 12px 0;">
                <p style="margin: 0 0 8px; font-weight: 600; color: rgba(255,255,255,0.85);">Set It and Forget It Rules:</p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.8;">
                    <li>Place at least one <strong>Spread</strong>, one <strong>Money Line</strong>, and one <strong>Over/Under</strong> bet</li>
                    <li>You must spend your entire <strong>TD$ ${Number(s).toLocaleString()}</strong> balance across all bets</li>
                    <li>One bet per match per bet type (no duplicates)</li>
                    <li>Highest total payout wins the tournament</li>
                </ul>
            </div>`}}var Ya={exports:{}},ao={},Vt={},Os={},no={},ro={},oo={},Ol;function nr(){return Ol||(Ol=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class s extends t{constructor(h){if(super(),!e.IDENTIFIER.test(h))throw new Error("CodeGen: name must be a valid identifier");this.str=h}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=s;class a extends t{constructor(h){super(),this._items=typeof h=="string"?[h]:h}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const h=this._items[0];return h===""||h==='""'}get str(){var h;return(h=this._str)!==null&&h!==void 0?h:this._str=this._items.reduce((b,v)=>`${b}${v}`,"")}get names(){var h;return(h=this._names)!==null&&h!==void 0?h:this._names=this._items.reduce((b,v)=>(v instanceof s&&(b[v.str]=(b[v.str]||0)+1),b),{})}}e._Code=a,e.nil=new a("");function n(m,...h){const b=[m[0]];let v=0;for(;v<h.length;)l(b,h[v]),b.push(m[++v]);return new a(b)}e._=n;const r=new a("+");function o(m,...h){const b=[f(m[0])];let v=0;for(;v<h.length;)b.push(r),l(b,h[v]),b.push(r,f(m[++v]));return i(b),new a(b)}e.str=o;function l(m,h){h instanceof a?m.push(...h._items):h instanceof s?m.push(h):m.push(u(h))}e.addCodeArg=l;function i(m){let h=1;for(;h<m.length-1;){if(m[h]===r){const b=c(m[h-1],m[h+1]);if(b!==void 0){m.splice(h-1,3,b);continue}m[h++]="+"}h++}}function c(m,h){if(h==='""')return m;if(m==='""')return h;if(typeof m=="string")return h instanceof s||m[m.length-1]!=='"'?void 0:typeof h!="string"?`${m.slice(0,-1)}${h}"`:h[0]==='"'?m.slice(0,-1)+h.slice(1):void 0;if(typeof h=="string"&&h[0]==='"'&&!(m instanceof s))return`"${m}${h.slice(1)}`}function d(m,h){return h.emptyStr()?m:m.emptyStr()?h:o`${m}${h}`}e.strConcat=d;function u(m){return typeof m=="number"||typeof m=="boolean"||m===null?m:f(Array.isArray(m)?m.join(","):m)}function p(m){return new a(f(m))}e.stringify=p;function f(m){return JSON.stringify(m).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=f;function g(m){return typeof m=="string"&&e.IDENTIFIER.test(m)?new a(`.${m}`):n`[${m}]`}e.getProperty=g;function _(m){if(typeof m=="string"&&e.IDENTIFIER.test(m))return new a(`${m}`);throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`)}e.getEsmExportName=_;function y(m){return new a(m.toString())}e.regexpCode=y})(oo)),oo}var io={},$l;function Ml(){return $l||($l=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=nr();class s extends Error{constructor(c){super(`CodeGen: "code" for ${c} not defined`),this.value=c.value}}var a;(function(i){i[i.Started=0]="Started",i[i.Completed=1]="Completed"})(a||(e.UsedValueState=a={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class n{constructor({prefixes:c,parent:d}={}){this._names={},this._prefixes=c,this._parent=d}toName(c){return c instanceof t.Name?c:this.name(c)}name(c){return new t.Name(this._newName(c))}_newName(c){const d=this._names[c]||this._nameGroup(c);return`${c}${d.index++}`}_nameGroup(c){var d,u;if(!((u=(d=this._parent)===null||d===void 0?void 0:d._prefixes)===null||u===void 0)&&u.has(c)||this._prefixes&&!this._prefixes.has(c))throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);return this._names[c]={prefix:c,index:0}}}e.Scope=n;class r extends t.Name{constructor(c,d){super(d),this.prefix=c}setValue(c,{property:d,itemIndex:u}){this.value=c,this.scopePath=(0,t._)`.${new t.Name(d)}[${u}]`}}e.ValueScopeName=r;const o=(0,t._)`\n`;class l extends n{constructor(c){super(c),this._values={},this._scope=c.scope,this.opts={...c,_n:c.lines?o:t.nil}}get(){return this._scope}name(c){return new r(c,this._newName(c))}value(c,d){var u;if(d.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const p=this.toName(c),{prefix:f}=p,g=(u=d.key)!==null&&u!==void 0?u:d.ref;let _=this._values[f];if(_){const h=_.get(g);if(h)return h}else _=this._values[f]=new Map;_.set(g,p);const y=this._scope[f]||(this._scope[f]=[]),m=y.length;return y[m]=d.ref,p.setValue(d,{property:f,itemIndex:m}),p}getValue(c,d){const u=this._values[c];if(u)return u.get(d)}scopeRefs(c,d=this._values){return this._reduceValues(d,u=>{if(u.scopePath===void 0)throw new Error(`CodeGen: name "${u}" has no value`);return(0,t._)`${c}${u.scopePath}`})}scopeCode(c=this._values,d,u){return this._reduceValues(c,p=>{if(p.value===void 0)throw new Error(`CodeGen: name "${p}" has no value`);return p.value.code},d,u)}_reduceValues(c,d,u={},p){let f=t.nil;for(const g in c){const _=c[g];if(!_)continue;const y=u[g]=u[g]||new Map;_.forEach(m=>{if(y.has(m))return;y.set(m,a.Started);let h=d(m);if(h){const b=this.opts.es5?e.varKinds.var:e.varKinds.const;f=(0,t._)`${f}${b} ${m} = ${h};${this.opts._n}`}else if(h=p?.(m))f=(0,t._)`${f}${h}${this.opts._n}`;else throw new s(m);y.set(m,a.Completed)})}return f}}e.ValueScope=l})(io)),io}var Ll;function Te(){return Ll||(Ll=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=nr(),s=Ml();var a=nr();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return a._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return a.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return a.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return a.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return a.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return a.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return a.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return a.Name}});var n=Ml();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return n.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return n.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return n.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return n.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class r{optimizeNodes(){return this}optimizeNames(A,$){return this}}class o extends r{constructor(A,$,U){super(),this.varKind=A,this.name=$,this.rhs=U}render({es5:A,_n:$}){const U=A?s.varKinds.var:this.varKind,N=this.rhs===void 0?"":` = ${this.rhs}`;return`${U} ${this.name}${N};`+$}optimizeNames(A,$){if(A[this.name.str])return this.rhs&&(this.rhs=V(this.rhs,A,$)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class l extends r{constructor(A,$,U){super(),this.lhs=A,this.rhs=$,this.sideEffects=U}render({_n:A}){return`${this.lhs} = ${this.rhs};`+A}optimizeNames(A,$){if(!(this.lhs instanceof t.Name&&!A[this.lhs.str]&&!this.sideEffects))return this.rhs=V(this.rhs,A,$),this}get names(){const A=this.lhs instanceof t.Name?{}:{...this.lhs.names};return D(A,this.rhs)}}class i extends l{constructor(A,$,U,N){super(A,U,N),this.op=$}render({_n:A}){return`${this.lhs} ${this.op}= ${this.rhs};`+A}}class c extends r{constructor(A){super(),this.label=A,this.names={}}render({_n:A}){return`${this.label}:`+A}}class d extends r{constructor(A){super(),this.label=A,this.names={}}render({_n:A}){return`break${this.label?` ${this.label}`:""};`+A}}class u extends r{constructor(A){super(),this.error=A}render({_n:A}){return`throw ${this.error};`+A}get names(){return this.error.names}}class p extends r{constructor(A){super(),this.code=A}render({_n:A}){return`${this.code};`+A}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(A,$){return this.code=V(this.code,A,$),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class f extends r{constructor(A=[]){super(),this.nodes=A}render(A){return this.nodes.reduce(($,U)=>$+U.render(A),"")}optimizeNodes(){const{nodes:A}=this;let $=A.length;for(;$--;){const U=A[$].optimizeNodes();Array.isArray(U)?A.splice($,1,...U):U?A[$]=U:A.splice($,1)}return A.length>0?this:void 0}optimizeNames(A,$){const{nodes:U}=this;let N=U.length;for(;N--;){const G=U[N];G.optimizeNames(A,$)||(Q(A,G.names),U.splice(N,1))}return U.length>0?this:void 0}get names(){return this.nodes.reduce((A,$)=>O(A,$.names),{})}}class g extends f{render(A){return"{"+A._n+super.render(A)+"}"+A._n}}class _ extends f{}class y extends g{}y.kind="else";class m extends g{constructor(A,$){super($),this.condition=A}render(A){let $=`if(${this.condition})`+super.render(A);return this.else&&($+="else "+this.else.render(A)),$}optimizeNodes(){super.optimizeNodes();const A=this.condition;if(A===!0)return this.nodes;let $=this.else;if($){const U=$.optimizeNodes();$=this.else=Array.isArray(U)?new y(U):U}if($)return A===!1?$ instanceof m?$:$.nodes:this.nodes.length?this:new m(X(A),$ instanceof m?[$]:$.nodes);if(!(A===!1||!this.nodes.length))return this}optimizeNames(A,$){var U;if(this.else=(U=this.else)===null||U===void 0?void 0:U.optimizeNames(A,$),!!(super.optimizeNames(A,$)||this.else))return this.condition=V(this.condition,A,$),this}get names(){const A=super.names;return D(A,this.condition),this.else&&O(A,this.else.names),A}}m.kind="if";class h extends g{}h.kind="for";class b extends h{constructor(A){super(),this.iteration=A}render(A){return`for(${this.iteration})`+super.render(A)}optimizeNames(A,$){if(super.optimizeNames(A,$))return this.iteration=V(this.iteration,A,$),this}get names(){return O(super.names,this.iteration.names)}}class v extends h{constructor(A,$,U,N){super(),this.varKind=A,this.name=$,this.from=U,this.to=N}render(A){const $=A.es5?s.varKinds.var:this.varKind,{name:U,from:N,to:G}=this;return`for(${$} ${U}=${N}; ${U}<${G}; ${U}++)`+super.render(A)}get names(){const A=D(super.names,this.from);return D(A,this.to)}}class w extends h{constructor(A,$,U,N){super(),this.loop=A,this.varKind=$,this.name=U,this.iterable=N}render(A){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(A)}optimizeNames(A,$){if(super.optimizeNames(A,$))return this.iterable=V(this.iterable,A,$),this}get names(){return O(super.names,this.iterable.names)}}class x extends g{constructor(A,$,U){super(),this.name=A,this.args=$,this.async=U}render(A){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(A)}}x.kind="func";class P extends f{render(A){return"return "+super.render(A)}}P.kind="return";class R extends g{render(A){let $="try"+super.render(A);return this.catch&&($+=this.catch.render(A)),this.finally&&($+=this.finally.render(A)),$}optimizeNodes(){var A,$;return super.optimizeNodes(),(A=this.catch)===null||A===void 0||A.optimizeNodes(),($=this.finally)===null||$===void 0||$.optimizeNodes(),this}optimizeNames(A,$){var U,N;return super.optimizeNames(A,$),(U=this.catch)===null||U===void 0||U.optimizeNames(A,$),(N=this.finally)===null||N===void 0||N.optimizeNames(A,$),this}get names(){const A=super.names;return this.catch&&O(A,this.catch.names),this.finally&&O(A,this.finally.names),A}}class S extends g{constructor(A){super(),this.error=A}render(A){return`catch(${this.error})`+super.render(A)}}S.kind="catch";class k extends g{render(A){return"finally"+super.render(A)}}k.kind="finally";class T{constructor(A,$={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...$,_n:$.lines?`
`:""},this._extScope=A,this._scope=new s.Scope({parent:A}),this._nodes=[new _]}toString(){return this._root.render(this.opts)}name(A){return this._scope.name(A)}scopeName(A){return this._extScope.name(A)}scopeValue(A,$){const U=this._extScope.value(A,$);return(this._values[U.prefix]||(this._values[U.prefix]=new Set)).add(U),U}getScopeValue(A,$){return this._extScope.getValue(A,$)}scopeRefs(A){return this._extScope.scopeRefs(A,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(A,$,U,N){const G=this._scope.toName($);return U!==void 0&&N&&(this._constants[G.str]=U),this._leafNode(new o(A,G,U)),G}const(A,$,U){return this._def(s.varKinds.const,A,$,U)}let(A,$,U){return this._def(s.varKinds.let,A,$,U)}var(A,$,U){return this._def(s.varKinds.var,A,$,U)}assign(A,$,U){return this._leafNode(new l(A,$,U))}add(A,$){return this._leafNode(new i(A,e.operators.ADD,$))}code(A){return typeof A=="function"?A():A!==t.nil&&this._leafNode(new p(A)),this}object(...A){const $=["{"];for(const[U,N]of A)$.length>1&&$.push(","),$.push(U),(U!==N||this.opts.es5)&&($.push(":"),(0,t.addCodeArg)($,N));return $.push("}"),new t._Code($)}if(A,$,U){if(this._blockNode(new m(A)),$&&U)this.code($).else().code(U).endIf();else if($)this.code($).endIf();else if(U)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(A){return this._elseNode(new m(A))}else(){return this._elseNode(new y)}endIf(){return this._endBlockNode(m,y)}_for(A,$){return this._blockNode(A),$&&this.code($).endFor(),this}for(A,$){return this._for(new b(A),$)}forRange(A,$,U,N,G=this.opts.es5?s.varKinds.var:s.varKinds.let){const j=this._scope.toName(A);return this._for(new v(G,j,$,U),()=>N(j))}forOf(A,$,U,N=s.varKinds.const){const G=this._scope.toName(A);if(this.opts.es5){const j=$ instanceof t.Name?$:this.var("_arr",$);return this.forRange("_i",0,(0,t._)`${j}.length`,te=>{this.var(G,(0,t._)`${j}[${te}]`),U(G)})}return this._for(new w("of",N,G,$),()=>U(G))}forIn(A,$,U,N=this.opts.es5?s.varKinds.var:s.varKinds.const){if(this.opts.ownProperties)return this.forOf(A,(0,t._)`Object.keys(${$})`,U);const G=this._scope.toName(A);return this._for(new w("in",N,G,$),()=>U(G))}endFor(){return this._endBlockNode(h)}label(A){return this._leafNode(new c(A))}break(A){return this._leafNode(new d(A))}return(A){const $=new P;if(this._blockNode($),this.code(A),$.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(P)}try(A,$,U){if(!$&&!U)throw new Error('CodeGen: "try" without "catch" and "finally"');const N=new R;if(this._blockNode(N),this.code(A),$){const G=this.name("e");this._currNode=N.catch=new S(G),$(G)}return U&&(this._currNode=N.finally=new k,this.code(U)),this._endBlockNode(S,k)}throw(A){return this._leafNode(new u(A))}block(A,$){return this._blockStarts.push(this._nodes.length),A&&this.code(A).endBlock($),this}endBlock(A){const $=this._blockStarts.pop();if($===void 0)throw new Error("CodeGen: not in self-balancing block");const U=this._nodes.length-$;if(U<0||A!==void 0&&U!==A)throw new Error(`CodeGen: wrong number of nodes: ${U} vs ${A} expected`);return this._nodes.length=$,this}func(A,$=t.nil,U,N){return this._blockNode(new x(A,$,U)),N&&this.code(N).endFunc(),this}endFunc(){return this._endBlockNode(x)}optimize(A=1){for(;A-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(A){return this._currNode.nodes.push(A),this}_blockNode(A){this._currNode.nodes.push(A),this._nodes.push(A)}_endBlockNode(A,$){const U=this._currNode;if(U instanceof A||$&&U instanceof $)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${$?`${A.kind}/${$.kind}`:A.kind}"`)}_elseNode(A){const $=this._currNode;if(!($ instanceof m))throw new Error('CodeGen: "else" without "if"');return this._currNode=$.else=A,this}get _root(){return this._nodes[0]}get _currNode(){const A=this._nodes;return A[A.length-1]}set _currNode(A){const $=this._nodes;$[$.length-1]=A}}e.CodeGen=T;function O(Y,A){for(const $ in A)Y[$]=(Y[$]||0)+(A[$]||0);return Y}function D(Y,A){return A instanceof t._CodeOrName?O(Y,A.names):Y}function V(Y,A,$){if(Y instanceof t.Name)return U(Y);if(!N(Y))return Y;return new t._Code(Y._items.reduce((G,j)=>(j instanceof t.Name&&(j=U(j)),j instanceof t._Code?G.push(...j._items):G.push(j),G),[]));function U(G){const j=$[G.str];return j===void 0||A[G.str]!==1?G:(delete A[G.str],j)}function N(G){return G instanceof t._Code&&G._items.some(j=>j instanceof t.Name&&A[j.str]===1&&$[j.str]!==void 0)}}function Q(Y,A){for(const $ in A)Y[$]=(Y[$]||0)-(A[$]||0)}function X(Y){return typeof Y=="boolean"||typeof Y=="number"||Y===null?!Y:(0,t._)`!${ee(Y)}`}e.not=X;const Z=z(e.operators.AND);function K(...Y){return Y.reduce(Z)}e.and=K;const ie=z(e.operators.OR);function J(...Y){return Y.reduce(ie)}e.or=J;function z(Y){return(A,$)=>A===t.nil?$:$===t.nil?A:(0,t._)`${ee(A)} ${Y} ${ee($)}`}function ee(Y){return Y instanceof t.Name?Y:(0,t._)`(${Y})`}})(ro)),ro}var we={},Rl;function Ee(){if(Rl)return we;Rl=1,Object.defineProperty(we,"__esModule",{value:!0}),we.checkStrictMode=we.getErrorPath=we.Type=we.useFunc=we.setEvaluated=we.evaluatedPropsToName=we.mergeEvaluated=we.eachItem=we.unescapeJsonPointer=we.escapeJsonPointer=we.escapeFragment=we.unescapeFragment=we.schemaRefOrVal=we.schemaHasRulesButRef=we.schemaHasRules=we.checkUnknownRules=we.alwaysValidSchema=we.toHash=void 0;const e=Te(),t=nr();function s(w){const x={};for(const P of w)x[P]=!0;return x}we.toHash=s;function a(w,x){return typeof x=="boolean"?x:Object.keys(x).length===0?!0:(n(w,x),!r(x,w.self.RULES.all))}we.alwaysValidSchema=a;function n(w,x=w.schema){const{opts:P,self:R}=w;if(!P.strictSchema||typeof x=="boolean")return;const S=R.RULES.keywords;for(const k in x)S[k]||v(w,`unknown keyword: "${k}"`)}we.checkUnknownRules=n;function r(w,x){if(typeof w=="boolean")return!w;for(const P in w)if(x[P])return!0;return!1}we.schemaHasRules=r;function o(w,x){if(typeof w=="boolean")return!w;for(const P in w)if(P!=="$ref"&&x.all[P])return!0;return!1}we.schemaHasRulesButRef=o;function l({topSchemaRef:w,schemaPath:x},P,R,S){if(!S){if(typeof P=="number"||typeof P=="boolean")return P;if(typeof P=="string")return(0,e._)`${P}`}return(0,e._)`${w}${x}${(0,e.getProperty)(R)}`}we.schemaRefOrVal=l;function i(w){return u(decodeURIComponent(w))}we.unescapeFragment=i;function c(w){return encodeURIComponent(d(w))}we.escapeFragment=c;function d(w){return typeof w=="number"?`${w}`:w.replace(/~/g,"~0").replace(/\//g,"~1")}we.escapeJsonPointer=d;function u(w){return w.replace(/~1/g,"/").replace(/~0/g,"~")}we.unescapeJsonPointer=u;function p(w,x){if(Array.isArray(w))for(const P of w)x(P);else x(w)}we.eachItem=p;function f({mergeNames:w,mergeToName:x,mergeValues:P,resultToName:R}){return(S,k,T,O)=>{const D=T===void 0?k:T instanceof e.Name?(k instanceof e.Name?w(S,k,T):x(S,k,T),T):k instanceof e.Name?(x(S,T,k),k):P(k,T);return O===e.Name&&!(D instanceof e.Name)?R(S,D):D}}we.mergeEvaluated={props:f({mergeNames:(w,x,P)=>w.if((0,e._)`${P} !== true && ${x} !== undefined`,()=>{w.if((0,e._)`${x} === true`,()=>w.assign(P,!0),()=>w.assign(P,(0,e._)`${P} || {}`).code((0,e._)`Object.assign(${P}, ${x})`))}),mergeToName:(w,x,P)=>w.if((0,e._)`${P} !== true`,()=>{x===!0?w.assign(P,!0):(w.assign(P,(0,e._)`${P} || {}`),_(w,P,x))}),mergeValues:(w,x)=>w===!0?!0:{...w,...x},resultToName:g}),items:f({mergeNames:(w,x,P)=>w.if((0,e._)`${P} !== true && ${x} !== undefined`,()=>w.assign(P,(0,e._)`${x} === true ? true : ${P} > ${x} ? ${P} : ${x}`)),mergeToName:(w,x,P)=>w.if((0,e._)`${P} !== true`,()=>w.assign(P,x===!0?!0:(0,e._)`${P} > ${x} ? ${P} : ${x}`)),mergeValues:(w,x)=>w===!0?!0:Math.max(w,x),resultToName:(w,x)=>w.var("items",x)})};function g(w,x){if(x===!0)return w.var("props",!0);const P=w.var("props",(0,e._)`{}`);return x!==void 0&&_(w,P,x),P}we.evaluatedPropsToName=g;function _(w,x,P){Object.keys(P).forEach(R=>w.assign((0,e._)`${x}${(0,e.getProperty)(R)}`,!0))}we.setEvaluated=_;const y={};function m(w,x){return w.scopeValue("func",{ref:x,code:y[x.code]||(y[x.code]=new t._Code(x.code))})}we.useFunc=m;var h;(function(w){w[w.Num=0]="Num",w[w.Str=1]="Str"})(h||(we.Type=h={}));function b(w,x,P){if(w instanceof e.Name){const R=x===h.Num;return P?R?(0,e._)`"[" + ${w} + "]"`:(0,e._)`"['" + ${w} + "']"`:R?(0,e._)`"/" + ${w}`:(0,e._)`"/" + ${w}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return P?(0,e.getProperty)(w).toString():"/"+d(w)}we.getErrorPath=b;function v(w,x,P=w.opts.strictSchema){if(P){if(x=`strict mode: ${x}`,P===!0)throw new Error(x);w.self.logger.warn(x)}}return we.checkStrictMode=v,we}var Wa={},Dl;function Es(){if(Dl)return Wa;Dl=1,Object.defineProperty(Wa,"__esModule",{value:!0});const e=Te(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return Wa.default=t,Wa}var Nl;function Sr(){return Nl||(Nl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=Te(),s=Ee(),a=Es();e.keywordError={message:({keyword:y})=>(0,t.str)`must pass "${y}" keyword validation`},e.keyword$DataError={message:({keyword:y,schemaType:m})=>m?(0,t.str)`"${y}" keyword must be ${m} ($data)`:(0,t.str)`"${y}" keyword is invalid ($data)`};function n(y,m=e.keywordError,h,b){const{it:v}=y,{gen:w,compositeRule:x,allErrors:P}=v,R=u(y,m,h);b??(x||P)?i(w,R):c(v,(0,t._)`[${R}]`)}e.reportError=n;function r(y,m=e.keywordError,h){const{it:b}=y,{gen:v,compositeRule:w,allErrors:x}=b,P=u(y,m,h);i(v,P),w||x||c(b,a.default.vErrors)}e.reportExtraError=r;function o(y,m){y.assign(a.default.errors,m),y.if((0,t._)`${a.default.vErrors} !== null`,()=>y.if(m,()=>y.assign((0,t._)`${a.default.vErrors}.length`,m),()=>y.assign(a.default.vErrors,null)))}e.resetErrorsCount=o;function l({gen:y,keyword:m,schemaValue:h,data:b,errsCount:v,it:w}){if(v===void 0)throw new Error("ajv implementation error");const x=y.name("err");y.forRange("i",v,a.default.errors,P=>{y.const(x,(0,t._)`${a.default.vErrors}[${P}]`),y.if((0,t._)`${x}.instancePath === undefined`,()=>y.assign((0,t._)`${x}.instancePath`,(0,t.strConcat)(a.default.instancePath,w.errorPath))),y.assign((0,t._)`${x}.schemaPath`,(0,t.str)`${w.errSchemaPath}/${m}`),w.opts.verbose&&(y.assign((0,t._)`${x}.schema`,h),y.assign((0,t._)`${x}.data`,b))})}e.extendErrors=l;function i(y,m){const h=y.const("err",m);y.if((0,t._)`${a.default.vErrors} === null`,()=>y.assign(a.default.vErrors,(0,t._)`[${h}]`),(0,t._)`${a.default.vErrors}.push(${h})`),y.code((0,t._)`${a.default.errors}++`)}function c(y,m){const{gen:h,validateName:b,schemaEnv:v}=y;v.$async?h.throw((0,t._)`new ${y.ValidationError}(${m})`):(h.assign((0,t._)`${b}.errors`,m),h.return(!1))}const d={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function u(y,m,h){const{createErrors:b}=y.it;return b===!1?(0,t._)`{}`:p(y,m,h)}function p(y,m,h={}){const{gen:b,it:v}=y,w=[f(v,h),g(y,h)];return _(y,m,w),b.object(...w)}function f({errorPath:y},{instancePath:m}){const h=m?(0,t.str)`${y}${(0,s.getErrorPath)(m,s.Type.Str)}`:y;return[a.default.instancePath,(0,t.strConcat)(a.default.instancePath,h)]}function g({keyword:y,it:{errSchemaPath:m}},{schemaPath:h,parentSchema:b}){let v=b?m:(0,t.str)`${m}/${y}`;return h&&(v=(0,t.str)`${v}${(0,s.getErrorPath)(h,s.Type.Str)}`),[d.schemaPath,v]}function _(y,{params:m,message:h},b){const{keyword:v,data:w,schemaValue:x,it:P}=y,{opts:R,propertyName:S,topSchemaRef:k,schemaPath:T}=P;b.push([d.keyword,v],[d.params,typeof m=="function"?m(y):m||(0,t._)`{}`]),R.messages&&b.push([d.message,typeof h=="function"?h(y):h]),R.verbose&&b.push([d.schema,x],[d.parentSchema,(0,t._)`${k}${T}`],[a.default.data,w]),S&&b.push([d.propertyName,S])}})(no)),no}var Il;function V1(){if(Il)return Os;Il=1,Object.defineProperty(Os,"__esModule",{value:!0}),Os.boolOrEmptySchema=Os.topBoolOrEmptySchema=void 0;const e=Sr(),t=Te(),s=Es(),a={message:"boolean schema is false"};function n(l){const{gen:i,schema:c,validateName:d}=l;c===!1?o(l,!1):typeof c=="object"&&c.$async===!0?i.return(s.default.data):(i.assign((0,t._)`${d}.errors`,null),i.return(!0))}Os.topBoolOrEmptySchema=n;function r(l,i){const{gen:c,schema:d}=l;d===!1?(c.var(i,!1),o(l)):c.var(i,!0)}Os.boolOrEmptySchema=r;function o(l,i){const{gen:c,data:d}=l,u={gen:c,keyword:"false schema",data:d,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:l};(0,e.reportError)(u,a,void 0,i)}return Os}var Ye={},$s={},Bl;function Vu(){if(Bl)return $s;Bl=1,Object.defineProperty($s,"__esModule",{value:!0}),$s.getRules=$s.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function s(n){return typeof n=="string"&&t.has(n)}$s.isJSONType=s;function a(){const n={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...n,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},n.number,n.string,n.array,n.object],post:{rules:[]},all:{},keywords:{}}}return $s.getRules=a,$s}var Gt={},Fl;function Gu(){if(Fl)return Gt;Fl=1,Object.defineProperty(Gt,"__esModule",{value:!0}),Gt.shouldUseRule=Gt.shouldUseGroup=Gt.schemaHasRulesForType=void 0;function e({schema:a,self:n},r){const o=n.RULES.types[r];return o&&o!==!0&&t(a,o)}Gt.schemaHasRulesForType=e;function t(a,n){return n.rules.some(r=>s(a,r))}Gt.shouldUseGroup=t;function s(a,n){var r;return a[n.keyword]!==void 0||((r=n.definition.implements)===null||r===void 0?void 0:r.some(o=>a[o]!==void 0))}return Gt.shouldUseRule=s,Gt}var zl;function rr(){if(zl)return Ye;zl=1,Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.reportTypeError=Ye.checkDataTypes=Ye.checkDataType=Ye.coerceAndCheckDataType=Ye.getJSONTypes=Ye.getSchemaTypes=Ye.DataType=void 0;const e=Vu(),t=Gu(),s=Sr(),a=Te(),n=Ee();var r;(function(h){h[h.Correct=0]="Correct",h[h.Wrong=1]="Wrong"})(r||(Ye.DataType=r={}));function o(h){const b=l(h.type);if(b.includes("null")){if(h.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!b.length&&h.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');h.nullable===!0&&b.push("null")}return b}Ye.getSchemaTypes=o;function l(h){const b=Array.isArray(h)?h:h?[h]:[];if(b.every(e.isJSONType))return b;throw new Error("type must be JSONType or JSONType[]: "+b.join(","))}Ye.getJSONTypes=l;function i(h,b){const{gen:v,data:w,opts:x}=h,P=d(b,x.coerceTypes),R=b.length>0&&!(P.length===0&&b.length===1&&(0,t.schemaHasRulesForType)(h,b[0]));if(R){const S=g(b,w,x.strictNumbers,r.Wrong);v.if(S,()=>{P.length?u(h,b,P):y(h)})}return R}Ye.coerceAndCheckDataType=i;const c=new Set(["string","number","integer","boolean","null"]);function d(h,b){return b?h.filter(v=>c.has(v)||b==="array"&&v==="array"):[]}function u(h,b,v){const{gen:w,data:x,opts:P}=h,R=w.let("dataType",(0,a._)`typeof ${x}`),S=w.let("coerced",(0,a._)`undefined`);P.coerceTypes==="array"&&w.if((0,a._)`${R} == 'object' && Array.isArray(${x}) && ${x}.length == 1`,()=>w.assign(x,(0,a._)`${x}[0]`).assign(R,(0,a._)`typeof ${x}`).if(g(b,x,P.strictNumbers),()=>w.assign(S,x))),w.if((0,a._)`${S} !== undefined`);for(const T of v)(c.has(T)||T==="array"&&P.coerceTypes==="array")&&k(T);w.else(),y(h),w.endIf(),w.if((0,a._)`${S} !== undefined`,()=>{w.assign(x,S),p(h,S)});function k(T){switch(T){case"string":w.elseIf((0,a._)`${R} == "number" || ${R} == "boolean"`).assign(S,(0,a._)`"" + ${x}`).elseIf((0,a._)`${x} === null`).assign(S,(0,a._)`""`);return;case"number":w.elseIf((0,a._)`${R} == "boolean" || ${x} === null
              || (${R} == "string" && ${x} && ${x} == +${x})`).assign(S,(0,a._)`+${x}`);return;case"integer":w.elseIf((0,a._)`${R} === "boolean" || ${x} === null
              || (${R} === "string" && ${x} && ${x} == +${x} && !(${x} % 1))`).assign(S,(0,a._)`+${x}`);return;case"boolean":w.elseIf((0,a._)`${x} === "false" || ${x} === 0 || ${x} === null`).assign(S,!1).elseIf((0,a._)`${x} === "true" || ${x} === 1`).assign(S,!0);return;case"null":w.elseIf((0,a._)`${x} === "" || ${x} === 0 || ${x} === false`),w.assign(S,null);return;case"array":w.elseIf((0,a._)`${R} === "string" || ${R} === "number"
              || ${R} === "boolean" || ${x} === null`).assign(S,(0,a._)`[${x}]`)}}}function p({gen:h,parentData:b,parentDataProperty:v},w){h.if((0,a._)`${b} !== undefined`,()=>h.assign((0,a._)`${b}[${v}]`,w))}function f(h,b,v,w=r.Correct){const x=w===r.Correct?a.operators.EQ:a.operators.NEQ;let P;switch(h){case"null":return(0,a._)`${b} ${x} null`;case"array":P=(0,a._)`Array.isArray(${b})`;break;case"object":P=(0,a._)`${b} && typeof ${b} == "object" && !Array.isArray(${b})`;break;case"integer":P=R((0,a._)`!(${b} % 1) && !isNaN(${b})`);break;case"number":P=R();break;default:return(0,a._)`typeof ${b} ${x} ${h}`}return w===r.Correct?P:(0,a.not)(P);function R(S=a.nil){return(0,a.and)((0,a._)`typeof ${b} == "number"`,S,v?(0,a._)`isFinite(${b})`:a.nil)}}Ye.checkDataType=f;function g(h,b,v,w){if(h.length===1)return f(h[0],b,v,w);let x;const P=(0,n.toHash)(h);if(P.array&&P.object){const R=(0,a._)`typeof ${b} != "object"`;x=P.null?R:(0,a._)`!${b} || ${R}`,delete P.null,delete P.array,delete P.object}else x=a.nil;P.number&&delete P.integer;for(const R in P)x=(0,a.and)(x,f(R,b,v,w));return x}Ye.checkDataTypes=g;const _={message:({schema:h})=>`must be ${h}`,params:({schema:h,schemaValue:b})=>typeof h=="string"?(0,a._)`{type: ${h}}`:(0,a._)`{type: ${b}}`};function y(h){const b=m(h);(0,s.reportError)(b,_)}Ye.reportTypeError=y;function m(h){const{gen:b,data:v,schema:w}=h,x=(0,n.schemaRefOrVal)(h,w,"type");return{gen:b,keyword:"type",data:v,schema:w.type,schemaCode:x,schemaValue:x,parentSchema:w,params:{},it:h}}return Ye}var ua={},Hl;function G1(){if(Hl)return ua;Hl=1,Object.defineProperty(ua,"__esModule",{value:!0}),ua.assignDefaults=void 0;const e=Te(),t=Ee();function s(n,r){const{properties:o,items:l}=n.schema;if(r==="object"&&o)for(const i in o)a(n,i,o[i].default);else r==="array"&&Array.isArray(l)&&l.forEach((i,c)=>a(n,c,i.default))}ua.assignDefaults=s;function a(n,r,o){const{gen:l,compositeRule:i,data:c,opts:d}=n;if(o===void 0)return;const u=(0,e._)`${c}${(0,e.getProperty)(r)}`;if(i){(0,t.checkStrictMode)(n,`default is ignored for: ${u}`);return}let p=(0,e._)`${u} === undefined`;d.useDefaults==="empty"&&(p=(0,e._)`${p} || ${u} === null || ${u} === ""`),l.if(p,(0,e._)`${u} = ${(0,e.stringify)(o)}`)}return ua}var kt={},Ce={},jl;function Ot(){if(jl)return Ce;jl=1,Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.validateUnion=Ce.validateArray=Ce.usePattern=Ce.callValidateCode=Ce.schemaProperties=Ce.allSchemaProperties=Ce.noPropertyInData=Ce.propertyInData=Ce.isOwnProperty=Ce.hasPropFunc=Ce.reportMissingProp=Ce.checkMissingProp=Ce.checkReportMissingProp=void 0;const e=Te(),t=Ee(),s=Es(),a=Ee();function n(h,b){const{gen:v,data:w,it:x}=h;v.if(d(v,w,b,x.opts.ownProperties),()=>{h.setParams({missingProperty:(0,e._)`${b}`},!0),h.error()})}Ce.checkReportMissingProp=n;function r({gen:h,data:b,it:{opts:v}},w,x){return(0,e.or)(...w.map(P=>(0,e.and)(d(h,b,P,v.ownProperties),(0,e._)`${x} = ${P}`)))}Ce.checkMissingProp=r;function o(h,b){h.setParams({missingProperty:b},!0),h.error()}Ce.reportMissingProp=o;function l(h){return h.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}Ce.hasPropFunc=l;function i(h,b,v){return(0,e._)`${l(h)}.call(${b}, ${v})`}Ce.isOwnProperty=i;function c(h,b,v,w){const x=(0,e._)`${b}${(0,e.getProperty)(v)} !== undefined`;return w?(0,e._)`${x} && ${i(h,b,v)}`:x}Ce.propertyInData=c;function d(h,b,v,w){const x=(0,e._)`${b}${(0,e.getProperty)(v)} === undefined`;return w?(0,e.or)(x,(0,e.not)(i(h,b,v))):x}Ce.noPropertyInData=d;function u(h){return h?Object.keys(h).filter(b=>b!=="__proto__"):[]}Ce.allSchemaProperties=u;function p(h,b){return u(b).filter(v=>!(0,t.alwaysValidSchema)(h,b[v]))}Ce.schemaProperties=p;function f({schemaCode:h,data:b,it:{gen:v,topSchemaRef:w,schemaPath:x,errorPath:P},it:R},S,k,T){const O=T?(0,e._)`${h}, ${b}, ${w}${x}`:b,D=[[s.default.instancePath,(0,e.strConcat)(s.default.instancePath,P)],[s.default.parentData,R.parentData],[s.default.parentDataProperty,R.parentDataProperty],[s.default.rootData,s.default.rootData]];R.opts.dynamicRef&&D.push([s.default.dynamicAnchors,s.default.dynamicAnchors]);const V=(0,e._)`${O}, ${v.object(...D)}`;return k!==e.nil?(0,e._)`${S}.call(${k}, ${V})`:(0,e._)`${S}(${V})`}Ce.callValidateCode=f;const g=(0,e._)`new RegExp`;function _({gen:h,it:{opts:b}},v){const w=b.unicodeRegExp?"u":"",{regExp:x}=b.code,P=x(v,w);return h.scopeValue("pattern",{key:P.toString(),ref:P,code:(0,e._)`${x.code==="new RegExp"?g:(0,a.useFunc)(h,x)}(${v}, ${w})`})}Ce.usePattern=_;function y(h){const{gen:b,data:v,keyword:w,it:x}=h,P=b.name("valid");if(x.allErrors){const S=b.let("valid",!0);return R(()=>b.assign(S,!1)),S}return b.var(P,!0),R(()=>b.break()),P;function R(S){const k=b.const("len",(0,e._)`${v}.length`);b.forRange("i",0,k,T=>{h.subschema({keyword:w,dataProp:T,dataPropType:t.Type.Num},P),b.if((0,e.not)(P),S)})}}Ce.validateArray=y;function m(h){const{gen:b,schema:v,keyword:w,it:x}=h;if(!Array.isArray(v))throw new Error("ajv implementation error");if(v.some(k=>(0,t.alwaysValidSchema)(x,k))&&!x.opts.unevaluated)return;const R=b.let("valid",!1),S=b.name("_valid");b.block(()=>v.forEach((k,T)=>{const O=h.subschema({keyword:w,schemaProp:T,compositeRule:!0},S);b.assign(R,(0,e._)`${R} || ${S}`),h.mergeValidEvaluated(O,S)||b.if((0,e.not)(R))})),h.result(R,()=>h.reset(),()=>h.error(!0))}return Ce.validateUnion=m,Ce}var Ul;function K1(){if(Ul)return kt;Ul=1,Object.defineProperty(kt,"__esModule",{value:!0}),kt.validateKeywordUsage=kt.validSchemaType=kt.funcKeywordCode=kt.macroKeywordCode=void 0;const e=Te(),t=Es(),s=Ot(),a=Sr();function n(p,f){const{gen:g,keyword:_,schema:y,parentSchema:m,it:h}=p,b=f.macro.call(h.self,y,m,h),v=c(g,_,b);h.opts.validateSchema!==!1&&h.self.validateSchema(b,!0);const w=g.name("valid");p.subschema({schema:b,schemaPath:e.nil,errSchemaPath:`${h.errSchemaPath}/${_}`,topSchemaRef:v,compositeRule:!0},w),p.pass(w,()=>p.error(!0))}kt.macroKeywordCode=n;function r(p,f){var g;const{gen:_,keyword:y,schema:m,parentSchema:h,$data:b,it:v}=p;i(v,f);const w=!b&&f.compile?f.compile.call(v.self,m,h,v):f.validate,x=c(_,y,w),P=_.let("valid");p.block$data(P,R),p.ok((g=f.valid)!==null&&g!==void 0?g:P);function R(){if(f.errors===!1)T(),f.modifying&&o(p),O(()=>p.error());else{const D=f.async?S():k();f.modifying&&o(p),O(()=>l(p,D))}}function S(){const D=_.let("ruleErrs",null);return _.try(()=>T((0,e._)`await `),V=>_.assign(P,!1).if((0,e._)`${V} instanceof ${v.ValidationError}`,()=>_.assign(D,(0,e._)`${V}.errors`),()=>_.throw(V))),D}function k(){const D=(0,e._)`${x}.errors`;return _.assign(D,null),T(e.nil),D}function T(D=f.async?(0,e._)`await `:e.nil){const V=v.opts.passContext?t.default.this:t.default.self,Q=!("compile"in f&&!b||f.schema===!1);_.assign(P,(0,e._)`${D}${(0,s.callValidateCode)(p,x,V,Q)}`,f.modifying)}function O(D){var V;_.if((0,e.not)((V=f.valid)!==null&&V!==void 0?V:P),D)}}kt.funcKeywordCode=r;function o(p){const{gen:f,data:g,it:_}=p;f.if(_.parentData,()=>f.assign(g,(0,e._)`${_.parentData}[${_.parentDataProperty}]`))}function l(p,f){const{gen:g}=p;g.if((0,e._)`Array.isArray(${f})`,()=>{g.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,a.extendErrors)(p)},()=>p.error())}function i({schemaEnv:p},f){if(f.async&&!p.$async)throw new Error("async keyword in sync schema")}function c(p,f,g){if(g===void 0)throw new Error(`keyword "${f}" failed to compile`);return p.scopeValue("keyword",typeof g=="function"?{ref:g}:{ref:g,code:(0,e.stringify)(g)})}function d(p,f,g=!1){return!f.length||f.some(_=>_==="array"?Array.isArray(p):_==="object"?p&&typeof p=="object"&&!Array.isArray(p):typeof p==_||g&&typeof p>"u")}kt.validSchemaType=d;function u({schema:p,opts:f,self:g,errSchemaPath:_},y,m){if(Array.isArray(y.keyword)?!y.keyword.includes(m):y.keyword!==m)throw new Error("ajv implementation error");const h=y.dependencies;if(h?.some(b=>!Object.prototype.hasOwnProperty.call(p,b)))throw new Error(`parent schema must have dependencies of ${m}: ${h.join(",")}`);if(y.validateSchema&&!y.validateSchema(p[m])){const v=`keyword "${m}" value is invalid at path "${_}": `+g.errorsText(y.validateSchema.errors);if(f.validateSchema==="log")g.logger.error(v);else throw new Error(v)}}return kt.validateKeywordUsage=u,kt}var Kt={},ql;function Y1(){if(ql)return Kt;ql=1,Object.defineProperty(Kt,"__esModule",{value:!0}),Kt.extendSubschemaMode=Kt.extendSubschemaData=Kt.getSubschema=void 0;const e=Te(),t=Ee();function s(r,{keyword:o,schemaProp:l,schema:i,schemaPath:c,errSchemaPath:d,topSchemaRef:u}){if(o!==void 0&&i!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(o!==void 0){const p=r.schema[o];return l===void 0?{schema:p,schemaPath:(0,e._)`${r.schemaPath}${(0,e.getProperty)(o)}`,errSchemaPath:`${r.errSchemaPath}/${o}`}:{schema:p[l],schemaPath:(0,e._)`${r.schemaPath}${(0,e.getProperty)(o)}${(0,e.getProperty)(l)}`,errSchemaPath:`${r.errSchemaPath}/${o}/${(0,t.escapeFragment)(l)}`}}if(i!==void 0){if(c===void 0||d===void 0||u===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:i,schemaPath:c,topSchemaRef:u,errSchemaPath:d}}throw new Error('either "keyword" or "schema" must be passed')}Kt.getSubschema=s;function a(r,o,{dataProp:l,dataPropType:i,data:c,dataTypes:d,propertyName:u}){if(c!==void 0&&l!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:p}=o;if(l!==void 0){const{errorPath:g,dataPathArr:_,opts:y}=o,m=p.let("data",(0,e._)`${o.data}${(0,e.getProperty)(l)}`,!0);f(m),r.errorPath=(0,e.str)`${g}${(0,t.getErrorPath)(l,i,y.jsPropertySyntax)}`,r.parentDataProperty=(0,e._)`${l}`,r.dataPathArr=[..._,r.parentDataProperty]}if(c!==void 0){const g=c instanceof e.Name?c:p.let("data",c,!0);f(g),u!==void 0&&(r.propertyName=u)}d&&(r.dataTypes=d);function f(g){r.data=g,r.dataLevel=o.dataLevel+1,r.dataTypes=[],o.definedProperties=new Set,r.parentData=o.data,r.dataNames=[...o.dataNames,g]}}Kt.extendSubschemaData=a;function n(r,{jtdDiscriminator:o,jtdMetadata:l,compositeRule:i,createErrors:c,allErrors:d}){i!==void 0&&(r.compositeRule=i),c!==void 0&&(r.createErrors=c),d!==void 0&&(r.allErrors=d),r.jtdDiscriminator=o,r.jtdMetadata=l}return Kt.extendSubschemaMode=n,Kt}var at={},lo,Vl;function Ku(){return Vl||(Vl=1,lo=function e(t,s){if(t===s)return!0;if(t&&s&&typeof t=="object"&&typeof s=="object"){if(t.constructor!==s.constructor)return!1;var a,n,r;if(Array.isArray(t)){if(a=t.length,a!=s.length)return!1;for(n=a;n--!==0;)if(!e(t[n],s[n]))return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();if(r=Object.keys(t),a=r.length,a!==Object.keys(s).length)return!1;for(n=a;n--!==0;)if(!Object.prototype.hasOwnProperty.call(s,r[n]))return!1;for(n=a;n--!==0;){var o=r[n];if(!e(t[o],s[o]))return!1}return!0}return t!==t&&s!==s}),lo}var co={exports:{}},Gl;function W1(){if(Gl)return co.exports;Gl=1;var e=co.exports=function(a,n,r){typeof n=="function"&&(r=n,n={}),r=n.cb||r;var o=typeof r=="function"?r:r.pre||function(){},l=r.post||function(){};t(n,o,l,a,"",a)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(a,n,r,o,l,i,c,d,u,p){if(o&&typeof o=="object"&&!Array.isArray(o)){n(o,l,i,c,d,u,p);for(var f in o){var g=o[f];if(Array.isArray(g)){if(f in e.arrayKeywords)for(var _=0;_<g.length;_++)t(a,n,r,g[_],l+"/"+f+"/"+_,i,l,f,o,_)}else if(f in e.propsKeywords){if(g&&typeof g=="object")for(var y in g)t(a,n,r,g[y],l+"/"+f+"/"+s(y),i,l,f,o,y)}else(f in e.keywords||a.allKeys&&!(f in e.skipKeywords))&&t(a,n,r,g,l+"/"+f,i,l,f,o)}r(o,l,i,c,d,u,p)}}function s(a){return a.replace(/~/g,"~0").replace(/\//g,"~1")}return co.exports}var Kl;function Er(){if(Kl)return at;Kl=1,Object.defineProperty(at,"__esModule",{value:!0}),at.getSchemaRefs=at.resolveUrl=at.normalizeId=at._getFullPath=at.getFullPath=at.inlineRef=void 0;const e=Ee(),t=Ku(),s=W1(),a=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function n(_,y=!0){return typeof _=="boolean"?!0:y===!0?!o(_):y?l(_)<=y:!1}at.inlineRef=n;const r=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function o(_){for(const y in _){if(r.has(y))return!0;const m=_[y];if(Array.isArray(m)&&m.some(o)||typeof m=="object"&&o(m))return!0}return!1}function l(_){let y=0;for(const m in _){if(m==="$ref")return 1/0;if(y++,!a.has(m)&&(typeof _[m]=="object"&&(0,e.eachItem)(_[m],h=>y+=l(h)),y===1/0))return 1/0}return y}function i(_,y="",m){m!==!1&&(y=u(y));const h=_.parse(y);return c(_,h)}at.getFullPath=i;function c(_,y){return _.serialize(y).split("#")[0]+"#"}at._getFullPath=c;const d=/#\/?$/;function u(_){return _?_.replace(d,""):""}at.normalizeId=u;function p(_,y,m){return m=u(m),_.resolve(y,m)}at.resolveUrl=p;const f=/^[a-z_][-a-z0-9._]*$/i;function g(_,y){if(typeof _=="boolean")return{};const{schemaId:m,uriResolver:h}=this.opts,b=u(_[m]||y),v={"":b},w=i(h,b,!1),x={},P=new Set;return s(_,{allKeys:!0},(k,T,O,D)=>{if(D===void 0)return;const V=w+T;let Q=v[D];typeof k[m]=="string"&&(Q=X.call(this,k[m])),Z.call(this,k.$anchor),Z.call(this,k.$dynamicAnchor),v[T]=Q;function X(K){const ie=this.opts.uriResolver.resolve;if(K=u(Q?ie(Q,K):K),P.has(K))throw S(K);P.add(K);let J=this.refs[K];return typeof J=="string"&&(J=this.refs[J]),typeof J=="object"?R(k,J.schema,K):K!==u(V)&&(K[0]==="#"?(R(k,x[K],K),x[K]=k):this.refs[K]=V),K}function Z(K){if(typeof K=="string"){if(!f.test(K))throw new Error(`invalid anchor "${K}"`);X.call(this,`#${K}`)}}}),x;function R(k,T,O){if(T!==void 0&&!t(k,T))throw S(O)}function S(k){return new Error(`reference "${k}" resolves to more than one schema`)}}return at.getSchemaRefs=g,at}var Yl;function kr(){if(Yl)return Vt;Yl=1,Object.defineProperty(Vt,"__esModule",{value:!0}),Vt.getData=Vt.KeywordCxt=Vt.validateFunctionCode=void 0;const e=V1(),t=rr(),s=Gu(),a=rr(),n=G1(),r=K1(),o=Y1(),l=Te(),i=Es(),c=Er(),d=Ee(),u=Sr();function p(I){if(w(I)&&(P(I),v(I))){y(I);return}f(I,()=>(0,e.topBoolOrEmptySchema)(I))}Vt.validateFunctionCode=p;function f({gen:I,validateName:E,schema:M,schemaEnv:L,opts:H},W){H.code.es5?I.func(E,(0,l._)`${i.default.data}, ${i.default.valCxt}`,L.$async,()=>{I.code((0,l._)`"use strict"; ${h(M,H)}`),_(I,H),I.code(W)}):I.func(E,(0,l._)`${i.default.data}, ${g(H)}`,L.$async,()=>I.code(h(M,H)).code(W))}function g(I){return(0,l._)`{${i.default.instancePath}="", ${i.default.parentData}, ${i.default.parentDataProperty}, ${i.default.rootData}=${i.default.data}${I.dynamicRef?(0,l._)`, ${i.default.dynamicAnchors}={}`:l.nil}}={}`}function _(I,E){I.if(i.default.valCxt,()=>{I.var(i.default.instancePath,(0,l._)`${i.default.valCxt}.${i.default.instancePath}`),I.var(i.default.parentData,(0,l._)`${i.default.valCxt}.${i.default.parentData}`),I.var(i.default.parentDataProperty,(0,l._)`${i.default.valCxt}.${i.default.parentDataProperty}`),I.var(i.default.rootData,(0,l._)`${i.default.valCxt}.${i.default.rootData}`),E.dynamicRef&&I.var(i.default.dynamicAnchors,(0,l._)`${i.default.valCxt}.${i.default.dynamicAnchors}`)},()=>{I.var(i.default.instancePath,(0,l._)`""`),I.var(i.default.parentData,(0,l._)`undefined`),I.var(i.default.parentDataProperty,(0,l._)`undefined`),I.var(i.default.rootData,i.default.data),E.dynamicRef&&I.var(i.default.dynamicAnchors,(0,l._)`{}`)})}function y(I){const{schema:E,opts:M,gen:L}=I;f(I,()=>{M.$comment&&E.$comment&&D(I),k(I),L.let(i.default.vErrors,null),L.let(i.default.errors,0),M.unevaluated&&m(I),R(I),V(I)})}function m(I){const{gen:E,validateName:M}=I;I.evaluated=E.const("evaluated",(0,l._)`${M}.evaluated`),E.if((0,l._)`${I.evaluated}.dynamicProps`,()=>E.assign((0,l._)`${I.evaluated}.props`,(0,l._)`undefined`)),E.if((0,l._)`${I.evaluated}.dynamicItems`,()=>E.assign((0,l._)`${I.evaluated}.items`,(0,l._)`undefined`))}function h(I,E){const M=typeof I=="object"&&I[E.schemaId];return M&&(E.code.source||E.code.process)?(0,l._)`/*# sourceURL=${M} */`:l.nil}function b(I,E){if(w(I)&&(P(I),v(I))){x(I,E);return}(0,e.boolOrEmptySchema)(I,E)}function v({schema:I,self:E}){if(typeof I=="boolean")return!I;for(const M in I)if(E.RULES.all[M])return!0;return!1}function w(I){return typeof I.schema!="boolean"}function x(I,E){const{schema:M,gen:L,opts:H}=I;H.$comment&&M.$comment&&D(I),T(I),O(I);const W=L.const("_errs",i.default.errors);R(I,W),L.var(E,(0,l._)`${W} === ${i.default.errors}`)}function P(I){(0,d.checkUnknownRules)(I),S(I)}function R(I,E){if(I.opts.jtd)return X(I,[],!1,E);const M=(0,t.getSchemaTypes)(I.schema),L=(0,t.coerceAndCheckDataType)(I,M);X(I,M,!L,E)}function S(I){const{schema:E,errSchemaPath:M,opts:L,self:H}=I;E.$ref&&L.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(E,H.RULES)&&H.logger.warn(`$ref: keywords ignored in schema at path "${M}"`)}function k(I){const{schema:E,opts:M}=I;E.default!==void 0&&M.useDefaults&&M.strictSchema&&(0,d.checkStrictMode)(I,"default is ignored in the schema root")}function T(I){const E=I.schema[I.opts.schemaId];E&&(I.baseId=(0,c.resolveUrl)(I.opts.uriResolver,I.baseId,E))}function O(I){if(I.schema.$async&&!I.schemaEnv.$async)throw new Error("async schema in sync schema")}function D({gen:I,schemaEnv:E,schema:M,errSchemaPath:L,opts:H}){const W=M.$comment;if(H.$comment===!0)I.code((0,l._)`${i.default.self}.logger.log(${W})`);else if(typeof H.$comment=="function"){const B=(0,l.str)`${L}/$comment`,F=I.scopeValue("root",{ref:E.root});I.code((0,l._)`${i.default.self}.opts.$comment(${W}, ${B}, ${F}.schema)`)}}function V(I){const{gen:E,schemaEnv:M,validateName:L,ValidationError:H,opts:W}=I;M.$async?E.if((0,l._)`${i.default.errors} === 0`,()=>E.return(i.default.data),()=>E.throw((0,l._)`new ${H}(${i.default.vErrors})`)):(E.assign((0,l._)`${L}.errors`,i.default.vErrors),W.unevaluated&&Q(I),E.return((0,l._)`${i.default.errors} === 0`))}function Q({gen:I,evaluated:E,props:M,items:L}){M instanceof l.Name&&I.assign((0,l._)`${E}.props`,M),L instanceof l.Name&&I.assign((0,l._)`${E}.items`,L)}function X(I,E,M,L){const{gen:H,schema:W,data:B,allErrors:F,opts:q,self:ne}=I,{RULES:re}=ne;if(W.$ref&&(q.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(W,re))){H.block(()=>N(I,"$ref",re.all.$ref.definition));return}q.jtd||K(I,E),H.block(()=>{for(const se of re.rules)oe(se);oe(re.post)});function oe(se){(0,s.shouldUseGroup)(W,se)&&(se.type?(H.if((0,a.checkDataType)(se.type,B,q.strictNumbers)),Z(I,se),E.length===1&&E[0]===se.type&&M&&(H.else(),(0,a.reportTypeError)(I)),H.endIf()):Z(I,se),F||H.if((0,l._)`${i.default.errors} === ${L||0}`))}}function Z(I,E){const{gen:M,schema:L,opts:{useDefaults:H}}=I;H&&(0,n.assignDefaults)(I,E.type),M.block(()=>{for(const W of E.rules)(0,s.shouldUseRule)(L,W)&&N(I,W.keyword,W.definition,E.type)})}function K(I,E){I.schemaEnv.meta||!I.opts.strictTypes||(ie(I,E),I.opts.allowUnionTypes||J(I,E),z(I,I.dataTypes))}function ie(I,E){if(E.length){if(!I.dataTypes.length){I.dataTypes=E;return}E.forEach(M=>{Y(I.dataTypes,M)||$(I,`type "${M}" not allowed by context "${I.dataTypes.join(",")}"`)}),A(I,E)}}function J(I,E){E.length>1&&!(E.length===2&&E.includes("null"))&&$(I,"use allowUnionTypes to allow union type keyword")}function z(I,E){const M=I.self.RULES.all;for(const L in M){const H=M[L];if(typeof H=="object"&&(0,s.shouldUseRule)(I.schema,H)){const{type:W}=H.definition;W.length&&!W.some(B=>ee(E,B))&&$(I,`missing type "${W.join(",")}" for keyword "${L}"`)}}}function ee(I,E){return I.includes(E)||E==="number"&&I.includes("integer")}function Y(I,E){return I.includes(E)||E==="integer"&&I.includes("number")}function A(I,E){const M=[];for(const L of I.dataTypes)Y(E,L)?M.push(L):E.includes("integer")&&L==="number"&&M.push("integer");I.dataTypes=M}function $(I,E){const M=I.schemaEnv.baseId+I.errSchemaPath;E+=` at "${M}" (strictTypes)`,(0,d.checkStrictMode)(I,E,I.opts.strictTypes)}class U{constructor(E,M,L){if((0,r.validateKeywordUsage)(E,M,L),this.gen=E.gen,this.allErrors=E.allErrors,this.keyword=L,this.data=E.data,this.schema=E.schema[L],this.$data=M.$data&&E.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(E,this.schema,L,this.$data),this.schemaType=M.schemaType,this.parentSchema=E.schema,this.params={},this.it=E,this.def=M,this.$data)this.schemaCode=E.gen.const("vSchema",te(this.$data,E));else if(this.schemaCode=this.schemaValue,!(0,r.validSchemaType)(this.schema,M.schemaType,M.allowUndefined))throw new Error(`${L} value must be ${JSON.stringify(M.schemaType)}`);("code"in M?M.trackErrors:M.errors!==!1)&&(this.errsCount=E.gen.const("_errs",i.default.errors))}result(E,M,L){this.failResult((0,l.not)(E),M,L)}failResult(E,M,L){this.gen.if(E),L?L():this.error(),M?(this.gen.else(),M(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(E,M){this.failResult((0,l.not)(E),void 0,M)}fail(E){if(E===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(E),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(E){if(!this.$data)return this.fail(E);const{schemaCode:M}=this;this.fail((0,l._)`${M} !== undefined && (${(0,l.or)(this.invalid$data(),E)})`)}error(E,M,L){if(M){this.setParams(M),this._error(E,L),this.setParams({});return}this._error(E,L)}_error(E,M){(E?u.reportExtraError:u.reportError)(this,this.def.error,M)}$dataError(){(0,u.reportError)(this,this.def.$dataError||u.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,u.resetErrorsCount)(this.gen,this.errsCount)}ok(E){this.allErrors||this.gen.if(E)}setParams(E,M){M?Object.assign(this.params,E):this.params=E}block$data(E,M,L=l.nil){this.gen.block(()=>{this.check$data(E,L),M()})}check$data(E=l.nil,M=l.nil){if(!this.$data)return;const{gen:L,schemaCode:H,schemaType:W,def:B}=this;L.if((0,l.or)((0,l._)`${H} === undefined`,M)),E!==l.nil&&L.assign(E,!0),(W.length||B.validateSchema)&&(L.elseIf(this.invalid$data()),this.$dataError(),E!==l.nil&&L.assign(E,!1)),L.else()}invalid$data(){const{gen:E,schemaCode:M,schemaType:L,def:H,it:W}=this;return(0,l.or)(B(),F());function B(){if(L.length){if(!(M instanceof l.Name))throw new Error("ajv implementation error");const q=Array.isArray(L)?L:[L];return(0,l._)`${(0,a.checkDataTypes)(q,M,W.opts.strictNumbers,a.DataType.Wrong)}`}return l.nil}function F(){if(H.validateSchema){const q=E.scopeValue("validate$data",{ref:H.validateSchema});return(0,l._)`!${q}(${M})`}return l.nil}}subschema(E,M){const L=(0,o.getSubschema)(this.it,E);(0,o.extendSubschemaData)(L,this.it,E),(0,o.extendSubschemaMode)(L,E);const H={...this.it,...L,items:void 0,props:void 0};return b(H,M),H}mergeEvaluated(E,M){const{it:L,gen:H}=this;L.opts.unevaluated&&(L.props!==!0&&E.props!==void 0&&(L.props=d.mergeEvaluated.props(H,E.props,L.props,M)),L.items!==!0&&E.items!==void 0&&(L.items=d.mergeEvaluated.items(H,E.items,L.items,M)))}mergeValidEvaluated(E,M){const{it:L,gen:H}=this;if(L.opts.unevaluated&&(L.props!==!0||L.items!==!0))return H.if(M,()=>this.mergeEvaluated(E,l.Name)),!0}}Vt.KeywordCxt=U;function N(I,E,M,L){const H=new U(I,M,E);"code"in M?M.code(H,L):H.$data&&M.validate?(0,r.funcKeywordCode)(H,M):"macro"in M?(0,r.macroKeywordCode)(H,M):(M.compile||M.validate)&&(0,r.funcKeywordCode)(H,M)}const G=/^\/(?:[^~]|~0|~1)*$/,j=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function te(I,{dataLevel:E,dataNames:M,dataPathArr:L}){let H,W;if(I==="")return i.default.rootData;if(I[0]==="/"){if(!G.test(I))throw new Error(`Invalid JSON-pointer: ${I}`);H=I,W=i.default.rootData}else{const ne=j.exec(I);if(!ne)throw new Error(`Invalid JSON-pointer: ${I}`);const re=+ne[1];if(H=ne[2],H==="#"){if(re>=E)throw new Error(q("property/index",re));return L[E-re]}if(re>E)throw new Error(q("data",re));if(W=M[E-re],!H)return W}let B=W;const F=H.split("/");for(const ne of F)ne&&(W=(0,l._)`${W}${(0,l.getProperty)((0,d.unescapeJsonPointer)(ne))}`,B=(0,l._)`${B} && ${W}`);return B;function q(ne,re){return`Cannot access ${ne} ${re} levels up, current level is ${E}`}}return Vt.getData=te,Vt}var Ja={},Wl;function ii(){if(Wl)return Ja;Wl=1,Object.defineProperty(Ja,"__esModule",{value:!0});class e extends Error{constructor(s){super("validation failed"),this.errors=s,this.ajv=this.validation=!0}}return Ja.default=e,Ja}var Xa={},Jl;function Pr(){if(Jl)return Xa;Jl=1,Object.defineProperty(Xa,"__esModule",{value:!0});const e=Er();class t extends Error{constructor(a,n,r,o){super(o||`can't resolve reference ${r} from id ${n}`),this.missingRef=(0,e.resolveUrl)(a,n,r),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(a,this.missingRef))}}return Xa.default=t,Xa}var ft={},Xl;function li(){if(Xl)return ft;Xl=1,Object.defineProperty(ft,"__esModule",{value:!0}),ft.resolveSchema=ft.getCompilingSchema=ft.resolveRef=ft.compileSchema=ft.SchemaEnv=void 0;const e=Te(),t=ii(),s=Es(),a=Er(),n=Ee(),r=kr();class o{constructor(m){var h;this.refs={},this.dynamicAnchors={};let b;typeof m.schema=="object"&&(b=m.schema),this.schema=m.schema,this.schemaId=m.schemaId,this.root=m.root||this,this.baseId=(h=m.baseId)!==null&&h!==void 0?h:(0,a.normalizeId)(b?.[m.schemaId||"$id"]),this.schemaPath=m.schemaPath,this.localRefs=m.localRefs,this.meta=m.meta,this.$async=b?.$async,this.refs={}}}ft.SchemaEnv=o;function l(y){const m=d.call(this,y);if(m)return m;const h=(0,a.getFullPath)(this.opts.uriResolver,y.root.baseId),{es5:b,lines:v}=this.opts.code,{ownProperties:w}=this.opts,x=new e.CodeGen(this.scope,{es5:b,lines:v,ownProperties:w});let P;y.$async&&(P=x.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const R=x.scopeName("validate");y.validateName=R;const S={gen:x,allErrors:this.opts.allErrors,data:s.default.data,parentData:s.default.parentData,parentDataProperty:s.default.parentDataProperty,dataNames:[s.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:x.scopeValue("schema",this.opts.code.source===!0?{ref:y.schema,code:(0,e.stringify)(y.schema)}:{ref:y.schema}),validateName:R,ValidationError:P,schema:y.schema,schemaEnv:y,rootId:h,baseId:y.baseId||h,schemaPath:e.nil,errSchemaPath:y.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let k;try{this._compilations.add(y),(0,r.validateFunctionCode)(S),x.optimize(this.opts.code.optimize);const T=x.toString();k=`${x.scopeRefs(s.default.scope)}return ${T}`,this.opts.code.process&&(k=this.opts.code.process(k,y));const D=new Function(`${s.default.self}`,`${s.default.scope}`,k)(this,this.scope.get());if(this.scope.value(R,{ref:D}),D.errors=null,D.schema=y.schema,D.schemaEnv=y,y.$async&&(D.$async=!0),this.opts.code.source===!0&&(D.source={validateName:R,validateCode:T,scopeValues:x._values}),this.opts.unevaluated){const{props:V,items:Q}=S;D.evaluated={props:V instanceof e.Name?void 0:V,items:Q instanceof e.Name?void 0:Q,dynamicProps:V instanceof e.Name,dynamicItems:Q instanceof e.Name},D.source&&(D.source.evaluated=(0,e.stringify)(D.evaluated))}return y.validate=D,y}catch(T){throw delete y.validate,delete y.validateName,k&&this.logger.error("Error compiling schema, function code:",k),T}finally{this._compilations.delete(y)}}ft.compileSchema=l;function i(y,m,h){var b;h=(0,a.resolveUrl)(this.opts.uriResolver,m,h);const v=y.refs[h];if(v)return v;let w=p.call(this,y,h);if(w===void 0){const x=(b=y.localRefs)===null||b===void 0?void 0:b[h],{schemaId:P}=this.opts;x&&(w=new o({schema:x,schemaId:P,root:y,baseId:m}))}if(w!==void 0)return y.refs[h]=c.call(this,w)}ft.resolveRef=i;function c(y){return(0,a.inlineRef)(y.schema,this.opts.inlineRefs)?y.schema:y.validate?y:l.call(this,y)}function d(y){for(const m of this._compilations)if(u(m,y))return m}ft.getCompilingSchema=d;function u(y,m){return y.schema===m.schema&&y.root===m.root&&y.baseId===m.baseId}function p(y,m){let h;for(;typeof(h=this.refs[m])=="string";)m=h;return h||this.schemas[m]||f.call(this,y,m)}function f(y,m){const h=this.opts.uriResolver.parse(m),b=(0,a._getFullPath)(this.opts.uriResolver,h);let v=(0,a.getFullPath)(this.opts.uriResolver,y.baseId,void 0);if(Object.keys(y.schema).length>0&&b===v)return _.call(this,h,y);const w=(0,a.normalizeId)(b),x=this.refs[w]||this.schemas[w];if(typeof x=="string"){const P=f.call(this,y,x);return typeof P?.schema!="object"?void 0:_.call(this,h,P)}if(typeof x?.schema=="object"){if(x.validate||l.call(this,x),w===(0,a.normalizeId)(m)){const{schema:P}=x,{schemaId:R}=this.opts,S=P[R];return S&&(v=(0,a.resolveUrl)(this.opts.uriResolver,v,S)),new o({schema:P,schemaId:R,root:y,baseId:v})}return _.call(this,h,x)}}ft.resolveSchema=f;const g=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function _(y,{baseId:m,schema:h,root:b}){var v;if(((v=y.fragment)===null||v===void 0?void 0:v[0])!=="/")return;for(const P of y.fragment.slice(1).split("/")){if(typeof h=="boolean")return;const R=h[(0,n.unescapeFragment)(P)];if(R===void 0)return;h=R;const S=typeof h=="object"&&h[this.opts.schemaId];!g.has(P)&&S&&(m=(0,a.resolveUrl)(this.opts.uriResolver,m,S))}let w;if(typeof h!="boolean"&&h.$ref&&!(0,n.schemaHasRulesButRef)(h,this.RULES)){const P=(0,a.resolveUrl)(this.opts.uriResolver,m,h.$ref);w=f.call(this,b,P)}const{schemaId:x}=this.opts;if(w=w||new o({schema:h,schemaId:x,root:b,baseId:m}),w.schema!==w.root.schema)return w}return ft}const J1="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",X1="Meta-schema for $data reference (JSON AnySchema extension proposal)",Q1="object",Z1=["$data"],ew={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},tw=!1,sw={$id:J1,description:X1,type:Q1,required:Z1,properties:ew,additionalProperties:tw};var Qa={},pa={exports:{}},uo,Ql;function Yu(){if(Ql)return uo;Ql=1;const e=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),t=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function s(p){let f="",g=0,_=0;for(_=0;_<p.length;_++)if(g=p[_].charCodeAt(0),g!==48){if(!(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102))return"";f+=p[_];break}for(_+=1;_<p.length;_++){if(g=p[_].charCodeAt(0),!(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102))return"";f+=p[_]}return f}const a=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function n(p){return p.length=0,!0}function r(p,f,g){if(p.length){const _=s(p);if(_!=="")f.push(_);else return g.error=!0,!1;p.length=0}return!0}function o(p){let f=0;const g={error:!1,address:"",zone:""},_=[],y=[];let m=!1,h=!1,b=r;for(let v=0;v<p.length;v++){const w=p[v];if(!(w==="["||w==="]"))if(w===":"){if(m===!0&&(h=!0),!b(y,_,g))break;if(++f>7){g.error=!0;break}v>0&&p[v-1]===":"&&(m=!0),_.push(":");continue}else if(w==="%"){if(!b(y,_,g))break;b=n}else{y.push(w);continue}}return y.length&&(b===n?g.zone=y.join(""):h?_.push(y.join("")):_.push(s(y))),g.address=_.join(""),g}function l(p){if(i(p,":")<2)return{host:p,isIPV6:!1};const f=o(p);if(f.error)return{host:p,isIPV6:!1};{let g=f.address,_=f.address;return f.zone&&(g+="%"+f.zone,_+="%25"+f.zone),{host:g,isIPV6:!0,escapedHost:_}}}function i(p,f){let g=0;for(let _=0;_<p.length;_++)p[_]===f&&g++;return g}function c(p){let f=p;const g=[];let _=-1,y=0;for(;y=f.length;){if(y===1){if(f===".")break;if(f==="/"){g.push("/");break}else{g.push(f);break}}else if(y===2){if(f[0]==="."){if(f[1]===".")break;if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&(f[1]==="."||f[1]==="/")){g.push("/");break}}else if(y===3&&f==="/.."){g.length!==0&&g.pop(),g.push("/");break}if(f[0]==="."){if(f[1]==="."){if(f[2]==="/"){f=f.slice(3);continue}}else if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&f[1]==="."){if(f[2]==="/"){f=f.slice(2);continue}else if(f[2]==="."&&f[3]==="/"){f=f.slice(3),g.length!==0&&g.pop();continue}}if((_=f.indexOf("/",1))===-1){g.push(f);break}else g.push(f.slice(0,_)),f=f.slice(_)}return g.join("")}function d(p,f){const g=f!==!0?escape:unescape;return p.scheme!==void 0&&(p.scheme=g(p.scheme)),p.userinfo!==void 0&&(p.userinfo=g(p.userinfo)),p.host!==void 0&&(p.host=g(p.host)),p.path!==void 0&&(p.path=g(p.path)),p.query!==void 0&&(p.query=g(p.query)),p.fragment!==void 0&&(p.fragment=g(p.fragment)),p}function u(p){const f=[];if(p.userinfo!==void 0&&(f.push(p.userinfo),f.push("@")),p.host!==void 0){let g=unescape(p.host);if(!t(g)){const _=l(g);_.isIPV6===!0?g=`[${_.escapedHost}]`:g=p.host}f.push(g)}return(typeof p.port=="number"||typeof p.port=="string")&&(f.push(":"),f.push(String(p.port))),f.length?f.join(""):void 0}return uo={nonSimpleDomain:a,recomposeAuthority:u,normalizeComponentEncoding:d,removeDotSegments:c,isIPv4:t,isUUID:e,normalizeIPv6:l,stringArrayToHexStripped:s},uo}var po,Zl;function aw(){if(Zl)return po;Zl=1;const{isUUID:e}=Yu(),t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,s=["http","https","ws","wss","urn","urn:uuid"];function a(w){return s.indexOf(w)!==-1}function n(w){return w.secure===!0?!0:w.secure===!1?!1:w.scheme?w.scheme.length===3&&(w.scheme[0]==="w"||w.scheme[0]==="W")&&(w.scheme[1]==="s"||w.scheme[1]==="S")&&(w.scheme[2]==="s"||w.scheme[2]==="S"):!1}function r(w){return w.host||(w.error=w.error||"HTTP URIs must have a host."),w}function o(w){const x=String(w.scheme).toLowerCase()==="https";return(w.port===(x?443:80)||w.port==="")&&(w.port=void 0),w.path||(w.path="/"),w}function l(w){return w.secure=n(w),w.resourceName=(w.path||"/")+(w.query?"?"+w.query:""),w.path=void 0,w.query=void 0,w}function i(w){if((w.port===(n(w)?443:80)||w.port==="")&&(w.port=void 0),typeof w.secure=="boolean"&&(w.scheme=w.secure?"wss":"ws",w.secure=void 0),w.resourceName){const[x,P]=w.resourceName.split("?");w.path=x&&x!=="/"?x:void 0,w.query=P,w.resourceName=void 0}return w.fragment=void 0,w}function c(w,x){if(!w.path)return w.error="URN can not be parsed",w;const P=w.path.match(t);if(P){const R=x.scheme||w.scheme||"urn";w.nid=P[1].toLowerCase(),w.nss=P[2];const S=`${R}:${x.nid||w.nid}`,k=v(S);w.path=void 0,k&&(w=k.parse(w,x))}else w.error=w.error||"URN can not be parsed.";return w}function d(w,x){if(w.nid===void 0)throw new Error("URN without nid cannot be serialized");const P=x.scheme||w.scheme||"urn",R=w.nid.toLowerCase(),S=`${P}:${x.nid||R}`,k=v(S);k&&(w=k.serialize(w,x));const T=w,O=w.nss;return T.path=`${R||x.nid}:${O}`,x.skipEscape=!0,T}function u(w,x){const P=w;return P.uuid=P.nss,P.nss=void 0,!x.tolerant&&(!P.uuid||!e(P.uuid))&&(P.error=P.error||"UUID is not valid."),P}function p(w){const x=w;return x.nss=(w.uuid||"").toLowerCase(),x}const f={scheme:"http",domainHost:!0,parse:r,serialize:o},g={scheme:"https",domainHost:f.domainHost,parse:r,serialize:o},_={scheme:"ws",domainHost:!0,parse:l,serialize:i},y={scheme:"wss",domainHost:_.domainHost,parse:_.parse,serialize:_.serialize},b={http:f,https:g,ws:_,wss:y,urn:{scheme:"urn",parse:c,serialize:d,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:u,serialize:p,skipNormalize:!0}};Object.setPrototypeOf(b,null);function v(w){return w&&(b[w]||b[w.toLowerCase()])||void 0}return po={wsIsSecure:n,SCHEMES:b,isValidSchemeName:a,getSchemeHandler:v},po}var ec;function nw(){if(ec)return pa.exports;ec=1;const{normalizeIPv6:e,removeDotSegments:t,recomposeAuthority:s,normalizeComponentEncoding:a,isIPv4:n,nonSimpleDomain:r}=Yu(),{SCHEMES:o,getSchemeHandler:l}=aw();function i(y,m){return typeof y=="string"?y=p(g(y,m),m):typeof y=="object"&&(y=g(p(y,m),m)),y}function c(y,m,h){const b=h?Object.assign({scheme:"null"},h):{scheme:"null"},v=d(g(y,b),g(m,b),b,!0);return b.skipEscape=!0,p(v,b)}function d(y,m,h,b){const v={};return b||(y=g(p(y,h),h),m=g(p(m,h),h)),h=h||{},!h.tolerant&&m.scheme?(v.scheme=m.scheme,v.userinfo=m.userinfo,v.host=m.host,v.port=m.port,v.path=t(m.path||""),v.query=m.query):(m.userinfo!==void 0||m.host!==void 0||m.port!==void 0?(v.userinfo=m.userinfo,v.host=m.host,v.port=m.port,v.path=t(m.path||""),v.query=m.query):(m.path?(m.path[0]==="/"?v.path=t(m.path):((y.userinfo!==void 0||y.host!==void 0||y.port!==void 0)&&!y.path?v.path="/"+m.path:y.path?v.path=y.path.slice(0,y.path.lastIndexOf("/")+1)+m.path:v.path=m.path,v.path=t(v.path)),v.query=m.query):(v.path=y.path,m.query!==void 0?v.query=m.query:v.query=y.query),v.userinfo=y.userinfo,v.host=y.host,v.port=y.port),v.scheme=y.scheme),v.fragment=m.fragment,v}function u(y,m,h){return typeof y=="string"?(y=unescape(y),y=p(a(g(y,h),!0),{...h,skipEscape:!0})):typeof y=="object"&&(y=p(a(y,!0),{...h,skipEscape:!0})),typeof m=="string"?(m=unescape(m),m=p(a(g(m,h),!0),{...h,skipEscape:!0})):typeof m=="object"&&(m=p(a(m,!0),{...h,skipEscape:!0})),y.toLowerCase()===m.toLowerCase()}function p(y,m){const h={host:y.host,scheme:y.scheme,userinfo:y.userinfo,port:y.port,path:y.path,query:y.query,nid:y.nid,nss:y.nss,uuid:y.uuid,fragment:y.fragment,reference:y.reference,resourceName:y.resourceName,secure:y.secure,error:""},b=Object.assign({},m),v=[],w=l(b.scheme||h.scheme);w&&w.serialize&&w.serialize(h,b),h.path!==void 0&&(b.skipEscape?h.path=unescape(h.path):(h.path=escape(h.path),h.scheme!==void 0&&(h.path=h.path.split("%3A").join(":")))),b.reference!=="suffix"&&h.scheme&&v.push(h.scheme,":");const x=s(h);if(x!==void 0&&(b.reference!=="suffix"&&v.push("//"),v.push(x),h.path&&h.path[0]!=="/"&&v.push("/")),h.path!==void 0){let P=h.path;!b.absolutePath&&(!w||!w.absolutePath)&&(P=t(P)),x===void 0&&P[0]==="/"&&P[1]==="/"&&(P="/%2F"+P.slice(2)),v.push(P)}return h.query!==void 0&&v.push("?",h.query),h.fragment!==void 0&&v.push("#",h.fragment),v.join("")}const f=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function g(y,m){const h=Object.assign({},m),b={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0};let v=!1;h.reference==="suffix"&&(h.scheme?y=h.scheme+":"+y:y="//"+y);const w=y.match(f);if(w){if(b.scheme=w[1],b.userinfo=w[3],b.host=w[4],b.port=parseInt(w[5],10),b.path=w[6]||"",b.query=w[7],b.fragment=w[8],isNaN(b.port)&&(b.port=w[5]),b.host)if(n(b.host)===!1){const R=e(b.host);b.host=R.host.toLowerCase(),v=R.isIPV6}else v=!0;b.scheme===void 0&&b.userinfo===void 0&&b.host===void 0&&b.port===void 0&&b.query===void 0&&!b.path?b.reference="same-document":b.scheme===void 0?b.reference="relative":b.fragment===void 0?b.reference="absolute":b.reference="uri",h.reference&&h.reference!=="suffix"&&h.reference!==b.reference&&(b.error=b.error||"URI is not a "+h.reference+" reference.");const x=l(h.scheme||b.scheme);if(!h.unicodeSupport&&(!x||!x.unicodeSupport)&&b.host&&(h.domainHost||x&&x.domainHost)&&v===!1&&r(b.host))try{b.host=URL.domainToASCII(b.host.toLowerCase())}catch(P){b.error=b.error||"Host's domain name can not be converted to ASCII: "+P}(!x||x&&!x.skipNormalize)&&(y.indexOf("%")!==-1&&(b.scheme!==void 0&&(b.scheme=unescape(b.scheme)),b.host!==void 0&&(b.host=unescape(b.host))),b.path&&(b.path=escape(unescape(b.path))),b.fragment&&(b.fragment=encodeURI(decodeURIComponent(b.fragment)))),x&&x.parse&&x.parse(b,h)}else b.error=b.error||"URI can not be parsed.";return b}const _={SCHEMES:o,normalize:i,resolve:c,resolveComponent:d,equal:u,serialize:p,parse:g};return pa.exports=_,pa.exports.default=_,pa.exports.fastUri=_,pa.exports}var tc;function rw(){if(tc)return Qa;tc=1,Object.defineProperty(Qa,"__esModule",{value:!0});const e=nw();return e.code='require("ajv/dist/runtime/uri").default',Qa.default=e,Qa}var sc;function ow(){return sc||(sc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=kr();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var s=Te();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return s._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return s.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return s.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return s.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return s.CodeGen}});const a=ii(),n=Pr(),r=Vu(),o=li(),l=Te(),i=Er(),c=rr(),d=Ee(),u=sw,p=rw(),f=(J,z)=>new RegExp(J,z);f.code="new RegExp";const g=["removeAdditional","useDefaults","coerceTypes"],_=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),y={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},m={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},h=200;function b(J){var z,ee,Y,A,$,U,N,G,j,te,I,E,M,L,H,W,B,F,q,ne,re,oe,se,le,fe;const me=J.strict,ve=(z=J.code)===null||z===void 0?void 0:z.optimize,_e=ve===!0||ve===void 0?1:ve||0,Ie=(Y=(ee=J.code)===null||ee===void 0?void 0:ee.regExp)!==null&&Y!==void 0?Y:f,Ve=(A=J.uriResolver)!==null&&A!==void 0?A:p.default;return{strictSchema:(U=($=J.strictSchema)!==null&&$!==void 0?$:me)!==null&&U!==void 0?U:!0,strictNumbers:(G=(N=J.strictNumbers)!==null&&N!==void 0?N:me)!==null&&G!==void 0?G:!0,strictTypes:(te=(j=J.strictTypes)!==null&&j!==void 0?j:me)!==null&&te!==void 0?te:"log",strictTuples:(E=(I=J.strictTuples)!==null&&I!==void 0?I:me)!==null&&E!==void 0?E:"log",strictRequired:(L=(M=J.strictRequired)!==null&&M!==void 0?M:me)!==null&&L!==void 0?L:!1,code:J.code?{...J.code,optimize:_e,regExp:Ie}:{optimize:_e,regExp:Ie},loopRequired:(H=J.loopRequired)!==null&&H!==void 0?H:h,loopEnum:(W=J.loopEnum)!==null&&W!==void 0?W:h,meta:(B=J.meta)!==null&&B!==void 0?B:!0,messages:(F=J.messages)!==null&&F!==void 0?F:!0,inlineRefs:(q=J.inlineRefs)!==null&&q!==void 0?q:!0,schemaId:(ne=J.schemaId)!==null&&ne!==void 0?ne:"$id",addUsedSchema:(re=J.addUsedSchema)!==null&&re!==void 0?re:!0,validateSchema:(oe=J.validateSchema)!==null&&oe!==void 0?oe:!0,validateFormats:(se=J.validateFormats)!==null&&se!==void 0?se:!0,unicodeRegExp:(le=J.unicodeRegExp)!==null&&le!==void 0?le:!0,int32range:(fe=J.int32range)!==null&&fe!==void 0?fe:!0,uriResolver:Ve}}class v{constructor(z={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,z=this.opts={...z,...b(z)};const{es5:ee,lines:Y}=this.opts.code;this.scope=new l.ValueScope({scope:{},prefixes:_,es5:ee,lines:Y}),this.logger=O(z.logger);const A=z.validateFormats;z.validateFormats=!1,this.RULES=(0,r.getRules)(),w.call(this,y,z,"NOT SUPPORTED"),w.call(this,m,z,"DEPRECATED","warn"),this._metaOpts=k.call(this),z.formats&&R.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),z.keywords&&S.call(this,z.keywords),typeof z.meta=="object"&&this.addMetaSchema(z.meta),P.call(this),z.validateFormats=A}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:z,meta:ee,schemaId:Y}=this.opts;let A=u;Y==="id"&&(A={...u},A.id=A.$id,delete A.$id),ee&&z&&this.addMetaSchema(A,A[Y],!1)}defaultMeta(){const{meta:z,schemaId:ee}=this.opts;return this.opts.defaultMeta=typeof z=="object"?z[ee]||z:void 0}validate(z,ee){let Y;if(typeof z=="string"){if(Y=this.getSchema(z),!Y)throw new Error(`no schema with key or ref "${z}"`)}else Y=this.compile(z);const A=Y(ee);return"$async"in Y||(this.errors=Y.errors),A}compile(z,ee){const Y=this._addSchema(z,ee);return Y.validate||this._compileSchemaEnv(Y)}compileAsync(z,ee){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:Y}=this.opts;return A.call(this,z,ee);async function A(te,I){await $.call(this,te.$schema);const E=this._addSchema(te,I);return E.validate||U.call(this,E)}async function $(te){te&&!this.getSchema(te)&&await A.call(this,{$ref:te},!0)}async function U(te){try{return this._compileSchemaEnv(te)}catch(I){if(!(I instanceof n.default))throw I;return N.call(this,I),await G.call(this,I.missingSchema),U.call(this,te)}}function N({missingSchema:te,missingRef:I}){if(this.refs[te])throw new Error(`AnySchema ${te} is loaded but ${I} cannot be resolved`)}async function G(te){const I=await j.call(this,te);this.refs[te]||await $.call(this,I.$schema),this.refs[te]||this.addSchema(I,te,ee)}async function j(te){const I=this._loading[te];if(I)return I;try{return await(this._loading[te]=Y(te))}finally{delete this._loading[te]}}}addSchema(z,ee,Y,A=this.opts.validateSchema){if(Array.isArray(z)){for(const U of z)this.addSchema(U,void 0,Y,A);return this}let $;if(typeof z=="object"){const{schemaId:U}=this.opts;if($=z[U],$!==void 0&&typeof $!="string")throw new Error(`schema ${U} must be string`)}return ee=(0,i.normalizeId)(ee||$),this._checkUnique(ee),this.schemas[ee]=this._addSchema(z,Y,ee,A,!0),this}addMetaSchema(z,ee,Y=this.opts.validateSchema){return this.addSchema(z,ee,!0,Y),this}validateSchema(z,ee){if(typeof z=="boolean")return!0;let Y;if(Y=z.$schema,Y!==void 0&&typeof Y!="string")throw new Error("$schema must be a string");if(Y=Y||this.opts.defaultMeta||this.defaultMeta(),!Y)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const A=this.validate(Y,z);if(!A&&ee){const $="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error($);else throw new Error($)}return A}getSchema(z){let ee;for(;typeof(ee=x.call(this,z))=="string";)z=ee;if(ee===void 0){const{schemaId:Y}=this.opts,A=new o.SchemaEnv({schema:{},schemaId:Y});if(ee=o.resolveSchema.call(this,A,z),!ee)return;this.refs[z]=ee}return ee.validate||this._compileSchemaEnv(ee)}removeSchema(z){if(z instanceof RegExp)return this._removeAllSchemas(this.schemas,z),this._removeAllSchemas(this.refs,z),this;switch(typeof z){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const ee=x.call(this,z);return typeof ee=="object"&&this._cache.delete(ee.schema),delete this.schemas[z],delete this.refs[z],this}case"object":{const ee=z;this._cache.delete(ee);let Y=z[this.opts.schemaId];return Y&&(Y=(0,i.normalizeId)(Y),delete this.schemas[Y],delete this.refs[Y]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(z){for(const ee of z)this.addKeyword(ee);return this}addKeyword(z,ee){let Y;if(typeof z=="string")Y=z,typeof ee=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),ee.keyword=Y);else if(typeof z=="object"&&ee===void 0){if(ee=z,Y=ee.keyword,Array.isArray(Y)&&!Y.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(V.call(this,Y,ee),!ee)return(0,d.eachItem)(Y,$=>Q.call(this,$)),this;Z.call(this,ee);const A={...ee,type:(0,c.getJSONTypes)(ee.type),schemaType:(0,c.getJSONTypes)(ee.schemaType)};return(0,d.eachItem)(Y,A.type.length===0?$=>Q.call(this,$,A):$=>A.type.forEach(U=>Q.call(this,$,A,U))),this}getKeyword(z){const ee=this.RULES.all[z];return typeof ee=="object"?ee.definition:!!ee}removeKeyword(z){const{RULES:ee}=this;delete ee.keywords[z],delete ee.all[z];for(const Y of ee.rules){const A=Y.rules.findIndex($=>$.keyword===z);A>=0&&Y.rules.splice(A,1)}return this}addFormat(z,ee){return typeof ee=="string"&&(ee=new RegExp(ee)),this.formats[z]=ee,this}errorsText(z=this.errors,{separator:ee=", ",dataVar:Y="data"}={}){return!z||z.length===0?"No errors":z.map(A=>`${Y}${A.instancePath} ${A.message}`).reduce((A,$)=>A+ee+$)}$dataMetaSchema(z,ee){const Y=this.RULES.all;z=JSON.parse(JSON.stringify(z));for(const A of ee){const $=A.split("/").slice(1);let U=z;for(const N of $)U=U[N];for(const N in Y){const G=Y[N];if(typeof G!="object")continue;const{$data:j}=G.definition,te=U[N];j&&te&&(U[N]=ie(te))}}return z}_removeAllSchemas(z,ee){for(const Y in z){const A=z[Y];(!ee||ee.test(Y))&&(typeof A=="string"?delete z[Y]:A&&!A.meta&&(this._cache.delete(A.schema),delete z[Y]))}}_addSchema(z,ee,Y,A=this.opts.validateSchema,$=this.opts.addUsedSchema){let U;const{schemaId:N}=this.opts;if(typeof z=="object")U=z[N];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof z!="boolean")throw new Error("schema must be object or boolean")}let G=this._cache.get(z);if(G!==void 0)return G;Y=(0,i.normalizeId)(U||Y);const j=i.getSchemaRefs.call(this,z,Y);return G=new o.SchemaEnv({schema:z,schemaId:N,meta:ee,baseId:Y,localRefs:j}),this._cache.set(G.schema,G),$&&!Y.startsWith("#")&&(Y&&this._checkUnique(Y),this.refs[Y]=G),A&&this.validateSchema(z,!0),G}_checkUnique(z){if(this.schemas[z]||this.refs[z])throw new Error(`schema with key or id "${z}" already exists`)}_compileSchemaEnv(z){if(z.meta?this._compileMetaSchema(z):o.compileSchema.call(this,z),!z.validate)throw new Error("ajv implementation error");return z.validate}_compileMetaSchema(z){const ee=this.opts;this.opts=this._metaOpts;try{o.compileSchema.call(this,z)}finally{this.opts=ee}}}v.ValidationError=a.default,v.MissingRefError=n.default,e.default=v;function w(J,z,ee,Y="error"){for(const A in J){const $=A;$ in z&&this.logger[Y](`${ee}: option ${A}. ${J[$]}`)}}function x(J){return J=(0,i.normalizeId)(J),this.schemas[J]||this.refs[J]}function P(){const J=this.opts.schemas;if(J)if(Array.isArray(J))this.addSchema(J);else for(const z in J)this.addSchema(J[z],z)}function R(){for(const J in this.opts.formats){const z=this.opts.formats[J];z&&this.addFormat(J,z)}}function S(J){if(Array.isArray(J)){this.addVocabulary(J);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const z in J){const ee=J[z];ee.keyword||(ee.keyword=z),this.addKeyword(ee)}}function k(){const J={...this.opts};for(const z of g)delete J[z];return J}const T={log(){},warn(){},error(){}};function O(J){if(J===!1)return T;if(J===void 0)return console;if(J.log&&J.warn&&J.error)return J;throw new Error("logger must implement log, warn and error methods")}const D=/^[a-z_$][a-z0-9_$:-]*$/i;function V(J,z){const{RULES:ee}=this;if((0,d.eachItem)(J,Y=>{if(ee.keywords[Y])throw new Error(`Keyword ${Y} is already defined`);if(!D.test(Y))throw new Error(`Keyword ${Y} has invalid name`)}),!!z&&z.$data&&!("code"in z||"validate"in z))throw new Error('$data keyword must have "code" or "validate" function')}function Q(J,z,ee){var Y;const A=z?.post;if(ee&&A)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:$}=this;let U=A?$.post:$.rules.find(({type:G})=>G===ee);if(U||(U={type:ee,rules:[]},$.rules.push(U)),$.keywords[J]=!0,!z)return;const N={keyword:J,definition:{...z,type:(0,c.getJSONTypes)(z.type),schemaType:(0,c.getJSONTypes)(z.schemaType)}};z.before?X.call(this,U,N,z.before):U.rules.push(N),$.all[J]=N,(Y=z.implements)===null||Y===void 0||Y.forEach(G=>this.addKeyword(G))}function X(J,z,ee){const Y=J.rules.findIndex(A=>A.keyword===ee);Y>=0?J.rules.splice(Y,0,z):(J.rules.push(z),this.logger.warn(`rule ${ee} is not defined`))}function Z(J){let{metaSchema:z}=J;z!==void 0&&(J.$data&&this.opts.$data&&(z=ie(z)),J.validateSchema=this.compile(z,!0))}const K={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function ie(J){return{anyOf:[J,K]}}})(ao)),ao}var Za={},en={},tn={},ac;function iw(){if(ac)return tn;ac=1,Object.defineProperty(tn,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return tn.default=e,tn}var cs={},nc;function lw(){if(nc)return cs;nc=1,Object.defineProperty(cs,"__esModule",{value:!0}),cs.callRef=cs.getValidate=void 0;const e=Pr(),t=Ot(),s=Te(),a=Es(),n=li(),r=Ee(),o={keyword:"$ref",schemaType:"string",code(c){const{gen:d,schema:u,it:p}=c,{baseId:f,schemaEnv:g,validateName:_,opts:y,self:m}=p,{root:h}=g;if((u==="#"||u==="#/")&&f===h.baseId)return v();const b=n.resolveRef.call(m,h,f,u);if(b===void 0)throw new e.default(p.opts.uriResolver,f,u);if(b instanceof n.SchemaEnv)return w(b);return x(b);function v(){if(g===h)return i(c,_,g,g.$async);const P=d.scopeValue("root",{ref:h});return i(c,(0,s._)`${P}.validate`,h,h.$async)}function w(P){const R=l(c,P);i(c,R,P,P.$async)}function x(P){const R=d.scopeValue("schema",y.code.source===!0?{ref:P,code:(0,s.stringify)(P)}:{ref:P}),S=d.name("valid"),k=c.subschema({schema:P,dataTypes:[],schemaPath:s.nil,topSchemaRef:R,errSchemaPath:u},S);c.mergeEvaluated(k),c.ok(S)}}};function l(c,d){const{gen:u}=c;return d.validate?u.scopeValue("validate",{ref:d.validate}):(0,s._)`${u.scopeValue("wrapper",{ref:d})}.validate`}cs.getValidate=l;function i(c,d,u,p){const{gen:f,it:g}=c,{allErrors:_,schemaEnv:y,opts:m}=g,h=m.passContext?a.default.this:s.nil;p?b():v();function b(){if(!y.$async)throw new Error("async schema referenced by sync schema");const P=f.let("valid");f.try(()=>{f.code((0,s._)`await ${(0,t.callValidateCode)(c,d,h)}`),x(d),_||f.assign(P,!0)},R=>{f.if((0,s._)`!(${R} instanceof ${g.ValidationError})`,()=>f.throw(R)),w(R),_||f.assign(P,!1)}),c.ok(P)}function v(){c.result((0,t.callValidateCode)(c,d,h),()=>x(d),()=>w(d))}function w(P){const R=(0,s._)`${P}.errors`;f.assign(a.default.vErrors,(0,s._)`${a.default.vErrors} === null ? ${R} : ${a.default.vErrors}.concat(${R})`),f.assign(a.default.errors,(0,s._)`${a.default.vErrors}.length`)}function x(P){var R;if(!g.opts.unevaluated)return;const S=(R=u?.validate)===null||R===void 0?void 0:R.evaluated;if(g.props!==!0)if(S&&!S.dynamicProps)S.props!==void 0&&(g.props=r.mergeEvaluated.props(f,S.props,g.props));else{const k=f.var("props",(0,s._)`${P}.evaluated.props`);g.props=r.mergeEvaluated.props(f,k,g.props,s.Name)}if(g.items!==!0)if(S&&!S.dynamicItems)S.items!==void 0&&(g.items=r.mergeEvaluated.items(f,S.items,g.items));else{const k=f.var("items",(0,s._)`${P}.evaluated.items`);g.items=r.mergeEvaluated.items(f,k,g.items,s.Name)}}}return cs.callRef=i,cs.default=o,cs}var rc;function cw(){if(rc)return en;rc=1,Object.defineProperty(en,"__esModule",{value:!0});const e=iw(),t=lw(),s=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return en.default=s,en}var sn={},an={},oc;function dw(){if(oc)return an;oc=1,Object.defineProperty(an,"__esModule",{value:!0});const e=Te(),t=e.operators,s={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},a={message:({keyword:r,schemaCode:o})=>(0,e.str)`must be ${s[r].okStr} ${o}`,params:({keyword:r,schemaCode:o})=>(0,e._)`{comparison: ${s[r].okStr}, limit: ${o}}`},n={keyword:Object.keys(s),type:"number",schemaType:"number",$data:!0,error:a,code(r){const{keyword:o,data:l,schemaCode:i}=r;r.fail$data((0,e._)`${l} ${s[o].fail} ${i} || isNaN(${l})`)}};return an.default=n,an}var nn={},ic;function uw(){if(ic)return nn;ic=1,Object.defineProperty(nn,"__esModule",{value:!0});const e=Te(),s={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:a})=>(0,e.str)`must be multiple of ${a}`,params:({schemaCode:a})=>(0,e._)`{multipleOf: ${a}}`},code(a){const{gen:n,data:r,schemaCode:o,it:l}=a,i=l.opts.multipleOfPrecision,c=n.let("res"),d=i?(0,e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${i}`:(0,e._)`${c} !== parseInt(${c})`;a.fail$data((0,e._)`(${o} === 0 || (${c} = ${r}/${o}, ${d}))`)}};return nn.default=s,nn}var rn={},on={},lc;function pw(){if(lc)return on;lc=1,Object.defineProperty(on,"__esModule",{value:!0});function e(t){const s=t.length;let a=0,n=0,r;for(;n<s;)a++,r=t.charCodeAt(n++),r>=55296&&r<=56319&&n<s&&(r=t.charCodeAt(n),(r&64512)===56320&&n++);return a}return on.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',on}var cc;function fw(){if(cc)return rn;cc=1,Object.defineProperty(rn,"__esModule",{value:!0});const e=Te(),t=Ee(),s=pw(),n={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:r,schemaCode:o}){const l=r==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${l} than ${o} characters`},params:({schemaCode:r})=>(0,e._)`{limit: ${r}}`},code(r){const{keyword:o,data:l,schemaCode:i,it:c}=r,d=o==="maxLength"?e.operators.GT:e.operators.LT,u=c.opts.unicode===!1?(0,e._)`${l}.length`:(0,e._)`${(0,t.useFunc)(r.gen,s.default)}(${l})`;r.fail$data((0,e._)`${u} ${d} ${i}`)}};return rn.default=n,rn}var ln={},dc;function hw(){if(dc)return ln;dc=1,Object.defineProperty(ln,"__esModule",{value:!0});const e=Ot(),t=Ee(),s=Te(),n={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:r})=>(0,s.str)`must match pattern "${r}"`,params:({schemaCode:r})=>(0,s._)`{pattern: ${r}}`},code(r){const{gen:o,data:l,$data:i,schema:c,schemaCode:d,it:u}=r,p=u.opts.unicodeRegExp?"u":"";if(i){const{regExp:f}=u.opts.code,g=f.code==="new RegExp"?(0,s._)`new RegExp`:(0,t.useFunc)(o,f),_=o.let("valid");o.try(()=>o.assign(_,(0,s._)`${g}(${d}, ${p}).test(${l})`),()=>o.assign(_,!1)),r.fail$data((0,s._)`!${_}`)}else{const f=(0,e.usePattern)(r,c);r.fail$data((0,s._)`!${f}.test(${l})`)}}};return ln.default=n,ln}var cn={},uc;function mw(){if(uc)return cn;uc=1,Object.defineProperty(cn,"__esModule",{value:!0});const e=Te(),s={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:n}){const r=a==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${r} than ${n} properties`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:n,data:r,schemaCode:o}=a,l=n==="maxProperties"?e.operators.GT:e.operators.LT;a.fail$data((0,e._)`Object.keys(${r}).length ${l} ${o}`)}};return cn.default=s,cn}var dn={},pc;function gw(){if(pc)return dn;pc=1,Object.defineProperty(dn,"__esModule",{value:!0});const e=Ot(),t=Te(),s=Ee(),n={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:r}})=>(0,t.str)`must have required property '${r}'`,params:({params:{missingProperty:r}})=>(0,t._)`{missingProperty: ${r}}`},code(r){const{gen:o,schema:l,schemaCode:i,data:c,$data:d,it:u}=r,{opts:p}=u;if(!d&&l.length===0)return;const f=l.length>=p.loopRequired;if(u.allErrors?g():_(),p.strictRequired){const h=r.parentSchema.properties,{definedProperties:b}=r.it;for(const v of l)if(h?.[v]===void 0&&!b.has(v)){const w=u.schemaEnv.baseId+u.errSchemaPath,x=`required property "${v}" is not defined at "${w}" (strictRequired)`;(0,s.checkStrictMode)(u,x,u.opts.strictRequired)}}function g(){if(f||d)r.block$data(t.nil,y);else for(const h of l)(0,e.checkReportMissingProp)(r,h)}function _(){const h=o.let("missing");if(f||d){const b=o.let("valid",!0);r.block$data(b,()=>m(h,b)),r.ok(b)}else o.if((0,e.checkMissingProp)(r,l,h)),(0,e.reportMissingProp)(r,h),o.else()}function y(){o.forOf("prop",i,h=>{r.setParams({missingProperty:h}),o.if((0,e.noPropertyInData)(o,c,h,p.ownProperties),()=>r.error())})}function m(h,b){r.setParams({missingProperty:h}),o.forOf(h,i,()=>{o.assign(b,(0,e.propertyInData)(o,c,h,p.ownProperties)),o.if((0,t.not)(b),()=>{r.error(),o.break()})},t.nil)}}};return dn.default=n,dn}var un={},fc;function bw(){if(fc)return un;fc=1,Object.defineProperty(un,"__esModule",{value:!0});const e=Te(),s={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:n}){const r=a==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${r} than ${n} items`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:n,data:r,schemaCode:o}=a,l=n==="maxItems"?e.operators.GT:e.operators.LT;a.fail$data((0,e._)`${r}.length ${l} ${o}`)}};return un.default=s,un}var pn={},fn={},hc;function ci(){if(hc)return fn;hc=1,Object.defineProperty(fn,"__esModule",{value:!0});const e=Ku();return e.code='require("ajv/dist/runtime/equal").default',fn.default=e,fn}var mc;function _w(){if(mc)return pn;mc=1,Object.defineProperty(pn,"__esModule",{value:!0});const e=rr(),t=Te(),s=Ee(),a=ci(),r={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i:o,j:l}})=>(0,t.str)`must NOT have duplicate items (items ## ${l} and ${o} are identical)`,params:({params:{i:o,j:l}})=>(0,t._)`{i: ${o}, j: ${l}}`},code(o){const{gen:l,data:i,$data:c,schema:d,parentSchema:u,schemaCode:p,it:f}=o;if(!c&&!d)return;const g=l.let("valid"),_=u.items?(0,e.getSchemaTypes)(u.items):[];o.block$data(g,y,(0,t._)`${p} === false`),o.ok(g);function y(){const v=l.let("i",(0,t._)`${i}.length`),w=l.let("j");o.setParams({i:v,j:w}),l.assign(g,!0),l.if((0,t._)`${v} > 1`,()=>(m()?h:b)(v,w))}function m(){return _.length>0&&!_.some(v=>v==="object"||v==="array")}function h(v,w){const x=l.name("item"),P=(0,e.checkDataTypes)(_,x,f.opts.strictNumbers,e.DataType.Wrong),R=l.const("indices",(0,t._)`{}`);l.for((0,t._)`;${v}--;`,()=>{l.let(x,(0,t._)`${i}[${v}]`),l.if(P,(0,t._)`continue`),_.length>1&&l.if((0,t._)`typeof ${x} == "string"`,(0,t._)`${x} += "_"`),l.if((0,t._)`typeof ${R}[${x}] == "number"`,()=>{l.assign(w,(0,t._)`${R}[${x}]`),o.error(),l.assign(g,!1).break()}).code((0,t._)`${R}[${x}] = ${v}`)})}function b(v,w){const x=(0,s.useFunc)(l,a.default),P=l.name("outer");l.label(P).for((0,t._)`;${v}--;`,()=>l.for((0,t._)`${w} = ${v}; ${w}--;`,()=>l.if((0,t._)`${x}(${i}[${v}], ${i}[${w}])`,()=>{o.error(),l.assign(g,!1).break(P)})))}}};return pn.default=r,pn}var hn={},gc;function vw(){if(gc)return hn;gc=1,Object.defineProperty(hn,"__esModule",{value:!0});const e=Te(),t=Ee(),s=ci(),n={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:r})=>(0,e._)`{allowedValue: ${r}}`},code(r){const{gen:o,data:l,$data:i,schemaCode:c,schema:d}=r;i||d&&typeof d=="object"?r.fail$data((0,e._)`!${(0,t.useFunc)(o,s.default)}(${l}, ${c})`):r.fail((0,e._)`${d} !== ${l}`)}};return hn.default=n,hn}var mn={},bc;function yw(){if(bc)return mn;bc=1,Object.defineProperty(mn,"__esModule",{value:!0});const e=Te(),t=Ee(),s=ci(),n={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:r})=>(0,e._)`{allowedValues: ${r}}`},code(r){const{gen:o,data:l,$data:i,schema:c,schemaCode:d,it:u}=r;if(!i&&c.length===0)throw new Error("enum must have non-empty array");const p=c.length>=u.opts.loopEnum;let f;const g=()=>f??(f=(0,t.useFunc)(o,s.default));let _;if(p||i)_=o.let("valid"),r.block$data(_,y);else{if(!Array.isArray(c))throw new Error("ajv implementation error");const h=o.const("vSchema",d);_=(0,e.or)(...c.map((b,v)=>m(h,v)))}r.pass(_);function y(){o.assign(_,!1),o.forOf("v",d,h=>o.if((0,e._)`${g()}(${l}, ${h})`,()=>o.assign(_,!0).break()))}function m(h,b){const v=c[b];return typeof v=="object"&&v!==null?(0,e._)`${g()}(${l}, ${h}[${b}])`:(0,e._)`${l} === ${v}`}}};return mn.default=n,mn}var _c;function ww(){if(_c)return sn;_c=1,Object.defineProperty(sn,"__esModule",{value:!0});const e=dw(),t=uw(),s=fw(),a=hw(),n=mw(),r=gw(),o=bw(),l=_w(),i=vw(),c=yw(),d=[e.default,t.default,s.default,a.default,n.default,r.default,o.default,l.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},i.default,c.default];return sn.default=d,sn}var gn={},qs={},vc;function Wu(){if(vc)return qs;vc=1,Object.defineProperty(qs,"__esModule",{value:!0}),qs.validateAdditionalItems=void 0;const e=Te(),t=Ee(),a={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:r}})=>(0,e.str)`must NOT have more than ${r} items`,params:({params:{len:r}})=>(0,e._)`{limit: ${r}}`},code(r){const{parentSchema:o,it:l}=r,{items:i}=o;if(!Array.isArray(i)){(0,t.checkStrictMode)(l,'"additionalItems" is ignored when "items" is not an array of schemas');return}n(r,i)}};function n(r,o){const{gen:l,schema:i,data:c,keyword:d,it:u}=r;u.items=!0;const p=l.const("len",(0,e._)`${c}.length`);if(i===!1)r.setParams({len:o.length}),r.pass((0,e._)`${p} <= ${o.length}`);else if(typeof i=="object"&&!(0,t.alwaysValidSchema)(u,i)){const g=l.var("valid",(0,e._)`${p} <= ${o.length}`);l.if((0,e.not)(g),()=>f(g)),r.ok(g)}function f(g){l.forRange("i",o.length,p,_=>{r.subschema({keyword:d,dataProp:_,dataPropType:t.Type.Num},g),u.allErrors||l.if((0,e.not)(g),()=>l.break())})}}return qs.validateAdditionalItems=n,qs.default=a,qs}var bn={},Vs={},yc;function Ju(){if(yc)return Vs;yc=1,Object.defineProperty(Vs,"__esModule",{value:!0}),Vs.validateTuple=void 0;const e=Te(),t=Ee(),s=Ot(),a={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(r){const{schema:o,it:l}=r;if(Array.isArray(o))return n(r,"additionalItems",o);l.items=!0,!(0,t.alwaysValidSchema)(l,o)&&r.ok((0,s.validateArray)(r))}};function n(r,o,l=r.schema){const{gen:i,parentSchema:c,data:d,keyword:u,it:p}=r;_(c),p.opts.unevaluated&&l.length&&p.items!==!0&&(p.items=t.mergeEvaluated.items(i,l.length,p.items));const f=i.name("valid"),g=i.const("len",(0,e._)`${d}.length`);l.forEach((y,m)=>{(0,t.alwaysValidSchema)(p,y)||(i.if((0,e._)`${g} > ${m}`,()=>r.subschema({keyword:u,schemaProp:m,dataProp:m},f)),r.ok(f))});function _(y){const{opts:m,errSchemaPath:h}=p,b=l.length,v=b===y.minItems&&(b===y.maxItems||y[o]===!1);if(m.strictTuples&&!v){const w=`"${u}" is ${b}-tuple, but minItems or maxItems/${o} are not specified or different at path "${h}"`;(0,t.checkStrictMode)(p,w,m.strictTuples)}}}return Vs.validateTuple=n,Vs.default=a,Vs}var wc;function xw(){if(wc)return bn;wc=1,Object.defineProperty(bn,"__esModule",{value:!0});const e=Ju(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:s=>(0,e.validateTuple)(s,"items")};return bn.default=t,bn}var _n={},xc;function Tw(){if(xc)return _n;xc=1,Object.defineProperty(_n,"__esModule",{value:!0});const e=Te(),t=Ee(),s=Ot(),a=Wu(),r={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:o}})=>(0,e.str)`must NOT have more than ${o} items`,params:({params:{len:o}})=>(0,e._)`{limit: ${o}}`},code(o){const{schema:l,parentSchema:i,it:c}=o,{prefixItems:d}=i;c.items=!0,!(0,t.alwaysValidSchema)(c,l)&&(d?(0,a.validateAdditionalItems)(o,d):o.ok((0,s.validateArray)(o)))}};return _n.default=r,_n}var vn={},Tc;function Sw(){if(Tc)return vn;Tc=1,Object.defineProperty(vn,"__esModule",{value:!0});const e=Te(),t=Ee(),a={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:n,max:r}})=>r===void 0?(0,e.str)`must contain at least ${n} valid item(s)`:(0,e.str)`must contain at least ${n} and no more than ${r} valid item(s)`,params:({params:{min:n,max:r}})=>r===void 0?(0,e._)`{minContains: ${n}}`:(0,e._)`{minContains: ${n}, maxContains: ${r}}`},code(n){const{gen:r,schema:o,parentSchema:l,data:i,it:c}=n;let d,u;const{minContains:p,maxContains:f}=l;c.opts.next?(d=p===void 0?1:p,u=f):d=1;const g=r.const("len",(0,e._)`${i}.length`);if(n.setParams({min:d,max:u}),u===void 0&&d===0){(0,t.checkStrictMode)(c,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(u!==void 0&&d>u){(0,t.checkStrictMode)(c,'"minContains" > "maxContains" is always invalid'),n.fail();return}if((0,t.alwaysValidSchema)(c,o)){let b=(0,e._)`${g} >= ${d}`;u!==void 0&&(b=(0,e._)`${b} && ${g} <= ${u}`),n.pass(b);return}c.items=!0;const _=r.name("valid");u===void 0&&d===1?m(_,()=>r.if(_,()=>r.break())):d===0?(r.let(_,!0),u!==void 0&&r.if((0,e._)`${i}.length > 0`,y)):(r.let(_,!1),y()),n.result(_,()=>n.reset());function y(){const b=r.name("_valid"),v=r.let("count",0);m(b,()=>r.if(b,()=>h(v)))}function m(b,v){r.forRange("i",0,g,w=>{n.subschema({keyword:"contains",dataProp:w,dataPropType:t.Type.Num,compositeRule:!0},b),v()})}function h(b){r.code((0,e._)`${b}++`),u===void 0?r.if((0,e._)`${b} >= ${d}`,()=>r.assign(_,!0).break()):(r.if((0,e._)`${b} > ${u}`,()=>r.assign(_,!1).break()),d===1?r.assign(_,!0):r.if((0,e._)`${b} >= ${d}`,()=>r.assign(_,!0)))}}};return vn.default=a,vn}var fo={},Sc;function Ew(){return Sc||(Sc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=Te(),s=Ee(),a=Ot();e.error={message:({params:{property:i,depsCount:c,deps:d}})=>{const u=c===1?"property":"properties";return(0,t.str)`must have ${u} ${d} when property ${i} is present`},params:({params:{property:i,depsCount:c,deps:d,missingProperty:u}})=>(0,t._)`{property: ${i},
    missingProperty: ${u},
    depsCount: ${c},
    deps: ${d}}`};const n={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(i){const[c,d]=r(i);o(i,c),l(i,d)}};function r({schema:i}){const c={},d={};for(const u in i){if(u==="__proto__")continue;const p=Array.isArray(i[u])?c:d;p[u]=i[u]}return[c,d]}function o(i,c=i.schema){const{gen:d,data:u,it:p}=i;if(Object.keys(c).length===0)return;const f=d.let("missing");for(const g in c){const _=c[g];if(_.length===0)continue;const y=(0,a.propertyInData)(d,u,g,p.opts.ownProperties);i.setParams({property:g,depsCount:_.length,deps:_.join(", ")}),p.allErrors?d.if(y,()=>{for(const m of _)(0,a.checkReportMissingProp)(i,m)}):(d.if((0,t._)`${y} && (${(0,a.checkMissingProp)(i,_,f)})`),(0,a.reportMissingProp)(i,f),d.else())}}e.validatePropertyDeps=o;function l(i,c=i.schema){const{gen:d,data:u,keyword:p,it:f}=i,g=d.name("valid");for(const _ in c)(0,s.alwaysValidSchema)(f,c[_])||(d.if((0,a.propertyInData)(d,u,_,f.opts.ownProperties),()=>{const y=i.subschema({keyword:p,schemaProp:_},g);i.mergeValidEvaluated(y,g)},()=>d.var(g,!0)),i.ok(g))}e.validateSchemaDeps=l,e.default=n})(fo)),fo}var yn={},Ec;function kw(){if(Ec)return yn;Ec=1,Object.defineProperty(yn,"__esModule",{value:!0});const e=Te(),t=Ee(),a={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:n})=>(0,e._)`{propertyName: ${n.propertyName}}`},code(n){const{gen:r,schema:o,data:l,it:i}=n;if((0,t.alwaysValidSchema)(i,o))return;const c=r.name("valid");r.forIn("key",l,d=>{n.setParams({propertyName:d}),n.subschema({keyword:"propertyNames",data:d,dataTypes:["string"],propertyName:d,compositeRule:!0},c),r.if((0,e.not)(c),()=>{n.error(!0),i.allErrors||r.break()})}),n.ok(c)}};return yn.default=a,yn}var wn={},kc;function Xu(){if(kc)return wn;kc=1,Object.defineProperty(wn,"__esModule",{value:!0});const e=Ot(),t=Te(),s=Es(),a=Ee(),r={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:o})=>(0,t._)`{additionalProperty: ${o.additionalProperty}}`},code(o){const{gen:l,schema:i,parentSchema:c,data:d,errsCount:u,it:p}=o;if(!u)throw new Error("ajv implementation error");const{allErrors:f,opts:g}=p;if(p.props=!0,g.removeAdditional!=="all"&&(0,a.alwaysValidSchema)(p,i))return;const _=(0,e.allSchemaProperties)(c.properties),y=(0,e.allSchemaProperties)(c.patternProperties);m(),o.ok((0,t._)`${u} === ${s.default.errors}`);function m(){l.forIn("key",d,x=>{!_.length&&!y.length?v(x):l.if(h(x),()=>v(x))})}function h(x){let P;if(_.length>8){const R=(0,a.schemaRefOrVal)(p,c.properties,"properties");P=(0,e.isOwnProperty)(l,R,x)}else _.length?P=(0,t.or)(..._.map(R=>(0,t._)`${x} === ${R}`)):P=t.nil;return y.length&&(P=(0,t.or)(P,...y.map(R=>(0,t._)`${(0,e.usePattern)(o,R)}.test(${x})`))),(0,t.not)(P)}function b(x){l.code((0,t._)`delete ${d}[${x}]`)}function v(x){if(g.removeAdditional==="all"||g.removeAdditional&&i===!1){b(x);return}if(i===!1){o.setParams({additionalProperty:x}),o.error(),f||l.break();return}if(typeof i=="object"&&!(0,a.alwaysValidSchema)(p,i)){const P=l.name("valid");g.removeAdditional==="failing"?(w(x,P,!1),l.if((0,t.not)(P),()=>{o.reset(),b(x)})):(w(x,P),f||l.if((0,t.not)(P),()=>l.break()))}}function w(x,P,R){const S={keyword:"additionalProperties",dataProp:x,dataPropType:a.Type.Str};R===!1&&Object.assign(S,{compositeRule:!0,createErrors:!1,allErrors:!1}),o.subschema(S,P)}}};return wn.default=r,wn}var xn={},Pc;function Pw(){if(Pc)return xn;Pc=1,Object.defineProperty(xn,"__esModule",{value:!0});const e=kr(),t=Ot(),s=Ee(),a=Xu(),n={keyword:"properties",type:"object",schemaType:"object",code(r){const{gen:o,schema:l,parentSchema:i,data:c,it:d}=r;d.opts.removeAdditional==="all"&&i.additionalProperties===void 0&&a.default.code(new e.KeywordCxt(d,a.default,"additionalProperties"));const u=(0,t.allSchemaProperties)(l);for(const y of u)d.definedProperties.add(y);d.opts.unevaluated&&u.length&&d.props!==!0&&(d.props=s.mergeEvaluated.props(o,(0,s.toHash)(u),d.props));const p=u.filter(y=>!(0,s.alwaysValidSchema)(d,l[y]));if(p.length===0)return;const f=o.name("valid");for(const y of p)g(y)?_(y):(o.if((0,t.propertyInData)(o,c,y,d.opts.ownProperties)),_(y),d.allErrors||o.else().var(f,!0),o.endIf()),r.it.definedProperties.add(y),r.ok(f);function g(y){return d.opts.useDefaults&&!d.compositeRule&&l[y].default!==void 0}function _(y){r.subschema({keyword:"properties",schemaProp:y,dataProp:y},f)}}};return xn.default=n,xn}var Tn={},Ac;function Aw(){if(Ac)return Tn;Ac=1,Object.defineProperty(Tn,"__esModule",{value:!0});const e=Ot(),t=Te(),s=Ee(),a=Ee(),n={keyword:"patternProperties",type:"object",schemaType:"object",code(r){const{gen:o,schema:l,data:i,parentSchema:c,it:d}=r,{opts:u}=d,p=(0,e.allSchemaProperties)(l),f=p.filter(v=>(0,s.alwaysValidSchema)(d,l[v]));if(p.length===0||f.length===p.length&&(!d.opts.unevaluated||d.props===!0))return;const g=u.strictSchema&&!u.allowMatchingProperties&&c.properties,_=o.name("valid");d.props!==!0&&!(d.props instanceof t.Name)&&(d.props=(0,a.evaluatedPropsToName)(o,d.props));const{props:y}=d;m();function m(){for(const v of p)g&&h(v),d.allErrors?b(v):(o.var(_,!0),b(v),o.if(_))}function h(v){for(const w in g)new RegExp(v).test(w)&&(0,s.checkStrictMode)(d,`property ${w} matches pattern ${v} (use allowMatchingProperties)`)}function b(v){o.forIn("key",i,w=>{o.if((0,t._)`${(0,e.usePattern)(r,v)}.test(${w})`,()=>{const x=f.includes(v);x||r.subschema({keyword:"patternProperties",schemaProp:v,dataProp:w,dataPropType:a.Type.Str},_),d.opts.unevaluated&&y!==!0?o.assign((0,t._)`${y}[${w}]`,!0):!x&&!d.allErrors&&o.if((0,t.not)(_),()=>o.break())})})}}};return Tn.default=n,Tn}var Sn={},Cc;function Cw(){if(Cc)return Sn;Cc=1,Object.defineProperty(Sn,"__esModule",{value:!0});const e=Ee(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(s){const{gen:a,schema:n,it:r}=s;if((0,e.alwaysValidSchema)(r,n)){s.fail();return}const o=a.name("valid");s.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},o),s.failResult(o,()=>s.reset(),()=>s.error())},error:{message:"must NOT be valid"}};return Sn.default=t,Sn}var En={},Oc;function Ow(){if(Oc)return En;Oc=1,Object.defineProperty(En,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:Ot().validateUnion,error:{message:"must match a schema in anyOf"}};return En.default=t,En}var kn={},$c;function $w(){if($c)return kn;$c=1,Object.defineProperty(kn,"__esModule",{value:!0});const e=Te(),t=Ee(),a={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:n})=>(0,e._)`{passingSchemas: ${n.passing}}`},code(n){const{gen:r,schema:o,parentSchema:l,it:i}=n;if(!Array.isArray(o))throw new Error("ajv implementation error");if(i.opts.discriminator&&l.discriminator)return;const c=o,d=r.let("valid",!1),u=r.let("passing",null),p=r.name("_valid");n.setParams({passing:u}),r.block(f),n.result(d,()=>n.reset(),()=>n.error(!0));function f(){c.forEach((g,_)=>{let y;(0,t.alwaysValidSchema)(i,g)?r.var(p,!0):y=n.subschema({keyword:"oneOf",schemaProp:_,compositeRule:!0},p),_>0&&r.if((0,e._)`${p} && ${d}`).assign(d,!1).assign(u,(0,e._)`[${u}, ${_}]`).else(),r.if(p,()=>{r.assign(d,!0),r.assign(u,_),y&&n.mergeEvaluated(y,e.Name)})})}}};return kn.default=a,kn}var Pn={},Mc;function Mw(){if(Mc)return Pn;Mc=1,Object.defineProperty(Pn,"__esModule",{value:!0});const e=Ee(),t={keyword:"allOf",schemaType:"array",code(s){const{gen:a,schema:n,it:r}=s;if(!Array.isArray(n))throw new Error("ajv implementation error");const o=a.name("valid");n.forEach((l,i)=>{if((0,e.alwaysValidSchema)(r,l))return;const c=s.subschema({keyword:"allOf",schemaProp:i},o);s.ok(o),s.mergeEvaluated(c)})}};return Pn.default=t,Pn}var An={},Lc;function Lw(){if(Lc)return An;Lc=1,Object.defineProperty(An,"__esModule",{value:!0});const e=Te(),t=Ee(),a={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:r})=>(0,e.str)`must match "${r.ifClause}" schema`,params:({params:r})=>(0,e._)`{failingKeyword: ${r.ifClause}}`},code(r){const{gen:o,parentSchema:l,it:i}=r;l.then===void 0&&l.else===void 0&&(0,t.checkStrictMode)(i,'"if" without "then" and "else" is ignored');const c=n(i,"then"),d=n(i,"else");if(!c&&!d)return;const u=o.let("valid",!0),p=o.name("_valid");if(f(),r.reset(),c&&d){const _=o.let("ifClause");r.setParams({ifClause:_}),o.if(p,g("then",_),g("else",_))}else c?o.if(p,g("then")):o.if((0,e.not)(p),g("else"));r.pass(u,()=>r.error(!0));function f(){const _=r.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},p);r.mergeEvaluated(_)}function g(_,y){return()=>{const m=r.subschema({keyword:_},p);o.assign(u,p),r.mergeValidEvaluated(m,u),y?o.assign(y,(0,e._)`${_}`):r.setParams({ifClause:_})}}}};function n(r,o){const l=r.schema[o];return l!==void 0&&!(0,t.alwaysValidSchema)(r,l)}return An.default=a,An}var Cn={},Rc;function Rw(){if(Rc)return Cn;Rc=1,Object.defineProperty(Cn,"__esModule",{value:!0});const e=Ee(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:s,parentSchema:a,it:n}){a.if===void 0&&(0,e.checkStrictMode)(n,`"${s}" without "if" is ignored`)}};return Cn.default=t,Cn}var Dc;function Dw(){if(Dc)return gn;Dc=1,Object.defineProperty(gn,"__esModule",{value:!0});const e=Wu(),t=xw(),s=Ju(),a=Tw(),n=Sw(),r=Ew(),o=kw(),l=Xu(),i=Pw(),c=Aw(),d=Cw(),u=Ow(),p=$w(),f=Mw(),g=Lw(),_=Rw();function y(m=!1){const h=[d.default,u.default,p.default,f.default,g.default,_.default,o.default,l.default,r.default,i.default,c.default];return m?h.push(t.default,a.default):h.push(e.default,s.default),h.push(n.default),h}return gn.default=y,gn}var On={},$n={},Nc;function Nw(){if(Nc)return $n;Nc=1,Object.defineProperty($n,"__esModule",{value:!0});const e=Te(),s={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:a})=>(0,e.str)`must match format "${a}"`,params:({schemaCode:a})=>(0,e._)`{format: ${a}}`},code(a,n){const{gen:r,data:o,$data:l,schema:i,schemaCode:c,it:d}=a,{opts:u,errSchemaPath:p,schemaEnv:f,self:g}=d;if(!u.validateFormats)return;l?_():y();function _(){const m=r.scopeValue("formats",{ref:g.formats,code:u.code.formats}),h=r.const("fDef",(0,e._)`${m}[${c}]`),b=r.let("fType"),v=r.let("format");r.if((0,e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`,()=>r.assign(b,(0,e._)`${h}.type || "string"`).assign(v,(0,e._)`${h}.validate`),()=>r.assign(b,(0,e._)`"string"`).assign(v,h)),a.fail$data((0,e.or)(w(),x()));function w(){return u.strictSchema===!1?e.nil:(0,e._)`${c} && !${v}`}function x(){const P=f.$async?(0,e._)`(${h}.async ? await ${v}(${o}) : ${v}(${o}))`:(0,e._)`${v}(${o})`,R=(0,e._)`(typeof ${v} == "function" ? ${P} : ${v}.test(${o}))`;return(0,e._)`${v} && ${v} !== true && ${b} === ${n} && !${R}`}}function y(){const m=g.formats[i];if(!m){w();return}if(m===!0)return;const[h,b,v]=x(m);h===n&&a.pass(P());function w(){if(u.strictSchema===!1){g.logger.warn(R());return}throw new Error(R());function R(){return`unknown format "${i}" ignored in schema at path "${p}"`}}function x(R){const S=R instanceof RegExp?(0,e.regexpCode)(R):u.code.formats?(0,e._)`${u.code.formats}${(0,e.getProperty)(i)}`:void 0,k=r.scopeValue("formats",{key:i,ref:R,code:S});return typeof R=="object"&&!(R instanceof RegExp)?[R.type||"string",R.validate,(0,e._)`${k}.validate`]:["string",R,k]}function P(){if(typeof m=="object"&&!(m instanceof RegExp)&&m.async){if(!f.$async)throw new Error("async format in sync schema");return(0,e._)`await ${v}(${o})`}return typeof b=="function"?(0,e._)`${v}(${o})`:(0,e._)`${v}.test(${o})`}}}};return $n.default=s,$n}var Ic;function Iw(){if(Ic)return On;Ic=1,Object.defineProperty(On,"__esModule",{value:!0});const t=[Nw().default];return On.default=t,On}var Ms={},Bc;function Bw(){return Bc||(Bc=1,Object.defineProperty(Ms,"__esModule",{value:!0}),Ms.contentVocabulary=Ms.metadataVocabulary=void 0,Ms.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],Ms.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),Ms}var Fc;function Fw(){if(Fc)return Za;Fc=1,Object.defineProperty(Za,"__esModule",{value:!0});const e=cw(),t=ww(),s=Dw(),a=Iw(),n=Bw(),r=[e.default,t.default,(0,s.default)(),a.default,n.metadataVocabulary,n.contentVocabulary];return Za.default=r,Za}var Mn={},fa={},zc;function zw(){if(zc)return fa;zc=1,Object.defineProperty(fa,"__esModule",{value:!0}),fa.DiscrError=void 0;var e;return(function(t){t.Tag="tag",t.Mapping="mapping"})(e||(fa.DiscrError=e={})),fa}var Hc;function Hw(){if(Hc)return Mn;Hc=1,Object.defineProperty(Mn,"__esModule",{value:!0});const e=Te(),t=zw(),s=li(),a=Pr(),n=Ee(),o={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:l,tagName:i}})=>l===t.DiscrError.Tag?`tag "${i}" must be string`:`value of tag "${i}" must be in oneOf`,params:({params:{discrError:l,tag:i,tagName:c}})=>(0,e._)`{error: ${l}, tag: ${c}, tagValue: ${i}}`},code(l){const{gen:i,data:c,schema:d,parentSchema:u,it:p}=l,{oneOf:f}=u;if(!p.opts.discriminator)throw new Error("discriminator: requires discriminator option");const g=d.propertyName;if(typeof g!="string")throw new Error("discriminator: requires propertyName");if(d.mapping)throw new Error("discriminator: mapping is not supported");if(!f)throw new Error("discriminator: requires oneOf keyword");const _=i.let("valid",!1),y=i.const("tag",(0,e._)`${c}${(0,e.getProperty)(g)}`);i.if((0,e._)`typeof ${y} == "string"`,()=>m(),()=>l.error(!1,{discrError:t.DiscrError.Tag,tag:y,tagName:g})),l.ok(_);function m(){const v=b();i.if(!1);for(const w in v)i.elseIf((0,e._)`${y} === ${w}`),i.assign(_,h(v[w]));i.else(),l.error(!1,{discrError:t.DiscrError.Mapping,tag:y,tagName:g}),i.endIf()}function h(v){const w=i.name("valid"),x=l.subschema({keyword:"oneOf",schemaProp:v},w);return l.mergeEvaluated(x,e.Name),w}function b(){var v;const w={},x=R(u);let P=!0;for(let T=0;T<f.length;T++){let O=f[T];if(O?.$ref&&!(0,n.schemaHasRulesButRef)(O,p.self.RULES)){const V=O.$ref;if(O=s.resolveRef.call(p.self,p.schemaEnv.root,p.baseId,V),O instanceof s.SchemaEnv&&(O=O.schema),O===void 0)throw new a.default(p.opts.uriResolver,p.baseId,V)}const D=(v=O?.properties)===null||v===void 0?void 0:v[g];if(typeof D!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${g}"`);P=P&&(x||R(O)),S(D,T)}if(!P)throw new Error(`discriminator: "${g}" must be required`);return w;function R({required:T}){return Array.isArray(T)&&T.includes(g)}function S(T,O){if(T.const)k(T.const,O);else if(T.enum)for(const D of T.enum)k(D,O);else throw new Error(`discriminator: "properties/${g}" must have "const" or "enum"`)}function k(T,O){if(typeof T!="string"||T in w)throw new Error(`discriminator: "${g}" values must be unique strings`);w[T]=O}}}};return Mn.default=o,Mn}const jw="http://json-schema.org/draft-07/schema#",Uw="http://json-schema.org/draft-07/schema#",qw="Core schema meta-schema",Vw={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},Gw=["object","boolean"],Kw={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},Yw={$schema:jw,$id:Uw,title:qw,definitions:Vw,type:Gw,properties:Kw,default:!0};var jc;function Ww(){return jc||(jc=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const s=ow(),a=Fw(),n=Hw(),r=Yw,o=["/properties"],l="http://json-schema.org/draft-07/schema";class i extends s.default{_addVocabularies(){super._addVocabularies(),a.default.forEach(g=>this.addVocabulary(g)),this.opts.discriminator&&this.addKeyword(n.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const g=this.opts.$data?this.$dataMetaSchema(r,o):r;this.addMetaSchema(g,l,!1),this.refs["http://json-schema.org/schema"]=l}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(l)?l:void 0)}}t.Ajv=i,e.exports=t=i,e.exports.Ajv=i,Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var c=kr();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return c.KeywordCxt}});var d=Te();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return d._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return d.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return d.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return d.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return d.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return d.CodeGen}});var u=ii();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return u.default}});var p=Pr();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return p.default}})})(Ya,Ya.exports)),Ya.exports}var Jw=Ww();const Xw=Au(Jw),Qw={$id:"gameModeRules",type:"object",required:["betTypes","requiredBetTypes","maxBetsPerType","maxBetsTotal","minBetsTotal","stakeRule","stakeMin","allowPartialSubmit","allowBetModification","lockOnFirstBet","oneBetPerMatchPerType"],properties:{betTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},minItems:1,description:"Allowed bet types for this game mode"},requiredBetTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},description:"Bet types the user MUST place. Empty = no requirement."},maxBetsPerType:{type:"integer",minimum:-1,description:"Max bets per bet type per match. -1 = unlimited."},maxBetsTotal:{type:"integer",minimum:-1,description:"Max total bets across all matches. -1 = unlimited."},minBetsTotal:{type:"integer",minimum:0,description:"Min total bets required before submission. 0 = none."},stakeRule:{type:"string",enum:["FREE","SPEND_ALL","MIN_MAX"],description:"FREE = any amount | SPEND_ALL = must use entire TD$ | MIN_MAX = within range"},stakeMin:{type:["number","null"],minimum:0,description:"Min stake per bet. null = no minimum."},stakeMax:{type:["number","null"],minimum:0,description:"Max stake per bet. null = no maximum."},allowPartialSubmit:{type:"boolean",description:"Can user submit with incomplete lineup?"},allowBetModification:{type:"boolean",description:"Can user change/remove bets after placing?"},lockOnFirstBet:{type:"boolean",description:"Does placing first bet lock user into the tournament?"},oneBetPerMatchPerType:{type:"boolean",description:"Restrict to one bet per match per bet type?"}},additionalProperties:!1},Zw={$id:"gameModeScoring",type:"object",required:["method","rankBy","penalizeMissing"],properties:{method:{type:"string",enum:["PAYOUT_SUM","PROFIT","WIN_RATE","CUSTOM"],description:"Primary scoring method"},rankBy:{type:"array",items:{type:"string"},minItems:1,description:"Ordered tiebreaker fields"},bonuses:{type:"array",items:{type:"object",properties:{condition:{type:"string"},points:{type:"number"},label:{type:"string"}}},description:"Bonus scoring rules"},penalizeMissing:{type:"boolean",description:"Penalize users who did not place all required bets?"}},additionalProperties:!1},Qu=new Xw({allErrors:!0}),Uc=Qu.compile(Qw),qc=Qu.compile(Zw),e2=e=>{const t=[];Uc(e.rules)||Uc.errors.forEach(r=>{t.push(`rules${r.instancePath}: ${r.message}`)}),qc(e.scoring)||qc.errors.forEach(r=>{t.push(`scoring${r.instancePath}: ${r.message}`)});const n=e.rules;return n.requiredBetTypes.forEach(r=>{n.betTypes.includes(r)||t.push(`requiredBetTypes contains "${r}" which is not in betTypes`)}),n.stakeRule==="MIN_MAX"&&n.stakeMin==null&&n.stakeMax==null&&t.push("stakeRule is MIN_MAX but neither stakeMin nor stakeMax is set"),n.minBetsTotal>0&&n.requiredBetTypes.length>n.minBetsTotal&&t.push(`requiredBetTypes (${n.requiredBetTypes.length}) exceeds minBetsTotal (${n.minBetsTotal})`),{valid:t.length===0,errors:t}},t2=e=>{const t=e.rules,s=e.scoring;return{"mode.id":e.id,"mode.label":e.label,"mode.description":e.description,"rules.betTypes":t.betTypes.join(", "),"rules.requiredBetTypes":t.requiredBetTypes.length>0?t.requiredBetTypes.join(", "):"(none)","rules.maxBetsPerType":t.maxBetsPerType===-1?"Unlimited":String(t.maxBetsPerType),"rules.maxBetsTotal":t.maxBetsTotal===-1?"Unlimited":String(t.maxBetsTotal),"rules.minBetsTotal":String(t.minBetsTotal),"rules.stakeRule":t.stakeRule,"rules.stakeMin":t.stakeMin!=null?String(t.stakeMin):"(none)","rules.stakeMax":t.stakeMax!=null?String(t.stakeMax):"(none)","rules.allowPartialSubmit":String(t.allowPartialSubmit),"rules.allowBetModification":String(t.allowBetModification),"rules.lockOnFirstBet":String(t.lockOnFirstBet),"rules.oneBetPerMatchPerType":String(t.oneBetPerMatchPerType),"scoring.method":s.method,"scoring.rankBy":s.rankBy.join(", "),"scoring.bonuses":s.bonuses.length>0?JSON.stringify(s.bonuses):"(none)","scoring.penalizeMissing":String(s.penalizeMissing),"ui.badge":e.getBadge()?`${e.getBadge().label} (${e.getBadge().color})`:"(none)","ui.emptyStateText":e.getEmptyStateText()}},or={DEFAULT:new Cl,DEFAULT_FORMAT:new Cl,SET_IT_AND_FORGET_IT:new q1},Vc=e=>or[e]||or.DEFAULT,s2=()=>Object.keys(or),a2=()=>{const e={};return Object.entries(or).forEach(([t,s])=>{e[t]=e2(s)}),e};typeof window<"u"&&(window.GameMode={get:Vc,modes:s2,validate:a2,dump:e=>t2(Vc(e))});class n2 extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name","data-active-count","data-td-dollars"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}handleLogoClick(t){t.preventDefault(),de.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),de.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}handleCreateContestClick(t){t.preventDefault(),de.publish("WC.APP.HEAD_TOP.CREATE_CONTEST",JSON.stringify({timestamp:Date.now()}))}render(){const t=Me.isDark,s=this.getAttribute("data-user-name")||"Guest",a=this.getAttribute("data-active-count")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),r=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString();this.shadowRoot.innerHTML=`
      <style>
        ${He()}
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
    `;const o=this.shadowRoot.querySelector("#logoLink"),l=this.shadowRoot.querySelector("#profileIcon"),i=this.shadowRoot.querySelector("#createContestBtn");o&&o.addEventListener("click",c=>this.handleLogoClick(c)),l&&l.addEventListener("click",c=>this.handleProfileClick(c)),i&&i.addEventListener("click",c=>this.handleCreateContestClick(c))}}customElements.define("bma-app-head-top",n2);class r2 extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count","data-private-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),de.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=Me.isDark,s=[{name:"head_mid_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS"},{name:"head_mid_private",caption:"Bet Max Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE"},{name:"head_mid_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],a=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,r=o=>{const l=this.selectedTab===o.name;let i="";return o.name==="head_mid_tourneys"?i=`<span class="nav-badge">${a}</span>`:o.name==="head_mid_private"&&(i=`<span class="nav-badge">${n}</span>`),`
        <div
          class="nav-item ${l?"nav-selected":"nav-unselected"}"
          data-tab="${o.name}"
          role="button"
          tabindex="0"
          aria-label="${o.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${o.iconVar}"></div>
            ${i}
          </div>
          <span class="nav-caption">${o.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${He()}
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
        ${s.map(o=>r(o)).join("")}
      </div>
    `,s.forEach(o=>{const l=this.shadowRoot.querySelector(`[data-tab="${o.name}"]`);l&&(l.addEventListener("click",()=>this.handleTabClick(o.name,o.topic)),l.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleTabClick(o.name,o.topic))}))})}}customElements.define("bma-app-head-mid",r2);class o2 extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,a){if(this.shadowRoot&&s!==a){if(t==="data-selected-chip"){if(this.selectedChip=a||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,s){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),de.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(s=>{const a=s.getAttribute("data-chip")===this.selectedChip;s.classList.toggle("chip-selected",a),s.classList.toggle("chip-unselected",!a)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(".head-sports-container"),n=this.shadowRoot?.querySelector("#navPrev"),r=this.shadowRoot?.querySelector("#navNext");if(!t||!s||!a||!n||!r)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),l=o>8,i=t.scrollLeft<=4,c=t.scrollLeft>=o-4;a.classList.toggle("rail-has-overflow",l),t.classList.toggle("has-scroll",l),s.classList.toggle("has-overflow",l),s.classList.toggle("has-left-overflow",l&&!i),s.classList.toggle("has-right-overflow",l&&!c),n.classList.toggle("nav-disabled",!l||i),r.classList.toggle("nav-disabled",!l||c),n.setAttribute("aria-disabled",String(!l||i)),r.setAttribute("aria-disabled",String(!l||c)),n.tabIndex=!l||i?-1:0,r.tabIndex=!l||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!s||!a)return;const n=s.getBoundingClientRect(),r=a.getBoundingClientRect(),o=t.scrollWidth-t.clientWidth;if(r.left>=n.left&&r.right<=n.right)return;const l=12;let i;r.left<n.left?i=t.scrollLeft+(r.left-n.left)-l:i=t.scrollLeft+(r.right-n.right)+l,i=Math.max(0,Math.min(i,o)),!(Math.abs(t.scrollLeft-i)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:i,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const s=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=s-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const s=[...t.querySelectorAll(".sport-chip")];if(!s.length)return;const a=Math.max(0,t.scrollWidth-t.clientWidth);if(a<=8)return;const n=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,r=t.scrollLeft;let o=r,l=Number.POSITIVE_INFINITY;s.forEach(i=>{const c=Math.max(0,Math.min(i.offsetLeft-n,a)),d=Math.max(0,Math.min(i.offsetLeft+i.offsetWidth-t.clientWidth+n,a));[c,d].forEach(u=>{const p=Math.abs(u-r);p<l&&(l=p,o=u)})}),!(l<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",a=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=a.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),de.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const s=()=>{if(!this.isPointerDown)return;const a=Date.now()-this.dragStartTime,n=this.dragDistance>10||this.dragDistance>4&&a>180;this.isPointerDown=!1,t.style.cursor="grab",n&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",s),t.addEventListener("mouseup",s),t.addEventListener("mousemove",a=>{if(!this.isPointerDown)return;a.preventDefault();const r=(a.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(r)),t.scrollLeft=this.dragStartScrollLeft-r}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=Me.isDark,n=(xe().appMeta?.sports||[]).filter(f=>f.active===!0),r=["NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],o=[...n].sort((f,g)=>{const _=f.title||f.description||"",y=g.title||g.description||"",m=r.indexOf(_),h=r.indexOf(y);return m!==-1&&h!==-1?m-h:m!==-1?-1:h!==-1?1:_.toLowerCase().localeCompare(y.toLowerCase())}),l=o.findIndex(f=>(f.title||f.description)==="NFL");if(l!==-1){const[f]=o.splice(l,1);let g=-1;o.forEach((y,m)=>{String(y.key||"").startsWith("soccer_fifa_world_cup")&&(g=m)});const _=g!==-1?g+1:o.length;o.splice(_,0,f)}const i=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...o],c=f=>{const g=this.selectedChip===f.key,_=f.key==="all";let y="";return _?y='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':y=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`,`
        <div
          class="sport-chip ${g?"chip-selected":"chip-unselected"}"
          data-chip="${f.key}"
          role="button"
          tabindex="0"
          aria-label="${f.description||f.title}"
        >
          <div class="chip-circle">
            ${y}
          </div>
          <span class="chip-title">${f.title||f.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${He()}
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
    `,i.forEach(f=>{const g=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const d=this.shadowRoot.querySelector("#navPrev"),u=this.shadowRoot.querySelector("#navNext");d&&d.addEventListener("click",()=>this.scrollToPrev()),u&&u.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const p=this.shadowRoot.querySelector(".chips-container");p&&(p.scrollLeft=0),requestAnimationFrame(()=>{p&&(p.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",o2);class i2 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-matches","data-sync-theme"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){s!==a&&this.render()}get matches(){const t=this.getAttribute("data-matches");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ge.find(a=>a.key===t)?.group||"default"}_parseScoreboard(t){const s=t.scoreboard_data;if(!s)return null;try{return typeof s=="string"?JSON.parse(s):s}catch{return null}}_getMatchDisplay(t){const s=this._parseScoreboard(t)||{},a=parseInt(s.home_score||0),n=parseInt(s.away_score||0),r=s.period||0,o=String(s.time_remaining||"").trim(),l=o.toLowerCase(),i=a>0||n>0||r>0,c=String(t.status||"").toUpperCase()==="COMPLETED"||l==="final",d=t.scheduled_at||t.start_time||"";let u=!1;if(d){const h=d.includes("Z")||/[+-]\d{2}:\d{2}$/.test(d),b=new Date(h?d:d+"Z").getTime();isNaN(b)||(u=b<=Date.now())}const f=!c&&(i||o&&l!=="scheduled"&&l!=="final"||u),g=t.home_team_id||t.home_team||"Home",_=t.away_team_id||t.away_team||"Away";if(c)return{homeName:g,awayName:_,homeScore:a,awayScore:n,statusLabel:"FINAL",statusClass:"final",showScores:!0};if(f)return{homeName:g,awayName:_,homeScore:a,awayScore:n,statusLabel:o&&l!=="in progress"?o:"LIVE",statusClass:"live",showScores:!0};const y=t.scheduled_at||t.start_time||t.status_time;let m="UPCOMING";if(y)try{const h=y.includes("Z")||/[+-]\d{2}:\d{2}$/.test(y),b=new Date(h?y:y+"Z");isNaN(b.getTime())||(m=b.toLocaleString(void 0,{weekday:"short",hour:"numeric",minute:"2-digit"}))}catch{}return{homeName:g,awayName:_,homeScore:0,awayScore:0,statusLabel:m,statusClass:"upcoming",showScores:!1}}render(){const t=Date.now(),s=720*60*1e3,a=1440*60*1e3,r=this.matches.map(c=>({match:c,display:this._getMatchDisplay(c)})).filter(c=>c.display!==null).filter(c=>{const d=c.display.statusClass;if(d==="live")return!0;const u=new Date(c.match.scheduled_at||c.match.status_time||0).getTime();return u?d==="final"?t-u<=s:d==="upcoming"?u-t<=a&&u>=t:!1:!1}),o={live:0,final:1,upcoming:2};r.sort((c,d)=>{const u=o[c.display.statusClass]??9,p=o[d.display.statusClass]??9;if(u!==p)return u-p;const f=new Date(c.match.scheduled_at||c.match.status_time||0).getTime(),g=new Date(d.match.scheduled_at||d.match.status_time||0).getTime();return c.display.statusClass==="upcoming"?f-g:g-f});const l=r.slice(0,40);if(l.length===0){this.shadowRoot.innerHTML="";return}const i=l.map(({match:c,display:d})=>{const u=this._sportGroup(c.sport_id),p=f=>d.showScores?`<span class="score-pill__score">${f}</span>`:"";return`
                <button class="score-pill score-pill--${d.statusClass}" data-match-guid="${c.guid||c.id||""}" type="button">
                    <bma-sport-icon data-sport-group="${u}"></bma-sport-icon>
                    <span class="score-pill__teams">
                        <span class="score-pill__team">${this._abbr(d.awayName)}</span>
                        ${p(d.awayScore)}
                    </span>
                    <span class="score-pill__sep">@</span>
                    <span class="score-pill__teams">
                        <span class="score-pill__team">${this._abbr(d.homeName)}</span>
                        ${p(d.homeScore)}
                    </span>
                    <span class="score-pill__status score-pill__status--${d.statusClass}">
                        ${d.statusClass==="live"?'<span class="live-dot"></span>':""}
                        ${d.statusLabel}
                    </span>
                </button>
            `}).join("");this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
        `,this.shadowRoot.querySelectorAll(".score-pill").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.matchGuid;de.publish("SCORES.MATCH_CLICK",JSON.stringify({matchGuid:d,timestamp:Date.now()}))})})}_abbr(t){if(!t)return"";const s=String(t);if(s.length<=14)return s;const a=s.split(" ");return a.length>1?a[a.length-1].slice(0,14):s.slice(0,14)}}customElements.define("bma-scores-banner",i2);class l2 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}_doLogout(){de.publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()}))}render(){let t="";try{t=xe().appSession?.session_app?.version||""}catch{}this.shadowRoot.innerHTML=`
            <style>
                ${He()}
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
        `;const s=this.shadowRoot.querySelector(".foot-logout");s&&s.addEventListener("click",()=>this._doLogout())}}customElements.define("bma-app-foot-branded",l2);const c2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',d2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',u2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',p2='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class f2 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=s[0],n=a.short_title||"Match Info N/A",o=Object.keys(a).filter(k=>k!=="short_title")[0]||"Unknown Team",l=a[o]||{},i=l.odds??"N/A",c=(l.type||"N/A").toUpperCase(),d=parseFloat(l.stake||0),u=parseFloat(l.payout||0),p=l.reconciled!==!1,f=.01;let g,_,y;p?u>d+f?(g="won",_="Won",y=d2):u<d-f?(g="lost",_="Lost",y=u2):(g="push",_="Push",y=p2):(g="pending",_="Pending",y=c2);let m=o;if(l.type==="spread"&&l.point!==void 0){const k=parseFloat(l.point),T=k>0?`+${k}`:`${k}`;m=`${o} ${T}`}else l.type==="total"&&l.point!==void 0&&(m=`${l.team==="over"?"Over":"Under"} ${l.point}`);const h=k=>`TD$ ${k.toFixed(2)}`,b=u-d;let v,w;switch(g){case"pending":v=b>0?`+${h(b)}`:h(0),w="To win";break;case"won":v=`+${h(b)}`,w="Profit";break;case"lost":v=`-${h(d)}`,w="Lost";break;case"push":v=h(d),w="Returned";break}const x=parseInt(i,10),P=Number.isFinite(x)&&x>0?`+${x}`:`${i}`,R=t.status_time?aa.formatDateLocal(t.status_time):"",S=g==="pending"?"Placed":"Settled";this.shadowRoot.innerHTML=`
      <style>
        ${He()}

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
          <span class="pill-icon">${y}</span>
          <span class="pill-label">${_}</span>
        </div>
        <div class="body">
          <div class="header">
            <div class="match-desc">${n}</div>
          </div>
          <div class="middle">
            <div class="selection">${m}</div>
            <div class="odds">${P}</div>
            <div class="side-meta">
              <div class="bet-type">${c}</div>
              <div class="stake">${h(d)} stake</div>
            </div>
          </div>
          <div class="footer">
            <div class="hero">${v}</div>
            <div class="footer-meta">
              <div class="hero-sublabel">${w}</div>
              <div class="timestamp">${S} · ${R}</div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",f2);sa.init();window.BrandManager=sa;const Gc=`
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Gc)}):document.body.insertAdjacentHTML("beforeend",Gc);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const Ar=Ch(U1);Ar.config.devtools=!1;Ar.use(Mh());Ar.use(ka);Ar.mount("#app");(function(){let t=!1;const s=o=>{if(!t)return;const l=o.target;l&&typeof l.closest=="function"&&l.closest("neodigm-sodapop")||o.preventDefault()},a=()=>{const o=t,l=!!document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']");if(t=l,document.body.style.touchAction=l?"none":"",document.documentElement.style.overscrollBehavior=l?"none":"",o&&!l){const i=document.querySelector("bma-app-foot");i&&i.setAttribute("data-selected-item","foot_lobby");const c=document.querySelector("bma-app-head-mid");c&&c.setAttribute("data-selected-tab","head_mid_lobby")}},n=new MutationObserver(a),r=()=>{n.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]}),document.addEventListener("touchmove",s,{passive:!1,capture:!0}),a()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})();document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
