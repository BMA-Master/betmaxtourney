(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function $a(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const me={},bs=[],bt=()=>{},Ro=()=>!1,An=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ua=e=>e.startsWith("onUpdate:"),ke=Object.assign,Ha=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},El=Object.prototype.hasOwnProperty,fe=(e,t)=>El.call(e,t),se=Array.isArray,ys=e=>Ws(e)==="[object Map]",Pn=e=>Ws(e)==="[object Set]",fr=e=>Ws(e)==="[object Date]",oe=e=>typeof e=="function",Ae=e=>typeof e=="string",_t=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",Lo=e=>(be(e)||oe(e))&&oe(e.then)&&oe(e.catch),Mo=Object.prototype.toString,Ws=e=>Mo.call(e),xl=e=>Ws(e).slice(8,-1),Io=e=>Ws(e)==="[object Object]",Ga=e=>Ae(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ks=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Al=/-\w/g,st=On(e=>e.replace(Al,t=>t.slice(1).toUpperCase())),Pl=/\B([A-Z])/g,Xt=On(e=>e.replace(Pl,"-$1").toLowerCase()),kn=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Yn=On(e=>e?`on${kn(e)}`:""),Kt=(e,t)=>!Object.is(e,t),on=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},Do=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},Ol=e=>{const t=parseFloat(e);return isNaN(t)?e:t},kl=e=>{const t=Ae(e)?Number(e):NaN;return isNaN(t)?e:t};let hr;const Cn=()=>hr||(hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function za(e){if(se(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],a=Ae(n)?Ml(n):za(n);if(a)for(const r in a)t[r]=a[r]}return t}else if(Ae(e)||be(e))return e}const Cl=/;(?![^(]*\))/g,Rl=/:([^]+)/,Ll=/\/\*[^]*?\*\//g;function Ml(e){const t={};return e.replace(Ll,"").split(Cl).forEach(s=>{if(s){const n=s.split(Rl);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function Wt(e){let t="";if(Ae(e))t=e;else if(se(e))for(let s=0;s<e.length;s++){const n=Wt(e[s]);n&&(t+=n+" ")}else if(be(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Dl=$a(Il);function No(e){return!!e||e===""}function Nl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=Rn(e[n],t[n]);return s}function Rn(e,t){if(e===t)return!0;let s=fr(e),n=fr(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=_t(e),n=_t(t),s||n)return e===t;if(s=se(e),n=se(t),s||n)return s&&n?Nl(e,t):!1;if(s=be(e),n=be(t),s||n){if(!s||!n)return!1;const a=Object.keys(e).length,r=Object.keys(t).length;if(a!==r)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(i&&!l||!i&&l||!Rn(e[o],t[o]))return!1}}return String(e)===String(t)}function Bo(e,t){return e.findIndex(s=>Rn(s,t))}const Fo=e=>!!(e&&e.__v_isRef===!0),$o=e=>Ae(e)?e:e==null?"":se(e)||be(e)&&(e.toString===Mo||!oe(e.toString))?Fo(e)?$o(e.value):JSON.stringify(e,Uo,2):String(e),Uo=(e,t)=>Fo(t)?Uo(e,t.value):ys(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,a],r)=>(s[Kn(n,r)+" =>"]=a,s),{})}:Pn(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>Kn(s))}:_t(t)?Kn(t):be(t)&&!se(t)&&!Io(t)?String(t):t,Kn=(e,t="")=>{var s;return _t(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Le;class Ho{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Le,!t&&Le&&(this.index=(Le.scopes||(Le.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Le;try{return Le=this,t()}finally{Le=s}}}on(){++this._on===1&&(this.prevScope=Le,Le=this)}off(){this._on>0&&--this._on===0&&(Le=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Go(e){return new Ho(e)}function zo(){return Le}function Bl(e,t=!1){Le&&Le.cleanups.push(e)}let _e;const qn=new WeakSet;class jo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Le&&Le.active&&Le.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qn.has(this)&&(qn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ko(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,gr(this),qo(this);const t=_e,s=at;_e=this,at=!0;try{return this.fn()}finally{Wo(this),_e=t,at=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Ka(t);this.deps=this.depsTail=void 0,gr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ba(this)&&this.run()}get dirty(){return ba(this)}}let Yo=0,Cs,Rs;function Ko(e,t=!1){if(e.flags|=8,t){e.next=Rs,Rs=e;return}e.next=Cs,Cs=e}function ja(){Yo++}function Ya(){if(--Yo>0)return;if(Rs){let t=Rs;for(Rs=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Cs;){let t=Cs;for(Cs=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function qo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Wo(e){let t,s=e.depsTail,n=s;for(;n;){const a=n.prevDep;n.version===-1?(n===s&&(s=a),Ka(n),Fl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=a}e.deps=t,e.depsTail=s}function ba(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===$s)||(e.globalVersion=$s,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ba(e))))return;e.flags|=2;const t=e.dep,s=_e,n=at;_e=e,at=!0;try{qo(e);const a=e.fn(e._value);(t.version===0||Kt(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{_e=s,at=n,Wo(e),e.flags&=-3}}function Ka(e,t=!1){const{dep:s,prevSub:n,nextSub:a}=e;if(n&&(n.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Ka(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Fl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let at=!0;const Jo=[];function Mt(){Jo.push(at),at=!1}function It(){const e=Jo.pop();at=e===void 0?!0:e}function gr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=_e;_e=void 0;try{t()}finally{_e=s}}}let $s=0;class $l{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!_e||!at||_e===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==_e)s=this.activeLink=new $l(_e,this),_e.deps?(s.prevDep=_e.depsTail,_e.depsTail.nextDep=s,_e.depsTail=s):_e.deps=_e.depsTail=s,Xo(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=_e.depsTail,s.nextDep=void 0,_e.depsTail.nextDep=s,_e.depsTail=s,_e.deps===s&&(_e.deps=n)}return s}trigger(t){this.version++,$s++,this.notify(t)}notify(t){ja();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Ya()}}}function Xo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Xo(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const fn=new WeakMap,ls=Symbol(""),ya=Symbol(""),Us=Symbol("");function Me(e,t,s){if(at&&_e){let n=fn.get(e);n||fn.set(e,n=new Map);let a=n.get(s);a||(n.set(s,a=new qa),a.map=n,a.key=s),a.track()}}function kt(e,t,s,n,a,r){const o=fn.get(e);if(!o){$s++;return}const i=l=>{l&&l.trigger()};if(ja(),t==="clear")o.forEach(i);else{const l=se(e),c=l&&Ga(s);if(l&&s==="length"){const d=Number(n);o.forEach((u,p)=>{(p==="length"||p===Us||!_t(p)&&p>=d)&&i(u)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),c&&i(o.get(Us)),t){case"add":l?c&&i(o.get("length")):(i(o.get(ls)),ys(e)&&i(o.get(ya)));break;case"delete":l||(i(o.get(ls)),ys(e)&&i(o.get(ya)));break;case"set":ys(e)&&i(o.get(ls));break}}Ya()}function Ul(e,t){const s=fn.get(e);return s&&s.get(t)}function ps(e){const t=ue(e);return t===e?t:(Me(t,"iterate",Us),rt(e)?t:t.map(Be))}function Wa(e){return Me(e=ue(e),"iterate",Us),e}const Hl={__proto__:null,[Symbol.iterator](){return Wn(this,Symbol.iterator,Be)},concat(...e){return ps(this).concat(...e.map(t=>se(t)?ps(t):t))},entries(){return Wn(this,"entries",e=>(e[1]=Be(e[1]),e))},every(e,t){return wt(this,"every",e,t,void 0,arguments)},filter(e,t){return wt(this,"filter",e,t,s=>s.map(Be),arguments)},find(e,t){return wt(this,"find",e,t,Be,arguments)},findIndex(e,t){return wt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return wt(this,"findLast",e,t,Be,arguments)},findLastIndex(e,t){return wt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return wt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Vn(this,"includes",e)},indexOf(...e){return Vn(this,"indexOf",e)},join(e){return ps(this).join(e)},lastIndexOf(...e){return Vn(this,"lastIndexOf",e)},map(e,t){return wt(this,"map",e,t,void 0,arguments)},pop(){return Es(this,"pop")},push(...e){return Es(this,"push",e)},reduce(e,...t){return mr(this,"reduce",e,t)},reduceRight(e,...t){return mr(this,"reduceRight",e,t)},shift(){return Es(this,"shift")},some(e,t){return wt(this,"some",e,t,void 0,arguments)},splice(...e){return Es(this,"splice",e)},toReversed(){return ps(this).toReversed()},toSorted(e){return ps(this).toSorted(e)},toSpliced(...e){return ps(this).toSpliced(...e)},unshift(...e){return Es(this,"unshift",e)},values(){return Wn(this,"values",Be)}};function Wn(e,t,s){const n=Wa(e),a=n[t]();return n!==e&&!rt(e)&&(a._next=a.next,a.next=()=>{const r=a._next();return r.done||(r.value=s(r.value)),r}),a}const Gl=Array.prototype;function wt(e,t,s,n,a,r){const o=Wa(e),i=o!==e&&!rt(e),l=o[t];if(l!==Gl[t]){const u=l.apply(e,r);return i?Be(u):u}let c=s;o!==e&&(i?c=function(u,p){return s.call(this,Be(u),p,e)}:s.length>2&&(c=function(u,p){return s.call(this,u,p,e)}));const d=l.call(o,c,n);return i&&a?a(d):d}function mr(e,t,s,n){const a=Wa(e);let r=s;return a!==e&&(rt(e)?s.length>3&&(r=function(o,i,l){return s.call(this,o,i,l,e)}):r=function(o,i,l){return s.call(this,o,Be(i),l,e)}),a[t](r,...n)}function Vn(e,t,s){const n=ue(e);Me(n,"iterate",Us);const a=n[t](...s);return(a===-1||a===!1)&&Xa(s[0])?(s[0]=ue(s[0]),n[t](...s)):a}function Es(e,t,s=[]){Mt(),ja();const n=ue(e)[t].apply(e,s);return Ya(),It(),n}const zl=$a("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t));function jl(e){_t(e)||(e=String(e));const t=ue(this);return Me(t,"has",e),t.hasOwnProperty(e)}class Zo{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const a=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return r;if(s==="__v_raw")return n===(a?r?ec:ni:r?si:ti).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=se(t);if(!a){let l;if(o&&(l=Hl[s]))return l;if(s==="hasOwnProperty")return jl}const i=Reflect.get(t,s,xe(t)?t:n);if((_t(s)?Qo.has(s):zl(s))||(a||Me(t,"get",s),r))return i;if(xe(i)){const l=o&&Ga(s)?i:i.value;return a&&be(l)?va(l):l}return be(i)?a?va(i):Rt(i):i}}class ei extends Zo{constructor(t=!1){super(!1,t)}set(t,s,n,a){let r=t[s];if(!this._isShallow){const l=us(r);if(!rt(n)&&!us(n)&&(r=ue(r),n=ue(n)),!se(t)&&xe(r)&&!xe(n))return l||(r.value=n),!0}const o=se(t)&&Ga(s)?Number(s)<t.length:fe(t,s),i=Reflect.set(t,s,n,xe(t)?t:a);return t===ue(a)&&(o?Kt(n,r)&&kt(t,"set",s,n):kt(t,"add",s,n)),i}deleteProperty(t,s){const n=fe(t,s);t[s];const a=Reflect.deleteProperty(t,s);return a&&n&&kt(t,"delete",s,void 0),a}has(t,s){const n=Reflect.has(t,s);return(!_t(s)||!Qo.has(s))&&Me(t,"has",s),n}ownKeys(t){return Me(t,"iterate",se(t)?"length":ls),Reflect.ownKeys(t)}}class Yl extends Zo{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Kl=new ei,ql=new Yl,Wl=new ei(!0);const _a=e=>e,Qs=e=>Reflect.getPrototypeOf(e);function Vl(e,t,s){return function(...n){const a=this.__v_raw,r=ue(a),o=ys(r),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...n),d=s?_a:t?Ta:Be;return!t&&Me(r,"iterate",l?ya:ls),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:i?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Zs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jl(e,t){const s={get(a){const r=this.__v_raw,o=ue(r),i=ue(a);e||(Kt(a,i)&&Me(o,"get",a),Me(o,"get",i));const{has:l}=Qs(o),c=t?_a:e?Ta:Be;if(l.call(o,a))return c(r.get(a));if(l.call(o,i))return c(r.get(i));r!==o&&r.get(a)},get size(){const a=this.__v_raw;return!e&&Me(ue(a),"iterate",ls),a.size},has(a){const r=this.__v_raw,o=ue(r),i=ue(a);return e||(Kt(a,i)&&Me(o,"has",a),Me(o,"has",i)),a===i?r.has(a):r.has(a)||r.has(i)},forEach(a,r){const o=this,i=o.__v_raw,l=ue(i),c=t?_a:e?Ta:Be;return!e&&Me(l,"iterate",ls),i.forEach((d,u)=>a.call(r,c(d),c(u),o))}};return ke(s,e?{add:Zs("add"),set:Zs("set"),delete:Zs("delete"),clear:Zs("clear")}:{add(a){!t&&!rt(a)&&!us(a)&&(a=ue(a));const r=ue(this);return Qs(r).has.call(r,a)||(r.add(a),kt(r,"add",a,a)),this},set(a,r){!t&&!rt(r)&&!us(r)&&(r=ue(r));const o=ue(this),{has:i,get:l}=Qs(o);let c=i.call(o,a);c||(a=ue(a),c=i.call(o,a));const d=l.call(o,a);return o.set(a,r),c?Kt(r,d)&&kt(o,"set",a,r):kt(o,"add",a,r),this},delete(a){const r=ue(this),{has:o,get:i}=Qs(r);let l=o.call(r,a);l||(a=ue(a),l=o.call(r,a)),i&&i.call(r,a);const c=r.delete(a);return l&&kt(r,"delete",a,void 0),c},clear(){const a=ue(this),r=a.size!==0,o=a.clear();return r&&kt(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=Vl(a,e,t)}),s}function Va(e,t){const s=Jl(e,t);return(n,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?n:Reflect.get(fe(s,a)&&a in n?s:n,a,r)}const Xl={get:Va(!1,!1)},Ql={get:Va(!1,!0)},Zl={get:Va(!0,!1)};const ti=new WeakMap,si=new WeakMap,ni=new WeakMap,ec=new WeakMap;function tc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sc(e){return e.__v_skip||!Object.isExtensible(e)?0:tc(xl(e))}function Rt(e){return us(e)?e:Ja(e,!1,Kl,Xl,ti)}function ai(e){return Ja(e,!1,Wl,Ql,si)}function va(e){return Ja(e,!0,ql,Zl,ni)}function Ja(e,t,s,n,a){if(!be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=sc(e);if(r===0)return e;const o=a.get(e);if(o)return o;const i=new Proxy(e,r===2?n:s);return a.set(e,i),i}function cs(e){return us(e)?cs(e.__v_raw):!!(e&&e.__v_isReactive)}function us(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function Xa(e){return e?!!e.__v_raw:!1}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function Qa(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&Do(e,"__v_skip",!0),e}const Be=e=>be(e)?Rt(e):e,Ta=e=>be(e)?va(e):e;function xe(e){return e?e.__v_isRef===!0:!1}function Xe(e){return ri(e,!1)}function nc(e){return ri(e,!0)}function ri(e,t){return xe(e)?e:new ac(e,t)}class ac{constructor(t,s){this.dep=new qa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ue(t),this._value=s?t:Be(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||rt(t)||us(t);t=n?t:ue(t),Kt(t,s)&&(this._rawValue=t,this._value=n?t:Be(t),this.dep.trigger())}}function qt(e){return xe(e)?e.value:e}const rc={get:(e,t,s)=>t==="__v_raw"?e:qt(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const a=e[t];return xe(a)&&!xe(s)?(a.value=s,!0):Reflect.set(e,t,s,n)}};function oi(e){return cs(e)?e:new Proxy(e,rc)}function oc(e){const t=se(e)?new Array(e.length):{};for(const s in e)t[s]=lc(e,s);return t}class ic{constructor(t,s,n){this._object=t,this._key=s,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ul(ue(this._object),this._key)}}function lc(e,t,s){const n=e[t];return xe(n)?n:new ic(e,t,s)}class cc{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new qa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return Ko(this,!0),!0}get value(){const t=this.dep.track();return Vo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function dc(e,t,s=!1){let n,a;return oe(e)?n=e:(n=e.get,a=e.set),new cc(n,a,s)}const en={},hn=new WeakMap;let as;function uc(e,t=!1,s=as){if(s){let n=hn.get(s);n||hn.set(s,n=[]),n.push(e)}}function pc(e,t,s=me){const{immediate:n,deep:a,once:r,scheduler:o,augmentJob:i,call:l}=s,c=y=>a?y:rt(y)||a===!1||a===0?Ct(y,1):Ct(y);let d,u,p,f,b=!1,g=!1;if(xe(e)?(u=()=>e.value,b=rt(e)):cs(e)?(u=()=>c(e),b=!0):se(e)?(g=!0,b=e.some(y=>cs(y)||rt(y)),u=()=>e.map(y=>{if(xe(y))return y.value;if(cs(y))return c(y);if(oe(y))return l?l(y,2):y()})):oe(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){Mt();try{p()}finally{It()}}const y=as;as=d;try{return l?l(e,3,[f]):e(f)}finally{as=y}}:u=bt,t&&a){const y=u,w=a===!0?1/0:a;u=()=>Ct(y(),w)}const m=zo(),h=()=>{d.stop(),m&&m.active&&Ha(m.effects,d)};if(r&&t){const y=t;t=(...w)=>{y(...w),h()}}let v=g?new Array(e.length).fill(en):en;const _=y=>{if(!(!(d.flags&1)||!d.dirty&&!y))if(t){const w=d.run();if(a||b||(g?w.some((E,P)=>Kt(E,v[P])):Kt(w,v))){p&&p();const E=as;as=d;try{const P=[w,v===en?void 0:g&&v[0]===en?[]:v,f];v=w,l?l(t,3,P):t(...P)}finally{as=E}}}else d.run()};return i&&i(_),d=new jo(u),d.scheduler=o?()=>o(_,!1):_,f=y=>uc(y,!1,d),p=d.onStop=()=>{const y=hn.get(d);if(y){if(l)l(y,4);else for(const w of y)w();hn.delete(d)}},t?n?_(!0):v=d.run():o?o(_.bind(null,!0),!0):d.run(),h.pause=d.pause.bind(d),h.resume=d.resume.bind(d),h.stop=h,h}function Ct(e,t=1/0,s){if(t<=0||!be(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,xe(e))Ct(e.value,t,s);else if(se(e))for(let n=0;n<e.length;n++)Ct(e[n],t,s);else if(Pn(e)||ys(e))e.forEach(n=>{Ct(n,t,s)});else if(Io(e)){for(const n in e)Ct(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ct(e[n],t,s)}return e}function Vs(e,t,s,n){try{return n?e(...n):e()}catch(a){Ln(a,t,s)}}function ot(e,t,s,n){if(oe(e)){const a=Vs(e,t,s,n);return a&&Lo(a)&&a.catch(r=>{Ln(r,t,s)}),a}if(se(e)){const a=[];for(let r=0;r<e.length;r++)a.push(ot(e[r],t,s,n));return a}}function Ln(e,t,s,n=!0){const a=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||me;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}i=i.parent}if(r){Mt(),Vs(r,null,10,[e,l,c]),It();return}}fc(e,s,a,n,o)}function fc(e,t,s,n=!0,a=!1){if(a)throw e;console.error(e)}const Fe=[];let pt=-1;const _s=[];let Ht=null,gs=0;const ii=Promise.resolve();let gn=null;function Za(e){const t=gn||ii;return e?t.then(this?e.bind(this):e):t}function hc(e){let t=pt+1,s=Fe.length;for(;t<s;){const n=t+s>>>1,a=Fe[n],r=Hs(a);r<e||r===e&&a.flags&2?t=n+1:s=n}return t}function er(e){if(!(e.flags&1)){const t=Hs(e),s=Fe[Fe.length-1];!s||!(e.flags&2)&&t>=Hs(s)?Fe.push(e):Fe.splice(hc(t),0,e),e.flags|=1,li()}}function li(){gn||(gn=ii.then(di))}function gc(e){se(e)?_s.push(...e):Ht&&e.id===-1?Ht.splice(gs+1,0,e):e.flags&1||(_s.push(e),e.flags|=1),li()}function br(e,t,s=pt+1){for(;s<Fe.length;s++){const n=Fe[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Fe.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ci(e){if(_s.length){const t=[...new Set(_s)].sort((s,n)=>Hs(s)-Hs(n));if(_s.length=0,Ht){Ht.push(...t);return}for(Ht=t,gs=0;gs<Ht.length;gs++){const s=Ht[gs];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Ht=null,gs=0}}const Hs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function di(e){try{for(pt=0;pt<Fe.length;pt++){const t=Fe[pt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;pt<Fe.length;pt++){const t=Fe[pt];t&&(t.flags&=-2)}pt=-1,Fe.length=0,ci(),gn=null,(Fe.length||_s.length)&&di()}}let Ve=null,ui=null;function mn(e){const t=Ve;return Ve=e,ui=e&&e.type.__scopeId||null,t}function wa(e,t=Ve,s){if(!t||e._n)return e;const n=(...a)=>{n._d&&_n(-1);const r=mn(t);let o;try{o=e(...a)}finally{mn(r),n._d&&_n(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function mc(e,t){if(Ve===null)return e;const s=$n(Ve),n=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[r,o,i,l=me]=t[a];r&&(oe(r)&&(r={mounted:r,updated:r}),r.deep&&Ct(o),n.push({dir:r,instance:s,value:o,oldValue:void 0,arg:i,modifiers:l}))}return e}function es(e,t,s,n){const a=e.dirs,r=t&&t.dirs;for(let o=0;o<a.length;o++){const i=a[o];r&&(i.oldValue=r[o].value);let l=i.dir[n];l&&(Mt(),ot(l,s,8,[e.el,i,e,t]),It())}}const bc=Symbol("_vte"),pi=e=>e.__isTeleport,Pt=Symbol("_leaveCb"),tn=Symbol("_enterCb");function yc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Bt(()=>{e.isMounted=!0}),Ti(()=>{e.isUnmounting=!0}),e}const Qe=[Function,Array],fi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Qe,onEnter:Qe,onAfterEnter:Qe,onEnterCancelled:Qe,onBeforeLeave:Qe,onLeave:Qe,onAfterLeave:Qe,onLeaveCancelled:Qe,onBeforeAppear:Qe,onAppear:Qe,onAfterAppear:Qe,onAppearCancelled:Qe},hi=e=>{const t=e.subTree;return t.component?hi(t.component):t},_c={name:"BaseTransition",props:fi,setup(e,{slots:t}){const s=ar(),n=yc();return()=>{const a=t.default&&bi(t.default(),!0);if(!a||!a.length)return;const r=gi(a),o=ue(e),{mode:i}=o;if(n.isLeaving)return Jn(r);const l=yr(r);if(!l)return Jn(r);let c=Sa(l,o,n,s,u=>c=u);l.type!==qe&&Gs(l,c);let d=s.subTree&&yr(s.subTree);if(d&&d.type!==qe&&!rs(d,l)&&hi(s).type!==qe){let u=Sa(d,o,n,s);if(Gs(d,u),i==="out-in"&&l.type!==qe)return n.isLeaving=!0,u.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,d=void 0},Jn(r);i==="in-out"&&l.type!==qe?u.delayLeave=(p,f,b)=>{const g=mi(n,d);g[String(d.key)]=d,p[Pt]=()=>{f(),p[Pt]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{b(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function gi(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==qe){t=s;break}}return t}const vc=_c;function mi(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function Sa(e,t,s,n,a){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:b,onLeaveCancelled:g,onBeforeAppear:m,onAppear:h,onAfterAppear:v,onAppearCancelled:_}=t,y=String(e.key),w=mi(s,e),E=(x,T)=>{x&&ot(x,n,9,T)},P=(x,T)=>{const k=T[1];E(x,T),se(x)?x.every(C=>C.length<=1)&&k():x.length<=1&&k()},O={mode:o,persisted:i,beforeEnter(x){let T=l;if(!s.isMounted)if(r)T=m||l;else return;x[Pt]&&x[Pt](!0);const k=w[y];k&&rs(e,k)&&k.el[Pt]&&k.el[Pt](),E(T,[x])},enter(x){let T=c,k=d,C=u;if(!s.isMounted)if(r)T=h||c,k=v||d,C=_||u;else return;let G=!1;const q=x[tn]=Q=>{G||(G=!0,Q?E(C,[x]):E(k,[x]),O.delayedLeave&&O.delayedLeave(),x[tn]=void 0)};T?P(T,[x,q]):q()},leave(x,T){const k=String(e.key);if(x[tn]&&x[tn](!0),s.isUnmounting)return T();E(p,[x]);let C=!1;const G=x[Pt]=q=>{C||(C=!0,T(),q?E(g,[x]):E(b,[x]),x[Pt]=void 0,w[k]===e&&delete w[k])};w[k]=e,f?P(f,[x,G]):G()},clone(x){const T=Sa(x,t,s,n,a);return a&&a(T),T}};return O}function Jn(e){if(Mn(e))return e=Vt(e),e.children=null,e}function yr(e){if(!Mn(e))return pi(e.type)&&e.children?gi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&oe(s.default))return s.default()}}function Gs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function bi(e,t=!1,s){let n=[],a=0;for(let r=0;r<e.length;r++){let o=e[r];const i=s==null?o.key:String(s)+String(o.key!=null?o.key:r);o.type===ht?(o.patchFlag&128&&a++,n=n.concat(bi(o.children,t,i))):(t||o.type!==qe)&&n.push(i!=null?Vt(o,{key:i}):o)}if(a>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function yi(e,t){return oe(e)?ke({name:e.name},t,{setup:e}):e}function _i(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const bn=new WeakMap;function Ls(e,t,s,n,a=!1){if(se(e)){e.forEach((b,g)=>Ls(b,t&&(se(t)?t[g]:t),s,n,a));return}if(Ms(n)&&!a){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ls(e,t,s,n.component.subTree);return}const r=n.shapeFlag&4?$n(n.component):n.el,o=a?null:r,{i,r:l}=e,c=t&&t.r,d=i.refs===me?i.refs={}:i.refs,u=i.setupState,p=ue(u),f=u===me?Ro:b=>fe(p,b);if(c!=null&&c!==l){if(_r(t),Ae(c))d[c]=null,f(c)&&(u[c]=null);else if(xe(c)){c.value=null;const b=t;b.k&&(d[b.k]=null)}}if(oe(l))Vs(l,i,12,[o,d]);else{const b=Ae(l),g=xe(l);if(b||g){const m=()=>{if(e.f){const h=b?f(l)?u[l]:d[l]:l.value;if(a)se(h)&&Ha(h,r);else if(se(h))h.includes(r)||h.push(r);else if(b)d[l]=[r],f(l)&&(u[l]=d[l]);else{const v=[r];l.value=v,e.k&&(d[e.k]=v)}}else b?(d[l]=o,f(l)&&(u[l]=o)):g&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const h=()=>{m(),bn.delete(e)};h.id=-1,bn.set(e,h),je(h,s)}else _r(e),m()}}}function _r(e){const t=bn.get(e);t&&(t.flags|=8,bn.delete(e))}Cn().requestIdleCallback;Cn().cancelIdleCallback;const Ms=e=>!!e.type.__asyncLoader,Mn=e=>e.type.__isKeepAlive;function Tc(e,t){vi(e,"a",t)}function wc(e,t){vi(e,"da",t)}function vi(e,t,s=Ie){const n=e.__wdc||(e.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(In(t,n,s),s){let a=s.parent;for(;a&&a.parent;)Mn(a.parent.vnode)&&Sc(n,t,s,a),a=a.parent}}function Sc(e,t,s,n){const a=In(t,e,n,!0);Dn(()=>{Ha(n[t],a)},s)}function In(e,t,s=Ie,n=!1){if(s){const a=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{Mt();const i=Js(s),l=ot(t,s,e,o);return i(),It(),l});return n?a.unshift(r):a.push(r),r}}const Nt=e=>(t,s=Ie)=>{(!js||e==="sp")&&In(e,(...n)=>t(...n),s)},Ec=Nt("bm"),Bt=Nt("m"),xc=Nt("bu"),Ac=Nt("u"),Ti=Nt("bum"),Dn=Nt("um"),Pc=Nt("sp"),Oc=Nt("rtg"),kc=Nt("rtc");function Cc(e,t=Ie){In("ec",e,t)}const Rc="components",wi=Symbol.for("v-ndc");function Lc(e){return Ae(e)?Mc(Rc,e,!1)||e:e||wi}function Mc(e,t,s=!0,n=!1){const a=Ve||Ie;if(a){const r=a.type;{const i=Td(r,!1);if(i&&(i===t||i===st(t)||i===kn(st(t))))return r}const o=vr(a[e]||r[e],t)||vr(a.appContext[e],t);return!o&&n?r:o}}function vr(e,t){return e&&(e[t]||e[st(t)]||e[kn(st(t))])}const Ea=e=>e?Gi(e)?$n(e):Ea(e.parent):null,Is=ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ea(e.parent),$root:e=>Ea(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Ei(e),$forceUpdate:e=>e.f||(e.f=()=>{er(e.update)}),$nextTick:e=>e.n||(e.n=Za.bind(e.proxy)),$watch:e=>td.bind(e)}),Xn=(e,t)=>e!==me&&!e.__isScriptSetup&&fe(e,t),Ic={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:a,props:r,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return n[t];case 2:return a[t];case 4:return s[t];case 3:return r[t]}else{if(Xn(n,t))return o[t]=1,n[t];if(a!==me&&fe(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&fe(c,t))return o[t]=3,r[t];if(s!==me&&fe(s,t))return o[t]=4,s[t];xa&&(o[t]=0)}}const d=Is[t];let u,p;if(d)return t==="$attrs"&&Me(e.attrs,"get",""),d(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(s!==me&&fe(s,t))return o[t]=4,s[t];if(p=l.config.globalProperties,fe(p,t))return p[t]},set({_:e},t,s){const{data:n,setupState:a,ctx:r}=e;return Xn(a,t)?(a[t]=s,!0):n!==me&&fe(n,t)?(n[t]=s,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:a,propsOptions:r,type:o}},i){let l,c;return!!(s[i]||e!==me&&i[0]!=="$"&&fe(e,i)||Xn(t,i)||(l=r[0])&&fe(l,i)||fe(n,i)||fe(Is,i)||fe(a.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:fe(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Tr(e){return se(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let xa=!0;function Dc(e){const t=Ei(e),s=e.proxy,n=e.ctx;xa=!1,t.beforeCreate&&wr(t.beforeCreate,e,"bc");const{data:a,computed:r,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:b,activated:g,deactivated:m,beforeDestroy:h,beforeUnmount:v,destroyed:_,unmounted:y,render:w,renderTracked:E,renderTriggered:P,errorCaptured:O,serverPrefetch:x,expose:T,inheritAttrs:k,components:C,directives:G,filters:q}=t;if(c&&Nc(c,n,null),o)for(const z in o){const U=o[z];oe(U)&&(n[z]=U.bind(s))}if(a){const z=a.call(s,s);be(z)&&(e.data=Rt(z))}if(xa=!0,r)for(const z in r){const U=r[z],ee=oe(U)?U.bind(s,s):oe(U.get)?U.get.bind(s,s):bt,ae=!oe(U)&&oe(U.set)?U.set.bind(s):bt,le=We({get:ee,set:ae});Object.defineProperty(n,z,{enumerable:!0,configurable:!0,get:()=>le.value,set:ie=>le.value=ie})}if(i)for(const z in i)Si(i[z],n,s,z);if(l){const z=oe(l)?l.call(s):l;Reflect.ownKeys(z).forEach(U=>{ln(U,z[U])})}d&&wr(d,e,"c");function D(z,U){se(U)?U.forEach(ee=>z(ee.bind(s))):U&&z(U.bind(s))}if(D(Ec,u),D(Bt,p),D(xc,f),D(Ac,b),D(Tc,g),D(wc,m),D(Cc,O),D(kc,E),D(Oc,P),D(Ti,v),D(Dn,y),D(Pc,x),se(T))if(T.length){const z=e.exposed||(e.exposed={});T.forEach(U=>{Object.defineProperty(z,U,{get:()=>s[U],set:ee=>s[U]=ee,enumerable:!0})})}else e.exposed||(e.exposed={});w&&e.render===bt&&(e.render=w),k!=null&&(e.inheritAttrs=k),C&&(e.components=C),G&&(e.directives=G),x&&_i(e)}function Nc(e,t,s=bt){se(e)&&(e=Aa(e));for(const n in e){const a=e[n];let r;be(a)?"default"in a?r=tt(a.from||n,a.default,!0):r=tt(a.from||n):r=tt(a),xe(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function wr(e,t,s){ot(se(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Si(e,t,s,n){let a=n.includes(".")?Bi(s,n):()=>s[n];if(Ae(e)){const r=t[e];oe(r)&&Ds(a,r)}else if(oe(e))Ds(a,e.bind(s));else if(be(e))if(se(e))e.forEach(r=>Si(r,t,s,n));else{const r=oe(e.handler)?e.handler.bind(s):t[e.handler];oe(r)&&Ds(a,r,e)}}function Ei(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:a,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(t);let l;return i?l=i:!a.length&&!s&&!n?l=t:(l={},a.length&&a.forEach(c=>yn(l,c,o,!0)),yn(l,t,o)),be(t)&&r.set(t,l),l}function yn(e,t,s,n=!1){const{mixins:a,extends:r}=t;r&&yn(e,r,s,!0),a&&a.forEach(o=>yn(e,o,s,!0));for(const o in t)if(!(n&&o==="expose")){const i=Bc[o]||s&&s[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Bc={data:Sr,props:Er,emits:Er,methods:Ps,computed:Ps,beforeCreate:De,created:De,beforeMount:De,mounted:De,beforeUpdate:De,updated:De,beforeDestroy:De,beforeUnmount:De,destroyed:De,unmounted:De,activated:De,deactivated:De,errorCaptured:De,serverPrefetch:De,components:Ps,directives:Ps,watch:$c,provide:Sr,inject:Fc};function Sr(e,t){return t?e?function(){return ke(oe(e)?e.call(this,this):e,oe(t)?t.call(this,this):t)}:t:e}function Fc(e,t){return Ps(Aa(e),Aa(t))}function Aa(e){if(se(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function De(e,t){return e?[...new Set([].concat(e,t))]:t}function Ps(e,t){return e?ke(Object.create(null),e,t):t}function Er(e,t){return e?se(e)&&se(t)?[...new Set([...e,...t])]:ke(Object.create(null),Tr(e),Tr(t??{})):t}function $c(e,t){if(!e)return t;if(!t)return e;const s=ke(Object.create(null),e);for(const n in t)s[n]=De(e[n],t[n]);return s}function xi(){return{app:null,config:{isNativeTag:Ro,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uc=0;function Hc(e,t){return function(n,a=null){oe(n)||(n=ke({},n)),a!=null&&!be(a)&&(a=null);const r=xi(),o=new WeakSet,i=[];let l=!1;const c=r.app={_uid:Uc++,_component:n,_props:a,_container:null,_context:r,_instance:null,version:Sd,get config(){return r.config},set config(d){},use(d,...u){return o.has(d)||(d&&oe(d.install)?(o.add(d),d.install(c,...u)):oe(d)&&(o.add(d),d(c,...u))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,u){return u?(r.components[d]=u,c):r.components[d]},directive(d,u){return u?(r.directives[d]=u,c):r.directives[d]},mount(d,u,p){if(!l){const f=c._ceVNode||Ge(n,a);return f.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),l=!0,c._container=d,d.__vue_app__=c,$n(f.component)}},onUnmount(d){i.push(d)},unmount(){l&&(ot(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return r.provides[d]=u,c},runWithContext(d){const u=ds;ds=c;try{return d()}finally{ds=u}}};return c}}let ds=null;function ln(e,t){if(Ie){let s=Ie.provides;const n=Ie.parent&&Ie.parent.provides;n===s&&(s=Ie.provides=Object.create(n)),s[e]=t}}function tt(e,t,s=!1){const n=ar();if(n||ds){let a=ds?ds._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return s&&oe(t)?t.call(n&&n.proxy):t}}function Gc(){return!!(ar()||ds)}const Ai={},Pi=()=>Object.create(Ai),Oi=e=>Object.getPrototypeOf(e)===Ai;function zc(e,t,s,n=!1){const a={},r=Pi();e.propsDefaults=Object.create(null),ki(e,t,a,r);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);s?e.props=n?a:ai(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function jc(e,t,s,n){const{props:a,attrs:r,vnode:{patchFlag:o}}=e,i=ue(a),[l]=e.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Nn(e.emitsOptions,p))continue;const f=t[p];if(l)if(fe(r,p))f!==r[p]&&(r[p]=f,c=!0);else{const b=st(p);a[b]=Pa(l,i,b,f,e,!1)}else f!==r[p]&&(r[p]=f,c=!0)}}}else{ki(e,t,a,r)&&(c=!0);let d;for(const u in i)(!t||!fe(t,u)&&((d=Xt(u))===u||!fe(t,d)))&&(l?s&&(s[u]!==void 0||s[d]!==void 0)&&(a[u]=Pa(l,i,u,void 0,e,!0)):delete a[u]);if(r!==i)for(const u in r)(!t||!fe(t,u))&&(delete r[u],c=!0)}c&&kt(e.attrs,"set","")}function ki(e,t,s,n){const[a,r]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(ks(l))continue;const c=t[l];let d;a&&fe(a,d=st(l))?!r||!r.includes(d)?s[d]=c:(i||(i={}))[d]=c:Nn(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=ue(s),c=i||me;for(let d=0;d<r.length;d++){const u=r[d];s[u]=Pa(a,l,u,c[u],e,!fe(c,u))}}return o}function Pa(e,t,s,n,a,r){const o=e[s];if(o!=null){const i=fe(o,"default");if(i&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&oe(l)){const{propsDefaults:c}=a;if(s in c)n=c[s];else{const d=Js(a);n=c[s]=l.call(null,t),d()}}else n=l;a.ce&&a.ce._setProp(s,n)}o[0]&&(r&&!i?n=!1:o[1]&&(n===""||n===Xt(s))&&(n=!0))}return n}const Yc=new WeakMap;function Ci(e,t,s=!1){const n=s?Yc:t.propsCache,a=n.get(e);if(a)return a;const r=e.props,o={},i=[];let l=!1;if(!oe(e)){const d=u=>{l=!0;const[p,f]=Ci(u,t,!0);ke(o,p),f&&i.push(...f)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!l)return be(e)&&n.set(e,bs),bs;if(se(r))for(let d=0;d<r.length;d++){const u=st(r[d]);xr(u)&&(o[u]=me)}else if(r)for(const d in r){const u=st(d);if(xr(u)){const p=r[d],f=o[u]=se(p)||oe(p)?{type:p}:ke({},p),b=f.type;let g=!1,m=!0;if(se(b))for(let h=0;h<b.length;++h){const v=b[h],_=oe(v)&&v.name;if(_==="Boolean"){g=!0;break}else _==="String"&&(m=!1)}else g=oe(b)&&b.name==="Boolean";f[0]=g,f[1]=m,(g||fe(f,"default"))&&i.push(u)}}const c=[o,i];return be(e)&&n.set(e,c),c}function xr(e){return e[0]!=="$"&&!ks(e)}const tr=e=>e==="_"||e==="_ctx"||e==="$stable",sr=e=>se(e)?e.map(gt):[gt(e)],Kc=(e,t,s)=>{if(t._n)return t;const n=wa((...a)=>sr(t(...a)),s);return n._c=!1,n},Ri=(e,t,s)=>{const n=e._ctx;for(const a in e){if(tr(a))continue;const r=e[a];if(oe(r))t[a]=Kc(a,r,n);else if(r!=null){const o=sr(r);t[a]=()=>o}}},Li=(e,t)=>{const s=sr(t);e.slots.default=()=>s},Mi=(e,t,s)=>{for(const n in t)(s||!tr(n))&&(e[n]=t[n])},qc=(e,t,s)=>{const n=e.slots=Pi();if(e.vnode.shapeFlag&32){const a=t._;a?(Mi(n,t,s),s&&Do(n,"_",a,!0)):Ri(t,n)}else t&&Li(e,t)},Wc=(e,t,s)=>{const{vnode:n,slots:a}=e;let r=!0,o=me;if(n.shapeFlag&32){const i=t._;i?s&&i===1?r=!1:Mi(a,t,s):(r=!t.$stable,Ri(t,a)),o=t}else t&&(Li(e,t),o={default:1});if(r)for(const i in a)!tr(i)&&o[i]==null&&delete a[i]},je=cd;function Vc(e){return Jc(e)}function Jc(e,t){const s=Cn();s.__VUE__=!0;const{insert:n,remove:a,patchProp:r,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=bt,insertStaticContent:b}=e,g=(S,A,R,B=null,F=null,N=null,V=void 0,K=null,j=!!A.dynamicChildren)=>{if(S===A)return;S&&!rs(S,A)&&(B=I(S),ie(S,F,N,!0),S=null),A.patchFlag===-2&&(j=!1,A.dynamicChildren=null);const{type:H,ref:ne,shapeFlag:X}=A;switch(H){case Bn:m(S,A,R,B);break;case qe:h(S,A,R,B);break;case cn:S==null&&v(A,R,B,V);break;case ht:C(S,A,R,B,F,N,V,K,j);break;default:X&1?w(S,A,R,B,F,N,V,K,j):X&6?G(S,A,R,B,F,N,V,K,j):(X&64||X&128)&&H.process(S,A,R,B,F,N,V,K,j,Z)}ne!=null&&F?Ls(ne,S&&S.ref,N,A||S,!A):ne==null&&S&&S.ref!=null&&Ls(S.ref,null,N,S,!0)},m=(S,A,R,B)=>{if(S==null)n(A.el=i(A.children),R,B);else{const F=A.el=S.el;A.children!==S.children&&c(F,A.children)}},h=(S,A,R,B)=>{S==null?n(A.el=l(A.children||""),R,B):A.el=S.el},v=(S,A,R,B)=>{[S.el,S.anchor]=b(S.children,A,R,B,S.el,S.anchor)},_=({el:S,anchor:A},R,B)=>{let F;for(;S&&S!==A;)F=p(S),n(S,R,B),S=F;n(A,R,B)},y=({el:S,anchor:A})=>{let R;for(;S&&S!==A;)R=p(S),a(S),S=R;a(A)},w=(S,A,R,B,F,N,V,K,j)=>{if(A.type==="svg"?V="svg":A.type==="math"&&(V="mathml"),S==null)E(A,R,B,F,N,V,K,j);else{const H=S.el&&S.el._isVueCE?S.el:null;try{H&&H._beginPatch(),x(S,A,F,N,V,K,j)}finally{H&&H._endPatch()}}},E=(S,A,R,B,F,N,V,K)=>{let j,H;const{props:ne,shapeFlag:X,transition:te,dirs:re}=S;if(j=S.el=o(S.type,N,ne&&ne.is,ne),X&8?d(j,S.children):X&16&&O(S.children,j,null,B,F,Qn(S,N),V,K),re&&es(S,null,B,"created"),P(j,S,S.scopeId,V,B),ne){for(const ye in ne)ye!=="value"&&!ks(ye)&&r(j,ye,null,ne[ye],N,B);"value"in ne&&r(j,"value",null,ne.value,N),(H=ne.onVnodeBeforeMount)&&ut(H,B,S)}re&&es(S,null,B,"beforeMount");const de=Xc(F,te);de&&te.beforeEnter(j),n(j,A,R),((H=ne&&ne.onVnodeMounted)||de||re)&&je(()=>{H&&ut(H,B,S),de&&te.enter(j),re&&es(S,null,B,"mounted")},F)},P=(S,A,R,B,F)=>{if(R&&f(S,R),B)for(let N=0;N<B.length;N++)f(S,B[N]);if(F){let N=F.subTree;if(A===N||$i(N.type)&&(N.ssContent===A||N.ssFallback===A)){const V=F.vnode;P(S,V,V.scopeId,V.slotScopeIds,F.parent)}}},O=(S,A,R,B,F,N,V,K,j=0)=>{for(let H=j;H<S.length;H++){const ne=S[H]=K?Gt(S[H]):gt(S[H]);g(null,ne,A,R,B,F,N,V,K)}},x=(S,A,R,B,F,N,V)=>{const K=A.el=S.el;let{patchFlag:j,dynamicChildren:H,dirs:ne}=A;j|=S.patchFlag&16;const X=S.props||me,te=A.props||me;let re;if(R&&ts(R,!1),(re=te.onVnodeBeforeUpdate)&&ut(re,R,A,S),ne&&es(A,S,R,"beforeUpdate"),R&&ts(R,!0),(X.innerHTML&&te.innerHTML==null||X.textContent&&te.textContent==null)&&d(K,""),H?T(S.dynamicChildren,H,K,R,B,Qn(A,F),N):V||U(S,A,K,null,R,B,Qn(A,F),N,!1),j>0){if(j&16)k(K,X,te,R,F);else if(j&2&&X.class!==te.class&&r(K,"class",null,te.class,F),j&4&&r(K,"style",X.style,te.style,F),j&8){const de=A.dynamicProps;for(let ye=0;ye<de.length;ye++){const he=de[ye],Ue=X[he],He=te[he];(He!==Ue||he==="value")&&r(K,he,Ue,He,F,R)}}j&1&&S.children!==A.children&&d(K,A.children)}else!V&&H==null&&k(K,X,te,R,F);((re=te.onVnodeUpdated)||ne)&&je(()=>{re&&ut(re,R,A,S),ne&&es(A,S,R,"updated")},B)},T=(S,A,R,B,F,N,V)=>{for(let K=0;K<A.length;K++){const j=S[K],H=A[K],ne=j.el&&(j.type===ht||!rs(j,H)||j.shapeFlag&198)?u(j.el):R;g(j,H,ne,null,B,F,N,V,!0)}},k=(S,A,R,B,F)=>{if(A!==R){if(A!==me)for(const N in A)!ks(N)&&!(N in R)&&r(S,N,A[N],null,F,B);for(const N in R){if(ks(N))continue;const V=R[N],K=A[N];V!==K&&N!=="value"&&r(S,N,K,V,F,B)}"value"in R&&r(S,"value",A.value,R.value,F)}},C=(S,A,R,B,F,N,V,K,j)=>{const H=A.el=S?S.el:i(""),ne=A.anchor=S?S.anchor:i("");let{patchFlag:X,dynamicChildren:te,slotScopeIds:re}=A;re&&(K=K?K.concat(re):re),S==null?(n(H,R,B),n(ne,R,B),O(A.children||[],R,ne,F,N,V,K,j)):X>0&&X&64&&te&&S.dynamicChildren?(T(S.dynamicChildren,te,R,F,N,V,K),(A.key!=null||F&&A===F.subTree)&&Ii(S,A,!0)):U(S,A,R,ne,F,N,V,K,j)},G=(S,A,R,B,F,N,V,K,j)=>{A.slotScopeIds=K,S==null?A.shapeFlag&512?F.ctx.activate(A,R,B,V,j):q(A,R,B,F,N,V,j):Q(S,A,j)},q=(S,A,R,B,F,N,V)=>{const K=S.component=md(S,B,F);if(Mn(S)&&(K.ctx.renderer=Z),bd(K,!1,V),K.asyncDep){if(F&&F.registerDep(K,D,V),!S.el){const j=K.subTree=Ge(qe);h(null,j,A,R),S.placeholder=j.el}}else D(K,S,A,R,F,N,V)},Q=(S,A,R)=>{const B=A.component=S.component;if(id(S,A,R))if(B.asyncDep&&!B.asyncResolved){z(B,A,R);return}else B.next=A,B.update();else A.el=S.el,B.vnode=A},D=(S,A,R,B,F,N,V)=>{const K=()=>{if(S.isMounted){let{next:X,bu:te,u:re,parent:de,vnode:ye}=S;{const ct=Di(S);if(ct){X&&(X.el=ye.el,z(S,X,V)),ct.asyncDep.then(()=>{S.isUnmounted||K()});return}}let he=X,Ue;ts(S,!1),X?(X.el=ye.el,z(S,X,V)):X=ye,te&&on(te),(Ue=X.props&&X.props.onVnodeBeforeUpdate)&&ut(Ue,de,X,ye),ts(S,!0);const He=Pr(S),lt=S.subTree;S.subTree=He,g(lt,He,u(lt.el),I(lt),S,F,N),X.el=He.el,he===null&&ld(S,He.el),re&&je(re,F),(Ue=X.props&&X.props.onVnodeUpdated)&&je(()=>ut(Ue,de,X,ye),F)}else{let X;const{el:te,props:re}=A,{bm:de,m:ye,parent:he,root:Ue,type:He}=S,lt=Ms(A);ts(S,!1),de&&on(de),!lt&&(X=re&&re.onVnodeBeforeMount)&&ut(X,he,A),ts(S,!0);{Ue.ce&&Ue.ce._def.shadowRoot!==!1&&Ue.ce._injectChildStyle(He);const ct=S.subTree=Pr(S);g(null,ct,R,B,S,F,N),A.el=ct.el}if(ye&&je(ye,F),!lt&&(X=re&&re.onVnodeMounted)){const ct=A;je(()=>ut(X,he,ct),F)}(A.shapeFlag&256||he&&Ms(he.vnode)&&he.vnode.shapeFlag&256)&&S.a&&je(S.a,F),S.isMounted=!0,A=R=B=null}};S.scope.on();const j=S.effect=new jo(K);S.scope.off();const H=S.update=j.run.bind(j),ne=S.job=j.runIfDirty.bind(j);ne.i=S,ne.id=S.uid,j.scheduler=()=>er(ne),ts(S,!0),H()},z=(S,A,R)=>{A.component=S;const B=S.vnode.props;S.vnode=A,S.next=null,jc(S,A.props,B,R),Wc(S,A.children,R),Mt(),br(S),It()},U=(S,A,R,B,F,N,V,K,j=!1)=>{const H=S&&S.children,ne=S?S.shapeFlag:0,X=A.children,{patchFlag:te,shapeFlag:re}=A;if(te>0){if(te&128){ae(H,X,R,B,F,N,V,K,j);return}else if(te&256){ee(H,X,R,B,F,N,V,K,j);return}}re&8?(ne&16&&Te(H,F,N),X!==H&&d(R,X)):ne&16?re&16?ae(H,X,R,B,F,N,V,K,j):Te(H,F,N,!0):(ne&8&&d(R,""),re&16&&O(X,R,B,F,N,V,K,j))},ee=(S,A,R,B,F,N,V,K,j)=>{S=S||bs,A=A||bs;const H=S.length,ne=A.length,X=Math.min(H,ne);let te;for(te=0;te<X;te++){const re=A[te]=j?Gt(A[te]):gt(A[te]);g(S[te],re,R,null,F,N,V,K,j)}H>ne?Te(S,F,N,!0,!1,X):O(A,R,B,F,N,V,K,j,X)},ae=(S,A,R,B,F,N,V,K,j)=>{let H=0;const ne=A.length;let X=S.length-1,te=ne-1;for(;H<=X&&H<=te;){const re=S[H],de=A[H]=j?Gt(A[H]):gt(A[H]);if(rs(re,de))g(re,de,R,null,F,N,V,K,j);else break;H++}for(;H<=X&&H<=te;){const re=S[X],de=A[te]=j?Gt(A[te]):gt(A[te]);if(rs(re,de))g(re,de,R,null,F,N,V,K,j);else break;X--,te--}if(H>X){if(H<=te){const re=te+1,de=re<ne?A[re].el:B;for(;H<=te;)g(null,A[H]=j?Gt(A[H]):gt(A[H]),R,de,F,N,V,K,j),H++}}else if(H>te)for(;H<=X;)ie(S[H],F,N,!0),H++;else{const re=H,de=H,ye=new Map;for(H=de;H<=te;H++){const ze=A[H]=j?Gt(A[H]):gt(A[H]);ze.key!=null&&ye.set(ze.key,H)}let he,Ue=0;const He=te-de+1;let lt=!1,ct=0;const Ss=new Array(He);for(H=0;H<He;H++)Ss[H]=0;for(H=re;H<=X;H++){const ze=S[H];if(Ue>=He){ie(ze,F,N,!0);continue}let dt;if(ze.key!=null)dt=ye.get(ze.key);else for(he=de;he<=te;he++)if(Ss[he-de]===0&&rs(ze,A[he])){dt=he;break}dt===void 0?ie(ze,F,N,!0):(Ss[dt-de]=H+1,dt>=ct?ct=dt:lt=!0,g(ze,A[dt],R,null,F,N,V,K,j),Ue++)}const dr=lt?Qc(Ss):bs;for(he=dr.length-1,H=He-1;H>=0;H--){const ze=de+H,dt=A[ze],ur=A[ze+1],pr=ze+1<ne?ur.el||ur.placeholder:B;Ss[H]===0?g(null,dt,R,pr,F,N,V,K,j):lt&&(he<0||H!==dr[he]?le(dt,R,pr,2):he--)}}},le=(S,A,R,B,F=null)=>{const{el:N,type:V,transition:K,children:j,shapeFlag:H}=S;if(H&6){le(S.component.subTree,A,R,B);return}if(H&128){S.suspense.move(A,R,B);return}if(H&64){V.move(S,A,R,Z);return}if(V===ht){n(N,A,R);for(let X=0;X<j.length;X++)le(j[X],A,R,B);n(S.anchor,A,R);return}if(V===cn){_(S,A,R);return}if(B!==2&&H&1&&K)if(B===0)K.beforeEnter(N),n(N,A,R),je(()=>K.enter(N),F);else{const{leave:X,delayLeave:te,afterLeave:re}=K,de=()=>{S.ctx.isUnmounted?a(N):n(N,A,R)},ye=()=>{N._isLeaving&&N[Pt](!0),X(N,()=>{de(),re&&re()})};te?te(N,de,ye):ye()}else n(N,A,R)},ie=(S,A,R,B=!1,F=!1)=>{const{type:N,props:V,ref:K,children:j,dynamicChildren:H,shapeFlag:ne,patchFlag:X,dirs:te,cacheIndex:re}=S;if(X===-2&&(F=!1),K!=null&&(Mt(),Ls(K,null,R,S,!0),It()),re!=null&&(A.renderCache[re]=void 0),ne&256){A.ctx.deactivate(S);return}const de=ne&1&&te,ye=!Ms(S);let he;if(ye&&(he=V&&V.onVnodeBeforeUnmount)&&ut(he,A,S),ne&6)Se(S.component,R,B);else{if(ne&128){S.suspense.unmount(R,B);return}de&&es(S,null,A,"beforeUnmount"),ne&64?S.type.remove(S,A,R,Z,B):H&&!H.hasOnce&&(N!==ht||X>0&&X&64)?Te(H,A,R,!1,!0):(N===ht&&X&384||!F&&ne&16)&&Te(j,A,R),B&&ve(S)}(ye&&(he=V&&V.onVnodeUnmounted)||de)&&je(()=>{he&&ut(he,A,S),de&&es(S,null,A,"unmounted")},R)},ve=S=>{const{type:A,el:R,anchor:B,transition:F}=S;if(A===ht){Oe(R,B);return}if(A===cn){y(S);return}const N=()=>{a(R),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(S.shapeFlag&1&&F&&!F.persisted){const{leave:V,delayLeave:K}=F,j=()=>V(R,N);K?K(S.el,N,j):j()}else N()},Oe=(S,A)=>{let R;for(;S!==A;)R=p(S),a(S),S=R;a(A)},Se=(S,A,R)=>{const{bum:B,scope:F,job:N,subTree:V,um:K,m:j,a:H}=S;Ar(j),Ar(H),B&&on(B),F.stop(),N&&(N.flags|=8,ie(V,S,A,R)),K&&je(K,A),je(()=>{S.isUnmounted=!0},A)},Te=(S,A,R,B=!1,F=!1,N=0)=>{for(let V=N;V<S.length;V++)ie(S[V],A,R,B,F)},I=S=>{if(S.shapeFlag&6)return I(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const A=p(S.anchor||S.el),R=A&&A[bc];return R?p(R):A};let W=!1;const Y=(S,A,R)=>{S==null?A._vnode&&ie(A._vnode,null,null,!0):g(A._vnode||null,S,A,null,null,null,R),A._vnode=S,W||(W=!0,br(),ci(),W=!1)},Z={p:g,um:ie,m:le,r:ve,mt:q,mc:O,pc:U,pbc:T,n:I,o:e};return{render:Y,hydrate:void 0,createApp:Hc(Y)}}function Qn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ts({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Xc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ii(e,t,s=!1){const n=e.children,a=t.children;if(se(n)&&se(a))for(let r=0;r<n.length;r++){const o=n[r];let i=a[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[r]=Gt(a[r]),i.el=o.el),!s&&i.patchFlag!==-2&&Ii(o,i)),i.type===Bn&&i.patchFlag!==-1&&(i.el=o.el),i.type===qe&&!i.el&&(i.el=o.el)}}function Qc(e){const t=e.slice(),s=[0];let n,a,r,o,i;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(a=s[s.length-1],e[a]<c){t[n]=a,s.push(n);continue}for(r=0,o=s.length-1;r<o;)i=r+o>>1,e[s[i]]<c?r=i+1:o=i;c<e[s[r]]&&(r>0&&(t[n]=s[r-1]),s[r]=n)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}function Di(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Di(t)}function Ar(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Zc=Symbol.for("v-scx"),ed=()=>tt(Zc);function Ds(e,t,s){return Ni(e,t,s)}function Ni(e,t,s=me){const{immediate:n,deep:a,flush:r,once:o}=s,i=ke({},s),l=t&&n||!t&&r!=="post";let c;if(js){if(r==="sync"){const f=ed();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=bt,f.resume=bt,f.pause=bt,f}}const d=Ie;i.call=(f,b,g)=>ot(f,d,b,g);let u=!1;r==="post"?i.scheduler=f=>{je(f,d&&d.suspense)}:r!=="sync"&&(u=!0,i.scheduler=(f,b)=>{b?f():er(f)}),i.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=pc(e,t,i);return js&&(c?c.push(p):l&&p()),p}function td(e,t,s){const n=this.proxy,a=Ae(e)?e.includes(".")?Bi(n,e):()=>n[e]:e.bind(n,n);let r;oe(t)?r=t:(r=t.handler,s=t);const o=Js(this),i=Ni(a,r.bind(n),s);return o(),i}function Bi(e,t){const s=t.split(".");return()=>{let n=e;for(let a=0;a<s.length&&n;a++)n=n[s[a]];return n}}const sd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${st(t)}Modifiers`]||e[`${Xt(t)}Modifiers`];function nd(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||me;let a=s;const r=t.startsWith("update:"),o=r&&sd(n,t.slice(7));o&&(o.trim&&(a=s.map(d=>Ae(d)?d.trim():d)),o.number&&(a=s.map(Ol)));let i,l=n[i=Yn(t)]||n[i=Yn(st(t))];!l&&r&&(l=n[i=Yn(Xt(t))]),l&&ot(l,e,6,a);const c=n[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,ot(c,e,6,a)}}const ad=new WeakMap;function Fi(e,t,s=!1){const n=s?ad:t.emitsCache,a=n.get(e);if(a!==void 0)return a;const r=e.emits;let o={},i=!1;if(!oe(e)){const l=c=>{const d=Fi(c,t,!0);d&&(i=!0,ke(o,d))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(be(e)&&n.set(e,null),null):(se(r)?r.forEach(l=>o[l]=null):ke(o,r),be(e)&&n.set(e,o),o)}function Nn(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,Xt(t))||fe(e,t))}function Pr(e){const{type:t,vnode:s,proxy:n,withProxy:a,propsOptions:[r],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:b,inheritAttrs:g}=e,m=mn(e);let h,v;try{if(s.shapeFlag&4){const y=a||n,w=y;h=gt(c.call(w,y,d,u,f,p,b)),v=i}else{const y=t;h=gt(y.length>1?y(u,{attrs:i,slots:o,emit:l}):y(u,null)),v=t.props?i:rd(i)}}catch(y){Ns.length=0,Ln(y,e,1),h=Ge(qe)}let _=h;if(v&&g!==!1){const y=Object.keys(v),{shapeFlag:w}=_;y.length&&w&7&&(r&&y.some(Ua)&&(v=od(v,r)),_=Vt(_,v,!1,!0))}return s.dirs&&(_=Vt(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(s.dirs):s.dirs),s.transition&&Gs(_,s.transition),h=_,mn(m),h}const rd=e=>{let t;for(const s in e)(s==="class"||s==="style"||An(s))&&((t||(t={}))[s]=e[s]);return t},od=(e,t)=>{const s={};for(const n in e)(!Ua(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function id(e,t,s){const{props:n,children:a,component:r}=e,{props:o,children:i,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return n?Or(n,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==n[p]&&!Nn(c,p))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:n===o?!1:n?o?Or(n,o,c):!0:!!o;return!1}function Or(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const r=n[a];if(t[r]!==e[r]&&!Nn(s,r))return!0}return!1}function ld({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const $i=e=>e.__isSuspense;function cd(e,t){t&&t.pendingBranch?se(e)?t.effects.push(...e):t.effects.push(e):gc(e)}const ht=Symbol.for("v-fgt"),Bn=Symbol.for("v-txt"),qe=Symbol.for("v-cmt"),cn=Symbol.for("v-stc"),Ns=[];let Je=null;function nt(e=!1){Ns.push(Je=e?null:[])}function dd(){Ns.pop(),Je=Ns[Ns.length-1]||null}let zs=1;function _n(e,t=!1){zs+=e,e<0&&Je&&t&&(Je.hasOnce=!0)}function Ui(e){return e.dynamicChildren=zs>0?Je||bs:null,dd(),zs>0&&Je&&Je.push(e),e}function vt(e,t,s,n,a,r){return Ui(M(e,t,s,n,a,r,!0))}function kr(e,t,s,n,a){return Ui(Ge(e,t,s,n,a,!0))}function vn(e){return e?e.__v_isVNode===!0:!1}function rs(e,t){return e.type===t.type&&e.key===t.key}const Hi=({key:e})=>e??null,dn=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Ae(e)||xe(e)||oe(e)?{i:Ve,r:e,k:t,f:!!s}:e:null);function M(e,t=null,s=null,n=0,a=null,r=e===ht?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hi(t),ref:t&&dn(t),scopeId:ui,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ve};return i?(nr(l,s),r&128&&e.normalize(l)):s&&(l.shapeFlag|=Ae(s)?8:16),zs>0&&!o&&Je&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Je.push(l),l}const Ge=ud;function ud(e,t=null,s=null,n=0,a=null,r=!1){if((!e||e===wi)&&(e=qe),vn(e)){const i=Vt(e,t,!0);return s&&nr(i,s),zs>0&&!r&&Je&&(i.shapeFlag&6?Je[Je.indexOf(e)]=i:Je.push(i)),i.patchFlag=-2,i}if(wd(e)&&(e=e.__vccOpts),t){t=pd(t);let{class:i,style:l}=t;i&&!Ae(i)&&(t.class=Wt(i)),be(l)&&(Xa(l)&&!se(l)&&(l=ke({},l)),t.style=za(l))}const o=Ae(e)?1:$i(e)?128:pi(e)?64:be(e)?4:oe(e)?2:0;return M(e,t,s,n,a,o,r,!0)}function pd(e){return e?Xa(e)||Oi(e)?ke({},e):e:null}function Vt(e,t,s=!1,n=!1){const{props:a,ref:r,patchFlag:o,children:i,transition:l}=e,c=t?fd(a||{},t):a,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Hi(c),ref:t&&t.ref?s&&r?se(r)?r.concat(dn(t)):[r,dn(t)]:dn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ht?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vt(e.ssContent),ssFallback:e.ssFallback&&Vt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Gs(d,l.clone(d)),d}function Fn(e=" ",t=0){return Ge(Bn,null,e,t)}function Qt(e,t){const s=Ge(cn,null,e);return s.staticCount=t,s}function gt(e){return e==null||typeof e=="boolean"?Ge(qe):se(e)?Ge(ht,null,e.slice()):vn(e)?Gt(e):Ge(Bn,null,String(e))}function Gt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vt(e)}function nr(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(se(t))s=16;else if(typeof t=="object")if(n&65){const a=t.default;a&&(a._c&&(a._d=!1),nr(e,a()),a._c&&(a._d=!0));return}else{s=32;const a=t._;!a&&!Oi(t)?t._ctx=Ve:a===3&&Ve&&(Ve.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else oe(t)?(t={default:t,_ctx:Ve},s=32):(t=String(t),n&64?(s=16,t=[Fn(t)]):s=8);e.children=t,e.shapeFlag|=s}function fd(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const a in n)if(a==="class")t.class!==n.class&&(t.class=Wt([t.class,n.class]));else if(a==="style")t.style=za([t.style,n.style]);else if(An(a)){const r=t[a],o=n[a];o&&r!==o&&!(se(r)&&r.includes(o))&&(t[a]=r?[].concat(r,o):o)}else a!==""&&(t[a]=n[a])}return t}function ut(e,t,s,n=null){ot(e,t,7,[s,n])}const hd=xi();let gd=0;function md(e,t,s){const n=e.type,a=(t?t.appContext:e.appContext)||hd,r={uid:gd++,vnode:e,type:n,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ho(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ci(n,a),emitsOptions:Fi(n,a),emit:null,emitted:null,propsDefaults:me,inheritAttrs:n.inheritAttrs,ctx:me,data:me,props:me,attrs:me,slots:me,refs:me,setupState:me,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=nd.bind(null,r),e.ce&&e.ce(r),r}let Ie=null;const ar=()=>Ie||Ve;let Tn,Oa;{const e=Cn(),t=(s,n)=>{let a;return(a=e[s])||(a=e[s]=[]),a.push(n),r=>{a.length>1?a.forEach(o=>o(r)):a[0](r)}};Tn=t("__VUE_INSTANCE_SETTERS__",s=>Ie=s),Oa=t("__VUE_SSR_SETTERS__",s=>js=s)}const Js=e=>{const t=Ie;return Tn(e),e.scope.on(),()=>{e.scope.off(),Tn(t)}},Cr=()=>{Ie&&Ie.scope.off(),Tn(null)};function Gi(e){return e.vnode.shapeFlag&4}let js=!1;function bd(e,t=!1,s=!1){t&&Oa(t);const{props:n,children:a}=e.vnode,r=Gi(e);zc(e,n,r,t),qc(e,a,s||t);const o=r?yd(e,t):void 0;return t&&Oa(!1),o}function yd(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ic);const{setup:n}=s;if(n){Mt();const a=e.setupContext=n.length>1?vd(e):null,r=Js(e),o=Vs(n,e,0,[e.props,a]),i=Lo(o);if(It(),r(),(i||e.sp)&&!Ms(e)&&_i(e),i){if(o.then(Cr,Cr),t)return o.then(l=>{Rr(e,l)}).catch(l=>{Ln(l,e,0)});e.asyncDep=o}else Rr(e,o)}else zi(e)}function Rr(e,t,s){oe(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)&&(e.setupState=oi(t)),zi(e)}function zi(e,t,s){const n=e.type;e.render||(e.render=n.render||bt);{const a=Js(e);Mt();try{Dc(e)}finally{It(),a()}}}const _d={get(e,t){return Me(e,"get",""),e[t]}};function vd(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,_d),slots:e.slots,emit:e.emit,expose:t}}function $n(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(oi(Qa(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Is)return Is[s](e)},has(t,s){return s in t||s in Is}})):e.proxy}function Td(e,t=!0){return oe(e)?e.displayName||e.name:e.name||t&&e.__name}function wd(e){return oe(e)&&"__vccOpts"in e}const We=(e,t)=>dc(e,t,js);function rr(e,t,s){try{_n(-1);const n=arguments.length;return n===2?be(t)&&!se(t)?vn(t)?Ge(e,null,[t]):Ge(e,t):Ge(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&vn(s)&&(s=[s]),Ge(e,t,s))}finally{_n(1)}}const Sd="3.5.24";let ka;const Lr=typeof window<"u"&&window.trustedTypes;if(Lr)try{ka=Lr.createPolicy("vue",{createHTML:e=>e})}catch{}const ji=ka?e=>ka.createHTML(e):e=>e,Ed="http://www.w3.org/2000/svg",xd="http://www.w3.org/1998/Math/MathML",xt=typeof document<"u"?document:null,Mr=xt&&xt.createElement("template"),Ad={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const a=t==="svg"?xt.createElementNS(Ed,e):t==="mathml"?xt.createElementNS(xd,e):s?xt.createElement(e,{is:s}):xt.createElement(e);return e==="select"&&n&&n.multiple!=null&&a.setAttribute("multiple",n.multiple),a},createText:e=>xt.createTextNode(e),createComment:e=>xt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>xt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,a,r){const o=s?s.previousSibling:t.lastChild;if(a&&(a===r||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),s),!(a===r||!(a=a.nextSibling)););else{Mr.innerHTML=ji(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const i=Mr.content;if(n==="svg"||n==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Ft="transition",xs="animation",Ys=Symbol("_vtc"),Yi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pd=ke({},fi,Yi),Od=e=>(e.displayName="Transition",e.props=Pd,e),kd=Od((e,{slots:t})=>rr(vc,Cd(e),t)),ss=(e,t=[])=>{se(e)?e.forEach(s=>s(...t)):e&&e(...t)},Ir=e=>e?se(e)?e.some(t=>t.length>1):e.length>1:!1;function Cd(e){const t={};for(const C in e)C in Yi||(t[C]=e[C]);if(e.css===!1)return t;const{name:s="v",type:n,duration:a,enterFromClass:r=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:d=i,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=e,b=Rd(a),g=b&&b[0],m=b&&b[1],{onBeforeEnter:h,onEnter:v,onEnterCancelled:_,onLeave:y,onLeaveCancelled:w,onBeforeAppear:E=h,onAppear:P=v,onAppearCancelled:O=_}=t,x=(C,G,q,Q)=>{C._enterCancelled=Q,ns(C,G?d:i),ns(C,G?c:o),q&&q()},T=(C,G)=>{C._isLeaving=!1,ns(C,u),ns(C,f),ns(C,p),G&&G()},k=C=>(G,q)=>{const Q=C?P:v,D=()=>x(G,C,q);ss(Q,[G,D]),Dr(()=>{ns(G,C?l:r),St(G,C?d:i),Ir(Q)||Nr(G,n,g,D)})};return ke(t,{onBeforeEnter(C){ss(h,[C]),St(C,r),St(C,o)},onBeforeAppear(C){ss(E,[C]),St(C,l),St(C,c)},onEnter:k(!1),onAppear:k(!0),onLeave(C,G){C._isLeaving=!0;const q=()=>T(C,G);St(C,u),C._enterCancelled?(St(C,p),$r(C)):($r(C),St(C,p)),Dr(()=>{C._isLeaving&&(ns(C,u),St(C,f),Ir(y)||Nr(C,n,m,q))}),ss(y,[C,q])},onEnterCancelled(C){x(C,!1,void 0,!0),ss(_,[C])},onAppearCancelled(C){x(C,!0,void 0,!0),ss(O,[C])},onLeaveCancelled(C){T(C),ss(w,[C])}})}function Rd(e){if(e==null)return null;if(be(e))return[Zn(e.enter),Zn(e.leave)];{const t=Zn(e);return[t,t]}}function Zn(e){return kl(e)}function St(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Ys]||(e[Ys]=new Set)).add(t)}function ns(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const s=e[Ys];s&&(s.delete(t),s.size||(e[Ys]=void 0))}function Dr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Ld=0;function Nr(e,t,s,n){const a=e._endId=++Ld,r=()=>{a===e._endId&&n()};if(s!=null)return setTimeout(r,s);const{type:o,timeout:i,propCount:l}=Md(e,t);if(!o)return n();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),r()},p=f=>{f.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},i+1),e.addEventListener(c,p)}function Md(e,t){const s=window.getComputedStyle(e),n=b=>(s[b]||"").split(", "),a=n(`${Ft}Delay`),r=n(`${Ft}Duration`),o=Br(a,r),i=n(`${xs}Delay`),l=n(`${xs}Duration`),c=Br(i,l);let d=null,u=0,p=0;t===Ft?o>0&&(d=Ft,u=o,p=r.length):t===xs?c>0&&(d=xs,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?Ft:xs:null,p=d?d===Ft?r.length:l.length:0);const f=d===Ft&&/\b(?:transform|all)(?:,|$)/.test(n(`${Ft}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function Br(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,n)=>Fr(s)+Fr(e[n])))}function Fr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function $r(e){return(e?e.ownerDocument:document).body.offsetHeight}function Id(e,t,s){const n=e[Ys];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Ur=Symbol("_vod"),Dd=Symbol("_vsh"),Nd=Symbol(""),Bd=/(?:^|;)\s*display\s*:/;function Fd(e,t,s){const n=e.style,a=Ae(s);let r=!1;if(s&&!a){if(t)if(Ae(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&un(n,i,"")}else for(const o in t)s[o]==null&&un(n,o,"");for(const o in s)o==="display"&&(r=!0),un(n,o,s[o])}else if(a){if(t!==s){const o=n[Nd];o&&(s+=";"+o),n.cssText=s,r=Bd.test(s)}}else t&&e.removeAttribute("style");Ur in e&&(e[Ur]=r?n.display:"",e[Dd]&&(n.display="none"))}const Hr=/\s*!important$/;function un(e,t,s){if(se(s))s.forEach(n=>un(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=$d(e,t);Hr.test(s)?e.setProperty(Xt(n),s.replace(Hr,""),"important"):e[n]=s}}const Gr=["Webkit","Moz","ms"],ea={};function $d(e,t){const s=ea[t];if(s)return s;let n=st(t);if(n!=="filter"&&n in e)return ea[t]=n;n=kn(n);for(let a=0;a<Gr.length;a++){const r=Gr[a]+n;if(r in e)return ea[t]=r}return t}const zr="http://www.w3.org/1999/xlink";function jr(e,t,s,n,a,r=Dl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(zr,t.slice(6,t.length)):e.setAttributeNS(zr,t,s):s==null||r&&!No(s)?e.removeAttribute(t):e.setAttribute(t,r?"":_t(s)?String(s):s)}function Yr(e,t,s,n,a){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?ji(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(i!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const i=typeof e[t];i==="boolean"?s=No(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(a||t)}function Ki(e,t,s,n){e.addEventListener(t,s,n)}function Ud(e,t,s,n){e.removeEventListener(t,s,n)}const Kr=Symbol("_vei");function Hd(e,t,s,n,a=null){const r=e[Kr]||(e[Kr]={}),o=r[t];if(n&&o)o.value=n;else{const[i,l]=Gd(t);if(n){const c=r[t]=Yd(n,a);Ki(e,i,c,l)}else o&&(Ud(e,i,o,l),r[t]=void 0)}}const qr=/(?:Once|Passive|Capture)$/;function Gd(e){let t;if(qr.test(e)){t={};let n;for(;n=e.match(qr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Xt(e.slice(2)),t]}let ta=0;const zd=Promise.resolve(),jd=()=>ta||(zd.then(()=>ta=0),ta=Date.now());function Yd(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;ot(Kd(n,s.value),t,5,[n])};return s.value=e,s.attached=jd(),s}function Kd(e,t){if(se(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>a=>!a._stopped&&n&&n(a))}else return t}const Wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,qd=(e,t,s,n,a,r)=>{const o=a==="svg";t==="class"?Id(e,n,o):t==="style"?Fd(e,s,n):An(t)?Ua(t)||Hd(e,t,s,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wd(e,t,n,o))?(Yr(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&jr(e,t,n,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ae(n))?Yr(e,st(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),jr(e,t,n,o))};function Wd(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wr(t)&&oe(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Wr(t)&&Ae(s)?!1:t in e}const Vr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return se(t)?s=>on(t,s):t},sa=Symbol("_assign"),Vd={deep:!0,created(e,t,s){e[sa]=Vr(s),Ki(e,"change",()=>{const n=e._modelValue,a=Jd(e),r=e.checked,o=e[sa];if(se(n)){const i=Bo(n,a),l=i!==-1;if(r&&!l)o(n.concat(a));else if(!r&&l){const c=[...n];c.splice(i,1),o(c)}}else if(Pn(n)){const i=new Set(n);r?i.add(a):i.delete(a),o(i)}else o(qi(e,r))})},mounted:Jr,beforeUpdate(e,t,s){e[sa]=Vr(s),Jr(e,t,s)}};function Jr(e,{value:t,oldValue:s},n){e._modelValue=t;let a;if(se(t))a=Bo(t,n.props.value)>-1;else if(Pn(t))a=t.has(n.props.value);else{if(t===s)return;a=Rn(t,qi(e,!0))}e.checked!==a&&(e.checked=a)}function Jd(e){return"_value"in e?e._value:e.value}function qi(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Xd=["ctrl","shift","alt","meta"],Qd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Xd.some(s=>e[`${s}Key`]&&!t.includes(s))},Un=(e,t)=>{const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((a,...r)=>{for(let o=0;o<t.length;o++){const i=Qd[t[o]];if(i&&i(a,t))return}return e(a,...r)}))},Zd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ot=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(a=>{if(!("key"in a))return;const r=Xt(a.key);if(t.some(o=>o===r||Zd[o]===r))return e(a)}))},eu=ke({patchProp:qd},Ad);let Xr;function tu(){return Xr||(Xr=Vc(eu))}const su=((...e)=>{const t=tu().createApp(...e),{mount:s}=t;return t.mount=n=>{const a=au(n);if(!a)return;const r=t._component;!oe(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,nu(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t});function nu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function au(e){return Ae(e)?document.querySelector(e):e}let Wi;const Hn=e=>Wi=e,Vi=Symbol();function Ca(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Bs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Bs||(Bs={}));function ru(){const e=Go(!0),t=e.run(()=>Xe({}));let s=[],n=[];const a=Qa({install(r){Hn(a),a._a=r,r.provide(Vi,a),r.config.globalProperties.$pinia=a,n.forEach(o=>s.push(o)),n=[]},use(r){return this._a?s.push(r):n.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return a}const Ji=()=>{};function Qr(e,t,s,n=Ji){e.add(t);const a=()=>{e.delete(t)&&n()};return!s&&zo()&&Bl(a),a}function fs(e,...t){e.forEach(s=>{s(...t)})}const ou=e=>e(),Zr=Symbol(),na=Symbol();function Ra(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,n)=>e.set(n,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const n=t[s],a=e[s];Ca(a)&&Ca(n)&&e.hasOwnProperty(s)&&!xe(n)&&!cs(n)?e[s]=Ra(a,n):e[s]=n}return e}const iu=Symbol();function lu(e){return!Ca(e)||!Object.prototype.hasOwnProperty.call(e,iu)}const{assign:Ut}=Object;function cu(e){return!!(xe(e)&&e.effect)}function du(e,t,s,n){const{state:a,actions:r,getters:o}=t,i=s.state.value[e];let l;function c(){i||(s.state.value[e]=a?a():{});const d=oc(s.state.value[e]);return Ut(d,r,Object.keys(o||{}).reduce((u,p)=>(u[p]=Qa(We(()=>{Hn(s);const f=s._s.get(e);return o[p].call(f,f)})),u),{}))}return l=Xi(e,c,t,s,n,!0),l}function Xi(e,t,s={},n,a,r){let o;const i=Ut({actions:{}},s),l={deep:!0};let c,d,u=new Set,p=new Set,f;const b=n.state.value[e];!r&&!b&&(n.state.value[e]={}),Xe({});let g;function m(O){let x;c=d=!1,typeof O=="function"?(O(n.state.value[e]),x={type:Bs.patchFunction,storeId:e,events:f}):(Ra(n.state.value[e],O),x={type:Bs.patchObject,payload:O,storeId:e,events:f});const T=g=Symbol();Za().then(()=>{g===T&&(c=!0)}),d=!0,fs(u,x,n.state.value[e])}const h=r?function(){const{state:x}=s,T=x?x():{};this.$patch(k=>{Ut(k,T)})}:Ji;function v(){o.stop(),u.clear(),p.clear(),n._s.delete(e)}const _=(O,x="")=>{if(Zr in O)return O[na]=x,O;const T=function(){Hn(n);const k=Array.from(arguments),C=new Set,G=new Set;function q(z){C.add(z)}function Q(z){G.add(z)}fs(p,{args:k,name:T[na],store:w,after:q,onError:Q});let D;try{D=O.apply(this&&this.$id===e?this:w,k)}catch(z){throw fs(G,z),z}return D instanceof Promise?D.then(z=>(fs(C,z),z)).catch(z=>(fs(G,z),Promise.reject(z))):(fs(C,D),D)};return T[Zr]=!0,T[na]=x,T},y={_p:n,$id:e,$onAction:Qr.bind(null,p),$patch:m,$reset:h,$subscribe(O,x={}){const T=Qr(u,O,x.detached,()=>k()),k=o.run(()=>Ds(()=>n.state.value[e],C=>{(x.flush==="sync"?d:c)&&O({storeId:e,type:Bs.direct,events:f},C)},Ut({},l,x)));return T},$dispose:v},w=Rt(y);n._s.set(e,w);const P=(n._a&&n._a.runWithContext||ou)(()=>n._e.run(()=>(o=Go()).run(()=>t({action:_}))));for(const O in P){const x=P[O];if(xe(x)&&!cu(x)||cs(x))r||(b&&lu(x)&&(xe(x)?x.value=b[O]:Ra(x,b[O])),n.state.value[e][O]=x);else if(typeof x=="function"){const T=_(x,O);P[O]=T,i.actions[O]=x}}return Ut(w,P),Ut(ue(w),P),Object.defineProperty(w,"$state",{get:()=>n.state.value[e],set:O=>{m(x=>{Ut(x,O)})}}),n._p.forEach(O=>{Ut(w,o.run(()=>O({store:w,app:n._a,pinia:n,options:i})))}),b&&r&&s.hydrate&&s.hydrate(w.$state,b),c=!0,d=!0,w}function uu(e,t,s){let n;const a=typeof t=="function";n=a?s:t;function r(o,i){const l=Gc();return o=o||(l?tt(Vi,null):null),o&&Hn(o),o=Wi,o._s.has(e)||(a?Xi(e,t,n,o):du(e,n,o)),o._s.get(e)}return r.$id=e,r}const ms=typeof document<"u";function Qi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function pu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Qi(e.default)}const pe=Object.assign;function aa(e,t){const s={};for(const n in t){const a=t[n];s[n]=it(a)?a.map(e):e(a)}return s}const Fs=()=>{},it=Array.isArray;function eo(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}const Zi=/#/g,fu=/&/g,hu=/\//g,gu=/=/g,mu=/\?/g,el=/\+/g,bu=/%5B/g,yu=/%5D/g,tl=/%5E/g,_u=/%60/g,sl=/%7B/g,vu=/%7C/g,nl=/%7D/g,Tu=/%20/g;function or(e){return e==null?"":encodeURI(""+e).replace(vu,"|").replace(bu,"[").replace(yu,"]")}function wu(e){return or(e).replace(sl,"{").replace(nl,"}").replace(tl,"^")}function La(e){return or(e).replace(el,"%2B").replace(Tu,"+").replace(Zi,"%23").replace(fu,"%26").replace(_u,"`").replace(sl,"{").replace(nl,"}").replace(tl,"^")}function Su(e){return La(e).replace(gu,"%3D")}function Eu(e){return or(e).replace(Zi,"%23").replace(mu,"%3F")}function xu(e){return Eu(e).replace(hu,"%2F")}function Ks(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Au=/\/$/,Pu=e=>e.replace(Au,"");function ra(e,t,s="/"){let n,a={},r="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(n=t.slice(0,l),r=t.slice(l,i>0?i:t.length),a=e(r.slice(1))),i>=0&&(n=n||t.slice(0,i),o=t.slice(i,t.length)),n=Ru(n??t,s),{fullPath:n+r+o,path:n,query:a,hash:Ks(o)}}function Ou(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function to(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ku(e,t,s){const n=t.matched.length-1,a=s.matched.length-1;return n>-1&&n===a&&vs(t.matched[n],s.matched[a])&&al(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function vs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function al(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Cu(e[s],t[s]))return!1;return!0}function Cu(e,t){return it(e)?so(e,t):it(t)?so(t,e):e===t}function so(e,t){return it(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function Ru(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),a=n[n.length-1];(a===".."||a===".")&&n.push("");let r=s.length-1,o,i;for(o=0;o<n.length;o++)if(i=n[o],i!==".")if(i==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+n.slice(o).join("/")}const $t={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Ma=(function(e){return e.pop="pop",e.push="push",e})({}),oa=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Lu(e){if(!e)if(ms){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pu(e)}const Mu=/^[^#]+#/;function Iu(e,t){return e.replace(Mu,"#")+t}function Du(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const Gn=()=>({left:window.scrollX,top:window.scrollY});function Nu(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;t=Du(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function no(e,t){return(history.state?history.state.position-t:-1)+e}const Ia=new Map;function Bu(e,t){Ia.set(e,t)}function Fu(e){const t=Ia.get(e);return Ia.delete(e),t}function $u(e){return typeof e=="string"||e&&typeof e=="object"}function rl(e){return typeof e=="string"||typeof e=="symbol"}let Ee=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ol=Symbol("");Ee.MATCHER_NOT_FOUND+"",Ee.NAVIGATION_GUARD_REDIRECT+"",Ee.NAVIGATION_ABORTED+"",Ee.NAVIGATION_CANCELLED+"",Ee.NAVIGATION_DUPLICATED+"";function Ts(e,t){return pe(new Error,{type:e,[ol]:!0},t)}function Et(e,t){return e instanceof Error&&ol in e&&(t==null||!!(e.type&t))}const Uu=["params","query","hash"];function Hu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of Uu)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function Gu(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const a=s[n].replace(el," "),r=a.indexOf("="),o=Ks(r<0?a:a.slice(0,r)),i=r<0?null:Ks(a.slice(r+1));if(o in t){let l=t[o];it(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function ao(e){let t="";for(let s in e){const n=e[s];if(s=Su(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(it(n)?n.map(a=>a&&La(a)):[n&&La(n)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+s,a!=null&&(t+="="+a))})}return t}function zu(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=it(n)?n.map(a=>a==null?null:""+a):n==null?n:""+n)}return t}const ju=Symbol(""),ro=Symbol(""),zn=Symbol(""),ir=Symbol(""),Da=Symbol("");function As(){let e=[];function t(n){return e.push(n),()=>{const a=e.indexOf(n);a>-1&&e.splice(a,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function zt(e,t,s,n,a,r=o=>o()){const o=n&&(n.enterCallbacks[a]=n.enterCallbacks[a]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Ts(Ee.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?l(p):$u(p)?l(Ts(Ee.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&n.enterCallbacks[a]===o&&typeof p=="function"&&o.push(p),i())},d=r(()=>e.call(n&&n.instances[a],t,s,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function ia(e,t,s,n,a=r=>r()){const r=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(Qi(l)){const c=(l.__vccOpts||l)[t];c&&r.push(zt(c,s,n,o,i,a))}else{let c=l();r.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=pu(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&zt(p,s,n,o,i,a)()}))}}return r}function Yu(e,t){const s=[],n=[],a=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const i=t.matched[o];i&&(e.matched.find(c=>vs(c,i))?n.push(i):s.push(i));const l=e.matched[o];l&&(t.matched.find(c=>vs(c,l))||a.push(l))}return[s,n,a]}let Ku=()=>location.protocol+"//"+location.host;function il(e,t){const{pathname:s,search:n,hash:a}=t,r=e.indexOf("#");if(r>-1){let o=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(o);return i[0]!=="/"&&(i="/"+i),to(i,"")}return to(s,e)+n+a}function qu(e,t,s,n){let a=[],r=[],o=null;const i=({state:p})=>{const f=il(e,location),b=s.value,g=t.value;let m=0;if(p){if(s.value=f,t.value=p,o&&o===b){o=null;return}m=g?p.position-g.position:0}else n(f);a.forEach(h=>{h(s.value,b,{delta:m,type:Ma.pop,direction:m?m>0?oa.forward:oa.back:oa.unknown})})};function l(){o=s.value}function c(p){a.push(p);const f=()=>{const b=a.indexOf(p);b>-1&&a.splice(b,1)};return r.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(pe({},p.state,{scroll:Gn()}),"")}}function u(){for(const p of r)p();r=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function oo(e,t,s,n=!1,a=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:a?Gn():null}}function Wu(e){const{history:t,location:s}=window,n={value:il(e,s)},a={value:t.state};a.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,d){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+l:Ku()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),a.value=c}catch(f){console.error(f),s[d?"replace":"assign"](p)}}function o(l,c){r(l,pe({},t.state,oo(a.value.back,l,a.value.forward,!0),c,{position:a.value.position}),!0),n.value=l}function i(l,c){const d=pe({},a.value,t.state,{forward:l,scroll:Gn()});r(d.current,d,!0),r(l,pe({},oo(n.value,l,null),{position:d.position+1},c),!1),n.value=l}return{location:n,state:a,push:i,replace:o}}function Vu(e){e=Lu(e);const t=Wu(e),s=qu(e,t.state,t.location,t.replace);function n(r,o=!0){o||s.pauseListeners(),history.go(r)}const a=pe({location:"",base:e,go:n,createHref:Iu.bind(null,e)},t,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Ju(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Vu(e)}let is=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Pe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Pe||{});const Xu={type:is.Static,value:""},Qu=/[a-zA-Z0-9_]/;function Zu(e){if(!e)return[[]];if(e==="/")return[[Xu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${s})/"${c}": ${f}`)}let s=Pe.Static,n=s;const a=[];let r;function o(){r&&a.push(r),r=[]}let i=0,l,c="",d="";function u(){c&&(s===Pe.Static?r.push({type:is.Static,value:c}):s===Pe.Param||s===Pe.ParamRegExp||s===Pe.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:is.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&s!==Pe.ParamRegExp){n=s,s=Pe.EscapeNext;continue}switch(s){case Pe.Static:l==="/"?(c&&u(),o()):l===":"?(u(),s=Pe.Param):p();break;case Pe.EscapeNext:p(),s=n;break;case Pe.Param:l==="("?s=Pe.ParamRegExp:Qu.test(l)?p():(u(),s=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Pe.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:s=Pe.ParamRegExpEnd:d+=l;break;case Pe.ParamRegExpEnd:u(),s=Pe.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===Pe.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),a}const io="[^/]+?",ep={sensitive:!1,strict:!1,start:!0,end:!0};var Ne=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ne||{});const tp=/[.+*?^${}()[\]/\\]/g;function sp(e,t){const s=pe({},ep,t),n=[];let a=s.start?"^":"";const r=[];for(const c of e){const d=c.length?[]:[Ne.Root];s.strict&&!c.length&&(a+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=Ne.Segment+(s.sensitive?Ne.BonusCaseSensitive:0);if(p.type===is.Static)u||(a+="/"),a+=p.value.replace(tp,"\\$&"),f+=Ne.Static;else if(p.type===is.Param){const{value:b,repeatable:g,optional:m,regexp:h}=p;r.push({name:b,repeatable:g,optional:m});const v=h||io;if(v!==io){f+=Ne.BonusCustomRegExp;try{`${v}`}catch(y){throw new Error(`Invalid custom RegExp for param "${b}" (${v}): `+y.message)}}let _=g?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;u||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),a+=_,f+=Ne.Dynamic,m&&(f+=Ne.BonusOptional),g&&(f+=Ne.BonusRepeatable),v===".*"&&(f+=Ne.BonusWildcard)}d.push(f)}n.push(d)}if(s.strict&&s.end){const c=n.length-1;n[c][n[c].length-1]+=Ne.BonusStrict}s.strict||(a+="/?"),s.end?a+="$":s.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const o=new RegExp(a,s.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",b=r[p-1];u[b.name]=f&&b.repeatable?f.split("/"):f}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===is.Static)d+=f.value;else if(f.type===is.Param){const{value:b,repeatable:g,optional:m}=f,h=b in c?c[b]:"";if(it(h)&&!g)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const v=it(h)?h.join("/"):h;if(!v)if(m)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${b}"`);d+=v}}return d||"/"}return{re:o,score:n,keys:r,parse:i,stringify:l}}function np(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===Ne.Static+Ne.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ne.Static+Ne.Segment?1:-1:0}function ll(e,t){let s=0;const n=e.score,a=t.score;for(;s<n.length&&s<a.length;){const r=np(n[s],a[s]);if(r)return r;s++}if(Math.abs(a.length-n.length)===1){if(lo(n))return 1;if(lo(a))return-1}return a.length-n.length}function lo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ap={strict:!1,end:!0,sensitive:!1};function rp(e,t,s){const n=sp(Zu(e.path),s),a=pe(n,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function op(e,t){const s=[],n=new Map;t=eo(ap,t);function a(u){return n.get(u)}function r(u,p,f){const b=!f,g=uo(u);g.aliasOf=f&&f.record;const m=eo(t,u),h=[g];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const w of y)h.push(uo(pe({},g,{components:f?f.record.components:g.components,path:w,aliasOf:f?f.record:g})))}let v,_;for(const y of h){const{path:w}=y;if(p&&w[0]!=="/"){const E=p.record.path,P=E[E.length-1]==="/"?"":"/";y.path=p.record.path+(w&&P+w)}if(v=rp(y,p,m),f?f.alias.push(v):(_=_||v,_!==v&&_.alias.push(v),b&&u.name&&!po(v)&&o(u.name)),cl(v)&&l(v),g.children){const E=g.children;for(let P=0;P<E.length;P++)r(E[P],v,f&&f.children[P])}f=f||v}return _?()=>{o(_)}:Fs}function o(u){if(rl(u)){const p=n.get(u);p&&(n.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return s}function l(u){const p=cp(u,s);s.splice(p,0,u),u.record.name&&!po(u)&&n.set(u.record.name,u)}function c(u,p){let f,b={},g,m;if("name"in u&&u.name){if(f=n.get(u.name),!f)throw Ts(Ee.MATCHER_NOT_FOUND,{location:u});m=f.record.name,b=pe(co(p.params,f.keys.filter(_=>!_.optional).concat(f.parent?f.parent.keys.filter(_=>_.optional):[]).map(_=>_.name)),u.params&&co(u.params,f.keys.map(_=>_.name))),g=f.stringify(b)}else if(u.path!=null)g=u.path,f=s.find(_=>_.re.test(g)),f&&(b=f.parse(g),m=f.record.name);else{if(f=p.name?n.get(p.name):s.find(_=>_.re.test(p.path)),!f)throw Ts(Ee.MATCHER_NOT_FOUND,{location:u,currentLocation:p});m=f.record.name,b=pe({},p.params,u.params),g=f.stringify(b)}const h=[];let v=f;for(;v;)h.unshift(v.record),v=v.parent;return{name:m,path:g,params:b,matched:h,meta:lp(h)}}e.forEach(u=>r(u));function d(){s.length=0,n.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:a}}function co(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function uo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ip(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ip(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function po(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function lp(e){return e.reduce((t,s)=>pe(t,s.meta),{})}function cp(e,t){let s=0,n=t.length;for(;s!==n;){const r=s+n>>1;ll(e,t[r])<0?n=r:s=r+1}const a=dp(e);return a&&(n=t.lastIndexOf(a,n-1)),n}function dp(e){let t=e;for(;t=t.parent;)if(cl(t)&&ll(e,t)===0)return t}function cl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function fo(e){const t=tt(zn),s=tt(ir),n=We(()=>{const l=qt(e.to);return t.resolve(l)}),a=We(()=>{const{matched:l}=n.value,{length:c}=l,d=l[c-1],u=s.matched;if(!d||!u.length)return-1;const p=u.findIndex(vs.bind(null,d));if(p>-1)return p;const f=ho(l[c-2]);return c>1&&ho(d)===f&&u[u.length-1].path!==f?u.findIndex(vs.bind(null,l[c-2])):p}),r=We(()=>a.value>-1&&gp(s.params,n.value.params)),o=We(()=>a.value>-1&&a.value===s.matched.length-1&&al(s.params,n.value.params));function i(l={}){if(hp(l)){const c=t[qt(e.replace)?"replace":"push"](qt(e.to)).catch(Fs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:We(()=>n.value.href),isActive:r,isExactActive:o,navigate:i}}function up(e){return e.length===1?e[0]:e}const pp=yi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:fo,setup(e,{slots:t}){const s=Rt(fo(e)),{options:n}=tt(zn),a=We(()=>({[go(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[go(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&up(t.default(s));return e.custom?r:rr("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},r)}}}),fp=pp;function hp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function gp(e,t){for(const s in t){const n=t[s],a=e[s];if(typeof n=="string"){if(n!==a)return!1}else if(!it(a)||a.length!==n.length||n.some((r,o)=>r!==a[o]))return!1}return!0}function ho(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const go=(e,t,s)=>e??t??s,mp=yi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=tt(Da),a=We(()=>e.route||n.value),r=tt(ro,0),o=We(()=>{let c=qt(r);const{matched:d}=a.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=We(()=>a.value.matched[o.value]);ln(ro,We(()=>o.value+1)),ln(ju,i),ln(Da,a);const l=Xe();return Ds(()=>[l.value,i.value,e.name],([c,d,u],[p,f,b])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!vs(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(g=>g(c))},{flush:"post"}),()=>{const c=a.value,d=e.name,u=i.value,p=u&&u.components[d];if(!p)return mo(s.default,{Component:p,route:c});const f=u.props[d],b=f?f===!0?c.params:typeof f=="function"?f(c):f:null,m=rr(p,pe({},b,t,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return mo(s.default,{Component:m,route:c})||m}}});function mo(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const dl=mp;function bp(e){const t=op(e.routes,e),s=e.parseQuery||Gu,n=e.stringifyQuery||ao,a=e.history,r=As(),o=As(),i=As(),l=nc($t);let c=$t;ms&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=aa.bind(null,I=>""+I),u=aa.bind(null,xu),p=aa.bind(null,Ks);function f(I,W){let Y,Z;return rl(I)?(Y=t.getRecordMatcher(I),Z=W):Z=I,t.addRoute(Z,Y)}function b(I){const W=t.getRecordMatcher(I);W&&t.removeRoute(W)}function g(){return t.getRoutes().map(I=>I.record)}function m(I){return!!t.getRecordMatcher(I)}function h(I,W){if(W=pe({},W||l.value),typeof I=="string"){const R=ra(s,I,W.path),B=t.resolve({path:R.path},W),F=a.createHref(R.fullPath);return pe(R,B,{params:p(B.params),hash:Ks(R.hash),redirectedFrom:void 0,href:F})}let Y;if(I.path!=null)Y=pe({},I,{path:ra(s,I.path,W.path).path});else{const R=pe({},I.params);for(const B in R)R[B]==null&&delete R[B];Y=pe({},I,{params:u(R)}),W.params=u(W.params)}const Z=t.resolve(Y,W),ce=I.hash||"";Z.params=d(p(Z.params));const S=Ou(n,pe({},I,{hash:wu(ce),path:Z.path})),A=a.createHref(S);return pe({fullPath:S,hash:ce,query:n===ao?zu(I.query):I.query||{}},Z,{redirectedFrom:void 0,href:A})}function v(I){return typeof I=="string"?ra(s,I,l.value.path):pe({},I)}function _(I,W){if(c!==I)return Ts(Ee.NAVIGATION_CANCELLED,{from:W,to:I})}function y(I){return P(I)}function w(I){return y(pe(v(I),{replace:!0}))}function E(I,W){const Y=I.matched[I.matched.length-1];if(Y&&Y.redirect){const{redirect:Z}=Y;let ce=typeof Z=="function"?Z(I,W):Z;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=v(ce):{path:ce},ce.params={}),pe({query:I.query,hash:I.hash,params:ce.path!=null?{}:I.params},ce)}}function P(I,W){const Y=c=h(I),Z=l.value,ce=I.state,S=I.force,A=I.replace===!0,R=E(Y,Z);if(R)return P(pe(v(R),{state:typeof R=="object"?pe({},ce,R.state):ce,force:S,replace:A}),W||Y);const B=Y;B.redirectedFrom=W;let F;return!S&&ku(n,Z,Y)&&(F=Ts(Ee.NAVIGATION_DUPLICATED,{to:B,from:Z}),le(Z,Z,!0,!1)),(F?Promise.resolve(F):T(B,Z)).catch(N=>Et(N)?Et(N,Ee.NAVIGATION_GUARD_REDIRECT)?N:ae(N):U(N,B,Z)).then(N=>{if(N){if(Et(N,Ee.NAVIGATION_GUARD_REDIRECT))return P(pe({replace:A},v(N.to),{state:typeof N.to=="object"?pe({},ce,N.to.state):ce,force:S}),W||B)}else N=C(B,Z,!0,A,ce);return k(B,Z,N),N})}function O(I,W){const Y=_(I,W);return Y?Promise.reject(Y):Promise.resolve()}function x(I){const W=Oe.values().next().value;return W&&typeof W.runWithContext=="function"?W.runWithContext(I):I()}function T(I,W){let Y;const[Z,ce,S]=Yu(I,W);Y=ia(Z.reverse(),"beforeRouteLeave",I,W);for(const R of Z)R.leaveGuards.forEach(B=>{Y.push(zt(B,I,W))});const A=O.bind(null,I,W);return Y.push(A),Te(Y).then(()=>{Y=[];for(const R of r.list())Y.push(zt(R,I,W));return Y.push(A),Te(Y)}).then(()=>{Y=ia(ce,"beforeRouteUpdate",I,W);for(const R of ce)R.updateGuards.forEach(B=>{Y.push(zt(B,I,W))});return Y.push(A),Te(Y)}).then(()=>{Y=[];for(const R of S)if(R.beforeEnter)if(it(R.beforeEnter))for(const B of R.beforeEnter)Y.push(zt(B,I,W));else Y.push(zt(R.beforeEnter,I,W));return Y.push(A),Te(Y)}).then(()=>(I.matched.forEach(R=>R.enterCallbacks={}),Y=ia(S,"beforeRouteEnter",I,W,x),Y.push(A),Te(Y))).then(()=>{Y=[];for(const R of o.list())Y.push(zt(R,I,W));return Y.push(A),Te(Y)}).catch(R=>Et(R,Ee.NAVIGATION_CANCELLED)?R:Promise.reject(R))}function k(I,W,Y){i.list().forEach(Z=>x(()=>Z(I,W,Y)))}function C(I,W,Y,Z,ce){const S=_(I,W);if(S)return S;const A=W===$t,R=ms?history.state:{};Y&&(Z||A?a.replace(I.fullPath,pe({scroll:A&&R&&R.scroll},ce)):a.push(I.fullPath,ce)),l.value=I,le(I,W,Y,A),ae()}let G;function q(){G||(G=a.listen((I,W,Y)=>{if(!Se.listening)return;const Z=h(I),ce=E(Z,Se.currentRoute.value);if(ce){P(pe(ce,{replace:!0,force:!0}),Z).catch(Fs);return}c=Z;const S=l.value;ms&&Bu(no(S.fullPath,Y.delta),Gn()),T(Z,S).catch(A=>Et(A,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_CANCELLED)?A:Et(A,Ee.NAVIGATION_GUARD_REDIRECT)?(P(pe(v(A.to),{force:!0}),Z).then(R=>{Et(R,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&!Y.delta&&Y.type===Ma.pop&&a.go(-1,!1)}).catch(Fs),Promise.reject()):(Y.delta&&a.go(-Y.delta,!1),U(A,Z,S))).then(A=>{A=A||C(Z,S,!1),A&&(Y.delta&&!Et(A,Ee.NAVIGATION_CANCELLED)?a.go(-Y.delta,!1):Y.type===Ma.pop&&Et(A,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),k(Z,S,A)}).catch(Fs)}))}let Q=As(),D=As(),z;function U(I,W,Y){ae(I);const Z=D.list();return Z.length?Z.forEach(ce=>ce(I,W,Y)):console.error(I),Promise.reject(I)}function ee(){return z&&l.value!==$t?Promise.resolve():new Promise((I,W)=>{Q.add([I,W])})}function ae(I){return z||(z=!I,q(),Q.list().forEach(([W,Y])=>I?Y(I):W()),Q.reset()),I}function le(I,W,Y,Z){const{scrollBehavior:ce}=e;if(!ms||!ce)return Promise.resolve();const S=!Y&&Fu(no(I.fullPath,0))||(Z||!Y)&&history.state&&history.state.scroll||null;return Za().then(()=>ce(I,W,S)).then(A=>A&&Nu(A)).catch(A=>U(A,I,W))}const ie=I=>a.go(I);let ve;const Oe=new Set,Se={currentRoute:l,listening:!0,addRoute:f,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:m,getRoutes:g,resolve:h,options:e,push:y,replace:w,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:D.add,isReady:ee,install(I){I.component("RouterLink",fp),I.component("RouterView",dl),I.config.globalProperties.$router=Se,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>qt(l)}),ms&&!ve&&l.value===$t&&(ve=!0,y(a.location).catch(Z=>{}));const W={};for(const Z in $t)Object.defineProperty(W,Z,{get:()=>l.value[Z],enumerable:!0});I.provide(zn,Se),I.provide(ir,ai(W)),I.provide(Da,l);const Y=I.unmount;Oe.add(I),I.unmount=function(){Oe.delete(I),Oe.size<1&&(c=$t,G&&G(),G=null,l.value=$t,ve=!1,z=!1),Y()}}};function Te(I){return I.reduce((W,Y)=>W.then(()=>x(Y)),Promise.resolve())}return Se}function Tt(){return tt(zn)}function ul(e){return tt(ir)}var yp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _p(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},vp=Os.exports,bo;function Tp(){return bo||(bo=1,(function(e,t){(function(s,n){var a={};s.PubSub?(a=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=a,n(a)),e!==void 0&&e.exports&&(t=e.exports=a),t.PubSub=a,e.exports=t=a})(typeof window=="object"&&window||vp||yp,function(s){var n={},a=-1,r="*";function o(g){var m;for(m in g)if(Object.prototype.hasOwnProperty.call(g,m))return!0;return!1}function i(g){return function(){throw g}}function l(g,m,h){try{g(m,h)}catch(v){setTimeout(i(v),0)}}function c(g,m,h){g(m,h)}function d(g,m,h,v){var _=n[m],y=v?c:l,w;if(Object.prototype.hasOwnProperty.call(n,m))for(w in _)Object.prototype.hasOwnProperty.call(_,w)&&y(_[w],g,h)}function u(g,m,h){return function(){var _=String(g),y=_.lastIndexOf(".");for(d(g,g,m,h);y!==-1;)_=_.substr(0,y),y=_.lastIndexOf("."),d(g,_,m,h);d(g,r,m,h)}}function p(g){var m=String(g),h=!!(Object.prototype.hasOwnProperty.call(n,m)&&o(n[m]));return h}function f(g){for(var m=String(g),h=p(m)||p(r),v=m.lastIndexOf(".");!h&&v!==-1;)m=m.substr(0,v),v=m.lastIndexOf("."),h=p(m);return h}function b(g,m,h,v){g=typeof g=="symbol"?g.toString():g;var _=u(g,m,v),y=f(g);return y?(h===!0?_():setTimeout(_,0),!0):!1}s.publish=function(g,m){return b(g,m,!1,s.immediateExceptions)},s.publishSync=function(g,m){return b(g,m,!0,s.immediateExceptions)},s.subscribe=function(g,m){if(typeof m!="function")return!1;g=typeof g=="symbol"?g.toString():g,Object.prototype.hasOwnProperty.call(n,g)||(n[g]={});var h="uid_"+String(++a);return n[g][h]=m,h},s.subscribeAll=function(g){return s.subscribe(r,g)},s.subscribeOnce=function(g,m){var h=s.subscribe(g,function(){s.unsubscribe(h),m.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){n={}},s.clearSubscriptions=function(m){var h;for(h in n)Object.prototype.hasOwnProperty.call(n,h)&&h.indexOf(m)===0&&delete n[h]},s.countSubscriptions=function(m){var h,v,_=0;for(h in n)if(Object.prototype.hasOwnProperty.call(n,h)&&h.indexOf(m)===0){for(v in n[h])_++;break}return _},s.getSubscriptions=function(m){var h,v=[];for(h in n)Object.prototype.hasOwnProperty.call(n,h)&&h.indexOf(m)===0&&v.push(h);return v},s.unsubscribe=function(g){var m=function(O){var x;for(x in n)if(Object.prototype.hasOwnProperty.call(n,x)&&x.indexOf(O)===0)return!0;return!1},h=typeof g=="string"&&(Object.prototype.hasOwnProperty.call(n,g)||m(g)),v=!h&&typeof g=="string",_=typeof g=="function",y=!1,w,E,P;if(h){s.clearSubscriptions(g);return}for(w in n)if(Object.prototype.hasOwnProperty.call(n,w)){if(E=n[w],v&&E[g]){delete E[g],y=g;break}if(_)for(P in E)Object.prototype.hasOwnProperty.call(E,P)&&E[P]===g&&(delete E[P],y=!0)}return y}})})(Os,Os.exports)),Os.exports}var wp=Tp();const J=_p(wp);let mt=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Sp={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Jt(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function Ep(e,t){let s;const n=()=>{if(s)return s;const a=indexedDB.open(e);return a.onupgradeneeded=()=>a.result.createObjectStore(t),s=Jt(a),s.then(r=>{r.onclose=()=>s=void 0},()=>{}),s};return(a,r)=>n().then(o=>r(o.transaction(t,a).objectStore(t)))}let la;function Xs(){return la||(la=Ep("keyval-store","keyval")),la}function xp(e,t=Xs()){return t("readonly",s=>Jt(s.get(e)))}function yo(e,t,s=Xs()){return s("readwrite",n=>(n.put(t,e),Jt(n.transaction)))}function ca(e,t=Xs()){return t("readwrite",s=>(s.delete(e),Jt(s.transaction)))}function pl(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Jt(e.transaction)}function hs(e=Xs()){return e("readonly",t=>{if(t.getAllKeys)return Jt(t.getAllKeys());const s=[];return pl(t,n=>s.push(n.key)).then(()=>s)})}function Ap(e=Xs()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Jt(t.getAllKeys()),Jt(t.getAll())]).then(([n,a])=>n.map((r,o)=>[r,a[o]]));const s=[];return e("readonly",n=>pl(n,a=>s.push([a.key,a.value])).then(()=>s))})}const ws=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",wn=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!wn(e[s],t[s]))return!1;return!0}if(ws(e)&&ws(t)){const s=Object.entries(e),n=new Set(Object.keys(t));if(s.length!==n.size)return!1;for(const[a,r]of s){if(!wn(r,t[a]))return!1;n.delete(a)}return n.size===0}return!1},sn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(ws(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Pp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",_o=e=>e>="0"&&e<="9"||e==="-",Op=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var L;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(L||(L={}));const vo={"(":L.TOK_LPAREN,")":L.TOK_RPAREN,"*":L.TOK_STAR,",":L.TOK_COMMA,".":L.TOK_DOT,":":L.TOK_COLON,"@":L.TOK_CURRENT,$:L.TOK_ROOT,"]":L.TOK_RBRACKET,"{":L.TOK_LBRACE,"}":L.TOK_RBRACE},kp={"!":!0,"<":!0,"=":!0,">":!0},Cp={"	":!0,"\n":!0,"\r":!0," ":!0};class Rp{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let n,a,r;for(;this._current<t.length;)if(Pp(t[this._current]))n=this._current,a=this.consumeUnquotedIdentifier(t),s.push({start:n,type:L.TOK_UNQUOTEDIDENTIFIER,value:a});else if(vo[t[this._current]]!==void 0)s.push({start:this._current,type:vo[t[this._current]],value:t[this._current]}),this._current+=1;else if(_o(t[this._current]))r=this.consumeNumber(t),s.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),s.push(r);else if(t[this._current]==='"')n=this._current,a=this.consumeQuotedIdentifier(t),s.push({start:n,type:L.TOK_QUOTEDIDENTIFIER,value:a});else if(t[this._current]==="'")n=this._current,a=this.consumeRawStringLiteral(t),s.push({start:n,type:L.TOK_LITERAL,value:a});else if(t[this._current]==="`"){n=this._current;const o=this.consumeLiteral(t);s.push({start:n,type:L.TOK_LITERAL,value:o})}else if(kp[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&s.push(r);else if(Cp[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")n=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:n,type:L.TOK_AND,value:"&&"})):s.push({start:n,type:L.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")n=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:n,type:L.TOK_OR,value:"||"})):s.push({start:n,type:L.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&Op(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const n=t.length;for(;t[this._current]!=='"'&&this._current<n;){let a=this._current;t[a]==="\\"&&(t[a+1]==="\\"||t[a+1]==='"')?a+=2:a+=1,this._current=a}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const n=t.length;for(;t[this._current]!=="'"&&this._current<n;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const n=t.length;for(;_o(t[this._current])&&this._current<n;)this._current+=1;const a=parseInt(t.slice(s,this._current),10);return{start:s,value:a,type:L.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:L.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:L.TOK_FLATTEN,value:"[]"}):{start:s,type:L.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,n=t[s];if(this._current+=1,n==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:L.TOK_NE,value:"!="}):{start:s,type:L.TOK_NOT,value:"!"};if(n==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:L.TOK_LTE,value:"<="}):{start:s,type:L.TOK_LT,value:"<"};if(n===">")return t[this._current]==="="?(this._current+=1,{start:s,type:L.TOK_GTE,value:">="}):{start:s,type:L.TOK_GT,value:">"};if(n==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:L.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,n=t.length;for(;t[this._current]!=="`"&&this._current<n;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let a=t.slice(s,this._current).trimLeft();a=a.replace("\\`","`");const r=this.looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"${a}"`);return this._current+=1,r}looksLikeJSON(t){const n=["true","false","null"],a="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||n.includes(t))return!0;if(a.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const fl=new Rp,Re={[L.TOK_EOF]:0,[L.TOK_UNQUOTEDIDENTIFIER]:0,[L.TOK_QUOTEDIDENTIFIER]:0,[L.TOK_RBRACKET]:0,[L.TOK_RPAREN]:0,[L.TOK_COMMA]:0,[L.TOK_RBRACE]:0,[L.TOK_NUMBER]:0,[L.TOK_CURRENT]:0,[L.TOK_EXPREF]:0,[L.TOK_ROOT]:0,[L.TOK_PIPE]:1,[L.TOK_OR]:2,[L.TOK_AND]:3,[L.TOK_EQ]:5,[L.TOK_GT]:5,[L.TOK_LT]:5,[L.TOK_GTE]:5,[L.TOK_LTE]:5,[L.TOK_NE]:5,[L.TOK_FLATTEN]:9,[L.TOK_STAR]:20,[L.TOK_FILTER]:21,[L.TOK_DOT]:40,[L.TOK_NOT]:45,[L.TOK_LBRACE]:50,[L.TOK_LBRACKET]:55,[L.TOK_LPAREN]:60};class Lp{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==L.TOK_EOF){const n=this.lookaheadToken(0);this.errorToken(n,`Unexpected token type: ${n.type}, value: ${n.value}`)}return s}loadTokens(t){this.tokens=[...fl.tokenize(t),{type:L.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let n=this.nud(s),a=this.lookahead(0);for(;t<Re[a];)this.advance(),n=this.led(a,n),a=this.lookahead(0);return n}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,n,a;switch(t.type){case L.TOK_LITERAL:return{type:"Literal",value:t.value};case L.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case L.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===L.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case L.TOK_NOT:return n=this.expression(Re.Not),{type:"NotExpression",children:[n]};case L.TOK_STAR:return s={type:"Identity"},n=this.lookahead(0)===L.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Re.Star),{type:"ValueProjection",children:[s,n]};case L.TOK_FILTER:return this.led(t.type,{type:"Identity"});case L.TOK_LBRACE:return this.parseMultiselectHash();case L.TOK_FLATTEN:return s={type:L.TOK_FLATTEN,children:[{type:"Identity"}]},n=this.parseProjectionRHS(Re.Flatten),{type:"Projection",children:[s,n]};case L.TOK_LBRACKET:return this.lookahead(0)===L.TOK_NUMBER||this.lookahead(0)===L.TOK_COLON?(n=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},n)):this.lookahead(0)===L.TOK_STAR&&this.lookahead(1)===L.TOK_RBRACKET?(this.advance(),this.advance(),n=this.parseProjectionRHS(Re.Star),{children:[{type:"Identity"},n],type:"Projection"}):this.parseMultiselectList();case L.TOK_CURRENT:return{type:L.TOK_CURRENT};case L.TOK_ROOT:return{type:L.TOK_ROOT};case L.TOK_EXPREF:return a=this.expression(Re.Expref),{type:"ExpressionReference",children:[a]};case L.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==L.TOK_RPAREN;)this.lookahead(0)===L.TOK_CURRENT?(a={type:L.TOK_CURRENT},this.advance()):a=this.expression(0),o.push(a);return this.match(L.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,s){let n;switch(t){case L.TOK_DOT:const a=Re.Dot;return this.lookahead(0)!==L.TOK_STAR?(n=this.parseDotRHS(a),{type:"Subexpression",children:[s,n]}):(this.advance(),n=this.parseProjectionRHS(a),{type:"ValueProjection",children:[s,n]});case L.TOK_PIPE:return n=this.expression(Re.Pipe),{type:L.TOK_PIPE,children:[s,n]};case L.TOK_OR:return n=this.expression(Re.Or),{type:"OrExpression",children:[s,n]};case L.TOK_AND:return n=this.expression(Re.And),{type:"AndExpression",children:[s,n]};case L.TOK_LPAREN:const r=s.name,o=[];let i;for(;this.lookahead(0)!==L.TOK_RPAREN;)this.lookahead(0)===L.TOK_CURRENT?(i={type:L.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===L.TOK_COMMA&&this.match(L.TOK_COMMA),o.push(i);return this.match(L.TOK_RPAREN),{name:r,type:"Function",children:o};case L.TOK_FILTER:const c=this.expression(0);return this.match(L.TOK_RBRACKET),n=this.lookahead(0)===L.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Re.Filter),{type:"FilterProjection",children:[s,n,c]};case L.TOK_FLATTEN:const d={type:L.TOK_FLATTEN,children:[s]},u=this.parseProjectionRHS(Re.Flatten);return{type:"Projection",children:[d,u]};case L.TOK_EQ:case L.TOK_NE:case L.TOK_GT:case L.TOK_GTE:case L.TOK_LT:case L.TOK_LTE:return this.parseComparator(s,t);case L.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===L.TOK_NUMBER||p.type===L.TOK_COLON?(n=this.parseIndexExpression(),this.projectIfSlice(s,n)):(this.match(L.TOK_STAR),this.match(L.TOK_RBRACKET),n=this.parseProjectionRHS(Re.Star),{type:"Projection",children:[s,n]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const n=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw n.name="ParserError",n}parseIndexExpression(){if(this.lookahead(0)===L.TOK_COLON||this.lookahead(1)===L.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(L.TOK_RBRACKET),t}projectIfSlice(t,s){const n={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[n,this.parseProjectionRHS(Re.Star)],type:"Projection"}:n}parseSliceExpression(){const t=[null,null,null];let s=0,n=this.lookahead(0);for(;n!==L.TOK_RBRACKET&&s<3;){if(n===L.TOK_COLON)s+=1,this.advance();else if(n===L.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}n=this.lookahead(0)}return this.match(L.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const n=this.expression(Re[s]);return{type:"Comparator",name:s,children:[t,n]}}parseDotRHS(t){const s=this.lookahead(0);if([L.TOK_UNQUOTEDIDENTIFIER,L.TOK_QUOTEDIDENTIFIER,L.TOK_STAR].includes(s))return this.expression(t);if(s===L.TOK_LBRACKET)return this.match(L.TOK_LBRACKET),this.parseMultiselectList();if(s===L.TOK_LBRACE)return this.match(L.TOK_LBRACE),this.parseMultiselectHash();const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseProjectionRHS(t){if(Re[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===L.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===L.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===L.TOK_DOT)return this.match(L.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==L.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===L.TOK_COMMA&&(this.match(L.TOK_COMMA),this.lookahead(0)===L.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(L.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[L.TOK_UNQUOTEDIDENTIFIER,L.TOK_QUOTEDIDENTIFIER];let n,a,r;for(;;){if(n=this.lookaheadToken(0),!s.includes(n.type))throw new Error(`Expecting an identifier token, got: ${n.type}`);if(a=n.value,this.advance(),this.match(L.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:a}),this.lookahead(0)===L.TOK_COMMA)this.match(L.TOK_COMMA);else if(this.lookahead(0)===L.TOK_RBRACE){this.match(L.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const hl=new Lp;var $;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})($||($={}));class Mp{constructor(t){this.TYPE_NAME_TABLE={[$.TYPE_NUMBER]:"number",[$.TYPE_ANY]:"any",[$.TYPE_STRING]:"string",[$.TYPE_ARRAY]:"array",[$.TYPE_OBJECT]:"object",[$.TYPE_BOOLEAN]:"boolean",[$.TYPE_EXPREF]:"expression",[$.TYPE_NULL]:"null",[$.TYPE_ARRAY_NUMBER]:"Array<number>",[$.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let n=0;for(let a=0;a<s.length;a+=1)n+=s[a];return n/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[n,a]=s;return n.includes(a)},this.functionEndsWith=s=>{const[n,a]=s;return n.includes(a,n.length-a.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[n,a]=s;return a.join(n)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>ws(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const n=[],a=this._interpreter,r=s[0],o=s[1];for(let i=0;i<o.length;i+=1)n.push(a.visit(r,o[i]));return n},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===$.TYPE_NUMBER)return Math.max(...s);const a=s;let r=a[0];for(let o=1;o<a.length;o+=1)r.localeCompare(a[o])<0&&(r=a[o]);return r},this.functionMaxBy=s=>{const n=s[1],a=s[0],r=this.createKeyFunction(n,[$.TYPE_NUMBER,$.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<a.length;c+=1)l=r&&r(a[c]),l!==void 0&&l>o&&(o=l,i=a[c]);return i},this.functionMerge=s=>{let n={};for(let a=0;a<s.length;a+=1){const r=s[a];n=Object.assign(n,r)}return n},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===$.TYPE_NUMBER)return Math.min(...s);const a=s;let r=a[0];for(let o=1;o<a.length;o+=1)a[o].localeCompare(r)<0&&(r=a[o]);return r},this.functionMinBy=s=>{const n=s[1],a=s[0],r=this.createKeyFunction(n,[$.TYPE_NUMBER,$.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<a.length;c+=1)l=r&&r(a[c]),l!==void 0&&l<o&&(o=l,i=a[c]);return i},this.functionNotNull=s=>{for(let n=0;n<s.length;n+=1)if(this.getTypeName(s[n])!==$.TYPE_NULL)return s[n];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===$.TYPE_STRING){const r=s;let o="";for(let i=r.length-1;i>=0;i-=1)o+=r[i];return o}const a=s.slice(0);return a.reverse(),a},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const n=s[0].slice(0);if(n.length===0)return n;const a=this._interpreter,r=s[1],o=this.getTypeName(a.visit(r,n[0]));if(o!==void 0&&![$.TYPE_NUMBER,$.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<n.length;l+=1)i.push([l,n[l]]);i.sort((l,c)=>{const d=a.visit(r,l[1]),u=a.visit(r,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)n[l]=i[l][1];return n},this.functionStartsWith=([s,n])=>s.startsWith(n),this.functionSum=([s])=>s.reduce((n,a)=>n+a,0),this.functionToArray=([s])=>this.getTypeName(s)===$.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const n=this.getTypeName(s);let a;return n===$.TYPE_NUMBER?s:n===$.TYPE_STRING&&(a=+s,!isNaN(a))?a:null},this.functionToString=([s])=>this.getTypeName(s)===$.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case $.TYPE_NUMBER:return"number";case $.TYPE_STRING:return"string";case $.TYPE_ARRAY:return"array";case $.TYPE_OBJECT:return"object";case $.TYPE_BOOLEAN:return"boolean";case $.TYPE_EXPREF:return"expref";case $.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[$.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[$.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[$.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[$.TYPE_STRING,$.TYPE_ARRAY]},{types:[$.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[$.TYPE_STRING]},{types:[$.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[$.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[$.TYPE_STRING]},{types:[$.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[$.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[$.TYPE_STRING,$.TYPE_ARRAY,$.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[$.TYPE_EXPREF]},{types:[$.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[$.TYPE_ARRAY_NUMBER,$.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[$.TYPE_ARRAY]},{types:[$.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[$.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[$.TYPE_ARRAY_NUMBER,$.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[$.TYPE_ARRAY]},{types:[$.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[$.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[$.TYPE_STRING,$.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[$.TYPE_ARRAY_STRING,$.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[$.TYPE_ARRAY]},{types:[$.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[$.TYPE_STRING]},{types:[$.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[$.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[$.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[$.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[$.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[$.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[$.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,n){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:n}}callFunction(t,s){const n=this.functionTable[t];if(n===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,n._signature),n._func.call(this,s)}validateInputSignatures(t,s){for(let n=0;n<s.length;n+=1)if("variadic"in s[n]&&n!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${n+1} must occur last`)}validateArgs(t,s,n){var a,r;let o;this.validateInputSignatures(t,n);const i=n.filter(g=>{var m;return(m=!g.optional)!==null&&m!==void 0?m:!1}).length,l=(r=(a=n[n.length-1])===null||a===void 0?void 0:a.variadic)!==null&&r!==void 0?r:!1,c=s.length<i,d=s.length>n.length,u=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw o=n.length>1,new Error(`ArgumentError: ${t}() takes ${u}${i} argument${o&&"s"||""} but received ${s.length}`);let p,f,b;for(let g=0;g<n.length;g+=1){b=!1,p=n[g].types,f=this.getTypeName(s[g]);let m;for(m=0;m<p.length;m+=1)if(f!==void 0&&this.typeMatches(f,p[m],s[g])){b=!0;break}if(!b&&f!==void 0){const h=p.map(v=>this.TYPE_NAME_TABLE[v]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${g+1} to be type (${h}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,s,n){if(s===$.TYPE_ANY)return!0;if(s===$.TYPE_ARRAY_STRING||s===$.TYPE_ARRAY_NUMBER||s===$.TYPE_ARRAY){if(s===$.TYPE_ARRAY)return t===$.TYPE_ARRAY;if(t===$.TYPE_ARRAY){let a;s===$.TYPE_ARRAY_NUMBER?a=$.TYPE_NUMBER:s===$.TYPE_ARRAY_STRING&&(a=$.TYPE_STRING);for(let r=0;r<n.length;r+=1){const o=this.getTypeName(n[r]);if(o!==void 0&&a!==void 0&&!this.typeMatches(o,a,n[r]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return $.TYPE_STRING;case"[object Number]":return $.TYPE_NUMBER;case"[object Array]":return $.TYPE_ARRAY;case"[object Boolean]":return $.TYPE_BOOLEAN;case"[object Null]":return $.TYPE_NULL;case"[object Object]":return t.jmespathType===L.TOK_EXPREF?$.TYPE_EXPREF:$.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const n=this._interpreter;return r=>{const o=n.visit(t,r);if(!s.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${s.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Ip{constructor(){this._rootValue=null,this.runtime=new Mp(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let n,a,r,o,i,l,c,d,u,p,f;switch(t.type){case"Field":return s===null?null:ws(s)?(l=s[t.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(t.children[0],s),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(s))return null;let b=t.value;return b<0&&(b=s.length+b),r=s[b],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(s))return null;const g=[...t.children],m=this.computeSliceParams(s.length,g),[h,v,_]=m;if(r=[],_>0)for(p=h;p<v;p+=_)r.push(s[p]);else for(p=h;p>v;p+=_)r.push(s[p]);return r;case"Projection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)a=this.visit(t.children[1],f[p]),a!==null&&u.push(a);return u;case"ValueProjection":if(f=this.visit(t.children[0],s),!ws(f))return null;u=[];const y=Object.values(f);for(p=0;p<y.length;p+=1)a=this.visit(t.children[1],y[p]),a!==null&&u.push(a);return u;case"FilterProjection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;const w=[],E=[];for(p=0;p<f.length;p+=1)n=this.visit(t.children[2],f[p]),sn(n)||w.push(f[p]);for(let C=0;C<w.length;C+=1)a=this.visit(t.children[1],w[C]),a!==null&&E.push(a);return E;case"Comparator":switch(o=this.visit(t.children[0],s),i=this.visit(t.children[1],s),t.name){case L.TOK_EQ:r=wn(o,i);break;case L.TOK_NE:r=!wn(o,i);break;case L.TOK_GT:r=o>i;break;case L.TOK_GTE:r=o>=i;break;case L.TOK_LT:r=o<i;break;case L.TOK_LTE:r=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case L.TOK_FLATTEN:const P=this.visit(t.children[0],s);if(!Array.isArray(P))return null;let O=[];for(p=0;p<P.length;p+=1)a=P[p],Array.isArray(a)?O=[...O,...a]:O.push(a);return O;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],s));return u;case"MultiSelectHash":if(s===null)return null;u={};let x;for(p=0;p<t.children.length;p+=1)x=t.children[p],u[x.name]=this.visit(x.value,s);return u;case"OrExpression":return n=this.visit(t.children[0],s),sn(n)&&(n=this.visit(t.children[1],s)),n;case"AndExpression":return o=this.visit(t.children[0],s),sn(o)?o:this.visit(t.children[1],s);case"NotExpression":return o=this.visit(t.children[0],s),sn(o);case"Literal":return t.value;case L.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case L.TOK_CURRENT:return s;case L.TOK_ROOT:return this._rootValue;case"Function":const T=[];for(let C=0;C<t.children.length;C+=1)T.push(this.visit(t.children[C],s));return this.runtime.callFunction(t.name,T);case"ExpressionReference":const k=t.children[0];return k.jmespathType=L.TOK_EXPREF,k;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[n,a,r]=s;if(r===null)r=1;else if(r===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=r<0;return n=n===null?o?t-1:0:this.capSliceRange(t,n,r),a=a===null?o?-1:t:this.capSliceRange(t,a,r),[n,a,r]}capSliceRange(t,s,n){let a=s;return a<0?(a+=t,a<0&&(a=n<0?-1:0)):a>=t&&(a=n<0?t-1:t),a}}const lr=new Ip,Dp=$.TYPE_ANY,Np=$.TYPE_ARRAY,Bp=$.TYPE_ARRAY_NUMBER,Fp=$.TYPE_ARRAY_STRING,$p=$.TYPE_BOOLEAN,Up=$.TYPE_EXPREF,Hp=$.TYPE_NULL,Gp=$.TYPE_NUMBER,zp=$.TYPE_OBJECT,jp=$.TYPE_STRING;function Yp(e){return hl.parse(e)}function Kp(e){return fl.tokenize(e)}const qp=(e,t,s)=>{lr.runtime.registerFunction(e,t,s)};function Wp(e,t){const s=hl.parse(t);return lr.search(s,e)}const Vp=lr,Ze={compile:Yp,registerFunction:qp,search:Wp,tokenize:Kp,TreeInterpreter:Vp,TYPE_ANY:Dp,TYPE_ARRAY_NUMBER:Bp,TYPE_ARRAY_STRING:Fp,TYPE_ARRAY:Np,TYPE_BOOLEAN:$p,TYPE_EXPREF:Up,TYPE_NULL:Hp,TYPE_NUMBER:Gp,TYPE_OBJECT:zp,TYPE_STRING:jp},ft=class ft{static async appendPrompt(t,s){yo(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{hs().then(n=>{n=n.filter(a=>a.indexOf(this.DELIM_PROMPTS)!=-1),n.length>ft.MAX_PROMPTS_VALS&&ca(n[0])})}).catch(n=>console.error("~IDB Failed | ",n))}static async appendVIR_products(t){t.forEach(s=>{let n=JSON.stringify({ts:Date.now(),name:s[1]});yo(s[0],LZString.compressToUTF16(n)).then(async()=>{}).catch(a=>console.error("~IDB Failed | ",a))})}static async keys(t,s){hs().then(n=>{n=n.filter(a=>a.indexOf(t)!=-1),s&&s(n)})}static async get(t,s){xp(t).then(n=>{try{n=JSON.parse(LZString.decompressFromUTF16(n))}catch{}finally{s&&s(n)}})}static async entries(t,s){Ap().then(n=>{n=n.filter(a=>a[0].indexOf(t)!=-1),n=n.map(a=>{try{a[1]=JSON.parse(LZString.decompressFromUTF16(a[1]))}catch{}finally{}return a}),s&&s(n)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,n){let a="";switch(t){case"PROMPTS_COUNT":hs().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),a=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,a&&n&&n(a)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":hs().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(ft.DELIM_PROMPTS)[0]==s&&ca(i)})}),a="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",a);break;case"VIR_COUNT":hs().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),a=`There are ${o.length} VNR names in local IDB storage.`,a&&n&&n(a)});break;case"VIR_CLEAR":let r=0;await hs().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(ft.DELIM_VIR)[0]==s&&(r++,ca(i))})}),a=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),a="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",a),a&&n&&n(a)}};ft.MAX_TYPEAHEAD_ROWS=14,ft.MAX_PROMPTS_VALS=50,ft.DELIM_PROMPTS="_",ft.DELIM_VIR="-",ft.DELIM_SNDX="|";let os=ft;const ge=uu("AppState",()=>{const e=Tt(),t="DEV",s="BMA Tourney v0.0.5 ",n="#app",a=Rt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let r=Rt([]),o=Rt([]);const i=x=>{r.push(x),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},l=x=>{o.push(x),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const x=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",x),x)try{const T=JSON.parse(x);return console.log("[appState] Parsed session_user:",T),T}catch(T){console.error("Failed to parse session_user from localStorage:",T)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Xe({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Xe({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features)));else{let x=os.decompr(localStorage.getItem("feature_flags"));x=Object.assign(u.value.features,JSON.parse(x));for(let T in x)typeof u.value?.env_override[t][T]<"u"&&(x[T]=u.value.env_override[t][T]);localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features=x)))}},f=()=>{const x=document.querySelector(n);if(x){const T=x.dataset;for(let k in T){const C=k.replace(/^sync/,""),G=Object.keys(u.value.features).find(q=>q.toLowerCase()===C.toLowerCase());if(G){const q=u.value.features[G]?.state;q&&(T[k]=q)}}}},b=(x="Theme",T={state:"dark"})=>{const k=document.querySelector(n);k&&(k.dataset["sync"+x]=T.state)},g=(x="Theme",T={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&T){let C=JSON.parse(os.decompr(localStorage.getItem("feature_flags")));C[x]={state:T.state},localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features=C))),b(x,T),J.publish("APP.ROUTE_SYNC",`{ "${x}": ${JSON.stringify(T)}}`)}},m=x=>{const T=u.value?.features?.Lang?.state;let k=_.value.microcopy.language.filter(C=>C.code==T)[0]?.copy;if(k=k.filter(C=>C[0]==x)[0],k)return k[1]},h=(x=":version")=>{let[T,k,C]=x.split(" ");switch(T=T.toLocaleLowerCase(),C=="true"&&(C=!0),C=="false"&&(C=!1),T){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":g(k,{state:C});break;case":route":neodigmToast.q(`route ${k}`,"brand"),e.push({name:k});break}};p(),f();const v=Rt({designer:"guided_tour",notifications:{unread:0}}),_=Xe({sports:mt,microcopy:Sp.getMeta()}),y=We(()=>d.value.session_user.fname+" "+d.value.session_user.lname),w=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},E=()=>{localStorage.removeItem("session_user")};function P(x){return d.value.session_user.authenticated=!0,d.value.session_user.token=x,w(),d.value.session_app.route="chat"}function O(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",E(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:v,appMeta:_,appSession:d,clearSessionUser:E,concatFirstLast:y,coreBetSlip:o,coreTourn:r,doCLI:h,doLogin:P,doLogout:O,hierTopics:a,i18n:m,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:w,setFeaturePersistPub:g}}),Ye=class Ye{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Ye.setTJO(null),location.reload()}static async doSignin(t,s=null){const n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",n)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),s&&s(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",n)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),s&&s(r)}}static async checkUserName(t,s=null){const n={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",n)).json();return s&&s(r),r}static async resetHash(t,s,n=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const a=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,r={method:"POST",body:JSON.stringify({guid:t,hash:a}),headers:Ye.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();n&&n(i)}static genHeaders(t={}){let s={};return s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company),s}static async fetchTournaments(t=null){const s={method:"GET",headers:Ye.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(a),a}static async fetchBetSlips(t,s="",n="",a=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(r+=`/${s}`),s&&n&&(r+=`/${n}`);const o={method:"GET",headers:Ye.genHeaders()},l=await(await fetch(this.API_baseURI+r,o)).json();return a&&a(l),l}static async fetchLeaderboard(t,s="",n=null){let a=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(a+=`&user=${s}`);const r={method:"GET",headers:Ye.genHeaders()},i=await(await fetch(this.API_baseURI+a,r)).json();return n&&n(i),i}static async postBetSlips(t,s=null){const n=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),a=await Promise.all(n);return s&&s(a),a}static async fetchPromotions(t=null){const s={method:"GET",headers:Ye.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",s)).json();return t&&t(a),a}};Ye.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Ye.API_ver="v5",Ye.jsState={},Ye.jsMeta={},Ye.jsTJO=null;let we=Ye;const qs={shootConfetti(){if(typeof confetti=="function"){let n=function(a,r){confetti({...t,...r,particleCount:Math.floor(e*a)})};var s=n,e=200,t={origin:{y:.7}};n(.25,{zIndex:304,spread:26,startVelocity:55}),n(.2,{zIndex:304,spread:60}),n(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),n(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),n(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const n={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...n,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const n in t)e[n]&&t[n]!=e[n]&&(s[n]=e[n]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){}},Zt=(e,t)=>{const s=e.__vccOpts||e;for(const[n,a]of t)s[n]=a;return s},Jp={class:"auth-page"},Xp={__name:"splash_route",setup(e){const t=Tt(),s=ul();return ge(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(n,a)=>(nt(),vt("div",Jp,[...a[0]||(a[0]=[Qt('<div class="auth-page-left" data-v-910ecc85><div class="auth-bg" data-v-910ecc85><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div></div><div class="auth-overlay" data-v-910ecc85></div><div class="auth-branding-content" data-v-910ecc85><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-910ecc85><p class="auth-branding-tagline" data-v-910ecc85>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-910ecc85>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-910ecc85> © 2026 Bet Max Action. All rights reserved. </div></div>',1),M("div",{class:"auth-page-right"},[M("div",{class:"auth-card splash-content"},[M("p",{class:"splash-message"},"Loading Tournaments..."),M("br"),M("br"),M("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[M("div")])])],-1)])]))}},To=Zt(Xp,[["__scopeId","data-v-910ecc85"]]);class Qp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const s=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",n=s==="dark";let a=this.getAttribute("data-sport-group")||"Soccer",r,o;a==="Multi"?(r="Multi",o=`var( --sport-icon__Multi--${s} )`):(r=a.replaceAll(" ","_"),o=`var( --sport-icon__${r}--${s} )`),this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-sport-icon",Qp);class Zp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners(),this.observeCardSize()}disconnectedCallback(){this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,s={}){const n=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(n)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),n=t.target.closest(".btn-join"),a=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(n){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(a){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,n){s!==n&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const s=t.scrollHeight-t.clientHeight,n=this.getAttribute("data-compact")==="true";!n&&s>2?this.setAttribute("data-compact","true"):n&&s<-10&&this.removeAttribute("data-compact")})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(a=>Array.isArray(a))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(a=>Array.isArray(a))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const n=s.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:s.find(r=>Array.isArray(r))?.length||0,max:parseInt(n?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const n=this.getAttribute("data-bma-tourn-tags");if(!n)return null;try{const a=JSON.parse(n);if(!Array.isArray(a))return null;const r=a.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===s&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[s]&&o[s].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=mt.find(n=>n.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(n=>{const a=n.title||"Match";let r="TBD";if(n.scheduled_at)try{r=new Date(n.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=n.scheduled_at}return`  ${a} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(n=>typeof n=="object"&&n.sport_key?n.sport_key:n):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let n="";for(let a=0;a<s;a++){const r=t[a].key,o=mt.find(l=>l.key===r),i=o?o.group:"default";n+=`<bma-sport-icon sport="${r}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(n+=`<span class="sport-count">+${t.length-3}</span>`),n}render(){const t=this.getTheme(),s=t==="dark",n=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
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
        :host([data-bma-tourn-status="LOCKED"][data-user-participating]) .btn-info {
          background: rgba(247, 198, 13, 0.15);
          color: ${s?"#F7C60D":"#B28F09"};
          border: 1px solid rgba(247, 198, 13, 0.3);
        }

        :host([data-bma-tourn-status="LOCKED"][data-user-participating]) .btn-info:hover {
          background: rgba(247, 198, 13, 0.25);
          border-color: rgba(247, 198, 13, 0.4);
          box-shadow: 0 0 12px rgba(247, 198, 13, 0.3);
          color: ${s?"#FFD700":"#F7C60D"};
        }

        /* Gray INFO button for LOCKED tournaments user hasn't joined */
        :host([data-bma-tourn-status="LOCKED"]:not([data-user-participating])) .btn-info {
          background: rgba(30, 30, 30, 0.85);
          color: #FAFAFA;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        :host([data-bma-tourn-status="LOCKED"]:not([data-user-participating])) .btn-info:hover {
          background: rgba(50, 50, 50, 0.9);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
        }

        /* Gray INFO button for COMPLETED status */
        :host([data-bma-tourn-status="COMPLETED"]) .btn-info {
          background: rgba(30, 30, 30, 0.85);
          color: #FAFAFA;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        :host([data-bma-tourn-status="COMPLETED"]) .btn-info:hover {
          background: rgba(50, 50, 50, 0.9);
          border-color: rgba(255, 255, 255, 0.25);
          box-shadow: 0 0 12px rgba(255, 255, 255, 0.15);
          color: #FFFFFF;
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
          <button class="btn-info" aria-label="Tournament information"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Info</button>
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
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",Zp);class ef extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,n){if(s!==n){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?qs.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{J.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const s=this.shadowRoot.querySelector(".content_stake_text input");s&&s.addEventListener("input",n=>{const a=n.target.value;this.setAttribute("data-stake",a)})}render(){this.shadowRoot.innerHTML=`
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",ef);class tf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=mt.find(n=>n.key===t);return s?s.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing tournament tags:",s),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const n=this.scoreboard;if(!n||!n.time_remaining)return!1;const a=n.time_remaining.toLowerCase();return a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer()}disconnectedCallback(){this.stopCountdownTimer()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const s=this.shadowRoot?.querySelector(".countdown");s&&(s.textContent=t)}attributeChangedCallback(t,s,n){s!==n&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const n=s-t;if(n<=0)return"";const a=Math.floor(n/(1e3*60*60)),r=Math.floor(n%(1e3*60*60)/(1e3*60));return a>24?`${Math.floor(a/24)}d ${a%24}h`:a>0?`${a}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const n=s.time_remaining.toLowerCase();if(n==="final")return{type:"final",text:"Final",color:"#969696"};if(n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")){const a=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,r=s.period!==void 0&&s.period!==null&&s.period!==0;if(a||r)return{type:"live",text:s.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let n=this.scheduledAt;if(!n.includes("Z")&&!n.match(/[+-]\d{2}:\d{2}$/)&&(n=n+"Z"),new Date(n)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,n,a,r){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:n,price:a,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,s,n,a,r=!1){if(!n)return'<button class="btn btn--empty" disabled></button>';const o=n.price,i=n.point;let l="";return t==="spread"?l=`${i>0?`+${i}`:i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?l=o:t==="total"&&(l=`${a}${i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${r?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${o}"
                    ${i?`data-point="${i}"`:""}
                    ${r?'data-disabled="true"':""}>
            ${l}
        </button>`}render(){const t=this.theme==="dark",s=this.oddsMarkets,n=s&&(s.h2h||s.totals||s.spreads),a=this.isMatchInProgressLocked(),r=this.isDisabled||a,o=n,i=this.getGameStatus(),l=this.scoreboard,c=l?.home_score||0,d=l?.away_score||0,u=i?.type==="live"||i?.type==="final",p=parseInt(c),f=parseInt(d),b=u&&i?.type==="final"&&p>f,g=u&&i?.type==="final"&&f>p,m=s?.spreads?.outcomes?.find(E=>E.name===this.homeTeam),h=s?.spreads?.outcomes?.find(E=>E.name===this.awayTeam),v=s?.h2h?.outcomes?.find(E=>E.name===this.homeTeam),_=s?.h2h?.outcomes?.find(E=>E.name===this.awayTeam),y=s?.totals?.outcomes?.find(E=>E.name==="Over"),w=s?.totals?.outcomes?.find(E=>E.name==="Under");this.shadowRoot.innerHTML=`
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
                        <div class="team team--home ${b?"team--winner":""} ${g?"team--loser":""}">
                            <span class="team-name">${this.homeTeam}</span>
                            ${u?`<span class="team-score">${c}</span>`:""}
                        </div>
                        ${o?`
                            <div class="buttons">
                                ${this.renderButton("spread","home",m,null,r)}
                                ${this.renderButton("money","home",v,null,r)}
                                ${this.renderButton("total","under",w,"U",r)}
                            </div>
                        `:""}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${g?"team--winner":""} ${b?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${u?`<span class="team-score">${d}</span>`:""}
                        </div>
                        ${o?`
                            <div class="buttons">
                                ${this.renderButton("spread","away",h,null,r)}
                                ${this.renderButton("money","away",_,null,r)}
                                ${this.renderButton("total","over",y,"O",r)}
                            </div>
                        `:""}
                    </div>
                </div>
            </div>
        `,o&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(E=>{const P=E.dataset.betType,O=E.dataset.team,x=E.dataset.price,T=E.dataset.point||null;E.addEventListener("click",k=>this.handleButtonClick(k,P,O,x,T))})}}customElements.define("bma-bet-match-card",tf);class sf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,n){s!==n&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(s){return console.warn("[bma-match-status] Failed to parse scoreboard data:",s),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=mt.find(s=>s.key===this.sportId);return t?t.group:""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let s=this.scheduledAt;!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z");const a=new Date(s)-t;if(a<=0)return"";const r=Math.floor(a/(1e3*60*60)),o=Math.floor(a%(1e3*60*60)/(1e3*60));return r>24?`${Math.floor(r/24)}d ${r%24}h`:r>0?`${r}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let n=!1;if(this.scheduledAt){let i=this.scheduledAt;!i.includes("Z")&&!i.match(/[+-]\d{2}:\d{2}$/)&&(i=i+"Z");const l=new Date(i),c=new Date(Date.now()-300*1e3);n=l<c}let a="UPCOMING",r=null;if(t?.time_remaining){const i=t.time_remaining;i==="Final"?(a="FINAL",r="Final"):i==="In Progress"?(a="IN_PROGRESS",r="In Progress"):(a="IN_PROGRESS",r=i)}else s&&n?(a="FINAL",r="Final"):(a="UPCOMING",r="Upcoming");const o=a==="UPCOMING"?this.getCountdownText():"";return{status:a,timeRemaining:r,countdown:o}}render(){const{status:t,timeRemaining:s,countdown:n}=this.getMatchStatus(),a=this.homeScore!==null&&this.awayScore!==null,r=this.scheduledAt?qs.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=parseInt(this.homeScore),i=parseInt(this.awayScore),l=a&&t==="FINAL"&&o>i,c=a&&t==="FINAL"&&i>o;this.shadowRoot.innerHTML=`
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
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #F7C60D;
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

        .countdown-badge {
          display: inline-block;
          background: rgba(247, 198, 13, 0.15);
          color: #F7C60D;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 2px 8px;
          border-radius: 4px;
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
          ${a?`
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
          ${s||t}${n?`<span class="countdown-badge">${n}</span>`:""}
        </span>
      </div>
      <div class="match-details">
        <div class="detail-row">Scheduled: ${r}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
      </div>
    `}}customElements.define("bma-match-status",sf);class jt extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this.render(),this.attachEventListeners()}attributeChangedCallback(t,s,n){s!==n&&(this.render(),this.attachEventListeners())}toggleExpanded(){jt.currentlyExpanded&&jt.currentlyExpanded!==this&&jt.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),s.classList.add("expanded"),jt.currentlyExpanded=this):(t.classList.remove("open"),s.classList.remove("expanded"),jt.currentlyExpanded===this&&(jt.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),s&&s.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",s=>{s.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let s=0,n=0,a=0,r=0,o=0;return t.forEach(i=>{const l=i.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?s++:n++:(a++,r+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:s,losses:n,pending:a,total:s+n+a,pendingStakes:r,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches,n=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const a=t.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(n)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(a.length===0)return'<p class="no-bets">No reconciled bets</p>';const r={};s.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(r[c]=l)});const o={};a.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=r[c];if(d){o[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=mt.find(f=>f.key===u);o[c].sportKey=p?.group||"default"}o[c].bets.push(l)});let i="";return Object.keys(o).forEach(l=>{const c=o[l],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;i+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const b=f.bet||[];if(b.length===0)return;const g=b[0];Object.keys(g).filter(h=>h!=="short_title").forEach(h=>{const v=g[h];if(!v||typeof v!="object")return;const _=(v.type||"").toUpperCase(),y=parseFloat(v.stake||v.wager||0).toFixed(2),w=v.odds||"-",E=w>0?`+${w}`:`${w}`,P=parseFloat(v.payout||0).toFixed(2),O=v.reconciled===!0;let x="pending",T="Pending";O&&Number(P)>0?(x="won",T="Won"):O&&Number(P)===0?(x="lost",T="Lost"):O&&(x="reconciled",T="Settled"),i+=`<div class="bet-item bet-item--${x}">
                        <div class="bet-item__header">
                            <span class="bet-item__team">${h}</span>
                            <span class="bet-status-badge ${x}">${T}</span>
                        </div>
                        <div class="bet-item__detail">
                            <span>${_}</span>
                            <span>Stake: $${y}</span>
                            <span>Odds: ${E}</span>
                            <span class="${x==="won"?"payout-win":x==="lost"?"payout-loss":""}">Payout: $${P}</span>
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
        `}}customElements.define("bma-leaderboard-card",jt);class gl{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:n}=t.Bet,{home_team_id:a,home_team_score:r,away_team_id:o,away_team_score:i}=t.Match,l=s?.toUpperCase()||"",c=parseFloat(r)||0,d=parseFloat(i)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${a} (${c})`,away:`${o} (${d})`,scope:n}),l){case"MONEY":return this._evaluateMoneyline(n.team_id,a,o,c,d);case"SPREAD":return this._evaluateSpread(n.team_id,n.point,a,o,c,d);case"TOTAL":return this._evaluateTotal(n.over,n.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,s,n,a,r){const o=t===s,i=t===n;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=a>r,c=r>a;if(a===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,s,n,a,r,o){const i=t===n,l=t===a;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let d=r,u=o;i?d=r+c:u=o+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const g=i&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${g?"WON":"LOST"}`),g}static _evaluateTotal(t,s,n,a){const r=n+a,o=t&&t!=="";if(!o&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:s);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:n,stake:a}=t.Bet,r=s?.toUpperCase()||"",o=parseFloat(n)||0,i=parseFloat(a)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,s){let n=0;return t>0?n=s*(t/100):t<0?n=s/(Math.abs(t)/100):n=0,s+n}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function wo(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function cr(e,t){e===void 0&&(e={}),t===void 0&&(t={});const s=["__proto__","constructor","prototype"];Object.keys(t).filter(n=>s.indexOf(n)<0).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:wo(t[n])&&wo(e[n])&&Object.keys(t[n]).length>0&&cr(e[n],t[n])})}const ml={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function yt(){const e=typeof document<"u"?document:{};return cr(e,ml),e}const nf={document:ml,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function $e(){const e=typeof window<"u"?window:{};return cr(e,nf),e}function af(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function rf(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function bl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function Sn(){return Date.now()}function of(e){const t=$e();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function lf(e,t){t===void 0&&(t="x");const s=$e();let n,a,r;const o=of(e);return s.WebKitCSSMatrix?(a=o.transform||o.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(i=>i.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix(a==="none"?"":a)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?a=r.m41:n.length===16?a=parseFloat(n[12]):a=parseFloat(n[4])),t==="y"&&(s.WebKitCSSMatrix?a=r.m42:n.length===16?a=parseFloat(n[13]):a=parseFloat(n[5])),a||0}function nn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function cf(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ke(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const n=s<0||arguments.length<=s?void 0:arguments[s];if(n!=null&&!cf(n)){const a=Object.keys(Object(n)).filter(r=>t.indexOf(r)<0);for(let r=0,o=a.length;r<o;r+=1){const i=a[r],l=Object.getOwnPropertyDescriptor(n,i);l!==void 0&&l.enumerable&&(nn(e[i])&&nn(n[i])?n[i].__swiper__?e[i]=n[i]:Ke(e[i],n[i]):!nn(e[i])&&nn(n[i])?(e[i]={},n[i].__swiper__?e[i]=n[i]:Ke(e[i],n[i])):e[i]=n[i])}}}return e}function an(e,t,s){e.style.setProperty(t,s)}function yl(e){let{swiper:t,targetPosition:s,side:n}=e;const a=$e(),r=-t.translate;let o=null,i;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(t.cssModeFrameID);const c=s>r?"next":"prev",d=(p,f)=>c==="next"&&p>=f||c==="prev"&&p<=f,u=()=>{i=new Date().getTime(),o===null&&(o=i);const p=Math.max(Math.min((i-o)/l,1),0),f=.5-Math.cos(p*Math.PI)/2;let b=r+f*(s-r);if(d(b,s)&&(b=s),t.wrapperEl.scrollTo({[n]:b}),d(b,s)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[n]:b})}),a.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=a.requestAnimationFrame(u)};u()}function Lt(e,t){t===void 0&&(t="");const s=$e(),n=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(a=>a.matches(t)):n}function df(e,t){const s=[t];for(;s.length>0;){const n=s.shift();if(e===n)return!0;s.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function uf(e,t){const s=$e();let n=t.contains(e);return!n&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(n=[...t.assignedElements()].includes(e),n||(n=df(e,t))),n}function En(e){try{console.warn(e);return}catch{}}function Na(e,t){t===void 0&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:af(t)),s}function pf(e,t){const s=[];for(;e.previousElementSibling;){const n=e.previousElementSibling;t?n.matches(t)&&s.push(n):s.push(n),e=n}return s}function ff(e,t){const s=[];for(;e.nextElementSibling;){const n=e.nextElementSibling;t?n.matches(t)&&s.push(n):s.push(n),e=n}return s}function Yt(e,t){return $e().getComputedStyle(e,null).getPropertyValue(t)}function So(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function hf(e,t){const s=[];let n=e.parentElement;for(;n;)s.push(n),n=n.parentElement;return s}function Eo(e,t,s){const n=$e();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}let da;function gf(){const e=$e(),t=yt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function _l(){return da||(da=gf()),da}let ua;function mf(e){let{userAgent:t}=e===void 0?{}:e;const s=_l(),n=$e(),a=n.navigator.platform,r=t||n.navigator.userAgent,o={ios:!1,android:!1},i=n.screen.width,l=n.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=a==="Win32";let b=a==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&b&&s.touch&&g.indexOf(`${i}x${l}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),b=!1),c&&!f&&(o.os="android",o.android=!0),(d||p||u)&&(o.os="ios",o.ios=!0),o}function vl(e){return e===void 0&&(e={}),ua||(ua=mf(e)),ua}let pa;function bf(){const e=$e(),t=vl();let s=!1;function n(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(n()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));s=l<16||l===16&&c<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=n(),o=r||a&&t.ios;return{isSafari:s||r,needPerspectiveFix:s,need3dFix:o,isWebView:a}}function Tl(){return pa||(pa=bf()),pa}function yf(e){let{swiper:t,on:s,emit:n}=e;const a=$e();let r=null,o=null;const i=()=>{!t||t.destroyed||!t.initialized||(n("beforeResize"),n("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(r=new ResizeObserver(u=>{o=a.requestAnimationFrame(()=>{const{width:p,height:f}=t;let b=p,g=f;u.forEach(m=>{let{contentBoxSize:h,contentRect:v,target:_}=m;_&&_!==t.el||(b=v?v.width:(h[0]||h).inlineSize,g=v?v.height:(h[0]||h).blockSize)}),(b!==p||g!==f)&&i()})}),r.observe(t.el))},c=()=>{o&&a.cancelAnimationFrame(o),r&&r.unobserve&&t.el&&(r.unobserve(t.el),r=null)},d=()=>{!t||t.destroyed||!t.initialized||n("orientationchange")};s("init",()=>{if(t.params.resizeObserver&&typeof a.ResizeObserver<"u"){l();return}a.addEventListener("resize",i),a.addEventListener("orientationchange",d)}),s("destroy",()=>{c(),a.removeEventListener("resize",i),a.removeEventListener("orientationchange",d)})}function _f(e){let{swiper:t,extendParams:s,on:n,emit:a}=e;const r=[],o=$e(),i=function(d,u){u===void 0&&(u={});const p=o.MutationObserver||o.WebkitMutationObserver,f=new p(b=>{if(t.__preventObserver__)return;if(b.length===1){a("observerUpdate",b[0]);return}const g=function(){a("observerUpdate",b[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});f.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:t.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(f)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=hf(t.hostEl);for(let u=0;u<d.length;u+=1)i(d[u])}i(t.hostEl,{childList:t.params.observeSlideChildren}),i(t.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var vf={on(e,t,s){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const a=s?"unshift":"push";return e.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][a](t)}),n},once(e,t,s){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;function a(){n.off(e,a),a.__emitterProxy&&delete a.__emitterProxy;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];t.apply(n,o)}return a.__emitterProxy=t,n.on(e,a,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const n=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[n](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(n=>{typeof t>"u"?s.eventsListeners[n]=[]:s.eventsListeners[n]&&s.eventsListeners[n].forEach((a,r)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[n].splice(r,1)})}),s},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,s,n;for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return typeof r[0]=="string"||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),n=e):(t=r[0].events,s=r[0].data,n=r[0].context||e),s.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...s])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(n,s)})}),e}};function Tf(){const e=this;let t,s;const n=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=n.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=n.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(Yt(n,"padding-left")||0,10)-parseInt(Yt(n,"padding-right")||0,10),s=s-parseInt(Yt(n,"padding-top")||0,10)-parseInt(Yt(n,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function wf(){const e=this;function t(T,k){return parseFloat(T.getPropertyValue(e.getDirectionLabel(k))||0)}const s=e.params,{wrapperEl:n,slidesEl:a,size:r,rtlTranslate:o,wrongRTL:i}=e,l=e.virtual&&s.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=Lt(a,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:d.length;let p=[];const f=[],b=[];let g=s.slidesOffsetBefore;typeof g=="function"&&(g=s.slidesOffsetBefore.call(e));let m=s.slidesOffsetAfter;typeof m=="function"&&(m=s.slidesOffsetAfter.call(e));const h=e.snapGrid.length,v=e.slidesGrid.length;let _=s.spaceBetween,y=-g,w=0,E=0;if(typeof r>"u")return;typeof _=="string"&&_.indexOf("%")>=0?_=parseFloat(_.replace("%",""))/100*r:typeof _=="string"&&(_=parseFloat(_)),e.virtualSize=-_,d.forEach(T=>{o?T.style.marginLeft="":T.style.marginRight="",T.style.marginBottom="",T.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(an(n,"--swiper-centered-offset-before",""),an(n,"--swiper-centered-offset-after",""));const P=s.grid&&s.grid.rows>1&&e.grid;P?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let O;const x=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(T=>typeof s.breakpoints[T].slidesPerView<"u").length>0;for(let T=0;T<u;T+=1){O=0;let k;if(d[T]&&(k=d[T]),P&&e.grid.updateSlide(T,k,d),!(d[T]&&Yt(k,"display")==="none")){if(s.slidesPerView==="auto"){x&&(d[T].style[e.getDirectionLabel("width")]="");const C=getComputedStyle(k),G=k.style.transform,q=k.style.webkitTransform;if(G&&(k.style.transform="none"),q&&(k.style.webkitTransform="none"),s.roundLengths)O=e.isHorizontal()?Eo(k,"width"):Eo(k,"height");else{const Q=t(C,"width"),D=t(C,"padding-left"),z=t(C,"padding-right"),U=t(C,"margin-left"),ee=t(C,"margin-right"),ae=C.getPropertyValue("box-sizing");if(ae&&ae==="border-box")O=Q+U+ee;else{const{clientWidth:le,offsetWidth:ie}=k;O=Q+D+z+U+ee+(ie-le)}}G&&(k.style.transform=G),q&&(k.style.webkitTransform=q),s.roundLengths&&(O=Math.floor(O))}else O=(r-(s.slidesPerView-1)*_)/s.slidesPerView,s.roundLengths&&(O=Math.floor(O)),d[T]&&(d[T].style[e.getDirectionLabel("width")]=`${O}px`);d[T]&&(d[T].swiperSlideSize=O),b.push(O),s.centeredSlides?(y=y+O/2+w/2+_,w===0&&T!==0&&(y=y-r/2-_),T===0&&(y=y-r/2-_),Math.abs(y)<1/1e3&&(y=0),s.roundLengths&&(y=Math.floor(y)),E%s.slidesPerGroup===0&&p.push(y),f.push(y)):(s.roundLengths&&(y=Math.floor(y)),(E-Math.min(e.params.slidesPerGroupSkip,E))%e.params.slidesPerGroup===0&&p.push(y),f.push(y),y=y+O+_),e.virtualSize+=O+_,w=O,E+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+m,o&&i&&(s.effect==="slide"||s.effect==="coverflow")&&(n.style.width=`${e.virtualSize+_}px`),s.setWrapperSize&&(n.style[e.getDirectionLabel("width")]=`${e.virtualSize+_}px`),P&&e.grid.updateWrapperSize(O,p),!s.centeredSlides){const T=[];for(let k=0;k<p.length;k+=1){let C=p[k];s.roundLengths&&(C=Math.floor(C)),p[k]<=e.virtualSize-r&&T.push(C)}p=T,Math.floor(e.virtualSize-r)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-r)}if(l&&s.loop){const T=b[0]+_;if(s.slidesPerGroup>1){const k=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),C=T*s.slidesPerGroup;for(let G=0;G<k;G+=1)p.push(p[p.length-1]+C)}for(let k=0;k<e.virtual.slidesBefore+e.virtual.slidesAfter;k+=1)s.slidesPerGroup===1&&p.push(p[p.length-1]+T),f.push(f[f.length-1]+T),e.virtualSize+=T}if(p.length===0&&(p=[0]),_!==0){const T=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");d.filter((k,C)=>!s.cssMode||s.loop?!0:C!==d.length-1).forEach(k=>{k.style[T]=`${_}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let T=0;b.forEach(C=>{T+=C+(_||0)}),T-=_;const k=T>r?T-r:0;p=p.map(C=>C<=0?-g:C>k?k+m:C)}if(s.centerInsufficientSlides){let T=0;b.forEach(C=>{T+=C+(_||0)}),T-=_;const k=(s.slidesOffsetBefore||0)+(s.slidesOffsetAfter||0);if(T+k<r){const C=(r-T-k)/2;p.forEach((G,q)=>{p[q]=G-C}),f.forEach((G,q)=>{f[q]=G+C})}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:f,slidesSizesGrid:b}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){an(n,"--swiper-centered-offset-before",`${-p[0]}px`),an(n,"--swiper-centered-offset-after",`${e.size/2-b[b.length-1]/2}px`);const T=-e.snapGrid[0],k=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(C=>C+T),e.slidesGrid=e.slidesGrid.map(C=>C+k)}if(u!==c&&e.emit("slidesLengthChange"),p.length!==h&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),f.length!==v&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const T=`${s.containerModifierClass}backface-hidden`,k=e.el.classList.contains(T);u<=s.maxBackfaceHiddenSlides?k||e.el.classList.add(T):k&&e.el.classList.remove(T)}}function Sf(e){const t=this,s=[],n=t.virtual&&t.params.virtual.enabled;let a=0,r;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=i=>n?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{s.push(i)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const i=t.activeIndex+r;if(i>t.slides.length&&!n)break;s.push(o(i))}else s.push(o(t.activeIndex));for(r=0;r<s.length;r+=1)if(typeof s[r]<"u"){const i=s[r].offsetHeight;a=i>a?i:a}(a||a===0)&&(t.wrapperEl.style.height=`${a}px`)}function Ef(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=(e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop)-s-e.cssOverflowAdjustment()}const xo=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function xf(e){e===void 0&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:n,rtlTranslate:a,snapGrid:r}=t;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;a&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=s.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<n.length;l+=1){const c=n[l];let d=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=n[0].swiperSlideOffset);const u=(o+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),p=(o-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),f=-(o-d),b=f+t.slidesSizesGrid[l],g=f>=0&&f<=t.size-t.slidesSizesGrid[l],m=f>=0&&f<t.size-1||b>1&&b<=t.size||f<=0&&b>=t.size;m&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),xo(c,m,s.slideVisibleClass),xo(c,g,s.slideFullyVisibleClass),c.progress=a?-u:u,c.originalProgress=a?-p:p}}function Af(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const s=t.params,n=t.maxTranslate()-t.minTranslate();let{progress:a,isBeginning:r,isEnd:o,progressLoop:i}=t;const l=r,c=o;if(n===0)a=0,r=!0,o=!0;else{a=(e-t.minTranslate())/n;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;r=d||a<=0,o=u||a>=1,d&&(a=0),u&&(a=1)}if(s.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],b=t.slidesGrid[t.slidesGrid.length-1],g=Math.abs(e);g>=p?i=(g-p)/b:i=(g+b-f)/b,i>1&&(i-=1)}Object.assign(t,{progress:a,progressLoop:i,isBeginning:r,isEnd:o}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",a)}const fa=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function Pf(){const e=this,{slides:t,params:s,slidesEl:n,activeIndex:a}=e,r=e.virtual&&s.virtual.enabled,o=e.grid&&s.grid&&s.grid.rows>1,i=u=>Lt(n,`.${s.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(r)if(s.loop){let u=a-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${u}"]`)}else l=i(`[data-swiper-slide-index="${a}"]`);else o?(l=t.find(u=>u.column===a),d=t.find(u=>u.column===a+1),c=t.find(u=>u.column===a-1)):l=t[a];l&&(o||(d=ff(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!d&&(d=t[0]),c=pf(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{fa(u,u===l,s.slideActiveClass),fa(u,u===d,s.slideNextClass),fa(u,u===c,s.slidePrevClass)}),e.emitSlidesClasses()}const pn=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,n=t.closest(s());if(n){let a=n.querySelector(`.${e.params.lazyPreloaderClass}`);!a&&e.isElement&&(n.shadowRoot?a=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(a=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),a&&a.remove())})),a&&a.remove()}},ha=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Ba=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const n=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=a,i=[o-t];i.push(...Array.from({length:t}).map((l,c)=>o+n+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&ha(e,c)});return}const r=a+n-1;if(e.params.rewind||e.params.loop)for(let o=a-t;o<=r+t;o+=1){const i=(o%s+s)%s;(i<a||i>r)&&ha(e,i)}else for(let o=Math.max(a-t,0);o<=Math.min(r+t,s-1);o+=1)o!==a&&(o>r||o<a)&&ha(e,o)};function Of(e){const{slidesGrid:t,params:s}=e,n=e.rtlTranslate?e.translate:-e.translate;let a;for(let r=0;r<t.length;r+=1)typeof t[r+1]<"u"?n>=t[r]&&n<t[r+1]-(t[r+1]-t[r])/2?a=r:n>=t[r]&&n<t[r+1]&&(a=r+1):n>=t[r]&&(a=r);return s.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function kf(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:n,params:a,activeIndex:r,realIndex:o,snapIndex:i}=t;let l=e,c;const d=f=>{let b=f-t.virtual.slidesBefore;return b<0&&(b=t.virtual.slides.length+b),b>=t.virtual.slides.length&&(b-=t.virtual.slides.length),b};if(typeof l>"u"&&(l=Of(t)),n.indexOf(s)>=0)c=n.indexOf(s);else{const f=Math.min(a.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/a.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===r&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&a.grid&&a.grid.rows>1;let p;if(t.virtual&&a.virtual.enabled&&a.loop)p=d(l);else if(u){const f=t.slides.find(g=>g.column===l);let b=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(f),0)),p=Math.floor(b/a.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:r,activeIndex:l}),t.initialized&&Ba(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function Cf(e,t){const s=this,n=s.params;let a=e.closest(`.${n.slideClass}, swiper-slide`);!a&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!a&&i.matches&&i.matches(`.${n.slideClass}, swiper-slide`)&&(a=i)});let r=!1,o;if(a){for(let i=0;i<s.slides.length;i+=1)if(s.slides[i]===a){r=!0,o=i;break}}if(a&&r)s.clickedSlide=a,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=o;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}n.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var Rf={updateSize:Tf,updateSlides:wf,updateAutoHeight:Sf,updateSlidesOffset:Ef,updateSlidesProgress:xf,updateProgress:Af,updateSlidesClasses:Pf,updateActiveIndex:kf,updateClickedSlide:Cf};function Lf(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:s,rtlTranslate:n,translate:a,wrapperEl:r}=t;if(s.virtualTranslate)return n?-a:a;if(s.cssMode)return a;let o=lf(r,e);return o+=t.cssOverflowAdjustment(),n&&(o=-o),o||0}function Mf(e,t){const s=this,{rtlTranslate:n,params:a,wrapperEl:r,progress:o}=s;let i=0,l=0;const c=0;s.isHorizontal()?i=n?-e:e:l=e,a.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?i:l,a.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-i:-l:a.virtualTranslate||(s.isHorizontal()?i-=s.cssOverflowAdjustment():l-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let d;const u=s.maxTranslate()-s.minTranslate();u===0?d=0:d=(e-s.minTranslate())/u,d!==o&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function If(){return-this.snapGrid[0]}function Df(){return-this.snapGrid[this.snapGrid.length-1]}function Nf(e,t,s,n,a){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),s===void 0&&(s=!0),n===void 0&&(n=!0);const r=this,{params:o,wrapperEl:i}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(n&&e>l?d=l:n&&e<c?d=c:d=e,r.updateProgress(d),o.cssMode){const u=r.isHorizontal();if(t===0)i[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return yl({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;i.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(r.setTransition(0),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Bf={getTranslate:Lf,setTranslate:Mf,minTranslate:If,maxTranslate:Df,translateTo:Nf};function Ff(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function wl(e){let{swiper:t,runCallbacks:s,direction:n,step:a}=e;const{activeIndex:r,previousIndex:o}=t;let i=n;i||(r>o?i="next":r<o?i="prev":i="reset"),t.emit(`transition${a}`),s&&i==="reset"?t.emit(`slideResetTransition${a}`):s&&r!==o&&(t.emit(`slideChangeTransition${a}`),i==="next"?t.emit(`slideNextTransition${a}`):t.emit(`slidePrevTransition${a}`))}function $f(e,t){e===void 0&&(e=!0);const s=this,{params:n}=s;n.cssMode||(n.autoHeight&&s.updateAutoHeight(),wl({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function Uf(e,t){e===void 0&&(e=!0);const s=this,{params:n}=s;s.animating=!1,!n.cssMode&&(s.setTransition(0),wl({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var Hf={setTransition:Ff,transitionStart:$f,transitionEnd:Uf};function Gf(e,t,s,n,a){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:b}=r;if(!b&&!n&&!a||r.destroyed||r.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=r.params.speed);const g=Math.min(r.params.slidesPerGroupSkip,o);let m=g+Math.floor((o-g)/r.params.slidesPerGroup);m>=l.length&&(m=l.length-1);const h=-l[m];if(i.normalizeSlideIndex)for(let P=0;P<c.length;P+=1){const O=-Math.floor(h*100),x=Math.floor(c[P]*100),T=Math.floor(c[P+1]*100);typeof c[P+1]<"u"?O>=x&&O<T-(T-x)/2?o=P:O>=x&&O<T&&(o=P+1):O>=x&&(o=P)}if(r.initialized&&o!==u&&(!r.allowSlideNext&&(p?h>r.translate&&h>r.minTranslate():h<r.translate&&h<r.minTranslate())||!r.allowSlidePrev&&h>r.translate&&h>r.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(h);let v;o>u?v="next":o<u?v="prev":v="reset";const _=r.virtual&&r.params.virtual.enabled;if(!(_&&a)&&(p&&-h===r.translate||!p&&h===r.translate))return r.updateActiveIndex(o),i.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),i.effect!=="slide"&&r.setTranslate(h),v!=="reset"&&(r.transitionStart(s,v),r.transitionEnd(s,v)),!1;if(i.cssMode){const P=r.isHorizontal(),O=p?h:-h;if(t===0)_&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),_&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[P?"scrollLeft":"scrollTop"]=O})):f[P?"scrollLeft":"scrollTop"]=O,_&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return yl({swiper:r,targetPosition:O,side:P?"left":"top"}),!0;f.scrollTo({[P?"left":"top"]:O,behavior:"smooth"})}return!0}const E=Tl().isSafari;return _&&!a&&E&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(t),r.setTranslate(h),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,n),r.transitionStart(s,v),t===0?r.transitionEnd(s,v):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(O){!r||r.destroyed||O.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,v))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function zf(e,t,s,n){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;if(a.destroyed)return;typeof t>"u"&&(t=a.params.speed);const r=a.grid&&a.params.grid&&a.params.grid.rows>1;let o=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)o=o+a.virtual.slidesBefore;else{let i;if(r){const p=o*a.params.grid.rows;i=a.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===p).column}else i=a.getSlideIndexByData(o);const l=r?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:c}=a.params;let d=a.params.slidesPerView;d==="auto"?d=a.slidesPerViewDynamic():(d=Math.ceil(parseFloat(a.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-i<d;if(c&&(u=u||i<Math.ceil(d/2)),n&&c&&a.params.slidesPerView!=="auto"&&!r&&(u=!1),u){const p=c?i<a.activeIndex?"prev":"next":i-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?i+1:i-l+1,slideRealIndex:p==="next"?a.realIndex:void 0})}if(r){const p=o*a.params.grid.rows;o=a.slides.find(f=>f.getAttribute("data-swiper-slide-index")*1===p).column}else o=a.getSlideIndexByData(o)}return requestAnimationFrame(()=>{a.slideTo(o,t,s,n)}),a}function jf(e,t,s){t===void 0&&(t=!0);const n=this,{enabled:a,params:r,animating:o}=n;if(!a||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);let i=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(i=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<r.slidesPerGroupSkip?1:i,c=n.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,e,t,s)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,e,t,s):n.slideTo(n.activeIndex+l,e,t,s)}function Yf(e,t,s){t===void 0&&(t=!0);const n=this,{params:a,snapGrid:r,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);const d=n.virtual&&a.virtual.enabled;if(a.loop){if(c&&!d&&a.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const u=i?n.translate:-n.translate;function p(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const f=p(u),b=r.map(v=>p(v)),g=a.freeMode&&a.freeMode.enabled;let m=r[b.indexOf(f)-1];if(typeof m>"u"&&(a.cssMode||g)){let v;r.forEach((_,y)=>{f>=_&&(v=y)}),typeof v<"u"&&(m=g?r[v]:r[v>0?v-1:v])}let h=0;if(typeof m<"u"&&(h=o.indexOf(m),h<0&&(h=n.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(h=h-n.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),a.rewind&&n.isBeginning){const v=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(v,e,t,s)}else if(a.loop&&n.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{n.slideTo(h,e,t,s)}),!0;return n.slideTo(h,e,t,s)}function Kf(e,t,s){t===void 0&&(t=!0);const n=this;if(!n.destroyed)return typeof e>"u"&&(e=n.params.speed),n.slideTo(n.activeIndex,e,t,s)}function qf(e,t,s,n){t===void 0&&(t=!0),n===void 0&&(n=.5);const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);let r=a.activeIndex;const o=Math.min(a.params.slidesPerGroupSkip,r),i=o+Math.floor((r-o)/a.params.slidesPerGroup),l=a.rtlTranslate?a.translate:-a.translate;if(l>=a.snapGrid[i]){const c=a.snapGrid[i],d=a.snapGrid[i+1];l-c>(d-c)*n&&(r+=a.params.slidesPerGroup)}else{const c=a.snapGrid[i-1],d=a.snapGrid[i];l-c<=(d-c)*n&&(r-=a.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,a.slidesGrid.length-1),a.slideTo(r,e,t,s)}function Wf(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,n=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let a=e.getSlideIndexWhenGrid(e.clickedIndex),r;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):a>(i?(e.slides.length-n)/2-(e.params.grid.rows-1):e.slides.length-n)?(e.loopFix(),a=e.getSlideIndex(Lt(s,`${o}[data-swiper-slide-index="${r}"]`)[0]),bl(()=>{e.slideTo(a)})):e.slideTo(a)}else e.slideTo(a)}var Vf={slideTo:Gf,slideToLoop:zf,slideNext:jf,slidePrev:Yf,slideReset:Kf,slideToClosest:qf,slideToClickedSlide:Wf};function Jf(e,t){const s=this,{params:n,slidesEl:a}=s;if(!n.loop||s.virtual&&s.params.virtual.enabled)return;const r=()=>{Lt(a,`.${n.slideClass}, swiper-slide`).forEach((f,b)=>{f.setAttribute("data-swiper-slide-index",b)})},o=()=>{const p=Lt(a,`.${n.slideBlankClass}`);p.forEach(f=>{f.remove()}),p.length>0&&(s.recalcSlides(),s.updateSlides())},i=s.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||i)&&o();const l=n.slidesPerGroup*(i?n.grid.rows:1),c=s.slides.length%l!==0,d=i&&s.slides.length%n.grid.rows!==0,u=p=>{for(let f=0;f<p;f+=1){const b=s.isElement?Na("swiper-slide",[n.slideBlankClass]):Na("div",[n.slideClass,n.slideBlankClass]);s.slidesEl.append(b)}};if(c){if(n.loopAddBlankSlides){const p=l-s.slides.length%l;u(p),s.recalcSlides(),s.updateSlides()}else En("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(n.loopAddBlankSlides){const p=n.grid.rows-s.slides.length%n.grid.rows;u(p),s.recalcSlides(),s.updateSlides()}else En("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();s.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next",initial:t})}function Xf(e){let{slideRealIndex:t,slideTo:s=!0,direction:n,setTranslate:a,activeSlideIndex:r,initial:o,byController:i,byMousewheel:l}=e===void 0?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:p,slidesEl:f,params:b}=c,{centeredSlides:g,initialSlide:m}=b;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&b.virtual.enabled){s&&(!b.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):b.centeredSlides&&c.snapIndex<b.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=p,c.emit("loopFix");return}let h=b.slidesPerView;h==="auto"?h=c.slidesPerViewDynamic():(h=Math.ceil(parseFloat(b.slidesPerView,10)),g&&h%2===0&&(h=h+1));const v=b.slidesPerGroupAuto?h:b.slidesPerGroup;let _=g?Math.max(v,Math.ceil(h/2)):v;_%v!==0&&(_+=v-_%v),_+=b.loopAdditionalSlides,c.loopedSlides=_;const y=c.grid&&b.grid&&b.grid.rows>1;d.length<h+_||c.params.effect==="cards"&&d.length<h+_*2?En("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):y&&b.grid.fill==="row"&&En("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const w=[],E=[],P=y?Math.ceil(d.length/b.grid.rows):d.length,O=o&&P-m<h&&!g;let x=O?m:c.activeIndex;typeof r>"u"?r=c.getSlideIndex(d.find(D=>D.classList.contains(b.slideActiveClass))):x=r;const T=n==="next"||!n,k=n==="prev"||!n;let C=0,G=0;const Q=(y?d[r].column:r)+(g&&typeof a>"u"?-h/2+.5:0);if(Q<_){C=Math.max(_-Q,v);for(let D=0;D<_-Q;D+=1){const z=D-Math.floor(D/P)*P;if(y){const U=P-z-1;for(let ee=d.length-1;ee>=0;ee-=1)d[ee].column===U&&w.push(ee)}else w.push(P-z-1)}}else if(Q+h>P-_){G=Math.max(Q-(P-_*2),v),O&&(G=Math.max(G,h-P+m+1));for(let D=0;D<G;D+=1){const z=D-Math.floor(D/P)*P;y?d.forEach((U,ee)=>{U.column===z&&E.push(ee)}):E.push(z)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&d.length<h+_*2&&(E.includes(r)&&E.splice(E.indexOf(r),1),w.includes(r)&&w.splice(w.indexOf(r),1)),k&&w.forEach(D=>{d[D].swiperLoopMoveDOM=!0,f.prepend(d[D]),d[D].swiperLoopMoveDOM=!1}),T&&E.forEach(D=>{d[D].swiperLoopMoveDOM=!0,f.append(d[D]),d[D].swiperLoopMoveDOM=!1}),c.recalcSlides(),b.slidesPerView==="auto"?c.updateSlides():y&&(w.length>0&&k||E.length>0&&T)&&c.slides.forEach((D,z)=>{c.grid.updateSlide(z,D,c.slides)}),b.watchSlidesProgress&&c.updateSlidesOffset(),s){if(w.length>0&&k){if(typeof t>"u"){const D=c.slidesGrid[x],U=c.slidesGrid[x+C]-D;l?c.setTranslate(c.translate-U):(c.slideTo(x+Math.ceil(C),0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-U,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-U))}else if(a){const D=y?w.length/b.grid.rows:w.length;c.slideTo(c.activeIndex+D,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(E.length>0&&T)if(typeof t>"u"){const D=c.slidesGrid[x],U=c.slidesGrid[x-G]-D;l?c.setTranslate(c.translate-U):(c.slideTo(x-G,0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-U,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-U))}else{const D=y?E.length/b.grid.rows:E.length;c.slideTo(c.activeIndex-D,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=p,c.controller&&c.controller.control&&!i){const D={slideRealIndex:t,direction:n,setTranslate:a,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(z=>{!z.destroyed&&z.params.loop&&z.loopFix({...D,slideTo:z.params.slidesPerView===b.slidesPerView?s:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...D,slideTo:c.controller.control.params.slidesPerView===b.slidesPerView?s:!1})}c.emit("loopFix")}function Qf(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const n=[];e.slides.forEach(a=>{const r=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;n[r]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),n.forEach(a=>{s.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Zf={loopCreate:Jf,loopFix:Xf,loopDestroy:Qf};function eh(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function th(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var sh={setGrabCursor:eh,unsetGrabCursor:th};function nh(e,t){t===void 0&&(t=this);function s(n){if(!n||n===yt()||n===$e())return null;n.assignedSlot&&(n=n.assignedSlot);const a=n.closest(e);return!a&&!n.getRootNode?null:a||s(n.getRootNode().host)}return s(t)}function Ao(e,t,s){const n=$e(),{params:a}=e,r=a.edgeSwipeDetection,o=a.edgeSwipeThreshold;return r&&(s<=o||s>=n.innerWidth-o)?r==="prevent"?(t.preventDefault(),!0):!1:!0}function ah(e){const t=this,s=yt();let n=e;n.originalEvent&&(n=n.originalEvent);const a=t.touchEventsData;if(n.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==n.pointerId)return;a.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(a.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){Ao(t,n,n.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:i}=t;if(!i||!r.simulateTouch&&n.pointerType==="mouse"||t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=n.target;if(r.touchEventsTarget==="wrapper"&&!uf(l,t.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||a.isTouched&&a.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&d&&(l=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(p?nh(u,l):l.closest(u))){t.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;o.currentX=n.pageX,o.currentY=n.pageY;const f=o.currentX,b=o.currentY;if(!Ao(t,n,f))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=b,a.touchStartTime=Sn(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1);let g=!0;l.matches(a.focusableElements)&&(g=!1,l.nodeName==="SELECT"&&(a.isTouched=!1)),s.activeElement&&s.activeElement.matches(a.focusableElements)&&s.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(a.focusableElements))&&s.activeElement.blur();const m=g&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||m)&&!l.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",n)}function rh(e){const t=yt(),s=this,n=s.touchEventsData,{params:a,touches:r,rtlTranslate:o,enabled:i}=s;if(!i||!a.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(w=>w.identifier===n.touchId),!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&s.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!s.allowTouchMove){l.target.matches(n.focusableElements)||(s.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),n.touchStartTime=Sn());return}if(a.touchReleaseOnEdges&&!a.loop)if(s.isVertical()){if(u<r.startY&&s.translate<=s.maxTranslate()||u>r.startY&&s.translate>=s.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(o&&(d>r.startX&&-s.translate<=s.maxTranslate()||d<r.startX&&-s.translate>=s.minTranslate()))return;if(!o&&(d<r.startX&&s.translate<=s.maxTranslate()||d>r.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,s.allowClick=!1;return}n.allowTouchCallbacks&&s.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(p**2+f**2)<s.params.threshold)return;if(typeof n.isScrolling>"u"){let w;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:p*p+f*f>=25&&(w=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,n.isScrolling=s.isHorizontal()?w>a.touchAngle:90-w>a.touchAngle)}if(n.isScrolling&&s.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;s.allowClick=!1,!a.cssMode&&l.cancelable&&l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation();let b=s.isHorizontal()?p:f,g=s.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;a.oneWayMovement&&(b=Math.abs(b)*(o?1:-1),g=Math.abs(g)*(o?1:-1)),r.diff=b,b*=a.touchRatio,o&&(b=-b,g=-g);const m=s.touchesDirection;s.swipeDirection=b>0?"prev":"next",s.touchesDirection=g>0?"prev":"next";const h=s.params.loop&&!a.cssMode,v=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!n.isMoved){if(h&&v&&s.loopFix({direction:s.swipeDirection}),n.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const w=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(w)}n.allowMomentumBounce=!1,a.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",l)}if(new Date().getTime(),a._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&m!==s.touchesDirection&&h&&v&&Math.abs(b)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}s.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=b+n.startTranslate;let _=!0,y=a.resistanceRatio;if(a.touchReleaseOnEdges&&(y=0),b>0?(h&&v&&n.allowThresholdMove&&n.currentTranslate>(a.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>s.minTranslate()&&(_=!1,a.resistance&&(n.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+n.startTranslate+b)**y))):b<0&&(h&&v&&n.allowThresholdMove&&n.currentTranslate<(a.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(a.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),n.currentTranslate<s.maxTranslate()&&(_=!1,a.resistance&&(n.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-n.startTranslate-b)**y))),_&&(l.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(n.currentTranslate=n.startTranslate),a.threshold>0)if(Math.abs(b)>a.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&s.freeMode||a.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(n.currentTranslate),s.setTranslate(n.currentTranslate))}function oh(e){const t=this,s=t.touchEventsData;let n=e;n.originalEvent&&(n=n.originalEvent);let a;if(n.type==="touchend"||n.type==="touchcancel"){if(a=[...n.changedTouches].find(w=>w.identifier===s.touchId),!a||a.identifier!==s.touchId)return}else{if(s.touchId!==null||n.pointerId!==s.pointerId)return;a=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&n.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",n),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Sn(),p=u-s.touchStartTime;if(t.allowClick){const w=n.path||n.composedPath&&n.composedPath();t.updateClickedSlide(w&&w[0]||n.target,w),t.emit("tap click",n),p<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",n)}if(s.lastClickTime=Sn(),bl(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||i.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let f;if(o.followFinger?f=l?t.translate:-t.translate:f=-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const b=f>=-t.maxTranslate()&&!t.params.loop;let g=0,m=t.slidesSizesGrid[0];for(let w=0;w<c.length;w+=w<o.slidesPerGroupSkip?1:o.slidesPerGroup){const E=w<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[w+E]<"u"?(b||f>=c[w]&&f<c[w+E])&&(g=w,m=c[w+E]-c[w]):(b||f>=c[w])&&(g=w,m=c[c.length-1]-c[c.length-2])}let h=null,v=null;o.rewind&&(t.isBeginning?v=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(h=0));const _=(f-c[g])/m,y=g<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(_>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?h:g+y):t.slideTo(g)),t.swipeDirection==="prev"&&(_>1-o.longSwipesRatio?t.slideTo(g+y):v!==null&&_<0&&Math.abs(_)>o.longSwipesRatio?t.slideTo(v):t.slideTo(g))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(n.target===t.navigation.nextEl||n.target===t.navigation.prevEl)?n.target===t.navigation.nextEl?t.slideTo(g+y):t.slideTo(g):(t.swipeDirection==="next"&&t.slideTo(h!==null?h:g+y),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:g))}}function Po(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:a,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=n,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function ih(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function lh(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:n}=e;if(!n)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let a;const r=e.maxTranslate()-e.minTranslate();r===0?a=0:a=(e.translate-e.minTranslate())/r,a!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ch(e){const t=this;pn(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function dh(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Sl=(e,t)=>{const s=yt(),{params:n,el:a,wrapperEl:r,device:o}=e,i=!!n.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!a||typeof a=="string"||(s[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),a[l]("touchstart",e.onTouchStart,{passive:!1}),a[l]("pointerdown",e.onTouchStart,{passive:!1}),s[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),s[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),s[l]("touchend",e.onTouchEnd,{passive:!0}),s[l]("pointerup",e.onTouchEnd,{passive:!0}),s[l]("pointercancel",e.onTouchEnd,{passive:!0}),s[l]("touchcancel",e.onTouchEnd,{passive:!0}),s[l]("pointerout",e.onTouchEnd,{passive:!0}),s[l]("pointerleave",e.onTouchEnd,{passive:!0}),s[l]("contextmenu",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&a[l]("click",e.onClick,!0),n.cssMode&&r[l]("scroll",e.onScroll),n.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Po,!0):e[c]("observerUpdate",Po,!0),a[l]("load",e.onLoad,{capture:!0}))};function uh(){const e=this,{params:t}=e;e.onTouchStart=ah.bind(e),e.onTouchMove=rh.bind(e),e.onTouchEnd=oh.bind(e),e.onDocumentTouchStart=dh.bind(e),t.cssMode&&(e.onScroll=lh.bind(e)),e.onClick=ih.bind(e),e.onLoad=ch.bind(e),Sl(e,"on")}function ph(){Sl(this,"off")}var fh={attachEvents:uh,detachEvents:ph};const Oo=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function hh(){const e=this,{realIndex:t,initialized:s,params:n,el:a}=e,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=yt(),i=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",l=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?e.el:o.querySelector(n.breakpointsBase),c=e.getBreakpoint(r,i,l);if(!c||e.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||e.originalParams,p=Oo(e,n),f=Oo(e,u),b=e.params.grabCursor,g=u.grabCursor,m=n.enabled;p&&!f?(a.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(a.classList.add(`${n.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&n.grid.fill==="column")&&a.classList.add(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!g?e.unsetGrabCursor():!b&&g&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(E=>{if(typeof u[E]>"u")return;const P=n[E]&&n[E].enabled,O=u[E]&&u[E].enabled;P&&!O&&e[E].disable(),!P&&O&&e[E].enable()});const h=u.direction&&u.direction!==n.direction,v=n.loop&&(u.slidesPerView!==n.slidesPerView||h),_=n.loop;h&&s&&e.changeDirection(),Ke(e.params,u);const y=e.params.enabled,w=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),m&&!y?e.disable():!m&&y&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),s&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!_&&w?(e.loopCreate(t),e.updateSlides()):_&&!w&&e.loopDestroy()),e.emit("breakpoint",u)}function gh(e,t,s){if(t===void 0&&(t="window"),!e||t==="container"&&!s)return;let n=!1;const a=$e(),r=t==="window"?a.innerHeight:s.clientHeight,o=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:r*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];t==="window"?a.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=s.clientWidth&&(n=l)}return n||"max"}var mh={setBreakpoint:hh,getBreakpoint:gh};function bh(e,t){const s=[];return e.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(a=>{n[a]&&s.push(t+a)}):typeof n=="string"&&s.push(t+n)}),s}function yh(){const e=this,{classNames:t,params:s,rtl:n,el:a,device:r}=e,o=bh(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:n},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...o),a.classList.add(...t),e.emitContainerClasses()}function _h(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var vh={addClasses:yh,removeClasses:_h};function Th(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:n}=s;if(n){const a=e.slides.length-1,r=e.slidesGrid[a]+e.slidesSizesGrid[a]+n*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var wh={checkOverflow:Th},ko={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Sh(e,t){return function(n){n===void 0&&(n={});const a=Object.keys(n)[0],r=n[a];if(typeof r!="object"||r===null){Ke(t,n);return}if(e[a]===!0&&(e[a]={enabled:!0}),a==="navigation"&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),!(a in e&&"enabled"in r)){Ke(t,n);return}typeof e[a]=="object"&&!("enabled"in e[a])&&(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),Ke(t,n)}}const ga={eventsEmitter:vf,update:Rf,translate:Bf,transition:Hf,slide:Vf,loop:Zf,grabCursor:sh,events:fh,breakpoints:mh,checkOverflow:wh,classes:vh},ma={};class et{constructor(){let t,s;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?s=a[0]:[t,s]=a,s||(s={}),s=Ke({},s),t&&!s.el&&(s.el=t);const o=yt();if(s.el&&typeof s.el=="string"&&o.querySelectorAll(s.el).length>1){const d=[];return o.querySelectorAll(s.el).forEach(u=>{const p=Ke({},s,{el:u});d.push(new et(p))}),d}const i=this;i.__swiper__=!0,i.support=_l(),i.device=vl({userAgent:s.userAgent}),i.browser=Tl(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],s.modules&&Array.isArray(s.modules)&&i.modules.push(...s.modules);const l={};i.modules.forEach(d=>{d({params:s,swiper:i,extendParams:Sh(s,l),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const c=Ke({},ko,l);return i.params=Ke({},c,ma,s),i.originalParams=Ke({},i.params),i.passedParams=Ke({},s),i.params&&i.params.on&&Object.keys(i.params.on).forEach(d=>{i.on(d,i.params.on[d])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:n}=this,a=Lt(s,`.${n.slideClass}, swiper-slide`),r=So(a[0]);return So(t)-r}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:n}=t;t.slides=Lt(s,`.${n.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const n=this;t=Math.min(Math.max(t,0),1);const a=n.minTranslate(),o=(n.maxTranslate()-a)*t+a;n.translateTo(o,typeof s>"u"?0:s),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(n=>{const a=t.getSlideClasses(n);s.push({slideEl:n,classNames:a}),t.emit("_slideClass",n,a)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t,s){t===void 0&&(t="current"),s===void 0&&(s=!1);const n=this,{params:a,slides:r,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=n;let d=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let f=c+1;f<r.length;f+=1)r[f]&&!p&&(u+=Math.ceil(r[f].swiperSlideSize),d+=1,u>l&&(p=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!p&&(u+=r[f].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<r.length;u+=1)(s?o[u]+i[u]-o[c]<l:o[u]-o[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:n}=t;n.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&pn(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function a(){const o=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)a(),n.autoHeight&&t.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&t.isEnd&&!n.centeredSlides){const o=t.virtual&&n.virtual.enabled?t.virtual.slides:t.slides;r=t.slideTo(o.length-1,0,!1,!0)}else r=t.slideTo(t.activeIndex,0,!1,!0);r||a()}n.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s){s===void 0&&(s=!0);const n=this,a=n.params.direction;return t||(t=a==="horizontal"?"vertical":"horizontal"),t===a||t!=="horizontal"&&t!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${a}`),n.el.classList.add(`${n.params.containerModifierClass}${t}`),n.emitContainerClasses(),n.params.direction=t,n.slides.forEach(r=>{t==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),s&&n.update()),n}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let n=t||s.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=s,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const a=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(a()):Lt(n,a())[0];return!o&&s.params.createElements&&(o=Na("div",s.params.wrapperClass),n.append(o),Lt(n,`.${s.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(s,{el:n,wrapperEl:o,slidesEl:s.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:s.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Yt(n,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Yt(n,"direction")==="rtl"),wrongRTL:Yt(o,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const a=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&a.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(r=>{r.complete?pn(s,r):r.addEventListener("load",o=>{pn(s,o.target)})}),Ba(s),s.initialized=!0,Ba(s),s.emit("init"),s.emit("afterInit"),s}destroy(t,s){t===void 0&&(t=!0),s===void 0&&(s=!0);const n=this,{params:a,el:r,wrapperEl:o,slides:i}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),a.loop&&n.loopDestroy(),s&&(n.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),t!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),rf(n)),n.destroyed=!0),null}static extendDefaults(t){Ke(ma,t)}static get extendedDefaults(){return ma}static get defaults(){return ko}static installModule(t){et.prototype.__modules__||(et.prototype.__modules__=[]);const s=et.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>et.installModule(s)),et):(et.installModule(t),et)}}Object.keys(ga).forEach(e=>{Object.keys(ga[e]).forEach(t=>{et.prototype[t]=ga[e][t]})});et.use([yf,_f]);function Eh(e){let{swiper:t,extendParams:s,on:n,emit:a,params:r}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,i,l=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,d,u=new Date().getTime(),p,f,b,g,m,h,v;function _(U){!t||t.destroyed||!t.wrapperEl||U.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",_),!(v||U.detail&&U.detail.bySwiperTouchMove)&&T())}const y=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(c=d,p=!1);const U=t.autoplay.paused?d:u+c-new Date().getTime();t.autoplay.timeLeft=U,a("autoplayTimeLeft",U,U/l),i=requestAnimationFrame(()=>{y()})},w=()=>{let U;return t.virtual&&t.params.virtual.enabled?U=t.slides.find(ae=>ae.classList.contains("swiper-slide-active")):U=t.slides[t.activeIndex],U?parseInt(U.getAttribute("data-swiper-autoplay"),10):void 0},E=U=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(i),y();let ee=typeof U>"u"?t.params.autoplay.delay:U;l=t.params.autoplay.delay,c=t.params.autoplay.delay;const ae=w();!Number.isNaN(ae)&&ae>0&&typeof U>"u"&&(ee=ae,l=ae,c=ae),d=ee;const le=t.params.speed,ie=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(le,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,le,!0,!0),a("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(le,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,le,!0,!0),a("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{E()})))};return ee>0?(clearTimeout(o),o=setTimeout(()=>{ie()},ee)):requestAnimationFrame(()=>{ie()}),ee},P=()=>{u=new Date().getTime(),t.autoplay.running=!0,E(),a("autoplayStart")},O=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(i),a("autoplayStop")},x=(U,ee)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),U||(h=!0);const ae=()=>{a("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",_):T()};if(t.autoplay.paused=!0,ee){m&&(d=t.params.autoplay.delay),m=!1,ae();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),ae())},T=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),h?(h=!1,E(d)):E(),t.autoplay.paused=!1,a("autoplayResume"))},k=()=>{if(t.destroyed||!t.autoplay.running)return;const U=yt();U.visibilityState==="hidden"&&(h=!0,x(!0)),U.visibilityState==="visible"&&T()},C=U=>{U.pointerType==="mouse"&&(h=!0,v=!0,!(t.animating||t.autoplay.paused)&&x(!0))},G=U=>{U.pointerType==="mouse"&&(v=!1,t.autoplay.paused&&T())},q=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",C),t.el.addEventListener("pointerleave",G))},Q=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",C),t.el.removeEventListener("pointerleave",G))},D=()=>{yt().addEventListener("visibilitychange",k)},z=()=>{yt().removeEventListener("visibilitychange",k)};n("init",()=>{t.params.autoplay.enabled&&(q(),D(),P())}),n("destroy",()=>{Q(),z(),t.autoplay.running&&O()}),n("_freeModeStaticRelease",()=>{(b||h)&&T()}),n("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?O():x(!0,!0)}),n("beforeTransitionStart",(U,ee,ae)=>{t.destroyed||!t.autoplay.running||(ae||!t.params.autoplay.disableOnInteraction?x(!0,!0):O())}),n("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){O();return}f=!0,b=!1,h=!1,g=setTimeout(()=>{h=!0,b=!0,x(!0)},200)}}),n("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!f)){if(clearTimeout(g),clearTimeout(o),t.params.autoplay.disableOnInteraction){b=!1,f=!1;return}b&&t.params.cssMode&&T(),b=!1,f=!1}}),n("slideChange",()=>{t.destroyed||!t.autoplay.running||(m=!0)}),Object.assign(t.autoplay,{start:P,stop:O,pause:x,resume:T})}const xh={class:"home-layout"},Ah={class:"sticky-header-group"},Ph=["data-user-name"],Oh={__name:"home_route",setup(e){const t=Tt(),s=ge();window.CoreBetSlip=gl;const n=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__select"),u=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u}),l&&c&&d&&u){const p=window.matchMedia("(orientation: portrait)").matches,f=window.matchMedia("(max-width: 768px)").matches;(p||f)&&(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),l.addEventListener("click",b=>{console.log("[Bet Grid Toggle] Button clicked!"),b.preventDefault(),b.stopPropagation(),u.classList.contains("collapsed")?(d.classList.add("collapsed"),u.classList.remove("collapsed"),c.textContent="Close Bet Slip"):(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:d.classList.contains("collapsed"),slipCollapsed:u.classList.contains("collapsed"),buttonText:c.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u})};document.addEventListener("click",l=>{const c=l.target;if(c&&c.dataset?.promotionTopic){const d={timestamp:Date.now(),heroImg:c.dataset.promotionHeroImg||"",caption:c.dataset.promotionCaption||"",tagline:c.dataset.promotionTagline||"",toast:c.dataset.promotionToast||"",topic:c.dataset.promotionTopic||"",topicToken:c.dataset.promotionTopicToken||"",marquee:c.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",d),J.publish(s.hierTopics.PROMOTION__CLICK,JSON.stringify(d))}c&&c.dataset?.publishRouteHome&&(c.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(u=>{u===c?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),J.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),c&&c.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(l,c=!1)=>{const d=document.querySelector(".tournaments-grid");if(!d)return;d.innerHTML="";const u=document.getElementById("app"),p=u?.getAttribute("data-sync-theme")||"dark",f=u?.getAttribute("data-sync-lang")||"en",b=u?.getAttribute("data-sync-motif")||"brand",g=m=>{const h=document.createElement("article"),v=m.status||"DRAFT";h.className=`tournament-item tournament-status-${v.toLowerCase()}`;const _=document.createElement("bma-tournament-card");return _.setAttribute("data-bma-tourn-id",m.id||""),_.setAttribute("data-bma-tourn-guid",m.guid||""),_.setAttribute("data-bma-tourn-caption",m.caption||""),_.setAttribute("data-bma-tourn-tagline",m.tagline||""),_.setAttribute("data-bma-tourn-window_start_time",m.window_start_time||""),_.setAttribute("data-bma-tourn-window_end_time",m.window_end_time||""),_.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(m.sports_allowed)?JSON.stringify(m.sports_allowed):m.sports_allowed||""),_.setAttribute("data-bma-tourn-entities",m.entities?JSON.stringify(m.entities):""),_.setAttribute("data-bma-tourn-tournament_dollars",m.tournament_dollars||""),_.setAttribute("data-bma-tourn-prize_distro",Array.isArray(m.prize_distro)?JSON.stringify(m.prize_distro):m.prize_distro||""),_.setAttribute("data-bma-tourn-matches",Array.isArray(m.matches_guids)?JSON.stringify(m.matches_guids):m.matches_guids||""),_.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(m.matches_expanded)?JSON.stringify(m.matches_expanded):m.matches_expanded||""),_.setAttribute("data-bma-tourn-entry_fee",m.entry_fee||""),_.setAttribute("data-bma-tourn-rake",m.rake||""),_.setAttribute("data-bma-tourn-tags",Array.isArray(m.tags)?JSON.stringify(m.tags):m.tags||""),_.setAttribute("data-bma-tourn-comments",m.comments||""),_.setAttribute("data-bma-tourn-class",m.status||""),_.setAttribute("data-bma-tourn-status",m.status||""),_.setAttribute("data-sync-theme",p),_.setAttribute("data-sync-lang",f),_.setAttribute("data-sync-motif",b),_.setAttribute("data-n55-size","medium"),_.setAttribute("data-n55-enchanted-cta-ambient","none"),_.setAttribute("data-tourn-custom-css",""),_.setAttribute("data-tourn-trophy","0"),_.setAttribute("data-bma-tourn-focus",""),_.setAttribute("data-bma-tourn-wait","false"),h.appendChild(_),h};c?l.forEach(m=>{const h=document.createElement("div");h.className="tournament-category";const v=document.createElement("header");v.className="tournament-category-header";const _=document.createElement("h2");if(_.className="category-title",_.textContent=m.title,v.appendChild(_),m.subtext){const y=document.createElement("p");y.className="category-subtext",y.textContent=m.subtext,v.appendChild(y)}h.appendChild(v),d.appendChild(h),m.tournaments.forEach(y=>{const w=g(y);d.appendChild(w)})}):l.forEach(m=>{const h=g(m);d.appendChild(h)})},r=l=>{document.querySelectorAll("bma-tournament-card").forEach(d=>{d.setAttribute("data-sync-theme",l)})},o=l=>{const c=document.querySelectorAll("bma-tournament-card"),d=Date.now().toString();c.forEach(u=>{if(u===l){if(u.setAttribute("data-bma-tourn-focus",d),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},i=l=>{const{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}=l.detail;console.log("[home_route] Tournament action:",{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}),o(l.target),J.publish("WC.TOURN_ACTION",JSON.stringify({action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f,timestamp:Date.now()}))};return Bt(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const l=document.getElementById("app");if(l){const p=s.appCLIFeatures.features.theme?.state,f=s.appCLIFeatures.features.lang?.state,b=s.appCLIFeatures.features.motif?.state,g=s.appSession.session_user.guid;p&&(l.setAttribute("data-sync-theme",p),document.body.setAttribute("data-sync-theme",p)),f&&l.setAttribute("data-sync-lang",f),b&&l.setAttribute("data-sync-motif",b),g&&l.setAttribute("data-user-guid",g)}window._homeRouteRenderCards=a,window.initBetGridToggle=n;const c=J.subscribe("APP.ROUTE_SYNC",(p,f)=>{try{const b=JSON.parse(f);b.theme&&r(b.theme.state)}catch(b){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",b)}});window._homeRoutePubSubToken=c,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),J.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i);const d=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,u=new et(".featured-swiper",{modules:[Eh],slidesPerView:1,spaceBetween:16,loop:d>3,centeredSlides:(d<=3,!1),autoplay:d>3?{delay:3e3,disableOnInteraction:!1}:!1,breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:Math.min(2,d),spaceBetween:16},1024:{slidesPerView:Math.min(3,d),spaceBetween:20},1280:{slidesPerView:Math.min(3,d),spaceBetween:24}}});window.featuredSwiper=u,J.publish(s.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Dn(()=>{document.removeEventListener("bma-tournament-action",i),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&J.unsubscribe(window._homeRoutePubSubToken)}),(l,c)=>(nt(),vt("main",xh,[M("div",Ah,[M("bma-app-head-top",{"data-user-name":qt(s).appSession.session_user.name||"Guest"},null,8,Ph),c[0]||(c[0]=M("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),c[1]||(c[1]=Qt('<bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div></div></section><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',4))]))}},kh={};function Ch(e,t){return nt(),vt("main",null,[...t[0]||(t[0]=[M("h1",null,"App FAQ",-1)])])}const rn=Zt(kh,[["render",Ch]]),Rh={};function Lh(e,t){return nt(),vt("main",null,[...t[0]||(t[0]=[M("h1",null,"App Help",-1)])])}const Mh=Zt(Rh,[["render",Lh]]),At=class At{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,s,n,a=!0){this.strChat=n,this.isDebug=a;const r=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${r}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(i){At.onSSEOpen(i)},this.sseEvent.onmessage=function(i){At.onSSEMessage(i)},this.sseEvent.onerror=function(i){At.onSSEError(i)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),J.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};At.sseEvent=null,At.strChat=null,At.isDebug=!0,At.sessionId=null;let xn=At;class Dt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,n){return new Promise((a,r)=>{const o=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:n});o.onload=a,o.onerror=r,s.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(s,n,a){const r=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:n});a&&(r.onload=function(){a()}),s.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(s,n){let a=s.createElement("link");a.rel="stylesheet",a.href=n,s.getElementsByTagName("head")[0].appendChild(a)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let n=s.split(""),a=[],r=!1;return n.forEach(o=>{o=="-"?r=!0:(a.push(r?o.toUpperCase():o),r=!1)}),a.join("")},doDataLayer:function(s,n){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+n),window.dataLayer&&window.dataLayer.push({event:s,msg:n})},isJSON:function(s){let n=!1;try{n=typeof JSON.parse(s)}catch{}return n=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",a=>{a?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(a.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(a?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let n=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;n&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=n)},prettyTimeRETIRE:s=>{let n=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(n=""),n},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((n,a)=>(n<<5)-n+a.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,n=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},n))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let n=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const a=56;n.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=s},i*a),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(a+a)))}),n=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;n.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=s},i*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*r+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,n,a=neodigmOpt.neodigmMetronome.countTo){const r=[16,a];return[...document.querySelectorAll(s)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-n);neodigmMetronome.unsubscribe(r[1]+i).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&n!=d){let u=l/r[0];u=Math.round(u),c!=0?o.textContent=d<n?d+u:d-u:o.textContent=n}},r[1]+i,r[0])}),neodigmUtils},typeOff:async function(s){let n=document.querySelector(s?.q1st);if(n){let a=n.textContent.length,r=window.getComputedStyle(n),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(n.offsetHeight&&(n.style.height=n.offsetHeight-o+"px");a;)setTimeout(()=>{n.textContent=n.textContent.replace(/.$/,"")},s.uniqueDelay*a--)}},typeOn:async function(s){let n=document.querySelector(s?.q1st);if(n){n.dataset.n55Typeon=0;let a=s.msg.replaceAll("|","   |   ")+"   ",r=a.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&r.length){let o=n.dataset.n55Typeon=neodigmUtils.f02x(r.length);a=r[o]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/n.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(o=>{let i=a[a.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/n.textContent.length-4}),n.dataset.n55Typeon++),n.textContent+=i,s?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,a.length)}return neodigmUtils},getValJSON:function(s,n){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+n+'": "'+s+'" }')}},walkDOM3:function(s,n,a=!1){let r=null;if(!r&&s?.dataset[n]&&(r=s),!r&&s?.parentNode?.dataset[n]&&(r=s.parentNode),!r&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[n]&&(r=s.parentNode.parentNode),r)return a?r:r.dataset[n]},doSetT:function(s,n){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,n):setTimeout(s,n)},shake:function(s,n=!0){return[...document.querySelectorAll(s)].forEach(function(a,r){a.classList.add("shake__an"),setTimeout(function(){a.classList.remove("shake__an")},460)}),Dt.neodigmUtils},hardReload:function(s="n55reset"){const n=new URLSearchParams(window.location.search);n.set(s,new Date().getTime());const a=n.toString();window.location.search=a}}))}const Ih={class:"auth-page"},Dh={class:"auth-page-right"},Nh={class:"auth-card"},Bh={class:"form-group"},Fh={class:"form-group"},$h={class:"password-input-wrapper"},Uh=["type"],Hh={style:{"text-align":"right"}},Gh={class:"auth-link-center"},zh={__name:"signin_route",setup(e){const t=Tt(),s=ge(),n=(p="signin")=>{t.push({name:p})};let a=null;const r=Xe(!1),o=()=>{r.value=!r.value},i=(p=3,f=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const b=Math.floor(Math.random()*p)+f,g=document.querySelector(".img__bg")?.classList;g&&(g.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),g.add(`img__bg--${b}`)),a||(a=J.subscribe("APP__ROUTE_SYNC",(m,h)=>{const v=JSON.parse(h);switch(Object.keys(v)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(g=>g.code==f)[0]?.copy;b=b.filter(g=>g[0]==p.dataset.syncMicrocopyText)[0],b&&(p.textContent=b[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(g=>g.code==f)[0]?.copy;b=b.filter(g=>g[0]==p.dataset.syncMicrocopyPlaceholder)[0],b&&(p.placeholder=b[1])})},c=p=>{Dt.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let b=null,g=null;if(!p?.value)b="Please enter your email",g="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)b="Please enter a valid email address",g="#inp__text--email";else if(!f?.value)b="Please enter your password",g="#inp__text--password";else if(f.value.length<10)b="Password must be at least 10 characters",g="#inp__text--password";else{const m={email:p.value,hash:Dt.neodigmUtils().genHash(f.value)};we.doSignin(m,h=>{const y=(h?.entity?.tags||[]).find(w=>w.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=m.email,s.appSession.session_user.fname=h?.entity?.first,s.appSession.session_user.lname=h?.entity?.last,s.appSession.session_user.userName=y,s.appSession.session_user.name=y,s.appSession.session_user.guid=h?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const w=h?.entity?.guid||s.appSession.session_user.guid;xn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",w,s,!0)}})}b&&(c(g),neodigmToast.q(b,"danger"))};return Bt(()=>{i(),l()}),(p,f)=>(nt(),vt("div",Ih,[f[10]||(f[10]=Qt('<div class="auth-page-left" data-v-bdc22b93><div class="auth-bg" data-v-bdc22b93><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div></div><div class="auth-overlay" data-v-bdc22b93></div><div class="auth-branding-content" data-v-bdc22b93><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-bdc22b93><p class="auth-branding-tagline" data-v-bdc22b93>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-bdc22b93>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-bdc22b93> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",Dh,[M("div",Nh,[f[9]||(f[9]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),M("form",{class:"auth-form",onSubmit:Un(u,["prevent"])},[M("div",Bh,[f[4]||(f[4]=M("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),M("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=b=>d())},null,32)]),M("div",Fh,[f[5]||(f[5]=M("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),M("div",$h,[M("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Uh),M("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=b=>o()),tabindex:"-1"},[M("span",{class:Wt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),M("div",Hh,[M("a",{class:"auth-link",onClick:f[2]||(f[2]=b=>n("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=M("div",{class:"auth-actions"},[M("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),M("p",Gh,[f[6]||(f[6]=M("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Fn()),M("a",{class:"auth-link",onClick:f[3]||(f[3]=b=>n("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},jh=Zt(zh,[["__scopeId","data-v-bdc22b93"]]),Yh={class:"auth-page"},Kh={__name:"signout_route",setup(e){const t=Tt();ge();const s=()=>{mvvLegit.doSignout()},n=()=>{t.push({name:"home_route"})};return(a,r)=>(nt(),vt("div",Yh,[r[1]||(r[1]=Qt('<div class="auth-page-left" data-v-119b5d43><div class="auth-bg" data-v-119b5d43><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div></div><div class="auth-overlay" data-v-119b5d43></div><div class="auth-branding-content" data-v-119b5d43><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-119b5d43><p class="auth-branding-tagline" data-v-119b5d43>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-119b5d43>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-119b5d43> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",{class:"auth-page-right"},[M("div",{class:"auth-card"},[r[0]||(r[0]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title"},"Sign Out"),M("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),M("div",{class:"auth-actions"},[M("button",{onClick:s,class:"btn btn-red"}," Sign Out "),M("button",{onClick:n,class:"btn btn-outline"}," Cancel ")])])])]))}},qh=Zt(Kh,[["__scopeId","data-v-119b5d43"]]),Wh={class:"auth-page"},Vh={class:"auth-page-right",style:{display:"block"}},Jh={class:"auth-card auth-card-wide"},Xh={class:"form-group"},Qh={class:"form-group"},Zh={class:"form-group"},eg={class:"form-group"},tg={class:"form-group"},sg={class:"password-input-wrapper"},ng=["type"],ag={class:"form-group"},rg={class:"password-input-wrapper"},og=["type"],ig={class:"form-group form-group-checkbox"},lg={class:"checkbox-label"},cg={class:"auth-link-center"},dg={__name:"signup_route",setup(e){const t=Tt(),s=ge(),n=(_="signin")=>{t.push({name:_})};let a=null,r=null;const o=Xe(!1),i=Xe(!1),l=Xe(!1),c=()=>{o.value=!o.value},d=()=>{i.value=!i.value},u=_=>{_.preventDefault(),J.publish(s.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(_=3,y=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":_=3,y=1;break;case"white_label":_=3,y=4;break}const w=Math.floor(Math.random()*_)+y,E=document.querySelector(".img__bg")?.classList;E&&(E.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),E.add(`img__bg--${w}`)),a||(a=J.subscribe("APP__ROUTE_SYNC",(P,O)=>{const x=JSON.parse(O);switch(Object.keys(x)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(_=>{const y=s.appCLIFeatures?.features?.lang?.state;let w=s.appMeta.microcopy.language.filter(E=>E.code==y)[0]?.copy;w=w.filter(E=>E[0]==_.dataset.syncMicrocopyText)[0],w&&(_.textContent=w[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(_=>{const y=s.appCLIFeatures?.features?.lang?.state;let w=s.appMeta.microcopy.language.filter(E=>E.code==y)[0]?.copy;w=w.filter(E=>E[0]==_.dataset.syncMicrocopyPlaceholder)[0],w&&(_.placeholder=w[1])})},b=_=>{Dt.neodigmUtils().shake(_||"#inp__text--email")},g=()=>{let _=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(_)},m=_=>{const y=[];return _.length<10&&y.push("at least 10 characters"),/[a-z]/.test(_)||y.push("1 lowercase"),/[A-Z]/.test(_)||y.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(_)||y.push("1 special character"),/[^\x00-\x7F]/.test(_)&&y.push("ASCII characters only"),y},h=async()=>{const _=document.querySelector("#inp__text--username"),y=_?.value?.trim();if(y)try{(await we.checkUserName(y)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),_.value="",_.focus())}catch(w){console.error("Error checking username:",w)}},v=()=>{const _=document.querySelector("#inp__text--first-name"),y=document.querySelector("#inp__text--last-name"),w=document.querySelector("#inp__text--email"),E=document.querySelector("#inp__text--username"),P=document.querySelector("#inp__text--password"),O=document.querySelector("#inp__text--verify-password");let x=null,T=null;if(!_?.value)x="Please enter your first name",T="#inp__text--first-name";else if(!y?.value)x="Please enter your last name",T="#inp__text--last-name";else if(!w?.value)x="Please enter your email",T="#inp__text--email";else if(w.value.indexOf("@")===-1||w.value.indexOf(".")===-1)x="Please enter a valid email address",T="#inp__text--email";else if(!E?.value)x="Please enter a user name",T="#inp__text--username";else if(!P?.value)x="Please enter a password",T="#inp__text--password";else{const k=m(P.value);if(k.length>0)x="Password must have:|"+k.join(", "),T="#inp__text--password";else if(!O?.value)x="Please verify your password",T="#inp__text--verify-password";else if(P.value!==O.value)x="Passwords do not match",T="#inp__text--verify-password";else{const C=_.value.trim(),G=y.value.trim(),q=[{userName:E.value.trim(),ts:Date.now()}],Q={email:w.value,hash:Dt.neodigmUtils().genHash(P.value),first:C,last:G,company:"",phone:"",tags:q};we.doSignup(Q,D=>{D.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}x&&(b(T),neodigmToast.q(x,"danger"))};return Bt(()=>{p(),f(),r||(r=J.subscribe(s.hierTopics.ROUTE__SIGNUP__TERMS,(_,y)=>{JSON.parse(y).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(_,y)=>(nt(),vt("div",Wh,[y[23]||(y[23]=Qt('<div class="auth-page-left" data-v-3a55bbf1><div class="auth-bg" data-v-3a55bbf1><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div></div><div class="auth-overlay" data-v-3a55bbf1></div><div class="auth-branding-content" data-v-3a55bbf1><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-3a55bbf1><p class="auth-branding-tagline" data-v-3a55bbf1>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3a55bbf1>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3a55bbf1> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",Vh,[M("div",Jh,[M("form",{class:"auth-form",onSubmit:Un(v,["prevent"])},[M("div",Xh,[y[12]||(y[12]=M("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),M("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:y[0]||(y[0]=Ot(w=>v(),["enter"]))},null,32)]),M("div",Qh,[y[13]||(y[13]=M("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),M("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:y[1]||(y[1]=Ot(w=>v(),["enter"]))},null,32)]),M("div",Zh,[y[14]||(y[14]=M("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),M("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:y[2]||(y[2]=w=>g()),onKeyup:y[3]||(y[3]=Ot(w=>v(),["enter"]))},null,32)]),M("div",eg,[y[15]||(y[15]=M("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),M("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:y[4]||(y[4]=w=>h()),onKeyup:y[5]||(y[5]=Ot(w=>v(),["enter"]))},null,32)]),M("div",tg,[y[16]||(y[16]=M("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),M("div",sg,[M("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:y[6]||(y[6]=Ot(w=>v(),["enter"]))},null,40,ng),M("button",{type:"button",class:"password-toggle-btn",onClick:y[7]||(y[7]=w=>c()),tabindex:"-1"},[M("span",{class:Wt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),y[17]||(y[17]=M("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),M("div",ag,[y[18]||(y[18]=M("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),M("div",rg,[M("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:y[8]||(y[8]=Ot(w=>v(),["enter"]))},null,40,og),M("button",{type:"button",class:"password-toggle-btn",onClick:y[9]||(y[9]=w=>d()),tabindex:"-1"},[M("span",{class:Wt(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),M("div",ig,[M("label",lg,[mc(M("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":y[10]||(y[10]=w=>l.value=w),class:"terms-checkbox"},null,512),[[Vd,l.value]]),y[19]||(y[19]=M("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),M("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),y[22]||(y[22]=M("div",{class:"auth-actions"},[M("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),M("p",cg,[y[20]||(y[20]=M("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),y[21]||(y[21]=Fn()),M("a",{class:"auth-link",onClick:y[11]||(y[11]=w=>n("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},ug=Zt(dg,[["__scopeId","data-v-3a55bbf1"]]),pg={class:"auth-page"},fg={class:"auth-page-right"},hg={class:"auth-card"},gg={class:"form-group"},mg={class:"auth-link-center"},bg={__name:"forgot_route",setup(e){const t=Tt(),s=ge(),n=(c="signin_route")=>{t.push({name:c})};let a=null;const r=(c=3,d=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),a||(a=J.subscribe("APP__ROUTE_SYNC",(f,b)=>{const g=JSON.parse(b);switch(Object.keys(g)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},i=c=>{Dt.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:we.genHeaders()};fetch(we.API_baseURI+"/m5t/"+we.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{n("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(u),neodigmToast.q(d,"danger"))};return Bt(()=>{r(),o()}),(c,d)=>(nt(),vt("div",pg,[d[7]||(d[7]=Qt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",fg,[M("div",hg,[d[6]||(d[6]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),M("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),M("form",{class:"auth-form",onSubmit:Un(l,["prevent"])},[M("div",gg,[d[2]||(d[2]=M("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),M("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Ot(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=M("div",{class:"auth-actions"},[M("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),M("p",mg,[d[3]||(d[3]=M("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Fn()),M("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>n("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},yg={class:"auth-page"},_g={class:"auth-page-right"},vg={class:"auth-card"},Tg={class:"form-group"},wg={class:"password-input-wrapper"},Sg=["type"],Eg={class:"form-group"},xg={class:"password-input-wrapper"},Ag=["type"],Pg={__name:"resethash_route",setup(e){const t=Tt(),s=ge(),n=()=>{t.push({name:"home_route"})};let a=null;const r=Xe(!1),o=Xe(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},c=(b=3,g=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":b=3,g=1;break;case"white_label":b=3,g=4;break}const m=Math.floor(Math.random()*b)+g,h=document.querySelector(".img__bg")?.classList;h&&(h.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),h.add(`img__bg--${m}`)),a||(a=J.subscribe("APP__ROUTE_SYNC",(v,_)=>{const y=JSON.parse(_);switch(Object.keys(y)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(b=>{const g=s.appCLIFeatures?.features?.lang?.state;let m=s.appMeta.microcopy.language.filter(h=>h.code==g)[0]?.copy;m=m.filter(h=>h[0]==b.dataset.syncMicrocopyText)[0],m&&(b.textContent=m[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(b=>{const g=s.appCLIFeatures?.features?.lang?.state;let m=s.appMeta.microcopy.language.filter(h=>h.code==g)[0]?.copy;m=m.filter(h=>h[0]==b.dataset.syncMicrocopyPlaceholder)[0],m&&(b.placeholder=m[1])})},u=b=>{Dt.neodigmUtils().shake(b||"#inp__text--password")},p=b=>{const g=[];return b.length<10&&g.push("at least 10 characters"),/[a-z]/.test(b)||g.push("1 lowercase"),/[A-Z]/.test(b)||g.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(b)||g.push("1 special character"),/[^\x00-\x7F]/.test(b)&&g.push("ASCII characters only"),g},f=()=>{const b=document.querySelector("#inp__text--password"),g=document.querySelector("#inp__text--verify-password");let m=null,h=null;if(!b?.value)m="Please enter a password",h="#inp__text--password";else{const v=p(b.value);if(v.length>0)m="Password must have:|"+v.join(", "),h="#inp__text--password";else if(!g?.value)m="Please verify your password",h="#inp__text--verify-password";else if(b.value!==g.value)m="Passwords do not match",h="#inp__text--verify-password";else{const _=s.appSession.session_user.email||"",y={email:_,hash:Dt.neodigmUtils().genHash(b.value),modified_by:_},w={method:"POST",body:JSON.stringify(y),headers:we.genHeaders()};fetch(we.API_baseURI+"/m5t/"+we.API_ver+"/acctEntity/resetHash",w).then(E=>E.json()).then(E=>{E.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(E=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}m&&(u(h),neodigmToast.q(m,"danger"))};return Bt(()=>{c(),d()}),(b,g)=>(nt(),vt("div",yg,[g[9]||(g[9]=Qt('<div class="auth-page-left" data-v-cef3f735><div class="auth-bg" data-v-cef3f735><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div></div><div class="auth-overlay" data-v-cef3f735></div><div class="auth-branding-content" data-v-cef3f735><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-cef3f735><p class="auth-branding-tagline" data-v-cef3f735>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-cef3f735>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-cef3f735> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",_g,[M("div",vg,[g[8]||(g[8]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),M("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),M("form",{class:"auth-form",onSubmit:Un(f,["prevent"])},[M("div",Tg,[g[4]||(g[4]=M("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),M("div",wg,[M("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:g[0]||(g[0]=Ot(m=>f(),["enter"]))},null,40,Sg),M("button",{type:"button",class:"password-toggle-btn",onClick:g[1]||(g[1]=m=>i()),tabindex:"-1"},[M("span",{class:Wt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),g[5]||(g[5]=M("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),M("div",Eg,[g[6]||(g[6]=M("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),M("div",xg,[M("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:g[2]||(g[2]=Ot(m=>f(),["enter"]))},null,40,Ag),M("button",{type:"button",class:"password-toggle-btn",onClick:g[3]||(g[3]=m=>l()),tabindex:"-1"},[M("span",{class:Wt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),M("div",{class:"auth-actions"},[g[7]||(g[7]=M("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),M("button",{type:"button",onClick:n,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},Og=Zt(Pg,[["__scopeId","data-v-cef3f735"]]),kg={class:"auth-page"},Cg={class:"auth-page-right"},Rg={class:"auth-card"},Lg={class:"verification-content"},Mg={class:"timer-display"},Ig={__name:"verf_link_route",setup(e){const t=Tt();ul(),ge();const s=Xe(7200);let n=null;const a=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{n=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(n),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Bt(()=>{r()}),Dn(()=>{n&&clearInterval(n)}),(o,i)=>(nt(),vt("div",kg,[i[4]||(i[4]=Qt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),M("div",Cg,[M("div",Rg,[i[3]||(i[3]=M("div",{class:"auth-header"},[M("h1",{class:"auth-title"},"Check Your Email"),M("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),M("div",Lg,[i[0]||(i[0]=M("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=M("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=M("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),M("div",Mg,$o(a(s.value)),1)])])])]))}},Dg=Zt(Ig,[["__scopeId","data-v-f5b4a3c8"]]),Fa=bp({history:Ju(),routes:[{path:"/",name:"splash_route",component:To},{path:"/splash_route",name:"splash_route",component:To},{path:"/error_route",name:"error_route",component:rn},{path:"/forgot_route",name:"forgot_route",component:bg},{path:"/resetforgot_route",name:"resetforgot_route",component:rn},{path:"/resethash_route",name:"resethash_route",component:Og},{path:"/signin_route",name:"signin_route",component:jh},{path:"/signout_route",name:"signout_route",component:qh},{path:"/signup_route",name:"signup_route",component:ug},{path:"/verf_link_route",name:"verf_link_route",component:Dg},{path:"/offline_route",name:"offline_route",component:rn},{path:"/home_route",name:"home_route",component:Oh},{path:"/appFAQ",name:"appFAQ",component:rn},{path:"/appHelp",name:"appHelp",component:Mh}]}),Ce={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,n=null,a=0){const r=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),i=document.querySelector("#summary-payout");r&&(this.updateTDBalance("#summary-balance",e),e<0?r.classList.add("summary-cell__red"):r.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),i&&(i.textContent=s.toFixed(2),s<0?i.classList.add("summary-cell__red"):i.classList.remove("summary-cell__red"));const l=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(l){let d="";if(n){const p=n.tournament_dollars||0,f=e-p;f>0?d=`<span style="display: block; color: #00E676; font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(d=`<span style="display: block; color: #F7C60D; font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const u=e<0?"#FF5252":"#00E676";l.innerHTML=`<span style="color: ${u};">TD$ ${e.toLocaleString()}</span>${d}`}if(c){const d=a||s||0;let u="";d>0&&(u=`<span style="display: block; color: #00E676; font-size: 0.6em; margin-top: 2px;">(→${d.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${u}`}if(n&&n.tournament_dollars){const d=n.tournament_dollars,u=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(u){const f=Math.max(e/d*100,0);u.style.width=`${f}%`}const p=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(p){const f=Math.min(t/d*100,100);p.style.width=`${f}%`}}},categorizeTournaments(e,t,s,n){const a=[],r=l=>(l.entities?.guids||[]).includes(n),o=(l,c)=>(l.sports_allowed||[]).some(u=>u.key===c),i=l=>mt.find(d=>d.key===l)?.title||l;if(t==="lobby"&&s==="all"){const l=e.filter(p=>!r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"||p.status==="LOCKED"||p.class==="LOCKED"));l.length>0&&a.push({title:"Discover New Tournaments",subtext:`Join now • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const c=e.filter(p=>r(p)&&(p.status==="LOCKED"||p.class==="LOCKED"));c.length>0&&a.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=e.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));d.length>0&&a.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=e.filter(p=>p.status==="COMPLETED"||p.class==="COMPLETED").slice(0,20);u.length>0&&a.push({title:"Recently Completed",subtext:`Past competitions • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="my"){let l=e.filter(c=>r(c));if(s!=="all"){l=l.filter(f=>o(f,s));const c=i(s),d=l.filter(f=>f.status==="UPCOMING"||f.class==="UPCOMING");d.length>0&&a.push({title:`Your Upcoming ${c} Tournaments`,subtext:`Ready to start • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(f=>f.status==="LOCKED"||f.class==="LOCKED");u.length>0&&a.push({title:`Your Active ${c} Tournaments`,subtext:`Currently playing • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const p=l.filter(f=>f.status==="COMPLETED"||f.class==="COMPLETED");p.length>0&&a.push({title:`Your Completed ${c} Tournaments`,subtext:`View results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else{const c=l.filter(p=>p.status==="UPCOMING"||p.class==="UPCOMING");c.length>0&&a.push({title:"Your Upcoming Tournaments",subtext:`Ready to start • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>p.status==="LOCKED"||p.class==="LOCKED");d.length>0&&a.push({title:"Your Active Tournaments",subtext:`Currently playing • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>p.status==="COMPLETED"||p.class==="COMPLETED");u.length>0&&a.push({title:"Your Completed Tournaments",subtext:`View results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}}else if(t==="completed"&&s==="all"){const l=e.filter(d=>r(d)&&(d.status==="COMPLETED"||d.class==="COMPLETED"));l.length>0&&a.push({title:"Your Completed Tournaments",subtext:`Your results • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const c=e.filter(d=>!r(d)&&(d.status==="COMPLETED"||d.class==="COMPLETED"));c.length>0&&a.push({title:"Other Completed Tournaments",subtext:`Browse results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c})}else if(s==="multi"){const l=e.filter(c=>(c.sports_allowed?.length||0)>1);if(t==="lobby"){const c=l.filter(p=>!r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));c.length>0&&a.push({title:"Discover Multi-Sport Tournaments",subtext:`Available to join • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"||p.status==="LOCKED"||p.class==="LOCKED"));d.length>0&&a.push({title:"Your Multi-Sport Tournaments",subtext:`Active and upcoming • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);u.length>0&&a.push({title:"Your Completed Multi-Sport",subtext:`Past results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="my"){const c=l.filter(p=>r(p)&&(p.status==="LOCKED"||p.class==="LOCKED"));c.length>0&&a.push({title:"Active Multi-Sport Tournaments",subtext:`Currently playing • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));d.length>0&&a.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Ready to start • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED"));u.length>0&&a.push({title:"Completed Multi-Sport Tournaments",subtext:`View results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="completed"){const c=l.filter(u=>r(u)&&(u.status==="COMPLETED"||u.class==="COMPLETED"));c.length>0&&a.push({title:"Your Completed Multi-Sport",subtext:`Your results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(u=>!r(u)&&(u.status==="COMPLETED"||u.class==="COMPLETED"));d.length>0&&a.push({title:"Other Completed Multi-Sport",subtext:`Browse results • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d})}}else if(s!=="all"&&t!=="my"){const l=i(s),c=e.filter(p=>o(p,s));if(t==="lobby"){const p=c.filter(b=>!r(b)&&(b.status==="UPCOMING"||b.class==="UPCOMING"));p.length>0&&a.push({title:`Discover ${l} Tournaments`,subtext:`Available to join • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p});const f=c.filter(b=>r(b)&&(b.status==="UPCOMING"||b.class==="UPCOMING"||b.status==="LOCKED"||b.class==="LOCKED"));f.length>0&&a.push({title:`Your ${l} Tournaments`,subtext:`Active and upcoming • ${f.length} tournament${f.length!==1?"s":""}`,tournaments:f})}const d=c.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);d.length>0&&a.push({title:`Your Completed ${l}`,subtext:`Your past results • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=c.filter(p=>!r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);u.length>0&&a.push({title:`Other Completed ${l}`,subtext:`Browse results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else a.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return a},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=ge();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let n=0,a=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const g=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.tournament_guid===e.guid);console.log("[Dashboard Update] Found",g.length,"existing bets for this tournament"),g.forEach(m=>{(m.bet||[]).forEach(v=>{Object.keys(v).filter(y=>y!=="short_title").forEach(y=>{const w=v[y];w&&(w.stake&&(n+=parseFloat(w.stake)),w.reconciled===!0&&w.payout>0&&(a+=parseFloat(w.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const b=parseFloat(o.textContent)||0;r=Math.max(0,b-n),console.log("[Dashboard Update] Summary total stakes:",b,"Pending:",r)}const i=n+r,l=s-n-r+a;console.log("[Dashboard Update] TD$:",s,"Committed:",n,"Pending:",r,"Payouts:",a,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");if(c){const b=l-s;let g="";b>0?g=`<span style="display: block; color: #00E676; font-size: 0.6em; margin-top: 2px;">(+${b.toLocaleString()})</span>`:b<0&&(g=`<span style="display: block; color: #F7C60D; font-size: 0.6em; margin-top: 2px;">(${b.toLocaleString()})</span>`);const m=l<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${m};">TD$ ${l.toLocaleString()}</span>${g}`}const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(d){const b=r>0?r:i,g=a||0;let m="";if(g>0&&(m=` <span style="color: #00E676; font-size: 0.7em;">(→${g.toLocaleString()})</span>`),d.innerHTML=`TD$ ${b.toLocaleString()}${m}`,u){const h=Math.min(b/s*100,100);u.style.width=`${h}%`}}const p=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(p){const b=Math.max(l/s*100,0);p.style.width=`${b}%`}const f=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(f&&e){const b=e.entities?.guids?.length||0,g=e.entities?.max||100,m=b/g*100;f.style.width=`${m}%`}},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const s=new Date,n=[...e.matches_expanded].sort((r,o)=>{const i=new Date(r.scheduled_at),l=new Date(o.scheduled_at),c=i<s,d=l<s;return c&&!d?1:!c&&d?-1:i-l}),a=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&ge().coreTourn.length>0&&(i=ge().coreTourn[ge().coreTourn.length-1].data.find(b=>b.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=ge();J.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};n.forEach(r=>{const i=new Date(r.scheduled_at)<s;let l=!1;try{l=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",r.id),c.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),c.setAttribute("data-match-title",r.title),c.setAttribute("data-match-short-title",r.short_title||r.title),c.setAttribute("data-scheduled-at",r.scheduled_at),c.setAttribute("data-home-team",r.home_team_id||"Home"),c.setAttribute("data-away-team",r.away_team_id||"Away"),c.setAttribute("data-is-disabled",i||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);c.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(r.sport_id)c.setAttribute("data-sport-key",r.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const b=document.querySelector(".bet-grid__slip-BETSLIP-content");if(b){const g=b.querySelectorAll("bma-bet-entry");let m=!1;g.forEach(h=>{if(m)return;const v=h.getAttribute("data-content-type"),_=h.getAttribute("data-content-odds");v===u.type&&_===u.price&&(h.remove(),m=!0)}),b.children.length===0&&(b.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}f.classList.remove("btn--active"),setTimeout(()=>{a()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(m=>{m.shadowRoot.querySelectorAll(".btn--selected").forEach(h=>{h.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const b=ge(),g=u.type;g==="spread"?J.publish(b.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):g==="money"?J.publish(b.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):g==="total"&&J.publish(b.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),J.publish(b.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector("[data-publish-betslip]");s&&delete s.dataset.processing;const n=document.querySelector(".bet-grid__slip-BETSLIP-content");n&&(n.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const a=ge();if(a.coreTourn.length>0){const i=a.coreTourn[a.coreTourn.length-1].data.find(l=>l.guid===e);i&&Ce.renderMatchCards(i)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{J.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const r=document.querySelector(".bet-grid__slip");r&&r.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(n=>{try{return JSON.parse(n.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(n=>{const a=n.getAttribute("data-match-guid"),r=n.getAttribute("data-home-team"),o=n.getAttribute("data-away-team");(n.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?r:o;t.some(b=>{if(b.coreMatches__guid!==a)return!1;const g=b.bet||[];if(g.length===0)return!1;const m=g[0],v=Object.keys(m).filter(w=>w!=="short_title")[0],y=m[v]?.type;return c==="total"?y===c:y===c&&v===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},updatePlayButton(){const e=ge(),t=document.querySelector(".play-cntr"),s=t?.dataset?.currentTournGuid,n=t?.dataset?.currentTournAction||"INFO",a=document.getElementById("btn-join__play--id");if(!a||!s||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===s);if(!o)return;const i=e.appSession?.session_user?.guid,l=o.entities?.guids?.includes(i),c=o.status;a.style.display="none",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(a.style.display="",c==="UPCOMING"&&!l?n==="INFO"?(a.textContent="Join",a.dataset.requiresJoin="true"):n==="PLAY"&&(a.textContent="Play",a.dataset.requiresJoin="false"):(a.textContent="Play",a.dataset.requiresJoin="false"))},populateInfoPage(){const e=ge(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const a=e.coreTourn[e.coreTourn.length-1].data.find(w=>w.guid===s);if(!a)return;const r=document.getElementById("pop-play__caro-info-summary1--id");if(!r)return;const o=w=>{if(!w)return"N/A";const E=new Date(w);return isNaN(E.getTime())?"Invalid Date":E.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},i=a.status?`info-row__value--${a.status.toLowerCase()}`:"",l={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},c=a.sports_allowed&&Array.isArray(a.sports_allowed)?a.sports_allowed.map(w=>{const E=w.key||w,P=mt.find(T=>T.key===E),O=P?P.group:"default",x=l[E]||P?.title||E;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${E}" data-sport-group="${O}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: #F7C60D; letter-spacing: 0.03em;">${x}</span>
                </span>`}).join(""):"N/A",d=e.appSession?.session_user?.guid,u=a.entities?.guids?.includes(d),p=(()=>{const w=new Date(a.window_start_time),E=new Date(a.window_end_time),P=new Date;if(isNaN(w.getTime())||isNaN(E.getTime()))return"";const O=E-w,x=P-w;let T=0,k="";if(P<w){T=0;const C=w-P,G=Math.floor(C/(1e3*60*60*24)),q=Math.floor(C%(1e3*60*60*24)/(1e3*60*60));k=G>0?`First match in ${G}d ${q}h`:`First match in ${q}h`}else if(P>E)T=100,k="Tournament Complete";else{T=Math.min(100,x/O*100);const C=Math.ceil(O/(1e3*60*60*24));k=`Day ${Math.ceil(x/(1e3*60*60*24))} of ${C}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: #F7C60D; font-weight: 600;">${k}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${T.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})();let f=0,b=0,g=0;const m=new Date;(a.matches_expanded||[]).forEach(w=>{let E=null;try{E=typeof w.scoreboard_data=="string"?JSON.parse(w.scoreboard_data):w.scoreboard_data}catch{}E?.time_remaining?E.time_remaining.toLowerCase()==="final"?f++:b++:new Date(w.scheduled_at)<m?f++:g++});const h=b>0?"live":"upcoming",v=(()=>{if((a.matches_expanded||[]).length===0)return"";const E=f,P=b,O=g,x=[],T="cursor: pointer; padding: 8px 18px; border-radius: 6px; transition: all 0.2s ease; font-size: 0.85rem; font-weight: 600; letter-spacing: 0.03em; user-select: none; border: 1px solid;",k=P>0?"live":"upcoming";return E>0&&x.push(`<span class="match-filter-btn${k==="final"?" match-filter--active":""}" data-filter="final" style="${T} color: ${k==="final"?"rgba(255,255,255,0.7)":"rgba(255,255,255,0.3)"}; border-color: ${k==="final"?"rgba(255,255,255,0.25)":"rgba(255,255,255,0.08)"}; background: ${k==="final"?"rgba(255,255,255,0.08)":"transparent"};">${E} Final</span>`),P>0&&x.push(`<span class="match-filter-btn${k==="live"?" match-filter--active":""}" data-filter="live" style="${T} color: ${k==="live"?"#00E676":"rgba(255,255,255,0.3)"}; border-color: ${k==="live"?"rgba(0,230,118,0.3)":"rgba(255,255,255,0.08)"}; background: ${k==="live"?"rgba(0,230,118,0.12)":"transparent"};">${P} Live</span>`),O>0&&x.push(`<span class="match-filter-btn${k==="upcoming"?" match-filter--active":""}" data-filter="upcoming" style="${T} color: ${k==="upcoming"?"#F7C60D":"rgba(255,255,255,0.3)"}; border-color: ${k==="upcoming"?"rgba(247,198,13,0.3)":"rgba(255,255,255,0.08)"}; background: ${k==="upcoming"?"rgba(247,198,13,0.12)":"transparent"};">${O} Upcoming</span>`),`<div style="display: flex; align-items: center; gap: 10px; margin-top: 10px; flex-wrap: wrap;">
                <span style="font-size: 0.7rem; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; color: rgba(255,255,255,0.35);">Filter</span>
                ${x.join("")}
            </div>`})();r.innerHTML=`
            ${u?`<div style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 16px; background: linear-gradient(135deg, rgba(46, 139, 87, 0.15), rgba(46, 139, 87, 0.05)); border: 1px solid rgba(46, 139, 87, 0.3); border-radius: 8px; margin-bottom: 12px;">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="#00E676"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                        <span style="color: #00E676; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">Entered</span>
                    </div>`:a.status==="UPCOMING"?`<div style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 16px; background: linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.03)); border: 1px solid rgba(255, 215, 0, 0.25); border-radius: 8px; margin-bottom: 12px;">
                        <span style="color: #F7C60D; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">Open for Entry</span>
                    </div>`:a.status==="LOCKED"?`<div style="display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 16px; background: rgba(30, 30, 30, 0.6); border: 1px solid rgba(255, 255, 255, 0.12); border-radius: 8px; margin-bottom: 12px;">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="#969696"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                        <span style="color: #969696; font-weight: 700; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.05em;">Locked</span>
                    </div>`:""}

            <div class="info-section" style="margin-top: 16px;">
                <div class="info-section__title">Competition</div>
                <div class="info-row">
                    <span class="info-row__label">Total Games</span>
                    <span class="info-row__value">${a.matches_expanded?.length||0}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Sports</span>
                    <span class="info-row__value">${c}</span>
                </div>
            </div>

            <div class="info-section">
                <div class="info-section__title">Tournament Schedule</div>
                ${p}
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
                    <span class="info-row__label">Starting Tournament Dollars</span>
                    <span class="info-row__value" style="color: #00E676; font-weight: 700;">TD$ ${a.tournament_dollars||0}</span>
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

            ${(()=>{const E=(a.tags||[]).find(T=>T.badge_gold!==void 0||T.badge_silver!==void 0||T.badge_bronze!==void 0);if(!E)return"";const P=E.badge_gold||0,O=E.badge_silver||0,x=E.badge_bronze||0;return P===0&&O===0&&x===0?"":`<div class="info-section">
                    <div class="info-section__title">Trophy Distribution</div>
                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 24px 12px 0; margin-top: 12px;">

                        <!-- Silver - 2nd place (left) -->
                        ${O>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                            <div style="width: 80px; height: 80px; background-image: var(--badge__silver); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                            <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">×${O}</span>
                            <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                            </div>
                        </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}

                        <!-- Gold - 1st place (center, tallest) -->
                        ${P>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                            <div style="width: 100px; height: 100px; background-image: var(--badge__gold); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                            <span style="font-size: 0.85rem; font-weight: 700; color: #FFD700; margin-bottom: 6px;">×${P}</span>
                            <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                <span style="font-size: 1.5rem; font-weight: 800; color: #FFD700;">1st</span>
                            </div>
                        </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}

                        <!-- Bronze - 3rd place (right) -->
                        ${x>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                            <div style="width: 68px; height: 68px; background-image: var(--badge__bronze); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                            <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">×${x}</span>
                            <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                            </div>
                        </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}

                    </div>
                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
                </div>`})()}

            ${(()=>{const E=(a.tags||[]).some(k=>k.match_inprogress_lock===!0),P=E?'<svg width="22" height="22" viewBox="0 0 24 24" fill="#F7C60D" xmlns="http://www.w3.org/2000/svg"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/></svg>':'<svg width="22" height="22" viewBox="0 0 24 24" fill="#00E676" xmlns="http://www.w3.org/2000/svg"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>',O=E?"Locked Odds Tournament":"Live Odds Tournament",x=E?"Odds Lock at Game Start":"";return`<div class="info-section">
                    <div class="info-section__title">Tournament Rules <span style="font-weight: 400; opacity: 0.5;">(Legend)</span></div>
                    <div class="info-row" style="align-items: center;">
                        <span style="display: inline-flex; align-items: center; gap: 10px;">
                            ${P}
                            <span style="display: flex; flex-direction: column;">
                                <span style="color: ${E?"#F7C60D":"#00E676"}; font-weight: 700; font-size: 0.85rem;">${O}</span>
                                ${x?`<span style="color: rgba(255,255,255,0.4); font-size: 0.7rem; margin-top: 2px;">${x}</span>`:""}
                            </span>
                        </span>
                    </div>
                </div>`})()}
        `;const _=document.getElementById("pop-play__caro-info-summary2--id");_&&(_.innerHTML="");const y=document.getElementById("pop-play__caro-info-list--id");if(y&&a.matches_expanded&&Array.isArray(a.matches_expanded)){const w=new Date,E=a.matches_expanded.map(T=>{const k=T.scoreboard_data?typeof T.scoreboard_data=="string"?T.scoreboard_data:JSON.stringify(T.scoreboard_data):"";let C="upcoming",G=null;try{G=typeof T.scoreboard_data=="string"?JSON.parse(T.scoreboard_data):T.scoreboard_data}catch{}G?.time_remaining?C=G.time_remaining.toLowerCase()==="final"?"final":"live":C=new Date(T.scheduled_at)<w?"final":"upcoming";const q=C!==h;return`
                    <bma-match-status
                        data-match-guid="${T.guid||T.odds_id||T.id||""}"
                        data-match-title="${T.short_title||T.title||"Match"}"
                        data-match-scheduled-at="${T.scheduled_at||""}"
                        data-match-home-team="${T.home_team_id||"Home"}"
                        data-match-away-team="${T.away_team_id||"Away"}"
                        data-match-home-score="${T.home_team_score!==null&&T.home_team_score!==void 0?T.home_team_score:""}"
                        data-match-away-score="${T.away_team_score!==null&&T.away_team_score!==void 0?T.away_team_score:""}"
                        data-match-scoreboard="${k.replace(/"/g,"&quot;")}"
                        data-match-sport-id="${T.sport_id||""}"
                        data-match-status="${C}"
                        data-sync-theme="dark"
                        style="${q?"display: none;":""}"
                    ></bma-match-status>
                `}).join("");y.innerHTML=`
                <div class="info-section">
                    <div class="info-section__title">Matches</div>
                    ${v||""}
                </div>
                <div class="matches-scroll-container" style="max-height: 480px; overflow-y: auto; position: relative; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.15) transparent;">
                    ${E}
                </div>
                <div class="matches-scroll-fade" style="height: 32px; margin-top: -32px; position: relative; pointer-events: none; background: linear-gradient(to top, rgba(16,16,16,0.95), transparent); z-index: 1;"></div>
            `;const P=y.querySelector(".matches-scroll-container"),O=y.querySelector(".matches-scroll-fade");if(P&&O){const T=()=>{const k=P.scrollHeight-P.scrollTop-P.clientHeight<8;O.style.opacity=k?"0":"1"};P.addEventListener("scroll",T),setTimeout(T,100)}const x=()=>{y.querySelectorAll(".match-filter-btn").forEach(T=>{const k=T.dataset.filter;T.classList.contains("match-filter--active")?k==="final"?(T.style.background="rgba(255,255,255,0.08)",T.style.borderColor="rgba(255,255,255,0.25)",T.style.color="rgba(255,255,255,0.7)"):k==="live"?(T.style.background="rgba(0,230,118,0.12)",T.style.borderColor="rgba(0,230,118,0.3)",T.style.color="#00E676"):k==="upcoming"&&(T.style.background="rgba(247,198,13,0.12)",T.style.borderColor="rgba(247,198,13,0.3)",T.style.color="#F7C60D"):(T.style.background="transparent",T.style.borderColor="rgba(255,255,255,0.08)",T.style.color="rgba(255,255,255,0.3)")})};y.addEventListener("click",T=>{const k=T.target.closest(".match-filter-btn");if(!k)return;y.querySelectorAll(".match-filter-btn").forEach(G=>{G.classList.remove("match-filter--active")}),k.classList.add("match-filter--active"),x();const C=k.dataset.filter;y.querySelectorAll("bma-match-status").forEach(G=>{const q=G.dataset.matchStatus;G.style.display=q===C?"":"none"})})}},async populateLeaderboard(){const e=ge(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,n=e.appSession?.session_user?.guid;if(!s){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const a=document.getElementById("pop-play__caro-leaderboard--id");if(!a)return;let r=document.getElementById("leaderboard-loading-banner");r||(r=document.createElement("neodigm-juicebar"),r.id="leaderboard-loading-banner",r.setAttribute("role","progressbar"),r.setAttribute("data-n55-theme","warning"),r.setAttribute("data-n55-size","small"),r.innerHTML="<div></div>",r.style.cssText=`
                width: 100%;
                margin: 6px;
            `,a.parentNode.insertBefore(r,a)),r.style.visibility="visible";try{const o=await we.fetchLeaderboard(s),i=o?.data||o?.rows;if(i&&i.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(b=>b.guid===s);a.innerHTML=i.map((b,g)=>{let m="";if(c?.tags&&Array.isArray(c.tags)){const _=c.tags.find(y=>!!(typeof y=="object"&&y!==null&&(y.entity_guid===b.user_guid&&y.badge&&y.badge.startsWith("--badge__ribbon--")||y[b.user_guid]&&y[b.user_guid].startsWith("--badge__ribbon--"))));if(_){const y=_.badge||_[b.user_guid];y==="--badge__ribbon--gold"?m="badge-trophy--gold":y==="--badge__ribbon--silver"?m="badge-trophy--silver":y==="--badge__ribbon--bronze"&&(m="badge-trophy--bronze")}}const h=b.combined_betslips?typeof b.combined_betslips=="string"?b.combined_betslips:JSON.stringify(b.combined_betslips):"[]";let v="[]";if(b.combined_betslips&&c?.matches_expanded){const _=typeof b.combined_betslips=="string"?JSON.parse(b.combined_betslips):b.combined_betslips,y=[...new Set(_.map(E=>E.coreMatches__guid||E.match_guid||E.odds_id).filter(Boolean))],w=c.matches_expanded.filter(E=>{const P=E.guid||E.id||E.odds_id;return y.includes(P)});v=JSON.stringify(w)}return`
                        <bma-leaderboard-card
                            data-rank="${g+1}"
                            data-username="${b.username||"Unknown"}"
                            data-user-guid="${b.user_guid||""}"
                            data-tournament-dollars="${b.calculated_tournament_dollars||0}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${b.total_betslips||0}"
                            data-total-payout="${b.total_payout||0}"
                            data-combined-betslips="${h.replace(/"/g,"&quot;")}"
                            data-user-matches="${v.replace(/"/g,"&quot;")}"
                            data-badge-class="${m}"
                            data-is-current-user="${b.user_guid===n}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `}).join("");const d=i.findIndex(b=>b.user_guid===n),u=d>=0?d+1:i.length,p=c?.entities?.guids?.length||i.length,f=document.getElementById("dashboard-rank");f&&(f.innerHTML=`<span class="tourn-dashboard__rank-text">${u}/${p}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`)}else a.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),a.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=ge(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const a=e.coreTourn[e.coreTourn.length-1].data.find(r=>r.guid===s);a&&(console.log("[appEvents] Hydrating play popup for tournament:",s),this.populateInfoPage(),this.renderMatchCards(a),this.updateTournamentDashboard(a),this.updatePlayButton())},bindAppListeners(e){J.subscribe("APP",(g,m)=>{console.warn("~~ sub all APP | "+g+"|"+m)}),J.subscribe("WC",(g,m)=>{console.warn("~~ sub all WC  | "+g+"|"+m)}),J.subscribe("ROUTE",(g,m)=>{console.warn("~~ sub all ROUTE  | "+g+"|"+m)});let t="lobby",s="all";const n=()=>{if(e.coreTourn.length===0)return;const m=e.coreTourn[e.coreTourn.length-1].data,h=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(y=>y.classList.remove("h-ds__none"));let _=0;if(m.forEach(y=>{const w=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${y.guid}"]`);if(!w)return;const E=w.parentElement;let P=!0;if(t==="my"?(y.entities?.guids||[]).includes(h)||(P=!1):t==="completed"&&(y.status||y.class)!=="COMPLETED"&&(P=!1),s!=="all"&&P){const O=y.sports_allowed||[];s==="multi"?O.length<=1&&(P=!1):O.some(T=>T.key===s)||(P=!1)}P?_++:E&&E.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${s} - showing ${_} of ${m.length} tournaments`),_===0){let y="No tournaments match the current filters";t==="my"&&(y="You haven't joined any tournaments yet"),t==="completed"&&(y="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(y,"night")}};J.subscribe(e.hierTopics.COREBETSLIP,(g,m)=>{JSON.parse(m);let h=16;switch(g){case e.hierTopics.COREBETSLIP__BET:h=5,qs.shootConfetti(),console.log("~~~  |  "+g+" | ",m);const v=document.querySelector("[data-bets-valid]");v&&(v.dataset.betsValid="false");const _=document.querySelector("neodigm-sodapop");_&&_.setAttribute("data-wait","true");const y=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(y.length===0){console.warn("[app_events] No bets to submit"),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const E=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,P=e.appSession?.session_user?.guid;if(!E||!P){console.error("[app_events] Missing tournament or user GUID"),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const O=Array.from(y).map(D=>{const z=D.getAttribute("data-content-team-points"),U=D.getAttribute("data-content-odds"),ee=D.getAttribute("data-stake")||"0",ae=D.getAttribute("data-content-type"),le=D.getAttribute("data-payout")||"0",ie=D.getAttribute("data-match-guid")||"",ve={};return ve[z]={type:ae,stake:parseFloat(ee),odds:parseFloat(U),payout:parseFloat(le),reconciled:!1},{acctEntity__guid:P,coreTournaments__guid:E,coreMatches__guid:ie,bet:[ve],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",O),we.postBetSlips(O).then(D=>{console.log("[app_events] Bet slips posted successfully:",D);const z=O.reduce((U,ee)=>{const ae=ee.bet[0],le=Object.keys(ae)[0];return U+(ae[le]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${z.toFixed(2)}`,"success"),we.fetchBetSlips(P,E).then(U=>{if(U?.rows){const ee={timestamp:Date.now(),source:"API",data:U.rows};e.pushcoreBetSlip(ee),console.log("[app_events] Refreshed bet slips in store:",U.rows.length,"items")}Ce.refreshPlayPopupUI(E,U),_&&_.setAttribute("data-wait","false")}).catch(U=>{console.error("[app_events] Error fetching fresh bet slips:",U);const ee=document.querySelector("[data-publish-betslip]");ee&&delete ee.dataset.processing,v&&(v.dataset.betsValid="true"),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(D=>{console.error("[app_events] Error posting bet slips:",D);const z=document.querySelector("[data-publish-betslip]");z&&delete z.dataset.processing,v&&(v.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),_&&_.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:h=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&m){m=JSON.parse(m);const z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&z){const U=e.coreBetSlip[0].data.filter(I=>I.coreTournaments__guid===z),ee=[],ae=[],le=[];U.forEach(I=>{const W=I.bet||[];if(W.length===0)return;const Y=W[0];Object.keys(Y).filter(ce=>ce!=="short_title").forEach(ce=>{const S=Y[ce],A=S?.reconciled!==!1,R=parseFloat(S?.payout||0);A?R===0?ae.push(I):le.push(I):ee.push(I)})});const ie=Ze.search(ee,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ve=Ze.search(ae,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Oe=ie+ve,Se=Ze.search(le,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Te=m.tournament_dollars-Oe+Se;Ce.updateTDBalance("#summary-balance",Te)}else Ce.updateTDBalance("#summary-balance",m.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let T=0,k=0,C=0;if(e.coreBetSlip.length>0){const z=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(z){const ee=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(Se=>Se.coreTournaments__guid===z),ae=[],le=[],ie=[];ee.forEach(Se=>{const Te=Se.bet||[];if(Te.length===0)return;const I=Te[0];Object.keys(I).filter(Y=>Y!=="short_title").forEach(Y=>{const Z=I[Y],ce=Z?.reconciled!==!1,S=parseFloat(Z?.payout||0);ce?S===0?le.push(Se):ie.push(Se):ae.push(Se)})}),T=Ze.search(ae,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,k=Ze.search(ie,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const ve=Ze.search(le,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Oe=Ze.search(ie,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;C=ve+Oe}}let G=!0,q=0;const Q=document.querySelector("[data-bets-valid]");if(Q&&m){m=JSON.parse(m),m.pending_stake_sum=0,m.pending_payout_sum=0,m.bets.length||(G=!1),m.bets.forEach(ie=>{ie.stake=Number(ie.stake),ie.stake>0?m.pending_stake_sum+=ie.stake:G=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(ie=>{const ve=parseFloat(ie.getAttribute("data-payout")||"0");m.pending_payout_sum+=ve});const z=T+m.pending_stake_sum,U=k+m.pending_payout_sum;q=parseFloat((m.tournament_dollars-z-C+k).toFixed(2));const ae=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let le=null;ae&&e.coreTourn.length>0&&(le=e.coreTourn[e.coreTourn.length-1]?.data?.find(ve=>ve.guid===ae)),Ce.updateSummaryAndDashboard(q,z,U,le,m.pending_payout_sum||0),(m.tournament_dollars<0||q<0)&&(G=!1),Q.dataset.betsValid=G}break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h,"QUITE").vibrate()});const a=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;m&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(y=>y.guid===m)?.tournament_dollars||0),J.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:h,timestamp:Date.now()}))},r=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;m&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(T=>T.guid===m)?.tournament_dollars||0);let v=0,_=0,y=0,w=0;if(e.coreBetSlip.length>0&&m){const x=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(D=>D.coreTournaments__guid===m);console.log("[app_events] Filtered bets for tournament:",m,"found:",x.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",x[0]);const T=[],k=[],C=[];x.forEach(D=>{const z=D.bet||[];if(z.length===0)return;const U=z[0];Object.keys(U).filter(ae=>ae!=="short_title").forEach(ae=>{const le=U[ae],ie=le?.reconciled!==!1,ve=parseFloat(le?.payout||0);ie?ve===0?k.push(D):C.push(D):T.push(D)})}),console.log("[app_events] Bet categories:",{unreconciled:T.length,reconciledZero:k.length,reconciledNonZero:C.length});const G=Ze.search(T,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,q=Ze.search(k,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Q=Ze.search(C,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;y=q+Q,_=Ze.search(C,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,w=Ze.search(T,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,v=G,console.log("[app_events] Balance calculation:",{unreconciledStakes:G,lostBetStakes:q,wonBetStakes:Q,allReconciledStakes:y,displayedStake:v,reconciledPayouts:_,tournamentDollars:h,calculatedBalance:h-v-y+_})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const E=h-v-y+_;let P=null;m&&e.coreTourn.length>0&&(P=e.coreTourn[e.coreTourn.length-1].data.find(x=>x.guid===m)),Ce.updateSummaryAndDashboard(E,v,_,P,w)};J.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(g,m)=>{const v=JSON.parse(m)?.rows||[],_=document.querySelector(".bet-grid__slip-MYBETS");if(!_)return;if(_.innerHTML="",v.length===0){_.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const P=document.querySelector(".bet-grid__slip");P&&P.setAttribute("data-active-bet-tab","BETSLIP"),a();return}v.forEach(P=>{if((P.bet||[]).length===0)return;const x=document.createElement("bma-bet-existing");x.setAttribute("data-corebetslip",JSON.stringify(P)),_.appendChild(x)});const y=document.querySelector(".bet-grid__slip");y&&y.setAttribute("data-active-bet-tab","MYBETS"),ge().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Ce.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",v.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),r()},200)}),document.addEventListener("click",g=>{const m=g.target;if(m&&m.classList.contains("bet-slip-tab")){const h=m.dataset.betTab,v=document.querySelector(".bet-grid__slip");h&&v&&(v.setAttribute("data-active-bet-tab",h),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",h))}if(m&&m.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(m.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}m.dataset.processing="true";const v=m.dataset.publishBetslip;J.publish(v,JSON.stringify({timestamp:Date.now()}))}});const o=()=>{const m=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;m&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(E=>E.guid===m)?.tournament_dollars||0);const v=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),_=Array.from(v).map(y=>({teamPoints:y.getAttribute("data-content-team-points"),odds:y.getAttribute("data-content-odds"),stake:y.getAttribute("data-stake")||"0",type:y.getAttribute("data-content-type"),abbreviatedTitle:y.getAttribute("data-abbreviated-title"),scheduledAt:y.getAttribute("data-scheduled-at")}));J.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:h,bets:_,timestamp:Date.now()}))},i=(g,m)=>{const h=JSON.parse(m),v=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!v){console.error("[app_events] Bet slip container not found");return}const _=v.querySelector(".bet-slip__empty");_&&_.remove();let y="";h.type==="total"?y=h.team==="over"?"Over":"Under":h.team==="home"?y=h.homeTeam:h.team==="away"&&(y=h.awayTeam);let w=y;if(h.point)if(h.type==="spread"){const k=parseFloat(h.point)>0?`+${h.point}`:h.point;w=`${y} ${k}`}else h.type==="total"&&(w=`${y} ${h.point}`);const E=document.createElement("bma-bet-entry");E.setAttribute("data-content-team-points",w),E.setAttribute("data-content-odds",h.price||"0"),E.setAttribute("data-content-stake-text","0"),E.setAttribute("data-content-type",h.type||""),E.setAttribute("data-abbreviated-title",h.abbreviatedTitle||`${h.homeTeam} vs ${h.awayTeam}`),E.setAttribute("data-scheduled-at",h.scheduledAt||""),E.setAttribute("data-match-guid",h.matchGuid||""),E.setAttribute("data-home-team",h.homeTeam||""),E.setAttribute("data-away-team",h.awayTeam||""),E.setAttribute("data-bet-team",y||"");const O=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(O&&e.coreTourn.length>0){const C=e.coreTourn[e.coreTourn.length-1].data.find(G=>G.guid===O);if(C?.sports_allowed&&C.sports_allowed.length>0){const G=C.sports_allowed[0];E.setAttribute("data-sport-key",G.key||"");const q=mt.find(Q=>Q.key===G.key);E.setAttribute("data-sport-group",q?.group||"")}}v.appendChild(E),console.log("[app_events] Bet entry appended to container:",E,"Container children:",v.children.length),setTimeout(()=>{c(E)},0);const x=document.querySelector(".bet-grid__slip");x&&(x.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const T=v.querySelectorAll("bma-bet-entry").length;T>=3?requestAnimationFrame(()=>{setTimeout(()=>{const k=document.querySelector(".bet-grid__slip");k&&(console.log("[app_events] Scrolling parent to bottom - bet count:",T,"scrollHeight:",k.scrollHeight,"current scrollTop:",k.scrollTop),k.scrollTo({top:k.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",k.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",T,"bet cards (need 3+)"),setTimeout(()=>{o()},200),console.log("[app_events] Created bet entry:",{teamPoints:w,odds:h.price,type:h.type})};J.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(g,m)=>{i(g,m),l()}),J.subscribe(e.hierTopics.COREBETSLIP__MONEY,(g,m)=>{i(g,m),l()}),J.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(g,m)=>{i(g,m),l()});function l(){const g=window.matchMedia("(orientation: portrait)").matches,m=window.matchMedia("(max-width: 768px)").matches;if(g||m){const h=document.querySelector(".bet-grid__select"),v=document.querySelector(".bet-grid__slip"),_=document.querySelector(".bet-grid__toggle-text");h&&v&&_&&(h.classList.add("collapsed"),v.classList.remove("collapsed"),_.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const c=g=>{const m={sport:{key:g.getAttribute("data-sport-key")||"",group:g.getAttribute("data-sport-group")||""},Match:{scheduled_at:g.getAttribute("data-scheduled-at")||"",home_team_id:g.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:g.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:g.getAttribute("data-bet-team")||"",over:"",under:""},type:g.getAttribute("data-content-type")||"",odds:g.getAttribute("data-content-odds")||"0",stake:g.getAttribute("data-stake")||"0"}},h=gl.calcPayout(m);g.setAttribute("data-payout",h.toString()),console.log("[app_events] Payout calculated:",{stake:m.Bet.stake,odds:m.Bet.odds,payout:h})};new MutationObserver(g=>{g.forEach(m=>{m.type==="attributes"&&m.attributeName==="data-stake"&&m.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",m.target.getAttribute("data-stake")),c(m.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{o()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",g=>{console.log("[app_events] Removing bet entry:",g.detail);const m=g.target,h=g.detail;m.remove(),setTimeout(()=>{const w=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(w){const E=ge(),P=E.coreTourn[E.coreTourn.length-1];if(P&&P.data){const O=P.data.find(x=>x.guid===w);O&&Ce.updateTournamentDashboard(O)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(y=>{(y.shadowRoot?.querySelectorAll(".btn")||[]).forEach(E=>{const P=E.dataset.betType,O=E.dataset.price,x=P===h.type,T=O===h.odds;x&&T&&E.classList.contains("btn--active")&&(E.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:P,btnPrice:O}))})});const _=document.querySelector(".bet-grid__slip-BETSLIP-content");_&&_.children.length,setTimeout(()=>{o()},100)}),J.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(g,m)=>{const h=JSON.parse(m);h&&h.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${h.guid}"]`)}),J.subscribe(e.hierTopics.WC__APP__FOOT,(g,m)=>{JSON.parse(m);let h=16;switch(g){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:h=24,J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:J.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(g,m)=>{const h=JSON.parse(m);let v=16;g=="WC.APP.HEAD_SPORTS.PREV"||g=="WC.APP.HEAD_SPORTS.NEXT"||g=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?v=3:(s=h.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${h.group})`),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),v&&neodigmWired4Sound&&neodigmWired4Sound.sound(v).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_MID,(g,m)=>{JSON.parse(m);let h=16;const v=()=>{s="all";const _=document.querySelector("bma-app-head-sports");_&&_.setAttribute("data-selected-chip","all")};switch(g){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",v(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",v(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",v(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",v(),n(),h=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",v(),n(),h=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),J.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(g,m)=>{JSON.parse(m);let h=16;switch(g){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const v=window.deferredPWAPrompt;if(!v){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{v.prompt();const{outcome:y}=await v.userChoice;y==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),h=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(y){console.error("PWA install error:",y),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const w=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:w});const E=document.getElementById("app");E&&E.setAttribute("data-sync-theme",w),document.body.setAttribute("data-sync-theme",w)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":Fa.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":Fa.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()});const u=(g,m)=>{const h=g.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",h,"topic:",g),setTimeout(()=>{const v=document.querySelectorAll(".play-cntr .btn-info-sm"),y=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");v.forEach(w=>{const E=w.dataset.publishRouteHome?.split(".").pop()||"";if(E===h){if(console.log("[app_events] Activating button:",E),w.classList.add("btn-info-sm--active"),w.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:E}),neodigmWired4Sound.sound(3),y){const P=h==="PLAY"?"hidden":"auto";y.style.overflow=P,console.log("[app_events] Set sodapop overflow to:",P)}}else w.classList.add("btn-info-sm--inactive"),w.classList.remove("btn-info-sm--active")})},100)};J.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",u);let p=null;J.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(g,m)=>{if(u(g),p){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}p=setTimeout(()=>{p=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),Ce.populateLeaderboard()}),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(g,m)=>{JSON.parse(m);const h=document.getElementById("btn-join__play--id");if(!h){console.warn("[app_events] PLAY button not found");return}const v=h.dataset.requiresJoin==="true",_=h.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",_,"requiresJoin:",v),v&&_==="join"){const w=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,E=ge();if(!w){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",w),J.publish(E.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:w,timestamp:Date.now()})),h.textContent="Play",h.dataset.requiresJoin="false",setTimeout(()=>{u(g),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else u(g),console.log("[app_events] Advancing carousel to PLAY page")}),J.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(g,m)=>{JSON.parse(m);let h=10;switch(g){case"WC.APP.HEAD_TOP.USER_PROFILE":h=0,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const v=e.appSession.session_app.version,_=new Date().getFullYear();v&&neodigmToast&&neodigmToast.q(`${v} 3/26/2026, 2:54:32 PM|© ${_} Bet Max Action`,"night");break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()});let f=null,b=null;J.subscribe(e.hierTopics.WC__TOURN_ACTION,(g,m)=>{const h=JSON.parse(m);let v=0;switch(h?.action){case"JOIN":v=512;break;case"PLAY":v=8;break;case"INFO":v=8;break}if(v){f=h?.tournamentGuid,b=h?.action,console.log("[app_events] Storing pending tourn data:",f,b);const _=e.appSession?.session_user?.guid,y=h?.tournamentGuid;_&&y?we.fetchBetSlips(_,y).then(w=>{if(w?.rows){const E={timestamp:Date.now(),source:"API",data:w.rows};e.pushcoreBetSlip(E),console.log("[app_events] Bet slips fetched:",w.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{J.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(w))},3e3)},v)}).catch(w=>{console.error("[app_events] Error fetching bet slips:",w),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},v)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},v)}}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(g,m)=>{const h=JSON.parse(m);let v=16;switch(h?.action){case"FOCUS":v=3;break;case"SPORT_ICON":v=10;break;case"JOIN":v=5;break;case"PLAY":v=16;break}v&&neodigmWired4Sound&&neodigmWired4Sound.sound(v).vibrate()}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(g,m)=>{const h=JSON.parse(m);let v=0,_="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),h?.tournamentStatus){case"UPCOMING":_="success";break;case"LOCKED":_="warning";break;case"COMPLETED":_="danger";break}switch(h?.action){case"SPORT_ICON":h?.sportTitle==h?.sportDescription?v=h?.sportTitle:v=h?.sportTitle+"|"+h?.sportDescription;break}v&&neodigmToast&&neodigmToast.q(v,_)}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,async(g,m)=>{const h=JSON.parse(m);if(h?.action==="JOIN"){const _=ge().appSession?.session_user?.guid;if(!_){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);y&&(y.setAttribute("data-bma-tourn-wait","true"),qs.shootConfetti());const w={acctEntityGuid:_,tournamentGuid:h.tournamentGuid};try{const E={method:"POST",body:JSON.stringify(w),headers:we.genHeaders()};console.log("Posting to:",we.API_baseURI+"/m5t/"+we.API_ver+"/coreTournaments/join",w);const O=await(await fetch(we.API_baseURI+"/m5t/"+we.API_ver+"/coreTournaments/join",E)).json();if(console.log("Join response:",O),O.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const x=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);if(x){x.setAttribute("data-bma-tourn-wait","false");const T=x.getAttribute("data-bma-tourn-entities");if(T)try{const k=JSON.parse(T);k.guids.includes(_)||(k.guids.push(_),x.setAttribute("data-bma-tourn-entities",JSON.stringify(k)))}catch(k){console.error("Failed to parse entities:",k)}}},3e3);else{const x=O?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(x,"danger");const T=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);T&&T.setAttribute("data-bma-tourn-wait","false")}}catch(E){console.error("Join tournament error:",E),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),J.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(g,m)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const h=ge();try{const v=await we.fetchTournaments();console.log("[app_events] Tournaments fetched:",v),v?.rows&&Array.isArray(v.rows)?(h.pushCoreTourn({timestamp:Date.now(),source:"API",data:v.rows}),console.log("[app_events] Pushed to coreTourn, length:",h.coreTourn.length),J.publish(h.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",v)}catch(v){console.error("[app_events] Error fetching tournaments:",v),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),J.subscribe(e.hierTopics.PROMOTION__LOAD,async(g,m)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const h=await we.fetchPromotions();if(console.log("[app_events] Promotions fetched:",h),h?.ok&&h?.data&&Array.isArray(h.data)){const v=h.data.filter(y=>y.class==="banner"&&y.status==="LIVE");console.log("[app_events] Banner promotions:",v);const _=document.querySelector(".featured-swiper .swiper-wrapper");if(!_){console.warn("[app_events] Swiper wrapper not found");return}_.innerHTML="",v.forEach((y,w)=>{const E=document.createElement("div");E.className="swiper-slide";const P=document.createElement("div");P.className=`featured-card featured-card--${w+1}`;const O=y.hero_img?encodeURI(y.hero_img):"";P.style.backgroundImage=`url("${O}")`,P.setAttribute("data-promotion-hero-img",y.hero_img||""),P.setAttribute("data-promotion-caption",y.caption||""),P.setAttribute("data-promotion-tagline",y.tagline||""),P.setAttribute("data-promotion-toast",y.toast||""),P.setAttribute("data-promotion-topic",y.topic?.topic||""),P.setAttribute("data-promotion-topic-token",y.topic?.token||""),P.setAttribute("data-promotion-marquee",y.maquee||""),E.appendChild(P),_.appendChild(E)}),console.log("[app_events] Created",v.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update()}}catch(h){console.error("[app_events] Error fetching promotions:",h)}}),J.subscribe(e.hierTopics.PROMOTION__CLICK,(g,m)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const h=JSON.parse(m);console.log("[app_events] Promotion clicked:",h),h.toast&&typeof neodigmToast<"u"&&neodigmToast.q(h.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const v=document.querySelector(".l-promotion #promoHero");v&&h.heroImg&&(v.src=h.heroImg);const _=document.querySelector(".l-promotion #promCaption");_&&h.caption&&(_.textContent=h.caption);const y=document.querySelector(".l-promotion #promoTagline");return y&&h.tagline&&(/<[^>]+>/.test(h.tagline)?y.innerHTML=h.tagline:y.textContent=h.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(h){console.error("[app_events] Error handling promotion click:",h)}}),J.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(g,m)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const h=ge();if(h.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const v=h.coreTourn[h.coreTourn.length-1],_=h.coreTourn.length>1?h.coreTourn[h.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",v);const y=[];if(_){const O=v.data,x=_.data;O.forEach(T=>{const k=x.find(C=>C.guid===T.guid);k&&k.status!==T.status&&(console.log(`[app_events] Status changed for tournament ${T.guid}: ${k.status} -> ${T.status}`),y.push(T.guid))})}const w=h.appSession?.session_user?.guid,E=[...v.data].sort((O,x)=>{const T=O.status||O.class,k=x.status||x.class,C=O.entities?.guids||[],G=x.entities?.guids||[],q=C.includes(w),Q=G.includes(w),D=(Se,Te)=>{const I=new Date(Se.status_time||0).getTime();return new Date(Te.status_time||0).getTime()-I},z=T==="LOCKED"&&q,U=k==="LOCKED"&&Q;if(z&&!U)return-1;if(!z&&U)return 1;if(z&&U)return D(O,x);const ee=T==="UPCOMING",ae=k==="UPCOMING";if(ee&&!ae)return-1;if(!ee&&ae)return 1;if(ee&&ae)return D(O,x);const le=T==="COMPLETED"&&q,ie=k==="COMPLETED"&&Q;if(le&&!ie)return-1;if(!le&&ie)return 1;if(le&&ie)return D(O,x);const ve=T==="COMPLETED"&&!q,Oe=k==="COMPLETED"&&!Q;return ve&&!Oe?1:!ve&&Oe?-1:D(O,x)}),P=Ce.categorizeTournaments(E,t,s,w);if(console.log(`[app_events] Categorized into ${P.length} categories for filter: ${t}/${s}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(P,!0),setTimeout(()=>{n(),console.log("[app_events] Re-applied filter after hydration:",t)},100),y.length>0){const O=v.data;y.forEach(x=>{const T=O.find(k=>k.guid===x);if(T){const k=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{J.publish(h.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:x,status:T.status,timestamp:Date.now()}))},k)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),J.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(g,m)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",m);const h=ge();try{const v=JSON.parse(m);console.log("[app_events] SSE tournament sync data:",v);const _=JSON.parse(v.msg);if(console.log("[app_events] Parsed tournaments array:",_),!Array.isArray(_)){console.warn("[app_events] SSE msg is not an array:",_);return}h.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:_}),console.log("[app_events] Pushed SSE data to coreTourn, length:",h.coreTourn.length),J.publish(h.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),typeof neodigmSodaPop<"u"&&neodigmSodaPop.isOpen()==="sodapop_play"&&(console.log("[SSE] Play popup is open, triggering real-time update"),Ce.hydratePlayPopup())}catch(v){console.error("[app_events] Error processing SSE tournament sync:",v)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const g=document.querySelector("#caption__my-profile");g&&(g.textContent="My Profile");const m=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",m),console.log("[app_events] coreTourn length:",e.coreTourn.length),!m||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const v=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",v.length);let _=0,y=0,w=0;v.forEach((E,P)=>{if(!E.tags||!Array.isArray(E.tags)){console.log(`[app_events] Tournament ${P} has no tags or tags not an array`);return}E.tags.forEach((O,x)=>{if(typeof O=="object"&&O!==null){let T=null;O.entity_guid===m&&O.badge?T=O.badge:O[m]&&(T=O[m]),T==="--badge__ribbon--gold"?_++:T==="--badge__ribbon--silver"?y++:T==="--badge__ribbon--bronze"&&w++}})}),setTimeout(()=>{let E=document.querySelectorAll(".badge-counter");if(E.length===0){const P=document.querySelector("neodigm-sodapop");P&&(E=P.querySelectorAll(".badge-counter"))}E.length>=3?(E[0].textContent=y,E[1].textContent=_,E[2].textContent=w,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const E=document.querySelector("#profile-tournaments-list");if(!E||!m||e.coreTourn.length===0)return;const x=e.coreTourn[e.coreTourn.length-1].data.filter(q=>{try{return(typeof q.entities=="string"?JSON.parse(q.entities):q.entities)?.guids?.includes(m)}catch{return!1}}),T={LOCKED:0,UPCOMING:1,COMPLETED:2};x.sort((q,Q)=>{const D=T[q.status]??3,z=T[Q.status]??3;return D!==z?D-z:new Date(Q.status_time||0)-new Date(q.status_time||0)});const k=q=>{if(!q.tags||!Array.isArray(q.tags))return null;for(const Q of q.tags){if(typeof Q!="object"||!Q)continue;let D=null;if(Q.entity_guid===m&&Q.badge?D=Q.badge:Q[m]&&(D=Q[m]),D==="--badge__ribbon--gold")return"gold";if(D==="--badge__ribbon--silver")return"silver";if(D==="--badge__ribbon--bronze")return"bronze"}return null},C=q=>{let Q=x;if(q==="active"?Q=x.filter(D=>D.status==="LOCKED"||D.status==="UPCOMING"):q==="completed"&&(Q=x.filter(D=>D.status==="COMPLETED")),Q.length===0){E.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}E.innerHTML=Q.map(D=>{const z=k(D),U=z?`<div class="profile-tourn-card__trophy profile-tourn-card__trophy--${z}"></div>`:'<div style="width: 36px; height: 36px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,0.2); font-size: 1.2rem; font-weight: 600;">—</div>',ee=(D.status||"UPCOMING").toUpperCase(),ae=ee==="LOCKED"?"locked":ee==="COMPLETED"?"completed":"upcoming";let le={guids:[],max:0};try{le=typeof D.entities=="string"?JSON.parse(D.entities):D.entities}catch{}const ie=`${le.guids?.length||0}/${le.max||"?"}`,ve={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"};let Oe="";try{const Te=typeof D.sports_allowed=="string"?JSON.parse(D.sports_allowed):D.sports_allowed;Array.isArray(Te)&&(Oe=Te.map(I=>{const W=I.key||I,Y=ve[W]||W.replace(/^[a-z]+_/,"").toUpperCase(),Z=mt.find(S=>S.key===W),ce=Z?Z.group:"default";return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 4px;">
                                                    <bma-sport-icon sport="${W}" data-sport-group="${ce}" style="width: 16px; height: 16px;"></bma-sport-icon>
                                                    <span style="font-size: 0.7rem; font-weight: 600; color: #F7C60D; letter-spacing: 0.03em;">${Y}</span>
                                                </span>`}).join(""))}catch{}let Se="";return D.window_start_time&&(Se=new Date(D.window_start_time.includes("Z")?D.window_start_time:D.window_start_time+"Z").toLocaleDateString(void 0,{month:"short",day:"numeric"})),`
                                        <div class="profile-tourn-card" data-tourn-guid="${D.guid||""}">
                                            ${U}
                                            <div class="profile-tourn-card__info">
                                                <div class="profile-tourn-card__name">${D.caption||"Tournament"}</div>
                                                <div class="profile-tourn-card__meta">
                                                    <span>${ie} players</span>
                                                    ${Oe?`<span>•</span>${Oe}`:""}
                                                    ${Se?`<span>•</span><span>${Se}</span>`:""}
                                                </div>
                                            </div>
                                            <div class="profile-tourn-card__status profile-tourn-card__status--${ae}">${ee}</div>
                                        </div>
                                    `}).join("")};C("all");const G=document.querySelector(".profile-tournaments__filters");G&&G.addEventListener("click",q=>{const Q=q.target.closest(".profile-tourn-filter");Q&&(G.querySelectorAll(".profile-tourn-filter").forEach(D=>D.classList.remove("profile-tourn-filter--active")),Q.classList.add("profile-tourn-filter--active"),C(Q.dataset.filter))})},600)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const g=ge(),m=document.querySelector(".play-cntr");f&&(m.dataset.currentTournGuid=f),b&&(m.dataset.currentTournAction=b);const h=m?.dataset?.currentTournGuid,v=m?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",h,"action:",v),window.initBetGridToggle&&window.initBetGridToggle(),Ce.updatePlayButton(),Ce.populateInfoPage(),setTimeout(()=>{Ce.populateLeaderboard()},600);let _=v==="PLAY"||v==="JOIN"?"PLAY":v;if(!h||g.coreTourn.length===0||g.coreTourn[g.coreTourn.length-1].data.find(C=>C.guid===h)?.status==="COMPLETED"&&(_="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),_){const T=`ROUTE.HOME.SODAPOP_PLAY.${_}`;console.log("[app_events] Publishing initial topic:",T),J.publish(T,JSON.stringify({tournamentGuid:h,timestamp:Date.now()}))}if(!h||g.coreTourn.length===0)return;const w=g.coreTourn[g.coreTourn.length-1].data.find(T=>T.guid===h);Ce.renderMatchCards(w);const E=document.querySelector("#pop-play__tourn-caption--id"),P=document.querySelector("#pop-play__tourn-tagline--id");E&&(E.textContent=w.caption),P&&(P.textContent=w.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",w?.caption);const O=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!O),O&&console.log("[Modal Debug] Modal classes:",O.className),Ce.updateTournamentDashboard(w);const x=document.getElementById("dashboard-rank");if(x){const T=w.entities?.guids?.length||0;x.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${T}</span>                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},Ng={__name:"App",setup(e){const t=Tt(),s=ge();return Bt(()=>{setTimeout(()=>{const n=s.appSession?.session_user?.guid,a=s.appSession?.session_user?.authenticated;n&&a&&s.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",n),xn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",n,s,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((n=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${n}`,"primary"),t.push({name:n})}).setOnState((n=null)=>{n&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=n)}).init({BASE:we.API_baseURI})},2e3),setTimeout(()=>{Ce.bindAppListeners(s)},3e3),t.beforeEach((n,a,r)=>{n.name=="splash_route"||n.name&&mvvLegit&&mvvLegit.isRouteAllowed(n.name)?r():r(!1)}),(n,a)=>(nt(),kr(qt(dl),null,{default:wa(({Component:r})=>[Ge(kd,{name:"slide-left"},{default:wa(()=>[(nt(),kr(Lc(r)))]),_:2},1024)]),_:1}))}};class Bg extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const s=new Date,n=s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),a=s.toLocaleDateString("en-US",{month:"short",day:"numeric"});t.textContent=`${a} • ${n}`}}handleLogoClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
          background: ${n?"#141414":"rgba(250, 250, 250, 0.98)"};
          border-bottom: ${n?"2px solid rgba(255, 215, 0, 0.25)":"1px solid rgba(0, 0, 0, 0.1)"};
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
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
          height: clamp(48px, 10vw, 62px);
          max-height: 62px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
        }

        .status-section {
          grid-area: head_top_status;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          user-select: none;
        }

        .status-username {
          font-size: 1.1rem;
          font-weight: 600;
          color: ${n?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          text-shadow: ${n?"0 1px 2px rgba(0, 0, 0, 0.3)":"none"};
        }

        .status-divider {
          width: 1px;
          height: 16px;
          background: ${n?"rgba(255, 255, 255, 0.15)":"rgba(0, 0, 0, 0.15)"};
        }

        .status-time {
          font-size: 0.9rem;
          font-weight: 500;
          color: ${n?"rgba(247, 198, 13, 0.7)":"rgba(180, 140, 0, 0.8)"};
          letter-spacing: 0.02em;
          white-space: nowrap;
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

        /* Responsive adjustments — mobile only */
        @media (max-width: 768px) {
          .head-top-container {
            grid-template-columns: auto 1fr auto;
            gap: 0.5rem;
            padding: 0.5rem 0.75rem;
          }

          .logo-img {
            QQQQheight: 28px;
          }

          .status-section {
            gap: 0.5rem;
          }

          .status-username {
            font-size: 0.8rem;
          }

          .status-time {
            font-size: 0.65rem;
          }

          .status-divider {
            height: 12px;
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
              src="https://bma-master.github.io/bma-core/img/BMT-White-Secondary.png"
              alt="Bet Max Action"
              class="logo-img"
            />
          </a>
        </div>

        <div class="status-section">
          <div class="status-username">${a}</div>
          <div class="status-divider"></div>
          <div class="status-time">Loading...</div>
        </div>

        <div class="profile-section">
          <div class="profile-icon" id="profileIcon" role="button" tabindex="0" aria-label="User Profile"></div>
        </div>
      </div>
    `;const r=this.shadowRoot.querySelector("#logoLink"),o=this.shadowRoot.querySelector("#profileIcon");r&&r.addEventListener("click",i=>this.handleLogoClick(i)),o&&(o.addEventListener("click",i=>this.handleProfileClick(i)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",Bg);class Fg extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-tab"&&(this.selectedTab=n||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),J.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],r=o=>`
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
    `,a.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-tab="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(o.name,o.topic))}))})}}customElements.define("bma-app-head-mid",Fg);class $g extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,n){if(this.shadowRoot&&s!==n){if(t==="data-selected-chip"){if(this.selectedChip=n||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,s){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),J.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(s=>{const n=s.getAttribute("data-chip")===this.selectedChip;s.classList.toggle("chip-selected",n),s.classList.toggle("chip-unselected",!n)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),n=this.shadowRoot?.querySelector(".head-sports-container"),a=this.shadowRoot?.querySelector("#navPrev"),r=this.shadowRoot?.querySelector("#navNext");if(!t||!s||!n||!a||!r)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),i=o>8,l=t.scrollLeft<=4,c=t.scrollLeft>=o-4;n.classList.toggle("rail-has-overflow",i),s.classList.toggle("has-overflow",i),s.classList.toggle("has-left-overflow",i&&!l),s.classList.toggle("has-right-overflow",i&&!c),a.classList.toggle("nav-disabled",!i||l),r.classList.toggle("nav-disabled",!i||c),a.setAttribute("aria-disabled",String(!i||l)),r.setAttribute("aria-disabled",String(!i||c)),a.tabIndex=!i||l?-1:0,r.tabIndex=!i||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),n=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!s||!n)return;const a=s.getBoundingClientRect(),r=t.scrollWidth-t.clientWidth,o=n.getBoundingClientRect(),i=a.width,c=window.matchMedia("(min-width: 769px)").matches?Math.round(i*.32):18,d=Math.max(18,i-c-o.width),u=a.left+c,p=a.right-d;let f=o.left-u;if(f<0?f=o.left-u:o.right>p?f=o.right-p:f=0,Math.abs(f)<6)return;const b=Math.max(0,Math.min(t.scrollLeft+f,r));Math.abs(t.scrollLeft-b)<6||(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:b,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const s=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=s-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const s=[...t.querySelectorAll(".sport-chip")];if(!s.length)return;const n=Math.max(0,t.scrollWidth-t.clientWidth);if(n<=8)return;const a=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,r=t.scrollLeft;let o=r,i=Number.POSITIVE_INFINITY;s.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-a,n)),d=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-t.clientWidth+a,n));[c,d].forEach(u=>{const p=Math.abs(u-r);p<i&&(i=p,o=u)})}),!(i<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",n=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=n.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),J.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const s=()=>{if(!this.isPointerDown)return;const n=Date.now()-this.dragStartTime,a=this.dragDistance>10||this.dragDistance>4&&n>180;this.isPointerDown=!1,t.style.cursor="grab",a&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",s),t.addEventListener("mouseup",s),t.addEventListener("mousemove",n=>{if(!this.isPointerDown)return;n.preventDefault();const r=(n.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(r)),t.scrollLeft=this.dragStartScrollLeft-r}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",o=(ge().appMeta?.sports||[]).filter(f=>f.active===!0),i=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],l=[...o].sort((f,b)=>{const g=f.title||f.description||"",m=b.title||b.description||"",h=i.indexOf(g),v=i.indexOf(m);return h!==-1&&v!==-1?h-v:h!==-1?-1:v!==-1?1:g.toLowerCase().localeCompare(m.toLowerCase())}),c=[{key:"all",group:"All",title:"HOME",description:"All Sports"},{key:"multi",group:"Multi",title:"Multiple Sport",description:"Multi-Sport Tournaments"},...l],d=f=>{const b=this.selectedChip===f.key,g=f.key==="all";let m="";return g||(m=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`),`
        <div
          class="sport-chip ${b?"chip-selected":"chip-unselected"}"
          data-chip="${f.key}"
          role="button"
          tabindex="0"
          aria-label="${f.description||f.title}"
        >
          ${m}
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
    `,c.forEach(f=>{const b=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);b&&b.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const u=this.shadowRoot.querySelector("#navPrev"),p=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),p&&p.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll(),requestAnimationFrame(()=>{this.alignSelectedChip(),this.updateRailState()})}}customElements.define("bma-app-head-sports",$g);class Ug extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-item"&&(this.selectedItem=n||"foot_all_sports"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),J.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],r=o=>`
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
          background: ${n?"#141414":"rgba(245, 245, 245, 0.97)"};
          border-top: ${n?"1px solid rgba(255, 255, 255, 0.08)":"1px solid rgba(0, 0, 0, 0.1)"};
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
    `,a.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-item="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(o.name,o.topic))}))})}}customElements.define("bma-app-foot",Ug);class Hg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,n){s!==n&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const n=s[0],a=n.short_title||"Match Info N/A",o=Object.keys(n).filter(v=>v!=="short_title")[0]||"Unknown Team",i=n[o],l=i.odds||"N/A",c=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),u=parseFloat(i.payout||0).toFixed(2),p=i.reconciled!==!1,f=p&&parseFloat(u)>parseFloat(d),b=p&&parseFloat(u)<=parseFloat(d);let g="";p?f?g="win":b&&(g="loss"):g="unreconciled";const m=t.status_time?qs.formatDateLocal(t.status_time):"";let h=o;if(c==="spread"&&i.point){const v=parseFloat(i.point)>0?`+${i.point}`:i.point;h=`${o} ${v}`}else c==="total"&&i.point&&(h=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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

      <div class="bet-existing-card ${g}">
        <div class="grid_header">
          <div class="match_desc">${a}</div>
          <div class="match_date">${m}</div>
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
    `}}customElements.define("bma-bet-existing",Hg);const Co=`
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
      <div class="head-caption tourn-dashboard profile-dashboard">
        <section class="tourn-dashboard__center">
          <h3 id="caption__my-profile" class="pop-play__tourn-caption">My Profile</h3>
        </section>
        <div class="head-caption__close">
          <img data-sodapop-close="true"
          src="https://bma-master.github.io/bma-core/img/X-v1.png" alt="Close">
        </div>
      </div>

      <neodigm-carousel id="caro-user_profile">
        <section>
<section data-n55-carousel-page-name="SPLASH">
  <div class="splash-lgo grass-branded h-center">
  <img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="Bet Max Tourney" />
  </div>
</section>
          <section data-n55-carousel-page-name="caro-page__badges">
            <nav class="nav__bg--green h-center profile-nav" style="padding: 16px 12px; margin-bottom: 8px;">
              <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.INSTALL_PWA"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M16 13h-3V3h-2v10H8l4 4 4-4zM4 19v2h16v-2H4z"/></svg>Install</button>
              <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.RESET_PASSWORD"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>Password</button>
              <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.SIGNOUT"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>Sign Out</button>
            </nav>
            <div class="badges-podium-wrapper">
              <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 24px 12px 0;">

                <!-- Silver - 2nd place (left) -->
                <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                  <div style="width: 80px; height: 80px; background-image: var(--badge__silver); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                  <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                    <div class="badge-counter">0</div>
                  </div>
                </div>

                <!-- Gold - 1st place (center, tallest) -->
                <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                  <div style="width: 100px; height: 100px; background-image: var(--badge__gold); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                  <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                    <div class="badge-counter">0</div>
                  </div>
                </div>

                <!-- Bronze - 3rd place (right) -->
                <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                  <div style="width: 68px; height: 68px; background-image: var(--badge__bronze); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                  <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                    <div class="badge-counter">0</div>
                  </div>
                </div>

              </div>
              <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            </div>

            <!-- User's Tournament History -->
            <div class="profile-tournaments">
              <div class="info-section" style="margin-top: 0;">
                <div class="info-section__title">YOUR TOURNAMENTS</div>
              </div>
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
          </section>
          <section data-n55-carousel-page-name="caro-page__squads"
          data-n55-cloak="true">
          </section>
        </section>
      </neodigm-carousel>

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
          <h3 id="pop-play__tourn-caption--id" class="pop-play__tourn-caption" style="padding-right: 32px;">Tournament</h3>
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
          <div class="tourn-dashboard__stat-label">AT RISK</div>
          <div class="tourn-dashboard__stat-value tourn-dashboard__stat-value--pending" id="dashboard-td-pending">TD$ 0</div>
          <div class="tourn-dashboard__gauge">
            <div class="tourn-dashboard__gauge-fill tourn-dashboard__gauge-fill--pending" style="width: 0%"></div>
          </div>
        </div>

        <div class="tourn-dashboard__stat">
          <div class="tourn-dashboard__stat-label">RANK</div>
          <div class="tourn-dashboard__stat-value" id="dashboard-rank">
            <span class="tourn-dashboard__rank-text">-/-</span>
          </div>
          <div class="tourn-dashboard__gauge">
            <div class="tourn-dashboard__gauge-fill tourn-dashboard__gauge-fill--participants" style="width: 0%"></div>
          </div>
        </div>
      </div>

      <nav class="nav__bg--green h-center">
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg><span>Info</span></button>
        <button id="btn-join__play--id"
        class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="display: none;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg><span>Play</span></button>
        <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/></svg><span>Leaderboard</span></button>
      </nav>

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

`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Co)}):document.body.insertAdjacentHTML("beforeend",Co);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const jn=su(Ng);jn.config.devtools=!1;jn.use(ru());jn.use(Fa);jn.mount("#app");document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
