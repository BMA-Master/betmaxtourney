(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const uc="modulepreload",pc=function(e){return"/bma-core/"+e},Wo={},Tn=function(t,a,s){let n=Promise.resolve();if(a&&a.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var r=c;document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),i=l?.nonce||l?.getAttribute("nonce");n=c(a.map(u=>{if(u=pc(u),u in Wo)return;Wo[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":uc,d||(f.as="script"),f.crossOrigin="",f.href=u,i&&f.setAttribute("nonce",i),document.head.appendChild(f),d)return new Promise((g,h)=>{f.addEventListener("load",g),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(l){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=l,window.dispatchEvent(i),!i.defaultPrevented)throw l}return n.then(l=>{for(const i of l||[])i.status==="rejected"&&o(i.reason);return t().catch(o)})};function xo(e){const t=Object.create(null);for(const a of e.split(","))t[a]=1;return a=>a in t}const Re={},Ra=[],Dt=()=>{},hi=()=>!1,nn=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),To=e=>e.startsWith("onUpdate:"),Ke=Object.assign,So=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},fc=Object.prototype.hasOwnProperty,Le=(e,t)=>fc.call(e,t),ye=Array.isArray,Ia=e=>bs(e)==="[object Map]",on=e=>bs(e)==="[object Set]",Jo=e=>bs(e)==="[object Date]",we=e=>typeof e=="function",Ue=e=>typeof e=="string",It=e=>typeof e=="symbol",De=e=>e!==null&&typeof e=="object",gi=e=>(De(e)||we(e))&&we(e.then)&&we(e.catch),mi=Object.prototype.toString,bs=e=>mi.call(e),hc=e=>bs(e).slice(8,-1),bi=e=>bs(e)==="[object Object]",ko=e=>Ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xa=xo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),rn=e=>{const t=Object.create(null);return(a=>t[a]||(t[a]=e(a)))},gc=/-\w/g,wt=rn(e=>e.replace(gc,t=>t.slice(1).toUpperCase())),mc=/\B([A-Z])/g,pa=rn(e=>e.replace(mc,"-$1").toLowerCase()),ln=rn(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sn=rn(e=>e?`on${ln(e)}`:""),ia=(e,t)=>!Object.is(e,t),Ms=(e,...t)=>{for(let a=0;a<e.length;a++)e[a](...t)},vi=(e,t,a,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:a})},Eo=e=>{const t=parseFloat(e);return isNaN(t)?e:t},bc=e=>{const t=Ue(e)?Number(e):NaN;return isNaN(t)?e:t};let Xo;const cn=()=>Xo||(Xo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function dn(e){if(ye(e)){const t={};for(let a=0;a<e.length;a++){const s=e[a],n=Ue(s)?wc(s):dn(s);if(n)for(const o in n)t[o]=n[o]}return t}else if(Ue(e)||De(e))return e}const vc=/;(?![^(]*\))/g,_c=/:([^]+)/,yc=/\/\*[^]*?\*\//g;function wc(e){const t={};return e.replace(yc,"").split(vc).forEach(a=>{if(a){const s=a.split(_c);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Ve(e){let t="";if(Ue(e))t=e;else if(ye(e))for(let a=0;a<e.length;a++){const s=Ve(e[a]);s&&(t+=s+" ")}else if(De(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}const xc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Tc=xo(xc);function _i(e){return!!e||e===""}function Sc(e,t){if(e.length!==t.length)return!1;let a=!0;for(let s=0;a&&s<e.length;s++)a=un(e[s],t[s]);return a}function un(e,t){if(e===t)return!0;let a=Jo(e),s=Jo(t);if(a||s)return a&&s?e.getTime()===t.getTime():!1;if(a=It(e),s=It(t),a||s)return e===t;if(a=ye(e),s=ye(t),a||s)return a&&s?Sc(e,t):!1;if(a=De(e),s=De(t),a||s){if(!a||!s)return!1;const n=Object.keys(e).length,o=Object.keys(t).length;if(n!==o)return!1;for(const r in e){const l=e.hasOwnProperty(r),i=t.hasOwnProperty(r);if(l&&!i||!l&&i||!un(e[r],t[r]))return!1}}return String(e)===String(t)}function yi(e,t){return e.findIndex(a=>un(a,t))}const wi=e=>!!(e&&e.__v_isRef===!0),me=e=>Ue(e)?e:e==null?"":ye(e)||De(e)&&(e.toString===mi||!we(e.toString))?wi(e)?me(e.value):JSON.stringify(e,xi,2):String(e),xi=(e,t)=>wi(t)?xi(e,t.value):Ia(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[s,n],o)=>(a[kn(s,o)+" =>"]=n,a),{})}:on(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>kn(a))}:It(t)?kn(t):De(t)&&!ye(t)&&!bi(t)?String(t):t,kn=(e,t="")=>{var a;return It(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};let Xe;class Ti{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!t&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].pause();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].resume();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].resume()}}run(t){if(this._active){const a=Xe;try{return Xe=this,t()}finally{Xe=a}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){this._on>0&&--this._on===0&&(Xe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(this.effects.length=0,a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Si(e){return new Ti(e)}function ki(){return Xe}function kc(e,t=!1){Xe&&Xe.cleanups.push(e)}let Ie;const En=new WeakSet;class Ei{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,En.has(this)&&(En.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ci(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qo(this),Pi(this);const t=Ie,a=xt;Ie=this,xt=!0;try{return this.fn()}finally{Oi(this),Ie=t,xt=a,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Po(t);this.deps=this.depsTail=void 0,Qo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?En.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Zn(this)&&this.run()}get dirty(){return Zn(this)}}let Ai=0,Qa,Za;function Ci(e,t=!1){if(e.flags|=8,t){e.next=Za,Za=e;return}e.next=Qa,Qa=e}function Ao(){Ai++}function Co(){if(--Ai>0)return;if(Za){let t=Za;for(Za=void 0;t;){const a=t.next;t.next=void 0,t.flags&=-9,t=a}}let e;for(;Qa;){let t=Qa;for(Qa=void 0;t;){const a=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=a}}if(e)throw e}function Pi(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Oi(e){let t,a=e.depsTail,s=a;for(;s;){const n=s.prevDep;s.version===-1?(s===a&&(a=n),Po(s),Ec(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}e.deps=t,e.depsTail=a}function Zn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Li(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Li(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ls)||(e.globalVersion=ls,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Zn(e))))return;e.flags|=2;const t=e.dep,a=Ie,s=xt;Ie=e,xt=!0;try{Pi(e);const n=e.fn(e._value);(t.version===0||ia(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{Ie=a,xt=s,Oi(e),e.flags&=-3}}function Po(e,t=!1){const{dep:a,prevSub:s,nextSub:n}=e;if(s&&(s.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=s,e.nextSub=void 0),a.subs===e&&(a.subs=s,!s&&a.computed)){a.computed.flags&=-5;for(let o=a.computed.deps;o;o=o.nextDep)Po(o,!0)}!t&&!--a.sc&&a.map&&a.map.delete(a.key)}function Ec(e){const{prevDep:t,nextDep:a}=e;t&&(t.nextDep=a,e.prevDep=void 0),a&&(a.prevDep=t,e.nextDep=void 0)}let xt=!0;const Mi=[];function Yt(){Mi.push(xt),xt=!1}function Kt(){const e=Mi.pop();xt=e===void 0?!0:e}function Qo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const a=Ie;Ie=void 0;try{t()}finally{Ie=a}}}let ls=0;class Ac{constructor(t,a){this.sub=t,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Oo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ie||!xt||Ie===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==Ie)a=this.activeLink=new Ac(Ie,this),Ie.deps?(a.prevDep=Ie.depsTail,Ie.depsTail.nextDep=a,Ie.depsTail=a):Ie.deps=Ie.depsTail=a,Di(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const s=a.nextDep;s.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=s),a.prevDep=Ie.depsTail,a.nextDep=void 0,Ie.depsTail.nextDep=a,Ie.depsTail=a,Ie.deps===a&&(Ie.deps=s)}return a}trigger(t){this.version++,ls++,this.notify(t)}notify(t){Ao();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Co()}}}function Di(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Di(s)}const a=e.dep.subs;a!==e&&(e.prevSub=a,a&&(a.nextSub=e)),e.dep.subs=e}}const zs=new WeakMap,Sa=Symbol(""),eo=Symbol(""),cs=Symbol("");function Qe(e,t,a){if(xt&&Ie){let s=zs.get(e);s||zs.set(e,s=new Map);let n=s.get(a);n||(s.set(a,n=new Oo),n.map=s,n.key=a),n.track()}}function Vt(e,t,a,s,n,o){const r=zs.get(e);if(!r){ls++;return}const l=i=>{i&&i.trigger()};if(Ao(),t==="clear")r.forEach(l);else{const i=ye(e),c=i&&ko(a);if(i&&a==="length"){const u=Number(s);r.forEach((d,p)=>{(p==="length"||p===cs||!It(p)&&p>=u)&&l(d)})}else switch((a!==void 0||r.has(void 0))&&l(r.get(a)),c&&l(r.get(cs)),t){case"add":i?c&&l(r.get("length")):(l(r.get(Sa)),Ia(e)&&l(r.get(eo)));break;case"delete":i||(l(r.get(Sa)),Ia(e)&&l(r.get(eo)));break;case"set":Ia(e)&&l(r.get(Sa));break}}Co()}function Cc(e,t){const a=zs.get(e);return a&&a.get(t)}function Aa(e){const t=Ee(e);return t===e?t:(Qe(t,"iterate",cs),_t(e)?t:t.map(We))}function pn(e){return Qe(e=Ee(e),"iterate",cs),e}const Pc={__proto__:null,[Symbol.iterator](){return An(this,Symbol.iterator,We)},concat(...e){return Aa(this).concat(...e.map(t=>ye(t)?Aa(t):t))},entries(){return An(this,"entries",e=>(e[1]=We(e[1]),e))},every(e,t){return $t(this,"every",e,t,void 0,arguments)},filter(e,t){return $t(this,"filter",e,t,a=>a.map(We),arguments)},find(e,t){return $t(this,"find",e,t,We,arguments)},findIndex(e,t){return $t(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return $t(this,"findLast",e,t,We,arguments)},findLastIndex(e,t){return $t(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return $t(this,"forEach",e,t,void 0,arguments)},includes(...e){return Cn(this,"includes",e)},indexOf(...e){return Cn(this,"indexOf",e)},join(e){return Aa(this).join(e)},lastIndexOf(...e){return Cn(this,"lastIndexOf",e)},map(e,t){return $t(this,"map",e,t,void 0,arguments)},pop(){return ja(this,"pop")},push(...e){return ja(this,"push",e)},reduce(e,...t){return Zo(this,"reduce",e,t)},reduceRight(e,...t){return Zo(this,"reduceRight",e,t)},shift(){return ja(this,"shift")},some(e,t){return $t(this,"some",e,t,void 0,arguments)},splice(...e){return ja(this,"splice",e)},toReversed(){return Aa(this).toReversed()},toSorted(e){return Aa(this).toSorted(e)},toSpliced(...e){return Aa(this).toSpliced(...e)},unshift(...e){return ja(this,"unshift",e)},values(){return An(this,"values",We)}};function An(e,t,a){const s=pn(e),n=s[t]();return s!==e&&!_t(e)&&(n._next=n.next,n.next=()=>{const o=n._next();return o.done||(o.value=a(o.value)),o}),n}const Oc=Array.prototype;function $t(e,t,a,s,n,o){const r=pn(e),l=r!==e&&!_t(e),i=r[t];if(i!==Oc[t]){const d=i.apply(e,o);return l?We(d):d}let c=a;r!==e&&(l?c=function(d,p){return a.call(this,We(d),p,e)}:a.length>2&&(c=function(d,p){return a.call(this,d,p,e)}));const u=i.call(r,c,s);return l&&n?n(u):u}function Zo(e,t,a,s){const n=pn(e);let o=a;return n!==e&&(_t(e)?a.length>3&&(o=function(r,l,i){return a.call(this,r,l,i,e)}):o=function(r,l,i){return a.call(this,r,We(l),i,e)}),n[t](o,...s)}function Cn(e,t,a){const s=Ee(e);Qe(s,"iterate",cs);const n=s[t](...a);return(n===-1||n===!1)&&Do(a[0])?(a[0]=Ee(a[0]),s[t](...a)):n}function ja(e,t,a=[]){Yt(),Ao();const s=Ee(e)[t].apply(e,a);return Co(),Kt(),s}const Lc=xo("__proto__,__v_isRef,__isVue"),Ri=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(It));function Mc(e){It(e)||(e=String(e));const t=Ee(this);return Qe(t,"has",e),t.hasOwnProperty(e)}class Ii{constructor(t=!1,a=!1){this._isReadonly=t,this._isShallow=a}get(t,a,s){if(a==="__v_skip")return t.__v_skip;const n=this._isReadonly,o=this._isShallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return o;if(a==="__v_raw")return s===(n?o?Uc:Fi:o?Bi:Ni).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=ye(t);if(!n){let i;if(r&&(i=Pc[a]))return i;if(a==="hasOwnProperty")return Mc}const l=Reflect.get(t,a,Ge(t)?t:s);if((It(a)?Ri.has(a):Lc(a))||(n||Qe(t,"get",a),o))return l;if(Ge(l)){const i=r&&ko(a)?l:l.value;return n&&De(i)?ao(i):i}return De(l)?n?ao(l):Ot(l):l}}class $i extends Ii{constructor(t=!1){super(!1,t)}set(t,a,s,n){let o=t[a];if(!this._isShallow){const i=ca(o);if(!_t(s)&&!ca(s)&&(o=Ee(o),s=Ee(s)),!ye(t)&&Ge(o)&&!Ge(s))return i||(o.value=s),!0}const r=ye(t)&&ko(a)?Number(a)<t.length:Le(t,a),l=Reflect.set(t,a,s,Ge(t)?t:n);return t===Ee(n)&&(r?ia(s,o)&&Vt(t,"set",a,s):Vt(t,"add",a,s)),l}deleteProperty(t,a){const s=Le(t,a);t[a];const n=Reflect.deleteProperty(t,a);return n&&s&&Vt(t,"delete",a,void 0),n}has(t,a){const s=Reflect.has(t,a);return(!It(a)||!Ri.has(a))&&Qe(t,"has",a),s}ownKeys(t){return Qe(t,"iterate",ye(t)?"length":Sa),Reflect.ownKeys(t)}}class Dc extends Ii{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const Rc=new $i,Ic=new Dc,$c=new $i(!0);const to=e=>e,xs=e=>Reflect.getPrototypeOf(e);function Nc(e,t,a){return function(...s){const n=this.__v_raw,o=Ee(n),r=Ia(o),l=e==="entries"||e===Symbol.iterator&&r,i=e==="keys"&&r,c=n[e](...s),u=a?to:t?Hs:We;return!t&&Qe(o,"iterate",i?eo:Sa),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:l?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Ts(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Bc(e,t){const a={get(n){const o=this.__v_raw,r=Ee(o),l=Ee(n);e||(ia(n,l)&&Qe(r,"get",n),Qe(r,"get",l));const{has:i}=xs(r),c=t?to:e?Hs:We;if(i.call(r,n))return c(o.get(n));if(i.call(r,l))return c(o.get(l));o!==r&&o.get(n)},get size(){const n=this.__v_raw;return!e&&Qe(Ee(n),"iterate",Sa),n.size},has(n){const o=this.__v_raw,r=Ee(o),l=Ee(n);return e||(ia(n,l)&&Qe(r,"has",n),Qe(r,"has",l)),n===l?o.has(n):o.has(n)||o.has(l)},forEach(n,o){const r=this,l=r.__v_raw,i=Ee(l),c=t?to:e?Hs:We;return!e&&Qe(i,"iterate",Sa),l.forEach((u,d)=>n.call(o,c(u),c(d),r))}};return Ke(a,e?{add:Ts("add"),set:Ts("set"),delete:Ts("delete"),clear:Ts("clear")}:{add(n){!t&&!_t(n)&&!ca(n)&&(n=Ee(n));const o=Ee(this);return xs(o).has.call(o,n)||(o.add(n),Vt(o,"add",n,n)),this},set(n,o){!t&&!_t(o)&&!ca(o)&&(o=Ee(o));const r=Ee(this),{has:l,get:i}=xs(r);let c=l.call(r,n);c||(n=Ee(n),c=l.call(r,n));const u=i.call(r,n);return r.set(n,o),c?ia(o,u)&&Vt(r,"set",n,o):Vt(r,"add",n,o),this},delete(n){const o=Ee(this),{has:r,get:l}=xs(o);let i=r.call(o,n);i||(n=Ee(n),i=r.call(o,n)),l&&l.call(o,n);const c=o.delete(n);return i&&Vt(o,"delete",n,void 0),c},clear(){const n=Ee(this),o=n.size!==0,r=n.clear();return o&&Vt(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{a[n]=Nc(n,e,t)}),a}function Lo(e,t){const a=Bc(e,t);return(s,n,o)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?s:Reflect.get(Le(a,n)&&n in s?a:s,n,o)}const Fc={get:Lo(!1,!1)},zc={get:Lo(!1,!0)},Hc={get:Lo(!0,!1)};const Ni=new WeakMap,Bi=new WeakMap,Fi=new WeakMap,Uc=new WeakMap;function Gc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function jc(e){return e.__v_skip||!Object.isExtensible(e)?0:Gc(hc(e))}function Ot(e){return ca(e)?e:Mo(e,!1,Rc,Fc,Ni)}function zi(e){return Mo(e,!1,$c,zc,Bi)}function ao(e){return Mo(e,!0,Ic,Hc,Fi)}function Mo(e,t,a,s,n){if(!De(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=jc(e);if(o===0)return e;const r=n.get(e);if(r)return r;const l=new Proxy(e,o===2?s:a);return n.set(e,l),l}function la(e){return ca(e)?la(e.__v_raw):!!(e&&e.__v_isReactive)}function ca(e){return!!(e&&e.__v_isReadonly)}function _t(e){return!!(e&&e.__v_isShallow)}function Do(e){return e?!!e.__v_raw:!1}function Ee(e){const t=e&&e.__v_raw;return t?Ee(t):e}function Ro(e){return!Le(e,"__v_skip")&&Object.isExtensible(e)&&vi(e,"__v_skip",!0),e}const We=e=>De(e)?Ot(e):e,Hs=e=>De(e)?ao(e):e;function Ge(e){return e?e.__v_isRef===!0:!1}function Ce(e){return Hi(e,!1)}function Vc(e){return Hi(e,!0)}function Hi(e,t){return Ge(e)?e:new qc(e,t)}class qc{constructor(t,a){this.dep=new Oo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?t:Ee(t),this._value=a?t:We(t),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(t){const a=this._rawValue,s=this.__v_isShallow||_t(t)||ca(t);t=s?t:Ee(t),ia(t,a)&&(this._rawValue=t,this._value=s?t:We(t),this.dep.trigger())}}function ct(e){return Ge(e)?e.value:e}const Yc={get:(e,t,a)=>t==="__v_raw"?e:ct(Reflect.get(e,t,a)),set:(e,t,a,s)=>{const n=e[t];return Ge(n)&&!Ge(a)?(n.value=a,!0):Reflect.set(e,t,a,s)}};function Ui(e){return la(e)?e:new Proxy(e,Yc)}function Kc(e){const t=ye(e)?new Array(e.length):{};for(const a in e)t[a]=Jc(e,a);return t}class Wc{constructor(t,a,s){this._object=t,this._key=a,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Cc(Ee(this._object),this._key)}}function Jc(e,t,a){const s=e[t];return Ge(s)?s:new Wc(e,t,a)}class Xc{constructor(t,a,s){this.fn=t,this.setter=a,this._value=void 0,this.dep=new Oo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return Ci(this,!0),!0}get value(){const t=this.dep.track();return Li(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Qc(e,t,a=!1){let s,n;return we(e)?s=e:(s=e.get,n=e.set),new Xc(s,n,a)}const Ss={},Us=new WeakMap;let _a;function Zc(e,t=!1,a=_a){if(a){let s=Us.get(a);s||Us.set(a,s=[]),s.push(e)}}function ed(e,t,a=Re){const{immediate:s,deep:n,once:o,scheduler:r,augmentJob:l,call:i}=a,c=k=>n?k:_t(k)||n===!1||n===0?qt(k,1):qt(k);let u,d,p,f,g=!1,h=!1;if(Ge(e)?(d=()=>e.value,g=_t(e)):la(e)?(d=()=>c(e),g=!0):ye(e)?(h=!0,g=e.some(k=>la(k)||_t(k)),d=()=>e.map(k=>{if(Ge(k))return k.value;if(la(k))return c(k);if(we(k))return i?i(k,2):k()})):we(e)?t?d=i?()=>i(e,2):e:d=()=>{if(p){Yt();try{p()}finally{Kt()}}const k=_a;_a=u;try{return i?i(e,3,[f]):e(f)}finally{_a=k}}:d=Dt,t&&n){const k=d,I=n===!0?1/0:n;d=()=>qt(k(),I)}const E=ki(),m=()=>{u.stop(),E&&E.active&&So(E.effects,u)};if(o&&t){const k=t;t=(...I)=>{k(...I),m()}}let _=h?new Array(e.length).fill(Ss):Ss;const x=k=>{if(!(!(u.flags&1)||!u.dirty&&!k))if(t){const I=u.run();if(n||g||(h?I.some((R,N)=>ia(R,_[N])):ia(I,_))){p&&p();const R=_a;_a=u;try{const N=[I,_===Ss?void 0:h&&_[0]===Ss?[]:_,f];_=I,i?i(t,3,N):t(...N)}finally{_a=R}}}else u.run()};return l&&l(x),u=new Ei(d),u.scheduler=r?()=>r(x,!1):x,f=k=>Zc(k,!1,u),p=u.onStop=()=>{const k=Us.get(u);if(k){if(i)i(k,4);else for(const I of k)I();Us.delete(u)}},t?s?x(!0):_=u.run():r?r(x.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function qt(e,t=1/0,a){if(t<=0||!De(e)||e.__v_skip||(a=a||new Map,(a.get(e)||0)>=t))return e;if(a.set(e,t),t--,Ge(e))qt(e.value,t,a);else if(ye(e))for(let s=0;s<e.length;s++)qt(e[s],t,a);else if(on(e)||Ia(e))e.forEach(s=>{qt(s,t,a)});else if(bi(e)){for(const s in e)qt(e[s],t,a);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&qt(e[s],t,a)}return e}function vs(e,t,a,s){try{return s?e(...s):e()}catch(n){fn(n,t,a)}}function Tt(e,t,a,s){if(we(e)){const n=vs(e,t,a,s);return n&&gi(n)&&n.catch(o=>{fn(o,t,a)}),n}if(ye(e)){const n=[];for(let o=0;o<e.length;o++)n.push(Tt(e[o],t,a,s));return n}}function fn(e,t,a,s=!0){const n=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Re;if(t){let l=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${a}`;for(;l;){const u=l.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,i,c)===!1)return}l=l.parent}if(o){Yt(),vs(o,null,10,[e,i,c]),Kt();return}}td(e,a,n,s,r)}function td(e,t,a,s=!0,n=!1){if(n)throw e;console.error(e)}const nt=[];let At=-1;const $a=[];let aa=null,Ma=0;const Gi=Promise.resolve();let Gs=null;function Io(e){const t=Gs||Gi;return e?t.then(this?e.bind(this):e):t}function ad(e){let t=At+1,a=nt.length;for(;t<a;){const s=t+a>>>1,n=nt[s],o=ds(n);o<e||o===e&&n.flags&2?t=s+1:a=s}return t}function $o(e){if(!(e.flags&1)){const t=ds(e),a=nt[nt.length-1];!a||!(e.flags&2)&&t>=ds(a)?nt.push(e):nt.splice(ad(t),0,e),e.flags|=1,ji()}}function ji(){Gs||(Gs=Gi.then(qi))}function sd(e){ye(e)?$a.push(...e):aa&&e.id===-1?aa.splice(Ma+1,0,e):e.flags&1||($a.push(e),e.flags|=1),ji()}function er(e,t,a=At+1){for(;a<nt.length;a++){const s=nt[a];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;nt.splice(a,1),a--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Vi(e){if($a.length){const t=[...new Set($a)].sort((a,s)=>ds(a)-ds(s));if($a.length=0,aa){aa.push(...t);return}for(aa=t,Ma=0;Ma<aa.length;Ma++){const a=aa[Ma];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}aa=null,Ma=0}}const ds=e=>e.id==null?e.flags&2?-1:1/0:e.id;function qi(e){try{for(At=0;At<nt.length;At++){const t=nt[At];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),vs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;At<nt.length;At++){const t=nt[At];t&&(t.flags&=-2)}At=-1,nt.length=0,Vi(),Gs=null,(nt.length||$a.length)&&qi()}}let ft=null,Yi=null;function js(e){const t=ft;return ft=e,Yi=e&&e.type.__scopeId||null,t}function so(e,t=ft,a){if(!t||e._n)return e;const s=(...n)=>{s._d&&Ys(-1);const o=js(t);let r;try{r=e(...n)}finally{js(o),s._d&&Ys(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Lt(e,t){if(ft===null)return e;const a=vn(ft),s=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[o,r,l,i=Re]=t[n];o&&(we(o)&&(o={mounted:o,updated:o}),o.deep&&qt(r),s.push({dir:o,instance:a,value:r,oldValue:void 0,arg:l,modifiers:i}))}return e}function ga(e,t,a,s){const n=e.dirs,o=t&&t.dirs;for(let r=0;r<n.length;r++){const l=n[r];o&&(l.oldValue=o[r].value);let i=l.dir[s];i&&(Yt(),Tt(i,a,8,[e.el,l,e,t]),Kt())}}const nd=Symbol("_vte"),Ki=e=>e.__isTeleport,Gt=Symbol("_leaveCb"),ks=Symbol("_enterCb");function od(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return rt(()=>{e.isMounted=!0}),sl(()=>{e.isUnmounting=!0}),e}const mt=[Function,Array],Wi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},Ji=e=>{const t=e.subTree;return t.component?Ji(t.component):t},rd={name:"BaseTransition",props:Wi,setup(e,{slots:t}){const a=zo(),s=od();return()=>{const n=t.default&&Zi(t.default(),!0);if(!n||!n.length)return;const o=Xi(n),r=Ee(e),{mode:l}=r;if(s.isLeaving)return Pn(o);const i=tr(o);if(!i)return Pn(o);let c=no(i,r,s,a,d=>c=d);i.type!==ot&&us(i,c);let u=a.subTree&&tr(a.subTree);if(u&&u.type!==ot&&!ya(u,i)&&Ji(a).type!==ot){let d=no(u,r,s,a);if(us(u,d),l==="out-in"&&i.type!==ot)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,a.job.flags&8||a.update(),delete d.afterLeave,u=void 0},Pn(o);l==="in-out"&&i.type!==ot?d.delayLeave=(p,f,g)=>{const h=Qi(s,u);h[String(u.key)]=u,p[Gt]=()=>{f(),p[Gt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Xi(e){let t=e[0];if(e.length>1){for(const a of e)if(a.type!==ot){t=a;break}}return t}const id=rd;function Qi(e,t){const{leavingVNodes:a}=e;let s=a.get(t.type);return s||(s=Object.create(null),a.set(t.type,s)),s}function no(e,t,a,s,n){const{appear:o,mode:r,persisted:l=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:E,onAppear:m,onAfterAppear:_,onAppearCancelled:x}=t,k=String(e.key),I=Qi(a,e),R=($,U)=>{$&&Tt($,s,9,U)},N=($,U)=>{const z=U[1];R($,U),ye($)?$.every(F=>F.length<=1)&&z():$.length<=1&&z()},j={mode:r,persisted:l,beforeEnter($){let U=i;if(!a.isMounted)if(o)U=E||i;else return;$[Gt]&&$[Gt](!0);const z=I[k];z&&ya(e,z)&&z.el[Gt]&&z.el[Gt](),R(U,[$])},enter($){let U=c,z=u,F=d;if(!a.isMounted)if(o)U=m||c,z=_||u,F=x||d;else return;let V=!1;const y=$[ks]=A=>{V||(V=!0,A?R(F,[$]):R(z,[$]),j.delayedLeave&&j.delayedLeave(),$[ks]=void 0)};U?N(U,[$,y]):y()},leave($,U){const z=String(e.key);if($[ks]&&$[ks](!0),a.isUnmounting)return U();R(p,[$]);let F=!1;const V=$[Gt]=y=>{F||(F=!0,U(),y?R(h,[$]):R(g,[$]),$[Gt]=void 0,I[z]===e&&delete I[z])};I[z]=e,f?N(f,[$,V]):V()},clone($){const U=no($,t,a,s,n);return n&&n(U),U}};return j}function Pn(e){if(hn(e))return e=da(e),e.children=null,e}function tr(e){if(!hn(e))return Ki(e.type)&&e.children?Xi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:a}=e;if(a){if(t&16)return a[0];if(t&32&&we(a.default))return a.default()}}function us(e,t){e.shapeFlag&6&&e.component?(e.transition=t,us(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function Zi(e,t=!1,a){let s=[],n=0;for(let o=0;o<e.length;o++){let r=e[o];const l=a==null?r.key:String(a)+String(r.key!=null?r.key:o);r.type===$e?(r.patchFlag&128&&n++,s=s.concat(Zi(r.children,t,l))):(t||r.type!==ot)&&s.push(l!=null?da(r,{key:l}):r)}if(n>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function el(e,t){return we(e)?Ke({name:e.name},t,{setup:e}):e}function tl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Vs=new WeakMap;function es(e,t,a,s,n=!1){if(ye(e)){e.forEach((g,h)=>es(g,t&&(ye(t)?t[h]:t),a,s,n));return}if(ts(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&es(e,t,a,s.component.subTree);return}const o=s.shapeFlag&4?vn(s.component):s.el,r=n?null:o,{i:l,r:i}=e,c=t&&t.r,u=l.refs===Re?l.refs={}:l.refs,d=l.setupState,p=Ee(d),f=d===Re?hi:g=>Le(p,g);if(c!=null&&c!==i){if(ar(t),Ue(c))u[c]=null,f(c)&&(d[c]=null);else if(Ge(c)){c.value=null;const g=t;g.k&&(u[g.k]=null)}}if(we(i))vs(i,l,12,[r,u]);else{const g=Ue(i),h=Ge(i);if(g||h){const E=()=>{if(e.f){const m=g?f(i)?d[i]:u[i]:i.value;if(n)ye(m)&&So(m,o);else if(ye(m))m.includes(o)||m.push(o);else if(g)u[i]=[o],f(i)&&(d[i]=u[i]);else{const _=[o];i.value=_,e.k&&(u[e.k]=_)}}else g?(u[i]=r,f(i)&&(d[i]=r)):h&&(i.value=r,e.k&&(u[e.k]=r))};if(r){const m=()=>{E(),Vs.delete(e)};m.id=-1,Vs.set(e,m),ut(m,a)}else ar(e),E()}}}function ar(e){const t=Vs.get(e);t&&(t.flags|=8,Vs.delete(e))}cn().requestIdleCallback;cn().cancelIdleCallback;const ts=e=>!!e.type.__asyncLoader,hn=e=>e.type.__isKeepAlive;function ld(e,t){al(e,"a",t)}function cd(e,t){al(e,"da",t)}function al(e,t,a=Ze){const s=e.__wdc||(e.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(gn(t,s,a),a){let n=a.parent;for(;n&&n.parent;)hn(n.parent.vnode)&&dd(s,t,a,n),n=n.parent}}function dd(e,t,a,s){const n=gn(t,e,s,!0);Xt(()=>{So(s[t],n)},a)}function gn(e,t,a=Ze,s=!1){if(a){const n=a[e]||(a[e]=[]),o=t.__weh||(t.__weh=(...r)=>{Yt();const l=_s(a),i=Tt(t,a,e,r);return l(),Kt(),i});return s?n.unshift(o):n.push(o),o}}const Jt=e=>(t,a=Ze)=>{(!fs||e==="sp")&&gn(e,(...s)=>t(...s),a)},ud=Jt("bm"),rt=Jt("m"),pd=Jt("bu"),fd=Jt("u"),sl=Jt("bum"),Xt=Jt("um"),hd=Jt("sp"),gd=Jt("rtg"),md=Jt("rtc");function bd(e,t=Ze){gn("ec",e,t)}const vd="components",nl=Symbol.for("v-ndc");function _d(e){return Ue(e)?yd(vd,e,!1)||e:e||nl}function yd(e,t,a=!0,s=!1){const n=ft||Ze;if(n){const o=n.type;{const l=lu(o,!1);if(l&&(l===t||l===wt(t)||l===ln(wt(t))))return o}const r=sr(n[e]||o[e],t)||sr(n.appContext[e],t);return!r&&s?o:r}}function sr(e,t){return e&&(e[t]||e[wt(t)]||e[ln(wt(t))])}function zt(e,t,a,s){let n;const o=a,r=ye(e);if(r||Ue(e)){const l=r&&la(e);let i=!1,c=!1;l&&(i=!_t(e),c=ca(e),e=pn(e)),n=new Array(e.length);for(let u=0,d=e.length;u<d;u++)n[u]=t(i?c?Hs(We(e[u])):We(e[u]):e[u],u,void 0,o)}else if(typeof e=="number"){n=new Array(e);for(let l=0;l<e;l++)n[l]=t(l+1,l,void 0,o)}else if(De(e))if(e[Symbol.iterator])n=Array.from(e,(l,i)=>t(l,i,void 0,o));else{const l=Object.keys(e);n=new Array(l.length);for(let i=0,c=l.length;i<c;i++){const u=l[i];n[i]=t(e[u],u,i,o)}}else n=[];return n}const oo=e=>e?kl(e)?vn(e):oo(e.parent):null,as=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>oo(e.parent),$root:e=>oo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>rl(e),$forceUpdate:e=>e.f||(e.f=()=>{$o(e.update)}),$nextTick:e=>e.n||(e.n=Io.bind(e.proxy)),$watch:e=>Ud.bind(e)}),On=(e,t)=>e!==Re&&!e.__isScriptSetup&&Le(e,t),wd={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:a,setupState:s,data:n,props:o,accessCache:r,type:l,appContext:i}=e;let c;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return n[t];case 4:return a[t];case 3:return o[t]}else{if(On(s,t))return r[t]=1,s[t];if(n!==Re&&Le(n,t))return r[t]=2,n[t];if((c=e.propsOptions[0])&&Le(c,t))return r[t]=3,o[t];if(a!==Re&&Le(a,t))return r[t]=4,a[t];ro&&(r[t]=0)}}const u=as[t];let d,p;if(u)return t==="$attrs"&&Qe(e.attrs,"get",""),u(e);if((d=l.__cssModules)&&(d=d[t]))return d;if(a!==Re&&Le(a,t))return r[t]=4,a[t];if(p=i.config.globalProperties,Le(p,t))return p[t]},set({_:e},t,a){const{data:s,setupState:n,ctx:o}=e;return On(n,t)?(n[t]=a,!0):s!==Re&&Le(s,t)?(s[t]=a,!0):Le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:s,appContext:n,propsOptions:o,type:r}},l){let i,c;return!!(a[l]||e!==Re&&l[0]!=="$"&&Le(e,l)||On(t,l)||(i=o[0])&&Le(i,l)||Le(s,l)||Le(as,l)||Le(n.config.globalProperties,l)||(c=r.__cssModules)&&c[l])},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:Le(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};function nr(e){return ye(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}let ro=!0;function xd(e){const t=rl(e),a=e.proxy,s=e.ctx;ro=!1,t.beforeCreate&&or(t.beforeCreate,e,"bc");const{data:n,computed:o,methods:r,watch:l,provide:i,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:f,updated:g,activated:h,deactivated:E,beforeDestroy:m,beforeUnmount:_,destroyed:x,unmounted:k,render:I,renderTracked:R,renderTriggered:N,errorCaptured:j,serverPrefetch:$,expose:U,inheritAttrs:z,components:F,directives:V,filters:y}=t;if(c&&Td(c,s,null),r)for(const D in r){const O=r[D];we(O)&&(s[D]=O.bind(a))}if(n){const D=n.call(a,a);De(D)&&(e.data=Ot(D))}if(ro=!0,o)for(const D in o){const O=o[D],q=we(O)?O.bind(a,a):we(O.get)?O.get.bind(a,a):Dt,X=!we(O)&&we(O.set)?O.set.bind(a):Dt,W=ve({get:q,set:X});Object.defineProperty(s,D,{enumerable:!0,configurable:!0,get:()=>W.value,set:oe=>W.value=oe})}if(l)for(const D in l)ol(l[D],s,a,D);if(i){const D=we(i)?i.call(a):i;Reflect.ownKeys(D).forEach(O=>{Ds(O,D[O])})}u&&or(u,e,"c");function S(D,O){ye(O)?O.forEach(q=>D(q.bind(a))):O&&D(O.bind(a))}if(S(ud,d),S(rt,p),S(pd,f),S(fd,g),S(ld,h),S(cd,E),S(bd,j),S(md,R),S(gd,N),S(sl,_),S(Xt,k),S(hd,$),ye(U))if(U.length){const D=e.exposed||(e.exposed={});U.forEach(O=>{Object.defineProperty(D,O,{get:()=>a[O],set:q=>a[O]=q,enumerable:!0})})}else e.exposed||(e.exposed={});I&&e.render===Dt&&(e.render=I),z!=null&&(e.inheritAttrs=z),F&&(e.components=F),V&&(e.directives=V),$&&tl(e)}function Td(e,t,a=Dt){ye(e)&&(e=io(e));for(const s in e){const n=e[s];let o;De(n)?"default"in n?o=yt(n.from||s,n.default,!0):o=yt(n.from||s):o=yt(n),Ge(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function or(e,t,a){Tt(ye(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,a)}function ol(e,t,a,s){let n=s.includes(".")?_l(a,s):()=>a[s];if(Ue(e)){const o=t[e];we(o)&&Na(n,o)}else if(we(e))Na(n,e.bind(a));else if(De(e))if(ye(e))e.forEach(o=>ol(o,t,a,s));else{const o=we(e.handler)?e.handler.bind(a):t[e.handler];we(o)&&Na(n,o,e)}}function rl(e){const t=e.type,{mixins:a,extends:s}=t,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,l=o.get(t);let i;return l?i=l:!n.length&&!a&&!s?i=t:(i={},n.length&&n.forEach(c=>qs(i,c,r,!0)),qs(i,t,r)),De(t)&&o.set(t,i),i}function qs(e,t,a,s=!1){const{mixins:n,extends:o}=t;o&&qs(e,o,a,!0),n&&n.forEach(r=>qs(e,r,a,!0));for(const r in t)if(!(s&&r==="expose")){const l=Sd[r]||a&&a[r];e[r]=l?l(e[r],t[r]):t[r]}return e}const Sd={data:rr,props:ir,emits:ir,methods:Wa,computed:Wa,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:Wa,directives:Wa,watch:Ed,provide:rr,inject:kd};function rr(e,t){return t?e?function(){return Ke(we(e)?e.call(this,this):e,we(t)?t.call(this,this):t)}:t:e}function kd(e,t){return Wa(io(e),io(t))}function io(e){if(ye(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function at(e,t){return e?[...new Set([].concat(e,t))]:t}function Wa(e,t){return e?Ke(Object.create(null),e,t):t}function ir(e,t){return e?ye(e)&&ye(t)?[...new Set([...e,...t])]:Ke(Object.create(null),nr(e),nr(t??{})):t}function Ed(e,t){if(!e)return t;if(!t)return e;const a=Ke(Object.create(null),e);for(const s in t)a[s]=at(e[s],t[s]);return a}function il(){return{app:null,config:{isNativeTag:hi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ad=0;function Cd(e,t){return function(s,n=null){we(s)||(s=Ke({},s)),n!=null&&!De(n)&&(n=null);const o=il(),r=new WeakSet,l=[];let i=!1;const c=o.app={_uid:Ad++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:du,get config(){return o.config},set config(u){},use(u,...d){return r.has(u)||(u&&we(u.install)?(r.add(u),u.install(c,...d)):we(u)&&(r.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,p){if(!i){const f=c._ceVNode||et(s,n);return f.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),e(f,u,p),i=!0,c._container=u,u.__vue_app__=c,vn(f.component)}},onUnmount(u){l.push(u)},unmount(){i&&(Tt(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){const d=ka;ka=c;try{return u()}finally{ka=d}}};return c}}let ka=null;function Ds(e,t){if(Ze){let a=Ze.provides;const s=Ze.parent&&Ze.parent.provides;s===a&&(a=Ze.provides=Object.create(s)),a[e]=t}}function yt(e,t,a=!1){const s=zo();if(s||ka){let n=ka?ka._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return a&&we(t)?t.call(s&&s.proxy):t}}function Pd(){return!!(zo()||ka)}const ll={},cl=()=>Object.create(ll),dl=e=>Object.getPrototypeOf(e)===ll;function Od(e,t,a,s=!1){const n={},o=cl();e.propsDefaults=Object.create(null),ul(e,t,n,o);for(const r in e.propsOptions[0])r in n||(n[r]=void 0);a?e.props=s?n:zi(n):e.type.props?e.props=n:e.props=o,e.attrs=o}function Ld(e,t,a,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=e,l=Ee(n),[i]=e.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(mn(e.emitsOptions,p))continue;const f=t[p];if(i)if(Le(o,p))f!==o[p]&&(o[p]=f,c=!0);else{const g=wt(p);n[g]=lo(i,l,g,f,e,!1)}else f!==o[p]&&(o[p]=f,c=!0)}}}else{ul(e,t,n,o)&&(c=!0);let u;for(const d in l)(!t||!Le(t,d)&&((u=pa(d))===d||!Le(t,u)))&&(i?a&&(a[d]!==void 0||a[u]!==void 0)&&(n[d]=lo(i,l,d,void 0,e,!0)):delete n[d]);if(o!==l)for(const d in o)(!t||!Le(t,d))&&(delete o[d],c=!0)}c&&Vt(e.attrs,"set","")}function ul(e,t,a,s){const[n,o]=e.propsOptions;let r=!1,l;if(t)for(let i in t){if(Xa(i))continue;const c=t[i];let u;n&&Le(n,u=wt(i))?!o||!o.includes(u)?a[u]=c:(l||(l={}))[u]=c:mn(e.emitsOptions,i)||(!(i in s)||c!==s[i])&&(s[i]=c,r=!0)}if(o){const i=Ee(a),c=l||Re;for(let u=0;u<o.length;u++){const d=o[u];a[d]=lo(n,i,d,c[d],e,!Le(c,d))}}return r}function lo(e,t,a,s,n,o){const r=e[a];if(r!=null){const l=Le(r,"default");if(l&&s===void 0){const i=r.default;if(r.type!==Function&&!r.skipFactory&&we(i)){const{propsDefaults:c}=n;if(a in c)s=c[a];else{const u=_s(n);s=c[a]=i.call(null,t),u()}}else s=i;n.ce&&n.ce._setProp(a,s)}r[0]&&(o&&!l?s=!1:r[1]&&(s===""||s===pa(a))&&(s=!0))}return s}const Md=new WeakMap;function pl(e,t,a=!1){const s=a?Md:t.propsCache,n=s.get(e);if(n)return n;const o=e.props,r={},l=[];let i=!1;if(!we(e)){const u=d=>{i=!0;const[p,f]=pl(d,t,!0);Ke(r,p),f&&l.push(...f)};!a&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!i)return De(e)&&s.set(e,Ra),Ra;if(ye(o))for(let u=0;u<o.length;u++){const d=wt(o[u]);lr(d)&&(r[d]=Re)}else if(o)for(const u in o){const d=wt(u);if(lr(d)){const p=o[u],f=r[d]=ye(p)||we(p)?{type:p}:Ke({},p),g=f.type;let h=!1,E=!0;if(ye(g))for(let m=0;m<g.length;++m){const _=g[m],x=we(_)&&_.name;if(x==="Boolean"){h=!0;break}else x==="String"&&(E=!1)}else h=we(g)&&g.name==="Boolean";f[0]=h,f[1]=E,(h||Le(f,"default"))&&l.push(d)}}const c=[r,l];return De(e)&&s.set(e,c),c}function lr(e){return e[0]!=="$"&&!Xa(e)}const No=e=>e==="_"||e==="_ctx"||e==="$stable",Bo=e=>ye(e)?e.map(Pt):[Pt(e)],Dd=(e,t,a)=>{if(t._n)return t;const s=so((...n)=>Bo(t(...n)),a);return s._c=!1,s},fl=(e,t,a)=>{const s=e._ctx;for(const n in e){if(No(n))continue;const o=e[n];if(we(o))t[n]=Dd(n,o,s);else if(o!=null){const r=Bo(o);t[n]=()=>r}}},hl=(e,t)=>{const a=Bo(t);e.slots.default=()=>a},gl=(e,t,a)=>{for(const s in t)(a||!No(s))&&(e[s]=t[s])},Rd=(e,t,a)=>{const s=e.slots=cl();if(e.vnode.shapeFlag&32){const n=t._;n?(gl(s,t,a),a&&vi(s,"_",n,!0)):fl(t,s)}else t&&hl(e,t)},Id=(e,t,a)=>{const{vnode:s,slots:n}=e;let o=!0,r=Re;if(s.shapeFlag&32){const l=t._;l?a&&l===1?o=!1:gl(n,t,a):(o=!t.$stable,fl(t,n)),r=t}else t&&(hl(e,t),r={default:1});if(o)for(const l in n)!No(l)&&r[l]==null&&delete n[l]},ut=Jd;function $d(e){return Nd(e)}function Nd(e,t){const a=cn();a.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:l,createComment:i,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:f=Dt,insertStaticContent:g}=e,h=(w,L,v,C=null,P=null,B=null,Y=void 0,J=null,M=!!L.dynamicChildren)=>{if(w===L)return;w&&!ya(w,L)&&(C=H(w),oe(w,P,B,!0),w=null),L.patchFlag===-2&&(M=!1,L.dynamicChildren=null);const{type:T,ref:G,shapeFlag:Q}=L;switch(T){case bn:E(w,L,v,C);break;case ot:m(w,L,v,C);break;case Rs:w==null&&_(L,v,C,Y);break;case $e:F(w,L,v,C,P,B,Y,J,M);break;default:Q&1?I(w,L,v,C,P,B,Y,J,M):Q&6?V(w,L,v,C,P,B,Y,J,M):(Q&64||Q&128)&&T.process(w,L,v,C,P,B,Y,J,M,de)}G!=null&&P?es(G,w&&w.ref,B,L||w,!L):G==null&&w&&w.ref!=null&&es(w.ref,null,B,w,!0)},E=(w,L,v,C)=>{if(w==null)s(L.el=l(L.children),v,C);else{const P=L.el=w.el;L.children!==w.children&&c(P,L.children)}},m=(w,L,v,C)=>{w==null?s(L.el=i(L.children||""),v,C):L.el=w.el},_=(w,L,v,C)=>{[w.el,w.anchor]=g(w.children,L,v,C,w.el,w.anchor)},x=({el:w,anchor:L},v,C)=>{let P;for(;w&&w!==L;)P=p(w),s(w,v,C),w=P;s(L,v,C)},k=({el:w,anchor:L})=>{let v;for(;w&&w!==L;)v=p(w),n(w),w=v;n(L)},I=(w,L,v,C,P,B,Y,J,M)=>{if(L.type==="svg"?Y="svg":L.type==="math"&&(Y="mathml"),w==null)R(L,v,C,P,B,Y,J,M);else{const T=w.el&&w.el._isVueCE?w.el:null;try{T&&T._beginPatch(),$(w,L,P,B,Y,J,M)}finally{T&&T._endPatch()}}},R=(w,L,v,C,P,B,Y,J)=>{let M,T;const{props:G,shapeFlag:Q,transition:re,dirs:pe}=w;if(M=w.el=r(w.type,B,G&&G.is,G),Q&8?u(M,w.children):Q&16&&j(w.children,M,null,C,P,Ln(w,B),Y,J),pe&&ga(w,null,C,"created"),N(M,w,w.scopeId,Y,C),G){for(const ie in G)ie!=="value"&&!Xa(ie)&&o(M,ie,null,G[ie],B,C);"value"in G&&o(M,"value",null,G.value,B),(T=G.onVnodeBeforeMount)&&kt(T,C,w)}pe&&ga(w,null,C,"beforeMount");const be=Bd(P,re);be&&re.beforeEnter(M),s(M,L,v),((T=G&&G.onVnodeMounted)||be||pe)&&ut(()=>{T&&kt(T,C,w),be&&re.enter(M),pe&&ga(w,null,C,"mounted")},P)},N=(w,L,v,C,P)=>{if(v&&f(w,v),C)for(let B=0;B<C.length;B++)f(w,C[B]);if(P){let B=P.subTree;if(L===B||wl(B.type)&&(B.ssContent===L||B.ssFallback===L)){const Y=P.vnode;N(w,Y,Y.scopeId,Y.slotScopeIds,P.parent)}}},j=(w,L,v,C,P,B,Y,J,M=0)=>{for(let T=M;T<w.length;T++){const G=w[T]=J?sa(w[T]):Pt(w[T]);h(null,G,L,v,C,P,B,Y,J)}},$=(w,L,v,C,P,B,Y)=>{const J=L.el=w.el;let{patchFlag:M,dynamicChildren:T,dirs:G}=L;M|=w.patchFlag&16;const Q=w.props||Re,re=L.props||Re;let pe;if(v&&ma(v,!1),(pe=re.onVnodeBeforeUpdate)&&kt(pe,v,L,w),G&&ga(L,w,v,"beforeUpdate"),v&&ma(v,!0),(Q.innerHTML&&re.innerHTML==null||Q.textContent&&re.textContent==null)&&u(J,""),T?U(w.dynamicChildren,T,J,v,C,Ln(L,P),B):Y||O(w,L,J,null,v,C,Ln(L,P),B,!1),M>0){if(M&16)z(J,Q,re,v,P);else if(M&2&&Q.class!==re.class&&o(J,"class",null,re.class,P),M&4&&o(J,"style",Q.style,re.style,P),M&8){const be=L.dynamicProps;for(let ie=0;ie<be.length;ie++){const ge=be[ie],_e=Q[ge],ke=re[ge];(ke!==_e||ge==="value")&&o(J,ge,_e,ke,P,v)}}M&1&&w.children!==L.children&&u(J,L.children)}else!Y&&T==null&&z(J,Q,re,v,P);((pe=re.onVnodeUpdated)||G)&&ut(()=>{pe&&kt(pe,v,L,w),G&&ga(L,w,v,"updated")},C)},U=(w,L,v,C,P,B,Y)=>{for(let J=0;J<L.length;J++){const M=w[J],T=L[J],G=M.el&&(M.type===$e||!ya(M,T)||M.shapeFlag&198)?d(M.el):v;h(M,T,G,null,C,P,B,Y,!0)}},z=(w,L,v,C,P)=>{if(L!==v){if(L!==Re)for(const B in L)!Xa(B)&&!(B in v)&&o(w,B,L[B],null,P,C);for(const B in v){if(Xa(B))continue;const Y=v[B],J=L[B];Y!==J&&B!=="value"&&o(w,B,J,Y,P,C)}"value"in v&&o(w,"value",L.value,v.value,P)}},F=(w,L,v,C,P,B,Y,J,M)=>{const T=L.el=w?w.el:l(""),G=L.anchor=w?w.anchor:l("");let{patchFlag:Q,dynamicChildren:re,slotScopeIds:pe}=L;pe&&(J=J?J.concat(pe):pe),w==null?(s(T,v,C),s(G,v,C),j(L.children||[],v,G,P,B,Y,J,M)):Q>0&&Q&64&&re&&w.dynamicChildren?(U(w.dynamicChildren,re,v,P,B,Y,J),(L.key!=null||P&&L===P.subTree)&&ml(w,L,!0)):O(w,L,v,G,P,B,Y,J,M)},V=(w,L,v,C,P,B,Y,J,M)=>{L.slotScopeIds=J,w==null?L.shapeFlag&512?P.ctx.activate(L,v,C,Y,M):y(L,v,C,P,B,Y,M):A(w,L,M)},y=(w,L,v,C,P,B,Y)=>{const J=w.component=su(w,C,P);if(hn(w)&&(J.ctx.renderer=de),nu(J,!1,Y),J.asyncDep){if(P&&P.registerDep(J,S,Y),!w.el){const M=J.subTree=et(ot);m(null,M,L,v),w.placeholder=M.el}}else S(J,w,L,v,P,B,Y)},A=(w,L,v)=>{const C=L.component=w.component;if(Kd(w,L,v))if(C.asyncDep&&!C.asyncResolved){D(C,L,v);return}else C.next=L,C.update();else L.el=w.el,C.vnode=L},S=(w,L,v,C,P,B,Y)=>{const J=()=>{if(w.isMounted){let{next:Q,bu:re,u:pe,parent:be,vnode:ie}=w;{const Ne=bl(w);if(Ne){Q&&(Q.el=ie.el,D(w,Q,Y)),Ne.asyncDep.then(()=>{w.isUnmounted||J()});return}}let ge=Q,_e;ma(w,!1),Q?(Q.el=ie.el,D(w,Q,Y)):Q=ie,re&&Ms(re),(_e=Q.props&&Q.props.onVnodeBeforeUpdate)&&kt(_e,be,Q,ie),ma(w,!0);const ke=dr(w),Ae=w.subTree;w.subTree=ke,h(Ae,ke,d(Ae.el),H(Ae),w,P,B),Q.el=ke.el,ge===null&&Wd(w,ke.el),pe&&ut(pe,P),(_e=Q.props&&Q.props.onVnodeUpdated)&&ut(()=>kt(_e,be,Q,ie),P)}else{let Q;const{el:re,props:pe}=L,{bm:be,m:ie,parent:ge,root:_e,type:ke}=w,Ae=ts(L);ma(w,!1),be&&Ms(be),!Ae&&(Q=pe&&pe.onVnodeBeforeMount)&&kt(Q,ge,L),ma(w,!0);{_e.ce&&_e.ce._def.shadowRoot!==!1&&_e.ce._injectChildStyle(ke);const Ne=w.subTree=dr(w);h(null,Ne,v,C,w,P,B),L.el=Ne.el}if(ie&&ut(ie,P),!Ae&&(Q=pe&&pe.onVnodeMounted)){const Ne=L;ut(()=>kt(Q,ge,Ne),P)}(L.shapeFlag&256||ge&&ts(ge.vnode)&&ge.vnode.shapeFlag&256)&&w.a&&ut(w.a,P),w.isMounted=!0,L=v=C=null}};w.scope.on();const M=w.effect=new Ei(J);w.scope.off();const T=w.update=M.run.bind(M),G=w.job=M.runIfDirty.bind(M);G.i=w,G.id=w.uid,M.scheduler=()=>$o(G),ma(w,!0),T()},D=(w,L,v)=>{L.component=w;const C=w.vnode.props;w.vnode=L,w.next=null,Ld(w,L.props,C,v),Id(w,L.children,v),Yt(),er(w),Kt()},O=(w,L,v,C,P,B,Y,J,M=!1)=>{const T=w&&w.children,G=w?w.shapeFlag:0,Q=L.children,{patchFlag:re,shapeFlag:pe}=L;if(re>0){if(re&128){X(T,Q,v,C,P,B,Y,J,M);return}else if(re&256){q(T,Q,v,C,P,B,Y,J,M);return}}pe&8?(G&16&&ne(T,P,B),Q!==T&&u(v,Q)):G&16?pe&16?X(T,Q,v,C,P,B,Y,J,M):ne(T,P,B,!0):(G&8&&u(v,""),pe&16&&j(Q,v,C,P,B,Y,J,M))},q=(w,L,v,C,P,B,Y,J,M)=>{w=w||Ra,L=L||Ra;const T=w.length,G=L.length,Q=Math.min(T,G);let re;for(re=0;re<Q;re++){const pe=L[re]=M?sa(L[re]):Pt(L[re]);h(w[re],pe,v,null,P,B,Y,J,M)}T>G?ne(w,P,B,!0,!1,Q):j(L,v,C,P,B,Y,J,M,Q)},X=(w,L,v,C,P,B,Y,J,M)=>{let T=0;const G=L.length;let Q=w.length-1,re=G-1;for(;T<=Q&&T<=re;){const pe=w[T],be=L[T]=M?sa(L[T]):Pt(L[T]);if(ya(pe,be))h(pe,be,v,null,P,B,Y,J,M);else break;T++}for(;T<=Q&&T<=re;){const pe=w[Q],be=L[re]=M?sa(L[re]):Pt(L[re]);if(ya(pe,be))h(pe,be,v,null,P,B,Y,J,M);else break;Q--,re--}if(T>Q){if(T<=re){const pe=re+1,be=pe<G?L[pe].el:C;for(;T<=re;)h(null,L[T]=M?sa(L[T]):Pt(L[T]),v,be,P,B,Y,J,M),T++}}else if(T>re)for(;T<=Q;)oe(w[T],P,B,!0),T++;else{const pe=T,be=T,ie=new Map;for(T=be;T<=re;T++){const tt=L[T]=M?sa(L[T]):Pt(L[T]);tt.key!=null&&ie.set(tt.key,T)}let ge,_e=0;const ke=re-be+1;let Ae=!1,Ne=0;const Fe=new Array(ke);for(T=0;T<ke;T++)Fe[T]=0;for(T=pe;T<=Q;T++){const tt=w[T];if(_e>=ke){oe(tt,P,B,!0);continue}let gt;if(tt.key!=null)gt=ie.get(tt.key);else for(ge=be;ge<=re;ge++)if(Fe[ge-be]===0&&ya(tt,L[ge])){gt=ge;break}gt===void 0?oe(tt,P,B,!0):(Fe[gt-be]=T+1,gt>=Ne?Ne=gt:Ae=!0,h(tt,L[gt],v,null,P,B,Y,J,M),_e++)}const Qt=Ae?Fd(Fe):Ra;for(ge=Qt.length-1,T=ke-1;T>=0;T--){const tt=be+T,gt=L[tt],Yo=L[tt+1],Ko=tt+1<G?Yo.el||Yo.placeholder:C;Fe[T]===0?h(null,gt,v,Ko,P,B,Y,J,M):Ae&&(ge<0||T!==Qt[ge]?W(gt,v,Ko,2):ge--)}}},W=(w,L,v,C,P=null)=>{const{el:B,type:Y,transition:J,children:M,shapeFlag:T}=w;if(T&6){W(w.component.subTree,L,v,C);return}if(T&128){w.suspense.move(L,v,C);return}if(T&64){Y.move(w,L,v,de);return}if(Y===$e){s(B,L,v);for(let Q=0;Q<M.length;Q++)W(M[Q],L,v,C);s(w.anchor,L,v);return}if(Y===Rs){x(w,L,v);return}if(C!==2&&T&1&&J)if(C===0)J.beforeEnter(B),s(B,L,v),ut(()=>J.enter(B),P);else{const{leave:Q,delayLeave:re,afterLeave:pe}=J,be=()=>{w.ctx.isUnmounted?n(B):s(B,L,v)},ie=()=>{B._isLeaving&&B[Gt](!0),Q(B,()=>{be(),pe&&pe()})};re?re(B,be,ie):ie()}else s(B,L,v)},oe=(w,L,v,C=!1,P=!1)=>{const{type:B,props:Y,ref:J,children:M,dynamicChildren:T,shapeFlag:G,patchFlag:Q,dirs:re,cacheIndex:pe}=w;if(Q===-2&&(P=!1),J!=null&&(Yt(),es(J,null,v,w,!0),Kt()),pe!=null&&(L.renderCache[pe]=void 0),G&256){L.ctx.deactivate(w);return}const be=G&1&&re,ie=!ts(w);let ge;if(ie&&(ge=Y&&Y.onVnodeBeforeUnmount)&&kt(ge,L,w),G&6)te(w.component,v,C);else{if(G&128){w.suspense.unmount(v,C);return}be&&ga(w,null,L,"beforeUnmount"),G&64?w.type.remove(w,L,v,de,C):T&&!T.hasOnce&&(B!==$e||Q>0&&Q&64)?ne(T,L,v,!1,!0):(B===$e&&Q&384||!P&&G&16)&&ne(M,L,v),C&&se(w)}(ie&&(ge=Y&&Y.onVnodeUnmounted)||be)&&ut(()=>{ge&&kt(ge,L,w),be&&ga(w,null,L,"unmounted")},v)},se=w=>{const{type:L,el:v,anchor:C,transition:P}=w;if(L===$e){ae(v,C);return}if(L===Rs){k(w);return}const B=()=>{n(v),P&&!P.persisted&&P.afterLeave&&P.afterLeave()};if(w.shapeFlag&1&&P&&!P.persisted){const{leave:Y,delayLeave:J}=P,M=()=>Y(v,B);J?J(w.el,B,M):M()}else B()},ae=(w,L)=>{let v;for(;w!==L;)v=p(w),n(w),w=v;n(L)},te=(w,L,v)=>{const{bum:C,scope:P,job:B,subTree:Y,um:J,m:M,a:T}=w;cr(M),cr(T),C&&Ms(C),P.stop(),B&&(B.flags|=8,oe(Y,w,L,v)),J&&ut(J,L),ut(()=>{w.isUnmounted=!0},L)},ne=(w,L,v,C=!1,P=!1,B=0)=>{for(let Y=B;Y<w.length;Y++)oe(w[Y],L,v,C,P)},H=w=>{if(w.shapeFlag&6)return H(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const L=p(w.anchor||w.el),v=L&&L[nd];return v?p(v):L};let Z=!1;const ee=(w,L,v)=>{w==null?L._vnode&&oe(L._vnode,null,null,!0):h(L._vnode||null,w,L,null,null,null,v),L._vnode=w,Z||(Z=!0,er(),Vi(),Z=!1)},de={p:h,um:oe,m:W,r:se,mt:y,mc:j,pc:O,pbc:U,n:H,o:e};return{render:ee,hydrate:void 0,createApp:Cd(ee)}}function Ln({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function ma({effect:e,job:t},a){a?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Bd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function ml(e,t,a=!1){const s=e.children,n=t.children;if(ye(s)&&ye(n))for(let o=0;o<s.length;o++){const r=s[o];let l=n[o];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[o]=sa(n[o]),l.el=r.el),!a&&l.patchFlag!==-2&&ml(r,l)),l.type===bn&&l.patchFlag!==-1&&(l.el=r.el),l.type===ot&&!l.el&&(l.el=r.el)}}function Fd(e){const t=e.slice(),a=[0];let s,n,o,r,l;const i=e.length;for(s=0;s<i;s++){const c=e[s];if(c!==0){if(n=a[a.length-1],e[n]<c){t[s]=n,a.push(s);continue}for(o=0,r=a.length-1;o<r;)l=o+r>>1,e[a[l]]<c?o=l+1:r=l;c<e[a[o]]&&(o>0&&(t[s]=a[o-1]),a[o]=s)}}for(o=a.length,r=a[o-1];o-- >0;)a[o]=r,r=t[r];return a}function bl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:bl(t)}function cr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const zd=Symbol.for("v-scx"),Hd=()=>yt(zd);function Na(e,t,a){return vl(e,t,a)}function vl(e,t,a=Re){const{immediate:s,deep:n,flush:o,once:r}=a,l=Ke({},a),i=t&&s||!t&&o!=="post";let c;if(fs){if(o==="sync"){const f=Hd();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!i){const f=()=>{};return f.stop=Dt,f.resume=Dt,f.pause=Dt,f}}const u=Ze;l.call=(f,g,h)=>Tt(f,u,g,h);let d=!1;o==="post"?l.scheduler=f=>{ut(f,u&&u.suspense)}:o!=="sync"&&(d=!0,l.scheduler=(f,g)=>{g?f():$o(f)}),l.augmentJob=f=>{t&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const p=ed(e,t,l);return fs&&(c?c.push(p):i&&p()),p}function Ud(e,t,a){const s=this.proxy,n=Ue(e)?e.includes(".")?_l(s,e):()=>s[e]:e.bind(s,s);let o;we(t)?o=t:(o=t.handler,a=t);const r=_s(this),l=vl(n,o.bind(s),a);return r(),l}function _l(e,t){const a=t.split(".");return()=>{let s=e;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}const Gd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${wt(t)}Modifiers`]||e[`${pa(t)}Modifiers`];function jd(e,t,...a){if(e.isUnmounted)return;const s=e.vnode.props||Re;let n=a;const o=t.startsWith("update:"),r=o&&Gd(s,t.slice(7));r&&(r.trim&&(n=a.map(u=>Ue(u)?u.trim():u)),r.number&&(n=a.map(Eo)));let l,i=s[l=Sn(t)]||s[l=Sn(wt(t))];!i&&o&&(i=s[l=Sn(pa(t))]),i&&Tt(i,e,6,n);const c=s[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,Tt(c,e,6,n)}}const Vd=new WeakMap;function yl(e,t,a=!1){const s=a?Vd:t.emitsCache,n=s.get(e);if(n!==void 0)return n;const o=e.emits;let r={},l=!1;if(!we(e)){const i=c=>{const u=yl(c,t,!0);u&&(l=!0,Ke(r,u))};!a&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!o&&!l?(De(e)&&s.set(e,null),null):(ye(o)?o.forEach(i=>r[i]=null):Ke(r,o),De(e)&&s.set(e,r),r)}function mn(e,t){return!e||!nn(t)?!1:(t=t.slice(2).replace(/Once$/,""),Le(e,t[0].toLowerCase()+t.slice(1))||Le(e,pa(t))||Le(e,t))}function dr(e){const{type:t,vnode:a,proxy:s,withProxy:n,propsOptions:[o],slots:r,attrs:l,emit:i,render:c,renderCache:u,props:d,data:p,setupState:f,ctx:g,inheritAttrs:h}=e,E=js(e);let m,_;try{if(a.shapeFlag&4){const k=n||s,I=k;m=Pt(c.call(I,k,u,d,f,p,g)),_=l}else{const k=t;m=Pt(k.length>1?k(d,{attrs:l,slots:r,emit:i}):k(d,null)),_=t.props?l:qd(l)}}catch(k){ss.length=0,fn(k,e,1),m=et(ot)}let x=m;if(_&&h!==!1){const k=Object.keys(_),{shapeFlag:I}=x;k.length&&I&7&&(o&&k.some(To)&&(_=Yd(_,o)),x=da(x,_,!1,!0))}return a.dirs&&(x=da(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(a.dirs):a.dirs),a.transition&&us(x,a.transition),m=x,js(E),m}const qd=e=>{let t;for(const a in e)(a==="class"||a==="style"||nn(a))&&((t||(t={}))[a]=e[a]);return t},Yd=(e,t)=>{const a={};for(const s in e)(!To(s)||!(s.slice(9)in t))&&(a[s]=e[s]);return a};function Kd(e,t,a){const{props:s,children:n,component:o}=e,{props:r,children:l,patchFlag:i}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&i>=0){if(i&1024)return!0;if(i&16)return s?ur(s,r,c):!!r;if(i&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(r[p]!==s[p]&&!mn(c,p))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:s===r?!1:s?r?ur(s,r,c):!0:!!r;return!1}function ur(e,t,a){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(t[o]!==e[o]&&!mn(a,o))return!0}return!1}function Wd({vnode:e,parent:t},a){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=a,t=t.parent;else break}}const wl=e=>e.__isSuspense;function Jd(e,t){t&&t.pendingBranch?ye(e)?t.effects.push(...e):t.effects.push(e):sd(e)}const $e=Symbol.for("v-fgt"),bn=Symbol.for("v-txt"),ot=Symbol.for("v-cmt"),Rs=Symbol.for("v-stc"),ss=[];let ht=null;function fe(e=!1){ss.push(ht=e?null:[])}function Xd(){ss.pop(),ht=ss[ss.length-1]||null}let ps=1;function Ys(e,t=!1){ps+=e,e<0&&ht&&t&&(ht.hasOnce=!0)}function xl(e){return e.dynamicChildren=ps>0?ht||Ra:null,Xd(),ps>0&&ht&&ht.push(e),e}function he(e,t,a,s,n,o){return xl(b(e,t,a,s,n,o,!0))}function Tl(e,t,a,s,n){return xl(et(e,t,a,s,n,!0))}function Ks(e){return e?e.__v_isVNode===!0:!1}function ya(e,t){return e.type===t.type&&e.key===t.key}const Sl=({key:e})=>e??null,Is=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Ue(e)||Ge(e)||we(e)?{i:ft,r:e,k:t,f:!!a}:e:null);function b(e,t=null,a=null,s=0,n=null,o=e===$e?0:1,r=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Sl(t),ref:t&&Is(t),scopeId:Yi,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:ft};return l?(Fo(i,a),o&128&&e.normalize(i)):a&&(i.shapeFlag|=Ue(a)?8:16),ps>0&&!r&&ht&&(i.patchFlag>0||o&6)&&i.patchFlag!==32&&ht.push(i),i}const et=Qd;function Qd(e,t=null,a=null,s=0,n=null,o=!1){if((!e||e===nl)&&(e=ot),Ks(e)){const l=da(e,t,!0);return a&&Fo(l,a),ps>0&&!o&&ht&&(l.shapeFlag&6?ht[ht.indexOf(e)]=l:ht.push(l)),l.patchFlag=-2,l}if(cu(e)&&(e=e.__vccOpts),t){t=Zd(t);let{class:l,style:i}=t;l&&!Ue(l)&&(t.class=Ve(l)),De(i)&&(Do(i)&&!ye(i)&&(i=Ke({},i)),t.style=dn(i))}const r=Ue(e)?1:wl(e)?128:Ki(e)?64:De(e)?4:we(e)?2:0;return b(e,t,a,s,n,r,o,!0)}function Zd(e){return e?Do(e)||dl(e)?Ke({},e):e:null}function da(e,t,a=!1,s=!1){const{props:n,ref:o,patchFlag:r,children:l,transition:i}=e,c=t?eu(n||{},t):n,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Sl(c),ref:t&&t.ref?a&&o?ye(o)?o.concat(Is(t)):[o,Is(t)]:Is(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$e?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&da(e.ssContent),ssFallback:e.ssFallback&&da(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&s&&us(u,i.clone(u)),u}function Be(e=" ",t=0){return et(bn,null,e,t)}function dt(e,t){const a=et(Rs,null,e);return a.staticCount=t,a}function Te(e="",t=!1){return t?(fe(),Tl(ot,null,e)):et(ot,null,e)}function Pt(e){return e==null||typeof e=="boolean"?et(ot):ye(e)?et($e,null,e.slice()):Ks(e)?sa(e):et(bn,null,String(e))}function sa(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:da(e)}function Fo(e,t){let a=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ye(t))a=16;else if(typeof t=="object")if(s&65){const n=t.default;n&&(n._c&&(n._d=!1),Fo(e,n()),n._c&&(n._d=!0));return}else{a=32;const n=t._;!n&&!dl(t)?t._ctx=ft:n===3&&ft&&(ft.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else we(t)?(t={default:t,_ctx:ft},a=32):(t=String(t),s&64?(a=16,t=[Be(t)]):a=8);e.children=t,e.shapeFlag|=a}function eu(...e){const t={};for(let a=0;a<e.length;a++){const s=e[a];for(const n in s)if(n==="class")t.class!==s.class&&(t.class=Ve([t.class,s.class]));else if(n==="style")t.style=dn([t.style,s.style]);else if(nn(n)){const o=t[n],r=s[n];r&&o!==r&&!(ye(o)&&o.includes(r))&&(t[n]=o?[].concat(o,r):r)}else n!==""&&(t[n]=s[n])}return t}function kt(e,t,a,s=null){Tt(e,t,7,[a,s])}const tu=il();let au=0;function su(e,t,a){const s=e.type,n=(t?t.appContext:e.appContext)||tu,o={uid:au++,vnode:e,type:s,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ti(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:pl(s,n),emitsOptions:yl(s,n),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=jd.bind(null,o),e.ce&&e.ce(o),o}let Ze=null;const zo=()=>Ze||ft;let Ws,co;{const e=cn(),t=(a,s)=>{let n;return(n=e[a])||(n=e[a]=[]),n.push(s),o=>{n.length>1?n.forEach(r=>r(o)):n[0](o)}};Ws=t("__VUE_INSTANCE_SETTERS__",a=>Ze=a),co=t("__VUE_SSR_SETTERS__",a=>fs=a)}const _s=e=>{const t=Ze;return Ws(e),e.scope.on(),()=>{e.scope.off(),Ws(t)}},pr=()=>{Ze&&Ze.scope.off(),Ws(null)};function kl(e){return e.vnode.shapeFlag&4}let fs=!1;function nu(e,t=!1,a=!1){t&&co(t);const{props:s,children:n}=e.vnode,o=kl(e);Od(e,s,o,t),Rd(e,n,a||t);const r=o?ou(e,t):void 0;return t&&co(!1),r}function ou(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,wd);const{setup:s}=a;if(s){Yt();const n=e.setupContext=s.length>1?iu(e):null,o=_s(e),r=vs(s,e,0,[e.props,n]),l=gi(r);if(Kt(),o(),(l||e.sp)&&!ts(e)&&tl(e),l){if(r.then(pr,pr),t)return r.then(i=>{fr(e,i)}).catch(i=>{fn(i,e,0)});e.asyncDep=r}else fr(e,r)}else El(e)}function fr(e,t,a){we(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:De(t)&&(e.setupState=Ui(t)),El(e)}function El(e,t,a){const s=e.type;e.render||(e.render=s.render||Dt);{const n=_s(e);Yt();try{xd(e)}finally{Kt(),n()}}}const ru={get(e,t){return Qe(e,"get",""),e[t]}};function iu(e){const t=a=>{e.exposed=a||{}};return{attrs:new Proxy(e.attrs,ru),slots:e.slots,emit:e.emit,expose:t}}function vn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(Ui(Ro(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in as)return as[a](e)},has(t,a){return a in t||a in as}})):e.proxy}function lu(e,t=!0){return we(e)?e.displayName||e.name:e.name||t&&e.__name}function cu(e){return we(e)&&"__vccOpts"in e}const ve=(e,t)=>Qc(e,t,fs);function Ho(e,t,a){try{Ys(-1);const s=arguments.length;return s===2?De(t)&&!ye(t)?Ks(t)?et(e,null,[t]):et(e,t):et(e,null,t):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&Ks(a)&&(a=[a]),et(e,t,a))}finally{Ys(1)}}const du="3.5.24";let uo;const hr=typeof window<"u"&&window.trustedTypes;if(hr)try{uo=hr.createPolicy("vue",{createHTML:e=>e})}catch{}const Al=uo?e=>uo.createHTML(e):e=>e,uu="http://www.w3.org/2000/svg",pu="http://www.w3.org/1998/Math/MathML",Ht=typeof document<"u"?document:null,gr=Ht&&Ht.createElement("template"),fu={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,s)=>{const n=t==="svg"?Ht.createElementNS(uu,e):t==="mathml"?Ht.createElementNS(pu,e):a?Ht.createElement(e,{is:a}):Ht.createElement(e);return e==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:e=>Ht.createTextNode(e),createComment:e=>Ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,s,n,o){const r=a?a.previousSibling:t.lastChild;if(n&&(n===o||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),a),!(n===o||!(n=n.nextSibling)););else{gr.innerHTML=Al(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const l=gr.content;if(s==="svg"||s==="mathml"){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}t.insertBefore(l,a)}return[r?r.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},Zt="transition",Va="animation",hs=Symbol("_vtc"),Cl={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},hu=Ke({},Wi,Cl),gu=e=>(e.displayName="Transition",e.props=hu,e),mu=gu((e,{slots:t})=>Ho(id,bu(e),t)),ba=(e,t=[])=>{ye(e)?e.forEach(a=>a(...t)):e&&e(...t)},mr=e=>e?ye(e)?e.some(t=>t.length>1):e.length>1:!1;function bu(e){const t={};for(const F in e)F in Cl||(t[F]=e[F]);if(e.css===!1)return t;const{name:a="v",type:s,duration:n,enterFromClass:o=`${a}-enter-from`,enterActiveClass:r=`${a}-enter-active`,enterToClass:l=`${a}-enter-to`,appearFromClass:i=o,appearActiveClass:c=r,appearToClass:u=l,leaveFromClass:d=`${a}-leave-from`,leaveActiveClass:p=`${a}-leave-active`,leaveToClass:f=`${a}-leave-to`}=e,g=vu(n),h=g&&g[0],E=g&&g[1],{onBeforeEnter:m,onEnter:_,onEnterCancelled:x,onLeave:k,onLeaveCancelled:I,onBeforeAppear:R=m,onAppear:N=_,onAppearCancelled:j=x}=t,$=(F,V,y,A)=>{F._enterCancelled=A,va(F,V?u:l),va(F,V?c:r),y&&y()},U=(F,V)=>{F._isLeaving=!1,va(F,d),va(F,f),va(F,p),V&&V()},z=F=>(V,y)=>{const A=F?N:_,S=()=>$(V,F,y);ba(A,[V,S]),br(()=>{va(V,F?i:o),Nt(V,F?u:l),mr(A)||vr(V,s,h,S)})};return Ke(t,{onBeforeEnter(F){ba(m,[F]),Nt(F,o),Nt(F,r)},onBeforeAppear(F){ba(R,[F]),Nt(F,i),Nt(F,c)},onEnter:z(!1),onAppear:z(!0),onLeave(F,V){F._isLeaving=!0;const y=()=>U(F,V);Nt(F,d),F._enterCancelled?(Nt(F,p),wr(F)):(wr(F),Nt(F,p)),br(()=>{F._isLeaving&&(va(F,d),Nt(F,f),mr(k)||vr(F,s,E,y))}),ba(k,[F,y])},onEnterCancelled(F){$(F,!1,void 0,!0),ba(x,[F])},onAppearCancelled(F){$(F,!0,void 0,!0),ba(j,[F])},onLeaveCancelled(F){U(F),ba(I,[F])}})}function vu(e){if(e==null)return null;if(De(e))return[Mn(e.enter),Mn(e.leave)];{const t=Mn(e);return[t,t]}}function Mn(e){return bc(e)}function Nt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[hs]||(e[hs]=new Set)).add(t)}function va(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const a=e[hs];a&&(a.delete(t),a.size||(e[hs]=void 0))}function br(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let _u=0;function vr(e,t,a,s){const n=e._endId=++_u,o=()=>{n===e._endId&&s()};if(a!=null)return setTimeout(o,a);const{type:r,timeout:l,propCount:i}=yu(e,t);if(!r)return s();const c=r+"end";let u=0;const d=()=>{e.removeEventListener(c,p),o()},p=f=>{f.target===e&&++u>=i&&d()};setTimeout(()=>{u<i&&d()},l+1),e.addEventListener(c,p)}function yu(e,t){const a=window.getComputedStyle(e),s=g=>(a[g]||"").split(", "),n=s(`${Zt}Delay`),o=s(`${Zt}Duration`),r=_r(n,o),l=s(`${Va}Delay`),i=s(`${Va}Duration`),c=_r(l,i);let u=null,d=0,p=0;t===Zt?r>0&&(u=Zt,d=r,p=o.length):t===Va?c>0&&(u=Va,d=c,p=i.length):(d=Math.max(r,c),u=d>0?r>c?Zt:Va:null,p=u?u===Zt?o.length:i.length:0);const f=u===Zt&&/\b(?:transform|all)(?:,|$)/.test(s(`${Zt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:f}}function _r(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,s)=>yr(a)+yr(e[s])))}function yr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function wr(e){return(e?e.ownerDocument:document).body.offsetHeight}function wu(e,t,a){const s=e[hs];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const Js=Symbol("_vod"),Pl=Symbol("_vsh"),Es={name:"show",beforeMount(e,{value:t},{transition:a}){e[Js]=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):qa(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:s}){!t!=!a&&(s?t?(s.beforeEnter(e),qa(e,!0),s.enter(e)):s.leave(e,()=>{qa(e,!1)}):qa(e,t))},beforeUnmount(e,{value:t}){qa(e,t)}};function qa(e,t){e.style.display=t?e[Js]:"none",e[Pl]=!t}const xu=Symbol(""),Tu=/(?:^|;)\s*display\s*:/;function Su(e,t,a){const s=e.style,n=Ue(a);let o=!1;if(a&&!n){if(t)if(Ue(t))for(const r of t.split(";")){const l=r.slice(0,r.indexOf(":")).trim();a[l]==null&&$s(s,l,"")}else for(const r in t)a[r]==null&&$s(s,r,"");for(const r in a)r==="display"&&(o=!0),$s(s,r,a[r])}else if(n){if(t!==a){const r=s[xu];r&&(a+=";"+r),s.cssText=a,o=Tu.test(a)}}else t&&e.removeAttribute("style");Js in e&&(e[Js]=o?s.display:"",e[Pl]&&(s.display="none"))}const xr=/\s*!important$/;function $s(e,t,a){if(ye(a))a.forEach(s=>$s(e,t,s));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const s=ku(e,t);xr.test(a)?e.setProperty(pa(s),a.replace(xr,""),"important"):e[s]=a}}const Tr=["Webkit","Moz","ms"],Dn={};function ku(e,t){const a=Dn[t];if(a)return a;let s=wt(t);if(s!=="filter"&&s in e)return Dn[t]=s;s=ln(s);for(let n=0;n<Tr.length;n++){const o=Tr[n]+s;if(o in e)return Dn[t]=o}return t}const Sr="http://www.w3.org/1999/xlink";function kr(e,t,a,s,n,o=Tc(t)){s&&t.startsWith("xlink:")?a==null?e.removeAttributeNS(Sr,t.slice(6,t.length)):e.setAttributeNS(Sr,t,a):a==null||o&&!_i(a)?e.removeAttribute(t):e.setAttribute(t,o?"":It(a)?String(a):a)}function Er(e,t,a,s,n){if(t==="innerHTML"||t==="textContent"){a!=null&&(e[t]=t==="innerHTML"?Al(a):a);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const l=o==="OPTION"?e.getAttribute("value")||"":e.value,i=a==null?e.type==="checkbox"?"on":"":String(a);(l!==i||!("_value"in e))&&(e.value=i),a==null&&e.removeAttribute(t),e._value=a;return}let r=!1;if(a===""||a==null){const l=typeof e[t];l==="boolean"?a=_i(a):a==null&&l==="string"?(a="",r=!0):l==="number"&&(a=0,r=!0)}try{e[t]=a}catch{}r&&e.removeAttribute(n||t)}function wa(e,t,a,s){e.addEventListener(t,a,s)}function Eu(e,t,a,s){e.removeEventListener(t,a,s)}const Ar=Symbol("_vei");function Au(e,t,a,s,n=null){const o=e[Ar]||(e[Ar]={}),r=o[t];if(s&&r)r.value=s;else{const[l,i]=Cu(t);if(s){const c=o[t]=Lu(s,n);wa(e,l,c,i)}else r&&(Eu(e,l,r,i),o[t]=void 0)}}const Cr=/(?:Once|Passive|Capture)$/;function Cu(e){let t;if(Cr.test(e)){t={};let s;for(;s=e.match(Cr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pa(e.slice(2)),t]}let Rn=0;const Pu=Promise.resolve(),Ou=()=>Rn||(Pu.then(()=>Rn=0),Rn=Date.now());function Lu(e,t){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;Tt(Mu(s,a.value),t,5,[s])};return a.value=e,a.attached=Ou(),a}function Mu(e,t){if(ye(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(s=>n=>!n._stopped&&s&&s(n))}else return t}const Pr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Du=(e,t,a,s,n,o)=>{const r=n==="svg";t==="class"?wu(e,s,r):t==="style"?Su(e,a,s):nn(t)?To(t)||Au(e,t,a,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ru(e,t,s,r))?(Er(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&kr(e,t,s,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ue(s))?Er(e,wt(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),kr(e,t,s,r))};function Ru(e,t,a,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Pr(t)&&we(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Pr(t)&&Ue(a)?!1:t in e}const Xs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ye(t)?a=>Ms(t,a):t};function Iu(e){e.target.composing=!0}function Or(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ba=Symbol("_assign");function Lr(e,t,a){return t&&(e=e.trim()),a&&(e=Eo(e)),e}const Ns={created(e,{modifiers:{lazy:t,trim:a,number:s}},n){e[Ba]=Xs(n);const o=s||n.props&&n.props.type==="number";wa(e,t?"change":"input",r=>{r.target.composing||e[Ba](Lr(e.value,a,o))}),(a||o)&&wa(e,"change",()=>{e.value=Lr(e.value,a,o)}),t||(wa(e,"compositionstart",Iu),wa(e,"compositionend",Or),wa(e,"change",Or))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:a,modifiers:{lazy:s,trim:n,number:o}},r){if(e[Ba]=Xs(r),e.composing)return;const l=(o||e.type==="number")&&!/^0\d/.test(e.value)?Eo(e.value):e.value,i=t??"";l!==i&&(document.activeElement===e&&e.type!=="range"&&(s&&t===a||n&&e.value.trim()===i)||(e.value=i))}},Ol={deep:!0,created(e,t,a){e[Ba]=Xs(a),wa(e,"change",()=>{const s=e._modelValue,n=$u(e),o=e.checked,r=e[Ba];if(ye(s)){const l=yi(s,n),i=l!==-1;if(o&&!i)r(s.concat(n));else if(!o&&i){const c=[...s];c.splice(l,1),r(c)}}else if(on(s)){const l=new Set(s);o?l.add(n):l.delete(n),r(l)}else r(Ll(e,o))})},mounted:Mr,beforeUpdate(e,t,a){e[Ba]=Xs(a),Mr(e,t,a)}};function Mr(e,{value:t,oldValue:a},s){e._modelValue=t;let n;if(ye(t))n=yi(t,s.props.value)>-1;else if(on(t))n=t.has(s.props.value);else{if(t===a)return;n=un(t,Ll(e,!0))}e.checked!==n&&(e.checked=n)}function $u(e){return"_value"in e?e._value:e.value}function Ll(e,t){const a=t?"_trueValue":"_falseValue";return a in e?e[a]:t}const Nu=["ctrl","shift","alt","meta"],Bu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Nu.some(a=>e[`${a}Key`]&&!t.includes(a))},Ea=(e,t)=>{const a=e._withMods||(e._withMods={}),s=t.join(".");return a[s]||(a[s]=((n,...o)=>{for(let r=0;r<t.length;r++){const l=Bu[t[r]];if(l&&l(n,t))return}return e(n,...o)}))},Fu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jt=(e,t)=>{const a=e._withKeys||(e._withKeys={}),s=t.join(".");return a[s]||(a[s]=(n=>{if(!("key"in n))return;const o=pa(n.key);if(t.some(r=>r===o||Fu[r]===o))return e(n)}))},zu=Ke({patchProp:Du},fu);let Dr;function Hu(){return Dr||(Dr=$d(zu))}const Uu=((...e)=>{const t=Hu().createApp(...e),{mount:a}=t;return t.mount=s=>{const n=ju(s);if(!n)return;const o=t._component;!we(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=a(n,!1,Gu(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},t});function Gu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ju(e){return Ue(e)?document.querySelector(e):e}let Ml;const _n=e=>Ml=e,Dl=Symbol();function po(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ns;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ns||(ns={}));function Vu(){const e=Si(!0),t=e.run(()=>Ce({}));let a=[],s=[];const n=Ro({install(o){_n(n),n._a=o,o.provide(Dl,n),o.config.globalProperties.$pinia=n,s.forEach(r=>a.push(r)),s=[]},use(o){return this._a?a.push(o):s.push(o),this},_p:a,_a:null,_e:e,_s:new Map,state:t});return n}const Rl=()=>{};function Rr(e,t,a,s=Rl){e.add(t);const n=()=>{e.delete(t)&&s()};return!a&&ki()&&kc(n),n}function Ca(e,...t){e.forEach(a=>{a(...t)})}const qu=e=>e(),Ir=Symbol(),In=Symbol();function fo(e,t){e instanceof Map&&t instanceof Map?t.forEach((a,s)=>e.set(s,a)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const a in t){if(!t.hasOwnProperty(a))continue;const s=t[a],n=e[a];po(n)&&po(s)&&e.hasOwnProperty(a)&&!Ge(s)&&!la(s)?e[a]=fo(n,s):e[a]=s}return e}const Yu=Symbol();function Ku(e){return!po(e)||!Object.prototype.hasOwnProperty.call(e,Yu)}const{assign:ta}=Object;function Wu(e){return!!(Ge(e)&&e.effect)}function Ju(e,t,a,s){const{state:n,actions:o,getters:r}=t,l=a.state.value[e];let i;function c(){l||(a.state.value[e]=n?n():{});const u=Kc(a.state.value[e]);return ta(u,o,Object.keys(r||{}).reduce((d,p)=>(d[p]=Ro(ve(()=>{_n(a);const f=a._s.get(e);return r[p].call(f,f)})),d),{}))}return i=Il(e,c,t,a,s,!0),i}function Il(e,t,a={},s,n,o){let r;const l=ta({actions:{}},a),i={deep:!0};let c,u,d=new Set,p=new Set,f;const g=s.state.value[e];!o&&!g&&(s.state.value[e]={}),Ce({});let h;function E(j){let $;c=u=!1,typeof j=="function"?(j(s.state.value[e]),$={type:ns.patchFunction,storeId:e,events:f}):(fo(s.state.value[e],j),$={type:ns.patchObject,payload:j,storeId:e,events:f});const U=h=Symbol();Io().then(()=>{h===U&&(c=!0)}),u=!0,Ca(d,$,s.state.value[e])}const m=o?function(){const{state:$}=a,U=$?$():{};this.$patch(z=>{ta(z,U)})}:Rl;function _(){r.stop(),d.clear(),p.clear(),s._s.delete(e)}const x=(j,$="")=>{if(Ir in j)return j[In]=$,j;const U=function(){_n(s);const z=Array.from(arguments),F=new Set,V=new Set;function y(D){F.add(D)}function A(D){V.add(D)}Ca(p,{args:z,name:U[In],store:I,after:y,onError:A});let S;try{S=j.apply(this&&this.$id===e?this:I,z)}catch(D){throw Ca(V,D),D}return S instanceof Promise?S.then(D=>(Ca(F,D),D)).catch(D=>(Ca(V,D),Promise.reject(D))):(Ca(F,S),S)};return U[Ir]=!0,U[In]=$,U},k={_p:s,$id:e,$onAction:Rr.bind(null,p),$patch:E,$reset:m,$subscribe(j,$={}){const U=Rr(d,j,$.detached,()=>z()),z=r.run(()=>Na(()=>s.state.value[e],F=>{($.flush==="sync"?u:c)&&j({storeId:e,type:ns.direct,events:f},F)},ta({},i,$)));return U},$dispose:_},I=Ot(k);s._s.set(e,I);const N=(s._a&&s._a.runWithContext||qu)(()=>s._e.run(()=>(r=Si()).run(()=>t({action:x}))));for(const j in N){const $=N[j];if(Ge($)&&!Wu($)||la($))o||(g&&Ku($)&&(Ge($)?$.value=g[j]:fo($,g[j])),s.state.value[e][j]=$);else if(typeof $=="function"){const U=x($,j);N[j]=U,l.actions[j]=$}}return ta(I,N),ta(Ee(I),N),Object.defineProperty(I,"$state",{get:()=>s.state.value[e],set:j=>{E($=>{ta($,j)})}}),s._p.forEach(j=>{ta(I,r.run(()=>j({store:I,app:s._a,pinia:s,options:l})))}),g&&o&&a.hydrate&&a.hydrate(I.$state,g),c=!0,u=!0,I}function Xu(e,t,a){let s;const n=typeof t=="function";s=n?a:t;function o(r,l){const i=Pd();return r=r||(i?yt(Dl,null):null),r&&_n(r),r=Ml,r._s.has(e)||(n?Il(e,t,s,r):Ju(e,s,r)),r._s.get(e)}return o.$id=e,o}const Da=typeof document<"u";function $l(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Qu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&$l(e.default)}const Oe=Object.assign;function $n(e,t){const a={};for(const s in t){const n=t[s];a[s]=St(n)?n.map(e):e(n)}return a}const os=()=>{},St=Array.isArray;function $r(e,t){const a={};for(const s in e)a[s]=s in t?t[s]:e[s];return a}const Nl=/#/g,Zu=/&/g,ep=/\//g,tp=/=/g,ap=/\?/g,Bl=/\+/g,sp=/%5B/g,np=/%5D/g,Fl=/%5E/g,op=/%60/g,zl=/%7B/g,rp=/%7C/g,Hl=/%7D/g,ip=/%20/g;function Uo(e){return e==null?"":encodeURI(""+e).replace(rp,"|").replace(sp,"[").replace(np,"]")}function lp(e){return Uo(e).replace(zl,"{").replace(Hl,"}").replace(Fl,"^")}function ho(e){return Uo(e).replace(Bl,"%2B").replace(ip,"+").replace(Nl,"%23").replace(Zu,"%26").replace(op,"`").replace(zl,"{").replace(Hl,"}").replace(Fl,"^")}function cp(e){return ho(e).replace(tp,"%3D")}function dp(e){return Uo(e).replace(Nl,"%23").replace(ap,"%3F")}function up(e){return dp(e).replace(ep,"%2F")}function gs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const pp=/\/$/,fp=e=>e.replace(pp,"");function Nn(e,t,a="/"){let s,n={},o="",r="";const l=t.indexOf("#");let i=t.indexOf("?");return i=l>=0&&i>l?-1:i,i>=0&&(s=t.slice(0,i),o=t.slice(i,l>0?l:t.length),n=e(o.slice(1))),l>=0&&(s=s||t.slice(0,l),r=t.slice(l,t.length)),s=bp(s??t,a),{fullPath:s+o+r,path:s,query:n,hash:gs(r)}}function hp(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function Nr(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gp(e,t,a){const s=t.matched.length-1,n=a.matched.length-1;return s>-1&&s===n&&Fa(t.matched[s],a.matched[n])&&Ul(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function Fa(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Ul(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!mp(e[a],t[a]))return!1;return!0}function mp(e,t){return St(e)?Br(e,t):St(t)?Br(t,e):e===t}function Br(e,t){return St(t)?e.length===t.length&&e.every((a,s)=>a===t[s]):e.length===1&&e[0]===t}function bp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),s=e.split("/"),n=s[s.length-1];(n===".."||n===".")&&s.push("");let o=a.length-1,r,l;for(r=0;r<s.length;r++)if(l=s[r],l!==".")if(l==="..")o>1&&o--;else break;return a.slice(0,o).join("/")+"/"+s.slice(r).join("/")}const ea={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let go=(function(e){return e.pop="pop",e.push="push",e})({}),Bn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function vp(e){if(!e)if(Da){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),fp(e)}const _p=/^[^#]+#/;function yp(e,t){return e.replace(_p,"#")+t}function wp(e,t){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-a.left-(t.left||0),top:s.top-a.top-(t.top||0)}}const yn=()=>({left:window.scrollX,top:window.scrollY});function xp(e){let t;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),n=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!n)return;t=wp(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fr(e,t){return(history.state?history.state.position-t:-1)+e}const mo=new Map;function Tp(e,t){mo.set(e,t)}function Sp(e){const t=mo.get(e);return mo.delete(e),t}function kp(e){return typeof e=="string"||e&&typeof e=="object"}function Gl(e){return typeof e=="string"||typeof e=="symbol"}let He=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const jl=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function za(e,t){return Oe(new Error,{type:e,[jl]:!0},t)}function Bt(e,t){return e instanceof Error&&jl in e&&(t==null||!!(e.type&t))}const Ep=["params","query","hash"];function Ap(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const a of Ep)a in e&&(t[a]=e[a]);return JSON.stringify(t,null,2)}function Cp(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<a.length;++s){const n=a[s].replace(Bl," "),o=n.indexOf("="),r=gs(o<0?n:n.slice(0,o)),l=o<0?null:gs(n.slice(o+1));if(r in t){let i=t[r];St(i)||(i=t[r]=[i]),i.push(l)}else t[r]=l}return t}function zr(e){let t="";for(let a in e){const s=e[a];if(a=cp(a),s==null){s!==void 0&&(t+=(t.length?"&":"")+a);continue}(St(s)?s.map(n=>n&&ho(n)):[s&&ho(s)]).forEach(n=>{n!==void 0&&(t+=(t.length?"&":"")+a,n!=null&&(t+="="+n))})}return t}function Pp(e){const t={};for(const a in e){const s=e[a];s!==void 0&&(t[a]=St(s)?s.map(n=>n==null?null:""+n):s==null?s:""+s)}return t}const Op=Symbol(""),Hr=Symbol(""),wn=Symbol(""),Go=Symbol(""),bo=Symbol("");function Ya(){let e=[];function t(s){return e.push(s),()=>{const n=e.indexOf(s);n>-1&&e.splice(n,1)}}function a(){e=[]}return{add:t,list:()=>e.slice(),reset:a}}function na(e,t,a,s,n,o=r=>r()){const r=s&&(s.enterCallbacks[n]=s.enterCallbacks[n]||[]);return()=>new Promise((l,i)=>{const c=p=>{p===!1?i(za(He.NAVIGATION_ABORTED,{from:a,to:t})):p instanceof Error?i(p):kp(p)?i(za(He.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(r&&s.enterCallbacks[n]===r&&typeof p=="function"&&r.push(p),l())},u=o(()=>e.call(s&&s.instances[n],t,a,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(p=>i(p))})}function Fn(e,t,a,s,n=o=>o()){const o=[];for(const r of e)for(const l in r.components){let i=r.components[l];if(!(t!=="beforeRouteEnter"&&!r.instances[l]))if($l(i)){const c=(i.__vccOpts||i)[t];c&&o.push(na(c,a,s,r,l,n))}else{let c=i();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${l}" at "${r.path}"`);const d=Qu(u)?u.default:u;r.mods[l]=u,r.components[l]=d;const p=(d.__vccOpts||d)[t];return p&&na(p,a,s,r,l,n)()}))}}return o}function Lp(e,t){const a=[],s=[],n=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const l=t.matched[r];l&&(e.matched.find(c=>Fa(c,l))?s.push(l):a.push(l));const i=e.matched[r];i&&(t.matched.find(c=>Fa(c,i))||n.push(i))}return[a,s,n]}let Mp=()=>location.protocol+"//"+location.host;function Vl(e,t){const{pathname:a,search:s,hash:n}=t,o=e.indexOf("#");if(o>-1){let r=n.includes(e.slice(o))?e.slice(o).length:1,l=n.slice(r);return l[0]!=="/"&&(l="/"+l),Nr(l,"")}return Nr(a,e)+s+n}function Dp(e,t,a,s){let n=[],o=[],r=null;const l=({state:p})=>{const f=Vl(e,location),g=a.value,h=t.value;let E=0;if(p){if(a.value=f,t.value=p,r&&r===g){r=null;return}E=h?p.position-h.position:0}else s(f);n.forEach(m=>{m(a.value,g,{delta:E,type:go.pop,direction:E?E>0?Bn.forward:Bn.back:Bn.unknown})})};function i(){r=a.value}function c(p){n.push(p);const f=()=>{const g=n.indexOf(p);g>-1&&n.splice(g,1)};return o.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Oe({},p.state,{scroll:yn()}),"")}}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:i,listen:c,destroy:d}}function Ur(e,t,a,s=!1,n=!1){return{back:e,current:t,forward:a,replaced:s,position:window.history.length,scroll:n?yn():null}}function Rp(e){const{history:t,location:a}=window,s={value:Vl(e,a)},n={value:t.state};n.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(i,c,u){const d=e.indexOf("#"),p=d>-1?(a.host&&document.querySelector("base")?e:e.slice(d))+i:Mp()+e+i;try{t[u?"replaceState":"pushState"](c,"",p),n.value=c}catch(f){console.error(f),a[u?"replace":"assign"](p)}}function r(i,c){o(i,Oe({},t.state,Ur(n.value.back,i,n.value.forward,!0),c,{position:n.value.position}),!0),s.value=i}function l(i,c){const u=Oe({},n.value,t.state,{forward:i,scroll:yn()});o(u.current,u,!0),o(i,Oe({},Ur(s.value,i,null),{position:u.position+1},c),!1),s.value=i}return{location:s,state:n,push:l,replace:r}}function Ip(e){e=vp(e);const t=Rp(e),a=Dp(e,t.state,t.location,t.replace);function s(o,r=!0){r||a.pauseListeners(),history.go(o)}const n=Oe({location:"",base:e,go:s,createHref:yp.bind(null,e)},t,a);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function $p(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Ip(e)}let Ta=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ye=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ye||{});const Np={type:Ta.Static,value:""},Bp=/[a-zA-Z0-9_]/;function Fp(e){if(!e)return[[]];if(e==="/")return[[Np]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${a})/"${c}": ${f}`)}let a=Ye.Static,s=a;const n=[];let o;function r(){o&&n.push(o),o=[]}let l=0,i,c="",u="";function d(){c&&(a===Ye.Static?o.push({type:Ta.Static,value:c}):a===Ye.Param||a===Ye.ParamRegExp||a===Ye.ParamRegExpEnd?(o.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Ta.Param,value:c,regexp:u,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=i}for(;l<e.length;){if(i=e[l++],i==="\\"&&a!==Ye.ParamRegExp){s=a,a=Ye.EscapeNext;continue}switch(a){case Ye.Static:i==="/"?(c&&d(),r()):i===":"?(d(),a=Ye.Param):p();break;case Ye.EscapeNext:p(),a=s;break;case Ye.Param:i==="("?a=Ye.ParamRegExp:Bp.test(i)?p():(d(),a=Ye.Static,i!=="*"&&i!=="?"&&i!=="+"&&l--);break;case Ye.ParamRegExp:i===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+i:a=Ye.ParamRegExpEnd:u+=i;break;case Ye.ParamRegExpEnd:d(),a=Ye.Static,i!=="*"&&i!=="?"&&i!=="+"&&l--,u="";break;default:t("Unknown state");break}}return a===Ye.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),r(),n}const Gr="[^/]+?",zp={sensitive:!1,strict:!1,start:!0,end:!0};var st=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(st||{});const Hp=/[.+*?^${}()[\]/\\]/g;function Up(e,t){const a=Oe({},zp,t),s=[];let n=a.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[st.Root];a.strict&&!c.length&&(n+="/");for(let d=0;d<c.length;d++){const p=c[d];let f=st.Segment+(a.sensitive?st.BonusCaseSensitive:0);if(p.type===Ta.Static)d||(n+="/"),n+=p.value.replace(Hp,"\\$&"),f+=st.Static;else if(p.type===Ta.Param){const{value:g,repeatable:h,optional:E,regexp:m}=p;o.push({name:g,repeatable:h,optional:E});const _=m||Gr;if(_!==Gr){f+=st.BonusCustomRegExp;try{`${_}`}catch(k){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+k.message)}}let x=h?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(x=E&&c.length<2?`(?:/${x})`:"/"+x),E&&(x+="?"),n+=x,f+=st.Dynamic,E&&(f+=st.BonusOptional),h&&(f+=st.BonusRepeatable),_===".*"&&(f+=st.BonusWildcard)}u.push(f)}s.push(u)}if(a.strict&&a.end){const c=s.length-1;s[c][s[c].length-1]+=st.BonusStrict}a.strict||(n+="/?"),a.end?n+="$":a.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const r=new RegExp(n,a.sensitive?"":"i");function l(c){const u=c.match(r),d={};if(!u)return null;for(let p=1;p<u.length;p++){const f=u[p]||"",g=o[p-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function i(c){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of p)if(f.type===Ta.Static)u+=f.value;else if(f.type===Ta.Param){const{value:g,repeatable:h,optional:E}=f,m=g in c?c[g]:"";if(St(m)&&!h)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=St(m)?m.join("/"):m;if(!_)if(E)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=_}}return u||"/"}return{re:r,score:s,keys:o,parse:l,stringify:i}}function Gp(e,t){let a=0;for(;a<e.length&&a<t.length;){const s=t[a]-e[a];if(s)return s;a++}return e.length<t.length?e.length===1&&e[0]===st.Static+st.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===st.Static+st.Segment?1:-1:0}function ql(e,t){let a=0;const s=e.score,n=t.score;for(;a<s.length&&a<n.length;){const o=Gp(s[a],n[a]);if(o)return o;a++}if(Math.abs(n.length-s.length)===1){if(jr(s))return 1;if(jr(n))return-1}return n.length-s.length}function jr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const jp={strict:!1,end:!0,sensitive:!1};function Vp(e,t,a){const s=Up(Fp(e.path),a),n=Oe(s,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function qp(e,t){const a=[],s=new Map;t=$r(jp,t);function n(d){return s.get(d)}function o(d,p,f){const g=!f,h=qr(d);h.aliasOf=f&&f.record;const E=$r(t,d),m=[h];if("alias"in d){const k=typeof d.alias=="string"?[d.alias]:d.alias;for(const I of k)m.push(qr(Oe({},h,{components:f?f.record.components:h.components,path:I,aliasOf:f?f.record:h})))}let _,x;for(const k of m){const{path:I}=k;if(p&&I[0]!=="/"){const R=p.record.path,N=R[R.length-1]==="/"?"":"/";k.path=p.record.path+(I&&N+I)}if(_=Vp(k,p,E),f?f.alias.push(_):(x=x||_,x!==_&&x.alias.push(_),g&&d.name&&!Yr(_)&&r(d.name)),Yl(_)&&i(_),h.children){const R=h.children;for(let N=0;N<R.length;N++)o(R[N],_,f&&f.children[N])}f=f||_}return x?()=>{r(x)}:os}function r(d){if(Gl(d)){const p=s.get(d);p&&(s.delete(d),a.splice(a.indexOf(p),1),p.children.forEach(r),p.alias.forEach(r))}else{const p=a.indexOf(d);p>-1&&(a.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function l(){return a}function i(d){const p=Wp(d,a);a.splice(p,0,d),d.record.name&&!Yr(d)&&s.set(d.record.name,d)}function c(d,p){let f,g={},h,E;if("name"in d&&d.name){if(f=s.get(d.name),!f)throw za(He.MATCHER_NOT_FOUND,{location:d});E=f.record.name,g=Oe(Vr(p.params,f.keys.filter(x=>!x.optional).concat(f.parent?f.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),d.params&&Vr(d.params,f.keys.map(x=>x.name))),h=f.stringify(g)}else if(d.path!=null)h=d.path,f=a.find(x=>x.re.test(h)),f&&(g=f.parse(h),E=f.record.name);else{if(f=p.name?s.get(p.name):a.find(x=>x.re.test(p.path)),!f)throw za(He.MATCHER_NOT_FOUND,{location:d,currentLocation:p});E=f.record.name,g=Oe({},p.params,d.params),h=f.stringify(g)}const m=[];let _=f;for(;_;)m.unshift(_.record),_=_.parent;return{name:E,path:h,params:g,matched:m,meta:Kp(m)}}e.forEach(d=>o(d));function u(){a.length=0,s.clear()}return{addRoute:o,resolve:c,removeRoute:r,clearRoutes:u,getRoutes:l,getRecordMatcher:n}}function Vr(e,t){const a={};for(const s of t)s in e&&(a[s]=e[s]);return a}function qr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Yp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Yp(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const s in e.components)t[s]=typeof a=="object"?a[s]:a;return t}function Yr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Kp(e){return e.reduce((t,a)=>Oe(t,a.meta),{})}function Wp(e,t){let a=0,s=t.length;for(;a!==s;){const o=a+s>>1;ql(e,t[o])<0?s=o:a=o+1}const n=Jp(e);return n&&(s=t.lastIndexOf(n,s-1)),s}function Jp(e){let t=e;for(;t=t.parent;)if(Yl(t)&&ql(e,t)===0)return t}function Yl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Kr(e){const t=yt(wn),a=yt(Go),s=ve(()=>{const i=ct(e.to);return t.resolve(i)}),n=ve(()=>{const{matched:i}=s.value,{length:c}=i,u=i[c-1],d=a.matched;if(!u||!d.length)return-1;const p=d.findIndex(Fa.bind(null,u));if(p>-1)return p;const f=Wr(i[c-2]);return c>1&&Wr(u)===f&&d[d.length-1].path!==f?d.findIndex(Fa.bind(null,i[c-2])):p}),o=ve(()=>n.value>-1&&tf(a.params,s.value.params)),r=ve(()=>n.value>-1&&n.value===a.matched.length-1&&Ul(a.params,s.value.params));function l(i={}){if(ef(i)){const c=t[ct(e.replace)?"replace":"push"](ct(e.to)).catch(os);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:ve(()=>s.value.href),isActive:o,isExactActive:r,navigate:l}}function Xp(e){return e.length===1?e[0]:e}const Qp=el({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Kr,setup(e,{slots:t}){const a=Ot(Kr(e)),{options:s}=yt(wn),n=ve(()=>({[Jr(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[Jr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const o=t.default&&Xp(t.default(a));return e.custom?o:Ho("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:n.value},o)}}}),Zp=Qp;function ef(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function tf(e,t){for(const a in t){const s=t[a],n=e[a];if(typeof s=="string"){if(s!==n)return!1}else if(!St(n)||n.length!==s.length||s.some((o,r)=>o!==n[r]))return!1}return!0}function Wr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Jr=(e,t,a)=>e??t??a,af=el({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){const s=yt(bo),n=ve(()=>e.route||s.value),o=yt(Hr,0),r=ve(()=>{let c=ct(o);const{matched:u}=n.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),l=ve(()=>n.value.matched[r.value]);Ds(Hr,ve(()=>r.value+1)),Ds(Op,l),Ds(bo,n);const i=Ce();return Na(()=>[i.value,l.value,e.name],([c,u,d],[p,f,g])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Fa(u,f)||!p)&&(u.enterCallbacks[d]||[]).forEach(h=>h(c))},{flush:"post"}),()=>{const c=n.value,u=e.name,d=l.value,p=d&&d.components[u];if(!p)return Xr(a.default,{Component:p,route:c});const f=d.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,E=Ho(p,Oe({},g,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(d.instances[u]=null)},ref:i}));return Xr(a.default,{Component:E,route:c})||E}}});function Xr(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const Kl=af;function sf(e){const t=qp(e.routes,e),a=e.parseQuery||Cp,s=e.stringifyQuery||zr,n=e.history,o=Ya(),r=Ya(),l=Ya(),i=Vc(ea);let c=ea;Da&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=$n.bind(null,H=>""+H),d=$n.bind(null,up),p=$n.bind(null,gs);function f(H,Z){let ee,de;return Gl(H)?(ee=t.getRecordMatcher(H),de=Z):de=H,t.addRoute(de,ee)}function g(H){const Z=t.getRecordMatcher(H);Z&&t.removeRoute(Z)}function h(){return t.getRoutes().map(H=>H.record)}function E(H){return!!t.getRecordMatcher(H)}function m(H,Z){if(Z=Oe({},Z||i.value),typeof H=="string"){const v=Nn(a,H,Z.path),C=t.resolve({path:v.path},Z),P=n.createHref(v.fullPath);return Oe(v,C,{params:p(C.params),hash:gs(v.hash),redirectedFrom:void 0,href:P})}let ee;if(H.path!=null)ee=Oe({},H,{path:Nn(a,H.path,Z.path).path});else{const v=Oe({},H.params);for(const C in v)v[C]==null&&delete v[C];ee=Oe({},H,{params:d(v)}),Z.params=d(Z.params)}const de=t.resolve(ee,Z),ce=H.hash||"";de.params=u(p(de.params));const w=hp(s,Oe({},H,{hash:lp(ce),path:de.path})),L=n.createHref(w);return Oe({fullPath:w,hash:ce,query:s===zr?Pp(H.query):H.query||{}},de,{redirectedFrom:void 0,href:L})}function _(H){return typeof H=="string"?Nn(a,H,i.value.path):Oe({},H)}function x(H,Z){if(c!==H)return za(He.NAVIGATION_CANCELLED,{from:Z,to:H})}function k(H){return N(H)}function I(H){return k(Oe(_(H),{replace:!0}))}function R(H,Z){const ee=H.matched[H.matched.length-1];if(ee&&ee.redirect){const{redirect:de}=ee;let ce=typeof de=="function"?de(H,Z):de;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=_(ce):{path:ce},ce.params={}),Oe({query:H.query,hash:H.hash,params:ce.path!=null?{}:H.params},ce)}}function N(H,Z){const ee=c=m(H),de=i.value,ce=H.state,w=H.force,L=H.replace===!0,v=R(ee,de);if(v)return N(Oe(_(v),{state:typeof v=="object"?Oe({},ce,v.state):ce,force:w,replace:L}),Z||ee);const C=ee;C.redirectedFrom=Z;let P;return!w&&gp(s,de,ee)&&(P=za(He.NAVIGATION_DUPLICATED,{to:C,from:de}),W(de,de,!0,!1)),(P?Promise.resolve(P):U(C,de)).catch(B=>Bt(B)?Bt(B,He.NAVIGATION_GUARD_REDIRECT)?B:X(B):O(B,C,de)).then(B=>{if(B){if(Bt(B,He.NAVIGATION_GUARD_REDIRECT))return N(Oe({replace:L},_(B.to),{state:typeof B.to=="object"?Oe({},ce,B.to.state):ce,force:w}),Z||C)}else B=F(C,de,!0,L,ce);return z(C,de,B),B})}function j(H,Z){const ee=x(H,Z);return ee?Promise.reject(ee):Promise.resolve()}function $(H){const Z=ae.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(H):H()}function U(H,Z){let ee;const[de,ce,w]=Lp(H,Z);ee=Fn(de.reverse(),"beforeRouteLeave",H,Z);for(const v of de)v.leaveGuards.forEach(C=>{ee.push(na(C,H,Z))});const L=j.bind(null,H,Z);return ee.push(L),ne(ee).then(()=>{ee=[];for(const v of o.list())ee.push(na(v,H,Z));return ee.push(L),ne(ee)}).then(()=>{ee=Fn(ce,"beforeRouteUpdate",H,Z);for(const v of ce)v.updateGuards.forEach(C=>{ee.push(na(C,H,Z))});return ee.push(L),ne(ee)}).then(()=>{ee=[];for(const v of w)if(v.beforeEnter)if(St(v.beforeEnter))for(const C of v.beforeEnter)ee.push(na(C,H,Z));else ee.push(na(v.beforeEnter,H,Z));return ee.push(L),ne(ee)}).then(()=>(H.matched.forEach(v=>v.enterCallbacks={}),ee=Fn(w,"beforeRouteEnter",H,Z,$),ee.push(L),ne(ee))).then(()=>{ee=[];for(const v of r.list())ee.push(na(v,H,Z));return ee.push(L),ne(ee)}).catch(v=>Bt(v,He.NAVIGATION_CANCELLED)?v:Promise.reject(v))}function z(H,Z,ee){l.list().forEach(de=>$(()=>de(H,Z,ee)))}function F(H,Z,ee,de,ce){const w=x(H,Z);if(w)return w;const L=Z===ea,v=Da?history.state:{};ee&&(de||L?n.replace(H.fullPath,Oe({scroll:L&&v&&v.scroll},ce)):n.push(H.fullPath,ce)),i.value=H,W(H,Z,ee,L),X()}let V;function y(){V||(V=n.listen((H,Z,ee)=>{if(!te.listening)return;const de=m(H),ce=R(de,te.currentRoute.value);if(ce){N(Oe(ce,{replace:!0,force:!0}),de).catch(os);return}c=de;const w=i.value;Da&&Tp(Fr(w.fullPath,ee.delta),yn()),U(de,w).catch(L=>Bt(L,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?L:Bt(L,He.NAVIGATION_GUARD_REDIRECT)?(N(Oe(_(L.to),{force:!0}),de).then(v=>{Bt(v,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!ee.delta&&ee.type===go.pop&&n.go(-1,!1)}).catch(os),Promise.reject()):(ee.delta&&n.go(-ee.delta,!1),O(L,de,w))).then(L=>{L=L||F(de,w,!1),L&&(ee.delta&&!Bt(L,He.NAVIGATION_CANCELLED)?n.go(-ee.delta,!1):ee.type===go.pop&&Bt(L,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),z(de,w,L)}).catch(os)}))}let A=Ya(),S=Ya(),D;function O(H,Z,ee){X(H);const de=S.list();return de.length?de.forEach(ce=>ce(H,Z,ee)):console.error(H),Promise.reject(H)}function q(){return D&&i.value!==ea?Promise.resolve():new Promise((H,Z)=>{A.add([H,Z])})}function X(H){return D||(D=!H,y(),A.list().forEach(([Z,ee])=>H?ee(H):Z()),A.reset()),H}function W(H,Z,ee,de){const{scrollBehavior:ce}=e;if(!Da||!ce)return Promise.resolve();const w=!ee&&Sp(Fr(H.fullPath,0))||(de||!ee)&&history.state&&history.state.scroll||null;return Io().then(()=>ce(H,Z,w)).then(L=>L&&xp(L)).catch(L=>O(L,H,Z))}const oe=H=>n.go(H);let se;const ae=new Set,te={currentRoute:i,listening:!0,addRoute:f,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:E,getRoutes:h,resolve:m,options:e,push:k,replace:I,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:o.add,beforeResolve:r.add,afterEach:l.add,onError:S.add,isReady:q,install(H){H.component("RouterLink",Zp),H.component("RouterView",Kl),H.config.globalProperties.$router=te,Object.defineProperty(H.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(i)}),Da&&!se&&i.value===ea&&(se=!0,k(n.location).catch(de=>{}));const Z={};for(const de in ea)Object.defineProperty(Z,de,{get:()=>i.value[de],enumerable:!0});H.provide(wn,te),H.provide(Go,zi(Z)),H.provide(bo,i);const ee=H.unmount;ae.add(H),H.unmount=function(){ae.delete(H),ae.size<1&&(c=ea,V&&V(),V=null,i.value=ea,se=!1,D=!1),ee()}}};function ne(H){return H.reduce((Z,ee)=>Z.then(()=>$(ee)),Promise.resolve())}return te}function it(){return yt(wn)}function ys(e){return yt(Go)}var nf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function of(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},rf=Ja.exports,Qr;function lf(){return Qr||(Qr=1,(function(e,t){(function(a,s){var n={};a.PubSub?(n=a.PubSub,console.warn("PubSub already loaded, using existing version")):(a.PubSub=n,s(n)),e!==void 0&&e.exports&&(t=e.exports=n),t.PubSub=n,e.exports=t=n})(typeof window=="object"&&window||rf||nf,function(a){var s={},n=-1,o="*";function r(h){var E;for(E in h)if(Object.prototype.hasOwnProperty.call(h,E))return!0;return!1}function l(h){return function(){throw h}}function i(h,E,m){try{h(E,m)}catch(_){setTimeout(l(_),0)}}function c(h,E,m){h(E,m)}function u(h,E,m,_){var x=s[E],k=_?c:i,I;if(Object.prototype.hasOwnProperty.call(s,E))for(I in x)Object.prototype.hasOwnProperty.call(x,I)&&k(x[I],h,m)}function d(h,E,m){return function(){var x=String(h),k=x.lastIndexOf(".");for(u(h,h,E,m);k!==-1;)x=x.substr(0,k),k=x.lastIndexOf("."),u(h,x,E,m);u(h,o,E,m)}}function p(h){var E=String(h),m=!!(Object.prototype.hasOwnProperty.call(s,E)&&r(s[E]));return m}function f(h){for(var E=String(h),m=p(E)||p(o),_=E.lastIndexOf(".");!m&&_!==-1;)E=E.substr(0,_),_=E.lastIndexOf("."),m=p(E);return m}function g(h,E,m,_){h=typeof h=="symbol"?h.toString():h;var x=d(h,E,_),k=f(h);return k?(m===!0?x():setTimeout(x,0),!0):!1}a.publish=function(h,E){return g(h,E,!1,a.immediateExceptions)},a.publishSync=function(h,E){return g(h,E,!0,a.immediateExceptions)},a.subscribe=function(h,E){if(typeof E!="function")return!1;h=typeof h=="symbol"?h.toString():h,Object.prototype.hasOwnProperty.call(s,h)||(s[h]={});var m="uid_"+String(++n);return s[h][m]=E,m},a.subscribeAll=function(h){return a.subscribe(o,h)},a.subscribeOnce=function(h,E){var m=a.subscribe(h,function(){a.unsubscribe(m),E.apply(this,arguments)});return a},a.clearAllSubscriptions=function(){s={}},a.clearSubscriptions=function(E){var m;for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(E)===0&&delete s[m]},a.countSubscriptions=function(E){var m,_,x=0;for(m in s)if(Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(E)===0){for(_ in s[m])x++;break}return x},a.getSubscriptions=function(E){var m,_=[];for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(E)===0&&_.push(m);return _},a.unsubscribe=function(h){var E=function(j){var $;for($ in s)if(Object.prototype.hasOwnProperty.call(s,$)&&$.indexOf(j)===0)return!0;return!1},m=typeof h=="string"&&(Object.prototype.hasOwnProperty.call(s,h)||E(h)),_=!m&&typeof h=="string",x=typeof h=="function",k=!1,I,R,N;if(m){a.clearSubscriptions(h);return}for(I in s)if(Object.prototype.hasOwnProperty.call(s,I)){if(R=s[I],_&&R[h]){delete R[h],k=h;break}if(x)for(N in R)Object.prototype.hasOwnProperty.call(R,N)&&R[N]===h&&(delete R[N],k=!0)}return k}})})(Ja,Ja.exports)),Ja.exports}var cf=lf();const le=of(cf);let qe=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!0,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!0,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!0,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!0,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!0,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const df={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function ua(e){return new Promise((t,a)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>a(e.error)})}function uf(e,t){let a;const s=()=>{if(a)return a;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),a=ua(n),a.then(o=>{o.onclose=()=>a=void 0},()=>{}),a};return(n,o)=>s().then(r=>o(r.transaction(t,n).objectStore(t)))}let zn;function ws(){return zn||(zn=uf("keyval-store","keyval")),zn}function pf(e,t=ws()){return t("readonly",a=>ua(a.get(e)))}function Zr(e,t,a=ws()){return a("readwrite",s=>(s.put(t,e),ua(s.transaction)))}function Hn(e,t=ws()){return t("readwrite",a=>(a.delete(e),ua(a.transaction)))}function Wl(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},ua(e.transaction)}function Pa(e=ws()){return e("readonly",t=>{if(t.getAllKeys)return ua(t.getAllKeys());const a=[];return Wl(t,s=>a.push(s.key)).then(()=>a)})}function ff(e=ws()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([ua(t.getAllKeys()),ua(t.getAll())]).then(([s,n])=>s.map((o,r)=>[o,n[r]]));const a=[];return e("readonly",s=>Wl(s,n=>a.push([n.key,n.value])).then(()=>a))})}const Ha=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Qs=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a+=1)if(!Qs(e[a],t[a]))return!1;return!0}if(Ha(e)&&Ha(t)){const a=Object.entries(e),s=new Set(Object.keys(t));if(a.length!==s.size)return!1;for(const[n,o]of a){if(!Qs(o,t[n]))return!1;s.delete(n)}return s.size===0}return!1},As=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ha(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},hf=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",ei=e=>e>="0"&&e<="9"||e==="-",gf=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var K;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(K||(K={}));const ti={"(":K.TOK_LPAREN,")":K.TOK_RPAREN,"*":K.TOK_STAR,",":K.TOK_COMMA,".":K.TOK_DOT,":":K.TOK_COLON,"@":K.TOK_CURRENT,$:K.TOK_ROOT,"]":K.TOK_RBRACKET,"{":K.TOK_LBRACE,"}":K.TOK_RBRACE},mf={"!":!0,"<":!0,"=":!0,">":!0},bf={"	":!0,"\n":!0,"\r":!0," ":!0};class vf{constructor(){this._current=0}tokenize(t){const a=[];this._current=0;let s,n,o;for(;this._current<t.length;)if(hf(t[this._current]))s=this._current,n=this.consumeUnquotedIdentifier(t),a.push({start:s,type:K.TOK_UNQUOTEDIDENTIFIER,value:n});else if(ti[t[this._current]]!==void 0)a.push({start:this._current,type:ti[t[this._current]],value:t[this._current]}),this._current+=1;else if(ei(t[this._current]))o=this.consumeNumber(t),a.push(o);else if(t[this._current]==="[")o=this.consumeLBracket(t),a.push(o);else if(t[this._current]==='"')s=this._current,n=this.consumeQuotedIdentifier(t),a.push({start:s,type:K.TOK_QUOTEDIDENTIFIER,value:n});else if(t[this._current]==="'")s=this._current,n=this.consumeRawStringLiteral(t),a.push({start:s,type:K.TOK_LITERAL,value:n});else if(t[this._current]==="`"){s=this._current;const r=this.consumeLiteral(t);a.push({start:s,type:K.TOK_LITERAL,value:r})}else if(mf[t[this._current]]!==void 0)o=this.consumeOperator(t),o&&a.push(o);else if(bf[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")s=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,a.push({start:s,type:K.TOK_AND,value:"&&"})):a.push({start:s,type:K.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")s=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,a.push({start:s,type:K.TOK_OR,value:"||"})):a.push({start:s,type:K.TOK_PIPE,value:"|"});else{const r=new Error(`Unknown character: ${t[this._current]}`);throw r.name="LexerError",r}return a}consumeUnquotedIdentifier(t){const a=this._current;for(this._current+=1;this._current<t.length&&gf(t[this._current]);)this._current+=1;return t.slice(a,this._current)}consumeQuotedIdentifier(t){const a=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=='"'&&this._current<s;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==='"')?n+=2:n+=1,this._current=n}return this._current+=1,JSON.parse(t.slice(a,this._current))}consumeRawStringLiteral(t){const a=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=="'"&&this._current<s;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="'")?o+=2:o+=1,this._current=o}return this._current+=1,t.slice(a+1,this._current-1).replace("\\'","'")}consumeNumber(t){const a=this._current;this._current+=1;const s=t.length;for(;ei(t[this._current])&&this._current<s;)this._current+=1;const n=parseInt(t.slice(a,this._current),10);return{start:a,value:n,type:K.TOK_NUMBER}}consumeLBracket(t){const a=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:a,type:K.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:a,type:K.TOK_FLATTEN,value:"[]"}):{start:a,type:K.TOK_LBRACKET,value:"["}}consumeOperator(t){const a=this._current,s=t[a];if(this._current+=1,s==="!")return t[this._current]==="="?(this._current+=1,{start:a,type:K.TOK_NE,value:"!="}):{start:a,type:K.TOK_NOT,value:"!"};if(s==="<")return t[this._current]==="="?(this._current+=1,{start:a,type:K.TOK_LTE,value:"<="}):{start:a,type:K.TOK_LT,value:"<"};if(s===">")return t[this._current]==="="?(this._current+=1,{start:a,type:K.TOK_GTE,value:">="}):{start:a,type:K.TOK_GT,value:">"};if(s==="="&&t[this._current]==="=")return this._current+=1,{start:a,type:K.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const a=this._current,s=t.length;for(;t[this._current]!=="`"&&this._current<s;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="`")?r+=2:r+=1,this._current=r}let n=t.slice(a,this._current).trimLeft();n=n.replace("\\`","`");const o=this.looksLikeJSON(n)?JSON.parse(n):JSON.parse(`"${n}"`);return this._current+=1,o}looksLikeJSON(t){const s=["true","false","null"],n="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||s.includes(t))return!0;if(n.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Jl=new vf,Je={[K.TOK_EOF]:0,[K.TOK_UNQUOTEDIDENTIFIER]:0,[K.TOK_QUOTEDIDENTIFIER]:0,[K.TOK_RBRACKET]:0,[K.TOK_RPAREN]:0,[K.TOK_COMMA]:0,[K.TOK_RBRACE]:0,[K.TOK_NUMBER]:0,[K.TOK_CURRENT]:0,[K.TOK_EXPREF]:0,[K.TOK_ROOT]:0,[K.TOK_PIPE]:1,[K.TOK_OR]:2,[K.TOK_AND]:3,[K.TOK_EQ]:5,[K.TOK_GT]:5,[K.TOK_LT]:5,[K.TOK_GTE]:5,[K.TOK_LTE]:5,[K.TOK_NE]:5,[K.TOK_FLATTEN]:9,[K.TOK_STAR]:20,[K.TOK_FILTER]:21,[K.TOK_DOT]:40,[K.TOK_NOT]:45,[K.TOK_LBRACE]:50,[K.TOK_LBRACKET]:55,[K.TOK_LPAREN]:60};class _f{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const a=this.expression(0);if(this.lookahead(0)!==K.TOK_EOF){const s=this.lookaheadToken(0);this.errorToken(s,`Unexpected token type: ${s.type}, value: ${s.value}`)}return a}loadTokens(t){this.tokens=[...Jl.tokenize(t),{type:K.TOK_EOF,value:"",start:t.length}]}expression(t){const a=this.lookaheadToken(0);this.advance();let s=this.nud(a),n=this.lookahead(0);for(;t<Je[n];)this.advance(),s=this.led(n,s),n=this.lookahead(0);return s}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let a,s,n;switch(t.type){case K.TOK_LITERAL:return{type:"Literal",value:t.value};case K.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case K.TOK_QUOTEDIDENTIFIER:const o={type:"Field",name:t.value};if(this.lookahead(0)===K.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return o;case K.TOK_NOT:return s=this.expression(Je.Not),{type:"NotExpression",children:[s]};case K.TOK_STAR:return a={type:"Identity"},s=this.lookahead(0)===K.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Je.Star),{type:"ValueProjection",children:[a,s]};case K.TOK_FILTER:return this.led(t.type,{type:"Identity"});case K.TOK_LBRACE:return this.parseMultiselectHash();case K.TOK_FLATTEN:return a={type:K.TOK_FLATTEN,children:[{type:"Identity"}]},s=this.parseProjectionRHS(Je.Flatten),{type:"Projection",children:[a,s]};case K.TOK_LBRACKET:return this.lookahead(0)===K.TOK_NUMBER||this.lookahead(0)===K.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},s)):this.lookahead(0)===K.TOK_STAR&&this.lookahead(1)===K.TOK_RBRACKET?(this.advance(),this.advance(),s=this.parseProjectionRHS(Je.Star),{children:[{type:"Identity"},s],type:"Projection"}):this.parseMultiselectList();case K.TOK_CURRENT:return{type:K.TOK_CURRENT};case K.TOK_ROOT:return{type:K.TOK_ROOT};case K.TOK_EXPREF:return n=this.expression(Je.Expref),{type:"ExpressionReference",children:[n]};case K.TOK_LPAREN:const r=[];for(;this.lookahead(0)!==K.TOK_RPAREN;)this.lookahead(0)===K.TOK_CURRENT?(n={type:K.TOK_CURRENT},this.advance()):n=this.expression(0),r.push(n);return this.match(K.TOK_RPAREN),r[0];default:this.errorToken(t)}}led(t,a){let s;switch(t){case K.TOK_DOT:const n=Je.Dot;return this.lookahead(0)!==K.TOK_STAR?(s=this.parseDotRHS(n),{type:"Subexpression",children:[a,s]}):(this.advance(),s=this.parseProjectionRHS(n),{type:"ValueProjection",children:[a,s]});case K.TOK_PIPE:return s=this.expression(Je.Pipe),{type:K.TOK_PIPE,children:[a,s]};case K.TOK_OR:return s=this.expression(Je.Or),{type:"OrExpression",children:[a,s]};case K.TOK_AND:return s=this.expression(Je.And),{type:"AndExpression",children:[a,s]};case K.TOK_LPAREN:const o=a.name,r=[];let l;for(;this.lookahead(0)!==K.TOK_RPAREN;)this.lookahead(0)===K.TOK_CURRENT?(l={type:K.TOK_CURRENT},this.advance()):l=this.expression(0),this.lookahead(0)===K.TOK_COMMA&&this.match(K.TOK_COMMA),r.push(l);return this.match(K.TOK_RPAREN),{name:o,type:"Function",children:r};case K.TOK_FILTER:const c=this.expression(0);return this.match(K.TOK_RBRACKET),s=this.lookahead(0)===K.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Je.Filter),{type:"FilterProjection",children:[a,s,c]};case K.TOK_FLATTEN:const u={type:K.TOK_FLATTEN,children:[a]},d=this.parseProjectionRHS(Je.Flatten);return{type:"Projection",children:[u,d]};case K.TOK_EQ:case K.TOK_NE:case K.TOK_GT:case K.TOK_GTE:case K.TOK_LT:case K.TOK_LTE:return this.parseComparator(a,t);case K.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===K.TOK_NUMBER||p.type===K.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice(a,s)):(this.match(K.TOK_STAR),this.match(K.TOK_RBRACKET),s=this.parseProjectionRHS(Je.Star),{type:"Projection",children:[a,s]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const a=this.lookaheadToken(0);this.errorToken(a,`Expected ${t}, got: ${a.type}`)}}errorToken(t,a=""){const s=new Error(a||`Invalid token (${t.type}): "${t.value}"`);throw s.name="ParserError",s}parseIndexExpression(){if(this.lookahead(0)===K.TOK_COLON||this.lookahead(1)===K.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(K.TOK_RBRACKET),t}projectIfSlice(t,a){const s={type:"IndexExpression",children:[t,a]};return a.type==="Slice"?{children:[s,this.parseProjectionRHS(Je.Star)],type:"Projection"}:s}parseSliceExpression(){const t=[null,null,null];let a=0,s=this.lookahead(0);for(;s!==K.TOK_RBRACKET&&a<3;){if(s===K.TOK_COLON)a+=1,this.advance();else if(s===K.TOK_NUMBER)t[a]=this.lookaheadToken(0).value,this.advance();else{const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}s=this.lookahead(0)}return this.match(K.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,a){const s=this.expression(Je[a]);return{type:"Comparator",name:a,children:[t,s]}}parseDotRHS(t){const a=this.lookahead(0);if([K.TOK_UNQUOTEDIDENTIFIER,K.TOK_QUOTEDIDENTIFIER,K.TOK_STAR].includes(a))return this.expression(t);if(a===K.TOK_LBRACKET)return this.match(K.TOK_LBRACKET),this.parseMultiselectList();if(a===K.TOK_LBRACE)return this.match(K.TOK_LBRACE),this.parseMultiselectHash();const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseProjectionRHS(t){if(Je[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===K.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===K.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===K.TOK_DOT)return this.match(K.TOK_DOT),this.parseDotRHS(t);const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==K.TOK_RBRACKET;){const a=this.expression(0);if(t.push(a),this.lookahead(0)===K.TOK_COMMA&&(this.match(K.TOK_COMMA),this.lookahead(0)===K.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(K.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],a=[K.TOK_UNQUOTEDIDENTIFIER,K.TOK_QUOTEDIDENTIFIER];let s,n,o;for(;;){if(s=this.lookaheadToken(0),!a.includes(s.type))throw new Error(`Expecting an identifier token, got: ${s.type}`);if(n=s.value,this.advance(),this.match(K.TOK_COLON),o=this.expression(0),t.push({value:o,type:"KeyValuePair",name:n}),this.lookahead(0)===K.TOK_COMMA)this.match(K.TOK_COMMA);else if(this.lookahead(0)===K.TOK_RBRACE){this.match(K.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const Xl=new _f;var ue;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(ue||(ue={}));class yf{constructor(t){this.TYPE_NAME_TABLE={[ue.TYPE_NUMBER]:"number",[ue.TYPE_ANY]:"any",[ue.TYPE_STRING]:"string",[ue.TYPE_ARRAY]:"array",[ue.TYPE_OBJECT]:"object",[ue.TYPE_BOOLEAN]:"boolean",[ue.TYPE_EXPREF]:"expression",[ue.TYPE_NULL]:"null",[ue.TYPE_ARRAY_NUMBER]:"Array<number>",[ue.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([a])=>Math.abs(a),this.functionAvg=([a])=>{let s=0;for(let n=0;n<a.length;n+=1)s+=a[n];return s/a.length},this.functionCeil=([a])=>Math.ceil(a),this.functionContains=a=>{const[s,n]=a;return s.includes(n)},this.functionEndsWith=a=>{const[s,n]=a;return s.includes(n,s.length-n.length)},this.functionFloor=([a])=>Math.floor(a),this.functionJoin=a=>{const[s,n]=a;return n.join(s)},this.functionKeys=([a])=>Object.keys(a),this.functionLength=([a])=>Ha(a)?Object.keys(a).length:a.length,this.functionMap=a=>{if(!this._interpreter)return[];const s=[],n=this._interpreter,o=a[0],r=a[1];for(let l=0;l<r.length;l+=1)s.push(n.visit(o,r[l]));return s},this.functionMax=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===ue.TYPE_NUMBER)return Math.max(...a);const n=a;let o=n[0];for(let r=1;r<n.length;r+=1)o.localeCompare(n[r])<0&&(o=n[r]);return o},this.functionMaxBy=a=>{const s=a[1],n=a[0],o=this.createKeyFunction(s,[ue.TYPE_NUMBER,ue.TYPE_STRING]);let r=-1/0,l,i;for(let c=0;c<n.length;c+=1)i=o&&o(n[c]),i!==void 0&&i>r&&(r=i,l=n[c]);return l},this.functionMerge=a=>{let s={};for(let n=0;n<a.length;n+=1){const o=a[n];s=Object.assign(s,o)}return s},this.functionMin=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===ue.TYPE_NUMBER)return Math.min(...a);const n=a;let o=n[0];for(let r=1;r<n.length;r+=1)n[r].localeCompare(o)<0&&(o=n[r]);return o},this.functionMinBy=a=>{const s=a[1],n=a[0],o=this.createKeyFunction(s,[ue.TYPE_NUMBER,ue.TYPE_STRING]);let r=1/0,l,i;for(let c=0;c<n.length;c+=1)i=o&&o(n[c]),i!==void 0&&i<r&&(r=i,l=n[c]);return l},this.functionNotNull=a=>{for(let s=0;s<a.length;s+=1)if(this.getTypeName(a[s])!==ue.TYPE_NULL)return a[s];return null},this.functionReverse=([a])=>{if(this.getTypeName(a)===ue.TYPE_STRING){const o=a;let r="";for(let l=o.length-1;l>=0;l-=1)r+=o[l];return r}const n=a.slice(0);return n.reverse(),n},this.functionSort=([a])=>[...a].sort(),this.functionSortBy=a=>{if(!this._interpreter)return[];const s=a[0].slice(0);if(s.length===0)return s;const n=this._interpreter,o=a[1],r=this.getTypeName(n.visit(o,s[0]));if(r!==void 0&&![ue.TYPE_NUMBER,ue.TYPE_STRING].includes(r))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[r]})`);const l=[];for(let i=0;i<s.length;i+=1)l.push([i,s[i]]);l.sort((i,c)=>{const u=n.visit(o,i[1]),d=n.visit(o,c[1]);if(this.getTypeName(u)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);if(this.getTypeName(d)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);return u>d?1:u<d?-1:i[0]-c[0]});for(let i=0;i<l.length;i+=1)s[i]=l[i][1];return s},this.functionStartsWith=([a,s])=>a.startsWith(s),this.functionSum=([a])=>a.reduce((s,n)=>s+n,0),this.functionToArray=([a])=>this.getTypeName(a)===ue.TYPE_ARRAY?a:[a],this.functionToNumber=([a])=>{const s=this.getTypeName(a);let n;return s===ue.TYPE_NUMBER?a:s===ue.TYPE_STRING&&(n=+a,!isNaN(n))?n:null},this.functionToString=([a])=>this.getTypeName(a)===ue.TYPE_STRING?a:JSON.stringify(a),this.functionType=([a])=>{switch(this.getTypeName(a)){case ue.TYPE_NUMBER:return"number";case ue.TYPE_STRING:return"string";case ue.TYPE_ARRAY:return"array";case ue.TYPE_OBJECT:return"object";case ue.TYPE_BOOLEAN:return"boolean";case ue.TYPE_EXPREF:return"expref";case ue.TYPE_NULL:return"null";default:return}},this.functionValues=([a])=>Object.values(a),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[ue.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[ue.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[ue.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY]},{types:[ue.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[ue.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[ue.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY,ue.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[ue.TYPE_EXPREF]},{types:[ue.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[ue.TYPE_ARRAY_NUMBER,ue.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[ue.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[ue.TYPE_ARRAY_NUMBER,ue.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[ue.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[ue.TYPE_ARRAY_STRING,ue.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[ue.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[ue.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[ue.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[ue.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[ue.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[ue.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,a,s){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:a.bind(this),_signature:s}}callFunction(t,a){const s=this.functionTable[t];if(s===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,a,s._signature),s._func.call(this,a)}validateInputSignatures(t,a){for(let s=0;s<a.length;s+=1)if("variadic"in a[s]&&s!==a.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${s+1} must occur last`)}validateArgs(t,a,s){var n,o;let r;this.validateInputSignatures(t,s);const l=s.filter(h=>{var E;return(E=!h.optional)!==null&&E!==void 0?E:!1}).length,i=(o=(n=s[s.length-1])===null||n===void 0?void 0:n.variadic)!==null&&o!==void 0?o:!1,c=a.length<l,u=a.length>s.length,d=c&&(!i&&l>1||i)?"at least ":"";if(i&&c||!i&&(c||u))throw r=s.length>1,new Error(`ArgumentError: ${t}() takes ${d}${l} argument${r&&"s"||""} but received ${a.length}`);let p,f,g;for(let h=0;h<s.length;h+=1){g=!1,p=s[h].types,f=this.getTypeName(a[h]);let E;for(E=0;E<p.length;E+=1)if(f!==void 0&&this.typeMatches(f,p[E],a[h])){g=!0;break}if(!g&&f!==void 0){const m=p.map(_=>this.TYPE_NAME_TABLE[_]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${h+1} to be type (${m}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,a,s){if(a===ue.TYPE_ANY)return!0;if(a===ue.TYPE_ARRAY_STRING||a===ue.TYPE_ARRAY_NUMBER||a===ue.TYPE_ARRAY){if(a===ue.TYPE_ARRAY)return t===ue.TYPE_ARRAY;if(t===ue.TYPE_ARRAY){let n;a===ue.TYPE_ARRAY_NUMBER?n=ue.TYPE_NUMBER:a===ue.TYPE_ARRAY_STRING&&(n=ue.TYPE_STRING);for(let o=0;o<s.length;o+=1){const r=this.getTypeName(s[o]);if(r!==void 0&&n!==void 0&&!this.typeMatches(r,n,s[o]))return!1}return!0}}else return t===a;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return ue.TYPE_STRING;case"[object Number]":return ue.TYPE_NUMBER;case"[object Array]":return ue.TYPE_ARRAY;case"[object Boolean]":return ue.TYPE_BOOLEAN;case"[object Null]":return ue.TYPE_NULL;case"[object Object]":return t.jmespathType===K.TOK_EXPREF?ue.TYPE_EXPREF:ue.TYPE_OBJECT;default:return}}createKeyFunction(t,a){if(!this._interpreter)return;const s=this._interpreter;return o=>{const r=s.visit(t,o);if(!a.includes(this.getTypeName(r))){const l=`TypeError: expected one of (${a.map(i=>this.TYPE_NAME_TABLE[i]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(r)]}`;throw new Error(l)}return r}}}class wf{constructor(){this._rootValue=null,this.runtime=new yf(this)}search(t,a){return this._rootValue=a,this.visit(t,a)}visit(t,a){let s,n,o,r,l,i,c,u,d,p,f;switch(t.type){case"Field":return a===null?null:Ha(a)?(i=a[t.name],i===void 0?null:i):null;case"Subexpression":for(o=this.visit(t.children[0],a),p=1;p<t.children.length;p+=1)if(o=this.visit(t.children[1],o),o===null)return null;return o;case"IndexExpression":return c=this.visit(t.children[0],a),u=this.visit(t.children[1],c),u;case"Index":if(!Array.isArray(a))return null;let g=t.value;return g<0&&(g=a.length+g),o=a[g],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(a))return null;const h=[...t.children],E=this.computeSliceParams(a.length,h),[m,_,x]=E;if(o=[],x>0)for(p=m;p<_;p+=x)o.push(a[p]);else for(p=m;p>_;p+=x)o.push(a[p]);return o;case"Projection":if(f=this.visit(t.children[0],a),!Array.isArray(f))return null;for(d=[],p=0;p<f.length;p+=1)n=this.visit(t.children[1],f[p]),n!==null&&d.push(n);return d;case"ValueProjection":if(f=this.visit(t.children[0],a),!Ha(f))return null;d=[];const k=Object.values(f);for(p=0;p<k.length;p+=1)n=this.visit(t.children[1],k[p]),n!==null&&d.push(n);return d;case"FilterProjection":if(f=this.visit(t.children[0],a),!Array.isArray(f))return null;const I=[],R=[];for(p=0;p<f.length;p+=1)s=this.visit(t.children[2],f[p]),As(s)||I.push(f[p]);for(let F=0;F<I.length;F+=1)n=this.visit(t.children[1],I[F]),n!==null&&R.push(n);return R;case"Comparator":switch(r=this.visit(t.children[0],a),l=this.visit(t.children[1],a),t.name){case K.TOK_EQ:o=Qs(r,l);break;case K.TOK_NE:o=!Qs(r,l);break;case K.TOK_GT:o=r>l;break;case K.TOK_GTE:o=r>=l;break;case K.TOK_LT:o=r<l;break;case K.TOK_LTE:o=r<=l;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return o;case K.TOK_FLATTEN:const N=this.visit(t.children[0],a);if(!Array.isArray(N))return null;let j=[];for(p=0;p<N.length;p+=1)n=N[p],Array.isArray(n)?j=[...j,...n]:j.push(n);return j;case"Identity":return a;case"MultiSelectList":if(a===null)return null;for(d=[],p=0;p<t.children.length;p+=1)d.push(this.visit(t.children[p],a));return d;case"MultiSelectHash":if(a===null)return null;d={};let $;for(p=0;p<t.children.length;p+=1)$=t.children[p],d[$.name]=this.visit($.value,a);return d;case"OrExpression":return s=this.visit(t.children[0],a),As(s)&&(s=this.visit(t.children[1],a)),s;case"AndExpression":return r=this.visit(t.children[0],a),As(r)?r:this.visit(t.children[1],a);case"NotExpression":return r=this.visit(t.children[0],a),As(r);case"Literal":return t.value;case K.TOK_PIPE:return c=this.visit(t.children[0],a),this.visit(t.children[1],c);case K.TOK_CURRENT:return a;case K.TOK_ROOT:return this._rootValue;case"Function":const U=[];for(let F=0;F<t.children.length;F+=1)U.push(this.visit(t.children[F],a));return this.runtime.callFunction(t.name,U);case"ExpressionReference":const z=t.children[0];return z.jmespathType=K.TOK_EXPREF,z;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,a){let[s,n,o]=a;if(o===null)o=1;else if(o===0){const l=new Error("Invalid slice, step cannot be 0");throw l.name="RuntimeError",l}const r=o<0;return s=s===null?r?t-1:0:this.capSliceRange(t,s,o),n=n===null?r?-1:t:this.capSliceRange(t,n,o),[s,n,o]}capSliceRange(t,a,s){let n=a;return n<0?(n+=t,n<0&&(n=s<0?-1:0)):n>=t&&(n=s<0?t-1:t),n}}const jo=new wf,xf=ue.TYPE_ANY,Tf=ue.TYPE_ARRAY,Sf=ue.TYPE_ARRAY_NUMBER,kf=ue.TYPE_ARRAY_STRING,Ef=ue.TYPE_BOOLEAN,Af=ue.TYPE_EXPREF,Cf=ue.TYPE_NULL,Pf=ue.TYPE_NUMBER,Of=ue.TYPE_OBJECT,Lf=ue.TYPE_STRING;function Mf(e){return Xl.parse(e)}function Df(e){return Jl.tokenize(e)}const Rf=(e,t,a)=>{jo.runtime.registerFunction(e,t,a)};function If(e,t){const a=Xl.parse(t);return jo.search(a,e)}const $f=jo,bt={compile:Mf,registerFunction:Rf,search:If,tokenize:Df,TreeInterpreter:$f,TYPE_ANY:xf,TYPE_ARRAY_NUMBER:Sf,TYPE_ARRAY_STRING:kf,TYPE_ARRAY:Tf,TYPE_BOOLEAN:Ef,TYPE_EXPREF:Af,TYPE_NULL:Cf,TYPE_NUMBER:Pf,TYPE_OBJECT:Of,TYPE_STRING:Lf},Ct=class Ct{static async appendPrompt(t,a){Zr(t,LZString.compressToUTF16(JSON.stringify(a))).then(async()=>{Pa().then(s=>{s=s.filter(n=>n.indexOf(this.DELIM_PROMPTS)!=-1),s.length>Ct.MAX_PROMPTS_VALS&&Hn(s[0])})}).catch(s=>console.error("~IDB Failed | ",s))}static async appendVIR_products(t){t.forEach(a=>{let s=JSON.stringify({ts:Date.now(),name:a[1]});Zr(a[0],LZString.compressToUTF16(s)).then(async()=>{}).catch(n=>console.error("~IDB Failed | ",n))})}static async keys(t,a){Pa().then(s=>{s=s.filter(n=>n.indexOf(t)!=-1),a&&a(s)})}static async get(t,a){pf(t).then(s=>{try{s=JSON.parse(LZString.decompressFromUTF16(s))}catch{}finally{a&&a(s)}})}static async entries(t,a){ff().then(s=>{s=s.filter(n=>n[0].indexOf(t)!=-1),s=s.map(n=>{try{n[1]=JSON.parse(LZString.decompressFromUTF16(n[1]))}catch{}finally{}return n}),a&&a(s)})}static compr(t){return t}static decompr(t){return t}static async act(t,a,s){let n="";switch(t){case"PROMPTS_COUNT":Pa().then(r=>{r=r.filter(l=>l.indexOf(this.DELIM_PROMPTS)!=-1),n=`There are ${r.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,n&&s&&s(n)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":Pa().then(r=>{r.forEach(l=>{l.indexOf(this.DELIM_PROMPTS)!=-1&&l.split(Ct.DELIM_PROMPTS)[0]==a&&Hn(l)})}),n="The Prompt history has been removed for UPI: "+a,console.log("~ PROMPTS_CLEAR ------ | ",n);break;case"VIR_COUNT":Pa().then(r=>{r=r.filter(l=>l.indexOf(this.DELIM_VIR)!=-1),n=`There are ${r.length} VNR names in local IDB storage.`,n&&s&&s(n)});break;case"VIR_CLEAR":let o=0;await Pa().then(r=>{r.forEach(l=>{l.indexOf(this.DELIM_VIR)!=-1&&l.split(Ct.DELIM_VIR)[0]==a&&(o++,Hn(l))})}),n=`The VNR Names have been removed for UPI: ${a} (Total Deleted: ${o})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),n="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",n),n&&s&&s(n)}};Ct.MAX_TYPEAHEAD_ROWS=14,Ct.MAX_PROMPTS_VALS=50,Ct.DELIM_PROMPTS="_",Ct.DELIM_VIR="-",Ct.DELIM_SNDX="|";let xa=Ct;const Se=Xu("AppState",()=>{const e=it(),t="DEV",a="BMA Tourney v0.0.5 ",s="#app",n=Ot({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_TOURNEYS:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS",WC__APP__HEAD_MID__HEAD_MID_PRIVATE:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__LOBBY:"WC.APP.FOOT.LOBBY",WC__APP__FOOT__TOURNEYS:"WC.APP.FOOT.TOURNEYS",WC__APP__FOOT__PRIVATE:"WC.APP.FOOT.PRIVATE",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",ROUTE__INVITES_HYDRATE:"ROUTE.INVITES_HYDRATE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",SSE__CORE__INVITE_SYNC:"SSE.CORE.INVITE_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let o=Ot([]),r=Ot([]),l=Ot([]);const i=V=>{o.push(V),o.length>10&&(o.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${o.length}`)},c=V=>{if(!V?.guid)return;const y=l.findIndex(A=>A.guid===V.guid);y>=0?l.splice(y,1,V):l.push(V)},u=V=>{const y=l.findIndex(A=>A.guid===V);y>=0&&l.splice(y,1)},d=V=>{l.splice(0,l.length,...Array.isArray(V)?V:[])},p=V=>{r.push(V),r.length>10&&(r.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${r.length}`)},f=()=>{const V=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",V),V)try{const y=JSON.parse(V);return console.log("[appState] Parsed session_user:",y),y}catch(y){console.error("Failed to parse session_user from localStorage:",y)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},g=Ce({session_app:{online:!0,route:"",version:a+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:f()}),h=Ce({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),E=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",xa.compr(JSON.stringify(h.value.features)));else{let V=xa.decompr(localStorage.getItem("feature_flags"));V=Object.assign(h.value.features,JSON.parse(V));for(let y in V)typeof h.value?.env_override[t][y]<"u"&&(V[y]=h.value.env_override[t][y]);localStorage.setItem("feature_flags",xa.compr(JSON.stringify(h.value.features=V)))}},m=()=>{const V=document.querySelector(s);if(V){const y=V.dataset;for(let A in y){const S=A.replace(/^sync/,""),D=Object.keys(h.value.features).find(O=>O.toLowerCase()===S.toLowerCase());if(D){const O=h.value.features[D]?.state;O&&(y[A]=O)}}}},_=(V="Theme",y={state:"dark"})=>{const A=document.querySelector(s);A&&(A.dataset["sync"+V]=y.state)},x=(V="Theme",y={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&y){let S=JSON.parse(xa.decompr(localStorage.getItem("feature_flags")));S[V]={state:y.state},localStorage.setItem("feature_flags",xa.compr(JSON.stringify(h.value.features=S))),_(V,y),le.publish("APP.ROUTE_SYNC",`{ "${V}": ${JSON.stringify(y)}}`)}},k=V=>{const y=h.value?.features?.Lang?.state;let A=N.value.microcopy.language.filter(S=>S.code==y)[0]?.copy;if(A=A.filter(S=>S[0]==V)[0],A)return A[1]},I=(V=":version")=>{let[y,A,S]=V.split(" ");switch(y=y.toLocaleLowerCase(),S=="true"&&(S=!0),S=="false"&&(S=!1),y){case":version":neodigmToast.q(`Version Q ${g.value.session_app.version}`,"brand");break;case":feature":x(A,{state:S});break;case":route":neodigmToast.q(`route ${A}`,"brand"),e.push({name:A});break}};E(),m();const R=Ot({designer:"guided_tour",notifications:{unread:0}}),N=Ce({sports:qe,microcopy:df.getMeta()}),j=ve(()=>g.value.session_user.fname+" "+g.value.session_user.lname),$=()=>{console.log("[appState] Saving session_user to localStorage:",g.value.session_user),localStorage.setItem("session_user",JSON.stringify(g.value.session_user))},U=()=>{localStorage.removeItem("session_user")};function z(V){return g.value.session_user.authenticated=!0,g.value.session_user.token=V,$(),g.value.session_app.route="chat"}function F(){return g.value.session_user.authenticated=!1,g.value.session_user.token="",g.value.session_user.guid="",U(),API_ORCH.setTJO(null),g.value.session_app.route="auth"}return{appCLIFeatures:h,appDesigner:R,appMeta:N,appSession:g,clearSessionUser:U,concatFirstLast:j,coreBetSlip:r,coreInvites:l,coreTourn:o,doCLI:I,doLogin:z,doLogout:F,hierTopics:n,i18n:k,pushCoreTourn:i,pushcoreBetSlip:p,removeInvite:u,saveSessionUser:$,setCoreInvites:d,setFeaturePersistPub:x,upsertInvite:c}}),Un="mvvBrand",Nf=400,Ua={scanIntervalId:null,processedElements:new WeakSet,init(){const t=new URLSearchParams(window.location.search).get("brand");t!==null&&(t==="null"||t===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(t)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(e){if(e)try{localStorage.setItem(Un,e),console.log("[BrandManager] Brand token set:",e)}catch(t){console.error("[BrandManager] Failed to set brand:",t)}},getBrand(){try{return localStorage.getItem(Un)}catch(e){return console.error("[BrandManager] Failed to get brand:",e),null}},clearBrand(){localStorage.removeItem(Un),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const e=this.getBrand();return e?{"x-m5t-brand":e}:{}},hydrateBrandElements(){const e=this.getBrand();if(!e)return;const t=document.querySelectorAll("[data-mvv-brand]");t.forEach(a=>{a.getAttribute("data-mvv-brand")==="token"&&(a.textContent=e)}),t.length>0&&console.log(`[BrandManager] Hydrated ${t.length} brand elements with token:`,e)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},Nf),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const e=this.getBrand();if(!e)return;const t=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(a=>{t.push(a)}),document.querySelectorAll("*").forEach(a=>{a.shadowRoot&&a.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{t.push(s)})}),t.forEach(a=>{if(this.processedElements.has(a))return;const s=a.getAttribute("src");if(s&&!s.includes("&brand=")){const n=`${s}&brand=${e}`;a.setAttribute("src",n),this.processedElements.add(a),console.log("[BrandManager] Updated src for element:",a)}})}},vo="bma_anon_session",Vo="bma_pending_join_intent",Bf=1440*60*1e3,rs=Object.freeze({AUTHED:"authed",PREVIEW:"preview",DENIED:"denied"});function Ff(e,t={}){return(typeof mvvLegit<"u"&&mvvLegit&&typeof mvvLegit.isRouteAllowed=="function"?mvvLegit.isRouteAllowed(e):!1)?rs.AUTHED:t?.previewAllowed?rs.PREVIEW:rs.DENIED}function ai(e){const t=typeof neodigmOpt<"u"&&neodigmOpt?.ROOT||null;t&&(t.dataset.authTier=e)}function Ql(){let e=sessionStorage.getItem(vo);return e||(e=`anon_${typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}`,sessionStorage.setItem(vo,e)),e}function zf(){sessionStorage.removeItem(vo)}function Hf(e,t=null){const a={tournamentGuid:e,joinSlug:t||null,sessionId:Ql(),capturedAt:Date.now()};return sessionStorage.setItem(Vo,JSON.stringify(a)),a}function Uf(){const e=sessionStorage.getItem(Vo);if(!e)return null;try{const t=JSON.parse(e);return!t?.capturedAt||Date.now()-t.capturedAt>Bf?(_o(),null):t}catch{return _o(),null}}function _o(){sessionStorage.removeItem(Vo)}function Gf(){const e=Uf();return zf(),_o(),e}const ze=class ze{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),ze.setTJO(null),location.reload()}static async doSignin(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",s)).json();o.ok?(typeof mvvLegit<"u"&&mvvLegit&&o?.accessToken&&mvvLegit.doSignin(o?.accessToken),a&&a(o)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",s)).json();if(o.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),a&&a(o);else{const r=o?.error||o?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(r,"danger"),a&&a(o)}}static async checkUserName(t,a=null){const s={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",s)).json();return a&&a(o),o}static async resetHash(t,a,s=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const n=typeof neodigmUtils<"u"?neodigmUtils.genHash(a):a,o={method:"POST",body:JSON.stringify({guid:t,hash:n}),headers:ze.genHeaders()},l=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",o)).json();s&&s(l)}static genHeaders(t={}){let a={};a.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),a.Authorization="Bearer expired",a["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(a.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(a.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(a.company=SessionAcctEntity.oEntities.data.entity.company);const s=Ua.getBrandHeader();return Object.assign(a,s),a}static async fetchTournaments(t=null){const a={method:"GET",headers:ze.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",a)).json();return t&&t(n),n}static async fetchTournamentPreview(t,a=null,s=null){typeof a=="function"&&(s=a,a=null);const n={"Content-Type":"application/json","X-Bma-Anon-Session":Ql()};Object.assign(n,Ua.getBrandHeader());let o=`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/preview`;a&&(o+=`?s=${encodeURIComponent(a)}`);const l=await fetch(o,{method:"GET",headers:n});let i=null;try{i=await l.json()}catch{i=null}const c={data:i,status:l.status,ok:l.ok};return s&&s(c),c}static async createTournament(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}static async fetchBetSlips(t,a="",s="",n=null){let o=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;a&&(o+=`/${a}`),a&&s&&(o+=`/${s}`);const r={method:"GET",headers:ze.genHeaders()},i=await(await fetch(this.API_baseURI+o,r)).json();return n&&n(i),i}static async fetchLeaderboard(t,a="",s=null){let n=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;a&&(n+=`&user=${a}`);const o={method:"GET",headers:ze.genHeaders()},l=await(await fetch(this.API_baseURI+n,o)).json();return s&&s(l),l}static async fetchGlobalLeaderboard(t=null){const a=`/m5t/${this.API_ver}/coreLeaderboard`,s={method:"GET",headers:ze.genHeaders()},o=await(await fetch(this.API_baseURI+a,s)).json();return t&&t(o),o}static async fetchAllTimeLeaderboard(t="ALL",a=100,s="td",n=null){const o=new URLSearchParams({sport:t,limit:String(a),sort:s}),r=`/m5t/${this.API_ver}/coreLeaderboard/alltime?${o.toString()}`,l={method:"GET",headers:ze.genHeaders()},c=await(await fetch(this.API_baseURI+r,l)).json();return n&&n(c),c}static async postBetSlips(t,a=null){const s=t.map(o=>{const r={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",r).then(async l=>{let i=null;try{i=await l.json()}catch{i=null}return{data:i,status:l.status,ok:l.ok}}).catch(l=>({data:null,status:0,ok:!1,networkError:l?.message||"network"}))}),n=await Promise.all(s);return a&&a(n),n}static async fetchPromotions(t=null){const a={method:"GET",headers:ze.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",a)).json();return t&&t(n),n}static async sendInvite(t,a,s=null){const n={method:"POST",body:JSON.stringify(a),headers:ze.genHeaders()},o=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/invite`,n);let r=null;try{r=await o.json()}catch{r=null}const l={data:r,status:o.status,ok:o.ok};return s&&s(l),l}static async fetchInvitesForTournament(t,a=null){const s={method:"GET",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/invites`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}static async fetchMyInvites(t={},a=null){typeof t=="function"&&(a=t,t={});let s=`${this.API_baseURI}/m5t/${this.API_ver}/invites/mine`;t.include==="all"&&(s+="?include=all");const n={method:"GET",headers:ze.genHeaders()},o=await fetch(s,n);let r=null;try{r=await o.json()}catch{r=null}const l={data:r,status:o.status,ok:o.ok};return a&&a(l),l}static async acceptInvite(t,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/accept`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}static async declineInvite(t,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/decline`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}static async revokeInvite(t,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/revoke`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}};ze.API_baseURI="https://machfive-bmacdev-rest.onrender.com",ze.API_ver="v5",ze.jsState={},ze.jsMeta={},ze.jsTJO=null;let xe=ze;const Ga={shootConfetti(){if(typeof confetti=="function"){let s=function(n,o){confetti({...t,...o,particleCount:Math.floor(e*n)})};var a=s,e=200,t={origin:{y:.7}};s(.25,{zIndex:304,spread:26,startVelocity:55}),s(.2,{zIndex:304,spread:60}),s(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),s(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),s(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let a=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(e+"Z"));const s={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return a.toLocaleString(void 0,{...s,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let a={};for(const s in t)e[s]&&t[s]!=e[s]&&(a[s]=e[s]);return Object.keys(a).length>0?a:t},genLorumIpsum(e=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},fa=(e,t)=>{const a=e.__vccOpts||e;for(const[s,n]of t)a[s]=n;return a},jf={class:"auth-page"},Vf={__name:"splash_route",setup(e){const t=it(),a=ys();return Se(),setTimeout(()=>{a&&a.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(s,n)=>(fe(),he("div",jf,[...n[0]||(n[0]=[dt('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),b("div",{class:"auth-page-right"},[b("div",{class:"auth-card splash-content"},[b("p",{class:"splash-message"},"Loading Tournaments..."),b("br"),b("br"),b("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[b("div")])])],-1)])]))}},si=fa(Vf,[["__scopeId","data-v-994bad53"]]);class qf{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(a=>{let s=!1;for(const n of a){if(n.attributeName==="data-sync-theme"){const o=t.getAttribute("data-sync-theme")||"dark";o!==this._theme&&(this._theme=o,s=!0)}if(n.attributeName==="data-sync-motif"){const o=t.getAttribute("data-sync-motif")||"brand";o!==this._motif&&(this._motif=o,s=!0)}if(n.attributeName==="data-sync-lang"){const o=t.getAttribute("data-sync-lang")||"en";o!==this._lang&&(this._lang=o,s=!0)}}s&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(a){console.warn("[BMAThemeResolver] Listener error:",a)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const Me=new qf().init(),Zl={mobile:"(orientation: portrait), (max-width: 768px)"};function je(){return`
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
  `}function ha(){return`
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
  `}class Yf extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=Me.theme;let a=this.getAttribute("data-sport-group")||"Soccer",s,n;a==="Multi"?(s="Multi",n=`var(--sport-icon__Multi--${t})`):(s=a.replaceAll(" ","_"),n=`var(--sport-icon__${s}--${t})`),this.shadowRoot.innerHTML=`
      <style>
        ${je()}

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

        :host([data-sport-group="${a}"]) {
          background-image: ${n};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",Yf);class Kf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Me.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,a={}){const s=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...a}});this.dispatchEvent(s)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const a=t.target.closest(".btn-info"),s=t.target.closest(".btn-join"),n=t.target.closest(".btn-play"),o=t.target.closest("bma-sport-icon");if(a){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(s){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(n){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(o){t.stopPropagation();const r=o.getAttribute("sport"),l=this.getSportInfo(r);this.dispatchCardEvent("SPORT_ICON",{sportKey:r,sportTitle:l.title,sportDescription:l.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,a,s){a!==s&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const a=t.scrollHeight-t.clientHeight,s=this.getAttribute("data-compact")==="true";!s&&a>2?this.setAttribute("data-compact","true"):s&&a<-10&&this.removeAttribute("data-compact")})}getTheme(){return Me.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);return Array.isArray(a)?a.find(n=>Array.isArray(n))?.length||"0":a?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);return Array.isArray(a)?a.find(n=>Array.isArray(n))||[]:a?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);if(Array.isArray(a)){const s=a.find(o=>o&&typeof o=="object"&&!Array.isArray(o));return{current:a.find(o=>Array.isArray(o))?.length||0,max:parseInt(s?.max)||100}}return{current:a?.guids?.length||0,max:a?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;return a?this.entitiesGuids.includes(a):!1}getUserBadge(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;const s=this.getAttribute("data-bma-tourn-tags");if(!s)return null;try{const n=JSON.parse(s);if(!Array.isArray(n))return null;const o=n.find(r=>!!(typeof r=="object"&&r!==null&&(r.entity_guid===a&&r.badge&&r.badge.startsWith("--badge__ribbon--")||r[a]&&r[a].startsWith("--badge__ribbon--"))));return o&&(o.badge||o[a])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const a=t.match(/--badge__ribbon--(\w+)/);return a?a[1]:""}getSportInfo(t){const a=qe.find(s=>s.key===t);return a?{title:a.title,description:a.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(s=>{const n=s.title||"Match";let o="TBD";if(s.scheduled_at)try{o=new Date(s.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{o=s.scheduled_at}return`  ${n} @ ${o}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT_FORMAT"}get gameModeBadge(){if(typeof window.GameTypeLifeCycle>"u")return null;const t=window.GameTypeLifeCycle.forToken(this.gameType);return t?t.badge:null}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const a=JSON.parse(t);return Array.isArray(a)?a.map(s=>typeof s=="object"&&s.sport_key?s.sport_key:s):[a]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const a=Math.min(t.length,3);let s="";for(let n=0;n<a;n++){const o=t[n].key,r=qe.find(i=>i.key===o),l=r?r.group:"default";s+=`<bma-sport-icon sport="${o}" data-sport-group="${l}"></bma-sport-icon>`}return t.length>3&&(s+=`<span class="sport-count">+${t.length-3}</span>`),s}render(){const t=this.getTheme(),a=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${je()}
        ${ha()}
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

      <div class="card" data-sync-theme="${a}">
        <div class="chevron-cover"></div>
        <div class="card-header">
          <div class="header-top">
            <span class="sport-tag">${this.sportsDisplay}</span>
            <span class="header-badges">
              ${(()=>{const o=this.gameModeBadge?.label||(this.gameType==="DEFAULT_FORMAT"?"Bet Max Tourney":"");return o?`<span class="game-mode-badge">${o}</span>`:""})()}
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
              <p class="info-value">${this.matches==0?"TBD":this.matches+(()=>{try{return JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(o=>o.override_last_match_close===!0)?"+":""}catch{return""}})()}</p>
            </section>
            <section class="info-cell">
              <p class="info-label">Starting TD$</p>
              <p class="info-value">${Number(this.tournament_dollars).toLocaleString()}</p>
            </section>
          </div>
        </div>
      </div>
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",Kf);class Wf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".stake-input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-content-point","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,a,s){if(a!==s){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get point(){return this.getAttribute("data-content-point")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Ga.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",a=parseFloat(t);return isNaN(a)?"0.00":a.toFixed(2)}get potentialProfit(){const t=parseFloat(this.stake)||0,s=(parseFloat(this.payout)||0)-t;return s>0?s.toFixed(2):"0.00"}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".hero-value");t&&(t.textContent=this.potentialProfit)}setupEventListeners(){const t=this.shadowRoot.querySelector(".close-btn");t&&t.addEventListener("click",()=>{const s={teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")};le.publish("COREBETSLIP.CLOSE",JSON.stringify({...s,timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:s}))});const a=this.shadowRoot.querySelector(".stake-input");a&&a.addEventListener("input",s=>{this.setAttribute("data-stake",s.target.value)})}render(){const t=parseInt(this.odds,10),a=Number.isFinite(t)?t>0?`+${t}`:`${t}`:this.odds,s=this.stake!=="0"?this.stake:"",n=(this.type||"").toUpperCase();this.shadowRoot.innerHTML=`
      <style>
        ${je()}

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
            <div class="selection">${(()=>{let o=this.teamPoints.replace(/^Draw\b/,"Tie");return this.type==="spread"&&parseFloat(this.point)===0&&(o=`${o} (DNB)`),o})()}</div>
            <div class="odds">${a}</div>
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
                  value="${s}"
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",Wf);class Jf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._expanded=!1}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing odds_markets:",a),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Me.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing scoreboard:",a),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const a=qe.find(s=>s.key===t);return a?a.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_usa_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_uefa_champs_league:"UCL",soccer_uefa_europa_league:"UEL",soccer_spain_la_liga:"LALIGA",soccer_germany_bundesliga:"BUN",soccer_italy_serie_a:"SERIE A",soccer_france_ligue_one:"LIGUE 1",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing tournament tags:",a),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(r=>r.match_inprogress_lock===!0))return!1;const s=this.scoreboard;if(!s||!s.time_remaining)return!1;const n=s.time_remaining.toLowerCase();return n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const a=this.shadowRoot?.querySelector(".countdown");a&&(a.textContent=t)}attributeChangedCallback(t,a,s){a!==s&&this.render()}formatDate(t){if(!t)return"TBD";let a=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z")),a.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,a=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&a.setTime(new Date(this.scheduledAt+"Z").getTime());const s=a-t;if(s<=0)return"";const n=Math.floor(s/(1e3*60*60)),o=Math.floor(s%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const a=this.scoreboard;if(a&&a.time_remaining){const s=a.time_remaining.toLowerCase();if(s==="final")return{type:"final",text:"Final",color:"#969696"};if(s==="in progress"||s.includes("q")||s.includes("half")||s.includes("period")){const n=a.home_score!==void 0&&a.home_score!==null||a.away_score!==void 0&&a.away_score!==null,o=a.period!==void 0&&a.period!==null&&a.period!==0;if(n||o)return{type:"live",text:a.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let s=this.scheduledAt;if(!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z"),new Date(s)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,a,s,n,o){t.stopPropagation();const r=t.currentTarget;if(r.classList.contains("btn--disabled")||r.dataset.disabled==="true")return;const l=r.classList.contains("btn--active"),i={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:a,team:s,price:n,point:o,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:i,isActive:l,button:r}}))}renderMarketSection(t,a){return!a||a.length===0?"":`
            <section class="soccer-market">
                <h4 class="soccer-market__title">${t}</h4>
                <div class="soccer-market__rows">
                    ${a.map(s=>`
                        <div class="soccer-market__row">
                            <div class="team ${s.teamClass||""}">
                                <span class="team-name">${s.label}</span>
                            </div>
                            <div class="buttons buttons--1col">
                                ${s.button}
                            </div>
                        </div>
                    `).join("")}
                </div>
            </section>
        `}formatPrice(t){if(t==null||t==="")return"";const a=String(t).trim();if(a.startsWith("+")||a.startsWith("-"))return a;const s=parseFloat(a);return isNaN(s)?a:s>0?`+${s}`:String(s)}renderSoccerMoneyBtn(t,a,s={}){const{winner:n,loser:o,disabled:r}=s;if(!a)return`<button class="soccer-money-btn btn--empty btn--pending" disabled>
                <span class="btn-pending-label">Coming<br>Soon</span>
            </button>`;const l=a.price;return`<button class="${["soccer-money-btn",n?"soccer-money-btn--winner":"",o?"soccer-money-btn--loser":"",r?"btn--disabled":"",t==="draw"?"soccer-money-btn--draw":""].filter(Boolean).join(" ")}"
                    data-bet-type="money"
                    data-team="${t}"
                    data-price="${l}"
                    ${r?'data-disabled="true"':""}>
            <span class="soccer-money-btn__odds" data-price-value="${l}">${this.formatPrice(l)}</span>
        </button>`}renderButton(t,a,s,n,o=!1){if(!s)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const r=s.price,l=s.point,i=this.formatPrice(r),c=parseFloat(l),u=t==="spread"&&c===0;let d="";t==="spread"?u?d=i:d=`${c>0?`+${l}`:l}<br><span class="btn-odds" data-price-value="${r}">${i}</span>`:t==="money"?d=i:t==="total"&&(d=`${n}${l}<br><span class="btn-odds" data-price-value="${r}">${i}</span>`);const p=l!=null&&l!=="";return`<button class="btn ${o?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${a}"
                    data-price="${r}"
                    ${p?`data-point="${l}"`:""}
                    ${o?'data-disabled="true"':""}>
            ${d}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const a=this.isMatchInProgressLocked(),s=this.isDisabled||a,n=!0,o=this.getGameStatus(),r=this.scoreboard,l=r?.home_score||0,i=r?.away_score||0,c=o?.type==="live"||o?.type==="final",u=parseInt(l),d=parseInt(i),p=o?.type==="final",f=o?.type==="live",g=c&&p&&u>d,h=c&&p&&d>u,E=c&&f&&u>d,m=c&&f&&d>u,_=t?.spreads?.outcomes?.find(A=>A.name===this.homeTeam),x=t?.spreads?.outcomes?.find(A=>A.name===this.awayTeam),k=t?.h2h?.outcomes?.find(A=>A.name===this.homeTeam),I=t?.h2h?.outcomes?.find(A=>A.name===this.awayTeam),R=t?.totals?.outcomes?.find(A=>A.name==="Over"),N=t?.totals?.outcomes?.find(A=>A.name==="Under"),j=this.sportKey?.startsWith("soccer_"),$=j?t?.h2h?.outcomes?.find(A=>A.name==="Draw"):null,U=A=>A&&parseFloat(A.point)===0,z=U(_)?_:null,F=U(x)?x:null,V=U(_)?null:_,y=U(x)?null:x;this.shadowRoot.innerHTML=`
            <style>
                ${je()}
                ${ha()}

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

                /* Soccer expanded: spread + total only (2 columns). */
                .buttons--2col {
                    grid-template-columns: repeat(2, 1fr);
                }
                .labels-row--2col {
                    grid-template-columns: 1fr 1fr;
                }

                /* ── Soccer primary: BetMGM-style ── Teams stacked
                   in the left cell, 3 horizontal money buttons on
                   the right with Home / Tie / Away labels above. */
                .labels-row--soccer-primary {
                    /* Already 3-col via the base .labels-row grid;
                       this selector is kept so we can tune soccer
                       labels separately if needed (e.g. non-uppercase
                       later). */
                }

                .soccer-primary {
                    display: grid;
                    /* 35% team col + 1fr money col — 1fr absorbs the
                       gap so the right edge aligns with the card
                       padding (pure 35%/65% with 8px gap overflowed). */
                    grid-template-columns: 35% 1fr;
                    gap: 8px;
                    /* align-items: center — each cell sits at its
                       natural height inside the row. Critical: the
                       team column sets its own min-height (below),
                       which we DON'T want stretching through to the
                       money column (that made the 3 buttons
                       disproportionately tall). */
                    align-items: center;
                }
                .soccer-primary__teams {
                    display: flex;
                    flex-direction: column;
                    /* Push home to the top and away to the bottom so
                       the two team labels breathe the same way they
                       do on standard cards (one team per row with
                       the button row between). Scores align next to
                       each name without getting crowded. */
                    justify-content: space-between;
                    gap: 6px;
                    min-width: 0;
                    padding: 2px 0;
                    /* min-height applies to THIS cell only — grid
                       row grows to hold it, but the money cell
                       stays at its natural size and centers in the
                       row via align-items on the parent. */
                    min-height: 72px;
                }
                .soccer-primary__money {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 6px;
                    /* Natural height — don't inherit the team
                       column's min-height. */
                    align-self: center;
                }

                /* Single-button row helper (used inside market rows
                   in the expanded section). */
                .buttons--1col {
                    grid-template-columns: 1fr;
                }

                /* Soccer expanded — market-list architecture.
                   Animated max-height slide-in. Generous ceiling so
                   future markets don't clip; max-height only bounds
                   the animation, not the rendered content. */
                .soccer-expanded-wrap {
                    max-height: 0;
                    overflow: hidden;
                    opacity: 0;
                    transition: max-height 320ms cubic-bezier(0.4, 0, 0.2, 1),
                                opacity 220ms ease,
                                margin-top 320ms cubic-bezier(0.4, 0, 0.2, 1);
                    margin-top: 0;
                }
                .soccer-expanded-wrap--open {
                    max-height: 1600px;
                    opacity: 1;
                    margin-top: 12px;
                }
                .soccer-expanded-wrap__inner {
                    padding-top: 4px;
                }

                /* Market section — titled block + outcome rows.
                   One section per market; future markets slot in as
                   additional sections (Double chance, BTTS, Correct
                   score, Player props, etc.). */
                .soccer-market {
                    margin-top: 14px;
                    padding-top: 10px;
                    border-top: 1px solid rgba(247, 198, 13, 0.12);
                }
                .soccer-market:first-child {
                    margin-top: 0;
                    padding-top: 2px;
                    border-top: none;
                }
                /* Market titles read as section headings — gold +
                   uppercase + letter-spacing puts them in a different
                   visual register than the team-name rows below, so
                   they stand out as dividers at a glance instead of
                   blending in as more content. */
                .soccer-market__title {
                    margin: 0 0 10px;
                    font-size: 0.7rem;
                    font-weight: var(--weight-bold, 700);
                    color: var(--status-locked-text, #F7C60D);
                    letter-spacing: 1.2px;
                    text-transform: uppercase;
                }
                .soccer-market__rows {
                    display: flex;
                    flex-direction: column;
                    gap: 6px;
                }
                .soccer-market__row {
                    display: grid;
                    /* 1fr for the right col so the gap doesn't push
                       buttons past the card's right padding. */
                    grid-template-columns: 35% 1fr;
                    gap: 8px;
                    align-items: center;
                }

                .soccer-money-btn {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 4px;
                    padding: 10px 6px;
                    border: none;
                    border-radius: var(--btn-radius, var(--radius-md, 8px));
                    box-shadow: inset 0 0 0 1px var(--app-core-color--gray-4__dark--brand, #323232);
                    background: var(--surface-default, #161616);
                    color: var(--app-core-color--white-5__dark--brand, #fff);
                    cursor: pointer;
                    transition: all var(--transition-normal, 0.2s ease);
                    font-family: inherit;
                    text-align: center;
                    line-height: 1.2;
                }

                .soccer-money-btn:not(.btn--empty):not(.btn--disabled):hover {
                    box-shadow: inset 0 0 0 1px var(--status-locked-text, #F7C60D);
                    background: var(--surface-hover, rgba(247, 198, 13, 0.06));
                }

                .soccer-money-btn:not(.btn--empty):not(.btn--disabled):active {
                    transform: scale(0.98);
                }

                .soccer-money-btn__odds {
                    font-size: 0.9rem;
                    font-weight: var(--weight-bold, 700);
                    color: var(--app-core-color--white-5__dark--brand, #fff);
                }

                .soccer-money-btn--winner {
                    box-shadow: inset 0 0 0 1.5px var(--status-upcoming-text, #00E676);
                    background: rgba(0, 230, 118, 0.08);
                }
                .soccer-money-btn--winner .soccer-money-btn__odds {
                    color: var(--status-upcoming-text, #00E676);
                }

                .soccer-money-btn--loser {
                    opacity: 0.55;
                }

                /* ── "See All Markets →" link row ── */
                .markets-link-row {
                    display: flex;
                    justify-content: flex-end;
                    padding-top: 8px;
                    margin-top: 2px;
                    border-top: 1px solid rgba(255, 255, 255, 0.04);
                }

                .markets-link {
                    appearance: none;
                    border: none;
                    background: transparent;
                    color: var(--status-locked-text, #F7C60D);
                    font-family: inherit;
                    font-size: 0.72rem;
                    font-weight: var(--weight-semibold, 600);
                    letter-spacing: 0.3px;
                    padding: 4px 2px;
                    cursor: pointer;
                    transition: color 160ms ease, opacity 160ms ease;
                }

                .markets-link:hover:not(.markets-link--disabled) {
                    color: var(--app-core-color--yellow-4__dark--brand, #F9D651);
                }

                .markets-link--disabled {
                    color: var(--app-core-color--gray-5__dark--brand, #484848);
                    cursor: default;
                    opacity: 0.6;
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

                /* Positive-odds "+" prefix is now handled in JS via
                   formatPrice() so the rendered string already carries
                   its sign. The old ::before rules below were adding
                   a second "+" on top of that, producing "++120" on
                   spread/total buttons. Intentionally removed — do
                   NOT reintroduce without also stripping formatPrice
                   from the affected render paths. */

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

            <div class="card ${o?`card--${o.type}`:""}">
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
                    ${o&&o.type!=="scheduled"?`
                        <div class="status-badge status-badge--${o.type}">
                            ${o.type==="live"?'<span class="live-dot"></span>':""}
                            <span class="countdown">${o.text}</span>
                        </div>
                    `:""}
                    <span class="date">${this.formatDate(this.scheduledAt)}</span>
                </div>

                ${j&&n?`
                    <!-- Soccer primary (BetMGM-style): teams stacked
                         in the left cell, 3 horizontal money buttons
                         on the right with "Home / Tie / Away" labels
                         above. "Tie" is the display label; the
                         underlying bet team_id stays "Draw" (what the
                         Odds API returns), handled in the money-button
                         data-team attribute. -->
                    <div class="labels-row labels-row--soccer-primary">
                        <span>Home</span>
                        <span>Tie</span>
                        <span>Away</span>
                    </div>
                    <div class="soccer-primary">
                        <div class="soccer-primary__teams">
                            <div class="team team--home ${g?"team--winner":""} ${h?"team--loser":""}">
                                <span class="team-name">${this.homeTeam}</span>
                                ${c?`<span class="team-score ${E?"score--leading":""} ${m?"score--trailing":""}">${l}</span>`:""}
                            </div>
                            <div class="team team--away ${h?"team--winner":""} ${g?"team--loser":""}">
                                <span class="team-name">${this.awayTeam}</span>
                                ${c?`<span class="team-score ${m?"score--leading":""} ${E?"score--trailing":""}">${i}</span>`:""}
                            </div>
                        </div>
                        <div class="soccer-primary__money">
                            ${this.renderSoccerMoneyBtn("home",k,{winner:g,loser:h,disabled:s})}
                            ${this.renderSoccerMoneyBtn("draw",$,{winner:c&&p&&u===d,loser:c&&p&&u!==d,disabled:s})}
                            ${this.renderSoccerMoneyBtn("away",I,{winner:h,loser:g,disabled:s})}
                        </div>
                    </div>

                    <!-- Animated expansion: market-list architecture.
                         Each market renders as a titled section with
                         its own outcome rows. Adding a new market
                         type (Double chance, BTTS, Correct score,
                         Player props, etc.) is a new section slot
                         here — no layout rewrite needed.

                         Always rendered (not gated on _expanded) so
                         the max-height transition has somewhere to
                         animate to/from. -->
                    <div class="soccer-expanded-wrap ${this._expanded?"soccer-expanded-wrap--open":""}">
                        <div class="soccer-expanded-wrap__inner">
                            ${z||F?this.renderMarketSection("Draw No Bet",[{label:this.homeTeam,teamClass:g?"team--winner":h?"team--loser":"",button:this.renderButton("spread","home",z,null,s)},{label:this.awayTeam,teamClass:h?"team--winner":g?"team--loser":"",button:this.renderButton("spread","away",F,null,s)}]):""}
                            ${V||y?this.renderMarketSection("Spread",[{label:this.homeTeam,teamClass:g?"team--winner":h?"team--loser":"",button:this.renderButton("spread","home",V,null,s)},{label:this.awayTeam,teamClass:h?"team--winner":g?"team--loser":"",button:this.renderButton("spread","away",y,null,s)}]):""}
                            ${this.renderMarketSection("Total Goals",[{label:"Over",button:this.renderButton("total","over",R,"O",s)},{label:"Under",button:this.renderButton("total","under",N,"U",s)}])}
                        </div>
                    </div>
                `:`
                    <!-- Standard sports: 6-box grid unchanged (spread /
                         money / total × home / away). -->
                    
                        <div class="labels-row">
                            <span>SPREAD</span>
                            <span>MONEY</span>
                            <span>TOTAL</span>
                        </div>
                    

                    <div class="rows-container">
                        <div class="row row--home">
                            <div class="team team--home ${g?"team--winner":""} ${h?"team--loser":""}">
                                <span class="team-name">${this.homeTeam}</span>
                                ${c?`<span class="team-score ${E?"score--leading":""} ${m?"score--trailing":""}">${l}</span>`:""}
                            </div>
                            ${`
                                <div class="buttons">
                                    ${this.renderButton("spread","home",V,null,s)}
                                    ${this.renderButton("money","home",k,null,s)}
                                    ${this.renderButton("total","under",N,"U",s)}
                                </div>
                            `}
                        </div>

                        <div class="row row--away">
                            <div class="team team--away ${h?"team--winner":""} ${g?"team--loser":""}">
                                <span class="team-name">${this.awayTeam}</span>
                                ${c?`<span class="team-score ${m?"score--leading":""} ${E?"score--trailing":""}">${i}</span>`:""}
                            </div>
                            ${`
                                <div class="buttons">
                                    ${this.renderButton("spread","away",y,null,s)}
                                    ${this.renderButton("money","away",I,null,s)}
                                    ${this.renderButton("total","over",R,"O",s)}
                                </div>
                            `}
                        </div>
                    </div>
                `}

                <!-- Progressive-disclosure link. Active for sports with
                     hidden secondary markets (soccer today); disabled
                     for sports that show everything up front so users
                     still see the affordance and learn the pattern for
                     when props land. -->
                ${`
                    <div class="markets-link-row">
                        <button type="button"
                                class="markets-link ${j?"":"markets-link--disabled"}"
                                ${j?"":'disabled aria-disabled="true"'}
                                data-markets-toggle="${j?"enabled":"disabled"}">
                            ${j&&this._expanded?"Show Less ↑":"See All Markets →"}
                        </button>
                    </div>
                `}
            </div>
        `;{this.shadowRoot.querySelectorAll(".btn:not(.btn--empty), .soccer-money-btn:not(.btn--empty)").forEach(S=>{const D=S.dataset.betType,O=S.dataset.team,q=S.dataset.price,X=S.dataset.point||null;S.addEventListener("click",W=>this.handleButtonClick(W,D,O,q,X))});const A=this.shadowRoot.querySelector('[data-markets-toggle="enabled"]');A&&A.addEventListener("click",S=>{S.stopPropagation(),this._expanded=!this._expanded,this.render()})}}}customElements.define("bma-bet-match-card",Jf);const Xf='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',Qf='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>';class Zf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,a,s){a!==s&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch{return null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=qe.find(a=>a.key===this.sportId);return t?t.group:""}get theme(){return Me.theme}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||""}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let a=this.scheduledAt;!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a+="Z");const s=new Date(a)-t;if(s<=0)return"";const n=Math.floor(s/36e5),o=Math.floor(s%36e5/6e4);return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,a=this.homeScore!==null&&this.awayScore!==null;let s=!1;if(this.scheduledAt){let l=this.scheduledAt;!l.includes("Z")&&!l.match(/[+-]\d{2}:\d{2}$/)&&(l+="Z"),s=new Date(l)<new Date(Date.now()-300*1e3)}let n,o;if(t?.time_remaining){const l=t.time_remaining;l==="Final"?(n="FINAL",o="Final"):l==="In Progress"?(n="LIVE",o="In Progress"):(n="LIVE",o=l)}else a&&s?(n="FINAL",o="Final"):(n="UPCOMING",o="Upcoming");const r=n==="UPCOMING"?this.getCountdownText():"";return{status:n,timeRemaining:o,countdown:r}}render(){const{status:t,timeRemaining:a,countdown:s}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,o=this.scheduledAt?Ga.formatDateLocal(this.scheduledAt):"",r=this.getSportAbbr(),l=t==="LIVE"?"live":t==="FINAL"?"final":"upcoming",i=t==="LIVE"?"Live":t==="FINAL"?"Final":"Upcoming",c=t==="FINAL"?Qf:Xf,u=parseInt(this.homeScore),d=parseInt(this.awayScore),p=n&&t==="FINAL"&&u>d,f=n&&t==="FINAL"&&d>u;this.shadowRoot.innerHTML=`
      <style>
        ${je()}

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
            ${r?`<span class="sport">
              ${this.sportId?`<bma-sport-icon sport="${this.sportId}" data-sport-group="${this.sportGroup}" style="width: 14px; height: 14px;"></bma-sport-icon>`:""}
              ${r}
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
            <span class="time-meta">${o}</span>
            <span class="time-remaining">
              ${a||t}${s?`<span class="countdown-badge">${s}</span>`:""}
            </span>
          </div>
        </div>
      </div>
    `}}customElements.define("bma-match-status",Zf);const eh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',th='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',ah='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',sh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class oa extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",a),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-leaderboard-card] Error parsing user_matches:",a),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Me.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&(this.render(),this.attachEventListeners())}toggleExpanded(){oa.currentlyExpanded&&oa.currentlyExpanded!==this&&oa.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),a.classList.add("expanded"),oa.currentlyExpanded=this):(t.classList.remove("open"),a.classList.remove("expanded"),oa.currentlyExpanded===this&&(oa.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),a&&a.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",a=>{a.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let a=0,s=0,n=0,o=0,r=0;return t.forEach(l=>{const i=l.bet||[];if(i.length===0)return;const c=i[0];Object.keys(c).filter(d=>d!=="short_title").forEach(d=>{const p=c[d];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?a++:s++:(n++,o+=parseFloat(p.stake||p.wager||0),r+=parseFloat(p.payout||0)))})}),{wins:a,losses:s,pending:n,total:a+s+n,pendingStakes:o,pendingMaxPayout:r}}renderBetsTable(){const t=this.combinedBetslips,a=this.userMatches,s=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(i=>{const c=i.bet||[];if(c.length===0)return!1;if(s)return!0;const u=c[0],d=Object.keys(u).filter(p=>p!=="short_title")[0];return u[d]?.reconciled===!0});if(n.length===0){if(!s){const i=t.reduce((c,u)=>{const d=(u.bet||[])[0];if(!d)return c;const p=Object.keys(d).filter(f=>f!=="short_title");return c+p.filter(f=>d[f]?.reconciled!==!0).length},0);if(i>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${i} pending bet${i!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const o={};a.forEach(i=>{const c=i.guid||i.id||i.odds_id;c&&(o[c]=i)});const r={};n.forEach(i=>{const c=i.coreMatches__guid||i.match_guid||i.odds_id||"unknown";r[c]||(r[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const u=o[c];if(u){r[c].matchTitle=u.short_title||u.title||"Unknown Match";const d=u.sport_id,p=qe.find(f=>f.key===d);r[c].sportKey=p?.group||"default"}r[c].bets.push(i)});let l="";if(Object.keys(r).forEach(i=>{const c=r[i],u=c.sportKey||"default",d=c.matchTitle||"Unknown Match",p=c.bets.length;l+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${u}"></bma-sport-icon>
                    <span class="match-title">${d}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const g=f.bet||[];if(g.length===0)return;const h=g[0];Object.keys(h).filter(m=>m!=="short_title").forEach(m=>{const _=h[m];if(!_||typeof _!="object")return;const x=(_.type||"").toUpperCase(),k=parseFloat(_.stake||_.wager||0),I=parseFloat(_.payout||0),R=parseInt(_.odds,10),N=Number.isFinite(R)?R>0?`+${R}`:`${R}`:"—",j=_.reconciled===!0,$=I-k,U=.01;let z,F,V,y,A;j?I>k+U?(z="won",F="Won",V=th,y=`+TD$ ${$.toFixed(2)}`,A="Profit"):I<k-U?(z="lost",F="Lost",V=ah,y=`-TD$ ${k.toFixed(2)}`,A="Lost"):(z="push",F="Push",V=sh,y=`TD$ ${k.toFixed(2)}`,A="Returned"):(z="pending",F="Pending",V=eh,y=$>0?`+TD$ ${$.toFixed(2)}`:"TD$ 0.00",A="To win"),l+=`<div class="bet-item ${z}">
                        <div class="bet-item__pill">
                            <span class="bet-item__pill-dot"></span>
                            <span class="bet-item__pill-icon">${V}</span>
                            <span class="bet-item__pill-label">${F}</span>
                        </div>
                        <div class="bet-item__body">
                            <div class="bet-item__middle">
                                <div class="bet-item__team">${m}</div>
                                <div class="bet-item__odds">${N}</div>
                                <div class="bet-item__meta">
                                    <div class="bet-item__type">${x}</div>
                                    <div class="bet-item__stake">TD$ ${k.toFixed(2)} stake</div>
                                </div>
                            </div>
                            <div class="bet-item__footer">
                                <div class="bet-item__hero">${y}</div>
                                <div class="bet-item__sublabel">${A}</div>
                            </div>
                        </div>
                    </div>`})})}),!s){const i=t.reduce((c,u)=>{const d=(u.bet||[])[0];if(!d)return c;const p=Object.keys(d).filter(f=>f!=="short_title");return c+p.filter(f=>d[f]?.reconciled!==!0).length},0);i>0&&(l+=`<p class="hidden-bets-note">+ ${i} pending bet${i!==1?"s":""} hidden until settled</p>`)}return l}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",a=this.unqualified?"leaderboard-card--unqualified":"",s=parseFloat(this.startingDollars||0),n=this.combinedBetslips;let o=0,r=0,l=0;n.forEach(_=>{const x=_.bet||[];if(x.length===0)return;const k=x[0];Object.keys(k).filter(I=>I!=="short_title").forEach(I=>{const R=k[I];if(!R||typeof R!="object")return;const N=parseFloat(R.stake||0),j=parseFloat(R.payout||0);o+=N,R.reconciled===!0?l+=j:r+=N})});const i=Math.max(0,s-o),c=_=>Math.abs(_)<.01?0:_,u=o-r,d=c(s-u+l),p=d,f=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",g=c(p-s),h=g>=0?"+":"",E=g>0?"profit-up":g<0?"profit-down":"profit-even",m=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${je()}
                ${ha()}

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

            <div class="leaderboard-card ${t} ${a}">
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
                        <div class="kpi-card__value ${E}">${h}TD$ ${Math.abs(g).toFixed(2)}</div>
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
        `}}customElements.define("bma-leaderboard-card",oa);class ec{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:a,scope:s}=t.Bet,{home_team_id:n,home_team_score:o,away_team_id:r,away_team_score:l}=t.Match,i=a?.toUpperCase()||"",c=parseFloat(o)||0,u=parseFloat(l)||0;if(c===0&&u===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${i} bet:`,{home:`${n} (${c})`,away:`${r} (${u})`,scope:s}),i){case"MONEY":return this._evaluateMoneyline(s.team_id,n,r,c,u);case"SPREAD":return this._evaluateSpread(s.team_id,s.point,n,r,c,u);case"TOTAL":return this._evaluateTotal(s.over,s.under,c,u);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",i),!1}}static _evaluateMoneyline(t,a,s,n,o){if(t==="Draw"){const p=n===o;return console.log(`[CoreBetSlip.isPayout] MONEY (Draw) - ${p?"WON":"LOST"}`),p}const r=t===a,l=t===s;if(!r&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const i=n>o,c=o>n;if(n===o)return console.log("[CoreBetSlip.isPayout] MONEY - tie (push on non-soccer, loss on soccer)"),!1;const d=r&&i||l&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${d?"WON":"LOST"}`),d}static _evaluateSpread(t,a,s,n,o,r){const l=t===s,i=t===n;if(!l&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(a)||0;let u=o,d=r;l?u=o+c:d=r+c;const p=u>d,f=d>u;if(u===d)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const h=l&&p||i&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${h?"WON":"LOST"}`),h}static _evaluateTotal(t,a,s,n){const o=s+n,r=t&&t!=="";if(!r&&!(a&&a!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const i=parseFloat(r?t:a);if(o===i)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return r?(c=o>i,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${i} (actual: ${o}) - ${c?"WON":"LOST"}`)):(c=o<i,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${i} (actual: ${o}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:a,odds:s,stake:n}=t.Bet,o=a?.toUpperCase()||"",r=parseFloat(s)||0,l=parseFloat(n)||0;if(l<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",l),0;if(r===0)return console.warn("[CoreBetSlip] Invalid odds value:",r),0;let i=0;switch(o){case"SPREAD":i=this.calcAmericanOddsPayout(r,l),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:r,stake:l,payout:i});break;case"MONEY":i=this.calcAmericanOddsPayout(r,l),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:r,stake:l,payout:i});break;case"TOTAL":i=this.calcAmericanOddsPayout(r,l),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:r,stake:l,payout:i});break;case"PROP":i=this.calcAmericanOddsPayout(r,l),console.log("[CoreBetSlip] PROP payout calculated:",{odds:r,stake:l,payout:i});break;case"PARLAY":i=this.calcAmericanOddsPayout(r,l),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:r,stake:l,payout:i});break;default:console.warn("[CoreBetSlip] Unknown bet type:",o),i=0;break}return parseFloat(i.toFixed(2))}static calcAmericanOddsPayout(t,a){let s=0;return t>0?s=a*(t/100):t<0?s=a/(Math.abs(t)/100):s=0,a+s}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function ni(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function qo(e={},t={}){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(s=>a.indexOf(s)<0).forEach(s=>{typeof e[s]>"u"?e[s]=t[s]:ni(t[s])&&ni(e[s])&&Object.keys(t[s]).length>0&&qo(e[s],t[s])})}const tc={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Rt(){const e=typeof document<"u"?document:{};return qo(e,tc),e}const nh={document:tc,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function lt(){const e=typeof window<"u"?window:{};return qo(e,nh),e}function oh(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function rh(e){const t=e;Object.keys(t).forEach(a=>{try{t[a]=null}catch{}try{delete t[a]}catch{}})}function ac(e,t=0){return setTimeout(e,t)}function Zs(){return Date.now()}function ih(e){const t=lt();let a;return t.getComputedStyle&&(a=t.getComputedStyle(e,null)),!a&&e.currentStyle&&(a=e.currentStyle),a||(a=e.style),a}function lh(e,t="x"){const a=lt();let s,n,o;const r=ih(e);return a.WebKitCSSMatrix?(n=r.transform||r.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(l=>l.replace(",",".")).join(", ")),o=new a.WebKitCSSMatrix(n==="none"?"":n)):(o=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=o.toString().split(",")),t==="x"&&(a.WebKitCSSMatrix?n=o.m41:s.length===16?n=parseFloat(s[12]):n=parseFloat(s[4])),t==="y"&&(a.WebKitCSSMatrix?n=o.m42:s.length===16?n=parseFloat(s[13]):n=parseFloat(s[5])),n||0}function Cs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function ch(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function pt(...e){const t=Object(e[0]);for(let a=1;a<e.length;a+=1){const s=e[a];if(s!=null&&!ch(s)){const n=Object.keys(Object(s)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,r=n.length;o<r;o+=1){const l=n[o],i=Object.getOwnPropertyDescriptor(s,l);i!==void 0&&i.enumerable&&(Cs(t[l])&&Cs(s[l])?s[l].__swiper__?t[l]=s[l]:pt(t[l],s[l]):!Cs(t[l])&&Cs(s[l])?(t[l]={},s[l].__swiper__?t[l]=s[l]:pt(t[l],s[l])):t[l]=s[l])}}}return t}function Oa(e,t,a){e.style.setProperty(t,a)}function sc({swiper:e,targetPosition:t,side:a}){const s=lt(),n=-e.translate;let o=null,r;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const i=t>n?"next":"prev",c=(d,p)=>i==="next"&&d>=p||i==="prev"&&d<=p,u=()=>{r=new Date().getTime(),o===null&&(o=r);const d=Math.max(Math.min((r-o)/l,1),0),p=.5-Math.cos(d*Math.PI)/2;let f=n+p*(t-n);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[a]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:f})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(u)};u()}function Mt(e,t=""){const a=lt(),s=[...e.children];return a.HTMLSlotElement&&e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),t?s.filter(n=>n.matches(t)):s}function dh(e,t){const a=[t];for(;a.length>0;){const s=a.shift();if(e===s)return!0;a.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function uh(e,t){const a=lt();let s=t.contains(e);return!s&&a.HTMLSlotElement&&t instanceof HTMLSlotElement&&(s=[...t.assignedElements()].includes(e),s||(s=dh(e,t))),s}function en(e){try{console.warn(e);return}catch{}}function tn(e,t=[]){const a=document.createElement(e);return a.classList.add(...Array.isArray(t)?t:oh(t)),a}function ph(e,t){const a=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;t?s.matches(t)&&a.push(s):a.push(s),e=s}return a}function fh(e,t){const a=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;t?s.matches(t)&&a.push(s):a.push(s),e=s}return a}function ra(e,t){return lt().getComputedStyle(e,null).getPropertyValue(t)}function an(e){let t=e,a;if(t){for(a=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(a+=1);return a}}function nc(e,t){const a=[];let s=e.parentElement;for(;s;)t?s.matches(t)&&a.push(s):a.push(s),s=s.parentElement;return a}function yo(e,t,a){const s=lt();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Ft(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function oi(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:a=>a}).createHTML(t):e.innerHTML=t}let Gn;function hh(){const e=lt(),t=Rt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function oc(){return Gn||(Gn=hh()),Gn}let jn;function gh({userAgent:e}={}){const t=oc(),a=lt(),s=a.navigator.platform,n=e||a.navigator.userAgent,o={ios:!1,android:!1},r=a.screen.width,l=a.screen.height,i=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=s==="Win32";let f=s==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&g.indexOf(`${r}x${l}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),i&&!p&&(o.os="android",o.android=!0),(c||d||u)&&(o.os="ios",o.ios=!0),o}function rc(e={}){return jn||(jn=gh(e)),jn}let Vn;function mh(){const e=lt(),t=rc();let a=!1;function s(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(s()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[i,c]=l.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));a=i<16||i===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=s(),r=o||n&&t.ios;return{isSafari:a||o,needPerspectiveFix:a,need3dFix:r,isWebView:n}}function ic(){return Vn||(Vn=mh()),Vn}function bh({swiper:e,on:t,emit:a}){const s=lt();let n=null,o=null;const r=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(u=>{o=s.requestAnimationFrame(()=>{const{width:d,height:p}=e;let f=d,g=p;u.forEach(({contentBoxSize:h,contentRect:E,target:m})=>{m&&m!==e.el||(f=E?E.width:(h[0]||h).inlineSize,g=E?E.height:(h[0]||h).blockSize)}),(f!==d||g!==p)&&r()})}),n.observe(e.el))},i=()=>{o&&s.cancelAnimationFrame(o),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){l();return}s.addEventListener("resize",r),s.addEventListener("orientationchange",c)}),t("destroy",()=>{i(),s.removeEventListener("resize",r),s.removeEventListener("orientationchange",c)})}function vh({swiper:e,extendParams:t,on:a,emit:s}){const n=[],o=lt(),r=(c,u={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,p=new d(f=>{if(e.__preventObserver__)return;if(f.length===1){s("observerUpdate",f[0]);return}const g=function(){s("observerUpdate",f[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});p.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),n.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=nc(e.hostEl);for(let u=0;u<c.length;u+=1)r(c[u])}r(e.hostEl,{childList:e.params.observeSlideChildren}),r(e.wrapperEl,{attributes:!1})}},i=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",l),a("destroy",i)}var _h={on(e,t,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const n=a?"unshift":"push";return e.split(" ").forEach(o=>{s.eventsListeners[o]||(s.eventsListeners[o]=[]),s.eventsListeners[o][n](t)}),s},once(e,t,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function n(...o){s.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,t.apply(s,o)}return n.__emitterProxy=t,s.on(e,n,a)},onAny(e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const s=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[s](e),a},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off(e,t){const a=this;return!a.eventsListeners||a.destroyed||!a.eventsListeners||e.split(" ").forEach(s=>{typeof t>"u"?a.eventsListeners[s]=[]:a.eventsListeners[s]&&a.eventsListeners[s].forEach((n,o)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&a.eventsListeners[s].splice(o,1)})}),a},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let a,s,n;return typeof e[0]=="string"||Array.isArray(e[0])?(a=e[0],s=e.slice(1,e.length),n=t):(a=e[0].events,s=e[0].data,n=e[0].context||t),s.unshift(n),(Array.isArray(a)?a:a.split(" ")).forEach(r=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(n,[r,...s])}),t.eventsListeners&&t.eventsListeners[r]&&t.eventsListeners[r].forEach(l=>{l.apply(n,s)})}),t}};function yh(){const e=this;let t,a;const s=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=s.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?a=e.params.height:a=s.clientHeight,!(t===0&&e.isHorizontal()||a===0&&e.isVertical())&&(t=t-parseInt(ra(s,"padding-left")||0,10)-parseInt(ra(s,"padding-right")||0,10),a=a-parseInt(ra(s,"padding-top")||0,10)-parseInt(ra(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(a)&&(a=0),Object.assign(e,{width:t,height:a,size:e.isHorizontal()?t:a}))}function wh(){const e=this;function t(U,z){return parseFloat(U.getPropertyValue(e.getDirectionLabel(z))||0)}const a=e.params,{wrapperEl:s,slidesEl:n,rtlTranslate:o,wrongRTL:r}=e,l=e.virtual&&a.virtual.enabled,i=l?e.virtual.slides.length:e.slides.length,c=Mt(n,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:c.length;let d=[];const p=[],f=[];let g=a.slidesOffsetBefore;typeof g=="function"&&(g=a.slidesOffsetBefore.call(e));let h=a.slidesOffsetAfter;typeof h=="function"&&(h=a.slidesOffsetAfter.call(e));const E=e.snapGrid.length,m=e.slidesGrid.length,_=e.size-g-h;let x=a.spaceBetween,k=-g,I=0,R=0;if(typeof _>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*_:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-g-h,c.forEach(U=>{o?U.style.marginLeft="":U.style.marginRight="",U.style.marginBottom="",U.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(Oa(s,"--swiper-centered-offset-before",""),Oa(s,"--swiper-centered-offset-after","")),a.cssMode&&(Oa(s,"--swiper-slides-offset-before",`${g}px`),Oa(s,"--swiper-slides-offset-after",`${h}px`));const N=a.grid&&a.grid.rows>1&&e.grid;N?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let j;const $=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(U=>typeof a.breakpoints[U].slidesPerView<"u").length>0;for(let U=0;U<u;U+=1){j=0;const z=c[U];if(!(z&&(N&&e.grid.updateSlide(U,z,c),ra(z,"display")==="none"))){if(l&&a.slidesPerView==="auto")a.virtual.slidesPerViewAutoSlideSize&&(j=a.virtual.slidesPerViewAutoSlideSize),j&&z&&(a.roundLengths&&(j=Math.floor(j)),z.style[e.getDirectionLabel("width")]=`${j}px`);else if(a.slidesPerView==="auto"){$&&(z.style[e.getDirectionLabel("width")]="");const F=getComputedStyle(z),V=z.style.transform,y=z.style.webkitTransform;if(V&&(z.style.transform="none"),y&&(z.style.webkitTransform="none"),a.roundLengths)j=e.isHorizontal()?yo(z,"width"):yo(z,"height");else{const A=t(F,"width"),S=t(F,"padding-left"),D=t(F,"padding-right"),O=t(F,"margin-left"),q=t(F,"margin-right"),X=F.getPropertyValue("box-sizing");if(X&&X==="border-box")j=A+O+q;else{const{clientWidth:W,offsetWidth:oe}=z;j=A+S+D+O+q+(oe-W)}}V&&(z.style.transform=V),y&&(z.style.webkitTransform=y),a.roundLengths&&(j=Math.floor(j))}else j=(_-(a.slidesPerView-1)*x)/a.slidesPerView,a.roundLengths&&(j=Math.floor(j)),z&&(z.style[e.getDirectionLabel("width")]=`${j}px`);z&&(z.swiperSlideSize=j),f.push(j),a.centeredSlides?(k=k+j/2+I/2+x,I===0&&U!==0&&(k=k-_/2-x),U===0&&(k=k-_/2-x),Math.abs(k)<1/1e3&&(k=0),a.roundLengths&&(k=Math.floor(k)),R%a.slidesPerGroup===0&&d.push(k),p.push(k)):(a.roundLengths&&(k=Math.floor(k)),(R-Math.min(e.params.slidesPerGroupSkip,R))%e.params.slidesPerGroup===0&&d.push(k),p.push(k),k=k+j+x),e.virtualSize+=j+x,I=j,R+=1}}if(e.virtualSize=Math.max(e.virtualSize,_)+h,o&&r&&(a.effect==="slide"||a.effect==="coverflow")&&(s.style.width=`${e.virtualSize+x}px`),a.setWrapperSize&&(s.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),N&&e.grid.updateWrapperSize(j,d),!a.centeredSlides){const U=a.slidesPerView!=="auto"&&a.slidesPerView%1!==0,z=a.snapToSlideEdge&&!a.loop&&(a.slidesPerView==="auto"||U);let F=d.length;if(z){let y;if(a.slidesPerView==="auto"){y=1;let A=0;for(let S=f.length-1;S>=0&&(A+=f[S]+(S<f.length-1?x:0),A<=_);S-=1)y=f.length-S}else y=Math.floor(a.slidesPerView);F=Math.max(u-y,0)}const V=[];for(let y=0;y<d.length;y+=1){let A=d[y];a.roundLengths&&(A=Math.floor(A)),z?y<=F&&V.push(A):d[y]<=e.virtualSize-_&&V.push(A)}d=V,Math.floor(e.virtualSize-_)-Math.floor(d[d.length-1])>1&&(z||d.push(e.virtualSize-_))}if(l&&a.loop){const U=f[0]+x;if(a.slidesPerGroup>1){const z=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),F=U*a.slidesPerGroup;for(let V=0;V<z;V+=1)d.push(d[d.length-1]+F)}for(let z=0;z<e.virtual.slidesBefore+e.virtual.slidesAfter;z+=1)a.slidesPerGroup===1&&d.push(d[d.length-1]+U),p.push(p[p.length-1]+U),e.virtualSize+=U}if(d.length===0&&(d=[0]),x!==0){const U=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((z,F)=>!a.cssMode||a.loop?!0:F!==c.length-1).forEach(z=>{z.style[U]=`${x}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let U=0;f.forEach(F=>{U+=F+(x||0)}),U-=x;const z=U>_?U-_:0;d=d.map(F=>F<=0?-g:F>z?z+h:F)}if(a.centerInsufficientSlides){let U=0;if(f.forEach(z=>{U+=z+(x||0)}),U-=x,U<_){const z=(_-U)/2;d.forEach((F,V)=>{d[V]=F-z}),p.forEach((F,V)=>{p[V]=F+z})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:p,slidesSizesGrid:f}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){Oa(s,"--swiper-centered-offset-before",`${-d[0]}px`),Oa(s,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const U=-e.snapGrid[0],z=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(F=>F+U),e.slidesGrid=e.slidesGrid.map(F=>F+z)}if(u!==i&&e.emit("slidesLengthChange"),d.length!==E&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==m&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const U=`${a.containerModifierClass}backface-hidden`,z=e.el.classList.contains(U);u<=a.maxBackfaceHiddenSlides?z||e.el.classList.add(U):z&&e.el.classList.remove(U)}}function xh(e){const t=this,a=[],s=t.virtual&&t.params.virtual.enabled;let n=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const r=l=>s?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{a.push(l)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const l=t.activeIndex+o;if(l>t.slides.length&&!s)break;a.push(r(l))}else a.push(r(t.activeIndex));for(o=0;o<a.length;o+=1)if(typeof a[o]<"u"){const l=a[o].offsetHeight;n=l>n?l:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function Th(){const e=this,t=e.slides,a=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-a-e.cssOverflowAdjustment()}const ri=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function Sh(e=this&&this.translate||0){const t=this,a=t.params,{slides:s,rtlTranslate:n,snapGrid:o}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let r=-e;n&&(r=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=a.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let i=0;i<s.length;i+=1){const c=s[i];let u=c.swiperSlideOffset;a.cssMode&&a.centeredSlides&&(u-=s[0].swiperSlideOffset);const d=(r+(a.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),p=(r-o[0]+(a.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+l),f=-(r-u),g=f+t.slidesSizesGrid[i],h=f>=0&&f<=t.size-t.slidesSizesGrid[i],E=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;E&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(i)),ri(c,E,a.slideVisibleClass),ri(c,h,a.slideFullyVisibleClass),c.progress=n?-d:d,c.originalProgress=n?-p:p}}function kh(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const a=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:o,isEnd:r,progressLoop:l}=t;const i=o,c=r;if(s===0)n=0,o=!0,r=!0;else{n=(e-t.minTranslate())/s;const u=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=u||n<=0,r=d||n>=1,u&&(n=0),d&&(n=1)}if(a.loop){const u=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[u],f=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],h=Math.abs(e);h>=p?l=(h-p)/g:l=(h+g-f)/g,l>1&&(l-=1)}Object.assign(t,{progress:n,progressLoop:l,isBeginning:o,isEnd:r}),(a.watchSlidesProgress||a.centeredSlides&&a.autoHeight)&&t.updateSlidesProgress(e),o&&!i&&t.emit("reachBeginning toEdge"),r&&!c&&t.emit("reachEnd toEdge"),(i&&!o||c&&!r)&&t.emit("fromEdge"),t.emit("progress",n)}const qn=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function Eh(){const e=this,{slides:t,params:a,slidesEl:s,activeIndex:n}=e,o=e.virtual&&a.virtual.enabled,r=e.grid&&a.grid&&a.grid.rows>1,l=d=>Mt(s,`.${a.slideClass}${d}, swiper-slide${d}`)[0];let i,c,u;if(o)if(a.loop){let d=n-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),i=l(`[data-swiper-slide-index="${d}"]`)}else i=l(`[data-swiper-slide-index="${n}"]`);else r?(i=t.find(d=>d.column===n),u=t.find(d=>d.column===n+1),c=t.find(d=>d.column===n-1)):i=t[n];i&&(r||(u=fh(i,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!u&&(u=t[0]),c=ph(i,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(d=>{qn(d,d===i,a.slideActiveClass),qn(d,d===u,a.slideNextClass),qn(d,d===c,a.slidePrevClass)}),e.emitSlidesClasses()}const Bs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const a=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,s=t.closest(a());if(s){let n=s.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(s.shadowRoot?n=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(n=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},Yn=(e,t)=>{if(!e.slides[t])return;const a=e.slides[t].querySelector('[loading="lazy"]');a&&a.removeAttribute("loading")},wo=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const a=e.slides.length;if(!a||!t||t<0)return;t=Math.min(t,a);const s=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const r=n,l=[r-t];l.push(...Array.from({length:t}).map((i,c)=>r+s+c)),e.slides.forEach((i,c)=>{l.includes(i.column)&&Yn(e,c)});return}const o=n+s-1;if(e.params.rewind||e.params.loop)for(let r=n-t;r<=o+t;r+=1){const l=(r%a+a)%a;(l<n||l>o)&&Yn(e,l)}else for(let r=Math.max(n-t,0);r<=Math.min(o+t,a-1);r+=1)r!==n&&(r>o||r<n)&&Yn(e,r)};function Ah(e){const{slidesGrid:t,params:a}=e,s=e.rtlTranslate?e.translate:-e.translate;let n;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?s>=t[o]&&s<t[o+1]-(t[o+1]-t[o])/2?n=o:s>=t[o]&&s<t[o+1]&&(n=o+1):s>=t[o]&&(n=o);return a.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Ch(e){const t=this,a=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:n,activeIndex:o,realIndex:r,snapIndex:l}=t;let i=e,c;const u=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof i>"u"&&(i=Ah(t)),s.indexOf(a)>=0)c=s.indexOf(a);else{const f=Math.min(n.slidesPerGroupSkip,i);c=f+Math.floor((i-f)/n.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),i===o&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(i===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(i);return}const d=t.grid&&n.grid&&n.grid.rows>1;let p;if(t.virtual&&n.virtual.enabled)n.loop?p=u(i):p=i;else if(d){const f=t.slides.find(h=>h.column===i);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),p=Math.floor(g/n.grid.rows)}else if(t.slides[i]){const f=t.slides[i].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=i}else p=i;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:r,realIndex:p,previousIndex:o,activeIndex:i}),t.initialized&&wo(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(r!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function Ph(e,t){const a=this,s=a.params;let n=e.closest(`.${s.slideClass}, swiper-slide`);!n&&a.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!n&&l.matches&&l.matches(`.${s.slideClass}, swiper-slide`)&&(n=l)});let o=!1,r;if(n){for(let l=0;l<a.slides.length;l+=1)if(a.slides[l]===n){o=!0,r=l;break}}if(n&&o)a.clickedSlide=n,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):a.clickedIndex=r;else{a.clickedSlide=void 0,a.clickedIndex=void 0;return}s.slideToClickedSlide&&a.clickedIndex!==void 0&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}var Oh={updateSize:yh,updateSlides:wh,updateAutoHeight:xh,updateSlidesOffset:Th,updateSlidesProgress:Sh,updateProgress:kh,updateSlidesClasses:Eh,updateActiveIndex:Ch,updateClickedSlide:Ph};function Lh(e=this.isHorizontal()?"x":"y"){const t=this,{params:a,rtlTranslate:s,translate:n,wrapperEl:o}=t;if(a.virtualTranslate)return s?-n:n;if(a.cssMode)return n;let r=lh(o,e);return r+=t.cssOverflowAdjustment(),s&&(r=-r),r||0}function Mh(e,t){const a=this,{rtlTranslate:s,params:n,wrapperEl:o,progress:r}=a;let l=0,i=0;const c=0;a.isHorizontal()?l=s?-e:e:i=e,n.roundLengths&&(l=Math.floor(l),i=Math.floor(i)),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?l:i,n.cssMode?o[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-l:-i:n.virtualTranslate||(a.isHorizontal()?l-=a.cssOverflowAdjustment():i-=a.cssOverflowAdjustment(),o.style.transform=`translate3d(${l}px, ${i}px, ${c}px)`);let u;const d=a.maxTranslate()-a.minTranslate();d===0?u=0:u=(e-a.minTranslate())/d,u!==r&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)}function Dh(){return-this.snapGrid[0]}function Rh(){return-this.snapGrid[this.snapGrid.length-1]}function Ih(e=0,t=this.params.speed,a=!0,s=!0,n){const o=this,{params:r,wrapperEl:l}=o;if(o.animating&&r.preventInteractionOnTransition)return!1;const i=o.minTranslate(),c=o.maxTranslate();let u;if(s&&e>i?u=i:s&&e<c?u=c:u=e,o.updateProgress(u),r.cssMode){const d=o.isHorizontal();if(t===0)l[d?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return sc({swiper:o,targetPosition:-u,side:d?"left":"top"}),!0;l.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),a&&(o.emit("beforeTransitionStart",t,n),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),a&&(o.emit("beforeTransitionStart",t,n),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(p){!o||o.destroyed||p.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,a&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var $h={getTranslate:Lh,setTranslate:Mh,minTranslate:Dh,maxTranslate:Rh,translateTo:Ih};function Nh(e,t){const a=this;a.params.cssMode||(a.wrapperEl.style.transitionDuration=`${e}ms`,a.wrapperEl.style.transitionDelay=e===0?"0ms":""),a.emit("setTransition",e,t)}function lc({swiper:e,runCallbacks:t,direction:a,step:s}){const{activeIndex:n,previousIndex:o}=e;let r=a;r||(n>o?r="next":n<o?r="prev":r="reset"),e.emit(`transition${s}`),t&&r==="reset"?e.emit(`slideResetTransition${s}`):t&&n!==o&&(e.emit(`slideChangeTransition${s}`),r==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function Bh(e=!0,t){const a=this,{params:s}=a;s.cssMode||(s.autoHeight&&a.updateAutoHeight(),lc({swiper:a,runCallbacks:e,direction:t,step:"Start"}))}function Fh(e=!0,t){const a=this,{params:s}=a;a.animating=!1,!s.cssMode&&(a.setTransition(0),lc({swiper:a,runCallbacks:e,direction:t,step:"End"}))}var zh={setTransition:Nh,transitionStart:Bh,transitionEnd:Fh};function Hh(e=0,t,a=!0,s,n){typeof e=="string"&&(e=parseInt(e,10));const o=this;let r=e;r<0&&(r=0);const{params:l,snapGrid:i,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:p,wrapperEl:f,enabled:g}=o;if(!g&&!s&&!n||o.destroyed||o.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const h=Math.min(o.params.slidesPerGroupSkip,r);let E=h+Math.floor((r-h)/o.params.slidesPerGroup);E>=i.length&&(E=i.length-1);const m=-i[E];if(l.normalizeSlideIndex)for(let N=0;N<c.length;N+=1){const j=-Math.floor(m*100),$=Math.floor(c[N]*100),U=Math.floor(c[N+1]*100);typeof c[N+1]<"u"?j>=$&&j<U-(U-$)/2?r=N:j>=$&&j<U&&(r=N+1):j>=$&&(r=N)}if(o.initialized&&r!==d&&(!o.allowSlideNext&&(p?m>o.translate&&m>o.minTranslate():m<o.translate&&m<o.minTranslate())||!o.allowSlidePrev&&m>o.translate&&m>o.maxTranslate()&&(d||0)!==r))return!1;r!==(u||0)&&a&&o.emit("beforeSlideChangeStart"),o.updateProgress(m);let _;r>d?_="next":r<d?_="prev":_="reset";const x=o.virtual&&o.params.virtual.enabled;if(!(x&&n)&&(p&&-m===o.translate||!p&&m===o.translate))return o.updateActiveIndex(r),l.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),l.effect!=="slide"&&o.setTranslate(m),_!=="reset"&&(o.transitionStart(a,_),o.transitionEnd(a,_)),!1;if(l.cssMode){const N=o.isHorizontal(),j=p?m:-m;if(t===0)x&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),x&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[N?"scrollLeft":"scrollTop"]=j})):f[N?"scrollLeft":"scrollTop"]=j,x&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return sc({swiper:o,targetPosition:j,side:N?"left":"top"}),!0;f.scrollTo({[N?"left":"top"]:j,behavior:"smooth"})}return!0}const R=ic().isSafari;return x&&!n&&R&&o.isElement&&o.virtual.update(!1,!1,r),o.setTransition(t),o.setTranslate(m),o.updateActiveIndex(r),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,s),o.transitionStart(a,_),t===0?o.transitionEnd(a,_):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(j){!o||o.destroyed||j.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(a,_))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function Uh(e=0,t,a=!0,s){typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof t>"u"&&(t=n.params.speed);const o=n.grid&&n.params.grid&&n.params.grid.rows>1;let r=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)r=r+n.virtual.slidesBefore;else{let l;if(o){const h=r*n.params.grid.rows;l=n.slides.find(E=>E.getAttribute("data-swiper-slide-index")*1===h).column}else l=n.getSlideIndexByData(r);const i=o?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=n.params,p=c||!!u||!!d;let f=n.params.slidesPerView;f==="auto"?f=n.slidesPerViewDynamic():(f=Math.ceil(parseFloat(n.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let g=i-l<f;if(p&&(g=g||l<Math.ceil(f/2)),s&&p&&n.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const h=p?l<n.activeIndex?"prev":"next":l-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?l+1:l-i+1,slideRealIndex:h==="next"?n.realIndex:void 0})}if(o){const h=r*n.params.grid.rows;r=n.slides.find(E=>E.getAttribute("data-swiper-slide-index")*1===h).column}else r=n.getSlideIndexByData(r)}return requestAnimationFrame(()=>{n.slideTo(r,t,a,s)}),n}function Gh(e,t=!0,a){const s=this,{enabled:n,params:o,animating:r}=s;if(!n||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);let l=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(l=Math.max(s.slidesPerViewDynamic("current",!0),1));const i=s.activeIndex<o.slidesPerGroupSkip?1:l,c=s.virtual&&o.virtual.enabled;if(o.loop){if(r&&!c&&o.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+i,e,t,a)}),!0}return o.rewind&&s.isEnd?s.slideTo(0,e,t,a):s.slideTo(s.activeIndex+i,e,t,a)}function jh(e,t=!0,a){const s=this,{params:n,snapGrid:o,slidesGrid:r,rtlTranslate:l,enabled:i,animating:c}=s;if(!i||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);const u=s.virtual&&n.virtual.enabled;if(n.loop){if(c&&!u&&n.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const d=l?s.translate:-s.translate;function p(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const f=p(d),g=o.map(_=>p(_)),h=n.freeMode&&n.freeMode.enabled;let E=o[g.indexOf(f)-1];if(typeof E>"u"&&(n.cssMode||h)){let _;o.forEach((x,k)=>{f>=x&&(_=k)}),typeof _<"u"&&(E=h?o[_]:o[_>0?_-1:_])}let m=0;if(typeof E<"u"&&(m=r.indexOf(E),m<0&&(m=s.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(m=m-s.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),n.rewind&&s.isBeginning){const _=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(_,e,t,a)}else if(n.loop&&s.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(m,e,t,a)}),!0;return s.slideTo(m,e,t,a)}function Vh(e,t=!0,a){const s=this;if(!s.destroyed)return typeof e>"u"&&(e=s.params.speed),s.slideTo(s.activeIndex,e,t,a)}function qh(e,t=!0,a,s=.5){const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let o=n.activeIndex;const r=Math.min(n.params.slidesPerGroupSkip,o),l=r+Math.floor((o-r)/n.params.slidesPerGroup),i=n.rtlTranslate?n.translate:-n.translate;if(i>=n.snapGrid[l]){const c=n.snapGrid[l],u=n.snapGrid[l+1];i-c>(u-c)*s&&(o+=n.params.slidesPerGroup)}else{const c=n.snapGrid[l-1],u=n.snapGrid[l];i-c<=(u-c)*s&&(o-=n.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,n.slidesGrid.length-1),n.slideTo(o,e,t,a)}function Yh(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:a}=e,s=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.getSlideIndexWhenGrid(e.clickedIndex),o;const r=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):n>(l?(e.slides.length-s)/2-(e.params.grid.rows-1):e.slides.length-s)?(e.loopFix(),n=e.getSlideIndex(Mt(a,`${r}[data-swiper-slide-index="${o}"]`)[0]),ac(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var Kh={slideTo:Hh,slideToLoop:Uh,slideNext:Gh,slidePrev:jh,slideReset:Vh,slideToClosest:qh,slideToClickedSlide:Yh};function Wh(e,t){const a=this,{params:s,slidesEl:n}=a;if(!s.loop||a.virtual&&a.params.virtual.enabled)return;const o=()=>{Mt(n,`.${s.slideClass}, swiper-slide`).forEach((g,h)=>{g.setAttribute("data-swiper-slide-index",h)})},r=()=>{const f=Mt(n,`.${s.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(a.recalcSlides(),a.updateSlides())},l=a.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||l)&&r();const i=s.slidesPerGroup*(l?s.grid.rows:1),c=a.slides.length%i!==0,u=l&&a.slides.length%s.grid.rows!==0,d=f=>{for(let g=0;g<f;g+=1){const h=a.isElement?tn("swiper-slide",[s.slideBlankClass]):tn("div",[s.slideClass,s.slideBlankClass]);a.slidesEl.append(h)}};if(c){if(s.loopAddBlankSlides){const f=i-a.slides.length%i;d(f),a.recalcSlides(),a.updateSlides()}else en("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(u){if(s.loopAddBlankSlides){const f=s.grid.rows-a.slides.length%s.grid.rows;d(f),a.recalcSlides(),a.updateSlides()}else en("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const p=s.centeredSlides||!!s.slidesOffsetBefore||!!s.slidesOffsetAfter;a.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function Jh({slideRealIndex:e,slideTo:t=!0,direction:a,setTranslate:s,activeSlideIndex:n,initial:o,byController:r,byMousewheel:l}={}){const i=this;if(!i.params.loop)return;i.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:p,params:f}=i,{centeredSlides:g,slidesOffsetBefore:h,slidesOffsetAfter:E,initialSlide:m}=f,_=g||!!h||!!E;if(i.allowSlidePrev=!0,i.allowSlideNext=!0,i.virtual&&f.virtual.enabled){t&&(!_&&i.snapIndex===0?i.slideTo(i.virtual.slides.length,0,!1,!0):_&&i.snapIndex<f.slidesPerView?i.slideTo(i.virtual.slides.length+i.snapIndex,0,!1,!0):i.snapIndex===i.snapGrid.length-1&&i.slideTo(i.virtual.slidesBefore,0,!1,!0)),i.allowSlidePrev=u,i.allowSlideNext=d,i.emit("loopFix");return}let x=f.slidesPerView;x==="auto"?x=i.slidesPerViewDynamic():(x=Math.ceil(parseFloat(f.slidesPerView,10)),_&&x%2===0&&(x=x+1));const k=f.slidesPerGroupAuto?x:f.slidesPerGroup;let I=_?Math.max(k,Math.ceil(x/2)):k;I%k!==0&&(I+=k-I%k),I+=f.loopAdditionalSlides,i.loopedSlides=I;const R=i.grid&&f.grid&&f.grid.rows>1;c.length<x+I||i.params.effect==="cards"&&c.length<x+I*2?en("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):R&&f.grid.fill==="row"&&en("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const N=[],j=[],$=R?Math.ceil(c.length/f.grid.rows):c.length,U=o&&$-m<x&&!_;let z=U?m:i.activeIndex;typeof n>"u"?n=i.getSlideIndex(c.find(O=>O.classList.contains(f.slideActiveClass))):z=n;const F=a==="next"||!a,V=a==="prev"||!a;let y=0,A=0;const D=(R?c[n].column:n)+(_&&typeof s>"u"?-x/2+.5:0);if(D<I){y=Math.max(I-D,k);for(let O=0;O<I-D;O+=1){const q=O-Math.floor(O/$)*$;if(R){const X=$-q-1;for(let W=c.length-1;W>=0;W-=1)c[W].column===X&&N.push(W)}else N.push($-q-1)}}else if(D+x>$-I){A=Math.max(D-($-I*2),k),U&&(A=Math.max(A,x-$+m+1));for(let O=0;O<A;O+=1){const q=O-Math.floor(O/$)*$;R?c.forEach((X,W)=>{X.column===q&&j.push(W)}):j.push(q)}}if(i.__preventObserver__=!0,requestAnimationFrame(()=>{i.__preventObserver__=!1}),i.params.effect==="cards"&&c.length<x+I*2&&(j.includes(n)&&j.splice(j.indexOf(n),1),N.includes(n)&&N.splice(N.indexOf(n),1)),V&&N.forEach(O=>{c[O].swiperLoopMoveDOM=!0,p.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),F&&j.forEach(O=>{c[O].swiperLoopMoveDOM=!0,p.append(c[O]),c[O].swiperLoopMoveDOM=!1}),i.recalcSlides(),f.slidesPerView==="auto"?i.updateSlides():R&&(N.length>0&&V||j.length>0&&F)&&i.slides.forEach((O,q)=>{i.grid.updateSlide(q,O,i.slides)}),f.watchSlidesProgress&&i.updateSlidesOffset(),t){if(N.length>0&&V){if(typeof e>"u"){const O=i.slidesGrid[z],X=i.slidesGrid[z+y]-O;l?i.setTranslate(i.translate-X):(i.slideTo(z+Math.ceil(y),0,!1,!0),s&&(i.touchEventsData.startTranslate=i.touchEventsData.startTranslate-X,i.touchEventsData.currentTranslate=i.touchEventsData.currentTranslate-X))}else if(s){const O=R?N.length/f.grid.rows:N.length;i.slideTo(i.activeIndex+O,0,!1,!0),i.touchEventsData.currentTranslate=i.translate}}else if(j.length>0&&F)if(typeof e>"u"){const O=i.slidesGrid[z],X=i.slidesGrid[z-A]-O;l?i.setTranslate(i.translate-X):(i.slideTo(z-A,0,!1,!0),s&&(i.touchEventsData.startTranslate=i.touchEventsData.startTranslate-X,i.touchEventsData.currentTranslate=i.touchEventsData.currentTranslate-X))}else{const O=R?j.length/f.grid.rows:j.length;i.slideTo(i.activeIndex-O,0,!1,!0)}}if(i.allowSlidePrev=u,i.allowSlideNext=d,i.controller&&i.controller.control&&!r){const O={slideRealIndex:e,direction:a,setTranslate:s,activeSlideIndex:n,byController:!0};Array.isArray(i.controller.control)?i.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix({...O,slideTo:q.params.slidesPerView===f.slidesPerView?t:!1})}):i.controller.control instanceof i.constructor&&i.controller.control.params.loop&&i.controller.control.loopFix({...O,slideTo:i.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}i.emit("loopFix")}function Xh(){const e=this,{params:t,slidesEl:a}=e;if(!t.loop||!a||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach(n=>{const o=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;s[o]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),s.forEach(n=>{a.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Qh={loopCreate:Wh,loopFix:Jh,loopDestroy:Xh};function Zh(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const a=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),a.style.cursor="move",a.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function eg(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var tg={setGrabCursor:Zh,unsetGrabCursor:eg};function ag(e,t=this){function a(s){if(!s||s===Rt()||s===lt())return null;s.assignedSlot&&(s=s.assignedSlot);const n=s.closest(e);return!n&&!s.getRootNode?null:n||a(s.getRootNode().host)}return a(t)}function ii(e,t,a){const s=lt(),{params:n}=e,o=n.edgeSwipeDetection,r=n.edgeSwipeThreshold;return o&&(a<=r||a>=s.innerWidth-r)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function sg(e){const t=this,a=Rt();let s=e;s.originalEvent&&(s=s.originalEvent);const n=t.touchEventsData;if(s.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==s.pointerId)return;n.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(n.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){ii(t,s,s.targetTouches[0].pageX);return}const{params:o,touches:r,enabled:l}=t;if(!l||!o.simulateTouch&&s.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let i=s.target;if(o.touchEventsTarget==="wrapper"&&!uh(i,t.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||n.isTouched&&n.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",u=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&u&&(i=u[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,p=!!(s.target&&s.target.shadowRoot);if(o.noSwiping&&(p?ag(d,i):i.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!i.closest(o.swipeHandler))return;r.currentX=s.pageX,r.currentY=s.pageY;const f=r.currentX,g=r.currentY;if(!ii(t,s,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=f,r.startY=g,n.touchStartTime=Zs(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(n.allowThresholdMove=!1);let h=!0;i.matches(n.focusableElements)&&(h=!1,i.nodeName==="SELECT"&&(n.isTouched=!1)),a.activeElement&&a.activeElement.matches(n.focusableElements)&&a.activeElement!==i&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!i.matches(n.focusableElements))&&a.activeElement.blur();const E=h&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||E)&&!i.isContentEditable&&s.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function ng(e){const t=Rt(),a=this,s=a.touchEventsData,{params:n,touches:o,rtlTranslate:r,enabled:l}=a;if(!l||!n.simulateTouch&&e.pointerType==="mouse")return;let i=e;if(i.originalEvent&&(i=i.originalEvent),i.type==="pointermove"&&(s.touchId!==null||i.pointerId!==s.pointerId))return;let c;if(i.type==="touchmove"){if(c=[...i.changedTouches].find(I=>I.identifier===s.touchId),!c||c.identifier!==s.touchId)return}else c=i;if(!s.isTouched){s.startMoving&&s.isScrolling&&a.emit("touchMoveOpposite",i);return}const u=c.pageX,d=c.pageY;if(i.preventedByNestedSwiper){o.startX=u,o.startY=d;return}if(!a.allowTouchMove){i.target.matches(s.focusableElements)||(a.allowClick=!1),s.isTouched&&(Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d}),s.touchStartTime=Zs());return}if(n.touchReleaseOnEdges&&!n.loop)if(a.isVertical()){if(d<o.startY&&a.translate<=a.maxTranslate()||d>o.startY&&a.translate>=a.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(r&&(u>o.startX&&-a.translate<=a.maxTranslate()||u<o.startX&&-a.translate>=a.minTranslate()))return;if(!r&&(u<o.startX&&a.translate<=a.maxTranslate()||u>o.startX&&a.translate>=a.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==i.target&&i.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&i.target===t.activeElement&&i.target.matches(s.focusableElements)){s.isMoved=!0,a.allowClick=!1;return}s.allowTouchCallbacks&&a.emit("touchMove",i),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=u,o.currentY=d;const p=o.currentX-o.startX,f=o.currentY-o.startY;if(a.params.threshold&&Math.sqrt(p**2+f**2)<a.params.threshold)return;if(typeof s.isScrolling>"u"){let I;a.isHorizontal()&&o.currentY===o.startY||a.isVertical()&&o.currentX===o.startX?s.isScrolling=!1:p*p+f*f>=25&&(I=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,s.isScrolling=a.isHorizontal()?I>n.touchAngle:90-I>n.touchAngle)}if(s.isScrolling&&a.emit("touchMoveOpposite",i),typeof s.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(s.startMoving=!0),s.isScrolling||i.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;a.allowClick=!1,!n.cssMode&&i.cancelable&&i.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&i.stopPropagation();let g=a.isHorizontal()?p:f,h=a.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;n.oneWayMovement&&(g=Math.abs(g)*(r?1:-1),h=Math.abs(h)*(r?1:-1)),o.diff=g,g*=n.touchRatio,r&&(g=-g,h=-h);const E=a.touchesDirection;a.swipeDirection=g>0?"prev":"next",a.touchesDirection=h>0?"prev":"next";const m=a.params.loop&&!n.cssMode,_=a.touchesDirection==="next"&&a.allowSlideNext||a.touchesDirection==="prev"&&a.allowSlidePrev;if(!s.isMoved){if(m&&_&&a.loopFix({direction:a.swipeDirection}),s.startTranslate=a.getTranslate(),a.setTransition(0),a.animating){const I=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});a.wrapperEl.dispatchEvent(I)}s.allowMomentumBounce=!1,n.grabCursor&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!0),a.emit("sliderFirstMove",i)}if(new Date().getTime(),n._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&E!==a.touchesDirection&&m&&_&&Math.abs(g)>=1){Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}a.emit("sliderMove",i),s.isMoved=!0,s.currentTranslate=g+s.startTranslate;let x=!0,k=n.resistanceRatio;if(n.touchReleaseOnEdges&&(k=0),g>0?(m&&_&&s.allowThresholdMove&&s.currentTranslate>(n.centeredSlides?a.minTranslate()-a.slidesSizesGrid[a.activeIndex+1]-(n.slidesPerView!=="auto"&&a.slides.length-n.slidesPerView>=2?a.slidesSizesGrid[a.activeIndex+1]+a.params.spaceBetween:0)-a.params.spaceBetween:a.minTranslate())&&a.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>a.minTranslate()&&(x=!1,n.resistance&&(s.currentTranslate=a.minTranslate()-1+(-a.minTranslate()+s.startTranslate+g)**k))):g<0&&(m&&_&&s.allowThresholdMove&&s.currentTranslate<(n.centeredSlides?a.maxTranslate()+a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween+(n.slidesPerView!=="auto"&&a.slides.length-n.slidesPerView>=2?a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween:0):a.maxTranslate())&&a.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:a.slides.length-(n.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),s.currentTranslate<a.maxTranslate()&&(x=!1,n.resistance&&(s.currentTranslate=a.maxTranslate()+1-(a.maxTranslate()-s.startTranslate-g)**k))),x&&(i.preventedByNestedSwiper=!0),!a.allowSlideNext&&a.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&a.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&!a.allowSlideNext&&(s.currentTranslate=s.startTranslate),n.threshold>0)if(Math.abs(g)>n.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,s.currentTranslate=s.startTranslate,o.diff=a.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{s.currentTranslate=s.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&a.freeMode||n.watchSlidesProgress)&&(a.updateActiveIndex(),a.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&a.freeMode&&a.freeMode.onTouchMove(),a.updateProgress(s.currentTranslate),a.setTranslate(s.currentTranslate))}function og(e){const t=this,a=t.touchEventsData;let s=e;s.originalEvent&&(s=s.originalEvent);let n;if(s.type==="touchend"||s.type==="touchcancel"){if(n=[...s.changedTouches].find(I=>I.identifier===a.touchId),!n||n.identifier!==a.touchId)return}else{if(a.touchId!==null||s.pointerId!==a.pointerId)return;n=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(t.browser.isSafari||t.browser.isWebView)))return;a.pointerId=null,a.touchId=null;const{params:r,touches:l,rtlTranslate:i,slidesGrid:c,enabled:u}=t;if(!u||!r.simulateTouch&&s.pointerType==="mouse")return;if(a.allowTouchCallbacks&&t.emit("touchEnd",s),a.allowTouchCallbacks=!1,!a.isTouched){a.isMoved&&r.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,a.startMoving=!1;return}r.grabCursor&&a.isMoved&&a.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=Zs(),p=d-a.touchStartTime;if(t.allowClick){const I=s.path||s.composedPath&&s.composedPath();t.updateClickedSlide(I&&I[0]||s.target,I),t.emit("tap click",s),p<300&&d-a.lastClickTime<300&&t.emit("doubleTap doubleClick",s)}if(a.lastClickTime=Zs(),ac(()=>{t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||l.diff===0&&!a.loopSwapReset||a.currentTranslate===a.startTranslate&&!a.loopSwapReset){a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;return}a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;let f;if(r.followFinger?f=i?t.translate:-t.translate:f=-a.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let h=0,E=t.slidesSizesGrid[0];for(let I=0;I<c.length;I+=I<r.slidesPerGroupSkip?1:r.slidesPerGroup){const R=I<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof c[I+R]<"u"?(g||f>=c[I]&&f<c[I+R])&&(h=I,E=c[I+R]-c[I]):(g||f>=c[I])&&(h=I,E=c[c.length-1]-c[c.length-2])}let m=null,_=null;r.rewind&&(t.isBeginning?_=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const x=(f-c[h])/E,k=h<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(p>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?m:h+k):t.slideTo(h)),t.swipeDirection==="prev"&&(x>1-r.longSwipesRatio?t.slideTo(h+k):_!==null&&x<0&&Math.abs(x)>r.longSwipesRatio?t.slideTo(_):t.slideTo(h))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(s.target===t.navigation.nextEl||s.target===t.navigation.prevEl)?s.target===t.navigation.nextEl?t.slideTo(h+k):t.slideTo(h):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:h+k),t.swipeDirection==="prev"&&t.slideTo(_!==null?_:h))}}function li(){const e=this,{params:t,el:a}=e;if(a&&a.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:n,snapGrid:o}=e,r=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=r&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!r?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=s,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function rg(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function ig(){const e=this,{wrapperEl:t,rtlTranslate:a,enabled:s}=e;if(!s)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const o=e.maxTranslate()-e.minTranslate();o===0?n=0:n=(e.translate-e.minTranslate())/o,n!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function lg(e){const t=this;Bs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function cg(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const cc=(e,t)=>{const a=Rt(),{params:s,el:n,wrapperEl:o,device:r}=e,l=!!s.nested,i=t==="on"?"addEventListener":"removeEventListener",c=t;!n||typeof n=="string"||(a[i]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),n[i]("touchstart",e.onTouchStart,{passive:!1}),n[i]("pointerdown",e.onTouchStart,{passive:!1}),a[i]("touchmove",e.onTouchMove,{passive:!1,capture:l}),a[i]("pointermove",e.onTouchMove,{passive:!1,capture:l}),a[i]("touchend",e.onTouchEnd,{passive:!0}),a[i]("pointerup",e.onTouchEnd,{passive:!0}),a[i]("pointercancel",e.onTouchEnd,{passive:!0}),a[i]("touchcancel",e.onTouchEnd,{passive:!0}),a[i]("pointerout",e.onTouchEnd,{passive:!0}),a[i]("pointerleave",e.onTouchEnd,{passive:!0}),a[i]("contextmenu",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&n[i]("click",e.onClick,!0),s.cssMode&&o[i]("scroll",e.onScroll),s.updateOnWindowResize?e[c](r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",li,!0):e[c]("observerUpdate",li,!0),n[i]("load",e.onLoad,{capture:!0}))};function dg(){const e=this,{params:t}=e;e.onTouchStart=sg.bind(e),e.onTouchMove=ng.bind(e),e.onTouchEnd=og.bind(e),e.onDocumentTouchStart=cg.bind(e),t.cssMode&&(e.onScroll=ig.bind(e)),e.onClick=rg.bind(e),e.onLoad=lg.bind(e),cc(e,"on")}function ug(){cc(this,"off")}var pg={attachEvents:dg,detachEvents:ug};const ci=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function fg(){const e=this,{realIndex:t,initialized:a,params:s,el:n}=e,o=s.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const r=Rt(),l=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",i=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?e.el:r.querySelector(s.breakpointsBase),c=e.getBreakpoint(o,l,i);if(!c||e.currentBreakpoint===c)return;const d=(c in o?o[c]:void 0)||e.originalParams,p=ci(e,s),f=ci(e,d),g=e.params.grabCursor,h=d.grabCursor,E=s.enabled;p&&!f?(n.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(n.classList.add(`${s.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&s.grid.fill==="column")&&n.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!h?e.unsetGrabCursor():!g&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(R=>{if(typeof d[R]>"u")return;const N=s[R]&&s[R].enabled,j=d[R]&&d[R].enabled;N&&!j&&e[R].disable(),!N&&j&&e[R].enable()});const m=d.direction&&d.direction!==s.direction,_=s.loop&&(d.slidesPerView!==s.slidesPerView||m),x=s.loop;m&&a&&e.changeDirection(),pt(e.params,d);const k=e.params.enabled,I=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),E&&!k?e.disable():!E&&k&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",d),a&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&I?(e.loopCreate(t),e.updateSlides()):x&&!I&&e.loopDestroy()),e.emit("breakpoint",d)}function hg(e,t="window",a){if(!e||t==="container"&&!a)return;let s=!1;const n=lt(),o=t==="window"?n.innerHeight:a.clientHeight,r=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const i=parseFloat(l.substr(1));return{value:o*i,point:l}}return{value:l,point:l}});r.sort((l,i)=>parseInt(l.value,10)-parseInt(i.value,10));for(let l=0;l<r.length;l+=1){const{point:i,value:c}=r[l];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(s=i):c<=a.clientWidth&&(s=i)}return s||"max"}var gg={setBreakpoint:fg,getBreakpoint:hg};function mg(e,t){const a=[];return e.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(n=>{s[n]&&a.push(t+n)}):typeof s=="string"&&a.push(t+s)}),a}function bg(){const e=this,{classNames:t,params:a,rtl:s,el:n,device:o}=e,r=mg(["initialized",a.direction,{"free-mode":e.params.freeMode&&a.freeMode.enabled},{autoheight:a.autoHeight},{rtl:s},{grid:a.grid&&a.grid.rows>1},{"grid-column":a.grid&&a.grid.rows>1&&a.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":a.cssMode},{centered:a.cssMode&&a.centeredSlides},{"watch-progress":a.watchSlidesProgress}],a.containerModifierClass);t.push(...r),n.classList.add(...t),e.emitContainerClasses()}function vg(){const e=this,{el:t,classNames:a}=e;!t||typeof t=="string"||(t.classList.remove(...a),e.emitContainerClasses())}var _g={addClasses:bg,removeClasses:vg};function yg(){const e=this,{isLocked:t,params:a}=e,{slidesOffsetBefore:s}=a;if(s){const n=e.slides.length-1,o=e.slidesGrid[n]+e.slidesSizesGrid[n]+s*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;a.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),a.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var wg={checkOverflow:yg},di={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function xg(e,t){return function(s={}){const n=Object.keys(s)[0],o=s[n];if(typeof o!="object"||o===null){pt(t,s);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in o)){pt(t,s);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),pt(t,s)}}const Kn={eventsEmitter:_h,update:Oh,translate:$h,transition:zh,slide:Kh,loop:Qh,grabCursor:tg,events:pg,breakpoints:gg,checkOverflow:wg,classes:_g},Wn={};class vt{constructor(...t){let a,s;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?s=t[0]:[a,s]=t,s||(s={}),s=pt({},s),a&&!s.el&&(s.el=a);const n=Rt();if(s.el&&typeof s.el=="string"&&n.querySelectorAll(s.el).length>1){const i=[];return n.querySelectorAll(s.el).forEach(c=>{const u=pt({},s,{el:c});i.push(new vt(u))}),i}const o=this;o.__swiper__=!0,o.support=oc(),o.device=rc({userAgent:s.userAgent}),o.browser=ic(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],s.modules&&Array.isArray(s.modules)&&s.modules.forEach(i=>{typeof i=="function"&&o.modules.indexOf(i)<0&&o.modules.push(i)});const r={};o.modules.forEach(i=>{i({params:s,swiper:o,extendParams:xg(s,r),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const l=pt({},di,r);return o.params=pt({},l,Wn,s),o.originalParams=pt({},o.params),o.passedParams=pt({},s),o.params&&o.params.on&&Object.keys(o.params.on).forEach(i=>{o.on(i,o.params.on[i])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:a,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:a,params:s}=this,n=Mt(a,`.${s.slideClass}, swiper-slide`),o=an(n[0]);return an(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(a=>a.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:a,params:s}=t;t.slides=Mt(a,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,a){const s=this;t=Math.min(Math.max(t,0),1);const n=s.minTranslate(),r=(s.maxTranslate()-n)*t+n;s.translateTo(r,typeof a>"u"?0:a),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",a.join(" "))}getSlideClasses(t){const a=this;return a.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(a.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=[];t.slides.forEach(s=>{const n=t.getSlideClasses(s);a.push({slideEl:s,classNames:n}),t.emit("_slideClass",s,n)}),t.emit("_slideClasses",a)}slidesPerViewDynamic(t="current",a=!1){const s=this,{params:n,slides:o,slidesGrid:r,slidesSizesGrid:l,size:i,activeIndex:c}=s;let u=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let d=o[c]?Math.ceil(o[c].swiperSlideSize):0,p;for(let f=c+1;f<o.length;f+=1)o[f]&&!p&&(d+=Math.ceil(o[f].swiperSlideSize),u+=1,d>i&&(p=!0));for(let f=c-1;f>=0;f-=1)o[f]&&!p&&(d+=o[f].swiperSlideSize,u+=1,d>i&&(p=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(a?r[d]+l[d]-r[c]<i:r[d]-r[c]<i)&&(u+=1);else for(let d=c-1;d>=0;d-=1)r[c]-r[d]<i&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:a,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete&&Bs(t,r)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const r=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(r,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)n(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const r=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(r.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||n()}s.watchOverflow&&a!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,a=!0){const s=this,n=s.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),s.emit("changeDirection"),a&&s.update()),s}changeLanguageDirection(t){const a=this;a.rtl&&t==="rtl"||!a.rtl&&t==="ltr"||(a.rtl=t==="rtl",a.rtlTranslate=a.params.direction==="horizontal"&&a.rtl,a.rtl?(a.el.classList.add(`${a.params.containerModifierClass}rtl`),a.el.dir="rtl"):(a.el.classList.remove(`${a.params.containerModifierClass}rtl`),a.el.dir="ltr"),a.update())}mount(t){const a=this;if(a.mounted)return!0;let s=t||a.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=a,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===a.params.swiperElementNodeName.toUpperCase()&&(a.isElement=!0);const n=()=>`.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(n()):Mt(s,n())[0];return!r&&a.params.createElements&&(r=tn("div",a.params.wrapperClass),s.append(r),Mt(s,`.${a.params.slideClass}`).forEach(l=>{r.append(l)})),Object.assign(a,{el:s,wrapperEl:r,slidesEl:a.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:r,hostEl:a.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||ra(s,"direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||ra(s,"direction")==="rtl"),wrongRTL:ra(r,"display")==="-webkit-box"}),!0}init(t){const a=this;if(a.initialized||a.mount(t)===!1)return a;a.emit("beforeInit"),a.params.breakpoints&&a.setBreakpoint(),a.addClasses(),a.updateSize(),a.updateSlides(),a.params.watchOverflow&&a.checkOverflow(),a.params.grabCursor&&a.enabled&&a.setGrabCursor(),a.params.loop&&a.virtual&&a.params.virtual.enabled?a.slideTo(a.params.initialSlide+a.virtual.slidesBefore,0,a.params.runCallbacksOnInit,!1,!0):a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,!1,!0),a.params.loop&&a.loopCreate(void 0,!0),a.attachEvents();const n=[...a.el.querySelectorAll('[loading="lazy"]')];return a.isElement&&n.push(...a.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(o=>{o.complete?Bs(a,o):o.addEventListener("load",r=>{Bs(a,r.target)})}),wo(a),a.initialized=!0,wo(a),a.emit("init"),a.emit("afterInit"),a}destroy(t=!0,a=!0){const s=this,{params:n,el:o,wrapperEl:r,slides:l}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),n.loop&&s.loopDestroy(),a&&(s.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),r&&r.removeAttribute("style"),l&&l.length&&l.forEach(i=>{i.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),i.removeAttribute("style"),i.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(i=>{s.off(i)}),t!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),rh(s)),s.destroyed=!0),null}static extendDefaults(t){pt(Wn,t)}static get extendedDefaults(){return Wn}static get defaults(){return di}static installModule(t){vt.prototype.__modules__||(vt.prototype.__modules__=[]);const a=vt.prototype.__modules__;typeof t=="function"&&a.indexOf(t)<0&&a.push(t)}static use(t){return Array.isArray(t)?(t.forEach(a=>vt.installModule(a)),vt):(vt.installModule(t),vt)}}Object.keys(Kn).forEach(e=>{Object.keys(Kn[e]).forEach(t=>{vt.prototype[t]=Kn[e][t]})});vt.use([bh,vh]);function Tg(e,t,a,s){return e.params.createElements&&Object.keys(s).forEach(n=>{if(!a[n]&&a.auto===!0){let o=Mt(e.el,`.${s[n]}`)[0];o||(o=tn("div",s[n]),o.className=s[n],e.el.append(o)),a[n]=o,t[n]=o}}),a}function Ka(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Sg({swiper:e,extendParams:t,on:a,emit:s}){const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let o,r=0;function l(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function i(m,_){const{bulletActiveClass:x}=e.params.pagination;m&&(m=m[`${_==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${x}-${_}`),m=m[`${_==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${x}-${_}-${_}`)))}function c(m,_,x){if(m=m%x,_=_%x,_===m+1)return"next";if(_===m-1)return"previous"}function u(m){const _=m.target.closest(Ka(e.params.pagination.bulletClass));if(!_)return;m.preventDefault();const x=an(_)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===x)return;const k=c(e.realIndex,x,e.slides.length);k==="next"?e.slideNext():k==="previous"?e.slidePrev():e.slideToLoop(x)}else e.slideTo(x)}function d(){const m=e.rtl,_=e.params.pagination;if(l())return;let x=e.pagination.el;x=Ft(x);let k,I;const R=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,N=e.params.loop?Math.ceil(R/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(I=e.previousRealIndex||0,k=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(k=e.snapIndex,I=e.previousSnapIndex):(I=e.previousIndex||0,k=e.activeIndex||0),_.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const j=e.pagination.bullets;let $,U,z;if(_.dynamicBullets&&(o=yo(j[0],e.isHorizontal()?"width":"height"),x.forEach(F=>{F.style[e.isHorizontal()?"width":"height"]=`${o*(_.dynamicMainBullets+4)}px`}),_.dynamicMainBullets>1&&I!==void 0&&(r+=k-(I||0),r>_.dynamicMainBullets-1?r=_.dynamicMainBullets-1:r<0&&(r=0)),$=Math.max(k-r,0),U=$+(Math.min(j.length,_.dynamicMainBullets)-1),z=(U+$)/2),j.forEach(F=>{const V=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(y=>`${_.bulletActiveClass}${y}`)].map(y=>typeof y=="string"&&y.includes(" ")?y.split(" "):y).flat();F.classList.remove(...V)}),x.length>1)j.forEach(F=>{const V=an(F);V===k?F.classList.add(..._.bulletActiveClass.split(" ")):e.isElement&&F.setAttribute("part","bullet"),_.dynamicBullets&&(V>=$&&V<=U&&F.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),V===$&&i(F,"prev"),V===U&&i(F,"next"))});else{const F=j[k];if(F&&F.classList.add(..._.bulletActiveClass.split(" ")),e.isElement&&j.forEach((V,y)=>{V.setAttribute("part",y===k?"bullet-active":"bullet")}),_.dynamicBullets){const V=j[$],y=j[U];for(let A=$;A<=U;A+=1)j[A]&&j[A].classList.add(...`${_.bulletActiveClass}-main`.split(" "));i(V,"prev"),i(y,"next")}}if(_.dynamicBullets){const F=Math.min(j.length,_.dynamicMainBullets+4),V=(o*F-o)/2-z*o,y=m?"right":"left";j.forEach(A=>{A.style[e.isHorizontal()?y:"top"]=`${V}px`})}}x.forEach((j,$)=>{if(_.type==="fraction"&&(j.querySelectorAll(Ka(_.currentClass)).forEach(U=>{U.textContent=_.formatFractionCurrent(k+1)}),j.querySelectorAll(Ka(_.totalClass)).forEach(U=>{U.textContent=_.formatFractionTotal(N)})),_.type==="progressbar"){let U;_.progressbarOpposite?U=e.isHorizontal()?"vertical":"horizontal":U=e.isHorizontal()?"horizontal":"vertical";const z=(k+1)/N;let F=1,V=1;U==="horizontal"?F=z:V=z,j.querySelectorAll(Ka(_.progressbarFillClass)).forEach(y=>{y.style.transform=`translate3d(0,0,0) scaleX(${F}) scaleY(${V})`,y.style.transitionDuration=`${e.params.speed}ms`})}_.type==="custom"&&_.renderCustom?(oi(j,_.renderCustom(e,k+1,N)),$===0&&s("paginationRender",j)):($===0&&s("paginationRender",j),s("paginationUpdate",j)),e.params.watchOverflow&&e.enabled&&j.classList[e.isLocked?"add":"remove"](_.lockClass)})}function p(){const m=e.params.pagination;if(l())return;const _=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let x=e.pagination.el;x=Ft(x);let k="";if(m.type==="bullets"){let I=e.params.loop?Math.ceil(_/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&I>_&&(I=_);for(let R=0;R<I;R+=1)m.renderBullet?k+=m.renderBullet.call(e,R,m.bulletClass):k+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?k=m.renderFraction.call(e,m.currentClass,m.totalClass):k=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?k=m.renderProgressbar.call(e,m.progressbarFillClass):k=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],x.forEach(I=>{m.type!=="custom"&&oi(I,k||""),m.type==="bullets"&&e.pagination.bullets.push(...I.querySelectorAll(Ka(m.bulletClass)))}),m.type!=="custom"&&s("paginationRender",x[0])}function f(){e.params.pagination=Tg(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let _;typeof m.el=="string"&&e.isElement&&(_=e.el.querySelector(m.el)),!_&&typeof m.el=="string"&&(_=[...document.querySelectorAll(m.el)]),_||(_=m.el),!(!_||_.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(_)&&_.length>1&&(_=[...e.el.querySelectorAll(m.el)],_.length>1&&(_=_.find(x=>nc(x,".swiper")[0]===e.el))),Array.isArray(_)&&_.length===1&&(_=_[0]),Object.assign(e.pagination,{el:_}),_=Ft(_),_.forEach(x=>{m.type==="bullets"&&m.clickable&&x.classList.add(...(m.clickableClass||"").split(" ")),x.classList.add(m.modifierClass+m.type),x.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(x.classList.add(`${m.modifierClass}${m.type}-dynamic`),r=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&x.classList.add(m.progressbarOppositeClass),m.clickable&&x.addEventListener("click",u),e.enabled||x.classList.add(m.lockClass)}))}function g(){const m=e.params.pagination;if(l())return;let _=e.pagination.el;_&&(_=Ft(_),_.forEach(x=>{x.classList.remove(m.hiddenClass),x.classList.remove(m.modifierClass+m.type),x.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(x.classList.remove(...(m.clickableClass||"").split(" ")),x.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(x=>x.classList.remove(...m.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:_}=e.pagination;_=Ft(_),_.forEach(x=>{x.classList.remove(m.horizontalClass,m.verticalClass),x.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),a("init",()=>{e.params.pagination.enabled===!1?E():(f(),p(),d())}),a("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),a("snapIndexChange",()=>{d()}),a("snapGridLengthChange",()=>{p(),d()}),a("destroy",()=>{g()}),a("enable disable",()=>{let{el:m}=e.pagination;m&&(m=Ft(m),m.forEach(_=>_.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),a("lock unlock",()=>{d()}),a("click",(m,_)=>{const x=_.target,k=Ft(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&k&&k.length>0&&!x.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&x===e.navigation.nextEl||e.navigation.prevEl&&x===e.navigation.prevEl))return;const I=k[0].classList.contains(e.params.pagination.hiddenClass);s(I===!0?"paginationShow":"paginationHide"),k.forEach(R=>R.classList.toggle(e.params.pagination.hiddenClass))}});const h=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=Ft(m),m.forEach(_=>_.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),d()},E=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=Ft(m),m.forEach(_=>_.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:h,disable:E,render:p,update:d,init:f,destroy:g})}function kg({swiper:e,extendParams:t,on:a,emit:s,params:n}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,r,l=n&&n.autoplay?n.autoplay.delay:3e3,i=n&&n.autoplay?n.autoplay.delay:3e3,c,u=new Date().getTime(),d,p,f,g,h,E;function m(D){!e||e.destroyed||!e.wrapperEl||D.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(E||D.detail&&D.detail.bySwiperTouchMove)&&$())}const _=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(i=c,d=!1);const D=e.autoplay.paused?c:u+i-new Date().getTime();e.autoplay.timeLeft=D,s("autoplayTimeLeft",D,D/l),r=requestAnimationFrame(()=>{_()})},x=()=>{let D;return e.virtual&&e.params.virtual.enabled?D=e.slides.find(q=>q.classList.contains("swiper-slide-active")):D=e.slides[e.activeIndex],D?parseInt(D.getAttribute("data-swiper-autoplay"),10):void 0},k=()=>{let D=e.params.autoplay.delay;const O=x();return!Number.isNaN(O)&&O>0&&(D=O),D},I=D=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(r),_();let O=D;typeof O>"u"&&(O=k(),l=O,i=O),c=O;const q=e.params.speed,X=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(q,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,q,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(q,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,q,!0,!0),s("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{I()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{X()},O)):requestAnimationFrame(()=>{X()}),O},R=()=>{u=new Date().getTime(),e.autoplay.running=!0,I(),s("autoplayStart")},N=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(r),s("autoplayStop")},j=(D,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),D||(h=!0);const q=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):$()};if(e.autoplay.paused=!0,O){q();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),q())},$=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),h?(h=!1,I(c)):I(),e.autoplay.paused=!1,s("autoplayResume"))},U=()=>{if(e.destroyed||!e.autoplay.running)return;const D=Rt();D.visibilityState==="hidden"&&(h=!0,j(!0)),D.visibilityState==="visible"&&$()},z=D=>{D.pointerType==="mouse"&&(h=!0,E=!0,!(e.animating||e.autoplay.paused)&&j(!0))},F=D=>{D.pointerType==="mouse"&&(E=!1,e.autoplay.paused&&$())},V=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",z),e.el.addEventListener("pointerleave",F))},y=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",z),e.el.removeEventListener("pointerleave",F))},A=()=>{Rt().addEventListener("visibilitychange",U)},S=()=>{Rt().removeEventListener("visibilitychange",U)};a("init",()=>{e.params.autoplay.enabled&&(V(),A(),R())}),a("destroy",()=>{y(),S(),e.autoplay.running&&N()}),a("_freeModeStaticRelease",()=>{(f||h)&&$()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?N():j(!0,!0)}),a("beforeTransitionStart",(D,O,q)=>{e.destroyed||!e.autoplay.running||(q||!e.params.autoplay.disableOnInteraction?j(!0,!0):N())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){N();return}p=!0,f=!1,h=!1,g=setTimeout(()=>{h=!0,f=!0,j(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&$(),f=!1,p=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=k(),l=k())}),Object.assign(e.autoplay,{start:R,stop:N,pause:j,resume:$})}const Eg={class:"home-layout"},Ag={class:"sticky-header-group"},Cg=["data-user-name"],Pg={class:"home-tabs",id:"home-tabs--id"},Og={class:"home-tab home-tab--lobby home-tab--active","data-home-tab":"lobby-active"},Lg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Mg={class:"home-tab home-tab--lobby","data-home-tab":"lobby-completed"},Dg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Rg={class:"home-tab home-tab--my home-tab--active","data-home-tab":"my-active"},Ig={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},$g={class:"home-tab home-tab--my","data-home-tab":"my-completed"},Ng={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Bg={class:"home-tab home-tab--private home-tab--active","data-home-tab":"private-all"},Fg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},zg={class:"home-tab home-tab--private","data-home-tab":"private-invites"},Hg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Ug={class:"create-cta-banner__content"},Gg={__name:"home_route",setup(e){const t=it(),a=Se();window.CoreBetSlip=ec;const s=()=>{t.push({name:"create_tournament_route"})};document.addEventListener("click",u=>{const d=u.target;if(d&&d.dataset?.promotionTopic){const p={timestamp:Date.now(),heroImg:d.dataset.promotionHeroImg||"",caption:d.dataset.promotionCaption||"",tagline:d.dataset.promotionTagline||"",toast:d.dataset.promotionToast||"",topic:d.dataset.promotionTopic||"",topicToken:d.dataset.promotionTopicToken||"",marquee:d.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",p),le.publish(a.hierTopics.PROMOTION__CLICK,JSON.stringify(p))}d&&d.dataset?.publishRouteHome&&(d.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(f=>{f.classList.toggle("dash-nav__btn--active",f===d)}),le.publish(d.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),d&&d.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const n=(u,d=!1,p="cards",f={})=>{const g=document.querySelector(".tournaments-grid");if(!g)return;g.innerHTML="",g.style.animation="none",g.offsetHeight,g.style.animation="panel-enter 0.3s ease-out both",g.classList.toggle("tournaments-grid--list",p==="list");const h=document.getElementById("app"),E=h?.getAttribute("data-sync-theme")||"dark",m=h?.getAttribute("data-sync-lang")||"en",_=h?.getAttribute("data-sync-motif")||"brand",x=(R="")=>String(R).replace(/\S+/g,N=>/[A-Z]/.test(N)&&N===N.toUpperCase()?N:N.charAt(0).toUpperCase()+N.slice(1).toLowerCase()),k=R=>{const N=document.createElement("bma-tournament-list-card");N.setAttribute("data-bma-tourn-guid",R.guid||""),N.setAttribute("data-bma-tourn-caption",R.caption||""),N.setAttribute("data-bma-tourn-tagline",R.tagline||""),N.setAttribute("data-bma-tourn-status",R.status||""),N.setAttribute("data-bma-tourn-class",R.status||""),N.setAttribute("data-bma-tourn-game-type",R.class||"DEFAULT_FORMAT"),N.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(R.sports_allowed)?JSON.stringify(R.sports_allowed):""),N.setAttribute("data-bma-tourn-entities",R.entities?JSON.stringify(R.entities):""),N.setAttribute("data-bma-tourn-entry_fee",R.entry_fee||"0"),N.setAttribute("data-bma-tourn-tournament_dollars",R.tournament_dollars||"0"),N.setAttribute("data-bma-tourn-matches",R.matches_expanded?.length||"0"),N.setAttribute("data-bma-tourn-tags",Array.isArray(R.tags)?JSON.stringify(R.tags):"[]"),N.setAttribute("data-bma-tourn-window_start_time",R.window_start_time||""),N.setAttribute("data-bma-tourn-window_end_time",R.window_end_time||""),N.setAttribute("data-sync-theme",E);try{const j=a.appSession?.session_user?.guid,$=(R.status||R.class)==="COMPLETED",U=R.entities?.guids||[],z=j&&U.includes(j);if($&&z&&typeof window.GameTypeLifeCycle?.forTournament=="function"){const F=window.GameTypeLifeCycle.forTournament(R);if(F&&typeof F.rankLeaderboard=="function"){const V=U.map(S=>{const D=Array.isArray(R.combined_betslips)?R.combined_betslips.filter(O=>O.entity_guid===S||O.user_guid===S||O.guid===S):[];return{guid:S,bets:D,tournament_dollars:R.tournament_dollars,timestamp:R.status_time}}),y=F.rankLeaderboard(V,R),A=y.findIndex(S=>S.guid===j);A>=0&&(N.setAttribute("data-user-rank",String(A+1)),N.setAttribute("data-user-total",String(y.length)))}}}catch{}return N},I=R=>{const N=document.createElement("article"),j=R.status||"DRAFT";N.className=`tournament-item tournament-status-${j.toLowerCase()}`;const $=document.createElement("bma-tournament-card");return $.setAttribute("data-bma-tourn-id",R.id||""),$.setAttribute("data-bma-tourn-guid",R.guid||""),$.setAttribute("data-bma-tourn-caption",R.caption||""),$.setAttribute("data-bma-tourn-tagline",R.tagline||""),$.setAttribute("data-bma-tourn-window_start_time",R.window_start_time||""),$.setAttribute("data-bma-tourn-window_end_time",R.window_end_time||""),$.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(R.sports_allowed)?JSON.stringify(R.sports_allowed):R.sports_allowed||""),$.setAttribute("data-bma-tourn-entities",R.entities?JSON.stringify(R.entities):""),$.setAttribute("data-bma-tourn-tournament_dollars",R.tournament_dollars||""),$.setAttribute("data-bma-tourn-prize_distro",Array.isArray(R.prize_distro)?JSON.stringify(R.prize_distro):R.prize_distro||""),$.setAttribute("data-bma-tourn-matches",Array.isArray(R.matches_guids)?JSON.stringify(R.matches_guids):R.matches_guids||""),$.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(R.matches_expanded)?JSON.stringify(R.matches_expanded):R.matches_expanded||""),$.setAttribute("data-bma-tourn-entry_fee",R.entry_fee||""),$.setAttribute("data-bma-tourn-rake",R.rake||""),$.setAttribute("data-bma-tourn-tags",Array.isArray(R.tags)?JSON.stringify(R.tags):R.tags||""),$.setAttribute("data-bma-tourn-comments",R.comments||""),$.setAttribute("data-bma-tourn-class",R.status||""),$.setAttribute("data-bma-tourn-game-type",R.class||"DEFAULT_FORMAT"),$.setAttribute("data-bma-tourn-status",R.status||""),$.setAttribute("data-sync-theme",E),$.setAttribute("data-sync-lang",m),$.setAttribute("data-sync-motif",_),$.setAttribute("data-n55-size","medium"),$.setAttribute("data-n55-enchanted-cta-ambient","none"),$.setAttribute("data-tourn-custom-css",""),$.setAttribute("data-tourn-trophy","0"),$.setAttribute("data-bma-tourn-focus",""),$.setAttribute("data-bma-tourn-wait","false"),N.appendChild($),N};if(d){u.forEach(N=>{if(N.type==="stats"){const te=document.createElement("div");te.className="tournament-category tournament-category--stats",te.innerHTML=N.html||"",g.appendChild(te);return}const j=document.createElement("div");j.className="tournament-category";const $=document.createElement("header");$.className="tournament-category-header";const U=document.createElement("div");if(U.className="category-title-line",N.tournaments){const te=document.createElement("span");te.className="category-count-pill";const ne=(()=>{const H=N.sportKey;if(!H||H==="all")return'<span class="category-count-pill__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg></span>';if(H==="multi")return'<span class="category-count-pill__icon"><bma-sport-icon sport="multi" data-sport-group="Multi"></bma-sport-icon></span>';const ee=qe.find(de=>de.key===H)?.group||"default";return`<span class="category-count-pill__icon"><bma-sport-icon sport="${H}" data-sport-group="${ee}"></bma-sport-icon></span>`})();te.classList.add("category-count-pill--with-icon"),te.innerHTML=`${ne}<span class="category-count-pill__num">${N.tournaments.length}</span>`,U.appendChild(te)}const z=document.createElement("h2");z.className="category-title",z.textContent=x(N.title),U.appendChild(z);const{tab:F="lobby",subStatus:V="all",sort:y="default",result:A="all",odds:S="all"}=f,O=N.title.toLowerCase().includes("completed"),q=!O&&F==="my",X=(te,ne,H)=>`<option value="${te}"${H?" selected":""}>${ne}</option>`;let W="";F==="lobby"?W=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${X("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${X("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${X("default","Starting TD$: Default",y==="default")}
              ${X("td_high","Starting TD$: High to Low",y==="td_high")}
              ${X("td_low","Starting TD$: Low to High",y==="td_low")}
            </select>
          `:F==="my"&&q?W=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${X("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${X("all","Status: All",V==="all")}
              ${X("active","Status: Active",V==="active")}
              ${X("upcoming","Status: Upcoming",V==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${X("all","Odds: All",S==="all")}
              ${X("available","Odds: Available",S==="available")}
              ${X("none","Odds: Not Available",S==="none")}
            </select>
          `:(F==="my"&&O||F==="completed")&&(W=`
            <select class="category-dropdown" data-filter-type="result">
              ${X("all","Result: All",A==="all")}
              ${X("trophy","Result: Won Trophy",A==="trophy")}
              ${X("no_trophy","Result: No Trophy",A==="no_trophy")}
            </select>
          `),$.appendChild(U);const oe=localStorage.getItem("bma_view_mode")||"cards",se=document.createElement("div");if(se.className="category-controls",W){const te=document.createElement("button");te.className="category-filter-toggle",te.setAttribute("aria-label","Toggle filters"),te.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filters <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>',se.appendChild(te)}const ae=document.createElement("span");if(ae.className="category-view-btns",ae.innerHTML=`
          <button class="category-view-btn${oe==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            <span>Card</span>
          </button>
          <button class="category-view-btn${oe==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            <span>List</span>
          </button>
        `,se.appendChild(ae),$.appendChild(se),W){const te=document.createElement("div");if(te.className="category-filter-row",te.style.display=window._bmaFilterRowOpen?"":"none",te.innerHTML=W,$.appendChild(te),window._bmaFilterRowOpen){const ne=$.querySelector(".category-filter-toggle");ne&&ne.classList.add("category-filter-toggle--open")}}if(j.appendChild($),g.appendChild(j),N.tournaments.length===0){const te=N.emptyMessage||"No tournaments available",H=Object.prototype.hasOwnProperty.call(N,"emptySubtext")?N.emptySubtext||"":"Check back later for new tournaments",Z=N.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',ee=document.createElement("div");ee.className="tournaments-empty",ee.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",ee.innerHTML=`
            ${Z}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${te}</p>
            ${H?`<p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${H}</p>`:""}
          `,j.appendChild(ee)}else{const te=document.createElement("div");if(te.className="card-rail",N.tournaments.forEach((ne,H)=>{const Z=p==="list"?k(ne):I(ne);Z.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",Z.style.animationDelay=`${Math.min(H*50,300)}ms`,te.appendChild(Z)}),j.appendChild(te),N.tournaments.length>1){const ne=document.createElement("div");ne.className="card-rail__dots";for(let H=0;H<N.tournaments.length;H++){const Z=document.createElement("span");Z.className=`card-rail__dot${H===0?" card-rail__dot--active":""}`,ne.appendChild(Z)}j.appendChild(ne)}if(N.tournaments.length>1){const ne=document.createElement("button");ne.className="card-rail__arrow card-rail__arrow--prev",ne.setAttribute("aria-label","Previous card"),ne.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',ne.style.opacity="0";const H=document.createElement("button");H.className="card-rail__arrow card-rail__arrow--next",H.setAttribute("aria-label","Next card"),H.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',j.appendChild(ne),j.appendChild(H);const Z=j.querySelector(".card-rail__dots");te.addEventListener("scroll",()=>{const ee=te.scrollLeft,de=te.firstElementChild?.offsetWidth||1,w=Math.round(ee/(de+12));Z&&Z.querySelectorAll(".card-rail__dot").forEach((v,C)=>{v.classList.toggle("card-rail__dot--active",C===w)}),ne.style.opacity=ee<=10?"0":"";const L=te.scrollWidth-te.clientWidth;H.style.opacity=ee>=L-10?"0":""},{passive:!0}),ne.addEventListener("click",()=>{const ee=te.firstElementChild?.offsetWidth||300;te.scrollBy({left:-(ee+12),behavior:"smooth"})}),H.addEventListener("click",()=>{const ee=te.firstElementChild?.offsetWidth||300;te.scrollBy({left:ee+12,behavior:"smooth"})})}}});const R=g.dataset.filterContext;if(R!=="lobby"&&R!=="private"&&g.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let N="No tournaments available",j="Check back later for new tournaments";R==="my"?(N="You haven't joined any tournaments yet",j="Head to the lobby to find tournaments"):R==="completed"&&(N="No completed tournaments yet",j="Tournaments will appear here once they finish");const $=document.createElement("div");$.className="tournaments-empty",$.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",$.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${N}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${j}</p>
        `,g.appendChild($)}}else u.forEach((R,N)=>{const j=p==="list"?k(R):I(R);j.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",j.style.animationDelay=`${Math.min(N*50,300)}ms`,g.appendChild(j)})},o=u=>{document.querySelectorAll("bma-tournament-card").forEach(p=>{p.setAttribute("data-sync-theme",u)})},r=u=>{const d=document.querySelectorAll("bma-tournament-card"),p=Date.now().toString();d.forEach(f=>{if(f===u){if(f.setAttribute("data-bma-tourn-focus",p),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="")}}else if(f.setAttribute("data-bma-tourn-focus",""),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="none")}}),typeof neodigmMarquee<"u"&&neodigmMarquee.init()},l=u=>{const{action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...h}=u.detail;console.log("[home_route] Tournament action:",{action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...h}),r(u.target),le.publish("WC.TOURN_ACTION",JSON.stringify({action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...h,timestamp:Date.now()}))};let i=null;const c=()=>{const u=document.getElementById("home-datetime--id");if(!u)return;const d=new Date,p=d.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),f=d.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});u.textContent=`${p} · ${f}`};return rt(async()=>{if(!a.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}c(),i=setInterval(c,24e3);const u=document.getElementById("app");if(u){const g=a.appCLIFeatures.features.theme?.state,h=a.appCLIFeatures.features.lang?.state,E=a.appCLIFeatures.features.motif?.state,m=a.appSession.session_user.guid;g&&(u.setAttribute("data-sync-theme",g),document.body.setAttribute("data-sync-theme",g)),h&&u.setAttribute("data-sync-lang",h),E&&u.setAttribute("data-sync-motif",E),m&&u.setAttribute("data-user-guid",m)}window._homeRouteRenderCards=n;const d=le.subscribe("APP.ROUTE_SYNC",(g,h)=>{try{const E=JSON.parse(h);E.theme&&o(E.theme.state)}catch(E){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",E)}});if(window._homeRoutePubSubToken=d,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),le.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",l),window._pendingTournGuid){const g=window._pendingTournGuid;delete window._pendingTournGuid,setTimeout(()=>{le.publish("WC.TOURN_ACTION",JSON.stringify({action:"PLAY",tournamentGuid:g,timestamp:Date.now()}))},800)}const p=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,f=new vt(".featured-swiper",{modules:[kg,Sg],slidesPerView:1,spaceBetween:16,loop:p>1,initialSlide:0,centeredSlides:p>1,autoplay:p>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:p>1?1.7:1,spaceBetween:10,centeredSlides:p>1},640:{slidesPerView:Math.min(2,p),spaceBetween:16,centeredSlides:!1},1024:{slidesPerView:Math.min(3,p),spaceBetween:20,centeredSlides:!1},1280:{slidesPerView:Math.min(3,p),spaceBetween:24,centeredSlides:!1}}});window.featuredSwiper=f,le.publish(a.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Xt(()=>{i&&clearInterval(i),document.removeEventListener("bma-tournament-action",l),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&le.unsubscribe(window._homeRoutePubSubToken)}),(u,d)=>(fe(),he("main",Eg,[b("div",Ag,[b("bma-app-head-top",{"data-user-name":ct(a).appSession.session_user.name||"Guest"},null,8,Cg),d[0]||(d[0]=b("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),d[19]||(d[19]=dt('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div><div class="home-datetime" id="home-datetime--id" aria-hidden="true">—</div><bma-scores-banner id="bma-scores-banner--id"></bma-scores-banner></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports>',2)),b("nav",Pg,[b("button",Og,[(fe(),he("svg",Lg,[...d[1]||(d[1]=[b("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[2]||(d[2]=Be(" Active ",-1))]),b("button",Mg,[(fe(),he("svg",Dg,[...d[3]||(d[3]=[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),d[4]||(d[4]=Be(" Completed ",-1))]),b("button",Rg,[(fe(),he("svg",Ig,[...d[5]||(d[5]=[b("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[6]||(d[6]=Be(" Active ",-1)),d[7]||(d[7]=b("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{visibility:"hidden"}},"0",-1))]),b("button",$g,[(fe(),he("svg",Ng,[...d[8]||(d[8]=[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),d[9]||(d[9]=Be(" Completed ",-1))]),b("button",Bg,[(fe(),he("svg",Fg,[...d[10]||(d[10]=[b("path",{d:"M7 4V2h10v2h5v3c0 2.76-2.24 5-5 5h-.58c-.59 1.85-2.17 3.31-4.42 3.79V19h4v2H8v-2h4v-3.21C9.75 15.31 8.17 13.85 7.58 12H7c-2.76 0-5-2.24-5-5V4h5zm0 2H4v1c0 1.3.84 2.4 2 2.82V6zm10 3.82C18.16 9.4 19 8.3 19 7V6h-3v3.82z"},null,-1)])])),d[11]||(d[11]=Be(" Bet Max Pools ",-1)),d[12]||(d[12]=b("span",{class:"home-tab__badge",id:"home-tab-private-badge"},"0",-1))]),b("button",zg,[(fe(),he("svg",Hg,[...d[13]||(d[13]=[b("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"},null,-1)])])),d[14]||(d[14]=Be(" Invites ",-1)),d[15]||(d[15]=b("span",{class:"home-tab__badge home-tab__badge--soft",id:"home-tab-invites-badge"},"0",-1))])]),b("section",{class:"create-cta-banner",onClick:s},[d[18]||(d[18]=b("div",{class:"create-cta-banner__glow","aria-hidden":"true"},null,-1)),b("div",Ug,[d[17]||(d[17]=dt('<div class="create-cta-banner__text"><span class="create-cta-banner__eyebrow" aria-label="Tournament perks"><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--1">Select Your Sports</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--2">Choose Your Game Mode</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--3">Invite Your Friends</span><span class="create-cta-banner__eyebrow-progress" aria-hidden="true"></span></span><span class="create-cta-banner__title">Start Your Own Bet Max Pool!</span><span class="create-cta-banner__sub">Your contest, your rules, your friends. Start a Bet Max Pool for Free.</span></div><div class="create-cta-banner__trophies" aria-hidden="true"><span class="create-cta-banner__trophy create-cta-banner__trophy--silver"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--gold"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--bronze"></span></div>',2)),b("button",{class:"create-cta-banner__btn",type:"button",onClick:Ea(s,["stop"])},[...d[16]||(d[16]=[b("span",null,"Create",-1),b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"9 18 15 12 9 6"})],-1)])])])]),d[20]||(d[20]=dt('<section class="tournaments-section"><div class="tournaments-grid"></div></section><section class="invites-section"><div class="invites-list" id="invites-list"></div><div class="invites-empty" id="invites-empty" hidden><svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><p class="invites-empty__head">No pending invites</p><p class="invites-empty__sub">When a friend invites you to a Bet Max Pool, it&#39;ll show up here.</p></div></section><bma-app-foot-branded></bma-app-foot-branded>',3))]))}},jg={};function Vg(e,t){return fe(),he("main",null,[...t[0]||(t[0]=[b("h1",null,"App FAQ",-1)])])}const Ps=fa(jg,[["render",Vg]]),qg={};function Yg(e,t){return fe(),he("main",null,[...t[0]||(t[0]=[b("h1",null,"App Help",-1)])])}const Kg=fa(qg,[["render",Yg]]);let ms={baseUrl:"/m5t/v5",getToken:()=>null,debug:!1};function Wg(e={}){ms={...ms,...e}}function Jg(){const e=ms.baseUrl;if(typeof e=="function")try{return e()||"/m5t/v5"}catch{return"/m5t/v5"}return e}async function dc(e,t={},a="CLIENT"){const s={caption:e,content:t,status:a};if(ms.debug)try{console.log("[clientMeter]",e,a,t)}catch{}const n=`${Jg()}/appMeter/client-event`,o=ms.getToken?.(),r={"Content-Type":"application/json"};o&&(r.Authorization=`Bearer ${o}`);try{if(typeof fetch=="function"){const l=await fetch(n,{method:"POST",headers:r,body:JSON.stringify(s),keepalive:!0});if(l.ok||l.status===202)return}}catch{}try{if(typeof navigator<"u"&&typeof navigator.sendBeacon=="function"){const l=new Blob([JSON.stringify(s)],{type:"application/json"});if(navigator.sendBeacon(n,l))return}}catch{}try{console.warn("[clientMeter] fell through to console:",e,t)}catch{}}async function Xg(e,t,a){}const Qg=Object.freeze(Object.defineProperty({__proto__:null,clientMeter:dc,configureClientMeter:Wg,noopClientMeter:Xg},Symbol.toStringTag,{value:"Module"})),Ut=class Ut{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,a,s,n=!0){this.strChat=s,this.isDebug=n;const o=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",a).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const r=t.includes("?")?"&":"?";t=`${t}${r}sessionId=${o}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(l){Ut.onSSEOpen(l)},this.sseEvent.onmessage=function(l){Ut.onSSEMessage(l)},this.sseEvent.onerror=function(l){Ut.onSSEError(l)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let a=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(a=JSON.parse(t.data),a?.class!="NO_MESSAGE")if(a?.class&&a?.msg)switch(a.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":a?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(a.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",a.id+" | "+a.class+" | "+a.msg+" | "+a.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",a),le.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(a));break;case"INVITE_SYNC":this.isDebug&&console.warn(" ~... sse INVITE_SYNC | ",a),le.publish("SSE.CORE.INVITE_SYNC",JSON.stringify(a));try{let s=a?.msg;typeof s=="string"&&(s=JSON.parse(s));const n=Array.isArray(s)?s[0]:null;dc("invite_sync_received",{invite_guid:n?.invite?.guid||null,tournament_guid:n?.invite?.tournament_guid||null,action:n?.action||null,sse_id:a?.id||null})}catch{}break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Ut.sseEvent=null,Ut.strChat=null,Ut.isDebug=!0,Ut.sessionId=null;let sn=Ut;class Wt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(a){return Math.floor(Math.random()*a)},fPromiseJS:async function(a,s){return new Promise((n,o)=>{const r=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});r.onload=n,r.onerror=o,a.getElementsByTagName("head")[0].appendChild(r)})},fAsyncJS:function(a,s,n){const o=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});n&&(o.onload=function(){n()}),a.getElementsByTagName("head")[0].appendChild(o)},fAsyncCSS:function(a,s){let n=a.createElement("link");n.rel="stylesheet",n.href=s,a.getElementsByTagName("head")[0].appendChild(n)},data2prop:function(a){a=a.replace("data-","").toLowerCase();let s=a.split(""),n=[],o=!1;return s.forEach(r=>{r=="-"?o=!0:(n.push(o?r.toUpperCase():r),o=!1)}),n.join("")},doDataLayer:function(a,s){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+a+" | "+s),window.dataLayer&&window.dataLayer.push({event:a,msg:s})},isJSON:function(a){let s=!1;try{s=typeof JSON.parse(a)}catch{}return s=="object"},appStateListen:function(a){NeodigmKeylime.subscribe("mouseover",n=>{n?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(n.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let o=neodigmUtils.walkDOM3(n?.target,"n55TypeonClick");o&&neodigmUtils.typeOn(JSON.parse(o))},!0),NeodigmKeylime.subscribe("touchstart",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let s=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;s&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=s)},prettyTimeRETIRE:a=>{let s=new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return a=="Dec 31, 1969"&&(s=""),s},prettyTime:a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:a=>a&&a[0].toUpperCase()+a.slice(1)||"",genHash:a=>(a=String(a),Math.abs(a.split("").reduce((s,n)=>(s<<5)-s+n.charCodeAt(0)|0,0))),flashTitle:(a=neodigmOpt.N55_THEME_DEFAULT,s=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[a]&&(document.title=neodigmOpt.N55_THEME_COLORS[a][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},s))},robinTheme:function(a=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const n=56;s.forEach((r,l)=>{r.dataset.n55Theme!="disabled"&&(r.n55Theme||(r.n55Theme=r.dataset.n55Theme),setTimeout(function(){r.dataset.n55Theme=a},l*n),setTimeout(function(){r.dataset.n55Theme=r.n55Theme},l*(n+n)))}),s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const o=256;s.forEach((r,l)=>{r.n55ThemePulse||(r.n55ThemePulse=r.dataset.n55ThemePulse),setTimeout(function(){r.dataset.n55ThemePulse=a},l*o),setTimeout(function(){r.dataset.n55ThemePulse=r.n55ThemePulse},l*o+3e3)}),neodigmUtils.flashTitle(a,2e3)}},countTo:async function(a,s,n=neodigmOpt.neodigmMetronome.countTo){const o=[16,n];return[...document.querySelectorAll(a)].forEach(function(r,l){let i=Math.abs(Number(r.textContent)-s);neodigmMetronome.unsubscribe(o[1]+l).subscribe(function(c){let u=Number(r.textContent);if(!Number.isNaN(u)&&!isNaN(u)&&s!=u){let d=i/o[0];d=Math.round(d),c!=0?r.textContent=u<s?u+d:u-d:r.textContent=s}},o[1]+l,o[0])}),neodigmUtils},typeOff:async function(a){let s=document.querySelector(a?.q1st);if(s){let n=s.textContent.length,o=window.getComputedStyle(s),r=Number(o.paddingTop.replace("px",""))+Number(o.paddingBottom.replace("px",""));for(s.offsetHeight&&(s.style.height=s.offsetHeight-r+"px");n;)setTimeout(()=>{s.textContent=s.textContent.replace(/.$/,"")},a.uniqueDelay*n--)}},typeOn:async function(a){let s=document.querySelector(a?.q1st);if(s){s.dataset.n55Typeon=0;let n=a.msg.replaceAll("|","   |   ")+"   ",o=n.split("|");if(a?.mode=="OFF")return neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay}),neodigmUtils;if(a?.mode=="RANDOM"&&o.length){let r=s.dataset.n55Typeon=neodigmUtils.f02x(o.length);n=o[r]}neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),neodigmMetronome.unsubscribe(a.uniqueDelay).subscribe(r=>{let l=n[n.length-(r+1)];l=="|"&&(l="",neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),s.dataset.n55Typeon++),s.textContent+=l,a?.mode=="LOOP"&&r==0&&neodigmUtils.typeOn(a)},a.uniqueDelay,n.length)}return neodigmUtils},getValJSON:function(a,s){try{return JSON.parse(a)}catch{return JSON.parse('{ "'+s+'": "'+a+'" }')}},walkDOM3:function(a,s,n=!1){let o=null;if(!o&&a?.dataset[s]&&(o=a),!o&&a?.parentNode?.dataset[s]&&(o=a.parentNode),!o&&a.tagName!="BODY"&&a?.parentNode?.parentNode?.dataset[s]&&(o=a.parentNode.parentNode),o)return n?o:o.dataset[s]},doSetT:function(a,s){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(a,s):setTimeout(a,s)},shake:function(a,s=!0){return[...document.querySelectorAll(a)].forEach(function(n,o){n.classList.add("shake__an"),setTimeout(function(){n.classList.remove("shake__an")},460)}),Wt.neodigmUtils},hardReload:function(a="n55reset"){const s=new URLSearchParams(window.location.search);s.set(a,new Date().getTime());const n=s.toString();window.location.search=n}}))}const Zg={class:"auth-page"},em={class:"auth-page-right"},tm={class:"auth-card"},am={class:"form-group"},sm={class:"form-group"},nm={class:"password-input-wrapper"},om=["type"],rm={style:{"text-align":"right"}},im={class:"auth-link-center"},lm={__name:"signin_route",setup(e){const t=it(),a=Se(),s=(p="signin")=>{t.push({name:p})};let n=null;const o=Ce(!1),r=()=>{o.value=!o.value},l=(p=3,f=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const g=Math.floor(Math.random()*p)+f,h=document.querySelector(".img__bg")?.classList;h&&(h.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),h.add(`img__bg--${g}`)),n||(n=le.subscribe("APP__ROUTE_SYNC",(E,m)=>{const _=JSON.parse(m);switch(Object.keys(_)[0]){case"Motif":l();break;case"Lang":i();break}}))},i=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(h=>h.code==f)[0]?.copy;g=g.filter(h=>h[0]==p.dataset.syncMicrocopyText)[0],g&&(p.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(h=>h.code==f)[0]?.copy;g=g.filter(h=>h[0]==p.dataset.syncMicrocopyPlaceholder)[0],g&&(p.placeholder=g[1])})},c=p=>{Wt.neodigmUtils().shake(p||"#inp__text--email")},u=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),a.doCLI(p)},d=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let g=null,h=null;if(!p?.value)g="Please enter your email",h="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)g="Please enter a valid email address",h="#inp__text--email";else if(!f?.value)g="Please enter your password",h="#inp__text--password";else if(f.value.length<10)g="Password must be at least 10 characters",h="#inp__text--password";else{const E={email:p.value,hash:Wt.neodigmUtils().genHash(f.value)};xe.doSignin(E,m=>{const k=(m?.entity?.tags||[]).find(R=>R.userName)?.userName||"";if(a.appSession.session_user.authenticated=!0,a.appSession.session_user.email=E.email,a.appSession.session_user.fname=m?.entity?.first,a.appSession.session_user.lname=m?.entity?.last,a.appSession.session_user.userName=k,a.appSession.session_user.name=k,a.appSession.session_user.guid=m?.entity?.guid,a.saveSessionUser(),a.appCLIFeatures.features.sse.state){const R=m?.entity?.guid||a.appSession.session_user.guid;sn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",R,a,!0)}xe.fetchMyInvites().then(R=>{R.ok&&Array.isArray(R.data?.invites)&&(a.setCoreInvites(R.data.invites),le.publish(a.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"signin",count:R.data.invites.length,timestamp:Date.now()})))}).catch(R=>console.warn("[signin] fetchMyInvites failed:",R));const I=Gf();if(I?.tournamentGuid){const R={name:"preview_route",params:{guid:I.tournamentGuid}};I.joinSlug&&(R.query={s:I.joinSlug}),t.push(R)}})}g&&(c(h),neodigmToast.q(g,"danger"))};return rt(()=>{l(),i()}),(p,f)=>(fe(),he("div",Zg,[f[10]||(f[10]=dt('<div class="auth-page-left" data-v-f41beb02><div class="auth-bg" data-v-f41beb02><div class="auth-bg-image" data-v-f41beb02></div><div class="auth-bg-image" data-v-f41beb02></div><div class="auth-bg-image" data-v-f41beb02></div></div><div class="auth-overlay" data-v-f41beb02></div><div class="auth-branding-content" data-v-f41beb02><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-f41beb02><p class="auth-branding-tagline" data-v-f41beb02>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f41beb02>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f41beb02> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",em,[b("div",tm,[f[9]||(f[9]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),b("form",{class:"auth-form",onSubmit:Ea(d,["prevent"])},[b("div",am,[f[4]||(f[4]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=g=>u())},null,32)]),b("div",sm,[f[5]||(f[5]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",nm,[b("input",{id:"inp__text--password",type:o.value?"text":"password",autocomplete:"current-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,om),b("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=g=>r()),tabindex:"-1"},[b("span",{class:Ve(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",rm,[b("a",{class:"auth-link",onClick:f[2]||(f[2]=g=>s("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),b("p",im,[f[6]||(f[6]=b("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Be()),b("a",{class:"auth-link",onClick:f[3]||(f[3]=g=>s("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},cm=fa(lm,[["__scopeId","data-v-f41beb02"]]),dm={class:"auth-page"},um={__name:"signout_route",setup(e){const t=it();Se();const a=()=>{mvvLegit.doSignout()},s=()=>{t.push({name:"home_route"})};return(n,o)=>(fe(),he("div",dm,[o[1]||(o[1]=dt('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",{class:"auth-page-right"},[b("div",{class:"auth-card"},[o[0]||(o[0]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title"},"Sign Out"),b("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),b("div",{class:"auth-actions"},[b("button",{onClick:a,class:"btn btn-red"}," Sign Out "),b("button",{onClick:s,class:"btn btn-outline"}," Cancel ")])])])]))}},pm=fa(um,[["__scopeId","data-v-15bfefd6"]]),fm={class:"auth-page"},hm={class:"auth-page-right"},gm={class:"auth-card auth-card-wide"},mm={class:"form-row"},bm={class:"form-group"},vm={class:"form-group"},_m={class:"form-group"},ym={class:"form-group"},wm={class:"form-group"},xm={class:"password-input-wrapper"},Tm=["type"],Sm={class:"form-group"},km={class:"password-input-wrapper"},Em=["type"],Am={class:"form-group form-group-checkbox"},Cm={class:"checkbox-label"},Pm={class:"auth-link-center"},Om={__name:"signup_route",setup(e){const t=it(),a=Se(),s=(x="signin")=>{t.push({name:x})};let n=null,o=null;const r=Ce(!1),l=Ce(!1),i=Ce(!1),c=()=>{r.value=!r.value},u=()=>{l.value=!l.value},d=x=>{x.preventDefault(),le.publish(a.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(x=3,k=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":x=3,k=1;break;case"white_label":x=3,k=4;break}const I=Math.floor(Math.random()*x)+k,R=document.querySelector(".img__bg")?.classList;R&&(R.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),R.add(`img__bg--${I}`)),n||(n=le.subscribe("APP__ROUTE_SYNC",(N,j)=>{const $=JSON.parse(j);switch(Object.keys($)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(x=>{const k=a.appCLIFeatures?.features?.lang?.state;let I=a.appMeta.microcopy.language.filter(R=>R.code==k)[0]?.copy;I=I.filter(R=>R[0]==x.dataset.syncMicrocopyText)[0],I&&(x.textContent=I[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(x=>{const k=a.appCLIFeatures?.features?.lang?.state;let I=a.appMeta.microcopy.language.filter(R=>R.code==k)[0]?.copy;I=I.filter(R=>R[0]==x.dataset.syncMicrocopyPlaceholder)[0],I&&(x.placeholder=I[1])})},g=x=>{Wt.neodigmUtils().shake(x||"#inp__text--email")},h=()=>{let x=document.querySelectorAll("#inp__text--email")[0].value;a.doCLI(x)},E=x=>{const k=[];return x.length<10&&k.push("at least 10 characters"),/[a-z]/.test(x)||k.push("1 lowercase"),/[A-Z]/.test(x)||k.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(x)||k.push("1 special character"),/[^\x00-\x7F]/.test(x)&&k.push("ASCII characters only"),k},m=async()=>{const x=document.querySelector("#inp__text--username"),k=x?.value?.trim();if(k)try{(await xe.checkUserName(k)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),x.value="",x.focus())}catch(I){console.error("Error checking username:",I)}},_=()=>{const x=document.querySelector("#inp__text--first-name"),k=document.querySelector("#inp__text--last-name"),I=document.querySelector("#inp__text--email"),R=document.querySelector("#inp__text--username"),N=document.querySelector("#inp__text--password"),j=document.querySelector("#inp__text--verify-password");let $=null,U=null;if(!x?.value)$="Please enter your first name",U="#inp__text--first-name";else if(!k?.value)$="Please enter your last name",U="#inp__text--last-name";else if(!I?.value)$="Please enter your email",U="#inp__text--email";else if(I.value.indexOf("@")===-1||I.value.indexOf(".")===-1)$="Please enter a valid email address",U="#inp__text--email";else if(!R?.value)$="Please enter a user name",U="#inp__text--username";else if(!N?.value)$="Please enter a password",U="#inp__text--password";else{const z=E(N.value);if(z.length>0)$="Password must have:|"+z.join(", "),U="#inp__text--password";else if(!j?.value)$="Please verify your password",U="#inp__text--verify-password";else if(N.value!==j.value)$="Passwords do not match",U="#inp__text--verify-password";else{const F=x.value.trim(),V=k.value.trim(),y=[{userName:R.value.trim(),ts:Date.now()}],A={email:I.value,hash:Wt.neodigmUtils().genHash(N.value),first:F,last:V,company:"",phone:"",tags:y};xe.doSignup(A,S=>{S.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}$&&(g(U),neodigmToast.q($,"danger"))};return rt(()=>{p(),f(),o||(o=le.subscribe(a.hierTopics.ROUTE__SIGNUP__TERMS,(x,k)=>{JSON.parse(k).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),i.value=!0)}))}),(x,k)=>(fe(),he("div",fm,[k[23]||(k[23]=dt('<div class="auth-page-left" data-v-e1a086be><div class="auth-bg" data-v-e1a086be><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div></div><div class="auth-overlay" data-v-e1a086be></div><div class="auth-branding-content" data-v-e1a086be><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-e1a086be><p class="auth-branding-tagline" data-v-e1a086be>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-e1a086be>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-e1a086be> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",hm,[b("div",gm,[b("form",{class:"auth-form",onSubmit:Ea(_,["prevent"])},[b("div",mm,[b("div",bm,[k[12]||(k[12]=b("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),b("input",{id:"inp__text--first-name",type:"text",autocomplete:"given-name","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"First name",onKeyup:k[0]||(k[0]=jt(I=>_(),["enter"]))},null,32)]),b("div",vm,[k[13]||(k[13]=b("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),b("input",{id:"inp__text--last-name",type:"text",autocomplete:"family-name","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Last name",onKeyup:k[1]||(k[1]=jt(I=>_(),["enter"]))},null,32)])]),b("div",_m,[k[14]||(k[14]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:k[2]||(k[2]=I=>h()),onKeyup:k[3]||(k[3]=jt(I=>_(),["enter"]))},null,32)]),b("div",ym,[k[15]||(k[15]=b("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),b("input",{id:"inp__text--username",type:"text",autocomplete:"username","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:k[4]||(k[4]=I=>m()),onKeyup:k[5]||(k[5]=jt(I=>_(),["enter"]))},null,32)]),b("div",wm,[k[16]||(k[16]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",xm,[b("input",{id:"inp__text--password",type:r.value?"text":"password",autocomplete:"new-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:k[6]||(k[6]=jt(I=>_(),["enter"]))},null,40,Tm),b("button",{type:"button",class:"password-toggle-btn",onClick:k[7]||(k[7]=I=>c()),tabindex:"-1"},[b("span",{class:Ve(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),k[17]||(k[17]=b("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),b("div",Sm,[k[18]||(k[18]=b("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),b("div",km,[b("input",{id:"inp__text--verify-password",type:l.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:k[8]||(k[8]=jt(I=>_(),["enter"]))},null,40,Em),b("button",{type:"button",class:"password-toggle-btn",onClick:k[9]||(k[9]=I=>u()),tabindex:"-1"},[b("span",{class:Ve(l.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",Am,[b("label",Cm,[Lt(b("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":k[10]||(k[10]=I=>i.value=I),class:"terms-checkbox"},null,512),[[Ol,i.value]]),k[19]||(k[19]=b("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),b("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:d},"Terms")])]),k[22]||(k[22]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),b("p",Pm,[k[20]||(k[20]=b("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),k[21]||(k[21]=Be()),b("a",{class:"auth-link",onClick:k[11]||(k[11]=I=>s("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},Lm=fa(Om,[["__scopeId","data-v-e1a086be"]]),Mm={class:"auth-page"},Dm={class:"auth-page-right"},Rm={class:"auth-card"},Im={class:"form-group"},$m={class:"auth-link-center"},Nm={__name:"forgot_route",setup(e){const t=it(),a=Se(),s=(c="signin_route")=>{t.push({name:c})};let n=null;const o=(c=3,u=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":c=3,u=1;break;case"white_label":c=3,u=4;break}const d=Math.floor(Math.random()*c)+u,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${d}`)),n||(n=le.subscribe("APP__ROUTE_SYNC",(f,g)=>{const h=JSON.parse(g);switch(Object.keys(h)[0]){case"Motif":o();break;case"Lang":r();break}}))},r=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const u=a.appCLIFeatures?.features?.lang?.state;let d=a.appMeta.microcopy.language.filter(p=>p.code==u)[0]?.copy;d=d.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],d&&(c.textContent=d[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const u=a.appCLIFeatures?.features?.lang?.state;let d=a.appMeta.microcopy.language.filter(p=>p.code==u)[0]?.copy;d=d.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],d&&(c.placeholder=d[1])})},l=c=>{Wt.neodigmUtils().shake(c||"#inp__text--email")},i=()=>{const c=document.querySelector("#inp__text--email");let u=null,d=null;if(!c?.value)u="Please enter your email address",d="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)u="Please enter a valid email address",d="#inp__text--email";else{const p={method:"GET",headers:xe.genHeaders()};fetch(xe.API_baseURI+"/m5t/"+xe.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{s("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}u&&(l(d),neodigmToast.q(u,"danger"))};return rt(()=>{o(),r()}),(c,u)=>(fe(),he("div",Mm,[u[7]||(u[7]=dt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",Dm,[b("div",Rm,[u[6]||(u[6]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),b("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),b("form",{class:"auth-form",onSubmit:Ea(i,["prevent"])},[b("div",Im,[u[2]||(u[2]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:u[0]||(u[0]=jt(d=>i(),["enter"]))},null,32)]),u[5]||(u[5]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),b("p",$m,[u[3]||(u[3]=b("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),u[4]||(u[4]=Be()),b("a",{class:"auth-link",onClick:u[1]||(u[1]=d=>s("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Bm={class:"auth-page"},Fm={class:"auth-page-right"},zm={class:"auth-card"},Hm={class:"form-group"},Um={class:"password-input-wrapper"},Gm=["type"],jm={class:"form-group"},Vm={class:"password-input-wrapper"},qm=["type"],Ym={__name:"resethash_route",setup(e){const t=it(),a=Se(),s=()=>{t.push({name:"home_route"})};let n=null;const o=Ce(!1),r=Ce(!1),l=()=>{o.value=!o.value},i=()=>{r.value=!r.value},c=(g=3,h=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":g=3,h=1;break;case"white_label":g=3,h=4;break}const E=Math.floor(Math.random()*g)+h,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${E}`)),n||(n=le.subscribe("APP__ROUTE_SYNC",(_,x)=>{const k=JSON.parse(x);switch(Object.keys(k)[0]){case"Motif":c();break;case"Lang":u();break}}))},u=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const h=a.appCLIFeatures?.features?.lang?.state;let E=a.appMeta.microcopy.language.filter(m=>m.code==h)[0]?.copy;E=E.filter(m=>m[0]==g.dataset.syncMicrocopyText)[0],E&&(g.textContent=E[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const h=a.appCLIFeatures?.features?.lang?.state;let E=a.appMeta.microcopy.language.filter(m=>m.code==h)[0]?.copy;E=E.filter(m=>m[0]==g.dataset.syncMicrocopyPlaceholder)[0],E&&(g.placeholder=E[1])})},d=g=>{Wt.neodigmUtils().shake(g||"#inp__text--password")},p=g=>{const h=[];return g.length<10&&h.push("at least 10 characters"),/[a-z]/.test(g)||h.push("1 lowercase"),/[A-Z]/.test(g)||h.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||h.push("1 special character"),/[^\x00-\x7F]/.test(g)&&h.push("ASCII characters only"),h},f=()=>{const g=document.querySelector("#inp__text--password"),h=document.querySelector("#inp__text--verify-password");let E=null,m=null;if(!g?.value)E="Please enter a password",m="#inp__text--password";else{const _=p(g.value);if(_.length>0)E="Password must have:|"+_.join(", "),m="#inp__text--password";else if(!h?.value)E="Please verify your password",m="#inp__text--verify-password";else if(g.value!==h.value)E="Passwords do not match",m="#inp__text--verify-password";else{const x=a.appSession.session_user.email||"",k={email:x,hash:Wt.neodigmUtils().genHash(g.value),modified_by:x},I={method:"POST",body:JSON.stringify(k),headers:xe.genHeaders()};fetch(xe.API_baseURI+"/m5t/"+xe.API_ver+"/acctEntity/resetHash",I).then(R=>R.json()).then(R=>{R.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(R=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}E&&(d(m),neodigmToast.q(E,"danger"))};return rt(()=>{c(),u()}),(g,h)=>(fe(),he("div",Bm,[h[9]||(h[9]=dt('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",Fm,[b("div",zm,[h[8]||(h[8]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),b("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),b("form",{class:"auth-form",onSubmit:Ea(f,["prevent"])},[b("div",Hm,[h[4]||(h[4]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",Um,[b("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:h[0]||(h[0]=jt(E=>f(),["enter"]))},null,40,Gm),b("button",{type:"button",class:"password-toggle-btn",onClick:h[1]||(h[1]=E=>l()),tabindex:"-1"},[b("span",{class:Ve(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),h[5]||(h[5]=b("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),b("div",jm,[h[6]||(h[6]=b("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),b("div",Vm,[b("input",{id:"inp__text--verify-password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:h[2]||(h[2]=jt(E=>f(),["enter"]))},null,40,qm),b("button",{type:"button",class:"password-toggle-btn",onClick:h[3]||(h[3]=E=>i()),tabindex:"-1"},[b("span",{class:Ve(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",{class:"auth-actions"},[h[7]||(h[7]=b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),b("button",{type:"button",onClick:s,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},Km=fa(Ym,[["__scopeId","data-v-3ae2c87b"]]),Wm={class:"auth-page"},Jm={class:"auth-page-right"},Xm={class:"auth-card"},Qm={class:"verification-content"},Zm={class:"timer-display"},eb={__name:"verf_link_route",setup(e){const t=it();ys(),Se();const a=Ce(7200);let s=null;const n=r=>{const l=Math.floor(r/3600),i=Math.floor(r%3600/60),c=r%60;return`${l.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},o=()=>{s=setInterval(()=>{a.value--,a.value<=0&&(clearInterval(s),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return rt(()=>{o()}),Xt(()=>{s&&clearInterval(s)}),(r,l)=>(fe(),he("div",Wm,[l[4]||(l[4]=dt('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",Jm,[b("div",Xm,[l[3]||(l[3]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title"},"Check Your Email"),b("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),b("div",Qm,[l[0]||(l[0]=b("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),l[1]||(l[1]=b("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),l[2]||(l[2]=b("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),b("div",Zm,me(n(a.value)),1)])])])]))}},tb=fa(eb,[["__scopeId","data-v-d92b2a33"]]);class ab extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-email","data-active-count","data-played-count","data-trophy-count"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",a=this.getAttribute("data-email")||"",s=this.getAttribute("data-active-count")||"0",n=this.getAttribute("data-played-count")||"0",o=this.getAttribute("data-trophy-count")||"0",r=t.charAt(0).toUpperCase(),l=new Date,i=l.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),c=l.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"}),u=`${i} · ${c}`;this.shadowRoot.innerHTML=`
            <style>
                ${je()}
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
                <div class="hero__avatar">${r}</div>
                <div class="hero__name">${t}</div>
                ${a?`<div class="hero__email">${a}</div>`:""}
                <div class="hero__timestamp">${u}</div>
                <div class="hero__kpis">
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${s}</span>
                        <span class="hero__kpi-label">Active</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${n}</span>
                        <span class="hero__kpi-label">Played</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${o}</span>
                        <span class="hero__kpi-label">Trophies</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-profile-hero",ab);class sb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-played","data-first-place","data-trophies","data-favorite-sport","data-favorite-sport-group","data-win-rate","data-win-loss-record"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-played")||"0",a=this.getAttribute("data-first-place")||"0",s=this.getAttribute("data-trophies")||"0",n=this.getAttribute("data-favorite-sport")||"—",o=this.getAttribute("data-favorite-sport-group")||"",r=this.getAttribute("data-win-rate")||"—",l=this.getAttribute("data-win-loss-record")||"",i=o?`<bma-sport-icon data-sport-group="${o.toLowerCase()}" style="width:20px;height:20px;"></bma-sport-icon>`:"";this.shadowRoot.innerHTML=`
            <style>
                ${je()}
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
                    <span class="row__value">${a}</span>
                </div>
                <div class="row">
                    <span class="row__label">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 5.18L20 8l-4 3.9.94 5.5L12 14.78 7.06 17.4 8 11.9 4 8l5.61-.82L12 2z"/></svg>
                        Total Trophies
                    </span>
                    <span class="row__value">${s}</span>
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
                    <span class="row__value">${r}${l?`<span class="row__sub">${l}</span>`:""}</span>
                </div>
            </div>
        `}}customElements.define("bma-profile-stats",sb);class nb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._openPanels={private:!0,public:!0}}static get observedAttributes(){return["data-contests","data-private-contests"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}get contests(){const t=this.getAttribute("data-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}get privateContests(){const t=this.getAttribute("data-private-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return qe.find(s=>s.key===t)?.group||""}render(){const t=this.contests,a=this.privateContests,s=i=>`<span class="chip chip--${i==="LOCKED"?"locked":i==="UPCOMING"?"upcoming":i==="COMPLETED"?"completed":"default"}">${i==="LOCKED"?"In Progress":i==="UPCOMING"?"Open":i==="COMPLETED"?"Completed":i}</span>`,n=i=>i===1?'<div class="card__trophy" style="background-image: var(--trophy-gold-tall);"></div>':i===2?'<div class="card__trophy" style="background-image: var(--trophy-silver-tall);"></div>':i===3?'<div class="card__trophy" style="background-image: var(--trophy-bronze-tall);"></div>':"",o=i=>{const c=i.sports?.[0]||"",u=this._sportGroup(c),d=u?`<bma-sport-icon data-sport-group="${u}" style="width:18px;height:18px;flex-shrink:0;opacity:0.7;"></bma-sport-icon>`:"",p=i.startTime?Ga.formatDateLocal(i.startTime,{month:"short",day:"numeric"}):"",f=i.placement?n(i.placement):"",g=i.isHosting?'<span class="chip chip--host">Host</span>':"";return`
                <div class="card" data-contest-id="${i.id||""}">
                    <div class="card__top">
                        <div class="card__info">
                            ${d}
                            <span class="card__name">${i.name||"Tournament"}</span>
                        </div>
                        <div class="card__right">
                            ${g}
                            ${s(i.status)}
                            <svg class="card__arrow" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                        </div>
                    </div>
                    <div class="card__bottom">
                        <span class="card__meta">${p}${p&&i.sport?" · ":""}${i.sport||""}</span>
                        ${f}
                    </div>
                </div>
            `},r=t.map(o).join(""),l=a.map(o).join("");this.shadowRoot.innerHTML=`
            <style>
                ${je()}
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
                    <span class="panel__count">${a.length}</span>
                    <svg class="panel__chevron" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </button>
                <div class="panel__body">
                    ${a.length>0?l:`<div class="empty">You haven't hosted or joined a Bet Max Pool yet.</div>`}
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
                    ${t.length>0?r:'<div class="empty">No contest history yet</div>'}
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".card[data-contest-id]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.contestId;c&&this.dispatchEvent(new CustomEvent("contest-click",{detail:{contestGuid:c},bubbles:!0,composed:!0}))})}),this.shadowRoot.querySelectorAll("[data-toggle]").forEach(i=>{i.addEventListener("click",()=>{const c=i.dataset.toggle;this._openPanels[c]=!this._openPanels[c];const u=this.shadowRoot.querySelector(`[data-panel="${c}"]`);u&&u.classList.toggle("panel--collapsed",!this._openPanels[c]),i.setAttribute("aria-expanded",String(this._openPanels[c]))})})}}customElements.define("bma-profile-history",nb);class ob extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-active-section","data-sections"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}get activeSection(){return this.getAttribute("data-active-section")||"overview"}render(){const t=this.activeSection,r=((this.getAttribute("data-sections")||"profile")==="top-players"?[{id:"overall",label:"Overall",icon:'<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>'},{id:"earnings",label:"TD$ Won",icon:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>'}]:[{id:"overview",label:"Overview",icon:'<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>'},{id:"contests",label:"Tourneys",icon:'<path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>'},{id:"guide",label:"How to Play",icon:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>'},{id:"account",label:"Account",icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',desktopOnly:!0}]).map(l=>`
            <button class="nav-item ${l.id===t?"nav-item--active":""}${l.desktopOnly?" nav-item--desktop-only":""}" data-section="${l.id}" type="button">
                <svg class="nav-item__icon" viewBox="0 0 24 24" fill="currentColor">${l.icon}</svg>
                <span class="nav-item__label">${l.label}</span>
            </button>
        `).join("");this.shadowRoot.innerHTML=`
            <style>
                ${je()}
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
                ${r}
            </nav>
        `,this.shadowRoot.querySelectorAll(".nav-item").forEach(l=>{l.addEventListener("click",()=>{const i=l.dataset.section;this.setAttribute("data-active-section",i),this.dispatchEvent(new CustomEvent("section-change",{detail:{section:i},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-nav",ob);class rb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}render(){this.shadowRoot.innerHTML=`
            <style>
                ${je()}
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
        `;const t=this.shadowRoot.getElementById("guide-modes-rail"),a=this.shadowRoot.querySelectorAll("#guide-modes-dots .modes-dot"),s=this.shadowRoot.getElementById("guide-modes-prev"),n=this.shadowRoot.getElementById("guide-modes-next");if(t&&a.length){const o=()=>(t.firstElementChild?.offsetWidth||300)+12;t.addEventListener("scroll",()=>{const r=Math.round(t.scrollLeft/o());a.forEach((l,i)=>l.classList.toggle("modes-dot--active",i===r))},{passive:!0}),a.forEach((r,l)=>{r.addEventListener("click",()=>{t.scrollTo({left:l*o(),behavior:"smooth"})})}),s&&s.addEventListener("click",()=>{t.scrollBy({left:-o(),behavior:"smooth"})}),n&&n.addEventListener("click",()=>{t.scrollBy({left:o(),behavior:"smooth"})})}}}customElements.define("bma-profile-guide",rb);const ib={class:"profile-layout"},lb={class:"profile-shell"},cb={class:"profile-sidebar"},db=["data-active-section"],ub={class:"profile-content"},pb={class:"profile-panel"},fb={class:"profile-panel"},hb={class:"profile-panel"},gb={class:"profile-panel profile-panel--account-desktop"},mb={class:"account-panel"},bb={class:"mobile-account-bar"},vb={__name:"profile_route",setup(e){const t=it(),a=Se(),s=Ce("overview"),n=Ce(!1),o=()=>{t.push({name:"home_route"})},r=d=>{s.value=d.detail?.section||"overview"},l=d=>{const p=d.detail?.contestGuid;p&&(window._pendingTournGuid=p,t.push({name:"home_route"}))},i=()=>{const d=a.appSession?.session_user||{},p=d.guid,f=a.coreTourn.length>0?a.coreTourn[a.coreTourn.length-1].data:[],g=f.filter(W=>(W.entities?.guids||[]).includes(p)),h=g.filter(W=>["LOCKED","UPCOMING"].includes(W.status||W.class)),E=g.filter(W=>(W.status||W.class)==="COMPLETED"),m=W=>{let oe=0,se=0,ae=0;return W.forEach(te=>{(Array.isArray(te.tags)?te.tags:[]).forEach(H=>{if(!H||typeof H!="object")return;const Z=(H.entity_guid===p?H.badge:null)||(typeof H[p]=="string"?H[p]:null);typeof Z=="string"&&Z.startsWith("--badge__ribbon--")&&(Z==="--badge__ribbon--gold"?oe++:Z==="--badge__ribbon--silver"?se++:Z==="--badge__ribbon--bronze"&&ae++)})}),{gold:oe,silver:se,bronze:ae}},_=g.filter(W=>W.is_private!==!0),x=g.filter(W=>W.is_private===!0),k=m(_),I=m(x),{gold:R,silver:N,bronze:j}=k,$={};g.forEach(W=>{(W.sports_allowed||[]).forEach(oe=>{const ae=qe.find(te=>te.key===oe.key)?.group||"Other";$[ae]=($[ae]||0)+1})});let U="",z="",F=0;Object.entries($).forEach(([W,oe])=>{oe>F&&(F=oe,U=W,z=W)});const V=Pe._betStatsCache?.stats||null;let y="—",A="";if(V){const W=V.wins+V.losses;W>0&&(y=Math.round(V.wins/W*100)+"%",A=`${V.wins}-${V.losses}`)}const S=W=>{let oe=null;(Array.isArray(W.tags)?W.tags:[]).forEach(H=>{if(!H||typeof H!="object")return;const Z=(H.entity_guid===p?H.badge:null)||(typeof H[p]=="string"?H[p]:null);Z==="--badge__ribbon--gold"?oe=1:Z==="--badge__ribbon--silver"?oe=2:Z==="--badge__ribbon--bronze"&&(oe=3)});const ae=W.sports_allowed?.[0]?.key||"",te=qe.find(H=>H.key===ae),ne=!!(W.creator_guid&&W.creator_guid===p);return{id:W.guid,name:W.caption||"Tournament",sport:te?.title||"",sports:[ae],status:W.status||W.class||"",placement:oe,startTime:W.window_start_time,isPrivate:W.is_private===!0,isHosting:ne}},D=(W,oe)=>new Date(oe.status_time||0)-new Date(W.status_time||0),O=[...g].filter(W=>W.is_private!==!0).sort(D).slice(0,20).map(S),X=f.filter(W=>W.is_private===!0).filter(W=>{const oe=W.creator_guid&&W.creator_guid===p,se=(W.entities?.guids||[]).includes(p);return oe||se}).sort(D).slice(0,20).map(S);return{username:d.userName||d.name||"Player",email:d.email||"",activeCount:h.length,playedCount:E.length,trophyCount:R+N+j,gold:R,silver:N,bronze:j,firstPlace:R,publicTrophies:k,privateTrophies:I,favSport:U,favGroup:z,winRate:y,record:A,recentContests:O,privateContests:X}},c=()=>{const d=i(),p=document.querySelector("bma-profile-hero");p&&(p.setAttribute("data-username",d.username),p.setAttribute("data-email",d.email),p.setAttribute("data-active-count",String(d.activeCount)),p.setAttribute("data-played-count",String(d.playedCount)),p.setAttribute("data-trophy-count",String(d.trophyCount)));const f=document.querySelector("bma-profile-stats");f&&(f.setAttribute("data-played",String(d.playedCount)),f.setAttribute("data-first-place",String(d.firstPlace)),f.setAttribute("data-trophies",String(d.trophyCount)),f.setAttribute("data-favorite-sport",d.favSport),f.setAttribute("data-favorite-sport-group",d.favGroup),f.setAttribute("data-win-rate",d.winRate),f.setAttribute("data-win-loss-record",d.record));const g=document.querySelector("bma-profile-history");g&&(g.setAttribute("data-contests",JSON.stringify(d.recentContests)),g.setAttribute("data-private-contests",JSON.stringify(d.privateContests)));const h=document.getElementById("profile-trophy-pack");if(h){const E=h.dataset.activeTab==="pools"?"pools":"lobbies",m=x=>`
        <div class="trophy-podium">
          <div class="podium-col podium-col--silver">
            <div class="podium-col__trophy" style="background-image: var(--trophy-silver-tall); width: 56px; height: 56px;"></div>
            <span class="podium-col__count" style="color: #C0C0C0;">&times;${x.silver}</span>
            <div class="podium-col__pedestal podium-col__pedestal--silver">
              <span class="podium-col__place">2nd</span>
            </div>
          </div>
          <div class="podium-col podium-col--gold">
            <div class="podium-col__trophy" style="background-image: var(--trophy-gold-tall); width: 72px; height: 72px;"></div>
            <span class="podium-col__count" style="color: var(--status-locked-text, #FFD700);">&times;${x.gold}</span>
            <div class="podium-col__pedestal podium-col__pedestal--gold">
              <span class="podium-col__place">1st</span>
            </div>
          </div>
          <div class="podium-col podium-col--bronze">
            <div class="podium-col__trophy" style="background-image: var(--trophy-bronze-tall); width: 48px; height: 48px;"></div>
            <span class="podium-col__count" style="color: #DA954B;">&times;${x.bronze}</span>
            <div class="podium-col__pedestal podium-col__pedestal--bronze">
              <span class="podium-col__place">3rd</span>
            </div>
          </div>
        </div>
      `,_=E==="pools"?d.privateTrophies:d.publicTrophies;h.innerHTML=`
        <div class="trophy-pack__header">My Trophies</div>
        <div class="trophy-pack__tabs" role="tablist">
          <button type="button" class="trophy-pack__tab ${E==="lobbies"?"trophy-pack__tab--active":""}" data-trophy-tab="lobbies" role="tab" aria-selected="${E==="lobbies"}">Bet Max Lobbies</button>
          <button type="button" class="trophy-pack__tab ${E==="pools"?"trophy-pack__tab--active":""}" data-trophy-tab="pools" role="tab" aria-selected="${E==="pools"}">Bet Max Pools</button>
        </div>
        ${m(_)}
      `,h.querySelectorAll("[data-trophy-tab]").forEach(x=>{x.addEventListener("click",()=>{const k=x.dataset.trophyTab;h.dataset.activeTab!==k&&(h.dataset.activeTab=k,c())})})}};let u=null;return rt(async()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),c();const d=a.appSession?.session_user?.guid;d&&Pe._ensureBetStatsCache(d).then(p=>{p&&c()}),u=le.subscribe(a.hierTopics.ROUTE__HOME_HYDRATE,()=>{c()})}),Xt(()=>{u&&le.unsubscribe(u)}),(d,p)=>(fe(),he("main",ib,[b("div",{class:"profile-header"},[b("button",{class:"profile-header__back",onClick:o,"aria-label":"Back"},[...p[7]||(p[7]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),p[8]||(p[8]=b("h1",{class:"profile-header__title"},"My Profile",-1))]),p[18]||(p[18]=b("bma-profile-hero",null,null,-1)),b("div",lb,[b("aside",cb,[b("bma-profile-nav",{"data-active-section":s.value,onSectionChange:r},null,40,db)]),b("div",ub,[Lt(b("section",pb,[...p[9]||(p[9]=[b("div",{id:"profile-trophy-pack",class:"trophy-pack"},null,-1),b("bma-profile-stats",null,null,-1)])],512),[[Es,s.value==="overview"]]),Lt(b("section",fb,[b("bma-profile-history",{onContestClick:l},null,32)],512),[[Es,s.value==="contests"]]),Lt(b("section",hb,[...p[10]||(p[10]=[b("bma-profile-guide",null,null,-1)])],512),[[Es,s.value==="guide"]]),Lt(b("section",gb,[b("div",mb,[b("button",{class:"account-btn",onClick:p[0]||(p[0]=f=>ct(le).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[11]||(p[11]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Be(" Change Password ",-1)])]),b("button",{class:"account-btn account-btn--signout",onClick:p[1]||(p[1]=f=>ct(le).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[12]||(p[12]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Be(" Sign Out ",-1)])])])],512),[[Es,s.value==="account"]])])]),b("div",bb,[n.value?(fe(),he("div",{key:0,class:"mobile-account-scrim",onClick:p[2]||(p[2]=f=>n.value=!1)})):Te("",!0),n.value?(fe(),he("div",{key:1,class:"mobile-account-bar__panel",onClick:p[5]||(p[5]=Ea(()=>{},["stop"]))},[b("button",{class:"account-btn",onClick:p[3]||(p[3]=f=>ct(le).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[13]||(p[13]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Be(" Change Password ",-1)])]),b("button",{class:"account-btn account-btn--signout",onClick:p[4]||(p[4]=f=>ct(le).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[14]||(p[14]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Be(" Sign Out ",-1)])])])):Te("",!0),b("div",{class:"mobile-account-bar__trigger",onClick:p[6]||(p[6]=f=>n.value=!n.value)},[p[16]||(p[16]=b("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})],-1)),p[17]||(p[17]=b("span",null,"Account",-1)),(fe(),he("svg",{class:Ve(["mobile-account-bar__chevron",n.value?"mobile-account-bar__chevron--open":""]),viewBox:"0 0 24 24",fill:"currentColor"},[...p[15]||(p[15]=[b("path",{d:"M7 10l5 5 5-5z"},null,-1)])],2))])])]))}};class _b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-rank","data-trophies","data-td-dollars"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",a=this.getAttribute("data-rank")||"—",s=this.getAttribute("data-trophies")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),o=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString(),r=t.charAt(0).toUpperCase();this.shadowRoot.innerHTML=`
            <style>
                ${je()}
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
                    <div class="hero__avatar">${r}</div>
                    <span class="hero__rank">${a==="—"?"—":"#"+a}</span>
                </div>
                <div class="hero__name">${t}</div>
                <div class="hero__kpis">
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${s}</span>
                        <span class="hero__kpi-label">Trophies</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">TD$ ${o}</span>
                        <span class="hero__kpi-label">Total Earned</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-top-players-hero",_b);const yb={class:"top-players-layout"},wb={class:"top-players-shell"},xb={class:"top-players-sidebar"},Tb=["data-active-section"],Sb={__name:"top_players_route",setup(e){const t=it(),a=Se(),s=Ce("overall"),n=()=>{t.push({name:"home_route"})},o=i=>{const c=i.detail?.section||"overall";s.value=c;const u=document.querySelector(`#global-leaderboard-container .glb__tab[data-tab="${c}"]`);u&&u.click()},r=i=>{const c=a.appSession?.session_user?.guid,u=a.appSession?.session_user?.userName||a.appSession?.session_user?.name||"Player",d=i.find(f=>f.user_guid===c),p=document.querySelector("bma-top-players-hero");if(p)if(d){const f=i.indexOf(d)+1;p.setAttribute("data-username",d.username||u),p.setAttribute("data-rank",String(f)),p.setAttribute("data-trophies",String(d.tournaments_won||0)),p.setAttribute("data-td-dollars",String(d.total_payout||0))}else p.setAttribute("data-username",u),p.setAttribute("data-rank","—"),p.setAttribute("data-trophies","0"),p.setAttribute("data-td-dollars","0")},l=async()=>{try{const i=Pe._globalLBCache?.ALL;let c;i?.data&&Date.now()-i.ts<300*1e3?c=i.data:(c=await xe.fetchAllTimeLeaderboard("ALL",100,"td"),Pe._globalLBCache&&(Pe._globalLBCache.ALL={data:c,ts:Date.now(),inflight:!1})),r(c?.data||[]),typeof window._renderTopPlayers=="function"&&await window._renderTopPlayers("ALL")}catch(i){console.warn("[top_players_route] load failed",i)}};return rt(()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),requestAnimationFrame(()=>{l()})}),(i,c)=>(fe(),he("main",yb,[b("div",{class:"top-players-header"},[b("button",{class:"top-players-header__back",onClick:n,"aria-label":"Back"},[...c[0]||(c[0]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=b("h1",{class:"top-players-header__title"},"Top Players",-1))]),c[3]||(c[3]=b("bma-top-players-hero",null,null,-1)),c[4]||(c[4]=b("p",{class:"top-players-scope-note"}," Top Players leaderboard reflects public Bet Max Tourney games, not Bet Max Pools results. ",-1)),b("div",wb,[b("aside",xb,[b("bma-profile-nav",{"data-active-section":s.value,onSectionChange:o,"data-sections":"top-players"},null,40,Tb)]),c[2]||(c[2]=b("div",{class:"top-players-content"},[b("div",{id:"global-leaderboard-container"},[b("div",{class:"leaderboard-empty"},[b("p",null,"Loading leaderboard...")])])],-1))])]))}},kb={class:"play-cntr","data-current-tourn-guid":"","data-current-tourn-action":""},Eb={id:"play-section-PLAY",class:"play-section",style:{display:"none","padding-top":"8px"}},Ab={class:"bet-grid"},Cb={class:"bet-grid__slip","data-active-bet-tab":"MYBETS"},Pb={class:"bet-grid__slip-BETSLIP",style:{display:"none"},"data-bets-valid":"false"},Ob=["innerHTML"],Lb={__name:"play_route",setup(e){const t=it(),a=ys(),s=Se(),n=window.EMPTY_BETSLIP_HTML||"",o=()=>{t.push({name:"home_route"})},r=()=>{const i=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),u=document.querySelector(".bet-grid__toggle-container"),d=document.querySelector(".bet-grid__select"),p=document.querySelector(".bet-grid__slip");if(!i||!c||!u||!d||!p){console.warn("[play_route] initBetGridToggle: missing elements");return}const f=window.matchMedia("(orientation: portrait)").matches,g=window.matchMedia("(max-width: 768px)").matches,h=m=>{d.classList.toggle("collapsed",m),p.classList.toggle("collapsed",!m),c.textContent=m?"Close Bet Slip":"Open Bet Slip",u.classList.toggle("bet-grid__toggle-container--open",m)};(f||g)&&h(!1);let E=null;i.addEventListener("pointerdown",m=>{E=m.pointerId}),i.addEventListener("pointerup",m=>{if(m.pointerId!==E)return;E=null;const _=!p.classList.contains("collapsed");h(!_)}),i.addEventListener("pointercancel",()=>{E=null}),i.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation()})},l=i=>{const c=i.target.closest("[data-publish-route-home], [data-sodapop-close]");c&&c.dataset?.publishRouteHome?.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&(document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(d=>{d.classList.toggle("dash-nav__btn--active",d===c)}),le.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`))};return rt(async()=>{if(!s.appSession.session_user.authenticated){t.push({name:"signin_route"});return}const i=a.query.guid||"",c=a.query.action||"INFO";if(!i){console.warn("[play_route] No tournament guid provided"),t.push({name:"home_route"});return}const u=s.appSession?.session_user?.guid;if(u)try{const p=await xe.fetchBetSlips(u,i);p?.rows&&(s.pushcoreBetSlip({timestamp:Date.now(),source:"API",data:p.rows}),setTimeout(()=>{le.publish(s.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(p))},300))}catch(p){console.warn("[play_route] fetchBetSlips failed:",p)}if(!(s.coreTourn.length>0&&s.coreTourn[s.coreTourn.length-1]?.data?.some(p=>p.guid===i)))try{const p=await xe.fetchTournaments();p?.rows&&Array.isArray(p.rows)&&(s.pushCoreTourn({timestamp:Date.now(),source:"API_PLAY_HYDRATE",data:p.rows}),console.log("[play_route] Hydrated coreTourn for direct entry — guid:",i))}catch(p){console.warn("[play_route] coreTourn hydrate failed:",p)}document.body.classList.add("route-locked"),document.addEventListener("click",l),window.initBetGridToggle=r,requestAnimationFrame(()=>{typeof Pe.initPlayScreen=="function"&&Pe.initPlayScreen(i,c)})}),Xt(()=>{document.body.classList.remove("route-locked"),document.removeEventListener("click",l),delete window.initBetGridToggle;const i=document.querySelector(".play-cntr");i&&(i.dataset.currentTournGuid="",i.dataset.currentTournAction="")}),(i,c)=>(fe(),he("article",kb,[b("div",{class:"head-caption tourn-dashboard"},[b("div",{class:"head-caption__back",onClick:o,role:"button",tabindex:"0","aria-label":"Back"},[...c[0]||(c[0]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=b("section",{class:"head-caption__content"},[b("h3",{id:"pop-play__tourn-caption--id",class:"pop-play__tourn-caption"},"Tournament"),b("p",{id:"pop-play__tourn-tagline--id",class:"pop-play__tourn-tagline"},"Loading...")],-1))]),c[6]||(c[6]=dt('<div class="dash-stats"><div class="dash-stat"><span class="dash-stat__label">TD$ Balance</span><span class="dash-stat__value" id="dashboard-td-balance">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--balance" style="width:100%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">At Risk</span><span class="dash-stat__value dash-stat__value--pending" id="dashboard-td-pending">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--pending" style="width:0%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">Rank</span><span class="dash-stat__value" id="dashboard-rank"><span class="tourn-dashboard__rank-text">-/-</span><span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--participants" style="width:0%;"></div></div></div></div><nav class="dash-nav"><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><span>Info</span></button><button id="btn-join__play--id" class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="visibility:hidden;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><span>Play</span></button><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"></path></svg><span>Leaderboard</span></button></nav><div id="play-section-INFO" class="play-section play-section--active"><div id="pop-play__caro-info-summary2--id"></div><div id="pop-play__caro-info-summary1--id"></div><div id="pop-play__caro-info-list--id"></div></div>',3)),b("div",Eb,[b("article",Ab,[c[5]||(c[5]=dt('<section class="bet-grid__select"><bma-game-mode-progress id="game-mode-progress" hidden></bma-game-mode-progress><article class="select-grid"></article></section><div class="bet-grid__toggle-container"><button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle bet slip"><span class="bet-grid__toggle-summary"><span class="bet-grid__toggle-badge" id="bet-grid-toggle-count">0</span><span class="bet-grid__toggle-label">Bets</span></span><span class="bet-grid__toggle-action"><span class="bet-grid__toggle-text">Open Bet Slip</span><svg class="bet-grid__toggle-chevron" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 14l5-5 5 5z"></path></svg></span></button></div>',2)),b("aside",Cb,[c[3]||(c[3]=dt('<nav class="bet-slip__tabs"><button class="bet-slip-tab" data-bet-tab="BETSLIP">Bet Slip<span class="bet-slip-tab__badge bet-slip-tab__badge--slip" id="bet-slip-tab-slip-badge" style="visibility:hidden;">0</span></button><button class="bet-slip-tab" data-bet-tab="MYBETS">My Bets<span class="bet-slip-tab__badge bet-slip-tab__badge--mybets" id="bet-slip-tab-mybets-badge" style="visibility:hidden;">0</span></button></nav>',1)),b("section",Pb,[b("div",{class:"bet-grid__slip-BETSLIP-content",innerHTML:ct(n)},null,8,Ob),c[2]||(c[2]=dt('<output class="bet-grid__slip-BETSLIP-summary"><div class="summary-row summary-row--labels"><div class="summary-cell">TD$</div><div class="summary-cell">Stake</div><div class="summary-cell">Payout</div></div><div class="summary-row summary-row--values"><div id="summary-balance" class="summary-cell">0.00</div><div id="summary-stake" class="summary-cell">0.00</div><div id="summary-payout" class="summary-cell">0.00</div></div></output><button class="bet-grid__slip-BETSLIP-cta" data-publish-betslip="COREBETSLIP.BET">BET!</button>',2))]),c[4]||(c[4]=b("div",{class:"bet-grid__slip-MYBETS"},null,-1))])])]),c[7]||(c[7]=b("div",{id:"play-section-LEADERBOARD",class:"play-section",style:{display:"none"}},[b("div",{id:"pop-play__caro-leaderboard--id"})],-1)),c[8]||(c[8]=b("br",null,null,-1))]))}},Mb={class:"preview-cntr"},Db={class:"head-caption tourn-dashboard"},Rb={class:"head-caption__content"},Ib={class:"pop-play__tourn-caption"},$b={class:"pop-play__tourn-tagline"},Nb={key:0,class:"preview-wrap"},Bb={key:0,class:"preview-invite-band"},Fb={class:"info-summary-pack"},zb={class:"info-summary-pack__stat"},Hb={class:"info-summary-pack__stat-value",style:{color:"var(--status-upcoming-text, #00E676)"}},Ub={class:"info-summary-pack__stat"},Gb={class:"info-summary-pack__stat-value"},jb={class:"info-summary-pack__stat"},Vb={class:"info-summary-pack__stat-value"},qb={class:"info-pack info-pack--padded"},Yb={class:"info-progress-status"},Kb={class:"info-progress-status__row"},Wb={key:0,class:"preview-countdown"},Jb={class:"preview-schedule-row"},Xb={class:"preview-schedule-value"},Qb={class:"preview-schedule-value"},Zb={key:1,class:"info-pack info-pack--padded preview-joined"},ev={class:"preview-section-row"},tv={class:"preview-section-meta"},av={class:"preview-players-row"},sv={class:"preview-player-avatar"},nv={class:"preview-player-name"},ov={key:0,class:"preview-player-more"},rv={key:2,class:"info-pack info-pack--padded preview-trophies"},iv={class:"preview-trophy-podium"},lv={key:0,class:"preview-trophy preview-trophy--silver"},cv={class:"preview-trophy-count"},dv={key:1,class:"preview-trophy preview-trophy--gold"},uv={class:"preview-trophy-count"},pv={key:2,class:"preview-trophy preview-trophy--bronze"},fv={class:"preview-trophy-count"},hv={class:"info-pack preview-legend"},gv={class:"preview-legend-item"},mv={class:"preview-legend-value"},bv={class:"preview-legend-item"},vv={class:"preview-legend-value"},_v={class:"preview-legend-item"},yv={class:"preview-legend-value",style:{color:"var(--status-locked-text, #F7C60D)"}},wv={key:3,class:"info-pack info-pack--padded preview-invite-composer"},xv={class:"preview-section-row"},Tv={key:0,class:"preview-section-meta"},Sv=["disabled"],kv=["disabled"],Ev={key:0,class:"invite-form__hint"},Av={key:1,class:"invite-form__error"},Cv={key:2,class:"invite-sent-list"},Pv={class:"invite-sent-row__main"},Ov={class:"invite-sent-row__name"},Lv=["onClick","aria-label"],Mv={class:"preview-cta-bar"},Dv={key:1,class:"preview-cta-hint"},Rv={key:2,class:"preview-cta-hint"},Iv={key:1,class:"preview-empty"},$v={__name:"preview_route",setup(e){const t=it(),a=ys(),s=Se(),n=ve(()=>a.params.guid||""),o=ve(()=>a.query.s||null),r=Ce(null),l=Ce("idle"),i=ve(()=>{if(s.coreTourn.length){const C=s.coreTourn[s.coreTourn.length-1].data.find(P=>P.guid===n.value);if(C)return C}return r.value}),c=ve(()=>s.appSession?.session_user?.authenticated===!0),u=ve(()=>!c.value),d=ve(()=>s.appSession?.session_user?.guid||""),p=ve(()=>!c.value||!i.value?!1:(i.value.entities?.guids||[]).includes(d.value)),f=ve(()=>{if(!c.value||!i.value)return!1;const v=i.value.creator_guid;return!!v&&v===d.value}),g=Ce(""),h=Ce(!1),E=Ce(""),m=Ce([]);let _=null;const x=v=>{const C=(v||"").trim();return C?C.includes("@")?{email:C}:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(C)?{user_guid:C}:{userName:C}:null},k=async()=>{E.value="";const v=x(g.value);if(v){h.value=!0;try{const C=await xe.sendInvite(n.value,v);if(C.ok&&C.data?.invite){if(m.value=[C.data.invite,...m.value],g.value="",typeof neodigmToast<"u"){const B=C.data.invite.invitee_display_name||C.data.invite.invitee_user_name||"them";neodigmToast.q(`Invite sent to ${B}.`,"success")}return}const P=C.data?.error||`http_${C.status}`;E.value=(()=>{if(P==="invitee_not_found")return"Couldn't find that player on BMA. You can still share the invite link.";if(P==="already_invited")return"You've already invited them. Check the list below.";if(P==="already_joined")return"They're already in this pool.";if(P==="pool_full")return"Pool is full.";if(P==="cooldown_active"){const B=C.data?.retry_after_hours;return B?`They declined recently. Try again in ${B}h.`:"They declined recently. Try again tomorrow."}return P==="rate_limited"?"Too many invites for now. Try again in a few minutes.":P==="not_creator"?"Only the pool creator can send invites.":P==="not_private"?"This pool doesn't accept directed invites.":P==="invalid_request_shape"?"Enter a User Name or Email to send an invite.":"Couldn't send invite right now. Try again."})()}catch(C){console.warn("[preview_route] sendInvite failed:",C),E.value="Network error. Try again."}finally{h.value=!1}}},I=async v=>{if(!v)return;const C=m.value;m.value=C.filter(B=>B.guid!==v),(await xe.revokeInvite(v)).ok?typeof neodigmToast<"u"&&neodigmToast.q("Invite revoked.","info"):(m.value=C,typeof neodigmToast<"u"&&neodigmToast.q("Couldn't revoke. Try again.","warning"))},R=async()=>{if(!f.value||!n.value)return;const v=await xe.fetchInvitesForTournament(n.value);v.ok&&Array.isArray(v.data?.invites)&&(m.value=v.data.invites)},N=ve(()=>{const v=m.value||[],C=v.filter(J=>(J.status||"").toUpperCase()==="PENDING").length,P=v.filter(J=>(J.status||"").toUpperCase()==="ACCEPTED").length,B=v.filter(J=>(J.status||"").toUpperCase()==="DECLINED").length,Y=typeof i.value?.invited_count=="number"?i.value.invited_count:C;return{pending:C,accepted:P,declined:B,invited:Y}}),j=ve(()=>{const v=i.value;if(!v)return"";if(v.share_url)return v.share_url;const P=`${window.location.origin+window.location.pathname}#/preview/${v.guid||n.value}`;return v.join_slug?`${P}?s=${encodeURIComponent(v.join_slug)}`:P}),$=ve(()=>Number(i.value?.tournament_dollars||0)),U=ve(()=>{const v=i.value;return v?typeof v.entities?.count=="number"?v.entities.count:v.entities?.guids?.length||0:0}),z=ve(()=>i.value?.entities?.max||0),F=ve(()=>i.value?.matches_expanded?.length||0),V=ve(()=>{const v=i.value;return v?v.format?.on_going!==void 0?v.format.on_going:(v.tags||[]).some(C=>C.override_last_match_close===!0):!1}),y=ve(()=>{const v=i.value;return v?v.format?.odds_locked_at_start!==void 0?v.format.odds_locked_at_start:(v.tags||[]).some(C=>C.match_inprogress_lock===!0):!1}),A=ve(()=>{const v=i.value;if(!v)return null;if(v.trophies){const J=v.trophies.gold||0,M=v.trophies.silver||0,T=v.trophies.bronze||0;return J+M+T===0?null:{gold:J,silver:M,bronze:T}}const C=(v.tags||[]).find(J=>J.badge_gold!==void 0||J.badge_silver!==void 0||J.badge_bronze!==void 0);if(!C)return null;const P=C.badge_gold||0,B=C.badge_silver||0,Y=C.badge_bronze||0;return P+B+Y===0?null:{gold:P,silver:B,bronze:Y}}),S=ve(()=>{const v=r.value?.joined_players||i.value?.joined_players;return Array.isArray(v)?v:[]}),D=ve(()=>Math.max(0,U.value-S.value.length)),O=ve(()=>y.value?"Locked Odds":"Live Odds"),q=ve(()=>V.value?"On-going":"Fixed Slate"),X=ve(()=>{const v=i.value;if(!v)return"Bet Max Tourney";const C=v.game_mode?.class||v.class||"DEFAULT_FORMAT";return C==="DEFAULT_FORMAT"?"Bet Max Tourney":v.game_mode?.label||C}),W=ve(()=>{if(se.value!=="UPCOMING")return"";const v=i.value;if(!v?.window_start_time)return"";let C=v.window_start_time;!C.includes("Z")&&!C.match(/[+-]\d{2}:\d{2}$/)&&(C+="Z");const P=new Date(C).getTime()-Date.now();if(P<=0)return"Starting now";const B=Math.floor(P/36e5),Y=Math.floor(P%36e5/6e4);return B>=24?`Starts in ${Math.floor(B/24)}d ${B%24}h`:B>0?`Starts in ${B}h ${Y}m`:Y>5?`Starts in ${Y}m`:"Starting soon"}),oe=ve(()=>F.value===0?"TBD":`${F.value}${V.value?"+":""}`),se=ve(()=>i.value?.status||""),ae=ve(()=>se.value==="LOCKED"?"In Progress":se.value==="UPCOMING"?"Open for Entry":se.value==="COMPLETED"?"Completed":se.value),te=ve(()=>se.value==="LOCKED"?"var(--status-locked-text, #F7C60D)":se.value==="UPCOMING"?"var(--status-upcoming-text, #00E676)":se.value==="COMPLETED"?"var(--status-completed-text, #CD5659)":"#fff"),ne=ve(()=>c.value?p.value?"View Tournament":se.value==="COMPLETED"?"View Results":se.value==="LOCKED"?"View Tournament":i.value?.is_private===!0?"Join Bet Max Pool":"Join Tournament":"Sign Up to Join"),H=()=>{c.value?t.push({name:"home_route"}):t.push({name:"signin_route"})},Z=()=>{if(i.value){if(!c.value){Hf(n.value,o.value),t.push({name:"signup_route"});return}if(p.value||se.value!=="UPCOMING"){t.push({name:"play_route",query:{guid:n.value,action:"INFO"}});return}le.publish(s.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:n.value,ts:Date.now()}))}},ee=async()=>{const v=j.value;if(!v)return;const C=i.value?.caption||"Join my tournament",P=`You're invited to join ${C} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:C,text:P,url:v});return}catch(B){if(B?.name==="AbortError")return}try{await navigator.clipboard.writeText(v),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(B){console.warn("[preview_route] clipboard write failed:",B),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Long-press to copy: "+v,"danger")}},de=ve(()=>{const v=i.value;return v?(v.game_mode?.class||v.game_mode_class||"DEFAULT_FORMAT")==="DEFAULT_FORMAT":!0}),ce=v=>{if(!v)return"TBD";let C=new Date(v);if(!v.includes("Z")&&!v.match(/[+-]\d{2}:\d{2}$/)&&(C=new Date(v+"Z")),isNaN(C.getTime()))return"TBD";const P=de.value?{weekday:"short",month:"short",day:"numeric"}:{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return C.toLocaleString(void 0,P)},w=async()=>{if(n.value){l.value="loading";try{const{data:v,status:C,ok:P}=await xe.fetchTournamentPreview(n.value,o.value);P&&v?(r.value=v,l.value="ok"):C===404?l.value="not_found":C===410?l.value="archived":l.value="error"}catch(v){console.warn("[preview_route] fetchTournamentPreview failed:",v),l.value="error"}}},L=ve(()=>{switch(l.value){case"loading":return"Loading tournament…";case"not_found":return"This tournament doesn't exist or the link is wrong.";case"archived":return"This tournament has ended and been archived.";case"error":return"Couldn't load this tournament. Please try again.";default:return"Tournament details aren't available yet."}});return rt(()=>{document.body.classList.add("route-tournament-preview"),w(),setTimeout(()=>R(),0),_=le.subscribe(s.hierTopics.SSE__CORE__INVITE_SYNC,(v,C)=>{try{const P=JSON.parse(C),B=JSON.parse(P.msg),{invite:Y,action:J}=B?.[0]||{};if(!Y?.guid||Y.tournament_guid!==n.value)return;const M=m.value.findIndex(T=>T.guid===Y.guid);if(J==="accepted"||J==="declined"||J==="expired"){if(M>=0){const T=[...m.value];T[M]={...T[M],...Y},m.value=T}}else J==="revoked"&&M>=0&&(m.value=m.value.filter(T=>T.guid!==Y.guid))}catch(P){console.warn("[preview_route] INVITE_SYNC handler error:",P)}})}),Xt(()=>{document.body.classList.remove("route-tournament-preview"),_&&le.unsubscribe(_)}),(v,C)=>(fe(),he("main",Mb,[b("div",Db,[b("div",{class:"head-caption__back",onClick:H,role:"button",tabindex:"0","aria-label":"Back"},[...C[1]||(C[1]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),b("section",Rb,[b("h3",Ib,me(i.value?.caption||"Tournament"),1),b("p",$b,me(i.value?.tagline||(u.value?"You're invited to a tournament":"")),1)])]),i.value?(fe(),he("div",Nb,[u.value?(fe(),he("div",Bb,[...C[2]||(C[2]=[b("img",{class:"preview-invite-band__logo",src:"https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&format=png",alt:"Bet Max Tourney"},null,-1),b("div",{class:"preview-invite-band__text"},[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[b("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})]),b("span",null,"You're invited to join this tournament")],-1)])])):Te("",!0),b("div",Fb,[b("div",zb,[C[3]||(C[3]=b("span",{class:"info-summary-pack__stat-label"},"Starting TD$",-1)),b("span",Hb,"TD$ "+me($.value.toLocaleString()),1)]),b("div",Ub,[C[4]||(C[4]=b("span",{class:"info-summary-pack__stat-label"},"Players",-1)),b("span",Gb,me(U.value)+" / "+me(z.value),1)]),b("div",jb,[C[5]||(C[5]=b("span",{class:"info-summary-pack__stat-label"},"Games",-1)),b("span",Vb,me(oe.value),1)])]),b("div",qb,[b("div",Yb,[b("div",Kb,[C[6]||(C[6]=b("span",{class:"info-progress-status__label"},"Status",-1)),b("span",{class:"info-progress-status__value",style:dn({color:te.value})},me(ae.value),5)]),W.value?(fe(),he("div",Wb,me(W.value),1)):Te("",!0)]),C[9]||(C[9]=b("div",{class:"info-progress-divider"},null,-1)),b("div",Jb,[b("div",null,[C[7]||(C[7]=b("span",{class:"info-progress-status__label"},"Starts",-1)),b("span",Xb,me(ce(i.value.window_start_time)),1)]),b("div",null,[C[8]||(C[8]=b("span",{class:"info-progress-status__label"},"Ends (est.)",-1)),b("span",Qb,me(ce(i.value.window_end_time)),1)])])]),S.value.length>0?(fe(),he("div",Zb,[b("div",ev,[C[10]||(C[10]=b("span",{class:"preview-section-label"},"Who's In",-1)),b("span",tv,[Be(me(U.value)+" joined",1),f.value&&N.value.invited>0?(fe(),he($e,{key:0},[Be(" · "+me(N.value.invited)+" invited",1)],64)):Te("",!0)])]),b("div",av,[(fe(!0),he($e,null,zt(S.value,P=>(fe(),he("div",{class:"preview-player-chip",key:P.username},[b("div",sv,me((P.username||"?").charAt(0).toUpperCase()),1),b("span",nv,me(P.username),1)]))),128)),D.value>0?(fe(),he("div",ov," +"+me(D.value)+" more ",1)):Te("",!0)])])):Te("",!0),A.value?(fe(),he("div",rv,[C[17]||(C[17]=b("span",{class:"preview-section-label"},"Trophies",-1)),b("div",iv,[A.value.silver>0?(fe(),he("div",lv,[C[11]||(C[11]=b("div",{class:"preview-trophy-img"},null,-1)),b("span",cv,"×"+me(A.value.silver),1),C[12]||(C[12]=b("span",{class:"preview-trophy-place"},"2nd",-1))])):Te("",!0),A.value.gold>0?(fe(),he("div",dv,[C[13]||(C[13]=b("div",{class:"preview-trophy-img preview-trophy-img--lg"},null,-1)),b("span",uv,"×"+me(A.value.gold),1),C[14]||(C[14]=b("span",{class:"preview-trophy-place"},"1st",-1))])):Te("",!0),A.value.bronze>0?(fe(),he("div",pv,[C[15]||(C[15]=b("div",{class:"preview-trophy-img"},null,-1)),b("span",fv,"×"+me(A.value.bronze),1),C[16]||(C[16]=b("span",{class:"preview-trophy-place"},"3rd",-1))])):Te("",!0)])])):Te("",!0),b("div",hv,[b("div",gv,[C[18]||(C[18]=b("span",{class:"preview-legend-label"},"Odds Format",-1)),b("span",mv,me(O.value),1)]),b("div",bv,[C[19]||(C[19]=b("span",{class:"preview-legend-label"},"Format",-1)),b("span",vv,me(q.value),1)]),b("div",_v,[C[20]||(C[20]=b("span",{class:"preview-legend-label"},"Game Mode",-1)),b("span",yv,me(X.value),1)]),C[21]||(C[21]=b("div",{class:"preview-legend-item"},[b("span",{class:"preview-legend-label"},"Entry"),b("span",{class:"preview-legend-value",style:{color:"var(--status-upcoming-text, #00E676)"}},"Free")],-1))]),f.value&&i.value?.is_private===!0?(fe(),he("div",wv,[b("div",xv,[C[22]||(C[22]=b("span",{class:"preview-section-label"},"Invite players",-1)),N.value.pending+N.value.accepted+N.value.declined>0?(fe(),he("span",Tv,[N.value.pending>0?(fe(),he($e,{key:0},[Be(me(N.value.pending)+" pending",1)],64)):Te("",!0),N.value.accepted>0?(fe(),he($e,{key:1},[N.value.pending>0?(fe(),he($e,{key:0},[Be(" · ")],64)):Te("",!0),Be(" "+me(N.value.accepted)+" accepted ",1)],64)):Te("",!0),N.value.declined>0?(fe(),he($e,{key:2},[N.value.pending>0||N.value.accepted>0?(fe(),he($e,{key:0},[Be(" · ")],64)):Te("",!0),Be(" "+me(N.value.declined)+" declined ",1)],64)):Te("",!0)])):Te("",!0)]),b("form",{class:"invite-form",onSubmit:Ea(k,["prevent"]),autocomplete:"off"},[Lt(b("input",{type:"text",class:"invite-form__input","onUpdate:modelValue":C[0]||(C[0]=P=>g.value=P),disabled:h.value,placeholder:"User Name or Email",name:"invite-recipient",autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off","data-lpignore":"true","data-1p-ignore":"true","data-form-type":"other"},null,8,Sv),[[Ns,g.value]]),b("button",{type:"submit",class:"invite-form__btn",disabled:h.value||!g.value.trim()},me(h.value?"Sending...":"Send"),9,kv)],32),E.value?(fe(),he("p",Av,me(E.value),1)):(fe(),he("p",Ev," Goes to their in-app inbox. For friends not on BMA yet, use the Share link below. ")),m.value.length>0?(fe(),he("div",Cv,[(fe(!0),he($e,null,zt(m.value,P=>(fe(),he("div",{class:"invite-sent-row",key:P.guid},[b("div",Pv,[b("span",Ov,me(P.invitee_display_name||P.invitee_user_name||"Invitee"),1),b("span",{class:Ve(["invite-sent-row__status","invite-sent-row__status--"+(P.status||"pending").toLowerCase()])},me((P.status||"PENDING").toLowerCase()),3)]),(P.status||"").toUpperCase()==="PENDING"?(fe(),he("button",{key:0,class:"invite-sent-row__revoke",type:"button",onClick:B=>I(P.guid),"aria-label":"Revoke invite to "+(P.invitee_display_name||"invitee")},"Revoke",8,Lv)):Te("",!0)]))),128))])):Te("",!0)])):Te("",!0),b("div",Mv,[f.value?(fe(),he("button",{key:0,class:"preview-share-btn",onClick:ee,"aria-label":"Share invite link"},[...C[23]||(C[23]=[b("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[b("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})],-1),b("span",null,"Share Invite Link",-1)])])):Te("",!0),b("button",{class:"preview-cta-btn",onClick:Z},me(ne.value),1),u.value?(fe(),he("p",Dv," Sign up is quick. You'll come right back to join. ")):f.value?(fe(),he("p",Rv," You're the host. Share the link to fill your lobby. ")):Te("",!0)])])):(fe(),he("div",Iv,[b("p",null,me(L.value),1),l.value!=="loading"?(fe(),he("button",{key:0,class:"preview-empty-btn",onClick:H},"Back")):Te("",!0)]))]))}},Nv={class:"create-cntr"},Bv={class:"create-steps"},Fv=["onClick"],zv={class:"create-steps__num"},Hv={class:"create-steps__label"},Uv={class:"create-wrap"},Gv={key:0,class:"create-banner create-banner--error"},jv={key:1,class:"create-step"},Vv={key:0,class:"create-banner create-banner--gate",role:"status"},qv={class:"create-banner__msg"},Yv={class:"create-field"},Kv={key:0,class:"create-field__hint"},Wv={key:1,class:"create-field__hint create-field__hint--muted"},Jv={class:"create-field"},Xv={key:0,class:"create-field__hint"},Qv={key:1,class:"create-field__hint create-field__hint--muted"},Zv={class:"create-field"},e_=["data-offset","onClick"],t_={class:"create-day-chip__dow"},a_={class:"create-day-chip__date"},s_={key:0,class:"create-day-chip__tag"},n_={class:"create-field"},o_={class:"create-chip-row"},r_=["onClick"],i_={key:0,class:"create-field__hint"},l_={key:1,class:"create-field__hint create-field__hint--muted"},c_={key:1,class:"create-duration"},d_={class:"create-duration__range"},u_={class:"create-duration__day"},p_={class:"create-duration__day"},f_={class:"create-duration__num-row"},h_={class:"create-duration__num"},g_={class:"create-duration__label"},m_={key:2,class:"create-step"},b_={class:"create-mode-list"},v_=["disabled","aria-disabled","title","onClick"],__={class:"create-mode__head"},y_={class:"create-mode__title"},w_={class:"create-mode__desc"},x_={key:0,class:"create-mode__check","aria-hidden":"true"},T_={key:1,class:"create-mode__lock","aria-hidden":"true"},S_={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},k_={key:3,class:"create-step"},E_={class:"create-sports-header"},A_={class:"create-sports-counter__num"},C_={class:"create-sport-picker"},P_=["disabled","onClick"],O_={class:"create-sport-pick__icon"},L_=["sport","data-sport-group"],M_={class:"create-sport-pick__title"},D_={key:0,class:"create-sport-pick__check","aria-hidden":"true"},R_={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},I_={key:1,class:"create-slate"},$_={class:"create-slate__rows"},N_={class:"create-slate-row__icon"},B_=["sport","data-sport-group"],F_={class:"create-slate-row__main"},z_={class:"create-slate-row__title"},H_={key:0,class:"create-slate-row__status"},U_={key:1,class:"create-slate-row__status create-slate-row__status--muted"},G_=["aria-label","onClick"],j_={key:0,class:"create-slate__footnote"},V_={key:1,class:"create-slate__footnote create-slate__footnote--muted"},q_={key:4,class:"create-step"},Y_={class:"create-field"},K_={key:0,class:"create-field__hint"},W_={key:1,class:"create-field__hint create-field__hint--muted"},J_={class:"create-toggle"},X_={key:5,class:"create-step"},Q_={class:"create-review-card"},Z_={class:"create-review-row"},e0={class:"create-review-value"},t0={key:0,class:"create-review-row"},a0={class:"create-review-value"},s0={class:"create-review-row"},n0={class:"create-review-value"},o0={class:"create-review-row"},r0={class:"create-review-value"},i0={class:"create-review-row"},l0={class:"create-review-value"},c0={class:"create-review-row"},d0={class:"create-review-value"},u0={class:"create-nav"},p0=["disabled"],f0=["disabled"],h0=["disabled"],Jn=7,g0=28,ui=2,m0={__name:"create_tournament_route",setup(e){const t=it(),a=Se(),s=[{id:1,label:"Basics"},{id:2,label:"Game Mode"},{id:3,label:"Sports"},{id:4,label:"Players"},{id:5,label:"Review"}],n=Ce(1),o=Ce({tokens:[],modes:{},tiers:{role_to_tier:{},allowed_modes:{}}}),r=ve(()=>{const M=a.appSession?.session_user?.class;if(typeof window<"u"&&window.GameTypeLifeCycle?.forToken){const T=window.GameTypeLifeCycle.forToken("DEFAULT_FORMAT");if(T&&typeof T.resolveUserTier=="function")return T.resolveUserTier(M)}return"basic"}),l=ve(()=>{const M=o.value.tokens||[],T=o.value.modes||{},G=r.value;return M.map(Q=>{const re=T[Q]||{},be=(Array.isArray(re.tiers)?re.tiers:[]).includes(G),ie=be?re.beta?"Beta":Q==="DEFAULT_FORMAT"?"The classic":"":"Requires Premium";return{key:Q,title:re.label||Q,tagline:ie,description:re.description||"",available:be,beta:!!re.beta,betaMessage:re.betaMessage||""}})});async function i(){try{const M=window.BMACOREAPI?.API_baseURI&&window.BMACOREAPI?.API_ver?`${window.BMACOREAPI.API_baseURI}/m5t/${window.BMACOREAPI.API_ver}`:"https://machfive-bmacdev-rest.onrender.com/m5t/v5",T=await fetch(`${M}/meta/game-modes`);if(!T.ok)throw new Error(`HTTP ${T.status}`);const G=await T.json();G&&G.ok&&G.modes&&Array.isArray(G.tokens)&&(o.value={tokens:G.tokens,modes:G.modes,tiers:G.tiers||{role_to_tier:{},allowed_modes:{}}})}catch(M){console.warn("[create_tournament_route] /meta/game-modes load failed:",M?.message),o.value={tokens:["DEFAULT_FORMAT"],modes:{DEFAULT_FORMAT:{token:"DEFAULT_FORMAT",label:"Bet Max Tourney",description:"Free-form picks throughout the tournament window.",beta:!1,betaMessage:null,tiers:["basic","premium"]}},tiers:{role_to_tier:{},allowed_modes:{basic:["DEFAULT_FORMAT"],premium:["*"]}}}}}const c=ve(()=>{const M=a.appSession?.session_user?.guid;if(!M)return null;const T=a.coreTourn?.length?a.coreTourn[a.coreTourn.length-1]:null;return T&&(T.data||[]).find(Q=>{if(!Q?.creator_guid||Q.creator_guid!==M||Q.is_private!==!0)return!1;const re=Q.status||Q.class;return re==="UPCOMING"||re==="LOCKED"})||null}),u=ve(()=>{const M=c.value?.window_end_time;if(!M)return"";let T=new Date(M);return!M.includes("Z")&&!M.match(/[+-]\d{2}:\d{2}$/)&&(T=new Date(M+"Z")),isNaN(T.getTime())?"":T.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}),d=ve(()=>{const M=a.appSession?.session_user||{};return M.first||M.username||"My"}),p=ve(()=>{const M=new Date().toLocaleString(void 0,{month:"long"});return`${d.value}'s ${M} Pool`}),f=M=>{const T=G=>String(G).padStart(2,"0");return`${M.getFullYear()}-${T(M.getMonth()+1)}-${T(M.getDate())}`},g=(()=>{const M=new Date;return M.setHours(0,0,0,0),M})(),h=(M,T)=>{const G=new Date(M.getTime());return G.setDate(G.getDate()+T),G},E=Array.from({length:g0},(M,T)=>T),m=M=>h(g,M),_=M=>M.toLocaleDateString(void 0,{weekday:"short"}),x=M=>M.toLocaleDateString(void 0,{month:"short",day:"numeric"}),k=M=>M===0?"Today":M===1?"Tomorrow":"",I=[{key:1,label:"1 day"},{key:2,label:"2 days"},{key:3,label:"3 days"},{key:5,label:"5 days"},{key:7,label:"7 days"}],R=(()=>{const M=(6-g.getDay()+7)%7;return M===0?0:M})(),N=Ce({caption:p.value,tagline:"",sportKeys:[],gameMode:"DEFAULT_FORMAT",startOffset:R,lengthDays:3,maxEntrants:10,creatorParticipating:!0}),j=M=>{const T=l.value.find(G=>G.key===M);!T||!T.available||(N.value.gameMode=M)},$=ve(()=>f(h(g,N.value.startOffset))),U=ve(()=>{const M=N.value.startOffset+Math.max(1,N.value.lengthDays)-1;return f(h(g,M))}),z=Ce(typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`draft_${crypto.randomUUID()}`:`draft_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`),F=Ce(!1),V=Ce(""),y=Ce({}),A=Ce(null),S=(M,T=!1)=>{if(!M)return"";const[G,Q,re]=M.split("-").map(Number);return new Date(G,(Q||1)-1,re||1,T?23:0,T?59:0,0,0).toISOString()},D=ve(()=>S($.value,!1)),O=ve(()=>S(U.value,!0)),q=M=>{if(!M)return"";const[T,G,Q]=M.split("-").map(Number);return new Date(T,(G||1)-1,Q||1).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})},X=M=>{if(!M)return NaN;const[T,G,Q]=M.split("-").map(Number);return new Date(T,(G||1)-1,Q||1,0,0,0,0).getTime()},W=ve(()=>{if(!$.value||!U.value)return 0;const M=X($.value),T=X(U.value);return isNaN(M)||isNaN(T)?0:Math.max(1,Math.round((T-M)/(24*3600*1e3))+1)}),oe=ve(()=>{const M=new Set,T=[],G=a.coreTourn?.length?a.coreTourn[a.coreTourn.length-1]:null;if(!G)return T;for(const Q of G.data||[]){const re=Array.isArray(Q.matches_expanded)?Q.matches_expanded:[];for(const pe of re){const be=pe.guid||pe.odds_id||pe.id;!be||M.has(be)||(M.add(be),T.push(pe))}}return T}),se=M=>{if(!M||!D.value||!O.value)return 0;const T=new Date(D.value).getTime(),G=new Date(O.value).getTime();return oe.value.reduce((Q,re)=>{if(re.sport_id!==M)return Q;const pe=re.scheduled_at||"";let be=new Date(pe);!pe.includes("Z")&&!pe.match(/[+-]\d{2}:\d{2}$/)&&(be=new Date(pe+"Z"));const ie=be.getTime();return isNaN(ie)?Q:ie>=T&&ie<=G?Q+1:Q},0)},ae=ve(()=>(a.appMeta?.sports||[]).filter(T=>T.active===!0&&!T.has_outrights).map(T=>({key:T.key,title:T.title||T.description||T.key,group:T.group||"default"})).sort((T,G)=>T.title.localeCompare(G.title))),te=M=>ae.value.find(T=>T.key===M)||{key:M,title:M,group:"default"},ne=ve(()=>N.value.sportKeys.length>=ui),H=M=>{const T=N.value.sportKeys.indexOf(M);if(T>=0){N.value.sportKeys.splice(T,1);return}if(N.value.sportKeys.length>=2){V.value="Free tier is limited to 2 sports. Deselect one first.";return}N.value.sportKeys.push(M)},Z=M=>N.value.sportKeys.includes(M),ee=ve(()=>N.value.sportKeys.reduce((M,T)=>M+se(T),0)),de=ve(()=>{const M={},T=X($.value),G=X(U.value),Q=g.getTime();isNaN(T)?M.window="Pick a start day.":T<Q&&(M.window="Start day can't be in the past."),isNaN(G)?M.window=M.window||"Pick a length.":T&&G<T&&(M.window="End day must be on or after the start day."),N.value.lengthDays>Jn&&(M.window=`Free tier contests max out at ${Jn} days.`);const re=(N.value.caption||"").trim();(re.length<3||re.length>60)&&(M.caption="Name must be 3 to 60 characters."),(N.value.tagline||"").trim().length>120&&(M.tagline="Tagline max is 120 characters.");const be=l.value.find(ge=>ge.key===N.value.gameMode);(!be||!be.available)&&(M.mode="Pick a game mode."),N.value.sportKeys.length<1&&(M.sports="Pick at least one sport."),N.value.sportKeys.length>2&&(M.sports="Free tier is limited to 2 sports.");const ie=Number(N.value.maxEntrants);return ie>=2&&ie<=10||(M.max="Max entrants must be between 2 and 10."),M}),ce=M=>{const T=de.value;return M===1?!T.window&&!T.caption&&!T.tagline:M===2?!T.mode:M===3?!T.sports:M===4?!T.max:M===5?!T.window&&!T.caption&&!T.tagline&&!T.mode&&!T.sports&&!T.max:!0},w=ve(()=>ce(n.value)),L=()=>{if(V.value="",!w.value){V.value="Please complete this step before moving on.",y.value=de.value;return}y.value={},n.value<s.length&&n.value++},v=()=>{V.value="",y.value={},n.value>1&&n.value--},C=M=>{M<n.value&&(n.value=M,V.value="",y.value={})},P=()=>({caption:N.value.caption.trim(),tagline:N.value.tagline.trim()||void 0,sports_allowed:N.value.sportKeys.map(M=>({key:M})),window_start_time:D.value,window_end_time:O.value,entities:{max:Number(N.value.maxEntrants)},creator_participating:N.value.creatorParticipating,game_mode_class:N.value.gameMode,client_draft_id:z.value}),B=M=>{console.warn("[create_tournament_route] server rejected create:",{httpStatus:M?.status,ok:M?.ok,data:M?.data});const T=M?.data?.error||`http_${M?.status||"unknown"}`,G=M?.data?.reason?` (${M.data.reason})`:"",Q=M?.data?.message||M?.data?.detail||"";switch(T){case"invalid_caption":return y.value.caption=`Name rejected${G}.`,n.value=1,"Please fix the tournament name.";case"invalid_tagline":return y.value.tagline=`Tagline rejected${G}.`,n.value=1,"Please fix the tagline.";case"invalid_sports":return y.value.sports=`Sports rejected${G}.`,n.value=3,"Please review your sport selection.";case"invalid_window":return y.value.window=`Window rejected${G}.`,n.value=1,"Please review the tournament window.";case"invalid_max_entrants":return y.value.max="Max entrants rejected.",n.value=4,"Max entrants must be between 2 and 10.";case"invalid_request_shape":return`Request rejected as malformed${Q?": "+Q:""}.`;case"active_limit_reached":return"You already have an active contest. Cancel or finish it first.";case"tier_gate_violation":return`That option isn't available on the free tier yet${M?.data?.field?` (${M.data.field})`:""}.`;case"rate_limited":return"Too many create attempts. Try again in a bit.";case"unauthenticated":return"Your session expired. Please sign in again.";case"internal":return"Server error. Please try again in a moment.";default:return`Server said: ${T}${Q?" · "+Q:""}`}},Y=async()=>{if(V.value="",y.value={},!ce(5)){V.value="Please check all steps before publishing.",y.value=de.value;return}F.value=!0;try{const M=P();console.log("[create_tournament_route] POST /m5t/v5/tournament payload:",M);const T=await xe.createTournament(M);if(console.log("[create_tournament_route] response:",T),T.ok&&T.data?.tournament){const G=T.data.tournament;a.pushCoreTourn({timestamp:Date.now(),source:"API",data:[G]}),typeof neodigmToast<"u"&&neodigmToast.q("Tournament created. Share the link to invite friends.","success"),t.push({name:"preview_route",params:{guid:G.guid},query:G.join_slug?{s:G.join_slug}:void 0});return}V.value=B(T)}catch(M){console.warn("[create_tournament_route] createTournament failed:",M),V.value="Network error. Please try again."}finally{F.value=!1}},J=()=>t.push({name:"home_route"});return rt(()=>{document.body.classList.add("route-create-tournament"),window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),i();try{window.GameTypeLifeCycle&&window.GameTypeLifeCycle.forTournament({class:N.value.gameMode}).doBeforeTournamentCreate({tournament:{class:N.value.gameMode,status:"DRAFT"}}).catch(T=>console.warn("[create_tournament_route] doBeforeTournamentCreate failed (non-fatal):",T?.message))}catch{}requestAnimationFrame(()=>{const M=A.value;if(!M)return;const T=M.querySelector(`[data-offset="${N.value.startOffset}"]`);if(T){const G=T.offsetLeft-M.clientWidth/2+T.offsetWidth/2;M.scrollLeft=Math.max(0,G)}})}),Xt(()=>{document.body.classList.remove("route-create-tournament")}),(()=>{const M=new Date;return M.setHours(0,0,0,0),f(M)})(),(M,T)=>(fe(),he("main",Nv,[b("div",{class:"create-header"},[b("button",{class:"create-header__back",onClick:J,"aria-label":"Back to home"},[...T[4]||(T[4]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),T[5]||(T[5]=b("h1",{class:"create-header__title"},"Create a Tournament",-1))]),b("div",Bv,[(fe(),he($e,null,zt(s,G=>b("div",{key:G.id,class:Ve(["create-steps__dot",{"create-steps__dot--active":G.id===n.value,"create-steps__dot--complete":G.id<n.value}]),onClick:Q=>C(G.id)},[b("span",zv,me(G.id),1),b("span",Hv,me(G.label),1)],10,Fv)),64))]),b("div",Uv,[V.value?(fe(),he("div",Gv,me(V.value),1)):Te("",!0),n.value===1?(fe(),he("section",jv,[c.value?(fe(),he("div",Vv,[T[6]||(T[6]=b("span",{class:"create-banner__tag create-banner__tag--gate"},"ACTIVE POOL",-1)),b("span",qv,[b("strong",null,me(c.value.caption||"Your pool"),1),Be(" is still running"+me(u.value?` through ${u.value}`:"")+". Free tier runs one pool at a time, so your next one opens up as soon as this one wraps. ",1)])])):Te("",!0),T[12]||(T[12]=b("div",{class:"create-banner create-banner--dev",role:"status"},[b("span",{class:"create-banner__tag"},"BETA"),b("span",{class:"create-banner__msg"},"Feature in active development.")],-1)),T[13]||(T[13]=b("h4",{class:"create-step__heading"},"Name it and set the window",-1)),T[14]||(T[14]=b("p",{class:"create-step__hint"},"Quick setup: a name for the invite, a start day, and how long it runs.",-1)),b("label",Yv,[T[7]||(T[7]=b("span",{class:"create-field__label"},"Name",-1)),Lt(b("input",{type:"text","onUpdate:modelValue":T[0]||(T[0]=G=>N.value.caption=G),maxlength:"60",placeholder:"Name your tournament",autocapitalize:"words",autocomplete:"off",enterkeyhint:"next",class:Ve(["create-field__input",{"create-field__input--error":y.value.caption}])},null,2),[[Ns,N.value.caption]]),y.value.caption?(fe(),he("span",Kv,me(y.value.caption),1)):(fe(),he("span",Wv,me((N.value.caption||"").length)+" / 60",1))]),b("label",Jv,[T[8]||(T[8]=b("span",{class:"create-field__label"},[Be("Tagline "),b("span",{class:"create-field__optional"},"(optional)")],-1)),Lt(b("input",{type:"text","onUpdate:modelValue":T[1]||(T[1]=G=>N.value.tagline=G),maxlength:"120",placeholder:"One line about your contest",autocapitalize:"sentences",autocomplete:"off",enterkeyhint:"next",class:Ve(["create-field__input",{"create-field__input--error":y.value.tagline}])},null,2),[[Ns,N.value.tagline]]),y.value.tagline?(fe(),he("span",Xv,me(y.value.tagline),1)):(fe(),he("span",Qv,me((N.value.tagline||"").length)+" / 120",1))]),b("div",Zv,[T[9]||(T[9]=b("span",{class:"create-field__label"},"Starts",-1)),b("div",{class:"create-day-scroller",ref_key:"dayScrollerEl",ref:A},[(fe(!0),he($e,null,zt(ct(E),G=>(fe(),he("button",{key:G,type:"button",class:Ve(["create-day-chip",{"create-day-chip--on":N.value.startOffset===G}]),"data-offset":G,onClick:Q=>N.value.startOffset=G},[b("span",t_,me(_(m(G))),1),b("span",a_,me(x(m(G))),1),k(G)?(fe(),he("span",s_,me(k(G)),1)):Te("",!0)],10,e_))),128))],512)]),b("div",n_,[T[10]||(T[10]=b("span",{class:"create-field__label"},"Length",-1)),b("div",o_,[(fe(),he($e,null,zt(I,G=>b("button",{key:G.key,type:"button",class:Ve(["create-chip",{"create-chip--on":N.value.lengthDays===G.key}]),onClick:Q=>N.value.lengthDays=G.key},me(G.label),11,r_)),64))]),y.value.window?(fe(),he("span",i_,me(y.value.window),1)):(fe(),he("span",l_,"Free tier runs up to "+me(Jn)+" days."))]),W.value>0?(fe(),he("div",c_,[b("div",d_,[b("span",u_,me(q($.value)),1),T[11]||(T[11]=b("span",{class:"create-duration__arrow"},"→",-1)),b("span",p_,me(q(U.value)),1)]),b("div",f_,[b("span",h_,me(W.value),1),b("span",g_,me(W.value===1?"day":"days")+" of play",1)])])):Te("",!0)])):Te("",!0),n.value===2?(fe(),he("section",m_,[T[17]||(T[17]=b("h4",{class:"create-step__heading"},"Choose a game mode",-1)),T[18]||(T[18]=b("p",{class:"create-step__hint"}," Modes available to you depend on your tier. Locked tiles are available with Premium. ",-1)),b("div",b_,[(fe(!0),he($e,null,zt(l.value,G=>(fe(),he("button",{key:G.key,type:"button",class:Ve(["create-mode",{"create-mode--on":N.value.gameMode===G.key&&G.available,"create-mode--disabled":!G.available}]),disabled:!G.available,"aria-disabled":!G.available,title:G.available?G.betaMessage||"":"Requires Premium",onClick:Q=>j(G.key)},[b("div",__,[b("span",y_,me(G.title),1),b("span",{class:Ve(["create-mode__tagline",{"create-mode__tagline--soon":!G.available,"create-mode__tagline--beta":G.available&&G.beta}])},me(G.tagline),3)]),b("p",w_,me(G.description),1),N.value.gameMode===G.key&&G.available?(fe(),he("span",x_,[...T[15]||(T[15]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"20 6 9 17 4 12"})],-1)])])):Te("",!0),G.available?Te("",!0):(fe(),he("span",T_,[...T[16]||(T[16]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[b("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),b("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)])]))],10,v_))),128))]),y.value.mode?(fe(),he("span",S_,me(y.value.mode),1)):Te("",!0)])):Te("",!0),n.value===3?(fe(),he("section",k_,[b("div",E_,[T[20]||(T[20]=b("div",null,[b("h4",{class:"create-step__heading",style:{"margin-bottom":"4px"}},"Pick your sports"),b("p",{class:"create-step__hint",style:{margin:"0"}},"Tap a chip to add it. Games scheduled during your window will be added automatically as odds post.")],-1)),b("div",{class:Ve(["create-sports-counter",{"create-sports-counter--max":ne.value}])},[b("span",A_,me(N.value.sportKeys.length),1),T[19]||(T[19]=b("span",{class:"create-sports-counter__divider"},"/",-1)),b("span",{class:"create-sports-counter__max"},me(ui))],2)]),b("div",C_,[(fe(!0),he($e,null,zt(ae.value,G=>(fe(),he("button",{key:G.key,type:"button",class:Ve(["create-sport-pick",{"create-sport-pick--on":Z(G.key),"create-sport-pick--disabled":ne.value&&!Z(G.key)}]),disabled:ne.value&&!Z(G.key),onClick:Q=>H(G.key)},[b("span",O_,[b("bma-sport-icon",{sport:G.key,"data-sport-group":G.group},null,8,L_)]),b("span",M_,me(G.title),1),Z(G.key)?(fe(),he("span",D_,[...T[21]||(T[21]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"20 6 9 17 4 12"})],-1)])])):Te("",!0)],10,P_))),128))]),y.value.sports?(fe(),he("span",R_,me(y.value.sports),1)):Te("",!0),N.value.sportKeys.length>0?(fe(),he("div",I_,[T[23]||(T[23]=b("div",{class:"create-slate__label"},"Your slate",-1)),b("div",$_,[(fe(!0),he($e,null,zt(N.value.sportKeys,G=>(fe(),he("div",{key:G,class:"create-slate-row"},[b("span",N_,[b("bma-sport-icon",{sport:G,"data-sport-group":te(G).group},null,8,B_)]),b("div",F_,[b("span",z_,me(te(G).title),1),se(G)>0?(fe(),he("span",H_,me(se(G))+" game"+me(se(G)===1?"":"s")+" available this window",1)):(fe(),he("span",U_," Games will be added when odds post "))]),b("button",{class:"create-slate-row__remove",type:"button","aria-label":"Remove "+te(G).title,onClick:Q=>H(G)},[...T[22]||(T[22]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),b("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,G_)]))),128))]),ee.value>0?(fe(),he("div",j_,me(ee.value)+" game"+me(ee.value===1?"":"s")+" already on the slate · more added during the tournament. ",1)):(fe(),he("div",V_," No games are on the slate yet. They'll populate as odds post. "))])):Te("",!0)])):Te("",!0),n.value===4?(fe(),he("section",q_,[T[26]||(T[26]=b("h4",{class:"create-step__heading"},"How many players?",-1)),T[27]||(T[27]=b("p",{class:"create-step__hint"},"Up to 10 on the free tier. You're in by default — toggle off if you're just hosting.",-1)),b("label",Y_,[T[24]||(T[24]=b("span",{class:"create-field__label"},"Max Entrants",-1)),Lt(b("input",{type:"number",min:"2",max:"10",inputmode:"numeric",pattern:"[0-9]*","onUpdate:modelValue":T[2]||(T[2]=G=>N.value.maxEntrants=G),class:Ve(["create-field__input create-field__input--num",{"create-field__input--error":y.value.max}])},null,2),[[Ns,N.value.maxEntrants,void 0,{number:!0}]]),y.value.max?(fe(),he("span",K_,me(y.value.max),1)):(fe(),he("span",W_,"Free tier max is 10."))]),b("label",J_,[Lt(b("input",{type:"checkbox","onUpdate:modelValue":T[3]||(T[3]=G=>N.value.creatorParticipating=G)},null,512),[[Ol,N.value.creatorParticipating]]),T[25]||(T[25]=b("span",null,"I'm playing in this tournament",-1))]),T[28]||(T[28]=b("p",{class:"create-step__note"}," You'll be able to invite friends by User Name or Email once your pool is published. Look for the Invite panel on the pool's info page. ",-1))])):Te("",!0),n.value===5?(fe(),he("section",X_,[T[36]||(T[36]=b("h4",{class:"create-step__heading"},"Ready to publish?",-1)),T[37]||(T[37]=b("p",{class:"create-step__hint"},"Here's what your invitees will see. Tap any step number above to edit.",-1)),b("div",Q_,[b("div",Z_,[T[29]||(T[29]=b("span",{class:"create-review-label"},"Name",-1)),b("span",e0,me(N.value.caption),1)]),N.value.tagline?(fe(),he("div",t0,[T[30]||(T[30]=b("span",{class:"create-review-label"},"Tagline",-1)),b("span",a0,me(N.value.tagline),1)])):Te("",!0),b("div",s0,[T[31]||(T[31]=b("span",{class:"create-review-label"},"Dates",-1)),b("span",n0,me(q($.value))+" → "+me(q(U.value)),1)]),b("div",o0,[T[32]||(T[32]=b("span",{class:"create-review-label"},"Sports",-1)),b("span",r0,[(fe(!0),he($e,null,zt(N.value.sportKeys,G=>(fe(),he("span",{key:G,class:"create-review-pill"},me((ae.value.find(Q=>Q.key===G)||{}).title||G)+" · "+me(se(G)),1))),128))])]),b("div",i0,[T[33]||(T[33]=b("span",{class:"create-review-label"},"Players",-1)),b("span",l0,"Up to "+me(N.value.maxEntrants)+" · "+me(N.value.creatorParticipating?"you're in":"hosting only"),1)]),b("div",c0,[T[34]||(T[34]=b("span",{class:"create-review-label"},"Format",-1)),b("span",d0,me((l.value.find(G=>G.key===N.value.gameMode)||{}).title||"Bet Max Tourney")+" · Fixed Slate · TD$ 500",1)]),T[35]||(T[35]=b("div",{class:"create-review-row"},[b("span",{class:"create-review-label"},"Trophies"),b("span",{class:"create-review-value"},"1 Gold · 1 Silver · 1 Bronze")],-1))])])):Te("",!0),b("div",u0,[b("button",{class:"create-nav__btn create-nav__btn--ghost",onClick:v,disabled:n.value===1||F.value},"Back",8,p0),n.value<s.length?(fe(),he("button",{key:0,class:"create-nav__btn create-nav__btn--primary",onClick:L,disabled:!w.value},"Next",8,f0)):(fe(),he("button",{key:1,class:"create-nav__btn create-nav__btn--primary",onClick:Y,disabled:F.value},me(F.value?"Publishing…":"Publish Tournament"),9,h0))])])]))}},is=sf({history:$p(),routes:[{path:"/",name:"splash_route",component:si},{path:"/splash_route",name:"splash_route",component:si},{path:"/error_route",name:"error_route",component:Ps},{path:"/forgot_route",name:"forgot_route",component:Nm},{path:"/resetforgot_route",name:"resetforgot_route",component:Ps},{path:"/resethash_route",name:"resethash_route",component:Km},{path:"/signin_route",name:"signin_route",component:cm},{path:"/signout_route",name:"signout_route",component:pm},{path:"/signup_route",name:"signup_route",component:Lm},{path:"/verf_link_route",name:"verf_link_route",component:tb},{path:"/offline_route",name:"offline_route",component:Ps},{path:"/home_route",name:"home_route",component:Gg},{path:"/profile_route",name:"profile_route",component:vb},{path:"/top_players_route",name:"top_players_route",component:Sb},{path:"/play_route",name:"play_route",component:Lb},{path:"/create_tournament_route",name:"create_tournament_route",component:m0},{path:"/preview/:guid",name:"preview_route",component:$v,meta:{previewAllowed:!0}},{path:"/appFAQ",name:"appFAQ",component:Ps},{path:"/appHelp",name:"appHelp",component:Kg}]});is.beforeEach((e,t,a)=>{if(e.query.brand!==void 0){const s=e.query.brand;s==="null"||s===""?Ua.clearBrand():Ua.setBrand(s);const n={...e.query};delete n.brand,a({...e,query:n,replace:!0})}else a()});class b0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Me.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT_FORMAT"}get gameModeBadge(){if(typeof window.GameTypeLifeCycle>"u")return null;const t=window.GameTypeLifeCycle.forToken(this.gameType);return t?t.badge:null}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),a=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(a)?a[1]?.length||0:a.guids?.length||0,max:Array.isArray(a)?parseInt(a[0]?.max||0):a.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Me.theme}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return!1;try{const s=this.getAttribute("data-bma-tourn-entities"),n=s?JSON.parse(s):{guids:[]};return(Array.isArray(n)?n[1]||[]:n.guids||[]).includes(a)}catch{return!1}}getUserTrophy(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;try{const s=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const n of s){if(typeof n!="object"||!n)continue;let o=null;if(n.entity_guid===a&&n.badge?o=n.badge:n[a]&&(o=n[a]),o?.includes("gold"))return"gold";if(o?.includes("silver"))return"silver";if(o?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let a=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z"));const s=Date.now(),n=a.getTime()-s;if(n<=0)return null;const o=Math.floor(n/864e5),r=Math.floor(n%864e5/36e5),l=Math.floor(n%36e5/6e4);return o>0?`${o}d ${r}h`:r>0?`${r}h ${l}m`:`${l}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const a=this.getCountdown();t.textContent=a||"",a||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},a=this.sportsAllowed;if(!Array.isArray(a)||a.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const s=Math.min(a.length,3);let n="";for(let o=0;o<s;o++){const r=a[o].key||a[o],l=qe.find(u=>u.key===r),i=l?l.group:"default",c=t[r]||r.replace(/^[a-z]+_/,"").toUpperCase();n+=`<span class="lc__sport-item"><bma-sport-icon sport="${r}" data-sport-group="${i}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return a.length>3&&(n+=`<span class="lc__sport-count" data-sport-overflow="true">+${a.length-3}</span>`),n}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(a=>{const s=a.key||a;return t[s]||s.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,a,s,n){const o=(t-a)/2,r=2*Math.PI*o,l=r-s/100*r,i=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${i}" cy="${i}" r="${o}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${a}" />
            <circle cx="${i}" cy="${i}" r="${o}"
                fill="none" stroke="${n}" stroke-width="${a}"
                stroke-linecap="round"
                stroke-dasharray="${r}"
                stroke-dashoffset="${l}"
                transform="rotate(-90 ${i} ${i})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),this.dispatchAction(a.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",a=>{a.stopPropagation();const s=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(s,"info")})}render(){const t=this.isUserParticipating(),a=this.getUserTrophy(),s=this.status.toLowerCase(),n=t&&this.status!=="COMPLETED",o=!t&&this.status==="UPCOMING";this.userRank,(this.entities.current/(this.entities.max||1)*100).toFixed(1);const r=this.getCountdown();return this._renderSlim({isParticipating:t,trophy:a,statusClass:s,showPlay:n,showJoin:o,countdown:r})}_renderSlim({statusClass:t,showPlay:a,showJoin:s,trophy:n,countdown:o}){this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating");const r=this.status==="LOCKED"?"IN PROGRESS":this.status==="UPCOMING"?"OPEN":this.status==="COMPLETED"?"COMPLETED":this.status,l=(()=>{if(this.matches==0)return"TBD";let k="";try{JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(R=>R.override_last_match_close===!0)&&(k="+")}catch{}return`${this.matches}${k}`})();this.entryFee&&this.entryFee!=="Free"&&this.entryFee;const i=parseFloat(this.tournamentDollars||0).toLocaleString(),c=`${this.entities.current}/${this.entities.max}`,u=this.status==="COMPLETED"?"Ended":this.status==="LOCKED"?"Ends":this.status==="UPCOMING"?"Locks":"Starts",d=o||(this.status==="COMPLETED"?"—":"Soon"),p=(this.sportsAllowed||[]).slice(0,3).map(k=>{const I=k.key||"",R=qe.find($=>$.key===I),N=R?.group||"default",j=R?.abbr||R?.title||I.split("_").pop().toUpperCase().slice(0,4);return`
                    <span class="lcs__sport">
                        <bma-sport-icon sport="${I}" data-sport-group="${N}"></bma-sport-icon>
                        <span class="lcs__sport-label">${j}</span>
                    </span>
                `}).join(""),f=(this.sportsAllowed?.length||0)>3?`<span class="lcs__sport-more">+${this.sportsAllowed.length-3}</span>`:"";let g="";n?g=`<div class="lcs__trophy-hero lcs__trophy-hero--${n}" aria-label="You won ${n}"></div>`:this.status==="COMPLETED"&&this.isUserParticipating()&&this.userRank!=="-"&&this.userRank!==""&&(g=`
                <div class="lcs__rank-hero" aria-label="Your rank ${this.userRank} of ${this.userTotal}">
                    <span class="lcs__rank-hero__place">#${this.userRank}</span>
                    <span class="lcs__rank-hero__total">/ ${this.userTotal}</span>
                </div>
            `);const E=this.gameModeBadge?.label||(this.gameType==="DEFAULT_FORMAT"?"Bet Max Tourney":""),m=E?`<span class="lcs__pill lcs__pill--neutral">${E}</span>`:"",_=`<span class="lcs__pill lcs__pill--${t}">${r}</span>`,x=(()=>{const k=`<button class="lcs__btn lcs__btn--info" data-action="INFO" aria-label="Info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span>Info</span>
            </button>`;let I="";return a?I='<button class="lcs__btn lcs__btn--play" data-action="PLAY" aria-label="Play"><span>Play</span></button>':s?I='<button class="lcs__btn lcs__btn--join" data-action="JOIN" aria-label="Join"><span>Join</span></button>':I='<button class="lcs__btn lcs__btn--view" data-action="INFO" aria-label="View"><span>View</span></button>',`${k}${I}`})();this.shadowRoot.innerHTML=`
            <style>
                ${je()}
                ${ha()}

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
                            ${_}
                            ${g}
                            <div class="lcs__actions">
                                ${x}
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
        `}}customElements.define("bma-tournament-list-card",b0);const Et={},Xn={},v0={pending:"pending",accepted:"accepted",declined:"declined",expired:"expired",pool_full:"pool was full",revoked:"revoked",joined:"joined via link"};function pi(e){switch(e){case"tournament_not_live":return"This tournament isn't accepting bets right now.";case"not_in_tournament":return"Join the tournament before placing bets.";case"match_already_final":return"This match has already ended.";case"bet_type_not_allowed":return"This bet type isn't allowed in this game mode.";case"bet_type_incompatible_with_sport":return"This bet type isn't available for this sport.";case"stake_out_of_bounds":return"Stake is outside the allowed range.";case"max_bets_total_exceeded":return"You've reached the total bet limit for this tournament.";case"max_bets_per_type_exceeded":return"You've reached the limit for this bet type.";case"duplicate_bet":return"You already have this bet type on this match.";case"missing_required_bet_type":return"Add the missing bet type to qualify.";case"min_bets_not_met":return"Place more bets to meet the minimum.";case"tournament_not_found":return"Tournament not found.";case"match_not_found":return"Match not found.";default:return e||"Bet rejected."}}const La=e=>{const t=document.querySelector(`[data-info-invite-sent-list][data-tournament-guid="${e}"]`);if(!t)return;const a=Et[e]||[];if(a.length===0){t.innerHTML="";return}const s=[...a].sort((n,o)=>new Date(o.invited_at||0)-new Date(n.invited_at||0));t.innerHTML=s.map(n=>{const o=n.invitee_display_name||n.invitee_user_name||"Invitee",r=(n.status||"PENDING").toLowerCase(),l=v0[r]||r;return`
      <div class="info-invite-sent-row">
        <div class="info-invite-sent-row__main">
          <span class="info-invite-sent-row__name">${o}</span>
          <span class="info-invite-sent-row__status info-invite-sent-row__status--${r}">${l}</span>
        </div>
        ${r==="pending"?`<button class="info-invite-sent-row__revoke" type="button" data-info-revoke="${n.guid}">Revoke</button>`:""}
      </div>
    `}).join("")},Fs=`
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
`.trim();typeof window<"u"&&(window.EMPTY_BETSLIP_HTML=Fs);const Pe={updateTDBalance(e,t){const a=document.querySelector(e);if(!a)return;t%1!==0?a.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,a,s=null,n=0){const o=document.querySelector("#summary-balance"),r=document.querySelector("#summary-stake"),l=document.querySelector("#summary-payout");o&&(this.updateTDBalance("#summary-balance",e),e<0?o.classList.add("summary-cell__red"):o.classList.remove("summary-cell__red")),r&&(r.textContent=t.toFixed(2)),l&&(l.textContent=a.toFixed(2),a<0?l.classList.add("summary-cell__red"):l.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(i){let u="";if(s){const p=s.tournament_dollars||0,f=e-p;f>0?u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(u=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const d=e<0?"#FF5252":"#00E676";i.innerHTML=`<span style="color: ${d};">TD$ ${e.toLocaleString()}</span>${u}`}if(c){const u=n||a||0;let d="";u>0&&(d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${u.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${d}`}if(s&&s.tournament_dollars){const u=s.tournament_dollars,d=document.querySelector(".dash-stat__gauge-fill--balance");if(d){const f=Math.max(e/u*100,0);d.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(t/u*100,100);p.style.width=`${f}%`}}this.updateBetSlipToggleSummary()},updateBetSlipToggleSummary(){const e=document.getElementById("bet-grid-toggle-count"),t=document.querySelector(".bet-grid__toggle-container");if(!e||!t)return;const a=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").length;e.textContent=a,t.classList.toggle("bet-grid__toggle-container--has-bets",a>0);const s=document.getElementById("bet-slip-tab-slip-badge");s&&(s.textContent=a,s.style.visibility=a>0?"visible":"hidden");const n=document.getElementById("bet-slip-tab-mybets-badge");if(n){const o=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing").length;n.textContent=o,n.style.visibility=o>0?"visible":"hidden"}},_globalLBCache:{},async prefetchGlobalLeaderboard(e="ALL"){const a=this._globalLBCache[e];if(a?.data&&Date.now()-a.ts<3e5)return a.data;if(a?.inflight)return null;this._globalLBCache[e]={data:a?.data||null,ts:a?.ts||0,inflight:!0};try{const s=await xe.fetchAllTimeLeaderboard(e,100,"td");return this._globalLBCache[e]={data:s,ts:Date.now(),inflight:!1},console.log(`[appEvents] All-time leaderboard prefetched [${e}]:`,s?.count||0,"rows, last_updated:",s?.last_updated),s}catch(s){return console.warn(`[appEvents] All-time leaderboard prefetch failed [${e}]:`,s),this._globalLBCache[e]&&(this._globalLBCache[e].inflight=!1),null}},_betStatsCache:{stats:null,ts:0,inflight:!1},async _ensureBetStatsCache(e){const a=Date.now();if(this._betStatsCache.stats&&a-this._betStatsCache.ts<3e5)return this._betStatsCache.stats;if(this._betStatsCache.inflight)return null;this._betStatsCache.inflight=!0;try{const n=(await xe.fetchBetSlips(e))?.rows||[];let o=0,r=0,l=0;return n.forEach(i=>{(i.bet||[]).forEach(u=>{Object.keys(u).forEach(d=>{if(d==="short_title")return;const p=u[d];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?o++:r++:l++)})})}),this._betStatsCache={stats:{wins:o,losses:r,pending:l},ts:a,inflight:!1},this._betStatsCache.stats}catch(s){return console.warn("[app_events] fetchBetSlips failed for stats panel",s),this._betStatsCache.inflight=!1,null}},buildStatsPanel(e,t,a=null){if(!t||!e||e.length===0)return"";const s=e.filter(g=>(g.entities?.guids||[]).includes(t)),n=s.filter(g=>(g.status||g.class)==="COMPLETED").length;let o=0,r=0;s.forEach(g=>{(Array.isArray(g.tags)?g.tags:[]).forEach(E=>{if(!E||typeof E!="object")return;const m=(E.entity_guid===t?E.badge:null)||(typeof E[t]=="string"?E[t]:null);typeof m=="string"&&m.startsWith("--badge__ribbon--")&&(r++,m==="--badge__ribbon--gold"&&o++)})});const l={};s.forEach(g=>{(Array.isArray(g.sports_allowed)?g.sports_allowed:[]).forEach(E=>{const _=qe.find(x=>x.key===E.key)?.group||"Other";l[_]=(l[_]||0)+1})});let i="—",c="",u=0;Object.entries(l).forEach(([g,h])=>{h>u&&(u=h,i=g,c=g)});let d="—",p="Pending";if(a){const g=a.wins+a.losses;g>0?(d=`${Math.round(a.wins/g*100)}%`,p=`${a.wins}-${a.losses}`):(d="—",p="No settled bets")}const f=c?`<bma-sport-icon data-sport-group="${c.toLowerCase()}"></bma-sport-icon>`:"";return`
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
                        <span class="stats-row__value">${o}</span>
                    </div>
                    <div class="stats-row">
                        <span class="stats-row__label">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2.39 5.18L20 8l-4 3.9.94 5.5L12 14.78 7.06 17.4 8 11.9 4 8l5.61-.82L12 2z"/></svg>
                            Total Trophies
                        </span>
                        <span class="stats-row__value">${r}</span>
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
        `},categorizeTournaments(e,t,a,s,n={}){const o=[],{subStatus:r="all",sort:l="default",result:i="all",odds:c="all"}=n,u=$=>($.entities?.guids||[]).includes(s),d=$=>$.status==="UPCOMING"||$.class==="UPCOMING",p=$=>$.status==="LOCKED"||$.class==="LOCKED",f=$=>d($)||p($),g=$=>$.status==="COMPLETED"||$.class==="COMPLETED",h=$=>Array.isArray($.matches_expanded)&&$.matches_expanded.length>0,E=($,U)=>($.sports_allowed||[]).some(z=>z.key===U),m=$=>{if(!$)return"";const U=String($),z=U.toLowerCase(),F=qe.find(V=>V.key===U||String(V.key).toLowerCase()===z||String(V.title||"").toLowerCase()===z);return F?.title?F.title:/^[a-zA-Z]{2,5}$/.test(U)?U.toUpperCase():U},_=$=>{const U=$.tags||[];for(const z of U)if(!(typeof z!="object"||!z)&&(z.entity_guid===s&&z.badge||z[s]))return!0;return!1},x=$=>{if(l==="default")return $;const U=[...$];switch(l){case"starting_soon":U.sort((z,F)=>new Date(z.window_start_time||0)-new Date(F.window_start_time||0));break;case"most_entrants":U.sort((z,F)=>(F.entities?.guids?.length||0)-(z.entities?.guids?.length||0));break;case"fewest_spots":U.sort((z,F)=>{const V=(z.entities?.max||0)-(z.entities?.guids?.length||0),y=(F.entities?.max||0)-(F.entities?.guids?.length||0);return V-y});break;case"recently_active":U.sort((z,F)=>new Date(F.status_time||0)-new Date(z.status_time||0));break;case"newest":U.sort((z,F)=>new Date(F.status_time||0)-new Date(z.status_time||0));break;case"td_high":U.sort((z,F)=>parseFloat(F.tournament_dollars||0)-parseFloat(z.tournament_dollars||0));break;case"td_low":U.sort((z,F)=>parseFloat(z.tournament_dollars||0)-parseFloat(F.tournament_dollars||0));break}return U},k=$=>i==="all"?$:i==="trophy"?$.filter(U=>_(U)):i==="no_trophy"?$.filter(U=>!_(U)):$;let I=e,R="",N=a||"all";if(a==="multi"?(I=e.filter($=>($.sports_allowed?.length||0)>1),R="Multi-Sport "):a!=="all"&&(I=e.filter($=>E($,a)),R=m(a)+" "),t==="lobby"){const $=n.lobbySubTab||"active";let U=I.filter(z=>z.is_private!==!0);if($==="completed"){const z=x(U.filter(F=>g(F))).slice(0,20);z.length>0?o.push({title:`Recently Completed ${R}Tournaments`,tournaments:z}):o.push({title:`Recently Completed ${R}Tournaments`,tournaments:[],emptyMessage:"No recently completed tournaments",emptySubtext:"Finished public tournaments will show up here."})}else{let z=U.filter(y=>f(y));r==="open"?z=z.filter(y=>d(y)):r==="locked"&&(z=z.filter(y=>p(y)));const F=x(z.filter(y=>d(y)&&!u(y)));o.push({title:`Open Entry ${R}Tournaments`,tournaments:F});const V=x(z.filter(y=>p(y)&&!u(y)));V.length>0&&o.push({title:`In Progress - Entry Closed ${R}Tournaments`,tournaments:V})}}else if(t==="my"){const $=n.mySubTab||"active",U=I.filter(z=>u(z));if($==="completed"){const z=k(U.filter(V=>g(V))),F=x(z);F.length>0?o.push({title:`Your Completed ${R}Tournaments`,tournaments:F}):o.push({title:`Completed ${R}Tournaments`,tournaments:[],emptyMessage:"No completed contests yet",emptySubtext:"Finished tournaments you joined will show here."})}else{let z=U.filter(V=>f(V));r==="active"?z=z.filter(V=>p(V)):r==="upcoming"&&(z=z.filter(V=>d(V))),c==="available"?z=z.filter(V=>h(V)):c==="none"&&(z=z.filter(V=>!h(V)));const F=x(z);F.length>0?o.push({title:`Your Active ${R}Tournaments`,tournaments:F}):o.push({title:`Active ${R}Tournaments`,tournaments:[],emptyMessage:"No active contests",emptySubtext:"Join a tournament from the Lobby and it'll show up here."})}}else if(t==="private")if((n.privateSubTab||"all")==="invites")o.push({title:"Invites",tournaments:[],emptyMessage:"No pending invites",emptySubtext:null});else{const U=I.filter(V=>V.is_private===!0),z=x(U.filter(V=>V.creator_guid&&V.creator_guid===s)),F=x(U.filter(V=>(!V.creator_guid||V.creator_guid!==s)&&u(V)));z.length>0&&o.push({title:"Running",tournaments:z}),F.length>0&&o.push({title:"Playing In",tournaments:F}),z.length===0&&F.length===0&&o.push({title:"Bet Max Pools",tournaments:[],emptyMessage:"No pools yet",emptySubtext:"Start your own Bet Max Pool. Your contest, your rules."})}else o.push({title:"Tournaments",tournaments:e});const j=N==="all"||N==="multi"?"":m(N);return o.forEach($=>{$.sportKey=N,$.sportLabel=j}),o},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=Se();t.appSession?.session_user?.guid;const a=e.tournament_dollars||1e4;let s=0,n=0,o=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const E=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.tournament_guid===e.guid);console.log("[Dashboard Update] Found",E.length,"existing bets for this tournament"),E.forEach(m=>{(m.bet||[]).forEach(x=>{Object.keys(x).filter(I=>I!=="short_title").forEach(I=>{const R=x[I];R&&(R.stake&&(s+=parseFloat(R.stake)),R.reconciled===!0&&R.payout>0&&(n+=parseFloat(R.payout)))})})})}const r=document.querySelector("#summary-stake");if(r){const h=parseFloat(r.textContent)||0;o=Math.max(0,h-s),console.log("[Dashboard Update] Summary total stakes:",h,"Pending:",o)}const l=s+o,i=a-s-o+n;console.log("[Dashboard Update] TD$:",a,"Committed:",s,"Pending:",o,"Payouts:",n,"=> Balance:",i);const c=document.getElementById("dashboard-td-balance");if(c){const h=i-a;let E="";h>0?E=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${h.toLocaleString()})</span>`:h<0&&(E=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${h.toLocaleString()})</span>`);const m=i<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${m};">TD$ ${i.toLocaleString()}</span>${E}`}const u=document.getElementById("dashboard-td-pending"),d=document.querySelector(".dash-stat__gauge-fill--pending");if(u){const h=o>0?o:l,E=n||0;let m="";if(E>0&&(m=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${E.toLocaleString()})</span>`),u.innerHTML=`TD$ ${h.toLocaleString()}${m}`,d){const _=Math.min(h/a*100,100);d.style.width=`${_}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const h=Math.max(i/a*100,0);p.style.width=`${h}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&e){const h=e.entities?.guids?.length||0,E=e.entities?.max||100,m=h/E*100;f.style.width=`${m}%`}const g=document.getElementById("game-mode-progress");if(g){const h=e.class||"DEFAULT_FORMAT",E=t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.coreTournaments__guid===e.guid||m.tournament_guid===e.guid):[];g.setAttribute("data-game-mode-class",h),g.setAttribute("data-starting-td",String(e.tournament_dollars||0)),g.setAttribute("data-tags",JSON.stringify(e.tags||[])),g.setAttribute("data-bets",JSON.stringify(E))}},renderMatchCards(e){if(!e)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const a=Array.isArray(e.sports_allowed)?e.sports_allowed:[],s=g=>{t.querySelectorAll("bma-bet-match-card").forEach(E=>{const m=E.getAttribute("data-sport-key")||"";E.style.display=g==="all"||m===g?"":"none"}),t.querySelectorAll(".play-match-group-header").forEach(E=>{let m=E.nextElementSibling,_=!1;for(;m&&!m.classList.contains("play-match-group-header");){if(m.tagName==="BMA-BET-MATCH-CARD"&&m.style.display!=="none"){_=!0;break}m=m.nextElementSibling}E.style.display=_?"":"none"})},o=new Set(["all",...a.map(g=>g.key)]).has(Xn[e.guid])?Xn[e.guid]:"all";if(a.length>1){const g=document.createElement("bma-play-sport-rail"),h=a.map(E=>{const m=qe.find(_=>_.key===E.key)||{};return{key:E.key,title:m.title||E.title||E.key,group:m.group||""}});g.setAttribute("data-sports",JSON.stringify(h)),g.setAttribute("data-selected",o),g.addEventListener("sport-rail-change",E=>{const m=E.detail?.key||"all";Xn[e.guid]=m,s(m)}),t.appendChild(g)}if(!e.matches_expanded||!Array.isArray(e.matches_expanded)||e.matches_expanded.length===0){t.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const r=new Date,l=g=>{let h=null;try{h=typeof g.scoreboard_data=="string"?JSON.parse(g.scoreboard_data):g.scoreboard_data}catch{}const E=(h?.time_remaining||"").toString().trim().toLowerCase();if(E)return E==="final"||E.startsWith("final")||E==="game over"||E==="ended"?"final":"live";const m=new Date(g.scheduled_at).getTime();if(isNaN(m))return"upcoming";const _=r.getTime();if(_<m)return"upcoming";const x=14400*1e3;return _-m>x?"final":"live"},i={upcoming:[],live:[],final:[]};e.matches_expanded.forEach(g=>i[l(g)].push(g)),i.upcoming.sort((g,h)=>new Date(g.scheduled_at)-new Date(h.scheduled_at)),i.live.sort((g,h)=>new Date(g.scheduled_at)-new Date(h.scheduled_at)),i.final.sort((g,h)=>new Date(h.scheduled_at)-new Date(g.scheduled_at));const c=[{key:"upcoming",label:"Upcoming",matches:i.upcoming},{key:"live",label:"Live",matches:i.live},{key:"final",label:"Final",matches:i.final}],d=c.filter(g=>g.matches.length>0).length>1,p=[];c.forEach(g=>{g.matches.length!==0&&(d&&p.push({kind:"header",section:g}),g.matches.forEach(h=>p.push({kind:"match",match:h})))});const f=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let E=0;h&&Se().coreTourn.length>0&&(E=Se().coreTourn[Se().coreTourn.length-1].data.find(N=>N.guid===h)?.tournament_dollars||0);const m=document.querySelector(".bet-grid__slip-BETSLIP-content"),_=m?m.querySelectorAll("bma-bet-entry"):[],x=Array.from(_).map(I=>({matchGuid:I.getAttribute("data-match-guid"),type:I.getAttribute("data-content-type"),teamPoints:I.getAttribute("data-content-team-points"),odds:I.getAttribute("data-content-odds"),stake:I.getAttribute("data-stake"),payout:I.getAttribute("data-payout"),matchTitle:I.getAttribute("data-match-title"),abbreviatedTitle:I.getAttribute("data-abbreviated-title"),scheduledAt:I.getAttribute("data-scheduled-at")})),k=Se();le.publish(k.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:E,bets:x,timestamp:Date.now()}))};p.forEach(g=>{if(g.kind==="header"){const k=document.createElement("div");k.className=`play-match-group-header play-match-group-header--${g.section.key}`,k.innerHTML=`
                    <span class="play-match-group-header__label">${g.section.label}</span>
                    <span class="play-match-group-header__count">${g.section.matches.length}</span>
                `,t.appendChild(k);return}const h=g.match,m=new Date(h.scheduled_at)<r;let _=!1;try{_=(typeof h.scoreboard_data=="string"?JSON.parse(h.scoreboard_data):h.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const x=document.createElement("bma-bet-match-card");if(x.setAttribute("data-match-id",h.id),x.setAttribute("data-match-guid",h.odds_id||h.guid||h.id),x.setAttribute("data-match-title",h.title),x.setAttribute("data-match-short-title",h.short_title||h.title),x.setAttribute("data-scheduled-at",h.scheduled_at),x.setAttribute("data-home-team",h.home_team_id||"Home"),x.setAttribute("data-away-team",h.away_team_id||"Away"),x.setAttribute("data-is-disabled",m||_?"true":"false"),x.setAttribute("data-sync-theme","dark"),h.odds_markets){const k=typeof h.odds_markets=="string"?h.odds_markets:JSON.stringify(h.odds_markets);x.setAttribute("data-odds-markets",k)}if(h.scoreboard_data){const k=typeof h.scoreboard_data=="string"?h.scoreboard_data:JSON.stringify(h.scoreboard_data);x.setAttribute("data-scoreboard",k)}if(e&&e.tags){const k=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);x.setAttribute("data-tournament-tags",k)}if(h.sport_id)x.setAttribute("data-sport-key",h.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const k=e.sports_allowed[0];k&&k.key&&x.setAttribute("data-sport-key",k.key)}x.addEventListener("bet-button-click",async k=>{const{betData:I,isActive:R,button:N}=k.detail;if(R){const j=document.querySelector(".bet-grid__slip-BETSLIP-content");if(j){const $=j.querySelectorAll("bma-bet-entry");let U=!1;$.forEach(z=>{if(U)return;const F=z.getAttribute("data-content-type"),V=z.getAttribute("data-content-odds");F===I.type&&V===I.price&&(z.remove(),U=!0)}),j.children.length===0&&(j.innerHTML=Fs)}N.classList.remove("btn--active"),setTimeout(()=>{f()},100)}else{const $=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(typeof window.GameTypeLifeCycle<"u"&&$)try{const F=Se(),y=(F.coreTourn?.length?F.coreTourn[F.coreTourn.length-1]:null)?.data?.find(O=>O.guid===$),A=F.appSession?.session_user?.guid,S=(y?.matches_expanded||[]).find(O=>O.guid===I.matchGuid)||{guid:I.matchGuid},D=F.coreBetSlip?.length>0?F.coreBetSlip[F.coreBetSlip.length-1].data.filter(O=>O.coreTournaments__guid===$):[];if(y&&A){const q=await window.GameTypeLifeCycle.forTournament(y).doBeforeBetPlace({tournament:y,match:S,user:{guid:A},bet:{type:I.type,team:I.team},existingBets:D});if(q&&q.ok===!1){typeof neodigmToast<"u"&&neodigmToast.q(pi(q.reason),"warning",3e3);return}}}catch(F){console.warn("[app_events] doBeforeBetPlace tap-time guard failed (non-fatal):",F?.message)}document.querySelectorAll("bma-bet-match-card").forEach(F=>{F.shadowRoot.querySelectorAll(".btn--selected").forEach(V=>{V.classList.remove("btn--selected")})}),N.classList.add("btn--selected"),N.classList.add("btn--active");const U=Se(),z=I.type;z==="spread"?le.publish(U.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(I)):z==="money"?le.publish(U.hierTopics.COREBETSLIP__MONEY,JSON.stringify(I)):z==="total"&&le.publish(U.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(I)),le.publish(U.hierTopics.COREBETSLIP,JSON.stringify(I))}}),t.appendChild(x)}),o!=="all"&&s(o)},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const a=document.querySelector("[data-publish-betslip]");a&&delete a.dataset.processing;const s=document.querySelector(".bet-grid__slip-BETSLIP-content");s&&(s.innerHTML=Fs);const n=Se();if(n.coreTourn.length>0){const l=n.coreTourn[n.coreTourn.length-1].data.find(i=>i.guid===e);l&&Pe.renderMatchCards(l)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{le.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const o=document.querySelector(".bet-grid__slip");o&&o.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(s=>{try{return JSON.parse(s.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(s=>{const n=s.getAttribute("data-match-guid"),o=s.getAttribute("data-home-team"),r=s.getAttribute("data-away-team");(s.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(i=>{if(i.disabled)return;const c=i.dataset.betType,p=i.dataset.team==="home"?o:r;t.some(g=>{if(g.coreMatches__guid!==n)return!1;const h=g.bet||[];if(h.length===0)return!1;const E=h[0],_=Object.keys(E).filter(I=>I!=="short_title")[0],k=E[_]?.type;return c==="total"?k===c:k===c&&_===p})&&(i.disabled=!0,i.classList.add("btn--disabled"))})})},initPlayScreen(e,t="INFO"){const a=Se(),s=document.querySelector(".play-cntr");if(!s){console.warn("[app_events] initPlayScreen: .play-cntr not found");return}e&&(s.dataset.currentTournGuid=e),t&&(s.dataset.currentTournAction=t);const n=s.dataset.currentTournGuid,o=s.dataset.currentTournAction||"INFO";if(n&&a.coreTourn.length>0){const f=a.coreTourn[a.coreTourn.length-1].data.find(h=>h.guid===n),g=f?.class||"DEFAULT_FORMAT";s.dataset.gameType=g,console.log("[app_events] Game mode:",g,"for tournament:",f?.caption)}console.log("[app_events] play_route mounted - GUID:",n,"action:",o),window.initBetGridToggle&&window.initBetGridToggle(),Pe.updatePlayButton(),Pe.populateInfoPage();let r=o==="PLAY"||o==="JOIN"?"PLAY":o;if(n&&a.coreTourn.length>0&&a.coreTourn[a.coreTourn.length-1].data.find(g=>g.guid===n)?.status==="COMPLETED"&&(r="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),r){const p=`ROUTE.HOME.SODAPOP_PLAY.${r}`;console.log("[app_events] Publishing initial topic:",p),le.publish(p,JSON.stringify({tournamentGuid:n,timestamp:Date.now()}))}if(!n||a.coreTourn.length===0)return;const i=a.coreTourn[a.coreTourn.length-1].data.find(p=>p.guid===n);if(!i)return;Pe.renderMatchCards(i);const c=document.querySelector("#pop-play__tourn-caption--id"),u=document.querySelector("#pop-play__tourn-tagline--id");c&&(c.textContent=i.caption),u&&(u.textContent=i.tagline),Pe.updateTournamentDashboard(i);const d=document.getElementById("dashboard-rank");if(d){const p=i.entities?.guids?.length||0;d.innerHTML=`<span class="tourn-dashboard__rank-text">-/${p}</span>`}Pe.updateBetSlipToggleSummary()},updatePlayButton(){const e=Se(),t=document.querySelector(".play-cntr"),a=t?.dataset?.currentTournGuid,s=t?.dataset?.currentTournAction||"INFO",n=document.getElementById("btn-join__play--id");if(!n||!a||e.coreTourn.length===0)return;const r=e.coreTourn[e.coreTourn.length-1].data.find(u=>u.guid===a);if(!r)return;const l=e.appSession?.session_user?.guid,i=r.entities?.guids?.includes(l),c=r.status;n.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!i)&&(n.style.visibility="",c==="UPCOMING"&&!i?s==="INFO"?(n.textContent="Join",n.dataset.requiresJoin="true"):s==="PLAY"&&(n.textContent="Play",n.dataset.requiresJoin="false"):(n.textContent="Play",n.dataset.requiresJoin="false"))},populateInfoPage(){const e=Se(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(P=>P.guid===a);if(!n)return;const o=document.getElementById("pop-play__caro-info-summary1--id");if(!o)return;const r=P=>{if(!P)return"N/A";let B=new Date(P);return!P.includes("Z")&&!P.match(/[+-]\d{2}:\d{2}$/)&&(B=new Date(P+"Z")),isNaN(B.getTime())?"Invalid Date":B.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};n.status&&`${n.status.toLowerCase()}`;const l={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},i=n.sports_allowed&&Array.isArray(n.sports_allowed)?n.sports_allowed.map(P=>{const B=P.key||P,Y=qe.find(T=>T.key===B),J=Y?Y.group:"default",M=l[B]||Y?.title||B;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${B}" data-sport-group="${J}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${M}</span>
                </span>`}).join(""):"N/A",c=e.appSession?.session_user?.guid,u=n.entities?.guids?.includes(c),d=n.entities?.guids?.length||0,p=n.entities?.max||0;(d/(p||1)*100).toFixed(1);const f=(()=>{const P=new Date(n.window_start_time),B=new Date(n.window_end_time),Y=new Date;if(isNaN(P.getTime())||isNaN(B.getTime()))return"";const J=B-P,M=Y-P;let T=0,G="";if(Y<P){T=0;const Q=P-Y,re=Math.floor(Q/864e5),pe=Math.floor(Q%864e5/36e5);G=re>0?`First match in ${re}d ${pe}h`:`First match in ${pe}h`}else if(Y>B){const Q=new Date(B.getFullYear(),B.getMonth(),B.getDate()),re=new Date(Y.getFullYear(),Y.getMonth(),Y.getDate());T=Q.getTime()===re.getTime()?95:100,G=T===100?"Tournament Complete":"Last Day"}else{T=Math.min(100,M/J*100);const Q=Math.ceil(J/864e5),re=Math.ceil(M/864e5);G=re>=Q?"Last Day":`Day ${re} of ${Q}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${G}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${T.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),g=n.tags||[],E=g.some(P=>P.override_last_match_close===!0)?"+":"",m=g.some(P=>P.match_inprogress_lock===!0),_=g.some(P=>P.override_last_match_close===!0);let x="Bet Max Tourney",k=null,I="";if(typeof window.GameTypeLifeCycle<"u"){const P=window.GameTypeLifeCycle.forTournament(n),B=P.getEffectiveRules(n);k=P.badge,x=P.label;try{const Y=`doTournament_${String(n.status||"UPCOMING").toUpperCase()}`;typeof P[Y]=="function"&&P[Y]({tournament:n}).catch(J=>console.warn("[app_events] info-page lifecycle hook failed (non-fatal):",J?.message))}catch{}if(B.stakeRule==="SPEND_ALL"&&(I+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend entire starting TD$ amount</span></div>'),B.requiredBetTypes.length>0){const Y=B.requiredBetTypes.map(J=>J==="SPREAD"?"Spread":J==="MONEY"?"Money Line":"Over/Under").join(", ");I+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${Y}</span></div>`}B.oneBetPerMatchPerType&&(I+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const R=(()=>{const B=(n.tags||[]).find(T=>T.badge_gold!==void 0||T.badge_silver!==void 0||T.badge_bronze!==void 0);if(!B)return null;const Y=B.badge_gold||0,J=B.badge_silver||0,M=B.badge_bronze||0;return Y===0&&J===0&&M===0?null:{gold:Y,silver:J,bronze:M}})();n.status==="LOCKED"||n.status==="UPCOMING"||n.status,n.status==="LOCKED"||n.status==="UPCOMING"||n.status==="COMPLETED"||n.status;const N=n.matches_expanded?.length||0,j=N===0?"TBD":`${N}${E}`;`${Number(n.tournament_dollars||0).toLocaleString()}${d}${p}${j}`;const $=n.status==="LOCKED"?"In Progress":n.status==="UPCOMING"?"Open":n.status,U=n.status==="LOCKED"?"var(--status-locked-text, #F7C60D)":n.status==="UPCOMING"?"var(--status-upcoming-text, #00E676)":"var(--status-completed-text, #CD5659)";let z="";try{if(window.GameTypeLifeCycle){const P=window.GameTypeLifeCycle.forTournament(n);if(P&&P.beta&&P.betaMessage){const B=Y=>String(Y??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");z=`<bma-mode-beta-banner
                        data-tournament-guid="${B(n.guid)}"
                        data-mode-token="${B(P.token)}"
                        data-mode-label="${B(P.label||P.token)}"
                        data-beta-message="${B(P.betaMessage)}"></bma-mode-beta-banner>`}}}catch{}const F=`
            ${z}
            <div class="info-detail-row"><span>Game Mode</span><span>${x}${k?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${k.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${k.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${m?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${m?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${_?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${_?"On-going":"Fixed slate"}</span></div>
            ${I}
        `,V=`
            <div class="info-detail-row"><span>Sports</span><span>${i}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${r(n.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends <span style="color: rgba(255,255,255,0.45); font-weight: 400; margin-left: 4px;">(estimated)</span></span><span>${r(n.window_end_time)}</span></div>
        `,y=R?`
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${R.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${R.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${R.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${R.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${R.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${R.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            <div style="padding: 16px 0 0;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); padding: 0 16px 8px;">Trophy Breakdown</div>
                ${R.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${R.gold}</span>
                </div>`:""}
                ${R.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${R.silver}</span>
                </div>`:""}
                ${R.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${R.bronze}</span>
                </div>`:""}
            </div>
        `:`<div class="info-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
            <p>No trophies configured for this tournament</p>
        </div>`,A=(()=>{if(!n.matches_expanded||!Array.isArray(n.matches_expanded)||n.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let P=0,B=0,Y=0;const J=new Date;n.matches_expanded.forEach(pe=>{let be=null;try{be=typeof pe.scoreboard_data=="string"?JSON.parse(pe.scoreboard_data):pe.scoreboard_data}catch{}be?.time_remaining?be.time_remaining.toLowerCase()==="final"?P++:B++:new Date(pe.scheduled_at)<J?P++:Y++});const M=B>0?"live":"upcoming",T=[];P>0&&T.push(`<span class="match-filter-btn${M==="final"?" match-filter--active":""}" data-filter="final">${P} Final</span>`),B>0&&T.push(`<span class="match-filter-btn match-filter-btn--live${M==="live"?" match-filter--active":""}" data-filter="live">${B} Live</span>`),Y>0&&T.push(`<span class="match-filter-btn match-filter-btn--upcoming${M==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${Y} Upcoming</span>`);const G=T.length>0?`<div class="match-filter-bar">${T.join("")}</div>`:"",Q=new Date,re=n.matches_expanded.map(pe=>{const be=pe.scoreboard_data?typeof pe.scoreboard_data=="string"?pe.scoreboard_data:JSON.stringify(pe.scoreboard_data):"";let ie="upcoming",ge=null;try{ge=typeof pe.scoreboard_data=="string"?JSON.parse(pe.scoreboard_data):pe.scoreboard_data}catch{}ge?.time_remaining?ie=ge.time_remaining.toLowerCase()==="final"?"final":"live":ie=new Date(pe.scheduled_at)<Q?"final":"upcoming";const _e=ie!==M;return`<bma-match-status
                    data-match-guid="${pe.guid||pe.odds_id||pe.id||""}"
                    data-match-title="${pe.short_title||pe.title||"Match"}"
                    data-match-scheduled-at="${pe.scheduled_at||""}"
                    data-match-home-team="${pe.home_team_id||"Home"}"
                    data-match-away-team="${pe.away_team_id||"Away"}"
                    data-match-home-score="${pe.home_team_score!==null&&pe.home_team_score!==void 0?pe.home_team_score:""}"
                    data-match-away-score="${pe.away_team_score!==null&&pe.away_team_score!==void 0?pe.away_team_score:""}"
                    data-match-scoreboard="${be.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${pe.sport_id||""}"
                    data-match-status="${ie}"
                    data-sync-theme="dark"
                    style="${_e?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${G}
                </div>
                <div class="matches-list" id="info-matches-scroll">
                    ${re}
                </div>
            `})(),S=n.status==="UPCOMING"?"Accepting new players. Place bets before each match starts.":n.status==="LOCKED"?"No new entrants. Joined players can still bet on matches that haven't started yet.":n.status==="COMPLETED"?"All matches settled. Final standings locked in.":"",D=`
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
                    <span class="info-summary-pack__stat-value">${j}</span>
                </div>
            </div>
        `,se=`
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
                        <span class="info-legend__term">Format · ${_?"On-going":"Fixed Slate"}</span>
                        <span class="info-legend__def">${_?"New matches are added as odds become available throughout the tournament.":"The slate is fixed at the start of the tournament. No new matches will be added."}</span>
                    </div>
                    <div class="info-legend__item">
                        <span class="info-legend__term">Game Mode · ${x}</span>
                        <span class="info-legend__def">${x==="Bet Max Tourney"?"Open betting across the full tournament slate. Rank by your TD$ balance. Pending bets don't move it; only settled wins and losses do. Ties break on Max Win, then earliest bet placed.":"See tournament rules for scoring and stake requirements."}</span>
                    </div>
                </div>
            </div>
        `,te=e.appSession?.session_user?.guid||"",ne=!!n.creator_guid&&n.creator_guid===te;console.log("[info share] isCreator check:",{viewerGuid:te,creator_guid:n.creator_guid,created_by_user:n.created_by_user,is_private:n.is_private,join_slug:n.join_slug,share_url:n.share_url,tournament_guid:n.guid,isCreator:ne});const H=n.share_url||`${window.location.origin}${window.location.pathname}#/preview/${n.guid}${n.join_slug?"?s="+encodeURIComponent(n.join_slug):""}`,Z=ne?`
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
                <div class="info-invite-sent-list" data-info-invite-sent-list data-tournament-guid="${n.guid||""}"></div>
                <button class="info-share-pack__btn info-share-pack__btn--secondary" data-info-share-btn data-share-url="${H.replace(/"/g,"&quot;")}" data-share-caption="${(n.caption||"tournament").replace(/"/g,"&quot;")}" aria-label="Share invite link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
                    <span>Share Invite Link</span>
                </button>
            </div>
        `:"",ee=`
            <div class="info-pack info-pack--padded">
                <div class="info-progress-status">
                    <div class="info-progress-status__row">
                        <span class="info-progress-status__label">Status</span>
                        <span class="info-progress-status__value" style="color: ${U};">${$}</span>
                    </div>
                    ${S?`<div class="info-progress-status__hint">${S}</div>`:""}
                </div>
                ${f?`<div class="info-progress-divider"></div>${f}`:""}
            </div>
        `;o.innerHTML=`
            <div class="info-wrap">
                ${Z}
                ${ee}
                ${D}
                ${se}
                <div class="info-pack">
                    <div class="info-tabs">
                        <button class="info-tab info-tab--active" data-info-tab="summary"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Summary</button>
                        <button class="info-tab" data-info-tab="trophies"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Trophies</button>
                        <button class="info-tab" data-info-tab="matches"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> Matches</button>
                    </div>
                    <div class="info-tab-panel" data-info-panel="summary">${V}${F}</div>
                    <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${y}</div>
                    <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${A}</div>
                </div>
            </div>
        `;const de=o.querySelector("[data-info-legend-toggle]");if(de&&de.addEventListener("click",()=>{const B=de.closest(".info-legend").classList.toggle("info-legend--open");de.setAttribute("aria-expanded",String(B))}),ne){const P=o.querySelector("[data-info-invite-sent-list]");P&&(xe.fetchInvitesForTournament(n.guid).then(B=>{B.ok&&Array.isArray(B.data?.invites)&&(Et[n.guid]=B.data.invites,La(n.guid))}).catch(B=>console.warn("[info invite list] fetch failed:",B)),P.addEventListener("click",async B=>{const Y=B.target.closest("[data-info-revoke]");if(!Y)return;const J=Y.getAttribute("data-info-revoke");if(!J)return;const M=Et[n.guid]||[];Et[n.guid]=M.filter(G=>G.guid!==J),La(n.guid),(await xe.revokeInvite(J)).ok?typeof neodigmToast<"u"&&neodigmToast.q("Invite revoked.","info"):(Et[n.guid]=M,La(n.guid),typeof neodigmToast<"u"&&neodigmToast.q("Couldn't revoke. Try again.","warning"))}))}const ce=o.querySelector("[data-info-invite-form]");ce&&ce.addEventListener("submit",async P=>{P.preventDefault();const B=ce.querySelector("[data-info-invite-input]"),Y=ce.querySelector("[data-info-invite-send]"),J=ce.parentElement.querySelector("[data-info-invite-status]"),M=(B?.value||"").trim();if(!M||!Y)return;let T=null;M.includes("@")?T={email:M}:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(M)?T={user_guid:M}:T={userName:M},Y.disabled=!0;const G=Y.textContent;Y.textContent="Sending...",J&&(J.hidden=!0,J.textContent="");try{const Q=await xe.sendInvite(n.guid,T);if(Q.ok&&Q.data?.invite){B.value="";const re=Q.data.invite.invitee_display_name||Q.data.invite.invitee_user_name||"them",pe=Et[n.guid]||[];Et[n.guid]=[Q.data.invite,...pe],La(n.guid),typeof neodigmToast<"u"&&neodigmToast.q(`Invite sent to ${re}.`,"success")}else{const re=Q.data?.error||`http_${Q.status}`,pe=(()=>{if(re==="invitee_not_found")return"Couldn't find that player. Share the link instead.";if(re==="already_invited")return"You've already invited them.";if(re==="already_joined")return"They're already in this pool.";if(re==="pool_full")return"Pool is full.";if(re==="cooldown_active"){const be=Q.data?.retry_after_hours;return be?`They declined recently. Try again in ${be}h.`:"They declined recently. Try again tomorrow."}return re==="rate_limited"?"Too many invites. Try again in a few minutes.":re==="not_creator"?"Only the pool creator can send invites.":re==="not_private"?"This pool doesn't accept directed invites.":re==="invalid_request_shape"?"Enter a User Name or Email.":"Couldn't send invite. Try again."})();J&&(J.textContent=pe,J.hidden=!1,J.classList.add("info-invite-form__status--error"))}}catch(Q){console.warn("[info invite] send failed:",Q),J&&(J.textContent="Network error. Try again.",J.hidden=!1,J.classList.add("info-invite-form__status--error"))}finally{Y.disabled=!1,Y.textContent=G}});const w=o.querySelector("[data-info-share-btn]");w&&w.addEventListener("click",async()=>{const P=w.dataset.shareUrl,B=w.dataset.shareCaption||"tournament";if(!P)return;const Y=`Join ${B}`,J=`You're invited to join ${B} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:Y,text:J,url:P});return}catch(M){if(M?.name==="AbortError")return}try{await navigator.clipboard.writeText(P),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(M){console.warn("[info share] clipboard write failed:",M),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Link: "+P,"danger")}}),o.querySelectorAll(".info-tab").forEach(P=>{P.addEventListener("click",()=>{o.querySelectorAll(".info-tab").forEach(Y=>Y.classList.remove("info-tab--active")),P.classList.add("info-tab--active");const B=P.dataset.infoTab;o.querySelectorAll(".info-tab-panel").forEach(Y=>{Y.style.display=Y.dataset.infoPanel===B?"":"none"})})});const L=o.querySelector('[data-info-panel="matches"]');L&&L.addEventListener("click",P=>{const B=P.target.closest(".match-filter-btn");B&&(L.querySelectorAll(".match-filter-btn").forEach(Y=>Y.classList.remove("match-filter--active")),B.classList.add("match-filter--active"),L.querySelectorAll("bma-match-status").forEach(Y=>{Y.style.display=Y.dataset.matchStatus===B.dataset.filter?"":"none"}))});const v=document.getElementById("pop-play__caro-info-summary2--id");v&&(v.innerHTML="");const C=document.getElementById("pop-play__caro-info-list--id");C&&(C.innerHTML="")},async populateLeaderboard(){const e=Se(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,s=e.appSession?.session_user?.guid;if(!a){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const n=document.getElementById("pop-play__caro-leaderboard--id");if(!n)return;let o=document.getElementById("leaderboard-loading-banner");o||(o=document.createElement("neodigm-juicebar"),o.id="leaderboard-loading-banner",o.setAttribute("role","progressbar"),o.setAttribute("data-n55-theme","warning"),o.setAttribute("data-n55-size","small"),o.innerHTML="<div></div>",o.style.cssText=`
                width: 100%;
                margin: 6px;
            `,n.parentNode.insertBefore(o,n)),o.style.visibility="visible";try{const r=await xe.fetchLeaderboard(a),l=r?.data||r?.rows;if(l&&l.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(y=>y.guid===a),u=c?.class||"DEFAULT_FORMAT",d=l.map(y=>{const A=typeof y.combined_betslips=="string"?(()=>{try{return JSON.parse(y.combined_betslips)}catch{return[]}})():y.combined_betslips||[];return{...y,bets:A,timestamp:y.created_at||y.updated_at||0}}),p=parseFloat(c?.tournament_dollars||0),f=y=>{if(u!=="DEFAULT_FORMAT"||p<=0)return!0;let A=0;return(y.bets||[]).forEach(S=>{(S.bet||[]).forEach(D=>{Object.keys(D).forEach(O=>{O!=="short_title"&&(A+=parseFloat(D[O]?.stake||0))})})}),A>=p-.01},h=(()=>{if(u!=="DEFAULT_FORMAT")return"";const A=(c?.tags||[]).find(ne=>ne.badge_gold!==void 0||ne.badge_silver!==void 0||ne.badge_bronze!==void 0);if(!A)return"";const S=A.badge_gold||0,D=A.badge_silver||0,O=A.badge_bronze||0;if(S===0&&D===0&&O===0)return"";const X=d.some(ne=>(ne.bets||[]).some(H=>(H.bet||[]).some(Z=>Object.keys(Z).some(ee=>ee!=="short_title"&&Z[ee]?.reconciled===!0))))?d.filter(f):[],W=ne=>{if(!ne)return'<span class="podium-slot__empty">Open</span>';const H=ne.user_guid===s;return`<span class="podium-slot__name${H?" podium-slot__name--you":""}">${ne.username||"Unknown"}${H?' <span class="podium-slot__you">YOU</span>':""}</span>`},oe=Array.from({length:S},(ne,H)=>W(X[H])).join(""),se=Array.from({length:D},(ne,H)=>W(X[S+H])).join(""),ae=Array.from({length:O},(ne,H)=>W(X[S+D+H])).join(""),te=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
                        <div class="leaderboard-podium">
                            <div class="leaderboard-podium__title">Trophy Preview</div>
                            <div class="leaderboard-podium__pack">
                                ${D>0?`<div class="podium-slot podium-slot--silver">
                                    <div class="podium-slot__trophy podium-slot__trophy--silver"></div>
                                    <span class="podium-slot__count">&times;${D}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--silver">
                                        <div class="podium-slot__names">${se}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${S>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${S}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${oe}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${O>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${O}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${ae}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${te?`<div class="leaderboard-podium__label">${te}</div>`:""}
                        </div>
                    `})(),x=`
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
                `,k=(y,A,S=!1)=>{let D="";if(c?.tags&&Array.isArray(c.tags)){const se=c.tags.find(ae=>!!(typeof ae=="object"&&ae!==null&&(ae.entity_guid===y.user_guid&&ae.badge&&ae.badge.startsWith("--badge__ribbon--")||ae[y.user_guid]&&ae[y.user_guid].startsWith("--badge__ribbon--"))));if(se){const ae=se.badge||se[y.user_guid];ae==="--badge__ribbon--gold"?D="badge-trophy--gold":ae==="--badge__ribbon--silver"?D="badge-trophy--silver":ae==="--badge__ribbon--bronze"&&(D="badge-trophy--bronze")}}const O=y.combined_betslips?typeof y.combined_betslips=="string"?y.combined_betslips:JSON.stringify(y.combined_betslips):"[]";let q="[]";if(y.combined_betslips&&c?.matches_expanded){const se=typeof y.combined_betslips=="string"?JSON.parse(y.combined_betslips):y.combined_betslips,ae=[...new Set(se.map(ne=>ne.coreMatches__guid||ne.match_guid||ne.odds_id).filter(Boolean))],te=c.matches_expanded.filter(ne=>{const H=ne.guid||ne.id||ne.odds_id;return ae.includes(H)});q=JSON.stringify(te)}const X=parseFloat(y.calculated_tournament_dollars||0),W=parseInt(y.total_betslips||0),oe=X===0&&W===0?c?.tournament_dollars||0:y.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${A}"
                            data-username="${y.username||"Unknown"}"
                            data-user-guid="${y.user_guid||""}"
                            data-tournament-dollars="${oe}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${y.total_betslips||0}"
                            data-total-payout="${y.total_payout||0}"
                            data-combined-betslips="${O.replace(/"/g,"&quot;")}"
                            data-user-matches="${q.replace(/"/g,"&quot;")}"
                            data-badge-class="${D}"
                            data-is-current-user="${y.user_guid===s}"
                            data-unqualified="${S}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `},I=d.filter(f),R=d.filter(y=>!f(y)),j=(u==="DEFAULT_FORMAT"&&I.length>0?`
                    <div class="leaderboard-divider leaderboard-divider--qualified">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                            <span class="leaderboard-divider__title">Qualified</span>
                            <span class="leaderboard-divider__subtitle">Ranked for tournament prizes</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                `:"")+I.map((y,A)=>k(y,A+1,!1)).join(""),$=R.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${R.map(y=>k(y,"—",!0)).join("")}
                `:"";n.innerHTML=h+x+j+$,requestAnimationFrame(()=>{n.querySelectorAll("bma-leaderboard-card").forEach((y,A)=>{y.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",y.style.animationDelay=`${Math.min(A*60,400)}ms`})}),n.querySelectorAll(".leaderboard-tab").forEach(y=>{y.addEventListener("click",()=>{const A=y.dataset.lbTab;n.querySelectorAll(".leaderboard-tab").forEach(S=>S.classList.remove("leaderboard-tab--active")),y.classList.add("leaderboard-tab--active"),n.querySelectorAll("[data-lb-panel]").forEach(S=>{S.style.display=S.dataset.lbPanel===A?"":"none"})})});const U=I.findIndex(y=>y.user_guid===s),z=c?.entities?.guids?.length||d.length,F=U>=0?U+1:"—",V=document.getElementById("dashboard-rank");if(V){const y=F==="—"?"—":`${F}/${z}`;V.innerHTML=`<span class="tourn-dashboard__rank-text">${y}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else n.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{o&&(o.style.visibility="hidden")},1800)}catch(r){console.error("[appEvents] Error fetching leaderboard:",r),n.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{o&&(o.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=Se(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(o=>o.guid===a);n&&(console.log("[appEvents] Hydrating play popup for tournament:",a),this.populateInfoPage(),this.renderMatchCards(n),this.updateTournamentDashboard(n),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:a,subStatus:s,sort:n,result:o}=e,r=(c,u,d,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${u}">${d}</button>`;let l="";a==="lobby"?l+=`
                <div class="filter-section">
                    <div class="filter-section__title">Status</div>
                    <div class="filter-chips">
                        ${r("subStatus","all","All",s==="all")}
                        ${r("subStatus","open","Open",s==="open")}
                        ${r("subStatus","locked","Locked",s==="locked")}
                        ${r("subStatus","completed","Recently Completed",s==="completed")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${r("sort","default","Default",n==="default")}
                        ${r("sort","starting_soon","Starting Soon",n==="starting_soon")}
                        ${r("sort","most_entrants","Most Entrants",n==="most_entrants")}
                        ${r("sort","fewest_spots","Fewest Spots Left",n==="fewest_spots")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Entry Fee</div>
                    <div class="filter-chips">
                        ${r("fee","free","Free",!0,!0)}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Game Mode</div>
                    <div class="filter-chips">
                        ${r("mode","default","Default",!0,!0)}
                    </div>
                </div>`:a==="my"?l+=`
                <div class="filter-section">
                    <div class="filter-section__title">Status</div>
                    <div class="filter-chips">
                        ${r("subStatus","all","All",s==="all")}
                        ${r("subStatus","active","Active",s==="active")}
                        ${r("subStatus","upcoming","Upcoming",s==="upcoming")}
                        ${r("subStatus","completed","Completed",s==="completed")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Result</div>
                    <div class="filter-chips">
                        ${r("result","all","All",o==="all")}
                        ${r("result","trophy","Won Trophy",o==="trophy")}
                        ${r("result","no_trophy","No Trophy",o==="no_trophy")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${r("sort","default","Default",n==="default")}
                        ${r("sort","recently_active","Recently Active",n==="recently_active")}
                        ${r("sort","starting_soon","Starting Soon",n==="starting_soon")}
                    </div>
                </div>`:a==="completed"&&(l+=`
                <div class="filter-section">
                    <div class="filter-section__title">Result</div>
                    <div class="filter-chips">
                        ${r("result","all","All",o==="all")}
                        ${r("result","trophy","Won Trophy",o==="trophy")}
                        ${r("result","no_trophy","No Trophy",o==="no_trophy")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${r("sort","default","Default",n==="default")}
                        ${r("sort","newest","Newest First",n==="newest")}
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
            `;let u={subStatus:s,sort:n,result:o};c.addEventListener("click",d=>{const p=d.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,g=p.dataset.filterVal;u[f]=g,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(h=>h.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const d=i[a]||i.lobby;u={...d},Object.keys(d).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${d[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(u)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){if(window._bmaAppListenersBound){console.warn("[app_events] bindAppListeners already bound; skipping duplicate call");return}window._bmaAppListenersBound=!0,le.subscribe("APP",(y,A)=>{console.warn("~~ sub all APP | "+y+"|"+A)}),le.subscribe("WC",(y,A)=>{console.warn("~~ sub all WC  | "+y+"|"+A)}),le.subscribe("ROUTE",(y,A)=>{console.warn("~~ sub all ROUTE  | "+y+"|"+A)});let t="lobby",a="all",s="all",n="all",o="active",r="active",l="default",i="all",c="all",u=localStorage.getItem("bma_view_mode")||"cards";const d="bma_home_nav_state",p=()=>{try{sessionStorage.setItem(d,JSON.stringify({filter:t,lobbySubTab:r,mySubTab:o,privateSubTab:n,sportFilter:a}))}catch{}},f=()=>{try{const y=sessionStorage.getItem(d);if(!y)return null;const A=JSON.parse(y);return["lobby","my","private"].includes(A.filter)?A:null}catch{return null}},g=()=>{a="all";const y=document.querySelector("bma-app-head-sports");y&&y.setAttribute("data-selected-chip","all"),p()},h=()=>{const y=document.getElementById("filter-bar__count--id");if(!y)return;let A=0;s!=="all"&&A++,l!=="default"&&A++,i!=="all"&&A++,y.textContent=A,y.style.display=A>0?"":"none"},E=()=>{document.querySelectorAll(".home-tab").forEach(D=>D.classList.remove("home-tab--active"));let A=null;if(t==="lobby"?A=r==="completed"?'[data-home-tab="lobby-completed"]':'[data-home-tab="lobby-active"]':t==="private"?A=n==="invites"?'[data-home-tab="private-invites"]':'[data-home-tab="private-all"]':t==="my"&&(A=o==="completed"?'[data-home-tab="my-completed"]':'[data-home-tab="my-active"]'),!A)return;const S=document.querySelector(A);S&&S.classList.add("home-tab--active")},m=()=>{s="all",l="default",i="all",c="all"};document.addEventListener("click",y=>{const A=y.target.closest(".category-filter-toggle");if(A){const O=A.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(O){const q=O.style.display!=="none";O.style.display=q?"none":"",A.classList.toggle("category-filter-toggle--open",!q),window._bmaFilterRowOpen=!q}return}const S=y.target.closest("[data-view-mode]");if(S){const D=S.dataset.viewMode;if(D===u)return;u=D,localStorage.setItem("bma_view_mode",D),document.querySelectorAll("[data-view-mode]").forEach(O=>O.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${D}"]`).forEach(O=>O.classList.add("view-toggle__btn--active")),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"}))}}),document.addEventListener("click",y=>{const A=y.target.closest("[data-home-tab]");if(!A)return;const S=A.dataset.homeTab;let D=!1;if(S==="lobby-active"||S==="lobby-completed"){const O=S==="lobby-completed"?"completed":"active";if(t==="lobby"&&O===r)return;t="lobby",r=O,D=!0}else if(S==="my-active"||S==="my-completed"){const O=S==="my-completed"?"completed":"active";if(t==="my"&&O===o)return;t="my",o=O,D=!0}else if(S==="private-all"||S==="private-invites"){const O=S==="private-invites"?"invites":"all";if(t==="private"&&O===n)return;t="private",n=O,document.body.dataset.privateSub=O,D=!0}D&&(g(),m(),h(),document.querySelectorAll(".home-tab").forEach(O=>O.classList.remove("home-tab--active")),A.classList.add("home-tab--active"),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"})),p())}),document.addEventListener("change",y=>{const A=y.target.closest(".category-dropdown");if(!A)return;const S=A.dataset.filterType,D=A.value;S==="subStatus"?s=D:S==="sort"?l=D:S==="result"?i=D:S==="odds"&&(c=D),h(),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),le.subscribe(e.hierTopics.COREBETSLIP,async(y,A)=>{JSON.parse(A);let S=16;switch(y){case e.hierTopics.COREBETSLIP__BET:S=5,Ga.shootConfetti(),console.log("~~~  |  "+y+" | ",A);const D=document.querySelector("[data-bets-valid]");D&&(D.dataset.betsValid="false");const O=document.querySelector("neodigm-sodapop");O&&O.setAttribute("data-wait","true");const q=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(q.length===0){console.warn("[app_events] No bets to submit"),O&&O.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const W=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,oe=e.appSession?.session_user?.guid;if(!W||!oe){console.error("[app_events] Missing tournament or user GUID"),O&&O.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const se=Array.from(q).map(ce=>{const w=ce.getAttribute("data-content-team-points"),L=ce.getAttribute("data-content-odds"),v=ce.getAttribute("data-stake")||"0",C=ce.getAttribute("data-content-type"),P=ce.getAttribute("data-payout")||"0",B=ce.getAttribute("data-match-guid")||"",Y={};return Y[w]={type:C,stake:parseFloat(v),odds:parseFloat(L),payout:parseFloat(P),reconciled:!1},{acctEntity__guid:oe,coreTournaments__guid:W,coreMatches__guid:B,bet:[Y],status:"PENDING"}});if(console.log("[app_events] Submitting bet slips:",se),typeof window.GameTypeLifeCycle<"u")try{const w=[...e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(C=>C.coreTournaments__guid===W):[],...se],v=(e.coreTourn.length>0?e.coreTourn[e.coreTourn.length-1]:null)?.data.find(C=>C.guid===W);if(v){const P=await window.GameTypeLifeCycle.forTournament(v).doBeforeSubmit({tournament:v,user:{guid:oe},bets:w});if(P&&P.ok===!1){console.log("[app_events] doBeforeSubmit rejected:",P),typeof neodigmToast<"u"&&(Array.isArray(P.failures)&&P.failures.length?P.failures:[{reason:P.reason}]).forEach(J=>neodigmToast.q(pi(J.reason),"warning",4e3)),O&&O.setAttribute("data-wait","false");const B=document.querySelector("[data-publish-betslip]");B&&delete B.dataset.processing;break}}}catch(ce){console.warn("[app_events] doBeforeSubmit guard failed (non-fatal):",ce?.message)}xe.postBetSlips(se).then(ce=>{const w=ce.filter(v=>!v.ok);if(w.length>0){console.error("[app_events] Bet submission rejected by server:",w.map(Y=>({status:Y.status,data:Y.data,networkError:Y.networkError})));const v=w[0],C=v.data?.error||v.data?.message||v.networkError,P=C?`${C}`:`Server returned ${v.status||"no response"}.`;typeof neodigmToast<"u"&&neodigmToast.q(`Bets not placed|${P}`,"danger",6e3);const B=document.querySelector("[data-publish-betslip]");B&&delete B.dataset.processing,D&&(D.dataset.betsValid="true"),O&&O.setAttribute("data-wait","false");return}console.log("[app_events] Bet slips posted successfully:",ce);const L=se.reduce((v,C)=>{const P=C.bet[0],B=Object.keys(P)[0];return v+(P[B]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${L.toFixed(2)}`,"success"),xe.fetchBetSlips(oe,W).then(v=>{if(v?.rows){const C={timestamp:Date.now(),source:"API",data:v.rows};e.pushcoreBetSlip(C),console.log("[app_events] Refreshed bet slips in store:",v.rows.length,"items")}Pe.refreshPlayPopupUI(W,v),O&&O.setAttribute("data-wait","false")}).catch(v=>{console.error("[app_events] Error fetching fresh bet slips:",v);const C=document.querySelector("[data-publish-betslip]");C&&delete C.dataset.processing,D&&(D.dataset.betsValid="true"),O&&O.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(ce=>{console.error("[app_events] Error posting bet slips:",ce);const w=document.querySelector("[data-publish-betslip]");w&&delete w.dataset.processing,D&&(D.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),O&&O.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:S=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&A){A=JSON.parse(A);const w=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&w){const L=e.coreBetSlip[0].data.filter(G=>G.coreTournaments__guid===w),v=[],C=[],P=[];L.forEach(G=>{const Q=G.bet||[];if(Q.length===0)return;const re=Q[0];Object.keys(re).filter(be=>be!=="short_title").forEach(be=>{const ie=re[be],ge=ie?.reconciled!==!1,_e=parseFloat(ie?.payout||0);ge?_e===0?C.push(G):P.push(G):v.push(G)})});const B=bt.search(v,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Y=bt.search(C,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,J=B+Y,M=bt.search(P,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,T=A.tournament_dollars-J+M;Pe.updateTDBalance("#summary-balance",T)}else Pe.updateTDBalance("#summary-balance",A.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let te=0,ne=0,H=0;if(e.coreBetSlip.length>0){const w=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(w){const v=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(M=>M.coreTournaments__guid===w),C=[],P=[],B=[];v.forEach(M=>{const T=M.bet||[];if(T.length===0)return;const G=T[0];Object.keys(G).filter(re=>re!=="short_title").forEach(re=>{const pe=G[re],be=pe?.reconciled!==!1,ie=parseFloat(pe?.payout||0);be?ie===0?P.push(M):B.push(M):C.push(M)})}),te=bt.search(C,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ne=bt.search(B,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const Y=bt.search(P,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,J=bt.search(B,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;H=Y+J}}let Z=!0,ee=0;const de=document.querySelector("[data-bets-valid]");if(de&&A){A=JSON.parse(A),A.pending_stake_sum=0,A.pending_payout_sum=0,A.bets.length||(Z=!1),A.bets.forEach(B=>{B.stake=Number(B.stake),B.stake>0?A.pending_stake_sum+=B.stake:Z=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(B=>{const Y=parseFloat(B.getAttribute("data-payout")||"0");A.pending_payout_sum+=Y});const w=te+A.pending_stake_sum,L=ne+A.pending_payout_sum;ee=parseFloat((A.tournament_dollars-w-H+ne).toFixed(2));const C=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let P=null;C&&e.coreTourn.length>0&&(P=e.coreTourn[e.coreTourn.length-1]?.data?.find(Y=>Y.guid===C)),Pe.updateSummaryAndDashboard(ee,w,L,P,A.pending_payout_sum||0),(A.tournament_dollars<0||ee<0)&&(Z=!1),de.dataset.betsValid=Z}break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S,"QUITE").vibrate()});const _=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(q=>q.guid===A)?.tournament_dollars||0),le.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:S,timestamp:Date.now()}))},x=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(te=>te.guid===A)?.tournament_dollars||0);let D=0,O=0,q=0,X=0;if(e.coreBetSlip.length>0&&A){const ae=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(ce=>ce.coreTournaments__guid===A);console.log("[app_events] Filtered bets for tournament:",A,"found:",ae.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",ae[0]);const te=[],ne=[],H=[];ae.forEach(ce=>{const w=ce.bet||[];if(w.length===0)return;const L=w[0];Object.keys(L).filter(C=>C!=="short_title").forEach(C=>{const P=L[C],B=P?.reconciled!==!1,Y=parseFloat(P?.payout||0);B?Y===0?ne.push(ce):H.push(ce):te.push(ce)})}),console.log("[app_events] Bet categories:",{unreconciled:te.length,reconciledZero:ne.length,reconciledNonZero:H.length});const Z=bt.search(te,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ee=bt.search(ne,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,de=bt.search(H,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;q=ee+de,O=bt.search(H,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,X=bt.search(te,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,D=Z,console.log("[app_events] Balance calculation:",{unreconciledStakes:Z,lostBetStakes:ee,wonBetStakes:de,allReconciledStakes:q,displayedStake:D,reconciledPayouts:O,tournamentDollars:S,calculatedBalance:S-D-q+O})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const W=S-D-q+O;let oe=null;A&&e.coreTourn.length>0&&(oe=e.coreTourn[e.coreTourn.length-1].data.find(ae=>ae.guid===A)),Pe.updateSummaryAndDashboard(W,D,O,oe,X)};le.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(y,A)=>{const D=JSON.parse(A)?.rows||[],O=document.querySelector(".bet-grid__slip-MYBETS");if(!O)return;if(O.innerHTML="",D.length===0){O.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const oe=document.querySelector(".bet-grid__slip");oe&&oe.setAttribute("data-active-bet-tab","BETSLIP"),_();return}D.forEach(oe=>{if((oe.bet||[]).length===0)return;const ae=document.createElement("bma-bet-existing");ae.setAttribute("data-corebetslip",JSON.stringify(oe)),O.appendChild(ae)});const q=document.querySelector(".bet-grid__slip");q&&q.setAttribute("data-active-bet-tab","MYBETS"),Se().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Pe.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",D.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),x()},200)}),document.addEventListener("click",y=>{const A=y.target;if(A&&A.classList.contains("bet-slip-tab")){const S=A.dataset.betTab,D=document.querySelector(".bet-grid__slip");S&&D&&(D.setAttribute("data-active-bet-tab",S),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",S))}if(A&&A.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(A.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}A.dataset.processing="true";const D=A.dataset.publishBetslip;le.publish(D,JSON.stringify({timestamp:Date.now()}))}});const k=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(W=>W.guid===A)?.tournament_dollars||0);const D=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),O=Array.from(D).map(q=>({teamPoints:q.getAttribute("data-content-team-points"),odds:q.getAttribute("data-content-odds"),stake:q.getAttribute("data-stake")||"0",type:q.getAttribute("data-content-type"),abbreviatedTitle:q.getAttribute("data-abbreviated-title"),scheduledAt:q.getAttribute("data-scheduled-at")}));le.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:S,bets:O,timestamp:Date.now()}))},I=(y,A)=>{const S=JSON.parse(A),D=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!D){console.error("[app_events] Bet slip container not found");return}const O=D.querySelector(".bet-slip__empty");O&&O.remove();let q="";S.type==="total"?q=S.team==="over"?"Over":"Under":S.team==="home"?q=S.homeTeam:S.team==="away"?q=S.awayTeam:S.team==="draw"&&(q="Draw");let X=q;const W=S.point,oe=parseFloat(W),se=W!=null&&W!=="";if(se)if(S.type==="spread"&&oe!==0){const ee=oe>0?`+${W}`:String(W);X=`${q} ${ee}`}else S.type==="total"&&(X=`${q} ${W}`);const ae=document.createElement("bma-bet-entry");ae.setAttribute("data-content-team-points",X),ae.setAttribute("data-content-odds",S.price||"0"),ae.setAttribute("data-content-stake-text","0"),ae.setAttribute("data-content-type",S.type||""),se&&ae.setAttribute("data-content-point",String(W)),ae.setAttribute("data-abbreviated-title",S.abbreviatedTitle||`${S.homeTeam} vs ${S.awayTeam}`),ae.setAttribute("data-scheduled-at",S.scheduledAt||""),ae.setAttribute("data-match-guid",S.matchGuid||""),ae.setAttribute("data-home-team",S.homeTeam||""),ae.setAttribute("data-away-team",S.awayTeam||""),ae.setAttribute("data-bet-team",q||"");const ne=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(ne&&e.coreTourn.length>0){const de=e.coreTourn[e.coreTourn.length-1].data.find(ce=>ce.guid===ne);if(de?.sports_allowed&&de.sports_allowed.length>0){const ce=de.sports_allowed[0];ae.setAttribute("data-sport-key",ce.key||"");const w=qe.find(L=>L.key===ce.key);ae.setAttribute("data-sport-group",w?.group||"")}}D.appendChild(ae),console.log("[app_events] Bet entry appended to container:",ae,"Container children:",D.children.length),setTimeout(()=>{N(ae)},0);const H=document.querySelector(".bet-grid__slip");H&&(H.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const Z=D.querySelectorAll("bma-bet-entry").length;Z>=3?requestAnimationFrame(()=>{setTimeout(()=>{const ee=document.querySelector(".bet-grid__slip");ee&&(console.log("[app_events] Scrolling parent to bottom - bet count:",Z,"scrollHeight:",ee.scrollHeight,"current scrollTop:",ee.scrollTop),ee.scrollTo({top:ee.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",ee.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",Z,"bet cards (need 3+)"),setTimeout(()=>{k()},200),console.log("[app_events] Created bet entry:",{teamPoints:X,odds:S.price,type:S.type})};le.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(y,A)=>{I(y,A),R()}),le.subscribe(e.hierTopics.COREBETSLIP__MONEY,(y,A)=>{I(y,A),R()}),le.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(y,A)=>{I(y,A),R()});function R(){const y=window.matchMedia("(orientation: portrait)").matches,A=window.matchMedia("(max-width: 768px)").matches;if(y||A){const S=document.querySelector(".bet-grid__select"),D=document.querySelector(".bet-grid__slip"),O=document.querySelector(".bet-grid__toggle-text");S&&D&&O&&(S.classList.add("collapsed"),D.classList.remove("collapsed"),O.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const N=y=>{const A={sport:{key:y.getAttribute("data-sport-key")||"",group:y.getAttribute("data-sport-group")||""},Match:{scheduled_at:y.getAttribute("data-scheduled-at")||"",home_team_id:y.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:y.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:y.getAttribute("data-bet-team")||"",over:"",under:""},type:y.getAttribute("data-content-type")||"",odds:y.getAttribute("data-content-odds")||"0",stake:y.getAttribute("data-stake")||"0"}},S=ec.calcPayout(A);y.setAttribute("data-payout",S.toString()),console.log("[app_events] Payout calculated:",{stake:A.Bet.stake,odds:A.Bet.odds,payout:S})};new MutationObserver(y=>{y.forEach(A=>{A.type==="attributes"&&A.attributeName==="data-stake"&&A.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",A.target.getAttribute("data-stake")),N(A.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{k()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",y=>{console.log("[app_events] Removing bet entry:",y.detail);const A=y.target,S=y.detail;A.remove(),setTimeout(()=>{const X=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(X){const W=Se(),oe=W.coreTourn[W.coreTourn.length-1];if(oe&&oe.data){const se=oe.data.find(ae=>ae.guid===X);se&&Pe.updateTournamentDashboard(se)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(q=>{(q.shadowRoot?.querySelectorAll(".btn")||[]).forEach(W=>{const oe=W.dataset.betType,se=W.dataset.price,ae=oe===S.type,te=se===S.odds;ae&&te&&W.classList.contains("btn--active")&&(W.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:oe,btnPrice:se}))})});const O=document.querySelector(".bet-grid__slip-BETSLIP-content");O&&O.children.length===0&&(O.innerHTML=Fs),setTimeout(()=>{k()},100)}),le.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(y,A)=>{const S=JSON.parse(A);S&&S.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${S.guid}"]`)}),le.subscribe(e.hierTopics.WC__APP__FOOT,(y,A)=>{switch(JSON.parse(A),y){case"WC.APP.FOOT.LOBBY":case"WC.APP.FOOT.ALL_SPORTS":le.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"LOBBY",timestamp:Date.now()}));break;case"WC.APP.FOOT.TOURNEYS":le.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_TOURNEYS,JSON.stringify({tab:"TOURNEYS",timestamp:Date.now()}));break;case"WC.APP.FOOT.PRIVATE":case"WC.APP.FOOT.MY_TOURNEYS":le.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_PRIVATE,JSON.stringify({tab:"PRIVATE",timestamp:Date.now()}));break;case"WC.APP.FOOT.LEADERBOARD":le.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case"WC.APP.FOOT.MY_PROFILE":neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break}}),le.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(y,A)=>{const S=JSON.parse(A);let D=16;y=="WC.APP.HEAD_SPORTS.PREV"||y=="WC.APP.HEAD_SPORTS.NEXT"||y=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?D=3:(a=S.key||"all",console.log(`[app_events] Sports filter changed to: ${a} (${S.group})`),h(),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"})),p()),D&&neodigmWired4Sound&&neodigmWired4Sound.sound(D).vibrate()}),le.subscribe(e.hierTopics.WC__APP__HEAD_MID,(y,A)=>{JSON.parse(A);let S=16;const D=(O,q="active")=>{t=O,n="all",o=q,r="active",document.body.dataset.tournFilter=O,document.body.dataset.privateSub=n,g(),m(),h(),E(),(window.location.hash||"").startsWith("#/home_route")||(window.location.hash||"")==="#/"||!window.location.hash||(typeof neodigmSodaPop<"u"&&neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/home_route"),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"})),p()};switch(y){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":D("lobby");break;case"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS":D("my","active");break;case"WC.APP.HEAD_MID.HEAD_MID_PRIVATE":case"WC.APP.HEAD_MID.HEAD_MID_MY":D("private");break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":D("my","completed");break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":S=16,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/top_players_route";break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":le.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()}),le.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(y,A)=>{JSON.parse(A);let S=16;switch(y){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const D=window.deferredPWAPrompt;if(!D){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{D.prompt();const{outcome:q}=await D.userChoice;q==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),S=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(q){console.error("PWA install error:",q),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const X=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:X});const W=document.getElementById("app");W&&W.setAttribute("data-sync-theme",X),document.body.setAttribute("data-sync-theme",X)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":is.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":is.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()});const $=y=>{document.querySelectorAll(".play-section").forEach(S=>{S.style.display="none",S.classList.remove("play-section--active")});const A=document.getElementById(`play-section-${y}`);A&&(A.style.display="",A.classList.add("play-section--active"))},U=(y,A)=>{const S=y.split(".").pop(),D=document.querySelectorAll(".play-cntr .dash-nav__btn"),q=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");$(S),D.forEach(X=>{const W=X.dataset.publishRouteHome?.split(".").pop()||"";X.classList.toggle("dash-nav__btn--active",W===S)}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),q&&(q.style.overflow=S==="PLAY"?"hidden":"auto")};le.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",U);let z=null;le.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(y,A)=>{if(U(y),z){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}z=setTimeout(()=>{z=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),Pe.populateLeaderboard()}),le.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(y,A)=>{JSON.parse(A);const S=document.getElementById("btn-join__play--id");if(!S){console.warn("[app_events] PLAY button not found");return}const D=S.dataset.requiresJoin==="true",O=S.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",O,"requiresJoin:",D),D&&O==="join"){const X=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,W=Se();if(!X){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",X),le.publish(W.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:X,timestamp:Date.now()})),S.textContent="Play",S.dataset.requiresJoin="false",setTimeout(()=>{U(y),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else U(y),console.log("[app_events] Advancing carousel to PLAY page")}),le.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(y,A)=>{JSON.parse(A);let S=10;switch(y){case"WC.APP.HEAD_TOP.USER_PROFILE":S=0,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break;case"WC.APP.HEAD_TOP.LOGO":const D=e.appSession.session_app.version,O=new Date().getFullYear();D&&neodigmToast&&neodigmToast.q(`${D} 4/28/2026, 3:12:16 PM|© ${O} Bet Max Action`,"night");break;case"WC.APP.HEAD_TOP.CREATE_CONTEST":le.publish(e.hierTopics.WC__APP__FOOT__MY_TOURNEYS,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()}),le.subscribe(e.hierTopics.WC__TOURN_ACTION,(y,A)=>{const S=JSON.parse(A);let D=0;switch(S?.action){case"JOIN":D=512;break;case"PLAY":D=8;break;case"INFO":D=8;break}if(D){const O=S?.tournamentGuid,q=S?.action;console.log("[app_events] Navigating to play_route:",O,q),setTimeout(()=>{is.push({name:"play_route",query:{guid:O,action:q}})},D)}}),le.subscribe(e.hierTopics.WC__TOURN_ACTION,(y,A)=>{const S=JSON.parse(A);let D=16;switch(S?.action){case"FOCUS":D=3;break;case"SPORT_ICON":D=10;break;case"JOIN":D=5;break;case"PLAY":D=16;break}D&&neodigmWired4Sound&&neodigmWired4Sound.sound(D).vibrate()}),le.subscribe(e.hierTopics.WC__TOURN_ACTION,(y,A)=>{const S=JSON.parse(A);let D=0,O="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),S?.tournamentStatus){case"UPCOMING":O="success";break;case"LOCKED":O="warning";break;case"COMPLETED":O="danger";break}switch(S?.action){case"SPORT_ICON":S?.sportTitle==S?.sportDescription?D=S?.sportTitle:D=S?.sportTitle+"|"+S?.sportDescription;break}D&&neodigmToast&&neodigmToast.q(D,O)}),le.subscribe(e.hierTopics.WC__TOURN_ACTION,async(y,A)=>{const S=JSON.parse(A);if(S?.action==="JOIN"){const O=Se().appSession?.session_user?.guid;if(!O){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const q=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);q&&(q.setAttribute("data-bma-tourn-wait","true"),Ga.shootConfetti());const X={acctEntityGuid:O,tournamentGuid:S.tournamentGuid};try{const W={method:"POST",body:JSON.stringify(X),headers:xe.genHeaders()};console.log("Posting to:",xe.API_baseURI+"/m5t/"+xe.API_ver+"/coreTournaments/join",X);const se=await(await fetch(xe.API_baseURI+"/m5t/"+xe.API_ver+"/coreTournaments/join",W)).json();if(console.log("Join response:",se),se.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const ae=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);if(ae){ae.setAttribute("data-bma-tourn-wait","false");const te=ae.getAttribute("data-bma-tourn-entities");if(te)try{const ne=JSON.parse(te);ne.guids.includes(O)||(ne.guids.push(O),ae.setAttribute("data-bma-tourn-entities",JSON.stringify(ne)))}catch(ne){console.error("Failed to parse entities:",ne)}}},3e3);else{const ae=se?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(ae,"danger");const te=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);te&&te.setAttribute("data-bma-tourn-wait","false")}}catch(W){console.error("Join tournament error:",W),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),le.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(y,A)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const S=Se(),D=f();console.log("[nav-persist] HOME_ONMOUNT rehydrate. saved=",D,"raw=",sessionStorage.getItem("bma_home_nav_state")),D?(t=D.filter,r=D.lobbySubTab||"active",o=D.mySubTab||"active",n=D.privateSubTab||"all",a=D.sportFilter||"all"):(t="lobby",r="active",o="active",n="all",a="all"),console.log("[nav-persist] after rehydrate: currentFilter=",t,"privateSubTab=",n,"sport=",a),s="all",l="default",i="all",c="all",document.body.dataset.tournFilter=t,document.body.dataset.privateSub=n;try{document.querySelectorAll(".home-tab").forEach(X=>X.classList.remove("home-tab--active"));const O=t==="private"?n==="invites"?"private-invites":"private-all":t==="my"?o==="completed"?"my-completed":"my-active":r==="completed"?"lobby-completed":"lobby-active",q=document.querySelector(`[data-home-tab="${O}"]`);q&&q.classList.add("home-tab--active")}catch{}try{const O=document.querySelector("bma-app-head-sports");O&&O.setAttribute("data-selected-chip",a)}catch{}try{const O=document.querySelector("bma-app-head-mid");if(O){const X=t==="private"?"head_mid_private":t==="my"?"head_mid_tourneys":"head_mid_lobby";O.setAttribute("data-selected-tab",X)}const q=document.querySelector("bma-app-foot");if(q){const X=t==="private"?"foot_private":t==="my"?"foot_tourneys":"foot_lobby";q.setAttribute("data-selected-item",X)}}catch{}if(S.appSession?.session_user?.authenticated&&(S.coreInvites.length===0?xe.fetchMyInvites().then(O=>{O.ok&&Array.isArray(O.data?.invites)&&O.data.invites.length>0&&(S.setCoreInvites(O.data.invites),le.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"home_onmount_fetch",count:O.data.invites.length,timestamp:Date.now()})))}).catch(O=>console.warn("[home_onmount] fetchMyInvites failed:",O)):le.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"home_onmount_rerender",count:S.coreInvites.length,timestamp:Date.now()}))),S.coreTourn.length>0){console.log("[app_events] coreTourn already populated, hydrating from existing data"),le.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"REMOUNT"}));return}try{const O=await xe.fetchTournaments();console.log("[app_events] Tournaments fetched:",O),O?.rows&&Array.isArray(O.rows)?(S.pushCoreTourn({timestamp:Date.now(),source:"API",data:O.rows}),console.log("[app_events] Pushed to coreTourn, length:",S.coreTourn.length),le.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",O)}catch(O){console.error("[app_events] Error fetching tournaments:",O),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),le.subscribe(e.hierTopics.PROMOTION__LOAD,async(y,A)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const S=await xe.fetchPromotions();if(console.log("[app_events] Promotions fetched:",S),S?.ok&&S?.data&&Array.isArray(S.data)){const D=S.data.filter(q=>q.class==="banner"&&q.status==="LIVE");D.sort((q,X)=>(q.sort_order??0)-(X.sort_order??0)),console.log("[app_events] Banner promotions:",D);const O=document.querySelector(".featured-swiper .swiper-wrapper");if(!O){console.warn("[app_events] Swiper wrapper not found");return}if(O.innerHTML="",D.forEach((q,X)=>{const W=document.createElement("div");W.className="swiper-slide";const oe=document.createElement("div");oe.className=`featured-card featured-card--${X+1}`;const se=q.hero_img?encodeURI(q.hero_img):"";oe.style.backgroundImage=`url("${se}")`,oe.setAttribute("data-promotion-hero-img",q.hero_img||""),oe.setAttribute("data-promotion-caption",q.caption||""),oe.setAttribute("data-promotion-tagline",q.tagline||""),oe.setAttribute("data-promotion-toast",q.toast||""),oe.setAttribute("data-promotion-topic",q.topic?.topic||""),oe.setAttribute("data-promotion-topic-token",q.topic?.token||""),oe.setAttribute("data-promotion-marquee",q.maquee||""),W.appendChild(oe),O.appendChild(W)}),console.log("[app_events] Created",D.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),D.length===1){const q=document.querySelector(".featured-swiper .swiper-wrapper");q&&(q.style.justifyContent="center")}}}catch(S){console.error("[app_events] Error fetching promotions:",S)}}),le.subscribe(e.hierTopics.PROMOTION__CLICK,(y,A)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const S=JSON.parse(A);console.log("[app_events] Promotion clicked:",S),S.toast&&typeof neodigmToast<"u"&&neodigmToast.q(S.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const D=document.querySelector(".l-promotion #promoHero");D&&S.heroImg&&(D.src=S.heroImg);const O=document.querySelector(".l-promotion #promCaption");O&&S.caption&&(O.textContent=S.caption);const q=document.querySelector(".l-promotion #promoTagline");return q&&S.tagline&&(/<[^>]+>/.test(S.tagline)?q.innerHTML=S.tagline:q.textContent=S.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(S){console.error("[app_events] Error handling promotion click:",S)}}),le.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(y,A)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const S=Se();if(S.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const D=S.coreTourn[S.coreTourn.length-1],O=S.coreTourn.length>1?S.coreTourn[S.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",D);const q=[];if(O){const ae=D.data,te=O.data;ae.forEach(ne=>{const H=te.find(Z=>Z.guid===ne.guid);H&&H.status!==ne.status&&(console.log(`[app_events] Status changed for tournament ${ne.guid}: ${H.status} -> ${ne.status}`),q.push(ne.guid))})}const X=S.appSession?.session_user?.guid,W=[...D.data].sort((ae,te)=>{const ne=ae.status||ae.class,H=te.status||te.class,Z=ae.entities?.guids||[],ee=te.entities?.guids||[],de=Z.includes(X),ce=ee.includes(X),w=(T,G)=>{const Q=new Date(T.status_time||0).getTime();return new Date(G.status_time||0).getTime()-Q},L=ne==="LOCKED"&&de,v=H==="LOCKED"&&ce;if(L&&!v)return-1;if(!L&&v)return 1;if(L&&v)return w(ae,te);const C=ne==="UPCOMING",P=H==="UPCOMING";if(C&&!P)return-1;if(!C&&P)return 1;if(C&&P)return w(ae,te);const B=ne==="COMPLETED"&&de,Y=H==="COMPLETED"&&ce;if(B&&!Y)return-1;if(!B&&Y)return 1;if(B&&Y)return w(ae,te);const J=ne==="COMPLETED"&&!de,M=H==="COMPLETED"&&!ce;return J&&!M?1:!J&&M?-1:w(ae,te)}),oe=Pe.categorizeTournaments(W,t,a,X,{subStatus:s,sort:l,result:i,privateSubTab:n,mySubTab:o,lobbySubTab:r});if(console.log(`[app_events] Categorized into ${oe.length} categories for filter: ${t}/${a} sub:${s} sort:${l} result:${i}`),document.body.dataset.tournFilter=t,window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const ae=document.querySelector(".tournaments-grid");ae&&(ae.dataset.filterContext=t),window._homeRouteRenderCards(oe,!0,u,{tab:t,subStatus:s,sort:l,result:i,odds:c});const te=W.filter(L=>{const v=L.status||L.class,C=L.entities?.guids||[];return(v==="LOCKED"||v==="UPCOMING")&&C.includes(X)}).length,ne=W.reduce((L,v)=>{const C=v.status||v.class,P=v.entities?.guids||[];return(C==="LOCKED"||C==="UPCOMING")&&P.includes(X)?L+parseFloat(v.tournament_dollars||0):L},0),H=document.querySelector("bma-app-foot");H&&H.setAttribute("data-active-count",String(te));const Z=document.querySelector("bma-app-head-mid");Z&&Z.setAttribute("data-active-count",String(te));const ee=document.querySelector("bma-app-head-top");ee&&(ee.setAttribute("data-active-count",String(te)),ee.setAttribute("data-td-dollars",String(ne)));const de=document.getElementById("home-tab-active-badge");de&&(de.textContent=te,de.style.visibility=te>0?"visible":"hidden");const ce=W.filter(L=>{if(L.is_private!==!0)return!1;const v=L.entities?.guids||[];return L.creator_guid===X||v.includes(X)}).length,w=document.getElementById("home-tab-private-badge");if(w&&(w.textContent=ce),Z&&Z.setAttribute("data-private-count",String(ce)),H&&H.setAttribute("data-private-count",String(ce)),q.length>0){const L=D.data;q.forEach(v=>{const C=L.find(P=>P.guid===v);if(C){const P=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{le.publish(S.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:v,status:C.status,timestamp:Date.now()}))},P)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available");const se=document.getElementById("bma-scores-banner--id");if(se){const ae=new Set,te=[];for(const ne of D.data){const H=Array.isArray(ne.matches_expanded)?ne.matches_expanded:[];for(const Z of H){const ee=Z.guid||Z.id||Z.odds_id;!ee||ae.has(ee)||(ae.add(ee),te.push(Z))}}se.setAttribute("data-matches",JSON.stringify(te))}Pe.prefetchGlobalLeaderboard()}),le.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(y,A)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",A);const S=Se();try{const D=JSON.parse(A);console.log("[app_events] SSE tournament sync data:",D);const O=JSON.parse(D.msg);if(console.log("[app_events] Parsed tournaments array:",O),!Array.isArray(O)){console.warn("[app_events] SSE msg is not an array:",O);return}S.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:O}),console.log("[app_events] Pushed SSE data to coreTourn, length:",S.coreTourn.length),le.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),document.querySelector(".play-cntr")&&(console.log("[SSE] Play route is active, triggering real-time update"),Pe.hydratePlayPopup())}catch(D){console.error("[app_events] Error processing SSE tournament sync:",D)}}),le.subscribe(e.hierTopics.SSE__CORE__INVITE_SYNC,(y,A)=>{console.log("[app_events] SSE__CORE__INVITE_SYNC event received");const S=Se();try{const D=JSON.parse(A),O=JSON.parse(D.msg);if(!Array.isArray(O)||O.length===0){console.warn("[app_events] INVITE_SYNC msg not an array:",O);return}const{invite:q,action:X}=O[0]||{};if(!q?.guid||!X){console.warn("[app_events] INVITE_SYNC missing invite or action:",O[0]);return}switch(X){case"created":S.upsertInvite(q);break;case"revoked":case"accepted":case"declined":case"expired":case"pool_full":S.removeInvite(q.guid);break;default:console.warn("[app_events] INVITE_SYNC unknown action:",X);return}try{window.GameTypeLifeCycle&&X==="created"&&window.GameTypeLifeCycle.forTournament({guid:q.coreTournaments__guid,class:null}).doInviteReceived({tournament:{guid:q.coreTournaments__guid},invite:{guid:q.guid}}).catch(W=>console.warn("[app_events] doInviteReceived failed (non-fatal):",W?.message))}catch{}le.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:X,inviteGuid:q.guid,timestamp:Date.now()}))}catch(D){console.error("[app_events] Error processing INVITE_SYNC:",D)}});const F=()=>{const y=document.getElementById("invites-list");if(!y)return;const A=(e.coreInvites||[]).filter(q=>(q.status||"").toUpperCase()==="PENDING");A.sort((q,X)=>new Date(X.invited_at||0)-new Date(q.invited_at||0)),y.innerHTML="",A.forEach(q=>{const X=document.createElement("bma-invite-card"),W=q.tournament_preview||{},oe=(W.sports_allowed||[])[0]||{},se=qe.find(ae=>ae.key===oe.key);X.setAttribute("data-invite-guid",q.guid||""),X.setAttribute("data-tournament-caption",q.tournament_caption||W.caption||"Bet Max Pool"),X.setAttribute("data-invited-by-name",q.invited_by?.display_name||q.invited_by?.userName||"A friend"),X.setAttribute("data-expires-at",q.expires_at||""),oe.key&&X.setAttribute("data-sport-key",oe.key),se?.group&&X.setAttribute("data-sport-group",se.group),X.setAttribute("data-entrants-count",String(W.entities?.count??W.entities?.guids?.length??0)),X.setAttribute("data-entrants-max",String(W.entities?.max??0)),W.window_start_time&&X.setAttribute("data-window-start",W.window_start_time),y.appendChild(X)});const S=document.getElementById("home-tab-invites-badge");S&&(S.textContent=A.length,S.style.visibility=A.length>0?"visible":"hidden");const D=document.querySelector("bma-app-head-mid");D&&D.setAttribute("data-invites-count",String(A.length));const O=document.querySelector("bma-app-foot");O&&O.setAttribute("data-invites-count",String(A.length))};document.addEventListener("invite-accept",async y=>{const A=y.detail?.inviteGuid;if(!A)return;const S=await xe.acceptInvite(A);if(S.ok&&S.data?.tournament){e.pushCoreTourn({timestamp:Date.now(),source:"API",data:[S.data.tournament]}),e.removeInvite(A),le.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"accepted",inviteGuid:A,timestamp:Date.now()})),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"INVITE_ACCEPT"})),typeof neodigmToast<"u"&&neodigmToast.q("Joined the pool. Good luck.","success");return}const D=S.data?.error||`http_${S.status}`,O=D==="pool_full"?"This pool just filled up. Ask the host to create another.":D==="expired"?"This invite has expired. Ask the host to send a new one.":D==="already_accepted"?"You already joined this pool.":D==="not_invitee"?"This invite isn't yours.":D==="invite_not_found"?"Invite not found. It may have been revoked.":"Couldn't accept right now. Try again in a moment.";typeof neodigmToast<"u"&&neodigmToast.q(O,"warning"),["pool_full","expired","already_accepted","invite_not_found"].includes(D)&&(e.removeInvite(A),le.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"cleanup",inviteGuid:A,timestamp:Date.now()})))}),document.addEventListener("invite-decline",async y=>{const A=y.detail?.inviteGuid;if(!A)return;e.removeInvite(A),le.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"declined",inviteGuid:A,timestamp:Date.now()}));const S=await xe.declineInvite(A);S.ok||(console.warn("[app_events] decline failed:",S.status,S.data),typeof neodigmToast<"u"&&neodigmToast.q("Couldn't decline right now. Try again.","warning"))}),le.subscribe(e.hierTopics.ROUTE__INVITES_HYDRATE,()=>{F()}),le.subscribe(e.hierTopics.SSE__CORE__INVITE_SYNC,(y,A)=>{try{const S=JSON.parse(A),D=JSON.parse(S.msg),{invite:O,action:q}=D?.[0]||{};if(!O?.guid||!O.tournament_guid)return;const X=O.tournament_guid,W=Et[X];if(!W)return;const oe=W.findIndex(se=>se.guid===O.guid);if(q==="accepted"||q==="declined"||q==="expired"||q==="pool_full"){if(oe>=0){const se=[...W];se[oe]={...se[oe],...O},Et[X]=se,La(X)}}else q==="revoked"&&oe>=0&&(Et[X]=W.filter(se=>se.guid!==O.guid),La(X))}catch(S){console.warn("[info sent invites] SSE handler error:",S)}}),e.appSession?.session_user?.authenticated&&xe.fetchMyInvites().then(y=>{y.ok&&Array.isArray(y.data?.invites)?(e.setCoreInvites(y.data.invites),le.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"bootstrap",count:y.data.invites.length,timestamp:Date.now()})),console.log(`[app_events] Invites bootstrap: ${y.data.invites.length} pending`)):console.warn("[app_events] Invites bootstrap failed:",y.status,y.data)}).catch(y=>{console.warn("[app_events] Invites bootstrap error:",y)}),((window.location.hash||"").startsWith("#/home_route")||(window.location.hash||"")==="#/"||!window.location.hash)&&(console.log("[nav-persist] bindAppListeners boot-rehydrate; on home, re-publishing HOME_ONMOUNT"),le.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now(),source:"BOOT_REHYDRATE"}))),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const y=document.querySelector("#caption__my-profile");y&&(y.textContent="My Profile");const A=document.getElementById("profile-trophy-username");A&&(A.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const S=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",S),console.log("[app_events] coreTourn length:",e.coreTourn.length),!S||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const O=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",O.length);const q=se=>{const ae=document.getElementById("profile-stats-panel");ae&&(ae.innerHTML=Pe.buildStatsPanel(O,S,se))};q(Pe._betStatsCache?.stats||null),Pe._ensureBetStatsCache(S).then(se=>{se&&q(se)});let X=0,W=0,oe=0;O.forEach((se,ae)=>{if(!se.tags||!Array.isArray(se.tags)){console.log(`[app_events] Tournament ${ae} has no tags or tags not an array`);return}se.tags.forEach((te,ne)=>{if(typeof te=="object"&&te!==null){let H=null;te.entity_guid===S&&te.badge?H=te.badge:te[S]&&(H=te[S]),H==="--badge__ribbon--gold"?X++:H==="--badge__ribbon--silver"?W++:H==="--badge__ribbon--bronze"&&oe++}})}),setTimeout(()=>{let se=document.querySelectorAll(".badge-counter");if(se.length===0){const ae=document.querySelector("neodigm-sodapop");ae&&(se=ae.querySelectorAll(".badge-counter"))}se.length>=3?(se[0].textContent=W,se[1].textContent=X,se[2].textContent=oe,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const se=document.querySelector("#profile-tournaments-list");if(!se||!S||e.coreTourn.length===0)return;const ne=e.coreTourn[e.coreTourn.length-1].data.filter(de=>{try{return(typeof de.entities=="string"?JSON.parse(de.entities):de.entities)?.guids?.includes(S)}catch{return!1}}),H={LOCKED:0,UPCOMING:1,COMPLETED:2};ne.sort((de,ce)=>{const w=H[de.status]??3,L=H[ce.status]??3;return w!==L?w-L:new Date(ce.status_time||0)-new Date(de.status_time||0)});const Z=de=>{let ce=ne;if(de==="active"?ce=ne.filter(w=>w.status==="LOCKED"||w.status==="UPCOMING"):de==="completed"&&(ce=ne.filter(w=>w.status==="COMPLETED")),ce.length===0){se.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}se.innerHTML=ce.map(w=>{const L=w.entities?JSON.stringify(w.entities).replace(/"/g,"&quot;"):"",v=w.tags?JSON.stringify(w.tags).replace(/"/g,"&quot;"):"[]",C=w.sports_allowed?JSON.stringify(w.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${w.guid||""}"
                                        data-bma-tourn-caption="${w.caption||""}"
                                        data-bma-tourn-tagline="${w.tagline||""}"
                                        data-bma-tourn-status="${w.status||""}"
                                        data-bma-tourn-class="${w.status||""}"
                                        data-bma-tourn-sports_allowed="${C}"
                                        data-bma-tourn-entities="${L}"
                                        data-bma-tourn-entry_fee="${w.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${w.tournament_dollars||0}"
                                        data-bma-tourn-matches="${w.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${v}"
                                        data-bma-tourn-window_start_time="${w.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${w.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{se.querySelectorAll("bma-tournament-list-card").forEach((w,L)=>{w.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",w.style.animationDelay=`${Math.min(L*60,400)}ms`})})};Z("all");const ee=document.querySelector(".profile-tournaments__filters");ee&&ee.addEventListener("click",de=>{const ce=de.target.closest(".profile-tourn-filter");ce&&(ee.querySelectorAll(".profile-tourn-filter").forEach(w=>w.classList.remove("profile-tourn-filter--active")),ce.classList.add("profile-tourn-filter--active"),Z(ce.dataset.filter))})},600)},1e3)},"sodapop_my_profile"))},3e3),window._renderTopPlayers=async function(y="ALL"){const A=Se(),S=document.getElementById("global-leaderboard-container");if(S){S.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{let D;const O=Pe._globalLBCache[y];O?.data&&Date.now()-O.ts<300*1e3?(console.log(`[Global Leaderboard] Using prefetched cache [${y}]`),D=O.data):(console.log(`[Global Leaderboard] Cache miss [${y}], fetching fresh`),D=await xe.fetchAllTimeLeaderboard(y,100,"td"),Pe._globalLBCache[y]={data:D,ts:Date.now(),inflight:!1});const q=D?.data||[],X=D?.last_updated||null,W=A.coreTourn.length>0?A.coreTourn[A.coreTourn.length-1].data:[];if(!q.length){S.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const oe=S,se=A.appSession?.session_user?.guid,ae={};q.forEach(v=>{const C=v.user_guid;ae[C]={username:v.username||"Unknown",user_guid:C,totalTDWon:parseFloat(v.total_payout||0),totalPayout:parseFloat(v.total_payout||0),totalBets:parseInt(v.total_betslips||0),tournamentsPlayed:parseInt(v.tournaments_joined||0),tournamentsWon:parseInt(v.tournaments_won||0),totalTD:parseFloat(v.total_td_dollars||0),gold:0,silver:0,bronze:0,sports:new Set}}),W.forEach(v=>{!v.tags||!Array.isArray(v.tags)||v.tags.forEach(C=>{if(typeof C!="object"||!C)return;let P=null,B=null;if(C.entity_guid&&C.badge){if(C.entity_guid==="SYSTEM")return;P=C.entity_guid,B=C.badge}else{const J=Object.keys(C);for(const M of J){const T=C[M];if(typeof T=="string"&&T.startsWith("--badge__ribbon--")){P=M,B=T;break}}}if(!P||!B)return;ae[P]||(ae[P]={username:P.substring(0,8),user_guid:P,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,totalTD:0,gold:0,silver:0,bronze:0,sports:new Set});const Y=ae[P];B==="--badge__ribbon--gold"?Y.gold++:B==="--badge__ribbon--silver"?Y.silver++:B==="--badge__ribbon--bronze"&&Y.bronze++})});const te=Object.values(ae).filter(v=>v.username!=="Unknown");if(X){const v=Math.round((Date.now()-new Date(X).getTime())/6e4),C=v<1?"just now":v===1?"1 minute ago":`${v} minutes ago`;console.log(`[Global Leaderboard] Server last updated ${C}`)}const ne=te.filter(v=>v.gold+v.silver+v.bronze>0),H=new Set;te.forEach(v=>v.sports.forEach(C=>H.add(C)));const Z={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},ee=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let de="all";const ce=(v,C)=>{let P=[...te],B;v==="overall"&&(P=P.filter(ie=>ie.gold+ie.silver+ie.bronze>0)),v==="bysport"&&C&&C!=="all"&&(P=P.filter(ie=>ie.sports.has(C)));const Y=oe.querySelector(".glb__note");switch(Y&&Y.remove(),v){case"overall":P.sort((ie,ge)=>ge.gold*100+ge.silver*10+ge.bronze-(ie.gold*100+ie.silver*10+ie.bronze)||ge.totalPayout-ie.totalPayout||ge.totalBets-ie.totalBets),B=(ie,ge,_e,ke,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${ge<3?"glb__rank--top3":""}">#${ge+1}</span>
                                                <span class="glb__avatar" style="background: ${ke};">${_e}</span>
                                                <span class="glb__name">${ie.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right">
                                                ${ie.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${ie.gold}</span></div>`:""}
                                                ${ie.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${ie.silver}</span></div>`:""}
                                                ${ie.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${ie.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":P=P.filter(ie=>ie.totalTDWon>0),P.sort((ie,ge)=>ge.totalTDWon-ie.totalTDWon),B=(ie,ge,_e,ke,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${ge<3?"glb__rank--top3":""}">#${ge+1}</span>
                                                <span class="glb__avatar" style="background: ${ke};">${_e}</span>
                                                <span class="glb__name">${ie.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__earnings">TD$ ${Math.round(ie.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":P.sort((ie,ge)=>ge.totalPayout-ie.totalPayout||ge.totalBets-ie.totalBets),B=(ie,ge,_e,ke,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${ge<3?"glb__rank--top3":""}">#${ge+1}</span>
                                                <span class="glb__avatar" style="background: ${ke};">${_e}</span>
                                                <span class="glb__name">${ie.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right" style="gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${ie.totalBets} bets</span>
                                                <span class="glb__earnings">TD$ ${ie.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const J=oe.querySelector(".glb__list");if(!J)return;if(P.length===0){const ie=v==="earnings"?"No TD$ won from reconciled bets yet":v==="bysport"?"No players found for this sport":"No leaderboard data available";J.innerHTML=`<div class="leaderboard-empty"><p>${ie}</p></div>`;return}const M=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],T=ie=>M[ie.charCodeAt(0)%M.length];let G="";if(v==="overall"&&P.length>=3){const ie=(ge,_e,ke,Ae,Ne)=>{const Fe=P[ge],Qt=Fe.user_guid===se;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${_e===1?80:_e===2?64:56}px; height: ${_e===1?80:_e===2?64:56}px; background-image: var(${Ae}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${Qt?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${Fe.username}${Qt?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${Fe.gold+Fe.silver+Fe.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${ke}px; background: linear-gradient(180deg, ${Ne}33 0%, ${Ne}0D 100%); border-top: 3px solid ${Ne}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${Ne};">${_e===1?"1st":_e===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};G=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${ie(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${ie(0,1,90,"--badge__gold","#FFD700")}
                                        ${ie(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const Q='<div class="info-section__title">Rankings</div>',re='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',pe='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(v==="bysport"&&!oe.querySelector(".glb__note")){const ge=document.createElement("div");ge.className="glb__note",ge.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",ge.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const _e=oe.querySelector(".glb__sport-filters");_e&&_e.parentNode.insertBefore(ge,_e)}let be="";if(v==="earnings"&&P.length>=3){const ie=(ge,_e,ke,Ae)=>{const Ne=P[ge],Fe=Ne.user_guid===se;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${_e===1?80:_e===2?64:56}px; height: ${_e===1?80:_e===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${Fe?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${Ne.username}${Fe?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(Ne.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${ke}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${_e===1?"1st":_e===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};be=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${ie(1,2,70,"#00E676")}
                                        ${ie(0,1,90,"#00E676")}
                                        ${ie(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(v==="overall")J.innerHTML=G+re+Q+P.map((ie,ge)=>{const _e=(ie.username||"?")[0].toUpperCase(),ke=T(ie.username),Ae=ie.user_guid===se;return B(ie,ge,_e,ke,Ae)}).join("");else if(v==="earnings"){const ie='<div class="info-section__title">TD$ Won</div>';J.innerHTML=be+pe+ie+P.map((ge,_e)=>{const ke=(ge.username||"?")[0].toUpperCase(),Ae=T(ge.username),Ne=ge.user_guid===se;return B(ge,_e,ke,Ae,Ne)}).join("")}else if(v==="bysport"){let ie="";if(P.length>=3){const _e=(ke,Ae,Ne)=>{const Fe=P[ke],Qt=Fe.user_guid===se,tt=T(Fe.username),gt=(Fe.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${tt}; width: ${Ae===1?48:38}px; height: ${Ae===1?48:38}px; font-size: ${Ae===1?"1rem":"0.8rem"};">${gt}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${Qt?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${Fe.username}${Qt?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Fe.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${Ne}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${Ae===1?"1st":Ae===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};ie=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${_e(1,2,70)}
                                            ${_e(0,1,90)}
                                            ${_e(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const ge='<div class="info-section__title">Rankings</div>';J.innerHTML=ie+ge+P.map((_e,ke)=>{const Ae=(_e.username||"?")[0].toUpperCase(),Ne=T(_e.username),Fe=_e.user_guid===se;return B(_e,ke,Ae,Ne,Fe)}).join("")}requestAnimationFrame(()=>{J.querySelectorAll(".glb__card, .info-row").forEach((ie,ge)=>{ie.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",ie.style.animationDelay=`${Math.min(ge*50,400)}ms`})})},w=[...H].map(v=>{const C=Z[v]||v.replace(/^[a-z]+_/,"").toUpperCase(),P=qe.find(Y=>Y.key===v),B=P?P.group:"default";return`<button class="glb__sport-chip" data-sport="${v}">
                                <bma-sport-icon sport="${v}" data-sport-group="${B}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${C}</span>
                            </button>`}).join("");oe.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${ee.map((v,C)=>`
                                    <button class="glb__tab ${C===0?"glb__tab--active":""}" data-tab="${v.id}">${v.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${w}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const L=document.createElement("style");L.textContent=`
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
                        `,oe.prepend(L),ce("overall"),oe.querySelectorAll(".glb__tab").forEach(v=>{v.addEventListener("click",()=>{oe.querySelectorAll(".glb__tab").forEach(B=>B.classList.remove("glb__tab--active")),v.classList.add("glb__tab--active");const C=v.dataset.tab,P=oe.querySelector(".glb__sport-filters");P&&(P.style.display=C==="bysport"?"flex":"none"),ce(C,C==="bysport"?de:void 0)})}),oe.querySelectorAll(".glb__sport-chip").forEach(v=>{v.addEventListener("click",()=>{oe.querySelectorAll(".glb__sport-chip").forEach(C=>C.classList.remove("glb__sport-chip--active")),v.classList.add("glb__sport-chip--active"),de=v.dataset.sport,ce("bysport",de)})})}catch(D){console.error("[appEvents] Error fetching global leaderboard:",D);const O=document.getElementById("global-leaderboard-container");O&&(O.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>')}}},setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){window._renderTopPlayers&&await window._renderTopPlayers()},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}};class _0 extends HTMLElement{constructor(){super(),this.selectedItem="foot_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count","data-private-count","data-invites-count"]}attributeChangedCallback(t,a,s){a!==s&&(t==="data-selected-item"&&(this.selectedItem=s||"foot_lobby"),this.shadowRoot&&this.render())}handleItemClick(t,a){this.selectedItem=t,this.setAttribute("data-selected-item",t),le.publish(a,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){Me.theme;const t=Me.isDark,a=[{name:"foot_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.LOBBY"},{name:"foot_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.FOOT.TOURNEYS"},{name:"foot_private",caption:"Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.PRIVATE"},{name:"foot_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_profile",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],s=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,o=parseInt(this.getAttribute("data-invites-count"))||0,r=l=>{const i=this.selectedItem===l.name;let c="";return l.name==="foot_tourneys"?c=`<span class="nav-badge">${s}</span>`:l.name==="foot_private"&&(c=`<span class="nav-badge">${n}</span>`,o>0&&(c+=`<span class="nav-badge nav-badge--invite" aria-label="${o} pending invite${o===1?"":"s"}">${o}</span>`)),`
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
        ${je()}
        ${ha()}

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
        @media ${Zl.mobile} {
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
        ${a.map(l=>r(l)).join("")}
      </div>
    `,a.forEach(l=>{const i=this.shadowRoot.querySelector(`[data-item="${l.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(l.name,l.topic)),i.addEventListener("keypress",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.handleItemClick(l.name,l.topic))}))})}}customElements.define("bma-app-foot",_0);const y0=["data-selected-item"],w0={__name:"App",setup(e){const t=it(),a=ys(),s=Se(),n=ve(()=>{const c=a.name;return c==="home_route"||c==="top_players_route"}),o=Ce("foot_lobby"),r=c=>c==="my"?"foot_tourneys":c==="private"?"foot_private":"foot_lobby",l=()=>{const c=window.location.hash||"";if(c.startsWith("#/top_players_route"))o.value="foot_leaderboard";else if(c.startsWith("#/home_route")||c==="#/"||!c){const u=document.body.dataset.tournFilter||"lobby";o.value=r(u)}};Na(()=>a.name,()=>l(),{immediate:!0});let i=null;return rt(()=>{i=le.subscribe("ROUTE.HOME_HYDRATE",()=>l())}),Xt(()=>{i&&le.unsubscribe(i)}),rt(()=>{setTimeout(()=>{const c=s.appSession?.session_user?.guid,u=s.appSession?.session_user?.authenticated;c&&u&&s.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",c),sn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",c,s,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((c=null)=>{t.currentRoute.value?.meta?.previewAllowed||(neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${c}`,"primary"),t.push({name:c}))}).setOnState((c=null)=>{c&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=c)}).init({BASE:xe.API_baseURI})},2e3),setTimeout(()=>{Pe.bindAppListeners(s)},3e3),t.beforeEach((c,u,d)=>{if(c.name==="splash_route")return ai(rs.AUTHED),d();if(!c.name)return d(!1);const p=Ff(c.name,c.meta);if(ai(p),p===rs.DENIED)return d(!1);d()}),(c,u)=>(fe(),he($e,null,[et(ct(Kl),null,{default:so(({Component:d})=>[et(mu,{name:"slide-left"},{default:so(()=>[(fe(),Tl(_d(d)))]),_:2},1024)]),_:1}),n.value?(fe(),he("bma-app-foot",{key:0,"data-selected-item":o.value},null,8,y0)):Te("",!0)],64))}};class x0 extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name","data-active-count","data-td-dollars"]}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}handleLogoClick(t){t.preventDefault(),le.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),le.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}handleCreateContestClick(t){t.preventDefault(),le.publish("WC.APP.HEAD_TOP.CREATE_CONTEST",JSON.stringify({timestamp:Date.now()}))}render(){const t=Me.isDark,a=this.getAttribute("data-user-name")||"Guest",s=this.getAttribute("data-active-count")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),o=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString();this.shadowRoot.innerHTML=`
      <style>
        ${je()}
        ${ha()}

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
            <span class="profile-name">${a}</span>
            <svg class="profile-chevron" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 10l5 5 5-5z"/></svg>
          </button>
        </div>

        <!--
        <div class="head-kpis">
          <div class="head-kpi">
            <span class="head-kpi__value">${s}</span>
            <span class="head-kpi__label">Active</span>
          </div>
          <div class="head-kpi">
            <span class="head-kpi__value">${o}</span>
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
    `;const r=this.shadowRoot.querySelector("#logoLink"),l=this.shadowRoot.querySelector("#profileIcon"),i=this.shadowRoot.querySelector("#createContestBtn");r&&r.addEventListener("click",c=>this.handleLogoClick(c)),l&&l.addEventListener("click",c=>this.handleProfileClick(c)),i&&i.addEventListener("click",c=>this.handleCreateContestClick(c))}}customElements.define("bma-app-head-top",x0);class T0 extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count","data-private-count","data-invites-count"]}attributeChangedCallback(t,a,s){a!==s&&(t==="data-selected-tab"&&(this.selectedTab=s||"head_mid_lobby"),this.shadowRoot&&this.render())}handleTabClick(t,a){this.selectedTab=t,this.setAttribute("data-selected-tab",t),le.publish(a,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=Me.isDark,a=[{name:"head_mid_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS"},{name:"head_mid_private",caption:"Bet Max Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE"},{name:"head_mid_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],s=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,o=parseInt(this.getAttribute("data-invites-count"))||0,r=l=>{const i=this.selectedTab===l.name;let c="";return l.name==="head_mid_tourneys"?c=`<span class="nav-badge">${s}</span>`:l.name==="head_mid_private"&&(c=`<span class="nav-badge">${n}</span>`,o>0&&(c+=`<span class="nav-badge nav-badge--invite" aria-label="${o} pending invite${o===1?"":"s"}">${o}</span>`)),`
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
        ${je()}
        ${ha()}

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
        @media ${Zl.mobile} {
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
        ${a.map(l=>r(l)).join("")}
      </div>
    `,a.forEach(l=>{const i=this.shadowRoot.querySelector(`[data-tab="${l.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(l.name,l.topic)),i.addEventListener("keypress",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.handleTabClick(l.name,l.topic))}))})}}customElements.define("bma-app-head-mid",T0);class S0 extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,a,s){if(this.shadowRoot&&a!==s){if(t==="data-selected-chip"){if(this.selectedChip=s||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,a){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),le.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:a,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(a=>{const s=a.getAttribute("data-chip")===this.selectedChip;a.classList.toggle("chip-selected",s),a.classList.toggle("chip-unselected",!s)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(".head-sports-container"),n=this.shadowRoot?.querySelector("#navPrev"),o=this.shadowRoot?.querySelector("#navNext");if(!t||!a||!s||!n||!o)return;const r=Math.max(0,t.scrollWidth-t.clientWidth),l=r>8,i=t.scrollLeft<=4,c=t.scrollLeft>=r-4;s.classList.toggle("rail-has-overflow",l),t.classList.toggle("has-scroll",l),a.classList.toggle("has-overflow",l),a.classList.toggle("has-left-overflow",l&&!i),a.classList.toggle("has-right-overflow",l&&!c),n.classList.toggle("nav-disabled",!l||i),o.classList.toggle("nav-disabled",!l||c),n.setAttribute("aria-disabled",String(!l||i)),o.setAttribute("aria-disabled",String(!l||c)),n.tabIndex=!l||i?-1:0,o.tabIndex=!l||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!a||!s)return;const n=a.getBoundingClientRect(),o=s.getBoundingClientRect(),r=t.scrollWidth-t.clientWidth;if(o.left>=n.left&&o.right<=n.right)return;const l=12;let i;o.left<n.left?i=t.scrollLeft+(o.left-n.left)-l:i=t.scrollLeft+(o.right-n.right)+l,i=Math.max(0,Math.min(i,r)),!(Math.abs(t.scrollLeft-i)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:i,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const a=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=a-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const a=[...t.querySelectorAll(".sport-chip")];if(!a.length)return;const s=Math.max(0,t.scrollWidth-t.clientWidth);if(s<=8)return;const n=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,o=t.scrollLeft;let r=o,l=Number.POSITIVE_INFINITY;a.forEach(i=>{const c=Math.max(0,Math.min(i.offsetLeft-n,s)),u=Math.max(0,Math.min(i.offsetLeft+i.offsetWidth-t.clientWidth+n,s));[c,u].forEach(d=>{const p=Math.abs(d-o);p<l&&(l=p,r=d)})}),!(l<8)&&(this.isSnapping=!0,t.scrollTo({left:r,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",s=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=s.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),le.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const a=()=>{if(!this.isPointerDown)return;const s=Date.now()-this.dragStartTime,n=this.dragDistance>10||this.dragDistance>4&&s>180;this.isPointerDown=!1,t.style.cursor="grab",n&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",a),t.addEventListener("mouseup",a),t.addEventListener("mousemove",s=>{if(!this.isPointerDown)return;s.preventDefault();const o=(s.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(o)),t.scrollLeft=this.dragStartScrollLeft-o}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=Me.isDark,n=(Se().appMeta?.sports||[]).filter(f=>f.active===!0),o=["NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],r=[...n].sort((f,g)=>{const h=f.title||f.description||"",E=g.title||g.description||"",m=o.indexOf(h),_=o.indexOf(E);return m!==-1&&_!==-1?m-_:m!==-1?-1:_!==-1?1:h.toLowerCase().localeCompare(E.toLowerCase())}),l=r.findIndex(f=>(f.title||f.description)==="NFL");if(l!==-1){const[f]=r.splice(l,1);let g=-1;r.forEach((E,m)=>{String(E.key||"").startsWith("soccer_fifa_world_cup")&&(g=m)});const h=g!==-1?g+1:r.length;r.splice(h,0,f)}const i=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...r],c=f=>{const g=this.selectedChip===f.key,h=f.key==="all";let E="";return h?E='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':E=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`,`
        <div
          class="sport-chip ${g?"chip-selected":"chip-unselected"}"
          data-chip="${f.key}"
          role="button"
          tabindex="0"
          aria-label="${f.description||f.title}"
        >
          <div class="chip-circle">
            ${E}
          </div>
          <span class="chip-title">${f.title||f.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${je()}
        ${ha()}

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
    `,i.forEach(f=>{const g=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const u=this.shadowRoot.querySelector("#navPrev"),d=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),d&&d.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const p=this.shadowRoot.querySelector(".chips-container");p&&(p.scrollLeft=0),requestAnimationFrame(()=>{p&&(p.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",S0);class k0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-matches","data-sync-theme"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&this.render()}get matches(){const t=this.getAttribute("data-matches");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return qe.find(s=>s.key===t)?.group||"default"}_parseScoreboard(t){const a=t.scoreboard_data;if(!a)return null;try{return typeof a=="string"?JSON.parse(a):a}catch{return null}}_getMatchDisplay(t){const a=this._parseScoreboard(t)||{},s=parseInt(a.home_score||0),n=parseInt(a.away_score||0),o=a.period||0,r=String(a.time_remaining||"").trim(),l=r.toLowerCase(),i=s>0||n>0||o>0,c=String(t.status||"").toUpperCase()==="COMPLETED"||l==="final",u=t.scheduled_at||t.start_time||"";let d=!1;if(u){const _=u.includes("Z")||/[+-]\d{2}:\d{2}$/.test(u),x=new Date(_?u:u+"Z").getTime();isNaN(x)||(d=x<=Date.now())}const f=!c&&(i||r&&l!=="scheduled"&&l!=="final"||d),g=t.home_team_id||t.home_team||"Home",h=t.away_team_id||t.away_team||"Away";if(c)return{homeName:g,awayName:h,homeScore:s,awayScore:n,statusLabel:"FINAL",statusClass:"final",showScores:!0};if(f)return{homeName:g,awayName:h,homeScore:s,awayScore:n,statusLabel:r&&l!=="in progress"?r:"LIVE",statusClass:"live",showScores:!0};const E=t.scheduled_at||t.start_time||t.status_time;let m="UPCOMING";if(E)try{const _=E.includes("Z")||/[+-]\d{2}:\d{2}$/.test(E),x=new Date(_?E:E+"Z");isNaN(x.getTime())||(m=x.toLocaleString(void 0,{weekday:"short",hour:"numeric",minute:"2-digit"}))}catch{}return{homeName:g,awayName:h,homeScore:0,awayScore:0,statusLabel:m,statusClass:"upcoming",showScores:!1}}render(){const t=Date.now(),a=720*60*1e3,s=1440*60*1e3,o=this.matches.map(c=>({match:c,display:this._getMatchDisplay(c)})).filter(c=>c.display!==null).filter(c=>{const u=c.display.statusClass;if(u==="live")return!0;const d=new Date(c.match.scheduled_at||c.match.status_time||0).getTime();return d?u==="final"?t-d<=a:u==="upcoming"?d-t<=s&&d>=t:!1:!1}),r={live:0,final:1,upcoming:2};o.sort((c,u)=>{const d=r[c.display.statusClass]??9,p=r[u.display.statusClass]??9;if(d!==p)return d-p;const f=new Date(c.match.scheduled_at||c.match.status_time||0).getTime(),g=new Date(u.match.scheduled_at||u.match.status_time||0).getTime();return c.display.statusClass==="upcoming"?f-g:g-f});const l=o.slice(0,40);if(l.length===0){this.shadowRoot.innerHTML="";return}const i=l.map(({match:c,display:u})=>{const d=this._sportGroup(c.sport_id),p=f=>u.showScores?`<span class="score-pill__score">${f}</span>`:"";return`
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
                ${je()}
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
        `,this.shadowRoot.querySelectorAll(".score-pill").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.matchGuid;le.publish("SCORES.MATCH_CLICK",JSON.stringify({matchGuid:u,timestamp:Date.now()}))})})}_abbr(t){if(!t)return"";const a=String(t);if(a.length<=14)return a;const s=a.split(" ");return s.length>1?s[s.length-1].slice(0,14):a.slice(0,14)}}customElements.define("bma-scores-banner",k0);class E0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}_doLogout(){le.publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()}))}render(){let t="";try{t=Se().appSession?.session_app?.version||""}catch{}this.shadowRoot.innerHTML=`
            <style>
                ${je()}
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
        `;const a=this.shadowRoot.querySelector(".foot-logout");a&&a.addEventListener("click",()=>this._doLogout())}}customElements.define("bma-app-foot-branded",E0);const A0='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',Os='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',Ls='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',Qn='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class C0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,a,s){a!==s&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",a),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const a=t.bet||[];if(a.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const s=a[0],n=s.short_title||"Match Info N/A",r=Object.keys(s).filter(z=>z!=="short_title")[0]||"Unknown Team",l=s[r]||{},i=r==="Draw"?"Tie":r,c=l.odds??"N/A",u=(l.type||"N/A").toUpperCase(),d=parseFloat(l.stake||0),p=parseFloat(l.payout||0),f=l.reconciled!==!1,g=.01;let h,E,m;if(!f)h="pending",E="Pending",m=A0;else if(l.outcome)switch(l.outcome){case"WIN":h="won",E="Won",m=Os;break;case"HALF_WIN":h="half_won",E="Half Win",m=Os;break;case"PUSH":h="push",E="Push",m=Qn;break;case"HALF_LOSS":h="half_lost",E="Half Loss",m=Ls;break;case"LOSS":h="lost",E="Lost",m=Ls;break;default:p>d+g?(h="won",E="Won",m=Os):p<d-g?(h="lost",E="Lost",m=Ls):(h="push",E="Push",m=Qn)}else p>d+g?(h="won",E="Won",m=Os):p<d-g?(h="lost",E="Lost",m=Ls):(h="push",E="Push",m=Qn);let _=i;if(l.type==="spread"&&l.point!==void 0){const z=parseFloat(l.point);if(z===0)_=`${i} (DNB)`;else{const F=z>0?`+${z}`:`${z}`;_=`${i} ${F}`}}else l.type==="total"&&l.point!==void 0&&(_=`${l.team==="over"?"Over":"Under"} ${l.point}`);const x=z=>`TD$ ${z.toFixed(2)}`,k=p-d;let I,R;switch(h){case"pending":I=k>0?`+${x(k)}`:x(0),R="To win";break;case"won":I=`+${x(k)}`,R="Profit";break;case"half_won":I=`+${x(k)}`,R="Half Profit";break;case"lost":I=`-${x(d)}`,R="Lost";break;case"half_lost":I=`-${x(d-p)}`,R="Half Lost";break;case"push":I=x(d),R="Returned";break}const N=parseInt(c,10),j=Number.isFinite(N)&&N>0?`+${N}`:`${c}`,$=t.status_time?Ga.formatDateLocal(t.status_time):"",U=h==="pending"?"Placed":"Settled";this.shadowRoot.innerHTML=`
      <style>
        ${je()}

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
        .card.pending::before   { background: rgba(247, 198, 13, 0.035); }
        .card.won::before       { background: rgba(0, 230, 118, 0.035); }
        .card.half_won::before  { background: rgba(0, 230, 118, 0.02); }
        .card.lost::before      { background: rgba(205, 86, 89, 0.035); }
        .card.half_lost::before { background: rgba(205, 86, 89, 0.02); }
        .card.push::before      { background: transparent; }

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
        /* HALF_WIN — desaturated green. Still reads as a win so the
           user doesn't mistake a quarter-line push-on-half for a
           straight push, but dimmer than a full win. */
        .card.half_won .pill {
          background: rgba(0, 230, 118, 0.09);
          color: #6FD89E;
        }
        .card.lost .pill {
          background: rgba(205, 86, 89, 0.14);
          color: var(--status-completed-text, #CD5659);
        }
        /* HALF_LOSS — desaturated red. Parallel to HALF_WIN: still
           reads as a loss, but dimmer than a full loss. */
        .card.half_lost .pill {
          background: rgba(205, 86, 89, 0.09);
          color: #D8898B;
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

        .card.pending   .hero { color: var(--status-locked-text, #F7C60D); }
        .card.won       .hero { color: var(--status-upcoming-text, #00E676); }
        .card.half_won  .hero { color: #6FD89E; }
        .card.lost      .hero { color: var(--status-completed-text, #CD5659); text-decoration: line-through; text-decoration-thickness: 2px; }
        .card.half_lost .hero { color: #D8898B; }
        .card.push      .hero { color: var(--text-secondary, #b0b0b0); }

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

      <div class="card ${h}">
        <div class="pill">
          <span class="pill-dot"></span>
          <span class="pill-icon">${m}</span>
          <span class="pill-label">${E}</span>
        </div>
        <div class="body">
          <div class="header">
            <div class="match-desc">${n}</div>
          </div>
          <div class="middle">
            <div class="selection">${_}</div>
            <div class="odds">${j}</div>
            <div class="side-meta">
              <div class="bet-type">${u}</div>
              <div class="stake">${x(d)} stake</div>
            </div>
          </div>
          <div class="footer">
            <div class="hero">${I}</div>
            <div class="footer-meta">
              <div class="hero-sublabel">${R}</div>
              <div class="timestamp">${U} · ${$}</div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",C0);class P0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-game-mode-class","data-starting-td","data-tags","data-bets"]}connectedCallback(){this.render()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}_readJSONAttr(t){const a=this.getAttribute(t);if(!a)return null;try{return JSON.parse(a)}catch{return null}}_totalStakes(t){let a=0;for(const s of t||[]){const n=s?.bet||[];for(const o of n)for(const r of Object.keys(o)){if(r==="short_title")continue;const l=o[r],i=parseFloat(l?.stake||0);isNaN(i)||(a+=i)}}return a}render(){const t=this.getAttribute("data-game-mode-class")||"DEFAULT_FORMAT",a=parseFloat(this.getAttribute("data-starting-td")||0),s=this._readJSONAttr("data-tags")||[],n=this._readJSONAttr("data-bets")||[],o=typeof window<"u"&&window.GameTypeLifeCycle?window.GameTypeLifeCycle.forToken(t)||window.GameTypeLifeCycle.forTournament({class:t}):null;if(!o||typeof o.getProgressUI!="function"){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}const r={tournament_dollars:a,tags:s},l=o.getProgressUI(n,r);if(!l||l.type==="NONE"){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}this.removeAttribute("hidden");const i=this._totalStakes(n),c=Math.round(a).toLocaleString(),u=Math.round(i).toLocaleString(),d=Math.round(Math.max(0,a-i)).toLocaleString();if(l.complete){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}const p=l.type==="BET_TYPES"?"Build your lineup to qualify for the leaderboard.":`Bet TD$ ${c} to qualify for the leaderboard.`,f=l.hints?.[0]||`TD$ ${u} placed. TD$ ${d} to qualify.`;this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-game-mode-progress",P0);const O0="bma-beta-banner-dismissed:";class L0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-tournament-guid","data-mode-token","data-mode-label","data-beta-message"]}connectedCallback(){this.render()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}_storageKey(){const t=this.getAttribute("data-tournament-guid")||"";return t?`${O0}${t}`:null}_isDismissed(){const t=this._storageKey();if(!t)return!1;try{return localStorage.getItem(t)==="1"}catch{return!1}}_markDismissed(){const t=this._storageKey();if(t)try{localStorage.setItem(t,"1")}catch{}}render(){const t=this.getAttribute("data-mode-token")||"",a=this.getAttribute("data-mode-label")||t,s=this.getAttribute("data-beta-message")||"";if(!this.getAttribute("data-tournament-guid")||!s){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}if(this._isDismissed()){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}this.removeAttribute("hidden"),this.shadowRoot.innerHTML=`
          <style>
            :host {
              display: block;
              margin: 12px 8px;
            }
            :host([hidden]) { display: none; }

            .banner {
              position: relative;
              padding: 12px 40px 12px 14px;
              background: rgba(247, 198, 13, 0.08);
              border: 1px solid rgba(247, 198, 13, 0.35);
              border-radius: 10px;
              color: rgba(255, 255, 255, 0.85);
              font-size: 0.82rem;
              line-height: 1.4;
            }

            .badge {
              display: inline-block;
              font-size: 0.65rem;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              color: #F7C60D;
              margin-right: 6px;
            }

            .label {
              color: rgba(255, 255, 255, 0.75);
              font-weight: 600;
            }

            .msg {
              display: block;
              margin-top: 4px;
              color: rgba(255, 255, 255, 0.7);
            }

            .dismiss {
              position: absolute;
              top: 8px;
              right: 8px;
              width: 24px;
              height: 24px;
              border: none;
              background: transparent;
              color: rgba(255, 255, 255, 0.5);
              cursor: pointer;
              font-size: 18px;
              line-height: 1;
              border-radius: 4px;
            }
            .dismiss:hover { color: rgba(255, 255, 255, 0.85); background: rgba(255, 255, 255, 0.05); }
            .dismiss:focus-visible { outline: 2px solid #F7C60D; outline-offset: 1px; }
          </style>
          <div class="banner" role="status">
            <span class="badge">Beta</span><span class="label">${this._escape(a)}</span>
            <span class="msg">${this._escape(s)}</span>
            <button class="dismiss" type="button" aria-label="Dismiss beta notice">×</button>
          </div>
        `;const n=this.shadowRoot.querySelector(".dismiss");n&&n.addEventListener("click",()=>{this._markDismissed(),this.setAttribute("hidden",""),this.shadowRoot.innerHTML=""})}_escape(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}}customElements.define("bma-mode-beta-banner",L0);class M0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-invite-guid","data-tournament-caption","data-invited-by-name","data-expires-at","data-sport-key","data-sport-group","data-entrants-count","data-entrants-max","data-window-start"]}connectedCallback(){this.render()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}_formatCountdown(t){if(!t)return{text:"",level:"normal"};let a=new Date(t);if(!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z")),isNaN(a.getTime()))return{text:"",level:"normal"};const s=a.getTime()-Date.now();if(s<=0)return{text:"Expired",level:"critical"};const n=Math.floor(s/6e4),o=Math.floor(n/60),r=Math.floor(o/24);return r>=2?{text:`Expires in ${r}d`,level:"normal"}:o>=1?{text:`Expires in ${o}h`,level:"normal"}:n>=1?{text:`Expires in ${n}m`,level:"warn"}:{text:"Expires soon",level:"critical"}}_formatDay(t){if(!t)return"";let a=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z")),isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}render(){const t=this.getAttribute("data-invite-guid")||"",a=this.getAttribute("data-tournament-caption")||"Bet Max Pool",s=this.getAttribute("data-invited-by-name")||"Someone",n=this.getAttribute("data-expires-at")||"",o=this.getAttribute("data-sport-key")||"",r=this.getAttribute("data-sport-group")||"",l=this.getAttribute("data-entrants-count")||"0",i=this.getAttribute("data-entrants-max")||"0",c=this.getAttribute("data-window-start")||"",{text:u,level:d}=this._formatCountdown(n),p=d!=="normal"?`countdown--${d}`:"",f=o?`<bma-sport-icon sport="${o}" data-sport-group="${r}"></bma-sport-icon>`:"",g=c?this._formatDay(c):"";this.shadowRoot.innerHTML=`
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
          /* 1–60 minutes left: heads-up but still actionable */
          background: rgba(255, 165, 0, 0.12);
          color: var(--status-warning-text, #FFA500);
        }
        .countdown--critical {
          /* expired or under a minute: distinct red so it doesn't read
             the same as a sub-hour invite that the user can still RSVP */
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
            <span class="caption">${a}</span>
            <span class="subline">Invited by <strong>${s}</strong></span>
          </div>
          ${u?`<span class="countdown ${p}">${u}</span>`:""}
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
    `,this.shadowRoot.querySelectorAll("[data-action]").forEach(h=>{h.addEventListener("click",()=>{const E=h.dataset.action;this.dispatchEvent(new CustomEvent(`invite-${E}`,{detail:{inviteGuid:t},bubbles:!0,composed:!0}))})})}}customElements.define("bma-invite-card",M0);class D0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._selected="all"}static get observedAttributes(){return["data-sports","data-selected"]}connectedCallback(){this.render(),this._themeUnsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._themeUnsub&&this._themeUnsub()}attributeChangedCallback(t,a,s){if(a!==s){if(t==="data-selected"){const n=s||"all";if(this._selected===n)return;this._selected=n,this.shadowRoot&&this._syncChipStates();return}this.shadowRoot&&this.render()}}_syncChipStates(){this.shadowRoot.querySelectorAll("[data-chip]").forEach(t=>{const a=t.dataset.chip===this._selected;t.classList.toggle("chip--selected",a),t.setAttribute("aria-pressed",String(a))}),this._scrollSelectedIntoView()}_scrollSelectedIntoView(){this.isConnected&&requestAnimationFrame(()=>{const t=this.shadowRoot.querySelector(".rail-scroller"),a=this.shadowRoot.querySelector(".chip--selected");if(!t||!a)return;const s=a.offsetLeft,n=a.offsetWidth,o=t.clientWidth,r=t.scrollLeft;if(s>=r&&s+n<=r+o)return;const l=s-(o-n)/2;t.scrollTo({left:Math.max(0,l),behavior:"smooth"})})}get sports(){const t=this.getAttribute("data-sports");if(!t)return[];try{const a=JSON.parse(t);return Array.isArray(a)?a:[]}catch{return[]}}handleChipClick(t,a){this._selected!==t&&(this._selected=t,this._syncChipStates(),this.setAttribute("data-selected",t),this.dispatchEvent(new CustomEvent("sport-rail-change",{bubbles:!0,composed:!0,detail:{key:t,group:a||""}})))}handleArrowClick(t){const a=this.shadowRoot.querySelector(".rail-scroller");if(!a)return;const s=Math.max(160,a.clientWidth*.6);a.scrollBy({left:t==="next"?s:-s,behavior:"smooth"})}render(){const t=this.sports,a=[{key:"all",title:"All",group:"All"},...t],s=n=>{const o=this._selected===n.key,l=n.key==="all"?'<svg class="all-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"/></svg>':`<bma-sport-icon sport="${n.key}" data-sport-group="${n.group||""}"></bma-sport-icon>`;return`
        <button
          type="button"
          class="chip ${o?"chip--selected":""}"
          data-chip="${n.key}"
          data-chip-group="${n.group||""}"
          aria-pressed="${o}"
        >
          <span class="chip__icon">${l}</span>
          <span class="chip__label">${n.title||n.group||n.key}</span>
        </button>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${je()}

        :host {
          display: block;
          width: 100%;
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .rail {
          display: grid;
          grid-template-columns: 36px 1fr 36px;
          align-items: center;
          gap: 0;
        }

        .arrow {
          height: 40px;
          background: transparent;
          border: none;
          color: rgba(255, 255, 255, 0.55);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0;
          transition: color 160ms ease;
        }
        .arrow:hover { color: var(--status-locked-text, #F7C60D); }
        .arrow svg { width: 18px; height: 18px; }

        .rail-scroller {
          overflow-x: auto;
          /* Hide the native scrollbar on all browsers — the arrow
             buttons + selected-chip underline carry all the
             positional info we need, and a visible horizontal
             scrollbar stacked under the match-list's vertical one
             reads as chrome clutter. Scroll mechanics (arrows,
             touch swipe, programmatic scrollTo) all still work. */
          scrollbar-width: none;
          -ms-overflow-style: none;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
        }
        .rail-scroller::-webkit-scrollbar { display: none; }

        .chips {
          display: inline-flex;
          gap: 6px;
          padding: 8px 4px;
          white-space: nowrap;
        }

        .chip {
          appearance: none;
          background: transparent;
          border: none;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          font-family: inherit;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.2px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px 8px;
          cursor: pointer;
          border-bottom: 2px solid transparent;
          transition: color 160ms ease, border-color 160ms ease;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .chip:hover { color: rgba(255, 255, 255, 0.85); }
        .chip--selected {
          color: var(--status-locked-text, #F7C60D);
          border-bottom-color: var(--status-locked-text, #F7C60D);
        }

        .chip__icon {
          display: inline-flex;
          width: 20px;
          height: 20px;
          align-items: center;
          justify-content: center;
        }
        .chip__icon bma-sport-icon { width: 20px; height: 20px; display: block; }
        .chip__icon .all-icon { width: 18px; height: 18px; }
      </style>

      <div class="rail">
        <button type="button" class="arrow arrow--prev" aria-label="Scroll left" data-rail-arrow="prev">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <div class="rail-scroller">
          <div class="chips">${a.map(s).join("")}</div>
        </div>
        <button type="button" class="arrow arrow--next" aria-label="Scroll right" data-rail-arrow="next">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>
        </button>
      </div>
    `,this.shadowRoot.querySelectorAll("[data-chip]").forEach(n=>{n.addEventListener("click",()=>{this.handleChipClick(n.dataset.chip,n.dataset.chipGroup)})}),this.shadowRoot.querySelectorAll("[data-rail-arrow]").forEach(n=>{n.addEventListener("click",()=>this.handleArrowClick(n.dataset.railArrow))}),this._scrollSelectedIntoView()}}customElements.define("bma-play-sport-rail",D0);Ua.init();window.BrandManager=Ua;(async()=>{const e=()=>{const t=window.BMACOREAPI;return t?.API_baseURI?`${t.API_baseURI}/m5t/${t.API_ver||"v5"}`:"https://machfive-bmacdev-rest.onrender.com/m5t/v5"};try{const[t,a,s]=await Promise.all([Tn(()=>import("./GameTypeLifeCycle-CJY2uUbO.js"),[]),Tn(()=>Promise.resolve().then(()=>Qg),void 0),Tn(()=>import("./SportMarkets-C37he7Ah.js"),[])]);a.configureClientMeter({baseUrl:e,getToken:()=>localStorage.getItem("authToken")||null,debug:!1}),t.default.configureMeter(a.clientMeter),t.default.configureSportMarkets(n=>s.default.get(n)),s.default.init({baseUrl:e}).catch(n=>{console.warn("[SportMarkets] background init failed (non-fatal):",n?.message)}),window.GameTypeLifeCycle=t.default,window.SportMarkets=s.default,console.log("[GameTypeLifeCycle] client meter wired. Tokens:",t.default.TOKENS)}catch(t){console.warn("[GameTypeLifeCycle] boot failed (non-fatal):",t?.message)}})();const fi=`
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",fi)}):document.body.insertAdjacentHTML("beforeend",fi);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const xn=Uu(w0);xn.config.devtools=!1;xn.use(Vu());xn.use(is);xn.mount("#app");(function(){let t=!1;const a=r=>{if(!t)return;const l=r.target;l&&typeof l.closest=="function"&&l.closest("neodigm-sodapop")||r.preventDefault()},s=()=>{const r=t,l=!!document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']");if(t=l,document.body.style.touchAction=l?"none":"",document.documentElement.style.overscrollBehavior=l?"none":"",r&&!l){const i=document.querySelector("bma-app-foot");i&&i.setAttribute("data-selected-item","foot_lobby");const c=document.querySelector("bma-app-head-mid");c&&c.setAttribute("data-selected-tab","head_mid_lobby")}},n=new MutationObserver(s),o=()=>{n.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]}),document.addEventListener("touchmove",a,{passive:!1,capture:!0}),s()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})();document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(a=>{neodigmCarousel.init().nav({id:a.id,nav:"resize"},!1)})},303)})});
