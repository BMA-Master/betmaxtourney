(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function $a(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const be={},bs=[],gt=()=>{},Ro=()=>!1,An=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ua=e=>e.startsWith("onUpdate:"),Oe=Object.assign,Ha=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},El=Object.prototype.hasOwnProperty,fe=(e,t)=>El.call(e,t),ee=Array.isArray,_s=e=>Ws(e)==="[object Map]",Pn=e=>Ws(e)==="[object Set]",fr=e=>Ws(e)==="[object Date]",re=e=>typeof e=="function",Ae=e=>typeof e=="string",_t=e=>typeof e=="symbol",_e=e=>e!==null&&typeof e=="object",Lo=e=>(_e(e)||re(e))&&re(e.then)&&re(e.catch),Mo=Object.prototype.toString,Ws=e=>Mo.call(e),xl=e=>Ws(e).slice(8,-1),Io=e=>Ws(e)==="[object Object]",Ga=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ks=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Al=/-\w/g,tt=On(e=>e.replace(Al,t=>t.slice(1).toUpperCase())),Pl=/\B([A-Z])/g,Xt=On(e=>e.replace(Pl,"-$1").toLowerCase()),kn=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),jn=On(e=>e?`on${kn(e)}`:""),jt=(e,t)=>!Object.is(e,t),on=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Do=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},Ol=e=>{const t=parseFloat(e);return isNaN(t)?e:t},kl=e=>{const t=Ae(e)?Number(e):NaN;return isNaN(t)?e:t};let hr;const Cn=()=>hr||(hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ya(e){if(ee(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],a=Ae(n)?Ml(n):Ya(n);if(a)for(const r in a)t[r]=a[r]}return t}else if(Ae(e)||_e(e))return e}const Cl=/;(?![^(]*\))/g,Rl=/:([^]+)/,Ll=/\/\*[^]*?\*\//g;function Ml(e){const t={};return e.replace(Ll,"").split(Cl).forEach(s=>{if(s){const n=s.split(Rl);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Wt(e){let t="";if(Ae(e))t=e;else if(ee(e))for(let s=0;s<e.length;s++){const n=Wt(e[s]);n&&(t+=n+" ")}else if(_e(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dl=$a(Il);function No(e){return!!e||e===""}function Nl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=Rn(e[n],t[n]);return s}function Rn(e,t){if(e===t)return!0;let s=fr(e),n=fr(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=_t(e),n=_t(t),s||n)return e===t;if(s=ee(e),n=ee(t),s||n)return s&&n?Nl(e,t):!1;if(s=_e(e),n=_e(t),s||n){if(!s||!n)return!1;const a=Object.keys(e).length,r=Object.keys(t).length;if(a!==r)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(i&&!l||!i&&l||!Rn(e[o],t[o]))return!1}}return String(e)===String(t)}function Bo(e,t){return e.findIndex(s=>Rn(s,t))}const Fo=e=>!!(e&&e.__v_isRef===!0),$o=e=>Ae(e)?e:e==null?"":ee(e)||_e(e)&&(e.toString===Mo||!re(e.toString))?Fo(e)?$o(e.value):JSON.stringify(e,Uo,2):String(e),Uo=(e,t)=>Fo(t)?Uo(e,t.value):_s(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,a],r)=>(s[Kn(n,r)+" =>"]=a,s),{})}:Pn(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Kn(s))}:_t(t)?Kn(t):_e(t)&&!ee(t)&&!Io(t)?String(t):t,Kn=(e,t="")=>{var s;return _t(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Re;class Ho{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Re;try{return Re=this,t()}finally{Re=s}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){this._on>0&&--this._on===0&&(Re=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Go(e){return new Ho(e)}function Yo(){return Re}function Bl(e,t=!1){Re&&Re.cleanups.push(e)}let ve;const qn=new WeakSet;class zo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qn.has(this)&&(qn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ko(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mr(this),qo(this);const t=ve,s=at;ve=this,at=!0;try{return this.fn()}finally{Wo(this),ve=t,at=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ka(t);this.deps=this.depsTail=void 0,mr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ba(this)&&this.run()}get dirty(){return ba(this)}}let jo=0,Cs,Rs;function Ko(e,t=!1){if(e.flags|=8,t){e.next=Rs,Rs=e;return}e.next=Cs,Cs=e}function za(){jo++}function ja(){if(--jo>0)return;if(Rs){let t=Rs;for(Rs=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Cs;){let t=Cs;for(Cs=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function qo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Wo(e){let t,s=e.depsTail,n=s;for(;n;){const a=n.prevDep;n.version===-1?(n===s&&(s=a),Ka(n),Fl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=a}e.deps=t,e.depsTail=s}function ba(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===$s)||(e.globalVersion=$s,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ba(e))))return;e.flags|=2;const t=e.dep,s=ve,n=at;ve=e,at=!0;try{qo(e);const a=e.fn(e._value);(t.version===0||jt(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{ve=s,at=n,Wo(e),e.flags&=-3}}function Ka(e,t=!1){const{dep:s,prevSub:n,nextSub:a}=e;if(n&&(n.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Ka(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Fl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let at=!0;const Jo=[];function Lt(){Jo.push(at),at=!1}function Mt(){const e=Jo.pop();at=e===void 0?!0:e}function mr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=ve;ve=void 0;try{t()}finally{ve=s}}}let $s=0;class $l{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!at||ve===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==ve)s=this.activeLink=new $l(ve,this),ve.deps?(s.prevDep=ve.depsTail,ve.depsTail.nextDep=s,ve.depsTail=s):ve.deps=ve.depsTail=s,Xo(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=ve.depsTail,s.nextDep=void 0,ve.depsTail.nextDep=s,ve.depsTail=s,ve.deps===s&&(ve.deps=n)}return s}trigger(t){this.version++,$s++,this.notify(t)}notify(t){za();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{ja()}}}function Xo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Xo(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const fn=new WeakMap,ls=Symbol(""),_a=Symbol(""),Us=Symbol("");function Le(e,t,s){if(at&&ve){let n=fn.get(e);n||fn.set(e,n=new Map);let a=n.get(s);a||(n.set(s,a=new qa),a.map=n,a.key=s),a.track()}}function Ot(e,t,s,n,a,r){const o=fn.get(e);if(!o){$s++;return}const i=l=>{l&&l.trigger()};if(za(),t==="clear")o.forEach(i);else{const l=ee(e),c=l&&Ga(s);if(l&&s==="length"){const d=Number(n);o.forEach((u,p)=>{(p==="length"||p===Us||!_t(p)&&p>=d)&&i(u)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),c&&i(o.get(Us)),t){case"add":l?c&&i(o.get("length")):(i(o.get(ls)),_s(e)&&i(o.get(_a)));break;case"delete":l||(i(o.get(ls)),_s(e)&&i(o.get(_a)));break;case"set":_s(e)&&i(o.get(ls));break}}ja()}function Ul(e,t){const s=fn.get(e);return s&&s.get(t)}function ps(e){const t=ue(e);return t===e?t:(Le(t,"iterate",Us),rt(e)?t:t.map(Be))}function Wa(e){return Le(e=ue(e),"iterate",Us),e}const Hl={__proto__:null,[Symbol.iterator](){return Wn(this,Symbol.iterator,Be)},concat(...e){return ps(this).concat(...e.map(t=>ee(t)?ps(t):t))},entries(){return Wn(this,"entries",e=>(e[1]=Be(e[1]),e))},every(e,t){return Tt(this,"every",e,t,void 0,arguments)},filter(e,t){return Tt(this,"filter",e,t,s=>s.map(Be),arguments)},find(e,t){return Tt(this,"find",e,t,Be,arguments)},findIndex(e,t){return Tt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Tt(this,"findLast",e,t,Be,arguments)},findLastIndex(e,t){return Tt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Tt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Vn(this,"includes",e)},indexOf(...e){return Vn(this,"indexOf",e)},join(e){return ps(this).join(e)},lastIndexOf(...e){return Vn(this,"lastIndexOf",e)},map(e,t){return Tt(this,"map",e,t,void 0,arguments)},pop(){return Es(this,"pop")},push(...e){return Es(this,"push",e)},reduce(e,...t){return gr(this,"reduce",e,t)},reduceRight(e,...t){return gr(this,"reduceRight",e,t)},shift(){return Es(this,"shift")},some(e,t){return Tt(this,"some",e,t,void 0,arguments)},splice(...e){return Es(this,"splice",e)},toReversed(){return ps(this).toReversed()},toSorted(e){return ps(this).toSorted(e)},toSpliced(...e){return ps(this).toSpliced(...e)},unshift(...e){return Es(this,"unshift",e)},values(){return Wn(this,"values",Be)}};function Wn(e,t,s){const n=Wa(e),a=n[t]();return n!==e&&!rt(e)&&(a._next=a.next,a.next=()=>{const r=a._next();return r.done||(r.value=s(r.value)),r}),a}const Gl=Array.prototype;function Tt(e,t,s,n,a,r){const o=Wa(e),i=o!==e&&!rt(e),l=o[t];if(l!==Gl[t]){const u=l.apply(e,r);return i?Be(u):u}let c=s;o!==e&&(i?c=function(u,p){return s.call(this,Be(u),p,e)}:s.length>2&&(c=function(u,p){return s.call(this,u,p,e)}));const d=l.call(o,c,n);return i&&a?a(d):d}function gr(e,t,s,n){const a=Wa(e);let r=s;return a!==e&&(rt(e)?s.length>3&&(r=function(o,i,l){return s.call(this,o,i,l,e)}):r=function(o,i,l){return s.call(this,o,Be(i),l,e)}),a[t](r,...n)}function Vn(e,t,s){const n=ue(e);Le(n,"iterate",Us);const a=n[t](...s);return(a===-1||a===!1)&&Xa(s[0])?(s[0]=ue(s[0]),n[t](...s)):a}function Es(e,t,s=[]){Lt(),za();const n=ue(e)[t].apply(e,s);return ja(),Mt(),n}const Yl=$a("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t));function zl(e){_t(e)||(e=String(e));const t=ue(this);return Le(t,"has",e),t.hasOwnProperty(e)}class Zo{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const a=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return r;if(s==="__v_raw")return n===(a?r?ec:ni:r?si:ti).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=ee(t);if(!a){let l;if(o&&(l=Hl[s]))return l;if(s==="hasOwnProperty")return zl}const i=Reflect.get(t,s,xe(t)?t:n);if((_t(s)?Qo.has(s):Yl(s))||(a||Le(t,"get",s),r))return i;if(xe(i)){const l=o&&Ga(s)?i:i.value;return a&&_e(l)?va(l):l}return _e(i)?a?va(i):Ct(i):i}}class ei extends Zo{constructor(t=!1){super(!1,t)}set(t,s,n,a){let r=t[s];if(!this._isShallow){const l=us(r);if(!rt(n)&&!us(n)&&(r=ue(r),n=ue(n)),!ee(t)&&xe(r)&&!xe(n))return l||(r.value=n),!0}const o=ee(t)&&Ga(s)?Number(s)<t.length:fe(t,s),i=Reflect.set(t,s,n,xe(t)?t:a);return t===ue(a)&&(o?jt(n,r)&&Ot(t,"set",s,n):Ot(t,"add",s,n)),i}deleteProperty(t,s){const n=fe(t,s);t[s];const a=Reflect.deleteProperty(t,s);return a&&n&&Ot(t,"delete",s,void 0),a}has(t,s){const n=Reflect.has(t,s);return(!_t(s)||!Qo.has(s))&&Le(t,"has",s),n}ownKeys(t){return Le(t,"iterate",ee(t)?"length":ls),Reflect.ownKeys(t)}}class jl extends Zo{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Kl=new ei,ql=new jl,Wl=new ei(!0);const ya=e=>e,Qs=e=>Reflect.getPrototypeOf(e);function Vl(e,t,s){return function(...n){const a=this.__v_raw,r=ue(a),o=_s(r),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...n),d=s?ya:t?Ta:Be;return!t&&Le(r,"iterate",l?_a:ls),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:i?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Zs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jl(e,t){const s={get(a){const r=this.__v_raw,o=ue(r),i=ue(a);e||(jt(a,i)&&Le(o,"get",a),Le(o,"get",i));const{has:l}=Qs(o),c=t?ya:e?Ta:Be;if(l.call(o,a))return c(r.get(a));if(l.call(o,i))return c(r.get(i));r!==o&&r.get(a)},get size(){const a=this.__v_raw;return!e&&Le(ue(a),"iterate",ls),a.size},has(a){const r=this.__v_raw,o=ue(r),i=ue(a);return e||(jt(a,i)&&Le(o,"has",a),Le(o,"has",i)),a===i?r.has(a):r.has(a)||r.has(i)},forEach(a,r){const o=this,i=o.__v_raw,l=ue(i),c=t?ya:e?Ta:Be;return!e&&Le(l,"iterate",ls),i.forEach((d,u)=>a.call(r,c(d),c(u),o))}};return Oe(s,e?{add:Zs("add"),set:Zs("set"),delete:Zs("delete"),clear:Zs("clear")}:{add(a){!t&&!rt(a)&&!us(a)&&(a=ue(a));const r=ue(this);return Qs(r).has.call(r,a)||(r.add(a),Ot(r,"add",a,a)),this},set(a,r){!t&&!rt(r)&&!us(r)&&(r=ue(r));const o=ue(this),{has:i,get:l}=Qs(o);let c=i.call(o,a);c||(a=ue(a),c=i.call(o,a));const d=l.call(o,a);return o.set(a,r),c?jt(r,d)&&Ot(o,"set",a,r):Ot(o,"add",a,r),this},delete(a){const r=ue(this),{has:o,get:i}=Qs(r);let l=o.call(r,a);l||(a=ue(a),l=o.call(r,a)),i&&i.call(r,a);const c=r.delete(a);return l&&Ot(r,"delete",a,void 0),c},clear(){const a=ue(this),r=a.size!==0,o=a.clear();return r&&Ot(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=Vl(a,e,t)}),s}function Va(e,t){const s=Jl(e,t);return(n,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?n:Reflect.get(fe(s,a)&&a in n?s:n,a,r)}const Xl={get:Va(!1,!1)},Ql={get:Va(!1,!0)},Zl={get:Va(!0,!1)};const ti=new WeakMap,si=new WeakMap,ni=new WeakMap,ec=new WeakMap;function tc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sc(e){return e.__v_skip||!Object.isExtensible(e)?0:tc(xl(e))}function Ct(e){return us(e)?e:Ja(e,!1,Kl,Xl,ti)}function ai(e){return Ja(e,!1,Wl,Ql,si)}function va(e){return Ja(e,!0,ql,Zl,ni)}function Ja(e,t,s,n,a){if(!_e(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=sc(e);if(r===0)return e;const o=a.get(e);if(o)return o;const i=new Proxy(e,r===2?n:s);return a.set(e,i),i}function cs(e){return us(e)?cs(e.__v_raw):!!(e&&e.__v_isReactive)}function us(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function Xa(e){return e?!!e.__v_raw:!1}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function Qa(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&Do(e,"__v_skip",!0),e}const Be=e=>_e(e)?Ct(e):e,Ta=e=>_e(e)?va(e):e;function xe(e){return e?e.__v_isRef===!0:!1}function Xe(e){return ri(e,!1)}function nc(e){return ri(e,!0)}function ri(e,t){return xe(e)?e:new ac(e,t)}class ac{constructor(t,s){this.dep=new qa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ue(t),this._value=s?t:Be(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||rt(t)||us(t);t=n?t:ue(t),jt(t,s)&&(this._rawValue=t,this._value=n?t:Be(t),this.dep.trigger())}}function Kt(e){return xe(e)?e.value:e}const rc={get:(e,t,s)=>t==="__v_raw"?e:Kt(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const a=e[t];return xe(a)&&!xe(s)?(a.value=s,!0):Reflect.set(e,t,s,n)}};function oi(e){return cs(e)?e:new Proxy(e,rc)}function oc(e){const t=ee(e)?new Array(e.length):{};for(const s in e)t[s]=lc(e,s);return t}class ic{constructor(t,s,n){this._object=t,this._key=s,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ul(ue(this._object),this._key)}}function lc(e,t,s){const n=e[t];return xe(n)?n:new ic(e,t,s)}class cc{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new qa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return Ko(this,!0),!0}get value(){const t=this.dep.track();return Vo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function dc(e,t,s=!1){let n,a;return re(e)?n=e:(n=e.get,a=e.set),new cc(n,a,s)}const en={},hn=new WeakMap;let as;function uc(e,t=!1,s=as){if(s){let n=hn.get(s);n||hn.set(s,n=[]),n.push(e)}}function pc(e,t,s=be){const{immediate:n,deep:a,once:r,scheduler:o,augmentJob:i,call:l}=s,c=y=>a?y:rt(y)||a===!1||a===0?kt(y,1):kt(y);let d,u,p,f,b=!1,v=!1;if(xe(e)?(u=()=>e.value,b=rt(e)):cs(e)?(u=()=>c(e),b=!0):ee(e)?(v=!0,b=e.some(y=>cs(y)||rt(y)),u=()=>e.map(y=>{if(xe(y))return y.value;if(cs(y))return c(y);if(re(y))return l?l(y,2):y()})):re(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){Lt();try{p()}finally{Mt()}}const y=as;as=d;try{return l?l(e,3,[f]):e(f)}finally{as=y}}:u=gt,t&&a){const y=u,T=a===!0?1/0:a;u=()=>kt(y(),T)}const _=Yo(),h=()=>{d.stop(),_&&_.active&&Ha(_.effects,d)};if(r&&t){const y=t;t=(...T)=>{y(...T),h()}}let m=v?new Array(e.length).fill(en):en;const g=y=>{if(!(!(d.flags&1)||!d.dirty&&!y))if(t){const T=d.run();if(a||b||(v?T.some((A,O)=>jt(A,m[O])):jt(T,m))){p&&p();const A=as;as=d;try{const O=[T,m===en?void 0:v&&m[0]===en?[]:m,f];m=T,l?l(t,3,O):t(...O)}finally{as=A}}}else d.run()};return i&&i(g),d=new zo(u),d.scheduler=o?()=>o(g,!1):g,f=y=>uc(y,!1,d),p=d.onStop=()=>{const y=hn.get(d);if(y){if(l)l(y,4);else for(const T of y)T();hn.delete(d)}},t?n?g(!0):m=d.run():o?o(g.bind(null,!0),!0):d.run(),h.pause=d.pause.bind(d),h.resume=d.resume.bind(d),h.stop=h,h}function kt(e,t=1/0,s){if(t<=0||!_e(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,xe(e))kt(e.value,t,s);else if(ee(e))for(let n=0;n<e.length;n++)kt(e[n],t,s);else if(Pn(e)||_s(e))e.forEach(n=>{kt(n,t,s)});else if(Io(e)){for(const n in e)kt(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&kt(e[n],t,s)}return e}function Vs(e,t,s,n){try{return n?e(...n):e()}catch(a){Ln(a,t,s)}}function ot(e,t,s,n){if(re(e)){const a=Vs(e,t,s,n);return a&&Lo(a)&&a.catch(r=>{Ln(r,t,s)}),a}if(ee(e)){const a=[];for(let r=0;r<e.length;r++)a.push(ot(e[r],t,s,n));return a}}function Ln(e,t,s,n=!0){const a=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||be;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}i=i.parent}if(r){Lt(),Vs(r,null,10,[e,l,c]),Mt();return}}fc(e,s,a,n,o)}function fc(e,t,s,n=!0,a=!1){if(a)throw e;console.error(e)}const Fe=[];let pt=-1;const ys=[];let Ut=null,ms=0;const ii=Promise.resolve();let mn=null;function Za(e){const t=mn||ii;return e?t.then(this?e.bind(this):e):t}function hc(e){let t=pt+1,s=Fe.length;for(;t<s;){const n=t+s>>>1,a=Fe[n],r=Hs(a);r<e||r===e&&a.flags&2?t=n+1:s=n}return t}function er(e){if(!(e.flags&1)){const t=Hs(e),s=Fe[Fe.length-1];!s||!(e.flags&2)&&t>=Hs(s)?Fe.push(e):Fe.splice(hc(t),0,e),e.flags|=1,li()}}function li(){mn||(mn=ii.then(di))}function mc(e){ee(e)?ys.push(...e):Ut&&e.id===-1?Ut.splice(ms+1,0,e):e.flags&1||(ys.push(e),e.flags|=1),li()}function br(e,t,s=pt+1){for(;s<Fe.length;s++){const n=Fe[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Fe.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ci(e){if(ys.length){const t=[...new Set(ys)].sort((s,n)=>Hs(s)-Hs(n));if(ys.length=0,Ut){Ut.push(...t);return}for(Ut=t,ms=0;ms<Ut.length;ms++){const s=Ut[ms];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Ut=null,ms=0}}const Hs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function di(e){try{for(pt=0;pt<Fe.length;pt++){const t=Fe[pt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;pt<Fe.length;pt++){const t=Fe[pt];t&&(t.flags&=-2)}pt=-1,Fe.length=0,ci(),mn=null,(Fe.length||ys.length)&&di()}}let Ve=null,ui=null;function gn(e){const t=Ve;return Ve=e,ui=e&&e.type.__scopeId||null,t}function Sa(e,t=Ve,s){if(!t||e._n)return e;const n=(...a)=>{n._d&&yn(-1);const r=gn(t);let o;try{o=e(...a)}finally{gn(r),n._d&&yn(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function gc(e,t){if(Ve===null)return e;const s=$n(Ve),n=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[r,o,i,l=be]=t[a];r&&(re(r)&&(r={mounted:r,updated:r}),r.deep&&kt(o),n.push({dir:r,instance:s,value:o,oldValue:void 0,arg:i,modifiers:l}))}return e}function es(e,t,s,n){const a=e.dirs,r=t&&t.dirs;for(let o=0;o<a.length;o++){const i=a[o];r&&(i.oldValue=r[o].value);let l=i.dir[n];l&&(Lt(),ot(l,s,8,[e.el,i,e,t]),Mt())}}const bc=Symbol("_vte"),pi=e=>e.__isTeleport,At=Symbol("_leaveCb"),tn=Symbol("_enterCb");function _c(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Nt(()=>{e.isMounted=!0}),Ti(()=>{e.isUnmounting=!0}),e}const Qe=[Function,Array],fi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},hi=e=>{const t=e.subTree;return t.component?hi(t.component):t},yc={name:"BaseTransition",props:fi,setup(e,{slots:t}){const s=ar(),n=_c();return()=>{const a=t.default&&bi(t.default(),!0);if(!a||!a.length)return;const r=mi(a),o=ue(e),{mode:i}=o;if(n.isLeaving)return Jn(r);const l=_r(r);if(!l)return Jn(r);let c=wa(l,o,n,s,u=>c=u);l.type!==qe&&Gs(l,c);let d=s.subTree&&_r(s.subTree);if(d&&d.type!==qe&&!rs(d,l)&&hi(s).type!==qe){let u=wa(d,o,n,s);if(Gs(d,u),i==="out-in"&&l.type!==qe)return n.isLeaving=!0,u.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,d=void 0},Jn(r);i==="in-out"&&l.type!==qe?u.delayLeave=(p,f,b)=>{const v=gi(n,d);v[String(d.key)]=d,p[At]=()=>{f(),p[At]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{b(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function mi(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==qe){t=s;break}}return t}const vc=yc;function gi(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function wa(e,t,s,n,a){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:b,onLeaveCancelled:v,onBeforeAppear:_,onAppear:h,onAfterAppear:m,onAppearCancelled:g}=t,y=String(e.key),T=gi(s,e),A=(E,x)=>{E&&ot(E,n,9,x)},O=(E,x)=>{const L=x[1];A(E,x),ee(E)?E.every(P=>P.length<=1)&&L():E.length<=1&&L()},C={mode:o,persisted:i,beforeEnter(E){let x=l;if(!s.isMounted)if(r)x=_||l;else return;E[At]&&E[At](!0);const L=T[y];L&&rs(e,L)&&L.el[At]&&L.el[At](),A(x,[E])},enter(E){let x=c,L=d,P=u;if(!s.isMounted)if(r)x=h||c,L=m||d,P=g||u;else return;let j=!1;const Q=E[tn]=oe=>{j||(j=!0,oe?A(P,[E]):A(L,[E]),C.delayedLeave&&C.delayedLeave(),E[tn]=void 0)};x?O(x,[E,Q]):Q()},leave(E,x){const L=String(e.key);if(E[tn]&&E[tn](!0),s.isUnmounting)return x();A(p,[E]);let P=!1;const j=E[At]=Q=>{P||(P=!0,x(),Q?A(v,[E]):A(b,[E]),E[At]=void 0,T[L]===e&&delete T[L])};T[L]=e,f?O(f,[E,j]):j()},clone(E){const x=wa(E,t,s,n,a);return a&&a(x),x}};return C}function Jn(e){if(Mn(e))return e=Vt(e),e.children=null,e}function _r(e){if(!Mn(e))return pi(e.type)&&e.children?mi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&re(s.default))return s.default()}}function Gs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function bi(e,t=!1,s){let n=[],a=0;for(let r=0;r<e.length;r++){let o=e[r];const i=s==null?o.key:String(s)+String(o.key!=null?o.key:r);o.type===ht?(o.patchFlag&128&&a++,n=n.concat(bi(o.children,t,i))):(t||o.type!==qe)&&n.push(i!=null?Vt(o,{key:i}):o)}if(a>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function _i(e,t){return re(e)?Oe({name:e.name},t,{setup:e}):e}function yi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const bn=new WeakMap;function Ls(e,t,s,n,a=!1){if(ee(e)){e.forEach((b,v)=>Ls(b,t&&(ee(t)?t[v]:t),s,n,a));return}if(Ms(n)&&!a){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ls(e,t,s,n.component.subTree);return}const r=n.shapeFlag&4?$n(n.component):n.el,o=a?null:r,{i,r:l}=e,c=t&&t.r,d=i.refs===be?i.refs={}:i.refs,u=i.setupState,p=ue(u),f=u===be?Ro:b=>fe(p,b);if(c!=null&&c!==l){if(yr(t),Ae(c))d[c]=null,f(c)&&(u[c]=null);else if(xe(c)){c.value=null;const b=t;b.k&&(d[b.k]=null)}}if(re(l))Vs(l,i,12,[o,d]);else{const b=Ae(l),v=xe(l);if(b||v){const _=()=>{if(e.f){const h=b?f(l)?u[l]:d[l]:l.value;if(a)ee(h)&&Ha(h,r);else if(ee(h))h.includes(r)||h.push(r);else if(b)d[l]=[r],f(l)&&(u[l]=d[l]);else{const m=[r];l.value=m,e.k&&(d[e.k]=m)}}else b?(d[l]=o,f(l)&&(u[l]=o)):v&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const h=()=>{_(),bn.delete(e)};h.id=-1,bn.set(e,h),ze(h,s)}else yr(e),_()}}}function yr(e){const t=bn.get(e);t&&(t.flags|=8,bn.delete(e))}Cn().requestIdleCallback;Cn().cancelIdleCallback;const Ms=e=>!!e.type.__asyncLoader,Mn=e=>e.type.__isKeepAlive;function Tc(e,t){vi(e,"a",t)}function Sc(e,t){vi(e,"da",t)}function vi(e,t,s=Me){const n=e.__wdc||(e.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(In(t,n,s),s){let a=s.parent;for(;a&&a.parent;)Mn(a.parent.vnode)&&wc(n,t,s,a),a=a.parent}}function wc(e,t,s,n){const a=In(t,e,n,!0);Dn(()=>{Ha(n[t],a)},s)}function In(e,t,s=Me,n=!1){if(s){const a=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{Lt();const i=Js(s),l=ot(t,s,e,o);return i(),Mt(),l});return n?a.unshift(r):a.push(r),r}}const Dt=e=>(t,s=Me)=>{(!zs||e==="sp")&&In(e,(...n)=>t(...n),s)},Ec=Dt("bm"),Nt=Dt("m"),xc=Dt("bu"),Ac=Dt("u"),Ti=Dt("bum"),Dn=Dt("um"),Pc=Dt("sp"),Oc=Dt("rtg"),kc=Dt("rtc");function Cc(e,t=Me){In("ec",e,t)}const Rc="components",Si=Symbol.for("v-ndc");function Lc(e){return Ae(e)?Mc(Rc,e,!1)||e:e||Si}function Mc(e,t,s=!0,n=!1){const a=Ve||Me;if(a){const r=a.type;{const i=Td(r,!1);if(i&&(i===t||i===tt(t)||i===kn(tt(t))))return r}const o=vr(a[e]||r[e],t)||vr(a.appContext[e],t);return!o&&n?r:o}}function vr(e,t){return e&&(e[t]||e[tt(t)]||e[kn(tt(t))])}const Ea=e=>e?Gi(e)?$n(e):Ea(e.parent):null,Is=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ea(e.parent),$root:e=>Ea(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ei(e),$forceUpdate:e=>e.f||(e.f=()=>{er(e.update)}),$nextTick:e=>e.n||(e.n=Za.bind(e.proxy)),$watch:e=>td.bind(e)}),Xn=(e,t)=>e!==be&&!e.__isScriptSetup&&fe(e,t),Ic={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:a,props:r,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return n[t];case 2:return a[t];case 4:return s[t];case 3:return r[t]}else{if(Xn(n,t))return o[t]=1,n[t];if(a!==be&&fe(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&fe(c,t))return o[t]=3,r[t];if(s!==be&&fe(s,t))return o[t]=4,s[t];xa&&(o[t]=0)}}const d=Is[t];let u,p;if(d)return t==="$attrs"&&Le(e.attrs,"get",""),d(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(s!==be&&fe(s,t))return o[t]=4,s[t];if(p=l.config.globalProperties,fe(p,t))return p[t]},set({_:e},t,s){const{data:n,setupState:a,ctx:r}=e;return Xn(a,t)?(a[t]=s,!0):n!==be&&fe(n,t)?(n[t]=s,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:a,propsOptions:r,type:o}},i){let l,c;return!!(s[i]||e!==be&&i[0]!=="$"&&fe(e,i)||Xn(t,i)||(l=r[0])&&fe(l,i)||fe(n,i)||fe(Is,i)||fe(a.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:fe(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Tr(e){return ee(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let xa=!0;function Dc(e){const t=Ei(e),s=e.proxy,n=e.ctx;xa=!1,t.beforeCreate&&Sr(t.beforeCreate,e,"bc");const{data:a,computed:r,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:b,activated:v,deactivated:_,beforeDestroy:h,beforeUnmount:m,destroyed:g,unmounted:y,render:T,renderTracked:A,renderTriggered:O,errorCaptured:C,serverPrefetch:E,expose:x,inheritAttrs:L,components:P,directives:j,filters:Q}=t;if(c&&Nc(c,n,null),o)for(const H in o){const $=o[H];re($)&&(n[H]=$.bind(s))}if(a){const H=a.call(s,s);_e(H)&&(e.data=Ct(H))}if(xa=!0,r)for(const H in r){const $=r[H],te=re($)?$.bind(s,s):re($.get)?$.get.bind(s,s):gt,ne=!re($)&&re($.set)?$.set.bind(s):gt,ie=We({get:te,set:ne});Object.defineProperty(n,H,{enumerable:!0,configurable:!0,get:()=>ie.value,set:le=>ie.value=le})}if(i)for(const H in i)wi(i[H],n,s,H);if(l){const H=re(l)?l.call(s):l;Reflect.ownKeys(H).forEach($=>{ln($,H[$])})}d&&Sr(d,e,"c");function G(H,$){ee($)?$.forEach(te=>H(te.bind(s))):$&&H($.bind(s))}if(G(Ec,u),G(Nt,p),G(xc,f),G(Ac,b),G(Tc,v),G(Sc,_),G(Cc,C),G(kc,A),G(Oc,O),G(Ti,m),G(Dn,y),G(Pc,E),ee(x))if(x.length){const H=e.exposed||(e.exposed={});x.forEach($=>{Object.defineProperty(H,$,{get:()=>s[$],set:te=>s[$]=te,enumerable:!0})})}else e.exposed||(e.exposed={});T&&e.render===gt&&(e.render=T),L!=null&&(e.inheritAttrs=L),P&&(e.components=P),j&&(e.directives=j),E&&yi(e)}function Nc(e,t,s=gt){ee(e)&&(e=Aa(e));for(const n in e){const a=e[n];let r;_e(a)?"default"in a?r=et(a.from||n,a.default,!0):r=et(a.from||n):r=et(a),xe(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function Sr(e,t,s){ot(ee(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function wi(e,t,s,n){let a=n.includes(".")?Bi(s,n):()=>s[n];if(Ae(e)){const r=t[e];re(r)&&Ds(a,r)}else if(re(e))Ds(a,e.bind(s));else if(_e(e))if(ee(e))e.forEach(r=>wi(r,t,s,n));else{const r=re(e.handler)?e.handler.bind(s):t[e.handler];re(r)&&Ds(a,r,e)}}function Ei(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:a,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(t);let l;return i?l=i:!a.length&&!s&&!n?l=t:(l={},a.length&&a.forEach(c=>_n(l,c,o,!0)),_n(l,t,o)),_e(t)&&r.set(t,l),l}function _n(e,t,s,n=!1){const{mixins:a,extends:r}=t;r&&_n(e,r,s,!0),a&&a.forEach(o=>_n(e,o,s,!0));for(const o in t)if(!(n&&o==="expose")){const i=Bc[o]||s&&s[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Bc={data:wr,props:Er,emits:Er,methods:Ps,computed:Ps,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Ps,directives:Ps,watch:$c,provide:wr,inject:Fc};function wr(e,t){return t?e?function(){return Oe(re(e)?e.call(this,this):e,re(t)?t.call(this,this):t)}:t:e}function Fc(e,t){return Ps(Aa(e),Aa(t))}function Aa(e){if(ee(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function Ps(e,t){return e?Oe(Object.create(null),e,t):t}function Er(e,t){return e?ee(e)&&ee(t)?[...new Set([...e,...t])]:Oe(Object.create(null),Tr(e),Tr(t??{})):t}function $c(e,t){if(!e)return t;if(!t)return e;const s=Oe(Object.create(null),e);for(const n in t)s[n]=De(e[n],t[n]);return s}function xi(){return{app:null,config:{isNativeTag:Ro,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uc=0;function Hc(e,t){return function(n,a=null){re(n)||(n=Oe({},n)),a!=null&&!_e(a)&&(a=null);const r=xi(),o=new WeakSet,i=[];let l=!1;const c=r.app={_uid:Uc++,_component:n,_props:a,_container:null,_context:r,_instance:null,version:wd,get config(){return r.config},set config(d){},use(d,...u){return o.has(d)||(d&&re(d.install)?(o.add(d),d.install(c,...u)):re(d)&&(o.add(d),d(c,...u))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,u){return u?(r.components[d]=u,c):r.components[d]},directive(d,u){return u?(r.directives[d]=u,c):r.directives[d]},mount(d,u,p){if(!l){const f=c._ceVNode||Ge(n,a);return f.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),l=!0,c._container=d,d.__vue_app__=c,$n(f.component)}},onUnmount(d){i.push(d)},unmount(){l&&(ot(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return r.provides[d]=u,c},runWithContext(d){const u=ds;ds=c;try{return d()}finally{ds=u}}};return c}}let ds=null;function ln(e,t){if(Me){let s=Me.provides;const n=Me.parent&&Me.parent.provides;n===s&&(s=Me.provides=Object.create(n)),s[e]=t}}function et(e,t,s=!1){const n=ar();if(n||ds){let a=ds?ds._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return s&&re(t)?t.call(n&&n.proxy):t}}function Gc(){return!!(ar()||ds)}const Ai={},Pi=()=>Object.create(Ai),Oi=e=>Object.getPrototypeOf(e)===Ai;function Yc(e,t,s,n=!1){const a={},r=Pi();e.propsDefaults=Object.create(null),ki(e,t,a,r);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);s?e.props=n?a:ai(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function zc(e,t,s,n){const{props:a,attrs:r,vnode:{patchFlag:o}}=e,i=ue(a),[l]=e.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Nn(e.emitsOptions,p))continue;const f=t[p];if(l)if(fe(r,p))f!==r[p]&&(r[p]=f,c=!0);else{const b=tt(p);a[b]=Pa(l,i,b,f,e,!1)}else f!==r[p]&&(r[p]=f,c=!0)}}}else{ki(e,t,a,r)&&(c=!0);let d;for(const u in i)(!t||!fe(t,u)&&((d=Xt(u))===u||!fe(t,d)))&&(l?s&&(s[u]!==void 0||s[d]!==void 0)&&(a[u]=Pa(l,i,u,void 0,e,!0)):delete a[u]);if(r!==i)for(const u in r)(!t||!fe(t,u))&&(delete r[u],c=!0)}c&&Ot(e.attrs,"set","")}function ki(e,t,s,n){const[a,r]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(ks(l))continue;const c=t[l];let d;a&&fe(a,d=tt(l))?!r||!r.includes(d)?s[d]=c:(i||(i={}))[d]=c:Nn(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=ue(s),c=i||be;for(let d=0;d<r.length;d++){const u=r[d];s[u]=Pa(a,l,u,c[u],e,!fe(c,u))}}return o}function Pa(e,t,s,n,a,r){const o=e[s];if(o!=null){const i=fe(o,"default");if(i&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&re(l)){const{propsDefaults:c}=a;if(s in c)n=c[s];else{const d=Js(a);n=c[s]=l.call(null,t),d()}}else n=l;a.ce&&a.ce._setProp(s,n)}o[0]&&(r&&!i?n=!1:o[1]&&(n===""||n===Xt(s))&&(n=!0))}return n}const jc=new WeakMap;function Ci(e,t,s=!1){const n=s?jc:t.propsCache,a=n.get(e);if(a)return a;const r=e.props,o={},i=[];let l=!1;if(!re(e)){const d=u=>{l=!0;const[p,f]=Ci(u,t,!0);Oe(o,p),f&&i.push(...f)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!l)return _e(e)&&n.set(e,bs),bs;if(ee(r))for(let d=0;d<r.length;d++){const u=tt(r[d]);xr(u)&&(o[u]=be)}else if(r)for(const d in r){const u=tt(d);if(xr(u)){const p=r[d],f=o[u]=ee(p)||re(p)?{type:p}:Oe({},p),b=f.type;let v=!1,_=!0;if(ee(b))for(let h=0;h<b.length;++h){const m=b[h],g=re(m)&&m.name;if(g==="Boolean"){v=!0;break}else g==="String"&&(_=!1)}else v=re(b)&&b.name==="Boolean";f[0]=v,f[1]=_,(v||fe(f,"default"))&&i.push(u)}}const c=[o,i];return _e(e)&&n.set(e,c),c}function xr(e){return e[0]!=="$"&&!ks(e)}const tr=e=>e==="_"||e==="_ctx"||e==="$stable",sr=e=>ee(e)?e.map(mt):[mt(e)],Kc=(e,t,s)=>{if(t._n)return t;const n=Sa((...a)=>sr(t(...a)),s);return n._c=!1,n},Ri=(e,t,s)=>{const n=e._ctx;for(const a in e){if(tr(a))continue;const r=e[a];if(re(r))t[a]=Kc(a,r,n);else if(r!=null){const o=sr(r);t[a]=()=>o}}},Li=(e,t)=>{const s=sr(t);e.slots.default=()=>s},Mi=(e,t,s)=>{for(const n in t)(s||!tr(n))&&(e[n]=t[n])},qc=(e,t,s)=>{const n=e.slots=Pi();if(e.vnode.shapeFlag&32){const a=t._;a?(Mi(n,t,s),s&&Do(n,"_",a,!0)):Ri(t,n)}else t&&Li(e,t)},Wc=(e,t,s)=>{const{vnode:n,slots:a}=e;let r=!0,o=be;if(n.shapeFlag&32){const i=t._;i?s&&i===1?r=!1:Mi(a,t,s):(r=!t.$stable,Ri(t,a)),o=t}else t&&(Li(e,t),o={default:1});if(r)for(const i in a)!tr(i)&&o[i]==null&&delete a[i]},ze=cd;function Vc(e){return Jc(e)}function Jc(e,t){const s=Cn();s.__VUE__=!0;const{insert:n,remove:a,patchProp:r,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=gt,insertStaticContent:b}=e,v=(S,w,k,D=null,B=null,N=null,W=void 0,z=null,Y=!!w.dynamicChildren)=>{if(S===w)return;S&&!rs(S,w)&&(D=I(S),le(S,B,N,!0),S=null),w.patchFlag===-2&&(Y=!1,w.dynamicChildren=null);const{type:U,ref:se,shapeFlag:J}=w;switch(U){case Bn:_(S,w,k,D);break;case qe:h(S,w,k,D);break;case cn:S==null&&m(w,k,D,W);break;case ht:P(S,w,k,D,B,N,W,z,Y);break;default:J&1?T(S,w,k,D,B,N,W,z,Y):J&6?j(S,w,k,D,B,N,W,z,Y):(J&64||J&128)&&U.process(S,w,k,D,B,N,W,z,Y,X)}se!=null&&B?Ls(se,S&&S.ref,N,w||S,!w):se==null&&S&&S.ref!=null&&Ls(S.ref,null,N,S,!0)},_=(S,w,k,D)=>{if(S==null)n(w.el=i(w.children),k,D);else{const B=w.el=S.el;w.children!==S.children&&c(B,w.children)}},h=(S,w,k,D)=>{S==null?n(w.el=l(w.children||""),k,D):w.el=S.el},m=(S,w,k,D)=>{[S.el,S.anchor]=b(S.children,w,k,D,S.el,S.anchor)},g=({el:S,anchor:w},k,D)=>{let B;for(;S&&S!==w;)B=p(S),n(S,k,D),S=B;n(w,k,D)},y=({el:S,anchor:w})=>{let k;for(;S&&S!==w;)k=p(S),a(S),S=k;a(w)},T=(S,w,k,D,B,N,W,z,Y)=>{if(w.type==="svg"?W="svg":w.type==="math"&&(W="mathml"),S==null)A(w,k,D,B,N,W,z,Y);else{const U=S.el&&S.el._isVueCE?S.el:null;try{U&&U._beginPatch(),E(S,w,B,N,W,z,Y)}finally{U&&U._endPatch()}}},A=(S,w,k,D,B,N,W,z)=>{let Y,U;const{props:se,shapeFlag:J,transition:Z,dirs:ae}=S;if(Y=S.el=o(S.type,N,se&&se.is,se),J&8?d(Y,S.children):J&16&&C(S.children,Y,null,D,B,Qn(S,N),W,z),ae&&es(S,null,D,"created"),O(Y,S,S.scopeId,W,D),se){for(const ye in se)ye!=="value"&&!ks(ye)&&r(Y,ye,null,se[ye],N,D);"value"in se&&r(Y,"value",null,se.value,N),(U=se.onVnodeBeforeMount)&&ut(U,D,S)}ae&&es(S,null,D,"beforeMount");const de=Xc(B,Z);de&&Z.beforeEnter(Y),n(Y,w,k),((U=se&&se.onVnodeMounted)||de||ae)&&ze(()=>{U&&ut(U,D,S),de&&Z.enter(Y),ae&&es(S,null,D,"mounted")},B)},O=(S,w,k,D,B)=>{if(k&&f(S,k),D)for(let N=0;N<D.length;N++)f(S,D[N]);if(B){let N=B.subTree;if(w===N||$i(N.type)&&(N.ssContent===w||N.ssFallback===w)){const W=B.vnode;O(S,W,W.scopeId,W.slotScopeIds,B.parent)}}},C=(S,w,k,D,B,N,W,z,Y=0)=>{for(let U=Y;U<S.length;U++){const se=S[U]=z?Ht(S[U]):mt(S[U]);v(null,se,w,k,D,B,N,W,z)}},E=(S,w,k,D,B,N,W)=>{const z=w.el=S.el;let{patchFlag:Y,dynamicChildren:U,dirs:se}=w;Y|=S.patchFlag&16;const J=S.props||be,Z=w.props||be;let ae;if(k&&ts(k,!1),(ae=Z.onVnodeBeforeUpdate)&&ut(ae,k,w,S),se&&es(w,S,k,"beforeUpdate"),k&&ts(k,!0),(J.innerHTML&&Z.innerHTML==null||J.textContent&&Z.textContent==null)&&d(z,""),U?x(S.dynamicChildren,U,z,k,D,Qn(w,B),N):W||$(S,w,z,null,k,D,Qn(w,B),N,!1),Y>0){if(Y&16)L(z,J,Z,k,B);else if(Y&2&&J.class!==Z.class&&r(z,"class",null,Z.class,B),Y&4&&r(z,"style",J.style,Z.style,B),Y&8){const de=w.dynamicProps;for(let ye=0;ye<de.length;ye++){const he=de[ye],Ue=J[he],He=Z[he];(He!==Ue||he==="value")&&r(z,he,Ue,He,B,k)}}Y&1&&S.children!==w.children&&d(z,w.children)}else!W&&U==null&&L(z,J,Z,k,B);((ae=Z.onVnodeUpdated)||se)&&ze(()=>{ae&&ut(ae,k,w,S),se&&es(w,S,k,"updated")},D)},x=(S,w,k,D,B,N,W)=>{for(let z=0;z<w.length;z++){const Y=S[z],U=w[z],se=Y.el&&(Y.type===ht||!rs(Y,U)||Y.shapeFlag&198)?u(Y.el):k;v(Y,U,se,null,D,B,N,W,!0)}},L=(S,w,k,D,B)=>{if(w!==k){if(w!==be)for(const N in w)!ks(N)&&!(N in k)&&r(S,N,w[N],null,B,D);for(const N in k){if(ks(N))continue;const W=k[N],z=w[N];W!==z&&N!=="value"&&r(S,N,z,W,B,D)}"value"in k&&r(S,"value",w.value,k.value,B)}},P=(S,w,k,D,B,N,W,z,Y)=>{const U=w.el=S?S.el:i(""),se=w.anchor=S?S.anchor:i("");let{patchFlag:J,dynamicChildren:Z,slotScopeIds:ae}=w;ae&&(z=z?z.concat(ae):ae),S==null?(n(U,k,D),n(se,k,D),C(w.children||[],k,se,B,N,W,z,Y)):J>0&&J&64&&Z&&S.dynamicChildren?(x(S.dynamicChildren,Z,k,B,N,W,z),(w.key!=null||B&&w===B.subTree)&&Ii(S,w,!0)):$(S,w,k,se,B,N,W,z,Y)},j=(S,w,k,D,B,N,W,z,Y)=>{w.slotScopeIds=z,S==null?w.shapeFlag&512?B.ctx.activate(w,k,D,W,Y):Q(w,k,D,B,N,W,Y):oe(S,w,Y)},Q=(S,w,k,D,B,N,W)=>{const z=S.component=gd(S,D,B);if(Mn(S)&&(z.ctx.renderer=X),bd(z,!1,W),z.asyncDep){if(B&&B.registerDep(z,G,W),!S.el){const Y=z.subTree=Ge(qe);h(null,Y,w,k),S.placeholder=Y.el}}else G(z,S,w,k,B,N,W)},oe=(S,w,k)=>{const D=w.component=S.component;if(id(S,w,k))if(D.asyncDep&&!D.asyncResolved){H(D,w,k);return}else D.next=w,D.update();else w.el=S.el,D.vnode=w},G=(S,w,k,D,B,N,W)=>{const z=()=>{if(S.isMounted){let{next:J,bu:Z,u:ae,parent:de,vnode:ye}=S;{const ct=Di(S);if(ct){J&&(J.el=ye.el,H(S,J,W)),ct.asyncDep.then(()=>{S.isUnmounted||z()});return}}let he=J,Ue;ts(S,!1),J?(J.el=ye.el,H(S,J,W)):J=ye,Z&&on(Z),(Ue=J.props&&J.props.onVnodeBeforeUpdate)&&ut(Ue,de,J,ye),ts(S,!0);const He=Pr(S),lt=S.subTree;S.subTree=He,v(lt,He,u(lt.el),I(lt),S,B,N),J.el=He.el,he===null&&ld(S,He.el),ae&&ze(ae,B),(Ue=J.props&&J.props.onVnodeUpdated)&&ze(()=>ut(Ue,de,J,ye),B)}else{let J;const{el:Z,props:ae}=w,{bm:de,m:ye,parent:he,root:Ue,type:He}=S,lt=Ms(w);ts(S,!1),de&&on(de),!lt&&(J=ae&&ae.onVnodeBeforeMount)&&ut(J,he,w),ts(S,!0);{Ue.ce&&Ue.ce._def.shadowRoot!==!1&&Ue.ce._injectChildStyle(He);const ct=S.subTree=Pr(S);v(null,ct,k,D,S,B,N),w.el=ct.el}if(ye&&ze(ye,B),!lt&&(J=ae&&ae.onVnodeMounted)){const ct=w;ze(()=>ut(J,he,ct),B)}(w.shapeFlag&256||he&&Ms(he.vnode)&&he.vnode.shapeFlag&256)&&S.a&&ze(S.a,B),S.isMounted=!0,w=k=D=null}};S.scope.on();const Y=S.effect=new zo(z);S.scope.off();const U=S.update=Y.run.bind(Y),se=S.job=Y.runIfDirty.bind(Y);se.i=S,se.id=S.uid,Y.scheduler=()=>er(se),ts(S,!0),U()},H=(S,w,k)=>{w.component=S;const D=S.vnode.props;S.vnode=w,S.next=null,zc(S,w.props,D,k),Wc(S,w.children,k),Lt(),br(S),Mt()},$=(S,w,k,D,B,N,W,z,Y=!1)=>{const U=S&&S.children,se=S?S.shapeFlag:0,J=w.children,{patchFlag:Z,shapeFlag:ae}=w;if(Z>0){if(Z&128){ne(U,J,k,D,B,N,W,z,Y);return}else if(Z&256){te(U,J,k,D,B,N,W,z,Y);return}}ae&8?(se&16&&Te(U,B,N),J!==U&&d(k,J)):se&16?ae&16?ne(U,J,k,D,B,N,W,z,Y):Te(U,B,N,!0):(se&8&&d(k,""),ae&16&&C(J,k,D,B,N,W,z,Y))},te=(S,w,k,D,B,N,W,z,Y)=>{S=S||bs,w=w||bs;const U=S.length,se=w.length,J=Math.min(U,se);let Z;for(Z=0;Z<J;Z++){const ae=w[Z]=Y?Ht(w[Z]):mt(w[Z]);v(S[Z],ae,k,null,B,N,W,z,Y)}U>se?Te(S,B,N,!0,!1,J):C(w,k,D,B,N,W,z,Y,J)},ne=(S,w,k,D,B,N,W,z,Y)=>{let U=0;const se=w.length;let J=S.length-1,Z=se-1;for(;U<=J&&U<=Z;){const ae=S[U],de=w[U]=Y?Ht(w[U]):mt(w[U]);if(rs(ae,de))v(ae,de,k,null,B,N,W,z,Y);else break;U++}for(;U<=J&&U<=Z;){const ae=S[J],de=w[Z]=Y?Ht(w[Z]):mt(w[Z]);if(rs(ae,de))v(ae,de,k,null,B,N,W,z,Y);else break;J--,Z--}if(U>J){if(U<=Z){const ae=Z+1,de=ae<se?w[ae].el:D;for(;U<=Z;)v(null,w[U]=Y?Ht(w[U]):mt(w[U]),k,de,B,N,W,z,Y),U++}}else if(U>Z)for(;U<=J;)le(S[U],B,N,!0),U++;else{const ae=U,de=U,ye=new Map;for(U=de;U<=Z;U++){const Ye=w[U]=Y?Ht(w[U]):mt(w[U]);Ye.key!=null&&ye.set(Ye.key,U)}let he,Ue=0;const He=Z-de+1;let lt=!1,ct=0;const ws=new Array(He);for(U=0;U<He;U++)ws[U]=0;for(U=ae;U<=J;U++){const Ye=S[U];if(Ue>=He){le(Ye,B,N,!0);continue}let dt;if(Ye.key!=null)dt=ye.get(Ye.key);else for(he=de;he<=Z;he++)if(ws[he-de]===0&&rs(Ye,w[he])){dt=he;break}dt===void 0?le(Ye,B,N,!0):(ws[dt-de]=U+1,dt>=ct?ct=dt:lt=!0,v(Ye,w[dt],k,null,B,N,W,z,Y),Ue++)}const dr=lt?Qc(ws):bs;for(he=dr.length-1,U=He-1;U>=0;U--){const Ye=de+U,dt=w[Ye],ur=w[Ye+1],pr=Ye+1<se?ur.el||ur.placeholder:D;ws[U]===0?v(null,dt,k,pr,B,N,W,z,Y):lt&&(he<0||U!==dr[he]?ie(dt,k,pr,2):he--)}}},ie=(S,w,k,D,B=null)=>{const{el:N,type:W,transition:z,children:Y,shapeFlag:U}=S;if(U&6){ie(S.component.subTree,w,k,D);return}if(U&128){S.suspense.move(w,k,D);return}if(U&64){W.move(S,w,k,X);return}if(W===ht){n(N,w,k);for(let J=0;J<Y.length;J++)ie(Y[J],w,k,D);n(S.anchor,w,k);return}if(W===cn){g(S,w,k);return}if(D!==2&&U&1&&z)if(D===0)z.beforeEnter(N),n(N,w,k),ze(()=>z.enter(N),B);else{const{leave:J,delayLeave:Z,afterLeave:ae}=z,de=()=>{S.ctx.isUnmounted?a(N):n(N,w,k)},ye=()=>{N._isLeaving&&N[At](!0),J(N,()=>{de(),ae&&ae()})};Z?Z(N,de,ye):ye()}else n(N,w,k)},le=(S,w,k,D=!1,B=!1)=>{const{type:N,props:W,ref:z,children:Y,dynamicChildren:U,shapeFlag:se,patchFlag:J,dirs:Z,cacheIndex:ae}=S;if(J===-2&&(B=!1),z!=null&&(Lt(),Ls(z,null,k,S,!0),Mt()),ae!=null&&(w.renderCache[ae]=void 0),se&256){w.ctx.deactivate(S);return}const de=se&1&&Z,ye=!Ms(S);let he;if(ye&&(he=W&&W.onVnodeBeforeUnmount)&&ut(he,w,S),se&6)Ie(S.component,k,D);else{if(se&128){S.suspense.unmount(k,D);return}de&&es(S,null,w,"beforeUnmount"),se&64?S.type.remove(S,w,k,X,D):U&&!U.hasOnce&&(N!==ht||J>0&&J&64)?Te(U,w,k,!1,!0):(N===ht&&J&384||!B&&se&16)&&Te(Y,w,k),D&&ge(S)}(ye&&(he=W&&W.onVnodeUnmounted)||de)&&ze(()=>{he&&ut(he,w,S),de&&es(S,null,w,"unmounted")},k)},ge=S=>{const{type:w,el:k,anchor:D,transition:B}=S;if(w===ht){Ee(k,D);return}if(w===cn){y(S);return}const N=()=>{a(k),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(S.shapeFlag&1&&B&&!B.persisted){const{leave:W,delayLeave:z}=B,Y=()=>W(k,N);z?z(S.el,N,Y):Y()}else N()},Ee=(S,w)=>{let k;for(;S!==w;)k=p(S),a(S),S=k;a(w)},Ie=(S,w,k)=>{const{bum:D,scope:B,job:N,subTree:W,um:z,m:Y,a:U}=S;Ar(Y),Ar(U),D&&on(D),B.stop(),N&&(N.flags|=8,le(W,S,w,k)),z&&ze(z,w),ze(()=>{S.isUnmounted=!0},w)},Te=(S,w,k,D=!1,B=!1,N=0)=>{for(let W=N;W<S.length;W++)le(S[W],w,k,D,B)},I=S=>{if(S.shapeFlag&6)return I(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const w=p(S.anchor||S.el),k=w&&w[bc];return k?p(k):w};let K=!1;const q=(S,w,k)=>{S==null?w._vnode&&le(w._vnode,null,null,!0):v(w._vnode||null,S,w,null,null,null,k),w._vnode=S,K||(K=!0,br(),ci(),K=!1)},X={p:v,um:le,m:ie,r:ge,mt:Q,mc:C,pc:$,pbc:x,n:I,o:e};return{render:q,hydrate:void 0,createApp:Hc(q)}}function Qn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ts({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Xc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ii(e,t,s=!1){const n=e.children,a=t.children;if(ee(n)&&ee(a))for(let r=0;r<n.length;r++){const o=n[r];let i=a[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[r]=Ht(a[r]),i.el=o.el),!s&&i.patchFlag!==-2&&Ii(o,i)),i.type===Bn&&i.patchFlag!==-1&&(i.el=o.el),i.type===qe&&!i.el&&(i.el=o.el)}}function Qc(e){const t=e.slice(),s=[0];let n,a,r,o,i;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(a=s[s.length-1],e[a]<c){t[n]=a,s.push(n);continue}for(r=0,o=s.length-1;r<o;)i=r+o>>1,e[s[i]]<c?r=i+1:o=i;c<e[s[r]]&&(r>0&&(t[n]=s[r-1]),s[r]=n)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}function Di(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Di(t)}function Ar(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Zc=Symbol.for("v-scx"),ed=()=>et(Zc);function Ds(e,t,s){return Ni(e,t,s)}function Ni(e,t,s=be){const{immediate:n,deep:a,flush:r,once:o}=s,i=Oe({},s),l=t&&n||!t&&r!=="post";let c;if(zs){if(r==="sync"){const f=ed();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=gt,f.resume=gt,f.pause=gt,f}}const d=Me;i.call=(f,b,v)=>ot(f,d,b,v);let u=!1;r==="post"?i.scheduler=f=>{ze(f,d&&d.suspense)}:r!=="sync"&&(u=!0,i.scheduler=(f,b)=>{b?f():er(f)}),i.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=pc(e,t,i);return zs&&(c?c.push(p):l&&p()),p}function td(e,t,s){const n=this.proxy,a=Ae(e)?e.includes(".")?Bi(n,e):()=>n[e]:e.bind(n,n);let r;re(t)?r=t:(r=t.handler,s=t);const o=Js(this),i=Ni(a,r.bind(n),s);return o(),i}function Bi(e,t){const s=t.split(".");return()=>{let n=e;for(let a=0;a<s.length&&n;a++)n=n[s[a]];return n}}const sd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${Xt(t)}Modifiers`];function nd(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||be;let a=s;const r=t.startsWith("update:"),o=r&&sd(n,t.slice(7));o&&(o.trim&&(a=s.map(d=>Ae(d)?d.trim():d)),o.number&&(a=s.map(Ol)));let i,l=n[i=jn(t)]||n[i=jn(tt(t))];!l&&r&&(l=n[i=jn(Xt(t))]),l&&ot(l,e,6,a);const c=n[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,ot(c,e,6,a)}}const ad=new WeakMap;function Fi(e,t,s=!1){const n=s?ad:t.emitsCache,a=n.get(e);if(a!==void 0)return a;const r=e.emits;let o={},i=!1;if(!re(e)){const l=c=>{const d=Fi(c,t,!0);d&&(i=!0,Oe(o,d))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(_e(e)&&n.set(e,null),null):(ee(r)?r.forEach(l=>o[l]=null):Oe(o,r),_e(e)&&n.set(e,o),o)}function Nn(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,Xt(t))||fe(e,t))}function Pr(e){const{type:t,vnode:s,proxy:n,withProxy:a,propsOptions:[r],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:b,inheritAttrs:v}=e,_=gn(e);let h,m;try{if(s.shapeFlag&4){const y=a||n,T=y;h=mt(c.call(T,y,d,u,f,p,b)),m=i}else{const y=t;h=mt(y.length>1?y(u,{attrs:i,slots:o,emit:l}):y(u,null)),m=t.props?i:rd(i)}}catch(y){Ns.length=0,Ln(y,e,1),h=Ge(qe)}let g=h;if(m&&v!==!1){const y=Object.keys(m),{shapeFlag:T}=g;y.length&&T&7&&(r&&y.some(Ua)&&(m=od(m,r)),g=Vt(g,m,!1,!0))}return s.dirs&&(g=Vt(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(s.dirs):s.dirs),s.transition&&Gs(g,s.transition),h=g,gn(_),h}const rd=e=>{let t;for(const s in e)(s==="class"||s==="style"||An(s))&&((t||(t={}))[s]=e[s]);return t},od=(e,t)=>{const s={};for(const n in e)(!Ua(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function id(e,t,s){const{props:n,children:a,component:r}=e,{props:o,children:i,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return n?Or(n,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==n[p]&&!Nn(c,p))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:n===o?!1:n?o?Or(n,o,c):!0:!!o;return!1}function Or(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const r=n[a];if(t[r]!==e[r]&&!Nn(s,r))return!0}return!1}function ld({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const $i=e=>e.__isSuspense;function cd(e,t){t&&t.pendingBranch?ee(e)?t.effects.push(...e):t.effects.push(e):mc(e)}const ht=Symbol.for("v-fgt"),Bn=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),cn=Symbol.for("v-stc"),Ns=[];let Je=null;function st(e=!1){Ns.push(Je=e?null:[])}function dd(){Ns.pop(),Je=Ns[Ns.length-1]||null}let Ys=1;function yn(e,t=!1){Ys+=e,e<0&&Je&&t&&(Je.hasOnce=!0)}function Ui(e){return e.dynamicChildren=Ys>0?Je||bs:null,dd(),Ys>0&&Je&&Je.push(e),e}function yt(e,t,s,n,a,r){return Ui(M(e,t,s,n,a,r,!0))}function kr(e,t,s,n,a){return Ui(Ge(e,t,s,n,a,!0))}function vn(e){return e?e.__v_isVNode===!0:!1}function rs(e,t){return e.type===t.type&&e.key===t.key}const Hi=({key:e})=>e??null,dn=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||xe(e)||re(e)?{i:Ve,r:e,k:t,f:!!s}:e:null);function M(e,t=null,s=null,n=0,a=null,r=e===ht?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hi(t),ref:t&&dn(t),scopeId:ui,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ve};return i?(nr(l,s),r&128&&e.normalize(l)):s&&(l.shapeFlag|=Ae(s)?8:16),Ys>0&&!o&&Je&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Je.push(l),l}const Ge=ud;function ud(e,t=null,s=null,n=0,a=null,r=!1){if((!e||e===Si)&&(e=qe),vn(e)){const i=Vt(e,t,!0);return s&&nr(i,s),Ys>0&&!r&&Je&&(i.shapeFlag&6?Je[Je.indexOf(e)]=i:Je.push(i)),i.patchFlag=-2,i}if(Sd(e)&&(e=e.__vccOpts),t){t=pd(t);let{class:i,style:l}=t;i&&!Ae(i)&&(t.class=Wt(i)),_e(l)&&(Xa(l)&&!ee(l)&&(l=Oe({},l)),t.style=Ya(l))}const o=Ae(e)?1:$i(e)?128:pi(e)?64:_e(e)?4:re(e)?2:0;return M(e,t,s,n,a,o,r,!0)}function pd(e){return e?Xa(e)||Oi(e)?Oe({},e):e:null}function Vt(e,t,s=!1,n=!1){const{props:a,ref:r,patchFlag:o,children:i,transition:l}=e,c=t?fd(a||{},t):a,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Hi(c),ref:t&&t.ref?s&&r?ee(r)?r.concat(dn(t)):[r,dn(t)]:dn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ht?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Gs(d,l.clone(d)),d}function Fn(e=" ",t=0){return Ge(Bn,null,e,t)}function Qt(e,t){const s=Ge(cn,null,e);return s.staticCount=t,s}function mt(e){return e==null||typeof e=="boolean"?Ge(qe):ee(e)?Ge(ht,null,e.slice()):vn(e)?Ht(e):Ge(Bn,null,String(e))}function Ht(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function nr(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(ee(t))s=16;else if(typeof t=="object")if(n&65){const a=t.default;a&&(a._c&&(a._d=!1),nr(e,a()),a._c&&(a._d=!0));return}else{s=32;const a=t._;!a&&!Oi(t)?t._ctx=Ve:a===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else re(t)?(t={default:t,_ctx:Ve},s=32):(t=String(t),n&64?(s=16,t=[Fn(t)]):s=8);e.children=t,e.shapeFlag|=s}function fd(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const a in n)if(a==="class")t.class!==n.class&&(t.class=Wt([t.class,n.class]));else if(a==="style")t.style=Ya([t.style,n.style]);else if(An(a)){const r=t[a],o=n[a];o&&r!==o&&!(ee(r)&&r.includes(o))&&(t[a]=r?[].concat(r,o):o)}else a!==""&&(t[a]=n[a])}return t}function ut(e,t,s,n=null){ot(e,t,7,[s,n])}const hd=xi();let md=0;function gd(e,t,s){const n=e.type,a=(t?t.appContext:e.appContext)||hd,r={uid:md++,vnode:e,type:n,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ho(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ci(n,a),emitsOptions:Fi(n,a),emit:null,emitted:null,propsDefaults:be,inheritAttrs:n.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=nd.bind(null,r),e.ce&&e.ce(r),r}let Me=null;const ar=()=>Me||Ve;let Tn,Oa;{const e=Cn(),t=(s,n)=>{let a;return(a=e[s])||(a=e[s]=[]),a.push(n),r=>{a.length>1?a.forEach(o=>o(r)):a[0](r)}};Tn=t("__VUE_INSTANCE_SETTERS__",s=>Me=s),Oa=t("__VUE_SSR_SETTERS__",s=>zs=s)}const Js=e=>{const t=Me;return Tn(e),e.scope.on(),()=>{e.scope.off(),Tn(t)}},Cr=()=>{Me&&Me.scope.off(),Tn(null)};function Gi(e){return e.vnode.shapeFlag&4}let zs=!1;function bd(e,t=!1,s=!1){t&&Oa(t);const{props:n,children:a}=e.vnode,r=Gi(e);Yc(e,n,r,t),qc(e,a,s||t);const o=r?_d(e,t):void 0;return t&&Oa(!1),o}function _d(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ic);const{setup:n}=s;if(n){Lt();const a=e.setupContext=n.length>1?vd(e):null,r=Js(e),o=Vs(n,e,0,[e.props,a]),i=Lo(o);if(Mt(),r(),(i||e.sp)&&!Ms(e)&&yi(e),i){if(o.then(Cr,Cr),t)return o.then(l=>{Rr(e,l)}).catch(l=>{Ln(l,e,0)});e.asyncDep=o}else Rr(e,o)}else Yi(e)}function Rr(e,t,s){re(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:_e(t)&&(e.setupState=oi(t)),Yi(e)}function Yi(e,t,s){const n=e.type;e.render||(e.render=n.render||gt);{const a=Js(e);Lt();try{Dc(e)}finally{Mt(),a()}}}const yd={get(e,t){return Le(e,"get",""),e[t]}};function vd(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,yd),slots:e.slots,emit:e.emit,expose:t}}function $n(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(oi(Qa(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Is)return Is[s](e)},has(t,s){return s in t||s in Is}})):e.proxy}function Td(e,t=!0){return re(e)?e.displayName||e.name:e.name||t&&e.__name}function Sd(e){return re(e)&&"__vccOpts"in e}const We=(e,t)=>dc(e,t,zs);function rr(e,t,s){try{yn(-1);const n=arguments.length;return n===2?_e(t)&&!ee(t)?vn(t)?Ge(e,null,[t]):Ge(e,t):Ge(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&vn(s)&&(s=[s]),Ge(e,t,s))}finally{yn(1)}}const wd="3.5.24";let ka;const Lr=typeof window<"u"&&window.trustedTypes;if(Lr)try{ka=Lr.createPolicy("vue",{createHTML:e=>e})}catch{}const zi=ka?e=>ka.createHTML(e):e=>e,Ed="http://www.w3.org/2000/svg",xd="http://www.w3.org/1998/Math/MathML",Et=typeof document<"u"?document:null,Mr=Et&&Et.createElement("template"),Ad={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const a=t==="svg"?Et.createElementNS(Ed,e):t==="mathml"?Et.createElementNS(xd,e):s?Et.createElement(e,{is:s}):Et.createElement(e);return e==="select"&&n&&n.multiple!=null&&a.setAttribute("multiple",n.multiple),a},createText:e=>Et.createTextNode(e),createComment:e=>Et.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Et.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,a,r){const o=s?s.previousSibling:t.lastChild;if(a&&(a===r||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),s),!(a===r||!(a=a.nextSibling)););else{Mr.innerHTML=zi(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const i=Mr.content;if(n==="svg"||n==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Bt="transition",xs="animation",js=Symbol("_vtc"),ji={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pd=Oe({},fi,ji),Od=e=>(e.displayName="Transition",e.props=Pd,e),kd=Od((e,{slots:t})=>rr(vc,Cd(e),t)),ss=(e,t=[])=>{ee(e)?e.forEach(s=>s(...t)):e&&e(...t)},Ir=e=>e?ee(e)?e.some(t=>t.length>1):e.length>1:!1;function Cd(e){const t={};for(const P in e)P in ji||(t[P]=e[P]);if(e.css===!1)return t;const{name:s="v",type:n,duration:a,enterFromClass:r=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:d=i,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=e,b=Rd(a),v=b&&b[0],_=b&&b[1],{onBeforeEnter:h,onEnter:m,onEnterCancelled:g,onLeave:y,onLeaveCancelled:T,onBeforeAppear:A=h,onAppear:O=m,onAppearCancelled:C=g}=t,E=(P,j,Q,oe)=>{P._enterCancelled=oe,ns(P,j?d:i),ns(P,j?c:o),Q&&Q()},x=(P,j)=>{P._isLeaving=!1,ns(P,u),ns(P,f),ns(P,p),j&&j()},L=P=>(j,Q)=>{const oe=P?O:m,G=()=>E(j,P,Q);ss(oe,[j,G]),Dr(()=>{ns(j,P?l:r),St(j,P?d:i),Ir(oe)||Nr(j,n,v,G)})};return Oe(t,{onBeforeEnter(P){ss(h,[P]),St(P,r),St(P,o)},onBeforeAppear(P){ss(A,[P]),St(P,l),St(P,c)},onEnter:L(!1),onAppear:L(!0),onLeave(P,j){P._isLeaving=!0;const Q=()=>x(P,j);St(P,u),P._enterCancelled?(St(P,p),$r(P)):($r(P),St(P,p)),Dr(()=>{P._isLeaving&&(ns(P,u),St(P,f),Ir(y)||Nr(P,n,_,Q))}),ss(y,[P,Q])},onEnterCancelled(P){E(P,!1,void 0,!0),ss(g,[P])},onAppearCancelled(P){E(P,!0,void 0,!0),ss(C,[P])},onLeaveCancelled(P){x(P),ss(T,[P])}})}function Rd(e){if(e==null)return null;if(_e(e))return[Zn(e.enter),Zn(e.leave)];{const t=Zn(e);return[t,t]}}function Zn(e){return kl(e)}function St(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[js]||(e[js]=new Set)).add(t)}function ns(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const s=e[js];s&&(s.delete(t),s.size||(e[js]=void 0))}function Dr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ld=0;function Nr(e,t,s,n){const a=e._endId=++Ld,r=()=>{a===e._endId&&n()};if(s!=null)return setTimeout(r,s);const{type:o,timeout:i,propCount:l}=Md(e,t);if(!o)return n();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),r()},p=f=>{f.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},i+1),e.addEventListener(c,p)}function Md(e,t){const s=window.getComputedStyle(e),n=b=>(s[b]||"").split(", "),a=n(`${Bt}Delay`),r=n(`${Bt}Duration`),o=Br(a,r),i=n(`${xs}Delay`),l=n(`${xs}Duration`),c=Br(i,l);let d=null,u=0,p=0;t===Bt?o>0&&(d=Bt,u=o,p=r.length):t===xs?c>0&&(d=xs,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?Bt:xs:null,p=d?d===Bt?r.length:l.length:0);const f=d===Bt&&/\b(?:transform|all)(?:,|$)/.test(n(`${Bt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function Br(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,n)=>Fr(s)+Fr(e[n])))}function Fr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function $r(e){return(e?e.ownerDocument:document).body.offsetHeight}function Id(e,t,s){const n=e[js];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Ur=Symbol("_vod"),Dd=Symbol("_vsh"),Nd=Symbol(""),Bd=/(?:^|;)\s*display\s*:/;function Fd(e,t,s){const n=e.style,a=Ae(s);let r=!1;if(s&&!a){if(t)if(Ae(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&un(n,i,"")}else for(const o in t)s[o]==null&&un(n,o,"");for(const o in s)o==="display"&&(r=!0),un(n,o,s[o])}else if(a){if(t!==s){const o=n[Nd];o&&(s+=";"+o),n.cssText=s,r=Bd.test(s)}}else t&&e.removeAttribute("style");Ur in e&&(e[Ur]=r?n.display:"",e[Dd]&&(n.display="none"))}const Hr=/\s*!important$/;function un(e,t,s){if(ee(s))s.forEach(n=>un(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=$d(e,t);Hr.test(s)?e.setProperty(Xt(n),s.replace(Hr,""),"important"):e[n]=s}}const Gr=["Webkit","Moz","ms"],ea={};function $d(e,t){const s=ea[t];if(s)return s;let n=tt(t);if(n!=="filter"&&n in e)return ea[t]=n;n=kn(n);for(let a=0;a<Gr.length;a++){const r=Gr[a]+n;if(r in e)return ea[t]=r}return t}const Yr="http://www.w3.org/1999/xlink";function zr(e,t,s,n,a,r=Dl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Yr,t.slice(6,t.length)):e.setAttributeNS(Yr,t,s):s==null||r&&!No(s)?e.removeAttribute(t):e.setAttribute(t,r?"":_t(s)?String(s):s)}function jr(e,t,s,n,a){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?zi(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(i!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const i=typeof e[t];i==="boolean"?s=No(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(a||t)}function Ki(e,t,s,n){e.addEventListener(t,s,n)}function Ud(e,t,s,n){e.removeEventListener(t,s,n)}const Kr=Symbol("_vei");function Hd(e,t,s,n,a=null){const r=e[Kr]||(e[Kr]={}),o=r[t];if(n&&o)o.value=n;else{const[i,l]=Gd(t);if(n){const c=r[t]=jd(n,a);Ki(e,i,c,l)}else o&&(Ud(e,i,o,l),r[t]=void 0)}}const qr=/(?:Once|Passive|Capture)$/;function Gd(e){let t;if(qr.test(e)){t={};let n;for(;n=e.match(qr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let ta=0;const Yd=Promise.resolve(),zd=()=>ta||(Yd.then(()=>ta=0),ta=Date.now());function jd(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;ot(Kd(n,s.value),t,5,[n])};return s.value=e,s.attached=zd(),s}function Kd(e,t){if(ee(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>a=>!a._stopped&&n&&n(a))}else return t}const Wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,qd=(e,t,s,n,a,r)=>{const o=a==="svg";t==="class"?Id(e,n,o):t==="style"?Fd(e,s,n):An(t)?Ua(t)||Hd(e,t,s,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wd(e,t,n,o))?(jr(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&zr(e,t,n,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ae(n))?jr(e,tt(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),zr(e,t,n,o))};function Wd(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wr(t)&&re(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Wr(t)&&Ae(s)?!1:t in e}const Vr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ee(t)?s=>on(t,s):t},sa=Symbol("_assign"),Vd={deep:!0,created(e,t,s){e[sa]=Vr(s),Ki(e,"change",()=>{const n=e._modelValue,a=Jd(e),r=e.checked,o=e[sa];if(ee(n)){const i=Bo(n,a),l=i!==-1;if(r&&!l)o(n.concat(a));else if(!r&&l){const c=[...n];c.splice(i,1),o(c)}}else if(Pn(n)){const i=new Set(n);r?i.add(a):i.delete(a),o(i)}else o(qi(e,r))})},mounted:Jr,beforeUpdate(e,t,s){e[sa]=Vr(s),Jr(e,t,s)}};function Jr(e,{value:t,oldValue:s},n){e._modelValue=t;let a;if(ee(t))a=Bo(t,n.props.value)>-1;else if(Pn(t))a=t.has(n.props.value);else{if(t===s)return;a=Rn(t,qi(e,!0))}e.checked!==a&&(e.checked=a)}function Jd(e){return"_value"in e?e._value:e.value}function qi(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Xd=["ctrl","shift","alt","meta"],Qd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Xd.some(s=>e[`${s}Key`]&&!t.includes(s))},Un=(e,t)=>{const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((a,...r)=>{for(let o=0;o<t.length;o++){const i=Qd[t[o]];if(i&&i(a,t))return}return e(a,...r)}))},Zd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Pt=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(a=>{if(!("key"in a))return;const r=Xt(a.key);if(t.some(o=>o===r||Zd[o]===r))return e(a)}))},eu=Oe({patchProp:qd},Ad);let Xr;function tu(){return Xr||(Xr=Vc(eu))}const su=((...e)=>{const t=tu().createApp(...e),{mount:s}=t;return t.mount=n=>{const a=au(n);if(!a)return;const r=t._component;!re(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,nu(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t});function nu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function au(e){return Ae(e)?document.querySelector(e):e}let Wi;const Hn=e=>Wi=e,Vi=Symbol();function Ca(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Bs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Bs||(Bs={}));function ru(){const e=Go(!0),t=e.run(()=>Xe({}));let s=[],n=[];const a=Qa({install(r){Hn(a),a._a=r,r.provide(Vi,a),r.config.globalProperties.$pinia=a,n.forEach(o=>s.push(o)),n=[]},use(r){return this._a?s.push(r):n.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return a}const Ji=()=>{};function Qr(e,t,s,n=Ji){e.add(t);const a=()=>{e.delete(t)&&n()};return!s&&Yo()&&Bl(a),a}function fs(e,...t){e.forEach(s=>{s(...t)})}const ou=e=>e(),Zr=Symbol(),na=Symbol();function Ra(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,n)=>e.set(n,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const n=t[s],a=e[s];Ca(a)&&Ca(n)&&e.hasOwnProperty(s)&&!xe(n)&&!cs(n)?e[s]=Ra(a,n):e[s]=n}return e}const iu=Symbol();function lu(e){return!Ca(e)||!Object.prototype.hasOwnProperty.call(e,iu)}const{assign:$t}=Object;function cu(e){return!!(xe(e)&&e.effect)}function du(e,t,s,n){const{state:a,actions:r,getters:o}=t,i=s.state.value[e];let l;function c(){i||(s.state.value[e]=a?a():{});const d=oc(s.state.value[e]);return $t(d,r,Object.keys(o||{}).reduce((u,p)=>(u[p]=Qa(We(()=>{Hn(s);const f=s._s.get(e);return o[p].call(f,f)})),u),{}))}return l=Xi(e,c,t,s,n,!0),l}function Xi(e,t,s={},n,a,r){let o;const i=$t({actions:{}},s),l={deep:!0};let c,d,u=new Set,p=new Set,f;const b=n.state.value[e];!r&&!b&&(n.state.value[e]={}),Xe({});let v;function _(C){let E;c=d=!1,typeof C=="function"?(C(n.state.value[e]),E={type:Bs.patchFunction,storeId:e,events:f}):(Ra(n.state.value[e],C),E={type:Bs.patchObject,payload:C,storeId:e,events:f});const x=v=Symbol();Za().then(()=>{v===x&&(c=!0)}),d=!0,fs(u,E,n.state.value[e])}const h=r?function(){const{state:E}=s,x=E?E():{};this.$patch(L=>{$t(L,x)})}:Ji;function m(){o.stop(),u.clear(),p.clear(),n._s.delete(e)}const g=(C,E="")=>{if(Zr in C)return C[na]=E,C;const x=function(){Hn(n);const L=Array.from(arguments),P=new Set,j=new Set;function Q(H){P.add(H)}function oe(H){j.add(H)}fs(p,{args:L,name:x[na],store:T,after:Q,onError:oe});let G;try{G=C.apply(this&&this.$id===e?this:T,L)}catch(H){throw fs(j,H),H}return G instanceof Promise?G.then(H=>(fs(P,H),H)).catch(H=>(fs(j,H),Promise.reject(H))):(fs(P,G),G)};return x[Zr]=!0,x[na]=E,x},y={_p:n,$id:e,$onAction:Qr.bind(null,p),$patch:_,$reset:h,$subscribe(C,E={}){const x=Qr(u,C,E.detached,()=>L()),L=o.run(()=>Ds(()=>n.state.value[e],P=>{(E.flush==="sync"?d:c)&&C({storeId:e,type:Bs.direct,events:f},P)},$t({},l,E)));return x},$dispose:m},T=Ct(y);n._s.set(e,T);const O=(n._a&&n._a.runWithContext||ou)(()=>n._e.run(()=>(o=Go()).run(()=>t({action:g}))));for(const C in O){const E=O[C];if(xe(E)&&!cu(E)||cs(E))r||(b&&lu(E)&&(xe(E)?E.value=b[C]:Ra(E,b[C])),n.state.value[e][C]=E);else if(typeof E=="function"){const x=g(E,C);O[C]=x,i.actions[C]=E}}return $t(T,O),$t(ue(T),O),Object.defineProperty(T,"$state",{get:()=>n.state.value[e],set:C=>{_(E=>{$t(E,C)})}}),n._p.forEach(C=>{$t(T,o.run(()=>C({store:T,app:n._a,pinia:n,options:i})))}),b&&r&&s.hydrate&&s.hydrate(T.$state,b),c=!0,d=!0,T}function uu(e,t,s){let n;const a=typeof t=="function";n=a?s:t;function r(o,i){const l=Gc();return o=o||(l?et(Vi,null):null),o&&Hn(o),o=Wi,o._s.has(e)||(a?Xi(e,t,n,o):du(e,n,o)),o._s.get(e)}return r.$id=e,r}const gs=typeof document<"u";function Qi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function pu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Qi(e.default)}const pe=Object.assign;function aa(e,t){const s={};for(const n in t){const a=t[n];s[n]=it(a)?a.map(e):e(a)}return s}const Fs=()=>{},it=Array.isArray;function eo(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}const Zi=/#/g,fu=/&/g,hu=/\//g,mu=/=/g,gu=/\?/g,el=/\+/g,bu=/%5B/g,_u=/%5D/g,tl=/%5E/g,yu=/%60/g,sl=/%7B/g,vu=/%7C/g,nl=/%7D/g,Tu=/%20/g;function or(e){return e==null?"":encodeURI(""+e).replace(vu,"|").replace(bu,"[").replace(_u,"]")}function Su(e){return or(e).replace(sl,"{").replace(nl,"}").replace(tl,"^")}function La(e){return or(e).replace(el,"%2B").replace(Tu,"+").replace(Zi,"%23").replace(fu,"%26").replace(yu,"`").replace(sl,"{").replace(nl,"}").replace(tl,"^")}function wu(e){return La(e).replace(mu,"%3D")}function Eu(e){return or(e).replace(Zi,"%23").replace(gu,"%3F")}function xu(e){return Eu(e).replace(hu,"%2F")}function Ks(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Au=/\/$/,Pu=e=>e.replace(Au,"");function ra(e,t,s="/"){let n,a={},r="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(n=t.slice(0,l),r=t.slice(l,i>0?i:t.length),a=e(r.slice(1))),i>=0&&(n=n||t.slice(0,i),o=t.slice(i,t.length)),n=Ru(n??t,s),{fullPath:n+r+o,path:n,query:a,hash:Ks(o)}}function Ou(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function to(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ku(e,t,s){const n=t.matched.length-1,a=s.matched.length-1;return n>-1&&n===a&&vs(t.matched[n],s.matched[a])&&al(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function vs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function al(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Cu(e[s],t[s]))return!1;return!0}function Cu(e,t){return it(e)?so(e,t):it(t)?so(t,e):e===t}function so(e,t){return it(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function Ru(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),a=n[n.length-1];(a===".."||a===".")&&n.push("");let r=s.length-1,o,i;for(o=0;o<n.length;o++)if(i=n[o],i!==".")if(i==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+n.slice(o).join("/")}const Ft={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ma=(function(e){return e.pop="pop",e.push="push",e})({}),oa=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Lu(e){if(!e)if(gs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pu(e)}const Mu=/^[^#]+#/;function Iu(e,t){return e.replace(Mu,"#")+t}function Du(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const Gn=()=>({left:window.scrollX,top:window.scrollY});function Nu(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;t=Du(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function no(e,t){return(history.state?history.state.position-t:-1)+e}const Ia=new Map;function Bu(e,t){Ia.set(e,t)}function Fu(e){const t=Ia.get(e);return Ia.delete(e),t}function $u(e){return typeof e=="string"||e&&typeof e=="object"}function rl(e){return typeof e=="string"||typeof e=="symbol"}let we=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ol=Symbol("");we.MATCHER_NOT_FOUND+"",we.NAVIGATION_GUARD_REDIRECT+"",we.NAVIGATION_ABORTED+"",we.NAVIGATION_CANCELLED+"",we.NAVIGATION_DUPLICATED+"";function Ts(e,t){return pe(new Error,{type:e,[ol]:!0},t)}function wt(e,t){return e instanceof Error&&ol in e&&(t==null||!!(e.type&t))}const Uu=["params","query","hash"];function Hu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of Uu)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function Gu(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const a=s[n].replace(el," "),r=a.indexOf("="),o=Ks(r<0?a:a.slice(0,r)),i=r<0?null:Ks(a.slice(r+1));if(o in t){let l=t[o];it(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function ao(e){let t="";for(let s in e){const n=e[s];if(s=wu(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(it(n)?n.map(a=>a&&La(a)):[n&&La(n)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+s,a!=null&&(t+="="+a))})}return t}function Yu(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=it(n)?n.map(a=>a==null?null:""+a):n==null?n:""+n)}return t}const zu=Symbol(""),ro=Symbol(""),Yn=Symbol(""),ir=Symbol(""),Da=Symbol("");function As(){let e=[];function t(n){return e.push(n),()=>{const a=e.indexOf(n);a>-1&&e.splice(a,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function Gt(e,t,s,n,a,r=o=>o()){const o=n&&(n.enterCallbacks[a]=n.enterCallbacks[a]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Ts(we.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?l(p):$u(p)?l(Ts(we.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&n.enterCallbacks[a]===o&&typeof p=="function"&&o.push(p),i())},d=r(()=>e.call(n&&n.instances[a],t,s,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function ia(e,t,s,n,a=r=>r()){const r=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(Qi(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Gt(c,s,n,o,i,a))}else{let c=l();r.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=pu(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&Gt(p,s,n,o,i,a)()}))}}return r}function ju(e,t){const s=[],n=[],a=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const i=t.matched[o];i&&(e.matched.find(c=>vs(c,i))?n.push(i):s.push(i));const l=e.matched[o];l&&(t.matched.find(c=>vs(c,l))||a.push(l))}return[s,n,a]}let Ku=()=>location.protocol+"//"+location.host;function il(e,t){const{pathname:s,search:n,hash:a}=t,r=e.indexOf("#");if(r>-1){let o=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(o);return i[0]!=="/"&&(i="/"+i),to(i,"")}return to(s,e)+n+a}function qu(e,t,s,n){let a=[],r=[],o=null;const i=({state:p})=>{const f=il(e,location),b=s.value,v=t.value;let _=0;if(p){if(s.value=f,t.value=p,o&&o===b){o=null;return}_=v?p.position-v.position:0}else n(f);a.forEach(h=>{h(s.value,b,{delta:_,type:Ma.pop,direction:_?_>0?oa.forward:oa.back:oa.unknown})})};function l(){o=s.value}function c(p){a.push(p);const f=()=>{const b=a.indexOf(p);b>-1&&a.splice(b,1)};return r.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(pe({},p.state,{scroll:Gn()}),"")}}function u(){for(const p of r)p();r=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function oo(e,t,s,n=!1,a=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:a?Gn():null}}function Wu(e){const{history:t,location:s}=window,n={value:il(e,s)},a={value:t.state};a.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,d){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+l:Ku()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),a.value=c}catch(f){console.error(f),s[d?"replace":"assign"](p)}}function o(l,c){r(l,pe({},t.state,oo(a.value.back,l,a.value.forward,!0),c,{position:a.value.position}),!0),n.value=l}function i(l,c){const d=pe({},a.value,t.state,{forward:l,scroll:Gn()});r(d.current,d,!0),r(l,pe({},oo(n.value,l,null),{position:d.position+1},c),!1),n.value=l}return{location:n,state:a,push:i,replace:o}}function Vu(e){e=Lu(e);const t=Wu(e),s=qu(e,t.state,t.location,t.replace);function n(r,o=!0){o||s.pauseListeners(),history.go(r)}const a=pe({location:"",base:e,go:n,createHref:Iu.bind(null,e)},t,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Ju(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Vu(e)}let is=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Pe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Pe||{});const Xu={type:is.Static,value:""},Qu=/[a-zA-Z0-9_]/;function Zu(e){if(!e)return[[]];if(e==="/")return[[Xu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${s})/"${c}": ${f}`)}let s=Pe.Static,n=s;const a=[];let r;function o(){r&&a.push(r),r=[]}let i=0,l,c="",d="";function u(){c&&(s===Pe.Static?r.push({type:is.Static,value:c}):s===Pe.Param||s===Pe.ParamRegExp||s===Pe.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:is.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&s!==Pe.ParamRegExp){n=s,s=Pe.EscapeNext;continue}switch(s){case Pe.Static:l==="/"?(c&&u(),o()):l===":"?(u(),s=Pe.Param):p();break;case Pe.EscapeNext:p(),s=n;break;case Pe.Param:l==="("?s=Pe.ParamRegExp:Qu.test(l)?p():(u(),s=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Pe.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:s=Pe.ParamRegExpEnd:d+=l;break;case Pe.ParamRegExpEnd:u(),s=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===Pe.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),a}const io="[^/]+?",ep={sensitive:!1,strict:!1,start:!0,end:!0};var Ne=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ne||{});const tp=/[.+*?^${}()[\]/\\]/g;function sp(e,t){const s=pe({},ep,t),n=[];let a=s.start?"^":"";const r=[];for(const c of e){const d=c.length?[]:[Ne.Root];s.strict&&!c.length&&(a+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=Ne.Segment+(s.sensitive?Ne.BonusCaseSensitive:0);if(p.type===is.Static)u||(a+="/"),a+=p.value.replace(tp,"\\$&"),f+=Ne.Static;else if(p.type===is.Param){const{value:b,repeatable:v,optional:_,regexp:h}=p;r.push({name:b,repeatable:v,optional:_});const m=h||io;if(m!==io){f+=Ne.BonusCustomRegExp;try{`${m}`}catch(y){throw new Error(`Invalid custom RegExp for param "${b}" (${m}): `+y.message)}}let g=v?`((?:${m})(?:/(?:${m}))*)`:`(${m})`;u||(g=_&&c.length<2?`(?:/${g})`:"/"+g),_&&(g+="?"),a+=g,f+=Ne.Dynamic,_&&(f+=Ne.BonusOptional),v&&(f+=Ne.BonusRepeatable),m===".*"&&(f+=Ne.BonusWildcard)}d.push(f)}n.push(d)}if(s.strict&&s.end){const c=n.length-1;n[c][n[c].length-1]+=Ne.BonusStrict}s.strict||(a+="/?"),s.end?a+="$":s.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const o=new RegExp(a,s.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",b=r[p-1];u[b.name]=f&&b.repeatable?f.split("/"):f}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===is.Static)d+=f.value;else if(f.type===is.Param){const{value:b,repeatable:v,optional:_}=f,h=b in c?c[b]:"";if(it(h)&&!v)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const m=it(h)?h.join("/"):h;if(!m)if(_)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${b}"`);d+=m}}return d||"/"}return{re:o,score:n,keys:r,parse:i,stringify:l}}function np(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===Ne.Static+Ne.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ne.Static+Ne.Segment?1:-1:0}function ll(e,t){let s=0;const n=e.score,a=t.score;for(;s<n.length&&s<a.length;){const r=np(n[s],a[s]);if(r)return r;s++}if(Math.abs(a.length-n.length)===1){if(lo(n))return 1;if(lo(a))return-1}return a.length-n.length}function lo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ap={strict:!1,end:!0,sensitive:!1};function rp(e,t,s){const n=sp(Zu(e.path),s),a=pe(n,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function op(e,t){const s=[],n=new Map;t=eo(ap,t);function a(u){return n.get(u)}function r(u,p,f){const b=!f,v=uo(u);v.aliasOf=f&&f.record;const _=eo(t,u),h=[v];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of y)h.push(uo(pe({},v,{components:f?f.record.components:v.components,path:T,aliasOf:f?f.record:v})))}let m,g;for(const y of h){const{path:T}=y;if(p&&T[0]!=="/"){const A=p.record.path,O=A[A.length-1]==="/"?"":"/";y.path=p.record.path+(T&&O+T)}if(m=rp(y,p,_),f?f.alias.push(m):(g=g||m,g!==m&&g.alias.push(m),b&&u.name&&!po(m)&&o(u.name)),cl(m)&&l(m),v.children){const A=v.children;for(let O=0;O<A.length;O++)r(A[O],m,f&&f.children[O])}f=f||m}return g?()=>{o(g)}:Fs}function o(u){if(rl(u)){const p=n.get(u);p&&(n.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return s}function l(u){const p=cp(u,s);s.splice(p,0,u),u.record.name&&!po(u)&&n.set(u.record.name,u)}function c(u,p){let f,b={},v,_;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Ts(we.MATCHER_NOT_FOUND,{location:u});_=f.record.name,b=pe(co(p.params,f.keys.filter(g=>!g.optional).concat(f.parent?f.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),u.params&&co(u.params,f.keys.map(g=>g.name))),v=f.stringify(b)}else if(u.path!=null)v=u.path,f=s.find(g=>g.re.test(v)),f&&(b=f.parse(v),_=f.record.name);else{if(f=p.name?n.get(p.name):s.find(g=>g.re.test(p.path)),!f)throw Ts(we.MATCHER_NOT_FOUND,{location:u,currentLocation:p});_=f.record.name,b=pe({},p.params,u.params),v=f.stringify(b)}const h=[];let m=f;for(;m;)h.unshift(m.record),m=m.parent;return{name:_,path:v,params:b,matched:h,meta:lp(h)}}e.forEach(u=>r(u));function d(){s.length=0,n.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:a}}function co(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function uo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ip(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ip(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function po(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function lp(e){return e.reduce((t,s)=>pe(t,s.meta),{})}function cp(e,t){let s=0,n=t.length;for(;s!==n;){const r=s+n>>1;ll(e,t[r])<0?n=r:s=r+1}const a=dp(e);return a&&(n=t.lastIndexOf(a,n-1)),n}function dp(e){let t=e;for(;t=t.parent;)if(cl(t)&&ll(e,t)===0)return t}function cl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function fo(e){const t=et(Yn),s=et(ir),n=We(()=>{const l=Kt(e.to);return t.resolve(l)}),a=We(()=>{const{matched:l}=n.value,{length:c}=l,d=l[c-1],u=s.matched;if(!d||!u.length)return-1;const p=u.findIndex(vs.bind(null,d));if(p>-1)return p;const f=ho(l[c-2]);return c>1&&ho(d)===f&&u[u.length-1].path!==f?u.findIndex(vs.bind(null,l[c-2])):p}),r=We(()=>a.value>-1&&mp(s.params,n.value.params)),o=We(()=>a.value>-1&&a.value===s.matched.length-1&&al(s.params,n.value.params));function i(l={}){if(hp(l)){const c=t[Kt(e.replace)?"replace":"push"](Kt(e.to)).catch(Fs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:We(()=>n.value.href),isActive:r,isExactActive:o,navigate:i}}function up(e){return e.length===1?e[0]:e}const pp=_i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:fo,setup(e,{slots:t}){const s=Ct(fo(e)),{options:n}=et(Yn),a=We(()=>({[mo(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[mo(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&up(t.default(s));return e.custom?r:rr("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},r)}}}),fp=pp;function hp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mp(e,t){for(const s in t){const n=t[s],a=e[s];if(typeof n=="string"){if(n!==a)return!1}else if(!it(a)||a.length!==n.length||n.some((r,o)=>r!==a[o]))return!1}return!0}function ho(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mo=(e,t,s)=>e??t??s,gp=_i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=et(Da),a=We(()=>e.route||n.value),r=et(ro,0),o=We(()=>{let c=Kt(r);const{matched:d}=a.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=We(()=>a.value.matched[o.value]);ln(ro,We(()=>o.value+1)),ln(zu,i),ln(Da,a);const l=Xe();return Ds(()=>[l.value,i.value,e.name],([c,d,u],[p,f,b])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!vs(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=a.value,d=e.name,u=i.value,p=u&&u.components[d];if(!p)return go(s.default,{Component:p,route:c});const f=u.props[d],b=f?f===!0?c.params:typeof f=="function"?f(c):f:null,_=rr(p,pe({},b,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return go(s.default,{Component:_,route:c})||_}}});function go(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const dl=gp;function bp(e){const t=op(e.routes,e),s=e.parseQuery||Gu,n=e.stringifyQuery||ao,a=e.history,r=As(),o=As(),i=As(),l=nc(Ft);let c=Ft;gs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=aa.bind(null,I=>""+I),u=aa.bind(null,xu),p=aa.bind(null,Ks);function f(I,K){let q,X;return rl(I)?(q=t.getRecordMatcher(I),X=K):X=I,t.addRoute(X,q)}function b(I){const K=t.getRecordMatcher(I);K&&t.removeRoute(K)}function v(){return t.getRoutes().map(I=>I.record)}function _(I){return!!t.getRecordMatcher(I)}function h(I,K){if(K=pe({},K||l.value),typeof I=="string"){const k=ra(s,I,K.path),D=t.resolve({path:k.path},K),B=a.createHref(k.fullPath);return pe(k,D,{params:p(D.params),hash:Ks(k.hash),redirectedFrom:void 0,href:B})}let q;if(I.path!=null)q=pe({},I,{path:ra(s,I.path,K.path).path});else{const k=pe({},I.params);for(const D in k)k[D]==null&&delete k[D];q=pe({},I,{params:u(k)}),K.params=u(K.params)}const X=t.resolve(q,K),ce=I.hash||"";X.params=d(p(X.params));const S=Ou(n,pe({},I,{hash:Su(ce),path:X.path})),w=a.createHref(S);return pe({fullPath:S,hash:ce,query:n===ao?Yu(I.query):I.query||{}},X,{redirectedFrom:void 0,href:w})}function m(I){return typeof I=="string"?ra(s,I,l.value.path):pe({},I)}function g(I,K){if(c!==I)return Ts(we.NAVIGATION_CANCELLED,{from:K,to:I})}function y(I){return O(I)}function T(I){return y(pe(m(I),{replace:!0}))}function A(I,K){const q=I.matched[I.matched.length-1];if(q&&q.redirect){const{redirect:X}=q;let ce=typeof X=="function"?X(I,K):X;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=m(ce):{path:ce},ce.params={}),pe({query:I.query,hash:I.hash,params:ce.path!=null?{}:I.params},ce)}}function O(I,K){const q=c=h(I),X=l.value,ce=I.state,S=I.force,w=I.replace===!0,k=A(q,X);if(k)return O(pe(m(k),{state:typeof k=="object"?pe({},ce,k.state):ce,force:S,replace:w}),K||q);const D=q;D.redirectedFrom=K;let B;return!S&&ku(n,X,q)&&(B=Ts(we.NAVIGATION_DUPLICATED,{to:D,from:X}),ie(X,X,!0,!1)),(B?Promise.resolve(B):x(D,X)).catch(N=>wt(N)?wt(N,we.NAVIGATION_GUARD_REDIRECT)?N:ne(N):$(N,D,X)).then(N=>{if(N){if(wt(N,we.NAVIGATION_GUARD_REDIRECT))return O(pe({replace:w},m(N.to),{state:typeof N.to=="object"?pe({},ce,N.to.state):ce,force:S}),K||D)}else N=P(D,X,!0,w,ce);return L(D,X,N),N})}function C(I,K){const q=g(I,K);return q?Promise.reject(q):Promise.resolve()}function E(I){const K=Ee.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(I):I()}function x(I,K){let q;const[X,ce,S]=ju(I,K);q=ia(X.reverse(),"beforeRouteLeave",I,K);for(const k of X)k.leaveGuards.forEach(D=>{q.push(Gt(D,I,K))});const w=C.bind(null,I,K);return q.push(w),Te(q).then(()=>{q=[];for(const k of r.list())q.push(Gt(k,I,K));return q.push(w),Te(q)}).then(()=>{q=ia(ce,"beforeRouteUpdate",I,K);for(const k of ce)k.updateGuards.forEach(D=>{q.push(Gt(D,I,K))});return q.push(w),Te(q)}).then(()=>{q=[];for(const k of S)if(k.beforeEnter)if(it(k.beforeEnter))for(const D of k.beforeEnter)q.push(Gt(D,I,K));else q.push(Gt(k.beforeEnter,I,K));return q.push(w),Te(q)}).then(()=>(I.matched.forEach(k=>k.enterCallbacks={}),q=ia(S,"beforeRouteEnter",I,K,E),q.push(w),Te(q))).then(()=>{q=[];for(const k of o.list())q.push(Gt(k,I,K));return q.push(w),Te(q)}).catch(k=>wt(k,we.NAVIGATION_CANCELLED)?k:Promise.reject(k))}function L(I,K,q){i.list().forEach(X=>E(()=>X(I,K,q)))}function P(I,K,q,X,ce){const S=g(I,K);if(S)return S;const w=K===Ft,k=gs?history.state:{};q&&(X||w?a.replace(I.fullPath,pe({scroll:w&&k&&k.scroll},ce)):a.push(I.fullPath,ce)),l.value=I,ie(I,K,q,w),ne()}let j;function Q(){j||(j=a.listen((I,K,q)=>{if(!Ie.listening)return;const X=h(I),ce=A(X,Ie.currentRoute.value);if(ce){O(pe(ce,{replace:!0,force:!0}),X).catch(Fs);return}c=X;const S=l.value;gs&&Bu(no(S.fullPath,q.delta),Gn()),x(X,S).catch(w=>wt(w,we.NAVIGATION_ABORTED|we.NAVIGATION_CANCELLED)?w:wt(w,we.NAVIGATION_GUARD_REDIRECT)?(O(pe(m(w.to),{force:!0}),X).then(k=>{wt(k,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&!q.delta&&q.type===Ma.pop&&a.go(-1,!1)}).catch(Fs),Promise.reject()):(q.delta&&a.go(-q.delta,!1),$(w,X,S))).then(w=>{w=w||P(X,S,!1),w&&(q.delta&&!wt(w,we.NAVIGATION_CANCELLED)?a.go(-q.delta,!1):q.type===Ma.pop&&wt(w,we.NAVIGATION_ABORTED|we.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),L(X,S,w)}).catch(Fs)}))}let oe=As(),G=As(),H;function $(I,K,q){ne(I);const X=G.list();return X.length?X.forEach(ce=>ce(I,K,q)):console.error(I),Promise.reject(I)}function te(){return H&&l.value!==Ft?Promise.resolve():new Promise((I,K)=>{oe.add([I,K])})}function ne(I){return H||(H=!I,Q(),oe.list().forEach(([K,q])=>I?q(I):K()),oe.reset()),I}function ie(I,K,q,X){const{scrollBehavior:ce}=e;if(!gs||!ce)return Promise.resolve();const S=!q&&Fu(no(I.fullPath,0))||(X||!q)&&history.state&&history.state.scroll||null;return Za().then(()=>ce(I,K,S)).then(w=>w&&Nu(w)).catch(w=>$(w,I,K))}const le=I=>a.go(I);let ge;const Ee=new Set,Ie={currentRoute:l,listening:!0,addRoute:f,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:_,getRoutes:v,resolve:h,options:e,push:y,replace:T,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:G.add,isReady:te,install(I){I.component("RouterLink",fp),I.component("RouterView",dl),I.config.globalProperties.$router=Ie,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(l)}),gs&&!ge&&l.value===Ft&&(ge=!0,y(a.location).catch(X=>{}));const K={};for(const X in Ft)Object.defineProperty(K,X,{get:()=>l.value[X],enumerable:!0});I.provide(Yn,Ie),I.provide(ir,ai(K)),I.provide(Da,l);const q=I.unmount;Ee.add(I),I.unmount=function(){Ee.delete(I),Ee.size<1&&(c=Ft,j&&j(),j=null,l.value=Ft,ge=!1,H=!1),q()}}};function Te(I){return I.reduce((K,q)=>K.then(()=>E(q)),Promise.resolve())}return Ie}function vt(){return et(Yn)}function ul(e){return et(ir)}var _p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},vp=Os.exports,bo;function Tp(){return bo||(bo=1,(function(e,t){(function(s,n){var a={};s.PubSub?(a=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=a,n(a)),e!==void 0&&e.exports&&(t=e.exports=a),t.PubSub=a,e.exports=t=a})(typeof window=="object"&&window||vp||_p,function(s){var n={},a=-1,r="*";function o(v){var _;for(_ in v)if(Object.prototype.hasOwnProperty.call(v,_))return!0;return!1}function i(v){return function(){throw v}}function l(v,_,h){try{v(_,h)}catch(m){setTimeout(i(m),0)}}function c(v,_,h){v(_,h)}function d(v,_,h,m){var g=n[_],y=m?c:l,T;if(Object.prototype.hasOwnProperty.call(n,_))for(T in g)Object.prototype.hasOwnProperty.call(g,T)&&y(g[T],v,h)}function u(v,_,h){return function(){var g=String(v),y=g.lastIndexOf(".");for(d(v,v,_,h);y!==-1;)g=g.substr(0,y),y=g.lastIndexOf("."),d(v,g,_,h);d(v,r,_,h)}}function p(v){var _=String(v),h=!!(Object.prototype.hasOwnProperty.call(n,_)&&o(n[_]));return h}function f(v){for(var _=String(v),h=p(_)||p(r),m=_.lastIndexOf(".");!h&&m!==-1;)_=_.substr(0,m),m=_.lastIndexOf("."),h=p(_);return h}function b(v,_,h,m){v=typeof v=="symbol"?v.toString():v;var g=u(v,_,m),y=f(v);return y?(h===!0?g():setTimeout(g,0),!0):!1}s.publish=function(v,_){return b(v,_,!1,s.immediateExceptions)},s.publishSync=function(v,_){return b(v,_,!0,s.immediateExceptions)},s.subscribe=function(v,_){if(typeof _!="function")return!1;v=typeof v=="symbol"?v.toString():v,Object.prototype.hasOwnProperty.call(n,v)||(n[v]={});var h="uid_"+String(++a);return n[v][h]=_,h},s.subscribeAll=function(v){return s.subscribe(r,v)},s.subscribeOnce=function(v,_){var h=s.subscribe(v,function(){s.unsubscribe(h),_.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){n={}},s.clearSubscriptions=function(_){var h;for(h in n)Object.prototype.hasOwnProperty.call(n,h)&&h.indexOf(_)===0&&delete n[h]},s.countSubscriptions=function(_){var h,m,g=0;for(h in n)if(Object.prototype.hasOwnProperty.call(n,h)&&h.indexOf(_)===0){for(m in n[h])g++;break}return g},s.getSubscriptions=function(_){var h,m=[];for(h in n)Object.prototype.hasOwnProperty.call(n,h)&&h.indexOf(_)===0&&m.push(h);return m},s.unsubscribe=function(v){var _=function(C){var E;for(E in n)if(Object.prototype.hasOwnProperty.call(n,E)&&E.indexOf(C)===0)return!0;return!1},h=typeof v=="string"&&(Object.prototype.hasOwnProperty.call(n,v)||_(v)),m=!h&&typeof v=="string",g=typeof v=="function",y=!1,T,A,O;if(h){s.clearSubscriptions(v);return}for(T in n)if(Object.prototype.hasOwnProperty.call(n,T)){if(A=n[T],m&&A[v]){delete A[v],y=v;break}if(g)for(O in A)Object.prototype.hasOwnProperty.call(A,O)&&A[O]===v&&(delete A[O],y=!0)}return y}})})(Os,Os.exports)),Os.exports}var Sp=Tp();const V=yp(Sp);let qt=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const wp={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Jt(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function Ep(e,t){let s;const n=()=>{if(s)return s;const a=indexedDB.open(e);return a.onupgradeneeded=()=>a.result.createObjectStore(t),s=Jt(a),s.then(r=>{r.onclose=()=>s=void 0},()=>{}),s};return(a,r)=>n().then(o=>r(o.transaction(t,a).objectStore(t)))}let la;function Xs(){return la||(la=Ep("keyval-store","keyval")),la}function xp(e,t=Xs()){return t("readonly",s=>Jt(s.get(e)))}function _o(e,t,s=Xs()){return s("readwrite",n=>(n.put(t,e),Jt(n.transaction)))}function ca(e,t=Xs()){return t("readwrite",s=>(s.delete(e),Jt(s.transaction)))}function pl(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Jt(e.transaction)}function hs(e=Xs()){return e("readonly",t=>{if(t.getAllKeys)return Jt(t.getAllKeys());const s=[];return pl(t,n=>s.push(n.key)).then(()=>s)})}function Ap(e=Xs()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Jt(t.getAllKeys()),Jt(t.getAll())]).then(([n,a])=>n.map((r,o)=>[r,a[o]]));const s=[];return e("readonly",n=>pl(n,a=>s.push([a.key,a.value])).then(()=>s))})}const Ss=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Sn=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!Sn(e[s],t[s]))return!1;return!0}if(Ss(e)&&Ss(t)){const s=Object.entries(e),n=new Set(Object.keys(t));if(s.length!==n.size)return!1;for(const[a,r]of s){if(!Sn(r,t[a]))return!1;n.delete(a)}return n.size===0}return!1},sn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ss(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Pp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",yo=e=>e>="0"&&e<="9"||e==="-",Op=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var R;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(R||(R={}));const vo={"(":R.TOK_LPAREN,")":R.TOK_RPAREN,"*":R.TOK_STAR,",":R.TOK_COMMA,".":R.TOK_DOT,":":R.TOK_COLON,"@":R.TOK_CURRENT,$:R.TOK_ROOT,"]":R.TOK_RBRACKET,"{":R.TOK_LBRACE,"}":R.TOK_RBRACE},kp={"!":!0,"<":!0,"=":!0,">":!0},Cp={"	":!0,"\n":!0,"\r":!0," ":!0};class Rp{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let n,a,r;for(;this._current<t.length;)if(Pp(t[this._current]))n=this._current,a=this.consumeUnquotedIdentifier(t),s.push({start:n,type:R.TOK_UNQUOTEDIDENTIFIER,value:a});else if(vo[t[this._current]]!==void 0)s.push({start:this._current,type:vo[t[this._current]],value:t[this._current]}),this._current+=1;else if(yo(t[this._current]))r=this.consumeNumber(t),s.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),s.push(r);else if(t[this._current]==='"')n=this._current,a=this.consumeQuotedIdentifier(t),s.push({start:n,type:R.TOK_QUOTEDIDENTIFIER,value:a});else if(t[this._current]==="'")n=this._current,a=this.consumeRawStringLiteral(t),s.push({start:n,type:R.TOK_LITERAL,value:a});else if(t[this._current]==="`"){n=this._current;const o=this.consumeLiteral(t);s.push({start:n,type:R.TOK_LITERAL,value:o})}else if(kp[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&s.push(r);else if(Cp[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")n=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:n,type:R.TOK_AND,value:"&&"})):s.push({start:n,type:R.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")n=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:n,type:R.TOK_OR,value:"||"})):s.push({start:n,type:R.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&Op(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const n=t.length;for(;t[this._current]!=='"'&&this._current<n;){let a=this._current;t[a]==="\\"&&(t[a+1]==="\\"||t[a+1]==='"')?a+=2:a+=1,this._current=a}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const n=t.length;for(;t[this._current]!=="'"&&this._current<n;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const n=t.length;for(;yo(t[this._current])&&this._current<n;)this._current+=1;const a=parseInt(t.slice(s,this._current),10);return{start:s,value:a,type:R.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:R.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:R.TOK_FLATTEN,value:"[]"}):{start:s,type:R.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,n=t[s];if(this._current+=1,n==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:R.TOK_NE,value:"!="}):{start:s,type:R.TOK_NOT,value:"!"};if(n==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:R.TOK_LTE,value:"<="}):{start:s,type:R.TOK_LT,value:"<"};if(n===">")return t[this._current]==="="?(this._current+=1,{start:s,type:R.TOK_GTE,value:">="}):{start:s,type:R.TOK_GT,value:">"};if(n==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:R.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,n=t.length;for(;t[this._current]!=="`"&&this._current<n;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let a=t.slice(s,this._current).trimLeft();a=a.replace("\\`","`");const r=this.looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"${a}"`);return this._current+=1,r}looksLikeJSON(t){const n=["true","false","null"],a="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||n.includes(t))return!0;if(a.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const fl=new Rp,Ce={[R.TOK_EOF]:0,[R.TOK_UNQUOTEDIDENTIFIER]:0,[R.TOK_QUOTEDIDENTIFIER]:0,[R.TOK_RBRACKET]:0,[R.TOK_RPAREN]:0,[R.TOK_COMMA]:0,[R.TOK_RBRACE]:0,[R.TOK_NUMBER]:0,[R.TOK_CURRENT]:0,[R.TOK_EXPREF]:0,[R.TOK_ROOT]:0,[R.TOK_PIPE]:1,[R.TOK_OR]:2,[R.TOK_AND]:3,[R.TOK_EQ]:5,[R.TOK_GT]:5,[R.TOK_LT]:5,[R.TOK_GTE]:5,[R.TOK_LTE]:5,[R.TOK_NE]:5,[R.TOK_FLATTEN]:9,[R.TOK_STAR]:20,[R.TOK_FILTER]:21,[R.TOK_DOT]:40,[R.TOK_NOT]:45,[R.TOK_LBRACE]:50,[R.TOK_LBRACKET]:55,[R.TOK_LPAREN]:60};class Lp{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==R.TOK_EOF){const n=this.lookaheadToken(0);this.errorToken(n,`Unexpected token type: ${n.type}, value: ${n.value}`)}return s}loadTokens(t){this.tokens=[...fl.tokenize(t),{type:R.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let n=this.nud(s),a=this.lookahead(0);for(;t<Ce[a];)this.advance(),n=this.led(a,n),a=this.lookahead(0);return n}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,n,a;switch(t.type){case R.TOK_LITERAL:return{type:"Literal",value:t.value};case R.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case R.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===R.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case R.TOK_NOT:return n=this.expression(Ce.Not),{type:"NotExpression",children:[n]};case R.TOK_STAR:return s={type:"Identity"},n=this.lookahead(0)===R.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Ce.Star),{type:"ValueProjection",children:[s,n]};case R.TOK_FILTER:return this.led(t.type,{type:"Identity"});case R.TOK_LBRACE:return this.parseMultiselectHash();case R.TOK_FLATTEN:return s={type:R.TOK_FLATTEN,children:[{type:"Identity"}]},n=this.parseProjectionRHS(Ce.Flatten),{type:"Projection",children:[s,n]};case R.TOK_LBRACKET:return this.lookahead(0)===R.TOK_NUMBER||this.lookahead(0)===R.TOK_COLON?(n=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},n)):this.lookahead(0)===R.TOK_STAR&&this.lookahead(1)===R.TOK_RBRACKET?(this.advance(),this.advance(),n=this.parseProjectionRHS(Ce.Star),{children:[{type:"Identity"},n],type:"Projection"}):this.parseMultiselectList();case R.TOK_CURRENT:return{type:R.TOK_CURRENT};case R.TOK_ROOT:return{type:R.TOK_ROOT};case R.TOK_EXPREF:return a=this.expression(Ce.Expref),{type:"ExpressionReference",children:[a]};case R.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==R.TOK_RPAREN;)this.lookahead(0)===R.TOK_CURRENT?(a={type:R.TOK_CURRENT},this.advance()):a=this.expression(0),o.push(a);return this.match(R.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,s){let n;switch(t){case R.TOK_DOT:const a=Ce.Dot;return this.lookahead(0)!==R.TOK_STAR?(n=this.parseDotRHS(a),{type:"Subexpression",children:[s,n]}):(this.advance(),n=this.parseProjectionRHS(a),{type:"ValueProjection",children:[s,n]});case R.TOK_PIPE:return n=this.expression(Ce.Pipe),{type:R.TOK_PIPE,children:[s,n]};case R.TOK_OR:return n=this.expression(Ce.Or),{type:"OrExpression",children:[s,n]};case R.TOK_AND:return n=this.expression(Ce.And),{type:"AndExpression",children:[s,n]};case R.TOK_LPAREN:const r=s.name,o=[];let i;for(;this.lookahead(0)!==R.TOK_RPAREN;)this.lookahead(0)===R.TOK_CURRENT?(i={type:R.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===R.TOK_COMMA&&this.match(R.TOK_COMMA),o.push(i);return this.match(R.TOK_RPAREN),{name:r,type:"Function",children:o};case R.TOK_FILTER:const c=this.expression(0);return this.match(R.TOK_RBRACKET),n=this.lookahead(0)===R.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Ce.Filter),{type:"FilterProjection",children:[s,n,c]};case R.TOK_FLATTEN:const d={type:R.TOK_FLATTEN,children:[s]},u=this.parseProjectionRHS(Ce.Flatten);return{type:"Projection",children:[d,u]};case R.TOK_EQ:case R.TOK_NE:case R.TOK_GT:case R.TOK_GTE:case R.TOK_LT:case R.TOK_LTE:return this.parseComparator(s,t);case R.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===R.TOK_NUMBER||p.type===R.TOK_COLON?(n=this.parseIndexExpression(),this.projectIfSlice(s,n)):(this.match(R.TOK_STAR),this.match(R.TOK_RBRACKET),n=this.parseProjectionRHS(Ce.Star),{type:"Projection",children:[s,n]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const n=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw n.name="ParserError",n}parseIndexExpression(){if(this.lookahead(0)===R.TOK_COLON||this.lookahead(1)===R.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(R.TOK_RBRACKET),t}projectIfSlice(t,s){const n={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[n,this.parseProjectionRHS(Ce.Star)],type:"Projection"}:n}parseSliceExpression(){const t=[null,null,null];let s=0,n=this.lookahead(0);for(;n!==R.TOK_RBRACKET&&s<3;){if(n===R.TOK_COLON)s+=1,this.advance();else if(n===R.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}n=this.lookahead(0)}return this.match(R.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const n=this.expression(Ce[s]);return{type:"Comparator",name:s,children:[t,n]}}parseDotRHS(t){const s=this.lookahead(0);if([R.TOK_UNQUOTEDIDENTIFIER,R.TOK_QUOTEDIDENTIFIER,R.TOK_STAR].includes(s))return this.expression(t);if(s===R.TOK_LBRACKET)return this.match(R.TOK_LBRACKET),this.parseMultiselectList();if(s===R.TOK_LBRACE)return this.match(R.TOK_LBRACE),this.parseMultiselectHash();const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseProjectionRHS(t){if(Ce[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===R.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===R.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===R.TOK_DOT)return this.match(R.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==R.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===R.TOK_COMMA&&(this.match(R.TOK_COMMA),this.lookahead(0)===R.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(R.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[R.TOK_UNQUOTEDIDENTIFIER,R.TOK_QUOTEDIDENTIFIER];let n,a,r;for(;;){if(n=this.lookaheadToken(0),!s.includes(n.type))throw new Error(`Expecting an identifier token, got: ${n.type}`);if(a=n.value,this.advance(),this.match(R.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:a}),this.lookahead(0)===R.TOK_COMMA)this.match(R.TOK_COMMA);else if(this.lookahead(0)===R.TOK_RBRACE){this.match(R.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const hl=new Lp;var F;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(F||(F={}));class Mp{constructor(t){this.TYPE_NAME_TABLE={[F.TYPE_NUMBER]:"number",[F.TYPE_ANY]:"any",[F.TYPE_STRING]:"string",[F.TYPE_ARRAY]:"array",[F.TYPE_OBJECT]:"object",[F.TYPE_BOOLEAN]:"boolean",[F.TYPE_EXPREF]:"expression",[F.TYPE_NULL]:"null",[F.TYPE_ARRAY_NUMBER]:"Array<number>",[F.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let n=0;for(let a=0;a<s.length;a+=1)n+=s[a];return n/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[n,a]=s;return n.includes(a)},this.functionEndsWith=s=>{const[n,a]=s;return n.includes(a,n.length-a.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[n,a]=s;return a.join(n)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>Ss(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const n=[],a=this._interpreter,r=s[0],o=s[1];for(let i=0;i<o.length;i+=1)n.push(a.visit(r,o[i]));return n},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===F.TYPE_NUMBER)return Math.max(...s);const a=s;let r=a[0];for(let o=1;o<a.length;o+=1)r.localeCompare(a[o])<0&&(r=a[o]);return r},this.functionMaxBy=s=>{const n=s[1],a=s[0],r=this.createKeyFunction(n,[F.TYPE_NUMBER,F.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<a.length;c+=1)l=r&&r(a[c]),l!==void 0&&l>o&&(o=l,i=a[c]);return i},this.functionMerge=s=>{let n={};for(let a=0;a<s.length;a+=1){const r=s[a];n=Object.assign(n,r)}return n},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===F.TYPE_NUMBER)return Math.min(...s);const a=s;let r=a[0];for(let o=1;o<a.length;o+=1)a[o].localeCompare(r)<0&&(r=a[o]);return r},this.functionMinBy=s=>{const n=s[1],a=s[0],r=this.createKeyFunction(n,[F.TYPE_NUMBER,F.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<a.length;c+=1)l=r&&r(a[c]),l!==void 0&&l<o&&(o=l,i=a[c]);return i},this.functionNotNull=s=>{for(let n=0;n<s.length;n+=1)if(this.getTypeName(s[n])!==F.TYPE_NULL)return s[n];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===F.TYPE_STRING){const r=s;let o="";for(let i=r.length-1;i>=0;i-=1)o+=r[i];return o}const a=s.slice(0);return a.reverse(),a},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const n=s[0].slice(0);if(n.length===0)return n;const a=this._interpreter,r=s[1],o=this.getTypeName(a.visit(r,n[0]));if(o!==void 0&&![F.TYPE_NUMBER,F.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<n.length;l+=1)i.push([l,n[l]]);i.sort((l,c)=>{const d=a.visit(r,l[1]),u=a.visit(r,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)n[l]=i[l][1];return n},this.functionStartsWith=([s,n])=>s.startsWith(n),this.functionSum=([s])=>s.reduce((n,a)=>n+a,0),this.functionToArray=([s])=>this.getTypeName(s)===F.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const n=this.getTypeName(s);let a;return n===F.TYPE_NUMBER?s:n===F.TYPE_STRING&&(a=+s,!isNaN(a))?a:null},this.functionToString=([s])=>this.getTypeName(s)===F.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case F.TYPE_NUMBER:return"number";case F.TYPE_STRING:return"string";case F.TYPE_ARRAY:return"array";case F.TYPE_OBJECT:return"object";case F.TYPE_BOOLEAN:return"boolean";case F.TYPE_EXPREF:return"expref";case F.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[F.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[F.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[F.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[F.TYPE_STRING,F.TYPE_ARRAY]},{types:[F.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[F.TYPE_STRING]},{types:[F.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[F.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[F.TYPE_STRING]},{types:[F.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[F.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[F.TYPE_STRING,F.TYPE_ARRAY,F.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[F.TYPE_EXPREF]},{types:[F.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[F.TYPE_ARRAY_NUMBER,F.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[F.TYPE_ARRAY]},{types:[F.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[F.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[F.TYPE_ARRAY_NUMBER,F.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[F.TYPE_ARRAY]},{types:[F.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[F.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[F.TYPE_STRING,F.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[F.TYPE_ARRAY_STRING,F.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[F.TYPE_ARRAY]},{types:[F.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[F.TYPE_STRING]},{types:[F.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[F.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[F.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[F.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[F.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[F.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[F.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,n){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:n}}callFunction(t,s){const n=this.functionTable[t];if(n===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,n._signature),n._func.call(this,s)}validateInputSignatures(t,s){for(let n=0;n<s.length;n+=1)if("variadic"in s[n]&&n!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${n+1} must occur last`)}validateArgs(t,s,n){var a,r;let o;this.validateInputSignatures(t,n);const i=n.filter(v=>{var _;return(_=!v.optional)!==null&&_!==void 0?_:!1}).length,l=(r=(a=n[n.length-1])===null||a===void 0?void 0:a.variadic)!==null&&r!==void 0?r:!1,c=s.length<i,d=s.length>n.length,u=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw o=n.length>1,new Error(`ArgumentError: ${t}() takes ${u}${i} argument${o&&"s"||""} but received ${s.length}`);let p,f,b;for(let v=0;v<n.length;v+=1){b=!1,p=n[v].types,f=this.getTypeName(s[v]);let _;for(_=0;_<p.length;_+=1)if(f!==void 0&&this.typeMatches(f,p[_],s[v])){b=!0;break}if(!b&&f!==void 0){const h=p.map(m=>this.TYPE_NAME_TABLE[m]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${v+1} to be type (${h}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,s,n){if(s===F.TYPE_ANY)return!0;if(s===F.TYPE_ARRAY_STRING||s===F.TYPE_ARRAY_NUMBER||s===F.TYPE_ARRAY){if(s===F.TYPE_ARRAY)return t===F.TYPE_ARRAY;if(t===F.TYPE_ARRAY){let a;s===F.TYPE_ARRAY_NUMBER?a=F.TYPE_NUMBER:s===F.TYPE_ARRAY_STRING&&(a=F.TYPE_STRING);for(let r=0;r<n.length;r+=1){const o=this.getTypeName(n[r]);if(o!==void 0&&a!==void 0&&!this.typeMatches(o,a,n[r]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return F.TYPE_STRING;case"[object Number]":return F.TYPE_NUMBER;case"[object Array]":return F.TYPE_ARRAY;case"[object Boolean]":return F.TYPE_BOOLEAN;case"[object Null]":return F.TYPE_NULL;case"[object Object]":return t.jmespathType===R.TOK_EXPREF?F.TYPE_EXPREF:F.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const n=this._interpreter;return r=>{const o=n.visit(t,r);if(!s.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${s.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Ip{constructor(){this._rootValue=null,this.runtime=new Mp(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let n,a,r,o,i,l,c,d,u,p,f;switch(t.type){case"Field":return s===null?null:Ss(s)?(l=s[t.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(t.children[0],s),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(s))return null;let b=t.value;return b<0&&(b=s.length+b),r=s[b],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(s))return null;const v=[...t.children],_=this.computeSliceParams(s.length,v),[h,m,g]=_;if(r=[],g>0)for(p=h;p<m;p+=g)r.push(s[p]);else for(p=h;p>m;p+=g)r.push(s[p]);return r;case"Projection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)a=this.visit(t.children[1],f[p]),a!==null&&u.push(a);return u;case"ValueProjection":if(f=this.visit(t.children[0],s),!Ss(f))return null;u=[];const y=Object.values(f);for(p=0;p<y.length;p+=1)a=this.visit(t.children[1],y[p]),a!==null&&u.push(a);return u;case"FilterProjection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;const T=[],A=[];for(p=0;p<f.length;p+=1)n=this.visit(t.children[2],f[p]),sn(n)||T.push(f[p]);for(let P=0;P<T.length;P+=1)a=this.visit(t.children[1],T[P]),a!==null&&A.push(a);return A;case"Comparator":switch(o=this.visit(t.children[0],s),i=this.visit(t.children[1],s),t.name){case R.TOK_EQ:r=Sn(o,i);break;case R.TOK_NE:r=!Sn(o,i);break;case R.TOK_GT:r=o>i;break;case R.TOK_GTE:r=o>=i;break;case R.TOK_LT:r=o<i;break;case R.TOK_LTE:r=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case R.TOK_FLATTEN:const O=this.visit(t.children[0],s);if(!Array.isArray(O))return null;let C=[];for(p=0;p<O.length;p+=1)a=O[p],Array.isArray(a)?C=[...C,...a]:C.push(a);return C;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],s));return u;case"MultiSelectHash":if(s===null)return null;u={};let E;for(p=0;p<t.children.length;p+=1)E=t.children[p],u[E.name]=this.visit(E.value,s);return u;case"OrExpression":return n=this.visit(t.children[0],s),sn(n)&&(n=this.visit(t.children[1],s)),n;case"AndExpression":return o=this.visit(t.children[0],s),sn(o)?o:this.visit(t.children[1],s);case"NotExpression":return o=this.visit(t.children[0],s),sn(o);case"Literal":return t.value;case R.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case R.TOK_CURRENT:return s;case R.TOK_ROOT:return this._rootValue;case"Function":const x=[];for(let P=0;P<t.children.length;P+=1)x.push(this.visit(t.children[P],s));return this.runtime.callFunction(t.name,x);case"ExpressionReference":const L=t.children[0];return L.jmespathType=R.TOK_EXPREF,L;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[n,a,r]=s;if(r===null)r=1;else if(r===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=r<0;return n=n===null?o?t-1:0:this.capSliceRange(t,n,r),a=a===null?o?-1:t:this.capSliceRange(t,a,r),[n,a,r]}capSliceRange(t,s,n){let a=s;return a<0?(a+=t,a<0&&(a=n<0?-1:0)):a>=t&&(a=n<0?t-1:t),a}}const lr=new Ip,Dp=F.TYPE_ANY,Np=F.TYPE_ARRAY,Bp=F.TYPE_ARRAY_NUMBER,Fp=F.TYPE_ARRAY_STRING,$p=F.TYPE_BOOLEAN,Up=F.TYPE_EXPREF,Hp=F.TYPE_NULL,Gp=F.TYPE_NUMBER,Yp=F.TYPE_OBJECT,zp=F.TYPE_STRING;function jp(e){return hl.parse(e)}function Kp(e){return fl.tokenize(e)}const qp=(e,t,s)=>{lr.runtime.registerFunction(e,t,s)};function Wp(e,t){const s=hl.parse(t);return lr.search(s,e)}const Vp=lr,nt={compile:jp,registerFunction:qp,search:Wp,tokenize:Kp,TreeInterpreter:Vp,TYPE_ANY:Dp,TYPE_ARRAY_NUMBER:Bp,TYPE_ARRAY_STRING:Fp,TYPE_ARRAY:Np,TYPE_BOOLEAN:$p,TYPE_EXPREF:Up,TYPE_NULL:Hp,TYPE_NUMBER:Gp,TYPE_OBJECT:Yp,TYPE_STRING:zp},ft=class ft{static async appendPrompt(t,s){_o(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{hs().then(n=>{n=n.filter(a=>a.indexOf(this.DELIM_PROMPTS)!=-1),n.length>ft.MAX_PROMPTS_VALS&&ca(n[0])})}).catch(n=>console.error("~IDB Failed | ",n))}static async appendVIR_products(t){t.forEach(s=>{let n=JSON.stringify({ts:Date.now(),name:s[1]});_o(s[0],LZString.compressToUTF16(n)).then(async()=>{}).catch(a=>console.error("~IDB Failed | ",a))})}static async keys(t,s){hs().then(n=>{n=n.filter(a=>a.indexOf(t)!=-1),s&&s(n)})}static async get(t,s){xp(t).then(n=>{try{n=JSON.parse(LZString.decompressFromUTF16(n))}catch{}finally{s&&s(n)}})}static async entries(t,s){Ap().then(n=>{n=n.filter(a=>a[0].indexOf(t)!=-1),n=n.map(a=>{try{a[1]=JSON.parse(LZString.decompressFromUTF16(a[1]))}catch{}finally{}return a}),s&&s(n)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,n){let a="";switch(t){case"PROMPTS_COUNT":hs().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),a=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,a&&n&&n(a)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":hs().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(ft.DELIM_PROMPTS)[0]==s&&ca(i)})}),a="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",a);break;case"VIR_COUNT":hs().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),a=`There are ${o.length} VNR names in local IDB storage.`,a&&n&&n(a)});break;case"VIR_CLEAR":let r=0;await hs().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(ft.DELIM_VIR)[0]==s&&(r++,ca(i))})}),a=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),a="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",a),a&&n&&n(a)}};ft.MAX_TYPEAHEAD_ROWS=14,ft.MAX_PROMPTS_VALS=50,ft.DELIM_PROMPTS="_",ft.DELIM_VIR="-",ft.DELIM_SNDX="|";let os=ft;const me=uu("AppState",()=>{const e=vt(),t="DEV",s="BMA Tourney v0.0.5 ",n="#app",a=Ct({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let r=Ct([]),o=Ct([]);const i=E=>{r.push(E),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},l=E=>{o.push(E),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const E=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",E),E)try{const x=JSON.parse(E);return console.log("[appState] Parsed session_user:",x),x}catch(x){console.error("Failed to parse session_user from localStorage:",x)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Xe({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Xe({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features)));else{let E=os.decompr(localStorage.getItem("feature_flags"));E=Object.assign(u.value.features,JSON.parse(E));for(let x in E)typeof u.value?.env_override[t][x]<"u"&&(E[x]=u.value.env_override[t][x]);localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features=E)))}},f=()=>{const E=document.querySelector(n);if(E){const x=E.dataset;for(let L in x){const P=L.replace(/^sync/,""),j=Object.keys(u.value.features).find(Q=>Q.toLowerCase()===P.toLowerCase());if(j){const Q=u.value.features[j]?.state;Q&&(x[L]=Q)}}}},b=(E="Theme",x={state:"dark"})=>{const L=document.querySelector(n);L&&(L.dataset["sync"+E]=x.state)},v=(E="Theme",x={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&x){let P=JSON.parse(os.decompr(localStorage.getItem("feature_flags")));P[E]={state:x.state},localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features=P))),b(E,x),V.publish("APP.ROUTE_SYNC",`{ "${E}": ${JSON.stringify(x)}}`)}},_=E=>{const x=u.value?.features?.Lang?.state;let L=g.value.microcopy.language.filter(P=>P.code==x)[0]?.copy;if(L=L.filter(P=>P[0]==E)[0],L)return L[1]},h=(E=":version")=>{let[x,L,P]=E.split(" ");switch(x=x.toLocaleLowerCase(),P=="true"&&(P=!0),P=="false"&&(P=!1),x){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":v(L,{state:P});break;case":route":neodigmToast.q(`route ${L}`,"brand"),e.push({name:L});break}};p(),f();const m=Ct({designer:"guided_tour",notifications:{unread:0}}),g=Xe({sports:qt,microcopy:wp.getMeta()}),y=We(()=>d.value.session_user.fname+" "+d.value.session_user.lname),T=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},A=()=>{localStorage.removeItem("session_user")};function O(E){return d.value.session_user.authenticated=!0,d.value.session_user.token=E,T(),d.value.session_app.route="chat"}function C(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",A(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:m,appMeta:g,appSession:d,clearSessionUser:A,concatFirstLast:y,coreBetSlip:o,coreTourn:r,doCLI:h,doLogin:O,doLogout:C,hierTopics:a,i18n:_,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:T,setFeaturePersistPub:v}}),je=class je{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),je.setTJO(null),location.reload()}static async doSignin(t,s=null){const n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",n)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),s&&s(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",n)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),s&&s(r)}}static async checkUserName(t,s=null){const n={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",n)).json();return s&&s(r),r}static async resetHash(t,s,n=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const a=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,r={method:"POST",body:JSON.stringify({guid:t,hash:a}),headers:je.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();n&&n(i)}static genHeaders(t={}){let s={};return s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company),s}static async fetchTournaments(t=null){const s={method:"GET",headers:je.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(a),a}static async fetchBetSlips(t,s="",n="",a=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(r+=`/${s}`),s&&n&&(r+=`/${n}`);const o={method:"GET",headers:je.genHeaders()},l=await(await fetch(this.API_baseURI+r,o)).json();return a&&a(l),l}static async fetchLeaderboard(t,s="",n=null){let a=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(a+=`&user=${s}`);const r={method:"GET",headers:je.genHeaders()},i=await(await fetch(this.API_baseURI+a,r)).json();return n&&n(i),i}static async postBetSlips(t,s=null){const n=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),a=await Promise.all(n);return s&&s(a),a}static async fetchPromotions(t=null){const s={method:"GET",headers:je.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",s)).json();return t&&t(a),a}};je.API_baseURI="https://machfive-bmacdev-rest.onrender.com",je.API_ver="v5",je.jsState={},je.jsMeta={},je.jsTJO=null;let Se=je;const qs={shootConfetti(){if(typeof confetti=="function"){let n=function(a,r){confetti({...t,...r,particleCount:Math.floor(e*a)})};var s=n,e=200,t={origin:{y:.7}};n(.25,{zIndex:304,spread:26,startVelocity:55}),n(.2,{zIndex:304,spread:60}),n(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),n(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),n(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const n={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...n,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const n in t)e[n]&&t[n]!=e[n]&&(s[n]=e[n]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){}},Zt=(e,t)=>{const s=e.__vccOpts||e;for(const[n,a]of t)s[n]=a;return s},Jp={class:"auth-page"},Xp={__name:"splash_route",setup(e){const t=vt(),s=ul();return me(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(n,a)=>(st(),yt("div",Jp,[...a[0]||(a[0]=[Qt('<div class="auth-page-left" data-v-910ecc85><div class="auth-bg" data-v-910ecc85><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div></div><div class="auth-overlay" data-v-910ecc85></div><div class="auth-branding-content" data-v-910ecc85><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-910ecc85><p class="auth-branding-tagline" data-v-910ecc85>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-910ecc85>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-910ecc85> © 2026 Bet Max Action. All rights reserved. </div></div>',1),M("div",{class:"auth-page-right"},[M("div",{class:"auth-card splash-content"},[M("p",{class:"splash-message"},"Loading Tournaments..."),M("br"),M("br"),M("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[M("div")])])],-1)])]))}},To=Zt(Xp,[["__scopeId","data-v-910ecc85"]]);class Qp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const s=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",n=s==="dark";let a=this.getAttribute("data-sport-group")||"Soccer",r,o;a==="Multi"?(r="Multi",o=`var( --sport-icon__Multi--${s} )`):(r=a.replaceAll(" ","_"),o=`var( --sport-icon__${r}--${s} )`),this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block;
          width: 30px; height: 30px;
          border-radius: 50%;
          background-color: ${n?"var( --app-core-color--gray-1__dark--brand )":"var( --app-core-color--gray-6__dark--brand )"};
          background-position: center;
          filter: brightness(70%);
          border: 1px solid var( --app-core-color--gray-4__dark--brand );
        }

        :host([data-sport-group="${a}"]) {
          background-image: ${o};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",Qp);class Zp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners(),this.observeCardSize()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,s={}){const n=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(n)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),n=t.target.closest(".btn-join"),a=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(n){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(a){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,n){s!==n&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const s=t.scrollHeight-t.clientHeight,n=this.getAttribute("data-compact")==="true";!n&&s>2?this.setAttribute("data-compact","true"):n&&s<-10&&this.removeAttribute("data-compact")})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(a=>Array.isArray(a))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(a=>Array.isArray(a))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const n=s.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:s.find(r=>Array.isArray(r))?.length||0,max:parseInt(n?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const n=this.getAttribute("data-bma-tourn-tags");if(!n)return null;try{const a=JSON.parse(n);if(!Array.isArray(a))return null;const r=a.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===s&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[s]&&o[s].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=qt.find(n=>n.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(n=>{const a=n.title||"Match";let r="TBD";if(n.scheduled_at)try{r=new Date(n.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=n.scheduled_at}return`  ${a} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(n=>typeof n=="object"&&n.sport_key?n.sport_key:n):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let n="";for(let a=0;a<s;a++){const r=t[a].key,o=qt.find(l=>l.key===r),i=o?o.group:"default";n+=`<bma-sport-icon sport="${r}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(n+=`<span class="sport-count">+${t.length-3}</span>`),n}render(){const t=this.getTheme(),s=t==="dark",n=this.getAttribute("data-sync-theme")||t;this.shadowRoot.innerHTML=`
      <style>
        neodigm-marquee pre { color: var( --app-core-color--yellow-1__dark--brand ) !important; }
        :host {
          display: block;
          aspect-ratio: 1 / 1.2; /* width / height */
          width: 100%;
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
          background: ${s?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--green-3__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--green-5__light--brand ) 100%)"};

        }

        :host([data-bma-tourn-class="LOCKED"]) .card {
          background: ${s?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--yellow-3__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--yellow-5__light--brand ) 100%)"};
        }

        :host([data-bma-tourn-class="COMPLETED"]) .card {
          background: ${s?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--red-1__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--red-5__light--brand ) 100%)"};
        }

        /* Ribbon badges for tournament winners */
        .badge-ribbon {
          position: absolute;
          top: -8px;
          right: 42%;
          width: 48px;
          height: 56px;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center;
          display: none;
          z-index: 10;
        }

        .badge-ribbon.visible {
          display: block;
        }

        /* Badge variants */
        .badge-ribbon.gold {
          background-image: var(--badge__ribbon--gold);
        }

        .badge-ribbon.silver {
          background-image: var(--badge__ribbon--silver);
        }

        .badge-ribbon.bronze {
          background-image: var(--badge__ribbon--bronze);
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


        * {
          font-family: 'Roboto', -apple-system, BlinkMacSystemFont, sans-serif !important;
        }

        .card {
          position: relative;
          background: ${s?"linear-gradient(135deg, var( --app-core-color--gray-3__dark--brand ) 0%, var( --app-core-color--gray-2__dark--brand ) 100%)":"linear-gradient(135deg, var( --app-core-color--gray-7__light--brand ) 0%, var( --app-core-color--gray-6__light--brand ) 100%)"};

          border: none;
          border-radius: 0;
          color: ${s?"#fff":"#000"};
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          user-select: none;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: scale(1.02);
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
          height: auto;
          min-height: 112px;
          flex-shrink: 0;
          padding: 16px;
          background:  ${s?"var( --app-core-color--gray-3__dark--brand )":"var( --app-core-color--gray-4__light--brand )"};
          border-radius: 0;
          clip-path: polygon(
            0 0,
            100% 0,
            100% calc(100% - 12px),
            50% 100%,
            50% 100%,
            0 calc(100% - 12px)
          );
        }

        .header-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
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
          font-size: 16px; font-weight: 600;
          color: #FFFFFF;
          margin: 0 0 4px 0;
          line-height: 1.3;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          white-space: nowrap;
        }

        .tagline {
          font-size: 13px;
          color: ${s?"var( --app-core-color--gray-6__light--brand )":"var( --app-core-color--white-5__dark--brand )"};
          margin: 0;
          line-height: 1.4;
          overflow: hidden;
          text-overflow: ellipsis;
          text-align: left;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          font-style: italic;
          word-wrap: break-word;
          min-height: 19px;
        }

        .sport-tag {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          font-size: 0.75rem;
          color: ${s?"#b0b0b0":"#666"};
          text-transform: uppercase;
          font-weight: 500;
        }

        .sport-count {
          margin-left: 0.25rem;
          font-size: 0.7rem;
          color: ${s?"#888":"#999"};
        }

        .status {
          padding: 0.25rem 0.625rem;
          border-radius: 0;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .card[data-sync-theme="light"] .status             { background: rgba(200, 200, 200); }
        .card[data-sync-theme="light"] .status.UPCOMING    { color: var(--app-core-color--green-5__dark--brand); }
        .card[data-sync-theme="light"] .status.LOCKED      { color: var(--app-core-color--yellow-2__light--brand); }
        .card[data-sync-theme="light"] .status.COMPLETED   { color: var(--app-core-color--red-2__light--brand); }

        .card[data-sync-theme="dark"] .status             { background: rgba(128, 128, 128, 0.2); }
        .card[data-sync-theme="dark"] .status.UPCOMING    { color: var(--app-core-color--green-4__dark--brand); }
        .card[data-sync-theme="dark"] .status.LOCKED      { color: var(--app-core-color--yellow-2__light--brand); }
        .card[data-sync-theme="dark"] .status.COMPLETED   { color: var(--app-core-color--red-3__light--brand); }

        .card-body {
          display: grid;
          grid-template-rows: auto 1fr auto;
          flex: 1 1 auto;
          min-height: 0;
          margin-top: 24px;
        }

        .info-item {
          display: grid;
          grid-template-columns: 32% 32% 32%;
          gap: 2%;
          text-align: center;
          margin: 0 8px;
          min-width: 0;
          width: calc(100% - 16px);
          padding-bottom: 12px;
        }

        .info-item .info-cell {
          border-radius: 0;
          padding: 8px 4px;
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
          letter-spacing: 1px;
          margin-bottom: 6px;
          white-space: nowrap;
        }

        .card-bottom-section .info-cell .info-label {
          color: rgba(255, 255, 255, 0.6);
        }

        .info-cell .info-value {
          font-size: clamp(0.92rem, 0.82rem + 0.5vw, 1.25rem);
          font-weight: 700;
          color: ${s?"var(--app-core-color--yellow-3__dark--brand, #F7C60D)":"#FFB700"};
          font-family: 'Monaco', 'Courier New', monospace;
          text-shadow: ${s?"0 1px 2px rgba(0, 0, 0, 0.5)":"none"};
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
          gap: 8px;
          margin-top: 16px;
          padding: 0 16px 16px;
          flex-shrink: 0;
        }

        .btn-info,
        .btn-join,
        .btn-play {
          flex: 1;
          height: 32px;
          padding: 5px;
          border: none;
          border-radius: 0;
          font-size: 0.875rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        /* Default INFO button - green for UPCOMING */
        .btn-info {
          background: rgba(0, 230, 118, 0.15);
          color: ${s?"#00E676":"#00C853"};
          border: 1px solid rgba(0, 230, 118, 0.3);
          position: relative;
          overflow: hidden;
          font-weight: 600;
        }

        .btn-info:hover {
          background: rgba(0, 230, 118, 0.25);
          border-color: rgba(0, 230, 118, 0.4);
          box-shadow: 0 0 12px rgba(0, 230, 118, 0.3);
          color: ${s?"#00FF88":"#00E676"};
        }

        /* Yellow INFO button for LOCKED status */
        :host([data-bma-tourn-status="LOCKED"]) .btn-info {
          background: rgba(247, 198, 13, 0.15);
          color: ${s?"#F7C60D":"#B28F09"};
          border: 1px solid rgba(247, 198, 13, 0.3);
        }

        :host([data-bma-tourn-status="LOCKED"]) .btn-info:hover {
          background: rgba(247, 198, 13, 0.25);
          border-color: rgba(247, 198, 13, 0.4);
          box-shadow: 0 0 12px rgba(247, 198, 13, 0.3);
          color: ${s?"#FFD700":"#F7C60D"};
        }

        /* Gray INFO button for COMPLETED status */
        :host([data-bma-tourn-status="COMPLETED"]) .btn-info {
          background: rgba(150, 150, 150, 0.15);
          color: ${s?"#969696":"#484848"};
          border: 1px solid rgba(150, 150, 150, 0.3);
        }

        :host([data-bma-tourn-status="COMPLETED"]) .btn-info:hover {
          background: rgba(150, 150, 150, 0.25);
          border-color: rgba(150, 150, 150, 0.4);
          box-shadow: 0 0 12px rgba(150, 150, 150, 0.3);
          color: ${s?"#B0B0B0":"#323232"};
        }

        .btn-join {
          background: linear-gradient(135deg, #00E676 0%, #FFD700 100%);
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
.card-focus__feedback {
    visibility: hidden;
    min-height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    margin-top: 4px;
    width: 100%;
    overflow: hidden;
}

neodigm-marquee {
    display: inline-block;
    width: 100%;
    user-select: none;
    overflow: hidden;
    background-color: #282828;
        height: 38px;
}
[data-sync-theme="light"] neodigm-marquee[data-n55-theme='ghost'] { background-color: #fff; }
[data-sync-theme="dark"]  neodigm-marquee[data-n55-theme='ghost'] { background-color: #282828; }

neodigm-marquee pre {
    color: var(--neodigm-theme-brand);
    font-family: 'Roboto Mono', 'Courier New', 'Monaco', 'Consolas', 'Liberation Mono', monospace !important;
    padding: 4px 0 0 0; margin: 2px;
    font-weight: 100;
    font-size: 20px; line-height: 1.1;
    text-shadow: -0.2rem -0.2rem 1rem #ed5808, 0.1rem 0.1rem .6rem #fff
}
neodigm-marquee pre[data-n55-theme='warning'],
neodigm-marquee pre [data-n55-theme='warning'] { color: var(--neodigm-theme-warning); text-shadow: -0.2rem -0.2rem 1rem var(--neodigm-theme-warning-alt), 0.1rem 0.1rem .6rem #fff }
[data-sync-theme="light"] neodigm-marquee pre[data-n55-theme='ghost'],
[data-sync-theme="light"] neodigm-marquee pre [data-n55-theme='ghost'] { color: var(--neodigm-theme-night); text-shadow: none; }
[data-sync-theme="dark"]  neodigm-marquee pre[data-n55-theme='ghost'],
[data-sync-theme="dark"]  neodigm-marquee pre [data-n55-theme='ghost'] { color: #fff; text-shadow: none; }

neodigm-marquee[data-n55-marquee-size='small'] { height: 28px; }
neodigm-marquee[data-n55-marquee-size='small'] * {
    font-size: 18px; line-height: 1;
}
/*  Neodigm Marquee End  */

        /* Progress Bar - now in bottom section */
        .card-entrants__dataviz {
          padding: 0 16px 12px;
        }

        /* Bottom Section with solid background matching header */
        .card-bottom-section {
          background: var( --app-core-color--gray-3__dark--brand );
          padding: 16px 0 12px;
          margin-top: auto;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        :host([data-compact="true"]) .card-actions {
          margin-top: 8px;
          padding: 0 12px 8px;
          gap: 6px;
        }

        :host([data-compact="true"]) .card-header {
          min-height: 98px;
          padding: 12px 10px 10px;
        }

        :host([data-compact="true"]) .header-top {
          margin-bottom: 8px;
        }

        :host([data-compact="true"]) .sport-tag {
          gap: 0.2rem;
        }

        :host([data-compact="true"]) .sport-count {
          margin-left: 0.15rem;
        }

        :host([data-compact="true"]) .status {
          padding: 0.2rem 0.5rem;
        }

        :host([data-compact="true"]) .txt-caption {
          margin-bottom: 2px;
        }

        :host([data-compact="true"]) .tagline {
          min-height: 0;
          -webkit-line-clamp: 1;
          line-height: 1.2;
        }

        :host([data-compact="true"]) .card-body {
          margin-top: 8px;
        }

        :host([data-compact="true"]) .btn-info,
        :host([data-compact="true"]) .btn-join,
        :host([data-compact="true"]) .btn-play {
          height: 28px;
          letter-spacing: 0.3px;
        }

        :host([data-compact="true"]) .card-bottom-section {
          padding: 8px 0 6px;
        }

        :host([data-compact="true"]) .card-entrants__dataviz {
          padding: 0 10px 6px;
        }

        :host([data-compact="true"]) .progress-label {
          letter-spacing: 0.6px;
        }

        :host([data-compact="true"]) .info-item {
          margin: 0 6px;
          width: calc(100% - 12px);
          gap: 4px;
          padding-bottom: 2px;
        }

        :host([data-compact="true"]) .info-item .info-cell {
          padding: 2px 1px;
        }

        :host([data-compact="true"]) .info-cell .info-label {
          margin-bottom: 3px;
          letter-spacing: 0.6px;
        }

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
          letter-spacing: 1px;
          font-weight: 600;
        }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 0;
          overflow: hidden;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          border-radius: 0;
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

        /* Progress bar colors based on status and theme */
        :host([data-bma-tourn-status="UPCOMING"]) .progress-fill {
          background: ${s?"var(--app-core-color--green-3__dark--brand)":"var(--app-core-color--green-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="LOCKED"]) .progress-fill {
          background: ${s?"var(--app-core-color--yellow-3__dark--brand)":"var(--app-core-color--yellow-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="COMPLETED"]) .progress-fill {
          background: ${s?"var(--app-core-color--red-3__dark--brand)":"var(--app-core-color--red-4__dark--brand)"};
        }

        :host([data-bma-tourn-status="DRAFT"]) .progress-fill {
          background: ${s?"var(--app-core-color--gray-5__dark--brand)":"var(--app-core-color--gray-5__light--brand)"};
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

      <div class="card" data-sync-theme="${n}">
        <div class="badge-ribbon ${this.getUserBadge()?"visible":""} ${this.getBadgeClass()}"></div>
        <div class="card-header">
          <div class="header-top">
            <span class="sport-tag">${this.sportsDisplay}</span>
            <span class="status ${this.status.toUpperCase()}">${this.status}</span>
          </div>
          <section class="header-content">
            <h3 class="txt-caption">${this.caption}</h3>
            <p class="tagline">${this.tagline}</p>
          </section>
        </div>
        <div class="card-body">
          <output class="card-focus__feedback">
            <neodigm-marquee data-n55-marquee-text="${this.marqueeText}"
            data-n55-marquee-size="small"
            style="padding: 7px 0 4px 0; height: 34px;">
            <pre data-n55-theme="warning"></pre>
            </neodigm-marquee>
          </output>
          <output class="card-waiting">
            <neodigm-juicebar role="progressbar" data-n55-theme="brand" data-n55-size="medium"
            style="background-color: #242424;"><div></div></neodigm-juicebar>
          </output>
        </div>
        <nav class="card-actions">
          <button class="btn-info" aria-label="Tournament information">Info</button>
          <button class="btn-join ${!this.isUserParticipating()&&this.status.toUpperCase()!=="LOCKED"&&this.status.toUpperCase()!=="COMPLETED"?"visible":""}" aria-label="Join tournament">Join</button>
          <button class="btn-play ${this.isUserParticipating()&&this.status.toUpperCase()!=="COMPLETED"?"visible":""}" aria-label="Play tournament">Play</button>
        </nav>
        <div class="card-bottom-section">
          <aside class="card-entrants__dataviz">
            <div class="progress-container">
              <div class="progress-label">
                <span>Entrants</span>
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
              <p class="info-value">${this.matches}</p>
            </section>
            <section class="info-cell">
              <p class="info-label">TD$</p>
              <p class="info-value">${this.tournament_dollars}</p>
            </section>
          </div>
        </div>
      </div>
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",Zp);class ef extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,n){if(s!==n){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?qs.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{V.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const s=this.shadowRoot.querySelector(".content_stake_text input");s&&s.addEventListener("input",n=>{const a=n.target.value;this.setAttribute("data-stake",a)})}render(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          margin-bottom: 8px;
        }

        .bet-entry-card {
          display: grid;
          grid-template-columns: 28px auto;
          grid-template-areas:
            "grid_close grid_header"
            "grid_close grid_content";
          grid-template-rows: auto auto;
          background: var(--app-core-color--gray-2__dark--brand, #161616);
          border: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: 8px;
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
          border: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: 4px;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: right;
          box-sizing: border-box;
        }

        .content_stake_text input:focus {
          outline: none;
          border-color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",ef);class tf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=qt.find(n=>n.key===t);return s?s.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing tournament tags:",s),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const n=this.scoreboard;if(!n||!n.time_remaining)return!1;const a=n.time_remaining.toLowerCase();return a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer()}disconnectedCallback(){this.stopCountdownTimer()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const s=this.shadowRoot?.querySelector(".countdown");s&&(s.textContent=t)}attributeChangedCallback(t,s,n){s!==n&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const n=s-t;if(n<=0)return"";const a=Math.floor(n/(1e3*60*60)),r=Math.floor(n%(1e3*60*60)/(1e3*60));return a>24?`${Math.floor(a/24)}d ${a%24}h`:a>0?`${a}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const n=s.time_remaining.toLowerCase();if(n==="final")return{type:"final",text:"Final",color:"#969696"};if(n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")){const a=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,r=s.period!==void 0&&s.period!==null&&s.period!==0;if(a||r)return{type:"live",text:s.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let n=this.scheduledAt;if(!n.includes("Z")&&!n.match(/[+-]\d{2}:\d{2}$/)&&(n=n+"Z"),new Date(n)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,n,a,r){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:n,price:a,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,s,n,a,r=!1){if(!n)return'<button class="btn btn--empty" disabled></button>';const o=n.price,i=n.point;let l="";return t==="spread"?l=`${i>0?`+${i}`:i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?l=o:t==="total"&&(l=`${a}${i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${r?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${o}"
                    ${i?`data-point="${i}"`:""}
                    ${r?'data-disabled="true"':""}>
            ${l}
        </button>`}render(){const t=this.theme==="dark",s=this.oddsMarkets,n=s&&(s.h2h||s.totals||s.spreads),a=this.isMatchInProgressLocked(),r=this.isDisabled||a,o=n,i=this.getGameStatus(),l=this.scoreboard,c=l?.home_score||0,d=l?.away_score||0,u=i?.type==="live"||i?.type==="final",p=parseInt(c),f=parseInt(d),b=u&&i?.type==="final"&&p>f,v=u&&i?.type==="final"&&f>p,_=s?.spreads?.outcomes?.find(A=>A.name===this.homeTeam),h=s?.spreads?.outcomes?.find(A=>A.name===this.awayTeam),m=s?.h2h?.outcomes?.find(A=>A.name===this.homeTeam),g=s?.h2h?.outcomes?.find(A=>A.name===this.awayTeam),y=s?.totals?.outcomes?.find(A=>A.name==="Over"),T=s?.totals?.outcomes?.find(A=>A.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                }

                * {
                    box-sizing: border-box;
                }

                .card {
                    padding: 1rem 1rem 0.75rem;
                    margin-bottom: 12px;
                    border: none;
                    border-radius: 0;
                    transition: all 0.3s ease;
                    background: ${t?"linear-gradient(135deg, rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.05))":"#ffffff"};
                    position: relative;
                    cursor: default;
                }

                .card--final {
                    opacity: 0.85;
                }

                :host([data-is-disabled="true"]) .card {
                    opacity: 0.4;
                    cursor: not-allowed;
                    pointer-events: none;
                }

                /* ── Header strip: full width ── */
                .header {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    margin-bottom: 10px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid ${t?"rgba(46, 139, 87, 0.2)":"#d0d0d0"};
                }

                .header bma-sport-icon {
                    flex-shrink: 0;
                }

                .sport-label {
                    font-size: 0.65rem;
                    font-weight: 600;
                    color: ${t?"#F7C60D":"#d4a800"};
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .date {
                    font-size: 0.8rem;
                    color: ${t?"#F7C60D":"#d4a800"};
                    font-weight: 500;
                    white-space: nowrap;
                    margin-left: auto;
                }

                .header-spacer {
                    flex: 1;
                }

                .status-badge {
                    padding: 2px 8px;
                    border-radius: 0;
                    font-size: 0.7rem;
                    font-weight: 600;
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    white-space: nowrap;
                    flex-shrink: 0;
                }

                .status-badge--live {
                    background: rgba(0, 230, 118, 0.15);
                    color: #00E676;
                    border: 1px solid rgba(0, 230, 118, 0.3);
                }

                .status-badge--upcoming {
                    background: rgba(247, 198, 13, 0.15);
                    color: #F7C60D;
                    border: 1px solid rgba(247, 198, 13, 0.3);
                }

                .status-badge--final,
                .status-badge--scheduled {
                    background: rgba(150, 150, 150, 0.15);
                    color: #969696;
                    border: 1px solid rgba(150, 150, 150, 0.3);
                }

                .live-dot {
                    width: 6px;
                    height: 6px;
                    background: #00E676;
                    border-radius: 0;
                    animation: pulse 1.5s ease-in-out infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
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
                    font-weight: 600;
                    text-transform: uppercase;
                    text-align: center;
                    color: ${t?"#969696":"#666"};
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

                /* Default order: away first, home second */
                .row--home { grid-row: 2; }
                .row--away { grid-row: 1; }

                /* Soccer: home first, away second */
                :host([data-sport-key^="soccer_"]) .row--home { grid-row: 1; }
                :host([data-sport-key^="soccer_"]) .row--away { grid-row: 2; }

                .team {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    min-width: 0;
                }

                .team-name {
                    font-weight: 600;
                    font-size: 0.85rem;
                    color: ${t?"#FFFFFF":"#000000"};
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    flex: 1;
                    min-width: 0;
                }

                .team-score {
                    font-size: 1.1rem;
                    font-weight: 700;
                    padding: 2px 8px;
                    min-width: 32px;
                    text-align: center;
                    flex-shrink: 0;
                }

                .team--home .team-score {
                    color: ${t?"#ffe24d":"#d4a800"};
                    background: rgba(255, 226, 77, 0.12);
                }

                .team--away .team-score {
                    color: ${t?"#14b963":"#0e8f4d"};
                    background: rgba(20, 185, 99, 0.12);
                }

                /* Winner highlight */
                .team--winner .team-name {
                    color: ${t?"#00E676":"#00A352"};
                }

                .team--winner .team-score {
                    color: ${t?"#00E676":"#00A352"};
                    background: rgba(0, 230, 118, 0.15);
                    font-size: 1.2rem;
                }

                .team--loser {
                    opacity: 0.55;
                }

                /* ── Buttons (unchanged) ── */
                .buttons {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 6px;
                }

                .btn {
                    padding: 10px 8px;
                    border: 1px solid ${t?"#323232":"#d0d0d0"};
                    border-radius: 0;
                    background: ${t?"#161616":"#f5f5f5"};
                    color: ${t?"#fff":"#000"};
                    font-size: 0.75rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    text-align: center;
                    line-height: 1.4;
                }

                .btn--empty {
                    opacity: 0.2;
                    cursor: not-allowed;
                }

                .btn--disabled {
                    opacity: 0.4;
                    cursor: not-allowed;
                    background: ${t?"#181818":"#e5e5e5"};
                    border-color: ${t?"#484848":"#b0b0b0"};
                    color: ${t?"#969696":"#888"};
                    pointer-events: none;
                }

                .btn:not(.btn--empty):not(.btn--disabled):hover {
                    border-color: ${t?"#F7C60D":"#d4a800"};
                    background: ${t?"#181818":"#fff"};
                    color: ${t?"#F7C60D":"#d4a800"};
                }

                .btn:not(.btn--empty):not(.btn--disabled):active {
                    background: ${t?"#F7C60D":"#d4a800"};
                    color: #000;
                }

                .btn--selected {
                    border-color: ${t?"#F7C60D":"#d4a800"};
                    background: ${t?"color-mix(in srgb, #6D5706 15%, #161616)":"color-mix(in srgb, #d4a800 15%, #f5f5f5)"};
                    color: ${t?"#F7C60D":"#d4a800"};
                    font-weight: 700;
                }

                .btn--active {
                    border: 1px solid ${t?"#F7C60D":"#d4a800"};
                    box-shadow: 0 0 12px ${t?"rgba(247, 198, 13, 0.3)":"rgba(212, 168, 0, 0.3)"};
                }

                .btn[data-bet-type="money"]:not([data-price^="-"])::before {
                    content: "+";
                }

                .btn-odds:not([data-price-value^="-"])::before {
                    content: "+";
                }

                /* ── Mobile responsive ── */
                @media (max-width: 600px) {
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

            <div class="card ${i?`card--${i.type}`:""}">
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
                    ${i&&i.type!=="scheduled"?`
                        <div class="status-badge status-badge--${i.type}">
                            ${i.type==="live"?'<span class="live-dot"></span>':""}
                            <span class="countdown">${i.text}</span>
                        </div>
                    `:""}
                    <span class="date">${this.formatDate(this.scheduledAt)}</span>
                </div>

                <!-- Column labels row -->
                ${o?`
                    <div class="labels-row">
                        <span>SPREAD</span>
                        <span>MONEY</span>
                        <span>TOTAL</span>
                    </div>
                `:""}

                <!-- Team rows -->
                <div class="rows-container">
                    <div class="row row--home">
                        <div class="team team--home ${b?"team--winner":""} ${v?"team--loser":""}">
                            <span class="team-name">${this.homeTeam}</span>
                            ${u?`<span class="team-score">${c}</span>`:""}
                        </div>
                        ${o?`
                            <div class="buttons">
                                ${this.renderButton("spread","home",_,null,r)}
                                ${this.renderButton("money","home",m,null,r)}
                                ${this.renderButton("total","over",y,"O",r)}
                            </div>
                        `:""}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${v?"team--winner":""} ${b?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${u?`<span class="team-score">${d}</span>`:""}
                        </div>
                        ${o?`
                            <div class="buttons">
                                ${this.renderButton("spread","away",h,null,r)}
                                ${this.renderButton("money","away",g,null,r)}
                                ${this.renderButton("total","under",T,"U",r)}
                            </div>
                        `:""}
                    </div>
                </div>
            </div>
        `,o&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(A=>{const O=A.dataset.betType,C=A.dataset.team,E=A.dataset.price,x=A.dataset.point||null;A.addEventListener("click",L=>this.handleButtonClick(L,O,C,E,x))})}}customElements.define("bma-bet-match-card",tf);class sf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,n){s!==n&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(s){return console.warn("[bma-match-status] Failed to parse scoreboard data:",s),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let n=!1;if(this.scheduledAt){let o=this.scheduledAt;!o.includes("Z")&&!o.match(/[+-]\d{2}:\d{2}$/)&&(o=o+"Z");const i=new Date(o),l=new Date(Date.now()-300*1e3);n=i<l}let a="UPCOMING",r=null;if(t?.time_remaining){const o=t.time_remaining;o==="Final"?(a="FINAL",r="Final"):o==="In Progress"?(a="IN_PROGRESS",r="In Progress"):(a="IN_PROGRESS",r=o)}else s&&n?(a="FINAL",r="Final"):(a="UPCOMING",r="Upcoming");return{status:a,timeRemaining:r}}render(){const{status:t,timeRemaining:s}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,a=this.scheduledAt?qs.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",r=parseInt(this.homeScore),o=parseInt(this.awayScore),i=n&&t==="FINAL"&&r>o,l=n&&t==="FINAL"&&o>r;this.shadowRoot.innerHTML=`
      <style>
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
          color: #FFFFFF;
        }

        /* Sport indicator */
        .sport-indicator {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
          min-width: 40px;
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
          color: #FFFFFF;
        }

        .winner {
          color: #00E676;
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
          color: #00E676;
          font-weight: 600;
        }

        .status--upcoming {
          color: #F7C60D;
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
          color: rgba(0, 0, 0, 0.5);
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
        <span class="sport-indicator">${this.getSportAbbr()}</span>
        <span class="bullet">•</span>
        <div class="match-content">
          ${n?`
            <span class="team-name ${i?"winner":l?"loser":""}">${this.homeTeam}</span>
            <span class="score ${i?"winner":l?"loser":""}">${this.homeScore}</span>
            <span class="bullet">-</span>
            <span class="team-name ${l?"winner":i?"loser":""}">${this.awayTeam}</span>
            <span class="score ${l?"winner":i?"loser":""}">${this.awayScore}</span>
          `:`
            <span class="team-name">${this.homeTeam}</span>
            <span>vs</span>
            <span class="team-name">${this.awayTeam}</span>
          `}
        </div>
        <span class="bullet">•</span>
        <span class="status ${t==="IN_PROGRESS"?"status--live":""} ${t==="UPCOMING"?"status--upcoming":""}">
          ${s||t}
        </span>
      </div>
      <div class="match-details">
        <div class="detail-row">Scheduled: ${a}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
      </div>
    `}}customElements.define("bma-match-status",sf);class Yt extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this.render(),this.attachEventListeners()}attributeChangedCallback(t,s,n){s!==n&&(this.render(),this.attachEventListeners())}toggleExpanded(){Yt.currentlyExpanded&&Yt.currentlyExpanded!==this&&Yt.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),s.classList.add("expanded"),Yt.currentlyExpanded=this):(t.classList.remove("open"),s.classList.remove("expanded"),Yt.currentlyExpanded===this&&(Yt.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),s&&s.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",s=>{s.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let s=0,n=0,a=0,r=0,o=0;return t.forEach(i=>{const l=i.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?s++:n++:(a++,r+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:s,losses:n,pending:a,total:s+n+a,pendingStakes:r,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches,n=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const a=t.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(n)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(a.length===0)return'<p class="no-bets">No reconciled bets</p>';const r={};s.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(r[c]=l)});const o={};a.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=r[c];if(d){o[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=qt.find(f=>f.key===u);o[c].sportKey=p?.group||"default"}o[c].bets.push(l)});let i="";return Object.keys(o).forEach(l=>{const c=o[l],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;i+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const b=f.bet||[];if(b.length===0)return;const v=b[0];Object.keys(v).filter(h=>h!=="short_title").forEach(h=>{const m=v[h];if(!m||typeof m!="object")return;const g=(m.type||"").toUpperCase(),y=parseFloat(m.stake||m.wager||0).toFixed(2),T=m.odds||"-",A=T>0?`+${T}`:`${T}`,O=parseFloat(m.payout||0).toFixed(2),C=m.reconciled===!0;let E="pending",x="Pending";C&&Number(O)>0?(E="won",x="Won"):C&&Number(O)===0?(E="lost",x="Lost"):C&&(E="reconciled",x="Settled"),i+=`<div class="bet-item bet-item--${E}">
                        <div class="bet-item__header">
                            <span class="bet-item__team">${h}</span>
                            <span class="bet-status-badge ${E}">${x}</span>
                        </div>
                        <div class="bet-item__detail">
                            <span>${g}</span>
                            <span>Stake: $${y}</span>
                            <span>Odds: ${A}</span>
                            <span class="${E==="won"?"payout-win":E==="lost"?"payout-loss":""}">Payout: $${O}</span>
                        </div>
                    </div>`})})}),i}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",s=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",n=parseFloat(this.tournamentDollars||0),a=parseFloat(this.startingDollars||0),r=n-a,o=r>=0?"+":"",i=r>0?"profit-up":r<0?"profit-down":"profit-even",l=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    margin-bottom: 0.75rem;
                }

                * {
                    box-sizing: border-box;
                }

                .leaderboard-card {
                    background: rgba(46, 139, 87, 0.12);
                    border: 1px solid rgba(46, 139, 87, 0.25);
                    border-radius: 0;
                    padding: 1rem 1rem 0 1rem;
                    user-select: none;
                    transition: border-color 0.2s ease, box-shadow 0.2s ease;
                }

                .leaderboard-card:hover {
                    border-color: rgba(46, 139, 87, 0.45);
                    box-shadow: inset 0 0 0 1px rgba(46, 139, 87, 0.15);
                }

                .leaderboard-card--current-user {
                    border-left: 3px solid #FFD700;
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
                    width: 24px;
                    height: 24px;
                    flex-shrink: 0;
                }

                .badge-trophy--gold {
                    background: radial-gradient(circle, #FFD700, #FFA500);
                    border-radius: 0;
                    box-shadow: 0 0 12px rgba(255, 215, 0, 0.6);
                }

                .badge-trophy--silver {
                    background: radial-gradient(circle, #C0C0C0, #A8A8A8);
                    border-radius: 0;
                    box-shadow: 0 0 12px rgba(192, 192, 192, 0.6);
                }

                .badge-trophy--bronze {
                    background: radial-gradient(circle, #CD7F32, #B8732D);
                    border-radius: 0;
                    box-shadow: 0 0 12px rgba(205, 127, 50, 0.6);
                }

.badge-trophy--gold {
  background-image: var(--badge__icon--gold);
}

.badge-trophy--silver {
  background-image: var(--badge__icon--silver);
}

.badge-trophy--bronze {
  background-image: var(--badge__icon--bronze);
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
                    border-radius: 4px;
                    font-size: 0.6rem;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                    background: rgba(255, 215, 0, 0.2);
                    color: #FFD700;
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

                .kpi-card__value.profit-up { color: #4ADE80; }
                .kpi-card__value.profit-down { color: #FF6B6B; }
                .kpi-card__value.profit-even { color: rgba(255, 255, 255, 0.5); }
                .kpi-card__value--risk { color: #FFD700; }
                .kpi-card__value--max-win { color: #4ADE80; }
                .kpi-card__value--none {
                    color: rgba(255, 255, 255, 0.3);
                }

                .expand-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 32px;
                    height: 32px;
                    background: rgba(247, 198, 13, 0.12);
                    border: 1px solid rgba(247, 198, 13, 0.3);
                    border-radius: 6px;
                    transition: all 0.2s ease;
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
                    border-color: rgba(247, 198, 13, 0.6);
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
                    background: rgba(46, 139, 87, 0.1);
                    border-radius: 2px;
                }

                .bets-scroll-container::-webkit-scrollbar-thumb {
                    background: rgba(46, 139, 87, 0.35);
                    border-radius: 2px;
                }

                .bets-scroll-container::-webkit-scrollbar-thumb:hover {
                    background: rgba(46, 139, 87, 0.55);
                }

                .details-summary__stat {
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.7);
                }

                .details-summary__stat strong {
                    color: #FFD700;
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
                    border-radius: 0;
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
                    border-radius: 6px;
                    background: rgba(0, 0, 0, 0.2);
                    border: 1px solid rgba(255, 255, 255, 0.06);
                    border-left: 3px solid rgba(255, 255, 255, 0.1);
                    font-size: 0.78rem;
                    color: rgba(255, 255, 255, 0.75);
                }

                .bet-item--won { border-left-color: #4ADE80; }
                .bet-item--lost { border-left-color: #FF6B6B; }
                .bet-item--pending { border-left-color: #FFD700; }
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
                    border-radius: 4px;
                    font-size: 0.7rem;
                    font-weight: 600;
                    text-transform: uppercase;
                }

                .bet-status-badge.reconciled { background: rgba(46, 139, 87, 0.25); color: #2E8B57; }
                .bet-status-badge.pending { background: rgba(255, 215, 0, 0.2); color: #FFD700; }
                .bet-status-badge.won { background: rgba(46, 139, 87, 0.3); color: #4ADE80; }
                .bet-status-badge.lost { background: rgba(220, 20, 60, 0.2); color: #FF6B6B; }

                .payout-win {
                    color: #FFD700;
                    font-weight: 600;
                }

                .payout-loss {
                    color: #FF6B6B;
                    font-weight: 600;
                }

                .no-bets {
                    text-align: center;
                    padding: 2rem;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
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

            <div class="leaderboard-card ${t}">
                <div class="leaderboard-card__header">
                    <div class="leaderboard-card__rank">#${this.rank}</div>

                    <div class="leaderboard-card__user">
                        ${s}
                        <span class="leaderboard-card__username">${this.username}</span>
                        ${this.isCurrentUser?'<span class="you-badge">YOU</span>':""}
                    </div>

                    <div class="leaderboard-card__balance">
                        <span class="dollars-amount">TD$ ${parseFloat(this.tournamentDollars||0).toFixed(2)}</span>
                    </div>

                    <span class="expand-icon"></span>
                </div>

                <div class="kpi-strip">
                    <div class="kpi-card">
                        <div class="kpi-card__label">Gain / Loss</div>
                        <div class="kpi-card__value ${i}">${o}$${Math.abs(r).toFixed(2)}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Bet Record</div>
                        <div class="kpi-card__value">${l.wins}W - ${l.losses}L</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">At Risk</div>
                        <div class="kpi-card__value ${l.pending>0?"kpi-card__value--risk":"kpi-card__value--none"}">${l.pending>0?"TD$ "+l.pendingStakes.toFixed(0):"TD$ 0"}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Max Win</div>
                        <div class="kpi-card__value ${l.pending>0?"kpi-card__value--max-win":"kpi-card__value--none"}">${l.pending>0?"TD$ "+l.pendingMaxPayout.toFixed(0):"TD$ 0"}</div>
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
        `}}customElements.define("bma-leaderboard-card",Yt);class ml{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:n}=t.Bet,{home_team_id:a,home_team_score:r,away_team_id:o,away_team_score:i}=t.Match,l=s?.toUpperCase()||"",c=parseFloat(r)||0,d=parseFloat(i)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${a} (${c})`,away:`${o} (${d})`,scope:n}),l){case"MONEY":return this._evaluateMoneyline(n.team_id,a,o,c,d);case"SPREAD":return this._evaluateSpread(n.team_id,n.point,a,o,c,d);case"TOTAL":return this._evaluateTotal(n.over,n.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,s,n,a,r){const o=t===s,i=t===n;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=a>r,c=r>a;if(a===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,s,n,a,r,o){const i=t===n,l=t===a;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let d=r,u=o;i?d=r+c:u=o+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const v=i&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${v?"WON":"LOST"}`),v}static _evaluateTotal(t,s,n,a){const r=n+a,o=t&&t!=="";if(!o&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:s);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:n,stake:a}=t.Bet,r=s?.toUpperCase()||"",o=parseFloat(n)||0,i=parseFloat(a)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,s){let n=0;return t>0?n=s*(t/100):t<0?n=s/(Math.abs(t)/100):n=0,s+n}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function So(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function cr(e,t){e===void 0&&(e={}),t===void 0&&(t={});const s=["__proto__","constructor","prototype"];Object.keys(t).filter(n=>s.indexOf(n)<0).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:So(t[n])&&So(e[n])&&Object.keys(t[n]).length>0&&cr(e[n],t[n])})}const gl={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function bt(){const e=typeof document<"u"?document:{};return cr(e,gl),e}const nf={document:gl,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function $e(){const e=typeof window<"u"?window:{};return cr(e,nf),e}function af(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function rf(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function bl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function wn(){return Date.now()}function of(e){const t=$e();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function lf(e,t){t===void 0&&(t="x");const s=$e();let n,a,r;const o=of(e);return s.WebKitCSSMatrix?(a=o.transform||o.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(i=>i.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix(a==="none"?"":a)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?a=r.m41:n.length===16?a=parseFloat(n[12]):a=parseFloat(n[4])),t==="y"&&(s.WebKitCSSMatrix?a=r.m42:n.length===16?a=parseFloat(n[13]):a=parseFloat(n[5])),a||0}function nn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function cf(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ke(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const n=s<0||arguments.length<=s?void 0:arguments[s];if(n!=null&&!cf(n)){const a=Object.keys(Object(n)).filter(r=>t.indexOf(r)<0);for(let r=0,o=a.length;r<o;r+=1){const i=a[r],l=Object.getOwnPropertyDescriptor(n,i);l!==void 0&&l.enumerable&&(nn(e[i])&&nn(n[i])?n[i].__swiper__?e[i]=n[i]:Ke(e[i],n[i]):!nn(e[i])&&nn(n[i])?(e[i]={},n[i].__swiper__?e[i]=n[i]:Ke(e[i],n[i])):e[i]=n[i])}}}return e}function an(e,t,s){e.style.setProperty(t,s)}function _l(e){let{swiper:t,targetPosition:s,side:n}=e;const a=$e(),r=-t.translate;let o=null,i;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(t.cssModeFrameID);const c=s>r?"next":"prev",d=(p,f)=>c==="next"&&p>=f||c==="prev"&&p<=f,u=()=>{i=new Date().getTime(),o===null&&(o=i);const p=Math.max(Math.min((i-o)/l,1),0),f=.5-Math.cos(p*Math.PI)/2;let b=r+f*(s-r);if(d(b,s)&&(b=s),t.wrapperEl.scrollTo({[n]:b}),d(b,s)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[n]:b})}),a.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=a.requestAnimationFrame(u)};u()}function Rt(e,t){t===void 0&&(t="");const s=$e(),n=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(a=>a.matches(t)):n}function df(e,t){const s=[t];for(;s.length>0;){const n=s.shift();if(e===n)return!0;s.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function uf(e,t){const s=$e();let n=t.contains(e);return!n&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(n=[...t.assignedElements()].includes(e),n||(n=df(e,t))),n}function En(e){try{console.warn(e);return}catch{}}function Na(e,t){t===void 0&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:af(t)),s}function pf(e,t){const s=[];for(;e.previousElementSibling;){const n=e.previousElementSibling;t?n.matches(t)&&s.push(n):s.push(n),e=n}return s}function ff(e,t){const s=[];for(;e.nextElementSibling;){const n=e.nextElementSibling;t?n.matches(t)&&s.push(n):s.push(n),e=n}return s}function zt(e,t){return $e().getComputedStyle(e,null).getPropertyValue(t)}function wo(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function hf(e,t){const s=[];let n=e.parentElement;for(;n;)s.push(n),n=n.parentElement;return s}function Eo(e,t,s){const n=$e();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}let da;function mf(){const e=$e(),t=bt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function yl(){return da||(da=mf()),da}let ua;function gf(e){let{userAgent:t}=e===void 0?{}:e;const s=yl(),n=$e(),a=n.navigator.platform,r=t||n.navigator.userAgent,o={ios:!1,android:!1},i=n.screen.width,l=n.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=a==="Win32";let b=a==="MacIntel";const v=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&b&&s.touch&&v.indexOf(`${i}x${l}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),b=!1),c&&!f&&(o.os="android",o.android=!0),(d||p||u)&&(o.os="ios",o.ios=!0),o}function vl(e){return e===void 0&&(e={}),ua||(ua=gf(e)),ua}let pa;function bf(){const e=$e(),t=vl();let s=!1;function n(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(n()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));s=l<16||l===16&&c<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=n(),o=r||a&&t.ios;return{isSafari:s||r,needPerspectiveFix:s,need3dFix:o,isWebView:a}}function Tl(){return pa||(pa=bf()),pa}function _f(e){let{swiper:t,on:s,emit:n}=e;const a=$e();let r=null,o=null;const i=()=>{!t||t.destroyed||!t.initialized||(n("beforeResize"),n("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(r=new ResizeObserver(u=>{o=a.requestAnimationFrame(()=>{const{width:p,height:f}=t;let b=p,v=f;u.forEach(_=>{let{contentBoxSize:h,contentRect:m,target:g}=_;g&&g!==t.el||(b=m?m.width:(h[0]||h).inlineSize,v=m?m.height:(h[0]||h).blockSize)}),(b!==p||v!==f)&&i()})}),r.observe(t.el))},c=()=>{o&&a.cancelAnimationFrame(o),r&&r.unobserve&&t.el&&(r.unobserve(t.el),r=null)},d=()=>{!t||t.destroyed||!t.initialized||n("orientationchange")};s("init",()=>{if(t.params.resizeObserver&&typeof a.ResizeObserver<"u"){l();return}a.addEventListener("resize",i),a.addEventListener("orientationchange",d)}),s("destroy",()=>{c(),a.removeEventListener("resize",i),a.removeEventListener("orientationchange",d)})}function yf(e){let{swiper:t,extendParams:s,on:n,emit:a}=e;const r=[],o=$e(),i=function(d,u){u===void 0&&(u={});const p=o.MutationObserver||o.WebkitMutationObserver,f=new p(b=>{if(t.__preventObserver__)return;if(b.length===1){a("observerUpdate",b[0]);return}const v=function(){a("observerUpdate",b[0])};o.requestAnimationFrame?o.requestAnimationFrame(v):o.setTimeout(v,0)});f.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:t.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(f)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=hf(t.hostEl);for(let u=0;u<d.length;u+=1)i(d[u])}i(t.hostEl,{childList:t.params.observeSlideChildren}),i(t.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var vf={on(e,t,s){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const a=s?"unshift":"push";return e.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][a](t)}),n},once(e,t,s){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;function a(){n.off(e,a),a.__emitterProxy&&delete a.__emitterProxy;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];t.apply(n,o)}return a.__emitterProxy=t,n.on(e,a,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const n=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[n](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(n=>{typeof t>"u"?s.eventsListeners[n]=[]:s.eventsListeners[n]&&s.eventsListeners[n].forEach((a,r)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[n].splice(r,1)})}),s},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,s,n;for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return typeof r[0]=="string"||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),n=e):(t=r[0].events,s=r[0].data,n=r[0].context||e),s.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...s])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(n,s)})}),e}};function Tf(){const e=this;let t,s;const n=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=n.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=n.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(zt(n,"padding-left")||0,10)-parseInt(zt(n,"padding-right")||0,10),s=s-parseInt(zt(n,"padding-top")||0,10)-parseInt(zt(n,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function Sf(){const e=this;function t(x,L){return parseFloat(x.getPropertyValue(e.getDirectionLabel(L))||0)}const s=e.params,{wrapperEl:n,slidesEl:a,size:r,rtlTranslate:o,wrongRTL:i}=e,l=e.virtual&&s.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=Rt(a,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:d.length;let p=[];const f=[],b=[];let v=s.slidesOffsetBefore;typeof v=="function"&&(v=s.slidesOffsetBefore.call(e));let _=s.slidesOffsetAfter;typeof _=="function"&&(_=s.slidesOffsetAfter.call(e));const h=e.snapGrid.length,m=e.slidesGrid.length;let g=s.spaceBetween,y=-v,T=0,A=0;if(typeof r>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*r:typeof g=="string"&&(g=parseFloat(g)),e.virtualSize=-g,d.forEach(x=>{o?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(an(n,"--swiper-centered-offset-before",""),an(n,"--swiper-centered-offset-after",""));const O=s.grid&&s.grid.rows>1&&e.grid;O?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let C;const E=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(x=>typeof s.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<u;x+=1){C=0;let L;if(d[x]&&(L=d[x]),O&&e.grid.updateSlide(x,L,d),!(d[x]&&zt(L,"display")==="none")){if(s.slidesPerView==="auto"){E&&(d[x].style[e.getDirectionLabel("width")]="");const P=getComputedStyle(L),j=L.style.transform,Q=L.style.webkitTransform;if(j&&(L.style.transform="none"),Q&&(L.style.webkitTransform="none"),s.roundLengths)C=e.isHorizontal()?Eo(L,"width"):Eo(L,"height");else{const oe=t(P,"width"),G=t(P,"padding-left"),H=t(P,"padding-right"),$=t(P,"margin-left"),te=t(P,"margin-right"),ne=P.getPropertyValue("box-sizing");if(ne&&ne==="border-box")C=oe+$+te;else{const{clientWidth:ie,offsetWidth:le}=L;C=oe+G+H+$+te+(le-ie)}}j&&(L.style.transform=j),Q&&(L.style.webkitTransform=Q),s.roundLengths&&(C=Math.floor(C))}else C=(r-(s.slidesPerView-1)*g)/s.slidesPerView,s.roundLengths&&(C=Math.floor(C)),d[x]&&(d[x].style[e.getDirectionLabel("width")]=`${C}px`);d[x]&&(d[x].swiperSlideSize=C),b.push(C),s.centeredSlides?(y=y+C/2+T/2+g,T===0&&x!==0&&(y=y-r/2-g),x===0&&(y=y-r/2-g),Math.abs(y)<1/1e3&&(y=0),s.roundLengths&&(y=Math.floor(y)),A%s.slidesPerGroup===0&&p.push(y),f.push(y)):(s.roundLengths&&(y=Math.floor(y)),(A-Math.min(e.params.slidesPerGroupSkip,A))%e.params.slidesPerGroup===0&&p.push(y),f.push(y),y=y+C+g),e.virtualSize+=C+g,T=C,A+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+_,o&&i&&(s.effect==="slide"||s.effect==="coverflow")&&(n.style.width=`${e.virtualSize+g}px`),s.setWrapperSize&&(n.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),O&&e.grid.updateWrapperSize(C,p),!s.centeredSlides){const x=[];for(let L=0;L<p.length;L+=1){let P=p[L];s.roundLengths&&(P=Math.floor(P)),p[L]<=e.virtualSize-r&&x.push(P)}p=x,Math.floor(e.virtualSize-r)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-r)}if(l&&s.loop){const x=b[0]+g;if(s.slidesPerGroup>1){const L=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),P=x*s.slidesPerGroup;for(let j=0;j<L;j+=1)p.push(p[p.length-1]+P)}for(let L=0;L<e.virtual.slidesBefore+e.virtual.slidesAfter;L+=1)s.slidesPerGroup===1&&p.push(p[p.length-1]+x),f.push(f[f.length-1]+x),e.virtualSize+=x}if(p.length===0&&(p=[0]),g!==0){const x=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");d.filter((L,P)=>!s.cssMode||s.loop?!0:P!==d.length-1).forEach(L=>{L.style[x]=`${g}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let x=0;b.forEach(P=>{x+=P+(g||0)}),x-=g;const L=x>r?x-r:0;p=p.map(P=>P<=0?-v:P>L?L+_:P)}if(s.centerInsufficientSlides){let x=0;b.forEach(P=>{x+=P+(g||0)}),x-=g;const L=(s.slidesOffsetBefore||0)+(s.slidesOffsetAfter||0);if(x+L<r){const P=(r-x-L)/2;p.forEach((j,Q)=>{p[Q]=j-P}),f.forEach((j,Q)=>{f[Q]=j+P})}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:f,slidesSizesGrid:b}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){an(n,"--swiper-centered-offset-before",`${-p[0]}px`),an(n,"--swiper-centered-offset-after",`${e.size/2-b[b.length-1]/2}px`);const x=-e.snapGrid[0],L=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+x),e.slidesGrid=e.slidesGrid.map(P=>P+L)}if(u!==c&&e.emit("slidesLengthChange"),p.length!==h&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==m&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const x=`${s.containerModifierClass}backface-hidden`,L=e.el.classList.contains(x);u<=s.maxBackfaceHiddenSlides?L||e.el.classList.add(x):L&&e.el.classList.remove(x)}}function wf(e){const t=this,s=[],n=t.virtual&&t.params.virtual.enabled;let a=0,r;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=i=>n?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{s.push(i)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const i=t.activeIndex+r;if(i>t.slides.length&&!n)break;s.push(o(i))}else s.push(o(t.activeIndex));for(r=0;r<s.length;r+=1)if(typeof s[r]<"u"){const i=s[r].offsetHeight;a=i>a?i:a}(a||a===0)&&(t.wrapperEl.style.height=`${a}px`)}function Ef(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=(e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop)-s-e.cssOverflowAdjustment()}const xo=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function xf(e){e===void 0&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:n,rtlTranslate:a,snapGrid:r}=t;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;a&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=s.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<n.length;l+=1){const c=n[l];let d=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=n[0].swiperSlideOffset);const u=(o+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),p=(o-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),f=-(o-d),b=f+t.slidesSizesGrid[l],v=f>=0&&f<=t.size-t.slidesSizesGrid[l],_=f>=0&&f<t.size-1||b>1&&b<=t.size||f<=0&&b>=t.size;_&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),xo(c,_,s.slideVisibleClass),xo(c,v,s.slideFullyVisibleClass),c.progress=a?-u:u,c.originalProgress=a?-p:p}}function Af(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const s=t.params,n=t.maxTranslate()-t.minTranslate();let{progress:a,isBeginning:r,isEnd:o,progressLoop:i}=t;const l=r,c=o;if(n===0)a=0,r=!0,o=!0;else{a=(e-t.minTranslate())/n;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;r=d||a<=0,o=u||a>=1,d&&(a=0),u&&(a=1)}if(s.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],b=t.slidesGrid[t.slidesGrid.length-1],v=Math.abs(e);v>=p?i=(v-p)/b:i=(v+b-f)/b,i>1&&(i-=1)}Object.assign(t,{progress:a,progressLoop:i,isBeginning:r,isEnd:o}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",a)}const fa=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function Pf(){const e=this,{slides:t,params:s,slidesEl:n,activeIndex:a}=e,r=e.virtual&&s.virtual.enabled,o=e.grid&&s.grid&&s.grid.rows>1,i=u=>Rt(n,`.${s.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(r)if(s.loop){let u=a-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${u}"]`)}else l=i(`[data-swiper-slide-index="${a}"]`);else o?(l=t.find(u=>u.column===a),d=t.find(u=>u.column===a+1),c=t.find(u=>u.column===a-1)):l=t[a];l&&(o||(d=ff(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!d&&(d=t[0]),c=pf(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{fa(u,u===l,s.slideActiveClass),fa(u,u===d,s.slideNextClass),fa(u,u===c,s.slidePrevClass)}),e.emitSlidesClasses()}const pn=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,n=t.closest(s());if(n){let a=n.querySelector(`.${e.params.lazyPreloaderClass}`);!a&&e.isElement&&(n.shadowRoot?a=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(a=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),a&&a.remove())})),a&&a.remove()}},ha=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Ba=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const n=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=a,i=[o-t];i.push(...Array.from({length:t}).map((l,c)=>o+n+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&ha(e,c)});return}const r=a+n-1;if(e.params.rewind||e.params.loop)for(let o=a-t;o<=r+t;o+=1){const i=(o%s+s)%s;(i<a||i>r)&&ha(e,i)}else for(let o=Math.max(a-t,0);o<=Math.min(r+t,s-1);o+=1)o!==a&&(o>r||o<a)&&ha(e,o)};function Of(e){const{slidesGrid:t,params:s}=e,n=e.rtlTranslate?e.translate:-e.translate;let a;for(let r=0;r<t.length;r+=1)typeof t[r+1]<"u"?n>=t[r]&&n<t[r+1]-(t[r+1]-t[r])/2?a=r:n>=t[r]&&n<t[r+1]&&(a=r+1):n>=t[r]&&(a=r);return s.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function kf(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:n,params:a,activeIndex:r,realIndex:o,snapIndex:i}=t;let l=e,c;const d=f=>{let b=f-t.virtual.slidesBefore;return b<0&&(b=t.virtual.slides.length+b),b>=t.virtual.slides.length&&(b-=t.virtual.slides.length),b};if(typeof l>"u"&&(l=Of(t)),n.indexOf(s)>=0)c=n.indexOf(s);else{const f=Math.min(a.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/a.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===r&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&a.grid&&a.grid.rows>1;let p;if(t.virtual&&a.virtual.enabled&&a.loop)p=d(l);else if(u){const f=t.slides.find(v=>v.column===l);let b=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(f),0)),p=Math.floor(b/a.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:r,activeIndex:l}),t.initialized&&Ba(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function Cf(e,t){const s=this,n=s.params;let a=e.closest(`.${n.slideClass}, swiper-slide`);!a&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!a&&i.matches&&i.matches(`.${n.slideClass}, swiper-slide`)&&(a=i)});let r=!1,o;if(a){for(let i=0;i<s.slides.length;i+=1)if(s.slides[i]===a){r=!0,o=i;break}}if(a&&r)s.clickedSlide=a,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=o;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}n.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var Rf={updateSize:Tf,updateSlides:Sf,updateAutoHeight:wf,updateSlidesOffset:Ef,updateSlidesProgress:xf,updateProgress:Af,updateSlidesClasses:Pf,updateActiveIndex:kf,updateClickedSlide:Cf};function Lf(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:s,rtlTranslate:n,translate:a,wrapperEl:r}=t;if(s.virtualTranslate)return n?-a:a;if(s.cssMode)return a;let o=lf(r,e);return o+=t.cssOverflowAdjustment(),n&&(o=-o),o||0}function Mf(e,t){const s=this,{rtlTranslate:n,params:a,wrapperEl:r,progress:o}=s;let i=0,l=0;const c=0;s.isHorizontal()?i=n?-e:e:l=e,a.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?i:l,a.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-i:-l:a.virtualTranslate||(s.isHorizontal()?i-=s.cssOverflowAdjustment():l-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let d;const u=s.maxTranslate()-s.minTranslate();u===0?d=0:d=(e-s.minTranslate())/u,d!==o&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function If(){return-this.snapGrid[0]}function Df(){return-this.snapGrid[this.snapGrid.length-1]}function Nf(e,t,s,n,a){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),s===void 0&&(s=!0),n===void 0&&(n=!0);const r=this,{params:o,wrapperEl:i}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(n&&e>l?d=l:n&&e<c?d=c:d=e,r.updateProgress(d),o.cssMode){const u=r.isHorizontal();if(t===0)i[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return _l({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;i.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(r.setTransition(0),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Bf={getTranslate:Lf,setTranslate:Mf,minTranslate:If,maxTranslate:Df,translateTo:Nf};function Ff(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function Sl(e){let{swiper:t,runCallbacks:s,direction:n,step:a}=e;const{activeIndex:r,previousIndex:o}=t;let i=n;i||(r>o?i="next":r<o?i="prev":i="reset"),t.emit(`transition${a}`),s&&i==="reset"?t.emit(`slideResetTransition${a}`):s&&r!==o&&(t.emit(`slideChangeTransition${a}`),i==="next"?t.emit(`slideNextTransition${a}`):t.emit(`slidePrevTransition${a}`))}function $f(e,t){e===void 0&&(e=!0);const s=this,{params:n}=s;n.cssMode||(n.autoHeight&&s.updateAutoHeight(),Sl({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function Uf(e,t){e===void 0&&(e=!0);const s=this,{params:n}=s;s.animating=!1,!n.cssMode&&(s.setTransition(0),Sl({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var Hf={setTransition:Ff,transitionStart:$f,transitionEnd:Uf};function Gf(e,t,s,n,a){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:b}=r;if(!b&&!n&&!a||r.destroyed||r.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=r.params.speed);const v=Math.min(r.params.slidesPerGroupSkip,o);let _=v+Math.floor((o-v)/r.params.slidesPerGroup);_>=l.length&&(_=l.length-1);const h=-l[_];if(i.normalizeSlideIndex)for(let O=0;O<c.length;O+=1){const C=-Math.floor(h*100),E=Math.floor(c[O]*100),x=Math.floor(c[O+1]*100);typeof c[O+1]<"u"?C>=E&&C<x-(x-E)/2?o=O:C>=E&&C<x&&(o=O+1):C>=E&&(o=O)}if(r.initialized&&o!==u&&(!r.allowSlideNext&&(p?h>r.translate&&h>r.minTranslate():h<r.translate&&h<r.minTranslate())||!r.allowSlidePrev&&h>r.translate&&h>r.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(h);let m;o>u?m="next":o<u?m="prev":m="reset";const g=r.virtual&&r.params.virtual.enabled;if(!(g&&a)&&(p&&-h===r.translate||!p&&h===r.translate))return r.updateActiveIndex(o),i.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),i.effect!=="slide"&&r.setTranslate(h),m!=="reset"&&(r.transitionStart(s,m),r.transitionEnd(s,m)),!1;if(i.cssMode){const O=r.isHorizontal(),C=p?h:-h;if(t===0)g&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),g&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[O?"scrollLeft":"scrollTop"]=C})):f[O?"scrollLeft":"scrollTop"]=C,g&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return _l({swiper:r,targetPosition:C,side:O?"left":"top"}),!0;f.scrollTo({[O?"left":"top"]:C,behavior:"smooth"})}return!0}const A=Tl().isSafari;return g&&!a&&A&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(t),r.setTranslate(h),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,n),r.transitionStart(s,m),t===0?r.transitionEnd(s,m):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(C){!r||r.destroyed||C.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,m))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Yf(e,t,s,n){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;if(a.destroyed)return;typeof t>"u"&&(t=a.params.speed);const r=a.grid&&a.params.grid&&a.params.grid.rows>1;let o=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)o=o+a.virtual.slidesBefore;else{let i;if(r){const p=o*a.params.grid.rows;i=a.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===p).column}else i=a.getSlideIndexByData(o);const l=r?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:c}=a.params;let d=a.params.slidesPerView;d==="auto"?d=a.slidesPerViewDynamic():(d=Math.ceil(parseFloat(a.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-i<d;if(c&&(u=u||i<Math.ceil(d/2)),n&&c&&a.params.slidesPerView!=="auto"&&!r&&(u=!1),u){const p=c?i<a.activeIndex?"prev":"next":i-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?i+1:i-l+1,slideRealIndex:p==="next"?a.realIndex:void 0})}if(r){const p=o*a.params.grid.rows;o=a.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===p).column}else o=a.getSlideIndexByData(o)}return requestAnimationFrame(()=>{a.slideTo(o,t,s,n)}),a}function zf(e,t,s){t===void 0&&(t=!0);const n=this,{enabled:a,params:r,animating:o}=n;if(!a||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);let i=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(i=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<r.slidesPerGroupSkip?1:i,c=n.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,e,t,s)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,e,t,s):n.slideTo(n.activeIndex+l,e,t,s)}function jf(e,t,s){t===void 0&&(t=!0);const n=this,{params:a,snapGrid:r,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);const d=n.virtual&&a.virtual.enabled;if(a.loop){if(c&&!d&&a.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const u=i?n.translate:-n.translate;function p(m){return m<0?-Math.floor(Math.abs(m)):Math.floor(m)}const f=p(u),b=r.map(m=>p(m)),v=a.freeMode&&a.freeMode.enabled;let _=r[b.indexOf(f)-1];if(typeof _>"u"&&(a.cssMode||v)){let m;r.forEach((g,y)=>{f>=g&&(m=y)}),typeof m<"u"&&(_=v?r[m]:r[m>0?m-1:m])}let h=0;if(typeof _<"u"&&(h=o.indexOf(_),h<0&&(h=n.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(h=h-n.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),a.rewind&&n.isBeginning){const m=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(m,e,t,s)}else if(a.loop&&n.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{n.slideTo(h,e,t,s)}),!0;return n.slideTo(h,e,t,s)}function Kf(e,t,s){t===void 0&&(t=!0);const n=this;if(!n.destroyed)return typeof e>"u"&&(e=n.params.speed),n.slideTo(n.activeIndex,e,t,s)}function qf(e,t,s,n){t===void 0&&(t=!0),n===void 0&&(n=.5);const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);let r=a.activeIndex;const o=Math.min(a.params.slidesPerGroupSkip,r),i=o+Math.floor((r-o)/a.params.slidesPerGroup),l=a.rtlTranslate?a.translate:-a.translate;if(l>=a.snapGrid[i]){const c=a.snapGrid[i],d=a.snapGrid[i+1];l-c>(d-c)*n&&(r+=a.params.slidesPerGroup)}else{const c=a.snapGrid[i-1],d=a.snapGrid[i];l-c<=(d-c)*n&&(r-=a.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,a.slidesGrid.length-1),a.slideTo(r,e,t,s)}function Wf(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,n=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let a=e.getSlideIndexWhenGrid(e.clickedIndex),r;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):a>(i?(e.slides.length-n)/2-(e.params.grid.rows-1):e.slides.length-n)?(e.loopFix(),a=e.getSlideIndex(Rt(s,`${o}[data-swiper-slide-index="${r}"]`)[0]),bl(()=>{e.slideTo(a)})):e.slideTo(a)}else e.slideTo(a)}var Vf={slideTo:Gf,slideToLoop:Yf,slideNext:zf,slidePrev:jf,slideReset:Kf,slideToClosest:qf,slideToClickedSlide:Wf};function Jf(e,t){const s=this,{params:n,slidesEl:a}=s;if(!n.loop||s.virtual&&s.params.virtual.enabled)return;const r=()=>{Rt(a,`.${n.slideClass}, swiper-slide`).forEach((f,b)=>{f.setAttribute("data-swiper-slide-index",b)})},o=()=>{const p=Rt(a,`.${n.slideBlankClass}`);p.forEach(f=>{f.remove()}),p.length>0&&(s.recalcSlides(),s.updateSlides())},i=s.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||i)&&o();const l=n.slidesPerGroup*(i?n.grid.rows:1),c=s.slides.length%l!==0,d=i&&s.slides.length%n.grid.rows!==0,u=p=>{for(let f=0;f<p;f+=1){const b=s.isElement?Na("swiper-slide",[n.slideBlankClass]):Na("div",[n.slideClass,n.slideBlankClass]);s.slidesEl.append(b)}};if(c){if(n.loopAddBlankSlides){const p=l-s.slides.length%l;u(p),s.recalcSlides(),s.updateSlides()}else En("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(n.loopAddBlankSlides){const p=n.grid.rows-s.slides.length%n.grid.rows;u(p),s.recalcSlides(),s.updateSlides()}else En("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();s.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next",initial:t})}function Xf(e){let{slideRealIndex:t,slideTo:s=!0,direction:n,setTranslate:a,activeSlideIndex:r,initial:o,byController:i,byMousewheel:l}=e===void 0?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:p,slidesEl:f,params:b}=c,{centeredSlides:v,initialSlide:_}=b;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&b.virtual.enabled){s&&(!b.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):b.centeredSlides&&c.snapIndex<b.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=p,c.emit("loopFix");return}let h=b.slidesPerView;h==="auto"?h=c.slidesPerViewDynamic():(h=Math.ceil(parseFloat(b.slidesPerView,10)),v&&h%2===0&&(h=h+1));const m=b.slidesPerGroupAuto?h:b.slidesPerGroup;let g=v?Math.max(m,Math.ceil(h/2)):m;g%m!==0&&(g+=m-g%m),g+=b.loopAdditionalSlides,c.loopedSlides=g;const y=c.grid&&b.grid&&b.grid.rows>1;d.length<h+g||c.params.effect==="cards"&&d.length<h+g*2?En("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&b.grid.fill==="row"&&En("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const T=[],A=[],O=y?Math.ceil(d.length/b.grid.rows):d.length,C=o&&O-_<h&&!v;let E=C?_:c.activeIndex;typeof r>"u"?r=c.getSlideIndex(d.find(G=>G.classList.contains(b.slideActiveClass))):E=r;const x=n==="next"||!n,L=n==="prev"||!n;let P=0,j=0;const oe=(y?d[r].column:r)+(v&&typeof a>"u"?-h/2+.5:0);if(oe<g){P=Math.max(g-oe,m);for(let G=0;G<g-oe;G+=1){const H=G-Math.floor(G/O)*O;if(y){const $=O-H-1;for(let te=d.length-1;te>=0;te-=1)d[te].column===$&&T.push(te)}else T.push(O-H-1)}}else if(oe+h>O-g){j=Math.max(oe-(O-g*2),m),C&&(j=Math.max(j,h-O+_+1));for(let G=0;G<j;G+=1){const H=G-Math.floor(G/O)*O;y?d.forEach(($,te)=>{$.column===H&&A.push(te)}):A.push(H)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&d.length<h+g*2&&(A.includes(r)&&A.splice(A.indexOf(r),1),T.includes(r)&&T.splice(T.indexOf(r),1)),L&&T.forEach(G=>{d[G].swiperLoopMoveDOM=!0,f.prepend(d[G]),d[G].swiperLoopMoveDOM=!1}),x&&A.forEach(G=>{d[G].swiperLoopMoveDOM=!0,f.append(d[G]),d[G].swiperLoopMoveDOM=!1}),c.recalcSlides(),b.slidesPerView==="auto"?c.updateSlides():y&&(T.length>0&&L||A.length>0&&x)&&c.slides.forEach((G,H)=>{c.grid.updateSlide(H,G,c.slides)}),b.watchSlidesProgress&&c.updateSlidesOffset(),s){if(T.length>0&&L){if(typeof t>"u"){const G=c.slidesGrid[E],$=c.slidesGrid[E+P]-G;l?c.setTranslate(c.translate-$):(c.slideTo(E+Math.ceil(P),0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-$,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-$))}else if(a){const G=y?T.length/b.grid.rows:T.length;c.slideTo(c.activeIndex+G,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(A.length>0&&x)if(typeof t>"u"){const G=c.slidesGrid[E],$=c.slidesGrid[E-j]-G;l?c.setTranslate(c.translate-$):(c.slideTo(E-j,0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-$,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-$))}else{const G=y?A.length/b.grid.rows:A.length;c.slideTo(c.activeIndex-G,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=p,c.controller&&c.controller.control&&!i){const G={slideRealIndex:t,direction:n,setTranslate:a,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(H=>{!H.destroyed&&H.params.loop&&H.loopFix({...G,slideTo:H.params.slidesPerView===b.slidesPerView?s:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...G,slideTo:c.controller.control.params.slidesPerView===b.slidesPerView?s:!1})}c.emit("loopFix")}function Qf(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const n=[];e.slides.forEach(a=>{const r=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;n[r]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),n.forEach(a=>{s.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Zf={loopCreate:Jf,loopFix:Xf,loopDestroy:Qf};function eh(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function th(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var sh={setGrabCursor:eh,unsetGrabCursor:th};function nh(e,t){t===void 0&&(t=this);function s(n){if(!n||n===bt()||n===$e())return null;n.assignedSlot&&(n=n.assignedSlot);const a=n.closest(e);return!a&&!n.getRootNode?null:a||s(n.getRootNode().host)}return s(t)}function Ao(e,t,s){const n=$e(),{params:a}=e,r=a.edgeSwipeDetection,o=a.edgeSwipeThreshold;return r&&(s<=o||s>=n.innerWidth-o)?r==="prevent"?(t.preventDefault(),!0):!1:!0}function ah(e){const t=this,s=bt();let n=e;n.originalEvent&&(n=n.originalEvent);const a=t.touchEventsData;if(n.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==n.pointerId)return;a.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(a.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){Ao(t,n,n.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:i}=t;if(!i||!r.simulateTouch&&n.pointerType==="mouse"||t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=n.target;if(r.touchEventsTarget==="wrapper"&&!uf(l,t.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||a.isTouched&&a.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&d&&(l=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(p?nh(u,l):l.closest(u))){t.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;o.currentX=n.pageX,o.currentY=n.pageY;const f=o.currentX,b=o.currentY;if(!Ao(t,n,f))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=b,a.touchStartTime=wn(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1);let v=!0;l.matches(a.focusableElements)&&(v=!1,l.nodeName==="SELECT"&&(a.isTouched=!1)),s.activeElement&&s.activeElement.matches(a.focusableElements)&&s.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(a.focusableElements))&&s.activeElement.blur();const _=v&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||_)&&!l.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",n)}function rh(e){const t=bt(),s=this,n=s.touchEventsData,{params:a,touches:r,rtlTranslate:o,enabled:i}=s;if(!i||!a.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(T=>T.identifier===n.touchId),!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&s.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!s.allowTouchMove){l.target.matches(n.focusableElements)||(s.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),n.touchStartTime=wn());return}if(a.touchReleaseOnEdges&&!a.loop)if(s.isVertical()){if(u<r.startY&&s.translate<=s.maxTranslate()||u>r.startY&&s.translate>=s.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(o&&(d>r.startX&&-s.translate<=s.maxTranslate()||d<r.startX&&-s.translate>=s.minTranslate()))return;if(!o&&(d<r.startX&&s.translate<=s.maxTranslate()||d>r.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,s.allowClick=!1;return}n.allowTouchCallbacks&&s.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(p**2+f**2)<s.params.threshold)return;if(typeof n.isScrolling>"u"){let T;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:p*p+f*f>=25&&(T=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,n.isScrolling=s.isHorizontal()?T>a.touchAngle:90-T>a.touchAngle)}if(n.isScrolling&&s.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;s.allowClick=!1,!a.cssMode&&l.cancelable&&l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation();let b=s.isHorizontal()?p:f,v=s.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;a.oneWayMovement&&(b=Math.abs(b)*(o?1:-1),v=Math.abs(v)*(o?1:-1)),r.diff=b,b*=a.touchRatio,o&&(b=-b,v=-v);const _=s.touchesDirection;s.swipeDirection=b>0?"prev":"next",s.touchesDirection=v>0?"prev":"next";const h=s.params.loop&&!a.cssMode,m=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!n.isMoved){if(h&&m&&s.loopFix({direction:s.swipeDirection}),n.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const T=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(T)}n.allowMomentumBounce=!1,a.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",l)}if(new Date().getTime(),a._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&_!==s.touchesDirection&&h&&m&&Math.abs(b)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}s.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=b+n.startTranslate;let g=!0,y=a.resistanceRatio;if(a.touchReleaseOnEdges&&(y=0),b>0?(h&&m&&n.allowThresholdMove&&n.currentTranslate>(a.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>s.minTranslate()&&(g=!1,a.resistance&&(n.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+n.startTranslate+b)**y))):b<0&&(h&&m&&n.allowThresholdMove&&n.currentTranslate<(a.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(a.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),n.currentTranslate<s.maxTranslate()&&(g=!1,a.resistance&&(n.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-n.startTranslate-b)**y))),g&&(l.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(n.currentTranslate=n.startTranslate),a.threshold>0)if(Math.abs(b)>a.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&s.freeMode||a.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(n.currentTranslate),s.setTranslate(n.currentTranslate))}function oh(e){const t=this,s=t.touchEventsData;let n=e;n.originalEvent&&(n=n.originalEvent);let a;if(n.type==="touchend"||n.type==="touchcancel"){if(a=[...n.changedTouches].find(T=>T.identifier===s.touchId),!a||a.identifier!==s.touchId)return}else{if(s.touchId!==null||n.pointerId!==s.pointerId)return;a=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&n.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",n),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=wn(),p=u-s.touchStartTime;if(t.allowClick){const T=n.path||n.composedPath&&n.composedPath();t.updateClickedSlide(T&&T[0]||n.target,T),t.emit("tap click",n),p<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",n)}if(s.lastClickTime=wn(),bl(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||i.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let f;if(o.followFinger?f=l?t.translate:-t.translate:f=-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const b=f>=-t.maxTranslate()&&!t.params.loop;let v=0,_=t.slidesSizesGrid[0];for(let T=0;T<c.length;T+=T<o.slidesPerGroupSkip?1:o.slidesPerGroup){const A=T<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[T+A]<"u"?(b||f>=c[T]&&f<c[T+A])&&(v=T,_=c[T+A]-c[T]):(b||f>=c[T])&&(v=T,_=c[c.length-1]-c[c.length-2])}let h=null,m=null;o.rewind&&(t.isBeginning?m=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const g=(f-c[v])/_,y=v<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(g>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?h:v+y):t.slideTo(v)),t.swipeDirection==="prev"&&(g>1-o.longSwipesRatio?t.slideTo(v+y):m!==null&&g<0&&Math.abs(g)>o.longSwipesRatio?t.slideTo(m):t.slideTo(v))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(n.target===t.navigation.nextEl||n.target===t.navigation.prevEl)?n.target===t.navigation.nextEl?t.slideTo(v+y):t.slideTo(v):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:v+y),t.swipeDirection==="prev"&&t.slideTo(m!==null?m:v))}}function Po(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:a,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=n,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function ih(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function lh(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:n}=e;if(!n)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let a;const r=e.maxTranslate()-e.minTranslate();r===0?a=0:a=(e.translate-e.minTranslate())/r,a!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ch(e){const t=this;pn(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function dh(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const wl=(e,t)=>{const s=bt(),{params:n,el:a,wrapperEl:r,device:o}=e,i=!!n.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!a||typeof a=="string"||(s[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),a[l]("touchstart",e.onTouchStart,{passive:!1}),a[l]("pointerdown",e.onTouchStart,{passive:!1}),s[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),s[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),s[l]("touchend",e.onTouchEnd,{passive:!0}),s[l]("pointerup",e.onTouchEnd,{passive:!0}),s[l]("pointercancel",e.onTouchEnd,{passive:!0}),s[l]("touchcancel",e.onTouchEnd,{passive:!0}),s[l]("pointerout",e.onTouchEnd,{passive:!0}),s[l]("pointerleave",e.onTouchEnd,{passive:!0}),s[l]("contextmenu",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&a[l]("click",e.onClick,!0),n.cssMode&&r[l]("scroll",e.onScroll),n.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Po,!0):e[c]("observerUpdate",Po,!0),a[l]("load",e.onLoad,{capture:!0}))};function uh(){const e=this,{params:t}=e;e.onTouchStart=ah.bind(e),e.onTouchMove=rh.bind(e),e.onTouchEnd=oh.bind(e),e.onDocumentTouchStart=dh.bind(e),t.cssMode&&(e.onScroll=lh.bind(e)),e.onClick=ih.bind(e),e.onLoad=ch.bind(e),wl(e,"on")}function ph(){wl(this,"off")}var fh={attachEvents:uh,detachEvents:ph};const Oo=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function hh(){const e=this,{realIndex:t,initialized:s,params:n,el:a}=e,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=bt(),i=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",l=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?e.el:o.querySelector(n.breakpointsBase),c=e.getBreakpoint(r,i,l);if(!c||e.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||e.originalParams,p=Oo(e,n),f=Oo(e,u),b=e.params.grabCursor,v=u.grabCursor,_=n.enabled;p&&!f?(a.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(a.classList.add(`${n.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&n.grid.fill==="column")&&a.classList.add(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!v?e.unsetGrabCursor():!b&&v&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(A=>{if(typeof u[A]>"u")return;const O=n[A]&&n[A].enabled,C=u[A]&&u[A].enabled;O&&!C&&e[A].disable(),!O&&C&&e[A].enable()});const h=u.direction&&u.direction!==n.direction,m=n.loop&&(u.slidesPerView!==n.slidesPerView||h),g=n.loop;h&&s&&e.changeDirection(),Ke(e.params,u);const y=e.params.enabled,T=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),_&&!y?e.disable():!_&&y&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),s&&(m?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!g&&T?(e.loopCreate(t),e.updateSlides()):g&&!T&&e.loopDestroy()),e.emit("breakpoint",u)}function mh(e,t,s){if(t===void 0&&(t="window"),!e||t==="container"&&!s)return;let n=!1;const a=$e(),r=t==="window"?a.innerHeight:s.clientHeight,o=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:r*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];t==="window"?a.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=s.clientWidth&&(n=l)}return n||"max"}var gh={setBreakpoint:hh,getBreakpoint:mh};function bh(e,t){const s=[];return e.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(a=>{n[a]&&s.push(t+a)}):typeof n=="string"&&s.push(t+n)}),s}function _h(){const e=this,{classNames:t,params:s,rtl:n,el:a,device:r}=e,o=bh(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:n},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...o),a.classList.add(...t),e.emitContainerClasses()}function yh(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var vh={addClasses:_h,removeClasses:yh};function Th(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:n}=s;if(n){const a=e.slides.length-1,r=e.slidesGrid[a]+e.slidesSizesGrid[a]+n*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Sh={checkOverflow:Th},ko={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function wh(e,t){return function(n){n===void 0&&(n={});const a=Object.keys(n)[0],r=n[a];if(typeof r!="object"||r===null){Ke(t,n);return}if(e[a]===!0&&(e[a]={enabled:!0}),a==="navigation"&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),!(a in e&&"enabled"in r)){Ke(t,n);return}typeof e[a]=="object"&&!("enabled"in e[a])&&(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),Ke(t,n)}}const ma={eventsEmitter:vf,update:Rf,translate:Bf,transition:Hf,slide:Vf,loop:Zf,grabCursor:sh,events:fh,breakpoints:gh,checkOverflow:Sh,classes:vh},ga={};class Ze{constructor(){let t,s;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?s=a[0]:[t,s]=a,s||(s={}),s=Ke({},s),t&&!s.el&&(s.el=t);const o=bt();if(s.el&&typeof s.el=="string"&&o.querySelectorAll(s.el).length>1){const d=[];return o.querySelectorAll(s.el).forEach(u=>{const p=Ke({},s,{el:u});d.push(new Ze(p))}),d}const i=this;i.__swiper__=!0,i.support=yl(),i.device=vl({userAgent:s.userAgent}),i.browser=Tl(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],s.modules&&Array.isArray(s.modules)&&i.modules.push(...s.modules);const l={};i.modules.forEach(d=>{d({params:s,swiper:i,extendParams:wh(s,l),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const c=Ke({},ko,l);return i.params=Ke({},c,ga,s),i.originalParams=Ke({},i.params),i.passedParams=Ke({},s),i.params&&i.params.on&&Object.keys(i.params.on).forEach(d=>{i.on(d,i.params.on[d])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:n}=this,a=Rt(s,`.${n.slideClass}, swiper-slide`),r=wo(a[0]);return wo(t)-r}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:n}=t;t.slides=Rt(s,`.${n.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const n=this;t=Math.min(Math.max(t,0),1);const a=n.minTranslate(),o=(n.maxTranslate()-a)*t+a;n.translateTo(o,typeof s>"u"?0:s),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(n=>{const a=t.getSlideClasses(n);s.push({slideEl:n,classNames:a}),t.emit("_slideClass",n,a)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t,s){t===void 0&&(t="current"),s===void 0&&(s=!1);const n=this,{params:a,slides:r,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=n;let d=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let f=c+1;f<r.length;f+=1)r[f]&&!p&&(u+=Math.ceil(r[f].swiperSlideSize),d+=1,u>l&&(p=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!p&&(u+=r[f].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<r.length;u+=1)(s?o[u]+i[u]-o[c]<l:o[u]-o[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:n}=t;n.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&pn(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function a(){const o=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)a(),n.autoHeight&&t.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&t.isEnd&&!n.centeredSlides){const o=t.virtual&&n.virtual.enabled?t.virtual.slides:t.slides;r=t.slideTo(o.length-1,0,!1,!0)}else r=t.slideTo(t.activeIndex,0,!1,!0);r||a()}n.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s){s===void 0&&(s=!0);const n=this,a=n.params.direction;return t||(t=a==="horizontal"?"vertical":"horizontal"),t===a||t!=="horizontal"&&t!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${a}`),n.el.classList.add(`${n.params.containerModifierClass}${t}`),n.emitContainerClasses(),n.params.direction=t,n.slides.forEach(r=>{t==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),s&&n.update()),n}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let n=t||s.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=s,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const a=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(a()):Rt(n,a())[0];return!o&&s.params.createElements&&(o=Na("div",s.params.wrapperClass),n.append(o),Rt(n,`.${s.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(s,{el:n,wrapperEl:o,slidesEl:s.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:s.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||zt(n,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||zt(n,"direction")==="rtl"),wrongRTL:zt(o,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const a=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&a.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(r=>{r.complete?pn(s,r):r.addEventListener("load",o=>{pn(s,o.target)})}),Ba(s),s.initialized=!0,Ba(s),s.emit("init"),s.emit("afterInit"),s}destroy(t,s){t===void 0&&(t=!0),s===void 0&&(s=!0);const n=this,{params:a,el:r,wrapperEl:o,slides:i}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),a.loop&&n.loopDestroy(),s&&(n.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),t!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),rf(n)),n.destroyed=!0),null}static extendDefaults(t){Ke(ga,t)}static get extendedDefaults(){return ga}static get defaults(){return ko}static installModule(t){Ze.prototype.__modules__||(Ze.prototype.__modules__=[]);const s=Ze.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>Ze.installModule(s)),Ze):(Ze.installModule(t),Ze)}}Object.keys(ma).forEach(e=>{Object.keys(ma[e]).forEach(t=>{Ze.prototype[t]=ma[e][t]})});Ze.use([_f,yf]);function Eh(e){let{swiper:t,extendParams:s,on:n,emit:a,params:r}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,i,l=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,d,u=new Date().getTime(),p,f,b,v,_,h,m;function g($){!t||t.destroyed||!t.wrapperEl||$.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",g),!(m||$.detail&&$.detail.bySwiperTouchMove)&&x())}const y=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(c=d,p=!1);const $=t.autoplay.paused?d:u+c-new Date().getTime();t.autoplay.timeLeft=$,a("autoplayTimeLeft",$,$/l),i=requestAnimationFrame(()=>{y()})},T=()=>{let $;return t.virtual&&t.params.virtual.enabled?$=t.slides.find(ne=>ne.classList.contains("swiper-slide-active")):$=t.slides[t.activeIndex],$?parseInt($.getAttribute("data-swiper-autoplay"),10):void 0},A=$=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(i),y();let te=typeof $>"u"?t.params.autoplay.delay:$;l=t.params.autoplay.delay,c=t.params.autoplay.delay;const ne=T();!Number.isNaN(ne)&&ne>0&&typeof $>"u"&&(te=ne,l=ne,c=ne),d=te;const ie=t.params.speed,le=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(ie,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,ie,!0,!0),a("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(ie,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,ie,!0,!0),a("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return te>0?(clearTimeout(o),o=setTimeout(()=>{le()},te)):requestAnimationFrame(()=>{le()}),te},O=()=>{u=new Date().getTime(),t.autoplay.running=!0,A(),a("autoplayStart")},C=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(i),a("autoplayStop")},E=($,te)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),$||(h=!0);const ne=()=>{a("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",g):x()};if(t.autoplay.paused=!0,te){_&&(d=t.params.autoplay.delay),_=!1,ne();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),ne())},x=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),h?(h=!1,A(d)):A(),t.autoplay.paused=!1,a("autoplayResume"))},L=()=>{if(t.destroyed||!t.autoplay.running)return;const $=bt();$.visibilityState==="hidden"&&(h=!0,E(!0)),$.visibilityState==="visible"&&x()},P=$=>{$.pointerType==="mouse"&&(h=!0,m=!0,!(t.animating||t.autoplay.paused)&&E(!0))},j=$=>{$.pointerType==="mouse"&&(m=!1,t.autoplay.paused&&x())},Q=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",P),t.el.addEventListener("pointerleave",j))},oe=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",P),t.el.removeEventListener("pointerleave",j))},G=()=>{bt().addEventListener("visibilitychange",L)},H=()=>{bt().removeEventListener("visibilitychange",L)};n("init",()=>{t.params.autoplay.enabled&&(Q(),G(),O())}),n("destroy",()=>{oe(),H(),t.autoplay.running&&C()}),n("_freeModeStaticRelease",()=>{(b||h)&&x()}),n("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?C():E(!0,!0)}),n("beforeTransitionStart",($,te,ne)=>{t.destroyed||!t.autoplay.running||(ne||!t.params.autoplay.disableOnInteraction?E(!0,!0):C())}),n("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){C();return}f=!0,b=!1,h=!1,v=setTimeout(()=>{h=!0,b=!0,E(!0)},200)}}),n("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!f)){if(clearTimeout(v),clearTimeout(o),t.params.autoplay.disableOnInteraction){b=!1,f=!1;return}b&&t.params.cssMode&&x(),b=!1,f=!1}}),n("slideChange",()=>{t.destroyed||!t.autoplay.running||(_=!0)}),Object.assign(t.autoplay,{start:O,stop:C,pause:E,resume:x})}const xh={class:"home-layout"},Ah=["data-user-name"],Ph={__name:"home_route",setup(e){const t=vt(),s=me();window.CoreBetSlip=ml;const n=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__select"),u=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u}),l&&c&&d&&u){const p=window.matchMedia("(orientation: portrait)").matches,f=window.matchMedia("(max-width: 768px)").matches;(p||f)&&(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),l.addEventListener("click",b=>{console.log("[Bet Grid Toggle] Button clicked!"),b.preventDefault(),b.stopPropagation(),u.classList.contains("collapsed")?(d.classList.add("collapsed"),u.classList.remove("collapsed"),c.textContent="Close Bet Slip"):(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:d.classList.contains("collapsed"),slipCollapsed:u.classList.contains("collapsed"),buttonText:c.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u})};document.addEventListener("click",l=>{const c=l.target;if(c&&c.dataset?.promotionTopic){const d={timestamp:Date.now(),heroImg:c.dataset.promotionHeroImg||"",caption:c.dataset.promotionCaption||"",tagline:c.dataset.promotionTagline||"",toast:c.dataset.promotionToast||"",topic:c.dataset.promotionTopic||"",topicToken:c.dataset.promotionTopicToken||"",marquee:c.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",d),V.publish(s.hierTopics.PROMOTION__CLICK,JSON.stringify(d))}c&&c.dataset?.publishRouteHome&&(c.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(u=>{u===c?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),V.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),c&&c.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(l,c=!1)=>{const d=document.querySelector(".tournaments-grid");if(!d)return;d.innerHTML="";const u=document.getElementById("app"),p=u?.getAttribute("data-sync-theme")||"dark",f=u?.getAttribute("data-sync-lang")||"en",b=u?.getAttribute("data-sync-motif")||"brand",v=_=>{const h=document.createElement("article"),m=_.status||"DRAFT";h.className=`tournament-item tournament-status-${m.toLowerCase()}`;const g=document.createElement("bma-tournament-card");return g.setAttribute("data-bma-tourn-id",_.id||""),g.setAttribute("data-bma-tourn-guid",_.guid||""),g.setAttribute("data-bma-tourn-caption",_.caption||""),g.setAttribute("data-bma-tourn-tagline",_.tagline||""),g.setAttribute("data-bma-tourn-window_start_time",_.window_start_time||""),g.setAttribute("data-bma-tourn-window_end_time",_.window_end_time||""),g.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(_.sports_allowed)?JSON.stringify(_.sports_allowed):_.sports_allowed||""),g.setAttribute("data-bma-tourn-entities",_.entities?JSON.stringify(_.entities):""),g.setAttribute("data-bma-tourn-tournament_dollars",_.tournament_dollars||""),g.setAttribute("data-bma-tourn-prize_distro",Array.isArray(_.prize_distro)?JSON.stringify(_.prize_distro):_.prize_distro||""),g.setAttribute("data-bma-tourn-matches",Array.isArray(_.matches_guids)?JSON.stringify(_.matches_guids):_.matches_guids||""),g.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(_.matches_expanded)?JSON.stringify(_.matches_expanded):_.matches_expanded||""),g.setAttribute("data-bma-tourn-entry_fee",_.entry_fee||""),g.setAttribute("data-bma-tourn-rake",_.rake||""),g.setAttribute("data-bma-tourn-tags",Array.isArray(_.tags)?JSON.stringify(_.tags):_.tags||""),g.setAttribute("data-bma-tourn-comments",_.comments||""),g.setAttribute("data-bma-tourn-class",_.status||""),g.setAttribute("data-bma-tourn-status",_.status||""),g.setAttribute("data-sync-theme",p),g.setAttribute("data-sync-lang",f),g.setAttribute("data-sync-motif",b),g.setAttribute("data-n55-size","medium"),g.setAttribute("data-n55-enchanted-cta-ambient","none"),g.setAttribute("data-tourn-custom-css",""),g.setAttribute("data-tourn-trophy","0"),g.setAttribute("data-bma-tourn-focus",""),g.setAttribute("data-bma-tourn-wait","false"),h.appendChild(g),h};c?l.forEach(_=>{const h=document.createElement("div");h.className="tournament-category";const m=document.createElement("header");m.className="tournament-category-header";const g=document.createElement("h2");if(g.className="category-title",g.textContent=_.title,m.appendChild(g),_.subtext){const y=document.createElement("p");y.className="category-subtext",y.textContent=_.subtext,m.appendChild(y)}h.appendChild(m),d.appendChild(h),_.tournaments.forEach(y=>{const T=v(y);d.appendChild(T)})}):l.forEach(_=>{const h=v(_);d.appendChild(h)})},r=l=>{document.querySelectorAll("bma-tournament-card").forEach(d=>{d.setAttribute("data-sync-theme",l)})},o=l=>{const c=document.querySelectorAll("bma-tournament-card"),d=Date.now().toString();c.forEach(u=>{if(u===l){if(u.setAttribute("data-bma-tourn-focus",d),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},i=l=>{const{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}=l.detail;console.log("[home_route] Tournament action:",{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}),o(l.target),V.publish("WC.TOURN_ACTION",JSON.stringify({action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f,timestamp:Date.now()}))};return Nt(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const l=document.getElementById("app");if(l){const u=s.appCLIFeatures.features.theme?.state,p=s.appCLIFeatures.features.lang?.state,f=s.appCLIFeatures.features.motif?.state,b=s.appSession.session_user.guid;u&&(l.setAttribute("data-sync-theme",u),document.body.setAttribute("data-sync-theme",u)),p&&l.setAttribute("data-sync-lang",p),f&&l.setAttribute("data-sync-motif",f),b&&l.setAttribute("data-user-guid",b)}window._homeRouteRenderCards=a,window.initBetGridToggle=n;const c=V.subscribe("APP.ROUTE_SYNC",(u,p)=>{try{const f=JSON.parse(p);f.theme&&r(f.theme.state)}catch(f){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",f)}});window._homeRoutePubSubToken=c,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),V.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i);const d=new Ze(".featured-swiper",{modules:[Eh],slidesPerView:1,spaceBetween:16,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:3,spaceBetween:20},1280:{slidesPerView:4,spaceBetween:24}}});window.featuredSwiper=d,V.publish(s.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Dn(()=>{document.removeEventListener("bma-tournament-action",i),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&V.unsubscribe(window._homeRoutePubSubToken)}),(l,c)=>(st(),yt("main",xh,[M("bma-app-head-top",{"data-user-name":Kt(s).appSession.session_user.name||"Guest"},null,8,Ah),c[0]||(c[0]=Qt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div></div></section><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',5))]))}},Oh={};function kh(e,t){return st(),yt("main",null,[...t[0]||(t[0]=[M("h1",null,"App FAQ",-1)])])}const rn=Zt(Oh,[["render",kh]]),Ch={};function Rh(e,t){return st(),yt("main",null,[...t[0]||(t[0]=[M("h1",null,"App Help",-1)])])}const Lh=Zt(Ch,[["render",Rh]]),xt=class xt{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,s,n,a=!0){this.strChat=n,this.isDebug=a;const r=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${r}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(i){xt.onSSEOpen(i)},this.sseEvent.onmessage=function(i){xt.onSSEMessage(i)},this.sseEvent.onerror=function(i){xt.onSSEError(i)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),V.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};xt.sseEvent=null,xt.strChat=null,xt.isDebug=!0,xt.sessionId=null;let xn=xt;class It{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,n){return new Promise((a,r)=>{const o=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:n});o.onload=a,o.onerror=r,s.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(s,n,a){const r=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:n});a&&(r.onload=function(){a()}),s.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(s,n){let a=s.createElement("link");a.rel="stylesheet",a.href=n,s.getElementsByTagName("head")[0].appendChild(a)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let n=s.split(""),a=[],r=!1;return n.forEach(o=>{o=="-"?r=!0:(a.push(r?o.toUpperCase():o),r=!1)}),a.join("")},doDataLayer:function(s,n){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+n),window.dataLayer&&window.dataLayer.push({event:s,msg:n})},isJSON:function(s){let n=!1;try{n=typeof JSON.parse(s)}catch{}return n=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",a=>{a?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(a.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(a?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let n=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;n&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=n)},prettyTimeRETIRE:s=>{let n=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(n=""),n},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((n,a)=>(n<<5)-n+a.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,n=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},n))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let n=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const a=56;n.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=s},i*a),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(a+a)))}),n=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;n.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=s},i*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*r+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,n,a=neodigmOpt.neodigmMetronome.countTo){const r=[16,a];return[...document.querySelectorAll(s)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-n);neodigmMetronome.unsubscribe(r[1]+i).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&n!=d){let u=l/r[0];u=Math.round(u),c!=0?o.textContent=d<n?d+u:d-u:o.textContent=n}},r[1]+i,r[0])}),neodigmUtils},typeOff:async function(s){let n=document.querySelector(s?.q1st);if(n){let a=n.textContent.length,r=window.getComputedStyle(n),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(n.offsetHeight&&(n.style.height=n.offsetHeight-o+"px");a;)setTimeout(()=>{n.textContent=n.textContent.replace(/.$/,"")},s.uniqueDelay*a--)}},typeOn:async function(s){let n=document.querySelector(s?.q1st);if(n){n.dataset.n55Typeon=0;let a=s.msg.replaceAll("|","   |   ")+"   ",r=a.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&r.length){let o=n.dataset.n55Typeon=neodigmUtils.f02x(r.length);a=r[o]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/n.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(o=>{let i=a[a.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/n.textContent.length-4}),n.dataset.n55Typeon++),n.textContent+=i,s?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,a.length)}return neodigmUtils},getValJSON:function(s,n){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+n+'": "'+s+'" }')}},walkDOM3:function(s,n,a=!1){let r=null;if(!r&&s?.dataset[n]&&(r=s),!r&&s?.parentNode?.dataset[n]&&(r=s.parentNode),!r&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[n]&&(r=s.parentNode.parentNode),r)return a?r:r.dataset[n]},doSetT:function(s,n){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,n):setTimeout(s,n)},shake:function(s,n=!0){return[...document.querySelectorAll(s)].forEach(function(a,r){a.classList.add("shake__an"),setTimeout(function(){a.classList.remove("shake__an")},460)}),It.neodigmUtils},hardReload:function(s="n55reset"){const n=new URLSearchParams(window.location.search);n.set(s,new Date().getTime());const a=n.toString();window.location.search=a}}))}const Mh={class:"auth-page"},Ih={class:"auth-page-right"},Dh={class:"auth-card"},Nh={class:"form-group"},Bh={class:"form-group"},Fh={class:"password-input-wrapper"},$h=["type"],Uh={style:{"text-align":"right"}},Hh={class:"auth-link-center"},Gh={__name:"signin_route",setup(e){const t=vt(),s=me(),n=(p="signin")=>{t.push({name:p})};let a=null;const r=Xe(!1),o=()=>{r.value=!r.value},i=(p=3,f=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const b=Math.floor(Math.random()*p)+f,v=document.querySelector(".img__bg")?.classList;v&&(v.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),v.add(`img__bg--${b}`)),a||(a=V.subscribe("APP__ROUTE_SYNC",(_,h)=>{const m=JSON.parse(h);switch(Object.keys(m)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(v=>v.code==f)[0]?.copy;b=b.filter(v=>v[0]==p.dataset.syncMicrocopyText)[0],b&&(p.textContent=b[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(v=>v.code==f)[0]?.copy;b=b.filter(v=>v[0]==p.dataset.syncMicrocopyPlaceholder)[0],b&&(p.placeholder=b[1])})},c=p=>{It.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let b=null,v=null;if(!p?.value)b="Please enter your email",v="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)b="Please enter a valid email address",v="#inp__text--email";else if(!f?.value)b="Please enter your password",v="#inp__text--password";else if(f.value.length<10)b="Password must be at least 10 characters",v="#inp__text--password";else{const _={email:p.value,hash:It.neodigmUtils().genHash(f.value)};Se.doSignin(_,h=>{const y=(h?.entity?.tags||[]).find(T=>T.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=_.email,s.appSession.session_user.fname=h?.entity?.first,s.appSession.session_user.lname=h?.entity?.last,s.appSession.session_user.userName=y,s.appSession.session_user.name=y,s.appSession.session_user.guid=h?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const T=h?.entity?.guid||s.appSession.session_user.guid;xn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",T,s,!0)}})}b&&(c(v),neodigmToast.q(b,"danger"))};return Nt(()=>{i(),l()}),(p,f)=>(st(),yt("div",Mh,[f[10]||(f[10]=Qt('<div class="auth-page-left" data-v-bdc22b93><div class="auth-bg" data-v-bdc22b93><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div></div><div class="auth-overlay" data-v-bdc22b93></div><div class="auth-branding-content" data-v-bdc22b93><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-bdc22b93><p class="auth-branding-tagline" data-v-bdc22b93>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-bdc22b93>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-bdc22b93> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",Ih,[M("div",Dh,[f[9]||(f[9]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),M("form",{class:"auth-form",onSubmit:Un(u,["prevent"])},[M("div",Nh,[f[4]||(f[4]=M("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),M("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=b=>d())},null,32)]),M("div",Bh,[f[5]||(f[5]=M("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),M("div",Fh,[M("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,$h),M("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=b=>o()),tabindex:"-1"},[M("span",{class:Wt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),M("div",Uh,[M("a",{class:"auth-link",onClick:f[2]||(f[2]=b=>n("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=M("div",{class:"auth-actions"},[M("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),M("p",Hh,[f[6]||(f[6]=M("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Fn()),M("a",{class:"auth-link",onClick:f[3]||(f[3]=b=>n("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Yh=Zt(Gh,[["__scopeId","data-v-bdc22b93"]]),zh={class:"auth-page"},jh={__name:"signout_route",setup(e){const t=vt();me();const s=()=>{mvvLegit.doSignout()},n=()=>{t.push({name:"home_route"})};return(a,r)=>(st(),yt("div",zh,[r[1]||(r[1]=Qt('<div class="auth-page-left" data-v-119b5d43><div class="auth-bg" data-v-119b5d43><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div></div><div class="auth-overlay" data-v-119b5d43></div><div class="auth-branding-content" data-v-119b5d43><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-119b5d43><p class="auth-branding-tagline" data-v-119b5d43>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-119b5d43>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-119b5d43> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",{class:"auth-page-right"},[M("div",{class:"auth-card"},[r[0]||(r[0]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title"},"Sign Out"),M("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),M("div",{class:"auth-actions"},[M("button",{onClick:s,class:"btn btn-red"}," Sign Out "),M("button",{onClick:n,class:"btn btn-outline"}," Cancel ")])])])]))}},Kh=Zt(jh,[["__scopeId","data-v-119b5d43"]]),qh={class:"auth-page"},Wh={class:"auth-page-right",style:{display:"block"}},Vh={class:"auth-card auth-card-wide"},Jh={class:"form-group"},Xh={class:"form-group"},Qh={class:"form-group"},Zh={class:"form-group"},em={class:"form-group"},tm={class:"password-input-wrapper"},sm=["type"],nm={class:"form-group"},am={class:"password-input-wrapper"},rm=["type"],om={class:"form-group form-group-checkbox"},im={class:"checkbox-label"},lm={class:"auth-link-center"},cm={__name:"signup_route",setup(e){const t=vt(),s=me(),n=(g="signin")=>{t.push({name:g})};let a=null,r=null;const o=Xe(!1),i=Xe(!1),l=Xe(!1),c=()=>{o.value=!o.value},d=()=>{i.value=!i.value},u=g=>{g.preventDefault(),V.publish(s.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(g=3,y=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":g=3,y=1;break;case"white_label":g=3,y=4;break}const T=Math.floor(Math.random()*g)+y,A=document.querySelector(".img__bg")?.classList;A&&(A.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),A.add(`img__bg--${T}`)),a||(a=V.subscribe("APP__ROUTE_SYNC",(O,C)=>{const E=JSON.parse(C);switch(Object.keys(E)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const y=s.appCLIFeatures?.features?.lang?.state;let T=s.appMeta.microcopy.language.filter(A=>A.code==y)[0]?.copy;T=T.filter(A=>A[0]==g.dataset.syncMicrocopyText)[0],T&&(g.textContent=T[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const y=s.appCLIFeatures?.features?.lang?.state;let T=s.appMeta.microcopy.language.filter(A=>A.code==y)[0]?.copy;T=T.filter(A=>A[0]==g.dataset.syncMicrocopyPlaceholder)[0],T&&(g.placeholder=T[1])})},b=g=>{It.neodigmUtils().shake(g||"#inp__text--email")},v=()=>{let g=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(g)},_=g=>{const y=[];return g.length<10&&y.push("at least 10 characters"),/[a-z]/.test(g)||y.push("1 lowercase"),/[A-Z]/.test(g)||y.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||y.push("1 special character"),/[^\x00-\x7F]/.test(g)&&y.push("ASCII characters only"),y},h=async()=>{const g=document.querySelector("#inp__text--username"),y=g?.value?.trim();if(y)try{(await Se.checkUserName(y)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),g.value="",g.focus())}catch(T){console.error("Error checking username:",T)}},m=()=>{const g=document.querySelector("#inp__text--first-name"),y=document.querySelector("#inp__text--last-name"),T=document.querySelector("#inp__text--email"),A=document.querySelector("#inp__text--username"),O=document.querySelector("#inp__text--password"),C=document.querySelector("#inp__text--verify-password");let E=null,x=null;if(!g?.value)E="Please enter your first name",x="#inp__text--first-name";else if(!y?.value)E="Please enter your last name",x="#inp__text--last-name";else if(!T?.value)E="Please enter your email",x="#inp__text--email";else if(T.value.indexOf("@")===-1||T.value.indexOf(".")===-1)E="Please enter a valid email address",x="#inp__text--email";else if(!A?.value)E="Please enter a user name",x="#inp__text--username";else if(!O?.value)E="Please enter a password",x="#inp__text--password";else{const L=_(O.value);if(L.length>0)E="Password must have:|"+L.join(", "),x="#inp__text--password";else if(!C?.value)E="Please verify your password",x="#inp__text--verify-password";else if(O.value!==C.value)E="Passwords do not match",x="#inp__text--verify-password";else{const P=g.value.trim(),j=y.value.trim(),Q=[{userName:A.value.trim(),ts:Date.now()}],oe={email:T.value,hash:It.neodigmUtils().genHash(O.value),first:P,last:j,company:"",phone:"",tags:Q};Se.doSignup(oe,G=>{G.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}E&&(b(x),neodigmToast.q(E,"danger"))};return Nt(()=>{p(),f(),r||(r=V.subscribe(s.hierTopics.ROUTE__SIGNUP__TERMS,(g,y)=>{JSON.parse(y).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(g,y)=>(st(),yt("div",qh,[y[23]||(y[23]=Qt('<div class="auth-page-left" data-v-3a55bbf1><div class="auth-bg" data-v-3a55bbf1><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div></div><div class="auth-overlay" data-v-3a55bbf1></div><div class="auth-branding-content" data-v-3a55bbf1><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-3a55bbf1><p class="auth-branding-tagline" data-v-3a55bbf1>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3a55bbf1>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3a55bbf1> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",Wh,[M("div",Vh,[M("form",{class:"auth-form",onSubmit:Un(m,["prevent"])},[M("div",Jh,[y[12]||(y[12]=M("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),M("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:y[0]||(y[0]=Pt(T=>m(),["enter"]))},null,32)]),M("div",Xh,[y[13]||(y[13]=M("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),M("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:y[1]||(y[1]=Pt(T=>m(),["enter"]))},null,32)]),M("div",Qh,[y[14]||(y[14]=M("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),M("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:y[2]||(y[2]=T=>v()),onKeyup:y[3]||(y[3]=Pt(T=>m(),["enter"]))},null,32)]),M("div",Zh,[y[15]||(y[15]=M("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),M("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:y[4]||(y[4]=T=>h()),onKeyup:y[5]||(y[5]=Pt(T=>m(),["enter"]))},null,32)]),M("div",em,[y[16]||(y[16]=M("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),M("div",tm,[M("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:y[6]||(y[6]=Pt(T=>m(),["enter"]))},null,40,sm),M("button",{type:"button",class:"password-toggle-btn",onClick:y[7]||(y[7]=T=>c()),tabindex:"-1"},[M("span",{class:Wt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),y[17]||(y[17]=M("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),M("div",nm,[y[18]||(y[18]=M("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),M("div",am,[M("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:y[8]||(y[8]=Pt(T=>m(),["enter"]))},null,40,rm),M("button",{type:"button",class:"password-toggle-btn",onClick:y[9]||(y[9]=T=>d()),tabindex:"-1"},[M("span",{class:Wt(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),M("div",om,[M("label",im,[gc(M("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":y[10]||(y[10]=T=>l.value=T),class:"terms-checkbox"},null,512),[[Vd,l.value]]),y[19]||(y[19]=M("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),M("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),y[22]||(y[22]=M("div",{class:"auth-actions"},[M("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),M("p",lm,[y[20]||(y[20]=M("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),y[21]||(y[21]=Fn()),M("a",{class:"auth-link",onClick:y[11]||(y[11]=T=>n("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},dm=Zt(cm,[["__scopeId","data-v-3a55bbf1"]]),um={class:"auth-page"},pm={class:"auth-page-right"},fm={class:"auth-card"},hm={class:"form-group"},mm={class:"auth-link-center"},gm={__name:"forgot_route",setup(e){const t=vt(),s=me(),n=(c="signin_route")=>{t.push({name:c})};let a=null;const r=(c=3,d=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),a||(a=V.subscribe("APP__ROUTE_SYNC",(f,b)=>{const v=JSON.parse(b);switch(Object.keys(v)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},i=c=>{It.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{n("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(u),neodigmToast.q(d,"danger"))};return Nt(()=>{r(),o()}),(c,d)=>(st(),yt("div",um,[d[7]||(d[7]=Qt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",pm,[M("div",fm,[d[6]||(d[6]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),M("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),M("form",{class:"auth-form",onSubmit:Un(l,["prevent"])},[M("div",hm,[d[2]||(d[2]=M("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),M("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Pt(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=M("div",{class:"auth-actions"},[M("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),M("p",mm,[d[3]||(d[3]=M("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Fn()),M("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>n("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},bm={class:"auth-page"},_m={class:"auth-page-right"},ym={class:"auth-card"},vm={class:"form-group"},Tm={class:"password-input-wrapper"},Sm=["type"],wm={class:"form-group"},Em={class:"password-input-wrapper"},xm=["type"],Am={__name:"resethash_route",setup(e){const t=vt(),s=me(),n=()=>{t.push({name:"home_route"})};let a=null;const r=Xe(!1),o=Xe(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},c=(b=3,v=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":b=3,v=1;break;case"white_label":b=3,v=4;break}const _=Math.floor(Math.random()*b)+v,h=document.querySelector(".img__bg")?.classList;h&&(h.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),h.add(`img__bg--${_}`)),a||(a=V.subscribe("APP__ROUTE_SYNC",(m,g)=>{const y=JSON.parse(g);switch(Object.keys(y)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(b=>{const v=s.appCLIFeatures?.features?.lang?.state;let _=s.appMeta.microcopy.language.filter(h=>h.code==v)[0]?.copy;_=_.filter(h=>h[0]==b.dataset.syncMicrocopyText)[0],_&&(b.textContent=_[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(b=>{const v=s.appCLIFeatures?.features?.lang?.state;let _=s.appMeta.microcopy.language.filter(h=>h.code==v)[0]?.copy;_=_.filter(h=>h[0]==b.dataset.syncMicrocopyPlaceholder)[0],_&&(b.placeholder=_[1])})},u=b=>{It.neodigmUtils().shake(b||"#inp__text--password")},p=b=>{const v=[];return b.length<10&&v.push("at least 10 characters"),/[a-z]/.test(b)||v.push("1 lowercase"),/[A-Z]/.test(b)||v.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(b)||v.push("1 special character"),/[^\x00-\x7F]/.test(b)&&v.push("ASCII characters only"),v},f=()=>{const b=document.querySelector("#inp__text--password"),v=document.querySelector("#inp__text--verify-password");let _=null,h=null;if(!b?.value)_="Please enter a password",h="#inp__text--password";else{const m=p(b.value);if(m.length>0)_="Password must have:|"+m.join(", "),h="#inp__text--password";else if(!v?.value)_="Please verify your password",h="#inp__text--verify-password";else if(b.value!==v.value)_="Passwords do not match",h="#inp__text--verify-password";else{const g=s.appSession.session_user.email||"",y={email:g,hash:It.neodigmUtils().genHash(b.value),modified_by:g},T={method:"POST",body:JSON.stringify(y),headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/resetHash",T).then(A=>A.json()).then(A=>{A.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(A=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}_&&(u(h),neodigmToast.q(_,"danger"))};return Nt(()=>{c(),d()}),(b,v)=>(st(),yt("div",bm,[v[9]||(v[9]=Qt('<div class="auth-page-left" data-v-cef3f735><div class="auth-bg" data-v-cef3f735><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div></div><div class="auth-overlay" data-v-cef3f735></div><div class="auth-branding-content" data-v-cef3f735><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-cef3f735><p class="auth-branding-tagline" data-v-cef3f735>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-cef3f735>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-cef3f735> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",_m,[M("div",ym,[v[8]||(v[8]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),M("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),M("form",{class:"auth-form",onSubmit:Un(f,["prevent"])},[M("div",vm,[v[4]||(v[4]=M("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),M("div",Tm,[M("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:v[0]||(v[0]=Pt(_=>f(),["enter"]))},null,40,Sm),M("button",{type:"button",class:"password-toggle-btn",onClick:v[1]||(v[1]=_=>i()),tabindex:"-1"},[M("span",{class:Wt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),v[5]||(v[5]=M("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),M("div",wm,[v[6]||(v[6]=M("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),M("div",Em,[M("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:v[2]||(v[2]=Pt(_=>f(),["enter"]))},null,40,xm),M("button",{type:"button",class:"password-toggle-btn",onClick:v[3]||(v[3]=_=>l()),tabindex:"-1"},[M("span",{class:Wt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),M("div",{class:"auth-actions"},[v[7]||(v[7]=M("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),M("button",{type:"button",onClick:n,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},Pm=Zt(Am,[["__scopeId","data-v-cef3f735"]]),Om={class:"auth-page"},km={class:"auth-page-right"},Cm={class:"auth-card"},Rm={class:"verification-content"},Lm={class:"timer-display"},Mm={__name:"verf_link_route",setup(e){const t=vt();ul(),me();const s=Xe(7200);let n=null;const a=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{n=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(n),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Nt(()=>{r()}),Dn(()=>{n&&clearInterval(n)}),(o,i)=>(st(),yt("div",Om,[i[4]||(i[4]=Qt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",km,[M("div",Cm,[i[3]||(i[3]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title"},"Check Your Email"),M("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),M("div",Rm,[i[0]||(i[0]=M("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=M("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=M("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),M("div",Lm,$o(a(s.value)),1)])])])]))}},Im=Zt(Mm,[["__scopeId","data-v-f5b4a3c8"]]),Fa=bp({history:Ju(),routes:[{path:"/",name:"splash_route",component:To},{path:"/splash_route",name:"splash_route",component:To},{path:"/error_route",name:"error_route",component:rn},{path:"/forgot_route",name:"forgot_route",component:gm},{path:"/resetforgot_route",name:"resetforgot_route",component:rn},{path:"/resethash_route",name:"resethash_route",component:Pm},{path:"/signin_route",name:"signin_route",component:Yh},{path:"/signout_route",name:"signout_route",component:Kh},{path:"/signup_route",name:"signup_route",component:dm},{path:"/verf_link_route",name:"verf_link_route",component:Im},{path:"/offline_route",name:"offline_route",component:rn},{path:"/home_route",name:"home_route",component:Ph},{path:"/appFAQ",name:"appFAQ",component:rn},{path:"/appHelp",name:"appHelp",component:Lh}]}),ke={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,n=null){const a=document.querySelector("#summary-balance"),r=document.querySelector("#summary-stake"),o=document.querySelector("#summary-payout");a&&(this.updateTDBalance("#summary-balance",e),e<0?a.classList.add("summary-cell__red"):a.classList.remove("summary-cell__red")),r&&(r.textContent=t.toFixed(2)),o&&(o.textContent=s.toFixed(2),s<0?o.classList.add("summary-cell__red"):o.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),l=document.getElementById("dashboard-td-pending");if(i&&(i.textContent=`TD$ ${e.toLocaleString()}`,e<0?i.style.color="#FF5252":n&&e<n.tournament_dollars*.2?i.style.color="#FF9800":i.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)"),l&&(l.textContent=`TD$ ${t.toLocaleString()}`),n&&n.tournament_dollars){const c=n.tournament_dollars,d=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(d){const p=Math.max(e/c*100,0);d.style.width=`${p}%`}const u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(u){const p=Math.min(t/c*100,100);u.style.width=`${p}%`}}},categorizeTournaments(e,t,s,n){const a=[],r=l=>(l.entities?.guids||[]).includes(n),o=(l,c)=>(l.sports_allowed||[]).some(u=>u.key===c),i=l=>qt.find(d=>d.key===l)?.title||l;if(t==="lobby"&&s==="all"){const l=e.filter(p=>!r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"||p.status==="LOCKED"||p.class==="LOCKED"));l.length>0&&a.push({title:"Discover New Tournaments",subtext:`Join now • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const c=e.filter(p=>r(p)&&(p.status==="LOCKED"||p.class==="LOCKED"));c.length>0&&a.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=e.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));d.length>0&&a.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=e.filter(p=>p.status==="COMPLETED"||p.class==="COMPLETED").slice(0,20);u.length>0&&a.push({title:"Recently Completed",subtext:`Past competitions • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="my"){let l=e.filter(c=>r(c));if(s!=="all"){l=l.filter(f=>o(f,s));const c=i(s),d=l.filter(f=>f.status==="UPCOMING"||f.class==="UPCOMING");d.length>0&&a.push({title:`Your Upcoming ${c} Tournaments`,subtext:`Ready to start • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(f=>f.status==="LOCKED"||f.class==="LOCKED");u.length>0&&a.push({title:`Your Active ${c} Tournaments`,subtext:`Currently playing • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const p=l.filter(f=>f.status==="COMPLETED"||f.class==="COMPLETED");p.length>0&&a.push({title:`Your Completed ${c} Tournaments`,subtext:`View results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else{const c=l.filter(p=>p.status==="UPCOMING"||p.class==="UPCOMING");c.length>0&&a.push({title:"Your Upcoming Tournaments",subtext:`Ready to start • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>p.status==="LOCKED"||p.class==="LOCKED");d.length>0&&a.push({title:"Your Active Tournaments",subtext:`Currently playing • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>p.status==="COMPLETED"||p.class==="COMPLETED");u.length>0&&a.push({title:"Your Completed Tournaments",subtext:`View results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}}else if(t==="completed"&&s==="all"){const l=e.filter(d=>r(d)&&(d.status==="COMPLETED"||d.class==="COMPLETED"));l.length>0&&a.push({title:"Your Completed Tournaments",subtext:`Your results • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const c=e.filter(d=>!r(d)&&(d.status==="COMPLETED"||d.class==="COMPLETED"));c.length>0&&a.push({title:"Other Completed Tournaments",subtext:`Browse results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c})}else if(s==="multi"){const l=e.filter(c=>(c.sports_allowed?.length||0)>1);if(t==="lobby"){const c=l.filter(p=>!r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));c.length>0&&a.push({title:"Discover Multi-Sport Tournaments",subtext:`Available to join • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"||p.status==="LOCKED"||p.class==="LOCKED"));d.length>0&&a.push({title:"Your Multi-Sport Tournaments",subtext:`Active and upcoming • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);u.length>0&&a.push({title:"Your Completed Multi-Sport",subtext:`Past results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="my"){const c=l.filter(p=>r(p)&&(p.status==="LOCKED"||p.class==="LOCKED"));c.length>0&&a.push({title:"Active Multi-Sport Tournaments",subtext:`Currently playing • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));d.length>0&&a.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Ready to start • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED"));u.length>0&&a.push({title:"Completed Multi-Sport Tournaments",subtext:`View results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="completed"){const c=l.filter(u=>r(u)&&(u.status==="COMPLETED"||u.class==="COMPLETED"));c.length>0&&a.push({title:"Your Completed Multi-Sport",subtext:`Your results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(u=>!r(u)&&(u.status==="COMPLETED"||u.class==="COMPLETED"));d.length>0&&a.push({title:"Other Completed Multi-Sport",subtext:`Browse results • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d})}}else if(s!=="all"&&t!=="my"){const l=i(s),c=e.filter(p=>o(p,s));if(t==="lobby"){const p=c.filter(b=>!r(b)&&(b.status==="UPCOMING"||b.class==="UPCOMING"));p.length>0&&a.push({title:`Discover ${l} Tournaments`,subtext:`Available to join • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p});const f=c.filter(b=>r(b)&&(b.status==="UPCOMING"||b.class==="UPCOMING"||b.status==="LOCKED"||b.class==="LOCKED"));f.length>0&&a.push({title:`Your ${l} Tournaments`,subtext:`Active and upcoming • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f})}const d=c.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);d.length>0&&a.push({title:`Your Completed ${l}`,subtext:`Your past results • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=c.filter(p=>!r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);u.length>0&&a.push({title:`Other Completed ${l}`,subtext:`Browse results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else a.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return a},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=me();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let n=0,a=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const _=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(h=>h.tournament_guid===e.guid);console.log("[Dashboard Update] Found",_.length,"existing bets for this tournament"),_.forEach(h=>{(h.bet||[]).forEach(g=>{Object.keys(g).filter(T=>T!=="short_title").forEach(T=>{const A=g[T];A&&(A.stake&&(n+=parseFloat(A.stake)),A.reconciled===!0&&A.payout>0&&(a+=parseFloat(A.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const v=parseFloat(o.textContent)||0;r=Math.max(0,v-n),console.log("[Dashboard Update] Summary total stakes:",v,"Pending:",r)}const i=n+r,l=s-n-r+a;console.log("[Dashboard Update] TD$:",s,"Committed:",n,"Pending:",r,"Payouts:",a,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");c&&(c.textContent=`TD$ ${l.toLocaleString()}`,l<0?c.style.color="#FF5252":l<s*.2?c.style.color="#FF9800":c.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)");const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(d){const v=r>0?r:i;if(d.textContent=`TD$ ${v.toLocaleString()}`,u){const _=Math.min(v/s*100,100);u.style.width=`${_}%`}}const p=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(p){const v=Math.max(l/s*100,0);p.style.width=`${v}%`}const f=document.getElementById("dashboard-participants"),b=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(f){const v=e.entities?.guids?.length||0,_=e.entities?.max||100;if(f.textContent=`${v}/${_}`,b){const h=v/_*100;b.style.width=`${h}%`}}},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const s=new Date,n=[...e.matches_expanded].sort((r,o)=>{const i=new Date(r.scheduled_at),l=new Date(o.scheduled_at),c=i<s,d=l<s;return c&&!d?1:!c&&d?-1:i-l}),a=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&me().coreTourn.length>0&&(i=me().coreTourn[me().coreTourn.length-1].data.find(b=>b.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=me();V.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};n.forEach(r=>{const i=new Date(r.scheduled_at)<s;let l=!1;try{l=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",r.id),c.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),c.setAttribute("data-match-title",r.title),c.setAttribute("data-match-short-title",r.short_title||r.title),c.setAttribute("data-scheduled-at",r.scheduled_at),c.setAttribute("data-home-team",r.home_team_id||"Home"),c.setAttribute("data-away-team",r.away_team_id||"Away"),c.setAttribute("data-is-disabled",i||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);c.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(r.sport_id)c.setAttribute("data-sport-key",r.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const b=document.querySelector(".bet-grid__slip-BETSLIP-content");if(b){const v=b.querySelectorAll("bma-bet-entry");let _=!1;v.forEach(h=>{if(_)return;const m=h.getAttribute("data-content-type"),g=h.getAttribute("data-content-odds");m===u.type&&g===u.price&&(h.remove(),_=!0)}),b.children.length===0&&(b.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}f.classList.remove("btn--active"),setTimeout(()=>{a()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(_=>{_.shadowRoot.querySelectorAll(".btn--selected").forEach(h=>{h.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const b=me(),v=u.type;v==="spread"?V.publish(b.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):v==="money"?V.publish(b.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):v==="total"&&V.publish(b.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),V.publish(b.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector("[data-publish-betslip]");s&&delete s.dataset.processing;const n=document.querySelector(".bet-grid__slip-BETSLIP-content");n&&(n.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const a=me();if(a.coreTourn.length>0){const i=a.coreTourn[a.coreTourn.length-1].data.find(l=>l.guid===e);i&&ke.renderMatchCards(i)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{V.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const r=document.querySelector(".bet-grid__slip");r&&r.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(n=>{try{return JSON.parse(n.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(n=>{const a=n.getAttribute("data-match-guid"),r=n.getAttribute("data-home-team"),o=n.getAttribute("data-away-team");(n.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?r:o;t.some(b=>{if(b.coreMatches__guid!==a)return!1;const v=b.bet||[];if(v.length===0)return!1;const _=v[0],m=Object.keys(_).filter(T=>T!=="short_title")[0],y=_[m]?.type;return c==="total"?y===c:y===c&&m===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},updatePlayButton(){const e=me(),t=document.querySelector(".play-cntr"),s=t?.dataset?.currentTournGuid,n=t?.dataset?.currentTournAction||"INFO",a=document.getElementById("btn-join__play--id");if(!a||!s||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===s);if(!o)return;const i=e.appSession?.session_user?.guid,l=o.entities?.guids?.includes(i),c=o.status;a.style.display="none",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(a.style.display="",c==="UPCOMING"&&!l?n==="INFO"?(a.textContent="Join",a.dataset.requiresJoin="true"):n==="PLAY"&&(a.textContent="Play",a.dataset.requiresJoin="false"):(a.textContent="Play",a.dataset.requiresJoin="false"))},populateInfoPage(){const e=me(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const a=e.coreTourn[e.coreTourn.length-1].data.find(u=>u.guid===s);if(!a)return;const r=document.getElementById("pop-play__caro-info-summary1--id");if(!r)return;const o=u=>{if(!u)return"N/A";const p=new Date(u);return isNaN(p.getTime())?"Invalid Date":p.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},i=a.status?`info-row__value--${a.status.toLowerCase()}`:"",l=a.sports_allowed&&Array.isArray(a.sports_allowed)?a.sports_allowed.map(u=>{const p=u.key||u,f=qt.find(v=>v.key===p),b=f?f.group:"default";return`<bma-sport-icon sport="${p}" data-sport-group="${b}" style="width: 20px; height: 20px;"></bma-sport-icon>`}).join(" "):"N/A";r.innerHTML=`
            <div class="info-section">
                <div class="info-section__title">Competition</div>
                <div class="info-row">
                    <span class="info-row__label">Total Games</span>
                    <span class="info-row__value">${a.matches_expanded?.length||0}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Sports</span>
                    <span class="info-row__value">${l}</span>
                </div>
            </div>

            <div class="info-section">
                <div class="info-section__title">Tournament Schedule</div>
                <div class="info-row">
                    <span class="info-row__label">Start Time</span>
                    <span class="info-row__value">${o(a.window_start_time)}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">End Time <span style="font-size: x-small">(estimated)</span></span>
                    <span class="info-row__value">${o(a.window_end_time)}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Status</span>
                    <span class="info-row__value ${i}">${a.status||"Unknown"}</span>
                </div>
            </div>

            <div class="info-section">
                <div class="info-section__title">Participation</div>
                <div class="info-row">
                    <span class="info-row__label">Entry Fee</span>
                    <span class="info-row__value">FREE</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Tournament Dollars</span>
                    <span class="info-row__value">TD$ ${a.tournament_dollars||0}</span>
                </div>
                <div class="info-row info-row--entrants">
                    <span class="info-row__label">Entrants</span>
                    <div class="info-row__value-with-bar">
                        <span class="info-row__value">${a.entities?.guids?.length||0} / ${a.entities?.max||0}</span>
                        <div class="info-progress-bar">
                            <div class="info-progress-fill" style="width: ${((a.entities?.guids?.length||0)/(a.entities?.max||1)*100).toFixed(1)}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `;const c=document.getElementById("pop-play__caro-info-summary2--id");c&&(c.innerHTML="");const d=document.getElementById("pop-play__caro-info-list--id");d&&a.matches_expanded&&Array.isArray(a.matches_expanded)&&(d.innerHTML=`
                <div class="info-section">
                    <div class="info-section__title">Matches</div>
                </div>
            `+a.matches_expanded.map(u=>{const p=u.scoreboard_data?typeof u.scoreboard_data=="string"?u.scoreboard_data:JSON.stringify(u.scoreboard_data):"";return`
                    <bma-match-status
                        data-match-guid="${u.guid||u.odds_id||u.id||""}"
                        data-match-title="${u.short_title||u.title||"Match"}"
                        data-match-scheduled-at="${u.scheduled_at||""}"
                        data-match-home-team="${u.home_team_id||"Home"}"
                        data-match-away-team="${u.away_team_id||"Away"}"
                        data-match-home-score="${u.home_team_score!==null&&u.home_team_score!==void 0?u.home_team_score:""}"
                        data-match-away-score="${u.away_team_score!==null&&u.away_team_score!==void 0?u.away_team_score:""}"
                        data-match-scoreboard="${p.replace(/"/g,"&quot;")}"
                        data-match-sport-id="${u.sport_id||""}"
                        data-sync-theme="dark"
                    ></bma-match-status>
                `}).join(""))},async populateLeaderboard(){const e=me(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,n=e.appSession?.session_user?.guid;if(!s){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const a=document.getElementById("pop-play__caro-leaderboard--id");if(!a)return;let r=document.getElementById("leaderboard-loading-banner");r||(r=document.createElement("neodigm-juicebar"),r.id="leaderboard-loading-banner",r.setAttribute("role","progressbar"),r.setAttribute("data-n55-theme","warning"),r.setAttribute("data-n55-size","small"),r.innerHTML="<div></div>",r.style.cssText=`
                width: 100%;
                margin: 6px;
            `,a.parentNode.insertBefore(r,a)),r.style.visibility="visible";try{const o=await Se.fetchLeaderboard(s),i=o?.data||o?.rows;if(i&&i.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(b=>b.guid===s);a.innerHTML=i.map((b,v)=>{let _="";if(c?.tags&&Array.isArray(c.tags)){const g=c.tags.find(y=>!!(typeof y=="object"&&y!==null&&(y.entity_guid===b.user_guid&&y.badge&&y.badge.startsWith("--badge__ribbon--")||y[b.user_guid]&&y[b.user_guid].startsWith("--badge__ribbon--"))));if(g){const y=g.badge||g[b.user_guid];y==="--badge__ribbon--gold"?_="badge-trophy--gold":y==="--badge__ribbon--silver"?_="badge-trophy--silver":y==="--badge__ribbon--bronze"&&(_="badge-trophy--bronze")}}const h=b.combined_betslips?typeof b.combined_betslips=="string"?b.combined_betslips:JSON.stringify(b.combined_betslips):"[]";let m="[]";if(b.combined_betslips&&c?.matches_expanded){const g=typeof b.combined_betslips=="string"?JSON.parse(b.combined_betslips):b.combined_betslips,y=[...new Set(g.map(A=>A.coreMatches__guid||A.match_guid||A.odds_id).filter(Boolean))],T=c.matches_expanded.filter(A=>{const O=A.guid||A.id||A.odds_id;return y.includes(O)});m=JSON.stringify(T)}return`
                        <bma-leaderboard-card
                            data-rank="${v+1}"
                            data-username="${b.username||"Unknown"}"
                            data-user-guid="${b.user_guid||""}"
                            data-tournament-dollars="${b.calculated_tournament_dollars||0}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${b.total_betslips||0}"
                            data-total-payout="${b.total_payout||0}"
                            data-combined-betslips="${h.replace(/"/g,"&quot;")}"
                            data-user-matches="${m.replace(/"/g,"&quot;")}"
                            data-badge-class="${_}"
                            data-is-current-user="${b.user_guid===n}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `}).join("");const d=i.findIndex(b=>b.user_guid===n),u=d>=0?d+1:i.length,p=c?.entities?.guids?.length||i.length,f=document.getElementById("dashboard-rank");f&&(f.innerHTML=`<span class="tourn-dashboard__rank-text">${u}/${p}</span>`)}else a.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),a.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=me(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const a=e.coreTourn[e.coreTourn.length-1].data.find(r=>r.guid===s);a&&(console.log("[appEvents] Hydrating play popup for tournament:",s),this.populateInfoPage(),this.renderMatchCards(a),this.updateTournamentDashboard(a),this.updatePlayButton())},bindAppListeners(e){V.subscribe("APP",(_,h)=>{console.warn("~~ sub all APP | "+_+"|"+h)}),V.subscribe("WC",(_,h)=>{console.warn("~~ sub all WC  | "+_+"|"+h)}),V.subscribe("ROUTE",(_,h)=>{console.warn("~~ sub all ROUTE  | "+_+"|"+h)});let t="lobby",s="all";const n=()=>{const _=document.querySelector(".featured-carousel-section");_&&(t==="lobby"?_.style.display="block":_.style.display="none")},a=()=>{if(e.coreTourn.length===0)return;const h=e.coreTourn[e.coreTourn.length-1].data,m=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(T=>T.classList.remove("h-ds__none"));let y=0;if(h.forEach(T=>{const A=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${T.guid}"]`);if(!A)return;const O=A.parentElement;let C=!0;if(t==="my"?(T.entities?.guids||[]).includes(m)||(C=!1):t==="completed"&&(T.status||T.class)!=="COMPLETED"&&(C=!1),s!=="all"&&C){const E=T.sports_allowed||[];s==="multi"?E.length<=1&&(C=!1):E.some(L=>L.key===s)||(C=!1)}C?y++:O&&O.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${s} - showing ${y} of ${h.length} tournaments`),y===0){let T="No tournaments match the current filters";t==="my"&&(T="You haven't joined any tournaments yet"),t==="completed"&&(T="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(T,"night")}};V.subscribe(e.hierTopics.COREBETSLIP,(_,h)=>{JSON.parse(h);let m=16;switch(_){case e.hierTopics.COREBETSLIP__BET:m=5,qs.shootConfetti(),console.log("~~~  |  "+_+" | ",h);const g=document.querySelector("[data-bets-valid]");g&&(g.dataset.betsValid="false");const y=document.querySelector("neodigm-sodapop");y&&y.setAttribute("data-wait","true");const T=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(T.length===0){console.warn("[app_events] No bets to submit"),y&&y.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const O=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,C=e.appSession?.session_user?.guid;if(!O||!C){console.error("[app_events] Missing tournament or user GUID"),y&&y.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const E=Array.from(T).map(H=>{const $=H.getAttribute("data-content-team-points"),te=H.getAttribute("data-content-odds"),ne=H.getAttribute("data-stake")||"0",ie=H.getAttribute("data-content-type"),le=H.getAttribute("data-payout")||"0",ge=H.getAttribute("data-match-guid")||"",Ee={};return Ee[$]={type:ie,stake:parseFloat(ne),odds:parseFloat(te),payout:parseFloat(le),reconciled:!1},{acctEntity__guid:C,coreTournaments__guid:O,coreMatches__guid:ge,bet:[Ee],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",E),Se.postBetSlips(E).then(H=>{console.log("[app_events] Bet slips posted successfully:",H);const $=E.reduce((te,ne)=>{const ie=ne.bet[0],le=Object.keys(ie)[0];return te+(ie[le]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${$.toFixed(2)}`,"success"),Se.fetchBetSlips(C,O).then(te=>{if(te?.rows){const ne={timestamp:Date.now(),source:"API",data:te.rows};e.pushcoreBetSlip(ne),console.log("[app_events] Refreshed bet slips in store:",te.rows.length,"items")}ke.refreshPlayPopupUI(O,te),y&&y.setAttribute("data-wait","false")}).catch(te=>{console.error("[app_events] Error fetching fresh bet slips:",te);const ne=document.querySelector("[data-publish-betslip]");ne&&delete ne.dataset.processing,g&&(g.dataset.betsValid="true"),y&&y.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(H=>{console.error("[app_events] Error posting bet slips:",H);const $=document.querySelector("[data-publish-betslip]");$&&delete $.dataset.processing,g&&(g.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),y&&y.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:m=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&h){h=JSON.parse(h);const $=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&$){const te=e.coreBetSlip[0].data.filter(K=>K.coreTournaments__guid===$),ne=[],ie=[],le=[];te.forEach(K=>{const q=K.bet||[];if(q.length===0)return;const X=q[0];Object.keys(X).filter(S=>S!=="short_title").forEach(S=>{const w=X[S],k=w?.reconciled!==!1,D=parseFloat(w?.payout||0);k?D===0?ie.push(K):le.push(K):ne.push(K)})});const ge=nt.search(ne,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Ee=nt.search(ie,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Ie=ge+Ee,Te=nt.search(le,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,I=h.tournament_dollars-Ie+Te;ke.updateTDBalance("#summary-balance",I)}else ke.updateTDBalance("#summary-balance",h.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let L=0,P=0,j=0;if(e.coreBetSlip.length>0){const $=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if($){const ne=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(Te=>Te.coreTournaments__guid===$),ie=[],le=[],ge=[];ne.forEach(Te=>{const I=Te.bet||[];if(I.length===0)return;const K=I[0];Object.keys(K).filter(X=>X!=="short_title").forEach(X=>{const ce=K[X],S=ce?.reconciled!==!1,w=parseFloat(ce?.payout||0);S?w===0?le.push(Te):ge.push(Te):ie.push(Te)})}),L=nt.search(ie,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,P=nt.search(ge,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const Ee=nt.search(le,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Ie=nt.search(ge,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;j=Ee+Ie}}let Q=!0,oe=0;const G=document.querySelector("[data-bets-valid]");if(G&&h){h=JSON.parse(h),h.pending_stake_sum=0,h.pending_payout_sum=0,h.bets.length||(Q=!1),h.bets.forEach(ge=>{ge.stake=Number(ge.stake),ge.stake>0?h.pending_stake_sum+=ge.stake:Q=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(ge=>{const Ee=parseFloat(ge.getAttribute("data-payout")||"0");h.pending_payout_sum+=Ee});const $=L+h.pending_stake_sum,te=P+h.pending_payout_sum;oe=parseFloat((h.tournament_dollars-$-j+P).toFixed(2));const ie=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let le=null;ie&&e.coreTourn.length>0&&(le=e.coreTourn[e.coreTourn.length-1]?.data?.find(Ee=>Ee.guid===ie)),ke.updateSummaryAndDashboard(oe,$,te,le),(h.tournament_dollars<0||oe<0)&&(Q=!1),G.dataset.betsValid=Q}break}m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m,"QUITE").vibrate()});const r=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let m=0;h&&e.coreTourn.length>0&&(m=e.coreTourn[e.coreTourn.length-1].data.find(T=>T.guid===h)?.tournament_dollars||0),V.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:m,timestamp:Date.now()}))},o=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let m=0;h&&e.coreTourn.length>0&&(m=e.coreTourn[e.coreTourn.length-1].data.find(x=>x.guid===h)?.tournament_dollars||0);let g=0,y=0,T=0;if(e.coreBetSlip.length>0&&h){const E=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(G=>G.coreTournaments__guid===h);console.log("[app_events] Filtered bets for tournament:",h,"found:",E.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",E[0]);const x=[],L=[],P=[];E.forEach(G=>{const H=G.bet||[];if(H.length===0)return;const $=H[0];Object.keys($).filter(ne=>ne!=="short_title").forEach(ne=>{const ie=$[ne],le=ie?.reconciled!==!1,ge=parseFloat(ie?.payout||0);le?ge===0?L.push(G):P.push(G):x.push(G)})}),console.log("[app_events] Bet categories:",{unreconciled:x.length,reconciledZero:L.length,reconciledNonZero:P.length});const j=nt.search(x,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Q=nt.search(L,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,oe=nt.search(P,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;T=Q+oe,y=nt.search(P,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,g=j,console.log("[app_events] Balance calculation:",{unreconciledStakes:j,lostBetStakes:Q,wonBetStakes:oe,allReconciledStakes:T,displayedStake:g,reconciledPayouts:y,tournamentDollars:m,calculatedBalance:m-g-T+y})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const A=m-g-T+y;let O=null;h&&e.coreTourn.length>0&&(O=e.coreTourn[e.coreTourn.length-1].data.find(E=>E.guid===h)),ke.updateSummaryAndDashboard(A,g,y,O)};V.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(_,h)=>{const g=JSON.parse(h)?.rows||[],y=document.querySelector(".bet-grid__slip-MYBETS");if(!y)return;if(y.innerHTML="",g.length===0){y.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const C=document.querySelector(".bet-grid__slip");C&&C.setAttribute("data-active-bet-tab","BETSLIP"),r();return}g.forEach(C=>{if((C.bet||[]).length===0)return;const x=document.createElement("bma-bet-existing");x.setAttribute("data-corebetslip",JSON.stringify(C)),y.appendChild(x)});const T=document.querySelector(".bet-grid__slip");T&&T.setAttribute("data-active-bet-tab","MYBETS"),me().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&ke.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",g.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),o()},200)}),document.addEventListener("click",_=>{const h=_.target;if(h&&h.classList.contains("bet-slip-tab")){const m=h.dataset.betTab,g=document.querySelector(".bet-grid__slip");m&&g&&(g.setAttribute("data-active-bet-tab",m),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",m))}if(h&&h.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(h.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}h.dataset.processing="true";const g=h.dataset.publishBetslip;V.publish(g,JSON.stringify({timestamp:Date.now()}))}});const i=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let m=0;h&&e.coreTourn.length>0&&(m=e.coreTourn[e.coreTourn.length-1].data.find(O=>O.guid===h)?.tournament_dollars||0);const g=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),y=Array.from(g).map(T=>({teamPoints:T.getAttribute("data-content-team-points"),odds:T.getAttribute("data-content-odds"),stake:T.getAttribute("data-stake")||"0",type:T.getAttribute("data-content-type"),abbreviatedTitle:T.getAttribute("data-abbreviated-title"),scheduledAt:T.getAttribute("data-scheduled-at")}));V.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:m,bets:y,timestamp:Date.now()}))},l=(_,h)=>{const m=JSON.parse(h),g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!g){console.error("[app_events] Bet slip container not found");return}const y=g.querySelector(".bet-slip__empty");y&&y.remove();let T="";m.type==="total"?T=m.team==="over"?"Over":"Under":m.team==="home"?T=m.homeTeam:m.team==="away"&&(T=m.awayTeam);let A=T;if(m.point)if(m.type==="spread"){const P=parseFloat(m.point)>0?`+${m.point}`:m.point;A=`${T} ${P}`}else m.type==="total"&&(A=`${T} ${m.point}`);const O=document.createElement("bma-bet-entry");O.setAttribute("data-content-team-points",A),O.setAttribute("data-content-odds",m.price||"0"),O.setAttribute("data-content-stake-text","0"),O.setAttribute("data-content-type",m.type||""),O.setAttribute("data-abbreviated-title",m.abbreviatedTitle||`${m.homeTeam} vs ${m.awayTeam}`),O.setAttribute("data-scheduled-at",m.scheduledAt||""),O.setAttribute("data-match-guid",m.matchGuid||""),O.setAttribute("data-home-team",m.homeTeam||""),O.setAttribute("data-away-team",m.awayTeam||""),O.setAttribute("data-bet-team",T||"");const E=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(E&&e.coreTourn.length>0){const j=e.coreTourn[e.coreTourn.length-1].data.find(Q=>Q.guid===E);if(j?.sports_allowed&&j.sports_allowed.length>0){const Q=j.sports_allowed[0];O.setAttribute("data-sport-key",Q.key||"");const oe=qt.find(G=>G.key===Q.key);O.setAttribute("data-sport-group",oe?.group||"")}}g.appendChild(O),console.log("[app_events] Bet entry appended to container:",O,"Container children:",g.children.length),setTimeout(()=>{d(O)},0);const x=document.querySelector(".bet-grid__slip");x&&(x.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const L=g.querySelectorAll("bma-bet-entry").length;L>=3?requestAnimationFrame(()=>{setTimeout(()=>{const P=document.querySelector(".bet-grid__slip");P&&(console.log("[app_events] Scrolling parent to bottom - bet count:",L,"scrollHeight:",P.scrollHeight,"current scrollTop:",P.scrollTop),P.scrollTo({top:P.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",P.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",L,"bet cards (need 3+)"),setTimeout(()=>{i()},200),console.log("[app_events] Created bet entry:",{teamPoints:A,odds:m.price,type:m.type})};V.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(_,h)=>{l(_,h),c()}),V.subscribe(e.hierTopics.COREBETSLIP__MONEY,(_,h)=>{l(_,h),c()}),V.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(_,h)=>{l(_,h),c()});function c(){const _=window.matchMedia("(orientation: portrait)").matches,h=window.matchMedia("(max-width: 768px)").matches;if(_||h){const m=document.querySelector(".bet-grid__select"),g=document.querySelector(".bet-grid__slip"),y=document.querySelector(".bet-grid__toggle-text");m&&g&&y&&(m.classList.add("collapsed"),g.classList.remove("collapsed"),y.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const d=_=>{const h={sport:{key:_.getAttribute("data-sport-key")||"",group:_.getAttribute("data-sport-group")||""},Match:{scheduled_at:_.getAttribute("data-scheduled-at")||"",home_team_id:_.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:_.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:_.getAttribute("data-bet-team")||"",over:"",under:""},type:_.getAttribute("data-content-type")||"",odds:_.getAttribute("data-content-odds")||"0",stake:_.getAttribute("data-stake")||"0"}},m=ml.calcPayout(h);_.setAttribute("data-payout",m.toString()),console.log("[app_events] Payout calculated:",{stake:h.Bet.stake,odds:h.Bet.odds,payout:m})};new MutationObserver(_=>{_.forEach(h=>{h.type==="attributes"&&h.attributeName==="data-stake"&&h.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",h.target.getAttribute("data-stake")),d(h.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{i()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",_=>{console.log("[app_events] Removing bet entry:",_.detail);const h=_.target,m=_.detail;h.remove(),setTimeout(()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(A){const O=me(),C=O.coreTourn[O.coreTourn.length-1];if(C&&C.data){const E=C.data.find(x=>x.guid===A);E&&ke.updateTournamentDashboard(E)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(T=>{(T.shadowRoot?.querySelectorAll(".btn")||[]).forEach(O=>{const C=O.dataset.betType,E=O.dataset.price,x=C===m.type,L=E===m.odds;x&&L&&O.classList.contains("btn--active")&&(O.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:C,btnPrice:E}))})});const y=document.querySelector(".bet-grid__slip-BETSLIP-content");y&&y.children.length,setTimeout(()=>{i()},100)}),V.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(_,h)=>{const m=JSON.parse(h);m&&m.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${m.guid}"]`)}),V.subscribe(e.hierTopics.WC__APP__FOOT,(_,h)=>{JSON.parse(h);let m=16;switch(_){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:V.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:V.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:m=24,V.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:V.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()}),V.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(_,h)=>{const m=JSON.parse(h);let g=16;_=="WC.APP.HEAD_SPORTS.PREV"||_=="WC.APP.HEAD_SPORTS.NEXT"||_=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?g=3:(s=m.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${m.group})`),V.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),g&&neodigmWired4Sound&&neodigmWired4Sound.sound(g).vibrate()}),V.subscribe(e.hierTopics.WC__APP__HEAD_MID,(_,h)=>{JSON.parse(h);let m=16;const g=()=>{s="all";const y=document.querySelector("bma-app-head-sports");y&&y.setAttribute("data-selected-chip","all")};switch(_){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",g(),n(),V.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",g(),n(),V.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",g(),n(),V.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",g(),n(),a(),m=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",g(),n(),a(),m=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()}),V.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(_,h)=>{JSON.parse(h);let m=16;switch(_){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const g=window.deferredPWAPrompt;if(!g){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{g.prompt();const{outcome:T}=await g.userChoice;T==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),m=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(T){console.error("PWA install error:",T),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const A=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:A});const O=document.getElementById("app");O&&O.setAttribute("data-sync-theme",A),document.body.setAttribute("data-sync-theme",A)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":Fa.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":Fa.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()});const p=(_,h)=>{const m=_.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",m,"topic:",_),setTimeout(()=>{const g=document.querySelectorAll(".play-cntr .btn-info-sm"),T=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");g.forEach(A=>{const O=A.dataset.publishRouteHome?.split(".").pop()||"";if(O===m){if(console.log("[app_events] Activating button:",O),A.classList.add("btn-info-sm--active"),A.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:O}),neodigmWired4Sound.sound(3),T){const C=m==="PLAY"?"hidden":"auto";T.style.overflow=C,console.log("[app_events] Set sodapop overflow to:",C)}}else A.classList.add("btn-info-sm--inactive"),A.classList.remove("btn-info-sm--active")})},100)};V.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",p);let f=null;V.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(_,h)=>{if(p(_),f){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}f=setTimeout(()=>{f=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),ke.populateLeaderboard()}),V.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(_,h)=>{JSON.parse(h);const m=document.getElementById("btn-join__play--id");if(!m){console.warn("[app_events] PLAY button not found");return}const g=m.dataset.requiresJoin==="true",y=m.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",y,"requiresJoin:",g),g&&y==="join"){const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,O=me();if(!A){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",A),V.publish(O.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:A,timestamp:Date.now()})),m.textContent="Play",m.dataset.requiresJoin="false",setTimeout(()=>{p(_),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else p(_),console.log("[app_events] Advancing carousel to PLAY page")}),V.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(_,h)=>{JSON.parse(h);let m=10;switch(_){case"WC.APP.HEAD_TOP.USER_PROFILE":m=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const g=e.appSession.session_app.version,y=new Date().getFullYear();g&&neodigmToast&&neodigmToast.q(`${g} 3/22/2026, 3:04:47 PM|© ${y} Bet Max Action`,"night");break}m&&neodigmWired4Sound&&neodigmWired4Sound.sound(m).vibrate()});let b=null,v=null;V.subscribe(e.hierTopics.WC__TOURN_ACTION,(_,h)=>{const m=JSON.parse(h);let g=0;switch(m?.action){case"JOIN":g=512;break;case"PLAY":g=8;break;case"INFO":g=8;break}if(g){b=m?.tournamentGuid,v=m?.action,console.log("[app_events] Storing pending tourn data:",b,v);const y=e.appSession?.session_user?.guid,T=m?.tournamentGuid;y&&T?Se.fetchBetSlips(y,T).then(A=>{if(A?.rows){const O={timestamp:Date.now(),source:"API",data:A.rows};e.pushcoreBetSlip(O),console.log("[app_events] Bet slips fetched:",A.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{V.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(A))},3e3)},g)}).catch(A=>{console.error("[app_events] Error fetching bet slips:",A),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},g)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},g)}}),V.subscribe(e.hierTopics.WC__TOURN_ACTION,(_,h)=>{const m=JSON.parse(h);let g=16;switch(m?.action){case"FOCUS":g=3;break;case"SPORT_ICON":g=10;break;case"JOIN":g=5;break;case"PLAY":g=16;break}g&&neodigmWired4Sound&&neodigmWired4Sound.sound(g).vibrate()}),V.subscribe(e.hierTopics.WC__TOURN_ACTION,(_,h)=>{const m=JSON.parse(h);let g=0,y="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),m?.tournamentStatus){case"UPCOMING":y="success";break;case"LOCKED":y="warning";break;case"COMPLETED":y="danger";break}switch(m?.action){case"SPORT_ICON":m?.sportTitle==m?.sportDescription?g=m?.sportTitle:g=m?.sportTitle+"|"+m?.sportDescription;break}g&&neodigmToast&&neodigmToast.q(g,y)}),V.subscribe(e.hierTopics.WC__TOURN_ACTION,async(_,h)=>{const m=JSON.parse(h);if(m?.action==="JOIN"){const y=me().appSession?.session_user?.guid;if(!y){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const T=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${m.tournamentGuid}"]`);T&&(T.setAttribute("data-bma-tourn-wait","true"),qs.shootConfetti());const A={acctEntityGuid:y,tournamentGuid:m.tournamentGuid};try{const O={method:"POST",body:JSON.stringify(A),headers:Se.genHeaders()};console.log("Posting to:",Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",A);const E=await(await fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",O)).json();if(console.log("Join response:",E),E.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const x=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${m.tournamentGuid}"]`);if(x){x.setAttribute("data-bma-tourn-wait","false");const L=x.getAttribute("data-bma-tourn-entities");if(L)try{const P=JSON.parse(L);P.guids.includes(y)||(P.guids.push(y),x.setAttribute("data-bma-tourn-entities",JSON.stringify(P)))}catch(P){console.error("Failed to parse entities:",P)}}},3e3);else{const x=E?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(x,"danger");const L=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${m.tournamentGuid}"]`);L&&L.setAttribute("data-bma-tourn-wait","false")}}catch(O){console.error("Join tournament error:",O),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),V.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(_,h)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const m=me();try{const g=await Se.fetchTournaments();console.log("[app_events] Tournaments fetched:",g),g?.rows&&Array.isArray(g.rows)?(m.pushCoreTourn({timestamp:Date.now(),source:"API",data:g.rows}),console.log("[app_events] Pushed to coreTourn, length:",m.coreTourn.length),V.publish(m.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",g)}catch(g){console.error("[app_events] Error fetching tournaments:",g),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),V.subscribe(e.hierTopics.PROMOTION__LOAD,async(_,h)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const m=await Se.fetchPromotions();if(console.log("[app_events] Promotions fetched:",m),m?.ok&&m?.data&&Array.isArray(m.data)){const g=m.data.filter(T=>T.class==="banner"&&T.status==="LIVE");console.log("[app_events] Banner promotions:",g);const y=document.querySelector(".featured-swiper .swiper-wrapper");if(!y){console.warn("[app_events] Swiper wrapper not found");return}y.innerHTML="",g.forEach((T,A)=>{const O=document.createElement("div");O.className="swiper-slide";const C=document.createElement("div");C.className=`featured-card featured-card--${A+1}`;const E=T.hero_img?encodeURI(T.hero_img):"";C.style.backgroundImage=`url("${E}")`,C.setAttribute("data-promotion-hero-img",T.hero_img||""),C.setAttribute("data-promotion-caption",T.caption||""),C.setAttribute("data-promotion-tagline",T.tagline||""),C.setAttribute("data-promotion-toast",T.toast||""),C.setAttribute("data-promotion-topic",T.topic?.topic||""),C.setAttribute("data-promotion-topic-token",T.topic?.token||""),C.setAttribute("data-promotion-marquee",T.maquee||""),O.appendChild(C),y.appendChild(O)}),console.log("[app_events] Created",g.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update()}}catch(m){console.error("[app_events] Error fetching promotions:",m)}}),V.subscribe(e.hierTopics.PROMOTION__CLICK,(_,h)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const m=JSON.parse(h);console.log("[app_events] Promotion clicked:",m),m.toast&&typeof neodigmToast<"u"&&neodigmToast.q(m.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const g=document.querySelector(".l-promotion #promoHero");g&&m.heroImg&&(g.src=m.heroImg);const y=document.querySelector(".l-promotion #promCaption");y&&m.caption&&(y.textContent=m.caption);const T=document.querySelector(".l-promotion #promoTagline");return T&&m.tagline&&(/<[^>]+>/.test(m.tagline)?T.innerHTML=m.tagline:T.textContent=m.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(m){console.error("[app_events] Error handling promotion click:",m)}}),V.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(_,h)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const m=me();if(m.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const g=m.coreTourn[m.coreTourn.length-1],y=m.coreTourn.length>1?m.coreTourn[m.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",g);const T=[];if(y){const E=g.data,x=y.data;E.forEach(L=>{const P=x.find(j=>j.guid===L.guid);P&&P.status!==L.status&&(console.log(`[app_events] Status changed for tournament ${L.guid}: ${P.status} -> ${L.status}`),T.push(L.guid))})}const A=m.appSession?.session_user?.guid,O=[...g.data].sort((E,x)=>{const L=E.status||E.class,P=x.status||x.class,j=E.entities?.guids||[],Q=x.entities?.guids||[],oe=j.includes(A),G=Q.includes(A),H=(Te,I)=>{const K=new Date(Te.status_time||0).getTime();return new Date(I.status_time||0).getTime()-K},$=L==="LOCKED"&&oe,te=P==="LOCKED"&&G;if($&&!te)return-1;if(!$&&te)return 1;if($&&te)return H(E,x);const ne=L==="UPCOMING",ie=P==="UPCOMING";if(ne&&!ie)return-1;if(!ne&&ie)return 1;if(ne&&ie)return H(E,x);const le=L==="COMPLETED"&&oe,ge=P==="COMPLETED"&&G;if(le&&!ge)return-1;if(!le&&ge)return 1;if(le&&ge)return H(E,x);const Ee=L==="COMPLETED"&&!oe,Ie=P==="COMPLETED"&&!G;return Ee&&!Ie?1:!Ee&&Ie?-1:H(E,x)}),C=ke.categorizeTournaments(O,t,s,A);if(console.log(`[app_events] Categorized into ${C.length} categories for filter: ${t}/${s}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(C,!0),setTimeout(()=>{a(),console.log("[app_events] Re-applied filter after hydration:",t)},100),T.length>0){const E=g.data;T.forEach(x=>{const L=E.find(P=>P.guid===x);if(L){const P=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{V.publish(m.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:x,status:L.status,timestamp:Date.now()}))},P)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),V.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(_,h)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",h);const m=me();try{const g=JSON.parse(h);console.log("[app_events] SSE tournament sync data:",g);const y=JSON.parse(g.msg);if(console.log("[app_events] Parsed tournaments array:",y),!Array.isArray(y)){console.warn("[app_events] SSE msg is not an array:",y);return}m.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:y}),console.log("[app_events] Pushed SSE data to coreTourn, length:",m.coreTourn.length),V.publish(m.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),typeof neodigmSodaPop<"u"&&neodigmSodaPop.isOpen()==="sodapop_play"&&(console.log("[SSE] Play popup is open, triggering real-time update"),ke.hydratePlayPopup())}catch(g){console.error("[app_events] Error processing SSE tournament sync:",g)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const _=document.querySelector("#caption__my-profile");_&&(_.textContent="My Profile");const h=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",h),console.log("[app_events] coreTourn length:",e.coreTourn.length),!h||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const g=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",g.length);let y=0,T=0,A=0;g.forEach((O,C)=>{if(!O.tags||!Array.isArray(O.tags)){console.log(`[app_events] Tournament ${C} has no tags or tags not an array`);return}O.tags.forEach((E,x)=>{if(typeof E=="object"&&E!==null){let L=null;E.entity_guid===h&&E.badge?L=E.badge:E[h]&&(L=E[h]),L==="--badge__ribbon--gold"?y++:L==="--badge__ribbon--silver"?T++:L==="--badge__ribbon--bronze"&&A++}})}),setTimeout(()=>{let O=document.querySelectorAll(".badge-counter");if(O.length===0){const C=document.querySelector("neodigm-sodapop");C&&(O=C.querySelectorAll(".badge-counter"))}O.length>=3?(O[0].textContent=y,O[1].textContent=T,O[2].textContent=A,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const _=me(),h=document.querySelector(".play-cntr");b&&(h.dataset.currentTournGuid=b),v&&(h.dataset.currentTournAction=v);const m=h?.dataset?.currentTournGuid,g=h?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",m,"action:",g),window.initBetGridToggle&&window.initBetGridToggle(),ke.updatePlayButton(),ke.populateInfoPage(),setTimeout(()=>{ke.populateLeaderboard()},600);let y=g==="PLAY"||g==="JOIN"?"PLAY":g;if(!m||_.coreTourn.length===0||_.coreTourn[_.coreTourn.length-1].data.find(j=>j.guid===m)?.status==="COMPLETED"&&(y="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),y){const L=`ROUTE.HOME.SODAPOP_PLAY.${y}`;console.log("[app_events] Publishing initial topic:",L),V.publish(L,JSON.stringify({tournamentGuid:m,timestamp:Date.now()}))}if(!m||_.coreTourn.length===0)return;const A=_.coreTourn[_.coreTourn.length-1].data.find(L=>L.guid===m);ke.renderMatchCards(A);const O=document.querySelector("#pop-play__tourn-caption--id"),C=document.querySelector("#pop-play__tourn-tagline--id");O&&(O.textContent=A.caption),C&&(C.textContent=A.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",A?.caption);const E=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!E),E&&console.log("[Modal Debug] Modal classes:",E.className),ke.updateTournamentDashboard(A);const x=document.getElementById("dashboard-rank");if(x){const L=A.entities?.guids?.length||0;x.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${L}</span>
                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},Dm={__name:"App",setup(e){const t=vt(),s=me();return Nt(()=>{setTimeout(()=>{const n=s.appSession?.session_user?.guid,a=s.appSession?.session_user?.authenticated;n&&a&&s.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",n),xn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",n,s,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((n=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${n}`,"primary"),t.push({name:n})}).setOnState((n=null)=>{n&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=n)}).init({BASE:Se.API_baseURI})},2e3),setTimeout(()=>{ke.bindAppListeners(s)},3e3),t.beforeEach((n,a,r)=>{n.name=="splash_route"||n.name&&mvvLegit&&mvvLegit.isRouteAllowed(n.name)?r():r(!1)}),(n,a)=>(st(),kr(Kt(dl),null,{default:Sa(({Component:r})=>[Ge(kd,{name:"slide-left"},{default:Sa(()=>[(st(),kr(Lc(r)))]),_:2},1024)]),_:1}))}};class Nm extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const s=new Date,n=s.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),a=s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${a} ${n}`}}handleLogoClick(t){t.preventDefault(),V.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),V.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          /* Premium dark gradient - darkest of the three headers */
          background: ${n?"#101010":`linear-gradient(
                180deg,
                rgba(252, 252, 252, 0.98) 0%,
                rgba(248, 248, 248, 0.95) 100%
              )`};
          /* Subtle premium border - white */
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
          /* Premium depth shadow */
          box-shadow:
            inset 0 -1px 0 rgba(0, 0, 0, 0.3),
            0 2px 8px rgba(0, 0, 0, 0.2),
            0 4px 16px rgba(0, 0, 0, 0.1);
        }

        .head-top-container {
          max-width: var(--bma-app-head__max--width, 1180px);
          margin: 0 auto;
          padding: 0.75rem 1rem;
          display: grid;
          grid-template-areas: "head_top_logo head_top_status head_top_user_profile";
          grid-template-columns: minmax(176px, 256px) auto minmax(176px, 256px);
          align-items: center;
          gap: 1rem;
        }

        .logo-section {
          grid-area: head_top_logo;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .logo-link {
          display: block;
          cursor: pointer;
          transition: transform 0.2s ease;
        }

        .logo-img {
          position: absolute; top: 0;
          height: 62px;
          width: auto;
          content: url("https://bma-master.github.io/bma-core/img/BMT-White-Secondary.png");
        }

        .status-section {
          grid-area: head_top_status;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 0.25rem;
          user-select: none;
        }

        .status-username {
          font-size: 0.95rem;
          font-weight: 600;
          color: ${n?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          text-shadow: ${n?"0 1px 2px rgba(0, 0, 0, 0.3)":"none"};
        }

        .status-time {
          font-size: 0.8rem;
          font-weight: 400;
          color: ${n?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"};
        }

        .profile-section {
          grid-area: head_top_user_profile;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          user-select: none;
        }

        .profile-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: ${n?"rgba(32, 32, 32, 0.8)":"rgba(250, 250, 250, 0.8)"};
          background-image: var( --nav-icon__account_circle--${n?"dark":"vlight"} );
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          border: 2px solid ${n?"rgba(255, 215, 0, 0.2)":"rgba(255, 215, 0, 0.3)"};
          cursor: pointer;
          transition: all 0.3s ease;
          opacity: 0.8;
        }

        .profile-icon:hover {
          transform: scale(1.05);
          opacity: 1;
          border-color: rgba(255, 215, 0, 0.5);
          background-color: ${n?"rgba(255, 215, 0, 0.1)":"rgba(255, 215, 0, 0.05)"};
          box-shadow: 0 0 12px rgba(255, 215, 0, 0.3);
        }

        /* Responsive adjustments */
        @media (orientation: portrait), (max-width: 768px) {
          .head-top-container {
            grid-template-columns: minmax(96px, 124px) auto minmax(96px, 124px);
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
          }

          .logo-img {
            QQQQheight: 28px;
            content: url("https://bma-master.github.io/bma-core/img/BMT-Color-Tertiary-.png");
          }

          .status-username {
            font-size: 0.85rem;
          }

          .status-time {
            font-size: 0.5rem;
          }
        }

        @media (min-width: 1280px) {
          .logo-img {
            height: 56px;
          }
        }
      </style>

      <div class="head-top-container">
        <div class="logo-section">
          <a href="#" class="logo-link" id="logoLink">
            <img
              src=""
              alt="Bet Max Action"
              class="logo-img"
            />
          </a>
        </div>

        <div class="status-section">
          <div class="status-username">${a}</div>
          <div class="status-time">Loading...</div>
        </div>

        <div class="profile-section">
          <div class="profile-icon" id="profileIcon" role="button" tabindex="0" aria-label="User Profile"></div>
        </div>
      </div>
    `;const r=this.shadowRoot.querySelector("#logoLink"),o=this.shadowRoot.querySelector("#profileIcon");r&&r.addEventListener("click",i=>this.handleLogoClick(i)),o&&(o.addEventListener("click",i=>this.handleProfileClick(i)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",Nm);class Bm extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-tab"&&(this.selectedTab=n||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),V.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],r=o=>`
        <div
          class="tab-item ${this.selectedTab===o.name?"tab-selected":"tab-unselected"}"
          data-tab="${o.name}"
          role="button"
          tabindex="0"
          aria-label="${o.caption}"
        >
          <span class="tab-caption-desktop">${o.caption}</span>
          <span class="tab-caption-mobile">${o.mobileCaption}</span>
        </div>
      `;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          /* Darker recessed background similar to sports bar but slightly lighter */
          background: ${n?"#242424":`linear-gradient(
                180deg,
                rgba(250, 250, 250, 0.95) 0%,
                rgba(245, 245, 245, 0.9) 100%
              )`};
          /* Simple dark border without glow */
          border-bottom: 1px solid rgba(0, 0, 0, 0.3);
          /* Subtle depth shadows */
          box-shadow:
            inset 0 1px 2px rgba(0, 0, 0, 0.2),
            0 2px 6px rgba(0, 0, 0, 0.1);
        }

        /* Hide on mobile (≤768px) */
        @media (orientation: portrait), (max-width: 768px) {
          :host {
            display: none;
          }
        }

        .head-mid-container {
          max-width: var(--bma-app-head__max--width, 1220px);
          margin: 0 auto;
          padding: 0;
          display: grid;
          grid-template-areas: "head_mid_lobby head_mid_my head_mid_completed head_mid_leaderboard head_mid_squad";
          grid-template-columns: repeat(5, 1fr);
          gap: 0;
        }

        .tab-item {
          grid-area: var(--tab-area);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem 0.5rem;
          cursor: pointer;
          transition: all 0.6s ease;
          border-bottom: 3px solid transparent;
          font-size: 0.9rem;
          font-weight: 600;
          text-align: center;
          user-select: none;
        }

        .tab-item[data-tab="head_mid_lobby"] { grid-area: head_mid_lobby; }
        .tab-item[data-tab="head_mid_my"] { grid-area: head_mid_my; }
        .tab-item[data-tab="head_mid_completed"] { grid-area: head_mid_completed; }
        .tab-item[data-tab="head_mid_leaderboard"] { grid-area: head_mid_leaderboard; }
        .tab-item[data-tab="head_mid_squad"] { grid-area: head_mid_squad; }

        /* Unselected state - matching sports bar style */
        .tab-unselected {
          color: ${n?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.5)"};
          border-bottom-color: transparent;
          position: relative;
        }

        /* Unselected hover state - subtle highlight */
        .tab-unselected:hover {
          color: ${n?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.75)"};
          background: ${n?"linear-gradient(180deg, transparent 0%, rgba(255, 215, 0, 0.05) 100%)":"linear-gradient(180deg, transparent 0%, rgba(255, 215, 0, 0.03) 100%)"};
          transform: translateY(-1px);
          transition: all 0.3s ease;
        }

        /* Selected state - gold accent matching primary nav importance */
        .tab-selected {
          color: ${n?"#FFD700":"#B28F09"};
          background: ${n?"linear-gradient(180deg, rgba(255, 215, 0, 0.1) 0%, transparent 100%)":"linear-gradient(180deg, rgba(255, 215, 0, 0.08) 0%, transparent 100%)"};
          font-weight: 700;
          position: relative;
        }

        /* Gold underline for selected tab with animation */
        .tab-selected::after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 3px;
          background: #FFD700;
          border-radius: 2px;
          opacity: 0.8;
          animation: slideIn 0.3s ease forwards;
        }

        @keyframes slideIn {
          from {
            transform: translateX(-50%) scaleX(0);
          }
          to {
            transform: translateX(-50%) scaleX(1);
          }
        }

        .tab-caption-mobile {
          display: none;
        }

        .tab-caption-desktop {
          display: inline;
        }

        /* Tablet - show shorter captions */
        @media (min-width: 769px) and (max-width: 1024px) {
          .tab-item {
            font-size: 0.85rem;
            padding: 0.875rem 0.375rem;
          }

          .tab-caption-desktop {
            display: none;
          }

          .tab-caption-mobile {
            display: inline;
          }
        }
      </style>

      <div class="head-mid-container">
        ${a.map(o=>r(o)).join("")}
      </div>
    `,a.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-tab="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(o.name,o.topic))}))})}}customElements.define("bma-app-head-mid",Bm);class Fm extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,n){if(this.shadowRoot&&s!==n){if(t==="data-selected-chip"){if(this.selectedChip=n||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,s){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),V.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(s=>{const n=s.getAttribute("data-chip")===this.selectedChip;s.classList.toggle("chip-selected",n),s.classList.toggle("chip-unselected",!n)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),n=this.shadowRoot?.querySelector(".head-sports-container"),a=this.shadowRoot?.querySelector("#navPrev"),r=this.shadowRoot?.querySelector("#navNext");if(!t||!s||!n||!a||!r)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),i=o>8,l=t.scrollLeft<=4,c=t.scrollLeft>=o-4;n.classList.toggle("rail-has-overflow",i),s.classList.toggle("has-overflow",i),s.classList.toggle("has-left-overflow",i&&!l),s.classList.toggle("has-right-overflow",i&&!c),a.classList.toggle("nav-disabled",!i||l),r.classList.toggle("nav-disabled",!i||c),a.setAttribute("aria-disabled",String(!i||l)),r.setAttribute("aria-disabled",String(!i||c)),a.tabIndex=!i||l?-1:0,r.tabIndex=!i||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),n=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!s||!n)return;const a=s.getBoundingClientRect(),r=t.scrollWidth-t.clientWidth,o=n.getBoundingClientRect(),i=a.width,c=window.matchMedia("(min-width: 769px)").matches?Math.round(i*.32):18,d=Math.max(18,i-c-o.width),u=a.left+c,p=a.right-d;let f=o.left-u;if(f<0?f=o.left-u:o.right>p?f=o.right-p:f=0,Math.abs(f)<6)return;const b=Math.max(0,Math.min(t.scrollLeft+f,r));Math.abs(t.scrollLeft-b)<6||(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:b,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const s=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=s-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const s=[...t.querySelectorAll(".sport-chip")];if(!s.length)return;const n=Math.max(0,t.scrollWidth-t.clientWidth);if(n<=8)return;const a=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,r=t.scrollLeft;let o=r,i=Number.POSITIVE_INFINITY;s.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-a,n)),d=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-t.clientWidth+a,n));[c,d].forEach(u=>{const p=Math.abs(u-r);p<i&&(i=p,o=u)})}),!(i<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",n=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=n.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),V.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const s=()=>{if(!this.isPointerDown)return;const n=Date.now()-this.dragStartTime,a=this.dragDistance>10||this.dragDistance>4&&n>180;this.isPointerDown=!1,t.style.cursor="grab",a&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",s),t.addEventListener("mouseup",s),t.addEventListener("mousemove",n=>{if(!this.isPointerDown)return;n.preventDefault();const r=(n.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(r)),t.scrollLeft=this.dragStartScrollLeft-r}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",o=(me().appMeta?.sports||[]).filter(f=>f.active===!0),i=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],l=[...o].sort((f,b)=>{const v=f.title||f.description||"",_=b.title||b.description||"",h=i.indexOf(v),m=i.indexOf(_);return h!==-1&&m!==-1?h-m:h!==-1?-1:m!==-1?1:v.toLowerCase().localeCompare(_.toLowerCase())}),c=[{key:"all",group:"All",title:"HOME",description:"All Sports"},{key:"multi",group:"Multi",title:"Multiple Sport",description:"Multi-Sport Tournaments"},...l],d=f=>{const b=this.selectedChip===f.key,v=f.key==="all";let _="";return v||(_=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`),`
        <div
          class="sport-chip ${b?"chip-selected":"chip-unselected"}"
          data-chip="${f.key}"
          role="button"
          tabindex="0"
          aria-label="${f.description||f.title}"
        >
          ${_}
          <span class="chip-title">${f.title||f.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          box-sizing: border-box;
          /* Darker, recessed appearance - distinct from header above */
          background: ${n?"#101010":`linear-gradient(
                180deg,
                rgba(250, 250, 250, 0.95) 0%,
                rgba(240, 240, 240, 0.9) 100%
              )`};
          border-top: 1px solid ${n?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.1)"};
          border-bottom: 2px solid ${n?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
          box-shadow:
            inset 0 2px 4px rgba(0, 0, 0, 0.2),
            0 2px 8px rgba(0, 0, 0, 0.1);
        }

        *, *::before, *::after {
          box-sizing: border-box;
        }

        .head-sports-container {
          width: min(100%, 2200px);
          max-width: none;
          margin: 0 auto;
          display: grid;
          grid-template-areas: "head_sports_prev head_sports_chips head_sports_next";
          grid-template-columns: 52px minmax(0, 1fr) 52px;
          align-items: center;
          gap: 0;
          padding: 8px 10px;
          box-sizing: border-box;
        }

        .head-sports-container:not(.rail-has-overflow) {
          grid-template-areas: "head_sports_chips";
          grid-template-columns: minmax(0, 1fr);
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 0;
          background-color: ${n?"rgba(8, 8, 8, 0.92)":"rgba(255, 255, 255, 0.9)"};
          background-size: 88% 88%;
          background-position: center;
          background-repeat: no-repeat;
          border: 1px solid ${n?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
          cursor: pointer;
          transition: transform 0.2s ease, opacity 0.2s ease, border-color 0.2s ease, background-color 0.2s ease;
          opacity: 0.82;
          box-sizing: border-box;
        }

        .nav-icon.nav-disabled {
          opacity: 0.28;
          cursor: default;
          pointer-events: none;
          transform: none;
          border-color: ${n?"rgba(255, 255, 255, 0.05)":"rgba(0, 0, 0, 0.05)"};
        }

        .nav-icon:hover {
          opacity: 1;
          background-color: ${n?"rgba(18, 18, 18, 0.98)":"rgba(255, 255, 255, 0.98)"};
          border-color: ${n?"rgba(247, 198, 13, 0.35)":"rgba(247, 198, 13, 0.25)"};
          transform: translateY(-1px);
        }

        .nav-icon:active {
          transform: translateY(0);
        }

        .nav-icon.nav-icon__prev { background-image: var( --nav-icon__chevron_prev--${n?"dark":"light"} ); }
        .nav-icon.nav-icon__next { background-image: var( --nav-icon__chevron_next--${n?"dark":"light"} ); }


        .nav-prev {
          grid-area: head_sports_prev;
          justify-self: center;
          align-self: center;
          position: relative;
          z-index: 2;
        }

        .nav-next {
          grid-area: head_sports_next;
          justify-self: center;
          align-self: center;
          position: relative;
          z-index: 2;
        }

        .head-sports-container:not(.rail-has-overflow) .nav-prev,
        .head-sports-container:not(.rail-has-overflow) .nav-next {
          display: none;
        }

        .chips-wrapper {
          grid-area: head_sports_chips;
          position: relative;
          overflow: hidden;
          align-self: center;
          min-width: 0;
          border-top: 1px solid ${n?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"};
          border-bottom: 1px solid ${n?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"};
          background: ${n?"linear-gradient(180deg, rgba(18,18,18,0.94) 0%, rgba(12,12,12,0.94) 100%)":"linear-gradient(180deg, rgba(255,255,255,0.84) 0%, rgba(246,246,246,0.92) 100%)"};
        }

        .chips-wrapper::before,
        .chips-wrapper::after {
          content: '';
          position: absolute;
          top: 0;
          bottom: 0;
          width: 22px;
          pointer-events: none;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.2s ease;
        }

        .chips-wrapper.has-left-overflow::before,
        .chips-wrapper.has-right-overflow::after {
          opacity: 1;
        }

        .chips-wrapper::before {
          left: 0;
          background: ${n?"linear-gradient(90deg, rgba(12,12,12,0.98) 0%, rgba(12,12,12,0) 100%)":"linear-gradient(90deg, rgba(248,248,248,0.98) 0%, rgba(248,248,248,0) 100%)"};
        }

        .chips-wrapper::after {
          right: 0;
          background: ${n?"linear-gradient(270deg, rgba(12,12,12,0.98) 0%, rgba(12,12,12,0) 100%)":"linear-gradient(270deg, rgba(248,248,248,0.98) 0%, rgba(248,248,248,0) 100%)"};
        }

        .chips-container {
          display: flex;
          gap: 8px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          padding: 6px 10px;
          margin: 0;
          cursor: grab;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE/Edge */
        }

        /* Hide scrollbar for Chrome/Safari/Opera */
        .chips-container::-webkit-scrollbar {
          display: none;
        }

        .sport-chip {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          min-height: 36px;
          padding: 0 14px;
          border-radius: 0;
          border: 1px solid ${n?"rgba(255,255,255,0.09)":"rgba(0,0,0,0.08)"};
          border-bottom: 2px solid transparent;
          cursor: pointer;
          transition: transform 0.2s ease, border-color 0.2s ease, background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
          user-select: none;
          font-size: 0.84rem;
          font-weight: 600;
          box-sizing: border-box;
        }

        .sport-chip::after {
          content: '';
          position: absolute;
          left: 10px;
          right: 10px;
          bottom: -1px;
          height: 2px;
          background: transparent;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }

        .chip-unselected {
          color: ${n?"rgba(255, 255, 255, 0.62)":"rgba(0, 0, 0, 0.64)"};
          background: ${n?"rgba(30, 30, 30, 0.72)":"rgba(255, 255, 255, 0.72)"};
          border: 1px solid ${n?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
          border-bottom: 2px solid transparent;
        }

        .chip-unselected:hover {
          color: ${n?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          background: ${n?"rgba(46, 139, 87, 0.12)":"rgba(46, 139, 87, 0.08)"};
          border-color: ${n?"rgba(247, 198, 13, 0.18)":"rgba(247, 198, 13, 0.16)"};
          border-bottom-color: ${n?"rgba(247, 198, 13, 0.45)":"rgba(247, 198, 13, 0.5)"};
          transform: translateY(-1px);
        }

        .chip-selected {
          color: ${n?"#00E676":"#00A84F"};
          background: ${n?"linear-gradient(180deg, rgba(15, 24, 18, 0.96) 0%, rgba(9, 16, 12, 0.98) 100%)":"linear-gradient(180deg, rgba(248, 255, 251, 0.98) 0%, rgba(236, 248, 241, 0.98) 100%)"};
          border: 1px solid ${n?"rgba(0, 230, 118, 0.34)":"rgba(0, 168, 79, 0.22)"};
          border-bottom: 2px solid transparent;
          box-shadow: ${n?"0 8px 18px rgba(0, 0, 0, 0.28), inset 0 1px 0 rgba(255,255,255,0.04), inset 0 0 0 1px rgba(0, 230, 118, 0.06)":"0 6px 14px rgba(0, 168, 79, 0.08), inset 0 0 0 1px rgba(0, 168, 79, 0.04)"};
          font-weight: 700;
        }

        .chip-selected::after {
          background: ${n?"#00E676":"#00A84F"};
          box-shadow: ${n?"0 0 10px rgba(0, 230, 118, 0.35)":"0 0 8px rgba(0, 168, 79, 0.18)"};
        }

        .chip-title {
          font-size: 0.84rem;
          font-weight: inherit;
          letter-spacing: 0.02em;
        }

        bma-sport-icon {
          flex-shrink: 0;
          opacity: 0.82;
          transition: opacity 0.2s ease, filter 0.2s ease;
        }

        .chip-selected bma-sport-icon {
          opacity: 1;
          filter: ${n?"drop-shadow(0 0 5px rgba(0, 230, 118, 0.28))":"drop-shadow(0 0 4px rgba(0, 168, 79, 0.16))"};
        }

        @media (max-width: 768px) {
          .head-sports-container {
            grid-template-columns: 44px minmax(0, 1fr) 44px;
            padding: 6px 8px;
          }

          .nav-icon {
            width: 34px;
            height: 34px;
            background-size: 84% 84%;
          }

          .chips-wrapper::before,
          .chips-wrapper::after {
            width: 16px;
          }

          .chips-container {
            gap: 6px;
            padding: 5px 8px;
          }

          .sport-chip {
            min-height: 32px;
            padding: 0 10px;
            font-size: 0.8rem;
          }

          .chip-title {
            font-size: 0.8rem;
          }
        }

        @media (min-width: 769px) {
          .head-sports-container {
            grid-template-columns: 56px minmax(0, 1fr) 56px;
            padding: 9px 14px;
          }

          .chips-container {
            gap: 10px;
            padding: 7px 12px;
          }

          .sport-chip {
            min-height: 38px;
            padding: 0 16px;
          }
        }
      </style>

      <div class="head-sports-container">
        <aside class="nav-icon nav-prev nav-icon__prev" id="navPrev" role="button" tabindex="0" aria-label="Scroll left"></aside>

        <div class="chips-wrapper">
          <div class="chips-container">
            ${c.map(f=>d(f)).join("")}
          </div>
        </div>

        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,c.forEach(f=>{const b=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);b&&b.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const u=this.shadowRoot.querySelector("#navPrev"),p=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),p&&p.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll(),requestAnimationFrame(()=>{this.alignSelectedChip(),this.updateRailState()})}}customElements.define("bma-app-head-sports",Fm);class $m extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-item"&&(this.selectedItem=n||"foot_all_sports"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),V.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],r=o=>`
        <div
          class="nav-item ${this.selectedItem===o.name?"nav-selected":"nav-unselected"}"
          data-item="${o.name}"
          role="button"
          tabindex="0"
          aria-label="${o.caption}"
        >
          <div class="nav-icon" data-icon-var="${o.iconVar}"></div>
          <span class="nav-caption">${o.caption}</span>
        </div>
      `;this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: none; /* Hidden by default */
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 248;
          background: ${n?"#101010":"rgba(245, 245, 245, 0.97)"};
          border-top: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.2);
        }

        /* Show only on mobile (≤768px) */
        @media (orientation: portrait), (max-width: 768px) {
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
          transition: all 0.2s ease;
          border-top: 2px solid transparent;
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
          transition: all 0.2s ease;
          filter: brightness(70%);
          margin-bottom: 0.125rem;
        }

        .nav-icon[data-icon-var="--nav-icon__sports--"] {
          background-image: var(--nav-icon__trophy--${n?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__trophy--"] {
          background-image: var(--nav-icon__person_celebrate--${n?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__leaderboard--"] {
          background-image: var(--nav-icon__social_leaderboard--${n?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__my_profile_circle--"] {
          background-image: var(--nav-icon__account_circle--${n?"dark":"light"});
        }

        .nav-caption {
          font-size: 0.7rem;
          font-weight: 600;
          text-align: center;
          line-height: 1.2;
        }

        /* Unselected state */
        .nav-unselected {
          color: ${n?"rgba(255, 255, 255, 0.6)":"rgba(0, 0, 0, 0.6)"};
          border-top-color: transparent;
        }

        /* Selected state */
        .nav-selected {
          color: ${n?"#FFFFFF":"#000000"};
          border-top-color: ${n?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"};
        }

        .nav-selected .nav-icon {
          filter: brightness(120%);
        }
      </style>

      <div class="foot-container">
        ${a.map(o=>r(o)).join("")}
      </div>
    `,a.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-item="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(o.name,o.topic))}))})}}customElements.define("bma-app-foot",$m);class Um extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,n){s!==n&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const n=s[0],a=n.short_title||"Match Info N/A",o=Object.keys(n).filter(m=>m!=="short_title")[0]||"Unknown Team",i=n[o],l=i.odds||"N/A",c=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),u=parseFloat(i.payout||0).toFixed(2),p=i.reconciled!==!1,f=p&&parseFloat(u)>parseFloat(d),b=p&&parseFloat(u)<=parseFloat(d);let v="";p?f?v="win":b&&(v="loss"):v="unreconciled";const _=t.status_time?qs.formatDateLocal(t.status_time):"";let h=o;if(c==="spread"&&i.point){const m=parseFloat(i.point)>0?`+${i.point}`:i.point;h=`${o} ${m}`}else c==="total"&&i.point&&(h=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
      <style>
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
          border: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: 8px;
          margin-bottom: 6px; padding: 8px;
          gap: 8px;
          box-sizing: border-box;
        }

        /* Border color states */
        .bet-existing-card.unreconciled {
          border-color: rgba(247, 198, 13, 0.1);
        }

        .bet-existing-card.win {
          border-color: rgba(20, 185, 99, 0.1);
        }

        .bet-existing-card.loss {
          border-color: rgba(185, 20, 24, 0.1);
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
          border: 1px solid var(--app-core-color--gray-4__dark--brand, #323232);
          border-radius: 4px;
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
          <div class="match_desc">${a}</div>
          <div class="match_date">${_}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${h}</div>
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
    `}}customElements.define("bma-bet-existing",Um);const Co=`
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
    data-n55-sodapop-size="large" data-n55-sodapop-fullscreen="false"
    style="padding: 0;">
    <div>
      <div class="head-caption">
        <section class="head-caption__text">
          <h1 id="caption__my-profile" class="pop-play__tourn-caption"
          style="height: 30px;">My Profile</h1>
        </section>
        <div class="head-caption__close">
          <img data-sodapop-close="true"
          src="https://bma-master.github.io/bma-core/img/X-v1.png" alt="Close">
        </div>
      </div>
      <br><br>

      <neodigm-carousel id="caro-user_profile">
        <section>
<section data-n55-carousel-page-name="SPLASH">
  <div class="splash-lgo grass-branded h-center">
  <img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="Bet Max Tourney" />
  </div>
</section>
          <section data-n55-carousel-page-name="caro-page__badges">
            <div class="badges-grid grass-branded">
              <div class="badge-item">
                <div class="badge-icon badge-icon--gold"></div>
                <div class="badge-counter">0</div>
              </div>
              <div class="badge-item">
                <div class="badge-icon badge-icon--silver"></div>
                <div class="badge-counter">0</div>
              </div>
              <div class="badge-item">
                <div class="badge-icon badge-icon--bronze"></div>
                <div class="badge-counter">0</div>
              </div>
            </div>
          </section>
          <section data-n55-carousel-page-name="caro-page__squads"
          data-n55-cloak="true">
          </section>
        </section>
      </neodigm-carousel>

      <nav class="nav__bg--green h-center">
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.INSTALL_PWA">Install App</button>
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.RESET_PASSWORD">Reset Password</button>
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.SIGNOUT">Sign Out</button>
      </nav>
      <br>
    </div>
  </template>

  <template id="sodapop_play" data-n55-sodapop-modal="true"
    data-n55-sodapop-size="xlarge" data-n55-sodapop-fullscreen="false"
    style="padding: 0;">
    <article class="play-cntr" data-current-tourn-guid="" data-current-tourn-action="">
      <div class="head-caption tourn-dashboard">
        <div class="tourn-dashboard__logo">
          <img src="https://bma-master.github.io/bma-core/img/BMT-White-Secondary.png" alt="BMA Tournament" />
        </div>
        <section class="tourn-dashboard__center">
          <h3 id="pop-play__tourn-caption--id" class="pop-play__tourn-caption">Tournament</h3>
          <p id="pop-play__tourn-tagline--id" class="pop-play__tourn-tagline">Loading...</p>
        </section>
        <div class="head-caption__close">
          <img data-sodapop-close="true"
          src="https://bma-master.github.io/bma-core/img/X-v1.png" alt="Close">
        </div>
      </div>

      <!-- Stats Dashboard -->
      <div class="tourn-dashboard__tier2">
        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">TD$ BALANCE</div>
          <div class="tourn-dashboard__stat-value" id="dashboard-td-balance">TD$ 0</div>
          <div class="tourn-dashboard__gauge">
            <div class="tourn-dashboard__gauge-fill tourn-dashboard__gauge-fill--balance" style="width: 100%"></div>
          </div>
        </div>

        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">PENDING</div>
          <div class="tourn-dashboard__stat-value tourn-dashboard__stat-value--pending" id="dashboard-td-pending">TD$ 0</div>
          <div class="tourn-dashboard__gauge">
            <div class="tourn-dashboard__gauge-fill tourn-dashboard__gauge-fill--pending" style="width: 0%"></div>
          </div>
        </div>

        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">LEADERBOARD</div>
          <div class="tourn-dashboard__stat-value" id="dashboard-rank">
            <span class="tourn-dashboard__rank-badge">-</span>
            <span class="tourn-dashboard__rank-text">-/-</span>
          </div>
        </div>

        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">PARTICIPANTS</div>
          <div class="tourn-dashboard__stat-value" id="dashboard-participants">0/0</div>
          <div class="tourn-dashboard__gauge">
            <div class="tourn-dashboard__gauge-fill tourn-dashboard__gauge-fill--participants" style="width: 0%"></div>
          </div>
        </div>
      </div>
    <!-- <br>  -->
      <nav class="nav__bg--green h-center">
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO">Info</button>
        <button id="btn-join__play--id"
        class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="display: none;">Play</button>
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD">Leaderboard</button>
      </nav>
      <br>

<neodigm-carousel id="caro-play">
    <section>
        <section data-n55-carousel-page-name="SPLASH">
            <div class="splash-lgo grass-branded h-center"
            style="height: 60vh;">
              <br><br><br><br>
              <img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="Bet Max Tourney" />
            </div>
        </section>
        <section data-n55-carousel-page-name="INFO"  QQQQdata-n55-carousel-height="auto"
        data-n55-cloak="true"
        style="QQQQmax-width: 96vw;">
            <div id="pop-play__caro-info-summary2--id" class=""></div>
            <div id="pop-play__caro-info-summary1--id" class=""></div>
            <div id="pop-play__caro-info-list--id" class=""></div>
        </section>
        <section data-n55-carousel-page-name="PLAY"  QQQQdata-n55-carousel-height="viewport"
        data-n55-cloak="true">
          <article class="bet-grid">
            <section class="bet-grid__select">
              <article class="select-grid"></article>
            </section>
            <aside class="bet-grid__slip" data-active-bet-tab="MYBETS">
              <div class="bet-grid__toggle-container">
                <button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle sections">
                  <span class="bet-grid__toggle-text">Open Bet Slip</span>
                </button>
              </div>
              <nav class="bet-slip__tabs">
                <button class="bet-slip-tab" data-bet-tab="BETSLIP">Bet Slip</button>
                <button class="bet-slip-tab" data-bet-tab="MYBETS">My Bets</button>
              </nav>
              <section class="bet-grid__slip-BETSLIP" style="display: none;"
              data-bets-valid="false">
                <div class="bet-grid__slip-BETSLIP-content">
                  <!-- Placeholder for new bet creation UI -->
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
                <!-- Historic bets populated here by JavaScript -->
              </div>
            </aside>
          </article>
        </section>
        <section data-n55-carousel-page-name="LEADERBOARD"   QQQQdata-n55-carousel-height="auto"
        data-n55-cloak="true">
          <div id="pop-play__caro-leaderboard--id"></div>
        </section>
    </section>
</neodigm-carousel>

      <br>
    </article>
  </template>

`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Co)}):document.body.insertAdjacentHTML("beforeend",Co);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const zn=su(Dm);zn.config.devtools=!1;zn.use(ru());zn.use(Fa);zn.mount("#app");if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
