(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function So(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const Pe={},js=[],Dt=()=>{},Lc=()=>!1,Xr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Eo=e=>e.startsWith("onUpdate:"),Be=Object.assign,ko=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Fu=Object.prototype.hasOwnProperty,Se=(e,t)=>Fu.call(e,t),pe=Array.isArray,Us=e=>Pa(e)==="[object Map]",Qr=e=>Pa(e)==="[object Set]",si=e=>Pa(e)==="[object Date]",he=e=>typeof e=="function",Le=e=>typeof e=="string",It=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",Dc=e=>(Ce(e)||he(e))&&he(e.then)&&he(e.catch),Nc=Object.prototype.toString,Pa=e=>Nc.call(e),zu=e=>Pa(e).slice(8,-1),Ic=e=>Pa(e)==="[object Object]",Ao=e=>Le(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,la=So(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Zr=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Hu=/-\w/g,gt=Zr(e=>e.replace(Hu,t=>t.slice(1).toUpperCase())),ju=/\B([A-Z])/g,ms=Zr(e=>e.replace(ju,"-$1").toLowerCase()),en=Zr(e=>e.charAt(0).toUpperCase()+e.slice(1)),_n=Zr(e=>e?`on${en(e)}`:""),ps=(e,t)=>!Object.is(e,t),Er=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Bc=(e,t,s,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:s})},Uu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},qu=e=>{const t=Le(e)?Number(e):NaN;return isNaN(t)?e:t};let ai;const tn=()=>ai||(ai=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Po(e){if(pe(e)){const t={};for(let s=0;s<e.length;s++){const a=e[s],r=Le(a)?Yu(a):Po(a);if(r)for(const n in r)t[n]=r[n]}return t}else if(Le(e)||Ce(e))return e}const Gu=/;(?![^(]*\))/g,Vu=/:([^]+)/,Ku=/\/\*[^]*?\*\//g;function Yu(e){const t={};return e.replace(Ku,"").split(Gu).forEach(s=>{if(s){const a=s.split(Vu);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Qt(e){let t="";if(Le(e))t=e;else if(pe(e))for(let s=0;s<e.length;s++){const a=Qt(e[s]);a&&(t+=a+" ")}else if(Ce(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Wu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ju=So(Wu);function Fc(e){return!!e||e===""}function Xu(e,t){if(e.length!==t.length)return!1;let s=!0;for(let a=0;s&&a<e.length;a++)s=sn(e[a],t[a]);return s}function sn(e,t){if(e===t)return!0;let s=si(e),a=si(t);if(s||a)return s&&a?e.getTime()===t.getTime():!1;if(s=It(e),a=It(t),s||a)return e===t;if(s=pe(e),a=pe(t),s||a)return s&&a?Xu(e,t):!1;if(s=Ce(e),a=Ce(t),s||a){if(!s||!a)return!1;const r=Object.keys(e).length,n=Object.keys(t).length;if(r!==n)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(i&&!l||!i&&l||!sn(e[o],t[o]))return!1}}return String(e)===String(t)}function zc(e,t){return e.findIndex(s=>sn(s,t))}const Hc=e=>!!(e&&e.__v_isRef===!0),jc=e=>Le(e)?e:e==null?"":pe(e)||Ce(e)&&(e.toString===Nc||!he(e.toString))?Hc(e)?jc(e.value):JSON.stringify(e,Uc,2):String(e),Uc=(e,t)=>Hc(t)?Uc(e,t.value):Us(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[a,r],n)=>(s[vn(a,n)+" =>"]=r,s),{})}:Qr(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>vn(s))}:It(t)?vn(t):Ce(t)&&!pe(t)&&!Ic(t)?String(t):t,vn=(e,t="")=>{var s;return It(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Ue;class qc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Ue;try{return Ue=this,t()}finally{Ue=s}}}on(){++this._on===1&&(this.prevScope=Ue,Ue=this)}off(){this._on>0&&--this._on===0&&(Ue=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(this.effects.length=0,s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Gc(e){return new qc(e)}function Vc(){return Ue}function Qu(e,t=!1){Ue&&Ue.cleanups.push(e)}let Oe;const yn=new WeakSet;class Kc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ue&&Ue.active&&Ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,yn.has(this)&&(yn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Wc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ri(this),Jc(this);const t=Oe,s=vt;Oe=this,vt=!0;try{return this.fn()}finally{Xc(this),Oe=t,vt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)$o(t);this.deps=this.depsTail=void 0,ri(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?yn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){to(this)&&this.run()}get dirty(){return to(this)}}let Yc=0,ca,da;function Wc(e,t=!1){if(e.flags|=8,t){e.next=da,da=e;return}e.next=ca,ca=e}function Co(){Yc++}function Oo(){if(--Yc>0)return;if(da){let t=da;for(da=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;ca;){let t=ca;for(ca=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=s}}if(e)throw e}function Jc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Xc(e){let t,s=e.depsTail,a=s;for(;a;){const r=a.prevDep;a.version===-1?(a===s&&(s=r),$o(a),Zu(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=r}e.deps=t,e.depsTail=s}function to(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Qc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Qc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===va)||(e.globalVersion=va,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!to(e))))return;e.flags|=2;const t=e.dep,s=Oe,a=vt;Oe=e,vt=!0;try{Jc(e);const r=e.fn(e._value);(t.version===0||ps(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{Oe=s,vt=a,Xc(e),e.flags&=-3}}function $o(e,t=!1){const{dep:s,prevSub:a,nextSub:r}=e;if(a&&(a.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=a,e.nextSub=void 0),s.subs===e&&(s.subs=a,!a&&s.computed)){s.computed.flags&=-5;for(let n=s.computed.deps;n;n=n.nextDep)$o(n,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Zu(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let vt=!0;const Zc=[];function Zt(){Zc.push(vt),vt=!1}function es(){const e=Zc.pop();vt=e===void 0?!0:e}function ri(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=Oe;Oe=void 0;try{t()}finally{Oe=s}}}let va=0;class ep{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Oe||!vt||Oe===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==Oe)s=this.activeLink=new ep(Oe,this),Oe.deps?(s.prevDep=Oe.depsTail,Oe.depsTail.nextDep=s,Oe.depsTail=s):Oe.deps=Oe.depsTail=s,ed(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const a=s.nextDep;a.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=a),s.prevDep=Oe.depsTail,s.nextDep=void 0,Oe.depsTail.nextDep=s,Oe.depsTail=s,Oe.deps===s&&(Oe.deps=a)}return s}trigger(t){this.version++,va++,this.notify(t)}notify(t){Co();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Oo()}}}function ed(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)ed(a)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const Mr=new WeakMap,Os=Symbol(""),so=Symbol(""),ya=Symbol("");function qe(e,t,s){if(vt&&Oe){let a=Mr.get(e);a||Mr.set(e,a=new Map);let r=a.get(s);r||(a.set(s,r=new Mo),r.map=a,r.key=s),r.track()}}function Wt(e,t,s,a,r,n){const o=Mr.get(e);if(!o){va++;return}const i=l=>{l&&l.trigger()};if(Co(),t==="clear")o.forEach(i);else{const l=pe(e),c=l&&Ao(s);if(l&&s==="length"){const d=Number(a);o.forEach((u,p)=>{(p==="length"||p===ya||!It(p)&&p>=d)&&i(u)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),c&&i(o.get(ya)),t){case"add":l?c&&i(o.get("length")):(i(o.get(Os)),Us(e)&&i(o.get(so)));break;case"delete":l||(i(o.get(Os)),Us(e)&&i(o.get(so)));break;case"set":Us(e)&&i(o.get(Os));break}}Oo()}function tp(e,t){const s=Mr.get(e);return s&&s.get(t)}function Ls(e){const t=ve(e);return t===e?t:(qe(t,"iterate",ya),yt(e)?t:t.map(Qe))}function Ro(e){return qe(e=ve(e),"iterate",ya),e}const sp={__proto__:null,[Symbol.iterator](){return wn(this,Symbol.iterator,Qe)},concat(...e){return Ls(this).concat(...e.map(t=>pe(t)?Ls(t):t))},entries(){return wn(this,"entries",e=>(e[1]=Qe(e[1]),e))},every(e,t){return Bt(this,"every",e,t,void 0,arguments)},filter(e,t){return Bt(this,"filter",e,t,s=>s.map(Qe),arguments)},find(e,t){return Bt(this,"find",e,t,Qe,arguments)},findIndex(e,t){return Bt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Bt(this,"findLast",e,t,Qe,arguments)},findLastIndex(e,t){return Bt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Bt(this,"forEach",e,t,void 0,arguments)},includes(...e){return xn(this,"includes",e)},indexOf(...e){return xn(this,"indexOf",e)},join(e){return Ls(this).join(e)},lastIndexOf(...e){return xn(this,"lastIndexOf",e)},map(e,t){return Bt(this,"map",e,t,void 0,arguments)},pop(){return Xs(this,"pop")},push(...e){return Xs(this,"push",e)},reduce(e,...t){return ni(this,"reduce",e,t)},reduceRight(e,...t){return ni(this,"reduceRight",e,t)},shift(){return Xs(this,"shift")},some(e,t){return Bt(this,"some",e,t,void 0,arguments)},splice(...e){return Xs(this,"splice",e)},toReversed(){return Ls(this).toReversed()},toSorted(e){return Ls(this).toSorted(e)},toSpliced(...e){return Ls(this).toSpliced(...e)},unshift(...e){return Xs(this,"unshift",e)},values(){return wn(this,"values",Qe)}};function wn(e,t,s){const a=Ro(e),r=a[t]();return a!==e&&!yt(e)&&(r._next=r.next,r.next=()=>{const n=r._next();return n.done||(n.value=s(n.value)),n}),r}const ap=Array.prototype;function Bt(e,t,s,a,r,n){const o=Ro(e),i=o!==e&&!yt(e),l=o[t];if(l!==ap[t]){const u=l.apply(e,n);return i?Qe(u):u}let c=s;o!==e&&(i?c=function(u,p){return s.call(this,Qe(u),p,e)}:s.length>2&&(c=function(u,p){return s.call(this,u,p,e)}));const d=l.call(o,c,a);return i&&r?r(d):d}function ni(e,t,s,a){const r=Ro(e);let n=s;return r!==e&&(yt(e)?s.length>3&&(n=function(o,i,l){return s.call(this,o,i,l,e)}):n=function(o,i,l){return s.call(this,o,Qe(i),l,e)}),r[t](n,...a)}function xn(e,t,s){const a=ve(e);qe(a,"iterate",ya);const r=a[t](...s);return(r===-1||r===!1)&&No(s[0])?(s[0]=ve(s[0]),a[t](...s)):r}function Xs(e,t,s=[]){Zt(),Co();const a=ve(e)[t].apply(e,s);return Oo(),es(),a}const rp=So("__proto__,__v_isRef,__isVue"),td=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(It));function np(e){It(e)||(e=String(e));const t=ve(this);return qe(t,"has",e),t.hasOwnProperty(e)}class sd{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,a){if(s==="__v_skip")return t.__v_skip;const r=this._isReadonly,n=this._isShallow;if(s==="__v_isReactive")return!r;if(s==="__v_isReadonly")return r;if(s==="__v_isShallow")return n;if(s==="__v_raw")return a===(r?n?mp:od:n?nd:rd).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=pe(t);if(!r){let l;if(o&&(l=sp[s]))return l;if(s==="hasOwnProperty")return np}const i=Reflect.get(t,s,Re(t)?t:a);if((It(s)?td.has(s):rp(s))||(r||qe(t,"get",s),n))return i;if(Re(i)){const l=o&&Ao(s)?i:i.value;return r&&Ce(l)?ro(l):l}return Ce(i)?r?ro(i):Xt(i):i}}class ad extends sd{constructor(t=!1){super(!1,t)}set(t,s,a,r){let n=t[s];if(!this._isShallow){const l=Rs(n);if(!yt(a)&&!Rs(a)&&(n=ve(n),a=ve(a)),!pe(t)&&Re(n)&&!Re(a))return l||(n.value=a),!0}const o=pe(t)&&Ao(s)?Number(s)<t.length:Se(t,s),i=Reflect.set(t,s,a,Re(t)?t:r);return t===ve(r)&&(o?ps(a,n)&&Wt(t,"set",s,a):Wt(t,"add",s,a)),i}deleteProperty(t,s){const a=Se(t,s);t[s];const r=Reflect.deleteProperty(t,s);return r&&a&&Wt(t,"delete",s,void 0),r}has(t,s){const a=Reflect.has(t,s);return(!It(s)||!td.has(s))&&qe(t,"has",s),a}ownKeys(t){return qe(t,"iterate",pe(t)?"length":Os),Reflect.ownKeys(t)}}class op extends sd{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const ip=new ad,lp=new op,cp=new ad(!0);const ao=e=>e,Ra=e=>Reflect.getPrototypeOf(e);function dp(e,t,s){return function(...a){const r=this.__v_raw,n=ve(r),o=Us(n),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...a),d=s?ao:t?no:Qe;return!t&&qe(n,"iterate",l?so:Os),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:i?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function La(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function up(e,t){const s={get(r){const n=this.__v_raw,o=ve(n),i=ve(r);e||(ps(r,i)&&qe(o,"get",r),qe(o,"get",i));const{has:l}=Ra(o),c=t?ao:e?no:Qe;if(l.call(o,r))return c(n.get(r));if(l.call(o,i))return c(n.get(i));n!==o&&n.get(r)},get size(){const r=this.__v_raw;return!e&&qe(ve(r),"iterate",Os),r.size},has(r){const n=this.__v_raw,o=ve(n),i=ve(r);return e||(ps(r,i)&&qe(o,"has",r),qe(o,"has",i)),r===i?n.has(r):n.has(r)||n.has(i)},forEach(r,n){const o=this,i=o.__v_raw,l=ve(i),c=t?ao:e?no:Qe;return!e&&qe(l,"iterate",Os),i.forEach((d,u)=>r.call(n,c(d),c(u),o))}};return Be(s,e?{add:La("add"),set:La("set"),delete:La("delete"),clear:La("clear")}:{add(r){!t&&!yt(r)&&!Rs(r)&&(r=ve(r));const n=ve(this);return Ra(n).has.call(n,r)||(n.add(r),Wt(n,"add",r,r)),this},set(r,n){!t&&!yt(n)&&!Rs(n)&&(n=ve(n));const o=ve(this),{has:i,get:l}=Ra(o);let c=i.call(o,r);c||(r=ve(r),c=i.call(o,r));const d=l.call(o,r);return o.set(r,n),c?ps(n,d)&&Wt(o,"set",r,n):Wt(o,"add",r,n),this},delete(r){const n=ve(this),{has:o,get:i}=Ra(n);let l=o.call(n,r);l||(r=ve(r),l=o.call(n,r)),i&&i.call(n,r);const c=n.delete(r);return l&&Wt(n,"delete",r,void 0),c},clear(){const r=ve(this),n=r.size!==0,o=r.clear();return n&&Wt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{s[r]=dp(r,e,t)}),s}function Lo(e,t){const s=up(e,t);return(a,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?a:Reflect.get(Se(s,r)&&r in a?s:a,r,n)}const pp={get:Lo(!1,!1)},fp={get:Lo(!1,!0)},hp={get:Lo(!0,!1)};const rd=new WeakMap,nd=new WeakMap,od=new WeakMap,mp=new WeakMap;function gp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function bp(e){return e.__v_skip||!Object.isExtensible(e)?0:gp(zu(e))}function Xt(e){return Rs(e)?e:Do(e,!1,ip,pp,rd)}function id(e){return Do(e,!1,cp,fp,nd)}function ro(e){return Do(e,!0,lp,hp,od)}function Do(e,t,s,a,r){if(!Ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=bp(e);if(n===0)return e;const o=r.get(e);if(o)return o;const i=new Proxy(e,n===2?a:s);return r.set(e,i),i}function $s(e){return Rs(e)?$s(e.__v_raw):!!(e&&e.__v_isReactive)}function Rs(e){return!!(e&&e.__v_isReadonly)}function yt(e){return!!(e&&e.__v_isShallow)}function No(e){return e?!!e.__v_raw:!1}function ve(e){const t=e&&e.__v_raw;return t?ve(t):e}function Io(e){return!Se(e,"__v_skip")&&Object.isExtensible(e)&&Bc(e,"__v_skip",!0),e}const Qe=e=>Ce(e)?Xt(e):e,no=e=>Ce(e)?ro(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function Ke(e){return ld(e,!1)}function _p(e){return ld(e,!0)}function ld(e,t){return Re(e)?e:new vp(e,t)}class vp{constructor(t,s){this.dep=new Mo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ve(t),this._value=s?t:Qe(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,a=this.__v_isShallow||yt(t)||Rs(t);t=a?t:ve(t),ps(t,s)&&(this._rawValue=t,this._value=a?t:Qe(t),this.dep.trigger())}}function lt(e){return Re(e)?e.value:e}const yp={get:(e,t,s)=>t==="__v_raw"?e:lt(Reflect.get(e,t,s)),set:(e,t,s,a)=>{const r=e[t];return Re(r)&&!Re(s)?(r.value=s,!0):Reflect.set(e,t,s,a)}};function cd(e){return $s(e)?e:new Proxy(e,yp)}function wp(e){const t=pe(e)?new Array(e.length):{};for(const s in e)t[s]=Tp(e,s);return t}class xp{constructor(t,s,a){this._object=t,this._key=s,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return tp(ve(this._object),this._key)}}function Tp(e,t,s){const a=e[t];return Re(a)?a:new xp(e,t,s)}class Sp{constructor(t,s,a){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Mo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=va-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Wc(this,!0),!0}get value(){const t=this.dep.track();return Qc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Ep(e,t,s=!1){let a,r;return he(e)?a=e:(a=e.get,r=e.set),new Sp(a,r,s)}const Da={},Rr=new WeakMap;let ks;function kp(e,t=!1,s=ks){if(s){let a=Rr.get(s);a||Rr.set(s,a=[]),a.push(e)}}function Ap(e,t,s=Pe){const{immediate:a,deep:r,once:n,scheduler:o,augmentJob:i,call:l}=s,c=S=>r?S:yt(S)||r===!1||r===0?Jt(S,1):Jt(S);let d,u,p,f,b=!1,v=!1;if(Re(e)?(u=()=>e.value,b=yt(e)):$s(e)?(u=()=>c(e),b=!0):pe(e)?(v=!0,b=e.some(S=>$s(S)||yt(S)),u=()=>e.map(S=>{if(Re(S))return S.value;if($s(S))return c(S);if(he(S))return l?l(S,2):S()})):he(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){Zt();try{p()}finally{es()}}const S=ks;ks=d;try{return l?l(e,3,[f]):e(f)}finally{ks=S}}:u=Dt,t&&r){const S=u,g=r===!0?1/0:r;u=()=>Jt(S(),g)}const y=Vc(),m=()=>{d.stop(),y&&y.active&&ko(y.effects,d)};if(n&&t){const S=t;t=(...g)=>{S(...g),m()}}let h=v?new Array(e.length).fill(Da):Da;const _=S=>{if(!(!(d.flags&1)||!d.dirty&&!S))if(t){const g=d.run();if(r||b||(v?g.some((w,x)=>ps(w,h[x])):ps(g,h))){p&&p();const w=ks;ks=d;try{const x=[g,h===Da?void 0:v&&h[0]===Da?[]:h,f];h=g,l?l(t,3,x):t(...x)}finally{ks=w}}}else d.run()};return i&&i(_),d=new Kc(u),d.scheduler=o?()=>o(_,!1):_,f=S=>kp(S,!1,d),p=d.onStop=()=>{const S=Rr.get(d);if(S){if(l)l(S,4);else for(const g of S)g();Rr.delete(d)}},t?a?_(!0):h=d.run():o?o(_.bind(null,!0),!0):d.run(),m.pause=d.pause.bind(d),m.resume=d.resume.bind(d),m.stop=m,m}function Jt(e,t=1/0,s){if(t<=0||!Ce(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,Re(e))Jt(e.value,t,s);else if(pe(e))for(let a=0;a<e.length;a++)Jt(e[a],t,s);else if(Qr(e)||Us(e))e.forEach(a=>{Jt(a,t,s)});else if(Ic(e)){for(const a in e)Jt(e[a],t,s);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Jt(e[a],t,s)}return e}function Ca(e,t,s,a){try{return a?e(...a):e()}catch(r){an(r,t,s)}}function xt(e,t,s,a){if(he(e)){const r=Ca(e,t,s,a);return r&&Dc(r)&&r.catch(n=>{an(n,t,s)}),r}if(pe(e)){const r=[];for(let n=0;n<e.length;n++)r.push(xt(e[n],t,s,a));return r}}function an(e,t,s,a=!0){const r=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Pe;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}i=i.parent}if(n){Zt(),Ca(n,null,10,[e,l,c]),es();return}}Pp(e,s,r,a,o)}function Pp(e,t,s,a=!0,r=!1){if(r)throw e;console.error(e)}const Ze=[];let Ct=-1;const qs=[];let is=null,zs=0;const dd=Promise.resolve();let Lr=null;function Bo(e){const t=Lr||dd;return e?t.then(this?e.bind(this):e):t}function Cp(e){let t=Ct+1,s=Ze.length;for(;t<s;){const a=t+s>>>1,r=Ze[a],n=wa(r);n<e||n===e&&r.flags&2?t=a+1:s=a}return t}function Fo(e){if(!(e.flags&1)){const t=wa(e),s=Ze[Ze.length-1];!s||!(e.flags&2)&&t>=wa(s)?Ze.push(e):Ze.splice(Cp(t),0,e),e.flags|=1,ud()}}function ud(){Lr||(Lr=dd.then(fd))}function Op(e){pe(e)?qs.push(...e):is&&e.id===-1?is.splice(zs+1,0,e):e.flags&1||(qs.push(e),e.flags|=1),ud()}function oi(e,t,s=Ct+1){for(;s<Ze.length;s++){const a=Ze[s];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;Ze.splice(s,1),s--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function pd(e){if(qs.length){const t=[...new Set(qs)].sort((s,a)=>wa(s)-wa(a));if(qs.length=0,is){is.push(...t);return}for(is=t,zs=0;zs<is.length;zs++){const s=is[zs];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}is=null,zs=0}}const wa=e=>e.id==null?e.flags&2?-1:1/0:e.id;function fd(e){try{for(Ct=0;Ct<Ze.length;Ct++){const t=Ze[Ct];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Ca(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Ct<Ze.length;Ct++){const t=Ze[Ct];t&&(t.flags&=-2)}Ct=-1,Ze.length=0,pd(),Lr=null,(Ze.length||qs.length)&&fd()}}let ct=null,hd=null;function Dr(e){const t=ct;return ct=e,hd=e&&e.type.__scopeId||null,t}function oo(e,t=ct,s){if(!t||e._n)return e;const a=(...r)=>{a._d&&Br(-1);const n=Dr(t);let o;try{o=e(...r)}finally{Dr(n),a._d&&Br(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function na(e,t){if(ct===null)return e;const s=cn(ct),a=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[n,o,i,l=Pe]=t[r];n&&(he(n)&&(n={mounted:n,updated:n}),n.deep&&Jt(o),a.push({dir:n,instance:s,value:o,oldValue:void 0,arg:i,modifiers:l}))}return e}function vs(e,t,s,a){const r=e.dirs,n=t&&t.dirs;for(let o=0;o<r.length;o++){const i=r[o];n&&(i.oldValue=n[o].value);let l=i.dir[a];l&&(Zt(),xt(l,s,8,[e.el,i,e,t]),es())}}const $p=Symbol("_vte"),md=e=>e.__isTeleport,Kt=Symbol("_leaveCb"),Na=Symbol("_enterCb");function Mp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return bt(()=>{e.isMounted=!0}),Sd(()=>{e.isUnmounting=!0}),e}const pt=[Function,Array],gd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:pt,onEnter:pt,onAfterEnter:pt,onEnterCancelled:pt,onBeforeLeave:pt,onLeave:pt,onAfterLeave:pt,onLeaveCancelled:pt,onBeforeAppear:pt,onAppear:pt,onAfterAppear:pt,onAppearCancelled:pt},bd=e=>{const t=e.subTree;return t.component?bd(t.component):t},Rp={name:"BaseTransition",props:gd,setup(e,{slots:t}){const s=Uo(),a=Mp();return()=>{const r=t.default&&yd(t.default(),!0);if(!r||!r.length)return;const n=_d(r),o=ve(e),{mode:i}=o;if(a.isLeaving)return Tn(n);const l=ii(n);if(!l)return Tn(n);let c=io(l,o,a,s,u=>c=u);l.type!==et&&xa(l,c);let d=s.subTree&&ii(s.subTree);if(d&&d.type!==et&&!As(d,l)&&bd(s).type!==et){let u=io(d,o,a,s);if(xa(d,u),i==="out-in"&&l.type!==et)return a.isLeaving=!0,u.afterLeave=()=>{a.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,d=void 0},Tn(n);i==="in-out"&&l.type!==et?u.delayLeave=(p,f,b)=>{const v=vd(a,d);v[String(d.key)]=d,p[Kt]=()=>{f(),p[Kt]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{b(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return n}}};function _d(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==et){t=s;break}}return t}const Lp=Rp;function vd(e,t){const{leavingVNodes:s}=e;let a=s.get(t.type);return a||(a=Object.create(null),s.set(t.type,a)),a}function io(e,t,s,a,r){const{appear:n,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:b,onLeaveCancelled:v,onBeforeAppear:y,onAppear:m,onAfterAppear:h,onAppearCancelled:_}=t,S=String(e.key),g=vd(s,e),w=(E,P)=>{E&&xt(E,a,9,P)},x=(E,P)=>{const $=P[1];w(E,P),pe(E)?E.every(O=>O.length<=1)&&$():E.length<=1&&$()},T={mode:o,persisted:i,beforeEnter(E){let P=l;if(!s.isMounted)if(n)P=y||l;else return;E[Kt]&&E[Kt](!0);const $=g[S];$&&As(e,$)&&$.el[Kt]&&$.el[Kt](),w(P,[E])},enter(E){let P=c,$=d,O=u;if(!s.isMounted)if(n)P=m||c,$=h||d,O=_||u;else return;let L=!1;const G=E[Na]=X=>{L||(L=!0,X?w(O,[E]):w($,[E]),T.delayedLeave&&T.delayedLeave(),E[Na]=void 0)};P?x(P,[E,G]):G()},leave(E,P){const $=String(e.key);if(E[Na]&&E[Na](!0),s.isUnmounting)return P();w(p,[E]);let O=!1;const L=E[Kt]=G=>{O||(O=!0,P(),G?w(v,[E]):w(b,[E]),E[Kt]=void 0,g[$]===e&&delete g[$])};g[$]=e,f?x(f,[E,L]):L()},clone(E){const P=io(E,t,s,a,r);return r&&r(P),P}};return T}function Tn(e){if(rn(e))return e=fs(e),e.children=null,e}function ii(e){if(!rn(e))return md(e.type)&&e.children?_d(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&he(s.default))return s.default()}}function xa(e,t){e.shapeFlag&6&&e.component?(e.transition=t,xa(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function yd(e,t=!1,s){let a=[],r=0;for(let n=0;n<e.length;n++){let o=e[n];const i=s==null?o.key:String(s)+String(o.key!=null?o.key:n);o.type===$t?(o.patchFlag&128&&r++,a=a.concat(yd(o.children,t,i))):(t||o.type!==et)&&a.push(i!=null?fs(o,{key:i}):o)}if(r>1)for(let n=0;n<a.length;n++)a[n].patchFlag=-2;return a}function wd(e,t){return he(e)?Be({name:e.name},t,{setup:e}):e}function xd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Nr=new WeakMap;function ua(e,t,s,a,r=!1){if(pe(e)){e.forEach((b,v)=>ua(b,t&&(pe(t)?t[v]:t),s,a,r));return}if(pa(a)&&!r){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&ua(e,t,s,a.component.subTree);return}const n=a.shapeFlag&4?cn(a.component):a.el,o=r?null:n,{i,r:l}=e,c=t&&t.r,d=i.refs===Pe?i.refs={}:i.refs,u=i.setupState,p=ve(u),f=u===Pe?Lc:b=>Se(p,b);if(c!=null&&c!==l){if(li(t),Le(c))d[c]=null,f(c)&&(u[c]=null);else if(Re(c)){c.value=null;const b=t;b.k&&(d[b.k]=null)}}if(he(l))Ca(l,i,12,[o,d]);else{const b=Le(l),v=Re(l);if(b||v){const y=()=>{if(e.f){const m=b?f(l)?u[l]:d[l]:l.value;if(r)pe(m)&&ko(m,n);else if(pe(m))m.includes(n)||m.push(n);else if(b)d[l]=[n],f(l)&&(u[l]=d[l]);else{const h=[n];l.value=h,e.k&&(d[e.k]=h)}}else b?(d[l]=o,f(l)&&(u[l]=o)):v&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const m=()=>{y(),Nr.delete(e)};m.id=-1,Nr.set(e,m),nt(m,s)}else li(e),y()}}}function li(e){const t=Nr.get(e);t&&(t.flags|=8,Nr.delete(e))}tn().requestIdleCallback;tn().cancelIdleCallback;const pa=e=>!!e.type.__asyncLoader,rn=e=>e.type.__isKeepAlive;function Dp(e,t){Td(e,"a",t)}function Np(e,t){Td(e,"da",t)}function Td(e,t,s=Ge){const a=e.__wdc||(e.__wdc=()=>{let r=s;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(nn(t,a,s),s){let r=s.parent;for(;r&&r.parent;)rn(r.parent.vnode)&&Ip(a,t,s,r),r=r.parent}}function Ip(e,t,s,a){const r=nn(t,e,a,!0);Ws(()=>{ko(a[t],r)},s)}function nn(e,t,s=Ge,a=!1){if(s){const r=s[e]||(s[e]=[]),n=t.__weh||(t.__weh=(...o)=>{Zt();const i=Oa(s),l=xt(t,s,e,o);return i(),es(),l});return a?r.unshift(n):r.push(n),n}}const ss=e=>(t,s=Ge)=>{(!Sa||e==="sp")&&nn(e,(...a)=>t(...a),s)},Bp=ss("bm"),bt=ss("m"),Fp=ss("bu"),zp=ss("u"),Sd=ss("bum"),Ws=ss("um"),Hp=ss("sp"),jp=ss("rtg"),Up=ss("rtc");function qp(e,t=Ge){nn("ec",e,t)}const Gp="components",Ed=Symbol.for("v-ndc");function Vp(e){return Le(e)?Kp(Gp,e,!1)||e:e||Ed}function Kp(e,t,s=!0,a=!1){const r=ct||Ge;if(r){const n=r.type;{const i=Nf(n,!1);if(i&&(i===t||i===gt(t)||i===en(gt(t))))return n}const o=ci(r[e]||n[e],t)||ci(r.appContext[e],t);return!o&&a?n:o}}function ci(e,t){return e&&(e[t]||e[gt(t)]||e[en(gt(t))])}const lo=e=>e?Gd(e)?cn(e):lo(e.parent):null,fa=Be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>lo(e.parent),$root:e=>lo(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ad(e),$forceUpdate:e=>e.f||(e.f=()=>{Fo(e.update)}),$nextTick:e=>e.n||(e.n=Bo.bind(e.proxy)),$watch:e=>gf.bind(e)}),Sn=(e,t)=>e!==Pe&&!e.__isScriptSetup&&Se(e,t),Yp={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:a,data:r,props:n,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return a[t];case 2:return r[t];case 4:return s[t];case 3:return n[t]}else{if(Sn(a,t))return o[t]=1,a[t];if(r!==Pe&&Se(r,t))return o[t]=2,r[t];if((c=e.propsOptions[0])&&Se(c,t))return o[t]=3,n[t];if(s!==Pe&&Se(s,t))return o[t]=4,s[t];co&&(o[t]=0)}}const d=fa[t];let u,p;if(d)return t==="$attrs"&&qe(e.attrs,"get",""),d(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(s!==Pe&&Se(s,t))return o[t]=4,s[t];if(p=l.config.globalProperties,Se(p,t))return p[t]},set({_:e},t,s){const{data:a,setupState:r,ctx:n}=e;return Sn(r,t)?(r[t]=s,!0):a!==Pe&&Se(a,t)?(a[t]=s,!0):Se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:a,appContext:r,propsOptions:n,type:o}},i){let l,c;return!!(s[i]||e!==Pe&&i[0]!=="$"&&Se(e,i)||Sn(t,i)||(l=n[0])&&Se(l,i)||Se(a,i)||Se(fa,i)||Se(r.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:Se(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function di(e){return pe(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let co=!0;function Wp(e){const t=Ad(e),s=e.proxy,a=e.ctx;co=!1,t.beforeCreate&&ui(t.beforeCreate,e,"bc");const{data:r,computed:n,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:b,activated:v,deactivated:y,beforeDestroy:m,beforeUnmount:h,destroyed:_,unmounted:S,render:g,renderTracked:w,renderTriggered:x,errorCaptured:T,serverPrefetch:E,expose:P,inheritAttrs:$,components:O,directives:L,filters:G}=t;if(c&&Jp(c,a,null),o)for(const K in o){const V=o[K];he(V)&&(a[K]=V.bind(s))}if(r){const K=r.call(s,s);Ce(K)&&(e.data=Xt(K))}if(co=!0,n)for(const K in n){const V=n[K],Q=he(V)?V.bind(s,s):he(V.get)?V.get.bind(s,s):Dt,U=!he(V)&&he(V.set)?V.set.bind(s):Dt,R=it({get:Q,set:U});Object.defineProperty(a,K,{enumerable:!0,configurable:!0,get:()=>R.value,set:j=>R.value=j})}if(i)for(const K in i)kd(i[K],a,s,K);if(l){const K=he(l)?l.call(s):l;Reflect.ownKeys(K).forEach(V=>{kr(V,K[V])})}d&&ui(d,e,"c");function ae(K,V){pe(V)?V.forEach(Q=>K(Q.bind(s))):V&&K(V.bind(s))}if(ae(Bp,u),ae(bt,p),ae(Fp,f),ae(zp,b),ae(Dp,v),ae(Np,y),ae(qp,T),ae(Up,w),ae(jp,x),ae(Sd,h),ae(Ws,S),ae(Hp,E),pe(P))if(P.length){const K=e.exposed||(e.exposed={});P.forEach(V=>{Object.defineProperty(K,V,{get:()=>s[V],set:Q=>s[V]=Q,enumerable:!0})})}else e.exposed||(e.exposed={});g&&e.render===Dt&&(e.render=g),$!=null&&(e.inheritAttrs=$),O&&(e.components=O),L&&(e.directives=L),E&&xd(e)}function Jp(e,t,s=Dt){pe(e)&&(e=uo(e));for(const a in e){const r=e[a];let n;Ce(r)?"default"in r?n=mt(r.from||a,r.default,!0):n=mt(r.from||a):n=mt(r),Re(n)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):t[a]=n}}function ui(e,t,s){xt(pe(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,s)}function kd(e,t,s,a){let r=a.includes(".")?zd(s,a):()=>s[a];if(Le(e)){const n=t[e];he(n)&&ha(r,n)}else if(he(e))ha(r,e.bind(s));else if(Ce(e))if(pe(e))e.forEach(n=>kd(n,t,s,a));else{const n=he(e.handler)?e.handler.bind(s):t[e.handler];he(n)&&ha(r,n,e)}}function Ad(e){const t=e.type,{mixins:s,extends:a}=t,{mixins:r,optionsCache:n,config:{optionMergeStrategies:o}}=e.appContext,i=n.get(t);let l;return i?l=i:!r.length&&!s&&!a?l=t:(l={},r.length&&r.forEach(c=>Ir(l,c,o,!0)),Ir(l,t,o)),Ce(t)&&n.set(t,l),l}function Ir(e,t,s,a=!1){const{mixins:r,extends:n}=t;n&&Ir(e,n,s,!0),r&&r.forEach(o=>Ir(e,o,s,!0));for(const o in t)if(!(a&&o==="expose")){const i=Xp[o]||s&&s[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Xp={data:pi,props:fi,emits:fi,methods:oa,computed:oa,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:oa,directives:oa,watch:Zp,provide:pi,inject:Qp};function pi(e,t){return t?e?function(){return Be(he(e)?e.call(this,this):e,he(t)?t.call(this,this):t)}:t:e}function Qp(e,t){return oa(uo(e),uo(t))}function uo(e){if(pe(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function We(e,t){return e?[...new Set([].concat(e,t))]:t}function oa(e,t){return e?Be(Object.create(null),e,t):t}function fi(e,t){return e?pe(e)&&pe(t)?[...new Set([...e,...t])]:Be(Object.create(null),di(e),di(t??{})):t}function Zp(e,t){if(!e)return t;if(!t)return e;const s=Be(Object.create(null),e);for(const a in t)s[a]=We(e[a],t[a]);return s}function Pd(){return{app:null,config:{isNativeTag:Lc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ef=0;function tf(e,t){return function(a,r=null){he(a)||(a=Be({},a)),r!=null&&!Ce(r)&&(r=null);const n=Pd(),o=new WeakSet,i=[];let l=!1;const c=n.app={_uid:ef++,_component:a,_props:r,_container:null,_context:n,_instance:null,version:Bf,get config(){return n.config},set config(d){},use(d,...u){return o.has(d)||(d&&he(d.install)?(o.add(d),d.install(c,...u)):he(d)&&(o.add(d),d(c,...u))),c},mixin(d){return n.mixins.includes(d)||n.mixins.push(d),c},component(d,u){return u?(n.components[d]=u,c):n.components[d]},directive(d,u){return u?(n.directives[d]=u,c):n.directives[d]},mount(d,u,p){if(!l){const f=c._ceVNode||tt(a,r);return f.appContext=n,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),l=!0,c._container=d,d.__vue_app__=c,cn(f.component)}},onUnmount(d){i.push(d)},unmount(){l&&(xt(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return n.provides[d]=u,c},runWithContext(d){const u=Ms;Ms=c;try{return d()}finally{Ms=u}}};return c}}let Ms=null;function kr(e,t){if(Ge){let s=Ge.provides;const a=Ge.parent&&Ge.parent.provides;a===s&&(s=Ge.provides=Object.create(a)),s[e]=t}}function mt(e,t,s=!1){const a=Uo();if(a||Ms){let r=Ms?Ms._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return s&&he(t)?t.call(a&&a.proxy):t}}function sf(){return!!(Uo()||Ms)}const Cd={},Od=()=>Object.create(Cd),$d=e=>Object.getPrototypeOf(e)===Cd;function af(e,t,s,a=!1){const r={},n=Od();e.propsDefaults=Object.create(null),Md(e,t,r,n);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);s?e.props=a?r:id(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function rf(e,t,s,a){const{props:r,attrs:n,vnode:{patchFlag:o}}=e,i=ve(r),[l]=e.propsOptions;let c=!1;if((a||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(on(e.emitsOptions,p))continue;const f=t[p];if(l)if(Se(n,p))f!==n[p]&&(n[p]=f,c=!0);else{const b=gt(p);r[b]=po(l,i,b,f,e,!1)}else f!==n[p]&&(n[p]=f,c=!0)}}}else{Md(e,t,r,n)&&(c=!0);let d;for(const u in i)(!t||!Se(t,u)&&((d=ms(u))===u||!Se(t,d)))&&(l?s&&(s[u]!==void 0||s[d]!==void 0)&&(r[u]=po(l,i,u,void 0,e,!0)):delete r[u]);if(n!==i)for(const u in n)(!t||!Se(t,u))&&(delete n[u],c=!0)}c&&Wt(e.attrs,"set","")}function Md(e,t,s,a){const[r,n]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(la(l))continue;const c=t[l];let d;r&&Se(r,d=gt(l))?!n||!n.includes(d)?s[d]=c:(i||(i={}))[d]=c:on(e.emitsOptions,l)||(!(l in a)||c!==a[l])&&(a[l]=c,o=!0)}if(n){const l=ve(s),c=i||Pe;for(let d=0;d<n.length;d++){const u=n[d];s[u]=po(r,l,u,c[u],e,!Se(c,u))}}return o}function po(e,t,s,a,r,n){const o=e[s];if(o!=null){const i=Se(o,"default");if(i&&a===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:c}=r;if(s in c)a=c[s];else{const d=Oa(r);a=c[s]=l.call(null,t),d()}}else a=l;r.ce&&r.ce._setProp(s,a)}o[0]&&(n&&!i?a=!1:o[1]&&(a===""||a===ms(s))&&(a=!0))}return a}const nf=new WeakMap;function Rd(e,t,s=!1){const a=s?nf:t.propsCache,r=a.get(e);if(r)return r;const n=e.props,o={},i=[];let l=!1;if(!he(e)){const d=u=>{l=!0;const[p,f]=Rd(u,t,!0);Be(o,p),f&&i.push(...f)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!n&&!l)return Ce(e)&&a.set(e,js),js;if(pe(n))for(let d=0;d<n.length;d++){const u=gt(n[d]);hi(u)&&(o[u]=Pe)}else if(n)for(const d in n){const u=gt(d);if(hi(u)){const p=n[d],f=o[u]=pe(p)||he(p)?{type:p}:Be({},p),b=f.type;let v=!1,y=!0;if(pe(b))for(let m=0;m<b.length;++m){const h=b[m],_=he(h)&&h.name;if(_==="Boolean"){v=!0;break}else _==="String"&&(y=!1)}else v=he(b)&&b.name==="Boolean";f[0]=v,f[1]=y,(v||Se(f,"default"))&&i.push(u)}}const c=[o,i];return Ce(e)&&a.set(e,c),c}function hi(e){return e[0]!=="$"&&!la(e)}const zo=e=>e==="_"||e==="_ctx"||e==="$stable",Ho=e=>pe(e)?e.map(Mt):[Mt(e)],of=(e,t,s)=>{if(t._n)return t;const a=oo((...r)=>Ho(t(...r)),s);return a._c=!1,a},Ld=(e,t,s)=>{const a=e._ctx;for(const r in e){if(zo(r))continue;const n=e[r];if(he(n))t[r]=of(r,n,a);else if(n!=null){const o=Ho(n);t[r]=()=>o}}},Dd=(e,t)=>{const s=Ho(t);e.slots.default=()=>s},Nd=(e,t,s)=>{for(const a in t)(s||!zo(a))&&(e[a]=t[a])},lf=(e,t,s)=>{const a=e.slots=Od();if(e.vnode.shapeFlag&32){const r=t._;r?(Nd(a,t,s),s&&Bc(a,"_",r,!0)):Ld(t,a)}else t&&Dd(e,t)},cf=(e,t,s)=>{const{vnode:a,slots:r}=e;let n=!0,o=Pe;if(a.shapeFlag&32){const i=t._;i?s&&i===1?n=!1:Nd(r,t,s):(n=!t.$stable,Ld(t,r)),o=t}else t&&(Dd(e,t),o={default:1});if(n)for(const i in r)!zo(i)&&o[i]==null&&delete r[i]},nt=Sf;function df(e){return uf(e)}function uf(e,t){const s=tn();s.__VUE__=!0;const{insert:a,remove:r,patchProp:n,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=Dt,insertStaticContent:b}=e,v=(k,C,D,q=null,ee=null,se=null,ie=void 0,Y=null,te=!!C.dynamicChildren)=>{if(k===C)return;k&&!As(k,C)&&(q=B(k),j(k,ee,se,!0),k=null),C.patchFlag===-2&&(te=!1,C.dynamicChildren=null);const{type:J,ref:ce,shapeFlag:ne}=C;switch(J){case ln:y(k,C,D,q);break;case et:m(k,C,D,q);break;case Ar:k==null&&h(C,D,q,ie);break;case $t:O(k,C,D,q,ee,se,ie,Y,te);break;default:ne&1?g(k,C,D,q,ee,se,ie,Y,te):ne&6?L(k,C,D,q,ee,se,ie,Y,te):(ne&64||ne&128)&&J.process(k,C,D,q,ee,se,ie,Y,te,re)}ce!=null&&ee?ua(ce,k&&k.ref,se,C||k,!C):ce==null&&k&&k.ref!=null&&ua(k.ref,null,se,k,!0)},y=(k,C,D,q)=>{if(k==null)a(C.el=i(C.children),D,q);else{const ee=C.el=k.el;C.children!==k.children&&c(ee,C.children)}},m=(k,C,D,q)=>{k==null?a(C.el=l(C.children||""),D,q):C.el=k.el},h=(k,C,D,q)=>{[k.el,k.anchor]=b(k.children,C,D,q,k.el,k.anchor)},_=({el:k,anchor:C},D,q)=>{let ee;for(;k&&k!==C;)ee=p(k),a(k,D,q),k=ee;a(C,D,q)},S=({el:k,anchor:C})=>{let D;for(;k&&k!==C;)D=p(k),r(k),k=D;r(C)},g=(k,C,D,q,ee,se,ie,Y,te)=>{if(C.type==="svg"?ie="svg":C.type==="math"&&(ie="mathml"),k==null)w(C,D,q,ee,se,ie,Y,te);else{const J=k.el&&k.el._isVueCE?k.el:null;try{J&&J._beginPatch(),E(k,C,ee,se,ie,Y,te)}finally{J&&J._endPatch()}}},w=(k,C,D,q,ee,se,ie,Y)=>{let te,J;const{props:ce,shapeFlag:ne,transition:de,dirs:ue}=k;if(te=k.el=o(k.type,se,ce&&ce.is,ce),ne&8?d(te,k.children):ne&16&&T(k.children,te,null,q,ee,En(k,se),ie,Y),ue&&vs(k,null,q,"created"),x(te,k,k.scopeId,ie,q),ce){for(const we in ce)we!=="value"&&!la(we)&&n(te,we,null,ce[we],se,q);"value"in ce&&n(te,"value",null,ce.value,se),(J=ce.onVnodeBeforeMount)&&Pt(J,q,k)}ue&&vs(k,null,q,"beforeMount");const fe=pf(ee,de);fe&&de.beforeEnter(te),a(te,C,D),((J=ce&&ce.onVnodeMounted)||fe||ue)&&nt(()=>{J&&Pt(J,q,k),fe&&de.enter(te),ue&&vs(k,null,q,"mounted")},ee)},x=(k,C,D,q,ee)=>{if(D&&f(k,D),q)for(let se=0;se<q.length;se++)f(k,q[se]);if(ee){let se=ee.subTree;if(C===se||jd(se.type)&&(se.ssContent===C||se.ssFallback===C)){const ie=ee.vnode;x(k,ie,ie.scopeId,ie.slotScopeIds,ee.parent)}}},T=(k,C,D,q,ee,se,ie,Y,te=0)=>{for(let J=te;J<k.length;J++){const ce=k[J]=Y?ls(k[J]):Mt(k[J]);v(null,ce,C,D,q,ee,se,ie,Y)}},E=(k,C,D,q,ee,se,ie)=>{const Y=C.el=k.el;let{patchFlag:te,dynamicChildren:J,dirs:ce}=C;te|=k.patchFlag&16;const ne=k.props||Pe,de=C.props||Pe;let ue;if(D&&ys(D,!1),(ue=de.onVnodeBeforeUpdate)&&Pt(ue,D,C,k),ce&&vs(C,k,D,"beforeUpdate"),D&&ys(D,!0),(ne.innerHTML&&de.innerHTML==null||ne.textContent&&de.textContent==null)&&d(Y,""),J?P(k.dynamicChildren,J,Y,D,q,En(C,ee),se):ie||V(k,C,Y,null,D,q,En(C,ee),se,!1),te>0){if(te&16)$(Y,ne,de,D,ee);else if(te&2&&ne.class!==de.class&&n(Y,"class",null,de.class,ee),te&4&&n(Y,"style",ne.style,de.style,ee),te&8){const fe=C.dynamicProps;for(let we=0;we<fe.length;we++){const _e=fe[we],Fe=ne[_e],He=de[_e];(He!==Fe||_e==="value")&&n(Y,_e,Fe,He,ee,D)}}te&1&&k.children!==C.children&&d(Y,C.children)}else!ie&&J==null&&$(Y,ne,de,D,ee);((ue=de.onVnodeUpdated)||ce)&&nt(()=>{ue&&Pt(ue,D,C,k),ce&&vs(C,k,D,"updated")},q)},P=(k,C,D,q,ee,se,ie)=>{for(let Y=0;Y<C.length;Y++){const te=k[Y],J=C[Y],ce=te.el&&(te.type===$t||!As(te,J)||te.shapeFlag&198)?u(te.el):D;v(te,J,ce,null,q,ee,se,ie,!0)}},$=(k,C,D,q,ee)=>{if(C!==D){if(C!==Pe)for(const se in C)!la(se)&&!(se in D)&&n(k,se,C[se],null,ee,q);for(const se in D){if(la(se))continue;const ie=D[se],Y=C[se];ie!==Y&&se!=="value"&&n(k,se,Y,ie,ee,q)}"value"in D&&n(k,"value",C.value,D.value,ee)}},O=(k,C,D,q,ee,se,ie,Y,te)=>{const J=C.el=k?k.el:i(""),ce=C.anchor=k?k.anchor:i("");let{patchFlag:ne,dynamicChildren:de,slotScopeIds:ue}=C;ue&&(Y=Y?Y.concat(ue):ue),k==null?(a(J,D,q),a(ce,D,q),T(C.children||[],D,ce,ee,se,ie,Y,te)):ne>0&&ne&64&&de&&k.dynamicChildren?(P(k.dynamicChildren,de,D,ee,se,ie,Y),(C.key!=null||ee&&C===ee.subTree)&&Id(k,C,!0)):V(k,C,D,ce,ee,se,ie,Y,te)},L=(k,C,D,q,ee,se,ie,Y,te)=>{C.slotScopeIds=Y,k==null?C.shapeFlag&512?ee.ctx.activate(C,D,q,ie,te):G(C,D,q,ee,se,ie,te):X(k,C,te)},G=(k,C,D,q,ee,se,ie)=>{const Y=k.component=$f(k,q,ee);if(rn(k)&&(Y.ctx.renderer=re),Mf(Y,!1,ie),Y.asyncDep){if(ee&&ee.registerDep(Y,ae,ie),!k.el){const te=Y.subTree=tt(et);m(null,te,C,D),k.placeholder=te.el}}else ae(Y,k,C,D,ee,se,ie)},X=(k,C,D)=>{const q=C.component=k.component;if(xf(k,C,D))if(q.asyncDep&&!q.asyncResolved){K(q,C,D);return}else q.next=C,q.update();else C.el=k.el,q.vnode=C},ae=(k,C,D,q,ee,se,ie)=>{const Y=()=>{if(k.isMounted){let{next:ne,bu:de,u:ue,parent:fe,vnode:we}=k;{const kt=Bd(k);if(kt){ne&&(ne.el=we.el,K(k,ne,ie)),kt.asyncDep.then(()=>{k.isUnmounted||Y()});return}}let _e=ne,Fe;ys(k,!1),ne?(ne.el=we.el,K(k,ne,ie)):ne=we,de&&Er(de),(Fe=ne.props&&ne.props.onVnodeBeforeUpdate)&&Pt(Fe,fe,ne,we),ys(k,!0);const He=gi(k),Et=k.subTree;k.subTree=He,v(Et,He,u(Et.el),B(Et),k,ee,se),ne.el=He.el,_e===null&&Tf(k,He.el),ue&&nt(ue,ee),(Fe=ne.props&&ne.props.onVnodeUpdated)&&nt(()=>Pt(Fe,fe,ne,we),ee)}else{let ne;const{el:de,props:ue}=C,{bm:fe,m:we,parent:_e,root:Fe,type:He}=k,Et=pa(C);ys(k,!1),fe&&Er(fe),!Et&&(ne=ue&&ue.onVnodeBeforeMount)&&Pt(ne,_e,C),ys(k,!0);{Fe.ce&&Fe.ce._def.shadowRoot!==!1&&Fe.ce._injectChildStyle(He);const kt=k.subTree=gi(k);v(null,kt,D,q,k,ee,se),C.el=kt.el}if(we&&nt(we,ee),!Et&&(ne=ue&&ue.onVnodeMounted)){const kt=C;nt(()=>Pt(ne,_e,kt),ee)}(C.shapeFlag&256||_e&&pa(_e.vnode)&&_e.vnode.shapeFlag&256)&&k.a&&nt(k.a,ee),k.isMounted=!0,C=D=q=null}};k.scope.on();const te=k.effect=new Kc(Y);k.scope.off();const J=k.update=te.run.bind(te),ce=k.job=te.runIfDirty.bind(te);ce.i=k,ce.id=k.uid,te.scheduler=()=>Fo(ce),ys(k,!0),J()},K=(k,C,D)=>{C.component=k;const q=k.vnode.props;k.vnode=C,k.next=null,rf(k,C.props,q,D),cf(k,C.children,D),Zt(),oi(k),es()},V=(k,C,D,q,ee,se,ie,Y,te=!1)=>{const J=k&&k.children,ce=k?k.shapeFlag:0,ne=C.children,{patchFlag:de,shapeFlag:ue}=C;if(de>0){if(de&128){U(J,ne,D,q,ee,se,ie,Y,te);return}else if(de&256){Q(J,ne,D,q,ee,se,ie,Y,te);return}}ue&8?(ce&16&&I(J,ee,se),ne!==J&&d(D,ne)):ce&16?ue&16?U(J,ne,D,q,ee,se,ie,Y,te):I(J,ee,se,!0):(ce&8&&d(D,""),ue&16&&T(ne,D,q,ee,se,ie,Y,te))},Q=(k,C,D,q,ee,se,ie,Y,te)=>{k=k||js,C=C||js;const J=k.length,ce=C.length,ne=Math.min(J,ce);let de;for(de=0;de<ne;de++){const ue=C[de]=te?ls(C[de]):Mt(C[de]);v(k[de],ue,D,null,ee,se,ie,Y,te)}J>ce?I(k,ee,se,!0,!1,ne):T(C,D,q,ee,se,ie,Y,te,ne)},U=(k,C,D,q,ee,se,ie,Y,te)=>{let J=0;const ce=C.length;let ne=k.length-1,de=ce-1;for(;J<=ne&&J<=de;){const ue=k[J],fe=C[J]=te?ls(C[J]):Mt(C[J]);if(As(ue,fe))v(ue,fe,D,null,ee,se,ie,Y,te);else break;J++}for(;J<=ne&&J<=de;){const ue=k[ne],fe=C[de]=te?ls(C[de]):Mt(C[de]);if(As(ue,fe))v(ue,fe,D,null,ee,se,ie,Y,te);else break;ne--,de--}if(J>ne){if(J<=de){const ue=de+1,fe=ue<ce?C[ue].el:q;for(;J<=de;)v(null,C[J]=te?ls(C[J]):Mt(C[J]),D,fe,ee,se,ie,Y,te),J++}}else if(J>de)for(;J<=ne;)j(k[J],ee,se,!0),J++;else{const ue=J,fe=J,we=new Map;for(J=fe;J<=de;J++){const at=C[J]=te?ls(C[J]):Mt(C[J]);at.key!=null&&we.set(at.key,J)}let _e,Fe=0;const He=de-fe+1;let Et=!1,kt=0;const Js=new Array(He);for(J=0;J<He;J++)Js[J]=0;for(J=ue;J<=ne;J++){const at=k[J];if(Fe>=He){j(at,ee,se,!0);continue}let At;if(at.key!=null)At=we.get(at.key);else for(_e=fe;_e<=de;_e++)if(Js[_e-fe]===0&&As(at,C[_e])){At=_e;break}At===void 0?j(at,ee,se,!0):(Js[At-fe]=J+1,At>=kt?kt=At:Et=!0,v(at,C[At],D,null,ee,se,ie,Y,te),Fe++)}const Zo=Et?ff(Js):js;for(_e=Zo.length-1,J=He-1;J>=0;J--){const at=fe+J,At=C[at],ei=C[at+1],ti=at+1<ce?ei.el||ei.placeholder:q;Js[J]===0?v(null,At,D,ti,ee,se,ie,Y,te):Et&&(_e<0||J!==Zo[_e]?R(At,D,ti,2):_e--)}}},R=(k,C,D,q,ee=null)=>{const{el:se,type:ie,transition:Y,children:te,shapeFlag:J}=k;if(J&6){R(k.component.subTree,C,D,q);return}if(J&128){k.suspense.move(C,D,q);return}if(J&64){ie.move(k,C,D,re);return}if(ie===$t){a(se,C,D);for(let ne=0;ne<te.length;ne++)R(te[ne],C,D,q);a(k.anchor,C,D);return}if(ie===Ar){_(k,C,D);return}if(q!==2&&J&1&&Y)if(q===0)Y.beforeEnter(se),a(se,C,D),nt(()=>Y.enter(se),ee);else{const{leave:ne,delayLeave:de,afterLeave:ue}=Y,fe=()=>{k.ctx.isUnmounted?r(se):a(se,C,D)},we=()=>{se._isLeaving&&se[Kt](!0),ne(se,()=>{fe(),ue&&ue()})};de?de(se,fe,we):we()}else a(se,C,D)},j=(k,C,D,q=!1,ee=!1)=>{const{type:se,props:ie,ref:Y,children:te,dynamicChildren:J,shapeFlag:ce,patchFlag:ne,dirs:de,cacheIndex:ue}=k;if(ne===-2&&(ee=!1),Y!=null&&(Zt(),ua(Y,null,D,k,!0),es()),ue!=null&&(C.renderCache[ue]=void 0),ce&256){C.ctx.deactivate(k);return}const fe=ce&1&&de,we=!pa(k);let _e;if(we&&(_e=ie&&ie.onVnodeBeforeUnmount)&&Pt(_e,C,k),ce&6)M(k.component,D,q);else{if(ce&128){k.suspense.unmount(D,q);return}fe&&vs(k,null,C,"beforeUnmount"),ce&64?k.type.remove(k,C,D,re,q):J&&!J.hasOnce&&(se!==$t||ne>0&&ne&64)?I(J,C,D,!1,!0):(se===$t&&ne&384||!ee&&ce&16)&&I(te,C,D),q&&N(k)}(we&&(_e=ie&&ie.onVnodeUnmounted)||fe)&&nt(()=>{_e&&Pt(_e,C,k),fe&&vs(k,null,C,"unmounted")},D)},N=k=>{const{type:C,el:D,anchor:q,transition:ee}=k;if(C===$t){A(D,q);return}if(C===Ar){S(k);return}const se=()=>{r(D),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(k.shapeFlag&1&&ee&&!ee.persisted){const{leave:ie,delayLeave:Y}=ee,te=()=>ie(D,se);Y?Y(k.el,se,te):te()}else se()},A=(k,C)=>{let D;for(;k!==C;)D=p(k),r(k),k=D;r(C)},M=(k,C,D)=>{const{bum:q,scope:ee,job:se,subTree:ie,um:Y,m:te,a:J}=k;mi(te),mi(J),q&&Er(q),ee.stop(),se&&(se.flags|=8,j(ie,k,C,D)),Y&&nt(Y,C),nt(()=>{k.isUnmounted=!0},C)},I=(k,C,D,q=!1,ee=!1,se=0)=>{for(let ie=se;ie<k.length;ie++)j(k[ie],C,D,q,ee)},B=k=>{if(k.shapeFlag&6)return B(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const C=p(k.anchor||k.el),D=C&&C[$p];return D?p(D):C};let z=!1;const Z=(k,C,D)=>{k==null?C._vnode&&j(C._vnode,null,null,!0):v(C._vnode||null,k,C,null,null,null,D),C._vnode=k,z||(z=!0,oi(),pd(),z=!1)},re={p:v,um:j,m:R,r:N,mt:G,mc:T,pc:V,pbc:P,n:B,o:e};return{render:Z,hydrate:void 0,createApp:tf(Z)}}function En({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ys({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function pf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Id(e,t,s=!1){const a=e.children,r=t.children;if(pe(a)&&pe(r))for(let n=0;n<a.length;n++){const o=a[n];let i=r[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[n]=ls(r[n]),i.el=o.el),!s&&i.patchFlag!==-2&&Id(o,i)),i.type===ln&&i.patchFlag!==-1&&(i.el=o.el),i.type===et&&!i.el&&(i.el=o.el)}}function ff(e){const t=e.slice(),s=[0];let a,r,n,o,i;const l=e.length;for(a=0;a<l;a++){const c=e[a];if(c!==0){if(r=s[s.length-1],e[r]<c){t[a]=r,s.push(a);continue}for(n=0,o=s.length-1;n<o;)i=n+o>>1,e[s[i]]<c?n=i+1:o=i;c<e[s[n]]&&(n>0&&(t[a]=s[n-1]),s[n]=a)}}for(n=s.length,o=s[n-1];n-- >0;)s[n]=o,o=t[o];return s}function Bd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bd(t)}function mi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const hf=Symbol.for("v-scx"),mf=()=>mt(hf);function ha(e,t,s){return Fd(e,t,s)}function Fd(e,t,s=Pe){const{immediate:a,deep:r,flush:n,once:o}=s,i=Be({},s),l=t&&a||!t&&n!=="post";let c;if(Sa){if(n==="sync"){const f=mf();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Dt,f.resume=Dt,f.pause=Dt,f}}const d=Ge;i.call=(f,b,v)=>xt(f,d,b,v);let u=!1;n==="post"?i.scheduler=f=>{nt(f,d&&d.suspense)}:n!=="sync"&&(u=!0,i.scheduler=(f,b)=>{b?f():Fo(f)}),i.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=Ap(e,t,i);return Sa&&(c?c.push(p):l&&p()),p}function gf(e,t,s){const a=this.proxy,r=Le(e)?e.includes(".")?zd(a,e):()=>a[e]:e.bind(a,a);let n;he(t)?n=t:(n=t.handler,s=t);const o=Oa(this),i=Fd(r,n.bind(a),s);return o(),i}function zd(e,t){const s=t.split(".");return()=>{let a=e;for(let r=0;r<s.length&&a;r++)a=a[s[r]];return a}}const bf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${gt(t)}Modifiers`]||e[`${ms(t)}Modifiers`];function _f(e,t,...s){if(e.isUnmounted)return;const a=e.vnode.props||Pe;let r=s;const n=t.startsWith("update:"),o=n&&bf(a,t.slice(7));o&&(o.trim&&(r=s.map(d=>Le(d)?d.trim():d)),o.number&&(r=s.map(Uu)));let i,l=a[i=_n(t)]||a[i=_n(gt(t))];!l&&n&&(l=a[i=_n(ms(t))]),l&&xt(l,e,6,r);const c=a[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,xt(c,e,6,r)}}const vf=new WeakMap;function Hd(e,t,s=!1){const a=s?vf:t.emitsCache,r=a.get(e);if(r!==void 0)return r;const n=e.emits;let o={},i=!1;if(!he(e)){const l=c=>{const d=Hd(c,t,!0);d&&(i=!0,Be(o,d))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!n&&!i?(Ce(e)&&a.set(e,null),null):(pe(n)?n.forEach(l=>o[l]=null):Be(o,n),Ce(e)&&a.set(e,o),o)}function on(e,t){return!e||!Xr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Se(e,t[0].toLowerCase()+t.slice(1))||Se(e,ms(t))||Se(e,t))}function gi(e){const{type:t,vnode:s,proxy:a,withProxy:r,propsOptions:[n],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:b,inheritAttrs:v}=e,y=Dr(e);let m,h;try{if(s.shapeFlag&4){const S=r||a,g=S;m=Mt(c.call(g,S,d,u,f,p,b)),h=i}else{const S=t;m=Mt(S.length>1?S(u,{attrs:i,slots:o,emit:l}):S(u,null)),h=t.props?i:yf(i)}}catch(S){ma.length=0,an(S,e,1),m=tt(et)}let _=m;if(h&&v!==!1){const S=Object.keys(h),{shapeFlag:g}=_;S.length&&g&7&&(n&&S.some(Eo)&&(h=wf(h,n)),_=fs(_,h,!1,!0))}return s.dirs&&(_=fs(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(s.dirs):s.dirs),s.transition&&xa(_,s.transition),m=_,Dr(y),m}const yf=e=>{let t;for(const s in e)(s==="class"||s==="style"||Xr(s))&&((t||(t={}))[s]=e[s]);return t},wf=(e,t)=>{const s={};for(const a in e)(!Eo(a)||!(a.slice(9)in t))&&(s[a]=e[a]);return s};function xf(e,t,s){const{props:a,children:r,component:n}=e,{props:o,children:i,patchFlag:l}=t,c=n.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return a?bi(a,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==a[p]&&!on(c,p))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:a===o?!1:a?o?bi(a,o,c):!0:!!o;return!1}function bi(e,t,s){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let r=0;r<a.length;r++){const n=a[r];if(t[n]!==e[n]&&!on(s,n))return!0}return!1}function Tf({vnode:e,parent:t},s){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=s,t=t.parent;else break}}const jd=e=>e.__isSuspense;function Sf(e,t){t&&t.pendingBranch?pe(e)?t.effects.push(...e):t.effects.push(e):Op(e)}const $t=Symbol.for("v-fgt"),ln=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),Ar=Symbol.for("v-stc"),ma=[];let dt=null;function Me(e=!1){ma.push(dt=e?null:[])}function Ef(){ma.pop(),dt=ma[ma.length-1]||null}let Ta=1;function Br(e,t=!1){Ta+=e,e<0&&dt&&t&&(dt.hasOnce=!0)}function Ud(e){return e.dynamicChildren=Ta>0?dt||js:null,Ef(),Ta>0&&dt&&dt.push(e),e}function Ie(e,t,s,a,r,n){return Ud(H(e,t,s,a,r,n,!0))}function fo(e,t,s,a,r){return Ud(tt(e,t,s,a,r,!0))}function Fr(e){return e?e.__v_isVNode===!0:!1}function As(e,t){return e.type===t.type&&e.key===t.key}const qd=({key:e})=>e??null,Pr=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Le(e)||Re(e)||he(e)?{i:ct,r:e,k:t,f:!!s}:e:null);function H(e,t=null,s=null,a=0,r=null,n=e===$t?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&qd(t),ref:t&&Pr(t),scopeId:hd,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:a,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ct};return i?(jo(l,s),n&128&&e.normalize(l)):s&&(l.shapeFlag|=Le(s)?8:16),Ta>0&&!o&&dt&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&dt.push(l),l}const tt=kf;function kf(e,t=null,s=null,a=0,r=null,n=!1){if((!e||e===Ed)&&(e=et),Fr(e)){const i=fs(e,t,!0);return s&&jo(i,s),Ta>0&&!n&&dt&&(i.shapeFlag&6?dt[dt.indexOf(e)]=i:dt.push(i)),i.patchFlag=-2,i}if(If(e)&&(e=e.__vccOpts),t){t=Af(t);let{class:i,style:l}=t;i&&!Le(i)&&(t.class=Qt(i)),Ce(l)&&(No(l)&&!pe(l)&&(l=Be({},l)),t.style=Po(l))}const o=Le(e)?1:jd(e)?128:md(e)?64:Ce(e)?4:he(e)?2:0;return H(e,t,s,a,r,o,n,!0)}function Af(e){return e?No(e)||$d(e)?Be({},e):e:null}function fs(e,t,s=!1,a=!1){const{props:r,ref:n,patchFlag:o,children:i,transition:l}=e,c=t?Pf(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&qd(c),ref:t&&t.ref?s&&n?pe(n)?n.concat(Pr(t)):[n,Pr(t)]:Pr(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==$t?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&fs(e.ssContent),ssFallback:e.ssFallback&&fs(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&a&&xa(d,l.clone(d)),d}function Rt(e=" ",t=0){return tt(ln,null,e,t)}function wt(e,t){const s=tt(Ar,null,e);return s.staticCount=t,s}function _i(e="",t=!1){return t?(Me(),fo(et,null,e)):tt(et,null,e)}function Mt(e){return e==null||typeof e=="boolean"?tt(et):pe(e)?tt($t,null,e.slice()):Fr(e)?ls(e):tt(ln,null,String(e))}function ls(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:fs(e)}function jo(e,t){let s=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(pe(t))s=16;else if(typeof t=="object")if(a&65){const r=t.default;r&&(r._c&&(r._d=!1),jo(e,r()),r._c&&(r._d=!0));return}else{s=32;const r=t._;!r&&!$d(t)?t._ctx=ct:r===3&&ct&&(ct.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:ct},s=32):(t=String(t),a&64?(s=16,t=[Rt(t)]):s=8);e.children=t,e.shapeFlag|=s}function Pf(...e){const t={};for(let s=0;s<e.length;s++){const a=e[s];for(const r in a)if(r==="class")t.class!==a.class&&(t.class=Qt([t.class,a.class]));else if(r==="style")t.style=Po([t.style,a.style]);else if(Xr(r)){const n=t[r],o=a[r];o&&n!==o&&!(pe(n)&&n.includes(o))&&(t[r]=n?[].concat(n,o):o)}else r!==""&&(t[r]=a[r])}return t}function Pt(e,t,s,a=null){xt(e,t,7,[s,a])}const Cf=Pd();let Of=0;function $f(e,t,s){const a=e.type,r=(t?t.appContext:e.appContext)||Cf,n={uid:Of++,vnode:e,type:a,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rd(a,r),emitsOptions:Hd(a,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:a.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=_f.bind(null,n),e.ce&&e.ce(n),n}let Ge=null;const Uo=()=>Ge||ct;let zr,ho;{const e=tn(),t=(s,a)=>{let r;return(r=e[s])||(r=e[s]=[]),r.push(a),n=>{r.length>1?r.forEach(o=>o(n)):r[0](n)}};zr=t("__VUE_INSTANCE_SETTERS__",s=>Ge=s),ho=t("__VUE_SSR_SETTERS__",s=>Sa=s)}const Oa=e=>{const t=Ge;return zr(e),e.scope.on(),()=>{e.scope.off(),zr(t)}},vi=()=>{Ge&&Ge.scope.off(),zr(null)};function Gd(e){return e.vnode.shapeFlag&4}let Sa=!1;function Mf(e,t=!1,s=!1){t&&ho(t);const{props:a,children:r}=e.vnode,n=Gd(e);af(e,a,n,t),lf(e,r,s||t);const o=n?Rf(e,t):void 0;return t&&ho(!1),o}function Rf(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Yp);const{setup:a}=s;if(a){Zt();const r=e.setupContext=a.length>1?Df(e):null,n=Oa(e),o=Ca(a,e,0,[e.props,r]),i=Dc(o);if(es(),n(),(i||e.sp)&&!pa(e)&&xd(e),i){if(o.then(vi,vi),t)return o.then(l=>{yi(e,l)}).catch(l=>{an(l,e,0)});e.asyncDep=o}else yi(e,o)}else Vd(e)}function yi(e,t,s){he(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ce(t)&&(e.setupState=cd(t)),Vd(e)}function Vd(e,t,s){const a=e.type;e.render||(e.render=a.render||Dt);{const r=Oa(e);Zt();try{Wp(e)}finally{es(),r()}}}const Lf={get(e,t){return qe(e,"get",""),e[t]}};function Df(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Lf),slots:e.slots,emit:e.emit,expose:t}}function cn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(cd(Io(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in fa)return fa[s](e)},has(t,s){return s in t||s in fa}})):e.proxy}function Nf(e,t=!0){return he(e)?e.displayName||e.name:e.name||t&&e.__name}function If(e){return he(e)&&"__vccOpts"in e}const it=(e,t)=>Ep(e,t,Sa);function qo(e,t,s){try{Br(-1);const a=arguments.length;return a===2?Ce(t)&&!pe(t)?Fr(t)?tt(e,null,[t]):tt(e,t):tt(e,null,t):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Fr(s)&&(s=[s]),tt(e,t,s))}finally{Br(1)}}const Bf="3.5.24";let mo;const wi=typeof window<"u"&&window.trustedTypes;if(wi)try{mo=wi.createPolicy("vue",{createHTML:e=>e})}catch{}const Kd=mo?e=>mo.createHTML(e):e=>e,Ff="http://www.w3.org/2000/svg",zf="http://www.w3.org/1998/Math/MathML",Gt=typeof document<"u"?document:null,xi=Gt&&Gt.createElement("template"),Hf={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,a)=>{const r=t==="svg"?Gt.createElementNS(Ff,e):t==="mathml"?Gt.createElementNS(zf,e):s?Gt.createElement(e,{is:s}):Gt.createElement(e);return e==="select"&&a&&a.multiple!=null&&r.setAttribute("multiple",a.multiple),r},createText:e=>Gt.createTextNode(e),createComment:e=>Gt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Gt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,a,r,n){const o=s?s.previousSibling:t.lastChild;if(r&&(r===n||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),s),!(r===n||!(r=r.nextSibling)););else{xi.innerHTML=Kd(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const i=xi.content;if(a==="svg"||a==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},as="transition",Qs="animation",Ea=Symbol("_vtc"),Yd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},jf=Be({},gd,Yd),Uf=e=>(e.displayName="Transition",e.props=jf,e),qf=Uf((e,{slots:t})=>qo(Lp,Gf(e),t)),ws=(e,t=[])=>{pe(e)?e.forEach(s=>s(...t)):e&&e(...t)},Ti=e=>e?pe(e)?e.some(t=>t.length>1):e.length>1:!1;function Gf(e){const t={};for(const O in e)O in Yd||(t[O]=e[O]);if(e.css===!1)return t;const{name:s="v",type:a,duration:r,enterFromClass:n=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:l=n,appearActiveClass:c=o,appearToClass:d=i,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=e,b=Vf(r),v=b&&b[0],y=b&&b[1],{onBeforeEnter:m,onEnter:h,onEnterCancelled:_,onLeave:S,onLeaveCancelled:g,onBeforeAppear:w=m,onAppear:x=h,onAppearCancelled:T=_}=t,E=(O,L,G,X)=>{O._enterCancelled=X,xs(O,L?d:i),xs(O,L?c:o),G&&G()},P=(O,L)=>{O._isLeaving=!1,xs(O,u),xs(O,f),xs(O,p),L&&L()},$=O=>(L,G)=>{const X=O?x:h,ae=()=>E(L,O,G);ws(X,[L,ae]),Si(()=>{xs(L,O?l:n),Ft(L,O?d:i),Ti(X)||Ei(L,a,v,ae)})};return Be(t,{onBeforeEnter(O){ws(m,[O]),Ft(O,n),Ft(O,o)},onBeforeAppear(O){ws(w,[O]),Ft(O,l),Ft(O,c)},onEnter:$(!1),onAppear:$(!0),onLeave(O,L){O._isLeaving=!0;const G=()=>P(O,L);Ft(O,u),O._enterCancelled?(Ft(O,p),Pi(O)):(Pi(O),Ft(O,p)),Si(()=>{O._isLeaving&&(xs(O,u),Ft(O,f),Ti(S)||Ei(O,a,y,G))}),ws(S,[O,G])},onEnterCancelled(O){E(O,!1,void 0,!0),ws(_,[O])},onAppearCancelled(O){E(O,!0,void 0,!0),ws(T,[O])},onLeaveCancelled(O){P(O),ws(g,[O])}})}function Vf(e){if(e==null)return null;if(Ce(e))return[kn(e.enter),kn(e.leave)];{const t=kn(e);return[t,t]}}function kn(e){return qu(e)}function Ft(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Ea]||(e[Ea]=new Set)).add(t)}function xs(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const s=e[Ea];s&&(s.delete(t),s.size||(e[Ea]=void 0))}function Si(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Kf=0;function Ei(e,t,s,a){const r=e._endId=++Kf,n=()=>{r===e._endId&&a()};if(s!=null)return setTimeout(n,s);const{type:o,timeout:i,propCount:l}=Yf(e,t);if(!o)return a();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),n()},p=f=>{f.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},i+1),e.addEventListener(c,p)}function Yf(e,t){const s=window.getComputedStyle(e),a=b=>(s[b]||"").split(", "),r=a(`${as}Delay`),n=a(`${as}Duration`),o=ki(r,n),i=a(`${Qs}Delay`),l=a(`${Qs}Duration`),c=ki(i,l);let d=null,u=0,p=0;t===as?o>0&&(d=as,u=o,p=n.length):t===Qs?c>0&&(d=Qs,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?as:Qs:null,p=d?d===as?n.length:l.length:0);const f=d===as&&/\b(?:transform|all)(?:,|$)/.test(a(`${as}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function ki(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,a)=>Ai(s)+Ai(e[a])))}function Ai(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Pi(e){return(e?e.ownerDocument:document).body.offsetHeight}function Wf(e,t,s){const a=e[Ea];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Hr=Symbol("_vod"),Wd=Symbol("_vsh"),Ia={name:"show",beforeMount(e,{value:t},{transition:s}){e[Hr]=e.style.display==="none"?"":e.style.display,s&&t?s.beforeEnter(e):Zs(e,t)},mounted(e,{value:t},{transition:s}){s&&t&&s.enter(e)},updated(e,{value:t,oldValue:s},{transition:a}){!t!=!s&&(a?t?(a.beforeEnter(e),Zs(e,!0),a.enter(e)):a.leave(e,()=>{Zs(e,!1)}):Zs(e,t))},beforeUnmount(e,{value:t}){Zs(e,t)}};function Zs(e,t){e.style.display=t?e[Hr]:"none",e[Wd]=!t}const Jf=Symbol(""),Xf=/(?:^|;)\s*display\s*:/;function Qf(e,t,s){const a=e.style,r=Le(s);let n=!1;if(s&&!r){if(t)if(Le(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&Cr(a,i,"")}else for(const o in t)s[o]==null&&Cr(a,o,"");for(const o in s)o==="display"&&(n=!0),Cr(a,o,s[o])}else if(r){if(t!==s){const o=a[Jf];o&&(s+=";"+o),a.cssText=s,n=Xf.test(s)}}else t&&e.removeAttribute("style");Hr in e&&(e[Hr]=n?a.display:"",e[Wd]&&(a.display="none"))}const Ci=/\s*!important$/;function Cr(e,t,s){if(pe(s))s.forEach(a=>Cr(e,t,a));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const a=Zf(e,t);Ci.test(s)?e.setProperty(ms(a),s.replace(Ci,""),"important"):e[a]=s}}const Oi=["Webkit","Moz","ms"],An={};function Zf(e,t){const s=An[t];if(s)return s;let a=gt(t);if(a!=="filter"&&a in e)return An[t]=a;a=en(a);for(let r=0;r<Oi.length;r++){const n=Oi[r]+a;if(n in e)return An[t]=n}return t}const $i="http://www.w3.org/1999/xlink";function Mi(e,t,s,a,r,n=Ju(t)){a&&t.startsWith("xlink:")?s==null?e.removeAttributeNS($i,t.slice(6,t.length)):e.setAttributeNS($i,t,s):s==null||n&&!Fc(s)?e.removeAttribute(t):e.setAttribute(t,n?"":It(s)?String(s):s)}function Ri(e,t,s,a,r){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?Kd(s):s);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const i=n==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(i!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const i=typeof e[t];i==="boolean"?s=Fc(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(r||t)}function Jd(e,t,s,a){e.addEventListener(t,s,a)}function eh(e,t,s,a){e.removeEventListener(t,s,a)}const Li=Symbol("_vei");function th(e,t,s,a,r=null){const n=e[Li]||(e[Li]={}),o=n[t];if(a&&o)o.value=a;else{const[i,l]=sh(t);if(a){const c=n[t]=nh(a,r);Jd(e,i,c,l)}else o&&(eh(e,i,o,l),n[t]=void 0)}}const Di=/(?:Once|Passive|Capture)$/;function sh(e){let t;if(Di.test(e)){t={};let a;for(;a=e.match(Di);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ms(e.slice(2)),t]}let Pn=0;const ah=Promise.resolve(),rh=()=>Pn||(ah.then(()=>Pn=0),Pn=Date.now());function nh(e,t){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;xt(oh(a,s.value),t,5,[a])};return s.value=e,s.attached=rh(),s}function oh(e,t){if(pe(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(a=>r=>!r._stopped&&a&&a(r))}else return t}const Ni=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,ih=(e,t,s,a,r,n)=>{const o=r==="svg";t==="class"?Wf(e,a,o):t==="style"?Qf(e,s,a):Xr(t)?Eo(t)||th(e,t,s,a,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):lh(e,t,a,o))?(Ri(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Mi(e,t,a,o,n,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Le(a))?Ri(e,gt(t),a,n,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),Mi(e,t,a,o))};function lh(e,t,s,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Ni(t)&&he(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ni(t)&&Le(s)?!1:t in e}const Ii=e=>{const t=e.props["onUpdate:modelValue"]||!1;return pe(t)?s=>Er(t,s):t},Cn=Symbol("_assign"),ch={deep:!0,created(e,t,s){e[Cn]=Ii(s),Jd(e,"change",()=>{const a=e._modelValue,r=dh(e),n=e.checked,o=e[Cn];if(pe(a)){const i=zc(a,r),l=i!==-1;if(n&&!l)o(a.concat(r));else if(!n&&l){const c=[...a];c.splice(i,1),o(c)}}else if(Qr(a)){const i=new Set(a);n?i.add(r):i.delete(r),o(i)}else o(Xd(e,n))})},mounted:Bi,beforeUpdate(e,t,s){e[Cn]=Ii(s),Bi(e,t,s)}};function Bi(e,{value:t,oldValue:s},a){e._modelValue=t;let r;if(pe(t))r=zc(t,a.props.value)>-1;else if(Qr(t))r=t.has(a.props.value);else{if(t===s)return;r=sn(t,Xd(e,!0))}e.checked!==r&&(e.checked=r)}function dh(e){return"_value"in e?e._value:e.value}function Xd(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const uh=["ctrl","shift","alt","meta"],ph={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>uh.some(s=>e[`${s}Key`]&&!t.includes(s))},$a=(e,t)=>{const s=e._withMods||(e._withMods={}),a=t.join(".");return s[a]||(s[a]=((r,...n)=>{for(let o=0;o<t.length;o++){const i=ph[t[o]];if(i&&i(r,t))return}return e(r,...n)}))},fh={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yt=(e,t)=>{const s=e._withKeys||(e._withKeys={}),a=t.join(".");return s[a]||(s[a]=(r=>{if(!("key"in r))return;const n=ms(r.key);if(t.some(o=>o===n||fh[o]===n))return e(r)}))},hh=Be({patchProp:ih},Hf);let Fi;function mh(){return Fi||(Fi=df(hh))}const gh=((...e)=>{const t=mh().createApp(...e),{mount:s}=t;return t.mount=a=>{const r=_h(a);if(!r)return;const n=t._component;!he(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=s(r,!1,bh(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function bh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function _h(e){return Le(e)?document.querySelector(e):e}let Qd;const dn=e=>Qd=e,Zd=Symbol();function go(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ga;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ga||(ga={}));function vh(){const e=Gc(!0),t=e.run(()=>Ke({}));let s=[],a=[];const r=Io({install(n){dn(r),r._a=n,n.provide(Zd,r),n.config.globalProperties.$pinia=r,a.forEach(o=>s.push(o)),a=[]},use(n){return this._a?s.push(n):a.push(n),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return r}const eu=()=>{};function zi(e,t,s,a=eu){e.add(t);const r=()=>{e.delete(t)&&a()};return!s&&Vc()&&Qu(r),r}function Ds(e,...t){e.forEach(s=>{s(...t)})}const yh=e=>e(),Hi=Symbol(),On=Symbol();function bo(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,a)=>e.set(a,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const a=t[s],r=e[s];go(r)&&go(a)&&e.hasOwnProperty(s)&&!Re(a)&&!$s(a)?e[s]=bo(r,a):e[s]=a}return e}const wh=Symbol();function xh(e){return!go(e)||!Object.prototype.hasOwnProperty.call(e,wh)}const{assign:os}=Object;function Th(e){return!!(Re(e)&&e.effect)}function Sh(e,t,s,a){const{state:r,actions:n,getters:o}=t,i=s.state.value[e];let l;function c(){i||(s.state.value[e]=r?r():{});const d=wp(s.state.value[e]);return os(d,n,Object.keys(o||{}).reduce((u,p)=>(u[p]=Io(it(()=>{dn(s);const f=s._s.get(e);return o[p].call(f,f)})),u),{}))}return l=tu(e,c,t,s,a,!0),l}function tu(e,t,s={},a,r,n){let o;const i=os({actions:{}},s),l={deep:!0};let c,d,u=new Set,p=new Set,f;const b=a.state.value[e];!n&&!b&&(a.state.value[e]={}),Ke({});let v;function y(T){let E;c=d=!1,typeof T=="function"?(T(a.state.value[e]),E={type:ga.patchFunction,storeId:e,events:f}):(bo(a.state.value[e],T),E={type:ga.patchObject,payload:T,storeId:e,events:f});const P=v=Symbol();Bo().then(()=>{v===P&&(c=!0)}),d=!0,Ds(u,E,a.state.value[e])}const m=n?function(){const{state:E}=s,P=E?E():{};this.$patch($=>{os($,P)})}:eu;function h(){o.stop(),u.clear(),p.clear(),a._s.delete(e)}const _=(T,E="")=>{if(Hi in T)return T[On]=E,T;const P=function(){dn(a);const $=Array.from(arguments),O=new Set,L=new Set;function G(K){O.add(K)}function X(K){L.add(K)}Ds(p,{args:$,name:P[On],store:g,after:G,onError:X});let ae;try{ae=T.apply(this&&this.$id===e?this:g,$)}catch(K){throw Ds(L,K),K}return ae instanceof Promise?ae.then(K=>(Ds(O,K),K)).catch(K=>(Ds(L,K),Promise.reject(K))):(Ds(O,ae),ae)};return P[Hi]=!0,P[On]=E,P},S={_p:a,$id:e,$onAction:zi.bind(null,p),$patch:y,$reset:m,$subscribe(T,E={}){const P=zi(u,T,E.detached,()=>$()),$=o.run(()=>ha(()=>a.state.value[e],O=>{(E.flush==="sync"?d:c)&&T({storeId:e,type:ga.direct,events:f},O)},os({},l,E)));return P},$dispose:h},g=Xt(S);a._s.set(e,g);const x=(a._a&&a._a.runWithContext||yh)(()=>a._e.run(()=>(o=Gc()).run(()=>t({action:_}))));for(const T in x){const E=x[T];if(Re(E)&&!Th(E)||$s(E))n||(b&&xh(E)&&(Re(E)?E.value=b[T]:bo(E,b[T])),a.state.value[e][T]=E);else if(typeof E=="function"){const P=_(E,T);x[T]=P,i.actions[T]=E}}return os(g,x),os(ve(g),x),Object.defineProperty(g,"$state",{get:()=>a.state.value[e],set:T=>{y(E=>{os(E,T)})}}),a._p.forEach(T=>{os(g,o.run(()=>T({store:g,app:a._a,pinia:a,options:i})))}),b&&n&&s.hydrate&&s.hydrate(g.$state,b),c=!0,d=!0,g}function Eh(e,t,s){let a;const r=typeof t=="function";a=r?s:t;function n(o,i){const l=sf();return o=o||(l?mt(Zd,null):null),o&&dn(o),o=Qd,o._s.has(e)||(r?tu(e,t,a,o):Sh(e,a,o)),o._s.get(e)}return n.$id=e,n}const Hs=typeof document<"u";function su(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function kh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&su(e.default)}const Te=Object.assign;function $n(e,t){const s={};for(const a in t){const r=t[a];s[a]=Tt(r)?r.map(e):e(r)}return s}const ba=()=>{},Tt=Array.isArray;function ji(e,t){const s={};for(const a in e)s[a]=a in t?t[a]:e[a];return s}const au=/#/g,Ah=/&/g,Ph=/\//g,Ch=/=/g,Oh=/\?/g,ru=/\+/g,$h=/%5B/g,Mh=/%5D/g,nu=/%5E/g,Rh=/%60/g,ou=/%7B/g,Lh=/%7C/g,iu=/%7D/g,Dh=/%20/g;function Go(e){return e==null?"":encodeURI(""+e).replace(Lh,"|").replace($h,"[").replace(Mh,"]")}function Nh(e){return Go(e).replace(ou,"{").replace(iu,"}").replace(nu,"^")}function _o(e){return Go(e).replace(ru,"%2B").replace(Dh,"+").replace(au,"%23").replace(Ah,"%26").replace(Rh,"`").replace(ou,"{").replace(iu,"}").replace(nu,"^")}function Ih(e){return _o(e).replace(Ch,"%3D")}function Bh(e){return Go(e).replace(au,"%23").replace(Oh,"%3F")}function Fh(e){return Bh(e).replace(Ph,"%2F")}function ka(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const zh=/\/$/,Hh=e=>e.replace(zh,"");function Mn(e,t,s="/"){let a,r={},n="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(a=t.slice(0,l),n=t.slice(l,i>0?i:t.length),r=e(n.slice(1))),i>=0&&(a=a||t.slice(0,i),o=t.slice(i,t.length)),a=Gh(a??t,s),{fullPath:a+n+o,path:a,query:r,hash:ka(o)}}function jh(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function Ui(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Uh(e,t,s){const a=t.matched.length-1,r=s.matched.length-1;return a>-1&&a===r&&Gs(t.matched[a],s.matched[r])&&lu(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Gs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function lu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!qh(e[s],t[s]))return!1;return!0}function qh(e,t){return Tt(e)?qi(e,t):Tt(t)?qi(t,e):e===t}function qi(e,t){return Tt(t)?e.length===t.length&&e.every((s,a)=>s===t[a]):e.length===1&&e[0]===t}function Gh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),a=e.split("/"),r=a[a.length-1];(r===".."||r===".")&&a.push("");let n=s.length-1,o,i;for(o=0;o<a.length;o++)if(i=a[o],i!==".")if(i==="..")n>1&&n--;else break;return s.slice(0,n).join("/")+"/"+a.slice(o).join("/")}const rs={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let vo=(function(e){return e.pop="pop",e.push="push",e})({}),Rn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Vh(e){if(!e)if(Hs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Hh(e)}const Kh=/^[^#]+#/;function Yh(e,t){return e.replace(Kh,"#")+t}function Wh(e,t){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-s.left-(t.left||0),top:a.top-s.top-(t.top||0)}}const un=()=>({left:window.scrollX,top:window.scrollY});function Jh(e){let t;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#"),r=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!r)return;t=Wh(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Gi(e,t){return(history.state?history.state.position-t:-1)+e}const yo=new Map;function Xh(e,t){yo.set(e,t)}function Qh(e){const t=yo.get(e);return yo.delete(e),t}function Zh(e){return typeof e=="string"||e&&typeof e=="object"}function cu(e){return typeof e=="string"||typeof e=="symbol"}let $e=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const du=Symbol("");$e.MATCHER_NOT_FOUND+"",$e.NAVIGATION_GUARD_REDIRECT+"",$e.NAVIGATION_ABORTED+"",$e.NAVIGATION_CANCELLED+"",$e.NAVIGATION_DUPLICATED+"";function Vs(e,t){return Te(new Error,{type:e,[du]:!0},t)}function zt(e,t){return e instanceof Error&&du in e&&(t==null||!!(e.type&t))}const em=["params","query","hash"];function tm(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of em)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function sm(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<s.length;++a){const r=s[a].replace(ru," "),n=r.indexOf("="),o=ka(n<0?r:r.slice(0,n)),i=n<0?null:ka(r.slice(n+1));if(o in t){let l=t[o];Tt(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function Vi(e){let t="";for(let s in e){const a=e[s];if(s=Ih(s),a==null){a!==void 0&&(t+=(t.length?"&":"")+s);continue}(Tt(a)?a.map(r=>r&&_o(r)):[a&&_o(a)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+s,r!=null&&(t+="="+r))})}return t}function am(e){const t={};for(const s in e){const a=e[s];a!==void 0&&(t[s]=Tt(a)?a.map(r=>r==null?null:""+r):a==null?a:""+a)}return t}const rm=Symbol(""),Ki=Symbol(""),pn=Symbol(""),Vo=Symbol(""),wo=Symbol("");function ea(){let e=[];function t(a){return e.push(a),()=>{const r=e.indexOf(a);r>-1&&e.splice(r,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function cs(e,t,s,a,r,n=o=>o()){const o=a&&(a.enterCallbacks[r]=a.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Vs($e.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?l(p):Zh(p)?l(Vs($e.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&a.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),i())},d=n(()=>e.call(a&&a.instances[r],t,s,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function Ln(e,t,s,a,r=n=>n()){const n=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(su(l)){const c=(l.__vccOpts||l)[t];c&&n.push(cs(c,s,a,o,i,r))}else{let c=l();n.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=kh(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&cs(p,s,a,o,i,r)()}))}}return n}function nm(e,t){const s=[],a=[],r=[],n=Math.max(t.matched.length,e.matched.length);for(let o=0;o<n;o++){const i=t.matched[o];i&&(e.matched.find(c=>Gs(c,i))?a.push(i):s.push(i));const l=e.matched[o];l&&(t.matched.find(c=>Gs(c,l))||r.push(l))}return[s,a,r]}let om=()=>location.protocol+"//"+location.host;function uu(e,t){const{pathname:s,search:a,hash:r}=t,n=e.indexOf("#");if(n>-1){let o=r.includes(e.slice(n))?e.slice(n).length:1,i=r.slice(o);return i[0]!=="/"&&(i="/"+i),Ui(i,"")}return Ui(s,e)+a+r}function im(e,t,s,a){let r=[],n=[],o=null;const i=({state:p})=>{const f=uu(e,location),b=s.value,v=t.value;let y=0;if(p){if(s.value=f,t.value=p,o&&o===b){o=null;return}y=v?p.position-v.position:0}else a(f);r.forEach(m=>{m(s.value,b,{delta:y,type:vo.pop,direction:y?y>0?Rn.forward:Rn.back:Rn.unknown})})};function l(){o=s.value}function c(p){r.push(p);const f=()=>{const b=r.indexOf(p);b>-1&&r.splice(b,1)};return n.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Te({},p.state,{scroll:un()}),"")}}function u(){for(const p of n)p();n=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function Yi(e,t,s,a=!1,r=!1){return{back:e,current:t,forward:s,replaced:a,position:window.history.length,scroll:r?un():null}}function lm(e){const{history:t,location:s}=window,a={value:uu(e,s)},r={value:t.state};r.value||n(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function n(l,c,d){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+l:om()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),r.value=c}catch(f){console.error(f),s[d?"replace":"assign"](p)}}function o(l,c){n(l,Te({},t.state,Yi(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),a.value=l}function i(l,c){const d=Te({},r.value,t.state,{forward:l,scroll:un()});n(d.current,d,!0),n(l,Te({},Yi(a.value,l,null),{position:d.position+1},c),!1),a.value=l}return{location:a,state:r,push:i,replace:o}}function cm(e){e=Vh(e);const t=lm(e),s=im(e,t.state,t.location,t.replace);function a(n,o=!0){o||s.pauseListeners(),history.go(n)}const r=Te({location:"",base:e,go:a,createHref:Yh.bind(null,e)},t,s);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function dm(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),cm(e)}let Cs=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ne=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ne||{});const um={type:Cs.Static,value:""},pm=/[a-zA-Z0-9_]/;function fm(e){if(!e)return[[]];if(e==="/")return[[um]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${s})/"${c}": ${f}`)}let s=Ne.Static,a=s;const r=[];let n;function o(){n&&r.push(n),n=[]}let i=0,l,c="",d="";function u(){c&&(s===Ne.Static?n.push({type:Cs.Static,value:c}):s===Ne.Param||s===Ne.ParamRegExp||s===Ne.ParamRegExpEnd?(n.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),n.push({type:Cs.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&s!==Ne.ParamRegExp){a=s,s=Ne.EscapeNext;continue}switch(s){case Ne.Static:l==="/"?(c&&u(),o()):l===":"?(u(),s=Ne.Param):p();break;case Ne.EscapeNext:p(),s=a;break;case Ne.Param:l==="("?s=Ne.ParamRegExp:pm.test(l)?p():(u(),s=Ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Ne.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:s=Ne.ParamRegExpEnd:d+=l;break;case Ne.ParamRegExpEnd:u(),s=Ne.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===Ne.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),r}const Wi="[^/]+?",hm={sensitive:!1,strict:!1,start:!0,end:!0};var Xe=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Xe||{});const mm=/[.+*?^${}()[\]/\\]/g;function gm(e,t){const s=Te({},hm,t),a=[];let r=s.start?"^":"";const n=[];for(const c of e){const d=c.length?[]:[Xe.Root];s.strict&&!c.length&&(r+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=Xe.Segment+(s.sensitive?Xe.BonusCaseSensitive:0);if(p.type===Cs.Static)u||(r+="/"),r+=p.value.replace(mm,"\\$&"),f+=Xe.Static;else if(p.type===Cs.Param){const{value:b,repeatable:v,optional:y,regexp:m}=p;n.push({name:b,repeatable:v,optional:y});const h=m||Wi;if(h!==Wi){f+=Xe.BonusCustomRegExp;try{`${h}`}catch(S){throw new Error(`Invalid custom RegExp for param "${b}" (${h}): `+S.message)}}let _=v?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;u||(_=y&&c.length<2?`(?:/${_})`:"/"+_),y&&(_+="?"),r+=_,f+=Xe.Dynamic,y&&(f+=Xe.BonusOptional),v&&(f+=Xe.BonusRepeatable),h===".*"&&(f+=Xe.BonusWildcard)}d.push(f)}a.push(d)}if(s.strict&&s.end){const c=a.length-1;a[c][a[c].length-1]+=Xe.BonusStrict}s.strict||(r+="/?"),s.end?r+="$":s.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,s.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",b=n[p-1];u[b.name]=f&&b.repeatable?f.split("/"):f}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===Cs.Static)d+=f.value;else if(f.type===Cs.Param){const{value:b,repeatable:v,optional:y}=f,m=b in c?c[b]:"";if(Tt(m)&&!v)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const h=Tt(m)?m.join("/"):m;if(!h)if(y)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${b}"`);d+=h}}return d||"/"}return{re:o,score:a,keys:n,parse:i,stringify:l}}function bm(e,t){let s=0;for(;s<e.length&&s<t.length;){const a=t[s]-e[s];if(a)return a;s++}return e.length<t.length?e.length===1&&e[0]===Xe.Static+Xe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Xe.Static+Xe.Segment?1:-1:0}function pu(e,t){let s=0;const a=e.score,r=t.score;for(;s<a.length&&s<r.length;){const n=bm(a[s],r[s]);if(n)return n;s++}if(Math.abs(r.length-a.length)===1){if(Ji(a))return 1;if(Ji(r))return-1}return r.length-a.length}function Ji(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const _m={strict:!1,end:!0,sensitive:!1};function vm(e,t,s){const a=gm(fm(e.path),s),r=Te(a,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function ym(e,t){const s=[],a=new Map;t=ji(_m,t);function r(u){return a.get(u)}function n(u,p,f){const b=!f,v=Qi(u);v.aliasOf=f&&f.record;const y=ji(t,u),m=[v];if("alias"in u){const S=typeof u.alias=="string"?[u.alias]:u.alias;for(const g of S)m.push(Qi(Te({},v,{components:f?f.record.components:v.components,path:g,aliasOf:f?f.record:v})))}let h,_;for(const S of m){const{path:g}=S;if(p&&g[0]!=="/"){const w=p.record.path,x=w[w.length-1]==="/"?"":"/";S.path=p.record.path+(g&&x+g)}if(h=vm(S,p,y),f?f.alias.push(h):(_=_||h,_!==h&&_.alias.push(h),b&&u.name&&!Zi(h)&&o(u.name)),fu(h)&&l(h),v.children){const w=v.children;for(let x=0;x<w.length;x++)n(w[x],h,f&&f.children[x])}f=f||h}return _?()=>{o(_)}:ba}function o(u){if(cu(u)){const p=a.get(u);p&&(a.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&a.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return s}function l(u){const p=Tm(u,s);s.splice(p,0,u),u.record.name&&!Zi(u)&&a.set(u.record.name,u)}function c(u,p){let f,b={},v,y;if("name"in u&&u.name){if(f=a.get(u.name),!f)throw Vs($e.MATCHER_NOT_FOUND,{location:u});y=f.record.name,b=Te(Xi(p.params,f.keys.filter(_=>!_.optional).concat(f.parent?f.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&Xi(u.params,f.keys.map(_=>_.name))),v=f.stringify(b)}else if(u.path!=null)v=u.path,f=s.find(_=>_.re.test(v)),f&&(b=f.parse(v),y=f.record.name);else{if(f=p.name?a.get(p.name):s.find(_=>_.re.test(p.path)),!f)throw Vs($e.MATCHER_NOT_FOUND,{location:u,currentLocation:p});y=f.record.name,b=Te({},p.params,u.params),v=f.stringify(b)}const m=[];let h=f;for(;h;)m.unshift(h.record),h=h.parent;return{name:y,path:v,params:b,matched:m,meta:xm(m)}}e.forEach(u=>n(u));function d(){s.length=0,a.clear()}return{addRoute:n,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:r}}function Xi(e,t){const s={};for(const a of t)a in e&&(s[a]=e[a]);return s}function Qi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:wm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function wm(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const a in e.components)t[a]=typeof s=="object"?s[a]:s;return t}function Zi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function xm(e){return e.reduce((t,s)=>Te(t,s.meta),{})}function Tm(e,t){let s=0,a=t.length;for(;s!==a;){const n=s+a>>1;pu(e,t[n])<0?a=n:s=n+1}const r=Sm(e);return r&&(a=t.lastIndexOf(r,a-1)),a}function Sm(e){let t=e;for(;t=t.parent;)if(fu(t)&&pu(e,t)===0)return t}function fu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function el(e){const t=mt(pn),s=mt(Vo),a=it(()=>{const l=lt(e.to);return t.resolve(l)}),r=it(()=>{const{matched:l}=a.value,{length:c}=l,d=l[c-1],u=s.matched;if(!d||!u.length)return-1;const p=u.findIndex(Gs.bind(null,d));if(p>-1)return p;const f=tl(l[c-2]);return c>1&&tl(d)===f&&u[u.length-1].path!==f?u.findIndex(Gs.bind(null,l[c-2])):p}),n=it(()=>r.value>-1&&Cm(s.params,a.value.params)),o=it(()=>r.value>-1&&r.value===s.matched.length-1&&lu(s.params,a.value.params));function i(l={}){if(Pm(l)){const c=t[lt(e.replace)?"replace":"push"](lt(e.to)).catch(ba);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:a,href:it(()=>a.value.href),isActive:n,isExactActive:o,navigate:i}}function Em(e){return e.length===1?e[0]:e}const km=wd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:el,setup(e,{slots:t}){const s=Xt(el(e)),{options:a}=mt(pn),r=it(()=>({[sl(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[sl(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const n=t.default&&Em(t.default(s));return e.custom?n:qo("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:r.value},n)}}}),Am=km;function Pm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Cm(e,t){for(const s in t){const a=t[s],r=e[s];if(typeof a=="string"){if(a!==r)return!1}else if(!Tt(r)||r.length!==a.length||a.some((n,o)=>n!==r[o]))return!1}return!0}function tl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const sl=(e,t,s)=>e??t??s,Om=wd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const a=mt(wo),r=it(()=>e.route||a.value),n=mt(Ki,0),o=it(()=>{let c=lt(n);const{matched:d}=r.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=it(()=>r.value.matched[o.value]);kr(Ki,it(()=>o.value+1)),kr(rm,i),kr(wo,r);const l=Ke();return ha(()=>[l.value,i.value,e.name],([c,d,u],[p,f,b])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!Gs(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,d=e.name,u=i.value,p=u&&u.components[d];if(!p)return al(s.default,{Component:p,route:c});const f=u.props[d],b=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=qo(p,Te({},b,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return al(s.default,{Component:y,route:c})||y}}});function al(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const hu=Om;function $m(e){const t=ym(e.routes,e),s=e.parseQuery||sm,a=e.stringifyQuery||Vi,r=e.history,n=ea(),o=ea(),i=ea(),l=_p(rs);let c=rs;Hs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=$n.bind(null,B=>""+B),u=$n.bind(null,Fh),p=$n.bind(null,ka);function f(B,z){let Z,re;return cu(B)?(Z=t.getRecordMatcher(B),re=z):re=B,t.addRoute(re,Z)}function b(B){const z=t.getRecordMatcher(B);z&&t.removeRoute(z)}function v(){return t.getRoutes().map(B=>B.record)}function y(B){return!!t.getRecordMatcher(B)}function m(B,z){if(z=Te({},z||l.value),typeof B=="string"){const D=Mn(s,B,z.path),q=t.resolve({path:D.path},z),ee=r.createHref(D.fullPath);return Te(D,q,{params:p(q.params),hash:ka(D.hash),redirectedFrom:void 0,href:ee})}let Z;if(B.path!=null)Z=Te({},B,{path:Mn(s,B.path,z.path).path});else{const D=Te({},B.params);for(const q in D)D[q]==null&&delete D[q];Z=Te({},B,{params:u(D)}),z.params=u(z.params)}const re=t.resolve(Z,z),F=B.hash||"";re.params=d(p(re.params));const k=jh(a,Te({},B,{hash:Nh(F),path:re.path})),C=r.createHref(k);return Te({fullPath:k,hash:F,query:a===Vi?am(B.query):B.query||{}},re,{redirectedFrom:void 0,href:C})}function h(B){return typeof B=="string"?Mn(s,B,l.value.path):Te({},B)}function _(B,z){if(c!==B)return Vs($e.NAVIGATION_CANCELLED,{from:z,to:B})}function S(B){return x(B)}function g(B){return S(Te(h(B),{replace:!0}))}function w(B,z){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:re}=Z;let F=typeof re=="function"?re(B,z):re;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=h(F):{path:F},F.params={}),Te({query:B.query,hash:B.hash,params:F.path!=null?{}:B.params},F)}}function x(B,z){const Z=c=m(B),re=l.value,F=B.state,k=B.force,C=B.replace===!0,D=w(Z,re);if(D)return x(Te(h(D),{state:typeof D=="object"?Te({},F,D.state):F,force:k,replace:C}),z||Z);const q=Z;q.redirectedFrom=z;let ee;return!k&&Uh(a,re,Z)&&(ee=Vs($e.NAVIGATION_DUPLICATED,{to:q,from:re}),R(re,re,!0,!1)),(ee?Promise.resolve(ee):P(q,re)).catch(se=>zt(se)?zt(se,$e.NAVIGATION_GUARD_REDIRECT)?se:U(se):V(se,q,re)).then(se=>{if(se){if(zt(se,$e.NAVIGATION_GUARD_REDIRECT))return x(Te({replace:C},h(se.to),{state:typeof se.to=="object"?Te({},F,se.to.state):F,force:k}),z||q)}else se=O(q,re,!0,C,F);return $(q,re,se),se})}function T(B,z){const Z=_(B,z);return Z?Promise.reject(Z):Promise.resolve()}function E(B){const z=A.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(B):B()}function P(B,z){let Z;const[re,F,k]=nm(B,z);Z=Ln(re.reverse(),"beforeRouteLeave",B,z);for(const D of re)D.leaveGuards.forEach(q=>{Z.push(cs(q,B,z))});const C=T.bind(null,B,z);return Z.push(C),I(Z).then(()=>{Z=[];for(const D of n.list())Z.push(cs(D,B,z));return Z.push(C),I(Z)}).then(()=>{Z=Ln(F,"beforeRouteUpdate",B,z);for(const D of F)D.updateGuards.forEach(q=>{Z.push(cs(q,B,z))});return Z.push(C),I(Z)}).then(()=>{Z=[];for(const D of k)if(D.beforeEnter)if(Tt(D.beforeEnter))for(const q of D.beforeEnter)Z.push(cs(q,B,z));else Z.push(cs(D.beforeEnter,B,z));return Z.push(C),I(Z)}).then(()=>(B.matched.forEach(D=>D.enterCallbacks={}),Z=Ln(k,"beforeRouteEnter",B,z,E),Z.push(C),I(Z))).then(()=>{Z=[];for(const D of o.list())Z.push(cs(D,B,z));return Z.push(C),I(Z)}).catch(D=>zt(D,$e.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function $(B,z,Z){i.list().forEach(re=>E(()=>re(B,z,Z)))}function O(B,z,Z,re,F){const k=_(B,z);if(k)return k;const C=z===rs,D=Hs?history.state:{};Z&&(re||C?r.replace(B.fullPath,Te({scroll:C&&D&&D.scroll},F)):r.push(B.fullPath,F)),l.value=B,R(B,z,Z,C),U()}let L;function G(){L||(L=r.listen((B,z,Z)=>{if(!M.listening)return;const re=m(B),F=w(re,M.currentRoute.value);if(F){x(Te(F,{replace:!0,force:!0}),re).catch(ba);return}c=re;const k=l.value;Hs&&Xh(Gi(k.fullPath,Z.delta),un()),P(re,k).catch(C=>zt(C,$e.NAVIGATION_ABORTED|$e.NAVIGATION_CANCELLED)?C:zt(C,$e.NAVIGATION_GUARD_REDIRECT)?(x(Te(h(C.to),{force:!0}),re).then(D=>{zt(D,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&!Z.delta&&Z.type===vo.pop&&r.go(-1,!1)}).catch(ba),Promise.reject()):(Z.delta&&r.go(-Z.delta,!1),V(C,re,k))).then(C=>{C=C||O(re,k,!1),C&&(Z.delta&&!zt(C,$e.NAVIGATION_CANCELLED)?r.go(-Z.delta,!1):Z.type===vo.pop&&zt(C,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),$(re,k,C)}).catch(ba)}))}let X=ea(),ae=ea(),K;function V(B,z,Z){U(B);const re=ae.list();return re.length?re.forEach(F=>F(B,z,Z)):console.error(B),Promise.reject(B)}function Q(){return K&&l.value!==rs?Promise.resolve():new Promise((B,z)=>{X.add([B,z])})}function U(B){return K||(K=!B,G(),X.list().forEach(([z,Z])=>B?Z(B):z()),X.reset()),B}function R(B,z,Z,re){const{scrollBehavior:F}=e;if(!Hs||!F)return Promise.resolve();const k=!Z&&Qh(Gi(B.fullPath,0))||(re||!Z)&&history.state&&history.state.scroll||null;return Bo().then(()=>F(B,z,k)).then(C=>C&&Jh(C)).catch(C=>V(C,B,z))}const j=B=>r.go(B);let N;const A=new Set,M={currentRoute:l,listening:!0,addRoute:f,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:v,resolve:m,options:e,push:S,replace:g,go:j,back:()=>j(-1),forward:()=>j(1),beforeEach:n.add,beforeResolve:o.add,afterEach:i.add,onError:ae.add,isReady:Q,install(B){B.component("RouterLink",Am),B.component("RouterView",hu),B.config.globalProperties.$router=M,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(l)}),Hs&&!N&&l.value===rs&&(N=!0,S(r.location).catch(re=>{}));const z={};for(const re in rs)Object.defineProperty(z,re,{get:()=>l.value[re],enumerable:!0});B.provide(pn,M),B.provide(Vo,id(z)),B.provide(wo,l);const Z=B.unmount;A.add(B),B.unmount=function(){A.delete(B),A.size<1&&(c=rs,L&&L(),L=null,l.value=rs,N=!1,K=!1),Z()}}};function I(B){return B.reduce((z,Z)=>z.then(()=>E(Z)),Promise.resolve())}return M}function ut(){return mt(pn)}function Ko(e){return mt(Vo)}var Mm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ia={exports:{}},Rm=ia.exports,rl;function Lm(){return rl||(rl=1,(function(e,t){(function(s,a){var r={};s.PubSub?(r=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=r,a(r)),e!==void 0&&e.exports&&(t=e.exports=r),t.PubSub=r,e.exports=t=r})(typeof window=="object"&&window||Rm||Mm,function(s){var a={},r=-1,n="*";function o(v){var y;for(y in v)if(Object.prototype.hasOwnProperty.call(v,y))return!0;return!1}function i(v){return function(){throw v}}function l(v,y,m){try{v(y,m)}catch(h){setTimeout(i(h),0)}}function c(v,y,m){v(y,m)}function d(v,y,m,h){var _=a[y],S=h?c:l,g;if(Object.prototype.hasOwnProperty.call(a,y))for(g in _)Object.prototype.hasOwnProperty.call(_,g)&&S(_[g],v,m)}function u(v,y,m){return function(){var _=String(v),S=_.lastIndexOf(".");for(d(v,v,y,m);S!==-1;)_=_.substr(0,S),S=_.lastIndexOf("."),d(v,_,y,m);d(v,n,y,m)}}function p(v){var y=String(v),m=!!(Object.prototype.hasOwnProperty.call(a,y)&&o(a[y]));return m}function f(v){for(var y=String(v),m=p(y)||p(n),h=y.lastIndexOf(".");!m&&h!==-1;)y=y.substr(0,h),h=y.lastIndexOf("."),m=p(y);return m}function b(v,y,m,h){v=typeof v=="symbol"?v.toString():v;var _=u(v,y,h),S=f(v);return S?(m===!0?_():setTimeout(_,0),!0):!1}s.publish=function(v,y){return b(v,y,!1,s.immediateExceptions)},s.publishSync=function(v,y){return b(v,y,!0,s.immediateExceptions)},s.subscribe=function(v,y){if(typeof y!="function")return!1;v=typeof v=="symbol"?v.toString():v,Object.prototype.hasOwnProperty.call(a,v)||(a[v]={});var m="uid_"+String(++r);return a[v][m]=y,m},s.subscribeAll=function(v){return s.subscribe(n,v)},s.subscribeOnce=function(v,y){var m=s.subscribe(v,function(){s.unsubscribe(m),y.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){a={}},s.clearSubscriptions=function(y){var m;for(m in a)Object.prototype.hasOwnProperty.call(a,m)&&m.indexOf(y)===0&&delete a[m]},s.countSubscriptions=function(y){var m,h,_=0;for(m in a)if(Object.prototype.hasOwnProperty.call(a,m)&&m.indexOf(y)===0){for(h in a[m])_++;break}return _},s.getSubscriptions=function(y){var m,h=[];for(m in a)Object.prototype.hasOwnProperty.call(a,m)&&m.indexOf(y)===0&&h.push(m);return h},s.unsubscribe=function(v){var y=function(T){var E;for(E in a)if(Object.prototype.hasOwnProperty.call(a,E)&&E.indexOf(T)===0)return!0;return!1},m=typeof v=="string"&&(Object.prototype.hasOwnProperty.call(a,v)||y(v)),h=!m&&typeof v=="string",_=typeof v=="function",S=!1,g,w,x;if(m){s.clearSubscriptions(v);return}for(g in a)if(Object.prototype.hasOwnProperty.call(a,g)){if(w=a[g],h&&w[v]){delete w[v],S=v;break}if(_)for(x in w)Object.prototype.hasOwnProperty.call(w,x)&&w[x]===v&&(delete w[x],S=!0)}return S}})})(ia,ia.exports)),ia.exports}var Dm=Lm();const le=mu(Dm);let Ve=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Nm={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function hs(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function Im(e,t){let s;const a=()=>{if(s)return s;const r=indexedDB.open(e);return r.onupgradeneeded=()=>r.result.createObjectStore(t),s=hs(r),s.then(n=>{n.onclose=()=>s=void 0},()=>{}),s};return(r,n)=>a().then(o=>n(o.transaction(t,r).objectStore(t)))}let Dn;function Ma(){return Dn||(Dn=Im("keyval-store","keyval")),Dn}function Bm(e,t=Ma()){return t("readonly",s=>hs(s.get(e)))}function nl(e,t,s=Ma()){return s("readwrite",a=>(a.put(t,e),hs(a.transaction)))}function Nn(e,t=Ma()){return t("readwrite",s=>(s.delete(e),hs(s.transaction)))}function gu(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},hs(e.transaction)}function Ns(e=Ma()){return e("readonly",t=>{if(t.getAllKeys)return hs(t.getAllKeys());const s=[];return gu(t,a=>s.push(a.key)).then(()=>s)})}function Fm(e=Ma()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([hs(t.getAllKeys()),hs(t.getAll())]).then(([a,r])=>a.map((n,o)=>[n,r[o]]));const s=[];return e("readonly",a=>gu(a,r=>s.push([r.key,r.value])).then(()=>s))})}const Ks=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",jr=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!jr(e[s],t[s]))return!1;return!0}if(Ks(e)&&Ks(t)){const s=Object.entries(e),a=new Set(Object.keys(t));if(s.length!==a.size)return!1;for(const[r,n]of s){if(!jr(n,t[r]))return!1;a.delete(r)}return a.size===0}return!1},Ba=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ks(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},zm=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",ol=e=>e>="0"&&e<="9"||e==="-",Hm=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var W;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(W||(W={}));const il={"(":W.TOK_LPAREN,")":W.TOK_RPAREN,"*":W.TOK_STAR,",":W.TOK_COMMA,".":W.TOK_DOT,":":W.TOK_COLON,"@":W.TOK_CURRENT,$:W.TOK_ROOT,"]":W.TOK_RBRACKET,"{":W.TOK_LBRACE,"}":W.TOK_RBRACE},jm={"!":!0,"<":!0,"=":!0,">":!0},Um={"	":!0,"\n":!0,"\r":!0," ":!0};class qm{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let a,r,n;for(;this._current<t.length;)if(zm(t[this._current]))a=this._current,r=this.consumeUnquotedIdentifier(t),s.push({start:a,type:W.TOK_UNQUOTEDIDENTIFIER,value:r});else if(il[t[this._current]]!==void 0)s.push({start:this._current,type:il[t[this._current]],value:t[this._current]}),this._current+=1;else if(ol(t[this._current]))n=this.consumeNumber(t),s.push(n);else if(t[this._current]==="[")n=this.consumeLBracket(t),s.push(n);else if(t[this._current]==='"')a=this._current,r=this.consumeQuotedIdentifier(t),s.push({start:a,type:W.TOK_QUOTEDIDENTIFIER,value:r});else if(t[this._current]==="'")a=this._current,r=this.consumeRawStringLiteral(t),s.push({start:a,type:W.TOK_LITERAL,value:r});else if(t[this._current]==="`"){a=this._current;const o=this.consumeLiteral(t);s.push({start:a,type:W.TOK_LITERAL,value:o})}else if(jm[t[this._current]]!==void 0)n=this.consumeOperator(t),n&&s.push(n);else if(Um[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:a,type:W.TOK_AND,value:"&&"})):s.push({start:a,type:W.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:a,type:W.TOK_OR,value:"||"})):s.push({start:a,type:W.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&Hm(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==='"')?r+=2:r+=1,this._current=r}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==="'")?n+=2:n+=1,this._current=n}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const a=t.length;for(;ol(t[this._current])&&this._current<a;)this._current+=1;const r=parseInt(t.slice(s,this._current),10);return{start:s,value:r,type:W.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:W.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:W.TOK_FLATTEN,value:"[]"}):{start:s,type:W.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,a=t[s];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:W.TOK_NE,value:"!="}):{start:s,type:W.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:W.TOK_LTE,value:"<="}):{start:s,type:W.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:s,type:W.TOK_GTE,value:">="}):{start:s,type:W.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:W.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let r=t.slice(s,this._current).trimLeft();r=r.replace("\\`","`");const n=this.looksLikeJSON(r)?JSON.parse(r):JSON.parse(`"${r}"`);return this._current+=1,n}looksLikeJSON(t){const a=["true","false","null"],r="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(r.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const bu=new qm,je={[W.TOK_EOF]:0,[W.TOK_UNQUOTEDIDENTIFIER]:0,[W.TOK_QUOTEDIDENTIFIER]:0,[W.TOK_RBRACKET]:0,[W.TOK_RPAREN]:0,[W.TOK_COMMA]:0,[W.TOK_RBRACE]:0,[W.TOK_NUMBER]:0,[W.TOK_CURRENT]:0,[W.TOK_EXPREF]:0,[W.TOK_ROOT]:0,[W.TOK_PIPE]:1,[W.TOK_OR]:2,[W.TOK_AND]:3,[W.TOK_EQ]:5,[W.TOK_GT]:5,[W.TOK_LT]:5,[W.TOK_GTE]:5,[W.TOK_LTE]:5,[W.TOK_NE]:5,[W.TOK_FLATTEN]:9,[W.TOK_STAR]:20,[W.TOK_FILTER]:21,[W.TOK_DOT]:40,[W.TOK_NOT]:45,[W.TOK_LBRACE]:50,[W.TOK_LBRACKET]:55,[W.TOK_LPAREN]:60};class Gm{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==W.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return s}loadTokens(t){this.tokens=[...bu.tokenize(t),{type:W.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let a=this.nud(s),r=this.lookahead(0);for(;t<je[r];)this.advance(),a=this.led(r,a),r=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,a,r;switch(t.type){case W.TOK_LITERAL:return{type:"Literal",value:t.value};case W.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case W.TOK_QUOTEDIDENTIFIER:const n={type:"Field",name:t.value};if(this.lookahead(0)===W.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return n;case W.TOK_NOT:return a=this.expression(je.Not),{type:"NotExpression",children:[a]};case W.TOK_STAR:return s={type:"Identity"},a=this.lookahead(0)===W.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(je.Star),{type:"ValueProjection",children:[s,a]};case W.TOK_FILTER:return this.led(t.type,{type:"Identity"});case W.TOK_LBRACE:return this.parseMultiselectHash();case W.TOK_FLATTEN:return s={type:W.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(je.Flatten),{type:"Projection",children:[s,a]};case W.TOK_LBRACKET:return this.lookahead(0)===W.TOK_NUMBER||this.lookahead(0)===W.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===W.TOK_STAR&&this.lookahead(1)===W.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(je.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case W.TOK_CURRENT:return{type:W.TOK_CURRENT};case W.TOK_ROOT:return{type:W.TOK_ROOT};case W.TOK_EXPREF:return r=this.expression(je.Expref),{type:"ExpressionReference",children:[r]};case W.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==W.TOK_RPAREN;)this.lookahead(0)===W.TOK_CURRENT?(r={type:W.TOK_CURRENT},this.advance()):r=this.expression(0),o.push(r);return this.match(W.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,s){let a;switch(t){case W.TOK_DOT:const r=je.Dot;return this.lookahead(0)!==W.TOK_STAR?(a=this.parseDotRHS(r),{type:"Subexpression",children:[s,a]}):(this.advance(),a=this.parseProjectionRHS(r),{type:"ValueProjection",children:[s,a]});case W.TOK_PIPE:return a=this.expression(je.Pipe),{type:W.TOK_PIPE,children:[s,a]};case W.TOK_OR:return a=this.expression(je.Or),{type:"OrExpression",children:[s,a]};case W.TOK_AND:return a=this.expression(je.And),{type:"AndExpression",children:[s,a]};case W.TOK_LPAREN:const n=s.name,o=[];let i;for(;this.lookahead(0)!==W.TOK_RPAREN;)this.lookahead(0)===W.TOK_CURRENT?(i={type:W.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===W.TOK_COMMA&&this.match(W.TOK_COMMA),o.push(i);return this.match(W.TOK_RPAREN),{name:n,type:"Function",children:o};case W.TOK_FILTER:const c=this.expression(0);return this.match(W.TOK_RBRACKET),a=this.lookahead(0)===W.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(je.Filter),{type:"FilterProjection",children:[s,a,c]};case W.TOK_FLATTEN:const d={type:W.TOK_FLATTEN,children:[s]},u=this.parseProjectionRHS(je.Flatten);return{type:"Projection",children:[d,u]};case W.TOK_EQ:case W.TOK_NE:case W.TOK_GT:case W.TOK_GTE:case W.TOK_LT:case W.TOK_LTE:return this.parseComparator(s,t);case W.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===W.TOK_NUMBER||p.type===W.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(s,a)):(this.match(W.TOK_STAR),this.match(W.TOK_RBRACKET),a=this.parseProjectionRHS(je.Star),{type:"Projection",children:[s,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const a=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===W.TOK_COLON||this.lookahead(1)===W.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(W.TOK_RBRACKET),t}projectIfSlice(t,s){const a={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[a,this.parseProjectionRHS(je.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let s=0,a=this.lookahead(0);for(;a!==W.TOK_RBRACKET&&s<3;){if(a===W.TOK_COLON)s+=1,this.advance();else if(a===W.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}a=this.lookahead(0)}return this.match(W.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const a=this.expression(je[s]);return{type:"Comparator",name:s,children:[t,a]}}parseDotRHS(t){const s=this.lookahead(0);if([W.TOK_UNQUOTEDIDENTIFIER,W.TOK_QUOTEDIDENTIFIER,W.TOK_STAR].includes(s))return this.expression(t);if(s===W.TOK_LBRACKET)return this.match(W.TOK_LBRACKET),this.parseMultiselectList();if(s===W.TOK_LBRACE)return this.match(W.TOK_LBRACE),this.parseMultiselectHash();const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}parseProjectionRHS(t){if(je[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===W.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===W.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===W.TOK_DOT)return this.match(W.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==W.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===W.TOK_COMMA&&(this.match(W.TOK_COMMA),this.lookahead(0)===W.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(W.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[W.TOK_UNQUOTEDIDENTIFIER,W.TOK_QUOTEDIDENTIFIER];let a,r,n;for(;;){if(a=this.lookaheadToken(0),!s.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(r=a.value,this.advance(),this.match(W.TOK_COLON),n=this.expression(0),t.push({value:n,type:"KeyValuePair",name:r}),this.lookahead(0)===W.TOK_COMMA)this.match(W.TOK_COMMA);else if(this.lookahead(0)===W.TOK_RBRACE){this.match(W.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const _u=new Gm;var oe;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(oe||(oe={}));class Vm{constructor(t){this.TYPE_NAME_TABLE={[oe.TYPE_NUMBER]:"number",[oe.TYPE_ANY]:"any",[oe.TYPE_STRING]:"string",[oe.TYPE_ARRAY]:"array",[oe.TYPE_OBJECT]:"object",[oe.TYPE_BOOLEAN]:"boolean",[oe.TYPE_EXPREF]:"expression",[oe.TYPE_NULL]:"null",[oe.TYPE_ARRAY_NUMBER]:"Array<number>",[oe.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let a=0;for(let r=0;r<s.length;r+=1)a+=s[r];return a/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[a,r]=s;return a.includes(r)},this.functionEndsWith=s=>{const[a,r]=s;return a.includes(r,a.length-r.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[a,r]=s;return r.join(a)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>Ks(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const a=[],r=this._interpreter,n=s[0],o=s[1];for(let i=0;i<o.length;i+=1)a.push(r.visit(n,o[i]));return a},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===oe.TYPE_NUMBER)return Math.max(...s);const r=s;let n=r[0];for(let o=1;o<r.length;o+=1)n.localeCompare(r[o])<0&&(n=r[o]);return n},this.functionMaxBy=s=>{const a=s[1],r=s[0],n=this.createKeyFunction(a,[oe.TYPE_NUMBER,oe.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<r.length;c+=1)l=n&&n(r[c]),l!==void 0&&l>o&&(o=l,i=r[c]);return i},this.functionMerge=s=>{let a={};for(let r=0;r<s.length;r+=1){const n=s[r];a=Object.assign(a,n)}return a},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===oe.TYPE_NUMBER)return Math.min(...s);const r=s;let n=r[0];for(let o=1;o<r.length;o+=1)r[o].localeCompare(n)<0&&(n=r[o]);return n},this.functionMinBy=s=>{const a=s[1],r=s[0],n=this.createKeyFunction(a,[oe.TYPE_NUMBER,oe.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<r.length;c+=1)l=n&&n(r[c]),l!==void 0&&l<o&&(o=l,i=r[c]);return i},this.functionNotNull=s=>{for(let a=0;a<s.length;a+=1)if(this.getTypeName(s[a])!==oe.TYPE_NULL)return s[a];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===oe.TYPE_STRING){const n=s;let o="";for(let i=n.length-1;i>=0;i-=1)o+=n[i];return o}const r=s.slice(0);return r.reverse(),r},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const a=s[0].slice(0);if(a.length===0)return a;const r=this._interpreter,n=s[1],o=this.getTypeName(r.visit(n,a[0]));if(o!==void 0&&![oe.TYPE_NUMBER,oe.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<a.length;l+=1)i.push([l,a[l]]);i.sort((l,c)=>{const d=r.visit(n,l[1]),u=r.visit(n,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)a[l]=i[l][1];return a},this.functionStartsWith=([s,a])=>s.startsWith(a),this.functionSum=([s])=>s.reduce((a,r)=>a+r,0),this.functionToArray=([s])=>this.getTypeName(s)===oe.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const a=this.getTypeName(s);let r;return a===oe.TYPE_NUMBER?s:a===oe.TYPE_STRING&&(r=+s,!isNaN(r))?r:null},this.functionToString=([s])=>this.getTypeName(s)===oe.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case oe.TYPE_NUMBER:return"number";case oe.TYPE_STRING:return"string";case oe.TYPE_ARRAY:return"array";case oe.TYPE_OBJECT:return"object";case oe.TYPE_BOOLEAN:return"boolean";case oe.TYPE_EXPREF:return"expref";case oe.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[oe.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[oe.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[oe.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY]},{types:[oe.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[oe.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[oe.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY,oe.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[oe.TYPE_EXPREF]},{types:[oe.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[oe.TYPE_ARRAY_NUMBER,oe.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[oe.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[oe.TYPE_ARRAY_NUMBER,oe.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[oe.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[oe.TYPE_ARRAY_STRING,oe.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[oe.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[oe.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[oe.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[oe.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[oe.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[oe.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:a}}callFunction(t,s){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,a._signature),a._func.call(this,s)}validateInputSignatures(t,s){for(let a=0;a<s.length;a+=1)if("variadic"in s[a]&&a!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,s,a){var r,n;let o;this.validateInputSignatures(t,a);const i=a.filter(v=>{var y;return(y=!v.optional)!==null&&y!==void 0?y:!1}).length,l=(n=(r=a[a.length-1])===null||r===void 0?void 0:r.variadic)!==null&&n!==void 0?n:!1,c=s.length<i,d=s.length>a.length,u=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw o=a.length>1,new Error(`ArgumentError: ${t}() takes ${u}${i} argument${o&&"s"||""} but received ${s.length}`);let p,f,b;for(let v=0;v<a.length;v+=1){b=!1,p=a[v].types,f=this.getTypeName(s[v]);let y;for(y=0;y<p.length;y+=1)if(f!==void 0&&this.typeMatches(f,p[y],s[v])){b=!0;break}if(!b&&f!==void 0){const m=p.map(h=>this.TYPE_NAME_TABLE[h]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${v+1} to be type (${m}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,s,a){if(s===oe.TYPE_ANY)return!0;if(s===oe.TYPE_ARRAY_STRING||s===oe.TYPE_ARRAY_NUMBER||s===oe.TYPE_ARRAY){if(s===oe.TYPE_ARRAY)return t===oe.TYPE_ARRAY;if(t===oe.TYPE_ARRAY){let r;s===oe.TYPE_ARRAY_NUMBER?r=oe.TYPE_NUMBER:s===oe.TYPE_ARRAY_STRING&&(r=oe.TYPE_STRING);for(let n=0;n<a.length;n+=1){const o=this.getTypeName(a[n]);if(o!==void 0&&r!==void 0&&!this.typeMatches(o,r,a[n]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return oe.TYPE_STRING;case"[object Number]":return oe.TYPE_NUMBER;case"[object Array]":return oe.TYPE_ARRAY;case"[object Boolean]":return oe.TYPE_BOOLEAN;case"[object Null]":return oe.TYPE_NULL;case"[object Object]":return t.jmespathType===W.TOK_EXPREF?oe.TYPE_EXPREF:oe.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const a=this._interpreter;return n=>{const o=a.visit(t,n);if(!s.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${s.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Km{constructor(){this._rootValue=null,this.runtime=new Vm(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let a,r,n,o,i,l,c,d,u,p,f;switch(t.type){case"Field":return s===null?null:Ks(s)?(l=s[t.name],l===void 0?null:l):null;case"Subexpression":for(n=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(n=this.visit(t.children[1],n),n===null)return null;return n;case"IndexExpression":return c=this.visit(t.children[0],s),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(s))return null;let b=t.value;return b<0&&(b=s.length+b),n=s[b],n===void 0&&(n=null),n;case"Slice":if(!Array.isArray(s))return null;const v=[...t.children],y=this.computeSliceParams(s.length,v),[m,h,_]=y;if(n=[],_>0)for(p=m;p<h;p+=_)n.push(s[p]);else for(p=m;p>h;p+=_)n.push(s[p]);return n;case"Projection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)r=this.visit(t.children[1],f[p]),r!==null&&u.push(r);return u;case"ValueProjection":if(f=this.visit(t.children[0],s),!Ks(f))return null;u=[];const S=Object.values(f);for(p=0;p<S.length;p+=1)r=this.visit(t.children[1],S[p]),r!==null&&u.push(r);return u;case"FilterProjection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;const g=[],w=[];for(p=0;p<f.length;p+=1)a=this.visit(t.children[2],f[p]),Ba(a)||g.push(f[p]);for(let O=0;O<g.length;O+=1)r=this.visit(t.children[1],g[O]),r!==null&&w.push(r);return w;case"Comparator":switch(o=this.visit(t.children[0],s),i=this.visit(t.children[1],s),t.name){case W.TOK_EQ:n=jr(o,i);break;case W.TOK_NE:n=!jr(o,i);break;case W.TOK_GT:n=o>i;break;case W.TOK_GTE:n=o>=i;break;case W.TOK_LT:n=o<i;break;case W.TOK_LTE:n=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return n;case W.TOK_FLATTEN:const x=this.visit(t.children[0],s);if(!Array.isArray(x))return null;let T=[];for(p=0;p<x.length;p+=1)r=x[p],Array.isArray(r)?T=[...T,...r]:T.push(r);return T;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],s));return u;case"MultiSelectHash":if(s===null)return null;u={};let E;for(p=0;p<t.children.length;p+=1)E=t.children[p],u[E.name]=this.visit(E.value,s);return u;case"OrExpression":return a=this.visit(t.children[0],s),Ba(a)&&(a=this.visit(t.children[1],s)),a;case"AndExpression":return o=this.visit(t.children[0],s),Ba(o)?o:this.visit(t.children[1],s);case"NotExpression":return o=this.visit(t.children[0],s),Ba(o);case"Literal":return t.value;case W.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case W.TOK_CURRENT:return s;case W.TOK_ROOT:return this._rootValue;case"Function":const P=[];for(let O=0;O<t.children.length;O+=1)P.push(this.visit(t.children[O],s));return this.runtime.callFunction(t.name,P);case"ExpressionReference":const $=t.children[0];return $.jmespathType=W.TOK_EXPREF,$;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[a,r,n]=s;if(n===null)n=1;else if(n===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=n<0;return a=a===null?o?t-1:0:this.capSliceRange(t,a,n),r=r===null?o?-1:t:this.capSliceRange(t,r,n),[a,r,n]}capSliceRange(t,s,a){let r=s;return r<0?(r+=t,r<0&&(r=a<0?-1:0)):r>=t&&(r=a<0?t-1:t),r}}const Yo=new Km,Ym=oe.TYPE_ANY,Wm=oe.TYPE_ARRAY,Jm=oe.TYPE_ARRAY_NUMBER,Xm=oe.TYPE_ARRAY_STRING,Qm=oe.TYPE_BOOLEAN,Zm=oe.TYPE_EXPREF,eg=oe.TYPE_NULL,tg=oe.TYPE_NUMBER,sg=oe.TYPE_OBJECT,ag=oe.TYPE_STRING;function rg(e){return _u.parse(e)}function ng(e){return bu.tokenize(e)}const og=(e,t,s)=>{Yo.runtime.registerFunction(e,t,s)};function ig(e,t){const s=_u.parse(t);return Yo.search(s,e)}const lg=Yo,ft={compile:rg,registerFunction:og,search:ig,tokenize:ng,TreeInterpreter:lg,TYPE_ANY:Ym,TYPE_ARRAY_NUMBER:Jm,TYPE_ARRAY_STRING:Xm,TYPE_ARRAY:Wm,TYPE_BOOLEAN:Qm,TYPE_EXPREF:Zm,TYPE_NULL:eg,TYPE_NUMBER:tg,TYPE_OBJECT:sg,TYPE_STRING:ag},Ot=class Ot{static async appendPrompt(t,s){nl(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{Ns().then(a=>{a=a.filter(r=>r.indexOf(this.DELIM_PROMPTS)!=-1),a.length>Ot.MAX_PROMPTS_VALS&&Nn(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(s=>{let a=JSON.stringify({ts:Date.now(),name:s[1]});nl(s[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(r=>console.error("~IDB Failed | ",r))})}static async keys(t,s){Ns().then(a=>{a=a.filter(r=>r.indexOf(t)!=-1),s&&s(a)})}static async get(t,s){Bm(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{s&&s(a)}})}static async entries(t,s){Fm().then(a=>{a=a.filter(r=>r[0].indexOf(t)!=-1),a=a.map(r=>{try{r[1]=JSON.parse(LZString.decompressFromUTF16(r[1]))}catch{}finally{}return r}),s&&s(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,a){let r="";switch(t){case"PROMPTS_COUNT":Ns().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),r=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,r&&a&&a(r)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":Ns().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(Ot.DELIM_PROMPTS)[0]==s&&Nn(i)})}),r="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",r);break;case"VIR_COUNT":Ns().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),r=`There are ${o.length} VNR names in local IDB storage.`,r&&a&&a(r)});break;case"VIR_CLEAR":let n=0;await Ns().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(Ot.DELIM_VIR)[0]==s&&(n++,Nn(i))})}),r=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${n})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),r="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",r),r&&a&&a(r)}};Ot.MAX_TYPEAHEAD_ROWS=14,Ot.MAX_PROMPTS_VALS=50,Ot.DELIM_PROMPTS="_",Ot.DELIM_VIR="-",Ot.DELIM_SNDX="|";let Ps=Ot;const be=Eh("AppState",()=>{const e=ut(),t="DEV",s="BMA Tourney v0.0.5 ",a="#app",r=Xt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let n=Xt([]),o=Xt([]);const i=E=>{n.push(E),n.length>10&&(n.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${n.length}`)},l=E=>{o.push(E),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const E=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",E),E)try{const P=JSON.parse(E);return console.log("[appState] Parsed session_user:",P),P}catch(P){console.error("Failed to parse session_user from localStorage:",P)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Ke({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Ke({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",Ps.compr(JSON.stringify(u.value.features)));else{let E=Ps.decompr(localStorage.getItem("feature_flags"));E=Object.assign(u.value.features,JSON.parse(E));for(let P in E)typeof u.value?.env_override[t][P]<"u"&&(E[P]=u.value.env_override[t][P]);localStorage.setItem("feature_flags",Ps.compr(JSON.stringify(u.value.features=E)))}},f=()=>{const E=document.querySelector(a);if(E){const P=E.dataset;for(let $ in P){const O=$.replace(/^sync/,""),L=Object.keys(u.value.features).find(G=>G.toLowerCase()===O.toLowerCase());if(L){const G=u.value.features[L]?.state;G&&(P[$]=G)}}}},b=(E="Theme",P={state:"dark"})=>{const $=document.querySelector(a);$&&($.dataset["sync"+E]=P.state)},v=(E="Theme",P={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&P){let O=JSON.parse(Ps.decompr(localStorage.getItem("feature_flags")));O[E]={state:P.state},localStorage.setItem("feature_flags",Ps.compr(JSON.stringify(u.value.features=O))),b(E,P),le.publish("APP.ROUTE_SYNC",`{ "${E}": ${JSON.stringify(P)}}`)}},y=E=>{const P=u.value?.features?.Lang?.state;let $=_.value.microcopy.language.filter(O=>O.code==P)[0]?.copy;if($=$.filter(O=>O[0]==E)[0],$)return $[1]},m=(E=":version")=>{let[P,$,O]=E.split(" ");switch(P=P.toLocaleLowerCase(),O=="true"&&(O=!0),O=="false"&&(O=!1),P){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":v($,{state:O});break;case":route":neodigmToast.q(`route ${$}`,"brand"),e.push({name:$});break}};p(),f();const h=Xt({designer:"guided_tour",notifications:{unread:0}}),_=Ke({sports:Ve,microcopy:Nm.getMeta()}),S=it(()=>d.value.session_user.fname+" "+d.value.session_user.lname),g=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},w=()=>{localStorage.removeItem("session_user")};function x(E){return d.value.session_user.authenticated=!0,d.value.session_user.token=E,g(),d.value.session_app.route="chat"}function T(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",w(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:h,appMeta:_,appSession:d,clearSessionUser:w,concatFirstLast:S,coreBetSlip:o,coreTourn:n,doCLI:m,doLogin:x,doLogout:T,hierTopics:r,i18n:y,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:g,setFeaturePersistPub:v}}),In="mvvBrand",cg=400,Aa={scanIntervalId:null,processedElements:new WeakSet,init(){const t=new URLSearchParams(window.location.search).get("brand");t!==null&&(t==="null"||t===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(t)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(e){if(e)try{localStorage.setItem(In,e),console.log("[BrandManager] Brand token set:",e)}catch(t){console.error("[BrandManager] Failed to set brand:",t)}},getBrand(){try{return localStorage.getItem(In)}catch(e){return console.error("[BrandManager] Failed to get brand:",e),null}},clearBrand(){localStorage.removeItem(In),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const e=this.getBrand();return e?{"x-m5t-brand":e}:{}},hydrateBrandElements(){const e=this.getBrand();if(!e)return;const t=document.querySelectorAll("[data-mvv-brand]");t.forEach(s=>{s.getAttribute("data-mvv-brand")==="token"&&(s.textContent=e)}),t.length>0&&console.log(`[BrandManager] Hydrated ${t.length} brand elements with token:`,e)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},cg),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const e=this.getBrand();if(!e)return;const t=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{t.push(s)}),document.querySelectorAll("*").forEach(s=>{s.shadowRoot&&s.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(a=>{t.push(a)})}),t.forEach(s=>{if(this.processedElements.has(s))return;const a=s.getAttribute("src");if(a&&!a.includes("&brand=")){const r=`${a}&brand=${e}`;s.setAttribute("src",r),this.processedElements.add(s),console.log("[BrandManager] Updated src for element:",s)}})}},Je=class Je{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Je.setTJO(null),location.reload()}static async doSignin(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",a)).json();n.ok?(typeof mvvLegit<"u"&&mvvLegit&&n?.accessToken&&mvvLegit.doSignin(n?.accessToken),s&&s(n)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",a)).json();if(n.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(n);else{const o=n?.error||n?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),s&&s(n)}}static async checkUserName(t,s=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return s&&s(n),n}static async resetHash(t,s,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const r=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,n={method:"POST",body:JSON.stringify({guid:t,hash:r}),headers:Je.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",n)).json();a&&a(i)}static genHeaders(t={}){let s={};s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company);const a=Aa.getBrandHeader();return Object.assign(s,a),s}static async fetchTournaments(t=null){const s={method:"GET",headers:Je.genHeaders()},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(r),r}static async fetchBetSlips(t,s="",a="",r=null){let n=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(n+=`/${s}`),s&&a&&(n+=`/${a}`);const o={method:"GET",headers:Je.genHeaders()},l=await(await fetch(this.API_baseURI+n,o)).json();return r&&r(l),l}static async fetchLeaderboard(t,s="",a=null){let r=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(r+=`&user=${s}`);const n={method:"GET",headers:Je.genHeaders()},i=await(await fetch(this.API_baseURI+r,n)).json();return a&&a(i),i}static async fetchGlobalLeaderboard(t=null){const s=`/m5t/${this.API_ver}/coreLeaderboard`,a={method:"GET",headers:Je.genHeaders()},n=await(await fetch(this.API_baseURI+s,a)).json();return t&&t(n),n}static async fetchAllTimeLeaderboard(t="ALL",s=100,a="td",r=null){const n=new URLSearchParams({sport:t,limit:String(s),sort:a}),o=`/m5t/${this.API_ver}/coreLeaderboard/alltime?${n.toString()}`,i={method:"GET",headers:Je.genHeaders()},c=await(await fetch(this.API_baseURI+o,i)).json();return r&&r(c),c}static async postBetSlips(t,s=null){const a=t.map(n=>{const o={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),r=await Promise.all(a);return s&&s(r),r}static async fetchPromotions(t=null){const s={method:"GET",headers:Je.genHeaders()},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",s)).json();return t&&t(r),r}};Je.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Je.API_ver="v5",Je.jsState={},Je.jsMeta={},Je.jsTJO=null;let Ae=Je;const Ys={shootConfetti(){if(typeof confetti=="function"){let a=function(r,n){confetti({...t,...n,particleCount:Math.floor(e*r)})};var s=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const a in t)e[a]&&t[a]!=e[a]&&(s[a]=e[a]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},gs=(e,t)=>{const s=e.__vccOpts||e;for(const[a,r]of t)s[a]=r;return s},dg={class:"auth-page"},ug={__name:"splash_route",setup(e){const t=ut(),s=Ko();return be(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,r)=>(Me(),Ie("div",dg,[...r[0]||(r[0]=[wt('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),H("div",{class:"auth-page-right"},[H("div",{class:"auth-card splash-content"},[H("p",{class:"splash-message"},"Loading Tournaments..."),H("br"),H("br"),H("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[H("div")])])],-1)])]))}},ll=gs(ug,[["__scopeId","data-v-994bad53"]]);class pg{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(s=>{let a=!1;for(const r of s){if(r.attributeName==="data-sync-theme"){const n=t.getAttribute("data-sync-theme")||"dark";n!==this._theme&&(this._theme=n,a=!0)}if(r.attributeName==="data-sync-motif"){const n=t.getAttribute("data-sync-motif")||"brand";n!==this._motif&&(this._motif=n,a=!0)}if(r.attributeName==="data-sync-lang"){const n=t.getAttribute("data-sync-lang")||"en";n!==this._lang&&(this._lang=n,a=!0)}}a&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(s){console.warn("[BMAThemeResolver] Listener error:",s)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const ke=new pg().init(),vu={mobile:"(orientation: portrait), (max-width: 768px)"};function De(){return`
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
  `}function bs(){return`
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
  `}class fg extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=ke.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=ke.theme;let s=this.getAttribute("data-sport-group")||"Soccer",a,r;s==="Multi"?(a="Multi",r=`var(--sport-icon__Multi--${t})`):(a=s.replaceAll(" ","_"),r=`var(--sport-icon__${a}--${t})`),this.shadowRoot.innerHTML=`
      <style>
        ${De()}

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
          background-image: ${r};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",fg);class hg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=ke.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,s={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),r=t.target.closest(".btn-play"),n=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(r){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(n){t.stopPropagation();const o=n.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,a){s!==a&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const s=t.scrollHeight-t.clientHeight,a=this.getAttribute("data-compact")==="true";!a&&s>2?this.setAttribute("data-compact","true"):a&&s<-10&&this.removeAttribute("data-compact")})}getTheme(){return ke.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(r=>Array.isArray(r))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(r=>Array.isArray(r))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const a=s.find(n=>n&&typeof n=="object"&&!Array.isArray(n));return{current:s.find(n=>Array.isArray(n))?.length||0,max:parseInt(a?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const r=JSON.parse(a);if(!Array.isArray(r))return null;const n=r.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===s&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[s]&&o[s].startsWith("--badge__ribbon--"))));return n&&(n.badge||n[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=Ve.find(a=>a.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(a=>{const r=a.title||"Match";let n="TBD";if(a.scheduled_at)try{n=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{n=a.scheduled_at}return`  ${r} @ ${n}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let a="";for(let r=0;r<s;r++){const n=t[r].key,o=Ve.find(l=>l.key===n),i=o?o.group:"default";a+=`<bma-sport-icon sport="${n}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),s=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        ${bs()}
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
              ${(()=>{const r=this.gameModeBadge;return r?`<span class="game-mode-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; opacity: 0.7;"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg> ${r.label}</span>`:""})()}
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
              <p class="info-value">${this.matches==0?"TBD":this.matches+(()=>{try{return JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(n=>n.override_last_match_close===!0)?"+":""}catch{return""}})()}</p>
            </section>
            <section class="info-cell">
              <p class="info-label">Starting TD$</p>
              <p class="info-value">${Number(this.tournament_dollars).toLocaleString()}</p>
            </section>
          </div>
        </div>
      </div>
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",hg);class mg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,a){if(s!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Ys.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{le.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const s=this.shadowRoot.querySelector(".content_stake_text input");s&&s.addEventListener("input",a=>{const r=a.target.value;this.setAttribute("data-stake",r)})}render(){this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        :host {
          display: block;
          width: 100%;
          margin-bottom: 8px;
          animation: bma-slideUp 300ms cubic-bezier(0.4, 0, 0.2, 1) both;
        }

        .bet-entry-card {
          display: grid;
          grid-template-columns: 28px auto;
          grid-template-areas:
            "grid_close grid_header"
            "grid_close grid_content";
          grid-template-rows: auto auto;
          background: var(--app-core-color--gray-2__dark--brand, #161616);
          border: none;
          box-shadow: inset 0 0 0 1px var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: var(--card-radius, var(--radius-lg, 12px));
          padding: 6px;
          gap: 6px;
          box-sizing: border-box;
        }

        .grid_close {
          grid-area: grid_close;
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }

        .grid_header {
          grid-area: grid_header;
          display: grid;
          grid-template-columns: 70% 30%;
          gap: 8px;
          align-items: center;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
        }

        .grid_close button {
          width: 22px; height: 22px;
          border-radius: 50%;
          background: var(--app-core-color--gray-4__dark--brand, #323232);
          border: 1px solid var(--app-core-color--gray-5__dark--brand, #484848);
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
          padding: 0;
        }

        .grid_close button:hover {
          background: var(--app-core-color--red-3__dark--brand, #B91418);
          color: #fff;
          border-color: var(--app-core-color--red-3__dark--brand, #B91418);
        }

        .grid_content {
          grid-area: grid_content;
          display: grid;
          grid-template-columns: 36% auto 124px;
          gap: 6px;
          align-items: center;
        }

        .content_team_points {
          font-weight: 700;
          font-size: 12px;
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
        }

        .content_odds {
          font-size: 0.9rem;
          color: #fff;
          text-align: center;
        }

        /* Add "+" prefix to positive odds (not negative numbers) */
        .content_odds:not([data-odds-value^="-"])::before {
          content: "+";
        }

        .content_stake_text {
          display: flex;
          align-items: center;
        }

        .content_stake_text input {
          width: 100%;
          padding: 8px;
          background: var(--app-core-color--gray-3__dark--brand, #181818);
          border: none;
          box-shadow: inset 0 0 0 1px var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: var(--input-radius, 6px);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: right;
          box-sizing: border-box;
        }

        .content_stake_text input:focus {
          outline: none;
          box-shadow: inset 0 0 0 1px var(--app-core-color--yellow-3__dark--brand, #F7C60D);
        }

        /* Hide number input spinners/steppers */
        .content_stake_text input::-webkit-outer-spin-button,
        .content_stake_text input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .content_stake_text input[type=number] {
          -moz-appearance: textfield;
        }

        .content_type {
          font-size: 0.75rem;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          text-transform: uppercase;
          font-weight: 600;
        }

        .content_auto_1,
        .content_auto_2 {
          /* Reserved for future use */
        }

        .match_desc {
          font-size: 11px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .match_date {
          font-size: 10px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          text-align: center;
        }

        .content_payout {
          font-size: 12px;
          font-weight: 700;
          color: var(--app-core-color--green-3__dark--brand, #14b963);
          text-align: right;
        }

        @media (orientation: portrait), (max-width: 768px) {
          .grid_content {
            grid-template-columns: 40% auto 120px;
            gap: 6px;
          }

          .content_team_points {
            font-size: 0.85rem;
          }

          .content_odds {
            font-size: 0.8rem;
          }

          .content_stake_text input {
            padding: 6px;
            font-size: 0.85rem;
          }
        }
      </style>

      <div class="bet-entry-card">
        <div class="grid_close">
          <button aria-label="Remove bet">✕</button>
        </div>
        <div class="grid_header">
          <div class="match_desc">${this.abbreviatedTitle}</div>
          <div class="match_date">${this.scheduledAt}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${this.teamPoints}</div>
          <div class="content_odds" data-odds-value="${this.odds}">${this.odds}</div>
          <div class="content_stake_text">
            <input type="number" min="0" value="${this.stake!=="0"?this.stake:""}" placeholder="Stake" aria-label="Stake amount">
          </div>

          <!-- Row 2 -->
          <div class="content_type">${this.type}</div>
          <div class="content_auto_1"></div>
          <div class="content_auto_2"></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout">Payout: <span class="payout-value">${this.payout}</span></div>
        </div>
      </div>
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",mg);class gg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return ke.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=Ve.find(a=>a.key===t);return s?s.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing tournament tags:",s),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const a=this.scoreboard;if(!a||!a.time_remaining)return!1;const r=a.time_remaining.toLowerCase();return r==="in progress"||r.includes("q")||r.includes("half")||r.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=ke.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const s=this.shadowRoot?.querySelector(".countdown");s&&(s.textContent=t)}attributeChangedCallback(t,s,a){s!==a&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const a=s-t;if(a<=0)return"";const r=Math.floor(a/(1e3*60*60)),n=Math.floor(a%(1e3*60*60)/(1e3*60));return r>24?`${Math.floor(r/24)}d ${r%24}h`:r>0?`${r}h ${n}m`:n>5?`${n} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const a=s.time_remaining.toLowerCase();if(a==="final")return{type:"final",text:"Final",color:"#969696"};if(a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")){const r=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,n=s.period!==void 0&&s.period!==null&&s.period!==0;if(r||n)return{type:"live",text:s.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let a=this.scheduledAt;if(!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a=a+"Z"),new Date(a)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,a,r,n){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:a,price:r,point:n,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,s,a,r,n=!1){if(!a)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const o=a.price,i=a.point;let l="";return t==="spread"?l=`${i>0?`+${i}`:i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?l=o:t==="total"&&(l=`${r}${i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${n?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${o}"
                    ${i?`data-point="${i}"`:""}
                    ${n?'data-disabled="true"':""}>
            ${l}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const s=this.isMatchInProgressLocked(),a=this.isDisabled||s,r=this.getGameStatus(),n=this.scoreboard,o=n?.home_score||0,i=n?.away_score||0,l=r?.type==="live"||r?.type==="final",c=parseInt(o),d=parseInt(i),u=r?.type==="final",p=r?.type==="live",f=l&&u&&c>d,b=l&&u&&d>c,v=l&&p&&c>d,y=l&&p&&d>c,m=t?.spreads?.outcomes?.find(x=>x.name===this.homeTeam),h=t?.spreads?.outcomes?.find(x=>x.name===this.awayTeam),_=t?.h2h?.outcomes?.find(x=>x.name===this.homeTeam),S=t?.h2h?.outcomes?.find(x=>x.name===this.awayTeam),g=t?.totals?.outcomes?.find(x=>x.name==="Over"),w=t?.totals?.outcomes?.find(x=>x.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                ${De()}
                ${bs()}

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

            <div class="card ${r?`card--${r.type}`:""}">
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
                    ${r&&r.type!=="scheduled"?`
                        <div class="status-badge status-badge--${r.type}">
                            ${r.type==="live"?'<span class="live-dot"></span>':""}
                            <span class="countdown">${r.text}</span>
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
                        <div class="team team--home ${f?"team--winner":""} ${b?"team--loser":""}">
                            <span class="team-name">${this.homeTeam}</span>
                            ${l?`<span class="team-score ${v?"score--leading":""} ${y?"score--trailing":""}">${o}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","home",m,null,a)}
                                ${this.renderButton("money","home",_,null,a)}
                                ${this.renderButton("total","under",w,"U",a)}
                            </div>
                        `}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${b?"team--winner":""} ${f?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${l?`<span class="team-score ${y?"score--leading":""} ${v?"score--trailing":""}">${i}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","away",h,null,a)}
                                ${this.renderButton("money","away",S,null,a)}
                                ${this.renderButton("total","over",g,"O",a)}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(x=>{const T=x.dataset.betType,E=x.dataset.team,P=x.dataset.price,$=x.dataset.point||null;x.addEventListener("click",O=>this.handleButtonClick(O,T,E,P,$))})}}customElements.define("bma-bet-match-card",gg);class bg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=ke.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(s){return console.warn("[bma-match-status] Failed to parse scoreboard data:",s),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=Ve.find(s=>s.key===this.sportId);return t?t.group:""}get theme(){return ke.theme}get isDark(){return ke.isDark}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let s=this.scheduledAt;!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z");const r=new Date(s)-t;if(r<=0)return"";const n=Math.floor(r/(1e3*60*60)),o=Math.floor(r%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let i=this.scheduledAt;!i.includes("Z")&&!i.match(/[+-]\d{2}:\d{2}$/)&&(i=i+"Z");const l=new Date(i),c=new Date(Date.now()-300*1e3);a=l<c}let r="UPCOMING",n=null;if(t?.time_remaining){const i=t.time_remaining;i==="Final"?(r="FINAL",n="Final"):i==="In Progress"?(r="IN_PROGRESS",n="In Progress"):(r="IN_PROGRESS",n=i)}else s&&a?(r="FINAL",n="Final"):(r="UPCOMING",n="Upcoming");const o=r==="UPCOMING"?this.getCountdownText():"";return{status:r,timeRemaining:n,countdown:o}}render(){const{status:t,timeRemaining:s,countdown:a}=this.getMatchStatus(),r=this.homeScore!==null&&this.awayScore!==null,n=this.scheduledAt?Ys.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=parseInt(this.homeScore),i=parseInt(this.awayScore),l=r&&t==="FINAL"&&o>i,c=r&&t==="FINAL"&&i>o;this.shadowRoot.innerHTML=`
      <style>
        ${De()}

        :host {
          display: block;
          width: 100%;
        }

        :host(:nth-child(even)) .match-row {
          background: rgba(255, 255, 255, 0.02);
        }

        .match-row {
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-family: 'Monaco', 'Courier New', monospace;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          border-bottom: none;
        }

        .match-row--final {
          opacity: 0.6;
        }

        .match-row--live {
          color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
        }

        /* Sport indicator */
        .sport-indicator {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--status-locked-text, #F7C60D);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.85rem;
          min-width: 40px;
        }

        .sport-indicator bma-sport-icon {
          flex-shrink: 0;
        }

        /* Bullet separator */
        .bullet {
          color: rgba(255, 255, 255, 0.3);
        }

        /* Teams and scores */
        .match-content {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .team-name {
          color: inherit;
        }

        .score {
          font-weight: 700;
          color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
        }

        .winner {
          color: var(--status-upcoming-text, #00E676);
        }

        .loser {
          opacity: 0.6;
        }

        /* Status */
        .status {
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.85rem;
          text-transform: uppercase;
        }

        .status--live {
          color: var(--status-upcoming-text, #00E676);
          font-weight: 600;
        }

        .status--upcoming {
          color: var(--status-locked-text, #F7C60D);
        }

        .countdown-badge {
          display: inline-block;
          background: rgba(247, 198, 13, 0.15);
          color: var(--status-locked-text, #F7C60D);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: var(--badge-radius, 6px);
          margin-left: 6px;
          letter-spacing: 0.02em;
        }

        .match-details {
          padding: 8px 16px 12px;
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .detail-row {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 4px;
        }

        /* Light theme overrides */
        :host([data-sync-theme='light']) .match-row {
          color: rgba(0, 0, 0, 0.9);
          border-bottom-color: rgba(0, 0, 0, 0.1);
        }

        :host([data-sync-theme='light']) .sport-indicator {
          color: #d4a800;
        }

        :host([data-sync-theme='light']) .bullet {
          color: rgba(0, 0, 0, 0.3);
        }

        :host([data-sync-theme='light']) .score {
          color: #000000;
        }

        :host([data-sync-theme='light']) .status {
          color: rgba(0, 0, 0, 0.5);
        }

        :host([data-sync-theme='light']) .status--live {
          color: #00A352;
        }

        :host([data-sync-theme='light']) .status--upcoming {
          color: #B28F09;
        }

        :host([data-sync-theme='light']) .detail-row {
          color: rgba(0, 0, 0, 0.6);
        }

        /* Mobile responsive - fluid scaling */
        .match-row {
          padding: clamp(10px, 3vw, 12px) clamp(12px, 4vw, 16px);
          font-size: clamp(0.8rem, 2.5vw, 0.9rem);
        }

        .sport-indicator {
          font-size: clamp(0.65rem, 2vw, 0.75rem);
          min-width: clamp(32px, 10vw, 40px);
        }

        .detail-row {
          font-size: clamp(0.7rem, 2vw, 0.8rem);
        }

        /* Portrait/Mobile - Stack layout vertically */
        @media (orientation: portrait), (max-width: 768px) {
          .match-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 6px;
            padding: 10px 12px;
            font-size: 0.8rem;
          }

          .sport-indicator {
            font-size: 0.7rem;
            min-width: auto;
          }

          .match-content {
            width: 100%;
            flex-wrap: wrap;
            gap: 6px;
          }

          .status {
            font-size: 0.75rem;
            align-self: flex-end;
          }

          .bullet {
            display: block;
            width: 100%;
            height: 0;
            visibility: hidden;
          }

          .detail-row {
            font-size: 0.7rem;
          }
        }
      </style>

      <div class="match-row ${t==="FINAL"?"match-row--final":""} ${t==="IN_PROGRESS"?"match-row--live":""}" data-sync-theme="${this.theme}">
        <span class="sport-indicator">${this.sportId?`<bma-sport-icon sport="${this.sportId}" data-sport-group="${this.sportGroup}" style="width: 18px; height: 18px;"></bma-sport-icon>`:""}${this.getSportAbbr()}</span>
        <span class="bullet">•</span>
        <div class="match-content">
          ${r?`
            <span class="team-name ${l?"winner":c?"loser":""}">${this.homeTeam}</span>
            <span class="score ${l?"winner":c?"loser":""}">${this.homeScore}</span>
            <span class="bullet">-</span>
            <span class="team-name ${c?"winner":l?"loser":""}">${this.awayTeam}</span>
            <span class="score ${c?"winner":l?"loser":""}">${this.awayScore}</span>
          `:`
            <span class="team-name">${this.homeTeam}</span>
            <span>vs</span>
            <span class="team-name">${this.awayTeam}</span>
          `}
        </div>
        <span class="bullet">•</span>
        <span class="status ${t==="IN_PROGRESS"?"status--live":""} ${t==="UPCOMING"?"status--upcoming":""}">
          ${s||t}${a?`<span class="countdown-badge">${a}</span>`:""}
        </span>
      </div>
      <div class="match-details">
        <div class="detail-row">Scheduled: ${n}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
      </div>
    `}}customElements.define("bma-match-status",bg);class ds extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=ke.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){s!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){ds.currentlyExpanded&&ds.currentlyExpanded!==this&&ds.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),s.classList.add("expanded"),ds.currentlyExpanded=this):(t.classList.remove("open"),s.classList.remove("expanded"),ds.currentlyExpanded===this&&(ds.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),s&&s.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",s=>{s.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let s=0,a=0,r=0,n=0,o=0;return t.forEach(i=>{const l=i.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?s++:a++:(r++,n+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:s,losses:a,pending:r,total:s+a+r,pendingStakes:n,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches,a=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const r=t.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(a)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(r.length===0){if(!a){const l=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);if(l>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${l} pending bet${l!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const n={};s.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(n[c]=l)});const o={};r.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=n[c];if(d){o[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=Ve.find(f=>f.key===u);o[c].sportKey=p?.group||"default"}o[c].bets.push(l)});let i="";if(Object.keys(o).forEach(l=>{const c=o[l],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;i+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const b=f.bet||[];if(b.length===0)return;const v=b[0];Object.keys(v).filter(m=>m!=="short_title").forEach(m=>{const h=v[m];if(!h||typeof h!="object")return;const _=(h.type||"").toUpperCase(),S=parseFloat(h.stake||h.wager||0).toFixed(2),g=h.odds||"-",w=g>0?`+${g}`:`${g}`,x=parseFloat(h.payout||0).toFixed(2),T=h.reconciled===!0;let E="pending",P="Pending";T&&Number(x)>0?(E="won",P="Won"):T&&Number(x)===0?(E="lost",P="Lost"):T&&(E="reconciled",P="Settled"),i+=`<div class="bet-item bet-item--${E}">
                        <div class="bet-item__header">
                            <span class="bet-item__team">${m}</span>
                            <span class="bet-status-badge ${E}">${P}</span>
                        </div>
                        <div class="bet-item__detail">
                            <span>${_}</span>
                            <span>Stake: $${S}</span>
                            <span>Odds: ${w}</span>
                            <span class="${E==="won"?"payout-win":E==="lost"?"payout-loss":""}">Payout: $${x}</span>
                        </div>
                    </div>`})})}),!a){const l=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);l>0&&(i+=`<p class="hidden-bets-note">+ ${l} pending bet${l!==1?"s":""} hidden until settled</p>`)}return i}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",s=this.unqualified?"leaderboard-card--unqualified":"",a=parseFloat(this.startingDollars||0),r=this.combinedBetslips;let n=0,o=0,i=0;r.forEach(v=>{const y=v.bet||[];if(y.length===0)return;const m=y[0];Object.keys(m).filter(h=>h!=="short_title").forEach(h=>{const _=m[h];if(!_||typeof _!="object")return;const S=parseFloat(_.stake||0),g=parseFloat(_.payout||0);n+=S,_.reconciled===!0?i+=g:o+=S})});const l=Math.max(0,a-n),c=a-n+o+i,d=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",u=c-a,p=u>=0?"+":"",f=u>0?"profit-up":u<0?"profit-down":"profit-even",b=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${De()}
                ${bs()}

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

                .leaderboard-card {
                    background: rgba(46, 139, 87, 0.12);
                    border: none;
                    box-shadow: inset 0 0 0 1px rgba(46, 139, 87, 0.25);
                    border-radius: var(--card-radius, var(--radius-lg, 12px));
                    padding: 1rem 1rem 0 1rem;
                    user-select: none;
                    transition: box-shadow 0.2s ease;
                }

                .leaderboard-card:hover {
                    box-shadow: inset 0 0 0 1px rgba(46, 139, 87, 0.45);
                }

                .leaderboard-card--current-user {
                    border-left: 3px solid var(--status-locked-text, #FFD700);
                }

                .leaderboard-card--unqualified {
                    background: rgba(255, 255, 255, 0.02);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                    opacity: 0.7;
                }

                .leaderboard-card--unqualified:hover {
                    opacity: 1;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15);
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
                    background: rgba(46, 139, 87, 0.08);
                    border-top: 1px solid rgba(46, 139, 87, 0.18);
                    border-right: 1px solid rgba(46, 139, 87, 0.12);
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
                    border-top-color: rgba(46, 139, 87, 0.3);
                }

                .details-summary {
                    display: flex;
                    gap: 1.25rem;
                    margin-bottom: 1rem;
                    padding-bottom: 0.75rem;
                    border-bottom: 1px solid rgba(46, 139, 87, 0.15);
                    flex-wrap: wrap;
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
                    background: var(--surface-brand-muted, rgba(46, 139, 87, 0.1));
                    border-radius: var(--progress-radius, var(--radius-sm, 4px));
                }

                .bets-scroll-container::-webkit-scrollbar-thumb {
                    background: rgba(46, 139, 87, 0.35);
                    border-radius: var(--progress-radius, var(--radius-sm, 4px));
                }

                .bets-scroll-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(46, 139, 87, 0.55);
                }

                .details-summary__stat {
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.7);
                }

                .details-summary__stat strong {
                    color: var(--status-locked-text, #FFD700);
                }


                /* Match Group Header Band */
                .match-group-header {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    padding: 0.75rem 1rem;
                    margin-bottom: 0.5rem;
                    background: linear-gradient(135deg, rgba(46, 139, 87, 0.15) 0%, rgba(10, 10, 10, 0.6) 100%);
                    border-left: 3px solid var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    border-radius: var(--badge-radius, 6px);
                }

                .match-group-header:not(:first-child) {
                    margin-top: 1.5rem;
                }

                .match-title {
                    font-size: 0.875rem;
                    font-weight: 700;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    letter-spacing: 0.5px;
                    flex: 1;
                    min-width: 0;
                }

                .match-bet-count {
                    font-size: 0.72rem;
                    color: rgba(255, 215, 0, 0.6);
                    font-weight: 600;
                    white-space: nowrap;
                }

                .match-group-header bma-sport-icon {
                    flex-shrink: 0;
                }

                /* Bet Item Cards */
                .bet-item {
                    padding: 0.65rem 0.75rem;
                    margin-bottom: 0.5rem;
                    border-radius: var(--badge-radius, 6px);
                    background: rgba(0, 0, 0, 0.2);
                    border: none;
                    border-left: 3px solid rgba(255, 255, 255, 0.1);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.06);
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.75);
                }

                .bet-item--won { border-left-color: var(--status-upcoming-text, #00E676); }
                .bet-item--lost { border-left-color: var(--status-loss-text, #FF5252); }
                .bet-item--pending { border-left-color: var(--status-locked-text, #FFD700); }
                .bet-item--reconciled { border-left-color: #2E8B57; }

                .bet-item__header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 0.5rem;
                }

                .bet-item__team {
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.9);
                }

                .bet-item__detail {
                    display: flex;
                    gap: 0.75rem;
                    margin-top: 0.35rem;
                    flex-wrap: wrap;
                    font-size: 0.75rem;
                    color: rgba(255, 255, 255, 0.6);
                }

                .bet-status-badge {
                    display: inline-block;
                    padding: 0.1rem 0.4rem;
                    border-radius: var(--radius-sm, 4px);
                    font-size: 0.7rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .bet-status-badge.reconciled { background: rgba(46, 139, 87, 0.25); color: #2E8B57; }
                .bet-status-badge.pending { background: rgba(255, 215, 0, 0.2); color: var(--status-locked-text, #FFD700); }
                .bet-status-badge.won { background: rgba(46, 139, 87, 0.3); color: var(--status-upcoming-text, #00E676); }
                .bet-status-badge.lost { background: rgba(220, 20, 60, 0.2); color: var(--status-loss-text, #FF5252); }

                .payout-win {
                    color: var(--status-locked-text, #FFD700);
                    font-weight: 600;
                }

                .payout-loss {
                    color: var(--status-loss-text, #FF5252);
                    font-weight: 600;
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
                    text-align: center;
                    margin: 0.75rem 0 0.25rem;
                    padding: 0.5rem;
                    font-size: 0.72rem;
                    color: rgba(255, 255, 255, 0.45);
                    font-style: italic;
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

                    .details-summary__stat {
                        font-size: 0.72rem;
                    }

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

                    /* Bet item cards mobile */
                    .bet-item {
                        padding: 0.55rem 0.6rem;
                        margin-bottom: 0.4rem;
                        font-size: 0.72rem;
                    }

                    .bet-item__team {
                        font-size: 0.72rem;
                    }

                    .bet-item__detail {
                        font-size: 0.68rem;
                        gap: 0.5rem;
                    }

                    .bet-status-badge {
                        font-size: 0.6rem;
                    }

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
                        ${d}
                        <span class="leaderboard-card__username">${this.username}</span>
                        ${this.isCurrentUser?'<span class="you-badge">YOU</span>':""}
                        ${this.unqualified&&l>0?`<span class="unbet-badge">TD$ ${l.toFixed(0)} unbet</span>`:""}
                    </div>

                    <div class="leaderboard-card__balance">
                        <span class="dollars-amount">TD$ ${c.toFixed(2)}</span>
                    </div>

                    <span class="expand-icon"></span>
                </div>

                <div class="kpi-strip">
                    <div class="kpi-card">
                        <div class="kpi-card__label">Gain / Loss</div>
                        <div class="kpi-card__value ${f}">${p}TD$ ${Math.abs(u).toFixed(2)}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Bet Record</div>
                        <div class="kpi-card__value">${b.wins}W - ${b.losses}L</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">At Risk</div>
                        <div class="kpi-card__value ${b.pending>0?"kpi-card__value--risk":"kpi-card__value--none"}">${b.pending>0?"TD$ "+b.pendingStakes.toFixed(0):"TD$ 0"}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Max Win</div>
                        <div class="kpi-card__value ${b.pending>0?"kpi-card__value--max-win":"kpi-card__value--none"}">${b.pending>0?"TD$ "+b.pendingMaxPayout.toFixed(0):"TD$ 0"}</div>
                    </div>
                </div>

                <div class="leaderboard-card__details">
                    <div class="details-summary">
                        <div class="details-summary__stat">Total Bets: <strong>${this.totalBetslips}</strong></div>
                        <div class="details-summary__stat">Total Payout: <strong>$${parseFloat(this.totalPayout||0).toFixed(2)}</strong></div>
                    </div>

                    <div class="bets-scroll-container">
                        ${this.renderBetsTable()}
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-leaderboard-card",ds);class yu{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:a}=t.Bet,{home_team_id:r,home_team_score:n,away_team_id:o,away_team_score:i}=t.Match,l=s?.toUpperCase()||"",c=parseFloat(n)||0,d=parseFloat(i)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${r} (${c})`,away:`${o} (${d})`,scope:a}),l){case"MONEY":return this._evaluateMoneyline(a.team_id,r,o,c,d);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,r,o,c,d);case"TOTAL":return this._evaluateTotal(a.over,a.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,s,a,r,n){const o=t===s,i=t===a;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=r>n,c=n>r;if(r===n)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,s,a,r,n,o){const i=t===a,l=t===r;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let d=n,u=o;i?d=n+c:u=o+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const v=i&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${v?"WON":"LOST"}`),v}static _evaluateTotal(t,s,a,r){const n=a+r,o=t&&t!=="";if(!o&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:s);if(n===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=n>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${n}) - ${c?"WON":"LOST"}`)):(c=n<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${n}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:a,stake:r}=t.Bet,n=s?.toUpperCase()||"",o=parseFloat(a)||0,i=parseFloat(r)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(n){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",n),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,s){let a=0;return t>0?a=s*(t/100):t<0?a=s/(Math.abs(t)/100):a=0,s+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function cl(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Wo(e={},t={}){const s=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>s.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:cl(t[a])&&cl(e[a])&&Object.keys(t[a]).length>0&&Wo(e[a],t[a])})}const wu={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Nt(){const e=typeof document<"u"?document:{};return Wo(e,wu),e}const _g={document:wu,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function st(){const e=typeof window<"u"?window:{};return Wo(e,_g),e}function vg(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function yg(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function xu(e,t=0){return setTimeout(e,t)}function Ur(){return Date.now()}function wg(e){const t=st();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function xg(e,t="x"){const s=st();let a,r,n;const o=wg(e);return s.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(i=>i.replace(",",".")).join(", ")),n=new s.WebKitCSSMatrix(r==="none"?"":r)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=n.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?r=n.m41:a.length===16?r=parseFloat(a[12]):r=parseFloat(a[4])),t==="y"&&(s.WebKitCSSMatrix?r=n.m42:a.length===16?r=parseFloat(a[13]):r=parseFloat(a[5])),r||0}function Fa(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function Tg(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ot(...e){const t=Object(e[0]);for(let s=1;s<e.length;s+=1){const a=e[s];if(a!=null&&!Tg(a)){const r=Object.keys(Object(a)).filter(n=>n!=="__proto__"&&n!=="constructor"&&n!=="prototype");for(let n=0,o=r.length;n<o;n+=1){const i=r[n],l=Object.getOwnPropertyDescriptor(a,i);l!==void 0&&l.enumerable&&(Fa(t[i])&&Fa(a[i])?a[i].__swiper__?t[i]=a[i]:ot(t[i],a[i]):!Fa(t[i])&&Fa(a[i])?(t[i]={},a[i].__swiper__?t[i]=a[i]:ot(t[i],a[i])):t[i]=a[i])}}}return t}function Is(e,t,s){e.style.setProperty(t,s)}function Tu({swiper:e,targetPosition:t,side:s}){const a=st(),r=-e.translate;let n=null,o;const i=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const l=t>r?"next":"prev",c=(u,p)=>l==="next"&&u>=p||l==="prev"&&u<=p,d=()=>{o=new Date().getTime(),n===null&&(n=o);const u=Math.max(Math.min((o-n)/i,1),0),p=.5-Math.cos(u*Math.PI)/2;let f=r+p*(t-r);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[s]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:f})}),a.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=a.requestAnimationFrame(d)};d()}function Lt(e,t=""){const s=st(),a=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(r=>r.matches(t)):a}function Sg(e,t){const s=[t];for(;s.length>0;){const a=s.shift();if(e===a)return!0;s.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function Eg(e,t){const s=st();let a=t.contains(e);return!a&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=Sg(e,t))),a}function qr(e){try{console.warn(e);return}catch{}}function Gr(e,t=[]){const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:vg(t)),s}function kg(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function Ag(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function us(e,t){return st().getComputedStyle(e,null).getPropertyValue(t)}function Vr(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function Su(e,t){const s=[];let a=e.parentElement;for(;a;)t?a.matches(t)&&s.push(a):s.push(a),a=a.parentElement;return s}function xo(e,t,s){const a=st();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Ht(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function dl(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:s=>s}).createHTML(t):e.innerHTML=t}let Bn;function Pg(){const e=st(),t=Nt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Eu(){return Bn||(Bn=Pg()),Bn}let Fn;function Cg({userAgent:e}={}){const t=Eu(),s=st(),a=s.navigator.platform,r=e||s.navigator.userAgent,n={ios:!1,android:!1},o=s.screen.width,i=s.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=r.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=a==="Win32";let f=a==="MacIntel";const b=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&b.indexOf(`${o}x${i}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!p&&(n.os="android",n.android=!0),(c||u||d)&&(n.os="ios",n.ios=!0),n}function ku(e={}){return Fn||(Fn=Cg(e)),Fn}let zn;function Og(){const e=st(),t=ku();let s=!1;function a(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(a()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));s=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),n=a(),o=n||r&&t.ios;return{isSafari:s||n,needPerspectiveFix:s,need3dFix:o,isWebView:r}}function Au(){return zn||(zn=Og()),zn}function $g({swiper:e,on:t,emit:s}){const a=st();let r=null,n=null;const o=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},i=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(d=>{n=a.requestAnimationFrame(()=>{const{width:u,height:p}=e;let f=u,b=p;d.forEach(({contentBoxSize:v,contentRect:y,target:m})=>{m&&m!==e.el||(f=y?y.width:(v[0]||v).inlineSize,b=y?y.height:(v[0]||v).blockSize)}),(f!==u||b!==p)&&o()})}),r.observe(e.el))},l=()=>{n&&a.cancelAnimationFrame(n),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},c=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof a.ResizeObserver<"u"){i();return}a.addEventListener("resize",o),a.addEventListener("orientationchange",c)}),t("destroy",()=>{l(),a.removeEventListener("resize",o),a.removeEventListener("orientationchange",c)})}function Mg({swiper:e,extendParams:t,on:s,emit:a}){const r=[],n=st(),o=(c,d={})=>{const u=n.MutationObserver||n.WebkitMutationObserver,p=new u(f=>{if(e.__preventObserver__)return;if(f.length===1){a("observerUpdate",f[0]);return}const b=function(){a("observerUpdate",f[0])};n.requestAnimationFrame?n.requestAnimationFrame(b):n.setTimeout(b,0)});p.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),r.push(p)},i=()=>{if(e.params.observer){if(e.params.observeParents){const c=Su(e.hostEl);for(let d=0;d<c.length;d+=1)o(c[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},l=()=>{r.forEach(c=>{c.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",i),s("destroy",l)}var Rg={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const r=s?"unshift":"push";return e.split(" ").forEach(n=>{a.eventsListeners[n]||(a.eventsListeners[n]=[]),a.eventsListeners[n][r](t)}),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function r(...n){a.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(a,n)}return r.__emitterProxy=t,a.on(e,r,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].forEach((r,n)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&s.eventsListeners[a].splice(n,1)})}),s},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let s,a,r;return typeof e[0]=="string"||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),r=t):(s=e[0].events,a=e[0].data,r=e[0].context||t),a.unshift(r),(Array.isArray(s)?s:s.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(i=>{i.apply(r,[o,...a])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(i=>{i.apply(r,a)})}),t}};function Lg(){const e=this;let t,s;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=a.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(us(a,"padding-left")||0,10)-parseInt(us(a,"padding-right")||0,10),s=s-parseInt(us(a,"padding-top")||0,10)-parseInt(us(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function Dg(){const e=this;function t(P,$){return parseFloat(P.getPropertyValue(e.getDirectionLabel($))||0)}const s=e.params,{wrapperEl:a,slidesEl:r,rtlTranslate:n,wrongRTL:o}=e,i=e.virtual&&s.virtual.enabled,l=i?e.virtual.slides.length:e.slides.length,c=Lt(r,`.${e.params.slideClass}, swiper-slide`),d=i?e.virtual.slides.length:c.length;let u=[];const p=[],f=[];let b=s.slidesOffsetBefore;typeof b=="function"&&(b=s.slidesOffsetBefore.call(e));let v=s.slidesOffsetAfter;typeof v=="function"&&(v=s.slidesOffsetAfter.call(e));const y=e.snapGrid.length,m=e.slidesGrid.length,h=e.size-b-v;let _=s.spaceBetween,S=-b,g=0,w=0;if(typeof h>"u")return;typeof _=="string"&&_.indexOf("%")>=0?_=parseFloat(_.replace("%",""))/100*h:typeof _=="string"&&(_=parseFloat(_)),e.virtualSize=-_-b-v,c.forEach(P=>{n?P.style.marginLeft="":P.style.marginRight="",P.style.marginBottom="",P.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(Is(a,"--swiper-centered-offset-before",""),Is(a,"--swiper-centered-offset-after","")),s.cssMode&&(Is(a,"--swiper-slides-offset-before",`${b}px`),Is(a,"--swiper-slides-offset-after",`${v}px`));const x=s.grid&&s.grid.rows>1&&e.grid;x?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let T;const E=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(P=>typeof s.breakpoints[P].slidesPerView<"u").length>0;for(let P=0;P<d;P+=1){T=0;const $=c[P];if(!($&&(x&&e.grid.updateSlide(P,$,c),us($,"display")==="none"))){if(i&&s.slidesPerView==="auto")s.virtual.slidesPerViewAutoSlideSize&&(T=s.virtual.slidesPerViewAutoSlideSize),T&&$&&(s.roundLengths&&(T=Math.floor(T)),$.style[e.getDirectionLabel("width")]=`${T}px`);else if(s.slidesPerView==="auto"){E&&($.style[e.getDirectionLabel("width")]="");const O=getComputedStyle($),L=$.style.transform,G=$.style.webkitTransform;if(L&&($.style.transform="none"),G&&($.style.webkitTransform="none"),s.roundLengths)T=e.isHorizontal()?xo($,"width"):xo($,"height");else{const X=t(O,"width"),ae=t(O,"padding-left"),K=t(O,"padding-right"),V=t(O,"margin-left"),Q=t(O,"margin-right"),U=O.getPropertyValue("box-sizing");if(U&&U==="border-box")T=X+V+Q;else{const{clientWidth:R,offsetWidth:j}=$;T=X+ae+K+V+Q+(j-R)}}L&&($.style.transform=L),G&&($.style.webkitTransform=G),s.roundLengths&&(T=Math.floor(T))}else T=(h-(s.slidesPerView-1)*_)/s.slidesPerView,s.roundLengths&&(T=Math.floor(T)),$&&($.style[e.getDirectionLabel("width")]=`${T}px`);$&&($.swiperSlideSize=T),f.push(T),s.centeredSlides?(S=S+T/2+g/2+_,g===0&&P!==0&&(S=S-h/2-_),P===0&&(S=S-h/2-_),Math.abs(S)<1/1e3&&(S=0),s.roundLengths&&(S=Math.floor(S)),w%s.slidesPerGroup===0&&u.push(S),p.push(S)):(s.roundLengths&&(S=Math.floor(S)),(w-Math.min(e.params.slidesPerGroupSkip,w))%e.params.slidesPerGroup===0&&u.push(S),p.push(S),S=S+T+_),e.virtualSize+=T+_,g=T,w+=1}}if(e.virtualSize=Math.max(e.virtualSize,h)+v,n&&o&&(s.effect==="slide"||s.effect==="coverflow")&&(a.style.width=`${e.virtualSize+_}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+_}px`),x&&e.grid.updateWrapperSize(T,u),!s.centeredSlides){const P=s.slidesPerView!=="auto"&&s.slidesPerView%1!==0,$=s.snapToSlideEdge&&!s.loop&&(s.slidesPerView==="auto"||P);let O=u.length;if($){let G;if(s.slidesPerView==="auto"){G=1;let X=0;for(let ae=f.length-1;ae>=0&&(X+=f[ae]+(ae<f.length-1?_:0),X<=h);ae-=1)G=f.length-ae}else G=Math.floor(s.slidesPerView);O=Math.max(d-G,0)}const L=[];for(let G=0;G<u.length;G+=1){let X=u[G];s.roundLengths&&(X=Math.floor(X)),$?G<=O&&L.push(X):u[G]<=e.virtualSize-h&&L.push(X)}u=L,Math.floor(e.virtualSize-h)-Math.floor(u[u.length-1])>1&&($||u.push(e.virtualSize-h))}if(i&&s.loop){const P=f[0]+_;if(s.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),O=P*s.slidesPerGroup;for(let L=0;L<$;L+=1)u.push(u[u.length-1]+O)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)s.slidesPerGroup===1&&u.push(u[u.length-1]+P),p.push(p[p.length-1]+P),e.virtualSize+=P}if(u.length===0&&(u=[0]),_!==0){const P=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");c.filter(($,O)=>!s.cssMode||s.loop?!0:O!==c.length-1).forEach($=>{$.style[P]=`${_}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let P=0;f.forEach(O=>{P+=O+(_||0)}),P-=_;const $=P>h?P-h:0;u=u.map(O=>O<=0?-b:O>$?$+v:O)}if(s.centerInsufficientSlides){let P=0;if(f.forEach($=>{P+=$+(_||0)}),P-=_,P<h){const $=(h-P)/2;u.forEach((O,L)=>{u[L]=O-$}),p.forEach((O,L)=>{p[L]=O+$})}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:p,slidesSizesGrid:f}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){Is(a,"--swiper-centered-offset-before",`${-u[0]}px`),Is(a,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const P=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(O=>O+P),e.slidesGrid=e.slidesGrid.map(O=>O+$)}if(d!==l&&e.emit("slidesLengthChange"),u.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==m&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!i&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const P=`${s.containerModifierClass}backface-hidden`,$=e.el.classList.contains(P);d<=s.maxBackfaceHiddenSlides?$||e.el.classList.add(P):$&&e.el.classList.remove(P)}}function Ng(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let r=0,n;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=i=>a?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{s.push(i)});else for(n=0;n<Math.ceil(t.params.slidesPerView);n+=1){const i=t.activeIndex+n;if(i>t.slides.length&&!a)break;s.push(o(i))}else s.push(o(t.activeIndex));for(n=0;n<s.length;n+=1)if(typeof s[n]<"u"){const i=s[n].offsetHeight;r=i>r?i:r}(r||r===0)&&(t.wrapperEl.style.height=`${r}px`)}function Ig(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()}const ul=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function Bg(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:r,snapGrid:n}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;r&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=s.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<a.length;l+=1){const c=a[l];let d=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const u=(o+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),p=(o-n[0]+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),f=-(o-d),b=f+t.slidesSizesGrid[l],v=f>=0&&f<=t.size-t.slidesSizesGrid[l],y=f>=0&&f<t.size-1||b>1&&b<=t.size||f<=0&&b>=t.size;y&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),ul(c,y,s.slideVisibleClass),ul(c,v,s.slideFullyVisibleClass),c.progress=r?-u:u,c.originalProgress=r?-p:p}}function Fg(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:n,isEnd:o,progressLoop:i}=t;const l=n,c=o;if(a===0)r=0,n=!0,o=!0;else{r=(e-t.minTranslate())/a;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;n=d||r<=0,o=u||r>=1,d&&(r=0),u&&(r=1)}if(s.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],b=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=p?i=(v-p)/b:i=(v+b-f)/b,i>1&&(i-=1)}Object.assign(t,{progress:r,progressLoop:i,isBeginning:n,isEnd:o}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),n&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!n||c&&!o)&&t.emit("fromEdge"),t.emit("progress",r)}const Hn=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function zg(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:r}=e,n=e.virtual&&s.virtual.enabled,o=e.grid&&s.grid&&s.grid.rows>1,i=u=>Lt(a,`.${s.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(n)if(s.loop){let u=r-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${u}"]`)}else l=i(`[data-swiper-slide-index="${r}"]`);else o?(l=t.find(u=>u.column===r),d=t.find(u=>u.column===r+1),c=t.find(u=>u.column===r-1)):l=t[r];l&&(o||(d=Ag(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!d&&(d=t[0]),c=kg(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{Hn(u,u===l,s.slideActiveClass),Hn(u,u===d,s.slideNextClass),Hn(u,u===c,s.slidePrevClass)}),e.emitSlidesClasses()}const Or=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(s());if(a){let r=a.querySelector(`.${e.params.lazyPreloaderClass}`);!r&&e.isElement&&(a.shadowRoot?r=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(r=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),r&&!r.lazyPreloaderManaged&&r.remove())})),r&&!r.lazyPreloaderManaged&&r.remove()}},jn=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},To=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),r=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=r,i=[o-t];i.push(...Array.from({length:t}).map((l,c)=>o+a+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&jn(e,c)});return}const n=r+a-1;if(e.params.rewind||e.params.loop)for(let o=r-t;o<=n+t;o+=1){const i=(o%s+s)%s;(i<r||i>n)&&jn(e,i)}else for(let o=Math.max(r-t,0);o<=Math.min(n+t,s-1);o+=1)o!==r&&(o>n||o<r)&&jn(e,o)};function Hg(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let r;for(let n=0;n<t.length;n+=1)typeof t[n+1]<"u"?a>=t[n]&&a<t[n+1]-(t[n+1]-t[n])/2?r=n:a>=t[n]&&a<t[n+1]&&(r=n+1):a>=t[n]&&(r=n);return s.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function jg(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:r,activeIndex:n,realIndex:o,snapIndex:i}=t;let l=e,c;const d=f=>{let b=f-t.virtual.slidesBefore;return b<0&&(b=t.virtual.slides.length+b),b>=t.virtual.slides.length&&(b-=t.virtual.slides.length),b};if(typeof l>"u"&&(l=Hg(t)),a.indexOf(s)>=0)c=a.indexOf(s);else{const f=Math.min(r.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/r.slidesPerGroup)}if(c>=a.length&&(c=a.length-1),l===n&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===n&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&r.grid&&r.grid.rows>1;let p;if(t.virtual&&r.virtual.enabled)r.loop?p=d(l):p=l;else if(u){const f=t.slides.find(v=>v.column===l);let b=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(f),0)),p=Math.floor(b/r.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:n,activeIndex:l}),t.initialized&&To(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function Ug(e,t){const s=this,a=s.params;let r=e.closest(`.${a.slideClass}, swiper-slide`);!r&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!r&&i.matches&&i.matches(`.${a.slideClass}, swiper-slide`)&&(r=i)});let n=!1,o;if(r){for(let i=0;i<s.slides.length;i+=1)if(s.slides[i]===r){n=!0,o=i;break}}if(r&&n)s.clickedSlide=r,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=o;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}a.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var qg={updateSize:Lg,updateSlides:Dg,updateAutoHeight:Ng,updateSlidesOffset:Ig,updateSlidesProgress:Bg,updateProgress:Fg,updateSlidesClasses:zg,updateActiveIndex:jg,updateClickedSlide:Ug};function Gg(e=this.isHorizontal()?"x":"y"){const t=this,{params:s,rtlTranslate:a,translate:r,wrapperEl:n}=t;if(s.virtualTranslate)return a?-r:r;if(s.cssMode)return r;let o=xg(n,e);return o+=t.cssOverflowAdjustment(),a&&(o=-o),o||0}function Vg(e,t){const s=this,{rtlTranslate:a,params:r,wrapperEl:n,progress:o}=s;let i=0,l=0;const c=0;s.isHorizontal()?i=a?-e:e:l=e,r.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?i:l,r.cssMode?n[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-i:-l:r.virtualTranslate||(s.isHorizontal()?i-=s.cssOverflowAdjustment():l-=s.cssOverflowAdjustment(),n.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let d;const u=s.maxTranslate()-s.minTranslate();u===0?d=0:d=(e-s.minTranslate())/u,d!==o&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function Kg(){return-this.snapGrid[0]}function Yg(){return-this.snapGrid[this.snapGrid.length-1]}function Wg(e=0,t=this.params.speed,s=!0,a=!0,r){const n=this,{params:o,wrapperEl:i}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const l=n.minTranslate(),c=n.maxTranslate();let d;if(a&&e>l?d=l:a&&e<c?d=c:d=e,n.updateProgress(d),o.cssMode){const u=n.isHorizontal();if(t===0)i[u?"scrollLeft":"scrollTop"]=-d;else{if(!n.support.smoothScroll)return Tu({swiper:n,targetPosition:-d,side:u?"left":"top"}),!0;i.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(n.setTransition(0),n.setTranslate(d),s&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),s&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(p){!n||n.destroyed||p.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,s&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Jg={getTranslate:Gg,setTranslate:Vg,minTranslate:Kg,maxTranslate:Yg,translateTo:Wg};function Xg(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function Pu({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:r,previousIndex:n}=e;let o=s;o||(r>n?o="next":r<n?o="prev":o="reset"),e.emit(`transition${a}`),t&&o==="reset"?e.emit(`slideResetTransition${a}`):t&&r!==n&&(e.emit(`slideChangeTransition${a}`),o==="next"?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`))}function Qg(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),Pu({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function Zg(e=!0,t){const s=this,{params:a}=s;s.animating=!1,!a.cssMode&&(s.setTransition(0),Pu({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var eb={setTransition:Xg,transitionStart:Qg,transitionEnd:Zg};function tb(e=0,t,s=!0,a,r){typeof e=="string"&&(e=parseInt(e,10));const n=this;let o=e;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:b}=n;if(!b&&!a&&!r||n.destroyed||n.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=n.params.speed);const v=Math.min(n.params.slidesPerGroupSkip,o);let y=v+Math.floor((o-v)/n.params.slidesPerGroup);y>=l.length&&(y=l.length-1);const m=-l[y];if(i.normalizeSlideIndex)for(let x=0;x<c.length;x+=1){const T=-Math.floor(m*100),E=Math.floor(c[x]*100),P=Math.floor(c[x+1]*100);typeof c[x+1]<"u"?T>=E&&T<P-(P-E)/2?o=x:T>=E&&T<P&&(o=x+1):T>=E&&(o=x)}if(n.initialized&&o!==u&&(!n.allowSlideNext&&(p?m>n.translate&&m>n.minTranslate():m<n.translate&&m<n.minTranslate())||!n.allowSlidePrev&&m>n.translate&&m>n.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&s&&n.emit("beforeSlideChangeStart"),n.updateProgress(m);let h;o>u?h="next":o<u?h="prev":h="reset";const _=n.virtual&&n.params.virtual.enabled;if(!(_&&r)&&(p&&-m===n.translate||!p&&m===n.translate))return n.updateActiveIndex(o),i.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),i.effect!=="slide"&&n.setTranslate(m),h!=="reset"&&(n.transitionStart(s,h),n.transitionEnd(s,h)),!1;if(i.cssMode){const x=n.isHorizontal(),T=p?m:-m;if(t===0)_&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),_&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[x?"scrollLeft":"scrollTop"]=T})):f[x?"scrollLeft":"scrollTop"]=T,_&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return Tu({swiper:n,targetPosition:T,side:x?"left":"top"}),!0;f.scrollTo({[x?"left":"top"]:T,behavior:"smooth"})}return!0}const w=Au().isSafari;return _&&!r&&w&&n.isElement&&n.virtual.update(!1,!1,o),n.setTransition(t),n.setTranslate(m),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,a),n.transitionStart(s,h),t===0?n.transitionEnd(s,h):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(T){!n||n.destroyed||T.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(s,h))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function sb(e=0,t,s=!0,a){typeof e=="string"&&(e=parseInt(e,10));const r=this;if(r.destroyed)return;typeof t>"u"&&(t=r.params.speed);const n=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=e;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let i;if(n){const v=o*r.params.grid.rows;i=r.slides.find(y=>y.getAttribute("data-swiper-slide-index")*1===v).column}else i=r.getSlideIndexByData(o);const l=n?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:u}=r.params,p=c||!!d||!!u;let f=r.params.slidesPerView;f==="auto"?f=r.slidesPerViewDynamic():(f=Math.ceil(parseFloat(r.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let b=l-i<f;if(p&&(b=b||i<Math.ceil(f/2)),a&&p&&r.params.slidesPerView!=="auto"&&!n&&(b=!1),b){const v=p?i<r.activeIndex?"prev":"next":i-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:v,slideTo:!0,activeSlideIndex:v==="next"?i+1:i-l+1,slideRealIndex:v==="next"?r.realIndex:void 0})}if(n){const v=o*r.params.grid.rows;o=r.slides.find(y=>y.getAttribute("data-swiper-slide-index")*1===v).column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,t,s,a)}),r}function ab(e,t=!0,s){const a=this,{enabled:r,params:n,animating:o}=a;if(!r||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let i=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(i=Math.max(a.slidesPerViewDynamic("current",!0),1));const l=a.activeIndex<n.slidesPerGroupSkip?1:i,c=a.virtual&&n.virtual.enabled;if(n.loop){if(o&&!c&&n.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+l,e,t,s)}),!0}return n.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+l,e,t,s)}function rb(e,t=!0,s){const a=this,{params:r,snapGrid:n,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=a;if(!l||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const d=a.virtual&&r.virtual.enabled;if(r.loop){if(c&&!d&&r.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const u=i?a.translate:-a.translate;function p(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const f=p(u),b=n.map(h=>p(h)),v=r.freeMode&&r.freeMode.enabled;let y=n[b.indexOf(f)-1];if(typeof y>"u"&&(r.cssMode||v)){let h;n.forEach((_,S)=>{f>=_&&(h=S)}),typeof h<"u"&&(y=v?n[h]:n[h>0?h-1:h])}let m=0;if(typeof y<"u"&&(m=o.indexOf(y),m<0&&(m=a.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(m=m-a.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),r.rewind&&a.isBeginning){const h=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(h,e,t,s)}else if(r.loop&&a.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{a.slideTo(m,e,t,s)}),!0;return a.slideTo(m,e,t,s)}function nb(e,t=!0,s){const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,s)}function ob(e,t=!0,s,a=.5){const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);let n=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,n),i=o+Math.floor((n-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[i]){const c=r.snapGrid[i],d=r.snapGrid[i+1];l-c>(d-c)*a&&(n+=r.params.slidesPerGroup)}else{const c=r.snapGrid[i-1],d=r.snapGrid[i];l-c<=(d-c)*a&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,e,t,s)}function ib(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let r=e.getSlideIndexWhenGrid(e.clickedIndex),n;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;n=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(n):r>(i?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),r=e.getSlideIndex(Lt(s,`${o}[data-swiper-slide-index="${n}"]`)[0]),xu(()=>{e.slideTo(r)})):e.slideTo(r)}else e.slideTo(r)}var lb={slideTo:tb,slideToLoop:sb,slideNext:ab,slidePrev:rb,slideReset:nb,slideToClosest:ob,slideToClickedSlide:ib};function cb(e,t){const s=this,{params:a,slidesEl:r}=s;if(!a.loop||s.virtual&&s.params.virtual.enabled)return;const n=()=>{Lt(r,`.${a.slideClass}, swiper-slide`).forEach((b,v)=>{b.setAttribute("data-swiper-slide-index",v)})},o=()=>{const f=Lt(r,`.${a.slideBlankClass}`);f.forEach(b=>{b.remove()}),f.length>0&&(s.recalcSlides(),s.updateSlides())},i=s.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||i)&&o();const l=a.slidesPerGroup*(i?a.grid.rows:1),c=s.slides.length%l!==0,d=i&&s.slides.length%a.grid.rows!==0,u=f=>{for(let b=0;b<f;b+=1){const v=s.isElement?Gr("swiper-slide",[a.slideBlankClass]):Gr("div",[a.slideClass,a.slideBlankClass]);s.slidesEl.append(v)}};if(c){if(a.loopAddBlankSlides){const f=l-s.slides.length%l;u(f),s.recalcSlides(),s.updateSlides()}else qr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(d){if(a.loopAddBlankSlides){const f=a.grid.rows-s.slides.length%a.grid.rows;u(f),s.recalcSlides(),s.updateSlides()}else qr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();const p=a.centeredSlides||!!a.slidesOffsetBefore||!!a.slidesOffsetAfter;s.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function db({slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:a,activeSlideIndex:r,initial:n,byController:o,byMousewheel:i}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:p,params:f}=l,{centeredSlides:b,slidesOffsetBefore:v,slidesOffsetAfter:y,initialSlide:m}=f,h=b||!!v||!!y;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){t&&(!h&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):h&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}let _=f.slidesPerView;_==="auto"?_=l.slidesPerViewDynamic():(_=Math.ceil(parseFloat(f.slidesPerView,10)),h&&_%2===0&&(_=_+1));const S=f.slidesPerGroupAuto?_:f.slidesPerGroup;let g=h?Math.max(S,Math.ceil(_/2)):S;g%S!==0&&(g+=S-g%S),g+=f.loopAdditionalSlides,l.loopedSlides=g;const w=l.grid&&f.grid&&f.grid.rows>1;c.length<_+g||l.params.effect==="cards"&&c.length<_+g*2?qr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):w&&f.grid.fill==="row"&&qr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const x=[],T=[],E=w?Math.ceil(c.length/f.grid.rows):c.length,P=n&&E-m<_&&!h;let $=P?m:l.activeIndex;typeof r>"u"?r=l.getSlideIndex(c.find(V=>V.classList.contains(f.slideActiveClass))):$=r;const O=s==="next"||!s,L=s==="prev"||!s;let G=0,X=0;const K=(w?c[r].column:r)+(h&&typeof a>"u"?-_/2+.5:0);if(K<g){G=Math.max(g-K,S);for(let V=0;V<g-K;V+=1){const Q=V-Math.floor(V/E)*E;if(w){const U=E-Q-1;for(let R=c.length-1;R>=0;R-=1)c[R].column===U&&x.push(R)}else x.push(E-Q-1)}}else if(K+_>E-g){X=Math.max(K-(E-g*2),S),P&&(X=Math.max(X,_-E+m+1));for(let V=0;V<X;V+=1){const Q=V-Math.floor(V/E)*E;w?c.forEach((U,R)=>{U.column===Q&&T.push(R)}):T.push(Q)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<_+g*2&&(T.includes(r)&&T.splice(T.indexOf(r),1),x.includes(r)&&x.splice(x.indexOf(r),1)),L&&x.forEach(V=>{c[V].swiperLoopMoveDOM=!0,p.prepend(c[V]),c[V].swiperLoopMoveDOM=!1}),O&&T.forEach(V=>{c[V].swiperLoopMoveDOM=!0,p.append(c[V]),c[V].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():w&&(x.length>0&&L||T.length>0&&O)&&l.slides.forEach((V,Q)=>{l.grid.updateSlide(Q,V,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),t){if(x.length>0&&L){if(typeof e>"u"){const V=l.slidesGrid[$],U=l.slidesGrid[$+G]-V;i?l.setTranslate(l.translate-U):(l.slideTo($+Math.ceil(G),0,!1,!0),a&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else if(a){const V=w?x.length/f.grid.rows:x.length;l.slideTo(l.activeIndex+V,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(T.length>0&&O)if(typeof e>"u"){const V=l.slidesGrid[$],U=l.slidesGrid[$-X]-V;i?l.setTranslate(l.translate-U):(l.slideTo($-X,0,!1,!0),a&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-U,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-U))}else{const V=w?T.length/f.grid.rows:T.length;l.slideTo(l.activeIndex-V,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!o){const V={slideRealIndex:e,direction:s,setTranslate:a,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(Q=>{!Q.destroyed&&Q.params.loop&&Q.loopFix({...V,slideTo:Q.params.slidesPerView===f.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...V,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}l.emit("loopFix")}function ub(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;a[n]=r}),e.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),a.forEach(r=>{s.append(r)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var pb={loopCreate:cb,loopFix:db,loopDestroy:ub};function fb(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function hb(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var mb={setGrabCursor:fb,unsetGrabCursor:hb};function gb(e,t=this){function s(a){if(!a||a===Nt()||a===st())return null;a.assignedSlot&&(a=a.assignedSlot);const r=a.closest(e);return!r&&!a.getRootNode?null:r||s(a.getRootNode().host)}return s(t)}function pl(e,t,s){const a=st(),{params:r}=e,n=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return n&&(s<=o||s>=a.innerWidth-o)?n==="prevent"?(t.preventDefault(),!0):!1:!0}function bb(e){const t=this,s=Nt();let a=e;a.originalEvent&&(a=a.originalEvent);const r=t.touchEventsData;if(a.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==a.pointerId)return;r.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(r.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){pl(t,a,a.targetTouches[0].pageX);return}const{params:n,touches:o,enabled:i}=t;if(!i||!n.simulateTouch&&a.pointerType==="mouse"||t.animating&&n.preventInteractionOnTransition)return;!t.animating&&n.cssMode&&n.loop&&t.loopFix();let l=a.target;if(n.touchEventsTarget==="wrapper"&&!Eg(l,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||r.isTouched&&r.isMoved)return;const c=!!n.noSwipingClass&&n.noSwipingClass!=="",d=a.composedPath?a.composedPath():a.path;c&&a.target&&a.target.shadowRoot&&d&&(l=d[0]);const u=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,p=!!(a.target&&a.target.shadowRoot);if(n.noSwiping&&(p?gb(u,l):l.closest(u))){t.allowClick=!0;return}if(n.swipeHandler&&!l.closest(n.swipeHandler))return;o.currentX=a.pageX,o.currentY=a.pageY;const f=o.currentX,b=o.currentY;if(!pl(t,a,f))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=b,r.touchStartTime=Ur(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let v=!0;l.matches(r.focusableElements)&&(v=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),s.activeElement&&s.activeElement.matches(r.focusableElements)&&s.activeElement!==l&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!l.matches(r.focusableElements))&&s.activeElement.blur();const y=v&&t.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||y)&&!l.isContentEditable&&a.preventDefault(),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.animating&&!n.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function _b(e){const t=Nt(),s=this,a=s.touchEventsData,{params:r,touches:n,rtlTranslate:o,enabled:i}=s;if(!i||!r.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(a.touchId!==null||l.pointerId!==a.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(g=>g.identifier===a.touchId),!c||c.identifier!==a.touchId)return}else c=l;if(!a.isTouched){a.startMoving&&a.isScrolling&&s.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){n.startX=d,n.startY=u;return}if(!s.allowTouchMove){l.target.matches(a.focusableElements)||(s.allowClick=!1),a.isTouched&&(Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u}),a.touchStartTime=Ur());return}if(r.touchReleaseOnEdges&&!r.loop)if(s.isVertical()){if(u<n.startY&&s.translate<=s.maxTranslate()||u>n.startY&&s.translate>=s.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(o&&(d>n.startX&&-s.translate<=s.maxTranslate()||d<n.startX&&-s.translate>=s.minTranslate()))return;if(!o&&(d<n.startX&&s.translate<=s.maxTranslate()||d>n.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(a.focusableElements)){a.isMoved=!0,s.allowClick=!1;return}a.allowTouchCallbacks&&s.emit("touchMove",l),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=d,n.currentY=u;const p=n.currentX-n.startX,f=n.currentY-n.startY;if(s.params.threshold&&Math.sqrt(p**2+f**2)<s.params.threshold)return;if(typeof a.isScrolling>"u"){let g;s.isHorizontal()&&n.currentY===n.startY||s.isVertical()&&n.currentX===n.startX?a.isScrolling=!1:p*p+f*f>=25&&(g=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,a.isScrolling=s.isHorizontal()?g>r.touchAngle:90-g>r.touchAngle)}if(a.isScrolling&&s.emit("touchMoveOpposite",l),typeof a.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(a.startMoving=!0),a.isScrolling||l.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;s.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let b=s.isHorizontal()?p:f,v=s.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(b=Math.abs(b)*(o?1:-1),v=Math.abs(v)*(o?1:-1)),n.diff=b,b*=r.touchRatio,o&&(b=-b,v=-v);const y=s.touchesDirection;s.swipeDirection=b>0?"prev":"next",s.touchesDirection=v>0?"prev":"next";const m=s.params.loop&&!r.cssMode,h=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!a.isMoved){if(m&&h&&s.loopFix({direction:s.swipeDirection}),a.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const g=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(g)}a.allowMomentumBounce=!1,r.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",l)}if(new Date().getTime(),r._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&y!==s.touchesDirection&&m&&h&&Math.abs(b)>=1){Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}s.emit("sliderMove",l),a.isMoved=!0,a.currentTranslate=b+a.startTranslate;let _=!0,S=r.resistanceRatio;if(r.touchReleaseOnEdges&&(S=0),b>0?(m&&h&&a.allowThresholdMove&&a.currentTranslate>(r.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(r.slidesPerView!=="auto"&&s.slides.length-r.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>s.minTranslate()&&(_=!1,r.resistance&&(a.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+a.startTranslate+b)**S))):b<0&&(m&&h&&a.allowThresholdMove&&a.currentTranslate<(r.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(r.slidesPerView!=="auto"&&s.slides.length-r.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(r.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),a.currentTranslate<s.maxTranslate()&&(_=!1,r.resistance&&(a.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-a.startTranslate-b)**S))),_&&(l.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(a.currentTranslate=a.startTranslate),r.threshold>0)if(Math.abs(b)>r.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,a.currentTranslate=a.startTranslate,n.diff=s.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{a.currentTranslate=a.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&s.freeMode||r.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(a.currentTranslate),s.setTranslate(a.currentTranslate))}function vb(e){const t=this,s=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let r;if(a.type==="touchend"||a.type==="touchcancel"){if(r=[...a.changedTouches].find(g=>g.identifier===s.touchId),!r||r.identifier!==s.touchId)return}else{if(s.touchId!==null||a.pointerId!==s.pointerId)return;r=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&a.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",a),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Ur(),p=u-s.touchStartTime;if(t.allowClick){const g=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(g&&g[0]||a.target,g),t.emit("tap click",a),p<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(s.lastClickTime=Ur(),xu(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||i.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let f;if(o.followFinger?f=l?t.translate:-t.translate:f=-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const b=f>=-t.maxTranslate()&&!t.params.loop;let v=0,y=t.slidesSizesGrid[0];for(let g=0;g<c.length;g+=g<o.slidesPerGroupSkip?1:o.slidesPerGroup){const w=g<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[g+w]<"u"?(b||f>=c[g]&&f<c[g+w])&&(v=g,y=c[g+w]-c[g]):(b||f>=c[g])&&(v=g,y=c[c.length-1]-c[c.length-2])}let m=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const _=(f-c[v])/y,S=v<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(_>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?m:v+S):t.slideTo(v)),t.swipeDirection==="prev"&&(_>1-o.longSwipesRatio?t.slideTo(v+S):h!==null&&_<0&&Math.abs(_)>o.longSwipesRatio?t.slideTo(h):t.slideTo(v))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(v+S):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:v+S),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:v))}}function fl(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:r,snapGrid:n}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=r,e.allowSlideNext=a,e.params.watchOverflow&&n!==e.snapGrid&&e.checkOverflow()}function yb(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function wb(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let r;const n=e.maxTranslate()-e.minTranslate();n===0?r=0:r=(e.translate-e.minTranslate())/n,r!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function xb(e){const t=this;Or(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function Tb(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Cu=(e,t)=>{const s=Nt(),{params:a,el:r,wrapperEl:n,device:o}=e,i=!!a.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!r||typeof r=="string"||(s[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),r[l]("touchstart",e.onTouchStart,{passive:!1}),r[l]("pointerdown",e.onTouchStart,{passive:!1}),s[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),s[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),s[l]("touchend",e.onTouchEnd,{passive:!0}),s[l]("pointerup",e.onTouchEnd,{passive:!0}),s[l]("pointercancel",e.onTouchEnd,{passive:!0}),s[l]("touchcancel",e.onTouchEnd,{passive:!0}),s[l]("pointerout",e.onTouchEnd,{passive:!0}),s[l]("pointerleave",e.onTouchEnd,{passive:!0}),s[l]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&r[l]("click",e.onClick,!0),a.cssMode&&n[l]("scroll",e.onScroll),a.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",fl,!0):e[c]("observerUpdate",fl,!0),r[l]("load",e.onLoad,{capture:!0}))};function Sb(){const e=this,{params:t}=e;e.onTouchStart=bb.bind(e),e.onTouchMove=_b.bind(e),e.onTouchEnd=vb.bind(e),e.onDocumentTouchStart=Tb.bind(e),t.cssMode&&(e.onScroll=wb.bind(e)),e.onClick=yb.bind(e),e.onLoad=xb.bind(e),Cu(e,"on")}function Eb(){Cu(this,"off")}var kb={attachEvents:Sb,detachEvents:Eb};const hl=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Ab(){const e=this,{realIndex:t,initialized:s,params:a,el:r}=e,n=a.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=Nt(),i=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",l=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:o.querySelector(a.breakpointsBase),c=e.getBreakpoint(n,i,l);if(!c||e.currentBreakpoint===c)return;const u=(c in n?n[c]:void 0)||e.originalParams,p=hl(e,a),f=hl(e,u),b=e.params.grabCursor,v=u.grabCursor,y=a.enabled;p&&!f?(r.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(r.classList.add(`${a.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&a.grid.fill==="column")&&r.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!v?e.unsetGrabCursor():!b&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(w=>{if(typeof u[w]>"u")return;const x=a[w]&&a[w].enabled,T=u[w]&&u[w].enabled;x&&!T&&e[w].disable(),!x&&T&&e[w].enable()});const m=u.direction&&u.direction!==a.direction,h=a.loop&&(u.slidesPerView!==a.slidesPerView||m),_=a.loop;m&&s&&e.changeDirection(),ot(e.params,u);const S=e.params.enabled,g=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),y&&!S?e.disable():!y&&S&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),s&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!_&&g?(e.loopCreate(t),e.updateSlides()):_&&!g&&e.loopDestroy()),e.emit("breakpoint",u)}function Pb(e,t="window",s){if(!e||t==="container"&&!s)return;let a=!1;const r=st(),n=t==="window"?r.innerHeight:s.clientHeight,o=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:n*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];t==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(a=l):c<=s.clientWidth&&(a=l)}return a||"max"}var Cb={setBreakpoint:Ab,getBreakpoint:Pb};function Ob(e,t){const s=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(r=>{a[r]&&s.push(t+r)}):typeof a=="string"&&s.push(t+a)}),s}function $b(){const e=this,{classNames:t,params:s,rtl:a,el:r,device:n}=e,o=Ob(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...o),r.classList.add(...t),e.emitContainerClasses()}function Mb(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var Rb={addClasses:$b,removeClasses:Mb};function Lb(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const r=e.slides.length-1,n=e.slidesGrid[r]+e.slidesSizesGrid[r]+a*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Db={checkOverflow:Lb},ml={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Nb(e,t){return function(a={}){const r=Object.keys(a)[0],n=a[r];if(typeof n!="object"||n===null){ot(t,a);return}if(e[r]===!0&&(e[r]={enabled:!0}),r==="navigation"&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&"enabled"in n)){ot(t,a);return}typeof e[r]=="object"&&!("enabled"in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),ot(t,a)}}const Un={eventsEmitter:Rg,update:qg,translate:Jg,transition:eb,slide:lb,loop:pb,grabCursor:mb,events:kb,breakpoints:Cb,checkOverflow:Db,classes:Rb},qn={};class ht{constructor(...t){let s,a;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?a=t[0]:[s,a]=t,a||(a={}),a=ot({},a),s&&!a.el&&(a.el=s);const r=Nt();if(a.el&&typeof a.el=="string"&&r.querySelectorAll(a.el).length>1){const l=[];return r.querySelectorAll(a.el).forEach(c=>{const d=ot({},a,{el:c});l.push(new ht(d))}),l}const n=this;n.__swiper__=!0,n.support=Eu(),n.device=ku({userAgent:a.userAgent}),n.browser=Au(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],a.modules&&Array.isArray(a.modules)&&a.modules.forEach(l=>{typeof l=="function"&&n.modules.indexOf(l)<0&&n.modules.push(l)});const o={};n.modules.forEach(l=>{l({params:a,swiper:n,extendParams:Nb(a,o),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const i=ot({},ml,o);return n.params=ot({},i,qn,a),n.originalParams=ot({},n.params),n.passedParams=ot({},a),n.params&&n.params.on&&Object.keys(n.params.on).forEach(l=>{n.on(l,n.params.on[l])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),Object.assign(n,{enabled:n.params.enabled,el:s,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:a}=this,r=Lt(s,`.${a.slideClass}, swiper-slide`),n=Vr(r[0]);return Vr(t)-n}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:a}=t;t.slides=Lt(s,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const a=this;t=Math.min(Math.max(t,0),1);const r=a.minTranslate(),o=(a.maxTranslate()-r)*t+r;a.translateTo(o,typeof s>"u"?0:s),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(a=>{const r=t.getSlideClasses(a);s.push({slideEl:a,classNames:r}),t.emit("_slideClass",a,r)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t="current",s=!1){const a=this,{params:r,slides:n,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=a;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let u=n[c]?Math.ceil(n[c].swiperSlideSize):0,p;for(let f=c+1;f<n.length;f+=1)n[f]&&!p&&(u+=Math.ceil(n[f].swiperSlideSize),d+=1,u>l&&(p=!0));for(let f=c-1;f>=0;f-=1)n[f]&&!p&&(u+=n[f].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<n.length;u+=1)(s?o[u]+i[u]-o[c]<l:o[u]-o[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Or(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function r(){const o=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let n;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)r(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const o=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;n=t.slideTo(o.length-1,0,!1,!0)}else n=t.slideTo(t.activeIndex,0,!1,!0);n||r()}a.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s=!0){const a=this,r=a.params.direction;return t||(t=r==="horizontal"?"vertical":"horizontal"),t===r||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${r}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(n=>{t==="vertical"?n.style.width="":n.style.height=""}),a.emit("changeDirection"),s&&a.update()),a}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let a=t||s.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=s,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const r=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(r()):Lt(a,r())[0];return!o&&s.params.createElements&&(o=Gr("div",s.params.wrapperClass),a.append(o),Lt(a,`.${s.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(s,{el:a,wrapperEl:o,slidesEl:s.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:o,hostEl:s.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||us(a,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||us(a,"direction")==="rtl"),wrongRTL:us(o,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const r=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&r.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?Or(s,n):n.addEventListener("load",o=>{Or(s,o.target)})}),To(s),s.initialized=!0,To(s),s.emit("init"),s.emit("afterInit"),s}destroy(t=!0,s=!0){const a=this,{params:r,el:n,wrapperEl:o,slides:i}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),r.loop&&a.loopDestroy(),s&&(a.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(l=>{a.off(l)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),yg(a)),a.destroyed=!0),null}static extendDefaults(t){ot(qn,t)}static get extendedDefaults(){return qn}static get defaults(){return ml}static installModule(t){ht.prototype.__modules__||(ht.prototype.__modules__=[]);const s=ht.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>ht.installModule(s)),ht):(ht.installModule(t),ht)}}Object.keys(Un).forEach(e=>{Object.keys(Un[e]).forEach(t=>{ht.prototype[t]=Un[e][t]})});ht.use([$g,Mg]);function Ib(e,t,s,a){return e.params.createElements&&Object.keys(a).forEach(r=>{if(!s[r]&&s.auto===!0){let n=Lt(e.el,`.${a[r]}`)[0];n||(n=Gr("div",a[r]),n.className=a[r],e.el.append(n)),s[r]=n,t[r]=n}}),s}function ta(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Bb({swiper:e,extendParams:t,on:s,emit:a}){const r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let n,o=0;function i(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function l(m,h){const{bulletActiveClass:_}=e.params.pagination;m&&(m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${_}-${h}`),m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${_}-${h}-${h}`)))}function c(m,h,_){if(m=m%_,h=h%_,h===m+1)return"next";if(h===m-1)return"previous"}function d(m){const h=m.target.closest(ta(e.params.pagination.bulletClass));if(!h)return;m.preventDefault();const _=Vr(h)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===_)return;const S=c(e.realIndex,_,e.slides.length);S==="next"?e.slideNext():S==="previous"?e.slidePrev():e.slideToLoop(_)}else e.slideTo(_)}function u(){const m=e.rtl,h=e.params.pagination;if(i())return;let _=e.pagination.el;_=Ht(_);let S,g;const w=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,x=e.params.loop?Math.ceil(w/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(g=e.previousRealIndex||0,S=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(S=e.snapIndex,g=e.previousSnapIndex):(g=e.previousIndex||0,S=e.activeIndex||0),h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const T=e.pagination.bullets;let E,P,$;if(h.dynamicBullets&&(n=xo(T[0],e.isHorizontal()?"width":"height"),_.forEach(O=>{O.style[e.isHorizontal()?"width":"height"]=`${n*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&g!==void 0&&(o+=S-(g||0),o>h.dynamicMainBullets-1?o=h.dynamicMainBullets-1:o<0&&(o=0)),E=Math.max(S-o,0),P=E+(Math.min(T.length,h.dynamicMainBullets)-1),$=(P+E)/2),T.forEach(O=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(G=>`${h.bulletActiveClass}${G}`)].map(G=>typeof G=="string"&&G.includes(" ")?G.split(" "):G).flat();O.classList.remove(...L)}),_.length>1)T.forEach(O=>{const L=Vr(O);L===S?O.classList.add(...h.bulletActiveClass.split(" ")):e.isElement&&O.setAttribute("part","bullet"),h.dynamicBullets&&(L>=E&&L<=P&&O.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),L===E&&l(O,"prev"),L===P&&l(O,"next"))});else{const O=T[S];if(O&&O.classList.add(...h.bulletActiveClass.split(" ")),e.isElement&&T.forEach((L,G)=>{L.setAttribute("part",G===S?"bullet-active":"bullet")}),h.dynamicBullets){const L=T[E],G=T[P];for(let X=E;X<=P;X+=1)T[X]&&T[X].classList.add(...`${h.bulletActiveClass}-main`.split(" "));l(L,"prev"),l(G,"next")}}if(h.dynamicBullets){const O=Math.min(T.length,h.dynamicMainBullets+4),L=(n*O-n)/2-$*n,G=m?"right":"left";T.forEach(X=>{X.style[e.isHorizontal()?G:"top"]=`${L}px`})}}_.forEach((T,E)=>{if(h.type==="fraction"&&(T.querySelectorAll(ta(h.currentClass)).forEach(P=>{P.textContent=h.formatFractionCurrent(S+1)}),T.querySelectorAll(ta(h.totalClass)).forEach(P=>{P.textContent=h.formatFractionTotal(x)})),h.type==="progressbar"){let P;h.progressbarOpposite?P=e.isHorizontal()?"vertical":"horizontal":P=e.isHorizontal()?"horizontal":"vertical";const $=(S+1)/x;let O=1,L=1;P==="horizontal"?O=$:L=$,T.querySelectorAll(ta(h.progressbarFillClass)).forEach(G=>{G.style.transform=`translate3d(0,0,0) scaleX(${O}) scaleY(${L})`,G.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(dl(T,h.renderCustom(e,S+1,x)),E===0&&a("paginationRender",T)):(E===0&&a("paginationRender",T),a("paginationUpdate",T)),e.params.watchOverflow&&e.enabled&&T.classList[e.isLocked?"add":"remove"](h.lockClass)})}function p(){const m=e.params.pagination;if(i())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let _=e.pagination.el;_=Ht(_);let S="";if(m.type==="bullets"){let g=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&g>h&&(g=h);for(let w=0;w<g;w+=1)m.renderBullet?S+=m.renderBullet.call(e,w,m.bulletClass):S+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?S=m.renderFraction.call(e,m.currentClass,m.totalClass):S=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?S=m.renderProgressbar.call(e,m.progressbarFillClass):S=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],_.forEach(g=>{m.type!=="custom"&&dl(g,S||""),m.type==="bullets"&&e.pagination.bullets.push(...g.querySelectorAll(ta(m.bulletClass)))}),m.type!=="custom"&&a("paginationRender",_[0])}function f(){e.params.pagination=Ib(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let h;typeof m.el=="string"&&e.isElement&&(h=e.el.querySelector(m.el)),!h&&typeof m.el=="string"&&(h=[...document.querySelectorAll(m.el)]),h||(h=m.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(m.el)],h.length>1&&(h=h.find(_=>Su(_,".swiper")[0]===e.el))),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=Ht(h),h.forEach(_=>{m.type==="bullets"&&m.clickable&&_.classList.add(...(m.clickableClass||"").split(" ")),_.classList.add(m.modifierClass+m.type),_.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(_.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&_.classList.add(m.progressbarOppositeClass),m.clickable&&_.addEventListener("click",d),e.enabled||_.classList.add(m.lockClass)}))}function b(){const m=e.params.pagination;if(i())return;let h=e.pagination.el;h&&(h=Ht(h),h.forEach(_=>{_.classList.remove(m.hiddenClass),_.classList.remove(m.modifierClass+m.type),_.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(_.classList.remove(...(m.clickableClass||"").split(" ")),_.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(_=>_.classList.remove(...m.bulletActiveClass.split(" ")))}s("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:h}=e.pagination;h=Ht(h),h.forEach(_=>{_.classList.remove(m.horizontalClass,m.verticalClass),_.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),s("init",()=>{e.params.pagination.enabled===!1?y():(f(),p(),u())}),s("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),s("snapIndexChange",()=>{u()}),s("snapGridLengthChange",()=>{p(),u()}),s("destroy",()=>{b()}),s("enable disable",()=>{let{el:m}=e.pagination;m&&(m=Ht(m),m.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),s("lock unlock",()=>{u()}),s("click",(m,h)=>{const _=h.target,S=Ht(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&S&&S.length>0&&!_.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&_===e.navigation.nextEl||e.navigation.prevEl&&_===e.navigation.prevEl))return;const g=S[0].classList.contains(e.params.pagination.hiddenClass);a(g===!0?"paginationShow":"paginationHide"),S.forEach(w=>w.classList.toggle(e.params.pagination.hiddenClass))}});const v=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=Ht(m),m.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),u()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=Ht(m),m.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),b()};Object.assign(e.pagination,{enable:v,disable:y,render:p,update:u,init:f,destroy:b})}function Fb({swiper:e,extendParams:t,on:s,emit:a,params:r}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,o,i=r&&r.autoplay?r.autoplay.delay:3e3,l=r&&r.autoplay?r.autoplay.delay:3e3,c,d=new Date().getTime(),u,p,f,b,v,y;function m(K){!e||e.destroyed||!e.wrapperEl||K.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(y||K.detail&&K.detail.bySwiperTouchMove)&&E())}const h=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(l=c,u=!1);const K=e.autoplay.paused?c:d+l-new Date().getTime();e.autoplay.timeLeft=K,a("autoplayTimeLeft",K,K/i),o=requestAnimationFrame(()=>{h()})},_=()=>{let K;return e.virtual&&e.params.virtual.enabled?K=e.slides.find(Q=>Q.classList.contains("swiper-slide-active")):K=e.slides[e.activeIndex],K?parseInt(K.getAttribute("data-swiper-autoplay"),10):void 0},S=()=>{let K=e.params.autoplay.delay;const V=_();return!Number.isNaN(V)&&V>0&&(K=V),K},g=K=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),h();let V=K;typeof V>"u"&&(V=S(),i=V,l=V),c=V;const Q=e.params.speed,U=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Q,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Q,!0,!0),a("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Q,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Q,!0,!0),a("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{g()})))};return V>0?(clearTimeout(n),n=setTimeout(()=>{U()},V)):requestAnimationFrame(()=>{U()}),V},w=()=>{d=new Date().getTime(),e.autoplay.running=!0,g(),a("autoplayStart")},x=()=>{e.autoplay.running=!1,clearTimeout(n),cancelAnimationFrame(o),a("autoplayStop")},T=(K,V)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(n),K||(v=!0);const Q=()=>{a("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):E()};if(e.autoplay.paused=!0,V){Q();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),Q())},E=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),v?(v=!1,g(c)):g(),e.autoplay.paused=!1,a("autoplayResume"))},P=()=>{if(e.destroyed||!e.autoplay.running)return;const K=Nt();K.visibilityState==="hidden"&&(v=!0,T(!0)),K.visibilityState==="visible"&&E()},$=K=>{K.pointerType==="mouse"&&(v=!0,y=!0,!(e.animating||e.autoplay.paused)&&T(!0))},O=K=>{K.pointerType==="mouse"&&(y=!1,e.autoplay.paused&&E())},L=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",O))},G=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",O))},X=()=>{Nt().addEventListener("visibilitychange",P)},ae=()=>{Nt().removeEventListener("visibilitychange",P)};s("init",()=>{e.params.autoplay.enabled&&(L(),X(),w())}),s("destroy",()=>{G(),ae(),e.autoplay.running&&x()}),s("_freeModeStaticRelease",()=>{(f||v)&&E()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?x():T(!0,!0)}),s("beforeTransitionStart",(K,V,Q)=>{e.destroyed||!e.autoplay.running||(Q||!e.params.autoplay.disableOnInteraction?T(!0,!0):x())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){x();return}p=!0,f=!1,v=!1,b=setTimeout(()=>{v=!0,f=!0,T(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(b),clearTimeout(n),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&E(),f=!1,p=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=S(),i=S())}),Object.assign(e.autoplay,{start:w,stop:x,pause:T,resume:E})}const zb={class:"home-layout"},Hb={class:"sticky-header-group"},jb=["data-user-name"],Ub={class:"home-tabs",id:"home-tabs--id"},qb={class:"home-tab home-tab--active","data-home-tab":"lobby"},Gb={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Vb={class:"home-tab","data-home-tab":"active"},Kb={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Yb={__name:"home_route",setup(e){const t=ut(),s=be();window.CoreBetSlip=yu,document.addEventListener("click",c=>{const d=c.target;if(d&&d.dataset?.promotionTopic){const u={timestamp:Date.now(),heroImg:d.dataset.promotionHeroImg||"",caption:d.dataset.promotionCaption||"",tagline:d.dataset.promotionTagline||"",toast:d.dataset.promotionToast||"",topic:d.dataset.promotionTopic||"",topicToken:d.dataset.promotionTopicToken||"",marquee:d.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",u),le.publish(s.hierTopics.PROMOTION__CLICK,JSON.stringify(u))}d&&d.dataset?.publishRouteHome&&(d.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(p=>{p.classList.toggle("dash-nav__btn--active",p===d)}),le.publish(d.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),d&&d.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(c,d=!1,u="cards",p={})=>{const f=document.querySelector(".tournaments-grid");if(!f)return;f.innerHTML="",f.style.animation="none",f.offsetHeight,f.style.animation="panel-enter 0.3s ease-out both",f.classList.toggle("tournaments-grid--list",u==="list");const b=document.getElementById("app"),v=b?.getAttribute("data-sync-theme")||"dark",y=b?.getAttribute("data-sync-lang")||"en",m=b?.getAttribute("data-sync-motif")||"brand",h=(g="")=>g.toLowerCase().replace(/\b\w/g,w=>w.toUpperCase()),_=g=>{const w=document.createElement("bma-tournament-list-card");return w.setAttribute("data-bma-tourn-guid",g.guid||""),w.setAttribute("data-bma-tourn-caption",g.caption||""),w.setAttribute("data-bma-tourn-tagline",g.tagline||""),w.setAttribute("data-bma-tourn-status",g.status||""),w.setAttribute("data-bma-tourn-class",g.status||""),w.setAttribute("data-bma-tourn-game-type",g.class||"DEFAULT"),w.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(g.sports_allowed)?JSON.stringify(g.sports_allowed):""),w.setAttribute("data-bma-tourn-entities",g.entities?JSON.stringify(g.entities):""),w.setAttribute("data-bma-tourn-entry_fee",g.entry_fee||"0"),w.setAttribute("data-bma-tourn-tournament_dollars",g.tournament_dollars||"0"),w.setAttribute("data-bma-tourn-matches",g.matches_expanded?.length||"0"),w.setAttribute("data-bma-tourn-tags",Array.isArray(g.tags)?JSON.stringify(g.tags):"[]"),w.setAttribute("data-bma-tourn-window_start_time",g.window_start_time||""),w.setAttribute("data-bma-tourn-window_end_time",g.window_end_time||""),w.setAttribute("data-sync-theme",v),w},S=g=>{const w=document.createElement("article"),x=g.status||"DRAFT";w.className=`tournament-item tournament-status-${x.toLowerCase()}`;const T=document.createElement("bma-tournament-card");return T.setAttribute("data-bma-tourn-id",g.id||""),T.setAttribute("data-bma-tourn-guid",g.guid||""),T.setAttribute("data-bma-tourn-caption",g.caption||""),T.setAttribute("data-bma-tourn-tagline",g.tagline||""),T.setAttribute("data-bma-tourn-window_start_time",g.window_start_time||""),T.setAttribute("data-bma-tourn-window_end_time",g.window_end_time||""),T.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(g.sports_allowed)?JSON.stringify(g.sports_allowed):g.sports_allowed||""),T.setAttribute("data-bma-tourn-entities",g.entities?JSON.stringify(g.entities):""),T.setAttribute("data-bma-tourn-tournament_dollars",g.tournament_dollars||""),T.setAttribute("data-bma-tourn-prize_distro",Array.isArray(g.prize_distro)?JSON.stringify(g.prize_distro):g.prize_distro||""),T.setAttribute("data-bma-tourn-matches",Array.isArray(g.matches_guids)?JSON.stringify(g.matches_guids):g.matches_guids||""),T.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(g.matches_expanded)?JSON.stringify(g.matches_expanded):g.matches_expanded||""),T.setAttribute("data-bma-tourn-entry_fee",g.entry_fee||""),T.setAttribute("data-bma-tourn-rake",g.rake||""),T.setAttribute("data-bma-tourn-tags",Array.isArray(g.tags)?JSON.stringify(g.tags):g.tags||""),T.setAttribute("data-bma-tourn-comments",g.comments||""),T.setAttribute("data-bma-tourn-class",g.status||""),T.setAttribute("data-bma-tourn-game-type",g.class||"DEFAULT"),T.setAttribute("data-bma-tourn-status",g.status||""),T.setAttribute("data-sync-theme",v),T.setAttribute("data-sync-lang",y),T.setAttribute("data-sync-motif",m),T.setAttribute("data-n55-size","medium"),T.setAttribute("data-n55-enchanted-cta-ambient","none"),T.setAttribute("data-tourn-custom-css",""),T.setAttribute("data-tourn-trophy","0"),T.setAttribute("data-bma-tourn-focus",""),T.setAttribute("data-bma-tourn-wait","false"),w.appendChild(T),w};if(d){c.forEach(w=>{if(w.type==="stats"){const R=document.createElement("div");R.className="tournament-category tournament-category--stats",R.innerHTML=w.html||"",f.appendChild(R);return}const x=document.createElement("div");x.className="tournament-category";const T=document.createElement("header");T.className="tournament-category-header";const E=document.createElement("div");E.className="category-title-line";const P=document.createElement("h2");if(P.className="category-title",P.textContent=h(w.title),E.appendChild(P),w.tournaments){const R=document.createElement("span");R.className="category-subtext",R.textContent=w.tournaments.length,E.appendChild(R)}const{tab:$="lobby",subStatus:O="all",sort:L="default",result:G="all",odds:X="all"}=p,K=w.title.toLowerCase().includes("completed"),V=!K&&$==="my",Q=(R,j,N)=>`<option value="${R}"${N?" selected":""}>${j}</option>`;let U="";if($==="lobby"?U=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${Q("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${Q("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${Q("default","Starting TD$: Default",L==="default")}
              ${Q("td_high","Starting TD$: High to Low",L==="td_high")}
              ${Q("td_low","Starting TD$: Low to High",L==="td_low")}
            </select>
          `:$==="my"&&V?U=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${Q("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${Q("all","Status: All",O==="all")}
              ${Q("active","Status: Active",O==="active")}
              ${Q("upcoming","Status: Upcoming",O==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${Q("all","Odds: All",X==="all")}
              ${Q("available","Odds: Available",X==="available")}
              ${Q("none","Odds: Not Available",X==="none")}
            </select>
          `:($==="my"&&K||$==="completed")&&(U=`
            <select class="category-dropdown" data-filter-type="result">
              ${Q("all","Result: All",G==="all")}
              ${Q("trophy","Result: Won Trophy",G==="trophy")}
              ${Q("no_trophy","Result: No Trophy",G==="no_trophy")}
            </select>
          `),T.appendChild(E),U){const R=document.createElement("button");R.className="category-filter-toggle",R.setAttribute("aria-label","Toggle filters"),R.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filters <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>';const j=document.createElement("div");j.className="category-controls";const N=localStorage.getItem("bma_view_mode")||"cards",A=document.createElement("span");A.className="category-view-btns",A.innerHTML=`
            <button class="category-view-btn${N==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            </button>
            <button class="category-view-btn${N==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            </button>
          `,j.appendChild(R),j.appendChild(A),T.appendChild(j)}if(U){const R=document.createElement("div");if(R.className="category-filter-row",R.style.display=window._bmaFilterRowOpen?"":"none",R.innerHTML=U,T.appendChild(R),window._bmaFilterRowOpen){const j=T.querySelector(".category-filter-toggle");j&&j.classList.add("category-filter-toggle--open")}}if(x.appendChild(T),f.appendChild(x),w.tournaments.length===0){const R=w.emptyMessage||"No tournaments available",j=w.emptySubtext||"Check back later for new tournaments",N=w.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',A=document.createElement("div");A.className="tournaments-empty",A.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",A.innerHTML=`
            ${N}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${R}</p>
            <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${j}</p>
          `,x.appendChild(A)}else{const R=document.createElement("div");if(R.className="card-rail",w.tournaments.forEach((j,N)=>{const A=u==="list"?_(j):S(j);A.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",A.style.animationDelay=`${Math.min(N*50,300)}ms`,R.appendChild(A)}),x.appendChild(R),w.tournaments.length>1){const j=document.createElement("div");j.className="card-rail__dots";for(let N=0;N<w.tournaments.length;N++){const A=document.createElement("span");A.className=`card-rail__dot${N===0?" card-rail__dot--active":""}`,j.appendChild(A)}x.appendChild(j)}if(w.tournaments.length>1){const j=document.createElement("button");j.className="card-rail__arrow card-rail__arrow--prev",j.setAttribute("aria-label","Previous card"),j.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',j.style.opacity="0";const N=document.createElement("button");N.className="card-rail__arrow card-rail__arrow--next",N.setAttribute("aria-label","Next card"),N.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',x.appendChild(j),x.appendChild(N);const A=x.querySelector(".card-rail__dots");R.addEventListener("scroll",()=>{const M=R.scrollLeft,I=R.firstElementChild?.offsetWidth||1,z=Math.round(M/(I+12));A&&A.querySelectorAll(".card-rail__dot").forEach((re,F)=>{re.classList.toggle("card-rail__dot--active",F===z)}),j.style.opacity=M<=10?"0":"";const Z=R.scrollWidth-R.clientWidth;N.style.opacity=M>=Z-10?"0":""},{passive:!0}),j.addEventListener("click",()=>{const M=R.firstElementChild?.offsetWidth||300;R.scrollBy({left:-(M+12),behavior:"smooth"})}),N.addEventListener("click",()=>{const M=R.firstElementChild?.offsetWidth||300;R.scrollBy({left:M+12,behavior:"smooth"})})}}});const g=f.dataset.filterContext;if(g!=="lobby"&&g!=="private"&&f.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let w="No tournaments available",x="Check back later for new tournaments";g==="my"?(w="You haven't joined any tournaments yet",x="Head to the lobby to find tournaments"):g==="completed"&&(w="No completed tournaments yet",x="Tournaments will appear here once they finish");const T=document.createElement("div");T.className="tournaments-empty",T.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",T.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${w}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${x}</p>
        `,f.appendChild(T)}}else c.forEach((g,w)=>{const x=u==="list"?_(g):S(g);x.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",x.style.animationDelay=`${Math.min(w*50,300)}ms`,f.appendChild(x)})},r=c=>{document.querySelectorAll("bma-tournament-card").forEach(u=>{u.setAttribute("data-sync-theme",c)})},n=c=>{const d=document.querySelectorAll("bma-tournament-card"),u=Date.now().toString();d.forEach(p=>{if(p===c){if(p.setAttribute("data-bma-tourn-focus",u),p.shadowRoot){const f=p.shadowRoot.querySelector(".card-focus__feedback");f&&(f.style.display="")}}else if(p.setAttribute("data-bma-tourn-focus",""),p.shadowRoot){const f=p.shadowRoot.querySelector(".card-focus__feedback");f&&(f.style.display="none")}}),typeof neodigmMarquee<"u"&&neodigmMarquee.init()},o=c=>{const{action:d,tournamentId:u,tournamentGuid:p,tournamentStatus:f,...b}=c.detail;console.log("[home_route] Tournament action:",{action:d,tournamentId:u,tournamentGuid:p,tournamentStatus:f,...b}),n(c.target),le.publish("WC.TOURN_ACTION",JSON.stringify({action:d,tournamentId:u,tournamentGuid:p,tournamentStatus:f,...b,timestamp:Date.now()}))};let i=null;const l=()=>{const c=document.getElementById("home-datetime--id");if(!c)return;const d=new Date,u=d.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),p=d.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});c.textContent=`${u} · ${p}`};return bt(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}l(),i=setInterval(l,24e3);const c=document.getElementById("app");if(c){const f=s.appCLIFeatures.features.theme?.state,b=s.appCLIFeatures.features.lang?.state,v=s.appCLIFeatures.features.motif?.state,y=s.appSession.session_user.guid;f&&(c.setAttribute("data-sync-theme",f),document.body.setAttribute("data-sync-theme",f)),b&&c.setAttribute("data-sync-lang",b),v&&c.setAttribute("data-sync-motif",v),y&&c.setAttribute("data-user-guid",y)}window._homeRouteRenderCards=a;const d=le.subscribe("APP.ROUTE_SYNC",(f,b)=>{try{const v=JSON.parse(b);v.theme&&r(v.theme.state)}catch(v){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",v)}});if(window._homeRoutePubSubToken=d,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),le.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",o),window._pendingTournGuid){const f=window._pendingTournGuid;delete window._pendingTournGuid,setTimeout(()=>{le.publish("WC.TOURN_ACTION",JSON.stringify({action:"PLAY",tournamentGuid:f,timestamp:Date.now()}))},800)}const u=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,p=new ht(".featured-swiper",{modules:[Fb,Bb],slidesPerView:1,spaceBetween:16,loop:u>1,centeredSlides:u===1,autoplay:u>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:Math.min(2,u),spaceBetween:16},1024:{slidesPerView:Math.min(3,u),spaceBetween:20},1280:{slidesPerView:Math.min(3,u),spaceBetween:24}}});window.featuredSwiper=p,le.publish(s.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Ws(()=>{i&&clearInterval(i),document.removeEventListener("bma-tournament-action",o),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&le.unsubscribe(window._homeRoutePubSubToken)}),(c,d)=>(Me(),Ie("main",zb,[H("div",Hb,[H("bma-app-head-top",{"data-user-name":lt(s).appSession.session_user.name||"Guest"},null,8,jb),d[0]||(d[0]=H("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),d[6]||(d[6]=wt('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div><div class="home-datetime" id="home-datetime--id" aria-hidden="true">—</div><bma-scores-banner id="bma-scores-banner--id"></bma-scores-banner></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports>',2)),H("nav",Ub,[H("button",qb,[(Me(),Ie("svg",Gb,[...d[1]||(d[1]=[H("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[2]||(d[2]=Rt(" Main Lobby ",-1))]),H("button",Vb,[(Me(),Ie("svg",Kb,[...d[3]||(d[3]=[H("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"},null,-1)])])),d[4]||(d[4]=Rt(" Active Tourneys ",-1)),d[5]||(d[5]=H("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{visibility:"hidden"}},"0",-1))])]),d[7]||(d[7]=H("section",{class:"tournaments-section"},[H("div",{class:"tournaments-grid"})],-1)),d[8]||(d[8]=H("bma-app-foot-branded",null,null,-1)),d[9]||(d[9]=H("bma-app-foot",{"data-selected-item":"foot_all_sports"},null,-1))]))}},Wb={};function Jb(e,t){return Me(),Ie("main",null,[...t[0]||(t[0]=[H("h1",null,"App FAQ",-1)])])}const za=gs(Wb,[["render",Jb]]),Xb={};function Qb(e,t){return Me(),Ie("main",null,[...t[0]||(t[0]=[H("h1",null,"App Help",-1)])])}const Zb=gs(Xb,[["render",Qb]]),Vt=class Vt{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,s,a,r=!0){this.strChat=a,this.isDebug=r;const n=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${n}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(i){Vt.onSSEOpen(i)},this.sseEvent.onmessage=function(i){Vt.onSSEMessage(i)},this.sseEvent.onerror=function(i){Vt.onSSEError(i)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),le.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Vt.sseEvent=null,Vt.strChat=null,Vt.isDebug=!0,Vt.sessionId=null;let Kr=Vt;class ts{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,a){return new Promise((r,n)=>{const o=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});o.onload=r,o.onerror=n,s.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(s,a,r){const n=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});r&&(n.onload=function(){r()}),s.getElementsByTagName("head")[0].appendChild(n)},fAsyncCSS:function(s,a){let r=s.createElement("link");r.rel="stylesheet",r.href=a,s.getElementsByTagName("head")[0].appendChild(r)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let a=s.split(""),r=[],n=!1;return a.forEach(o=>{o=="-"?n=!0:(r.push(n?o.toUpperCase():o),n=!1)}),r.join("")},doDataLayer:function(s,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+a),window.dataLayer&&window.dataLayer.push({event:s,msg:a})},isJSON:function(s){let a=!1;try{a=typeof JSON.parse(s)}catch{}return a=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",r=>{r?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(r.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",r=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let n=neodigmUtils.walkDOM3(r?.target,"n55TypeonClick");n&&neodigmUtils.typeOn(JSON.parse(n))},!0),NeodigmKeylime.subscribe("touchstart",r=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:s=>{let a=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(a=""),a},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((a,r)=>(a<<5)-a+r.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const r=56;a.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=s},i*r),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(r+r)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const n=256;a.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=s},i*n),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*n+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,a,r=neodigmOpt.neodigmMetronome.countTo){const n=[16,r];return[...document.querySelectorAll(s)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-a);neodigmMetronome.unsubscribe(n[1]+i).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&a!=d){let u=l/n[0];u=Math.round(u),c!=0?o.textContent=d<a?d+u:d-u:o.textContent=a}},n[1]+i,n[0])}),neodigmUtils},typeOff:async function(s){let a=document.querySelector(s?.q1st);if(a){let r=a.textContent.length,n=window.getComputedStyle(a),o=Number(n.paddingTop.replace("px",""))+Number(n.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-o+"px");r;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},s.uniqueDelay*r--)}},typeOn:async function(s){let a=document.querySelector(s?.q1st);if(a){a.dataset.n55Typeon=0;let r=s.msg.replaceAll("|","   |   ")+"   ",n=r.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&n.length){let o=a.dataset.n55Typeon=neodigmUtils.f02x(n.length);r=n[o]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(o=>{let i=r[r.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=i,s?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,r.length)}return neodigmUtils},getValJSON:function(s,a){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+a+'": "'+s+'" }')}},walkDOM3:function(s,a,r=!1){let n=null;if(!n&&s?.dataset[a]&&(n=s),!n&&s?.parentNode?.dataset[a]&&(n=s.parentNode),!n&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[a]&&(n=s.parentNode.parentNode),n)return r?n:n.dataset[a]},doSetT:function(s,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,a):setTimeout(s,a)},shake:function(s,a=!0){return[...document.querySelectorAll(s)].forEach(function(r,n){r.classList.add("shake__an"),setTimeout(function(){r.classList.remove("shake__an")},460)}),ts.neodigmUtils},hardReload:function(s="n55reset"){const a=new URLSearchParams(window.location.search);a.set(s,new Date().getTime());const r=a.toString();window.location.search=r}}))}const e0={class:"auth-page"},t0={class:"auth-page-right"},s0={class:"auth-card"},a0={class:"form-group"},r0={class:"form-group"},n0={class:"password-input-wrapper"},o0=["type"],i0={style:{"text-align":"right"}},l0={class:"auth-link-center"},c0={__name:"signin_route",setup(e){const t=ut(),s=be(),a=(p="signin")=>{t.push({name:p})};let r=null;const n=Ke(!1),o=()=>{n.value=!n.value},i=(p=3,f=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const b=Math.floor(Math.random()*p)+f,v=document.querySelector(".img__bg")?.classList;v&&(v.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),v.add(`img__bg--${b}`)),r||(r=le.subscribe("APP__ROUTE_SYNC",(y,m)=>{const h=JSON.parse(m);switch(Object.keys(h)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(v=>v.code==f)[0]?.copy;b=b.filter(v=>v[0]==p.dataset.syncMicrocopyText)[0],b&&(p.textContent=b[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(v=>v.code==f)[0]?.copy;b=b.filter(v=>v[0]==p.dataset.syncMicrocopyPlaceholder)[0],b&&(p.placeholder=b[1])})},c=p=>{ts.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let b=null,v=null;if(!p?.value)b="Please enter your email",v="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)b="Please enter a valid email address",v="#inp__text--email";else if(!f?.value)b="Please enter your password",v="#inp__text--password";else if(f.value.length<10)b="Password must be at least 10 characters",v="#inp__text--password";else{const y={email:p.value,hash:ts.neodigmUtils().genHash(f.value)};Ae.doSignin(y,m=>{const S=(m?.entity?.tags||[]).find(g=>g.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=y.email,s.appSession.session_user.fname=m?.entity?.first,s.appSession.session_user.lname=m?.entity?.last,s.appSession.session_user.userName=S,s.appSession.session_user.name=S,s.appSession.session_user.guid=m?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const g=m?.entity?.guid||s.appSession.session_user.guid;Kr.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",g,s,!0)}})}b&&(c(v),neodigmToast.q(b,"danger"))};return bt(()=>{i(),l()}),(p,f)=>(Me(),Ie("div",e0,[f[10]||(f[10]=wt('<div class="auth-page-left" data-v-536c264d><div class="auth-bg" data-v-536c264d><div class="auth-bg-image" data-v-536c264d></div><div class="auth-bg-image" data-v-536c264d></div><div class="auth-bg-image" data-v-536c264d></div></div><div class="auth-overlay" data-v-536c264d></div><div class="auth-branding-content" data-v-536c264d><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-536c264d><p class="auth-branding-tagline" data-v-536c264d>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-536c264d>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-536c264d> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",t0,[H("div",s0,[f[9]||(f[9]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),H("form",{class:"auth-form",onSubmit:$a(u,["prevent"])},[H("div",a0,[f[4]||(f[4]=H("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),H("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=b=>d())},null,32)]),H("div",r0,[f[5]||(f[5]=H("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),H("div",n0,[H("input",{id:"inp__text--password",type:n.value?"text":"password",autocomplete:"current-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,o0),H("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=b=>o()),tabindex:"-1"},[H("span",{class:Qt(n.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),H("div",i0,[H("a",{class:"auth-link",onClick:f[2]||(f[2]=b=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=H("div",{class:"auth-actions"},[H("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),H("p",l0,[f[6]||(f[6]=H("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Rt()),H("a",{class:"auth-link",onClick:f[3]||(f[3]=b=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},d0=gs(c0,[["__scopeId","data-v-536c264d"]]),u0={class:"auth-page"},p0={__name:"signout_route",setup(e){const t=ut();be();const s=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(r,n)=>(Me(),Ie("div",u0,[n[1]||(n[1]=wt('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",{class:"auth-page-right"},[H("div",{class:"auth-card"},[n[0]||(n[0]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title"},"Sign Out"),H("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),H("div",{class:"auth-actions"},[H("button",{onClick:s,class:"btn btn-red"}," Sign Out "),H("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},f0=gs(p0,[["__scopeId","data-v-15bfefd6"]]),h0={class:"auth-page"},m0={class:"auth-page-right"},g0={class:"auth-card auth-card-wide"},b0={class:"form-row"},_0={class:"form-group"},v0={class:"form-group"},y0={class:"form-group"},w0={class:"form-group"},x0={class:"form-group"},T0={class:"password-input-wrapper"},S0=["type"],E0={class:"form-group"},k0={class:"password-input-wrapper"},A0=["type"],P0={class:"form-group form-group-checkbox"},C0={class:"checkbox-label"},O0={class:"auth-link-center"},$0={__name:"signup_route",setup(e){const t=ut(),s=be(),a=(_="signin")=>{t.push({name:_})};let r=null,n=null;const o=Ke(!1),i=Ke(!1),l=Ke(!1),c=()=>{o.value=!o.value},d=()=>{i.value=!i.value},u=_=>{_.preventDefault(),le.publish(s.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(_=3,S=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":_=3,S=1;break;case"white_label":_=3,S=4;break}const g=Math.floor(Math.random()*_)+S,w=document.querySelector(".img__bg")?.classList;w&&(w.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),w.add(`img__bg--${g}`)),r||(r=le.subscribe("APP__ROUTE_SYNC",(x,T)=>{const E=JSON.parse(T);switch(Object.keys(E)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(_=>{const S=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(w=>w.code==S)[0]?.copy;g=g.filter(w=>w[0]==_.dataset.syncMicrocopyText)[0],g&&(_.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(_=>{const S=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(w=>w.code==S)[0]?.copy;g=g.filter(w=>w[0]==_.dataset.syncMicrocopyPlaceholder)[0],g&&(_.placeholder=g[1])})},b=_=>{ts.neodigmUtils().shake(_||"#inp__text--email")},v=()=>{let _=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(_)},y=_=>{const S=[];return _.length<10&&S.push("at least 10 characters"),/[a-z]/.test(_)||S.push("1 lowercase"),/[A-Z]/.test(_)||S.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(_)||S.push("1 special character"),/[^\x00-\x7F]/.test(_)&&S.push("ASCII characters only"),S},m=async()=>{const _=document.querySelector("#inp__text--username"),S=_?.value?.trim();if(S)try{(await Ae.checkUserName(S)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),_.value="",_.focus())}catch(g){console.error("Error checking username:",g)}},h=()=>{const _=document.querySelector("#inp__text--first-name"),S=document.querySelector("#inp__text--last-name"),g=document.querySelector("#inp__text--email"),w=document.querySelector("#inp__text--username"),x=document.querySelector("#inp__text--password"),T=document.querySelector("#inp__text--verify-password");let E=null,P=null;if(!_?.value)E="Please enter your first name",P="#inp__text--first-name";else if(!S?.value)E="Please enter your last name",P="#inp__text--last-name";else if(!g?.value)E="Please enter your email",P="#inp__text--email";else if(g.value.indexOf("@")===-1||g.value.indexOf(".")===-1)E="Please enter a valid email address",P="#inp__text--email";else if(!w?.value)E="Please enter a user name",P="#inp__text--username";else if(!x?.value)E="Please enter a password",P="#inp__text--password";else{const $=y(x.value);if($.length>0)E="Password must have:|"+$.join(", "),P="#inp__text--password";else if(!T?.value)E="Please verify your password",P="#inp__text--verify-password";else if(x.value!==T.value)E="Passwords do not match",P="#inp__text--verify-password";else{const O=_.value.trim(),L=S.value.trim(),G=[{userName:w.value.trim(),ts:Date.now()}],X={email:g.value,hash:ts.neodigmUtils().genHash(x.value),first:O,last:L,company:"",phone:"",tags:G};Ae.doSignup(X,ae=>{ae.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}E&&(b(P),neodigmToast.q(E,"danger"))};return bt(()=>{p(),f(),n||(n=le.subscribe(s.hierTopics.ROUTE__SIGNUP__TERMS,(_,S)=>{JSON.parse(S).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(_,S)=>(Me(),Ie("div",h0,[S[23]||(S[23]=wt('<div class="auth-page-left" data-v-e1a086be><div class="auth-bg" data-v-e1a086be><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div></div><div class="auth-overlay" data-v-e1a086be></div><div class="auth-branding-content" data-v-e1a086be><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-e1a086be><p class="auth-branding-tagline" data-v-e1a086be>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-e1a086be>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-e1a086be> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",m0,[H("div",g0,[H("form",{class:"auth-form",onSubmit:$a(h,["prevent"])},[H("div",b0,[H("div",_0,[S[12]||(S[12]=H("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),H("input",{id:"inp__text--first-name",type:"text",autocomplete:"given-name","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"First name",onKeyup:S[0]||(S[0]=Yt(g=>h(),["enter"]))},null,32)]),H("div",v0,[S[13]||(S[13]=H("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),H("input",{id:"inp__text--last-name",type:"text",autocomplete:"family-name","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Last name",onKeyup:S[1]||(S[1]=Yt(g=>h(),["enter"]))},null,32)])]),H("div",y0,[S[14]||(S[14]=H("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),H("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:S[2]||(S[2]=g=>v()),onKeyup:S[3]||(S[3]=Yt(g=>h(),["enter"]))},null,32)]),H("div",w0,[S[15]||(S[15]=H("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),H("input",{id:"inp__text--username",type:"text",autocomplete:"username","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:S[4]||(S[4]=g=>m()),onKeyup:S[5]||(S[5]=Yt(g=>h(),["enter"]))},null,32)]),H("div",x0,[S[16]||(S[16]=H("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),H("div",T0,[H("input",{id:"inp__text--password",type:o.value?"text":"password",autocomplete:"new-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:S[6]||(S[6]=Yt(g=>h(),["enter"]))},null,40,S0),H("button",{type:"button",class:"password-toggle-btn",onClick:S[7]||(S[7]=g=>c()),tabindex:"-1"},[H("span",{class:Qt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),S[17]||(S[17]=H("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),H("div",E0,[S[18]||(S[18]=H("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),H("div",k0,[H("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:S[8]||(S[8]=Yt(g=>h(),["enter"]))},null,40,A0),H("button",{type:"button",class:"password-toggle-btn",onClick:S[9]||(S[9]=g=>d()),tabindex:"-1"},[H("span",{class:Qt(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),H("div",P0,[H("label",C0,[na(H("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":S[10]||(S[10]=g=>l.value=g),class:"terms-checkbox"},null,512),[[ch,l.value]]),S[19]||(S[19]=H("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),H("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),S[22]||(S[22]=H("div",{class:"auth-actions"},[H("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),H("p",O0,[S[20]||(S[20]=H("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),S[21]||(S[21]=Rt()),H("a",{class:"auth-link",onClick:S[11]||(S[11]=g=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},M0=gs($0,[["__scopeId","data-v-e1a086be"]]),R0={class:"auth-page"},L0={class:"auth-page-right"},D0={class:"auth-card"},N0={class:"form-group"},I0={class:"auth-link-center"},B0={__name:"forgot_route",setup(e){const t=ut(),s=be(),a=(c="signin_route")=>{t.push({name:c})};let r=null;const n=(c=3,d=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),r||(r=le.subscribe("APP__ROUTE_SYNC",(f,b)=>{const v=JSON.parse(b);switch(Object.keys(v)[0]){case"Motif":n();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},i=c=>{ts.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Ae.genHeaders()};fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(u),neodigmToast.q(d,"danger"))};return bt(()=>{n(),o()}),(c,d)=>(Me(),Ie("div",R0,[d[7]||(d[7]=wt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",L0,[H("div",D0,[d[6]||(d[6]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),H("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),H("form",{class:"auth-form",onSubmit:$a(l,["prevent"])},[H("div",N0,[d[2]||(d[2]=H("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),H("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Yt(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=H("div",{class:"auth-actions"},[H("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),H("p",I0,[d[3]||(d[3]=H("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Rt()),H("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},F0={class:"auth-page"},z0={class:"auth-page-right"},H0={class:"auth-card"},j0={class:"form-group"},U0={class:"password-input-wrapper"},q0=["type"],G0={class:"form-group"},V0={class:"password-input-wrapper"},K0=["type"],Y0={__name:"resethash_route",setup(e){const t=ut(),s=be(),a=()=>{t.push({name:"home_route"})};let r=null;const n=Ke(!1),o=Ke(!1),i=()=>{n.value=!n.value},l=()=>{o.value=!o.value},c=(b=3,v=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":b=3,v=1;break;case"white_label":b=3,v=4;break}const y=Math.floor(Math.random()*b)+v,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${y}`)),r||(r=le.subscribe("APP__ROUTE_SYNC",(h,_)=>{const S=JSON.parse(_);switch(Object.keys(S)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(b=>{const v=s.appCLIFeatures?.features?.lang?.state;let y=s.appMeta.microcopy.language.filter(m=>m.code==v)[0]?.copy;y=y.filter(m=>m[0]==b.dataset.syncMicrocopyText)[0],y&&(b.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(b=>{const v=s.appCLIFeatures?.features?.lang?.state;let y=s.appMeta.microcopy.language.filter(m=>m.code==v)[0]?.copy;y=y.filter(m=>m[0]==b.dataset.syncMicrocopyPlaceholder)[0],y&&(b.placeholder=y[1])})},u=b=>{ts.neodigmUtils().shake(b||"#inp__text--password")},p=b=>{const v=[];return b.length<10&&v.push("at least 10 characters"),/[a-z]/.test(b)||v.push("1 lowercase"),/[A-Z]/.test(b)||v.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(b)||v.push("1 special character"),/[^\x00-\x7F]/.test(b)&&v.push("ASCII characters only"),v},f=()=>{const b=document.querySelector("#inp__text--password"),v=document.querySelector("#inp__text--verify-password");let y=null,m=null;if(!b?.value)y="Please enter a password",m="#inp__text--password";else{const h=p(b.value);if(h.length>0)y="Password must have:|"+h.join(", "),m="#inp__text--password";else if(!v?.value)y="Please verify your password",m="#inp__text--verify-password";else if(b.value!==v.value)y="Passwords do not match",m="#inp__text--verify-password";else{const _=s.appSession.session_user.email||"",S={email:_,hash:ts.neodigmUtils().genHash(b.value),modified_by:_},g={method:"POST",body:JSON.stringify(S),headers:Ae.genHeaders()};fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/acctEntity/resetHash",g).then(w=>w.json()).then(w=>{w.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(w=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}y&&(u(m),neodigmToast.q(y,"danger"))};return bt(()=>{c(),d()}),(b,v)=>(Me(),Ie("div",F0,[v[9]||(v[9]=wt('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",z0,[H("div",H0,[v[8]||(v[8]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),H("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),H("form",{class:"auth-form",onSubmit:$a(f,["prevent"])},[H("div",j0,[v[4]||(v[4]=H("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),H("div",U0,[H("input",{id:"inp__text--password",type:n.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:v[0]||(v[0]=Yt(y=>f(),["enter"]))},null,40,q0),H("button",{type:"button",class:"password-toggle-btn",onClick:v[1]||(v[1]=y=>i()),tabindex:"-1"},[H("span",{class:Qt(n.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),v[5]||(v[5]=H("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),H("div",G0,[v[6]||(v[6]=H("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),H("div",V0,[H("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:v[2]||(v[2]=Yt(y=>f(),["enter"]))},null,40,K0),H("button",{type:"button",class:"password-toggle-btn",onClick:v[3]||(v[3]=y=>l()),tabindex:"-1"},[H("span",{class:Qt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),H("div",{class:"auth-actions"},[v[7]||(v[7]=H("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),H("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},W0=gs(Y0,[["__scopeId","data-v-3ae2c87b"]]),J0={class:"auth-page"},X0={class:"auth-page-right"},Q0={class:"auth-card"},Z0={class:"verification-content"},e_={class:"timer-display"},t_={__name:"verf_link_route",setup(e){const t=ut();Ko(),be();const s=Ke(7200);let a=null;const r=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},n=()=>{a=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return bt(()=>{n()}),Ws(()=>{a&&clearInterval(a)}),(o,i)=>(Me(),Ie("div",J0,[i[4]||(i[4]=wt('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",X0,[H("div",Q0,[i[3]||(i[3]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title"},"Check Your Email"),H("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),H("div",Z0,[i[0]||(i[0]=H("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=H("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=H("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),H("div",e_,jc(r(s.value)),1)])])])]))}},s_=gs(t_,[["__scopeId","data-v-d92b2a33"]]);class a_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-email","data-active-count","data-played-count","data-trophy-count"]}connectedCallback(){this._unsub=ke.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",s=this.getAttribute("data-email")||"",a=this.getAttribute("data-active-count")||"0",r=this.getAttribute("data-played-count")||"0",n=this.getAttribute("data-trophy-count")||"0",o=t.charAt(0).toUpperCase(),i=new Date,l=i.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),c=i.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"}),d=`${l} · ${c}`;this.shadowRoot.innerHTML=`
            <style>
                ${De()}
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
                        <span class="hero__kpi-value">${r}</span>
                        <span class="hero__kpi-label">Played</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${n}</span>
                        <span class="hero__kpi-label">Trophies</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-profile-hero",a_);class r_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-played","data-first-place","data-trophies","data-favorite-sport","data-favorite-sport-group","data-win-rate","data-win-loss-record"]}connectedCallback(){this._unsub=ke.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-played")||"0",s=this.getAttribute("data-first-place")||"0",a=this.getAttribute("data-trophies")||"0",r=this.getAttribute("data-favorite-sport")||"—",n=this.getAttribute("data-favorite-sport-group")||"",o=this.getAttribute("data-win-rate")||"—",i=this.getAttribute("data-win-loss-record")||"",l=n?`<bma-sport-icon data-sport-group="${n.toLowerCase()}" style="width:20px;height:20px;"></bma-sport-icon>`:"";this.shadowRoot.innerHTML=`
            <style>
                ${De()}
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
                    <span class="row__value row__value--sport">${l}<span>${r}</span></span>
                </div>
                <div class="row">
                    <span class="row__label">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                        Bet Win Rate
                    </span>
                    <span class="row__value">${o}${i?`<span class="row__sub">${i}</span>`:""}</span>
                </div>
            </div>
        `}}customElements.define("bma-profile-stats",r_);class n_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-contests"]}connectedCallback(){this._unsub=ke.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}get contests(){const t=this.getAttribute("data-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ve.find(a=>a.key===t)?.group||""}render(){const t=this.contests,s=n=>`<span class="chip chip--${n==="LOCKED"?"locked":n==="UPCOMING"?"upcoming":n==="COMPLETED"?"completed":"default"}">${n==="LOCKED"?"Active":n==="UPCOMING"?"Upcoming":n==="COMPLETED"?"Completed":n}</span>`,a=n=>n===1?'<div class="card__trophy" style="background-image: var(--trophy-gold-tall);"></div>':n===2?'<div class="card__trophy" style="background-image: var(--trophy-silver-tall);"></div>':n===3?'<div class="card__trophy" style="background-image: var(--trophy-bronze-tall);"></div>':"",r=t.map(n=>{const o=n.sports?.[0]||"",i=this._sportGroup(o),l=i?`<bma-sport-icon data-sport-group="${i}" style="width:18px;height:18px;flex-shrink:0;opacity:0.7;"></bma-sport-icon>`:"",c=n.startTime?Ys.formatDateLocal(n.startTime,{month:"short",day:"numeric"}):"",d=n.placement?a(n.placement):"";return`
                <div class="card" data-contest-id="${n.id||""}">
                    <div class="card__top">
                        <div class="card__info">
                            ${l}
                            <span class="card__name">${n.name||"Tournament"}</span>
                        </div>
                        <div class="card__right">
                            ${s(n.status)}
                            <svg class="card__arrow" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                        </div>
                    </div>
                    <div class="card__bottom">
                        <span class="card__meta">${c}${c&&n.sport?" · ":""}${n.sport||""}</span>
                        ${d}
                    </div>
                </div>
            `}).join("");this.shadowRoot.innerHTML=`
            <style>
                ${De()}
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
                    background: rgba(255, 255, 255, 0.06);
                    color: rgba(255, 255, 255, 0.55);
                }
                .chip--default {
                    background: rgba(255, 255, 255, 0.06);
                    color: rgba(255, 255, 255, 0.45);
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
                .private-upsell {
                    display: flex;
                    align-items: flex-start;
                    gap: 12px;
                    padding: 16px;
                    background: rgba(247, 198, 13, 0.04);
                    border-top: 1px solid rgba(247, 198, 13, 0.1);
                }
                .private-upsell__icon {
                    flex-shrink: 0;
                    color: var(--status-locked-text, #F7C60D);
                    opacity: 0.8;
                    margin-top: 2px;
                }
                .private-upsell__text {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .private-upsell__text strong {
                    font-size: 0.85rem;
                    color: var(--status-locked-text, #F7C60D);
                }
                .private-upsell__text p {
                    margin: 0;
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.55);
                    line-height: 1.4;
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
            <div class="panel">
                <div class="panel__header">
                    <svg class="panel__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    <span class="panel__title">Private Tourney History</span>
                </div>
                <div class="private-upsell">
                    <svg class="private-upsell__icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>
                    <div class="private-upsell__text">
                        <strong>Private Tournaments Coming Soon</strong>
                        <p>Create custom contests, invite friends, set your own rules and compete in private leagues.</p>
                    </div>
                </div>
            </div>

            <div class="panel" style="margin-top: 16px;">
                <div class="panel__header">
                    <svg class="panel__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
                    <span class="panel__title">Public Tourney History</span>
                </div>
                ${t.length>0?r:'<div class="empty">No contest history yet</div>'}
            </div>
        `,this.shadowRoot.querySelectorAll(".card[data-contest-id]").forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.contestId;o&&this.dispatchEvent(new CustomEvent("contest-click",{detail:{contestGuid:o},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-history",n_);class o_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-active-section","data-sections"]}connectedCallback(){this._unsub=ke.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}get activeSection(){return this.getAttribute("data-active-section")||"overview"}render(){const t=this.activeSection,o=((this.getAttribute("data-sections")||"profile")==="top-players"?[{id:"overall",label:"Overall",icon:'<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>'},{id:"earnings",label:"TD$ Won",icon:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>'}]:[{id:"overview",label:"Overview",icon:'<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>'},{id:"contests",label:"Tourneys",icon:'<path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>'},{id:"guide",label:"How to Play",icon:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>'},{id:"account",label:"Account",icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',desktopOnly:!0}]).map(i=>`
            <button class="nav-item ${i.id===t?"nav-item--active":""}${i.desktopOnly?" nav-item--desktop-only":""}" data-section="${i.id}" type="button">
                <svg class="nav-item__icon" viewBox="0 0 24 24" fill="currentColor">${i.icon}</svg>
                <span class="nav-item__label">${i.label}</span>
            </button>
        `).join("");this.shadowRoot.innerHTML=`
            <style>
                ${De()}
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
        `,this.shadowRoot.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.section;this.setAttribute("data-active-section",l),this.dispatchEvent(new CustomEvent("section-change",{detail:{section:l},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-nav",o_);class i_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=ke.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}render(){this.shadowRoot.innerHTML=`
            <style>
                ${De()}
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
        `;const t=this.shadowRoot.getElementById("guide-modes-rail"),s=this.shadowRoot.querySelectorAll("#guide-modes-dots .modes-dot"),a=this.shadowRoot.getElementById("guide-modes-prev"),r=this.shadowRoot.getElementById("guide-modes-next");if(t&&s.length){const n=()=>(t.firstElementChild?.offsetWidth||300)+12;t.addEventListener("scroll",()=>{const o=Math.round(t.scrollLeft/n());s.forEach((i,l)=>i.classList.toggle("modes-dot--active",l===o))},{passive:!0}),s.forEach((o,i)=>{o.addEventListener("click",()=>{t.scrollTo({left:i*n(),behavior:"smooth"})})}),a&&a.addEventListener("click",()=>{t.scrollBy({left:-n(),behavior:"smooth"})}),r&&r.addEventListener("click",()=>{t.scrollBy({left:n(),behavior:"smooth"})})}}}customElements.define("bma-profile-guide",i_);const l_={class:"profile-layout"},c_={class:"profile-shell"},d_={class:"profile-sidebar"},u_=["data-active-section"],p_={class:"profile-content"},f_={class:"profile-panel"},h_={class:"profile-panel"},m_={class:"profile-panel"},g_={class:"profile-panel profile-panel--account-desktop"},b_={class:"account-panel"},__={class:"mobile-account-bar"},v_={__name:"profile_route",setup(e){const t=ut(),s=be(),a=Ke("overview"),r=Ke(!1),n=()=>{t.push({name:"home_route"})},o=u=>{a.value=u.detail?.section||"overview"},i=u=>{const p=u.detail?.contestGuid;p&&(window._pendingTournGuid=p,t.push({name:"home_route"}))},l=()=>{const u=s.appSession?.session_user||{},p=u.guid,b=(s.coreTourn.length>0?s.coreTourn[s.coreTourn.length-1].data:[]).filter(O=>(O.entities?.guids||[]).includes(p)),v=b.filter(O=>["LOCKED","UPCOMING"].includes(O.status||O.class)),y=b.filter(O=>(O.status||O.class)==="COMPLETED");let m=0,h=0,_=0;b.forEach(O=>{(Array.isArray(O.tags)?O.tags:[]).forEach(G=>{if(!G||typeof G!="object")return;const X=(G.entity_guid===p?G.badge:null)||(typeof G[p]=="string"?G[p]:null);typeof X=="string"&&X.startsWith("--badge__ribbon--")&&(X==="--badge__ribbon--gold"?m++:X==="--badge__ribbon--silver"?h++:X==="--badge__ribbon--bronze"&&_++)})});const S={};b.forEach(O=>{(O.sports_allowed||[]).forEach(L=>{const X=Ve.find(ae=>ae.key===L.key)?.group||"Other";S[X]=(S[X]||0)+1})});let g="",w="",x=0;Object.entries(S).forEach(([O,L])=>{L>x&&(x=L,g=O,w=O)});const T=xe._betStatsCache?.stats||null;let E="—",P="";if(T){const O=T.wins+T.losses;O>0&&(E=Math.round(T.wins/O*100)+"%",P=`${T.wins}-${T.losses}`)}const $=[...b].sort((O,L)=>new Date(L.status_time||0)-new Date(O.status_time||0)).slice(0,20).map(O=>{let L=null;(Array.isArray(O.tags)?O.tags:[]).forEach(K=>{if(!K||typeof K!="object")return;const V=(K.entity_guid===p?K.badge:null)||(typeof K[p]=="string"?K[p]:null);V==="--badge__ribbon--gold"?L=1:V==="--badge__ribbon--silver"?L=2:V==="--badge__ribbon--bronze"&&(L=3)});const X=O.sports_allowed?.[0]?.key||"",ae=Ve.find(K=>K.key===X);return{id:O.guid,name:O.caption||"Tournament",sport:ae?.title||"",sports:[X],status:O.status||O.class||"",placement:L,startTime:O.window_start_time}});return{username:u.userName||u.name||"Player",email:u.email||"",activeCount:v.length,playedCount:y.length,trophyCount:m+h+_,gold:m,silver:h,bronze:_,firstPlace:m,favSport:g,favGroup:w,winRate:E,record:P,recentContests:$}},c=()=>{const u=l(),p=document.querySelector("bma-profile-hero");p&&(p.setAttribute("data-username",u.username),p.setAttribute("data-email",u.email),p.setAttribute("data-active-count",String(u.activeCount)),p.setAttribute("data-played-count",String(u.playedCount)),p.setAttribute("data-trophy-count",String(u.trophyCount)));const f=document.querySelector("bma-profile-stats");f&&(f.setAttribute("data-played",String(u.playedCount)),f.setAttribute("data-first-place",String(u.firstPlace)),f.setAttribute("data-trophies",String(u.trophyCount)),f.setAttribute("data-favorite-sport",u.favSport),f.setAttribute("data-favorite-sport-group",u.favGroup),f.setAttribute("data-win-rate",u.winRate),f.setAttribute("data-win-loss-record",u.record));const b=document.querySelector("bma-profile-history");b&&b.setAttribute("data-contests",JSON.stringify(u.recentContests));const v=document.getElementById("profile-trophy-pack");v&&(v.innerHTML=`
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
      `)};let d=null;return bt(async()=>{if(!s.appSession.session_user.authenticated){t.push({name:"signin_route"});return}c();const u=s.appSession?.session_user?.guid;u&&xe._ensureBetStatsCache(u).then(p=>{p&&c()}),d=le.subscribe(s.hierTopics.ROUTE__HOME_HYDRATE,()=>{c()})}),Ws(()=>{d&&le.unsubscribe(d)}),(u,p)=>(Me(),Ie("main",l_,[H("div",{class:"profile-header"},[H("button",{class:"profile-header__back",onClick:n,"aria-label":"Back"},[...p[7]||(p[7]=[H("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[H("polyline",{points:"15 18 9 12 15 6"})],-1)])]),p[8]||(p[8]=H("h1",{class:"profile-header__title"},"My Profile",-1))]),p[18]||(p[18]=H("bma-profile-hero",null,null,-1)),H("div",c_,[H("aside",d_,[H("bma-profile-nav",{"data-active-section":a.value,onSectionChange:o},null,40,u_)]),H("div",p_,[na(H("section",f_,[...p[9]||(p[9]=[H("div",{id:"profile-trophy-pack",class:"trophy-pack"},null,-1),H("bma-profile-stats",null,null,-1)])],512),[[Ia,a.value==="overview"]]),na(H("section",h_,[H("bma-profile-history",{onContestClick:i},null,32)],512),[[Ia,a.value==="contests"]]),na(H("section",m_,[...p[10]||(p[10]=[H("bma-profile-guide",null,null,-1)])],512),[[Ia,a.value==="guide"]]),na(H("section",g_,[H("div",b_,[H("button",{class:"account-btn",onClick:p[0]||(p[0]=f=>lt(le).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[11]||(p[11]=[H("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[H("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Rt(" Change Password ",-1)])]),H("button",{class:"account-btn account-btn--signout",onClick:p[1]||(p[1]=f=>lt(le).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[12]||(p[12]=[H("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[H("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Rt(" Sign Out ",-1)])])])],512),[[Ia,a.value==="account"]])])]),H("div",__,[r.value?(Me(),Ie("div",{key:0,class:"mobile-account-scrim",onClick:p[2]||(p[2]=f=>r.value=!1)})):_i("",!0),r.value?(Me(),Ie("div",{key:1,class:"mobile-account-bar__panel",onClick:p[5]||(p[5]=$a(()=>{},["stop"]))},[H("button",{class:"account-btn",onClick:p[3]||(p[3]=f=>lt(le).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[13]||(p[13]=[H("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[H("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Rt(" Change Password ",-1)])]),H("button",{class:"account-btn account-btn--signout",onClick:p[4]||(p[4]=f=>lt(le).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[14]||(p[14]=[H("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[H("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Rt(" Sign Out ",-1)])])])):_i("",!0),H("div",{class:"mobile-account-bar__trigger",onClick:p[6]||(p[6]=f=>r.value=!r.value)},[p[16]||(p[16]=H("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[H("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})],-1)),p[17]||(p[17]=H("span",null,"Account",-1)),(Me(),Ie("svg",{class:Qt(["mobile-account-bar__chevron",r.value?"mobile-account-bar__chevron--open":""]),viewBox:"0 0 24 24",fill:"currentColor"},[...p[15]||(p[15]=[H("path",{d:"M7 10l5 5 5-5z"},null,-1)])],2))])])]))}};class y_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-rank","data-trophies","data-td-dollars"]}connectedCallback(){this._unsub=ke.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",s=this.getAttribute("data-rank")||"—",a=this.getAttribute("data-trophies")||"0",r=parseFloat(this.getAttribute("data-td-dollars")||"0"),n=r>=1e3?`${Math.round(r/100)/10}K`:Math.round(r).toLocaleString(),o=t.charAt(0).toUpperCase();this.shadowRoot.innerHTML=`
            <style>
                ${De()}
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
                <span class="hero__label">Your Rank</span>
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
                        <span class="hero__kpi-value">TD$ ${n}</span>
                        <span class="hero__kpi-label">Total Earned</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-top-players-hero",y_);const w_={class:"top-players-layout"},x_={class:"top-players-shell"},T_={class:"top-players-sidebar"},S_=["data-active-section"],E_={__name:"top_players_route",setup(e){const t=ut(),s=be(),a=Ke("overall"),r=()=>{t.push({name:"home_route"})},n=l=>{const c=l.detail?.section||"overall";a.value=c;const d=document.querySelector(`#global-leaderboard-container .glb__tab[data-tab="${c}"]`);d&&d.click()},o=l=>{const c=s.appSession?.session_user?.guid,d=s.appSession?.session_user?.userName||s.appSession?.session_user?.name||"Player",u=l.find(f=>f.user_guid===c),p=document.querySelector("bma-top-players-hero");if(p)if(u){const f=l.indexOf(u)+1;p.setAttribute("data-username",u.username||d),p.setAttribute("data-rank",String(f)),p.setAttribute("data-trophies",String(u.tournaments_won||0)),p.setAttribute("data-td-dollars",String(u.total_payout||0))}else p.setAttribute("data-username",d),p.setAttribute("data-rank","—"),p.setAttribute("data-trophies","0"),p.setAttribute("data-td-dollars","0")},i=async()=>{try{const l=xe._globalLBCache?.ALL;let c;l?.data&&Date.now()-l.ts<300*1e3?c=l.data:(c=await Ae.fetchAllTimeLeaderboard("ALL",100,"td"),xe._globalLBCache&&(xe._globalLBCache.ALL={data:c,ts:Date.now(),inflight:!1})),o(c?.data||[]),typeof window._renderTopPlayers=="function"&&await window._renderTopPlayers("ALL")}catch(l){console.warn("[top_players_route] load failed",l)}};return bt(()=>{if(!s.appSession.session_user.authenticated){t.push({name:"signin_route"});return}requestAnimationFrame(()=>{i()})}),(l,c)=>(Me(),Ie("main",w_,[H("div",{class:"top-players-header"},[H("button",{class:"top-players-header__back",onClick:r,"aria-label":"Back"},[...c[0]||(c[0]=[H("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[H("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=H("h1",{class:"top-players-header__title"},"Top Players",-1))]),c[3]||(c[3]=H("bma-top-players-hero",null,null,-1)),H("div",x_,[H("aside",T_,[H("bma-profile-nav",{"data-active-section":a.value,onSectionChange:n,"data-sections":"top-players"},null,40,S_)]),c[2]||(c[2]=H("div",{class:"top-players-content"},[H("div",{id:"global-leaderboard-container"},[H("div",{class:"leaderboard-empty"},[H("p",null,"Loading leaderboard...")])])],-1))])]))}},k_={class:"play-cntr","data-current-tourn-guid":"","data-current-tourn-action":""},A_={id:"play-section-PLAY",class:"play-section",style:{display:"none","padding-top":"8px"}},P_={class:"bet-grid"},C_={class:"bet-grid__slip","data-active-bet-tab":"MYBETS"},O_={class:"bet-grid__slip-BETSLIP",style:{display:"none"},"data-bets-valid":"false"},$_=["innerHTML"],M_={__name:"play_route",setup(e){const t=ut(),s=Ko(),a=be(),r=window.EMPTY_BETSLIP_HTML||"",n=()=>{t.push({name:"home_route"})},o=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__toggle-container"),u=document.querySelector(".bet-grid__select"),p=document.querySelector(".bet-grid__slip");if(!l||!c||!d||!u||!p){console.warn("[play_route] initBetGridToggle: missing elements");return}const f=window.matchMedia("(orientation: portrait)").matches,b=window.matchMedia("(max-width: 768px)").matches,v=m=>{u.classList.toggle("collapsed",m),p.classList.toggle("collapsed",!m),c.textContent=m?"Close Bet Slip":"Open Bet Slip",d.classList.toggle("bet-grid__toggle-container--open",m)};(f||b)&&v(!1);let y=null;l.addEventListener("pointerdown",m=>{y=m.pointerId}),l.addEventListener("pointerup",m=>{if(m.pointerId!==y)return;y=null;const h=!p.classList.contains("collapsed");v(!h)}),l.addEventListener("pointercancel",()=>{y=null}),l.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation()})},i=l=>{const c=l.target.closest("[data-publish-route-home], [data-sodapop-close]");c&&c.dataset?.publishRouteHome?.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&(document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(u=>{u.classList.toggle("dash-nav__btn--active",u===c)}),le.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`))};return bt(async()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}const l=s.query.guid||"",c=s.query.action||"INFO";if(!l){console.warn("[play_route] No tournament guid provided"),t.push({name:"home_route"});return}const d=a.appSession?.session_user?.guid;if(d)try{const u=await Ae.fetchBetSlips(d,l);u?.rows&&(a.pushcoreBetSlip({timestamp:Date.now(),source:"API",data:u.rows}),setTimeout(()=>{le.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(u))},300))}catch(u){console.warn("[play_route] fetchBetSlips failed:",u)}document.body.classList.add("route-locked"),document.addEventListener("click",i),window.initBetGridToggle=o,requestAnimationFrame(()=>{typeof xe.initPlayScreen=="function"&&xe.initPlayScreen(l,c)})}),Ws(()=>{document.body.classList.remove("route-locked"),document.removeEventListener("click",i),delete window.initBetGridToggle;const l=document.querySelector(".play-cntr");l&&(l.dataset.currentTournGuid="",l.dataset.currentTournAction="")}),(l,c)=>(Me(),Ie("article",k_,[H("div",{class:"head-caption tourn-dashboard"},[H("div",{class:"head-caption__back",onClick:n,role:"button",tabindex:"0","aria-label":"Back"},[...c[0]||(c[0]=[H("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[H("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=H("section",{class:"head-caption__content"},[H("h3",{id:"pop-play__tourn-caption--id",class:"pop-play__tourn-caption"},"Tournament"),H("p",{id:"pop-play__tourn-tagline--id",class:"pop-play__tourn-tagline"},"Loading...")],-1))]),c[6]||(c[6]=wt('<div class="dash-stats"><div class="dash-stat"><span class="dash-stat__label">TD$ Balance</span><span class="dash-stat__value" id="dashboard-td-balance">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--balance" style="width:100%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">At Risk</span><span class="dash-stat__value dash-stat__value--pending" id="dashboard-td-pending">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--pending" style="width:0%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">Rank</span><span class="dash-stat__value" id="dashboard-rank"><span class="tourn-dashboard__rank-text">-/-</span><span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--participants" style="width:0%;"></div></div></div></div><nav class="dash-nav"><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><span>Info</span></button><button id="btn-join__play--id" class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="visibility:hidden;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><span>Play</span></button><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"></path></svg><span>Leaderboard</span></button></nav><div id="play-section-INFO" class="play-section play-section--active"><div id="pop-play__caro-info-summary2--id"></div><div id="pop-play__caro-info-summary1--id"></div><div id="pop-play__caro-info-list--id"></div></div>',3)),H("div",A_,[H("article",P_,[c[5]||(c[5]=wt('<section class="bet-grid__select"><div id="game-mode-progress" style="display:none;"></div><article class="select-grid"></article></section><div class="bet-grid__toggle-container"><button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle bet slip"><span class="bet-grid__toggle-summary"><span class="bet-grid__toggle-count" id="bet-grid-toggle-count">0 bets</span><span class="bet-grid__toggle-sep">·</span><span class="bet-grid__toggle-stake" id="bet-grid-toggle-stake">TD$ 0</span></span><span class="bet-grid__toggle-action"><span class="bet-grid__toggle-text">Open Bet Slip</span><svg class="bet-grid__toggle-chevron" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 14l5-5 5 5z"></path></svg></span></button></div>',2)),H("aside",C_,[c[3]||(c[3]=H("nav",{class:"bet-slip__tabs"},[H("button",{class:"bet-slip-tab","data-bet-tab":"BETSLIP"},"Bet Slip"),H("button",{class:"bet-slip-tab","data-bet-tab":"MYBETS"},"My Bets")],-1)),H("section",O_,[H("div",{class:"bet-grid__slip-BETSLIP-content",innerHTML:lt(r)},null,8,$_),c[2]||(c[2]=wt('<output class="bet-grid__slip-BETSLIP-summary"><div class="summary-row summary-row--labels"><div class="summary-cell">TD$</div><div class="summary-cell">Stake</div><div class="summary-cell">Payout</div></div><div class="summary-row summary-row--values"><div id="summary-balance" class="summary-cell">0.00</div><div id="summary-stake" class="summary-cell">0.00</div><div id="summary-payout" class="summary-cell">0.00</div></div></output><button class="bet-grid__slip-BETSLIP-cta" data-publish-betslip="COREBETSLIP.BET">BET!</button>',2))]),c[4]||(c[4]=H("div",{class:"bet-grid__slip-MYBETS"},null,-1))])])]),c[7]||(c[7]=H("div",{id:"play-section-LEADERBOARD",class:"play-section",style:{display:"none"}},[H("div",{id:"pop-play__caro-leaderboard--id"})],-1)),c[8]||(c[8]=H("br",null,null,-1))]))}},_a=$m({history:dm(),routes:[{path:"/",name:"splash_route",component:ll},{path:"/splash_route",name:"splash_route",component:ll},{path:"/error_route",name:"error_route",component:za},{path:"/forgot_route",name:"forgot_route",component:B0},{path:"/resetforgot_route",name:"resetforgot_route",component:za},{path:"/resethash_route",name:"resethash_route",component:W0},{path:"/signin_route",name:"signin_route",component:d0},{path:"/signout_route",name:"signout_route",component:f0},{path:"/signup_route",name:"signup_route",component:M0},{path:"/verf_link_route",name:"verf_link_route",component:s_},{path:"/offline_route",name:"offline_route",component:za},{path:"/home_route",name:"home_route",component:Yb},{path:"/profile_route",name:"profile_route",component:v_},{path:"/top_players_route",name:"top_players_route",component:E_},{path:"/play_route",name:"play_route",component:M_},{path:"/appFAQ",name:"appFAQ",component:za},{path:"/appHelp",name:"appHelp",component:Zb}]});_a.beforeEach((e,t,s)=>{if(e.query.brand!==void 0){const a=e.query.brand;a==="null"||a===""?Aa.clearBrand():Aa.setBrand(a);const r={...e.query};delete r.brand,s({...e,query:r,replace:!0})}else s()});class R_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=ke.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,s,a){s!==a&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),s=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(s)?s[1]?.length||0:s.guids?.length||0,max:Array.isArray(s)?parseInt(s[0]?.max||0):s.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return ke.theme}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return!1;try{const a=this.getAttribute("data-bma-tourn-entities"),r=a?JSON.parse(a):{guids:[]};return(Array.isArray(r)?r[1]||[]:r.guids||[]).includes(s)}catch{return!1}}getUserTrophy(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;try{const a=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const r of a){if(typeof r!="object"||!r)continue;let n=null;if(r.entity_guid===s&&r.badge?n=r.badge:r[s]&&(n=r[s]),n?.includes("gold"))return"gold";if(n?.includes("silver"))return"silver";if(n?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let s=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z"));const a=Date.now(),r=s.getTime()-a;if(r<=0)return null;const n=Math.floor(r/864e5),o=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4);return n>0?`${n}d ${o}h`:o>0?`${o}h ${i}m`:`${i}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const s=this.getCountdown();t.textContent=s||"",s||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},s=this.sportsAllowed;if(!Array.isArray(s)||s.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const a=Math.min(s.length,3);let r="";for(let n=0;n<a;n++){const o=s[n].key||s[n],i=Ve.find(d=>d.key===o),l=i?i.group:"default",c=t[o]||o.replace(/^[a-z]+_/,"").toUpperCase();r+=`<span class="lc__sport-item"><bma-sport-icon sport="${o}" data-sport-group="${l}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return s.length>3&&(r+=`<span class="lc__sport-count" data-sport-overflow="true">+${s.length-3}</span>`),r}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(s=>{const a=s.key||s;return t[a]||a.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,s,a,r){const n=(t-s)/2,o=2*Math.PI*n,i=o-a/100*o,l=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${l}" cy="${l}" r="${n}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${s}" />
            <circle cx="${l}" cy="${l}" r="${n}"
                fill="none" stroke="${r}" stroke-width="${s}"
                stroke-linecap="round"
                stroke-dasharray="${o}"
                stroke-dashoffset="${i}"
                transform="rotate(-90 ${l} ${l})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation(),this.dispatchAction(s.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",s=>{s.stopPropagation();const a=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(a,"info")})}render(){const t=this.isUserParticipating(),s=this.getUserTrophy(),a=this.status.toLowerCase(),r=t&&this.status!=="COMPLETED",n=!t&&this.status==="UPCOMING";this.userRank;const o=(this.entities.current/(this.entities.max||1)*100).toFixed(1);this.getCountdown();const l={upcoming:"#00E676",locked:"#F7C60D",completed:"#CD5659"}[a]||"#969696",c=52,d=3,u=m=>m.length>7?"sm":m.length>5?"md":"lg",p=`${this.entities.current}/${this.entities.max}`,f=u(p);let b="";s?b=`<span class="ring__trophy ring__trophy--${s}"></span>`:b=`<span class="ring__entrants ring__entrants--${f}">${this.entities.current}<span class="ring__entrants-sep">/</span>${this.entities.max}</span>`;const y=parseFloat(this.tournamentDollars).toLocaleString();this.shadowRoot.innerHTML=`
            <style>
                ${De()}
                ${bs()}

                /* ═══ HOST ═══ */
                :host {
                    display: block;
                    margin-bottom: 6px;
                    width: 100%;
                    border: 1px solid rgba(255, 255, 255, 0.25);
                    border-radius: var(--card-radius, var(--radius-lg, 12px));
                    transition: border-color 0.25s ease;
                }
                :host(:hover) {
                    border-color: rgba(255, 255, 255, 0.4);
                }

                /* ═══ CARD CONTAINER ═══ */
                .lc {
                    position: relative;
                    display: grid;
                    border-radius: var(--card-radius, var(--radius-lg, 12px));
                    overflow: hidden;
                    background: var(--card-bg, #181818);
                    transition: background 0.2s ease, box-shadow 0.2s ease;
                }
                .lc:hover {
                    background: var(--surface-raised, #222222);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12);
                }

                /* Status left accent */
                .lc::before {
                    content: '';
                    position: absolute;
                    left: 0; top: 0; bottom: 0;
                    width: 4px;
                    z-index: 2;
                }
                :host([data-bma-tourn-class="UPCOMING"]) .lc::before { background: var(--status-upcoming-text, #00E676); }
                :host([data-bma-tourn-class="LOCKED"]) .lc::before { background: var(--status-locked-text, #F7C60D); }
                :host([data-bma-tourn-class="COMPLETED"]) .lc::before { background: var(--status-completed-text, #CD5659); }

                /* ═══ LAYOUT ═══
                   ┌──────┬────────────────────────────────┐
                   │ Free │  Title              [Info][▶]  │
                   │ ENTRY│  Tagline                       │
                   │      ├────────────────────────────────┤
                   │ 12   │  ✓ Entered · Day 2/5           │
                   │ GAMES├────────────────────────────────┤
                   │      │  NBA NHL          IN PROGRESS  │
                   │ 8/50 │                                │
                   │ ENTS │                                │
                   │ 1K   │                                │
                   │ TD$  │                                │
                   └──────┴────────────────────────────────┘
                */
                .lc {
                    grid-template-columns: 1fr;
                    grid-template-rows: auto auto auto;
                    grid-template-areas:
                        "header"
                        "stats"
                        "foot";
                    padding: 0;
                }

                /* ═══ SIDEBAR: Vertical Stats ═══ */
                .lc__sidebar {
                    grid-area: sidebar;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 2px;
                    background: var(--card-bg, #181818);
                    padding: 10px 6px;
                    border-right: 1px solid rgba(255,255,255,0.06);
                }
                .lc__sidebar-stat {
                    text-align: center;
                    padding: 4px 0;
                }
                .lc__sidebar-val {
                    font-size: 0.8rem;
                    font-weight: 700;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    font-family: 'Roboto', -apple-system, sans-serif;
                    line-height: 1.2;
                }
                .lc__sidebar-label {
                    font-size: 0.48rem;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: rgba(255,255,255,0.3);
                    font-weight: 600;
                    margin-top: 1px;
                }
                .lc__sidebar-divider {
                    width: 70%;
                    height: 1px;
                    background: rgba(255,255,255,0.06);
                }

                /* ═══ HEADER ZONE ═══ */
                .lc__header {
                    grid-area: header;
                    display: grid;
                    grid-template-columns: 56px 1fr auto;
                    align-items: start;
                    gap: 0 12px;
                    padding: 12px 14px;
                    background:
                        linear-gradient(180deg, rgba(255,255,255,0.04) 0%, transparent 40%, rgba(0,0,0,0.15) 100%),
                        linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--surface-default, #161616) 100%);
                    position: relative;
                }
                /* Status color gradient + 10% dark overlay for readability */
                :host([data-bma-tourn-class="UPCOMING"]) .lc__header {
                    background:
                        linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.15) 100%),
                        linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--app-core-color--green-3__dark--brand, #14b963) 100%);
                }
                :host([data-bma-tourn-class="LOCKED"]) .lc__header {
                    background:
                        linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.15) 100%),
                        linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--app-core-color--yellow-3__dark--brand, #F7C60D) 100%);
                }
                :host([data-bma-tourn-class="COMPLETED"]) .lc__header {
                    background:
                        linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0.04) 50%, rgba(0,0,0,0.15) 100%),
                        linear-gradient(135deg, var(--card-bg, #181818) 0%, var(--app-core-color--red-1__dark--brand, #51090B) 100%);
                }
                /* Text over color — white with subtle shadow for readability */
                .lc__header .lc__name {
                    color: #FFFFFF;
                    text-shadow: 0 1px 3px rgba(0,0,0,0.5);
                }
                :host([data-bma-tourn-class="LOCKED"]) .lc__header .lc__name {
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                }
                :host([data-bma-tourn-class="COMPLETED"]) .lc__header .lc__name {
                    color: var(--status-completed-text, #CD5659);
                }
                .lc__header .lc__tagline {
                    color: rgba(255,255,255,0.7);
                    text-shadow: 0 1px 2px rgba(0,0,0,0.4);
                }

                /* Ring column */
                .lc__ring-col {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    grid-row: 1 / 3;
                    background: var(--card-bg, #181818);
                    padding: 8px;
                    margin: -12px 6px -14px -14px;
                    min-width: 68px;
                    border-radius: 0;
                    align-self: stretch;
                }
                .lc__ring {
                    position: relative;
                    width: 52px; height: 52px;
                    flex-shrink: 0;
                }
                .ring__svg { display: block; width: 100%; height: 100%; }
                .ring__center {
                    position: absolute;
                    inset: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    line-height: 1;
                }
                .ring__rank {
                    font-size: 1.05rem;
                    font-weight: 800;
                    color: #FFFFFF;
                    font-family: 'Roboto', -apple-system, sans-serif;
                    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
                }
                .ring__rank-total {
                    font-size: 0.5rem;
                    color: rgba(255,255,255,0.5);
                    font-weight: 700;
                    margin-top: 1px;
                }
                .ring__entrants {
                    font-size: 0.82rem;
                    font-weight: 800;
                    color: #FFFFFF;
                    font-family: 'Roboto', -apple-system, sans-serif;
                    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
                }
                .ring__entrants-sep {
                    opacity: 0.35;
                    margin: 0 1px;
                }
                /* Scale ring text for larger numbers */
                .ring__rank--md { font-size: 0.8rem; }
                .ring__rank--sm { font-size: 0.65rem; }
                .ring__rank-total--md { font-size: 0.45rem; }
                .ring__rank-total--sm { font-size: 0.4rem; }
                .ring__entrants--md { font-size: 0.58rem; }
                .ring__entrants--sm { font-size: 0.48rem; }
                .ring__title {
                    font-size: 0.5rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: rgba(255,255,255,0.35);
                    text-align: center;
                    margin-bottom: -1px;
                }
                .ring__progress-text {
                    font-size: 0.45rem;
                    font-weight: 700;
                    color: rgba(255,255,255,0.5);
                    text-align: center;
                    line-height: 1.1;
                }
                .ring__check {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .ring__trophy {
                    width: 30px;
                    height: 30px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
                }
                .ring__trophy--gold { background-image: var(--trophy-gold-short); }
                .ring__trophy--silver { background-image: var(--trophy-silver-short); }
                .ring__trophy--bronze { background-image: var(--trophy-bronze-short); }
                .ring__countdown {
                    font-size: 0.58rem;
                    font-weight: 600;
                    color: var(--status-locked-text, #F7C60D);
                    text-align: center;
                    letter-spacing: 0.01em;
                    line-height: 1.2;
                    word-break: break-word;
                    max-width: 100%;
                }

                /* Name row */
                .lc__name {
                    font-size: 0.95rem;
                    font-weight: 700;
                    color: #FFFFFF;
                    min-width: 0;
                    line-height: 1.3;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                }

                .lc__tagline {
                    grid-column: 2 / 4;
                    font-size: 0.78rem;
                    color: rgba(255,255,255,0.4);
                    line-height: 1.3;
                    overflow: hidden;
                    display: -webkit-box;
                    -webkit-line-clamp: 1;
                    -webkit-box-orient: vertical;
                    margin-top: 4px;
                    padding-top: 2px;
                    align-self: start;
                }

                /* Badges (right-aligned) */
                .lc__badges {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    align-self: end;
                }
                .lc__game-mode {
                    font-size: 0.6rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    padding: 3px 10px;
                    border-radius: var(--radius-full, 9999px);
                    color: rgba(255, 255, 255, 0.5);
                    background: transparent;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
                    white-space: nowrap;
                    line-height: 1.4;
                }
                .lc__status {
                    font-size: 0.65rem;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    padding: 3px 10px;
                    border-radius: var(--radius-full, 9999px);
                    flex-shrink: 0;
                    white-space: nowrap;
                    line-height: 1.4;
                }
                .lc__status--upcoming {
                    color: var(--status-upcoming-text, #00E676);
                    background: var(--status-upcoming-bg, rgba(0, 230, 118, 0.10));
                    box-shadow: inset 0 0 0 1px var(--status-upcoming-border, rgba(0, 230, 118, 0.25));
                }
                .lc__status--locked {
                    color: var(--status-locked-text, #F7C60D);
                    background: var(--status-locked-bg, rgba(247, 198, 13, 0.10));
                    box-shadow: inset 0 0 0 1px var(--status-locked-border, rgba(247, 198, 13, 0.25));
                }
                .lc__status--completed {
                    color: var(--status-completed-text, #CD5659);
                    background: var(--status-completed-bg, rgba(205, 86, 89, 0.10));
                    box-shadow: inset 0 0 0 1px var(--status-completed-border, rgba(205, 86, 89, 0.25));
                }

                /* Sports column (in header left) */
                .lc__sports-col {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 4px;
                }
                .lc__sports-col bma-sport-icon {
                    width: 20px !important;
                    height: 20px !important;
                }
                .lc__sports-col .lc__sport-item {
                    flex-direction: column;
                    gap: 1px;
                }
                .lc__sports-col .lc__sport-label {
                    font-size: 0.5rem;
                }
                .lc__sports-col .lc__sport-count {
                    font-size: 0.55rem;
                }

                /* Footer pills */
                .lc__foot-pills {
                    display: flex;
                    align-items: center;
                    gap: 6px;
                    flex-wrap: wrap;
                }
                .lc__pill {
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    padding: 3px 10px;
                    border-radius: var(--radius-full, 9999px);
                    font-size: 0.65rem;
                    font-weight: 700;
                    white-space: nowrap;
                    letter-spacing: 0.02em;
                }
                .lc__pill--green {
                    color: #00E676;
                    background: rgba(0, 230, 118, 0.1);
                    box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.25);
                }
                .lc__pill--gold {
                    color: #F7C60D;
                    background: rgba(247, 198, 13, 0.1);
                    box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.25);
                }
                .lc__pill--muted {
                    color: rgba(255,255,255,0.5);
                    background: rgba(255,255,255,0.04);
                    box-shadow: inset 0 0 0 1px rgba(255,255,255,0.1);
                }
                .lc__pill--gold-trophy,
                .lc__pill--gold {
                    color: #FFD700;
                    background: rgba(255, 215, 0, 0.1);
                    box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.25);
                }
                .lc__pill--silver {
                    color: #C0C0C0;
                    background: rgba(192, 192, 192, 0.1);
                    box-shadow: inset 0 0 0 1px rgba(192, 192, 192, 0.25);
                }
                .lc__pill--bronze {
                    color: #DA954B;
                    background: rgba(218, 149, 75, 0.1);
                    box-shadow: inset 0 0 0 1px rgba(218, 149, 75, 0.25);
                }
                .lc__pill-trophy {
                    width: 14px;
                    height: 14px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    flex-shrink: 0;
                }
                .lc__pill-trophy--gold { background-image: var(--badge__ribbon--gold); }
                .lc__pill-trophy--silver { background-image: var(--badge__ribbon--silver); }
                .lc__pill-trophy--bronze { background-image: var(--badge__ribbon--bronze); }

                /* Sports icons with labels (kept for getSportsDisplay) */
                .lc__sports {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .lc__sport-item {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                }
                .lc__sport-label {
                    font-size: 0.65rem;
                    font-weight: 600;
                    color: var(--status-locked-text, #F7C60D);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }
                .lc__sport-count {
                    font-size: 0.7rem;
                    color: rgba(255,255,255,0.4);
                    font-weight: 600;
                    cursor: pointer;
                    margin-left: 2px;
                }
                .lc__sport-count:hover {
                    color: rgba(255,255,255,0.7);
                }

                /* ═══ STATS BAND ═══ */
                /* Context row */
                .lc__context {
                    grid-area: context;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 6px 14px;
                    border-top: 1px solid rgba(255,255,255,0.06);
                    font-size: 0.72rem;
                    color: rgba(255,255,255,0.5);
                }
                .lc__context-item {
                    display: inline-flex;
                    align-items: center;
                    gap: 3px;
                    font-weight: 600;
                }
                .lc__context-item--green { color: #00E676; }
                .lc__context-item--gold { color: #F7C60D; }
                .lc__context-item--muted { color: rgba(255,255,255,0.4); }
                .lc__context-sep { color: rgba(255,255,255,0.15); }
                .lc__context-trophy {
                    width: 16px; height: 16px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    flex-shrink: 0;
                }
                .lc__context-trophy--gold { background-image: var(--badge__ribbon--gold); }
                .lc__context-trophy--silver { background-image: var(--badge__ribbon--silver); }
                .lc__context-trophy--bronze { background-image: var(--badge__ribbon--bronze); }

                .lc__stats-row {
                    grid-area: stats;
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    padding: 10px 14px;
                    gap: 8px;
                    background: var(--card-bg, #181818);
                    background-image: linear-gradient(180deg, rgba(0,0,0,0.15) 0%, transparent 60%, rgba(255,255,255,0.04) 100%);
                    box-shadow: inset 0 -1px 0 rgba(255,255,255,0.05);
                }
                .lc__stat {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                }
                .lc__stat-val {
                    font-size: 0.9rem;
                    font-weight: 700;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    font-family: 'Roboto', -apple-system, sans-serif;
                    white-space: nowrap;
                    line-height: 1.3;
                }
                .lc__stat-val--accent {
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                }
                .lc__stat-label {
                    font-size: 0.6rem;
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    color: rgba(255,255,255,0.3);
                    font-weight: 600;
                    margin-top: 4px;
                }
                .lc__progress-bar {
                    width: 100%;
                    max-width: 60px;
                    height: 4px;
                    background: rgba(255,255,255,0.06);
                    border-radius: 2px;
                    overflow: hidden;
                    margin-top: 4px;
                }
                .lc__progress-fill {
                    height: 100%;
                    border-radius: 2px;
                    transition: width 0.6s ease;
                }

                /* ═══ FOOTER: Sports + Actions ═══ */
                .lc__foot {
                    grid-area: foot;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 8px 14px;
                    gap: 6px;
                    background: var(--card-bg, #181818);
                }
                .lc__actions {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                    align-self: start;
                }
                @media (min-width: 769px) {
                    .lc__actions {
                        flex-direction: row;
                        gap: 6px;
                    }
                }
                .lc__btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 5px;
                    border: none;
                    border-radius: var(--btn-radius, var(--radius-md, 8px));
                    cursor: pointer;
                    transition: all var(--transition-normal, 0.2s ease);
                    padding: 6px 16px;
                    font-size: 0.78rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.3px;
                    min-height: 34px;
                    position: relative;
                    overflow: hidden;
                }
                .lc__btn * { pointer-events: none; }

                /* Info — status-aware like tournament card */
                .lc__btn--info {
                    background: rgba(0, 0, 0, 0.6);
                    color: #FAFAFA;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.2);
                }
                .lc__btn--info:hover {
                    background: rgba(0, 0, 0, 0.75);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
                    color: #FFFFFF;
                }

                /* Play — gold gradient like tournament card */
                .lc__btn--play {
                    background: linear-gradient(180deg, #FFD700 0%, #FFC107 100%);
                    color: #000;
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.3), 0 2px 4px rgba(0, 0, 0, 0.15);
                }
                .lc__btn--play:hover {
                    background: linear-gradient(180deg, #FFE033 0%, #FFD700 100%);
                    transform: translateY(-1px);
                    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.4), 0 3px 6px rgba(0, 0, 0, 0.2);
                }

                /* Join — green-gold gradient like tournament card */
                .lc__btn--join {
                    background: linear-gradient(135deg, var(--status-upcoming-text, #00E676) 0%, var(--app-core-color--yellow-3__dark--brand, #FFD700) 100%);
                    color: #000;
                    box-shadow: 0 4px 15px rgba(0, 230, 118, 0.4);
                    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
                    letter-spacing: 0.5px;
                }
                .lc__btn--join:hover {
                    background: linear-gradient(135deg, #00FF88 0%, #FFE033 100%);
                    transform: translateY(-1px);
                    box-shadow: 0 6px 20px rgba(0, 230, 118, 0.5);
                }

                /* ═══ TROPHY RIBBON ═══ */
                .lc__trophy {
                    position: absolute;
                    top: -2px; right: 12px;
                    width: 26px; height: 32px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    z-index: 5;
                }
                .lc__trophy--gold { background-image: var(--badge__ribbon--gold); }
                .lc__trophy--silver { background-image: var(--badge__ribbon--silver); }
                .lc__trophy--bronze { background-image: var(--badge__ribbon--bronze); }

                /* ═══ DESKTOP (769px+) ═══ */
                @media (min-width: 769px) {
                    .lc__header {
                        grid-template-columns: 64px 1fr auto;
                        gap: 0 18px;
                        padding: 14px 20px;
                    }
                    .lc__ring { width: 60px; height: 60px; }
                    .ring__rank { font-size: 1.25rem; }
                    .ring__rank-total { font-size: 0.65rem; }
                    .ring__entrants { font-size: 0.95rem; }
                    .ring__countdown { font-size: 0.65rem; }
                    .ring__trophy { font-size: 1.5rem; }

                    .lc__name { font-size: 1.05rem; }
                    .lc__status { font-size: 0.7rem; padding: 3px 12px; }

                    .lc__stats-row {
                        padding: 12px 20px;
                    }
                    .lc__stat-val { font-size: 0.95rem; }
                    .lc__stat-label { font-size: 0.65rem; }
                    .lc__progress-bar { max-width: 80px; }

                    .lc__foot { padding: 10px 20px; }
                    .lc__btn {
                        padding: 7px 18px;
                        font-size: 0.8rem;
                        min-height: 38px;
                    }
                }
            </style>

            <div class="lc">

                <!-- Header: Ring + Name + Actions -->
                <div class="lc__header">
                    <div class="lc__ring-col">
                        <div class="lc__ring">
                            ${this.buildRing(c,d,parseFloat(o),l)}
                            <div class="ring__center">
                                ${b}
                            </div>
                        </div>
                    </div>
                    <div class="lc__name">${this.caption}</div>
                    <div class="lc__actions">
                        <button class="lc__btn lc__btn--info" data-action="INFO" aria-label="Info">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                            Info
                        </button>
                        ${r?`<button class="lc__btn lc__btn--play" data-action="PLAY" aria-label="Play">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            Play
                        </button>`:""}
                        ${n?`<button class="lc__btn lc__btn--join" data-action="JOIN" aria-label="Join">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
                            Join
                        </button>`:""}
                    </div>
                    ${this.tagline?`<div class="lc__tagline">${this.tagline}</div>`:""}
                </div>

                <!-- Stats Band -->
                <div class="lc__stats-row">
                    <div class="lc__stat">
                        <div class="lc__stat-val">${this.entryFee}</div>
                        <div class="lc__stat-label">Entry</div>
                    </div>
                    <div class="lc__stat">
                        <div class="lc__stat-val">${this.matches==0?"TBD":this.matches+(()=>{try{return JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(h=>h.override_last_match_close===!0)?"+":""}catch{return""}})()}</div>
                        <div class="lc__stat-label">Games</div>
                    </div>
                    <div class="lc__stat">
                        <div class="lc__stat-val">${this.entities.current}/${this.entities.max}</div>
                        <div class="lc__progress-bar">
                            <div class="lc__progress-fill" style="width: ${o}%; background: ${l};"></div>
                        </div>
                        <div class="lc__stat-label">Entrants</div>
                    </div>
                    <div class="lc__stat">
                        <div class="lc__stat-val lc__stat-val--accent">${y}</div>
                        <div class="lc__stat-label">Starting TD$</div>
                    </div>
                </div>

                <!-- Footer: Sports + Status -->
                <div class="lc__foot">
                    <div class="lc__sports">${this.getSportsDisplay()}</div>
                    <div class="lc__badges">
                        ${(()=>{const m=this.gameModeBadge;return m?`<span class="lc__game-mode"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; opacity: 0.7;"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg> ${m.label}</span>`:""})()}
                        <span class="lc__status lc__status--${a}">${this.status==="LOCKED"?"IN PROGRESS":this.status==="UPCOMING"?"OPEN":this.status}</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-tournament-list-card",R_);const $r=`
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
`.trim();typeof window<"u"&&(window.EMPTY_BETSLIP_HTML=$r);const xe={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,a=null,r=0){const n=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),i=document.querySelector("#summary-payout");n&&(this.updateTDBalance("#summary-balance",e),e<0?n.classList.add("summary-cell__red"):n.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),i&&(i.textContent=s.toFixed(2),s<0?i.classList.add("summary-cell__red"):i.classList.remove("summary-cell__red"));const l=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(l){let d="";if(a){const p=a.tournament_dollars||0,f=e-p;f>0?d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(d=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const u=e<0?"#FF5252":"#00E676";l.innerHTML=`<span style="color: ${u};">TD$ ${e.toLocaleString()}</span>${d}`}if(c){const d=r||s||0;let u="";d>0&&(u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${d.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${u}`}if(a&&a.tournament_dollars){const d=a.tournament_dollars,u=document.querySelector(".dash-stat__gauge-fill--balance");if(u){const f=Math.max(e/d*100,0);u.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(t/d*100,100);p.style.width=`${f}%`}}this.updateBetSlipToggleSummary(t)},updateBetSlipToggleSummary(e=null){const t=document.getElementById("bet-grid-toggle-count"),s=document.getElementById("bet-grid-toggle-stake"),a=document.querySelector(".bet-grid__toggle-container");if(!t||!s||!a)return;const r=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").length;t.textContent=`${r} ${r===1?"bet":"bets"}`;const n=e!==null?Number(e)||0:Number(document.getElementById("summary-stake")?.textContent)||0;s.textContent=`TD$ ${n.toLocaleString(void 0,{maximumFractionDigits:0})}`,a.classList.toggle("bet-grid__toggle-container--has-bets",r>0)},_globalLBCache:{},async prefetchGlobalLeaderboard(e="ALL"){const s=this._globalLBCache[e];if(s?.data&&Date.now()-s.ts<3e5)return s.data;if(s?.inflight)return null;this._globalLBCache[e]={data:s?.data||null,ts:s?.ts||0,inflight:!0};try{const a=await Ae.fetchAllTimeLeaderboard(e,100,"td");return this._globalLBCache[e]={data:a,ts:Date.now(),inflight:!1},console.log(`[appEvents] All-time leaderboard prefetched [${e}]:`,a?.count||0,"rows, last_updated:",a?.last_updated),a}catch(a){return console.warn(`[appEvents] All-time leaderboard prefetch failed [${e}]:`,a),this._globalLBCache[e]&&(this._globalLBCache[e].inflight=!1),null}},_betStatsCache:{stats:null,ts:0,inflight:!1},async _ensureBetStatsCache(e){const s=Date.now();if(this._betStatsCache.stats&&s-this._betStatsCache.ts<3e5)return this._betStatsCache.stats;if(this._betStatsCache.inflight)return null;this._betStatsCache.inflight=!0;try{const r=(await Ae.fetchBetSlips(e))?.rows||[];let n=0,o=0,i=0;return r.forEach(l=>{(l.bet||[]).forEach(d=>{Object.keys(d).forEach(u=>{if(u==="short_title")return;const p=d[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?n++:o++:i++)})})}),this._betStatsCache={stats:{wins:n,losses:o,pending:i},ts:s,inflight:!1},this._betStatsCache.stats}catch(a){return console.warn("[app_events] fetchBetSlips failed for stats panel",a),this._betStatsCache.inflight=!1,null}},buildStatsPanel(e,t,s=null){if(!t||!e||e.length===0)return"";const a=e.filter(b=>(b.entities?.guids||[]).includes(t)),r=a.filter(b=>(b.status||b.class)==="COMPLETED").length;let n=0,o=0;a.forEach(b=>{(Array.isArray(b.tags)?b.tags:[]).forEach(y=>{if(!y||typeof y!="object")return;const m=(y.entity_guid===t?y.badge:null)||(typeof y[t]=="string"?y[t]:null);typeof m=="string"&&m.startsWith("--badge__ribbon--")&&(o++,m==="--badge__ribbon--gold"&&n++)})});const i={};a.forEach(b=>{(Array.isArray(b.sports_allowed)?b.sports_allowed:[]).forEach(y=>{const h=Ve.find(_=>_.key===y.key)?.group||"Other";i[h]=(i[h]||0)+1})});let l="—",c="",d=0;Object.entries(i).forEach(([b,v])=>{v>d&&(d=v,l=b,c=b)});let u="—",p="Pending";if(s){const b=s.wins+s.losses;b>0?(u=`${Math.round(s.wins/b*100)}%`,p=`${s.wins}-${s.losses}`):(u="—",p="No settled bets")}const f=c?`<bma-sport-icon data-sport-group="${c.toLowerCase()}"></bma-sport-icon>`:"";return`
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
                        <span class="stats-row__value">${r}</span>
                    </div>
                    <div class="stats-row">
                        <span class="stats-row__label">
                            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
                            1st Place Finishes
                        </span>
                        <span class="stats-row__value">${n}</span>
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
                            <span>${l}</span>
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
        `},categorizeTournaments(e,t,s,a,r={}){const n=[],{subStatus:o="all",sort:i="default",result:l="all",odds:c="all"}=r,d=x=>(x.entities?.guids||[]).includes(a),u=x=>x.status==="UPCOMING"||x.class==="UPCOMING",p=x=>x.status==="LOCKED"||x.class==="LOCKED",f=x=>u(x)||p(x),b=x=>x.status==="COMPLETED"||x.class==="COMPLETED",v=x=>Array.isArray(x.matches_expanded)&&x.matches_expanded.length>0,y=(x,T)=>(x.sports_allowed||[]).some(E=>E.key===T),m=x=>Ve.find(T=>T.key===x)?.title||x,h=x=>{const T=x.tags||[];for(const E of T)if(!(typeof E!="object"||!E)&&(E.entity_guid===a&&E.badge||E[a]))return!0;return!1},_=x=>{if(i==="default")return x;const T=[...x];switch(i){case"starting_soon":T.sort((E,P)=>new Date(E.window_start_time||0)-new Date(P.window_start_time||0));break;case"most_entrants":T.sort((E,P)=>(P.entities?.guids?.length||0)-(E.entities?.guids?.length||0));break;case"fewest_spots":T.sort((E,P)=>{const $=(E.entities?.max||0)-(E.entities?.guids?.length||0),O=(P.entities?.max||0)-(P.entities?.guids?.length||0);return $-O});break;case"recently_active":T.sort((E,P)=>new Date(P.status_time||0)-new Date(E.status_time||0));break;case"newest":T.sort((E,P)=>new Date(P.status_time||0)-new Date(E.status_time||0));break;case"td_high":T.sort((E,P)=>parseFloat(P.tournament_dollars||0)-parseFloat(E.tournament_dollars||0));break;case"td_low":T.sort((E,P)=>parseFloat(E.tournament_dollars||0)-parseFloat(P.tournament_dollars||0));break}return T},S=x=>l==="all"?x:l==="trophy"?x.filter(T=>h(T)):l==="no_trophy"?x.filter(T=>!h(T)):x;let g=e,w="";if(s==="multi"?(g=e.filter(x=>(x.sports_allowed?.length||0)>1),w="Multi-Sport "):s!=="all"&&(g=e.filter(x=>y(x,s)),w=m(s)+" "),t==="lobby"){let x=g;if(o==="open"?x=g.filter(T=>u(T)):o==="locked"?x=g.filter(T=>p(T)):o==="completed"&&(x=g.filter(T=>b(T))),o==="all"){const T=_(x.filter($=>u($)&&!d($)));n.push({title:`Open Entry ${w}Tournaments`,tournaments:T});const E=_(x.filter($=>p($)&&!d($)));E.length>0&&n.push({title:`In Progress - Entry Closed ${w}Tournaments`,tournaments:E});const P=_(x.filter($=>b($))).slice(0,20);P.length>0&&n.push({title:`Recently Completed ${w}Tournaments`,tournaments:P})}else{const T=_(x),E={open:"Open",locked:"In Progress",completed:"Completed"};T.length>0&&n.push({title:`${E[o]} ${w}Tournaments`,tournaments:T})}}else if(t==="my"){const x=g.filter(O=>d(O));let T=x.filter(O=>f(O));o==="active"?T=T.filter(O=>p(O)):o==="upcoming"&&(T=T.filter(O=>u(O))),c==="available"?T=T.filter(O=>v(O)):c==="none"&&(T=T.filter(O=>!v(O)));const E=_(T);n.push({title:`Your Active ${w}Tournaments`,tournaments:E});const P=S(x.filter(O=>b(O))),$=_(P);$.length>0&&n.push({title:`Your Completed ${w}Tournaments`,tournaments:$})}else if(t==="completed"){const x=_(S(g.filter(E=>d(E)&&b(E))));x.length>0&&n.push({title:`Your Completed ${w}Tournaments`,tournaments:x});const T=_(g.filter(E=>!d(E)&&b(E)));T.length>0&&n.push({title:`Other Completed ${w}Tournaments`,tournaments:T})}else t==="private"?n.push({title:"Private Contests",tournaments:[],emptyMessage:"Private Contests Coming Soon",emptySubtext:"Create and join private contests with friends — feature in development"}):n.push({title:"Tournaments",tournaments:e});return n},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=be();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let a=0,r=0,n=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const y=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.tournament_guid===e.guid);console.log("[Dashboard Update] Found",y.length,"existing bets for this tournament"),y.forEach(m=>{(m.bet||[]).forEach(_=>{Object.keys(_).filter(g=>g!=="short_title").forEach(g=>{const w=_[g];w&&(w.stake&&(a+=parseFloat(w.stake)),w.reconciled===!0&&w.payout>0&&(r+=parseFloat(w.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const v=parseFloat(o.textContent)||0;n=Math.max(0,v-a),console.log("[Dashboard Update] Summary total stakes:",v,"Pending:",n)}const i=a+n,l=s-a-n+r;console.log("[Dashboard Update] TD$:",s,"Committed:",a,"Pending:",n,"Payouts:",r,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");if(c){const v=l-s;let y="";v>0?y=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${v.toLocaleString()})</span>`:v<0&&(y=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${v.toLocaleString()})</span>`);const m=l<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${m};">TD$ ${l.toLocaleString()}</span>${y}`}const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".dash-stat__gauge-fill--pending");if(d){const v=n>0?n:i,y=r||0;let m="";if(y>0&&(m=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${y.toLocaleString()})</span>`),d.innerHTML=`TD$ ${v.toLocaleString()}${m}`,u){const h=Math.min(v/s*100,100);u.style.width=`${h}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const v=Math.max(l/s*100,0);p.style.width=`${v}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&e){const v=e.entities?.guids?.length||0,y=e.entities?.max||100,m=v/y*100;f.style.width=`${m}%`}const b=document.getElementById("game-mode-progress");if(b&&typeof window.GameMode<"u"){const v=e.class||"DEFAULT",y=window.GameMode.get(v),m=t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(_=>_.coreTournaments__guid===e.guid||_.tournament_guid===e.guid):[],h=y.getProgressUI(m,e);if(h.type!=="NONE"){const _=h.typesStatus?h.typesStatus.map(g=>g.placed?`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: rgba(0, 230, 118, 0.12); box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.35); color: #00E676; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.3px;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#00E676"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            ${g.label}${g.count>1?' <span style="opacity: 0.7;">×'+g.count+"</span>":""}
                        </span>`:`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: transparent; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12); color: rgba(255,255,255,0.35); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.3px;">
                            ${g.label}
                        </span>`).join(""):"",S=h.hints.length>0&&!h.complete?`<p style="font-size: 0.72rem; color: rgba(255,255,255,0.5); margin: 0; text-align: center;">${h.hints[0]}</p>`:h.complete?'<p style="font-size: 0.72rem; color: #00E676; margin: 0; text-align: center; font-weight: 600;">Lineup complete — ready to submit!</p>':"";b.style.display="block",b.innerHTML=`
                    <div style="margin: 0 8px 10px; padding: 14px 16px; background: rgba(20, 20, 20, 0.65); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background-image: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(0,0,0,0.1) 100%); border-radius: var(--card-radius, 12px); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0,0,0,0.4);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--status-locked-text, #F7C60D);">Your Lineup</span>
                            <span style="font-size: 0.75rem; font-weight: 700; color: ${h.percent>=100?"#00E676":"rgba(255,255,255,0.7)"};">${h.label}</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.06); border-radius: 6px; overflow: hidden; margin-bottom: 12px;">
                            <div style="height: 100%; width: ${h.percent}%; background: ${h.complete?"linear-gradient(90deg, #00E676, #69F0AE)":"linear-gradient(90deg, var(--status-locked-text, #F7C60D), #FFD54F)"}; border-radius: 6px; transition: width 0.3s ease;"></div>
                        </div>
                        <div style="display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: ${S?"10px":"0"};">${_}</div>
                        ${S}
                    </div>`}else b.style.display="none",b.innerHTML=""}},renderMatchCards(e){if(!e)return;const t=document.querySelector(".select-grid");if(!t)return;if(t.innerHTML="",!e.matches_expanded||!Array.isArray(e.matches_expanded)||e.matches_expanded.length===0){t.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const s=new Date,a=[...e.matches_expanded].sort((n,o)=>{const i=new Date(n.scheduled_at),l=new Date(o.scheduled_at),c=i<s,d=l<s;return c&&!d?1:!c&&d?-1:i-l}),r=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&be().coreTourn.length>0&&(i=be().coreTourn[be().coreTourn.length-1].data.find(b=>b.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=be();le.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};a.forEach(n=>{const i=new Date(n.scheduled_at)<s;let l=!1;try{l=(typeof n.scoreboard_data=="string"?JSON.parse(n.scoreboard_data):n.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",n.id),c.setAttribute("data-match-guid",n.odds_id||n.guid||n.id),c.setAttribute("data-match-title",n.title),c.setAttribute("data-match-short-title",n.short_title||n.title),c.setAttribute("data-scheduled-at",n.scheduled_at),c.setAttribute("data-home-team",n.home_team_id||"Home"),c.setAttribute("data-away-team",n.away_team_id||"Away"),c.setAttribute("data-is-disabled",i||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),n.odds_markets){const d=typeof n.odds_markets=="string"?n.odds_markets:JSON.stringify(n.odds_markets);c.setAttribute("data-odds-markets",d)}if(n.scoreboard_data){const d=typeof n.scoreboard_data=="string"?n.scoreboard_data:JSON.stringify(n.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(n.sport_id)c.setAttribute("data-sport-key",n.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const b=document.querySelector(".bet-grid__slip-BETSLIP-content");if(b){const v=b.querySelectorAll("bma-bet-entry");let y=!1;v.forEach(m=>{if(y)return;const h=m.getAttribute("data-content-type"),_=m.getAttribute("data-content-odds");h===u.type&&_===u.price&&(m.remove(),y=!0)}),b.children.length===0&&(b.innerHTML=$r)}f.classList.remove("btn--active"),setTimeout(()=>{r()},100)}else{const b=document.querySelector(".play-cntr"),v=b?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const h=window.GameMode.get(v),_=be(),S=_.coreBetSlip.length>0?_.coreBetSlip[_.coreBetSlip.length-1].data.filter(w=>w.coreTournaments__guid===b?.dataset?.currentTournGuid):[],g=h.canPlaceBet({matchGuid:u.matchGuid,type:u.type,team:u.team},S,null);if(!g.allowed){typeof neodigmToast<"u"&&neodigmToast.q(g.reason,"warning",3e3);return}}document.querySelectorAll("bma-bet-match-card").forEach(h=>{h.shadowRoot.querySelectorAll(".btn--selected").forEach(_=>{_.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const y=be(),m=u.type;m==="spread"?le.publish(y.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):m==="money"?le.publish(y.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):m==="total"&&le.publish(y.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),le.publish(y.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector("[data-publish-betslip]");s&&delete s.dataset.processing;const a=document.querySelector(".bet-grid__slip-BETSLIP-content");a&&(a.innerHTML=$r);const r=be();if(r.coreTourn.length>0){const i=r.coreTourn[r.coreTourn.length-1].data.find(l=>l.guid===e);i&&xe.renderMatchCards(i)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{le.publish(r.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const n=document.querySelector(".bet-grid__slip");n&&n.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const r=a.getAttribute("data-match-guid"),n=a.getAttribute("data-home-team"),o=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?n:o;t.some(b=>{if(b.coreMatches__guid!==r)return!1;const v=b.bet||[];if(v.length===0)return!1;const y=v[0],h=Object.keys(y).filter(g=>g!=="short_title")[0],S=y[h]?.type;return c==="total"?S===c:S===c&&h===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},initPlayScreen(e,t="INFO"){const s=be(),a=document.querySelector(".play-cntr");if(!a){console.warn("[app_events] initPlayScreen: .play-cntr not found");return}e&&(a.dataset.currentTournGuid=e),t&&(a.dataset.currentTournAction=t);const r=a.dataset.currentTournGuid,n=a.dataset.currentTournAction||"INFO";if(r&&s.coreTourn.length>0){const f=s.coreTourn[s.coreTourn.length-1].data.find(v=>v.guid===r),b=f?.class||"DEFAULT";a.dataset.gameType=b,console.log("[app_events] Game mode:",b,"for tournament:",f?.caption)}console.log("[app_events] play_route mounted - GUID:",r,"action:",n),window.initBetGridToggle&&window.initBetGridToggle(),xe.updatePlayButton(),xe.populateInfoPage();let o=n==="PLAY"||n==="JOIN"?"PLAY":n;if(r&&s.coreTourn.length>0&&s.coreTourn[s.coreTourn.length-1].data.find(b=>b.guid===r)?.status==="COMPLETED"&&(o="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),o){const p=`ROUTE.HOME.SODAPOP_PLAY.${o}`;console.log("[app_events] Publishing initial topic:",p),le.publish(p,JSON.stringify({tournamentGuid:r,timestamp:Date.now()}))}if(!r||s.coreTourn.length===0)return;const l=s.coreTourn[s.coreTourn.length-1].data.find(p=>p.guid===r);if(!l)return;xe.renderMatchCards(l);const c=document.querySelector("#pop-play__tourn-caption--id"),d=document.querySelector("#pop-play__tourn-tagline--id");c&&(c.textContent=l.caption),d&&(d.textContent=l.tagline),xe.updateTournamentDashboard(l);const u=document.getElementById("dashboard-rank");if(u){const p=l.entities?.guids?.length||0;u.innerHTML=`<span class="tourn-dashboard__rank-text">-/${p}</span>`}xe.updateBetSlipToggleSummary()},updatePlayButton(){const e=be(),t=document.querySelector(".play-cntr"),s=t?.dataset?.currentTournGuid,a=t?.dataset?.currentTournAction||"INFO",r=document.getElementById("btn-join__play--id");if(!r||!s||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===s);if(!o)return;const i=e.appSession?.session_user?.guid,l=o.entities?.guids?.includes(i),c=o.status;r.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(r.style.visibility="",c==="UPCOMING"&&!l?a==="INFO"?(r.textContent="Join",r.dataset.requiresJoin="true"):a==="PLAY"&&(r.textContent="Play",r.dataset.requiresJoin="false"):(r.textContent="Play",r.dataset.requiresJoin="false"))},populateInfoPage(){const e=be(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const r=e.coreTourn[e.coreTourn.length-1].data.find(Q=>Q.guid===s);if(!r)return;const n=document.getElementById("pop-play__caro-info-summary1--id");if(!n)return;const o=Q=>{if(!Q)return"N/A";let U=new Date(Q);return!Q.includes("Z")&&!Q.match(/[+-]\d{2}:\d{2}$/)&&(U=new Date(Q+"Z")),isNaN(U.getTime())?"Invalid Date":U.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};r.status&&`${r.status.toLowerCase()}`;const i={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},l=r.sports_allowed&&Array.isArray(r.sports_allowed)?r.sports_allowed.map(Q=>{const U=Q.key||Q,R=Ve.find(A=>A.key===U),j=R?R.group:"default",N=i[U]||R?.title||U;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${U}" data-sport-group="${j}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${N}</span>
                </span>`}).join(""):"N/A",c=e.appSession?.session_user?.guid,d=r.entities?.guids?.includes(c),u=r.entities?.guids?.length||0,p=r.entities?.max||0;(u/(p||1)*100).toFixed(1);const f=(()=>{const Q=new Date(r.window_start_time),U=new Date(r.window_end_time),R=new Date;if(isNaN(Q.getTime())||isNaN(U.getTime()))return"";const j=U-Q,N=R-Q;let A=0,M="";if(R<Q){A=0;const I=Q-R,B=Math.floor(I/864e5),z=Math.floor(I%864e5/36e5);M=B>0?`First match in ${B}d ${z}h`:`First match in ${z}h`}else if(R>U){const I=new Date(U.getFullYear(),U.getMonth(),U.getDate()),B=new Date(R.getFullYear(),R.getMonth(),R.getDate());A=I.getTime()===B.getTime()?95:100,M=A===100?"Tournament Complete":"Last Day"}else{A=Math.min(100,N/j*100);const I=Math.ceil(j/864e5),B=Math.ceil(N/864e5);M=B>=I?"Last Day":`Day ${B} of ${I}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${M}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${A.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),b=r.tags||[],y=b.some(Q=>Q.override_last_match_close===!0)?"+":"",m=b.some(Q=>Q.match_inprogress_lock===!0),h=b.some(Q=>Q.override_last_match_close===!0);let _="Free Play",S=null,g="";if(typeof window.GameMode<"u"){const Q=window.GameMode.get(r.class||"DEFAULT"),U=Q.getEffectiveRules(r);if(S=Q.getBadge(),_=Q.label,U.stakeRule==="SPEND_ALL"&&(g+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend All TD$</span></div>'),U.requiredBetTypes.length>0){const R=U.requiredBetTypes.map(j=>j==="SPREAD"?"Spread":j==="MONEY"?"Money Line":"Over/Under").join(", ");g+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${R}</span></div>`}U.oneBetPerMatchPerType&&(g+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const w=(()=>{const U=(r.tags||[]).find(A=>A.badge_gold!==void 0||A.badge_silver!==void 0||A.badge_bronze!==void 0);if(!U)return null;const R=U.badge_gold||0,j=U.badge_silver||0,N=U.badge_bronze||0;return R===0&&j===0&&N===0?null:{gold:R,silver:j,bronze:N}})(),x=r.status==="LOCKED"?"info-status-band--locked":r.status==="UPCOMING"?"info-status-band--open":r.status==="COMPLETED"?"info-status-band--completed":"",T=r.status==="LOCKED"?d?"In Progress — Entered":"In Progress":r.status==="UPCOMING"?d?"Open — Entered":"Open for Entry":r.status==="COMPLETED"?"Completed":r.status,E=r.matches_expanded?.length||0,P=E===0?"TBD":`${E}${y}`,$=`
            <div class="info-key-stats">
                <div class="info-key-stat">
                    <span class="info-key-stat__value" style="color: var(--status-upcoming-text, #00E676);">TD$ ${Number(r.tournament_dollars||0).toLocaleString()}</span>
                    <span class="info-key-stat__label">Starting TD$</span>
                </div>
                <div class="info-key-stat">
                    <span class="info-key-stat__value">${u} / ${p}</span>
                    <span class="info-key-stat__label">Players</span>
                </div>
                <div class="info-key-stat">
                    <span class="info-key-stat__value">${P}</span>
                    <span class="info-key-stat__label">Games</span>
                </div>
            </div>`;r.status==="LOCKED"||r.status==="UPCOMING"||r.status,r.status==="LOCKED"||r.status;const O=`
            <div class="info-detail-row"><span>Game Mode</span><span>${_}${S?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${S.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${S.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${m?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${m?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${h?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${h?"On-going":"Fixed slate"}</span></div>
            ${g}
        `,L=`
            <div class="info-detail-row"><span>Sports</span><span>${l}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${o(r.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends</span><span>${o(r.window_end_time)}</span></div>
        `,G=w?`
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${w.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${w.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${w.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${w.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${w.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${w.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            <div style="padding: 16px 0 0;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); padding: 0 16px 8px;">Trophy Breakdown</div>
                ${w.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${w.gold}</span>
                </div>`:""}
                ${w.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${w.silver}</span>
                </div>`:""}
                ${w.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${w.bronze}</span>
                </div>`:""}
            </div>
        `:`<div class="info-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
            <p>No trophies configured for this tournament</p>
        </div>`,X=(()=>{if(!r.matches_expanded||!Array.isArray(r.matches_expanded)||r.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let Q=0,U=0,R=0;const j=new Date;r.matches_expanded.forEach(z=>{let Z=null;try{Z=typeof z.scoreboard_data=="string"?JSON.parse(z.scoreboard_data):z.scoreboard_data}catch{}Z?.time_remaining?Z.time_remaining.toLowerCase()==="final"?Q++:U++:new Date(z.scheduled_at)<j?Q++:R++});const N=U>0?"live":"upcoming",A=[];Q>0&&A.push(`<span class="match-filter-btn${N==="final"?" match-filter--active":""}" data-filter="final">${Q} Final</span>`),U>0&&A.push(`<span class="match-filter-btn match-filter-btn--live${N==="live"?" match-filter--active":""}" data-filter="live">${U} Live</span>`),R>0&&A.push(`<span class="match-filter-btn match-filter-btn--upcoming${N==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${R} Upcoming</span>`);const M=A.length>0?`<div class="match-filter-bar">${A.join("")}</div>`:"",I=new Date,B=r.matches_expanded.map(z=>{const Z=z.scoreboard_data?typeof z.scoreboard_data=="string"?z.scoreboard_data:JSON.stringify(z.scoreboard_data):"";let re="upcoming",F=null;try{F=typeof z.scoreboard_data=="string"?JSON.parse(z.scoreboard_data):z.scoreboard_data}catch{}F?.time_remaining?re=F.time_remaining.toLowerCase()==="final"?"final":"live":re=new Date(z.scheduled_at)<I?"final":"upcoming";const k=re!==N;return`<bma-match-status
                    data-match-guid="${z.guid||z.odds_id||z.id||""}"
                    data-match-title="${z.short_title||z.title||"Match"}"
                    data-match-scheduled-at="${z.scheduled_at||""}"
                    data-match-home-team="${z.home_team_id||"Home"}"
                    data-match-away-team="${z.away_team_id||"Away"}"
                    data-match-home-score="${z.home_team_score!==null&&z.home_team_score!==void 0?z.home_team_score:""}"
                    data-match-away-score="${z.away_team_score!==null&&z.away_team_score!==void 0?z.away_team_score:""}"
                    data-match-scoreboard="${Z.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${z.sport_id||""}"
                    data-match-status="${re}"
                    data-sync-theme="dark"
                    style="${k?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${M}
                </div>
                <div class="matches-scroll-container" id="info-matches-scroll" style="max-height: 480px; overflow-y: auto; position: relative; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.15) transparent;">
                    ${B}
                </div>
                <div class="matches-scroll-fade" style="height: 32px; margin-top: -32px; position: relative; pointer-events: none; background: linear-gradient(to top, rgba(16,16,16,0.95), transparent); z-index: 1;"></div>
            `})();n.innerHTML=`
            <div class="info-status-band ${x}">${T}</div>
            ${f?`<div class="info-surface" style="margin: 8px 0; padding: 12px 16px;">${f}</div>`:""}
            <div class="info-surface" style="margin: 0 0 8px;">
                ${$}
            </div>
            <div class="info-surface" style="margin: 0 0 8px;">
                <div style="font-size: 0.75rem; font-weight: 400; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.55); padding: 12px 16px 0;">Tournament Details</div>
                ${O}
            </div>
            <div class="info-surface">
                <div class="info-tabs">
                    <button class="info-tab info-tab--active" data-info-tab="summary"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Summary</button>
                    <button class="info-tab" data-info-tab="trophies"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Trophies</button>
                    <button class="info-tab" data-info-tab="matches"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> Matches</button>
                </div>
                <div class="info-tab-panel" data-info-panel="summary">${L}</div>
                <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${G}</div>
                <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${X}</div>
            </div>
        `,n.querySelectorAll(".info-tab").forEach(Q=>{Q.addEventListener("click",()=>{n.querySelectorAll(".info-tab").forEach(R=>R.classList.remove("info-tab--active")),Q.classList.add("info-tab--active");const U=Q.dataset.infoTab;n.querySelectorAll(".info-tab-panel").forEach(R=>{R.style.display=R.dataset.infoPanel===U?"":"none"})})});const ae=n.querySelector('[data-info-panel="matches"]');if(ae){ae.addEventListener("click",R=>{const j=R.target.closest(".match-filter-btn");j&&(ae.querySelectorAll(".match-filter-btn").forEach(N=>N.classList.remove("match-filter--active")),j.classList.add("match-filter--active"),ae.querySelectorAll("bma-match-status").forEach(N=>{N.style.display=N.dataset.matchStatus===j.dataset.filter?"":"none"}))});const Q=ae.querySelector(".matches-scroll-container"),U=ae.querySelector(".matches-scroll-fade");if(Q&&U){const R=()=>{U.style.opacity=Q.scrollHeight-Q.scrollTop-Q.clientHeight<8?"0":"1"};Q.addEventListener("scroll",R),setTimeout(R,100)}}const K=document.getElementById("pop-play__caro-info-summary2--id");K&&(K.innerHTML="");const V=document.getElementById("pop-play__caro-info-list--id");V&&(V.innerHTML="")},async populateLeaderboard(){const e=be(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,a=e.appSession?.session_user?.guid;if(!s){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const r=document.getElementById("pop-play__caro-leaderboard--id");if(!r)return;let n=document.getElementById("leaderboard-loading-banner");n||(n=document.createElement("neodigm-juicebar"),n.id="leaderboard-loading-banner",n.setAttribute("role","progressbar"),n.setAttribute("data-n55-theme","warning"),n.setAttribute("data-n55-size","small"),n.innerHTML="<div></div>",n.style.cssText=`
                width: 100%;
                margin: 6px;
            `,r.parentNode.insertBefore(n,r)),n.style.visibility="visible";try{const o=await Ae.fetchLeaderboard(s),i=o?.data||o?.rows;if(i&&i.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(L=>L.guid===s),d=c?.class||"DEFAULT_FORMAT",u=window.GameMode?.get?.(d),p=u?.rankLeaderboard?u.rankLeaderboard(i.map(L=>{const G=typeof L.combined_betslips=="string"?(()=>{try{return JSON.parse(L.combined_betslips)}catch{return[]}})():L.combined_betslips||[];return{...L,bets:G,timestamp:L.created_at||L.updated_at||0}}),c):i,f=parseFloat(c?.tournament_dollars||0),b=L=>{if(d!=="DEFAULT_FORMAT"||f<=0)return!0;let G=0;return(L.bets||[]).forEach(X=>{(X.bet||[]).forEach(ae=>{Object.keys(ae).forEach(K=>{K!=="short_title"&&(G+=parseFloat(ae[K]?.stake||0))})})}),G>=f-.01},y=(()=>{if(d!=="DEFAULT_FORMAT")return"";const G=(c?.tags||[]).find(M=>M.badge_gold!==void 0||M.badge_silver!==void 0||M.badge_bronze!==void 0);if(!G)return"";const X=G.badge_gold||0,ae=G.badge_silver||0,K=G.badge_bronze||0;if(X===0&&ae===0&&K===0)return"";const Q=p.some(M=>(M.bets||[]).some(I=>(I.bet||[]).some(B=>Object.keys(B).some(z=>z!=="short_title"&&B[z]?.reconciled===!0))))?p.filter(b):[],U=M=>{if(!M)return'<span class="podium-slot__empty">Open</span>';const I=M.user_guid===a;return`<span class="podium-slot__name${I?" podium-slot__name--you":""}">${M.username||"Unknown"}${I?' <span class="podium-slot__you">YOU</span>':""}</span>`},R=Array.from({length:X},(M,I)=>U(Q[I])).join(""),j=Array.from({length:ae},(M,I)=>U(Q[X+I])).join(""),N=Array.from({length:K},(M,I)=>U(Q[X+ae+I])).join(""),A=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
                        <div class="leaderboard-podium">
                            <div class="leaderboard-podium__title">Trophy Preview</div>
                            <div class="leaderboard-podium__pack">
                                ${ae>0?`<div class="podium-slot podium-slot--silver">
                                    <div class="podium-slot__trophy podium-slot__trophy--silver"></div>
                                    <span class="podium-slot__count">&times;${ae}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--silver">
                                        <div class="podium-slot__names">${j}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${X>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${X}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${R}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${K>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${K}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${N}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${A?`<div class="leaderboard-podium__label">${A}</div>`:""}
                        </div>
                    `})(),_=`
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
                        <div class="leaderboard-privacy-banner" data-lb-panel="rules">
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        <span>Pending bets are hidden from other players until settled. Your own pending bets are always visible to you.</span>
                    </div>
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                        <span>Spend your entire starting TD$ balance to qualify for a finishing position.</span>
                    </div>
                </div>
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
                `,S=(L,G,X=!1)=>{let ae="";if(c?.tags&&Array.isArray(c.tags)){const j=c.tags.find(N=>!!(typeof N=="object"&&N!==null&&(N.entity_guid===L.user_guid&&N.badge&&N.badge.startsWith("--badge__ribbon--")||N[L.user_guid]&&N[L.user_guid].startsWith("--badge__ribbon--"))));if(j){const N=j.badge||j[L.user_guid];N==="--badge__ribbon--gold"?ae="badge-trophy--gold":N==="--badge__ribbon--silver"?ae="badge-trophy--silver":N==="--badge__ribbon--bronze"&&(ae="badge-trophy--bronze")}}const K=L.combined_betslips?typeof L.combined_betslips=="string"?L.combined_betslips:JSON.stringify(L.combined_betslips):"[]";let V="[]";if(L.combined_betslips&&c?.matches_expanded){const j=typeof L.combined_betslips=="string"?JSON.parse(L.combined_betslips):L.combined_betslips,N=[...new Set(j.map(M=>M.coreMatches__guid||M.match_guid||M.odds_id).filter(Boolean))],A=c.matches_expanded.filter(M=>{const I=M.guid||M.id||M.odds_id;return N.includes(I)});V=JSON.stringify(A)}const Q=parseFloat(L.calculated_tournament_dollars||0),U=parseInt(L.total_betslips||0),R=Q===0&&U===0?c?.tournament_dollars||0:L.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${G}"
                            data-username="${L.username||"Unknown"}"
                            data-user-guid="${L.user_guid||""}"
                            data-tournament-dollars="${R}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${L.total_betslips||0}"
                            data-total-payout="${L.total_payout||0}"
                            data-combined-betslips="${K.replace(/"/g,"&quot;")}"
                            data-user-matches="${V.replace(/"/g,"&quot;")}"
                            data-badge-class="${ae}"
                            data-is-current-user="${L.user_guid===a}"
                            data-unqualified="${X}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `},g=p.filter(b),w=p.filter(L=>!b(L)),x=g.map((L,G)=>S(L,G+1,!1)).join(""),T=w.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${w.map(L=>S(L,"—",!0)).join("")}
                `:"";r.innerHTML=y+_+x+T,requestAnimationFrame(()=>{r.querySelectorAll("bma-leaderboard-card").forEach((L,G)=>{L.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",L.style.animationDelay=`${Math.min(G*60,400)}ms`})}),r.querySelectorAll(".leaderboard-tab").forEach(L=>{L.addEventListener("click",()=>{const G=L.dataset.lbTab;r.querySelectorAll(".leaderboard-tab").forEach(X=>X.classList.remove("leaderboard-tab--active")),L.classList.add("leaderboard-tab--active"),r.querySelectorAll("[data-lb-panel]").forEach(X=>{X.style.display=X.dataset.lbPanel===G?"":"none"})})});const E=g.findIndex(L=>L.user_guid===a),P=c?.entities?.guids?.length||p.length,$=E>=0?E+1:"—",O=document.getElementById("dashboard-rank");if(O){const L=$==="—"?"—":`${$}/${P}`;O.innerHTML=`<span class="tourn-dashboard__rank-text">${L}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else r.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{n&&(n.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),r.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{n&&(n.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=be(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const r=e.coreTourn[e.coreTourn.length-1].data.find(n=>n.guid===s);r&&(console.log("[appEvents] Hydrating play popup for tournament:",s),this.populateInfoPage(),this.renderMatchCards(r),this.updateTournamentDashboard(r),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:s,subStatus:a,sort:r,result:n}=e,o=(c,d,u,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${d}">${u}</button>`;let i="";s==="lobby"?i+=`
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
                        ${o("sort","default","Default",r==="default")}
                        ${o("sort","starting_soon","Starting Soon",r==="starting_soon")}
                        ${o("sort","most_entrants","Most Entrants",r==="most_entrants")}
                        ${o("sort","fewest_spots","Fewest Spots Left",r==="fewest_spots")}
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
                </div>`:s==="my"?i+=`
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
                        ${o("result","all","All",n==="all")}
                        ${o("result","trophy","Won Trophy",n==="trophy")}
                        ${o("result","no_trophy","No Trophy",n==="no_trophy")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${o("sort","default","Default",r==="default")}
                        ${o("sort","recently_active","Recently Active",r==="recently_active")}
                        ${o("sort","starting_soon","Starting Soon",r==="starting_soon")}
                    </div>
                </div>`:s==="completed"&&(i+=`
                <div class="filter-section">
                    <div class="filter-section__title">Result</div>
                    <div class="filter-chips">
                        ${o("result","all","All",n==="all")}
                        ${o("result","trophy","Won Trophy",n==="trophy")}
                        ${o("result","no_trophy","No Trophy",n==="no_trophy")}
                    </div>
                </div>
                <div class="filter-section">
                    <div class="filter-section__title">Sort By</div>
                    <div class="filter-chips">
                        ${o("sort","default","Default",r==="default")}
                        ${o("sort","newest","Newest First",r==="newest")}
                    </div>
                </div>`);const l={lobby:{subStatus:"all",sort:"default",result:"all"},my:{subStatus:"all",sort:"default",result:"all"},completed:{subStatus:"all",sort:"default",result:"all"}};neodigmSodaPop.setOnAfterOpen(()=>{const c=document.getElementById("filter-popup__content--id");if(!c)return;c.innerHTML=`
                ${i}
                <div class="filter-actions">
                    <button class="filter-btn filter-btn--reset" id="filter-reset-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
                        Reset
                    </button>
                    <button class="filter-btn filter-btn--apply" id="filter-apply-btn">Apply</button>
                </div>
            `;let d={subStatus:a,sort:r,result:n};c.addEventListener("click",u=>{const p=u.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,b=p.dataset.filterVal;d[f]=b,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(v=>v.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const u=l[s]||l.lobby;d={...u},Object.keys(u).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${u[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(d)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){le.subscribe("APP",(w,x)=>{console.warn("~~ sub all APP | "+w+"|"+x)}),le.subscribe("WC",(w,x)=>{console.warn("~~ sub all WC  | "+w+"|"+x)}),le.subscribe("ROUTE",(w,x)=>{console.warn("~~ sub all ROUTE  | "+w+"|"+x)});let t="lobby",s="all",a="all",r="default",n="all",o="all",i=localStorage.getItem("bma_view_mode")||"cards";const l=()=>{s="all";const w=document.querySelector("bma-app-head-sports");w&&w.setAttribute("data-selected-chip","all")},c=()=>{const w=document.getElementById("filter-bar__count--id");if(!w)return;let x=0;a!=="all"&&x++,r!=="default"&&x++,n!=="all"&&x++,w.textContent=x,w.style.display=x>0?"":"none"},d=()=>{document.querySelectorAll(".home-tab").forEach(T=>T.classList.remove("home-tab--active"));const x=t==="my"?document.querySelector('[data-home-tab="active"]'):document.querySelector('[data-home-tab="lobby"]');x&&x.classList.add("home-tab--active")},u=()=>{a="all",r="default",n="all",o="all"};document.addEventListener("click",w=>{const x=w.target.closest(".category-filter-toggle");if(x){const P=x.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(P){const $=P.style.display!=="none";P.style.display=$?"none":"",x.classList.toggle("category-filter-toggle--open",!$),window._bmaFilterRowOpen=!$}return}const T=w.target.closest("[data-view-mode]");if(T){const E=T.dataset.viewMode;if(E===i)return;i=E,localStorage.setItem("bma_view_mode",E);const $=T.closest(".tournament-category-header")?.closest(".tournament-category"),O=$?[...document.querySelectorAll(".tournament-category")].indexOf($):-1;document.querySelectorAll("[data-view-mode]").forEach(L=>L.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${E}"]`).forEach(L=>L.classList.add("view-toggle__btn--active")),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"})),O>=0&&requestAnimationFrame(()=>{const L=document.querySelectorAll(".tournament-category");L[O]&&L[O].scrollIntoView({behavior:"smooth",block:"start"})})}}),document.addEventListener("click",w=>{const x=w.target.closest("[data-home-tab]");if(!x)return;const E=x.dataset.homeTab==="active"?"my":"lobby";if(E===t)return;t=E,l(),u(),c(),document.querySelectorAll(".home-tab").forEach($=>$.classList.remove("home-tab--active")),x.classList.add("home-tab--active");const P=document.querySelector("bma-app-head-mid");P&&P.setAttribute("data-selected-tab","head_mid_lobby"),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"}))}),document.addEventListener("change",w=>{const x=w.target.closest(".category-dropdown");if(!x)return;const T=x.dataset.filterType,E=x.value;T==="subStatus"?a=E:T==="sort"?r=E:T==="result"?n=E:T==="odds"&&(o=E),c(),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),le.subscribe(e.hierTopics.COREBETSLIP,(w,x)=>{JSON.parse(x);let T=16;switch(w){case e.hierTopics.COREBETSLIP__BET:T=5,Ys.shootConfetti(),console.log("~~~  |  "+w+" | ",x);const E=document.querySelector("[data-bets-valid]");E&&(E.dataset.betsValid="false");const P=document.querySelector("neodigm-sodapop");P&&P.setAttribute("data-wait","true");const $=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if($.length===0){console.warn("[app_events] No bets to submit"),P&&P.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const O=document.querySelector(".play-cntr"),L=O?.dataset?.currentTournGuid,G=e.appSession?.session_user?.guid;if(!L||!G){console.error("[app_events] Missing tournament or user GUID"),P&&P.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const X=Array.from($).map(A=>{const M=A.getAttribute("data-content-team-points"),I=A.getAttribute("data-content-odds"),B=A.getAttribute("data-stake")||"0",z=A.getAttribute("data-content-type"),Z=A.getAttribute("data-payout")||"0",re=A.getAttribute("data-match-guid")||"",F={};return F[M]={type:z,stake:parseFloat(B),odds:parseFloat(I),payout:parseFloat(Z),reconciled:!1},{acctEntity__guid:G,coreTournaments__guid:L,coreMatches__guid:re,bet:[F],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",X);const ae=O?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const A=window.GameMode.get(ae),I=[...e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(re=>re.coreTournaments__guid===L):[],...X],z=(e.coreTourn.length>0?e.coreTourn[e.coreTourn.length-1]:null)?.data.find(re=>re.guid===L),Z=A.validateBetSlip(I,z,0);if(!Z.valid){console.log("[app_events] Game mode validation failed:",Z.errors),typeof neodigmToast<"u"&&Z.errors.forEach(F=>neodigmToast.q(F,"warning",4e3)),P&&P.setAttribute("data-wait","false");const re=document.querySelector("[data-publish-betslip]");re&&delete re.dataset.processing;break}}Ae.postBetSlips(X).then(A=>{console.log("[app_events] Bet slips posted successfully:",A);const M=X.reduce((I,B)=>{const z=B.bet[0],Z=Object.keys(z)[0];return I+(z[Z]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${M.toFixed(2)}`,"success"),Ae.fetchBetSlips(G,L).then(I=>{if(I?.rows){const B={timestamp:Date.now(),source:"API",data:I.rows};e.pushcoreBetSlip(B),console.log("[app_events] Refreshed bet slips in store:",I.rows.length,"items")}xe.refreshPlayPopupUI(L,I),P&&P.setAttribute("data-wait","false")}).catch(I=>{console.error("[app_events] Error fetching fresh bet slips:",I);const B=document.querySelector("[data-publish-betslip]");B&&delete B.dataset.processing,E&&(E.dataset.betsValid="true"),P&&P.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(A=>{console.error("[app_events] Error posting bet slips:",A);const M=document.querySelector("[data-publish-betslip]");M&&delete M.dataset.processing,E&&(E.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),P&&P.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:T=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&x){x=JSON.parse(x);const M=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&M){const I=e.coreBetSlip[0].data.filter(q=>q.coreTournaments__guid===M),B=[],z=[],Z=[];I.forEach(q=>{const ee=q.bet||[];if(ee.length===0)return;const se=ee[0];Object.keys(se).filter(Y=>Y!=="short_title").forEach(Y=>{const te=se[Y],J=te?.reconciled!==!1,ce=parseFloat(te?.payout||0);J?ce===0?z.push(q):Z.push(q):B.push(q)})});const re=ft.search(B,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,F=ft.search(z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,k=re+F,C=ft.search(Z,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,D=x.tournament_dollars-k+C;xe.updateTDBalance("#summary-balance",D)}else xe.updateTDBalance("#summary-balance",x.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let V=0,Q=0,U=0;if(e.coreBetSlip.length>0){const M=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(M){const B=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(C=>C.coreTournaments__guid===M),z=[],Z=[],re=[];B.forEach(C=>{const D=C.bet||[];if(D.length===0)return;const q=D[0];Object.keys(q).filter(se=>se!=="short_title").forEach(se=>{const ie=q[se],Y=ie?.reconciled!==!1,te=parseFloat(ie?.payout||0);Y?te===0?Z.push(C):re.push(C):z.push(C)})}),V=ft.search(z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Q=ft.search(re,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const F=ft.search(Z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,k=ft.search(re,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;U=F+k}}let R=!0,j=0;const N=document.querySelector("[data-bets-valid]");if(N&&x){x=JSON.parse(x),x.pending_stake_sum=0,x.pending_payout_sum=0,x.bets.length||(R=!1),x.bets.forEach(re=>{re.stake=Number(re.stake),re.stake>0?x.pending_stake_sum+=re.stake:R=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(re=>{const F=parseFloat(re.getAttribute("data-payout")||"0");x.pending_payout_sum+=F});const M=V+x.pending_stake_sum,I=Q+x.pending_payout_sum;j=parseFloat((x.tournament_dollars-M-U+Q).toFixed(2));const z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let Z=null;z&&e.coreTourn.length>0&&(Z=e.coreTourn[e.coreTourn.length-1]?.data?.find(F=>F.guid===z)),xe.updateSummaryAndDashboard(j,M,I,Z,x.pending_payout_sum||0),(x.tournament_dollars<0||j<0)&&(R=!1),N.dataset.betsValid=R}break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T,"QUITE").vibrate()});const p=()=>{const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let T=0;x&&e.coreTourn.length>0&&(T=e.coreTourn[e.coreTourn.length-1].data.find($=>$.guid===x)?.tournament_dollars||0),le.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:T,timestamp:Date.now()}))},f=()=>{const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let T=0;x&&e.coreTourn.length>0&&(T=e.coreTourn[e.coreTourn.length-1].data.find(K=>K.guid===x)?.tournament_dollars||0);let E=0,P=0,$=0,O=0;if(e.coreBetSlip.length>0&&x){const ae=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(N=>N.coreTournaments__guid===x);console.log("[app_events] Filtered bets for tournament:",x,"found:",ae.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",ae[0]);const K=[],V=[],Q=[];ae.forEach(N=>{const A=N.bet||[];if(A.length===0)return;const M=A[0];Object.keys(M).filter(B=>B!=="short_title").forEach(B=>{const z=M[B],Z=z?.reconciled!==!1,re=parseFloat(z?.payout||0);Z?re===0?V.push(N):Q.push(N):K.push(N)})}),console.log("[app_events] Bet categories:",{unreconciled:K.length,reconciledZero:V.length,reconciledNonZero:Q.length});const U=ft.search(K,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,R=ft.search(V,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,j=ft.search(Q,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;$=R+j,P=ft.search(Q,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,O=ft.search(K,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,E=U,console.log("[app_events] Balance calculation:",{unreconciledStakes:U,lostBetStakes:R,wonBetStakes:j,allReconciledStakes:$,displayedStake:E,reconciledPayouts:P,tournamentDollars:T,calculatedBalance:T-E-$+P})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const L=T-E-$+P;let G=null;x&&e.coreTourn.length>0&&(G=e.coreTourn[e.coreTourn.length-1].data.find(ae=>ae.guid===x)),xe.updateSummaryAndDashboard(L,E,P,G,O)};le.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(w,x)=>{const E=JSON.parse(x)?.rows||[],P=document.querySelector(".bet-grid__slip-MYBETS");if(!P)return;if(P.innerHTML="",E.length===0){P.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const G=document.querySelector(".bet-grid__slip");G&&G.setAttribute("data-active-bet-tab","BETSLIP"),p();return}E.forEach(G=>{if((G.bet||[]).length===0)return;const ae=document.createElement("bma-bet-existing");ae.setAttribute("data-corebetslip",JSON.stringify(G)),P.appendChild(ae)});const $=document.querySelector(".bet-grid__slip");$&&$.setAttribute("data-active-bet-tab","MYBETS"),be().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&xe.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",E.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),f()},200)}),document.addEventListener("click",w=>{const x=w.target;if(x&&x.classList.contains("bet-slip-tab")){const T=x.dataset.betTab,E=document.querySelector(".bet-grid__slip");T&&E&&(E.setAttribute("data-active-bet-tab",T),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",T))}if(x&&x.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(x.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}x.dataset.processing="true";const E=x.dataset.publishBetslip;le.publish(E,JSON.stringify({timestamp:Date.now()}))}});const b=()=>{const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let T=0;x&&e.coreTourn.length>0&&(T=e.coreTourn[e.coreTourn.length-1].data.find(L=>L.guid===x)?.tournament_dollars||0);const E=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),P=Array.from(E).map($=>({teamPoints:$.getAttribute("data-content-team-points"),odds:$.getAttribute("data-content-odds"),stake:$.getAttribute("data-stake")||"0",type:$.getAttribute("data-content-type"),abbreviatedTitle:$.getAttribute("data-abbreviated-title"),scheduledAt:$.getAttribute("data-scheduled-at")}));le.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:T,bets:P,timestamp:Date.now()}))},v=(w,x)=>{const T=JSON.parse(x),E=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!E){console.error("[app_events] Bet slip container not found");return}const P=E.querySelector(".bet-slip__empty");P&&P.remove();let $="";T.type==="total"?$=T.team==="over"?"Over":"Under":T.team==="home"?$=T.homeTeam:T.team==="away"&&($=T.awayTeam);let O=$;if(T.point)if(T.type==="spread"){const V=parseFloat(T.point)>0?`+${T.point}`:T.point;O=`${$} ${V}`}else T.type==="total"&&(O=`${$} ${T.point}`);const L=document.createElement("bma-bet-entry");L.setAttribute("data-content-team-points",O),L.setAttribute("data-content-odds",T.price||"0"),L.setAttribute("data-content-stake-text","0"),L.setAttribute("data-content-type",T.type||""),L.setAttribute("data-abbreviated-title",T.abbreviatedTitle||`${T.homeTeam} vs ${T.awayTeam}`),L.setAttribute("data-scheduled-at",T.scheduledAt||""),L.setAttribute("data-match-guid",T.matchGuid||""),L.setAttribute("data-home-team",T.homeTeam||""),L.setAttribute("data-away-team",T.awayTeam||""),L.setAttribute("data-bet-team",$||"");const X=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(X&&e.coreTourn.length>0){const Q=e.coreTourn[e.coreTourn.length-1].data.find(U=>U.guid===X);if(Q?.sports_allowed&&Q.sports_allowed.length>0){const U=Q.sports_allowed[0];L.setAttribute("data-sport-key",U.key||"");const R=Ve.find(j=>j.key===U.key);L.setAttribute("data-sport-group",R?.group||"")}}E.appendChild(L),console.log("[app_events] Bet entry appended to container:",L,"Container children:",E.children.length),setTimeout(()=>{m(L)},0);const ae=document.querySelector(".bet-grid__slip");ae&&(ae.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const K=E.querySelectorAll("bma-bet-entry").length;K>=3?requestAnimationFrame(()=>{setTimeout(()=>{const V=document.querySelector(".bet-grid__slip");V&&(console.log("[app_events] Scrolling parent to bottom - bet count:",K,"scrollHeight:",V.scrollHeight,"current scrollTop:",V.scrollTop),V.scrollTo({top:V.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",V.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",K,"bet cards (need 3+)"),setTimeout(()=>{b()},200),console.log("[app_events] Created bet entry:",{teamPoints:O,odds:T.price,type:T.type})};le.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(w,x)=>{v(w,x),y()}),le.subscribe(e.hierTopics.COREBETSLIP__MONEY,(w,x)=>{v(w,x),y()}),le.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(w,x)=>{v(w,x),y()});function y(){const w=window.matchMedia("(orientation: portrait)").matches,x=window.matchMedia("(max-width: 768px)").matches;if(w||x){const T=document.querySelector(".bet-grid__select"),E=document.querySelector(".bet-grid__slip"),P=document.querySelector(".bet-grid__toggle-text");T&&E&&P&&(T.classList.add("collapsed"),E.classList.remove("collapsed"),P.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const m=w=>{const x={sport:{key:w.getAttribute("data-sport-key")||"",group:w.getAttribute("data-sport-group")||""},Match:{scheduled_at:w.getAttribute("data-scheduled-at")||"",home_team_id:w.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:w.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:w.getAttribute("data-bet-team")||"",over:"",under:""},type:w.getAttribute("data-content-type")||"",odds:w.getAttribute("data-content-odds")||"0",stake:w.getAttribute("data-stake")||"0"}},T=yu.calcPayout(x);w.setAttribute("data-payout",T.toString()),console.log("[app_events] Payout calculated:",{stake:x.Bet.stake,odds:x.Bet.odds,payout:T})};new MutationObserver(w=>{w.forEach(x=>{x.type==="attributes"&&x.attributeName==="data-stake"&&x.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",x.target.getAttribute("data-stake")),m(x.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{b()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",w=>{console.log("[app_events] Removing bet entry:",w.detail);const x=w.target,T=w.detail;x.remove(),setTimeout(()=>{const O=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(O){const L=be(),G=L.coreTourn[L.coreTourn.length-1];if(G&&G.data){const X=G.data.find(ae=>ae.guid===O);X&&xe.updateTournamentDashboard(X)}}},100),document.querySelectorAll("bma-bet-match-card").forEach($=>{($.shadowRoot?.querySelectorAll(".btn")||[]).forEach(L=>{const G=L.dataset.betType,X=L.dataset.price,ae=G===T.type,K=X===T.odds;ae&&K&&L.classList.contains("btn--active")&&(L.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:G,btnPrice:X}))})});const P=document.querySelector(".bet-grid__slip-BETSLIP-content");P&&P.children.length===0&&(P.innerHTML=$r),setTimeout(()=>{b()},100)}),le.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(w,x)=>{const T=JSON.parse(x);T&&T.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${T.guid}"]`)}),le.subscribe(e.hierTopics.WC__APP__FOOT,(w,x)=>{JSON.parse(x);let T=16;switch(w){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:le.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:t="private",l(),u(),c(),d(),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:le.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break}neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()}),le.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(w,x)=>{const T=JSON.parse(x);let E=16;w=="WC.APP.HEAD_SPORTS.PREV"||w=="WC.APP.HEAD_SPORTS.NEXT"||w=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?E=3:(s=T.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${T.group})`),c(),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),E&&neodigmWired4Sound&&neodigmWired4Sound.sound(E).vibrate()}),le.subscribe(e.hierTopics.WC__APP__HEAD_MID,(w,x)=>{JSON.parse(x);let T=16;switch(w){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",l(),u(),c(),d(),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":t="private",l(),u(),c(),d(),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",l(),u(),c(),le.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":T=16,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/top_players_route";break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":le.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()}),le.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(w,x)=>{JSON.parse(x);let T=16;switch(w){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const E=window.deferredPWAPrompt;if(!E){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{E.prompt();const{outcome:$}=await E.userChoice;$==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),T=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch($){console.error("PWA install error:",$),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const O=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:O});const L=document.getElementById("app");L&&L.setAttribute("data-sync-theme",O),document.body.setAttribute("data-sync-theme",O)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":_a.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":_a.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()});const _=w=>{document.querySelectorAll(".play-section").forEach(T=>{T.style.display="none",T.classList.remove("play-section--active")});const x=document.getElementById(`play-section-${w}`);x&&(x.style.display="",x.classList.add("play-section--active"))},S=(w,x)=>{const T=w.split(".").pop(),E=document.querySelectorAll(".play-cntr .dash-nav__btn"),$=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");_(T),E.forEach(O=>{const L=O.dataset.publishRouteHome?.split(".").pop()||"";O.classList.toggle("dash-nav__btn--active",L===T)}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),$&&($.style.overflow=T==="PLAY"?"hidden":"auto")};le.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",S);let g=null;le.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(w,x)=>{if(S(w),g){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}g=setTimeout(()=>{g=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),xe.populateLeaderboard()}),le.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(w,x)=>{JSON.parse(x);const T=document.getElementById("btn-join__play--id");if(!T){console.warn("[app_events] PLAY button not found");return}const E=T.dataset.requiresJoin==="true",P=T.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",P,"requiresJoin:",E),E&&P==="join"){const O=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,L=be();if(!O){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",O),le.publish(L.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:O,timestamp:Date.now()})),T.textContent="Play",T.dataset.requiresJoin="false",setTimeout(()=>{S(w),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else S(w),console.log("[app_events] Advancing carousel to PLAY page")}),le.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(w,x)=>{JSON.parse(x);let T=10;switch(w){case"WC.APP.HEAD_TOP.USER_PROFILE":T=0,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break;case"WC.APP.HEAD_TOP.LOGO":const E=e.appSession.session_app.version,P=new Date().getFullYear();E&&neodigmToast&&neodigmToast.q(`${E} 4/19/2026, 12:40:44 PM|© ${P} Bet Max Action`,"night");break;case"WC.APP.HEAD_TOP.CREATE_CONTEST":le.publish(e.hierTopics.WC__APP__FOOT__MY_TOURNEYS,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()}),le.subscribe(e.hierTopics.WC__TOURN_ACTION,(w,x)=>{const T=JSON.parse(x);let E=0;switch(T?.action){case"JOIN":E=512;break;case"PLAY":E=8;break;case"INFO":E=8;break}if(E){const P=T?.tournamentGuid,$=T?.action;console.log("[app_events] Navigating to play_route:",P,$),setTimeout(()=>{_a.push({name:"play_route",query:{guid:P,action:$}})},E)}}),le.subscribe(e.hierTopics.WC__TOURN_ACTION,(w,x)=>{const T=JSON.parse(x);let E=16;switch(T?.action){case"FOCUS":E=3;break;case"SPORT_ICON":E=10;break;case"JOIN":E=5;break;case"PLAY":E=16;break}E&&neodigmWired4Sound&&neodigmWired4Sound.sound(E).vibrate()}),le.subscribe(e.hierTopics.WC__TOURN_ACTION,(w,x)=>{const T=JSON.parse(x);let E=0,P="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),T?.tournamentStatus){case"UPCOMING":P="success";break;case"LOCKED":P="warning";break;case"COMPLETED":P="danger";break}switch(T?.action){case"SPORT_ICON":T?.sportTitle==T?.sportDescription?E=T?.sportTitle:E=T?.sportTitle+"|"+T?.sportDescription;break}E&&neodigmToast&&neodigmToast.q(E,P)}),le.subscribe(e.hierTopics.WC__TOURN_ACTION,async(w,x)=>{const T=JSON.parse(x);if(T?.action==="JOIN"){const P=be().appSession?.session_user?.guid;if(!P){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const $=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${T.tournamentGuid}"]`);$&&($.setAttribute("data-bma-tourn-wait","true"),Ys.shootConfetti());const O={acctEntityGuid:P,tournamentGuid:T.tournamentGuid};try{const L={method:"POST",body:JSON.stringify(O),headers:Ae.genHeaders()};console.log("Posting to:",Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/coreTournaments/join",O);const X=await(await fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/coreTournaments/join",L)).json();if(console.log("Join response:",X),X.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const ae=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${T.tournamentGuid}"]`);if(ae){ae.setAttribute("data-bma-tourn-wait","false");const K=ae.getAttribute("data-bma-tourn-entities");if(K)try{const V=JSON.parse(K);V.guids.includes(P)||(V.guids.push(P),ae.setAttribute("data-bma-tourn-entities",JSON.stringify(V)))}catch(V){console.error("Failed to parse entities:",V)}}},3e3);else{const ae=X?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(ae,"danger");const K=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${T.tournamentGuid}"]`);K&&K.setAttribute("data-bma-tourn-wait","false")}}catch(L){console.error("Join tournament error:",L),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),le.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(w,x)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const T=be();if(t="lobby",s="all",a="all",r="default",n="all",o="all",T.coreTourn.length>0){console.log("[app_events] coreTourn already populated, hydrating from existing data"),le.publish(T.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"REMOUNT"}));return}try{const E=await Ae.fetchTournaments();console.log("[app_events] Tournaments fetched:",E),E?.rows&&Array.isArray(E.rows)?(T.pushCoreTourn({timestamp:Date.now(),source:"API",data:E.rows}),console.log("[app_events] Pushed to coreTourn, length:",T.coreTourn.length),le.publish(T.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",E)}catch(E){console.error("[app_events] Error fetching tournaments:",E),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),le.subscribe(e.hierTopics.PROMOTION__LOAD,async(w,x)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const T=await Ae.fetchPromotions();if(console.log("[app_events] Promotions fetched:",T),T?.ok&&T?.data&&Array.isArray(T.data)){const E=T.data.filter($=>$.class==="banner"&&$.status==="LIVE");console.log("[app_events] Banner promotions:",E);const P=document.querySelector(".featured-swiper .swiper-wrapper");if(!P){console.warn("[app_events] Swiper wrapper not found");return}if(P.innerHTML="",E.forEach(($,O)=>{const L=document.createElement("div");L.className="swiper-slide";const G=document.createElement("div");G.className=`featured-card featured-card--${O+1}`;const X=$.hero_img?encodeURI($.hero_img):"";G.style.backgroundImage=`url("${X}")`,G.setAttribute("data-promotion-hero-img",$.hero_img||""),G.setAttribute("data-promotion-caption",$.caption||""),G.setAttribute("data-promotion-tagline",$.tagline||""),G.setAttribute("data-promotion-toast",$.toast||""),G.setAttribute("data-promotion-topic",$.topic?.topic||""),G.setAttribute("data-promotion-topic-token",$.topic?.token||""),G.setAttribute("data-promotion-marquee",$.maquee||""),L.appendChild(G),P.appendChild(L)}),console.log("[app_events] Created",E.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),E.length===1){const $=document.querySelector(".featured-swiper .swiper-wrapper");$&&($.style.justifyContent="center")}}}catch(T){console.error("[app_events] Error fetching promotions:",T)}}),le.subscribe(e.hierTopics.PROMOTION__CLICK,(w,x)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const T=JSON.parse(x);console.log("[app_events] Promotion clicked:",T),T.toast&&typeof neodigmToast<"u"&&neodigmToast.q(T.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const E=document.querySelector(".l-promotion #promoHero");E&&T.heroImg&&(E.src=T.heroImg);const P=document.querySelector(".l-promotion #promCaption");P&&T.caption&&(P.textContent=T.caption);const $=document.querySelector(".l-promotion #promoTagline");return $&&T.tagline&&(/<[^>]+>/.test(T.tagline)?$.innerHTML=T.tagline:$.textContent=T.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(T){console.error("[app_events] Error handling promotion click:",T)}}),le.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(w,x)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const T=be();if(T.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const E=T.coreTourn[T.coreTourn.length-1],P=T.coreTourn.length>1?T.coreTourn[T.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",E);const $=[];if(P){const ae=E.data,K=P.data;ae.forEach(V=>{const Q=K.find(U=>U.guid===V.guid);Q&&Q.status!==V.status&&(console.log(`[app_events] Status changed for tournament ${V.guid}: ${Q.status} -> ${V.status}`),$.push(V.guid))})}const O=T.appSession?.session_user?.guid,L=[...E.data].sort((ae,K)=>{const V=ae.status||ae.class,Q=K.status||K.class,U=ae.entities?.guids||[],R=K.entities?.guids||[],j=U.includes(O),N=R.includes(O),A=(C,D)=>{const q=new Date(C.status_time||0).getTime();return new Date(D.status_time||0).getTime()-q},M=V==="LOCKED"&&j,I=Q==="LOCKED"&&N;if(M&&!I)return-1;if(!M&&I)return 1;if(M&&I)return A(ae,K);const B=V==="UPCOMING",z=Q==="UPCOMING";if(B&&!z)return-1;if(!B&&z)return 1;if(B&&z)return A(ae,K);const Z=V==="COMPLETED"&&j,re=Q==="COMPLETED"&&N;if(Z&&!re)return-1;if(!Z&&re)return 1;if(Z&&re)return A(ae,K);const F=V==="COMPLETED"&&!j,k=Q==="COMPLETED"&&!N;return F&&!k?1:!F&&k?-1:A(ae,K)}),G=xe.categorizeTournaments(L,t,s,O,{subStatus:a,sort:r,result:n});if(console.log(`[app_events] Categorized into ${G.length} categories for filter: ${t}/${s} sub:${a} sort:${r} result:${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const ae=document.querySelector(".tournaments-grid");ae&&(ae.dataset.filterContext=t),window._homeRouteRenderCards(G,!0,i,{tab:t,subStatus:a,sort:r,result:n,odds:o});const K=L.filter(N=>{const A=N.status||N.class,M=N.entities?.guids||[];return(A==="LOCKED"||A==="UPCOMING")&&M.includes(O)}).length,V=L.reduce((N,A)=>{const M=A.status||A.class,I=A.entities?.guids||[];return(M==="LOCKED"||M==="UPCOMING")&&I.includes(O)?N+parseFloat(A.tournament_dollars||0):N},0),Q=document.querySelector("bma-app-foot");Q&&Q.setAttribute("data-active-count",String(K));const U=document.querySelector("bma-app-head-mid");U&&U.setAttribute("data-active-count",String(K));const R=document.querySelector("bma-app-head-top");R&&(R.setAttribute("data-active-count",String(K)),R.setAttribute("data-td-dollars",String(V)));const j=document.getElementById("home-tab-active-badge");if(j&&(j.textContent=K,j.style.visibility=K>0?"visible":"hidden"),$.length>0){const N=E.data;$.forEach(A=>{const M=N.find(I=>I.guid===A);if(M){const I=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{le.publish(T.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:A,status:M.status,timestamp:Date.now()}))},I)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available");const X=document.getElementById("bma-scores-banner--id");if(X){const ae=new Set,K=[];for(const V of E.data){const Q=Array.isArray(V.matches_expanded)?V.matches_expanded:[];for(const U of Q){const R=U.guid||U.id||U.odds_id;!R||ae.has(R)||(ae.add(R),K.push(U))}}X.setAttribute("data-matches",JSON.stringify(K))}xe.prefetchGlobalLeaderboard()}),le.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(w,x)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",x);const T=be();try{const E=JSON.parse(x);console.log("[app_events] SSE tournament sync data:",E);const P=JSON.parse(E.msg);if(console.log("[app_events] Parsed tournaments array:",P),!Array.isArray(P)){console.warn("[app_events] SSE msg is not an array:",P);return}T.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:P}),console.log("[app_events] Pushed SSE data to coreTourn, length:",T.coreTourn.length),le.publish(T.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),document.querySelector(".play-cntr")&&(console.log("[SSE] Play route is active, triggering real-time update"),xe.hydratePlayPopup())}catch(E){console.error("[app_events] Error processing SSE tournament sync:",E)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const w=document.querySelector("#caption__my-profile");w&&(w.textContent="My Profile");const x=document.getElementById("profile-trophy-username");x&&(x.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const T=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",T),console.log("[app_events] coreTourn length:",e.coreTourn.length),!T||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const P=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",P.length);const $=X=>{const ae=document.getElementById("profile-stats-panel");ae&&(ae.innerHTML=xe.buildStatsPanel(P,T,X))};$(xe._betStatsCache?.stats||null),xe._ensureBetStatsCache(T).then(X=>{X&&$(X)});let O=0,L=0,G=0;P.forEach((X,ae)=>{if(!X.tags||!Array.isArray(X.tags)){console.log(`[app_events] Tournament ${ae} has no tags or tags not an array`);return}X.tags.forEach((K,V)=>{if(typeof K=="object"&&K!==null){let Q=null;K.entity_guid===T&&K.badge?Q=K.badge:K[T]&&(Q=K[T]),Q==="--badge__ribbon--gold"?O++:Q==="--badge__ribbon--silver"?L++:Q==="--badge__ribbon--bronze"&&G++}})}),setTimeout(()=>{let X=document.querySelectorAll(".badge-counter");if(X.length===0){const ae=document.querySelector("neodigm-sodapop");ae&&(X=ae.querySelectorAll(".badge-counter"))}X.length>=3?(X[0].textContent=L,X[1].textContent=O,X[2].textContent=G,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const X=document.querySelector("#profile-tournaments-list");if(!X||!T||e.coreTourn.length===0)return;const V=e.coreTourn[e.coreTourn.length-1].data.filter(j=>{try{return(typeof j.entities=="string"?JSON.parse(j.entities):j.entities)?.guids?.includes(T)}catch{return!1}}),Q={LOCKED:0,UPCOMING:1,COMPLETED:2};V.sort((j,N)=>{const A=Q[j.status]??3,M=Q[N.status]??3;return A!==M?A-M:new Date(N.status_time||0)-new Date(j.status_time||0)});const U=j=>{let N=V;if(j==="active"?N=V.filter(A=>A.status==="LOCKED"||A.status==="UPCOMING"):j==="completed"&&(N=V.filter(A=>A.status==="COMPLETED")),N.length===0){X.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}X.innerHTML=N.map(A=>{const M=A.entities?JSON.stringify(A.entities).replace(/"/g,"&quot;"):"",I=A.tags?JSON.stringify(A.tags).replace(/"/g,"&quot;"):"[]",B=A.sports_allowed?JSON.stringify(A.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${A.guid||""}"
                                        data-bma-tourn-caption="${A.caption||""}"
                                        data-bma-tourn-tagline="${A.tagline||""}"
                                        data-bma-tourn-status="${A.status||""}"
                                        data-bma-tourn-class="${A.status||""}"
                                        data-bma-tourn-sports_allowed="${B}"
                                        data-bma-tourn-entities="${M}"
                                        data-bma-tourn-entry_fee="${A.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${A.tournament_dollars||0}"
                                        data-bma-tourn-matches="${A.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${I}"
                                        data-bma-tourn-window_start_time="${A.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${A.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{X.querySelectorAll("bma-tournament-list-card").forEach((A,M)=>{A.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",A.style.animationDelay=`${Math.min(M*60,400)}ms`})})};U("all");const R=document.querySelector(".profile-tournaments__filters");R&&R.addEventListener("click",j=>{const N=j.target.closest(".profile-tourn-filter");N&&(R.querySelectorAll(".profile-tourn-filter").forEach(A=>A.classList.remove("profile-tourn-filter--active")),N.classList.add("profile-tourn-filter--active"),U(N.dataset.filter))})},600)},1e3)},"sodapop_my_profile"))},3e3),window._renderTopPlayers=async function(w="ALL"){const x=be(),T=document.getElementById("global-leaderboard-container");if(T){T.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{let E;const P=xe._globalLBCache[w];P?.data&&Date.now()-P.ts<300*1e3?(console.log(`[Global Leaderboard] Using prefetched cache [${w}]`),E=P.data):(console.log(`[Global Leaderboard] Cache miss [${w}], fetching fresh`),E=await Ae.fetchAllTimeLeaderboard(w,100,"td"),xe._globalLBCache[w]={data:E,ts:Date.now(),inflight:!1});const $=E?.data||[],O=E?.last_updated||null,L=x.coreTourn.length>0?x.coreTourn[x.coreTourn.length-1].data:[];if(!$.length){T.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const G=T,X=x.appSession?.session_user?.guid,ae={};$.forEach(I=>{const B=I.user_guid;ae[B]={username:I.username||"Unknown",user_guid:B,totalTDWon:parseFloat(I.total_payout||0),totalPayout:parseFloat(I.total_payout||0),totalBets:parseInt(I.total_betslips||0),tournamentsPlayed:parseInt(I.tournaments_joined||0),tournamentsWon:parseInt(I.tournaments_won||0),totalTD:parseFloat(I.total_td_dollars||0),gold:0,silver:0,bronze:0,sports:new Set}}),L.forEach(I=>{!I.tags||!Array.isArray(I.tags)||I.tags.forEach(B=>{if(typeof B!="object"||!B)return;let z=null,Z=null;if(B.entity_guid&&B.badge){if(B.entity_guid==="SYSTEM")return;z=B.entity_guid,Z=B.badge}else{const F=Object.keys(B);for(const k of F){const C=B[k];if(typeof C=="string"&&C.startsWith("--badge__ribbon--")){z=k,Z=C;break}}}if(!z||!Z)return;ae[z]||(ae[z]={username:z.substring(0,8),user_guid:z,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,totalTD:0,gold:0,silver:0,bronze:0,sports:new Set});const re=ae[z];Z==="--badge__ribbon--gold"?re.gold++:Z==="--badge__ribbon--silver"?re.silver++:Z==="--badge__ribbon--bronze"&&re.bronze++})});const K=Object.values(ae).filter(I=>I.username!=="Unknown");if(O){const I=Math.round((Date.now()-new Date(O).getTime())/6e4),B=I<1?"just now":I===1?"1 minute ago":`${I} minutes ago`;console.log(`[Global Leaderboard] Server last updated ${B}`)}const V=K.filter(I=>I.gold+I.silver+I.bronze>0),Q=new Set;K.forEach(I=>I.sports.forEach(B=>Q.add(B)));const U={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},R=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let j="all";const N=(I,B)=>{let z=[...K],Z;I==="overall"&&(z=z.filter(Y=>Y.gold+Y.silver+Y.bronze>0)),I==="bysport"&&B&&B!=="all"&&(z=z.filter(Y=>Y.sports.has(B)));const re=G.querySelector(".glb__note");switch(re&&re.remove(),I){case"overall":z.sort((Y,te)=>te.gold*100+te.silver*10+te.bronze-(Y.gold*100+Y.silver*10+Y.bronze)||te.totalPayout-Y.totalPayout||te.totalBets-Y.totalBets),Z=(Y,te,J,ce,ne)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${te<3?"glb__rank--top3":""}">#${te+1}</span>
                                                <span class="glb__avatar" style="background: ${ce};">${J}</span>
                                                <span class="glb__name">${Y.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right">
                                                ${Y.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${Y.gold}</span></div>`:""}
                                                ${Y.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${Y.silver}</span></div>`:""}
                                                ${Y.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${Y.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":z=z.filter(Y=>Y.totalTDWon>0),z.sort((Y,te)=>te.totalTDWon-Y.totalTDWon),Z=(Y,te,J,ce,ne)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${te<3?"glb__rank--top3":""}">#${te+1}</span>
                                                <span class="glb__avatar" style="background: ${ce};">${J}</span>
                                                <span class="glb__name">${Y.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__earnings">TD$ ${Math.round(Y.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":z.sort((Y,te)=>te.totalPayout-Y.totalPayout||te.totalBets-Y.totalBets),Z=(Y,te,J,ce,ne)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${te<3?"glb__rank--top3":""}">#${te+1}</span>
                                                <span class="glb__avatar" style="background: ${ce};">${J}</span>
                                                <span class="glb__name">${Y.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right" style="gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${Y.totalBets} bets</span>
                                                <span class="glb__earnings">TD$ ${Y.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const F=G.querySelector(".glb__list");if(!F)return;if(z.length===0){const Y=I==="earnings"?"No TD$ won from reconciled bets yet":I==="bysport"?"No players found for this sport":"No leaderboard data available";F.innerHTML=`<div class="leaderboard-empty"><p>${Y}</p></div>`;return}const k=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],C=Y=>k[Y.charCodeAt(0)%k.length];let D="";if(I==="overall"&&z.length>=3){const Y=(te,J,ce,ne,de)=>{const ue=z[te],fe=ue.user_guid===X;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${J===1?80:J===2?64:56}px; height: ${J===1?80:J===2?64:56}px; background-image: var(${ne}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${fe?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${ue.username}${fe?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${ue.gold+ue.silver+ue.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${ce}px; background: linear-gradient(180deg, ${de}33 0%, ${de}0D 100%); border-top: 3px solid ${de}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${de};">${J===1?"1st":J===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};D=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${Y(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${Y(0,1,90,"--badge__gold","#FFD700")}
                                        ${Y(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const q='<div class="info-section__title">Rankings</div>',ee='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',se='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(I==="bysport"&&!G.querySelector(".glb__note")){const te=document.createElement("div");te.className="glb__note",te.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",te.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const J=G.querySelector(".glb__sport-filters");J&&J.parentNode.insertBefore(te,J)}let ie="";if(I==="earnings"&&z.length>=3){const Y=(te,J,ce,ne)=>{const de=z[te],ue=de.user_guid===X;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${J===1?80:J===2?64:56}px; height: ${J===1?80:J===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${ue?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${de.username}${ue?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(de.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${ce}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${J===1?"1st":J===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};ie=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${Y(1,2,70,"#00E676")}
                                        ${Y(0,1,90,"#00E676")}
                                        ${Y(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(I==="overall")F.innerHTML=D+ee+q+z.map((Y,te)=>{const J=(Y.username||"?")[0].toUpperCase(),ce=C(Y.username),ne=Y.user_guid===X;return Z(Y,te,J,ce,ne)}).join("");else if(I==="earnings"){const Y='<div class="info-section__title">TD$ Won</div>';F.innerHTML=ie+se+Y+z.map((te,J)=>{const ce=(te.username||"?")[0].toUpperCase(),ne=C(te.username),de=te.user_guid===X;return Z(te,J,ce,ne,de)}).join("")}else if(I==="bysport"){let Y="";if(z.length>=3){const J=(ce,ne,de)=>{const ue=z[ce],fe=ue.user_guid===X,we=C(ue.username),_e=(ue.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${we}; width: ${ne===1?48:38}px; height: ${ne===1?48:38}px; font-size: ${ne===1?"1rem":"0.8rem"};">${_e}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${fe?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${ue.username}${fe?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${ue.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${de}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${ne===1?"1st":ne===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};Y=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${J(1,2,70)}
                                            ${J(0,1,90)}
                                            ${J(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const te='<div class="info-section__title">Rankings</div>';F.innerHTML=Y+te+z.map((J,ce)=>{const ne=(J.username||"?")[0].toUpperCase(),de=C(J.username),ue=J.user_guid===X;return Z(J,ce,ne,de,ue)}).join("")}requestAnimationFrame(()=>{F.querySelectorAll(".glb__card, .info-row").forEach((Y,te)=>{Y.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",Y.style.animationDelay=`${Math.min(te*50,400)}ms`})})},A=[...Q].map(I=>{const B=U[I]||I.replace(/^[a-z]+_/,"").toUpperCase(),z=Ve.find(re=>re.key===I),Z=z?z.group:"default";return`<button class="glb__sport-chip" data-sport="${I}">
                                <bma-sport-icon sport="${I}" data-sport-group="${Z}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${B}</span>
                            </button>`}).join("");G.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${R.map((I,B)=>`
                                    <button class="glb__tab ${B===0?"glb__tab--active":""}" data-tab="${I.id}">${I.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${A}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const M=document.createElement("style");M.textContent=`
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
                        `,G.prepend(M),N("overall"),G.querySelectorAll(".glb__tab").forEach(I=>{I.addEventListener("click",()=>{G.querySelectorAll(".glb__tab").forEach(Z=>Z.classList.remove("glb__tab--active")),I.classList.add("glb__tab--active");const B=I.dataset.tab,z=G.querySelector(".glb__sport-filters");z&&(z.style.display=B==="bysport"?"flex":"none"),N(B,B==="bysport"?j:void 0)})}),G.querySelectorAll(".glb__sport-chip").forEach(I=>{I.addEventListener("click",()=>{G.querySelectorAll(".glb__sport-chip").forEach(B=>B.classList.remove("glb__sport-chip--active")),I.classList.add("glb__sport-chip--active"),j=I.dataset.sport,N("bysport",j)})})}catch(E){console.error("[appEvents] Error fetching global leaderboard:",E);const P=document.getElementById("global-leaderboard-container");P&&(P.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>')}}},setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){window._renderTopPlayers&&await window._renderTopPlayers()},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},L_={__name:"App",setup(e){const t=ut(),s=be();return bt(()=>{setTimeout(()=>{const a=s.appSession?.session_user?.guid,r=s.appSession?.session_user?.authenticated;a&&r&&s.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",a),Kr.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",a,s,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:Ae.API_baseURI})},2e3),setTimeout(()=>{xe.bindAppListeners(s)},3e3),t.beforeEach((a,r,n)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?n():n(!1)}),(a,r)=>(Me(),fo(lt(hu),null,{default:oo(({Component:n})=>[tt(qf,{name:"slide-left"},{default:oo(()=>[(Me(),fo(Vp(n)))]),_:2},1024)]),_:1}))}};class Ou{constructor(){this.id="DEFAULT",this.label="Free Play",this.description="Place any bets you want across the tournament slate."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:[],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:0,stakeRule:"FREE",stakeMin:1,stakeMax:null,allowPartialSubmit:!0,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!1}}getEffectiveRules(t){const s=this.rules;if(!t?.tags||!Array.isArray(t.tags))return s;const a=t.tags.find(r=>typeof r=="object"&&r!==null&&r.game_rules);return a?.game_rules?{...s,...a.game_rules}:s}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","totalBets"],bonuses:[],penalizeMissing:!1}}_parseBets(t){const s=[];return t.forEach(a=>{const r=a.coreMatches__guid||a.match_guid||"";(a.bet||[]).forEach(o=>{Object.keys(o).forEach(i=>{if(i==="short_title")return;const l=o[i];l&&s.push({matchGuid:r,type:(l.type||"").toUpperCase(),team:i,stake:parseFloat(l.stake||0),payout:parseFloat(l.payout||0),odds:parseFloat(l.odds||0),reconciled:l.reconciled||!1})})})}),s}_getTypeCounts(t){const s={};return t.forEach(a=>{s[a.type]=(s[a.type]||0)+1}),s}_getTotalStakes(t){return parseFloat(t.reduce((s,a)=>s+a.stake,0).toFixed(2))}_typeLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money Line";case"TOTAL":return"Over/Under";default:return t}}_typeShortLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money";case"TOTAL":return"Total";default:return t}}canPlaceBet(t,s,a){const r=this.getEffectiveRules(a),n=this._parseBets(s),o=(t.type||"").toUpperCase();return r.oneBetPerMatchPerType&&n.find(l=>l.matchGuid===t.matchGuid&&l.type===o)?{allowed:!1,reason:`You already have a ${this._typeLabel(o)} bet on this match`}:r.maxBetsPerType>0&&n.filter(l=>l.type===o).length>=r.maxBetsPerType?{allowed:!1,reason:`Maximum ${r.maxBetsPerType} ${this._typeLabel(o)} bets reached`}:r.maxBetsTotal>0&&n.length>=r.maxBetsTotal?{allowed:!1,reason:`Maximum ${r.maxBetsTotal} total bets reached`}:{allowed:!0,reason:null}}validateBetSlip(t,s,a){const r=this.getEffectiveRules(s),n=[],o=[],i=this._parseBets(t),l=this._getTypeCounts(i),c=this._getTotalStakes(i),d=parseFloat(s?.tournament_dollars||0);if(r.requiredBetTypes.forEach(u=>{l[u]||n.push(`You need at least one ${this._typeLabel(u)} bet`)}),r.minBetsTotal>0&&i.length<r.minBetsTotal&&n.push(`Place at least ${r.minBetsTotal} bets`),r.stakeRule==="SPEND_ALL"&&d>0){if(c<d){const u=parseFloat((d-c).toFixed(2));n.push(`You have TD$ ${u.toLocaleString()} left to spend — use your entire balance`)}else if(c>d+.01){const u=parseFloat((c-d).toFixed(2));n.push(`You've exceeded your TD$ balance by ${u.toLocaleString()}`)}}return!r.allowPartialSubmit&&n.length>0,{valid:n.length===0,errors:n,warnings:o}}scoreEntry(t,s){const a=parseFloat(t.total_payout||0);return{score:a,breakdown:{payout:a}}}rankLeaderboard(t,s){return[...t].sort((a,r)=>{const n=this.scoreEntry(a,s).score;return this.scoreEntry(r,s).score-n})}getProgressUI(t,s){const a=this.getEffectiveRules(s),r=a.requiredBetTypes.length>0,n=a.stakeRule==="SPEND_ALL";if(!r&&!n)return{type:"NONE",percent:0,label:"",hints:[],typesStatus:[],complete:!0};const o=this._parseBets(t),i=this._getTypeCounts(o),l=this._getTotalStakes(o),c=parseFloat(s?.tournament_dollars||0),d=c>0?Math.min(100,Math.round(l/c*100)):0,u=a.requiredBetTypes.every(m=>i[m]),p=!n||Math.abs(l-c)<.01,f=a.requiredBetTypes.map(m=>({type:m,label:this._typeShortLabel(m),placed:!!i[m],count:i[m]||0})),b=[],y=a.requiredBetTypes.filter(m=>!i[m]).map(m=>this._typeLabel(m));return y.length>0&&!p?b.push(`Need a ${y.join(", ")} bet · Spend all TD$ ${Math.round(c).toLocaleString()}`):y.length>0?b.push(`Need a ${y.join(", ")} bet`):!p&&l<c&&b.push(`TD$ ${Math.round(c-l).toLocaleString()} left to allocate`),{type:r?"BET_TYPES":"STAKE_PROGRESS",percent:d,label:n?`TD$ ${Math.round(l).toLocaleString()} / ${Math.round(c).toLocaleString()} spent`:`${o.length} bets placed`,typesStatus:f,hints:b,complete:u&&p}}getValidationMessages(t,s,a){return this.getProgressUI(t,s).hints}getBadge(){return null}getRulesHTML(t){return"<p>Place bets on any matches in the tournament. The player with the highest total payout wins.</p>"}getEmptyStateText(){return"Select a match to start betting"}}class gl extends Ou{constructor(){super(),this.id="DEFAULT_FORMAT",this.label="Free Play",this.description="Place any bets you want across the tournament slate."}get scoring(){return{method:"POTENTIAL_WINNINGS",rankBy:["score","pendingPayout","timestamp"],bonuses:[],penalizeMissing:!1}}scoreEntry(t,s){const a=parseFloat(t.tournament_dollars??s?.tournament_dollars??0),r=this._parseBets(t.bets||[]);let n=0,o=0,i=0;r.forEach(d=>{n+=d.stake,d.reconciled?i+=d.payout:o+=d.payout});const l=a-n;return{score:parseFloat((l+o+i).toFixed(2)),breakdown:{startingTD:parseFloat(a.toFixed(2)),remainingTD:parseFloat(l.toFixed(2)),totalStakes:parseFloat(n.toFixed(2)),pendingPayout:parseFloat(o.toFixed(2)),settledPayout:parseFloat(i.toFixed(2))}}}rankLeaderboard(t,s){return[...t].map(a=>({entry:a,...this.scoreEntry(a,s)})).sort((a,r)=>{if(r.score!==a.score)return r.score-a.score;if(r.breakdown.pendingPayout!==a.breakdown.pendingPayout)return r.breakdown.pendingPayout-a.breakdown.pendingPayout;const n=new Date(a.entry.timestamp||0).getTime(),o=new Date(r.entry.timestamp||0).getTime();return n-o}).map(a=>a.entry)}}class D_ extends Ou{constructor(){super(),this.id="SET_IT_AND_FORGET_IT",this.label="Set It and Forget It",this.description="Build your lineup with one of each bet type across the slate. Spend all your TD$."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:["SPREAD","MONEY","TOTAL"],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:3,stakeRule:"SPEND_ALL",stakeMin:1,stakeMax:null,allowPartialSubmit:!1,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!0}}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","betCount","timestamp"],bonuses:[],penalizeMissing:!0}}getBadge(){return{label:"Set & Forget",color:"ghost"}}getEmptyStateText(){return"Build your lineup — place one of each bet type and spend all your TD$"}getRulesHTML(t){const s=t?.tournament_dollars||0;return`
            <div style="padding: 12px 0;">
                <p style="margin: 0 0 8px; font-weight: 600; color: rgba(255,255,255,0.85);">Set It and Forget It Rules:</p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.8;">
                    <li>Place at least one <strong>Spread</strong>, one <strong>Money Line</strong>, and one <strong>Over/Under</strong> bet</li>
                    <li>You must spend your entire <strong>TD$ ${Number(s).toLocaleString()}</strong> balance across all bets</li>
                    <li>One bet per match per bet type (no duplicates)</li>
                    <li>Highest total payout wins the tournament</li>
                </ul>
            </div>`}}var Ha={exports:{}},Gn={},jt={},Ts={},Vn={},Kn={},Yn={},bl;function Yr(){return bl||(bl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class s extends t{constructor(h){if(super(),!e.IDENTIFIER.test(h))throw new Error("CodeGen: name must be a valid identifier");this.str=h}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=s;class a extends t{constructor(h){super(),this._items=typeof h=="string"?[h]:h}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const h=this._items[0];return h===""||h==='""'}get str(){var h;return(h=this._str)!==null&&h!==void 0?h:this._str=this._items.reduce((_,S)=>`${_}${S}`,"")}get names(){var h;return(h=this._names)!==null&&h!==void 0?h:this._names=this._items.reduce((_,S)=>(S instanceof s&&(_[S.str]=(_[S.str]||0)+1),_),{})}}e._Code=a,e.nil=new a("");function r(m,...h){const _=[m[0]];let S=0;for(;S<h.length;)i(_,h[S]),_.push(m[++S]);return new a(_)}e._=r;const n=new a("+");function o(m,...h){const _=[f(m[0])];let S=0;for(;S<h.length;)_.push(n),i(_,h[S]),_.push(n,f(m[++S]));return l(_),new a(_)}e.str=o;function i(m,h){h instanceof a?m.push(...h._items):h instanceof s?m.push(h):m.push(u(h))}e.addCodeArg=i;function l(m){let h=1;for(;h<m.length-1;){if(m[h]===n){const _=c(m[h-1],m[h+1]);if(_!==void 0){m.splice(h-1,3,_);continue}m[h++]="+"}h++}}function c(m,h){if(h==='""')return m;if(m==='""')return h;if(typeof m=="string")return h instanceof s||m[m.length-1]!=='"'?void 0:typeof h!="string"?`${m.slice(0,-1)}${h}"`:h[0]==='"'?m.slice(0,-1)+h.slice(1):void 0;if(typeof h=="string"&&h[0]==='"'&&!(m instanceof s))return`"${m}${h.slice(1)}`}function d(m,h){return h.emptyStr()?m:m.emptyStr()?h:o`${m}${h}`}e.strConcat=d;function u(m){return typeof m=="number"||typeof m=="boolean"||m===null?m:f(Array.isArray(m)?m.join(","):m)}function p(m){return new a(f(m))}e.stringify=p;function f(m){return JSON.stringify(m).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=f;function b(m){return typeof m=="string"&&e.IDENTIFIER.test(m)?new a(`.${m}`):r`[${m}]`}e.getProperty=b;function v(m){if(typeof m=="string"&&e.IDENTIFIER.test(m))return new a(`${m}`);throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`)}e.getEsmExportName=v;function y(m){return new a(m.toString())}e.regexpCode=y})(Yn)),Yn}var Wn={},_l;function vl(){return _l||(_l=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=Yr();class s extends Error{constructor(c){super(`CodeGen: "code" for ${c} not defined`),this.value=c.value}}var a;(function(l){l[l.Started=0]="Started",l[l.Completed=1]="Completed"})(a||(e.UsedValueState=a={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class r{constructor({prefixes:c,parent:d}={}){this._names={},this._prefixes=c,this._parent=d}toName(c){return c instanceof t.Name?c:this.name(c)}name(c){return new t.Name(this._newName(c))}_newName(c){const d=this._names[c]||this._nameGroup(c);return`${c}${d.index++}`}_nameGroup(c){var d,u;if(!((u=(d=this._parent)===null||d===void 0?void 0:d._prefixes)===null||u===void 0)&&u.has(c)||this._prefixes&&!this._prefixes.has(c))throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);return this._names[c]={prefix:c,index:0}}}e.Scope=r;class n extends t.Name{constructor(c,d){super(d),this.prefix=c}setValue(c,{property:d,itemIndex:u}){this.value=c,this.scopePath=(0,t._)`.${new t.Name(d)}[${u}]`}}e.ValueScopeName=n;const o=(0,t._)`\n`;class i extends r{constructor(c){super(c),this._values={},this._scope=c.scope,this.opts={...c,_n:c.lines?o:t.nil}}get(){return this._scope}name(c){return new n(c,this._newName(c))}value(c,d){var u;if(d.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const p=this.toName(c),{prefix:f}=p,b=(u=d.key)!==null&&u!==void 0?u:d.ref;let v=this._values[f];if(v){const h=v.get(b);if(h)return h}else v=this._values[f]=new Map;v.set(b,p);const y=this._scope[f]||(this._scope[f]=[]),m=y.length;return y[m]=d.ref,p.setValue(d,{property:f,itemIndex:m}),p}getValue(c,d){const u=this._values[c];if(u)return u.get(d)}scopeRefs(c,d=this._values){return this._reduceValues(d,u=>{if(u.scopePath===void 0)throw new Error(`CodeGen: name "${u}" has no value`);return(0,t._)`${c}${u.scopePath}`})}scopeCode(c=this._values,d,u){return this._reduceValues(c,p=>{if(p.value===void 0)throw new Error(`CodeGen: name "${p}" has no value`);return p.value.code},d,u)}_reduceValues(c,d,u={},p){let f=t.nil;for(const b in c){const v=c[b];if(!v)continue;const y=u[b]=u[b]||new Map;v.forEach(m=>{if(y.has(m))return;y.set(m,a.Started);let h=d(m);if(h){const _=this.opts.es5?e.varKinds.var:e.varKinds.const;f=(0,t._)`${f}${_} ${m} = ${h};${this.opts._n}`}else if(h=p?.(m))f=(0,t._)`${f}${h}${this.opts._n}`;else throw new s(m);y.set(m,a.Completed)})}return f}}e.ValueScope=i})(Wn)),Wn}var yl;function ge(){return yl||(yl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=Yr(),s=vl();var a=Yr();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return a._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return a.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return a.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return a.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return a.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return a.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return a.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return a.Name}});var r=vl();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return r.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return r.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return r.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return r.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class n{optimizeNodes(){return this}optimizeNames(A,M){return this}}class o extends n{constructor(A,M,I){super(),this.varKind=A,this.name=M,this.rhs=I}render({es5:A,_n:M}){const I=A?s.varKinds.var:this.varKind,B=this.rhs===void 0?"":` = ${this.rhs}`;return`${I} ${this.name}${B};`+M}optimizeNames(A,M){if(A[this.name.str])return this.rhs&&(this.rhs=G(this.rhs,A,M)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class i extends n{constructor(A,M,I){super(),this.lhs=A,this.rhs=M,this.sideEffects=I}render({_n:A}){return`${this.lhs} = ${this.rhs};`+A}optimizeNames(A,M){if(!(this.lhs instanceof t.Name&&!A[this.lhs.str]&&!this.sideEffects))return this.rhs=G(this.rhs,A,M),this}get names(){const A=this.lhs instanceof t.Name?{}:{...this.lhs.names};return L(A,this.rhs)}}class l extends i{constructor(A,M,I,B){super(A,I,B),this.op=M}render({_n:A}){return`${this.lhs} ${this.op}= ${this.rhs};`+A}}class c extends n{constructor(A){super(),this.label=A,this.names={}}render({_n:A}){return`${this.label}:`+A}}class d extends n{constructor(A){super(),this.label=A,this.names={}}render({_n:A}){return`break${this.label?` ${this.label}`:""};`+A}}class u extends n{constructor(A){super(),this.error=A}render({_n:A}){return`throw ${this.error};`+A}get names(){return this.error.names}}class p extends n{constructor(A){super(),this.code=A}render({_n:A}){return`${this.code};`+A}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(A,M){return this.code=G(this.code,A,M),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class f extends n{constructor(A=[]){super(),this.nodes=A}render(A){return this.nodes.reduce((M,I)=>M+I.render(A),"")}optimizeNodes(){const{nodes:A}=this;let M=A.length;for(;M--;){const I=A[M].optimizeNodes();Array.isArray(I)?A.splice(M,1,...I):I?A[M]=I:A.splice(M,1)}return A.length>0?this:void 0}optimizeNames(A,M){const{nodes:I}=this;let B=I.length;for(;B--;){const z=I[B];z.optimizeNames(A,M)||(X(A,z.names),I.splice(B,1))}return I.length>0?this:void 0}get names(){return this.nodes.reduce((A,M)=>O(A,M.names),{})}}class b extends f{render(A){return"{"+A._n+super.render(A)+"}"+A._n}}class v extends f{}class y extends b{}y.kind="else";class m extends b{constructor(A,M){super(M),this.condition=A}render(A){let M=`if(${this.condition})`+super.render(A);return this.else&&(M+="else "+this.else.render(A)),M}optimizeNodes(){super.optimizeNodes();const A=this.condition;if(A===!0)return this.nodes;let M=this.else;if(M){const I=M.optimizeNodes();M=this.else=Array.isArray(I)?new y(I):I}if(M)return A===!1?M instanceof m?M:M.nodes:this.nodes.length?this:new m(ae(A),M instanceof m?[M]:M.nodes);if(!(A===!1||!this.nodes.length))return this}optimizeNames(A,M){var I;if(this.else=(I=this.else)===null||I===void 0?void 0:I.optimizeNames(A,M),!!(super.optimizeNames(A,M)||this.else))return this.condition=G(this.condition,A,M),this}get names(){const A=super.names;return L(A,this.condition),this.else&&O(A,this.else.names),A}}m.kind="if";class h extends b{}h.kind="for";class _ extends h{constructor(A){super(),this.iteration=A}render(A){return`for(${this.iteration})`+super.render(A)}optimizeNames(A,M){if(super.optimizeNames(A,M))return this.iteration=G(this.iteration,A,M),this}get names(){return O(super.names,this.iteration.names)}}class S extends h{constructor(A,M,I,B){super(),this.varKind=A,this.name=M,this.from=I,this.to=B}render(A){const M=A.es5?s.varKinds.var:this.varKind,{name:I,from:B,to:z}=this;return`for(${M} ${I}=${B}; ${I}<${z}; ${I}++)`+super.render(A)}get names(){const A=L(super.names,this.from);return L(A,this.to)}}class g extends h{constructor(A,M,I,B){super(),this.loop=A,this.varKind=M,this.name=I,this.iterable=B}render(A){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(A)}optimizeNames(A,M){if(super.optimizeNames(A,M))return this.iterable=G(this.iterable,A,M),this}get names(){return O(super.names,this.iterable.names)}}class w extends b{constructor(A,M,I){super(),this.name=A,this.args=M,this.async=I}render(A){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(A)}}w.kind="func";class x extends f{render(A){return"return "+super.render(A)}}x.kind="return";class T extends b{render(A){let M="try"+super.render(A);return this.catch&&(M+=this.catch.render(A)),this.finally&&(M+=this.finally.render(A)),M}optimizeNodes(){var A,M;return super.optimizeNodes(),(A=this.catch)===null||A===void 0||A.optimizeNodes(),(M=this.finally)===null||M===void 0||M.optimizeNodes(),this}optimizeNames(A,M){var I,B;return super.optimizeNames(A,M),(I=this.catch)===null||I===void 0||I.optimizeNames(A,M),(B=this.finally)===null||B===void 0||B.optimizeNames(A,M),this}get names(){const A=super.names;return this.catch&&O(A,this.catch.names),this.finally&&O(A,this.finally.names),A}}class E extends b{constructor(A){super(),this.error=A}render(A){return`catch(${this.error})`+super.render(A)}}E.kind="catch";class P extends b{render(A){return"finally"+super.render(A)}}P.kind="finally";class ${constructor(A,M={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...M,_n:M.lines?`
`:""},this._extScope=A,this._scope=new s.Scope({parent:A}),this._nodes=[new v]}toString(){return this._root.render(this.opts)}name(A){return this._scope.name(A)}scopeName(A){return this._extScope.name(A)}scopeValue(A,M){const I=this._extScope.value(A,M);return(this._values[I.prefix]||(this._values[I.prefix]=new Set)).add(I),I}getScopeValue(A,M){return this._extScope.getValue(A,M)}scopeRefs(A){return this._extScope.scopeRefs(A,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(A,M,I,B){const z=this._scope.toName(M);return I!==void 0&&B&&(this._constants[z.str]=I),this._leafNode(new o(A,z,I)),z}const(A,M,I){return this._def(s.varKinds.const,A,M,I)}let(A,M,I){return this._def(s.varKinds.let,A,M,I)}var(A,M,I){return this._def(s.varKinds.var,A,M,I)}assign(A,M,I){return this._leafNode(new i(A,M,I))}add(A,M){return this._leafNode(new l(A,e.operators.ADD,M))}code(A){return typeof A=="function"?A():A!==t.nil&&this._leafNode(new p(A)),this}object(...A){const M=["{"];for(const[I,B]of A)M.length>1&&M.push(","),M.push(I),(I!==B||this.opts.es5)&&(M.push(":"),(0,t.addCodeArg)(M,B));return M.push("}"),new t._Code(M)}if(A,M,I){if(this._blockNode(new m(A)),M&&I)this.code(M).else().code(I).endIf();else if(M)this.code(M).endIf();else if(I)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(A){return this._elseNode(new m(A))}else(){return this._elseNode(new y)}endIf(){return this._endBlockNode(m,y)}_for(A,M){return this._blockNode(A),M&&this.code(M).endFor(),this}for(A,M){return this._for(new _(A),M)}forRange(A,M,I,B,z=this.opts.es5?s.varKinds.var:s.varKinds.let){const Z=this._scope.toName(A);return this._for(new S(z,Z,M,I),()=>B(Z))}forOf(A,M,I,B=s.varKinds.const){const z=this._scope.toName(A);if(this.opts.es5){const Z=M instanceof t.Name?M:this.var("_arr",M);return this.forRange("_i",0,(0,t._)`${Z}.length`,re=>{this.var(z,(0,t._)`${Z}[${re}]`),I(z)})}return this._for(new g("of",B,z,M),()=>I(z))}forIn(A,M,I,B=this.opts.es5?s.varKinds.var:s.varKinds.const){if(this.opts.ownProperties)return this.forOf(A,(0,t._)`Object.keys(${M})`,I);const z=this._scope.toName(A);return this._for(new g("in",B,z,M),()=>I(z))}endFor(){return this._endBlockNode(h)}label(A){return this._leafNode(new c(A))}break(A){return this._leafNode(new d(A))}return(A){const M=new x;if(this._blockNode(M),this.code(A),M.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(x)}try(A,M,I){if(!M&&!I)throw new Error('CodeGen: "try" without "catch" and "finally"');const B=new T;if(this._blockNode(B),this.code(A),M){const z=this.name("e");this._currNode=B.catch=new E(z),M(z)}return I&&(this._currNode=B.finally=new P,this.code(I)),this._endBlockNode(E,P)}throw(A){return this._leafNode(new u(A))}block(A,M){return this._blockStarts.push(this._nodes.length),A&&this.code(A).endBlock(M),this}endBlock(A){const M=this._blockStarts.pop();if(M===void 0)throw new Error("CodeGen: not in self-balancing block");const I=this._nodes.length-M;if(I<0||A!==void 0&&I!==A)throw new Error(`CodeGen: wrong number of nodes: ${I} vs ${A} expected`);return this._nodes.length=M,this}func(A,M=t.nil,I,B){return this._blockNode(new w(A,M,I)),B&&this.code(B).endFunc(),this}endFunc(){return this._endBlockNode(w)}optimize(A=1){for(;A-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(A){return this._currNode.nodes.push(A),this}_blockNode(A){this._currNode.nodes.push(A),this._nodes.push(A)}_endBlockNode(A,M){const I=this._currNode;if(I instanceof A||M&&I instanceof M)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${M?`${A.kind}/${M.kind}`:A.kind}"`)}_elseNode(A){const M=this._currNode;if(!(M instanceof m))throw new Error('CodeGen: "else" without "if"');return this._currNode=M.else=A,this}get _root(){return this._nodes[0]}get _currNode(){const A=this._nodes;return A[A.length-1]}set _currNode(A){const M=this._nodes;M[M.length-1]=A}}e.CodeGen=$;function O(N,A){for(const M in A)N[M]=(N[M]||0)+(A[M]||0);return N}function L(N,A){return A instanceof t._CodeOrName?O(N,A.names):N}function G(N,A,M){if(N instanceof t.Name)return I(N);if(!B(N))return N;return new t._Code(N._items.reduce((z,Z)=>(Z instanceof t.Name&&(Z=I(Z)),Z instanceof t._Code?z.push(...Z._items):z.push(Z),z),[]));function I(z){const Z=M[z.str];return Z===void 0||A[z.str]!==1?z:(delete A[z.str],Z)}function B(z){return z instanceof t._Code&&z._items.some(Z=>Z instanceof t.Name&&A[Z.str]===1&&M[Z.str]!==void 0)}}function X(N,A){for(const M in A)N[M]=(N[M]||0)-(A[M]||0)}function ae(N){return typeof N=="boolean"||typeof N=="number"||N===null?!N:(0,t._)`!${j(N)}`}e.not=ae;const K=R(e.operators.AND);function V(...N){return N.reduce(K)}e.and=V;const Q=R(e.operators.OR);function U(...N){return N.reduce(Q)}e.or=U;function R(N){return(A,M)=>A===t.nil?M:M===t.nil?A:(0,t._)`${j(A)} ${N} ${j(M)}`}function j(N){return N instanceof t.Name?N:(0,t._)`(${N})`}})(Kn)),Kn}var me={},wl;function ye(){if(wl)return me;wl=1,Object.defineProperty(me,"__esModule",{value:!0}),me.checkStrictMode=me.getErrorPath=me.Type=me.useFunc=me.setEvaluated=me.evaluatedPropsToName=me.mergeEvaluated=me.eachItem=me.unescapeJsonPointer=me.escapeJsonPointer=me.escapeFragment=me.unescapeFragment=me.schemaRefOrVal=me.schemaHasRulesButRef=me.schemaHasRules=me.checkUnknownRules=me.alwaysValidSchema=me.toHash=void 0;const e=ge(),t=Yr();function s(g){const w={};for(const x of g)w[x]=!0;return w}me.toHash=s;function a(g,w){return typeof w=="boolean"?w:Object.keys(w).length===0?!0:(r(g,w),!n(w,g.self.RULES.all))}me.alwaysValidSchema=a;function r(g,w=g.schema){const{opts:x,self:T}=g;if(!x.strictSchema||typeof w=="boolean")return;const E=T.RULES.keywords;for(const P in w)E[P]||S(g,`unknown keyword: "${P}"`)}me.checkUnknownRules=r;function n(g,w){if(typeof g=="boolean")return!g;for(const x in g)if(w[x])return!0;return!1}me.schemaHasRules=n;function o(g,w){if(typeof g=="boolean")return!g;for(const x in g)if(x!=="$ref"&&w.all[x])return!0;return!1}me.schemaHasRulesButRef=o;function i({topSchemaRef:g,schemaPath:w},x,T,E){if(!E){if(typeof x=="number"||typeof x=="boolean")return x;if(typeof x=="string")return(0,e._)`${x}`}return(0,e._)`${g}${w}${(0,e.getProperty)(T)}`}me.schemaRefOrVal=i;function l(g){return u(decodeURIComponent(g))}me.unescapeFragment=l;function c(g){return encodeURIComponent(d(g))}me.escapeFragment=c;function d(g){return typeof g=="number"?`${g}`:g.replace(/~/g,"~0").replace(/\//g,"~1")}me.escapeJsonPointer=d;function u(g){return g.replace(/~1/g,"/").replace(/~0/g,"~")}me.unescapeJsonPointer=u;function p(g,w){if(Array.isArray(g))for(const x of g)w(x);else w(g)}me.eachItem=p;function f({mergeNames:g,mergeToName:w,mergeValues:x,resultToName:T}){return(E,P,$,O)=>{const L=$===void 0?P:$ instanceof e.Name?(P instanceof e.Name?g(E,P,$):w(E,P,$),$):P instanceof e.Name?(w(E,$,P),P):x(P,$);return O===e.Name&&!(L instanceof e.Name)?T(E,L):L}}me.mergeEvaluated={props:f({mergeNames:(g,w,x)=>g.if((0,e._)`${x} !== true && ${w} !== undefined`,()=>{g.if((0,e._)`${w} === true`,()=>g.assign(x,!0),()=>g.assign(x,(0,e._)`${x} || {}`).code((0,e._)`Object.assign(${x}, ${w})`))}),mergeToName:(g,w,x)=>g.if((0,e._)`${x} !== true`,()=>{w===!0?g.assign(x,!0):(g.assign(x,(0,e._)`${x} || {}`),v(g,x,w))}),mergeValues:(g,w)=>g===!0?!0:{...g,...w},resultToName:b}),items:f({mergeNames:(g,w,x)=>g.if((0,e._)`${x} !== true && ${w} !== undefined`,()=>g.assign(x,(0,e._)`${w} === true ? true : ${x} > ${w} ? ${x} : ${w}`)),mergeToName:(g,w,x)=>g.if((0,e._)`${x} !== true`,()=>g.assign(x,w===!0?!0:(0,e._)`${x} > ${w} ? ${x} : ${w}`)),mergeValues:(g,w)=>g===!0?!0:Math.max(g,w),resultToName:(g,w)=>g.var("items",w)})};function b(g,w){if(w===!0)return g.var("props",!0);const x=g.var("props",(0,e._)`{}`);return w!==void 0&&v(g,x,w),x}me.evaluatedPropsToName=b;function v(g,w,x){Object.keys(x).forEach(T=>g.assign((0,e._)`${w}${(0,e.getProperty)(T)}`,!0))}me.setEvaluated=v;const y={};function m(g,w){return g.scopeValue("func",{ref:w,code:y[w.code]||(y[w.code]=new t._Code(w.code))})}me.useFunc=m;var h;(function(g){g[g.Num=0]="Num",g[g.Str=1]="Str"})(h||(me.Type=h={}));function _(g,w,x){if(g instanceof e.Name){const T=w===h.Num;return x?T?(0,e._)`"[" + ${g} + "]"`:(0,e._)`"['" + ${g} + "']"`:T?(0,e._)`"/" + ${g}`:(0,e._)`"/" + ${g}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return x?(0,e.getProperty)(g).toString():"/"+d(g)}me.getErrorPath=_;function S(g,w,x=g.opts.strictSchema){if(x){if(w=`strict mode: ${w}`,x===!0)throw new Error(w);g.self.logger.warn(w)}}return me.checkStrictMode=S,me}var ja={},xl;function _s(){if(xl)return ja;xl=1,Object.defineProperty(ja,"__esModule",{value:!0});const e=ge(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return ja.default=t,ja}var Tl;function fn(){return Tl||(Tl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=ge(),s=ye(),a=_s();e.keywordError={message:({keyword:y})=>(0,t.str)`must pass "${y}" keyword validation`},e.keyword$DataError={message:({keyword:y,schemaType:m})=>m?(0,t.str)`"${y}" keyword must be ${m} ($data)`:(0,t.str)`"${y}" keyword is invalid ($data)`};function r(y,m=e.keywordError,h,_){const{it:S}=y,{gen:g,compositeRule:w,allErrors:x}=S,T=u(y,m,h);_??(w||x)?l(g,T):c(S,(0,t._)`[${T}]`)}e.reportError=r;function n(y,m=e.keywordError,h){const{it:_}=y,{gen:S,compositeRule:g,allErrors:w}=_,x=u(y,m,h);l(S,x),g||w||c(_,a.default.vErrors)}e.reportExtraError=n;function o(y,m){y.assign(a.default.errors,m),y.if((0,t._)`${a.default.vErrors} !== null`,()=>y.if(m,()=>y.assign((0,t._)`${a.default.vErrors}.length`,m),()=>y.assign(a.default.vErrors,null)))}e.resetErrorsCount=o;function i({gen:y,keyword:m,schemaValue:h,data:_,errsCount:S,it:g}){if(S===void 0)throw new Error("ajv implementation error");const w=y.name("err");y.forRange("i",S,a.default.errors,x=>{y.const(w,(0,t._)`${a.default.vErrors}[${x}]`),y.if((0,t._)`${w}.instancePath === undefined`,()=>y.assign((0,t._)`${w}.instancePath`,(0,t.strConcat)(a.default.instancePath,g.errorPath))),y.assign((0,t._)`${w}.schemaPath`,(0,t.str)`${g.errSchemaPath}/${m}`),g.opts.verbose&&(y.assign((0,t._)`${w}.schema`,h),y.assign((0,t._)`${w}.data`,_))})}e.extendErrors=i;function l(y,m){const h=y.const("err",m);y.if((0,t._)`${a.default.vErrors} === null`,()=>y.assign(a.default.vErrors,(0,t._)`[${h}]`),(0,t._)`${a.default.vErrors}.push(${h})`),y.code((0,t._)`${a.default.errors}++`)}function c(y,m){const{gen:h,validateName:_,schemaEnv:S}=y;S.$async?h.throw((0,t._)`new ${y.ValidationError}(${m})`):(h.assign((0,t._)`${_}.errors`,m),h.return(!1))}const d={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function u(y,m,h){const{createErrors:_}=y.it;return _===!1?(0,t._)`{}`:p(y,m,h)}function p(y,m,h={}){const{gen:_,it:S}=y,g=[f(S,h),b(y,h)];return v(y,m,g),_.object(...g)}function f({errorPath:y},{instancePath:m}){const h=m?(0,t.str)`${y}${(0,s.getErrorPath)(m,s.Type.Str)}`:y;return[a.default.instancePath,(0,t.strConcat)(a.default.instancePath,h)]}function b({keyword:y,it:{errSchemaPath:m}},{schemaPath:h,parentSchema:_}){let S=_?m:(0,t.str)`${m}/${y}`;return h&&(S=(0,t.str)`${S}${(0,s.getErrorPath)(h,s.Type.Str)}`),[d.schemaPath,S]}function v(y,{params:m,message:h},_){const{keyword:S,data:g,schemaValue:w,it:x}=y,{opts:T,propertyName:E,topSchemaRef:P,schemaPath:$}=x;_.push([d.keyword,S],[d.params,typeof m=="function"?m(y):m||(0,t._)`{}`]),T.messages&&_.push([d.message,typeof h=="function"?h(y):h]),T.verbose&&_.push([d.schema,w],[d.parentSchema,(0,t._)`${P}${$}`],[a.default.data,g]),E&&_.push([d.propertyName,E])}})(Vn)),Vn}var Sl;function N_(){if(Sl)return Ts;Sl=1,Object.defineProperty(Ts,"__esModule",{value:!0}),Ts.boolOrEmptySchema=Ts.topBoolOrEmptySchema=void 0;const e=fn(),t=ge(),s=_s(),a={message:"boolean schema is false"};function r(i){const{gen:l,schema:c,validateName:d}=i;c===!1?o(i,!1):typeof c=="object"&&c.$async===!0?l.return(s.default.data):(l.assign((0,t._)`${d}.errors`,null),l.return(!0))}Ts.topBoolOrEmptySchema=r;function n(i,l){const{gen:c,schema:d}=i;d===!1?(c.var(l,!1),o(i)):c.var(l,!0)}Ts.boolOrEmptySchema=n;function o(i,l){const{gen:c,data:d}=i,u={gen:c,keyword:"false schema",data:d,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:i};(0,e.reportError)(u,a,void 0,l)}return Ts}var ze={},Ss={},El;function $u(){if(El)return Ss;El=1,Object.defineProperty(Ss,"__esModule",{value:!0}),Ss.getRules=Ss.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function s(r){return typeof r=="string"&&t.has(r)}Ss.isJSONType=s;function a(){const r={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...r,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},r.number,r.string,r.array,r.object],post:{rules:[]},all:{},keywords:{}}}return Ss.getRules=a,Ss}var Ut={},kl;function Mu(){if(kl)return Ut;kl=1,Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.shouldUseRule=Ut.shouldUseGroup=Ut.schemaHasRulesForType=void 0;function e({schema:a,self:r},n){const o=r.RULES.types[n];return o&&o!==!0&&t(a,o)}Ut.schemaHasRulesForType=e;function t(a,r){return r.rules.some(n=>s(a,n))}Ut.shouldUseGroup=t;function s(a,r){var n;return a[r.keyword]!==void 0||((n=r.definition.implements)===null||n===void 0?void 0:n.some(o=>a[o]!==void 0))}return Ut.shouldUseRule=s,Ut}var Al;function Wr(){if(Al)return ze;Al=1,Object.defineProperty(ze,"__esModule",{value:!0}),ze.reportTypeError=ze.checkDataTypes=ze.checkDataType=ze.coerceAndCheckDataType=ze.getJSONTypes=ze.getSchemaTypes=ze.DataType=void 0;const e=$u(),t=Mu(),s=fn(),a=ge(),r=ye();var n;(function(h){h[h.Correct=0]="Correct",h[h.Wrong=1]="Wrong"})(n||(ze.DataType=n={}));function o(h){const _=i(h.type);if(_.includes("null")){if(h.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!_.length&&h.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');h.nullable===!0&&_.push("null")}return _}ze.getSchemaTypes=o;function i(h){const _=Array.isArray(h)?h:h?[h]:[];if(_.every(e.isJSONType))return _;throw new Error("type must be JSONType or JSONType[]: "+_.join(","))}ze.getJSONTypes=i;function l(h,_){const{gen:S,data:g,opts:w}=h,x=d(_,w.coerceTypes),T=_.length>0&&!(x.length===0&&_.length===1&&(0,t.schemaHasRulesForType)(h,_[0]));if(T){const E=b(_,g,w.strictNumbers,n.Wrong);S.if(E,()=>{x.length?u(h,_,x):y(h)})}return T}ze.coerceAndCheckDataType=l;const c=new Set(["string","number","integer","boolean","null"]);function d(h,_){return _?h.filter(S=>c.has(S)||_==="array"&&S==="array"):[]}function u(h,_,S){const{gen:g,data:w,opts:x}=h,T=g.let("dataType",(0,a._)`typeof ${w}`),E=g.let("coerced",(0,a._)`undefined`);x.coerceTypes==="array"&&g.if((0,a._)`${T} == 'object' && Array.isArray(${w}) && ${w}.length == 1`,()=>g.assign(w,(0,a._)`${w}[0]`).assign(T,(0,a._)`typeof ${w}`).if(b(_,w,x.strictNumbers),()=>g.assign(E,w))),g.if((0,a._)`${E} !== undefined`);for(const $ of S)(c.has($)||$==="array"&&x.coerceTypes==="array")&&P($);g.else(),y(h),g.endIf(),g.if((0,a._)`${E} !== undefined`,()=>{g.assign(w,E),p(h,E)});function P($){switch($){case"string":g.elseIf((0,a._)`${T} == "number" || ${T} == "boolean"`).assign(E,(0,a._)`"" + ${w}`).elseIf((0,a._)`${w} === null`).assign(E,(0,a._)`""`);return;case"number":g.elseIf((0,a._)`${T} == "boolean" || ${w} === null
              || (${T} == "string" && ${w} && ${w} == +${w})`).assign(E,(0,a._)`+${w}`);return;case"integer":g.elseIf((0,a._)`${T} === "boolean" || ${w} === null
              || (${T} === "string" && ${w} && ${w} == +${w} && !(${w} % 1))`).assign(E,(0,a._)`+${w}`);return;case"boolean":g.elseIf((0,a._)`${w} === "false" || ${w} === 0 || ${w} === null`).assign(E,!1).elseIf((0,a._)`${w} === "true" || ${w} === 1`).assign(E,!0);return;case"null":g.elseIf((0,a._)`${w} === "" || ${w} === 0 || ${w} === false`),g.assign(E,null);return;case"array":g.elseIf((0,a._)`${T} === "string" || ${T} === "number"
              || ${T} === "boolean" || ${w} === null`).assign(E,(0,a._)`[${w}]`)}}}function p({gen:h,parentData:_,parentDataProperty:S},g){h.if((0,a._)`${_} !== undefined`,()=>h.assign((0,a._)`${_}[${S}]`,g))}function f(h,_,S,g=n.Correct){const w=g===n.Correct?a.operators.EQ:a.operators.NEQ;let x;switch(h){case"null":return(0,a._)`${_} ${w} null`;case"array":x=(0,a._)`Array.isArray(${_})`;break;case"object":x=(0,a._)`${_} && typeof ${_} == "object" && !Array.isArray(${_})`;break;case"integer":x=T((0,a._)`!(${_} % 1) && !isNaN(${_})`);break;case"number":x=T();break;default:return(0,a._)`typeof ${_} ${w} ${h}`}return g===n.Correct?x:(0,a.not)(x);function T(E=a.nil){return(0,a.and)((0,a._)`typeof ${_} == "number"`,E,S?(0,a._)`isFinite(${_})`:a.nil)}}ze.checkDataType=f;function b(h,_,S,g){if(h.length===1)return f(h[0],_,S,g);let w;const x=(0,r.toHash)(h);if(x.array&&x.object){const T=(0,a._)`typeof ${_} != "object"`;w=x.null?T:(0,a._)`!${_} || ${T}`,delete x.null,delete x.array,delete x.object}else w=a.nil;x.number&&delete x.integer;for(const T in x)w=(0,a.and)(w,f(T,_,S,g));return w}ze.checkDataTypes=b;const v={message:({schema:h})=>`must be ${h}`,params:({schema:h,schemaValue:_})=>typeof h=="string"?(0,a._)`{type: ${h}}`:(0,a._)`{type: ${_}}`};function y(h){const _=m(h);(0,s.reportError)(_,v)}ze.reportTypeError=y;function m(h){const{gen:_,data:S,schema:g}=h,w=(0,r.schemaRefOrVal)(h,g,"type");return{gen:_,keyword:"type",data:S,schema:g.type,schemaCode:w,schemaValue:w,parentSchema:g,params:{},it:h}}return ze}var sa={},Pl;function I_(){if(Pl)return sa;Pl=1,Object.defineProperty(sa,"__esModule",{value:!0}),sa.assignDefaults=void 0;const e=ge(),t=ye();function s(r,n){const{properties:o,items:i}=r.schema;if(n==="object"&&o)for(const l in o)a(r,l,o[l].default);else n==="array"&&Array.isArray(i)&&i.forEach((l,c)=>a(r,c,l.default))}sa.assignDefaults=s;function a(r,n,o){const{gen:i,compositeRule:l,data:c,opts:d}=r;if(o===void 0)return;const u=(0,e._)`${c}${(0,e.getProperty)(n)}`;if(l){(0,t.checkStrictMode)(r,`default is ignored for: ${u}`);return}let p=(0,e._)`${u} === undefined`;d.useDefaults==="empty"&&(p=(0,e._)`${p} || ${u} === null || ${u} === ""`),i.if(p,(0,e._)`${u} = ${(0,e.stringify)(o)}`)}return sa}var _t={},Ee={},Cl;function St(){if(Cl)return Ee;Cl=1,Object.defineProperty(Ee,"__esModule",{value:!0}),Ee.validateUnion=Ee.validateArray=Ee.usePattern=Ee.callValidateCode=Ee.schemaProperties=Ee.allSchemaProperties=Ee.noPropertyInData=Ee.propertyInData=Ee.isOwnProperty=Ee.hasPropFunc=Ee.reportMissingProp=Ee.checkMissingProp=Ee.checkReportMissingProp=void 0;const e=ge(),t=ye(),s=_s(),a=ye();function r(h,_){const{gen:S,data:g,it:w}=h;S.if(d(S,g,_,w.opts.ownProperties),()=>{h.setParams({missingProperty:(0,e._)`${_}`},!0),h.error()})}Ee.checkReportMissingProp=r;function n({gen:h,data:_,it:{opts:S}},g,w){return(0,e.or)(...g.map(x=>(0,e.and)(d(h,_,x,S.ownProperties),(0,e._)`${w} = ${x}`)))}Ee.checkMissingProp=n;function o(h,_){h.setParams({missingProperty:_},!0),h.error()}Ee.reportMissingProp=o;function i(h){return h.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}Ee.hasPropFunc=i;function l(h,_,S){return(0,e._)`${i(h)}.call(${_}, ${S})`}Ee.isOwnProperty=l;function c(h,_,S,g){const w=(0,e._)`${_}${(0,e.getProperty)(S)} !== undefined`;return g?(0,e._)`${w} && ${l(h,_,S)}`:w}Ee.propertyInData=c;function d(h,_,S,g){const w=(0,e._)`${_}${(0,e.getProperty)(S)} === undefined`;return g?(0,e.or)(w,(0,e.not)(l(h,_,S))):w}Ee.noPropertyInData=d;function u(h){return h?Object.keys(h).filter(_=>_!=="__proto__"):[]}Ee.allSchemaProperties=u;function p(h,_){return u(_).filter(S=>!(0,t.alwaysValidSchema)(h,_[S]))}Ee.schemaProperties=p;function f({schemaCode:h,data:_,it:{gen:S,topSchemaRef:g,schemaPath:w,errorPath:x},it:T},E,P,$){const O=$?(0,e._)`${h}, ${_}, ${g}${w}`:_,L=[[s.default.instancePath,(0,e.strConcat)(s.default.instancePath,x)],[s.default.parentData,T.parentData],[s.default.parentDataProperty,T.parentDataProperty],[s.default.rootData,s.default.rootData]];T.opts.dynamicRef&&L.push([s.default.dynamicAnchors,s.default.dynamicAnchors]);const G=(0,e._)`${O}, ${S.object(...L)}`;return P!==e.nil?(0,e._)`${E}.call(${P}, ${G})`:(0,e._)`${E}(${G})`}Ee.callValidateCode=f;const b=(0,e._)`new RegExp`;function v({gen:h,it:{opts:_}},S){const g=_.unicodeRegExp?"u":"",{regExp:w}=_.code,x=w(S,g);return h.scopeValue("pattern",{key:x.toString(),ref:x,code:(0,e._)`${w.code==="new RegExp"?b:(0,a.useFunc)(h,w)}(${S}, ${g})`})}Ee.usePattern=v;function y(h){const{gen:_,data:S,keyword:g,it:w}=h,x=_.name("valid");if(w.allErrors){const E=_.let("valid",!0);return T(()=>_.assign(E,!1)),E}return _.var(x,!0),T(()=>_.break()),x;function T(E){const P=_.const("len",(0,e._)`${S}.length`);_.forRange("i",0,P,$=>{h.subschema({keyword:g,dataProp:$,dataPropType:t.Type.Num},x),_.if((0,e.not)(x),E)})}}Ee.validateArray=y;function m(h){const{gen:_,schema:S,keyword:g,it:w}=h;if(!Array.isArray(S))throw new Error("ajv implementation error");if(S.some(P=>(0,t.alwaysValidSchema)(w,P))&&!w.opts.unevaluated)return;const T=_.let("valid",!1),E=_.name("_valid");_.block(()=>S.forEach((P,$)=>{const O=h.subschema({keyword:g,schemaProp:$,compositeRule:!0},E);_.assign(T,(0,e._)`${T} || ${E}`),h.mergeValidEvaluated(O,E)||_.if((0,e.not)(T))})),h.result(T,()=>h.reset(),()=>h.error(!0))}return Ee.validateUnion=m,Ee}var Ol;function B_(){if(Ol)return _t;Ol=1,Object.defineProperty(_t,"__esModule",{value:!0}),_t.validateKeywordUsage=_t.validSchemaType=_t.funcKeywordCode=_t.macroKeywordCode=void 0;const e=ge(),t=_s(),s=St(),a=fn();function r(p,f){const{gen:b,keyword:v,schema:y,parentSchema:m,it:h}=p,_=f.macro.call(h.self,y,m,h),S=c(b,v,_);h.opts.validateSchema!==!1&&h.self.validateSchema(_,!0);const g=b.name("valid");p.subschema({schema:_,schemaPath:e.nil,errSchemaPath:`${h.errSchemaPath}/${v}`,topSchemaRef:S,compositeRule:!0},g),p.pass(g,()=>p.error(!0))}_t.macroKeywordCode=r;function n(p,f){var b;const{gen:v,keyword:y,schema:m,parentSchema:h,$data:_,it:S}=p;l(S,f);const g=!_&&f.compile?f.compile.call(S.self,m,h,S):f.validate,w=c(v,y,g),x=v.let("valid");p.block$data(x,T),p.ok((b=f.valid)!==null&&b!==void 0?b:x);function T(){if(f.errors===!1)$(),f.modifying&&o(p),O(()=>p.error());else{const L=f.async?E():P();f.modifying&&o(p),O(()=>i(p,L))}}function E(){const L=v.let("ruleErrs",null);return v.try(()=>$((0,e._)`await `),G=>v.assign(x,!1).if((0,e._)`${G} instanceof ${S.ValidationError}`,()=>v.assign(L,(0,e._)`${G}.errors`),()=>v.throw(G))),L}function P(){const L=(0,e._)`${w}.errors`;return v.assign(L,null),$(e.nil),L}function $(L=f.async?(0,e._)`await `:e.nil){const G=S.opts.passContext?t.default.this:t.default.self,X=!("compile"in f&&!_||f.schema===!1);v.assign(x,(0,e._)`${L}${(0,s.callValidateCode)(p,w,G,X)}`,f.modifying)}function O(L){var G;v.if((0,e.not)((G=f.valid)!==null&&G!==void 0?G:x),L)}}_t.funcKeywordCode=n;function o(p){const{gen:f,data:b,it:v}=p;f.if(v.parentData,()=>f.assign(b,(0,e._)`${v.parentData}[${v.parentDataProperty}]`))}function i(p,f){const{gen:b}=p;b.if((0,e._)`Array.isArray(${f})`,()=>{b.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,a.extendErrors)(p)},()=>p.error())}function l({schemaEnv:p},f){if(f.async&&!p.$async)throw new Error("async keyword in sync schema")}function c(p,f,b){if(b===void 0)throw new Error(`keyword "${f}" failed to compile`);return p.scopeValue("keyword",typeof b=="function"?{ref:b}:{ref:b,code:(0,e.stringify)(b)})}function d(p,f,b=!1){return!f.length||f.some(v=>v==="array"?Array.isArray(p):v==="object"?p&&typeof p=="object"&&!Array.isArray(p):typeof p==v||b&&typeof p>"u")}_t.validSchemaType=d;function u({schema:p,opts:f,self:b,errSchemaPath:v},y,m){if(Array.isArray(y.keyword)?!y.keyword.includes(m):y.keyword!==m)throw new Error("ajv implementation error");const h=y.dependencies;if(h?.some(_=>!Object.prototype.hasOwnProperty.call(p,_)))throw new Error(`parent schema must have dependencies of ${m}: ${h.join(",")}`);if(y.validateSchema&&!y.validateSchema(p[m])){const S=`keyword "${m}" value is invalid at path "${v}": `+b.errorsText(y.validateSchema.errors);if(f.validateSchema==="log")b.logger.error(S);else throw new Error(S)}}return _t.validateKeywordUsage=u,_t}var qt={},$l;function F_(){if($l)return qt;$l=1,Object.defineProperty(qt,"__esModule",{value:!0}),qt.extendSubschemaMode=qt.extendSubschemaData=qt.getSubschema=void 0;const e=ge(),t=ye();function s(n,{keyword:o,schemaProp:i,schema:l,schemaPath:c,errSchemaPath:d,topSchemaRef:u}){if(o!==void 0&&l!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(o!==void 0){const p=n.schema[o];return i===void 0?{schema:p,schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}`,errSchemaPath:`${n.errSchemaPath}/${o}`}:{schema:p[i],schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}${(0,e.getProperty)(i)}`,errSchemaPath:`${n.errSchemaPath}/${o}/${(0,t.escapeFragment)(i)}`}}if(l!==void 0){if(c===void 0||d===void 0||u===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:l,schemaPath:c,topSchemaRef:u,errSchemaPath:d}}throw new Error('either "keyword" or "schema" must be passed')}qt.getSubschema=s;function a(n,o,{dataProp:i,dataPropType:l,data:c,dataTypes:d,propertyName:u}){if(c!==void 0&&i!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:p}=o;if(i!==void 0){const{errorPath:b,dataPathArr:v,opts:y}=o,m=p.let("data",(0,e._)`${o.data}${(0,e.getProperty)(i)}`,!0);f(m),n.errorPath=(0,e.str)`${b}${(0,t.getErrorPath)(i,l,y.jsPropertySyntax)}`,n.parentDataProperty=(0,e._)`${i}`,n.dataPathArr=[...v,n.parentDataProperty]}if(c!==void 0){const b=c instanceof e.Name?c:p.let("data",c,!0);f(b),u!==void 0&&(n.propertyName=u)}d&&(n.dataTypes=d);function f(b){n.data=b,n.dataLevel=o.dataLevel+1,n.dataTypes=[],o.definedProperties=new Set,n.parentData=o.data,n.dataNames=[...o.dataNames,b]}}qt.extendSubschemaData=a;function r(n,{jtdDiscriminator:o,jtdMetadata:i,compositeRule:l,createErrors:c,allErrors:d}){l!==void 0&&(n.compositeRule=l),c!==void 0&&(n.createErrors=c),d!==void 0&&(n.allErrors=d),n.jtdDiscriminator=o,n.jtdMetadata=i}return qt.extendSubschemaMode=r,qt}var Ye={},Jn,Ml;function Ru(){return Ml||(Ml=1,Jn=function e(t,s){if(t===s)return!0;if(t&&s&&typeof t=="object"&&typeof s=="object"){if(t.constructor!==s.constructor)return!1;var a,r,n;if(Array.isArray(t)){if(a=t.length,a!=s.length)return!1;for(r=a;r--!==0;)if(!e(t[r],s[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===s.source&&t.flags===s.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===s.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===s.toString();if(n=Object.keys(t),a=n.length,a!==Object.keys(s).length)return!1;for(r=a;r--!==0;)if(!Object.prototype.hasOwnProperty.call(s,n[r]))return!1;for(r=a;r--!==0;){var o=n[r];if(!e(t[o],s[o]))return!1}return!0}return t!==t&&s!==s}),Jn}var Xn={exports:{}},Rl;function z_(){if(Rl)return Xn.exports;Rl=1;var e=Xn.exports=function(a,r,n){typeof r=="function"&&(n=r,r={}),n=r.cb||n;var o=typeof n=="function"?n:n.pre||function(){},i=n.post||function(){};t(r,o,i,a,"",a)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(a,r,n,o,i,l,c,d,u,p){if(o&&typeof o=="object"&&!Array.isArray(o)){r(o,i,l,c,d,u,p);for(var f in o){var b=o[f];if(Array.isArray(b)){if(f in e.arrayKeywords)for(var v=0;v<b.length;v++)t(a,r,n,b[v],i+"/"+f+"/"+v,l,i,f,o,v)}else if(f in e.propsKeywords){if(b&&typeof b=="object")for(var y in b)t(a,r,n,b[y],i+"/"+f+"/"+s(y),l,i,f,o,y)}else(f in e.keywords||a.allKeys&&!(f in e.skipKeywords))&&t(a,r,n,b,i+"/"+f,l,i,f,o)}n(o,i,l,c,d,u,p)}}function s(a){return a.replace(/~/g,"~0").replace(/\//g,"~1")}return Xn.exports}var Ll;function hn(){if(Ll)return Ye;Ll=1,Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.getSchemaRefs=Ye.resolveUrl=Ye.normalizeId=Ye._getFullPath=Ye.getFullPath=Ye.inlineRef=void 0;const e=ye(),t=Ru(),s=z_(),a=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function r(v,y=!0){return typeof v=="boolean"?!0:y===!0?!o(v):y?i(v)<=y:!1}Ye.inlineRef=r;const n=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function o(v){for(const y in v){if(n.has(y))return!0;const m=v[y];if(Array.isArray(m)&&m.some(o)||typeof m=="object"&&o(m))return!0}return!1}function i(v){let y=0;for(const m in v){if(m==="$ref")return 1/0;if(y++,!a.has(m)&&(typeof v[m]=="object"&&(0,e.eachItem)(v[m],h=>y+=i(h)),y===1/0))return 1/0}return y}function l(v,y="",m){m!==!1&&(y=u(y));const h=v.parse(y);return c(v,h)}Ye.getFullPath=l;function c(v,y){return v.serialize(y).split("#")[0]+"#"}Ye._getFullPath=c;const d=/#\/?$/;function u(v){return v?v.replace(d,""):""}Ye.normalizeId=u;function p(v,y,m){return m=u(m),v.resolve(y,m)}Ye.resolveUrl=p;const f=/^[a-z_][-a-z0-9._]*$/i;function b(v,y){if(typeof v=="boolean")return{};const{schemaId:m,uriResolver:h}=this.opts,_=u(v[m]||y),S={"":_},g=l(h,_,!1),w={},x=new Set;return s(v,{allKeys:!0},(P,$,O,L)=>{if(L===void 0)return;const G=g+$;let X=S[L];typeof P[m]=="string"&&(X=ae.call(this,P[m])),K.call(this,P.$anchor),K.call(this,P.$dynamicAnchor),S[$]=X;function ae(V){const Q=this.opts.uriResolver.resolve;if(V=u(X?Q(X,V):V),x.has(V))throw E(V);x.add(V);let U=this.refs[V];return typeof U=="string"&&(U=this.refs[U]),typeof U=="object"?T(P,U.schema,V):V!==u(G)&&(V[0]==="#"?(T(P,w[V],V),w[V]=P):this.refs[V]=G),V}function K(V){if(typeof V=="string"){if(!f.test(V))throw new Error(`invalid anchor "${V}"`);ae.call(this,`#${V}`)}}}),w;function T(P,$,O){if($!==void 0&&!t(P,$))throw E(O)}function E(P){return new Error(`reference "${P}" resolves to more than one schema`)}}return Ye.getSchemaRefs=b,Ye}var Dl;function mn(){if(Dl)return jt;Dl=1,Object.defineProperty(jt,"__esModule",{value:!0}),jt.getData=jt.KeywordCxt=jt.validateFunctionCode=void 0;const e=N_(),t=Wr(),s=Mu(),a=Wr(),r=I_(),n=B_(),o=F_(),i=ge(),l=_s(),c=hn(),d=ye(),u=fn();function p(F){if(g(F)&&(x(F),S(F))){y(F);return}f(F,()=>(0,e.topBoolOrEmptySchema)(F))}jt.validateFunctionCode=p;function f({gen:F,validateName:k,schema:C,schemaEnv:D,opts:q},ee){q.code.es5?F.func(k,(0,i._)`${l.default.data}, ${l.default.valCxt}`,D.$async,()=>{F.code((0,i._)`"use strict"; ${h(C,q)}`),v(F,q),F.code(ee)}):F.func(k,(0,i._)`${l.default.data}, ${b(q)}`,D.$async,()=>F.code(h(C,q)).code(ee))}function b(F){return(0,i._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${F.dynamicRef?(0,i._)`, ${l.default.dynamicAnchors}={}`:i.nil}}={}`}function v(F,k){F.if(l.default.valCxt,()=>{F.var(l.default.instancePath,(0,i._)`${l.default.valCxt}.${l.default.instancePath}`),F.var(l.default.parentData,(0,i._)`${l.default.valCxt}.${l.default.parentData}`),F.var(l.default.parentDataProperty,(0,i._)`${l.default.valCxt}.${l.default.parentDataProperty}`),F.var(l.default.rootData,(0,i._)`${l.default.valCxt}.${l.default.rootData}`),k.dynamicRef&&F.var(l.default.dynamicAnchors,(0,i._)`${l.default.valCxt}.${l.default.dynamicAnchors}`)},()=>{F.var(l.default.instancePath,(0,i._)`""`),F.var(l.default.parentData,(0,i._)`undefined`),F.var(l.default.parentDataProperty,(0,i._)`undefined`),F.var(l.default.rootData,l.default.data),k.dynamicRef&&F.var(l.default.dynamicAnchors,(0,i._)`{}`)})}function y(F){const{schema:k,opts:C,gen:D}=F;f(F,()=>{C.$comment&&k.$comment&&L(F),P(F),D.let(l.default.vErrors,null),D.let(l.default.errors,0),C.unevaluated&&m(F),T(F),G(F)})}function m(F){const{gen:k,validateName:C}=F;F.evaluated=k.const("evaluated",(0,i._)`${C}.evaluated`),k.if((0,i._)`${F.evaluated}.dynamicProps`,()=>k.assign((0,i._)`${F.evaluated}.props`,(0,i._)`undefined`)),k.if((0,i._)`${F.evaluated}.dynamicItems`,()=>k.assign((0,i._)`${F.evaluated}.items`,(0,i._)`undefined`))}function h(F,k){const C=typeof F=="object"&&F[k.schemaId];return C&&(k.code.source||k.code.process)?(0,i._)`/*# sourceURL=${C} */`:i.nil}function _(F,k){if(g(F)&&(x(F),S(F))){w(F,k);return}(0,e.boolOrEmptySchema)(F,k)}function S({schema:F,self:k}){if(typeof F=="boolean")return!F;for(const C in F)if(k.RULES.all[C])return!0;return!1}function g(F){return typeof F.schema!="boolean"}function w(F,k){const{schema:C,gen:D,opts:q}=F;q.$comment&&C.$comment&&L(F),$(F),O(F);const ee=D.const("_errs",l.default.errors);T(F,ee),D.var(k,(0,i._)`${ee} === ${l.default.errors}`)}function x(F){(0,d.checkUnknownRules)(F),E(F)}function T(F,k){if(F.opts.jtd)return ae(F,[],!1,k);const C=(0,t.getSchemaTypes)(F.schema),D=(0,t.coerceAndCheckDataType)(F,C);ae(F,C,!D,k)}function E(F){const{schema:k,errSchemaPath:C,opts:D,self:q}=F;k.$ref&&D.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(k,q.RULES)&&q.logger.warn(`$ref: keywords ignored in schema at path "${C}"`)}function P(F){const{schema:k,opts:C}=F;k.default!==void 0&&C.useDefaults&&C.strictSchema&&(0,d.checkStrictMode)(F,"default is ignored in the schema root")}function $(F){const k=F.schema[F.opts.schemaId];k&&(F.baseId=(0,c.resolveUrl)(F.opts.uriResolver,F.baseId,k))}function O(F){if(F.schema.$async&&!F.schemaEnv.$async)throw new Error("async schema in sync schema")}function L({gen:F,schemaEnv:k,schema:C,errSchemaPath:D,opts:q}){const ee=C.$comment;if(q.$comment===!0)F.code((0,i._)`${l.default.self}.logger.log(${ee})`);else if(typeof q.$comment=="function"){const se=(0,i.str)`${D}/$comment`,ie=F.scopeValue("root",{ref:k.root});F.code((0,i._)`${l.default.self}.opts.$comment(${ee}, ${se}, ${ie}.schema)`)}}function G(F){const{gen:k,schemaEnv:C,validateName:D,ValidationError:q,opts:ee}=F;C.$async?k.if((0,i._)`${l.default.errors} === 0`,()=>k.return(l.default.data),()=>k.throw((0,i._)`new ${q}(${l.default.vErrors})`)):(k.assign((0,i._)`${D}.errors`,l.default.vErrors),ee.unevaluated&&X(F),k.return((0,i._)`${l.default.errors} === 0`))}function X({gen:F,evaluated:k,props:C,items:D}){C instanceof i.Name&&F.assign((0,i._)`${k}.props`,C),D instanceof i.Name&&F.assign((0,i._)`${k}.items`,D)}function ae(F,k,C,D){const{gen:q,schema:ee,data:se,allErrors:ie,opts:Y,self:te}=F,{RULES:J}=te;if(ee.$ref&&(Y.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(ee,J))){q.block(()=>B(F,"$ref",J.all.$ref.definition));return}Y.jtd||V(F,k),q.block(()=>{for(const ne of J.rules)ce(ne);ce(J.post)});function ce(ne){(0,s.shouldUseGroup)(ee,ne)&&(ne.type?(q.if((0,a.checkDataType)(ne.type,se,Y.strictNumbers)),K(F,ne),k.length===1&&k[0]===ne.type&&C&&(q.else(),(0,a.reportTypeError)(F)),q.endIf()):K(F,ne),ie||q.if((0,i._)`${l.default.errors} === ${D||0}`))}}function K(F,k){const{gen:C,schema:D,opts:{useDefaults:q}}=F;q&&(0,r.assignDefaults)(F,k.type),C.block(()=>{for(const ee of k.rules)(0,s.shouldUseRule)(D,ee)&&B(F,ee.keyword,ee.definition,k.type)})}function V(F,k){F.schemaEnv.meta||!F.opts.strictTypes||(Q(F,k),F.opts.allowUnionTypes||U(F,k),R(F,F.dataTypes))}function Q(F,k){if(k.length){if(!F.dataTypes.length){F.dataTypes=k;return}k.forEach(C=>{N(F.dataTypes,C)||M(F,`type "${C}" not allowed by context "${F.dataTypes.join(",")}"`)}),A(F,k)}}function U(F,k){k.length>1&&!(k.length===2&&k.includes("null"))&&M(F,"use allowUnionTypes to allow union type keyword")}function R(F,k){const C=F.self.RULES.all;for(const D in C){const q=C[D];if(typeof q=="object"&&(0,s.shouldUseRule)(F.schema,q)){const{type:ee}=q.definition;ee.length&&!ee.some(se=>j(k,se))&&M(F,`missing type "${ee.join(",")}" for keyword "${D}"`)}}}function j(F,k){return F.includes(k)||k==="number"&&F.includes("integer")}function N(F,k){return F.includes(k)||k==="integer"&&F.includes("number")}function A(F,k){const C=[];for(const D of F.dataTypes)N(k,D)?C.push(D):k.includes("integer")&&D==="number"&&C.push("integer");F.dataTypes=C}function M(F,k){const C=F.schemaEnv.baseId+F.errSchemaPath;k+=` at "${C}" (strictTypes)`,(0,d.checkStrictMode)(F,k,F.opts.strictTypes)}class I{constructor(k,C,D){if((0,n.validateKeywordUsage)(k,C,D),this.gen=k.gen,this.allErrors=k.allErrors,this.keyword=D,this.data=k.data,this.schema=k.schema[D],this.$data=C.$data&&k.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(k,this.schema,D,this.$data),this.schemaType=C.schemaType,this.parentSchema=k.schema,this.params={},this.it=k,this.def=C,this.$data)this.schemaCode=k.gen.const("vSchema",re(this.$data,k));else if(this.schemaCode=this.schemaValue,!(0,n.validSchemaType)(this.schema,C.schemaType,C.allowUndefined))throw new Error(`${D} value must be ${JSON.stringify(C.schemaType)}`);("code"in C?C.trackErrors:C.errors!==!1)&&(this.errsCount=k.gen.const("_errs",l.default.errors))}result(k,C,D){this.failResult((0,i.not)(k),C,D)}failResult(k,C,D){this.gen.if(k),D?D():this.error(),C?(this.gen.else(),C(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(k,C){this.failResult((0,i.not)(k),void 0,C)}fail(k){if(k===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(k),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(k){if(!this.$data)return this.fail(k);const{schemaCode:C}=this;this.fail((0,i._)`${C} !== undefined && (${(0,i.or)(this.invalid$data(),k)})`)}error(k,C,D){if(C){this.setParams(C),this._error(k,D),this.setParams({});return}this._error(k,D)}_error(k,C){(k?u.reportExtraError:u.reportError)(this,this.def.error,C)}$dataError(){(0,u.reportError)(this,this.def.$dataError||u.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,u.resetErrorsCount)(this.gen,this.errsCount)}ok(k){this.allErrors||this.gen.if(k)}setParams(k,C){C?Object.assign(this.params,k):this.params=k}block$data(k,C,D=i.nil){this.gen.block(()=>{this.check$data(k,D),C()})}check$data(k=i.nil,C=i.nil){if(!this.$data)return;const{gen:D,schemaCode:q,schemaType:ee,def:se}=this;D.if((0,i.or)((0,i._)`${q} === undefined`,C)),k!==i.nil&&D.assign(k,!0),(ee.length||se.validateSchema)&&(D.elseIf(this.invalid$data()),this.$dataError(),k!==i.nil&&D.assign(k,!1)),D.else()}invalid$data(){const{gen:k,schemaCode:C,schemaType:D,def:q,it:ee}=this;return(0,i.or)(se(),ie());function se(){if(D.length){if(!(C instanceof i.Name))throw new Error("ajv implementation error");const Y=Array.isArray(D)?D:[D];return(0,i._)`${(0,a.checkDataTypes)(Y,C,ee.opts.strictNumbers,a.DataType.Wrong)}`}return i.nil}function ie(){if(q.validateSchema){const Y=k.scopeValue("validate$data",{ref:q.validateSchema});return(0,i._)`!${Y}(${C})`}return i.nil}}subschema(k,C){const D=(0,o.getSubschema)(this.it,k);(0,o.extendSubschemaData)(D,this.it,k),(0,o.extendSubschemaMode)(D,k);const q={...this.it,...D,items:void 0,props:void 0};return _(q,C),q}mergeEvaluated(k,C){const{it:D,gen:q}=this;D.opts.unevaluated&&(D.props!==!0&&k.props!==void 0&&(D.props=d.mergeEvaluated.props(q,k.props,D.props,C)),D.items!==!0&&k.items!==void 0&&(D.items=d.mergeEvaluated.items(q,k.items,D.items,C)))}mergeValidEvaluated(k,C){const{it:D,gen:q}=this;if(D.opts.unevaluated&&(D.props!==!0||D.items!==!0))return q.if(C,()=>this.mergeEvaluated(k,i.Name)),!0}}jt.KeywordCxt=I;function B(F,k,C,D){const q=new I(F,C,k);"code"in C?C.code(q,D):q.$data&&C.validate?(0,n.funcKeywordCode)(q,C):"macro"in C?(0,n.macroKeywordCode)(q,C):(C.compile||C.validate)&&(0,n.funcKeywordCode)(q,C)}const z=/^\/(?:[^~]|~0|~1)*$/,Z=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function re(F,{dataLevel:k,dataNames:C,dataPathArr:D}){let q,ee;if(F==="")return l.default.rootData;if(F[0]==="/"){if(!z.test(F))throw new Error(`Invalid JSON-pointer: ${F}`);q=F,ee=l.default.rootData}else{const te=Z.exec(F);if(!te)throw new Error(`Invalid JSON-pointer: ${F}`);const J=+te[1];if(q=te[2],q==="#"){if(J>=k)throw new Error(Y("property/index",J));return D[k-J]}if(J>k)throw new Error(Y("data",J));if(ee=C[k-J],!q)return ee}let se=ee;const ie=q.split("/");for(const te of ie)te&&(ee=(0,i._)`${ee}${(0,i.getProperty)((0,d.unescapeJsonPointer)(te))}`,se=(0,i._)`${se} && ${ee}`);return se;function Y(te,J){return`Cannot access ${te} ${J} levels up, current level is ${k}`}}return jt.getData=re,jt}var Ua={},Nl;function Jo(){if(Nl)return Ua;Nl=1,Object.defineProperty(Ua,"__esModule",{value:!0});class e extends Error{constructor(s){super("validation failed"),this.errors=s,this.ajv=this.validation=!0}}return Ua.default=e,Ua}var qa={},Il;function gn(){if(Il)return qa;Il=1,Object.defineProperty(qa,"__esModule",{value:!0});const e=hn();class t extends Error{constructor(a,r,n,o){super(o||`can't resolve reference ${n} from id ${r}`),this.missingRef=(0,e.resolveUrl)(a,r,n),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(a,this.missingRef))}}return qa.default=t,qa}var rt={},Bl;function Xo(){if(Bl)return rt;Bl=1,Object.defineProperty(rt,"__esModule",{value:!0}),rt.resolveSchema=rt.getCompilingSchema=rt.resolveRef=rt.compileSchema=rt.SchemaEnv=void 0;const e=ge(),t=Jo(),s=_s(),a=hn(),r=ye(),n=mn();class o{constructor(m){var h;this.refs={},this.dynamicAnchors={};let _;typeof m.schema=="object"&&(_=m.schema),this.schema=m.schema,this.schemaId=m.schemaId,this.root=m.root||this,this.baseId=(h=m.baseId)!==null&&h!==void 0?h:(0,a.normalizeId)(_?.[m.schemaId||"$id"]),this.schemaPath=m.schemaPath,this.localRefs=m.localRefs,this.meta=m.meta,this.$async=_?.$async,this.refs={}}}rt.SchemaEnv=o;function i(y){const m=d.call(this,y);if(m)return m;const h=(0,a.getFullPath)(this.opts.uriResolver,y.root.baseId),{es5:_,lines:S}=this.opts.code,{ownProperties:g}=this.opts,w=new e.CodeGen(this.scope,{es5:_,lines:S,ownProperties:g});let x;y.$async&&(x=w.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const T=w.scopeName("validate");y.validateName=T;const E={gen:w,allErrors:this.opts.allErrors,data:s.default.data,parentData:s.default.parentData,parentDataProperty:s.default.parentDataProperty,dataNames:[s.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:w.scopeValue("schema",this.opts.code.source===!0?{ref:y.schema,code:(0,e.stringify)(y.schema)}:{ref:y.schema}),validateName:T,ValidationError:x,schema:y.schema,schemaEnv:y,rootId:h,baseId:y.baseId||h,schemaPath:e.nil,errSchemaPath:y.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let P;try{this._compilations.add(y),(0,n.validateFunctionCode)(E),w.optimize(this.opts.code.optimize);const $=w.toString();P=`${w.scopeRefs(s.default.scope)}return ${$}`,this.opts.code.process&&(P=this.opts.code.process(P,y));const L=new Function(`${s.default.self}`,`${s.default.scope}`,P)(this,this.scope.get());if(this.scope.value(T,{ref:L}),L.errors=null,L.schema=y.schema,L.schemaEnv=y,y.$async&&(L.$async=!0),this.opts.code.source===!0&&(L.source={validateName:T,validateCode:$,scopeValues:w._values}),this.opts.unevaluated){const{props:G,items:X}=E;L.evaluated={props:G instanceof e.Name?void 0:G,items:X instanceof e.Name?void 0:X,dynamicProps:G instanceof e.Name,dynamicItems:X instanceof e.Name},L.source&&(L.source.evaluated=(0,e.stringify)(L.evaluated))}return y.validate=L,y}catch($){throw delete y.validate,delete y.validateName,P&&this.logger.error("Error compiling schema, function code:",P),$}finally{this._compilations.delete(y)}}rt.compileSchema=i;function l(y,m,h){var _;h=(0,a.resolveUrl)(this.opts.uriResolver,m,h);const S=y.refs[h];if(S)return S;let g=p.call(this,y,h);if(g===void 0){const w=(_=y.localRefs)===null||_===void 0?void 0:_[h],{schemaId:x}=this.opts;w&&(g=new o({schema:w,schemaId:x,root:y,baseId:m}))}if(g!==void 0)return y.refs[h]=c.call(this,g)}rt.resolveRef=l;function c(y){return(0,a.inlineRef)(y.schema,this.opts.inlineRefs)?y.schema:y.validate?y:i.call(this,y)}function d(y){for(const m of this._compilations)if(u(m,y))return m}rt.getCompilingSchema=d;function u(y,m){return y.schema===m.schema&&y.root===m.root&&y.baseId===m.baseId}function p(y,m){let h;for(;typeof(h=this.refs[m])=="string";)m=h;return h||this.schemas[m]||f.call(this,y,m)}function f(y,m){const h=this.opts.uriResolver.parse(m),_=(0,a._getFullPath)(this.opts.uriResolver,h);let S=(0,a.getFullPath)(this.opts.uriResolver,y.baseId,void 0);if(Object.keys(y.schema).length>0&&_===S)return v.call(this,h,y);const g=(0,a.normalizeId)(_),w=this.refs[g]||this.schemas[g];if(typeof w=="string"){const x=f.call(this,y,w);return typeof x?.schema!="object"?void 0:v.call(this,h,x)}if(typeof w?.schema=="object"){if(w.validate||i.call(this,w),g===(0,a.normalizeId)(m)){const{schema:x}=w,{schemaId:T}=this.opts,E=x[T];return E&&(S=(0,a.resolveUrl)(this.opts.uriResolver,S,E)),new o({schema:x,schemaId:T,root:y,baseId:S})}return v.call(this,h,w)}}rt.resolveSchema=f;const b=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function v(y,{baseId:m,schema:h,root:_}){var S;if(((S=y.fragment)===null||S===void 0?void 0:S[0])!=="/")return;for(const x of y.fragment.slice(1).split("/")){if(typeof h=="boolean")return;const T=h[(0,r.unescapeFragment)(x)];if(T===void 0)return;h=T;const E=typeof h=="object"&&h[this.opts.schemaId];!b.has(x)&&E&&(m=(0,a.resolveUrl)(this.opts.uriResolver,m,E))}let g;if(typeof h!="boolean"&&h.$ref&&!(0,r.schemaHasRulesButRef)(h,this.RULES)){const x=(0,a.resolveUrl)(this.opts.uriResolver,m,h.$ref);g=f.call(this,_,x)}const{schemaId:w}=this.opts;if(g=g||new o({schema:h,schemaId:w,root:_,baseId:m}),g.schema!==g.root.schema)return g}return rt}const H_="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",j_="Meta-schema for $data reference (JSON AnySchema extension proposal)",U_="object",q_=["$data"],G_={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},V_=!1,K_={$id:H_,description:j_,type:U_,required:q_,properties:G_,additionalProperties:V_};var Ga={},aa={exports:{}},Qn,Fl;function Lu(){if(Fl)return Qn;Fl=1;const e=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),t=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function s(p){let f="",b=0,v=0;for(v=0;v<p.length;v++)if(b=p[v].charCodeAt(0),b!==48){if(!(b>=48&&b<=57||b>=65&&b<=70||b>=97&&b<=102))return"";f+=p[v];break}for(v+=1;v<p.length;v++){if(b=p[v].charCodeAt(0),!(b>=48&&b<=57||b>=65&&b<=70||b>=97&&b<=102))return"";f+=p[v]}return f}const a=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function r(p){return p.length=0,!0}function n(p,f,b){if(p.length){const v=s(p);if(v!=="")f.push(v);else return b.error=!0,!1;p.length=0}return!0}function o(p){let f=0;const b={error:!1,address:"",zone:""},v=[],y=[];let m=!1,h=!1,_=n;for(let S=0;S<p.length;S++){const g=p[S];if(!(g==="["||g==="]"))if(g===":"){if(m===!0&&(h=!0),!_(y,v,b))break;if(++f>7){b.error=!0;break}S>0&&p[S-1]===":"&&(m=!0),v.push(":");continue}else if(g==="%"){if(!_(y,v,b))break;_=r}else{y.push(g);continue}}return y.length&&(_===r?b.zone=y.join(""):h?v.push(y.join("")):v.push(s(y))),b.address=v.join(""),b}function i(p){if(l(p,":")<2)return{host:p,isIPV6:!1};const f=o(p);if(f.error)return{host:p,isIPV6:!1};{let b=f.address,v=f.address;return f.zone&&(b+="%"+f.zone,v+="%25"+f.zone),{host:b,isIPV6:!0,escapedHost:v}}}function l(p,f){let b=0;for(let v=0;v<p.length;v++)p[v]===f&&b++;return b}function c(p){let f=p;const b=[];let v=-1,y=0;for(;y=f.length;){if(y===1){if(f===".")break;if(f==="/"){b.push("/");break}else{b.push(f);break}}else if(y===2){if(f[0]==="."){if(f[1]===".")break;if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&(f[1]==="."||f[1]==="/")){b.push("/");break}}else if(y===3&&f==="/.."){b.length!==0&&b.pop(),b.push("/");break}if(f[0]==="."){if(f[1]==="."){if(f[2]==="/"){f=f.slice(3);continue}}else if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&f[1]==="."){if(f[2]==="/"){f=f.slice(2);continue}else if(f[2]==="."&&f[3]==="/"){f=f.slice(3),b.length!==0&&b.pop();continue}}if((v=f.indexOf("/",1))===-1){b.push(f);break}else b.push(f.slice(0,v)),f=f.slice(v)}return b.join("")}function d(p,f){const b=f!==!0?escape:unescape;return p.scheme!==void 0&&(p.scheme=b(p.scheme)),p.userinfo!==void 0&&(p.userinfo=b(p.userinfo)),p.host!==void 0&&(p.host=b(p.host)),p.path!==void 0&&(p.path=b(p.path)),p.query!==void 0&&(p.query=b(p.query)),p.fragment!==void 0&&(p.fragment=b(p.fragment)),p}function u(p){const f=[];if(p.userinfo!==void 0&&(f.push(p.userinfo),f.push("@")),p.host!==void 0){let b=unescape(p.host);if(!t(b)){const v=i(b);v.isIPV6===!0?b=`[${v.escapedHost}]`:b=p.host}f.push(b)}return(typeof p.port=="number"||typeof p.port=="string")&&(f.push(":"),f.push(String(p.port))),f.length?f.join(""):void 0}return Qn={nonSimpleDomain:a,recomposeAuthority:u,normalizeComponentEncoding:d,removeDotSegments:c,isIPv4:t,isUUID:e,normalizeIPv6:i,stringArrayToHexStripped:s},Qn}var Zn,zl;function Y_(){if(zl)return Zn;zl=1;const{isUUID:e}=Lu(),t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,s=["http","https","ws","wss","urn","urn:uuid"];function a(g){return s.indexOf(g)!==-1}function r(g){return g.secure===!0?!0:g.secure===!1?!1:g.scheme?g.scheme.length===3&&(g.scheme[0]==="w"||g.scheme[0]==="W")&&(g.scheme[1]==="s"||g.scheme[1]==="S")&&(g.scheme[2]==="s"||g.scheme[2]==="S"):!1}function n(g){return g.host||(g.error=g.error||"HTTP URIs must have a host."),g}function o(g){const w=String(g.scheme).toLowerCase()==="https";return(g.port===(w?443:80)||g.port==="")&&(g.port=void 0),g.path||(g.path="/"),g}function i(g){return g.secure=r(g),g.resourceName=(g.path||"/")+(g.query?"?"+g.query:""),g.path=void 0,g.query=void 0,g}function l(g){if((g.port===(r(g)?443:80)||g.port==="")&&(g.port=void 0),typeof g.secure=="boolean"&&(g.scheme=g.secure?"wss":"ws",g.secure=void 0),g.resourceName){const[w,x]=g.resourceName.split("?");g.path=w&&w!=="/"?w:void 0,g.query=x,g.resourceName=void 0}return g.fragment=void 0,g}function c(g,w){if(!g.path)return g.error="URN can not be parsed",g;const x=g.path.match(t);if(x){const T=w.scheme||g.scheme||"urn";g.nid=x[1].toLowerCase(),g.nss=x[2];const E=`${T}:${w.nid||g.nid}`,P=S(E);g.path=void 0,P&&(g=P.parse(g,w))}else g.error=g.error||"URN can not be parsed.";return g}function d(g,w){if(g.nid===void 0)throw new Error("URN without nid cannot be serialized");const x=w.scheme||g.scheme||"urn",T=g.nid.toLowerCase(),E=`${x}:${w.nid||T}`,P=S(E);P&&(g=P.serialize(g,w));const $=g,O=g.nss;return $.path=`${T||w.nid}:${O}`,w.skipEscape=!0,$}function u(g,w){const x=g;return x.uuid=x.nss,x.nss=void 0,!w.tolerant&&(!x.uuid||!e(x.uuid))&&(x.error=x.error||"UUID is not valid."),x}function p(g){const w=g;return w.nss=(g.uuid||"").toLowerCase(),w}const f={scheme:"http",domainHost:!0,parse:n,serialize:o},b={scheme:"https",domainHost:f.domainHost,parse:n,serialize:o},v={scheme:"ws",domainHost:!0,parse:i,serialize:l},y={scheme:"wss",domainHost:v.domainHost,parse:v.parse,serialize:v.serialize},_={http:f,https:b,ws:v,wss:y,urn:{scheme:"urn",parse:c,serialize:d,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:u,serialize:p,skipNormalize:!0}};Object.setPrototypeOf(_,null);function S(g){return g&&(_[g]||_[g.toLowerCase()])||void 0}return Zn={wsIsSecure:r,SCHEMES:_,isValidSchemeName:a,getSchemeHandler:S},Zn}var Hl;function W_(){if(Hl)return aa.exports;Hl=1;const{normalizeIPv6:e,removeDotSegments:t,recomposeAuthority:s,normalizeComponentEncoding:a,isIPv4:r,nonSimpleDomain:n}=Lu(),{SCHEMES:o,getSchemeHandler:i}=Y_();function l(y,m){return typeof y=="string"?y=p(b(y,m),m):typeof y=="object"&&(y=b(p(y,m),m)),y}function c(y,m,h){const _=h?Object.assign({scheme:"null"},h):{scheme:"null"},S=d(b(y,_),b(m,_),_,!0);return _.skipEscape=!0,p(S,_)}function d(y,m,h,_){const S={};return _||(y=b(p(y,h),h),m=b(p(m,h),h)),h=h||{},!h.tolerant&&m.scheme?(S.scheme=m.scheme,S.userinfo=m.userinfo,S.host=m.host,S.port=m.port,S.path=t(m.path||""),S.query=m.query):(m.userinfo!==void 0||m.host!==void 0||m.port!==void 0?(S.userinfo=m.userinfo,S.host=m.host,S.port=m.port,S.path=t(m.path||""),S.query=m.query):(m.path?(m.path[0]==="/"?S.path=t(m.path):((y.userinfo!==void 0||y.host!==void 0||y.port!==void 0)&&!y.path?S.path="/"+m.path:y.path?S.path=y.path.slice(0,y.path.lastIndexOf("/")+1)+m.path:S.path=m.path,S.path=t(S.path)),S.query=m.query):(S.path=y.path,m.query!==void 0?S.query=m.query:S.query=y.query),S.userinfo=y.userinfo,S.host=y.host,S.port=y.port),S.scheme=y.scheme),S.fragment=m.fragment,S}function u(y,m,h){return typeof y=="string"?(y=unescape(y),y=p(a(b(y,h),!0),{...h,skipEscape:!0})):typeof y=="object"&&(y=p(a(y,!0),{...h,skipEscape:!0})),typeof m=="string"?(m=unescape(m),m=p(a(b(m,h),!0),{...h,skipEscape:!0})):typeof m=="object"&&(m=p(a(m,!0),{...h,skipEscape:!0})),y.toLowerCase()===m.toLowerCase()}function p(y,m){const h={host:y.host,scheme:y.scheme,userinfo:y.userinfo,port:y.port,path:y.path,query:y.query,nid:y.nid,nss:y.nss,uuid:y.uuid,fragment:y.fragment,reference:y.reference,resourceName:y.resourceName,secure:y.secure,error:""},_=Object.assign({},m),S=[],g=i(_.scheme||h.scheme);g&&g.serialize&&g.serialize(h,_),h.path!==void 0&&(_.skipEscape?h.path=unescape(h.path):(h.path=escape(h.path),h.scheme!==void 0&&(h.path=h.path.split("%3A").join(":")))),_.reference!=="suffix"&&h.scheme&&S.push(h.scheme,":");const w=s(h);if(w!==void 0&&(_.reference!=="suffix"&&S.push("//"),S.push(w),h.path&&h.path[0]!=="/"&&S.push("/")),h.path!==void 0){let x=h.path;!_.absolutePath&&(!g||!g.absolutePath)&&(x=t(x)),w===void 0&&x[0]==="/"&&x[1]==="/"&&(x="/%2F"+x.slice(2)),S.push(x)}return h.query!==void 0&&S.push("?",h.query),h.fragment!==void 0&&S.push("#",h.fragment),S.join("")}const f=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function b(y,m){const h=Object.assign({},m),_={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0};let S=!1;h.reference==="suffix"&&(h.scheme?y=h.scheme+":"+y:y="//"+y);const g=y.match(f);if(g){if(_.scheme=g[1],_.userinfo=g[3],_.host=g[4],_.port=parseInt(g[5],10),_.path=g[6]||"",_.query=g[7],_.fragment=g[8],isNaN(_.port)&&(_.port=g[5]),_.host)if(r(_.host)===!1){const T=e(_.host);_.host=T.host.toLowerCase(),S=T.isIPV6}else S=!0;_.scheme===void 0&&_.userinfo===void 0&&_.host===void 0&&_.port===void 0&&_.query===void 0&&!_.path?_.reference="same-document":_.scheme===void 0?_.reference="relative":_.fragment===void 0?_.reference="absolute":_.reference="uri",h.reference&&h.reference!=="suffix"&&h.reference!==_.reference&&(_.error=_.error||"URI is not a "+h.reference+" reference.");const w=i(h.scheme||_.scheme);if(!h.unicodeSupport&&(!w||!w.unicodeSupport)&&_.host&&(h.domainHost||w&&w.domainHost)&&S===!1&&n(_.host))try{_.host=URL.domainToASCII(_.host.toLowerCase())}catch(x){_.error=_.error||"Host's domain name can not be converted to ASCII: "+x}(!w||w&&!w.skipNormalize)&&(y.indexOf("%")!==-1&&(_.scheme!==void 0&&(_.scheme=unescape(_.scheme)),_.host!==void 0&&(_.host=unescape(_.host))),_.path&&(_.path=escape(unescape(_.path))),_.fragment&&(_.fragment=encodeURI(decodeURIComponent(_.fragment)))),w&&w.parse&&w.parse(_,h)}else _.error=_.error||"URI can not be parsed.";return _}const v={SCHEMES:o,normalize:l,resolve:c,resolveComponent:d,equal:u,serialize:p,parse:b};return aa.exports=v,aa.exports.default=v,aa.exports.fastUri=v,aa.exports}var jl;function J_(){if(jl)return Ga;jl=1,Object.defineProperty(Ga,"__esModule",{value:!0});const e=W_();return e.code='require("ajv/dist/runtime/uri").default',Ga.default=e,Ga}var Ul;function X_(){return Ul||(Ul=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=mn();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var s=ge();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return s._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return s.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return s.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return s.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return s.CodeGen}});const a=Jo(),r=gn(),n=$u(),o=Xo(),i=ge(),l=hn(),c=Wr(),d=ye(),u=K_,p=J_(),f=(U,R)=>new RegExp(U,R);f.code="new RegExp";const b=["removeAdditional","useDefaults","coerceTypes"],v=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),y={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},m={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},h=200;function _(U){var R,j,N,A,M,I,B,z,Z,re,F,k,C,D,q,ee,se,ie,Y,te,J,ce,ne,de,ue;const fe=U.strict,we=(R=U.code)===null||R===void 0?void 0:R.optimize,_e=we===!0||we===void 0?1:we||0,Fe=(N=(j=U.code)===null||j===void 0?void 0:j.regExp)!==null&&N!==void 0?N:f,He=(A=U.uriResolver)!==null&&A!==void 0?A:p.default;return{strictSchema:(I=(M=U.strictSchema)!==null&&M!==void 0?M:fe)!==null&&I!==void 0?I:!0,strictNumbers:(z=(B=U.strictNumbers)!==null&&B!==void 0?B:fe)!==null&&z!==void 0?z:!0,strictTypes:(re=(Z=U.strictTypes)!==null&&Z!==void 0?Z:fe)!==null&&re!==void 0?re:"log",strictTuples:(k=(F=U.strictTuples)!==null&&F!==void 0?F:fe)!==null&&k!==void 0?k:"log",strictRequired:(D=(C=U.strictRequired)!==null&&C!==void 0?C:fe)!==null&&D!==void 0?D:!1,code:U.code?{...U.code,optimize:_e,regExp:Fe}:{optimize:_e,regExp:Fe},loopRequired:(q=U.loopRequired)!==null&&q!==void 0?q:h,loopEnum:(ee=U.loopEnum)!==null&&ee!==void 0?ee:h,meta:(se=U.meta)!==null&&se!==void 0?se:!0,messages:(ie=U.messages)!==null&&ie!==void 0?ie:!0,inlineRefs:(Y=U.inlineRefs)!==null&&Y!==void 0?Y:!0,schemaId:(te=U.schemaId)!==null&&te!==void 0?te:"$id",addUsedSchema:(J=U.addUsedSchema)!==null&&J!==void 0?J:!0,validateSchema:(ce=U.validateSchema)!==null&&ce!==void 0?ce:!0,validateFormats:(ne=U.validateFormats)!==null&&ne!==void 0?ne:!0,unicodeRegExp:(de=U.unicodeRegExp)!==null&&de!==void 0?de:!0,int32range:(ue=U.int32range)!==null&&ue!==void 0?ue:!0,uriResolver:He}}class S{constructor(R={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,R=this.opts={...R,..._(R)};const{es5:j,lines:N}=this.opts.code;this.scope=new i.ValueScope({scope:{},prefixes:v,es5:j,lines:N}),this.logger=O(R.logger);const A=R.validateFormats;R.validateFormats=!1,this.RULES=(0,n.getRules)(),g.call(this,y,R,"NOT SUPPORTED"),g.call(this,m,R,"DEPRECATED","warn"),this._metaOpts=P.call(this),R.formats&&T.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),R.keywords&&E.call(this,R.keywords),typeof R.meta=="object"&&this.addMetaSchema(R.meta),x.call(this),R.validateFormats=A}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:R,meta:j,schemaId:N}=this.opts;let A=u;N==="id"&&(A={...u},A.id=A.$id,delete A.$id),j&&R&&this.addMetaSchema(A,A[N],!1)}defaultMeta(){const{meta:R,schemaId:j}=this.opts;return this.opts.defaultMeta=typeof R=="object"?R[j]||R:void 0}validate(R,j){let N;if(typeof R=="string"){if(N=this.getSchema(R),!N)throw new Error(`no schema with key or ref "${R}"`)}else N=this.compile(R);const A=N(j);return"$async"in N||(this.errors=N.errors),A}compile(R,j){const N=this._addSchema(R,j);return N.validate||this._compileSchemaEnv(N)}compileAsync(R,j){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:N}=this.opts;return A.call(this,R,j);async function A(re,F){await M.call(this,re.$schema);const k=this._addSchema(re,F);return k.validate||I.call(this,k)}async function M(re){re&&!this.getSchema(re)&&await A.call(this,{$ref:re},!0)}async function I(re){try{return this._compileSchemaEnv(re)}catch(F){if(!(F instanceof r.default))throw F;return B.call(this,F),await z.call(this,F.missingSchema),I.call(this,re)}}function B({missingSchema:re,missingRef:F}){if(this.refs[re])throw new Error(`AnySchema ${re} is loaded but ${F} cannot be resolved`)}async function z(re){const F=await Z.call(this,re);this.refs[re]||await M.call(this,F.$schema),this.refs[re]||this.addSchema(F,re,j)}async function Z(re){const F=this._loading[re];if(F)return F;try{return await(this._loading[re]=N(re))}finally{delete this._loading[re]}}}addSchema(R,j,N,A=this.opts.validateSchema){if(Array.isArray(R)){for(const I of R)this.addSchema(I,void 0,N,A);return this}let M;if(typeof R=="object"){const{schemaId:I}=this.opts;if(M=R[I],M!==void 0&&typeof M!="string")throw new Error(`schema ${I} must be string`)}return j=(0,l.normalizeId)(j||M),this._checkUnique(j),this.schemas[j]=this._addSchema(R,N,j,A,!0),this}addMetaSchema(R,j,N=this.opts.validateSchema){return this.addSchema(R,j,!0,N),this}validateSchema(R,j){if(typeof R=="boolean")return!0;let N;if(N=R.$schema,N!==void 0&&typeof N!="string")throw new Error("$schema must be a string");if(N=N||this.opts.defaultMeta||this.defaultMeta(),!N)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const A=this.validate(N,R);if(!A&&j){const M="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(M);else throw new Error(M)}return A}getSchema(R){let j;for(;typeof(j=w.call(this,R))=="string";)R=j;if(j===void 0){const{schemaId:N}=this.opts,A=new o.SchemaEnv({schema:{},schemaId:N});if(j=o.resolveSchema.call(this,A,R),!j)return;this.refs[R]=j}return j.validate||this._compileSchemaEnv(j)}removeSchema(R){if(R instanceof RegExp)return this._removeAllSchemas(this.schemas,R),this._removeAllSchemas(this.refs,R),this;switch(typeof R){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const j=w.call(this,R);return typeof j=="object"&&this._cache.delete(j.schema),delete this.schemas[R],delete this.refs[R],this}case"object":{const j=R;this._cache.delete(j);let N=R[this.opts.schemaId];return N&&(N=(0,l.normalizeId)(N),delete this.schemas[N],delete this.refs[N]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(R){for(const j of R)this.addKeyword(j);return this}addKeyword(R,j){let N;if(typeof R=="string")N=R,typeof j=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),j.keyword=N);else if(typeof R=="object"&&j===void 0){if(j=R,N=j.keyword,Array.isArray(N)&&!N.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(G.call(this,N,j),!j)return(0,d.eachItem)(N,M=>X.call(this,M)),this;K.call(this,j);const A={...j,type:(0,c.getJSONTypes)(j.type),schemaType:(0,c.getJSONTypes)(j.schemaType)};return(0,d.eachItem)(N,A.type.length===0?M=>X.call(this,M,A):M=>A.type.forEach(I=>X.call(this,M,A,I))),this}getKeyword(R){const j=this.RULES.all[R];return typeof j=="object"?j.definition:!!j}removeKeyword(R){const{RULES:j}=this;delete j.keywords[R],delete j.all[R];for(const N of j.rules){const A=N.rules.findIndex(M=>M.keyword===R);A>=0&&N.rules.splice(A,1)}return this}addFormat(R,j){return typeof j=="string"&&(j=new RegExp(j)),this.formats[R]=j,this}errorsText(R=this.errors,{separator:j=", ",dataVar:N="data"}={}){return!R||R.length===0?"No errors":R.map(A=>`${N}${A.instancePath} ${A.message}`).reduce((A,M)=>A+j+M)}$dataMetaSchema(R,j){const N=this.RULES.all;R=JSON.parse(JSON.stringify(R));for(const A of j){const M=A.split("/").slice(1);let I=R;for(const B of M)I=I[B];for(const B in N){const z=N[B];if(typeof z!="object")continue;const{$data:Z}=z.definition,re=I[B];Z&&re&&(I[B]=Q(re))}}return R}_removeAllSchemas(R,j){for(const N in R){const A=R[N];(!j||j.test(N))&&(typeof A=="string"?delete R[N]:A&&!A.meta&&(this._cache.delete(A.schema),delete R[N]))}}_addSchema(R,j,N,A=this.opts.validateSchema,M=this.opts.addUsedSchema){let I;const{schemaId:B}=this.opts;if(typeof R=="object")I=R[B];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof R!="boolean")throw new Error("schema must be object or boolean")}let z=this._cache.get(R);if(z!==void 0)return z;N=(0,l.normalizeId)(I||N);const Z=l.getSchemaRefs.call(this,R,N);return z=new o.SchemaEnv({schema:R,schemaId:B,meta:j,baseId:N,localRefs:Z}),this._cache.set(z.schema,z),M&&!N.startsWith("#")&&(N&&this._checkUnique(N),this.refs[N]=z),A&&this.validateSchema(R,!0),z}_checkUnique(R){if(this.schemas[R]||this.refs[R])throw new Error(`schema with key or id "${R}" already exists`)}_compileSchemaEnv(R){if(R.meta?this._compileMetaSchema(R):o.compileSchema.call(this,R),!R.validate)throw new Error("ajv implementation error");return R.validate}_compileMetaSchema(R){const j=this.opts;this.opts=this._metaOpts;try{o.compileSchema.call(this,R)}finally{this.opts=j}}}S.ValidationError=a.default,S.MissingRefError=r.default,e.default=S;function g(U,R,j,N="error"){for(const A in U){const M=A;M in R&&this.logger[N](`${j}: option ${A}. ${U[M]}`)}}function w(U){return U=(0,l.normalizeId)(U),this.schemas[U]||this.refs[U]}function x(){const U=this.opts.schemas;if(U)if(Array.isArray(U))this.addSchema(U);else for(const R in U)this.addSchema(U[R],R)}function T(){for(const U in this.opts.formats){const R=this.opts.formats[U];R&&this.addFormat(U,R)}}function E(U){if(Array.isArray(U)){this.addVocabulary(U);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const R in U){const j=U[R];j.keyword||(j.keyword=R),this.addKeyword(j)}}function P(){const U={...this.opts};for(const R of b)delete U[R];return U}const $={log(){},warn(){},error(){}};function O(U){if(U===!1)return $;if(U===void 0)return console;if(U.log&&U.warn&&U.error)return U;throw new Error("logger must implement log, warn and error methods")}const L=/^[a-z_$][a-z0-9_$:-]*$/i;function G(U,R){const{RULES:j}=this;if((0,d.eachItem)(U,N=>{if(j.keywords[N])throw new Error(`Keyword ${N} is already defined`);if(!L.test(N))throw new Error(`Keyword ${N} has invalid name`)}),!!R&&R.$data&&!("code"in R||"validate"in R))throw new Error('$data keyword must have "code" or "validate" function')}function X(U,R,j){var N;const A=R?.post;if(j&&A)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:M}=this;let I=A?M.post:M.rules.find(({type:z})=>z===j);if(I||(I={type:j,rules:[]},M.rules.push(I)),M.keywords[U]=!0,!R)return;const B={keyword:U,definition:{...R,type:(0,c.getJSONTypes)(R.type),schemaType:(0,c.getJSONTypes)(R.schemaType)}};R.before?ae.call(this,I,B,R.before):I.rules.push(B),M.all[U]=B,(N=R.implements)===null||N===void 0||N.forEach(z=>this.addKeyword(z))}function ae(U,R,j){const N=U.rules.findIndex(A=>A.keyword===j);N>=0?U.rules.splice(N,0,R):(U.rules.push(R),this.logger.warn(`rule ${j} is not defined`))}function K(U){let{metaSchema:R}=U;R!==void 0&&(U.$data&&this.opts.$data&&(R=Q(R)),U.validateSchema=this.compile(R,!0))}const V={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function Q(U){return{anyOf:[U,V]}}})(Gn)),Gn}var Va={},Ka={},Ya={},ql;function Q_(){if(ql)return Ya;ql=1,Object.defineProperty(Ya,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return Ya.default=e,Ya}var ns={},Gl;function Z_(){if(Gl)return ns;Gl=1,Object.defineProperty(ns,"__esModule",{value:!0}),ns.callRef=ns.getValidate=void 0;const e=gn(),t=St(),s=ge(),a=_s(),r=Xo(),n=ye(),o={keyword:"$ref",schemaType:"string",code(c){const{gen:d,schema:u,it:p}=c,{baseId:f,schemaEnv:b,validateName:v,opts:y,self:m}=p,{root:h}=b;if((u==="#"||u==="#/")&&f===h.baseId)return S();const _=r.resolveRef.call(m,h,f,u);if(_===void 0)throw new e.default(p.opts.uriResolver,f,u);if(_ instanceof r.SchemaEnv)return g(_);return w(_);function S(){if(b===h)return l(c,v,b,b.$async);const x=d.scopeValue("root",{ref:h});return l(c,(0,s._)`${x}.validate`,h,h.$async)}function g(x){const T=i(c,x);l(c,T,x,x.$async)}function w(x){const T=d.scopeValue("schema",y.code.source===!0?{ref:x,code:(0,s.stringify)(x)}:{ref:x}),E=d.name("valid"),P=c.subschema({schema:x,dataTypes:[],schemaPath:s.nil,topSchemaRef:T,errSchemaPath:u},E);c.mergeEvaluated(P),c.ok(E)}}};function i(c,d){const{gen:u}=c;return d.validate?u.scopeValue("validate",{ref:d.validate}):(0,s._)`${u.scopeValue("wrapper",{ref:d})}.validate`}ns.getValidate=i;function l(c,d,u,p){const{gen:f,it:b}=c,{allErrors:v,schemaEnv:y,opts:m}=b,h=m.passContext?a.default.this:s.nil;p?_():S();function _(){if(!y.$async)throw new Error("async schema referenced by sync schema");const x=f.let("valid");f.try(()=>{f.code((0,s._)`await ${(0,t.callValidateCode)(c,d,h)}`),w(d),v||f.assign(x,!0)},T=>{f.if((0,s._)`!(${T} instanceof ${b.ValidationError})`,()=>f.throw(T)),g(T),v||f.assign(x,!1)}),c.ok(x)}function S(){c.result((0,t.callValidateCode)(c,d,h),()=>w(d),()=>g(d))}function g(x){const T=(0,s._)`${x}.errors`;f.assign(a.default.vErrors,(0,s._)`${a.default.vErrors} === null ? ${T} : ${a.default.vErrors}.concat(${T})`),f.assign(a.default.errors,(0,s._)`${a.default.vErrors}.length`)}function w(x){var T;if(!b.opts.unevaluated)return;const E=(T=u?.validate)===null||T===void 0?void 0:T.evaluated;if(b.props!==!0)if(E&&!E.dynamicProps)E.props!==void 0&&(b.props=n.mergeEvaluated.props(f,E.props,b.props));else{const P=f.var("props",(0,s._)`${x}.evaluated.props`);b.props=n.mergeEvaluated.props(f,P,b.props,s.Name)}if(b.items!==!0)if(E&&!E.dynamicItems)E.items!==void 0&&(b.items=n.mergeEvaluated.items(f,E.items,b.items));else{const P=f.var("items",(0,s._)`${x}.evaluated.items`);b.items=n.mergeEvaluated.items(f,P,b.items,s.Name)}}}return ns.callRef=l,ns.default=o,ns}var Vl;function ev(){if(Vl)return Ka;Vl=1,Object.defineProperty(Ka,"__esModule",{value:!0});const e=Q_(),t=Z_(),s=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return Ka.default=s,Ka}var Wa={},Ja={},Kl;function tv(){if(Kl)return Ja;Kl=1,Object.defineProperty(Ja,"__esModule",{value:!0});const e=ge(),t=e.operators,s={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},a={message:({keyword:n,schemaCode:o})=>(0,e.str)`must be ${s[n].okStr} ${o}`,params:({keyword:n,schemaCode:o})=>(0,e._)`{comparison: ${s[n].okStr}, limit: ${o}}`},r={keyword:Object.keys(s),type:"number",schemaType:"number",$data:!0,error:a,code(n){const{keyword:o,data:i,schemaCode:l}=n;n.fail$data((0,e._)`${i} ${s[o].fail} ${l} || isNaN(${i})`)}};return Ja.default=r,Ja}var Xa={},Yl;function sv(){if(Yl)return Xa;Yl=1,Object.defineProperty(Xa,"__esModule",{value:!0});const e=ge(),s={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:a})=>(0,e.str)`must be multiple of ${a}`,params:({schemaCode:a})=>(0,e._)`{multipleOf: ${a}}`},code(a){const{gen:r,data:n,schemaCode:o,it:i}=a,l=i.opts.multipleOfPrecision,c=r.let("res"),d=l?(0,e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${l}`:(0,e._)`${c} !== parseInt(${c})`;a.fail$data((0,e._)`(${o} === 0 || (${c} = ${n}/${o}, ${d}))`)}};return Xa.default=s,Xa}var Qa={},Za={},Wl;function av(){if(Wl)return Za;Wl=1,Object.defineProperty(Za,"__esModule",{value:!0});function e(t){const s=t.length;let a=0,r=0,n;for(;r<s;)a++,n=t.charCodeAt(r++),n>=55296&&n<=56319&&r<s&&(n=t.charCodeAt(r),(n&64512)===56320&&r++);return a}return Za.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',Za}var Jl;function rv(){if(Jl)return Qa;Jl=1,Object.defineProperty(Qa,"__esModule",{value:!0});const e=ge(),t=ye(),s=av(),r={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:n,schemaCode:o}){const i=n==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${i} than ${o} characters`},params:({schemaCode:n})=>(0,e._)`{limit: ${n}}`},code(n){const{keyword:o,data:i,schemaCode:l,it:c}=n,d=o==="maxLength"?e.operators.GT:e.operators.LT,u=c.opts.unicode===!1?(0,e._)`${i}.length`:(0,e._)`${(0,t.useFunc)(n.gen,s.default)}(${i})`;n.fail$data((0,e._)`${u} ${d} ${l}`)}};return Qa.default=r,Qa}var er={},Xl;function nv(){if(Xl)return er;Xl=1,Object.defineProperty(er,"__esModule",{value:!0});const e=St(),t=ye(),s=ge(),r={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:n})=>(0,s.str)`must match pattern "${n}"`,params:({schemaCode:n})=>(0,s._)`{pattern: ${n}}`},code(n){const{gen:o,data:i,$data:l,schema:c,schemaCode:d,it:u}=n,p=u.opts.unicodeRegExp?"u":"";if(l){const{regExp:f}=u.opts.code,b=f.code==="new RegExp"?(0,s._)`new RegExp`:(0,t.useFunc)(o,f),v=o.let("valid");o.try(()=>o.assign(v,(0,s._)`${b}(${d}, ${p}).test(${i})`),()=>o.assign(v,!1)),n.fail$data((0,s._)`!${v}`)}else{const f=(0,e.usePattern)(n,c);n.fail$data((0,s._)`!${f}.test(${i})`)}}};return er.default=r,er}var tr={},Ql;function ov(){if(Ql)return tr;Ql=1,Object.defineProperty(tr,"__esModule",{value:!0});const e=ge(),s={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:r}){const n=a==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${r} properties`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:r,data:n,schemaCode:o}=a,i=r==="maxProperties"?e.operators.GT:e.operators.LT;a.fail$data((0,e._)`Object.keys(${n}).length ${i} ${o}`)}};return tr.default=s,tr}var sr={},Zl;function iv(){if(Zl)return sr;Zl=1,Object.defineProperty(sr,"__esModule",{value:!0});const e=St(),t=ge(),s=ye(),r={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:n}})=>(0,t.str)`must have required property '${n}'`,params:({params:{missingProperty:n}})=>(0,t._)`{missingProperty: ${n}}`},code(n){const{gen:o,schema:i,schemaCode:l,data:c,$data:d,it:u}=n,{opts:p}=u;if(!d&&i.length===0)return;const f=i.length>=p.loopRequired;if(u.allErrors?b():v(),p.strictRequired){const h=n.parentSchema.properties,{definedProperties:_}=n.it;for(const S of i)if(h?.[S]===void 0&&!_.has(S)){const g=u.schemaEnv.baseId+u.errSchemaPath,w=`required property "${S}" is not defined at "${g}" (strictRequired)`;(0,s.checkStrictMode)(u,w,u.opts.strictRequired)}}function b(){if(f||d)n.block$data(t.nil,y);else for(const h of i)(0,e.checkReportMissingProp)(n,h)}function v(){const h=o.let("missing");if(f||d){const _=o.let("valid",!0);n.block$data(_,()=>m(h,_)),n.ok(_)}else o.if((0,e.checkMissingProp)(n,i,h)),(0,e.reportMissingProp)(n,h),o.else()}function y(){o.forOf("prop",l,h=>{n.setParams({missingProperty:h}),o.if((0,e.noPropertyInData)(o,c,h,p.ownProperties),()=>n.error())})}function m(h,_){n.setParams({missingProperty:h}),o.forOf(h,l,()=>{o.assign(_,(0,e.propertyInData)(o,c,h,p.ownProperties)),o.if((0,t.not)(_),()=>{n.error(),o.break()})},t.nil)}}};return sr.default=r,sr}var ar={},ec;function lv(){if(ec)return ar;ec=1,Object.defineProperty(ar,"__esModule",{value:!0});const e=ge(),s={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:a,schemaCode:r}){const n=a==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${r} items`},params:({schemaCode:a})=>(0,e._)`{limit: ${a}}`},code(a){const{keyword:r,data:n,schemaCode:o}=a,i=r==="maxItems"?e.operators.GT:e.operators.LT;a.fail$data((0,e._)`${n}.length ${i} ${o}`)}};return ar.default=s,ar}var rr={},nr={},tc;function Qo(){if(tc)return nr;tc=1,Object.defineProperty(nr,"__esModule",{value:!0});const e=Ru();return e.code='require("ajv/dist/runtime/equal").default',nr.default=e,nr}var sc;function cv(){if(sc)return rr;sc=1,Object.defineProperty(rr,"__esModule",{value:!0});const e=Wr(),t=ge(),s=ye(),a=Qo(),n={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i:o,j:i}})=>(0,t.str)`must NOT have duplicate items (items ## ${i} and ${o} are identical)`,params:({params:{i:o,j:i}})=>(0,t._)`{i: ${o}, j: ${i}}`},code(o){const{gen:i,data:l,$data:c,schema:d,parentSchema:u,schemaCode:p,it:f}=o;if(!c&&!d)return;const b=i.let("valid"),v=u.items?(0,e.getSchemaTypes)(u.items):[];o.block$data(b,y,(0,t._)`${p} === false`),o.ok(b);function y(){const S=i.let("i",(0,t._)`${l}.length`),g=i.let("j");o.setParams({i:S,j:g}),i.assign(b,!0),i.if((0,t._)`${S} > 1`,()=>(m()?h:_)(S,g))}function m(){return v.length>0&&!v.some(S=>S==="object"||S==="array")}function h(S,g){const w=i.name("item"),x=(0,e.checkDataTypes)(v,w,f.opts.strictNumbers,e.DataType.Wrong),T=i.const("indices",(0,t._)`{}`);i.for((0,t._)`;${S}--;`,()=>{i.let(w,(0,t._)`${l}[${S}]`),i.if(x,(0,t._)`continue`),v.length>1&&i.if((0,t._)`typeof ${w} == "string"`,(0,t._)`${w} += "_"`),i.if((0,t._)`typeof ${T}[${w}] == "number"`,()=>{i.assign(g,(0,t._)`${T}[${w}]`),o.error(),i.assign(b,!1).break()}).code((0,t._)`${T}[${w}] = ${S}`)})}function _(S,g){const w=(0,s.useFunc)(i,a.default),x=i.name("outer");i.label(x).for((0,t._)`;${S}--;`,()=>i.for((0,t._)`${g} = ${S}; ${g}--;`,()=>i.if((0,t._)`${w}(${l}[${S}], ${l}[${g}])`,()=>{o.error(),i.assign(b,!1).break(x)})))}}};return rr.default=n,rr}var or={},ac;function dv(){if(ac)return or;ac=1,Object.defineProperty(or,"__esModule",{value:!0});const e=ge(),t=ye(),s=Qo(),r={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:n})=>(0,e._)`{allowedValue: ${n}}`},code(n){const{gen:o,data:i,$data:l,schemaCode:c,schema:d}=n;l||d&&typeof d=="object"?n.fail$data((0,e._)`!${(0,t.useFunc)(o,s.default)}(${i}, ${c})`):n.fail((0,e._)`${d} !== ${i}`)}};return or.default=r,or}var ir={},rc;function uv(){if(rc)return ir;rc=1,Object.defineProperty(ir,"__esModule",{value:!0});const e=ge(),t=ye(),s=Qo(),r={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:n})=>(0,e._)`{allowedValues: ${n}}`},code(n){const{gen:o,data:i,$data:l,schema:c,schemaCode:d,it:u}=n;if(!l&&c.length===0)throw new Error("enum must have non-empty array");const p=c.length>=u.opts.loopEnum;let f;const b=()=>f??(f=(0,t.useFunc)(o,s.default));let v;if(p||l)v=o.let("valid"),n.block$data(v,y);else{if(!Array.isArray(c))throw new Error("ajv implementation error");const h=o.const("vSchema",d);v=(0,e.or)(...c.map((_,S)=>m(h,S)))}n.pass(v);function y(){o.assign(v,!1),o.forOf("v",d,h=>o.if((0,e._)`${b()}(${i}, ${h})`,()=>o.assign(v,!0).break()))}function m(h,_){const S=c[_];return typeof S=="object"&&S!==null?(0,e._)`${b()}(${i}, ${h}[${_}])`:(0,e._)`${i} === ${S}`}}};return ir.default=r,ir}var nc;function pv(){if(nc)return Wa;nc=1,Object.defineProperty(Wa,"__esModule",{value:!0});const e=tv(),t=sv(),s=rv(),a=nv(),r=ov(),n=iv(),o=lv(),i=cv(),l=dv(),c=uv(),d=[e.default,t.default,s.default,a.default,r.default,n.default,o.default,i.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},l.default,c.default];return Wa.default=d,Wa}var lr={},Bs={},oc;function Du(){if(oc)return Bs;oc=1,Object.defineProperty(Bs,"__esModule",{value:!0}),Bs.validateAdditionalItems=void 0;const e=ge(),t=ye(),a={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:n}})=>(0,e.str)`must NOT have more than ${n} items`,params:({params:{len:n}})=>(0,e._)`{limit: ${n}}`},code(n){const{parentSchema:o,it:i}=n,{items:l}=o;if(!Array.isArray(l)){(0,t.checkStrictMode)(i,'"additionalItems" is ignored when "items" is not an array of schemas');return}r(n,l)}};function r(n,o){const{gen:i,schema:l,data:c,keyword:d,it:u}=n;u.items=!0;const p=i.const("len",(0,e._)`${c}.length`);if(l===!1)n.setParams({len:o.length}),n.pass((0,e._)`${p} <= ${o.length}`);else if(typeof l=="object"&&!(0,t.alwaysValidSchema)(u,l)){const b=i.var("valid",(0,e._)`${p} <= ${o.length}`);i.if((0,e.not)(b),()=>f(b)),n.ok(b)}function f(b){i.forRange("i",o.length,p,v=>{n.subschema({keyword:d,dataProp:v,dataPropType:t.Type.Num},b),u.allErrors||i.if((0,e.not)(b),()=>i.break())})}}return Bs.validateAdditionalItems=r,Bs.default=a,Bs}var cr={},Fs={},ic;function Nu(){if(ic)return Fs;ic=1,Object.defineProperty(Fs,"__esModule",{value:!0}),Fs.validateTuple=void 0;const e=ge(),t=ye(),s=St(),a={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(n){const{schema:o,it:i}=n;if(Array.isArray(o))return r(n,"additionalItems",o);i.items=!0,!(0,t.alwaysValidSchema)(i,o)&&n.ok((0,s.validateArray)(n))}};function r(n,o,i=n.schema){const{gen:l,parentSchema:c,data:d,keyword:u,it:p}=n;v(c),p.opts.unevaluated&&i.length&&p.items!==!0&&(p.items=t.mergeEvaluated.items(l,i.length,p.items));const f=l.name("valid"),b=l.const("len",(0,e._)`${d}.length`);i.forEach((y,m)=>{(0,t.alwaysValidSchema)(p,y)||(l.if((0,e._)`${b} > ${m}`,()=>n.subschema({keyword:u,schemaProp:m,dataProp:m},f)),n.ok(f))});function v(y){const{opts:m,errSchemaPath:h}=p,_=i.length,S=_===y.minItems&&(_===y.maxItems||y[o]===!1);if(m.strictTuples&&!S){const g=`"${u}" is ${_}-tuple, but minItems or maxItems/${o} are not specified or different at path "${h}"`;(0,t.checkStrictMode)(p,g,m.strictTuples)}}}return Fs.validateTuple=r,Fs.default=a,Fs}var lc;function fv(){if(lc)return cr;lc=1,Object.defineProperty(cr,"__esModule",{value:!0});const e=Nu(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:s=>(0,e.validateTuple)(s,"items")};return cr.default=t,cr}var dr={},cc;function hv(){if(cc)return dr;cc=1,Object.defineProperty(dr,"__esModule",{value:!0});const e=ge(),t=ye(),s=St(),a=Du(),n={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:o}})=>(0,e.str)`must NOT have more than ${o} items`,params:({params:{len:o}})=>(0,e._)`{limit: ${o}}`},code(o){const{schema:i,parentSchema:l,it:c}=o,{prefixItems:d}=l;c.items=!0,!(0,t.alwaysValidSchema)(c,i)&&(d?(0,a.validateAdditionalItems)(o,d):o.ok((0,s.validateArray)(o)))}};return dr.default=n,dr}var ur={},dc;function mv(){if(dc)return ur;dc=1,Object.defineProperty(ur,"__esModule",{value:!0});const e=ge(),t=ye(),a={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:r,max:n}})=>n===void 0?(0,e.str)`must contain at least ${r} valid item(s)`:(0,e.str)`must contain at least ${r} and no more than ${n} valid item(s)`,params:({params:{min:r,max:n}})=>n===void 0?(0,e._)`{minContains: ${r}}`:(0,e._)`{minContains: ${r}, maxContains: ${n}}`},code(r){const{gen:n,schema:o,parentSchema:i,data:l,it:c}=r;let d,u;const{minContains:p,maxContains:f}=i;c.opts.next?(d=p===void 0?1:p,u=f):d=1;const b=n.const("len",(0,e._)`${l}.length`);if(r.setParams({min:d,max:u}),u===void 0&&d===0){(0,t.checkStrictMode)(c,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(u!==void 0&&d>u){(0,t.checkStrictMode)(c,'"minContains" > "maxContains" is always invalid'),r.fail();return}if((0,t.alwaysValidSchema)(c,o)){let _=(0,e._)`${b} >= ${d}`;u!==void 0&&(_=(0,e._)`${_} && ${b} <= ${u}`),r.pass(_);return}c.items=!0;const v=n.name("valid");u===void 0&&d===1?m(v,()=>n.if(v,()=>n.break())):d===0?(n.let(v,!0),u!==void 0&&n.if((0,e._)`${l}.length > 0`,y)):(n.let(v,!1),y()),r.result(v,()=>r.reset());function y(){const _=n.name("_valid"),S=n.let("count",0);m(_,()=>n.if(_,()=>h(S)))}function m(_,S){n.forRange("i",0,b,g=>{r.subschema({keyword:"contains",dataProp:g,dataPropType:t.Type.Num,compositeRule:!0},_),S()})}function h(_){n.code((0,e._)`${_}++`),u===void 0?n.if((0,e._)`${_} >= ${d}`,()=>n.assign(v,!0).break()):(n.if((0,e._)`${_} > ${u}`,()=>n.assign(v,!1).break()),d===1?n.assign(v,!0):n.if((0,e._)`${_} >= ${d}`,()=>n.assign(v,!0)))}}};return ur.default=a,ur}var eo={},uc;function gv(){return uc||(uc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=ge(),s=ye(),a=St();e.error={message:({params:{property:l,depsCount:c,deps:d}})=>{const u=c===1?"property":"properties";return(0,t.str)`must have ${u} ${d} when property ${l} is present`},params:({params:{property:l,depsCount:c,deps:d,missingProperty:u}})=>(0,t._)`{property: ${l},
    missingProperty: ${u},
    depsCount: ${c},
    deps: ${d}}`};const r={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(l){const[c,d]=n(l);o(l,c),i(l,d)}};function n({schema:l}){const c={},d={};for(const u in l){if(u==="__proto__")continue;const p=Array.isArray(l[u])?c:d;p[u]=l[u]}return[c,d]}function o(l,c=l.schema){const{gen:d,data:u,it:p}=l;if(Object.keys(c).length===0)return;const f=d.let("missing");for(const b in c){const v=c[b];if(v.length===0)continue;const y=(0,a.propertyInData)(d,u,b,p.opts.ownProperties);l.setParams({property:b,depsCount:v.length,deps:v.join(", ")}),p.allErrors?d.if(y,()=>{for(const m of v)(0,a.checkReportMissingProp)(l,m)}):(d.if((0,t._)`${y} && (${(0,a.checkMissingProp)(l,v,f)})`),(0,a.reportMissingProp)(l,f),d.else())}}e.validatePropertyDeps=o;function i(l,c=l.schema){const{gen:d,data:u,keyword:p,it:f}=l,b=d.name("valid");for(const v in c)(0,s.alwaysValidSchema)(f,c[v])||(d.if((0,a.propertyInData)(d,u,v,f.opts.ownProperties),()=>{const y=l.subschema({keyword:p,schemaProp:v},b);l.mergeValidEvaluated(y,b)},()=>d.var(b,!0)),l.ok(b))}e.validateSchemaDeps=i,e.default=r})(eo)),eo}var pr={},pc;function bv(){if(pc)return pr;pc=1,Object.defineProperty(pr,"__esModule",{value:!0});const e=ge(),t=ye(),a={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:r})=>(0,e._)`{propertyName: ${r.propertyName}}`},code(r){const{gen:n,schema:o,data:i,it:l}=r;if((0,t.alwaysValidSchema)(l,o))return;const c=n.name("valid");n.forIn("key",i,d=>{r.setParams({propertyName:d}),r.subschema({keyword:"propertyNames",data:d,dataTypes:["string"],propertyName:d,compositeRule:!0},c),n.if((0,e.not)(c),()=>{r.error(!0),l.allErrors||n.break()})}),r.ok(c)}};return pr.default=a,pr}var fr={},fc;function Iu(){if(fc)return fr;fc=1,Object.defineProperty(fr,"__esModule",{value:!0});const e=St(),t=ge(),s=_s(),a=ye(),n={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:o})=>(0,t._)`{additionalProperty: ${o.additionalProperty}}`},code(o){const{gen:i,schema:l,parentSchema:c,data:d,errsCount:u,it:p}=o;if(!u)throw new Error("ajv implementation error");const{allErrors:f,opts:b}=p;if(p.props=!0,b.removeAdditional!=="all"&&(0,a.alwaysValidSchema)(p,l))return;const v=(0,e.allSchemaProperties)(c.properties),y=(0,e.allSchemaProperties)(c.patternProperties);m(),o.ok((0,t._)`${u} === ${s.default.errors}`);function m(){i.forIn("key",d,w=>{!v.length&&!y.length?S(w):i.if(h(w),()=>S(w))})}function h(w){let x;if(v.length>8){const T=(0,a.schemaRefOrVal)(p,c.properties,"properties");x=(0,e.isOwnProperty)(i,T,w)}else v.length?x=(0,t.or)(...v.map(T=>(0,t._)`${w} === ${T}`)):x=t.nil;return y.length&&(x=(0,t.or)(x,...y.map(T=>(0,t._)`${(0,e.usePattern)(o,T)}.test(${w})`))),(0,t.not)(x)}function _(w){i.code((0,t._)`delete ${d}[${w}]`)}function S(w){if(b.removeAdditional==="all"||b.removeAdditional&&l===!1){_(w);return}if(l===!1){o.setParams({additionalProperty:w}),o.error(),f||i.break();return}if(typeof l=="object"&&!(0,a.alwaysValidSchema)(p,l)){const x=i.name("valid");b.removeAdditional==="failing"?(g(w,x,!1),i.if((0,t.not)(x),()=>{o.reset(),_(w)})):(g(w,x),f||i.if((0,t.not)(x),()=>i.break()))}}function g(w,x,T){const E={keyword:"additionalProperties",dataProp:w,dataPropType:a.Type.Str};T===!1&&Object.assign(E,{compositeRule:!0,createErrors:!1,allErrors:!1}),o.subschema(E,x)}}};return fr.default=n,fr}var hr={},hc;function _v(){if(hc)return hr;hc=1,Object.defineProperty(hr,"__esModule",{value:!0});const e=mn(),t=St(),s=ye(),a=Iu(),r={keyword:"properties",type:"object",schemaType:"object",code(n){const{gen:o,schema:i,parentSchema:l,data:c,it:d}=n;d.opts.removeAdditional==="all"&&l.additionalProperties===void 0&&a.default.code(new e.KeywordCxt(d,a.default,"additionalProperties"));const u=(0,t.allSchemaProperties)(i);for(const y of u)d.definedProperties.add(y);d.opts.unevaluated&&u.length&&d.props!==!0&&(d.props=s.mergeEvaluated.props(o,(0,s.toHash)(u),d.props));const p=u.filter(y=>!(0,s.alwaysValidSchema)(d,i[y]));if(p.length===0)return;const f=o.name("valid");for(const y of p)b(y)?v(y):(o.if((0,t.propertyInData)(o,c,y,d.opts.ownProperties)),v(y),d.allErrors||o.else().var(f,!0),o.endIf()),n.it.definedProperties.add(y),n.ok(f);function b(y){return d.opts.useDefaults&&!d.compositeRule&&i[y].default!==void 0}function v(y){n.subschema({keyword:"properties",schemaProp:y,dataProp:y},f)}}};return hr.default=r,hr}var mr={},mc;function vv(){if(mc)return mr;mc=1,Object.defineProperty(mr,"__esModule",{value:!0});const e=St(),t=ge(),s=ye(),a=ye(),r={keyword:"patternProperties",type:"object",schemaType:"object",code(n){const{gen:o,schema:i,data:l,parentSchema:c,it:d}=n,{opts:u}=d,p=(0,e.allSchemaProperties)(i),f=p.filter(S=>(0,s.alwaysValidSchema)(d,i[S]));if(p.length===0||f.length===p.length&&(!d.opts.unevaluated||d.props===!0))return;const b=u.strictSchema&&!u.allowMatchingProperties&&c.properties,v=o.name("valid");d.props!==!0&&!(d.props instanceof t.Name)&&(d.props=(0,a.evaluatedPropsToName)(o,d.props));const{props:y}=d;m();function m(){for(const S of p)b&&h(S),d.allErrors?_(S):(o.var(v,!0),_(S),o.if(v))}function h(S){for(const g in b)new RegExp(S).test(g)&&(0,s.checkStrictMode)(d,`property ${g} matches pattern ${S} (use allowMatchingProperties)`)}function _(S){o.forIn("key",l,g=>{o.if((0,t._)`${(0,e.usePattern)(n,S)}.test(${g})`,()=>{const w=f.includes(S);w||n.subschema({keyword:"patternProperties",schemaProp:S,dataProp:g,dataPropType:a.Type.Str},v),d.opts.unevaluated&&y!==!0?o.assign((0,t._)`${y}[${g}]`,!0):!w&&!d.allErrors&&o.if((0,t.not)(v),()=>o.break())})})}}};return mr.default=r,mr}var gr={},gc;function yv(){if(gc)return gr;gc=1,Object.defineProperty(gr,"__esModule",{value:!0});const e=ye(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(s){const{gen:a,schema:r,it:n}=s;if((0,e.alwaysValidSchema)(n,r)){s.fail();return}const o=a.name("valid");s.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},o),s.failResult(o,()=>s.reset(),()=>s.error())},error:{message:"must NOT be valid"}};return gr.default=t,gr}var br={},bc;function wv(){if(bc)return br;bc=1,Object.defineProperty(br,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:St().validateUnion,error:{message:"must match a schema in anyOf"}};return br.default=t,br}var _r={},_c;function xv(){if(_c)return _r;_c=1,Object.defineProperty(_r,"__esModule",{value:!0});const e=ge(),t=ye(),a={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:r})=>(0,e._)`{passingSchemas: ${r.passing}}`},code(r){const{gen:n,schema:o,parentSchema:i,it:l}=r;if(!Array.isArray(o))throw new Error("ajv implementation error");if(l.opts.discriminator&&i.discriminator)return;const c=o,d=n.let("valid",!1),u=n.let("passing",null),p=n.name("_valid");r.setParams({passing:u}),n.block(f),r.result(d,()=>r.reset(),()=>r.error(!0));function f(){c.forEach((b,v)=>{let y;(0,t.alwaysValidSchema)(l,b)?n.var(p,!0):y=r.subschema({keyword:"oneOf",schemaProp:v,compositeRule:!0},p),v>0&&n.if((0,e._)`${p} && ${d}`).assign(d,!1).assign(u,(0,e._)`[${u}, ${v}]`).else(),n.if(p,()=>{n.assign(d,!0),n.assign(u,v),y&&r.mergeEvaluated(y,e.Name)})})}}};return _r.default=a,_r}var vr={},vc;function Tv(){if(vc)return vr;vc=1,Object.defineProperty(vr,"__esModule",{value:!0});const e=ye(),t={keyword:"allOf",schemaType:"array",code(s){const{gen:a,schema:r,it:n}=s;if(!Array.isArray(r))throw new Error("ajv implementation error");const o=a.name("valid");r.forEach((i,l)=>{if((0,e.alwaysValidSchema)(n,i))return;const c=s.subschema({keyword:"allOf",schemaProp:l},o);s.ok(o),s.mergeEvaluated(c)})}};return vr.default=t,vr}var yr={},yc;function Sv(){if(yc)return yr;yc=1,Object.defineProperty(yr,"__esModule",{value:!0});const e=ge(),t=ye(),a={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:n})=>(0,e.str)`must match "${n.ifClause}" schema`,params:({params:n})=>(0,e._)`{failingKeyword: ${n.ifClause}}`},code(n){const{gen:o,parentSchema:i,it:l}=n;i.then===void 0&&i.else===void 0&&(0,t.checkStrictMode)(l,'"if" without "then" and "else" is ignored');const c=r(l,"then"),d=r(l,"else");if(!c&&!d)return;const u=o.let("valid",!0),p=o.name("_valid");if(f(),n.reset(),c&&d){const v=o.let("ifClause");n.setParams({ifClause:v}),o.if(p,b("then",v),b("else",v))}else c?o.if(p,b("then")):o.if((0,e.not)(p),b("else"));n.pass(u,()=>n.error(!0));function f(){const v=n.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},p);n.mergeEvaluated(v)}function b(v,y){return()=>{const m=n.subschema({keyword:v},p);o.assign(u,p),n.mergeValidEvaluated(m,u),y?o.assign(y,(0,e._)`${v}`):n.setParams({ifClause:v})}}}};function r(n,o){const i=n.schema[o];return i!==void 0&&!(0,t.alwaysValidSchema)(n,i)}return yr.default=a,yr}var wr={},wc;function Ev(){if(wc)return wr;wc=1,Object.defineProperty(wr,"__esModule",{value:!0});const e=ye(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:s,parentSchema:a,it:r}){a.if===void 0&&(0,e.checkStrictMode)(r,`"${s}" without "if" is ignored`)}};return wr.default=t,wr}var xc;function kv(){if(xc)return lr;xc=1,Object.defineProperty(lr,"__esModule",{value:!0});const e=Du(),t=fv(),s=Nu(),a=hv(),r=mv(),n=gv(),o=bv(),i=Iu(),l=_v(),c=vv(),d=yv(),u=wv(),p=xv(),f=Tv(),b=Sv(),v=Ev();function y(m=!1){const h=[d.default,u.default,p.default,f.default,b.default,v.default,o.default,i.default,n.default,l.default,c.default];return m?h.push(t.default,a.default):h.push(e.default,s.default),h.push(r.default),h}return lr.default=y,lr}var xr={},Tr={},Tc;function Av(){if(Tc)return Tr;Tc=1,Object.defineProperty(Tr,"__esModule",{value:!0});const e=ge(),s={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:a})=>(0,e.str)`must match format "${a}"`,params:({schemaCode:a})=>(0,e._)`{format: ${a}}`},code(a,r){const{gen:n,data:o,$data:i,schema:l,schemaCode:c,it:d}=a,{opts:u,errSchemaPath:p,schemaEnv:f,self:b}=d;if(!u.validateFormats)return;i?v():y();function v(){const m=n.scopeValue("formats",{ref:b.formats,code:u.code.formats}),h=n.const("fDef",(0,e._)`${m}[${c}]`),_=n.let("fType"),S=n.let("format");n.if((0,e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`,()=>n.assign(_,(0,e._)`${h}.type || "string"`).assign(S,(0,e._)`${h}.validate`),()=>n.assign(_,(0,e._)`"string"`).assign(S,h)),a.fail$data((0,e.or)(g(),w()));function g(){return u.strictSchema===!1?e.nil:(0,e._)`${c} && !${S}`}function w(){const x=f.$async?(0,e._)`(${h}.async ? await ${S}(${o}) : ${S}(${o}))`:(0,e._)`${S}(${o})`,T=(0,e._)`(typeof ${S} == "function" ? ${x} : ${S}.test(${o}))`;return(0,e._)`${S} && ${S} !== true && ${_} === ${r} && !${T}`}}function y(){const m=b.formats[l];if(!m){g();return}if(m===!0)return;const[h,_,S]=w(m);h===r&&a.pass(x());function g(){if(u.strictSchema===!1){b.logger.warn(T());return}throw new Error(T());function T(){return`unknown format "${l}" ignored in schema at path "${p}"`}}function w(T){const E=T instanceof RegExp?(0,e.regexpCode)(T):u.code.formats?(0,e._)`${u.code.formats}${(0,e.getProperty)(l)}`:void 0,P=n.scopeValue("formats",{key:l,ref:T,code:E});return typeof T=="object"&&!(T instanceof RegExp)?[T.type||"string",T.validate,(0,e._)`${P}.validate`]:["string",T,P]}function x(){if(typeof m=="object"&&!(m instanceof RegExp)&&m.async){if(!f.$async)throw new Error("async format in sync schema");return(0,e._)`await ${S}(${o})`}return typeof _=="function"?(0,e._)`${S}(${o})`:(0,e._)`${S}.test(${o})`}}}};return Tr.default=s,Tr}var Sc;function Pv(){if(Sc)return xr;Sc=1,Object.defineProperty(xr,"__esModule",{value:!0});const t=[Av().default];return xr.default=t,xr}var Es={},Ec;function Cv(){return Ec||(Ec=1,Object.defineProperty(Es,"__esModule",{value:!0}),Es.contentVocabulary=Es.metadataVocabulary=void 0,Es.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],Es.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),Es}var kc;function Ov(){if(kc)return Va;kc=1,Object.defineProperty(Va,"__esModule",{value:!0});const e=ev(),t=pv(),s=kv(),a=Pv(),r=Cv(),n=[e.default,t.default,(0,s.default)(),a.default,r.metadataVocabulary,r.contentVocabulary];return Va.default=n,Va}var Sr={},ra={},Ac;function $v(){if(Ac)return ra;Ac=1,Object.defineProperty(ra,"__esModule",{value:!0}),ra.DiscrError=void 0;var e;return(function(t){t.Tag="tag",t.Mapping="mapping"})(e||(ra.DiscrError=e={})),ra}var Pc;function Mv(){if(Pc)return Sr;Pc=1,Object.defineProperty(Sr,"__esModule",{value:!0});const e=ge(),t=$v(),s=Xo(),a=gn(),r=ye(),o={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:i,tagName:l}})=>i===t.DiscrError.Tag?`tag "${l}" must be string`:`value of tag "${l}" must be in oneOf`,params:({params:{discrError:i,tag:l,tagName:c}})=>(0,e._)`{error: ${i}, tag: ${c}, tagValue: ${l}}`},code(i){const{gen:l,data:c,schema:d,parentSchema:u,it:p}=i,{oneOf:f}=u;if(!p.opts.discriminator)throw new Error("discriminator: requires discriminator option");const b=d.propertyName;if(typeof b!="string")throw new Error("discriminator: requires propertyName");if(d.mapping)throw new Error("discriminator: mapping is not supported");if(!f)throw new Error("discriminator: requires oneOf keyword");const v=l.let("valid",!1),y=l.const("tag",(0,e._)`${c}${(0,e.getProperty)(b)}`);l.if((0,e._)`typeof ${y} == "string"`,()=>m(),()=>i.error(!1,{discrError:t.DiscrError.Tag,tag:y,tagName:b})),i.ok(v);function m(){const S=_();l.if(!1);for(const g in S)l.elseIf((0,e._)`${y} === ${g}`),l.assign(v,h(S[g]));l.else(),i.error(!1,{discrError:t.DiscrError.Mapping,tag:y,tagName:b}),l.endIf()}function h(S){const g=l.name("valid"),w=i.subschema({keyword:"oneOf",schemaProp:S},g);return i.mergeEvaluated(w,e.Name),g}function _(){var S;const g={},w=T(u);let x=!0;for(let $=0;$<f.length;$++){let O=f[$];if(O?.$ref&&!(0,r.schemaHasRulesButRef)(O,p.self.RULES)){const G=O.$ref;if(O=s.resolveRef.call(p.self,p.schemaEnv.root,p.baseId,G),O instanceof s.SchemaEnv&&(O=O.schema),O===void 0)throw new a.default(p.opts.uriResolver,p.baseId,G)}const L=(S=O?.properties)===null||S===void 0?void 0:S[b];if(typeof L!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${b}"`);x=x&&(w||T(O)),E(L,$)}if(!x)throw new Error(`discriminator: "${b}" must be required`);return g;function T({required:$}){return Array.isArray($)&&$.includes(b)}function E($,O){if($.const)P($.const,O);else if($.enum)for(const L of $.enum)P(L,O);else throw new Error(`discriminator: "properties/${b}" must have "const" or "enum"`)}function P($,O){if(typeof $!="string"||$ in g)throw new Error(`discriminator: "${b}" values must be unique strings`);g[$]=O}}}};return Sr.default=o,Sr}const Rv="http://json-schema.org/draft-07/schema#",Lv="http://json-schema.org/draft-07/schema#",Dv="Core schema meta-schema",Nv={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},Iv=["object","boolean"],Bv={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},Fv={$schema:Rv,$id:Lv,title:Dv,definitions:Nv,type:Iv,properties:Bv,default:!0};var Cc;function zv(){return Cc||(Cc=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const s=X_(),a=Ov(),r=Mv(),n=Fv,o=["/properties"],i="http://json-schema.org/draft-07/schema";class l extends s.default{_addVocabularies(){super._addVocabularies(),a.default.forEach(b=>this.addVocabulary(b)),this.opts.discriminator&&this.addKeyword(r.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const b=this.opts.$data?this.$dataMetaSchema(n,o):n;this.addMetaSchema(b,i,!1),this.refs["http://json-schema.org/schema"]=i}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(i)?i:void 0)}}t.Ajv=l,e.exports=t=l,e.exports.Ajv=l,Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var c=mn();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return c.KeywordCxt}});var d=ge();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return d._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return d.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return d.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return d.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return d.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return d.CodeGen}});var u=Jo();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return u.default}});var p=gn();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return p.default}})})(Ha,Ha.exports)),Ha.exports}var Hv=zv();const jv=mu(Hv),Uv={$id:"gameModeRules",type:"object",required:["betTypes","requiredBetTypes","maxBetsPerType","maxBetsTotal","minBetsTotal","stakeRule","stakeMin","allowPartialSubmit","allowBetModification","lockOnFirstBet","oneBetPerMatchPerType"],properties:{betTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},minItems:1,description:"Allowed bet types for this game mode"},requiredBetTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},description:"Bet types the user MUST place. Empty = no requirement."},maxBetsPerType:{type:"integer",minimum:-1,description:"Max bets per bet type per match. -1 = unlimited."},maxBetsTotal:{type:"integer",minimum:-1,description:"Max total bets across all matches. -1 = unlimited."},minBetsTotal:{type:"integer",minimum:0,description:"Min total bets required before submission. 0 = none."},stakeRule:{type:"string",enum:["FREE","SPEND_ALL","MIN_MAX"],description:"FREE = any amount | SPEND_ALL = must use entire TD$ | MIN_MAX = within range"},stakeMin:{type:["number","null"],minimum:0,description:"Min stake per bet. null = no minimum."},stakeMax:{type:["number","null"],minimum:0,description:"Max stake per bet. null = no maximum."},allowPartialSubmit:{type:"boolean",description:"Can user submit with incomplete lineup?"},allowBetModification:{type:"boolean",description:"Can user change/remove bets after placing?"},lockOnFirstBet:{type:"boolean",description:"Does placing first bet lock user into the tournament?"},oneBetPerMatchPerType:{type:"boolean",description:"Restrict to one bet per match per bet type?"}},additionalProperties:!1},qv={$id:"gameModeScoring",type:"object",required:["method","rankBy","penalizeMissing"],properties:{method:{type:"string",enum:["PAYOUT_SUM","PROFIT","WIN_RATE","CUSTOM"],description:"Primary scoring method"},rankBy:{type:"array",items:{type:"string"},minItems:1,description:"Ordered tiebreaker fields"},bonuses:{type:"array",items:{type:"object",properties:{condition:{type:"string"},points:{type:"number"},label:{type:"string"}}},description:"Bonus scoring rules"},penalizeMissing:{type:"boolean",description:"Penalize users who did not place all required bets?"}},additionalProperties:!1},Bu=new jv({allErrors:!0}),Oc=Bu.compile(Uv),$c=Bu.compile(qv),Gv=e=>{const t=[];Oc(e.rules)||Oc.errors.forEach(n=>{t.push(`rules${n.instancePath}: ${n.message}`)}),$c(e.scoring)||$c.errors.forEach(n=>{t.push(`scoring${n.instancePath}: ${n.message}`)});const r=e.rules;return r.requiredBetTypes.forEach(n=>{r.betTypes.includes(n)||t.push(`requiredBetTypes contains "${n}" which is not in betTypes`)}),r.stakeRule==="MIN_MAX"&&r.stakeMin==null&&r.stakeMax==null&&t.push("stakeRule is MIN_MAX but neither stakeMin nor stakeMax is set"),r.minBetsTotal>0&&r.requiredBetTypes.length>r.minBetsTotal&&t.push(`requiredBetTypes (${r.requiredBetTypes.length}) exceeds minBetsTotal (${r.minBetsTotal})`),{valid:t.length===0,errors:t}},Vv=e=>{const t=e.rules,s=e.scoring;return{"mode.id":e.id,"mode.label":e.label,"mode.description":e.description,"rules.betTypes":t.betTypes.join(", "),"rules.requiredBetTypes":t.requiredBetTypes.length>0?t.requiredBetTypes.join(", "):"(none)","rules.maxBetsPerType":t.maxBetsPerType===-1?"Unlimited":String(t.maxBetsPerType),"rules.maxBetsTotal":t.maxBetsTotal===-1?"Unlimited":String(t.maxBetsTotal),"rules.minBetsTotal":String(t.minBetsTotal),"rules.stakeRule":t.stakeRule,"rules.stakeMin":t.stakeMin!=null?String(t.stakeMin):"(none)","rules.stakeMax":t.stakeMax!=null?String(t.stakeMax):"(none)","rules.allowPartialSubmit":String(t.allowPartialSubmit),"rules.allowBetModification":String(t.allowBetModification),"rules.lockOnFirstBet":String(t.lockOnFirstBet),"rules.oneBetPerMatchPerType":String(t.oneBetPerMatchPerType),"scoring.method":s.method,"scoring.rankBy":s.rankBy.join(", "),"scoring.bonuses":s.bonuses.length>0?JSON.stringify(s.bonuses):"(none)","scoring.penalizeMissing":String(s.penalizeMissing),"ui.badge":e.getBadge()?`${e.getBadge().label} (${e.getBadge().color})`:"(none)","ui.emptyStateText":e.getEmptyStateText()}},Jr={DEFAULT:new gl,DEFAULT_FORMAT:new gl,SET_IT_AND_FORGET_IT:new D_},Mc=e=>Jr[e]||Jr.DEFAULT,Kv=()=>Object.keys(Jr),Yv=()=>{const e={};return Object.entries(Jr).forEach(([t,s])=>{e[t]=Gv(s)}),e};typeof window<"u"&&(window.GameMode={get:Mc,modes:Kv,validate:Yv,dump:e=>Vv(Mc(e))});class Wv extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=ke.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name","data-active-count","data-td-dollars"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}handleLogoClick(t){t.preventDefault(),le.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),le.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}handleCreateContestClick(t){t.preventDefault(),le.publish("WC.APP.HEAD_TOP.CREATE_CONTEST",JSON.stringify({timestamp:Date.now()}))}render(){const t=ke.isDark,s=this.getAttribute("data-user-name")||"Guest",a=this.getAttribute("data-active-count")||"0",r=parseFloat(this.getAttribute("data-td-dollars")||"0"),n=r>=1e3?`${Math.round(r/100)/10}K`:Math.round(r).toLocaleString();this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        ${bs()}

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
            <span class="head-kpi__value">${n}</span>
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
    `;const o=this.shadowRoot.querySelector("#logoLink"),i=this.shadowRoot.querySelector("#profileIcon"),l=this.shadowRoot.querySelector("#createContestBtn");o&&o.addEventListener("click",c=>this.handleLogoClick(c)),i&&i.addEventListener("click",c=>this.handleProfileClick(c)),l&&l.addEventListener("click",c=>this.handleCreateContestClick(c))}}customElements.define("bma-app-head-top",Wv);class Jv extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=ke.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),le.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=ke.isDark,s=[{name:"head_mid_lobby",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}];parseInt(this.getAttribute("data-active-count"));const a=0,r=n=>{const o=this.selectedTab===n.name,i=n.name==="head_mid_my";return`
        <div
          class="nav-item ${o?"nav-selected":"nav-unselected"}"
          data-tab="${n.name}"
          role="button"
          tabindex="0"
          aria-label="${n.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${n.iconVar}"></div>
            ${i?`<span class="nav-badge">${a}</span>`:""}
          </div>
          <span class="nav-caption">${n.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        ${bs()}

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
        @media ${vu.mobile} {
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
        ${s.map(n=>r(n)).join("")}
      </div>
    `,s.forEach(n=>{const o=this.shadowRoot.querySelector(`[data-tab="${n.name}"]`);o&&(o.addEventListener("click",()=>this.handleTabClick(n.name,n.topic)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleTabClick(n.name,n.topic))}))})}}customElements.define("bma-app-head-mid",Jv);class Xv extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=ke.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,a){if(this.shadowRoot&&s!==a){if(t==="data-selected-chip"){if(this.selectedChip=a||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,s){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),le.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(s=>{const a=s.getAttribute("data-chip")===this.selectedChip;s.classList.toggle("chip-selected",a),s.classList.toggle("chip-unselected",!a)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(".head-sports-container"),r=this.shadowRoot?.querySelector("#navPrev"),n=this.shadowRoot?.querySelector("#navNext");if(!t||!s||!a||!r||!n)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),i=o>8,l=t.scrollLeft<=4,c=t.scrollLeft>=o-4;a.classList.toggle("rail-has-overflow",i),t.classList.toggle("has-scroll",i),s.classList.toggle("has-overflow",i),s.classList.toggle("has-left-overflow",i&&!l),s.classList.toggle("has-right-overflow",i&&!c),r.classList.toggle("nav-disabled",!i||l),n.classList.toggle("nav-disabled",!i||c),r.setAttribute("aria-disabled",String(!i||l)),n.setAttribute("aria-disabled",String(!i||c)),r.tabIndex=!i||l?-1:0,n.tabIndex=!i||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!s||!a)return;const r=s.getBoundingClientRect(),n=a.getBoundingClientRect(),o=t.scrollWidth-t.clientWidth;if(n.left>=r.left&&n.right<=r.right)return;const i=12;let l;n.left<r.left?l=t.scrollLeft+(n.left-r.left)-i:l=t.scrollLeft+(n.right-r.right)+i,l=Math.max(0,Math.min(l,o)),!(Math.abs(t.scrollLeft-l)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:l,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const s=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=s-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const s=[...t.querySelectorAll(".sport-chip")];if(!s.length)return;const a=Math.max(0,t.scrollWidth-t.clientWidth);if(a<=8)return;const r=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,n=t.scrollLeft;let o=n,i=Number.POSITIVE_INFINITY;s.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-r,a)),d=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-t.clientWidth+r,a));[c,d].forEach(u=>{const p=Math.abs(u-n);p<i&&(i=p,o=u)})}),!(i<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",a=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=a.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),le.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const s=()=>{if(!this.isPointerDown)return;const a=Date.now()-this.dragStartTime,r=this.dragDistance>10||this.dragDistance>4&&a>180;this.isPointerDown=!1,t.style.cursor="grab",r&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",s),t.addEventListener("mouseup",s),t.addEventListener("mousemove",a=>{if(!this.isPointerDown)return;a.preventDefault();const n=(a.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(n)),t.scrollLeft=this.dragStartScrollLeft-n}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=ke.isDark,r=(be().appMeta?.sports||[]).filter(f=>f.active===!0),n=["NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],o=[...r].sort((f,b)=>{const v=f.title||f.description||"",y=b.title||b.description||"",m=n.indexOf(v),h=n.indexOf(y);return m!==-1&&h!==-1?m-h:m!==-1?-1:h!==-1?1:v.toLowerCase().localeCompare(y.toLowerCase())}),i=o.findIndex(f=>(f.title||f.description)==="NFL");if(i!==-1){const[f]=o.splice(i,1);let b=-1;o.forEach((y,m)=>{String(y.key||"").startsWith("soccer_fifa_world_cup")&&(b=m)});const v=b!==-1?b+1:o.length;o.splice(v,0,f)}const l=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...o],c=f=>{const b=this.selectedChip===f.key,v=f.key==="all";let y="";return v?y='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':y=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`,`
        <div
          class="sport-chip ${b?"chip-selected":"chip-unselected"}"
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
        ${De()}
        ${bs()}

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
            ${l.map(f=>c(f)).join("")}
          </div>
        </div>
        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,l.forEach(f=>{const b=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);b&&b.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const d=this.shadowRoot.querySelector("#navPrev"),u=this.shadowRoot.querySelector("#navNext");d&&d.addEventListener("click",()=>this.scrollToPrev()),u&&u.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const p=this.shadowRoot.querySelector(".chips-container");p&&(p.scrollLeft=0),requestAnimationFrame(()=>{p&&(p.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",Xv);class Qv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-matches","data-sync-theme"]}connectedCallback(){this._unsub=ke.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){s!==a&&this.render()}get matches(){const t=this.getAttribute("data-matches");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ve.find(a=>a.key===t)?.group||"default"}_parseScoreboard(t){const s=t.scoreboard_data;if(!s)return null;try{return typeof s=="string"?JSON.parse(s):s}catch{return null}}_getMatchDisplay(t){const s=this._parseScoreboard(t)||{},a=parseInt(s.home_score||0),r=parseInt(s.away_score||0),n=s.period||0,o=String(s.time_remaining||"").trim(),i=o.toLowerCase(),l=a>0||r>0||n>0,c=String(t.status||"").toUpperCase()==="COMPLETED"||i==="final",d=t.scheduled_at||t.start_time||"";let u=!1;if(d){const h=d.includes("Z")||/[+-]\d{2}:\d{2}$/.test(d),_=new Date(h?d:d+"Z").getTime();isNaN(_)||(u=_<=Date.now())}const f=!c&&(l||o&&i!=="scheduled"&&i!=="final"||u),b=t.home_team_id||t.home_team||"Home",v=t.away_team_id||t.away_team||"Away";if(c)return{homeName:b,awayName:v,homeScore:a,awayScore:r,statusLabel:"FINAL",statusClass:"final",showScores:!0};if(f)return{homeName:b,awayName:v,homeScore:a,awayScore:r,statusLabel:o&&i!=="in progress"?o:"LIVE",statusClass:"live",showScores:!0};const y=t.scheduled_at||t.start_time||t.status_time;let m="UPCOMING";if(y)try{const h=y.includes("Z")||/[+-]\d{2}:\d{2}$/.test(y),_=new Date(h?y:y+"Z");isNaN(_.getTime())||(m=_.toLocaleString(void 0,{weekday:"short",hour:"numeric",minute:"2-digit"}))}catch{}return{homeName:b,awayName:v,homeScore:0,awayScore:0,statusLabel:m,statusClass:"upcoming",showScores:!1}}render(){const t=Date.now(),s=720*60*1e3,a=1440*60*1e3,n=this.matches.map(c=>({match:c,display:this._getMatchDisplay(c)})).filter(c=>c.display!==null).filter(c=>{const d=c.display.statusClass;if(d==="live")return!0;const u=new Date(c.match.scheduled_at||c.match.status_time||0).getTime();return u?d==="final"?t-u<=s:d==="upcoming"?u-t<=a&&u>=t:!1:!1}),o={live:0,final:1,upcoming:2};n.sort((c,d)=>{const u=o[c.display.statusClass]??9,p=o[d.display.statusClass]??9;if(u!==p)return u-p;const f=new Date(c.match.scheduled_at||c.match.status_time||0).getTime(),b=new Date(d.match.scheduled_at||d.match.status_time||0).getTime();return c.display.statusClass==="upcoming"?f-b:b-f});const i=n.slice(0,40);if(i.length===0){this.shadowRoot.innerHTML="";return}const l=i.map(({match:c,display:d})=>{const u=this._sportGroup(c.sport_id),p=f=>d.showScores?`<span class="score-pill__score">${f}</span>`:"";return`
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
                ${De()}
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
                    ${l}
                    ${l}
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".score-pill").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.matchGuid;le.publish("SCORES.MATCH_CLICK",JSON.stringify({matchGuid:d,timestamp:Date.now()}))})})}_abbr(t){if(!t)return"";const s=String(t);if(s.length<=14)return s;const a=s.split(" ");return a.length>1?a[a.length-1].slice(0,14):s.slice(0,14)}}customElements.define("bma-scores-banner",Qv);class Zv extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=ke.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),le.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){ke.theme;const t=ke.isDark,s=[{name:"foot_all_sports",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}];parseInt(this.getAttribute("data-active-count"));const a=0,r=n=>{const o=this.selectedItem===n.name,i=n.name==="foot_my_tourneys";return`
        <div
          class="nav-item ${o?"nav-selected":"nav-unselected"}"
          data-item="${n.name}"
          role="button"
          tabindex="0"
          aria-label="${n.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${n.iconVar}"></div>
            ${i?`<span class="nav-badge">${a}</span>`:""}
          </div>
          <span class="nav-caption">${n.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        ${bs()}

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
        @media ${vu.mobile} {
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
        ${s.map(n=>r(n)).join("")}
      </div>
    `,s.forEach(n=>{const o=this.shadowRoot.querySelector(`[data-item="${n.name}"]`);o&&(o.addEventListener("click",()=>this.handleItemClick(n.name,n.topic)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleItemClick(n.name,n.topic))}))})}}customElements.define("bma-app-foot",Zv);class ey extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=ke.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}_doLogout(){le.publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()}))}render(){let t="";try{t=be().appSession?.session_app?.version||""}catch{}this.shadowRoot.innerHTML=`
            <style>
                ${De()}
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
        `;const s=this.shadowRoot.querySelector(".foot-logout");s&&s.addEventListener("click",()=>this._doLogout())}}customElements.define("bma-app-foot-branded",ey);class ty extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=s[0],r=a.short_title||"Match Info N/A",o=Object.keys(a).filter(h=>h!=="short_title")[0]||"Unknown Team",i=a[o],l=i.odds||"N/A",c=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),u=parseFloat(i.payout||0).toFixed(2),p=i.reconciled!==!1,f=p&&parseFloat(u)>parseFloat(d),b=p&&parseFloat(u)<=parseFloat(d);let v="";p?f?v="win":b&&(v="loss"):v="unreconciled";const y=t.status_time?Ys.formatDateLocal(t.status_time):"";let m=o;if(c==="spread"&&i.point){const h=parseFloat(i.point)>0?`+${i.point}`:i.point;m=`${o} ${h}`}else c==="total"&&i.point&&(m=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        :host {
          display: block;
          width: 100%;
          margin-bottom: 8px;
        }

        .bet-existing-card {
          display: grid;
          grid-template-areas:
            "grid_header"
            "grid_content";
          grid-template-rows: auto auto;
          background: var(--app-core-color--gray-2__dark--brand, #161616);
          border: none;
          box-shadow: inset 0 0 0 1px var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: var(--card-radius, var(--radius-lg, 12px));
          margin-bottom: 6px; padding: 8px;
          gap: 8px;
          box-sizing: border-box;
        }

        /* Border color states */
        .bet-existing-card.unreconciled {
          box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.1);
        }

        .bet-existing-card.win {
          box-shadow: inset 0 0 0 1px rgba(20, 185, 99, 0.1);
        }

        .bet-existing-card.loss {
          box-shadow: inset 0 0 0 1px rgba(185, 20, 24, 0.1);
        }

        /* Stake background color states */
        .bet-existing-card.unreconciled .content_stake_text {
          background: rgba(247, 198, 13, 0.1);
        }

        .bet-existing-card.win .content_stake_text {
          background: rgba(20, 185, 99, 0.1);
        }

        .bet-existing-card.loss .content_stake_text {
          background: rgba(185, 20, 24, 0.1);
        }

        .grid_header {
          grid-area: grid_header;
          display: grid;
          grid-template-columns: 70% 30%;
          gap: 8px;
          align-items: center;
          padding-bottom: 8px;
          border-bottom: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
        }

        .grid_content {
          grid-area: grid_content;
          display: grid;
          grid-template-columns: 36% auto 124px;
          gap: 6px;
          align-items: center;
        }

        .content_team_points {
          font-weight: 700;
          font-size: 12px;
          color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
        }

        .content_odds {
          font-size: 0.9rem;
          color: #fff;
          text-align: center;
        }

        /* Add "+" prefix to positive odds (not negative numbers) */
        .content_odds:not([data-odds-value^="-"])::before {
          content: "+";
        }

        .content_stake_text {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding: 8px;
          background: var(--app-core-color--gray-3__dark--brand, #181818);
          border: none;
          box-shadow: inset 0 0 0 1px var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: var(--input-radius, 6px);
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: right;
          box-sizing: border-box;
        }

        .content_type {
          font-size: 0.75rem;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          text-transform: uppercase;
          font-weight: 600;
        }

        .match_desc {
          font-size: 11px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .match_date {
          font-size: 10px;
          color: var(--app-core-color--gray-6__dark--brand, #969696);
          text-align: center;
        }

        .content_payout {
          font-size: 12px;
          font-weight: 700;
          color: var(--app-core-color--green-3__dark--brand, #14b963);
          text-align: right;
        }

        .content_payout.unreconciled {
          opacity: 0.4;
        }

        @media (orientation: portrait), (max-width: 768px) {
          .grid_content {
            grid-template-columns: 40% auto 120px;
            gap: 6px;
          }

          .content_team_points {
            font-size: 0.85rem;
          }

          .content_odds {
            font-size: 0.8rem;
          }

          .content_stake_text {
            padding: 6px;
            font-size: 0.85rem;
          }
        }
      </style>

      <div class="bet-existing-card ${v}">
        <div class="grid_header">
          <div class="match_desc">${r}</div>
          <div class="match_date">${y}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${m}</div>
          <div class="content_odds" data-odds-value="${l}">${l}</div>
          <div class="content_stake_text">${d}</div>

          <!-- Row 2 -->
          <div class="content_type">${c.toUpperCase()}</div>
          <div></div>
          <div></div>

          <!-- Row 3 (payout only) -->
          <div></div>
          <div></div>
          <div class="content_payout ${p?"":"unreconciled"}">Payout: ${u}</div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",ty);Aa.init();window.BrandManager=Aa;const Rc=`
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Rc)}):document.body.insertAdjacentHTML("beforeend",Rc);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const bn=gh(L_);bn.config.devtools=!1;bn.use(vh());bn.use(_a);bn.mount("#app");(function(){let t=!1;const s=o=>{if(!t)return;const i=o.target;i&&typeof i.closest=="function"&&i.closest("neodigm-sodapop")||o.preventDefault()},a=()=>{const o=t,i=!!document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']");if(t=i,document.body.style.touchAction=i?"none":"",document.documentElement.style.overscrollBehavior=i?"none":"",o&&!i){const l=document.querySelector("bma-app-foot");l&&l.setAttribute("data-selected-item","foot_all_sports");const c=document.querySelector("bma-app-head-mid");c&&c.setAttribute("data-selected-tab","head_mid_lobby")}},r=new MutationObserver(a),n=()=>{r.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]}),document.addEventListener("touchmove",s,{passive:!1,capture:!0}),a()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()})();document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
