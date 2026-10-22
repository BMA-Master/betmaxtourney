(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(r){if(r.ep)return;r.ep=!0;const n=a(r);fetch(r.href,n)}})();function _o(e){const t=Object.create(null);for(const a of e.split(","))t[a]=1;return a=>a in t}const ke={},ja=[],Ot=()=>{},Ac=()=>!1,qr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),yo=e=>e.startsWith("onUpdate:"),Ne=Object.assign,vo=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},Mu=Object.prototype.hasOwnProperty,Se=(e,t)=>Mu.call(e,t),pe=Array.isArray,Ha=e=>xs(e)==="[object Map]",Gr=e=>xs(e)==="[object Set]",Wo=e=>xs(e)==="[object Date]",he=e=>typeof e=="function",Me=e=>typeof e=="string",Rt=e=>typeof e=="symbol",Pe=e=>e!==null&&typeof e=="object",Cc=e=>(Pe(e)||he(e))&&he(e.then)&&he(e.catch),Oc=Object.prototype.toString,xs=e=>Oc.call(e),Lu=e=>xs(e).slice(8,-1),$c=e=>xs(e)==="[object Object]",wo=e=>Me(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,rs=_o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Vr=e=>{const t=Object.create(null);return(a=>t[a]||(t[a]=e(a)))},Nu=/-\w/g,ht=Vr(e=>e.replace(Nu,t=>t.slice(1).toUpperCase())),Du=/\B([A-Z])/g,fa=Vr(e=>e.replace(Du,"-$1").toLowerCase()),Kr=Vr(e=>e.charAt(0).toUpperCase()+e.slice(1)),fn=Vr(e=>e?`on${Kr(e)}`:""),la=(e,t)=>!Object.is(e,t),yr=(e,...t)=>{for(let a=0;a<e.length;a++)e[a](...t)},Rc=(e,t,a,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:a})},Iu=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Bu=e=>{const t=Me(e)?Number(e):NaN;return isNaN(t)?e:t};let Jo;const Yr=()=>Jo||(Jo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function To(e){if(pe(e)){const t={};for(let a=0;a<e.length;a++){const s=e[a],r=Me(s)?Hu(s):To(s);if(r)for(const n in r)t[n]=r[n]}return t}else if(Me(e)||Pe(e))return e}const Fu=/;(?![^(]*\))/g,zu=/:([^]+)/,ju=/\/\*[^]*?\*\//g;function Hu(e){const t={};return e.replace(ju,"").split(Fu).forEach(a=>{if(a){const s=a.split(zu);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function da(e){let t="";if(Me(e))t=e;else if(pe(e))for(let a=0;a<e.length;a++){const s=da(e[a]);s&&(t+=s+" ")}else if(Pe(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}const Uu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qu=_o(Uu);function Mc(e){return!!e||e===""}function Gu(e,t){if(e.length!==t.length)return!1;let a=!0;for(let s=0;a&&s<e.length;s++)a=Wr(e[s],t[s]);return a}function Wr(e,t){if(e===t)return!0;let a=Wo(e),s=Wo(t);if(a||s)return a&&s?e.getTime()===t.getTime():!1;if(a=Rt(e),s=Rt(t),a||s)return e===t;if(a=pe(e),s=pe(t),a||s)return a&&s?Gu(e,t):!1;if(a=Pe(e),s=Pe(t),a||s){if(!a||!s)return!1;const r=Object.keys(e).length,n=Object.keys(t).length;if(r!==n)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(i&&!l||!i&&l||!Wr(e[o],t[o]))return!1}}return String(e)===String(t)}function Lc(e,t){return e.findIndex(a=>Wr(a,t))}const Nc=e=>!!(e&&e.__v_isRef===!0),Dc=e=>Me(e)?e:e==null?"":pe(e)||Pe(e)&&(e.toString===Oc||!he(e.toString))?Nc(e)?Dc(e.value):JSON.stringify(e,Ic,2):String(e),Ic=(e,t)=>Nc(t)?Ic(e,t.value):Ha(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[s,r],n)=>(a[hn(s,n)+" =>"]=r,a),{})}:Gr(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>hn(a))}:Rt(t)?hn(t):Pe(t)&&!pe(t)&&!$c(t)?String(t):t,hn=(e,t="")=>{var a;return Rt(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};let ze;class Bc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].pause();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].resume();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].resume()}}run(t){if(this._active){const a=ze;try{return ze=this,t()}finally{ze=a}}}on(){++this._on===1&&(this.prevScope=ze,ze=this)}off(){this._on>0&&--this._on===0&&(ze=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(this.effects.length=0,a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Fc(e){return new Bc(e)}function zc(){return ze}function Vu(e,t=!1){ze&&ze.cleanups.push(e)}let Ae;const mn=new WeakSet;class jc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mn.has(this)&&(mn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Uc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Xo(this),qc(this);const t=Ae,a=gt;Ae=this,gt=!0;try{return this.fn()}finally{Gc(this),Ae=t,gt=a,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Eo(t);this.deps=this.depsTail=void 0,Xo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jn(this)&&this.run()}get dirty(){return Jn(this)}}let Hc=0,ns,os;function Uc(e,t=!1){if(e.flags|=8,t){e.next=os,os=e;return}e.next=ns,ns=e}function So(){Hc++}function xo(){if(--Hc>0)return;if(os){let t=os;for(os=void 0;t;){const a=t.next;t.next=void 0,t.flags&=-9,t=a}}let e;for(;ns;){let t=ns;for(ns=void 0;t;){const a=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=a}}if(e)throw e}function qc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Gc(e){let t,a=e.depsTail,s=a;for(;s;){const r=s.prevDep;s.version===-1?(s===a&&(a=r),Eo(s),Ku(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}e.deps=t,e.depsTail=a}function Jn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Vc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Vc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===hs)||(e.globalVersion=hs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Jn(e))))return;e.flags|=2;const t=e.dep,a=Ae,s=gt;Ae=e,gt=!0;try{qc(e);const r=e.fn(e._value);(t.version===0||la(r,e._value))&&(e.flags|=128,e._value=r,t.version++)}catch(r){throw t.version++,r}finally{Ae=a,gt=s,Gc(e),e.flags&=-3}}function Eo(e,t=!1){const{dep:a,prevSub:s,nextSub:r}=e;if(s&&(s.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=s,e.nextSub=void 0),a.subs===e&&(a.subs=s,!s&&a.computed)){a.computed.flags&=-5;for(let n=a.computed.deps;n;n=n.nextDep)Eo(n,!0)}!t&&!--a.sc&&a.map&&a.map.delete(a.key)}function Ku(e){const{prevDep:t,nextDep:a}=e;t&&(t.nextDep=a,e.prevDep=void 0),a&&(a.prevDep=t,e.nextDep=void 0)}let gt=!0;const Kc=[];function Yt(){Kc.push(gt),gt=!1}function Wt(){const e=Kc.pop();gt=e===void 0?!0:e}function Xo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const a=Ae;Ae=void 0;try{t()}finally{Ae=a}}}let hs=0;class Yu{constructor(t,a){this.sub=t,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ko{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Ae||!gt||Ae===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==Ae)a=this.activeLink=new Yu(Ae,this),Ae.deps?(a.prevDep=Ae.depsTail,Ae.depsTail.nextDep=a,Ae.depsTail=a):Ae.deps=Ae.depsTail=a,Yc(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const s=a.nextDep;s.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=s),a.prevDep=Ae.depsTail,a.nextDep=void 0,Ae.depsTail.nextDep=a,Ae.depsTail=a,Ae.deps===a&&(Ae.deps=s)}return a}trigger(t){this.version++,hs++,this.notify(t)}notify(t){So();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{xo()}}}function Yc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Yc(s)}const a=e.dep.subs;a!==e&&(e.prevSub=a,a&&(a.nextSub=e)),e.dep.subs=e}}const Er=new WeakMap,Ca=Symbol(""),Xn=Symbol(""),ms=Symbol("");function je(e,t,a){if(gt&&Ae){let s=Er.get(e);s||Er.set(e,s=new Map);let r=s.get(a);r||(s.set(a,r=new ko),r.map=s,r.key=a),r.track()}}function Gt(e,t,a,s,r,n){const o=Er.get(e);if(!o){hs++;return}const i=l=>{l&&l.trigger()};if(So(),t==="clear")o.forEach(i);else{const l=pe(e),c=l&&wo(a);if(l&&a==="length"){const d=Number(s);o.forEach((u,p)=>{(p==="length"||p===ms||!Rt(p)&&p>=d)&&i(u)})}else switch((a!==void 0||o.has(void 0))&&i(o.get(a)),c&&i(o.get(ms)),t){case"add":l?c&&i(o.get("length")):(i(o.get(Ca)),Ha(e)&&i(o.get(Xn)));break;case"delete":l||(i(o.get(Ca)),Ha(e)&&i(o.get(Xn)));break;case"set":Ha(e)&&i(o.get(Ca));break}}xo()}function Wu(e,t){const a=Er.get(e);return a&&a.get(t)}function Ma(e){const t=ye(e);return t===e?t:(je(t,"iterate",ms),bt(e)?t:t.map(Ve))}function Po(e){return je(e=ye(e),"iterate",ms),e}const Ju={__proto__:null,[Symbol.iterator](){return gn(this,Symbol.iterator,Ve)},concat(...e){return Ma(this).concat(...e.map(t=>pe(t)?Ma(t):t))},entries(){return gn(this,"entries",e=>(e[1]=Ve(e[1]),e))},every(e,t){return Lt(this,"every",e,t,void 0,arguments)},filter(e,t){return Lt(this,"filter",e,t,a=>a.map(Ve),arguments)},find(e,t){return Lt(this,"find",e,t,Ve,arguments)},findIndex(e,t){return Lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Lt(this,"findLast",e,t,Ve,arguments)},findLastIndex(e,t){return Lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return bn(this,"includes",e)},indexOf(...e){return bn(this,"indexOf",e)},join(e){return Ma(this).join(e)},lastIndexOf(...e){return bn(this,"lastIndexOf",e)},map(e,t){return Lt(this,"map",e,t,void 0,arguments)},pop(){return Wa(this,"pop")},push(...e){return Wa(this,"push",e)},reduce(e,...t){return Qo(this,"reduce",e,t)},reduceRight(e,...t){return Qo(this,"reduceRight",e,t)},shift(){return Wa(this,"shift")},some(e,t){return Lt(this,"some",e,t,void 0,arguments)},splice(...e){return Wa(this,"splice",e)},toReversed(){return Ma(this).toReversed()},toSorted(e){return Ma(this).toSorted(e)},toSpliced(...e){return Ma(this).toSpliced(...e)},unshift(...e){return Wa(this,"unshift",e)},values(){return gn(this,"values",Ve)}};function gn(e,t,a){const s=Po(e),r=s[t]();return s!==e&&!bt(e)&&(r._next=r.next,r.next=()=>{const n=r._next();return n.done||(n.value=a(n.value)),n}),r}const Xu=Array.prototype;function Lt(e,t,a,s,r,n){const o=Po(e),i=o!==e&&!bt(e),l=o[t];if(l!==Xu[t]){const u=l.apply(e,n);return i?Ve(u):u}let c=a;o!==e&&(i?c=function(u,p){return a.call(this,Ve(u),p,e)}:a.length>2&&(c=function(u,p){return a.call(this,u,p,e)}));const d=l.call(o,c,s);return i&&r?r(d):d}function Qo(e,t,a,s){const r=Po(e);let n=a;return r!==e&&(bt(e)?a.length>3&&(n=function(o,i,l){return a.call(this,o,i,l,e)}):n=function(o,i,l){return a.call(this,o,Ve(i),l,e)}),r[t](n,...s)}function bn(e,t,a){const s=ye(e);je(s,"iterate",ms);const r=s[t](...a);return(r===-1||r===!1)&&Oo(a[0])?(a[0]=ye(a[0]),s[t](...a)):r}function Wa(e,t,a=[]){Yt(),So();const s=ye(e)[t].apply(e,a);return xo(),Wt(),s}const Qu=_o("__proto__,__v_isRef,__isVue"),Wc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rt));function Zu(e){Rt(e)||(e=String(e));const t=ye(this);return je(t,"has",e),t.hasOwnProperty(e)}class Jc{constructor(t=!1,a=!1){this._isReadonly=t,this._isShallow=a}get(t,a,s){if(a==="__v_skip")return t.__v_skip;const r=this._isReadonly,n=this._isShallow;if(a==="__v_isReactive")return!r;if(a==="__v_isReadonly")return r;if(a==="__v_isShallow")return n;if(a==="__v_raw")return s===(r?n?cp:ed:n?Zc:Qc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=pe(t);if(!r){let l;if(o&&(l=Ju[a]))return l;if(a==="hasOwnProperty")return Zu}const i=Reflect.get(t,a,Re(t)?t:s);if((Rt(a)?Wc.has(a):Qu(a))||(r||je(t,"get",a),n))return i;if(Re(i)){const l=o&&wo(a)?i:i.value;return r&&Pe(l)?Zn(l):l}return Pe(i)?r?Zn(i):Kt(i):i}}class Xc extends Jc{constructor(t=!1){super(!1,t)}set(t,a,s,r){let n=t[a];if(!this._isShallow){const l=Ra(n);if(!bt(s)&&!Ra(s)&&(n=ye(n),s=ye(s)),!pe(t)&&Re(n)&&!Re(s))return l||(n.value=s),!0}const o=pe(t)&&wo(a)?Number(a)<t.length:Se(t,a),i=Reflect.set(t,a,s,Re(t)?t:r);return t===ye(r)&&(o?la(s,n)&&Gt(t,"set",a,s):Gt(t,"add",a,s)),i}deleteProperty(t,a){const s=Se(t,a);t[a];const r=Reflect.deleteProperty(t,a);return r&&s&&Gt(t,"delete",a,void 0),r}has(t,a){const s=Reflect.has(t,a);return(!Rt(a)||!Wc.has(a))&&je(t,"has",a),s}ownKeys(t){return je(t,"iterate",pe(t)?"length":Ca),Reflect.ownKeys(t)}}class ep extends Jc{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const tp=new Xc,ap=new ep,sp=new Xc(!0);const Qn=e=>e,As=e=>Reflect.getPrototypeOf(e);function rp(e,t,a){return function(...s){const r=this.__v_raw,n=ye(r),o=Ha(n),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=r[e](...s),d=a?Qn:t?eo:Ve;return!t&&je(n,"iterate",l?Xn:Ca),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:i?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Cs(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function np(e,t){const a={get(r){const n=this.__v_raw,o=ye(n),i=ye(r);e||(la(r,i)&&je(o,"get",r),je(o,"get",i));const{has:l}=As(o),c=t?Qn:e?eo:Ve;if(l.call(o,r))return c(n.get(r));if(l.call(o,i))return c(n.get(i));n!==o&&n.get(r)},get size(){const r=this.__v_raw;return!e&&je(ye(r),"iterate",Ca),r.size},has(r){const n=this.__v_raw,o=ye(n),i=ye(r);return e||(la(r,i)&&je(o,"has",r),je(o,"has",i)),r===i?n.has(r):n.has(r)||n.has(i)},forEach(r,n){const o=this,i=o.__v_raw,l=ye(i),c=t?Qn:e?eo:Ve;return!e&&je(l,"iterate",Ca),i.forEach((d,u)=>r.call(n,c(d),c(u),o))}};return Ne(a,e?{add:Cs("add"),set:Cs("set"),delete:Cs("delete"),clear:Cs("clear")}:{add(r){!t&&!bt(r)&&!Ra(r)&&(r=ye(r));const n=ye(this);return As(n).has.call(n,r)||(n.add(r),Gt(n,"add",r,r)),this},set(r,n){!t&&!bt(n)&&!Ra(n)&&(n=ye(n));const o=ye(this),{has:i,get:l}=As(o);let c=i.call(o,r);c||(r=ye(r),c=i.call(o,r));const d=l.call(o,r);return o.set(r,n),c?la(n,d)&&Gt(o,"set",r,n):Gt(o,"add",r,n),this},delete(r){const n=ye(this),{has:o,get:i}=As(n);let l=o.call(n,r);l||(r=ye(r),l=o.call(n,r)),i&&i.call(n,r);const c=n.delete(r);return l&&Gt(n,"delete",r,void 0),c},clear(){const r=ye(this),n=r.size!==0,o=r.clear();return n&&Gt(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{a[r]=rp(r,e,t)}),a}function Ao(e,t){const a=np(e,t);return(s,r,n)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(Se(a,r)&&r in s?a:s,r,n)}const op={get:Ao(!1,!1)},ip={get:Ao(!1,!0)},lp={get:Ao(!0,!1)};const Qc=new WeakMap,Zc=new WeakMap,ed=new WeakMap,cp=new WeakMap;function dp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function up(e){return e.__v_skip||!Object.isExtensible(e)?0:dp(Lu(e))}function Kt(e){return Ra(e)?e:Co(e,!1,tp,op,Qc)}function td(e){return Co(e,!1,sp,ip,Zc)}function Zn(e){return Co(e,!0,ap,lp,ed)}function Co(e,t,a,s,r){if(!Pe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=up(e);if(n===0)return e;const o=r.get(e);if(o)return o;const i=new Proxy(e,n===2?s:a);return r.set(e,i),i}function Oa(e){return Ra(e)?Oa(e.__v_raw):!!(e&&e.__v_isReactive)}function Ra(e){return!!(e&&e.__v_isReadonly)}function bt(e){return!!(e&&e.__v_isShallow)}function Oo(e){return e?!!e.__v_raw:!1}function ye(e){const t=e&&e.__v_raw;return t?ye(t):e}function $o(e){return!Se(e,"__v_skip")&&Object.isExtensible(e)&&Rc(e,"__v_skip",!0),e}const Ve=e=>Pe(e)?Kt(e):e,eo=e=>Pe(e)?Zn(e):e;function Re(e){return e?e.__v_isRef===!0:!1}function lt(e){return ad(e,!1)}function pp(e){return ad(e,!0)}function ad(e,t){return Re(e)?e:new fp(e,t)}class fp{constructor(t,a){this.dep=new ko,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?t:ye(t),this._value=a?t:Ve(t),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(t){const a=this._rawValue,s=this.__v_isShallow||bt(t)||Ra(t);t=s?t:ye(t),la(t,a)&&(this._rawValue=t,this._value=s?t:Ve(t),this.dep.trigger())}}function ca(e){return Re(e)?e.value:e}const hp={get:(e,t,a)=>t==="__v_raw"?e:ca(Reflect.get(e,t,a)),set:(e,t,a,s)=>{const r=e[t];return Re(r)&&!Re(a)?(r.value=a,!0):Reflect.set(e,t,a,s)}};function sd(e){return Oa(e)?e:new Proxy(e,hp)}function mp(e){const t=pe(e)?new Array(e.length):{};for(const a in e)t[a]=bp(e,a);return t}class gp{constructor(t,a,s){this._object=t,this._key=a,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Wu(ye(this._object),this._key)}}function bp(e,t,a){const s=e[t];return Re(s)?s:new gp(e,t,a)}class _p{constructor(t,a,s){this.fn=t,this.setter=a,this._value=void 0,this.dep=new ko(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ae!==this)return Uc(this,!0),!0}get value(){const t=this.dep.track();return Vc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function yp(e,t,a=!1){let s,r;return he(e)?s=e:(s=e.get,r=e.set),new _p(s,r,a)}const Os={},kr=new WeakMap;let Ea;function vp(e,t=!1,a=Ea){if(a){let s=kr.get(a);s||kr.set(a,s=[]),s.push(e)}}function wp(e,t,a=ke){const{immediate:s,deep:r,once:n,scheduler:o,augmentJob:i,call:l}=a,c=w=>r?w:bt(w)||r===!1||r===0?Vt(w,1):Vt(w);let d,u,p,f,g=!1,_=!1;if(Re(e)?(u=()=>e.value,g=bt(e)):Oa(e)?(u=()=>c(e),g=!0):pe(e)?(_=!0,g=e.some(w=>Oa(w)||bt(w)),u=()=>e.map(w=>{if(Re(w))return w.value;if(Oa(w))return c(w);if(he(w))return l?l(w,2):w()})):he(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){Yt();try{p()}finally{Wt()}}const w=Ea;Ea=d;try{return l?l(e,3,[f]):e(f)}finally{Ea=w}}:u=Ot,t&&r){const w=u,v=r===!0?1/0:r;u=()=>Vt(w(),v)}const y=zc(),m=()=>{d.stop(),y&&y.active&&vo(y.effects,d)};if(n&&t){const w=t;t=(...v)=>{w(...v),m()}}let h=_?new Array(e.length).fill(Os):Os;const b=w=>{if(!(!(d.flags&1)||!d.dirty&&!w))if(t){const v=d.run();if(r||g||(_?v.some((S,P)=>la(S,h[P])):la(v,h))){p&&p();const S=Ea;Ea=d;try{const P=[v,h===Os?void 0:_&&h[0]===Os?[]:h,f];h=v,l?l(t,3,P):t(...P)}finally{Ea=S}}}else d.run()};return i&&i(b),d=new jc(u),d.scheduler=o?()=>o(b,!1):b,f=w=>vp(w,!1,d),p=d.onStop=()=>{const w=kr.get(d);if(w){if(l)l(w,4);else for(const v of w)v();kr.delete(d)}},t?s?b(!0):h=d.run():o?o(b.bind(null,!0),!0):d.run(),m.pause=d.pause.bind(d),m.resume=d.resume.bind(d),m.stop=m,m}function Vt(e,t=1/0,a){if(t<=0||!Pe(e)||e.__v_skip||(a=a||new Map,(a.get(e)||0)>=t))return e;if(a.set(e,t),t--,Re(e))Vt(e.value,t,a);else if(pe(e))for(let s=0;s<e.length;s++)Vt(e[s],t,a);else if(Gr(e)||Ha(e))e.forEach(s=>{Vt(s,t,a)});else if($c(e)){for(const s in e)Vt(e[s],t,a);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Vt(e[s],t,a)}return e}function Es(e,t,a,s){try{return s?e(...s):e()}catch(r){Jr(r,t,a)}}function _t(e,t,a,s){if(he(e)){const r=Es(e,t,a,s);return r&&Cc(r)&&r.catch(n=>{Jr(n,t,a)}),r}if(pe(e)){const r=[];for(let n=0;n<e.length;n++)r.push(_t(e[n],t,a,s));return r}}function Jr(e,t,a,s=!0){const r=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||ke;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}i=i.parent}if(n){Yt(),Es(n,null,10,[e,l,c]),Wt();return}}Tp(e,a,r,s,o)}function Tp(e,t,a,s=!0,r=!1){if(r)throw e;console.error(e)}const Ke=[];let Et=-1;const Ua=[];let sa=null,Fa=0;const rd=Promise.resolve();let Pr=null;function Ro(e){const t=Pr||rd;return e?t.then(this?e.bind(this):e):t}function Sp(e){let t=Et+1,a=Ke.length;for(;t<a;){const s=t+a>>>1,r=Ke[s],n=gs(r);n<e||n===e&&r.flags&2?t=s+1:a=s}return t}function Mo(e){if(!(e.flags&1)){const t=gs(e),a=Ke[Ke.length-1];!a||!(e.flags&2)&&t>=gs(a)?Ke.push(e):Ke.splice(Sp(t),0,e),e.flags|=1,nd()}}function nd(){Pr||(Pr=rd.then(id))}function xp(e){pe(e)?Ua.push(...e):sa&&e.id===-1?sa.splice(Fa+1,0,e):e.flags&1||(Ua.push(e),e.flags|=1),nd()}function Zo(e,t,a=Et+1){for(;a<Ke.length;a++){const s=Ke[a];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ke.splice(a,1),a--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function od(e){if(Ua.length){const t=[...new Set(Ua)].sort((a,s)=>gs(a)-gs(s));if(Ua.length=0,sa){sa.push(...t);return}for(sa=t,Fa=0;Fa<sa.length;Fa++){const a=sa[Fa];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}sa=null,Fa=0}}const gs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function id(e){try{for(Et=0;Et<Ke.length;Et++){const t=Ke[Et];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Es(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Et<Ke.length;Et++){const t=Ke[Et];t&&(t.flags&=-2)}Et=-1,Ke.length=0,od(),Pr=null,(Ke.length||Ua.length)&&id()}}let ot=null,ld=null;function Ar(e){const t=ot;return ot=e,ld=e&&e.type.__scopeId||null,t}function to(e,t=ot,a){if(!t||e._n)return e;const s=(...r)=>{s._d&&$r(-1);const n=Ar(t);let o;try{o=e(...r)}finally{Ar(n),s._d&&$r(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ep(e,t){if(ot===null)return e;const a=an(ot),s=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[n,o,i,l=ke]=t[r];n&&(he(n)&&(n={mounted:n,updated:n}),n.deep&&Vt(o),s.push({dir:n,instance:a,value:o,oldValue:void 0,arg:i,modifiers:l}))}return e}function _a(e,t,a,s){const r=e.dirs,n=t&&t.dirs;for(let o=0;o<r.length;o++){const i=r[o];n&&(i.oldValue=n[o].value);let l=i.dir[s];l&&(Yt(),_t(l,a,8,[e.el,i,e,t]),Wt())}}const kp=Symbol("_vte"),cd=e=>e.__isTeleport,Ut=Symbol("_leaveCb"),$s=Symbol("_enterCb");function Pp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qt(()=>{e.isMounted=!0}),_d(()=>{e.isUnmounting=!0}),e}const ct=[Function,Array],dd={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ct,onEnter:ct,onAfterEnter:ct,onEnterCancelled:ct,onBeforeLeave:ct,onLeave:ct,onAfterLeave:ct,onLeaveCancelled:ct,onBeforeAppear:ct,onAppear:ct,onAfterAppear:ct,onAppearCancelled:ct},ud=e=>{const t=e.subTree;return t.component?ud(t.component):t},Ap={name:"BaseTransition",props:dd,setup(e,{slots:t}){const a=Io(),s=Pp();return()=>{const r=t.default&&hd(t.default(),!0);if(!r||!r.length)return;const n=pd(r),o=ye(e),{mode:i}=o;if(s.isLeaving)return _n(n);const l=ei(n);if(!l)return _n(n);let c=ao(l,o,s,a,u=>c=u);l.type!==st&&bs(l,c);let d=a.subTree&&ei(a.subTree);if(d&&d.type!==st&&!ka(d,l)&&ud(a).type!==st){let u=ao(d,o,s,a);if(bs(d,u),i==="out-in"&&l.type!==st)return s.isLeaving=!0,u.afterLeave=()=>{s.isLeaving=!1,a.job.flags&8||a.update(),delete u.afterLeave,d=void 0},_n(n);i==="in-out"&&l.type!==st?u.delayLeave=(p,f,g)=>{const _=fd(s,d);_[String(d.key)]=d,p[Ut]=()=>{f(),p[Ut]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return n}}};function pd(e){let t=e[0];if(e.length>1){for(const a of e)if(a.type!==st){t=a;break}}return t}const Cp=Ap;function fd(e,t){const{leavingVNodes:a}=e;let s=a.get(t.type);return s||(s=Object.create(null),a.set(t.type,s)),s}function ao(e,t,a,s,r){const{appear:n,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:_,onBeforeAppear:y,onAppear:m,onAfterAppear:h,onAppearCancelled:b}=t,w=String(e.key),v=fd(a,e),S=(T,x)=>{T&&_t(T,s,9,x)},P=(T,x)=>{const O=x[1];S(T,x),pe(T)?T.every($=>$.length<=1)&&O():T.length<=1&&O()},E={mode:o,persisted:i,beforeEnter(T){let x=l;if(!a.isMounted)if(n)x=y||l;else return;T[Ut]&&T[Ut](!0);const O=v[w];O&&ka(e,O)&&O.el[Ut]&&O.el[Ut](),S(x,[T])},enter(T){let x=c,O=d,$=u;if(!a.isMounted)if(n)x=m||c,O=h||d,$=b||u;else return;let L=!1;const U=T[$s]=K=>{L||(L=!0,K?S($,[T]):S(O,[T]),E.delayedLeave&&E.delayedLeave(),T[$s]=void 0)};x?P(x,[T,U]):U()},leave(T,x){const O=String(e.key);if(T[$s]&&T[$s](!0),a.isUnmounting)return x();S(p,[T]);let $=!1;const L=T[Ut]=U=>{$||($=!0,x(),U?S(_,[T]):S(g,[T]),T[Ut]=void 0,v[O]===e&&delete v[O])};v[O]=e,f?P(f,[T,L]):L()},clone(T){const x=ao(T,t,a,s,r);return r&&r(x),x}};return E}function _n(e){if(Xr(e))return e=ua(e),e.children=null,e}function ei(e){if(!Xr(e))return cd(e.type)&&e.children?pd(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:a}=e;if(a){if(t&16)return a[0];if(t&32&&he(a.default))return a.default()}}function bs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,bs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function hd(e,t=!1,a){let s=[],r=0;for(let n=0;n<e.length;n++){let o=e[n];const i=a==null?o.key:String(a)+String(o.key!=null?o.key:n);o.type===Pt?(o.patchFlag&128&&r++,s=s.concat(hd(o.children,t,i))):(t||o.type!==st)&&s.push(i!=null?ua(o,{key:i}):o)}if(r>1)for(let n=0;n<s.length;n++)s[n].patchFlag=-2;return s}function md(e,t){return he(e)?Ne({name:e.name},t,{setup:e}):e}function gd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Cr=new WeakMap;function is(e,t,a,s,r=!1){if(pe(e)){e.forEach((g,_)=>is(g,t&&(pe(t)?t[_]:t),a,s,r));return}if(ls(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&is(e,t,a,s.component.subTree);return}const n=s.shapeFlag&4?an(s.component):s.el,o=r?null:n,{i,r:l}=e,c=t&&t.r,d=i.refs===ke?i.refs={}:i.refs,u=i.setupState,p=ye(u),f=u===ke?Ac:g=>Se(p,g);if(c!=null&&c!==l){if(ti(t),Me(c))d[c]=null,f(c)&&(u[c]=null);else if(Re(c)){c.value=null;const g=t;g.k&&(d[g.k]=null)}}if(he(l))Es(l,i,12,[o,d]);else{const g=Me(l),_=Re(l);if(g||_){const y=()=>{if(e.f){const m=g?f(l)?u[l]:d[l]:l.value;if(r)pe(m)&&vo(m,n);else if(pe(m))m.includes(n)||m.push(n);else if(g)d[l]=[n],f(l)&&(u[l]=d[l]);else{const h=[n];l.value=h,e.k&&(d[e.k]=h)}}else g?(d[l]=o,f(l)&&(u[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const m=()=>{y(),Cr.delete(e)};m.id=-1,Cr.set(e,m),tt(m,a)}else ti(e),y()}}}function ti(e){const t=Cr.get(e);t&&(t.flags|=8,Cr.delete(e))}Yr().requestIdleCallback;Yr().cancelIdleCallback;const ls=e=>!!e.type.__asyncLoader,Xr=e=>e.type.__isKeepAlive;function Op(e,t){bd(e,"a",t)}function $p(e,t){bd(e,"da",t)}function bd(e,t,a=He){const s=e.__wdc||(e.__wdc=()=>{let r=a;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Qr(t,s,a),a){let r=a.parent;for(;r&&r.parent;)Xr(r.parent.vnode)&&Rp(s,t,a,r),r=r.parent}}function Rp(e,t,a,s){const r=Qr(t,e,s,!0);Zr(()=>{vo(s[t],r)},a)}function Qr(e,t,a=He,s=!1){if(a){const r=a[e]||(a[e]=[]),n=t.__weh||(t.__weh=(...o)=>{Yt();const i=ks(a),l=_t(t,a,e,o);return i(),Wt(),l});return s?r.unshift(n):r.push(n),n}}const Xt=e=>(t,a=He)=>{(!ys||e==="sp")&&Qr(e,(...s)=>t(...s),a)},Mp=Xt("bm"),Qt=Xt("m"),Lp=Xt("bu"),Np=Xt("u"),_d=Xt("bum"),Zr=Xt("um"),Dp=Xt("sp"),Ip=Xt("rtg"),Bp=Xt("rtc");function Fp(e,t=He){Qr("ec",e,t)}const zp="components",yd=Symbol.for("v-ndc");function jp(e){return Me(e)?Hp(zp,e,!1)||e:e||yd}function Hp(e,t,a=!0,s=!1){const r=ot||He;if(r){const n=r.type;{const i=$f(n,!1);if(i&&(i===t||i===ht(t)||i===Kr(ht(t))))return n}const o=ai(r[e]||n[e],t)||ai(r.appContext[e],t);return!o&&s?n:o}}function ai(e,t){return e&&(e[t]||e[ht(t)]||e[Kr(ht(t))])}const so=e=>e?Fd(e)?an(e):so(e.parent):null,cs=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>so(e.parent),$root:e=>so(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>wd(e),$forceUpdate:e=>e.f||(e.f=()=>{Mo(e.update)}),$nextTick:e=>e.n||(e.n=Ro.bind(e.proxy)),$watch:e=>uf.bind(e)}),yn=(e,t)=>e!==ke&&!e.__isScriptSetup&&Se(e,t),Up={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:a,setupState:s,data:r,props:n,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return r[t];case 4:return a[t];case 3:return n[t]}else{if(yn(s,t))return o[t]=1,s[t];if(r!==ke&&Se(r,t))return o[t]=2,r[t];if((c=e.propsOptions[0])&&Se(c,t))return o[t]=3,n[t];if(a!==ke&&Se(a,t))return o[t]=4,a[t];ro&&(o[t]=0)}}const d=cs[t];let u,p;if(d)return t==="$attrs"&&je(e.attrs,"get",""),d(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(a!==ke&&Se(a,t))return o[t]=4,a[t];if(p=l.config.globalProperties,Se(p,t))return p[t]},set({_:e},t,a){const{data:s,setupState:r,ctx:n}=e;return yn(r,t)?(r[t]=a,!0):s!==ke&&Se(s,t)?(s[t]=a,!0):Se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:s,appContext:r,propsOptions:n,type:o}},i){let l,c;return!!(a[i]||e!==ke&&i[0]!=="$"&&Se(e,i)||yn(t,i)||(l=n[0])&&Se(l,i)||Se(s,i)||Se(cs,i)||Se(r.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:Se(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};function si(e){return pe(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}let ro=!0;function qp(e){const t=wd(e),a=e.proxy,s=e.ctx;ro=!1,t.beforeCreate&&ri(t.beforeCreate,e,"bc");const{data:r,computed:n,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:g,activated:_,deactivated:y,beforeDestroy:m,beforeUnmount:h,destroyed:b,unmounted:w,render:v,renderTracked:S,renderTriggered:P,errorCaptured:E,serverPrefetch:T,expose:x,inheritAttrs:O,components:$,directives:L,filters:U}=t;if(c&&Gp(c,s,null),o)for(const J in o){const G=o[J];he(G)&&(s[J]=G.bind(a))}if(r){const J=r.call(a,a);Pe(J)&&(e.data=Kt(J))}if(ro=!0,n)for(const J in n){const G=n[J],Y=he(G)?G.bind(a,a):he(G.get)?G.get.bind(a,a):Ot,j=!he(G)&&he(G.set)?G.set.bind(a):Ot,I=rt({get:Y,set:j});Object.defineProperty(s,J,{enumerable:!0,configurable:!0,get:()=>I.value,set:H=>I.value=H})}if(i)for(const J in i)vd(i[J],s,a,J);if(l){const J=he(l)?l.call(a):l;Reflect.ownKeys(J).forEach(G=>{vr(G,J[G])})}d&&ri(d,e,"c");function re(J,G){pe(G)?G.forEach(Y=>J(Y.bind(a))):G&&J(G.bind(a))}if(re(Mp,u),re(Qt,p),re(Lp,f),re(Np,g),re(Op,_),re($p,y),re(Fp,E),re(Bp,S),re(Ip,P),re(_d,h),re(Zr,w),re(Dp,T),pe(x))if(x.length){const J=e.exposed||(e.exposed={});x.forEach(G=>{Object.defineProperty(J,G,{get:()=>a[G],set:Y=>a[G]=Y,enumerable:!0})})}else e.exposed||(e.exposed={});v&&e.render===Ot&&(e.render=v),O!=null&&(e.inheritAttrs=O),$&&(e.components=$),L&&(e.directives=L),T&&gd(e)}function Gp(e,t,a=Ot){pe(e)&&(e=no(e));for(const s in e){const r=e[s];let n;Pe(r)?"default"in r?n=pt(r.from||s,r.default,!0):n=pt(r.from||s):n=pt(r),Re(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):t[s]=n}}function ri(e,t,a){_t(pe(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,a)}function vd(e,t,a,s){let r=s.includes(".")?Ld(a,s):()=>a[s];if(Me(e)){const n=t[e];he(n)&&ds(r,n)}else if(he(e))ds(r,e.bind(a));else if(Pe(e))if(pe(e))e.forEach(n=>vd(n,t,a,s));else{const n=he(e.handler)?e.handler.bind(a):t[e.handler];he(n)&&ds(r,n,e)}}function wd(e){const t=e.type,{mixins:a,extends:s}=t,{mixins:r,optionsCache:n,config:{optionMergeStrategies:o}}=e.appContext,i=n.get(t);let l;return i?l=i:!r.length&&!a&&!s?l=t:(l={},r.length&&r.forEach(c=>Or(l,c,o,!0)),Or(l,t,o)),Pe(t)&&n.set(t,l),l}function Or(e,t,a,s=!1){const{mixins:r,extends:n}=t;n&&Or(e,n,a,!0),r&&r.forEach(o=>Or(e,o,a,!0));for(const o in t)if(!(s&&o==="expose")){const i=Vp[o]||a&&a[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Vp={data:ni,props:oi,emits:oi,methods:as,computed:as,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:as,directives:as,watch:Yp,provide:ni,inject:Kp};function ni(e,t){return t?e?function(){return Ne(he(e)?e.call(this,this):e,he(t)?t.call(this,this):t)}:t:e}function Kp(e,t){return as(no(e),no(t))}function no(e){if(pe(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function qe(e,t){return e?[...new Set([].concat(e,t))]:t}function as(e,t){return e?Ne(Object.create(null),e,t):t}function oi(e,t){return e?pe(e)&&pe(t)?[...new Set([...e,...t])]:Ne(Object.create(null),si(e),si(t??{})):t}function Yp(e,t){if(!e)return t;if(!t)return e;const a=Ne(Object.create(null),e);for(const s in t)a[s]=qe(e[s],t[s]);return a}function Td(){return{app:null,config:{isNativeTag:Ac,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wp=0;function Jp(e,t){return function(s,r=null){he(s)||(s=Ne({},s)),r!=null&&!Pe(r)&&(r=null);const n=Td(),o=new WeakSet,i=[];let l=!1;const c=n.app={_uid:Wp++,_component:s,_props:r,_container:null,_context:n,_instance:null,version:Mf,get config(){return n.config},set config(d){},use(d,...u){return o.has(d)||(d&&he(d.install)?(o.add(d),d.install(c,...u)):he(d)&&(o.add(d),d(c,...u))),c},mixin(d){return n.mixins.includes(d)||n.mixins.push(d),c},component(d,u){return u?(n.components[d]=u,c):n.components[d]},directive(d,u){return u?(n.directives[d]=u,c):n.directives[d]},mount(d,u,p){if(!l){const f=c._ceVNode||Je(s,r);return f.appContext=n,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),l=!0,c._container=d,d.__vue_app__=c,an(f.component)}},onUnmount(d){i.push(d)},unmount(){l&&(_t(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return n.provides[d]=u,c},runWithContext(d){const u=$a;$a=c;try{return d()}finally{$a=u}}};return c}}let $a=null;function vr(e,t){if(He){let a=He.provides;const s=He.parent&&He.parent.provides;s===a&&(a=He.provides=Object.create(s)),a[e]=t}}function pt(e,t,a=!1){const s=Io();if(s||$a){let r=$a?$a._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return a&&he(t)?t.call(s&&s.proxy):t}}function Xp(){return!!(Io()||$a)}const Sd={},xd=()=>Object.create(Sd),Ed=e=>Object.getPrototypeOf(e)===Sd;function Qp(e,t,a,s=!1){const r={},n=xd();e.propsDefaults=Object.create(null),kd(e,t,r,n);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);a?e.props=s?r:td(r):e.type.props?e.props=r:e.props=n,e.attrs=n}function Zp(e,t,a,s){const{props:r,attrs:n,vnode:{patchFlag:o}}=e,i=ye(r),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(en(e.emitsOptions,p))continue;const f=t[p];if(l)if(Se(n,p))f!==n[p]&&(n[p]=f,c=!0);else{const g=ht(p);r[g]=oo(l,i,g,f,e,!1)}else f!==n[p]&&(n[p]=f,c=!0)}}}else{kd(e,t,r,n)&&(c=!0);let d;for(const u in i)(!t||!Se(t,u)&&((d=fa(u))===u||!Se(t,d)))&&(l?a&&(a[u]!==void 0||a[d]!==void 0)&&(r[u]=oo(l,i,u,void 0,e,!0)):delete r[u]);if(n!==i)for(const u in n)(!t||!Se(t,u))&&(delete n[u],c=!0)}c&&Gt(e.attrs,"set","")}function kd(e,t,a,s){const[r,n]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(rs(l))continue;const c=t[l];let d;r&&Se(r,d=ht(l))?!n||!n.includes(d)?a[d]=c:(i||(i={}))[d]=c:en(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(n){const l=ye(a),c=i||ke;for(let d=0;d<n.length;d++){const u=n[d];a[u]=oo(r,l,u,c[u],e,!Se(c,u))}}return o}function oo(e,t,a,s,r,n){const o=e[a];if(o!=null){const i=Se(o,"default");if(i&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:c}=r;if(a in c)s=c[a];else{const d=ks(r);s=c[a]=l.call(null,t),d()}}else s=l;r.ce&&r.ce._setProp(a,s)}o[0]&&(n&&!i?s=!1:o[1]&&(s===""||s===fa(a))&&(s=!0))}return s}const ef=new WeakMap;function Pd(e,t,a=!1){const s=a?ef:t.propsCache,r=s.get(e);if(r)return r;const n=e.props,o={},i=[];let l=!1;if(!he(e)){const d=u=>{l=!0;const[p,f]=Pd(u,t,!0);Ne(o,p),f&&i.push(...f)};!a&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!n&&!l)return Pe(e)&&s.set(e,ja),ja;if(pe(n))for(let d=0;d<n.length;d++){const u=ht(n[d]);ii(u)&&(o[u]=ke)}else if(n)for(const d in n){const u=ht(d);if(ii(u)){const p=n[d],f=o[u]=pe(p)||he(p)?{type:p}:Ne({},p),g=f.type;let _=!1,y=!0;if(pe(g))for(let m=0;m<g.length;++m){const h=g[m],b=he(h)&&h.name;if(b==="Boolean"){_=!0;break}else b==="String"&&(y=!1)}else _=he(g)&&g.name==="Boolean";f[0]=_,f[1]=y,(_||Se(f,"default"))&&i.push(u)}}const c=[o,i];return Pe(e)&&s.set(e,c),c}function ii(e){return e[0]!=="$"&&!rs(e)}const Lo=e=>e==="_"||e==="_ctx"||e==="$stable",No=e=>pe(e)?e.map(At):[At(e)],tf=(e,t,a)=>{if(t._n)return t;const s=to((...r)=>No(t(...r)),a);return s._c=!1,s},Ad=(e,t,a)=>{const s=e._ctx;for(const r in e){if(Lo(r))continue;const n=e[r];if(he(n))t[r]=tf(r,n,s);else if(n!=null){const o=No(n);t[r]=()=>o}}},Cd=(e,t)=>{const a=No(t);e.slots.default=()=>a},Od=(e,t,a)=>{for(const s in t)(a||!Lo(s))&&(e[s]=t[s])},af=(e,t,a)=>{const s=e.slots=xd();if(e.vnode.shapeFlag&32){const r=t._;r?(Od(s,t,a),a&&Rc(s,"_",r,!0)):Ad(t,s)}else t&&Cd(e,t)},sf=(e,t,a)=>{const{vnode:s,slots:r}=e;let n=!0,o=ke;if(s.shapeFlag&32){const i=t._;i?a&&i===1?n=!1:Od(r,t,a):(n=!t.$stable,Ad(t,r)),o=t}else t&&(Cd(e,t),o={default:1});if(n)for(const i in r)!Lo(i)&&o[i]==null&&delete r[i]},tt=yf;function rf(e){return nf(e)}function nf(e,t){const a=Yr();a.__VUE__=!0;const{insert:s,remove:r,patchProp:n,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=Ot,insertStaticContent:g}=e,_=(k,C,D,q=null,Q=null,ee=null,ie=void 0,W=null,te=!!C.dynamicChildren)=>{if(k===C)return;k&&!ka(k,C)&&(q=N(k),H(k,Q,ee,!0),k=null),C.patchFlag===-2&&(te=!1,C.dynamicChildren=null);const{type:Z,ref:le,shapeFlag:ne}=C;switch(Z){case tn:y(k,C,D,q);break;case st:m(k,C,D,q);break;case wr:k==null&&h(C,D,q,ie);break;case Pt:$(k,C,D,q,Q,ee,ie,W,te);break;default:ne&1?v(k,C,D,q,Q,ee,ie,W,te):ne&6?L(k,C,D,q,Q,ee,ie,W,te):(ne&64||ne&128)&&Z.process(k,C,D,q,Q,ee,ie,W,te,se)}le!=null&&Q?is(le,k&&k.ref,ee,C||k,!C):le==null&&k&&k.ref!=null&&is(k.ref,null,ee,k,!0)},y=(k,C,D,q)=>{if(k==null)s(C.el=i(C.children),D,q);else{const Q=C.el=k.el;C.children!==k.children&&c(Q,C.children)}},m=(k,C,D,q)=>{k==null?s(C.el=l(C.children||""),D,q):C.el=k.el},h=(k,C,D,q)=>{[k.el,k.anchor]=g(k.children,C,D,q,k.el,k.anchor)},b=({el:k,anchor:C},D,q)=>{let Q;for(;k&&k!==C;)Q=p(k),s(k,D,q),k=Q;s(C,D,q)},w=({el:k,anchor:C})=>{let D;for(;k&&k!==C;)D=p(k),r(k),k=D;r(C)},v=(k,C,D,q,Q,ee,ie,W,te)=>{if(C.type==="svg"?ie="svg":C.type==="math"&&(ie="mathml"),k==null)S(C,D,q,Q,ee,ie,W,te);else{const Z=k.el&&k.el._isVueCE?k.el:null;try{Z&&Z._beginPatch(),T(k,C,Q,ee,ie,W,te)}finally{Z&&Z._endPatch()}}},S=(k,C,D,q,Q,ee,ie,W)=>{let te,Z;const{props:le,shapeFlag:ne,transition:de,dirs:ue}=k;if(te=k.el=o(k.type,ee,le&&le.is,le),ne&8?d(te,k.children):ne&16&&E(k.children,te,null,q,Q,vn(k,ee),ie,W),ue&&_a(k,null,q,"created"),P(te,k,k.scopeId,ie,q),le){for(const we in le)we!=="value"&&!rs(we)&&n(te,we,null,le[we],ee,q);"value"in le&&n(te,"value",null,le.value,ee),(Z=le.onVnodeBeforeMount)&&xt(Z,q,k)}ue&&_a(k,null,q,"beforeMount");const fe=of(Q,de);fe&&de.beforeEnter(te),s(te,C,D),((Z=le&&le.onVnodeMounted)||fe||ue)&&tt(()=>{Z&&xt(Z,q,k),fe&&de.enter(te),ue&&_a(k,null,q,"mounted")},Q)},P=(k,C,D,q,Q)=>{if(D&&f(k,D),q)for(let ee=0;ee<q.length;ee++)f(k,q[ee]);if(Q){let ee=Q.subTree;if(C===ee||Dd(ee.type)&&(ee.ssContent===C||ee.ssFallback===C)){const ie=Q.vnode;P(k,ie,ie.scopeId,ie.slotScopeIds,Q.parent)}}},E=(k,C,D,q,Q,ee,ie,W,te=0)=>{for(let Z=te;Z<k.length;Z++){const le=k[Z]=W?ra(k[Z]):At(k[Z]);_(null,le,C,D,q,Q,ee,ie,W)}},T=(k,C,D,q,Q,ee,ie)=>{const W=C.el=k.el;let{patchFlag:te,dynamicChildren:Z,dirs:le}=C;te|=k.patchFlag&16;const ne=k.props||ke,de=C.props||ke;let ue;if(D&&ya(D,!1),(ue=de.onVnodeBeforeUpdate)&&xt(ue,D,C,k),le&&_a(C,k,D,"beforeUpdate"),D&&ya(D,!0),(ne.innerHTML&&de.innerHTML==null||ne.textContent&&de.textContent==null)&&d(W,""),Z?x(k.dynamicChildren,Z,W,D,q,vn(C,Q),ee):ie||G(k,C,W,null,D,q,vn(C,Q),ee,!1),te>0){if(te&16)O(W,ne,de,D,Q);else if(te&2&&ne.class!==de.class&&n(W,"class",null,de.class,Q),te&4&&n(W,"style",ne.style,de.style,Q),te&8){const fe=C.dynamicProps;for(let we=0;we<fe.length;we++){const be=fe[we],De=ne[be],Be=de[be];(Be!==De||be==="value")&&n(W,be,De,Be,Q,D)}}te&1&&k.children!==C.children&&d(W,C.children)}else!ie&&Z==null&&O(W,ne,de,D,Q);((ue=de.onVnodeUpdated)||le)&&tt(()=>{ue&&xt(ue,D,C,k),le&&_a(C,k,D,"updated")},q)},x=(k,C,D,q,Q,ee,ie)=>{for(let W=0;W<C.length;W++){const te=k[W],Z=C[W],le=te.el&&(te.type===Pt||!ka(te,Z)||te.shapeFlag&198)?u(te.el):D;_(te,Z,le,null,q,Q,ee,ie,!0)}},O=(k,C,D,q,Q)=>{if(C!==D){if(C!==ke)for(const ee in C)!rs(ee)&&!(ee in D)&&n(k,ee,C[ee],null,Q,q);for(const ee in D){if(rs(ee))continue;const ie=D[ee],W=C[ee];ie!==W&&ee!=="value"&&n(k,ee,W,ie,Q,q)}"value"in D&&n(k,"value",C.value,D.value,Q)}},$=(k,C,D,q,Q,ee,ie,W,te)=>{const Z=C.el=k?k.el:i(""),le=C.anchor=k?k.anchor:i("");let{patchFlag:ne,dynamicChildren:de,slotScopeIds:ue}=C;ue&&(W=W?W.concat(ue):ue),k==null?(s(Z,D,q),s(le,D,q),E(C.children||[],D,le,Q,ee,ie,W,te)):ne>0&&ne&64&&de&&k.dynamicChildren?(x(k.dynamicChildren,de,D,Q,ee,ie,W),(C.key!=null||Q&&C===Q.subTree)&&$d(k,C,!0)):G(k,C,D,le,Q,ee,ie,W,te)},L=(k,C,D,q,Q,ee,ie,W,te)=>{C.slotScopeIds=W,k==null?C.shapeFlag&512?Q.ctx.activate(C,D,q,ie,te):U(C,D,q,Q,ee,ie,te):K(k,C,te)},U=(k,C,D,q,Q,ee,ie)=>{const W=k.component=kf(k,q,Q);if(Xr(k)&&(W.ctx.renderer=se),Pf(W,!1,ie),W.asyncDep){if(Q&&Q.registerDep(W,re,ie),!k.el){const te=W.subTree=Je(st);m(null,te,C,D),k.placeholder=te.el}}else re(W,k,C,D,Q,ee,ie)},K=(k,C,D)=>{const q=C.component=k.component;if(bf(k,C,D))if(q.asyncDep&&!q.asyncResolved){J(q,C,D);return}else q.next=C,q.update();else C.el=k.el,q.vnode=C},re=(k,C,D,q,Q,ee,ie)=>{const W=()=>{if(k.isMounted){let{next:ne,bu:de,u:ue,parent:fe,vnode:we}=k;{const Tt=Rd(k);if(Tt){ne&&(ne.el=we.el,J(k,ne,ie)),Tt.asyncDep.then(()=>{k.isUnmounted||W()});return}}let be=ne,De;ya(k,!1),ne?(ne.el=we.el,J(k,ne,ie)):ne=we,de&&yr(de),(De=ne.props&&ne.props.onVnodeBeforeUpdate)&&xt(De,fe,ne,we),ya(k,!0);const Be=ci(k),wt=k.subTree;k.subTree=Be,_(wt,Be,u(wt.el),N(wt),k,Q,ee),ne.el=Be.el,be===null&&_f(k,Be.el),ue&&tt(ue,Q),(De=ne.props&&ne.props.onVnodeUpdated)&&tt(()=>xt(De,fe,ne,we),Q)}else{let ne;const{el:de,props:ue}=C,{bm:fe,m:we,parent:be,root:De,type:Be}=k,wt=ls(C);ya(k,!1),fe&&yr(fe),!wt&&(ne=ue&&ue.onVnodeBeforeMount)&&xt(ne,be,C),ya(k,!0);{De.ce&&De.ce._def.shadowRoot!==!1&&De.ce._injectChildStyle(Be);const Tt=k.subTree=ci(k);_(null,Tt,D,q,k,Q,ee),C.el=Tt.el}if(we&&tt(we,Q),!wt&&(ne=ue&&ue.onVnodeMounted)){const Tt=C;tt(()=>xt(ne,be,Tt),Q)}(C.shapeFlag&256||be&&ls(be.vnode)&&be.vnode.shapeFlag&256)&&k.a&&tt(k.a,Q),k.isMounted=!0,C=D=q=null}};k.scope.on();const te=k.effect=new jc(W);k.scope.off();const Z=k.update=te.run.bind(te),le=k.job=te.runIfDirty.bind(te);le.i=k,le.id=k.uid,te.scheduler=()=>Mo(le),ya(k,!0),Z()},J=(k,C,D)=>{C.component=k;const q=k.vnode.props;k.vnode=C,k.next=null,Zp(k,C.props,q,D),sf(k,C.children,D),Yt(),Zo(k),Wt()},G=(k,C,D,q,Q,ee,ie,W,te=!1)=>{const Z=k&&k.children,le=k?k.shapeFlag:0,ne=C.children,{patchFlag:de,shapeFlag:ue}=C;if(de>0){if(de&128){j(Z,ne,D,q,Q,ee,ie,W,te);return}else if(de&256){Y(Z,ne,D,q,Q,ee,ie,W,te);return}}ue&8?(le&16&&M(Z,Q,ee),ne!==Z&&d(D,ne)):le&16?ue&16?j(Z,ne,D,q,Q,ee,ie,W,te):M(Z,Q,ee,!0):(le&8&&d(D,""),ue&16&&E(ne,D,q,Q,ee,ie,W,te))},Y=(k,C,D,q,Q,ee,ie,W,te)=>{k=k||ja,C=C||ja;const Z=k.length,le=C.length,ne=Math.min(Z,le);let de;for(de=0;de<ne;de++){const ue=C[de]=te?ra(C[de]):At(C[de]);_(k[de],ue,D,null,Q,ee,ie,W,te)}Z>le?M(k,Q,ee,!0,!1,ne):E(C,D,q,Q,ee,ie,W,te,ne)},j=(k,C,D,q,Q,ee,ie,W,te)=>{let Z=0;const le=C.length;let ne=k.length-1,de=le-1;for(;Z<=ne&&Z<=de;){const ue=k[Z],fe=C[Z]=te?ra(C[Z]):At(C[Z]);if(ka(ue,fe))_(ue,fe,D,null,Q,ee,ie,W,te);else break;Z++}for(;Z<=ne&&Z<=de;){const ue=k[ne],fe=C[de]=te?ra(C[de]):At(C[de]);if(ka(ue,fe))_(ue,fe,D,null,Q,ee,ie,W,te);else break;ne--,de--}if(Z>ne){if(Z<=de){const ue=de+1,fe=ue<le?C[ue].el:q;for(;Z<=de;)_(null,C[Z]=te?ra(C[Z]):At(C[Z]),D,fe,Q,ee,ie,W,te),Z++}}else if(Z>de)for(;Z<=ne;)H(k[Z],Q,ee,!0),Z++;else{const ue=Z,fe=Z,we=new Map;for(Z=fe;Z<=de;Z++){const Ze=C[Z]=te?ra(C[Z]):At(C[Z]);Ze.key!=null&&we.set(Ze.key,Z)}let be,De=0;const Be=de-fe+1;let wt=!1,Tt=0;const Ya=new Array(Be);for(Z=0;Z<Be;Z++)Ya[Z]=0;for(Z=ue;Z<=ne;Z++){const Ze=k[Z];if(De>=Be){H(Ze,Q,ee,!0);continue}let St;if(Ze.key!=null)St=we.get(Ze.key);else for(be=fe;be<=de;be++)if(Ya[be-fe]===0&&ka(Ze,C[be])){St=be;break}St===void 0?H(Ze,Q,ee,!0):(Ya[St-fe]=Z+1,St>=Tt?Tt=St:wt=!0,_(Ze,C[St],D,null,Q,ee,ie,W,te),De++)}const Vo=wt?lf(Ya):ja;for(be=Vo.length-1,Z=Be-1;Z>=0;Z--){const Ze=fe+Z,St=C[Ze],Ko=C[Ze+1],Yo=Ze+1<le?Ko.el||Ko.placeholder:q;Ya[Z]===0?_(null,St,D,Yo,Q,ee,ie,W,te):wt&&(be<0||Z!==Vo[be]?I(St,D,Yo,2):be--)}}},I=(k,C,D,q,Q=null)=>{const{el:ee,type:ie,transition:W,children:te,shapeFlag:Z}=k;if(Z&6){I(k.component.subTree,C,D,q);return}if(Z&128){k.suspense.move(C,D,q);return}if(Z&64){ie.move(k,C,D,se);return}if(ie===Pt){s(ee,C,D);for(let ne=0;ne<te.length;ne++)I(te[ne],C,D,q);s(k.anchor,C,D);return}if(ie===wr){b(k,C,D);return}if(q!==2&&Z&1&&W)if(q===0)W.beforeEnter(ee),s(ee,C,D),tt(()=>W.enter(ee),Q);else{const{leave:ne,delayLeave:de,afterLeave:ue}=W,fe=()=>{k.ctx.isUnmounted?r(ee):s(ee,C,D)},we=()=>{ee._isLeaving&&ee[Ut](!0),ne(ee,()=>{fe(),ue&&ue()})};de?de(ee,fe,we):we()}else s(ee,C,D)},H=(k,C,D,q=!1,Q=!1)=>{const{type:ee,props:ie,ref:W,children:te,dynamicChildren:Z,shapeFlag:le,patchFlag:ne,dirs:de,cacheIndex:ue}=k;if(ne===-2&&(Q=!1),W!=null&&(Yt(),is(W,null,D,k,!0),Wt()),ue!=null&&(C.renderCache[ue]=void 0),le&256){C.ctx.deactivate(k);return}const fe=le&1&&de,we=!ls(k);let be;if(we&&(be=ie&&ie.onVnodeBeforeUnmount)&&xt(be,C,k),le&6)R(k.component,D,q);else{if(le&128){k.suspense.unmount(D,q);return}fe&&_a(k,null,C,"beforeUnmount"),le&64?k.type.remove(k,C,D,se,q):Z&&!Z.hasOnce&&(ee!==Pt||ne>0&&ne&64)?M(Z,C,D,!1,!0):(ee===Pt&&ne&384||!Q&&le&16)&&M(te,C,D),q&&z(k)}(we&&(be=ie&&ie.onVnodeUnmounted)||fe)&&tt(()=>{be&&xt(be,C,k),fe&&_a(k,null,C,"unmounted")},D)},z=k=>{const{type:C,el:D,anchor:q,transition:Q}=k;if(C===Pt){A(D,q);return}if(C===wr){w(k);return}const ee=()=>{r(D),Q&&!Q.persisted&&Q.afterLeave&&Q.afterLeave()};if(k.shapeFlag&1&&Q&&!Q.persisted){const{leave:ie,delayLeave:W}=Q,te=()=>ie(D,ee);W?W(k.el,ee,te):te()}else ee()},A=(k,C)=>{let D;for(;k!==C;)D=p(k),r(k),k=D;r(C)},R=(k,C,D)=>{const{bum:q,scope:Q,job:ee,subTree:ie,um:W,m:te,a:Z}=k;li(te),li(Z),q&&yr(q),Q.stop(),ee&&(ee.flags|=8,H(ie,k,C,D)),W&&tt(W,C),tt(()=>{k.isUnmounted=!0},C)},M=(k,C,D,q=!1,Q=!1,ee=0)=>{for(let ie=ee;ie<k.length;ie++)H(k[ie],C,D,q,Q)},N=k=>{if(k.shapeFlag&6)return N(k.component.subTree);if(k.shapeFlag&128)return k.suspense.next();const C=p(k.anchor||k.el),D=C&&C[kp];return D?p(D):C};let F=!1;const V=(k,C,D)=>{k==null?C._vnode&&H(C._vnode,null,null,!0):_(C._vnode||null,k,C,null,null,null,D),C._vnode=k,F||(F=!0,Zo(),od(),F=!1)},se={p:_,um:H,m:I,r:z,mt:U,mc:E,pc:G,pbc:x,n:N,o:e};return{render:V,hydrate:void 0,createApp:Jp(V)}}function vn({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function ya({effect:e,job:t},a){a?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function of(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function $d(e,t,a=!1){const s=e.children,r=t.children;if(pe(s)&&pe(r))for(let n=0;n<s.length;n++){const o=s[n];let i=r[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=r[n]=ra(r[n]),i.el=o.el),!a&&i.patchFlag!==-2&&$d(o,i)),i.type===tn&&i.patchFlag!==-1&&(i.el=o.el),i.type===st&&!i.el&&(i.el=o.el)}}function lf(e){const t=e.slice(),a=[0];let s,r,n,o,i;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(r=a[a.length-1],e[r]<c){t[s]=r,a.push(s);continue}for(n=0,o=a.length-1;n<o;)i=n+o>>1,e[a[i]]<c?n=i+1:o=i;c<e[a[n]]&&(n>0&&(t[s]=a[n-1]),a[n]=s)}}for(n=a.length,o=a[n-1];n-- >0;)a[n]=o,o=t[o];return a}function Rd(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Rd(t)}function li(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const cf=Symbol.for("v-scx"),df=()=>pt(cf);function ds(e,t,a){return Md(e,t,a)}function Md(e,t,a=ke){const{immediate:s,deep:r,flush:n,once:o}=a,i=Ne({},a),l=t&&s||!t&&n!=="post";let c;if(ys){if(n==="sync"){const f=df();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Ot,f.resume=Ot,f.pause=Ot,f}}const d=He;i.call=(f,g,_)=>_t(f,d,g,_);let u=!1;n==="post"?i.scheduler=f=>{tt(f,d&&d.suspense)}:n!=="sync"&&(u=!0,i.scheduler=(f,g)=>{g?f():Mo(f)}),i.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=wp(e,t,i);return ys&&(c?c.push(p):l&&p()),p}function uf(e,t,a){const s=this.proxy,r=Me(e)?e.includes(".")?Ld(s,e):()=>s[e]:e.bind(s,s);let n;he(t)?n=t:(n=t.handler,a=t);const o=ks(this),i=Md(r,n.bind(s),a);return o(),i}function Ld(e,t){const a=t.split(".");return()=>{let s=e;for(let r=0;r<a.length&&s;r++)s=s[a[r]];return s}}const pf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${ht(t)}Modifiers`]||e[`${fa(t)}Modifiers`];function ff(e,t,...a){if(e.isUnmounted)return;const s=e.vnode.props||ke;let r=a;const n=t.startsWith("update:"),o=n&&pf(s,t.slice(7));o&&(o.trim&&(r=a.map(d=>Me(d)?d.trim():d)),o.number&&(r=a.map(Iu)));let i,l=s[i=fn(t)]||s[i=fn(ht(t))];!l&&n&&(l=s[i=fn(fa(t))]),l&&_t(l,e,6,r);const c=s[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,_t(c,e,6,r)}}const hf=new WeakMap;function Nd(e,t,a=!1){const s=a?hf:t.emitsCache,r=s.get(e);if(r!==void 0)return r;const n=e.emits;let o={},i=!1;if(!he(e)){const l=c=>{const d=Nd(c,t,!0);d&&(i=!0,Ne(o,d))};!a&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!n&&!i?(Pe(e)&&s.set(e,null),null):(pe(n)?n.forEach(l=>o[l]=null):Ne(o,n),Pe(e)&&s.set(e,o),o)}function en(e,t){return!e||!qr(t)?!1:(t=t.slice(2).replace(/Once$/,""),Se(e,t[0].toLowerCase()+t.slice(1))||Se(e,fa(t))||Se(e,t))}function ci(e){const{type:t,vnode:a,proxy:s,withProxy:r,propsOptions:[n],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:g,inheritAttrs:_}=e,y=Ar(e);let m,h;try{if(a.shapeFlag&4){const w=r||s,v=w;m=At(c.call(v,w,d,u,f,p,g)),h=i}else{const w=t;m=At(w.length>1?w(u,{attrs:i,slots:o,emit:l}):w(u,null)),h=t.props?i:mf(i)}}catch(w){us.length=0,Jr(w,e,1),m=Je(st)}let b=m;if(h&&_!==!1){const w=Object.keys(h),{shapeFlag:v}=b;w.length&&v&7&&(n&&w.some(yo)&&(h=gf(h,n)),b=ua(b,h,!1,!0))}return a.dirs&&(b=ua(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(a.dirs):a.dirs),a.transition&&bs(b,a.transition),m=b,Ar(y),m}const mf=e=>{let t;for(const a in e)(a==="class"||a==="style"||qr(a))&&((t||(t={}))[a]=e[a]);return t},gf=(e,t)=>{const a={};for(const s in e)(!yo(s)||!(s.slice(9)in t))&&(a[s]=e[s]);return a};function bf(e,t,a){const{props:s,children:r,component:n}=e,{props:o,children:i,patchFlag:l}=t,c=n.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return s?di(s,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==s[p]&&!en(c,p))return!0}}}else return(r||i)&&(!i||!i.$stable)?!0:s===o?!1:s?o?di(s,o,c):!0:!!o;return!1}function di(e,t,a){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const n=s[r];if(t[n]!==e[n]&&!en(a,n))return!0}return!1}function _f({vnode:e,parent:t},a){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=a,t=t.parent;else break}}const Dd=e=>e.__isSuspense;function yf(e,t){t&&t.pendingBranch?pe(e)?t.effects.push(...e):t.effects.push(e):xp(e)}const Pt=Symbol.for("v-fgt"),tn=Symbol.for("v-txt"),st=Symbol.for("v-cmt"),wr=Symbol.for("v-stc"),us=[];let it=null;function Xe(e=!1){us.push(it=e?null:[])}function vf(){us.pop(),it=us[us.length-1]||null}let _s=1;function $r(e,t=!1){_s+=e,e<0&&it&&t&&(it.hasOnce=!0)}function Id(e){return e.dynamicChildren=_s>0?it||ja:null,vf(),_s>0&&it&&it.push(e),e}function ft(e,t,a,s,r,n){return Id(ae(e,t,a,s,r,n,!0))}function ui(e,t,a,s,r){return Id(Je(e,t,a,s,r,!0))}function Rr(e){return e?e.__v_isVNode===!0:!1}function ka(e,t){return e.type===t.type&&e.key===t.key}const Bd=({key:e})=>e??null,Tr=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Me(e)||Re(e)||he(e)?{i:ot,r:e,k:t,f:!!a}:e:null);function ae(e,t=null,a=null,s=0,r=null,n=e===Pt?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Bd(t),ref:t&&Tr(t),scopeId:ld,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ot};return i?(Do(l,a),n&128&&e.normalize(l)):a&&(l.shapeFlag|=Me(a)?8:16),_s>0&&!o&&it&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&it.push(l),l}const Je=wf;function wf(e,t=null,a=null,s=0,r=null,n=!1){if((!e||e===yd)&&(e=st),Rr(e)){const i=ua(e,t,!0);return a&&Do(i,a),_s>0&&!n&&it&&(i.shapeFlag&6?it[it.indexOf(e)]=i:it.push(i)),i.patchFlag=-2,i}if(Rf(e)&&(e=e.__vccOpts),t){t=Tf(t);let{class:i,style:l}=t;i&&!Me(i)&&(t.class=da(i)),Pe(l)&&(Oo(l)&&!pe(l)&&(l=Ne({},l)),t.style=To(l))}const o=Me(e)?1:Dd(e)?128:cd(e)?64:Pe(e)?4:he(e)?2:0;return ae(e,t,a,s,r,o,n,!0)}function Tf(e){return e?Oo(e)||Ed(e)?Ne({},e):e:null}function ua(e,t,a=!1,s=!1){const{props:r,ref:n,patchFlag:o,children:i,transition:l}=e,c=t?Sf(r||{},t):r,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Bd(c),ref:t&&t.ref?a&&n?pe(n)?n.concat(Tr(t)):[n,Tr(t)]:Tr(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ua(e.ssContent),ssFallback:e.ssFallback&&ua(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&bs(d,l.clone(d)),d}function qa(e=" ",t=0){return Je(tn,null,e,t)}function ha(e,t){const a=Je(wr,null,e);return a.staticCount=t,a}function At(e){return e==null||typeof e=="boolean"?Je(st):pe(e)?Je(Pt,null,e.slice()):Rr(e)?ra(e):Je(tn,null,String(e))}function ra(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ua(e)}function Do(e,t){let a=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(pe(t))a=16;else if(typeof t=="object")if(s&65){const r=t.default;r&&(r._c&&(r._d=!1),Do(e,r()),r._c&&(r._d=!0));return}else{a=32;const r=t._;!r&&!Ed(t)?t._ctx=ot:r===3&&ot&&(ot.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:ot},a=32):(t=String(t),s&64?(a=16,t=[qa(t)]):a=8);e.children=t,e.shapeFlag|=a}function Sf(...e){const t={};for(let a=0;a<e.length;a++){const s=e[a];for(const r in s)if(r==="class")t.class!==s.class&&(t.class=da([t.class,s.class]));else if(r==="style")t.style=To([t.style,s.style]);else if(qr(r)){const n=t[r],o=s[r];o&&n!==o&&!(pe(n)&&n.includes(o))&&(t[r]=n?[].concat(n,o):o)}else r!==""&&(t[r]=s[r])}return t}function xt(e,t,a,s=null){_t(e,t,7,[a,s])}const xf=Td();let Ef=0;function kf(e,t,a){const s=e.type,r=(t?t.appContext:e.appContext)||xf,n={uid:Ef++,vnode:e,type:s,parent:t,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(r.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pd(s,r),emitsOptions:Nd(s,r),emit:null,emitted:null,propsDefaults:ke,inheritAttrs:s.inheritAttrs,ctx:ke,data:ke,props:ke,attrs:ke,slots:ke,refs:ke,setupState:ke,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=ff.bind(null,n),e.ce&&e.ce(n),n}let He=null;const Io=()=>He||ot;let Mr,io;{const e=Yr(),t=(a,s)=>{let r;return(r=e[a])||(r=e[a]=[]),r.push(s),n=>{r.length>1?r.forEach(o=>o(n)):r[0](n)}};Mr=t("__VUE_INSTANCE_SETTERS__",a=>He=a),io=t("__VUE_SSR_SETTERS__",a=>ys=a)}const ks=e=>{const t=He;return Mr(e),e.scope.on(),()=>{e.scope.off(),Mr(t)}},pi=()=>{He&&He.scope.off(),Mr(null)};function Fd(e){return e.vnode.shapeFlag&4}let ys=!1;function Pf(e,t=!1,a=!1){t&&io(t);const{props:s,children:r}=e.vnode,n=Fd(e);Qp(e,s,n,t),af(e,r,a||t);const o=n?Af(e,t):void 0;return t&&io(!1),o}function Af(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Up);const{setup:s}=a;if(s){Yt();const r=e.setupContext=s.length>1?Of(e):null,n=ks(e),o=Es(s,e,0,[e.props,r]),i=Cc(o);if(Wt(),n(),(i||e.sp)&&!ls(e)&&gd(e),i){if(o.then(pi,pi),t)return o.then(l=>{fi(e,l)}).catch(l=>{Jr(l,e,0)});e.asyncDep=o}else fi(e,o)}else zd(e)}function fi(e,t,a){he(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Pe(t)&&(e.setupState=sd(t)),zd(e)}function zd(e,t,a){const s=e.type;e.render||(e.render=s.render||Ot);{const r=ks(e);Yt();try{qp(e)}finally{Wt(),r()}}}const Cf={get(e,t){return je(e,"get",""),e[t]}};function Of(e){const t=a=>{e.exposed=a||{}};return{attrs:new Proxy(e.attrs,Cf),slots:e.slots,emit:e.emit,expose:t}}function an(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(sd($o(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in cs)return cs[a](e)},has(t,a){return a in t||a in cs}})):e.proxy}function $f(e,t=!0){return he(e)?e.displayName||e.name:e.name||t&&e.__name}function Rf(e){return he(e)&&"__vccOpts"in e}const rt=(e,t)=>yp(e,t,ys);function Bo(e,t,a){try{$r(-1);const s=arguments.length;return s===2?Pe(t)&&!pe(t)?Rr(t)?Je(e,null,[t]):Je(e,t):Je(e,null,t):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&Rr(a)&&(a=[a]),Je(e,t,a))}finally{$r(1)}}const Mf="3.5.24";let lo;const hi=typeof window<"u"&&window.trustedTypes;if(hi)try{lo=hi.createPolicy("vue",{createHTML:e=>e})}catch{}const jd=lo?e=>lo.createHTML(e):e=>e,Lf="http://www.w3.org/2000/svg",Nf="http://www.w3.org/1998/Math/MathML",jt=typeof document<"u"?document:null,mi=jt&&jt.createElement("template"),Df={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,s)=>{const r=t==="svg"?jt.createElementNS(Lf,e):t==="mathml"?jt.createElementNS(Nf,e):a?jt.createElement(e,{is:a}):jt.createElement(e);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>jt.createTextNode(e),createComment:e=>jt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,s,r,n){const o=a?a.previousSibling:t.lastChild;if(r&&(r===n||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),a),!(r===n||!(r=r.nextSibling)););else{mi.innerHTML=jd(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const i=mi.content;if(s==="svg"||s==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,a)}return[o?o.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},Zt="transition",Ja="animation",vs=Symbol("_vtc"),Hd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},If=Ne({},dd,Hd),Bf=e=>(e.displayName="Transition",e.props=If,e),Ff=Bf((e,{slots:t})=>Bo(Cp,zf(e),t)),va=(e,t=[])=>{pe(e)?e.forEach(a=>a(...t)):e&&e(...t)},gi=e=>e?pe(e)?e.some(t=>t.length>1):e.length>1:!1;function zf(e){const t={};for(const $ in e)$ in Hd||(t[$]=e[$]);if(e.css===!1)return t;const{name:a="v",type:s,duration:r,enterFromClass:n=`${a}-enter-from`,enterActiveClass:o=`${a}-enter-active`,enterToClass:i=`${a}-enter-to`,appearFromClass:l=n,appearActiveClass:c=o,appearToClass:d=i,leaveFromClass:u=`${a}-leave-from`,leaveActiveClass:p=`${a}-leave-active`,leaveToClass:f=`${a}-leave-to`}=e,g=jf(r),_=g&&g[0],y=g&&g[1],{onBeforeEnter:m,onEnter:h,onEnterCancelled:b,onLeave:w,onLeaveCancelled:v,onBeforeAppear:S=m,onAppear:P=h,onAppearCancelled:E=b}=t,T=($,L,U,K)=>{$._enterCancelled=K,wa($,L?d:i),wa($,L?c:o),U&&U()},x=($,L)=>{$._isLeaving=!1,wa($,u),wa($,f),wa($,p),L&&L()},O=$=>(L,U)=>{const K=$?P:h,re=()=>T(L,$,U);va(K,[L,re]),bi(()=>{wa(L,$?l:n),Nt(L,$?d:i),gi(K)||_i(L,s,_,re)})};return Ne(t,{onBeforeEnter($){va(m,[$]),Nt($,n),Nt($,o)},onBeforeAppear($){va(S,[$]),Nt($,l),Nt($,c)},onEnter:O(!1),onAppear:O(!0),onLeave($,L){$._isLeaving=!0;const U=()=>x($,L);Nt($,u),$._enterCancelled?(Nt($,p),wi($)):(wi($),Nt($,p)),bi(()=>{$._isLeaving&&(wa($,u),Nt($,f),gi(w)||_i($,s,y,U))}),va(w,[$,U])},onEnterCancelled($){T($,!1,void 0,!0),va(b,[$])},onAppearCancelled($){T($,!0,void 0,!0),va(E,[$])},onLeaveCancelled($){x($),va(v,[$])}})}function jf(e){if(e==null)return null;if(Pe(e))return[wn(e.enter),wn(e.leave)];{const t=wn(e);return[t,t]}}function wn(e){return Bu(e)}function Nt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[vs]||(e[vs]=new Set)).add(t)}function wa(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const a=e[vs];a&&(a.delete(t),a.size||(e[vs]=void 0))}function bi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Hf=0;function _i(e,t,a,s){const r=e._endId=++Hf,n=()=>{r===e._endId&&s()};if(a!=null)return setTimeout(n,a);const{type:o,timeout:i,propCount:l}=Uf(e,t);if(!o)return s();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),n()},p=f=>{f.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},i+1),e.addEventListener(c,p)}function Uf(e,t){const a=window.getComputedStyle(e),s=g=>(a[g]||"").split(", "),r=s(`${Zt}Delay`),n=s(`${Zt}Duration`),o=yi(r,n),i=s(`${Ja}Delay`),l=s(`${Ja}Duration`),c=yi(i,l);let d=null,u=0,p=0;t===Zt?o>0&&(d=Zt,u=o,p=n.length):t===Ja?c>0&&(d=Ja,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?Zt:Ja:null,p=d?d===Zt?n.length:l.length:0);const f=d===Zt&&/\b(?:transform|all)(?:,|$)/.test(s(`${Zt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function yi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,s)=>vi(a)+vi(e[s])))}function vi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function wi(e){return(e?e.ownerDocument:document).body.offsetHeight}function qf(e,t,a){const s=e[vs];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const Ti=Symbol("_vod"),Gf=Symbol("_vsh"),Vf=Symbol(""),Kf=/(?:^|;)\s*display\s*:/;function Yf(e,t,a){const s=e.style,r=Me(a);let n=!1;if(a&&!r){if(t)if(Me(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();a[i]==null&&Sr(s,i,"")}else for(const o in t)a[o]==null&&Sr(s,o,"");for(const o in a)o==="display"&&(n=!0),Sr(s,o,a[o])}else if(r){if(t!==a){const o=s[Vf];o&&(a+=";"+o),s.cssText=a,n=Kf.test(a)}}else t&&e.removeAttribute("style");Ti in e&&(e[Ti]=n?s.display:"",e[Gf]&&(s.display="none"))}const Si=/\s*!important$/;function Sr(e,t,a){if(pe(a))a.forEach(s=>Sr(e,t,s));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const s=Wf(e,t);Si.test(a)?e.setProperty(fa(s),a.replace(Si,""),"important"):e[s]=a}}const xi=["Webkit","Moz","ms"],Tn={};function Wf(e,t){const a=Tn[t];if(a)return a;let s=ht(t);if(s!=="filter"&&s in e)return Tn[t]=s;s=Kr(s);for(let r=0;r<xi.length;r++){const n=xi[r]+s;if(n in e)return Tn[t]=n}return t}const Ei="http://www.w3.org/1999/xlink";function ki(e,t,a,s,r,n=qu(t)){s&&t.startsWith("xlink:")?a==null?e.removeAttributeNS(Ei,t.slice(6,t.length)):e.setAttributeNS(Ei,t,a):a==null||n&&!Mc(a)?e.removeAttribute(t):e.setAttribute(t,n?"":Rt(a)?String(a):a)}function Pi(e,t,a,s,r){if(t==="innerHTML"||t==="textContent"){a!=null&&(e[t]=t==="innerHTML"?jd(a):a);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const i=n==="OPTION"?e.getAttribute("value")||"":e.value,l=a==null?e.type==="checkbox"?"on":"":String(a);(i!==l||!("_value"in e))&&(e.value=l),a==null&&e.removeAttribute(t),e._value=a;return}let o=!1;if(a===""||a==null){const i=typeof e[t];i==="boolean"?a=Mc(a):a==null&&i==="string"?(a="",o=!0):i==="number"&&(a=0,o=!0)}try{e[t]=a}catch{}o&&e.removeAttribute(r||t)}function Ud(e,t,a,s){e.addEventListener(t,a,s)}function Jf(e,t,a,s){e.removeEventListener(t,a,s)}const Ai=Symbol("_vei");function Xf(e,t,a,s,r=null){const n=e[Ai]||(e[Ai]={}),o=n[t];if(s&&o)o.value=s;else{const[i,l]=Qf(t);if(s){const c=n[t]=th(s,r);Ud(e,i,c,l)}else o&&(Jf(e,i,o,l),n[t]=void 0)}}const Ci=/(?:Once|Passive|Capture)$/;function Qf(e){let t;if(Ci.test(e)){t={};let s;for(;s=e.match(Ci);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fa(e.slice(2)),t]}let Sn=0;const Zf=Promise.resolve(),eh=()=>Sn||(Zf.then(()=>Sn=0),Sn=Date.now());function th(e,t){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;_t(ah(s,a.value),t,5,[s])};return a.value=e,a.attached=eh(),a}function ah(e,t){if(pe(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(s=>r=>!r._stopped&&s&&s(r))}else return t}const Oi=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sh=(e,t,a,s,r,n)=>{const o=r==="svg";t==="class"?qf(e,s,o):t==="style"?Yf(e,a,s):qr(t)?yo(t)||Xf(e,t,a,s,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):rh(e,t,s,o))?(Pi(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&ki(e,t,s,o,n,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Me(s))?Pi(e,ht(t),s,n,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),ki(e,t,s,o))};function rh(e,t,a,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Oi(t)&&he(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Oi(t)&&Me(a)?!1:t in e}const $i=e=>{const t=e.props["onUpdate:modelValue"]||!1;return pe(t)?a=>yr(t,a):t},xn=Symbol("_assign"),nh={deep:!0,created(e,t,a){e[xn]=$i(a),Ud(e,"change",()=>{const s=e._modelValue,r=oh(e),n=e.checked,o=e[xn];if(pe(s)){const i=Lc(s,r),l=i!==-1;if(n&&!l)o(s.concat(r));else if(!n&&l){const c=[...s];c.splice(i,1),o(c)}}else if(Gr(s)){const i=new Set(s);n?i.add(r):i.delete(r),o(i)}else o(qd(e,n))})},mounted:Ri,beforeUpdate(e,t,a){e[xn]=$i(a),Ri(e,t,a)}};function Ri(e,{value:t,oldValue:a},s){e._modelValue=t;let r;if(pe(t))r=Lc(t,s.props.value)>-1;else if(Gr(t))r=t.has(s.props.value);else{if(t===a)return;r=Wr(t,qd(e,!0))}e.checked!==r&&(e.checked=r)}function oh(e){return"_value"in e?e._value:e.value}function qd(e,t){const a=t?"_trueValue":"_falseValue";return a in e?e[a]:t}const ih=["ctrl","shift","alt","meta"],lh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ih.some(a=>e[`${a}Key`]&&!t.includes(a))},sn=(e,t)=>{const a=e._withMods||(e._withMods={}),s=t.join(".");return a[s]||(a[s]=((r,...n)=>{for(let o=0;o<t.length;o++){const i=lh[t[o]];if(i&&i(r,t))return}return e(r,...n)}))},ch={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qt=(e,t)=>{const a=e._withKeys||(e._withKeys={}),s=t.join(".");return a[s]||(a[s]=(r=>{if(!("key"in r))return;const n=fa(r.key);if(t.some(o=>o===n||ch[o]===n))return e(r)}))},dh=Ne({patchProp:sh},Df);let Mi;function uh(){return Mi||(Mi=rf(dh))}const ph=((...e)=>{const t=uh().createApp(...e),{mount:a}=t;return t.mount=s=>{const r=hh(s);if(!r)return;const n=t._component;!he(n)&&!n.render&&!n.template&&(n.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=a(r,!1,fh(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t});function fh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hh(e){return Me(e)?document.querySelector(e):e}let Gd;const rn=e=>Gd=e,Vd=Symbol();function co(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ps;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ps||(ps={}));function mh(){const e=Fc(!0),t=e.run(()=>lt({}));let a=[],s=[];const r=$o({install(n){rn(r),r._a=n,n.provide(Vd,r),n.config.globalProperties.$pinia=r,s.forEach(o=>a.push(o)),s=[]},use(n){return this._a?a.push(n):s.push(n),this},_p:a,_a:null,_e:e,_s:new Map,state:t});return r}const Kd=()=>{};function Li(e,t,a,s=Kd){e.add(t);const r=()=>{e.delete(t)&&s()};return!a&&zc()&&Vu(r),r}function La(e,...t){e.forEach(a=>{a(...t)})}const gh=e=>e(),Ni=Symbol(),En=Symbol();function uo(e,t){e instanceof Map&&t instanceof Map?t.forEach((a,s)=>e.set(s,a)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const a in t){if(!t.hasOwnProperty(a))continue;const s=t[a],r=e[a];co(r)&&co(s)&&e.hasOwnProperty(a)&&!Re(s)&&!Oa(s)?e[a]=uo(r,s):e[a]=s}return e}const bh=Symbol();function _h(e){return!co(e)||!Object.prototype.hasOwnProperty.call(e,bh)}const{assign:aa}=Object;function yh(e){return!!(Re(e)&&e.effect)}function vh(e,t,a,s){const{state:r,actions:n,getters:o}=t,i=a.state.value[e];let l;function c(){i||(a.state.value[e]=r?r():{});const d=mp(a.state.value[e]);return aa(d,n,Object.keys(o||{}).reduce((u,p)=>(u[p]=$o(rt(()=>{rn(a);const f=a._s.get(e);return o[p].call(f,f)})),u),{}))}return l=Yd(e,c,t,a,s,!0),l}function Yd(e,t,a={},s,r,n){let o;const i=aa({actions:{}},a),l={deep:!0};let c,d,u=new Set,p=new Set,f;const g=s.state.value[e];!n&&!g&&(s.state.value[e]={}),lt({});let _;function y(E){let T;c=d=!1,typeof E=="function"?(E(s.state.value[e]),T={type:ps.patchFunction,storeId:e,events:f}):(uo(s.state.value[e],E),T={type:ps.patchObject,payload:E,storeId:e,events:f});const x=_=Symbol();Ro().then(()=>{_===x&&(c=!0)}),d=!0,La(u,T,s.state.value[e])}const m=n?function(){const{state:T}=a,x=T?T():{};this.$patch(O=>{aa(O,x)})}:Kd;function h(){o.stop(),u.clear(),p.clear(),s._s.delete(e)}const b=(E,T="")=>{if(Ni in E)return E[En]=T,E;const x=function(){rn(s);const O=Array.from(arguments),$=new Set,L=new Set;function U(J){$.add(J)}function K(J){L.add(J)}La(p,{args:O,name:x[En],store:v,after:U,onError:K});let re;try{re=E.apply(this&&this.$id===e?this:v,O)}catch(J){throw La(L,J),J}return re instanceof Promise?re.then(J=>(La($,J),J)).catch(J=>(La(L,J),Promise.reject(J))):(La($,re),re)};return x[Ni]=!0,x[En]=T,x},w={_p:s,$id:e,$onAction:Li.bind(null,p),$patch:y,$reset:m,$subscribe(E,T={}){const x=Li(u,E,T.detached,()=>O()),O=o.run(()=>ds(()=>s.state.value[e],$=>{(T.flush==="sync"?d:c)&&E({storeId:e,type:ps.direct,events:f},$)},aa({},l,T)));return x},$dispose:h},v=Kt(w);s._s.set(e,v);const P=(s._a&&s._a.runWithContext||gh)(()=>s._e.run(()=>(o=Fc()).run(()=>t({action:b}))));for(const E in P){const T=P[E];if(Re(T)&&!yh(T)||Oa(T))n||(g&&_h(T)&&(Re(T)?T.value=g[E]:uo(T,g[E])),s.state.value[e][E]=T);else if(typeof T=="function"){const x=b(T,E);P[E]=x,i.actions[E]=T}}return aa(v,P),aa(ye(v),P),Object.defineProperty(v,"$state",{get:()=>s.state.value[e],set:E=>{y(T=>{aa(T,E)})}}),s._p.forEach(E=>{aa(v,o.run(()=>E({store:v,app:s._a,pinia:s,options:i})))}),g&&n&&a.hydrate&&a.hydrate(v.$state,g),c=!0,d=!0,v}function wh(e,t,a){let s;const r=typeof t=="function";s=r?a:t;function n(o,i){const l=Xp();return o=o||(l?pt(Vd,null):null),o&&rn(o),o=Gd,o._s.has(e)||(r?Yd(e,t,s,o):vh(e,s,o)),o._s.get(e)}return n.$id=e,n}const za=typeof document<"u";function Wd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Th(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Wd(e.default)}const Te=Object.assign;function kn(e,t){const a={};for(const s in t){const r=t[s];a[s]=yt(r)?r.map(e):e(r)}return a}const fs=()=>{},yt=Array.isArray;function Di(e,t){const a={};for(const s in e)a[s]=s in t?t[s]:e[s];return a}const Jd=/#/g,Sh=/&/g,xh=/\//g,Eh=/=/g,kh=/\?/g,Xd=/\+/g,Ph=/%5B/g,Ah=/%5D/g,Qd=/%5E/g,Ch=/%60/g,Zd=/%7B/g,Oh=/%7C/g,eu=/%7D/g,$h=/%20/g;function Fo(e){return e==null?"":encodeURI(""+e).replace(Oh,"|").replace(Ph,"[").replace(Ah,"]")}function Rh(e){return Fo(e).replace(Zd,"{").replace(eu,"}").replace(Qd,"^")}function po(e){return Fo(e).replace(Xd,"%2B").replace($h,"+").replace(Jd,"%23").replace(Sh,"%26").replace(Ch,"`").replace(Zd,"{").replace(eu,"}").replace(Qd,"^")}function Mh(e){return po(e).replace(Eh,"%3D")}function Lh(e){return Fo(e).replace(Jd,"%23").replace(kh,"%3F")}function Nh(e){return Lh(e).replace(xh,"%2F")}function ws(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Dh=/\/$/,Ih=e=>e.replace(Dh,"");function Pn(e,t,a="/"){let s,r={},n="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(s=t.slice(0,l),n=t.slice(l,i>0?i:t.length),r=e(n.slice(1))),i>=0&&(s=s||t.slice(0,i),o=t.slice(i,t.length)),s=jh(s??t,a),{fullPath:s+n+o,path:s,query:r,hash:ws(o)}}function Bh(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function Ii(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Fh(e,t,a){const s=t.matched.length-1,r=a.matched.length-1;return s>-1&&s===r&&Ga(t.matched[s],a.matched[r])&&tu(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function Ga(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function tu(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!zh(e[a],t[a]))return!1;return!0}function zh(e,t){return yt(e)?Bi(e,t):yt(t)?Bi(t,e):e===t}function Bi(e,t){return yt(t)?e.length===t.length&&e.every((a,s)=>a===t[s]):e.length===1&&e[0]===t}function jh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),s=e.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let n=a.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")n>1&&n--;else break;return a.slice(0,n).join("/")+"/"+s.slice(o).join("/")}const ea={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let fo=(function(e){return e.pop="pop",e.push="push",e})({}),An=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Hh(e){if(!e)if(za){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Ih(e)}const Uh=/^[^#]+#/;function qh(e,t){return e.replace(Uh,"#")+t}function Gh(e,t){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-a.left-(t.left||0),top:s.top-a.top-(t.top||0)}}const nn=()=>({left:window.scrollX,top:window.scrollY});function Vh(e){let t;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),r=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!r)return;t=Gh(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function Fi(e,t){return(history.state?history.state.position-t:-1)+e}const ho=new Map;function Kh(e,t){ho.set(e,t)}function Yh(e){const t=ho.get(e);return ho.delete(e),t}function Wh(e){return typeof e=="string"||e&&typeof e=="object"}function au(e){return typeof e=="string"||typeof e=="symbol"}let Oe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const su=Symbol("");Oe.MATCHER_NOT_FOUND+"",Oe.NAVIGATION_GUARD_REDIRECT+"",Oe.NAVIGATION_ABORTED+"",Oe.NAVIGATION_CANCELLED+"",Oe.NAVIGATION_DUPLICATED+"";function Va(e,t){return Te(new Error,{type:e,[su]:!0},t)}function Dt(e,t){return e instanceof Error&&su in e&&(t==null||!!(e.type&t))}const Jh=["params","query","hash"];function Xh(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const a of Jh)a in e&&(t[a]=e[a]);return JSON.stringify(t,null,2)}function Qh(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<a.length;++s){const r=a[s].replace(Xd," "),n=r.indexOf("="),o=ws(n<0?r:r.slice(0,n)),i=n<0?null:ws(r.slice(n+1));if(o in t){let l=t[o];yt(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function zi(e){let t="";for(let a in e){const s=e[a];if(a=Mh(a),s==null){s!==void 0&&(t+=(t.length?"&":"")+a);continue}(yt(s)?s.map(r=>r&&po(r)):[s&&po(s)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+a,r!=null&&(t+="="+r))})}return t}function Zh(e){const t={};for(const a in e){const s=e[a];s!==void 0&&(t[a]=yt(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const em=Symbol(""),ji=Symbol(""),on=Symbol(""),zo=Symbol(""),mo=Symbol("");function Xa(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function a(){e=[]}return{add:t,list:()=>e.slice(),reset:a}}function na(e,t,a,s,r,n=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Va(Oe.NAVIGATION_ABORTED,{from:a,to:t})):p instanceof Error?l(p):Wh(p)?l(Va(Oe.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),i())},d=n(()=>e.call(s&&s.instances[r],t,a,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function Cn(e,t,a,s,r=n=>n()){const n=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(Wd(l)){const c=(l.__vccOpts||l)[t];c&&n.push(na(c,a,s,o,i,r))}else{let c=l();n.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=Th(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&na(p,a,s,o,i,r)()}))}}return n}function tm(e,t){const a=[],s=[],r=[],n=Math.max(t.matched.length,e.matched.length);for(let o=0;o<n;o++){const i=t.matched[o];i&&(e.matched.find(c=>Ga(c,i))?s.push(i):a.push(i));const l=e.matched[o];l&&(t.matched.find(c=>Ga(c,l))||r.push(l))}return[a,s,r]}let am=()=>location.protocol+"//"+location.host;function ru(e,t){const{pathname:a,search:s,hash:r}=t,n=e.indexOf("#");if(n>-1){let o=r.includes(e.slice(n))?e.slice(n).length:1,i=r.slice(o);return i[0]!=="/"&&(i="/"+i),Ii(i,"")}return Ii(a,e)+s+r}function sm(e,t,a,s){let r=[],n=[],o=null;const i=({state:p})=>{const f=ru(e,location),g=a.value,_=t.value;let y=0;if(p){if(a.value=f,t.value=p,o&&o===g){o=null;return}y=_?p.position-_.position:0}else s(f);r.forEach(m=>{m(a.value,g,{delta:y,type:fo.pop,direction:y?y>0?An.forward:An.back:An.unknown})})};function l(){o=a.value}function c(p){r.push(p);const f=()=>{const g=r.indexOf(p);g>-1&&r.splice(g,1)};return n.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Te({},p.state,{scroll:nn()}),"")}}function u(){for(const p of n)p();n=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function Hi(e,t,a,s=!1,r=!1){return{back:e,current:t,forward:a,replaced:s,position:window.history.length,scroll:r?nn():null}}function rm(e){const{history:t,location:a}=window,s={value:ru(e,a)},r={value:t.state};r.value||n(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function n(l,c,d){const u=e.indexOf("#"),p=u>-1?(a.host&&document.querySelector("base")?e:e.slice(u))+l:am()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),r.value=c}catch(f){console.error(f),a[d?"replace":"assign"](p)}}function o(l,c){n(l,Te({},t.state,Hi(r.value.back,l,r.value.forward,!0),c,{position:r.value.position}),!0),s.value=l}function i(l,c){const d=Te({},r.value,t.state,{forward:l,scroll:nn()});n(d.current,d,!0),n(l,Te({},Hi(s.value,l,null),{position:d.position+1},c),!1),s.value=l}return{location:s,state:r,push:i,replace:o}}function nm(e){e=Hh(e);const t=rm(e),a=sm(e,t.state,t.location,t.replace);function s(n,o=!0){o||a.pauseListeners(),history.go(n)}const r=Te({location:"",base:e,go:s,createHref:qh.bind(null,e)},t,a);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function om(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),nm(e)}let Aa=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Le=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Le||{});const im={type:Aa.Static,value:""},lm=/[a-zA-Z0-9_]/;function cm(e){if(!e)return[[]];if(e==="/")return[[im]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${a})/"${c}": ${f}`)}let a=Le.Static,s=a;const r=[];let n;function o(){n&&r.push(n),n=[]}let i=0,l,c="",d="";function u(){c&&(a===Le.Static?n.push({type:Aa.Static,value:c}):a===Le.Param||a===Le.ParamRegExp||a===Le.ParamRegExpEnd?(n.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),n.push({type:Aa.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&a!==Le.ParamRegExp){s=a,a=Le.EscapeNext;continue}switch(a){case Le.Static:l==="/"?(c&&u(),o()):l===":"?(u(),a=Le.Param):p();break;case Le.EscapeNext:p(),a=s;break;case Le.Param:l==="("?a=Le.ParamRegExp:lm.test(l)?p():(u(),a=Le.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Le.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:a=Le.ParamRegExpEnd:d+=l;break;case Le.ParamRegExpEnd:u(),a=Le.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return a===Le.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),r}const Ui="[^/]+?",dm={sensitive:!1,strict:!1,start:!0,end:!0};var Ge=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ge||{});const um=/[.+*?^${}()[\]/\\]/g;function pm(e,t){const a=Te({},dm,t),s=[];let r=a.start?"^":"";const n=[];for(const c of e){const d=c.length?[]:[Ge.Root];a.strict&&!c.length&&(r+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=Ge.Segment+(a.sensitive?Ge.BonusCaseSensitive:0);if(p.type===Aa.Static)u||(r+="/"),r+=p.value.replace(um,"\\$&"),f+=Ge.Static;else if(p.type===Aa.Param){const{value:g,repeatable:_,optional:y,regexp:m}=p;n.push({name:g,repeatable:_,optional:y});const h=m||Ui;if(h!==Ui){f+=Ge.BonusCustomRegExp;try{`${h}`}catch(w){throw new Error(`Invalid custom RegExp for param "${g}" (${h}): `+w.message)}}let b=_?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;u||(b=y&&c.length<2?`(?:/${b})`:"/"+b),y&&(b+="?"),r+=b,f+=Ge.Dynamic,y&&(f+=Ge.BonusOptional),_&&(f+=Ge.BonusRepeatable),h===".*"&&(f+=Ge.BonusWildcard)}d.push(f)}s.push(d)}if(a.strict&&a.end){const c=s.length-1;s[c][s[c].length-1]+=Ge.BonusStrict}a.strict||(r+="/?"),a.end?r+="$":a.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,a.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",g=n[p-1];u[g.name]=f&&g.repeatable?f.split("/"):f}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===Aa.Static)d+=f.value;else if(f.type===Aa.Param){const{value:g,repeatable:_,optional:y}=f,m=g in c?c[g]:"";if(yt(m)&&!_)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const h=yt(m)?m.join("/"):m;if(!h)if(y)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${g}"`);d+=h}}return d||"/"}return{re:o,score:s,keys:n,parse:i,stringify:l}}function fm(e,t){let a=0;for(;a<e.length&&a<t.length;){const s=t[a]-e[a];if(s)return s;a++}return e.length<t.length?e.length===1&&e[0]===Ge.Static+Ge.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ge.Static+Ge.Segment?1:-1:0}function nu(e,t){let a=0;const s=e.score,r=t.score;for(;a<s.length&&a<r.length;){const n=fm(s[a],r[a]);if(n)return n;a++}if(Math.abs(r.length-s.length)===1){if(qi(s))return 1;if(qi(r))return-1}return r.length-s.length}function qi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hm={strict:!1,end:!0,sensitive:!1};function mm(e,t,a){const s=pm(cm(e.path),a),r=Te(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function gm(e,t){const a=[],s=new Map;t=Di(hm,t);function r(u){return s.get(u)}function n(u,p,f){const g=!f,_=Vi(u);_.aliasOf=f&&f.record;const y=Di(t,u),m=[_];if("alias"in u){const w=typeof u.alias=="string"?[u.alias]:u.alias;for(const v of w)m.push(Vi(Te({},_,{components:f?f.record.components:_.components,path:v,aliasOf:f?f.record:_})))}let h,b;for(const w of m){const{path:v}=w;if(p&&v[0]!=="/"){const S=p.record.path,P=S[S.length-1]==="/"?"":"/";w.path=p.record.path+(v&&P+v)}if(h=mm(w,p,y),f?f.alias.push(h):(b=b||h,b!==h&&b.alias.push(h),g&&u.name&&!Ki(h)&&o(u.name)),ou(h)&&l(h),_.children){const S=_.children;for(let P=0;P<S.length;P++)n(S[P],h,f&&f.children[P])}f=f||h}return b?()=>{o(b)}:fs}function o(u){if(au(u)){const p=s.get(u);p&&(s.delete(u),a.splice(a.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=a.indexOf(u);p>-1&&(a.splice(p,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return a}function l(u){const p=ym(u,a);a.splice(p,0,u),u.record.name&&!Ki(u)&&s.set(u.record.name,u)}function c(u,p){let f,g={},_,y;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Va(Oe.MATCHER_NOT_FOUND,{location:u});y=f.record.name,g=Te(Gi(p.params,f.keys.filter(b=>!b.optional).concat(f.parent?f.parent.keys.filter(b=>b.optional):[]).map(b=>b.name)),u.params&&Gi(u.params,f.keys.map(b=>b.name))),_=f.stringify(g)}else if(u.path!=null)_=u.path,f=a.find(b=>b.re.test(_)),f&&(g=f.parse(_),y=f.record.name);else{if(f=p.name?s.get(p.name):a.find(b=>b.re.test(p.path)),!f)throw Va(Oe.MATCHER_NOT_FOUND,{location:u,currentLocation:p});y=f.record.name,g=Te({},p.params,u.params),_=f.stringify(g)}const m=[];let h=f;for(;h;)m.unshift(h.record),h=h.parent;return{name:y,path:_,params:g,matched:m,meta:_m(m)}}e.forEach(u=>n(u));function d(){a.length=0,s.clear()}return{addRoute:n,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:r}}function Gi(e,t){const a={};for(const s of t)s in e&&(a[s]=e[s]);return a}function Vi(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:bm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function bm(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const s in e.components)t[s]=typeof a=="object"?a[s]:a;return t}function Ki(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function _m(e){return e.reduce((t,a)=>Te(t,a.meta),{})}function ym(e,t){let a=0,s=t.length;for(;a!==s;){const n=a+s>>1;nu(e,t[n])<0?s=n:a=n+1}const r=vm(e);return r&&(s=t.lastIndexOf(r,s-1)),s}function vm(e){let t=e;for(;t=t.parent;)if(ou(t)&&nu(e,t)===0)return t}function ou({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Yi(e){const t=pt(on),a=pt(zo),s=rt(()=>{const l=ca(e.to);return t.resolve(l)}),r=rt(()=>{const{matched:l}=s.value,{length:c}=l,d=l[c-1],u=a.matched;if(!d||!u.length)return-1;const p=u.findIndex(Ga.bind(null,d));if(p>-1)return p;const f=Wi(l[c-2]);return c>1&&Wi(d)===f&&u[u.length-1].path!==f?u.findIndex(Ga.bind(null,l[c-2])):p}),n=rt(()=>r.value>-1&&Em(a.params,s.value.params)),o=rt(()=>r.value>-1&&r.value===a.matched.length-1&&tu(a.params,s.value.params));function i(l={}){if(xm(l)){const c=t[ca(e.replace)?"replace":"push"](ca(e.to)).catch(fs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:rt(()=>s.value.href),isActive:n,isExactActive:o,navigate:i}}function wm(e){return e.length===1?e[0]:e}const Tm=md({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Yi,setup(e,{slots:t}){const a=Kt(Yi(e)),{options:s}=pt(on),r=rt(()=>({[Ji(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[Ji(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const n=t.default&&wm(t.default(a));return e.custom?n:Bo("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:r.value},n)}}}),Sm=Tm;function xm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Em(e,t){for(const a in t){const s=t[a],r=e[a];if(typeof s=="string"){if(s!==r)return!1}else if(!yt(r)||r.length!==s.length||s.some((n,o)=>n!==r[o]))return!1}return!0}function Wi(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ji=(e,t,a)=>e??t??a,km=md({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){const s=pt(mo),r=rt(()=>e.route||s.value),n=pt(ji,0),o=rt(()=>{let c=ca(n);const{matched:d}=r.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=rt(()=>r.value.matched[o.value]);vr(ji,rt(()=>o.value+1)),vr(em,i),vr(mo,r);const l=lt();return ds(()=>[l.value,i.value,e.name],([c,d,u],[p,f,g])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!Ga(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(_=>_(c))},{flush:"post"}),()=>{const c=r.value,d=e.name,u=i.value,p=u&&u.components[d];if(!p)return Xi(a.default,{Component:p,route:c});const f=u.props[d],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,y=Bo(p,Te({},g,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return Xi(a.default,{Component:y,route:c})||y}}});function Xi(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const iu=km;function Pm(e){const t=gm(e.routes,e),a=e.parseQuery||Qh,s=e.stringifyQuery||zi,r=e.history,n=Xa(),o=Xa(),i=Xa(),l=pp(ea);let c=ea;za&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=kn.bind(null,N=>""+N),u=kn.bind(null,Nh),p=kn.bind(null,ws);function f(N,F){let V,se;return au(N)?(V=t.getRecordMatcher(N),se=F):se=N,t.addRoute(se,V)}function g(N){const F=t.getRecordMatcher(N);F&&t.removeRoute(F)}function _(){return t.getRoutes().map(N=>N.record)}function y(N){return!!t.getRecordMatcher(N)}function m(N,F){if(F=Te({},F||l.value),typeof N=="string"){const D=Pn(a,N,F.path),q=t.resolve({path:D.path},F),Q=r.createHref(D.fullPath);return Te(D,q,{params:p(q.params),hash:ws(D.hash),redirectedFrom:void 0,href:Q})}let V;if(N.path!=null)V=Te({},N,{path:Pn(a,N.path,F.path).path});else{const D=Te({},N.params);for(const q in D)D[q]==null&&delete D[q];V=Te({},N,{params:u(D)}),F.params=u(F.params)}const se=t.resolve(V,F),B=N.hash||"";se.params=d(p(se.params));const k=Bh(s,Te({},N,{hash:Rh(B),path:se.path})),C=r.createHref(k);return Te({fullPath:k,hash:B,query:s===zi?Zh(N.query):N.query||{}},se,{redirectedFrom:void 0,href:C})}function h(N){return typeof N=="string"?Pn(a,N,l.value.path):Te({},N)}function b(N,F){if(c!==N)return Va(Oe.NAVIGATION_CANCELLED,{from:F,to:N})}function w(N){return P(N)}function v(N){return w(Te(h(N),{replace:!0}))}function S(N,F){const V=N.matched[N.matched.length-1];if(V&&V.redirect){const{redirect:se}=V;let B=typeof se=="function"?se(N,F):se;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=h(B):{path:B},B.params={}),Te({query:N.query,hash:N.hash,params:B.path!=null?{}:N.params},B)}}function P(N,F){const V=c=m(N),se=l.value,B=N.state,k=N.force,C=N.replace===!0,D=S(V,se);if(D)return P(Te(h(D),{state:typeof D=="object"?Te({},B,D.state):B,force:k,replace:C}),F||V);const q=V;q.redirectedFrom=F;let Q;return!k&&Fh(s,se,V)&&(Q=Va(Oe.NAVIGATION_DUPLICATED,{to:q,from:se}),I(se,se,!0,!1)),(Q?Promise.resolve(Q):x(q,se)).catch(ee=>Dt(ee)?Dt(ee,Oe.NAVIGATION_GUARD_REDIRECT)?ee:j(ee):G(ee,q,se)).then(ee=>{if(ee){if(Dt(ee,Oe.NAVIGATION_GUARD_REDIRECT))return P(Te({replace:C},h(ee.to),{state:typeof ee.to=="object"?Te({},B,ee.to.state):B,force:k}),F||q)}else ee=$(q,se,!0,C,B);return O(q,se,ee),ee})}function E(N,F){const V=b(N,F);return V?Promise.reject(V):Promise.resolve()}function T(N){const F=A.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(N):N()}function x(N,F){let V;const[se,B,k]=tm(N,F);V=Cn(se.reverse(),"beforeRouteLeave",N,F);for(const D of se)D.leaveGuards.forEach(q=>{V.push(na(q,N,F))});const C=E.bind(null,N,F);return V.push(C),M(V).then(()=>{V=[];for(const D of n.list())V.push(na(D,N,F));return V.push(C),M(V)}).then(()=>{V=Cn(B,"beforeRouteUpdate",N,F);for(const D of B)D.updateGuards.forEach(q=>{V.push(na(q,N,F))});return V.push(C),M(V)}).then(()=>{V=[];for(const D of k)if(D.beforeEnter)if(yt(D.beforeEnter))for(const q of D.beforeEnter)V.push(na(q,N,F));else V.push(na(D.beforeEnter,N,F));return V.push(C),M(V)}).then(()=>(N.matched.forEach(D=>D.enterCallbacks={}),V=Cn(k,"beforeRouteEnter",N,F,T),V.push(C),M(V))).then(()=>{V=[];for(const D of o.list())V.push(na(D,N,F));return V.push(C),M(V)}).catch(D=>Dt(D,Oe.NAVIGATION_CANCELLED)?D:Promise.reject(D))}function O(N,F,V){i.list().forEach(se=>T(()=>se(N,F,V)))}function $(N,F,V,se,B){const k=b(N,F);if(k)return k;const C=F===ea,D=za?history.state:{};V&&(se||C?r.replace(N.fullPath,Te({scroll:C&&D&&D.scroll},B)):r.push(N.fullPath,B)),l.value=N,I(N,F,V,C),j()}let L;function U(){L||(L=r.listen((N,F,V)=>{if(!R.listening)return;const se=m(N),B=S(se,R.currentRoute.value);if(B){P(Te(B,{replace:!0,force:!0}),se).catch(fs);return}c=se;const k=l.value;za&&Kh(Fi(k.fullPath,V.delta),nn()),x(se,k).catch(C=>Dt(C,Oe.NAVIGATION_ABORTED|Oe.NAVIGATION_CANCELLED)?C:Dt(C,Oe.NAVIGATION_GUARD_REDIRECT)?(P(Te(h(C.to),{force:!0}),se).then(D=>{Dt(D,Oe.NAVIGATION_ABORTED|Oe.NAVIGATION_DUPLICATED)&&!V.delta&&V.type===fo.pop&&r.go(-1,!1)}).catch(fs),Promise.reject()):(V.delta&&r.go(-V.delta,!1),G(C,se,k))).then(C=>{C=C||$(se,k,!1),C&&(V.delta&&!Dt(C,Oe.NAVIGATION_CANCELLED)?r.go(-V.delta,!1):V.type===fo.pop&&Dt(C,Oe.NAVIGATION_ABORTED|Oe.NAVIGATION_DUPLICATED)&&r.go(-1,!1)),O(se,k,C)}).catch(fs)}))}let K=Xa(),re=Xa(),J;function G(N,F,V){j(N);const se=re.list();return se.length?se.forEach(B=>B(N,F,V)):console.error(N),Promise.reject(N)}function Y(){return J&&l.value!==ea?Promise.resolve():new Promise((N,F)=>{K.add([N,F])})}function j(N){return J||(J=!N,U(),K.list().forEach(([F,V])=>N?V(N):F()),K.reset()),N}function I(N,F,V,se){const{scrollBehavior:B}=e;if(!za||!B)return Promise.resolve();const k=!V&&Yh(Fi(N.fullPath,0))||(se||!V)&&history.state&&history.state.scroll||null;return Ro().then(()=>B(N,F,k)).then(C=>C&&Vh(C)).catch(C=>G(C,N,F))}const H=N=>r.go(N);let z;const A=new Set,R={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:y,getRoutes:_,resolve:m,options:e,push:w,replace:v,go:H,back:()=>H(-1),forward:()=>H(1),beforeEach:n.add,beforeResolve:o.add,afterEach:i.add,onError:re.add,isReady:Y,install(N){N.component("RouterLink",Sm),N.component("RouterView",iu),N.config.globalProperties.$router=R,Object.defineProperty(N.config.globalProperties,"$route",{enumerable:!0,get:()=>ca(l)}),za&&!z&&l.value===ea&&(z=!0,w(r.location).catch(se=>{}));const F={};for(const se in ea)Object.defineProperty(F,se,{get:()=>l.value[se],enumerable:!0});N.provide(on,R),N.provide(zo,td(F)),N.provide(mo,l);const V=N.unmount;A.add(N),N.unmount=function(){A.delete(N),A.size<1&&(c=ea,L&&L(),L=null,l.value=ea,z=!1,J=!1),V()}}};function M(N){return N.reduce((F,V)=>F.then(()=>T(V)),Promise.resolve())}return R}function Mt(){return pt(on)}function lu(e){return pt(zo)}var Am=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function cu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ss={exports:{}},Cm=ss.exports,Qi;function Om(){return Qi||(Qi=1,(function(e,t){(function(a,s){var r={};a.PubSub?(r=a.PubSub,console.warn("PubSub already loaded, using existing version")):(a.PubSub=r,s(r)),e!==void 0&&e.exports&&(t=e.exports=r),t.PubSub=r,e.exports=t=r})(typeof window=="object"&&window||Cm||Am,function(a){var s={},r=-1,n="*";function o(_){var y;for(y in _)if(Object.prototype.hasOwnProperty.call(_,y))return!0;return!1}function i(_){return function(){throw _}}function l(_,y,m){try{_(y,m)}catch(h){setTimeout(i(h),0)}}function c(_,y,m){_(y,m)}function d(_,y,m,h){var b=s[y],w=h?c:l,v;if(Object.prototype.hasOwnProperty.call(s,y))for(v in b)Object.prototype.hasOwnProperty.call(b,v)&&w(b[v],_,m)}function u(_,y,m){return function(){var b=String(_),w=b.lastIndexOf(".");for(d(_,_,y,m);w!==-1;)b=b.substr(0,w),w=b.lastIndexOf("."),d(_,b,y,m);d(_,n,y,m)}}function p(_){var y=String(_),m=!!(Object.prototype.hasOwnProperty.call(s,y)&&o(s[y]));return m}function f(_){for(var y=String(_),m=p(y)||p(n),h=y.lastIndexOf(".");!m&&h!==-1;)y=y.substr(0,h),h=y.lastIndexOf("."),m=p(y);return m}function g(_,y,m,h){_=typeof _=="symbol"?_.toString():_;var b=u(_,y,h),w=f(_);return w?(m===!0?b():setTimeout(b,0),!0):!1}a.publish=function(_,y){return g(_,y,!1,a.immediateExceptions)},a.publishSync=function(_,y){return g(_,y,!0,a.immediateExceptions)},a.subscribe=function(_,y){if(typeof y!="function")return!1;_=typeof _=="symbol"?_.toString():_,Object.prototype.hasOwnProperty.call(s,_)||(s[_]={});var m="uid_"+String(++r);return s[_][m]=y,m},a.subscribeAll=function(_){return a.subscribe(n,_)},a.subscribeOnce=function(_,y){var m=a.subscribe(_,function(){a.unsubscribe(m),y.apply(this,arguments)});return a},a.clearAllSubscriptions=function(){s={}},a.clearSubscriptions=function(y){var m;for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(y)===0&&delete s[m]},a.countSubscriptions=function(y){var m,h,b=0;for(m in s)if(Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(y)===0){for(h in s[m])b++;break}return b},a.getSubscriptions=function(y){var m,h=[];for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(y)===0&&h.push(m);return h},a.unsubscribe=function(_){var y=function(E){var T;for(T in s)if(Object.prototype.hasOwnProperty.call(s,T)&&T.indexOf(E)===0)return!0;return!1},m=typeof _=="string"&&(Object.prototype.hasOwnProperty.call(s,_)||y(_)),h=!m&&typeof _=="string",b=typeof _=="function",w=!1,v,S,P;if(m){a.clearSubscriptions(_);return}for(v in s)if(Object.prototype.hasOwnProperty.call(s,v)){if(S=s[v],h&&S[_]){delete S[_],w=_;break}if(b)for(P in S)Object.prototype.hasOwnProperty.call(S,P)&&S[P]===_&&(delete S[P],w=!0)}return w}})})(ss,ss.exports)),ss.exports}var $m=Om();const ce=cu($m);let nt=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Rm={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function pa(e){return new Promise((t,a)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>a(e.error)})}function Mm(e,t){let a;const s=()=>{if(a)return a;const r=indexedDB.open(e);return r.onupgradeneeded=()=>r.result.createObjectStore(t),a=pa(r),a.then(n=>{n.onclose=()=>a=void 0},()=>{}),a};return(r,n)=>s().then(o=>n(o.transaction(t,r).objectStore(t)))}let On;function Ps(){return On||(On=Mm("keyval-store","keyval")),On}function Lm(e,t=Ps()){return t("readonly",a=>pa(a.get(e)))}function Zi(e,t,a=Ps()){return a("readwrite",s=>(s.put(t,e),pa(s.transaction)))}function $n(e,t=Ps()){return t("readwrite",a=>(a.delete(e),pa(a.transaction)))}function du(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},pa(e.transaction)}function Na(e=Ps()){return e("readonly",t=>{if(t.getAllKeys)return pa(t.getAllKeys());const a=[];return du(t,s=>a.push(s.key)).then(()=>a)})}function Nm(e=Ps()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([pa(t.getAllKeys()),pa(t.getAll())]).then(([s,r])=>s.map((n,o)=>[n,r[o]]));const a=[];return e("readonly",s=>du(s,r=>a.push([r.key,r.value])).then(()=>a))})}const Ka=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Lr=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a+=1)if(!Lr(e[a],t[a]))return!1;return!0}if(Ka(e)&&Ka(t)){const a=Object.entries(e),s=new Set(Object.keys(t));if(a.length!==s.size)return!1;for(const[r,n]of a){if(!Lr(n,t[r]))return!1;s.delete(r)}return s.size===0}return!1},Rs=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ka(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Dm=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",el=e=>e>="0"&&e<="9"||e==="-",Im=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var X;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(X||(X={}));const tl={"(":X.TOK_LPAREN,")":X.TOK_RPAREN,"*":X.TOK_STAR,",":X.TOK_COMMA,".":X.TOK_DOT,":":X.TOK_COLON,"@":X.TOK_CURRENT,$:X.TOK_ROOT,"]":X.TOK_RBRACKET,"{":X.TOK_LBRACE,"}":X.TOK_RBRACE},Bm={"!":!0,"<":!0,"=":!0,">":!0},Fm={"	":!0,"\n":!0,"\r":!0," ":!0};class zm{constructor(){this._current=0}tokenize(t){const a=[];this._current=0;let s,r,n;for(;this._current<t.length;)if(Dm(t[this._current]))s=this._current,r=this.consumeUnquotedIdentifier(t),a.push({start:s,type:X.TOK_UNQUOTEDIDENTIFIER,value:r});else if(tl[t[this._current]]!==void 0)a.push({start:this._current,type:tl[t[this._current]],value:t[this._current]}),this._current+=1;else if(el(t[this._current]))n=this.consumeNumber(t),a.push(n);else if(t[this._current]==="[")n=this.consumeLBracket(t),a.push(n);else if(t[this._current]==='"')s=this._current,r=this.consumeQuotedIdentifier(t),a.push({start:s,type:X.TOK_QUOTEDIDENTIFIER,value:r});else if(t[this._current]==="'")s=this._current,r=this.consumeRawStringLiteral(t),a.push({start:s,type:X.TOK_LITERAL,value:r});else if(t[this._current]==="`"){s=this._current;const o=this.consumeLiteral(t);a.push({start:s,type:X.TOK_LITERAL,value:o})}else if(Bm[t[this._current]]!==void 0)n=this.consumeOperator(t),n&&a.push(n);else if(Fm[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")s=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,a.push({start:s,type:X.TOK_AND,value:"&&"})):a.push({start:s,type:X.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")s=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,a.push({start:s,type:X.TOK_OR,value:"||"})):a.push({start:s,type:X.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return a}consumeUnquotedIdentifier(t){const a=this._current;for(this._current+=1;this._current<t.length&&Im(t[this._current]);)this._current+=1;return t.slice(a,this._current)}consumeQuotedIdentifier(t){const a=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=='"'&&this._current<s;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==='"')?r+=2:r+=1,this._current=r}return this._current+=1,JSON.parse(t.slice(a,this._current))}consumeRawStringLiteral(t){const a=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=="'"&&this._current<s;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==="'")?n+=2:n+=1,this._current=n}return this._current+=1,t.slice(a+1,this._current-1).replace("\\'","'")}consumeNumber(t){const a=this._current;this._current+=1;const s=t.length;for(;el(t[this._current])&&this._current<s;)this._current+=1;const r=parseInt(t.slice(a,this._current),10);return{start:a,value:r,type:X.TOK_NUMBER}}consumeLBracket(t){const a=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:a,type:X.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:a,type:X.TOK_FLATTEN,value:"[]"}):{start:a,type:X.TOK_LBRACKET,value:"["}}consumeOperator(t){const a=this._current,s=t[a];if(this._current+=1,s==="!")return t[this._current]==="="?(this._current+=1,{start:a,type:X.TOK_NE,value:"!="}):{start:a,type:X.TOK_NOT,value:"!"};if(s==="<")return t[this._current]==="="?(this._current+=1,{start:a,type:X.TOK_LTE,value:"<="}):{start:a,type:X.TOK_LT,value:"<"};if(s===">")return t[this._current]==="="?(this._current+=1,{start:a,type:X.TOK_GTE,value:">="}):{start:a,type:X.TOK_GT,value:">"};if(s==="="&&t[this._current]==="=")return this._current+=1,{start:a,type:X.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const a=this._current,s=t.length;for(;t[this._current]!=="`"&&this._current<s;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let r=t.slice(a,this._current).trimLeft();r=r.replace("\\`","`");const n=this.looksLikeJSON(r)?JSON.parse(r):JSON.parse(`"${r}"`);return this._current+=1,n}looksLikeJSON(t){const s=["true","false","null"],r="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||s.includes(t))return!0;if(r.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const uu=new zm,Fe={[X.TOK_EOF]:0,[X.TOK_UNQUOTEDIDENTIFIER]:0,[X.TOK_QUOTEDIDENTIFIER]:0,[X.TOK_RBRACKET]:0,[X.TOK_RPAREN]:0,[X.TOK_COMMA]:0,[X.TOK_RBRACE]:0,[X.TOK_NUMBER]:0,[X.TOK_CURRENT]:0,[X.TOK_EXPREF]:0,[X.TOK_ROOT]:0,[X.TOK_PIPE]:1,[X.TOK_OR]:2,[X.TOK_AND]:3,[X.TOK_EQ]:5,[X.TOK_GT]:5,[X.TOK_LT]:5,[X.TOK_GTE]:5,[X.TOK_LTE]:5,[X.TOK_NE]:5,[X.TOK_FLATTEN]:9,[X.TOK_STAR]:20,[X.TOK_FILTER]:21,[X.TOK_DOT]:40,[X.TOK_NOT]:45,[X.TOK_LBRACE]:50,[X.TOK_LBRACKET]:55,[X.TOK_LPAREN]:60};class jm{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const a=this.expression(0);if(this.lookahead(0)!==X.TOK_EOF){const s=this.lookaheadToken(0);this.errorToken(s,`Unexpected token type: ${s.type}, value: ${s.value}`)}return a}loadTokens(t){this.tokens=[...uu.tokenize(t),{type:X.TOK_EOF,value:"",start:t.length}]}expression(t){const a=this.lookaheadToken(0);this.advance();let s=this.nud(a),r=this.lookahead(0);for(;t<Fe[r];)this.advance(),s=this.led(r,s),r=this.lookahead(0);return s}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let a,s,r;switch(t.type){case X.TOK_LITERAL:return{type:"Literal",value:t.value};case X.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case X.TOK_QUOTEDIDENTIFIER:const n={type:"Field",name:t.value};if(this.lookahead(0)===X.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return n;case X.TOK_NOT:return s=this.expression(Fe.Not),{type:"NotExpression",children:[s]};case X.TOK_STAR:return a={type:"Identity"},s=this.lookahead(0)===X.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Fe.Star),{type:"ValueProjection",children:[a,s]};case X.TOK_FILTER:return this.led(t.type,{type:"Identity"});case X.TOK_LBRACE:return this.parseMultiselectHash();case X.TOK_FLATTEN:return a={type:X.TOK_FLATTEN,children:[{type:"Identity"}]},s=this.parseProjectionRHS(Fe.Flatten),{type:"Projection",children:[a,s]};case X.TOK_LBRACKET:return this.lookahead(0)===X.TOK_NUMBER||this.lookahead(0)===X.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},s)):this.lookahead(0)===X.TOK_STAR&&this.lookahead(1)===X.TOK_RBRACKET?(this.advance(),this.advance(),s=this.parseProjectionRHS(Fe.Star),{children:[{type:"Identity"},s],type:"Projection"}):this.parseMultiselectList();case X.TOK_CURRENT:return{type:X.TOK_CURRENT};case X.TOK_ROOT:return{type:X.TOK_ROOT};case X.TOK_EXPREF:return r=this.expression(Fe.Expref),{type:"ExpressionReference",children:[r]};case X.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==X.TOK_RPAREN;)this.lookahead(0)===X.TOK_CURRENT?(r={type:X.TOK_CURRENT},this.advance()):r=this.expression(0),o.push(r);return this.match(X.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,a){let s;switch(t){case X.TOK_DOT:const r=Fe.Dot;return this.lookahead(0)!==X.TOK_STAR?(s=this.parseDotRHS(r),{type:"Subexpression",children:[a,s]}):(this.advance(),s=this.parseProjectionRHS(r),{type:"ValueProjection",children:[a,s]});case X.TOK_PIPE:return s=this.expression(Fe.Pipe),{type:X.TOK_PIPE,children:[a,s]};case X.TOK_OR:return s=this.expression(Fe.Or),{type:"OrExpression",children:[a,s]};case X.TOK_AND:return s=this.expression(Fe.And),{type:"AndExpression",children:[a,s]};case X.TOK_LPAREN:const n=a.name,o=[];let i;for(;this.lookahead(0)!==X.TOK_RPAREN;)this.lookahead(0)===X.TOK_CURRENT?(i={type:X.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===X.TOK_COMMA&&this.match(X.TOK_COMMA),o.push(i);return this.match(X.TOK_RPAREN),{name:n,type:"Function",children:o};case X.TOK_FILTER:const c=this.expression(0);return this.match(X.TOK_RBRACKET),s=this.lookahead(0)===X.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Fe.Filter),{type:"FilterProjection",children:[a,s,c]};case X.TOK_FLATTEN:const d={type:X.TOK_FLATTEN,children:[a]},u=this.parseProjectionRHS(Fe.Flatten);return{type:"Projection",children:[d,u]};case X.TOK_EQ:case X.TOK_NE:case X.TOK_GT:case X.TOK_GTE:case X.TOK_LT:case X.TOK_LTE:return this.parseComparator(a,t);case X.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===X.TOK_NUMBER||p.type===X.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice(a,s)):(this.match(X.TOK_STAR),this.match(X.TOK_RBRACKET),s=this.parseProjectionRHS(Fe.Star),{type:"Projection",children:[a,s]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const a=this.lookaheadToken(0);this.errorToken(a,`Expected ${t}, got: ${a.type}`)}}errorToken(t,a=""){const s=new Error(a||`Invalid token (${t.type}): "${t.value}"`);throw s.name="ParserError",s}parseIndexExpression(){if(this.lookahead(0)===X.TOK_COLON||this.lookahead(1)===X.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(X.TOK_RBRACKET),t}projectIfSlice(t,a){const s={type:"IndexExpression",children:[t,a]};return a.type==="Slice"?{children:[s,this.parseProjectionRHS(Fe.Star)],type:"Projection"}:s}parseSliceExpression(){const t=[null,null,null];let a=0,s=this.lookahead(0);for(;s!==X.TOK_RBRACKET&&a<3;){if(s===X.TOK_COLON)a+=1,this.advance();else if(s===X.TOK_NUMBER)t[a]=this.lookaheadToken(0).value,this.advance();else{const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}s=this.lookahead(0)}return this.match(X.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,a){const s=this.expression(Fe[a]);return{type:"Comparator",name:a,children:[t,s]}}parseDotRHS(t){const a=this.lookahead(0);if([X.TOK_UNQUOTEDIDENTIFIER,X.TOK_QUOTEDIDENTIFIER,X.TOK_STAR].includes(a))return this.expression(t);if(a===X.TOK_LBRACKET)return this.match(X.TOK_LBRACKET),this.parseMultiselectList();if(a===X.TOK_LBRACE)return this.match(X.TOK_LBRACE),this.parseMultiselectHash();const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}parseProjectionRHS(t){if(Fe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===X.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===X.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===X.TOK_DOT)return this.match(X.TOK_DOT),this.parseDotRHS(t);const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==X.TOK_RBRACKET;){const a=this.expression(0);if(t.push(a),this.lookahead(0)===X.TOK_COMMA&&(this.match(X.TOK_COMMA),this.lookahead(0)===X.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(X.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],a=[X.TOK_UNQUOTEDIDENTIFIER,X.TOK_QUOTEDIDENTIFIER];let s,r,n;for(;;){if(s=this.lookaheadToken(0),!a.includes(s.type))throw new Error(`Expecting an identifier token, got: ${s.type}`);if(r=s.value,this.advance(),this.match(X.TOK_COLON),n=this.expression(0),t.push({value:n,type:"KeyValuePair",name:r}),this.lookahead(0)===X.TOK_COMMA)this.match(X.TOK_COMMA);else if(this.lookahead(0)===X.TOK_RBRACE){this.match(X.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const pu=new jm;var oe;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(oe||(oe={}));class Hm{constructor(t){this.TYPE_NAME_TABLE={[oe.TYPE_NUMBER]:"number",[oe.TYPE_ANY]:"any",[oe.TYPE_STRING]:"string",[oe.TYPE_ARRAY]:"array",[oe.TYPE_OBJECT]:"object",[oe.TYPE_BOOLEAN]:"boolean",[oe.TYPE_EXPREF]:"expression",[oe.TYPE_NULL]:"null",[oe.TYPE_ARRAY_NUMBER]:"Array<number>",[oe.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([a])=>Math.abs(a),this.functionAvg=([a])=>{let s=0;for(let r=0;r<a.length;r+=1)s+=a[r];return s/a.length},this.functionCeil=([a])=>Math.ceil(a),this.functionContains=a=>{const[s,r]=a;return s.includes(r)},this.functionEndsWith=a=>{const[s,r]=a;return s.includes(r,s.length-r.length)},this.functionFloor=([a])=>Math.floor(a),this.functionJoin=a=>{const[s,r]=a;return r.join(s)},this.functionKeys=([a])=>Object.keys(a),this.functionLength=([a])=>Ka(a)?Object.keys(a).length:a.length,this.functionMap=a=>{if(!this._interpreter)return[];const s=[],r=this._interpreter,n=a[0],o=a[1];for(let i=0;i<o.length;i+=1)s.push(r.visit(n,o[i]));return s},this.functionMax=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===oe.TYPE_NUMBER)return Math.max(...a);const r=a;let n=r[0];for(let o=1;o<r.length;o+=1)n.localeCompare(r[o])<0&&(n=r[o]);return n},this.functionMaxBy=a=>{const s=a[1],r=a[0],n=this.createKeyFunction(s,[oe.TYPE_NUMBER,oe.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<r.length;c+=1)l=n&&n(r[c]),l!==void 0&&l>o&&(o=l,i=r[c]);return i},this.functionMerge=a=>{let s={};for(let r=0;r<a.length;r+=1){const n=a[r];s=Object.assign(s,n)}return s},this.functionMin=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===oe.TYPE_NUMBER)return Math.min(...a);const r=a;let n=r[0];for(let o=1;o<r.length;o+=1)r[o].localeCompare(n)<0&&(n=r[o]);return n},this.functionMinBy=a=>{const s=a[1],r=a[0],n=this.createKeyFunction(s,[oe.TYPE_NUMBER,oe.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<r.length;c+=1)l=n&&n(r[c]),l!==void 0&&l<o&&(o=l,i=r[c]);return i},this.functionNotNull=a=>{for(let s=0;s<a.length;s+=1)if(this.getTypeName(a[s])!==oe.TYPE_NULL)return a[s];return null},this.functionReverse=([a])=>{if(this.getTypeName(a)===oe.TYPE_STRING){const n=a;let o="";for(let i=n.length-1;i>=0;i-=1)o+=n[i];return o}const r=a.slice(0);return r.reverse(),r},this.functionSort=([a])=>[...a].sort(),this.functionSortBy=a=>{if(!this._interpreter)return[];const s=a[0].slice(0);if(s.length===0)return s;const r=this._interpreter,n=a[1],o=this.getTypeName(r.visit(n,s[0]));if(o!==void 0&&![oe.TYPE_NUMBER,oe.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<s.length;l+=1)i.push([l,s[l]]);i.sort((l,c)=>{const d=r.visit(n,l[1]),u=r.visit(n,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)s[l]=i[l][1];return s},this.functionStartsWith=([a,s])=>a.startsWith(s),this.functionSum=([a])=>a.reduce((s,r)=>s+r,0),this.functionToArray=([a])=>this.getTypeName(a)===oe.TYPE_ARRAY?a:[a],this.functionToNumber=([a])=>{const s=this.getTypeName(a);let r;return s===oe.TYPE_NUMBER?a:s===oe.TYPE_STRING&&(r=+a,!isNaN(r))?r:null},this.functionToString=([a])=>this.getTypeName(a)===oe.TYPE_STRING?a:JSON.stringify(a),this.functionType=([a])=>{switch(this.getTypeName(a)){case oe.TYPE_NUMBER:return"number";case oe.TYPE_STRING:return"string";case oe.TYPE_ARRAY:return"array";case oe.TYPE_OBJECT:return"object";case oe.TYPE_BOOLEAN:return"boolean";case oe.TYPE_EXPREF:return"expref";case oe.TYPE_NULL:return"null";default:return}},this.functionValues=([a])=>Object.values(a),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[oe.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[oe.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[oe.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY]},{types:[oe.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[oe.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[oe.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY,oe.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[oe.TYPE_EXPREF]},{types:[oe.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[oe.TYPE_ARRAY_NUMBER,oe.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[oe.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[oe.TYPE_ARRAY_NUMBER,oe.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[oe.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[oe.TYPE_ARRAY_STRING,oe.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[oe.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[oe.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[oe.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[oe.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[oe.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[oe.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,a,s){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:a.bind(this),_signature:s}}callFunction(t,a){const s=this.functionTable[t];if(s===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,a,s._signature),s._func.call(this,a)}validateInputSignatures(t,a){for(let s=0;s<a.length;s+=1)if("variadic"in a[s]&&s!==a.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${s+1} must occur last`)}validateArgs(t,a,s){var r,n;let o;this.validateInputSignatures(t,s);const i=s.filter(_=>{var y;return(y=!_.optional)!==null&&y!==void 0?y:!1}).length,l=(n=(r=s[s.length-1])===null||r===void 0?void 0:r.variadic)!==null&&n!==void 0?n:!1,c=a.length<i,d=a.length>s.length,u=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw o=s.length>1,new Error(`ArgumentError: ${t}() takes ${u}${i} argument${o&&"s"||""} but received ${a.length}`);let p,f,g;for(let _=0;_<s.length;_+=1){g=!1,p=s[_].types,f=this.getTypeName(a[_]);let y;for(y=0;y<p.length;y+=1)if(f!==void 0&&this.typeMatches(f,p[y],a[_])){g=!0;break}if(!g&&f!==void 0){const m=p.map(h=>this.TYPE_NAME_TABLE[h]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${_+1} to be type (${m}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,a,s){if(a===oe.TYPE_ANY)return!0;if(a===oe.TYPE_ARRAY_STRING||a===oe.TYPE_ARRAY_NUMBER||a===oe.TYPE_ARRAY){if(a===oe.TYPE_ARRAY)return t===oe.TYPE_ARRAY;if(t===oe.TYPE_ARRAY){let r;a===oe.TYPE_ARRAY_NUMBER?r=oe.TYPE_NUMBER:a===oe.TYPE_ARRAY_STRING&&(r=oe.TYPE_STRING);for(let n=0;n<s.length;n+=1){const o=this.getTypeName(s[n]);if(o!==void 0&&r!==void 0&&!this.typeMatches(o,r,s[n]))return!1}return!0}}else return t===a;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return oe.TYPE_STRING;case"[object Number]":return oe.TYPE_NUMBER;case"[object Array]":return oe.TYPE_ARRAY;case"[object Boolean]":return oe.TYPE_BOOLEAN;case"[object Null]":return oe.TYPE_NULL;case"[object Object]":return t.jmespathType===X.TOK_EXPREF?oe.TYPE_EXPREF:oe.TYPE_OBJECT;default:return}}createKeyFunction(t,a){if(!this._interpreter)return;const s=this._interpreter;return n=>{const o=s.visit(t,n);if(!a.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${a.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Um{constructor(){this._rootValue=null,this.runtime=new Hm(this)}search(t,a){return this._rootValue=a,this.visit(t,a)}visit(t,a){let s,r,n,o,i,l,c,d,u,p,f;switch(t.type){case"Field":return a===null?null:Ka(a)?(l=a[t.name],l===void 0?null:l):null;case"Subexpression":for(n=this.visit(t.children[0],a),p=1;p<t.children.length;p+=1)if(n=this.visit(t.children[1],n),n===null)return null;return n;case"IndexExpression":return c=this.visit(t.children[0],a),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(a))return null;let g=t.value;return g<0&&(g=a.length+g),n=a[g],n===void 0&&(n=null),n;case"Slice":if(!Array.isArray(a))return null;const _=[...t.children],y=this.computeSliceParams(a.length,_),[m,h,b]=y;if(n=[],b>0)for(p=m;p<h;p+=b)n.push(a[p]);else for(p=m;p>h;p+=b)n.push(a[p]);return n;case"Projection":if(f=this.visit(t.children[0],a),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)r=this.visit(t.children[1],f[p]),r!==null&&u.push(r);return u;case"ValueProjection":if(f=this.visit(t.children[0],a),!Ka(f))return null;u=[];const w=Object.values(f);for(p=0;p<w.length;p+=1)r=this.visit(t.children[1],w[p]),r!==null&&u.push(r);return u;case"FilterProjection":if(f=this.visit(t.children[0],a),!Array.isArray(f))return null;const v=[],S=[];for(p=0;p<f.length;p+=1)s=this.visit(t.children[2],f[p]),Rs(s)||v.push(f[p]);for(let $=0;$<v.length;$+=1)r=this.visit(t.children[1],v[$]),r!==null&&S.push(r);return S;case"Comparator":switch(o=this.visit(t.children[0],a),i=this.visit(t.children[1],a),t.name){case X.TOK_EQ:n=Lr(o,i);break;case X.TOK_NE:n=!Lr(o,i);break;case X.TOK_GT:n=o>i;break;case X.TOK_GTE:n=o>=i;break;case X.TOK_LT:n=o<i;break;case X.TOK_LTE:n=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return n;case X.TOK_FLATTEN:const P=this.visit(t.children[0],a);if(!Array.isArray(P))return null;let E=[];for(p=0;p<P.length;p+=1)r=P[p],Array.isArray(r)?E=[...E,...r]:E.push(r);return E;case"Identity":return a;case"MultiSelectList":if(a===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],a));return u;case"MultiSelectHash":if(a===null)return null;u={};let T;for(p=0;p<t.children.length;p+=1)T=t.children[p],u[T.name]=this.visit(T.value,a);return u;case"OrExpression":return s=this.visit(t.children[0],a),Rs(s)&&(s=this.visit(t.children[1],a)),s;case"AndExpression":return o=this.visit(t.children[0],a),Rs(o)?o:this.visit(t.children[1],a);case"NotExpression":return o=this.visit(t.children[0],a),Rs(o);case"Literal":return t.value;case X.TOK_PIPE:return c=this.visit(t.children[0],a),this.visit(t.children[1],c);case X.TOK_CURRENT:return a;case X.TOK_ROOT:return this._rootValue;case"Function":const x=[];for(let $=0;$<t.children.length;$+=1)x.push(this.visit(t.children[$],a));return this.runtime.callFunction(t.name,x);case"ExpressionReference":const O=t.children[0];return O.jmespathType=X.TOK_EXPREF,O;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,a){let[s,r,n]=a;if(n===null)n=1;else if(n===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=n<0;return s=s===null?o?t-1:0:this.capSliceRange(t,s,n),r=r===null?o?-1:t:this.capSliceRange(t,r,n),[s,r,n]}capSliceRange(t,a,s){let r=a;return r<0?(r+=t,r<0&&(r=s<0?-1:0)):r>=t&&(r=s<0?t-1:t),r}}const jo=new Um,qm=oe.TYPE_ANY,Gm=oe.TYPE_ARRAY,Vm=oe.TYPE_ARRAY_NUMBER,Km=oe.TYPE_ARRAY_STRING,Ym=oe.TYPE_BOOLEAN,Wm=oe.TYPE_EXPREF,Jm=oe.TYPE_NULL,Xm=oe.TYPE_NUMBER,Qm=oe.TYPE_OBJECT,Zm=oe.TYPE_STRING;function eg(e){return pu.parse(e)}function tg(e){return uu.tokenize(e)}const ag=(e,t,a)=>{jo.runtime.registerFunction(e,t,a)};function sg(e,t){const a=pu.parse(t);return jo.search(a,e)}const rg=jo,dt={compile:eg,registerFunction:ag,search:sg,tokenize:tg,TreeInterpreter:rg,TYPE_ANY:qm,TYPE_ARRAY_NUMBER:Vm,TYPE_ARRAY_STRING:Km,TYPE_ARRAY:Gm,TYPE_BOOLEAN:Ym,TYPE_EXPREF:Wm,TYPE_NULL:Jm,TYPE_NUMBER:Xm,TYPE_OBJECT:Qm,TYPE_STRING:Zm},kt=class kt{static async appendPrompt(t,a){Zi(t,LZString.compressToUTF16(JSON.stringify(a))).then(async()=>{Na().then(s=>{s=s.filter(r=>r.indexOf(this.DELIM_PROMPTS)!=-1),s.length>kt.MAX_PROMPTS_VALS&&$n(s[0])})}).catch(s=>console.error("~IDB Failed | ",s))}static async appendVIR_products(t){t.forEach(a=>{let s=JSON.stringify({ts:Date.now(),name:a[1]});Zi(a[0],LZString.compressToUTF16(s)).then(async()=>{}).catch(r=>console.error("~IDB Failed | ",r))})}static async keys(t,a){Na().then(s=>{s=s.filter(r=>r.indexOf(t)!=-1),a&&a(s)})}static async get(t,a){Lm(t).then(s=>{try{s=JSON.parse(LZString.decompressFromUTF16(s))}catch{}finally{a&&a(s)}})}static async entries(t,a){Nm().then(s=>{s=s.filter(r=>r[0].indexOf(t)!=-1),s=s.map(r=>{try{r[1]=JSON.parse(LZString.decompressFromUTF16(r[1]))}catch{}finally{}return r}),a&&a(s)})}static compr(t){return t}static decompr(t){return t}static async act(t,a,s){let r="";switch(t){case"PROMPTS_COUNT":Na().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),r=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,r&&s&&s(r)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":Na().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(kt.DELIM_PROMPTS)[0]==a&&$n(i)})}),r="The Prompt history has been removed for UPI: "+a,console.log("~ PROMPTS_CLEAR ------ | ",r);break;case"VIR_COUNT":Na().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),r=`There are ${o.length} VNR names in local IDB storage.`,r&&s&&s(r)});break;case"VIR_CLEAR":let n=0;await Na().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(kt.DELIM_VIR)[0]==a&&(n++,$n(i))})}),r=`The VNR Names have been removed for UPI: ${a} (Total Deleted: ${n})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),r="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",r),r&&s&&s(r)}};kt.MAX_TYPEAHEAD_ROWS=14,kt.MAX_PROMPTS_VALS=50,kt.DELIM_PROMPTS="_",kt.DELIM_VIR="-",kt.DELIM_SNDX="|";let Pa=kt;const _e=wh("AppState",()=>{const e=Mt(),t="DEV",a="BMA Tourney v0.0.5 ",s="#app",r=Kt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let n=Kt([]),o=Kt([]);const i=T=>{n.push(T),n.length>10&&(n.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${n.length}`)},l=T=>{o.push(T),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const T=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",T),T)try{const x=JSON.parse(T);return console.log("[appState] Parsed session_user:",x),x}catch(x){console.error("Failed to parse session_user from localStorage:",x)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=lt({session_app:{online:!0,route:"",version:a+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=lt({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",Pa.compr(JSON.stringify(u.value.features)));else{let T=Pa.decompr(localStorage.getItem("feature_flags"));T=Object.assign(u.value.features,JSON.parse(T));for(let x in T)typeof u.value?.env_override[t][x]<"u"&&(T[x]=u.value.env_override[t][x]);localStorage.setItem("feature_flags",Pa.compr(JSON.stringify(u.value.features=T)))}},f=()=>{const T=document.querySelector(s);if(T){const x=T.dataset;for(let O in x){const $=O.replace(/^sync/,""),L=Object.keys(u.value.features).find(U=>U.toLowerCase()===$.toLowerCase());if(L){const U=u.value.features[L]?.state;U&&(x[O]=U)}}}},g=(T="Theme",x={state:"dark"})=>{const O=document.querySelector(s);O&&(O.dataset["sync"+T]=x.state)},_=(T="Theme",x={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&x){let $=JSON.parse(Pa.decompr(localStorage.getItem("feature_flags")));$[T]={state:x.state},localStorage.setItem("feature_flags",Pa.compr(JSON.stringify(u.value.features=$))),g(T,x),ce.publish("APP.ROUTE_SYNC",`{ "${T}": ${JSON.stringify(x)}}`)}},y=T=>{const x=u.value?.features?.Lang?.state;let O=b.value.microcopy.language.filter($=>$.code==x)[0]?.copy;if(O=O.filter($=>$[0]==T)[0],O)return O[1]},m=(T=":version")=>{let[x,O,$]=T.split(" ");switch(x=x.toLocaleLowerCase(),$=="true"&&($=!0),$=="false"&&($=!1),x){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":_(O,{state:$});break;case":route":neodigmToast.q(`route ${O}`,"brand"),e.push({name:O});break}};p(),f();const h=Kt({designer:"guided_tour",notifications:{unread:0}}),b=lt({sports:nt,microcopy:Rm.getMeta()}),w=rt(()=>d.value.session_user.fname+" "+d.value.session_user.lname),v=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},S=()=>{localStorage.removeItem("session_user")};function P(T){return d.value.session_user.authenticated=!0,d.value.session_user.token=T,v(),d.value.session_app.route="chat"}function E(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",S(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:h,appMeta:b,appSession:d,clearSessionUser:S,concatFirstLast:w,coreBetSlip:o,coreTourn:n,doCLI:m,doLogin:P,doLogout:E,hierTopics:r,i18n:y,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:v,setFeaturePersistPub:_}}),Rn="mvvBrand",ng=400,Ts={scanIntervalId:null,processedElements:new WeakSet,init(){const t=new URLSearchParams(window.location.search).get("brand");t!==null&&(t==="null"||t===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(t)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(e){if(e)try{localStorage.setItem(Rn,e),console.log("[BrandManager] Brand token set:",e)}catch(t){console.error("[BrandManager] Failed to set brand:",t)}},getBrand(){try{return localStorage.getItem(Rn)}catch(e){return console.error("[BrandManager] Failed to get brand:",e),null}},clearBrand(){localStorage.removeItem(Rn),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const e=this.getBrand();return e?{"x-m5t-brand":e}:{}},hydrateBrandElements(){const e=this.getBrand();if(!e)return;const t=document.querySelectorAll("[data-mvv-brand]");t.forEach(a=>{a.getAttribute("data-mvv-brand")==="token"&&(a.textContent=e)}),t.length>0&&console.log(`[BrandManager] Hydrated ${t.length} brand elements with token:`,e)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},ng),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const e=this.getBrand();if(!e)return;const t=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(a=>{t.push(a)}),document.querySelectorAll("*").forEach(a=>{a.shadowRoot&&a.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{t.push(s)})}),t.forEach(a=>{if(this.processedElements.has(a))return;const s=a.getAttribute("src");if(s&&!s.includes("&brand=")){const r=`${s}&brand=${e}`;a.setAttribute("src",r),this.processedElements.add(a),console.log("[BrandManager] Updated src for element:",a)}})}},We=class We{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),We.setTJO(null),location.reload()}static async doSignin(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",s)).json();n.ok?(typeof mvvLegit<"u"&&mvvLegit&&n?.accessToken&&mvvLegit.doSignin(n?.accessToken),a&&a(n)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",s)).json();if(n.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),a&&a(n);else{const o=n?.error||n?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),a&&a(n)}}static async checkUserName(t,a=null){const s={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",s)).json();return a&&a(n),n}static async resetHash(t,a,s=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const r=typeof neodigmUtils<"u"?neodigmUtils.genHash(a):a,n={method:"POST",body:JSON.stringify({guid:t,hash:r}),headers:We.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",n)).json();s&&s(i)}static genHeaders(t={}){let a={};a.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),a.Authorization="Bearer expired",a["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(a.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(a.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(a.company=SessionAcctEntity.oEntities.data.entity.company);const s=Ts.getBrandHeader();return Object.assign(a,s),a}static async fetchTournaments(t=null){const a={method:"GET",headers:We.genHeaders()},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",a)).json();return t&&t(r),r}static async fetchBetSlips(t,a="",s="",r=null){let n=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;a&&(n+=`/${a}`),a&&s&&(n+=`/${s}`);const o={method:"GET",headers:We.genHeaders()},l=await(await fetch(this.API_baseURI+n,o)).json();return r&&r(l),l}static async fetchLeaderboard(t,a="",s=null){let r=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;a&&(r+=`&user=${a}`);const n={method:"GET",headers:We.genHeaders()},i=await(await fetch(this.API_baseURI+r,n)).json();return s&&s(i),i}static async fetchGlobalLeaderboard(t=null){const a=`/m5t/${this.API_ver}/coreLeaderboard`,s={method:"GET",headers:We.genHeaders()},n=await(await fetch(this.API_baseURI+a,s)).json();return t&&t(n),n}static async postBetSlips(t,a=null){const s=t.map(n=>{const o={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),r=await Promise.all(s);return a&&a(r),r}static async fetchPromotions(t=null){const a={method:"GET",headers:We.genHeaders()},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",a)).json();return t&&t(r),r}};We.API_baseURI="https://machfive-bmacdev-rest.onrender.com",We.API_ver="v5",We.jsState={},We.jsMeta={},We.jsTJO=null;let Ee=We;const Ss={shootConfetti(){if(typeof confetti=="function"){let s=function(r,n){confetti({...t,...n,particleCount:Math.floor(e*r)})};var a=s,e=200,t={origin:{y:.7}};s(.25,{zIndex:304,spread:26,startVelocity:55}),s(.2,{zIndex:304,spread:60}),s(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),s(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),s(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let a=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(e+"Z"));const s={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return a.toLocaleString(void 0,{...s,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let a={};for(const s in t)e[s]&&t[s]!=e[s]&&(a[s]=e[s]);return Object.keys(a).length>0?a:t},genLorumIpsum(e=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},ma=(e,t)=>{const a=e.__vccOpts||e;for(const[s,r]of t)a[s]=r;return a},og={class:"auth-page"},ig={__name:"splash_route",setup(e){const t=Mt(),a=lu();return _e(),setTimeout(()=>{a&&a.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(s,r)=>(Xe(),ft("div",og,[...r[0]||(r[0]=[ha('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),ae("div",{class:"auth-page-right"},[ae("div",{class:"auth-card splash-content"},[ae("p",{class:"splash-message"},"Loading Tournaments..."),ae("br"),ae("br"),ae("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[ae("div")])])],-1)])]))}},al=ma(ig,[["__scopeId","data-v-994bad53"]]);class lg{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(a=>{let s=!1;for(const r of a){if(r.attributeName==="data-sync-theme"){const n=t.getAttribute("data-sync-theme")||"dark";n!==this._theme&&(this._theme=n,s=!0)}if(r.attributeName==="data-sync-motif"){const n=t.getAttribute("data-sync-motif")||"brand";n!==this._motif&&(this._motif=n,s=!0)}if(r.attributeName==="data-sync-lang"){const n=t.getAttribute("data-sync-lang")||"en";n!==this._lang&&(this._lang=n,s=!0)}}s&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(a){console.warn("[BMAThemeResolver] Listener error:",a)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const Ce=new lg().init(),fu={mobile:"(orientation: portrait), (max-width: 768px)"};function Qe(){return`
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
  `}function ga(){return`
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
  `}class cg extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ce.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=Ce.theme;let a=this.getAttribute("data-sport-group")||"Soccer",s,r;a==="Multi"?(s="Multi",r=`var(--sport-icon__Multi--${t})`):(s=a.replaceAll(" ","_"),r=`var(--sport-icon__${s}--${t})`),this.shadowRoot.innerHTML=`
      <style>
        ${Qe()}

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
    `}}customElements.define("bma-sport-icon",cg);class dg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Ce.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,a={}){const s=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...a}});this.dispatchEvent(s)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const a=t.target.closest(".btn-info"),s=t.target.closest(".btn-join"),r=t.target.closest(".btn-play"),n=t.target.closest("bma-sport-icon");if(a){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(s){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(r){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(n){t.stopPropagation();const o=n.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,a,s){a!==s&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const a=t.scrollHeight-t.clientHeight,s=this.getAttribute("data-compact")==="true";!s&&a>2?this.setAttribute("data-compact","true"):s&&a<-10&&this.removeAttribute("data-compact")})}getTheme(){return Ce.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);return Array.isArray(a)?a.find(r=>Array.isArray(r))?.length||"0":a?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);return Array.isArray(a)?a.find(r=>Array.isArray(r))||[]:a?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);if(Array.isArray(a)){const s=a.find(n=>n&&typeof n=="object"&&!Array.isArray(n));return{current:a.find(n=>Array.isArray(n))?.length||0,max:parseInt(s?.max)||100}}return{current:a?.guids?.length||0,max:a?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;return a?this.entitiesGuids.includes(a):!1}getUserBadge(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;const s=this.getAttribute("data-bma-tourn-tags");if(!s)return null;try{const r=JSON.parse(s);if(!Array.isArray(r))return null;const n=r.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===a&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[a]&&o[a].startsWith("--badge__ribbon--"))));return n&&(n.badge||n[a])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const a=t.match(/--badge__ribbon--(\w+)/);return a?a[1]:""}getSportInfo(t){const a=nt.find(s=>s.key===t);return a?{title:a.title,description:a.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(s=>{const r=s.title||"Match";let n="TBD";if(s.scheduled_at)try{n=new Date(s.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{n=s.scheduled_at}return`  ${r} @ ${n}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const a=JSON.parse(t);return Array.isArray(a)?a.map(s=>typeof s=="object"&&s.sport_key?s.sport_key:s):[a]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const a=Math.min(t.length,3);let s="";for(let r=0;r<a;r++){const n=t[r].key,o=nt.find(l=>l.key===n),i=o?o.group:"default";s+=`<bma-sport-icon sport="${n}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(s+=`<span class="sport-count">+${t.length-3}</span>`),s}render(){const t=this.getTheme(),a=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${Qe()}
        ${ga()}
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
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",dg);class ug extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,a,s){if(a!==s){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Ss.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",a=parseFloat(t);return isNaN(a)?"0.00":a.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{ce.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const a=this.shadowRoot.querySelector(".content_stake_text input");a&&a.addEventListener("input",s=>{const r=s.target.value;this.setAttribute("data-stake",r)})}render(){this.shadowRoot.innerHTML=`
      <style>
        ${Qe()}
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",ug);class pg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing odds_markets:",a),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Ce.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing scoreboard:",a),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const a=nt.find(s=>s.key===t);return a?a.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing tournament tags:",a),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const s=this.scoreboard;if(!s||!s.time_remaining)return!1;const r=s.time_remaining.toLowerCase();return r==="in progress"||r.includes("q")||r.includes("half")||r.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Ce.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const a=this.shadowRoot?.querySelector(".countdown");a&&(a.textContent=t)}attributeChangedCallback(t,a,s){a!==s&&this.render()}formatDate(t){if(!t)return"TBD";let a=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z")),a.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,a=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&a.setTime(new Date(this.scheduledAt+"Z").getTime());const s=a-t;if(s<=0)return"";const r=Math.floor(s/(1e3*60*60)),n=Math.floor(s%(1e3*60*60)/(1e3*60));return r>24?`${Math.floor(r/24)}d ${r%24}h`:r>0?`${r}h ${n}m`:n>5?`${n} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const a=this.scoreboard;if(a&&a.time_remaining){const s=a.time_remaining.toLowerCase();if(s==="final")return{type:"final",text:"Final",color:"#969696"};if(s==="in progress"||s.includes("q")||s.includes("half")||s.includes("period")){const r=a.home_score!==void 0&&a.home_score!==null||a.away_score!==void 0&&a.away_score!==null,n=a.period!==void 0&&a.period!==null&&a.period!==0;if(r||n)return{type:"live",text:a.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let s=this.scheduledAt;if(!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z"),new Date(s)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,a,s,r,n){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:a,team:s,price:r,point:n,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,a,s,r,n=!1){if(!s)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const o=s.price,i=s.point;let l="";return t==="spread"?l=`${i>0?`+${i}`:i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?l=o:t==="total"&&(l=`${r}${i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${n?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${a}"
                    data-price="${o}"
                    ${i?`data-point="${i}"`:""}
                    ${n?'data-disabled="true"':""}>
            ${l}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const a=this.isMatchInProgressLocked(),s=this.isDisabled||a,r=this.getGameStatus(),n=this.scoreboard,o=n?.home_score||0,i=n?.away_score||0,l=r?.type==="live"||r?.type==="final",c=parseInt(o),d=parseInt(i),u=r?.type==="final",p=r?.type==="live",f=l&&u&&c>d,g=l&&u&&d>c,_=l&&p&&c>d,y=l&&p&&d>c,m=t?.spreads?.outcomes?.find(P=>P.name===this.homeTeam),h=t?.spreads?.outcomes?.find(P=>P.name===this.awayTeam),b=t?.h2h?.outcomes?.find(P=>P.name===this.homeTeam),w=t?.h2h?.outcomes?.find(P=>P.name===this.awayTeam),v=t?.totals?.outcomes?.find(P=>P.name==="Over"),S=t?.totals?.outcomes?.find(P=>P.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                ${Qe()}
                ${ga()}

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
                            ${l?`<span class="team-score ${_?"score--leading":""} ${y?"score--trailing":""}">${o}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","home",m,null,s)}
                                ${this.renderButton("money","home",b,null,s)}
                                ${this.renderButton("total","under",S,"U",s)}
                            </div>
                        `}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${g?"team--winner":""} ${f?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${l?`<span class="team-score ${y?"score--leading":""} ${_?"score--trailing":""}">${i}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","away",h,null,s)}
                                ${this.renderButton("money","away",w,null,s)}
                                ${this.renderButton("total","over",v,"O",s)}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(P=>{const E=P.dataset.betType,T=P.dataset.team,x=P.dataset.price,O=P.dataset.point||null;P.addEventListener("click",$=>this.handleButtonClick($,E,T,x,O))})}}customElements.define("bma-bet-match-card",pg);class fg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Ce.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,a,s){a!==s&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(a){return console.warn("[bma-match-status] Failed to parse scoreboard data:",a),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=nt.find(a=>a.key===this.sportId);return t?t.group:""}get theme(){return Ce.theme}get isDark(){return Ce.isDark}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let a=this.scheduledAt;!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a=a+"Z");const r=new Date(a)-t;if(r<=0)return"";const n=Math.floor(r/(1e3*60*60)),o=Math.floor(r%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,a=this.homeScore!==null&&this.awayScore!==null;let s=!1;if(this.scheduledAt){let i=this.scheduledAt;!i.includes("Z")&&!i.match(/[+-]\d{2}:\d{2}$/)&&(i=i+"Z");const l=new Date(i),c=new Date(Date.now()-300*1e3);s=l<c}let r="UPCOMING",n=null;if(t?.time_remaining){const i=t.time_remaining;i==="Final"?(r="FINAL",n="Final"):i==="In Progress"?(r="IN_PROGRESS",n="In Progress"):(r="IN_PROGRESS",n=i)}else a&&s?(r="FINAL",n="Final"):(r="UPCOMING",n="Upcoming");const o=r==="UPCOMING"?this.getCountdownText():"";return{status:r,timeRemaining:n,countdown:o}}render(){const{status:t,timeRemaining:a,countdown:s}=this.getMatchStatus(),r=this.homeScore!==null&&this.awayScore!==null,n=this.scheduledAt?Ss.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=parseInt(this.homeScore),i=parseInt(this.awayScore),l=r&&t==="FINAL"&&o>i,c=r&&t==="FINAL"&&i>o;this.shadowRoot.innerHTML=`
      <style>
        ${Qe()}

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
    `}}customElements.define("bma-match-status",fg);class oa extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",a),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-leaderboard-card] Error parsing user_matches:",a),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Ce.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&(this.render(),this.attachEventListeners())}toggleExpanded(){oa.currentlyExpanded&&oa.currentlyExpanded!==this&&oa.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),a.classList.add("expanded"),oa.currentlyExpanded=this):(t.classList.remove("open"),a.classList.remove("expanded"),oa.currentlyExpanded===this&&(oa.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),a&&a.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",a=>{a.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let a=0,s=0,r=0,n=0,o=0;return t.forEach(i=>{const l=i.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?a++:s++:(r++,n+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:a,losses:s,pending:r,total:a+s+r,pendingStakes:n,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,a=this.userMatches,s=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const r=t.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(s)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(r.length===0){if(!s){const l=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);if(l>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${l} pending bet${l!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const n={};a.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(n[c]=l)});const o={};r.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=n[c];if(d){o[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=nt.find(f=>f.key===u);o[c].sportKey=p?.group||"default"}o[c].bets.push(l)});let i="";if(Object.keys(o).forEach(l=>{const c=o[l],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;i+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const g=f.bet||[];if(g.length===0)return;const _=g[0];Object.keys(_).filter(m=>m!=="short_title").forEach(m=>{const h=_[m];if(!h||typeof h!="object")return;const b=(h.type||"").toUpperCase(),w=parseFloat(h.stake||h.wager||0).toFixed(2),v=h.odds||"-",S=v>0?`+${v}`:`${v}`,P=parseFloat(h.payout||0).toFixed(2),E=h.reconciled===!0;let T="pending",x="Pending";E&&Number(P)>0?(T="won",x="Won"):E&&Number(P)===0?(T="lost",x="Lost"):E&&(T="reconciled",x="Settled"),i+=`<div class="bet-item bet-item--${T}">
                        <div class="bet-item__header">
                            <span class="bet-item__team">${m}</span>
                            <span class="bet-status-badge ${T}">${x}</span>
                        </div>
                        <div class="bet-item__detail">
                            <span>${b}</span>
                            <span>Stake: $${w}</span>
                            <span>Odds: ${S}</span>
                            <span class="${T==="won"?"payout-win":T==="lost"?"payout-loss":""}">Payout: $${P}</span>
                        </div>
                    </div>`})})}),!s){const l=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);l>0&&(i+=`<p class="hidden-bets-note">+ ${l} pending bet${l!==1?"s":""} hidden until settled</p>`)}return i}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",a=this.unqualified?"leaderboard-card--unqualified":"",s=parseFloat(this.startingDollars||0),r=this.combinedBetslips;let n=0,o=0,i=0;r.forEach(_=>{const y=_.bet||[];if(y.length===0)return;const m=y[0];Object.keys(m).filter(h=>h!=="short_title").forEach(h=>{const b=m[h];if(!b||typeof b!="object")return;const w=parseFloat(b.stake||0),v=parseFloat(b.payout||0);n+=w,b.reconciled===!0?i+=v:o+=w})});const l=Math.max(0,s-n),c=s-n+o+i,d=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",u=c-s,p=u>=0?"+":"",f=u>0?"profit-up":u<0?"profit-down":"profit-even",g=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${Qe()}
                ${ga()}

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
        `}}customElements.define("bma-leaderboard-card",oa);class hu{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:a,scope:s}=t.Bet,{home_team_id:r,home_team_score:n,away_team_id:o,away_team_score:i}=t.Match,l=a?.toUpperCase()||"",c=parseFloat(n)||0,d=parseFloat(i)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${r} (${c})`,away:`${o} (${d})`,scope:s}),l){case"MONEY":return this._evaluateMoneyline(s.team_id,r,o,c,d);case"SPREAD":return this._evaluateSpread(s.team_id,s.point,r,o,c,d);case"TOTAL":return this._evaluateTotal(s.over,s.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,a,s,r,n){const o=t===a,i=t===s;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=r>n,c=n>r;if(r===n)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,a,s,r,n,o){const i=t===s,l=t===r;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(a)||0;let d=n,u=o;i?d=n+c:u=o+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const _=i&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${_?"WON":"LOST"}`),_}static _evaluateTotal(t,a,s,r){const n=s+r,o=t&&t!=="";if(!o&&!(a&&a!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:a);if(n===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=n>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${n}) - ${c?"WON":"LOST"}`)):(c=n<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${n}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:a,odds:s,stake:r}=t.Bet,n=a?.toUpperCase()||"",o=parseFloat(s)||0,i=parseFloat(r)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(n){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",n),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,a){let s=0;return t>0?s=a*(t/100):t<0?s=a/(Math.abs(t)/100):s=0,a+s}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function sl(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Ho(e={},t={}){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(s=>a.indexOf(s)<0).forEach(s=>{typeof e[s]>"u"?e[s]=t[s]:sl(t[s])&&sl(e[s])&&Object.keys(t[s]).length>0&&Ho(e[s],t[s])})}const mu={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function $t(){const e=typeof document<"u"?document:{};return Ho(e,mu),e}const hg={document:mu,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ye(){const e=typeof window<"u"?window:{};return Ho(e,hg),e}function mg(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function gg(e){const t=e;Object.keys(t).forEach(a=>{try{t[a]=null}catch{}try{delete t[a]}catch{}})}function gu(e,t=0){return setTimeout(e,t)}function Nr(){return Date.now()}function bg(e){const t=Ye();let a;return t.getComputedStyle&&(a=t.getComputedStyle(e,null)),!a&&e.currentStyle&&(a=e.currentStyle),a||(a=e.style),a}function _g(e,t="x"){const a=Ye();let s,r,n;const o=bg(e);return a.WebKitCSSMatrix?(r=o.transform||o.webkitTransform,r.split(",").length>6&&(r=r.split(", ").map(i=>i.replace(",",".")).join(", ")),n=new a.WebKitCSSMatrix(r==="none"?"":r)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=n.toString().split(",")),t==="x"&&(a.WebKitCSSMatrix?r=n.m41:s.length===16?r=parseFloat(s[12]):r=parseFloat(s[4])),t==="y"&&(a.WebKitCSSMatrix?r=n.m42:s.length===16?r=parseFloat(s[13]):r=parseFloat(s[5])),r||0}function Ms(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function yg(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function at(...e){const t=Object(e[0]);for(let a=1;a<e.length;a+=1){const s=e[a];if(s!=null&&!yg(s)){const r=Object.keys(Object(s)).filter(n=>n!=="__proto__"&&n!=="constructor"&&n!=="prototype");for(let n=0,o=r.length;n<o;n+=1){const i=r[n],l=Object.getOwnPropertyDescriptor(s,i);l!==void 0&&l.enumerable&&(Ms(t[i])&&Ms(s[i])?s[i].__swiper__?t[i]=s[i]:at(t[i],s[i]):!Ms(t[i])&&Ms(s[i])?(t[i]={},s[i].__swiper__?t[i]=s[i]:at(t[i],s[i])):t[i]=s[i])}}}return t}function Da(e,t,a){e.style.setProperty(t,a)}function bu({swiper:e,targetPosition:t,side:a}){const s=Ye(),r=-e.translate;let n=null,o;const i=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const l=t>r?"next":"prev",c=(u,p)=>l==="next"&&u>=p||l==="prev"&&u<=p,d=()=>{o=new Date().getTime(),n===null&&(n=o);const u=Math.max(Math.min((o-n)/i,1),0),p=.5-Math.cos(u*Math.PI)/2;let f=r+p*(t-r);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[a]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:f})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(d)};d()}function Ct(e,t=""){const a=Ye(),s=[...e.children];return a.HTMLSlotElement&&e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),t?s.filter(r=>r.matches(t)):s}function vg(e,t){const a=[t];for(;a.length>0;){const s=a.shift();if(e===s)return!0;a.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function wg(e,t){const a=Ye();let s=t.contains(e);return!s&&a.HTMLSlotElement&&t instanceof HTMLSlotElement&&(s=[...t.assignedElements()].includes(e),s||(s=vg(e,t))),s}function Dr(e){try{console.warn(e);return}catch{}}function Ir(e,t=[]){const a=document.createElement(e);return a.classList.add(...Array.isArray(t)?t:mg(t)),a}function Tg(e,t){const a=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;t?s.matches(t)&&a.push(s):a.push(s),e=s}return a}function Sg(e,t){const a=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;t?s.matches(t)&&a.push(s):a.push(s),e=s}return a}function ia(e,t){return Ye().getComputedStyle(e,null).getPropertyValue(t)}function Br(e){let t=e,a;if(t){for(a=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(a+=1);return a}}function _u(e,t){const a=[];let s=e.parentElement;for(;s;)t?s.matches(t)&&a.push(s):a.push(s),s=s.parentElement;return a}function go(e,t,a){const s=Ye();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function It(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function rl(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:a=>a}).createHTML(t):e.innerHTML=t}let Mn;function xg(){const e=Ye(),t=$t();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function yu(){return Mn||(Mn=xg()),Mn}let Ln;function Eg({userAgent:e}={}){const t=yu(),a=Ye(),s=a.navigator.platform,r=e||a.navigator.userAgent,n={ios:!1,android:!1},o=a.screen.width,i=a.screen.height,l=r.match(/(Android);?[\s\/]+([\d.]+)?/);let c=r.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=r.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=s==="Win32";let f=s==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&g.indexOf(`${o}x${i}`)>=0&&(c=r.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!p&&(n.os="android",n.android=!0),(c||u||d)&&(n.os="ios",n.ios=!0),n}function vu(e={}){return Ln||(Ln=Eg(e)),Ln}let Nn;function kg(){const e=Ye(),t=vu();let a=!1;function s(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(s()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));a=l<16||l===16&&c<2}}const r=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),n=s(),o=n||r&&t.ios;return{isSafari:a||n,needPerspectiveFix:a,need3dFix:o,isWebView:r}}function wu(){return Nn||(Nn=kg()),Nn}function Pg({swiper:e,on:t,emit:a}){const s=Ye();let r=null,n=null;const o=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},i=()=>{!e||e.destroyed||!e.initialized||(r=new ResizeObserver(d=>{n=s.requestAnimationFrame(()=>{const{width:u,height:p}=e;let f=u,g=p;d.forEach(({contentBoxSize:_,contentRect:y,target:m})=>{m&&m!==e.el||(f=y?y.width:(_[0]||_).inlineSize,g=y?y.height:(_[0]||_).blockSize)}),(f!==u||g!==p)&&o()})}),r.observe(e.el))},l=()=>{n&&s.cancelAnimationFrame(n),r&&r.unobserve&&e.el&&(r.unobserve(e.el),r=null)},c=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){i();return}s.addEventListener("resize",o),s.addEventListener("orientationchange",c)}),t("destroy",()=>{l(),s.removeEventListener("resize",o),s.removeEventListener("orientationchange",c)})}function Ag({swiper:e,extendParams:t,on:a,emit:s}){const r=[],n=Ye(),o=(c,d={})=>{const u=n.MutationObserver||n.WebkitMutationObserver,p=new u(f=>{if(e.__preventObserver__)return;if(f.length===1){s("observerUpdate",f[0]);return}const g=function(){s("observerUpdate",f[0])};n.requestAnimationFrame?n.requestAnimationFrame(g):n.setTimeout(g,0)});p.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),r.push(p)},i=()=>{if(e.params.observer){if(e.params.observeParents){const c=_u(e.hostEl);for(let d=0;d<c.length;d+=1)o(c[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},l=()=>{r.forEach(c=>{c.disconnect()}),r.splice(0,r.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",i),a("destroy",l)}var Cg={on(e,t,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const r=a?"unshift":"push";return e.split(" ").forEach(n=>{s.eventsListeners[n]||(s.eventsListeners[n]=[]),s.eventsListeners[n][r](t)}),s},once(e,t,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function r(...n){s.off(e,r),r.__emitterProxy&&delete r.__emitterProxy,t.apply(s,n)}return r.__emitterProxy=t,s.on(e,r,a)},onAny(e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const s=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[s](e),a},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off(e,t){const a=this;return!a.eventsListeners||a.destroyed||!a.eventsListeners||e.split(" ").forEach(s=>{typeof t>"u"?a.eventsListeners[s]=[]:a.eventsListeners[s]&&a.eventsListeners[s].forEach((r,n)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&a.eventsListeners[s].splice(n,1)})}),a},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let a,s,r;return typeof e[0]=="string"||Array.isArray(e[0])?(a=e[0],s=e.slice(1,e.length),r=t):(a=e[0].events,s=e[0].data,r=e[0].context||t),s.unshift(r),(Array.isArray(a)?a:a.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(i=>{i.apply(r,[o,...s])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(i=>{i.apply(r,s)})}),t}};function Og(){const e=this;let t,a;const s=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=s.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?a=e.params.height:a=s.clientHeight,!(t===0&&e.isHorizontal()||a===0&&e.isVertical())&&(t=t-parseInt(ia(s,"padding-left")||0,10)-parseInt(ia(s,"padding-right")||0,10),a=a-parseInt(ia(s,"padding-top")||0,10)-parseInt(ia(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(a)&&(a=0),Object.assign(e,{width:t,height:a,size:e.isHorizontal()?t:a}))}function $g(){const e=this;function t(x,O){return parseFloat(x.getPropertyValue(e.getDirectionLabel(O))||0)}const a=e.params,{wrapperEl:s,slidesEl:r,rtlTranslate:n,wrongRTL:o}=e,i=e.virtual&&a.virtual.enabled,l=i?e.virtual.slides.length:e.slides.length,c=Ct(r,`.${e.params.slideClass}, swiper-slide`),d=i?e.virtual.slides.length:c.length;let u=[];const p=[],f=[];let g=a.slidesOffsetBefore;typeof g=="function"&&(g=a.slidesOffsetBefore.call(e));let _=a.slidesOffsetAfter;typeof _=="function"&&(_=a.slidesOffsetAfter.call(e));const y=e.snapGrid.length,m=e.slidesGrid.length,h=e.size-g-_;let b=a.spaceBetween,w=-g,v=0,S=0;if(typeof h>"u")return;typeof b=="string"&&b.indexOf("%")>=0?b=parseFloat(b.replace("%",""))/100*h:typeof b=="string"&&(b=parseFloat(b)),e.virtualSize=-b-g-_,c.forEach(x=>{n?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(Da(s,"--swiper-centered-offset-before",""),Da(s,"--swiper-centered-offset-after","")),a.cssMode&&(Da(s,"--swiper-slides-offset-before",`${g}px`),Da(s,"--swiper-slides-offset-after",`${_}px`));const P=a.grid&&a.grid.rows>1&&e.grid;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let E;const T=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(x=>typeof a.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<d;x+=1){E=0;const O=c[x];if(!(O&&(P&&e.grid.updateSlide(x,O,c),ia(O,"display")==="none"))){if(i&&a.slidesPerView==="auto")a.virtual.slidesPerViewAutoSlideSize&&(E=a.virtual.slidesPerViewAutoSlideSize),E&&O&&(a.roundLengths&&(E=Math.floor(E)),O.style[e.getDirectionLabel("width")]=`${E}px`);else if(a.slidesPerView==="auto"){T&&(O.style[e.getDirectionLabel("width")]="");const $=getComputedStyle(O),L=O.style.transform,U=O.style.webkitTransform;if(L&&(O.style.transform="none"),U&&(O.style.webkitTransform="none"),a.roundLengths)E=e.isHorizontal()?go(O,"width"):go(O,"height");else{const K=t($,"width"),re=t($,"padding-left"),J=t($,"padding-right"),G=t($,"margin-left"),Y=t($,"margin-right"),j=$.getPropertyValue("box-sizing");if(j&&j==="border-box")E=K+G+Y;else{const{clientWidth:I,offsetWidth:H}=O;E=K+re+J+G+Y+(H-I)}}L&&(O.style.transform=L),U&&(O.style.webkitTransform=U),a.roundLengths&&(E=Math.floor(E))}else E=(h-(a.slidesPerView-1)*b)/a.slidesPerView,a.roundLengths&&(E=Math.floor(E)),O&&(O.style[e.getDirectionLabel("width")]=`${E}px`);O&&(O.swiperSlideSize=E),f.push(E),a.centeredSlides?(w=w+E/2+v/2+b,v===0&&x!==0&&(w=w-h/2-b),x===0&&(w=w-h/2-b),Math.abs(w)<1/1e3&&(w=0),a.roundLengths&&(w=Math.floor(w)),S%a.slidesPerGroup===0&&u.push(w),p.push(w)):(a.roundLengths&&(w=Math.floor(w)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&u.push(w),p.push(w),w=w+E+b),e.virtualSize+=E+b,v=E,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,h)+_,n&&o&&(a.effect==="slide"||a.effect==="coverflow")&&(s.style.width=`${e.virtualSize+b}px`),a.setWrapperSize&&(s.style[e.getDirectionLabel("width")]=`${e.virtualSize+b}px`),P&&e.grid.updateWrapperSize(E,u),!a.centeredSlides){const x=a.slidesPerView!=="auto"&&a.slidesPerView%1!==0,O=a.snapToSlideEdge&&!a.loop&&(a.slidesPerView==="auto"||x);let $=u.length;if(O){let U;if(a.slidesPerView==="auto"){U=1;let K=0;for(let re=f.length-1;re>=0&&(K+=f[re]+(re<f.length-1?b:0),K<=h);re-=1)U=f.length-re}else U=Math.floor(a.slidesPerView);$=Math.max(d-U,0)}const L=[];for(let U=0;U<u.length;U+=1){let K=u[U];a.roundLengths&&(K=Math.floor(K)),O?U<=$&&L.push(K):u[U]<=e.virtualSize-h&&L.push(K)}u=L,Math.floor(e.virtualSize-h)-Math.floor(u[u.length-1])>1&&(O||u.push(e.virtualSize-h))}if(i&&a.loop){const x=f[0]+b;if(a.slidesPerGroup>1){const O=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),$=x*a.slidesPerGroup;for(let L=0;L<O;L+=1)u.push(u[u.length-1]+$)}for(let O=0;O<e.virtual.slidesBefore+e.virtual.slidesAfter;O+=1)a.slidesPerGroup===1&&u.push(u[u.length-1]+x),p.push(p[p.length-1]+x),e.virtualSize+=x}if(u.length===0&&(u=[0]),b!==0){const x=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");c.filter((O,$)=>!a.cssMode||a.loop?!0:$!==c.length-1).forEach(O=>{O.style[x]=`${b}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let x=0;f.forEach($=>{x+=$+(b||0)}),x-=b;const O=x>h?x-h:0;u=u.map($=>$<=0?-g:$>O?O+_:$)}if(a.centerInsufficientSlides){let x=0;if(f.forEach(O=>{x+=O+(b||0)}),x-=b,x<h){const O=(h-x)/2;u.forEach(($,L)=>{u[L]=$-O}),p.forEach(($,L)=>{p[L]=$+O})}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:p,slidesSizesGrid:f}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){Da(s,"--swiper-centered-offset-before",`${-u[0]}px`),Da(s,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const x=-e.snapGrid[0],O=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map($=>$+x),e.slidesGrid=e.slidesGrid.map($=>$+O)}if(d!==l&&e.emit("slidesLengthChange"),u.length!==y&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==m&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!i&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const x=`${a.containerModifierClass}backface-hidden`,O=e.el.classList.contains(x);d<=a.maxBackfaceHiddenSlides?O||e.el.classList.add(x):O&&e.el.classList.remove(x)}}function Rg(e){const t=this,a=[],s=t.virtual&&t.params.virtual.enabled;let r=0,n;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=i=>s?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{a.push(i)});else for(n=0;n<Math.ceil(t.params.slidesPerView);n+=1){const i=t.activeIndex+n;if(i>t.slides.length&&!s)break;a.push(o(i))}else a.push(o(t.activeIndex));for(n=0;n<a.length;n+=1)if(typeof a[n]<"u"){const i=a[n].offsetHeight;r=i>r?i:r}(r||r===0)&&(t.wrapperEl.style.height=`${r}px`)}function Mg(){const e=this,t=e.slides,a=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-a-e.cssOverflowAdjustment()}const nl=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function Lg(e=this&&this.translate||0){const t=this,a=t.params,{slides:s,rtlTranslate:r,snapGrid:n}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;r&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=a.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<s.length;l+=1){const c=s[l];let d=c.swiperSlideOffset;a.cssMode&&a.centeredSlides&&(d-=s[0].swiperSlideOffset);const u=(o+(a.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),p=(o-n[0]+(a.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),f=-(o-d),g=f+t.slidesSizesGrid[l],_=f>=0&&f<=t.size-t.slidesSizesGrid[l],y=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;y&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),nl(c,y,a.slideVisibleClass),nl(c,_,a.slideFullyVisibleClass),c.progress=r?-u:u,c.originalProgress=r?-p:p}}function Ng(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const a=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:r,isBeginning:n,isEnd:o,progressLoop:i}=t;const l=n,c=o;if(s===0)r=0,n=!0,o=!0;else{r=(e-t.minTranslate())/s;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;n=d||r<=0,o=u||r>=1,d&&(r=0),u&&(r=1)}if(a.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],g=t.slidesGrid[t.slidesGrid.length-1],_=Math.abs(e);_>=p?i=(_-p)/g:i=(_+g-f)/g,i>1&&(i-=1)}Object.assign(t,{progress:r,progressLoop:i,isBeginning:n,isEnd:o}),(a.watchSlidesProgress||a.centeredSlides&&a.autoHeight)&&t.updateSlidesProgress(e),n&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!n||c&&!o)&&t.emit("fromEdge"),t.emit("progress",r)}const Dn=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function Dg(){const e=this,{slides:t,params:a,slidesEl:s,activeIndex:r}=e,n=e.virtual&&a.virtual.enabled,o=e.grid&&a.grid&&a.grid.rows>1,i=u=>Ct(s,`.${a.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(n)if(a.loop){let u=r-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${u}"]`)}else l=i(`[data-swiper-slide-index="${r}"]`);else o?(l=t.find(u=>u.column===r),d=t.find(u=>u.column===r+1),c=t.find(u=>u.column===r-1)):l=t[r];l&&(o||(d=Sg(l,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!d&&(d=t[0]),c=Tg(l,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{Dn(u,u===l,a.slideActiveClass),Dn(u,u===d,a.slideNextClass),Dn(u,u===c,a.slidePrevClass)}),e.emitSlidesClasses()}const xr=(e,t)=>{if(!e||e.destroyed||!e.params)return;const a=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,s=t.closest(a());if(s){let r=s.querySelector(`.${e.params.lazyPreloaderClass}`);!r&&e.isElement&&(s.shadowRoot?r=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(r=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),r&&!r.lazyPreloaderManaged&&r.remove())})),r&&!r.lazyPreloaderManaged&&r.remove()}},In=(e,t)=>{if(!e.slides[t])return;const a=e.slides[t].querySelector('[loading="lazy"]');a&&a.removeAttribute("loading")},bo=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const a=e.slides.length;if(!a||!t||t<0)return;t=Math.min(t,a);const s=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),r=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=r,i=[o-t];i.push(...Array.from({length:t}).map((l,c)=>o+s+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&In(e,c)});return}const n=r+s-1;if(e.params.rewind||e.params.loop)for(let o=r-t;o<=n+t;o+=1){const i=(o%a+a)%a;(i<r||i>n)&&In(e,i)}else for(let o=Math.max(r-t,0);o<=Math.min(n+t,a-1);o+=1)o!==r&&(o>n||o<r)&&In(e,o)};function Ig(e){const{slidesGrid:t,params:a}=e,s=e.rtlTranslate?e.translate:-e.translate;let r;for(let n=0;n<t.length;n+=1)typeof t[n+1]<"u"?s>=t[n]&&s<t[n+1]-(t[n+1]-t[n])/2?r=n:s>=t[n]&&s<t[n+1]&&(r=n+1):s>=t[n]&&(r=n);return a.normalizeSlideIndex&&(r<0||typeof r>"u")&&(r=0),r}function Bg(e){const t=this,a=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:r,activeIndex:n,realIndex:o,snapIndex:i}=t;let l=e,c;const d=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=Ig(t)),s.indexOf(a)>=0)c=s.indexOf(a);else{const f=Math.min(r.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/r.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===n&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===n&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&r.grid&&r.grid.rows>1;let p;if(t.virtual&&r.virtual.enabled)r.loop?p=d(l):p=l;else if(u){const f=t.slides.find(_=>_.column===l);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),p=Math.floor(g/r.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:n,activeIndex:l}),t.initialized&&bo(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function Fg(e,t){const a=this,s=a.params;let r=e.closest(`.${s.slideClass}, swiper-slide`);!r&&a.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!r&&i.matches&&i.matches(`.${s.slideClass}, swiper-slide`)&&(r=i)});let n=!1,o;if(r){for(let i=0;i<a.slides.length;i+=1)if(a.slides[i]===r){n=!0,o=i;break}}if(r&&n)a.clickedSlide=r,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(r.getAttribute("data-swiper-slide-index"),10):a.clickedIndex=o;else{a.clickedSlide=void 0,a.clickedIndex=void 0;return}s.slideToClickedSlide&&a.clickedIndex!==void 0&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}var zg={updateSize:Og,updateSlides:$g,updateAutoHeight:Rg,updateSlidesOffset:Mg,updateSlidesProgress:Lg,updateProgress:Ng,updateSlidesClasses:Dg,updateActiveIndex:Bg,updateClickedSlide:Fg};function jg(e=this.isHorizontal()?"x":"y"){const t=this,{params:a,rtlTranslate:s,translate:r,wrapperEl:n}=t;if(a.virtualTranslate)return s?-r:r;if(a.cssMode)return r;let o=_g(n,e);return o+=t.cssOverflowAdjustment(),s&&(o=-o),o||0}function Hg(e,t){const a=this,{rtlTranslate:s,params:r,wrapperEl:n,progress:o}=a;let i=0,l=0;const c=0;a.isHorizontal()?i=s?-e:e:l=e,r.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?i:l,r.cssMode?n[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-i:-l:r.virtualTranslate||(a.isHorizontal()?i-=a.cssOverflowAdjustment():l-=a.cssOverflowAdjustment(),n.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let d;const u=a.maxTranslate()-a.minTranslate();u===0?d=0:d=(e-a.minTranslate())/u,d!==o&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)}function Ug(){return-this.snapGrid[0]}function qg(){return-this.snapGrid[this.snapGrid.length-1]}function Gg(e=0,t=this.params.speed,a=!0,s=!0,r){const n=this,{params:o,wrapperEl:i}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const l=n.minTranslate(),c=n.maxTranslate();let d;if(s&&e>l?d=l:s&&e<c?d=c:d=e,n.updateProgress(d),o.cssMode){const u=n.isHorizontal();if(t===0)i[u?"scrollLeft":"scrollTop"]=-d;else{if(!n.support.smoothScroll)return bu({swiper:n,targetPosition:-d,side:u?"left":"top"}),!0;i.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(n.setTransition(0),n.setTranslate(d),a&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),a&&(n.emit("beforeTransitionStart",t,r),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(p){!n||n.destroyed||p.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,a&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Vg={getTranslate:jg,setTranslate:Hg,minTranslate:Ug,maxTranslate:qg,translateTo:Gg};function Kg(e,t){const a=this;a.params.cssMode||(a.wrapperEl.style.transitionDuration=`${e}ms`,a.wrapperEl.style.transitionDelay=e===0?"0ms":""),a.emit("setTransition",e,t)}function Tu({swiper:e,runCallbacks:t,direction:a,step:s}){const{activeIndex:r,previousIndex:n}=e;let o=a;o||(r>n?o="next":r<n?o="prev":o="reset"),e.emit(`transition${s}`),t&&o==="reset"?e.emit(`slideResetTransition${s}`):t&&r!==n&&(e.emit(`slideChangeTransition${s}`),o==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function Yg(e=!0,t){const a=this,{params:s}=a;s.cssMode||(s.autoHeight&&a.updateAutoHeight(),Tu({swiper:a,runCallbacks:e,direction:t,step:"Start"}))}function Wg(e=!0,t){const a=this,{params:s}=a;a.animating=!1,!s.cssMode&&(a.setTransition(0),Tu({swiper:a,runCallbacks:e,direction:t,step:"End"}))}var Jg={setTransition:Kg,transitionStart:Yg,transitionEnd:Wg};function Xg(e=0,t,a=!0,s,r){typeof e=="string"&&(e=parseInt(e,10));const n=this;let o=e;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:g}=n;if(!g&&!s&&!r||n.destroyed||n.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=n.params.speed);const _=Math.min(n.params.slidesPerGroupSkip,o);let y=_+Math.floor((o-_)/n.params.slidesPerGroup);y>=l.length&&(y=l.length-1);const m=-l[y];if(i.normalizeSlideIndex)for(let P=0;P<c.length;P+=1){const E=-Math.floor(m*100),T=Math.floor(c[P]*100),x=Math.floor(c[P+1]*100);typeof c[P+1]<"u"?E>=T&&E<x-(x-T)/2?o=P:E>=T&&E<x&&(o=P+1):E>=T&&(o=P)}if(n.initialized&&o!==u&&(!n.allowSlideNext&&(p?m>n.translate&&m>n.minTranslate():m<n.translate&&m<n.minTranslate())||!n.allowSlidePrev&&m>n.translate&&m>n.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&a&&n.emit("beforeSlideChangeStart"),n.updateProgress(m);let h;o>u?h="next":o<u?h="prev":h="reset";const b=n.virtual&&n.params.virtual.enabled;if(!(b&&r)&&(p&&-m===n.translate||!p&&m===n.translate))return n.updateActiveIndex(o),i.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),i.effect!=="slide"&&n.setTranslate(m),h!=="reset"&&(n.transitionStart(a,h),n.transitionEnd(a,h)),!1;if(i.cssMode){const P=n.isHorizontal(),E=p?m:-m;if(t===0)b&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),b&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[P?"scrollLeft":"scrollTop"]=E})):f[P?"scrollLeft":"scrollTop"]=E,b&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return bu({swiper:n,targetPosition:E,side:P?"left":"top"}),!0;f.scrollTo({[P?"left":"top"]:E,behavior:"smooth"})}return!0}const S=wu().isSafari;return b&&!r&&S&&n.isElement&&n.virtual.update(!1,!1,o),n.setTransition(t),n.setTranslate(m),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(a,h),t===0?n.transitionEnd(a,h):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(E){!n||n.destroyed||E.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(a,h))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Qg(e=0,t,a=!0,s){typeof e=="string"&&(e=parseInt(e,10));const r=this;if(r.destroyed)return;typeof t>"u"&&(t=r.params.speed);const n=r.grid&&r.params.grid&&r.params.grid.rows>1;let o=e;if(r.params.loop)if(r.virtual&&r.params.virtual.enabled)o=o+r.virtual.slidesBefore;else{let i;if(n){const _=o*r.params.grid.rows;i=r.slides.find(y=>y.getAttribute("data-swiper-slide-index")*1===_).column}else i=r.getSlideIndexByData(o);const l=n?Math.ceil(r.slides.length/r.params.grid.rows):r.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:u}=r.params,p=c||!!d||!!u;let f=r.params.slidesPerView;f==="auto"?f=r.slidesPerViewDynamic():(f=Math.ceil(parseFloat(r.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let g=l-i<f;if(p&&(g=g||i<Math.ceil(f/2)),s&&p&&r.params.slidesPerView!=="auto"&&!n&&(g=!1),g){const _=p?i<r.activeIndex?"prev":"next":i-r.activeIndex-1<r.params.slidesPerView?"next":"prev";r.loopFix({direction:_,slideTo:!0,activeSlideIndex:_==="next"?i+1:i-l+1,slideRealIndex:_==="next"?r.realIndex:void 0})}if(n){const _=o*r.params.grid.rows;o=r.slides.find(y=>y.getAttribute("data-swiper-slide-index")*1===_).column}else o=r.getSlideIndexByData(o)}return requestAnimationFrame(()=>{r.slideTo(o,t,a,s)}),r}function Zg(e,t=!0,a){const s=this,{enabled:r,params:n,animating:o}=s;if(!r||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);let i=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(i=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<n.slidesPerGroupSkip?1:i,c=s.virtual&&n.virtual.enabled;if(n.loop){if(o&&!c&&n.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,e,t,a)}),!0}return n.rewind&&s.isEnd?s.slideTo(0,e,t,a):s.slideTo(s.activeIndex+l,e,t,a)}function eb(e,t=!0,a){const s=this,{params:r,snapGrid:n,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=s;if(!l||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);const d=s.virtual&&r.virtual.enabled;if(r.loop){if(c&&!d&&r.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const u=i?s.translate:-s.translate;function p(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const f=p(u),g=n.map(h=>p(h)),_=r.freeMode&&r.freeMode.enabled;let y=n[g.indexOf(f)-1];if(typeof y>"u"&&(r.cssMode||_)){let h;n.forEach((b,w)=>{f>=b&&(h=w)}),typeof h<"u"&&(y=_?n[h]:n[h>0?h-1:h])}let m=0;if(typeof y<"u"&&(m=o.indexOf(y),m<0&&(m=s.activeIndex-1),r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(m=m-s.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),r.rewind&&s.isBeginning){const h=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(h,e,t,a)}else if(r.loop&&s.activeIndex===0&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(m,e,t,a)}),!0;return s.slideTo(m,e,t,a)}function tb(e,t=!0,a){const s=this;if(!s.destroyed)return typeof e>"u"&&(e=s.params.speed),s.slideTo(s.activeIndex,e,t,a)}function ab(e,t=!0,a,s=.5){const r=this;if(r.destroyed)return;typeof e>"u"&&(e=r.params.speed);let n=r.activeIndex;const o=Math.min(r.params.slidesPerGroupSkip,n),i=o+Math.floor((n-o)/r.params.slidesPerGroup),l=r.rtlTranslate?r.translate:-r.translate;if(l>=r.snapGrid[i]){const c=r.snapGrid[i],d=r.snapGrid[i+1];l-c>(d-c)*s&&(n+=r.params.slidesPerGroup)}else{const c=r.snapGrid[i-1],d=r.snapGrid[i];l-c<=(d-c)*s&&(n-=r.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,r.slidesGrid.length-1),r.slideTo(n,e,t,a)}function sb(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:a}=e,s=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let r=e.getSlideIndexWhenGrid(e.clickedIndex),n;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;n=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(n):r>(i?(e.slides.length-s)/2-(e.params.grid.rows-1):e.slides.length-s)?(e.loopFix(),r=e.getSlideIndex(Ct(a,`${o}[data-swiper-slide-index="${n}"]`)[0]),gu(()=>{e.slideTo(r)})):e.slideTo(r)}else e.slideTo(r)}var rb={slideTo:Xg,slideToLoop:Qg,slideNext:Zg,slidePrev:eb,slideReset:tb,slideToClosest:ab,slideToClickedSlide:sb};function nb(e,t){const a=this,{params:s,slidesEl:r}=a;if(!s.loop||a.virtual&&a.params.virtual.enabled)return;const n=()=>{Ct(r,`.${s.slideClass}, swiper-slide`).forEach((g,_)=>{g.setAttribute("data-swiper-slide-index",_)})},o=()=>{const f=Ct(r,`.${s.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(a.recalcSlides(),a.updateSlides())},i=a.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||i)&&o();const l=s.slidesPerGroup*(i?s.grid.rows:1),c=a.slides.length%l!==0,d=i&&a.slides.length%s.grid.rows!==0,u=f=>{for(let g=0;g<f;g+=1){const _=a.isElement?Ir("swiper-slide",[s.slideBlankClass]):Ir("div",[s.slideClass,s.slideBlankClass]);a.slidesEl.append(_)}};if(c){if(s.loopAddBlankSlides){const f=l-a.slides.length%l;u(f),a.recalcSlides(),a.updateSlides()}else Dr("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(d){if(s.loopAddBlankSlides){const f=s.grid.rows-a.slides.length%s.grid.rows;u(f),a.recalcSlides(),a.updateSlides()}else Dr("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();const p=s.centeredSlides||!!s.slidesOffsetBefore||!!s.slidesOffsetAfter;a.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function ob({slideRealIndex:e,slideTo:t=!0,direction:a,setTranslate:s,activeSlideIndex:r,initial:n,byController:o,byMousewheel:i}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:p,params:f}=l,{centeredSlides:g,slidesOffsetBefore:_,slidesOffsetAfter:y,initialSlide:m}=f,h=g||!!_||!!y;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){t&&(!h&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):h&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}let b=f.slidesPerView;b==="auto"?b=l.slidesPerViewDynamic():(b=Math.ceil(parseFloat(f.slidesPerView,10)),h&&b%2===0&&(b=b+1));const w=f.slidesPerGroupAuto?b:f.slidesPerGroup;let v=h?Math.max(w,Math.ceil(b/2)):w;v%w!==0&&(v+=w-v%w),v+=f.loopAdditionalSlides,l.loopedSlides=v;const S=l.grid&&f.grid&&f.grid.rows>1;c.length<b+v||l.params.effect==="cards"&&c.length<b+v*2?Dr("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):S&&f.grid.fill==="row"&&Dr("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const P=[],E=[],T=S?Math.ceil(c.length/f.grid.rows):c.length,x=n&&T-m<b&&!h;let O=x?m:l.activeIndex;typeof r>"u"?r=l.getSlideIndex(c.find(G=>G.classList.contains(f.slideActiveClass))):O=r;const $=a==="next"||!a,L=a==="prev"||!a;let U=0,K=0;const J=(S?c[r].column:r)+(h&&typeof s>"u"?-b/2+.5:0);if(J<v){U=Math.max(v-J,w);for(let G=0;G<v-J;G+=1){const Y=G-Math.floor(G/T)*T;if(S){const j=T-Y-1;for(let I=c.length-1;I>=0;I-=1)c[I].column===j&&P.push(I)}else P.push(T-Y-1)}}else if(J+b>T-v){K=Math.max(J-(T-v*2),w),x&&(K=Math.max(K,b-T+m+1));for(let G=0;G<K;G+=1){const Y=G-Math.floor(G/T)*T;S?c.forEach((j,I)=>{j.column===Y&&E.push(I)}):E.push(Y)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<b+v*2&&(E.includes(r)&&E.splice(E.indexOf(r),1),P.includes(r)&&P.splice(P.indexOf(r),1)),L&&P.forEach(G=>{c[G].swiperLoopMoveDOM=!0,p.prepend(c[G]),c[G].swiperLoopMoveDOM=!1}),$&&E.forEach(G=>{c[G].swiperLoopMoveDOM=!0,p.append(c[G]),c[G].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():S&&(P.length>0&&L||E.length>0&&$)&&l.slides.forEach((G,Y)=>{l.grid.updateSlide(Y,G,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),t){if(P.length>0&&L){if(typeof e>"u"){const G=l.slidesGrid[O],j=l.slidesGrid[O+U]-G;i?l.setTranslate(l.translate-j):(l.slideTo(O+Math.ceil(U),0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-j,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-j))}else if(s){const G=S?P.length/f.grid.rows:P.length;l.slideTo(l.activeIndex+G,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(E.length>0&&$)if(typeof e>"u"){const G=l.slidesGrid[O],j=l.slidesGrid[O-K]-G;i?l.setTranslate(l.translate-j):(l.slideTo(O-K,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-j,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-j))}else{const G=S?E.length/f.grid.rows:E.length;l.slideTo(l.activeIndex-G,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!o){const G={slideRealIndex:e,direction:a,setTranslate:s,activeSlideIndex:r,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(Y=>{!Y.destroyed&&Y.params.loop&&Y.loopFix({...G,slideTo:Y.params.slidesPerView===f.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...G,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}l.emit("loopFix")}function ib(){const e=this,{params:t,slidesEl:a}=e;if(!t.loop||!a||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach(r=>{const n=typeof r.swiperSlideIndex>"u"?r.getAttribute("data-swiper-slide-index")*1:r.swiperSlideIndex;s[n]=r}),e.slides.forEach(r=>{r.removeAttribute("data-swiper-slide-index")}),s.forEach(r=>{a.append(r)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var lb={loopCreate:nb,loopFix:ob,loopDestroy:ib};function cb(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const a=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),a.style.cursor="move",a.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function db(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var ub={setGrabCursor:cb,unsetGrabCursor:db};function pb(e,t=this){function a(s){if(!s||s===$t()||s===Ye())return null;s.assignedSlot&&(s=s.assignedSlot);const r=s.closest(e);return!r&&!s.getRootNode?null:r||a(s.getRootNode().host)}return a(t)}function ol(e,t,a){const s=Ye(),{params:r}=e,n=r.edgeSwipeDetection,o=r.edgeSwipeThreshold;return n&&(a<=o||a>=s.innerWidth-o)?n==="prevent"?(t.preventDefault(),!0):!1:!0}function fb(e){const t=this,a=$t();let s=e;s.originalEvent&&(s=s.originalEvent);const r=t.touchEventsData;if(s.type==="pointerdown"){if(r.pointerId!==null&&r.pointerId!==s.pointerId)return;r.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(r.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){ol(t,s,s.targetTouches[0].pageX);return}const{params:n,touches:o,enabled:i}=t;if(!i||!n.simulateTouch&&s.pointerType==="mouse"||t.animating&&n.preventInteractionOnTransition)return;!t.animating&&n.cssMode&&n.loop&&t.loopFix();let l=s.target;if(n.touchEventsTarget==="wrapper"&&!wg(l,t.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||r.isTouched&&r.isMoved)return;const c=!!n.noSwipingClass&&n.noSwipingClass!=="",d=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&d&&(l=d[0]);const u=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,p=!!(s.target&&s.target.shadowRoot);if(n.noSwiping&&(p?pb(u,l):l.closest(u))){t.allowClick=!0;return}if(n.swipeHandler&&!l.closest(n.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;const f=o.currentX,g=o.currentY;if(!ol(t,s,f))return;Object.assign(r,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=g,r.touchStartTime=Nr(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(r.allowThresholdMove=!1);let _=!0;l.matches(r.focusableElements)&&(_=!1,l.nodeName==="SELECT"&&(r.isTouched=!1)),a.activeElement&&a.activeElement.matches(r.focusableElements)&&a.activeElement!==l&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!l.matches(r.focusableElements))&&a.activeElement.blur();const y=_&&t.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||y)&&!l.isContentEditable&&s.preventDefault(),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.animating&&!n.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function hb(e){const t=$t(),a=this,s=a.touchEventsData,{params:r,touches:n,rtlTranslate:o,enabled:i}=a;if(!i||!r.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(s.touchId!==null||l.pointerId!==s.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(v=>v.identifier===s.touchId),!c||c.identifier!==s.touchId)return}else c=l;if(!s.isTouched){s.startMoving&&s.isScrolling&&a.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){n.startX=d,n.startY=u;return}if(!a.allowTouchMove){l.target.matches(s.focusableElements)||(a.allowClick=!1),s.isTouched&&(Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u}),s.touchStartTime=Nr());return}if(r.touchReleaseOnEdges&&!r.loop)if(a.isVertical()){if(u<n.startY&&a.translate<=a.maxTranslate()||u>n.startY&&a.translate>=a.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(o&&(d>n.startX&&-a.translate<=a.maxTranslate()||d<n.startX&&-a.translate>=a.minTranslate()))return;if(!o&&(d<n.startX&&a.translate<=a.maxTranslate()||d>n.startX&&a.translate>=a.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,a.allowClick=!1;return}s.allowTouchCallbacks&&a.emit("touchMove",l),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=d,n.currentY=u;const p=n.currentX-n.startX,f=n.currentY-n.startY;if(a.params.threshold&&Math.sqrt(p**2+f**2)<a.params.threshold)return;if(typeof s.isScrolling>"u"){let v;a.isHorizontal()&&n.currentY===n.startY||a.isVertical()&&n.currentX===n.startX?s.isScrolling=!1:p*p+f*f>=25&&(v=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,s.isScrolling=a.isHorizontal()?v>r.touchAngle:90-v>r.touchAngle)}if(s.isScrolling&&a.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(s.startMoving=!0),s.isScrolling||l.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;a.allowClick=!1,!r.cssMode&&l.cancelable&&l.preventDefault(),r.touchMoveStopPropagation&&!r.nested&&l.stopPropagation();let g=a.isHorizontal()?p:f,_=a.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;r.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),_=Math.abs(_)*(o?1:-1)),n.diff=g,g*=r.touchRatio,o&&(g=-g,_=-_);const y=a.touchesDirection;a.swipeDirection=g>0?"prev":"next",a.touchesDirection=_>0?"prev":"next";const m=a.params.loop&&!r.cssMode,h=a.touchesDirection==="next"&&a.allowSlideNext||a.touchesDirection==="prev"&&a.allowSlidePrev;if(!s.isMoved){if(m&&h&&a.loopFix({direction:a.swipeDirection}),s.startTranslate=a.getTranslate(),a.setTransition(0),a.animating){const v=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});a.wrapperEl.dispatchEvent(v)}s.allowMomentumBounce=!1,r.grabCursor&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!0),a.emit("sliderFirstMove",l)}if(new Date().getTime(),r._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&y!==a.touchesDirection&&m&&h&&Math.abs(g)>=1){Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}a.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=g+s.startTranslate;let b=!0,w=r.resistanceRatio;if(r.touchReleaseOnEdges&&(w=0),g>0?(m&&h&&s.allowThresholdMove&&s.currentTranslate>(r.centeredSlides?a.minTranslate()-a.slidesSizesGrid[a.activeIndex+1]-(r.slidesPerView!=="auto"&&a.slides.length-r.slidesPerView>=2?a.slidesSizesGrid[a.activeIndex+1]+a.params.spaceBetween:0)-a.params.spaceBetween:a.minTranslate())&&a.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>a.minTranslate()&&(b=!1,r.resistance&&(s.currentTranslate=a.minTranslate()-1+(-a.minTranslate()+s.startTranslate+g)**w))):g<0&&(m&&h&&s.allowThresholdMove&&s.currentTranslate<(r.centeredSlides?a.maxTranslate()+a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween+(r.slidesPerView!=="auto"&&a.slides.length-r.slidesPerView>=2?a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween:0):a.maxTranslate())&&a.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:a.slides.length-(r.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(r.slidesPerView,10)))}),s.currentTranslate<a.maxTranslate()&&(b=!1,r.resistance&&(s.currentTranslate=a.maxTranslate()+1-(a.maxTranslate()-s.startTranslate-g)**w))),b&&(l.preventedByNestedSwiper=!0),!a.allowSlideNext&&a.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&a.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&!a.allowSlideNext&&(s.currentTranslate=s.startTranslate),r.threshold>0)if(Math.abs(g)>r.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,s.currentTranslate=s.startTranslate,n.diff=a.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{s.currentTranslate=s.startTranslate;return}!r.followFinger||r.cssMode||((r.freeMode&&r.freeMode.enabled&&a.freeMode||r.watchSlidesProgress)&&(a.updateActiveIndex(),a.updateSlidesClasses()),r.freeMode&&r.freeMode.enabled&&a.freeMode&&a.freeMode.onTouchMove(),a.updateProgress(s.currentTranslate),a.setTranslate(s.currentTranslate))}function mb(e){const t=this,a=t.touchEventsData;let s=e;s.originalEvent&&(s=s.originalEvent);let r;if(s.type==="touchend"||s.type==="touchcancel"){if(r=[...s.changedTouches].find(v=>v.identifier===a.touchId),!r||r.identifier!==a.touchId)return}else{if(a.touchId!==null||s.pointerId!==a.pointerId)return;r=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(t.browser.isSafari||t.browser.isWebView)))return;a.pointerId=null,a.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&s.pointerType==="mouse")return;if(a.allowTouchCallbacks&&t.emit("touchEnd",s),a.allowTouchCallbacks=!1,!a.isTouched){a.isMoved&&o.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,a.startMoving=!1;return}o.grabCursor&&a.isMoved&&a.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Nr(),p=u-a.touchStartTime;if(t.allowClick){const v=s.path||s.composedPath&&s.composedPath();t.updateClickedSlide(v&&v[0]||s.target,v),t.emit("tap click",s),p<300&&u-a.lastClickTime<300&&t.emit("doubleTap doubleClick",s)}if(a.lastClickTime=Nr(),gu(()=>{t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||i.diff===0&&!a.loopSwapReset||a.currentTranslate===a.startTranslate&&!a.loopSwapReset){a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;return}a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;let f;if(o.followFinger?f=l?t.translate:-t.translate:f=-a.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let _=0,y=t.slidesSizesGrid[0];for(let v=0;v<c.length;v+=v<o.slidesPerGroupSkip?1:o.slidesPerGroup){const S=v<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[v+S]<"u"?(g||f>=c[v]&&f<c[v+S])&&(_=v,y=c[v+S]-c[v]):(g||f>=c[v])&&(_=v,y=c[c.length-1]-c[c.length-2])}let m=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const b=(f-c[_])/y,w=_<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(b>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?m:_+w):t.slideTo(_)),t.swipeDirection==="prev"&&(b>1-o.longSwipesRatio?t.slideTo(_+w):h!==null&&b<0&&Math.abs(b)>o.longSwipesRatio?t.slideTo(h):t.slideTo(_))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(s.target===t.navigation.nextEl||s.target===t.navigation.prevEl)?s.target===t.navigation.nextEl?t.slideTo(_+w):t.slideTo(_):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:_+w),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:_))}}function il(){const e=this,{params:t,el:a}=e;if(a&&a.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:r,snapGrid:n}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=r,e.allowSlideNext=s,e.params.watchOverflow&&n!==e.snapGrid&&e.checkOverflow()}function gb(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function bb(){const e=this,{wrapperEl:t,rtlTranslate:a,enabled:s}=e;if(!s)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let r;const n=e.maxTranslate()-e.minTranslate();n===0?r=0:r=(e.translate-e.minTranslate())/n,r!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function _b(e){const t=this;xr(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function yb(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Su=(e,t)=>{const a=$t(),{params:s,el:r,wrapperEl:n,device:o}=e,i=!!s.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!r||typeof r=="string"||(a[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),r[l]("touchstart",e.onTouchStart,{passive:!1}),r[l]("pointerdown",e.onTouchStart,{passive:!1}),a[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),a[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),a[l]("touchend",e.onTouchEnd,{passive:!0}),a[l]("pointerup",e.onTouchEnd,{passive:!0}),a[l]("pointercancel",e.onTouchEnd,{passive:!0}),a[l]("touchcancel",e.onTouchEnd,{passive:!0}),a[l]("pointerout",e.onTouchEnd,{passive:!0}),a[l]("pointerleave",e.onTouchEnd,{passive:!0}),a[l]("contextmenu",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&r[l]("click",e.onClick,!0),s.cssMode&&n[l]("scroll",e.onScroll),s.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",il,!0):e[c]("observerUpdate",il,!0),r[l]("load",e.onLoad,{capture:!0}))};function vb(){const e=this,{params:t}=e;e.onTouchStart=fb.bind(e),e.onTouchMove=hb.bind(e),e.onTouchEnd=mb.bind(e),e.onDocumentTouchStart=yb.bind(e),t.cssMode&&(e.onScroll=bb.bind(e)),e.onClick=gb.bind(e),e.onLoad=_b.bind(e),Su(e,"on")}function wb(){Su(this,"off")}var Tb={attachEvents:vb,detachEvents:wb};const ll=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Sb(){const e=this,{realIndex:t,initialized:a,params:s,el:r}=e,n=s.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=$t(),i=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",l=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?e.el:o.querySelector(s.breakpointsBase),c=e.getBreakpoint(n,i,l);if(!c||e.currentBreakpoint===c)return;const u=(c in n?n[c]:void 0)||e.originalParams,p=ll(e,s),f=ll(e,u),g=e.params.grabCursor,_=u.grabCursor,y=s.enabled;p&&!f?(r.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(r.classList.add(`${s.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&s.grid.fill==="column")&&r.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!_?e.unsetGrabCursor():!g&&_&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(S=>{if(typeof u[S]>"u")return;const P=s[S]&&s[S].enabled,E=u[S]&&u[S].enabled;P&&!E&&e[S].disable(),!P&&E&&e[S].enable()});const m=u.direction&&u.direction!==s.direction,h=s.loop&&(u.slidesPerView!==s.slidesPerView||m),b=s.loop;m&&a&&e.changeDirection(),at(e.params,u);const w=e.params.enabled,v=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),y&&!w?e.disable():!y&&w&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),a&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!b&&v?(e.loopCreate(t),e.updateSlides()):b&&!v&&e.loopDestroy()),e.emit("breakpoint",u)}function xb(e,t="window",a){if(!e||t==="container"&&!a)return;let s=!1;const r=Ye(),n=t==="window"?r.innerHeight:a.clientHeight,o=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:n*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];t==="window"?r.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=a.clientWidth&&(s=l)}return s||"max"}var Eb={setBreakpoint:Sb,getBreakpoint:xb};function kb(e,t){const a=[];return e.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(r=>{s[r]&&a.push(t+r)}):typeof s=="string"&&a.push(t+s)}),a}function Pb(){const e=this,{classNames:t,params:a,rtl:s,el:r,device:n}=e,o=kb(["initialized",a.direction,{"free-mode":e.params.freeMode&&a.freeMode.enabled},{autoheight:a.autoHeight},{rtl:s},{grid:a.grid&&a.grid.rows>1},{"grid-column":a.grid&&a.grid.rows>1&&a.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":a.cssMode},{centered:a.cssMode&&a.centeredSlides},{"watch-progress":a.watchSlidesProgress}],a.containerModifierClass);t.push(...o),r.classList.add(...t),e.emitContainerClasses()}function Ab(){const e=this,{el:t,classNames:a}=e;!t||typeof t=="string"||(t.classList.remove(...a),e.emitContainerClasses())}var Cb={addClasses:Pb,removeClasses:Ab};function Ob(){const e=this,{isLocked:t,params:a}=e,{slidesOffsetBefore:s}=a;if(s){const r=e.slides.length-1,n=e.slidesGrid[r]+e.slidesSizesGrid[r]+s*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;a.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),a.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var $b={checkOverflow:Ob},cl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Rb(e,t){return function(s={}){const r=Object.keys(s)[0],n=s[r];if(typeof n!="object"||n===null){at(t,s);return}if(e[r]===!0&&(e[r]={enabled:!0}),r==="navigation"&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),["pagination","scrollbar"].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&"enabled"in n)){at(t,s);return}typeof e[r]=="object"&&!("enabled"in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),at(t,s)}}const Bn={eventsEmitter:Cg,update:zg,translate:Vg,transition:Jg,slide:rb,loop:lb,grabCursor:ub,events:Tb,breakpoints:Eb,checkOverflow:$b,classes:Cb},Fn={};class ut{constructor(...t){let a,s;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?s=t[0]:[a,s]=t,s||(s={}),s=at({},s),a&&!s.el&&(s.el=a);const r=$t();if(s.el&&typeof s.el=="string"&&r.querySelectorAll(s.el).length>1){const l=[];return r.querySelectorAll(s.el).forEach(c=>{const d=at({},s,{el:c});l.push(new ut(d))}),l}const n=this;n.__swiper__=!0,n.support=yu(),n.device=vu({userAgent:s.userAgent}),n.browser=wu(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],s.modules&&Array.isArray(s.modules)&&s.modules.forEach(l=>{typeof l=="function"&&n.modules.indexOf(l)<0&&n.modules.push(l)});const o={};n.modules.forEach(l=>{l({params:s,swiper:n,extendParams:Rb(s,o),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const i=at({},cl,o);return n.params=at({},i,Fn,s),n.originalParams=at({},n.params),n.passedParams=at({},s),n.params&&n.params.on&&Object.keys(n.params.on).forEach(l=>{n.on(l,n.params.on[l])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),Object.assign(n,{enabled:n.params.enabled,el:a,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:a,params:s}=this,r=Ct(a,`.${s.slideClass}, swiper-slide`),n=Br(r[0]);return Br(t)-n}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(a=>a.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:a,params:s}=t;t.slides=Ct(a,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,a){const s=this;t=Math.min(Math.max(t,0),1);const r=s.minTranslate(),o=(s.maxTranslate()-r)*t+r;s.translateTo(o,typeof a>"u"?0:a),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",a.join(" "))}getSlideClasses(t){const a=this;return a.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(a.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=[];t.slides.forEach(s=>{const r=t.getSlideClasses(s);a.push({slideEl:s,classNames:r}),t.emit("_slideClass",s,r)}),t.emit("_slideClasses",a)}slidesPerViewDynamic(t="current",a=!1){const s=this,{params:r,slides:n,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=s;let d=1;if(typeof r.slidesPerView=="number")return r.slidesPerView;if(r.centeredSlides){let u=n[c]?Math.ceil(n[c].swiperSlideSize):0,p;for(let f=c+1;f<n.length;f+=1)n[f]&&!p&&(u+=Math.ceil(n[f].swiperSlideSize),d+=1,u>l&&(p=!0));for(let f=c-1;f>=0;f-=1)n[f]&&!p&&(u+=n[f].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<n.length;u+=1)(a?o[u]+i[u]-o[c]<l:o[u]-o[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:a,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&xr(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function r(){const o=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let n;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)r(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const o=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;n=t.slideTo(o.length-1,0,!1,!0)}else n=t.slideTo(t.activeIndex,0,!1,!0);n||r()}s.watchOverflow&&a!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,a=!0){const s=this,r=s.params.direction;return t||(t=r==="horizontal"?"vertical":"horizontal"),t===r||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${r}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(n=>{t==="vertical"?n.style.width="":n.style.height=""}),s.emit("changeDirection"),a&&s.update()),s}changeLanguageDirection(t){const a=this;a.rtl&&t==="rtl"||!a.rtl&&t==="ltr"||(a.rtl=t==="rtl",a.rtlTranslate=a.params.direction==="horizontal"&&a.rtl,a.rtl?(a.el.classList.add(`${a.params.containerModifierClass}rtl`),a.el.dir="rtl"):(a.el.classList.remove(`${a.params.containerModifierClass}rtl`),a.el.dir="ltr"),a.update())}mount(t){const a=this;if(a.mounted)return!0;let s=t||a.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=a,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===a.params.swiperElementNodeName.toUpperCase()&&(a.isElement=!0);const r=()=>`.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(r()):Ct(s,r())[0];return!o&&a.params.createElements&&(o=Ir("div",a.params.wrapperClass),s.append(o),Ct(s,`.${a.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(a,{el:s,wrapperEl:o,slidesEl:a.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:a.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||ia(s,"direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||ia(s,"direction")==="rtl"),wrongRTL:ia(o,"display")==="-webkit-box"}),!0}init(t){const a=this;if(a.initialized||a.mount(t)===!1)return a;a.emit("beforeInit"),a.params.breakpoints&&a.setBreakpoint(),a.addClasses(),a.updateSize(),a.updateSlides(),a.params.watchOverflow&&a.checkOverflow(),a.params.grabCursor&&a.enabled&&a.setGrabCursor(),a.params.loop&&a.virtual&&a.params.virtual.enabled?a.slideTo(a.params.initialSlide+a.virtual.slidesBefore,0,a.params.runCallbacksOnInit,!1,!0):a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,!1,!0),a.params.loop&&a.loopCreate(void 0,!0),a.attachEvents();const r=[...a.el.querySelectorAll('[loading="lazy"]')];return a.isElement&&r.push(...a.hostEl.querySelectorAll('[loading="lazy"]')),r.forEach(n=>{n.complete?xr(a,n):n.addEventListener("load",o=>{xr(a,o.target)})}),bo(a),a.initialized=!0,bo(a),a.emit("init"),a.emit("afterInit"),a}destroy(t=!0,a=!0){const s=this,{params:r,el:n,wrapperEl:o,slides:i}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),r.loop&&s.loopDestroy(),a&&(s.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),t!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),gg(s)),s.destroyed=!0),null}static extendDefaults(t){at(Fn,t)}static get extendedDefaults(){return Fn}static get defaults(){return cl}static installModule(t){ut.prototype.__modules__||(ut.prototype.__modules__=[]);const a=ut.prototype.__modules__;typeof t=="function"&&a.indexOf(t)<0&&a.push(t)}static use(t){return Array.isArray(t)?(t.forEach(a=>ut.installModule(a)),ut):(ut.installModule(t),ut)}}Object.keys(Bn).forEach(e=>{Object.keys(Bn[e]).forEach(t=>{ut.prototype[t]=Bn[e][t]})});ut.use([Pg,Ag]);function Mb(e,t,a,s){return e.params.createElements&&Object.keys(s).forEach(r=>{if(!a[r]&&a.auto===!0){let n=Ct(e.el,`.${s[r]}`)[0];n||(n=Ir("div",s[r]),n.className=s[r],e.el.append(n)),a[r]=n,t[r]=n}}),a}function Qa(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Lb({swiper:e,extendParams:t,on:a,emit:s}){const r="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),e.pagination={el:null,bullets:[]};let n,o=0;function i(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function l(m,h){const{bulletActiveClass:b}=e.params.pagination;m&&(m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${b}-${h}`),m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${b}-${h}-${h}`)))}function c(m,h,b){if(m=m%b,h=h%b,h===m+1)return"next";if(h===m-1)return"previous"}function d(m){const h=m.target.closest(Qa(e.params.pagination.bulletClass));if(!h)return;m.preventDefault();const b=Br(h)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===b)return;const w=c(e.realIndex,b,e.slides.length);w==="next"?e.slideNext():w==="previous"?e.slidePrev():e.slideToLoop(b)}else e.slideTo(b)}function u(){const m=e.rtl,h=e.params.pagination;if(i())return;let b=e.pagination.el;b=It(b);let w,v;const S=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,P=e.params.loop?Math.ceil(S/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(v=e.previousRealIndex||0,w=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(w=e.snapIndex,v=e.previousSnapIndex):(v=e.previousIndex||0,w=e.activeIndex||0),h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const E=e.pagination.bullets;let T,x,O;if(h.dynamicBullets&&(n=go(E[0],e.isHorizontal()?"width":"height"),b.forEach($=>{$.style[e.isHorizontal()?"width":"height"]=`${n*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&v!==void 0&&(o+=w-(v||0),o>h.dynamicMainBullets-1?o=h.dynamicMainBullets-1:o<0&&(o=0)),T=Math.max(w-o,0),x=T+(Math.min(E.length,h.dynamicMainBullets)-1),O=(x+T)/2),E.forEach($=>{const L=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(U=>`${h.bulletActiveClass}${U}`)].map(U=>typeof U=="string"&&U.includes(" ")?U.split(" "):U).flat();$.classList.remove(...L)}),b.length>1)E.forEach($=>{const L=Br($);L===w?$.classList.add(...h.bulletActiveClass.split(" ")):e.isElement&&$.setAttribute("part","bullet"),h.dynamicBullets&&(L>=T&&L<=x&&$.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),L===T&&l($,"prev"),L===x&&l($,"next"))});else{const $=E[w];if($&&$.classList.add(...h.bulletActiveClass.split(" ")),e.isElement&&E.forEach((L,U)=>{L.setAttribute("part",U===w?"bullet-active":"bullet")}),h.dynamicBullets){const L=E[T],U=E[x];for(let K=T;K<=x;K+=1)E[K]&&E[K].classList.add(...`${h.bulletActiveClass}-main`.split(" "));l(L,"prev"),l(U,"next")}}if(h.dynamicBullets){const $=Math.min(E.length,h.dynamicMainBullets+4),L=(n*$-n)/2-O*n,U=m?"right":"left";E.forEach(K=>{K.style[e.isHorizontal()?U:"top"]=`${L}px`})}}b.forEach((E,T)=>{if(h.type==="fraction"&&(E.querySelectorAll(Qa(h.currentClass)).forEach(x=>{x.textContent=h.formatFractionCurrent(w+1)}),E.querySelectorAll(Qa(h.totalClass)).forEach(x=>{x.textContent=h.formatFractionTotal(P)})),h.type==="progressbar"){let x;h.progressbarOpposite?x=e.isHorizontal()?"vertical":"horizontal":x=e.isHorizontal()?"horizontal":"vertical";const O=(w+1)/P;let $=1,L=1;x==="horizontal"?$=O:L=O,E.querySelectorAll(Qa(h.progressbarFillClass)).forEach(U=>{U.style.transform=`translate3d(0,0,0) scaleX(${$}) scaleY(${L})`,U.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(rl(E,h.renderCustom(e,w+1,P)),T===0&&s("paginationRender",E)):(T===0&&s("paginationRender",E),s("paginationUpdate",E)),e.params.watchOverflow&&e.enabled&&E.classList[e.isLocked?"add":"remove"](h.lockClass)})}function p(){const m=e.params.pagination;if(i())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let b=e.pagination.el;b=It(b);let w="";if(m.type==="bullets"){let v=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&v>h&&(v=h);for(let S=0;S<v;S+=1)m.renderBullet?w+=m.renderBullet.call(e,S,m.bulletClass):w+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?w=m.renderFraction.call(e,m.currentClass,m.totalClass):w=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?w=m.renderProgressbar.call(e,m.progressbarFillClass):w=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],b.forEach(v=>{m.type!=="custom"&&rl(v,w||""),m.type==="bullets"&&e.pagination.bullets.push(...v.querySelectorAll(Qa(m.bulletClass)))}),m.type!=="custom"&&s("paginationRender",b[0])}function f(){e.params.pagination=Mb(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let h;typeof m.el=="string"&&e.isElement&&(h=e.el.querySelector(m.el)),!h&&typeof m.el=="string"&&(h=[...document.querySelectorAll(m.el)]),h||(h=m.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(m.el)],h.length>1&&(h=h.find(b=>_u(b,".swiper")[0]===e.el))),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=It(h),h.forEach(b=>{m.type==="bullets"&&m.clickable&&b.classList.add(...(m.clickableClass||"").split(" ")),b.classList.add(m.modifierClass+m.type),b.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(b.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&b.classList.add(m.progressbarOppositeClass),m.clickable&&b.addEventListener("click",d),e.enabled||b.classList.add(m.lockClass)}))}function g(){const m=e.params.pagination;if(i())return;let h=e.pagination.el;h&&(h=It(h),h.forEach(b=>{b.classList.remove(m.hiddenClass),b.classList.remove(m.modifierClass+m.type),b.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(b.classList.remove(...(m.clickableClass||"").split(" ")),b.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(b=>b.classList.remove(...m.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:h}=e.pagination;h=It(h),h.forEach(b=>{b.classList.remove(m.horizontalClass,m.verticalClass),b.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),a("init",()=>{e.params.pagination.enabled===!1?y():(f(),p(),u())}),a("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),a("snapIndexChange",()=>{u()}),a("snapGridLengthChange",()=>{p(),u()}),a("destroy",()=>{g()}),a("enable disable",()=>{let{el:m}=e.pagination;m&&(m=It(m),m.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),a("lock unlock",()=>{u()}),a("click",(m,h)=>{const b=h.target,w=It(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&w&&w.length>0&&!b.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&b===e.navigation.nextEl||e.navigation.prevEl&&b===e.navigation.prevEl))return;const v=w[0].classList.contains(e.params.pagination.hiddenClass);s(v===!0?"paginationShow":"paginationHide"),w.forEach(S=>S.classList.toggle(e.params.pagination.hiddenClass))}});const _=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=It(m),m.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),u()},y=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=It(m),m.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:_,disable:y,render:p,update:u,init:f,destroy:g})}function Nb({swiper:e,extendParams:t,on:a,emit:s,params:r}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,o,i=r&&r.autoplay?r.autoplay.delay:3e3,l=r&&r.autoplay?r.autoplay.delay:3e3,c,d=new Date().getTime(),u,p,f,g,_,y;function m(J){!e||e.destroyed||!e.wrapperEl||J.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(y||J.detail&&J.detail.bySwiperTouchMove)&&T())}const h=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(l=c,u=!1);const J=e.autoplay.paused?c:d+l-new Date().getTime();e.autoplay.timeLeft=J,s("autoplayTimeLeft",J,J/i),o=requestAnimationFrame(()=>{h()})},b=()=>{let J;return e.virtual&&e.params.virtual.enabled?J=e.slides.find(Y=>Y.classList.contains("swiper-slide-active")):J=e.slides[e.activeIndex],J?parseInt(J.getAttribute("data-swiper-autoplay"),10):void 0},w=()=>{let J=e.params.autoplay.delay;const G=b();return!Number.isNaN(G)&&G>0&&(J=G),J},v=J=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),h();let G=J;typeof G>"u"&&(G=w(),i=G,l=G),c=G;const Y=e.params.speed,j=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(Y,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,Y,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(Y,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,Y,!0,!0),s("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{v()})))};return G>0?(clearTimeout(n),n=setTimeout(()=>{j()},G)):requestAnimationFrame(()=>{j()}),G},S=()=>{d=new Date().getTime(),e.autoplay.running=!0,v(),s("autoplayStart")},P=()=>{e.autoplay.running=!1,clearTimeout(n),cancelAnimationFrame(o),s("autoplayStop")},E=(J,G)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(n),J||(_=!0);const Y=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):T()};if(e.autoplay.paused=!0,G){Y();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),Y())},T=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),_?(_=!1,v(c)):v(),e.autoplay.paused=!1,s("autoplayResume"))},x=()=>{if(e.destroyed||!e.autoplay.running)return;const J=$t();J.visibilityState==="hidden"&&(_=!0,E(!0)),J.visibilityState==="visible"&&T()},O=J=>{J.pointerType==="mouse"&&(_=!0,y=!0,!(e.animating||e.autoplay.paused)&&E(!0))},$=J=>{J.pointerType==="mouse"&&(y=!1,e.autoplay.paused&&T())},L=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",O),e.el.addEventListener("pointerleave",$))},U=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",O),e.el.removeEventListener("pointerleave",$))},K=()=>{$t().addEventListener("visibilitychange",x)},re=()=>{$t().removeEventListener("visibilitychange",x)};a("init",()=>{e.params.autoplay.enabled&&(L(),K(),S())}),a("destroy",()=>{U(),re(),e.autoplay.running&&P()}),a("_freeModeStaticRelease",()=>{(f||_)&&T()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?P():E(!0,!0)}),a("beforeTransitionStart",(J,G,Y)=>{e.destroyed||!e.autoplay.running||(Y||!e.params.autoplay.disableOnInteraction?E(!0,!0):P())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){P();return}p=!0,f=!1,_=!1,g=setTimeout(()=>{_=!0,f=!0,E(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(n),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&T(),f=!1,p=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=w(),i=w())}),Object.assign(e.autoplay,{start:S,stop:P,pause:E,resume:T})}const Db={class:"home-layout"},Ib={class:"sticky-header-group"},Bb=["data-user-name"],Fb={class:"home-tabs",id:"home-tabs--id"},zb={class:"home-tab home-tab--active","data-home-tab":"lobby"},jb={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Hb={class:"home-tab","data-home-tab":"active"},Ub={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},qb={__name:"home_route",setup(e){const t=Mt(),a=_e();window.CoreBetSlip=hu;const s=()=>{const d=document.querySelector(".bet-grid__toggle"),u=document.querySelector(".bet-grid__toggle-text"),p=document.querySelector(".bet-grid__select"),f=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:d,toggleText:u,selectSection:p,slipSection:f}),d&&u&&p&&f){const g=window.matchMedia("(orientation: portrait)").matches,_=window.matchMedia("(max-width: 768px)").matches;(g||_)&&(p.classList.remove("collapsed"),f.classList.add("collapsed"),u.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),d.addEventListener("click",y=>{console.log("[Bet Grid Toggle] Button clicked!"),y.preventDefault(),y.stopPropagation(),f.classList.contains("collapsed")?(p.classList.add("collapsed"),f.classList.remove("collapsed"),u.textContent="Close Bet Slip"):(p.classList.remove("collapsed"),f.classList.add("collapsed"),u.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:p.classList.contains("collapsed"),slipCollapsed:f.classList.contains("collapsed"),buttonText:u.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:d,toggleText:u,selectSection:p,slipSection:f})};document.addEventListener("click",d=>{const u=d.target;if(u&&u.dataset?.promotionTopic){const p={timestamp:Date.now(),heroImg:u.dataset.promotionHeroImg||"",caption:u.dataset.promotionCaption||"",tagline:u.dataset.promotionTagline||"",toast:u.dataset.promotionToast||"",topic:u.dataset.promotionTopic||"",topicToken:u.dataset.promotionTopicToken||"",marquee:u.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",p),ce.publish(a.hierTopics.PROMOTION__CLICK,JSON.stringify(p))}u&&u.dataset?.publishRouteHome&&(u.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(f=>{f.classList.toggle("dash-nav__btn--active",f===u)}),ce.publish(u.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),u&&u.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const r=(d,u=!1,p="cards",f={})=>{const g=document.querySelector(".tournaments-grid");if(!g)return;g.innerHTML="",g.classList.toggle("tournaments-grid--list",p==="list");const _=document.getElementById("app"),y=_?.getAttribute("data-sync-theme")||"dark",m=_?.getAttribute("data-sync-lang")||"en",h=_?.getAttribute("data-sync-motif")||"brand",b=(S="")=>S.toLowerCase().replace(/\b\w/g,P=>P.toUpperCase()),w=S=>{const P=document.createElement("bma-tournament-list-card");return P.setAttribute("data-bma-tourn-guid",S.guid||""),P.setAttribute("data-bma-tourn-caption",S.caption||""),P.setAttribute("data-bma-tourn-tagline",S.tagline||""),P.setAttribute("data-bma-tourn-status",S.status||""),P.setAttribute("data-bma-tourn-class",S.status||""),P.setAttribute("data-bma-tourn-game-type",S.class||"DEFAULT"),P.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(S.sports_allowed)?JSON.stringify(S.sports_allowed):""),P.setAttribute("data-bma-tourn-entities",S.entities?JSON.stringify(S.entities):""),P.setAttribute("data-bma-tourn-entry_fee",S.entry_fee||"0"),P.setAttribute("data-bma-tourn-tournament_dollars",S.tournament_dollars||"0"),P.setAttribute("data-bma-tourn-matches",S.matches_expanded?.length||"0"),P.setAttribute("data-bma-tourn-tags",Array.isArray(S.tags)?JSON.stringify(S.tags):"[]"),P.setAttribute("data-bma-tourn-window_start_time",S.window_start_time||""),P.setAttribute("data-bma-tourn-window_end_time",S.window_end_time||""),P.setAttribute("data-sync-theme",y),P},v=S=>{const P=document.createElement("article"),E=S.status||"DRAFT";P.className=`tournament-item tournament-status-${E.toLowerCase()}`;const T=document.createElement("bma-tournament-card");return T.setAttribute("data-bma-tourn-id",S.id||""),T.setAttribute("data-bma-tourn-guid",S.guid||""),T.setAttribute("data-bma-tourn-caption",S.caption||""),T.setAttribute("data-bma-tourn-tagline",S.tagline||""),T.setAttribute("data-bma-tourn-window_start_time",S.window_start_time||""),T.setAttribute("data-bma-tourn-window_end_time",S.window_end_time||""),T.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(S.sports_allowed)?JSON.stringify(S.sports_allowed):S.sports_allowed||""),T.setAttribute("data-bma-tourn-entities",S.entities?JSON.stringify(S.entities):""),T.setAttribute("data-bma-tourn-tournament_dollars",S.tournament_dollars||""),T.setAttribute("data-bma-tourn-prize_distro",Array.isArray(S.prize_distro)?JSON.stringify(S.prize_distro):S.prize_distro||""),T.setAttribute("data-bma-tourn-matches",Array.isArray(S.matches_guids)?JSON.stringify(S.matches_guids):S.matches_guids||""),T.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(S.matches_expanded)?JSON.stringify(S.matches_expanded):S.matches_expanded||""),T.setAttribute("data-bma-tourn-entry_fee",S.entry_fee||""),T.setAttribute("data-bma-tourn-rake",S.rake||""),T.setAttribute("data-bma-tourn-tags",Array.isArray(S.tags)?JSON.stringify(S.tags):S.tags||""),T.setAttribute("data-bma-tourn-comments",S.comments||""),T.setAttribute("data-bma-tourn-class",S.status||""),T.setAttribute("data-bma-tourn-game-type",S.class||"DEFAULT"),T.setAttribute("data-bma-tourn-status",S.status||""),T.setAttribute("data-sync-theme",y),T.setAttribute("data-sync-lang",m),T.setAttribute("data-sync-motif",h),T.setAttribute("data-n55-size","medium"),T.setAttribute("data-n55-enchanted-cta-ambient","none"),T.setAttribute("data-tourn-custom-css",""),T.setAttribute("data-tourn-trophy","0"),T.setAttribute("data-bma-tourn-focus",""),T.setAttribute("data-bma-tourn-wait","false"),P.appendChild(T),P};if(u){d.forEach(P=>{if(P.type==="stats"){const H=document.createElement("div");H.className="tournament-category tournament-category--stats",H.innerHTML=P.html||"",g.appendChild(H);return}const E=document.createElement("div");E.className="tournament-category";const T=document.createElement("header");T.className="tournament-category-header";const x=document.createElement("div");x.className="category-title-line";const O=document.createElement("h2");if(O.className="category-title",O.textContent=b(P.title),x.appendChild(O),P.tournaments){const H=document.createElement("span");H.className="category-subtext",H.textContent=P.tournaments.length,x.appendChild(H)}const{tab:$="lobby",subStatus:L="all",sort:U="default",result:K="all",odds:re="all"}=f,G=P.title.toLowerCase().includes("completed"),Y=!G&&$==="my",j=(H,z,A)=>`<option value="${H}"${A?" selected":""}>${z}</option>`;let I="";if($==="lobby"?I=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${j("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${j("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${j("default","Starting TD$: Default",U==="default")}
              ${j("td_high","Starting TD$: High to Low",U==="td_high")}
              ${j("td_low","Starting TD$: Low to High",U==="td_low")}
            </select>
          `:$==="my"&&Y?I=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${j("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${j("all","Status: All",L==="all")}
              ${j("active","Status: Active",L==="active")}
              ${j("upcoming","Status: Upcoming",L==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${j("all","Odds: All",re==="all")}
              ${j("available","Odds: Available",re==="available")}
              ${j("none","Odds: Not Available",re==="none")}
            </select>
          `:($==="my"&&G||$==="completed")&&(I=`
            <select class="category-dropdown" data-filter-type="result">
              ${j("all","Result: All",K==="all")}
              ${j("trophy","Result: Won Trophy",K==="trophy")}
              ${j("no_trophy","Result: No Trophy",K==="no_trophy")}
            </select>
          `),T.appendChild(x),I){const H=document.createElement("button");H.className="category-filter-toggle",H.setAttribute("aria-label","Toggle filters"),H.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filters <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>';const z=document.createElement("div");z.className="category-controls";const A=localStorage.getItem("bma_view_mode")||"cards",R=document.createElement("span");R.className="category-view-btns",R.innerHTML=`
            <button class="category-view-btn${A==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            </button>
            <button class="category-view-btn${A==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            </button>
          `,z.appendChild(H),z.appendChild(R),T.appendChild(z)}if(I){const H=document.createElement("div");if(H.className="category-filter-row",H.style.display=window._bmaFilterRowOpen?"":"none",H.innerHTML=I,T.appendChild(H),window._bmaFilterRowOpen){const z=T.querySelector(".category-filter-toggle");z&&z.classList.add("category-filter-toggle--open")}}if(E.appendChild(T),g.appendChild(E),P.tournaments.length===0){const H=P.emptyMessage||"No tournaments available",z=P.emptySubtext||"Check back later for new tournaments",A=P.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',R=document.createElement("div");R.className="tournaments-empty",R.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",R.innerHTML=`
            ${A}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${H}</p>
            <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${z}</p>
          `,E.appendChild(R)}else{const H=document.createElement("div");if(H.className="card-rail",P.tournaments.forEach((z,A)=>{const R=p==="list"?w(z):v(z);R.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",R.style.animationDelay=`${Math.min(A*50,300)}ms`,H.appendChild(R)}),E.appendChild(H),P.tournaments.length>1){const z=document.createElement("div");z.className="card-rail__dots";for(let A=0;A<P.tournaments.length;A++){const R=document.createElement("span");R.className=`card-rail__dot${A===0?" card-rail__dot--active":""}`,z.appendChild(R)}E.appendChild(z)}if(P.tournaments.length>1){const z=document.createElement("button");z.className="card-rail__arrow card-rail__arrow--prev",z.setAttribute("aria-label","Previous card"),z.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',z.style.opacity="0";const A=document.createElement("button");A.className="card-rail__arrow card-rail__arrow--next",A.setAttribute("aria-label","Next card"),A.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',E.appendChild(z),E.appendChild(A);const R=E.querySelector(".card-rail__dots");H.addEventListener("scroll",()=>{const M=H.scrollLeft,N=H.firstElementChild?.offsetWidth||1,V=Math.round(M/(N+12));R&&R.querySelectorAll(".card-rail__dot").forEach((B,k)=>{B.classList.toggle("card-rail__dot--active",k===V)}),z.style.opacity=M<=10?"0":"";const se=H.scrollWidth-H.clientWidth;A.style.opacity=M>=se-10?"0":""},{passive:!0}),z.addEventListener("click",()=>{const M=H.firstElementChild?.offsetWidth||300;H.scrollBy({left:-(M+12),behavior:"smooth"})}),A.addEventListener("click",()=>{const M=H.firstElementChild?.offsetWidth||300;H.scrollBy({left:M+12,behavior:"smooth"})})}}});const S=g.dataset.filterContext;if(S!=="lobby"&&S!=="private"&&g.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let P="No tournaments available",E="Check back later for new tournaments";S==="my"?(P="You haven't joined any tournaments yet",E="Head to the lobby to find tournaments"):S==="completed"&&(P="No completed tournaments yet",E="Tournaments will appear here once they finish");const T=document.createElement("div");T.className="tournaments-empty",T.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",T.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${P}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${E}</p>
        `,g.appendChild(T)}}else d.forEach((S,P)=>{const E=p==="list"?w(S):v(S);E.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",E.style.animationDelay=`${Math.min(P*50,300)}ms`,g.appendChild(E)})},n=d=>{document.querySelectorAll("bma-tournament-card").forEach(p=>{p.setAttribute("data-sync-theme",d)})},o=d=>{const u=document.querySelectorAll("bma-tournament-card"),p=Date.now().toString();u.forEach(f=>{if(f===d){if(f.setAttribute("data-bma-tourn-focus",p),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="")}}else if(f.setAttribute("data-bma-tourn-focus",""),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="none")}}),typeof neodigmMarquee<"u"&&neodigmMarquee.init()},i=d=>{const{action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._}=d.detail;console.log("[home_route] Tournament action:",{action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._}),o(d.target),ce.publish("WC.TOURN_ACTION",JSON.stringify({action:u,tournamentId:p,tournamentGuid:f,tournamentStatus:g,..._,timestamp:Date.now()}))};let l=null;const c=()=>{const d=document.getElementById("home-datetime--id");if(!d)return;const u=new Date,p=u.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),f=u.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});d.textContent=`${p} · ${f}`};return Qt(async()=>{if(!a.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}c(),l=setInterval(c,24e3);const d=document.getElementById("app");if(d){const g=a.appCLIFeatures.features.theme?.state,_=a.appCLIFeatures.features.lang?.state,y=a.appCLIFeatures.features.motif?.state,m=a.appSession.session_user.guid;g&&(d.setAttribute("data-sync-theme",g),document.body.setAttribute("data-sync-theme",g)),_&&d.setAttribute("data-sync-lang",_),y&&d.setAttribute("data-sync-motif",y),m&&d.setAttribute("data-user-guid",m)}window._homeRouteRenderCards=r,window.initBetGridToggle=s;const u=ce.subscribe("APP.ROUTE_SYNC",(g,_)=>{try{const y=JSON.parse(_);y.theme&&n(y.theme.state)}catch(y){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",y)}});window._homeRoutePubSubToken=u,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),ce.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i);const p=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,f=new ut(".featured-swiper",{modules:[Nb,Lb],slidesPerView:1,spaceBetween:16,loop:p>1,centeredSlides:p===1,autoplay:p>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:Math.min(2,p),spaceBetween:16},1024:{slidesPerView:Math.min(3,p),spaceBetween:20},1280:{slidesPerView:Math.min(3,p),spaceBetween:24}}});window.featuredSwiper=f,ce.publish(a.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Zr(()=>{l&&clearInterval(l),document.removeEventListener("bma-tournament-action",i),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&ce.unsubscribe(window._homeRoutePubSubToken)}),(d,u)=>(Xe(),ft("main",Db,[ae("div",Ib,[ae("bma-app-head-top",{"data-user-name":ca(a).appSession.session_user.name||"Guest"},null,8,Bb),u[0]||(u[0]=ae("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),u[6]||(u[6]=ha('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div><div class="home-datetime" id="home-datetime--id" aria-hidden="true">—</div><bma-scores-banner id="bma-scores-banner--id"></bma-scores-banner></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports>',2)),ae("nav",Fb,[ae("button",zb,[(Xe(),ft("svg",jb,[...u[1]||(u[1]=[ae("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),u[2]||(u[2]=qa(" Main Lobby ",-1))]),ae("button",Hb,[(Xe(),ft("svg",Ub,[...u[3]||(u[3]=[ae("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"},null,-1)])])),u[4]||(u[4]=qa(" Active Tourneys ",-1)),u[5]||(u[5]=ae("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{visibility:"hidden"}},"0",-1))])]),u[7]||(u[7]=ae("section",{class:"tournaments-section"},[ae("div",{class:"tournaments-grid"})],-1)),u[8]||(u[8]=ae("bma-app-foot-branded",null,null,-1)),u[9]||(u[9]=ae("bma-app-foot",{"data-selected-item":"foot_all_sports"},null,-1))]))}},Gb={};function Vb(e,t){return Xe(),ft("main",null,[...t[0]||(t[0]=[ae("h1",null,"App FAQ",-1)])])}const Ls=ma(Gb,[["render",Vb]]),Kb={};function Yb(e,t){return Xe(),ft("main",null,[...t[0]||(t[0]=[ae("h1",null,"App Help",-1)])])}const Wb=ma(Kb,[["render",Yb]]),Ht=class Ht{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,a,s,r=!0){this.strChat=s,this.isDebug=r;const n=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",a).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${n}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(i){Ht.onSSEOpen(i)},this.sseEvent.onmessage=function(i){Ht.onSSEMessage(i)},this.sseEvent.onerror=function(i){Ht.onSSEError(i)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let a=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(a=JSON.parse(t.data),a?.class!="NO_MESSAGE")if(a?.class&&a?.msg)switch(a.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":a?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(a.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",a.id+" | "+a.class+" | "+a.msg+" | "+a.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",a),ce.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(a));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Ht.sseEvent=null,Ht.strChat=null,Ht.isDebug=!0,Ht.sessionId=null;let Fr=Ht;class Jt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(a){return Math.floor(Math.random()*a)},fPromiseJS:async function(a,s){return new Promise((r,n)=>{const o=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});o.onload=r,o.onerror=n,a.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(a,s,r){const n=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});r&&(n.onload=function(){r()}),a.getElementsByTagName("head")[0].appendChild(n)},fAsyncCSS:function(a,s){let r=a.createElement("link");r.rel="stylesheet",r.href=s,a.getElementsByTagName("head")[0].appendChild(r)},data2prop:function(a){a=a.replace("data-","").toLowerCase();let s=a.split(""),r=[],n=!1;return s.forEach(o=>{o=="-"?n=!0:(r.push(n?o.toUpperCase():o),n=!1)}),r.join("")},doDataLayer:function(a,s){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+a+" | "+s),window.dataLayer&&window.dataLayer.push({event:a,msg:s})},isJSON:function(a){let s=!1;try{s=typeof JSON.parse(a)}catch{}return s=="object"},appStateListen:function(a){NeodigmKeylime.subscribe("mouseover",r=>{r?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(r.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",r=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let n=neodigmUtils.walkDOM3(r?.target,"n55TypeonClick");n&&neodigmUtils.typeOn(JSON.parse(n))},!0),NeodigmKeylime.subscribe("touchstart",r=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",r=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let s=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;s&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=s)},prettyTimeRETIRE:a=>{let s=new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return a=="Dec 31, 1969"&&(s=""),s},prettyTime:a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:a=>a&&a[0].toUpperCase()+a.slice(1)||"",genHash:a=>(a=String(a),Math.abs(a.split("").reduce((s,r)=>(s<<5)-s+r.charCodeAt(0)|0,0))),flashTitle:(a=neodigmOpt.N55_THEME_DEFAULT,s=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[a]&&(document.title=neodigmOpt.N55_THEME_COLORS[a][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},s))},robinTheme:function(a=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const r=56;s.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=a},i*r),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(r+r)))}),s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const n=256;s.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=a},i*n),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*n+3e3)}),neodigmUtils.flashTitle(a,2e3)}},countTo:async function(a,s,r=neodigmOpt.neodigmMetronome.countTo){const n=[16,r];return[...document.querySelectorAll(a)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-s);neodigmMetronome.unsubscribe(n[1]+i).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&s!=d){let u=l/n[0];u=Math.round(u),c!=0?o.textContent=d<s?d+u:d-u:o.textContent=s}},n[1]+i,n[0])}),neodigmUtils},typeOff:async function(a){let s=document.querySelector(a?.q1st);if(s){let r=s.textContent.length,n=window.getComputedStyle(s),o=Number(n.paddingTop.replace("px",""))+Number(n.paddingBottom.replace("px",""));for(s.offsetHeight&&(s.style.height=s.offsetHeight-o+"px");r;)setTimeout(()=>{s.textContent=s.textContent.replace(/.$/,"")},a.uniqueDelay*r--)}},typeOn:async function(a){let s=document.querySelector(a?.q1st);if(s){s.dataset.n55Typeon=0;let r=a.msg.replaceAll("|","   |   ")+"   ",n=r.split("|");if(a?.mode=="OFF")return neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay}),neodigmUtils;if(a?.mode=="RANDOM"&&n.length){let o=s.dataset.n55Typeon=neodigmUtils.f02x(n.length);r=n[o]}neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),neodigmMetronome.unsubscribe(a.uniqueDelay).subscribe(o=>{let i=r[r.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),s.dataset.n55Typeon++),s.textContent+=i,a?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(a)},a.uniqueDelay,r.length)}return neodigmUtils},getValJSON:function(a,s){try{return JSON.parse(a)}catch{return JSON.parse('{ "'+s+'": "'+a+'" }')}},walkDOM3:function(a,s,r=!1){let n=null;if(!n&&a?.dataset[s]&&(n=a),!n&&a?.parentNode?.dataset[s]&&(n=a.parentNode),!n&&a.tagName!="BODY"&&a?.parentNode?.parentNode?.dataset[s]&&(n=a.parentNode.parentNode),n)return r?n:n.dataset[s]},doSetT:function(a,s){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(a,s):setTimeout(a,s)},shake:function(a,s=!0){return[...document.querySelectorAll(a)].forEach(function(r,n){r.classList.add("shake__an"),setTimeout(function(){r.classList.remove("shake__an")},460)}),Jt.neodigmUtils},hardReload:function(a="n55reset"){const s=new URLSearchParams(window.location.search);s.set(a,new Date().getTime());const r=s.toString();window.location.search=r}}))}const Jb={class:"auth-page"},Xb={class:"auth-page-right"},Qb={class:"auth-card"},Zb={class:"form-group"},e_={class:"form-group"},t_={class:"password-input-wrapper"},a_=["type"],s_={style:{"text-align":"right"}},r_={class:"auth-link-center"},n_={__name:"signin_route",setup(e){const t=Mt(),a=_e(),s=(p="signin")=>{t.push({name:p})};let r=null;const n=lt(!1),o=()=>{n.value=!n.value},i=(p=3,f=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const g=Math.floor(Math.random()*p)+f,_=document.querySelector(".img__bg")?.classList;_&&(_.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),_.add(`img__bg--${g}`)),r||(r=ce.subscribe("APP__ROUTE_SYNC",(y,m)=>{const h=JSON.parse(m);switch(Object.keys(h)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(_=>_.code==f)[0]?.copy;g=g.filter(_=>_[0]==p.dataset.syncMicrocopyText)[0],g&&(p.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(_=>_.code==f)[0]?.copy;g=g.filter(_=>_[0]==p.dataset.syncMicrocopyPlaceholder)[0],g&&(p.placeholder=g[1])})},c=p=>{Jt.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),a.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let g=null,_=null;if(!p?.value)g="Please enter your email",_="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)g="Please enter a valid email address",_="#inp__text--email";else if(!f?.value)g="Please enter your password",_="#inp__text--password";else if(f.value.length<10)g="Password must be at least 10 characters",_="#inp__text--password";else{const y={email:p.value,hash:Jt.neodigmUtils().genHash(f.value)};Ee.doSignin(y,m=>{const w=(m?.entity?.tags||[]).find(v=>v.userName)?.userName||"";if(a.appSession.session_user.authenticated=!0,a.appSession.session_user.email=y.email,a.appSession.session_user.fname=m?.entity?.first,a.appSession.session_user.lname=m?.entity?.last,a.appSession.session_user.userName=w,a.appSession.session_user.name=w,a.appSession.session_user.guid=m?.entity?.guid,a.saveSessionUser(),a.appCLIFeatures.features.sse.state){const v=m?.entity?.guid||a.appSession.session_user.guid;Fr.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",v,a,!0)}})}g&&(c(_),neodigmToast.q(g,"danger"))};return Qt(()=>{i(),l()}),(p,f)=>(Xe(),ft("div",Jb,[f[10]||(f[10]=ha('<div class="auth-page-left" data-v-536c264d><div class="auth-bg" data-v-536c264d><div class="auth-bg-image" data-v-536c264d></div><div class="auth-bg-image" data-v-536c264d></div><div class="auth-bg-image" data-v-536c264d></div></div><div class="auth-overlay" data-v-536c264d></div><div class="auth-branding-content" data-v-536c264d><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-536c264d><p class="auth-branding-tagline" data-v-536c264d>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-536c264d>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-536c264d> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),ae("div",Xb,[ae("div",Qb,[f[9]||(f[9]=ae("div",{class:"auth-header"},[ae("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),ae("form",{class:"auth-form",onSubmit:sn(u,["prevent"])},[ae("div",Zb,[f[4]||(f[4]=ae("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),ae("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=g=>d())},null,32)]),ae("div",e_,[f[5]||(f[5]=ae("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),ae("div",t_,[ae("input",{id:"inp__text--password",type:n.value?"text":"password",autocomplete:"current-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,a_),ae("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=g=>o()),tabindex:"-1"},[ae("span",{class:da(n.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),ae("div",s_,[ae("a",{class:"auth-link",onClick:f[2]||(f[2]=g=>s("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=ae("div",{class:"auth-actions"},[ae("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),ae("p",r_,[f[6]||(f[6]=ae("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=qa()),ae("a",{class:"auth-link",onClick:f[3]||(f[3]=g=>s("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},o_=ma(n_,[["__scopeId","data-v-536c264d"]]),i_={class:"auth-page"},l_={__name:"signout_route",setup(e){const t=Mt();_e();const a=()=>{mvvLegit.doSignout()},s=()=>{t.push({name:"home_route"})};return(r,n)=>(Xe(),ft("div",i_,[n[1]||(n[1]=ha('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),ae("div",{class:"auth-page-right"},[ae("div",{class:"auth-card"},[n[0]||(n[0]=ae("div",{class:"auth-header"},[ae("h1",{class:"auth-title"},"Sign Out"),ae("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),ae("div",{class:"auth-actions"},[ae("button",{onClick:a,class:"btn btn-red"}," Sign Out "),ae("button",{onClick:s,class:"btn btn-outline"}," Cancel ")])])])]))}},c_=ma(l_,[["__scopeId","data-v-15bfefd6"]]),d_={class:"auth-page"},u_={class:"auth-page-right"},p_={class:"auth-card auth-card-wide"},f_={class:"form-row"},h_={class:"form-group"},m_={class:"form-group"},g_={class:"form-group"},b_={class:"form-group"},__={class:"form-group"},y_={class:"password-input-wrapper"},v_=["type"],w_={class:"form-group"},T_={class:"password-input-wrapper"},S_=["type"],x_={class:"form-group form-group-checkbox"},E_={class:"checkbox-label"},k_={class:"auth-link-center"},P_={__name:"signup_route",setup(e){const t=Mt(),a=_e(),s=(b="signin")=>{t.push({name:b})};let r=null,n=null;const o=lt(!1),i=lt(!1),l=lt(!1),c=()=>{o.value=!o.value},d=()=>{i.value=!i.value},u=b=>{b.preventDefault(),ce.publish(a.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(b=3,w=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":b=3,w=1;break;case"white_label":b=3,w=4;break}const v=Math.floor(Math.random()*b)+w,S=document.querySelector(".img__bg")?.classList;S&&(S.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),S.add(`img__bg--${v}`)),r||(r=ce.subscribe("APP__ROUTE_SYNC",(P,E)=>{const T=JSON.parse(E);switch(Object.keys(T)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(b=>{const w=a.appCLIFeatures?.features?.lang?.state;let v=a.appMeta.microcopy.language.filter(S=>S.code==w)[0]?.copy;v=v.filter(S=>S[0]==b.dataset.syncMicrocopyText)[0],v&&(b.textContent=v[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(b=>{const w=a.appCLIFeatures?.features?.lang?.state;let v=a.appMeta.microcopy.language.filter(S=>S.code==w)[0]?.copy;v=v.filter(S=>S[0]==b.dataset.syncMicrocopyPlaceholder)[0],v&&(b.placeholder=v[1])})},g=b=>{Jt.neodigmUtils().shake(b||"#inp__text--email")},_=()=>{let b=document.querySelectorAll("#inp__text--email")[0].value;a.doCLI(b)},y=b=>{const w=[];return b.length<10&&w.push("at least 10 characters"),/[a-z]/.test(b)||w.push("1 lowercase"),/[A-Z]/.test(b)||w.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(b)||w.push("1 special character"),/[^\x00-\x7F]/.test(b)&&w.push("ASCII characters only"),w},m=async()=>{const b=document.querySelector("#inp__text--username"),w=b?.value?.trim();if(w)try{(await Ee.checkUserName(w)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),b.value="",b.focus())}catch(v){console.error("Error checking username:",v)}},h=()=>{const b=document.querySelector("#inp__text--first-name"),w=document.querySelector("#inp__text--last-name"),v=document.querySelector("#inp__text--email"),S=document.querySelector("#inp__text--username"),P=document.querySelector("#inp__text--password"),E=document.querySelector("#inp__text--verify-password");let T=null,x=null;if(!b?.value)T="Please enter your first name",x="#inp__text--first-name";else if(!w?.value)T="Please enter your last name",x="#inp__text--last-name";else if(!v?.value)T="Please enter your email",x="#inp__text--email";else if(v.value.indexOf("@")===-1||v.value.indexOf(".")===-1)T="Please enter a valid email address",x="#inp__text--email";else if(!S?.value)T="Please enter a user name",x="#inp__text--username";else if(!P?.value)T="Please enter a password",x="#inp__text--password";else{const O=y(P.value);if(O.length>0)T="Password must have:|"+O.join(", "),x="#inp__text--password";else if(!E?.value)T="Please verify your password",x="#inp__text--verify-password";else if(P.value!==E.value)T="Passwords do not match",x="#inp__text--verify-password";else{const $=b.value.trim(),L=w.value.trim(),U=[{userName:S.value.trim(),ts:Date.now()}],K={email:v.value,hash:Jt.neodigmUtils().genHash(P.value),first:$,last:L,company:"",phone:"",tags:U};Ee.doSignup(K,re=>{re.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}T&&(g(x),neodigmToast.q(T,"danger"))};return Qt(()=>{p(),f(),n||(n=ce.subscribe(a.hierTopics.ROUTE__SIGNUP__TERMS,(b,w)=>{JSON.parse(w).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(b,w)=>(Xe(),ft("div",d_,[w[23]||(w[23]=ha('<div class="auth-page-left" data-v-e1a086be><div class="auth-bg" data-v-e1a086be><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div></div><div class="auth-overlay" data-v-e1a086be></div><div class="auth-branding-content" data-v-e1a086be><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-e1a086be><p class="auth-branding-tagline" data-v-e1a086be>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-e1a086be>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-e1a086be> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),ae("div",u_,[ae("div",p_,[ae("form",{class:"auth-form",onSubmit:sn(h,["prevent"])},[ae("div",f_,[ae("div",h_,[w[12]||(w[12]=ae("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),ae("input",{id:"inp__text--first-name",type:"text",autocomplete:"given-name","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"First name",onKeyup:w[0]||(w[0]=qt(v=>h(),["enter"]))},null,32)]),ae("div",m_,[w[13]||(w[13]=ae("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),ae("input",{id:"inp__text--last-name",type:"text",autocomplete:"family-name","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Last name",onKeyup:w[1]||(w[1]=qt(v=>h(),["enter"]))},null,32)])]),ae("div",g_,[w[14]||(w[14]=ae("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),ae("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:w[2]||(w[2]=v=>_()),onKeyup:w[3]||(w[3]=qt(v=>h(),["enter"]))},null,32)]),ae("div",b_,[w[15]||(w[15]=ae("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),ae("input",{id:"inp__text--username",type:"text",autocomplete:"username","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:w[4]||(w[4]=v=>m()),onKeyup:w[5]||(w[5]=qt(v=>h(),["enter"]))},null,32)]),ae("div",__,[w[16]||(w[16]=ae("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),ae("div",y_,[ae("input",{id:"inp__text--password",type:o.value?"text":"password",autocomplete:"new-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:w[6]||(w[6]=qt(v=>h(),["enter"]))},null,40,v_),ae("button",{type:"button",class:"password-toggle-btn",onClick:w[7]||(w[7]=v=>c()),tabindex:"-1"},[ae("span",{class:da(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),w[17]||(w[17]=ae("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),ae("div",w_,[w[18]||(w[18]=ae("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),ae("div",T_,[ae("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:w[8]||(w[8]=qt(v=>h(),["enter"]))},null,40,S_),ae("button",{type:"button",class:"password-toggle-btn",onClick:w[9]||(w[9]=v=>d()),tabindex:"-1"},[ae("span",{class:da(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),ae("div",x_,[ae("label",E_,[Ep(ae("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":w[10]||(w[10]=v=>l.value=v),class:"terms-checkbox"},null,512),[[nh,l.value]]),w[19]||(w[19]=ae("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),ae("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),w[22]||(w[22]=ae("div",{class:"auth-actions"},[ae("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),ae("p",k_,[w[20]||(w[20]=ae("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),w[21]||(w[21]=qa()),ae("a",{class:"auth-link",onClick:w[11]||(w[11]=v=>s("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},A_=ma(P_,[["__scopeId","data-v-e1a086be"]]),C_={class:"auth-page"},O_={class:"auth-page-right"},$_={class:"auth-card"},R_={class:"form-group"},M_={class:"auth-link-center"},L_={__name:"forgot_route",setup(e){const t=Mt(),a=_e(),s=(c="signin_route")=>{t.push({name:c})};let r=null;const n=(c=3,d=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),r||(r=ce.subscribe("APP__ROUTE_SYNC",(f,g)=>{const _=JSON.parse(g);switch(Object.keys(_)[0]){case"Motif":n();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=a.appCLIFeatures?.features?.lang?.state;let u=a.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=a.appCLIFeatures?.features?.lang?.state;let u=a.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},i=c=>{Jt.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Ee.genHeaders()};fetch(Ee.API_baseURI+"/m5t/"+Ee.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{s("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(u),neodigmToast.q(d,"danger"))};return Qt(()=>{n(),o()}),(c,d)=>(Xe(),ft("div",C_,[d[7]||(d[7]=ha('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),ae("div",O_,[ae("div",$_,[d[6]||(d[6]=ae("div",{class:"auth-header"},[ae("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),ae("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),ae("form",{class:"auth-form",onSubmit:sn(l,["prevent"])},[ae("div",R_,[d[2]||(d[2]=ae("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),ae("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=qt(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=ae("div",{class:"auth-actions"},[ae("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),ae("p",M_,[d[3]||(d[3]=ae("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=qa()),ae("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>s("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},N_={class:"auth-page"},D_={class:"auth-page-right"},I_={class:"auth-card"},B_={class:"form-group"},F_={class:"password-input-wrapper"},z_=["type"],j_={class:"form-group"},H_={class:"password-input-wrapper"},U_=["type"],q_={__name:"resethash_route",setup(e){const t=Mt(),a=_e(),s=()=>{t.push({name:"home_route"})};let r=null;const n=lt(!1),o=lt(!1),i=()=>{n.value=!n.value},l=()=>{o.value=!o.value},c=(g=3,_=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":g=3,_=1;break;case"white_label":g=3,_=4;break}const y=Math.floor(Math.random()*g)+_,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${y}`)),r||(r=ce.subscribe("APP__ROUTE_SYNC",(h,b)=>{const w=JSON.parse(b);switch(Object.keys(w)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const _=a.appCLIFeatures?.features?.lang?.state;let y=a.appMeta.microcopy.language.filter(m=>m.code==_)[0]?.copy;y=y.filter(m=>m[0]==g.dataset.syncMicrocopyText)[0],y&&(g.textContent=y[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const _=a.appCLIFeatures?.features?.lang?.state;let y=a.appMeta.microcopy.language.filter(m=>m.code==_)[0]?.copy;y=y.filter(m=>m[0]==g.dataset.syncMicrocopyPlaceholder)[0],y&&(g.placeholder=y[1])})},u=g=>{Jt.neodigmUtils().shake(g||"#inp__text--password")},p=g=>{const _=[];return g.length<10&&_.push("at least 10 characters"),/[a-z]/.test(g)||_.push("1 lowercase"),/[A-Z]/.test(g)||_.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||_.push("1 special character"),/[^\x00-\x7F]/.test(g)&&_.push("ASCII characters only"),_},f=()=>{const g=document.querySelector("#inp__text--password"),_=document.querySelector("#inp__text--verify-password");let y=null,m=null;if(!g?.value)y="Please enter a password",m="#inp__text--password";else{const h=p(g.value);if(h.length>0)y="Password must have:|"+h.join(", "),m="#inp__text--password";else if(!_?.value)y="Please verify your password",m="#inp__text--verify-password";else if(g.value!==_.value)y="Passwords do not match",m="#inp__text--verify-password";else{const b=a.appSession.session_user.email||"",w={email:b,hash:Jt.neodigmUtils().genHash(g.value),modified_by:b},v={method:"POST",body:JSON.stringify(w),headers:Ee.genHeaders()};fetch(Ee.API_baseURI+"/m5t/"+Ee.API_ver+"/acctEntity/resetHash",v).then(S=>S.json()).then(S=>{S.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(S=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}y&&(u(m),neodigmToast.q(y,"danger"))};return Qt(()=>{c(),d()}),(g,_)=>(Xe(),ft("div",N_,[_[9]||(_[9]=ha('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),ae("div",D_,[ae("div",I_,[_[8]||(_[8]=ae("div",{class:"auth-header"},[ae("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),ae("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),ae("form",{class:"auth-form",onSubmit:sn(f,["prevent"])},[ae("div",B_,[_[4]||(_[4]=ae("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),ae("div",F_,[ae("input",{id:"inp__text--password",type:n.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:_[0]||(_[0]=qt(y=>f(),["enter"]))},null,40,z_),ae("button",{type:"button",class:"password-toggle-btn",onClick:_[1]||(_[1]=y=>i()),tabindex:"-1"},[ae("span",{class:da(n.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),_[5]||(_[5]=ae("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),ae("div",j_,[_[6]||(_[6]=ae("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),ae("div",H_,[ae("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:_[2]||(_[2]=qt(y=>f(),["enter"]))},null,40,U_),ae("button",{type:"button",class:"password-toggle-btn",onClick:_[3]||(_[3]=y=>l()),tabindex:"-1"},[ae("span",{class:da(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),ae("div",{class:"auth-actions"},[_[7]||(_[7]=ae("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),ae("button",{type:"button",onClick:s,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},G_=ma(q_,[["__scopeId","data-v-3ae2c87b"]]),V_={class:"auth-page"},K_={class:"auth-page-right"},Y_={class:"auth-card"},W_={class:"verification-content"},J_={class:"timer-display"},X_={__name:"verf_link_route",setup(e){const t=Mt();lu(),_e();const a=lt(7200);let s=null;const r=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},n=()=>{s=setInterval(()=>{a.value--,a.value<=0&&(clearInterval(s),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Qt(()=>{n()}),Zr(()=>{s&&clearInterval(s)}),(o,i)=>(Xe(),ft("div",V_,[i[4]||(i[4]=ha('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),ae("div",K_,[ae("div",Y_,[i[3]||(i[3]=ae("div",{class:"auth-header"},[ae("h1",{class:"auth-title"},"Check Your Email"),ae("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),ae("div",W_,[i[0]||(i[0]=ae("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=ae("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=ae("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),ae("div",J_,Dc(r(a.value)),1)])])])]))}},Q_=ma(X_,[["__scopeId","data-v-d92b2a33"]]),zr=Pm({history:om(),routes:[{path:"/",name:"splash_route",component:al},{path:"/splash_route",name:"splash_route",component:al},{path:"/error_route",name:"error_route",component:Ls},{path:"/forgot_route",name:"forgot_route",component:L_},{path:"/resetforgot_route",name:"resetforgot_route",component:Ls},{path:"/resethash_route",name:"resethash_route",component:G_},{path:"/signin_route",name:"signin_route",component:o_},{path:"/signout_route",name:"signout_route",component:c_},{path:"/signup_route",name:"signup_route",component:A_},{path:"/verf_link_route",name:"verf_link_route",component:Q_},{path:"/offline_route",name:"offline_route",component:Ls},{path:"/home_route",name:"home_route",component:qb},{path:"/appFAQ",name:"appFAQ",component:Ls},{path:"/appHelp",name:"appHelp",component:Wb}]});zr.beforeEach((e,t,a)=>{if(e.query.brand!==void 0){const s=e.query.brand;s==="null"||s===""?Ts.clearBrand():Ts.setBrand(s);const r={...e.query};delete r.brand,a({...e,query:r,replace:!0})}else a()});class Z_ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Ce.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),a=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(a)?a[1]?.length||0:a.guids?.length||0,max:Array.isArray(a)?parseInt(a[0]?.max||0):a.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Ce.theme}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return!1;try{const s=this.getAttribute("data-bma-tourn-entities"),r=s?JSON.parse(s):{guids:[]};return(Array.isArray(r)?r[1]||[]:r.guids||[]).includes(a)}catch{return!1}}getUserTrophy(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;try{const s=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const r of s){if(typeof r!="object"||!r)continue;let n=null;if(r.entity_guid===a&&r.badge?n=r.badge:r[a]&&(n=r[a]),n?.includes("gold"))return"gold";if(n?.includes("silver"))return"silver";if(n?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let a=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z"));const s=Date.now(),r=a.getTime()-s;if(r<=0)return null;const n=Math.floor(r/864e5),o=Math.floor(r%864e5/36e5),i=Math.floor(r%36e5/6e4);return n>0?`${n}d ${o}h`:o>0?`${o}h ${i}m`:`${i}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const a=this.getCountdown();t.textContent=a||"",a||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},a=this.sportsAllowed;if(!Array.isArray(a)||a.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const s=Math.min(a.length,3);let r="";for(let n=0;n<s;n++){const o=a[n].key||a[n],i=nt.find(d=>d.key===o),l=i?i.group:"default",c=t[o]||o.replace(/^[a-z]+_/,"").toUpperCase();r+=`<span class="lc__sport-item"><bma-sport-icon sport="${o}" data-sport-group="${l}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return a.length>3&&(r+=`<span class="lc__sport-count" data-sport-overflow="true">+${a.length-3}</span>`),r}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(a=>{const s=a.key||a;return t[s]||s.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,a,s,r){const n=(t-a)/2,o=2*Math.PI*n,i=o-s/100*o,l=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${l}" cy="${l}" r="${n}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${a}" />
            <circle cx="${l}" cy="${l}" r="${n}"
                fill="none" stroke="${r}" stroke-width="${a}"
                stroke-linecap="round"
                stroke-dasharray="${o}"
                stroke-dashoffset="${i}"
                transform="rotate(-90 ${l} ${l})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),this.dispatchAction(a.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",a=>{a.stopPropagation();const s=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(s,"info")})}render(){const t=this.isUserParticipating(),a=this.getUserTrophy(),s=this.status.toLowerCase(),r=t&&this.status!=="COMPLETED",n=!t&&this.status==="UPCOMING";this.userRank;const o=(this.entities.current/(this.entities.max||1)*100).toFixed(1);this.getCountdown();const l={upcoming:"#00E676",locked:"#F7C60D",completed:"#CD5659"}[s]||"#969696",c=52,d=3,u=m=>m.length>7?"sm":m.length>5?"md":"lg",p=`${this.entities.current}/${this.entities.max}`,f=u(p);let g="";a?g=`<span class="ring__trophy ring__trophy--${a}"></span>`:g=`<span class="ring__entrants ring__entrants--${f}">${this.entities.current}<span class="ring__entrants-sep">/</span>${this.entities.max}</span>`;const y=parseFloat(this.tournamentDollars).toLocaleString();this.shadowRoot.innerHTML=`
            <style>
                ${Qe()}
                ${ga()}

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
                        <div class="lc__stat-val lc__stat-val--accent">${y}</div>
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
        `}}customElements.define("bma-tournament-list-card",Z_);const $e={updateTDBalance(e,t){const a=document.querySelector(e);if(!a)return;t%1!==0?a.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,a,s=null,r=0){const n=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),i=document.querySelector("#summary-payout");n&&(this.updateTDBalance("#summary-balance",e),e<0?n.classList.add("summary-cell__red"):n.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),i&&(i.textContent=a.toFixed(2),a<0?i.classList.add("summary-cell__red"):i.classList.remove("summary-cell__red"));const l=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(l){let d="";if(s){const p=s.tournament_dollars||0,f=e-p;f>0?d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(d=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const u=e<0?"#FF5252":"#00E676";l.innerHTML=`<span style="color: ${u};">TD$ ${e.toLocaleString()}</span>${d}`}if(c){const d=r||a||0;let u="";d>0&&(u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${d.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${u}`}if(s&&s.tournament_dollars){const d=s.tournament_dollars,u=document.querySelector(".dash-stat__gauge-fill--balance");if(u){const f=Math.max(e/d*100,0);u.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(t/d*100,100);p.style.width=`${f}%`}}},_globalLBCache:{data:null,ts:0,inflight:!1},async prefetchGlobalLeaderboard(){if(!(this._globalLBCache.data&&Date.now()-this._globalLBCache.ts<18e4)&&!this._globalLBCache.inflight){this._globalLBCache.inflight=!0;try{const t=_e(),a=await Ee.fetchGlobalLeaderboard(),s=a?.data||a?.rows||[],r=t.coreTourn.length>0?t.coreTourn[t.coreTourn.length-1].data:[],n=r.filter(i=>(i.status||i.class)==="COMPLETED"),o=await Promise.all(n.map(i=>Ee.fetchLeaderboard(i.guid).catch(()=>null)));this._globalLBCache={data:{rawData:s,perTournLeaderboards:o,tournaments:r},ts:Date.now(),inflight:!1},console.log("[appEvents] Global leaderboard prefetched:",s.length,"entries,",n.length,"tournament details")}catch(t){console.warn("[appEvents] Global leaderboard prefetch failed:",t),this._globalLBCache.inflight=!1}}},_betStatsCache:{stats:null,ts:0,inflight:!1},async _ensureBetStatsCache(e){const a=Date.now();if(this._betStatsCache.stats&&a-this._betStatsCache.ts<3e5)return this._betStatsCache.stats;if(this._betStatsCache.inflight)return null;this._betStatsCache.inflight=!0;try{const r=(await Ee.fetchBetSlips(e))?.rows||[];let n=0,o=0,i=0;return r.forEach(l=>{(l.bet||[]).forEach(d=>{Object.keys(d).forEach(u=>{if(u==="short_title")return;const p=d[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?n++:o++:i++)})})}),this._betStatsCache={stats:{wins:n,losses:o,pending:i},ts:a,inflight:!1},this._betStatsCache.stats}catch(s){return console.warn("[app_events] fetchBetSlips failed for stats panel",s),this._betStatsCache.inflight=!1,null}},buildStatsPanel(e,t,a=null){if(!t||!e||e.length===0)return"";const s=e.filter(g=>(g.entities?.guids||[]).includes(t)),r=s.filter(g=>(g.status||g.class)==="COMPLETED").length;let n=0,o=0;s.forEach(g=>{(Array.isArray(g.tags)?g.tags:[]).forEach(y=>{if(!y||typeof y!="object")return;const m=(y.entity_guid===t?y.badge:null)||(typeof y[t]=="string"?y[t]:null);typeof m=="string"&&m.startsWith("--badge__ribbon--")&&(o++,m==="--badge__ribbon--gold"&&n++)})});const i={};s.forEach(g=>{(Array.isArray(g.sports_allowed)?g.sports_allowed:[]).forEach(y=>{const h=nt.find(b=>b.key===y.key)?.group||"Other";i[h]=(i[h]||0)+1})});let l="—",c="",d=0;Object.entries(i).forEach(([g,_])=>{_>d&&(d=_,l=g,c=g)});let u="—",p="Pending";if(a){const g=a.wins+a.losses;g>0?(u=`${Math.round(a.wins/g*100)}%`,p=`${a.wins}-${a.losses}`):(u="—",p="No settled bets")}const f=c?`<bma-sport-icon data-sport-group="${c.toLowerCase()}"></bma-sport-icon>`:"";return`
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
        `},categorizeTournaments(e,t,a,s,r={}){const n=[],{subStatus:o="all",sort:i="default",result:l="all",odds:c="all"}=r,d=P=>(P.entities?.guids||[]).includes(s),u=P=>P.status==="UPCOMING"||P.class==="UPCOMING",p=P=>P.status==="LOCKED"||P.class==="LOCKED",f=P=>u(P)||p(P),g=P=>P.status==="COMPLETED"||P.class==="COMPLETED",_=P=>Array.isArray(P.matches_expanded)&&P.matches_expanded.length>0,y=(P,E)=>(P.sports_allowed||[]).some(T=>T.key===E),m=P=>nt.find(E=>E.key===P)?.title||P,h=P=>{const E=P.tags||[];for(const T of E)if(!(typeof T!="object"||!T)&&(T.entity_guid===s&&T.badge||T[s]))return!0;return!1},b=P=>{if(i==="default")return P;const E=[...P];switch(i){case"starting_soon":E.sort((T,x)=>new Date(T.window_start_time||0)-new Date(x.window_start_time||0));break;case"most_entrants":E.sort((T,x)=>(x.entities?.guids?.length||0)-(T.entities?.guids?.length||0));break;case"fewest_spots":E.sort((T,x)=>{const O=(T.entities?.max||0)-(T.entities?.guids?.length||0),$=(x.entities?.max||0)-(x.entities?.guids?.length||0);return O-$});break;case"recently_active":E.sort((T,x)=>new Date(x.status_time||0)-new Date(T.status_time||0));break;case"newest":E.sort((T,x)=>new Date(x.status_time||0)-new Date(T.status_time||0));break;case"td_high":E.sort((T,x)=>parseFloat(x.tournament_dollars||0)-parseFloat(T.tournament_dollars||0));break;case"td_low":E.sort((T,x)=>parseFloat(T.tournament_dollars||0)-parseFloat(x.tournament_dollars||0));break}return E},w=P=>l==="all"?P:l==="trophy"?P.filter(E=>h(E)):l==="no_trophy"?P.filter(E=>!h(E)):P;let v=e,S="";if(a==="multi"?(v=e.filter(P=>(P.sports_allowed?.length||0)>1),S="Multi-Sport "):a!=="all"&&(v=e.filter(P=>y(P,a)),S=m(a)+" "),t==="lobby"){let P=v;if(o==="open"?P=v.filter(E=>u(E)):o==="locked"?P=v.filter(E=>p(E)):o==="completed"&&(P=v.filter(E=>g(E))),o==="all"){const E=b(P.filter(O=>u(O)&&!d(O)));n.push({title:`Open Entry ${S}Tournaments`,tournaments:E});const T=b(P.filter(O=>p(O)&&!d(O)));T.length>0&&n.push({title:`In Progress - Entry Closed ${S}Tournaments`,tournaments:T});const x=b(P.filter(O=>g(O))).slice(0,20);x.length>0&&n.push({title:`Recently Completed ${S}Tournaments`,tournaments:x})}else{const E=b(P),T={open:"Open",locked:"In Progress",completed:"Completed"};E.length>0&&n.push({title:`${T[o]} ${S}Tournaments`,tournaments:E})}}else if(t==="my"){const P=v.filter($=>d($));let E=P.filter($=>f($));o==="active"?E=E.filter($=>p($)):o==="upcoming"&&(E=E.filter($=>u($))),c==="available"?E=E.filter($=>_($)):c==="none"&&(E=E.filter($=>!_($)));const T=b(E);n.push({title:`Your Active ${S}Tournaments`,tournaments:T});const x=w(P.filter($=>g($))),O=b(x);O.length>0&&n.push({title:`Your Completed ${S}Tournaments`,tournaments:O})}else if(t==="completed"){const P=b(w(v.filter(T=>d(T)&&g(T))));P.length>0&&n.push({title:`Your Completed ${S}Tournaments`,tournaments:P});const E=b(v.filter(T=>!d(T)&&g(T)));E.length>0&&n.push({title:`Other Completed ${S}Tournaments`,tournaments:E})}else t==="private"?n.push({title:"Private Contests",tournaments:[],emptyMessage:"Private Contests Coming Soon",emptySubtext:"Create and join private contests with friends — feature in development"}):n.push({title:"Tournaments",tournaments:e});return n},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=_e();t.appSession?.session_user?.guid;const a=e.tournament_dollars||1e4;let s=0,r=0,n=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const y=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.tournament_guid===e.guid);console.log("[Dashboard Update] Found",y.length,"existing bets for this tournament"),y.forEach(m=>{(m.bet||[]).forEach(b=>{Object.keys(b).filter(v=>v!=="short_title").forEach(v=>{const S=b[v];S&&(S.stake&&(s+=parseFloat(S.stake)),S.reconciled===!0&&S.payout>0&&(r+=parseFloat(S.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const _=parseFloat(o.textContent)||0;n=Math.max(0,_-s),console.log("[Dashboard Update] Summary total stakes:",_,"Pending:",n)}const i=s+n,l=a-s-n+r;console.log("[Dashboard Update] TD$:",a,"Committed:",s,"Pending:",n,"Payouts:",r,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");if(c){const _=l-a;let y="";_>0?y=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${_.toLocaleString()})</span>`:_<0&&(y=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${_.toLocaleString()})</span>`);const m=l<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${m};">TD$ ${l.toLocaleString()}</span>${y}`}const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".dash-stat__gauge-fill--pending");if(d){const _=n>0?n:i,y=r||0;let m="";if(y>0&&(m=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${y.toLocaleString()})</span>`),d.innerHTML=`TD$ ${_.toLocaleString()}${m}`,u){const h=Math.min(_/a*100,100);u.style.width=`${h}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const _=Math.max(l/a*100,0);p.style.width=`${_}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&e){const _=e.entities?.guids?.length||0,y=e.entities?.max||100,m=_/y*100;f.style.width=`${m}%`}const g=document.getElementById("game-mode-progress");if(g&&typeof window.GameMode<"u"){const _=e.class||"DEFAULT",y=window.GameMode.get(_),m=t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(b=>b.coreTournaments__guid===e.guid||b.tournament_guid===e.guid):[],h=y.getProgressUI(m,e);if(h.type!=="NONE"){const b=h.typesStatus?h.typesStatus.map(v=>v.placed?`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: rgba(0, 230, 118, 0.12); box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.35); color: #00E676; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.3px;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#00E676"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            ${v.label}${v.count>1?' <span style="opacity: 0.7;">×'+v.count+"</span>":""}
                        </span>`:`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: transparent; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12); color: rgba(255,255,255,0.35); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.3px;">
                            ${v.label}
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
            </div>`;return}const a=new Date,s=[...e.matches_expanded].sort((n,o)=>{const i=new Date(n.scheduled_at),l=new Date(o.scheduled_at),c=i<a,d=l<a;return c&&!d?1:!c&&d?-1:i-l}),r=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&_e().coreTourn.length>0&&(i=_e().coreTourn[_e().coreTourn.length-1].data.find(g=>g.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=_e();ce.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};s.forEach(n=>{const i=new Date(n.scheduled_at)<a;let l=!1;try{l=(typeof n.scoreboard_data=="string"?JSON.parse(n.scoreboard_data):n.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",n.id),c.setAttribute("data-match-guid",n.odds_id||n.guid||n.id),c.setAttribute("data-match-title",n.title),c.setAttribute("data-match-short-title",n.short_title||n.title),c.setAttribute("data-scheduled-at",n.scheduled_at),c.setAttribute("data-home-team",n.home_team_id||"Home"),c.setAttribute("data-away-team",n.away_team_id||"Away"),c.setAttribute("data-is-disabled",i||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),n.odds_markets){const d=typeof n.odds_markets=="string"?n.odds_markets:JSON.stringify(n.odds_markets);c.setAttribute("data-odds-markets",d)}if(n.scoreboard_data){const d=typeof n.scoreboard_data=="string"?n.scoreboard_data:JSON.stringify(n.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(n.sport_id)c.setAttribute("data-sport-key",n.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const g=document.querySelector(".bet-grid__slip-BETSLIP-content");if(g){const _=g.querySelectorAll("bma-bet-entry");let y=!1;_.forEach(m=>{if(y)return;const h=m.getAttribute("data-content-type"),b=m.getAttribute("data-content-odds");h===u.type&&b===u.price&&(m.remove(),y=!0)}),g.children.length===0&&(g.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}f.classList.remove("btn--active"),setTimeout(()=>{r()},100)}else{const g=document.querySelector(".play-cntr"),_=g?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const h=window.GameMode.get(_),b=_e(),w=b.coreBetSlip.length>0?b.coreBetSlip[b.coreBetSlip.length-1].data.filter(S=>S.coreTournaments__guid===g?.dataset?.currentTournGuid):[],v=h.canPlaceBet({matchGuid:u.matchGuid,type:u.type,team:u.team},w,null);if(!v.allowed){typeof neodigmToast<"u"&&neodigmToast.q(v.reason,"warning",3e3);return}}document.querySelectorAll("bma-bet-match-card").forEach(h=>{h.shadowRoot.querySelectorAll(".btn--selected").forEach(b=>{b.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const y=_e(),m=u.type;m==="spread"?ce.publish(y.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):m==="money"?ce.publish(y.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):m==="total"&&ce.publish(y.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),ce.publish(y.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const a=document.querySelector("[data-publish-betslip]");a&&delete a.dataset.processing;const s=document.querySelector(".bet-grid__slip-BETSLIP-content");s&&(s.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const r=_e();if(r.coreTourn.length>0){const i=r.coreTourn[r.coreTourn.length-1].data.find(l=>l.guid===e);i&&$e.renderMatchCards(i)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{ce.publish(r.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const n=document.querySelector(".bet-grid__slip");n&&n.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(s=>{try{return JSON.parse(s.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(s=>{const r=s.getAttribute("data-match-guid"),n=s.getAttribute("data-home-team"),o=s.getAttribute("data-away-team");(s.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?n:o;t.some(g=>{if(g.coreMatches__guid!==r)return!1;const _=g.bet||[];if(_.length===0)return!1;const y=_[0],h=Object.keys(y).filter(v=>v!=="short_title")[0],w=y[h]?.type;return c==="total"?w===c:w===c&&h===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},updatePlayButton(){const e=_e(),t=document.querySelector(".play-cntr"),a=t?.dataset?.currentTournGuid,s=t?.dataset?.currentTournAction||"INFO",r=document.getElementById("btn-join__play--id");if(!r||!a||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===a);if(!o)return;const i=e.appSession?.session_user?.guid,l=o.entities?.guids?.includes(i),c=o.status;r.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(r.style.visibility="",c==="UPCOMING"&&!l?s==="INFO"?(r.textContent="Join",r.dataset.requiresJoin="true"):s==="PLAY"&&(r.textContent="Play",r.dataset.requiresJoin="false"):(r.textContent="Play",r.dataset.requiresJoin="false"))},populateInfoPage(){const e=_e(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||e.coreTourn.length===0)return;const r=e.coreTourn[e.coreTourn.length-1].data.find(Y=>Y.guid===a);if(!r)return;const n=document.getElementById("pop-play__caro-info-summary1--id");if(!n)return;const o=Y=>{if(!Y)return"N/A";let j=new Date(Y);return!Y.includes("Z")&&!Y.match(/[+-]\d{2}:\d{2}$/)&&(j=new Date(Y+"Z")),isNaN(j.getTime())?"Invalid Date":j.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};r.status&&`${r.status.toLowerCase()}`;const i={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},l=r.sports_allowed&&Array.isArray(r.sports_allowed)?r.sports_allowed.map(Y=>{const j=Y.key||Y,I=nt.find(A=>A.key===j),H=I?I.group:"default",z=i[j]||I?.title||j;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${j}" data-sport-group="${H}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${z}</span>
                </span>`}).join(""):"N/A",c=e.appSession?.session_user?.guid,d=r.entities?.guids?.includes(c),u=r.entities?.guids?.length||0,p=r.entities?.max||0;(u/(p||1)*100).toFixed(1);const f=(()=>{const Y=new Date(r.window_start_time),j=new Date(r.window_end_time),I=new Date;if(isNaN(Y.getTime())||isNaN(j.getTime()))return"";const H=j-Y,z=I-Y;let A=0,R="";if(I<Y){A=0;const M=Y-I,N=Math.floor(M/864e5),F=Math.floor(M%864e5/36e5);R=N>0?`First match in ${N}d ${F}h`:`First match in ${F}h`}else if(I>j){const M=new Date(j.getFullYear(),j.getMonth(),j.getDate()),N=new Date(I.getFullYear(),I.getMonth(),I.getDate());A=M.getTime()===N.getTime()?95:100,R=A===100?"Tournament Complete":"Last Day"}else{A=Math.min(100,z/H*100);const M=Math.ceil(H/864e5),N=Math.ceil(z/864e5);R=N>=M?"Last Day":`Day ${N} of ${M}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${R}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${A.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),g=r.tags||[],y=g.some(Y=>Y.override_last_match_close===!0)?"+":"",m=g.some(Y=>Y.match_inprogress_lock===!0),h=g.some(Y=>Y.override_last_match_close===!0);let b="Free Play",w=null,v="";if(typeof window.GameMode<"u"){const Y=window.GameMode.get(r.class||"DEFAULT"),j=Y.getEffectiveRules(r);if(w=Y.getBadge(),b=Y.label,j.stakeRule==="SPEND_ALL"&&(v+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend All TD$</span></div>'),j.requiredBetTypes.length>0){const I=j.requiredBetTypes.map(H=>H==="SPREAD"?"Spread":H==="MONEY"?"Money Line":"Over/Under").join(", ");v+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${I}</span></div>`}j.oneBetPerMatchPerType&&(v+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const S=(()=>{const j=(r.tags||[]).find(A=>A.badge_gold!==void 0||A.badge_silver!==void 0||A.badge_bronze!==void 0);if(!j)return null;const I=j.badge_gold||0,H=j.badge_silver||0,z=j.badge_bronze||0;return I===0&&H===0&&z===0?null:{gold:I,silver:H,bronze:z}})(),P=r.status==="LOCKED"?"info-status-band--locked":r.status==="UPCOMING"?"info-status-band--open":r.status==="COMPLETED"?"info-status-band--completed":"",E=r.status==="LOCKED"?d?"In Progress — Entered":"In Progress":r.status==="UPCOMING"?d?"Open — Entered":"Open for Entry":r.status==="COMPLETED"?"Completed":r.status,T=r.matches_expanded?.length||0,x=T===0?"TBD":`${T}${y}`,O=`
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
                    <span class="info-key-stat__value">${x}</span>
                    <span class="info-key-stat__label">Games</span>
                </div>
            </div>`;r.status==="LOCKED"||r.status==="UPCOMING"||r.status,r.status==="LOCKED"||r.status;const $=`
            <div class="info-detail-row"><span>Game Mode</span><span>${b}${w?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${w.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${w.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${m?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${m?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${h?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${h?"On-going":"Fixed slate"}</span></div>
            ${v}
        `,L=`
            <div class="info-detail-row"><span>Sports</span><span>${l}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${o(r.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends</span><span>${o(r.window_end_time)}</span></div>
        `,U=S?`
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${S.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${S.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${S.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${S.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${S.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${S.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            <div style="padding: 16px 0 0;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); padding: 0 16px 8px;">Trophy Breakdown</div>
                ${S.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${S.gold}</span>
                </div>`:""}
                ${S.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${S.silver}</span>
                </div>`:""}
                ${S.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${S.bronze}</span>
                </div>`:""}
            </div>
        `:`<div class="info-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
            <p>No trophies configured for this tournament</p>
        </div>`,K=(()=>{if(!r.matches_expanded||!Array.isArray(r.matches_expanded)||r.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let Y=0,j=0,I=0;const H=new Date;r.matches_expanded.forEach(F=>{let V=null;try{V=typeof F.scoreboard_data=="string"?JSON.parse(F.scoreboard_data):F.scoreboard_data}catch{}V?.time_remaining?V.time_remaining.toLowerCase()==="final"?Y++:j++:new Date(F.scheduled_at)<H?Y++:I++});const z=j>0?"live":"upcoming",A=[];Y>0&&A.push(`<span class="match-filter-btn${z==="final"?" match-filter--active":""}" data-filter="final">${Y} Final</span>`),j>0&&A.push(`<span class="match-filter-btn match-filter-btn--live${z==="live"?" match-filter--active":""}" data-filter="live">${j} Live</span>`),I>0&&A.push(`<span class="match-filter-btn match-filter-btn--upcoming${z==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${I} Upcoming</span>`);const R=A.length>0?`<div class="match-filter-bar">${A.join("")}</div>`:"",M=new Date,N=r.matches_expanded.map(F=>{const V=F.scoreboard_data?typeof F.scoreboard_data=="string"?F.scoreboard_data:JSON.stringify(F.scoreboard_data):"";let se="upcoming",B=null;try{B=typeof F.scoreboard_data=="string"?JSON.parse(F.scoreboard_data):F.scoreboard_data}catch{}B?.time_remaining?se=B.time_remaining.toLowerCase()==="final"?"final":"live":se=new Date(F.scheduled_at)<M?"final":"upcoming";const k=se!==z;return`<bma-match-status
                    data-match-guid="${F.guid||F.odds_id||F.id||""}"
                    data-match-title="${F.short_title||F.title||"Match"}"
                    data-match-scheduled-at="${F.scheduled_at||""}"
                    data-match-home-team="${F.home_team_id||"Home"}"
                    data-match-away-team="${F.away_team_id||"Away"}"
                    data-match-home-score="${F.home_team_score!==null&&F.home_team_score!==void 0?F.home_team_score:""}"
                    data-match-away-score="${F.away_team_score!==null&&F.away_team_score!==void 0?F.away_team_score:""}"
                    data-match-scoreboard="${V.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${F.sport_id||""}"
                    data-match-status="${se}"
                    data-sync-theme="dark"
                    style="${k?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${R}
                </div>
                <div class="matches-scroll-container" id="info-matches-scroll" style="max-height: 480px; overflow-y: auto; position: relative; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.15) transparent;">
                    ${N}
                </div>
                <div class="matches-scroll-fade" style="height: 32px; margin-top: -32px; position: relative; pointer-events: none; background: linear-gradient(to top, rgba(16,16,16,0.95), transparent); z-index: 1;"></div>
            `})();n.innerHTML=`
            <div class="info-status-band ${P}">${E}</div>
            ${f?`<div class="info-surface" style="margin: 8px 0; padding: 12px 16px;">${f}</div>`:""}
            <div class="info-surface" style="margin: 0 0 8px;">
                ${O}
            </div>
            <div class="info-surface" style="margin: 0 0 8px;">
                <div style="font-size: 0.75rem; font-weight: 400; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.55); padding: 12px 16px 0;">Tournament Details</div>
                ${$}
            </div>
            <div class="info-surface">
                <div class="info-tabs">
                    <button class="info-tab info-tab--active" data-info-tab="summary"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Summary</button>
                    <button class="info-tab" data-info-tab="trophies"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Trophies</button>
                    <button class="info-tab" data-info-tab="matches"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> Matches</button>
                </div>
                <div class="info-tab-panel" data-info-panel="summary">${L}</div>
                <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${U}</div>
                <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${K}</div>
            </div>
        `,n.querySelectorAll(".info-tab").forEach(Y=>{Y.addEventListener("click",()=>{n.querySelectorAll(".info-tab").forEach(I=>I.classList.remove("info-tab--active")),Y.classList.add("info-tab--active");const j=Y.dataset.infoTab;n.querySelectorAll(".info-tab-panel").forEach(I=>{I.style.display=I.dataset.infoPanel===j?"":"none"})})});const re=n.querySelector('[data-info-panel="matches"]');if(re){re.addEventListener("click",I=>{const H=I.target.closest(".match-filter-btn");H&&(re.querySelectorAll(".match-filter-btn").forEach(z=>z.classList.remove("match-filter--active")),H.classList.add("match-filter--active"),re.querySelectorAll("bma-match-status").forEach(z=>{z.style.display=z.dataset.matchStatus===H.dataset.filter?"":"none"}))});const Y=re.querySelector(".matches-scroll-container"),j=re.querySelector(".matches-scroll-fade");if(Y&&j){const I=()=>{j.style.opacity=Y.scrollHeight-Y.scrollTop-Y.clientHeight<8?"0":"1"};Y.addEventListener("scroll",I),setTimeout(I,100)}}const J=document.getElementById("pop-play__caro-info-summary2--id");J&&(J.innerHTML="");const G=document.getElementById("pop-play__caro-info-list--id");G&&(G.innerHTML="")},async populateLeaderboard(){const e=_e(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,s=e.appSession?.session_user?.guid;if(!a){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const r=document.getElementById("pop-play__caro-leaderboard--id");if(!r)return;let n=document.getElementById("leaderboard-loading-banner");n||(n=document.createElement("neodigm-juicebar"),n.id="leaderboard-loading-banner",n.setAttribute("role","progressbar"),n.setAttribute("data-n55-theme","warning"),n.setAttribute("data-n55-size","small"),n.innerHTML="<div></div>",n.style.cssText=`
                width: 100%;
                margin: 6px;
            `,r.parentNode.insertBefore(n,r)),n.style.visibility="visible";try{const o=await Ee.fetchLeaderboard(a),i=o?.data||o?.rows;if(i&&i.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(L=>L.guid===a),d=c?.class||"DEFAULT_FORMAT",u=window.GameMode?.get?.(d),p=u?.rankLeaderboard?u.rankLeaderboard(i.map(L=>{const U=typeof L.combined_betslips=="string"?(()=>{try{return JSON.parse(L.combined_betslips)}catch{return[]}})():L.combined_betslips||[];return{...L,bets:U,timestamp:L.created_at||L.updated_at||0}}),c):i,f=parseFloat(c?.tournament_dollars||0),g=L=>{if(d!=="DEFAULT_FORMAT"||f<=0)return!0;let U=0;return(L.bets||[]).forEach(K=>{(K.bet||[]).forEach(re=>{Object.keys(re).forEach(J=>{J!=="short_title"&&(U+=parseFloat(re[J]?.stake||0))})})}),U>=f-.01},y=(()=>{if(d!=="DEFAULT_FORMAT")return"";const U=(c?.tags||[]).find(R=>R.badge_gold!==void 0||R.badge_silver!==void 0||R.badge_bronze!==void 0);if(!U)return"";const K=U.badge_gold||0,re=U.badge_silver||0,J=U.badge_bronze||0;if(K===0&&re===0&&J===0)return"";const Y=p.some(R=>(R.bets||[]).some(M=>(M.bet||[]).some(N=>Object.keys(N).some(F=>F!=="short_title"&&N[F]?.reconciled===!0))))?p.filter(g):[],j=R=>{if(!R)return'<span class="podium-slot__empty">Open</span>';const M=R.user_guid===s;return`<span class="podium-slot__name${M?" podium-slot__name--you":""}">${R.username||"Unknown"}${M?' <span class="podium-slot__you">YOU</span>':""}</span>`},I=Array.from({length:K},(R,M)=>j(Y[M])).join(""),H=Array.from({length:re},(R,M)=>j(Y[K+M])).join(""),z=Array.from({length:J},(R,M)=>j(Y[K+re+M])).join(""),A=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
                        <div class="leaderboard-podium">
                            <div class="leaderboard-podium__title">Trophy Preview</div>
                            <div class="leaderboard-podium__pack">
                                ${re>0?`<div class="podium-slot podium-slot--silver">
                                    <div class="podium-slot__trophy podium-slot__trophy--silver"></div>
                                    <span class="podium-slot__count">&times;${re}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--silver">
                                        <div class="podium-slot__names">${H}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${K>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${K}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${I}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${J>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${J}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${z}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${A?`<div class="leaderboard-podium__label">${A}</div>`:""}
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
                `,w=(L,U,K=!1)=>{let re="";if(c?.tags&&Array.isArray(c.tags)){const H=c.tags.find(z=>!!(typeof z=="object"&&z!==null&&(z.entity_guid===L.user_guid&&z.badge&&z.badge.startsWith("--badge__ribbon--")||z[L.user_guid]&&z[L.user_guid].startsWith("--badge__ribbon--"))));if(H){const z=H.badge||H[L.user_guid];z==="--badge__ribbon--gold"?re="badge-trophy--gold":z==="--badge__ribbon--silver"?re="badge-trophy--silver":z==="--badge__ribbon--bronze"&&(re="badge-trophy--bronze")}}const J=L.combined_betslips?typeof L.combined_betslips=="string"?L.combined_betslips:JSON.stringify(L.combined_betslips):"[]";let G="[]";if(L.combined_betslips&&c?.matches_expanded){const H=typeof L.combined_betslips=="string"?JSON.parse(L.combined_betslips):L.combined_betslips,z=[...new Set(H.map(R=>R.coreMatches__guid||R.match_guid||R.odds_id).filter(Boolean))],A=c.matches_expanded.filter(R=>{const M=R.guid||R.id||R.odds_id;return z.includes(M)});G=JSON.stringify(A)}const Y=parseFloat(L.calculated_tournament_dollars||0),j=parseInt(L.total_betslips||0),I=Y===0&&j===0?c?.tournament_dollars||0:L.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${U}"
                            data-username="${L.username||"Unknown"}"
                            data-user-guid="${L.user_guid||""}"
                            data-tournament-dollars="${I}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${L.total_betslips||0}"
                            data-total-payout="${L.total_payout||0}"
                            data-combined-betslips="${J.replace(/"/g,"&quot;")}"
                            data-user-matches="${G.replace(/"/g,"&quot;")}"
                            data-badge-class="${re}"
                            data-is-current-user="${L.user_guid===s}"
                            data-unqualified="${K}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `},v=p.filter(g),S=p.filter(L=>!g(L)),P=v.map((L,U)=>w(L,U+1,!1)).join(""),E=S.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${S.map(L=>w(L,"—",!0)).join("")}
                `:"";r.innerHTML=y+b+P+E,requestAnimationFrame(()=>{r.querySelectorAll("bma-leaderboard-card").forEach((L,U)=>{L.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",L.style.animationDelay=`${Math.min(U*60,400)}ms`})}),r.querySelectorAll(".leaderboard-tab").forEach(L=>{L.addEventListener("click",()=>{const U=L.dataset.lbTab;r.querySelectorAll(".leaderboard-tab").forEach(K=>K.classList.remove("leaderboard-tab--active")),L.classList.add("leaderboard-tab--active"),r.querySelectorAll("[data-lb-panel]").forEach(K=>{K.style.display=K.dataset.lbPanel===U?"":"none"})})});const T=v.findIndex(L=>L.user_guid===s),x=c?.entities?.guids?.length||p.length,O=T>=0?T+1:"—",$=document.getElementById("dashboard-rank");if($){const L=O==="—"?"—":`${O}/${x}`;$.innerHTML=`<span class="tourn-dashboard__rank-text">${L}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else r.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{n&&(n.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),r.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{n&&(n.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=_e(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||e.coreTourn.length===0)return;const r=e.coreTourn[e.coreTourn.length-1].data.find(n=>n.guid===a);r&&(console.log("[appEvents] Hydrating play popup for tournament:",a),this.populateInfoPage(),this.renderMatchCards(r),this.updateTournamentDashboard(r),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:a,subStatus:s,sort:r,result:n}=e,o=(c,d,u,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${d}">${u}</button>`;let i="";a==="lobby"?i+=`
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
            `;let d={subStatus:s,sort:r,result:n};c.addEventListener("click",u=>{const p=u.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,g=p.dataset.filterVal;d[f]=g,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(_=>_.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const u=l[a]||l.lobby;d={...u},Object.keys(u).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${u[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(d)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){ce.subscribe("APP",(E,T)=>{console.warn("~~ sub all APP | "+E+"|"+T)}),ce.subscribe("WC",(E,T)=>{console.warn("~~ sub all WC  | "+E+"|"+T)}),ce.subscribe("ROUTE",(E,T)=>{console.warn("~~ sub all ROUTE  | "+E+"|"+T)});let t="lobby",a="all",s="all",r="default",n="all",o="all",i=localStorage.getItem("bma_view_mode")||"cards";const l=()=>{a="all";const E=document.querySelector("bma-app-head-sports");E&&E.setAttribute("data-selected-chip","all")},c=()=>{const E=document.getElementById("filter-bar__count--id");if(!E)return;let T=0;s!=="all"&&T++,r!=="default"&&T++,n!=="all"&&T++,E.textContent=T,E.style.display=T>0?"":"none"},d=()=>{document.querySelectorAll(".home-tab").forEach(x=>x.classList.remove("home-tab--active"));const T=t==="my"?document.querySelector('[data-home-tab="active"]'):document.querySelector('[data-home-tab="lobby"]');T&&T.classList.add("home-tab--active")},u=()=>{s="all",r="default",n="all",o="all"};document.addEventListener("click",E=>{const T=E.target.closest(".category-filter-toggle");if(T){const $=T.closest(".tournament-category-header")?.querySelector(".category-filter-row");if($){const L=$.style.display!=="none";$.style.display=L?"none":"",T.classList.toggle("category-filter-toggle--open",!L),window._bmaFilterRowOpen=!L}return}const x=E.target.closest("[data-view-mode]");if(x){const O=x.dataset.viewMode;if(O===i)return;i=O,localStorage.setItem("bma_view_mode",O);const L=x.closest(".tournament-category-header")?.closest(".tournament-category"),U=L?[...document.querySelectorAll(".tournament-category")].indexOf(L):-1;document.querySelectorAll("[data-view-mode]").forEach(K=>K.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${O}"]`).forEach(K=>K.classList.add("view-toggle__btn--active")),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"})),U>=0&&requestAnimationFrame(()=>{const K=document.querySelectorAll(".tournament-category");K[U]&&K[U].scrollIntoView({behavior:"smooth",block:"start"})})}}),document.addEventListener("click",E=>{const T=E.target.closest("[data-home-tab]");if(!T)return;const O=T.dataset.homeTab==="active"?"my":"lobby";if(O===t)return;t=O,l(),u(),c(),document.querySelectorAll(".home-tab").forEach(L=>L.classList.remove("home-tab--active")),T.classList.add("home-tab--active");const $=document.querySelector("bma-app-head-mid");$&&$.setAttribute("data-selected-tab","head_mid_lobby"),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"}))}),document.addEventListener("change",E=>{const T=E.target.closest(".category-dropdown");if(!T)return;const x=T.dataset.filterType,O=T.value;x==="subStatus"?s=O:x==="sort"?r=O:x==="result"?n=O:x==="odds"&&(o=O),c(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),ce.subscribe(e.hierTopics.COREBETSLIP,(E,T)=>{JSON.parse(T);let x=16;switch(E){case e.hierTopics.COREBETSLIP__BET:x=5,Ss.shootConfetti(),console.log("~~~  |  "+E+" | ",T);const O=document.querySelector("[data-bets-valid]");O&&(O.dataset.betsValid="false");const $=document.querySelector("neodigm-sodapop");$&&$.setAttribute("data-wait","true");const L=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(L.length===0){console.warn("[app_events] No bets to submit"),$&&$.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const U=document.querySelector(".play-cntr"),K=U?.dataset?.currentTournGuid,re=e.appSession?.session_user?.guid;if(!K||!re){console.error("[app_events] Missing tournament or user GUID"),$&&$.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const J=Array.from(L).map(M=>{const N=M.getAttribute("data-content-team-points"),F=M.getAttribute("data-content-odds"),V=M.getAttribute("data-stake")||"0",se=M.getAttribute("data-content-type"),B=M.getAttribute("data-payout")||"0",k=M.getAttribute("data-match-guid")||"",C={};return C[N]={type:se,stake:parseFloat(V),odds:parseFloat(F),payout:parseFloat(B),reconciled:!1},{acctEntity__guid:re,coreTournaments__guid:K,coreMatches__guid:k,bet:[C],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",J);const G=U?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const M=window.GameMode.get(G),F=[...e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(k=>k.coreTournaments__guid===K):[],...J],se=(e.coreTourn.length>0?e.coreTourn[e.coreTourn.length-1]:null)?.data.find(k=>k.guid===K),B=M.validateBetSlip(F,se,0);if(!B.valid){console.log("[app_events] Game mode validation failed:",B.errors),typeof neodigmToast<"u"&&B.errors.forEach(C=>neodigmToast.q(C,"warning",4e3)),$&&$.setAttribute("data-wait","false");const k=document.querySelector("[data-publish-betslip]");k&&delete k.dataset.processing;break}}Ee.postBetSlips(J).then(M=>{console.log("[app_events] Bet slips posted successfully:",M);const N=J.reduce((F,V)=>{const se=V.bet[0],B=Object.keys(se)[0];return F+(se[B]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${N.toFixed(2)}`,"success"),Ee.fetchBetSlips(re,K).then(F=>{if(F?.rows){const V={timestamp:Date.now(),source:"API",data:F.rows};e.pushcoreBetSlip(V),console.log("[app_events] Refreshed bet slips in store:",F.rows.length,"items")}$e.refreshPlayPopupUI(K,F),$&&$.setAttribute("data-wait","false")}).catch(F=>{console.error("[app_events] Error fetching fresh bet slips:",F);const V=document.querySelector("[data-publish-betslip]");V&&delete V.dataset.processing,O&&(O.dataset.betsValid="true"),$&&$.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(M=>{console.error("[app_events] Error posting bet slips:",M);const N=document.querySelector("[data-publish-betslip]");N&&delete N.dataset.processing,O&&(O.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),$&&$.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:x=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&T){T=JSON.parse(T);const N=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&N){const F=e.coreBetSlip[0].data.filter(ee=>ee.coreTournaments__guid===N),V=[],se=[],B=[];F.forEach(ee=>{const ie=ee.bet||[];if(ie.length===0)return;const W=ie[0];Object.keys(W).filter(Z=>Z!=="short_title").forEach(Z=>{const le=W[Z],ne=le?.reconciled!==!1,de=parseFloat(le?.payout||0);ne?de===0?se.push(ee):B.push(ee):V.push(ee)})});const k=dt.search(V,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,C=dt.search(se,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,D=k+C,q=dt.search(B,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Q=T.tournament_dollars-D+q;$e.updateTDBalance("#summary-balance",Q)}else $e.updateTDBalance("#summary-balance",T.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let j=0,I=0,H=0;if(e.coreBetSlip.length>0){const N=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(N){const V=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(q=>q.coreTournaments__guid===N),se=[],B=[],k=[];V.forEach(q=>{const Q=q.bet||[];if(Q.length===0)return;const ee=Q[0];Object.keys(ee).filter(W=>W!=="short_title").forEach(W=>{const te=ee[W],Z=te?.reconciled!==!1,le=parseFloat(te?.payout||0);Z?le===0?B.push(q):k.push(q):se.push(q)})}),j=dt.search(se,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,I=dt.search(k,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const C=dt.search(B,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,D=dt.search(k,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;H=C+D}}let z=!0,A=0;const R=document.querySelector("[data-bets-valid]");if(R&&T){T=JSON.parse(T),T.pending_stake_sum=0,T.pending_payout_sum=0,T.bets.length||(z=!1),T.bets.forEach(k=>{k.stake=Number(k.stake),k.stake>0?T.pending_stake_sum+=k.stake:z=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(k=>{const C=parseFloat(k.getAttribute("data-payout")||"0");T.pending_payout_sum+=C});const N=j+T.pending_stake_sum,F=I+T.pending_payout_sum;A=parseFloat((T.tournament_dollars-N-H+I).toFixed(2));const se=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let B=null;se&&e.coreTourn.length>0&&(B=e.coreTourn[e.coreTourn.length-1]?.data?.find(C=>C.guid===se)),$e.updateSummaryAndDashboard(A,N,F,B,T.pending_payout_sum||0),(T.tournament_dollars<0||A<0)&&(z=!1),R.dataset.betsValid=z}break}x&&neodigmWired4Sound&&neodigmWired4Sound.sound(x,"QUITE").vibrate()});const p=()=>{const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let x=0;T&&e.coreTourn.length>0&&(x=e.coreTourn[e.coreTourn.length-1].data.find(L=>L.guid===T)?.tournament_dollars||0),ce.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:x,timestamp:Date.now()}))},f=()=>{const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let x=0;T&&e.coreTourn.length>0&&(x=e.coreTourn[e.coreTourn.length-1].data.find(Y=>Y.guid===T)?.tournament_dollars||0);let O=0,$=0,L=0,U=0;if(e.coreBetSlip.length>0&&T){const G=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(R=>R.coreTournaments__guid===T);console.log("[app_events] Filtered bets for tournament:",T,"found:",G.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",G[0]);const Y=[],j=[],I=[];G.forEach(R=>{const M=R.bet||[];if(M.length===0)return;const N=M[0];Object.keys(N).filter(V=>V!=="short_title").forEach(V=>{const se=N[V],B=se?.reconciled!==!1,k=parseFloat(se?.payout||0);B?k===0?j.push(R):I.push(R):Y.push(R)})}),console.log("[app_events] Bet categories:",{unreconciled:Y.length,reconciledZero:j.length,reconciledNonZero:I.length});const H=dt.search(Y,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,z=dt.search(j,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,A=dt.search(I,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;L=z+A,$=dt.search(I,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,U=dt.search(Y,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,O=H,console.log("[app_events] Balance calculation:",{unreconciledStakes:H,lostBetStakes:z,wonBetStakes:A,allReconciledStakes:L,displayedStake:O,reconciledPayouts:$,tournamentDollars:x,calculatedBalance:x-O-L+$})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const K=x-O-L+$;let re=null;T&&e.coreTourn.length>0&&(re=e.coreTourn[e.coreTourn.length-1].data.find(G=>G.guid===T)),$e.updateSummaryAndDashboard(K,O,$,re,U)};ce.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(E,T)=>{const O=JSON.parse(T)?.rows||[],$=document.querySelector(".bet-grid__slip-MYBETS");if(!$)return;if($.innerHTML="",O.length===0){$.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const re=document.querySelector(".bet-grid__slip");re&&re.setAttribute("data-active-bet-tab","BETSLIP"),p();return}O.forEach(re=>{if((re.bet||[]).length===0)return;const G=document.createElement("bma-bet-existing");G.setAttribute("data-corebetslip",JSON.stringify(re)),$.appendChild(G)});const L=document.querySelector(".bet-grid__slip");L&&L.setAttribute("data-active-bet-tab","MYBETS"),_e().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&$e.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",O.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),f()},200)}),document.addEventListener("click",E=>{const T=E.target;if(T&&T.classList.contains("bet-slip-tab")){const x=T.dataset.betTab,O=document.querySelector(".bet-grid__slip");x&&O&&(O.setAttribute("data-active-bet-tab",x),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",x))}if(T&&T.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(T.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}T.dataset.processing="true";const O=T.dataset.publishBetslip;ce.publish(O,JSON.stringify({timestamp:Date.now()}))}});const g=()=>{const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let x=0;T&&e.coreTourn.length>0&&(x=e.coreTourn[e.coreTourn.length-1].data.find(K=>K.guid===T)?.tournament_dollars||0);const O=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),$=Array.from(O).map(L=>({teamPoints:L.getAttribute("data-content-team-points"),odds:L.getAttribute("data-content-odds"),stake:L.getAttribute("data-stake")||"0",type:L.getAttribute("data-content-type"),abbreviatedTitle:L.getAttribute("data-abbreviated-title"),scheduledAt:L.getAttribute("data-scheduled-at")}));ce.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:x,bets:$,timestamp:Date.now()}))},_=(E,T)=>{const x=JSON.parse(T),O=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!O){console.error("[app_events] Bet slip container not found");return}const $=O.querySelector(".bet-slip__empty");$&&$.remove();let L="";x.type==="total"?L=x.team==="over"?"Over":"Under":x.team==="home"?L=x.homeTeam:x.team==="away"&&(L=x.awayTeam);let U=L;if(x.point)if(x.type==="spread"){const j=parseFloat(x.point)>0?`+${x.point}`:x.point;U=`${L} ${j}`}else x.type==="total"&&(U=`${L} ${x.point}`);const K=document.createElement("bma-bet-entry");K.setAttribute("data-content-team-points",U),K.setAttribute("data-content-odds",x.price||"0"),K.setAttribute("data-content-stake-text","0"),K.setAttribute("data-content-type",x.type||""),K.setAttribute("data-abbreviated-title",x.abbreviatedTitle||`${x.homeTeam} vs ${x.awayTeam}`),K.setAttribute("data-scheduled-at",x.scheduledAt||""),K.setAttribute("data-match-guid",x.matchGuid||""),K.setAttribute("data-home-team",x.homeTeam||""),K.setAttribute("data-away-team",x.awayTeam||""),K.setAttribute("data-bet-team",L||"");const J=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(J&&e.coreTourn.length>0){const I=e.coreTourn[e.coreTourn.length-1].data.find(H=>H.guid===J);if(I?.sports_allowed&&I.sports_allowed.length>0){const H=I.sports_allowed[0];K.setAttribute("data-sport-key",H.key||"");const z=nt.find(A=>A.key===H.key);K.setAttribute("data-sport-group",z?.group||"")}}O.appendChild(K),console.log("[app_events] Bet entry appended to container:",K,"Container children:",O.children.length),setTimeout(()=>{m(K)},0);const G=document.querySelector(".bet-grid__slip");G&&(G.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const Y=O.querySelectorAll("bma-bet-entry").length;Y>=3?requestAnimationFrame(()=>{setTimeout(()=>{const j=document.querySelector(".bet-grid__slip");j&&(console.log("[app_events] Scrolling parent to bottom - bet count:",Y,"scrollHeight:",j.scrollHeight,"current scrollTop:",j.scrollTop),j.scrollTo({top:j.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",j.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",Y,"bet cards (need 3+)"),setTimeout(()=>{g()},200),console.log("[app_events] Created bet entry:",{teamPoints:U,odds:x.price,type:x.type})};ce.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(E,T)=>{_(E,T),y()}),ce.subscribe(e.hierTopics.COREBETSLIP__MONEY,(E,T)=>{_(E,T),y()}),ce.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(E,T)=>{_(E,T),y()});function y(){const E=window.matchMedia("(orientation: portrait)").matches,T=window.matchMedia("(max-width: 768px)").matches;if(E||T){const x=document.querySelector(".bet-grid__select"),O=document.querySelector(".bet-grid__slip"),$=document.querySelector(".bet-grid__toggle-text");x&&O&&$&&(x.classList.add("collapsed"),O.classList.remove("collapsed"),$.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const m=E=>{const T={sport:{key:E.getAttribute("data-sport-key")||"",group:E.getAttribute("data-sport-group")||""},Match:{scheduled_at:E.getAttribute("data-scheduled-at")||"",home_team_id:E.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:E.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:E.getAttribute("data-bet-team")||"",over:"",under:""},type:E.getAttribute("data-content-type")||"",odds:E.getAttribute("data-content-odds")||"0",stake:E.getAttribute("data-stake")||"0"}},x=hu.calcPayout(T);E.setAttribute("data-payout",x.toString()),console.log("[app_events] Payout calculated:",{stake:T.Bet.stake,odds:T.Bet.odds,payout:x})};new MutationObserver(E=>{E.forEach(T=>{T.type==="attributes"&&T.attributeName==="data-stake"&&T.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",T.target.getAttribute("data-stake")),m(T.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{g()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",E=>{console.log("[app_events] Removing bet entry:",E.detail);const T=E.target,x=E.detail;T.remove(),setTimeout(()=>{const U=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(U){const K=_e(),re=K.coreTourn[K.coreTourn.length-1];if(re&&re.data){const J=re.data.find(G=>G.guid===U);J&&$e.updateTournamentDashboard(J)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(L=>{(L.shadowRoot?.querySelectorAll(".btn")||[]).forEach(K=>{const re=K.dataset.betType,J=K.dataset.price,G=re===x.type,Y=J===x.odds;G&&Y&&K.classList.contains("btn--active")&&(K.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:re,btnPrice:J}))})});const $=document.querySelector(".bet-grid__slip-BETSLIP-content");$&&$.children.length,setTimeout(()=>{g()},100)}),ce.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(E,T)=>{const x=JSON.parse(T);x&&x.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${x.guid}"]`)}),ce.subscribe(e.hierTopics.WC__APP__FOOT,(E,T)=>{JSON.parse(T);let x=16;switch(E){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:ce.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:t="private",l(),u(),c(),d(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:ce.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:ce.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}neodigmWired4Sound&&neodigmWired4Sound.sound(x).vibrate()}),ce.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(E,T)=>{const x=JSON.parse(T);let O=16;E=="WC.APP.HEAD_SPORTS.PREV"||E=="WC.APP.HEAD_SPORTS.NEXT"||E=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?O=3:(a=x.key||"all",console.log(`[app_events] Sports filter changed to: ${a} (${x.group})`),c(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),O&&neodigmWired4Sound&&neodigmWired4Sound.sound(O).vibrate()}),ce.subscribe(e.hierTopics.WC__APP__HEAD_MID,(E,T)=>{JSON.parse(T);let x=16;switch(E){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",l(),u(),c(),d(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":t="private",l(),u(),c(),d(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",l(),u(),c(),ce.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":x=16,typeof neodigmSodaPop<"u"&&neodigmSodaPop.autoOpen("sodapop_leaderboard");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":ce.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}x&&neodigmWired4Sound&&neodigmWired4Sound.sound(x).vibrate()}),ce.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(E,T)=>{JSON.parse(T);let x=16;switch(E){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const O=window.deferredPWAPrompt;if(!O){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{O.prompt();const{outcome:L}=await O.userChoice;L==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),x=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(L){console.error("PWA install error:",L),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const U=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:U});const K=document.getElementById("app");K&&K.setAttribute("data-sync-theme",U),document.body.setAttribute("data-sync-theme",U)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":zr.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":zr.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}x&&neodigmWired4Sound&&neodigmWired4Sound.sound(x).vibrate()});const b=E=>{document.querySelectorAll(".play-section").forEach(x=>{x.style.display="none",x.classList.remove("play-section--active")});const T=document.getElementById(`play-section-${E}`);T&&(T.style.display="",T.classList.add("play-section--active"))},w=(E,T)=>{const x=E.split(".").pop(),O=document.querySelectorAll(".play-cntr .dash-nav__btn"),L=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");b(x),O.forEach(U=>{const K=U.dataset.publishRouteHome?.split(".").pop()||"";U.classList.toggle("dash-nav__btn--active",K===x)}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),L&&(L.style.overflow=x==="PLAY"?"hidden":"auto")};ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",w);let v=null;ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(E,T)=>{if(w(E),v){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}v=setTimeout(()=>{v=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),$e.populateLeaderboard()}),ce.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(E,T)=>{JSON.parse(T);const x=document.getElementById("btn-join__play--id");if(!x){console.warn("[app_events] PLAY button not found");return}const O=x.dataset.requiresJoin==="true",$=x.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",$,"requiresJoin:",O),O&&$==="join"){const U=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,K=_e();if(!U){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",U),ce.publish(K.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:U,timestamp:Date.now()})),x.textContent="Play",x.dataset.requiresJoin="false",setTimeout(()=>{w(E),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else w(E),console.log("[app_events] Advancing carousel to PLAY page")}),ce.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(E,T)=>{JSON.parse(T);let x=10;switch(E){case"WC.APP.HEAD_TOP.USER_PROFILE":x=0,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile");break;case"WC.APP.HEAD_TOP.LOGO":const O=e.appSession.session_app.version,$=new Date().getFullYear();O&&neodigmToast&&neodigmToast.q(`${O} 4/16/2026, 3:35:45 PM|© ${$} Bet Max Action`,"night");break;case"WC.APP.HEAD_TOP.CREATE_CONTEST":ce.publish(e.hierTopics.WC__APP__FOOT__MY_TOURNEYS,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break}x&&neodigmWired4Sound&&neodigmWired4Sound.sound(x).vibrate()});let S=null,P=null;ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(E,T)=>{const x=JSON.parse(T);let O=0;switch(x?.action){case"JOIN":O=512;break;case"PLAY":O=8;break;case"INFO":O=8;break}if(O){S=x?.tournamentGuid,P=x?.action,console.log("[app_events] Storing pending tourn data:",S,P);const $=e.appSession?.session_user?.guid,L=x?.tournamentGuid;$&&L?Ee.fetchBetSlips($,L).then(U=>{if(U?.rows){const K={timestamp:Date.now(),source:"API",data:U.rows};e.pushcoreBetSlip(K),console.log("[app_events] Bet slips fetched:",U.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{ce.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(U))},3e3)},O)}).catch(U=>{console.error("[app_events] Error fetching bet slips:",U),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},O)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},O)}}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(E,T)=>{const x=JSON.parse(T);let O=16;switch(x?.action){case"FOCUS":O=3;break;case"SPORT_ICON":O=10;break;case"JOIN":O=5;break;case"PLAY":O=16;break}O&&neodigmWired4Sound&&neodigmWired4Sound.sound(O).vibrate()}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,(E,T)=>{const x=JSON.parse(T);let O=0,$="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),x?.tournamentStatus){case"UPCOMING":$="success";break;case"LOCKED":$="warning";break;case"COMPLETED":$="danger";break}switch(x?.action){case"SPORT_ICON":x?.sportTitle==x?.sportDescription?O=x?.sportTitle:O=x?.sportTitle+"|"+x?.sportDescription;break}O&&neodigmToast&&neodigmToast.q(O,$)}),ce.subscribe(e.hierTopics.WC__TOURN_ACTION,async(E,T)=>{const x=JSON.parse(T);if(x?.action==="JOIN"){const $=_e().appSession?.session_user?.guid;if(!$){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const L=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${x.tournamentGuid}"]`);L&&(L.setAttribute("data-bma-tourn-wait","true"),Ss.shootConfetti());const U={acctEntityGuid:$,tournamentGuid:x.tournamentGuid};try{const K={method:"POST",body:JSON.stringify(U),headers:Ee.genHeaders()};console.log("Posting to:",Ee.API_baseURI+"/m5t/"+Ee.API_ver+"/coreTournaments/join",U);const J=await(await fetch(Ee.API_baseURI+"/m5t/"+Ee.API_ver+"/coreTournaments/join",K)).json();if(console.log("Join response:",J),J.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const G=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${x.tournamentGuid}"]`);if(G){G.setAttribute("data-bma-tourn-wait","false");const Y=G.getAttribute("data-bma-tourn-entities");if(Y)try{const j=JSON.parse(Y);j.guids.includes($)||(j.guids.push($),G.setAttribute("data-bma-tourn-entities",JSON.stringify(j)))}catch(j){console.error("Failed to parse entities:",j)}}},3e3);else{const G=J?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(G,"danger");const Y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${x.tournamentGuid}"]`);Y&&Y.setAttribute("data-bma-tourn-wait","false")}}catch(K){console.error("Join tournament error:",K),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),ce.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(E,T)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const x=_e();try{const O=await Ee.fetchTournaments();console.log("[app_events] Tournaments fetched:",O),O?.rows&&Array.isArray(O.rows)?(x.pushCoreTourn({timestamp:Date.now(),source:"API",data:O.rows}),console.log("[app_events] Pushed to coreTourn, length:",x.coreTourn.length),ce.publish(x.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",O)}catch(O){console.error("[app_events] Error fetching tournaments:",O),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),ce.subscribe(e.hierTopics.PROMOTION__LOAD,async(E,T)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const x=await Ee.fetchPromotions();if(console.log("[app_events] Promotions fetched:",x),x?.ok&&x?.data&&Array.isArray(x.data)){const O=x.data.filter(L=>L.class==="banner"&&L.status==="LIVE");console.log("[app_events] Banner promotions:",O);const $=document.querySelector(".featured-swiper .swiper-wrapper");if(!$){console.warn("[app_events] Swiper wrapper not found");return}if($.innerHTML="",O.forEach((L,U)=>{const K=document.createElement("div");K.className="swiper-slide";const re=document.createElement("div");re.className=`featured-card featured-card--${U+1}`;const J=L.hero_img?encodeURI(L.hero_img):"";re.style.backgroundImage=`url("${J}")`,re.setAttribute("data-promotion-hero-img",L.hero_img||""),re.setAttribute("data-promotion-caption",L.caption||""),re.setAttribute("data-promotion-tagline",L.tagline||""),re.setAttribute("data-promotion-toast",L.toast||""),re.setAttribute("data-promotion-topic",L.topic?.topic||""),re.setAttribute("data-promotion-topic-token",L.topic?.token||""),re.setAttribute("data-promotion-marquee",L.maquee||""),K.appendChild(re),$.appendChild(K)}),console.log("[app_events] Created",O.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),O.length===1){const L=document.querySelector(".featured-swiper .swiper-wrapper");L&&(L.style.justifyContent="center")}}}catch(x){console.error("[app_events] Error fetching promotions:",x)}}),ce.subscribe(e.hierTopics.PROMOTION__CLICK,(E,T)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const x=JSON.parse(T);console.log("[app_events] Promotion clicked:",x),x.toast&&typeof neodigmToast<"u"&&neodigmToast.q(x.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const O=document.querySelector(".l-promotion #promoHero");O&&x.heroImg&&(O.src=x.heroImg);const $=document.querySelector(".l-promotion #promCaption");$&&x.caption&&($.textContent=x.caption);const L=document.querySelector(".l-promotion #promoTagline");return L&&x.tagline&&(/<[^>]+>/.test(x.tagline)?L.innerHTML=x.tagline:L.textContent=x.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(x){console.error("[app_events] Error handling promotion click:",x)}}),ce.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(E,T)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const x=_e();if(x.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const O=x.coreTourn[x.coreTourn.length-1],$=x.coreTourn.length>1?x.coreTourn[x.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",O);const L=[];if($){const G=O.data,Y=$.data;G.forEach(j=>{const I=Y.find(H=>H.guid===j.guid);I&&I.status!==j.status&&(console.log(`[app_events] Status changed for tournament ${j.guid}: ${I.status} -> ${j.status}`),L.push(j.guid))})}const U=x.appSession?.session_user?.guid,K=[...O.data].sort((G,Y)=>{const j=G.status||G.class,I=Y.status||Y.class,H=G.entities?.guids||[],z=Y.entities?.guids||[],A=H.includes(U),R=z.includes(U),M=(q,Q)=>{const ee=new Date(q.status_time||0).getTime();return new Date(Q.status_time||0).getTime()-ee},N=j==="LOCKED"&&A,F=I==="LOCKED"&&R;if(N&&!F)return-1;if(!N&&F)return 1;if(N&&F)return M(G,Y);const V=j==="UPCOMING",se=I==="UPCOMING";if(V&&!se)return-1;if(!V&&se)return 1;if(V&&se)return M(G,Y);const B=j==="COMPLETED"&&A,k=I==="COMPLETED"&&R;if(B&&!k)return-1;if(!B&&k)return 1;if(B&&k)return M(G,Y);const C=j==="COMPLETED"&&!A,D=I==="COMPLETED"&&!R;return C&&!D?1:!C&&D?-1:M(G,Y)}),re=$e.categorizeTournaments(K,t,a,U,{subStatus:s,sort:r,result:n});if(console.log(`[app_events] Categorized into ${re.length} categories for filter: ${t}/${a} sub:${s} sort:${r} result:${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const G=document.querySelector(".tournaments-grid");G&&(G.dataset.filterContext=t),window._homeRouteRenderCards(re,!0,i,{tab:t,subStatus:s,sort:r,result:n,odds:o});const Y=K.filter(R=>{const M=R.status||R.class,N=R.entities?.guids||[];return(M==="LOCKED"||M==="UPCOMING")&&N.includes(U)}).length,j=K.reduce((R,M)=>{const N=M.status||M.class,F=M.entities?.guids||[];return(N==="LOCKED"||N==="UPCOMING")&&F.includes(U)?R+parseFloat(M.tournament_dollars||0):R},0),I=document.querySelector("bma-app-foot");I&&I.setAttribute("data-active-count",String(Y));const H=document.querySelector("bma-app-head-mid");H&&H.setAttribute("data-active-count",String(Y));const z=document.querySelector("bma-app-head-top");z&&(z.setAttribute("data-active-count",String(Y)),z.setAttribute("data-td-dollars",String(j)));const A=document.getElementById("home-tab-active-badge");if(A&&(A.textContent=Y,A.style.visibility=Y>0?"visible":"hidden"),L.length>0){const R=O.data;L.forEach(M=>{const N=R.find(F=>F.guid===M);if(N){const F=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{ce.publish(x.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:M,status:N.status,timestamp:Date.now()}))},F)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available");const J=document.getElementById("bma-scores-banner--id");if(J){const G=new Set,Y=[];for(const j of O.data){const I=Array.isArray(j.matches_expanded)?j.matches_expanded:[];for(const H of I){const z=H.guid||H.id||H.odds_id;!z||G.has(z)||(G.add(z),Y.push(H))}}J.setAttribute("data-matches",JSON.stringify(Y))}$e.prefetchGlobalLeaderboard()}),ce.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(E,T)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",T);const x=_e();try{const O=JSON.parse(T);console.log("[app_events] SSE tournament sync data:",O);const $=JSON.parse(O.msg);if(console.log("[app_events] Parsed tournaments array:",$),!Array.isArray($)){console.warn("[app_events] SSE msg is not an array:",$);return}x.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:$}),console.log("[app_events] Pushed SSE data to coreTourn, length:",x.coreTourn.length),ce.publish(x.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),typeof neodigmSodaPop<"u"&&neodigmSodaPop.isOpen()==="sodapop_play"&&(console.log("[SSE] Play popup is open, triggering real-time update"),$e.hydratePlayPopup())}catch(O){console.error("[app_events] Error processing SSE tournament sync:",O)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const E=document.querySelector("#caption__my-profile");E&&(E.textContent="My Profile");const T=document.getElementById("profile-trophy-username");T&&(T.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const x=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",x),console.log("[app_events] coreTourn length:",e.coreTourn.length),!x||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const $=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",$.length);const L=J=>{const G=document.getElementById("profile-stats-panel");G&&(G.innerHTML=$e.buildStatsPanel($,x,J))};L($e._betStatsCache?.stats||null),$e._ensureBetStatsCache(x).then(J=>{J&&L(J)});let U=0,K=0,re=0;$.forEach((J,G)=>{if(!J.tags||!Array.isArray(J.tags)){console.log(`[app_events] Tournament ${G} has no tags or tags not an array`);return}J.tags.forEach((Y,j)=>{if(typeof Y=="object"&&Y!==null){let I=null;Y.entity_guid===x&&Y.badge?I=Y.badge:Y[x]&&(I=Y[x]),I==="--badge__ribbon--gold"?U++:I==="--badge__ribbon--silver"?K++:I==="--badge__ribbon--bronze"&&re++}})}),setTimeout(()=>{let J=document.querySelectorAll(".badge-counter");if(J.length===0){const G=document.querySelector("neodigm-sodapop");G&&(J=G.querySelectorAll(".badge-counter"))}J.length>=3?(J[0].textContent=K,J[1].textContent=U,J[2].textContent=re,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const J=document.querySelector("#profile-tournaments-list");if(!J||!x||e.coreTourn.length===0)return;const j=e.coreTourn[e.coreTourn.length-1].data.filter(A=>{try{return(typeof A.entities=="string"?JSON.parse(A.entities):A.entities)?.guids?.includes(x)}catch{return!1}}),I={LOCKED:0,UPCOMING:1,COMPLETED:2};j.sort((A,R)=>{const M=I[A.status]??3,N=I[R.status]??3;return M!==N?M-N:new Date(R.status_time||0)-new Date(A.status_time||0)});const H=A=>{let R=j;if(A==="active"?R=j.filter(M=>M.status==="LOCKED"||M.status==="UPCOMING"):A==="completed"&&(R=j.filter(M=>M.status==="COMPLETED")),R.length===0){J.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}J.innerHTML=R.map(M=>{const N=M.entities?JSON.stringify(M.entities).replace(/"/g,"&quot;"):"",F=M.tags?JSON.stringify(M.tags).replace(/"/g,"&quot;"):"[]",V=M.sports_allowed?JSON.stringify(M.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${M.guid||""}"
                                        data-bma-tourn-caption="${M.caption||""}"
                                        data-bma-tourn-tagline="${M.tagline||""}"
                                        data-bma-tourn-status="${M.status||""}"
                                        data-bma-tourn-class="${M.status||""}"
                                        data-bma-tourn-sports_allowed="${V}"
                                        data-bma-tourn-entities="${N}"
                                        data-bma-tourn-entry_fee="${M.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${M.tournament_dollars||0}"
                                        data-bma-tourn-matches="${M.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${F}"
                                        data-bma-tourn-window_start_time="${M.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${M.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{J.querySelectorAll("bma-tournament-list-card").forEach((M,N)=>{M.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",M.style.animationDelay=`${Math.min(N*60,400)}ms`})})};H("all");const z=document.querySelector(".profile-tournaments__filters");z&&z.addEventListener("click",A=>{const R=A.target.closest(".profile-tourn-filter");R&&(z.querySelectorAll(".profile-tourn-filter").forEach(M=>M.classList.remove("profile-tourn-filter--active")),R.classList.add("profile-tourn-filter--active"),H(R.dataset.filter))})},600)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const E=_e(),T=document.querySelector(".play-cntr");S&&(T.dataset.currentTournGuid=S),P&&(T.dataset.currentTournAction=P);const x=T?.dataset?.currentTournGuid,O=T?.dataset?.currentTournAction||"INFO";if(x&&E.coreTourn.length>0){const j=E.coreTourn[E.coreTourn.length-1].data.find(H=>H.guid===x),I=j?.class||"DEFAULT";T.dataset.gameType=I,console.log("[app_events] Game mode:",I,"for tournament:",j?.caption)}console.log("[app_events] sodapop_play opened - GUID:",x,"action:",O),window.initBetGridToggle&&window.initBetGridToggle(),$e.updatePlayButton(),$e.populateInfoPage();let $=O==="PLAY"||O==="JOIN"?"PLAY":O;if(!x||E.coreTourn.length===0||E.coreTourn[E.coreTourn.length-1].data.find(I=>I.guid===x)?.status==="COMPLETED"&&($="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),$){const Y=`ROUTE.HOME.SODAPOP_PLAY.${$}`;console.log("[app_events] Publishing initial topic:",Y),ce.publish(Y,JSON.stringify({tournamentGuid:x,timestamp:Date.now()}))}if(!x||E.coreTourn.length===0)return;const U=E.coreTourn[E.coreTourn.length-1].data.find(Y=>Y.guid===x);$e.renderMatchCards(U);const K=document.querySelector("#pop-play__tourn-caption--id"),re=document.querySelector("#pop-play__tourn-tagline--id");K&&(K.textContent=U.caption),re&&(re.textContent=U.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",U?.caption);const J=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!J),J&&console.log("[Modal Debug] Modal classes:",J.className),$e.updateTournamentDashboard(U);const G=document.getElementById("dashboard-rank");if(G){const Y=U.entities?.guids?.length||0;G.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${Y}</span>                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){const E=_e(),T=document.getElementById("global-leaderboard-container");if(T){T.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{let x,O,$;const L=$e._globalLBCache;if(L.data&&Date.now()-L.ts<180*1e3)console.log("[Global Leaderboard] Using prefetched cache"),x=L.data.rawData,O=L.data.tournaments,$=L.data.perTournLeaderboards;else{console.log("[Global Leaderboard] Cache miss, fetching fresh");const M=await Ee.fetchGlobalLeaderboard();x=M?.data||M?.rows||[],O=E.coreTourn.length>0?E.coreTourn[E.coreTourn.length-1].data:[];const N=O.filter(F=>(F.status||F.class)==="COMPLETED");$=await Promise.all(N.map(F=>Ee.fetchLeaderboard(F.guid).catch(()=>null)))}if(!x.length){T.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data available yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const U=T,K=E.appSession?.session_user?.guid,re={};x.forEach(M=>{const N=M.user_guid;re[N]||(re[N]={username:M.username||"Unknown",user_guid:N,totalTDWon:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set});const F=re[N];F.totalBets+=parseInt(M.total_betslips||0),F.tournamentsPlayed++;const V=O.find(se=>se.guid===M.tournament_guid);V&&(V.sports_allowed||[]).forEach(B=>F.sports.add(B.key||B))}),O.forEach(M=>{!M.tags||!Array.isArray(M.tags)||M.tags.forEach(N=>{if(typeof N!="object"||!N)return;let F=null,V=null;if(N.entity_guid&&N.badge){if(N.entity_guid==="SYSTEM")return;F=N.entity_guid,V=N.badge}else{const B=Object.keys(N);for(const k of B){const C=N[k];if(typeof C=="string"&&C.startsWith("--badge__ribbon--")){F=k,V=C;break}}}if(!F||!V)return;if(!re[F]){const B=x.find(k=>k.user_guid===F);re[F]={username:B?.username||F.substring(0,8),user_guid:F,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set}}const se=re[F];V==="--badge__ribbon--gold"?(se.gold++,se.tournamentsWon++):V==="--badge__ribbon--silver"?se.silver++:V==="--badge__ribbon--bronze"&&se.bronze++})}),$.forEach(M=>{if(!M)return;(M?.data||M?.rows||[]).forEach(F=>{const V=F.user_guid;re[V]||(re[V]={username:F.username||V.substring(0,8),user_guid:V,totalTDWon:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set});const se=re[V];F.username&&se.username.length<=8&&!se.username.includes(" ")&&(se.username=F.username),(()=>{try{return F.combined_betslips?typeof F.combined_betslips=="string"?JSON.parse(F.combined_betslips):F.combined_betslips:[]}catch{return[]}})().forEach(k=>{(k.bet||[]).forEach(D=>{Object.keys(D).forEach(q=>{if(q==="short_title")return;const Q=D[q];Q&&Q.reconciled===!0&&Q.payout>0&&(se.totalTDWon+=parseFloat(Q.payout))})})})})}),console.log("[Global Leaderboard] Fetched per-tournament data for",completedTournaments.length,"completed tournaments");const J=Object.values(re).filter(M=>M.username!=="Unknown"),G=J.filter(M=>M.gold+M.silver+M.bronze>0),Y=new Set;J.forEach(M=>M.sports.forEach(N=>Y.add(N)));const j={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},I=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let H="all";const z=(M,N)=>{let F=[...J],V;M==="overall"&&(F=F.filter(W=>W.gold+W.silver+W.bronze>0)),M==="bysport"&&N&&N!=="all"&&(F=F.filter(W=>W.sports.has(N)));const se=U.querySelector(".glb__note");switch(se&&se.remove(),M){case"overall":F.sort((W,te)=>te.gold*100+te.silver*10+te.bronze-(W.gold*100+W.silver*10+W.bronze)||te.totalPayout-W.totalPayout||te.totalBets-W.totalBets),V=(W,te,Z,le,ne)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${te<3?"glb__rank--top3":""}">#${te+1}</span>
                                                <span class="glb__avatar" style="background: ${le};">${Z}</span>
                                                <span class="glb__name">${W.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right">
                                                ${W.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${W.gold}</span></div>`:""}
                                                ${W.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${W.silver}</span></div>`:""}
                                                ${W.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${W.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":F=F.filter(W=>W.totalTDWon>0),F.sort((W,te)=>te.totalTDWon-W.totalTDWon),V=(W,te,Z,le,ne)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${te<3?"glb__rank--top3":""}">#${te+1}</span>
                                                <span class="glb__avatar" style="background: ${le};">${Z}</span>
                                                <span class="glb__name">${W.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__earnings">TD$ ${Math.round(W.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":F.sort((W,te)=>te.totalPayout-W.totalPayout||te.totalBets-W.totalBets),V=(W,te,Z,le,ne)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${te<3?"glb__rank--top3":""}">#${te+1}</span>
                                                <span class="glb__avatar" style="background: ${le};">${Z}</span>
                                                <span class="glb__name">${W.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right" style="gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${W.totalBets} bets</span>
                                                <span class="glb__earnings">TD$ ${W.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const B=U.querySelector(".glb__list");if(!B)return;if(F.length===0){const W=M==="earnings"?"No TD$ won from reconciled bets yet":M==="bysport"?"No players found for this sport":"No leaderboard data available";B.innerHTML=`<div class="leaderboard-empty"><p>${W}</p></div>`;return}const k=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],C=W=>k[W.charCodeAt(0)%k.length];let D="";if(M==="overall"&&F.length>=3){const W=(te,Z,le,ne,de)=>{const ue=F[te],fe=ue.user_guid===K;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${Z===1?80:Z===2?64:56}px; height: ${Z===1?80:Z===2?64:56}px; background-image: var(${ne}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${fe?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${ue.username}${fe?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${ue.gold+ue.silver+ue.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${le}px; background: linear-gradient(180deg, ${de}33 0%, ${de}0D 100%); border-top: 3px solid ${de}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${de};">${Z===1?"1st":Z===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};D=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${W(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${W(0,1,90,"--badge__gold","#FFD700")}
                                        ${W(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const q='<div class="info-section__title">Rankings</div>',Q='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',ee='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(M==="bysport"&&!U.querySelector(".glb__note")){const te=document.createElement("div");te.className="glb__note",te.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",te.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const Z=U.querySelector(".glb__sport-filters");Z&&Z.parentNode.insertBefore(te,Z)}let ie="";if(M==="earnings"&&F.length>=3){const W=(te,Z,le,ne)=>{const de=F[te],ue=de.user_guid===K;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${Z===1?80:Z===2?64:56}px; height: ${Z===1?80:Z===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${ue?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${de.username}${ue?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(de.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${le}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${Z===1?"1st":Z===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};ie=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${W(1,2,70,"#00E676")}
                                        ${W(0,1,90,"#00E676")}
                                        ${W(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(M==="overall")B.innerHTML=D+Q+q+F.map((W,te)=>{const Z=(W.username||"?")[0].toUpperCase(),le=C(W.username),ne=W.user_guid===K;return V(W,te,Z,le,ne)}).join("");else if(M==="earnings"){const W='<div class="info-section__title">TD$ Won</div>';B.innerHTML=ie+ee+W+F.map((te,Z)=>{const le=(te.username||"?")[0].toUpperCase(),ne=C(te.username),de=te.user_guid===K;return V(te,Z,le,ne,de)}).join("")}else if(M==="bysport"){let W="";if(F.length>=3){const Z=(le,ne,de)=>{const ue=F[le],fe=ue.user_guid===K,we=C(ue.username),be=(ue.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${we}; width: ${ne===1?48:38}px; height: ${ne===1?48:38}px; font-size: ${ne===1?"1rem":"0.8rem"};">${be}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${fe?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${ue.username}${fe?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${ue.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${de}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${ne===1?"1st":ne===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};W=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${Z(1,2,70)}
                                            ${Z(0,1,90)}
                                            ${Z(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const te='<div class="info-section__title">Rankings</div>';B.innerHTML=W+te+F.map((Z,le)=>{const ne=(Z.username||"?")[0].toUpperCase(),de=C(Z.username),ue=Z.user_guid===K;return V(Z,le,ne,de,ue)}).join("")}requestAnimationFrame(()=>{B.querySelectorAll(".glb__card, .info-row").forEach((W,te)=>{W.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",W.style.animationDelay=`${Math.min(te*50,400)}ms`})})},A=[...Y].map(M=>{const N=j[M]||M.replace(/^[a-z]+_/,"").toUpperCase(),F=nt.find(se=>se.key===M),V=F?F.group:"default";return`<button class="glb__sport-chip" data-sport="${M}">
                                <bma-sport-icon sport="${M}" data-sport-group="${V}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${N}</span>
                            </button>`}).join("");U.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${I.map((M,N)=>`
                                    <button class="glb__tab ${N===0?"glb__tab--active":""}" data-tab="${M.id}">${M.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${A}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const R=document.createElement("style");R.textContent=`
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
                        `,U.prepend(R),z("overall"),U.querySelectorAll(".glb__tab").forEach(M=>{M.addEventListener("click",()=>{U.querySelectorAll(".glb__tab").forEach(V=>V.classList.remove("glb__tab--active")),M.classList.add("glb__tab--active");const N=M.dataset.tab,F=U.querySelector(".glb__sport-filters");F&&(F.style.display=N==="bysport"?"flex":"none"),z(N,N==="bysport"?H:void 0)})}),U.querySelectorAll(".glb__sport-chip").forEach(M=>{M.addEventListener("click",()=>{U.querySelectorAll(".glb__sport-chip").forEach(N=>N.classList.remove("glb__sport-chip--active")),M.classList.add("glb__sport-chip--active"),H=M.dataset.sport,z("bysport",H)})})}catch(x){console.error("[appEvents] Error fetching global leaderboard:",x),container.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>'}}},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},ey={__name:"App",setup(e){const t=Mt(),a=_e();return Qt(()=>{setTimeout(()=>{const s=a.appSession?.session_user?.guid,r=a.appSession?.session_user?.authenticated;s&&r&&a.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",s),Fr.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",s,a,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((s=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${s}`,"primary"),t.push({name:s})}).setOnState((s=null)=>{s&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=s)}).init({BASE:Ee.API_baseURI})},2e3),setTimeout(()=>{$e.bindAppListeners(a)},3e3),t.beforeEach((s,r,n)=>{s.name=="splash_route"||s.name&&mvvLegit&&mvvLegit.isRouteAllowed(s.name)?n():n(!1)}),(s,r)=>(Xe(),ui(ca(iu),null,{default:to(({Component:n})=>[Je(Ff,{name:"slide-left"},{default:to(()=>[(Xe(),ui(jp(n)))]),_:2},1024)]),_:1}))}};class xu{constructor(){this.id="DEFAULT",this.label="Free Play",this.description="Place any bets you want across the tournament slate."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:[],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:0,stakeRule:"FREE",stakeMin:1,stakeMax:null,allowPartialSubmit:!0,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!1}}getEffectiveRules(t){const a=this.rules;if(!t?.tags||!Array.isArray(t.tags))return a;const s=t.tags.find(r=>typeof r=="object"&&r!==null&&r.game_rules);return s?.game_rules?{...a,...s.game_rules}:a}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","totalBets"],bonuses:[],penalizeMissing:!1}}_parseBets(t){const a=[];return t.forEach(s=>{const r=s.coreMatches__guid||s.match_guid||"";(s.bet||[]).forEach(o=>{Object.keys(o).forEach(i=>{if(i==="short_title")return;const l=o[i];l&&a.push({matchGuid:r,type:(l.type||"").toUpperCase(),team:i,stake:parseFloat(l.stake||0),payout:parseFloat(l.payout||0),odds:parseFloat(l.odds||0),reconciled:l.reconciled||!1})})})}),a}_getTypeCounts(t){const a={};return t.forEach(s=>{a[s.type]=(a[s.type]||0)+1}),a}_getTotalStakes(t){return parseFloat(t.reduce((a,s)=>a+s.stake,0).toFixed(2))}_typeLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money Line";case"TOTAL":return"Over/Under";default:return t}}_typeShortLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money";case"TOTAL":return"Total";default:return t}}canPlaceBet(t,a,s){const r=this.getEffectiveRules(s),n=this._parseBets(a),o=(t.type||"").toUpperCase();return r.oneBetPerMatchPerType&&n.find(l=>l.matchGuid===t.matchGuid&&l.type===o)?{allowed:!1,reason:`You already have a ${this._typeLabel(o)} bet on this match`}:r.maxBetsPerType>0&&n.filter(l=>l.type===o).length>=r.maxBetsPerType?{allowed:!1,reason:`Maximum ${r.maxBetsPerType} ${this._typeLabel(o)} bets reached`}:r.maxBetsTotal>0&&n.length>=r.maxBetsTotal?{allowed:!1,reason:`Maximum ${r.maxBetsTotal} total bets reached`}:{allowed:!0,reason:null}}validateBetSlip(t,a,s){const r=this.getEffectiveRules(a),n=[],o=[],i=this._parseBets(t),l=this._getTypeCounts(i),c=this._getTotalStakes(i),d=parseFloat(a?.tournament_dollars||0);if(r.requiredBetTypes.forEach(u=>{l[u]||n.push(`You need at least one ${this._typeLabel(u)} bet`)}),r.minBetsTotal>0&&i.length<r.minBetsTotal&&n.push(`Place at least ${r.minBetsTotal} bets`),r.stakeRule==="SPEND_ALL"&&d>0){if(c<d){const u=parseFloat((d-c).toFixed(2));n.push(`You have TD$ ${u.toLocaleString()} left to spend — use your entire balance`)}else if(c>d+.01){const u=parseFloat((c-d).toFixed(2));n.push(`You've exceeded your TD$ balance by ${u.toLocaleString()}`)}}return!r.allowPartialSubmit&&n.length>0,{valid:n.length===0,errors:n,warnings:o}}scoreEntry(t,a){const s=parseFloat(t.total_payout||0);return{score:s,breakdown:{payout:s}}}rankLeaderboard(t,a){return[...t].sort((s,r)=>{const n=this.scoreEntry(s,a).score;return this.scoreEntry(r,a).score-n})}getProgressUI(t,a){const s=this.getEffectiveRules(a),r=s.requiredBetTypes.length>0,n=s.stakeRule==="SPEND_ALL";if(!r&&!n)return{type:"NONE",percent:0,label:"",hints:[],typesStatus:[],complete:!0};const o=this._parseBets(t),i=this._getTypeCounts(o),l=this._getTotalStakes(o),c=parseFloat(a?.tournament_dollars||0),d=c>0?Math.min(100,Math.round(l/c*100)):0,u=s.requiredBetTypes.every(m=>i[m]),p=!n||Math.abs(l-c)<.01,f=s.requiredBetTypes.map(m=>({type:m,label:this._typeShortLabel(m),placed:!!i[m],count:i[m]||0})),g=[],y=s.requiredBetTypes.filter(m=>!i[m]).map(m=>this._typeLabel(m));return y.length>0&&!p?g.push(`Need a ${y.join(", ")} bet · Spend all TD$ ${Math.round(c).toLocaleString()}`):y.length>0?g.push(`Need a ${y.join(", ")} bet`):!p&&l<c&&g.push(`TD$ ${Math.round(c-l).toLocaleString()} left to allocate`),{type:r?"BET_TYPES":"STAKE_PROGRESS",percent:d,label:n?`TD$ ${Math.round(l).toLocaleString()} / ${Math.round(c).toLocaleString()} spent`:`${o.length} bets placed`,typesStatus:f,hints:g,complete:u&&p}}getValidationMessages(t,a,s){return this.getProgressUI(t,a).hints}getBadge(){return null}getRulesHTML(t){return"<p>Place bets on any matches in the tournament. The player with the highest total payout wins.</p>"}getEmptyStateText(){return"Select a match to start betting"}}class dl extends xu{constructor(){super(),this.id="DEFAULT_FORMAT",this.label="Free Play",this.description="Place any bets you want across the tournament slate."}get scoring(){return{method:"POTENTIAL_WINNINGS",rankBy:["score","pendingPayout","timestamp"],bonuses:[],penalizeMissing:!1}}scoreEntry(t,a){const s=parseFloat(t.tournament_dollars??a?.tournament_dollars??0),r=this._parseBets(t.bets||[]);let n=0,o=0,i=0;r.forEach(d=>{n+=d.stake,d.reconciled?i+=d.payout:o+=d.payout});const l=s-n;return{score:parseFloat((l+o+i).toFixed(2)),breakdown:{startingTD:parseFloat(s.toFixed(2)),remainingTD:parseFloat(l.toFixed(2)),totalStakes:parseFloat(n.toFixed(2)),pendingPayout:parseFloat(o.toFixed(2)),settledPayout:parseFloat(i.toFixed(2))}}}rankLeaderboard(t,a){return[...t].map(s=>({entry:s,...this.scoreEntry(s,a)})).sort((s,r)=>{if(r.score!==s.score)return r.score-s.score;if(r.breakdown.pendingPayout!==s.breakdown.pendingPayout)return r.breakdown.pendingPayout-s.breakdown.pendingPayout;const n=new Date(s.entry.timestamp||0).getTime(),o=new Date(r.entry.timestamp||0).getTime();return n-o}).map(s=>s.entry)}}class ty extends xu{constructor(){super(),this.id="SET_IT_AND_FORGET_IT",this.label="Set It and Forget It",this.description="Build your lineup with one of each bet type across the slate. Spend all your TD$."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:["SPREAD","MONEY","TOTAL"],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:3,stakeRule:"SPEND_ALL",stakeMin:1,stakeMax:null,allowPartialSubmit:!1,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!0}}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","betCount","timestamp"],bonuses:[],penalizeMissing:!0}}getBadge(){return{label:"Set & Forget",color:"ghost"}}getEmptyStateText(){return"Build your lineup — place one of each bet type and spend all your TD$"}getRulesHTML(t){const a=t?.tournament_dollars||0;return`
            <div style="padding: 12px 0;">
                <p style="margin: 0 0 8px; font-weight: 600; color: rgba(255,255,255,0.85);">Set It and Forget It Rules:</p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.8;">
                    <li>Place at least one <strong>Spread</strong>, one <strong>Money Line</strong>, and one <strong>Over/Under</strong> bet</li>
                    <li>You must spend your entire <strong>TD$ ${Number(a).toLocaleString()}</strong> balance across all bets</li>
                    <li>One bet per match per bet type (no duplicates)</li>
                    <li>Highest total payout wins the tournament</li>
                </ul>
            </div>`}}var Ns={exports:{}},zn={},Bt={},Ta={},jn={},Hn={},Un={},ul;function jr(){return ul||(ul=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class a extends t{constructor(h){if(super(),!e.IDENTIFIER.test(h))throw new Error("CodeGen: name must be a valid identifier");this.str=h}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=a;class s extends t{constructor(h){super(),this._items=typeof h=="string"?[h]:h}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const h=this._items[0];return h===""||h==='""'}get str(){var h;return(h=this._str)!==null&&h!==void 0?h:this._str=this._items.reduce((b,w)=>`${b}${w}`,"")}get names(){var h;return(h=this._names)!==null&&h!==void 0?h:this._names=this._items.reduce((b,w)=>(w instanceof a&&(b[w.str]=(b[w.str]||0)+1),b),{})}}e._Code=s,e.nil=new s("");function r(m,...h){const b=[m[0]];let w=0;for(;w<h.length;)i(b,h[w]),b.push(m[++w]);return new s(b)}e._=r;const n=new s("+");function o(m,...h){const b=[f(m[0])];let w=0;for(;w<h.length;)b.push(n),i(b,h[w]),b.push(n,f(m[++w]));return l(b),new s(b)}e.str=o;function i(m,h){h instanceof s?m.push(...h._items):h instanceof a?m.push(h):m.push(u(h))}e.addCodeArg=i;function l(m){let h=1;for(;h<m.length-1;){if(m[h]===n){const b=c(m[h-1],m[h+1]);if(b!==void 0){m.splice(h-1,3,b);continue}m[h++]="+"}h++}}function c(m,h){if(h==='""')return m;if(m==='""')return h;if(typeof m=="string")return h instanceof a||m[m.length-1]!=='"'?void 0:typeof h!="string"?`${m.slice(0,-1)}${h}"`:h[0]==='"'?m.slice(0,-1)+h.slice(1):void 0;if(typeof h=="string"&&h[0]==='"'&&!(m instanceof a))return`"${m}${h.slice(1)}`}function d(m,h){return h.emptyStr()?m:m.emptyStr()?h:o`${m}${h}`}e.strConcat=d;function u(m){return typeof m=="number"||typeof m=="boolean"||m===null?m:f(Array.isArray(m)?m.join(","):m)}function p(m){return new s(f(m))}e.stringify=p;function f(m){return JSON.stringify(m).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=f;function g(m){return typeof m=="string"&&e.IDENTIFIER.test(m)?new s(`.${m}`):r`[${m}]`}e.getProperty=g;function _(m){if(typeof m=="string"&&e.IDENTIFIER.test(m))return new s(`${m}`);throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`)}e.getEsmExportName=_;function y(m){return new s(m.toString())}e.regexpCode=y})(Un)),Un}var qn={},pl;function fl(){return pl||(pl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=jr();class a extends Error{constructor(c){super(`CodeGen: "code" for ${c} not defined`),this.value=c.value}}var s;(function(l){l[l.Started=0]="Started",l[l.Completed=1]="Completed"})(s||(e.UsedValueState=s={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class r{constructor({prefixes:c,parent:d}={}){this._names={},this._prefixes=c,this._parent=d}toName(c){return c instanceof t.Name?c:this.name(c)}name(c){return new t.Name(this._newName(c))}_newName(c){const d=this._names[c]||this._nameGroup(c);return`${c}${d.index++}`}_nameGroup(c){var d,u;if(!((u=(d=this._parent)===null||d===void 0?void 0:d._prefixes)===null||u===void 0)&&u.has(c)||this._prefixes&&!this._prefixes.has(c))throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);return this._names[c]={prefix:c,index:0}}}e.Scope=r;class n extends t.Name{constructor(c,d){super(d),this.prefix=c}setValue(c,{property:d,itemIndex:u}){this.value=c,this.scopePath=(0,t._)`.${new t.Name(d)}[${u}]`}}e.ValueScopeName=n;const o=(0,t._)`\n`;class i extends r{constructor(c){super(c),this._values={},this._scope=c.scope,this.opts={...c,_n:c.lines?o:t.nil}}get(){return this._scope}name(c){return new n(c,this._newName(c))}value(c,d){var u;if(d.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const p=this.toName(c),{prefix:f}=p,g=(u=d.key)!==null&&u!==void 0?u:d.ref;let _=this._values[f];if(_){const h=_.get(g);if(h)return h}else _=this._values[f]=new Map;_.set(g,p);const y=this._scope[f]||(this._scope[f]=[]),m=y.length;return y[m]=d.ref,p.setValue(d,{property:f,itemIndex:m}),p}getValue(c,d){const u=this._values[c];if(u)return u.get(d)}scopeRefs(c,d=this._values){return this._reduceValues(d,u=>{if(u.scopePath===void 0)throw new Error(`CodeGen: name "${u}" has no value`);return(0,t._)`${c}${u.scopePath}`})}scopeCode(c=this._values,d,u){return this._reduceValues(c,p=>{if(p.value===void 0)throw new Error(`CodeGen: name "${p}" has no value`);return p.value.code},d,u)}_reduceValues(c,d,u={},p){let f=t.nil;for(const g in c){const _=c[g];if(!_)continue;const y=u[g]=u[g]||new Map;_.forEach(m=>{if(y.has(m))return;y.set(m,s.Started);let h=d(m);if(h){const b=this.opts.es5?e.varKinds.var:e.varKinds.const;f=(0,t._)`${f}${b} ${m} = ${h};${this.opts._n}`}else if(h=p?.(m))f=(0,t._)`${f}${h}${this.opts._n}`;else throw new a(m);y.set(m,s.Completed)})}return f}}e.ValueScope=i})(qn)),qn}var hl;function ge(){return hl||(hl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=jr(),a=fl();var s=jr();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return s._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return s.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return s.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return s.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return s.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return s.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return s.Name}});var r=fl();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return r.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return r.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return r.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return r.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class n{optimizeNodes(){return this}optimizeNames(A,R){return this}}class o extends n{constructor(A,R,M){super(),this.varKind=A,this.name=R,this.rhs=M}render({es5:A,_n:R}){const M=A?a.varKinds.var:this.varKind,N=this.rhs===void 0?"":` = ${this.rhs}`;return`${M} ${this.name}${N};`+R}optimizeNames(A,R){if(A[this.name.str])return this.rhs&&(this.rhs=U(this.rhs,A,R)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class i extends n{constructor(A,R,M){super(),this.lhs=A,this.rhs=R,this.sideEffects=M}render({_n:A}){return`${this.lhs} = ${this.rhs};`+A}optimizeNames(A,R){if(!(this.lhs instanceof t.Name&&!A[this.lhs.str]&&!this.sideEffects))return this.rhs=U(this.rhs,A,R),this}get names(){const A=this.lhs instanceof t.Name?{}:{...this.lhs.names};return L(A,this.rhs)}}class l extends i{constructor(A,R,M,N){super(A,M,N),this.op=R}render({_n:A}){return`${this.lhs} ${this.op}= ${this.rhs};`+A}}class c extends n{constructor(A){super(),this.label=A,this.names={}}render({_n:A}){return`${this.label}:`+A}}class d extends n{constructor(A){super(),this.label=A,this.names={}}render({_n:A}){return`break${this.label?` ${this.label}`:""};`+A}}class u extends n{constructor(A){super(),this.error=A}render({_n:A}){return`throw ${this.error};`+A}get names(){return this.error.names}}class p extends n{constructor(A){super(),this.code=A}render({_n:A}){return`${this.code};`+A}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(A,R){return this.code=U(this.code,A,R),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class f extends n{constructor(A=[]){super(),this.nodes=A}render(A){return this.nodes.reduce((R,M)=>R+M.render(A),"")}optimizeNodes(){const{nodes:A}=this;let R=A.length;for(;R--;){const M=A[R].optimizeNodes();Array.isArray(M)?A.splice(R,1,...M):M?A[R]=M:A.splice(R,1)}return A.length>0?this:void 0}optimizeNames(A,R){const{nodes:M}=this;let N=M.length;for(;N--;){const F=M[N];F.optimizeNames(A,R)||(K(A,F.names),M.splice(N,1))}return M.length>0?this:void 0}get names(){return this.nodes.reduce((A,R)=>$(A,R.names),{})}}class g extends f{render(A){return"{"+A._n+super.render(A)+"}"+A._n}}class _ extends f{}class y extends g{}y.kind="else";class m extends g{constructor(A,R){super(R),this.condition=A}render(A){let R=`if(${this.condition})`+super.render(A);return this.else&&(R+="else "+this.else.render(A)),R}optimizeNodes(){super.optimizeNodes();const A=this.condition;if(A===!0)return this.nodes;let R=this.else;if(R){const M=R.optimizeNodes();R=this.else=Array.isArray(M)?new y(M):M}if(R)return A===!1?R instanceof m?R:R.nodes:this.nodes.length?this:new m(re(A),R instanceof m?[R]:R.nodes);if(!(A===!1||!this.nodes.length))return this}optimizeNames(A,R){var M;if(this.else=(M=this.else)===null||M===void 0?void 0:M.optimizeNames(A,R),!!(super.optimizeNames(A,R)||this.else))return this.condition=U(this.condition,A,R),this}get names(){const A=super.names;return L(A,this.condition),this.else&&$(A,this.else.names),A}}m.kind="if";class h extends g{}h.kind="for";class b extends h{constructor(A){super(),this.iteration=A}render(A){return`for(${this.iteration})`+super.render(A)}optimizeNames(A,R){if(super.optimizeNames(A,R))return this.iteration=U(this.iteration,A,R),this}get names(){return $(super.names,this.iteration.names)}}class w extends h{constructor(A,R,M,N){super(),this.varKind=A,this.name=R,this.from=M,this.to=N}render(A){const R=A.es5?a.varKinds.var:this.varKind,{name:M,from:N,to:F}=this;return`for(${R} ${M}=${N}; ${M}<${F}; ${M}++)`+super.render(A)}get names(){const A=L(super.names,this.from);return L(A,this.to)}}class v extends h{constructor(A,R,M,N){super(),this.loop=A,this.varKind=R,this.name=M,this.iterable=N}render(A){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(A)}optimizeNames(A,R){if(super.optimizeNames(A,R))return this.iterable=U(this.iterable,A,R),this}get names(){return $(super.names,this.iterable.names)}}class S extends g{constructor(A,R,M){super(),this.name=A,this.args=R,this.async=M}render(A){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(A)}}S.kind="func";class P extends f{render(A){return"return "+super.render(A)}}P.kind="return";class E extends g{render(A){let R="try"+super.render(A);return this.catch&&(R+=this.catch.render(A)),this.finally&&(R+=this.finally.render(A)),R}optimizeNodes(){var A,R;return super.optimizeNodes(),(A=this.catch)===null||A===void 0||A.optimizeNodes(),(R=this.finally)===null||R===void 0||R.optimizeNodes(),this}optimizeNames(A,R){var M,N;return super.optimizeNames(A,R),(M=this.catch)===null||M===void 0||M.optimizeNames(A,R),(N=this.finally)===null||N===void 0||N.optimizeNames(A,R),this}get names(){const A=super.names;return this.catch&&$(A,this.catch.names),this.finally&&$(A,this.finally.names),A}}class T extends g{constructor(A){super(),this.error=A}render(A){return`catch(${this.error})`+super.render(A)}}T.kind="catch";class x extends g{render(A){return"finally"+super.render(A)}}x.kind="finally";class O{constructor(A,R={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...R,_n:R.lines?`
`:""},this._extScope=A,this._scope=new a.Scope({parent:A}),this._nodes=[new _]}toString(){return this._root.render(this.opts)}name(A){return this._scope.name(A)}scopeName(A){return this._extScope.name(A)}scopeValue(A,R){const M=this._extScope.value(A,R);return(this._values[M.prefix]||(this._values[M.prefix]=new Set)).add(M),M}getScopeValue(A,R){return this._extScope.getValue(A,R)}scopeRefs(A){return this._extScope.scopeRefs(A,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(A,R,M,N){const F=this._scope.toName(R);return M!==void 0&&N&&(this._constants[F.str]=M),this._leafNode(new o(A,F,M)),F}const(A,R,M){return this._def(a.varKinds.const,A,R,M)}let(A,R,M){return this._def(a.varKinds.let,A,R,M)}var(A,R,M){return this._def(a.varKinds.var,A,R,M)}assign(A,R,M){return this._leafNode(new i(A,R,M))}add(A,R){return this._leafNode(new l(A,e.operators.ADD,R))}code(A){return typeof A=="function"?A():A!==t.nil&&this._leafNode(new p(A)),this}object(...A){const R=["{"];for(const[M,N]of A)R.length>1&&R.push(","),R.push(M),(M!==N||this.opts.es5)&&(R.push(":"),(0,t.addCodeArg)(R,N));return R.push("}"),new t._Code(R)}if(A,R,M){if(this._blockNode(new m(A)),R&&M)this.code(R).else().code(M).endIf();else if(R)this.code(R).endIf();else if(M)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(A){return this._elseNode(new m(A))}else(){return this._elseNode(new y)}endIf(){return this._endBlockNode(m,y)}_for(A,R){return this._blockNode(A),R&&this.code(R).endFor(),this}for(A,R){return this._for(new b(A),R)}forRange(A,R,M,N,F=this.opts.es5?a.varKinds.var:a.varKinds.let){const V=this._scope.toName(A);return this._for(new w(F,V,R,M),()=>N(V))}forOf(A,R,M,N=a.varKinds.const){const F=this._scope.toName(A);if(this.opts.es5){const V=R instanceof t.Name?R:this.var("_arr",R);return this.forRange("_i",0,(0,t._)`${V}.length`,se=>{this.var(F,(0,t._)`${V}[${se}]`),M(F)})}return this._for(new v("of",N,F,R),()=>M(F))}forIn(A,R,M,N=this.opts.es5?a.varKinds.var:a.varKinds.const){if(this.opts.ownProperties)return this.forOf(A,(0,t._)`Object.keys(${R})`,M);const F=this._scope.toName(A);return this._for(new v("in",N,F,R),()=>M(F))}endFor(){return this._endBlockNode(h)}label(A){return this._leafNode(new c(A))}break(A){return this._leafNode(new d(A))}return(A){const R=new P;if(this._blockNode(R),this.code(A),R.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(P)}try(A,R,M){if(!R&&!M)throw new Error('CodeGen: "try" without "catch" and "finally"');const N=new E;if(this._blockNode(N),this.code(A),R){const F=this.name("e");this._currNode=N.catch=new T(F),R(F)}return M&&(this._currNode=N.finally=new x,this.code(M)),this._endBlockNode(T,x)}throw(A){return this._leafNode(new u(A))}block(A,R){return this._blockStarts.push(this._nodes.length),A&&this.code(A).endBlock(R),this}endBlock(A){const R=this._blockStarts.pop();if(R===void 0)throw new Error("CodeGen: not in self-balancing block");const M=this._nodes.length-R;if(M<0||A!==void 0&&M!==A)throw new Error(`CodeGen: wrong number of nodes: ${M} vs ${A} expected`);return this._nodes.length=R,this}func(A,R=t.nil,M,N){return this._blockNode(new S(A,R,M)),N&&this.code(N).endFunc(),this}endFunc(){return this._endBlockNode(S)}optimize(A=1){for(;A-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(A){return this._currNode.nodes.push(A),this}_blockNode(A){this._currNode.nodes.push(A),this._nodes.push(A)}_endBlockNode(A,R){const M=this._currNode;if(M instanceof A||R&&M instanceof R)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${R?`${A.kind}/${R.kind}`:A.kind}"`)}_elseNode(A){const R=this._currNode;if(!(R instanceof m))throw new Error('CodeGen: "else" without "if"');return this._currNode=R.else=A,this}get _root(){return this._nodes[0]}get _currNode(){const A=this._nodes;return A[A.length-1]}set _currNode(A){const R=this._nodes;R[R.length-1]=A}}e.CodeGen=O;function $(z,A){for(const R in A)z[R]=(z[R]||0)+(A[R]||0);return z}function L(z,A){return A instanceof t._CodeOrName?$(z,A.names):z}function U(z,A,R){if(z instanceof t.Name)return M(z);if(!N(z))return z;return new t._Code(z._items.reduce((F,V)=>(V instanceof t.Name&&(V=M(V)),V instanceof t._Code?F.push(...V._items):F.push(V),F),[]));function M(F){const V=R[F.str];return V===void 0||A[F.str]!==1?F:(delete A[F.str],V)}function N(F){return F instanceof t._Code&&F._items.some(V=>V instanceof t.Name&&A[V.str]===1&&R[V.str]!==void 0)}}function K(z,A){for(const R in A)z[R]=(z[R]||0)-(A[R]||0)}function re(z){return typeof z=="boolean"||typeof z=="number"||z===null?!z:(0,t._)`!${H(z)}`}e.not=re;const J=I(e.operators.AND);function G(...z){return z.reduce(J)}e.and=G;const Y=I(e.operators.OR);function j(...z){return z.reduce(Y)}e.or=j;function I(z){return(A,R)=>A===t.nil?R:R===t.nil?A:(0,t._)`${H(A)} ${z} ${H(R)}`}function H(z){return z instanceof t.Name?z:(0,t._)`(${z})`}})(Hn)),Hn}var me={},ml;function ve(){if(ml)return me;ml=1,Object.defineProperty(me,"__esModule",{value:!0}),me.checkStrictMode=me.getErrorPath=me.Type=me.useFunc=me.setEvaluated=me.evaluatedPropsToName=me.mergeEvaluated=me.eachItem=me.unescapeJsonPointer=me.escapeJsonPointer=me.escapeFragment=me.unescapeFragment=me.schemaRefOrVal=me.schemaHasRulesButRef=me.schemaHasRules=me.checkUnknownRules=me.alwaysValidSchema=me.toHash=void 0;const e=ge(),t=jr();function a(v){const S={};for(const P of v)S[P]=!0;return S}me.toHash=a;function s(v,S){return typeof S=="boolean"?S:Object.keys(S).length===0?!0:(r(v,S),!n(S,v.self.RULES.all))}me.alwaysValidSchema=s;function r(v,S=v.schema){const{opts:P,self:E}=v;if(!P.strictSchema||typeof S=="boolean")return;const T=E.RULES.keywords;for(const x in S)T[x]||w(v,`unknown keyword: "${x}"`)}me.checkUnknownRules=r;function n(v,S){if(typeof v=="boolean")return!v;for(const P in v)if(S[P])return!0;return!1}me.schemaHasRules=n;function o(v,S){if(typeof v=="boolean")return!v;for(const P in v)if(P!=="$ref"&&S.all[P])return!0;return!1}me.schemaHasRulesButRef=o;function i({topSchemaRef:v,schemaPath:S},P,E,T){if(!T){if(typeof P=="number"||typeof P=="boolean")return P;if(typeof P=="string")return(0,e._)`${P}`}return(0,e._)`${v}${S}${(0,e.getProperty)(E)}`}me.schemaRefOrVal=i;function l(v){return u(decodeURIComponent(v))}me.unescapeFragment=l;function c(v){return encodeURIComponent(d(v))}me.escapeFragment=c;function d(v){return typeof v=="number"?`${v}`:v.replace(/~/g,"~0").replace(/\//g,"~1")}me.escapeJsonPointer=d;function u(v){return v.replace(/~1/g,"/").replace(/~0/g,"~")}me.unescapeJsonPointer=u;function p(v,S){if(Array.isArray(v))for(const P of v)S(P);else S(v)}me.eachItem=p;function f({mergeNames:v,mergeToName:S,mergeValues:P,resultToName:E}){return(T,x,O,$)=>{const L=O===void 0?x:O instanceof e.Name?(x instanceof e.Name?v(T,x,O):S(T,x,O),O):x instanceof e.Name?(S(T,O,x),x):P(x,O);return $===e.Name&&!(L instanceof e.Name)?E(T,L):L}}me.mergeEvaluated={props:f({mergeNames:(v,S,P)=>v.if((0,e._)`${P} !== true && ${S} !== undefined`,()=>{v.if((0,e._)`${S} === true`,()=>v.assign(P,!0),()=>v.assign(P,(0,e._)`${P} || {}`).code((0,e._)`Object.assign(${P}, ${S})`))}),mergeToName:(v,S,P)=>v.if((0,e._)`${P} !== true`,()=>{S===!0?v.assign(P,!0):(v.assign(P,(0,e._)`${P} || {}`),_(v,P,S))}),mergeValues:(v,S)=>v===!0?!0:{...v,...S},resultToName:g}),items:f({mergeNames:(v,S,P)=>v.if((0,e._)`${P} !== true && ${S} !== undefined`,()=>v.assign(P,(0,e._)`${S} === true ? true : ${P} > ${S} ? ${P} : ${S}`)),mergeToName:(v,S,P)=>v.if((0,e._)`${P} !== true`,()=>v.assign(P,S===!0?!0:(0,e._)`${P} > ${S} ? ${P} : ${S}`)),mergeValues:(v,S)=>v===!0?!0:Math.max(v,S),resultToName:(v,S)=>v.var("items",S)})};function g(v,S){if(S===!0)return v.var("props",!0);const P=v.var("props",(0,e._)`{}`);return S!==void 0&&_(v,P,S),P}me.evaluatedPropsToName=g;function _(v,S,P){Object.keys(P).forEach(E=>v.assign((0,e._)`${S}${(0,e.getProperty)(E)}`,!0))}me.setEvaluated=_;const y={};function m(v,S){return v.scopeValue("func",{ref:S,code:y[S.code]||(y[S.code]=new t._Code(S.code))})}me.useFunc=m;var h;(function(v){v[v.Num=0]="Num",v[v.Str=1]="Str"})(h||(me.Type=h={}));function b(v,S,P){if(v instanceof e.Name){const E=S===h.Num;return P?E?(0,e._)`"[" + ${v} + "]"`:(0,e._)`"['" + ${v} + "']"`:E?(0,e._)`"/" + ${v}`:(0,e._)`"/" + ${v}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return P?(0,e.getProperty)(v).toString():"/"+d(v)}me.getErrorPath=b;function w(v,S,P=v.opts.strictSchema){if(P){if(S=`strict mode: ${S}`,P===!0)throw new Error(S);v.self.logger.warn(S)}}return me.checkStrictMode=w,me}var Ds={},gl;function ba(){if(gl)return Ds;gl=1,Object.defineProperty(Ds,"__esModule",{value:!0});const e=ge(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return Ds.default=t,Ds}var bl;function ln(){return bl||(bl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=ge(),a=ve(),s=ba();e.keywordError={message:({keyword:y})=>(0,t.str)`must pass "${y}" keyword validation`},e.keyword$DataError={message:({keyword:y,schemaType:m})=>m?(0,t.str)`"${y}" keyword must be ${m} ($data)`:(0,t.str)`"${y}" keyword is invalid ($data)`};function r(y,m=e.keywordError,h,b){const{it:w}=y,{gen:v,compositeRule:S,allErrors:P}=w,E=u(y,m,h);b??(S||P)?l(v,E):c(w,(0,t._)`[${E}]`)}e.reportError=r;function n(y,m=e.keywordError,h){const{it:b}=y,{gen:w,compositeRule:v,allErrors:S}=b,P=u(y,m,h);l(w,P),v||S||c(b,s.default.vErrors)}e.reportExtraError=n;function o(y,m){y.assign(s.default.errors,m),y.if((0,t._)`${s.default.vErrors} !== null`,()=>y.if(m,()=>y.assign((0,t._)`${s.default.vErrors}.length`,m),()=>y.assign(s.default.vErrors,null)))}e.resetErrorsCount=o;function i({gen:y,keyword:m,schemaValue:h,data:b,errsCount:w,it:v}){if(w===void 0)throw new Error("ajv implementation error");const S=y.name("err");y.forRange("i",w,s.default.errors,P=>{y.const(S,(0,t._)`${s.default.vErrors}[${P}]`),y.if((0,t._)`${S}.instancePath === undefined`,()=>y.assign((0,t._)`${S}.instancePath`,(0,t.strConcat)(s.default.instancePath,v.errorPath))),y.assign((0,t._)`${S}.schemaPath`,(0,t.str)`${v.errSchemaPath}/${m}`),v.opts.verbose&&(y.assign((0,t._)`${S}.schema`,h),y.assign((0,t._)`${S}.data`,b))})}e.extendErrors=i;function l(y,m){const h=y.const("err",m);y.if((0,t._)`${s.default.vErrors} === null`,()=>y.assign(s.default.vErrors,(0,t._)`[${h}]`),(0,t._)`${s.default.vErrors}.push(${h})`),y.code((0,t._)`${s.default.errors}++`)}function c(y,m){const{gen:h,validateName:b,schemaEnv:w}=y;w.$async?h.throw((0,t._)`new ${y.ValidationError}(${m})`):(h.assign((0,t._)`${b}.errors`,m),h.return(!1))}const d={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function u(y,m,h){const{createErrors:b}=y.it;return b===!1?(0,t._)`{}`:p(y,m,h)}function p(y,m,h={}){const{gen:b,it:w}=y,v=[f(w,h),g(y,h)];return _(y,m,v),b.object(...v)}function f({errorPath:y},{instancePath:m}){const h=m?(0,t.str)`${y}${(0,a.getErrorPath)(m,a.Type.Str)}`:y;return[s.default.instancePath,(0,t.strConcat)(s.default.instancePath,h)]}function g({keyword:y,it:{errSchemaPath:m}},{schemaPath:h,parentSchema:b}){let w=b?m:(0,t.str)`${m}/${y}`;return h&&(w=(0,t.str)`${w}${(0,a.getErrorPath)(h,a.Type.Str)}`),[d.schemaPath,w]}function _(y,{params:m,message:h},b){const{keyword:w,data:v,schemaValue:S,it:P}=y,{opts:E,propertyName:T,topSchemaRef:x,schemaPath:O}=P;b.push([d.keyword,w],[d.params,typeof m=="function"?m(y):m||(0,t._)`{}`]),E.messages&&b.push([d.message,typeof h=="function"?h(y):h]),E.verbose&&b.push([d.schema,S],[d.parentSchema,(0,t._)`${x}${O}`],[s.default.data,v]),T&&b.push([d.propertyName,T])}})(jn)),jn}var _l;function ay(){if(_l)return Ta;_l=1,Object.defineProperty(Ta,"__esModule",{value:!0}),Ta.boolOrEmptySchema=Ta.topBoolOrEmptySchema=void 0;const e=ln(),t=ge(),a=ba(),s={message:"boolean schema is false"};function r(i){const{gen:l,schema:c,validateName:d}=i;c===!1?o(i,!1):typeof c=="object"&&c.$async===!0?l.return(a.default.data):(l.assign((0,t._)`${d}.errors`,null),l.return(!0))}Ta.topBoolOrEmptySchema=r;function n(i,l){const{gen:c,schema:d}=i;d===!1?(c.var(l,!1),o(i)):c.var(l,!0)}Ta.boolOrEmptySchema=n;function o(i,l){const{gen:c,data:d}=i,u={gen:c,keyword:"false schema",data:d,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:i};(0,e.reportError)(u,s,void 0,l)}return Ta}var Ie={},Sa={},yl;function Eu(){if(yl)return Sa;yl=1,Object.defineProperty(Sa,"__esModule",{value:!0}),Sa.getRules=Sa.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function a(r){return typeof r=="string"&&t.has(r)}Sa.isJSONType=a;function s(){const r={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...r,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},r.number,r.string,r.array,r.object],post:{rules:[]},all:{},keywords:{}}}return Sa.getRules=s,Sa}var Ft={},vl;function ku(){if(vl)return Ft;vl=1,Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.shouldUseRule=Ft.shouldUseGroup=Ft.schemaHasRulesForType=void 0;function e({schema:s,self:r},n){const o=r.RULES.types[n];return o&&o!==!0&&t(s,o)}Ft.schemaHasRulesForType=e;function t(s,r){return r.rules.some(n=>a(s,n))}Ft.shouldUseGroup=t;function a(s,r){var n;return s[r.keyword]!==void 0||((n=r.definition.implements)===null||n===void 0?void 0:n.some(o=>s[o]!==void 0))}return Ft.shouldUseRule=a,Ft}var wl;function Hr(){if(wl)return Ie;wl=1,Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.reportTypeError=Ie.checkDataTypes=Ie.checkDataType=Ie.coerceAndCheckDataType=Ie.getJSONTypes=Ie.getSchemaTypes=Ie.DataType=void 0;const e=Eu(),t=ku(),a=ln(),s=ge(),r=ve();var n;(function(h){h[h.Correct=0]="Correct",h[h.Wrong=1]="Wrong"})(n||(Ie.DataType=n={}));function o(h){const b=i(h.type);if(b.includes("null")){if(h.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!b.length&&h.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');h.nullable===!0&&b.push("null")}return b}Ie.getSchemaTypes=o;function i(h){const b=Array.isArray(h)?h:h?[h]:[];if(b.every(e.isJSONType))return b;throw new Error("type must be JSONType or JSONType[]: "+b.join(","))}Ie.getJSONTypes=i;function l(h,b){const{gen:w,data:v,opts:S}=h,P=d(b,S.coerceTypes),E=b.length>0&&!(P.length===0&&b.length===1&&(0,t.schemaHasRulesForType)(h,b[0]));if(E){const T=g(b,v,S.strictNumbers,n.Wrong);w.if(T,()=>{P.length?u(h,b,P):y(h)})}return E}Ie.coerceAndCheckDataType=l;const c=new Set(["string","number","integer","boolean","null"]);function d(h,b){return b?h.filter(w=>c.has(w)||b==="array"&&w==="array"):[]}function u(h,b,w){const{gen:v,data:S,opts:P}=h,E=v.let("dataType",(0,s._)`typeof ${S}`),T=v.let("coerced",(0,s._)`undefined`);P.coerceTypes==="array"&&v.if((0,s._)`${E} == 'object' && Array.isArray(${S}) && ${S}.length == 1`,()=>v.assign(S,(0,s._)`${S}[0]`).assign(E,(0,s._)`typeof ${S}`).if(g(b,S,P.strictNumbers),()=>v.assign(T,S))),v.if((0,s._)`${T} !== undefined`);for(const O of w)(c.has(O)||O==="array"&&P.coerceTypes==="array")&&x(O);v.else(),y(h),v.endIf(),v.if((0,s._)`${T} !== undefined`,()=>{v.assign(S,T),p(h,T)});function x(O){switch(O){case"string":v.elseIf((0,s._)`${E} == "number" || ${E} == "boolean"`).assign(T,(0,s._)`"" + ${S}`).elseIf((0,s._)`${S} === null`).assign(T,(0,s._)`""`);return;case"number":v.elseIf((0,s._)`${E} == "boolean" || ${S} === null
              || (${E} == "string" && ${S} && ${S} == +${S})`).assign(T,(0,s._)`+${S}`);return;case"integer":v.elseIf((0,s._)`${E} === "boolean" || ${S} === null
              || (${E} === "string" && ${S} && ${S} == +${S} && !(${S} % 1))`).assign(T,(0,s._)`+${S}`);return;case"boolean":v.elseIf((0,s._)`${S} === "false" || ${S} === 0 || ${S} === null`).assign(T,!1).elseIf((0,s._)`${S} === "true" || ${S} === 1`).assign(T,!0);return;case"null":v.elseIf((0,s._)`${S} === "" || ${S} === 0 || ${S} === false`),v.assign(T,null);return;case"array":v.elseIf((0,s._)`${E} === "string" || ${E} === "number"
              || ${E} === "boolean" || ${S} === null`).assign(T,(0,s._)`[${S}]`)}}}function p({gen:h,parentData:b,parentDataProperty:w},v){h.if((0,s._)`${b} !== undefined`,()=>h.assign((0,s._)`${b}[${w}]`,v))}function f(h,b,w,v=n.Correct){const S=v===n.Correct?s.operators.EQ:s.operators.NEQ;let P;switch(h){case"null":return(0,s._)`${b} ${S} null`;case"array":P=(0,s._)`Array.isArray(${b})`;break;case"object":P=(0,s._)`${b} && typeof ${b} == "object" && !Array.isArray(${b})`;break;case"integer":P=E((0,s._)`!(${b} % 1) && !isNaN(${b})`);break;case"number":P=E();break;default:return(0,s._)`typeof ${b} ${S} ${h}`}return v===n.Correct?P:(0,s.not)(P);function E(T=s.nil){return(0,s.and)((0,s._)`typeof ${b} == "number"`,T,w?(0,s._)`isFinite(${b})`:s.nil)}}Ie.checkDataType=f;function g(h,b,w,v){if(h.length===1)return f(h[0],b,w,v);let S;const P=(0,r.toHash)(h);if(P.array&&P.object){const E=(0,s._)`typeof ${b} != "object"`;S=P.null?E:(0,s._)`!${b} || ${E}`,delete P.null,delete P.array,delete P.object}else S=s.nil;P.number&&delete P.integer;for(const E in P)S=(0,s.and)(S,f(E,b,w,v));return S}Ie.checkDataTypes=g;const _={message:({schema:h})=>`must be ${h}`,params:({schema:h,schemaValue:b})=>typeof h=="string"?(0,s._)`{type: ${h}}`:(0,s._)`{type: ${b}}`};function y(h){const b=m(h);(0,a.reportError)(b,_)}Ie.reportTypeError=y;function m(h){const{gen:b,data:w,schema:v}=h,S=(0,r.schemaRefOrVal)(h,v,"type");return{gen:b,keyword:"type",data:w,schema:v.type,schemaCode:S,schemaValue:S,parentSchema:v,params:{},it:h}}return Ie}var Za={},Tl;function sy(){if(Tl)return Za;Tl=1,Object.defineProperty(Za,"__esModule",{value:!0}),Za.assignDefaults=void 0;const e=ge(),t=ve();function a(r,n){const{properties:o,items:i}=r.schema;if(n==="object"&&o)for(const l in o)s(r,l,o[l].default);else n==="array"&&Array.isArray(i)&&i.forEach((l,c)=>s(r,c,l.default))}Za.assignDefaults=a;function s(r,n,o){const{gen:i,compositeRule:l,data:c,opts:d}=r;if(o===void 0)return;const u=(0,e._)`${c}${(0,e.getProperty)(n)}`;if(l){(0,t.checkStrictMode)(r,`default is ignored for: ${u}`);return}let p=(0,e._)`${u} === undefined`;d.useDefaults==="empty"&&(p=(0,e._)`${p} || ${u} === null || ${u} === ""`),i.if(p,(0,e._)`${u} = ${(0,e.stringify)(o)}`)}return Za}var mt={},xe={},Sl;function vt(){if(Sl)return xe;Sl=1,Object.defineProperty(xe,"__esModule",{value:!0}),xe.validateUnion=xe.validateArray=xe.usePattern=xe.callValidateCode=xe.schemaProperties=xe.allSchemaProperties=xe.noPropertyInData=xe.propertyInData=xe.isOwnProperty=xe.hasPropFunc=xe.reportMissingProp=xe.checkMissingProp=xe.checkReportMissingProp=void 0;const e=ge(),t=ve(),a=ba(),s=ve();function r(h,b){const{gen:w,data:v,it:S}=h;w.if(d(w,v,b,S.opts.ownProperties),()=>{h.setParams({missingProperty:(0,e._)`${b}`},!0),h.error()})}xe.checkReportMissingProp=r;function n({gen:h,data:b,it:{opts:w}},v,S){return(0,e.or)(...v.map(P=>(0,e.and)(d(h,b,P,w.ownProperties),(0,e._)`${S} = ${P}`)))}xe.checkMissingProp=n;function o(h,b){h.setParams({missingProperty:b},!0),h.error()}xe.reportMissingProp=o;function i(h){return h.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}xe.hasPropFunc=i;function l(h,b,w){return(0,e._)`${i(h)}.call(${b}, ${w})`}xe.isOwnProperty=l;function c(h,b,w,v){const S=(0,e._)`${b}${(0,e.getProperty)(w)} !== undefined`;return v?(0,e._)`${S} && ${l(h,b,w)}`:S}xe.propertyInData=c;function d(h,b,w,v){const S=(0,e._)`${b}${(0,e.getProperty)(w)} === undefined`;return v?(0,e.or)(S,(0,e.not)(l(h,b,w))):S}xe.noPropertyInData=d;function u(h){return h?Object.keys(h).filter(b=>b!=="__proto__"):[]}xe.allSchemaProperties=u;function p(h,b){return u(b).filter(w=>!(0,t.alwaysValidSchema)(h,b[w]))}xe.schemaProperties=p;function f({schemaCode:h,data:b,it:{gen:w,topSchemaRef:v,schemaPath:S,errorPath:P},it:E},T,x,O){const $=O?(0,e._)`${h}, ${b}, ${v}${S}`:b,L=[[a.default.instancePath,(0,e.strConcat)(a.default.instancePath,P)],[a.default.parentData,E.parentData],[a.default.parentDataProperty,E.parentDataProperty],[a.default.rootData,a.default.rootData]];E.opts.dynamicRef&&L.push([a.default.dynamicAnchors,a.default.dynamicAnchors]);const U=(0,e._)`${$}, ${w.object(...L)}`;return x!==e.nil?(0,e._)`${T}.call(${x}, ${U})`:(0,e._)`${T}(${U})`}xe.callValidateCode=f;const g=(0,e._)`new RegExp`;function _({gen:h,it:{opts:b}},w){const v=b.unicodeRegExp?"u":"",{regExp:S}=b.code,P=S(w,v);return h.scopeValue("pattern",{key:P.toString(),ref:P,code:(0,e._)`${S.code==="new RegExp"?g:(0,s.useFunc)(h,S)}(${w}, ${v})`})}xe.usePattern=_;function y(h){const{gen:b,data:w,keyword:v,it:S}=h,P=b.name("valid");if(S.allErrors){const T=b.let("valid",!0);return E(()=>b.assign(T,!1)),T}return b.var(P,!0),E(()=>b.break()),P;function E(T){const x=b.const("len",(0,e._)`${w}.length`);b.forRange("i",0,x,O=>{h.subschema({keyword:v,dataProp:O,dataPropType:t.Type.Num},P),b.if((0,e.not)(P),T)})}}xe.validateArray=y;function m(h){const{gen:b,schema:w,keyword:v,it:S}=h;if(!Array.isArray(w))throw new Error("ajv implementation error");if(w.some(x=>(0,t.alwaysValidSchema)(S,x))&&!S.opts.unevaluated)return;const E=b.let("valid",!1),T=b.name("_valid");b.block(()=>w.forEach((x,O)=>{const $=h.subschema({keyword:v,schemaProp:O,compositeRule:!0},T);b.assign(E,(0,e._)`${E} || ${T}`),h.mergeValidEvaluated($,T)||b.if((0,e.not)(E))})),h.result(E,()=>h.reset(),()=>h.error(!0))}return xe.validateUnion=m,xe}var xl;function ry(){if(xl)return mt;xl=1,Object.defineProperty(mt,"__esModule",{value:!0}),mt.validateKeywordUsage=mt.validSchemaType=mt.funcKeywordCode=mt.macroKeywordCode=void 0;const e=ge(),t=ba(),a=vt(),s=ln();function r(p,f){const{gen:g,keyword:_,schema:y,parentSchema:m,it:h}=p,b=f.macro.call(h.self,y,m,h),w=c(g,_,b);h.opts.validateSchema!==!1&&h.self.validateSchema(b,!0);const v=g.name("valid");p.subschema({schema:b,schemaPath:e.nil,errSchemaPath:`${h.errSchemaPath}/${_}`,topSchemaRef:w,compositeRule:!0},v),p.pass(v,()=>p.error(!0))}mt.macroKeywordCode=r;function n(p,f){var g;const{gen:_,keyword:y,schema:m,parentSchema:h,$data:b,it:w}=p;l(w,f);const v=!b&&f.compile?f.compile.call(w.self,m,h,w):f.validate,S=c(_,y,v),P=_.let("valid");p.block$data(P,E),p.ok((g=f.valid)!==null&&g!==void 0?g:P);function E(){if(f.errors===!1)O(),f.modifying&&o(p),$(()=>p.error());else{const L=f.async?T():x();f.modifying&&o(p),$(()=>i(p,L))}}function T(){const L=_.let("ruleErrs",null);return _.try(()=>O((0,e._)`await `),U=>_.assign(P,!1).if((0,e._)`${U} instanceof ${w.ValidationError}`,()=>_.assign(L,(0,e._)`${U}.errors`),()=>_.throw(U))),L}function x(){const L=(0,e._)`${S}.errors`;return _.assign(L,null),O(e.nil),L}function O(L=f.async?(0,e._)`await `:e.nil){const U=w.opts.passContext?t.default.this:t.default.self,K=!("compile"in f&&!b||f.schema===!1);_.assign(P,(0,e._)`${L}${(0,a.callValidateCode)(p,S,U,K)}`,f.modifying)}function $(L){var U;_.if((0,e.not)((U=f.valid)!==null&&U!==void 0?U:P),L)}}mt.funcKeywordCode=n;function o(p){const{gen:f,data:g,it:_}=p;f.if(_.parentData,()=>f.assign(g,(0,e._)`${_.parentData}[${_.parentDataProperty}]`))}function i(p,f){const{gen:g}=p;g.if((0,e._)`Array.isArray(${f})`,()=>{g.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,s.extendErrors)(p)},()=>p.error())}function l({schemaEnv:p},f){if(f.async&&!p.$async)throw new Error("async keyword in sync schema")}function c(p,f,g){if(g===void 0)throw new Error(`keyword "${f}" failed to compile`);return p.scopeValue("keyword",typeof g=="function"?{ref:g}:{ref:g,code:(0,e.stringify)(g)})}function d(p,f,g=!1){return!f.length||f.some(_=>_==="array"?Array.isArray(p):_==="object"?p&&typeof p=="object"&&!Array.isArray(p):typeof p==_||g&&typeof p>"u")}mt.validSchemaType=d;function u({schema:p,opts:f,self:g,errSchemaPath:_},y,m){if(Array.isArray(y.keyword)?!y.keyword.includes(m):y.keyword!==m)throw new Error("ajv implementation error");const h=y.dependencies;if(h?.some(b=>!Object.prototype.hasOwnProperty.call(p,b)))throw new Error(`parent schema must have dependencies of ${m}: ${h.join(",")}`);if(y.validateSchema&&!y.validateSchema(p[m])){const w=`keyword "${m}" value is invalid at path "${_}": `+g.errorsText(y.validateSchema.errors);if(f.validateSchema==="log")g.logger.error(w);else throw new Error(w)}}return mt.validateKeywordUsage=u,mt}var zt={},El;function ny(){if(El)return zt;El=1,Object.defineProperty(zt,"__esModule",{value:!0}),zt.extendSubschemaMode=zt.extendSubschemaData=zt.getSubschema=void 0;const e=ge(),t=ve();function a(n,{keyword:o,schemaProp:i,schema:l,schemaPath:c,errSchemaPath:d,topSchemaRef:u}){if(o!==void 0&&l!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(o!==void 0){const p=n.schema[o];return i===void 0?{schema:p,schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}`,errSchemaPath:`${n.errSchemaPath}/${o}`}:{schema:p[i],schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}${(0,e.getProperty)(i)}`,errSchemaPath:`${n.errSchemaPath}/${o}/${(0,t.escapeFragment)(i)}`}}if(l!==void 0){if(c===void 0||d===void 0||u===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:l,schemaPath:c,topSchemaRef:u,errSchemaPath:d}}throw new Error('either "keyword" or "schema" must be passed')}zt.getSubschema=a;function s(n,o,{dataProp:i,dataPropType:l,data:c,dataTypes:d,propertyName:u}){if(c!==void 0&&i!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:p}=o;if(i!==void 0){const{errorPath:g,dataPathArr:_,opts:y}=o,m=p.let("data",(0,e._)`${o.data}${(0,e.getProperty)(i)}`,!0);f(m),n.errorPath=(0,e.str)`${g}${(0,t.getErrorPath)(i,l,y.jsPropertySyntax)}`,n.parentDataProperty=(0,e._)`${i}`,n.dataPathArr=[..._,n.parentDataProperty]}if(c!==void 0){const g=c instanceof e.Name?c:p.let("data",c,!0);f(g),u!==void 0&&(n.propertyName=u)}d&&(n.dataTypes=d);function f(g){n.data=g,n.dataLevel=o.dataLevel+1,n.dataTypes=[],o.definedProperties=new Set,n.parentData=o.data,n.dataNames=[...o.dataNames,g]}}zt.extendSubschemaData=s;function r(n,{jtdDiscriminator:o,jtdMetadata:i,compositeRule:l,createErrors:c,allErrors:d}){l!==void 0&&(n.compositeRule=l),c!==void 0&&(n.createErrors=c),d!==void 0&&(n.allErrors=d),n.jtdDiscriminator=o,n.jtdMetadata=i}return zt.extendSubschemaMode=r,zt}var Ue={},Gn,kl;function Pu(){return kl||(kl=1,Gn=function e(t,a){if(t===a)return!0;if(t&&a&&typeof t=="object"&&typeof a=="object"){if(t.constructor!==a.constructor)return!1;var s,r,n;if(Array.isArray(t)){if(s=t.length,s!=a.length)return!1;for(r=s;r--!==0;)if(!e(t[r],a[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if(n=Object.keys(t),s=n.length,s!==Object.keys(a).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(a,n[r]))return!1;for(r=s;r--!==0;){var o=n[r];if(!e(t[o],a[o]))return!1}return!0}return t!==t&&a!==a}),Gn}var Vn={exports:{}},Pl;function oy(){if(Pl)return Vn.exports;Pl=1;var e=Vn.exports=function(s,r,n){typeof r=="function"&&(n=r,r={}),n=r.cb||n;var o=typeof n=="function"?n:n.pre||function(){},i=n.post||function(){};t(r,o,i,s,"",s)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(s,r,n,o,i,l,c,d,u,p){if(o&&typeof o=="object"&&!Array.isArray(o)){r(o,i,l,c,d,u,p);for(var f in o){var g=o[f];if(Array.isArray(g)){if(f in e.arrayKeywords)for(var _=0;_<g.length;_++)t(s,r,n,g[_],i+"/"+f+"/"+_,l,i,f,o,_)}else if(f in e.propsKeywords){if(g&&typeof g=="object")for(var y in g)t(s,r,n,g[y],i+"/"+f+"/"+a(y),l,i,f,o,y)}else(f in e.keywords||s.allKeys&&!(f in e.skipKeywords))&&t(s,r,n,g,i+"/"+f,l,i,f,o)}n(o,i,l,c,d,u,p)}}function a(s){return s.replace(/~/g,"~0").replace(/\//g,"~1")}return Vn.exports}var Al;function cn(){if(Al)return Ue;Al=1,Object.defineProperty(Ue,"__esModule",{value:!0}),Ue.getSchemaRefs=Ue.resolveUrl=Ue.normalizeId=Ue._getFullPath=Ue.getFullPath=Ue.inlineRef=void 0;const e=ve(),t=Pu(),a=oy(),s=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function r(_,y=!0){return typeof _=="boolean"?!0:y===!0?!o(_):y?i(_)<=y:!1}Ue.inlineRef=r;const n=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function o(_){for(const y in _){if(n.has(y))return!0;const m=_[y];if(Array.isArray(m)&&m.some(o)||typeof m=="object"&&o(m))return!0}return!1}function i(_){let y=0;for(const m in _){if(m==="$ref")return 1/0;if(y++,!s.has(m)&&(typeof _[m]=="object"&&(0,e.eachItem)(_[m],h=>y+=i(h)),y===1/0))return 1/0}return y}function l(_,y="",m){m!==!1&&(y=u(y));const h=_.parse(y);return c(_,h)}Ue.getFullPath=l;function c(_,y){return _.serialize(y).split("#")[0]+"#"}Ue._getFullPath=c;const d=/#\/?$/;function u(_){return _?_.replace(d,""):""}Ue.normalizeId=u;function p(_,y,m){return m=u(m),_.resolve(y,m)}Ue.resolveUrl=p;const f=/^[a-z_][-a-z0-9._]*$/i;function g(_,y){if(typeof _=="boolean")return{};const{schemaId:m,uriResolver:h}=this.opts,b=u(_[m]||y),w={"":b},v=l(h,b,!1),S={},P=new Set;return a(_,{allKeys:!0},(x,O,$,L)=>{if(L===void 0)return;const U=v+O;let K=w[L];typeof x[m]=="string"&&(K=re.call(this,x[m])),J.call(this,x.$anchor),J.call(this,x.$dynamicAnchor),w[O]=K;function re(G){const Y=this.opts.uriResolver.resolve;if(G=u(K?Y(K,G):G),P.has(G))throw T(G);P.add(G);let j=this.refs[G];return typeof j=="string"&&(j=this.refs[j]),typeof j=="object"?E(x,j.schema,G):G!==u(U)&&(G[0]==="#"?(E(x,S[G],G),S[G]=x):this.refs[G]=U),G}function J(G){if(typeof G=="string"){if(!f.test(G))throw new Error(`invalid anchor "${G}"`);re.call(this,`#${G}`)}}}),S;function E(x,O,$){if(O!==void 0&&!t(x,O))throw T($)}function T(x){return new Error(`reference "${x}" resolves to more than one schema`)}}return Ue.getSchemaRefs=g,Ue}var Cl;function dn(){if(Cl)return Bt;Cl=1,Object.defineProperty(Bt,"__esModule",{value:!0}),Bt.getData=Bt.KeywordCxt=Bt.validateFunctionCode=void 0;const e=ay(),t=Hr(),a=ku(),s=Hr(),r=sy(),n=ry(),o=ny(),i=ge(),l=ba(),c=cn(),d=ve(),u=ln();function p(B){if(v(B)&&(P(B),w(B))){y(B);return}f(B,()=>(0,e.topBoolOrEmptySchema)(B))}Bt.validateFunctionCode=p;function f({gen:B,validateName:k,schema:C,schemaEnv:D,opts:q},Q){q.code.es5?B.func(k,(0,i._)`${l.default.data}, ${l.default.valCxt}`,D.$async,()=>{B.code((0,i._)`"use strict"; ${h(C,q)}`),_(B,q),B.code(Q)}):B.func(k,(0,i._)`${l.default.data}, ${g(q)}`,D.$async,()=>B.code(h(C,q)).code(Q))}function g(B){return(0,i._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${B.dynamicRef?(0,i._)`, ${l.default.dynamicAnchors}={}`:i.nil}}={}`}function _(B,k){B.if(l.default.valCxt,()=>{B.var(l.default.instancePath,(0,i._)`${l.default.valCxt}.${l.default.instancePath}`),B.var(l.default.parentData,(0,i._)`${l.default.valCxt}.${l.default.parentData}`),B.var(l.default.parentDataProperty,(0,i._)`${l.default.valCxt}.${l.default.parentDataProperty}`),B.var(l.default.rootData,(0,i._)`${l.default.valCxt}.${l.default.rootData}`),k.dynamicRef&&B.var(l.default.dynamicAnchors,(0,i._)`${l.default.valCxt}.${l.default.dynamicAnchors}`)},()=>{B.var(l.default.instancePath,(0,i._)`""`),B.var(l.default.parentData,(0,i._)`undefined`),B.var(l.default.parentDataProperty,(0,i._)`undefined`),B.var(l.default.rootData,l.default.data),k.dynamicRef&&B.var(l.default.dynamicAnchors,(0,i._)`{}`)})}function y(B){const{schema:k,opts:C,gen:D}=B;f(B,()=>{C.$comment&&k.$comment&&L(B),x(B),D.let(l.default.vErrors,null),D.let(l.default.errors,0),C.unevaluated&&m(B),E(B),U(B)})}function m(B){const{gen:k,validateName:C}=B;B.evaluated=k.const("evaluated",(0,i._)`${C}.evaluated`),k.if((0,i._)`${B.evaluated}.dynamicProps`,()=>k.assign((0,i._)`${B.evaluated}.props`,(0,i._)`undefined`)),k.if((0,i._)`${B.evaluated}.dynamicItems`,()=>k.assign((0,i._)`${B.evaluated}.items`,(0,i._)`undefined`))}function h(B,k){const C=typeof B=="object"&&B[k.schemaId];return C&&(k.code.source||k.code.process)?(0,i._)`/*# sourceURL=${C} */`:i.nil}function b(B,k){if(v(B)&&(P(B),w(B))){S(B,k);return}(0,e.boolOrEmptySchema)(B,k)}function w({schema:B,self:k}){if(typeof B=="boolean")return!B;for(const C in B)if(k.RULES.all[C])return!0;return!1}function v(B){return typeof B.schema!="boolean"}function S(B,k){const{schema:C,gen:D,opts:q}=B;q.$comment&&C.$comment&&L(B),O(B),$(B);const Q=D.const("_errs",l.default.errors);E(B,Q),D.var(k,(0,i._)`${Q} === ${l.default.errors}`)}function P(B){(0,d.checkUnknownRules)(B),T(B)}function E(B,k){if(B.opts.jtd)return re(B,[],!1,k);const C=(0,t.getSchemaTypes)(B.schema),D=(0,t.coerceAndCheckDataType)(B,C);re(B,C,!D,k)}function T(B){const{schema:k,errSchemaPath:C,opts:D,self:q}=B;k.$ref&&D.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(k,q.RULES)&&q.logger.warn(`$ref: keywords ignored in schema at path "${C}"`)}function x(B){const{schema:k,opts:C}=B;k.default!==void 0&&C.useDefaults&&C.strictSchema&&(0,d.checkStrictMode)(B,"default is ignored in the schema root")}function O(B){const k=B.schema[B.opts.schemaId];k&&(B.baseId=(0,c.resolveUrl)(B.opts.uriResolver,B.baseId,k))}function $(B){if(B.schema.$async&&!B.schemaEnv.$async)throw new Error("async schema in sync schema")}function L({gen:B,schemaEnv:k,schema:C,errSchemaPath:D,opts:q}){const Q=C.$comment;if(q.$comment===!0)B.code((0,i._)`${l.default.self}.logger.log(${Q})`);else if(typeof q.$comment=="function"){const ee=(0,i.str)`${D}/$comment`,ie=B.scopeValue("root",{ref:k.root});B.code((0,i._)`${l.default.self}.opts.$comment(${Q}, ${ee}, ${ie}.schema)`)}}function U(B){const{gen:k,schemaEnv:C,validateName:D,ValidationError:q,opts:Q}=B;C.$async?k.if((0,i._)`${l.default.errors} === 0`,()=>k.return(l.default.data),()=>k.throw((0,i._)`new ${q}(${l.default.vErrors})`)):(k.assign((0,i._)`${D}.errors`,l.default.vErrors),Q.unevaluated&&K(B),k.return((0,i._)`${l.default.errors} === 0`))}function K({gen:B,evaluated:k,props:C,items:D}){C instanceof i.Name&&B.assign((0,i._)`${k}.props`,C),D instanceof i.Name&&B.assign((0,i._)`${k}.items`,D)}function re(B,k,C,D){const{gen:q,schema:Q,data:ee,allErrors:ie,opts:W,self:te}=B,{RULES:Z}=te;if(Q.$ref&&(W.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(Q,Z))){q.block(()=>N(B,"$ref",Z.all.$ref.definition));return}W.jtd||G(B,k),q.block(()=>{for(const ne of Z.rules)le(ne);le(Z.post)});function le(ne){(0,a.shouldUseGroup)(Q,ne)&&(ne.type?(q.if((0,s.checkDataType)(ne.type,ee,W.strictNumbers)),J(B,ne),k.length===1&&k[0]===ne.type&&C&&(q.else(),(0,s.reportTypeError)(B)),q.endIf()):J(B,ne),ie||q.if((0,i._)`${l.default.errors} === ${D||0}`))}}function J(B,k){const{gen:C,schema:D,opts:{useDefaults:q}}=B;q&&(0,r.assignDefaults)(B,k.type),C.block(()=>{for(const Q of k.rules)(0,a.shouldUseRule)(D,Q)&&N(B,Q.keyword,Q.definition,k.type)})}function G(B,k){B.schemaEnv.meta||!B.opts.strictTypes||(Y(B,k),B.opts.allowUnionTypes||j(B,k),I(B,B.dataTypes))}function Y(B,k){if(k.length){if(!B.dataTypes.length){B.dataTypes=k;return}k.forEach(C=>{z(B.dataTypes,C)||R(B,`type "${C}" not allowed by context "${B.dataTypes.join(",")}"`)}),A(B,k)}}function j(B,k){k.length>1&&!(k.length===2&&k.includes("null"))&&R(B,"use allowUnionTypes to allow union type keyword")}function I(B,k){const C=B.self.RULES.all;for(const D in C){const q=C[D];if(typeof q=="object"&&(0,a.shouldUseRule)(B.schema,q)){const{type:Q}=q.definition;Q.length&&!Q.some(ee=>H(k,ee))&&R(B,`missing type "${Q.join(",")}" for keyword "${D}"`)}}}function H(B,k){return B.includes(k)||k==="number"&&B.includes("integer")}function z(B,k){return B.includes(k)||k==="integer"&&B.includes("number")}function A(B,k){const C=[];for(const D of B.dataTypes)z(k,D)?C.push(D):k.includes("integer")&&D==="number"&&C.push("integer");B.dataTypes=C}function R(B,k){const C=B.schemaEnv.baseId+B.errSchemaPath;k+=` at "${C}" (strictTypes)`,(0,d.checkStrictMode)(B,k,B.opts.strictTypes)}class M{constructor(k,C,D){if((0,n.validateKeywordUsage)(k,C,D),this.gen=k.gen,this.allErrors=k.allErrors,this.keyword=D,this.data=k.data,this.schema=k.schema[D],this.$data=C.$data&&k.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(k,this.schema,D,this.$data),this.schemaType=C.schemaType,this.parentSchema=k.schema,this.params={},this.it=k,this.def=C,this.$data)this.schemaCode=k.gen.const("vSchema",se(this.$data,k));else if(this.schemaCode=this.schemaValue,!(0,n.validSchemaType)(this.schema,C.schemaType,C.allowUndefined))throw new Error(`${D} value must be ${JSON.stringify(C.schemaType)}`);("code"in C?C.trackErrors:C.errors!==!1)&&(this.errsCount=k.gen.const("_errs",l.default.errors))}result(k,C,D){this.failResult((0,i.not)(k),C,D)}failResult(k,C,D){this.gen.if(k),D?D():this.error(),C?(this.gen.else(),C(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(k,C){this.failResult((0,i.not)(k),void 0,C)}fail(k){if(k===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(k),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(k){if(!this.$data)return this.fail(k);const{schemaCode:C}=this;this.fail((0,i._)`${C} !== undefined && (${(0,i.or)(this.invalid$data(),k)})`)}error(k,C,D){if(C){this.setParams(C),this._error(k,D),this.setParams({});return}this._error(k,D)}_error(k,C){(k?u.reportExtraError:u.reportError)(this,this.def.error,C)}$dataError(){(0,u.reportError)(this,this.def.$dataError||u.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,u.resetErrorsCount)(this.gen,this.errsCount)}ok(k){this.allErrors||this.gen.if(k)}setParams(k,C){C?Object.assign(this.params,k):this.params=k}block$data(k,C,D=i.nil){this.gen.block(()=>{this.check$data(k,D),C()})}check$data(k=i.nil,C=i.nil){if(!this.$data)return;const{gen:D,schemaCode:q,schemaType:Q,def:ee}=this;D.if((0,i.or)((0,i._)`${q} === undefined`,C)),k!==i.nil&&D.assign(k,!0),(Q.length||ee.validateSchema)&&(D.elseIf(this.invalid$data()),this.$dataError(),k!==i.nil&&D.assign(k,!1)),D.else()}invalid$data(){const{gen:k,schemaCode:C,schemaType:D,def:q,it:Q}=this;return(0,i.or)(ee(),ie());function ee(){if(D.length){if(!(C instanceof i.Name))throw new Error("ajv implementation error");const W=Array.isArray(D)?D:[D];return(0,i._)`${(0,s.checkDataTypes)(W,C,Q.opts.strictNumbers,s.DataType.Wrong)}`}return i.nil}function ie(){if(q.validateSchema){const W=k.scopeValue("validate$data",{ref:q.validateSchema});return(0,i._)`!${W}(${C})`}return i.nil}}subschema(k,C){const D=(0,o.getSubschema)(this.it,k);(0,o.extendSubschemaData)(D,this.it,k),(0,o.extendSubschemaMode)(D,k);const q={...this.it,...D,items:void 0,props:void 0};return b(q,C),q}mergeEvaluated(k,C){const{it:D,gen:q}=this;D.opts.unevaluated&&(D.props!==!0&&k.props!==void 0&&(D.props=d.mergeEvaluated.props(q,k.props,D.props,C)),D.items!==!0&&k.items!==void 0&&(D.items=d.mergeEvaluated.items(q,k.items,D.items,C)))}mergeValidEvaluated(k,C){const{it:D,gen:q}=this;if(D.opts.unevaluated&&(D.props!==!0||D.items!==!0))return q.if(C,()=>this.mergeEvaluated(k,i.Name)),!0}}Bt.KeywordCxt=M;function N(B,k,C,D){const q=new M(B,C,k);"code"in C?C.code(q,D):q.$data&&C.validate?(0,n.funcKeywordCode)(q,C):"macro"in C?(0,n.macroKeywordCode)(q,C):(C.compile||C.validate)&&(0,n.funcKeywordCode)(q,C)}const F=/^\/(?:[^~]|~0|~1)*$/,V=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function se(B,{dataLevel:k,dataNames:C,dataPathArr:D}){let q,Q;if(B==="")return l.default.rootData;if(B[0]==="/"){if(!F.test(B))throw new Error(`Invalid JSON-pointer: ${B}`);q=B,Q=l.default.rootData}else{const te=V.exec(B);if(!te)throw new Error(`Invalid JSON-pointer: ${B}`);const Z=+te[1];if(q=te[2],q==="#"){if(Z>=k)throw new Error(W("property/index",Z));return D[k-Z]}if(Z>k)throw new Error(W("data",Z));if(Q=C[k-Z],!q)return Q}let ee=Q;const ie=q.split("/");for(const te of ie)te&&(Q=(0,i._)`${Q}${(0,i.getProperty)((0,d.unescapeJsonPointer)(te))}`,ee=(0,i._)`${ee} && ${Q}`);return ee;function W(te,Z){return`Cannot access ${te} ${Z} levels up, current level is ${k}`}}return Bt.getData=se,Bt}var Is={},Ol;function Uo(){if(Ol)return Is;Ol=1,Object.defineProperty(Is,"__esModule",{value:!0});class e extends Error{constructor(a){super("validation failed"),this.errors=a,this.ajv=this.validation=!0}}return Is.default=e,Is}var Bs={},$l;function un(){if($l)return Bs;$l=1,Object.defineProperty(Bs,"__esModule",{value:!0});const e=cn();class t extends Error{constructor(s,r,n,o){super(o||`can't resolve reference ${n} from id ${r}`),this.missingRef=(0,e.resolveUrl)(s,r,n),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(s,this.missingRef))}}return Bs.default=t,Bs}var et={},Rl;function qo(){if(Rl)return et;Rl=1,Object.defineProperty(et,"__esModule",{value:!0}),et.resolveSchema=et.getCompilingSchema=et.resolveRef=et.compileSchema=et.SchemaEnv=void 0;const e=ge(),t=Uo(),a=ba(),s=cn(),r=ve(),n=dn();class o{constructor(m){var h;this.refs={},this.dynamicAnchors={};let b;typeof m.schema=="object"&&(b=m.schema),this.schema=m.schema,this.schemaId=m.schemaId,this.root=m.root||this,this.baseId=(h=m.baseId)!==null&&h!==void 0?h:(0,s.normalizeId)(b?.[m.schemaId||"$id"]),this.schemaPath=m.schemaPath,this.localRefs=m.localRefs,this.meta=m.meta,this.$async=b?.$async,this.refs={}}}et.SchemaEnv=o;function i(y){const m=d.call(this,y);if(m)return m;const h=(0,s.getFullPath)(this.opts.uriResolver,y.root.baseId),{es5:b,lines:w}=this.opts.code,{ownProperties:v}=this.opts,S=new e.CodeGen(this.scope,{es5:b,lines:w,ownProperties:v});let P;y.$async&&(P=S.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const E=S.scopeName("validate");y.validateName=E;const T={gen:S,allErrors:this.opts.allErrors,data:a.default.data,parentData:a.default.parentData,parentDataProperty:a.default.parentDataProperty,dataNames:[a.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:S.scopeValue("schema",this.opts.code.source===!0?{ref:y.schema,code:(0,e.stringify)(y.schema)}:{ref:y.schema}),validateName:E,ValidationError:P,schema:y.schema,schemaEnv:y,rootId:h,baseId:y.baseId||h,schemaPath:e.nil,errSchemaPath:y.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let x;try{this._compilations.add(y),(0,n.validateFunctionCode)(T),S.optimize(this.opts.code.optimize);const O=S.toString();x=`${S.scopeRefs(a.default.scope)}return ${O}`,this.opts.code.process&&(x=this.opts.code.process(x,y));const L=new Function(`${a.default.self}`,`${a.default.scope}`,x)(this,this.scope.get());if(this.scope.value(E,{ref:L}),L.errors=null,L.schema=y.schema,L.schemaEnv=y,y.$async&&(L.$async=!0),this.opts.code.source===!0&&(L.source={validateName:E,validateCode:O,scopeValues:S._values}),this.opts.unevaluated){const{props:U,items:K}=T;L.evaluated={props:U instanceof e.Name?void 0:U,items:K instanceof e.Name?void 0:K,dynamicProps:U instanceof e.Name,dynamicItems:K instanceof e.Name},L.source&&(L.source.evaluated=(0,e.stringify)(L.evaluated))}return y.validate=L,y}catch(O){throw delete y.validate,delete y.validateName,x&&this.logger.error("Error compiling schema, function code:",x),O}finally{this._compilations.delete(y)}}et.compileSchema=i;function l(y,m,h){var b;h=(0,s.resolveUrl)(this.opts.uriResolver,m,h);const w=y.refs[h];if(w)return w;let v=p.call(this,y,h);if(v===void 0){const S=(b=y.localRefs)===null||b===void 0?void 0:b[h],{schemaId:P}=this.opts;S&&(v=new o({schema:S,schemaId:P,root:y,baseId:m}))}if(v!==void 0)return y.refs[h]=c.call(this,v)}et.resolveRef=l;function c(y){return(0,s.inlineRef)(y.schema,this.opts.inlineRefs)?y.schema:y.validate?y:i.call(this,y)}function d(y){for(const m of this._compilations)if(u(m,y))return m}et.getCompilingSchema=d;function u(y,m){return y.schema===m.schema&&y.root===m.root&&y.baseId===m.baseId}function p(y,m){let h;for(;typeof(h=this.refs[m])=="string";)m=h;return h||this.schemas[m]||f.call(this,y,m)}function f(y,m){const h=this.opts.uriResolver.parse(m),b=(0,s._getFullPath)(this.opts.uriResolver,h);let w=(0,s.getFullPath)(this.opts.uriResolver,y.baseId,void 0);if(Object.keys(y.schema).length>0&&b===w)return _.call(this,h,y);const v=(0,s.normalizeId)(b),S=this.refs[v]||this.schemas[v];if(typeof S=="string"){const P=f.call(this,y,S);return typeof P?.schema!="object"?void 0:_.call(this,h,P)}if(typeof S?.schema=="object"){if(S.validate||i.call(this,S),v===(0,s.normalizeId)(m)){const{schema:P}=S,{schemaId:E}=this.opts,T=P[E];return T&&(w=(0,s.resolveUrl)(this.opts.uriResolver,w,T)),new o({schema:P,schemaId:E,root:y,baseId:w})}return _.call(this,h,S)}}et.resolveSchema=f;const g=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function _(y,{baseId:m,schema:h,root:b}){var w;if(((w=y.fragment)===null||w===void 0?void 0:w[0])!=="/")return;for(const P of y.fragment.slice(1).split("/")){if(typeof h=="boolean")return;const E=h[(0,r.unescapeFragment)(P)];if(E===void 0)return;h=E;const T=typeof h=="object"&&h[this.opts.schemaId];!g.has(P)&&T&&(m=(0,s.resolveUrl)(this.opts.uriResolver,m,T))}let v;if(typeof h!="boolean"&&h.$ref&&!(0,r.schemaHasRulesButRef)(h,this.RULES)){const P=(0,s.resolveUrl)(this.opts.uriResolver,m,h.$ref);v=f.call(this,b,P)}const{schemaId:S}=this.opts;if(v=v||new o({schema:h,schemaId:S,root:b,baseId:m}),v.schema!==v.root.schema)return v}return et}const iy="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",ly="Meta-schema for $data reference (JSON AnySchema extension proposal)",cy="object",dy=["$data"],uy={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},py=!1,fy={$id:iy,description:ly,type:cy,required:dy,properties:uy,additionalProperties:py};var Fs={},es={exports:{}},Kn,Ml;function Au(){if(Ml)return Kn;Ml=1;const e=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),t=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function a(p){let f="",g=0,_=0;for(_=0;_<p.length;_++)if(g=p[_].charCodeAt(0),g!==48){if(!(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102))return"";f+=p[_];break}for(_+=1;_<p.length;_++){if(g=p[_].charCodeAt(0),!(g>=48&&g<=57||g>=65&&g<=70||g>=97&&g<=102))return"";f+=p[_]}return f}const s=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function r(p){return p.length=0,!0}function n(p,f,g){if(p.length){const _=a(p);if(_!=="")f.push(_);else return g.error=!0,!1;p.length=0}return!0}function o(p){let f=0;const g={error:!1,address:"",zone:""},_=[],y=[];let m=!1,h=!1,b=n;for(let w=0;w<p.length;w++){const v=p[w];if(!(v==="["||v==="]"))if(v===":"){if(m===!0&&(h=!0),!b(y,_,g))break;if(++f>7){g.error=!0;break}w>0&&p[w-1]===":"&&(m=!0),_.push(":");continue}else if(v==="%"){if(!b(y,_,g))break;b=r}else{y.push(v);continue}}return y.length&&(b===r?g.zone=y.join(""):h?_.push(y.join("")):_.push(a(y))),g.address=_.join(""),g}function i(p){if(l(p,":")<2)return{host:p,isIPV6:!1};const f=o(p);if(f.error)return{host:p,isIPV6:!1};{let g=f.address,_=f.address;return f.zone&&(g+="%"+f.zone,_+="%25"+f.zone),{host:g,isIPV6:!0,escapedHost:_}}}function l(p,f){let g=0;for(let _=0;_<p.length;_++)p[_]===f&&g++;return g}function c(p){let f=p;const g=[];let _=-1,y=0;for(;y=f.length;){if(y===1){if(f===".")break;if(f==="/"){g.push("/");break}else{g.push(f);break}}else if(y===2){if(f[0]==="."){if(f[1]===".")break;if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&(f[1]==="."||f[1]==="/")){g.push("/");break}}else if(y===3&&f==="/.."){g.length!==0&&g.pop(),g.push("/");break}if(f[0]==="."){if(f[1]==="."){if(f[2]==="/"){f=f.slice(3);continue}}else if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&f[1]==="."){if(f[2]==="/"){f=f.slice(2);continue}else if(f[2]==="."&&f[3]==="/"){f=f.slice(3),g.length!==0&&g.pop();continue}}if((_=f.indexOf("/",1))===-1){g.push(f);break}else g.push(f.slice(0,_)),f=f.slice(_)}return g.join("")}function d(p,f){const g=f!==!0?escape:unescape;return p.scheme!==void 0&&(p.scheme=g(p.scheme)),p.userinfo!==void 0&&(p.userinfo=g(p.userinfo)),p.host!==void 0&&(p.host=g(p.host)),p.path!==void 0&&(p.path=g(p.path)),p.query!==void 0&&(p.query=g(p.query)),p.fragment!==void 0&&(p.fragment=g(p.fragment)),p}function u(p){const f=[];if(p.userinfo!==void 0&&(f.push(p.userinfo),f.push("@")),p.host!==void 0){let g=unescape(p.host);if(!t(g)){const _=i(g);_.isIPV6===!0?g=`[${_.escapedHost}]`:g=p.host}f.push(g)}return(typeof p.port=="number"||typeof p.port=="string")&&(f.push(":"),f.push(String(p.port))),f.length?f.join(""):void 0}return Kn={nonSimpleDomain:s,recomposeAuthority:u,normalizeComponentEncoding:d,removeDotSegments:c,isIPv4:t,isUUID:e,normalizeIPv6:i,stringArrayToHexStripped:a},Kn}var Yn,Ll;function hy(){if(Ll)return Yn;Ll=1;const{isUUID:e}=Au(),t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,a=["http","https","ws","wss","urn","urn:uuid"];function s(v){return a.indexOf(v)!==-1}function r(v){return v.secure===!0?!0:v.secure===!1?!1:v.scheme?v.scheme.length===3&&(v.scheme[0]==="w"||v.scheme[0]==="W")&&(v.scheme[1]==="s"||v.scheme[1]==="S")&&(v.scheme[2]==="s"||v.scheme[2]==="S"):!1}function n(v){return v.host||(v.error=v.error||"HTTP URIs must have a host."),v}function o(v){const S=String(v.scheme).toLowerCase()==="https";return(v.port===(S?443:80)||v.port==="")&&(v.port=void 0),v.path||(v.path="/"),v}function i(v){return v.secure=r(v),v.resourceName=(v.path||"/")+(v.query?"?"+v.query:""),v.path=void 0,v.query=void 0,v}function l(v){if((v.port===(r(v)?443:80)||v.port==="")&&(v.port=void 0),typeof v.secure=="boolean"&&(v.scheme=v.secure?"wss":"ws",v.secure=void 0),v.resourceName){const[S,P]=v.resourceName.split("?");v.path=S&&S!=="/"?S:void 0,v.query=P,v.resourceName=void 0}return v.fragment=void 0,v}function c(v,S){if(!v.path)return v.error="URN can not be parsed",v;const P=v.path.match(t);if(P){const E=S.scheme||v.scheme||"urn";v.nid=P[1].toLowerCase(),v.nss=P[2];const T=`${E}:${S.nid||v.nid}`,x=w(T);v.path=void 0,x&&(v=x.parse(v,S))}else v.error=v.error||"URN can not be parsed.";return v}function d(v,S){if(v.nid===void 0)throw new Error("URN without nid cannot be serialized");const P=S.scheme||v.scheme||"urn",E=v.nid.toLowerCase(),T=`${P}:${S.nid||E}`,x=w(T);x&&(v=x.serialize(v,S));const O=v,$=v.nss;return O.path=`${E||S.nid}:${$}`,S.skipEscape=!0,O}function u(v,S){const P=v;return P.uuid=P.nss,P.nss=void 0,!S.tolerant&&(!P.uuid||!e(P.uuid))&&(P.error=P.error||"UUID is not valid."),P}function p(v){const S=v;return S.nss=(v.uuid||"").toLowerCase(),S}const f={scheme:"http",domainHost:!0,parse:n,serialize:o},g={scheme:"https",domainHost:f.domainHost,parse:n,serialize:o},_={scheme:"ws",domainHost:!0,parse:i,serialize:l},y={scheme:"wss",domainHost:_.domainHost,parse:_.parse,serialize:_.serialize},b={http:f,https:g,ws:_,wss:y,urn:{scheme:"urn",parse:c,serialize:d,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:u,serialize:p,skipNormalize:!0}};Object.setPrototypeOf(b,null);function w(v){return v&&(b[v]||b[v.toLowerCase()])||void 0}return Yn={wsIsSecure:r,SCHEMES:b,isValidSchemeName:s,getSchemeHandler:w},Yn}var Nl;function my(){if(Nl)return es.exports;Nl=1;const{normalizeIPv6:e,removeDotSegments:t,recomposeAuthority:a,normalizeComponentEncoding:s,isIPv4:r,nonSimpleDomain:n}=Au(),{SCHEMES:o,getSchemeHandler:i}=hy();function l(y,m){return typeof y=="string"?y=p(g(y,m),m):typeof y=="object"&&(y=g(p(y,m),m)),y}function c(y,m,h){const b=h?Object.assign({scheme:"null"},h):{scheme:"null"},w=d(g(y,b),g(m,b),b,!0);return b.skipEscape=!0,p(w,b)}function d(y,m,h,b){const w={};return b||(y=g(p(y,h),h),m=g(p(m,h),h)),h=h||{},!h.tolerant&&m.scheme?(w.scheme=m.scheme,w.userinfo=m.userinfo,w.host=m.host,w.port=m.port,w.path=t(m.path||""),w.query=m.query):(m.userinfo!==void 0||m.host!==void 0||m.port!==void 0?(w.userinfo=m.userinfo,w.host=m.host,w.port=m.port,w.path=t(m.path||""),w.query=m.query):(m.path?(m.path[0]==="/"?w.path=t(m.path):((y.userinfo!==void 0||y.host!==void 0||y.port!==void 0)&&!y.path?w.path="/"+m.path:y.path?w.path=y.path.slice(0,y.path.lastIndexOf("/")+1)+m.path:w.path=m.path,w.path=t(w.path)),w.query=m.query):(w.path=y.path,m.query!==void 0?w.query=m.query:w.query=y.query),w.userinfo=y.userinfo,w.host=y.host,w.port=y.port),w.scheme=y.scheme),w.fragment=m.fragment,w}function u(y,m,h){return typeof y=="string"?(y=unescape(y),y=p(s(g(y,h),!0),{...h,skipEscape:!0})):typeof y=="object"&&(y=p(s(y,!0),{...h,skipEscape:!0})),typeof m=="string"?(m=unescape(m),m=p(s(g(m,h),!0),{...h,skipEscape:!0})):typeof m=="object"&&(m=p(s(m,!0),{...h,skipEscape:!0})),y.toLowerCase()===m.toLowerCase()}function p(y,m){const h={host:y.host,scheme:y.scheme,userinfo:y.userinfo,port:y.port,path:y.path,query:y.query,nid:y.nid,nss:y.nss,uuid:y.uuid,fragment:y.fragment,reference:y.reference,resourceName:y.resourceName,secure:y.secure,error:""},b=Object.assign({},m),w=[],v=i(b.scheme||h.scheme);v&&v.serialize&&v.serialize(h,b),h.path!==void 0&&(b.skipEscape?h.path=unescape(h.path):(h.path=escape(h.path),h.scheme!==void 0&&(h.path=h.path.split("%3A").join(":")))),b.reference!=="suffix"&&h.scheme&&w.push(h.scheme,":");const S=a(h);if(S!==void 0&&(b.reference!=="suffix"&&w.push("//"),w.push(S),h.path&&h.path[0]!=="/"&&w.push("/")),h.path!==void 0){let P=h.path;!b.absolutePath&&(!v||!v.absolutePath)&&(P=t(P)),S===void 0&&P[0]==="/"&&P[1]==="/"&&(P="/%2F"+P.slice(2)),w.push(P)}return h.query!==void 0&&w.push("?",h.query),h.fragment!==void 0&&w.push("#",h.fragment),w.join("")}const f=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function g(y,m){const h=Object.assign({},m),b={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0};let w=!1;h.reference==="suffix"&&(h.scheme?y=h.scheme+":"+y:y="//"+y);const v=y.match(f);if(v){if(b.scheme=v[1],b.userinfo=v[3],b.host=v[4],b.port=parseInt(v[5],10),b.path=v[6]||"",b.query=v[7],b.fragment=v[8],isNaN(b.port)&&(b.port=v[5]),b.host)if(r(b.host)===!1){const E=e(b.host);b.host=E.host.toLowerCase(),w=E.isIPV6}else w=!0;b.scheme===void 0&&b.userinfo===void 0&&b.host===void 0&&b.port===void 0&&b.query===void 0&&!b.path?b.reference="same-document":b.scheme===void 0?b.reference="relative":b.fragment===void 0?b.reference="absolute":b.reference="uri",h.reference&&h.reference!=="suffix"&&h.reference!==b.reference&&(b.error=b.error||"URI is not a "+h.reference+" reference.");const S=i(h.scheme||b.scheme);if(!h.unicodeSupport&&(!S||!S.unicodeSupport)&&b.host&&(h.domainHost||S&&S.domainHost)&&w===!1&&n(b.host))try{b.host=URL.domainToASCII(b.host.toLowerCase())}catch(P){b.error=b.error||"Host's domain name can not be converted to ASCII: "+P}(!S||S&&!S.skipNormalize)&&(y.indexOf("%")!==-1&&(b.scheme!==void 0&&(b.scheme=unescape(b.scheme)),b.host!==void 0&&(b.host=unescape(b.host))),b.path&&(b.path=escape(unescape(b.path))),b.fragment&&(b.fragment=encodeURI(decodeURIComponent(b.fragment)))),S&&S.parse&&S.parse(b,h)}else b.error=b.error||"URI can not be parsed.";return b}const _={SCHEMES:o,normalize:l,resolve:c,resolveComponent:d,equal:u,serialize:p,parse:g};return es.exports=_,es.exports.default=_,es.exports.fastUri=_,es.exports}var Dl;function gy(){if(Dl)return Fs;Dl=1,Object.defineProperty(Fs,"__esModule",{value:!0});const e=my();return e.code='require("ajv/dist/runtime/uri").default',Fs.default=e,Fs}var Il;function by(){return Il||(Il=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=dn();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var a=ge();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return a._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return a.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return a.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return a.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return a.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return a.CodeGen}});const s=Uo(),r=un(),n=Eu(),o=qo(),i=ge(),l=cn(),c=Hr(),d=ve(),u=fy,p=gy(),f=(j,I)=>new RegExp(j,I);f.code="new RegExp";const g=["removeAdditional","useDefaults","coerceTypes"],_=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),y={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},m={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},h=200;function b(j){var I,H,z,A,R,M,N,F,V,se,B,k,C,D,q,Q,ee,ie,W,te,Z,le,ne,de,ue;const fe=j.strict,we=(I=j.code)===null||I===void 0?void 0:I.optimize,be=we===!0||we===void 0?1:we||0,De=(z=(H=j.code)===null||H===void 0?void 0:H.regExp)!==null&&z!==void 0?z:f,Be=(A=j.uriResolver)!==null&&A!==void 0?A:p.default;return{strictSchema:(M=(R=j.strictSchema)!==null&&R!==void 0?R:fe)!==null&&M!==void 0?M:!0,strictNumbers:(F=(N=j.strictNumbers)!==null&&N!==void 0?N:fe)!==null&&F!==void 0?F:!0,strictTypes:(se=(V=j.strictTypes)!==null&&V!==void 0?V:fe)!==null&&se!==void 0?se:"log",strictTuples:(k=(B=j.strictTuples)!==null&&B!==void 0?B:fe)!==null&&k!==void 0?k:"log",strictRequired:(D=(C=j.strictRequired)!==null&&C!==void 0?C:fe)!==null&&D!==void 0?D:!1,code:j.code?{...j.code,optimize:be,regExp:De}:{optimize:be,regExp:De},loopRequired:(q=j.loopRequired)!==null&&q!==void 0?q:h,loopEnum:(Q=j.loopEnum)!==null&&Q!==void 0?Q:h,meta:(ee=j.meta)!==null&&ee!==void 0?ee:!0,messages:(ie=j.messages)!==null&&ie!==void 0?ie:!0,inlineRefs:(W=j.inlineRefs)!==null&&W!==void 0?W:!0,schemaId:(te=j.schemaId)!==null&&te!==void 0?te:"$id",addUsedSchema:(Z=j.addUsedSchema)!==null&&Z!==void 0?Z:!0,validateSchema:(le=j.validateSchema)!==null&&le!==void 0?le:!0,validateFormats:(ne=j.validateFormats)!==null&&ne!==void 0?ne:!0,unicodeRegExp:(de=j.unicodeRegExp)!==null&&de!==void 0?de:!0,int32range:(ue=j.int32range)!==null&&ue!==void 0?ue:!0,uriResolver:Be}}class w{constructor(I={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,I=this.opts={...I,...b(I)};const{es5:H,lines:z}=this.opts.code;this.scope=new i.ValueScope({scope:{},prefixes:_,es5:H,lines:z}),this.logger=$(I.logger);const A=I.validateFormats;I.validateFormats=!1,this.RULES=(0,n.getRules)(),v.call(this,y,I,"NOT SUPPORTED"),v.call(this,m,I,"DEPRECATED","warn"),this._metaOpts=x.call(this),I.formats&&E.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),I.keywords&&T.call(this,I.keywords),typeof I.meta=="object"&&this.addMetaSchema(I.meta),P.call(this),I.validateFormats=A}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:I,meta:H,schemaId:z}=this.opts;let A=u;z==="id"&&(A={...u},A.id=A.$id,delete A.$id),H&&I&&this.addMetaSchema(A,A[z],!1)}defaultMeta(){const{meta:I,schemaId:H}=this.opts;return this.opts.defaultMeta=typeof I=="object"?I[H]||I:void 0}validate(I,H){let z;if(typeof I=="string"){if(z=this.getSchema(I),!z)throw new Error(`no schema with key or ref "${I}"`)}else z=this.compile(I);const A=z(H);return"$async"in z||(this.errors=z.errors),A}compile(I,H){const z=this._addSchema(I,H);return z.validate||this._compileSchemaEnv(z)}compileAsync(I,H){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:z}=this.opts;return A.call(this,I,H);async function A(se,B){await R.call(this,se.$schema);const k=this._addSchema(se,B);return k.validate||M.call(this,k)}async function R(se){se&&!this.getSchema(se)&&await A.call(this,{$ref:se},!0)}async function M(se){try{return this._compileSchemaEnv(se)}catch(B){if(!(B instanceof r.default))throw B;return N.call(this,B),await F.call(this,B.missingSchema),M.call(this,se)}}function N({missingSchema:se,missingRef:B}){if(this.refs[se])throw new Error(`AnySchema ${se} is loaded but ${B} cannot be resolved`)}async function F(se){const B=await V.call(this,se);this.refs[se]||await R.call(this,B.$schema),this.refs[se]||this.addSchema(B,se,H)}async function V(se){const B=this._loading[se];if(B)return B;try{return await(this._loading[se]=z(se))}finally{delete this._loading[se]}}}addSchema(I,H,z,A=this.opts.validateSchema){if(Array.isArray(I)){for(const M of I)this.addSchema(M,void 0,z,A);return this}let R;if(typeof I=="object"){const{schemaId:M}=this.opts;if(R=I[M],R!==void 0&&typeof R!="string")throw new Error(`schema ${M} must be string`)}return H=(0,l.normalizeId)(H||R),this._checkUnique(H),this.schemas[H]=this._addSchema(I,z,H,A,!0),this}addMetaSchema(I,H,z=this.opts.validateSchema){return this.addSchema(I,H,!0,z),this}validateSchema(I,H){if(typeof I=="boolean")return!0;let z;if(z=I.$schema,z!==void 0&&typeof z!="string")throw new Error("$schema must be a string");if(z=z||this.opts.defaultMeta||this.defaultMeta(),!z)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const A=this.validate(z,I);if(!A&&H){const R="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(R);else throw new Error(R)}return A}getSchema(I){let H;for(;typeof(H=S.call(this,I))=="string";)I=H;if(H===void 0){const{schemaId:z}=this.opts,A=new o.SchemaEnv({schema:{},schemaId:z});if(H=o.resolveSchema.call(this,A,I),!H)return;this.refs[I]=H}return H.validate||this._compileSchemaEnv(H)}removeSchema(I){if(I instanceof RegExp)return this._removeAllSchemas(this.schemas,I),this._removeAllSchemas(this.refs,I),this;switch(typeof I){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const H=S.call(this,I);return typeof H=="object"&&this._cache.delete(H.schema),delete this.schemas[I],delete this.refs[I],this}case"object":{const H=I;this._cache.delete(H);let z=I[this.opts.schemaId];return z&&(z=(0,l.normalizeId)(z),delete this.schemas[z],delete this.refs[z]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(I){for(const H of I)this.addKeyword(H);return this}addKeyword(I,H){let z;if(typeof I=="string")z=I,typeof H=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),H.keyword=z);else if(typeof I=="object"&&H===void 0){if(H=I,z=H.keyword,Array.isArray(z)&&!z.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(U.call(this,z,H),!H)return(0,d.eachItem)(z,R=>K.call(this,R)),this;J.call(this,H);const A={...H,type:(0,c.getJSONTypes)(H.type),schemaType:(0,c.getJSONTypes)(H.schemaType)};return(0,d.eachItem)(z,A.type.length===0?R=>K.call(this,R,A):R=>A.type.forEach(M=>K.call(this,R,A,M))),this}getKeyword(I){const H=this.RULES.all[I];return typeof H=="object"?H.definition:!!H}removeKeyword(I){const{RULES:H}=this;delete H.keywords[I],delete H.all[I];for(const z of H.rules){const A=z.rules.findIndex(R=>R.keyword===I);A>=0&&z.rules.splice(A,1)}return this}addFormat(I,H){return typeof H=="string"&&(H=new RegExp(H)),this.formats[I]=H,this}errorsText(I=this.errors,{separator:H=", ",dataVar:z="data"}={}){return!I||I.length===0?"No errors":I.map(A=>`${z}${A.instancePath} ${A.message}`).reduce((A,R)=>A+H+R)}$dataMetaSchema(I,H){const z=this.RULES.all;I=JSON.parse(JSON.stringify(I));for(const A of H){const R=A.split("/").slice(1);let M=I;for(const N of R)M=M[N];for(const N in z){const F=z[N];if(typeof F!="object")continue;const{$data:V}=F.definition,se=M[N];V&&se&&(M[N]=Y(se))}}return I}_removeAllSchemas(I,H){for(const z in I){const A=I[z];(!H||H.test(z))&&(typeof A=="string"?delete I[z]:A&&!A.meta&&(this._cache.delete(A.schema),delete I[z]))}}_addSchema(I,H,z,A=this.opts.validateSchema,R=this.opts.addUsedSchema){let M;const{schemaId:N}=this.opts;if(typeof I=="object")M=I[N];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof I!="boolean")throw new Error("schema must be object or boolean")}let F=this._cache.get(I);if(F!==void 0)return F;z=(0,l.normalizeId)(M||z);const V=l.getSchemaRefs.call(this,I,z);return F=new o.SchemaEnv({schema:I,schemaId:N,meta:H,baseId:z,localRefs:V}),this._cache.set(F.schema,F),R&&!z.startsWith("#")&&(z&&this._checkUnique(z),this.refs[z]=F),A&&this.validateSchema(I,!0),F}_checkUnique(I){if(this.schemas[I]||this.refs[I])throw new Error(`schema with key or id "${I}" already exists`)}_compileSchemaEnv(I){if(I.meta?this._compileMetaSchema(I):o.compileSchema.call(this,I),!I.validate)throw new Error("ajv implementation error");return I.validate}_compileMetaSchema(I){const H=this.opts;this.opts=this._metaOpts;try{o.compileSchema.call(this,I)}finally{this.opts=H}}}w.ValidationError=s.default,w.MissingRefError=r.default,e.default=w;function v(j,I,H,z="error"){for(const A in j){const R=A;R in I&&this.logger[z](`${H}: option ${A}. ${j[R]}`)}}function S(j){return j=(0,l.normalizeId)(j),this.schemas[j]||this.refs[j]}function P(){const j=this.opts.schemas;if(j)if(Array.isArray(j))this.addSchema(j);else for(const I in j)this.addSchema(j[I],I)}function E(){for(const j in this.opts.formats){const I=this.opts.formats[j];I&&this.addFormat(j,I)}}function T(j){if(Array.isArray(j)){this.addVocabulary(j);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const I in j){const H=j[I];H.keyword||(H.keyword=I),this.addKeyword(H)}}function x(){const j={...this.opts};for(const I of g)delete j[I];return j}const O={log(){},warn(){},error(){}};function $(j){if(j===!1)return O;if(j===void 0)return console;if(j.log&&j.warn&&j.error)return j;throw new Error("logger must implement log, warn and error methods")}const L=/^[a-z_$][a-z0-9_$:-]*$/i;function U(j,I){const{RULES:H}=this;if((0,d.eachItem)(j,z=>{if(H.keywords[z])throw new Error(`Keyword ${z} is already defined`);if(!L.test(z))throw new Error(`Keyword ${z} has invalid name`)}),!!I&&I.$data&&!("code"in I||"validate"in I))throw new Error('$data keyword must have "code" or "validate" function')}function K(j,I,H){var z;const A=I?.post;if(H&&A)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:R}=this;let M=A?R.post:R.rules.find(({type:F})=>F===H);if(M||(M={type:H,rules:[]},R.rules.push(M)),R.keywords[j]=!0,!I)return;const N={keyword:j,definition:{...I,type:(0,c.getJSONTypes)(I.type),schemaType:(0,c.getJSONTypes)(I.schemaType)}};I.before?re.call(this,M,N,I.before):M.rules.push(N),R.all[j]=N,(z=I.implements)===null||z===void 0||z.forEach(F=>this.addKeyword(F))}function re(j,I,H){const z=j.rules.findIndex(A=>A.keyword===H);z>=0?j.rules.splice(z,0,I):(j.rules.push(I),this.logger.warn(`rule ${H} is not defined`))}function J(j){let{metaSchema:I}=j;I!==void 0&&(j.$data&&this.opts.$data&&(I=Y(I)),j.validateSchema=this.compile(I,!0))}const G={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function Y(j){return{anyOf:[j,G]}}})(zn)),zn}var zs={},js={},Hs={},Bl;function _y(){if(Bl)return Hs;Bl=1,Object.defineProperty(Hs,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return Hs.default=e,Hs}var ta={},Fl;function yy(){if(Fl)return ta;Fl=1,Object.defineProperty(ta,"__esModule",{value:!0}),ta.callRef=ta.getValidate=void 0;const e=un(),t=vt(),a=ge(),s=ba(),r=qo(),n=ve(),o={keyword:"$ref",schemaType:"string",code(c){const{gen:d,schema:u,it:p}=c,{baseId:f,schemaEnv:g,validateName:_,opts:y,self:m}=p,{root:h}=g;if((u==="#"||u==="#/")&&f===h.baseId)return w();const b=r.resolveRef.call(m,h,f,u);if(b===void 0)throw new e.default(p.opts.uriResolver,f,u);if(b instanceof r.SchemaEnv)return v(b);return S(b);function w(){if(g===h)return l(c,_,g,g.$async);const P=d.scopeValue("root",{ref:h});return l(c,(0,a._)`${P}.validate`,h,h.$async)}function v(P){const E=i(c,P);l(c,E,P,P.$async)}function S(P){const E=d.scopeValue("schema",y.code.source===!0?{ref:P,code:(0,a.stringify)(P)}:{ref:P}),T=d.name("valid"),x=c.subschema({schema:P,dataTypes:[],schemaPath:a.nil,topSchemaRef:E,errSchemaPath:u},T);c.mergeEvaluated(x),c.ok(T)}}};function i(c,d){const{gen:u}=c;return d.validate?u.scopeValue("validate",{ref:d.validate}):(0,a._)`${u.scopeValue("wrapper",{ref:d})}.validate`}ta.getValidate=i;function l(c,d,u,p){const{gen:f,it:g}=c,{allErrors:_,schemaEnv:y,opts:m}=g,h=m.passContext?s.default.this:a.nil;p?b():w();function b(){if(!y.$async)throw new Error("async schema referenced by sync schema");const P=f.let("valid");f.try(()=>{f.code((0,a._)`await ${(0,t.callValidateCode)(c,d,h)}`),S(d),_||f.assign(P,!0)},E=>{f.if((0,a._)`!(${E} instanceof ${g.ValidationError})`,()=>f.throw(E)),v(E),_||f.assign(P,!1)}),c.ok(P)}function w(){c.result((0,t.callValidateCode)(c,d,h),()=>S(d),()=>v(d))}function v(P){const E=(0,a._)`${P}.errors`;f.assign(s.default.vErrors,(0,a._)`${s.default.vErrors} === null ? ${E} : ${s.default.vErrors}.concat(${E})`),f.assign(s.default.errors,(0,a._)`${s.default.vErrors}.length`)}function S(P){var E;if(!g.opts.unevaluated)return;const T=(E=u?.validate)===null||E===void 0?void 0:E.evaluated;if(g.props!==!0)if(T&&!T.dynamicProps)T.props!==void 0&&(g.props=n.mergeEvaluated.props(f,T.props,g.props));else{const x=f.var("props",(0,a._)`${P}.evaluated.props`);g.props=n.mergeEvaluated.props(f,x,g.props,a.Name)}if(g.items!==!0)if(T&&!T.dynamicItems)T.items!==void 0&&(g.items=n.mergeEvaluated.items(f,T.items,g.items));else{const x=f.var("items",(0,a._)`${P}.evaluated.items`);g.items=n.mergeEvaluated.items(f,x,g.items,a.Name)}}}return ta.callRef=l,ta.default=o,ta}var zl;function vy(){if(zl)return js;zl=1,Object.defineProperty(js,"__esModule",{value:!0});const e=_y(),t=yy(),a=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return js.default=a,js}var Us={},qs={},jl;function wy(){if(jl)return qs;jl=1,Object.defineProperty(qs,"__esModule",{value:!0});const e=ge(),t=e.operators,a={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},s={message:({keyword:n,schemaCode:o})=>(0,e.str)`must be ${a[n].okStr} ${o}`,params:({keyword:n,schemaCode:o})=>(0,e._)`{comparison: ${a[n].okStr}, limit: ${o}}`},r={keyword:Object.keys(a),type:"number",schemaType:"number",$data:!0,error:s,code(n){const{keyword:o,data:i,schemaCode:l}=n;n.fail$data((0,e._)`${i} ${a[o].fail} ${l} || isNaN(${i})`)}};return qs.default=r,qs}var Gs={},Hl;function Ty(){if(Hl)return Gs;Hl=1,Object.defineProperty(Gs,"__esModule",{value:!0});const e=ge(),a={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:s})=>(0,e.str)`must be multiple of ${s}`,params:({schemaCode:s})=>(0,e._)`{multipleOf: ${s}}`},code(s){const{gen:r,data:n,schemaCode:o,it:i}=s,l=i.opts.multipleOfPrecision,c=r.let("res"),d=l?(0,e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${l}`:(0,e._)`${c} !== parseInt(${c})`;s.fail$data((0,e._)`(${o} === 0 || (${c} = ${n}/${o}, ${d}))`)}};return Gs.default=a,Gs}var Vs={},Ks={},Ul;function Sy(){if(Ul)return Ks;Ul=1,Object.defineProperty(Ks,"__esModule",{value:!0});function e(t){const a=t.length;let s=0,r=0,n;for(;r<a;)s++,n=t.charCodeAt(r++),n>=55296&&n<=56319&&r<a&&(n=t.charCodeAt(r),(n&64512)===56320&&r++);return s}return Ks.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',Ks}var ql;function xy(){if(ql)return Vs;ql=1,Object.defineProperty(Vs,"__esModule",{value:!0});const e=ge(),t=ve(),a=Sy(),r={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:n,schemaCode:o}){const i=n==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${i} than ${o} characters`},params:({schemaCode:n})=>(0,e._)`{limit: ${n}}`},code(n){const{keyword:o,data:i,schemaCode:l,it:c}=n,d=o==="maxLength"?e.operators.GT:e.operators.LT,u=c.opts.unicode===!1?(0,e._)`${i}.length`:(0,e._)`${(0,t.useFunc)(n.gen,a.default)}(${i})`;n.fail$data((0,e._)`${u} ${d} ${l}`)}};return Vs.default=r,Vs}var Ys={},Gl;function Ey(){if(Gl)return Ys;Gl=1,Object.defineProperty(Ys,"__esModule",{value:!0});const e=vt(),t=ve(),a=ge(),r={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:n})=>(0,a.str)`must match pattern "${n}"`,params:({schemaCode:n})=>(0,a._)`{pattern: ${n}}`},code(n){const{gen:o,data:i,$data:l,schema:c,schemaCode:d,it:u}=n,p=u.opts.unicodeRegExp?"u":"";if(l){const{regExp:f}=u.opts.code,g=f.code==="new RegExp"?(0,a._)`new RegExp`:(0,t.useFunc)(o,f),_=o.let("valid");o.try(()=>o.assign(_,(0,a._)`${g}(${d}, ${p}).test(${i})`),()=>o.assign(_,!1)),n.fail$data((0,a._)`!${_}`)}else{const f=(0,e.usePattern)(n,c);n.fail$data((0,a._)`!${f}.test(${i})`)}}};return Ys.default=r,Ys}var Ws={},Vl;function ky(){if(Vl)return Ws;Vl=1,Object.defineProperty(Ws,"__esModule",{value:!0});const e=ge(),a={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:s,schemaCode:r}){const n=s==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${r} properties`},params:({schemaCode:s})=>(0,e._)`{limit: ${s}}`},code(s){const{keyword:r,data:n,schemaCode:o}=s,i=r==="maxProperties"?e.operators.GT:e.operators.LT;s.fail$data((0,e._)`Object.keys(${n}).length ${i} ${o}`)}};return Ws.default=a,Ws}var Js={},Kl;function Py(){if(Kl)return Js;Kl=1,Object.defineProperty(Js,"__esModule",{value:!0});const e=vt(),t=ge(),a=ve(),r={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:n}})=>(0,t.str)`must have required property '${n}'`,params:({params:{missingProperty:n}})=>(0,t._)`{missingProperty: ${n}}`},code(n){const{gen:o,schema:i,schemaCode:l,data:c,$data:d,it:u}=n,{opts:p}=u;if(!d&&i.length===0)return;const f=i.length>=p.loopRequired;if(u.allErrors?g():_(),p.strictRequired){const h=n.parentSchema.properties,{definedProperties:b}=n.it;for(const w of i)if(h?.[w]===void 0&&!b.has(w)){const v=u.schemaEnv.baseId+u.errSchemaPath,S=`required property "${w}" is not defined at "${v}" (strictRequired)`;(0,a.checkStrictMode)(u,S,u.opts.strictRequired)}}function g(){if(f||d)n.block$data(t.nil,y);else for(const h of i)(0,e.checkReportMissingProp)(n,h)}function _(){const h=o.let("missing");if(f||d){const b=o.let("valid",!0);n.block$data(b,()=>m(h,b)),n.ok(b)}else o.if((0,e.checkMissingProp)(n,i,h)),(0,e.reportMissingProp)(n,h),o.else()}function y(){o.forOf("prop",l,h=>{n.setParams({missingProperty:h}),o.if((0,e.noPropertyInData)(o,c,h,p.ownProperties),()=>n.error())})}function m(h,b){n.setParams({missingProperty:h}),o.forOf(h,l,()=>{o.assign(b,(0,e.propertyInData)(o,c,h,p.ownProperties)),o.if((0,t.not)(b),()=>{n.error(),o.break()})},t.nil)}}};return Js.default=r,Js}var Xs={},Yl;function Ay(){if(Yl)return Xs;Yl=1,Object.defineProperty(Xs,"__esModule",{value:!0});const e=ge(),a={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:s,schemaCode:r}){const n=s==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${r} items`},params:({schemaCode:s})=>(0,e._)`{limit: ${s}}`},code(s){const{keyword:r,data:n,schemaCode:o}=s,i=r==="maxItems"?e.operators.GT:e.operators.LT;s.fail$data((0,e._)`${n}.length ${i} ${o}`)}};return Xs.default=a,Xs}var Qs={},Zs={},Wl;function Go(){if(Wl)return Zs;Wl=1,Object.defineProperty(Zs,"__esModule",{value:!0});const e=Pu();return e.code='require("ajv/dist/runtime/equal").default',Zs.default=e,Zs}var Jl;function Cy(){if(Jl)return Qs;Jl=1,Object.defineProperty(Qs,"__esModule",{value:!0});const e=Hr(),t=ge(),a=ve(),s=Go(),n={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i:o,j:i}})=>(0,t.str)`must NOT have duplicate items (items ## ${i} and ${o} are identical)`,params:({params:{i:o,j:i}})=>(0,t._)`{i: ${o}, j: ${i}}`},code(o){const{gen:i,data:l,$data:c,schema:d,parentSchema:u,schemaCode:p,it:f}=o;if(!c&&!d)return;const g=i.let("valid"),_=u.items?(0,e.getSchemaTypes)(u.items):[];o.block$data(g,y,(0,t._)`${p} === false`),o.ok(g);function y(){const w=i.let("i",(0,t._)`${l}.length`),v=i.let("j");o.setParams({i:w,j:v}),i.assign(g,!0),i.if((0,t._)`${w} > 1`,()=>(m()?h:b)(w,v))}function m(){return _.length>0&&!_.some(w=>w==="object"||w==="array")}function h(w,v){const S=i.name("item"),P=(0,e.checkDataTypes)(_,S,f.opts.strictNumbers,e.DataType.Wrong),E=i.const("indices",(0,t._)`{}`);i.for((0,t._)`;${w}--;`,()=>{i.let(S,(0,t._)`${l}[${w}]`),i.if(P,(0,t._)`continue`),_.length>1&&i.if((0,t._)`typeof ${S} == "string"`,(0,t._)`${S} += "_"`),i.if((0,t._)`typeof ${E}[${S}] == "number"`,()=>{i.assign(v,(0,t._)`${E}[${S}]`),o.error(),i.assign(g,!1).break()}).code((0,t._)`${E}[${S}] = ${w}`)})}function b(w,v){const S=(0,a.useFunc)(i,s.default),P=i.name("outer");i.label(P).for((0,t._)`;${w}--;`,()=>i.for((0,t._)`${v} = ${w}; ${v}--;`,()=>i.if((0,t._)`${S}(${l}[${w}], ${l}[${v}])`,()=>{o.error(),i.assign(g,!1).break(P)})))}}};return Qs.default=n,Qs}var er={},Xl;function Oy(){if(Xl)return er;Xl=1,Object.defineProperty(er,"__esModule",{value:!0});const e=ge(),t=ve(),a=Go(),r={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:n})=>(0,e._)`{allowedValue: ${n}}`},code(n){const{gen:o,data:i,$data:l,schemaCode:c,schema:d}=n;l||d&&typeof d=="object"?n.fail$data((0,e._)`!${(0,t.useFunc)(o,a.default)}(${i}, ${c})`):n.fail((0,e._)`${d} !== ${i}`)}};return er.default=r,er}var tr={},Ql;function $y(){if(Ql)return tr;Ql=1,Object.defineProperty(tr,"__esModule",{value:!0});const e=ge(),t=ve(),a=Go(),r={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:n})=>(0,e._)`{allowedValues: ${n}}`},code(n){const{gen:o,data:i,$data:l,schema:c,schemaCode:d,it:u}=n;if(!l&&c.length===0)throw new Error("enum must have non-empty array");const p=c.length>=u.opts.loopEnum;let f;const g=()=>f??(f=(0,t.useFunc)(o,a.default));let _;if(p||l)_=o.let("valid"),n.block$data(_,y);else{if(!Array.isArray(c))throw new Error("ajv implementation error");const h=o.const("vSchema",d);_=(0,e.or)(...c.map((b,w)=>m(h,w)))}n.pass(_);function y(){o.assign(_,!1),o.forOf("v",d,h=>o.if((0,e._)`${g()}(${i}, ${h})`,()=>o.assign(_,!0).break()))}function m(h,b){const w=c[b];return typeof w=="object"&&w!==null?(0,e._)`${g()}(${i}, ${h}[${b}])`:(0,e._)`${i} === ${w}`}}};return tr.default=r,tr}var Zl;function Ry(){if(Zl)return Us;Zl=1,Object.defineProperty(Us,"__esModule",{value:!0});const e=wy(),t=Ty(),a=xy(),s=Ey(),r=ky(),n=Py(),o=Ay(),i=Cy(),l=Oy(),c=$y(),d=[e.default,t.default,a.default,s.default,r.default,n.default,o.default,i.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},l.default,c.default];return Us.default=d,Us}var ar={},Ia={},ec;function Cu(){if(ec)return Ia;ec=1,Object.defineProperty(Ia,"__esModule",{value:!0}),Ia.validateAdditionalItems=void 0;const e=ge(),t=ve(),s={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:n}})=>(0,e.str)`must NOT have more than ${n} items`,params:({params:{len:n}})=>(0,e._)`{limit: ${n}}`},code(n){const{parentSchema:o,it:i}=n,{items:l}=o;if(!Array.isArray(l)){(0,t.checkStrictMode)(i,'"additionalItems" is ignored when "items" is not an array of schemas');return}r(n,l)}};function r(n,o){const{gen:i,schema:l,data:c,keyword:d,it:u}=n;u.items=!0;const p=i.const("len",(0,e._)`${c}.length`);if(l===!1)n.setParams({len:o.length}),n.pass((0,e._)`${p} <= ${o.length}`);else if(typeof l=="object"&&!(0,t.alwaysValidSchema)(u,l)){const g=i.var("valid",(0,e._)`${p} <= ${o.length}`);i.if((0,e.not)(g),()=>f(g)),n.ok(g)}function f(g){i.forRange("i",o.length,p,_=>{n.subschema({keyword:d,dataProp:_,dataPropType:t.Type.Num},g),u.allErrors||i.if((0,e.not)(g),()=>i.break())})}}return Ia.validateAdditionalItems=r,Ia.default=s,Ia}var sr={},Ba={},tc;function Ou(){if(tc)return Ba;tc=1,Object.defineProperty(Ba,"__esModule",{value:!0}),Ba.validateTuple=void 0;const e=ge(),t=ve(),a=vt(),s={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(n){const{schema:o,it:i}=n;if(Array.isArray(o))return r(n,"additionalItems",o);i.items=!0,!(0,t.alwaysValidSchema)(i,o)&&n.ok((0,a.validateArray)(n))}};function r(n,o,i=n.schema){const{gen:l,parentSchema:c,data:d,keyword:u,it:p}=n;_(c),p.opts.unevaluated&&i.length&&p.items!==!0&&(p.items=t.mergeEvaluated.items(l,i.length,p.items));const f=l.name("valid"),g=l.const("len",(0,e._)`${d}.length`);i.forEach((y,m)=>{(0,t.alwaysValidSchema)(p,y)||(l.if((0,e._)`${g} > ${m}`,()=>n.subschema({keyword:u,schemaProp:m,dataProp:m},f)),n.ok(f))});function _(y){const{opts:m,errSchemaPath:h}=p,b=i.length,w=b===y.minItems&&(b===y.maxItems||y[o]===!1);if(m.strictTuples&&!w){const v=`"${u}" is ${b}-tuple, but minItems or maxItems/${o} are not specified or different at path "${h}"`;(0,t.checkStrictMode)(p,v,m.strictTuples)}}}return Ba.validateTuple=r,Ba.default=s,Ba}var ac;function My(){if(ac)return sr;ac=1,Object.defineProperty(sr,"__esModule",{value:!0});const e=Ou(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:a=>(0,e.validateTuple)(a,"items")};return sr.default=t,sr}var rr={},sc;function Ly(){if(sc)return rr;sc=1,Object.defineProperty(rr,"__esModule",{value:!0});const e=ge(),t=ve(),a=vt(),s=Cu(),n={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:o}})=>(0,e.str)`must NOT have more than ${o} items`,params:({params:{len:o}})=>(0,e._)`{limit: ${o}}`},code(o){const{schema:i,parentSchema:l,it:c}=o,{prefixItems:d}=l;c.items=!0,!(0,t.alwaysValidSchema)(c,i)&&(d?(0,s.validateAdditionalItems)(o,d):o.ok((0,a.validateArray)(o)))}};return rr.default=n,rr}var nr={},rc;function Ny(){if(rc)return nr;rc=1,Object.defineProperty(nr,"__esModule",{value:!0});const e=ge(),t=ve(),s={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:r,max:n}})=>n===void 0?(0,e.str)`must contain at least ${r} valid item(s)`:(0,e.str)`must contain at least ${r} and no more than ${n} valid item(s)`,params:({params:{min:r,max:n}})=>n===void 0?(0,e._)`{minContains: ${r}}`:(0,e._)`{minContains: ${r}, maxContains: ${n}}`},code(r){const{gen:n,schema:o,parentSchema:i,data:l,it:c}=r;let d,u;const{minContains:p,maxContains:f}=i;c.opts.next?(d=p===void 0?1:p,u=f):d=1;const g=n.const("len",(0,e._)`${l}.length`);if(r.setParams({min:d,max:u}),u===void 0&&d===0){(0,t.checkStrictMode)(c,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(u!==void 0&&d>u){(0,t.checkStrictMode)(c,'"minContains" > "maxContains" is always invalid'),r.fail();return}if((0,t.alwaysValidSchema)(c,o)){let b=(0,e._)`${g} >= ${d}`;u!==void 0&&(b=(0,e._)`${b} && ${g} <= ${u}`),r.pass(b);return}c.items=!0;const _=n.name("valid");u===void 0&&d===1?m(_,()=>n.if(_,()=>n.break())):d===0?(n.let(_,!0),u!==void 0&&n.if((0,e._)`${l}.length > 0`,y)):(n.let(_,!1),y()),r.result(_,()=>r.reset());function y(){const b=n.name("_valid"),w=n.let("count",0);m(b,()=>n.if(b,()=>h(w)))}function m(b,w){n.forRange("i",0,g,v=>{r.subschema({keyword:"contains",dataProp:v,dataPropType:t.Type.Num,compositeRule:!0},b),w()})}function h(b){n.code((0,e._)`${b}++`),u===void 0?n.if((0,e._)`${b} >= ${d}`,()=>n.assign(_,!0).break()):(n.if((0,e._)`${b} > ${u}`,()=>n.assign(_,!1).break()),d===1?n.assign(_,!0):n.if((0,e._)`${b} >= ${d}`,()=>n.assign(_,!0)))}}};return nr.default=s,nr}var Wn={},nc;function Dy(){return nc||(nc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=ge(),a=ve(),s=vt();e.error={message:({params:{property:l,depsCount:c,deps:d}})=>{const u=c===1?"property":"properties";return(0,t.str)`must have ${u} ${d} when property ${l} is present`},params:({params:{property:l,depsCount:c,deps:d,missingProperty:u}})=>(0,t._)`{property: ${l},
    missingProperty: ${u},
    depsCount: ${c},
    deps: ${d}}`};const r={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(l){const[c,d]=n(l);o(l,c),i(l,d)}};function n({schema:l}){const c={},d={};for(const u in l){if(u==="__proto__")continue;const p=Array.isArray(l[u])?c:d;p[u]=l[u]}return[c,d]}function o(l,c=l.schema){const{gen:d,data:u,it:p}=l;if(Object.keys(c).length===0)return;const f=d.let("missing");for(const g in c){const _=c[g];if(_.length===0)continue;const y=(0,s.propertyInData)(d,u,g,p.opts.ownProperties);l.setParams({property:g,depsCount:_.length,deps:_.join(", ")}),p.allErrors?d.if(y,()=>{for(const m of _)(0,s.checkReportMissingProp)(l,m)}):(d.if((0,t._)`${y} && (${(0,s.checkMissingProp)(l,_,f)})`),(0,s.reportMissingProp)(l,f),d.else())}}e.validatePropertyDeps=o;function i(l,c=l.schema){const{gen:d,data:u,keyword:p,it:f}=l,g=d.name("valid");for(const _ in c)(0,a.alwaysValidSchema)(f,c[_])||(d.if((0,s.propertyInData)(d,u,_,f.opts.ownProperties),()=>{const y=l.subschema({keyword:p,schemaProp:_},g);l.mergeValidEvaluated(y,g)},()=>d.var(g,!0)),l.ok(g))}e.validateSchemaDeps=i,e.default=r})(Wn)),Wn}var or={},oc;function Iy(){if(oc)return or;oc=1,Object.defineProperty(or,"__esModule",{value:!0});const e=ge(),t=ve(),s={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:r})=>(0,e._)`{propertyName: ${r.propertyName}}`},code(r){const{gen:n,schema:o,data:i,it:l}=r;if((0,t.alwaysValidSchema)(l,o))return;const c=n.name("valid");n.forIn("key",i,d=>{r.setParams({propertyName:d}),r.subschema({keyword:"propertyNames",data:d,dataTypes:["string"],propertyName:d,compositeRule:!0},c),n.if((0,e.not)(c),()=>{r.error(!0),l.allErrors||n.break()})}),r.ok(c)}};return or.default=s,or}var ir={},ic;function $u(){if(ic)return ir;ic=1,Object.defineProperty(ir,"__esModule",{value:!0});const e=vt(),t=ge(),a=ba(),s=ve(),n={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:o})=>(0,t._)`{additionalProperty: ${o.additionalProperty}}`},code(o){const{gen:i,schema:l,parentSchema:c,data:d,errsCount:u,it:p}=o;if(!u)throw new Error("ajv implementation error");const{allErrors:f,opts:g}=p;if(p.props=!0,g.removeAdditional!=="all"&&(0,s.alwaysValidSchema)(p,l))return;const _=(0,e.allSchemaProperties)(c.properties),y=(0,e.allSchemaProperties)(c.patternProperties);m(),o.ok((0,t._)`${u} === ${a.default.errors}`);function m(){i.forIn("key",d,S=>{!_.length&&!y.length?w(S):i.if(h(S),()=>w(S))})}function h(S){let P;if(_.length>8){const E=(0,s.schemaRefOrVal)(p,c.properties,"properties");P=(0,e.isOwnProperty)(i,E,S)}else _.length?P=(0,t.or)(..._.map(E=>(0,t._)`${S} === ${E}`)):P=t.nil;return y.length&&(P=(0,t.or)(P,...y.map(E=>(0,t._)`${(0,e.usePattern)(o,E)}.test(${S})`))),(0,t.not)(P)}function b(S){i.code((0,t._)`delete ${d}[${S}]`)}function w(S){if(g.removeAdditional==="all"||g.removeAdditional&&l===!1){b(S);return}if(l===!1){o.setParams({additionalProperty:S}),o.error(),f||i.break();return}if(typeof l=="object"&&!(0,s.alwaysValidSchema)(p,l)){const P=i.name("valid");g.removeAdditional==="failing"?(v(S,P,!1),i.if((0,t.not)(P),()=>{o.reset(),b(S)})):(v(S,P),f||i.if((0,t.not)(P),()=>i.break()))}}function v(S,P,E){const T={keyword:"additionalProperties",dataProp:S,dataPropType:s.Type.Str};E===!1&&Object.assign(T,{compositeRule:!0,createErrors:!1,allErrors:!1}),o.subschema(T,P)}}};return ir.default=n,ir}var lr={},lc;function By(){if(lc)return lr;lc=1,Object.defineProperty(lr,"__esModule",{value:!0});const e=dn(),t=vt(),a=ve(),s=$u(),r={keyword:"properties",type:"object",schemaType:"object",code(n){const{gen:o,schema:i,parentSchema:l,data:c,it:d}=n;d.opts.removeAdditional==="all"&&l.additionalProperties===void 0&&s.default.code(new e.KeywordCxt(d,s.default,"additionalProperties"));const u=(0,t.allSchemaProperties)(i);for(const y of u)d.definedProperties.add(y);d.opts.unevaluated&&u.length&&d.props!==!0&&(d.props=a.mergeEvaluated.props(o,(0,a.toHash)(u),d.props));const p=u.filter(y=>!(0,a.alwaysValidSchema)(d,i[y]));if(p.length===0)return;const f=o.name("valid");for(const y of p)g(y)?_(y):(o.if((0,t.propertyInData)(o,c,y,d.opts.ownProperties)),_(y),d.allErrors||o.else().var(f,!0),o.endIf()),n.it.definedProperties.add(y),n.ok(f);function g(y){return d.opts.useDefaults&&!d.compositeRule&&i[y].default!==void 0}function _(y){n.subschema({keyword:"properties",schemaProp:y,dataProp:y},f)}}};return lr.default=r,lr}var cr={},cc;function Fy(){if(cc)return cr;cc=1,Object.defineProperty(cr,"__esModule",{value:!0});const e=vt(),t=ge(),a=ve(),s=ve(),r={keyword:"patternProperties",type:"object",schemaType:"object",code(n){const{gen:o,schema:i,data:l,parentSchema:c,it:d}=n,{opts:u}=d,p=(0,e.allSchemaProperties)(i),f=p.filter(w=>(0,a.alwaysValidSchema)(d,i[w]));if(p.length===0||f.length===p.length&&(!d.opts.unevaluated||d.props===!0))return;const g=u.strictSchema&&!u.allowMatchingProperties&&c.properties,_=o.name("valid");d.props!==!0&&!(d.props instanceof t.Name)&&(d.props=(0,s.evaluatedPropsToName)(o,d.props));const{props:y}=d;m();function m(){for(const w of p)g&&h(w),d.allErrors?b(w):(o.var(_,!0),b(w),o.if(_))}function h(w){for(const v in g)new RegExp(w).test(v)&&(0,a.checkStrictMode)(d,`property ${v} matches pattern ${w} (use allowMatchingProperties)`)}function b(w){o.forIn("key",l,v=>{o.if((0,t._)`${(0,e.usePattern)(n,w)}.test(${v})`,()=>{const S=f.includes(w);S||n.subschema({keyword:"patternProperties",schemaProp:w,dataProp:v,dataPropType:s.Type.Str},_),d.opts.unevaluated&&y!==!0?o.assign((0,t._)`${y}[${v}]`,!0):!S&&!d.allErrors&&o.if((0,t.not)(_),()=>o.break())})})}}};return cr.default=r,cr}var dr={},dc;function zy(){if(dc)return dr;dc=1,Object.defineProperty(dr,"__esModule",{value:!0});const e=ve(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(a){const{gen:s,schema:r,it:n}=a;if((0,e.alwaysValidSchema)(n,r)){a.fail();return}const o=s.name("valid");a.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},o),a.failResult(o,()=>a.reset(),()=>a.error())},error:{message:"must NOT be valid"}};return dr.default=t,dr}var ur={},uc;function jy(){if(uc)return ur;uc=1,Object.defineProperty(ur,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:vt().validateUnion,error:{message:"must match a schema in anyOf"}};return ur.default=t,ur}var pr={},pc;function Hy(){if(pc)return pr;pc=1,Object.defineProperty(pr,"__esModule",{value:!0});const e=ge(),t=ve(),s={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:r})=>(0,e._)`{passingSchemas: ${r.passing}}`},code(r){const{gen:n,schema:o,parentSchema:i,it:l}=r;if(!Array.isArray(o))throw new Error("ajv implementation error");if(l.opts.discriminator&&i.discriminator)return;const c=o,d=n.let("valid",!1),u=n.let("passing",null),p=n.name("_valid");r.setParams({passing:u}),n.block(f),r.result(d,()=>r.reset(),()=>r.error(!0));function f(){c.forEach((g,_)=>{let y;(0,t.alwaysValidSchema)(l,g)?n.var(p,!0):y=r.subschema({keyword:"oneOf",schemaProp:_,compositeRule:!0},p),_>0&&n.if((0,e._)`${p} && ${d}`).assign(d,!1).assign(u,(0,e._)`[${u}, ${_}]`).else(),n.if(p,()=>{n.assign(d,!0),n.assign(u,_),y&&r.mergeEvaluated(y,e.Name)})})}}};return pr.default=s,pr}var fr={},fc;function Uy(){if(fc)return fr;fc=1,Object.defineProperty(fr,"__esModule",{value:!0});const e=ve(),t={keyword:"allOf",schemaType:"array",code(a){const{gen:s,schema:r,it:n}=a;if(!Array.isArray(r))throw new Error("ajv implementation error");const o=s.name("valid");r.forEach((i,l)=>{if((0,e.alwaysValidSchema)(n,i))return;const c=a.subschema({keyword:"allOf",schemaProp:l},o);a.ok(o),a.mergeEvaluated(c)})}};return fr.default=t,fr}var hr={},hc;function qy(){if(hc)return hr;hc=1,Object.defineProperty(hr,"__esModule",{value:!0});const e=ge(),t=ve(),s={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:n})=>(0,e.str)`must match "${n.ifClause}" schema`,params:({params:n})=>(0,e._)`{failingKeyword: ${n.ifClause}}`},code(n){const{gen:o,parentSchema:i,it:l}=n;i.then===void 0&&i.else===void 0&&(0,t.checkStrictMode)(l,'"if" without "then" and "else" is ignored');const c=r(l,"then"),d=r(l,"else");if(!c&&!d)return;const u=o.let("valid",!0),p=o.name("_valid");if(f(),n.reset(),c&&d){const _=o.let("ifClause");n.setParams({ifClause:_}),o.if(p,g("then",_),g("else",_))}else c?o.if(p,g("then")):o.if((0,e.not)(p),g("else"));n.pass(u,()=>n.error(!0));function f(){const _=n.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},p);n.mergeEvaluated(_)}function g(_,y){return()=>{const m=n.subschema({keyword:_},p);o.assign(u,p),n.mergeValidEvaluated(m,u),y?o.assign(y,(0,e._)`${_}`):n.setParams({ifClause:_})}}}};function r(n,o){const i=n.schema[o];return i!==void 0&&!(0,t.alwaysValidSchema)(n,i)}return hr.default=s,hr}var mr={},mc;function Gy(){if(mc)return mr;mc=1,Object.defineProperty(mr,"__esModule",{value:!0});const e=ve(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:a,parentSchema:s,it:r}){s.if===void 0&&(0,e.checkStrictMode)(r,`"${a}" without "if" is ignored`)}};return mr.default=t,mr}var gc;function Vy(){if(gc)return ar;gc=1,Object.defineProperty(ar,"__esModule",{value:!0});const e=Cu(),t=My(),a=Ou(),s=Ly(),r=Ny(),n=Dy(),o=Iy(),i=$u(),l=By(),c=Fy(),d=zy(),u=jy(),p=Hy(),f=Uy(),g=qy(),_=Gy();function y(m=!1){const h=[d.default,u.default,p.default,f.default,g.default,_.default,o.default,i.default,n.default,l.default,c.default];return m?h.push(t.default,s.default):h.push(e.default,a.default),h.push(r.default),h}return ar.default=y,ar}var gr={},br={},bc;function Ky(){if(bc)return br;bc=1,Object.defineProperty(br,"__esModule",{value:!0});const e=ge(),a={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:s})=>(0,e.str)`must match format "${s}"`,params:({schemaCode:s})=>(0,e._)`{format: ${s}}`},code(s,r){const{gen:n,data:o,$data:i,schema:l,schemaCode:c,it:d}=s,{opts:u,errSchemaPath:p,schemaEnv:f,self:g}=d;if(!u.validateFormats)return;i?_():y();function _(){const m=n.scopeValue("formats",{ref:g.formats,code:u.code.formats}),h=n.const("fDef",(0,e._)`${m}[${c}]`),b=n.let("fType"),w=n.let("format");n.if((0,e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`,()=>n.assign(b,(0,e._)`${h}.type || "string"`).assign(w,(0,e._)`${h}.validate`),()=>n.assign(b,(0,e._)`"string"`).assign(w,h)),s.fail$data((0,e.or)(v(),S()));function v(){return u.strictSchema===!1?e.nil:(0,e._)`${c} && !${w}`}function S(){const P=f.$async?(0,e._)`(${h}.async ? await ${w}(${o}) : ${w}(${o}))`:(0,e._)`${w}(${o})`,E=(0,e._)`(typeof ${w} == "function" ? ${P} : ${w}.test(${o}))`;return(0,e._)`${w} && ${w} !== true && ${b} === ${r} && !${E}`}}function y(){const m=g.formats[l];if(!m){v();return}if(m===!0)return;const[h,b,w]=S(m);h===r&&s.pass(P());function v(){if(u.strictSchema===!1){g.logger.warn(E());return}throw new Error(E());function E(){return`unknown format "${l}" ignored in schema at path "${p}"`}}function S(E){const T=E instanceof RegExp?(0,e.regexpCode)(E):u.code.formats?(0,e._)`${u.code.formats}${(0,e.getProperty)(l)}`:void 0,x=n.scopeValue("formats",{key:l,ref:E,code:T});return typeof E=="object"&&!(E instanceof RegExp)?[E.type||"string",E.validate,(0,e._)`${x}.validate`]:["string",E,x]}function P(){if(typeof m=="object"&&!(m instanceof RegExp)&&m.async){if(!f.$async)throw new Error("async format in sync schema");return(0,e._)`await ${w}(${o})`}return typeof b=="function"?(0,e._)`${w}(${o})`:(0,e._)`${w}.test(${o})`}}}};return br.default=a,br}var _c;function Yy(){if(_c)return gr;_c=1,Object.defineProperty(gr,"__esModule",{value:!0});const t=[Ky().default];return gr.default=t,gr}var xa={},yc;function Wy(){return yc||(yc=1,Object.defineProperty(xa,"__esModule",{value:!0}),xa.contentVocabulary=xa.metadataVocabulary=void 0,xa.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],xa.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),xa}var vc;function Jy(){if(vc)return zs;vc=1,Object.defineProperty(zs,"__esModule",{value:!0});const e=vy(),t=Ry(),a=Vy(),s=Yy(),r=Wy(),n=[e.default,t.default,(0,a.default)(),s.default,r.metadataVocabulary,r.contentVocabulary];return zs.default=n,zs}var _r={},ts={},wc;function Xy(){if(wc)return ts;wc=1,Object.defineProperty(ts,"__esModule",{value:!0}),ts.DiscrError=void 0;var e;return(function(t){t.Tag="tag",t.Mapping="mapping"})(e||(ts.DiscrError=e={})),ts}var Tc;function Qy(){if(Tc)return _r;Tc=1,Object.defineProperty(_r,"__esModule",{value:!0});const e=ge(),t=Xy(),a=qo(),s=un(),r=ve(),o={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:i,tagName:l}})=>i===t.DiscrError.Tag?`tag "${l}" must be string`:`value of tag "${l}" must be in oneOf`,params:({params:{discrError:i,tag:l,tagName:c}})=>(0,e._)`{error: ${i}, tag: ${c}, tagValue: ${l}}`},code(i){const{gen:l,data:c,schema:d,parentSchema:u,it:p}=i,{oneOf:f}=u;if(!p.opts.discriminator)throw new Error("discriminator: requires discriminator option");const g=d.propertyName;if(typeof g!="string")throw new Error("discriminator: requires propertyName");if(d.mapping)throw new Error("discriminator: mapping is not supported");if(!f)throw new Error("discriminator: requires oneOf keyword");const _=l.let("valid",!1),y=l.const("tag",(0,e._)`${c}${(0,e.getProperty)(g)}`);l.if((0,e._)`typeof ${y} == "string"`,()=>m(),()=>i.error(!1,{discrError:t.DiscrError.Tag,tag:y,tagName:g})),i.ok(_);function m(){const w=b();l.if(!1);for(const v in w)l.elseIf((0,e._)`${y} === ${v}`),l.assign(_,h(w[v]));l.else(),i.error(!1,{discrError:t.DiscrError.Mapping,tag:y,tagName:g}),l.endIf()}function h(w){const v=l.name("valid"),S=i.subschema({keyword:"oneOf",schemaProp:w},v);return i.mergeEvaluated(S,e.Name),v}function b(){var w;const v={},S=E(u);let P=!0;for(let O=0;O<f.length;O++){let $=f[O];if($?.$ref&&!(0,r.schemaHasRulesButRef)($,p.self.RULES)){const U=$.$ref;if($=a.resolveRef.call(p.self,p.schemaEnv.root,p.baseId,U),$ instanceof a.SchemaEnv&&($=$.schema),$===void 0)throw new s.default(p.opts.uriResolver,p.baseId,U)}const L=(w=$?.properties)===null||w===void 0?void 0:w[g];if(typeof L!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${g}"`);P=P&&(S||E($)),T(L,O)}if(!P)throw new Error(`discriminator: "${g}" must be required`);return v;function E({required:O}){return Array.isArray(O)&&O.includes(g)}function T(O,$){if(O.const)x(O.const,$);else if(O.enum)for(const L of O.enum)x(L,$);else throw new Error(`discriminator: "properties/${g}" must have "const" or "enum"`)}function x(O,$){if(typeof O!="string"||O in v)throw new Error(`discriminator: "${g}" values must be unique strings`);v[O]=$}}}};return _r.default=o,_r}const Zy="http://json-schema.org/draft-07/schema#",e0="http://json-schema.org/draft-07/schema#",t0="Core schema meta-schema",a0={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},s0=["object","boolean"],r0={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},n0={$schema:Zy,$id:e0,title:t0,definitions:a0,type:s0,properties:r0,default:!0};var Sc;function o0(){return Sc||(Sc=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const a=by(),s=Jy(),r=Qy(),n=n0,o=["/properties"],i="http://json-schema.org/draft-07/schema";class l extends a.default{_addVocabularies(){super._addVocabularies(),s.default.forEach(g=>this.addVocabulary(g)),this.opts.discriminator&&this.addKeyword(r.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const g=this.opts.$data?this.$dataMetaSchema(n,o):n;this.addMetaSchema(g,i,!1),this.refs["http://json-schema.org/schema"]=i}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(i)?i:void 0)}}t.Ajv=l,e.exports=t=l,e.exports.Ajv=l,Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var c=dn();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return c.KeywordCxt}});var d=ge();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return d._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return d.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return d.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return d.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return d.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return d.CodeGen}});var u=Uo();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return u.default}});var p=un();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return p.default}})})(Ns,Ns.exports)),Ns.exports}var i0=o0();const l0=cu(i0),c0={$id:"gameModeRules",type:"object",required:["betTypes","requiredBetTypes","maxBetsPerType","maxBetsTotal","minBetsTotal","stakeRule","stakeMin","allowPartialSubmit","allowBetModification","lockOnFirstBet","oneBetPerMatchPerType"],properties:{betTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},minItems:1,description:"Allowed bet types for this game mode"},requiredBetTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},description:"Bet types the user MUST place. Empty = no requirement."},maxBetsPerType:{type:"integer",minimum:-1,description:"Max bets per bet type per match. -1 = unlimited."},maxBetsTotal:{type:"integer",minimum:-1,description:"Max total bets across all matches. -1 = unlimited."},minBetsTotal:{type:"integer",minimum:0,description:"Min total bets required before submission. 0 = none."},stakeRule:{type:"string",enum:["FREE","SPEND_ALL","MIN_MAX"],description:"FREE = any amount | SPEND_ALL = must use entire TD$ | MIN_MAX = within range"},stakeMin:{type:["number","null"],minimum:0,description:"Min stake per bet. null = no minimum."},stakeMax:{type:["number","null"],minimum:0,description:"Max stake per bet. null = no maximum."},allowPartialSubmit:{type:"boolean",description:"Can user submit with incomplete lineup?"},allowBetModification:{type:"boolean",description:"Can user change/remove bets after placing?"},lockOnFirstBet:{type:"boolean",description:"Does placing first bet lock user into the tournament?"},oneBetPerMatchPerType:{type:"boolean",description:"Restrict to one bet per match per bet type?"}},additionalProperties:!1},d0={$id:"gameModeScoring",type:"object",required:["method","rankBy","penalizeMissing"],properties:{method:{type:"string",enum:["PAYOUT_SUM","PROFIT","WIN_RATE","CUSTOM"],description:"Primary scoring method"},rankBy:{type:"array",items:{type:"string"},minItems:1,description:"Ordered tiebreaker fields"},bonuses:{type:"array",items:{type:"object",properties:{condition:{type:"string"},points:{type:"number"},label:{type:"string"}}},description:"Bonus scoring rules"},penalizeMissing:{type:"boolean",description:"Penalize users who did not place all required bets?"}},additionalProperties:!1},Ru=new l0({allErrors:!0}),xc=Ru.compile(c0),Ec=Ru.compile(d0),u0=e=>{const t=[];xc(e.rules)||xc.errors.forEach(n=>{t.push(`rules${n.instancePath}: ${n.message}`)}),Ec(e.scoring)||Ec.errors.forEach(n=>{t.push(`scoring${n.instancePath}: ${n.message}`)});const r=e.rules;return r.requiredBetTypes.forEach(n=>{r.betTypes.includes(n)||t.push(`requiredBetTypes contains "${n}" which is not in betTypes`)}),r.stakeRule==="MIN_MAX"&&r.stakeMin==null&&r.stakeMax==null&&t.push("stakeRule is MIN_MAX but neither stakeMin nor stakeMax is set"),r.minBetsTotal>0&&r.requiredBetTypes.length>r.minBetsTotal&&t.push(`requiredBetTypes (${r.requiredBetTypes.length}) exceeds minBetsTotal (${r.minBetsTotal})`),{valid:t.length===0,errors:t}},p0=e=>{const t=e.rules,a=e.scoring;return{"mode.id":e.id,"mode.label":e.label,"mode.description":e.description,"rules.betTypes":t.betTypes.join(", "),"rules.requiredBetTypes":t.requiredBetTypes.length>0?t.requiredBetTypes.join(", "):"(none)","rules.maxBetsPerType":t.maxBetsPerType===-1?"Unlimited":String(t.maxBetsPerType),"rules.maxBetsTotal":t.maxBetsTotal===-1?"Unlimited":String(t.maxBetsTotal),"rules.minBetsTotal":String(t.minBetsTotal),"rules.stakeRule":t.stakeRule,"rules.stakeMin":t.stakeMin!=null?String(t.stakeMin):"(none)","rules.stakeMax":t.stakeMax!=null?String(t.stakeMax):"(none)","rules.allowPartialSubmit":String(t.allowPartialSubmit),"rules.allowBetModification":String(t.allowBetModification),"rules.lockOnFirstBet":String(t.lockOnFirstBet),"rules.oneBetPerMatchPerType":String(t.oneBetPerMatchPerType),"scoring.method":a.method,"scoring.rankBy":a.rankBy.join(", "),"scoring.bonuses":a.bonuses.length>0?JSON.stringify(a.bonuses):"(none)","scoring.penalizeMissing":String(a.penalizeMissing),"ui.badge":e.getBadge()?`${e.getBadge().label} (${e.getBadge().color})`:"(none)","ui.emptyStateText":e.getEmptyStateText()}},Ur={DEFAULT:new dl,DEFAULT_FORMAT:new dl,SET_IT_AND_FORGET_IT:new ty},kc=e=>Ur[e]||Ur.DEFAULT,f0=()=>Object.keys(Ur),h0=()=>{const e={};return Object.entries(Ur).forEach(([t,a])=>{e[t]=u0(a)}),e};typeof window<"u"&&(window.GameMode={get:kc,modes:f0,validate:h0,dump:e=>p0(kc(e))});class m0 extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ce.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name","data-active-count","data-td-dollars"]}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}handleLogoClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}handleCreateContestClick(t){t.preventDefault(),ce.publish("WC.APP.HEAD_TOP.CREATE_CONTEST",JSON.stringify({timestamp:Date.now()}))}render(){const t=Ce.isDark,a=this.getAttribute("data-user-name")||"Guest",s=this.getAttribute("data-active-count")||"0",r=parseFloat(this.getAttribute("data-td-dollars")||"0"),n=r>=1e3?`${Math.round(r/100)/10}K`:Math.round(r).toLocaleString();this.shadowRoot.innerHTML=`
      <style>
        ${Qe()}
        ${ga()}

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
    `;const o=this.shadowRoot.querySelector("#logoLink"),i=this.shadowRoot.querySelector("#profileIcon"),l=this.shadowRoot.querySelector("#createContestBtn");o&&o.addEventListener("click",c=>this.handleLogoClick(c)),i&&i.addEventListener("click",c=>this.handleProfileClick(c)),l&&l.addEventListener("click",c=>this.handleCreateContestClick(c))}}customElements.define("bma-app-head-top",m0);class g0 extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ce.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count"]}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&(t==="data-selected-tab"&&(this.selectedTab=s||"head_mid_lobby"),this.render())}handleTabClick(t,a){this.selectedTab=t,this.setAttribute("data-selected-tab",t),ce.publish(a,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=Ce.isDark,a=[{name:"head_mid_lobby",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}];parseInt(this.getAttribute("data-active-count"));const s=0,r=n=>{const o=this.selectedTab===n.name,i=n.name==="head_mid_my";return`
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
        ${Qe()}
        ${ga()}

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
        @media ${fu.mobile} {
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
    `,a.forEach(n=>{const o=this.shadowRoot.querySelector(`[data-tab="${n.name}"]`);o&&(o.addEventListener("click",()=>this.handleTabClick(n.name,n.topic)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleTabClick(n.name,n.topic))}))})}}customElements.define("bma-app-head-mid",g0);class b0 extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ce.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,a,s){if(this.shadowRoot&&a!==s){if(t==="data-selected-chip"){if(this.selectedChip=s||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,a){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),ce.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:a,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(a=>{const s=a.getAttribute("data-chip")===this.selectedChip;a.classList.toggle("chip-selected",s),a.classList.toggle("chip-unselected",!s)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(".head-sports-container"),r=this.shadowRoot?.querySelector("#navPrev"),n=this.shadowRoot?.querySelector("#navNext");if(!t||!a||!s||!r||!n)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),i=o>8,l=t.scrollLeft<=4,c=t.scrollLeft>=o-4;s.classList.toggle("rail-has-overflow",i),t.classList.toggle("has-scroll",i),a.classList.toggle("has-overflow",i),a.classList.toggle("has-left-overflow",i&&!l),a.classList.toggle("has-right-overflow",i&&!c),r.classList.toggle("nav-disabled",!i||l),n.classList.toggle("nav-disabled",!i||c),r.setAttribute("aria-disabled",String(!i||l)),n.setAttribute("aria-disabled",String(!i||c)),r.tabIndex=!i||l?-1:0,n.tabIndex=!i||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!a||!s)return;const r=a.getBoundingClientRect(),n=s.getBoundingClientRect(),o=t.scrollWidth-t.clientWidth;if(n.left>=r.left&&n.right<=r.right)return;const i=12;let l;n.left<r.left?l=t.scrollLeft+(n.left-r.left)-i:l=t.scrollLeft+(n.right-r.right)+i,l=Math.max(0,Math.min(l,o)),!(Math.abs(t.scrollLeft-l)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:l,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const a=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=a-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const a=[...t.querySelectorAll(".sport-chip")];if(!a.length)return;const s=Math.max(0,t.scrollWidth-t.clientWidth);if(s<=8)return;const r=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,n=t.scrollLeft;let o=n,i=Number.POSITIVE_INFINITY;a.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-r,s)),d=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-t.clientWidth+r,s));[c,d].forEach(u=>{const p=Math.abs(u-n);p<i&&(i=p,o=u)})}),!(i<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",s=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=s.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),ce.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const a=()=>{if(!this.isPointerDown)return;const s=Date.now()-this.dragStartTime,r=this.dragDistance>10||this.dragDistance>4&&s>180;this.isPointerDown=!1,t.style.cursor="grab",r&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",a),t.addEventListener("mouseup",a),t.addEventListener("mousemove",s=>{if(!this.isPointerDown)return;s.preventDefault();const n=(s.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(n)),t.scrollLeft=this.dragStartScrollLeft-n}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=Ce.isDark,r=(_e().appMeta?.sports||[]).filter(f=>f.active===!0),n=["NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],o=[...r].sort((f,g)=>{const _=f.title||f.description||"",y=g.title||g.description||"",m=n.indexOf(_),h=n.indexOf(y);return m!==-1&&h!==-1?m-h:m!==-1?-1:h!==-1?1:_.toLowerCase().localeCompare(y.toLowerCase())}),i=o.findIndex(f=>(f.title||f.description)==="NFL");if(i!==-1){const[f]=o.splice(i,1);let g=-1;o.forEach((y,m)=>{String(y.key||"").startsWith("soccer_fifa_world_cup")&&(g=m)});const _=g!==-1?g+1:o.length;o.splice(_,0,f)}const l=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...o],c=f=>{const g=this.selectedChip===f.key,_=f.key==="all";let y="";return _?y='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':y=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`,`
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
        ${Qe()}
        ${ga()}

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
    `,l.forEach(f=>{const g=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const d=this.shadowRoot.querySelector("#navPrev"),u=this.shadowRoot.querySelector("#navNext");d&&d.addEventListener("click",()=>this.scrollToPrev()),u&&u.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const p=this.shadowRoot.querySelector(".chips-container");p&&(p.scrollLeft=0),requestAnimationFrame(()=>{p&&(p.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",b0);class _0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-matches","data-sync-theme"]}connectedCallback(){this._unsub=Ce.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&this.render()}get matches(){const t=this.getAttribute("data-matches");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return nt.find(s=>s.key===t)?.group||"default"}_parseScoreboard(t){const a=t.scoreboard_data;if(!a)return null;try{return typeof a=="string"?JSON.parse(a):a}catch{return null}}_getMatchDisplay(t){const a=this._parseScoreboard(t)||{},s=parseInt(a.home_score||0),r=parseInt(a.away_score||0),n=a.period||0,o=String(a.time_remaining||"").trim(),i=o.toLowerCase(),l=s>0||r>0||n>0,c=String(t.status||"").toUpperCase()==="COMPLETED"||i==="final",d=t.scheduled_at||t.start_time||"";let u=!1;if(d){const h=d.includes("Z")||/[+-]\d{2}:\d{2}$/.test(d),b=new Date(h?d:d+"Z").getTime();isNaN(b)||(u=b<=Date.now())}const f=!c&&(l||o&&i!=="scheduled"&&i!=="final"||u),g=t.home_team_id||t.home_team||"Home",_=t.away_team_id||t.away_team||"Away";if(c)return{homeName:g,awayName:_,homeScore:s,awayScore:r,statusLabel:"FINAL",statusClass:"final",showScores:!0};if(f)return{homeName:g,awayName:_,homeScore:s,awayScore:r,statusLabel:o&&i!=="in progress"?o:"LIVE",statusClass:"live",showScores:!0};const y=t.scheduled_at||t.start_time||t.status_time;let m="UPCOMING";if(y)try{const h=y.includes("Z")||/[+-]\d{2}:\d{2}$/.test(y),b=new Date(h?y:y+"Z");isNaN(b.getTime())||(m=b.toLocaleString(void 0,{weekday:"short",hour:"numeric",minute:"2-digit"}))}catch{}return{homeName:g,awayName:_,homeScore:0,awayScore:0,statusLabel:m,statusClass:"upcoming",showScores:!1}}render(){const t=Date.now(),a=720*60*1e3,s=1440*60*1e3,n=this.matches.map(c=>({match:c,display:this._getMatchDisplay(c)})).filter(c=>c.display!==null).filter(c=>{const d=c.display.statusClass;if(d==="live")return!0;const u=new Date(c.match.scheduled_at||c.match.status_time||0).getTime();return u?d==="final"?t-u<=a:d==="upcoming"?u-t<=s&&u>=t:!1:!1}),o={live:0,final:1,upcoming:2};n.sort((c,d)=>{const u=o[c.display.statusClass]??9,p=o[d.display.statusClass]??9;if(u!==p)return u-p;const f=new Date(c.match.scheduled_at||c.match.status_time||0).getTime(),g=new Date(d.match.scheduled_at||d.match.status_time||0).getTime();return c.display.statusClass==="upcoming"?f-g:g-f});const i=n.slice(0,40);if(i.length===0){this.shadowRoot.innerHTML="";return}const l=i.map(({match:c,display:d})=>{const u=this._sportGroup(c.sport_id),p=f=>d.showScores?`<span class="score-pill__score">${f}</span>`:"";return`
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
                ${Qe()}
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
        `,this.shadowRoot.querySelectorAll(".score-pill").forEach(c=>{c.addEventListener("click",()=>{const d=c.dataset.matchGuid;ce.publish("SCORES.MATCH_CLICK",JSON.stringify({matchGuid:d,timestamp:Date.now()}))})})}_abbr(t){if(!t)return"";const a=String(t);if(a.length<=14)return a;const s=a.split(" ");return s.length>1?s[s.length-1].slice(0,14):a.slice(0,14)}}customElements.define("bma-scores-banner",_0);class y0 extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ce.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count"]}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&(t==="data-selected-item"&&(this.selectedItem=s||"foot_all_sports"),this.render())}handleItemClick(t,a){this.selectedItem=t,this.setAttribute("data-selected-item",t),ce.publish(a,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){Ce.theme;const t=Ce.isDark,a=[{name:"foot_all_sports",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}];parseInt(this.getAttribute("data-active-count"));const s=0,r=n=>{const o=this.selectedItem===n.name,i=n.name==="foot_my_tourneys";return`
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
        ${Qe()}
        ${ga()}

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
        @media ${fu.mobile} {
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
    `,a.forEach(n=>{const o=this.shadowRoot.querySelector(`[data-item="${n.name}"]`);o&&(o.addEventListener("click",()=>this.handleItemClick(n.name,n.topic)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleItemClick(n.name,n.topic))}))})}}customElements.define("bma-app-foot",y0);class v0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Ce.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}_doLogout(){ce.publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()}))}render(){let t="";try{t=_e().appSession?.session_app?.version||""}catch{}this.shadowRoot.innerHTML=`
            <style>
                ${Qe()}
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
        `;const a=this.shadowRoot.querySelector(".foot-logout");a&&a.addEventListener("click",()=>this._doLogout())}}customElements.define("bma-app-foot-branded",v0);class w0 extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,a,s){a!==s&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",a),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const a=t.bet||[];if(a.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const s=a[0],r=s.short_title||"Match Info N/A",o=Object.keys(s).filter(h=>h!=="short_title")[0]||"Unknown Team",i=s[o],l=i.odds||"N/A",c=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),u=parseFloat(i.payout||0).toFixed(2),p=i.reconciled!==!1,f=p&&parseFloat(u)>parseFloat(d),g=p&&parseFloat(u)<=parseFloat(d);let _="";p?f?_="win":g&&(_="loss"):_="unreconciled";const y=t.status_time?Ss.formatDateLocal(t.status_time):"";let m=o;if(c==="spread"&&i.point){const h=parseFloat(i.point)>0?`+${i.point}`:i.point;m=`${o} ${h}`}else c==="total"&&i.point&&(m=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
      <style>
        ${Qe()}
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
    `}}customElements.define("bma-bet-existing",w0);Ts.init();window.BrandManager=Ts;const Pc=`
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Pc)}):document.body.insertAdjacentHTML("beforeend",Pc);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const pn=ph(ey);pn.config.devtools=!1;pn.use(mh());pn.use(zr);pn.mount("#app");(function(){let t=!1;const a=o=>{if(!t)return;const i=o.target;i&&typeof i.closest=="function"&&i.closest("neodigm-sodapop")||o.preventDefault()},s=()=>{const o=t,i=!!document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']");if(t=i,document.body.style.touchAction=i?"none":"",document.documentElement.style.overscrollBehavior=i?"none":"",o&&!i){const l=document.querySelector("bma-app-foot");l&&l.setAttribute("data-selected-item","foot_all_sports");const c=document.querySelector("bma-app-head-mid");c&&c.setAttribute("data-selected-tab","head_mid_lobby")}},r=new MutationObserver(s),n=()=>{r.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]}),document.addEventListener("touchmove",a,{passive:!1,capture:!0}),s()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",n):n()})();document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(a=>{neodigmCarousel.init().nav({id:a.id,nav:"resize"},!1)})},303)})});
