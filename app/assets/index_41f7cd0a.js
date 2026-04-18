(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();function To(e){const t=Object.create(null);for(const a of e.split(","))t[a]=1;return a=>a in t}const Pe={},ja=[],Lt=()=>{},Mc=()=>!1,Jr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),So=e=>e.startsWith("onUpdate:"),Fe=Object.assign,Eo=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},Bu=Object.prototype.hasOwnProperty,Te=(e,t)=>Bu.call(e,t),fe=Array.isArray,Ua=e=>ks(e)==="[object Map]",Xr=e=>ks(e)==="[object Set]",ei=e=>ks(e)==="[object Date]",me=e=>typeof e=="function",Re=e=>typeof e=="string",Nt=e=>typeof e=="symbol",Ce=e=>e!==null&&typeof e=="object",Rc=e=>(Ce(e)||me(e))&&me(e.then)&&me(e.catch),Lc=Object.prototype.toString,ks=e=>Lc.call(e),Fu=e=>ks(e).slice(8,-1),Dc=e=>ks(e)==="[object Object]",ko=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,is=To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Qr=e=>{const t=Object.create(null);return(a=>t[a]||(t[a]=e(a)))},zu=/-\w/g,mt=Qr(e=>e.replace(zu,t=>t.slice(1).toUpperCase())),Hu=/\B([A-Z])/g,ha=Qr(e=>e.replace(Hu,"-$1").toLowerCase()),Zr=Qr(e=>e.charAt(0).toUpperCase()+e.slice(1)),bn=Qr(e=>e?`on${Zr(e)}`:""),ua=(e,t)=>!Object.is(e,t),Sr=(e,...t)=>{for(let a=0;a<e.length;a++)e[a](...t)},Nc=(e,t,a,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:a})},ju=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Uu=e=>{const t=Re(e)?Number(e):NaN;return isNaN(t)?e:t};let ti;const en=()=>ti||(ti=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ao(e){if(fe(e)){const t={};for(let a=0;a<e.length;a++){const s=e[a],r=Re(s)?Ku(s):Ao(s);if(r)for(const n in r)t[n]=r[n]}return t}else if(Re(e)||Ce(e))return e}const qu=/;(?![^(]*\))/g,Gu=/:([^]+)/,Vu=/\/\*[^]*?\*\//g;function Ku(e){const t={};return e.replace(Vu,"").split(qu).forEach(a=>{if(a){const s=a.split(Gu);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Xt(e){let t="";if(Re(e))t=e;else if(fe(e))for(let a=0;a<e.length;a++){const s=Xt(e[a]);s&&(t+=s+" ")}else if(Ce(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}const Yu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Wu=To(Yu);function Ic(e){return!!e||e===""}function Ju(e,t){if(e.length!==t.length)return!1;let a=!0;for(let s=0;a&&s<e.length;s++)a=tn(e[s],t[s]);return a}function tn(e,t){if(e===t)return!0;let a=ei(e),s=ei(t);if(a||s)return a&&s?e.getTime()===t.getTime():!1;if(a=Nt(e),s=Nt(t),a||s)return e===t;if(a=fe(e),s=fe(t),a||s)return a&&s?Ju(e,t):!1;if(a=Ce(e),s=Ce(t),a||s){if(!a||!s)return!1;const r=Object.keys(e).length,n=Object.keys(t).length;if(r!==n)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(i&&!l||!i&&l||!tn(e[o],t[o]))return!1}}return String(e)===String(t)}function Bc(e,t){return e.findIndex(a=>tn(a,t))}const Fc=e=>!!(e&&e.__v_isRef===!0),zc=e=>Re(e)?e:e==null?"":fe(e)||Ce(e)&&(e.toString===Lc||!me(e.toString))?Fc(e)?zc(e.value):JSON.stringify(e,Hc,2):String(e),Hc=(e,t)=>Fc(t)?Hc(e,t.value):Ua(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[s,r],n)=>(a[_n(s,n)+" =>"]=r,a),{})}:Xr(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>_n(a))}:Nt(t)?_n(t):Ce(t)&&!fe(t)&&!Dc(t)?String(t):t,_n=(e,t="")=>{var a;return Nt(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};let Ue;class jc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ue,!t&&Ue&&(this.index=(Ue.scopes||(Ue.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].pause();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].resume();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].resume()}}run(t){if(this._active){const a=Ue;try{return Ue=this,t()}finally{Ue=a}}}on(){++this._on===1&&(this.prevScope=Ue,Ue=this)}off(){this._on>0&&--this._on===0&&(Ue=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(this.effects.length=0,a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Uc(e){return new jc(e)}function qc(){return Ue}function Xu(e,t=!1){Ue&&Ue.cleanups.push(e)}let Oe;const vn=new WeakSet;class Gc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ue&&Ue.active&&Ue.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,vn.has(this)&&(vn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Kc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ai(this),Yc(this);const t=Oe,a=_t;Oe=this,_t=!0;try{return this.fn()}finally{Wc(this),Oe=t,_t=a,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Oo(t);this.deps=this.depsTail=void 0,ai(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?vn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){eo(this)&&this.run()}get dirty(){return eo(this)}}let Vc=0,ls,cs;function Kc(e,t=!1){if(e.flags|=8,t){e.next=cs,cs=e;return}e.next=ls,ls=e}function Po(){Vc++}function Co(){if(--Vc>0)return;if(cs){let t=cs;for(cs=void 0;t;){const a=t.next;t.next=void 0,t.flags&=-9,t=a}}let e;for(;ls;){let t=ls;for(ls=void 0;t;){const a=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=a}}if(e)throw e}function Yc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Wc(e){let t,a=e.depsTail,s=a;for(;s;){const r=s.prevDep;s.version===-1?(s===a&&(a=r),Oo(s),Qu(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=a}function eo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Jc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Jc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===bs)||(e.globalVersion=bs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!eo(e))))return;e.flags|=2;const t=e.dep,a=Oe,s=_t;Oe=e,_t=!0;try{Yc(e);const r=e.fn(e._value);(t.version===0||ua(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{Oe=a,_t=s,Wc(e),e.flags&=-3}}function Oo(e,t=!1){const{dep:a,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),a.subs===e&&(a.subs=s,!s&&a.computed)){a.computed.flags&=-5;for(let n=a.computed.deps;n;n=n.nextDep)Oo(n,!0)}!t&&!--a.sc&&a.map&&a.map.delete(a.key)}function Qu(e){const{prevDep:t,nextDep:a}=e;t&&(t.nextDep=a,e.prevDep=void 0),a&&(a.prevDep=t,e.nextDep=void 0)}let _t=!0;const Xc=[];function Qt(){Xc.push(_t),_t=!1}function Zt(){const e=Xc.pop();_t=e===void 0?!0:e}function ai(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const a=Oe;Oe=void 0;try{t()}finally{Oe=a}}}let bs=0;class Zu{constructor(t,a){this.sub=t,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $o{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Oe||!_t||Oe===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==Oe)a=this.activeLink=new Zu(Oe,this),Oe.deps?(a.prevDep=Oe.depsTail,Oe.depsTail.nextDep=a,Oe.depsTail=a):Oe.deps=Oe.depsTail=a,Qc(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const s=a.nextDep;s.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=s),a.prevDep=Oe.depsTail,a.nextDep=void 0,Oe.depsTail.nextDep=a,Oe.depsTail=a,Oe.deps===a&&(Oe.deps=s)}return a}trigger(t){this.version++,bs++,this.notify(t)}notify(t){Po();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Co()}}}function Qc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Qc(s)}const a=e.dep.subs;a!==e&&(e.prevSub=a,a&&(a.nextSub=e)),e.dep.subs=e}}const Or=new WeakMap,Oa=Symbol(""),to=Symbol(""),_s=Symbol("");function qe(e,t,a){if(_t&&Oe){let s=Or.get(e);s||Or.set(e,s=new Map);let r=s.get(a);r||(s.set(a,r=new $o),r.map=s,r.key=a),r.track()}}function Yt(e,t,a,s,r,n){const o=Or.get(e);if(!o){bs++;return}const i=l=>{l&&l.trigger()};if(Po(),t==="clear")o.forEach(i);else{const l=fe(e),c=l&&ko(a);if(l&&a==="length"){const d=Number(s);o.forEach((u,p)=>{(p==="length"||p===_s||!Nt(p)&&p>=d)&&i(u)})}else switch((a!==void 0||o.has(void 0))&&i(o.get(a)),c&&i(o.get(_s)),t){case"add":l?c&&i(o.get("length")):(i(o.get(Oa)),Ua(e)&&i(o.get(to)));break;case"delete":l||(i(o.get(Oa)),Ua(e)&&i(o.get(to)));break;case"set":Ua(e)&&i(o.get(Oa));break}}Co()}function ep(e,t){const a=Or.get(e);return a&&a.get(t)}function La(e){const t=ye(e);return t===e?t:(qe(t,"iterate",_s),vt(e)?t:t.map(Qe))}function Mo(e){return qe(e=ye(e),"iterate",_s),e}const tp={__proto__:null,[Symbol.iterator](){return yn(this,Symbol.iterator,Qe)},concat(...e){return La(this).concat(...e.map(t=>fe(t)?La(t):t))},entries(){return yn(this,"entries",e=>(e[1]=Qe(e[1]),e))},every(e,t){return It(this,"every",e,t,void 0,arguments)},filter(e,t){return It(this,"filter",e,t,a=>a.map(Qe),arguments)},find(e,t){return It(this,"find",e,t,Qe,arguments)},findIndex(e,t){return It(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return It(this,"findLast",e,t,Qe,arguments)},findLastIndex(e,t){return It(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return It(this,"forEach",e,t,void 0,arguments)},includes(...e){return wn(this,"includes",e)},indexOf(...e){return wn(this,"indexOf",e)},join(e){return La(this).join(e)},lastIndexOf(...e){return wn(this,"lastIndexOf",e)},map(e,t){return It(this,"map",e,t,void 0,arguments)},pop(){return Ja(this,"pop")},push(...e){return Ja(this,"push",e)},reduce(e,...t){return si(this,"reduce",e,t)},reduceRight(e,...t){return si(this,"reduceRight",e,t)},shift(){return Ja(this,"shift")},some(e,t){return It(this,"some",e,t,void 0,arguments)},splice(...e){return Ja(this,"splice",e)},toReversed(){return La(this).toReversed()},toSorted(e){return La(this).toSorted(e)},toSpliced(...e){return La(this).toSpliced(...e)},unshift(...e){return Ja(this,"unshift",e)},values(){return yn(this,"values",Qe)}};function yn(e,t,a){const s=Mo(e),r=s[t]();return s!==e&&!vt(e)&&(r._next=r.next,r.next=()=>{const n=r._next();return n.done||(n.value=a(n.value)),n}),r}const ap=Array.prototype;function It(e,t,a,s,r,n){const o=Mo(e),i=o!==e&&!vt(e),l=o[t];if(l!==ap[t]){const u=l.apply(e,n);return i?Qe(u):u}let c=a;o!==e&&(i?c=function(u,p){return a.call(this,Qe(u),p,e)}:a.length>2&&(c=function(u,p){return a.call(this,u,p,e)}));const d=l.call(o,c,s);return i&&r?r(d):d}function si(e,t,a,s){const r=Mo(e);let n=a;return r!==e&&(vt(e)?a.length>3&&(n=function(o,i,l){return a.call(this,o,i,l,e)}):n=function(o,i,l){return a.call(this,o,Qe(i),l,e)}),r[t](n,...s)}function wn(e,t,a){const s=ye(e);qe(s,"iterate",_s);const r=s[t](...a);return(r===-1||r===!1)&&Do(a[0])?(a[0]=ye(a[0]),s[t](...a)):r}function Ja(e,t,a=[]){Qt(),Po();const s=ye(e)[t].apply(e,a);return Co(),Zt(),s}const sp=To("__proto__,__v_isRef,__isVue"),Zc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Nt));function rp(e){Nt(e)||(e=String(e));const t=ye(this);return qe(t,"has",e),t.hasOwnProperty(e)}class ed{constructor(t=!1,a=!1){this._isReadonly=t,this._isShallow=a}get(t,a,s){if(a==="__v_skip")return t.__v_skip;const r=this._isReadonly,n=this._isShallow;if(a==="__v_isReactive")return!r;if(a==="__v_isReadonly")return r;if(a==="__v_isShallow")return n;if(a==="__v_raw")return s===(r?n?hp:rd:n?sd:ad).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=fe(t);if(!r){let l;if(o&&(l=tp[a]))return l;if(a==="hasOwnProperty")return rp}const i=Reflect.get(t,a,Me(t)?t:s);if((Nt(a)?Zc.has(a):sp(a))||(r||qe(t,"get",a),n))return i;if(Me(i)){const l=o&&ko(a)?i:i.value;return r&&Ce(l)?so(l):l}return Ce(i)?r?so(i):Jt(i):i}}class td extends ed{constructor(t=!1){super(!1,t)}set(t,a,s,r){let n=t[a];if(!this._isShallow){const l=Ra(n);if(!vt(s)&&!Ra(s)&&(n=ye(n),s=ye(s)),!fe(t)&&Me(n)&&!Me(s))return l||(n.value=s),!0}const o=fe(t)&&ko(a)?Number(a)<t.length:Te(t,a),i=Reflect.set(t,a,s,Me(t)?t:r);return t===ye(r)&&(o?ua(s,n)&&Yt(t,"set",a,s):Yt(t,"add",a,s)),i}deleteProperty(t,a){const s=Te(t,a);t[a];const r=Reflect.deleteProperty(t,a);return r&&s&&Yt(t,"delete",a,void 0),r}has(t,a){const s=Reflect.has(t,a);return(!Nt(a)||!Zc.has(a))&&qe(t,"has",a),s}ownKeys(t){return qe(t,"iterate",fe(t)?"length":Oa),Reflect.ownKeys(t)}}class np extends ed{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const op=new td,ip=new np,lp=new td(!0);const ao=e=>e,Ms=e=>Reflect.getPrototypeOf(e);function cp(e,t,a){return function(...s){const r=this.__v_raw,n=ye(r),o=Ua(n),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...s),d=a?ao:t?ro:Qe;return!t&&qe(n,"iterate",l?to:Oa),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:i?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Rs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function dp(e,t){const a={get(r){const n=this.__v_raw,o=ye(n),i=ye(r);e||(ua(r,i)&&qe(o,"get",r),qe(o,"get",i));const{has:l}=Ms(o),c=t?ao:e?ro:Qe;if(l.call(o,r))return c(n.get(r));if(l.call(o,i))return c(n.get(i));n!==o&&n.get(r)},get size(){const r=this.__v_raw;return!e&&qe(ye(r),"iterate",Oa),r.size},has(r){const n=this.__v_raw,o=ye(n),i=ye(r);return e||(ua(r,i)&&qe(o,"has",r),qe(o,"has",i)),r===i?n.has(r):n.has(r)||n.has(i)},forEach(r,n){const o=this,i=o.__v_raw,l=ye(i),c=t?ao:e?ro:Qe;return!e&&qe(l,"iterate",Oa),i.forEach((d,u)=>r.call(n,c(d),c(u),o))}};return Fe(a,e?{add:Rs("add"),set:Rs("set"),delete:Rs("delete"),clear:Rs("clear")}:{add(r){!t&&!vt(r)&&!Ra(r)&&(r=ye(r));const n=ye(this);return Ms(n).has.call(n,r)||(n.add(r),Yt(n,"add",r,r)),this},set(r,n){!t&&!vt(n)&&!Ra(n)&&(n=ye(n));const o=ye(this),{has:i,get:l}=Ms(o);let c=i.call(o,r);c||(r=ye(r),c=i.call(o,r));const d=l.call(o,r);return o.set(r,n),c?ua(n,d)&&Yt(o,"set",r,n):Yt(o,"add",r,n),this},delete(r){const n=ye(this),{has:o,get:i}=Ms(n);let l=o.call(n,r);l||(r=ye(r),l=o.call(n,r)),i&&i.call(n,r);const c=n.delete(r);return l&&Yt(n,"delete",r,void 0),c},clear(){const r=ye(this),n=r.size!==0,o=r.clear();return n&&Yt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{a[r]=cp(r,e,t)}),a}function Ro(e,t){const a=dp(e,t);return(s,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Te(a,r)&&r in s?a:s,r,n)}const up={get:Ro(!1,!1)},pp={get:Ro(!1,!0)},fp={get:Ro(!0,!1)};const ad=new WeakMap,sd=new WeakMap,rd=new WeakMap,hp=new WeakMap;function mp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gp(e){return e.__v_skip||!Object.isExtensible(e)?0:mp(Fu(e))}function Jt(e){return Ra(e)?e:Lo(e,!1,op,up,ad)}function nd(e){return Lo(e,!1,lp,pp,sd)}function so(e){return Lo(e,!0,ip,fp,rd)}function Lo(e,t,a,s,r){if(!Ce(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=gp(e);if(n===0)return e;const o=r.get(e);if(o)return o;const i=new Proxy(e,n===2?s:a);return r.set(e,i),i}function $a(e){return Ra(e)?$a(e.__v_raw):!!(e&&e.__v_isReactive)}function Ra(e){return!!(e&&e.__v_isReadonly)}function vt(e){return!!(e&&e.__v_isShallow)}function Do(e){return e?!!e.__v_raw:!1}function ye(e){const t=e&&e.__v_raw;return t?ye(t):e}function No(e){return!Te(e,"__v_skip")&&Object.isExtensible(e)&&Nc(e,"__v_skip",!0),e}const Qe=e=>Ce(e)?Jt(e):e,ro=e=>Ce(e)?so(e):e;function Me(e){return e?e.__v_isRef===!0:!1}function Ke(e){return od(e,!1)}function bp(e){return od(e,!0)}function od(e,t){return Me(e)?e:new _p(e,t)}class _p{constructor(t,a){this.dep=new $o,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?t:ye(t),this._value=a?t:Qe(t),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(t){const a=this._rawValue,s=this.__v_isShallow||vt(t)||Ra(t);t=s?t:ye(t),ua(t,a)&&(this._rawValue=t,this._value=s?t:Qe(t),this.dep.trigger())}}function ft(e){return Me(e)?e.value:e}const vp={get:(e,t,a)=>t==="__v_raw"?e:ft(Reflect.get(e,t,a)),set:(e,t,a,s)=>{const r=e[t];return Me(r)&&!Me(a)?(r.value=a,!0):Reflect.set(e,t,a,s)}};function id(e){return $a(e)?e:new Proxy(e,vp)}function yp(e){const t=fe(e)?new Array(e.length):{};for(const a in e)t[a]=xp(e,a);return t}class wp{constructor(t,a,s){this._object=t,this._key=a,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return ep(ye(this._object),this._key)}}function xp(e,t,a){const s=e[t];return Me(s)?s:new wp(e,t,a)}class Tp{constructor(t,a,s){this.fn=t,this.setter=a,this._value=void 0,this.dep=new $o(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=bs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Kc(this,!0),!0}get value(){const t=this.dep.track();return Jc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function Sp(e,t,a=!1){let s,r;return me(e)?s=e:(s=e.get,r=e.set),new Tp(s,r,a)}const Ls={},$r=new WeakMap;let ka;function Ep(e,t=!1,a=ka){if(a){let s=$r.get(a);s||$r.set(a,s=[]),s.push(e)}}function kp(e,t,a=Pe){const{immediate:s,deep:r,once:n,scheduler:o,augmentJob:i,call:l}=a,c=w=>r?w:vt(w)||r===!1||r===0?Wt(w,1):Wt(w);let d,u,p,f,g=!1,_=!1;if(Me(e)?(u=()=>e.value,g=vt(e)):$a(e)?(u=()=>c(e),g=!0):fe(e)?(_=!0,g=e.some(w=>$a(w)||vt(w)),u=()=>e.map(w=>{if(Me(w))return w.value;if($a(w))return c(w);if(me(w))return l?l(w,2):w()})):me(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){Qt();try{p()}finally{Zt()}}const w=ka;ka=d;try{return l?l(e,3,[f]):e(f)}finally{ka=w}}:u=Lt,t&&r){const w=u,y=r===!0?1/0:r;u=()=>Wt(w(),y)}const v=qc(),m=()=>{d.stop(),v&&v.active&&Eo(v.effects,d)};if(n&&t){const w=t;t=(...y)=>{w(...y),m()}}let h=_?new Array(e.length).fill(Ls):Ls;const b=w=>{if(!(!(d.flags&1)||!d.dirty&&!w))if(t){const y=d.run();if(r||g||(_?y.some((T,A)=>ua(T,h[A])):ua(y,h))){p&&p();const T=ka;ka=d;try{const A=[y,h===Ls?void 0:_&&h[0]===Ls?[]:h,f];h=y,l?l(t,3,A):t(...A)}finally{ka=T}}}else d.run()};return i&&i(b),d=new Gc(u),d.scheduler=o?()=>o(b,!1):b,f=w=>Ep(w,!1,d),p=d.onStop=()=>{const w=$r.get(d);if(w){if(l)l(w,4);else for(const y of w)y();$r.delete(d)}},t?s?b(!0):h=d.run():o?o(b.bind(null,!0),!0):d.run(),m.pause=d.pause.bind(d),m.resume=d.resume.bind(d),m.stop=m,m}function Wt(e,t=1/0,a){if(t<=0||!Ce(e)||e.__v_skip||(a=a||new Map,(a.get(e)||0)>=t))return e;if(a.set(e,t),t--,Me(e))Wt(e.value,t,a);else if(fe(e))for(let s=0;s<e.length;s++)Wt(e[s],t,a);else if(Xr(e)||Ua(e))e.forEach(s=>{Wt(s,t,a)});else if(Dc(e)){for(const s in e)Wt(e[s],t,a);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Wt(e[s],t,a)}return e}function As(e,t,a,s){try{return s?e(...s):e()}catch(r){an(r,t,a)}}function yt(e,t,a,s){if(me(e)){const r=As(e,t,a,s);return r&&Rc(r)&&r.catch(n=>{an(n,t,a)}),r}if(fe(e)){const r=[];for(let n=0;n<e.length;n++)r.push(yt(e[n],t,a,s));return r}}function an(e,t,a,s=!0){const r=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Pe;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}i=i.parent}if(n){Qt(),As(n,null,10,[e,l,c]),Zt();return}}Ap(e,a,r,s,o)}function Ap(e,t,a,s=!0,r=!1){if(r)throw e;console.error(e)}const Ze=[];let Pt=-1;const qa=[];let oa=null,za=0;const ld=Promise.resolve();let Mr=null;function Io(e){const t=Mr||ld;return e?t.then(this?e.bind(this):e):t}function Pp(e){let t=Pt+1,a=Ze.length;for(;t<a;){const s=t+a>>>1,r=Ze[s],n=vs(r);n<e||n===e&&r.flags&2?t=s+1:a=s}return t}function Bo(e){if(!(e.flags&1)){const t=vs(e),a=Ze[Ze.length-1];!a||!(e.flags&2)&&t>=vs(a)?Ze.push(e):Ze.splice(Pp(t),0,e),e.flags|=1,cd()}}function cd(){Mr||(Mr=ld.then(ud))}function Cp(e){fe(e)?qa.push(...e):oa&&e.id===-1?oa.splice(za+1,0,e):e.flags&1||(qa.push(e),e.flags|=1),cd()}function ri(e,t,a=Pt+1){for(;a<Ze.length;a++){const s=Ze[a];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ze.splice(a,1),a--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function dd(e){if(qa.length){const t=[...new Set(qa)].sort((a,s)=>vs(a)-vs(s));if(qa.length=0,oa){oa.push(...t);return}for(oa=t,za=0;za<oa.length;za++){const a=oa[za];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}oa=null,za=0}}const vs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ud(e){try{for(Pt=0;Pt<Ze.length;Pt++){const t=Ze[Pt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),As(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Pt<Ze.length;Pt++){const t=Ze[Pt];t&&(t.flags&=-2)}Pt=-1,Ze.length=0,dd(),Mr=null,(Ze.length||qa.length)&&ud()}}let lt=null,pd=null;function Rr(e){const t=lt;return lt=e,pd=e&&e.type.__scopeId||null,t}function no(e,t=lt,a){if(!t||e._n)return e;const s=(...r)=>{s._d&&Nr(-1);const n=Rr(t);let o;try{o=e(...r)}finally{Rr(n),s._d&&Nr(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function rs(e,t){if(lt===null)return e;const a=ln(lt),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[n,o,i,l=Pe]=t[r];n&&(me(n)&&(n={mounted:n,updated:n}),n.deep&&Wt(o),s.push({dir:n,instance:a,value:o,oldValue:void 0,arg:i,modifiers:l}))}return e}function va(e,t,a,s){const r=e.dirs,n=t&&t.dirs;for(let o=0;o<r.length;o++){const i=r[o];n&&(i.oldValue=n[o].value);let l=i.dir[s];l&&(Qt(),yt(l,a,8,[e.el,i,e,t]),Zt())}}const Op=Symbol("_vte"),fd=e=>e.__isTeleport,Vt=Symbol("_leaveCb"),Ds=Symbol("_enterCb");function $p(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xt(()=>{e.isMounted=!0}),xd(()=>{e.isUnmounting=!0}),e}const dt=[Function,Array],hd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:dt,onEnter:dt,onAfterEnter:dt,onEnterCancelled:dt,onBeforeLeave:dt,onLeave:dt,onAfterLeave:dt,onLeaveCancelled:dt,onBeforeAppear:dt,onAppear:dt,onAfterAppear:dt,onAppearCancelled:dt},md=e=>{const t=e.subTree;return t.component?md(t.component):t},Mp={name:"BaseTransition",props:hd,setup(e,{slots:t}){const a=jo(),s=$p();return()=>{const r=t.default&&_d(t.default(),!0);if(!r||!r.length)return;const n=gd(r),o=ye(e),{mode:i}=o;if(s.isLeaving)return xn(n);const l=ni(n);if(!l)return xn(n);let c=oo(l,o,s,a,u=>c=u);l.type!==et&&ys(l,c);let d=a.subTree&&ni(a.subTree);if(d&&d.type!==et&&!Aa(d,l)&&md(a).type!==et){let u=oo(d,o,s,a);if(ys(d,u),i==="out-in"&&l.type!==et)return s.isLeaving=!0,u.afterLeave=()=>{s.isLeaving=!1,a.job.flags&8||a.update(),delete u.afterLeave,d=void 0},xn(n);i==="in-out"&&l.type!==et?u.delayLeave=(p,f,g)=>{const _=bd(s,d);_[String(d.key)]=d,p[Vt]=()=>{f(),p[Vt]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return n}}};function gd(e){let t=e[0];if(e.length>1){for(const a of e)if(a.type!==et){t=a;break}}return t}const Rp=Mp;function bd(e,t){const{leavingVNodes:a}=e;let s=a.get(t.type);return s||(s=Object.create(null),a.set(t.type,s)),s}function oo(e,t,a,s,r){const{appear:n,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:v,onAppear:m,onAfterAppear:h,onAppearCancelled:b}=t,w=String(e.key),y=bd(a,e),T=(x,E)=>{x&&yt(x,s,9,E)},A=(x,E)=>{const $=E[1];T(x,E),fe(x)?x.every(C=>C.length<=1)&&$():x.length<=1&&$()},S={mode:o,persisted:i,beforeEnter(x){let E=l;if(!a.isMounted)if(n)E=v||l;else return;x[Vt]&&x[Vt](!0);const $=y[w];$&&Aa(e,$)&&$.el[Vt]&&$.el[Vt](),T(E,[x])},enter(x){let E=c,$=d,C=u;if(!a.isMounted)if(n)E=m||c,$=h||d,C=b||u;else return;let R=!1;const U=x[Ds]=W=>{R||(R=!0,W?T(C,[x]):T($,[x]),S.delayedLeave&&S.delayedLeave(),x[Ds]=void 0)};E?A(E,[x,U]):U()},leave(x,E){const $=String(e.key);if(x[Ds]&&x[Ds](!0),a.isUnmounting)return E();T(p,[x]);let C=!1;const R=x[Vt]=U=>{C||(C=!0,E(),U?T(_,[x]):T(g,[x]),x[Vt]=void 0,y[$]===e&&delete y[$])};y[$]=e,f?A(f,[x,R]):R()},clone(x){const E=oo(x,t,a,s,r);return r&&r(E),E}};return S}function xn(e){if(sn(e))return e=pa(e),e.children=null,e}function ni(e){if(!sn(e))return fd(e.type)&&e.children?gd(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:a}=e;if(a){if(t&16)return a[0];if(t&32&&me(a.default))return a.default()}}function ys(e,t){e.shapeFlag&6&&e.component?(e.transition=t,ys(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _d(e,t=!1,a){let s=[],r=0;for(let n=0;n<e.length;n++){let o=e[n];const i=a==null?o.key:String(a)+String(o.key!=null?o.key:n);o.type===Ot?(o.patchFlag&128&&r++,s=s.concat(_d(o.children,t,i))):(t||o.type!==et)&&s.push(i!=null?pa(o,{key:i}):o)}if(r>1)for(let n=0;n<s.length;n++)s[n].patchFlag=-2;return s}function vd(e,t){return me(e)?Fe({name:e.name},t,{setup:e}):e}function yd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Lr=new WeakMap;function ds(e,t,a,s,r=!1){if(fe(e)){e.forEach((g,_)=>ds(g,t&&(fe(t)?t[_]:t),a,s,r));return}if(us(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ds(e,t,a,s.component.subTree);return}const n=s.shapeFlag&4?ln(s.component):s.el,o=r?null:n,{i,r:l}=e,c=t&&t.r,d=i.refs===Pe?i.refs={}:i.refs,u=i.setupState,p=ye(u),f=u===Pe?Mc:g=>Te(p,g);if(c!=null&&c!==l){if(oi(t),Re(c))d[c]=null,f(c)&&(u[c]=null);else if(Me(c)){c.value=null;const g=t;g.k&&(d[g.k]=null)}}if(me(l))As(l,i,12,[o,d]);else{const g=Re(l),_=Me(l);if(g||_){const v=()=>{if(e.f){const m=g?f(l)?u[l]:d[l]:l.value;if(r)fe(m)&&Eo(m,n);else if(fe(m))m.includes(n)||m.push(n);else if(g)d[l]=[n],f(l)&&(u[l]=d[l]);else{const h=[n];l.value=h,e.k&&(d[e.k]=h)}}else g?(d[l]=o,f(l)&&(u[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const m=()=>{v(),Lr.delete(e)};m.id=-1,Lr.set(e,m),nt(m,a)}else oi(e),v()}}}function oi(e){const t=Lr.get(e);t&&(t.flags|=8,Lr.delete(e))}en().requestIdleCallback;en().cancelIdleCallback;const us=e=>!!e.type.__asyncLoader,sn=e=>e.type.__isKeepAlive;function Lp(e,t){wd(e,"a",t)}function Dp(e,t){wd(e,"da",t)}function wd(e,t,a=Ge){const s=e.__wdc||(e.__wdc=()=>{let r=a;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(rn(t,s,a),a){let r=a.parent;for(;r&&r.parent;)sn(r.parent.vnode)&&Np(s,t,a,r),r=r.parent}}function Np(e,t,a,s){const r=rn(t,e,s,!0);Ps(()=>{Eo(s[t],r)},a)}function rn(e,t,a=Ge,s=!1){if(a){const r=a[e]||(a[e]=[]),n=t.__weh||(t.__weh=(...o)=>{Qt();const i=Cs(a),l=yt(t,a,e,o);return i(),Zt(),l});return s?r.unshift(n):r.push(n),n}}const ta=e=>(t,a=Ge)=>{(!xs||e==="sp")&&rn(e,(...s)=>t(...s),a)},Ip=ta("bm"),xt=ta("m"),Bp=ta("bu"),Fp=ta("u"),xd=ta("bum"),Ps=ta("um"),zp=ta("sp"),Hp=ta("rtg"),jp=ta("rtc");function Up(e,t=Ge){rn("ec",e,t)}const qp="components",Td=Symbol.for("v-ndc");function Gp(e){return Re(e)?Vp(qp,e,!1)||e:e||Td}function Vp(e,t,a=!0,s=!1){const r=lt||Ge;if(r){const n=r.type;{const i=Df(n,!1);if(i&&(i===t||i===mt(t)||i===Zr(mt(t))))return n}const o=ii(r[e]||n[e],t)||ii(r.appContext[e],t);return!o&&s?n:o}}function ii(e,t){return e&&(e[t]||e[mt(t)]||e[Zr(mt(t))])}const io=e=>e?Ud(e)?ln(e):io(e.parent):null,ps=Fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>io(e.parent),$root:e=>io(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ed(e),$forceUpdate:e=>e.f||(e.f=()=>{Bo(e.update)}),$nextTick:e=>e.n||(e.n=Io.bind(e.proxy)),$watch:e=>mf.bind(e)}),Tn=(e,t)=>e!==Pe&&!e.__isScriptSetup&&Te(e,t),Kp={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:a,setupState:s,data:r,props:n,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return r[t];case 4:return a[t];case 3:return n[t]}else{if(Tn(s,t))return o[t]=1,s[t];if(r!==Pe&&Te(r,t))return o[t]=2,r[t];if((c=e.propsOptions[0])&&Te(c,t))return o[t]=3,n[t];if(a!==Pe&&Te(a,t))return o[t]=4,a[t];lo&&(o[t]=0)}}const d=ps[t];let u,p;if(d)return t==="$attrs"&&qe(e.attrs,"get",""),d(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(a!==Pe&&Te(a,t))return o[t]=4,a[t];if(p=l.config.globalProperties,Te(p,t))return p[t]},set({_:e},t,a){const{data:s,setupState:r,ctx:n}=e;return Tn(r,t)?(r[t]=a,!0):s!==Pe&&Te(s,t)?(s[t]=a,!0):Te(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:s,appContext:r,propsOptions:n,type:o}},i){let l,c;return!!(a[i]||e!==Pe&&i[0]!=="$"&&Te(e,i)||Tn(t,i)||(l=n[0])&&Te(l,i)||Te(s,i)||Te(ps,i)||Te(r.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:Te(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};function li(e){return fe(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}let lo=!0;function Yp(e){const t=Ed(e),a=e.proxy,s=e.ctx;lo=!1,t.beforeCreate&&ci(t.beforeCreate,e,"bc");const{data:r,computed:n,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:g,activated:_,deactivated:v,beforeDestroy:m,beforeUnmount:h,destroyed:b,unmounted:w,render:y,renderTracked:T,renderTriggered:A,errorCaptured:S,serverPrefetch:x,expose:E,inheritAttrs:$,components:C,directives:R,filters:U}=t;if(c&&Wp(c,s,null),o)for(const Y in o){const V=o[Y];me(V)&&(s[Y]=V.bind(a))}if(r){const Y=r.call(a,a);Ce(Y)&&(e.data=Jt(Y))}if(lo=!0,n)for(const Y in n){const V=n[Y],X=me(V)?V.bind(a,a):me(V.get)?V.get.bind(a,a):Lt,H=!me(V)&&me(V.set)?V.set.bind(a):Lt,D=it({get:X,set:H});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>D.value,set:j=>D.value=j})}if(i)for(const Y in i)Sd(i[Y],s,a,Y);if(l){const Y=me(l)?l.call(a):l;Reflect.ownKeys(Y).forEach(V=>{Er(V,Y[V])})}d&&ci(d,e,"c");function ae(Y,V){fe(V)?V.forEach(X=>Y(X.bind(a))):V&&Y(V.bind(a))}if(ae(Ip,u),ae(xt,p),ae(Bp,f),ae(Fp,g),ae(Lp,_),ae(Dp,v),ae(Up,S),ae(jp,T),ae(Hp,A),ae(xd,h),ae(Ps,w),ae(zp,x),fe(E))if(E.length){const Y=e.exposed||(e.exposed={});E.forEach(V=>{Object.defineProperty(Y,V,{get:()=>a[V],set:X=>a[V]=X,enumerable:!0})})}else e.exposed||(e.exposed={});y&&e.render===Lt&&(e.render=y),$!=null&&(e.inheritAttrs=$),C&&(e.components=C),R&&(e.directives=R),x&&yd(e)}function Wp(e,t,a=Lt){fe(e)&&(e=co(e));for(const s in e){const r=e[s];let n;Ce(r)?"default"in r?n=ht(r.from||s,r.default,!0):n=ht(r.from||s):n=ht(r),Me(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):t[s]=n}}function ci(e,t,a){yt(fe(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,a)}function Sd(e,t,a,s){let r=s.includes(".")?Bd(a,s):()=>a[s];if(Re(e)){const n=t[e];me(n)&&fs(r,n)}else if(me(e))fs(r,e.bind(a));else if(Ce(e))if(fe(e))e.forEach(n=>Sd(n,t,a,s));else{const n=me(e.handler)?e.handler.bind(a):t[e.handler];me(n)&&fs(r,n,e)}}function Ed(e){const t=e.type,{mixins:a,extends:s}=t,{mixins:r,optionsCache:n,config:{optionMergeStrategies:o}}=e.appContext,i=n.get(t);let l;return i?l=i:!r.length&&!a&&!s?l=t:(l={},r.length&&r.forEach(c=>Dr(l,c,o,!0)),Dr(l,t,o)),Ce(t)&&n.set(t,l),l}function Dr(e,t,a,s=!1){const{mixins:r,extends:n}=t;n&&Dr(e,n,a,!0),r&&r.forEach(o=>Dr(e,o,a,!0));for(const o in t)if(!(s&&o==="expose")){const i=Jp[o]||a&&a[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Jp={data:di,props:ui,emits:ui,methods:ns,computed:ns,beforeCreate:We,created:We,beforeMount:We,mounted:We,beforeUpdate:We,updated:We,beforeDestroy:We,beforeUnmount:We,destroyed:We,unmounted:We,activated:We,deactivated:We,errorCaptured:We,serverPrefetch:We,components:ns,directives:ns,watch:Qp,provide:di,inject:Xp};function di(e,t){return t?e?function(){return Fe(me(e)?e.call(this,this):e,me(t)?t.call(this,this):t)}:t:e}function Xp(e,t){return ns(co(e),co(t))}function co(e){if(fe(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function We(e,t){return e?[...new Set([].concat(e,t))]:t}function ns(e,t){return e?Fe(Object.create(null),e,t):t}function ui(e,t){return e?fe(e)&&fe(t)?[...new Set([...e,...t])]:Fe(Object.create(null),li(e),li(t??{})):t}function Qp(e,t){if(!e)return t;if(!t)return e;const a=Fe(Object.create(null),e);for(const s in t)a[s]=We(e[s],t[s]);return a}function kd(){return{app:null,config:{isNativeTag:Mc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Zp=0;function ef(e,t){return function(s,r=null){me(s)||(s=Fe({},s)),r!=null&&!Ce(r)&&(r=null);const n=kd(),o=new WeakSet,i=[];let l=!1;const c=n.app={_uid:Zp++,_component:s,_props:r,_container:null,_context:n,_instance:null,version:If,get config(){return n.config},set config(d){},use(d,...u){return o.has(d)||(d&&me(d.install)?(o.add(d),d.install(c,...u)):me(d)&&(o.add(d),d(c,...u))),c},mixin(d){return n.mixins.includes(d)||n.mixins.push(d),c},component(d,u){return u?(n.components[d]=u,c):n.components[d]},directive(d,u){return u?(n.directives[d]=u,c):n.directives[d]},mount(d,u,p){if(!l){const f=c._ceVNode||tt(s,r);return f.appContext=n,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),l=!0,c._container=d,d.__vue_app__=c,ln(f.component)}},onUnmount(d){i.push(d)},unmount(){l&&(yt(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return n.provides[d]=u,c},runWithContext(d){const u=Ma;Ma=c;try{return d()}finally{Ma=u}}};return c}}let Ma=null;function Er(e,t){if(Ge){let a=Ge.provides;const s=Ge.parent&&Ge.parent.provides;s===a&&(a=Ge.provides=Object.create(s)),a[e]=t}}function ht(e,t,a=!1){const s=jo();if(s||Ma){let r=Ma?Ma._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return a&&me(t)?t.call(s&&s.proxy):t}}function tf(){return!!(jo()||Ma)}const Ad={},Pd=()=>Object.create(Ad),Cd=e=>Object.getPrototypeOf(e)===Ad;function af(e,t,a,s=!1){const r={},n=Pd();e.propsDefaults=Object.create(null),Od(e,t,r,n);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);a?e.props=s?r:nd(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function sf(e,t,a,s){const{props:r,attrs:n,vnode:{patchFlag:o}}=e,i=ye(r),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(nn(e.emitsOptions,p))continue;const f=t[p];if(l)if(Te(n,p))f!==n[p]&&(n[p]=f,c=!0);else{const g=mt(p);r[g]=uo(l,i,g,f,e,!1)}else f!==n[p]&&(n[p]=f,c=!0)}}}else{Od(e,t,r,n)&&(c=!0);let d;for(const u in i)(!t||!Te(t,u)&&((d=ha(u))===u||!Te(t,d)))&&(l?a&&(a[u]!==void 0||a[d]!==void 0)&&(r[u]=uo(l,i,u,void 0,e,!0)):delete r[u]);if(n!==i)for(const u in n)(!t||!Te(t,u))&&(delete n[u],c=!0)}c&&Yt(e.attrs,"set","")}function Od(e,t,a,s){const[r,n]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(is(l))continue;const c=t[l];let d;r&&Te(r,d=mt(l))?!n||!n.includes(d)?a[d]=c:(i||(i={}))[d]=c:nn(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(n){const l=ye(a),c=i||Pe;for(let d=0;d<n.length;d++){const u=n[d];a[u]=uo(r,l,u,c[u],e,!Te(c,u))}}return o}function uo(e,t,a,s,r,n){const o=e[a];if(o!=null){const i=Te(o,"default");if(i&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&me(l)){const{propsDefaults:c}=r;if(a in c)s=c[a];else{const d=Cs(r);s=c[a]=l.call(null,t),d()}}else s=l;r.ce&&r.ce._setProp(a,s)}o[0]&&(n&&!i?s=!1:o[1]&&(s===""||s===ha(a))&&(s=!0))}return s}const rf=new WeakMap;function $d(e,t,a=!1){const s=a?rf:t.propsCache,r=s.get(e);if(r)return r;const n=e.props,o={},i=[];let l=!1;if(!me(e)){const d=u=>{l=!0;const[p,f]=$d(u,t,!0);Fe(o,p),f&&i.push(...f)};!a&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!n&&!l)return Ce(e)&&s.set(e,ja),ja;if(fe(n))for(let d=0;d<n.length;d++){const u=mt(n[d]);pi(u)&&(o[u]=Pe)}else if(n)for(const d in n){const u=mt(d);if(pi(u)){const p=n[d],f=o[u]=fe(p)||me(p)?{type:p}:Fe({},p),g=f.type;let _=!1,v=!0;if(fe(g))for(let m=0;m<g.length;++m){const h=g[m],b=me(h)&&h.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(v=!1)}else _=me(g)&&g.name==="Boolean";f[0]=_,f[1]=v,(_||Te(f,"default"))&&i.push(u)}}const c=[o,i];return Ce(e)&&s.set(e,c),c}function pi(e){return e[0]!=="$"&&!is(e)}const Fo=e=>e==="_"||e==="_ctx"||e==="$stable",zo=e=>fe(e)?e.map($t):[$t(e)],nf=(e,t,a)=>{if(t._n)return t;const s=no((...r)=>zo(t(...r)),a);return s._c=!1,s},Md=(e,t,a)=>{const s=e._ctx;for(const r in e){if(Fo(r))continue;const n=e[r];if(me(n))t[r]=nf(r,n,s);else if(n!=null){const o=zo(n);t[r]=()=>o}}},Rd=(e,t)=>{const a=zo(t);e.slots.default=()=>a},Ld=(e,t,a)=>{for(const s in t)(a||!Fo(s))&&(e[s]=t[s])},of=(e,t,a)=>{const s=e.slots=Pd();if(e.vnode.shapeFlag&32){const r=t._;r?(Ld(s,t,a),a&&Nc(s,"_",r,!0)):Md(t,s)}else t&&Rd(e,t)},lf=(e,t,a)=>{const{vnode:s,slots:r}=e;let n=!0,o=Pe;if(s.shapeFlag&32){const i=t._;i?a&&i===1?n=!1:Ld(r,t,a):(n=!t.$stable,Md(t,r)),o=t}else t&&(Rd(e,t),o={default:1});if(n)for(const i in r)!Fo(i)&&o[i]==null&&delete r[i]},nt=Tf;function cf(e){return df(e)}function df(e,t){const a=en();a.__VUE__=!0;const{insert:s,remove:r,patchProp:n,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=Lt,insertStaticContent:g}=e,_=(k,O,L,q=null,ee=null,te=null,le=void 0,ne=null,re=!!O.dynamicChildren)=>{if(k===O)return;k&&!Aa(k,O)&&(q=z(k),j(k,ee,te,!0),k=null),O.patchFlag===-2&&(re=!1,O.dynamicChildren=null);const{type:K,ref:oe,shapeFlag:se}=O;switch(K){case on:v(k,O,L,q);break;case et:m(k,O,L,q);break;case kr:k==null&&h(O,L,q,le);break;case Ot:C(k,O,L,q,ee,te,le,ne,re);break;default:se&1?y(k,O,L,q,ee,te,le,ne,re):se&6?R(k,O,L,q,ee,te,le,ne,re):(se&64||se&128)&&K.process(k,O,L,q,ee,te,le,ne,re,Z)}oe!=null&&ee?ds(oe,k&&k.ref,te,O||k,!O):oe==null&&k&&k.ref!=null&&ds(k.ref,null,te,k,!0)},v=(k,O,L,q)=>{if(k==null)s(O.el=i(O.children),L,q);else{const ee=O.el=k.el;O.children!==k.children&&c(ee,O.children)}},m=(k,O,L,q)=>{k==null?s(O.el=l(O.children||""),L,q):O.el=k.el},h=(k,O,L,q)=>{[k.el,k.anchor]=g(k.children,O,L,q,k.el,k.anchor)},b=({el:k,anchor:O},L,q)=>{let ee;for(;k&&k!==O;)ee=p(k),s(k,L,q),k=ee;s(O,L,q)},w=({el:k,anchor:O})=>{let L;for(;k&&k!==O;)L=p(k),r(k),k=L;r(O)},y=(k,O,L,q,ee,te,le,ne,re)=>{if(O.type==="svg"?le="svg":O.type==="math"&&(le="mathml"),k==null)T(O,L,q,ee,te,le,ne,re);else{const K=k.el&&k.el._isVueCE?k.el:null;try{K&&K._beginPatch(),x(k,O,ee,te,le,ne,re)}finally{K&&K._endPatch()}}},T=(k,O,L,q,ee,te,le,ne)=>{let re,K;const{props:oe,shapeFlag:se,transition:de,dirs:ue}=k;if(re=k.el=o(k.type,te,oe&&oe.is,oe),se&8?d(re,k.children):se&16&&S(k.children,re,null,q,ee,Sn(k,te),le,ne),ue&&va(k,null,q,"created"),A(re,k,k.scopeId,le,q),oe){for(const he in oe)he!=="value"&&!is(he)&&n(re,he,null,oe[he],te,q);"value"in oe&&n(re,"value",null,oe.value,te),(K=oe.onVnodeBeforeMount)&&At(K,q,k)}ue&&va(k,null,q,"beforeMount");const pe=uf(ee,de);pe&&de.beforeEnter(re),s(re,O,L),((K=oe&&oe.onVnodeMounted)||pe||ue)&&nt(()=>{K&&At(K,q,k),pe&&de.enter(re),ue&&va(k,null,q,"mounted")},ee)},A=(k,O,L,q,ee)=>{if(L&&f(k,L),q)for(let te=0;te<q.length;te++)f(k,q[te]);if(ee){let te=ee.subTree;if(O===te||zd(te.type)&&(te.ssContent===O||te.ssFallback===O)){const le=ee.vnode;A(k,le,le.scopeId,le.slotScopeIds,ee.parent)}}},S=(k,O,L,q,ee,te,le,ne,re=0)=>{for(let K=re;K<k.length;K++){const oe=k[K]=ne?ia(k[K]):$t(k[K]);_(null,oe,O,L,q,ee,te,le,ne)}},x=(k,O,L,q,ee,te,le)=>{const ne=O.el=k.el;let{patchFlag:re,dynamicChildren:K,dirs:oe}=O;re|=k.patchFlag&16;const se=k.props||Pe,de=O.props||Pe;let ue;if(L&&ya(L,!1),(ue=de.onVnodeBeforeUpdate)&&At(ue,L,O,k),oe&&va(O,k,L,"beforeUpdate"),L&&ya(L,!0),(se.innerHTML&&de.innerHTML==null||se.textContent&&de.textContent==null)&&d(ne,""),K?E(k.dynamicChildren,K,ne,L,q,Sn(O,ee),te):le||V(k,O,ne,null,L,q,Sn(O,ee),te,!1),re>0){if(re&16)$(ne,se,de,L,ee);else if(re&2&&se.class!==de.class&&n(ne,"class",null,de.class,ee),re&4&&n(ne,"style",se.style,de.style,ee),re&8){const pe=O.dynamicProps;for(let he=0;he<pe.length;he++){const be=pe[he],Ne=se[be],Be=de[be];(Be!==Ne||be==="value")&&n(ne,be,Ne,Be,ee,L)}}re&1&&k.children!==O.children&&d(ne,O.children)}else!le&&K==null&&$(ne,se,de,L,ee);((ue=de.onVnodeUpdated)||oe)&&nt(()=>{ue&&At(ue,L,O,k),oe&&va(O,k,L,"updated")},q)},E=(k,O,L,q,ee,te,le)=>{for(let ne=0;ne<O.length;ne++){const re=k[ne],K=O[ne],oe=re.el&&(re.type===Ot||!Aa(re,K)||re.shapeFlag&198)?u(re.el):L;_(re,K,oe,null,q,ee,te,le,!0)}},$=(k,O,L,q,ee)=>{if(O!==L){if(O!==Pe)for(const te in O)!is(te)&&!(te in L)&&n(k,te,O[te],null,ee,q);for(const te in L){if(is(te))continue;const le=L[te],ne=O[te];le!==ne&&te!=="value"&&n(k,te,ne,le,ee,q)}"value"in L&&n(k,"value",O.value,L.value,ee)}},C=(k,O,L,q,ee,te,le,ne,re)=>{const K=O.el=k?k.el:i(""),oe=O.anchor=k?k.anchor:i("");let{patchFlag:se,dynamicChildren:de,slotScopeIds:ue}=O;ue&&(ne=ne?ne.concat(ue):ue),k==null?(s(K,L,q),s(oe,L,q),S(O.children||[],L,oe,ee,te,le,ne,re)):se>0&&se&64&&de&&k.dynamicChildren?(E(k.dynamicChildren,de,L,ee,te,le,ne),(O.key!=null||ee&&O===ee.subTree)&&Dd(k,O,!0)):V(k,O,L,oe,ee,te,le,ne,re)},R=(k,O,L,q,ee,te,le,ne,re)=>{O.slotScopeIds=ne,k==null?O.shapeFlag&512?ee.ctx.activate(O,L,q,le,re):U(O,L,q,ee,te,le,re):W(k,O,re)},U=(k,O,L,q,ee,te,le)=>{const ne=k.component=Of(k,q,ee);if(sn(k)&&(ne.ctx.renderer=Z),$f(ne,!1,le),ne.asyncDep){if(ee&&ee.registerDep(ne,ae,le),!k.el){const re=ne.subTree=tt(et);m(null,re,O,L),k.placeholder=re.el}}else ae(ne,k,O,L,ee,te,le)},W=(k,O,L)=>{const q=O.component=k.component;if(wf(k,O,L))if(q.asyncDep&&!q.asyncResolved){Y(q,O,L);return}else q.next=O,q.update();else O.el=k.el,q.vnode=O},ae=(k,O,L,q,ee,te,le)=>{const ne=()=>{if(k.isMounted){let{next:se,bu:de,u:ue,parent:pe,vnode:he}=k;{const Et=Nd(k);if(Et){se&&(se.el=he.el,Y(k,se,le)),Et.asyncDep.then(()=>{k.isUnmounted||ne()});return}}let be=se,Ne;ya(k,!1),se?(se.el=he.el,Y(k,se,le)):se=he,de&&Sr(de),(Ne=se.props&&se.props.onVnodeBeforeUpdate)&&At(Ne,pe,se,he),ya(k,!0);const Be=hi(k),St=k.subTree;k.subTree=Be,_(St,Be,u(St.el),z(St),k,ee,te),se.el=Be.el,be===null&&xf(k,Be.el),ue&&nt(ue,ee),(Ne=se.props&&se.props.onVnodeUpdated)&&nt(()=>At(Ne,pe,se,he),ee)}else{let se;const{el:de,props:ue}=O,{bm:pe,m:he,parent:be,root:Ne,type:Be}=k,St=us(O);ya(k,!1),pe&&Sr(pe),!St&&(se=ue&&ue.onVnodeBeforeMount)&&At(se,be,O),ya(k,!0);{Ne.ce&&Ne.ce._def.shadowRoot!==!1&&Ne.ce._injectChildStyle(Be);const Et=k.subTree=hi(k);_(null,Et,L,q,k,ee,te),O.el=Et.el}if(he&&nt(he,ee),!St&&(se=ue&&ue.onVnodeMounted)){const Et=O;nt(()=>At(se,be,Et),ee)}(O.shapeFlag&256||be&&us(be.vnode)&&be.vnode.shapeFlag&256)&&k.a&&nt(k.a,ee),k.isMounted=!0,O=L=q=null}};k.scope.on();const re=k.effect=new Gc(ne);k.scope.off();const K=k.update=re.run.bind(re),oe=k.job=re.runIfDirty.bind(re);oe.i=k,oe.id=k.uid,re.scheduler=()=>Bo(oe),ya(k,!0),K()},Y=(k,O,L)=>{O.component=k;const q=k.vnode.props;k.vnode=O,k.next=null,sf(k,O.props,q,L),lf(k,O.children,L),Qt(),ri(k),Zt()},V=(k,O,L,q,ee,te,le,ne,re=!1)=>{const K=k&&k.children,oe=k?k.shapeFlag:0,se=O.children,{patchFlag:de,shapeFlag:ue}=O;if(de>0){if(de&128){H(K,se,L,q,ee,te,le,ne,re);return}else if(de&256){X(K,se,L,q,ee,te,le,ne,re);return}}ue&8?(oe&16&&F(K,ee,te),se!==K&&d(L,se)):oe&16?ue&16?H(K,se,L,q,ee,te,le,ne,re):F(K,ee,te,!0):(oe&8&&d(L,""),ue&16&&S(se,L,q,ee,te,le,ne,re))},X=(k,O,L,q,ee,te,le,ne,re)=>{k=k||ja,O=O||ja;const K=k.length,oe=O.length,se=Math.min(K,oe);let de;for(de=0;de<se;de++){const ue=O[de]=re?ia(O[de]):$t(O[de]);_(k[de],ue,L,null,ee,te,le,ne,re)}K>oe?F(k,ee,te,!0,!1,se):S(O,L,q,ee,te,le,ne,re,se)},H=(k,O,L,q,ee,te,le,ne,re)=>{let K=0;const oe=O.length;let se=k.length-1,de=oe-1;for(;K<=se&&K<=de;){const ue=k[K],pe=O[K]=re?ia(O[K]):$t(O[K]);if(Aa(ue,pe))_(ue,pe,L,null,ee,te,le,ne,re);else break;K++}for(;K<=se&&K<=de;){const ue=k[se],pe=O[de]=re?ia(O[de]):$t(O[de]);if(Aa(ue,pe))_(ue,pe,L,null,ee,te,le,ne,re);else break;se--,de--}if(K>se){if(K<=de){const ue=de+1,pe=ue<oe?O[ue].el:q;for(;K<=de;)_(null,O[K]=re?ia(O[K]):$t(O[K]),L,pe,ee,te,le,ne,re),K++}}else if(K>de)for(;K<=se;)j(k[K],ee,te,!0),K++;else{const ue=K,pe=K,he=new Map;for(K=pe;K<=de;K++){const st=O[K]=re?ia(O[K]):$t(O[K]);st.key!=null&&he.set(st.key,K)}let be,Ne=0;const Be=de-pe+1;let St=!1,Et=0;const Wa=new Array(Be);for(K=0;K<Be;K++)Wa[K]=0;for(K=ue;K<=se;K++){const st=k[K];if(Ne>=Be){j(st,ee,te,!0);continue}let kt;if(st.key!=null)kt=he.get(st.key);else for(be=pe;be<=de;be++)if(Wa[be-pe]===0&&Aa(st,O[be])){kt=be;break}kt===void 0?j(st,ee,te,!0):(Wa[kt-pe]=K+1,kt>=Et?Et=kt:St=!0,_(st,O[kt],L,null,ee,te,le,ne,re),Ne++)}const Xo=St?pf(Wa):ja;for(be=Xo.length-1,K=Be-1;K>=0;K--){const st=pe+K,kt=O[st],Qo=O[st+1],Zo=st+1<oe?Qo.el||Qo.placeholder:q;Wa[K]===0?_(null,kt,L,Zo,ee,te,le,ne,re):St&&(be<0||K!==Xo[be]?D(kt,L,Zo,2):be--)}}},D=(k,O,L,q,ee=null)=>{const{el:te,type:le,transition:ne,children:re,shapeFlag:K}=k;if(K&6){D(k.component.subTree,O,L,q);return}if(K&128){k.suspense.move(O,L,q);return}if(K&64){le.move(k,O,L,Z);return}if(le===Ot){s(te,O,L);for(let se=0;se<re.length;se++)D(re[se],O,L,q);s(k.anchor,O,L);return}if(le===kr){b(k,O,L);return}if(q!==2&&K&1&&ne)if(q===0)ne.beforeEnter(te),s(te,O,L),nt(()=>ne.enter(te),ee);else{const{leave:se,delayLeave:de,afterLeave:ue}=ne,pe=()=>{k.ctx.isUnmounted?r(te):s(te,O,L)},he=()=>{te._isLeaving&&te[Vt](!0),se(te,()=>{pe(),ue&&ue()})};de?de(te,pe,he):he()}else s(te,O,L)},j=(k,O,L,q=!1,ee=!1)=>{const{type:te,props:le,ref:ne,children:re,dynamicChildren:K,shapeFlag:oe,patchFlag:se,dirs:de,cacheIndex:ue}=k;if(se===-2&&(ee=!1),ne!=null&&(Qt(),ds(ne,null,L,k,!0),Zt()),ue!=null&&(O.renderCache[ue]=void 0),oe&256){O.ctx.deactivate(k);return}const pe=oe&1&&de,he=!us(k);let be;if(he&&(be=le&&le.onVnodeBeforeUnmount)&&At(be,O,k),oe&6)M(k.component,L,q);else{if(oe&128){k.suspense.unmount(L,q);return}pe&&va(k,null,O,"beforeUnmount"),oe&64?k.type.remove(k,O,L,Z,q):K&&!K.hasOnce&&(te!==Ot||se>0&&se&64)?F(K,O,L,!1,!0):(te===Ot&&se&384||!ee&&oe&16)&&F(re,O,L),q&&B(k)}(he&&(be=le&&le.onVnodeUnmounted)||pe)&&nt(()=>{be&&At(be,O,k),pe&&va(k,null,O,"unmounted")},L)},B=k=>{const{type:O,el:L,anchor:q,transition:ee}=k;if(O===Ot){P(L,q);return}if(O===kr){w(k);return}const te=()=>{r(L),ee&&!ee.persisted&&ee.afterLeave&&ee.afterLeave()};if(k.shapeFlag&1&&ee&&!ee.persisted){const{leave:le,delayLeave:ne}=ee,re=()=>le(L,te);ne?ne(k.el,te,re):re()}else te()},P=(k,O)=>{let L;for(;k!==O;)L=p(k),r(k),k=L;r(O)},M=(k,O,L)=>{const{bum:q,scope:ee,job:te,subTree:le,um:ne,m:re,a:K}=k;fi(re),fi(K),q&&Sr(q),ee.stop(),te&&(te.flags|=8,j(le,k,O,L)),ne&&nt(ne,O),nt(()=>{k.isUnmounted=!0},O)},F=(k,O,L,q=!1,ee=!1,te=0)=>{for(let le=te;le<k.length;le++)j(k[le],O,L,q,ee)},z=k=>{if(k.shapeFlag&6)return z(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const O=p(k.anchor||k.el),L=O&&O[Op];return L?p(L):O};let I=!1;const J=(k,O,L)=>{k==null?O._vnode&&j(O._vnode,null,null,!0):_(O._vnode||null,k,O,null,null,null,L),O._vnode=k,I||(I=!0,ri(),dd(),I=!1)},Z={p:_,um:j,m:D,r:B,mt:U,mc:S,pc:V,pbc:E,n:z,o:e};return{render:J,hydrate:void 0,createApp:ef(J)}}function Sn({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function ya({effect:e,job:t},a){a?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function uf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Dd(e,t,a=!1){const s=e.children,r=t.children;if(fe(s)&&fe(r))for(let n=0;n<s.length;n++){const o=s[n];let i=r[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[n]=ia(r[n]),i.el=o.el),!a&&i.patchFlag!==-2&&Dd(o,i)),i.type===on&&i.patchFlag!==-1&&(i.el=o.el),i.type===et&&!i.el&&(i.el=o.el)}}function pf(e){const t=e.slice(),a=[0];let s,r,n,o,i;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(r=a[a.length-1],e[r]<c){t[s]=r,a.push(s);continue}for(n=0,o=a.length-1;n<o;)i=n+o>>1,e[a[i]]<c?n=i+1:o=i;c<e[a[n]]&&(n>0&&(t[s]=a[n-1]),a[n]=s)}}for(n=a.length,o=a[n-1];n-- >0;)a[n]=o,o=t[o];return a}function Nd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Nd(t)}function fi(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ff=Symbol.for("v-scx"),hf=()=>ht(ff);function fs(e,t,a){return Id(e,t,a)}function Id(e,t,a=Pe){const{immediate:s,deep:r,flush:n,once:o}=a,i=Fe({},a),l=t&&s||!t&&n!=="post";let c;if(xs){if(n==="sync"){const f=hf();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Lt,f.resume=Lt,f.pause=Lt,f}}const d=Ge;i.call=(f,g,_)=>yt(f,d,g,_);let u=!1;n==="post"?i.scheduler=f=>{nt(f,d&&d.suspense)}:n!=="sync"&&(u=!0,i.scheduler=(f,g)=>{g?f():Bo(f)}),i.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=kp(e,t,i);return xs&&(c?c.push(p):l&&p()),p}function mf(e,t,a){const s=this.proxy,r=Re(e)?e.includes(".")?Bd(s,e):()=>s[e]:e.bind(s,s);let n;me(t)?n=t:(n=t.handler,a=t);const o=Cs(this),i=Id(r,n.bind(s),a);return o(),i}function Bd(e,t){const a=t.split(".");return()=>{let s=e;for(let r=0;r<a.length&&s;r++)s=s[a[r]];return s}}const gf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${mt(t)}Modifiers`]||e[`${ha(t)}Modifiers`];function bf(e,t,...a){if(e.isUnmounted)return;const s=e.vnode.props||Pe;let r=a;const n=t.startsWith("update:"),o=n&&gf(s,t.slice(7));o&&(o.trim&&(r=a.map(d=>Re(d)?d.trim():d)),o.number&&(r=a.map(ju)));let i,l=s[i=bn(t)]||s[i=bn(mt(t))];!l&&n&&(l=s[i=bn(ha(t))]),l&&yt(l,e,6,r);const c=s[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,yt(c,e,6,r)}}const _f=new WeakMap;function Fd(e,t,a=!1){const s=a?_f:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const n=e.emits;let o={},i=!1;if(!me(e)){const l=c=>{const d=Fd(c,t,!0);d&&(i=!0,Fe(o,d))};!a&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!n&&!i?(Ce(e)&&s.set(e,null),null):(fe(n)?n.forEach(l=>o[l]=null):Fe(o,n),Ce(e)&&s.set(e,o),o)}function nn(e,t){return!e||!Jr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Te(e,t[0].toLowerCase()+t.slice(1))||Te(e,ha(t))||Te(e,t))}function hi(e){const{type:t,vnode:a,proxy:s,withProxy:r,propsOptions:[n],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:g,inheritAttrs:_}=e,v=Rr(e);let m,h;try{if(a.shapeFlag&4){const w=r||s,y=w;m=$t(c.call(y,w,d,u,f,p,g)),h=i}else{const w=t;m=$t(w.length>1?w(u,{attrs:i,slots:o,emit:l}):w(u,null)),h=t.props?i:vf(i)}}catch(w){hs.length=0,an(w,e,1),m=tt(et)}let b=m;if(h&&_!==!1){const w=Object.keys(h),{shapeFlag:y}=b;w.length&&y&7&&(n&&w.some(So)&&(h=yf(h,n)),b=pa(b,h,!1,!0))}return a.dirs&&(b=pa(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&ys(b,a.transition),m=b,Rr(v),m}const vf=e=>{let t;for(const a in e)(a==="class"||a==="style"||Jr(a))&&((t||(t={}))[a]=e[a]);return t},yf=(e,t)=>{const a={};for(const s in e)(!So(s)||!(s.slice(9)in t))&&(a[s]=e[s]);return a};function wf(e,t,a){const{props:s,children:r,component:n}=e,{props:o,children:i,patchFlag:l}=t,c=n.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return s?mi(s,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==s[p]&&!nn(c,p))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:s===o?!1:s?o?mi(s,o,c):!0:!!o;return!1}function mi(e,t,a){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const n=s[r];if(t[n]!==e[n]&&!nn(a,n))return!0}return!1}function xf({vnode:e,parent:t},a){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=a,t=t.parent;else break}}const zd=e=>e.__isSuspense;function Tf(e,t){t&&t.pendingBranch?fe(e)?t.effects.push(...e):t.effects.push(e):Cp(e)}const Ot=Symbol.for("v-fgt"),on=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),kr=Symbol.for("v-stc"),hs=[];let ct=null;function Le(e=!1){hs.push(ct=e?null:[])}function Sf(){hs.pop(),ct=hs[hs.length-1]||null}let ws=1;function Nr(e,t=!1){ws+=e,e<0&&ct&&t&&(ct.hasOnce=!0)}function Hd(e){return e.dynamicChildren=ws>0?ct||ja:null,Sf(),ws>0&&ct&&ct.push(e),e}function He(e,t,a,s,r,n){return Hd(G(e,t,a,s,r,n,!0))}function po(e,t,a,s,r){return Hd(tt(e,t,a,s,r,!0))}function Ir(e){return e?e.__v_isVNode===!0:!1}function Aa(e,t){return e.type===t.type&&e.key===t.key}const jd=({key:e})=>e??null,Ar=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Re(e)||Me(e)||me(e)?{i:lt,r:e,k:t,f:!!a}:e:null);function G(e,t=null,a=null,s=0,r=null,n=e===Ot?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&jd(t),ref:t&&Ar(t),scopeId:pd,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:lt};return i?(Ho(l,a),n&128&&e.normalize(l)):a&&(l.shapeFlag|=Re(a)?8:16),ws>0&&!o&&ct&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&ct.push(l),l}const tt=Ef;function Ef(e,t=null,a=null,s=0,r=null,n=!1){if((!e||e===Td)&&(e=et),Ir(e)){const i=pa(e,t,!0);return a&&Ho(i,a),ws>0&&!n&&ct&&(i.shapeFlag&6?ct[ct.indexOf(e)]=i:ct.push(i)),i.patchFlag=-2,i}if(Nf(e)&&(e=e.__vccOpts),t){t=kf(t);let{class:i,style:l}=t;i&&!Re(i)&&(t.class=Xt(i)),Ce(l)&&(Do(l)&&!fe(l)&&(l=Fe({},l)),t.style=Ao(l))}const o=Re(e)?1:zd(e)?128:fd(e)?64:Ce(e)?4:me(e)?2:0;return G(e,t,a,s,r,o,n,!0)}function kf(e){return e?Do(e)||Cd(e)?Fe({},e):e:null}function pa(e,t,a=!1,s=!1){const{props:r,ref:n,patchFlag:o,children:i,transition:l}=e,c=t?Af(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&jd(c),ref:t&&t.ref?a&&n?fe(n)?n.concat(Ar(t)):[n,Ar(t)]:Ar(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ot?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&pa(e.ssContent),ssFallback:e.ssFallback&&pa(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&ys(d,l.clone(d)),d}function Mt(e=" ",t=0){return tt(on,null,e,t)}function ma(e,t){const a=tt(kr,null,e);return a.staticCount=t,a}function gi(e="",t=!1){return t?(Le(),po(et,null,e)):tt(et,null,e)}function $t(e){return e==null||typeof e=="boolean"?tt(et):fe(e)?tt(Ot,null,e.slice()):Ir(e)?ia(e):tt(on,null,String(e))}function ia(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:pa(e)}function Ho(e,t){let a=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(fe(t))a=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Ho(e,r()),r._c&&(r._d=!0));return}else{a=32;const r=t._;!r&&!Cd(t)?t._ctx=lt:r===3&&lt&&(lt.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else me(t)?(t={default:t,_ctx:lt},a=32):(t=String(t),s&64?(a=16,t=[Mt(t)]):a=8);e.children=t,e.shapeFlag|=a}function Af(...e){const t={};for(let a=0;a<e.length;a++){const s=e[a];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=Xt([t.class,s.class]));else if(r==="style")t.style=Ao([t.style,s.style]);else if(Jr(r)){const n=t[r],o=s[r];o&&n!==o&&!(fe(n)&&n.includes(o))&&(t[r]=n?[].concat(n,o):o)}else r!==""&&(t[r]=s[r])}return t}function At(e,t,a,s=null){yt(e,t,7,[a,s])}const Pf=kd();let Cf=0;function Of(e,t,a){const s=e.type,r=(t?t.appContext:e.appContext)||Pf,n={uid:Cf++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:$d(s,r),emitsOptions:Fd(s,r),emit:null,emitted:null,propsDefaults:Pe,inheritAttrs:s.inheritAttrs,ctx:Pe,data:Pe,props:Pe,attrs:Pe,slots:Pe,refs:Pe,setupState:Pe,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=bf.bind(null,n),e.ce&&e.ce(n),n}let Ge=null;const jo=()=>Ge||lt;let Br,fo;{const e=en(),t=(a,s)=>{let r;return(r=e[a])||(r=e[a]=[]),r.push(s),n=>{r.length>1?r.forEach(o=>o(n)):r[0](n)}};Br=t("__VUE_INSTANCE_SETTERS__",a=>Ge=a),fo=t("__VUE_SSR_SETTERS__",a=>xs=a)}const Cs=e=>{const t=Ge;return Br(e),e.scope.on(),()=>{e.scope.off(),Br(t)}},bi=()=>{Ge&&Ge.scope.off(),Br(null)};function Ud(e){return e.vnode.shapeFlag&4}let xs=!1;function $f(e,t=!1,a=!1){t&&fo(t);const{props:s,children:r}=e.vnode,n=Ud(e);af(e,s,n,t),of(e,r,a||t);const o=n?Mf(e,t):void 0;return t&&fo(!1),o}function Mf(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Kp);const{setup:s}=a;if(s){Qt();const r=e.setupContext=s.length>1?Lf(e):null,n=Cs(e),o=As(s,e,0,[e.props,r]),i=Rc(o);if(Zt(),n(),(i||e.sp)&&!us(e)&&yd(e),i){if(o.then(bi,bi),t)return o.then(l=>{_i(e,l)}).catch(l=>{an(l,e,0)});e.asyncDep=o}else _i(e,o)}else qd(e)}function _i(e,t,a){me(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Ce(t)&&(e.setupState=id(t)),qd(e)}function qd(e,t,a){const s=e.type;e.render||(e.render=s.render||Lt);{const r=Cs(e);Qt();try{Yp(e)}finally{Zt(),r()}}}const Rf={get(e,t){return qe(e,"get",""),e[t]}};function Lf(e){const t=a=>{e.exposed=a||{}};return{attrs:new Proxy(e.attrs,Rf),slots:e.slots,emit:e.emit,expose:t}}function ln(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(id(No(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in ps)return ps[a](e)},has(t,a){return a in t||a in ps}})):e.proxy}function Df(e,t=!0){return me(e)?e.displayName||e.name:e.name||t&&e.__name}function Nf(e){return me(e)&&"__vccOpts"in e}const it=(e,t)=>Sp(e,t,xs);function Uo(e,t,a){try{Nr(-1);const s=arguments.length;return s===2?Ce(t)&&!fe(t)?Ir(t)?tt(e,null,[t]):tt(e,t):tt(e,null,t):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&Ir(a)&&(a=[a]),tt(e,t,a))}finally{Nr(1)}}const If="3.5.24";let ho;const vi=typeof window<"u"&&window.trustedTypes;if(vi)try{ho=vi.createPolicy("vue",{createHTML:e=>e})}catch{}const Gd=ho?e=>ho.createHTML(e):e=>e,Bf="http://www.w3.org/2000/svg",Ff="http://www.w3.org/1998/Math/MathML",qt=typeof document<"u"?document:null,yi=qt&&qt.createElement("template"),zf={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,s)=>{const r=t==="svg"?qt.createElementNS(Bf,e):t==="mathml"?qt.createElementNS(Ff,e):a?qt.createElement(e,{is:a}):qt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>qt.createTextNode(e),createComment:e=>qt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>qt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,s,r,n){const o=a?a.previousSibling:t.lastChild;if(r&&(r===n||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),a),!(r===n||!(r=r.nextSibling)););else{yi.innerHTML=Gd(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const i=yi.content;if(s==="svg"||s==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,a)}return[o?o.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},aa="transition",Xa="animation",Ts=Symbol("_vtc"),Vd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Hf=Fe({},hd,Vd),jf=e=>(e.displayName="Transition",e.props=Hf,e),Uf=jf((e,{slots:t})=>Uo(Rp,qf(e),t)),wa=(e,t=[])=>{fe(e)?e.forEach(a=>a(...t)):e&&e(...t)},wi=e=>e?fe(e)?e.some(t=>t.length>1):e.length>1:!1;function qf(e){const t={};for(const C in e)C in Vd||(t[C]=e[C]);if(e.css===!1)return t;const{name:a="v",type:s,duration:r,enterFromClass:n=`${a}-enter-from`,enterActiveClass:o=`${a}-enter-active`,enterToClass:i=`${a}-enter-to`,appearFromClass:l=n,appearActiveClass:c=o,appearToClass:d=i,leaveFromClass:u=`${a}-leave-from`,leaveActiveClass:p=`${a}-leave-active`,leaveToClass:f=`${a}-leave-to`}=e,g=Gf(r),_=g&&g[0],v=g&&g[1],{onBeforeEnter:m,onEnter:h,onEnterCancelled:b,onLeave:w,onLeaveCancelled:y,onBeforeAppear:T=m,onAppear:A=h,onAppearCancelled:S=b}=t,x=(C,R,U,W)=>{C._enterCancelled=W,xa(C,R?d:i),xa(C,R?c:o),U&&U()},E=(C,R)=>{C._isLeaving=!1,xa(C,u),xa(C,f),xa(C,p),R&&R()},$=C=>(R,U)=>{const W=C?A:h,ae=()=>x(R,C,U);wa(W,[R,ae]),xi(()=>{xa(R,C?l:n),Bt(R,C?d:i),wi(W)||Ti(R,s,_,ae)})};return Fe(t,{onBeforeEnter(C){wa(m,[C]),Bt(C,n),Bt(C,o)},onBeforeAppear(C){wa(T,[C]),Bt(C,l),Bt(C,c)},onEnter:$(!1),onAppear:$(!0),onLeave(C,R){C._isLeaving=!0;const U=()=>E(C,R);Bt(C,u),C._enterCancelled?(Bt(C,p),ki(C)):(ki(C),Bt(C,p)),xi(()=>{C._isLeaving&&(xa(C,u),Bt(C,f),wi(w)||Ti(C,s,v,U))}),wa(w,[C,U])},onEnterCancelled(C){x(C,!1,void 0,!0),wa(b,[C])},onAppearCancelled(C){x(C,!0,void 0,!0),wa(S,[C])},onLeaveCancelled(C){E(C),wa(y,[C])}})}function Gf(e){if(e==null)return null;if(Ce(e))return[En(e.enter),En(e.leave)];{const t=En(e);return[t,t]}}function En(e){return Uu(e)}function Bt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[Ts]||(e[Ts]=new Set)).add(t)}function xa(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const a=e[Ts];a&&(a.delete(t),a.size||(e[Ts]=void 0))}function xi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Vf=0;function Ti(e,t,a,s){const r=e._endId=++Vf,n=()=>{r===e._endId&&s()};if(a!=null)return setTimeout(n,a);const{type:o,timeout:i,propCount:l}=Kf(e,t);if(!o)return s();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),n()},p=f=>{f.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},i+1),e.addEventListener(c,p)}function Kf(e,t){const a=window.getComputedStyle(e),s=g=>(a[g]||"").split(", "),r=s(`${aa}Delay`),n=s(`${aa}Duration`),o=Si(r,n),i=s(`${Xa}Delay`),l=s(`${Xa}Duration`),c=Si(i,l);let d=null,u=0,p=0;t===aa?o>0&&(d=aa,u=o,p=n.length):t===Xa?c>0&&(d=Xa,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?aa:Xa:null,p=d?d===aa?n.length:l.length:0);const f=d===aa&&/\b(?:transform|all)(?:,|$)/.test(s(`${aa}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function Si(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,s)=>Ei(a)+Ei(e[s])))}function Ei(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function ki(e){return(e?e.ownerDocument:document).body.offsetHeight}function Yf(e,t,a){const s=e[Ts];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const Fr=Symbol("_vod"),Kd=Symbol("_vsh"),Ns={name:"show",beforeMount(e,{value:t},{transition:a}){e[Fr]=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):Qa(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:s}){!t!=!a&&(s?t?(s.beforeEnter(e),Qa(e,!0),s.enter(e)):s.leave(e,()=>{Qa(e,!1)}):Qa(e,t))},beforeUnmount(e,{value:t}){Qa(e,t)}};function Qa(e,t){e.style.display=t?e[Fr]:"none",e[Kd]=!t}const Wf=Symbol(""),Jf=/(?:^|;)\s*display\s*:/;function Xf(e,t,a){const s=e.style,r=Re(a);let n=!1;if(a&&!r){if(t)if(Re(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();a[i]==null&&Pr(s,i,"")}else for(const o in t)a[o]==null&&Pr(s,o,"");for(const o in a)o==="display"&&(n=!0),Pr(s,o,a[o])}else if(r){if(t!==a){const o=s[Wf];o&&(a+=";"+o),s.cssText=a,n=Jf.test(a)}}else t&&e.removeAttribute("style");Fr in e&&(e[Fr]=n?s.display:"",e[Kd]&&(s.display="none"))}const Ai=/\s*!important$/;function Pr(e,t,a){if(fe(a))a.forEach(s=>Pr(e,t,s));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const s=Qf(e,t);Ai.test(a)?e.setProperty(ha(s),a.replace(Ai,""),"important"):e[s]=a}}const Pi=["Webkit","Moz","ms"],kn={};function Qf(e,t){const a=kn[t];if(a)return a;let s=mt(t);if(s!=="filter"&&s in e)return kn[t]=s;s=Zr(s);for(let r=0;r<Pi.length;r++){const n=Pi[r]+s;if(n in e)return kn[t]=n}return t}const Ci="http://www.w3.org/1999/xlink";function Oi(e,t,a,s,r,n=Wu(t)){s&&t.startsWith("xlink:")?a==null?e.removeAttributeNS(Ci,t.slice(6,t.length)):e.setAttributeNS(Ci,t,a):a==null||n&&!Ic(a)?e.removeAttribute(t):e.setAttribute(t,n?"":Nt(a)?String(a):a)}function $i(e,t,a,s,r){if(t==="innerHTML"||t==="textContent"){a!=null&&(e[t]=t==="innerHTML"?Gd(a):a);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const i=n==="OPTION"?e.getAttribute("value")||"":e.value,l=a==null?e.type==="checkbox"?"on":"":String(a);(i!==l||!("_value"in e))&&(e.value=l),a==null&&e.removeAttribute(t),e._value=a;return}let o=!1;if(a===""||a==null){const i=typeof e[t];i==="boolean"?a=Ic(a):a==null&&i==="string"?(a="",o=!0):i==="number"&&(a=0,o=!0)}try{e[t]=a}catch{}o&&e.removeAttribute(r||t)}function Yd(e,t,a,s){e.addEventListener(t,a,s)}function Zf(e,t,a,s){e.removeEventListener(t,a,s)}const Mi=Symbol("_vei");function eh(e,t,a,s,r=null){const n=e[Mi]||(e[Mi]={}),o=n[t];if(s&&o)o.value=s;else{const[i,l]=th(t);if(s){const c=n[t]=rh(s,r);Yd(e,i,c,l)}else o&&(Zf(e,i,o,l),n[t]=void 0)}}const Ri=/(?:Once|Passive|Capture)$/;function th(e){let t;if(Ri.test(e)){t={};let s;for(;s=e.match(Ri);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):ha(e.slice(2)),t]}let An=0;const ah=Promise.resolve(),sh=()=>An||(ah.then(()=>An=0),An=Date.now());function rh(e,t){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;yt(nh(s,a.value),t,5,[s])};return a.value=e,a.attached=sh(),a}function nh(e,t){if(fe(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Li=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,oh=(e,t,a,s,r,n)=>{const o=r==="svg";t==="class"?Yf(e,s,o):t==="style"?Xf(e,a,s):Jr(t)?So(t)||eh(e,t,a,s,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ih(e,t,s,o))?($i(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Oi(e,t,s,o,n,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Re(s))?$i(e,mt(t),s,n,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Oi(e,t,s,o))};function ih(e,t,a,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Li(t)&&me(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Li(t)&&Re(a)?!1:t in e}const Di=e=>{const t=e.props["onUpdate:modelValue"]||!1;return fe(t)?a=>Sr(t,a):t},Pn=Symbol("_assign"),lh={deep:!0,created(e,t,a){e[Pn]=Di(a),Yd(e,"change",()=>{const s=e._modelValue,r=ch(e),n=e.checked,o=e[Pn];if(fe(s)){const i=Bc(s,r),l=i!==-1;if(n&&!l)o(s.concat(r));else if(!n&&l){const c=[...s];c.splice(i,1),o(c)}}else if(Xr(s)){const i=new Set(s);n?i.add(r):i.delete(r),o(i)}else o(Wd(e,n))})},mounted:Ni,beforeUpdate(e,t,a){e[Pn]=Di(a),Ni(e,t,a)}};function Ni(e,{value:t,oldValue:a},s){e._modelValue=t;let r;if(fe(t))r=Bc(t,s.props.value)>-1;else if(Xr(t))r=t.has(s.props.value);else{if(t===a)return;r=tn(t,Wd(e,!0))}e.checked!==r&&(e.checked=r)}function ch(e){return"_value"in e?e._value:e.value}function Wd(e,t){const a=t?"_trueValue":"_falseValue";return a in e?e[a]:t}const dh=["ctrl","shift","alt","meta"],uh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>dh.some(a=>e[`${a}Key`]&&!t.includes(a))},Os=(e,t)=>{const a=e._withMods||(e._withMods={}),s=t.join(".");return a[s]||(a[s]=((r,...n)=>{for(let o=0;o<t.length;o++){const i=uh[t[o]];if(i&&i(r,t))return}return e(r,...n)}))},ph={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Kt=(e,t)=>{const a=e._withKeys||(e._withKeys={}),s=t.join(".");return a[s]||(a[s]=(r=>{if(!("key"in r))return;const n=ha(r.key);if(t.some(o=>o===n||ph[o]===n))return e(r)}))},fh=Fe({patchProp:oh},zf);let Ii;function hh(){return Ii||(Ii=cf(fh))}const mh=((...e)=>{const t=hh().createApp(...e),{mount:a}=t;return t.mount=s=>{const r=bh(s);if(!r)return;const n=t._component;!me(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=a(r,!1,gh(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function gh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function bh(e){return Re(e)?document.querySelector(e):e}let Jd;const cn=e=>Jd=e,Xd=Symbol();function mo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ms;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ms||(ms={}));function _h(){const e=Uc(!0),t=e.run(()=>Ke({}));let a=[],s=[];const r=No({install(n){cn(r),r._a=n,n.provide(Xd,r),n.config.globalProperties.$pinia=r,s.forEach(o=>a.push(o)),s=[]},use(n){return this._a?a.push(n):s.push(n),this},_p:a,_a:null,_e:e,_s:new Map,state:t});return r}const Qd=()=>{};function Bi(e,t,a,s=Qd){e.add(t);const r=()=>{e.delete(t)&&s()};return!a&&qc()&&Xu(r),r}function Da(e,...t){e.forEach(a=>{a(...t)})}const vh=e=>e(),Fi=Symbol(),Cn=Symbol();function go(e,t){e instanceof Map&&t instanceof Map?t.forEach((a,s)=>e.set(s,a)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const a in t){if(!t.hasOwnProperty(a))continue;const s=t[a],r=e[a];mo(r)&&mo(s)&&e.hasOwnProperty(a)&&!Me(s)&&!$a(s)?e[a]=go(r,s):e[a]=s}return e}const yh=Symbol();function wh(e){return!mo(e)||!Object.prototype.hasOwnProperty.call(e,yh)}const{assign:na}=Object;function xh(e){return!!(Me(e)&&e.effect)}function Th(e,t,a,s){const{state:r,actions:n,getters:o}=t,i=a.state.value[e];let l;function c(){i||(a.state.value[e]=r?r():{});const d=yp(a.state.value[e]);return na(d,n,Object.keys(o||{}).reduce((u,p)=>(u[p]=No(it(()=>{cn(a);const f=a._s.get(e);return o[p].call(f,f)})),u),{}))}return l=Zd(e,c,t,a,s,!0),l}function Zd(e,t,a={},s,r,n){let o;const i=na({actions:{}},a),l={deep:!0};let c,d,u=new Set,p=new Set,f;const g=s.state.value[e];!n&&!g&&(s.state.value[e]={}),Ke({});let _;function v(S){let x;c=d=!1,typeof S=="function"?(S(s.state.value[e]),x={type:ms.patchFunction,storeId:e,events:f}):(go(s.state.value[e],S),x={type:ms.patchObject,payload:S,storeId:e,events:f});const E=_=Symbol();Io().then(()=>{_===E&&(c=!0)}),d=!0,Da(u,x,s.state.value[e])}const m=n?function(){const{state:x}=a,E=x?x():{};this.$patch($=>{na($,E)})}:Qd;function h(){o.stop(),u.clear(),p.clear(),s._s.delete(e)}const b=(S,x="")=>{if(Fi in S)return S[Cn]=x,S;const E=function(){cn(s);const $=Array.from(arguments),C=new Set,R=new Set;function U(Y){C.add(Y)}function W(Y){R.add(Y)}Da(p,{args:$,name:E[Cn],store:y,after:U,onError:W});let ae;try{ae=S.apply(this&&this.$id===e?this:y,$)}catch(Y){throw Da(R,Y),Y}return ae instanceof Promise?ae.then(Y=>(Da(C,Y),Y)).catch(Y=>(Da(R,Y),Promise.reject(Y))):(Da(C,ae),ae)};return E[Fi]=!0,E[Cn]=x,E},w={_p:s,$id:e,$onAction:Bi.bind(null,p),$patch:v,$reset:m,$subscribe(S,x={}){const E=Bi(u,S,x.detached,()=>$()),$=o.run(()=>fs(()=>s.state.value[e],C=>{(x.flush==="sync"?d:c)&&S({storeId:e,type:ms.direct,events:f},C)},na({},l,x)));return E},$dispose:h},y=Jt(w);s._s.set(e,y);const A=(s._a&&s._a.runWithContext||vh)(()=>s._e.run(()=>(o=Uc()).run(()=>t({action:b}))));for(const S in A){const x=A[S];if(Me(x)&&!xh(x)||$a(x))n||(g&&wh(x)&&(Me(x)?x.value=g[S]:go(x,g[S])),s.state.value[e][S]=x);else if(typeof x=="function"){const E=b(x,S);A[S]=E,i.actions[S]=x}}return na(y,A),na(ye(y),A),Object.defineProperty(y,"$state",{get:()=>s.state.value[e],set:S=>{v(x=>{na(x,S)})}}),s._p.forEach(S=>{na(y,o.run(()=>S({store:y,app:s._a,pinia:s,options:i})))}),g&&n&&a.hydrate&&a.hydrate(y.$state,g),c=!0,d=!0,y}function Sh(e,t,a){let s;const r=typeof t=="function";s=r?a:t;function n(o,i){const l=tf();return o=o||(l?ht(Xd,null):null),o&&cn(o),o=Jd,o._s.has(e)||(r?Zd(e,t,s,o):Th(e,s,o)),o._s.get(e)}return n.$id=e,n}const Ha=typeof document<"u";function eu(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Eh(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&eu(e.default)}const xe=Object.assign;function On(e,t){const a={};for(const s in t){const r=t[s];a[s]=wt(r)?r.map(e):e(r)}return a}const gs=()=>{},wt=Array.isArray;function zi(e,t){const a={};for(const s in e)a[s]=s in t?t[s]:e[s];return a}const tu=/#/g,kh=/&/g,Ah=/\//g,Ph=/=/g,Ch=/\?/g,au=/\+/g,Oh=/%5B/g,$h=/%5D/g,su=/%5E/g,Mh=/%60/g,ru=/%7B/g,Rh=/%7C/g,nu=/%7D/g,Lh=/%20/g;function qo(e){return e==null?"":encodeURI(""+e).replace(Rh,"|").replace(Oh,"[").replace($h,"]")}function Dh(e){return qo(e).replace(ru,"{").replace(nu,"}").replace(su,"^")}function bo(e){return qo(e).replace(au,"%2B").replace(Lh,"+").replace(tu,"%23").replace(kh,"%26").replace(Mh,"`").replace(ru,"{").replace(nu,"}").replace(su,"^")}function Nh(e){return bo(e).replace(Ph,"%3D")}function Ih(e){return qo(e).replace(tu,"%23").replace(Ch,"%3F")}function Bh(e){return Ih(e).replace(Ah,"%2F")}function Ss(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Fh=/\/$/,zh=e=>e.replace(Fh,"");function $n(e,t,a="/"){let s,r={},n="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(s=t.slice(0,l),n=t.slice(l,i>0?i:t.length),r=e(n.slice(1))),i>=0&&(s=s||t.slice(0,i),o=t.slice(i,t.length)),s=qh(s??t,a),{fullPath:s+n+o,path:s,query:r,hash:Ss(o)}}function Hh(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function Hi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function jh(e,t,a){const s=t.matched.length-1,r=a.matched.length-1;return s>-1&&s===r&&Ga(t.matched[s],a.matched[r])&&ou(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function Ga(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ou(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!Uh(e[a],t[a]))return!1;return!0}function Uh(e,t){return wt(e)?ji(e,t):wt(t)?ji(t,e):e===t}function ji(e,t){return wt(t)?e.length===t.length&&e.every((a,s)=>a===t[s]):e.length===1&&e[0]===t}function qh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let n=a.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")n>1&&n--;else break;return a.slice(0,n).join("/")+"/"+s.slice(o).join("/")}const sa={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let _o=(function(e){return e.pop="pop",e.push="push",e})({}),Mn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Gh(e){if(!e)if(Ha){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),zh(e)}const Vh=/^[^#]+#/;function Kh(e,t){return e.replace(Vh,"#")+t}function Yh(e,t){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-a.left-(t.left||0),top:s.top-a.top-(t.top||0)}}const dn=()=>({left:window.scrollX,top:window.scrollY});function Wh(e){let t;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),r=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!r)return;t=Yh(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Ui(e,t){return(history.state?history.state.position-t:-1)+e}const vo=new Map;function Jh(e,t){vo.set(e,t)}function Xh(e){const t=vo.get(e);return vo.delete(e),t}function Qh(e){return typeof e=="string"||e&&typeof e=="object"}function iu(e){return typeof e=="string"||typeof e=="symbol"}let $e=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const lu=Symbol("");$e.MATCHER_NOT_FOUND+"",$e.NAVIGATION_GUARD_REDIRECT+"",$e.NAVIGATION_ABORTED+"",$e.NAVIGATION_CANCELLED+"",$e.NAVIGATION_DUPLICATED+"";function Va(e,t){return xe(new Error,{type:e,[lu]:!0},t)}function Ft(e,t){return e instanceof Error&&lu in e&&(t==null||!!(e.type&t))}const Zh=["params","query","hash"];function em(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const a of Zh)a in e&&(t[a]=e[a]);return JSON.stringify(t,null,2)}function tm(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<a.length;++s){const r=a[s].replace(au," "),n=r.indexOf("="),o=Ss(n<0?r:r.slice(0,n)),i=n<0?null:Ss(r.slice(n+1));if(o in t){let l=t[o];wt(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function qi(e){let t="";for(let a in e){const s=e[a];if(a=Nh(a),s==null){s!==void 0&&(t+=(t.length?"&":"")+a);continue}(wt(s)?s.map(r=>r&&bo(r)):[s&&bo(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+a,r!=null&&(t+="="+r))})}return t}function am(e){const t={};for(const a in e){const s=e[a];s!==void 0&&(t[a]=wt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const sm=Symbol(""),Gi=Symbol(""),un=Symbol(""),Go=Symbol(""),yo=Symbol("");function Za(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function a(){e=[]}return{add:t,list:()=>e.slice(),reset:a}}function la(e,t,a,s,r,n=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Va($e.NAVIGATION_ABORTED,{from:a,to:t})):p instanceof Error?l(p):Qh(p)?l(Va($e.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),i())},d=n(()=>e.call(s&&s.instances[r],t,a,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function Rn(e,t,a,s,r=n=>n()){const n=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(eu(l)){const c=(l.__vccOpts||l)[t];c&&n.push(la(c,a,s,o,i,r))}else{let c=l();n.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=Eh(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&la(p,a,s,o,i,r)()}))}}return n}function rm(e,t){const a=[],s=[],r=[],n=Math.max(t.matched.length,e.matched.length);for(let o=0;o<n;o++){const i=t.matched[o];i&&(e.matched.find(c=>Ga(c,i))?s.push(i):a.push(i));const l=e.matched[o];l&&(t.matched.find(c=>Ga(c,l))||r.push(l))}return[a,s,r]}let nm=()=>location.protocol+"//"+location.host;function cu(e,t){const{pathname:a,search:s,hash:r}=t,n=e.indexOf("#");if(n>-1){let o=r.includes(e.slice(n))?e.slice(n).length:1,i=r.slice(o);return i[0]!=="/"&&(i="/"+i),Hi(i,"")}return Hi(a,e)+s+r}function om(e,t,a,s){let r=[],n=[],o=null;const i=({state:p})=>{const f=cu(e,location),g=a.value,_=t.value;let v=0;if(p){if(a.value=f,t.value=p,o&&o===g){o=null;return}v=_?p.position-_.position:0}else s(f);r.forEach(m=>{m(a.value,g,{delta:v,type:_o.pop,direction:v?v>0?Mn.forward:Mn.back:Mn.unknown})})};function l(){o=a.value}function c(p){r.push(p);const f=()=>{const g=r.indexOf(p);g>-1&&r.splice(g,1)};return n.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(xe({},p.state,{scroll:dn()}),"")}}function u(){for(const p of n)p();n=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function Vi(e,t,a,s=!1,r=!1){return{back:e,current:t,forward:a,replaced:s,position:window.history.length,scroll:r?dn():null}}function im(e){const{history:t,location:a}=window,s={value:cu(e,a)},r={value:t.state};r.value||n(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function n(l,c,d){const u=e.indexOf("#"),p=u>-1?(a.host&&document.querySelector("base")?e:e.slice(u))+l:nm()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),r.value=c}catch(f){console.error(f),a[d?"replace":"assign"](p)}}function o(l,c){n(l,xe({},t.state,Vi(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),s.value=l}function i(l,c){const d=xe({},r.value,t.state,{forward:l,scroll:dn()});n(d.current,d,!0),n(l,xe({},Vi(s.value,l,null),{position:d.position+1},c),!1),s.value=l}return{location:s,state:r,push:i,replace:o}}function lm(e){e=Gh(e);const t=im(e),a=om(e,t.state,t.location,t.replace);function s(n,o=!0){o||a.pauseListeners(),history.go(n)}const r=xe({location:"",base:e,go:s,createHref:Kh.bind(null,e)},t,a);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function cm(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),lm(e)}let Ca=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ie=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ie||{});const dm={type:Ca.Static,value:""},um=/[a-zA-Z0-9_]/;function pm(e){if(!e)return[[]];if(e==="/")return[[dm]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${a})/"${c}": ${f}`)}let a=Ie.Static,s=a;const r=[];let n;function o(){n&&r.push(n),n=[]}let i=0,l,c="",d="";function u(){c&&(a===Ie.Static?n.push({type:Ca.Static,value:c}):a===Ie.Param||a===Ie.ParamRegExp||a===Ie.ParamRegExpEnd?(n.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),n.push({type:Ca.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&a!==Ie.ParamRegExp){s=a,a=Ie.EscapeNext;continue}switch(a){case Ie.Static:l==="/"?(c&&u(),o()):l===":"?(u(),a=Ie.Param):p();break;case Ie.EscapeNext:p(),a=s;break;case Ie.Param:l==="("?a=Ie.ParamRegExp:um.test(l)?p():(u(),a=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Ie.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:a=Ie.ParamRegExpEnd:d+=l;break;case Ie.ParamRegExpEnd:u(),a=Ie.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return a===Ie.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),r}const Ki="[^/]+?",fm={sensitive:!1,strict:!1,start:!0,end:!0};var Xe=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Xe||{});const hm=/[.+*?^${}()[\]/\\]/g;function mm(e,t){const a=xe({},fm,t),s=[];let r=a.start?"^":"";const n=[];for(const c of e){const d=c.length?[]:[Xe.Root];a.strict&&!c.length&&(r+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=Xe.Segment+(a.sensitive?Xe.BonusCaseSensitive:0);if(p.type===Ca.Static)u||(r+="/"),r+=p.value.replace(hm,"\\$&"),f+=Xe.Static;else if(p.type===Ca.Param){const{value:g,repeatable:_,optional:v,regexp:m}=p;n.push({name:g,repeatable:_,optional:v});const h=m||Ki;if(h!==Ki){f+=Xe.BonusCustomRegExp;try{`${h}`}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${h}): `+w.message)}}let b=_?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;u||(b=v&&c.length<2?`(?:/${b})`:"/"+b),v&&(b+="?"),r+=b,f+=Xe.Dynamic,v&&(f+=Xe.BonusOptional),_&&(f+=Xe.BonusRepeatable),h===".*"&&(f+=Xe.BonusWildcard)}d.push(f)}s.push(d)}if(a.strict&&a.end){const c=s.length-1;s[c][s[c].length-1]+=Xe.BonusStrict}a.strict||(r+="/?"),a.end?r+="$":a.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,a.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",g=n[p-1];u[g.name]=f&&g.repeatable?f.split("/"):f}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===Ca.Static)d+=f.value;else if(f.type===Ca.Param){const{value:g,repeatable:_,optional:v}=f,m=g in c?c[g]:"";if(wt(m)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const h=wt(m)?m.join("/"):m;if(!h)if(v)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);d+=h}}return d||"/"}return{re:o,score:s,keys:n,parse:i,stringify:l}}function gm(e,t){let a=0;for(;a<e.length&&a<t.length;){const s=t[a]-e[a];if(s)return s;a++}return e.length<t.length?e.length===1&&e[0]===Xe.Static+Xe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Xe.Static+Xe.Segment?1:-1:0}function du(e,t){let a=0;const s=e.score,r=t.score;for(;a<s.length&&a<r.length;){const n=gm(s[a],r[a]);if(n)return n;a++}if(Math.abs(r.length-s.length)===1){if(Yi(s))return 1;if(Yi(r))return-1}return r.length-s.length}function Yi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const bm={strict:!1,end:!0,sensitive:!1};function _m(e,t,a){const s=mm(pm(e.path),a),r=xe(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function vm(e,t){const a=[],s=new Map;t=zi(bm,t);function r(u){return s.get(u)}function n(u,p,f){const g=!f,_=Ji(u);_.aliasOf=f&&f.record;const v=zi(t,u),m=[_];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const y of w)m.push(Ji(xe({},_,{components:f?f.record.components:_.components,path:y,aliasOf:f?f.record:_})))}let h,b;for(const w of m){const{path:y}=w;if(p&&y[0]!=="/"){const T=p.record.path,A=T[T.length-1]==="/"?"":"/";w.path=p.record.path+(y&&A+y)}if(h=_m(w,p,v),f?f.alias.push(h):(b=b||h,b!==h&&b.alias.push(h),g&&u.name&&!Xi(h)&&o(u.name)),uu(h)&&l(h),_.children){const T=_.children;for(let A=0;A<T.length;A++)n(T[A],h,f&&f.children[A])}f=f||h}return b?()=>{o(b)}:gs}function o(u){if(iu(u)){const p=s.get(u);p&&(s.delete(u),a.splice(a.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=a.indexOf(u);p>-1&&(a.splice(p,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return a}function l(u){const p=xm(u,a);a.splice(p,0,u),u.record.name&&!Xi(u)&&s.set(u.record.name,u)}function c(u,p){let f,g={},_,v;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Va($e.MATCHER_NOT_FOUND,{location:u});v=f.record.name,g=xe(Wi(p.params,f.keys.filter(b=>!b.optional).concat(f.parent?f.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),u.params&&Wi(u.params,f.keys.map(b=>b.name))),_=f.stringify(g)}else if(u.path!=null)_=u.path,f=a.find(b=>b.re.test(_)),f&&(g=f.parse(_),v=f.record.name);else{if(f=p.name?s.get(p.name):a.find(b=>b.re.test(p.path)),!f)throw Va($e.MATCHER_NOT_FOUND,{location:u,currentLocation:p});v=f.record.name,g=xe({},p.params,u.params),_=f.stringify(g)}const m=[];let h=f;for(;h;)m.unshift(h.record),h=h.parent;return{name:v,path:_,params:g,matched:m,meta:wm(m)}}e.forEach(u=>n(u));function d(){a.length=0,s.clear()}return{addRoute:n,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:r}}function Wi(e,t){const a={};for(const s of t)s in e&&(a[s]=e[s]);return a}function Ji(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ym(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ym(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const s in e.components)t[s]=typeof a=="object"?a[s]:a;return t}function Xi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function wm(e){return e.reduce((t,a)=>xe(t,a.meta),{})}function xm(e,t){let a=0,s=t.length;for(;a!==s;){const n=a+s>>1;du(e,t[n])<0?s=n:a=n+1}const r=Tm(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function Tm(e){let t=e;for(;t=t.parent;)if(uu(t)&&du(e,t)===0)return t}function uu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Qi(e){const t=ht(un),a=ht(Go),s=it(()=>{const l=ft(e.to);return t.resolve(l)}),r=it(()=>{const{matched:l}=s.value,{length:c}=l,d=l[c-1],u=a.matched;if(!d||!u.length)return-1;const p=u.findIndex(Ga.bind(null,d));if(p>-1)return p;const f=Zi(l[c-2]);return c>1&&Zi(d)===f&&u[u.length-1].path!==f?u.findIndex(Ga.bind(null,l[c-2])):p}),n=it(()=>r.value>-1&&Pm(a.params,s.value.params)),o=it(()=>r.value>-1&&r.value===a.matched.length-1&&ou(a.params,s.value.params));function i(l={}){if(Am(l)){const c=t[ft(e.replace)?"replace":"push"](ft(e.to)).catch(gs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:it(()=>s.value.href),isActive:n,isExactActive:o,navigate:i}}function Sm(e){return e.length===1?e[0]:e}const Em=vd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Qi,setup(e,{slots:t}){const a=Jt(Qi(e)),{options:s}=ht(un),r=it(()=>({[el(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[el(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const n=t.default&&Sm(t.default(a));return e.custom?n:Uo("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:r.value},n)}}}),km=Em;function Am(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Pm(e,t){for(const a in t){const s=t[a],r=e[a];if(typeof s=="string"){if(s!==r)return!1}else if(!wt(r)||r.length!==s.length||s.some((n,o)=>n!==r[o]))return!1}return!0}function Zi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const el=(e,t,a)=>e??t??a,Cm=vd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){const s=ht(yo),r=it(()=>e.route||s.value),n=ht(Gi,0),o=it(()=>{let c=ft(n);const{matched:d}=r.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=it(()=>r.value.matched[o.value]);Er(Gi,it(()=>o.value+1)),Er(sm,i),Er(yo,r);const l=Ke();return fs(()=>[l.value,i.value,e.name],([c,d,u],[p,f,g])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!Ga(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,d=e.name,u=i.value,p=u&&u.components[d];if(!p)return tl(a.default,{Component:p,route:c});const f=u.props[d],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Uo(p,xe({},g,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return tl(a.default,{Component:v,route:c})||v}}});function tl(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const pu=Cm;function Om(e){const t=vm(e.routes,e),a=e.parseQuery||tm,s=e.stringifyQuery||qi,r=e.history,n=Za(),o=Za(),i=Za(),l=bp(sa);let c=sa;Ha&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=On.bind(null,z=>""+z),u=On.bind(null,Bh),p=On.bind(null,Ss);function f(z,I){let J,Z;return iu(z)?(J=t.getRecordMatcher(z),Z=I):Z=z,t.addRoute(Z,J)}function g(z){const I=t.getRecordMatcher(z);I&&t.removeRoute(I)}function _(){return t.getRoutes().map(z=>z.record)}function v(z){return!!t.getRecordMatcher(z)}function m(z,I){if(I=xe({},I||l.value),typeof z=="string"){const L=$n(a,z,I.path),q=t.resolve({path:L.path},I),ee=r.createHref(L.fullPath);return xe(L,q,{params:p(q.params),hash:Ss(L.hash),redirectedFrom:void 0,href:ee})}let J;if(z.path!=null)J=xe({},z,{path:$n(a,z.path,I.path).path});else{const L=xe({},z.params);for(const q in L)L[q]==null&&delete L[q];J=xe({},z,{params:u(L)}),I.params=u(I.params)}const Z=t.resolve(J,I),N=z.hash||"";Z.params=d(p(Z.params));const k=Hh(s,xe({},z,{hash:Dh(N),path:Z.path})),O=r.createHref(k);return xe({fullPath:k,hash:N,query:s===qi?am(z.query):z.query||{}},Z,{redirectedFrom:void 0,href:O})}function h(z){return typeof z=="string"?$n(a,z,l.value.path):xe({},z)}function b(z,I){if(c!==z)return Va($e.NAVIGATION_CANCELLED,{from:I,to:z})}function w(z){return A(z)}function y(z){return w(xe(h(z),{replace:!0}))}function T(z,I){const J=z.matched[z.matched.length-1];if(J&&J.redirect){const{redirect:Z}=J;let N=typeof Z=="function"?Z(z,I):Z;return typeof N=="string"&&(N=N.includes("?")||N.includes("#")?N=h(N):{path:N},N.params={}),xe({query:z.query,hash:z.hash,params:N.path!=null?{}:z.params},N)}}function A(z,I){const J=c=m(z),Z=l.value,N=z.state,k=z.force,O=z.replace===!0,L=T(J,Z);if(L)return A(xe(h(L),{state:typeof L=="object"?xe({},N,L.state):N,force:k,replace:O}),I||J);const q=J;q.redirectedFrom=I;let ee;return!k&&jh(s,Z,J)&&(ee=Va($e.NAVIGATION_DUPLICATED,{to:q,from:Z}),D(Z,Z,!0,!1)),(ee?Promise.resolve(ee):E(q,Z)).catch(te=>Ft(te)?Ft(te,$e.NAVIGATION_GUARD_REDIRECT)?te:H(te):V(te,q,Z)).then(te=>{if(te){if(Ft(te,$e.NAVIGATION_GUARD_REDIRECT))return A(xe({replace:O},h(te.to),{state:typeof te.to=="object"?xe({},N,te.to.state):N,force:k}),I||q)}else te=C(q,Z,!0,O,N);return $(q,Z,te),te})}function S(z,I){const J=b(z,I);return J?Promise.reject(J):Promise.resolve()}function x(z){const I=P.values().next().value;return I&&typeof I.runWithContext=="function"?I.runWithContext(z):z()}function E(z,I){let J;const[Z,N,k]=rm(z,I);J=Rn(Z.reverse(),"beforeRouteLeave",z,I);for(const L of Z)L.leaveGuards.forEach(q=>{J.push(la(q,z,I))});const O=S.bind(null,z,I);return J.push(O),F(J).then(()=>{J=[];for(const L of n.list())J.push(la(L,z,I));return J.push(O),F(J)}).then(()=>{J=Rn(N,"beforeRouteUpdate",z,I);for(const L of N)L.updateGuards.forEach(q=>{J.push(la(q,z,I))});return J.push(O),F(J)}).then(()=>{J=[];for(const L of k)if(L.beforeEnter)if(wt(L.beforeEnter))for(const q of L.beforeEnter)J.push(la(q,z,I));else J.push(la(L.beforeEnter,z,I));return J.push(O),F(J)}).then(()=>(z.matched.forEach(L=>L.enterCallbacks={}),J=Rn(k,"beforeRouteEnter",z,I,x),J.push(O),F(J))).then(()=>{J=[];for(const L of o.list())J.push(la(L,z,I));return J.push(O),F(J)}).catch(L=>Ft(L,$e.NAVIGATION_CANCELLED)?L:Promise.reject(L))}function $(z,I,J){i.list().forEach(Z=>x(()=>Z(z,I,J)))}function C(z,I,J,Z,N){const k=b(z,I);if(k)return k;const O=I===sa,L=Ha?history.state:{};J&&(Z||O?r.replace(z.fullPath,xe({scroll:O&&L&&L.scroll},N)):r.push(z.fullPath,N)),l.value=z,D(z,I,J,O),H()}let R;function U(){R||(R=r.listen((z,I,J)=>{if(!M.listening)return;const Z=m(z),N=T(Z,M.currentRoute.value);if(N){A(xe(N,{replace:!0,force:!0}),Z).catch(gs);return}c=Z;const k=l.value;Ha&&Jh(Ui(k.fullPath,J.delta),dn()),E(Z,k).catch(O=>Ft(O,$e.NAVIGATION_ABORTED|$e.NAVIGATION_CANCELLED)?O:Ft(O,$e.NAVIGATION_GUARD_REDIRECT)?(A(xe(h(O.to),{force:!0}),Z).then(L=>{Ft(L,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&!J.delta&&J.type===_o.pop&&r.go(-1,!1)}).catch(gs),Promise.reject()):(J.delta&&r.go(-J.delta,!1),V(O,Z,k))).then(O=>{O=O||C(Z,k,!1),O&&(J.delta&&!Ft(O,$e.NAVIGATION_CANCELLED)?r.go(-J.delta,!1):J.type===_o.pop&&Ft(O,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),$(Z,k,O)}).catch(gs)}))}let W=Za(),ae=Za(),Y;function V(z,I,J){H(z);const Z=ae.list();return Z.length?Z.forEach(N=>N(z,I,J)):console.error(z),Promise.reject(z)}function X(){return Y&&l.value!==sa?Promise.resolve():new Promise((z,I)=>{W.add([z,I])})}function H(z){return Y||(Y=!z,U(),W.list().forEach(([I,J])=>z?J(z):I()),W.reset()),z}function D(z,I,J,Z){const{scrollBehavior:N}=e;if(!Ha||!N)return Promise.resolve();const k=!J&&Xh(Ui(z.fullPath,0))||(Z||!J)&&history.state&&history.state.scroll||null;return Io().then(()=>N(z,I,k)).then(O=>O&&Wh(O)).catch(O=>V(O,z,I))}const j=z=>r.go(z);let B;const P=new Set,M={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:v,getRoutes:_,resolve:m,options:e,push:w,replace:y,go:j,back:()=>j(-1),forward:()=>j(1),beforeEach:n.add,beforeResolve:o.add,afterEach:i.add,onError:ae.add,isReady:X,install(z){z.component("RouterLink",km),z.component("RouterView",pu),z.config.globalProperties.$router=M,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>ft(l)}),Ha&&!B&&l.value===sa&&(B=!0,w(r.location).catch(Z=>{}));const I={};for(const Z in sa)Object.defineProperty(I,Z,{get:()=>l.value[Z],enumerable:!0});z.provide(un,M),z.provide(Go,nd(I)),z.provide(yo,l);const J=z.unmount;P.add(z),z.unmount=function(){P.delete(z),P.size<1&&(c=sa,R&&R(),R=null,l.value=sa,B=!1,Y=!1),J()}}};function F(z){return z.reduce((I,J)=>I.then(()=>x(J)),Promise.resolve())}return M}function gt(){return ht(un)}function fu(e){return ht(Go)}var $m=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var os={exports:{}},Mm=os.exports,al;function Rm(){return al||(al=1,(function(e,t){(function(a,s){var r={};a.PubSub?(r=a.PubSub,console.warn("PubSub already loaded, using existing version")):(a.PubSub=r,s(r)),e!==void 0&&e.exports&&(t=e.exports=r),t.PubSub=r,e.exports=t=r})(typeof window=="object"&&window||Mm||$m,function(a){var s={},r=-1,n="*";function o(_){var v;for(v in _)if(Object.prototype.hasOwnProperty.call(_,v))return!0;return!1}function i(_){return function(){throw _}}function l(_,v,m){try{_(v,m)}catch(h){setTimeout(i(h),0)}}function c(_,v,m){_(v,m)}function d(_,v,m,h){var b=s[v],w=h?c:l,y;if(Object.prototype.hasOwnProperty.call(s,v))for(y in b)Object.prototype.hasOwnProperty.call(b,y)&&w(b[y],_,m)}function u(_,v,m){return function(){var b=String(_),w=b.lastIndexOf(".");for(d(_,_,v,m);w!==-1;)b=b.substr(0,w),w=b.lastIndexOf("."),d(_,b,v,m);d(_,n,v,m)}}function p(_){var v=String(_),m=!!(Object.prototype.hasOwnProperty.call(s,v)&&o(s[v]));return m}function f(_){for(var v=String(_),m=p(v)||p(n),h=v.lastIndexOf(".");!m&&h!==-1;)v=v.substr(0,h),h=v.lastIndexOf("."),m=p(v);return m}function g(_,v,m,h){_=typeof _=="symbol"?_.toString():_;var b=u(_,v,h),w=f(_);return w?(m===!0?b():setTimeout(b,0),!0):!1}a.publish=function(_,v){return g(_,v,!1,a.immediateExceptions)},a.publishSync=function(_,v){return g(_,v,!0,a.immediateExceptions)},a.subscribe=function(_,v){if(typeof v!="function")return!1;_=typeof _=="symbol"?_.toString():_,Object.prototype.hasOwnProperty.call(s,_)||(s[_]={});var m="uid_"+String(++r);return s[_][m]=v,m},a.subscribeAll=function(_){return a.subscribe(n,_)},a.subscribeOnce=function(_,v){var m=a.subscribe(_,function(){a.unsubscribe(m),v.apply(this,arguments)});return a},a.clearAllSubscriptions=function(){s={}},a.clearSubscriptions=function(v){var m;for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(v)===0&&delete s[m]},a.countSubscriptions=function(v){var m,h,b=0;for(m in s)if(Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(v)===0){for(h in s[m])b++;break}return b},a.getSubscriptions=function(v){var m,h=[];for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(v)===0&&h.push(m);return h},a.unsubscribe=function(_){var v=function(S){var x;for(x in s)if(Object.prototype.hasOwnProperty.call(s,x)&&x.indexOf(S)===0)return!0;return!1},m=typeof _=="string"&&(Object.prototype.hasOwnProperty.call(s,_)||v(_)),h=!m&&typeof _=="string",b=typeof _=="function",w=!1,y,T,A;if(m){a.clearSubscriptions(_);return}for(y in s)if(Object.prototype.hasOwnProperty.call(s,y)){if(T=s[y],h&&T[_]){delete T[_],w=_;break}if(b)for(A in T)Object.prototype.hasOwnProperty.call(T,A)&&T[A]===_&&(delete T[A],w=!0)}return w}})})(os,os.exports)),os.exports}var Lm=Rm();const ce=hu(Lm);let Ve=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Dm={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function fa(e){return new Promise((t,a)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>a(e.error)})}function Nm(e,t){let a;const s=()=>{if(a)return a;const r=indexedDB.open(e);return r.onupgradeneeded=()=>r.result.createObjectStore(t),a=fa(r),a.then(n=>{n.onclose=()=>a=void 0},()=>{}),a};return(r,n)=>s().then(o=>n(o.transaction(t,r).objectStore(t)))}let Ln;function $s(){return Ln||(Ln=Nm("keyval-store","keyval")),Ln}function Im(e,t=$s()){return t("readonly",a=>fa(a.get(e)))}function sl(e,t,a=$s()){return a("readwrite",s=>(s.put(t,e),fa(s.transaction)))}function Dn(e,t=$s()){return t("readwrite",a=>(a.delete(e),fa(a.transaction)))}function mu(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},fa(e.transaction)}function Na(e=$s()){return e("readonly",t=>{if(t.getAllKeys)return fa(t.getAllKeys());const a=[];return mu(t,s=>a.push(s.key)).then(()=>a)})}function Bm(e=$s()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([fa(t.getAllKeys()),fa(t.getAll())]).then(([s,r])=>s.map((n,o)=>[n,r[o]]));const a=[];return e("readonly",s=>mu(s,r=>a.push([r.key,r.value])).then(()=>a))})}const Ka=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",zr=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a+=1)if(!zr(e[a],t[a]))return!1;return!0}if(Ka(e)&&Ka(t)){const a=Object.entries(e),s=new Set(Object.keys(t));if(a.length!==s.size)return!1;for(const[r,n]of a){if(!zr(n,t[r]))return!1;s.delete(r)}return s.size===0}return!1},Is=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ka(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Fm=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",rl=e=>e>="0"&&e<="9"||e==="-",zm=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var Q;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(Q||(Q={}));const nl={"(":Q.TOK_LPAREN,")":Q.TOK_RPAREN,"*":Q.TOK_STAR,",":Q.TOK_COMMA,".":Q.TOK_DOT,":":Q.TOK_COLON,"@":Q.TOK_CURRENT,$:Q.TOK_ROOT,"]":Q.TOK_RBRACKET,"{":Q.TOK_LBRACE,"}":Q.TOK_RBRACE},Hm={"!":!0,"<":!0,"=":!0,">":!0},jm={"	":!0,"\n":!0,"\r":!0," ":!0};class Um{constructor(){this._current=0}tokenize(t){const a=[];this._current=0;let s,r,n;for(;this._current<t.length;)if(Fm(t[this._current]))s=this._current,r=this.consumeUnquotedIdentifier(t),a.push({start:s,type:Q.TOK_UNQUOTEDIDENTIFIER,value:r});else if(nl[t[this._current]]!==void 0)a.push({start:this._current,type:nl[t[this._current]],value:t[this._current]}),this._current+=1;else if(rl(t[this._current]))n=this.consumeNumber(t),a.push(n);else if(t[this._current]==="[")n=this.consumeLBracket(t),a.push(n);else if(t[this._current]==='"')s=this._current,r=this.consumeQuotedIdentifier(t),a.push({start:s,type:Q.TOK_QUOTEDIDENTIFIER,value:r});else if(t[this._current]==="'")s=this._current,r=this.consumeRawStringLiteral(t),a.push({start:s,type:Q.TOK_LITERAL,value:r});else if(t[this._current]==="`"){s=this._current;const o=this.consumeLiteral(t);a.push({start:s,type:Q.TOK_LITERAL,value:o})}else if(Hm[t[this._current]]!==void 0)n=this.consumeOperator(t),n&&a.push(n);else if(jm[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")s=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,a.push({start:s,type:Q.TOK_AND,value:"&&"})):a.push({start:s,type:Q.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")s=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,a.push({start:s,type:Q.TOK_OR,value:"||"})):a.push({start:s,type:Q.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return a}consumeUnquotedIdentifier(t){const a=this._current;for(this._current+=1;this._current<t.length&&zm(t[this._current]);)this._current+=1;return t.slice(a,this._current)}consumeQuotedIdentifier(t){const a=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=='"'&&this._current<s;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==='"')?r+=2:r+=1,this._current=r}return this._current+=1,JSON.parse(t.slice(a,this._current))}consumeRawStringLiteral(t){const a=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=="'"&&this._current<s;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==="'")?n+=2:n+=1,this._current=n}return this._current+=1,t.slice(a+1,this._current-1).replace("\\'","'")}consumeNumber(t){const a=this._current;this._current+=1;const s=t.length;for(;rl(t[this._current])&&this._current<s;)this._current+=1;const r=parseInt(t.slice(a,this._current),10);return{start:a,value:r,type:Q.TOK_NUMBER}}consumeLBracket(t){const a=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:a,type:Q.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:a,type:Q.TOK_FLATTEN,value:"[]"}):{start:a,type:Q.TOK_LBRACKET,value:"["}}consumeOperator(t){const a=this._current,s=t[a];if(this._current+=1,s==="!")return t[this._current]==="="?(this._current+=1,{start:a,type:Q.TOK_NE,value:"!="}):{start:a,type:Q.TOK_NOT,value:"!"};if(s==="<")return t[this._current]==="="?(this._current+=1,{start:a,type:Q.TOK_LTE,value:"<="}):{start:a,type:Q.TOK_LT,value:"<"};if(s===">")return t[this._current]==="="?(this._current+=1,{start:a,type:Q.TOK_GTE,value:">="}):{start:a,type:Q.TOK_GT,value:">"};if(s==="="&&t[this._current]==="=")return this._current+=1,{start:a,type:Q.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const a=this._current,s=t.length;for(;t[this._current]!=="`"&&this._current<s;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let r=t.slice(a,this._current).trimLeft();r=r.replace("\\`","`");const n=this.looksLikeJSON(r)?JSON.parse(r):JSON.parse(`"${r}"`);return this._current+=1,n}looksLikeJSON(t){const s=["true","false","null"],r="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||s.includes(t))return!0;if(r.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const gu=new Um,je={[Q.TOK_EOF]:0,[Q.TOK_UNQUOTEDIDENTIFIER]:0,[Q.TOK_QUOTEDIDENTIFIER]:0,[Q.TOK_RBRACKET]:0,[Q.TOK_RPAREN]:0,[Q.TOK_COMMA]:0,[Q.TOK_RBRACE]:0,[Q.TOK_NUMBER]:0,[Q.TOK_CURRENT]:0,[Q.TOK_EXPREF]:0,[Q.TOK_ROOT]:0,[Q.TOK_PIPE]:1,[Q.TOK_OR]:2,[Q.TOK_AND]:3,[Q.TOK_EQ]:5,[Q.TOK_GT]:5,[Q.TOK_LT]:5,[Q.TOK_GTE]:5,[Q.TOK_LTE]:5,[Q.TOK_NE]:5,[Q.TOK_FLATTEN]:9,[Q.TOK_STAR]:20,[Q.TOK_FILTER]:21,[Q.TOK_DOT]:40,[Q.TOK_NOT]:45,[Q.TOK_LBRACE]:50,[Q.TOK_LBRACKET]:55,[Q.TOK_LPAREN]:60};class qm{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const a=this.expression(0);if(this.lookahead(0)!==Q.TOK_EOF){const s=this.lookaheadToken(0);this.errorToken(s,`Unexpected token type: ${s.type}, value: ${s.value}`)}return a}loadTokens(t){this.tokens=[...gu.tokenize(t),{type:Q.TOK_EOF,value:"",start:t.length}]}expression(t){const a=this.lookaheadToken(0);this.advance();let s=this.nud(a),r=this.lookahead(0);for(;t<je[r];)this.advance(),s=this.led(r,s),r=this.lookahead(0);return s}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let a,s,r;switch(t.type){case Q.TOK_LITERAL:return{type:"Literal",value:t.value};case Q.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case Q.TOK_QUOTEDIDENTIFIER:const n={type:"Field",name:t.value};if(this.lookahead(0)===Q.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return n;case Q.TOK_NOT:return s=this.expression(je.Not),{type:"NotExpression",children:[s]};case Q.TOK_STAR:return a={type:"Identity"},s=this.lookahead(0)===Q.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(je.Star),{type:"ValueProjection",children:[a,s]};case Q.TOK_FILTER:return this.led(t.type,{type:"Identity"});case Q.TOK_LBRACE:return this.parseMultiselectHash();case Q.TOK_FLATTEN:return a={type:Q.TOK_FLATTEN,children:[{type:"Identity"}]},s=this.parseProjectionRHS(je.Flatten),{type:"Projection",children:[a,s]};case Q.TOK_LBRACKET:return this.lookahead(0)===Q.TOK_NUMBER||this.lookahead(0)===Q.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},s)):this.lookahead(0)===Q.TOK_STAR&&this.lookahead(1)===Q.TOK_RBRACKET?(this.advance(),this.advance(),s=this.parseProjectionRHS(je.Star),{children:[{type:"Identity"},s],type:"Projection"}):this.parseMultiselectList();case Q.TOK_CURRENT:return{type:Q.TOK_CURRENT};case Q.TOK_ROOT:return{type:Q.TOK_ROOT};case Q.TOK_EXPREF:return r=this.expression(je.Expref),{type:"ExpressionReference",children:[r]};case Q.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==Q.TOK_RPAREN;)this.lookahead(0)===Q.TOK_CURRENT?(r={type:Q.TOK_CURRENT},this.advance()):r=this.expression(0),o.push(r);return this.match(Q.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,a){let s;switch(t){case Q.TOK_DOT:const r=je.Dot;return this.lookahead(0)!==Q.TOK_STAR?(s=this.parseDotRHS(r),{type:"Subexpression",children:[a,s]}):(this.advance(),s=this.parseProjectionRHS(r),{type:"ValueProjection",children:[a,s]});case Q.TOK_PIPE:return s=this.expression(je.Pipe),{type:Q.TOK_PIPE,children:[a,s]};case Q.TOK_OR:return s=this.expression(je.Or),{type:"OrExpression",children:[a,s]};case Q.TOK_AND:return s=this.expression(je.And),{type:"AndExpression",children:[a,s]};case Q.TOK_LPAREN:const n=a.name,o=[];let i;for(;this.lookahead(0)!==Q.TOK_RPAREN;)this.lookahead(0)===Q.TOK_CURRENT?(i={type:Q.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===Q.TOK_COMMA&&this.match(Q.TOK_COMMA),o.push(i);return this.match(Q.TOK_RPAREN),{name:n,type:"Function",children:o};case Q.TOK_FILTER:const c=this.expression(0);return this.match(Q.TOK_RBRACKET),s=this.lookahead(0)===Q.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(je.Filter),{type:"FilterProjection",children:[a,s,c]};case Q.TOK_FLATTEN:const d={type:Q.TOK_FLATTEN,children:[a]},u=this.parseProjectionRHS(je.Flatten);return{type:"Projection",children:[d,u]};case Q.TOK_EQ:case Q.TOK_NE:case Q.TOK_GT:case Q.TOK_GTE:case Q.TOK_LT:case Q.TOK_LTE:return this.parseComparator(a,t);case Q.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===Q.TOK_NUMBER||p.type===Q.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice(a,s)):(this.match(Q.TOK_STAR),this.match(Q.TOK_RBRACKET),s=this.parseProjectionRHS(je.Star),{type:"Projection",children:[a,s]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const a=this.lookaheadToken(0);this.errorToken(a,`Expected ${t}, got: ${a.type}`)}}errorToken(t,a=""){const s=new Error(a||`Invalid token (${t.type}): "${t.value}"`);throw s.name="ParserError",s}parseIndexExpression(){if(this.lookahead(0)===Q.TOK_COLON||this.lookahead(1)===Q.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(Q.TOK_RBRACKET),t}projectIfSlice(t,a){const s={type:"IndexExpression",children:[t,a]};return a.type==="Slice"?{children:[s,this.parseProjectionRHS(je.Star)],type:"Projection"}:s}parseSliceExpression(){const t=[null,null,null];let a=0,s=this.lookahead(0);for(;s!==Q.TOK_RBRACKET&&a<3;){if(s===Q.TOK_COLON)a+=1,this.advance();else if(s===Q.TOK_NUMBER)t[a]=this.lookaheadToken(0).value,this.advance();else{const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}s=this.lookahead(0)}return this.match(Q.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,a){const s=this.expression(je[a]);return{type:"Comparator",name:a,children:[t,s]}}parseDotRHS(t){const a=this.lookahead(0);if([Q.TOK_UNQUOTEDIDENTIFIER,Q.TOK_QUOTEDIDENTIFIER,Q.TOK_STAR].includes(a))return this.expression(t);if(a===Q.TOK_LBRACKET)return this.match(Q.TOK_LBRACKET),this.parseMultiselectList();if(a===Q.TOK_LBRACE)return this.match(Q.TOK_LBRACE),this.parseMultiselectHash();const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}parseProjectionRHS(t){if(je[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===Q.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===Q.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===Q.TOK_DOT)return this.match(Q.TOK_DOT),this.parseDotRHS(t);const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==Q.TOK_RBRACKET;){const a=this.expression(0);if(t.push(a),this.lookahead(0)===Q.TOK_COMMA&&(this.match(Q.TOK_COMMA),this.lookahead(0)===Q.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(Q.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],a=[Q.TOK_UNQUOTEDIDENTIFIER,Q.TOK_QUOTEDIDENTIFIER];let s,r,n;for(;;){if(s=this.lookaheadToken(0),!a.includes(s.type))throw new Error(`Expecting an identifier token, got: ${s.type}`);if(r=s.value,this.advance(),this.match(Q.TOK_COLON),n=this.expression(0),t.push({value:n,type:"KeyValuePair",name:r}),this.lookahead(0)===Q.TOK_COMMA)this.match(Q.TOK_COMMA);else if(this.lookahead(0)===Q.TOK_RBRACE){this.match(Q.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const bu=new qm;var ie;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(ie||(ie={}));class Gm{constructor(t){this.TYPE_NAME_TABLE={[ie.TYPE_NUMBER]:"number",[ie.TYPE_ANY]:"any",[ie.TYPE_STRING]:"string",[ie.TYPE_ARRAY]:"array",[ie.TYPE_OBJECT]:"object",[ie.TYPE_BOOLEAN]:"boolean",[ie.TYPE_EXPREF]:"expression",[ie.TYPE_NULL]:"null",[ie.TYPE_ARRAY_NUMBER]:"Array<number>",[ie.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([a])=>Math.abs(a),this.functionAvg=([a])=>{let s=0;for(let r=0;r<a.length;r+=1)s+=a[r];return s/a.length},this.functionCeil=([a])=>Math.ceil(a),this.functionContains=a=>{const[s,r]=a;return s.includes(r)},this.functionEndsWith=a=>{const[s,r]=a;return s.includes(r,s.length-r.length)},this.functionFloor=([a])=>Math.floor(a),this.functionJoin=a=>{const[s,r]=a;return r.join(s)},this.functionKeys=([a])=>Object.keys(a),this.functionLength=([a])=>Ka(a)?Object.keys(a).length:a.length,this.functionMap=a=>{if(!this._interpreter)return[];const s=[],r=this._interpreter,n=a[0],o=a[1];for(let i=0;i<o.length;i+=1)s.push(r.visit(n,o[i]));return s},this.functionMax=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===ie.TYPE_NUMBER)return Math.max(...a);const r=a;let n=r[0];for(let o=1;o<r.length;o+=1)n.localeCompare(r[o])<0&&(n=r[o]);return n},this.functionMaxBy=a=>{const s=a[1],r=a[0],n=this.createKeyFunction(s,[ie.TYPE_NUMBER,ie.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<r.length;c+=1)l=n&&n(r[c]),l!==void 0&&l>o&&(o=l,i=r[c]);return i},this.functionMerge=a=>{let s={};for(let r=0;r<a.length;r+=1){const n=a[r];s=Object.assign(s,n)}return s},this.functionMin=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===ie.TYPE_NUMBER)return Math.min(...a);const r=a;let n=r[0];for(let o=1;o<r.length;o+=1)r[o].localeCompare(n)<0&&(n=r[o]);return n},this.functionMinBy=a=>{const s=a[1],r=a[0],n=this.createKeyFunction(s,[ie.TYPE_NUMBER,ie.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<r.length;c+=1)l=n&&n(r[c]),l!==void 0&&l<o&&(o=l,i=r[c]);return i},this.functionNotNull=a=>{for(let s=0;s<a.length;s+=1)if(this.getTypeName(a[s])!==ie.TYPE_NULL)return a[s];return null},this.functionReverse=([a])=>{if(this.getTypeName(a)===ie.TYPE_STRING){const n=a;let o="";for(let i=n.length-1;i>=0;i-=1)o+=n[i];return o}const r=a.slice(0);return r.reverse(),r},this.functionSort=([a])=>[...a].sort(),this.functionSortBy=a=>{if(!this._interpreter)return[];const s=a[0].slice(0);if(s.length===0)return s;const r=this._interpreter,n=a[1],o=this.getTypeName(r.visit(n,s[0]));if(o!==void 0&&![ie.TYPE_NUMBER,ie.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<s.length;l+=1)i.push([l,s[l]]);i.sort((l,c)=>{const d=r.visit(n,l[1]),u=r.visit(n,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)s[l]=i[l][1];return s},this.functionStartsWith=([a,s])=>a.startsWith(s),this.functionSum=([a])=>a.reduce((s,r)=>s+r,0),this.functionToArray=([a])=>this.getTypeName(a)===ie.TYPE_ARRAY?a:[a],this.functionToNumber=([a])=>{const s=this.getTypeName(a);let r;return s===ie.TYPE_NUMBER?a:s===ie.TYPE_STRING&&(r=+a,!isNaN(r))?r:null},this.functionToString=([a])=>this.getTypeName(a)===ie.TYPE_STRING?a:JSON.stringify(a),this.functionType=([a])=>{switch(this.getTypeName(a)){case ie.TYPE_NUMBER:return"number";case ie.TYPE_STRING:return"string";case ie.TYPE_ARRAY:return"array";case ie.TYPE_OBJECT:return"object";case ie.TYPE_BOOLEAN:return"boolean";case ie.TYPE_EXPREF:return"expref";case ie.TYPE_NULL:return"null";default:return}},this.functionValues=([a])=>Object.values(a),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[ie.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[ie.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[ie.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[ie.TYPE_STRING,ie.TYPE_ARRAY]},{types:[ie.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[ie.TYPE_STRING]},{types:[ie.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[ie.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[ie.TYPE_STRING]},{types:[ie.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[ie.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[ie.TYPE_STRING,ie.TYPE_ARRAY,ie.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[ie.TYPE_EXPREF]},{types:[ie.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[ie.TYPE_ARRAY_NUMBER,ie.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[ie.TYPE_ARRAY]},{types:[ie.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[ie.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[ie.TYPE_ARRAY_NUMBER,ie.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[ie.TYPE_ARRAY]},{types:[ie.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[ie.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[ie.TYPE_STRING,ie.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[ie.TYPE_ARRAY_STRING,ie.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[ie.TYPE_ARRAY]},{types:[ie.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[ie.TYPE_STRING]},{types:[ie.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[ie.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[ie.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[ie.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[ie.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[ie.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[ie.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,a,s){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:a.bind(this),_signature:s}}callFunction(t,a){const s=this.functionTable[t];if(s===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,a,s._signature),s._func.call(this,a)}validateInputSignatures(t,a){for(let s=0;s<a.length;s+=1)if("variadic"in a[s]&&s!==a.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${s+1} must occur last`)}validateArgs(t,a,s){var r,n;let o;this.validateInputSignatures(t,s);const i=s.filter(_=>{var v;return(v=!_.optional)!==null&&v!==void 0?v:!1}).length,l=(n=(r=s[s.length-1])===null||r===void 0?void 0:r.variadic)!==null&&n!==void 0?n:!1,c=a.length<i,d=a.length>s.length,u=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw o=s.length>1,new Error(`ArgumentError: ${t}() takes ${u}${i} argument${o&&"s"||""} but received ${a.length}`);let p,f,g;for(let _=0;_<s.length;_+=1){g=!1,p=s[_].types,f=this.getTypeName(a[_]);let v;for(v=0;v<p.length;v+=1)if(f!==void 0&&this.typeMatches(f,p[v],a[_])){g=!0;break}if(!g&&f!==void 0){const m=p.map(h=>this.TYPE_NAME_TABLE[h]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${_+1} to be type (${m}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,a,s){if(a===ie.TYPE_ANY)return!0;if(a===ie.TYPE_ARRAY_STRING||a===ie.TYPE_ARRAY_NUMBER||a===ie.TYPE_ARRAY){if(a===ie.TYPE_ARRAY)return t===ie.TYPE_ARRAY;if(t===ie.TYPE_ARRAY){let r;a===ie.TYPE_ARRAY_NUMBER?r=ie.TYPE_NUMBER:a===ie.TYPE_ARRAY_STRING&&(r=ie.TYPE_STRING);for(let n=0;n<s.length;n+=1){const o=this.getTypeName(s[n]);if(o!==void 0&&r!==void 0&&!this.typeMatches(o,r,s[n]))return!1}return!0}}else return t===a;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return ie.TYPE_STRING;case"[object Number]":return ie.TYPE_NUMBER;case"[object Array]":return ie.TYPE_ARRAY;case"[object Boolean]":return ie.TYPE_BOOLEAN;case"[object Null]":return ie.TYPE_NULL;case"[object Object]":return t.jmespathType===Q.TOK_EXPREF?ie.TYPE_EXPREF:ie.TYPE_OBJECT;default:return}}createKeyFunction(t,a){if(!this._interpreter)return;const s=this._interpreter;return n=>{const o=s.visit(t,n);if(!a.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${a.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Vm{constructor(){this._rootValue=null,this.runtime=new Gm(this)}search(t,a){return this._rootValue=a,this.visit(t,a)}visit(t,a){let s,r,n,o,i,l,c,d,u,p,f;switch(t.type){case"Field":return a===null?null:Ka(a)?(l=a[t.name],l===void 0?null:l):null;case"Subexpression":for(n=this.visit(t.children[0],a),p=1;p<t.children.length;p+=1)if(n=this.visit(t.children[1],n),n===null)return null;return n;case"IndexExpression":return c=this.visit(t.children[0],a),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(a))return null;let g=t.value;return g<0&&(g=a.length+g),n=a[g],n===void 0&&(n=null),n;case"Slice":if(!Array.isArray(a))return null;const _=[...t.children],v=this.computeSliceParams(a.length,_),[m,h,b]=v;if(n=[],b>0)for(p=m;p<h;p+=b)n.push(a[p]);else for(p=m;p>h;p+=b)n.push(a[p]);return n;case"Projection":if(f=this.visit(t.children[0],a),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)r=this.visit(t.children[1],f[p]),r!==null&&u.push(r);return u;case"ValueProjection":if(f=this.visit(t.children[0],a),!Ka(f))return null;u=[];const w=Object.values(f);for(p=0;p<w.length;p+=1)r=this.visit(t.children[1],w[p]),r!==null&&u.push(r);return u;case"FilterProjection":if(f=this.visit(t.children[0],a),!Array.isArray(f))return null;const y=[],T=[];for(p=0;p<f.length;p+=1)s=this.visit(t.children[2],f[p]),Is(s)||y.push(f[p]);for(let C=0;C<y.length;C+=1)r=this.visit(t.children[1],y[C]),r!==null&&T.push(r);return T;case"Comparator":switch(o=this.visit(t.children[0],a),i=this.visit(t.children[1],a),t.name){case Q.TOK_EQ:n=zr(o,i);break;case Q.TOK_NE:n=!zr(o,i);break;case Q.TOK_GT:n=o>i;break;case Q.TOK_GTE:n=o>=i;break;case Q.TOK_LT:n=o<i;break;case Q.TOK_LTE:n=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return n;case Q.TOK_FLATTEN:const A=this.visit(t.children[0],a);if(!Array.isArray(A))return null;let S=[];for(p=0;p<A.length;p+=1)r=A[p],Array.isArray(r)?S=[...S,...r]:S.push(r);return S;case"Identity":return a;case"MultiSelectList":if(a===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],a));return u;case"MultiSelectHash":if(a===null)return null;u={};let x;for(p=0;p<t.children.length;p+=1)x=t.children[p],u[x.name]=this.visit(x.value,a);return u;case"OrExpression":return s=this.visit(t.children[0],a),Is(s)&&(s=this.visit(t.children[1],a)),s;case"AndExpression":return o=this.visit(t.children[0],a),Is(o)?o:this.visit(t.children[1],a);case"NotExpression":return o=this.visit(t.children[0],a),Is(o);case"Literal":return t.value;case Q.TOK_PIPE:return c=this.visit(t.children[0],a),this.visit(t.children[1],c);case Q.TOK_CURRENT:return a;case Q.TOK_ROOT:return this._rootValue;case"Function":const E=[];for(let C=0;C<t.children.length;C+=1)E.push(this.visit(t.children[C],a));return this.runtime.callFunction(t.name,E);case"ExpressionReference":const $=t.children[0];return $.jmespathType=Q.TOK_EXPREF,$;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,a){let[s,r,n]=a;if(n===null)n=1;else if(n===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=n<0;return s=s===null?o?t-1:0:this.capSliceRange(t,s,n),r=r===null?o?-1:t:this.capSliceRange(t,r,n),[s,r,n]}capSliceRange(t,a,s){let r=a;return r<0?(r+=t,r<0&&(r=s<0?-1:0)):r>=t&&(r=s<0?t-1:t),r}}const Vo=new Vm,Km=ie.TYPE_ANY,Ym=ie.TYPE_ARRAY,Wm=ie.TYPE_ARRAY_NUMBER,Jm=ie.TYPE_ARRAY_STRING,Xm=ie.TYPE_BOOLEAN,Qm=ie.TYPE_EXPREF,Zm=ie.TYPE_NULL,eg=ie.TYPE_NUMBER,tg=ie.TYPE_OBJECT,ag=ie.TYPE_STRING;function sg(e){return bu.parse(e)}function rg(e){return gu.tokenize(e)}const ng=(e,t,a)=>{Vo.runtime.registerFunction(e,t,a)};function og(e,t){const a=bu.parse(t);return Vo.search(a,e)}const ig=Vo,ut={compile:sg,registerFunction:ng,search:og,tokenize:rg,TreeInterpreter:ig,TYPE_ANY:Km,TYPE_ARRAY_NUMBER:Wm,TYPE_ARRAY_STRING:Jm,TYPE_ARRAY:Ym,TYPE_BOOLEAN:Xm,TYPE_EXPREF:Qm,TYPE_NULL:Zm,TYPE_NUMBER:eg,TYPE_OBJECT:tg,TYPE_STRING:ag},Ct=class Ct{static async appendPrompt(t,a){sl(t,LZString.compressToUTF16(JSON.stringify(a))).then(async()=>{Na().then(s=>{s=s.filter(r=>r.indexOf(this.DELIM_PROMPTS)!=-1),s.length>Ct.MAX_PROMPTS_VALS&&Dn(s[0])})}).catch(s=>console.error("~IDB Failed | ",s))}static async appendVIR_products(t){t.forEach(a=>{let s=JSON.stringify({ts:Date.now(),name:a[1]});sl(a[0],LZString.compressToUTF16(s)).then(async()=>{}).catch(r=>console.error("~IDB Failed | ",r))})}static async keys(t,a){Na().then(s=>{s=s.filter(r=>r.indexOf(t)!=-1),a&&a(s)})}static async get(t,a){Im(t).then(s=>{try{s=JSON.parse(LZString.decompressFromUTF16(s))}catch{}finally{a&&a(s)}})}static async entries(t,a){Bm().then(s=>{s=s.filter(r=>r[0].indexOf(t)!=-1),s=s.map(r=>{try{r[1]=JSON.parse(LZString.decompressFromUTF16(r[1]))}catch{}finally{}return r}),a&&a(s)})}static compr(t){return t}static decompr(t){return t}static async act(t,a,s){let r="";switch(t){case"PROMPTS_COUNT":Na().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),r=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,r&&s&&s(r)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":Na().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(Ct.DELIM_PROMPTS)[0]==a&&Dn(i)})}),r="The Prompt history has been removed for UPI: "+a,console.log("~ PROMPTS_CLEAR ------ | ",r);break;case"VIR_COUNT":Na().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),r=`There are ${o.length} VNR names in local IDB storage.`,r&&s&&s(r)});break;case"VIR_CLEAR":let n=0;await Na().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(Ct.DELIM_VIR)[0]==a&&(n++,Dn(i))})}),r=`The VNR Names have been removed for UPI: ${a} (Total Deleted: ${n})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),r="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",r),r&&s&&s(r)}};Ct.MAX_TYPEAHEAD_ROWS=14,Ct.MAX_PROMPTS_VALS=50,Ct.DELIM_PROMPTS="_",Ct.DELIM_VIR="-",Ct.DELIM_SNDX="|";let Pa=Ct;const ve=Sh("AppState",()=>{const e=gt(),t="DEV",a="BMA Tourney v0.0.5 ",s="#app",r=Jt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let n=Jt([]),o=Jt([]);const i=x=>{n.push(x),n.length>10&&(n.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${n.length}`)},l=x=>{o.push(x),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const x=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",x),x)try{const E=JSON.parse(x);return console.log("[appState] Parsed session_user:",E),E}catch(E){console.error("Failed to parse session_user from localStorage:",E)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Ke({session_app:{online:!0,route:"",version:a+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Ke({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",Pa.compr(JSON.stringify(u.value.features)));else{let x=Pa.decompr(localStorage.getItem("feature_flags"));x=Object.assign(u.value.features,JSON.parse(x));for(let E in x)typeof u.value?.env_override[t][E]<"u"&&(x[E]=u.value.env_override[t][E]);localStorage.setItem("feature_flags",Pa.compr(JSON.stringify(u.value.features=x)))}},f=()=>{const x=document.querySelector(s);if(x){const E=x.dataset;for(let $ in E){const C=$.replace(/^sync/,""),R=Object.keys(u.value.features).find(U=>U.toLowerCase()===C.toLowerCase());if(R){const U=u.value.features[R]?.state;U&&(E[$]=U)}}}},g=(x="Theme",E={state:"dark"})=>{const $=document.querySelector(s);$&&($.dataset["sync"+x]=E.state)},_=(x="Theme",E={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&E){let C=JSON.parse(Pa.decompr(localStorage.getItem("feature_flags")));C[x]={state:E.state},localStorage.setItem("feature_flags",Pa.compr(JSON.stringify(u.value.features=C))),g(x,E),ce.publish("APP.ROUTE_SYNC",`{ "${x}": ${JSON.stringify(E)}}`)}},v=x=>{const E=u.value?.features?.Lang?.state;let $=b.value.microcopy.language.filter(C=>C.code==E)[0]?.copy;if($=$.filter(C=>C[0]==x)[0],$)return $[1]},m=(x=":version")=>{let[E,$,C]=x.split(" ");switch(E=E.toLocaleLowerCase(),C=="true"&&(C=!0),C=="false"&&(C=!1),E){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":_($,{state:C});break;case":route":neodigmToast.q(`route ${$}`,"brand"),e.push({name:$});break}};p(),f();const h=Jt({designer:"guided_tour",notifications:{unread:0}}),b=Ke({sports:Ve,microcopy:Dm.getMeta()}),w=it(()=>d.value.session_user.fname+" "+d.value.session_user.lname),y=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},T=()=>{localStorage.removeItem("session_user")};function A(x){return d.value.session_user.authenticated=!0,d.value.session_user.token=x,y(),d.value.session_app.route="chat"}function S(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",T(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:h,appMeta:b,appSession:d,clearSessionUser:T,concatFirstLast:w,coreBetSlip:o,coreTourn:n,doCLI:m,doLogin:A,doLogout:S,hierTopics:r,i18n:v,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:y,setFeaturePersistPub:_}}),Nn="mvvBrand",lg=400,Es={scanIntervalId:null,processedElements:new WeakSet,init(){const t=new URLSearchParams(window.location.search).get("brand");t!==null&&(t==="null"||t===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(t)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(e){if(e)try{localStorage.setItem(Nn,e),console.log("[BrandManager] Brand token set:",e)}catch(t){console.error("[BrandManager] Failed to set brand:",t)}},getBrand(){try{return localStorage.getItem(Nn)}catch(e){return console.error("[BrandManager] Failed to get brand:",e),null}},clearBrand(){localStorage.removeItem(Nn),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const e=this.getBrand();return e?{"x-m5t-brand":e}:{}},hydrateBrandElements(){const e=this.getBrand();if(!e)return;const t=document.querySelectorAll("[data-mvv-brand]");t.forEach(a=>{a.getAttribute("data-mvv-brand")==="token"&&(a.textContent=e)}),t.length>0&&console.log(`[BrandManager] Hydrated ${t.length} brand elements with token:`,e)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},lg),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const e=this.getBrand();if(!e)return;const t=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(a=>{t.push(a)}),document.querySelectorAll("*").forEach(a=>{a.shadowRoot&&a.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{t.push(s)})}),t.forEach(a=>{if(this.processedElements.has(a))return;const s=a.getAttribute("src");if(s&&!s.includes("&brand=")){const r=`${s}&brand=${e}`;a.setAttribute("src",r),this.processedElements.add(a),console.log("[BrandManager] Updated src for element:",a)}})}},Je=class Je{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Je.setTJO(null),location.reload()}static async doSignin(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",s)).json();n.ok?(typeof mvvLegit<"u"&&mvvLegit&&n?.accessToken&&mvvLegit.doSignin(n?.accessToken),a&&a(n)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",s)).json();if(n.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),a&&a(n);else{const o=n?.error||n?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),a&&a(n)}}static async checkUserName(t,a=null){const s={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",s)).json();return a&&a(n),n}static async resetHash(t,a,s=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const r=typeof neodigmUtils<"u"?neodigmUtils.genHash(a):a,n={method:"POST",body:JSON.stringify({guid:t,hash:r}),headers:Je.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",n)).json();s&&s(i)}static genHeaders(t={}){let a={};a.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),a.Authorization="Bearer expired",a["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(a.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(a.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(a.company=SessionAcctEntity.oEntities.data.entity.company);const s=Es.getBrandHeader();return Object.assign(a,s),a}static async fetchTournaments(t=null){const a={method:"GET",headers:Je.genHeaders()},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",a)).json();return t&&t(r),r}static async fetchBetSlips(t,a="",s="",r=null){let n=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;a&&(n+=`/${a}`),a&&s&&(n+=`/${s}`);const o={method:"GET",headers:Je.genHeaders()},l=await(await fetch(this.API_baseURI+n,o)).json();return r&&r(l),l}static async fetchLeaderboard(t,a="",s=null){let r=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;a&&(r+=`&user=${a}`);const n={method:"GET",headers:Je.genHeaders()},i=await(await fetch(this.API_baseURI+r,n)).json();return s&&s(i),i}static async fetchGlobalLeaderboard(t=null){const a=`/m5t/${this.API_ver}/coreLeaderboard`,s={method:"GET",headers:Je.genHeaders()},n=await(await fetch(this.API_baseURI+a,s)).json();return t&&t(n),n}static async fetchAllTimeLeaderboard(t="ALL",a=100,s="td",r=null){const n=new URLSearchParams({sport:t,limit:String(a),sort:s}),o=`/m5t/${this.API_ver}/coreLeaderboard/alltime?${n.toString()}`,i={method:"GET",headers:Je.genHeaders()},c=await(await fetch(this.API_baseURI+o,i)).json();return r&&r(c),c}static async postBetSlips(t,a=null){const s=t.map(n=>{const o={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),r=await Promise.all(s);return a&&a(r),r}static async fetchPromotions(t=null){const a={method:"GET",headers:Je.genHeaders()},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",a)).json();return t&&t(r),r}};Je.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Je.API_ver="v5",Je.jsState={},Je.jsMeta={},Je.jsTJO=null;let Ae=Je;const Ya={shootConfetti(){if(typeof confetti=="function"){let s=function(r,n){confetti({...t,...n,particleCount:Math.floor(e*r)})};var a=s,e=200,t={origin:{y:.7}};s(.25,{zIndex:304,spread:26,startVelocity:55}),s(.2,{zIndex:304,spread:60}),s(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),s(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),s(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let a=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(e+"Z"));const s={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return a.toLocaleString(void 0,{...s,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let a={};for(const s in t)e[s]&&t[s]!=e[s]&&(a[s]=e[s]);return Object.keys(a).length>0?a:t},genLorumIpsum(e=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},ga=(e,t)=>{const a=e.__vccOpts||e;for(const[s,r]of t)a[s]=r;return a},cg={class:"auth-page"},dg={__name:"splash_route",setup(e){const t=gt(),a=fu();return ve(),setTimeout(()=>{a&&a.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(s,r)=>(Le(),He("div",cg,[...r[0]||(r[0]=[ma('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),G("div",{class:"auth-page-right"},[G("div",{class:"auth-card splash-content"},[G("p",{class:"splash-message"},"Loading Tournaments..."),G("br"),G("br"),G("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[G("div")])])],-1)])]))}},ol=ga(dg,[["__scopeId","data-v-994bad53"]]);class ug{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(a=>{let s=!1;for(const r of a){if(r.attributeName==="data-sync-theme"){const n=t.getAttribute("data-sync-theme")||"dark";n!==this._theme&&(this._theme=n,s=!0)}if(r.attributeName==="data-sync-motif"){const n=t.getAttribute("data-sync-motif")||"brand";n!==this._motif&&(this._motif=n,s=!0)}if(r.attributeName==="data-sync-lang"){const n=t.getAttribute("data-sync-lang")||"en";n!==this._lang&&(this._lang=n,s=!0)}}s&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(a){console.warn("[BMAThemeResolver] Listener error:",a)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const Ee=new ug().init(),_u={mobile:"(orientation: portrait), (max-width: 768px)"};function De(){return`
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
  `}function ba(){return`
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
  `}class pg extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ee.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=Ee.theme;let a=this.getAttribute("data-sport-group")||"Soccer",s,r;a==="Multi"?(s="Multi",r=`var(--sport-icon__Multi--${t})`):(s=a.replaceAll(" ","_"),r=`var(--sport-icon__${s}--${t})`),this.shadowRoot.innerHTML=`
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

        :host([data-sport-group="${a}"]) {
          background-image: ${r};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",pg);class fg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Ee.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,a={}){const s=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...a}});this.dispatchEvent(s)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const a=t.target.closest(".btn-info"),s=t.target.closest(".btn-join"),r=t.target.closest(".btn-play"),n=t.target.closest("bma-sport-icon");if(a){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(s){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(r){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(n){t.stopPropagation();const o=n.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,a,s){a!==s&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const a=t.scrollHeight-t.clientHeight,s=this.getAttribute("data-compact")==="true";!s&&a>2?this.setAttribute("data-compact","true"):s&&a<-10&&this.removeAttribute("data-compact")})}getTheme(){return Ee.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);return Array.isArray(a)?a.find(r=>Array.isArray(r))?.length||"0":a?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);return Array.isArray(a)?a.find(r=>Array.isArray(r))||[]:a?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);if(Array.isArray(a)){const s=a.find(n=>n&&typeof n=="object"&&!Array.isArray(n));return{current:a.find(n=>Array.isArray(n))?.length||0,max:parseInt(s?.max)||100}}return{current:a?.guids?.length||0,max:a?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;return a?this.entitiesGuids.includes(a):!1}getUserBadge(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;const s=this.getAttribute("data-bma-tourn-tags");if(!s)return null;try{const r=JSON.parse(s);if(!Array.isArray(r))return null;const n=r.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===a&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[a]&&o[a].startsWith("--badge__ribbon--"))));return n&&(n.badge||n[a])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const a=t.match(/--badge__ribbon--(\w+)/);return a?a[1]:""}getSportInfo(t){const a=Ve.find(s=>s.key===t);return a?{title:a.title,description:a.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(s=>{const r=s.title||"Match";let n="TBD";if(s.scheduled_at)try{n=new Date(s.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{n=s.scheduled_at}return`  ${r} @ ${n}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const a=JSON.parse(t);return Array.isArray(a)?a.map(s=>typeof s=="object"&&s.sport_key?s.sport_key:s):[a]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const a=Math.min(t.length,3);let s="";for(let r=0;r<a;r++){const n=t[r].key,o=Ve.find(l=>l.key===n),i=o?o.group:"default";s+=`<bma-sport-icon sport="${n}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(s+=`<span class="sport-count">+${t.length-3}</span>`),s}render(){const t=this.getTheme(),a=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        ${ba()}
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
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",fg);class hg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,a,s){if(a!==s){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Ya.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",a=parseFloat(t);return isNaN(a)?"0.00":a.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{ce.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const a=this.shadowRoot.querySelector(".content_stake_text input");a&&a.addEventListener("input",s=>{const r=s.target.value;this.setAttribute("data-stake",r)})}render(){this.shadowRoot.innerHTML=`
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",hg);class mg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing odds_markets:",a),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Ee.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing scoreboard:",a),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const a=Ve.find(s=>s.key===t);return a?a.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing tournament tags:",a),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const s=this.scoreboard;if(!s||!s.time_remaining)return!1;const r=s.time_remaining.toLowerCase();return r==="in progress"||r.includes("q")||r.includes("half")||r.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Ee.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const a=this.shadowRoot?.querySelector(".countdown");a&&(a.textContent=t)}attributeChangedCallback(t,a,s){a!==s&&this.render()}formatDate(t){if(!t)return"TBD";let a=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z")),a.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,a=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&a.setTime(new Date(this.scheduledAt+"Z").getTime());const s=a-t;if(s<=0)return"";const r=Math.floor(s/(1e3*60*60)),n=Math.floor(s%(1e3*60*60)/(1e3*60));return r>24?`${Math.floor(r/24)}d ${r%24}h`:r>0?`${r}h ${n}m`:n>5?`${n} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const a=this.scoreboard;if(a&&a.time_remaining){const s=a.time_remaining.toLowerCase();if(s==="final")return{type:"final",text:"Final",color:"#969696"};if(s==="in progress"||s.includes("q")||s.includes("half")||s.includes("period")){const r=a.home_score!==void 0&&a.home_score!==null||a.away_score!==void 0&&a.away_score!==null,n=a.period!==void 0&&a.period!==null&&a.period!==0;if(r||n)return{type:"live",text:a.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let s=this.scheduledAt;if(!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z"),new Date(s)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,a,s,r,n){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:a,team:s,price:r,point:n,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,a,s,r,n=!1){if(!s)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const o=s.price,i=s.point;let l="";return t==="spread"?l=`${i>0?`+${i}`:i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?l=o:t==="total"&&(l=`${r}${i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${n?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${a}"
                    data-price="${o}"
                    ${i?`data-point="${i}"`:""}
                    ${n?'data-disabled="true"':""}>
            ${l}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const a=this.isMatchInProgressLocked(),s=this.isDisabled||a,r=this.getGameStatus(),n=this.scoreboard,o=n?.home_score||0,i=n?.away_score||0,l=r?.type==="live"||r?.type==="final",c=parseInt(o),d=parseInt(i),u=r?.type==="final",p=r?.type==="live",f=l&&u&&c>d,g=l&&u&&d>c,_=l&&p&&c>d,v=l&&p&&d>c,m=t?.spreads?.outcomes?.find(A=>A.name===this.homeTeam),h=t?.spreads?.outcomes?.find(A=>A.name===this.awayTeam),b=t?.h2h?.outcomes?.find(A=>A.name===this.homeTeam),w=t?.h2h?.outcomes?.find(A=>A.name===this.awayTeam),y=t?.totals?.outcomes?.find(A=>A.name==="Over"),T=t?.totals?.outcomes?.find(A=>A.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                ${De()}
                ${ba()}

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
                        <div class="team team--home ${f?"team--winner":""} ${g?"team--loser":""}">
                            <span class="team-name">${this.homeTeam}</span>
                            ${l?`<span class="team-score ${_?"score--leading":""} ${v?"score--trailing":""}">${o}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","home",m,null,s)}
                                ${this.renderButton("money","home",b,null,s)}
                                ${this.renderButton("total","under",T,"U",s)}
                            </div>
                        `}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${g?"team--winner":""} ${f?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${l?`<span class="team-score ${v?"score--leading":""} ${_?"score--trailing":""}">${i}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","away",h,null,s)}
                                ${this.renderButton("money","away",w,null,s)}
                                ${this.renderButton("total","over",y,"O",s)}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(A=>{const S=A.dataset.betType,x=A.dataset.team,E=A.dataset.price,$=A.dataset.point||null;A.addEventListener("click",C=>this.handleButtonClick(C,S,x,E,$))})}}customElements.define("bma-bet-match-card",mg);class gg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Ee.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,a,s){a!==s&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(a){return console.warn("[bma-match-status] Failed to parse scoreboard data:",a),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=Ve.find(a=>a.key===this.sportId);return t?t.group:""}get theme(){return Ee.theme}get isDark(){return Ee.isDark}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let a=this.scheduledAt;!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a=a+"Z");const r=new Date(a)-t;if(r<=0)return"";const n=Math.floor(r/(1e3*60*60)),o=Math.floor(r%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,a=this.homeScore!==null&&this.awayScore!==null;let s=!1;if(this.scheduledAt){let i=this.scheduledAt;!i.includes("Z")&&!i.match(/[+-]\d{2}:\d{2}$/)&&(i=i+"Z");const l=new Date(i),c=new Date(Date.now()-300*1e3);s=l<c}let r="UPCOMING",n=null;if(t?.time_remaining){const i=t.time_remaining;i==="Final"?(r="FINAL",n="Final"):i==="In Progress"?(r="IN_PROGRESS",n="In Progress"):(r="IN_PROGRESS",n=i)}else a&&s?(r="FINAL",n="Final"):(r="UPCOMING",n="Upcoming");const o=r==="UPCOMING"?this.getCountdownText():"";return{status:r,timeRemaining:n,countdown:o}}render(){const{status:t,timeRemaining:a,countdown:s}=this.getMatchStatus(),r=this.homeScore!==null&&this.awayScore!==null,n=this.scheduledAt?Ya.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=parseInt(this.homeScore),i=parseInt(this.awayScore),l=r&&t==="FINAL"&&o>i,c=r&&t==="FINAL"&&i>o;this.shadowRoot.innerHTML=`
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
          ${a||t}${s?`<span class="countdown-badge">${s}</span>`:""}
        </span>
      </div>
      <div class="match-details">
        <div class="detail-row">Scheduled: ${n}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
      </div>
    `}}customElements.define("bma-match-status",gg);class ca extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",a),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-leaderboard-card] Error parsing user_matches:",a),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Ee.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&(this.render(),this.attachEventListeners())}toggleExpanded(){ca.currentlyExpanded&&ca.currentlyExpanded!==this&&ca.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),a.classList.add("expanded"),ca.currentlyExpanded=this):(t.classList.remove("open"),a.classList.remove("expanded"),ca.currentlyExpanded===this&&(ca.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),a&&a.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",a=>{a.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let a=0,s=0,r=0,n=0,o=0;return t.forEach(i=>{const l=i.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?a++:s++:(r++,n+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:a,losses:s,pending:r,total:a+s+r,pendingStakes:n,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,a=this.userMatches,s=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const r=t.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(s)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(r.length===0){if(!s){const l=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);if(l>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${l} pending bet${l!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const n={};a.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(n[c]=l)});const o={};r.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=n[c];if(d){o[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=Ve.find(f=>f.key===u);o[c].sportKey=p?.group||"default"}o[c].bets.push(l)});let i="";if(Object.keys(o).forEach(l=>{const c=o[l],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;i+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const g=f.bet||[];if(g.length===0)return;const _=g[0];Object.keys(_).filter(m=>m!=="short_title").forEach(m=>{const h=_[m];if(!h||typeof h!="object")return;const b=(h.type||"").toUpperCase(),w=parseFloat(h.stake||h.wager||0).toFixed(2),y=h.odds||"-",T=y>0?`+${y}`:`${y}`,A=parseFloat(h.payout||0).toFixed(2),S=h.reconciled===!0;let x="pending",E="Pending";S&&Number(A)>0?(x="won",E="Won"):S&&Number(A)===0?(x="lost",E="Lost"):S&&(x="reconciled",E="Settled"),i+=`<div class="bet-item bet-item--${x}">
                        <div class="bet-item__header">
                            <span class="bet-item__team">${m}</span>
                            <span class="bet-status-badge ${x}">${E}</span>
                        </div>
                        <div class="bet-item__detail">
                            <span>${b}</span>
                            <span>Stake: $${w}</span>
                            <span>Odds: ${T}</span>
                            <span class="${x==="won"?"payout-win":x==="lost"?"payout-loss":""}">Payout: $${A}</span>
                        </div>
                    </div>`})})}),!s){const l=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);l>0&&(i+=`<p class="hidden-bets-note">+ ${l} pending bet${l!==1?"s":""} hidden until settled</p>`)}return i}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",a=this.unqualified?"leaderboard-card--unqualified":"",s=parseFloat(this.startingDollars||0),r=this.combinedBetslips;let n=0,o=0,i=0;r.forEach(_=>{const v=_.bet||[];if(v.length===0)return;const m=v[0];Object.keys(m).filter(h=>h!=="short_title").forEach(h=>{const b=m[h];if(!b||typeof b!="object")return;const w=parseFloat(b.stake||0),y=parseFloat(b.payout||0);n+=w,b.reconciled===!0?i+=y:o+=w})});const l=Math.max(0,s-n),c=s-n+o+i,d=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",u=c-s,p=u>=0?"+":"",f=u>0?"profit-up":u<0?"profit-down":"profit-even",g=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${De()}
                ${ba()}

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

            <div class="leaderboard-card ${t} ${a}">
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
                        <div class="kpi-card__value">${g.wins}W - ${g.losses}L</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">At Risk</div>
                        <div class="kpi-card__value ${g.pending>0?"kpi-card__value--risk":"kpi-card__value--none"}">${g.pending>0?"TD$ "+g.pendingStakes.toFixed(0):"TD$ 0"}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Max Win</div>
                        <div class="kpi-card__value ${g.pending>0?"kpi-card__value--max-win":"kpi-card__value--none"}">${g.pending>0?"TD$ "+g.pendingMaxPayout.toFixed(0):"TD$ 0"}</div>
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
        `}}customElements.define("bma-leaderboard-card",ca);class vu{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:a,scope:s}=t.Bet,{home_team_id:r,home_team_score:n,away_team_id:o,away_team_score:i}=t.Match,l=a?.toUpperCase()||"",c=parseFloat(n)||0,d=parseFloat(i)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${r} (${c})`,away:`${o} (${d})`,scope:s}),l){case"MONEY":return this._evaluateMoneyline(s.team_id,r,o,c,d);case"SPREAD":return this._evaluateSpread(s.team_id,s.point,r,o,c,d);case"TOTAL":return this._evaluateTotal(s.over,s.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,a,s,r,n){const o=t===a,i=t===s;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=r>n,c=n>r;if(r===n)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,a,s,r,n,o){const i=t===s,l=t===r;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(a)||0;let d=n,u=o;i?d=n+c:u=o+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const _=i&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${_?"WON":"LOST"}`),_}static _evaluateTotal(t,a,s,r){const n=s+r,o=t&&t!=="";if(!o&&!(a&&a!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:a);if(n===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=n>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${n}) - ${c?"WON":"LOST"}`)):(c=n<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${n}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:a,odds:s,stake:r}=t.Bet,n=a?.toUpperCase()||"",o=parseFloat(s)||0,i=parseFloat(r)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(n){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",n),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,a){let s=0;return t>0?s=a*(t/100):t<0?s=a/(Math.abs(t)/100):s=0,a+s}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function il(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Ko(e={},t={}){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(s=>a.indexOf(s)<0).forEach(s=>{typeof e[s]>"u"?e[s]=t[s]:il(t[s])&&il(e[s])&&Object.keys(t[s]).length>0&&Ko(e[s],t[s])})}const yu={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Dt(){const e=typeof document<"u"?document:{};return Ko(e,yu),e}const bg={document:yu,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function at(){const e=typeof window<"u"?window:{};return Ko(e,bg),e}function _g(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function vg(e){const t=e;Object.keys(t).forEach(a=>{try{t[a]=null}catch{}try{delete t[a]}catch{}})}function wu(e,t=0){return setTimeout(e,t)}function Hr(){return Date.now()}function yg(e){const t=at();let a;return t.getComputedStyle&&(a=t.getComputedStyle(e,null)),!a&&e.currentStyle&&(a=e.currentStyle),a||(a=e.style),a}function wg(e,t="x"){const a=at();let s,r,n;const o=yg(e);return a.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(i=>i.replace(",",".")).join(", ")),n=new a.WebKitCSSMatrix(r==="none"?"":r)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=n.toString().split(",")),t==="x"&&(a.WebKitCSSMatrix?r=n.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),t==="y"&&(a.WebKitCSSMatrix?r=n.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function Bs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function xg(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function ot(...e){const t=Object(e[0]);for(let a=1;a<e.length;a+=1){const s=e[a];if(s!=null&&!xg(s)){const r=Object.keys(Object(s)).filter(n=>n!=="__proto__"&&n!=="constructor"&&n!=="prototype");for(let n=0,o=r.length;n<o;n+=1){const i=r[n],l=Object.getOwnPropertyDescriptor(s,i);l!==void 0&&l.enumerable&&(Bs(t[i])&&Bs(s[i])?s[i].__swiper__?t[i]=s[i]:ot(t[i],s[i]):!Bs(t[i])&&Bs(s[i])?(t[i]={},s[i].__swiper__?t[i]=s[i]:ot(t[i],s[i])):t[i]=s[i])}}}return t}function Ia(e,t,a){e.style.setProperty(t,a)}function xu({swiper:e,targetPosition:t,side:a}){const s=at(),r=-e.translate;let n=null,o;const i=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const l=t>r?"next":"prev",c=(u,p)=>l==="next"&&u>=p||l==="prev"&&u<=p,d=()=>{o=new Date().getTime(),n===null&&(n=o);const u=Math.max(Math.min((o-n)/i,1),0),p=.5-Math.cos(u*Math.PI)/2;let f=r+p*(t-r);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[a]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:f})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(d)};d()}function Rt(e,t=""){const a=at(),s=[...e.children];return a.HTMLSlotElement&&e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),t?s.filter(r=>r.matches(t)):s}function Tg(e,t){const a=[t];for(;a.length>0;){const s=a.shift();if(e===s)return!0;a.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function Sg(e,t){const a=at();let s=t.contains(e);return!s&&a.HTMLSlotElement&&t instanceof HTMLSlotElement&&(s=[...t.assignedElements()].includes(e),s||(s=Tg(e,t))),s}function jr(e){try{console.warn(e);return}catch{}}function Ur(e,t=[]){const a=document.createElement(e);return a.classList.add(...Array.isArray(t)?t:_g(t)),a}function Eg(e,t){const a=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;t?s.matches(t)&&a.push(s):a.push(s),e=s}return a}function kg(e,t){const a=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;t?s.matches(t)&&a.push(s):a.push(s),e=s}return a}function da(e,t){return at().getComputedStyle(e,null).getPropertyValue(t)}function qr(e){let t=e,a;if(t){for(a=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(a+=1);return a}}function Tu(e,t){const a=[];let s=e.parentElement;for(;s;)t?s.matches(t)&&a.push(s):a.push(s),s=s.parentElement;return a}function wo(e,t,a){const s=at();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function zt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function ll(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:a=>a}).createHTML(t):e.innerHTML=t}let In;function Ag(){const e=at(),t=Dt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Su(){return In||(In=Ag()),In}let Bn;function Pg({userAgent:e}={}){const t=Su(),a=at(),s=a.navigator.platform,r=e||a.navigator.userAgent,n={ios:!1,android:!1},o=a.screen.width,i=a.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=r.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=s==="Win32";let f=s==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&g.indexOf(`${o}x${i}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!p&&(n.os="android",n.android=!0),(c||u||d)&&(n.os="ios",n.ios=!0),n}function Eu(e={}){return Bn||(Bn=Pg(e)),Bn}let Fn;function Cg(){const e=at(),t=Eu();let a=!1;function s(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(s()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));a=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),n=s(),o=n||r&&t.ios;return{isSafari:a||n,needPerspectiveFix:a,need3dFix:o,isWebView:r}}function ku(){return Fn||(Fn=Cg()),Fn}function Og({swiper:e,on:t,emit:a}){const s=at();let r=null,n=null;const o=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},i=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(d=>{n=s.requestAnimationFrame(()=>{const{width:u,height:p}=e;let f=u,g=p;d.forEach(({contentBoxSize:_,contentRect:v,target:m})=>{m&&m!==e.el||(f=v?v.width:(_[0]||_).inlineSize,g=v?v.height:(_[0]||_).blockSize)}),(f!==u||g!==p)&&o()})}),r.observe(e.el))},l=()=>{n&&s.cancelAnimationFrame(n),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},c=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){i();return}s.addEventListener("resize",o),s.addEventListener("orientationchange",c)}),t("destroy",()=>{l(),s.removeEventListener("resize",o),s.removeEventListener("orientationchange",c)})}function $g({swiper:e,extendParams:t,on:a,emit:s}){const r=[],n=at(),o=(c,d={})=>{const u=n.MutationObserver||n.WebkitMutationObserver,p=new u(f=>{if(e.__preventObserver__)return;if(f.length===1){s("observerUpdate",f[0]);return}const g=function(){s("observerUpdate",f[0])};n.requestAnimationFrame?n.requestAnimationFrame(g):n.setTimeout(g,0)});p.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),r.push(p)},i=()=>{if(e.params.observer){if(e.params.observeParents){const c=Tu(e.hostEl);for(let d=0;d<c.length;d+=1)o(c[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},l=()=>{r.forEach(c=>{c.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",i),a("destroy",l)}var Mg={on(e,t,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const r=a?"unshift":"push";return e.split(" ").forEach(n=>{s.eventsListeners[n]||(s.eventsListeners[n]=[]),s.eventsListeners[n][r](t)}),s},once(e,t,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function r(...n){s.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(s,n)}return r.__emitterProxy=t,s.on(e,r,a)},onAny(e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const s=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[s](e),a},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off(e,t){const a=this;return!a.eventsListeners||a.destroyed||!a.eventsListeners||e.split(" ").forEach(s=>{typeof t>"u"?a.eventsListeners[s]=[]:a.eventsListeners[s]&&a.eventsListeners[s].forEach((r,n)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&a.eventsListeners[s].splice(n,1)})}),a},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let a,s,r;return typeof e[0]=="string"||Array.isArray(e[0])?(a=e[0],s=e.slice(1,e.length),r=t):(a=e[0].events,s=e[0].data,r=e[0].context||t),s.unshift(r),(Array.isArray(a)?a:a.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(i=>{i.apply(r,[o,...s])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(i=>{i.apply(r,s)})}),t}};function Rg(){const e=this;let t,a;const s=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=s.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?a=e.params.height:a=s.clientHeight,!(t===0&&e.isHorizontal()||a===0&&e.isVertical())&&(t=t-parseInt(da(s,"padding-left")||0,10)-parseInt(da(s,"padding-right")||0,10),a=a-parseInt(da(s,"padding-top")||0,10)-parseInt(da(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(a)&&(a=0),Object.assign(e,{width:t,height:a,size:e.isHorizontal()?t:a}))}function Lg(){const e=this;function t(E,$){return parseFloat(E.getPropertyValue(e.getDirectionLabel($))||0)}const a=e.params,{wrapperEl:s,slidesEl:r,rtlTranslate:n,wrongRTL:o}=e,i=e.virtual&&a.virtual.enabled,l=i?e.virtual.slides.length:e.slides.length,c=Rt(r,`.${e.params.slideClass}, swiper-slide`),d=i?e.virtual.slides.length:c.length;let u=[];const p=[],f=[];let g=a.slidesOffsetBefore;typeof g=="function"&&(g=a.slidesOffsetBefore.call(e));let _=a.slidesOffsetAfter;typeof _=="function"&&(_=a.slidesOffsetAfter.call(e));const v=e.snapGrid.length,m=e.slidesGrid.length,h=e.size-g-_;let b=a.spaceBetween,w=-g,y=0,T=0;if(typeof h>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*h:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-g-_,c.forEach(E=>{n?E.style.marginLeft="":E.style.marginRight="",E.style.marginBottom="",E.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(Ia(s,"--swiper-centered-offset-before",""),Ia(s,"--swiper-centered-offset-after","")),a.cssMode&&(Ia(s,"--swiper-slides-offset-before",`${g}px`),Ia(s,"--swiper-slides-offset-after",`${_}px`));const A=a.grid&&a.grid.rows>1&&e.grid;A?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let S;const x=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(E=>typeof a.breakpoints[E].slidesPerView<"u").length>0;for(let E=0;E<d;E+=1){S=0;const $=c[E];if(!($&&(A&&e.grid.updateSlide(E,$,c),da($,"display")==="none"))){if(i&&a.slidesPerView==="auto")a.virtual.slidesPerViewAutoSlideSize&&(S=a.virtual.slidesPerViewAutoSlideSize),S&&$&&(a.roundLengths&&(S=Math.floor(S)),$.style[e.getDirectionLabel("width")]=`${S}px`);else if(a.slidesPerView==="auto"){x&&($.style[e.getDirectionLabel("width")]="");const C=getComputedStyle($),R=$.style.transform,U=$.style.webkitTransform;if(R&&($.style.transform="none"),U&&($.style.webkitTransform="none"),a.roundLengths)S=e.isHorizontal()?wo($,"width"):wo($,"height");else{const W=t(C,"width"),ae=t(C,"padding-left"),Y=t(C,"padding-right"),V=t(C,"margin-left"),X=t(C,"margin-right"),H=C.getPropertyValue("box-sizing");if(H&&H==="border-box")S=W+V+X;else{const{clientWidth:D,offsetWidth:j}=$;S=W+ae+Y+V+X+(j-D)}}R&&($.style.transform=R),U&&($.style.webkitTransform=U),a.roundLengths&&(S=Math.floor(S))}else S=(h-(a.slidesPerView-1)*b)/a.slidesPerView,a.roundLengths&&(S=Math.floor(S)),$&&($.style[e.getDirectionLabel("width")]=`${S}px`);$&&($.swiperSlideSize=S),f.push(S),a.centeredSlides?(w=w+S/2+y/2+b,y===0&&E!==0&&(w=w-h/2-b),E===0&&(w=w-h/2-b),Math.abs(w)<1/1e3&&(w=0),a.roundLengths&&(w=Math.floor(w)),T%a.slidesPerGroup===0&&u.push(w),p.push(w)):(a.roundLengths&&(w=Math.floor(w)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&u.push(w),p.push(w),w=w+S+b),e.virtualSize+=S+b,y=S,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,h)+_,n&&o&&(a.effect==="slide"||a.effect==="coverflow")&&(s.style.width=`${e.virtualSize+b}px`),a.setWrapperSize&&(s.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),A&&e.grid.updateWrapperSize(S,u),!a.centeredSlides){const E=a.slidesPerView!=="auto"&&a.slidesPerView%1!==0,$=a.snapToSlideEdge&&!a.loop&&(a.slidesPerView==="auto"||E);let C=u.length;if($){let U;if(a.slidesPerView==="auto"){U=1;let W=0;for(let ae=f.length-1;ae>=0&&(W+=f[ae]+(ae<f.length-1?b:0),W<=h);ae-=1)U=f.length-ae}else U=Math.floor(a.slidesPerView);C=Math.max(d-U,0)}const R=[];for(let U=0;U<u.length;U+=1){let W=u[U];a.roundLengths&&(W=Math.floor(W)),$?U<=C&&R.push(W):u[U]<=e.virtualSize-h&&R.push(W)}u=R,Math.floor(e.virtualSize-h)-Math.floor(u[u.length-1])>1&&($||u.push(e.virtualSize-h))}if(i&&a.loop){const E=f[0]+b;if(a.slidesPerGroup>1){const $=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),C=E*a.slidesPerGroup;for(let R=0;R<$;R+=1)u.push(u[u.length-1]+C)}for(let $=0;$<e.virtual.slidesBefore+e.virtual.slidesAfter;$+=1)a.slidesPerGroup===1&&u.push(u[u.length-1]+E),p.push(p[p.length-1]+E),e.virtualSize+=E}if(u.length===0&&(u=[0]),b!==0){const E=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");c.filter(($,C)=>!a.cssMode||a.loop?!0:C!==c.length-1).forEach($=>{$.style[E]=`${b}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let E=0;f.forEach(C=>{E+=C+(b||0)}),E-=b;const $=E>h?E-h:0;u=u.map(C=>C<=0?-g:C>$?$+_:C)}if(a.centerInsufficientSlides){let E=0;if(f.forEach($=>{E+=$+(b||0)}),E-=b,E<h){const $=(h-E)/2;u.forEach((C,R)=>{u[R]=C-$}),p.forEach((C,R)=>{p[R]=C+$})}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:p,slidesSizesGrid:f}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){Ia(s,"--swiper-centered-offset-before",`${-u[0]}px`),Ia(s,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const E=-e.snapGrid[0],$=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(C=>C+E),e.slidesGrid=e.slidesGrid.map(C=>C+$)}if(d!==l&&e.emit("slidesLengthChange"),u.length!==v&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==m&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!i&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const E=`${a.containerModifierClass}backface-hidden`,$=e.el.classList.contains(E);d<=a.maxBackfaceHiddenSlides?$||e.el.classList.add(E):$&&e.el.classList.remove(E)}}function Dg(e){const t=this,a=[],s=t.virtual&&t.params.virtual.enabled;let r=0,n;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=i=>s?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{a.push(i)});else for(n=0;n<Math.ceil(t.params.slidesPerView);n+=1){const i=t.activeIndex+n;if(i>t.slides.length&&!s)break;a.push(o(i))}else a.push(o(t.activeIndex));for(n=0;n<a.length;n+=1)if(typeof a[n]<"u"){const i=a[n].offsetHeight;r=i>r?i:r}(r||r===0)&&(t.wrapperEl.style.height=`${r}px`)}function Ng(){const e=this,t=e.slides,a=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-a-e.cssOverflowAdjustment()}const cl=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function Ig(e=this&&this.translate||0){const t=this,a=t.params,{slides:s,rtlTranslate:r,snapGrid:n}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;r&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=a.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<s.length;l+=1){const c=s[l];let d=c.swiperSlideOffset;a.cssMode&&a.centeredSlides&&(d-=s[0].swiperSlideOffset);const u=(o+(a.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),p=(o-n[0]+(a.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),f=-(o-d),g=f+t.slidesSizesGrid[l],_=f>=0&&f<=t.size-t.slidesSizesGrid[l],v=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;v&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),cl(c,v,a.slideVisibleClass),cl(c,_,a.slideFullyVisibleClass),c.progress=r?-u:u,c.originalProgress=r?-p:p}}function Bg(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const a=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:n,isEnd:o,progressLoop:i}=t;const l=n,c=o;if(s===0)r=0,n=!0,o=!0;else{r=(e-t.minTranslate())/s;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;n=d||r<=0,o=u||r>=1,d&&(r=0),u&&(r=1)}if(a.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],g=t.slidesGrid[t.slidesGrid.length-1],_=Math.abs(e);_>=p?i=(_-p)/g:i=(_+g-f)/g,i>1&&(i-=1)}Object.assign(t,{progress:r,progressLoop:i,isBeginning:n,isEnd:o}),(a.watchSlidesProgress||a.centeredSlides&&a.autoHeight)&&t.updateSlidesProgress(e),n&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!n||c&&!o)&&t.emit("fromEdge"),t.emit("progress",r)}const zn=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function Fg(){const e=this,{slides:t,params:a,slidesEl:s,activeIndex:r}=e,n=e.virtual&&a.virtual.enabled,o=e.grid&&a.grid&&a.grid.rows>1,i=u=>Rt(s,`.${a.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(n)if(a.loop){let u=r-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${u}"]`)}else l=i(`[data-swiper-slide-index="${r}"]`);else o?(l=t.find(u=>u.column===r),d=t.find(u=>u.column===r+1),c=t.find(u=>u.column===r-1)):l=t[r];l&&(o||(d=kg(l,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!d&&(d=t[0]),c=Eg(l,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{zn(u,u===l,a.slideActiveClass),zn(u,u===d,a.slideNextClass),zn(u,u===c,a.slidePrevClass)}),e.emitSlidesClasses()}const Cr=(e,t)=>{if(!e||e.destroyed||!e.params)return;const a=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,s=t.closest(a());if(s){let r=s.querySelector(`.${e.params.lazyPreloaderClass}`);!r&&e.isElement&&(s.shadowRoot?r=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(r=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),r&&!r.lazyPreloaderManaged&&r.remove())})),r&&!r.lazyPreloaderManaged&&r.remove()}},Hn=(e,t)=>{if(!e.slides[t])return;const a=e.slides[t].querySelector('[loading="lazy"]');a&&a.removeAttribute("loading")},xo=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const a=e.slides.length;if(!a||!t||t<0)return;t=Math.min(t,a);const s=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),r=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=r,i=[o-t];i.push(...Array.from({length:t}).map((l,c)=>o+s+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&Hn(e,c)});return}const n=r+s-1;if(e.params.rewind||e.params.loop)for(let o=r-t;o<=n+t;o+=1){const i=(o%a+a)%a;(i<r||i>n)&&Hn(e,i)}else for(let o=Math.max(r-t,0);o<=Math.min(n+t,a-1);o+=1)o!==r&&(o>n||o<r)&&Hn(e,o)};function zg(e){const{slidesGrid:t,params:a}=e,s=e.rtlTranslate?e.translate:-e.translate;let r;for(let n=0;n<t.length;n+=1)typeof t[n+1]<"u"?s>=t[n]&&s<t[n+1]-(t[n+1]-t[n])/2?r=n:s>=t[n]&&s<t[n+1]&&(r=n+1):s>=t[n]&&(r=n);return a.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Hg(e){const t=this,a=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:r,activeIndex:n,realIndex:o,snapIndex:i}=t;let l=e,c;const d=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=zg(t)),s.indexOf(a)>=0)c=s.indexOf(a);else{const f=Math.min(r.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/r.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===n&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===n&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&r.grid&&r.grid.rows>1;let p;if(t.virtual&&r.virtual.enabled)r.loop?p=d(l):p=l;else if(u){const f=t.slides.find(_=>_.column===l);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),p=Math.floor(g/r.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:n,activeIndex:l}),t.initialized&&xo(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function jg(e,t){const a=this,s=a.params;let r=e.closest(`.${s.slideClass}, swiper-slide`);!r&&a.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!r&&i.matches&&i.matches(`.${s.slideClass}, swiper-slide`)&&(r=i)});let n=!1,o;if(r){for(let i=0;i<a.slides.length;i+=1)if(a.slides[i]===r){n=!0,o=i;break}}if(r&&n)a.clickedSlide=r,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):a.clickedIndex=o;else{a.clickedSlide=void 0,a.clickedIndex=void 0;return}s.slideToClickedSlide&&a.clickedIndex!==void 0&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}var Ug={updateSize:Rg,updateSlides:Lg,updateAutoHeight:Dg,updateSlidesOffset:Ng,updateSlidesProgress:Ig,updateProgress:Bg,updateSlidesClasses:Fg,updateActiveIndex:Hg,updateClickedSlide:jg};function qg(e=this.isHorizontal()?"x":"y"){const t=this,{params:a,rtlTranslate:s,translate:r,wrapperEl:n}=t;if(a.virtualTranslate)return s?-r:r;if(a.cssMode)return r;let o=wg(n,e);return o+=t.cssOverflowAdjustment(),s&&(o=-o),o||0}function Gg(e,t){const a=this,{rtlTranslate:s,params:r,wrapperEl:n,progress:o}=a;let i=0,l=0;const c=0;a.isHorizontal()?i=s?-e:e:l=e,r.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?i:l,r.cssMode?n[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-i:-l:r.virtualTranslate||(a.isHorizontal()?i-=a.cssOverflowAdjustment():l-=a.cssOverflowAdjustment(),n.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let d;const u=a.maxTranslate()-a.minTranslate();u===0?d=0:d=(e-a.minTranslate())/u,d!==o&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)}function Vg(){return-this.snapGrid[0]}function Kg(){return-this.snapGrid[this.snapGrid.length-1]}function Yg(e=0,t=this.params.speed,a=!0,s=!0,r){const n=this,{params:o,wrapperEl:i}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const l=n.minTranslate(),c=n.maxTranslate();let d;if(s&&e>l?d=l:s&&e<c?d=c:d=e,n.updateProgress(d),o.cssMode){const u=n.isHorizontal();if(t===0)i[u?"scrollLeft":"scrollTop"]=-d;else{if(!n.support.smoothScroll)return xu({swiper:n,targetPosition:-d,side:u?"left":"top"}),!0;i.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(n.setTransition(0),n.setTranslate(d),a&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),a&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(p){!n||n.destroyed||p.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,a&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Wg={getTranslate:qg,setTranslate:Gg,minTranslate:Vg,maxTranslate:Kg,translateTo:Yg};function Jg(e,t){const a=this;a.params.cssMode||(a.wrapperEl.style.transitionDuration=`${e}ms`,a.wrapperEl.style.transitionDelay=e===0?"0ms":""),a.emit("setTransition",e,t)}function Au({swiper:e,runCallbacks:t,direction:a,step:s}){const{activeIndex:r,previousIndex:n}=e;let o=a;o||(r>n?o="next":r<n?o="prev":o="reset"),e.emit(`transition${s}`),t&&o==="reset"?e.emit(`slideResetTransition${s}`):t&&r!==n&&(e.emit(`slideChangeTransition${s}`),o==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function Xg(e=!0,t){const a=this,{params:s}=a;s.cssMode||(s.autoHeight&&a.updateAutoHeight(),Au({swiper:a,runCallbacks:e,direction:t,step:"Start"}))}function Qg(e=!0,t){const a=this,{params:s}=a;a.animating=!1,!s.cssMode&&(a.setTransition(0),Au({swiper:a,runCallbacks:e,direction:t,step:"End"}))}var Zg={setTransition:Jg,transitionStart:Xg,transitionEnd:Qg};function eb(e=0,t,a=!0,s,r){typeof e=="string"&&(e=parseInt(e,10));const n=this;let o=e;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:g}=n;if(!g&&!s&&!r||n.destroyed||n.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=n.params.speed);const _=Math.min(n.params.slidesPerGroupSkip,o);let v=_+Math.floor((o-_)/n.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const m=-l[v];if(i.normalizeSlideIndex)for(let A=0;A<c.length;A+=1){const S=-Math.floor(m*100),x=Math.floor(c[A]*100),E=Math.floor(c[A+1]*100);typeof c[A+1]<"u"?S>=x&&S<E-(E-x)/2?o=A:S>=x&&S<E&&(o=A+1):S>=x&&(o=A)}if(n.initialized&&o!==u&&(!n.allowSlideNext&&(p?m>n.translate&&m>n.minTranslate():m<n.translate&&m<n.minTranslate())||!n.allowSlidePrev&&m>n.translate&&m>n.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&a&&n.emit("beforeSlideChangeStart"),n.updateProgress(m);let h;o>u?h="next":o<u?h="prev":h="reset";const b=n.virtual&&n.params.virtual.enabled;if(!(b&&r)&&(p&&-m===n.translate||!p&&m===n.translate))return n.updateActiveIndex(o),i.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),i.effect!=="slide"&&n.setTranslate(m),h!=="reset"&&(n.transitionStart(a,h),n.transitionEnd(a,h)),!1;if(i.cssMode){const A=n.isHorizontal(),S=p?m:-m;if(t===0)b&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),b&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[A?"scrollLeft":"scrollTop"]=S})):f[A?"scrollLeft":"scrollTop"]=S,b&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return xu({swiper:n,targetPosition:S,side:A?"left":"top"}),!0;f.scrollTo({[A?"left":"top"]:S,behavior:"smooth"})}return!0}const T=ku().isSafari;return b&&!r&&T&&n.isElement&&n.virtual.update(!1,!1,o),n.setTransition(t),n.setTranslate(m),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(a,h),t===0?n.transitionEnd(a,h):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(S){!n||n.destroyed||S.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(a,h))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function tb(e=0,t,a=!0,s){typeof e=="string"&&(e=parseInt(e,10));const r=this;if(r.destroyed)return;typeof t>"u"&&(t=r.params.speed);const n=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=e;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let i;if(n){const _=o*r.params.grid.rows;i=r.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===_).column}else i=r.getSlideIndexByData(o);const l=n?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:u}=r.params,p=c||!!d||!!u;let f=r.params.slidesPerView;f==="auto"?f=r.slidesPerViewDynamic():(f=Math.ceil(parseFloat(r.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let g=l-i<f;if(p&&(g=g||i<Math.ceil(f/2)),s&&p&&r.params.slidesPerView!=="auto"&&!n&&(g=!1),g){const _=p?i<r.activeIndex?"prev":"next":i-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:_,slideTo:!0,activeSlideIndex:_==="next"?i+1:i-l+1,slideRealIndex:_==="next"?r.realIndex:void 0})}if(n){const _=o*r.params.grid.rows;o=r.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===_).column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,t,a,s)}),r}function ab(e,t=!0,a){const s=this,{enabled:r,params:n,animating:o}=s;if(!r||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);let i=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(i=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<n.slidesPerGroupSkip?1:i,c=s.virtual&&n.virtual.enabled;if(n.loop){if(o&&!c&&n.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,e,t,a)}),!0}return n.rewind&&s.isEnd?s.slideTo(0,e,t,a):s.slideTo(s.activeIndex+l,e,t,a)}function sb(e,t=!0,a){const s=this,{params:r,snapGrid:n,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=s;if(!l||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);const d=s.virtual&&r.virtual.enabled;if(r.loop){if(c&&!d&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const u=i?s.translate:-s.translate;function p(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const f=p(u),g=n.map(h=>p(h)),_=r.freeMode&&r.freeMode.enabled;let v=n[g.indexOf(f)-1];if(typeof v>"u"&&(r.cssMode||_)){let h;n.forEach((b,w)=>{f>=b&&(h=w)}),typeof h<"u"&&(v=_?n[h]:n[h>0?h-1:h])}let m=0;if(typeof v<"u"&&(m=o.indexOf(v),m<0&&(m=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(m=m-s.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),r.rewind&&s.isBeginning){const h=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(h,e,t,a)}else if(r.loop&&s.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(m,e,t,a)}),!0;return s.slideTo(m,e,t,a)}function rb(e,t=!0,a){const s=this;if(!s.destroyed)return typeof e>"u"&&(e=s.params.speed),s.slideTo(s.activeIndex,e,t,a)}function nb(e,t=!0,a,s=.5){const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);let n=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,n),i=o+Math.floor((n-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[i]){const c=r.snapGrid[i],d=r.snapGrid[i+1];l-c>(d-c)*s&&(n+=r.params.slidesPerGroup)}else{const c=r.snapGrid[i-1],d=r.snapGrid[i];l-c<=(d-c)*s&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,e,t,a)}function ob(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:a}=e,s=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let r=e.getSlideIndexWhenGrid(e.clickedIndex),n;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;n=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(n):r>(i?(e.slides.length-s)/2-(e.params.grid.rows-1):e.slides.length-s)?(e.loopFix(),r=e.getSlideIndex(Rt(a,`${o}[data-swiper-slide-index="${n}"]`)[0]),wu(()=>{e.slideTo(r)})):e.slideTo(r)}else e.slideTo(r)}var ib={slideTo:eb,slideToLoop:tb,slideNext:ab,slidePrev:sb,slideReset:rb,slideToClosest:nb,slideToClickedSlide:ob};function lb(e,t){const a=this,{params:s,slidesEl:r}=a;if(!s.loop||a.virtual&&a.params.virtual.enabled)return;const n=()=>{Rt(r,`.${s.slideClass}, swiper-slide`).forEach((g,_)=>{g.setAttribute("data-swiper-slide-index",_)})},o=()=>{const f=Rt(r,`.${s.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(a.recalcSlides(),a.updateSlides())},i=a.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||i)&&o();const l=s.slidesPerGroup*(i?s.grid.rows:1),c=a.slides.length%l!==0,d=i&&a.slides.length%s.grid.rows!==0,u=f=>{for(let g=0;g<f;g+=1){const _=a.isElement?Ur("swiper-slide",[s.slideBlankClass]):Ur("div",[s.slideClass,s.slideBlankClass]);a.slidesEl.append(_)}};if(c){if(s.loopAddBlankSlides){const f=l-a.slides.length%l;u(f),a.recalcSlides(),a.updateSlides()}else jr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(d){if(s.loopAddBlankSlides){const f=s.grid.rows-a.slides.length%s.grid.rows;u(f),a.recalcSlides(),a.updateSlides()}else jr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();const p=s.centeredSlides||!!s.slidesOffsetBefore||!!s.slidesOffsetAfter;a.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function cb({slideRealIndex:e,slideTo:t=!0,direction:a,setTranslate:s,activeSlideIndex:r,initial:n,byController:o,byMousewheel:i}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:p,params:f}=l,{centeredSlides:g,slidesOffsetBefore:_,slidesOffsetAfter:v,initialSlide:m}=f,h=g||!!_||!!v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){t&&(!h&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):h&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}let b=f.slidesPerView;b==="auto"?b=l.slidesPerViewDynamic():(b=Math.ceil(parseFloat(f.slidesPerView,10)),h&&b%2===0&&(b=b+1));const w=f.slidesPerGroupAuto?b:f.slidesPerGroup;let y=h?Math.max(w,Math.ceil(b/2)):w;y%w!==0&&(y+=w-y%w),y+=f.loopAdditionalSlides,l.loopedSlides=y;const T=l.grid&&f.grid&&f.grid.rows>1;c.length<b+y||l.params.effect==="cards"&&c.length<b+y*2?jr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&f.grid.fill==="row"&&jr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const A=[],S=[],x=T?Math.ceil(c.length/f.grid.rows):c.length,E=n&&x-m<b&&!h;let $=E?m:l.activeIndex;typeof r>"u"?r=l.getSlideIndex(c.find(V=>V.classList.contains(f.slideActiveClass))):$=r;const C=a==="next"||!a,R=a==="prev"||!a;let U=0,W=0;const Y=(T?c[r].column:r)+(h&&typeof s>"u"?-b/2+.5:0);if(Y<y){U=Math.max(y-Y,w);for(let V=0;V<y-Y;V+=1){const X=V-Math.floor(V/x)*x;if(T){const H=x-X-1;for(let D=c.length-1;D>=0;D-=1)c[D].column===H&&A.push(D)}else A.push(x-X-1)}}else if(Y+b>x-y){W=Math.max(Y-(x-y*2),w),E&&(W=Math.max(W,b-x+m+1));for(let V=0;V<W;V+=1){const X=V-Math.floor(V/x)*x;T?c.forEach((H,D)=>{H.column===X&&S.push(D)}):S.push(X)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<b+y*2&&(S.includes(r)&&S.splice(S.indexOf(r),1),A.includes(r)&&A.splice(A.indexOf(r),1)),R&&A.forEach(V=>{c[V].swiperLoopMoveDOM=!0,p.prepend(c[V]),c[V].swiperLoopMoveDOM=!1}),C&&S.forEach(V=>{c[V].swiperLoopMoveDOM=!0,p.append(c[V]),c[V].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():T&&(A.length>0&&R||S.length>0&&C)&&l.slides.forEach((V,X)=>{l.grid.updateSlide(X,V,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),t){if(A.length>0&&R){if(typeof e>"u"){const V=l.slidesGrid[$],H=l.slidesGrid[$+U]-V;i?l.setTranslate(l.translate-H):(l.slideTo($+Math.ceil(U),0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-H,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-H))}else if(s){const V=T?A.length/f.grid.rows:A.length;l.slideTo(l.activeIndex+V,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(S.length>0&&C)if(typeof e>"u"){const V=l.slidesGrid[$],H=l.slidesGrid[$-W]-V;i?l.setTranslate(l.translate-H):(l.slideTo($-W,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-H,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-H))}else{const V=T?S.length/f.grid.rows:S.length;l.slideTo(l.activeIndex-V,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!o){const V={slideRealIndex:e,direction:a,setTranslate:s,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(X=>{!X.destroyed&&X.params.loop&&X.loopFix({...V,slideTo:X.params.slidesPerView===f.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...V,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}l.emit("loopFix")}function db(){const e=this,{params:t,slidesEl:a}=e;if(!t.loop||!a||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[n]=r}),e.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{a.append(r)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var ub={loopCreate:lb,loopFix:cb,loopDestroy:db};function pb(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const a=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),a.style.cursor="move",a.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function fb(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var hb={setGrabCursor:pb,unsetGrabCursor:fb};function mb(e,t=this){function a(s){if(!s||s===Dt()||s===at())return null;s.assignedSlot&&(s=s.assignedSlot);const r=s.closest(e);return!r&&!s.getRootNode?null:r||a(s.getRootNode().host)}return a(t)}function dl(e,t,a){const s=at(),{params:r}=e,n=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return n&&(a<=o||a>=s.innerWidth-o)?n==="prevent"?(t.preventDefault(),!0):!1:!0}function gb(e){const t=this,a=Dt();let s=e;s.originalEvent&&(s=s.originalEvent);const r=t.touchEventsData;if(s.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==s.pointerId)return;r.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(r.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){dl(t,s,s.targetTouches[0].pageX);return}const{params:n,touches:o,enabled:i}=t;if(!i||!n.simulateTouch&&s.pointerType==="mouse"||t.animating&&n.preventInteractionOnTransition)return;!t.animating&&n.cssMode&&n.loop&&t.loopFix();let l=s.target;if(n.touchEventsTarget==="wrapper"&&!Sg(l,t.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||r.isTouched&&r.isMoved)return;const c=!!n.noSwipingClass&&n.noSwipingClass!=="",d=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&d&&(l=d[0]);const u=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,p=!!(s.target&&s.target.shadowRoot);if(n.noSwiping&&(p?mb(u,l):l.closest(u))){t.allowClick=!0;return}if(n.swipeHandler&&!l.closest(n.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;const f=o.currentX,g=o.currentY;if(!dl(t,s,f))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=g,r.touchStartTime=Hr(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let _=!0;l.matches(r.focusableElements)&&(_=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),a.activeElement&&a.activeElement.matches(r.focusableElements)&&a.activeElement!==l&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!l.matches(r.focusableElements))&&a.activeElement.blur();const v=_&&t.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||v)&&!l.isContentEditable&&s.preventDefault(),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.animating&&!n.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function bb(e){const t=Dt(),a=this,s=a.touchEventsData,{params:r,touches:n,rtlTranslate:o,enabled:i}=a;if(!i||!r.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(s.touchId!==null||l.pointerId!==s.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(y=>y.identifier===s.touchId),!c||c.identifier!==s.touchId)return}else c=l;if(!s.isTouched){s.startMoving&&s.isScrolling&&a.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){n.startX=d,n.startY=u;return}if(!a.allowTouchMove){l.target.matches(s.focusableElements)||(a.allowClick=!1),s.isTouched&&(Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u}),s.touchStartTime=Hr());return}if(r.touchReleaseOnEdges&&!r.loop)if(a.isVertical()){if(u<n.startY&&a.translate<=a.maxTranslate()||u>n.startY&&a.translate>=a.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(o&&(d>n.startX&&-a.translate<=a.maxTranslate()||d<n.startX&&-a.translate>=a.minTranslate()))return;if(!o&&(d<n.startX&&a.translate<=a.maxTranslate()||d>n.startX&&a.translate>=a.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,a.allowClick=!1;return}s.allowTouchCallbacks&&a.emit("touchMove",l),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=d,n.currentY=u;const p=n.currentX-n.startX,f=n.currentY-n.startY;if(a.params.threshold&&Math.sqrt(p**2+f**2)<a.params.threshold)return;if(typeof s.isScrolling>"u"){let y;a.isHorizontal()&&n.currentY===n.startY||a.isVertical()&&n.currentX===n.startX?s.isScrolling=!1:p*p+f*f>=25&&(y=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,s.isScrolling=a.isHorizontal()?y>r.touchAngle:90-y>r.touchAngle)}if(s.isScrolling&&a.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(s.startMoving=!0),s.isScrolling||l.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;a.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let g=a.isHorizontal()?p:f,_=a.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),_=Math.abs(_)*(o?1:-1)),n.diff=g,g*=r.touchRatio,o&&(g=-g,_=-_);const v=a.touchesDirection;a.swipeDirection=g>0?"prev":"next",a.touchesDirection=_>0?"prev":"next";const m=a.params.loop&&!r.cssMode,h=a.touchesDirection==="next"&&a.allowSlideNext||a.touchesDirection==="prev"&&a.allowSlidePrev;if(!s.isMoved){if(m&&h&&a.loopFix({direction:a.swipeDirection}),s.startTranslate=a.getTranslate(),a.setTransition(0),a.animating){const y=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});a.wrapperEl.dispatchEvent(y)}s.allowMomentumBounce=!1,r.grabCursor&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!0),a.emit("sliderFirstMove",l)}if(new Date().getTime(),r._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&v!==a.touchesDirection&&m&&h&&Math.abs(g)>=1){Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}a.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=g+s.startTranslate;let b=!0,w=r.resistanceRatio;if(r.touchReleaseOnEdges&&(w=0),g>0?(m&&h&&s.allowThresholdMove&&s.currentTranslate>(r.centeredSlides?a.minTranslate()-a.slidesSizesGrid[a.activeIndex+1]-(r.slidesPerView!=="auto"&&a.slides.length-r.slidesPerView>=2?a.slidesSizesGrid[a.activeIndex+1]+a.params.spaceBetween:0)-a.params.spaceBetween:a.minTranslate())&&a.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>a.minTranslate()&&(b=!1,r.resistance&&(s.currentTranslate=a.minTranslate()-1+(-a.minTranslate()+s.startTranslate+g)**w))):g<0&&(m&&h&&s.allowThresholdMove&&s.currentTranslate<(r.centeredSlides?a.maxTranslate()+a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween+(r.slidesPerView!=="auto"&&a.slides.length-r.slidesPerView>=2?a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween:0):a.maxTranslate())&&a.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:a.slides.length-(r.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<a.maxTranslate()&&(b=!1,r.resistance&&(s.currentTranslate=a.maxTranslate()+1-(a.maxTranslate()-s.startTranslate-g)**w))),b&&(l.preventedByNestedSwiper=!0),!a.allowSlideNext&&a.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&a.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&!a.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(g)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,s.currentTranslate=s.startTranslate,n.diff=a.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&a.freeMode||r.watchSlidesProgress)&&(a.updateActiveIndex(),a.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&a.freeMode&&a.freeMode.onTouchMove(),a.updateProgress(s.currentTranslate),a.setTranslate(s.currentTranslate))}function _b(e){const t=this,a=t.touchEventsData;let s=e;s.originalEvent&&(s=s.originalEvent);let r;if(s.type==="touchend"||s.type==="touchcancel"){if(r=[...s.changedTouches].find(y=>y.identifier===a.touchId),!r||r.identifier!==a.touchId)return}else{if(a.touchId!==null||s.pointerId!==a.pointerId)return;r=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(t.browser.isSafari||t.browser.isWebView)))return;a.pointerId=null,a.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&s.pointerType==="mouse")return;if(a.allowTouchCallbacks&&t.emit("touchEnd",s),a.allowTouchCallbacks=!1,!a.isTouched){a.isMoved&&o.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,a.startMoving=!1;return}o.grabCursor&&a.isMoved&&a.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Hr(),p=u-a.touchStartTime;if(t.allowClick){const y=s.path||s.composedPath&&s.composedPath();t.updateClickedSlide(y&&y[0]||s.target,y),t.emit("tap click",s),p<300&&u-a.lastClickTime<300&&t.emit("doubleTap doubleClick",s)}if(a.lastClickTime=Hr(),wu(()=>{t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||i.diff===0&&!a.loopSwapReset||a.currentTranslate===a.startTranslate&&!a.loopSwapReset){a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;return}a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;let f;if(o.followFinger?f=l?t.translate:-t.translate:f=-a.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let _=0,v=t.slidesSizesGrid[0];for(let y=0;y<c.length;y+=y<o.slidesPerGroupSkip?1:o.slidesPerGroup){const T=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[y+T]<"u"?(g||f>=c[y]&&f<c[y+T])&&(_=y,v=c[y+T]-c[y]):(g||f>=c[y])&&(_=y,v=c[c.length-1]-c[c.length-2])}let m=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const b=(f-c[_])/v,w=_<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?m:_+w):t.slideTo(_)),t.swipeDirection==="prev"&&(b>1-o.longSwipesRatio?t.slideTo(_+w):h!==null&&b<0&&Math.abs(b)>o.longSwipesRatio?t.slideTo(h):t.slideTo(_))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(s.target===t.navigation.nextEl||s.target===t.navigation.prevEl)?s.target===t.navigation.nextEl?t.slideTo(_+w):t.slideTo(_):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:_+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:_))}}function ul(){const e=this,{params:t,el:a}=e;if(a&&a.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:r,snapGrid:n}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=r,e.allowSlideNext=s,e.params.watchOverflow&&n!==e.snapGrid&&e.checkOverflow()}function vb(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function yb(){const e=this,{wrapperEl:t,rtlTranslate:a,enabled:s}=e;if(!s)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let r;const n=e.maxTranslate()-e.minTranslate();n===0?r=0:r=(e.translate-e.minTranslate())/n,r!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function wb(e){const t=this;Cr(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function xb(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Pu=(e,t)=>{const a=Dt(),{params:s,el:r,wrapperEl:n,device:o}=e,i=!!s.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!r||typeof r=="string"||(a[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),r[l]("touchstart",e.onTouchStart,{passive:!1}),r[l]("pointerdown",e.onTouchStart,{passive:!1}),a[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),a[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),a[l]("touchend",e.onTouchEnd,{passive:!0}),a[l]("pointerup",e.onTouchEnd,{passive:!0}),a[l]("pointercancel",e.onTouchEnd,{passive:!0}),a[l]("touchcancel",e.onTouchEnd,{passive:!0}),a[l]("pointerout",e.onTouchEnd,{passive:!0}),a[l]("pointerleave",e.onTouchEnd,{passive:!0}),a[l]("contextmenu",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[l]("click",e.onClick,!0),s.cssMode&&n[l]("scroll",e.onScroll),s.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",ul,!0):e[c]("observerUpdate",ul,!0),r[l]("load",e.onLoad,{capture:!0}))};function Tb(){const e=this,{params:t}=e;e.onTouchStart=gb.bind(e),e.onTouchMove=bb.bind(e),e.onTouchEnd=_b.bind(e),e.onDocumentTouchStart=xb.bind(e),t.cssMode&&(e.onScroll=yb.bind(e)),e.onClick=vb.bind(e),e.onLoad=wb.bind(e),Pu(e,"on")}function Sb(){Pu(this,"off")}var Eb={attachEvents:Tb,detachEvents:Sb};const pl=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function kb(){const e=this,{realIndex:t,initialized:a,params:s,el:r}=e,n=s.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=Dt(),i=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",l=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?e.el:o.querySelector(s.breakpointsBase),c=e.getBreakpoint(n,i,l);if(!c||e.currentBreakpoint===c)return;const u=(c in n?n[c]:void 0)||e.originalParams,p=pl(e,s),f=pl(e,u),g=e.params.grabCursor,_=u.grabCursor,v=s.enabled;p&&!f?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(r.classList.add(`${s.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!_?e.unsetGrabCursor():!g&&_&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof u[T]>"u")return;const A=s[T]&&s[T].enabled,S=u[T]&&u[T].enabled;A&&!S&&e[T].disable(),!A&&S&&e[T].enable()});const m=u.direction&&u.direction!==s.direction,h=s.loop&&(u.slidesPerView!==s.slidesPerView||m),b=s.loop;m&&a&&e.changeDirection(),ot(e.params,u);const w=e.params.enabled,y=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),v&&!w?e.disable():!v&&w&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),a&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&y?(e.loopCreate(t),e.updateSlides()):b&&!y&&e.loopDestroy()),e.emit("breakpoint",u)}function Ab(e,t="window",a){if(!e||t==="container"&&!a)return;let s=!1;const r=at(),n=t==="window"?r.innerHeight:a.clientHeight,o=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:n*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];t==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=a.clientWidth&&(s=l)}return s||"max"}var Pb={setBreakpoint:kb,getBreakpoint:Ab};function Cb(e,t){const a=[];return e.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&a.push(t+r)}):typeof s=="string"&&a.push(t+s)}),a}function Ob(){const e=this,{classNames:t,params:a,rtl:s,el:r,device:n}=e,o=Cb(["initialized",a.direction,{"free-mode":e.params.freeMode&&a.freeMode.enabled},{autoheight:a.autoHeight},{rtl:s},{grid:a.grid&&a.grid.rows>1},{"grid-column":a.grid&&a.grid.rows>1&&a.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":a.cssMode},{centered:a.cssMode&&a.centeredSlides},{"watch-progress":a.watchSlidesProgress}],a.containerModifierClass);t.push(...o),r.classList.add(...t),e.emitContainerClasses()}function $b(){const e=this,{el:t,classNames:a}=e;!t||typeof t=="string"||(t.classList.remove(...a),e.emitContainerClasses())}var Mb={addClasses:Ob,removeClasses:$b};function Rb(){const e=this,{isLocked:t,params:a}=e,{slidesOffsetBefore:s}=a;if(s){const r=e.slides.length-1,n=e.slidesGrid[r]+e.slidesSizesGrid[r]+s*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;a.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),a.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Lb={checkOverflow:Rb},fl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Db(e,t){return function(s={}){const r=Object.keys(s)[0],n=s[r];if(typeof n!="object"||n===null){ot(t,s);return}if(e[r]===!0&&(e[r]={enabled:!0}),r==="navigation"&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&"enabled"in n)){ot(t,s);return}typeof e[r]=="object"&&!("enabled"in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),ot(t,s)}}const jn={eventsEmitter:Mg,update:Ug,translate:Wg,transition:Zg,slide:ib,loop:ub,grabCursor:hb,events:Eb,breakpoints:Pb,checkOverflow:Lb,classes:Mb},Un={};class pt{constructor(...t){let a,s;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?s=t[0]:[a,s]=t,s||(s={}),s=ot({},s),a&&!s.el&&(s.el=a);const r=Dt();if(s.el&&typeof s.el=="string"&&r.querySelectorAll(s.el).length>1){const l=[];return r.querySelectorAll(s.el).forEach(c=>{const d=ot({},s,{el:c});l.push(new pt(d))}),l}const n=this;n.__swiper__=!0,n.support=Su(),n.device=Eu({userAgent:s.userAgent}),n.browser=ku(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],s.modules&&Array.isArray(s.modules)&&s.modules.forEach(l=>{typeof l=="function"&&n.modules.indexOf(l)<0&&n.modules.push(l)});const o={};n.modules.forEach(l=>{l({params:s,swiper:n,extendParams:Db(s,o),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const i=ot({},fl,o);return n.params=ot({},i,Un,s),n.originalParams=ot({},n.params),n.passedParams=ot({},s),n.params&&n.params.on&&Object.keys(n.params.on).forEach(l=>{n.on(l,n.params.on[l])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),Object.assign(n,{enabled:n.params.enabled,el:a,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:a,params:s}=this,r=Rt(a,`.${s.slideClass}, swiper-slide`),n=qr(r[0]);return qr(t)-n}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(a=>a.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:a,params:s}=t;t.slides=Rt(a,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,a){const s=this;t=Math.min(Math.max(t,0),1);const r=s.minTranslate(),o=(s.maxTranslate()-r)*t+r;s.translateTo(o,typeof a>"u"?0:a),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",a.join(" "))}getSlideClasses(t){const a=this;return a.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(a.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=[];t.slides.forEach(s=>{const r=t.getSlideClasses(s);a.push({slideEl:s,classNames:r}),t.emit("_slideClass",s,r)}),t.emit("_slideClasses",a)}slidesPerViewDynamic(t="current",a=!1){const s=this,{params:r,slides:n,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=s;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let u=n[c]?Math.ceil(n[c].swiperSlideSize):0,p;for(let f=c+1;f<n.length;f+=1)n[f]&&!p&&(u+=Math.ceil(n[f].swiperSlideSize),d+=1,u>l&&(p=!0));for(let f=c-1;f>=0;f-=1)n[f]&&!p&&(u+=n[f].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<n.length;u+=1)(a?o[u]+i[u]-o[c]<l:o[u]-o[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:a,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Cr(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function r(){const o=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let n;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const o=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;n=t.slideTo(o.length-1,0,!1,!0)}else n=t.slideTo(t.activeIndex,0,!1,!0);n||r()}s.watchOverflow&&a!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,a=!0){const s=this,r=s.params.direction;return t||(t=r==="horizontal"?"vertical":"horizontal"),t===r||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(n=>{t==="vertical"?n.style.width="":n.style.height=""}),s.emit("changeDirection"),a&&s.update()),s}changeLanguageDirection(t){const a=this;a.rtl&&t==="rtl"||!a.rtl&&t==="ltr"||(a.rtl=t==="rtl",a.rtlTranslate=a.params.direction==="horizontal"&&a.rtl,a.rtl?(a.el.classList.add(`${a.params.containerModifierClass}rtl`),a.el.dir="rtl"):(a.el.classList.remove(`${a.params.containerModifierClass}rtl`),a.el.dir="ltr"),a.update())}mount(t){const a=this;if(a.mounted)return!0;let s=t||a.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=a,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===a.params.swiperElementNodeName.toUpperCase()&&(a.isElement=!0);const r=()=>`.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):Rt(s,r())[0];return!o&&a.params.createElements&&(o=Ur("div",a.params.wrapperClass),s.append(o),Rt(s,`.${a.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(a,{el:s,wrapperEl:o,slidesEl:a.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:a.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||da(s,"direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||da(s,"direction")==="rtl"),wrongRTL:da(o,"display")==="-webkit-box"}),!0}init(t){const a=this;if(a.initialized||a.mount(t)===!1)return a;a.emit("beforeInit"),a.params.breakpoints&&a.setBreakpoint(),a.addClasses(),a.updateSize(),a.updateSlides(),a.params.watchOverflow&&a.checkOverflow(),a.params.grabCursor&&a.enabled&&a.setGrabCursor(),a.params.loop&&a.virtual&&a.params.virtual.enabled?a.slideTo(a.params.initialSlide+a.virtual.slidesBefore,0,a.params.runCallbacksOnInit,!1,!0):a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,!1,!0),a.params.loop&&a.loopCreate(void 0,!0),a.attachEvents();const r=[...a.el.querySelectorAll('[loading="lazy"]')];return a.isElement&&r.push(...a.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?Cr(a,n):n.addEventListener("load",o=>{Cr(a,o.target)})}),xo(a),a.initialized=!0,xo(a),a.emit("init"),a.emit("afterInit"),a}destroy(t=!0,a=!0){const s=this,{params:r,el:n,wrapperEl:o,slides:i}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),a&&(s.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),t!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),vg(s)),s.destroyed=!0),null}static extendDefaults(t){ot(Un,t)}static get extendedDefaults(){return Un}static get defaults(){return fl}static installModule(t){pt.prototype.__modules__||(pt.prototype.__modules__=[]);const a=pt.prototype.__modules__;typeof t=="function"&&a.indexOf(t)<0&&a.push(t)}static use(t){return Array.isArray(t)?(t.forEach(a=>pt.installModule(a)),pt):(pt.installModule(t),pt)}}Object.keys(jn).forEach(e=>{Object.keys(jn[e]).forEach(t=>{pt.prototype[t]=jn[e][t]})});pt.use([Og,$g]);function Nb(e,t,a,s){return e.params.createElements&&Object.keys(s).forEach(r=>{if(!a[r]&&a.auto===!0){let n=Rt(e.el,`.${s[r]}`)[0];n||(n=Ur("div",s[r]),n.className=s[r],e.el.append(n)),a[r]=n,t[r]=n}}),a}function es(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Ib({swiper:e,extendParams:t,on:a,emit:s}){const r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let n,o=0;function i(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function l(m,h){const{bulletActiveClass:b}=e.params.pagination;m&&(m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${b}-${h}`),m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${b}-${h}-${h}`)))}function c(m,h,b){if(m=m%b,h=h%b,h===m+1)return"next";if(h===m-1)return"previous"}function d(m){const h=m.target.closest(es(e.params.pagination.bulletClass));if(!h)return;m.preventDefault();const b=qr(h)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const w=c(e.realIndex,b,e.slides.length);w==="next"?e.slideNext():w==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function u(){const m=e.rtl,h=e.params.pagination;if(i())return;let b=e.pagination.el;b=zt(b);let w,y;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,A=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(y=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,y=e.previousSnapIndex):(y=e.previousIndex||0,w=e.activeIndex||0),h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const S=e.pagination.bullets;let x,E,$;if(h.dynamicBullets&&(n=wo(S[0],e.isHorizontal()?"width":"height"),b.forEach(C=>{C.style[e.isHorizontal()?"width":"height"]=`${n*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&y!==void 0&&(o+=w-(y||0),o>h.dynamicMainBullets-1?o=h.dynamicMainBullets-1:o<0&&(o=0)),x=Math.max(w-o,0),E=x+(Math.min(S.length,h.dynamicMainBullets)-1),$=(E+x)/2),S.forEach(C=>{const R=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${h.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();C.classList.remove(...R)}),b.length>1)S.forEach(C=>{const R=qr(C);R===w?C.classList.add(...h.bulletActiveClass.split(" ")):e.isElement&&C.setAttribute("part","bullet"),h.dynamicBullets&&(R>=x&&R<=E&&C.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),R===x&&l(C,"prev"),R===E&&l(C,"next"))});else{const C=S[w];if(C&&C.classList.add(...h.bulletActiveClass.split(" ")),e.isElement&&S.forEach((R,U)=>{R.setAttribute("part",U===w?"bullet-active":"bullet")}),h.dynamicBullets){const R=S[x],U=S[E];for(let W=x;W<=E;W+=1)S[W]&&S[W].classList.add(...`${h.bulletActiveClass}-main`.split(" "));l(R,"prev"),l(U,"next")}}if(h.dynamicBullets){const C=Math.min(S.length,h.dynamicMainBullets+4),R=(n*C-n)/2-$*n,U=m?"right":"left";S.forEach(W=>{W.style[e.isHorizontal()?U:"top"]=`${R}px`})}}b.forEach((S,x)=>{if(h.type==="fraction"&&(S.querySelectorAll(es(h.currentClass)).forEach(E=>{E.textContent=h.formatFractionCurrent(w+1)}),S.querySelectorAll(es(h.totalClass)).forEach(E=>{E.textContent=h.formatFractionTotal(A)})),h.type==="progressbar"){let E;h.progressbarOpposite?E=e.isHorizontal()?"vertical":"horizontal":E=e.isHorizontal()?"horizontal":"vertical";const $=(w+1)/A;let C=1,R=1;E==="horizontal"?C=$:R=$,S.querySelectorAll(es(h.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${C}) scaleY(${R})`,U.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(ll(S,h.renderCustom(e,w+1,A)),x===0&&s("paginationRender",S)):(x===0&&s("paginationRender",S),s("paginationUpdate",S)),e.params.watchOverflow&&e.enabled&&S.classList[e.isLocked?"add":"remove"](h.lockClass)})}function p(){const m=e.params.pagination;if(i())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=zt(b);let w="";if(m.type==="bullets"){let y=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&y>h&&(y=h);for(let T=0;T<y;T+=1)m.renderBullet?w+=m.renderBullet.call(e,T,m.bulletClass):w+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?w=m.renderFraction.call(e,m.currentClass,m.totalClass):w=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?w=m.renderProgressbar.call(e,m.progressbarFillClass):w=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(y=>{m.type!=="custom"&&ll(y,w||""),m.type==="bullets"&&e.pagination.bullets.push(...y.querySelectorAll(es(m.bulletClass)))}),m.type!=="custom"&&s("paginationRender",b[0])}function f(){e.params.pagination=Nb(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let h;typeof m.el=="string"&&e.isElement&&(h=e.el.querySelector(m.el)),!h&&typeof m.el=="string"&&(h=[...document.querySelectorAll(m.el)]),h||(h=m.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(m.el)],h.length>1&&(h=h.find(b=>Tu(b,".swiper")[0]===e.el))),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=zt(h),h.forEach(b=>{m.type==="bullets"&&m.clickable&&b.classList.add(...(m.clickableClass||"").split(" ")),b.classList.add(m.modifierClass+m.type),b.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(b.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&b.classList.add(m.progressbarOppositeClass),m.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(m.lockClass)}))}function g(){const m=e.params.pagination;if(i())return;let h=e.pagination.el;h&&(h=zt(h),h.forEach(b=>{b.classList.remove(m.hiddenClass),b.classList.remove(m.modifierClass+m.type),b.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(b.classList.remove(...(m.clickableClass||"").split(" ")),b.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...m.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:h}=e.pagination;h=zt(h),h.forEach(b=>{b.classList.remove(m.horizontalClass,m.verticalClass),b.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),a("init",()=>{e.params.pagination.enabled===!1?v():(f(),p(),u())}),a("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),a("snapIndexChange",()=>{u()}),a("snapGridLengthChange",()=>{p(),u()}),a("destroy",()=>{g()}),a("enable disable",()=>{let{el:m}=e.pagination;m&&(m=zt(m),m.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),a("lock unlock",()=>{u()}),a("click",(m,h)=>{const b=h.target,w=zt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const y=w[0].classList.contains(e.params.pagination.hiddenClass);s(y===!0?"paginationShow":"paginationHide"),w.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const _=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=zt(m),m.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),u()},v=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=zt(m),m.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:_,disable:v,render:p,update:u,init:f,destroy:g})}function Bb({swiper:e,extendParams:t,on:a,emit:s,params:r}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,o,i=r&&r.autoplay?r.autoplay.delay:3e3,l=r&&r.autoplay?r.autoplay.delay:3e3,c,d=new Date().getTime(),u,p,f,g,_,v;function m(Y){!e||e.destroyed||!e.wrapperEl||Y.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(v||Y.detail&&Y.detail.bySwiperTouchMove)&&x())}const h=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(l=c,u=!1);const Y=e.autoplay.paused?c:d+l-new Date().getTime();e.autoplay.timeLeft=Y,s("autoplayTimeLeft",Y,Y/i),o=requestAnimationFrame(()=>{h()})},b=()=>{let Y;return e.virtual&&e.params.virtual.enabled?Y=e.slides.find(X=>X.classList.contains("swiper-slide-active")):Y=e.slides[e.activeIndex],Y?parseInt(Y.getAttribute("data-swiper-autoplay"),10):void 0},w=()=>{let Y=e.params.autoplay.delay;const V=b();return!Number.isNaN(V)&&V>0&&(Y=V),Y},y=Y=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),h();let V=Y;typeof V>"u"&&(V=w(),i=V,l=V),c=V;const X=e.params.speed,H=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(X,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,X,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(X,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,X,!0,!0),s("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{y()})))};return V>0?(clearTimeout(n),n=setTimeout(()=>{H()},V)):requestAnimationFrame(()=>{H()}),V},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,y(),s("autoplayStart")},A=()=>{e.autoplay.running=!1,clearTimeout(n),cancelAnimationFrame(o),s("autoplayStop")},S=(Y,V)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(n),Y||(_=!0);const X=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):x()};if(e.autoplay.paused=!0,V){X();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),X())},x=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),_?(_=!1,y(c)):y(),e.autoplay.paused=!1,s("autoplayResume"))},E=()=>{if(e.destroyed||!e.autoplay.running)return;const Y=Dt();Y.visibilityState==="hidden"&&(_=!0,S(!0)),Y.visibilityState==="visible"&&x()},$=Y=>{Y.pointerType==="mouse"&&(_=!0,v=!0,!(e.animating||e.autoplay.paused)&&S(!0))},C=Y=>{Y.pointerType==="mouse"&&(v=!1,e.autoplay.paused&&x())},R=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",$),e.el.addEventListener("pointerleave",C))},U=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",$),e.el.removeEventListener("pointerleave",C))},W=()=>{Dt().addEventListener("visibilitychange",E)},ae=()=>{Dt().removeEventListener("visibilitychange",E)};a("init",()=>{e.params.autoplay.enabled&&(R(),W(),T())}),a("destroy",()=>{U(),ae(),e.autoplay.running&&A()}),a("_freeModeStaticRelease",()=>{(f||_)&&x()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?A():S(!0,!0)}),a("beforeTransitionStart",(Y,V,X)=>{e.destroyed||!e.autoplay.running||(X||!e.params.autoplay.disableOnInteraction?S(!0,!0):A())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){A();return}p=!0,f=!1,_=!1,g=setTimeout(()=>{_=!0,f=!0,S(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(n),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&x(),f=!1,p=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=w(),i=w())}),Object.assign(e.autoplay,{start:T,stop:A,pause:S,resume:x})}const Fb={class:"home-layout"},zb={class:"sticky-header-group"},Hb=["data-user-name"],jb={class:"home-tabs",id:"home-tabs--id"},Ub={class:"home-tab home-tab--active","data-home-tab":"lobby"},qb={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Gb={class:"home-tab","data-home-tab":"active"},Vb={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Kb={__name:"home_route",setup(e){const t=gt(),a=ve();window.CoreBetSlip=vu;const s=()=>{const d=document.querySelector(".bet-grid__toggle"),u=document.querySelector(".bet-grid__toggle-text"),p=document.querySelector(".bet-grid__select"),f=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:d,toggleText:u,selectSection:p,slipSection:f}),d&&u&&p&&f){const g=window.matchMedia("(orientation: portrait)").matches,_=window.matchMedia("(max-width: 768px)").matches;(g||_)&&(p.classList.remove("collapsed"),f.classList.add("collapsed"),u.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),d.addEventListener("click",v=>{console.log("[Bet Grid Toggle] Button clicked!"),v.preventDefault(),v.stopPropagation(),f.classList.contains("collapsed")?(p.classList.add("collapsed"),f.classList.remove("collapsed"),u.textContent="Close Bet Slip"):(p.classList.remove("collapsed"),f.classList.add("collapsed"),u.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:p.classList.contains("collapsed"),slipCollapsed:f.classList.contains("collapsed"),buttonText:u.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:d,toggleText:u,selectSection:p,slipSection:f})};document.addEventListener("click",d=>{const u=d.target;if(u&&u.dataset?.promotionTopic){const p={timestamp:Date.now(),heroImg:u.dataset.promotionHeroImg||"",caption:u.dataset.promotionCaption||"",tagline:u.dataset.promotionTagline||"",toast:u.dataset.promotionToast||"",topic:u.dataset.promotionTopic||"",topicToken:u.dataset.promotionTopicToken||"",marquee:u.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",p),ce.publish(a.hierTopics.PROMOTION__CLICK,JSON.stringify(p))}u&&u.dataset?.publishRouteHome&&(u.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(f=>{f.classList.toggle("dash-nav__btn--active",f===u)}),ce.publish(u.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),u&&u.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const r=(d,u=!1,p="cards",f={})=>{const g=document.querySelector(".tournaments-grid");if(!g)return;g.innerHTML="",g.style.animation="none",g.offsetHeight,g.style.animation="panel-enter 0.3s ease-out both",g.classList.toggle("tournaments-grid--list",p==="list");const _=document.getElementById("app"),v=_?.getAttribute("data-sync-theme")||"dark",m=_?.getAttribute("data-sync-lang")||"en",h=_?.getAttribute("data-sync-motif")||"brand",b=(T="")=>T.toLowerCase().replace(/\b\w/g,A=>A.toUpperCase()),w=T=>{const A=document.createElement("bma-tournament-list-card");return A.setAttribute("data-bma-tourn-guid",T.guid||""),A.setAttribute("data-bma-tourn-caption",T.caption||""),A.setAttribute("data-bma-tourn-tagline",T.tagline||""),A.setAttribute("data-bma-tourn-status",T.status||""),A.setAttribute("data-bma-tourn-class",T.status||""),A.setAttribute("data-bma-tourn-game-type",T.class||"DEFAULT"),A.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(T.sports_allowed)?JSON.stringify(T.sports_allowed):""),A.setAttribute("data-bma-tourn-entities",T.entities?JSON.stringify(T.entities):""),A.setAttribute("data-bma-tourn-entry_fee",T.entry_fee||"0"),A.setAttribute("data-bma-tourn-tournament_dollars",T.tournament_dollars||"0"),A.setAttribute("data-bma-tourn-matches",T.matches_expanded?.length||"0"),A.setAttribute("data-bma-tourn-tags",Array.isArray(T.tags)?JSON.stringify(T.tags):"[]"),A.setAttribute("data-bma-tourn-window_start_time",T.window_start_time||""),A.setAttribute("data-bma-tourn-window_end_time",T.window_end_time||""),A.setAttribute("data-sync-theme",v),A},y=T=>{const A=document.createElement("article"),S=T.status||"DRAFT";A.className=`tournament-item tournament-status-${S.toLowerCase()}`;const x=document.createElement("bma-tournament-card");return x.setAttribute("data-bma-tourn-id",T.id||""),x.setAttribute("data-bma-tourn-guid",T.guid||""),x.setAttribute("data-bma-tourn-caption",T.caption||""),x.setAttribute("data-bma-tourn-tagline",T.tagline||""),x.setAttribute("data-bma-tourn-window_start_time",T.window_start_time||""),x.setAttribute("data-bma-tourn-window_end_time",T.window_end_time||""),x.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(T.sports_allowed)?JSON.stringify(T.sports_allowed):T.sports_allowed||""),x.setAttribute("data-bma-tourn-entities",T.entities?JSON.stringify(T.entities):""),x.setAttribute("data-bma-tourn-tournament_dollars",T.tournament_dollars||""),x.setAttribute("data-bma-tourn-prize_distro",Array.isArray(T.prize_distro)?JSON.stringify(T.prize_distro):T.prize_distro||""),x.setAttribute("data-bma-tourn-matches",Array.isArray(T.matches_guids)?JSON.stringify(T.matches_guids):T.matches_guids||""),x.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(T.matches_expanded)?JSON.stringify(T.matches_expanded):T.matches_expanded||""),x.setAttribute("data-bma-tourn-entry_fee",T.entry_fee||""),x.setAttribute("data-bma-tourn-rake",T.rake||""),x.setAttribute("data-bma-tourn-tags",Array.isArray(T.tags)?JSON.stringify(T.tags):T.tags||""),x.setAttribute("data-bma-tourn-comments",T.comments||""),x.setAttribute("data-bma-tourn-class",T.status||""),x.setAttribute("data-bma-tourn-game-type",T.class||"DEFAULT"),x.setAttribute("data-bma-tourn-status",T.status||""),x.setAttribute("data-sync-theme",v),x.setAttribute("data-sync-lang",m),x.setAttribute("data-sync-motif",h),x.setAttribute("data-n55-size","medium"),x.setAttribute("data-n55-enchanted-cta-ambient","none"),x.setAttribute("data-tourn-custom-css",""),x.setAttribute("data-tourn-trophy","0"),x.setAttribute("data-bma-tourn-focus",""),x.setAttribute("data-bma-tourn-wait","false"),A.appendChild(x),A};if(u){d.forEach(A=>{if(A.type==="stats"){const j=document.createElement("div");j.className="tournament-category tournament-category--stats",j.innerHTML=A.html||"",g.appendChild(j);return}const S=document.createElement("div");S.className="tournament-category";const x=document.createElement("header");x.className="tournament-category-header";const E=document.createElement("div");E.className="category-title-line";const $=document.createElement("h2");if($.className="category-title",$.textContent=b(A.title),E.appendChild($),A.tournaments){const j=document.createElement("span");j.className="category-subtext",j.textContent=A.tournaments.length,E.appendChild(j)}const{tab:C="lobby",subStatus:R="all",sort:U="default",result:W="all",odds:ae="all"}=f,V=A.title.toLowerCase().includes("completed"),X=!V&&C==="my",H=(j,B,P)=>`<option value="${j}"${P?" selected":""}>${B}</option>`;let D="";if(C==="lobby"?D=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${H("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${H("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${H("default","Starting TD$: Default",U==="default")}
              ${H("td_high","Starting TD$: High to Low",U==="td_high")}
              ${H("td_low","Starting TD$: Low to High",U==="td_low")}
            </select>
          `:C==="my"&&X?D=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${H("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${H("all","Status: All",R==="all")}
              ${H("active","Status: Active",R==="active")}
              ${H("upcoming","Status: Upcoming",R==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${H("all","Odds: All",ae==="all")}
              ${H("available","Odds: Available",ae==="available")}
              ${H("none","Odds: Not Available",ae==="none")}
            </select>
          `:(C==="my"&&V||C==="completed")&&(D=`
            <select class="category-dropdown" data-filter-type="result">
              ${H("all","Result: All",W==="all")}
              ${H("trophy","Result: Won Trophy",W==="trophy")}
              ${H("no_trophy","Result: No Trophy",W==="no_trophy")}
            </select>
          `),x.appendChild(E),D){const j=document.createElement("button");j.className="category-filter-toggle",j.setAttribute("aria-label","Toggle filters"),j.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filters <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>';const B=document.createElement("div");B.className="category-controls";const P=localStorage.getItem("bma_view_mode")||"cards",M=document.createElement("span");M.className="category-view-btns",M.innerHTML=`
            <button class="category-view-btn${P==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            </button>
            <button class="category-view-btn${P==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            </button>
          `,B.appendChild(j),B.appendChild(M),x.appendChild(B)}if(D){const j=document.createElement("div");if(j.className="category-filter-row",j.style.display=window._bmaFilterRowOpen?"":"none",j.innerHTML=D,x.appendChild(j),window._bmaFilterRowOpen){const B=x.querySelector(".category-filter-toggle");B&&B.classList.add("category-filter-toggle--open")}}if(S.appendChild(x),g.appendChild(S),A.tournaments.length===0){const j=A.emptyMessage||"No tournaments available",B=A.emptySubtext||"Check back later for new tournaments",P=A.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',M=document.createElement("div");M.className="tournaments-empty",M.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",M.innerHTML=`
            ${P}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${j}</p>
            <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${B}</p>
          `,S.appendChild(M)}else{const j=document.createElement("div");if(j.className="card-rail",A.tournaments.forEach((B,P)=>{const M=p==="list"?w(B):y(B);M.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",M.style.animationDelay=`${Math.min(P*50,300)}ms`,j.appendChild(M)}),S.appendChild(j),A.tournaments.length>1){const B=document.createElement("div");B.className="card-rail__dots";for(let P=0;P<A.tournaments.length;P++){const M=document.createElement("span");M.className=`card-rail__dot${P===0?" card-rail__dot--active":""}`,B.appendChild(M)}S.appendChild(B)}if(A.tournaments.length>1){const B=document.createElement("button");B.className="card-rail__arrow card-rail__arrow--prev",B.setAttribute("aria-label","Previous card"),B.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',B.style.opacity="0";const P=document.createElement("button");P.className="card-rail__arrow card-rail__arrow--next",P.setAttribute("aria-label","Next card"),P.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',S.appendChild(B),S.appendChild(P);const M=S.querySelector(".card-rail__dots");j.addEventListener("scroll",()=>{const F=j.scrollLeft,z=j.firstElementChild?.offsetWidth||1,J=Math.round(F/(z+12));M&&M.querySelectorAll(".card-rail__dot").forEach((N,k)=>{N.classList.toggle("card-rail__dot--active",k===J)}),B.style.opacity=F<=10?"0":"";const Z=j.scrollWidth-j.clientWidth;P.style.opacity=F>=Z-10?"0":""},{passive:!0}),B.addEventListener("click",()=>{const F=j.firstElementChild?.offsetWidth||300;j.scrollBy({left:-(F+12),behavior:"smooth"})}),P.addEventListener("click",()=>{const F=j.firstElementChild?.offsetWidth||300;j.scrollBy({left:F+12,behavior:"smooth"})})}}});const T=g.dataset.filterContext;if(T!=="lobby"&&T!=="private"&&g.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let A="No tournaments available",S="Check back later for new tournaments";T==="my"?(A="You haven't joined any tournaments yet",S="Head to the lobby to find tournaments"):T==="completed"&&(A="No completed tournaments yet",S="Tournaments will appear here once they finish");const x=document.createElement("div");x.className="tournaments-empty",x.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",x.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${A}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${S}</p>
        `,g.appendChild(x)}}else d.forEach((T,A)=>{const S=p==="list"?w(T):y(T);S.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",S.style.animationDelay=`${Math.min(A*50,300)}ms`,g.appendChild(S)})},n=d=>{document.querySelectorAll("bma-tournament-card").forEach(p=>{p.setAttribute("data-sync-theme",d)})},o=d=>{const u=document.querySelectorAll("bma-tournament-card"),p=Date.now().toString();u.forEach(f=>{if(f===d){if(f.setAttribute("data-bma-tourn-focus",p),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="")}}else if(f.setAttribute("data-bma-tourn-focus",""),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="none")}}),typeof neodigmMarquee<"u"&&neodigmMarquee.init()},i=d=>{const{action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._}=d.detail;console.log("[home_route] Tournament action:",{action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._}),o(d.target),ce.publish("WC.TOURN_ACTION",JSON.stringify({action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._,timestamp:Date.now()}))};let l=null;const c=()=>{const d=document.getElementById("home-datetime--id");if(!d)return;const u=new Date,p=u.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),f=u.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});d.textContent=`${p} · ${f}`};return xt(async()=>{if(!a.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}c(),l=setInterval(c,24e3);const d=document.getElementById("app");if(d){const g=a.appCLIFeatures.features.theme?.state,_=a.appCLIFeatures.features.lang?.state,v=a.appCLIFeatures.features.motif?.state,m=a.appSession.session_user.guid;g&&(d.setAttribute("data-sync-theme",g),document.body.setAttribute("data-sync-theme",g)),_&&d.setAttribute("data-sync-lang",_),v&&d.setAttribute("data-sync-motif",v),m&&d.setAttribute("data-user-guid",m)}window._homeRouteRenderCards=r,window.initBetGridToggle=s;const u=ce.subscribe("APP.ROUTE_SYNC",(g,_)=>{try{const v=JSON.parse(_);v.theme&&n(v.theme.state)}catch(v){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",v)}});if(window._homeRoutePubSubToken=u,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),ce.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i),window._pendingTournGuid){const g=window._pendingTournGuid;delete window._pendingTournGuid,setTimeout(()=>{ce.publish("WC.TOURN_ACTION",JSON.stringify({action:"PLAY",tournamentGuid:g,timestamp:Date.now()}))},800)}const p=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,f=new pt(".featured-swiper",{modules:[Bb,Ib],slidesPerView:1,spaceBetween:16,loop:p>1,centeredSlides:p===1,autoplay:p>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:Math.min(2,p),spaceBetween:16},1024:{slidesPerView:Math.min(3,p),spaceBetween:20},1280:{slidesPerView:Math.min(3,p),spaceBetween:24}}});window.featuredSwiper=f,ce.publish(a.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Ps(()=>{l&&clearInterval(l),document.removeEventListener("bma-tournament-action",i),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&ce.unsubscribe(window._homeRoutePubSubToken)}),(d,u)=>(Le(),He("main",Fb,[G("div",zb,[G("bma-app-head-top",{"data-user-name":ft(a).appSession.session_user.name||"Guest"},null,8,Hb),u[0]||(u[0]=G("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),u[6]||(u[6]=ma('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div><div class="home-datetime" id="home-datetime--id" aria-hidden="true">—</div><bma-scores-banner id="bma-scores-banner--id"></bma-scores-banner></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports>',2)),G("nav",jb,[G("button",Ub,[(Le(),He("svg",qb,[...u[1]||(u[1]=[G("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),u[2]||(u[2]=Mt(" Main Lobby ",-1))]),G("button",Gb,[(Le(),He("svg",Vb,[...u[3]||(u[3]=[G("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"},null,-1)])])),u[4]||(u[4]=Mt(" Active Tourneys ",-1)),u[5]||(u[5]=G("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{visibility:"hidden"}},"0",-1))])]),u[7]||(u[7]=G("section",{class:"tournaments-section"},[G("div",{class:"tournaments-grid"})],-1)),u[8]||(u[8]=G("bma-app-foot-branded",null,null,-1)),u[9]||(u[9]=G("bma-app-foot",{"data-selected-item":"foot_all_sports"},null,-1))]))}},Yb={};function Wb(e,t){return Le(),He("main",null,[...t[0]||(t[0]=[G("h1",null,"App FAQ",-1)])])}const Fs=ga(Yb,[["render",Wb]]),Jb={};function Xb(e,t){return Le(),He("main",null,[...t[0]||(t[0]=[G("h1",null,"App Help",-1)])])}const Qb=ga(Jb,[["render",Xb]]),Gt=class Gt{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,a,s,r=!0){this.strChat=s,this.isDebug=r;const n=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",a).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${n}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(i){Gt.onSSEOpen(i)},this.sseEvent.onmessage=function(i){Gt.onSSEMessage(i)},this.sseEvent.onerror=function(i){Gt.onSSEError(i)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let a=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(a=JSON.parse(t.data),a?.class!="NO_MESSAGE")if(a?.class&&a?.msg)switch(a.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":a?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(a.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",a.id+" | "+a.class+" | "+a.msg+" | "+a.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",a),ce.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(a));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Gt.sseEvent=null,Gt.strChat=null,Gt.isDebug=!0,Gt.sessionId=null;let Gr=Gt;class ea{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(a){return Math.floor(Math.random()*a)},fPromiseJS:async function(a,s){return new Promise((r,n)=>{const o=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});o.onload=r,o.onerror=n,a.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(a,s,r){const n=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});r&&(n.onload=function(){r()}),a.getElementsByTagName("head")[0].appendChild(n)},fAsyncCSS:function(a,s){let r=a.createElement("link");r.rel="stylesheet",r.href=s,a.getElementsByTagName("head")[0].appendChild(r)},data2prop:function(a){a=a.replace("data-","").toLowerCase();let s=a.split(""),r=[],n=!1;return s.forEach(o=>{o=="-"?n=!0:(r.push(n?o.toUpperCase():o),n=!1)}),r.join("")},doDataLayer:function(a,s){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+a+" | "+s),window.dataLayer&&window.dataLayer.push({event:a,msg:s})},isJSON:function(a){let s=!1;try{s=typeof JSON.parse(a)}catch{}return s=="object"},appStateListen:function(a){NeodigmKeylime.subscribe("mouseover",r=>{r?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(r.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",r=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let n=neodigmUtils.walkDOM3(r?.target,"n55TypeonClick");n&&neodigmUtils.typeOn(JSON.parse(n))},!0),NeodigmKeylime.subscribe("touchstart",r=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let s=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;s&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=s)},prettyTimeRETIRE:a=>{let s=new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return a=="Dec 31, 1969"&&(s=""),s},prettyTime:a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:a=>a&&a[0].toUpperCase()+a.slice(1)||"",genHash:a=>(a=String(a),Math.abs(a.split("").reduce((s,r)=>(s<<5)-s+r.charCodeAt(0)|0,0))),flashTitle:(a=neodigmOpt.N55_THEME_DEFAULT,s=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[a]&&(document.title=neodigmOpt.N55_THEME_COLORS[a][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},s))},robinTheme:function(a=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const r=56;s.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=a},i*r),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(r+r)))}),s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const n=256;s.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=a},i*n),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*n+3e3)}),neodigmUtils.flashTitle(a,2e3)}},countTo:async function(a,s,r=neodigmOpt.neodigmMetronome.countTo){const n=[16,r];return[...document.querySelectorAll(a)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-s);neodigmMetronome.unsubscribe(n[1]+i).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&s!=d){let u=l/n[0];u=Math.round(u),c!=0?o.textContent=d<s?d+u:d-u:o.textContent=s}},n[1]+i,n[0])}),neodigmUtils},typeOff:async function(a){let s=document.querySelector(a?.q1st);if(s){let r=s.textContent.length,n=window.getComputedStyle(s),o=Number(n.paddingTop.replace("px",""))+Number(n.paddingBottom.replace("px",""));for(s.offsetHeight&&(s.style.height=s.offsetHeight-o+"px");r;)setTimeout(()=>{s.textContent=s.textContent.replace(/.$/,"")},a.uniqueDelay*r--)}},typeOn:async function(a){let s=document.querySelector(a?.q1st);if(s){s.dataset.n55Typeon=0;let r=a.msg.replaceAll("|","   |   ")+"   ",n=r.split("|");if(a?.mode=="OFF")return neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay}),neodigmUtils;if(a?.mode=="RANDOM"&&n.length){let o=s.dataset.n55Typeon=neodigmUtils.f02x(n.length);r=n[o]}neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),neodigmMetronome.unsubscribe(a.uniqueDelay).subscribe(o=>{let i=r[r.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),s.dataset.n55Typeon++),s.textContent+=i,a?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(a)},a.uniqueDelay,r.length)}return neodigmUtils},getValJSON:function(a,s){try{return JSON.parse(a)}catch{return JSON.parse('{ "'+s+'": "'+a+'" }')}},walkDOM3:function(a,s,r=!1){let n=null;if(!n&&a?.dataset[s]&&(n=a),!n&&a?.parentNode?.dataset[s]&&(n=a.parentNode),!n&&a.tagName!="BODY"&&a?.parentNode?.parentNode?.dataset[s]&&(n=a.parentNode.parentNode),n)return r?n:n.dataset[s]},doSetT:function(a,s){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(a,s):setTimeout(a,s)},shake:function(a,s=!0){return[...document.querySelectorAll(a)].forEach(function(r,n){r.classList.add("shake__an"),setTimeout(function(){r.classList.remove("shake__an")},460)}),ea.neodigmUtils},hardReload:function(a="n55reset"){const s=new URLSearchParams(window.location.search);s.set(a,new Date().getTime());const r=s.toString();window.location.search=r}}))}const Zb={class:"auth-page"},e_={class:"auth-page-right"},t_={class:"auth-card"},a_={class:"form-group"},s_={class:"form-group"},r_={class:"password-input-wrapper"},n_=["type"],o_={style:{"text-align":"right"}},i_={class:"auth-link-center"},l_={__name:"signin_route",setup(e){const t=gt(),a=ve(),s=(p="signin")=>{t.push({name:p})};let r=null;const n=Ke(!1),o=()=>{n.value=!n.value},i=(p=3,f=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const g=Math.floor(Math.random()*p)+f,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${g}`)),r||(r=ce.subscribe("APP__ROUTE_SYNC",(v,m)=>{const h=JSON.parse(m);switch(Object.keys(h)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(_=>_.code==f)[0]?.copy;g=g.filter(_=>_[0]==p.dataset.syncMicrocopyText)[0],g&&(p.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(_=>_.code==f)[0]?.copy;g=g.filter(_=>_[0]==p.dataset.syncMicrocopyPlaceholder)[0],g&&(p.placeholder=g[1])})},c=p=>{ea.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),a.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let g=null,_=null;if(!p?.value)g="Please enter your email",_="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)g="Please enter a valid email address",_="#inp__text--email";else if(!f?.value)g="Please enter your password",_="#inp__text--password";else if(f.value.length<10)g="Password must be at least 10 characters",_="#inp__text--password";else{const v={email:p.value,hash:ea.neodigmUtils().genHash(f.value)};Ae.doSignin(v,m=>{const w=(m?.entity?.tags||[]).find(y=>y.userName)?.userName||"";if(a.appSession.session_user.authenticated=!0,a.appSession.session_user.email=v.email,a.appSession.session_user.fname=m?.entity?.first,a.appSession.session_user.lname=m?.entity?.last,a.appSession.session_user.userName=w,a.appSession.session_user.name=w,a.appSession.session_user.guid=m?.entity?.guid,a.saveSessionUser(),a.appCLIFeatures.features.sse.state){const y=m?.entity?.guid||a.appSession.session_user.guid;Gr.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",y,a,!0)}})}g&&(c(_),neodigmToast.q(g,"danger"))};return xt(()=>{i(),l()}),(p,f)=>(Le(),He("div",Zb,[f[10]||(f[10]=ma('<div class="auth-page-left" data-v-536c264d><div class="auth-bg" data-v-536c264d><div class="auth-bg-image" data-v-536c264d></div><div class="auth-bg-image" data-v-536c264d></div><div class="auth-bg-image" data-v-536c264d></div></div><div class="auth-overlay" data-v-536c264d></div><div class="auth-branding-content" data-v-536c264d><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-536c264d><p class="auth-branding-tagline" data-v-536c264d>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-536c264d>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-536c264d> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),G("div",e_,[G("div",t_,[f[9]||(f[9]=G("div",{class:"auth-header"},[G("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),G("form",{class:"auth-form",onSubmit:Os(u,["prevent"])},[G("div",a_,[f[4]||(f[4]=G("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),G("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=g=>d())},null,32)]),G("div",s_,[f[5]||(f[5]=G("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),G("div",r_,[G("input",{id:"inp__text--password",type:n.value?"text":"password",autocomplete:"current-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,n_),G("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=g=>o()),tabindex:"-1"},[G("span",{class:Xt(n.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),G("div",o_,[G("a",{class:"auth-link",onClick:f[2]||(f[2]=g=>s("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=G("div",{class:"auth-actions"},[G("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),G("p",i_,[f[6]||(f[6]=G("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Mt()),G("a",{class:"auth-link",onClick:f[3]||(f[3]=g=>s("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},c_=ga(l_,[["__scopeId","data-v-536c264d"]]),d_={class:"auth-page"},u_={__name:"signout_route",setup(e){const t=gt();ve();const a=()=>{mvvLegit.doSignout()},s=()=>{t.push({name:"home_route"})};return(r,n)=>(Le(),He("div",d_,[n[1]||(n[1]=ma('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),G("div",{class:"auth-page-right"},[G("div",{class:"auth-card"},[n[0]||(n[0]=G("div",{class:"auth-header"},[G("h1",{class:"auth-title"},"Sign Out"),G("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),G("div",{class:"auth-actions"},[G("button",{onClick:a,class:"btn btn-red"}," Sign Out "),G("button",{onClick:s,class:"btn btn-outline"}," Cancel ")])])])]))}},p_=ga(u_,[["__scopeId","data-v-15bfefd6"]]),f_={class:"auth-page"},h_={class:"auth-page-right"},m_={class:"auth-card auth-card-wide"},g_={class:"form-row"},b_={class:"form-group"},__={class:"form-group"},v_={class:"form-group"},y_={class:"form-group"},w_={class:"form-group"},x_={class:"password-input-wrapper"},T_=["type"],S_={class:"form-group"},E_={class:"password-input-wrapper"},k_=["type"],A_={class:"form-group form-group-checkbox"},P_={class:"checkbox-label"},C_={class:"auth-link-center"},O_={__name:"signup_route",setup(e){const t=gt(),a=ve(),s=(b="signin")=>{t.push({name:b})};let r=null,n=null;const o=Ke(!1),i=Ke(!1),l=Ke(!1),c=()=>{o.value=!o.value},d=()=>{i.value=!i.value},u=b=>{b.preventDefault(),ce.publish(a.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(b=3,w=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":b=3,w=1;break;case"white_label":b=3,w=4;break}const y=Math.floor(Math.random()*b)+w,T=document.querySelector(".img__bg")?.classList;T&&(T.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),T.add(`img__bg--${y}`)),r||(r=ce.subscribe("APP__ROUTE_SYNC",(A,S)=>{const x=JSON.parse(S);switch(Object.keys(x)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(b=>{const w=a.appCLIFeatures?.features?.lang?.state;let y=a.appMeta.microcopy.language.filter(T=>T.code==w)[0]?.copy;y=y.filter(T=>T[0]==b.dataset.syncMicrocopyText)[0],y&&(b.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(b=>{const w=a.appCLIFeatures?.features?.lang?.state;let y=a.appMeta.microcopy.language.filter(T=>T.code==w)[0]?.copy;y=y.filter(T=>T[0]==b.dataset.syncMicrocopyPlaceholder)[0],y&&(b.placeholder=y[1])})},g=b=>{ea.neodigmUtils().shake(b||"#inp__text--email")},_=()=>{let b=document.querySelectorAll("#inp__text--email")[0].value;a.doCLI(b)},v=b=>{const w=[];return b.length<10&&w.push("at least 10 characters"),/[a-z]/.test(b)||w.push("1 lowercase"),/[A-Z]/.test(b)||w.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(b)||w.push("1 special character"),/[^\x00-\x7F]/.test(b)&&w.push("ASCII characters only"),w},m=async()=>{const b=document.querySelector("#inp__text--username"),w=b?.value?.trim();if(w)try{(await Ae.checkUserName(w)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),b.value="",b.focus())}catch(y){console.error("Error checking username:",y)}},h=()=>{const b=document.querySelector("#inp__text--first-name"),w=document.querySelector("#inp__text--last-name"),y=document.querySelector("#inp__text--email"),T=document.querySelector("#inp__text--username"),A=document.querySelector("#inp__text--password"),S=document.querySelector("#inp__text--verify-password");let x=null,E=null;if(!b?.value)x="Please enter your first name",E="#inp__text--first-name";else if(!w?.value)x="Please enter your last name",E="#inp__text--last-name";else if(!y?.value)x="Please enter your email",E="#inp__text--email";else if(y.value.indexOf("@")===-1||y.value.indexOf(".")===-1)x="Please enter a valid email address",E="#inp__text--email";else if(!T?.value)x="Please enter a user name",E="#inp__text--username";else if(!A?.value)x="Please enter a password",E="#inp__text--password";else{const $=v(A.value);if($.length>0)x="Password must have:|"+$.join(", "),E="#inp__text--password";else if(!S?.value)x="Please verify your password",E="#inp__text--verify-password";else if(A.value!==S.value)x="Passwords do not match",E="#inp__text--verify-password";else{const C=b.value.trim(),R=w.value.trim(),U=[{userName:T.value.trim(),ts:Date.now()}],W={email:y.value,hash:ea.neodigmUtils().genHash(A.value),first:C,last:R,company:"",phone:"",tags:U};Ae.doSignup(W,ae=>{ae.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}x&&(g(E),neodigmToast.q(x,"danger"))};return xt(()=>{p(),f(),n||(n=ce.subscribe(a.hierTopics.ROUTE__SIGNUP__TERMS,(b,w)=>{JSON.parse(w).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(b,w)=>(Le(),He("div",f_,[w[23]||(w[23]=ma('<div class="auth-page-left" data-v-e1a086be><div class="auth-bg" data-v-e1a086be><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div></div><div class="auth-overlay" data-v-e1a086be></div><div class="auth-branding-content" data-v-e1a086be><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-e1a086be><p class="auth-branding-tagline" data-v-e1a086be>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-e1a086be>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-e1a086be> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),G("div",h_,[G("div",m_,[G("form",{class:"auth-form",onSubmit:Os(h,["prevent"])},[G("div",g_,[G("div",b_,[w[12]||(w[12]=G("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),G("input",{id:"inp__text--first-name",type:"text",autocomplete:"given-name","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"First name",onKeyup:w[0]||(w[0]=Kt(y=>h(),["enter"]))},null,32)]),G("div",__,[w[13]||(w[13]=G("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),G("input",{id:"inp__text--last-name",type:"text",autocomplete:"family-name","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Last name",onKeyup:w[1]||(w[1]=Kt(y=>h(),["enter"]))},null,32)])]),G("div",v_,[w[14]||(w[14]=G("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),G("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:w[2]||(w[2]=y=>_()),onKeyup:w[3]||(w[3]=Kt(y=>h(),["enter"]))},null,32)]),G("div",y_,[w[15]||(w[15]=G("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),G("input",{id:"inp__text--username",type:"text",autocomplete:"username","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:w[4]||(w[4]=y=>m()),onKeyup:w[5]||(w[5]=Kt(y=>h(),["enter"]))},null,32)]),G("div",w_,[w[16]||(w[16]=G("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),G("div",x_,[G("input",{id:"inp__text--password",type:o.value?"text":"password",autocomplete:"new-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:w[6]||(w[6]=Kt(y=>h(),["enter"]))},null,40,T_),G("button",{type:"button",class:"password-toggle-btn",onClick:w[7]||(w[7]=y=>c()),tabindex:"-1"},[G("span",{class:Xt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),w[17]||(w[17]=G("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),G("div",S_,[w[18]||(w[18]=G("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),G("div",E_,[G("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:w[8]||(w[8]=Kt(y=>h(),["enter"]))},null,40,k_),G("button",{type:"button",class:"password-toggle-btn",onClick:w[9]||(w[9]=y=>d()),tabindex:"-1"},[G("span",{class:Xt(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),G("div",A_,[G("label",P_,[rs(G("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":w[10]||(w[10]=y=>l.value=y),class:"terms-checkbox"},null,512),[[lh,l.value]]),w[19]||(w[19]=G("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),G("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),w[22]||(w[22]=G("div",{class:"auth-actions"},[G("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),G("p",C_,[w[20]||(w[20]=G("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),w[21]||(w[21]=Mt()),G("a",{class:"auth-link",onClick:w[11]||(w[11]=y=>s("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},$_=ga(O_,[["__scopeId","data-v-e1a086be"]]),M_={class:"auth-page"},R_={class:"auth-page-right"},L_={class:"auth-card"},D_={class:"form-group"},N_={class:"auth-link-center"},I_={__name:"forgot_route",setup(e){const t=gt(),a=ve(),s=(c="signin_route")=>{t.push({name:c})};let r=null;const n=(c=3,d=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),r||(r=ce.subscribe("APP__ROUTE_SYNC",(f,g)=>{const _=JSON.parse(g);switch(Object.keys(_)[0]){case"Motif":n();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=a.appCLIFeatures?.features?.lang?.state;let u=a.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=a.appCLIFeatures?.features?.lang?.state;let u=a.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},i=c=>{ea.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Ae.genHeaders()};fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{s("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(u),neodigmToast.q(d,"danger"))};return xt(()=>{n(),o()}),(c,d)=>(Le(),He("div",M_,[d[7]||(d[7]=ma('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),G("div",R_,[G("div",L_,[d[6]||(d[6]=G("div",{class:"auth-header"},[G("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),G("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),G("form",{class:"auth-form",onSubmit:Os(l,["prevent"])},[G("div",D_,[d[2]||(d[2]=G("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),G("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Kt(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=G("div",{class:"auth-actions"},[G("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),G("p",N_,[d[3]||(d[3]=G("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Mt()),G("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>s("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},B_={class:"auth-page"},F_={class:"auth-page-right"},z_={class:"auth-card"},H_={class:"form-group"},j_={class:"password-input-wrapper"},U_=["type"],q_={class:"form-group"},G_={class:"password-input-wrapper"},V_=["type"],K_={__name:"resethash_route",setup(e){const t=gt(),a=ve(),s=()=>{t.push({name:"home_route"})};let r=null;const n=Ke(!1),o=Ke(!1),i=()=>{n.value=!n.value},l=()=>{o.value=!o.value},c=(g=3,_=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":g=3,_=1;break;case"white_label":g=3,_=4;break}const v=Math.floor(Math.random()*g)+_,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${v}`)),r||(r=ce.subscribe("APP__ROUTE_SYNC",(h,b)=>{const w=JSON.parse(b);switch(Object.keys(w)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const _=a.appCLIFeatures?.features?.lang?.state;let v=a.appMeta.microcopy.language.filter(m=>m.code==_)[0]?.copy;v=v.filter(m=>m[0]==g.dataset.syncMicrocopyText)[0],v&&(g.textContent=v[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const _=a.appCLIFeatures?.features?.lang?.state;let v=a.appMeta.microcopy.language.filter(m=>m.code==_)[0]?.copy;v=v.filter(m=>m[0]==g.dataset.syncMicrocopyPlaceholder)[0],v&&(g.placeholder=v[1])})},u=g=>{ea.neodigmUtils().shake(g||"#inp__text--password")},p=g=>{const _=[];return g.length<10&&_.push("at least 10 characters"),/[a-z]/.test(g)||_.push("1 lowercase"),/[A-Z]/.test(g)||_.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||_.push("1 special character"),/[^\x00-\x7F]/.test(g)&&_.push("ASCII characters only"),_},f=()=>{const g=document.querySelector("#inp__text--password"),_=document.querySelector("#inp__text--verify-password");let v=null,m=null;if(!g?.value)v="Please enter a password",m="#inp__text--password";else{const h=p(g.value);if(h.length>0)v="Password must have:|"+h.join(", "),m="#inp__text--password";else if(!_?.value)v="Please verify your password",m="#inp__text--verify-password";else if(g.value!==_.value)v="Passwords do not match",m="#inp__text--verify-password";else{const b=a.appSession.session_user.email||"",w={email:b,hash:ea.neodigmUtils().genHash(g.value),modified_by:b},y={method:"POST",body:JSON.stringify(w),headers:Ae.genHeaders()};fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/acctEntity/resetHash",y).then(T=>T.json()).then(T=>{T.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(T=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}v&&(u(m),neodigmToast.q(v,"danger"))};return xt(()=>{c(),d()}),(g,_)=>(Le(),He("div",B_,[_[9]||(_[9]=ma('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),G("div",F_,[G("div",z_,[_[8]||(_[8]=G("div",{class:"auth-header"},[G("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),G("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),G("form",{class:"auth-form",onSubmit:Os(f,["prevent"])},[G("div",H_,[_[4]||(_[4]=G("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),G("div",j_,[G("input",{id:"inp__text--password",type:n.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:_[0]||(_[0]=Kt(v=>f(),["enter"]))},null,40,U_),G("button",{type:"button",class:"password-toggle-btn",onClick:_[1]||(_[1]=v=>i()),tabindex:"-1"},[G("span",{class:Xt(n.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),_[5]||(_[5]=G("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),G("div",q_,[_[6]||(_[6]=G("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),G("div",G_,[G("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:_[2]||(_[2]=Kt(v=>f(),["enter"]))},null,40,V_),G("button",{type:"button",class:"password-toggle-btn",onClick:_[3]||(_[3]=v=>l()),tabindex:"-1"},[G("span",{class:Xt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),G("div",{class:"auth-actions"},[_[7]||(_[7]=G("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),G("button",{type:"button",onClick:s,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},Y_=ga(K_,[["__scopeId","data-v-3ae2c87b"]]),W_={class:"auth-page"},J_={class:"auth-page-right"},X_={class:"auth-card"},Q_={class:"verification-content"},Z_={class:"timer-display"},e0={__name:"verf_link_route",setup(e){const t=gt();fu(),ve();const a=Ke(7200);let s=null;const r=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},n=()=>{s=setInterval(()=>{a.value--,a.value<=0&&(clearInterval(s),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return xt(()=>{n()}),Ps(()=>{s&&clearInterval(s)}),(o,i)=>(Le(),He("div",W_,[i[4]||(i[4]=ma('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),G("div",J_,[G("div",X_,[i[3]||(i[3]=G("div",{class:"auth-header"},[G("h1",{class:"auth-title"},"Check Your Email"),G("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),G("div",Q_,[i[0]||(i[0]=G("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=G("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=G("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),G("div",Z_,zc(r(a.value)),1)])])])]))}},t0=ga(e0,[["__scopeId","data-v-d92b2a33"]]);class a0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-email","data-active-count","data-played-count","data-trophy-count"]}connectedCallback(){this._unsub=Ee.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",a=this.getAttribute("data-email")||"",s=this.getAttribute("data-active-count")||"0",r=this.getAttribute("data-played-count")||"0",n=this.getAttribute("data-trophy-count")||"0",o=t.charAt(0).toUpperCase(),i=new Date,l=i.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),c=i.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"}),d=`${l} · ${c}`;this.shadowRoot.innerHTML=`
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
                ${a?`<div class="hero__email">${a}</div>`:""}
                <div class="hero__timestamp">${d}</div>
                <div class="hero__kpis">
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${s}</span>
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
        `}}customElements.define("bma-profile-hero",a0);class s0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-played","data-first-place","data-trophies","data-favorite-sport","data-favorite-sport-group","data-win-rate","data-win-loss-record"]}connectedCallback(){this._unsub=Ee.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-played")||"0",a=this.getAttribute("data-first-place")||"0",s=this.getAttribute("data-trophies")||"0",r=this.getAttribute("data-favorite-sport")||"—",n=this.getAttribute("data-favorite-sport-group")||"",o=this.getAttribute("data-win-rate")||"—",i=this.getAttribute("data-win-loss-record")||"",l=n?`<bma-sport-icon data-sport-group="${n.toLowerCase()}" style="width:20px;height:20px;"></bma-sport-icon>`:"";this.shadowRoot.innerHTML=`
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
        `}}customElements.define("bma-profile-stats",s0);class r0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-contests"]}connectedCallback(){this._unsub=Ee.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}get contests(){const t=this.getAttribute("data-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ve.find(s=>s.key===t)?.group||""}render(){const t=this.contests,a=n=>`<span class="chip chip--${n==="LOCKED"?"locked":n==="UPCOMING"?"upcoming":n==="COMPLETED"?"completed":"default"}">${n==="LOCKED"?"Active":n==="UPCOMING"?"Upcoming":n==="COMPLETED"?"Completed":n}</span>`,s=n=>n===1?'<div class="card__trophy" style="background-image: var(--trophy-gold-tall);"></div>':n===2?'<div class="card__trophy" style="background-image: var(--trophy-silver-tall);"></div>':n===3?'<div class="card__trophy" style="background-image: var(--trophy-bronze-tall);"></div>':"",r=t.map(n=>{const o=n.sports?.[0]||"",i=this._sportGroup(o),l=i?`<bma-sport-icon data-sport-group="${i}" style="width:18px;height:18px;flex-shrink:0;opacity:0.7;"></bma-sport-icon>`:"",c=n.startTime?Ya.formatDateLocal(n.startTime,{month:"short",day:"numeric"}):"",d=n.placement?s(n.placement):"";return`
                <div class="card" data-contest-id="${n.id||""}">
                    <div class="card__top">
                        <div class="card__info">
                            ${l}
                            <span class="card__name">${n.name||"Tournament"}</span>
                        </div>
                        <div class="card__right">
                            ${a(n.status)}
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
        `,this.shadowRoot.querySelectorAll(".card[data-contest-id]").forEach(n=>{n.addEventListener("click",()=>{const o=n.dataset.contestId;o&&this.dispatchEvent(new CustomEvent("contest-click",{detail:{contestGuid:o},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-history",r0);class n0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-active-section","data-sections"]}connectedCallback(){this._unsub=Ee.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}get activeSection(){return this.getAttribute("data-active-section")||"overview"}render(){const t=this.activeSection,o=((this.getAttribute("data-sections")||"profile")==="top-players"?[{id:"overall",label:"Overall",icon:'<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>'},{id:"earnings",label:"TD$ Won",icon:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>'}]:[{id:"overview",label:"Overview",icon:'<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>'},{id:"contests",label:"Tourneys",icon:'<path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>'},{id:"guide",label:"How to Play",icon:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>'},{id:"account",label:"Account",icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',desktopOnly:!0}]).map(i=>`
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
        `,this.shadowRoot.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.section;this.setAttribute("data-active-section",l),this.dispatchEvent(new CustomEvent("section-change",{detail:{section:l},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-nav",n0);class o0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Ee.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}render(){this.shadowRoot.innerHTML=`
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
        `;const t=this.shadowRoot.getElementById("guide-modes-rail"),a=this.shadowRoot.querySelectorAll("#guide-modes-dots .modes-dot"),s=this.shadowRoot.getElementById("guide-modes-prev"),r=this.shadowRoot.getElementById("guide-modes-next");if(t&&a.length){const n=()=>(t.firstElementChild?.offsetWidth||300)+12;t.addEventListener("scroll",()=>{const o=Math.round(t.scrollLeft/n());a.forEach((i,l)=>i.classList.toggle("modes-dot--active",l===o))},{passive:!0}),a.forEach((o,i)=>{o.addEventListener("click",()=>{t.scrollTo({left:i*n(),behavior:"smooth"})})}),s&&s.addEventListener("click",()=>{t.scrollBy({left:-n(),behavior:"smooth"})}),r&&r.addEventListener("click",()=>{t.scrollBy({left:n(),behavior:"smooth"})})}}}customElements.define("bma-profile-guide",o0);const i0={class:"profile-layout"},l0={class:"profile-shell"},c0={class:"profile-sidebar"},d0=["data-active-section"],u0={class:"profile-content"},p0={class:"profile-panel"},f0={class:"profile-panel"},h0={class:"profile-panel"},m0={class:"profile-panel profile-panel--account-desktop"},g0={class:"account-panel"},b0={class:"mobile-account-bar"},_0={__name:"profile_route",setup(e){const t=gt(),a=ve(),s=Ke("overview"),r=Ke(!1),n=()=>{t.push({name:"home_route"})},o=u=>{s.value=u.detail?.section||"overview"},i=u=>{const p=u.detail?.contestGuid;p&&(window._pendingTournGuid=p,t.push({name:"home_route"}))},l=()=>{const u=a.appSession?.session_user||{},p=u.guid,g=(a.coreTourn.length>0?a.coreTourn[a.coreTourn.length-1].data:[]).filter(C=>(C.entities?.guids||[]).includes(p)),_=g.filter(C=>["LOCKED","UPCOMING"].includes(C.status||C.class)),v=g.filter(C=>(C.status||C.class)==="COMPLETED");let m=0,h=0,b=0;g.forEach(C=>{(Array.isArray(C.tags)?C.tags:[]).forEach(U=>{if(!U||typeof U!="object")return;const W=(U.entity_guid===p?U.badge:null)||(typeof U[p]=="string"?U[p]:null);typeof W=="string"&&W.startsWith("--badge__ribbon--")&&(W==="--badge__ribbon--gold"?m++:W==="--badge__ribbon--silver"?h++:W==="--badge__ribbon--bronze"&&b++)})});const w={};g.forEach(C=>{(C.sports_allowed||[]).forEach(R=>{const W=Ve.find(ae=>ae.key===R.key)?.group||"Other";w[W]=(w[W]||0)+1})});let y="",T="",A=0;Object.entries(w).forEach(([C,R])=>{R>A&&(A=R,y=C,T=C)});const S=ke._betStatsCache?.stats||null;let x="—",E="";if(S){const C=S.wins+S.losses;C>0&&(x=Math.round(S.wins/C*100)+"%",E=`${S.wins}-${S.losses}`)}const $=[...g].sort((C,R)=>new Date(R.status_time||0)-new Date(C.status_time||0)).slice(0,20).map(C=>{let R=null;(Array.isArray(C.tags)?C.tags:[]).forEach(Y=>{if(!Y||typeof Y!="object")return;const V=(Y.entity_guid===p?Y.badge:null)||(typeof Y[p]=="string"?Y[p]:null);V==="--badge__ribbon--gold"?R=1:V==="--badge__ribbon--silver"?R=2:V==="--badge__ribbon--bronze"&&(R=3)});const W=C.sports_allowed?.[0]?.key||"",ae=Ve.find(Y=>Y.key===W);return{id:C.guid,name:C.caption||"Tournament",sport:ae?.title||"",sports:[W],status:C.status||C.class||"",placement:R,startTime:C.window_start_time}});return{username:u.userName||u.name||"Player",email:u.email||"",activeCount:_.length,playedCount:v.length,trophyCount:m+h+b,gold:m,silver:h,bronze:b,firstPlace:m,favSport:y,favGroup:T,winRate:x,record:E,recentContests:$}},c=()=>{const u=l(),p=document.querySelector("bma-profile-hero");p&&(p.setAttribute("data-username",u.username),p.setAttribute("data-email",u.email),p.setAttribute("data-active-count",String(u.activeCount)),p.setAttribute("data-played-count",String(u.playedCount)),p.setAttribute("data-trophy-count",String(u.trophyCount)));const f=document.querySelector("bma-profile-stats");f&&(f.setAttribute("data-played",String(u.playedCount)),f.setAttribute("data-first-place",String(u.firstPlace)),f.setAttribute("data-trophies",String(u.trophyCount)),f.setAttribute("data-favorite-sport",u.favSport),f.setAttribute("data-favorite-sport-group",u.favGroup),f.setAttribute("data-win-rate",u.winRate),f.setAttribute("data-win-loss-record",u.record));const g=document.querySelector("bma-profile-history");g&&g.setAttribute("data-contests",JSON.stringify(u.recentContests));const _=document.getElementById("profile-trophy-pack");_&&(_.innerHTML=`
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
      `)};let d=null;return xt(async()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}c();const u=a.appSession?.session_user?.guid;u&&ke._ensureBetStatsCache(u).then(p=>{p&&c()}),d=ce.subscribe(a.hierTopics.ROUTE__HOME_HYDRATE,()=>{c()})}),Ps(()=>{d&&ce.unsubscribe(d)}),(u,p)=>(Le(),He("main",i0,[G("div",{class:"profile-header"},[G("button",{class:"profile-header__back",onClick:n,"aria-label":"Back"},[...p[7]||(p[7]=[G("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[G("polyline",{points:"15 18 9 12 15 6"})],-1)])]),p[8]||(p[8]=G("h1",{class:"profile-header__title"},"My Profile",-1))]),p[18]||(p[18]=G("bma-profile-hero",null,null,-1)),G("div",l0,[G("aside",c0,[G("bma-profile-nav",{"data-active-section":s.value,onSectionChange:o},null,40,d0)]),G("div",u0,[rs(G("section",p0,[...p[9]||(p[9]=[G("div",{id:"profile-trophy-pack",class:"trophy-pack"},null,-1),G("bma-profile-stats",null,null,-1)])],512),[[Ns,s.value==="overview"]]),rs(G("section",f0,[G("bma-profile-history",{onContestClick:i},null,32)],512),[[Ns,s.value==="contests"]]),rs(G("section",h0,[...p[10]||(p[10]=[G("bma-profile-guide",null,null,-1)])],512),[[Ns,s.value==="guide"]]),rs(G("section",m0,[G("div",g0,[G("button",{class:"account-btn",onClick:p[0]||(p[0]=f=>ft(ce).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[11]||(p[11]=[G("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[G("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Mt(" Change Password ",-1)])]),G("button",{class:"account-btn account-btn--signout",onClick:p[1]||(p[1]=f=>ft(ce).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[12]||(p[12]=[G("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[G("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Mt(" Sign Out ",-1)])])])],512),[[Ns,s.value==="account"]])])]),G("div",b0,[r.value?(Le(),He("div",{key:0,class:"mobile-account-scrim",onClick:p[2]||(p[2]=f=>r.value=!1)})):gi("",!0),r.value?(Le(),He("div",{key:1,class:"mobile-account-bar__panel",onClick:p[5]||(p[5]=Os(()=>{},["stop"]))},[G("button",{class:"account-btn",onClick:p[3]||(p[3]=f=>ft(ce).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[13]||(p[13]=[G("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[G("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Mt(" Change Password ",-1)])]),G("button",{class:"account-btn account-btn--signout",onClick:p[4]||(p[4]=f=>ft(ce).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[14]||(p[14]=[G("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[G("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Mt(" Sign Out ",-1)])])])):gi("",!0),G("div",{class:"mobile-account-bar__trigger",onClick:p[6]||(p[6]=f=>r.value=!r.value)},[p[16]||(p[16]=G("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[G("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})],-1)),p[17]||(p[17]=G("span",null,"Account",-1)),(Le(),He("svg",{class:Xt(["mobile-account-bar__chevron",r.value?"mobile-account-bar__chevron--open":""]),viewBox:"0 0 24 24",fill:"currentColor"},[...p[15]||(p[15]=[G("path",{d:"M7 10l5 5 5-5z"},null,-1)])],2))])])]))}};class v0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-rank","data-trophies","data-td-dollars"]}connectedCallback(){this._unsub=Ee.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",a=this.getAttribute("data-rank")||"—",s=this.getAttribute("data-trophies")||"0",r=parseFloat(this.getAttribute("data-td-dollars")||"0"),n=r>=1e3?`${Math.round(r/100)/10}K`:Math.round(r).toLocaleString(),o=t.charAt(0).toUpperCase();this.shadowRoot.innerHTML=`
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
                    <span class="hero__rank">${a==="—"?"—":"#"+a}</span>
                </div>
                <div class="hero__name">${t}</div>
                <div class="hero__kpis">
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${s}</span>
                        <span class="hero__kpi-label">Trophies</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">TD$ ${n}</span>
                        <span class="hero__kpi-label">Total Earned</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-top-players-hero",v0);const y0={class:"top-players-layout"},w0={class:"top-players-shell"},x0={class:"top-players-sidebar"},T0=["data-active-section"],S0={__name:"top_players_route",setup(e){const t=gt(),a=ve(),s=Ke("overall"),r=()=>{t.push({name:"home_route"})},n=l=>{const c=l.detail?.section||"overall";s.value=c;const d=document.querySelector(`#global-leaderboard-container .glb__tab[data-tab="${c}"]`);d&&d.click()},o=l=>{const c=a.appSession?.session_user?.guid,d=a.appSession?.session_user?.userName||a.appSession?.session_user?.name||"Player",u=l.find(f=>f.user_guid===c),p=document.querySelector("bma-top-players-hero");if(p)if(u){const f=l.indexOf(u)+1;p.setAttribute("data-username",u.username||d),p.setAttribute("data-rank",String(f)),p.setAttribute("data-trophies",String(u.tournaments_won||0)),p.setAttribute("data-td-dollars",String(u.total_payout||0))}else p.setAttribute("data-username",d),p.setAttribute("data-rank","—"),p.setAttribute("data-trophies","0"),p.setAttribute("data-td-dollars","0")},i=async()=>{try{const l=ke._globalLBCache?.ALL;let c;l?.data&&Date.now()-l.ts<300*1e3?c=l.data:(c=await Ae.fetchAllTimeLeaderboard("ALL",100,"td"),ke._globalLBCache&&(ke._globalLBCache.ALL={data:c,ts:Date.now(),inflight:!1})),o(c?.data||[]),typeof window._renderTopPlayers=="function"&&await window._renderTopPlayers("ALL")}catch(l){console.warn("[top_players_route] load failed",l)}};return xt(()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}requestAnimationFrame(()=>{i()})}),(l,c)=>(Le(),He("main",y0,[G("div",{class:"top-players-header"},[G("button",{class:"top-players-header__back",onClick:r,"aria-label":"Back"},[...c[0]||(c[0]=[G("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[G("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=G("h1",{class:"top-players-header__title"},"Top Players",-1))]),c[3]||(c[3]=G("bma-top-players-hero",null,null,-1)),G("div",w0,[G("aside",x0,[G("bma-profile-nav",{"data-active-section":s.value,onSectionChange:n,"data-sections":"top-players"},null,40,T0)]),c[2]||(c[2]=G("div",{class:"top-players-content"},[G("div",{id:"global-leaderboard-container"},[G("div",{class:"leaderboard-empty"},[G("p",null,"Loading leaderboard...")])])],-1))])]))}},Vr=Om({history:cm(),routes:[{path:"/",name:"splash_route",component:ol},{path:"/splash_route",name:"splash_route",component:ol},{path:"/error_route",name:"error_route",component:Fs},{path:"/forgot_route",name:"forgot_route",component:I_},{path:"/resetforgot_route",name:"resetforgot_route",component:Fs},{path:"/resethash_route",name:"resethash_route",component:Y_},{path:"/signin_route",name:"signin_route",component:c_},{path:"/signout_route",name:"signout_route",component:p_},{path:"/signup_route",name:"signup_route",component:$_},{path:"/verf_link_route",name:"verf_link_route",component:t0},{path:"/offline_route",name:"offline_route",component:Fs},{path:"/home_route",name:"home_route",component:Kb},{path:"/profile_route",name:"profile_route",component:_0},{path:"/top_players_route",name:"top_players_route",component:S0},{path:"/appFAQ",name:"appFAQ",component:Fs},{path:"/appHelp",name:"appHelp",component:Qb}]});Vr.beforeEach((e,t,a)=>{if(e.query.brand!==void 0){const s=e.query.brand;s==="null"||s===""?Es.clearBrand():Es.setBrand(s);const r={...e.query};delete r.brand,a({...e,query:r,replace:!0})}else a()});class E0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Ee.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),a=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(a)?a[1]?.length||0:a.guids?.length||0,max:Array.isArray(a)?parseInt(a[0]?.max||0):a.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Ee.theme}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return!1;try{const s=this.getAttribute("data-bma-tourn-entities"),r=s?JSON.parse(s):{guids:[]};return(Array.isArray(r)?r[1]||[]:r.guids||[]).includes(a)}catch{return!1}}getUserTrophy(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;try{const s=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const r of s){if(typeof r!="object"||!r)continue;let n=null;if(r.entity_guid===a&&r.badge?n=r.badge:r[a]&&(n=r[a]),n?.includes("gold"))return"gold";if(n?.includes("silver"))return"silver";if(n?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let a=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z"));const s=Date.now(),r=a.getTime()-s;if(r<=0)return null;const n=Math.floor(r/864e5),o=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4);return n>0?`${n}d ${o}h`:o>0?`${o}h ${i}m`:`${i}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const a=this.getCountdown();t.textContent=a||"",a||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},a=this.sportsAllowed;if(!Array.isArray(a)||a.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const s=Math.min(a.length,3);let r="";for(let n=0;n<s;n++){const o=a[n].key||a[n],i=Ve.find(d=>d.key===o),l=i?i.group:"default",c=t[o]||o.replace(/^[a-z]+_/,"").toUpperCase();r+=`<span class="lc__sport-item"><bma-sport-icon sport="${o}" data-sport-group="${l}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return a.length>3&&(r+=`<span class="lc__sport-count" data-sport-overflow="true">+${a.length-3}</span>`),r}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(a=>{const s=a.key||a;return t[s]||s.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,a,s,r){const n=(t-a)/2,o=2*Math.PI*n,i=o-s/100*o,l=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${l}" cy="${l}" r="${n}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${a}" />
            <circle cx="${l}" cy="${l}" r="${n}"
                fill="none" stroke="${r}" stroke-width="${a}"
                stroke-linecap="round"
                stroke-dasharray="${o}"
                stroke-dashoffset="${i}"
                transform="rotate(-90 ${l} ${l})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),this.dispatchAction(a.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",a=>{a.stopPropagation();const s=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(s,"info")})}render(){const t=this.isUserParticipating(),a=this.getUserTrophy(),s=this.status.toLowerCase(),r=t&&this.status!=="COMPLETED",n=!t&&this.status==="UPCOMING";this.userRank;const o=(this.entities.current/(this.entities.max||1)*100).toFixed(1);this.getCountdown();const l={upcoming:"#00E676",locked:"#F7C60D",completed:"#CD5659"}[s]||"#969696",c=52,d=3,u=m=>m.length>7?"sm":m.length>5?"md":"lg",p=`${this.entities.current}/${this.entities.max}`,f=u(p);let g="";a?g=`<span class="ring__trophy ring__trophy--${a}"></span>`:g=`<span class="ring__entrants ring__entrants--${f}">${this.entities.current}<span class="ring__entrants-sep">/</span>${this.entities.max}</span>`;const v=parseFloat(this.tournamentDollars).toLocaleString();this.shadowRoot.innerHTML=`
            <style>
                ${De()}
                ${ba()}

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
                                ${g}
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
                        <div class="lc__stat-val lc__stat-val--accent">${v}</div>
                        <div class="lc__stat-label">Starting TD$</div>
                    </div>
                </div>

                <!-- Footer: Sports + Status -->
                <div class="lc__foot">
                    <div class="lc__sports">${this.getSportsDisplay()}</div>
                    <div class="lc__badges">
                        ${(()=>{const m=this.gameModeBadge;return m?`<span class="lc__game-mode"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; opacity: 0.7;"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg> ${m.label}</span>`:""})()}
                        <span class="lc__status lc__status--${s}">${this.status==="LOCKED"?"IN PROGRESS":this.status==="UPCOMING"?"OPEN":this.status}</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-tournament-list-card",E0);const ke={updateTDBalance(e,t){const a=document.querySelector(e);if(!a)return;t%1!==0?a.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,a,s=null,r=0){const n=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),i=document.querySelector("#summary-payout");n&&(this.updateTDBalance("#summary-balance",e),e<0?n.classList.add("summary-cell__red"):n.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),i&&(i.textContent=a.toFixed(2),a<0?i.classList.add("summary-cell__red"):i.classList.remove("summary-cell__red"));const l=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(l){let d="";if(s){const p=s.tournament_dollars||0,f=e-p;f>0?d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(d=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const u=e<0?"#FF5252":"#00E676";l.innerHTML=`<span style="color: ${u};">TD$ ${e.toLocaleString()}</span>${d}`}if(c){const d=r||a||0;let u="";d>0&&(u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${d.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${u}`}if(s&&s.tournament_dollars){const d=s.tournament_dollars,u=document.querySelector(".dash-stat__gauge-fill--balance");if(u){const f=Math.max(e/d*100,0);u.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(t/d*100,100);p.style.width=`${f}%`}}},_globalLBCache:{},async prefetchGlobalLeaderboard(e="ALL"){const a=this._globalLBCache[e];if(a?.data&&Date.now()-a.ts<3e5)return a.data;if(a?.inflight)return null;this._globalLBCache[e]={data:a?.data||null,ts:a?.ts||0,inflight:!0};try{const s=await Ae.fetchAllTimeLeaderboard(e,100,"td");return this._globalLBCache[e]={data:s,ts:Date.now(),inflight:!1},console.log(`[appEvents] All-time leaderboard prefetched [${e}]:`,s?.count||0,"rows, last_updated:",s?.last_updated),s}catch(s){return console.warn(`[appEvents] All-time leaderboard prefetch failed [${e}]:`,s),this._globalLBCache[e]&&(this._globalLBCache[e].inflight=!1),null}},_betStatsCache:{stats:null,ts:0,inflight:!1},async _ensureBetStatsCache(e){const a=Date.now();if(this._betStatsCache.stats&&a-this._betStatsCache.ts<3e5)return this._betStatsCache.stats;if(this._betStatsCache.inflight)return null;this._betStatsCache.inflight=!0;try{const r=(await Ae.fetchBetSlips(e))?.rows||[];let n=0,o=0,i=0;return r.forEach(l=>{(l.bet||[]).forEach(d=>{Object.keys(d).forEach(u=>{if(u==="short_title")return;const p=d[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?n++:o++:i++)})})}),this._betStatsCache={stats:{wins:n,losses:o,pending:i},ts:a,inflight:!1},this._betStatsCache.stats}catch(s){return console.warn("[app_events] fetchBetSlips failed for stats panel",s),this._betStatsCache.inflight=!1,null}},buildStatsPanel(e,t,a=null){if(!t||!e||e.length===0)return"";const s=e.filter(g=>(g.entities?.guids||[]).includes(t)),r=s.filter(g=>(g.status||g.class)==="COMPLETED").length;let n=0,o=0;s.forEach(g=>{(Array.isArray(g.tags)?g.tags:[]).forEach(v=>{if(!v||typeof v!="object")return;const m=(v.entity_guid===t?v.badge:null)||(typeof v[t]=="string"?v[t]:null);typeof m=="string"&&m.startsWith("--badge__ribbon--")&&(o++,m==="--badge__ribbon--gold"&&n++)})});const i={};s.forEach(g=>{(Array.isArray(g.sports_allowed)?g.sports_allowed:[]).forEach(v=>{const h=Ve.find(b=>b.key===v.key)?.group||"Other";i[h]=(i[h]||0)+1})});let l="—",c="",d=0;Object.entries(i).forEach(([g,_])=>{_>d&&(d=_,l=g,c=g)});let u="—",p="Pending";if(a){const g=a.wins+a.losses;g>0?(u=`${Math.round(a.wins/g*100)}%`,p=`${a.wins}-${a.losses}`):(u="—",p="No settled bets")}const f=c?`<bma-sport-icon data-sport-group="${c.toLowerCase()}"></bma-sport-icon>`:"";return`
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
        `},categorizeTournaments(e,t,a,s,r={}){const n=[],{subStatus:o="all",sort:i="default",result:l="all",odds:c="all"}=r,d=A=>(A.entities?.guids||[]).includes(s),u=A=>A.status==="UPCOMING"||A.class==="UPCOMING",p=A=>A.status==="LOCKED"||A.class==="LOCKED",f=A=>u(A)||p(A),g=A=>A.status==="COMPLETED"||A.class==="COMPLETED",_=A=>Array.isArray(A.matches_expanded)&&A.matches_expanded.length>0,v=(A,S)=>(A.sports_allowed||[]).some(x=>x.key===S),m=A=>Ve.find(S=>S.key===A)?.title||A,h=A=>{const S=A.tags||[];for(const x of S)if(!(typeof x!="object"||!x)&&(x.entity_guid===s&&x.badge||x[s]))return!0;return!1},b=A=>{if(i==="default")return A;const S=[...A];switch(i){case"starting_soon":S.sort((x,E)=>new Date(x.window_start_time||0)-new Date(E.window_start_time||0));break;case"most_entrants":S.sort((x,E)=>(E.entities?.guids?.length||0)-(x.entities?.guids?.length||0));break;case"fewest_spots":S.sort((x,E)=>{const $=(x.entities?.max||0)-(x.entities?.guids?.length||0),C=(E.entities?.max||0)-(E.entities?.guids?.length||0);return $-C});break;case"recently_active":S.sort((x,E)=>new Date(E.status_time||0)-new Date(x.status_time||0));break;case"newest":S.sort((x,E)=>new Date(E.status_time||0)-new Date(x.status_time||0));break;case"td_high":S.sort((x,E)=>parseFloat(E.tournament_dollars||0)-parseFloat(x.tournament_dollars||0));break;case"td_low":S.sort((x,E)=>parseFloat(x.tournament_dollars||0)-parseFloat(E.tournament_dollars||0));break}return S},w=A=>l==="all"?A:l==="trophy"?A.filter(S=>h(S)):l==="no_trophy"?A.filter(S=>!h(S)):A;let y=e,T="";if(a==="multi"?(y=e.filter(A=>(A.sports_allowed?.length||0)>1),T="Multi-Sport "):a!=="all"&&(y=e.filter(A=>v(A,a)),T=m(a)+" "),t==="lobby"){let A=y;if(o==="open"?A=y.filter(S=>u(S)):o==="locked"?A=y.filter(S=>p(S)):o==="completed"&&(A=y.filter(S=>g(S))),o==="all"){const S=b(A.filter($=>u($)&&!d($)));n.push({title:`Open Entry ${T}Tournaments`,tournaments:S});const x=b(A.filter($=>p($)&&!d($)));x.length>0&&n.push({title:`In Progress - Entry Closed ${T}Tournaments`,tournaments:x});const E=b(A.filter($=>g($))).slice(0,20);E.length>0&&n.push({title:`Recently Completed ${T}Tournaments`,tournaments:E})}else{const S=b(A),x={open:"Open",locked:"In Progress",completed:"Completed"};S.length>0&&n.push({title:`${x[o]} ${T}Tournaments`,tournaments:S})}}else if(t==="my"){const A=y.filter(C=>d(C));let S=A.filter(C=>f(C));o==="active"?S=S.filter(C=>p(C)):o==="upcoming"&&(S=S.filter(C=>u(C))),c==="available"?S=S.filter(C=>_(C)):c==="none"&&(S=S.filter(C=>!_(C)));const x=b(S);n.push({title:`Your Active ${T}Tournaments`,tournaments:x});const E=w(A.filter(C=>g(C))),$=b(E);$.length>0&&n.push({title:`Your Completed ${T}Tournaments`,tournaments:$})}else if(t==="completed"){const A=b(w(y.filter(x=>d(x)&&g(x))));A.length>0&&n.push({title:`Your Completed ${T}Tournaments`,tournaments:A});const S=b(y.filter(x=>!d(x)&&g(x)));S.length>0&&n.push({title:`Other Completed ${T}Tournaments`,tournaments:S})}else t==="private"?n.push({title:"Private Contests",tournaments:[],emptyMessage:"Private Contests Coming Soon",emptySubtext:"Create and join private contests with friends — feature in development"}):n.push({title:"Tournaments",tournaments:e});return n},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=ve();t.appSession?.session_user?.guid;const a=e.tournament_dollars||1e4;let s=0,r=0,n=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const v=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.tournament_guid===e.guid);console.log("[Dashboard Update] Found",v.length,"existing bets for this tournament"),v.forEach(m=>{(m.bet||[]).forEach(b=>{Object.keys(b).filter(y=>y!=="short_title").forEach(y=>{const T=b[y];T&&(T.stake&&(s+=parseFloat(T.stake)),T.reconciled===!0&&T.payout>0&&(r+=parseFloat(T.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const _=parseFloat(o.textContent)||0;n=Math.max(0,_-s),console.log("[Dashboard Update] Summary total stakes:",_,"Pending:",n)}const i=s+n,l=a-s-n+r;console.log("[Dashboard Update] TD$:",a,"Committed:",s,"Pending:",n,"Payouts:",r,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");if(c){const _=l-a;let v="";_>0?v=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${_.toLocaleString()})</span>`:_<0&&(v=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${_.toLocaleString()})</span>`);const m=l<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${m};">TD$ ${l.toLocaleString()}</span>${v}`}const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".dash-stat__gauge-fill--pending");if(d){const _=n>0?n:i,v=r||0;let m="";if(v>0&&(m=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${v.toLocaleString()})</span>`),d.innerHTML=`TD$ ${_.toLocaleString()}${m}`,u){const h=Math.min(_/a*100,100);u.style.width=`${h}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const _=Math.max(l/a*100,0);p.style.width=`${_}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&e){const _=e.entities?.guids?.length||0,v=e.entities?.max||100,m=_/v*100;f.style.width=`${m}%`}const g=document.getElementById("game-mode-progress");if(g&&typeof window.GameMode<"u"){const _=e.class||"DEFAULT",v=window.GameMode.get(_),m=t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(b=>b.coreTournaments__guid===e.guid||b.tournament_guid===e.guid):[],h=v.getProgressUI(m,e);if(h.type!=="NONE"){const b=h.typesStatus?h.typesStatus.map(y=>y.placed?`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: rgba(0, 230, 118, 0.12); box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.35); color: #00E676; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.3px;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#00E676"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            ${y.label}${y.count>1?' <span style="opacity: 0.7;">×'+y.count+"</span>":""}
                        </span>`:`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: transparent; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12); color: rgba(255,255,255,0.35); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.3px;">
                            ${y.label}
                        </span>`).join(""):"",w=h.hints.length>0&&!h.complete?`<p style="font-size: 0.72rem; color: rgba(255,255,255,0.5); margin: 0; text-align: center;">${h.hints[0]}</p>`:h.complete?'<p style="font-size: 0.72rem; color: #00E676; margin: 0; text-align: center; font-weight: 600;">Lineup complete — ready to submit!</p>':"";g.style.display="block",g.innerHTML=`
                    <div style="margin: 0 8px 10px; padding: 14px 16px; background: rgba(20, 20, 20, 0.65); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background-image: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(0,0,0,0.1) 100%); border-radius: var(--card-radius, 12px); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0,0,0,0.4);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--status-locked-text, #F7C60D);">Your Lineup</span>
                            <span style="font-size: 0.75rem; font-weight: 700; color: ${h.percent>=100?"#00E676":"rgba(255,255,255,0.7)"};">${h.label}</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.06); border-radius: 6px; overflow: hidden; margin-bottom: 12px;">
                            <div style="height: 100%; width: ${h.percent}%; background: ${h.complete?"linear-gradient(90deg, #00E676, #69F0AE)":"linear-gradient(90deg, var(--status-locked-text, #F7C60D), #FFD54F)"}; border-radius: 6px; transition: width 0.3s ease;"></div>
                        </div>
                        <div style="display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: ${w?"10px":"0"};">${b}</div>
                        ${w}
                    </div>`}else g.style.display="none",g.innerHTML=""}},renderMatchCards(e){if(!e)return;const t=document.querySelector(".select-grid");if(!t)return;if(t.innerHTML="",!e.matches_expanded||!Array.isArray(e.matches_expanded)||e.matches_expanded.length===0){t.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const a=new Date,s=[...e.matches_expanded].sort((n,o)=>{const i=new Date(n.scheduled_at),l=new Date(o.scheduled_at),c=i<a,d=l<a;return c&&!d?1:!c&&d?-1:i-l}),r=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&ve().coreTourn.length>0&&(i=ve().coreTourn[ve().coreTourn.length-1].data.find(g=>g.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=ve();ce.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};s.forEach(n=>{const i=new Date(n.scheduled_at)<a;let l=!1;try{l=(typeof n.scoreboard_data=="string"?JSON.parse(n.scoreboard_data):n.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",n.id),c.setAttribute("data-match-guid",n.odds_id||n.guid||n.id),c.setAttribute("data-match-title",n.title),c.setAttribute("data-match-short-title",n.short_title||n.title),c.setAttribute("data-scheduled-at",n.scheduled_at),c.setAttribute("data-home-team",n.home_team_id||"Home"),c.setAttribute("data-away-team",n.away_team_id||"Away"),c.setAttribute("data-is-disabled",i||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),n.odds_markets){const d=typeof n.odds_markets=="string"?n.odds_markets:JSON.stringify(n.odds_markets);c.setAttribute("data-odds-markets",d)}if(n.scoreboard_data){const d=typeof n.scoreboard_data=="string"?n.scoreboard_data:JSON.stringify(n.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(n.sport_id)c.setAttribute("data-sport-key",n.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(g){const _=g.querySelectorAll("bma-bet-entry");let v=!1;_.forEach(m=>{if(v)return;const h=m.getAttribute("data-content-type"),b=m.getAttribute("data-content-odds");h===u.type&&b===u.price&&(m.remove(),v=!0)}),g.children.length===0&&(g.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}f.classList.remove("btn--active"),setTimeout(()=>{r()},100)}else{const g=document.querySelector(".play-cntr"),_=g?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const h=window.GameMode.get(_),b=ve(),w=b.coreBetSlip.length>0?b.coreBetSlip[b.coreBetSlip.length-1].data.filter(T=>T.coreTournaments__guid===g?.dataset?.currentTournGuid):[],y=h.canPlaceBet({matchGuid:u.matchGuid,type:u.type,team:u.team},w,null);if(!y.allowed){typeof neodigmToast<"u"&&neodigmToast.q(y.reason,"warning",3e3);return}}document.querySelectorAll("bma-bet-match-card").forEach(h=>{h.shadowRoot.querySelectorAll(".btn--selected").forEach(b=>{b.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const v=ve(),m=u.type;m==="spread"?ce.publish(v.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):m==="money"?ce.publish(v.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):m==="total"&&ce.publish(v.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),ce.publish(v.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const a=document.querySelector("[data-publish-betslip]");a&&delete a.dataset.processing;const s=document.querySelector(".bet-grid__slip-BETSLIP-content");s&&(s.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const r=ve();if(r.coreTourn.length>0){const i=r.coreTourn[r.coreTourn.length-1].data.find(l=>l.guid===e);i&&ke.renderMatchCards(i)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{ce.publish(r.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const n=document.querySelector(".bet-grid__slip");n&&n.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(s=>{try{return JSON.parse(s.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(s=>{const r=s.getAttribute("data-match-guid"),n=s.getAttribute("data-home-team"),o=s.getAttribute("data-away-team");(s.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?n:o;t.some(g=>{if(g.coreMatches__guid!==r)return!1;const _=g.bet||[];if(_.length===0)return!1;const v=_[0],h=Object.keys(v).filter(y=>y!=="short_title")[0],w=v[h]?.type;return c==="total"?w===c:w===c&&h===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},updatePlayButton(){const e=ve(),t=document.querySelector(".play-cntr"),a=t?.dataset?.currentTournGuid,s=t?.dataset?.currentTournAction||"INFO",r=document.getElementById("btn-join__play--id");if(!r||!a||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===a);if(!o)return;const i=e.appSession?.session_user?.guid,l=o.entities?.guids?.includes(i),c=o.status;r.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(r.style.visibility="",c==="UPCOMING"&&!l?s==="INFO"?(r.textContent="Join",r.dataset.requiresJoin="true"):s==="PLAY"&&(r.textContent="Play",r.dataset.requiresJoin="false"):(r.textContent="Play",r.dataset.requiresJoin="false"))},populateInfoPage(){const e=ve(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||e.coreTourn.length===0)return;const r=e.coreTourn[e.coreTourn.length-1].data.find(X=>X.guid===a);if(!r)return;const n=document.getElementById("pop-play__caro-info-summary1--id");if(!n)return;const o=X=>{if(!X)return"N/A";let H=new Date(X);return!X.includes("Z")&&!X.match(/[+-]\d{2}:\d{2}$/)&&(H=new Date(X+"Z")),isNaN(H.getTime())?"Invalid Date":H.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};r.status&&`${r.status.toLowerCase()}`;const i={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},l=r.sports_allowed&&Array.isArray(r.sports_allowed)?r.sports_allowed.map(X=>{const H=X.key||X,D=Ve.find(P=>P.key===H),j=D?D.group:"default",B=i[H]||D?.title||H;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${H}" data-sport-group="${j}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${B}</span>
                </span>`}).join(""):"N/A",c=e.appSession?.session_user?.guid,d=r.entities?.guids?.includes(c),u=r.entities?.guids?.length||0,p=r.entities?.max||0;(u/(p||1)*100).toFixed(1);const f=(()=>{const X=new Date(r.window_start_time),H=new Date(r.window_end_time),D=new Date;if(isNaN(X.getTime())||isNaN(H.getTime()))return"";const j=H-X,B=D-X;let P=0,M="";if(D<X){P=0;const F=X-D,z=Math.floor(F/864e5),I=Math.floor(F%864e5/36e5);M=z>0?`First match in ${z}d ${I}h`:`First match in ${I}h`}else if(D>H){const F=new Date(H.getFullYear(),H.getMonth(),H.getDate()),z=new Date(D.getFullYear(),D.getMonth(),D.getDate());P=F.getTime()===z.getTime()?95:100,M=P===100?"Tournament Complete":"Last Day"}else{P=Math.min(100,B/j*100);const F=Math.ceil(j/864e5),z=Math.ceil(B/864e5);M=z>=F?"Last Day":`Day ${z} of ${F}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${M}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${P.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),g=r.tags||[],v=g.some(X=>X.override_last_match_close===!0)?"+":"",m=g.some(X=>X.match_inprogress_lock===!0),h=g.some(X=>X.override_last_match_close===!0);let b="Free Play",w=null,y="";if(typeof window.GameMode<"u"){const X=window.GameMode.get(r.class||"DEFAULT"),H=X.getEffectiveRules(r);if(w=X.getBadge(),b=X.label,H.stakeRule==="SPEND_ALL"&&(y+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend All TD$</span></div>'),H.requiredBetTypes.length>0){const D=H.requiredBetTypes.map(j=>j==="SPREAD"?"Spread":j==="MONEY"?"Money Line":"Over/Under").join(", ");y+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${D}</span></div>`}H.oneBetPerMatchPerType&&(y+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const T=(()=>{const H=(r.tags||[]).find(P=>P.badge_gold!==void 0||P.badge_silver!==void 0||P.badge_bronze!==void 0);if(!H)return null;const D=H.badge_gold||0,j=H.badge_silver||0,B=H.badge_bronze||0;return D===0&&j===0&&B===0?null:{gold:D,silver:j,bronze:B}})(),A=r.status==="LOCKED"?"info-status-band--locked":r.status==="UPCOMING"?"info-status-band--open":r.status==="COMPLETED"?"info-status-band--completed":"",S=r.status==="LOCKED"?d?"In Progress — Entered":"In Progress":r.status==="UPCOMING"?d?"Open — Entered":"Open for Entry":r.status==="COMPLETED"?"Completed":r.status,x=r.matches_expanded?.length||0,E=x===0?"TBD":`${x}${v}`,$=`
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
                    <span class="info-key-stat__value">${E}</span>
                    <span class="info-key-stat__label">Games</span>
                </div>
            </div>`;r.status==="LOCKED"||r.status==="UPCOMING"||r.status,r.status==="LOCKED"||r.status;const C=`
            <div class="info-detail-row"><span>Game Mode</span><span>${b}${w?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${w.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${w.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${m?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${m?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${h?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${h?"On-going":"Fixed slate"}</span></div>
            ${y}
        `,R=`
            <div class="info-detail-row"><span>Sports</span><span>${l}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${o(r.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends</span><span>${o(r.window_end_time)}</span></div>
        `,U=T?`
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${T.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${T.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${T.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${T.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${T.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${T.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            <div style="padding: 16px 0 0;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); padding: 0 16px 8px;">Trophy Breakdown</div>
                ${T.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${T.gold}</span>
                </div>`:""}
                ${T.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${T.silver}</span>
                </div>`:""}
                ${T.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${T.bronze}</span>
                </div>`:""}
            </div>
        `:`<div class="info-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
            <p>No trophies configured for this tournament</p>
        </div>`,W=(()=>{if(!r.matches_expanded||!Array.isArray(r.matches_expanded)||r.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let X=0,H=0,D=0;const j=new Date;r.matches_expanded.forEach(I=>{let J=null;try{J=typeof I.scoreboard_data=="string"?JSON.parse(I.scoreboard_data):I.scoreboard_data}catch{}J?.time_remaining?J.time_remaining.toLowerCase()==="final"?X++:H++:new Date(I.scheduled_at)<j?X++:D++});const B=H>0?"live":"upcoming",P=[];X>0&&P.push(`<span class="match-filter-btn${B==="final"?" match-filter--active":""}" data-filter="final">${X} Final</span>`),H>0&&P.push(`<span class="match-filter-btn match-filter-btn--live${B==="live"?" match-filter--active":""}" data-filter="live">${H} Live</span>`),D>0&&P.push(`<span class="match-filter-btn match-filter-btn--upcoming${B==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${D} Upcoming</span>`);const M=P.length>0?`<div class="match-filter-bar">${P.join("")}</div>`:"",F=new Date,z=r.matches_expanded.map(I=>{const J=I.scoreboard_data?typeof I.scoreboard_data=="string"?I.scoreboard_data:JSON.stringify(I.scoreboard_data):"";let Z="upcoming",N=null;try{N=typeof I.scoreboard_data=="string"?JSON.parse(I.scoreboard_data):I.scoreboard_data}catch{}N?.time_remaining?Z=N.time_remaining.toLowerCase()==="final"?"final":"live":Z=new Date(I.scheduled_at)<F?"final":"upcoming";const k=Z!==B;return`<bma-match-status
                    data-match-guid="${I.guid||I.odds_id||I.id||""}"
                    data-match-title="${I.short_title||I.title||"Match"}"
                    data-match-scheduled-at="${I.scheduled_at||""}"
                    data-match-home-team="${I.home_team_id||"Home"}"
                    data-match-away-team="${I.away_team_id||"Away"}"
                    data-match-home-score="${I.home_team_score!==null&&I.home_team_score!==void 0?I.home_team_score:""}"
                    data-match-away-score="${I.away_team_score!==null&&I.away_team_score!==void 0?I.away_team_score:""}"
                    data-match-scoreboard="${J.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${I.sport_id||""}"
                    data-match-status="${Z}"
                    data-sync-theme="dark"
                    style="${k?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${M}
                </div>
                <div class="matches-scroll-container" id="info-matches-scroll" style="max-height: 480px; overflow-y: auto; position: relative; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.15) transparent;">
                    ${z}
                </div>
                <div class="matches-scroll-fade" style="height: 32px; margin-top: -32px; position: relative; pointer-events: none; background: linear-gradient(to top, rgba(16,16,16,0.95), transparent); z-index: 1;"></div>
            `})();n.innerHTML=`
            <div class="info-status-band ${A}">${S}</div>
            ${f?`<div class="info-surface" style="margin: 8px 0; padding: 12px 16px;">${f}</div>`:""}
            <div class="info-surface" style="margin: 0 0 8px;">
                ${$}
            </div>
            <div class="info-surface" style="margin: 0 0 8px;">
                <div style="font-size: 0.75rem; font-weight: 400; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.55); padding: 12px 16px 0;">Tournament Details</div>
                ${C}
            </div>
            <div class="info-surface">
                <div class="info-tabs">
                    <button class="info-tab info-tab--active" data-info-tab="summary"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Summary</button>
                    <button class="info-tab" data-info-tab="trophies"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Trophies</button>
                    <button class="info-tab" data-info-tab="matches"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> Matches</button>
                </div>
                <div class="info-tab-panel" data-info-panel="summary">${R}</div>
                <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${U}</div>
                <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${W}</div>
            </div>
        `,n.querySelectorAll(".info-tab").forEach(X=>{X.addEventListener("click",()=>{n.querySelectorAll(".info-tab").forEach(D=>D.classList.remove("info-tab--active")),X.classList.add("info-tab--active");const H=X.dataset.infoTab;n.querySelectorAll(".info-tab-panel").forEach(D=>{D.style.display=D.dataset.infoPanel===H?"":"none"})})});const ae=n.querySelector('[data-info-panel="matches"]');if(ae){ae.addEventListener("click",D=>{const j=D.target.closest(".match-filter-btn");j&&(ae.querySelectorAll(".match-filter-btn").forEach(B=>B.classList.remove("match-filter--active")),j.classList.add("match-filter--active"),ae.querySelectorAll("bma-match-status").forEach(B=>{B.style.display=B.dataset.matchStatus===j.dataset.filter?"":"none"}))});const X=ae.querySelector(".matches-scroll-container"),H=ae.querySelector(".matches-scroll-fade");if(X&&H){const D=()=>{H.style.opacity=X.scrollHeight-X.scrollTop-X.clientHeight<8?"0":"1"};X.addEventListener("scroll",D),setTimeout(D,100)}}const Y=document.getElementById("pop-play__caro-info-summary2--id");Y&&(Y.innerHTML="");const V=document.getElementById("pop-play__caro-info-list--id");V&&(V.innerHTML="")},async populateLeaderboard(){const e=ve(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,s=e.appSession?.session_user?.guid;if(!a){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const r=document.getElementById("pop-play__caro-leaderboard--id");if(!r)return;let n=document.getElementById("leaderboard-loading-banner");n||(n=document.createElement("neodigm-juicebar"),n.id="leaderboard-loading-banner",n.setAttribute("role","progressbar"),n.setAttribute("data-n55-theme","warning"),n.setAttribute("data-n55-size","small"),n.innerHTML="<div></div>",n.style.cssText=`
                width: 100%;
                margin: 6px;
            `,r.parentNode.insertBefore(n,r)),n.style.visibility="visible";try{const o=await Ae.fetchLeaderboard(a),i=o?.data||o?.rows;if(i&&i.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(R=>R.guid===a),d=c?.class||"DEFAULT_FORMAT",u=window.GameMode?.get?.(d),p=u?.rankLeaderboard?u.rankLeaderboard(i.map(R=>{const U=typeof R.combined_betslips=="string"?(()=>{try{return JSON.parse(R.combined_betslips)}catch{return[]}})():R.combined_betslips||[];return{...R,bets:U,timestamp:R.created_at||R.updated_at||0}}),c):i,f=parseFloat(c?.tournament_dollars||0),g=R=>{if(d!=="DEFAULT_FORMAT"||f<=0)return!0;let U=0;return(R.bets||[]).forEach(W=>{(W.bet||[]).forEach(ae=>{Object.keys(ae).forEach(Y=>{Y!=="short_title"&&(U+=parseFloat(ae[Y]?.stake||0))})})}),U>=f-.01},v=(()=>{if(d!=="DEFAULT_FORMAT")return"";const U=(c?.tags||[]).find(M=>M.badge_gold!==void 0||M.badge_silver!==void 0||M.badge_bronze!==void 0);if(!U)return"";const W=U.badge_gold||0,ae=U.badge_silver||0,Y=U.badge_bronze||0;if(W===0&&ae===0&&Y===0)return"";const X=p.some(M=>(M.bets||[]).some(F=>(F.bet||[]).some(z=>Object.keys(z).some(I=>I!=="short_title"&&z[I]?.reconciled===!0))))?p.filter(g):[],H=M=>{if(!M)return'<span class="podium-slot__empty">Open</span>';const F=M.user_guid===s;return`<span class="podium-slot__name${F?" podium-slot__name--you":""}">${M.username||"Unknown"}${F?' <span class="podium-slot__you">YOU</span>':""}</span>`},D=Array.from({length:W},(M,F)=>H(X[F])).join(""),j=Array.from({length:ae},(M,F)=>H(X[W+F])).join(""),B=Array.from({length:Y},(M,F)=>H(X[W+ae+F])).join(""),P=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
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
                                ${W>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${W}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${D}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${Y>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${Y}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${B}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${P?`<div class="leaderboard-podium__label">${P}</div>`:""}
                        </div>
                    `})(),b=`
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
                `,w=(R,U,W=!1)=>{let ae="";if(c?.tags&&Array.isArray(c.tags)){const j=c.tags.find(B=>!!(typeof B=="object"&&B!==null&&(B.entity_guid===R.user_guid&&B.badge&&B.badge.startsWith("--badge__ribbon--")||B[R.user_guid]&&B[R.user_guid].startsWith("--badge__ribbon--"))));if(j){const B=j.badge||j[R.user_guid];B==="--badge__ribbon--gold"?ae="badge-trophy--gold":B==="--badge__ribbon--silver"?ae="badge-trophy--silver":B==="--badge__ribbon--bronze"&&(ae="badge-trophy--bronze")}}const Y=R.combined_betslips?typeof R.combined_betslips=="string"?R.combined_betslips:JSON.stringify(R.combined_betslips):"[]";let V="[]";if(R.combined_betslips&&c?.matches_expanded){const j=typeof R.combined_betslips=="string"?JSON.parse(R.combined_betslips):R.combined_betslips,B=[...new Set(j.map(M=>M.coreMatches__guid||M.match_guid||M.odds_id).filter(Boolean))],P=c.matches_expanded.filter(M=>{const F=M.guid||M.id||M.odds_id;return B.includes(F)});V=JSON.stringify(P)}const X=parseFloat(R.calculated_tournament_dollars||0),H=parseInt(R.total_betslips||0),D=X===0&&H===0?c?.tournament_dollars||0:R.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${U}"
                            data-username="${R.username||"Unknown"}"
                            data-user-guid="${R.user_guid||""}"
                            data-tournament-dollars="${D}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${R.total_betslips||0}"
                            data-total-payout="${R.total_payout||0}"
                            data-combined-betslips="${Y.replace(/"/g,"&quot;")}"
                            data-user-matches="${V.replace(/"/g,"&quot;")}"
                            data-badge-class="${ae}"
                            data-is-current-user="${R.user_guid===s}"
                            data-unqualified="${W}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `},y=p.filter(g),T=p.filter(R=>!g(R)),A=y.map((R,U)=>w(R,U+1,!1)).join(""),S=T.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${T.map(R=>w(R,"—",!0)).join("")}
                `:"";r.innerHTML=v+b+A+S,requestAnimationFrame(()=>{r.querySelectorAll("bma-leaderboard-card").forEach((R,U)=>{R.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",R.style.animationDelay=`${Math.min(U*60,400)}ms`})}),r.querySelectorAll(".leaderboard-tab").forEach(R=>{R.addEventListener("click",()=>{const U=R.dataset.lbTab;r.querySelectorAll(".leaderboard-tab").forEach(W=>W.classList.remove("leaderboard-tab--active")),R.classList.add("leaderboard-tab--active"),r.querySelectorAll("[data-lb-panel]").forEach(W=>{W.style.display=W.dataset.lbPanel===U?"":"none"})})});const x=y.findIndex(R=>R.user_guid===s),E=c?.entities?.guids?.length||p.length,$=x>=0?x+1:"—",C=document.getElementById("dashboard-rank");if(C){const R=$==="—"?"—":`${$}/${E}`;C.innerHTML=`<span class="tourn-dashboard__rank-text">${R}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else r.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{n&&(n.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),r.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{n&&(n.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=ve(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||e.coreTourn.length===0)return;const r=e.coreTourn[e.coreTourn.length-1].data.find(n=>n.guid===a);r&&(console.log("[appEvents] Hydrating play popup for tournament:",a),this.populateInfoPage(),this.renderMatchCards(r),this.updateTournamentDashboard(r),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:a,subStatus:s,sort:r,result:n}=e,o=(c,d,u,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${d}">${u}</button>`;let i="";a==="lobby"?i+=`
                <div class="filter-section">
                    <div class="filter-section__title">Status</div>
                    <div class="filter-chips">
                        ${o("subStatus","all","All",s==="all")}
                        ${o("subStatus","open","Open",s==="open")}
                        ${o("subStatus","locked","Locked",s==="locked")}
                        ${o("subStatus","completed","Recently Completed",s==="completed")}
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
                </div>`:a==="my"?i+=`
                <div class="filter-section">
                    <div class="filter-section__title">Status</div>
                    <div class="filter-chips">
                        ${o("subStatus","all","All",s==="all")}
                        ${o("subStatus","active","Active",s==="active")}
                        ${o("subStatus","upcoming","Upcoming",s==="upcoming")}
                        ${o("subStatus","completed","Completed",s==="completed")}
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
                </div>`:a==="completed"&&(i+=`
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
            `;let d={subStatus:s,sort:r,result:n};c.addEventListener("click",u=>{const p=u.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,g=p.dataset.filterVal;d[f]=g,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(_=>_.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const u=l[a]||l.lobby;d={...u},Object.keys(u).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${u[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(d)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){ce.subscribe("APP",(S,x)=>{console.warn("~~ sub all APP | "+S+"|"+x)}),ce.subscribe("WC",(S,x)=>{console.warn("~~ sub all WC  | "+S+"|"+x)}),ce.subscribe("ROUTE",(S,x)=>{console.warn("~~ sub all ROUTE  | "+S+"|"+x)});let t="lobby",a="all",s="all",r="default",n="all",o="all",i=localStorage.getItem("bma_view_mode")||"cards";const l=()=>{a="all";const S=document.querySelector("bma-app-head-sports");S&&S.setAttribute("data-selected-chip","all")},c=()=>{const S=document.getElementById("filter-bar__count--id");if(!S)return;let x=0;s!=="all"&&x++,r!=="default"&&x++,n!=="all"&&x++,S.textContent=x,S.style.display=x>0?"":"none"},d=()=>{document.querySelectorAll(".home-tab").forEach(E=>E.classList.remove("home-tab--active"));const x=t==="my"?document.querySelector('[data-home-tab="active"]'):document.querySelector('[data-home-tab="lobby"]');x&&x.classList.add("home-tab--active")},u=()=>{s="all",r="default",n="all",o="all"};document.addEventListener("click",S=>{const x=S.target.closest(".category-filter-toggle");if(x){const C=x.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(C){const R=C.style.display!=="none";C.style.display=R?"none":"",x.classList.toggle("category-filter-toggle--open",!R),window._bmaFilterRowOpen=!R}return}const E=S.target.closest("[data-view-mode]");if(E){const $=E.dataset.viewMode;if($===i)return;i=$,localStorage.setItem("bma_view_mode",$);const R=E.closest(".tournament-category-header")?.closest(".tournament-category"),U=R?[...document.querySelectorAll(".tournament-category")].indexOf(R):-1;document.querySelectorAll("[data-view-mode]").forEach(W=>W.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${$}"]`).forEach(W=>W.classList.add("view-toggle__btn--active")),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"})),U>=0&&requestAnimationFrame(()=>{const W=document.querySelectorAll(".tournament-category");W[U]&&W[U].scrollIntoView({behavior:"smooth",block:"start"})})}}),document.addEventListener("click",S=>{const x=S.target.closest("[data-home-tab]");if(!x)return;const $=x.dataset.homeTab==="active"?"my":"lobby";if($===t)return;t=$,l(),u(),c(),document.querySelectorAll(".home-tab").forEach(R=>R.classList.remove("home-tab--active")),x.classList.add("home-tab--active");const C=document.querySelector("bma-app-head-mid");C&&C.setAttribute("data-selected-tab","head_mid_lobby"),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"}))}),document.addEventListener("change",S=>{const x=S.target.closest(".category-dropdown");if(!x)return;const E=x.dataset.filterType,$=x.value;E==="subStatus"?s=$:E==="sort"?r=$:E==="result"?n=$:E==="odds"&&(o=$),c(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),ce.subscribe(e.hierTopics.COREBETSLIP,(S,x)=>{JSON.parse(x);let E=16;switch(S){case e.hierTopics.COREBETSLIP__BET:E=5,Ya.shootConfetti(),console.log("~~~  |  "+S+" | ",x);const $=document.querySelector("[data-bets-valid]");$&&($.dataset.betsValid="false");const C=document.querySelector("neodigm-sodapop");C&&C.setAttribute("data-wait","true");const R=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(R.length===0){console.warn("[app_events] No bets to submit"),C&&C.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const U=document.querySelector(".play-cntr"),W=U?.dataset?.currentTournGuid,ae=e.appSession?.session_user?.guid;if(!W||!ae){console.error("[app_events] Missing tournament or user GUID"),C&&C.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const Y=Array.from(R).map(F=>{const z=F.getAttribute("data-content-team-points"),I=F.getAttribute("data-content-odds"),J=F.getAttribute("data-stake")||"0",Z=F.getAttribute("data-content-type"),N=F.getAttribute("data-payout")||"0",k=F.getAttribute("data-match-guid")||"",O={};return O[z]={type:Z,stake:parseFloat(J),odds:parseFloat(I),payout:parseFloat(N),reconciled:!1},{acctEntity__guid:ae,coreTournaments__guid:W,coreMatches__guid:k,bet:[O],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",Y);const V=U?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const F=window.GameMode.get(V),I=[...e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(k=>k.coreTournaments__guid===W):[],...Y],Z=(e.coreTourn.length>0?e.coreTourn[e.coreTourn.length-1]:null)?.data.find(k=>k.guid===W),N=F.validateBetSlip(I,Z,0);if(!N.valid){console.log("[app_events] Game mode validation failed:",N.errors),typeof neodigmToast<"u"&&N.errors.forEach(O=>neodigmToast.q(O,"warning",4e3)),C&&C.setAttribute("data-wait","false");const k=document.querySelector("[data-publish-betslip]");k&&delete k.dataset.processing;break}}Ae.postBetSlips(Y).then(F=>{console.log("[app_events] Bet slips posted successfully:",F);const z=Y.reduce((I,J)=>{const Z=J.bet[0],N=Object.keys(Z)[0];return I+(Z[N]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${z.toFixed(2)}`,"success"),Ae.fetchBetSlips(ae,W).then(I=>{if(I?.rows){const J={timestamp:Date.now(),source:"API",data:I.rows};e.pushcoreBetSlip(J),console.log("[app_events] Refreshed bet slips in store:",I.rows.length,"items")}ke.refreshPlayPopupUI(W,I),C&&C.setAttribute("data-wait","false")}).catch(I=>{console.error("[app_events] Error fetching fresh bet slips:",I);const J=document.querySelector("[data-publish-betslip]");J&&delete J.dataset.processing,$&&($.dataset.betsValid="true"),C&&C.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(F=>{console.error("[app_events] Error posting bet slips:",F);const z=document.querySelector("[data-publish-betslip]");z&&delete z.dataset.processing,$&&($.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),C&&C.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:E=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&x){x=JSON.parse(x);const z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&z){const I=e.coreBetSlip[0].data.filter(te=>te.coreTournaments__guid===z),J=[],Z=[],N=[];I.forEach(te=>{const le=te.bet||[];if(le.length===0)return;const ne=le[0];Object.keys(ne).filter(K=>K!=="short_title").forEach(K=>{const oe=ne[K],se=oe?.reconciled!==!1,de=parseFloat(oe?.payout||0);se?de===0?Z.push(te):N.push(te):J.push(te)})});const k=ut.search(J,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,O=ut.search(Z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,L=k+O,q=ut.search(N,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,ee=x.tournament_dollars-L+q;ke.updateTDBalance("#summary-balance",ee)}else ke.updateTDBalance("#summary-balance",x.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let H=0,D=0,j=0;if(e.coreBetSlip.length>0){const z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(z){const J=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(q=>q.coreTournaments__guid===z),Z=[],N=[],k=[];J.forEach(q=>{const ee=q.bet||[];if(ee.length===0)return;const te=ee[0];Object.keys(te).filter(ne=>ne!=="short_title").forEach(ne=>{const re=te[ne],K=re?.reconciled!==!1,oe=parseFloat(re?.payout||0);K?oe===0?N.push(q):k.push(q):Z.push(q)})}),H=ut.search(Z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,D=ut.search(k,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const O=ut.search(N,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,L=ut.search(k,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;j=O+L}}let B=!0,P=0;const M=document.querySelector("[data-bets-valid]");if(M&&x){x=JSON.parse(x),x.pending_stake_sum=0,x.pending_payout_sum=0,x.bets.length||(B=!1),x.bets.forEach(k=>{k.stake=Number(k.stake),k.stake>0?x.pending_stake_sum+=k.stake:B=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(k=>{const O=parseFloat(k.getAttribute("data-payout")||"0");x.pending_payout_sum+=O});const z=H+x.pending_stake_sum,I=D+x.pending_payout_sum;P=parseFloat((x.tournament_dollars-z-j+D).toFixed(2));const Z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let N=null;Z&&e.coreTourn.length>0&&(N=e.coreTourn[e.coreTourn.length-1]?.data?.find(O=>O.guid===Z)),ke.updateSummaryAndDashboard(P,z,I,N,x.pending_payout_sum||0),(x.tournament_dollars<0||P<0)&&(B=!1),M.dataset.betsValid=B}break}E&&neodigmWired4Sound&&neodigmWired4Sound.sound(E,"QUITE").vibrate()});const p=()=>{const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let E=0;x&&e.coreTourn.length>0&&(E=e.coreTourn[e.coreTourn.length-1].data.find(R=>R.guid===x)?.tournament_dollars||0),ce.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:E,timestamp:Date.now()}))},f=()=>{const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let E=0;x&&e.coreTourn.length>0&&(E=e.coreTourn[e.coreTourn.length-1].data.find(X=>X.guid===x)?.tournament_dollars||0);let $=0,C=0,R=0,U=0;if(e.coreBetSlip.length>0&&x){const V=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(M=>M.coreTournaments__guid===x);console.log("[app_events] Filtered bets for tournament:",x,"found:",V.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",V[0]);const X=[],H=[],D=[];V.forEach(M=>{const F=M.bet||[];if(F.length===0)return;const z=F[0];Object.keys(z).filter(J=>J!=="short_title").forEach(J=>{const Z=z[J],N=Z?.reconciled!==!1,k=parseFloat(Z?.payout||0);N?k===0?H.push(M):D.push(M):X.push(M)})}),console.log("[app_events] Bet categories:",{unreconciled:X.length,reconciledZero:H.length,reconciledNonZero:D.length});const j=ut.search(X,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,B=ut.search(H,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,P=ut.search(D,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;R=B+P,C=ut.search(D,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,U=ut.search(X,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,$=j,console.log("[app_events] Balance calculation:",{unreconciledStakes:j,lostBetStakes:B,wonBetStakes:P,allReconciledStakes:R,displayedStake:$,reconciledPayouts:C,tournamentDollars:E,calculatedBalance:E-$-R+C})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const W=E-$-R+C;let ae=null;x&&e.coreTourn.length>0&&(ae=e.coreTourn[e.coreTourn.length-1].data.find(V=>V.guid===x)),ke.updateSummaryAndDashboard(W,$,C,ae,U)};ce.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(S,x)=>{const $=JSON.parse(x)?.rows||[],C=document.querySelector(".bet-grid__slip-MYBETS");if(!C)return;if(C.innerHTML="",$.length===0){C.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const ae=document.querySelector(".bet-grid__slip");ae&&ae.setAttribute("data-active-bet-tab","BETSLIP"),p();return}$.forEach(ae=>{if((ae.bet||[]).length===0)return;const V=document.createElement("bma-bet-existing");V.setAttribute("data-corebetslip",JSON.stringify(ae)),C.appendChild(V)});const R=document.querySelector(".bet-grid__slip");R&&R.setAttribute("data-active-bet-tab","MYBETS"),ve().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&ke.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",$.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),f()},200)}),document.addEventListener("click",S=>{const x=S.target;if(x&&x.classList.contains("bet-slip-tab")){const E=x.dataset.betTab,$=document.querySelector(".bet-grid__slip");E&&$&&($.setAttribute("data-active-bet-tab",E),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",E))}if(x&&x.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(x.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}x.dataset.processing="true";const $=x.dataset.publishBetslip;ce.publish($,JSON.stringify({timestamp:Date.now()}))}});const g=()=>{const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let E=0;x&&e.coreTourn.length>0&&(E=e.coreTourn[e.coreTourn.length-1].data.find(W=>W.guid===x)?.tournament_dollars||0);const $=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),C=Array.from($).map(R=>({teamPoints:R.getAttribute("data-content-team-points"),odds:R.getAttribute("data-content-odds"),stake:R.getAttribute("data-stake")||"0",type:R.getAttribute("data-content-type"),abbreviatedTitle:R.getAttribute("data-abbreviated-title"),scheduledAt:R.getAttribute("data-scheduled-at")}));ce.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:E,bets:C,timestamp:Date.now()}))},_=(S,x)=>{const E=JSON.parse(x),$=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!$){console.error("[app_events] Bet slip container not found");return}const C=$.querySelector(".bet-slip__empty");C&&C.remove();let R="";E.type==="total"?R=E.team==="over"?"Over":"Under":E.team==="home"?R=E.homeTeam:E.team==="away"&&(R=E.awayTeam);let U=R;if(E.point)if(E.type==="spread"){const H=parseFloat(E.point)>0?`+${E.point}`:E.point;U=`${R} ${H}`}else E.type==="total"&&(U=`${R} ${E.point}`);const W=document.createElement("bma-bet-entry");W.setAttribute("data-content-team-points",U),W.setAttribute("data-content-odds",E.price||"0"),W.setAttribute("data-content-stake-text","0"),W.setAttribute("data-content-type",E.type||""),W.setAttribute("data-abbreviated-title",E.abbreviatedTitle||`${E.homeTeam} vs ${E.awayTeam}`),W.setAttribute("data-scheduled-at",E.scheduledAt||""),W.setAttribute("data-match-guid",E.matchGuid||""),W.setAttribute("data-home-team",E.homeTeam||""),W.setAttribute("data-away-team",E.awayTeam||""),W.setAttribute("data-bet-team",R||"");const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Y&&e.coreTourn.length>0){const D=e.coreTourn[e.coreTourn.length-1].data.find(j=>j.guid===Y);if(D?.sports_allowed&&D.sports_allowed.length>0){const j=D.sports_allowed[0];W.setAttribute("data-sport-key",j.key||"");const B=Ve.find(P=>P.key===j.key);W.setAttribute("data-sport-group",B?.group||"")}}$.appendChild(W),console.log("[app_events] Bet entry appended to container:",W,"Container children:",$.children.length),setTimeout(()=>{m(W)},0);const V=document.querySelector(".bet-grid__slip");V&&(V.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const X=$.querySelectorAll("bma-bet-entry").length;X>=3?requestAnimationFrame(()=>{setTimeout(()=>{const H=document.querySelector(".bet-grid__slip");H&&(console.log("[app_events] Scrolling parent to bottom - bet count:",X,"scrollHeight:",H.scrollHeight,"current scrollTop:",H.scrollTop),H.scrollTo({top:H.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",H.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",X,"bet cards (need 3+)"),setTimeout(()=>{g()},200),console.log("[app_events] Created bet entry:",{teamPoints:U,odds:E.price,type:E.type})};ce.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(S,x)=>{_(S,x),v()}),ce.subscribe(e.hierTopics.COREBETSLIP__MONEY,(S,x)=>{_(S,x),v()}),ce.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(S,x)=>{_(S,x),v()});function v(){const S=window.matchMedia("(orientation: portrait)").matches,x=window.matchMedia("(max-width: 768px)").matches;if(S||x){const E=document.querySelector(".bet-grid__select"),$=document.querySelector(".bet-grid__slip"),C=document.querySelector(".bet-grid__toggle-text");E&&$&&C&&(E.classList.add("collapsed"),$.classList.remove("collapsed"),C.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const m=S=>{const x={sport:{key:S.getAttribute("data-sport-key")||"",group:S.getAttribute("data-sport-group")||""},Match:{scheduled_at:S.getAttribute("data-scheduled-at")||"",home_team_id:S.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:S.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:S.getAttribute("data-bet-team")||"",over:"",under:""},type:S.getAttribute("data-content-type")||"",odds:S.getAttribute("data-content-odds")||"0",stake:S.getAttribute("data-stake")||"0"}},E=vu.calcPayout(x);S.setAttribute("data-payout",E.toString()),console.log("[app_events] Payout calculated:",{stake:x.Bet.stake,odds:x.Bet.odds,payout:E})};new MutationObserver(S=>{S.forEach(x=>{x.type==="attributes"&&x.attributeName==="data-stake"&&x.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",x.target.getAttribute("data-stake")),m(x.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{g()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",S=>{console.log("[app_events] Removing bet entry:",S.detail);const x=S.target,E=S.detail;x.remove(),setTimeout(()=>{const U=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(U){const W=ve(),ae=W.coreTourn[W.coreTourn.length-1];if(ae&&ae.data){const Y=ae.data.find(V=>V.guid===U);Y&&ke.updateTournamentDashboard(Y)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(R=>{(R.shadowRoot?.querySelectorAll(".btn")||[]).forEach(W=>{const ae=W.dataset.betType,Y=W.dataset.price,V=ae===E.type,X=Y===E.odds;V&&X&&W.classList.contains("btn--active")&&(W.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:ae,btnPrice:Y}))})});const C=document.querySelector(".bet-grid__slip-BETSLIP-content");C&&C.children.length,setTimeout(()=>{g()},100)}),ce.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(S,x)=>{const E=JSON.parse(x);E&&E.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${E.guid}"]`)}),ce.subscribe(e.hierTopics.WC__APP__FOOT,(S,x)=>{JSON.parse(x);let E=16;switch(S){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:ce.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:t="private",l(),u(),c(),d(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:ce.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break}neodigmWired4Sound&&neodigmWired4Sound.sound(E).vibrate()}),ce.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(S,x)=>{const E=JSON.parse(x);let $=16;S=="WC.APP.HEAD_SPORTS.PREV"||S=="WC.APP.HEAD_SPORTS.NEXT"||S=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?$=3:(a=E.key||"all",console.log(`[app_events] Sports filter changed to: ${a} (${E.group})`),c(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),$&&neodigmWired4Sound&&neodigmWired4Sound.sound($).vibrate()}),ce.subscribe(e.hierTopics.WC__APP__HEAD_MID,(S,x)=>{JSON.parse(x);let E=16;switch(S){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",l(),u(),c(),d(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":t="private",l(),u(),c(),d(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",l(),u(),c(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":E=16,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/top_players_route";break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":ce.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}E&&neodigmWired4Sound&&neodigmWired4Sound.sound(E).vibrate()}),ce.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(S,x)=>{JSON.parse(x);let E=16;switch(S){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const $=window.deferredPWAPrompt;if(!$){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{$.prompt();const{outcome:R}=await $.userChoice;R==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),E=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(R){console.error("PWA install error:",R),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const U=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:U});const W=document.getElementById("app");W&&W.setAttribute("data-sync-theme",U),document.body.setAttribute("data-sync-theme",U)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":Vr.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":Vr.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}E&&neodigmWired4Sound&&neodigmWired4Sound.sound(E).vibrate()});const b=S=>{document.querySelectorAll(".play-section").forEach(E=>{E.style.display="none",E.classList.remove("play-section--active")});const x=document.getElementById(`play-section-${S}`);x&&(x.style.display="",x.classList.add("play-section--active"))},w=(S,x)=>{const E=S.split(".").pop(),$=document.querySelectorAll(".play-cntr .dash-nav__btn"),R=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");b(E),$.forEach(U=>{const W=U.dataset.publishRouteHome?.split(".").pop()||"";U.classList.toggle("dash-nav__btn--active",W===E)}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),R&&(R.style.overflow=E==="PLAY"?"hidden":"auto")};ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",w);let y=null;ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(S,x)=>{if(w(S),y){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}y=setTimeout(()=>{y=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),ke.populateLeaderboard()}),ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(S,x)=>{JSON.parse(x);const E=document.getElementById("btn-join__play--id");if(!E){console.warn("[app_events] PLAY button not found");return}const $=E.dataset.requiresJoin==="true",C=E.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",C,"requiresJoin:",$),$&&C==="join"){const U=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,W=ve();if(!U){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",U),ce.publish(W.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:U,timestamp:Date.now()})),E.textContent="Play",E.dataset.requiresJoin="false",setTimeout(()=>{w(S),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else w(S),console.log("[app_events] Advancing carousel to PLAY page")}),ce.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(S,x)=>{JSON.parse(x);let E=10;switch(S){case"WC.APP.HEAD_TOP.USER_PROFILE":E=0,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break;case"WC.APP.HEAD_TOP.LOGO":const $=e.appSession.session_app.version,C=new Date().getFullYear();$&&neodigmToast&&neodigmToast.q(`${$} 4/18/2026, 2:39:46 PM|© ${C} Bet Max Action`,"night");break;case"WC.APP.HEAD_TOP.CREATE_CONTEST":ce.publish(e.hierTopics.WC__APP__FOOT__MY_TOURNEYS,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break}E&&neodigmWired4Sound&&neodigmWired4Sound.sound(E).vibrate()});let T=null,A=null;ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(S,x)=>{const E=JSON.parse(x);let $=0;switch(E?.action){case"JOIN":$=512;break;case"PLAY":$=8;break;case"INFO":$=8;break}if($){T=E?.tournamentGuid,A=E?.action,console.log("[app_events] Storing pending tourn data:",T,A);const C=e.appSession?.session_user?.guid,R=E?.tournamentGuid;C&&R?Ae.fetchBetSlips(C,R).then(U=>{if(U?.rows){const W={timestamp:Date.now(),source:"API",data:U.rows};e.pushcoreBetSlip(W),console.log("[app_events] Bet slips fetched:",U.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{ce.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(U))},3e3)},$)}).catch(U=>{console.error("[app_events] Error fetching bet slips:",U),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},$)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},$)}}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(S,x)=>{const E=JSON.parse(x);let $=16;switch(E?.action){case"FOCUS":$=3;break;case"SPORT_ICON":$=10;break;case"JOIN":$=5;break;case"PLAY":$=16;break}$&&neodigmWired4Sound&&neodigmWired4Sound.sound($).vibrate()}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(S,x)=>{const E=JSON.parse(x);let $=0,C="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),E?.tournamentStatus){case"UPCOMING":C="success";break;case"LOCKED":C="warning";break;case"COMPLETED":C="danger";break}switch(E?.action){case"SPORT_ICON":E?.sportTitle==E?.sportDescription?$=E?.sportTitle:$=E?.sportTitle+"|"+E?.sportDescription;break}$&&neodigmToast&&neodigmToast.q($,C)}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,async(S,x)=>{const E=JSON.parse(x);if(E?.action==="JOIN"){const C=ve().appSession?.session_user?.guid;if(!C){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const R=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${E.tournamentGuid}"]`);R&&(R.setAttribute("data-bma-tourn-wait","true"),Ya.shootConfetti());const U={acctEntityGuid:C,tournamentGuid:E.tournamentGuid};try{const W={method:"POST",body:JSON.stringify(U),headers:Ae.genHeaders()};console.log("Posting to:",Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/coreTournaments/join",U);const Y=await(await fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/coreTournaments/join",W)).json();if(console.log("Join response:",Y),Y.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const V=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${E.tournamentGuid}"]`);if(V){V.setAttribute("data-bma-tourn-wait","false");const X=V.getAttribute("data-bma-tourn-entities");if(X)try{const H=JSON.parse(X);H.guids.includes(C)||(H.guids.push(C),V.setAttribute("data-bma-tourn-entities",JSON.stringify(H)))}catch(H){console.error("Failed to parse entities:",H)}}},3e3);else{const V=Y?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(V,"danger");const X=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${E.tournamentGuid}"]`);X&&X.setAttribute("data-bma-tourn-wait","false")}}catch(W){console.error("Join tournament error:",W),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),ce.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(S,x)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const E=ve();if(t="lobby",a="all",s="all",r="default",n="all",o="all",E.coreTourn.length>0){console.log("[app_events] coreTourn already populated, hydrating from existing data"),ce.publish(E.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"REMOUNT"}));return}try{const $=await Ae.fetchTournaments();console.log("[app_events] Tournaments fetched:",$),$?.rows&&Array.isArray($.rows)?(E.pushCoreTourn({timestamp:Date.now(),source:"API",data:$.rows}),console.log("[app_events] Pushed to coreTourn, length:",E.coreTourn.length),ce.publish(E.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",$)}catch($){console.error("[app_events] Error fetching tournaments:",$),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),ce.subscribe(e.hierTopics.PROMOTION__LOAD,async(S,x)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const E=await Ae.fetchPromotions();if(console.log("[app_events] Promotions fetched:",E),E?.ok&&E?.data&&Array.isArray(E.data)){const $=E.data.filter(R=>R.class==="banner"&&R.status==="LIVE");console.log("[app_events] Banner promotions:",$);const C=document.querySelector(".featured-swiper .swiper-wrapper");if(!C){console.warn("[app_events] Swiper wrapper not found");return}if(C.innerHTML="",$.forEach((R,U)=>{const W=document.createElement("div");W.className="swiper-slide";const ae=document.createElement("div");ae.className=`featured-card featured-card--${U+1}`;const Y=R.hero_img?encodeURI(R.hero_img):"";ae.style.backgroundImage=`url("${Y}")`,ae.setAttribute("data-promotion-hero-img",R.hero_img||""),ae.setAttribute("data-promotion-caption",R.caption||""),ae.setAttribute("data-promotion-tagline",R.tagline||""),ae.setAttribute("data-promotion-toast",R.toast||""),ae.setAttribute("data-promotion-topic",R.topic?.topic||""),ae.setAttribute("data-promotion-topic-token",R.topic?.token||""),ae.setAttribute("data-promotion-marquee",R.maquee||""),W.appendChild(ae),C.appendChild(W)}),console.log("[app_events] Created",$.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),$.length===1){const R=document.querySelector(".featured-swiper .swiper-wrapper");R&&(R.style.justifyContent="center")}}}catch(E){console.error("[app_events] Error fetching promotions:",E)}}),ce.subscribe(e.hierTopics.PROMOTION__CLICK,(S,x)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const E=JSON.parse(x);console.log("[app_events] Promotion clicked:",E),E.toast&&typeof neodigmToast<"u"&&neodigmToast.q(E.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const $=document.querySelector(".l-promotion #promoHero");$&&E.heroImg&&($.src=E.heroImg);const C=document.querySelector(".l-promotion #promCaption");C&&E.caption&&(C.textContent=E.caption);const R=document.querySelector(".l-promotion #promoTagline");return R&&E.tagline&&(/<[^>]+>/.test(E.tagline)?R.innerHTML=E.tagline:R.textContent=E.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(E){console.error("[app_events] Error handling promotion click:",E)}}),ce.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(S,x)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const E=ve();if(E.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const $=E.coreTourn[E.coreTourn.length-1],C=E.coreTourn.length>1?E.coreTourn[E.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",$);const R=[];if(C){const V=$.data,X=C.data;V.forEach(H=>{const D=X.find(j=>j.guid===H.guid);D&&D.status!==H.status&&(console.log(`[app_events] Status changed for tournament ${H.guid}: ${D.status} -> ${H.status}`),R.push(H.guid))})}const U=E.appSession?.session_user?.guid,W=[...$.data].sort((V,X)=>{const H=V.status||V.class,D=X.status||X.class,j=V.entities?.guids||[],B=X.entities?.guids||[],P=j.includes(U),M=B.includes(U),F=(q,ee)=>{const te=new Date(q.status_time||0).getTime();return new Date(ee.status_time||0).getTime()-te},z=H==="LOCKED"&&P,I=D==="LOCKED"&&M;if(z&&!I)return-1;if(!z&&I)return 1;if(z&&I)return F(V,X);const J=H==="UPCOMING",Z=D==="UPCOMING";if(J&&!Z)return-1;if(!J&&Z)return 1;if(J&&Z)return F(V,X);const N=H==="COMPLETED"&&P,k=D==="COMPLETED"&&M;if(N&&!k)return-1;if(!N&&k)return 1;if(N&&k)return F(V,X);const O=H==="COMPLETED"&&!P,L=D==="COMPLETED"&&!M;return O&&!L?1:!O&&L?-1:F(V,X)}),ae=ke.categorizeTournaments(W,t,a,U,{subStatus:s,sort:r,result:n});if(console.log(`[app_events] Categorized into ${ae.length} categories for filter: ${t}/${a} sub:${s} sort:${r} result:${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const V=document.querySelector(".tournaments-grid");V&&(V.dataset.filterContext=t),window._homeRouteRenderCards(ae,!0,i,{tab:t,subStatus:s,sort:r,result:n,odds:o});const X=W.filter(M=>{const F=M.status||M.class,z=M.entities?.guids||[];return(F==="LOCKED"||F==="UPCOMING")&&z.includes(U)}).length,H=W.reduce((M,F)=>{const z=F.status||F.class,I=F.entities?.guids||[];return(z==="LOCKED"||z==="UPCOMING")&&I.includes(U)?M+parseFloat(F.tournament_dollars||0):M},0),D=document.querySelector("bma-app-foot");D&&D.setAttribute("data-active-count",String(X));const j=document.querySelector("bma-app-head-mid");j&&j.setAttribute("data-active-count",String(X));const B=document.querySelector("bma-app-head-top");B&&(B.setAttribute("data-active-count",String(X)),B.setAttribute("data-td-dollars",String(H)));const P=document.getElementById("home-tab-active-badge");if(P&&(P.textContent=X,P.style.visibility=X>0?"visible":"hidden"),R.length>0){const M=$.data;R.forEach(F=>{const z=M.find(I=>I.guid===F);if(z){const I=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{ce.publish(E.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:F,status:z.status,timestamp:Date.now()}))},I)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available");const Y=document.getElementById("bma-scores-banner--id");if(Y){const V=new Set,X=[];for(const H of $.data){const D=Array.isArray(H.matches_expanded)?H.matches_expanded:[];for(const j of D){const B=j.guid||j.id||j.odds_id;!B||V.has(B)||(V.add(B),X.push(j))}}Y.setAttribute("data-matches",JSON.stringify(X))}ke.prefetchGlobalLeaderboard()}),ce.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(S,x)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",x);const E=ve();try{const $=JSON.parse(x);console.log("[app_events] SSE tournament sync data:",$);const C=JSON.parse($.msg);if(console.log("[app_events] Parsed tournaments array:",C),!Array.isArray(C)){console.warn("[app_events] SSE msg is not an array:",C);return}E.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:C}),console.log("[app_events] Pushed SSE data to coreTourn, length:",E.coreTourn.length),ce.publish(E.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),typeof neodigmSodaPop<"u"&&neodigmSodaPop.isOpen()==="sodapop_play"&&(console.log("[SSE] Play popup is open, triggering real-time update"),ke.hydratePlayPopup())}catch($){console.error("[app_events] Error processing SSE tournament sync:",$)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const S=document.querySelector("#caption__my-profile");S&&(S.textContent="My Profile");const x=document.getElementById("profile-trophy-username");x&&(x.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const E=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",E),console.log("[app_events] coreTourn length:",e.coreTourn.length),!E||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const C=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",C.length);const R=Y=>{const V=document.getElementById("profile-stats-panel");V&&(V.innerHTML=ke.buildStatsPanel(C,E,Y))};R(ke._betStatsCache?.stats||null),ke._ensureBetStatsCache(E).then(Y=>{Y&&R(Y)});let U=0,W=0,ae=0;C.forEach((Y,V)=>{if(!Y.tags||!Array.isArray(Y.tags)){console.log(`[app_events] Tournament ${V} has no tags or tags not an array`);return}Y.tags.forEach((X,H)=>{if(typeof X=="object"&&X!==null){let D=null;X.entity_guid===E&&X.badge?D=X.badge:X[E]&&(D=X[E]),D==="--badge__ribbon--gold"?U++:D==="--badge__ribbon--silver"?W++:D==="--badge__ribbon--bronze"&&ae++}})}),setTimeout(()=>{let Y=document.querySelectorAll(".badge-counter");if(Y.length===0){const V=document.querySelector("neodigm-sodapop");V&&(Y=V.querySelectorAll(".badge-counter"))}Y.length>=3?(Y[0].textContent=W,Y[1].textContent=U,Y[2].textContent=ae,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const Y=document.querySelector("#profile-tournaments-list");if(!Y||!E||e.coreTourn.length===0)return;const H=e.coreTourn[e.coreTourn.length-1].data.filter(P=>{try{return(typeof P.entities=="string"?JSON.parse(P.entities):P.entities)?.guids?.includes(E)}catch{return!1}}),D={LOCKED:0,UPCOMING:1,COMPLETED:2};H.sort((P,M)=>{const F=D[P.status]??3,z=D[M.status]??3;return F!==z?F-z:new Date(M.status_time||0)-new Date(P.status_time||0)});const j=P=>{let M=H;if(P==="active"?M=H.filter(F=>F.status==="LOCKED"||F.status==="UPCOMING"):P==="completed"&&(M=H.filter(F=>F.status==="COMPLETED")),M.length===0){Y.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}Y.innerHTML=M.map(F=>{const z=F.entities?JSON.stringify(F.entities).replace(/"/g,"&quot;"):"",I=F.tags?JSON.stringify(F.tags).replace(/"/g,"&quot;"):"[]",J=F.sports_allowed?JSON.stringify(F.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${F.guid||""}"
                                        data-bma-tourn-caption="${F.caption||""}"
                                        data-bma-tourn-tagline="${F.tagline||""}"
                                        data-bma-tourn-status="${F.status||""}"
                                        data-bma-tourn-class="${F.status||""}"
                                        data-bma-tourn-sports_allowed="${J}"
                                        data-bma-tourn-entities="${z}"
                                        data-bma-tourn-entry_fee="${F.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${F.tournament_dollars||0}"
                                        data-bma-tourn-matches="${F.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${I}"
                                        data-bma-tourn-window_start_time="${F.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${F.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{Y.querySelectorAll("bma-tournament-list-card").forEach((F,z)=>{F.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",F.style.animationDelay=`${Math.min(z*60,400)}ms`})})};j("all");const B=document.querySelector(".profile-tournaments__filters");B&&B.addEventListener("click",P=>{const M=P.target.closest(".profile-tourn-filter");M&&(B.querySelectorAll(".profile-tourn-filter").forEach(F=>F.classList.remove("profile-tourn-filter--active")),M.classList.add("profile-tourn-filter--active"),j(M.dataset.filter))})},600)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const S=ve(),x=document.querySelector(".play-cntr");T&&(x.dataset.currentTournGuid=T),A&&(x.dataset.currentTournAction=A);const E=x?.dataset?.currentTournGuid,$=x?.dataset?.currentTournAction||"INFO";if(E&&S.coreTourn.length>0){const H=S.coreTourn[S.coreTourn.length-1].data.find(j=>j.guid===E),D=H?.class||"DEFAULT";x.dataset.gameType=D,console.log("[app_events] Game mode:",D,"for tournament:",H?.caption)}console.log("[app_events] sodapop_play opened - GUID:",E,"action:",$),window.initBetGridToggle&&window.initBetGridToggle(),ke.updatePlayButton(),ke.populateInfoPage();let C=$==="PLAY"||$==="JOIN"?"PLAY":$;if(!E||S.coreTourn.length===0||S.coreTourn[S.coreTourn.length-1].data.find(D=>D.guid===E)?.status==="COMPLETED"&&(C="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),C){const X=`ROUTE.HOME.SODAPOP_PLAY.${C}`;console.log("[app_events] Publishing initial topic:",X),ce.publish(X,JSON.stringify({tournamentGuid:E,timestamp:Date.now()}))}if(!E||S.coreTourn.length===0)return;const U=S.coreTourn[S.coreTourn.length-1].data.find(X=>X.guid===E);ke.renderMatchCards(U);const W=document.querySelector("#pop-play__tourn-caption--id"),ae=document.querySelector("#pop-play__tourn-tagline--id");W&&(W.textContent=U.caption),ae&&(ae.textContent=U.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",U?.caption);const Y=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!Y),Y&&console.log("[Modal Debug] Modal classes:",Y.className),ke.updateTournamentDashboard(U);const V=document.getElementById("dashboard-rank");if(V){const X=U.entities?.guids?.length||0;V.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${X}</span>                            `}},1e3)},"sodapop_play"))},3e3),window._renderTopPlayers=async function(S="ALL"){const x=ve(),E=document.getElementById("global-leaderboard-container");if(E){E.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{let $;const C=ke._globalLBCache[S];C?.data&&Date.now()-C.ts<300*1e3?(console.log(`[Global Leaderboard] Using prefetched cache [${S}]`),$=C.data):(console.log(`[Global Leaderboard] Cache miss [${S}], fetching fresh`),$=await Ae.fetchAllTimeLeaderboard(S,100,"td"),ke._globalLBCache[S]={data:$,ts:Date.now(),inflight:!1});const R=$?.data||[],U=$?.last_updated||null,W=x.coreTourn.length>0?x.coreTourn[x.coreTourn.length-1].data:[];if(!R.length){E.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const ae=E,Y=x.appSession?.session_user?.guid,V={};R.forEach(I=>{const J=I.user_guid;V[J]={username:I.username||"Unknown",user_guid:J,totalTDWon:parseFloat(I.total_payout||0),totalPayout:parseFloat(I.total_payout||0),totalBets:parseInt(I.total_betslips||0),tournamentsPlayed:parseInt(I.tournaments_joined||0),tournamentsWon:parseInt(I.tournaments_won||0),totalTD:parseFloat(I.total_td_dollars||0),gold:0,silver:0,bronze:0,sports:new Set}}),W.forEach(I=>{!I.tags||!Array.isArray(I.tags)||I.tags.forEach(J=>{if(typeof J!="object"||!J)return;let Z=null,N=null;if(J.entity_guid&&J.badge){if(J.entity_guid==="SYSTEM")return;Z=J.entity_guid,N=J.badge}else{const O=Object.keys(J);for(const L of O){const q=J[L];if(typeof q=="string"&&q.startsWith("--badge__ribbon--")){Z=L,N=q;break}}}if(!Z||!N)return;V[Z]||(V[Z]={username:Z.substring(0,8),user_guid:Z,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,totalTD:0,gold:0,silver:0,bronze:0,sports:new Set});const k=V[Z];N==="--badge__ribbon--gold"?k.gold++:N==="--badge__ribbon--silver"?k.silver++:N==="--badge__ribbon--bronze"&&k.bronze++})});const X=Object.values(V).filter(I=>I.username!=="Unknown");if(U){const I=Math.round((Date.now()-new Date(U).getTime())/6e4),J=I<1?"just now":I===1?"1 minute ago":`${I} minutes ago`;console.log(`[Global Leaderboard] Server last updated ${J}`)}const H=X.filter(I=>I.gold+I.silver+I.bronze>0),D=new Set;X.forEach(I=>I.sports.forEach(J=>D.add(J)));const j={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},B=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let P="all";const M=(I,J)=>{let Z=[...X],N;I==="overall"&&(Z=Z.filter(K=>K.gold+K.silver+K.bronze>0)),I==="bysport"&&J&&J!=="all"&&(Z=Z.filter(K=>K.sports.has(J)));const k=ae.querySelector(".glb__note");switch(k&&k.remove(),I){case"overall":Z.sort((K,oe)=>oe.gold*100+oe.silver*10+oe.bronze-(K.gold*100+K.silver*10+K.bronze)||oe.totalPayout-K.totalPayout||oe.totalBets-K.totalBets),N=(K,oe,se,de,ue)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${oe<3?"glb__rank--top3":""}">#${oe+1}</span>
                                                <span class="glb__avatar" style="background: ${de};">${se}</span>
                                                <span class="glb__name">${K.username}</span>
                                                ${ue?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right">
                                                ${K.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${K.gold}</span></div>`:""}
                                                ${K.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${K.silver}</span></div>`:""}
                                                ${K.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${K.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":Z=Z.filter(K=>K.totalTDWon>0),Z.sort((K,oe)=>oe.totalTDWon-K.totalTDWon),N=(K,oe,se,de,ue)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${oe<3?"glb__rank--top3":""}">#${oe+1}</span>
                                                <span class="glb__avatar" style="background: ${de};">${se}</span>
                                                <span class="glb__name">${K.username}</span>
                                                ${ue?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__earnings">TD$ ${Math.round(K.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":Z.sort((K,oe)=>oe.totalPayout-K.totalPayout||oe.totalBets-K.totalBets),N=(K,oe,se,de,ue)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${oe<3?"glb__rank--top3":""}">#${oe+1}</span>
                                                <span class="glb__avatar" style="background: ${de};">${se}</span>
                                                <span class="glb__name">${K.username}</span>
                                                ${ue?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right" style="gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${K.totalBets} bets</span>
                                                <span class="glb__earnings">TD$ ${K.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const O=ae.querySelector(".glb__list");if(!O)return;if(Z.length===0){const K=I==="earnings"?"No TD$ won from reconciled bets yet":I==="bysport"?"No players found for this sport":"No leaderboard data available";O.innerHTML=`<div class="leaderboard-empty"><p>${K}</p></div>`;return}const L=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],q=K=>L[K.charCodeAt(0)%L.length];let ee="";if(I==="overall"&&Z.length>=3){const K=(oe,se,de,ue,pe)=>{const he=Z[oe],be=he.user_guid===Y;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${se===1?80:se===2?64:56}px; height: ${se===1?80:se===2?64:56}px; background-image: var(${ue}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${be?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${he.username}${be?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${he.gold+he.silver+he.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${de}px; background: linear-gradient(180deg, ${pe}33 0%, ${pe}0D 100%); border-top: 3px solid ${pe}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${pe};">${se===1?"1st":se===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};ee=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${K(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${K(0,1,90,"--badge__gold","#FFD700")}
                                        ${K(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const te='<div class="info-section__title">Rankings</div>',le='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',ne='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(I==="bysport"&&!ae.querySelector(".glb__note")){const oe=document.createElement("div");oe.className="glb__note",oe.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",oe.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const se=ae.querySelector(".glb__sport-filters");se&&se.parentNode.insertBefore(oe,se)}let re="";if(I==="earnings"&&Z.length>=3){const K=(oe,se,de,ue)=>{const pe=Z[oe],he=pe.user_guid===Y;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${se===1?80:se===2?64:56}px; height: ${se===1?80:se===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${he?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${pe.username}${he?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(pe.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${de}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${se===1?"1st":se===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};re=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${K(1,2,70,"#00E676")}
                                        ${K(0,1,90,"#00E676")}
                                        ${K(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(I==="overall")O.innerHTML=ee+le+te+Z.map((K,oe)=>{const se=(K.username||"?")[0].toUpperCase(),de=q(K.username),ue=K.user_guid===Y;return N(K,oe,se,de,ue)}).join("");else if(I==="earnings"){const K='<div class="info-section__title">TD$ Won</div>';O.innerHTML=re+ne+K+Z.map((oe,se)=>{const de=(oe.username||"?")[0].toUpperCase(),ue=q(oe.username),pe=oe.user_guid===Y;return N(oe,se,de,ue,pe)}).join("")}else if(I==="bysport"){let K="";if(Z.length>=3){const se=(de,ue,pe)=>{const he=Z[de],be=he.user_guid===Y,Ne=q(he.username),Be=(he.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${Ne}; width: ${ue===1?48:38}px; height: ${ue===1?48:38}px; font-size: ${ue===1?"1rem":"0.8rem"};">${Be}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${be?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${he.username}${be?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${he.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${pe}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${ue===1?"1st":ue===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};K=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${se(1,2,70)}
                                            ${se(0,1,90)}
                                            ${se(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const oe='<div class="info-section__title">Rankings</div>';O.innerHTML=K+oe+Z.map((se,de)=>{const ue=(se.username||"?")[0].toUpperCase(),pe=q(se.username),he=se.user_guid===Y;return N(se,de,ue,pe,he)}).join("")}requestAnimationFrame(()=>{O.querySelectorAll(".glb__card, .info-row").forEach((K,oe)=>{K.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",K.style.animationDelay=`${Math.min(oe*50,400)}ms`})})},F=[...D].map(I=>{const J=j[I]||I.replace(/^[a-z]+_/,"").toUpperCase(),Z=Ve.find(k=>k.key===I),N=Z?Z.group:"default";return`<button class="glb__sport-chip" data-sport="${I}">
                                <bma-sport-icon sport="${I}" data-sport-group="${N}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${J}</span>
                            </button>`}).join("");ae.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${B.map((I,J)=>`
                                    <button class="glb__tab ${J===0?"glb__tab--active":""}" data-tab="${I.id}">${I.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${F}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const z=document.createElement("style");z.textContent=`
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
                        `,ae.prepend(z),M("overall"),ae.querySelectorAll(".glb__tab").forEach(I=>{I.addEventListener("click",()=>{ae.querySelectorAll(".glb__tab").forEach(N=>N.classList.remove("glb__tab--active")),I.classList.add("glb__tab--active");const J=I.dataset.tab,Z=ae.querySelector(".glb__sport-filters");Z&&(Z.style.display=J==="bysport"?"flex":"none"),M(J,J==="bysport"?P:void 0)})}),ae.querySelectorAll(".glb__sport-chip").forEach(I=>{I.addEventListener("click",()=>{ae.querySelectorAll(".glb__sport-chip").forEach(J=>J.classList.remove("glb__sport-chip--active")),I.classList.add("glb__sport-chip--active"),P=I.dataset.sport,M("bysport",P)})})}catch($){console.error("[appEvents] Error fetching global leaderboard:",$);const C=document.getElementById("global-leaderboard-container");C&&(C.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>')}}},setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){window._renderTopPlayers&&await window._renderTopPlayers()},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},k0={__name:"App",setup(e){const t=gt(),a=ve();return xt(()=>{setTimeout(()=>{const s=a.appSession?.session_user?.guid,r=a.appSession?.session_user?.authenticated;s&&r&&a.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",s),Gr.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",s,a,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((s=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${s}`,"primary"),t.push({name:s})}).setOnState((s=null)=>{s&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=s)}).init({BASE:Ae.API_baseURI})},2e3),setTimeout(()=>{ke.bindAppListeners(a)},3e3),t.beforeEach((s,r,n)=>{s.name=="splash_route"||s.name&&mvvLegit&&mvvLegit.isRouteAllowed(s.name)?n():n(!1)}),(s,r)=>(Le(),po(ft(pu),null,{default:no(({Component:n})=>[tt(Uf,{name:"slide-left"},{default:no(()=>[(Le(),po(Gp(n)))]),_:2},1024)]),_:1}))}};class Cu{constructor(){this.id="DEFAULT",this.label="Free Play",this.description="Place any bets you want across the tournament slate."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:[],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:0,stakeRule:"FREE",stakeMin:1,stakeMax:null,allowPartialSubmit:!0,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!1}}getEffectiveRules(t){const a=this.rules;if(!t?.tags||!Array.isArray(t.tags))return a;const s=t.tags.find(r=>typeof r=="object"&&r!==null&&r.game_rules);return s?.game_rules?{...a,...s.game_rules}:a}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","totalBets"],bonuses:[],penalizeMissing:!1}}_parseBets(t){const a=[];return t.forEach(s=>{const r=s.coreMatches__guid||s.match_guid||"";(s.bet||[]).forEach(o=>{Object.keys(o).forEach(i=>{if(i==="short_title")return;const l=o[i];l&&a.push({matchGuid:r,type:(l.type||"").toUpperCase(),team:i,stake:parseFloat(l.stake||0),payout:parseFloat(l.payout||0),odds:parseFloat(l.odds||0),reconciled:l.reconciled||!1})})})}),a}_getTypeCounts(t){const a={};return t.forEach(s=>{a[s.type]=(a[s.type]||0)+1}),a}_getTotalStakes(t){return parseFloat(t.reduce((a,s)=>a+s.stake,0).toFixed(2))}_typeLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money Line";case"TOTAL":return"Over/Under";default:return t}}_typeShortLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money";case"TOTAL":return"Total";default:return t}}canPlaceBet(t,a,s){const r=this.getEffectiveRules(s),n=this._parseBets(a),o=(t.type||"").toUpperCase();return r.oneBetPerMatchPerType&&n.find(l=>l.matchGuid===t.matchGuid&&l.type===o)?{allowed:!1,reason:`You already have a ${this._typeLabel(o)} bet on this match`}:r.maxBetsPerType>0&&n.filter(l=>l.type===o).length>=r.maxBetsPerType?{allowed:!1,reason:`Maximum ${r.maxBetsPerType} ${this._typeLabel(o)} bets reached`}:r.maxBetsTotal>0&&n.length>=r.maxBetsTotal?{allowed:!1,reason:`Maximum ${r.maxBetsTotal} total bets reached`}:{allowed:!0,reason:null}}validateBetSlip(t,a,s){const r=this.getEffectiveRules(a),n=[],o=[],i=this._parseBets(t),l=this._getTypeCounts(i),c=this._getTotalStakes(i),d=parseFloat(a?.tournament_dollars||0);if(r.requiredBetTypes.forEach(u=>{l[u]||n.push(`You need at least one ${this._typeLabel(u)} bet`)}),r.minBetsTotal>0&&i.length<r.minBetsTotal&&n.push(`Place at least ${r.minBetsTotal} bets`),r.stakeRule==="SPEND_ALL"&&d>0){if(c<d){const u=parseFloat((d-c).toFixed(2));n.push(`You have TD$ ${u.toLocaleString()} left to spend — use your entire balance`)}else if(c>d+.01){const u=parseFloat((c-d).toFixed(2));n.push(`You've exceeded your TD$ balance by ${u.toLocaleString()}`)}}return!r.allowPartialSubmit&&n.length>0,{valid:n.length===0,errors:n,warnings:o}}scoreEntry(t,a){const s=parseFloat(t.total_payout||0);return{score:s,breakdown:{payout:s}}}rankLeaderboard(t,a){return[...t].sort((s,r)=>{const n=this.scoreEntry(s,a).score;return this.scoreEntry(r,a).score-n})}getProgressUI(t,a){const s=this.getEffectiveRules(a),r=s.requiredBetTypes.length>0,n=s.stakeRule==="SPEND_ALL";if(!r&&!n)return{type:"NONE",percent:0,label:"",hints:[],typesStatus:[],complete:!0};const o=this._parseBets(t),i=this._getTypeCounts(o),l=this._getTotalStakes(o),c=parseFloat(a?.tournament_dollars||0),d=c>0?Math.min(100,Math.round(l/c*100)):0,u=s.requiredBetTypes.every(m=>i[m]),p=!n||Math.abs(l-c)<.01,f=s.requiredBetTypes.map(m=>({type:m,label:this._typeShortLabel(m),placed:!!i[m],count:i[m]||0})),g=[],v=s.requiredBetTypes.filter(m=>!i[m]).map(m=>this._typeLabel(m));return v.length>0&&!p?g.push(`Need a ${v.join(", ")} bet · Spend all TD$ ${Math.round(c).toLocaleString()}`):v.length>0?g.push(`Need a ${v.join(", ")} bet`):!p&&l<c&&g.push(`TD$ ${Math.round(c-l).toLocaleString()} left to allocate`),{type:r?"BET_TYPES":"STAKE_PROGRESS",percent:d,label:n?`TD$ ${Math.round(l).toLocaleString()} / ${Math.round(c).toLocaleString()} spent`:`${o.length} bets placed`,typesStatus:f,hints:g,complete:u&&p}}getValidationMessages(t,a,s){return this.getProgressUI(t,a).hints}getBadge(){return null}getRulesHTML(t){return"<p>Place bets on any matches in the tournament. The player with the highest total payout wins.</p>"}getEmptyStateText(){return"Select a match to start betting"}}class hl extends Cu{constructor(){super(),this.id="DEFAULT_FORMAT",this.label="Free Play",this.description="Place any bets you want across the tournament slate."}get scoring(){return{method:"POTENTIAL_WINNINGS",rankBy:["score","pendingPayout","timestamp"],bonuses:[],penalizeMissing:!1}}scoreEntry(t,a){const s=parseFloat(t.tournament_dollars??a?.tournament_dollars??0),r=this._parseBets(t.bets||[]);let n=0,o=0,i=0;r.forEach(d=>{n+=d.stake,d.reconciled?i+=d.payout:o+=d.payout});const l=s-n;return{score:parseFloat((l+o+i).toFixed(2)),breakdown:{startingTD:parseFloat(s.toFixed(2)),remainingTD:parseFloat(l.toFixed(2)),totalStakes:parseFloat(n.toFixed(2)),pendingPayout:parseFloat(o.toFixed(2)),settledPayout:parseFloat(i.toFixed(2))}}}rankLeaderboard(t,a){return[...t].map(s=>({entry:s,...this.scoreEntry(s,a)})).sort((s,r)=>{if(r.score!==s.score)return r.score-s.score;if(r.breakdown.pendingPayout!==s.breakdown.pendingPayout)return r.breakdown.pendingPayout-s.breakdown.pendingPayout;const n=new Date(s.entry.timestamp||0).getTime(),o=new Date(r.entry.timestamp||0).getTime();return n-o}).map(s=>s.entry)}}class A0 extends Cu{constructor(){super(),this.id="SET_IT_AND_FORGET_IT",this.label="Set It and Forget It",this.description="Build your lineup with one of each bet type across the slate. Spend all your TD$."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:["SPREAD","MONEY","TOTAL"],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:3,stakeRule:"SPEND_ALL",stakeMin:1,stakeMax:null,allowPartialSubmit:!1,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!0}}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","betCount","timestamp"],bonuses:[],penalizeMissing:!0}}getBadge(){return{label:"Set & Forget",color:"ghost"}}getEmptyStateText(){return"Build your lineup — place one of each bet type and spend all your TD$"}getRulesHTML(t){const a=t?.tournament_dollars||0;return`
            <div style="padding: 12px 0;">
                <p style="margin: 0 0 8px; font-weight: 600; color: rgba(255,255,255,0.85);">Set It and Forget It Rules:</p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.8;">
                    <li>Place at least one <strong>Spread</strong>, one <strong>Money Line</strong>, and one <strong>Over/Under</strong> bet</li>
                    <li>You must spend your entire <strong>TD$ ${Number(a).toLocaleString()}</strong> balance across all bets</li>
                    <li>One bet per match per bet type (no duplicates)</li>
                    <li>Highest total payout wins the tournament</li>
                </ul>
            </div>`}}var zs={exports:{}},qn={},Ht={},Ta={},Gn={},Vn={},Kn={},ml;function Kr(){return ml||(ml=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class a extends t{constructor(h){if(super(),!e.IDENTIFIER.test(h))throw new Error("CodeGen: name must be a valid identifier");this.str=h}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=a;class s extends t{constructor(h){super(),this._items=typeof h=="string"?[h]:h}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const h=this._items[0];return h===""||h==='""'}get str(){var h;return(h=this._str)!==null&&h!==void 0?h:this._str=this._items.reduce((b,w)=>`${b}${w}`,"")}get names(){var h;return(h=this._names)!==null&&h!==void 0?h:this._names=this._items.reduce((b,w)=>(w instanceof a&&(b[w.str]=(b[w.str]||0)+1),b),{})}}e._Code=s,e.nil=new s("");function r(m,...h){const b=[m[0]];let w=0;for(;w<h.length;)i(b,h[w]),b.push(m[++w]);return new s(b)}e._=r;const n=new s("+");function o(m,...h){const b=[f(m[0])];let w=0;for(;w<h.length;)b.push(n),i(b,h[w]),b.push(n,f(m[++w]));return l(b),new s(b)}e.str=o;function i(m,h){h instanceof s?m.push(...h._items):h instanceof a?m.push(h):m.push(u(h))}e.addCodeArg=i;function l(m){let h=1;for(;h<m.length-1;){if(m[h]===n){const b=c(m[h-1],m[h+1]);if(b!==void 0){m.splice(h-1,3,b);continue}m[h++]="+"}h++}}function c(m,h){if(h==='""')return m;if(m==='""')return h;if(typeof m=="string")return h instanceof a||m[m.length-1]!=='"'?void 0:typeof h!="string"?`${m.slice(0,-1)}${h}"`:h[0]==='"'?m.slice(0,-1)+h.slice(1):void 0;if(typeof h=="string"&&h[0]==='"'&&!(m instanceof a))return`"${m}${h.slice(1)}`}function d(m,h){return h.emptyStr()?m:m.emptyStr()?h:o`${m}${h}`}e.strConcat=d;function u(m){return typeof m=="number"||typeof m=="boolean"||m===null?m:f(Array.isArray(m)?m.join(","):m)}function p(m){return new s(f(m))}e.stringify=p;function f(m){return JSON.stringify(m).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=f;function g(m){return typeof m=="string"&&e.IDENTIFIER.test(m)?new s(`.${m}`):r`[${m}]`}e.getProperty=g;function _(m){if(typeof m=="string"&&e.IDENTIFIER.test(m))return new s(`${m}`);throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`)}e.getEsmExportName=_;function v(m){return new s(m.toString())}e.regexpCode=v})(Kn)),Kn}var Yn={},gl;function bl(){return gl||(gl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=Kr();class a extends Error{constructor(c){super(`CodeGen: "code" for ${c} not defined`),this.value=c.value}}var s;(function(l){l[l.Started=0]="Started",l[l.Completed=1]="Completed"})(s||(e.UsedValueState=s={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class r{constructor({prefixes:c,parent:d}={}){this._names={},this._prefixes=c,this._parent=d}toName(c){return c instanceof t.Name?c:this.name(c)}name(c){return new t.Name(this._newName(c))}_newName(c){const d=this._names[c]||this._nameGroup(c);return`${c}${d.index++}`}_nameGroup(c){var d,u;if(!((u=(d=this._parent)===null||d===void 0?void 0:d._prefixes)===null||u===void 0)&&u.has(c)||this._prefixes&&!this._prefixes.has(c))throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);return this._names[c]={prefix:c,index:0}}}e.Scope=r;class n extends t.Name{constructor(c,d){super(d),this.prefix=c}setValue(c,{property:d,itemIndex:u}){this.value=c,this.scopePath=(0,t._)`.${new t.Name(d)}[${u}]`}}e.ValueScopeName=n;const o=(0,t._)`\n`;class i extends r{constructor(c){super(c),this._values={},this._scope=c.scope,this.opts={...c,_n:c.lines?o:t.nil}}get(){return this._scope}name(c){return new n(c,this._newName(c))}value(c,d){var u;if(d.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const p=this.toName(c),{prefix:f}=p,g=(u=d.key)!==null&&u!==void 0?u:d.ref;let _=this._values[f];if(_){const h=_.get(g);if(h)return h}else _=this._values[f]=new Map;_.set(g,p);const v=this._scope[f]||(this._scope[f]=[]),m=v.length;return v[m]=d.ref,p.setValue(d,{property:f,itemIndex:m}),p}getValue(c,d){const u=this._values[c];if(u)return u.get(d)}scopeRefs(c,d=this._values){return this._reduceValues(d,u=>{if(u.scopePath===void 0)throw new Error(`CodeGen: name "${u}" has no value`);return(0,t._)`${c}${u.scopePath}`})}scopeCode(c=this._values,d,u){return this._reduceValues(c,p=>{if(p.value===void 0)throw new Error(`CodeGen: name "${p}" has no value`);return p.value.code},d,u)}_reduceValues(c,d,u={},p){let f=t.nil;for(const g in c){const _=c[g];if(!_)continue;const v=u[g]=u[g]||new Map;_.forEach(m=>{if(v.has(m))return;v.set(m,s.Started);let h=d(m);if(h){const b=this.opts.es5?e.varKinds.var:e.varKinds.const;f=(0,t._)`${f}${b} ${m} = ${h};${this.opts._n}`}else if(h=p?.(m))f=(0,t._)`${f}${h}${this.opts._n}`;else throw new a(m);v.set(m,s.Completed)})}return f}}e.ValueScope=i})(Yn)),Yn}var _l;function _e(){return _l||(_l=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=Kr(),a=bl();var s=Kr();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return s._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return s.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return s.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return s.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return s.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return s.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return s.Name}});var r=bl();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return r.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return r.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return r.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return r.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class n{optimizeNodes(){return this}optimizeNames(P,M){return this}}class o extends n{constructor(P,M,F){super(),this.varKind=P,this.name=M,this.rhs=F}render({es5:P,_n:M}){const F=P?a.varKinds.var:this.varKind,z=this.rhs===void 0?"":` = ${this.rhs}`;return`${F} ${this.name}${z};`+M}optimizeNames(P,M){if(P[this.name.str])return this.rhs&&(this.rhs=U(this.rhs,P,M)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class i extends n{constructor(P,M,F){super(),this.lhs=P,this.rhs=M,this.sideEffects=F}render({_n:P}){return`${this.lhs} = ${this.rhs};`+P}optimizeNames(P,M){if(!(this.lhs instanceof t.Name&&!P[this.lhs.str]&&!this.sideEffects))return this.rhs=U(this.rhs,P,M),this}get names(){const P=this.lhs instanceof t.Name?{}:{...this.lhs.names};return R(P,this.rhs)}}class l extends i{constructor(P,M,F,z){super(P,F,z),this.op=M}render({_n:P}){return`${this.lhs} ${this.op}= ${this.rhs};`+P}}class c extends n{constructor(P){super(),this.label=P,this.names={}}render({_n:P}){return`${this.label}:`+P}}class d extends n{constructor(P){super(),this.label=P,this.names={}}render({_n:P}){return`break${this.label?` ${this.label}`:""};`+P}}class u extends n{constructor(P){super(),this.error=P}render({_n:P}){return`throw ${this.error};`+P}get names(){return this.error.names}}class p extends n{constructor(P){super(),this.code=P}render({_n:P}){return`${this.code};`+P}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(P,M){return this.code=U(this.code,P,M),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class f extends n{constructor(P=[]){super(),this.nodes=P}render(P){return this.nodes.reduce((M,F)=>M+F.render(P),"")}optimizeNodes(){const{nodes:P}=this;let M=P.length;for(;M--;){const F=P[M].optimizeNodes();Array.isArray(F)?P.splice(M,1,...F):F?P[M]=F:P.splice(M,1)}return P.length>0?this:void 0}optimizeNames(P,M){const{nodes:F}=this;let z=F.length;for(;z--;){const I=F[z];I.optimizeNames(P,M)||(W(P,I.names),F.splice(z,1))}return F.length>0?this:void 0}get names(){return this.nodes.reduce((P,M)=>C(P,M.names),{})}}class g extends f{render(P){return"{"+P._n+super.render(P)+"}"+P._n}}class _ extends f{}class v extends g{}v.kind="else";class m extends g{constructor(P,M){super(M),this.condition=P}render(P){let M=`if(${this.condition})`+super.render(P);return this.else&&(M+="else "+this.else.render(P)),M}optimizeNodes(){super.optimizeNodes();const P=this.condition;if(P===!0)return this.nodes;let M=this.else;if(M){const F=M.optimizeNodes();M=this.else=Array.isArray(F)?new v(F):F}if(M)return P===!1?M instanceof m?M:M.nodes:this.nodes.length?this:new m(ae(P),M instanceof m?[M]:M.nodes);if(!(P===!1||!this.nodes.length))return this}optimizeNames(P,M){var F;if(this.else=(F=this.else)===null||F===void 0?void 0:F.optimizeNames(P,M),!!(super.optimizeNames(P,M)||this.else))return this.condition=U(this.condition,P,M),this}get names(){const P=super.names;return R(P,this.condition),this.else&&C(P,this.else.names),P}}m.kind="if";class h extends g{}h.kind="for";class b extends h{constructor(P){super(),this.iteration=P}render(P){return`for(${this.iteration})`+super.render(P)}optimizeNames(P,M){if(super.optimizeNames(P,M))return this.iteration=U(this.iteration,P,M),this}get names(){return C(super.names,this.iteration.names)}}class w extends h{constructor(P,M,F,z){super(),this.varKind=P,this.name=M,this.from=F,this.to=z}render(P){const M=P.es5?a.varKinds.var:this.varKind,{name:F,from:z,to:I}=this;return`for(${M} ${F}=${z}; ${F}<${I}; ${F}++)`+super.render(P)}get names(){const P=R(super.names,this.from);return R(P,this.to)}}class y extends h{constructor(P,M,F,z){super(),this.loop=P,this.varKind=M,this.name=F,this.iterable=z}render(P){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(P)}optimizeNames(P,M){if(super.optimizeNames(P,M))return this.iterable=U(this.iterable,P,M),this}get names(){return C(super.names,this.iterable.names)}}class T extends g{constructor(P,M,F){super(),this.name=P,this.args=M,this.async=F}render(P){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(P)}}T.kind="func";class A extends f{render(P){return"return "+super.render(P)}}A.kind="return";class S extends g{render(P){let M="try"+super.render(P);return this.catch&&(M+=this.catch.render(P)),this.finally&&(M+=this.finally.render(P)),M}optimizeNodes(){var P,M;return super.optimizeNodes(),(P=this.catch)===null||P===void 0||P.optimizeNodes(),(M=this.finally)===null||M===void 0||M.optimizeNodes(),this}optimizeNames(P,M){var F,z;return super.optimizeNames(P,M),(F=this.catch)===null||F===void 0||F.optimizeNames(P,M),(z=this.finally)===null||z===void 0||z.optimizeNames(P,M),this}get names(){const P=super.names;return this.catch&&C(P,this.catch.names),this.finally&&C(P,this.finally.names),P}}class x extends g{constructor(P){super(),this.error=P}render(P){return`catch(${this.error})`+super.render(P)}}x.kind="catch";class E extends g{render(P){return"finally"+super.render(P)}}E.kind="finally";class ${constructor(P,M={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...M,_n:M.lines?`
`:""},this._extScope=P,this._scope=new a.Scope({parent:P}),this._nodes=[new _]}toString(){return this._root.render(this.opts)}name(P){return this._scope.name(P)}scopeName(P){return this._extScope.name(P)}scopeValue(P,M){const F=this._extScope.value(P,M);return(this._values[F.prefix]||(this._values[F.prefix]=new Set)).add(F),F}getScopeValue(P,M){return this._extScope.getValue(P,M)}scopeRefs(P){return this._extScope.scopeRefs(P,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(P,M,F,z){const I=this._scope.toName(M);return F!==void 0&&z&&(this._constants[I.str]=F),this._leafNode(new o(P,I,F)),I}const(P,M,F){return this._def(a.varKinds.const,P,M,F)}let(P,M,F){return this._def(a.varKinds.let,P,M,F)}var(P,M,F){return this._def(a.varKinds.var,P,M,F)}assign(P,M,F){return this._leafNode(new i(P,M,F))}add(P,M){return this._leafNode(new l(P,e.operators.ADD,M))}code(P){return typeof P=="function"?P():P!==t.nil&&this._leafNode(new p(P)),this}object(...P){const M=["{"];for(const[F,z]of P)M.length>1&&M.push(","),M.push(F),(F!==z||this.opts.es5)&&(M.push(":"),(0,t.addCodeArg)(M,z));return M.push("}"),new t._Code(M)}if(P,M,F){if(this._blockNode(new m(P)),M&&F)this.code(M).else().code(F).endIf();else if(M)this.code(M).endIf();else if(F)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(P){return this._elseNode(new m(P))}else(){return this._elseNode(new v)}endIf(){return this._endBlockNode(m,v)}_for(P,M){return this._blockNode(P),M&&this.code(M).endFor(),this}for(P,M){return this._for(new b(P),M)}forRange(P,M,F,z,I=this.opts.es5?a.varKinds.var:a.varKinds.let){const J=this._scope.toName(P);return this._for(new w(I,J,M,F),()=>z(J))}forOf(P,M,F,z=a.varKinds.const){const I=this._scope.toName(P);if(this.opts.es5){const J=M instanceof t.Name?M:this.var("_arr",M);return this.forRange("_i",0,(0,t._)`${J}.length`,Z=>{this.var(I,(0,t._)`${J}[${Z}]`),F(I)})}return this._for(new y("of",z,I,M),()=>F(I))}forIn(P,M,F,z=this.opts.es5?a.varKinds.var:a.varKinds.const){if(this.opts.ownProperties)return this.forOf(P,(0,t._)`Object.keys(${M})`,F);const I=this._scope.toName(P);return this._for(new y("in",z,I,M),()=>F(I))}endFor(){return this._endBlockNode(h)}label(P){return this._leafNode(new c(P))}break(P){return this._leafNode(new d(P))}return(P){const M=new A;if(this._blockNode(M),this.code(P),M.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(A)}try(P,M,F){if(!M&&!F)throw new Error('CodeGen: "try" without "catch" and "finally"');const z=new S;if(this._blockNode(z),this.code(P),M){const I=this.name("e");this._currNode=z.catch=new x(I),M(I)}return F&&(this._currNode=z.finally=new E,this.code(F)),this._endBlockNode(x,E)}throw(P){return this._leafNode(new u(P))}block(P,M){return this._blockStarts.push(this._nodes.length),P&&this.code(P).endBlock(M),this}endBlock(P){const M=this._blockStarts.pop();if(M===void 0)throw new Error("CodeGen: not in self-balancing block");const F=this._nodes.length-M;if(F<0||P!==void 0&&F!==P)throw new Error(`CodeGen: wrong number of nodes: ${F} vs ${P} expected`);return this._nodes.length=M,this}func(P,M=t.nil,F,z){return this._blockNode(new T(P,M,F)),z&&this.code(z).endFunc(),this}endFunc(){return this._endBlockNode(T)}optimize(P=1){for(;P-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(P){return this._currNode.nodes.push(P),this}_blockNode(P){this._currNode.nodes.push(P),this._nodes.push(P)}_endBlockNode(P,M){const F=this._currNode;if(F instanceof P||M&&F instanceof M)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${M?`${P.kind}/${M.kind}`:P.kind}"`)}_elseNode(P){const M=this._currNode;if(!(M instanceof m))throw new Error('CodeGen: "else" without "if"');return this._currNode=M.else=P,this}get _root(){return this._nodes[0]}get _currNode(){const P=this._nodes;return P[P.length-1]}set _currNode(P){const M=this._nodes;M[M.length-1]=P}}e.CodeGen=$;function C(B,P){for(const M in P)B[M]=(B[M]||0)+(P[M]||0);return B}function R(B,P){return P instanceof t._CodeOrName?C(B,P.names):B}function U(B,P,M){if(B instanceof t.Name)return F(B);if(!z(B))return B;return new t._Code(B._items.reduce((I,J)=>(J instanceof t.Name&&(J=F(J)),J instanceof t._Code?I.push(...J._items):I.push(J),I),[]));function F(I){const J=M[I.str];return J===void 0||P[I.str]!==1?I:(delete P[I.str],J)}function z(I){return I instanceof t._Code&&I._items.some(J=>J instanceof t.Name&&P[J.str]===1&&M[J.str]!==void 0)}}function W(B,P){for(const M in P)B[M]=(B[M]||0)-(P[M]||0)}function ae(B){return typeof B=="boolean"||typeof B=="number"||B===null?!B:(0,t._)`!${j(B)}`}e.not=ae;const Y=D(e.operators.AND);function V(...B){return B.reduce(Y)}e.and=V;const X=D(e.operators.OR);function H(...B){return B.reduce(X)}e.or=H;function D(B){return(P,M)=>P===t.nil?M:M===t.nil?P:(0,t._)`${j(P)} ${B} ${j(M)}`}function j(B){return B instanceof t.Name?B:(0,t._)`(${B})`}})(Vn)),Vn}var ge={},vl;function we(){if(vl)return ge;vl=1,Object.defineProperty(ge,"__esModule",{value:!0}),ge.checkStrictMode=ge.getErrorPath=ge.Type=ge.useFunc=ge.setEvaluated=ge.evaluatedPropsToName=ge.mergeEvaluated=ge.eachItem=ge.unescapeJsonPointer=ge.escapeJsonPointer=ge.escapeFragment=ge.unescapeFragment=ge.schemaRefOrVal=ge.schemaHasRulesButRef=ge.schemaHasRules=ge.checkUnknownRules=ge.alwaysValidSchema=ge.toHash=void 0;const e=_e(),t=Kr();function a(y){const T={};for(const A of y)T[A]=!0;return T}ge.toHash=a;function s(y,T){return typeof T=="boolean"?T:Object.keys(T).length===0?!0:(r(y,T),!n(T,y.self.RULES.all))}ge.alwaysValidSchema=s;function r(y,T=y.schema){const{opts:A,self:S}=y;if(!A.strictSchema||typeof T=="boolean")return;const x=S.RULES.keywords;for(const E in T)x[E]||w(y,`unknown keyword: "${E}"`)}ge.checkUnknownRules=r;function n(y,T){if(typeof y=="boolean")return!y;for(const A in y)if(T[A])return!0;return!1}ge.schemaHasRules=n;function o(y,T){if(typeof y=="boolean")return!y;for(const A in y)if(A!=="$ref"&&T.all[A])return!0;return!1}ge.schemaHasRulesButRef=o;function i({topSchemaRef:y,schemaPath:T},A,S,x){if(!x){if(typeof A=="number"||typeof A=="boolean")return A;if(typeof A=="string")return(0,e._)`${A}`}return(0,e._)`${y}${T}${(0,e.getProperty)(S)}`}ge.schemaRefOrVal=i;function l(y){return u(decodeURIComponent(y))}ge.unescapeFragment=l;function c(y){return encodeURIComponent(d(y))}ge.escapeFragment=c;function d(y){return typeof y=="number"?`${y}`:y.replace(/~/g,"~0").replace(/\//g,"~1")}ge.escapeJsonPointer=d;function u(y){return y.replace(/~1/g,"/").replace(/~0/g,"~")}ge.unescapeJsonPointer=u;function p(y,T){if(Array.isArray(y))for(const A of y)T(A);else T(y)}ge.eachItem=p;function f({mergeNames:y,mergeToName:T,mergeValues:A,resultToName:S}){return(x,E,$,C)=>{const R=$===void 0?E:$ instanceof e.Name?(E instanceof e.Name?y(x,E,$):T(x,E,$),$):E instanceof e.Name?(T(x,$,E),E):A(E,$);return C===e.Name&&!(R instanceof e.Name)?S(x,R):R}}ge.mergeEvaluated={props:f({mergeNames:(y,T,A)=>y.if((0,e._)`${A} !== true && ${T} !== undefined`,()=>{y.if((0,e._)`${T} === true`,()=>y.assign(A,!0),()=>y.assign(A,(0,e._)`${A} || {}`).code((0,e._)`Object.assign(${A}, ${T})`))}),mergeToName:(y,T,A)=>y.if((0,e._)`${A} !== true`,()=>{T===!0?y.assign(A,!0):(y.assign(A,(0,e._)`${A} || {}`),_(y,A,T))}),mergeValues:(y,T)=>y===!0?!0:{...y,...T},resultToName:g}),items:f({mergeNames:(y,T,A)=>y.if((0,e._)`${A} !== true && ${T} !== undefined`,()=>y.assign(A,(0,e._)`${T} === true ? true : ${A} > ${T} ? ${A} : ${T}`)),mergeToName:(y,T,A)=>y.if((0,e._)`${A} !== true`,()=>y.assign(A,T===!0?!0:(0,e._)`${A} > ${T} ? ${A} : ${T}`)),mergeValues:(y,T)=>y===!0?!0:Math.max(y,T),resultToName:(y,T)=>y.var("items",T)})};function g(y,T){if(T===!0)return y.var("props",!0);const A=y.var("props",(0,e._)`{}`);return T!==void 0&&_(y,A,T),A}ge.evaluatedPropsToName=g;function _(y,T,A){Object.keys(A).forEach(S=>y.assign((0,e._)`${T}${(0,e.getProperty)(S)}`,!0))}ge.setEvaluated=_;const v={};function m(y,T){return y.scopeValue("func",{ref:T,code:v[T.code]||(v[T.code]=new t._Code(T.code))})}ge.useFunc=m;var h;(function(y){y[y.Num=0]="Num",y[y.Str=1]="Str"})(h||(ge.Type=h={}));function b(y,T,A){if(y instanceof e.Name){const S=T===h.Num;return A?S?(0,e._)`"[" + ${y} + "]"`:(0,e._)`"['" + ${y} + "']"`:S?(0,e._)`"/" + ${y}`:(0,e._)`"/" + ${y}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return A?(0,e.getProperty)(y).toString():"/"+d(y)}ge.getErrorPath=b;function w(y,T,A=y.opts.strictSchema){if(A){if(T=`strict mode: ${T}`,A===!0)throw new Error(T);y.self.logger.warn(T)}}return ge.checkStrictMode=w,ge}var Hs={},yl;function _a(){if(yl)return Hs;yl=1,Object.defineProperty(Hs,"__esModule",{value:!0});const e=_e(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return Hs.default=t,Hs}var wl;function pn(){return wl||(wl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=_e(),a=we(),s=_a();e.keywordError={message:({keyword:v})=>(0,t.str)`must pass "${v}" keyword validation`},e.keyword$DataError={message:({keyword:v,schemaType:m})=>m?(0,t.str)`"${v}" keyword must be ${m} ($data)`:(0,t.str)`"${v}" keyword is invalid ($data)`};function r(v,m=e.keywordError,h,b){const{it:w}=v,{gen:y,compositeRule:T,allErrors:A}=w,S=u(v,m,h);b??(T||A)?l(y,S):c(w,(0,t._)`[${S}]`)}e.reportError=r;function n(v,m=e.keywordError,h){const{it:b}=v,{gen:w,compositeRule:y,allErrors:T}=b,A=u(v,m,h);l(w,A),y||T||c(b,s.default.vErrors)}e.reportExtraError=n;function o(v,m){v.assign(s.default.errors,m),v.if((0,t._)`${s.default.vErrors} !== null`,()=>v.if(m,()=>v.assign((0,t._)`${s.default.vErrors}.length`,m),()=>v.assign(s.default.vErrors,null)))}e.resetErrorsCount=o;function i({gen:v,keyword:m,schemaValue:h,data:b,errsCount:w,it:y}){if(w===void 0)throw new Error("ajv implementation error");const T=v.name("err");v.forRange("i",w,s.default.errors,A=>{v.const(T,(0,t._)`${s.default.vErrors}[${A}]`),v.if((0,t._)`${T}.instancePath === undefined`,()=>v.assign((0,t._)`${T}.instancePath`,(0,t.strConcat)(s.default.instancePath,y.errorPath))),v.assign((0,t._)`${T}.schemaPath`,(0,t.str)`${y.errSchemaPath}/${m}`),y.opts.verbose&&(v.assign((0,t._)`${T}.schema`,h),v.assign((0,t._)`${T}.data`,b))})}e.extendErrors=i;function l(v,m){const h=v.const("err",m);v.if((0,t._)`${s.default.vErrors} === null`,()=>v.assign(s.default.vErrors,(0,t._)`[${h}]`),(0,t._)`${s.default.vErrors}.push(${h})`),v.code((0,t._)`${s.default.errors}++`)}function c(v,m){const{gen:h,validateName:b,schemaEnv:w}=v;w.$async?h.throw((0,t._)`new ${v.ValidationError}(${m})`):(h.assign((0,t._)`${b}.errors`,m),h.return(!1))}const d={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function u(v,m,h){const{createErrors:b}=v.it;return b===!1?(0,t._)`{}`:p(v,m,h)}function p(v,m,h={}){const{gen:b,it:w}=v,y=[f(w,h),g(v,h)];return _(v,m,y),b.object(...y)}function f({errorPath:v},{instancePath:m}){const h=m?(0,t.str)`${v}${(0,a.getErrorPath)(m,a.Type.Str)}`:v;return[s.default.instancePath,(0,t.strConcat)(s.default.instancePath,h)]}function g({keyword:v,it:{errSchemaPath:m}},{schemaPath:h,parentSchema:b}){let w=b?m:(0,t.str)`${m}/${v}`;return h&&(w=(0,t.str)`${w}${(0,a.getErrorPath)(h,a.Type.Str)}`),[d.schemaPath,w]}function _(v,{params:m,message:h},b){const{keyword:w,data:y,schemaValue:T,it:A}=v,{opts:S,propertyName:x,topSchemaRef:E,schemaPath:$}=A;b.push([d.keyword,w],[d.params,typeof m=="function"?m(v):m||(0,t._)`{}`]),S.messages&&b.push([d.message,typeof h=="function"?h(v):h]),S.verbose&&b.push([d.schema,T],[d.parentSchema,(0,t._)`${E}${$}`],[s.default.data,y]),x&&b.push([d.propertyName,x])}})(Gn)),Gn}var xl;function P0(){if(xl)return Ta;xl=1,Object.defineProperty(Ta,"__esModule",{value:!0}),Ta.boolOrEmptySchema=Ta.topBoolOrEmptySchema=void 0;const e=pn(),t=_e(),a=_a(),s={message:"boolean schema is false"};function r(i){const{gen:l,schema:c,validateName:d}=i;c===!1?o(i,!1):typeof c=="object"&&c.$async===!0?l.return(a.default.data):(l.assign((0,t._)`${d}.errors`,null),l.return(!0))}Ta.topBoolOrEmptySchema=r;function n(i,l){const{gen:c,schema:d}=i;d===!1?(c.var(l,!1),o(i)):c.var(l,!0)}Ta.boolOrEmptySchema=n;function o(i,l){const{gen:c,data:d}=i,u={gen:c,keyword:"false schema",data:d,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:i};(0,e.reportError)(u,s,void 0,l)}return Ta}var ze={},Sa={},Tl;function Ou(){if(Tl)return Sa;Tl=1,Object.defineProperty(Sa,"__esModule",{value:!0}),Sa.getRules=Sa.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function a(r){return typeof r=="string"&&t.has(r)}Sa.isJSONType=a;function s(){const r={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...r,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},r.number,r.string,r.array,r.object],post:{rules:[]},all:{},keywords:{}}}return Sa.getRules=s,Sa}var jt={},Sl;function $u(){if(Sl)return jt;Sl=1,Object.defineProperty(jt,"__esModule",{value:!0}),jt.shouldUseRule=jt.shouldUseGroup=jt.schemaHasRulesForType=void 0;function e({schema:s,self:r},n){const o=r.RULES.types[n];return o&&o!==!0&&t(s,o)}jt.schemaHasRulesForType=e;function t(s,r){return r.rules.some(n=>a(s,n))}jt.shouldUseGroup=t;function a(s,r){var n;return s[r.keyword]!==void 0||((n=r.definition.implements)===null||n===void 0?void 0:n.some(o=>s[o]!==void 0))}return jt.shouldUseRule=a,jt}var El;function Yr(){if(El)return ze;El=1,Object.defineProperty(ze,"__esModule",{value:!0}),ze.reportTypeError=ze.checkDataTypes=ze.checkDataType=ze.coerceAndCheckDataType=ze.getJSONTypes=ze.getSchemaTypes=ze.DataType=void 0;const e=Ou(),t=$u(),a=pn(),s=_e(),r=we();var n;(function(h){h[h.Correct=0]="Correct",h[h.Wrong=1]="Wrong"})(n||(ze.DataType=n={}));function o(h){const b=i(h.type);if(b.includes("null")){if(h.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!b.length&&h.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');h.nullable===!0&&b.push("null")}return b}ze.getSchemaTypes=o;function i(h){const b=Array.isArray(h)?h:h?[h]:[];if(b.every(e.isJSONType))return b;throw new Error("type must be JSONType or JSONType[]: "+b.join(","))}ze.getJSONTypes=i;function l(h,b){const{gen:w,data:y,opts:T}=h,A=d(b,T.coerceTypes),S=b.length>0&&!(A.length===0&&b.length===1&&(0,t.schemaHasRulesForType)(h,b[0]));if(S){const x=g(b,y,T.strictNumbers,n.Wrong);w.if(x,()=>{A.length?u(h,b,A):v(h)})}return S}ze.coerceAndCheckDataType=l;const c=new Set(["string","number","integer","boolean","null"]);function d(h,b){return b?h.filter(w=>c.has(w)||b==="array"&&w==="array"):[]}function u(h,b,w){const{gen:y,data:T,opts:A}=h,S=y.let("dataType",(0,s._)`typeof ${T}`),x=y.let("coerced",(0,s._)`undefined`);A.coerceTypes==="array"&&y.if((0,s._)`${S} == 'object' && Array.isArray(${T}) && ${T}.length == 1`,()=>y.assign(T,(0,s._)`${T}[0]`).assign(S,(0,s._)`typeof ${T}`).if(g(b,T,A.strictNumbers),()=>y.assign(x,T))),y.if((0,s._)`${x} !== undefined`);for(const $ of w)(c.has($)||$==="array"&&A.coerceTypes==="array")&&E($);y.else(),v(h),y.endIf(),y.if((0,s._)`${x} !== undefined`,()=>{y.assign(T,x),p(h,x)});function E($){switch($){case"string":y.elseIf((0,s._)`${S} == "number" || ${S} == "boolean"`).assign(x,(0,s._)`"" + ${T}`).elseIf((0,s._)`${T} === null`).assign(x,(0,s._)`""`);return;case"number":y.elseIf((0,s._)`${S} == "boolean" || ${T} === null
              || (${S} == "string" && ${T} && ${T} == +${T})`).assign(x,(0,s._)`+${T}`);return;case"integer":y.elseIf((0,s._)`${S} === "boolean" || ${T} === null
              || (${S} === "string" && ${T} && ${T} == +${T} && !(${T} % 1))`).assign(x,(0,s._)`+${T}`);return;case"boolean":y.elseIf((0,s._)`${T} === "false" || ${T} === 0 || ${T} === null`).assign(x,!1).elseIf((0,s._)`${T} === "true" || ${T} === 1`).assign(x,!0);return;case"null":y.elseIf((0,s._)`${T} === "" || ${T} === 0 || ${T} === false`),y.assign(x,null);return;case"array":y.elseIf((0,s._)`${S} === "string" || ${S} === "number"
              || ${S} === "boolean" || ${T} === null`).assign(x,(0,s._)`[${T}]`)}}}function p({gen:h,parentData:b,parentDataProperty:w},y){h.if((0,s._)`${b} !== undefined`,()=>h.assign((0,s._)`${b}[${w}]`,y))}function f(h,b,w,y=n.Correct){const T=y===n.Correct?s.operators.EQ:s.operators.NEQ;let A;switch(h){case"null":return(0,s._)`${b} ${T} null`;case"array":A=(0,s._)`Array.isArray(${b})`;break;case"object":A=(0,s._)`${b} && typeof ${b} == "object" && !Array.isArray(${b})`;break;case"integer":A=S((0,s._)`!(${b} % 1) && !isNaN(${b})`);break;case"number":A=S();break;default:return(0,s._)`typeof ${b} ${T} ${h}`}return y===n.Correct?A:(0,s.not)(A);function S(x=s.nil){return(0,s.and)((0,s._)`typeof ${b} == "number"`,x,w?(0,s._)`isFinite(${b})`:s.nil)}}ze.checkDataType=f;function g(h,b,w,y){if(h.length===1)return f(h[0],b,w,y);let T;const A=(0,r.toHash)(h);if(A.array&&A.object){const S=(0,s._)`typeof ${b} != "object"`;T=A.null?S:(0,s._)`!${b} || ${S}`,delete A.null,delete A.array,delete A.object}else T=s.nil;A.number&&delete A.integer;for(const S in A)T=(0,s.and)(T,f(S,b,w,y));return T}ze.checkDataTypes=g;const _={message:({schema:h})=>`must be ${h}`,params:({schema:h,schemaValue:b})=>typeof h=="string"?(0,s._)`{type: ${h}}`:(0,s._)`{type: ${b}}`};function v(h){const b=m(h);(0,a.reportError)(b,_)}ze.reportTypeError=v;function m(h){const{gen:b,data:w,schema:y}=h,T=(0,r.schemaRefOrVal)(h,y,"type");return{gen:b,keyword:"type",data:w,schema:y.type,schemaCode:T,schemaValue:T,parentSchema:y,params:{},it:h}}return ze}var ts={},kl;function C0(){if(kl)return ts;kl=1,Object.defineProperty(ts,"__esModule",{value:!0}),ts.assignDefaults=void 0;const e=_e(),t=we();function a(r,n){const{properties:o,items:i}=r.schema;if(n==="object"&&o)for(const l in o)s(r,l,o[l].default);else n==="array"&&Array.isArray(i)&&i.forEach((l,c)=>s(r,c,l.default))}ts.assignDefaults=a;function s(r,n,o){const{gen:i,compositeRule:l,data:c,opts:d}=r;if(o===void 0)return;const u=(0,e._)`${c}${(0,e.getProperty)(n)}`;if(l){(0,t.checkStrictMode)(r,`default is ignored for: ${u}`);return}let p=(0,e._)`${u} === undefined`;d.useDefaults==="empty"&&(p=(0,e._)`${p} || ${u} === null || ${u} === ""`),i.if(p,(0,e._)`${u} = ${(0,e.stringify)(o)}`)}return ts}var bt={},Se={},Al;function Tt(){if(Al)return Se;Al=1,Object.defineProperty(Se,"__esModule",{value:!0}),Se.validateUnion=Se.validateArray=Se.usePattern=Se.callValidateCode=Se.schemaProperties=Se.allSchemaProperties=Se.noPropertyInData=Se.propertyInData=Se.isOwnProperty=Se.hasPropFunc=Se.reportMissingProp=Se.checkMissingProp=Se.checkReportMissingProp=void 0;const e=_e(),t=we(),a=_a(),s=we();function r(h,b){const{gen:w,data:y,it:T}=h;w.if(d(w,y,b,T.opts.ownProperties),()=>{h.setParams({missingProperty:(0,e._)`${b}`},!0),h.error()})}Se.checkReportMissingProp=r;function n({gen:h,data:b,it:{opts:w}},y,T){return(0,e.or)(...y.map(A=>(0,e.and)(d(h,b,A,w.ownProperties),(0,e._)`${T} = ${A}`)))}Se.checkMissingProp=n;function o(h,b){h.setParams({missingProperty:b},!0),h.error()}Se.reportMissingProp=o;function i(h){return h.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}Se.hasPropFunc=i;function l(h,b,w){return(0,e._)`${i(h)}.call(${b}, ${w})`}Se.isOwnProperty=l;function c(h,b,w,y){const T=(0,e._)`${b}${(0,e.getProperty)(w)} !== undefined`;return y?(0,e._)`${T} && ${l(h,b,w)}`:T}Se.propertyInData=c;function d(h,b,w,y){const T=(0,e._)`${b}${(0,e.getProperty)(w)} === undefined`;return y?(0,e.or)(T,(0,e.not)(l(h,b,w))):T}Se.noPropertyInData=d;function u(h){return h?Object.keys(h).filter(b=>b!=="__proto__"):[]}Se.allSchemaProperties=u;function p(h,b){return u(b).filter(w=>!(0,t.alwaysValidSchema)(h,b[w]))}Se.schemaProperties=p;function f({schemaCode:h,data:b,it:{gen:w,topSchemaRef:y,schemaPath:T,errorPath:A},it:S},x,E,$){const C=$?(0,e._)`${h}, ${b}, ${y}${T}`:b,R=[[a.default.instancePath,(0,e.strConcat)(a.default.instancePath,A)],[a.default.parentData,S.parentData],[a.default.parentDataProperty,S.parentDataProperty],[a.default.rootData,a.default.rootData]];S.opts.dynamicRef&&R.push([a.default.dynamicAnchors,a.default.dynamicAnchors]);const U=(0,e._)`${C}, ${w.object(...R)}`;return E!==e.nil?(0,e._)`${x}.call(${E}, ${U})`:(0,e._)`${x}(${U})`}Se.callValidateCode=f;const g=(0,e._)`new RegExp`;function _({gen:h,it:{opts:b}},w){const y=b.unicodeRegExp?"u":"",{regExp:T}=b.code,A=T(w,y);return h.scopeValue("pattern",{key:A.toString(),ref:A,code:(0,e._)`${T.code==="new RegExp"?g:(0,s.useFunc)(h,T)}(${w}, ${y})`})}Se.usePattern=_;function v(h){const{gen:b,data:w,keyword:y,it:T}=h,A=b.name("valid");if(T.allErrors){const x=b.let("valid",!0);return S(()=>b.assign(x,!1)),x}return b.var(A,!0),S(()=>b.break()),A;function S(x){const E=b.const("len",(0,e._)`${w}.length`);b.forRange("i",0,E,$=>{h.subschema({keyword:y,dataProp:$,dataPropType:t.Type.Num},A),b.if((0,e.not)(A),x)})}}Se.validateArray=v;function m(h){const{gen:b,schema:w,keyword:y,it:T}=h;if(!Array.isArray(w))throw new Error("ajv implementation error");if(w.some(E=>(0,t.alwaysValidSchema)(T,E))&&!T.opts.unevaluated)return;const S=b.let("valid",!1),x=b.name("_valid");b.block(()=>w.forEach((E,$)=>{const C=h.subschema({keyword:y,schemaProp:$,compositeRule:!0},x);b.assign(S,(0,e._)`${S} || ${x}`),h.mergeValidEvaluated(C,x)||b.if((0,e.not)(S))})),h.result(S,()=>h.reset(),()=>h.error(!0))}return Se.validateUnion=m,Se}var Pl;function O0(){if(Pl)return bt;Pl=1,Object.defineProperty(bt,"__esModule",{value:!0}),bt.validateKeywordUsage=bt.validSchemaType=bt.funcKeywordCode=bt.macroKeywordCode=void 0;const e=_e(),t=_a(),a=Tt(),s=pn();function r(p,f){const{gen:g,keyword:_,schema:v,parentSchema:m,it:h}=p,b=f.macro.call(h.self,v,m,h),w=c(g,_,b);h.opts.validateSchema!==!1&&h.self.validateSchema(b,!0);const y=g.name("valid");p.subschema({schema:b,schemaPath:e.nil,errSchemaPath:`${h.errSchemaPath}/${_}`,topSchemaRef:w,compositeRule:!0},y),p.pass(y,()=>p.error(!0))}bt.macroKeywordCode=r;function n(p,f){var g;const{gen:_,keyword:v,schema:m,parentSchema:h,$data:b,it:w}=p;l(w,f);const y=!b&&f.compile?f.compile.call(w.self,m,h,w):f.validate,T=c(_,v,y),A=_.let("valid");p.block$data(A,S),p.ok((g=f.valid)!==null&&g!==void 0?g:A);function S(){if(f.errors===!1)$(),f.modifying&&o(p),C(()=>p.error());else{const R=f.async?x():E();f.modifying&&o(p),C(()=>i(p,R))}}function x(){const R=_.let("ruleErrs",null);return _.try(()=>$((0,e._)`await `),U=>_.assign(A,!1).if((0,e._)`${U} instanceof ${w.ValidationError}`,()=>_.assign(R,(0,e._)`${U}.errors`),()=>_.throw(U))),R}function E(){const R=(0,e._)`${T}.errors`;return _.assign(R,null),$(e.nil),R}function $(R=f.async?(0,e._)`await `:e.nil){const U=w.opts.passContext?t.default.this:t.default.self,W=!("compile"in f&&!b||f.schema===!1);_.assign(A,(0,e._)`${R}${(0,a.callValidateCode)(p,T,U,W)}`,f.modifying)}function C(R){var U;_.if((0,e.not)((U=f.valid)!==null&&U!==void 0?U:A),R)}}bt.funcKeywordCode=n;function o(p){const{gen:f,data:g,it:_}=p;f.if(_.parentData,()=>f.assign(g,(0,e._)`${_.parentData}[${_.parentDataProperty}]`))}function i(p,f){const{gen:g}=p;g.if((0,e._)`Array.isArray(${f})`,()=>{g.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,s.extendErrors)(p)},()=>p.error())}function l({schemaEnv:p},f){if(f.async&&!p.$async)throw new Error("async keyword in sync schema")}function c(p,f,g){if(g===void 0)throw new Error(`keyword "${f}" failed to compile`);return p.scopeValue("keyword",typeof g=="function"?{ref:g}:{ref:g,code:(0,e.stringify)(g)})}function d(p,f,g=!1){return!f.length||f.some(_=>_==="array"?Array.isArray(p):_==="object"?p&&typeof p=="object"&&!Array.isArray(p):typeof p==_||g&&typeof p>"u")}bt.validSchemaType=d;function u({schema:p,opts:f,self:g,errSchemaPath:_},v,m){if(Array.isArray(v.keyword)?!v.keyword.includes(m):v.keyword!==m)throw new Error("ajv implementation error");const h=v.dependencies;if(h?.some(b=>!Object.prototype.hasOwnProperty.call(p,b)))throw new Error(`parent schema must have dependencies of ${m}: ${h.join(",")}`);if(v.validateSchema&&!v.validateSchema(p[m])){const w=`keyword "${m}" value is invalid at path "${_}": `+g.errorsText(v.validateSchema.errors);if(f.validateSchema==="log")g.logger.error(w);else throw new Error(w)}}return bt.validateKeywordUsage=u,bt}var Ut={},Cl;function $0(){if(Cl)return Ut;Cl=1,Object.defineProperty(Ut,"__esModule",{value:!0}),Ut.extendSubschemaMode=Ut.extendSubschemaData=Ut.getSubschema=void 0;const e=_e(),t=we();function a(n,{keyword:o,schemaProp:i,schema:l,schemaPath:c,errSchemaPath:d,topSchemaRef:u}){if(o!==void 0&&l!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(o!==void 0){const p=n.schema[o];return i===void 0?{schema:p,schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}`,errSchemaPath:`${n.errSchemaPath}/${o}`}:{schema:p[i],schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}${(0,e.getProperty)(i)}`,errSchemaPath:`${n.errSchemaPath}/${o}/${(0,t.escapeFragment)(i)}`}}if(l!==void 0){if(c===void 0||d===void 0||u===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:l,schemaPath:c,topSchemaRef:u,errSchemaPath:d}}throw new Error('either "keyword" or "schema" must be passed')}Ut.getSubschema=a;function s(n,o,{dataProp:i,dataPropType:l,data:c,dataTypes:d,propertyName:u}){if(c!==void 0&&i!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:p}=o;if(i!==void 0){const{errorPath:g,dataPathArr:_,opts:v}=o,m=p.let("data",(0,e._)`${o.data}${(0,e.getProperty)(i)}`,!0);f(m),n.errorPath=(0,e.str)`${g}${(0,t.getErrorPath)(i,l,v.jsPropertySyntax)}`,n.parentDataProperty=(0,e._)`${i}`,n.dataPathArr=[..._,n.parentDataProperty]}if(c!==void 0){const g=c instanceof e.Name?c:p.let("data",c,!0);f(g),u!==void 0&&(n.propertyName=u)}d&&(n.dataTypes=d);function f(g){n.data=g,n.dataLevel=o.dataLevel+1,n.dataTypes=[],o.definedProperties=new Set,n.parentData=o.data,n.dataNames=[...o.dataNames,g]}}Ut.extendSubschemaData=s;function r(n,{jtdDiscriminator:o,jtdMetadata:i,compositeRule:l,createErrors:c,allErrors:d}){l!==void 0&&(n.compositeRule=l),c!==void 0&&(n.createErrors=c),d!==void 0&&(n.allErrors=d),n.jtdDiscriminator=o,n.jtdMetadata=i}return Ut.extendSubschemaMode=r,Ut}var Ye={},Wn,Ol;function Mu(){return Ol||(Ol=1,Wn=function e(t,a){if(t===a)return!0;if(t&&a&&typeof t=="object"&&typeof a=="object"){if(t.constructor!==a.constructor)return!1;var s,r,n;if(Array.isArray(t)){if(s=t.length,s!=a.length)return!1;for(r=s;r--!==0;)if(!e(t[r],a[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if(n=Object.keys(t),s=n.length,s!==Object.keys(a).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(a,n[r]))return!1;for(r=s;r--!==0;){var o=n[r];if(!e(t[o],a[o]))return!1}return!0}return t!==t&&a!==a}),Wn}var Jn={exports:{}},$l;function M0(){if($l)return Jn.exports;$l=1;var e=Jn.exports=function(s,r,n){typeof r=="function"&&(n=r,r={}),n=r.cb||n;var o=typeof n=="function"?n:n.pre||function(){},i=n.post||function(){};t(r,o,i,s,"",s)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(s,r,n,o,i,l,c,d,u,p){if(o&&typeof o=="object"&&!Array.isArray(o)){r(o,i,l,c,d,u,p);for(var f in o){var g=o[f];if(Array.isArray(g)){if(f in e.arrayKeywords)for(var _=0;_<g.length;_++)t(s,r,n,g[_],i+"/"+f+"/"+_,l,i,f,o,_)}else if(f in e.propsKeywords){if(g&&typeof g=="object")for(var v in g)t(s,r,n,g[v],i+"/"+f+"/"+a(v),l,i,f,o,v)}else(f in e.keywords||s.allKeys&&!(f in e.skipKeywords))&&t(s,r,n,g,i+"/"+f,l,i,f,o)}n(o,i,l,c,d,u,p)}}function a(s){return s.replace(/~/g,"~0").replace(/\//g,"~1")}return Jn.exports}var Ml;function fn(){if(Ml)return Ye;Ml=1,Object.defineProperty(Ye,"__esModule",{value:!0}),Ye.getSchemaRefs=Ye.resolveUrl=Ye.normalizeId=Ye._getFullPath=Ye.getFullPath=Ye.inlineRef=void 0;const e=we(),t=Mu(),a=M0(),s=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function r(_,v=!0){return typeof _=="boolean"?!0:v===!0?!o(_):v?i(_)<=v:!1}Ye.inlineRef=r;const n=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function o(_){for(const v in _){if(n.has(v))return!0;const m=_[v];if(Array.isArray(m)&&m.some(o)||typeof m=="object"&&o(m))return!0}return!1}function i(_){let v=0;for(const m in _){if(m==="$ref")return 1/0;if(v++,!s.has(m)&&(typeof _[m]=="object"&&(0,e.eachItem)(_[m],h=>v+=i(h)),v===1/0))return 1/0}return v}function l(_,v="",m){m!==!1&&(v=u(v));const h=_.parse(v);return c(_,h)}Ye.getFullPath=l;function c(_,v){return _.serialize(v).split("#")[0]+"#"}Ye._getFullPath=c;const d=/#\/?$/;function u(_){return _?_.replace(d,""):""}Ye.normalizeId=u;function p(_,v,m){return m=u(m),_.resolve(v,m)}Ye.resolveUrl=p;const f=/^[a-z_][-a-z0-9._]*$/i;function g(_,v){if(typeof _=="boolean")return{};const{schemaId:m,uriResolver:h}=this.opts,b=u(_[m]||v),w={"":b},y=l(h,b,!1),T={},A=new Set;return a(_,{allKeys:!0},(E,$,C,R)=>{if(R===void 0)return;const U=y+$;let W=w[R];typeof E[m]=="string"&&(W=ae.call(this,E[m])),Y.call(this,E.$anchor),Y.call(this,E.$dynamicAnchor),w[$]=W;function ae(V){const X=this.opts.uriResolver.resolve;if(V=u(W?X(W,V):V),A.has(V))throw x(V);A.add(V);let H=this.refs[V];return typeof H=="string"&&(H=this.refs[H]),typeof H=="object"?S(E,H.schema,V):V!==u(U)&&(V[0]==="#"?(S(E,T[V],V),T[V]=E):this.refs[V]=U),V}function Y(V){if(typeof V=="string"){if(!f.test(V))throw new Error(`invalid anchor "${V}"`);ae.call(this,`#${V}`)}}}),T;function S(E,$,C){if($!==void 0&&!t(E,$))throw x(C)}function x(E){return new Error(`reference "${E}" resolves to more than one schema`)}}return Ye.getSchemaRefs=g,Ye}var Rl;function hn(){if(Rl)return Ht;Rl=1,Object.defineProperty(Ht,"__esModule",{value:!0}),Ht.getData=Ht.KeywordCxt=Ht.validateFunctionCode=void 0;const e=P0(),t=Yr(),a=$u(),s=Yr(),r=C0(),n=O0(),o=$0(),i=_e(),l=_a(),c=fn(),d=we(),u=pn();function p(N){if(y(N)&&(A(N),w(N))){v(N);return}f(N,()=>(0,e.topBoolOrEmptySchema)(N))}Ht.validateFunctionCode=p;function f({gen:N,validateName:k,schema:O,schemaEnv:L,opts:q},ee){q.code.es5?N.func(k,(0,i._)`${l.default.data}, ${l.default.valCxt}`,L.$async,()=>{N.code((0,i._)`"use strict"; ${h(O,q)}`),_(N,q),N.code(ee)}):N.func(k,(0,i._)`${l.default.data}, ${g(q)}`,L.$async,()=>N.code(h(O,q)).code(ee))}function g(N){return(0,i._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${N.dynamicRef?(0,i._)`, ${l.default.dynamicAnchors}={}`:i.nil}}={}`}function _(N,k){N.if(l.default.valCxt,()=>{N.var(l.default.instancePath,(0,i._)`${l.default.valCxt}.${l.default.instancePath}`),N.var(l.default.parentData,(0,i._)`${l.default.valCxt}.${l.default.parentData}`),N.var(l.default.parentDataProperty,(0,i._)`${l.default.valCxt}.${l.default.parentDataProperty}`),N.var(l.default.rootData,(0,i._)`${l.default.valCxt}.${l.default.rootData}`),k.dynamicRef&&N.var(l.default.dynamicAnchors,(0,i._)`${l.default.valCxt}.${l.default.dynamicAnchors}`)},()=>{N.var(l.default.instancePath,(0,i._)`""`),N.var(l.default.parentData,(0,i._)`undefined`),N.var(l.default.parentDataProperty,(0,i._)`undefined`),N.var(l.default.rootData,l.default.data),k.dynamicRef&&N.var(l.default.dynamicAnchors,(0,i._)`{}`)})}function v(N){const{schema:k,opts:O,gen:L}=N;f(N,()=>{O.$comment&&k.$comment&&R(N),E(N),L.let(l.default.vErrors,null),L.let(l.default.errors,0),O.unevaluated&&m(N),S(N),U(N)})}function m(N){const{gen:k,validateName:O}=N;N.evaluated=k.const("evaluated",(0,i._)`${O}.evaluated`),k.if((0,i._)`${N.evaluated}.dynamicProps`,()=>k.assign((0,i._)`${N.evaluated}.props`,(0,i._)`undefined`)),k.if((0,i._)`${N.evaluated}.dynamicItems`,()=>k.assign((0,i._)`${N.evaluated}.items`,(0,i._)`undefined`))}function h(N,k){const O=typeof N=="object"&&N[k.schemaId];return O&&(k.code.source||k.code.process)?(0,i._)`/*# sourceURL=${O} */`:i.nil}function b(N,k){if(y(N)&&(A(N),w(N))){T(N,k);return}(0,e.boolOrEmptySchema)(N,k)}function w({schema:N,self:k}){if(typeof N=="boolean")return!N;for(const O in N)if(k.RULES.all[O])return!0;return!1}function y(N){return typeof N.schema!="boolean"}function T(N,k){const{schema:O,gen:L,opts:q}=N;q.$comment&&O.$comment&&R(N),$(N),C(N);const ee=L.const("_errs",l.default.errors);S(N,ee),L.var(k,(0,i._)`${ee} === ${l.default.errors}`)}function A(N){(0,d.checkUnknownRules)(N),x(N)}function S(N,k){if(N.opts.jtd)return ae(N,[],!1,k);const O=(0,t.getSchemaTypes)(N.schema),L=(0,t.coerceAndCheckDataType)(N,O);ae(N,O,!L,k)}function x(N){const{schema:k,errSchemaPath:O,opts:L,self:q}=N;k.$ref&&L.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(k,q.RULES)&&q.logger.warn(`$ref: keywords ignored in schema at path "${O}"`)}function E(N){const{schema:k,opts:O}=N;k.default!==void 0&&O.useDefaults&&O.strictSchema&&(0,d.checkStrictMode)(N,"default is ignored in the schema root")}function $(N){const k=N.schema[N.opts.schemaId];k&&(N.baseId=(0,c.resolveUrl)(N.opts.uriResolver,N.baseId,k))}function C(N){if(N.schema.$async&&!N.schemaEnv.$async)throw new Error("async schema in sync schema")}function R({gen:N,schemaEnv:k,schema:O,errSchemaPath:L,opts:q}){const ee=O.$comment;if(q.$comment===!0)N.code((0,i._)`${l.default.self}.logger.log(${ee})`);else if(typeof q.$comment=="function"){const te=(0,i.str)`${L}/$comment`,le=N.scopeValue("root",{ref:k.root});N.code((0,i._)`${l.default.self}.opts.$comment(${ee}, ${te}, ${le}.schema)`)}}function U(N){const{gen:k,schemaEnv:O,validateName:L,ValidationError:q,opts:ee}=N;O.$async?k.if((0,i._)`${l.default.errors} === 0`,()=>k.return(l.default.data),()=>k.throw((0,i._)`new ${q}(${l.default.vErrors})`)):(k.assign((0,i._)`${L}.errors`,l.default.vErrors),ee.unevaluated&&W(N),k.return((0,i._)`${l.default.errors} === 0`))}function W({gen:N,evaluated:k,props:O,items:L}){O instanceof i.Name&&N.assign((0,i._)`${k}.props`,O),L instanceof i.Name&&N.assign((0,i._)`${k}.items`,L)}function ae(N,k,O,L){const{gen:q,schema:ee,data:te,allErrors:le,opts:ne,self:re}=N,{RULES:K}=re;if(ee.$ref&&(ne.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(ee,K))){q.block(()=>z(N,"$ref",K.all.$ref.definition));return}ne.jtd||V(N,k),q.block(()=>{for(const se of K.rules)oe(se);oe(K.post)});function oe(se){(0,a.shouldUseGroup)(ee,se)&&(se.type?(q.if((0,s.checkDataType)(se.type,te,ne.strictNumbers)),Y(N,se),k.length===1&&k[0]===se.type&&O&&(q.else(),(0,s.reportTypeError)(N)),q.endIf()):Y(N,se),le||q.if((0,i._)`${l.default.errors} === ${L||0}`))}}function Y(N,k){const{gen:O,schema:L,opts:{useDefaults:q}}=N;q&&(0,r.assignDefaults)(N,k.type),O.block(()=>{for(const ee of k.rules)(0,a.shouldUseRule)(L,ee)&&z(N,ee.keyword,ee.definition,k.type)})}function V(N,k){N.schemaEnv.meta||!N.opts.strictTypes||(X(N,k),N.opts.allowUnionTypes||H(N,k),D(N,N.dataTypes))}function X(N,k){if(k.length){if(!N.dataTypes.length){N.dataTypes=k;return}k.forEach(O=>{B(N.dataTypes,O)||M(N,`type "${O}" not allowed by context "${N.dataTypes.join(",")}"`)}),P(N,k)}}function H(N,k){k.length>1&&!(k.length===2&&k.includes("null"))&&M(N,"use allowUnionTypes to allow union type keyword")}function D(N,k){const O=N.self.RULES.all;for(const L in O){const q=O[L];if(typeof q=="object"&&(0,a.shouldUseRule)(N.schema,q)){const{type:ee}=q.definition;ee.length&&!ee.some(te=>j(k,te))&&M(N,`missing type "${ee.join(",")}" for keyword "${L}"`)}}}function j(N,k){return N.includes(k)||k==="number"&&N.includes("integer")}function B(N,k){return N.includes(k)||k==="integer"&&N.includes("number")}function P(N,k){const O=[];for(const L of N.dataTypes)B(k,L)?O.push(L):k.includes("integer")&&L==="number"&&O.push("integer");N.dataTypes=O}function M(N,k){const O=N.schemaEnv.baseId+N.errSchemaPath;k+=` at "${O}" (strictTypes)`,(0,d.checkStrictMode)(N,k,N.opts.strictTypes)}class F{constructor(k,O,L){if((0,n.validateKeywordUsage)(k,O,L),this.gen=k.gen,this.allErrors=k.allErrors,this.keyword=L,this.data=k.data,this.schema=k.schema[L],this.$data=O.$data&&k.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(k,this.schema,L,this.$data),this.schemaType=O.schemaType,this.parentSchema=k.schema,this.params={},this.it=k,this.def=O,this.$data)this.schemaCode=k.gen.const("vSchema",Z(this.$data,k));else if(this.schemaCode=this.schemaValue,!(0,n.validSchemaType)(this.schema,O.schemaType,O.allowUndefined))throw new Error(`${L} value must be ${JSON.stringify(O.schemaType)}`);("code"in O?O.trackErrors:O.errors!==!1)&&(this.errsCount=k.gen.const("_errs",l.default.errors))}result(k,O,L){this.failResult((0,i.not)(k),O,L)}failResult(k,O,L){this.gen.if(k),L?L():this.error(),O?(this.gen.else(),O(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(k,O){this.failResult((0,i.not)(k),void 0,O)}fail(k){if(k===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(k),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(k){if(!this.$data)return this.fail(k);const{schemaCode:O}=this;this.fail((0,i._)`${O} !== undefined && (${(0,i.or)(this.invalid$data(),k)})`)}error(k,O,L){if(O){this.setParams(O),this._error(k,L),this.setParams({});return}this._error(k,L)}_error(k,O){(k?u.reportExtraError:u.reportError)(this,this.def.error,O)}$dataError(){(0,u.reportError)(this,this.def.$dataError||u.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,u.resetErrorsCount)(this.gen,this.errsCount)}ok(k){this.allErrors||this.gen.if(k)}setParams(k,O){O?Object.assign(this.params,k):this.params=k}block$data(k,O,L=i.nil){this.gen.block(()=>{this.check$data(k,L),O()})}check$data(k=i.nil,O=i.nil){if(!this.$data)return;const{gen:L,schemaCode:q,schemaType:ee,def:te}=this;L.if((0,i.or)((0,i._)`${q} === undefined`,O)),k!==i.nil&&L.assign(k,!0),(ee.length||te.validateSchema)&&(L.elseIf(this.invalid$data()),this.$dataError(),k!==i.nil&&L.assign(k,!1)),L.else()}invalid$data(){const{gen:k,schemaCode:O,schemaType:L,def:q,it:ee}=this;return(0,i.or)(te(),le());function te(){if(L.length){if(!(O instanceof i.Name))throw new Error("ajv implementation error");const ne=Array.isArray(L)?L:[L];return(0,i._)`${(0,s.checkDataTypes)(ne,O,ee.opts.strictNumbers,s.DataType.Wrong)}`}return i.nil}function le(){if(q.validateSchema){const ne=k.scopeValue("validate$data",{ref:q.validateSchema});return(0,i._)`!${ne}(${O})`}return i.nil}}subschema(k,O){const L=(0,o.getSubschema)(this.it,k);(0,o.extendSubschemaData)(L,this.it,k),(0,o.extendSubschemaMode)(L,k);const q={...this.it,...L,items:void 0,props:void 0};return b(q,O),q}mergeEvaluated(k,O){const{it:L,gen:q}=this;L.opts.unevaluated&&(L.props!==!0&&k.props!==void 0&&(L.props=d.mergeEvaluated.props(q,k.props,L.props,O)),L.items!==!0&&k.items!==void 0&&(L.items=d.mergeEvaluated.items(q,k.items,L.items,O)))}mergeValidEvaluated(k,O){const{it:L,gen:q}=this;if(L.opts.unevaluated&&(L.props!==!0||L.items!==!0))return q.if(O,()=>this.mergeEvaluated(k,i.Name)),!0}}Ht.KeywordCxt=F;function z(N,k,O,L){const q=new F(N,O,k);"code"in O?O.code(q,L):q.$data&&O.validate?(0,n.funcKeywordCode)(q,O):"macro"in O?(0,n.macroKeywordCode)(q,O):(O.compile||O.validate)&&(0,n.funcKeywordCode)(q,O)}const I=/^\/(?:[^~]|~0|~1)*$/,J=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function Z(N,{dataLevel:k,dataNames:O,dataPathArr:L}){let q,ee;if(N==="")return l.default.rootData;if(N[0]==="/"){if(!I.test(N))throw new Error(`Invalid JSON-pointer: ${N}`);q=N,ee=l.default.rootData}else{const re=J.exec(N);if(!re)throw new Error(`Invalid JSON-pointer: ${N}`);const K=+re[1];if(q=re[2],q==="#"){if(K>=k)throw new Error(ne("property/index",K));return L[k-K]}if(K>k)throw new Error(ne("data",K));if(ee=O[k-K],!q)return ee}let te=ee;const le=q.split("/");for(const re of le)re&&(ee=(0,i._)`${ee}${(0,i.getProperty)((0,d.unescapeJsonPointer)(re))}`,te=(0,i._)`${te} && ${ee}`);return te;function ne(re,K){return`Cannot access ${re} ${K} levels up, current level is ${k}`}}return Ht.getData=Z,Ht}var js={},Ll;function Yo(){if(Ll)return js;Ll=1,Object.defineProperty(js,"__esModule",{value:!0});class e extends Error{constructor(a){super("validation failed"),this.errors=a,this.ajv=this.validation=!0}}return js.default=e,js}var Us={},Dl;function mn(){if(Dl)return Us;Dl=1,Object.defineProperty(Us,"__esModule",{value:!0});const e=fn();class t extends Error{constructor(s,r,n,o){super(o||`can't resolve reference ${n} from id ${r}`),this.missingRef=(0,e.resolveUrl)(s,r,n),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(s,this.missingRef))}}return Us.default=t,Us}var rt={},Nl;function Wo(){if(Nl)return rt;Nl=1,Object.defineProperty(rt,"__esModule",{value:!0}),rt.resolveSchema=rt.getCompilingSchema=rt.resolveRef=rt.compileSchema=rt.SchemaEnv=void 0;const e=_e(),t=Yo(),a=_a(),s=fn(),r=we(),n=hn();class o{constructor(m){var h;this.refs={},this.dynamicAnchors={};let b;typeof m.schema=="object"&&(b=m.schema),this.schema=m.schema,this.schemaId=m.schemaId,this.root=m.root||this,this.baseId=(h=m.baseId)!==null&&h!==void 0?h:(0,s.normalizeId)(b?.[m.schemaId||"$id"]),this.schemaPath=m.schemaPath,this.localRefs=m.localRefs,this.meta=m.meta,this.$async=b?.$async,this.refs={}}}rt.SchemaEnv=o;function i(v){const m=d.call(this,v);if(m)return m;const h=(0,s.getFullPath)(this.opts.uriResolver,v.root.baseId),{es5:b,lines:w}=this.opts.code,{ownProperties:y}=this.opts,T=new e.CodeGen(this.scope,{es5:b,lines:w,ownProperties:y});let A;v.$async&&(A=T.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const S=T.scopeName("validate");v.validateName=S;const x={gen:T,allErrors:this.opts.allErrors,data:a.default.data,parentData:a.default.parentData,parentDataProperty:a.default.parentDataProperty,dataNames:[a.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:T.scopeValue("schema",this.opts.code.source===!0?{ref:v.schema,code:(0,e.stringify)(v.schema)}:{ref:v.schema}),validateName:S,ValidationError:A,schema:v.schema,schemaEnv:v,rootId:h,baseId:v.baseId||h,schemaPath:e.nil,errSchemaPath:v.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let E;try{this._compilations.add(v),(0,n.validateFunctionCode)(x),T.optimize(this.opts.code.optimize);const $=T.toString();E=`${T.scopeRefs(a.default.scope)}return ${$}`,this.opts.code.process&&(E=this.opts.code.process(E,v));const R=new Function(`${a.default.self}`,`${a.default.scope}`,E)(this,this.scope.get());if(this.scope.value(S,{ref:R}),R.errors=null,R.schema=v.schema,R.schemaEnv=v,v.$async&&(R.$async=!0),this.opts.code.source===!0&&(R.source={validateName:S,validateCode:$,scopeValues:T._values}),this.opts.unevaluated){const{props:U,items:W}=x;R.evaluated={props:U instanceof e.Name?void 0:U,items:W instanceof e.Name?void 0:W,dynamicProps:U instanceof e.Name,dynamicItems:W instanceof e.Name},R.source&&(R.source.evaluated=(0,e.stringify)(R.evaluated))}return v.validate=R,v}catch($){throw delete v.validate,delete v.validateName,E&&this.logger.error("Error compiling schema, function code:",E),$}finally{this._compilations.delete(v)}}rt.compileSchema=i;function l(v,m,h){var b;h=(0,s.resolveUrl)(this.opts.uriResolver,m,h);const w=v.refs[h];if(w)return w;let y=p.call(this,v,h);if(y===void 0){const T=(b=v.localRefs)===null||b===void 0?void 0:b[h],{schemaId:A}=this.opts;T&&(y=new o({schema:T,schemaId:A,root:v,baseId:m}))}if(y!==void 0)return v.refs[h]=c.call(this,y)}rt.resolveRef=l;function c(v){return(0,s.inlineRef)(v.schema,this.opts.inlineRefs)?v.schema:v.validate?v:i.call(this,v)}function d(v){for(const m of this._compilations)if(u(m,v))return m}rt.getCompilingSchema=d;function u(v,m){return v.schema===m.schema&&v.root===m.root&&v.baseId===m.baseId}function p(v,m){let h;for(;typeof(h=this.refs[m])=="string";)m=h;return h||this.schemas[m]||f.call(this,v,m)}function f(v,m){const h=this.opts.uriResolver.parse(m),b=(0,s._getFullPath)(this.opts.uriResolver,h);let w=(0,s.getFullPath)(this.opts.uriResolver,v.baseId,void 0);if(Object.keys(v.schema).length>0&&b===w)return _.call(this,h,v);const y=(0,s.normalizeId)(b),T=this.refs[y]||this.schemas[y];if(typeof T=="string"){const A=f.call(this,v,T);return typeof A?.schema!="object"?void 0:_.call(this,h,A)}if(typeof T?.schema=="object"){if(T.validate||i.call(this,T),y===(0,s.normalizeId)(m)){const{schema:A}=T,{schemaId:S}=this.opts,x=A[S];return x&&(w=(0,s.resolveUrl)(this.opts.uriResolver,w,x)),new o({schema:A,schemaId:S,root:v,baseId:w})}return _.call(this,h,T)}}rt.resolveSchema=f;const g=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function _(v,{baseId:m,schema:h,root:b}){var w;if(((w=v.fragment)===null||w===void 0?void 0:w[0])!=="/")return;for(const A of v.fragment.slice(1).split("/")){if(typeof h=="boolean")return;const S=h[(0,r.unescapeFragment)(A)];if(S===void 0)return;h=S;const x=typeof h=="object"&&h[this.opts.schemaId];!g.has(A)&&x&&(m=(0,s.resolveUrl)(this.opts.uriResolver,m,x))}let y;if(typeof h!="boolean"&&h.$ref&&!(0,r.schemaHasRulesButRef)(h,this.RULES)){const A=(0,s.resolveUrl)(this.opts.uriResolver,m,h.$ref);y=f.call(this,b,A)}const{schemaId:T}=this.opts;if(y=y||new o({schema:h,schemaId:T,root:b,baseId:m}),y.schema!==y.root.schema)return y}return rt}const R0="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",L0="Meta-schema for $data reference (JSON AnySchema extension proposal)",D0="object",N0=["$data"],I0={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},B0=!1,F0={$id:R0,description:L0,type:D0,required:N0,properties:I0,additionalProperties:B0};var qs={},as={exports:{}},Xn,Il;function Ru(){if(Il)return Xn;Il=1;const e=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),t=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function a(p){let f="",g=0,_=0;for(_=0;_<p.length;_++)if(g=p[_].charCodeAt(0),g!==48){if(!(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102))return"";f+=p[_];break}for(_+=1;_<p.length;_++){if(g=p[_].charCodeAt(0),!(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102))return"";f+=p[_]}return f}const s=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function r(p){return p.length=0,!0}function n(p,f,g){if(p.length){const _=a(p);if(_!=="")f.push(_);else return g.error=!0,!1;p.length=0}return!0}function o(p){let f=0;const g={error:!1,address:"",zone:""},_=[],v=[];let m=!1,h=!1,b=n;for(let w=0;w<p.length;w++){const y=p[w];if(!(y==="["||y==="]"))if(y===":"){if(m===!0&&(h=!0),!b(v,_,g))break;if(++f>7){g.error=!0;break}w>0&&p[w-1]===":"&&(m=!0),_.push(":");continue}else if(y==="%"){if(!b(v,_,g))break;b=r}else{v.push(y);continue}}return v.length&&(b===r?g.zone=v.join(""):h?_.push(v.join("")):_.push(a(v))),g.address=_.join(""),g}function i(p){if(l(p,":")<2)return{host:p,isIPV6:!1};const f=o(p);if(f.error)return{host:p,isIPV6:!1};{let g=f.address,_=f.address;return f.zone&&(g+="%"+f.zone,_+="%25"+f.zone),{host:g,isIPV6:!0,escapedHost:_}}}function l(p,f){let g=0;for(let _=0;_<p.length;_++)p[_]===f&&g++;return g}function c(p){let f=p;const g=[];let _=-1,v=0;for(;v=f.length;){if(v===1){if(f===".")break;if(f==="/"){g.push("/");break}else{g.push(f);break}}else if(v===2){if(f[0]==="."){if(f[1]===".")break;if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&(f[1]==="."||f[1]==="/")){g.push("/");break}}else if(v===3&&f==="/.."){g.length!==0&&g.pop(),g.push("/");break}if(f[0]==="."){if(f[1]==="."){if(f[2]==="/"){f=f.slice(3);continue}}else if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&f[1]==="."){if(f[2]==="/"){f=f.slice(2);continue}else if(f[2]==="."&&f[3]==="/"){f=f.slice(3),g.length!==0&&g.pop();continue}}if((_=f.indexOf("/",1))===-1){g.push(f);break}else g.push(f.slice(0,_)),f=f.slice(_)}return g.join("")}function d(p,f){const g=f!==!0?escape:unescape;return p.scheme!==void 0&&(p.scheme=g(p.scheme)),p.userinfo!==void 0&&(p.userinfo=g(p.userinfo)),p.host!==void 0&&(p.host=g(p.host)),p.path!==void 0&&(p.path=g(p.path)),p.query!==void 0&&(p.query=g(p.query)),p.fragment!==void 0&&(p.fragment=g(p.fragment)),p}function u(p){const f=[];if(p.userinfo!==void 0&&(f.push(p.userinfo),f.push("@")),p.host!==void 0){let g=unescape(p.host);if(!t(g)){const _=i(g);_.isIPV6===!0?g=`[${_.escapedHost}]`:g=p.host}f.push(g)}return(typeof p.port=="number"||typeof p.port=="string")&&(f.push(":"),f.push(String(p.port))),f.length?f.join(""):void 0}return Xn={nonSimpleDomain:s,recomposeAuthority:u,normalizeComponentEncoding:d,removeDotSegments:c,isIPv4:t,isUUID:e,normalizeIPv6:i,stringArrayToHexStripped:a},Xn}var Qn,Bl;function z0(){if(Bl)return Qn;Bl=1;const{isUUID:e}=Ru(),t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,a=["http","https","ws","wss","urn","urn:uuid"];function s(y){return a.indexOf(y)!==-1}function r(y){return y.secure===!0?!0:y.secure===!1?!1:y.scheme?y.scheme.length===3&&(y.scheme[0]==="w"||y.scheme[0]==="W")&&(y.scheme[1]==="s"||y.scheme[1]==="S")&&(y.scheme[2]==="s"||y.scheme[2]==="S"):!1}function n(y){return y.host||(y.error=y.error||"HTTP URIs must have a host."),y}function o(y){const T=String(y.scheme).toLowerCase()==="https";return(y.port===(T?443:80)||y.port==="")&&(y.port=void 0),y.path||(y.path="/"),y}function i(y){return y.secure=r(y),y.resourceName=(y.path||"/")+(y.query?"?"+y.query:""),y.path=void 0,y.query=void 0,y}function l(y){if((y.port===(r(y)?443:80)||y.port==="")&&(y.port=void 0),typeof y.secure=="boolean"&&(y.scheme=y.secure?"wss":"ws",y.secure=void 0),y.resourceName){const[T,A]=y.resourceName.split("?");y.path=T&&T!=="/"?T:void 0,y.query=A,y.resourceName=void 0}return y.fragment=void 0,y}function c(y,T){if(!y.path)return y.error="URN can not be parsed",y;const A=y.path.match(t);if(A){const S=T.scheme||y.scheme||"urn";y.nid=A[1].toLowerCase(),y.nss=A[2];const x=`${S}:${T.nid||y.nid}`,E=w(x);y.path=void 0,E&&(y=E.parse(y,T))}else y.error=y.error||"URN can not be parsed.";return y}function d(y,T){if(y.nid===void 0)throw new Error("URN without nid cannot be serialized");const A=T.scheme||y.scheme||"urn",S=y.nid.toLowerCase(),x=`${A}:${T.nid||S}`,E=w(x);E&&(y=E.serialize(y,T));const $=y,C=y.nss;return $.path=`${S||T.nid}:${C}`,T.skipEscape=!0,$}function u(y,T){const A=y;return A.uuid=A.nss,A.nss=void 0,!T.tolerant&&(!A.uuid||!e(A.uuid))&&(A.error=A.error||"UUID is not valid."),A}function p(y){const T=y;return T.nss=(y.uuid||"").toLowerCase(),T}const f={scheme:"http",domainHost:!0,parse:n,serialize:o},g={scheme:"https",domainHost:f.domainHost,parse:n,serialize:o},_={scheme:"ws",domainHost:!0,parse:i,serialize:l},v={scheme:"wss",domainHost:_.domainHost,parse:_.parse,serialize:_.serialize},b={http:f,https:g,ws:_,wss:v,urn:{scheme:"urn",parse:c,serialize:d,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:u,serialize:p,skipNormalize:!0}};Object.setPrototypeOf(b,null);function w(y){return y&&(b[y]||b[y.toLowerCase()])||void 0}return Qn={wsIsSecure:r,SCHEMES:b,isValidSchemeName:s,getSchemeHandler:w},Qn}var Fl;function H0(){if(Fl)return as.exports;Fl=1;const{normalizeIPv6:e,removeDotSegments:t,recomposeAuthority:a,normalizeComponentEncoding:s,isIPv4:r,nonSimpleDomain:n}=Ru(),{SCHEMES:o,getSchemeHandler:i}=z0();function l(v,m){return typeof v=="string"?v=p(g(v,m),m):typeof v=="object"&&(v=g(p(v,m),m)),v}function c(v,m,h){const b=h?Object.assign({scheme:"null"},h):{scheme:"null"},w=d(g(v,b),g(m,b),b,!0);return b.skipEscape=!0,p(w,b)}function d(v,m,h,b){const w={};return b||(v=g(p(v,h),h),m=g(p(m,h),h)),h=h||{},!h.tolerant&&m.scheme?(w.scheme=m.scheme,w.userinfo=m.userinfo,w.host=m.host,w.port=m.port,w.path=t(m.path||""),w.query=m.query):(m.userinfo!==void 0||m.host!==void 0||m.port!==void 0?(w.userinfo=m.userinfo,w.host=m.host,w.port=m.port,w.path=t(m.path||""),w.query=m.query):(m.path?(m.path[0]==="/"?w.path=t(m.path):((v.userinfo!==void 0||v.host!==void 0||v.port!==void 0)&&!v.path?w.path="/"+m.path:v.path?w.path=v.path.slice(0,v.path.lastIndexOf("/")+1)+m.path:w.path=m.path,w.path=t(w.path)),w.query=m.query):(w.path=v.path,m.query!==void 0?w.query=m.query:w.query=v.query),w.userinfo=v.userinfo,w.host=v.host,w.port=v.port),w.scheme=v.scheme),w.fragment=m.fragment,w}function u(v,m,h){return typeof v=="string"?(v=unescape(v),v=p(s(g(v,h),!0),{...h,skipEscape:!0})):typeof v=="object"&&(v=p(s(v,!0),{...h,skipEscape:!0})),typeof m=="string"?(m=unescape(m),m=p(s(g(m,h),!0),{...h,skipEscape:!0})):typeof m=="object"&&(m=p(s(m,!0),{...h,skipEscape:!0})),v.toLowerCase()===m.toLowerCase()}function p(v,m){const h={host:v.host,scheme:v.scheme,userinfo:v.userinfo,port:v.port,path:v.path,query:v.query,nid:v.nid,nss:v.nss,uuid:v.uuid,fragment:v.fragment,reference:v.reference,resourceName:v.resourceName,secure:v.secure,error:""},b=Object.assign({},m),w=[],y=i(b.scheme||h.scheme);y&&y.serialize&&y.serialize(h,b),h.path!==void 0&&(b.skipEscape?h.path=unescape(h.path):(h.path=escape(h.path),h.scheme!==void 0&&(h.path=h.path.split("%3A").join(":")))),b.reference!=="suffix"&&h.scheme&&w.push(h.scheme,":");const T=a(h);if(T!==void 0&&(b.reference!=="suffix"&&w.push("//"),w.push(T),h.path&&h.path[0]!=="/"&&w.push("/")),h.path!==void 0){let A=h.path;!b.absolutePath&&(!y||!y.absolutePath)&&(A=t(A)),T===void 0&&A[0]==="/"&&A[1]==="/"&&(A="/%2F"+A.slice(2)),w.push(A)}return h.query!==void 0&&w.push("?",h.query),h.fragment!==void 0&&w.push("#",h.fragment),w.join("")}const f=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function g(v,m){const h=Object.assign({},m),b={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0};let w=!1;h.reference==="suffix"&&(h.scheme?v=h.scheme+":"+v:v="//"+v);const y=v.match(f);if(y){if(b.scheme=y[1],b.userinfo=y[3],b.host=y[4],b.port=parseInt(y[5],10),b.path=y[6]||"",b.query=y[7],b.fragment=y[8],isNaN(b.port)&&(b.port=y[5]),b.host)if(r(b.host)===!1){const S=e(b.host);b.host=S.host.toLowerCase(),w=S.isIPV6}else w=!0;b.scheme===void 0&&b.userinfo===void 0&&b.host===void 0&&b.port===void 0&&b.query===void 0&&!b.path?b.reference="same-document":b.scheme===void 0?b.reference="relative":b.fragment===void 0?b.reference="absolute":b.reference="uri",h.reference&&h.reference!=="suffix"&&h.reference!==b.reference&&(b.error=b.error||"URI is not a "+h.reference+" reference.");const T=i(h.scheme||b.scheme);if(!h.unicodeSupport&&(!T||!T.unicodeSupport)&&b.host&&(h.domainHost||T&&T.domainHost)&&w===!1&&n(b.host))try{b.host=URL.domainToASCII(b.host.toLowerCase())}catch(A){b.error=b.error||"Host's domain name can not be converted to ASCII: "+A}(!T||T&&!T.skipNormalize)&&(v.indexOf("%")!==-1&&(b.scheme!==void 0&&(b.scheme=unescape(b.scheme)),b.host!==void 0&&(b.host=unescape(b.host))),b.path&&(b.path=escape(unescape(b.path))),b.fragment&&(b.fragment=encodeURI(decodeURIComponent(b.fragment)))),T&&T.parse&&T.parse(b,h)}else b.error=b.error||"URI can not be parsed.";return b}const _={SCHEMES:o,normalize:l,resolve:c,resolveComponent:d,equal:u,serialize:p,parse:g};return as.exports=_,as.exports.default=_,as.exports.fastUri=_,as.exports}var zl;function j0(){if(zl)return qs;zl=1,Object.defineProperty(qs,"__esModule",{value:!0});const e=H0();return e.code='require("ajv/dist/runtime/uri").default',qs.default=e,qs}var Hl;function U0(){return Hl||(Hl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=hn();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var a=_e();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return a._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return a.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return a.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return a.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return a.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return a.CodeGen}});const s=Yo(),r=mn(),n=Ou(),o=Wo(),i=_e(),l=fn(),c=Yr(),d=we(),u=F0,p=j0(),f=(H,D)=>new RegExp(H,D);f.code="new RegExp";const g=["removeAdditional","useDefaults","coerceTypes"],_=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),v={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},m={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},h=200;function b(H){var D,j,B,P,M,F,z,I,J,Z,N,k,O,L,q,ee,te,le,ne,re,K,oe,se,de,ue;const pe=H.strict,he=(D=H.code)===null||D===void 0?void 0:D.optimize,be=he===!0||he===void 0?1:he||0,Ne=(B=(j=H.code)===null||j===void 0?void 0:j.regExp)!==null&&B!==void 0?B:f,Be=(P=H.uriResolver)!==null&&P!==void 0?P:p.default;return{strictSchema:(F=(M=H.strictSchema)!==null&&M!==void 0?M:pe)!==null&&F!==void 0?F:!0,strictNumbers:(I=(z=H.strictNumbers)!==null&&z!==void 0?z:pe)!==null&&I!==void 0?I:!0,strictTypes:(Z=(J=H.strictTypes)!==null&&J!==void 0?J:pe)!==null&&Z!==void 0?Z:"log",strictTuples:(k=(N=H.strictTuples)!==null&&N!==void 0?N:pe)!==null&&k!==void 0?k:"log",strictRequired:(L=(O=H.strictRequired)!==null&&O!==void 0?O:pe)!==null&&L!==void 0?L:!1,code:H.code?{...H.code,optimize:be,regExp:Ne}:{optimize:be,regExp:Ne},loopRequired:(q=H.loopRequired)!==null&&q!==void 0?q:h,loopEnum:(ee=H.loopEnum)!==null&&ee!==void 0?ee:h,meta:(te=H.meta)!==null&&te!==void 0?te:!0,messages:(le=H.messages)!==null&&le!==void 0?le:!0,inlineRefs:(ne=H.inlineRefs)!==null&&ne!==void 0?ne:!0,schemaId:(re=H.schemaId)!==null&&re!==void 0?re:"$id",addUsedSchema:(K=H.addUsedSchema)!==null&&K!==void 0?K:!0,validateSchema:(oe=H.validateSchema)!==null&&oe!==void 0?oe:!0,validateFormats:(se=H.validateFormats)!==null&&se!==void 0?se:!0,unicodeRegExp:(de=H.unicodeRegExp)!==null&&de!==void 0?de:!0,int32range:(ue=H.int32range)!==null&&ue!==void 0?ue:!0,uriResolver:Be}}class w{constructor(D={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,D=this.opts={...D,...b(D)};const{es5:j,lines:B}=this.opts.code;this.scope=new i.ValueScope({scope:{},prefixes:_,es5:j,lines:B}),this.logger=C(D.logger);const P=D.validateFormats;D.validateFormats=!1,this.RULES=(0,n.getRules)(),y.call(this,v,D,"NOT SUPPORTED"),y.call(this,m,D,"DEPRECATED","warn"),this._metaOpts=E.call(this),D.formats&&S.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),D.keywords&&x.call(this,D.keywords),typeof D.meta=="object"&&this.addMetaSchema(D.meta),A.call(this),D.validateFormats=P}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:D,meta:j,schemaId:B}=this.opts;let P=u;B==="id"&&(P={...u},P.id=P.$id,delete P.$id),j&&D&&this.addMetaSchema(P,P[B],!1)}defaultMeta(){const{meta:D,schemaId:j}=this.opts;return this.opts.defaultMeta=typeof D=="object"?D[j]||D:void 0}validate(D,j){let B;if(typeof D=="string"){if(B=this.getSchema(D),!B)throw new Error(`no schema with key or ref "${D}"`)}else B=this.compile(D);const P=B(j);return"$async"in B||(this.errors=B.errors),P}compile(D,j){const B=this._addSchema(D,j);return B.validate||this._compileSchemaEnv(B)}compileAsync(D,j){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:B}=this.opts;return P.call(this,D,j);async function P(Z,N){await M.call(this,Z.$schema);const k=this._addSchema(Z,N);return k.validate||F.call(this,k)}async function M(Z){Z&&!this.getSchema(Z)&&await P.call(this,{$ref:Z},!0)}async function F(Z){try{return this._compileSchemaEnv(Z)}catch(N){if(!(N instanceof r.default))throw N;return z.call(this,N),await I.call(this,N.missingSchema),F.call(this,Z)}}function z({missingSchema:Z,missingRef:N}){if(this.refs[Z])throw new Error(`AnySchema ${Z} is loaded but ${N} cannot be resolved`)}async function I(Z){const N=await J.call(this,Z);this.refs[Z]||await M.call(this,N.$schema),this.refs[Z]||this.addSchema(N,Z,j)}async function J(Z){const N=this._loading[Z];if(N)return N;try{return await(this._loading[Z]=B(Z))}finally{delete this._loading[Z]}}}addSchema(D,j,B,P=this.opts.validateSchema){if(Array.isArray(D)){for(const F of D)this.addSchema(F,void 0,B,P);return this}let M;if(typeof D=="object"){const{schemaId:F}=this.opts;if(M=D[F],M!==void 0&&typeof M!="string")throw new Error(`schema ${F} must be string`)}return j=(0,l.normalizeId)(j||M),this._checkUnique(j),this.schemas[j]=this._addSchema(D,B,j,P,!0),this}addMetaSchema(D,j,B=this.opts.validateSchema){return this.addSchema(D,j,!0,B),this}validateSchema(D,j){if(typeof D=="boolean")return!0;let B;if(B=D.$schema,B!==void 0&&typeof B!="string")throw new Error("$schema must be a string");if(B=B||this.opts.defaultMeta||this.defaultMeta(),!B)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const P=this.validate(B,D);if(!P&&j){const M="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(M);else throw new Error(M)}return P}getSchema(D){let j;for(;typeof(j=T.call(this,D))=="string";)D=j;if(j===void 0){const{schemaId:B}=this.opts,P=new o.SchemaEnv({schema:{},schemaId:B});if(j=o.resolveSchema.call(this,P,D),!j)return;this.refs[D]=j}return j.validate||this._compileSchemaEnv(j)}removeSchema(D){if(D instanceof RegExp)return this._removeAllSchemas(this.schemas,D),this._removeAllSchemas(this.refs,D),this;switch(typeof D){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const j=T.call(this,D);return typeof j=="object"&&this._cache.delete(j.schema),delete this.schemas[D],delete this.refs[D],this}case"object":{const j=D;this._cache.delete(j);let B=D[this.opts.schemaId];return B&&(B=(0,l.normalizeId)(B),delete this.schemas[B],delete this.refs[B]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(D){for(const j of D)this.addKeyword(j);return this}addKeyword(D,j){let B;if(typeof D=="string")B=D,typeof j=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),j.keyword=B);else if(typeof D=="object"&&j===void 0){if(j=D,B=j.keyword,Array.isArray(B)&&!B.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(U.call(this,B,j),!j)return(0,d.eachItem)(B,M=>W.call(this,M)),this;Y.call(this,j);const P={...j,type:(0,c.getJSONTypes)(j.type),schemaType:(0,c.getJSONTypes)(j.schemaType)};return(0,d.eachItem)(B,P.type.length===0?M=>W.call(this,M,P):M=>P.type.forEach(F=>W.call(this,M,P,F))),this}getKeyword(D){const j=this.RULES.all[D];return typeof j=="object"?j.definition:!!j}removeKeyword(D){const{RULES:j}=this;delete j.keywords[D],delete j.all[D];for(const B of j.rules){const P=B.rules.findIndex(M=>M.keyword===D);P>=0&&B.rules.splice(P,1)}return this}addFormat(D,j){return typeof j=="string"&&(j=new RegExp(j)),this.formats[D]=j,this}errorsText(D=this.errors,{separator:j=", ",dataVar:B="data"}={}){return!D||D.length===0?"No errors":D.map(P=>`${B}${P.instancePath} ${P.message}`).reduce((P,M)=>P+j+M)}$dataMetaSchema(D,j){const B=this.RULES.all;D=JSON.parse(JSON.stringify(D));for(const P of j){const M=P.split("/").slice(1);let F=D;for(const z of M)F=F[z];for(const z in B){const I=B[z];if(typeof I!="object")continue;const{$data:J}=I.definition,Z=F[z];J&&Z&&(F[z]=X(Z))}}return D}_removeAllSchemas(D,j){for(const B in D){const P=D[B];(!j||j.test(B))&&(typeof P=="string"?delete D[B]:P&&!P.meta&&(this._cache.delete(P.schema),delete D[B]))}}_addSchema(D,j,B,P=this.opts.validateSchema,M=this.opts.addUsedSchema){let F;const{schemaId:z}=this.opts;if(typeof D=="object")F=D[z];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof D!="boolean")throw new Error("schema must be object or boolean")}let I=this._cache.get(D);if(I!==void 0)return I;B=(0,l.normalizeId)(F||B);const J=l.getSchemaRefs.call(this,D,B);return I=new o.SchemaEnv({schema:D,schemaId:z,meta:j,baseId:B,localRefs:J}),this._cache.set(I.schema,I),M&&!B.startsWith("#")&&(B&&this._checkUnique(B),this.refs[B]=I),P&&this.validateSchema(D,!0),I}_checkUnique(D){if(this.schemas[D]||this.refs[D])throw new Error(`schema with key or id "${D}" already exists`)}_compileSchemaEnv(D){if(D.meta?this._compileMetaSchema(D):o.compileSchema.call(this,D),!D.validate)throw new Error("ajv implementation error");return D.validate}_compileMetaSchema(D){const j=this.opts;this.opts=this._metaOpts;try{o.compileSchema.call(this,D)}finally{this.opts=j}}}w.ValidationError=s.default,w.MissingRefError=r.default,e.default=w;function y(H,D,j,B="error"){for(const P in H){const M=P;M in D&&this.logger[B](`${j}: option ${P}. ${H[M]}`)}}function T(H){return H=(0,l.normalizeId)(H),this.schemas[H]||this.refs[H]}function A(){const H=this.opts.schemas;if(H)if(Array.isArray(H))this.addSchema(H);else for(const D in H)this.addSchema(H[D],D)}function S(){for(const H in this.opts.formats){const D=this.opts.formats[H];D&&this.addFormat(H,D)}}function x(H){if(Array.isArray(H)){this.addVocabulary(H);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const D in H){const j=H[D];j.keyword||(j.keyword=D),this.addKeyword(j)}}function E(){const H={...this.opts};for(const D of g)delete H[D];return H}const $={log(){},warn(){},error(){}};function C(H){if(H===!1)return $;if(H===void 0)return console;if(H.log&&H.warn&&H.error)return H;throw new Error("logger must implement log, warn and error methods")}const R=/^[a-z_$][a-z0-9_$:-]*$/i;function U(H,D){const{RULES:j}=this;if((0,d.eachItem)(H,B=>{if(j.keywords[B])throw new Error(`Keyword ${B} is already defined`);if(!R.test(B))throw new Error(`Keyword ${B} has invalid name`)}),!!D&&D.$data&&!("code"in D||"validate"in D))throw new Error('$data keyword must have "code" or "validate" function')}function W(H,D,j){var B;const P=D?.post;if(j&&P)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:M}=this;let F=P?M.post:M.rules.find(({type:I})=>I===j);if(F||(F={type:j,rules:[]},M.rules.push(F)),M.keywords[H]=!0,!D)return;const z={keyword:H,definition:{...D,type:(0,c.getJSONTypes)(D.type),schemaType:(0,c.getJSONTypes)(D.schemaType)}};D.before?ae.call(this,F,z,D.before):F.rules.push(z),M.all[H]=z,(B=D.implements)===null||B===void 0||B.forEach(I=>this.addKeyword(I))}function ae(H,D,j){const B=H.rules.findIndex(P=>P.keyword===j);B>=0?H.rules.splice(B,0,D):(H.rules.push(D),this.logger.warn(`rule ${j} is not defined`))}function Y(H){let{metaSchema:D}=H;D!==void 0&&(H.$data&&this.opts.$data&&(D=X(D)),H.validateSchema=this.compile(D,!0))}const V={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function X(H){return{anyOf:[H,V]}}})(qn)),qn}var Gs={},Vs={},Ks={},jl;function q0(){if(jl)return Ks;jl=1,Object.defineProperty(Ks,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return Ks.default=e,Ks}var ra={},Ul;function G0(){if(Ul)return ra;Ul=1,Object.defineProperty(ra,"__esModule",{value:!0}),ra.callRef=ra.getValidate=void 0;const e=mn(),t=Tt(),a=_e(),s=_a(),r=Wo(),n=we(),o={keyword:"$ref",schemaType:"string",code(c){const{gen:d,schema:u,it:p}=c,{baseId:f,schemaEnv:g,validateName:_,opts:v,self:m}=p,{root:h}=g;if((u==="#"||u==="#/")&&f===h.baseId)return w();const b=r.resolveRef.call(m,h,f,u);if(b===void 0)throw new e.default(p.opts.uriResolver,f,u);if(b instanceof r.SchemaEnv)return y(b);return T(b);function w(){if(g===h)return l(c,_,g,g.$async);const A=d.scopeValue("root",{ref:h});return l(c,(0,a._)`${A}.validate`,h,h.$async)}function y(A){const S=i(c,A);l(c,S,A,A.$async)}function T(A){const S=d.scopeValue("schema",v.code.source===!0?{ref:A,code:(0,a.stringify)(A)}:{ref:A}),x=d.name("valid"),E=c.subschema({schema:A,dataTypes:[],schemaPath:a.nil,topSchemaRef:S,errSchemaPath:u},x);c.mergeEvaluated(E),c.ok(x)}}};function i(c,d){const{gen:u}=c;return d.validate?u.scopeValue("validate",{ref:d.validate}):(0,a._)`${u.scopeValue("wrapper",{ref:d})}.validate`}ra.getValidate=i;function l(c,d,u,p){const{gen:f,it:g}=c,{allErrors:_,schemaEnv:v,opts:m}=g,h=m.passContext?s.default.this:a.nil;p?b():w();function b(){if(!v.$async)throw new Error("async schema referenced by sync schema");const A=f.let("valid");f.try(()=>{f.code((0,a._)`await ${(0,t.callValidateCode)(c,d,h)}`),T(d),_||f.assign(A,!0)},S=>{f.if((0,a._)`!(${S} instanceof ${g.ValidationError})`,()=>f.throw(S)),y(S),_||f.assign(A,!1)}),c.ok(A)}function w(){c.result((0,t.callValidateCode)(c,d,h),()=>T(d),()=>y(d))}function y(A){const S=(0,a._)`${A}.errors`;f.assign(s.default.vErrors,(0,a._)`${s.default.vErrors} === null ? ${S} : ${s.default.vErrors}.concat(${S})`),f.assign(s.default.errors,(0,a._)`${s.default.vErrors}.length`)}function T(A){var S;if(!g.opts.unevaluated)return;const x=(S=u?.validate)===null||S===void 0?void 0:S.evaluated;if(g.props!==!0)if(x&&!x.dynamicProps)x.props!==void 0&&(g.props=n.mergeEvaluated.props(f,x.props,g.props));else{const E=f.var("props",(0,a._)`${A}.evaluated.props`);g.props=n.mergeEvaluated.props(f,E,g.props,a.Name)}if(g.items!==!0)if(x&&!x.dynamicItems)x.items!==void 0&&(g.items=n.mergeEvaluated.items(f,x.items,g.items));else{const E=f.var("items",(0,a._)`${A}.evaluated.items`);g.items=n.mergeEvaluated.items(f,E,g.items,a.Name)}}}return ra.callRef=l,ra.default=o,ra}var ql;function V0(){if(ql)return Vs;ql=1,Object.defineProperty(Vs,"__esModule",{value:!0});const e=q0(),t=G0(),a=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return Vs.default=a,Vs}var Ys={},Ws={},Gl;function K0(){if(Gl)return Ws;Gl=1,Object.defineProperty(Ws,"__esModule",{value:!0});const e=_e(),t=e.operators,a={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},s={message:({keyword:n,schemaCode:o})=>(0,e.str)`must be ${a[n].okStr} ${o}`,params:({keyword:n,schemaCode:o})=>(0,e._)`{comparison: ${a[n].okStr}, limit: ${o}}`},r={keyword:Object.keys(a),type:"number",schemaType:"number",$data:!0,error:s,code(n){const{keyword:o,data:i,schemaCode:l}=n;n.fail$data((0,e._)`${i} ${a[o].fail} ${l} || isNaN(${i})`)}};return Ws.default=r,Ws}var Js={},Vl;function Y0(){if(Vl)return Js;Vl=1,Object.defineProperty(Js,"__esModule",{value:!0});const e=_e(),a={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:s})=>(0,e.str)`must be multiple of ${s}`,params:({schemaCode:s})=>(0,e._)`{multipleOf: ${s}}`},code(s){const{gen:r,data:n,schemaCode:o,it:i}=s,l=i.opts.multipleOfPrecision,c=r.let("res"),d=l?(0,e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${l}`:(0,e._)`${c} !== parseInt(${c})`;s.fail$data((0,e._)`(${o} === 0 || (${c} = ${n}/${o}, ${d}))`)}};return Js.default=a,Js}var Xs={},Qs={},Kl;function W0(){if(Kl)return Qs;Kl=1,Object.defineProperty(Qs,"__esModule",{value:!0});function e(t){const a=t.length;let s=0,r=0,n;for(;r<a;)s++,n=t.charCodeAt(r++),n>=55296&&n<=56319&&r<a&&(n=t.charCodeAt(r),(n&64512)===56320&&r++);return s}return Qs.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',Qs}var Yl;function J0(){if(Yl)return Xs;Yl=1,Object.defineProperty(Xs,"__esModule",{value:!0});const e=_e(),t=we(),a=W0(),r={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:n,schemaCode:o}){const i=n==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${i} than ${o} characters`},params:({schemaCode:n})=>(0,e._)`{limit: ${n}}`},code(n){const{keyword:o,data:i,schemaCode:l,it:c}=n,d=o==="maxLength"?e.operators.GT:e.operators.LT,u=c.opts.unicode===!1?(0,e._)`${i}.length`:(0,e._)`${(0,t.useFunc)(n.gen,a.default)}(${i})`;n.fail$data((0,e._)`${u} ${d} ${l}`)}};return Xs.default=r,Xs}var Zs={},Wl;function X0(){if(Wl)return Zs;Wl=1,Object.defineProperty(Zs,"__esModule",{value:!0});const e=Tt(),t=we(),a=_e(),r={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:n})=>(0,a.str)`must match pattern "${n}"`,params:({schemaCode:n})=>(0,a._)`{pattern: ${n}}`},code(n){const{gen:o,data:i,$data:l,schema:c,schemaCode:d,it:u}=n,p=u.opts.unicodeRegExp?"u":"";if(l){const{regExp:f}=u.opts.code,g=f.code==="new RegExp"?(0,a._)`new RegExp`:(0,t.useFunc)(o,f),_=o.let("valid");o.try(()=>o.assign(_,(0,a._)`${g}(${d}, ${p}).test(${i})`),()=>o.assign(_,!1)),n.fail$data((0,a._)`!${_}`)}else{const f=(0,e.usePattern)(n,c);n.fail$data((0,a._)`!${f}.test(${i})`)}}};return Zs.default=r,Zs}var er={},Jl;function Q0(){if(Jl)return er;Jl=1,Object.defineProperty(er,"__esModule",{value:!0});const e=_e(),a={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:s,schemaCode:r}){const n=s==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${r} properties`},params:({schemaCode:s})=>(0,e._)`{limit: ${s}}`},code(s){const{keyword:r,data:n,schemaCode:o}=s,i=r==="maxProperties"?e.operators.GT:e.operators.LT;s.fail$data((0,e._)`Object.keys(${n}).length ${i} ${o}`)}};return er.default=a,er}var tr={},Xl;function Z0(){if(Xl)return tr;Xl=1,Object.defineProperty(tr,"__esModule",{value:!0});const e=Tt(),t=_e(),a=we(),r={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:n}})=>(0,t.str)`must have required property '${n}'`,params:({params:{missingProperty:n}})=>(0,t._)`{missingProperty: ${n}}`},code(n){const{gen:o,schema:i,schemaCode:l,data:c,$data:d,it:u}=n,{opts:p}=u;if(!d&&i.length===0)return;const f=i.length>=p.loopRequired;if(u.allErrors?g():_(),p.strictRequired){const h=n.parentSchema.properties,{definedProperties:b}=n.it;for(const w of i)if(h?.[w]===void 0&&!b.has(w)){const y=u.schemaEnv.baseId+u.errSchemaPath,T=`required property "${w}" is not defined at "${y}" (strictRequired)`;(0,a.checkStrictMode)(u,T,u.opts.strictRequired)}}function g(){if(f||d)n.block$data(t.nil,v);else for(const h of i)(0,e.checkReportMissingProp)(n,h)}function _(){const h=o.let("missing");if(f||d){const b=o.let("valid",!0);n.block$data(b,()=>m(h,b)),n.ok(b)}else o.if((0,e.checkMissingProp)(n,i,h)),(0,e.reportMissingProp)(n,h),o.else()}function v(){o.forOf("prop",l,h=>{n.setParams({missingProperty:h}),o.if((0,e.noPropertyInData)(o,c,h,p.ownProperties),()=>n.error())})}function m(h,b){n.setParams({missingProperty:h}),o.forOf(h,l,()=>{o.assign(b,(0,e.propertyInData)(o,c,h,p.ownProperties)),o.if((0,t.not)(b),()=>{n.error(),o.break()})},t.nil)}}};return tr.default=r,tr}var ar={},Ql;function ev(){if(Ql)return ar;Ql=1,Object.defineProperty(ar,"__esModule",{value:!0});const e=_e(),a={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:s,schemaCode:r}){const n=s==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${r} items`},params:({schemaCode:s})=>(0,e._)`{limit: ${s}}`},code(s){const{keyword:r,data:n,schemaCode:o}=s,i=r==="maxItems"?e.operators.GT:e.operators.LT;s.fail$data((0,e._)`${n}.length ${i} ${o}`)}};return ar.default=a,ar}var sr={},rr={},Zl;function Jo(){if(Zl)return rr;Zl=1,Object.defineProperty(rr,"__esModule",{value:!0});const e=Mu();return e.code='require("ajv/dist/runtime/equal").default',rr.default=e,rr}var ec;function tv(){if(ec)return sr;ec=1,Object.defineProperty(sr,"__esModule",{value:!0});const e=Yr(),t=_e(),a=we(),s=Jo(),n={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i:o,j:i}})=>(0,t.str)`must NOT have duplicate items (items ## ${i} and ${o} are identical)`,params:({params:{i:o,j:i}})=>(0,t._)`{i: ${o}, j: ${i}}`},code(o){const{gen:i,data:l,$data:c,schema:d,parentSchema:u,schemaCode:p,it:f}=o;if(!c&&!d)return;const g=i.let("valid"),_=u.items?(0,e.getSchemaTypes)(u.items):[];o.block$data(g,v,(0,t._)`${p} === false`),o.ok(g);function v(){const w=i.let("i",(0,t._)`${l}.length`),y=i.let("j");o.setParams({i:w,j:y}),i.assign(g,!0),i.if((0,t._)`${w} > 1`,()=>(m()?h:b)(w,y))}function m(){return _.length>0&&!_.some(w=>w==="object"||w==="array")}function h(w,y){const T=i.name("item"),A=(0,e.checkDataTypes)(_,T,f.opts.strictNumbers,e.DataType.Wrong),S=i.const("indices",(0,t._)`{}`);i.for((0,t._)`;${w}--;`,()=>{i.let(T,(0,t._)`${l}[${w}]`),i.if(A,(0,t._)`continue`),_.length>1&&i.if((0,t._)`typeof ${T} == "string"`,(0,t._)`${T} += "_"`),i.if((0,t._)`typeof ${S}[${T}] == "number"`,()=>{i.assign(y,(0,t._)`${S}[${T}]`),o.error(),i.assign(g,!1).break()}).code((0,t._)`${S}[${T}] = ${w}`)})}function b(w,y){const T=(0,a.useFunc)(i,s.default),A=i.name("outer");i.label(A).for((0,t._)`;${w}--;`,()=>i.for((0,t._)`${y} = ${w}; ${y}--;`,()=>i.if((0,t._)`${T}(${l}[${w}], ${l}[${y}])`,()=>{o.error(),i.assign(g,!1).break(A)})))}}};return sr.default=n,sr}var nr={},tc;function av(){if(tc)return nr;tc=1,Object.defineProperty(nr,"__esModule",{value:!0});const e=_e(),t=we(),a=Jo(),r={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:n})=>(0,e._)`{allowedValue: ${n}}`},code(n){const{gen:o,data:i,$data:l,schemaCode:c,schema:d}=n;l||d&&typeof d=="object"?n.fail$data((0,e._)`!${(0,t.useFunc)(o,a.default)}(${i}, ${c})`):n.fail((0,e._)`${d} !== ${i}`)}};return nr.default=r,nr}var or={},ac;function sv(){if(ac)return or;ac=1,Object.defineProperty(or,"__esModule",{value:!0});const e=_e(),t=we(),a=Jo(),r={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:n})=>(0,e._)`{allowedValues: ${n}}`},code(n){const{gen:o,data:i,$data:l,schema:c,schemaCode:d,it:u}=n;if(!l&&c.length===0)throw new Error("enum must have non-empty array");const p=c.length>=u.opts.loopEnum;let f;const g=()=>f??(f=(0,t.useFunc)(o,a.default));let _;if(p||l)_=o.let("valid"),n.block$data(_,v);else{if(!Array.isArray(c))throw new Error("ajv implementation error");const h=o.const("vSchema",d);_=(0,e.or)(...c.map((b,w)=>m(h,w)))}n.pass(_);function v(){o.assign(_,!1),o.forOf("v",d,h=>o.if((0,e._)`${g()}(${i}, ${h})`,()=>o.assign(_,!0).break()))}function m(h,b){const w=c[b];return typeof w=="object"&&w!==null?(0,e._)`${g()}(${i}, ${h}[${b}])`:(0,e._)`${i} === ${w}`}}};return or.default=r,or}var sc;function rv(){if(sc)return Ys;sc=1,Object.defineProperty(Ys,"__esModule",{value:!0});const e=K0(),t=Y0(),a=J0(),s=X0(),r=Q0(),n=Z0(),o=ev(),i=tv(),l=av(),c=sv(),d=[e.default,t.default,a.default,s.default,r.default,n.default,o.default,i.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},l.default,c.default];return Ys.default=d,Ys}var ir={},Ba={},rc;function Lu(){if(rc)return Ba;rc=1,Object.defineProperty(Ba,"__esModule",{value:!0}),Ba.validateAdditionalItems=void 0;const e=_e(),t=we(),s={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:n}})=>(0,e.str)`must NOT have more than ${n} items`,params:({params:{len:n}})=>(0,e._)`{limit: ${n}}`},code(n){const{parentSchema:o,it:i}=n,{items:l}=o;if(!Array.isArray(l)){(0,t.checkStrictMode)(i,'"additionalItems" is ignored when "items" is not an array of schemas');return}r(n,l)}};function r(n,o){const{gen:i,schema:l,data:c,keyword:d,it:u}=n;u.items=!0;const p=i.const("len",(0,e._)`${c}.length`);if(l===!1)n.setParams({len:o.length}),n.pass((0,e._)`${p} <= ${o.length}`);else if(typeof l=="object"&&!(0,t.alwaysValidSchema)(u,l)){const g=i.var("valid",(0,e._)`${p} <= ${o.length}`);i.if((0,e.not)(g),()=>f(g)),n.ok(g)}function f(g){i.forRange("i",o.length,p,_=>{n.subschema({keyword:d,dataProp:_,dataPropType:t.Type.Num},g),u.allErrors||i.if((0,e.not)(g),()=>i.break())})}}return Ba.validateAdditionalItems=r,Ba.default=s,Ba}var lr={},Fa={},nc;function Du(){if(nc)return Fa;nc=1,Object.defineProperty(Fa,"__esModule",{value:!0}),Fa.validateTuple=void 0;const e=_e(),t=we(),a=Tt(),s={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(n){const{schema:o,it:i}=n;if(Array.isArray(o))return r(n,"additionalItems",o);i.items=!0,!(0,t.alwaysValidSchema)(i,o)&&n.ok((0,a.validateArray)(n))}};function r(n,o,i=n.schema){const{gen:l,parentSchema:c,data:d,keyword:u,it:p}=n;_(c),p.opts.unevaluated&&i.length&&p.items!==!0&&(p.items=t.mergeEvaluated.items(l,i.length,p.items));const f=l.name("valid"),g=l.const("len",(0,e._)`${d}.length`);i.forEach((v,m)=>{(0,t.alwaysValidSchema)(p,v)||(l.if((0,e._)`${g} > ${m}`,()=>n.subschema({keyword:u,schemaProp:m,dataProp:m},f)),n.ok(f))});function _(v){const{opts:m,errSchemaPath:h}=p,b=i.length,w=b===v.minItems&&(b===v.maxItems||v[o]===!1);if(m.strictTuples&&!w){const y=`"${u}" is ${b}-tuple, but minItems or maxItems/${o} are not specified or different at path "${h}"`;(0,t.checkStrictMode)(p,y,m.strictTuples)}}}return Fa.validateTuple=r,Fa.default=s,Fa}var oc;function nv(){if(oc)return lr;oc=1,Object.defineProperty(lr,"__esModule",{value:!0});const e=Du(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:a=>(0,e.validateTuple)(a,"items")};return lr.default=t,lr}var cr={},ic;function ov(){if(ic)return cr;ic=1,Object.defineProperty(cr,"__esModule",{value:!0});const e=_e(),t=we(),a=Tt(),s=Lu(),n={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:o}})=>(0,e.str)`must NOT have more than ${o} items`,params:({params:{len:o}})=>(0,e._)`{limit: ${o}}`},code(o){const{schema:i,parentSchema:l,it:c}=o,{prefixItems:d}=l;c.items=!0,!(0,t.alwaysValidSchema)(c,i)&&(d?(0,s.validateAdditionalItems)(o,d):o.ok((0,a.validateArray)(o)))}};return cr.default=n,cr}var dr={},lc;function iv(){if(lc)return dr;lc=1,Object.defineProperty(dr,"__esModule",{value:!0});const e=_e(),t=we(),s={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:r,max:n}})=>n===void 0?(0,e.str)`must contain at least ${r} valid item(s)`:(0,e.str)`must contain at least ${r} and no more than ${n} valid item(s)`,params:({params:{min:r,max:n}})=>n===void 0?(0,e._)`{minContains: ${r}}`:(0,e._)`{minContains: ${r}, maxContains: ${n}}`},code(r){const{gen:n,schema:o,parentSchema:i,data:l,it:c}=r;let d,u;const{minContains:p,maxContains:f}=i;c.opts.next?(d=p===void 0?1:p,u=f):d=1;const g=n.const("len",(0,e._)`${l}.length`);if(r.setParams({min:d,max:u}),u===void 0&&d===0){(0,t.checkStrictMode)(c,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(u!==void 0&&d>u){(0,t.checkStrictMode)(c,'"minContains" > "maxContains" is always invalid'),r.fail();return}if((0,t.alwaysValidSchema)(c,o)){let b=(0,e._)`${g} >= ${d}`;u!==void 0&&(b=(0,e._)`${b} && ${g} <= ${u}`),r.pass(b);return}c.items=!0;const _=n.name("valid");u===void 0&&d===1?m(_,()=>n.if(_,()=>n.break())):d===0?(n.let(_,!0),u!==void 0&&n.if((0,e._)`${l}.length > 0`,v)):(n.let(_,!1),v()),r.result(_,()=>r.reset());function v(){const b=n.name("_valid"),w=n.let("count",0);m(b,()=>n.if(b,()=>h(w)))}function m(b,w){n.forRange("i",0,g,y=>{r.subschema({keyword:"contains",dataProp:y,dataPropType:t.Type.Num,compositeRule:!0},b),w()})}function h(b){n.code((0,e._)`${b}++`),u===void 0?n.if((0,e._)`${b} >= ${d}`,()=>n.assign(_,!0).break()):(n.if((0,e._)`${b} > ${u}`,()=>n.assign(_,!1).break()),d===1?n.assign(_,!0):n.if((0,e._)`${b} >= ${d}`,()=>n.assign(_,!0)))}}};return dr.default=s,dr}var Zn={},cc;function lv(){return cc||(cc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=_e(),a=we(),s=Tt();e.error={message:({params:{property:l,depsCount:c,deps:d}})=>{const u=c===1?"property":"properties";return(0,t.str)`must have ${u} ${d} when property ${l} is present`},params:({params:{property:l,depsCount:c,deps:d,missingProperty:u}})=>(0,t._)`{property: ${l},
    missingProperty: ${u},
    depsCount: ${c},
    deps: ${d}}`};const r={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(l){const[c,d]=n(l);o(l,c),i(l,d)}};function n({schema:l}){const c={},d={};for(const u in l){if(u==="__proto__")continue;const p=Array.isArray(l[u])?c:d;p[u]=l[u]}return[c,d]}function o(l,c=l.schema){const{gen:d,data:u,it:p}=l;if(Object.keys(c).length===0)return;const f=d.let("missing");for(const g in c){const _=c[g];if(_.length===0)continue;const v=(0,s.propertyInData)(d,u,g,p.opts.ownProperties);l.setParams({property:g,depsCount:_.length,deps:_.join(", ")}),p.allErrors?d.if(v,()=>{for(const m of _)(0,s.checkReportMissingProp)(l,m)}):(d.if((0,t._)`${v} && (${(0,s.checkMissingProp)(l,_,f)})`),(0,s.reportMissingProp)(l,f),d.else())}}e.validatePropertyDeps=o;function i(l,c=l.schema){const{gen:d,data:u,keyword:p,it:f}=l,g=d.name("valid");for(const _ in c)(0,a.alwaysValidSchema)(f,c[_])||(d.if((0,s.propertyInData)(d,u,_,f.opts.ownProperties),()=>{const v=l.subschema({keyword:p,schemaProp:_},g);l.mergeValidEvaluated(v,g)},()=>d.var(g,!0)),l.ok(g))}e.validateSchemaDeps=i,e.default=r})(Zn)),Zn}var ur={},dc;function cv(){if(dc)return ur;dc=1,Object.defineProperty(ur,"__esModule",{value:!0});const e=_e(),t=we(),s={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:r})=>(0,e._)`{propertyName: ${r.propertyName}}`},code(r){const{gen:n,schema:o,data:i,it:l}=r;if((0,t.alwaysValidSchema)(l,o))return;const c=n.name("valid");n.forIn("key",i,d=>{r.setParams({propertyName:d}),r.subschema({keyword:"propertyNames",data:d,dataTypes:["string"],propertyName:d,compositeRule:!0},c),n.if((0,e.not)(c),()=>{r.error(!0),l.allErrors||n.break()})}),r.ok(c)}};return ur.default=s,ur}var pr={},uc;function Nu(){if(uc)return pr;uc=1,Object.defineProperty(pr,"__esModule",{value:!0});const e=Tt(),t=_e(),a=_a(),s=we(),n={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:o})=>(0,t._)`{additionalProperty: ${o.additionalProperty}}`},code(o){const{gen:i,schema:l,parentSchema:c,data:d,errsCount:u,it:p}=o;if(!u)throw new Error("ajv implementation error");const{allErrors:f,opts:g}=p;if(p.props=!0,g.removeAdditional!=="all"&&(0,s.alwaysValidSchema)(p,l))return;const _=(0,e.allSchemaProperties)(c.properties),v=(0,e.allSchemaProperties)(c.patternProperties);m(),o.ok((0,t._)`${u} === ${a.default.errors}`);function m(){i.forIn("key",d,T=>{!_.length&&!v.length?w(T):i.if(h(T),()=>w(T))})}function h(T){let A;if(_.length>8){const S=(0,s.schemaRefOrVal)(p,c.properties,"properties");A=(0,e.isOwnProperty)(i,S,T)}else _.length?A=(0,t.or)(..._.map(S=>(0,t._)`${T} === ${S}`)):A=t.nil;return v.length&&(A=(0,t.or)(A,...v.map(S=>(0,t._)`${(0,e.usePattern)(o,S)}.test(${T})`))),(0,t.not)(A)}function b(T){i.code((0,t._)`delete ${d}[${T}]`)}function w(T){if(g.removeAdditional==="all"||g.removeAdditional&&l===!1){b(T);return}if(l===!1){o.setParams({additionalProperty:T}),o.error(),f||i.break();return}if(typeof l=="object"&&!(0,s.alwaysValidSchema)(p,l)){const A=i.name("valid");g.removeAdditional==="failing"?(y(T,A,!1),i.if((0,t.not)(A),()=>{o.reset(),b(T)})):(y(T,A),f||i.if((0,t.not)(A),()=>i.break()))}}function y(T,A,S){const x={keyword:"additionalProperties",dataProp:T,dataPropType:s.Type.Str};S===!1&&Object.assign(x,{compositeRule:!0,createErrors:!1,allErrors:!1}),o.subschema(x,A)}}};return pr.default=n,pr}var fr={},pc;function dv(){if(pc)return fr;pc=1,Object.defineProperty(fr,"__esModule",{value:!0});const e=hn(),t=Tt(),a=we(),s=Nu(),r={keyword:"properties",type:"object",schemaType:"object",code(n){const{gen:o,schema:i,parentSchema:l,data:c,it:d}=n;d.opts.removeAdditional==="all"&&l.additionalProperties===void 0&&s.default.code(new e.KeywordCxt(d,s.default,"additionalProperties"));const u=(0,t.allSchemaProperties)(i);for(const v of u)d.definedProperties.add(v);d.opts.unevaluated&&u.length&&d.props!==!0&&(d.props=a.mergeEvaluated.props(o,(0,a.toHash)(u),d.props));const p=u.filter(v=>!(0,a.alwaysValidSchema)(d,i[v]));if(p.length===0)return;const f=o.name("valid");for(const v of p)g(v)?_(v):(o.if((0,t.propertyInData)(o,c,v,d.opts.ownProperties)),_(v),d.allErrors||o.else().var(f,!0),o.endIf()),n.it.definedProperties.add(v),n.ok(f);function g(v){return d.opts.useDefaults&&!d.compositeRule&&i[v].default!==void 0}function _(v){n.subschema({keyword:"properties",schemaProp:v,dataProp:v},f)}}};return fr.default=r,fr}var hr={},fc;function uv(){if(fc)return hr;fc=1,Object.defineProperty(hr,"__esModule",{value:!0});const e=Tt(),t=_e(),a=we(),s=we(),r={keyword:"patternProperties",type:"object",schemaType:"object",code(n){const{gen:o,schema:i,data:l,parentSchema:c,it:d}=n,{opts:u}=d,p=(0,e.allSchemaProperties)(i),f=p.filter(w=>(0,a.alwaysValidSchema)(d,i[w]));if(p.length===0||f.length===p.length&&(!d.opts.unevaluated||d.props===!0))return;const g=u.strictSchema&&!u.allowMatchingProperties&&c.properties,_=o.name("valid");d.props!==!0&&!(d.props instanceof t.Name)&&(d.props=(0,s.evaluatedPropsToName)(o,d.props));const{props:v}=d;m();function m(){for(const w of p)g&&h(w),d.allErrors?b(w):(o.var(_,!0),b(w),o.if(_))}function h(w){for(const y in g)new RegExp(w).test(y)&&(0,a.checkStrictMode)(d,`property ${y} matches pattern ${w} (use allowMatchingProperties)`)}function b(w){o.forIn("key",l,y=>{o.if((0,t._)`${(0,e.usePattern)(n,w)}.test(${y})`,()=>{const T=f.includes(w);T||n.subschema({keyword:"patternProperties",schemaProp:w,dataProp:y,dataPropType:s.Type.Str},_),d.opts.unevaluated&&v!==!0?o.assign((0,t._)`${v}[${y}]`,!0):!T&&!d.allErrors&&o.if((0,t.not)(_),()=>o.break())})})}}};return hr.default=r,hr}var mr={},hc;function pv(){if(hc)return mr;hc=1,Object.defineProperty(mr,"__esModule",{value:!0});const e=we(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(a){const{gen:s,schema:r,it:n}=a;if((0,e.alwaysValidSchema)(n,r)){a.fail();return}const o=s.name("valid");a.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},o),a.failResult(o,()=>a.reset(),()=>a.error())},error:{message:"must NOT be valid"}};return mr.default=t,mr}var gr={},mc;function fv(){if(mc)return gr;mc=1,Object.defineProperty(gr,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:Tt().validateUnion,error:{message:"must match a schema in anyOf"}};return gr.default=t,gr}var br={},gc;function hv(){if(gc)return br;gc=1,Object.defineProperty(br,"__esModule",{value:!0});const e=_e(),t=we(),s={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:r})=>(0,e._)`{passingSchemas: ${r.passing}}`},code(r){const{gen:n,schema:o,parentSchema:i,it:l}=r;if(!Array.isArray(o))throw new Error("ajv implementation error");if(l.opts.discriminator&&i.discriminator)return;const c=o,d=n.let("valid",!1),u=n.let("passing",null),p=n.name("_valid");r.setParams({passing:u}),n.block(f),r.result(d,()=>r.reset(),()=>r.error(!0));function f(){c.forEach((g,_)=>{let v;(0,t.alwaysValidSchema)(l,g)?n.var(p,!0):v=r.subschema({keyword:"oneOf",schemaProp:_,compositeRule:!0},p),_>0&&n.if((0,e._)`${p} && ${d}`).assign(d,!1).assign(u,(0,e._)`[${u}, ${_}]`).else(),n.if(p,()=>{n.assign(d,!0),n.assign(u,_),v&&r.mergeEvaluated(v,e.Name)})})}}};return br.default=s,br}var _r={},bc;function mv(){if(bc)return _r;bc=1,Object.defineProperty(_r,"__esModule",{value:!0});const e=we(),t={keyword:"allOf",schemaType:"array",code(a){const{gen:s,schema:r,it:n}=a;if(!Array.isArray(r))throw new Error("ajv implementation error");const o=s.name("valid");r.forEach((i,l)=>{if((0,e.alwaysValidSchema)(n,i))return;const c=a.subschema({keyword:"allOf",schemaProp:l},o);a.ok(o),a.mergeEvaluated(c)})}};return _r.default=t,_r}var vr={},_c;function gv(){if(_c)return vr;_c=1,Object.defineProperty(vr,"__esModule",{value:!0});const e=_e(),t=we(),s={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:n})=>(0,e.str)`must match "${n.ifClause}" schema`,params:({params:n})=>(0,e._)`{failingKeyword: ${n.ifClause}}`},code(n){const{gen:o,parentSchema:i,it:l}=n;i.then===void 0&&i.else===void 0&&(0,t.checkStrictMode)(l,'"if" without "then" and "else" is ignored');const c=r(l,"then"),d=r(l,"else");if(!c&&!d)return;const u=o.let("valid",!0),p=o.name("_valid");if(f(),n.reset(),c&&d){const _=o.let("ifClause");n.setParams({ifClause:_}),o.if(p,g("then",_),g("else",_))}else c?o.if(p,g("then")):o.if((0,e.not)(p),g("else"));n.pass(u,()=>n.error(!0));function f(){const _=n.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},p);n.mergeEvaluated(_)}function g(_,v){return()=>{const m=n.subschema({keyword:_},p);o.assign(u,p),n.mergeValidEvaluated(m,u),v?o.assign(v,(0,e._)`${_}`):n.setParams({ifClause:_})}}}};function r(n,o){const i=n.schema[o];return i!==void 0&&!(0,t.alwaysValidSchema)(n,i)}return vr.default=s,vr}var yr={},vc;function bv(){if(vc)return yr;vc=1,Object.defineProperty(yr,"__esModule",{value:!0});const e=we(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:a,parentSchema:s,it:r}){s.if===void 0&&(0,e.checkStrictMode)(r,`"${a}" without "if" is ignored`)}};return yr.default=t,yr}var yc;function _v(){if(yc)return ir;yc=1,Object.defineProperty(ir,"__esModule",{value:!0});const e=Lu(),t=nv(),a=Du(),s=ov(),r=iv(),n=lv(),o=cv(),i=Nu(),l=dv(),c=uv(),d=pv(),u=fv(),p=hv(),f=mv(),g=gv(),_=bv();function v(m=!1){const h=[d.default,u.default,p.default,f.default,g.default,_.default,o.default,i.default,n.default,l.default,c.default];return m?h.push(t.default,s.default):h.push(e.default,a.default),h.push(r.default),h}return ir.default=v,ir}var wr={},xr={},wc;function vv(){if(wc)return xr;wc=1,Object.defineProperty(xr,"__esModule",{value:!0});const e=_e(),a={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:s})=>(0,e.str)`must match format "${s}"`,params:({schemaCode:s})=>(0,e._)`{format: ${s}}`},code(s,r){const{gen:n,data:o,$data:i,schema:l,schemaCode:c,it:d}=s,{opts:u,errSchemaPath:p,schemaEnv:f,self:g}=d;if(!u.validateFormats)return;i?_():v();function _(){const m=n.scopeValue("formats",{ref:g.formats,code:u.code.formats}),h=n.const("fDef",(0,e._)`${m}[${c}]`),b=n.let("fType"),w=n.let("format");n.if((0,e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`,()=>n.assign(b,(0,e._)`${h}.type || "string"`).assign(w,(0,e._)`${h}.validate`),()=>n.assign(b,(0,e._)`"string"`).assign(w,h)),s.fail$data((0,e.or)(y(),T()));function y(){return u.strictSchema===!1?e.nil:(0,e._)`${c} && !${w}`}function T(){const A=f.$async?(0,e._)`(${h}.async ? await ${w}(${o}) : ${w}(${o}))`:(0,e._)`${w}(${o})`,S=(0,e._)`(typeof ${w} == "function" ? ${A} : ${w}.test(${o}))`;return(0,e._)`${w} && ${w} !== true && ${b} === ${r} && !${S}`}}function v(){const m=g.formats[l];if(!m){y();return}if(m===!0)return;const[h,b,w]=T(m);h===r&&s.pass(A());function y(){if(u.strictSchema===!1){g.logger.warn(S());return}throw new Error(S());function S(){return`unknown format "${l}" ignored in schema at path "${p}"`}}function T(S){const x=S instanceof RegExp?(0,e.regexpCode)(S):u.code.formats?(0,e._)`${u.code.formats}${(0,e.getProperty)(l)}`:void 0,E=n.scopeValue("formats",{key:l,ref:S,code:x});return typeof S=="object"&&!(S instanceof RegExp)?[S.type||"string",S.validate,(0,e._)`${E}.validate`]:["string",S,E]}function A(){if(typeof m=="object"&&!(m instanceof RegExp)&&m.async){if(!f.$async)throw new Error("async format in sync schema");return(0,e._)`await ${w}(${o})`}return typeof b=="function"?(0,e._)`${w}(${o})`:(0,e._)`${w}.test(${o})`}}}};return xr.default=a,xr}var xc;function yv(){if(xc)return wr;xc=1,Object.defineProperty(wr,"__esModule",{value:!0});const t=[vv().default];return wr.default=t,wr}var Ea={},Tc;function wv(){return Tc||(Tc=1,Object.defineProperty(Ea,"__esModule",{value:!0}),Ea.contentVocabulary=Ea.metadataVocabulary=void 0,Ea.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],Ea.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),Ea}var Sc;function xv(){if(Sc)return Gs;Sc=1,Object.defineProperty(Gs,"__esModule",{value:!0});const e=V0(),t=rv(),a=_v(),s=yv(),r=wv(),n=[e.default,t.default,(0,a.default)(),s.default,r.metadataVocabulary,r.contentVocabulary];return Gs.default=n,Gs}var Tr={},ss={},Ec;function Tv(){if(Ec)return ss;Ec=1,Object.defineProperty(ss,"__esModule",{value:!0}),ss.DiscrError=void 0;var e;return(function(t){t.Tag="tag",t.Mapping="mapping"})(e||(ss.DiscrError=e={})),ss}var kc;function Sv(){if(kc)return Tr;kc=1,Object.defineProperty(Tr,"__esModule",{value:!0});const e=_e(),t=Tv(),a=Wo(),s=mn(),r=we(),o={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:i,tagName:l}})=>i===t.DiscrError.Tag?`tag "${l}" must be string`:`value of tag "${l}" must be in oneOf`,params:({params:{discrError:i,tag:l,tagName:c}})=>(0,e._)`{error: ${i}, tag: ${c}, tagValue: ${l}}`},code(i){const{gen:l,data:c,schema:d,parentSchema:u,it:p}=i,{oneOf:f}=u;if(!p.opts.discriminator)throw new Error("discriminator: requires discriminator option");const g=d.propertyName;if(typeof g!="string")throw new Error("discriminator: requires propertyName");if(d.mapping)throw new Error("discriminator: mapping is not supported");if(!f)throw new Error("discriminator: requires oneOf keyword");const _=l.let("valid",!1),v=l.const("tag",(0,e._)`${c}${(0,e.getProperty)(g)}`);l.if((0,e._)`typeof ${v} == "string"`,()=>m(),()=>i.error(!1,{discrError:t.DiscrError.Tag,tag:v,tagName:g})),i.ok(_);function m(){const w=b();l.if(!1);for(const y in w)l.elseIf((0,e._)`${v} === ${y}`),l.assign(_,h(w[y]));l.else(),i.error(!1,{discrError:t.DiscrError.Mapping,tag:v,tagName:g}),l.endIf()}function h(w){const y=l.name("valid"),T=i.subschema({keyword:"oneOf",schemaProp:w},y);return i.mergeEvaluated(T,e.Name),y}function b(){var w;const y={},T=S(u);let A=!0;for(let $=0;$<f.length;$++){let C=f[$];if(C?.$ref&&!(0,r.schemaHasRulesButRef)(C,p.self.RULES)){const U=C.$ref;if(C=a.resolveRef.call(p.self,p.schemaEnv.root,p.baseId,U),C instanceof a.SchemaEnv&&(C=C.schema),C===void 0)throw new s.default(p.opts.uriResolver,p.baseId,U)}const R=(w=C?.properties)===null||w===void 0?void 0:w[g];if(typeof R!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${g}"`);A=A&&(T||S(C)),x(R,$)}if(!A)throw new Error(`discriminator: "${g}" must be required`);return y;function S({required:$}){return Array.isArray($)&&$.includes(g)}function x($,C){if($.const)E($.const,C);else if($.enum)for(const R of $.enum)E(R,C);else throw new Error(`discriminator: "properties/${g}" must have "const" or "enum"`)}function E($,C){if(typeof $!="string"||$ in y)throw new Error(`discriminator: "${g}" values must be unique strings`);y[$]=C}}}};return Tr.default=o,Tr}const Ev="http://json-schema.org/draft-07/schema#",kv="http://json-schema.org/draft-07/schema#",Av="Core schema meta-schema",Pv={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},Cv=["object","boolean"],Ov={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},$v={$schema:Ev,$id:kv,title:Av,definitions:Pv,type:Cv,properties:Ov,default:!0};var Ac;function Mv(){return Ac||(Ac=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const a=U0(),s=xv(),r=Sv(),n=$v,o=["/properties"],i="http://json-schema.org/draft-07/schema";class l extends a.default{_addVocabularies(){super._addVocabularies(),s.default.forEach(g=>this.addVocabulary(g)),this.opts.discriminator&&this.addKeyword(r.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const g=this.opts.$data?this.$dataMetaSchema(n,o):n;this.addMetaSchema(g,i,!1),this.refs["http://json-schema.org/schema"]=i}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(i)?i:void 0)}}t.Ajv=l,e.exports=t=l,e.exports.Ajv=l,Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var c=hn();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return c.KeywordCxt}});var d=_e();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return d._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return d.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return d.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return d.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return d.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return d.CodeGen}});var u=Yo();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return u.default}});var p=mn();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return p.default}})})(zs,zs.exports)),zs.exports}var Rv=Mv();const Lv=hu(Rv),Dv={$id:"gameModeRules",type:"object",required:["betTypes","requiredBetTypes","maxBetsPerType","maxBetsTotal","minBetsTotal","stakeRule","stakeMin","allowPartialSubmit","allowBetModification","lockOnFirstBet","oneBetPerMatchPerType"],properties:{betTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},minItems:1,description:"Allowed bet types for this game mode"},requiredBetTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},description:"Bet types the user MUST place. Empty = no requirement."},maxBetsPerType:{type:"integer",minimum:-1,description:"Max bets per bet type per match. -1 = unlimited."},maxBetsTotal:{type:"integer",minimum:-1,description:"Max total bets across all matches. -1 = unlimited."},minBetsTotal:{type:"integer",minimum:0,description:"Min total bets required before submission. 0 = none."},stakeRule:{type:"string",enum:["FREE","SPEND_ALL","MIN_MAX"],description:"FREE = any amount | SPEND_ALL = must use entire TD$ | MIN_MAX = within range"},stakeMin:{type:["number","null"],minimum:0,description:"Min stake per bet. null = no minimum."},stakeMax:{type:["number","null"],minimum:0,description:"Max stake per bet. null = no maximum."},allowPartialSubmit:{type:"boolean",description:"Can user submit with incomplete lineup?"},allowBetModification:{type:"boolean",description:"Can user change/remove bets after placing?"},lockOnFirstBet:{type:"boolean",description:"Does placing first bet lock user into the tournament?"},oneBetPerMatchPerType:{type:"boolean",description:"Restrict to one bet per match per bet type?"}},additionalProperties:!1},Nv={$id:"gameModeScoring",type:"object",required:["method","rankBy","penalizeMissing"],properties:{method:{type:"string",enum:["PAYOUT_SUM","PROFIT","WIN_RATE","CUSTOM"],description:"Primary scoring method"},rankBy:{type:"array",items:{type:"string"},minItems:1,description:"Ordered tiebreaker fields"},bonuses:{type:"array",items:{type:"object",properties:{condition:{type:"string"},points:{type:"number"},label:{type:"string"}}},description:"Bonus scoring rules"},penalizeMissing:{type:"boolean",description:"Penalize users who did not place all required bets?"}},additionalProperties:!1},Iu=new Lv({allErrors:!0}),Pc=Iu.compile(Dv),Cc=Iu.compile(Nv),Iv=e=>{const t=[];Pc(e.rules)||Pc.errors.forEach(n=>{t.push(`rules${n.instancePath}: ${n.message}`)}),Cc(e.scoring)||Cc.errors.forEach(n=>{t.push(`scoring${n.instancePath}: ${n.message}`)});const r=e.rules;return r.requiredBetTypes.forEach(n=>{r.betTypes.includes(n)||t.push(`requiredBetTypes contains "${n}" which is not in betTypes`)}),r.stakeRule==="MIN_MAX"&&r.stakeMin==null&&r.stakeMax==null&&t.push("stakeRule is MIN_MAX but neither stakeMin nor stakeMax is set"),r.minBetsTotal>0&&r.requiredBetTypes.length>r.minBetsTotal&&t.push(`requiredBetTypes (${r.requiredBetTypes.length}) exceeds minBetsTotal (${r.minBetsTotal})`),{valid:t.length===0,errors:t}},Bv=e=>{const t=e.rules,a=e.scoring;return{"mode.id":e.id,"mode.label":e.label,"mode.description":e.description,"rules.betTypes":t.betTypes.join(", "),"rules.requiredBetTypes":t.requiredBetTypes.length>0?t.requiredBetTypes.join(", "):"(none)","rules.maxBetsPerType":t.maxBetsPerType===-1?"Unlimited":String(t.maxBetsPerType),"rules.maxBetsTotal":t.maxBetsTotal===-1?"Unlimited":String(t.maxBetsTotal),"rules.minBetsTotal":String(t.minBetsTotal),"rules.stakeRule":t.stakeRule,"rules.stakeMin":t.stakeMin!=null?String(t.stakeMin):"(none)","rules.stakeMax":t.stakeMax!=null?String(t.stakeMax):"(none)","rules.allowPartialSubmit":String(t.allowPartialSubmit),"rules.allowBetModification":String(t.allowBetModification),"rules.lockOnFirstBet":String(t.lockOnFirstBet),"rules.oneBetPerMatchPerType":String(t.oneBetPerMatchPerType),"scoring.method":a.method,"scoring.rankBy":a.rankBy.join(", "),"scoring.bonuses":a.bonuses.length>0?JSON.stringify(a.bonuses):"(none)","scoring.penalizeMissing":String(a.penalizeMissing),"ui.badge":e.getBadge()?`${e.getBadge().label} (${e.getBadge().color})`:"(none)","ui.emptyStateText":e.getEmptyStateText()}},Wr={DEFAULT:new hl,DEFAULT_FORMAT:new hl,SET_IT_AND_FORGET_IT:new A0},Oc=e=>Wr[e]||Wr.DEFAULT,Fv=()=>Object.keys(Wr),zv=()=>{const e={};return Object.entries(Wr).forEach(([t,a])=>{e[t]=Iv(a)}),e};typeof window<"u"&&(window.GameMode={get:Oc,modes:Fv,validate:zv,dump:e=>Bv(Oc(e))});class Hv extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ee.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name","data-active-count","data-td-dollars"]}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}handleLogoClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}handleCreateContestClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.CREATE_CONTEST",JSON.stringify({timestamp:Date.now()}))}render(){const t=Ee.isDark,a=this.getAttribute("data-user-name")||"Guest",s=this.getAttribute("data-active-count")||"0",r=parseFloat(this.getAttribute("data-td-dollars")||"0"),n=r>=1e3?`${Math.round(r/100)/10}K`:Math.round(r).toLocaleString();this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        ${ba()}

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
    `;const o=this.shadowRoot.querySelector("#logoLink"),i=this.shadowRoot.querySelector("#profileIcon"),l=this.shadowRoot.querySelector("#createContestBtn");o&&o.addEventListener("click",c=>this.handleLogoClick(c)),i&&i.addEventListener("click",c=>this.handleProfileClick(c)),l&&l.addEventListener("click",c=>this.handleCreateContestClick(c))}}customElements.define("bma-app-head-top",Hv);class jv extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ee.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count"]}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&(t==="data-selected-tab"&&(this.selectedTab=s||"head_mid_lobby"),this.render())}handleTabClick(t,a){this.selectedTab=t,this.setAttribute("data-selected-tab",t),ce.publish(a,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=Ee.isDark,a=[{name:"head_mid_lobby",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}];parseInt(this.getAttribute("data-active-count"));const s=0,r=n=>{const o=this.selectedTab===n.name,i=n.name==="head_mid_my";return`
        <div
          class="nav-item ${o?"nav-selected":"nav-unselected"}"
          data-tab="${n.name}"
          role="button"
          tabindex="0"
          aria-label="${n.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${n.iconVar}"></div>
            ${i?`<span class="nav-badge">${s}</span>`:""}
          </div>
          <span class="nav-caption">${n.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        ${ba()}

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
        @media ${_u.mobile} {
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
        ${a.map(n=>r(n)).join("")}
      </div>
    `,a.forEach(n=>{const o=this.shadowRoot.querySelector(`[data-tab="${n.name}"]`);o&&(o.addEventListener("click",()=>this.handleTabClick(n.name,n.topic)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleTabClick(n.name,n.topic))}))})}}customElements.define("bma-app-head-mid",jv);class Uv extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ee.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,a,s){if(this.shadowRoot&&a!==s){if(t==="data-selected-chip"){if(this.selectedChip=s||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,a){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),ce.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:a,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(a=>{const s=a.getAttribute("data-chip")===this.selectedChip;a.classList.toggle("chip-selected",s),a.classList.toggle("chip-unselected",!s)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(".head-sports-container"),r=this.shadowRoot?.querySelector("#navPrev"),n=this.shadowRoot?.querySelector("#navNext");if(!t||!a||!s||!r||!n)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),i=o>8,l=t.scrollLeft<=4,c=t.scrollLeft>=o-4;s.classList.toggle("rail-has-overflow",i),t.classList.toggle("has-scroll",i),a.classList.toggle("has-overflow",i),a.classList.toggle("has-left-overflow",i&&!l),a.classList.toggle("has-right-overflow",i&&!c),r.classList.toggle("nav-disabled",!i||l),n.classList.toggle("nav-disabled",!i||c),r.setAttribute("aria-disabled",String(!i||l)),n.setAttribute("aria-disabled",String(!i||c)),r.tabIndex=!i||l?-1:0,n.tabIndex=!i||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!a||!s)return;const r=a.getBoundingClientRect(),n=s.getBoundingClientRect(),o=t.scrollWidth-t.clientWidth;if(n.left>=r.left&&n.right<=r.right)return;const i=12;let l;n.left<r.left?l=t.scrollLeft+(n.left-r.left)-i:l=t.scrollLeft+(n.right-r.right)+i,l=Math.max(0,Math.min(l,o)),!(Math.abs(t.scrollLeft-l)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:l,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const a=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=a-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const a=[...t.querySelectorAll(".sport-chip")];if(!a.length)return;const s=Math.max(0,t.scrollWidth-t.clientWidth);if(s<=8)return;const r=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,n=t.scrollLeft;let o=n,i=Number.POSITIVE_INFINITY;a.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-r,s)),d=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-t.clientWidth+r,s));[c,d].forEach(u=>{const p=Math.abs(u-n);p<i&&(i=p,o=u)})}),!(i<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",s=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=s.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),ce.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const a=()=>{if(!this.isPointerDown)return;const s=Date.now()-this.dragStartTime,r=this.dragDistance>10||this.dragDistance>4&&s>180;this.isPointerDown=!1,t.style.cursor="grab",r&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",a),t.addEventListener("mouseup",a),t.addEventListener("mousemove",s=>{if(!this.isPointerDown)return;s.preventDefault();const n=(s.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(n)),t.scrollLeft=this.dragStartScrollLeft-n}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=Ee.isDark,r=(ve().appMeta?.sports||[]).filter(f=>f.active===!0),n=["NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],o=[...r].sort((f,g)=>{const _=f.title||f.description||"",v=g.title||g.description||"",m=n.indexOf(_),h=n.indexOf(v);return m!==-1&&h!==-1?m-h:m!==-1?-1:h!==-1?1:_.toLowerCase().localeCompare(v.toLowerCase())}),i=o.findIndex(f=>(f.title||f.description)==="NFL");if(i!==-1){const[f]=o.splice(i,1);let g=-1;o.forEach((v,m)=>{String(v.key||"").startsWith("soccer_fifa_world_cup")&&(g=m)});const _=g!==-1?g+1:o.length;o.splice(_,0,f)}const l=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...o],c=f=>{const g=this.selectedChip===f.key,_=f.key==="all";let v="";return _?v='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':v=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`,`
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
        ${De()}
        ${ba()}

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
    `,l.forEach(f=>{const g=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const d=this.shadowRoot.querySelector("#navPrev"),u=this.shadowRoot.querySelector("#navNext");d&&d.addEventListener("click",()=>this.scrollToPrev()),u&&u.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const p=this.shadowRoot.querySelector(".chips-container");p&&(p.scrollLeft=0),requestAnimationFrame(()=>{p&&(p.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",Uv);class qv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-matches","data-sync-theme"]}connectedCallback(){this._unsub=Ee.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&this.render()}get matches(){const t=this.getAttribute("data-matches");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ve.find(s=>s.key===t)?.group||"default"}_parseScoreboard(t){const a=t.scoreboard_data;if(!a)return null;try{return typeof a=="string"?JSON.parse(a):a}catch{return null}}_getMatchDisplay(t){const a=this._parseScoreboard(t)||{},s=parseInt(a.home_score||0),r=parseInt(a.away_score||0),n=a.period||0,o=String(a.time_remaining||"").trim(),i=o.toLowerCase(),l=s>0||r>0||n>0,c=String(t.status||"").toUpperCase()==="COMPLETED"||i==="final",d=t.scheduled_at||t.start_time||"";let u=!1;if(d){const h=d.includes("Z")||/[+-]\d{2}:\d{2}$/.test(d),b=new Date(h?d:d+"Z").getTime();isNaN(b)||(u=b<=Date.now())}const f=!c&&(l||o&&i!=="scheduled"&&i!=="final"||u),g=t.home_team_id||t.home_team||"Home",_=t.away_team_id||t.away_team||"Away";if(c)return{homeName:g,awayName:_,homeScore:s,awayScore:r,statusLabel:"FINAL",statusClass:"final",showScores:!0};if(f)return{homeName:g,awayName:_,homeScore:s,awayScore:r,statusLabel:o&&i!=="in progress"?o:"LIVE",statusClass:"live",showScores:!0};const v=t.scheduled_at||t.start_time||t.status_time;let m="UPCOMING";if(v)try{const h=v.includes("Z")||/[+-]\d{2}:\d{2}$/.test(v),b=new Date(h?v:v+"Z");isNaN(b.getTime())||(m=b.toLocaleString(void 0,{weekday:"short",hour:"numeric",minute:"2-digit"}))}catch{}return{homeName:g,awayName:_,homeScore:0,awayScore:0,statusLabel:m,statusClass:"upcoming",showScores:!1}}render(){const t=Date.now(),a=720*60*1e3,s=1440*60*1e3,n=this.matches.map(c=>({match:c,display:this._getMatchDisplay(c)})).filter(c=>c.display!==null).filter(c=>{const d=c.display.statusClass;if(d==="live")return!0;const u=new Date(c.match.scheduled_at||c.match.status_time||0).getTime();return u?d==="final"?t-u<=a:d==="upcoming"?u-t<=s&&u>=t:!1:!1}),o={live:0,final:1,upcoming:2};n.sort((c,d)=>{const u=o[c.display.statusClass]??9,p=o[d.display.statusClass]??9;if(u!==p)return u-p;const f=new Date(c.match.scheduled_at||c.match.status_time||0).getTime(),g=new Date(d.match.scheduled_at||d.match.status_time||0).getTime();return c.display.statusClass==="upcoming"?f-g:g-f});const i=n.slice(0,40);if(i.length===0){this.shadowRoot.innerHTML="";return}const l=i.map(({match:c,display:d})=>{const u=this._sportGroup(c.sport_id),p=f=>d.showScores?`<span class="score-pill__score">${f}</span>`:"";return`
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
        `,this.shadowRoot.querySelectorAll(".score-pill").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.matchGuid;ce.publish("SCORES.MATCH_CLICK",JSON.stringify({matchGuid:d,timestamp:Date.now()}))})})}_abbr(t){if(!t)return"";const a=String(t);if(a.length<=14)return a;const s=a.split(" ");return s.length>1?s[s.length-1].slice(0,14):a.slice(0,14)}}customElements.define("bma-scores-banner",qv);class Gv extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ee.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count"]}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&(t==="data-selected-item"&&(this.selectedItem=s||"foot_all_sports"),this.render())}handleItemClick(t,a){this.selectedItem=t,this.setAttribute("data-selected-item",t),ce.publish(a,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){Ee.theme;const t=Ee.isDark,a=[{name:"foot_all_sports",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}];parseInt(this.getAttribute("data-active-count"));const s=0,r=n=>{const o=this.selectedItem===n.name,i=n.name==="foot_my_tourneys";return`
        <div
          class="nav-item ${o?"nav-selected":"nav-unselected"}"
          data-item="${n.name}"
          role="button"
          tabindex="0"
          aria-label="${n.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${n.iconVar}"></div>
            ${i?`<span class="nav-badge">${s}</span>`:""}
          </div>
          <span class="nav-caption">${n.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${De()}
        ${ba()}

        :host {
          display: none; /* Hidden by default */
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 248;
          background: var(--surface-sticky, #141414);
          border-top: 1px solid var(--card-border, rgba(255, 255, 255, 0.08));
          box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.3), var(--shadow-inset-top, inset 0 1px 0 rgba(255,255,255,0.05));
        }

        /* Show only on mobile */
        @media ${_u.mobile} {
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
        ${a.map(n=>r(n)).join("")}
      </div>
    `,a.forEach(n=>{const o=this.shadowRoot.querySelector(`[data-item="${n.name}"]`);o&&(o.addEventListener("click",()=>this.handleItemClick(n.name,n.topic)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleItemClick(n.name,n.topic))}))})}}customElements.define("bma-app-foot",Gv);class Vv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Ee.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}_doLogout(){ce.publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()}))}render(){let t="";try{t=ve().appSession?.session_app?.version||""}catch{}this.shadowRoot.innerHTML=`
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
        `;const a=this.shadowRoot.querySelector(".foot-logout");a&&a.addEventListener("click",()=>this._doLogout())}}customElements.define("bma-app-foot-branded",Vv);class Kv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,a,s){a!==s&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",a),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const a=t.bet||[];if(a.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const s=a[0],r=s.short_title||"Match Info N/A",o=Object.keys(s).filter(h=>h!=="short_title")[0]||"Unknown Team",i=s[o],l=i.odds||"N/A",c=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),u=parseFloat(i.payout||0).toFixed(2),p=i.reconciled!==!1,f=p&&parseFloat(u)>parseFloat(d),g=p&&parseFloat(u)<=parseFloat(d);let _="";p?f?_="win":g&&(_="loss"):_="unreconciled";const v=t.status_time?Ya.formatDateLocal(t.status_time):"";let m=o;if(c==="spread"&&i.point){const h=parseFloat(i.point)>0?`+${i.point}`:i.point;m=`${o} ${h}`}else c==="total"&&i.point&&(m=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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

      <div class="bet-existing-card ${_}">
        <div class="grid_header">
          <div class="match_desc">${r}</div>
          <div class="match_date">${v}</div>
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
    `}}customElements.define("bma-bet-existing",Kv);Es.init();window.BrandManager=Es;const $c=`
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

  <template id="sodapop_play" data-n55-sodapop-modal="true"
    data-n55-sodapop-size="xlarge" data-n55-sodapop-fullscreen="false"
    style="padding: 0;">
    <article class="play-cntr" data-current-tourn-guid="" data-current-tourn-action="">
      <div class="head-caption tourn-dashboard">
        <div class="head-caption__back" data-sodapop-close="true" role="button" tabindex="0" aria-label="Back">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
        <section class="head-caption__content">
          <h3 id="pop-play__tourn-caption--id" class="pop-play__tourn-caption">Tournament</h3>
          <p id="pop-play__tourn-tagline--id" class="pop-play__tourn-tagline">Loading...</p>
        </section>
      </div>

      <!-- Stats Dashboard -->
      <div class="dash-stats">
        <div class="dash-stat">
          <span class="dash-stat__label">TD$ Balance</span>
          <span class="dash-stat__value" id="dashboard-td-balance">TD$ 0</span>
          <div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--balance" style="width: 100%"></div></div>
        </div>
        <div class="dash-stat">
          <span class="dash-stat__label">At Risk</span>
          <span class="dash-stat__value dash-stat__value--pending" id="dashboard-td-pending">TD$ 0</span>
          <div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--pending" style="width: 0%"></div></div>
        </div>
        <div class="dash-stat">
          <span class="dash-stat__label">Rank</span>
          <span class="dash-stat__value" id="dashboard-rank"><span class="tourn-dashboard__rank-text">-/-</span></span>
          <div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--participants" style="width: 0%"></div></div>
        </div>
      </div>

      <nav class="dash-nav">
        <button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg><span>Info</span></button>
        <button id="btn-join__play--id" class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="visibility: hidden;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg><span>Play</span></button>
        <button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/></svg><span>Leaderboard</span></button>
      </nav>

<!-- Play sections (mutually exclusive, managed by showPlaySection helper) -->
<div id="play-section-INFO" class="play-section play-section--active">
    <div id="pop-play__caro-info-summary2--id"></div>
    <div id="pop-play__caro-info-summary1--id"></div>
    <div id="pop-play__caro-info-list--id"></div>
</div>
<div id="play-section-PLAY" class="play-section" style="display: none; padding-top: 8px;">
  <article class="bet-grid">
    <section class="bet-grid__select">
      <div id="game-mode-progress" style="display: none;"></div>
      <article class="select-grid"></article>
    </section>
    <div class="bet-grid__toggle-container">
      <button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle sections">
        <span class="bet-grid__toggle-text">Open Bet Slip</span>
      </button>
    </div>
    <aside class="bet-grid__slip" data-active-bet-tab="MYBETS">
      <nav class="bet-slip__tabs">
        <button class="bet-slip-tab" data-bet-tab="BETSLIP">Bet Slip</button>
        <button class="bet-slip-tab" data-bet-tab="MYBETS">My Bets</button>
      </nav>
      <section class="bet-grid__slip-BETSLIP" style="display: none;"
      data-bets-valid="false">
        <div class="bet-grid__slip-BETSLIP-content">
          <div class="bet-slip__empty">
            <p>Select odds to create a new bet slip</p>
          </div>
        </div>
        <output class="bet-grid__slip-BETSLIP-summary">
          <div class="summary-row summary-row--labels">
            <div class="summary-cell">TD$</div>
            <div class="summary-cell">Stake</div>
            <div class="summary-cell">Payout</div>
          </div>
          <div class="summary-row summary-row--values">
            <div id="summary-balance" class="summary-cell">0.00</div>
            <div id="summary-stake" class="summary-cell">0.00</div>
            <div id="summary-payout" class="summary-cell">0.00</div>
          </div>
        </output>
        <button class="bet-grid__slip-BETSLIP-cta" data-publish-betslip="COREBETSLIP.BET">BET!</button>
      </section>
      <div class="bet-grid__slip-MYBETS">
      </div>
    </aside>
  </article>
</div>
<div id="play-section-LEADERBOARD" class="play-section" style="display: none;">
  <div id="pop-play__caro-leaderboard--id"></div>
</div>

      <br>
    </article>
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",$c)}):document.body.insertAdjacentHTML("beforeend",$c);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const gn=mh(k0);gn.config.devtools=!1;gn.use(_h());gn.use(Vr);gn.mount("#app");(function(){let t=!1;const a=o=>{if(!t)return;const i=o.target;i&&typeof i.closest=="function"&&i.closest("neodigm-sodapop")||o.preventDefault()},s=()=>{const o=t,i=!!document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']");if(t=i,document.body.style.touchAction=i?"none":"",document.documentElement.style.overscrollBehavior=i?"none":"",o&&!i){const l=document.querySelector("bma-app-foot");l&&l.setAttribute("data-selected-item","foot_all_sports");const c=document.querySelector("bma-app-head-mid");c&&c.setAttribute("data-selected-tab","head_mid_lobby")}},r=new MutationObserver(s),n=()=>{r.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]}),document.addEventListener("touchmove",a,{passive:!1,capture:!0}),s()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()})();document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(a=>{neodigmCarousel.init().nav({id:a.id,nav:"resize"},!1)})},303)})});
