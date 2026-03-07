(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();function $a(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const ge={},bs=[],gt=()=>{},Ro=()=>!1,An=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Ua=e=>e.startsWith("onUpdate:"),Oe=Object.assign,Ha=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},wl=Object.prototype.hasOwnProperty,fe=(e,t)=>wl.call(e,t),ae=Array.isArray,_s=e=>Ws(e)==="[object Map]",Pn=e=>Ws(e)==="[object Set]",fr=e=>Ws(e)==="[object Date]",le=e=>typeof e=="function",xe=e=>typeof e=="string",_t=e=>typeof e=="symbol",be=e=>e!==null&&typeof e=="object",Mo=e=>(be(e)||le(e))&&le(e.then)&&le(e.catch),Lo=Object.prototype.toString,Ws=e=>Lo.call(e),xl=e=>Ws(e).slice(8,-1),Io=e=>Ws(e)==="[object Object]",Ga=e=>xe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ks=$a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),On=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Al=/-\w/g,tt=On(e=>e.replace(Al,t=>t.slice(1).toUpperCase())),Pl=/\B([A-Z])/g,Jt=On(e=>e.replace(Pl,"-$1").toLowerCase()),kn=On(e=>e.charAt(0).toUpperCase()+e.slice(1)),Kn=On(e=>e?`on${kn(e)}`:""),jt=(e,t)=>!Object.is(e,t),on=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},No=(e,t,s,n=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:n,value:s})},Ol=e=>{const t=parseFloat(e);return isNaN(t)?e:t},kl=e=>{const t=xe(e)?Number(e):NaN;return isNaN(t)?e:t};let hr;const Cn=()=>hr||(hr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ya(e){if(ae(e)){const t={};for(let s=0;s<e.length;s++){const n=e[s],a=xe(n)?Ll(n):Ya(n);if(a)for(const r in a)t[r]=a[r]}return t}else if(xe(e)||be(e))return e}const Cl=/;(?![^(]*\))/g,Rl=/:([^]+)/,Ml=/\/\*[^]*?\*\//g;function Ll(e){const t={};return e.replace(Ml,"").split(Cl).forEach(s=>{if(s){const n=s.split(Rl);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function qt(e){let t="";if(xe(e))t=e;else if(ae(e))for(let s=0;s<e.length;s++){const n=qt(e[s]);n&&(t+=n+" ")}else if(be(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Il="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nl=$a(Il);function Do(e){return!!e||e===""}function Dl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let n=0;s&&n<e.length;n++)s=Rn(e[n],t[n]);return s}function Rn(e,t){if(e===t)return!0;let s=fr(e),n=fr(t);if(s||n)return s&&n?e.getTime()===t.getTime():!1;if(s=_t(e),n=_t(t),s||n)return e===t;if(s=ae(e),n=ae(t),s||n)return s&&n?Dl(e,t):!1;if(s=be(e),n=be(t),s||n){if(!s||!n)return!1;const a=Object.keys(e).length,r=Object.keys(t).length;if(a!==r)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(i&&!l||!i&&l||!Rn(e[o],t[o]))return!1}}return String(e)===String(t)}function Bo(e,t){return e.findIndex(s=>Rn(s,t))}const Fo=e=>!!(e&&e.__v_isRef===!0),$o=e=>xe(e)?e:e==null?"":ae(e)||be(e)&&(e.toString===Lo||!le(e.toString))?Fo(e)?$o(e.value):JSON.stringify(e,Uo,2):String(e),Uo=(e,t)=>Fo(t)?Uo(e,t.value):_s(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[n,a],r)=>(s[zn(n,r)+" =>"]=a,s),{})}:Pn(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>zn(s))}:_t(t)?zn(t):be(t)&&!ae(t)&&!Io(t)?String(t):t,zn=(e,t="")=>{var s;return _t(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let Re;class Ho{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Re,!t&&Re&&(this.index=(Re.scopes||(Re.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=Re;try{return Re=this,t()}finally{Re=s}}}on(){++this._on===1&&(this.prevScope=Re,Re=this)}off(){this._on>0&&--this._on===0&&(Re=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(this.effects.length=0,s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function Go(e){return new Ho(e)}function Yo(){return Re}function Bl(e,t=!1){Re&&Re.cleanups.push(e)}let ve;const qn=new WeakSet;class jo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Re&&Re.active&&Re.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,qn.has(this)&&(qn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||zo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,mr(this),qo(this);const t=ve,s=at;ve=this,at=!0;try{return this.fn()}finally{Wo(this),ve=t,at=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)za(t);this.deps=this.depsTail=void 0,mr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?qn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ba(this)&&this.run()}get dirty(){return ba(this)}}let Ko=0,Cs,Rs;function zo(e,t=!1){if(e.flags|=8,t){e.next=Rs,Rs=e;return}e.next=Cs,Cs=e}function ja(){Ko++}function Ka(){if(--Ko>0)return;if(Rs){let t=Rs;for(Rs=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Cs;){let t=Cs;for(Cs=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(n){e||(e=n)}t=s}}if(e)throw e}function qo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Wo(e){let t,s=e.depsTail,n=s;for(;n;){const a=n.prevDep;n.version===-1?(n===s&&(s=a),za(n),Fl(n)):t=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=a}e.deps=t,e.depsTail=s}function ba(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===$s)||(e.globalVersion=$s,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!ba(e))))return;e.flags|=2;const t=e.dep,s=ve,n=at;ve=e,at=!0;try{qo(e);const a=e.fn(e._value);(t.version===0||jt(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{ve=s,at=n,Wo(e),e.flags&=-3}}function za(e,t=!1){const{dep:s,prevSub:n,nextSub:a}=e;if(n&&(n.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=n,e.nextSub=void 0),s.subs===e&&(s.subs=n,!n&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)za(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Fl(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let at=!0;const Jo=[];function Rt(){Jo.push(at),at=!1}function Mt(){const e=Jo.pop();at=e===void 0?!0:e}function mr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=ve;ve=void 0;try{t()}finally{ve=s}}}let $s=0;class $l{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class qa{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ve||!at||ve===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==ve)s=this.activeLink=new $l(ve,this),ve.deps?(s.prevDep=ve.depsTail,ve.depsTail.nextDep=s,ve.depsTail=s):ve.deps=ve.depsTail=s,Xo(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const n=s.nextDep;n.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=n),s.prevDep=ve.depsTail,s.nextDep=void 0,ve.depsTail.nextDep=s,ve.depsTail=s,ve.deps===s&&(ve.deps=n)}return s}trigger(t){this.version++,$s++,this.notify(t)}notify(t){ja();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{Ka()}}}function Xo(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let n=t.deps;n;n=n.nextDep)Xo(n)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const fn=new WeakMap,ls=Symbol(""),_a=Symbol(""),Us=Symbol("");function Me(e,t,s){if(at&&ve){let n=fn.get(e);n||fn.set(e,n=new Map);let a=n.get(s);a||(n.set(s,a=new qa),a.map=n,a.key=s),a.track()}}function Pt(e,t,s,n,a,r){const o=fn.get(e);if(!o){$s++;return}const i=l=>{l&&l.trigger()};if(ja(),t==="clear")o.forEach(i);else{const l=ae(e),c=l&&Ga(s);if(l&&s==="length"){const d=Number(n);o.forEach((u,p)=>{(p==="length"||p===Us||!_t(p)&&p>=d)&&i(u)})}else switch((s!==void 0||o.has(void 0))&&i(o.get(s)),c&&i(o.get(Us)),t){case"add":l?c&&i(o.get("length")):(i(o.get(ls)),_s(e)&&i(o.get(_a)));break;case"delete":l||(i(o.get(ls)),_s(e)&&i(o.get(_a)));break;case"set":_s(e)&&i(o.get(ls));break}}Ka()}function Ul(e,t){const s=fn.get(e);return s&&s.get(t)}function ps(e){const t=ue(e);return t===e?t:(Me(t,"iterate",Us),rt(e)?t:t.map(De))}function Wa(e){return Me(e=ue(e),"iterate",Us),e}const Hl={__proto__:null,[Symbol.iterator](){return Wn(this,Symbol.iterator,De)},concat(...e){return ps(this).concat(...e.map(t=>ae(t)?ps(t):t))},entries(){return Wn(this,"entries",e=>(e[1]=De(e[1]),e))},every(e,t){return Tt(this,"every",e,t,void 0,arguments)},filter(e,t){return Tt(this,"filter",e,t,s=>s.map(De),arguments)},find(e,t){return Tt(this,"find",e,t,De,arguments)},findIndex(e,t){return Tt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Tt(this,"findLast",e,t,De,arguments)},findLastIndex(e,t){return Tt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Tt(this,"forEach",e,t,void 0,arguments)},includes(...e){return Vn(this,"includes",e)},indexOf(...e){return Vn(this,"indexOf",e)},join(e){return ps(this).join(e)},lastIndexOf(...e){return Vn(this,"lastIndexOf",e)},map(e,t){return Tt(this,"map",e,t,void 0,arguments)},pop(){return ws(this,"pop")},push(...e){return ws(this,"push",e)},reduce(e,...t){return gr(this,"reduce",e,t)},reduceRight(e,...t){return gr(this,"reduceRight",e,t)},shift(){return ws(this,"shift")},some(e,t){return Tt(this,"some",e,t,void 0,arguments)},splice(...e){return ws(this,"splice",e)},toReversed(){return ps(this).toReversed()},toSorted(e){return ps(this).toSorted(e)},toSpliced(...e){return ps(this).toSpliced(...e)},unshift(...e){return ws(this,"unshift",e)},values(){return Wn(this,"values",De)}};function Wn(e,t,s){const n=Wa(e),a=n[t]();return n!==e&&!rt(e)&&(a._next=a.next,a.next=()=>{const r=a._next();return r.done||(r.value=s(r.value)),r}),a}const Gl=Array.prototype;function Tt(e,t,s,n,a,r){const o=Wa(e),i=o!==e&&!rt(e),l=o[t];if(l!==Gl[t]){const u=l.apply(e,r);return i?De(u):u}let c=s;o!==e&&(i?c=function(u,p){return s.call(this,De(u),p,e)}:s.length>2&&(c=function(u,p){return s.call(this,u,p,e)}));const d=l.call(o,c,n);return i&&a?a(d):d}function gr(e,t,s,n){const a=Wa(e);let r=s;return a!==e&&(rt(e)?s.length>3&&(r=function(o,i,l){return s.call(this,o,i,l,e)}):r=function(o,i,l){return s.call(this,o,De(i),l,e)}),a[t](r,...n)}function Vn(e,t,s){const n=ue(e);Me(n,"iterate",Us);const a=n[t](...s);return(a===-1||a===!1)&&Xa(s[0])?(s[0]=ue(s[0]),n[t](...s)):a}function ws(e,t,s=[]){Rt(),ja();const n=ue(e)[t].apply(e,s);return Ka(),Mt(),n}const Yl=$a("__proto__,__v_isRef,__isVue"),Qo=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(_t));function jl(e){_t(e)||(e=String(e));const t=ue(this);return Me(t,"has",e),t.hasOwnProperty(e)}class Zo{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,n){if(s==="__v_skip")return t.__v_skip;const a=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!a;if(s==="__v_isReadonly")return a;if(s==="__v_isShallow")return r;if(s==="__v_raw")return n===(a?r?ec:ni:r?si:ti).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=ae(t);if(!a){let l;if(o&&(l=Hl[s]))return l;if(s==="hasOwnProperty")return jl}const i=Reflect.get(t,s,we(t)?t:n);if((_t(s)?Qo.has(s):Yl(s))||(a||Me(t,"get",s),r))return i;if(we(i)){const l=o&&Ga(s)?i:i.value;return a&&be(l)?va(l):l}return be(i)?a?va(i):kt(i):i}}class ei extends Zo{constructor(t=!1){super(!1,t)}set(t,s,n,a){let r=t[s];if(!this._isShallow){const l=us(r);if(!rt(n)&&!us(n)&&(r=ue(r),n=ue(n)),!ae(t)&&we(r)&&!we(n))return l||(r.value=n),!0}const o=ae(t)&&Ga(s)?Number(s)<t.length:fe(t,s),i=Reflect.set(t,s,n,we(t)?t:a);return t===ue(a)&&(o?jt(n,r)&&Pt(t,"set",s,n):Pt(t,"add",s,n)),i}deleteProperty(t,s){const n=fe(t,s);t[s];const a=Reflect.deleteProperty(t,s);return a&&n&&Pt(t,"delete",s,void 0),a}has(t,s){const n=Reflect.has(t,s);return(!_t(s)||!Qo.has(s))&&Me(t,"has",s),n}ownKeys(t){return Me(t,"iterate",ae(t)?"length":ls),Reflect.ownKeys(t)}}class Kl extends Zo{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const zl=new ei,ql=new Kl,Wl=new ei(!0);const ya=e=>e,Qs=e=>Reflect.getPrototypeOf(e);function Vl(e,t,s){return function(...n){const a=this.__v_raw,r=ue(a),o=_s(r),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...n),d=s?ya:t?Ta:De;return!t&&Me(r,"iterate",l?_a:ls),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:i?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Zs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function Jl(e,t){const s={get(a){const r=this.__v_raw,o=ue(r),i=ue(a);e||(jt(a,i)&&Me(o,"get",a),Me(o,"get",i));const{has:l}=Qs(o),c=t?ya:e?Ta:De;if(l.call(o,a))return c(r.get(a));if(l.call(o,i))return c(r.get(i));r!==o&&r.get(a)},get size(){const a=this.__v_raw;return!e&&Me(ue(a),"iterate",ls),a.size},has(a){const r=this.__v_raw,o=ue(r),i=ue(a);return e||(jt(a,i)&&Me(o,"has",a),Me(o,"has",i)),a===i?r.has(a):r.has(a)||r.has(i)},forEach(a,r){const o=this,i=o.__v_raw,l=ue(i),c=t?ya:e?Ta:De;return!e&&Me(l,"iterate",ls),i.forEach((d,u)=>a.call(r,c(d),c(u),o))}};return Oe(s,e?{add:Zs("add"),set:Zs("set"),delete:Zs("delete"),clear:Zs("clear")}:{add(a){!t&&!rt(a)&&!us(a)&&(a=ue(a));const r=ue(this);return Qs(r).has.call(r,a)||(r.add(a),Pt(r,"add",a,a)),this},set(a,r){!t&&!rt(r)&&!us(r)&&(r=ue(r));const o=ue(this),{has:i,get:l}=Qs(o);let c=i.call(o,a);c||(a=ue(a),c=i.call(o,a));const d=l.call(o,a);return o.set(a,r),c?jt(r,d)&&Pt(o,"set",a,r):Pt(o,"add",a,r),this},delete(a){const r=ue(this),{has:o,get:i}=Qs(r);let l=o.call(r,a);l||(a=ue(a),l=o.call(r,a)),i&&i.call(r,a);const c=r.delete(a);return l&&Pt(r,"delete",a,void 0),c},clear(){const a=ue(this),r=a.size!==0,o=a.clear();return r&&Pt(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{s[a]=Vl(a,e,t)}),s}function Va(e,t){const s=Jl(e,t);return(n,a,r)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?n:Reflect.get(fe(s,a)&&a in n?s:n,a,r)}const Xl={get:Va(!1,!1)},Ql={get:Va(!1,!0)},Zl={get:Va(!0,!1)};const ti=new WeakMap,si=new WeakMap,ni=new WeakMap,ec=new WeakMap;function tc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sc(e){return e.__v_skip||!Object.isExtensible(e)?0:tc(xl(e))}function kt(e){return us(e)?e:Ja(e,!1,zl,Xl,ti)}function ai(e){return Ja(e,!1,Wl,Ql,si)}function va(e){return Ja(e,!0,ql,Zl,ni)}function Ja(e,t,s,n,a){if(!be(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=sc(e);if(r===0)return e;const o=a.get(e);if(o)return o;const i=new Proxy(e,r===2?n:s);return a.set(e,i),i}function cs(e){return us(e)?cs(e.__v_raw):!!(e&&e.__v_isReactive)}function us(e){return!!(e&&e.__v_isReadonly)}function rt(e){return!!(e&&e.__v_isShallow)}function Xa(e){return e?!!e.__v_raw:!1}function ue(e){const t=e&&e.__v_raw;return t?ue(t):e}function Qa(e){return!fe(e,"__v_skip")&&Object.isExtensible(e)&&No(e,"__v_skip",!0),e}const De=e=>be(e)?kt(e):e,Ta=e=>be(e)?va(e):e;function we(e){return e?e.__v_isRef===!0:!1}function Je(e){return ri(e,!1)}function nc(e){return ri(e,!0)}function ri(e,t){return we(e)?e:new ac(e,t)}class ac{constructor(t,s){this.dep=new qa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ue(t),this._value=s?t:De(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,n=this.__v_isShallow||rt(t)||us(t);t=n?t:ue(t),jt(t,s)&&(this._rawValue=t,this._value=n?t:De(t),this.dep.trigger())}}function Kt(e){return we(e)?e.value:e}const rc={get:(e,t,s)=>t==="__v_raw"?e:Kt(Reflect.get(e,t,s)),set:(e,t,s,n)=>{const a=e[t];return we(a)&&!we(s)?(a.value=s,!0):Reflect.set(e,t,s,n)}};function oi(e){return cs(e)?e:new Proxy(e,rc)}function oc(e){const t=ae(e)?new Array(e.length):{};for(const s in e)t[s]=lc(e,s);return t}class ic{constructor(t,s,n){this._object=t,this._key=s,this._defaultValue=n,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Ul(ue(this._object),this._key)}}function lc(e,t,s){const n=e[t];return we(n)?n:new ic(e,t,s)}class cc{constructor(t,s,n){this.fn=t,this.setter=s,this._value=void 0,this.dep=new qa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=$s-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return zo(this,!0),!0}get value(){const t=this.dep.track();return Vo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function dc(e,t,s=!1){let n,a;return le(e)?n=e:(n=e.get,a=e.set),new cc(n,a,s)}const en={},hn=new WeakMap;let as;function uc(e,t=!1,s=as){if(s){let n=hn.get(s);n||hn.set(s,n=[]),n.push(e)}}function pc(e,t,s=ge){const{immediate:n,deep:a,once:r,scheduler:o,augmentJob:i,call:l}=s,c=v=>a?v:rt(v)||a===!1||a===0?Ot(v,1):Ot(v);let d,u,p,m,b=!1,h=!1;if(we(e)?(u=()=>e.value,b=rt(e)):cs(e)?(u=()=>c(e),b=!0):ae(e)?(h=!0,b=e.some(v=>cs(v)||rt(v)),u=()=>e.map(v=>{if(we(v))return v.value;if(cs(v))return c(v);if(le(v))return l?l(v,2):v()})):le(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){Rt();try{p()}finally{Mt()}}const v=as;as=d;try{return l?l(e,3,[m]):e(m)}finally{as=v}}:u=gt,t&&a){const v=u,S=a===!0?1/0:a;u=()=>Ot(v(),S)}const g=Yo(),f=()=>{d.stop(),g&&g.active&&Ha(g.effects,d)};if(r&&t){const v=t;t=(...S)=>{v(...S),f()}}let _=h?new Array(e.length).fill(en):en;const y=v=>{if(!(!(d.flags&1)||!d.dirty&&!v))if(t){const S=d.run();if(a||b||(h?S.some((A,R)=>jt(A,_[R])):jt(S,_))){p&&p();const A=as;as=d;try{const R=[S,_===en?void 0:h&&_[0]===en?[]:_,m];_=S,l?l(t,3,R):t(...R)}finally{as=A}}}else d.run()};return i&&i(y),d=new jo(u),d.scheduler=o?()=>o(y,!1):y,m=v=>uc(v,!1,d),p=d.onStop=()=>{const v=hn.get(d);if(v){if(l)l(v,4);else for(const S of v)S();hn.delete(d)}},t?n?y(!0):_=d.run():o?o(y.bind(null,!0),!0):d.run(),f.pause=d.pause.bind(d),f.resume=d.resume.bind(d),f.stop=f,f}function Ot(e,t=1/0,s){if(t<=0||!be(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,we(e))Ot(e.value,t,s);else if(ae(e))for(let n=0;n<e.length;n++)Ot(e[n],t,s);else if(Pn(e)||_s(e))e.forEach(n=>{Ot(n,t,s)});else if(Io(e)){for(const n in e)Ot(e[n],t,s);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ot(e[n],t,s)}return e}function Vs(e,t,s,n){try{return n?e(...n):e()}catch(a){Mn(a,t,s)}}function ot(e,t,s,n){if(le(e)){const a=Vs(e,t,s,n);return a&&Mo(a)&&a.catch(r=>{Mn(r,t,s)}),a}if(ae(e)){const a=[];for(let r=0;r<e.length;r++)a.push(ot(e[r],t,s,n));return a}}function Mn(e,t,s,n=!0){const a=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ge;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}i=i.parent}if(r){Rt(),Vs(r,null,10,[e,l,c]),Mt();return}}fc(e,s,a,n,o)}function fc(e,t,s,n=!0,a=!1){if(a)throw e;console.error(e)}const Be=[];let pt=-1;const ys=[];let Ft=null,ms=0;const ii=Promise.resolve();let mn=null;function Za(e){const t=mn||ii;return e?t.then(this?e.bind(this):e):t}function hc(e){let t=pt+1,s=Be.length;for(;t<s;){const n=t+s>>>1,a=Be[n],r=Hs(a);r<e||r===e&&a.flags&2?t=n+1:s=n}return t}function er(e){if(!(e.flags&1)){const t=Hs(e),s=Be[Be.length-1];!s||!(e.flags&2)&&t>=Hs(s)?Be.push(e):Be.splice(hc(t),0,e),e.flags|=1,li()}}function li(){mn||(mn=ii.then(di))}function mc(e){ae(e)?ys.push(...e):Ft&&e.id===-1?Ft.splice(ms+1,0,e):e.flags&1||(ys.push(e),e.flags|=1),li()}function br(e,t,s=pt+1){for(;s<Be.length;s++){const n=Be[s];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;Be.splice(s,1),s--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function ci(e){if(ys.length){const t=[...new Set(ys)].sort((s,n)=>Hs(s)-Hs(n));if(ys.length=0,Ft){Ft.push(...t);return}for(Ft=t,ms=0;ms<Ft.length;ms++){const s=Ft[ms];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Ft=null,ms=0}}const Hs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function di(e){try{for(pt=0;pt<Be.length;pt++){const t=Be[pt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Vs(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;pt<Be.length;pt++){const t=Be[pt];t&&(t.flags&=-2)}pt=-1,Be.length=0,ci(),mn=null,(Be.length||ys.length)&&di()}}let We=null,ui=null;function gn(e){const t=We;return We=e,ui=e&&e.type.__scopeId||null,t}function Sa(e,t=We,s){if(!t||e._n)return e;const n=(...a)=>{n._d&&yn(-1);const r=gn(t);let o;try{o=e(...a)}finally{gn(r),n._d&&yn(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function gc(e,t){if(We===null)return e;const s=$n(We),n=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[r,o,i,l=ge]=t[a];r&&(le(r)&&(r={mounted:r,updated:r}),r.deep&&Ot(o),n.push({dir:r,instance:s,value:o,oldValue:void 0,arg:i,modifiers:l}))}return e}function es(e,t,s,n){const a=e.dirs,r=t&&t.dirs;for(let o=0;o<a.length;o++){const i=a[o];r&&(i.oldValue=r[o].value);let l=i.dir[n];l&&(Rt(),ot(l,s,8,[e.el,i,e,t]),Mt())}}const bc=Symbol("_vte"),pi=e=>e.__isTeleport,xt=Symbol("_leaveCb"),tn=Symbol("_enterCb");function _c(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xt(()=>{e.isMounted=!0}),Ti(()=>{e.isUnmounting=!0}),e}const Xe=[Function,Array],fi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Xe,onEnter:Xe,onAfterEnter:Xe,onEnterCancelled:Xe,onBeforeLeave:Xe,onLeave:Xe,onAfterLeave:Xe,onLeaveCancelled:Xe,onBeforeAppear:Xe,onAppear:Xe,onAfterAppear:Xe,onAppearCancelled:Xe},hi=e=>{const t=e.subTree;return t.component?hi(t.component):t},yc={name:"BaseTransition",props:fi,setup(e,{slots:t}){const s=ar(),n=_c();return()=>{const a=t.default&&bi(t.default(),!0);if(!a||!a.length)return;const r=mi(a),o=ue(e),{mode:i}=o;if(n.isLeaving)return Jn(r);const l=_r(r);if(!l)return Jn(r);let c=Ea(l,o,n,s,u=>c=u);l.type!==ze&&Gs(l,c);let d=s.subTree&&_r(s.subTree);if(d&&d.type!==ze&&!rs(d,l)&&hi(s).type!==ze){let u=Ea(d,o,n,s);if(Gs(d,u),i==="out-in"&&l.type!==ze)return n.isLeaving=!0,u.afterLeave=()=>{n.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,d=void 0},Jn(r);i==="in-out"&&l.type!==ze?u.delayLeave=(p,m,b)=>{const h=gi(n,d);h[String(d.key)]=d,p[xt]=()=>{m(),p[xt]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{b(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function mi(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==ze){t=s;break}}return t}const vc=yc;function gi(e,t){const{leavingVNodes:s}=e;let n=s.get(t.type);return n||(n=Object.create(null),s.set(t.type,n)),n}function Ea(e,t,s,n,a){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:m,onAfterLeave:b,onLeaveCancelled:h,onBeforeAppear:g,onAppear:f,onAfterAppear:_,onAppearCancelled:y}=t,v=String(e.key),S=gi(s,e),A=(x,w)=>{x&&ot(x,n,9,w)},R=(x,w)=>{const M=w[1];A(x,w),ae(x)?x.every(P=>P.length<=1)&&M():x.length<=1&&M()},C={mode:o,persisted:i,beforeEnter(x){let w=l;if(!s.isMounted)if(r)w=g||l;else return;x[xt]&&x[xt](!0);const M=S[v];M&&rs(e,M)&&M.el[xt]&&M.el[xt](),A(w,[x])},enter(x){let w=c,M=d,P=u;if(!s.isMounted)if(r)w=f||c,M=_||d,P=y||u;else return;let $=!1;const ee=x[tn]=Q=>{$||($=!0,Q?A(P,[x]):A(M,[x]),C.delayedLeave&&C.delayedLeave(),x[tn]=void 0)};w?R(w,[x,ee]):ee()},leave(x,w){const M=String(e.key);if(x[tn]&&x[tn](!0),s.isUnmounting)return w();A(p,[x]);let P=!1;const $=x[xt]=ee=>{P||(P=!0,w(),ee?A(h,[x]):A(b,[x]),x[xt]=void 0,S[M]===e&&delete S[M])};S[M]=e,m?R(m,[x,$]):$()},clone(x){const w=Ea(x,t,s,n,a);return a&&a(w),w}};return C}function Jn(e){if(Ln(e))return e=Wt(e),e.children=null,e}function _r(e){if(!Ln(e))return pi(e.type)&&e.children?mi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&le(s.default))return s.default()}}function Gs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Gs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function bi(e,t=!1,s){let n=[],a=0;for(let r=0;r<e.length;r++){let o=e[r];const i=s==null?o.key:String(s)+String(o.key!=null?o.key:r);o.type===ht?(o.patchFlag&128&&a++,n=n.concat(bi(o.children,t,i))):(t||o.type!==ze)&&n.push(i!=null?Wt(o,{key:i}):o)}if(a>1)for(let r=0;r<n.length;r++)n[r].patchFlag=-2;return n}function _i(e,t){return le(e)?Oe({name:e.name},t,{setup:e}):e}function yi(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const bn=new WeakMap;function Ms(e,t,s,n,a=!1){if(ae(e)){e.forEach((b,h)=>Ms(b,t&&(ae(t)?t[h]:t),s,n,a));return}if(Ls(n)&&!a){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Ms(e,t,s,n.component.subTree);return}const r=n.shapeFlag&4?$n(n.component):n.el,o=a?null:r,{i,r:l}=e,c=t&&t.r,d=i.refs===ge?i.refs={}:i.refs,u=i.setupState,p=ue(u),m=u===ge?Ro:b=>fe(p,b);if(c!=null&&c!==l){if(yr(t),xe(c))d[c]=null,m(c)&&(u[c]=null);else if(we(c)){c.value=null;const b=t;b.k&&(d[b.k]=null)}}if(le(l))Vs(l,i,12,[o,d]);else{const b=xe(l),h=we(l);if(b||h){const g=()=>{if(e.f){const f=b?m(l)?u[l]:d[l]:l.value;if(a)ae(f)&&Ha(f,r);else if(ae(f))f.includes(r)||f.push(r);else if(b)d[l]=[r],m(l)&&(u[l]=d[l]);else{const _=[r];l.value=_,e.k&&(d[e.k]=_)}}else b?(d[l]=o,m(l)&&(u[l]=o)):h&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const f=()=>{g(),bn.delete(e)};f.id=-1,bn.set(e,f),Ye(f,s)}else yr(e),g()}}}function yr(e){const t=bn.get(e);t&&(t.flags|=8,bn.delete(e))}Cn().requestIdleCallback;Cn().cancelIdleCallback;const Ls=e=>!!e.type.__asyncLoader,Ln=e=>e.type.__isKeepAlive;function Tc(e,t){vi(e,"a",t)}function Sc(e,t){vi(e,"da",t)}function vi(e,t,s=Le){const n=e.__wdc||(e.__wdc=()=>{let a=s;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(In(t,n,s),s){let a=s.parent;for(;a&&a.parent;)Ln(a.parent.vnode)&&Ec(n,t,s,a),a=a.parent}}function Ec(e,t,s,n){const a=In(t,e,n,!0);Nn(()=>{Ha(n[t],a)},s)}function In(e,t,s=Le,n=!1){if(s){const a=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{Rt();const i=Js(s),l=ot(t,s,e,o);return i(),Mt(),l});return n?a.unshift(r):a.push(r),r}}const It=e=>(t,s=Le)=>{(!js||e==="sp")&&In(e,(...n)=>t(...n),s)},wc=It("bm"),Xt=It("m"),xc=It("bu"),Ac=It("u"),Ti=It("bum"),Nn=It("um"),Pc=It("sp"),Oc=It("rtg"),kc=It("rtc");function Cc(e,t=Le){In("ec",e,t)}const Rc="components",Si=Symbol.for("v-ndc");function Mc(e){return xe(e)?Lc(Rc,e,!1)||e:e||Si}function Lc(e,t,s=!0,n=!1){const a=We||Le;if(a){const r=a.type;{const i=Td(r,!1);if(i&&(i===t||i===tt(t)||i===kn(tt(t))))return r}const o=vr(a[e]||r[e],t)||vr(a.appContext[e],t);return!o&&n?r:o}}function vr(e,t){return e&&(e[t]||e[tt(t)]||e[kn(tt(t))])}const wa=e=>e?Gi(e)?$n(e):wa(e.parent):null,Is=Oe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wa(e.parent),$root:e=>wa(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wi(e),$forceUpdate:e=>e.f||(e.f=()=>{er(e.update)}),$nextTick:e=>e.n||(e.n=Za.bind(e.proxy)),$watch:e=>td.bind(e)}),Xn=(e,t)=>e!==ge&&!e.__isScriptSetup&&fe(e,t),Ic={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:n,data:a,props:r,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const m=o[t];if(m!==void 0)switch(m){case 1:return n[t];case 2:return a[t];case 4:return s[t];case 3:return r[t]}else{if(Xn(n,t))return o[t]=1,n[t];if(a!==ge&&fe(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&fe(c,t))return o[t]=3,r[t];if(s!==ge&&fe(s,t))return o[t]=4,s[t];xa&&(o[t]=0)}}const d=Is[t];let u,p;if(d)return t==="$attrs"&&Me(e.attrs,"get",""),d(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(s!==ge&&fe(s,t))return o[t]=4,s[t];if(p=l.config.globalProperties,fe(p,t))return p[t]},set({_:e},t,s){const{data:n,setupState:a,ctx:r}=e;return Xn(a,t)?(a[t]=s,!0):n!==ge&&fe(n,t)?(n[t]=s,!0):fe(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:n,appContext:a,propsOptions:r,type:o}},i){let l,c;return!!(s[i]||e!==ge&&i[0]!=="$"&&fe(e,i)||Xn(t,i)||(l=r[0])&&fe(l,i)||fe(n,i)||fe(Is,i)||fe(a.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:fe(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Tr(e){return ae(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let xa=!0;function Nc(e){const t=wi(e),s=e.proxy,n=e.ctx;xa=!1,t.beforeCreate&&Sr(t.beforeCreate,e,"bc");const{data:a,computed:r,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:m,updated:b,activated:h,deactivated:g,beforeDestroy:f,beforeUnmount:_,destroyed:y,unmounted:v,render:S,renderTracked:A,renderTriggered:R,errorCaptured:C,serverPrefetch:x,expose:w,inheritAttrs:M,components:P,directives:$,filters:ee}=t;if(c&&Dc(c,n,null),o)for(const G in o){const U=o[G];le(U)&&(n[G]=U.bind(s))}if(a){const G=a.call(s,s);be(G)&&(e.data=kt(G))}if(xa=!0,r)for(const G in r){const U=r[G],se=le(U)?U.bind(s,s):le(U.get)?U.get.bind(s,s):gt,W=!le(U)&&le(U.set)?U.set.bind(s):gt,re=qe({get:se,set:W});Object.defineProperty(n,G,{enumerable:!0,configurable:!0,get:()=>re.value,set:te=>re.value=te})}if(i)for(const G in i)Ei(i[G],n,s,G);if(l){const G=le(l)?l.call(s):l;Reflect.ownKeys(G).forEach(U=>{ln(U,G[U])})}d&&Sr(d,e,"c");function Y(G,U){ae(U)?U.forEach(se=>G(se.bind(s))):U&&G(U.bind(s))}if(Y(wc,u),Y(Xt,p),Y(xc,m),Y(Ac,b),Y(Tc,h),Y(Sc,g),Y(Cc,C),Y(kc,A),Y(Oc,R),Y(Ti,_),Y(Nn,v),Y(Pc,x),ae(w))if(w.length){const G=e.exposed||(e.exposed={});w.forEach(U=>{Object.defineProperty(G,U,{get:()=>s[U],set:se=>s[U]=se,enumerable:!0})})}else e.exposed||(e.exposed={});S&&e.render===gt&&(e.render=S),M!=null&&(e.inheritAttrs=M),P&&(e.components=P),$&&(e.directives=$),x&&yi(e)}function Dc(e,t,s=gt){ae(e)&&(e=Aa(e));for(const n in e){const a=e[n];let r;be(a)?"default"in a?r=et(a.from||n,a.default,!0):r=et(a.from||n):r=et(a),we(r)?Object.defineProperty(t,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[n]=r}}function Sr(e,t,s){ot(ae(e)?e.map(n=>n.bind(t.proxy)):e.bind(t.proxy),t,s)}function Ei(e,t,s,n){let a=n.includes(".")?Bi(s,n):()=>s[n];if(xe(e)){const r=t[e];le(r)&&Ns(a,r)}else if(le(e))Ns(a,e.bind(s));else if(be(e))if(ae(e))e.forEach(r=>Ei(r,t,s,n));else{const r=le(e.handler)?e.handler.bind(s):t[e.handler];le(r)&&Ns(a,r,e)}}function wi(e){const t=e.type,{mixins:s,extends:n}=t,{mixins:a,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,i=r.get(t);let l;return i?l=i:!a.length&&!s&&!n?l=t:(l={},a.length&&a.forEach(c=>_n(l,c,o,!0)),_n(l,t,o)),be(t)&&r.set(t,l),l}function _n(e,t,s,n=!1){const{mixins:a,extends:r}=t;r&&_n(e,r,s,!0),a&&a.forEach(o=>_n(e,o,s,!0));for(const o in t)if(!(n&&o==="expose")){const i=Bc[o]||s&&s[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Bc={data:Er,props:wr,emits:wr,methods:Ps,computed:Ps,beforeCreate:Ie,created:Ie,beforeMount:Ie,mounted:Ie,beforeUpdate:Ie,updated:Ie,beforeDestroy:Ie,beforeUnmount:Ie,destroyed:Ie,unmounted:Ie,activated:Ie,deactivated:Ie,errorCaptured:Ie,serverPrefetch:Ie,components:Ps,directives:Ps,watch:$c,provide:Er,inject:Fc};function Er(e,t){return t?e?function(){return Oe(le(e)?e.call(this,this):e,le(t)?t.call(this,this):t)}:t:e}function Fc(e,t){return Ps(Aa(e),Aa(t))}function Aa(e){if(ae(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Ie(e,t){return e?[...new Set([].concat(e,t))]:t}function Ps(e,t){return e?Oe(Object.create(null),e,t):t}function wr(e,t){return e?ae(e)&&ae(t)?[...new Set([...e,...t])]:Oe(Object.create(null),Tr(e),Tr(t??{})):t}function $c(e,t){if(!e)return t;if(!t)return e;const s=Oe(Object.create(null),e);for(const n in t)s[n]=Ie(e[n],t[n]);return s}function xi(){return{app:null,config:{isNativeTag:Ro,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Uc=0;function Hc(e,t){return function(n,a=null){le(n)||(n=Oe({},n)),a!=null&&!be(a)&&(a=null);const r=xi(),o=new WeakSet,i=[];let l=!1;const c=r.app={_uid:Uc++,_component:n,_props:a,_container:null,_context:r,_instance:null,version:Ed,get config(){return r.config},set config(d){},use(d,...u){return o.has(d)||(d&&le(d.install)?(o.add(d),d.install(c,...u)):le(d)&&(o.add(d),d(c,...u))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,u){return u?(r.components[d]=u,c):r.components[d]},directive(d,u){return u?(r.directives[d]=u,c):r.directives[d]},mount(d,u,p){if(!l){const m=c._ceVNode||He(n,a);return m.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(m,d,p),l=!0,c._container=d,d.__vue_app__=c,$n(m.component)}},onUnmount(d){i.push(d)},unmount(){l&&(ot(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return r.provides[d]=u,c},runWithContext(d){const u=ds;ds=c;try{return d()}finally{ds=u}}};return c}}let ds=null;function ln(e,t){if(Le){let s=Le.provides;const n=Le.parent&&Le.parent.provides;n===s&&(s=Le.provides=Object.create(n)),s[e]=t}}function et(e,t,s=!1){const n=ar();if(n||ds){let a=ds?ds._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return s&&le(t)?t.call(n&&n.proxy):t}}function Gc(){return!!(ar()||ds)}const Ai={},Pi=()=>Object.create(Ai),Oi=e=>Object.getPrototypeOf(e)===Ai;function Yc(e,t,s,n=!1){const a={},r=Pi();e.propsDefaults=Object.create(null),ki(e,t,a,r);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);s?e.props=n?a:ai(a):e.type.props?e.props=a:e.props=r,e.attrs=r}function jc(e,t,s,n){const{props:a,attrs:r,vnode:{patchFlag:o}}=e,i=ue(a),[l]=e.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Dn(e.emitsOptions,p))continue;const m=t[p];if(l)if(fe(r,p))m!==r[p]&&(r[p]=m,c=!0);else{const b=tt(p);a[b]=Pa(l,i,b,m,e,!1)}else m!==r[p]&&(r[p]=m,c=!0)}}}else{ki(e,t,a,r)&&(c=!0);let d;for(const u in i)(!t||!fe(t,u)&&((d=Jt(u))===u||!fe(t,d)))&&(l?s&&(s[u]!==void 0||s[d]!==void 0)&&(a[u]=Pa(l,i,u,void 0,e,!0)):delete a[u]);if(r!==i)for(const u in r)(!t||!fe(t,u))&&(delete r[u],c=!0)}c&&Pt(e.attrs,"set","")}function ki(e,t,s,n){const[a,r]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(ks(l))continue;const c=t[l];let d;a&&fe(a,d=tt(l))?!r||!r.includes(d)?s[d]=c:(i||(i={}))[d]=c:Dn(e.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=ue(s),c=i||ge;for(let d=0;d<r.length;d++){const u=r[d];s[u]=Pa(a,l,u,c[u],e,!fe(c,u))}}return o}function Pa(e,t,s,n,a,r){const o=e[s];if(o!=null){const i=fe(o,"default");if(i&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&le(l)){const{propsDefaults:c}=a;if(s in c)n=c[s];else{const d=Js(a);n=c[s]=l.call(null,t),d()}}else n=l;a.ce&&a.ce._setProp(s,n)}o[0]&&(r&&!i?n=!1:o[1]&&(n===""||n===Jt(s))&&(n=!0))}return n}const Kc=new WeakMap;function Ci(e,t,s=!1){const n=s?Kc:t.propsCache,a=n.get(e);if(a)return a;const r=e.props,o={},i=[];let l=!1;if(!le(e)){const d=u=>{l=!0;const[p,m]=Ci(u,t,!0);Oe(o,p),m&&i.push(...m)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!l)return be(e)&&n.set(e,bs),bs;if(ae(r))for(let d=0;d<r.length;d++){const u=tt(r[d]);xr(u)&&(o[u]=ge)}else if(r)for(const d in r){const u=tt(d);if(xr(u)){const p=r[d],m=o[u]=ae(p)||le(p)?{type:p}:Oe({},p),b=m.type;let h=!1,g=!0;if(ae(b))for(let f=0;f<b.length;++f){const _=b[f],y=le(_)&&_.name;if(y==="Boolean"){h=!0;break}else y==="String"&&(g=!1)}else h=le(b)&&b.name==="Boolean";m[0]=h,m[1]=g,(h||fe(m,"default"))&&i.push(u)}}const c=[o,i];return be(e)&&n.set(e,c),c}function xr(e){return e[0]!=="$"&&!ks(e)}const tr=e=>e==="_"||e==="_ctx"||e==="$stable",sr=e=>ae(e)?e.map(mt):[mt(e)],zc=(e,t,s)=>{if(t._n)return t;const n=Sa((...a)=>sr(t(...a)),s);return n._c=!1,n},Ri=(e,t,s)=>{const n=e._ctx;for(const a in e){if(tr(a))continue;const r=e[a];if(le(r))t[a]=zc(a,r,n);else if(r!=null){const o=sr(r);t[a]=()=>o}}},Mi=(e,t)=>{const s=sr(t);e.slots.default=()=>s},Li=(e,t,s)=>{for(const n in t)(s||!tr(n))&&(e[n]=t[n])},qc=(e,t,s)=>{const n=e.slots=Pi();if(e.vnode.shapeFlag&32){const a=t._;a?(Li(n,t,s),s&&No(n,"_",a,!0)):Ri(t,n)}else t&&Mi(e,t)},Wc=(e,t,s)=>{const{vnode:n,slots:a}=e;let r=!0,o=ge;if(n.shapeFlag&32){const i=t._;i?s&&i===1?r=!1:Li(a,t,s):(r=!t.$stable,Ri(t,a)),o=t}else t&&(Mi(e,t),o={default:1});if(r)for(const i in a)!tr(i)&&o[i]==null&&delete a[i]},Ye=cd;function Vc(e){return Jc(e)}function Jc(e,t){const s=Cn();s.__VUE__=!0;const{insert:n,remove:a,patchProp:r,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:m=gt,insertStaticContent:b}=e,h=(T,E,O,D=null,B=null,N=null,V=void 0,z=null,K=!!E.dynamicChildren)=>{if(T===E)return;T&&!rs(T,E)&&(D=I(T),te(T,B,N,!0),T=null),E.patchFlag===-2&&(K=!1,E.dynamicChildren=null);const{type:H,ref:oe,shapeFlag:X}=E;switch(H){case Bn:g(T,E,O,D);break;case ze:f(T,E,O,D);break;case cn:T==null&&_(E,O,D,V);break;case ht:P(T,E,O,D,B,N,V,z,K);break;default:X&1?S(T,E,O,D,B,N,V,z,K):X&6?$(T,E,O,D,B,N,V,z,K):(X&64||X&128)&&H.process(T,E,O,D,B,N,V,z,K,Z)}oe!=null&&B?Ms(oe,T&&T.ref,N,E||T,!E):oe==null&&T&&T.ref!=null&&Ms(T.ref,null,N,T,!0)},g=(T,E,O,D)=>{if(T==null)n(E.el=i(E.children),O,D);else{const B=E.el=T.el;E.children!==T.children&&c(B,E.children)}},f=(T,E,O,D)=>{T==null?n(E.el=l(E.children||""),O,D):E.el=T.el},_=(T,E,O,D)=>{[T.el,T.anchor]=b(T.children,E,O,D,T.el,T.anchor)},y=({el:T,anchor:E},O,D)=>{let B;for(;T&&T!==E;)B=p(T),n(T,O,D),T=B;n(E,O,D)},v=({el:T,anchor:E})=>{let O;for(;T&&T!==E;)O=p(T),a(T),T=O;a(E)},S=(T,E,O,D,B,N,V,z,K)=>{if(E.type==="svg"?V="svg":E.type==="math"&&(V="mathml"),T==null)A(E,O,D,B,N,V,z,K);else{const H=T.el&&T.el._isVueCE?T.el:null;try{H&&H._beginPatch(),x(T,E,B,N,V,z,K)}finally{H&&H._endPatch()}}},A=(T,E,O,D,B,N,V,z)=>{let K,H;const{props:oe,shapeFlag:X,transition:ne,dirs:ie}=T;if(K=T.el=o(T.type,N,oe&&oe.is,oe),X&8?d(K,T.children):X&16&&C(T.children,K,null,D,B,Qn(T,N),V,z),ie&&es(T,null,D,"created"),R(K,T,T.scopeId,V,D),oe){for(const ye in oe)ye!=="value"&&!ks(ye)&&r(K,ye,null,oe[ye],N,D);"value"in oe&&r(K,"value",null,oe.value,N),(H=oe.onVnodeBeforeMount)&&ut(H,D,T)}ie&&es(T,null,D,"beforeMount");const de=Xc(B,ne);de&&ne.beforeEnter(K),n(K,E,O),((H=oe&&oe.onVnodeMounted)||de||ie)&&Ye(()=>{H&&ut(H,D,T),de&&ne.enter(K),ie&&es(T,null,D,"mounted")},B)},R=(T,E,O,D,B)=>{if(O&&m(T,O),D)for(let N=0;N<D.length;N++)m(T,D[N]);if(B){let N=B.subTree;if(E===N||$i(N.type)&&(N.ssContent===E||N.ssFallback===E)){const V=B.vnode;R(T,V,V.scopeId,V.slotScopeIds,B.parent)}}},C=(T,E,O,D,B,N,V,z,K=0)=>{for(let H=K;H<T.length;H++){const oe=T[H]=z?$t(T[H]):mt(T[H]);h(null,oe,E,O,D,B,N,V,z)}},x=(T,E,O,D,B,N,V)=>{const z=E.el=T.el;let{patchFlag:K,dynamicChildren:H,dirs:oe}=E;K|=T.patchFlag&16;const X=T.props||ge,ne=E.props||ge;let ie;if(O&&ts(O,!1),(ie=ne.onVnodeBeforeUpdate)&&ut(ie,O,E,T),oe&&es(E,T,O,"beforeUpdate"),O&&ts(O,!0),(X.innerHTML&&ne.innerHTML==null||X.textContent&&ne.textContent==null)&&d(z,""),H?w(T.dynamicChildren,H,z,O,D,Qn(E,B),N):V||U(T,E,z,null,O,D,Qn(E,B),N,!1),K>0){if(K&16)M(z,X,ne,O,B);else if(K&2&&X.class!==ne.class&&r(z,"class",null,ne.class,B),K&4&&r(z,"style",X.style,ne.style,B),K&8){const de=E.dynamicProps;for(let ye=0;ye<de.length;ye++){const he=de[ye],$e=X[he],Ue=ne[he];(Ue!==$e||he==="value")&&r(z,he,$e,Ue,B,O)}}K&1&&T.children!==E.children&&d(z,E.children)}else!V&&H==null&&M(z,X,ne,O,B);((ie=ne.onVnodeUpdated)||oe)&&Ye(()=>{ie&&ut(ie,O,E,T),oe&&es(E,T,O,"updated")},D)},w=(T,E,O,D,B,N,V)=>{for(let z=0;z<E.length;z++){const K=T[z],H=E[z],oe=K.el&&(K.type===ht||!rs(K,H)||K.shapeFlag&198)?u(K.el):O;h(K,H,oe,null,D,B,N,V,!0)}},M=(T,E,O,D,B)=>{if(E!==O){if(E!==ge)for(const N in E)!ks(N)&&!(N in O)&&r(T,N,E[N],null,B,D);for(const N in O){if(ks(N))continue;const V=O[N],z=E[N];V!==z&&N!=="value"&&r(T,N,z,V,B,D)}"value"in O&&r(T,"value",E.value,O.value,B)}},P=(T,E,O,D,B,N,V,z,K)=>{const H=E.el=T?T.el:i(""),oe=E.anchor=T?T.anchor:i("");let{patchFlag:X,dynamicChildren:ne,slotScopeIds:ie}=E;ie&&(z=z?z.concat(ie):ie),T==null?(n(H,O,D),n(oe,O,D),C(E.children||[],O,oe,B,N,V,z,K)):X>0&&X&64&&ne&&T.dynamicChildren?(w(T.dynamicChildren,ne,O,B,N,V,z),(E.key!=null||B&&E===B.subTree)&&Ii(T,E,!0)):U(T,E,O,oe,B,N,V,z,K)},$=(T,E,O,D,B,N,V,z,K)=>{E.slotScopeIds=z,T==null?E.shapeFlag&512?B.ctx.activate(E,O,D,V,K):ee(E,O,D,B,N,V,K):Q(T,E,K)},ee=(T,E,O,D,B,N,V)=>{const z=T.component=gd(T,D,B);if(Ln(T)&&(z.ctx.renderer=Z),bd(z,!1,V),z.asyncDep){if(B&&B.registerDep(z,Y,V),!T.el){const K=z.subTree=He(ze);f(null,K,E,O),T.placeholder=K.el}}else Y(z,T,E,O,B,N,V)},Q=(T,E,O)=>{const D=E.component=T.component;if(id(T,E,O))if(D.asyncDep&&!D.asyncResolved){G(D,E,O);return}else D.next=E,D.update();else E.el=T.el,D.vnode=E},Y=(T,E,O,D,B,N,V)=>{const z=()=>{if(T.isMounted){let{next:X,bu:ne,u:ie,parent:de,vnode:ye}=T;{const ct=Ni(T);if(ct){X&&(X.el=ye.el,G(T,X,V)),ct.asyncDep.then(()=>{T.isUnmounted||z()});return}}let he=X,$e;ts(T,!1),X?(X.el=ye.el,G(T,X,V)):X=ye,ne&&on(ne),($e=X.props&&X.props.onVnodeBeforeUpdate)&&ut($e,de,X,ye),ts(T,!0);const Ue=Pr(T),lt=T.subTree;T.subTree=Ue,h(lt,Ue,u(lt.el),I(lt),T,B,N),X.el=Ue.el,he===null&&ld(T,Ue.el),ie&&Ye(ie,B),($e=X.props&&X.props.onVnodeUpdated)&&Ye(()=>ut($e,de,X,ye),B)}else{let X;const{el:ne,props:ie}=E,{bm:de,m:ye,parent:he,root:$e,type:Ue}=T,lt=Ls(E);ts(T,!1),de&&on(de),!lt&&(X=ie&&ie.onVnodeBeforeMount)&&ut(X,he,E),ts(T,!0);{$e.ce&&$e.ce._def.shadowRoot!==!1&&$e.ce._injectChildStyle(Ue);const ct=T.subTree=Pr(T);h(null,ct,O,D,T,B,N),E.el=ct.el}if(ye&&Ye(ye,B),!lt&&(X=ie&&ie.onVnodeMounted)){const ct=E;Ye(()=>ut(X,he,ct),B)}(E.shapeFlag&256||he&&Ls(he.vnode)&&he.vnode.shapeFlag&256)&&T.a&&Ye(T.a,B),T.isMounted=!0,E=O=D=null}};T.scope.on();const K=T.effect=new jo(z);T.scope.off();const H=T.update=K.run.bind(K),oe=T.job=K.runIfDirty.bind(K);oe.i=T,oe.id=T.uid,K.scheduler=()=>er(oe),ts(T,!0),H()},G=(T,E,O)=>{E.component=T;const D=T.vnode.props;T.vnode=E,T.next=null,jc(T,E.props,D,O),Wc(T,E.children,O),Rt(),br(T),Mt()},U=(T,E,O,D,B,N,V,z,K=!1)=>{const H=T&&T.children,oe=T?T.shapeFlag:0,X=E.children,{patchFlag:ne,shapeFlag:ie}=E;if(ne>0){if(ne&128){W(H,X,O,D,B,N,V,z,K);return}else if(ne&256){se(H,X,O,D,B,N,V,z,K);return}}ie&8?(oe&16&&me(H,B,N),X!==H&&d(O,X)):oe&16?ie&16?W(H,X,O,D,B,N,V,z,K):me(H,B,N,!0):(oe&8&&d(O,""),ie&16&&C(X,O,D,B,N,V,z,K))},se=(T,E,O,D,B,N,V,z,K)=>{T=T||bs,E=E||bs;const H=T.length,oe=E.length,X=Math.min(H,oe);let ne;for(ne=0;ne<X;ne++){const ie=E[ne]=K?$t(E[ne]):mt(E[ne]);h(T[ne],ie,O,null,B,N,V,z,K)}H>oe?me(T,B,N,!0,!1,X):C(E,O,D,B,N,V,z,K,X)},W=(T,E,O,D,B,N,V,z,K)=>{let H=0;const oe=E.length;let X=T.length-1,ne=oe-1;for(;H<=X&&H<=ne;){const ie=T[H],de=E[H]=K?$t(E[H]):mt(E[H]);if(rs(ie,de))h(ie,de,O,null,B,N,V,z,K);else break;H++}for(;H<=X&&H<=ne;){const ie=T[X],de=E[ne]=K?$t(E[ne]):mt(E[ne]);if(rs(ie,de))h(ie,de,O,null,B,N,V,z,K);else break;X--,ne--}if(H>X){if(H<=ne){const ie=ne+1,de=ie<oe?E[ie].el:D;for(;H<=ne;)h(null,E[H]=K?$t(E[H]):mt(E[H]),O,de,B,N,V,z,K),H++}}else if(H>ne)for(;H<=X;)te(T[H],B,N,!0),H++;else{const ie=H,de=H,ye=new Map;for(H=de;H<=ne;H++){const Ge=E[H]=K?$t(E[H]):mt(E[H]);Ge.key!=null&&ye.set(Ge.key,H)}let he,$e=0;const Ue=ne-de+1;let lt=!1,ct=0;const Es=new Array(Ue);for(H=0;H<Ue;H++)Es[H]=0;for(H=ie;H<=X;H++){const Ge=T[H];if($e>=Ue){te(Ge,B,N,!0);continue}let dt;if(Ge.key!=null)dt=ye.get(Ge.key);else for(he=de;he<=ne;he++)if(Es[he-de]===0&&rs(Ge,E[he])){dt=he;break}dt===void 0?te(Ge,B,N,!0):(Es[dt-de]=H+1,dt>=ct?ct=dt:lt=!0,h(Ge,E[dt],O,null,B,N,V,z,K),$e++)}const dr=lt?Qc(Es):bs;for(he=dr.length-1,H=Ue-1;H>=0;H--){const Ge=de+H,dt=E[Ge],ur=E[Ge+1],pr=Ge+1<oe?ur.el||ur.placeholder:D;Es[H]===0?h(null,dt,O,pr,B,N,V,z,K):lt&&(he<0||H!==dr[he]?re(dt,O,pr,2):he--)}}},re=(T,E,O,D,B=null)=>{const{el:N,type:V,transition:z,children:K,shapeFlag:H}=T;if(H&6){re(T.component.subTree,E,O,D);return}if(H&128){T.suspense.move(E,O,D);return}if(H&64){V.move(T,E,O,Z);return}if(V===ht){n(N,E,O);for(let X=0;X<K.length;X++)re(K[X],E,O,D);n(T.anchor,E,O);return}if(V===cn){y(T,E,O);return}if(D!==2&&H&1&&z)if(D===0)z.beforeEnter(N),n(N,E,O),Ye(()=>z.enter(N),B);else{const{leave:X,delayLeave:ne,afterLeave:ie}=z,de=()=>{T.ctx.isUnmounted?a(N):n(N,E,O)},ye=()=>{N._isLeaving&&N[xt](!0),X(N,()=>{de(),ie&&ie()})};ne?ne(N,de,ye):ye()}else n(N,E,O)},te=(T,E,O,D=!1,B=!1)=>{const{type:N,props:V,ref:z,children:K,dynamicChildren:H,shapeFlag:oe,patchFlag:X,dirs:ne,cacheIndex:ie}=T;if(X===-2&&(B=!1),z!=null&&(Rt(),Ms(z,null,O,T,!0),Mt()),ie!=null&&(E.renderCache[ie]=void 0),oe&256){E.ctx.deactivate(T);return}const de=oe&1&&ne,ye=!Ls(T);let he;if(ye&&(he=V&&V.onVnodeBeforeUnmount)&&ut(he,E,T),oe&6)ke(T.component,O,D);else{if(oe&128){T.suspense.unmount(O,D);return}de&&es(T,null,E,"beforeUnmount"),oe&64?T.type.remove(T,E,O,Z,D):H&&!H.hasOnce&&(N!==ht||X>0&&X&64)?me(H,E,O,!1,!0):(N===ht&&X&384||!B&&oe&16)&&me(K,E,O),D&&Pe(T)}(ye&&(he=V&&V.onVnodeUnmounted)||de)&&Ye(()=>{he&&ut(he,E,T),de&&es(T,null,E,"unmounted")},O)},Pe=T=>{const{type:E,el:O,anchor:D,transition:B}=T;if(E===ht){_e(O,D);return}if(E===cn){v(T);return}const N=()=>{a(O),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(T.shapeFlag&1&&B&&!B.persisted){const{leave:V,delayLeave:z}=B,K=()=>V(O,N);z?z(T.el,N,K):K()}else N()},_e=(T,E)=>{let O;for(;T!==E;)O=p(T),a(T),T=O;a(E)},ke=(T,E,O)=>{const{bum:D,scope:B,job:N,subTree:V,um:z,m:K,a:H}=T;Ar(K),Ar(H),D&&on(D),B.stop(),N&&(N.flags|=8,te(V,T,E,O)),z&&Ye(z,E),Ye(()=>{T.isUnmounted=!0},E)},me=(T,E,O,D=!1,B=!1,N=0)=>{for(let V=N;V<T.length;V++)te(T[V],E,O,D,B)},I=T=>{if(T.shapeFlag&6)return I(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const E=p(T.anchor||T.el),O=E&&E[bc];return O?p(O):E};let j=!1;const q=(T,E,O)=>{T==null?E._vnode&&te(E._vnode,null,null,!0):h(E._vnode||null,T,E,null,null,null,O),E._vnode=T,j||(j=!0,br(),ci(),j=!1)},Z={p:h,um:te,m:re,r:Pe,mt:ee,mc:C,pc:U,pbc:w,n:I,o:e};return{render:q,hydrate:void 0,createApp:Hc(q)}}function Qn({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function ts({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function Xc(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Ii(e,t,s=!1){const n=e.children,a=t.children;if(ae(n)&&ae(a))for(let r=0;r<n.length;r++){const o=n[r];let i=a[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[r]=$t(a[r]),i.el=o.el),!s&&i.patchFlag!==-2&&Ii(o,i)),i.type===Bn&&i.patchFlag!==-1&&(i.el=o.el),i.type===ze&&!i.el&&(i.el=o.el)}}function Qc(e){const t=e.slice(),s=[0];let n,a,r,o,i;const l=e.length;for(n=0;n<l;n++){const c=e[n];if(c!==0){if(a=s[s.length-1],e[a]<c){t[n]=a,s.push(n);continue}for(r=0,o=s.length-1;r<o;)i=r+o>>1,e[s[i]]<c?r=i+1:o=i;c<e[s[r]]&&(r>0&&(t[n]=s[r-1]),s[r]=n)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}function Ni(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Ni(t)}function Ar(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Zc=Symbol.for("v-scx"),ed=()=>et(Zc);function Ns(e,t,s){return Di(e,t,s)}function Di(e,t,s=ge){const{immediate:n,deep:a,flush:r,once:o}=s,i=Oe({},s),l=t&&n||!t&&r!=="post";let c;if(js){if(r==="sync"){const m=ed();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=gt,m.resume=gt,m.pause=gt,m}}const d=Le;i.call=(m,b,h)=>ot(m,d,b,h);let u=!1;r==="post"?i.scheduler=m=>{Ye(m,d&&d.suspense)}:r!=="sync"&&(u=!0,i.scheduler=(m,b)=>{b?m():er(m)}),i.augmentJob=m=>{t&&(m.flags|=4),u&&(m.flags|=2,d&&(m.id=d.uid,m.i=d))};const p=pc(e,t,i);return js&&(c?c.push(p):l&&p()),p}function td(e,t,s){const n=this.proxy,a=xe(e)?e.includes(".")?Bi(n,e):()=>n[e]:e.bind(n,n);let r;le(t)?r=t:(r=t.handler,s=t);const o=Js(this),i=Di(a,r.bind(n),s);return o(),i}function Bi(e,t){const s=t.split(".");return()=>{let n=e;for(let a=0;a<s.length&&n;a++)n=n[s[a]];return n}}const sd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${tt(t)}Modifiers`]||e[`${Jt(t)}Modifiers`];function nd(e,t,...s){if(e.isUnmounted)return;const n=e.vnode.props||ge;let a=s;const r=t.startsWith("update:"),o=r&&sd(n,t.slice(7));o&&(o.trim&&(a=s.map(d=>xe(d)?d.trim():d)),o.number&&(a=s.map(Ol)));let i,l=n[i=Kn(t)]||n[i=Kn(tt(t))];!l&&r&&(l=n[i=Kn(Jt(t))]),l&&ot(l,e,6,a);const c=n[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,ot(c,e,6,a)}}const ad=new WeakMap;function Fi(e,t,s=!1){const n=s?ad:t.emitsCache,a=n.get(e);if(a!==void 0)return a;const r=e.emits;let o={},i=!1;if(!le(e)){const l=c=>{const d=Fi(c,t,!0);d&&(i=!0,Oe(o,d))};!s&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!r&&!i?(be(e)&&n.set(e,null),null):(ae(r)?r.forEach(l=>o[l]=null):Oe(o,r),be(e)&&n.set(e,o),o)}function Dn(e,t){return!e||!An(t)?!1:(t=t.slice(2).replace(/Once$/,""),fe(e,t[0].toLowerCase()+t.slice(1))||fe(e,Jt(t))||fe(e,t))}function Pr(e){const{type:t,vnode:s,proxy:n,withProxy:a,propsOptions:[r],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:p,setupState:m,ctx:b,inheritAttrs:h}=e,g=gn(e);let f,_;try{if(s.shapeFlag&4){const v=a||n,S=v;f=mt(c.call(S,v,d,u,m,p,b)),_=i}else{const v=t;f=mt(v.length>1?v(u,{attrs:i,slots:o,emit:l}):v(u,null)),_=t.props?i:rd(i)}}catch(v){Ds.length=0,Mn(v,e,1),f=He(ze)}let y=f;if(_&&h!==!1){const v=Object.keys(_),{shapeFlag:S}=y;v.length&&S&7&&(r&&v.some(Ua)&&(_=od(_,r)),y=Wt(y,_,!1,!0))}return s.dirs&&(y=Wt(y,null,!1,!0),y.dirs=y.dirs?y.dirs.concat(s.dirs):s.dirs),s.transition&&Gs(y,s.transition),f=y,gn(g),f}const rd=e=>{let t;for(const s in e)(s==="class"||s==="style"||An(s))&&((t||(t={}))[s]=e[s]);return t},od=(e,t)=>{const s={};for(const n in e)(!Ua(n)||!(n.slice(9)in t))&&(s[n]=e[n]);return s};function id(e,t,s){const{props:n,children:a,component:r}=e,{props:o,children:i,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&l>=0){if(l&1024)return!0;if(l&16)return n?Or(n,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==n[p]&&!Dn(c,p))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:n===o?!1:n?o?Or(n,o,c):!0:!!o;return!1}function Or(e,t,s){const n=Object.keys(t);if(n.length!==Object.keys(e).length)return!0;for(let a=0;a<n.length;a++){const r=n[a];if(t[r]!==e[r]&&!Dn(s,r))return!0}return!1}function ld({vnode:e,parent:t},s){for(;t;){const n=t.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=t.vnode).el=s,t=t.parent;else break}}const $i=e=>e.__isSuspense;function cd(e,t){t&&t.pendingBranch?ae(e)?t.effects.push(...e):t.effects.push(e):mc(e)}const ht=Symbol.for("v-fgt"),Bn=Symbol.for("v-txt"),ze=Symbol.for("v-cmt"),cn=Symbol.for("v-stc"),Ds=[];let Ve=null;function st(e=!1){Ds.push(Ve=e?null:[])}function dd(){Ds.pop(),Ve=Ds[Ds.length-1]||null}let Ys=1;function yn(e,t=!1){Ys+=e,e<0&&Ve&&t&&(Ve.hasOnce=!0)}function Ui(e){return e.dynamicChildren=Ys>0?Ve||bs:null,dd(),Ys>0&&Ve&&Ve.push(e),e}function yt(e,t,s,n,a,r){return Ui(L(e,t,s,n,a,r,!0))}function kr(e,t,s,n,a){return Ui(He(e,t,s,n,a,!0))}function vn(e){return e?e.__v_isVNode===!0:!1}function rs(e,t){return e.type===t.type&&e.key===t.key}const Hi=({key:e})=>e??null,dn=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?xe(e)||we(e)||le(e)?{i:We,r:e,k:t,f:!!s}:e:null);function L(e,t=null,s=null,n=0,a=null,r=e===ht?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Hi(t),ref:t&&dn(t),scopeId:ui,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:We};return i?(nr(l,s),r&128&&e.normalize(l)):s&&(l.shapeFlag|=xe(s)?8:16),Ys>0&&!o&&Ve&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Ve.push(l),l}const He=ud;function ud(e,t=null,s=null,n=0,a=null,r=!1){if((!e||e===Si)&&(e=ze),vn(e)){const i=Wt(e,t,!0);return s&&nr(i,s),Ys>0&&!r&&Ve&&(i.shapeFlag&6?Ve[Ve.indexOf(e)]=i:Ve.push(i)),i.patchFlag=-2,i}if(Sd(e)&&(e=e.__vccOpts),t){t=pd(t);let{class:i,style:l}=t;i&&!xe(i)&&(t.class=qt(i)),be(l)&&(Xa(l)&&!ae(l)&&(l=Oe({},l)),t.style=Ya(l))}const o=xe(e)?1:$i(e)?128:pi(e)?64:be(e)?4:le(e)?2:0;return L(e,t,s,n,a,o,r,!0)}function pd(e){return e?Xa(e)||Oi(e)?Oe({},e):e:null}function Wt(e,t,s=!1,n=!1){const{props:a,ref:r,patchFlag:o,children:i,transition:l}=e,c=t?fd(a||{},t):a,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Hi(c),ref:t&&t.ref?s&&r?ae(r)?r.concat(dn(t)):[r,dn(t)]:dn(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ht?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Wt(e.ssContent),ssFallback:e.ssFallback&&Wt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&n&&Gs(d,l.clone(d)),d}function Fn(e=" ",t=0){return He(Bn,null,e,t)}function Qt(e,t){const s=He(cn,null,e);return s.staticCount=t,s}function mt(e){return e==null||typeof e=="boolean"?He(ze):ae(e)?He(ht,null,e.slice()):vn(e)?$t(e):He(Bn,null,String(e))}function $t(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Wt(e)}function nr(e,t){let s=0;const{shapeFlag:n}=e;if(t==null)t=null;else if(ae(t))s=16;else if(typeof t=="object")if(n&65){const a=t.default;a&&(a._c&&(a._d=!1),nr(e,a()),a._c&&(a._d=!0));return}else{s=32;const a=t._;!a&&!Oi(t)?t._ctx=We:a===3&&We&&(We.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else le(t)?(t={default:t,_ctx:We},s=32):(t=String(t),n&64?(s=16,t=[Fn(t)]):s=8);e.children=t,e.shapeFlag|=s}function fd(...e){const t={};for(let s=0;s<e.length;s++){const n=e[s];for(const a in n)if(a==="class")t.class!==n.class&&(t.class=qt([t.class,n.class]));else if(a==="style")t.style=Ya([t.style,n.style]);else if(An(a)){const r=t[a],o=n[a];o&&r!==o&&!(ae(r)&&r.includes(o))&&(t[a]=r?[].concat(r,o):o)}else a!==""&&(t[a]=n[a])}return t}function ut(e,t,s,n=null){ot(e,t,7,[s,n])}const hd=xi();let md=0;function gd(e,t,s){const n=e.type,a=(t?t.appContext:e.appContext)||hd,r={uid:md++,vnode:e,type:n,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ho(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ci(n,a),emitsOptions:Fi(n,a),emit:null,emitted:null,propsDefaults:ge,inheritAttrs:n.inheritAttrs,ctx:ge,data:ge,props:ge,attrs:ge,slots:ge,refs:ge,setupState:ge,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=nd.bind(null,r),e.ce&&e.ce(r),r}let Le=null;const ar=()=>Le||We;let Tn,Oa;{const e=Cn(),t=(s,n)=>{let a;return(a=e[s])||(a=e[s]=[]),a.push(n),r=>{a.length>1?a.forEach(o=>o(r)):a[0](r)}};Tn=t("__VUE_INSTANCE_SETTERS__",s=>Le=s),Oa=t("__VUE_SSR_SETTERS__",s=>js=s)}const Js=e=>{const t=Le;return Tn(e),e.scope.on(),()=>{e.scope.off(),Tn(t)}},Cr=()=>{Le&&Le.scope.off(),Tn(null)};function Gi(e){return e.vnode.shapeFlag&4}let js=!1;function bd(e,t=!1,s=!1){t&&Oa(t);const{props:n,children:a}=e.vnode,r=Gi(e);Yc(e,n,r,t),qc(e,a,s||t);const o=r?_d(e,t):void 0;return t&&Oa(!1),o}function _d(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Ic);const{setup:n}=s;if(n){Rt();const a=e.setupContext=n.length>1?vd(e):null,r=Js(e),o=Vs(n,e,0,[e.props,a]),i=Mo(o);if(Mt(),r(),(i||e.sp)&&!Ls(e)&&yi(e),i){if(o.then(Cr,Cr),t)return o.then(l=>{Rr(e,l)}).catch(l=>{Mn(l,e,0)});e.asyncDep=o}else Rr(e,o)}else Yi(e)}function Rr(e,t,s){le(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:be(t)&&(e.setupState=oi(t)),Yi(e)}function Yi(e,t,s){const n=e.type;e.render||(e.render=n.render||gt);{const a=Js(e);Rt();try{Nc(e)}finally{Mt(),a()}}}const yd={get(e,t){return Me(e,"get",""),e[t]}};function vd(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,yd),slots:e.slots,emit:e.emit,expose:t}}function $n(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(oi(Qa(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in Is)return Is[s](e)},has(t,s){return s in t||s in Is}})):e.proxy}function Td(e,t=!0){return le(e)?e.displayName||e.name:e.name||t&&e.__name}function Sd(e){return le(e)&&"__vccOpts"in e}const qe=(e,t)=>dc(e,t,js);function rr(e,t,s){try{yn(-1);const n=arguments.length;return n===2?be(t)&&!ae(t)?vn(t)?He(e,null,[t]):He(e,t):He(e,null,t):(n>3?s=Array.prototype.slice.call(arguments,2):n===3&&vn(s)&&(s=[s]),He(e,t,s))}finally{yn(1)}}const Ed="3.5.24";let ka;const Mr=typeof window<"u"&&window.trustedTypes;if(Mr)try{ka=Mr.createPolicy("vue",{createHTML:e=>e})}catch{}const ji=ka?e=>ka.createHTML(e):e=>e,wd="http://www.w3.org/2000/svg",xd="http://www.w3.org/1998/Math/MathML",wt=typeof document<"u"?document:null,Lr=wt&&wt.createElement("template"),Ad={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,n)=>{const a=t==="svg"?wt.createElementNS(wd,e):t==="mathml"?wt.createElementNS(xd,e):s?wt.createElement(e,{is:s}):wt.createElement(e);return e==="select"&&n&&n.multiple!=null&&a.setAttribute("multiple",n.multiple),a},createText:e=>wt.createTextNode(e),createComment:e=>wt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>wt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,n,a,r){const o=s?s.previousSibling:t.lastChild;if(a&&(a===r||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),s),!(a===r||!(a=a.nextSibling)););else{Lr.innerHTML=ji(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const i=Lr.content;if(n==="svg"||n==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},Nt="transition",xs="animation",Ks=Symbol("_vtc"),Ki={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Pd=Oe({},fi,Ki),Od=e=>(e.displayName="Transition",e.props=Pd,e),kd=Od((e,{slots:t})=>rr(vc,Cd(e),t)),ss=(e,t=[])=>{ae(e)?e.forEach(s=>s(...t)):e&&e(...t)},Ir=e=>e?ae(e)?e.some(t=>t.length>1):e.length>1:!1;function Cd(e){const t={};for(const P in e)P in Ki||(t[P]=e[P]);if(e.css===!1)return t;const{name:s="v",type:n,duration:a,enterFromClass:r=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:i=`${s}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:d=i,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:m=`${s}-leave-to`}=e,b=Rd(a),h=b&&b[0],g=b&&b[1],{onBeforeEnter:f,onEnter:_,onEnterCancelled:y,onLeave:v,onLeaveCancelled:S,onBeforeAppear:A=f,onAppear:R=_,onAppearCancelled:C=y}=t,x=(P,$,ee,Q)=>{P._enterCancelled=Q,ns(P,$?d:i),ns(P,$?c:o),ee&&ee()},w=(P,$)=>{P._isLeaving=!1,ns(P,u),ns(P,m),ns(P,p),$&&$()},M=P=>($,ee)=>{const Q=P?R:_,Y=()=>x($,P,ee);ss(Q,[$,Y]),Nr(()=>{ns($,P?l:r),St($,P?d:i),Ir(Q)||Dr($,n,h,Y)})};return Oe(t,{onBeforeEnter(P){ss(f,[P]),St(P,r),St(P,o)},onBeforeAppear(P){ss(A,[P]),St(P,l),St(P,c)},onEnter:M(!1),onAppear:M(!0),onLeave(P,$){P._isLeaving=!0;const ee=()=>w(P,$);St(P,u),P._enterCancelled?(St(P,p),$r(P)):($r(P),St(P,p)),Nr(()=>{P._isLeaving&&(ns(P,u),St(P,m),Ir(v)||Dr(P,n,g,ee))}),ss(v,[P,ee])},onEnterCancelled(P){x(P,!1,void 0,!0),ss(y,[P])},onAppearCancelled(P){x(P,!0,void 0,!0),ss(C,[P])},onLeaveCancelled(P){w(P),ss(S,[P])}})}function Rd(e){if(e==null)return null;if(be(e))return[Zn(e.enter),Zn(e.leave)];{const t=Zn(e);return[t,t]}}function Zn(e){return kl(e)}function St(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Ks]||(e[Ks]=new Set)).add(t)}function ns(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.remove(n));const s=e[Ks];s&&(s.delete(t),s.size||(e[Ks]=void 0))}function Nr(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Md=0;function Dr(e,t,s,n){const a=e._endId=++Md,r=()=>{a===e._endId&&n()};if(s!=null)return setTimeout(r,s);const{type:o,timeout:i,propCount:l}=Ld(e,t);if(!o)return n();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),r()},p=m=>{m.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},i+1),e.addEventListener(c,p)}function Ld(e,t){const s=window.getComputedStyle(e),n=b=>(s[b]||"").split(", "),a=n(`${Nt}Delay`),r=n(`${Nt}Duration`),o=Br(a,r),i=n(`${xs}Delay`),l=n(`${xs}Duration`),c=Br(i,l);let d=null,u=0,p=0;t===Nt?o>0&&(d=Nt,u=o,p=r.length):t===xs?c>0&&(d=xs,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?Nt:xs:null,p=d?d===Nt?r.length:l.length:0);const m=d===Nt&&/\b(?:transform|all)(?:,|$)/.test(n(`${Nt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:m}}function Br(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,n)=>Fr(s)+Fr(e[n])))}function Fr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function $r(e){return(e?e.ownerDocument:document).body.offsetHeight}function Id(e,t,s){const n=e[Ks];n&&(t=(t?[t,...n]:[...n]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const Ur=Symbol("_vod"),Nd=Symbol("_vsh"),Dd=Symbol(""),Bd=/(?:^|;)\s*display\s*:/;function Fd(e,t,s){const n=e.style,a=xe(s);let r=!1;if(s&&!a){if(t)if(xe(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();s[i]==null&&un(n,i,"")}else for(const o in t)s[o]==null&&un(n,o,"");for(const o in s)o==="display"&&(r=!0),un(n,o,s[o])}else if(a){if(t!==s){const o=n[Dd];o&&(s+=";"+o),n.cssText=s,r=Bd.test(s)}}else t&&e.removeAttribute("style");Ur in e&&(e[Ur]=r?n.display:"",e[Nd]&&(n.display="none"))}const Hr=/\s*!important$/;function un(e,t,s){if(ae(s))s.forEach(n=>un(e,t,n));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const n=$d(e,t);Hr.test(s)?e.setProperty(Jt(n),s.replace(Hr,""),"important"):e[n]=s}}const Gr=["Webkit","Moz","ms"],ea={};function $d(e,t){const s=ea[t];if(s)return s;let n=tt(t);if(n!=="filter"&&n in e)return ea[t]=n;n=kn(n);for(let a=0;a<Gr.length;a++){const r=Gr[a]+n;if(r in e)return ea[t]=r}return t}const Yr="http://www.w3.org/1999/xlink";function jr(e,t,s,n,a,r=Nl(t)){n&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Yr,t.slice(6,t.length)):e.setAttributeNS(Yr,t,s):s==null||r&&!Do(s)?e.removeAttribute(t):e.setAttribute(t,r?"":_t(s)?String(s):s)}function Kr(e,t,s,n,a){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?ji(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?e.getAttribute("value")||"":e.value,l=s==null?e.type==="checkbox"?"on":"":String(s);(i!==l||!("_value"in e))&&(e.value=l),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const i=typeof e[t];i==="boolean"?s=Do(s):s==null&&i==="string"?(s="",o=!0):i==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(a||t)}function zi(e,t,s,n){e.addEventListener(t,s,n)}function Ud(e,t,s,n){e.removeEventListener(t,s,n)}const zr=Symbol("_vei");function Hd(e,t,s,n,a=null){const r=e[zr]||(e[zr]={}),o=r[t];if(n&&o)o.value=n;else{const[i,l]=Gd(t);if(n){const c=r[t]=Kd(n,a);zi(e,i,c,l)}else o&&(Ud(e,i,o,l),r[t]=void 0)}}const qr=/(?:Once|Passive|Capture)$/;function Gd(e){let t;if(qr.test(e)){t={};let n;for(;n=e.match(qr);)e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Jt(e.slice(2)),t]}let ta=0;const Yd=Promise.resolve(),jd=()=>ta||(Yd.then(()=>ta=0),ta=Date.now());function Kd(e,t){const s=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=s.attached)return;ot(zd(n,s.value),t,5,[n])};return s.value=e,s.attached=jd(),s}function zd(e,t){if(ae(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(n=>a=>!a._stopped&&n&&n(a))}else return t}const Wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,qd=(e,t,s,n,a,r)=>{const o=a==="svg";t==="class"?Id(e,n,o):t==="style"?Fd(e,s,n):An(t)?Ua(t)||Hd(e,t,s,n,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Wd(e,t,n,o))?(Kr(e,t,n),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&jr(e,t,n,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!xe(n))?Kr(e,tt(t),n,r,t):(t==="true-value"?e._trueValue=n:t==="false-value"&&(e._falseValue=n),jr(e,t,n,o))};function Wd(e,t,s,n){if(n)return!!(t==="innerHTML"||t==="textContent"||t in e&&Wr(t)&&le(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return Wr(t)&&xe(s)?!1:t in e}const Vr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ae(t)?s=>on(t,s):t},sa=Symbol("_assign"),Vd={deep:!0,created(e,t,s){e[sa]=Vr(s),zi(e,"change",()=>{const n=e._modelValue,a=Jd(e),r=e.checked,o=e[sa];if(ae(n)){const i=Bo(n,a),l=i!==-1;if(r&&!l)o(n.concat(a));else if(!r&&l){const c=[...n];c.splice(i,1),o(c)}}else if(Pn(n)){const i=new Set(n);r?i.add(a):i.delete(a),o(i)}else o(qi(e,r))})},mounted:Jr,beforeUpdate(e,t,s){e[sa]=Vr(s),Jr(e,t,s)}};function Jr(e,{value:t,oldValue:s},n){e._modelValue=t;let a;if(ae(t))a=Bo(t,n.props.value)>-1;else if(Pn(t))a=t.has(n.props.value);else{if(t===s)return;a=Rn(t,qi(e,!0))}e.checked!==a&&(e.checked=a)}function Jd(e){return"_value"in e?e._value:e.value}function qi(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const Xd=["ctrl","shift","alt","meta"],Qd={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Xd.some(s=>e[`${s}Key`]&&!t.includes(s))},Un=(e,t)=>{const s=e._withMods||(e._withMods={}),n=t.join(".");return s[n]||(s[n]=((a,...r)=>{for(let o=0;o<t.length;o++){const i=Qd[t[o]];if(i&&i(a,t))return}return e(a,...r)}))},Zd={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},At=(e,t)=>{const s=e._withKeys||(e._withKeys={}),n=t.join(".");return s[n]||(s[n]=(a=>{if(!("key"in a))return;const r=Jt(a.key);if(t.some(o=>o===r||Zd[o]===r))return e(a)}))},eu=Oe({patchProp:qd},Ad);let Xr;function tu(){return Xr||(Xr=Vc(eu))}const su=((...e)=>{const t=tu().createApp(...e),{mount:s}=t;return t.mount=n=>{const a=au(n);if(!a)return;const r=t._component;!le(r)&&!r.render&&!r.template&&(r.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=s(a,!1,nu(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t});function nu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function au(e){return xe(e)?document.querySelector(e):e}let Wi;const Hn=e=>Wi=e,Vi=Symbol();function Ca(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Bs;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Bs||(Bs={}));function ru(){const e=Go(!0),t=e.run(()=>Je({}));let s=[],n=[];const a=Qa({install(r){Hn(a),a._a=r,r.provide(Vi,a),r.config.globalProperties.$pinia=a,n.forEach(o=>s.push(o)),n=[]},use(r){return this._a?s.push(r):n.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return a}const Ji=()=>{};function Qr(e,t,s,n=Ji){e.add(t);const a=()=>{e.delete(t)&&n()};return!s&&Yo()&&Bl(a),a}function fs(e,...t){e.forEach(s=>{s(...t)})}const ou=e=>e(),Zr=Symbol(),na=Symbol();function Ra(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,n)=>e.set(n,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const n=t[s],a=e[s];Ca(a)&&Ca(n)&&e.hasOwnProperty(s)&&!we(n)&&!cs(n)?e[s]=Ra(a,n):e[s]=n}return e}const iu=Symbol();function lu(e){return!Ca(e)||!Object.prototype.hasOwnProperty.call(e,iu)}const{assign:Bt}=Object;function cu(e){return!!(we(e)&&e.effect)}function du(e,t,s,n){const{state:a,actions:r,getters:o}=t,i=s.state.value[e];let l;function c(){i||(s.state.value[e]=a?a():{});const d=oc(s.state.value[e]);return Bt(d,r,Object.keys(o||{}).reduce((u,p)=>(u[p]=Qa(qe(()=>{Hn(s);const m=s._s.get(e);return o[p].call(m,m)})),u),{}))}return l=Xi(e,c,t,s,n,!0),l}function Xi(e,t,s={},n,a,r){let o;const i=Bt({actions:{}},s),l={deep:!0};let c,d,u=new Set,p=new Set,m;const b=n.state.value[e];!r&&!b&&(n.state.value[e]={}),Je({});let h;function g(C){let x;c=d=!1,typeof C=="function"?(C(n.state.value[e]),x={type:Bs.patchFunction,storeId:e,events:m}):(Ra(n.state.value[e],C),x={type:Bs.patchObject,payload:C,storeId:e,events:m});const w=h=Symbol();Za().then(()=>{h===w&&(c=!0)}),d=!0,fs(u,x,n.state.value[e])}const f=r?function(){const{state:x}=s,w=x?x():{};this.$patch(M=>{Bt(M,w)})}:Ji;function _(){o.stop(),u.clear(),p.clear(),n._s.delete(e)}const y=(C,x="")=>{if(Zr in C)return C[na]=x,C;const w=function(){Hn(n);const M=Array.from(arguments),P=new Set,$=new Set;function ee(G){P.add(G)}function Q(G){$.add(G)}fs(p,{args:M,name:w[na],store:S,after:ee,onError:Q});let Y;try{Y=C.apply(this&&this.$id===e?this:S,M)}catch(G){throw fs($,G),G}return Y instanceof Promise?Y.then(G=>(fs(P,G),G)).catch(G=>(fs($,G),Promise.reject(G))):(fs(P,Y),Y)};return w[Zr]=!0,w[na]=x,w},v={_p:n,$id:e,$onAction:Qr.bind(null,p),$patch:g,$reset:f,$subscribe(C,x={}){const w=Qr(u,C,x.detached,()=>M()),M=o.run(()=>Ns(()=>n.state.value[e],P=>{(x.flush==="sync"?d:c)&&C({storeId:e,type:Bs.direct,events:m},P)},Bt({},l,x)));return w},$dispose:_},S=kt(v);n._s.set(e,S);const R=(n._a&&n._a.runWithContext||ou)(()=>n._e.run(()=>(o=Go()).run(()=>t({action:y}))));for(const C in R){const x=R[C];if(we(x)&&!cu(x)||cs(x))r||(b&&lu(x)&&(we(x)?x.value=b[C]:Ra(x,b[C])),n.state.value[e][C]=x);else if(typeof x=="function"){const w=y(x,C);R[C]=w,i.actions[C]=x}}return Bt(S,R),Bt(ue(S),R),Object.defineProperty(S,"$state",{get:()=>n.state.value[e],set:C=>{g(x=>{Bt(x,C)})}}),n._p.forEach(C=>{Bt(S,o.run(()=>C({store:S,app:n._a,pinia:n,options:i})))}),b&&r&&s.hydrate&&s.hydrate(S.$state,b),c=!0,d=!0,S}function uu(e,t,s){let n;const a=typeof t=="function";n=a?s:t;function r(o,i){const l=Gc();return o=o||(l?et(Vi,null):null),o&&Hn(o),o=Wi,o._s.has(e)||(a?Xi(e,t,n,o):du(e,n,o)),o._s.get(e)}return r.$id=e,r}const gs=typeof document<"u";function Qi(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function pu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Qi(e.default)}const pe=Object.assign;function aa(e,t){const s={};for(const n in t){const a=t[n];s[n]=it(a)?a.map(e):e(a)}return s}const Fs=()=>{},it=Array.isArray;function eo(e,t){const s={};for(const n in e)s[n]=n in t?t[n]:e[n];return s}const Zi=/#/g,fu=/&/g,hu=/\//g,mu=/=/g,gu=/\?/g,el=/\+/g,bu=/%5B/g,_u=/%5D/g,tl=/%5E/g,yu=/%60/g,sl=/%7B/g,vu=/%7C/g,nl=/%7D/g,Tu=/%20/g;function or(e){return e==null?"":encodeURI(""+e).replace(vu,"|").replace(bu,"[").replace(_u,"]")}function Su(e){return or(e).replace(sl,"{").replace(nl,"}").replace(tl,"^")}function Ma(e){return or(e).replace(el,"%2B").replace(Tu,"+").replace(Zi,"%23").replace(fu,"%26").replace(yu,"`").replace(sl,"{").replace(nl,"}").replace(tl,"^")}function Eu(e){return Ma(e).replace(mu,"%3D")}function wu(e){return or(e).replace(Zi,"%23").replace(gu,"%3F")}function xu(e){return wu(e).replace(hu,"%2F")}function zs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Au=/\/$/,Pu=e=>e.replace(Au,"");function ra(e,t,s="/"){let n,a={},r="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(n=t.slice(0,l),r=t.slice(l,i>0?i:t.length),a=e(r.slice(1))),i>=0&&(n=n||t.slice(0,i),o=t.slice(i,t.length)),n=Ru(n??t,s),{fullPath:n+r+o,path:n,query:a,hash:zs(o)}}function Ou(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function to(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function ku(e,t,s){const n=t.matched.length-1,a=s.matched.length-1;return n>-1&&n===a&&vs(t.matched[n],s.matched[a])&&al(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function vs(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function al(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Cu(e[s],t[s]))return!1;return!0}function Cu(e,t){return it(e)?so(e,t):it(t)?so(t,e):e===t}function so(e,t){return it(t)?e.length===t.length&&e.every((s,n)=>s===t[n]):e.length===1&&e[0]===t}function Ru(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),n=e.split("/"),a=n[n.length-1];(a===".."||a===".")&&n.push("");let r=s.length-1,o,i;for(o=0;o<n.length;o++)if(i=n[o],i!==".")if(i==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+n.slice(o).join("/")}const Dt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let La=(function(e){return e.pop="pop",e.push="push",e})({}),oa=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Mu(e){if(!e)if(gs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Pu(e)}const Lu=/^[^#]+#/;function Iu(e,t){return e.replace(Lu,"#")+t}function Nu(e,t){const s=document.documentElement.getBoundingClientRect(),n=e.getBoundingClientRect();return{behavior:t.behavior,left:n.left-s.left-(t.left||0),top:n.top-s.top-(t.top||0)}}const Gn=()=>({left:window.scrollX,top:window.scrollY});function Du(e){let t;if("el"in e){const s=e.el,n=typeof s=="string"&&s.startsWith("#"),a=typeof s=="string"?n?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!a)return;t=Nu(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function no(e,t){return(history.state?history.state.position-t:-1)+e}const Ia=new Map;function Bu(e,t){Ia.set(e,t)}function Fu(e){const t=Ia.get(e);return Ia.delete(e),t}function $u(e){return typeof e=="string"||e&&typeof e=="object"}function rl(e){return typeof e=="string"||typeof e=="symbol"}let Ee=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ol=Symbol("");Ee.MATCHER_NOT_FOUND+"",Ee.NAVIGATION_GUARD_REDIRECT+"",Ee.NAVIGATION_ABORTED+"",Ee.NAVIGATION_CANCELLED+"",Ee.NAVIGATION_DUPLICATED+"";function Ts(e,t){return pe(new Error,{type:e,[ol]:!0},t)}function Et(e,t){return e instanceof Error&&ol in e&&(t==null||!!(e.type&t))}const Uu=["params","query","hash"];function Hu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of Uu)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function Gu(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let n=0;n<s.length;++n){const a=s[n].replace(el," "),r=a.indexOf("="),o=zs(r<0?a:a.slice(0,r)),i=r<0?null:zs(a.slice(r+1));if(o in t){let l=t[o];it(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function ao(e){let t="";for(let s in e){const n=e[s];if(s=Eu(s),n==null){n!==void 0&&(t+=(t.length?"&":"")+s);continue}(it(n)?n.map(a=>a&&Ma(a)):[n&&Ma(n)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+s,a!=null&&(t+="="+a))})}return t}function Yu(e){const t={};for(const s in e){const n=e[s];n!==void 0&&(t[s]=it(n)?n.map(a=>a==null?null:""+a):n==null?n:""+n)}return t}const ju=Symbol(""),ro=Symbol(""),Yn=Symbol(""),ir=Symbol(""),Na=Symbol("");function As(){let e=[];function t(n){return e.push(n),()=>{const a=e.indexOf(n);a>-1&&e.splice(a,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function Ut(e,t,s,n,a,r=o=>o()){const o=n&&(n.enterCallbacks[a]=n.enterCallbacks[a]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Ts(Ee.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?l(p):$u(p)?l(Ts(Ee.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&n.enterCallbacks[a]===o&&typeof p=="function"&&o.push(p),i())},d=r(()=>e.call(n&&n.instances[a],t,s,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function ia(e,t,s,n,a=r=>r()){const r=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(Qi(l)){const c=(l.__vccOpts||l)[t];c&&r.push(Ut(c,s,n,o,i,a))}else{let c=l();r.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=pu(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&Ut(p,s,n,o,i,a)()}))}}return r}function Ku(e,t){const s=[],n=[],a=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const i=t.matched[o];i&&(e.matched.find(c=>vs(c,i))?n.push(i):s.push(i));const l=e.matched[o];l&&(t.matched.find(c=>vs(c,l))||a.push(l))}return[s,n,a]}let zu=()=>location.protocol+"//"+location.host;function il(e,t){const{pathname:s,search:n,hash:a}=t,r=e.indexOf("#");if(r>-1){let o=a.includes(e.slice(r))?e.slice(r).length:1,i=a.slice(o);return i[0]!=="/"&&(i="/"+i),to(i,"")}return to(s,e)+n+a}function qu(e,t,s,n){let a=[],r=[],o=null;const i=({state:p})=>{const m=il(e,location),b=s.value,h=t.value;let g=0;if(p){if(s.value=m,t.value=p,o&&o===b){o=null;return}g=h?p.position-h.position:0}else n(m);a.forEach(f=>{f(s.value,b,{delta:g,type:La.pop,direction:g?g>0?oa.forward:oa.back:oa.unknown})})};function l(){o=s.value}function c(p){a.push(p);const m=()=>{const b=a.indexOf(p);b>-1&&a.splice(b,1)};return r.push(m),m}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(pe({},p.state,{scroll:Gn()}),"")}}function u(){for(const p of r)p();r=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function oo(e,t,s,n=!1,a=!1){return{back:e,current:t,forward:s,replaced:n,position:window.history.length,scroll:a?Gn():null}}function Wu(e){const{history:t,location:s}=window,n={value:il(e,s)},a={value:t.state};a.value||r(n.value,{back:null,current:n.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(l,c,d){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+l:zu()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),a.value=c}catch(m){console.error(m),s[d?"replace":"assign"](p)}}function o(l,c){r(l,pe({},t.state,oo(a.value.back,l,a.value.forward,!0),c,{position:a.value.position}),!0),n.value=l}function i(l,c){const d=pe({},a.value,t.state,{forward:l,scroll:Gn()});r(d.current,d,!0),r(l,pe({},oo(n.value,l,null),{position:d.position+1},c),!1),n.value=l}return{location:n,state:a,push:i,replace:o}}function Vu(e){e=Mu(e);const t=Wu(e),s=qu(e,t.state,t.location,t.replace);function n(r,o=!0){o||s.pauseListeners(),history.go(r)}const a=pe({location:"",base:e,go:n,createHref:Iu.bind(null,e)},t,s);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function Ju(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Vu(e)}let is=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ae=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ae||{});const Xu={type:is.Static,value:""},Qu=/[a-zA-Z0-9_]/;function Zu(e){if(!e)return[[]];if(e==="/")return[[Xu]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${s})/"${c}": ${m}`)}let s=Ae.Static,n=s;const a=[];let r;function o(){r&&a.push(r),r=[]}let i=0,l,c="",d="";function u(){c&&(s===Ae.Static?r.push({type:is.Static,value:c}):s===Ae.Param||s===Ae.ParamRegExp||s===Ae.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:is.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&s!==Ae.ParamRegExp){n=s,s=Ae.EscapeNext;continue}switch(s){case Ae.Static:l==="/"?(c&&u(),o()):l===":"?(u(),s=Ae.Param):p();break;case Ae.EscapeNext:p(),s=n;break;case Ae.Param:l==="("?s=Ae.ParamRegExp:Qu.test(l)?p():(u(),s=Ae.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Ae.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:s=Ae.ParamRegExpEnd:d+=l;break;case Ae.ParamRegExpEnd:u(),s=Ae.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return s===Ae.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),a}const io="[^/]+?",ep={sensitive:!1,strict:!1,start:!0,end:!0};var Ne=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ne||{});const tp=/[.+*?^${}()[\]/\\]/g;function sp(e,t){const s=pe({},ep,t),n=[];let a=s.start?"^":"";const r=[];for(const c of e){const d=c.length?[]:[Ne.Root];s.strict&&!c.length&&(a+="/");for(let u=0;u<c.length;u++){const p=c[u];let m=Ne.Segment+(s.sensitive?Ne.BonusCaseSensitive:0);if(p.type===is.Static)u||(a+="/"),a+=p.value.replace(tp,"\\$&"),m+=Ne.Static;else if(p.type===is.Param){const{value:b,repeatable:h,optional:g,regexp:f}=p;r.push({name:b,repeatable:h,optional:g});const _=f||io;if(_!==io){m+=Ne.BonusCustomRegExp;try{`${_}`}catch(v){throw new Error(`Invalid custom RegExp for param "${b}" (${_}): `+v.message)}}let y=h?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;u||(y=g&&c.length<2?`(?:/${y})`:"/"+y),g&&(y+="?"),a+=y,m+=Ne.Dynamic,g&&(m+=Ne.BonusOptional),h&&(m+=Ne.BonusRepeatable),_===".*"&&(m+=Ne.BonusWildcard)}d.push(m)}n.push(d)}if(s.strict&&s.end){const c=n.length-1;n[c][n[c].length-1]+=Ne.BonusStrict}s.strict||(a+="/?"),s.end?a+="$":s.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const o=new RegExp(a,s.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const m=d[p]||"",b=r[p-1];u[b.name]=m&&b.repeatable?m.split("/"):m}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const m of p)if(m.type===is.Static)d+=m.value;else if(m.type===is.Param){const{value:b,repeatable:h,optional:g}=m,f=b in c?c[b]:"";if(it(f)&&!h)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const _=it(f)?f.join("/"):f;if(!_)if(g)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${b}"`);d+=_}}return d||"/"}return{re:o,score:n,keys:r,parse:i,stringify:l}}function np(e,t){let s=0;for(;s<e.length&&s<t.length;){const n=t[s]-e[s];if(n)return n;s++}return e.length<t.length?e.length===1&&e[0]===Ne.Static+Ne.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ne.Static+Ne.Segment?1:-1:0}function ll(e,t){let s=0;const n=e.score,a=t.score;for(;s<n.length&&s<a.length;){const r=np(n[s],a[s]);if(r)return r;s++}if(Math.abs(a.length-n.length)===1){if(lo(n))return 1;if(lo(a))return-1}return a.length-n.length}function lo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const ap={strict:!1,end:!0,sensitive:!1};function rp(e,t,s){const n=sp(Zu(e.path),s),a=pe(n,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function op(e,t){const s=[],n=new Map;t=eo(ap,t);function a(u){return n.get(u)}function r(u,p,m){const b=!m,h=uo(u);h.aliasOf=m&&m.record;const g=eo(t,u),f=[h];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of v)f.push(uo(pe({},h,{components:m?m.record.components:h.components,path:S,aliasOf:m?m.record:h})))}let _,y;for(const v of f){const{path:S}=v;if(p&&S[0]!=="/"){const A=p.record.path,R=A[A.length-1]==="/"?"":"/";v.path=p.record.path+(S&&R+S)}if(_=rp(v,p,g),m?m.alias.push(_):(y=y||_,y!==_&&y.alias.push(_),b&&u.name&&!po(_)&&o(u.name)),cl(_)&&l(_),h.children){const A=h.children;for(let R=0;R<A.length;R++)r(A[R],_,m&&m.children[R])}m=m||_}return y?()=>{o(y)}:Fs}function o(u){if(rl(u)){const p=n.get(u);p&&(n.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&n.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return s}function l(u){const p=cp(u,s);s.splice(p,0,u),u.record.name&&!po(u)&&n.set(u.record.name,u)}function c(u,p){let m,b={},h,g;if("name"in u&&u.name){if(m=n.get(u.name),!m)throw Ts(Ee.MATCHER_NOT_FOUND,{location:u});g=m.record.name,b=pe(co(p.params,m.keys.filter(y=>!y.optional).concat(m.parent?m.parent.keys.filter(y=>y.optional):[]).map(y=>y.name)),u.params&&co(u.params,m.keys.map(y=>y.name))),h=m.stringify(b)}else if(u.path!=null)h=u.path,m=s.find(y=>y.re.test(h)),m&&(b=m.parse(h),g=m.record.name);else{if(m=p.name?n.get(p.name):s.find(y=>y.re.test(p.path)),!m)throw Ts(Ee.MATCHER_NOT_FOUND,{location:u,currentLocation:p});g=m.record.name,b=pe({},p.params,u.params),h=m.stringify(b)}const f=[];let _=m;for(;_;)f.unshift(_.record),_=_.parent;return{name:g,path:h,params:b,matched:f,meta:lp(f)}}e.forEach(u=>r(u));function d(){s.length=0,n.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:a}}function co(e,t){const s={};for(const n of t)n in e&&(s[n]=e[n]);return s}function uo(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:ip(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ip(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const n in e.components)t[n]=typeof s=="object"?s[n]:s;return t}function po(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function lp(e){return e.reduce((t,s)=>pe(t,s.meta),{})}function cp(e,t){let s=0,n=t.length;for(;s!==n;){const r=s+n>>1;ll(e,t[r])<0?n=r:s=r+1}const a=dp(e);return a&&(n=t.lastIndexOf(a,n-1)),n}function dp(e){let t=e;for(;t=t.parent;)if(cl(t)&&ll(e,t)===0)return t}function cl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function fo(e){const t=et(Yn),s=et(ir),n=qe(()=>{const l=Kt(e.to);return t.resolve(l)}),a=qe(()=>{const{matched:l}=n.value,{length:c}=l,d=l[c-1],u=s.matched;if(!d||!u.length)return-1;const p=u.findIndex(vs.bind(null,d));if(p>-1)return p;const m=ho(l[c-2]);return c>1&&ho(d)===m&&u[u.length-1].path!==m?u.findIndex(vs.bind(null,l[c-2])):p}),r=qe(()=>a.value>-1&&mp(s.params,n.value.params)),o=qe(()=>a.value>-1&&a.value===s.matched.length-1&&al(s.params,n.value.params));function i(l={}){if(hp(l)){const c=t[Kt(e.replace)?"replace":"push"](Kt(e.to)).catch(Fs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:n,href:qe(()=>n.value.href),isActive:r,isExactActive:o,navigate:i}}function up(e){return e.length===1?e[0]:e}const pp=_i({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:fo,setup(e,{slots:t}){const s=kt(fo(e)),{options:n}=et(Yn),a=qe(()=>({[mo(e.activeClass,n.linkActiveClass,"router-link-active")]:s.isActive,[mo(e.exactActiveClass,n.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&up(t.default(s));return e.custom?r:rr("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:a.value},r)}}}),fp=pp;function hp(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function mp(e,t){for(const s in t){const n=t[s],a=e[s];if(typeof n=="string"){if(n!==a)return!1}else if(!it(a)||a.length!==n.length||n.some((r,o)=>r!==a[o]))return!1}return!0}function ho(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const mo=(e,t,s)=>e??t??s,gp=_i({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const n=et(Na),a=qe(()=>e.route||n.value),r=et(ro,0),o=qe(()=>{let c=Kt(r);const{matched:d}=a.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=qe(()=>a.value.matched[o.value]);ln(ro,qe(()=>o.value+1)),ln(ju,i),ln(Na,a);const l=Je();return Ns(()=>[l.value,i.value,e.name],([c,d,u],[p,m,b])=>{d&&(d.instances[u]=c,m&&m!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=m.leaveGuards),d.updateGuards.size||(d.updateGuards=m.updateGuards))),c&&d&&(!m||!vs(d,m)||!p)&&(d.enterCallbacks[u]||[]).forEach(h=>h(c))},{flush:"post"}),()=>{const c=a.value,d=e.name,u=i.value,p=u&&u.components[d];if(!p)return go(s.default,{Component:p,route:c});const m=u.props[d],b=m?m===!0?c.params:typeof m=="function"?m(c):m:null,g=rr(p,pe({},b,t,{onVnodeUnmounted:f=>{f.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return go(s.default,{Component:g,route:c})||g}}});function go(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const dl=gp;function bp(e){const t=op(e.routes,e),s=e.parseQuery||Gu,n=e.stringifyQuery||ao,a=e.history,r=As(),o=As(),i=As(),l=nc(Dt);let c=Dt;gs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=aa.bind(null,I=>""+I),u=aa.bind(null,xu),p=aa.bind(null,zs);function m(I,j){let q,Z;return rl(I)?(q=t.getRecordMatcher(I),Z=j):Z=I,t.addRoute(Z,q)}function b(I){const j=t.getRecordMatcher(I);j&&t.removeRoute(j)}function h(){return t.getRoutes().map(I=>I.record)}function g(I){return!!t.getRecordMatcher(I)}function f(I,j){if(j=pe({},j||l.value),typeof I=="string"){const O=ra(s,I,j.path),D=t.resolve({path:O.path},j),B=a.createHref(O.fullPath);return pe(O,D,{params:p(D.params),hash:zs(O.hash),redirectedFrom:void 0,href:B})}let q;if(I.path!=null)q=pe({},I,{path:ra(s,I.path,j.path).path});else{const O=pe({},I.params);for(const D in O)O[D]==null&&delete O[D];q=pe({},I,{params:u(O)}),j.params=u(j.params)}const Z=t.resolve(q,j),ce=I.hash||"";Z.params=d(p(Z.params));const T=Ou(n,pe({},I,{hash:Su(ce),path:Z.path})),E=a.createHref(T);return pe({fullPath:T,hash:ce,query:n===ao?Yu(I.query):I.query||{}},Z,{redirectedFrom:void 0,href:E})}function _(I){return typeof I=="string"?ra(s,I,l.value.path):pe({},I)}function y(I,j){if(c!==I)return Ts(Ee.NAVIGATION_CANCELLED,{from:j,to:I})}function v(I){return R(I)}function S(I){return v(pe(_(I),{replace:!0}))}function A(I,j){const q=I.matched[I.matched.length-1];if(q&&q.redirect){const{redirect:Z}=q;let ce=typeof Z=="function"?Z(I,j):Z;return typeof ce=="string"&&(ce=ce.includes("?")||ce.includes("#")?ce=_(ce):{path:ce},ce.params={}),pe({query:I.query,hash:I.hash,params:ce.path!=null?{}:I.params},ce)}}function R(I,j){const q=c=f(I),Z=l.value,ce=I.state,T=I.force,E=I.replace===!0,O=A(q,Z);if(O)return R(pe(_(O),{state:typeof O=="object"?pe({},ce,O.state):ce,force:T,replace:E}),j||q);const D=q;D.redirectedFrom=j;let B;return!T&&ku(n,Z,q)&&(B=Ts(Ee.NAVIGATION_DUPLICATED,{to:D,from:Z}),re(Z,Z,!0,!1)),(B?Promise.resolve(B):w(D,Z)).catch(N=>Et(N)?Et(N,Ee.NAVIGATION_GUARD_REDIRECT)?N:W(N):U(N,D,Z)).then(N=>{if(N){if(Et(N,Ee.NAVIGATION_GUARD_REDIRECT))return R(pe({replace:E},_(N.to),{state:typeof N.to=="object"?pe({},ce,N.to.state):ce,force:T}),j||D)}else N=P(D,Z,!0,E,ce);return M(D,Z,N),N})}function C(I,j){const q=y(I,j);return q?Promise.reject(q):Promise.resolve()}function x(I){const j=_e.values().next().value;return j&&typeof j.runWithContext=="function"?j.runWithContext(I):I()}function w(I,j){let q;const[Z,ce,T]=Ku(I,j);q=ia(Z.reverse(),"beforeRouteLeave",I,j);for(const O of Z)O.leaveGuards.forEach(D=>{q.push(Ut(D,I,j))});const E=C.bind(null,I,j);return q.push(E),me(q).then(()=>{q=[];for(const O of r.list())q.push(Ut(O,I,j));return q.push(E),me(q)}).then(()=>{q=ia(ce,"beforeRouteUpdate",I,j);for(const O of ce)O.updateGuards.forEach(D=>{q.push(Ut(D,I,j))});return q.push(E),me(q)}).then(()=>{q=[];for(const O of T)if(O.beforeEnter)if(it(O.beforeEnter))for(const D of O.beforeEnter)q.push(Ut(D,I,j));else q.push(Ut(O.beforeEnter,I,j));return q.push(E),me(q)}).then(()=>(I.matched.forEach(O=>O.enterCallbacks={}),q=ia(T,"beforeRouteEnter",I,j,x),q.push(E),me(q))).then(()=>{q=[];for(const O of o.list())q.push(Ut(O,I,j));return q.push(E),me(q)}).catch(O=>Et(O,Ee.NAVIGATION_CANCELLED)?O:Promise.reject(O))}function M(I,j,q){i.list().forEach(Z=>x(()=>Z(I,j,q)))}function P(I,j,q,Z,ce){const T=y(I,j);if(T)return T;const E=j===Dt,O=gs?history.state:{};q&&(Z||E?a.replace(I.fullPath,pe({scroll:E&&O&&O.scroll},ce)):a.push(I.fullPath,ce)),l.value=I,re(I,j,q,E),W()}let $;function ee(){$||($=a.listen((I,j,q)=>{if(!ke.listening)return;const Z=f(I),ce=A(Z,ke.currentRoute.value);if(ce){R(pe(ce,{replace:!0,force:!0}),Z).catch(Fs);return}c=Z;const T=l.value;gs&&Bu(no(T.fullPath,q.delta),Gn()),w(Z,T).catch(E=>Et(E,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_CANCELLED)?E:Et(E,Ee.NAVIGATION_GUARD_REDIRECT)?(R(pe(_(E.to),{force:!0}),Z).then(O=>{Et(O,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&!q.delta&&q.type===La.pop&&a.go(-1,!1)}).catch(Fs),Promise.reject()):(q.delta&&a.go(-q.delta,!1),U(E,Z,T))).then(E=>{E=E||P(Z,T,!1),E&&(q.delta&&!Et(E,Ee.NAVIGATION_CANCELLED)?a.go(-q.delta,!1):q.type===La.pop&&Et(E,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),M(Z,T,E)}).catch(Fs)}))}let Q=As(),Y=As(),G;function U(I,j,q){W(I);const Z=Y.list();return Z.length?Z.forEach(ce=>ce(I,j,q)):console.error(I),Promise.reject(I)}function se(){return G&&l.value!==Dt?Promise.resolve():new Promise((I,j)=>{Q.add([I,j])})}function W(I){return G||(G=!I,ee(),Q.list().forEach(([j,q])=>I?q(I):j()),Q.reset()),I}function re(I,j,q,Z){const{scrollBehavior:ce}=e;if(!gs||!ce)return Promise.resolve();const T=!q&&Fu(no(I.fullPath,0))||(Z||!q)&&history.state&&history.state.scroll||null;return Za().then(()=>ce(I,j,T)).then(E=>E&&Du(E)).catch(E=>U(E,I,j))}const te=I=>a.go(I);let Pe;const _e=new Set,ke={currentRoute:l,listening:!0,addRoute:m,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:g,getRoutes:h,resolve:f,options:e,push:v,replace:S,go:te,back:()=>te(-1),forward:()=>te(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:Y.add,isReady:se,install(I){I.component("RouterLink",fp),I.component("RouterView",dl),I.config.globalProperties.$router=ke,Object.defineProperty(I.config.globalProperties,"$route",{enumerable:!0,get:()=>Kt(l)}),gs&&!Pe&&l.value===Dt&&(Pe=!0,v(a.location).catch(Z=>{}));const j={};for(const Z in Dt)Object.defineProperty(j,Z,{get:()=>l.value[Z],enumerable:!0});I.provide(Yn,ke),I.provide(ir,ai(j)),I.provide(Na,l);const q=I.unmount;_e.add(I),I.unmount=function(){_e.delete(I),_e.size<1&&(c=Dt,$&&$(),$=null,l.value=Dt,Pe=!1,G=!1),q()}}};function me(I){return I.reduce((j,q)=>j.then(()=>x(q)),Promise.resolve())}return ke}function vt(){return et(Yn)}function ul(e){return et(ir)}var _p=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function yp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Os={exports:{}},vp=Os.exports,bo;function Tp(){return bo||(bo=1,(function(e,t){(function(s,n){var a={};s.PubSub?(a=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=a,n(a)),e!==void 0&&e.exports&&(t=e.exports=a),t.PubSub=a,e.exports=t=a})(typeof window=="object"&&window||vp||_p,function(s){var n={},a=-1,r="*";function o(h){var g;for(g in h)if(Object.prototype.hasOwnProperty.call(h,g))return!0;return!1}function i(h){return function(){throw h}}function l(h,g,f){try{h(g,f)}catch(_){setTimeout(i(_),0)}}function c(h,g,f){h(g,f)}function d(h,g,f,_){var y=n[g],v=_?c:l,S;if(Object.prototype.hasOwnProperty.call(n,g))for(S in y)Object.prototype.hasOwnProperty.call(y,S)&&v(y[S],h,f)}function u(h,g,f){return function(){var y=String(h),v=y.lastIndexOf(".");for(d(h,h,g,f);v!==-1;)y=y.substr(0,v),v=y.lastIndexOf("."),d(h,y,g,f);d(h,r,g,f)}}function p(h){var g=String(h),f=!!(Object.prototype.hasOwnProperty.call(n,g)&&o(n[g]));return f}function m(h){for(var g=String(h),f=p(g)||p(r),_=g.lastIndexOf(".");!f&&_!==-1;)g=g.substr(0,_),_=g.lastIndexOf("."),f=p(g);return f}function b(h,g,f,_){h=typeof h=="symbol"?h.toString():h;var y=u(h,g,_),v=m(h);return v?(f===!0?y():setTimeout(y,0),!0):!1}s.publish=function(h,g){return b(h,g,!1,s.immediateExceptions)},s.publishSync=function(h,g){return b(h,g,!0,s.immediateExceptions)},s.subscribe=function(h,g){if(typeof g!="function")return!1;h=typeof h=="symbol"?h.toString():h,Object.prototype.hasOwnProperty.call(n,h)||(n[h]={});var f="uid_"+String(++a);return n[h][f]=g,f},s.subscribeAll=function(h){return s.subscribe(r,h)},s.subscribeOnce=function(h,g){var f=s.subscribe(h,function(){s.unsubscribe(f),g.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){n={}},s.clearSubscriptions=function(g){var f;for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(g)===0&&delete n[f]},s.countSubscriptions=function(g){var f,_,y=0;for(f in n)if(Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(g)===0){for(_ in n[f])y++;break}return y},s.getSubscriptions=function(g){var f,_=[];for(f in n)Object.prototype.hasOwnProperty.call(n,f)&&f.indexOf(g)===0&&_.push(f);return _},s.unsubscribe=function(h){var g=function(C){var x;for(x in n)if(Object.prototype.hasOwnProperty.call(n,x)&&x.indexOf(C)===0)return!0;return!1},f=typeof h=="string"&&(Object.prototype.hasOwnProperty.call(n,h)||g(h)),_=!f&&typeof h=="string",y=typeof h=="function",v=!1,S,A,R;if(f){s.clearSubscriptions(h);return}for(S in n)if(Object.prototype.hasOwnProperty.call(n,S)){if(A=n[S],_&&A[h]){delete A[h],v=h;break}if(y)for(R in A)Object.prototype.hasOwnProperty.call(A,R)&&A[R]===h&&(delete A[R],v=!0)}return v}})})(Os,Os.exports)),Os.exports}var Sp=Tp();const J=yp(Sp);let zt=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Ep={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Vt(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function wp(e,t){let s;const n=()=>{if(s)return s;const a=indexedDB.open(e);return a.onupgradeneeded=()=>a.result.createObjectStore(t),s=Vt(a),s.then(r=>{r.onclose=()=>s=void 0},()=>{}),s};return(a,r)=>n().then(o=>r(o.transaction(t,a).objectStore(t)))}let la;function Xs(){return la||(la=wp("keyval-store","keyval")),la}function xp(e,t=Xs()){return t("readonly",s=>Vt(s.get(e)))}function _o(e,t,s=Xs()){return s("readwrite",n=>(n.put(t,e),Vt(n.transaction)))}function ca(e,t=Xs()){return t("readwrite",s=>(s.delete(e),Vt(s.transaction)))}function pl(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Vt(e.transaction)}function hs(e=Xs()){return e("readonly",t=>{if(t.getAllKeys)return Vt(t.getAllKeys());const s=[];return pl(t,n=>s.push(n.key)).then(()=>s)})}function Ap(e=Xs()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Vt(t.getAllKeys()),Vt(t.getAll())]).then(([n,a])=>n.map((r,o)=>[r,a[o]]));const s=[];return e("readonly",n=>pl(n,a=>s.push([a.key,a.value])).then(()=>s))})}const Ss=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Sn=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!Sn(e[s],t[s]))return!1;return!0}if(Ss(e)&&Ss(t)){const s=Object.entries(e),n=new Set(Object.keys(t));if(s.length!==n.size)return!1;for(const[a,r]of s){if(!Sn(r,t[a]))return!1;n.delete(a)}return n.size===0}return!1},sn=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ss(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Pp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",yo=e=>e>="0"&&e<="9"||e==="-",Op=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var k;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(k||(k={}));const vo={"(":k.TOK_LPAREN,")":k.TOK_RPAREN,"*":k.TOK_STAR,",":k.TOK_COMMA,".":k.TOK_DOT,":":k.TOK_COLON,"@":k.TOK_CURRENT,$:k.TOK_ROOT,"]":k.TOK_RBRACKET,"{":k.TOK_LBRACE,"}":k.TOK_RBRACE},kp={"!":!0,"<":!0,"=":!0,">":!0},Cp={"	":!0,"\n":!0,"\r":!0," ":!0};class Rp{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let n,a,r;for(;this._current<t.length;)if(Pp(t[this._current]))n=this._current,a=this.consumeUnquotedIdentifier(t),s.push({start:n,type:k.TOK_UNQUOTEDIDENTIFIER,value:a});else if(vo[t[this._current]]!==void 0)s.push({start:this._current,type:vo[t[this._current]],value:t[this._current]}),this._current+=1;else if(yo(t[this._current]))r=this.consumeNumber(t),s.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),s.push(r);else if(t[this._current]==='"')n=this._current,a=this.consumeQuotedIdentifier(t),s.push({start:n,type:k.TOK_QUOTEDIDENTIFIER,value:a});else if(t[this._current]==="'")n=this._current,a=this.consumeRawStringLiteral(t),s.push({start:n,type:k.TOK_LITERAL,value:a});else if(t[this._current]==="`"){n=this._current;const o=this.consumeLiteral(t);s.push({start:n,type:k.TOK_LITERAL,value:o})}else if(kp[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&s.push(r);else if(Cp[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")n=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:n,type:k.TOK_AND,value:"&&"})):s.push({start:n,type:k.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")n=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:n,type:k.TOK_OR,value:"||"})):s.push({start:n,type:k.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&Op(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const n=t.length;for(;t[this._current]!=='"'&&this._current<n;){let a=this._current;t[a]==="\\"&&(t[a+1]==="\\"||t[a+1]==='"')?a+=2:a+=1,this._current=a}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const n=t.length;for(;t[this._current]!=="'"&&this._current<n;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const n=t.length;for(;yo(t[this._current])&&this._current<n;)this._current+=1;const a=parseInt(t.slice(s,this._current),10);return{start:s,value:a,type:k.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:k.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:k.TOK_FLATTEN,value:"[]"}):{start:s,type:k.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,n=t[s];if(this._current+=1,n==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:k.TOK_NE,value:"!="}):{start:s,type:k.TOK_NOT,value:"!"};if(n==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:k.TOK_LTE,value:"<="}):{start:s,type:k.TOK_LT,value:"<"};if(n===">")return t[this._current]==="="?(this._current+=1,{start:s,type:k.TOK_GTE,value:">="}):{start:s,type:k.TOK_GT,value:">"};if(n==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:k.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,n=t.length;for(;t[this._current]!=="`"&&this._current<n;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let a=t.slice(s,this._current).trimLeft();a=a.replace("\\`","`");const r=this.looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"${a}"`);return this._current+=1,r}looksLikeJSON(t){const n=["true","false","null"],a="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||n.includes(t))return!0;if(a.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const fl=new Rp,Ce={[k.TOK_EOF]:0,[k.TOK_UNQUOTEDIDENTIFIER]:0,[k.TOK_QUOTEDIDENTIFIER]:0,[k.TOK_RBRACKET]:0,[k.TOK_RPAREN]:0,[k.TOK_COMMA]:0,[k.TOK_RBRACE]:0,[k.TOK_NUMBER]:0,[k.TOK_CURRENT]:0,[k.TOK_EXPREF]:0,[k.TOK_ROOT]:0,[k.TOK_PIPE]:1,[k.TOK_OR]:2,[k.TOK_AND]:3,[k.TOK_EQ]:5,[k.TOK_GT]:5,[k.TOK_LT]:5,[k.TOK_GTE]:5,[k.TOK_LTE]:5,[k.TOK_NE]:5,[k.TOK_FLATTEN]:9,[k.TOK_STAR]:20,[k.TOK_FILTER]:21,[k.TOK_DOT]:40,[k.TOK_NOT]:45,[k.TOK_LBRACE]:50,[k.TOK_LBRACKET]:55,[k.TOK_LPAREN]:60};class Mp{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==k.TOK_EOF){const n=this.lookaheadToken(0);this.errorToken(n,`Unexpected token type: ${n.type}, value: ${n.value}`)}return s}loadTokens(t){this.tokens=[...fl.tokenize(t),{type:k.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let n=this.nud(s),a=this.lookahead(0);for(;t<Ce[a];)this.advance(),n=this.led(a,n),a=this.lookahead(0);return n}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,n,a;switch(t.type){case k.TOK_LITERAL:return{type:"Literal",value:t.value};case k.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case k.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===k.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case k.TOK_NOT:return n=this.expression(Ce.Not),{type:"NotExpression",children:[n]};case k.TOK_STAR:return s={type:"Identity"},n=this.lookahead(0)===k.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Ce.Star),{type:"ValueProjection",children:[s,n]};case k.TOK_FILTER:return this.led(t.type,{type:"Identity"});case k.TOK_LBRACE:return this.parseMultiselectHash();case k.TOK_FLATTEN:return s={type:k.TOK_FLATTEN,children:[{type:"Identity"}]},n=this.parseProjectionRHS(Ce.Flatten),{type:"Projection",children:[s,n]};case k.TOK_LBRACKET:return this.lookahead(0)===k.TOK_NUMBER||this.lookahead(0)===k.TOK_COLON?(n=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},n)):this.lookahead(0)===k.TOK_STAR&&this.lookahead(1)===k.TOK_RBRACKET?(this.advance(),this.advance(),n=this.parseProjectionRHS(Ce.Star),{children:[{type:"Identity"},n],type:"Projection"}):this.parseMultiselectList();case k.TOK_CURRENT:return{type:k.TOK_CURRENT};case k.TOK_ROOT:return{type:k.TOK_ROOT};case k.TOK_EXPREF:return a=this.expression(Ce.Expref),{type:"ExpressionReference",children:[a]};case k.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==k.TOK_RPAREN;)this.lookahead(0)===k.TOK_CURRENT?(a={type:k.TOK_CURRENT},this.advance()):a=this.expression(0),o.push(a);return this.match(k.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,s){let n;switch(t){case k.TOK_DOT:const a=Ce.Dot;return this.lookahead(0)!==k.TOK_STAR?(n=this.parseDotRHS(a),{type:"Subexpression",children:[s,n]}):(this.advance(),n=this.parseProjectionRHS(a),{type:"ValueProjection",children:[s,n]});case k.TOK_PIPE:return n=this.expression(Ce.Pipe),{type:k.TOK_PIPE,children:[s,n]};case k.TOK_OR:return n=this.expression(Ce.Or),{type:"OrExpression",children:[s,n]};case k.TOK_AND:return n=this.expression(Ce.And),{type:"AndExpression",children:[s,n]};case k.TOK_LPAREN:const r=s.name,o=[];let i;for(;this.lookahead(0)!==k.TOK_RPAREN;)this.lookahead(0)===k.TOK_CURRENT?(i={type:k.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===k.TOK_COMMA&&this.match(k.TOK_COMMA),o.push(i);return this.match(k.TOK_RPAREN),{name:r,type:"Function",children:o};case k.TOK_FILTER:const c=this.expression(0);return this.match(k.TOK_RBRACKET),n=this.lookahead(0)===k.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Ce.Filter),{type:"FilterProjection",children:[s,n,c]};case k.TOK_FLATTEN:const d={type:k.TOK_FLATTEN,children:[s]},u=this.parseProjectionRHS(Ce.Flatten);return{type:"Projection",children:[d,u]};case k.TOK_EQ:case k.TOK_NE:case k.TOK_GT:case k.TOK_GTE:case k.TOK_LT:case k.TOK_LTE:return this.parseComparator(s,t);case k.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===k.TOK_NUMBER||p.type===k.TOK_COLON?(n=this.parseIndexExpression(),this.projectIfSlice(s,n)):(this.match(k.TOK_STAR),this.match(k.TOK_RBRACKET),n=this.parseProjectionRHS(Ce.Star),{type:"Projection",children:[s,n]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const n=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw n.name="ParserError",n}parseIndexExpression(){if(this.lookahead(0)===k.TOK_COLON||this.lookahead(1)===k.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(k.TOK_RBRACKET),t}projectIfSlice(t,s){const n={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[n,this.parseProjectionRHS(Ce.Star)],type:"Projection"}:n}parseSliceExpression(){const t=[null,null,null];let s=0,n=this.lookahead(0);for(;n!==k.TOK_RBRACKET&&s<3;){if(n===k.TOK_COLON)s+=1,this.advance();else if(n===k.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}n=this.lookahead(0)}return this.match(k.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const n=this.expression(Ce[s]);return{type:"Comparator",name:s,children:[t,n]}}parseDotRHS(t){const s=this.lookahead(0);if([k.TOK_UNQUOTEDIDENTIFIER,k.TOK_QUOTEDIDENTIFIER,k.TOK_STAR].includes(s))return this.expression(t);if(s===k.TOK_LBRACKET)return this.match(k.TOK_LBRACKET),this.parseMultiselectList();if(s===k.TOK_LBRACE)return this.match(k.TOK_LBRACE),this.parseMultiselectHash();const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseProjectionRHS(t){if(Ce[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===k.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===k.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===k.TOK_DOT)return this.match(k.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==k.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===k.TOK_COMMA&&(this.match(k.TOK_COMMA),this.lookahead(0)===k.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(k.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[k.TOK_UNQUOTEDIDENTIFIER,k.TOK_QUOTEDIDENTIFIER];let n,a,r;for(;;){if(n=this.lookaheadToken(0),!s.includes(n.type))throw new Error(`Expecting an identifier token, got: ${n.type}`);if(a=n.value,this.advance(),this.match(k.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:a}),this.lookahead(0)===k.TOK_COMMA)this.match(k.TOK_COMMA);else if(this.lookahead(0)===k.TOK_RBRACE){this.match(k.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const hl=new Mp;var F;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(F||(F={}));class Lp{constructor(t){this.TYPE_NAME_TABLE={[F.TYPE_NUMBER]:"number",[F.TYPE_ANY]:"any",[F.TYPE_STRING]:"string",[F.TYPE_ARRAY]:"array",[F.TYPE_OBJECT]:"object",[F.TYPE_BOOLEAN]:"boolean",[F.TYPE_EXPREF]:"expression",[F.TYPE_NULL]:"null",[F.TYPE_ARRAY_NUMBER]:"Array<number>",[F.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let n=0;for(let a=0;a<s.length;a+=1)n+=s[a];return n/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[n,a]=s;return n.includes(a)},this.functionEndsWith=s=>{const[n,a]=s;return n.includes(a,n.length-a.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[n,a]=s;return a.join(n)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>Ss(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const n=[],a=this._interpreter,r=s[0],o=s[1];for(let i=0;i<o.length;i+=1)n.push(a.visit(r,o[i]));return n},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===F.TYPE_NUMBER)return Math.max(...s);const a=s;let r=a[0];for(let o=1;o<a.length;o+=1)r.localeCompare(a[o])<0&&(r=a[o]);return r},this.functionMaxBy=s=>{const n=s[1],a=s[0],r=this.createKeyFunction(n,[F.TYPE_NUMBER,F.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<a.length;c+=1)l=r&&r(a[c]),l!==void 0&&l>o&&(o=l,i=a[c]);return i},this.functionMerge=s=>{let n={};for(let a=0;a<s.length;a+=1){const r=s[a];n=Object.assign(n,r)}return n},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===F.TYPE_NUMBER)return Math.min(...s);const a=s;let r=a[0];for(let o=1;o<a.length;o+=1)a[o].localeCompare(r)<0&&(r=a[o]);return r},this.functionMinBy=s=>{const n=s[1],a=s[0],r=this.createKeyFunction(n,[F.TYPE_NUMBER,F.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<a.length;c+=1)l=r&&r(a[c]),l!==void 0&&l<o&&(o=l,i=a[c]);return i},this.functionNotNull=s=>{for(let n=0;n<s.length;n+=1)if(this.getTypeName(s[n])!==F.TYPE_NULL)return s[n];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===F.TYPE_STRING){const r=s;let o="";for(let i=r.length-1;i>=0;i-=1)o+=r[i];return o}const a=s.slice(0);return a.reverse(),a},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const n=s[0].slice(0);if(n.length===0)return n;const a=this._interpreter,r=s[1],o=this.getTypeName(a.visit(r,n[0]));if(o!==void 0&&![F.TYPE_NUMBER,F.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<n.length;l+=1)i.push([l,n[l]]);i.sort((l,c)=>{const d=a.visit(r,l[1]),u=a.visit(r,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)n[l]=i[l][1];return n},this.functionStartsWith=([s,n])=>s.startsWith(n),this.functionSum=([s])=>s.reduce((n,a)=>n+a,0),this.functionToArray=([s])=>this.getTypeName(s)===F.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const n=this.getTypeName(s);let a;return n===F.TYPE_NUMBER?s:n===F.TYPE_STRING&&(a=+s,!isNaN(a))?a:null},this.functionToString=([s])=>this.getTypeName(s)===F.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case F.TYPE_NUMBER:return"number";case F.TYPE_STRING:return"string";case F.TYPE_ARRAY:return"array";case F.TYPE_OBJECT:return"object";case F.TYPE_BOOLEAN:return"boolean";case F.TYPE_EXPREF:return"expref";case F.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[F.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[F.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[F.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[F.TYPE_STRING,F.TYPE_ARRAY]},{types:[F.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[F.TYPE_STRING]},{types:[F.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[F.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[F.TYPE_STRING]},{types:[F.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[F.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[F.TYPE_STRING,F.TYPE_ARRAY,F.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[F.TYPE_EXPREF]},{types:[F.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[F.TYPE_ARRAY_NUMBER,F.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[F.TYPE_ARRAY]},{types:[F.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[F.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[F.TYPE_ARRAY_NUMBER,F.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[F.TYPE_ARRAY]},{types:[F.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[F.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[F.TYPE_STRING,F.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[F.TYPE_ARRAY_STRING,F.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[F.TYPE_ARRAY]},{types:[F.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[F.TYPE_STRING]},{types:[F.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[F.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[F.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[F.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[F.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[F.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[F.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,n){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:n}}callFunction(t,s){const n=this.functionTable[t];if(n===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,n._signature),n._func.call(this,s)}validateInputSignatures(t,s){for(let n=0;n<s.length;n+=1)if("variadic"in s[n]&&n!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${n+1} must occur last`)}validateArgs(t,s,n){var a,r;let o;this.validateInputSignatures(t,n);const i=n.filter(h=>{var g;return(g=!h.optional)!==null&&g!==void 0?g:!1}).length,l=(r=(a=n[n.length-1])===null||a===void 0?void 0:a.variadic)!==null&&r!==void 0?r:!1,c=s.length<i,d=s.length>n.length,u=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw o=n.length>1,new Error(`ArgumentError: ${t}() takes ${u}${i} argument${o&&"s"||""} but received ${s.length}`);let p,m,b;for(let h=0;h<n.length;h+=1){b=!1,p=n[h].types,m=this.getTypeName(s[h]);let g;for(g=0;g<p.length;g+=1)if(m!==void 0&&this.typeMatches(m,p[g],s[h])){b=!0;break}if(!b&&m!==void 0){const f=p.map(_=>this.TYPE_NAME_TABLE[_]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${h+1} to be type (${f}) but received type ${this.TYPE_NAME_TABLE[m]} instead.`)}}}typeMatches(t,s,n){if(s===F.TYPE_ANY)return!0;if(s===F.TYPE_ARRAY_STRING||s===F.TYPE_ARRAY_NUMBER||s===F.TYPE_ARRAY){if(s===F.TYPE_ARRAY)return t===F.TYPE_ARRAY;if(t===F.TYPE_ARRAY){let a;s===F.TYPE_ARRAY_NUMBER?a=F.TYPE_NUMBER:s===F.TYPE_ARRAY_STRING&&(a=F.TYPE_STRING);for(let r=0;r<n.length;r+=1){const o=this.getTypeName(n[r]);if(o!==void 0&&a!==void 0&&!this.typeMatches(o,a,n[r]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return F.TYPE_STRING;case"[object Number]":return F.TYPE_NUMBER;case"[object Array]":return F.TYPE_ARRAY;case"[object Boolean]":return F.TYPE_BOOLEAN;case"[object Null]":return F.TYPE_NULL;case"[object Object]":return t.jmespathType===k.TOK_EXPREF?F.TYPE_EXPREF:F.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const n=this._interpreter;return r=>{const o=n.visit(t,r);if(!s.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${s.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Ip{constructor(){this._rootValue=null,this.runtime=new Lp(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let n,a,r,o,i,l,c,d,u,p,m;switch(t.type){case"Field":return s===null?null:Ss(s)?(l=s[t.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(t.children[0],s),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(s))return null;let b=t.value;return b<0&&(b=s.length+b),r=s[b],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(s))return null;const h=[...t.children],g=this.computeSliceParams(s.length,h),[f,_,y]=g;if(r=[],y>0)for(p=f;p<_;p+=y)r.push(s[p]);else for(p=f;p>_;p+=y)r.push(s[p]);return r;case"Projection":if(m=this.visit(t.children[0],s),!Array.isArray(m))return null;for(u=[],p=0;p<m.length;p+=1)a=this.visit(t.children[1],m[p]),a!==null&&u.push(a);return u;case"ValueProjection":if(m=this.visit(t.children[0],s),!Ss(m))return null;u=[];const v=Object.values(m);for(p=0;p<v.length;p+=1)a=this.visit(t.children[1],v[p]),a!==null&&u.push(a);return u;case"FilterProjection":if(m=this.visit(t.children[0],s),!Array.isArray(m))return null;const S=[],A=[];for(p=0;p<m.length;p+=1)n=this.visit(t.children[2],m[p]),sn(n)||S.push(m[p]);for(let P=0;P<S.length;P+=1)a=this.visit(t.children[1],S[P]),a!==null&&A.push(a);return A;case"Comparator":switch(o=this.visit(t.children[0],s),i=this.visit(t.children[1],s),t.name){case k.TOK_EQ:r=Sn(o,i);break;case k.TOK_NE:r=!Sn(o,i);break;case k.TOK_GT:r=o>i;break;case k.TOK_GTE:r=o>=i;break;case k.TOK_LT:r=o<i;break;case k.TOK_LTE:r=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case k.TOK_FLATTEN:const R=this.visit(t.children[0],s);if(!Array.isArray(R))return null;let C=[];for(p=0;p<R.length;p+=1)a=R[p],Array.isArray(a)?C=[...C,...a]:C.push(a);return C;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],s));return u;case"MultiSelectHash":if(s===null)return null;u={};let x;for(p=0;p<t.children.length;p+=1)x=t.children[p],u[x.name]=this.visit(x.value,s);return u;case"OrExpression":return n=this.visit(t.children[0],s),sn(n)&&(n=this.visit(t.children[1],s)),n;case"AndExpression":return o=this.visit(t.children[0],s),sn(o)?o:this.visit(t.children[1],s);case"NotExpression":return o=this.visit(t.children[0],s),sn(o);case"Literal":return t.value;case k.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case k.TOK_CURRENT:return s;case k.TOK_ROOT:return this._rootValue;case"Function":const w=[];for(let P=0;P<t.children.length;P+=1)w.push(this.visit(t.children[P],s));return this.runtime.callFunction(t.name,w);case"ExpressionReference":const M=t.children[0];return M.jmespathType=k.TOK_EXPREF,M;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[n,a,r]=s;if(r===null)r=1;else if(r===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=r<0;return n=n===null?o?t-1:0:this.capSliceRange(t,n,r),a=a===null?o?-1:t:this.capSliceRange(t,a,r),[n,a,r]}capSliceRange(t,s,n){let a=s;return a<0?(a+=t,a<0&&(a=n<0?-1:0)):a>=t&&(a=n<0?t-1:t),a}}const lr=new Ip,Np=F.TYPE_ANY,Dp=F.TYPE_ARRAY,Bp=F.TYPE_ARRAY_NUMBER,Fp=F.TYPE_ARRAY_STRING,$p=F.TYPE_BOOLEAN,Up=F.TYPE_EXPREF,Hp=F.TYPE_NULL,Gp=F.TYPE_NUMBER,Yp=F.TYPE_OBJECT,jp=F.TYPE_STRING;function Kp(e){return hl.parse(e)}function zp(e){return fl.tokenize(e)}const qp=(e,t,s)=>{lr.runtime.registerFunction(e,t,s)};function Wp(e,t){const s=hl.parse(t);return lr.search(s,e)}const Vp=lr,nt={compile:Kp,registerFunction:qp,search:Wp,tokenize:zp,TreeInterpreter:Vp,TYPE_ANY:Np,TYPE_ARRAY_NUMBER:Bp,TYPE_ARRAY_STRING:Fp,TYPE_ARRAY:Dp,TYPE_BOOLEAN:$p,TYPE_EXPREF:Up,TYPE_NULL:Hp,TYPE_NUMBER:Gp,TYPE_OBJECT:Yp,TYPE_STRING:jp},ft=class ft{static async appendPrompt(t,s){_o(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{hs().then(n=>{n=n.filter(a=>a.indexOf(this.DELIM_PROMPTS)!=-1),n.length>ft.MAX_PROMPTS_VALS&&ca(n[0])})}).catch(n=>console.error("~IDB Failed | ",n))}static async appendVIR_products(t){t.forEach(s=>{let n=JSON.stringify({ts:Date.now(),name:s[1]});_o(s[0],LZString.compressToUTF16(n)).then(async()=>{}).catch(a=>console.error("~IDB Failed | ",a))})}static async keys(t,s){hs().then(n=>{n=n.filter(a=>a.indexOf(t)!=-1),s&&s(n)})}static async get(t,s){xp(t).then(n=>{try{n=JSON.parse(LZString.decompressFromUTF16(n))}catch{}finally{s&&s(n)}})}static async entries(t,s){Ap().then(n=>{n=n.filter(a=>a[0].indexOf(t)!=-1),n=n.map(a=>{try{a[1]=JSON.parse(LZString.decompressFromUTF16(a[1]))}catch{}finally{}return a}),s&&s(n)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,n){let a="";switch(t){case"PROMPTS_COUNT":hs().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),a=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,a&&n&&n(a)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":hs().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(ft.DELIM_PROMPTS)[0]==s&&ca(i)})}),a="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",a);break;case"VIR_COUNT":hs().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),a=`There are ${o.length} VNR names in local IDB storage.`,a&&n&&n(a)});break;case"VIR_CLEAR":let r=0;await hs().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(ft.DELIM_VIR)[0]==s&&(r++,ca(i))})}),a=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),a="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",a),a&&n&&n(a)}};ft.MAX_TYPEAHEAD_ROWS=14,ft.MAX_PROMPTS_VALS=50,ft.DELIM_PROMPTS="_",ft.DELIM_VIR="-",ft.DELIM_SNDX="|";let os=ft;const Te=uu("AppState",()=>{const e=vt(),t="DEV",s="BMA Tourney v0.0.5 ",n="#app",a=kt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let r=kt([]),o=kt([]);const i=x=>{r.push(x),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},l=x=>{o.push(x),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const x=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",x),x)try{const w=JSON.parse(x);return console.log("[appState] Parsed session_user:",w),w}catch(w){console.error("Failed to parse session_user from localStorage:",w)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Je({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Je({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features)));else{let x=os.decompr(localStorage.getItem("feature_flags"));x=Object.assign(u.value.features,JSON.parse(x));for(let w in x)typeof u.value?.env_override[t][w]<"u"&&(x[w]=u.value.env_override[t][w]);localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features=x)))}},m=()=>{const x=document.querySelector(n);if(x){const w=x.dataset;for(let M in w){const P=M.replace(/^sync/,""),$=Object.keys(u.value.features).find(ee=>ee.toLowerCase()===P.toLowerCase());if($){const ee=u.value.features[$]?.state;ee&&(w[M]=ee)}}}},b=(x="Theme",w={state:"dark"})=>{const M=document.querySelector(n);M&&(M.dataset["sync"+x]=w.state)},h=(x="Theme",w={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&w){let P=JSON.parse(os.decompr(localStorage.getItem("feature_flags")));P[x]={state:w.state},localStorage.setItem("feature_flags",os.compr(JSON.stringify(u.value.features=P))),b(x,w),J.publish("APP.ROUTE_SYNC",`{ "${x}": ${JSON.stringify(w)}}`)}},g=x=>{const w=u.value?.features?.Lang?.state;let M=y.value.microcopy.language.filter(P=>P.code==w)[0]?.copy;if(M=M.filter(P=>P[0]==x)[0],M)return M[1]},f=(x=":version")=>{let[w,M,P]=x.split(" ");switch(w=w.toLocaleLowerCase(),P=="true"&&(P=!0),P=="false"&&(P=!1),w){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":h(M,{state:P});break;case":route":neodigmToast.q(`route ${M}`,"brand"),e.push({name:M});break}};p(),m();const _=kt({designer:"guided_tour",notifications:{unread:0}}),y=Je({sports:zt,microcopy:Ep.getMeta()}),v=qe(()=>d.value.session_user.fname+" "+d.value.session_user.lname),S=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},A=()=>{localStorage.removeItem("session_user")};function R(x){return d.value.session_user.authenticated=!0,d.value.session_user.token=x,S(),d.value.session_app.route="chat"}function C(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",A(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:_,appMeta:y,appSession:d,clearSessionUser:A,concatFirstLast:v,coreBetSlip:o,coreTourn:r,doCLI:f,doLogin:R,doLogout:C,hierTopics:a,i18n:g,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:S,setFeaturePersistPub:h}}),je=class je{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),je.setTJO(null),location.reload()}static async doSignin(t,s=null){const n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",n)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),s&&s(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const n={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",n)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),s&&s(r)}}static async checkUserName(t,s=null){const n={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",n)).json();return s&&s(r),r}static async resetHash(t,s,n=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const a=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,r={method:"POST",body:JSON.stringify({guid:t,hash:a}),headers:je.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();n&&n(i)}static genHeaders(t={}){let s={};return s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company),s}static async fetchTournaments(t=null){const s={method:"GET",headers:je.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(a),a}static async fetchBetSlips(t,s="",n="",a=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(r+=`/${s}`),s&&n&&(r+=`/${n}`);const o={method:"GET",headers:je.genHeaders()},l=await(await fetch(this.API_baseURI+r,o)).json();return a&&a(l),l}static async fetchLeaderboard(t,s="",n=null){let a=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(a+=`&user=${s}`);const r={method:"GET",headers:je.genHeaders()},i=await(await fetch(this.API_baseURI+a,r)).json();return n&&n(i),i}static async postBetSlips(t,s=null){const n=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),a=await Promise.all(n);return s&&s(a),a}static async fetchPromotions(t=null){const s={method:"GET",headers:je.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",s)).json();return t&&t(a),a}};je.API_baseURI="https://machfive-bmacdev-rest.onrender.com",je.API_ver="v5",je.jsState={},je.jsMeta={},je.jsTJO=null;let Se=je;const qs={shootConfetti(){if(typeof confetti=="function"){let n=function(a,r){confetti({...t,...r,particleCount:Math.floor(e*a)})};var s=n,e=200,t={origin:{y:.7}};n(.25,{zIndex:304,spread:26,startVelocity:55}),n(.2,{zIndex:304,spread:60}),n(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),n(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),n(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const n={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...n,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const n in t)e[n]&&t[n]!=e[n]&&(s[n]=e[n]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){}},Zt=(e,t)=>{const s=e.__vccOpts||e;for(const[n,a]of t)s[n]=a;return s},Jp={class:"auth-page"},Xp={__name:"splash_route",setup(e){const t=vt(),s=ul();return Te(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(n,a)=>(st(),yt("div",Jp,[...a[0]||(a[0]=[Qt('<div class="auth-page-left" data-v-910ecc85><div class="auth-bg" data-v-910ecc85><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div></div><div class="auth-overlay" data-v-910ecc85></div><div class="auth-branding-content" data-v-910ecc85><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-910ecc85><p class="auth-branding-tagline" data-v-910ecc85>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-910ecc85>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-910ecc85> © 2026 Bet Max Action. All rights reserved. </div></div>',1),L("div",{class:"auth-page-right"},[L("div",{class:"auth-card splash-content"},[L("p",{class:"splash-message"},"Loading Tournaments..."),L("br"),L("br"),L("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[L("div")])])],-1)])]))}},To=Zt(Xp,[["__scopeId","data-v-910ecc85"]]);class Qp extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const s=document.getElementById("app")?.getAttribute("data-sync-theme").toLowerCase()||"dark",n=s==="dark";let a=this.getAttribute("data-sport-group")||"Soccer",r,o;a==="Multi"?(r="Multi",o=`var( --sport-icon__Multi--${s} )`):(r=a.replaceAll(" ","_"),o=`var( --sport-icon__${r}--${s} )`),this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-sport-icon",Qp);class Zp extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this.observeTheme(),this.attachEventListeners()}dispatchCardEvent(t,s={}){const n=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(n)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),n=t.target.closest(".btn-join"),a=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(n){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(a){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,n){s!==n&&this.render()}observeTheme(){const t=document.getElementById("app");if(!t)return;new MutationObserver(()=>{this.render()}).observe(t,{attributes:!0,attributeFilter:["data-sync-theme"]})}getTheme(){return document.getElementById("app")?.getAttribute("data-sync-theme")||"dark"}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(a=>Array.isArray(a))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(a=>Array.isArray(a))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const n=s.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:s.find(r=>Array.isArray(r))?.length||0,max:parseInt(n?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const n=this.getAttribute("data-bma-tourn-tags");if(!n)return null;try{const a=JSON.parse(n);if(!Array.isArray(a))return null;const r=a.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===s&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[s]&&o[s].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=zt.find(n=>n.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Exciting Sports Matchups Coming Soon!   ":"  "+t.map(n=>{const a=n.title||"Match";let r="TBD";if(n.scheduled_at)try{r=new Date(n.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=n.scheduled_at}return`  ${a} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(n=>typeof n=="object"&&n.sport_key?n.sport_key:n):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let n="";for(let a=0;a<s;a++){const r=t[a].key,o=zt.find(l=>l.key===r),i=o?o.group:"default";n+=`<bma-sport-icon sport="${r}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(n+=`<span class="sport-count">+${t.length-3}</span>`),n}render(){const t=this.getTheme(),s=t==="dark",n=this.getAttribute("data-sync-theme")||t;this.shadowRoot.innerHTML=`
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
          height: 30%;
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
          flex: 1;
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
          font-size: 0.65rem;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 1.5px;
          margin-bottom: 8px;
        }

        .card-bottom-section .info-cell .info-label {
          color: rgba(255, 255, 255, 0.6);
        }

        .info-cell .info-value {
          font-size: 1.25rem;
          font-weight: 700;
          color: ${s?"var(--app-core-color--yellow-3__dark--brand, #F7C60D)":"#FFB700"};
          font-family: 'Monaco', 'Courier New', monospace;
          text-shadow: ${s?"0 1px 2px rgba(0, 0, 0, 0.5)":"none"};
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
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
    margin-top: 8px;
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
    `}}customElements.define("bma-tournament-card",Zp);class ef extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,n){if(s!==n){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?qs.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{J.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const s=this.shadowRoot.querySelector(".content_stake_text input");s&&s.addEventListener("input",n=>{const a=n.target.value;this.setAttribute("data-stake",a)})}render(){this.shadowRoot.innerHTML=`
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",ef);class tf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=zt.find(n=>n.key===t);return s?s.group:""}connectedCallback(){this.render(),this.startCountdownTimer()}disconnectedCallback(){this.stopCountdownTimer()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.shadowRoot?.querySelector(".countdown");t&&(t.textContent=this.getCountdownText())}attributeChangedCallback(t,s,n){s!==n&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const n=s-t;if(n<=0)return"";const a=Math.floor(n/(1e3*60*60)),r=Math.floor(n%(1e3*60*60)/(1e3*60));return a>24?`${Math.floor(a/24)}d ${a%24}h`:a>0?`${a}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const n=s.time_remaining.toLowerCase();if(n==="final")return{type:"final",text:"Final",color:"#969696"};if(n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")){const a=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,r=s.period!==void 0&&s.period!==null&&s.period!==0;if(a||r)return{type:"live",text:s.time_remaining,color:"#00E676"}}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,n,a,r){t.stopPropagation();const o=t.currentTarget,i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:n,price:a,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,s,n,a){if(!n)return'<button class="btn btn--empty" disabled></button>';const r=n.price,o=n.point;let i="";return t==="spread"?i=`${o>0?`+${o}`:o}<br><span class="btn-odds" data-price-value="${r}">${r}</span>`:t==="money"?i=r:t==="total"&&(i=`${a}${o}<br><span class="btn-odds" data-price-value="${r}">${r}</span>`),`<button class="btn"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${r}"
                    ${o?`data-point="${o}"`:""}>
            ${i}
        </button>`}render(){const t=this.theme==="dark",s=this.oddsMarkets,n=s&&(s.h2h||s.totals||s.spreads),a=!this.isDisabled&&n,r=this.getGameStatus(),o=this.scoreboard,i=o?.home_score||0,l=o?.away_score||0,c=r?.type==="live"||r?.type==="final",d=s?.spreads?.outcomes?.find(g=>g.name===this.homeTeam),u=s?.spreads?.outcomes?.find(g=>g.name===this.awayTeam),p=s?.h2h?.outcomes?.find(g=>g.name===this.homeTeam),m=s?.h2h?.outcomes?.find(g=>g.name===this.awayTeam),b=s?.totals?.outcomes?.find(g=>g.name==="Over"),h=s?.totals?.outcomes?.find(g=>g.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                }

                * {
                    box-sizing: border-box;
                }

                .card {
                    padding: 1.5rem;
                    margin-bottom: 12px;
                    border: none;
                    border-radius: 0;
                    transition: all 0.3s ease;
                    background: ${t?"linear-gradient(135deg, rgba(46, 139, 87, 0.1), rgba(46, 139, 87, 0.05))":"#ffffff"};
                    position: relative;
                    cursor: default;
                }

                /* Hover state removed - no interactive hover for bet match cards */

                /* Game state variations - subtle header border treatment */
                .card--upcoming .header {
                    border-bottom: 2px solid transparent;
                    background-image: #000;
                    background-size: 100% 2px;
                    background-position: 0 100%;
                    background-repeat: no-repeat;
                }

                .card--live .date-status {
                    position: relative;
                    overflow: hidden;
                }

                .QQQQcard--live .date-status::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: -100%;
                    width: 100%;
                    height: 2px;
                    background: #000;
                }

                @keyframes slideGradient {
                    0% {
                        left: -100%;
                    }
                    100% {
                        left: 100%;
                    }
                }

                .card--final {
                    opacity: 0.85;
                }

                .card--scheduled {
                    /* No special treatment, uses default styling */
                }

                :host([data-is-disabled="true"]) .card {
                    opacity: 0.4;
                    cursor: not-allowed;
                    pointer-events: none;
                }

                .header {
                    display: grid;
                    grid-template-columns: 30% 70%;
                    gap: 8px;
                    margin-bottom: 10px;
                    padding-bottom: 8px;
                    border-bottom: 1px solid ${t?"rgba(46, 139, 87, 0.2)":"#d0d0d0"};
                }

                .date-status {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    justify-content: flex-start;
                    flex-wrap: wrap;
                }

                .date-status bma-sport-icon {
                    flex-shrink: 0;
                }

                .date {
                    font-size: 0.8rem;
                    color: ${t?"#F7C60D":"#d4a800"};
                    font-weight: 500;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
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

                /* Mobile responsive adjustments */
                @media (orientation: portrait), (max-width: 768px) {
                    .date {
                        font-size: 9.6px;
                    }

                    @media (max-width: 480px) {
                        .date-status {
                            gap: 6px;
                        }

                        .status-badge {
                            font-size: 0.65rem;
                            padding: 2px 6px;
                        }
                    }
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

                .labels {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 6px;
                    align-items: center;
                }

                .labels span {
                    font-size: 0.65rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    text-align: center;
                    color: ${t?"#969696":"#666"};
                    letter-spacing: 0.5px;
                }

                .rows-container {
                    display: grid;
                    grid-template-rows: auto auto;
                }

                .row {
                    display: grid;
                    grid-template-columns: 30% 70%;
                    gap: 8px;
                    margin-bottom: 8px;
                }

                .row:last-child {
                    margin-bottom: 0;
                }

                /* Default order: away first, home second (for most sports) */
                .row--home {
                    grid-row: 2;
                }

                .row--away {
                    grid-row: 1;
                }

                /* Soccer leagues: home first, away second */
                :host([data-sport-key^="soccer_"]) .row--home {
                    grid-row: 1;
                }

                :host([data-sport-key^="soccer_"]) .row--away {
                    grid-row: 2;
                }

                .team {
                    font-weight: 600;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                }

                .team-name {
                    flex: 1;
                }

                .team-score {
                    font-size: 1rem;
                    font-weight: 700;
                    margin-left: 8px;
                    padding: 2px 6px;
                    background: rgba(247, 198, 13, 0.1);
                    border-radius: 0;
                    min-width: 28px;
                    text-align: center;
                }

                .team--home .team-name {
                    color: ${t?"#FFFFFF":"#000000"};
                }

                .team--away .team-name {
                    color: ${t?"#FFFFFF":"#000000"};
                }

                .team--home .team-score {
                    color: ${t?"#ffe24d":"#d4a800"};
                    background: rgba(255, 226, 77, 0.15);
                }

                .team--away .team-score {
                    color: ${t?"#14b963":"#0e8f4d"};
                    background: rgba(20, 185, 99, 0.15);
                }

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

                /* Add "+" prefix to positive money line odds (not negative numbers) */
                .btn[data-bet-type="money"]:not([data-price^="-"])::before {
                    content: "+";
                }

                /* Add "+" prefix to positive odds in spread and total buttons */
                .btn-odds:not([data-price-value^="-"])::before {
                    content: "+";
                }
            </style>

            <div class="card ${r?`card--${r.type}`:""}">
                <div class="header">
                    <div class="date-status">
                        ${this.sportKey?`
                            <bma-sport-icon
                                sport="${this.sportKey}"
                                data-sport-group="${this.sportGroup}"
                                style="width: 24px; height: 24px; flex-shrink: 0;">
                            </bma-sport-icon>
                        `:""}
                        <div class="date">${this.formatDate(this.scheduledAt)}</div>
                        ${r&&r.type!=="scheduled"?`
                            <div class="status-badge status-badge--${r.type}">
                                ${r.type==="live"?'<span class="live-dot"></span>':""}
                                <span class="countdown">${r.text}</span>
                            </div>
                        `:""}
                    </div>
                    ${a?`
                        <div class="labels">
                            <span>SPREAD</span>
                            <span>MONEY</span>
                            <span>TOTAL</span>
                        </div>
                    `:'<div class="labels"></div>'}
                </div>

                <div class="rows-container">
                    <div class="row row--home">
                        <div class="team team--home">
                            <span class="team-name">${this.homeTeam}</span>
                            ${c?`<span class="team-score">${i}</span>`:""}
                        </div>
                        ${a?`
                            <div class="buttons">
                                ${this.renderButton("spread","home",d)}
                                ${this.renderButton("money","home",p)}
                                ${this.renderButton("total","over",b,"O")}
                            </div>
                        `:""}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away">
                            <span class="team-name">${this.awayTeam}</span>
                            ${c?`<span class="team-score">${l}</span>`:""}
                        </div>
                        ${a?`
                            <div class="buttons">
                                ${this.renderButton("spread","away",u)}
                                ${this.renderButton("money","away",m)}
                                ${this.renderButton("total","under",h,"U")}
                            </div>
                        `:""}
                    </div>
                </div>
            </div>
        `,a&&this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(g=>{const f=g.dataset.betType,_=g.dataset.team,y=g.dataset.price,v=g.dataset.point||null;g.addEventListener("click",S=>this.handleButtonClick(S,f,_,y,v))})}}customElements.define("bma-bet-match-card",tf);class sf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,n){s!==n&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(s){return console.warn("[bma-match-status] Failed to parse scoreboard data:",s),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get theme(){return this.getAttribute("data-sync-theme")||"dark"}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let n=!1;if(this.scheduledAt){let o=this.scheduledAt;!o.includes("Z")&&!o.match(/[+-]\d{2}:\d{2}$/)&&(o=o+"Z");const i=new Date(o),l=new Date(Date.now()-300*1e3);n=i<l}let a="UPCOMING",r=null;if(t?.time_remaining){const o=t.time_remaining;o==="Final"?(a="FINAL",r="Final"):o==="In Progress"?n?(a="IN_PROGRESS",r="In Progress"):(a="UPCOMING",r="Upcoming"):(a="IN_PROGRESS",r=o)}else s?(a="FINAL",r="Final"):(a="UPCOMING",r="Upcoming");return{status:a,timeRemaining:r}}render(){const{status:t,timeRemaining:s}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,a=this.scheduledAt?qs.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",r=parseInt(this.homeScore),o=parseInt(this.awayScore),i=n&&t==="FINAL"&&r>o,l=n&&t==="FINAL"&&o>r;this.shadowRoot.innerHTML=`
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
          transition: all 0.2s ease;
          cursor: pointer;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .match-row:hover {
          background: rgba(255, 255, 255, 0.05);
          padding-left: 20px;
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

        /* Expanded details (hidden by default) */
        .match-details {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
          padding: 0 16px;
        }

        .match-row:hover + .match-details,
        .match-details:hover {
          max-height: 100px;
          padding: 12px 16px;
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

          .match-row:hover {
            padding-left: 12px;
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
    `}}customElements.define("bma-match-status",sf);class Ht extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this.render(),this.attachEventListeners()}attributeChangedCallback(t,s,n){s!==n&&(this.render(),this.attachEventListeners())}toggleExpanded(){Ht.currentlyExpanded&&Ht.currentlyExpanded!==this&&Ht.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");if(this.expanded){t.style.display="block",s.textContent="▼",Ht.currentlyExpanded=this;const n=document.querySelector("body > neodigm-sodapop");n&&n.scrollTo(0,0)}else t.style.display="none",s.textContent="▶",Ht.currentlyExpanded===this&&(Ht.currentlyExpanded=null)}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&(t.style.display="none"),s&&(s.textContent="▶")}attachEventListeners(){const t=this.shadowRoot.querySelector(".leaderboard-card");t&&t.addEventListener("click",()=>this.toggleExpanded())}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(i=>{const l=i.bet||[];if(l.length===0)return!1;const c=l[0],d=Object.keys(c).filter(u=>u!=="short_title")[0];return c[d]?.reconciled===!0});if(n.length===0)return'<p class="no-bets">No reconciled bets</p>';const a={};s.forEach(i=>{const l=i.guid||i.id||i.odds_id;l&&(a[l]=i)});const r={};n.forEach(i=>{const l=i.coreMatches__guid||i.match_guid||i.odds_id||"unknown";r[l]||(r[l]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const c=a[l];if(c){r[l].matchTitle=c.short_title||c.title||"Unknown Match";const d=c.sport_id,u=zt.find(p=>p.key===d);r[l].sportKey=u?.group||"default"}r[l].bets.push(i)});let o="";return Object.keys(r).forEach(i=>{const l=r[i],c=l.sportKey||"default",d=l.matchTitle||"Unknown Match";o+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${c}"></bma-sport-icon>
                    <span class="match-title">${d}</span>
                </div>
            `,o+=`
                <table class="bets-table">
                    <thead>
                        <tr>
                            <th>Selection</th>
                            <th>Type</th>
                            <th>Odds</th>
                            <th>Stake</th>
                            <th>Payout</th>
                        </tr>
                    </thead>
                    <tbody>
            `,l.bets.forEach(u=>{const p=u.bet||[];if(p.length===0)return;const m=p[0],b=Object.keys(m).filter(f=>f!=="short_title")[0],h=m[b],g=parseFloat(h.payout||0)>0;o+=`
                    <tr class="${g?"bet-win":"bet-loss"}">
                        <td class="bet-selection">${b}</td>
                        <td class="bet-type">${h.type||"-"}</td>
                        <td class="bet-odds">${h.odds>0?"+":""}${h.odds||"-"}</td>
                        <td class="bet-stake">$${parseFloat(h.stake||0).toFixed(2)}</td>
                        <td class="bet-payout ${g?"payout-win":"payout-loss"}">$${parseFloat(h.payout||0).toFixed(2)}</td>
                    </tr>
                `}),o+=`
                    </tbody>
                </table>
            `}),o}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",s=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"";this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block;
                    margin-bottom: 0.75rem;
                }

                * {
                    box-sizing: border-box;
                }

                /* Glass Morphism Card */
                .leaderboard-card {
                    background: linear-gradient(135deg, rgba(46, 139, 87, 0.12) 0%, rgba(10, 10, 10, 0.6) 100%);
                    border: 1px solid rgba(46, 139, 87, 0.4);
                    border-radius: 0;
                    backdrop-filter: blur(5px);
                    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
                    padding: 1rem;
                    cursor: pointer;
                    user-select: none;
                    transition: all 0.3s ease;
                }

                .leaderboard-card:hover {
                    background: linear-gradient(135deg, rgba(46, 139, 87, 0.18) 0%, rgba(10, 10, 10, 0.7) 100%);
                    border-color: rgba(46, 139, 87, 0.6);
                    transform: translateY(-2px);
                    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
                }

                .leaderboard-card--current-user {
                    border: 2px solid rgba(247, 198, 13, 0.8);
                    background: linear-gradient(135deg, rgba(247, 198, 13, 0.15) 0%, rgba(10, 10, 10, 0.7) 100%);
                }

                .leaderboard-card__header {
                    display: grid;
                    grid-template-columns: 60px 1fr 180px;
                    align-items: center;
                    gap: 1rem;
                    cursor: pointer;
                }

                .leaderboard-card__rank {
                    font-size: 1.75rem;
                    font-weight: 900;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    text-align: center;
                    text-shadow: 0 2px 8px rgba(247, 198, 13, 0.4);
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

                .leaderboard-card__dollars {
                    text-align: right;
                    display: flex;
                    flex-direction: column;
                    gap: 0.25rem;
                }

                .dollars-amount {
                    font-size: 1.5rem;
                    font-weight: 900;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    text-shadow: 0 2px 8px rgba(247, 198, 13, 0.4);
                }

                .dollars-label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                }

                .expand-icon {
                    display: none;
                    position: absolute;
                    top: 4px;
                    right: 4px;
                    font-size: 0.75rem;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    transition: transform 0.3s ease;
                    cursor: pointer;
                    user-select: none;
                }

                /* Details Section */
                .leaderboard-card__details {
                    display: none;
                    margin-top: 1.5rem;
                    padding-top: 1.5rem;
                    border-top: 1px solid rgba(46, 139, 87, 0.3);
                }

                .details-summary {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                }

                .summary-item {
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.03) 0%, rgba(0, 0, 0, 0.4) 100%);
                    border-radius: 0;
                    border: 1px solid rgba(255, 255, 255, 0.08);
                    padding: 0.75rem;
                    text-align: center;
                }

                .summary-item__label {
                    font-size: 0.75rem;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                    margin-bottom: 0.25rem;
                }

                .summary-item__value {
                    font-size: 1.25rem;
                    font-weight: 900;
                    color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
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
                }

                .match-group-header bma-sport-icon {
                    flex-shrink: 0;
                }

                /* Bets Table */
                .bets-table {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.875rem;
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(0, 0, 0, 0.3) 100%);
                    border-radius: 0;
                    overflow: hidden;
                    margin-bottom: 1rem;
                }

                .bets-table thead {
                    background: linear-gradient(135deg, rgba(46, 139, 87, 0.2) 0%, rgba(0, 0, 0, 0.5) 100%);
                }

                .bets-table th {
                    padding: 0.75rem 0.5rem;
                    text-align: left;
                    font-weight: 900;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 0.7rem;
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                }

                .bets-table td {
                    padding: 0.75rem 0.5rem;
                    border-top: 1px solid rgba(255, 255, 255, 0.05);
                    color: var(--app-core-color--gray-7__dark--brand, #E6E6E6);
                }

                .bets-table tbody tr {
                    transition: background 0.2s ease;
                }

                .bets-table tbody tr:hover {
                    background: rgba(46, 139, 87, 0.1);
                }

                .bet-win {
                    background: rgba(46, 139, 87, 0.05);
                }

                .bet-loss {
                    background: rgba(185, 20, 24, 0.05);
                }

                .bet-selection {
                    font-weight: 600;
                    color: var(--app-core-color--white-5__dark--brand, #FFFFFF);
                    width: 180px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }

                .bet-type {
                    text-transform: capitalize;
                    font-size: 0.75rem;
                    color: var(--app-core-color--gray-6__dark--brand, #969696);
                }

                .payout-win {
                    color: var(--app-core-color--yellow-3__dark--brand, #F7C60D);
                    font-weight: 900;
                }

                .payout-loss {
                    color: var(--app-core-color--red-3__dark--brand, #B91418);
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
                        padding: 0.75rem;
                    }

                    /* Stack header vertically */
                    .leaderboard-card__header {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto auto auto;
                        gap: 0.5rem;
                        text-align: left;
                    }

                    .leaderboard-card__rank {
                        font-size: 1.25rem;
                        text-align: left;
                    }

                    .leaderboard-card__username {
                        font-size: 0.95rem;
                    }

                    .leaderboard-card__dollars {
                        text-align: left;
                        flex-direction: row;
                        align-items: baseline;
                        gap: 0.5rem;
                    }

                    .dollars-amount {
                        font-size: 1.125rem;
                    }

                    .dollars-label {
                        font-size: 0.7rem;
                        order: -1;
                    }

                    /* Details section */
                    .leaderboard-card__details {
                        margin-top: 1rem;
                        padding-top: 1rem;
                    }

                    .details-summary {
                        grid-template-columns: 1fr;
                        gap: 0.5rem;
                        margin-bottom: 1rem;
                    }

                    .summary-item {
                        padding: 0.5rem;
                    }

                    .summary-item__value {
                        font-size: 1rem;
                    }

                    /* Match group header */
                    .match-group-header {
                        padding: 0.5rem 0.75rem;
                        gap: 0.5rem;
                    }

                    .match-title {
                        font-size: 0.75rem;
                    }

                    /* Make table scrollable horizontally */
                    .bets-table {
                        display: block;
                        overflow-x: auto;
                        font-size: 0.7rem;
                        -webkit-overflow-scrolling: touch;
                    }

                    .bets-table thead,
                    .bets-table tbody,
                    .bets-table tr {
                        display: table;
                        width: 100%;
                        table-layout: fixed;
                    }

                    .bets-table th,
                    .bets-table td {
                        padding: 0.4rem 0.2rem;
                        font-size: 0.65rem;
                    }

                    .bets-table th {
                        font-size: 0.5rem;
                        padding: 0.5rem 0.2rem;
                    }

                    /* Define explicit column widths for alignment */
                    .bets-table th:nth-child(1),
                    .bets-table td:nth-child(1) {
                        width: 35%;
                    }

                    .bets-table th:nth-child(2),
                    .bets-table td:nth-child(2) {
                        width: 15%;
                    }

                    .bets-table th:nth-child(3),
                    .bets-table td:nth-child(3) {
                        width: 15%;
                    }

                    .bets-table th:nth-child(4),
                    .bets-table td:nth-child(4) {
                        width: 17.5%;
                    }

                    .bets-table th:nth-child(5),
                    .bets-table td:nth-child(5) {
                        width: 17.5%;
                    }

                    /* Adjust column styles for mobile */
                    .bet-selection {
                        font-size: 0.65rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .bet-type {
                        font-size: 0.6rem;
                    }

                    .bet-odds,
                    .bet-stake,
                    .bet-payout {
                        font-size: 0.65rem;
                    }

                    /* Badge size */
                    .badge-trophy {
                        width: 20px;
                        height: 20px;
                    }
                }
            </style>

            <div class="leaderboard-card ${t}">
                <span class="expand-icon">▶</span>

                <div class="leaderboard-card__header">
                    <div class="leaderboard-card__rank">#${this.rank}</div>

                    <div class="leaderboard-card__user">
                        ${s}
                        <span class="leaderboard-card__username">${this.username}</span>
                    </div>

                    <div class="leaderboard-card__dollars">
                        <div class="dollars-amount">TD$ ${parseFloat(this.tournamentDollars||0).toFixed(2)}</div>
                        <div class="dollars-label">Balance</div>
                    </div>
                </div>

                <div class="leaderboard-card__details">
                    <div class="details-summary">
                        <div class="summary-item">
                            <div class="summary-item__label">Total Bets</div>
                            <div class="summary-item__value">${this.totalBetslips}</div>
                        </div>
                        <div class="summary-item">
                            <div class="summary-item__label">Total Payout</div>
                            <div class="summary-item__value">$${parseFloat(this.totalPayout||0).toFixed(2)}</div>
                        </div>
                    </div>

                    ${this.renderBetsTable()}
                </div>
            </div>
        `}}customElements.define("bma-leaderboard-card",Ht);class ml{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:n}=t.Bet,{home_team_id:a,home_team_score:r,away_team_id:o,away_team_score:i}=t.Match,l=s?.toUpperCase()||"",c=parseFloat(r)||0,d=parseFloat(i)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${a} (${c})`,away:`${o} (${d})`,scope:n}),l){case"MONEY":return this._evaluateMoneyline(n.team_id,a,o,c,d);case"SPREAD":return this._evaluateSpread(n.team_id,n.point,a,o,c,d);case"TOTAL":return this._evaluateTotal(n.over,n.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,s,n,a,r){const o=t===s,i=t===n;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=a>r,c=r>a;if(a===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,s,n,a,r,o){const i=t===n,l=t===a;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let d=r,u=o;i?d=r+c:u=o+c;const p=d>u,m=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const h=i&&p||l&&m;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${h?"WON":"LOST"}`),h}static _evaluateTotal(t,s,n,a){const r=n+a,o=t&&t!=="";if(!o&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:s);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:n,stake:a}=t.Bet,r=s?.toUpperCase()||"",o=parseFloat(n)||0,i=parseFloat(a)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,s){let n=0;return t>0?n=s*(t/100):t<0?n=s/(Math.abs(t)/100):n=0,s+n}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function So(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function cr(e,t){e===void 0&&(e={}),t===void 0&&(t={});const s=["__proto__","constructor","prototype"];Object.keys(t).filter(n=>s.indexOf(n)<0).forEach(n=>{typeof e[n]>"u"?e[n]=t[n]:So(t[n])&&So(e[n])&&Object.keys(t[n]).length>0&&cr(e[n],t[n])})}const gl={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function bt(){const e=typeof document<"u"?document:{};return cr(e,gl),e}const nf={document:gl,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Fe(){const e=typeof window<"u"?window:{};return cr(e,nf),e}function af(e){return e===void 0&&(e=""),e.trim().split(" ").filter(t=>!!t.trim())}function rf(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function bl(e,t){return t===void 0&&(t=0),setTimeout(e,t)}function En(){return Date.now()}function of(e){const t=Fe();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function lf(e,t){t===void 0&&(t="x");const s=Fe();let n,a,r;const o=of(e);return s.WebKitCSSMatrix?(a=o.transform||o.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(i=>i.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix(a==="none"?"":a)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),n=r.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?a=r.m41:n.length===16?a=parseFloat(n[12]):a=parseFloat(n[4])),t==="y"&&(s.WebKitCSSMatrix?a=r.m42:n.length===16?a=parseFloat(n[13]):a=parseFloat(n[5])),a||0}function nn(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function cf(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function Ke(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"];for(let s=1;s<arguments.length;s+=1){const n=s<0||arguments.length<=s?void 0:arguments[s];if(n!=null&&!cf(n)){const a=Object.keys(Object(n)).filter(r=>t.indexOf(r)<0);for(let r=0,o=a.length;r<o;r+=1){const i=a[r],l=Object.getOwnPropertyDescriptor(n,i);l!==void 0&&l.enumerable&&(nn(e[i])&&nn(n[i])?n[i].__swiper__?e[i]=n[i]:Ke(e[i],n[i]):!nn(e[i])&&nn(n[i])?(e[i]={},n[i].__swiper__?e[i]=n[i]:Ke(e[i],n[i])):e[i]=n[i])}}}return e}function an(e,t,s){e.style.setProperty(t,s)}function _l(e){let{swiper:t,targetPosition:s,side:n}=e;const a=Fe(),r=-t.translate;let o=null,i;const l=t.params.speed;t.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(t.cssModeFrameID);const c=s>r?"next":"prev",d=(p,m)=>c==="next"&&p>=m||c==="prev"&&p<=m,u=()=>{i=new Date().getTime(),o===null&&(o=i);const p=Math.max(Math.min((i-o)/l,1),0),m=.5-Math.cos(p*Math.PI)/2;let b=r+m*(s-r);if(d(b,s)&&(b=s),t.wrapperEl.scrollTo({[n]:b}),d(b,s)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[n]:b})}),a.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=a.requestAnimationFrame(u)};u()}function Ct(e,t){t===void 0&&(t="");const s=Fe(),n=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&n.push(...e.assignedElements()),t?n.filter(a=>a.matches(t)):n}function df(e,t){const s=[t];for(;s.length>0;){const n=s.shift();if(e===n)return!0;s.push(...n.children,...n.shadowRoot?n.shadowRoot.children:[],...n.assignedElements?n.assignedElements():[])}}function uf(e,t){const s=Fe();let n=t.contains(e);return!n&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(n=[...t.assignedElements()].includes(e),n||(n=df(e,t))),n}function wn(e){try{console.warn(e);return}catch{}}function Da(e,t){t===void 0&&(t=[]);const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:af(t)),s}function pf(e,t){const s=[];for(;e.previousElementSibling;){const n=e.previousElementSibling;t?n.matches(t)&&s.push(n):s.push(n),e=n}return s}function ff(e,t){const s=[];for(;e.nextElementSibling;){const n=e.nextElementSibling;t?n.matches(t)&&s.push(n):s.push(n),e=n}return s}function Yt(e,t){return Fe().getComputedStyle(e,null).getPropertyValue(t)}function Eo(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function hf(e,t){const s=[];let n=e.parentElement;for(;n;)s.push(n),n=n.parentElement;return s}function wo(e,t,s){const n=Fe();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(n.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}let da;function mf(){const e=Fe(),t=bt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function yl(){return da||(da=mf()),da}let ua;function gf(e){let{userAgent:t}=e===void 0?{}:e;const s=yl(),n=Fe(),a=n.navigator.platform,r=t||n.navigator.userAgent,o={ios:!1,android:!1},i=n.screen.width,l=n.screen.height,c=r.match(/(Android);?[\s\/]+([\d.]+)?/);let d=r.match(/(iPad).*OS\s([\d_]+)/);const u=r.match(/(iPod)(.*OS\s([\d_]+))?/),p=!d&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),m=a==="Win32";let b=a==="MacIntel";const h=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!d&&b&&s.touch&&h.indexOf(`${i}x${l}`)>=0&&(d=r.match(/(Version)\/([\d.]+)/),d||(d=[0,1,"13_0_0"]),b=!1),c&&!m&&(o.os="android",o.android=!0),(d||p||u)&&(o.os="ios",o.ios=!0),o}function vl(e){return e===void 0&&(e={}),ua||(ua=gf(e)),ua}let pa;function bf(){const e=Fe(),t=vl();let s=!1;function n(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(n()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));s=l<16||l===16&&c<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=n(),o=r||a&&t.ios;return{isSafari:s||r,needPerspectiveFix:s,need3dFix:o,isWebView:a}}function Tl(){return pa||(pa=bf()),pa}function _f(e){let{swiper:t,on:s,emit:n}=e;const a=Fe();let r=null,o=null;const i=()=>{!t||t.destroyed||!t.initialized||(n("beforeResize"),n("resize"))},l=()=>{!t||t.destroyed||!t.initialized||(r=new ResizeObserver(u=>{o=a.requestAnimationFrame(()=>{const{width:p,height:m}=t;let b=p,h=m;u.forEach(g=>{let{contentBoxSize:f,contentRect:_,target:y}=g;y&&y!==t.el||(b=_?_.width:(f[0]||f).inlineSize,h=_?_.height:(f[0]||f).blockSize)}),(b!==p||h!==m)&&i()})}),r.observe(t.el))},c=()=>{o&&a.cancelAnimationFrame(o),r&&r.unobserve&&t.el&&(r.unobserve(t.el),r=null)},d=()=>{!t||t.destroyed||!t.initialized||n("orientationchange")};s("init",()=>{if(t.params.resizeObserver&&typeof a.ResizeObserver<"u"){l();return}a.addEventListener("resize",i),a.addEventListener("orientationchange",d)}),s("destroy",()=>{c(),a.removeEventListener("resize",i),a.removeEventListener("orientationchange",d)})}function yf(e){let{swiper:t,extendParams:s,on:n,emit:a}=e;const r=[],o=Fe(),i=function(d,u){u===void 0&&(u={});const p=o.MutationObserver||o.WebkitMutationObserver,m=new p(b=>{if(t.__preventObserver__)return;if(b.length===1){a("observerUpdate",b[0]);return}const h=function(){a("observerUpdate",b[0])};o.requestAnimationFrame?o.requestAnimationFrame(h):o.setTimeout(h,0)});m.observe(d,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:t.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),r.push(m)},l=()=>{if(t.params.observer){if(t.params.observeParents){const d=hf(t.hostEl);for(let u=0;u<d.length;u+=1)i(d[u])}i(t.hostEl,{childList:t.params.observeSlideChildren}),i(t.wrapperEl,{attributes:!1})}},c=()=>{r.forEach(d=>{d.disconnect()}),r.splice(0,r.length)};s({observer:!1,observeParents:!1,observeSlideChildren:!1}),n("init",l),n("destroy",c)}var vf={on(e,t,s){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;const a=s?"unshift":"push";return e.split(" ").forEach(r=>{n.eventsListeners[r]||(n.eventsListeners[r]=[]),n.eventsListeners[r][a](t)}),n},once(e,t,s){const n=this;if(!n.eventsListeners||n.destroyed||typeof t!="function")return n;function a(){n.off(e,a),a.__emitterProxy&&delete a.__emitterProxy;for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];t.apply(n,o)}return a.__emitterProxy=t,n.on(e,a,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const n=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[n](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(n=>{typeof t>"u"?s.eventsListeners[n]=[]:s.eventsListeners[n]&&s.eventsListeners[n].forEach((a,r)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&s.eventsListeners[n].splice(r,1)})}),s},emit(){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let t,s,n;for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return typeof r[0]=="string"||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),n=e):(t=r[0].events,s=r[0].data,n=r[0].context||e),s.unshift(n),(Array.isArray(t)?t:t.split(" ")).forEach(l=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(c=>{c.apply(n,[l,...s])}),e.eventsListeners&&e.eventsListeners[l]&&e.eventsListeners[l].forEach(c=>{c.apply(n,s)})}),e}};function Tf(){const e=this;let t,s;const n=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=n.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=n.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(Yt(n,"padding-left")||0,10)-parseInt(Yt(n,"padding-right")||0,10),s=s-parseInt(Yt(n,"padding-top")||0,10)-parseInt(Yt(n,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function Sf(){const e=this;function t(w,M){return parseFloat(w.getPropertyValue(e.getDirectionLabel(M))||0)}const s=e.params,{wrapperEl:n,slidesEl:a,size:r,rtlTranslate:o,wrongRTL:i}=e,l=e.virtual&&s.virtual.enabled,c=l?e.virtual.slides.length:e.slides.length,d=Ct(a,`.${e.params.slideClass}, swiper-slide`),u=l?e.virtual.slides.length:d.length;let p=[];const m=[],b=[];let h=s.slidesOffsetBefore;typeof h=="function"&&(h=s.slidesOffsetBefore.call(e));let g=s.slidesOffsetAfter;typeof g=="function"&&(g=s.slidesOffsetAfter.call(e));const f=e.snapGrid.length,_=e.slidesGrid.length;let y=s.spaceBetween,v=-h,S=0,A=0;if(typeof r>"u")return;typeof y=="string"&&y.indexOf("%")>=0?y=parseFloat(y.replace("%",""))/100*r:typeof y=="string"&&(y=parseFloat(y)),e.virtualSize=-y,d.forEach(w=>{o?w.style.marginLeft="":w.style.marginRight="",w.style.marginBottom="",w.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(an(n,"--swiper-centered-offset-before",""),an(n,"--swiper-centered-offset-after",""));const R=s.grid&&s.grid.rows>1&&e.grid;R?e.grid.initSlides(d):e.grid&&e.grid.unsetSlides();let C;const x=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(w=>typeof s.breakpoints[w].slidesPerView<"u").length>0;for(let w=0;w<u;w+=1){C=0;let M;if(d[w]&&(M=d[w]),R&&e.grid.updateSlide(w,M,d),!(d[w]&&Yt(M,"display")==="none")){if(s.slidesPerView==="auto"){x&&(d[w].style[e.getDirectionLabel("width")]="");const P=getComputedStyle(M),$=M.style.transform,ee=M.style.webkitTransform;if($&&(M.style.transform="none"),ee&&(M.style.webkitTransform="none"),s.roundLengths)C=e.isHorizontal()?wo(M,"width"):wo(M,"height");else{const Q=t(P,"width"),Y=t(P,"padding-left"),G=t(P,"padding-right"),U=t(P,"margin-left"),se=t(P,"margin-right"),W=P.getPropertyValue("box-sizing");if(W&&W==="border-box")C=Q+U+se;else{const{clientWidth:re,offsetWidth:te}=M;C=Q+Y+G+U+se+(te-re)}}$&&(M.style.transform=$),ee&&(M.style.webkitTransform=ee),s.roundLengths&&(C=Math.floor(C))}else C=(r-(s.slidesPerView-1)*y)/s.slidesPerView,s.roundLengths&&(C=Math.floor(C)),d[w]&&(d[w].style[e.getDirectionLabel("width")]=`${C}px`);d[w]&&(d[w].swiperSlideSize=C),b.push(C),s.centeredSlides?(v=v+C/2+S/2+y,S===0&&w!==0&&(v=v-r/2-y),w===0&&(v=v-r/2-y),Math.abs(v)<1/1e3&&(v=0),s.roundLengths&&(v=Math.floor(v)),A%s.slidesPerGroup===0&&p.push(v),m.push(v)):(s.roundLengths&&(v=Math.floor(v)),(A-Math.min(e.params.slidesPerGroupSkip,A))%e.params.slidesPerGroup===0&&p.push(v),m.push(v),v=v+C+y),e.virtualSize+=C+y,S=C,A+=1}}if(e.virtualSize=Math.max(e.virtualSize,r)+g,o&&i&&(s.effect==="slide"||s.effect==="coverflow")&&(n.style.width=`${e.virtualSize+y}px`),s.setWrapperSize&&(n.style[e.getDirectionLabel("width")]=`${e.virtualSize+y}px`),R&&e.grid.updateWrapperSize(C,p),!s.centeredSlides){const w=[];for(let M=0;M<p.length;M+=1){let P=p[M];s.roundLengths&&(P=Math.floor(P)),p[M]<=e.virtualSize-r&&w.push(P)}p=w,Math.floor(e.virtualSize-r)-Math.floor(p[p.length-1])>1&&p.push(e.virtualSize-r)}if(l&&s.loop){const w=b[0]+y;if(s.slidesPerGroup>1){const M=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),P=w*s.slidesPerGroup;for(let $=0;$<M;$+=1)p.push(p[p.length-1]+P)}for(let M=0;M<e.virtual.slidesBefore+e.virtual.slidesAfter;M+=1)s.slidesPerGroup===1&&p.push(p[p.length-1]+w),m.push(m[m.length-1]+w),e.virtualSize+=w}if(p.length===0&&(p=[0]),y!==0){const w=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");d.filter((M,P)=>!s.cssMode||s.loop?!0:P!==d.length-1).forEach(M=>{M.style[w]=`${y}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let w=0;b.forEach(P=>{w+=P+(y||0)}),w-=y;const M=w>r?w-r:0;p=p.map(P=>P<=0?-h:P>M?M+g:P)}if(s.centerInsufficientSlides){let w=0;b.forEach(P=>{w+=P+(y||0)}),w-=y;const M=(s.slidesOffsetBefore||0)+(s.slidesOffsetAfter||0);if(w+M<r){const P=(r-w-M)/2;p.forEach(($,ee)=>{p[ee]=$-P}),m.forEach(($,ee)=>{m[ee]=$+P})}}if(Object.assign(e,{slides:d,snapGrid:p,slidesGrid:m,slidesSizesGrid:b}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){an(n,"--swiper-centered-offset-before",`${-p[0]}px`),an(n,"--swiper-centered-offset-after",`${e.size/2-b[b.length-1]/2}px`);const w=-e.snapGrid[0],M=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(P=>P+w),e.slidesGrid=e.slidesGrid.map(P=>P+M)}if(u!==c&&e.emit("slidesLengthChange"),p.length!==f&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),m.length!==_&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const w=`${s.containerModifierClass}backface-hidden`,M=e.el.classList.contains(w);u<=s.maxBackfaceHiddenSlides?M||e.el.classList.add(w):M&&e.el.classList.remove(w)}}function Ef(e){const t=this,s=[],n=t.virtual&&t.params.virtual.enabled;let a=0,r;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=i=>n?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{s.push(i)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const i=t.activeIndex+r;if(i>t.slides.length&&!n)break;s.push(o(i))}else s.push(o(t.activeIndex));for(r=0;r<s.length;r+=1)if(typeof s[r]<"u"){const i=s[r].offsetHeight;a=i>a?i:a}(a||a===0)&&(t.wrapperEl.style.height=`${a}px`)}function wf(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let n=0;n<t.length;n+=1)t[n].swiperSlideOffset=(e.isHorizontal()?t[n].offsetLeft:t[n].offsetTop)-s-e.cssOverflowAdjustment()}const xo=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function xf(e){e===void 0&&(e=this&&this.translate||0);const t=this,s=t.params,{slides:n,rtlTranslate:a,snapGrid:r}=t;if(n.length===0)return;typeof n[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;a&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=s.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<n.length;l+=1){const c=n[l];let d=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=n[0].swiperSlideOffset);const u=(o+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),p=(o-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),m=-(o-d),b=m+t.slidesSizesGrid[l],h=m>=0&&m<=t.size-t.slidesSizesGrid[l],g=m>=0&&m<t.size-1||b>1&&b<=t.size||m<=0&&b>=t.size;g&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),xo(c,g,s.slideVisibleClass),xo(c,h,s.slideFullyVisibleClass),c.progress=a?-u:u,c.originalProgress=a?-p:p}}function Af(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const s=t.params,n=t.maxTranslate()-t.minTranslate();let{progress:a,isBeginning:r,isEnd:o,progressLoop:i}=t;const l=r,c=o;if(n===0)a=0,r=!0,o=!0;else{a=(e-t.minTranslate())/n;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;r=d||a<=0,o=u||a>=1,d&&(a=0),u&&(a=1)}if(s.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],m=t.slidesGrid[u],b=t.slidesGrid[t.slidesGrid.length-1],h=Math.abs(e);h>=p?i=(h-p)/b:i=(h+b-m)/b,i>1&&(i-=1)}Object.assign(t,{progress:a,progressLoop:i,isBeginning:r,isEnd:o}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",a)}const fa=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function Pf(){const e=this,{slides:t,params:s,slidesEl:n,activeIndex:a}=e,r=e.virtual&&s.virtual.enabled,o=e.grid&&s.grid&&s.grid.rows>1,i=u=>Ct(n,`.${s.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(r)if(s.loop){let u=a-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${u}"]`)}else l=i(`[data-swiper-slide-index="${a}"]`);else o?(l=t.find(u=>u.column===a),d=t.find(u=>u.column===a+1),c=t.find(u=>u.column===a-1)):l=t[a];l&&(o||(d=ff(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!d&&(d=t[0]),c=pf(l,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{fa(u,u===l,s.slideActiveClass),fa(u,u===d,s.slideNextClass),fa(u,u===c,s.slidePrevClass)}),e.emitSlidesClasses()}const pn=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,n=t.closest(s());if(n){let a=n.querySelector(`.${e.params.lazyPreloaderClass}`);!a&&e.isElement&&(n.shadowRoot?a=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(a=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),a&&a.remove())})),a&&a.remove()}},ha=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},Ba=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const n=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=a,i=[o-t];i.push(...Array.from({length:t}).map((l,c)=>o+n+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&ha(e,c)});return}const r=a+n-1;if(e.params.rewind||e.params.loop)for(let o=a-t;o<=r+t;o+=1){const i=(o%s+s)%s;(i<a||i>r)&&ha(e,i)}else for(let o=Math.max(a-t,0);o<=Math.min(r+t,s-1);o+=1)o!==a&&(o>r||o<a)&&ha(e,o)};function Of(e){const{slidesGrid:t,params:s}=e,n=e.rtlTranslate?e.translate:-e.translate;let a;for(let r=0;r<t.length;r+=1)typeof t[r+1]<"u"?n>=t[r]&&n<t[r+1]-(t[r+1]-t[r])/2?a=r:n>=t[r]&&n<t[r+1]&&(a=r+1):n>=t[r]&&(a=r);return s.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function kf(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:n,params:a,activeIndex:r,realIndex:o,snapIndex:i}=t;let l=e,c;const d=m=>{let b=m-t.virtual.slidesBefore;return b<0&&(b=t.virtual.slides.length+b),b>=t.virtual.slides.length&&(b-=t.virtual.slides.length),b};if(typeof l>"u"&&(l=Of(t)),n.indexOf(s)>=0)c=n.indexOf(s);else{const m=Math.min(a.slidesPerGroupSkip,l);c=m+Math.floor((l-m)/a.slidesPerGroup)}if(c>=n.length&&(c=n.length-1),l===r&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&a.grid&&a.grid.rows>1;let p;if(t.virtual&&a.virtual.enabled&&a.loop)p=d(l);else if(u){const m=t.slides.find(h=>h.column===l);let b=parseInt(m.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(m),0)),p=Math.floor(b/a.grid.rows)}else if(t.slides[l]){const m=t.slides[l].getAttribute("data-swiper-slide-index");m?p=parseInt(m,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:r,activeIndex:l}),t.initialized&&Ba(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function Cf(e,t){const s=this,n=s.params;let a=e.closest(`.${n.slideClass}, swiper-slide`);!a&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!a&&i.matches&&i.matches(`.${n.slideClass}, swiper-slide`)&&(a=i)});let r=!1,o;if(a){for(let i=0;i<s.slides.length;i+=1)if(s.slides[i]===a){r=!0,o=i;break}}if(a&&r)s.clickedSlide=a,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=o;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}n.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var Rf={updateSize:Tf,updateSlides:Sf,updateAutoHeight:Ef,updateSlidesOffset:wf,updateSlidesProgress:xf,updateProgress:Af,updateSlidesClasses:Pf,updateActiveIndex:kf,updateClickedSlide:Cf};function Mf(e){e===void 0&&(e=this.isHorizontal()?"x":"y");const t=this,{params:s,rtlTranslate:n,translate:a,wrapperEl:r}=t;if(s.virtualTranslate)return n?-a:a;if(s.cssMode)return a;let o=lf(r,e);return o+=t.cssOverflowAdjustment(),n&&(o=-o),o||0}function Lf(e,t){const s=this,{rtlTranslate:n,params:a,wrapperEl:r,progress:o}=s;let i=0,l=0;const c=0;s.isHorizontal()?i=n?-e:e:l=e,a.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?i:l,a.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-i:-l:a.virtualTranslate||(s.isHorizontal()?i-=s.cssOverflowAdjustment():l-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let d;const u=s.maxTranslate()-s.minTranslate();u===0?d=0:d=(e-s.minTranslate())/u,d!==o&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function If(){return-this.snapGrid[0]}function Nf(){return-this.snapGrid[this.snapGrid.length-1]}function Df(e,t,s,n,a){e===void 0&&(e=0),t===void 0&&(t=this.params.speed),s===void 0&&(s=!0),n===void 0&&(n=!0);const r=this,{params:o,wrapperEl:i}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let d;if(n&&e>l?d=l:n&&e<c?d=c:d=e,r.updateProgress(d),o.cssMode){const u=r.isHorizontal();if(t===0)i[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return _l({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;i.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(r.setTransition(0),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,a),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Bf={getTranslate:Mf,setTranslate:Lf,minTranslate:If,maxTranslate:Nf,translateTo:Df};function Ff(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function Sl(e){let{swiper:t,runCallbacks:s,direction:n,step:a}=e;const{activeIndex:r,previousIndex:o}=t;let i=n;i||(r>o?i="next":r<o?i="prev":i="reset"),t.emit(`transition${a}`),s&&i==="reset"?t.emit(`slideResetTransition${a}`):s&&r!==o&&(t.emit(`slideChangeTransition${a}`),i==="next"?t.emit(`slideNextTransition${a}`):t.emit(`slidePrevTransition${a}`))}function $f(e,t){e===void 0&&(e=!0);const s=this,{params:n}=s;n.cssMode||(n.autoHeight&&s.updateAutoHeight(),Sl({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function Uf(e,t){e===void 0&&(e=!0);const s=this,{params:n}=s;s.animating=!1,!n.cssMode&&(s.setTransition(0),Sl({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var Hf={setTransition:Ff,transitionStart:$f,transitionEnd:Uf};function Gf(e,t,s,n,a){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:m,enabled:b}=r;if(!b&&!n&&!a||r.destroyed||r.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=r.params.speed);const h=Math.min(r.params.slidesPerGroupSkip,o);let g=h+Math.floor((o-h)/r.params.slidesPerGroup);g>=l.length&&(g=l.length-1);const f=-l[g];if(i.normalizeSlideIndex)for(let R=0;R<c.length;R+=1){const C=-Math.floor(f*100),x=Math.floor(c[R]*100),w=Math.floor(c[R+1]*100);typeof c[R+1]<"u"?C>=x&&C<w-(w-x)/2?o=R:C>=x&&C<w&&(o=R+1):C>=x&&(o=R)}if(r.initialized&&o!==u&&(!r.allowSlideNext&&(p?f>r.translate&&f>r.minTranslate():f<r.translate&&f<r.minTranslate())||!r.allowSlidePrev&&f>r.translate&&f>r.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(f);let _;o>u?_="next":o<u?_="prev":_="reset";const y=r.virtual&&r.params.virtual.enabled;if(!(y&&a)&&(p&&-f===r.translate||!p&&f===r.translate))return r.updateActiveIndex(o),i.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),i.effect!=="slide"&&r.setTranslate(f),_!=="reset"&&(r.transitionStart(s,_),r.transitionEnd(s,_)),!1;if(i.cssMode){const R=r.isHorizontal(),C=p?f:-f;if(t===0)y&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),y&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{m[R?"scrollLeft":"scrollTop"]=C})):m[R?"scrollLeft":"scrollTop"]=C,y&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return _l({swiper:r,targetPosition:C,side:R?"left":"top"}),!0;m.scrollTo({[R?"left":"top"]:C,behavior:"smooth"})}return!0}const A=Tl().isSafari;return y&&!a&&A&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(t),r.setTranslate(f),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,n),r.transitionStart(s,_),t===0?r.transitionEnd(s,_):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(C){!r||r.destroyed||C.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,_))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function Yf(e,t,s,n){e===void 0&&(e=0),s===void 0&&(s=!0),typeof e=="string"&&(e=parseInt(e,10));const a=this;if(a.destroyed)return;typeof t>"u"&&(t=a.params.speed);const r=a.grid&&a.params.grid&&a.params.grid.rows>1;let o=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)o=o+a.virtual.slidesBefore;else{let i;if(r){const p=o*a.params.grid.rows;i=a.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===p).column}else i=a.getSlideIndexByData(o);const l=r?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:c}=a.params;let d=a.params.slidesPerView;d==="auto"?d=a.slidesPerViewDynamic():(d=Math.ceil(parseFloat(a.params.slidesPerView,10)),c&&d%2===0&&(d=d+1));let u=l-i<d;if(c&&(u=u||i<Math.ceil(d/2)),n&&c&&a.params.slidesPerView!=="auto"&&!r&&(u=!1),u){const p=c?i<a.activeIndex?"prev":"next":i-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:p,slideTo:!0,activeSlideIndex:p==="next"?i+1:i-l+1,slideRealIndex:p==="next"?a.realIndex:void 0})}if(r){const p=o*a.params.grid.rows;o=a.slides.find(m=>m.getAttribute("data-swiper-slide-index")*1===p).column}else o=a.getSlideIndexByData(o)}return requestAnimationFrame(()=>{a.slideTo(o,t,s,n)}),a}function jf(e,t,s){t===void 0&&(t=!0);const n=this,{enabled:a,params:r,animating:o}=n;if(!a||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);let i=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(i=Math.max(n.slidesPerViewDynamic("current",!0),1));const l=n.activeIndex<r.slidesPerGroupSkip?1:i,c=n.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(n.loopFix({direction:"next"}),n._clientLeft=n.wrapperEl.clientLeft,n.activeIndex===n.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{n.slideTo(n.activeIndex+l,e,t,s)}),!0}return r.rewind&&n.isEnd?n.slideTo(0,e,t,s):n.slideTo(n.activeIndex+l,e,t,s)}function Kf(e,t,s){t===void 0&&(t=!0);const n=this,{params:a,snapGrid:r,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=n;if(!l||n.destroyed)return n;typeof e>"u"&&(e=n.params.speed);const d=n.virtual&&a.virtual.enabled;if(a.loop){if(c&&!d&&a.loopPreventsSliding)return!1;n.loopFix({direction:"prev"}),n._clientLeft=n.wrapperEl.clientLeft}const u=i?n.translate:-n.translate;function p(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const m=p(u),b=r.map(_=>p(_)),h=a.freeMode&&a.freeMode.enabled;let g=r[b.indexOf(m)-1];if(typeof g>"u"&&(a.cssMode||h)){let _;r.forEach((y,v)=>{m>=y&&(_=v)}),typeof _<"u"&&(g=h?r[_]:r[_>0?_-1:_])}let f=0;if(typeof g<"u"&&(f=o.indexOf(g),f<0&&(f=n.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(f=f-n.slidesPerViewDynamic("previous",!0)+1,f=Math.max(f,0))),a.rewind&&n.isBeginning){const _=n.params.virtual&&n.params.virtual.enabled&&n.virtual?n.virtual.slides.length-1:n.slides.length-1;return n.slideTo(_,e,t,s)}else if(a.loop&&n.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{n.slideTo(f,e,t,s)}),!0;return n.slideTo(f,e,t,s)}function zf(e,t,s){t===void 0&&(t=!0);const n=this;if(!n.destroyed)return typeof e>"u"&&(e=n.params.speed),n.slideTo(n.activeIndex,e,t,s)}function qf(e,t,s,n){t===void 0&&(t=!0),n===void 0&&(n=.5);const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);let r=a.activeIndex;const o=Math.min(a.params.slidesPerGroupSkip,r),i=o+Math.floor((r-o)/a.params.slidesPerGroup),l=a.rtlTranslate?a.translate:-a.translate;if(l>=a.snapGrid[i]){const c=a.snapGrid[i],d=a.snapGrid[i+1];l-c>(d-c)*n&&(r+=a.params.slidesPerGroup)}else{const c=a.snapGrid[i-1],d=a.snapGrid[i];l-c<=(d-c)*n&&(r-=a.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,a.slidesGrid.length-1),a.slideTo(r,e,t,s)}function Wf(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,n=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let a=e.getSlideIndexWhenGrid(e.clickedIndex),r;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):a>(i?(e.slides.length-n)/2-(e.params.grid.rows-1):e.slides.length-n)?(e.loopFix(),a=e.getSlideIndex(Ct(s,`${o}[data-swiper-slide-index="${r}"]`)[0]),bl(()=>{e.slideTo(a)})):e.slideTo(a)}else e.slideTo(a)}var Vf={slideTo:Gf,slideToLoop:Yf,slideNext:jf,slidePrev:Kf,slideReset:zf,slideToClosest:qf,slideToClickedSlide:Wf};function Jf(e,t){const s=this,{params:n,slidesEl:a}=s;if(!n.loop||s.virtual&&s.params.virtual.enabled)return;const r=()=>{Ct(a,`.${n.slideClass}, swiper-slide`).forEach((m,b)=>{m.setAttribute("data-swiper-slide-index",b)})},o=()=>{const p=Ct(a,`.${n.slideBlankClass}`);p.forEach(m=>{m.remove()}),p.length>0&&(s.recalcSlides(),s.updateSlides())},i=s.grid&&n.grid&&n.grid.rows>1;n.loopAddBlankSlides&&(n.slidesPerGroup>1||i)&&o();const l=n.slidesPerGroup*(i?n.grid.rows:1),c=s.slides.length%l!==0,d=i&&s.slides.length%n.grid.rows!==0,u=p=>{for(let m=0;m<p;m+=1){const b=s.isElement?Da("swiper-slide",[n.slideBlankClass]):Da("div",[n.slideClass,n.slideBlankClass]);s.slidesEl.append(b)}};if(c){if(n.loopAddBlankSlides){const p=l-s.slides.length%l;u(p),s.recalcSlides(),s.updateSlides()}else wn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(n.loopAddBlankSlides){const p=n.grid.rows-s.slides.length%n.grid.rows;u(p),s.recalcSlides(),s.updateSlides()}else wn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();s.loopFix({slideRealIndex:e,direction:n.centeredSlides?void 0:"next",initial:t})}function Xf(e){let{slideRealIndex:t,slideTo:s=!0,direction:n,setTranslate:a,activeSlideIndex:r,initial:o,byController:i,byMousewheel:l}=e===void 0?{}:e;const c=this;if(!c.params.loop)return;c.emit("beforeLoopFix");const{slides:d,allowSlidePrev:u,allowSlideNext:p,slidesEl:m,params:b}=c,{centeredSlides:h,initialSlide:g}=b;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&b.virtual.enabled){s&&(!b.centeredSlides&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):b.centeredSlides&&c.snapIndex<b.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=p,c.emit("loopFix");return}let f=b.slidesPerView;f==="auto"?f=c.slidesPerViewDynamic():(f=Math.ceil(parseFloat(b.slidesPerView,10)),h&&f%2===0&&(f=f+1));const _=b.slidesPerGroupAuto?f:b.slidesPerGroup;let y=h?Math.max(_,Math.ceil(f/2)):_;y%_!==0&&(y+=_-y%_),y+=b.loopAdditionalSlides,c.loopedSlides=y;const v=c.grid&&b.grid&&b.grid.rows>1;d.length<f+y||c.params.effect==="cards"&&d.length<f+y*2?wn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):v&&b.grid.fill==="row"&&wn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const S=[],A=[],R=v?Math.ceil(d.length/b.grid.rows):d.length,C=o&&R-g<f&&!h;let x=C?g:c.activeIndex;typeof r>"u"?r=c.getSlideIndex(d.find(Y=>Y.classList.contains(b.slideActiveClass))):x=r;const w=n==="next"||!n,M=n==="prev"||!n;let P=0,$=0;const Q=(v?d[r].column:r)+(h&&typeof a>"u"?-f/2+.5:0);if(Q<y){P=Math.max(y-Q,_);for(let Y=0;Y<y-Q;Y+=1){const G=Y-Math.floor(Y/R)*R;if(v){const U=R-G-1;for(let se=d.length-1;se>=0;se-=1)d[se].column===U&&S.push(se)}else S.push(R-G-1)}}else if(Q+f>R-y){$=Math.max(Q-(R-y*2),_),C&&($=Math.max($,f-R+g+1));for(let Y=0;Y<$;Y+=1){const G=Y-Math.floor(Y/R)*R;v?d.forEach((U,se)=>{U.column===G&&A.push(se)}):A.push(G)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect==="cards"&&d.length<f+y*2&&(A.includes(r)&&A.splice(A.indexOf(r),1),S.includes(r)&&S.splice(S.indexOf(r),1)),M&&S.forEach(Y=>{d[Y].swiperLoopMoveDOM=!0,m.prepend(d[Y]),d[Y].swiperLoopMoveDOM=!1}),w&&A.forEach(Y=>{d[Y].swiperLoopMoveDOM=!0,m.append(d[Y]),d[Y].swiperLoopMoveDOM=!1}),c.recalcSlides(),b.slidesPerView==="auto"?c.updateSlides():v&&(S.length>0&&M||A.length>0&&w)&&c.slides.forEach((Y,G)=>{c.grid.updateSlide(G,Y,c.slides)}),b.watchSlidesProgress&&c.updateSlidesOffset(),s){if(S.length>0&&M){if(typeof t>"u"){const Y=c.slidesGrid[x],U=c.slidesGrid[x+P]-Y;l?c.setTranslate(c.translate-U):(c.slideTo(x+Math.ceil(P),0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-U,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-U))}else if(a){const Y=v?S.length/b.grid.rows:S.length;c.slideTo(c.activeIndex+Y,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(A.length>0&&w)if(typeof t>"u"){const Y=c.slidesGrid[x],U=c.slidesGrid[x-$]-Y;l?c.setTranslate(c.translate-U):(c.slideTo(x-$,0,!1,!0),a&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-U,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-U))}else{const Y=v?A.length/b.grid.rows:A.length;c.slideTo(c.activeIndex-Y,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=p,c.controller&&c.controller.control&&!i){const Y={slideRealIndex:t,direction:n,setTranslate:a,activeSlideIndex:r,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(G=>{!G.destroyed&&G.params.loop&&G.loopFix({...Y,slideTo:G.params.slidesPerView===b.slidesPerView?s:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...Y,slideTo:c.controller.control.params.slidesPerView===b.slidesPerView?s:!1})}c.emit("loopFix")}function Qf(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const n=[];e.slides.forEach(a=>{const r=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;n[r]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),n.forEach(a=>{s.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Zf={loopCreate:Jf,loopFix:Xf,loopDestroy:Qf};function eh(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function th(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var sh={setGrabCursor:eh,unsetGrabCursor:th};function nh(e,t){t===void 0&&(t=this);function s(n){if(!n||n===bt()||n===Fe())return null;n.assignedSlot&&(n=n.assignedSlot);const a=n.closest(e);return!a&&!n.getRootNode?null:a||s(n.getRootNode().host)}return s(t)}function Ao(e,t,s){const n=Fe(),{params:a}=e,r=a.edgeSwipeDetection,o=a.edgeSwipeThreshold;return r&&(s<=o||s>=n.innerWidth-o)?r==="prevent"?(t.preventDefault(),!0):!1:!0}function ah(e){const t=this,s=bt();let n=e;n.originalEvent&&(n=n.originalEvent);const a=t.touchEventsData;if(n.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==n.pointerId)return;a.pointerId=n.pointerId}else n.type==="touchstart"&&n.targetTouches.length===1&&(a.touchId=n.targetTouches[0].identifier);if(n.type==="touchstart"){Ao(t,n,n.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:i}=t;if(!i||!r.simulateTouch&&n.pointerType==="mouse"||t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let l=n.target;if(r.touchEventsTarget==="wrapper"&&!uf(l,t.wrapperEl)||"which"in n&&n.which===3||"button"in n&&n.button>0||a.isTouched&&a.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=n.composedPath?n.composedPath():n.path;c&&n.target&&n.target.shadowRoot&&d&&(l=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(n.target&&n.target.shadowRoot);if(r.noSwiping&&(p?nh(u,l):l.closest(u))){t.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;o.currentX=n.pageX,o.currentY=n.pageY;const m=o.currentX,b=o.currentY;if(!Ao(t,n,m))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=m,o.startY=b,a.touchStartTime=En(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(a.allowThresholdMove=!1);let h=!0;l.matches(a.focusableElements)&&(h=!1,l.nodeName==="SELECT"&&(a.isTouched=!1)),s.activeElement&&s.activeElement.matches(a.focusableElements)&&s.activeElement!==l&&(n.pointerType==="mouse"||n.pointerType!=="mouse"&&!l.matches(a.focusableElements))&&s.activeElement.blur();const g=h&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||g)&&!l.isContentEditable&&n.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",n)}function rh(e){const t=bt(),s=this,n=s.touchEventsData,{params:a,touches:r,rtlTranslate:o,enabled:i}=s;if(!i||!a.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(n.touchId!==null||l.pointerId!==n.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(S=>S.identifier===n.touchId),!c||c.identifier!==n.touchId)return}else c=l;if(!n.isTouched){n.startMoving&&n.isScrolling&&s.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!s.allowTouchMove){l.target.matches(n.focusableElements)||(s.allowClick=!1),n.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),n.touchStartTime=En());return}if(a.touchReleaseOnEdges&&!a.loop)if(s.isVertical()){if(u<r.startY&&s.translate<=s.maxTranslate()||u>r.startY&&s.translate>=s.minTranslate()){n.isTouched=!1,n.isMoved=!1;return}}else{if(o&&(d>r.startX&&-s.translate<=s.maxTranslate()||d<r.startX&&-s.translate>=s.minTranslate()))return;if(!o&&(d<r.startX&&s.translate<=s.maxTranslate()||d>r.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(n.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(n.focusableElements)){n.isMoved=!0,s.allowClick=!1;return}n.allowTouchCallbacks&&s.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const p=r.currentX-r.startX,m=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(p**2+m**2)<s.params.threshold)return;if(typeof n.isScrolling>"u"){let S;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?n.isScrolling=!1:p*p+m*m>=25&&(S=Math.atan2(Math.abs(m),Math.abs(p))*180/Math.PI,n.isScrolling=s.isHorizontal()?S>a.touchAngle:90-S>a.touchAngle)}if(n.isScrolling&&s.emit("touchMoveOpposite",l),typeof n.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(n.startMoving=!0),n.isScrolling||l.type==="touchmove"&&n.preventTouchMoveFromPointerMove){n.isTouched=!1;return}if(!n.startMoving)return;s.allowClick=!1,!a.cssMode&&l.cancelable&&l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation();let b=s.isHorizontal()?p:m,h=s.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;a.oneWayMovement&&(b=Math.abs(b)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),r.diff=b,b*=a.touchRatio,o&&(b=-b,h=-h);const g=s.touchesDirection;s.swipeDirection=b>0?"prev":"next",s.touchesDirection=h>0?"prev":"next";const f=s.params.loop&&!a.cssMode,_=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!n.isMoved){if(f&&_&&s.loopFix({direction:s.swipeDirection}),n.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const S=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(S)}n.allowMomentumBounce=!1,a.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",l)}if(new Date().getTime(),a._loopSwapReset!==!1&&n.isMoved&&n.allowThresholdMove&&g!==s.touchesDirection&&f&&_&&Math.abs(b)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:n.currentTranslate}),n.loopSwapReset=!0,n.startTranslate=n.currentTranslate;return}s.emit("sliderMove",l),n.isMoved=!0,n.currentTranslate=b+n.startTranslate;let y=!0,v=a.resistanceRatio;if(a.touchReleaseOnEdges&&(v=0),b>0?(f&&_&&n.allowThresholdMove&&n.currentTranslate>(a.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),n.currentTranslate>s.minTranslate()&&(y=!1,a.resistance&&(n.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+n.startTranslate+b)**v))):b<0&&(f&&_&&n.allowThresholdMove&&n.currentTranslate<(a.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(a.slidesPerView!=="auto"&&s.slides.length-a.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(a.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),n.currentTranslate<s.maxTranslate()&&(y=!1,a.resistance&&(n.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-n.startTranslate-b)**v))),y&&(l.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&n.currentTranslate<n.startTranslate&&(n.currentTranslate=n.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&n.currentTranslate>n.startTranslate&&(n.currentTranslate=n.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(n.currentTranslate=n.startTranslate),a.threshold>0)if(Math.abs(b)>a.threshold||n.allowThresholdMove){if(!n.allowThresholdMove){n.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,n.currentTranslate=n.startTranslate,r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{n.currentTranslate=n.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&s.freeMode||a.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(n.currentTranslate),s.setTranslate(n.currentTranslate))}function oh(e){const t=this,s=t.touchEventsData;let n=e;n.originalEvent&&(n=n.originalEvent);let a;if(n.type==="touchend"||n.type==="touchcancel"){if(a=[...n.changedTouches].find(S=>S.identifier===s.touchId),!a||a.identifier!==s.touchId)return}else{if(s.touchId!==null||n.pointerId!==s.pointerId)return;a=n}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(n.type)&&!(["pointercancel","contextmenu"].includes(n.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&n.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",n),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=En(),p=u-s.touchStartTime;if(t.allowClick){const S=n.path||n.composedPath&&n.composedPath();t.updateClickedSlide(S&&S[0]||n.target,S),t.emit("tap click",n),p<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",n)}if(s.lastClickTime=En(),bl(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||i.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let m;if(o.followFinger?m=l?t.translate:-t.translate:m=-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:m});return}const b=m>=-t.maxTranslate()&&!t.params.loop;let h=0,g=t.slidesSizesGrid[0];for(let S=0;S<c.length;S+=S<o.slidesPerGroupSkip?1:o.slidesPerGroup){const A=S<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[S+A]<"u"?(b||m>=c[S]&&m<c[S+A])&&(h=S,g=c[S+A]-c[S]):(b||m>=c[S])&&(h=S,g=c[c.length-1]-c[c.length-2])}let f=null,_=null;o.rewind&&(t.isBeginning?_=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0));const y=(m-c[h])/g,v=h<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(y>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?f:h+v):t.slideTo(h)),t.swipeDirection==="prev"&&(y>1-o.longSwipesRatio?t.slideTo(h+v):_!==null&&y<0&&Math.abs(y)>o.longSwipesRatio?t.slideTo(_):t.slideTo(h))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(n.target===t.navigation.nextEl||n.target===t.navigation.prevEl)?n.target===t.navigation.nextEl?t.slideTo(h+v):t.slideTo(h):(t.swipeDirection==="next"&&t.slideTo(f!==null?f:h+v),t.swipeDirection==="prev"&&t.slideTo(_!==null?_:h))}}function Po(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:n,allowSlidePrev:a,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=n,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function ih(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function lh(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:n}=e;if(!n)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let a;const r=e.maxTranslate()-e.minTranslate();r===0?a=0:a=(e.translate-e.minTranslate())/r,a!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function ch(e){const t=this;pn(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function dh(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const El=(e,t)=>{const s=bt(),{params:n,el:a,wrapperEl:r,device:o}=e,i=!!n.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!a||typeof a=="string"||(s[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),a[l]("touchstart",e.onTouchStart,{passive:!1}),a[l]("pointerdown",e.onTouchStart,{passive:!1}),s[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),s[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),s[l]("touchend",e.onTouchEnd,{passive:!0}),s[l]("pointerup",e.onTouchEnd,{passive:!0}),s[l]("pointercancel",e.onTouchEnd,{passive:!0}),s[l]("touchcancel",e.onTouchEnd,{passive:!0}),s[l]("pointerout",e.onTouchEnd,{passive:!0}),s[l]("pointerleave",e.onTouchEnd,{passive:!0}),s[l]("contextmenu",e.onTouchEnd,{passive:!0}),(n.preventClicks||n.preventClicksPropagation)&&a[l]("click",e.onClick,!0),n.cssMode&&r[l]("scroll",e.onScroll),n.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Po,!0):e[c]("observerUpdate",Po,!0),a[l]("load",e.onLoad,{capture:!0}))};function uh(){const e=this,{params:t}=e;e.onTouchStart=ah.bind(e),e.onTouchMove=rh.bind(e),e.onTouchEnd=oh.bind(e),e.onDocumentTouchStart=dh.bind(e),t.cssMode&&(e.onScroll=lh.bind(e)),e.onClick=ih.bind(e),e.onLoad=ch.bind(e),El(e,"on")}function ph(){El(this,"off")}var fh={attachEvents:uh,detachEvents:ph};const Oo=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function hh(){const e=this,{realIndex:t,initialized:s,params:n,el:a}=e,r=n.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=bt(),i=n.breakpointsBase==="window"||!n.breakpointsBase?n.breakpointsBase:"container",l=["window","container"].includes(n.breakpointsBase)||!n.breakpointsBase?e.el:o.querySelector(n.breakpointsBase),c=e.getBreakpoint(r,i,l);if(!c||e.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||e.originalParams,p=Oo(e,n),m=Oo(e,u),b=e.params.grabCursor,h=u.grabCursor,g=n.enabled;p&&!m?(a.classList.remove(`${n.containerModifierClass}grid`,`${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&m&&(a.classList.add(`${n.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&n.grid.fill==="column")&&a.classList.add(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!h?e.unsetGrabCursor():!b&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(A=>{if(typeof u[A]>"u")return;const R=n[A]&&n[A].enabled,C=u[A]&&u[A].enabled;R&&!C&&e[A].disable(),!R&&C&&e[A].enable()});const f=u.direction&&u.direction!==n.direction,_=n.loop&&(u.slidesPerView!==n.slidesPerView||f),y=n.loop;f&&s&&e.changeDirection(),Ke(e.params,u);const v=e.params.enabled,S=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),g&&!v?e.disable():!g&&v&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),s&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!y&&S?(e.loopCreate(t),e.updateSlides()):y&&!S&&e.loopDestroy()),e.emit("breakpoint",u)}function mh(e,t,s){if(t===void 0&&(t="window"),!e||t==="container"&&!s)return;let n=!1;const a=Fe(),r=t==="window"?a.innerHeight:s.clientHeight,o=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:r*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];t==="window"?a.matchMedia(`(min-width: ${c}px)`).matches&&(n=l):c<=s.clientWidth&&(n=l)}return n||"max"}var gh={setBreakpoint:hh,getBreakpoint:mh};function bh(e,t){const s=[];return e.forEach(n=>{typeof n=="object"?Object.keys(n).forEach(a=>{n[a]&&s.push(t+a)}):typeof n=="string"&&s.push(t+n)}),s}function _h(){const e=this,{classNames:t,params:s,rtl:n,el:a,device:r}=e,o=bh(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:n},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...o),a.classList.add(...t),e.emitContainerClasses()}function yh(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var vh={addClasses:_h,removeClasses:yh};function Th(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:n}=s;if(n){const a=e.slides.length-1,r=e.slidesGrid[a]+e.slidesSizesGrid[a]+n*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Sh={checkOverflow:Th},ko={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Eh(e,t){return function(n){n===void 0&&(n={});const a=Object.keys(n)[0],r=n[a];if(typeof r!="object"||r===null){Ke(t,n);return}if(e[a]===!0&&(e[a]={enabled:!0}),a==="navigation"&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),!(a in e&&"enabled"in r)){Ke(t,n);return}typeof e[a]=="object"&&!("enabled"in e[a])&&(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),Ke(t,n)}}const ma={eventsEmitter:vf,update:Rf,translate:Bf,transition:Hf,slide:Vf,loop:Zf,grabCursor:sh,events:fh,breakpoints:gh,checkOverflow:Sh,classes:vh},ga={};class Ze{constructor(){let t,s;for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];a.length===1&&a[0].constructor&&Object.prototype.toString.call(a[0]).slice(8,-1)==="Object"?s=a[0]:[t,s]=a,s||(s={}),s=Ke({},s),t&&!s.el&&(s.el=t);const o=bt();if(s.el&&typeof s.el=="string"&&o.querySelectorAll(s.el).length>1){const d=[];return o.querySelectorAll(s.el).forEach(u=>{const p=Ke({},s,{el:u});d.push(new Ze(p))}),d}const i=this;i.__swiper__=!0,i.support=yl(),i.device=vl({userAgent:s.userAgent}),i.browser=Tl(),i.eventsListeners={},i.eventsAnyListeners=[],i.modules=[...i.__modules__],s.modules&&Array.isArray(s.modules)&&i.modules.push(...s.modules);const l={};i.modules.forEach(d=>{d({params:s,swiper:i,extendParams:Eh(s,l),on:i.on.bind(i),once:i.once.bind(i),off:i.off.bind(i),emit:i.emit.bind(i)})});const c=Ke({},ko,l);return i.params=Ke({},c,ga,s),i.originalParams=Ke({},i.params),i.passedParams=Ke({},s),i.params&&i.params.on&&Object.keys(i.params.on).forEach(d=>{i.on(d,i.params.on[d])}),i.params&&i.params.onAny&&i.onAny(i.params.onAny),Object.assign(i,{enabled:i.params.enabled,el:t,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return i.params.direction==="horizontal"},isVertical(){return i.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:i.params.allowSlideNext,allowSlidePrev:i.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:i.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:i.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),i.emit("_swiper"),i.params.init&&i.init(),i}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:n}=this,a=Ct(s,`.${n.slideClass}, swiper-slide`),r=Eo(a[0]);return Eo(t)-r}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:n}=t;t.slides=Ct(s,`.${n.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const n=this;t=Math.min(Math.max(t,0),1);const a=n.minTranslate(),o=(n.maxTranslate()-a)*t+a;n.translateTo(o,typeof s>"u"?0:s),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(n=>n.indexOf("swiper")===0||n.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(n=>n.indexOf("swiper-slide")===0||n.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(n=>{const a=t.getSlideClasses(n);s.push({slideEl:n,classNames:a}),t.emit("_slideClass",n,a)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t,s){t===void 0&&(t="current"),s===void 0&&(s=!1);const n=this,{params:a,slides:r,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=n;let d=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let m=c+1;m<r.length;m+=1)r[m]&&!p&&(u+=Math.ceil(r[m].swiperSlideSize),d+=1,u>l&&(p=!0));for(let m=c-1;m>=0;m-=1)r[m]&&!p&&(u+=r[m].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<r.length;u+=1)(s?o[u]+i[u]-o[c]<l:o[u]-o[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:n}=t;n.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&pn(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function a(){const o=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let r;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)a(),n.autoHeight&&t.updateAutoHeight();else{if((n.slidesPerView==="auto"||n.slidesPerView>1)&&t.isEnd&&!n.centeredSlides){const o=t.virtual&&n.virtual.enabled?t.virtual.slides:t.slides;r=t.slideTo(o.length-1,0,!1,!0)}else r=t.slideTo(t.activeIndex,0,!1,!0);r||a()}n.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s){s===void 0&&(s=!0);const n=this,a=n.params.direction;return t||(t=a==="horizontal"?"vertical":"horizontal"),t===a||t!=="horizontal"&&t!=="vertical"||(n.el.classList.remove(`${n.params.containerModifierClass}${a}`),n.el.classList.add(`${n.params.containerModifierClass}${t}`),n.emitContainerClasses(),n.params.direction=t,n.slides.forEach(r=>{t==="vertical"?r.style.width="":r.style.height=""}),n.emit("changeDirection"),s&&n.update()),n}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let n=t||s.params.el;if(typeof n=="string"&&(n=document.querySelector(n)),!n)return!1;n.swiper=s,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const a=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(a()):Ct(n,a())[0];return!o&&s.params.createElements&&(o=Da("div",s.params.wrapperClass),n.append(o),Ct(n,`.${s.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(s,{el:n,wrapperEl:o,slidesEl:s.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:o,hostEl:s.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()==="rtl"||Yt(n,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(n.dir.toLowerCase()==="rtl"||Yt(n,"direction")==="rtl"),wrongRTL:Yt(o,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const a=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&a.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(r=>{r.complete?pn(s,r):r.addEventListener("load",o=>{pn(s,o.target)})}),Ba(s),s.initialized=!0,Ba(s),s.emit("init"),s.emit("afterInit"),s}destroy(t,s){t===void 0&&(t=!0),s===void 0&&(s=!0);const n=this,{params:a,el:r,wrapperEl:o,slides:i}=n;return typeof n.params>"u"||n.destroyed||(n.emit("beforeDestroy"),n.initialized=!1,n.detachEvents(),a.loop&&n.loopDestroy(),s&&(n.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),n.emit("destroy"),Object.keys(n.eventsListeners).forEach(l=>{n.off(l)}),t!==!1&&(n.el&&typeof n.el!="string"&&(n.el.swiper=null),rf(n)),n.destroyed=!0),null}static extendDefaults(t){Ke(ga,t)}static get extendedDefaults(){return ga}static get defaults(){return ko}static installModule(t){Ze.prototype.__modules__||(Ze.prototype.__modules__=[]);const s=Ze.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>Ze.installModule(s)),Ze):(Ze.installModule(t),Ze)}}Object.keys(ma).forEach(e=>{Object.keys(ma[e]).forEach(t=>{Ze.prototype[t]=ma[e][t]})});Ze.use([_f,yf]);function wh(e){let{swiper:t,extendParams:s,on:n,emit:a,params:r}=e;t.autoplay={running:!1,paused:!1,timeLeft:0},s({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,i,l=r&&r.autoplay?r.autoplay.delay:3e3,c=r&&r.autoplay?r.autoplay.delay:3e3,d,u=new Date().getTime(),p,m,b,h,g,f,_;function y(U){!t||t.destroyed||!t.wrapperEl||U.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",y),!(_||U.detail&&U.detail.bySwiperTouchMove)&&w())}const v=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?p=!0:p&&(c=d,p=!1);const U=t.autoplay.paused?d:u+c-new Date().getTime();t.autoplay.timeLeft=U,a("autoplayTimeLeft",U,U/l),i=requestAnimationFrame(()=>{v()})},S=()=>{let U;return t.virtual&&t.params.virtual.enabled?U=t.slides.find(W=>W.classList.contains("swiper-slide-active")):U=t.slides[t.activeIndex],U?parseInt(U.getAttribute("data-swiper-autoplay"),10):void 0},A=U=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(i),v();let se=typeof U>"u"?t.params.autoplay.delay:U;l=t.params.autoplay.delay,c=t.params.autoplay.delay;const W=S();!Number.isNaN(W)&&W>0&&typeof U>"u"&&(se=W,l=W,c=W),d=se;const re=t.params.speed,te=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(re,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,re,!0,!0),a("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(re,!0,!0),a("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,re,!0,!0),a("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{A()})))};return se>0?(clearTimeout(o),o=setTimeout(()=>{te()},se)):requestAnimationFrame(()=>{te()}),se},R=()=>{u=new Date().getTime(),t.autoplay.running=!0,A(),a("autoplayStart")},C=()=>{t.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(i),a("autoplayStop")},x=(U,se)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(o),U||(f=!0);const W=()=>{a("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",y):w()};if(t.autoplay.paused=!0,se){g&&(d=t.params.autoplay.delay),g=!1,W();return}d=(d||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&d<0&&!t.params.loop)&&(d<0&&(d=0),W())},w=()=>{t.isEnd&&d<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),f?(f=!1,A(d)):A(),t.autoplay.paused=!1,a("autoplayResume"))},M=()=>{if(t.destroyed||!t.autoplay.running)return;const U=bt();U.visibilityState==="hidden"&&(f=!0,x(!0)),U.visibilityState==="visible"&&w()},P=U=>{U.pointerType==="mouse"&&(f=!0,_=!0,!(t.animating||t.autoplay.paused)&&x(!0))},$=U=>{U.pointerType==="mouse"&&(_=!1,t.autoplay.paused&&w())},ee=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",P),t.el.addEventListener("pointerleave",$))},Q=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",P),t.el.removeEventListener("pointerleave",$))},Y=()=>{bt().addEventListener("visibilitychange",M)},G=()=>{bt().removeEventListener("visibilitychange",M)};n("init",()=>{t.params.autoplay.enabled&&(ee(),Y(),R())}),n("destroy",()=>{Q(),G(),t.autoplay.running&&C()}),n("_freeModeStaticRelease",()=>{(b||f)&&w()}),n("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?C():x(!0,!0)}),n("beforeTransitionStart",(U,se,W)=>{t.destroyed||!t.autoplay.running||(W||!t.params.autoplay.disableOnInteraction?x(!0,!0):C())}),n("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){C();return}m=!0,b=!1,f=!1,h=setTimeout(()=>{f=!0,b=!0,x(!0)},200)}}),n("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!m)){if(clearTimeout(h),clearTimeout(o),t.params.autoplay.disableOnInteraction){b=!1,m=!1;return}b&&t.params.cssMode&&w(),b=!1,m=!1}}),n("slideChange",()=>{t.destroyed||!t.autoplay.running||(g=!0)}),Object.assign(t.autoplay,{start:R,stop:C,pause:x,resume:w})}const xh={class:"home-layout"},Ah=["data-user-name"],Ph={__name:"home_route",setup(e){const t=vt(),s=Te();window.CoreBetSlip=ml;const n=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__select"),u=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u}),l&&c&&d&&u){const p=window.matchMedia("(orientation: portrait)").matches,m=window.matchMedia("(max-width: 768px)").matches;(p||m)&&(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),l.addEventListener("click",b=>{console.log("[Bet Grid Toggle] Button clicked!"),b.preventDefault(),b.stopPropagation(),u.classList.contains("collapsed")?(d.classList.add("collapsed"),u.classList.remove("collapsed"),c.textContent="Close Bet Slip"):(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:d.classList.contains("collapsed"),slipCollapsed:u.classList.contains("collapsed"),buttonText:c.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u})};document.addEventListener("click",l=>{const c=l.target;if(c&&c.dataset?.promotionTopic){const d={timestamp:Date.now(),heroImg:c.dataset.promotionHeroImg||"",caption:c.dataset.promotionCaption||"",tagline:c.dataset.promotionTagline||"",toast:c.dataset.promotionToast||"",topic:c.dataset.promotionTopic||"",topicToken:c.dataset.promotionTopicToken||"",marquee:c.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",d),J.publish(s.hierTopics.PROMOTION__CLICK,JSON.stringify(d))}c&&c.dataset?.publishRouteHome&&(c.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(u=>{u===c?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),J.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),c&&c.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(l,c=!1)=>{const d=document.querySelector(".tournaments-grid");if(!d)return;d.innerHTML="";const u=document.getElementById("app"),p=u?.getAttribute("data-sync-theme")||"dark",m=u?.getAttribute("data-sync-lang")||"en",b=u?.getAttribute("data-sync-motif")||"brand",h=g=>{const f=document.createElement("article"),_=g.status||"DRAFT";f.className=`tournament-item tournament-status-${_.toLowerCase()}`;const y=document.createElement("bma-tournament-card");return y.setAttribute("data-bma-tourn-id",g.id||""),y.setAttribute("data-bma-tourn-guid",g.guid||""),y.setAttribute("data-bma-tourn-caption",g.caption||""),y.setAttribute("data-bma-tourn-tagline",g.tagline||""),y.setAttribute("data-bma-tourn-window_start_time",g.window_start_time||""),y.setAttribute("data-bma-tourn-window_end_time",g.window_end_time||""),y.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(g.sports_allowed)?JSON.stringify(g.sports_allowed):g.sports_allowed||""),y.setAttribute("data-bma-tourn-entities",g.entities?JSON.stringify(g.entities):""),y.setAttribute("data-bma-tourn-tournament_dollars",g.tournament_dollars||""),y.setAttribute("data-bma-tourn-prize_distro",Array.isArray(g.prize_distro)?JSON.stringify(g.prize_distro):g.prize_distro||""),y.setAttribute("data-bma-tourn-matches",Array.isArray(g.matches_guids)?JSON.stringify(g.matches_guids):g.matches_guids||""),y.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(g.matches_expanded)?JSON.stringify(g.matches_expanded):g.matches_expanded||""),y.setAttribute("data-bma-tourn-entry_fee",g.entry_fee||""),y.setAttribute("data-bma-tourn-rake",g.rake||""),y.setAttribute("data-bma-tourn-tags",Array.isArray(g.tags)?JSON.stringify(g.tags):g.tags||""),y.setAttribute("data-bma-tourn-comments",g.comments||""),y.setAttribute("data-bma-tourn-class",g.status||""),y.setAttribute("data-bma-tourn-status",g.status||""),y.setAttribute("data-sync-theme",p),y.setAttribute("data-sync-lang",m),y.setAttribute("data-sync-motif",b),y.setAttribute("data-n55-size","medium"),y.setAttribute("data-n55-enchanted-cta-ambient","none"),y.setAttribute("data-tourn-custom-css",""),y.setAttribute("data-tourn-trophy","0"),y.setAttribute("data-bma-tourn-focus",""),y.setAttribute("data-bma-tourn-wait","false"),f.appendChild(y),f};c?l.forEach(g=>{const f=document.createElement("div");f.className="tournament-category";const _=document.createElement("header");_.className="tournament-category-header";const y=document.createElement("h2");if(y.className="category-title",y.textContent=g.title,_.appendChild(y),g.subtext){const v=document.createElement("p");v.className="category-subtext",v.textContent=g.subtext,_.appendChild(v)}f.appendChild(_),d.appendChild(f),g.tournaments.forEach(v=>{const S=h(v);d.appendChild(S)})}):l.forEach(g=>{const f=h(g);d.appendChild(f)})},r=l=>{document.querySelectorAll("bma-tournament-card").forEach(d=>{d.setAttribute("data-sync-theme",l)})},o=l=>{const c=document.querySelectorAll("bma-tournament-card"),d=Date.now().toString();c.forEach(u=>{if(u===l){if(u.setAttribute("data-bma-tourn-focus",d),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},i=l=>{const{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...m}=l.detail;console.log("[home_route] Tournament action:",{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...m}),o(l.target),J.publish("WC.TOURN_ACTION",JSON.stringify({action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...m,timestamp:Date.now()}))};return Xt(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const l=document.getElementById("app");if(l){const u=s.appCLIFeatures.features.theme?.state,p=s.appCLIFeatures.features.lang?.state,m=s.appCLIFeatures.features.motif?.state,b=s.appSession.session_user.guid;u&&(l.setAttribute("data-sync-theme",u),document.body.setAttribute("data-sync-theme",u)),p&&l.setAttribute("data-sync-lang",p),m&&l.setAttribute("data-sync-motif",m),b&&l.setAttribute("data-user-guid",b)}window._homeRouteRenderCards=a,window.initBetGridToggle=n;const c=J.subscribe("APP.ROUTE_SYNC",(u,p)=>{try{const m=JSON.parse(p);m.theme&&r(m.theme.state)}catch(m){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",m)}});window._homeRoutePubSubToken=c,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),J.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i);const d=new Ze(".featured-swiper",{modules:[wh],slidesPerView:1,spaceBetween:16,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:2,spaceBetween:16},1024:{slidesPerView:3,spaceBetween:20},1280:{slidesPerView:4,spaceBetween:24}}});window.featuredSwiper=d,J.publish(s.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Nn(()=>{document.removeEventListener("bma-tournament-action",i),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&J.unsubscribe(window._homeRoutePubSubToken)}),(l,c)=>(st(),yt("main",xh,[L("bma-app-head-top",{"data-user-name":Kt(s).appSession.session_user.name||"Guest"},null,8,Ah),c[0]||(c[0]=Qt('<bma-app-head-mid data-selected-tab="head_mid_lobby"></bma-app-head-mid><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports><section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div></div></section><section class="tournaments-section"><div class="tournaments-grid"></div></section><bma-app-foot data-selected-item="foot_all_sports"></bma-app-foot>',5))]))}},Oh={};function kh(e,t){return st(),yt("main",null,[...t[0]||(t[0]=[L("h1",null,"App FAQ",-1)])])}const rn=Zt(Oh,[["render",kh]]),Ch={};function Rh(e,t){return st(),yt("main",null,[...t[0]||(t[0]=[L("h1",null,"App Help",-1)])])}const Mh=Zt(Ch,[["render",Rh]]),Gt=class Gt{static async establishSSE(t,s,n,a=!0){this.strChat=n,this.isDebug=a,console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1),this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(r){Gt.onSSEOpen(r)},this.sseEvent.onmessage=function(r){Gt.onSSEMessage(r)},this.sseEvent.onerror=function(r){Gt.onSSEError(r)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),J.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Gt.sseEvent=null,Gt.strChat=null,Gt.isDebug=!0;let xn=Gt;class Lt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,n){return new Promise((a,r)=>{const o=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:n});o.onload=a,o.onerror=r,s.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(s,n,a){const r=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:n});a&&(r.onload=function(){a()}),s.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(s,n){let a=s.createElement("link");a.rel="stylesheet",a.href=n,s.getElementsByTagName("head")[0].appendChild(a)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let n=s.split(""),a=[],r=!1;return n.forEach(o=>{o=="-"?r=!0:(a.push(r?o.toUpperCase():o),r=!1)}),a.join("")},doDataLayer:function(s,n){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+n),window.dataLayer&&window.dataLayer.push({event:s,msg:n})},isJSON:function(s){let n=!1;try{n=typeof JSON.parse(s)}catch{}return n=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",a=>{a?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(a.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(a?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let n=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;n&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=n)},prettyTimeRETIRE:s=>{let n=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(n=""),n},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((n,a)=>(n<<5)-n+a.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,n=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},n))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let n=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const a=56;n.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=s},i*a),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(a+a)))}),n=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;n.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=s},i*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*r+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,n,a=neodigmOpt.neodigmMetronome.countTo){const r=[16,a];return[...document.querySelectorAll(s)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-n);neodigmMetronome.unsubscribe(r[1]+i).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&n!=d){let u=l/r[0];u=Math.round(u),c!=0?o.textContent=d<n?d+u:d-u:o.textContent=n}},r[1]+i,r[0])}),neodigmUtils},typeOff:async function(s){let n=document.querySelector(s?.q1st);if(n){let a=n.textContent.length,r=window.getComputedStyle(n),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(n.offsetHeight&&(n.style.height=n.offsetHeight-o+"px");a;)setTimeout(()=>{n.textContent=n.textContent.replace(/.$/,"")},s.uniqueDelay*a--)}},typeOn:async function(s){let n=document.querySelector(s?.q1st);if(n){n.dataset.n55Typeon=0;let a=s.msg.replaceAll("|","   |   ")+"   ",r=a.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&r.length){let o=n.dataset.n55Typeon=neodigmUtils.f02x(r.length);a=r[o]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/n.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(o=>{let i=a[a.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/n.textContent.length-4}),n.dataset.n55Typeon++),n.textContent+=i,s?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,a.length)}return neodigmUtils},getValJSON:function(s,n){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+n+'": "'+s+'" }')}},walkDOM3:function(s,n,a=!1){let r=null;if(!r&&s?.dataset[n]&&(r=s),!r&&s?.parentNode?.dataset[n]&&(r=s.parentNode),!r&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[n]&&(r=s.parentNode.parentNode),r)return a?r:r.dataset[n]},doSetT:function(s,n){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,n):setTimeout(s,n)},shake:function(s,n=!0){return[...document.querySelectorAll(s)].forEach(function(a,r){a.classList.add("shake__an"),setTimeout(function(){a.classList.remove("shake__an")},460)}),Lt.neodigmUtils},hardReload:function(s="n55reset"){const n=new URLSearchParams(window.location.search);n.set(s,new Date().getTime());const a=n.toString();window.location.search=a}}))}const Lh={class:"auth-page"},Ih={class:"auth-page-right"},Nh={class:"auth-card"},Dh={class:"form-group"},Bh={class:"form-group"},Fh={class:"password-input-wrapper"},$h=["type"],Uh={style:{"text-align":"right"}},Hh={class:"auth-link-center"},Gh={__name:"signin_route",setup(e){const t=vt(),s=Te(),n=(p="signin")=>{t.push({name:p})};let a=null;const r=Je(!1),o=()=>{r.value=!r.value},i=(p=3,m=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,m=1;break;case"white_label":p=3,m=4;break}const b=Math.floor(Math.random()*p)+m,h=document.querySelector(".img__bg")?.classList;h&&(h.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),h.add(`img__bg--${b}`)),a||(a=J.subscribe("APP__ROUTE_SYNC",(g,f)=>{const _=JSON.parse(f);switch(Object.keys(_)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const m=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(h=>h.code==m)[0]?.copy;b=b.filter(h=>h[0]==p.dataset.syncMicrocopyText)[0],b&&(p.textContent=b[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const m=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(h=>h.code==m)[0]?.copy;b=b.filter(h=>h[0]==p.dataset.syncMicrocopyPlaceholder)[0],b&&(p.placeholder=b[1])})},c=p=>{Lt.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),m=document.querySelector("#inp__text--password");let b=null,h=null;if(!p?.value)b="Please enter your email",h="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)b="Please enter a valid email address",h="#inp__text--email";else if(!m?.value)b="Please enter your password",h="#inp__text--password";else if(m.value.length<10)b="Password must be at least 10 characters",h="#inp__text--password";else{const g={email:p.value,hash:Lt.neodigmUtils().genHash(m.value)};Se.doSignin(g,f=>{const v=(f?.entity?.tags||[]).find(S=>S.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=g.email,s.appSession.session_user.fname=f?.entity?.first,s.appSession.session_user.lname=f?.entity?.last,s.appSession.session_user.userName=v,s.appSession.session_user.name=v,s.appSession.session_user.guid=f?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const S=f?.entity?.guid||s.appSession.session_user.guid;xn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",S,s,!0)}})}b&&(c(h),neodigmToast.q(b,"danger"))};return Xt(()=>{i(),l()}),(p,m)=>(st(),yt("div",Lh,[m[10]||(m[10]=Qt('<div class="auth-page-left" data-v-bdc22b93><div class="auth-bg" data-v-bdc22b93><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div></div><div class="auth-overlay" data-v-bdc22b93></div><div class="auth-branding-content" data-v-bdc22b93><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-bdc22b93><p class="auth-branding-tagline" data-v-bdc22b93>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-bdc22b93>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-bdc22b93> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),L("div",Ih,[L("div",Nh,[m[9]||(m[9]=L("div",{class:"auth-header"},[L("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),L("form",{class:"auth-form",onSubmit:Un(u,["prevent"])},[L("div",Dh,[m[4]||(m[4]=L("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),L("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:m[0]||(m[0]=b=>d())},null,32)]),L("div",Bh,[m[5]||(m[5]=L("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),L("div",Fh,[L("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,$h),L("button",{type:"button",class:"password-toggle-btn",onClick:m[1]||(m[1]=b=>o()),tabindex:"-1"},[L("span",{class:qt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),L("div",Uh,[L("a",{class:"auth-link",onClick:m[2]||(m[2]=b=>n("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),m[8]||(m[8]=L("div",{class:"auth-actions"},[L("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),L("p",Hh,[m[6]||(m[6]=L("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),m[7]||(m[7]=Fn()),L("a",{class:"auth-link",onClick:m[3]||(m[3]=b=>n("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Yh=Zt(Gh,[["__scopeId","data-v-bdc22b93"]]),jh={class:"auth-page"},Kh={__name:"signout_route",setup(e){const t=vt();Te();const s=()=>{mvvLegit.doSignout()},n=()=>{t.push({name:"home_route"})};return(a,r)=>(st(),yt("div",jh,[r[1]||(r[1]=Qt('<div class="auth-page-left" data-v-119b5d43><div class="auth-bg" data-v-119b5d43><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div></div><div class="auth-overlay" data-v-119b5d43></div><div class="auth-branding-content" data-v-119b5d43><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-119b5d43><p class="auth-branding-tagline" data-v-119b5d43>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-119b5d43>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-119b5d43> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),L("div",{class:"auth-page-right"},[L("div",{class:"auth-card"},[r[0]||(r[0]=L("div",{class:"auth-header"},[L("h1",{class:"auth-title"},"Sign Out"),L("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),L("div",{class:"auth-actions"},[L("button",{onClick:s,class:"btn btn-red"}," Sign Out "),L("button",{onClick:n,class:"btn btn-outline"}," Cancel ")])])])]))}},zh=Zt(Kh,[["__scopeId","data-v-119b5d43"]]),qh={class:"auth-page"},Wh={class:"auth-page-right",style:{display:"block"}},Vh={class:"auth-card auth-card-wide"},Jh={class:"form-group"},Xh={class:"form-group"},Qh={class:"form-group"},Zh={class:"form-group"},em={class:"form-group"},tm={class:"password-input-wrapper"},sm=["type"],nm={class:"form-group"},am={class:"password-input-wrapper"},rm=["type"],om={class:"form-group form-group-checkbox"},im={class:"checkbox-label"},lm={class:"auth-link-center"},cm={__name:"signup_route",setup(e){const t=vt(),s=Te(),n=(y="signin")=>{t.push({name:y})};let a=null,r=null;const o=Je(!1),i=Je(!1),l=Je(!1),c=()=>{o.value=!o.value},d=()=>{i.value=!i.value},u=y=>{y.preventDefault(),J.publish(s.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(y=3,v=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":y=3,v=1;break;case"white_label":y=3,v=4;break}const S=Math.floor(Math.random()*y)+v,A=document.querySelector(".img__bg")?.classList;A&&(A.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),A.add(`img__bg--${S}`)),a||(a=J.subscribe("APP__ROUTE_SYNC",(R,C)=>{const x=JSON.parse(C);switch(Object.keys(x)[0]){case"Motif":p();break;case"Lang":m();break}}))},m=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(y=>{const v=s.appCLIFeatures?.features?.lang?.state;let S=s.appMeta.microcopy.language.filter(A=>A.code==v)[0]?.copy;S=S.filter(A=>A[0]==y.dataset.syncMicrocopyText)[0],S&&(y.textContent=S[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(y=>{const v=s.appCLIFeatures?.features?.lang?.state;let S=s.appMeta.microcopy.language.filter(A=>A.code==v)[0]?.copy;S=S.filter(A=>A[0]==y.dataset.syncMicrocopyPlaceholder)[0],S&&(y.placeholder=S[1])})},b=y=>{Lt.neodigmUtils().shake(y||"#inp__text--email")},h=()=>{let y=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(y)},g=y=>{const v=[];return y.length<10&&v.push("at least 10 characters"),/[a-z]/.test(y)||v.push("1 lowercase"),/[A-Z]/.test(y)||v.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(y)||v.push("1 special character"),/[^\x00-\x7F]/.test(y)&&v.push("ASCII characters only"),v},f=async()=>{const y=document.querySelector("#inp__text--username"),v=y?.value?.trim();if(v)try{(await Se.checkUserName(v)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),y.value="",y.focus())}catch(S){console.error("Error checking username:",S)}},_=()=>{const y=document.querySelector("#inp__text--first-name"),v=document.querySelector("#inp__text--last-name"),S=document.querySelector("#inp__text--email"),A=document.querySelector("#inp__text--username"),R=document.querySelector("#inp__text--password"),C=document.querySelector("#inp__text--verify-password");let x=null,w=null;if(!y?.value)x="Please enter your first name",w="#inp__text--first-name";else if(!v?.value)x="Please enter your last name",w="#inp__text--last-name";else if(!S?.value)x="Please enter your email",w="#inp__text--email";else if(S.value.indexOf("@")===-1||S.value.indexOf(".")===-1)x="Please enter a valid email address",w="#inp__text--email";else if(!A?.value)x="Please enter a user name",w="#inp__text--username";else if(!R?.value)x="Please enter a password",w="#inp__text--password";else{const M=g(R.value);if(M.length>0)x="Password must have:|"+M.join(", "),w="#inp__text--password";else if(!C?.value)x="Please verify your password",w="#inp__text--verify-password";else if(R.value!==C.value)x="Passwords do not match",w="#inp__text--verify-password";else{const P=y.value.trim(),$=v.value.trim(),ee=[{userName:A.value.trim(),ts:Date.now()}],Q={email:S.value,hash:Lt.neodigmUtils().genHash(R.value),first:P,last:$,company:"",phone:"",tags:ee};Se.doSignup(Q,Y=>{Y.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}x&&(b(w),neodigmToast.q(x,"danger"))};return Xt(()=>{p(),m(),r||(r=J.subscribe(s.hierTopics.ROUTE__SIGNUP__TERMS,(y,v)=>{JSON.parse(v).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(y,v)=>(st(),yt("div",qh,[v[23]||(v[23]=Qt('<div class="auth-page-left" data-v-3a55bbf1><div class="auth-bg" data-v-3a55bbf1><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div></div><div class="auth-overlay" data-v-3a55bbf1></div><div class="auth-branding-content" data-v-3a55bbf1><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-3a55bbf1><p class="auth-branding-tagline" data-v-3a55bbf1>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3a55bbf1>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3a55bbf1> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),L("div",Wh,[L("div",Vh,[L("form",{class:"auth-form",onSubmit:Un(_,["prevent"])},[L("div",Jh,[v[12]||(v[12]=L("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),L("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:v[0]||(v[0]=At(S=>_(),["enter"]))},null,32)]),L("div",Xh,[v[13]||(v[13]=L("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),L("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:v[1]||(v[1]=At(S=>_(),["enter"]))},null,32)]),L("div",Qh,[v[14]||(v[14]=L("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),L("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:v[2]||(v[2]=S=>h()),onKeyup:v[3]||(v[3]=At(S=>_(),["enter"]))},null,32)]),L("div",Zh,[v[15]||(v[15]=L("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),L("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:v[4]||(v[4]=S=>f()),onKeyup:v[5]||(v[5]=At(S=>_(),["enter"]))},null,32)]),L("div",em,[v[16]||(v[16]=L("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),L("div",tm,[L("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:v[6]||(v[6]=At(S=>_(),["enter"]))},null,40,sm),L("button",{type:"button",class:"password-toggle-btn",onClick:v[7]||(v[7]=S=>c()),tabindex:"-1"},[L("span",{class:qt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),v[17]||(v[17]=L("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),L("div",nm,[v[18]||(v[18]=L("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),L("div",am,[L("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:v[8]||(v[8]=At(S=>_(),["enter"]))},null,40,rm),L("button",{type:"button",class:"password-toggle-btn",onClick:v[9]||(v[9]=S=>d()),tabindex:"-1"},[L("span",{class:qt(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),L("div",om,[L("label",im,[gc(L("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":v[10]||(v[10]=S=>l.value=S),class:"terms-checkbox"},null,512),[[Vd,l.value]]),v[19]||(v[19]=L("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),L("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),v[22]||(v[22]=L("div",{class:"auth-actions"},[L("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),L("p",lm,[v[20]||(v[20]=L("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),v[21]||(v[21]=Fn()),L("a",{class:"auth-link",onClick:v[11]||(v[11]=S=>n("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},dm=Zt(cm,[["__scopeId","data-v-3a55bbf1"]]),um={class:"auth-page"},pm={class:"auth-page-right"},fm={class:"auth-card"},hm={class:"form-group"},mm={class:"auth-link-center"},gm={__name:"forgot_route",setup(e){const t=vt(),s=Te(),n=(c="signin_route")=>{t.push({name:c})};let a=null;const r=(c=3,d=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),a||(a=J.subscribe("APP__ROUTE_SYNC",(m,b)=>{const h=JSON.parse(b);switch(Object.keys(h)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},i=c=>{Lt.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(m=>m.json()).then(m=>{m.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{n("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(m=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(u),neodigmToast.q(d,"danger"))};return Xt(()=>{r(),o()}),(c,d)=>(st(),yt("div",um,[d[7]||(d[7]=Qt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),L("div",pm,[L("div",fm,[d[6]||(d[6]=L("div",{class:"auth-header"},[L("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),L("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),L("form",{class:"auth-form",onSubmit:Un(l,["prevent"])},[L("div",hm,[d[2]||(d[2]=L("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),L("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=At(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=L("div",{class:"auth-actions"},[L("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),L("p",mm,[d[3]||(d[3]=L("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Fn()),L("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>n("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},bm={class:"auth-page"},_m={class:"auth-page-right"},ym={class:"auth-card"},vm={class:"form-group"},Tm={class:"password-input-wrapper"},Sm=["type"],Em={class:"form-group"},wm={class:"password-input-wrapper"},xm=["type"],Am={__name:"resethash_route",setup(e){const t=vt(),s=Te(),n=()=>{t.push({name:"home_route"})};let a=null;const r=Je(!1),o=Je(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},c=(b=3,h=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":b=3,h=1;break;case"white_label":b=3,h=4;break}const g=Math.floor(Math.random()*b)+h,f=document.querySelector(".img__bg")?.classList;f&&(f.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),f.add(`img__bg--${g}`)),a||(a=J.subscribe("APP__ROUTE_SYNC",(_,y)=>{const v=JSON.parse(y);switch(Object.keys(v)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(b=>{const h=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(f=>f.code==h)[0]?.copy;g=g.filter(f=>f[0]==b.dataset.syncMicrocopyText)[0],g&&(b.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(b=>{const h=s.appCLIFeatures?.features?.lang?.state;let g=s.appMeta.microcopy.language.filter(f=>f.code==h)[0]?.copy;g=g.filter(f=>f[0]==b.dataset.syncMicrocopyPlaceholder)[0],g&&(b.placeholder=g[1])})},u=b=>{Lt.neodigmUtils().shake(b||"#inp__text--password")},p=b=>{const h=[];return b.length<10&&h.push("at least 10 characters"),/[a-z]/.test(b)||h.push("1 lowercase"),/[A-Z]/.test(b)||h.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(b)||h.push("1 special character"),/[^\x00-\x7F]/.test(b)&&h.push("ASCII characters only"),h},m=()=>{const b=document.querySelector("#inp__text--password"),h=document.querySelector("#inp__text--verify-password");let g=null,f=null;if(!b?.value)g="Please enter a password",f="#inp__text--password";else{const _=p(b.value);if(_.length>0)g="Password must have:|"+_.join(", "),f="#inp__text--password";else if(!h?.value)g="Please verify your password",f="#inp__text--verify-password";else if(b.value!==h.value)g="Passwords do not match",f="#inp__text--verify-password";else{const y=s.appSession.session_user.email||"",v={email:y,hash:Lt.neodigmUtils().genHash(b.value),modified_by:y},S={method:"POST",body:JSON.stringify(v),headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/resetHash",S).then(A=>A.json()).then(A=>{A.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(A=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}g&&(u(f),neodigmToast.q(g,"danger"))};return Xt(()=>{c(),d()}),(b,h)=>(st(),yt("div",bm,[h[9]||(h[9]=Qt('<div class="auth-page-left" data-v-cef3f735><div class="auth-bg" data-v-cef3f735><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div></div><div class="auth-overlay" data-v-cef3f735></div><div class="auth-branding-content" data-v-cef3f735><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-cef3f735><p class="auth-branding-tagline" data-v-cef3f735>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-cef3f735>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-cef3f735> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),L("div",_m,[L("div",ym,[h[8]||(h[8]=L("div",{class:"auth-header"},[L("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),L("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),L("form",{class:"auth-form",onSubmit:Un(m,["prevent"])},[L("div",vm,[h[4]||(h[4]=L("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),L("div",Tm,[L("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:h[0]||(h[0]=At(g=>m(),["enter"]))},null,40,Sm),L("button",{type:"button",class:"password-toggle-btn",onClick:h[1]||(h[1]=g=>i()),tabindex:"-1"},[L("span",{class:qt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),h[5]||(h[5]=L("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),L("div",Em,[h[6]||(h[6]=L("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),L("div",wm,[L("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:h[2]||(h[2]=At(g=>m(),["enter"]))},null,40,xm),L("button",{type:"button",class:"password-toggle-btn",onClick:h[3]||(h[3]=g=>l()),tabindex:"-1"},[L("span",{class:qt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),L("div",{class:"auth-actions"},[h[7]||(h[7]=L("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),L("button",{type:"button",onClick:n,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},Pm=Zt(Am,[["__scopeId","data-v-cef3f735"]]),Om={class:"auth-page"},km={class:"auth-page-right"},Cm={class:"auth-card"},Rm={class:"verification-content"},Mm={class:"timer-display"},Lm={__name:"verf_link_route",setup(e){const t=vt();ul(),Te();const s=Je(7200);let n=null;const a=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{n=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(n),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Xt(()=>{r()}),Nn(()=>{n&&clearInterval(n)}),(o,i)=>(st(),yt("div",Om,[i[4]||(i[4]=Qt('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),L("div",km,[L("div",Cm,[i[3]||(i[3]=L("div",{class:"auth-header"},[L("h1",{class:"auth-title"},"Check Your Email"),L("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),L("div",Rm,[i[0]||(i[0]=L("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=L("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=L("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),L("div",Mm,$o(a(s.value)),1)])])])]))}},Im=Zt(Lm,[["__scopeId","data-v-f5b4a3c8"]]),Fa=bp({history:Ju(),routes:[{path:"/",name:"splash_route",component:To},{path:"/splash_route",name:"splash_route",component:To},{path:"/error_route",name:"error_route",component:rn},{path:"/forgot_route",name:"forgot_route",component:gm},{path:"/resetforgot_route",name:"resetforgot_route",component:rn},{path:"/resethash_route",name:"resethash_route",component:Pm},{path:"/signin_route",name:"signin_route",component:Yh},{path:"/signout_route",name:"signout_route",component:zh},{path:"/signup_route",name:"signup_route",component:dm},{path:"/verf_link_route",name:"verf_link_route",component:Im},{path:"/offline_route",name:"offline_route",component:rn},{path:"/home_route",name:"home_route",component:Ph},{path:"/appFAQ",name:"appFAQ",component:rn},{path:"/appHelp",name:"appHelp",component:Mh}]}),Qe={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,n=null){const a=document.querySelector("#summary-balance"),r=document.querySelector("#summary-stake"),o=document.querySelector("#summary-payout");a&&(this.updateTDBalance("#summary-balance",e),e<0?a.classList.add("summary-cell__red"):a.classList.remove("summary-cell__red")),r&&(r.textContent=t.toFixed(2)),o&&(o.textContent=s.toFixed(2),s<0?o.classList.add("summary-cell__red"):o.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),l=document.getElementById("dashboard-td-pending");if(i&&(i.textContent=`TD$ ${e.toLocaleString()}`,e<0?i.style.color="#FF5252":n&&e<n.tournament_dollars*.2?i.style.color="#FF9800":i.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)"),l&&(l.textContent=`TD$ ${t.toLocaleString()}`),n&&n.tournament_dollars){const c=n.tournament_dollars,d=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(d){const p=Math.max(e/c*100,0);d.style.width=`${p}%`}const u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(u){const p=Math.min(t/c*100,100);u.style.width=`${p}%`}}},categorizeTournaments(e,t,s,n){const a=[],r=l=>(l.entities?.guids||[]).includes(n),o=(l,c)=>(l.sports_allowed||[]).some(u=>u.key===c),i=l=>zt.find(d=>d.key===l)?.title||l;if(t==="lobby"&&s==="all"){const l=e.filter(p=>!r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"||p.status==="LOCKED"||p.class==="LOCKED"));l.length>0&&a.push({title:"Discover New Tournaments",subtext:`Join now • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const c=e.filter(p=>r(p)&&(p.status==="LOCKED"||p.class==="LOCKED"));c.length>0&&a.push({title:"Your Active Tournaments",subtext:`Currently in progress • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=e.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));d.length>0&&a.push({title:"Your Upcoming Tournaments",subtext:`Joined, not yet started • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=e.filter(p=>p.status==="COMPLETED"||p.class==="COMPLETED").slice(0,20);u.length>0&&a.push({title:"Recently Completed",subtext:`Past competitions • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="my"){let l=e.filter(c=>r(c));if(s!=="all"){l=l.filter(m=>o(m,s));const c=i(s),d=l.filter(m=>m.status==="UPCOMING"||m.class==="UPCOMING");d.length>0&&a.push({title:`Your Upcoming ${c} Tournaments`,subtext:`Ready to start • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(m=>m.status==="LOCKED"||m.class==="LOCKED");u.length>0&&a.push({title:`Your Active ${c} Tournaments`,subtext:`Currently playing • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u});const p=l.filter(m=>m.status==="COMPLETED"||m.class==="COMPLETED");p.length>0&&a.push({title:`Your Completed ${c} Tournaments`,subtext:`View results • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p})}else{const c=l.filter(p=>p.status==="UPCOMING"||p.class==="UPCOMING");c.length>0&&a.push({title:"Your Upcoming Tournaments",subtext:`Ready to start • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>p.status==="LOCKED"||p.class==="LOCKED");d.length>0&&a.push({title:"Your Active Tournaments",subtext:`Currently playing • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>p.status==="COMPLETED"||p.class==="COMPLETED");u.length>0&&a.push({title:"Your Completed Tournaments",subtext:`View results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}}else if(t==="completed"&&s==="all"){const l=e.filter(d=>r(d)&&(d.status==="COMPLETED"||d.class==="COMPLETED"));l.length>0&&a.push({title:"Your Completed Tournaments",subtext:`Your results • ${l.length} tournament${l.length!==1?"s":""}`,tournaments:l});const c=e.filter(d=>!r(d)&&(d.status==="COMPLETED"||d.class==="COMPLETED"));c.length>0&&a.push({title:"Other Completed Tournaments",subtext:`Browse results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c})}else if(s==="multi"){const l=e.filter(c=>(c.sports_allowed?.length||0)>1);if(t==="lobby"){const c=l.filter(p=>!r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));c.length>0&&a.push({title:"Discover Multi-Sport Tournaments",subtext:`Available to join • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"||p.status==="LOCKED"||p.class==="LOCKED"));d.length>0&&a.push({title:"Your Multi-Sport Tournaments",subtext:`Active and upcoming • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);u.length>0&&a.push({title:"Your Completed Multi-Sport",subtext:`Past results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="my"){const c=l.filter(p=>r(p)&&(p.status==="LOCKED"||p.class==="LOCKED"));c.length>0&&a.push({title:"Active Multi-Sport Tournaments",subtext:`Currently playing • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(p=>r(p)&&(p.status==="UPCOMING"||p.class==="UPCOMING"));d.length>0&&a.push({title:"Upcoming Multi-Sport Tournaments",subtext:`Ready to start • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=l.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED"));u.length>0&&a.push({title:"Completed Multi-Sport Tournaments",subtext:`View results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else if(t==="completed"){const c=l.filter(u=>r(u)&&(u.status==="COMPLETED"||u.class==="COMPLETED"));c.length>0&&a.push({title:"Your Completed Multi-Sport",subtext:`Your results • ${c.length} tournament${c.length!==1?"s":""}`,tournaments:c});const d=l.filter(u=>!r(u)&&(u.status==="COMPLETED"||u.class==="COMPLETED"));d.length>0&&a.push({title:"Other Completed Multi-Sport",subtext:`Browse results • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d})}}else if(s!=="all"&&t!=="my"){const l=i(s),c=e.filter(p=>o(p,s));if(t==="lobby"){const p=c.filter(b=>!r(b)&&(b.status==="UPCOMING"||b.class==="UPCOMING"));p.length>0&&a.push({title:`Discover ${l} Tournaments`,subtext:`Available to join • ${p.length} tournament${p.length!==1?"s":""}`,tournaments:p});const m=c.filter(b=>r(b)&&(b.status==="UPCOMING"||b.class==="UPCOMING"||b.status==="LOCKED"||b.class==="LOCKED"));m.length>0&&a.push({title:`Your ${l} Tournaments`,subtext:`Active and upcoming • ${m.length} tournament${m.length!==1?"s":""}`,tournaments:m})}const d=c.filter(p=>r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);d.length>0&&a.push({title:`Your Completed ${l}`,subtext:`Your past results • ${d.length} tournament${d.length!==1?"s":""}`,tournaments:d});const u=c.filter(p=>!r(p)&&(p.status==="COMPLETED"||p.class==="COMPLETED")).slice(0,10);u.length>0&&a.push({title:`Other Completed ${l}`,subtext:`Browse results • ${u.length} tournament${u.length!==1?"s":""}`,tournaments:u})}else a.push({title:"Tournaments",subtext:`${e.length} tournament${e.length!==1?"s":""}`,tournaments:e});return a},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=Te();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let n=0,a=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const g=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(f=>f.tournament_guid===e.guid);console.log("[Dashboard Update] Found",g.length,"existing bets for this tournament"),g.forEach(f=>{(f.bet||[]).forEach(y=>{Object.keys(y).filter(S=>S!=="short_title").forEach(S=>{const A=y[S];A&&(A.stake&&(n+=parseFloat(A.stake)),A.reconciled===!0&&A.payout>0&&(a+=parseFloat(A.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const h=parseFloat(o.textContent)||0;r=Math.max(0,h-n),console.log("[Dashboard Update] Summary total stakes:",h,"Pending:",r)}const i=n+r,l=s-n-r+a;console.log("[Dashboard Update] TD$:",s,"Committed:",n,"Pending:",r,"Payouts:",a,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");c&&(c.textContent=`TD$ ${l.toLocaleString()}`,l<0?c.style.color="#FF5252":l<s*.2?c.style.color="#FF9800":c.style.color="var(--app-core-color--yellow-3__dark--brand, #F7C60D)");const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(d){const h=r>0?r:i;if(d.textContent=`TD$ ${h.toLocaleString()}`,u){const g=Math.min(h/s*100,100);u.style.width=`${g}%`}}const p=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(p){const h=Math.max(l/s*100,0);p.style.width=`${h}%`}const m=document.getElementById("dashboard-participants"),b=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(m){const h=e.entities?.guids?.length||0,g=e.entities?.max||100;if(m.textContent=`${h}/${g}`,b){const f=h/g*100;b.style.width=`${f}%`}}},renderMatchCards(e){if(!e||!e.matches_expanded)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const s=new Date,n=[...e.matches_expanded].sort((r,o)=>{const i=new Date(r.scheduled_at),l=new Date(o.scheduled_at),c=i<s,d=l<s;return c&&!d?1:!c&&d?-1:i-l}),a=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&Te().coreTourn.length>0&&(i=Te().coreTourn[Te().coreTourn.length-1].data.find(b=>b.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=Te();J.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};n.forEach(r=>{const i=new Date(r.scheduled_at)<s;let l=!1;try{l=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",r.id),c.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),c.setAttribute("data-match-title",r.title),c.setAttribute("data-match-short-title",r.short_title||r.title),c.setAttribute("data-scheduled-at",r.scheduled_at),c.setAttribute("data-home-team",r.home_team_id||"Home"),c.setAttribute("data-away-team",r.away_team_id||"Away"),c.setAttribute("data-is-disabled",i||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);c.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(r.sport_id)c.setAttribute("data-sport-key",r.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:m}=d.detail;if(p){const b=document.querySelector(".bet-grid__slip-BETSLIP-content");if(b){const h=b.querySelectorAll("bma-bet-entry");let g=!1;h.forEach(f=>{if(g)return;const _=f.getAttribute("data-content-type"),y=f.getAttribute("data-content-odds");_===u.type&&y===u.price&&(f.remove(),g=!0)}),b.children.length===0&&(b.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}m.classList.remove("btn--active"),setTimeout(()=>{a()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(g=>{g.shadowRoot.querySelectorAll(".btn--selected").forEach(f=>{f.classList.remove("btn--selected")})}),m.classList.add("btn--selected"),m.classList.add("btn--active");const b=Te(),h=u.type;h==="spread"?J.publish(b.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):h==="money"?J.publish(b.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):h==="total"&&J.publish(b.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),J.publish(b.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector(".bet-grid__slip-BETSLIP-content");s&&(s.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const n=Te();if(n.coreTourn.length>0){const o=n.coreTourn[n.coreTourn.length-1].data.find(i=>i.guid===e);o&&Qe.renderMatchCards(o)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{J.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const a=document.querySelector(".bet-grid__slip");a&&a.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(n=>{try{return JSON.parse(n.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(n=>{const a=n.getAttribute("data-match-guid"),r=n.getAttribute("data-home-team"),o=n.getAttribute("data-away-team");(n.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?r:o;t.some(b=>{if(b.coreMatches__guid!==a)return!1;const h=b.bet||[];if(h.length===0)return!1;const g=h[0],_=Object.keys(g).filter(S=>S!=="short_title")[0],v=g[_]?.type;return c==="total"?v===c:v===c&&_===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},bindAppListeners(e){J.subscribe("APP",(h,g)=>{console.warn("~~ sub all APP | "+h+"|"+g)}),J.subscribe("WC",(h,g)=>{console.warn("~~ sub all WC  | "+h+"|"+g)}),J.subscribe("ROUTE",(h,g)=>{console.warn("~~ sub all ROUTE  | "+h+"|"+g)});let t="lobby",s="all";const n=()=>{const h=document.querySelector(".featured-carousel-section");h&&(t==="lobby"?h.style.display="block":h.style.display="none")},a=()=>{if(e.coreTourn.length===0)return;const g=e.coreTourn[e.coreTourn.length-1].data,f=e.appSession?.session_user?.guid;document.querySelectorAll(".tournament-item").forEach(v=>v.classList.remove("h-ds__none"));let y=0;if(g.forEach(v=>{const S=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${v.guid}"]`);if(!S)return;const A=S.parentElement;let R=!0;if(t==="my"?(v.entities?.guids||[]).includes(f)||(R=!1):t==="completed"&&(v.status||v.class)!=="COMPLETED"&&(R=!1),s!=="all"&&R){const C=v.sports_allowed||[];s==="multi"?C.length<=1&&(R=!1):C.some(w=>w.key===s)||(R=!1)}R?y++:A&&A.classList.add("h-ds__none")}),console.log(`[app_events] Filter applied - ${t}/${s} - showing ${y} of ${g.length} tournaments`),y===0){let v="No tournaments match the current filters";t==="my"&&(v="You haven't joined any tournaments yet"),t==="completed"&&(v="No completed tournaments yet"),typeof neodigmToast<"u"&&neodigmToast.q(v,"night")}};J.subscribe(e.hierTopics.COREBETSLIP,(h,g)=>{JSON.parse(g);let f=16;switch(h){case e.hierTopics.COREBETSLIP__BET:f=5,qs.shootConfetti(),console.log("~~~  |  "+h+" | ",g);const _=document.querySelector("neodigm-sodapop");_&&_.setAttribute("data-wait","true");const y=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(y.length===0){console.warn("[app_events] No bets to submit"),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,A=e.appSession?.session_user?.guid;if(!S||!A){console.error("[app_events] Missing tournament or user GUID"),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const R=Array.from(y).map(Q=>{const Y=Q.getAttribute("data-content-team-points"),G=Q.getAttribute("data-content-odds"),U=Q.getAttribute("data-stake")||"0",se=Q.getAttribute("data-content-type"),W=Q.getAttribute("data-payout")||"0",re=Q.getAttribute("data-match-guid")||"",te={};return te[Y]={type:se,stake:parseFloat(U),odds:parseFloat(G),payout:parseFloat(W),reconciled:!1},{acctEntity__guid:A,coreTournaments__guid:S,coreMatches__guid:re,bet:[te],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",R),Se.postBetSlips(R).then(Q=>{console.log("[app_events] Bet slips posted successfully:",Q);const Y=R.reduce((G,U)=>{const se=U.bet[0],W=Object.keys(se)[0];return G+(se[W]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${Y.toFixed(2)}`,"success"),Se.fetchBetSlips(A,S).then(G=>{if(G?.rows){const U={timestamp:Date.now(),source:"API",data:G.rows};e.pushcoreBetSlip(U),console.log("[app_events] Refreshed bet slips in store:",G.rows.length,"items")}Qe.refreshPlayPopupUI(S,G),_&&_.setAttribute("data-wait","false")}).catch(G=>{console.error("[app_events] Error fetching fresh bet slips:",G),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(Q=>{console.error("[app_events] Error posting bet slips:",Q),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),_&&_.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:f=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&g){g=JSON.parse(g);const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&Y){const G=e.coreBetSlip[0].data.filter(me=>me.coreTournaments__guid===Y),U=[],se=[],W=[];G.forEach(me=>{const I=me.bet||[];if(I.length===0)return;const j=I[0];Object.keys(j).filter(Z=>Z!=="short_title").forEach(Z=>{const ce=j[Z],T=ce?.reconciled!==!1,E=parseFloat(ce?.payout||0);T?E===0?se.push(me):W.push(me):U.push(me)})});const re=nt.search(U,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,te=nt.search(se,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Pe=re+te,_e=nt.search(W,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,ke=g.tournament_dollars-Pe+_e;Qe.updateTDBalance("#summary-balance",ke)}else Qe.updateTDBalance("#summary-balance",g.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let x=0,w=0,M=0;if(e.coreBetSlip.length>0){const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Y){const U=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(_e=>_e.coreTournaments__guid===Y),se=[],W=[],re=[];U.forEach(_e=>{const ke=_e.bet||[];if(ke.length===0)return;const me=ke[0];Object.keys(me).filter(j=>j!=="short_title").forEach(j=>{const q=me[j],Z=q?.reconciled!==!1,ce=parseFloat(q?.payout||0);Z?ce===0?W.push(_e):re.push(_e):se.push(_e)})}),x=nt.search(se,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,w=nt.search(re,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const te=nt.search(W,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Pe=nt.search(re,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;M=te+Pe}}let P=!0,$=0;const ee=document.querySelector("[data-bets-valid]");if(ee&&g){g=JSON.parse(g),g.pending_stake_sum=0,g.pending_payout_sum=0,g.bets.length||(P=!1),g.bets.forEach(re=>{re.stake=Number(re.stake),re.stake?g.pending_stake_sum+=re.stake:P=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(re=>{const te=parseFloat(re.getAttribute("data-payout")||"0");g.pending_payout_sum+=te});const Y=x+g.pending_stake_sum,G=w+g.pending_payout_sum;$=g.tournament_dollars-Y-M+w;const se=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let W=null;se&&e.coreTourn.length>0&&(W=e.coreTourn[e.coreTourn.length-1]?.data?.find(te=>te.guid===se)),Qe.updateSummaryAndDashboard($,Y,G,W),(g.tournament_dollars<0||$<0)&&(P=!1),ee.dataset.betsValid=P}break}f&&neodigmWired4Sound&&neodigmWired4Sound.sound(f,"QUITE").vibrate()});const r=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let f=0;g&&e.coreTourn.length>0&&(f=e.coreTourn[e.coreTourn.length-1].data.find(v=>v.guid===g)?.tournament_dollars||0),J.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:f,timestamp:Date.now()}))},o=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let f=0;g&&e.coreTourn.length>0&&(f=e.coreTourn[e.coreTourn.length-1].data.find(x=>x.guid===g)?.tournament_dollars||0);let _=0,y=0,v=0;if(e.coreBetSlip.length>0&&g){const C=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(Q=>Q.coreTournaments__guid===g);console.log("[app_events] Filtered bets for tournament:",g,"found:",C.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",C[0]);const x=[],w=[],M=[];C.forEach(Q=>{const Y=Q.bet||[];if(Y.length===0)return;const G=Y[0];Object.keys(G).filter(se=>se!=="short_title").forEach(se=>{const W=G[se],re=W?.reconciled!==!1,te=parseFloat(W?.payout||0);re?te===0?w.push(Q):M.push(Q):x.push(Q)})}),console.log("[app_events] Bet categories:",{unreconciled:x.length,reconciledZero:w.length,reconciledNonZero:M.length});const P=nt.search(x,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,$=nt.search(w,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ee=nt.search(M,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;v=$+ee,y=nt.search(M,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,_=P,console.log("[app_events] Balance calculation:",{unreconciledStakes:P,lostBetStakes:$,wonBetStakes:ee,allReconciledStakes:v,displayedStake:_,reconciledPayouts:y,tournamentDollars:f,calculatedBalance:f-_-v+y})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const S=f-_-v+y;let A=null;g&&e.coreTourn.length>0&&(A=e.coreTourn[e.coreTourn.length-1].data.find(C=>C.guid===g)),Qe.updateSummaryAndDashboard(S,_,y,A)};J.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(h,g)=>{const _=JSON.parse(g)?.rows||[],y=document.querySelector(".bet-grid__slip-MYBETS");if(!y)return;if(y.innerHTML="",_.length===0){y.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const R=document.querySelector(".bet-grid__slip");R&&R.setAttribute("data-active-bet-tab","BETSLIP"),r();return}_.forEach(R=>{if((R.bet||[]).length===0)return;const x=document.createElement("bma-bet-existing");x.setAttribute("data-corebetslip",JSON.stringify(R)),y.appendChild(x)});const v=document.querySelector(".bet-grid__slip");v&&v.setAttribute("data-active-bet-tab","MYBETS"),Te().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Qe.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",_.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),o()},200)}),document.addEventListener("click",h=>{const g=h.target;if(g&&g.classList.contains("bet-slip-tab")){const f=g.dataset.betTab,_=document.querySelector(".bet-grid__slip");f&&_&&(_.setAttribute("data-active-bet-tab",f),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",f))}if(g&&g.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(g.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}g.dataset.processing="true";const _=g.dataset.publishBetslip;J.publish(_,JSON.stringify({timestamp:Date.now()})),setTimeout(()=>{delete g.dataset.processing},2e3)}});const i=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let f=0;g&&e.coreTourn.length>0&&(f=e.coreTourn[e.coreTourn.length-1].data.find(A=>A.guid===g)?.tournament_dollars||0);const _=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),y=Array.from(_).map(v=>({teamPoints:v.getAttribute("data-content-team-points"),odds:v.getAttribute("data-content-odds"),stake:v.getAttribute("data-stake")||"0",type:v.getAttribute("data-content-type"),abbreviatedTitle:v.getAttribute("data-abbreviated-title"),scheduledAt:v.getAttribute("data-scheduled-at")}));J.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:f,bets:y,timestamp:Date.now()}))},l=(h,g)=>{const f=JSON.parse(g),_=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!_){console.error("[app_events] Bet slip container not found");return}const y=_.querySelector(".bet-slip__empty");y&&y.remove();let v="";f.type==="total"?v=f.team==="over"?"Over":"Under":f.team==="home"?v=f.homeTeam:f.team==="away"&&(v=f.awayTeam);let S=v;if(f.point)if(f.type==="spread"){const M=parseFloat(f.point)>0?`+${f.point}`:f.point;S=`${v} ${M}`}else f.type==="total"&&(S=`${v} ${f.point}`);const A=document.createElement("bma-bet-entry");A.setAttribute("data-content-team-points",S),A.setAttribute("data-content-odds",f.price||"0"),A.setAttribute("data-content-stake-text","0"),A.setAttribute("data-content-type",f.type||""),A.setAttribute("data-abbreviated-title",f.abbreviatedTitle||`${f.homeTeam} vs ${f.awayTeam}`),A.setAttribute("data-scheduled-at",f.scheduledAt||""),A.setAttribute("data-match-guid",f.matchGuid||""),A.setAttribute("data-home-team",f.homeTeam||""),A.setAttribute("data-away-team",f.awayTeam||""),A.setAttribute("data-bet-team",v||"");const C=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(C&&e.coreTourn.length>0){const P=e.coreTourn[e.coreTourn.length-1].data.find($=>$.guid===C);if(P?.sports_allowed&&P.sports_allowed.length>0){const $=P.sports_allowed[0];A.setAttribute("data-sport-key",$.key||"");const ee=zt.find(Q=>Q.key===$.key);A.setAttribute("data-sport-group",ee?.group||"")}}_.appendChild(A),console.log("[app_events] Bet entry appended to container:",A,"Container children:",_.children.length),setTimeout(()=>{d(A)},0);const x=document.querySelector(".bet-grid__slip");x&&(x.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const w=_.querySelectorAll("bma-bet-entry").length;w>=3?requestAnimationFrame(()=>{setTimeout(()=>{const M=document.querySelector(".bet-grid__slip");M&&(console.log("[app_events] Scrolling parent to bottom - bet count:",w,"scrollHeight:",M.scrollHeight,"current scrollTop:",M.scrollTop),M.scrollTo({top:M.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",M.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",w,"bet cards (need 3+)"),setTimeout(()=>{i()},200),console.log("[app_events] Created bet entry:",{teamPoints:S,odds:f.price,type:f.type})};J.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(h,g)=>{l(h,g),c()}),J.subscribe(e.hierTopics.COREBETSLIP__MONEY,(h,g)=>{l(h,g),c()}),J.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(h,g)=>{l(h,g),c()});function c(){const h=window.matchMedia("(orientation: portrait)").matches,g=window.matchMedia("(max-width: 768px)").matches;if(h||g){const f=document.querySelector(".bet-grid__select"),_=document.querySelector(".bet-grid__slip"),y=document.querySelector(".bet-grid__toggle-text");f&&_&&y&&(f.classList.add("collapsed"),_.classList.remove("collapsed"),y.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const d=h=>{const g={sport:{key:h.getAttribute("data-sport-key")||"",group:h.getAttribute("data-sport-group")||""},Match:{scheduled_at:h.getAttribute("data-scheduled-at")||"",home_team_id:h.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:h.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:h.getAttribute("data-bet-team")||"",over:"",under:""},type:h.getAttribute("data-content-type")||"",odds:h.getAttribute("data-content-odds")||"0",stake:h.getAttribute("data-stake")||"0"}},f=ml.calcPayout(g);h.setAttribute("data-payout",f.toString()),console.log("[app_events] Payout calculated:",{stake:g.Bet.stake,odds:g.Bet.odds,payout:f})};new MutationObserver(h=>{h.forEach(g=>{g.type==="attributes"&&g.attributeName==="data-stake"&&g.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",g.target.getAttribute("data-stake")),d(g.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{i()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",h=>{console.log("[app_events] Removing bet entry:",h.detail);const g=h.target,f=h.detail;g.remove(),setTimeout(()=>{const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(S){const A=Te(),R=A.coreTourn[A.coreTourn.length-1];if(R&&R.data){const C=R.data.find(x=>x.guid===S);C&&Qe.updateTournamentDashboard(C)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(v=>{(v.shadowRoot?.querySelectorAll(".btn")||[]).forEach(A=>{const R=A.dataset.betType,C=A.dataset.price,x=R===f.type,w=C===f.odds;x&&w&&A.classList.contains("btn--active")&&(A.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:R,btnPrice:C}))})});const y=document.querySelector(".bet-grid__slip-BETSLIP-content");y&&y.children.length,setTimeout(()=>{i()},100)}),J.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(h,g)=>{const f=JSON.parse(g);f&&f.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${f.guid}"]`)}),J.subscribe(e.hierTopics.WC__APP__FOOT,(h,g)=>{JSON.parse(g);let f=16;switch(h){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_MY,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:f=24,J.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:J.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}f&&neodigmWired4Sound&&neodigmWired4Sound.sound(f).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(h,g)=>{const f=JSON.parse(g);let _=16;h=="WC.APP.HEAD_SPORTS.PREV"||h=="WC.APP.HEAD_SPORTS.NEXT"||h=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?_=3:(s=f.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${f.group})`),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),_&&neodigmWired4Sound&&neodigmWired4Sound.sound(_).vibrate()}),J.subscribe(e.hierTopics.WC__APP__HEAD_MID,(h,g)=>{JSON.parse(g);let f=16;const _=()=>{s="all";const y=document.querySelector("bma-app-head-sports");y&&y.setAttribute("data-selected-chip","all")};switch(h){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",_(),n(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":if(!e.appSession?.session_user?.guid){console.warn("[app_events] No user GUID found, cannot filter tournaments"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to view your tournaments","warning");return}t="my",_(),n(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",_(),n(),J.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":t="leaderboard",_(),n(),a(),f=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":t="squad",_(),n(),a(),f=24,typeof neodigmToast<"u"&&neodigmToast.q("Feature not Available|in Beta","night");break}f&&neodigmWired4Sound&&neodigmWired4Sound.sound(f).vibrate()}),J.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(h,g)=>{JSON.parse(g);let f=16;switch(h){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const _=window.deferredPWAPrompt;if(!_){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{_.prompt();const{outcome:v}=await _.userChoice;v==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),f=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(v){console.error("PWA install error:",v),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const S=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:S});const A=document.getElementById("app");A&&A.setAttribute("data-sync-theme",S),document.body.setAttribute("data-sync-theme",S)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":Fa.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":Fa.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}f&&neodigmWired4Sound&&neodigmWired4Sound.sound(f).vibrate()});const p=(h,g)=>{const f=h.split(".").pop();console.log("[app_events] SODAPOP_PLAY subscriber - action:",f,"topic:",h),setTimeout(()=>{const _=document.querySelectorAll(".play-cntr .btn-info-sm"),v=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");_.forEach(S=>{const A=S.dataset.publishRouteHome?.split(".").pop()||"";if(A===f){if(console.log("[app_events] Activating button:",A),S.classList.add("btn-info-sm--active"),S.classList.remove("btn-info-sm--inactive"),neodigmCarousel.nav({id:"caro-play",nav:A}),neodigmWired4Sound.sound(3),v){const R=f==="PLAY"?"hidden":"auto";v.style.overflow=R,console.log("[app_events] Set sodapop overflow to:",R)}}else S.classList.add("btn-info-sm--inactive"),S.classList.remove("btn-info-sm--active")})},100)};J.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",p),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",p),J.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(h,g)=>{JSON.parse(g);const f=document.getElementById("btn-join__play--id");if(!f){console.warn("[app_events] PLAY button not found");return}const _=f.dataset.requiresJoin==="true",y=f.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",y,"requiresJoin:",_),_&&y==="join"){const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,A=Te();if(!S){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",S),J.publish(A.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:S,timestamp:Date.now()})),f.textContent="Play",f.dataset.requiresJoin="false",setTimeout(()=>{p(h),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else p(h),console.log("[app_events] Advancing carousel to PLAY page")}),J.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(h,g)=>{JSON.parse(g);let f=10;switch(h){case"WC.APP.HEAD_TOP.USER_PROFILE":f=10,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const _=e.appSession.session_app.version,y=new Date().getFullYear();_&&neodigmToast&&neodigmToast.q(`${_} 3/7/2026, 5:53:58 PM|© ${y} Bet Max Action`,"night");break}f&&neodigmWired4Sound&&neodigmWired4Sound.sound(f).vibrate()});let m=null,b=null;J.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,g)=>{const f=JSON.parse(g);let _=0;switch(f?.action){case"JOIN":_=512;break;case"PLAY":_=8;break;case"INFO":_=8;break}if(_){m=f?.tournamentGuid,b=f?.action,console.log("[app_events] Storing pending tourn data:",m,b);const y=e.appSession?.session_user?.guid,v=f?.tournamentGuid;y&&v?Se.fetchBetSlips(y,v).then(S=>{if(S?.rows){const A={timestamp:Date.now(),source:"API",data:S.rows};e.pushcoreBetSlip(A),console.log("[app_events] Bet slips fetched:",S.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{J.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(S))},3e3)},_)}).catch(S=>{console.error("[app_events] Error fetching bet slips:",S),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},_)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},_)}}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,g)=>{const f=JSON.parse(g);let _=16;switch(f?.action){case"FOCUS":_=3;break;case"SPORT_ICON":_=10;break;case"JOIN":_=5;break;case"PLAY":_=16;break}_&&neodigmWired4Sound&&neodigmWired4Sound.sound(_).vibrate()}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,(h,g)=>{const f=JSON.parse(g);let _=0,y="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),f?.tournamentStatus){case"UPCOMING":y="success";break;case"LOCKED":y="warning";break;case"COMPLETED":y="danger";break}switch(f?.action){case"SPORT_ICON":f?.sportTitle==f?.sportDescription?_=f?.sportTitle:_=f?.sportTitle+"|"+f?.sportDescription;break}_&&neodigmToast&&neodigmToast.q(_,y)}),J.subscribe(e.hierTopics.WC__TOURN_ACTION,async(h,g)=>{const f=JSON.parse(g);if(f?.action==="JOIN"){const y=Te().appSession?.session_user?.guid;if(!y){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const v=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${f.tournamentGuid}"]`);v&&(v.setAttribute("data-bma-tourn-wait","true"),qs.shootConfetti());const S={acctEntityGuid:y,tournamentGuid:f.tournamentGuid};try{const A={method:"POST",body:JSON.stringify(S),headers:Se.genHeaders()};console.log("Posting to:",Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",S);const C=await(await fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",A)).json();if(console.log("Join response:",C),C.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const x=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${f.tournamentGuid}"]`);if(x){x.setAttribute("data-bma-tourn-wait","false");const w=x.getAttribute("data-bma-tourn-entities");if(w)try{const M=JSON.parse(w);M.guids.includes(y)||(M.guids.push(y),x.setAttribute("data-bma-tourn-entities",JSON.stringify(M)))}catch(M){console.error("Failed to parse entities:",M)}}},3e3);else{const x=C?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(x,"danger");const w=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${f.tournamentGuid}"]`);w&&w.setAttribute("data-bma-tourn-wait","false")}}catch(A){console.error("Join tournament error:",A),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger");const R=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${f.tournamentGuid}"]`);R&&R.setAttribute("data-bma-tourn-wait","false")}}}),J.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(h,g)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const f=Te();try{const _=await Se.fetchTournaments();console.log("[app_events] Tournaments fetched:",_),_?.rows&&Array.isArray(_.rows)?(f.pushCoreTourn({timestamp:Date.now(),source:"API",data:_.rows}),console.log("[app_events] Pushed to coreTourn, length:",f.coreTourn.length),J.publish(f.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",_)}catch(_){console.error("[app_events] Error fetching tournaments:",_),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),J.subscribe(e.hierTopics.PROMOTION__LOAD,async(h,g)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const f=await Se.fetchPromotions();if(console.log("[app_events] Promotions fetched:",f),f?.ok&&f?.data&&Array.isArray(f.data)){const _=f.data.filter(v=>v.class==="banner"&&v.status==="LIVE");console.log("[app_events] Banner promotions:",_);const y=document.querySelector(".featured-swiper .swiper-wrapper");if(!y){console.warn("[app_events] Swiper wrapper not found");return}y.innerHTML="",_.forEach((v,S)=>{const A=document.createElement("div");A.className="swiper-slide";const R=document.createElement("div");R.className=`featured-card featured-card--${S+1}`;const C=v.hero_img?encodeURI(v.hero_img):"";R.style.backgroundImage=`url("${C}")`,R.setAttribute("data-promotion-hero-img",v.hero_img||""),R.setAttribute("data-promotion-caption",v.caption||""),R.setAttribute("data-promotion-tagline",v.tagline||""),R.setAttribute("data-promotion-toast",v.toast||""),R.setAttribute("data-promotion-topic",v.topic?.topic||""),R.setAttribute("data-promotion-topic-token",v.topic?.token||""),R.setAttribute("data-promotion-marquee",v.maquee||""),A.appendChild(R),y.appendChild(A)}),console.log("[app_events] Created",_.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update()}}catch(f){console.error("[app_events] Error fetching promotions:",f)}}),J.subscribe(e.hierTopics.PROMOTION__CLICK,(h,g)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const f=JSON.parse(g);console.log("[app_events] Promotion clicked:",f),f.toast&&typeof neodigmToast<"u"&&neodigmToast.q(f.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const _=document.querySelector(".l-promotion #promoHero");_&&f.heroImg&&(_.src=f.heroImg);const y=document.querySelector(".l-promotion #promCaption");y&&f.caption&&(y.textContent=f.caption);const v=document.querySelector(".l-promotion #promoTagline");return v&&f.tagline&&(/<[^>]+>/.test(f.tagline)?v.innerHTML=f.tagline:v.textContent=f.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(f){console.error("[app_events] Error handling promotion click:",f)}}),J.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(h,g)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const f=Te();if(f.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const _=f.coreTourn[f.coreTourn.length-1],y=f.coreTourn.length>1?f.coreTourn[f.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",_);const v=[];if(y){const C=_.data,x=y.data;C.forEach(w=>{const M=x.find(P=>P.guid===w.guid);M&&M.status!==w.status&&(console.log(`[app_events] Status changed for tournament ${w.guid}: ${M.status} -> ${w.status}`),v.push(w.guid))})}const S=f.appSession?.session_user?.guid,A=[..._.data].sort((C,x)=>{const w=C.status||C.class,M=x.status||x.class,P=C.entities?.guids||[],$=x.entities?.guids||[],ee=P.includes(S),Q=$.includes(S),Y=(ke,me)=>{const I=new Date(ke.status_time||0).getTime();return new Date(me.status_time||0).getTime()-I},G=w==="LOCKED"&&ee,U=M==="LOCKED"&&Q;if(G&&!U)return-1;if(!G&&U)return 1;if(G&&U)return Y(C,x);const se=w==="UPCOMING",W=M==="UPCOMING";if(se&&!W)return-1;if(!se&&W)return 1;if(se&&W)return Y(C,x);const re=w==="COMPLETED"&&ee,te=M==="COMPLETED"&&Q;if(re&&!te)return-1;if(!re&&te)return 1;if(re&&te)return Y(C,x);const Pe=w==="COMPLETED"&&!ee,_e=M==="COMPLETED"&&!Q;return Pe&&!_e?1:!Pe&&_e?-1:Y(C,x)}),R=Qe.categorizeTournaments(A,t,s,S);if(console.log(`[app_events] Categorized into ${R.length} categories for filter: ${t}/${s}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){if(window._homeRouteRenderCards(R,!0),setTimeout(()=>{a(),console.log("[app_events] Re-applied filter after hydration:",t)},100),v.length>0){const C=_.data;v.forEach(x=>{const w=C.find(M=>M.guid===x);if(w){const M=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{J.publish(f.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:x,status:w.status,timestamp:Date.now()}))},M)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),J.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(h,g)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",g);const f=Te();try{const _=JSON.parse(g);console.log("[app_events] SSE tournament sync data:",_);const y=JSON.parse(_.msg);if(console.log("[app_events] Parsed tournaments array:",y),!Array.isArray(y)){console.warn("[app_events] SSE msg is not an array:",y);return}f.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:y}),console.log("[app_events] Pushed SSE data to coreTourn, length:",f.coreTourn.length),J.publish(f.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"}))}catch(_){console.error("[app_events] Error processing SSE tournament sync:",_)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const h=document.querySelector("#caption__my-profile");h&&(h.textContent="My Profile");const g=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",g),console.log("[app_events] coreTourn length:",e.coreTourn.length),!g||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const _=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",_.length);let y=0,v=0,S=0;_.forEach((A,R)=>{if(!A.tags||!Array.isArray(A.tags)){console.log(`[app_events] Tournament ${R} has no tags or tags not an array`);return}A.tags.forEach((C,x)=>{if(typeof C=="object"&&C!==null){let w=null;C.entity_guid===g&&C.badge?w=C.badge:C[g]&&(w=C[g]),w==="--badge__ribbon--gold"?y++:w==="--badge__ribbon--silver"?v++:w==="--badge__ribbon--bronze"&&S++}})}),setTimeout(()=>{let A=document.querySelectorAll(".badge-counter");if(A.length===0){const R=document.querySelector("neodigm-sodapop");R&&(A=R.querySelectorAll(".badge-counter"))}A.length>=3?(A[0].textContent=y,A[1].textContent=v,A[2].textContent=S,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const h=Te(),g=document.querySelector(".play-cntr");m&&(g.dataset.currentTournGuid=m),b&&(g.dataset.currentTournAction=b);const f=g?.dataset?.currentTournGuid,_=g?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",f,"action:",_),window.initBetGridToggle&&window.initBetGridToggle(),(()=>{const P=document.getElementById("btn-join__play--id");if(!P||!f||h.coreTourn.length===0)return;const ee=h.coreTourn[h.coreTourn.length-1].data.find(se=>se.guid===f);if(!ee)return;const Q=h.appSession?.session_user?.guid,Y=ee.entities?.guids?.includes(Q),G=ee.status,U=_;P.style.display="none",!(G==="COMPLETED"||G==="LOCKED"&&!Y)&&(P.style.display="",G==="UPCOMING"&&!Y?U==="INFO"?(P.textContent="Join",P.dataset.requiresJoin="true"):U==="PLAY"&&(P.textContent="Play",P.dataset.requiresJoin="false"):(P.textContent="Play",P.dataset.requiresJoin="false"))})(),(()=>{if(!f||h.coreTourn.length===0)return;const $=h.coreTourn[h.coreTourn.length-1].data.find(W=>W.guid===f);if(!$)return;const ee=document.getElementById("pop-play__caro-info-summary1--id");if(!ee)return;const Q=W=>{if(!W)return"N/A";const re=new Date(W);return isNaN(re.getTime())?"Invalid Date":re.toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})},Y=$.status?`info-row__value--${$.status.toLowerCase()}`:"",G=$.sports_allowed&&Array.isArray($.sports_allowed)?$.sports_allowed.map(W=>{const re=W.key||W,te=zt.find(_e=>_e.key===re),Pe=te?te.group:"default";return`<bma-sport-icon sport="${re}" data-sport-group="${Pe}" style="width: 20px; height: 20px;"></bma-sport-icon>`}).join(" "):"N/A";ee.innerHTML=`
                                <div class="info-section">
                                    <div class="info-section__title">Competition</div>
                                    <div class="info-row">
                                        <span class="info-row__label">Total Games</span>
                                        <span class="info-row__value">${$.matches_expanded?.length||0}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">Sports</span>
                                        <span class="info-row__value">${G}</span>
                                    </div>
                                </div>

                                <div class="info-section">
                                    <div class="info-section__title">Tournament Schedule</div>
                                    <div class="info-row">
                                        <span class="info-row__label">Start Time</span>
                                        <span class="info-row__value">${Q($.window_start_time)}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">End Time <span style="font-size: x-small">(estimated)</span></span>
                                        <span class="info-row__value">${Q($.window_end_time)}</span>
                                    </div>
                                    <div class="info-row">
                                        <span class="info-row__label">Status</span>
                                        <span class="info-row__value ${Y}">${$.status||"Unknown"}</span>
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
                                        <span class="info-row__value">TD$ ${$.tournament_dollars||0}</span>
                                    </div>
                                    <div class="info-row info-row--entrants">
                                        <span class="info-row__label">Entrants</span>
                                        <div class="info-row__value-with-bar">
                                            <span class="info-row__value">${$.entities?.guids?.length||0} / ${$.entities?.max||0}</span>
                                            <div class="info-progress-bar">
                                                <div class="info-progress-fill" style="width: ${(($.entities?.guids?.length||0)/($.entities?.max||1)*100).toFixed(1)}%"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `;const U=document.getElementById("pop-play__caro-info-summary2--id");U&&(U.innerHTML="");const se=document.getElementById("pop-play__caro-info-list--id");se&&$.matches_expanded&&Array.isArray($.matches_expanded)&&(se.innerHTML=`
                                    <div class="info-section">
                                        <div class="info-section__title">Matches</div>
                                    </div>
                                `+$.matches_expanded.map(W=>{const re=W.scoreboard_data?typeof W.scoreboard_data=="string"?W.scoreboard_data:JSON.stringify(W.scoreboard_data):"";return`
                                        <bma-match-status
                                            data-match-guid="${W.guid||W.odds_id||W.id||""}"
                                            data-match-title="${W.short_title||W.title||"Match"}"
                                            data-match-scheduled-at="${W.scheduled_at||""}"
                                            data-match-home-team="${W.home_team_id||"Home"}"
                                            data-match-away-team="${W.away_team_id||"Away"}"
                                            data-match-home-score="${W.home_team_score!==null&&W.home_team_score!==void 0?W.home_team_score:""}"
                                            data-match-away-score="${W.away_team_score!==null&&W.away_team_score!==void 0?W.away_team_score:""}"
                                            data-match-scoreboard="${re.replace(/"/g,"&quot;")}"
                                            data-match-sport-id="${W.sport_id||""}"
                                            data-sync-theme="dark"
                                        ></bma-match-status>
                                    `}).join(""))})(),setTimeout(()=>{const P=h.appSession?.session_user?.guid;f&&Se.fetchLeaderboard(f).then($=>{const ee=document.getElementById("pop-play__caro-leaderboard--id");if(!ee)return;const Q=$?.data||$?.rows;if(Q&&Q.length>0){const G=h.coreTourn[h.coreTourn.length-1]?.data.find(te=>te.guid===f);ee.innerHTML=Q.map((te,Pe)=>{let _e="";if(G?.tags&&Array.isArray(G.tags)){const I=G.tags.find(j=>!!(typeof j=="object"&&j!==null&&(j.entity_guid===te.user_guid&&j.badge&&j.badge.startsWith("--badge__ribbon--")||j[te.user_guid]&&j[te.user_guid].startsWith("--badge__ribbon--"))));if(I){const j=I.badge||I[te.user_guid];j==="--badge__ribbon--gold"?_e="badge-trophy--gold":j==="--badge__ribbon--silver"?_e="badge-trophy--silver":j==="--badge__ribbon--bronze"&&(_e="badge-trophy--bronze")}}const ke=te.combined_betslips?typeof te.combined_betslips=="string"?te.combined_betslips:JSON.stringify(te.combined_betslips):"[]";let me="[]";if(te.combined_betslips&&G?.matches_expanded){const I=typeof te.combined_betslips=="string"?JSON.parse(te.combined_betslips):te.combined_betslips,j=[...new Set(I.map(Z=>Z.coreMatches__guid||Z.match_guid||Z.odds_id).filter(Boolean))],q=G.matches_expanded.filter(Z=>{const ce=Z.guid||Z.id||Z.odds_id;return j.includes(ce)});me=JSON.stringify(q)}return`
                                                <bma-leaderboard-card
                                                    data-rank="${Pe+1}"
                                                    data-username="${te.username||"Unknown"}"
                                                    data-user-guid="${te.user_guid||""}"
                                                    data-tournament-dollars="${te.calculated_tournament_dollars||0}"
                                                    data-total-betslips="${te.total_betslips||0}"
                                                    data-total-payout="${te.total_payout||0}"
                                                    data-combined-betslips="${ke.replace(/"/g,"&quot;")}"
                                                    data-user-matches="${me.replace(/"/g,"&quot;")}"
                                                    data-badge-class="${_e}"
                                                    data-is-current-user="${te.user_guid===P}"
                                                    data-sync-theme="dark"
                                                ></bma-leaderboard-card>
                                            `}).join("");const U=Q.findIndex(te=>te.user_guid===P),se=U>=0?U+1:Q.length,W=G?.entities?.guids?.length||Q.length,re=document.getElementById("dashboard-rank");re&&(re.innerHTML=`
                                                <span class="tourn-dashboard__rank-text">${se}/${W}</span>
                                            `)}else ee.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>No leaderboard data available yet.</p>
                                                <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                                            </div>
                                        `}).catch($=>{console.error("[app_events] Error fetching leaderboard:",$);const ee=document.getElementById("pop-play__caro-leaderboard--id");ee&&(ee.innerHTML=`
                                            <div class="leaderboard-empty">
                                                <p>Unable to load leaderboard data.</p>
                                            </div>
                                        `)})},600);let S=_==="PLAY"||_==="JOIN"?"PLAY":_;if(!f||h.coreTourn.length===0||h.coreTourn[h.coreTourn.length-1].data.find(ee=>ee.guid===f)?.status==="COMPLETED"&&(S="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),S){const P=`ROUTE.HOME.SODAPOP_PLAY.${S}`;console.log("[app_events] Publishing initial topic:",P),J.publish(P,JSON.stringify({tournamentGuid:f,timestamp:Date.now()}))}if(!f||h.coreTourn.length===0)return;const R=h.coreTourn[h.coreTourn.length-1].data.find(P=>P.guid===f);Qe.renderMatchCards(R);const C=document.querySelector("#pop-play__tourn-caption--id"),x=document.querySelector("#pop-play__tourn-tagline--id");C&&(C.textContent=R.caption),x&&(x.textContent=R.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",R?.caption);const w=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!w),w&&console.log("[Modal Debug] Modal classes:",w.className),Qe.updateTournamentDashboard(R);const M=document.getElementById("dashboard-rank");if(M){const P=R.entities?.guids?.length||0;M.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${P}</span>
                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},Nm={__name:"App",setup(e){const t=vt(),s=Te();return setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((n=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${n}`,"primary"),t.push({name:n})}).setOnState((n=null)=>{n&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=n)}).init({BASE:Se.API_baseURI})},2e3),setTimeout(()=>{s.appCLIFeatures.features.sse.state&&xn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=user%40example.com&lastkey=123",s.appSession.session_user.guid,s,!0)},3e3),setTimeout(()=>{Qe.bindAppListeners(s)},3e3),t.beforeEach((n,a,r)=>{n.name=="splash_route"||n.name&&mvvLegit&&mvvLegit.isRouteAllowed(n.name)?r():r(!1)}),(n,a)=>(st(),kr(Kt(dl),null,{default:Sa(({Component:r})=>[He(kd,{name:"slide-left"},{default:Sa(()=>[(st(),kr(Mc(r)))]),_:2},1024)]),_:1}))}};class Dm extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock()}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval)}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const s=new Date,n=s.toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}),a=s.toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"});t.textContent=`${a} ${n}`}}handleLogoClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),J.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
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
    `;const r=this.shadowRoot.querySelector("#logoLink"),o=this.shadowRoot.querySelector("#profileIcon");r&&r.addEventListener("click",i=>this.handleLogoClick(i)),o&&(o.addEventListener("click",i=>this.handleProfileClick(i)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&this.handleProfileClick(i)})),this.updateTime()}}customElements.define("bma-app-head-top",Dm);class Bm extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-tab"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-tab"&&(this.selectedTab=n||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),J.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=[{name:"head_mid_lobby",caption:"Tournament Lobby",mobileCaption:"Lobby",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"My Tournaments",mobileCaption:"My Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_completed",caption:"Completed Tournaments",mobileCaption:"Completed Tourneys",topic:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED"},{name:"head_mid_leaderboard",caption:"Leaderboard Ranking",mobileCaption:"Leaderboard",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Squads",mobileCaption:"Squads",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],r=o=>`
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
    `,a.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-tab="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleTabClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(o.name,o.topic))}))})}}customElements.define("bma-app-head-mid",Bm);class Fm extends HTMLElement{constructor(){super(),this.selectedChip="all",this.savedScrollPosition=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-chip"&&(this.selectedChip=n||"all"),this.render())}handleChipClick(t,s){const n=this.shadowRoot.querySelector(".chips-container");n&&(this.savedScrollPosition=n.scrollLeft),this.selectedChip=t,this.setAttribute("data-selected-chip",t),J.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),this.render()}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:-256,behavior:"smooth"}),J.publish("WC.APP.HEAD_SPORTS.PREV",JSON.stringify({timestamp:Date.now()})))}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");t&&(t.scrollBy({left:256,behavior:"smooth"}),J.publish("WC.APP.HEAD_SPORTS.NEXT",JSON.stringify({timestamp:Date.now()})))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;let s=!1,n,a;t.addEventListener("mousedown",r=>{s=!0,t.style.cursor="grabbing",n=r.pageX-t.offsetLeft,a=t.scrollLeft,J.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:a,timestamp:Date.now()}))}),t.addEventListener("mouseleave",()=>{s=!1,t.style.cursor="grab"}),t.addEventListener("mouseup",()=>{s=!1,t.style.cursor="grab"}),t.addEventListener("mousemove",r=>{if(!s)return;r.preventDefault();const i=(r.pageX-t.offsetLeft-n)*2;t.scrollLeft=a-i})}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",o=(Te().appMeta?.sports||[]).filter(b=>b.active===!0),i=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],l=[...o].sort((b,h)=>{const g=b.title||b.description||"",f=h.title||h.description||"",_=i.indexOf(g),y=i.indexOf(f);return _!==-1&&y!==-1?_-y:_!==-1?-1:y!==-1?1:g.toLowerCase().localeCompare(f.toLowerCase())}),c=[{key:"all",group:"All",title:"HOME",description:"All Sports"},{key:"multi",group:"Multi",title:"Multiple Sport",description:"Multi-Sport Tournaments"},...l],d=b=>{const h=this.selectedChip===b.key,g=b.key==="all";b.key;let f="";return g||(f=`<bma-sport-icon sport="${b.key}" data-sport-group="${b.group}"></bma-sport-icon>`),`
        <div
          class="sport-chip ${h?"chip-selected":"chip-unselected"}"
          data-chip="${b.key}"
          role="button"
          tabindex="0"
          aria-label="${b.description||b.title}"
        >
          ${f}
          <span class="chip-title">${b.title||b.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: block;
          width: 100%;
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

        .head-sports-container {
          max-width: var(--bma-app-head__max--width, 1180px);
          margin: 0 auto;
          display: grid;
          grid-template-areas: "head_sports_prev head_sports_chips head_sports_next";
          grid-template-columns: 48px auto 48px;
          align-items: flex-start;
          gap: 8px;
          padding: 8px;
        }

        .nav-icon {
          width: 32px; height: 32px;
          border-radius: 0;
          background-color: ${n?"rgba(32, 32, 32, 0.8)":"rgba(255, 255, 255, 0.8)"};
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          border: 1px solid ${n?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)"};
          cursor: pointer;
          transition: all 0.2s ease;
          opacity: 0.6;
        }

        .nav-icon:hover {
          opacity: 1;
          background-color: ${n?"rgba(0, 230, 118, 0.1)":"rgba(0, 230, 118, 0.05)"};
          border-color: ${n?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.2)"};
          transform: scale(1.05);
        }
        .nav-icon.nav-icon__prev { background-image: var( --nav-icon__chevron_prev--${n?"dark":"vlight"} ); }
        .nav-icon.nav-icon__next { background-image: var( --nav-icon__chevron_prev--${n?"dark":"vlight"} ); transform: rotate(180deg); }


        .nav-prev {
          grid-area: head_sports_prev;
        }

        .nav-next {
          grid-area: head_sports_next;
        }

        .chips-wrapper {
          grid-area: head_sports_chips;
          position: relative;
          overflow: hidden;
        }

        .chips-container {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          overflow-y: hidden;
          scroll-behavior: smooth;
          padding: 1px 0;
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
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 2px 4px 0 4px;
          border-radius: 0;
          border: 1px solid #323232;
          border-bottom: 3px solid #323232;
          cursor: pointer;
          transition: all 0.6s ease;
          white-space: nowrap;
          user-select: none;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .chip-unselected {
          color: ${n?"rgba(255, 255, 255, 0.5)":"rgba(0, 0, 0, 0.6)"};
          background: ${n?"rgba(32, 32, 32, 0.6)":"rgba(255, 255, 255, 0.6)"};
          border: 1px solid ${n?"rgba(255, 255, 255, 0.08)":"rgba(0, 0, 0, 0.08)"};
          border-bottom: 2px solid transparent;
        }

        .chip-unselected:hover {
          color: ${n?"rgba(255, 255, 255, 0.85)":"rgba(0, 0, 0, 0.85)"};
          background: ${n?"rgba(46, 139, 87, 0.15)":"rgba(46, 139, 87, 0.1)"};
          border-bottom-color: ${n?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.4)"};
          transform: translateY(-1px);
        }

        .chip-selected {
          color: ${n?"#00E676":"#00C853"};
          background: ${n?"rgba(0, 230, 118, 0.1)":"rgba(0, 230, 118, 0.08)"};
          border: 1px solid ${n?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.25)"};
          border-bottom: 1px solid ${n?"rgba(0, 230, 118, 0.3)":"rgba(0, 230, 118, 0.25)"};
          box-shadow: 0 2px 8px rgba(0, 230, 118, 0.15);
          font-weight: 700;
        }

        .chip-title {
          font-size: 0.875rem;
          font-weight: 600;
        }

        bma-sport-icon {
          flex-shrink: 0;
        }
      </style>

      <div class="head-sports-container">
        <aside class="nav-icon nav-prev nav-icon__prev" id="navPrev" role="button" tabindex="0" aria-label="Scroll left"></aside>

        <div class="chips-wrapper">
          <div class="chips-container">
            ${c.map(b=>d(b)).join("")}
          </div>
        </div>

        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,c.forEach(b=>{const h=this.shadowRoot.querySelector(`[data-chip="${b.key}"]`);h&&h.addEventListener("click",()=>this.handleChipClick(b.key,b.group))});const u=this.shadowRoot.querySelector("#navPrev"),p=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),p&&p.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const m=this.shadowRoot.querySelector(".chips-container");m&&this.savedScrollPosition>0&&(m.scrollLeft=this.savedScrollPosition)}}customElements.define("bma-app-head-sports",Fm);class $m extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render()}static get observedAttributes(){return["data-sync-theme","data-selected-item"]}attributeChangedCallback(t,s,n){this.shadowRoot&&s!==n&&(t==="data-selected-item"&&(this.selectedItem=n||"foot_all_sports"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),J.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){const n=(document.getElementById("app")?.getAttribute("data-sync-theme")||"dark")==="dark",a=[{name:"foot_all_sports",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboard",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],r=o=>`
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
    `,a.forEach(o=>{const i=this.shadowRoot.querySelector(`[data-item="${o.name}"]`);i&&(i.addEventListener("click",()=>this.handleItemClick(o.name,o.topic)),i.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(o.name,o.topic))}))})}}customElements.define("bma-app-foot",$m);class Um extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,n){s!==n&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const n=s[0],a=n.short_title||"Match Info N/A",o=Object.keys(n).filter(_=>_!=="short_title")[0]||"Unknown Team",i=n[o],l=i.odds||"N/A",c=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),u=parseFloat(i.payout||0).toFixed(2),p=i.reconciled!==!1,m=p&&parseFloat(u)>parseFloat(d),b=p&&parseFloat(u)<=parseFloat(d);let h="";p?m?h="win":b&&(h="loss"):h="unreconciled";const g=t.status_time?qs.formatDateLocal(t.status_time):"";let f=o;if(c==="spread"&&i.point){const _=parseFloat(i.point)>0?`+${i.point}`:i.point;f=`${o} ${_}`}else c==="total"&&i.point&&(f=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
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

      <div class="bet-existing-card ${h}">
        <div class="grid_header">
          <div class="match_desc">${a}</div>
          <div class="match_date">${g}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${f}</div>
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

`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Co)}):document.body.insertAdjacentHTML("beforeend",Co);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const jn=su(Nm);jn.config.devtools=!1;jn.use(ru());jn.use(Fa);jn.mount("#app");if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})})}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
