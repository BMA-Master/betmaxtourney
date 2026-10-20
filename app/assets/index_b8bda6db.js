(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerPolicy&&(n.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?n.credentials="include":a.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}})();function yo(e){const t=Object.create(null);for(const r of e.split(","))t[r]=1;return r=>r in t}const Ee={},jr=[],Ct=()=>{},Oc=()=>!1,qa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),_o=e=>e.startsWith("onUpdate:"),Ne=Object.assign,vo=(e,t)=>{const r=e.indexOf(t);r>-1&&e.splice(r,1)},Mu=Object.prototype.hasOwnProperty,Se=(e,t)=>Mu.call(e,t),fe=Array.isArray,Ur=e=>xs(e)==="[object Map]",Ga=e=>xs(e)==="[object Set]",Jo=e=>xs(e)==="[object Date]",he=e=>typeof e=="function",Re=e=>typeof e=="string",Rt=e=>typeof e=="symbol",ke=e=>e!==null&&typeof e=="object",Cc=e=>(ke(e)||he(e))&&he(e.then)&&he(e.catch),$c=Object.prototype.toString,xs=e=>$c.call(e),Lu=e=>xs(e).slice(8,-1),Rc=e=>xs(e)==="[object Object]",wo=e=>Re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,as=yo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Va=e=>{const t=Object.create(null);return(r=>t[r]||(t[r]=e(r)))},Nu=/-\w/g,pt=Va(e=>e.replace(Nu,t=>t.slice(1).toUpperCase())),Iu=/\B([A-Z])/g,fr=Va(e=>e.replace(Iu,"-$1").toLowerCase()),Ka=Va(e=>e.charAt(0).toUpperCase()+e.slice(1)),fn=Va(e=>e?`on${Ka(e)}`:""),lr=(e,t)=>!Object.is(e,t),_a=(e,...t)=>{for(let r=0;r<e.length;r++)e[r](...t)},Mc=(e,t,r,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:r})},Du=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Bu=e=>{const t=Re(e)?Number(e):NaN;return isNaN(t)?e:t};let Xo;const Ya=()=>Xo||(Xo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function To(e){if(fe(e)){const t={};for(let r=0;r<e.length;r++){const s=e[r],a=Re(s)?Uu(s):To(s);if(a)for(const n in a)t[n]=a[n]}return t}else if(Re(e)||ke(e))return e}const Fu=/;(?![^(]*\))/g,zu=/:([^]+)/,ju=/\/\*[^]*?\*\//g;function Uu(e){const t={};return e.replace(ju,"").split(Fu).forEach(r=>{if(r){const s=r.split(zu);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function dr(e){let t="";if(Re(e))t=e;else if(fe(e))for(let r=0;r<e.length;r++){const s=dr(e[r]);s&&(t+=s+" ")}else if(ke(e))for(const r in e)e[r]&&(t+=r+" ");return t.trim()}const Hu="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",qu=yo(Hu);function Lc(e){return!!e||e===""}function Gu(e,t){if(e.length!==t.length)return!1;let r=!0;for(let s=0;r&&s<e.length;s++)r=Wa(e[s],t[s]);return r}function Wa(e,t){if(e===t)return!0;let r=Jo(e),s=Jo(t);if(r||s)return r&&s?e.getTime()===t.getTime():!1;if(r=Rt(e),s=Rt(t),r||s)return e===t;if(r=fe(e),s=fe(t),r||s)return r&&s?Gu(e,t):!1;if(r=ke(e),s=ke(t),r||s){if(!r||!s)return!1;const a=Object.keys(e).length,n=Object.keys(t).length;if(a!==n)return!1;for(const o in e){const i=e.hasOwnProperty(o),l=t.hasOwnProperty(o);if(i&&!l||!i&&l||!Wa(e[o],t[o]))return!1}}return String(e)===String(t)}function Nc(e,t){return e.findIndex(r=>Wa(r,t))}const Ic=e=>!!(e&&e.__v_isRef===!0),Dc=e=>Re(e)?e:e==null?"":fe(e)||ke(e)&&(e.toString===$c||!he(e.toString))?Ic(e)?Dc(e.value):JSON.stringify(e,Bc,2):String(e),Bc=(e,t)=>Ic(t)?Bc(e,t.value):Ur(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((r,[s,a],n)=>(r[hn(s,n)+" =>"]=a,r),{})}:Ga(t)?{[`Set(${t.size})`]:[...t.values()].map(r=>hn(r))}:Rt(t)?hn(t):ke(t)&&!fe(t)&&!Rc(t)?String(t):t,hn=(e,t="")=>{var r;return Rt(e)?`Symbol(${(r=e.description)!=null?r:t})`:e};let ze;class Fc{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ze,!t&&ze&&(this.index=(ze.scopes||(ze.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].pause();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,r;if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].resume();for(t=0,r=this.effects.length;t<r;t++)this.effects[t].resume()}}run(t){if(this._active){const r=ze;try{return ze=this,t()}finally{ze=r}}}on(){++this._on===1&&(this.prevScope=ze,ze=this)}off(){this._on>0&&--this._on===0&&(ze=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let r,s;for(r=0,s=this.effects.length;r<s;r++)this.effects[r].stop();for(this.effects.length=0,r=0,s=this.cleanups.length;r<s;r++)this.cleanups[r]();if(this.cleanups.length=0,this.scopes){for(r=0,s=this.scopes.length;r<s;r++)this.scopes[r].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0}}}function zc(e){return new Fc(e)}function jc(){return ze}function Vu(e,t=!1){ze&&ze.cleanups.push(e)}let Pe;const mn=new WeakSet;class Uc{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ze&&ze.active&&ze.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,mn.has(this)&&(mn.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qc(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Qo(this),Gc(this);const t=Pe,r=gt;Pe=this,gt=!0;try{return this.fn()}finally{Vc(this),Pe=t,gt=r,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Eo(t);this.deps=this.depsTail=void 0,Qo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?mn.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Jn(this)&&this.run()}get dirty(){return Jn(this)}}let Hc=0,ns,os;function qc(e,t=!1){if(e.flags|=8,t){e.next=os,os=e;return}e.next=ns,ns=e}function So(){Hc++}function xo(){if(--Hc>0)return;if(os){let t=os;for(os=void 0;t;){const r=t.next;t.next=void 0,t.flags&=-9,t=r}}let e;for(;ns;){let t=ns;for(ns=void 0;t;){const r=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=r}}if(e)throw e}function Gc(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Vc(e){let t,r=e.depsTail,s=r;for(;s;){const a=s.prevDep;s.version===-1?(s===r&&(r=a),Eo(s),Ku(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=a}e.deps=t,e.depsTail=r}function Jn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Kc(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Kc(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===hs)||(e.globalVersion=hs,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!Jn(e))))return;e.flags|=2;const t=e.dep,r=Pe,s=gt;Pe=e,gt=!0;try{Gc(e);const a=e.fn(e._value);(t.version===0||lr(a,e._value))&&(e.flags|=128,e._value=a,t.version++)}catch(a){throw t.version++,a}finally{Pe=r,gt=s,Vc(e),e.flags&=-3}}function Eo(e,t=!1){const{dep:r,prevSub:s,nextSub:a}=e;if(s&&(s.nextSub=a,e.prevSub=void 0),a&&(a.prevSub=s,e.nextSub=void 0),r.subs===e&&(r.subs=s,!s&&r.computed)){r.computed.flags&=-5;for(let n=r.computed.deps;n;n=n.nextDep)Eo(n,!0)}!t&&!--r.sc&&r.map&&r.map.delete(r.key)}function Ku(e){const{prevDep:t,nextDep:r}=e;t&&(t.nextDep=r,e.prevDep=void 0),r&&(r.prevDep=t,e.nextDep=void 0)}let gt=!0;const Yc=[];function Yt(){Yc.push(gt),gt=!1}function Wt(){const e=Yc.pop();gt=e===void 0?!0:e}function Qo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const r=Pe;Pe=void 0;try{t()}finally{Pe=r}}}let hs=0;class Yu{constructor(t,r){this.sub=t,this.dep=r,this.version=r.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ko{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Pe||!gt||Pe===this.computed)return;let r=this.activeLink;if(r===void 0||r.sub!==Pe)r=this.activeLink=new Yu(Pe,this),Pe.deps?(r.prevDep=Pe.depsTail,Pe.depsTail.nextDep=r,Pe.depsTail=r):Pe.deps=Pe.depsTail=r,Wc(r);else if(r.version===-1&&(r.version=this.version,r.nextDep)){const s=r.nextDep;s.prevDep=r.prevDep,r.prevDep&&(r.prevDep.nextDep=s),r.prevDep=Pe.depsTail,r.nextDep=void 0,Pe.depsTail.nextDep=r,Pe.depsTail=r,Pe.deps===r&&(Pe.deps=s)}return r}trigger(t){this.version++,hs++,this.notify(t)}notify(t){So();try{for(let r=this.subs;r;r=r.prevSub)r.sub.notify()&&r.sub.dep.notify()}finally{xo()}}}function Wc(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)Wc(s)}const r=e.dep.subs;r!==e&&(e.prevSub=r,r&&(r.nextSub=e)),e.dep.subs=e}}const Ea=new WeakMap,Ar=Symbol(""),Xn=Symbol(""),ms=Symbol("");function je(e,t,r){if(gt&&Pe){let s=Ea.get(e);s||Ea.set(e,s=new Map);let a=s.get(r);a||(s.set(r,a=new ko),a.map=s,a.key=r),a.track()}}function Gt(e,t,r,s,a,n){const o=Ea.get(e);if(!o){hs++;return}const i=l=>{l&&l.trigger()};if(So(),t==="clear")o.forEach(i);else{const l=fe(e),c=l&&wo(r);if(l&&r==="length"){const d=Number(s);o.forEach((u,p)=>{(p==="length"||p===ms||!Rt(p)&&p>=d)&&i(u)})}else switch((r!==void 0||o.has(void 0))&&i(o.get(r)),c&&i(o.get(ms)),t){case"add":l?c&&i(o.get("length")):(i(o.get(Ar)),Ur(e)&&i(o.get(Xn)));break;case"delete":l||(i(o.get(Ar)),Ur(e)&&i(o.get(Xn)));break;case"set":Ur(e)&&i(o.get(Ar));break}}xo()}function Wu(e,t){const r=Ea.get(e);return r&&r.get(t)}function Mr(e){const t=_e(e);return t===e?t:(je(t,"iterate",ms),bt(e)?t:t.map(Ve))}function Po(e){return je(e=_e(e),"iterate",ms),e}const Ju={__proto__:null,[Symbol.iterator](){return gn(this,Symbol.iterator,Ve)},concat(...e){return Mr(this).concat(...e.map(t=>fe(t)?Mr(t):t))},entries(){return gn(this,"entries",e=>(e[1]=Ve(e[1]),e))},every(e,t){return Lt(this,"every",e,t,void 0,arguments)},filter(e,t){return Lt(this,"filter",e,t,r=>r.map(Ve),arguments)},find(e,t){return Lt(this,"find",e,t,Ve,arguments)},findIndex(e,t){return Lt(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return Lt(this,"findLast",e,t,Ve,arguments)},findLastIndex(e,t){return Lt(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return Lt(this,"forEach",e,t,void 0,arguments)},includes(...e){return bn(this,"includes",e)},indexOf(...e){return bn(this,"indexOf",e)},join(e){return Mr(this).join(e)},lastIndexOf(...e){return bn(this,"lastIndexOf",e)},map(e,t){return Lt(this,"map",e,t,void 0,arguments)},pop(){return Wr(this,"pop")},push(...e){return Wr(this,"push",e)},reduce(e,...t){return Zo(this,"reduce",e,t)},reduceRight(e,...t){return Zo(this,"reduceRight",e,t)},shift(){return Wr(this,"shift")},some(e,t){return Lt(this,"some",e,t,void 0,arguments)},splice(...e){return Wr(this,"splice",e)},toReversed(){return Mr(this).toReversed()},toSorted(e){return Mr(this).toSorted(e)},toSpliced(...e){return Mr(this).toSpliced(...e)},unshift(...e){return Wr(this,"unshift",e)},values(){return gn(this,"values",Ve)}};function gn(e,t,r){const s=Po(e),a=s[t]();return s!==e&&!bt(e)&&(a._next=a.next,a.next=()=>{const n=a._next();return n.done||(n.value=r(n.value)),n}),a}const Xu=Array.prototype;function Lt(e,t,r,s,a,n){const o=Po(e),i=o!==e&&!bt(e),l=o[t];if(l!==Xu[t]){const u=l.apply(e,n);return i?Ve(u):u}let c=r;o!==e&&(i?c=function(u,p){return r.call(this,Ve(u),p,e)}:r.length>2&&(c=function(u,p){return r.call(this,u,p,e)}));const d=l.call(o,c,s);return i&&a?a(d):d}function Zo(e,t,r,s){const a=Po(e);let n=r;return a!==e&&(bt(e)?r.length>3&&(n=function(o,i,l){return r.call(this,o,i,l,e)}):n=function(o,i,l){return r.call(this,o,Ve(i),l,e)}),a[t](n,...s)}function bn(e,t,r){const s=_e(e);je(s,"iterate",ms);const a=s[t](...r);return(a===-1||a===!1)&&Co(r[0])?(r[0]=_e(r[0]),s[t](...r)):a}function Wr(e,t,r=[]){Yt(),So();const s=_e(e)[t].apply(e,r);return xo(),Wt(),s}const Qu=yo("__proto__,__v_isRef,__isVue"),Jc=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Rt));function Zu(e){Rt(e)||(e=String(e));const t=_e(this);return je(t,"has",e),t.hasOwnProperty(e)}class Xc{constructor(t=!1,r=!1){this._isReadonly=t,this._isShallow=r}get(t,r,s){if(r==="__v_skip")return t.__v_skip;const a=this._isReadonly,n=this._isShallow;if(r==="__v_isReactive")return!a;if(r==="__v_isReadonly")return a;if(r==="__v_isShallow")return n;if(r==="__v_raw")return s===(a?n?cp:td:n?ed:Zc).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const o=fe(t);if(!a){let l;if(o&&(l=Ju[r]))return l;if(r==="hasOwnProperty")return Zu}const i=Reflect.get(t,r,Ce(t)?t:s);if((Rt(r)?Jc.has(r):Qu(r))||(a||je(t,"get",r),n))return i;if(Ce(i)){const l=o&&wo(r)?i:i.value;return a&&ke(l)?Zn(l):l}return ke(i)?a?Zn(i):Kt(i):i}}class Qc extends Xc{constructor(t=!1){super(!1,t)}set(t,r,s,a){let n=t[r];if(!this._isShallow){const l=$r(n);if(!bt(s)&&!$r(s)&&(n=_e(n),s=_e(s)),!fe(t)&&Ce(n)&&!Ce(s))return l||(n.value=s),!0}const o=fe(t)&&wo(r)?Number(r)<t.length:Se(t,r),i=Reflect.set(t,r,s,Ce(t)?t:a);return t===_e(a)&&(o?lr(s,n)&&Gt(t,"set",r,s):Gt(t,"add",r,s)),i}deleteProperty(t,r){const s=Se(t,r);t[r];const a=Reflect.deleteProperty(t,r);return a&&s&&Gt(t,"delete",r,void 0),a}has(t,r){const s=Reflect.has(t,r);return(!Rt(r)||!Jc.has(r))&&je(t,"has",r),s}ownKeys(t){return je(t,"iterate",fe(t)?"length":Ar),Reflect.ownKeys(t)}}class ep extends Xc{constructor(t=!1){super(!0,t)}set(t,r){return!0}deleteProperty(t,r){return!0}}const tp=new Qc,rp=new ep,sp=new Qc(!0);const Qn=e=>e,As=e=>Reflect.getPrototypeOf(e);function ap(e,t,r){return function(...s){const a=this.__v_raw,n=_e(a),o=Ur(n),i=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...s),d=r?Qn:t?eo:Ve;return!t&&je(n,"iterate",l?Xn:Ar),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:i?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Os(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function np(e,t){const r={get(a){const n=this.__v_raw,o=_e(n),i=_e(a);e||(lr(a,i)&&je(o,"get",a),je(o,"get",i));const{has:l}=As(o),c=t?Qn:e?eo:Ve;if(l.call(o,a))return c(n.get(a));if(l.call(o,i))return c(n.get(i));n!==o&&n.get(a)},get size(){const a=this.__v_raw;return!e&&je(_e(a),"iterate",Ar),a.size},has(a){const n=this.__v_raw,o=_e(n),i=_e(a);return e||(lr(a,i)&&je(o,"has",a),je(o,"has",i)),a===i?n.has(a):n.has(a)||n.has(i)},forEach(a,n){const o=this,i=o.__v_raw,l=_e(i),c=t?Qn:e?eo:Ve;return!e&&je(l,"iterate",Ar),i.forEach((d,u)=>a.call(n,c(d),c(u),o))}};return Ne(r,e?{add:Os("add"),set:Os("set"),delete:Os("delete"),clear:Os("clear")}:{add(a){!t&&!bt(a)&&!$r(a)&&(a=_e(a));const n=_e(this);return As(n).has.call(n,a)||(n.add(a),Gt(n,"add",a,a)),this},set(a,n){!t&&!bt(n)&&!$r(n)&&(n=_e(n));const o=_e(this),{has:i,get:l}=As(o);let c=i.call(o,a);c||(a=_e(a),c=i.call(o,a));const d=l.call(o,a);return o.set(a,n),c?lr(n,d)&&Gt(o,"set",a,n):Gt(o,"add",a,n),this},delete(a){const n=_e(this),{has:o,get:i}=As(n);let l=o.call(n,a);l||(a=_e(a),l=o.call(n,a)),i&&i.call(n,a);const c=n.delete(a);return l&&Gt(n,"delete",a,void 0),c},clear(){const a=_e(this),n=a.size!==0,o=a.clear();return n&&Gt(a,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(a=>{r[a]=ap(a,e,t)}),r}function Ao(e,t){const r=np(e,t);return(s,a,n)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?s:Reflect.get(Se(r,a)&&a in s?r:s,a,n)}const op={get:Ao(!1,!1)},ip={get:Ao(!1,!0)},lp={get:Ao(!0,!1)};const Zc=new WeakMap,ed=new WeakMap,td=new WeakMap,cp=new WeakMap;function dp(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function up(e){return e.__v_skip||!Object.isExtensible(e)?0:dp(Lu(e))}function Kt(e){return $r(e)?e:Oo(e,!1,tp,op,Zc)}function rd(e){return Oo(e,!1,sp,ip,ed)}function Zn(e){return Oo(e,!0,rp,lp,td)}function Oo(e,t,r,s,a){if(!ke(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const n=up(e);if(n===0)return e;const o=a.get(e);if(o)return o;const i=new Proxy(e,n===2?s:r);return a.set(e,i),i}function Or(e){return $r(e)?Or(e.__v_raw):!!(e&&e.__v_isReactive)}function $r(e){return!!(e&&e.__v_isReadonly)}function bt(e){return!!(e&&e.__v_isShallow)}function Co(e){return e?!!e.__v_raw:!1}function _e(e){const t=e&&e.__v_raw;return t?_e(t):e}function $o(e){return!Se(e,"__v_skip")&&Object.isExtensible(e)&&Mc(e,"__v_skip",!0),e}const Ve=e=>ke(e)?Kt(e):e,eo=e=>ke(e)?Zn(e):e;function Ce(e){return e?e.__v_isRef===!0:!1}function ot(e){return sd(e,!1)}function pp(e){return sd(e,!0)}function sd(e,t){return Ce(e)?e:new fp(e,t)}class fp{constructor(t,r){this.dep=new ko,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=r?t:_e(t),this._value=r?t:Ve(t),this.__v_isShallow=r}get value(){return this.dep.track(),this._value}set value(t){const r=this._rawValue,s=this.__v_isShallow||bt(t)||$r(t);t=s?t:_e(t),lr(t,r)&&(this._rawValue=t,this._value=s?t:Ve(t),this.dep.trigger())}}function cr(e){return Ce(e)?e.value:e}const hp={get:(e,t,r)=>t==="__v_raw"?e:cr(Reflect.get(e,t,r)),set:(e,t,r,s)=>{const a=e[t];return Ce(a)&&!Ce(r)?(a.value=r,!0):Reflect.set(e,t,r,s)}};function ad(e){return Or(e)?e:new Proxy(e,hp)}function mp(e){const t=fe(e)?new Array(e.length):{};for(const r in e)t[r]=bp(e,r);return t}class gp{constructor(t,r,s){this._object=t,this._key=r,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Wu(_e(this._object),this._key)}}function bp(e,t,r){const s=e[t];return Ce(s)?s:new gp(e,t,r)}class yp{constructor(t,r,s){this.fn=t,this.setter=r,this._value=void 0,this.dep=new ko(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=hs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!r,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Pe!==this)return qc(this,!0),!0}get value(){const t=this.dep.track();return Kc(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function _p(e,t,r=!1){let s,a;return he(e)?s=e:(s=e.get,a=e.set),new yp(s,a,r)}const Cs={},ka=new WeakMap;let xr;function vp(e,t=!1,r=xr){if(r){let s=ka.get(r);s||ka.set(r,s=[]),s.push(e)}}function wp(e,t,r=Ee){const{immediate:s,deep:a,once:n,scheduler:o,augmentJob:i,call:l}=r,c=v=>a?v:bt(v)||a===!1||a===0?Vt(v,1):Vt(v);let d,u,p,f,_=!1,y=!1;if(Ce(e)?(u=()=>e.value,_=bt(e)):Or(e)?(u=()=>c(e),_=!0):fe(e)?(y=!0,_=e.some(v=>Or(v)||bt(v)),u=()=>e.map(v=>{if(Ce(v))return v.value;if(Or(v))return c(v);if(he(v))return l?l(v,2):v()})):he(e)?t?u=l?()=>l(e,2):e:u=()=>{if(p){Yt();try{p()}finally{Wt()}}const v=xr;xr=d;try{return l?l(e,3,[f]):e(f)}finally{xr=v}}:u=Ct,t&&a){const v=u,b=a===!0?1/0:a;u=()=>Vt(v(),b)}const w=jc(),m=()=>{d.stop(),w&&w.active&&vo(w.effects,d)};if(n&&t){const v=t;t=(...b)=>{v(...b),m()}}let h=y?new Array(e.length).fill(Cs):Cs;const g=v=>{if(!(!(d.flags&1)||!d.dirty&&!v))if(t){const b=d.run();if(a||_||(y?b.some((T,P)=>lr(T,h[P])):lr(b,h))){p&&p();const T=xr;xr=d;try{const P=[b,h===Cs?void 0:y&&h[0]===Cs?[]:h,f];h=b,l?l(t,3,P):t(...P)}finally{xr=T}}}else d.run()};return i&&i(g),d=new Uc(u),d.scheduler=o?()=>o(g,!1):g,f=v=>vp(v,!1,d),p=d.onStop=()=>{const v=ka.get(d);if(v){if(l)l(v,4);else for(const b of v)b();ka.delete(d)}},t?s?g(!0):h=d.run():o?o(g.bind(null,!0),!0):d.run(),m.pause=d.pause.bind(d),m.resume=d.resume.bind(d),m.stop=m,m}function Vt(e,t=1/0,r){if(t<=0||!ke(e)||e.__v_skip||(r=r||new Map,(r.get(e)||0)>=t))return e;if(r.set(e,t),t--,Ce(e))Vt(e.value,t,r);else if(fe(e))for(let s=0;s<e.length;s++)Vt(e[s],t,r);else if(Ga(e)||Ur(e))e.forEach(s=>{Vt(s,t,r)});else if(Rc(e)){for(const s in e)Vt(e[s],t,r);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&Vt(e[s],t,r)}return e}function Es(e,t,r,s){try{return s?e(...s):e()}catch(a){Ja(a,t,r)}}function yt(e,t,r,s){if(he(e)){const a=Es(e,t,r,s);return a&&Cc(a)&&a.catch(n=>{Ja(n,t,r)}),a}if(fe(e)){const a=[];for(let n=0;n<e.length;n++)a.push(yt(e[n],t,r,s));return a}}function Ja(e,t,r,s=!0){const a=t?t.vnode:null,{errorHandler:n,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||Ee;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${r}`;for(;i;){const d=i.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,l,c)===!1)return}i=i.parent}if(n){Yt(),Es(n,null,10,[e,l,c]),Wt();return}}Tp(e,r,a,s,o)}function Tp(e,t,r,s=!0,a=!1){if(a)throw e;console.error(e)}const Ke=[];let Et=-1;const Hr=[];let sr=null,Fr=0;const nd=Promise.resolve();let Pa=null;function Ro(e){const t=Pa||nd;return e?t.then(this?e.bind(this):e):t}function Sp(e){let t=Et+1,r=Ke.length;for(;t<r;){const s=t+r>>>1,a=Ke[s],n=gs(a);n<e||n===e&&a.flags&2?t=s+1:r=s}return t}function Mo(e){if(!(e.flags&1)){const t=gs(e),r=Ke[Ke.length-1];!r||!(e.flags&2)&&t>=gs(r)?Ke.push(e):Ke.splice(Sp(t),0,e),e.flags|=1,od()}}function od(){Pa||(Pa=nd.then(ld))}function xp(e){fe(e)?Hr.push(...e):sr&&e.id===-1?sr.splice(Fr+1,0,e):e.flags&1||(Hr.push(e),e.flags|=1),od()}function ei(e,t,r=Et+1){for(;r<Ke.length;r++){const s=Ke[r];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;Ke.splice(r,1),r--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function id(e){if(Hr.length){const t=[...new Set(Hr)].sort((r,s)=>gs(r)-gs(s));if(Hr.length=0,sr){sr.push(...t);return}for(sr=t,Fr=0;Fr<sr.length;Fr++){const r=sr[Fr];r.flags&4&&(r.flags&=-2),r.flags&8||r(),r.flags&=-2}sr=null,Fr=0}}const gs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ld(e){try{for(Et=0;Et<Ke.length;Et++){const t=Ke[Et];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),Es(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;Et<Ke.length;Et++){const t=Ke[Et];t&&(t.flags&=-2)}Et=-1,Ke.length=0,id(),Pa=null,(Ke.length||Hr.length)&&ld()}}let at=null,cd=null;function Aa(e){const t=at;return at=e,cd=e&&e.type.__scopeId||null,t}function to(e,t=at,r){if(!t||e._n)return e;const s=(...a)=>{s._d&&$a(-1);const n=Aa(t);let o;try{o=e(...a)}finally{Aa(n),s._d&&$a(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Ep(e,t){if(at===null)return e;const r=rn(at),s=e.dirs||(e.dirs=[]);for(let a=0;a<t.length;a++){let[n,o,i,l=Ee]=t[a];n&&(he(n)&&(n={mounted:n,updated:n}),n.deep&&Vt(o),s.push({dir:n,instance:r,value:o,oldValue:void 0,arg:i,modifiers:l}))}return e}function br(e,t,r,s){const a=e.dirs,n=t&&t.dirs;for(let o=0;o<a.length;o++){const i=a[o];n&&(i.oldValue=n[o].value);let l=i.dir[s];l&&(Yt(),yt(l,r,8,[e.el,i,e,t]),Wt())}}const kp=Symbol("_vte"),dd=e=>e.__isTeleport,Ht=Symbol("_leaveCb"),$s=Symbol("_enterCb");function Pp(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Qt(()=>{e.isMounted=!0}),_d(()=>{e.isUnmounting=!0}),e}const it=[Function,Array],ud={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:it,onEnter:it,onAfterEnter:it,onEnterCancelled:it,onBeforeLeave:it,onLeave:it,onAfterLeave:it,onLeaveCancelled:it,onBeforeAppear:it,onAppear:it,onAfterAppear:it,onAppearCancelled:it},pd=e=>{const t=e.subTree;return t.component?pd(t.component):t},Ap={name:"BaseTransition",props:ud,setup(e,{slots:t}){const r=Do(),s=Pp();return()=>{const a=t.default&&md(t.default(),!0);if(!a||!a.length)return;const n=fd(a),o=_e(e),{mode:i}=o;if(s.isLeaving)return yn(n);const l=ti(n);if(!l)return yn(n);let c=ro(l,o,s,r,u=>c=u);l.type!==rt&&bs(l,c);let d=r.subTree&&ti(r.subTree);if(d&&d.type!==rt&&!Er(d,l)&&pd(r).type!==rt){let u=ro(d,o,s,r);if(bs(d,u),i==="out-in"&&l.type!==rt)return s.isLeaving=!0,u.afterLeave=()=>{s.isLeaving=!1,r.job.flags&8||r.update(),delete u.afterLeave,d=void 0},yn(n);i==="in-out"&&l.type!==rt?u.delayLeave=(p,f,_)=>{const y=hd(s,d);y[String(d.key)]=d,p[Ht]=()=>{f(),p[Ht]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{_(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return n}}};function fd(e){let t=e[0];if(e.length>1){for(const r of e)if(r.type!==rt){t=r;break}}return t}const Op=Ap;function hd(e,t){const{leavingVNodes:r}=e;let s=r.get(t.type);return s||(s=Object.create(null),r.set(t.type,s)),s}function ro(e,t,r,s,a){const{appear:n,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:_,onLeaveCancelled:y,onBeforeAppear:w,onAppear:m,onAfterAppear:h,onAppearCancelled:g}=t,v=String(e.key),b=hd(r,e),T=(S,x)=>{S&&yt(S,s,9,x)},P=(S,x)=>{const C=x[1];T(S,x),fe(S)?S.every($=>$.length<=1)&&C():S.length<=1&&C()},k={mode:o,persisted:i,beforeEnter(S){let x=l;if(!r.isMounted)if(n)x=w||l;else return;S[Ht]&&S[Ht](!0);const C=b[v];C&&Er(e,C)&&C.el[Ht]&&C.el[Ht](),T(x,[S])},enter(S){let x=c,C=d,$=u;if(!r.isMounted)if(n)x=m||c,C=h||d,$=g||u;else return;let M=!1;const j=S[$s]=Q=>{M||(M=!0,Q?T($,[S]):T(C,[S]),k.delayedLeave&&k.delayedLeave(),S[$s]=void 0)};x?P(x,[S,j]):j()},leave(S,x){const C=String(e.key);if(S[$s]&&S[$s](!0),r.isUnmounting)return x();T(p,[S]);let $=!1;const M=S[Ht]=j=>{$||($=!0,x(),j?T(y,[S]):T(_,[S]),S[Ht]=void 0,b[C]===e&&delete b[C])};b[C]=e,f?P(f,[S,M]):M()},clone(S){const x=ro(S,t,r,s,a);return a&&a(x),x}};return k}function yn(e){if(Xa(e))return e=ur(e),e.children=null,e}function ti(e){if(!Xa(e))return dd(e.type)&&e.children?fd(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:r}=e;if(r){if(t&16)return r[0];if(t&32&&he(r.default))return r.default()}}function bs(e,t){e.shapeFlag&6&&e.component?(e.transition=t,bs(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function md(e,t=!1,r){let s=[],a=0;for(let n=0;n<e.length;n++){let o=e[n];const i=r==null?o.key:String(r)+String(o.key!=null?o.key:n);o.type===Pt?(o.patchFlag&128&&a++,s=s.concat(md(o.children,t,i))):(t||o.type!==rt)&&s.push(i!=null?ur(o,{key:i}):o)}if(a>1)for(let n=0;n<s.length;n++)s[n].patchFlag=-2;return s}function gd(e,t){return he(e)?Ne({name:e.name},t,{setup:e}):e}function bd(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const Oa=new WeakMap;function is(e,t,r,s,a=!1){if(fe(e)){e.forEach((_,y)=>is(_,t&&(fe(t)?t[y]:t),r,s,a));return}if(ls(s)&&!a){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&is(e,t,r,s.component.subTree);return}const n=s.shapeFlag&4?rn(s.component):s.el,o=a?null:n,{i,r:l}=e,c=t&&t.r,d=i.refs===Ee?i.refs={}:i.refs,u=i.setupState,p=_e(u),f=u===Ee?Oc:_=>Se(p,_);if(c!=null&&c!==l){if(ri(t),Re(c))d[c]=null,f(c)&&(u[c]=null);else if(Ce(c)){c.value=null;const _=t;_.k&&(d[_.k]=null)}}if(he(l))Es(l,i,12,[o,d]);else{const _=Re(l),y=Ce(l);if(_||y){const w=()=>{if(e.f){const m=_?f(l)?u[l]:d[l]:l.value;if(a)fe(m)&&vo(m,n);else if(fe(m))m.includes(n)||m.push(n);else if(_)d[l]=[n],f(l)&&(u[l]=d[l]);else{const h=[n];l.value=h,e.k&&(d[e.k]=h)}}else _?(d[l]=o,f(l)&&(u[l]=o)):y&&(l.value=o,e.k&&(d[e.k]=o))};if(o){const m=()=>{w(),Oa.delete(e)};m.id=-1,Oa.set(e,m),et(m,r)}else ri(e),w()}}}function ri(e){const t=Oa.get(e);t&&(t.flags|=8,Oa.delete(e))}Ya().requestIdleCallback;Ya().cancelIdleCallback;const ls=e=>!!e.type.__asyncLoader,Xa=e=>e.type.__isKeepAlive;function Cp(e,t){yd(e,"a",t)}function $p(e,t){yd(e,"da",t)}function yd(e,t,r=Ue){const s=e.__wdc||(e.__wdc=()=>{let a=r;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Qa(t,s,r),r){let a=r.parent;for(;a&&a.parent;)Xa(a.parent.vnode)&&Rp(s,t,r,a),a=a.parent}}function Rp(e,t,r,s){const a=Qa(t,e,s,!0);Za(()=>{vo(s[t],a)},r)}function Qa(e,t,r=Ue,s=!1){if(r){const a=r[e]||(r[e]=[]),n=t.__weh||(t.__weh=(...o)=>{Yt();const i=ks(r),l=yt(t,r,e,o);return i(),Wt(),l});return s?a.unshift(n):a.push(n),n}}const Xt=e=>(t,r=Ue)=>{(!_s||e==="sp")&&Qa(e,(...s)=>t(...s),r)},Mp=Xt("bm"),Qt=Xt("m"),Lp=Xt("bu"),Np=Xt("u"),_d=Xt("bum"),Za=Xt("um"),Ip=Xt("sp"),Dp=Xt("rtg"),Bp=Xt("rtc");function Fp(e,t=Ue){Qa("ec",e,t)}const zp="components",vd=Symbol.for("v-ndc");function jp(e){return Re(e)?Up(zp,e,!1)||e:e||vd}function Up(e,t,r=!0,s=!1){const a=at||Ue;if(a){const n=a.type;{const i=$f(n,!1);if(i&&(i===t||i===pt(t)||i===Ka(pt(t))))return n}const o=si(a[e]||n[e],t)||si(a.appContext[e],t);return!o&&s?n:o}}function si(e,t){return e&&(e[t]||e[pt(t)]||e[Ka(pt(t))])}const so=e=>e?zd(e)?rn(e):so(e.parent):null,cs=Ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>so(e.parent),$root:e=>so(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Td(e),$forceUpdate:e=>e.f||(e.f=()=>{Mo(e.update)}),$nextTick:e=>e.n||(e.n=Ro.bind(e.proxy)),$watch:e=>uf.bind(e)}),_n=(e,t)=>e!==Ee&&!e.__isScriptSetup&&Se(e,t),Hp={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:r,setupState:s,data:a,props:n,accessCache:o,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return a[t];case 4:return r[t];case 3:return n[t]}else{if(_n(s,t))return o[t]=1,s[t];if(a!==Ee&&Se(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&Se(c,t))return o[t]=3,n[t];if(r!==Ee&&Se(r,t))return o[t]=4,r[t];ao&&(o[t]=0)}}const d=cs[t];let u,p;if(d)return t==="$attrs"&&je(e.attrs,"get",""),d(e);if((u=i.__cssModules)&&(u=u[t]))return u;if(r!==Ee&&Se(r,t))return o[t]=4,r[t];if(p=l.config.globalProperties,Se(p,t))return p[t]},set({_:e},t,r){const{data:s,setupState:a,ctx:n}=e;return _n(a,t)?(a[t]=r,!0):s!==Ee&&Se(s,t)?(s[t]=r,!0):Se(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(n[t]=r,!0)},has({_:{data:e,setupState:t,accessCache:r,ctx:s,appContext:a,propsOptions:n,type:o}},i){let l,c;return!!(r[i]||e!==Ee&&i[0]!=="$"&&Se(e,i)||_n(t,i)||(l=n[0])&&Se(l,i)||Se(s,i)||Se(cs,i)||Se(a.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(e,t,r){return r.get!=null?e._.accessCache[t]=0:Se(r,"value")&&this.set(e,t,r.value,null),Reflect.defineProperty(e,t,r)}};function ai(e){return fe(e)?e.reduce((t,r)=>(t[r]=null,t),{}):e}let ao=!0;function qp(e){const t=Td(e),r=e.proxy,s=e.ctx;ao=!1,t.beforeCreate&&ni(t.beforeCreate,e,"bc");const{data:a,computed:n,methods:o,watch:i,provide:l,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:_,activated:y,deactivated:w,beforeDestroy:m,beforeUnmount:h,destroyed:g,unmounted:v,render:b,renderTracked:T,renderTriggered:P,errorCaptured:k,serverPrefetch:S,expose:x,inheritAttrs:C,components:$,directives:M,filters:j}=t;if(c&&Gp(c,s,null),o)for(const Y in o){const q=o[Y];he(q)&&(s[Y]=q.bind(r))}if(a){const Y=a.call(r,r);ke(Y)&&(e.data=Kt(Y))}if(ao=!0,n)for(const Y in n){const q=n[Y],K=he(q)?q.bind(r,r):he(q.get)?q.get.bind(r,r):Ct,B=!he(q)&&he(q.set)?q.set.bind(r):Ct,I=st({get:K,set:B});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>I.value,set:U=>I.value=U})}if(i)for(const Y in i)wd(i[Y],s,r,Y);if(l){const Y=he(l)?l.call(r):l;Reflect.ownKeys(Y).forEach(q=>{va(q,Y[q])})}d&&ni(d,e,"c");function se(Y,q){fe(q)?q.forEach(K=>Y(K.bind(r))):q&&Y(q.bind(r))}if(se(Mp,u),se(Qt,p),se(Lp,f),se(Np,_),se(Cp,y),se($p,w),se(Fp,k),se(Bp,T),se(Dp,P),se(_d,h),se(Za,v),se(Ip,S),fe(x))if(x.length){const Y=e.exposed||(e.exposed={});x.forEach(q=>{Object.defineProperty(Y,q,{get:()=>r[q],set:K=>r[q]=K,enumerable:!0})})}else e.exposed||(e.exposed={});b&&e.render===Ct&&(e.render=b),C!=null&&(e.inheritAttrs=C),$&&(e.components=$),M&&(e.directives=M),S&&bd(e)}function Gp(e,t,r=Ct){fe(e)&&(e=no(e));for(const s in e){const a=e[s];let n;ke(a)?"default"in a?n=dt(a.from||s,a.default,!0):n=dt(a.from||s):n=dt(a),Ce(n)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>n.value,set:o=>n.value=o}):t[s]=n}}function ni(e,t,r){yt(fe(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,r)}function wd(e,t,r,s){let a=s.includes(".")?Nd(r,s):()=>r[s];if(Re(e)){const n=t[e];he(n)&&ds(a,n)}else if(he(e))ds(a,e.bind(r));else if(ke(e))if(fe(e))e.forEach(n=>wd(n,t,r,s));else{const n=he(e.handler)?e.handler.bind(r):t[e.handler];he(n)&&ds(a,n,e)}}function Td(e){const t=e.type,{mixins:r,extends:s}=t,{mixins:a,optionsCache:n,config:{optionMergeStrategies:o}}=e.appContext,i=n.get(t);let l;return i?l=i:!a.length&&!r&&!s?l=t:(l={},a.length&&a.forEach(c=>Ca(l,c,o,!0)),Ca(l,t,o)),ke(t)&&n.set(t,l),l}function Ca(e,t,r,s=!1){const{mixins:a,extends:n}=t;n&&Ca(e,n,r,!0),a&&a.forEach(o=>Ca(e,o,r,!0));for(const o in t)if(!(s&&o==="expose")){const i=Vp[o]||r&&r[o];e[o]=i?i(e[o],t[o]):t[o]}return e}const Vp={data:oi,props:ii,emits:ii,methods:rs,computed:rs,beforeCreate:qe,created:qe,beforeMount:qe,mounted:qe,beforeUpdate:qe,updated:qe,beforeDestroy:qe,beforeUnmount:qe,destroyed:qe,unmounted:qe,activated:qe,deactivated:qe,errorCaptured:qe,serverPrefetch:qe,components:rs,directives:rs,watch:Yp,provide:oi,inject:Kp};function oi(e,t){return t?e?function(){return Ne(he(e)?e.call(this,this):e,he(t)?t.call(this,this):t)}:t:e}function Kp(e,t){return rs(no(e),no(t))}function no(e){if(fe(e)){const t={};for(let r=0;r<e.length;r++)t[e[r]]=e[r];return t}return e}function qe(e,t){return e?[...new Set([].concat(e,t))]:t}function rs(e,t){return e?Ne(Object.create(null),e,t):t}function ii(e,t){return e?fe(e)&&fe(t)?[...new Set([...e,...t])]:Ne(Object.create(null),ai(e),ai(t??{})):t}function Yp(e,t){if(!e)return t;if(!t)return e;const r=Ne(Object.create(null),e);for(const s in t)r[s]=qe(e[s],t[s]);return r}function Sd(){return{app:null,config:{isNativeTag:Oc,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Wp=0;function Jp(e,t){return function(s,a=null){he(s)||(s=Ne({},s)),a!=null&&!ke(a)&&(a=null);const n=Sd(),o=new WeakSet,i=[];let l=!1;const c=n.app={_uid:Wp++,_component:s,_props:a,_container:null,_context:n,_instance:null,version:Mf,get config(){return n.config},set config(d){},use(d,...u){return o.has(d)||(d&&he(d.install)?(o.add(d),d.install(c,...u)):he(d)&&(o.add(d),d(c,...u))),c},mixin(d){return n.mixins.includes(d)||n.mixins.push(d),c},component(d,u){return u?(n.components[d]=u,c):n.components[d]},directive(d,u){return u?(n.directives[d]=u,c):n.directives[d]},mount(d,u,p){if(!l){const f=c._ceVNode||Je(s,a);return f.appContext=n,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),l=!0,c._container=d,d.__vue_app__=c,rn(f.component)}},onUnmount(d){i.push(d)},unmount(){l&&(yt(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return n.provides[d]=u,c},runWithContext(d){const u=Cr;Cr=c;try{return d()}finally{Cr=u}}};return c}}let Cr=null;function va(e,t){if(Ue){let r=Ue.provides;const s=Ue.parent&&Ue.parent.provides;s===r&&(r=Ue.provides=Object.create(s)),r[e]=t}}function dt(e,t,r=!1){const s=Do();if(s||Cr){let a=Cr?Cr._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(a&&e in a)return a[e];if(arguments.length>1)return r&&he(t)?t.call(s&&s.proxy):t}}function Xp(){return!!(Do()||Cr)}const xd={},Ed=()=>Object.create(xd),kd=e=>Object.getPrototypeOf(e)===xd;function Qp(e,t,r,s=!1){const a={},n=Ed();e.propsDefaults=Object.create(null),Pd(e,t,a,n);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);r?e.props=s?a:rd(a):e.type.props?e.props=a:e.props=n,e.attrs=n}function Zp(e,t,r,s){const{props:a,attrs:n,vnode:{patchFlag:o}}=e,i=_e(a),[l]=e.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(en(e.emitsOptions,p))continue;const f=t[p];if(l)if(Se(n,p))f!==n[p]&&(n[p]=f,c=!0);else{const _=pt(p);a[_]=oo(l,i,_,f,e,!1)}else f!==n[p]&&(n[p]=f,c=!0)}}}else{Pd(e,t,a,n)&&(c=!0);let d;for(const u in i)(!t||!Se(t,u)&&((d=fr(u))===u||!Se(t,d)))&&(l?r&&(r[u]!==void 0||r[d]!==void 0)&&(a[u]=oo(l,i,u,void 0,e,!0)):delete a[u]);if(n!==i)for(const u in n)(!t||!Se(t,u))&&(delete n[u],c=!0)}c&&Gt(e.attrs,"set","")}function Pd(e,t,r,s){const[a,n]=e.propsOptions;let o=!1,i;if(t)for(let l in t){if(as(l))continue;const c=t[l];let d;a&&Se(a,d=pt(l))?!n||!n.includes(d)?r[d]=c:(i||(i={}))[d]=c:en(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(n){const l=_e(r),c=i||Ee;for(let d=0;d<n.length;d++){const u=n[d];r[u]=oo(a,l,u,c[u],e,!Se(c,u))}}return o}function oo(e,t,r,s,a,n){const o=e[r];if(o!=null){const i=Se(o,"default");if(i&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:c}=a;if(r in c)s=c[r];else{const d=ks(a);s=c[r]=l.call(null,t),d()}}else s=l;a.ce&&a.ce._setProp(r,s)}o[0]&&(n&&!i?s=!1:o[1]&&(s===""||s===fr(r))&&(s=!0))}return s}const ef=new WeakMap;function Ad(e,t,r=!1){const s=r?ef:t.propsCache,a=s.get(e);if(a)return a;const n=e.props,o={},i=[];let l=!1;if(!he(e)){const d=u=>{l=!0;const[p,f]=Ad(u,t,!0);Ne(o,p),f&&i.push(...f)};!r&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!n&&!l)return ke(e)&&s.set(e,jr),jr;if(fe(n))for(let d=0;d<n.length;d++){const u=pt(n[d]);li(u)&&(o[u]=Ee)}else if(n)for(const d in n){const u=pt(d);if(li(u)){const p=n[d],f=o[u]=fe(p)||he(p)?{type:p}:Ne({},p),_=f.type;let y=!1,w=!0;if(fe(_))for(let m=0;m<_.length;++m){const h=_[m],g=he(h)&&h.name;if(g==="Boolean"){y=!0;break}else g==="String"&&(w=!1)}else y=he(_)&&_.name==="Boolean";f[0]=y,f[1]=w,(y||Se(f,"default"))&&i.push(u)}}const c=[o,i];return ke(e)&&s.set(e,c),c}function li(e){return e[0]!=="$"&&!as(e)}const Lo=e=>e==="_"||e==="_ctx"||e==="$stable",No=e=>fe(e)?e.map(At):[At(e)],tf=(e,t,r)=>{if(t._n)return t;const s=to((...a)=>No(t(...a)),r);return s._c=!1,s},Od=(e,t,r)=>{const s=e._ctx;for(const a in e){if(Lo(a))continue;const n=e[a];if(he(n))t[a]=tf(a,n,s);else if(n!=null){const o=No(n);t[a]=()=>o}}},Cd=(e,t)=>{const r=No(t);e.slots.default=()=>r},$d=(e,t,r)=>{for(const s in t)(r||!Lo(s))&&(e[s]=t[s])},rf=(e,t,r)=>{const s=e.slots=Ed();if(e.vnode.shapeFlag&32){const a=t._;a?($d(s,t,r),r&&Mc(s,"_",a,!0)):Od(t,s)}else t&&Cd(e,t)},sf=(e,t,r)=>{const{vnode:s,slots:a}=e;let n=!0,o=Ee;if(s.shapeFlag&32){const i=t._;i?r&&i===1?n=!1:$d(a,t,r):(n=!t.$stable,Od(t,a)),o=t}else t&&(Cd(e,t),o={default:1});if(n)for(const i in a)!Lo(i)&&o[i]==null&&delete a[i]},et=_f;function af(e){return nf(e)}function nf(e,t){const r=Ya();r.__VUE__=!0;const{insert:s,remove:a,patchProp:n,createElement:o,createText:i,createComment:l,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=Ct,insertStaticContent:_}=e,y=(E,O,N,H=null,Z=null,ee=null,le=void 0,ae=null,J=!!O.dynamicChildren)=>{if(E===O)return;E&&!Er(E,O)&&(H=L(E),U(E,Z,ee,!0),E=null),O.patchFlag===-2&&(J=!1,O.dynamicChildren=null);const{type:W,ref:ie,shapeFlag:ne}=O;switch(W){case tn:w(E,O,N,H);break;case rt:m(E,O,N,H);break;case wa:E==null&&h(O,N,H,le);break;case Pt:$(E,O,N,H,Z,ee,le,ae,J);break;default:ne&1?b(E,O,N,H,Z,ee,le,ae,J):ne&6?M(E,O,N,H,Z,ee,le,ae,J):(ne&64||ne&128)&&W.process(E,O,N,H,Z,ee,le,ae,J,te)}ie!=null&&Z?is(ie,E&&E.ref,ee,O||E,!O):ie==null&&E&&E.ref!=null&&is(E.ref,null,ee,E,!0)},w=(E,O,N,H)=>{if(E==null)s(O.el=i(O.children),N,H);else{const Z=O.el=E.el;O.children!==E.children&&c(Z,O.children)}},m=(E,O,N,H)=>{E==null?s(O.el=l(O.children||""),N,H):O.el=E.el},h=(E,O,N,H)=>{[E.el,E.anchor]=_(E.children,O,N,H,E.el,E.anchor)},g=({el:E,anchor:O},N,H)=>{let Z;for(;E&&E!==O;)Z=p(E),s(E,N,H),E=Z;s(O,N,H)},v=({el:E,anchor:O})=>{let N;for(;E&&E!==O;)N=p(E),a(E),E=N;a(O)},b=(E,O,N,H,Z,ee,le,ae,J)=>{if(O.type==="svg"?le="svg":O.type==="math"&&(le="mathml"),E==null)T(O,N,H,Z,ee,le,ae,J);else{const W=E.el&&E.el._isVueCE?E.el:null;try{W&&W._beginPatch(),S(E,O,Z,ee,le,ae,J)}finally{W&&W._endPatch()}}},T=(E,O,N,H,Z,ee,le,ae)=>{let J,W;const{props:ie,shapeFlag:ne,transition:ce,dirs:ue}=E;if(J=E.el=o(E.type,ee,ie&&ie.is,ie),ne&8?d(J,E.children):ne&16&&k(E.children,J,null,H,Z,vn(E,ee),le,ae),ue&&br(E,null,H,"created"),P(J,E,E.scopeId,le,H),ie){for(const be in ie)be!=="value"&&!as(be)&&n(J,be,null,ie[be],ee,H);"value"in ie&&n(J,"value",null,ie.value,ee),(W=ie.onVnodeBeforeMount)&&xt(W,H,E)}ue&&br(E,null,H,"beforeMount");const pe=of(Z,ce);pe&&ce.beforeEnter(J),s(J,O,N),((W=ie&&ie.onVnodeMounted)||pe||ue)&&et(()=>{W&&xt(W,H,E),pe&&ce.enter(J),ue&&br(E,null,H,"mounted")},Z)},P=(E,O,N,H,Z)=>{if(N&&f(E,N),H)for(let ee=0;ee<H.length;ee++)f(E,H[ee]);if(Z){let ee=Z.subTree;if(O===ee||Dd(ee.type)&&(ee.ssContent===O||ee.ssFallback===O)){const le=Z.vnode;P(E,le,le.scopeId,le.slotScopeIds,Z.parent)}}},k=(E,O,N,H,Z,ee,le,ae,J=0)=>{for(let W=J;W<E.length;W++){const ie=E[W]=ae?ar(E[W]):At(E[W]);y(null,ie,O,N,H,Z,ee,le,ae)}},S=(E,O,N,H,Z,ee,le)=>{const ae=O.el=E.el;let{patchFlag:J,dynamicChildren:W,dirs:ie}=O;J|=E.patchFlag&16;const ne=E.props||Ee,ce=O.props||Ee;let ue;if(N&&yr(N,!1),(ue=ce.onVnodeBeforeUpdate)&&xt(ue,N,O,E),ie&&br(O,E,N,"beforeUpdate"),N&&yr(N,!0),(ne.innerHTML&&ce.innerHTML==null||ne.textContent&&ce.textContent==null)&&d(ae,""),W?x(E.dynamicChildren,W,ae,N,H,vn(O,Z),ee):le||q(E,O,ae,null,N,H,vn(O,Z),ee,!1),J>0){if(J&16)C(ae,ne,ce,N,Z);else if(J&2&&ne.class!==ce.class&&n(ae,"class",null,ce.class,Z),J&4&&n(ae,"style",ne.style,ce.style,Z),J&8){const pe=O.dynamicProps;for(let be=0;be<pe.length;be++){const ye=pe[be],Me=ne[ye],Be=ce[ye];(Be!==Me||ye==="value")&&n(ae,ye,Me,Be,Z,N)}}J&1&&E.children!==O.children&&d(ae,O.children)}else!le&&W==null&&C(ae,ne,ce,N,Z);((ue=ce.onVnodeUpdated)||ie)&&et(()=>{ue&&xt(ue,N,O,E),ie&&br(O,E,N,"updated")},H)},x=(E,O,N,H,Z,ee,le)=>{for(let ae=0;ae<O.length;ae++){const J=E[ae],W=O[ae],ie=J.el&&(J.type===Pt||!Er(J,W)||J.shapeFlag&198)?u(J.el):N;y(J,W,ie,null,H,Z,ee,le,!0)}},C=(E,O,N,H,Z)=>{if(O!==N){if(O!==Ee)for(const ee in O)!as(ee)&&!(ee in N)&&n(E,ee,O[ee],null,Z,H);for(const ee in N){if(as(ee))continue;const le=N[ee],ae=O[ee];le!==ae&&ee!=="value"&&n(E,ee,ae,le,Z,H)}"value"in N&&n(E,"value",O.value,N.value,Z)}},$=(E,O,N,H,Z,ee,le,ae,J)=>{const W=O.el=E?E.el:i(""),ie=O.anchor=E?E.anchor:i("");let{patchFlag:ne,dynamicChildren:ce,slotScopeIds:ue}=O;ue&&(ae=ae?ae.concat(ue):ue),E==null?(s(W,N,H),s(ie,N,H),k(O.children||[],N,ie,Z,ee,le,ae,J)):ne>0&&ne&64&&ce&&E.dynamicChildren?(x(E.dynamicChildren,ce,N,Z,ee,le,ae),(O.key!=null||Z&&O===Z.subTree)&&Rd(E,O,!0)):q(E,O,N,ie,Z,ee,le,ae,J)},M=(E,O,N,H,Z,ee,le,ae,J)=>{O.slotScopeIds=ae,E==null?O.shapeFlag&512?Z.ctx.activate(O,N,H,le,J):j(O,N,H,Z,ee,le,J):Q(E,O,J)},j=(E,O,N,H,Z,ee,le)=>{const ae=E.component=kf(E,H,Z);if(Xa(E)&&(ae.ctx.renderer=te),Pf(ae,!1,le),ae.asyncDep){if(Z&&Z.registerDep(ae,se,le),!E.el){const J=ae.subTree=Je(rt);m(null,J,O,N),E.placeholder=J.el}}else se(ae,E,O,N,Z,ee,le)},Q=(E,O,N)=>{const H=O.component=E.component;if(bf(E,O,N))if(H.asyncDep&&!H.asyncResolved){Y(H,O,N);return}else H.next=O,H.update();else O.el=E.el,H.vnode=O},se=(E,O,N,H,Z,ee,le)=>{const ae=()=>{if(E.isMounted){let{next:ne,bu:ce,u:ue,parent:pe,vnode:be}=E;{const Tt=Md(E);if(Tt){ne&&(ne.el=be.el,Y(E,ne,le)),Tt.asyncDep.then(()=>{E.isUnmounted||ae()});return}}let ye=ne,Me;yr(E,!1),ne?(ne.el=be.el,Y(E,ne,le)):ne=be,ce&&_a(ce),(Me=ne.props&&ne.props.onVnodeBeforeUpdate)&&xt(Me,pe,ne,be),yr(E,!0);const Be=di(E),wt=E.subTree;E.subTree=Be,y(wt,Be,u(wt.el),L(wt),E,Z,ee),ne.el=Be.el,ye===null&&yf(E,Be.el),ue&&et(ue,Z),(Me=ne.props&&ne.props.onVnodeUpdated)&&et(()=>xt(Me,pe,ne,be),Z)}else{let ne;const{el:ce,props:ue}=O,{bm:pe,m:be,parent:ye,root:Me,type:Be}=E,wt=ls(O);yr(E,!1),pe&&_a(pe),!wt&&(ne=ue&&ue.onVnodeBeforeMount)&&xt(ne,ye,O),yr(E,!0);{Me.ce&&Me.ce._def.shadowRoot!==!1&&Me.ce._injectChildStyle(Be);const Tt=E.subTree=di(E);y(null,Tt,N,H,E,Z,ee),O.el=Tt.el}if(be&&et(be,Z),!wt&&(ne=ue&&ue.onVnodeMounted)){const Tt=O;et(()=>xt(ne,ye,Tt),Z)}(O.shapeFlag&256||ye&&ls(ye.vnode)&&ye.vnode.shapeFlag&256)&&E.a&&et(E.a,Z),E.isMounted=!0,O=N=H=null}};E.scope.on();const J=E.effect=new Uc(ae);E.scope.off();const W=E.update=J.run.bind(J),ie=E.job=J.runIfDirty.bind(J);ie.i=E,ie.id=E.uid,J.scheduler=()=>Mo(ie),yr(E,!0),W()},Y=(E,O,N)=>{O.component=E;const H=E.vnode.props;E.vnode=O,E.next=null,Zp(E,O.props,H,N),sf(E,O.children,N),Yt(),ei(E),Wt()},q=(E,O,N,H,Z,ee,le,ae,J=!1)=>{const W=E&&E.children,ie=E?E.shapeFlag:0,ne=O.children,{patchFlag:ce,shapeFlag:ue}=O;if(ce>0){if(ce&128){B(W,ne,N,H,Z,ee,le,ae,J);return}else if(ce&256){K(W,ne,N,H,Z,ee,le,ae,J);return}}ue&8?(ie&16&&V(W,Z,ee),ne!==W&&d(N,ne)):ie&16?ue&16?B(W,ne,N,H,Z,ee,le,ae,J):V(W,Z,ee,!0):(ie&8&&d(N,""),ue&16&&k(ne,N,H,Z,ee,le,ae,J))},K=(E,O,N,H,Z,ee,le,ae,J)=>{E=E||jr,O=O||jr;const W=E.length,ie=O.length,ne=Math.min(W,ie);let ce;for(ce=0;ce<ne;ce++){const ue=O[ce]=J?ar(O[ce]):At(O[ce]);y(E[ce],ue,N,null,Z,ee,le,ae,J)}W>ie?V(E,Z,ee,!0,!1,ne):k(O,N,H,Z,ee,le,ae,J,ne)},B=(E,O,N,H,Z,ee,le,ae,J)=>{let W=0;const ie=O.length;let ne=E.length-1,ce=ie-1;for(;W<=ne&&W<=ce;){const ue=E[W],pe=O[W]=J?ar(O[W]):At(O[W]);if(Er(ue,pe))y(ue,pe,N,null,Z,ee,le,ae,J);else break;W++}for(;W<=ne&&W<=ce;){const ue=E[ne],pe=O[ce]=J?ar(O[ce]):At(O[ce]);if(Er(ue,pe))y(ue,pe,N,null,Z,ee,le,ae,J);else break;ne--,ce--}if(W>ne){if(W<=ce){const ue=ce+1,pe=ue<ie?O[ue].el:H;for(;W<=ce;)y(null,O[W]=J?ar(O[W]):At(O[W]),N,pe,Z,ee,le,ae,J),W++}}else if(W>ce)for(;W<=ne;)U(E[W],Z,ee,!0),W++;else{const ue=W,pe=W,be=new Map;for(W=pe;W<=ce;W++){const Qe=O[W]=J?ar(O[W]):At(O[W]);Qe.key!=null&&be.set(Qe.key,W)}let ye,Me=0;const Be=ce-pe+1;let wt=!1,Tt=0;const Yr=new Array(Be);for(W=0;W<Be;W++)Yr[W]=0;for(W=ue;W<=ne;W++){const Qe=E[W];if(Me>=Be){U(Qe,Z,ee,!0);continue}let St;if(Qe.key!=null)St=be.get(Qe.key);else for(ye=pe;ye<=ce;ye++)if(Yr[ye-pe]===0&&Er(Qe,O[ye])){St=ye;break}St===void 0?U(Qe,Z,ee,!0):(Yr[St-pe]=W+1,St>=Tt?Tt=St:wt=!0,y(Qe,O[St],N,null,Z,ee,le,ae,J),Me++)}const Ko=wt?lf(Yr):jr;for(ye=Ko.length-1,W=Be-1;W>=0;W--){const Qe=pe+W,St=O[Qe],Yo=O[Qe+1],Wo=Qe+1<ie?Yo.el||Yo.placeholder:H;Yr[W]===0?y(null,St,N,Wo,Z,ee,le,ae,J):wt&&(ye<0||W!==Ko[ye]?I(St,N,Wo,2):ye--)}}},I=(E,O,N,H,Z=null)=>{const{el:ee,type:le,transition:ae,children:J,shapeFlag:W}=E;if(W&6){I(E.component.subTree,O,N,H);return}if(W&128){E.suspense.move(O,N,H);return}if(W&64){le.move(E,O,N,te);return}if(le===Pt){s(ee,O,N);for(let ne=0;ne<J.length;ne++)I(J[ne],O,N,H);s(E.anchor,O,N);return}if(le===wa){g(E,O,N);return}if(H!==2&&W&1&&ae)if(H===0)ae.beforeEnter(ee),s(ee,O,N),et(()=>ae.enter(ee),Z);else{const{leave:ne,delayLeave:ce,afterLeave:ue}=ae,pe=()=>{E.ctx.isUnmounted?a(ee):s(ee,O,N)},be=()=>{ee._isLeaving&&ee[Ht](!0),ne(ee,()=>{pe(),ue&&ue()})};ce?ce(ee,pe,be):be()}else s(ee,O,N)},U=(E,O,N,H=!1,Z=!1)=>{const{type:ee,props:le,ref:ae,children:J,dynamicChildren:W,shapeFlag:ie,patchFlag:ne,dirs:ce,cacheIndex:ue}=E;if(ne===-2&&(Z=!1),ae!=null&&(Yt(),is(ae,null,N,E,!0),Wt()),ue!=null&&(O.renderCache[ue]=void 0),ie&256){O.ctx.deactivate(E);return}const pe=ie&1&&ce,be=!ls(E);let ye;if(be&&(ye=le&&le.onVnodeBeforeUnmount)&&xt(ye,O,E),ie&6)R(E.component,N,H);else{if(ie&128){E.suspense.unmount(N,H);return}pe&&br(E,null,O,"beforeUnmount"),ie&64?E.type.remove(E,O,N,te,H):W&&!W.hasOnce&&(ee!==Pt||ne>0&&ne&64)?V(W,O,N,!1,!0):(ee===Pt&&ne&384||!Z&&ie&16)&&V(J,O,N),H&&F(E)}(be&&(ye=le&&le.onVnodeUnmounted)||pe)&&et(()=>{ye&&xt(ye,O,E),pe&&br(E,null,O,"unmounted")},N)},F=E=>{const{type:O,el:N,anchor:H,transition:Z}=E;if(O===Pt){A(N,H);return}if(O===wa){v(E);return}const ee=()=>{a(N),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(E.shapeFlag&1&&Z&&!Z.persisted){const{leave:le,delayLeave:ae}=Z,J=()=>le(N,ee);ae?ae(E.el,ee,J):J()}else ee()},A=(E,O)=>{let N;for(;E!==O;)N=p(E),a(E),E=N;a(O)},R=(E,O,N)=>{const{bum:H,scope:Z,job:ee,subTree:le,um:ae,m:J,a:W}=E;ci(J),ci(W),H&&_a(H),Z.stop(),ee&&(ee.flags|=8,U(le,E,O,N)),ae&&et(ae,O),et(()=>{E.isUnmounted=!0},O)},V=(E,O,N,H=!1,Z=!1,ee=0)=>{for(let le=ee;le<E.length;le++)U(E[le],O,N,H,Z)},L=E=>{if(E.shapeFlag&6)return L(E.component.subTree);if(E.shapeFlag&128)return E.suspense.next();const O=p(E.anchor||E.el),N=O&&O[kp];return N?p(N):O};let z=!1;const G=(E,O,N)=>{E==null?O._vnode&&U(O._vnode,null,null,!0):y(O._vnode||null,E,O,null,null,null,N),O._vnode=E,z||(z=!0,ei(),id(),z=!1)},te={p:y,um:U,m:I,r:F,mt:j,mc:k,pc:q,pbc:x,n:L,o:e};return{render:G,hydrate:void 0,createApp:Jp(G)}}function vn({type:e,props:t},r){return r==="svg"&&e==="foreignObject"||r==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:r}function yr({effect:e,job:t},r){r?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function of(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Rd(e,t,r=!1){const s=e.children,a=t.children;if(fe(s)&&fe(a))for(let n=0;n<s.length;n++){const o=s[n];let i=a[n];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=a[n]=ar(a[n]),i.el=o.el),!r&&i.patchFlag!==-2&&Rd(o,i)),i.type===tn&&i.patchFlag!==-1&&(i.el=o.el),i.type===rt&&!i.el&&(i.el=o.el)}}function lf(e){const t=e.slice(),r=[0];let s,a,n,o,i;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(a=r[r.length-1],e[a]<c){t[s]=a,r.push(s);continue}for(n=0,o=r.length-1;n<o;)i=n+o>>1,e[r[i]]<c?n=i+1:o=i;c<e[r[n]]&&(n>0&&(t[s]=r[n-1]),r[n]=s)}}for(n=r.length,o=r[n-1];n-- >0;)r[n]=o,o=t[o];return r}function Md(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Md(t)}function ci(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const cf=Symbol.for("v-scx"),df=()=>dt(cf);function ds(e,t,r){return Ld(e,t,r)}function Ld(e,t,r=Ee){const{immediate:s,deep:a,flush:n,once:o}=r,i=Ne({},r),l=t&&s||!t&&n!=="post";let c;if(_s){if(n==="sync"){const f=df();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Ct,f.resume=Ct,f.pause=Ct,f}}const d=Ue;i.call=(f,_,y)=>yt(f,d,_,y);let u=!1;n==="post"?i.scheduler=f=>{et(f,d&&d.suspense)}:n!=="sync"&&(u=!0,i.scheduler=(f,_)=>{_?f():Mo(f)}),i.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=wp(e,t,i);return _s&&(c?c.push(p):l&&p()),p}function uf(e,t,r){const s=this.proxy,a=Re(e)?e.includes(".")?Nd(s,e):()=>s[e]:e.bind(s,s);let n;he(t)?n=t:(n=t.handler,r=t);const o=ks(this),i=Ld(a,n.bind(s),r);return o(),i}function Nd(e,t){const r=t.split(".");return()=>{let s=e;for(let a=0;a<r.length&&s;a++)s=s[r[a]];return s}}const pf=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${pt(t)}Modifiers`]||e[`${fr(t)}Modifiers`];function ff(e,t,...r){if(e.isUnmounted)return;const s=e.vnode.props||Ee;let a=r;const n=t.startsWith("update:"),o=n&&pf(s,t.slice(7));o&&(o.trim&&(a=r.map(d=>Re(d)?d.trim():d)),o.number&&(a=r.map(Du)));let i,l=s[i=fn(t)]||s[i=fn(pt(t))];!l&&n&&(l=s[i=fn(fr(t))]),l&&yt(l,e,6,a);const c=s[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,yt(c,e,6,a)}}const hf=new WeakMap;function Id(e,t,r=!1){const s=r?hf:t.emitsCache,a=s.get(e);if(a!==void 0)return a;const n=e.emits;let o={},i=!1;if(!he(e)){const l=c=>{const d=Id(c,t,!0);d&&(i=!0,Ne(o,d))};!r&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!n&&!i?(ke(e)&&s.set(e,null),null):(fe(n)?n.forEach(l=>o[l]=null):Ne(o,n),ke(e)&&s.set(e,o),o)}function en(e,t){return!e||!qa(t)?!1:(t=t.slice(2).replace(/Once$/,""),Se(e,t[0].toLowerCase()+t.slice(1))||Se(e,fr(t))||Se(e,t))}function di(e){const{type:t,vnode:r,proxy:s,withProxy:a,propsOptions:[n],slots:o,attrs:i,emit:l,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:_,inheritAttrs:y}=e,w=Aa(e);let m,h;try{if(r.shapeFlag&4){const v=a||s,b=v;m=At(c.call(b,v,d,u,f,p,_)),h=i}else{const v=t;m=At(v.length>1?v(u,{attrs:i,slots:o,emit:l}):v(u,null)),h=t.props?i:mf(i)}}catch(v){us.length=0,Ja(v,e,1),m=Je(rt)}let g=m;if(h&&y!==!1){const v=Object.keys(h),{shapeFlag:b}=g;v.length&&b&7&&(n&&v.some(_o)&&(h=gf(h,n)),g=ur(g,h,!1,!0))}return r.dirs&&(g=ur(g,null,!1,!0),g.dirs=g.dirs?g.dirs.concat(r.dirs):r.dirs),r.transition&&bs(g,r.transition),m=g,Aa(w),m}const mf=e=>{let t;for(const r in e)(r==="class"||r==="style"||qa(r))&&((t||(t={}))[r]=e[r]);return t},gf=(e,t)=>{const r={};for(const s in e)(!_o(s)||!(s.slice(9)in t))&&(r[s]=e[s]);return r};function bf(e,t,r){const{props:s,children:a,component:n}=e,{props:o,children:i,patchFlag:l}=t,c=n.emitsOptions;if(t.dirs||t.transition)return!0;if(r&&l>=0){if(l&1024)return!0;if(l&16)return s?ui(s,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==s[p]&&!en(c,p))return!0}}}else return(a||i)&&(!i||!i.$stable)?!0:s===o?!1:s?o?ui(s,o,c):!0:!!o;return!1}function ui(e,t,r){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let a=0;a<s.length;a++){const n=s[a];if(t[n]!==e[n]&&!en(r,n))return!0}return!1}function yf({vnode:e,parent:t},r){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=r,t=t.parent;else break}}const Dd=e=>e.__isSuspense;function _f(e,t){t&&t.pendingBranch?fe(e)?t.effects.push(...e):t.effects.push(e):xp(e)}const Pt=Symbol.for("v-fgt"),tn=Symbol.for("v-txt"),rt=Symbol.for("v-cmt"),wa=Symbol.for("v-stc"),us=[];let nt=null;function Xe(e=!1){us.push(nt=e?null:[])}function vf(){us.pop(),nt=us[us.length-1]||null}let ys=1;function $a(e,t=!1){ys+=e,e<0&&nt&&t&&(nt.hasOnce=!0)}function Bd(e){return e.dynamicChildren=ys>0?nt||jr:null,vf(),ys>0&&nt&&nt.push(e),e}function ut(e,t,r,s,a,n){return Bd(re(e,t,r,s,a,n,!0))}function pi(e,t,r,s,a){return Bd(Je(e,t,r,s,a,!0))}function Ra(e){return e?e.__v_isVNode===!0:!1}function Er(e,t){return e.type===t.type&&e.key===t.key}const Fd=({key:e})=>e??null,Ta=({ref:e,ref_key:t,ref_for:r})=>(typeof e=="number"&&(e=""+e),e!=null?Re(e)||Ce(e)||he(e)?{i:at,r:e,k:t,f:!!r}:e:null);function re(e,t=null,r=null,s=0,a=null,n=e===Pt?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fd(t),ref:t&&Ta(t),scopeId:cd,slotScopeIds:null,children:r,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:n,patchFlag:s,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:at};return i?(Io(l,r),n&128&&e.normalize(l)):r&&(l.shapeFlag|=Re(r)?8:16),ys>0&&!o&&nt&&(l.patchFlag>0||n&6)&&l.patchFlag!==32&&nt.push(l),l}const Je=wf;function wf(e,t=null,r=null,s=0,a=null,n=!1){if((!e||e===vd)&&(e=rt),Ra(e)){const i=ur(e,t,!0);return r&&Io(i,r),ys>0&&!n&&nt&&(i.shapeFlag&6?nt[nt.indexOf(e)]=i:nt.push(i)),i.patchFlag=-2,i}if(Rf(e)&&(e=e.__vccOpts),t){t=Tf(t);let{class:i,style:l}=t;i&&!Re(i)&&(t.class=dr(i)),ke(l)&&(Co(l)&&!fe(l)&&(l=Ne({},l)),t.style=To(l))}const o=Re(e)?1:Dd(e)?128:dd(e)?64:ke(e)?4:he(e)?2:0;return re(e,t,r,s,a,o,n,!0)}function Tf(e){return e?Co(e)||kd(e)?Ne({},e):e:null}function ur(e,t,r=!1,s=!1){const{props:a,ref:n,patchFlag:o,children:i,transition:l}=e,c=t?Sf(a||{},t):a,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Fd(c),ref:t&&t.ref?r&&n?fe(n)?n.concat(Ta(t)):[n,Ta(t)]:Ta(t):n,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Pt?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&ur(e.ssContent),ssFallback:e.ssFallback&&ur(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&bs(d,l.clone(d)),d}function qr(e=" ",t=0){return Je(tn,null,e,t)}function Rr(e,t){const r=Je(wa,null,e);return r.staticCount=t,r}function At(e){return e==null||typeof e=="boolean"?Je(rt):fe(e)?Je(Pt,null,e.slice()):Ra(e)?ar(e):Je(tn,null,String(e))}function ar(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:ur(e)}function Io(e,t){let r=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(fe(t))r=16;else if(typeof t=="object")if(s&65){const a=t.default;a&&(a._c&&(a._d=!1),Io(e,a()),a._c&&(a._d=!0));return}else{r=32;const a=t._;!a&&!kd(t)?t._ctx=at:a===3&&at&&(at.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:at},r=32):(t=String(t),s&64?(r=16,t=[qr(t)]):r=8);e.children=t,e.shapeFlag|=r}function Sf(...e){const t={};for(let r=0;r<e.length;r++){const s=e[r];for(const a in s)if(a==="class")t.class!==s.class&&(t.class=dr([t.class,s.class]));else if(a==="style")t.style=To([t.style,s.style]);else if(qa(a)){const n=t[a],o=s[a];o&&n!==o&&!(fe(n)&&n.includes(o))&&(t[a]=n?[].concat(n,o):o)}else a!==""&&(t[a]=s[a])}return t}function xt(e,t,r,s=null){yt(e,t,7,[r,s])}const xf=Sd();let Ef=0;function kf(e,t,r){const s=e.type,a=(t?t.appContext:e.appContext)||xf,n={uid:Ef++,vnode:e,type:s,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Fc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ad(s,a),emitsOptions:Id(s,a),emit:null,emitted:null,propsDefaults:Ee,inheritAttrs:s.inheritAttrs,ctx:Ee,data:Ee,props:Ee,attrs:Ee,slots:Ee,refs:Ee,setupState:Ee,setupContext:null,suspense:r,suspenseId:r?r.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return n.ctx={_:n},n.root=t?t.root:n,n.emit=ff.bind(null,n),e.ce&&e.ce(n),n}let Ue=null;const Do=()=>Ue||at;let Ma,io;{const e=Ya(),t=(r,s)=>{let a;return(a=e[r])||(a=e[r]=[]),a.push(s),n=>{a.length>1?a.forEach(o=>o(n)):a[0](n)}};Ma=t("__VUE_INSTANCE_SETTERS__",r=>Ue=r),io=t("__VUE_SSR_SETTERS__",r=>_s=r)}const ks=e=>{const t=Ue;return Ma(e),e.scope.on(),()=>{e.scope.off(),Ma(t)}},fi=()=>{Ue&&Ue.scope.off(),Ma(null)};function zd(e){return e.vnode.shapeFlag&4}let _s=!1;function Pf(e,t=!1,r=!1){t&&io(t);const{props:s,children:a}=e.vnode,n=zd(e);Qp(e,s,n,t),rf(e,a,r||t);const o=n?Af(e,t):void 0;return t&&io(!1),o}function Af(e,t){const r=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Hp);const{setup:s}=r;if(s){Yt();const a=e.setupContext=s.length>1?Cf(e):null,n=ks(e),o=Es(s,e,0,[e.props,a]),i=Cc(o);if(Wt(),n(),(i||e.sp)&&!ls(e)&&bd(e),i){if(o.then(fi,fi),t)return o.then(l=>{hi(e,l)}).catch(l=>{Ja(l,e,0)});e.asyncDep=o}else hi(e,o)}else jd(e)}function hi(e,t,r){he(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ke(t)&&(e.setupState=ad(t)),jd(e)}function jd(e,t,r){const s=e.type;e.render||(e.render=s.render||Ct);{const a=ks(e);Yt();try{qp(e)}finally{Wt(),a()}}}const Of={get(e,t){return je(e,"get",""),e[t]}};function Cf(e){const t=r=>{e.exposed=r||{}};return{attrs:new Proxy(e.attrs,Of),slots:e.slots,emit:e.emit,expose:t}}function rn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ad($o(e.exposed)),{get(t,r){if(r in t)return t[r];if(r in cs)return cs[r](e)},has(t,r){return r in t||r in cs}})):e.proxy}function $f(e,t=!0){return he(e)?e.displayName||e.name:e.name||t&&e.__name}function Rf(e){return he(e)&&"__vccOpts"in e}const st=(e,t)=>_p(e,t,_s);function Bo(e,t,r){try{$a(-1);const s=arguments.length;return s===2?ke(t)&&!fe(t)?Ra(t)?Je(e,null,[t]):Je(e,t):Je(e,null,t):(s>3?r=Array.prototype.slice.call(arguments,2):s===3&&Ra(r)&&(r=[r]),Je(e,t,r))}finally{$a(1)}}const Mf="3.5.24";let lo;const mi=typeof window<"u"&&window.trustedTypes;if(mi)try{lo=mi.createPolicy("vue",{createHTML:e=>e})}catch{}const Ud=lo?e=>lo.createHTML(e):e=>e,Lf="http://www.w3.org/2000/svg",Nf="http://www.w3.org/1998/Math/MathML",jt=typeof document<"u"?document:null,gi=jt&&jt.createElement("template"),If={insert:(e,t,r)=>{t.insertBefore(e,r||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,r,s)=>{const a=t==="svg"?jt.createElementNS(Lf,e):t==="mathml"?jt.createElementNS(Nf,e):r?jt.createElement(e,{is:r}):jt.createElement(e);return e==="select"&&s&&s.multiple!=null&&a.setAttribute("multiple",s.multiple),a},createText:e=>jt.createTextNode(e),createComment:e=>jt.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>jt.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,r,s,a,n){const o=r?r.previousSibling:t.lastChild;if(a&&(a===n||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),r),!(a===n||!(a=a.nextSibling)););else{gi.innerHTML=Ud(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const i=gi.content;if(s==="svg"||s==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,r)}return[o?o.nextSibling:t.firstChild,r?r.previousSibling:t.lastChild]}},Zt="transition",Jr="animation",vs=Symbol("_vtc"),Hd={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Df=Ne({},ud,Hd),Bf=e=>(e.displayName="Transition",e.props=Df,e),Ff=Bf((e,{slots:t})=>Bo(Op,zf(e),t)),_r=(e,t=[])=>{fe(e)?e.forEach(r=>r(...t)):e&&e(...t)},bi=e=>e?fe(e)?e.some(t=>t.length>1):e.length>1:!1;function zf(e){const t={};for(const $ in e)$ in Hd||(t[$]=e[$]);if(e.css===!1)return t;const{name:r="v",type:s,duration:a,enterFromClass:n=`${r}-enter-from`,enterActiveClass:o=`${r}-enter-active`,enterToClass:i=`${r}-enter-to`,appearFromClass:l=n,appearActiveClass:c=o,appearToClass:d=i,leaveFromClass:u=`${r}-leave-from`,leaveActiveClass:p=`${r}-leave-active`,leaveToClass:f=`${r}-leave-to`}=e,_=jf(a),y=_&&_[0],w=_&&_[1],{onBeforeEnter:m,onEnter:h,onEnterCancelled:g,onLeave:v,onLeaveCancelled:b,onBeforeAppear:T=m,onAppear:P=h,onAppearCancelled:k=g}=t,S=($,M,j,Q)=>{$._enterCancelled=Q,vr($,M?d:i),vr($,M?c:o),j&&j()},x=($,M)=>{$._isLeaving=!1,vr($,u),vr($,f),vr($,p),M&&M()},C=$=>(M,j)=>{const Q=$?P:h,se=()=>S(M,$,j);_r(Q,[M,se]),yi(()=>{vr(M,$?l:n),Nt(M,$?d:i),bi(Q)||_i(M,s,y,se)})};return Ne(t,{onBeforeEnter($){_r(m,[$]),Nt($,n),Nt($,o)},onBeforeAppear($){_r(T,[$]),Nt($,l),Nt($,c)},onEnter:C(!1),onAppear:C(!0),onLeave($,M){$._isLeaving=!0;const j=()=>x($,M);Nt($,u),$._enterCancelled?(Nt($,p),Ti($)):(Ti($),Nt($,p)),yi(()=>{$._isLeaving&&(vr($,u),Nt($,f),bi(v)||_i($,s,w,j))}),_r(v,[$,j])},onEnterCancelled($){S($,!1,void 0,!0),_r(g,[$])},onAppearCancelled($){S($,!0,void 0,!0),_r(k,[$])},onLeaveCancelled($){x($),_r(b,[$])}})}function jf(e){if(e==null)return null;if(ke(e))return[wn(e.enter),wn(e.leave)];{const t=wn(e);return[t,t]}}function wn(e){return Bu(e)}function Nt(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.add(r)),(e[vs]||(e[vs]=new Set)).add(t)}function vr(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const r=e[vs];r&&(r.delete(t),r.size||(e[vs]=void 0))}function yi(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Uf=0;function _i(e,t,r,s){const a=e._endId=++Uf,n=()=>{a===e._endId&&s()};if(r!=null)return setTimeout(n,r);const{type:o,timeout:i,propCount:l}=Hf(e,t);if(!o)return s();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),n()},p=f=>{f.target===e&&++d>=l&&u()};setTimeout(()=>{d<l&&u()},i+1),e.addEventListener(c,p)}function Hf(e,t){const r=window.getComputedStyle(e),s=_=>(r[_]||"").split(", "),a=s(`${Zt}Delay`),n=s(`${Zt}Duration`),o=vi(a,n),i=s(`${Jr}Delay`),l=s(`${Jr}Duration`),c=vi(i,l);let d=null,u=0,p=0;t===Zt?o>0&&(d=Zt,u=o,p=n.length):t===Jr?c>0&&(d=Jr,u=c,p=l.length):(u=Math.max(o,c),d=u>0?o>c?Zt:Jr:null,p=d?d===Zt?n.length:l.length:0);const f=d===Zt&&/\b(?:transform|all)(?:,|$)/.test(s(`${Zt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function vi(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((r,s)=>wi(r)+wi(e[s])))}function wi(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Ti(e){return(e?e.ownerDocument:document).body.offsetHeight}function qf(e,t,r){const s=e[vs];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):r?e.setAttribute("class",t):e.className=t}const Si=Symbol("_vod"),Gf=Symbol("_vsh"),Vf=Symbol(""),Kf=/(?:^|;)\s*display\s*:/;function Yf(e,t,r){const s=e.style,a=Re(r);let n=!1;if(r&&!a){if(t)if(Re(t))for(const o of t.split(";")){const i=o.slice(0,o.indexOf(":")).trim();r[i]==null&&Sa(s,i,"")}else for(const o in t)r[o]==null&&Sa(s,o,"");for(const o in r)o==="display"&&(n=!0),Sa(s,o,r[o])}else if(a){if(t!==r){const o=s[Vf];o&&(r+=";"+o),s.cssText=r,n=Kf.test(r)}}else t&&e.removeAttribute("style");Si in e&&(e[Si]=n?s.display:"",e[Gf]&&(s.display="none"))}const xi=/\s*!important$/;function Sa(e,t,r){if(fe(r))r.forEach(s=>Sa(e,t,s));else if(r==null&&(r=""),t.startsWith("--"))e.setProperty(t,r);else{const s=Wf(e,t);xi.test(r)?e.setProperty(fr(s),r.replace(xi,""),"important"):e[s]=r}}const Ei=["Webkit","Moz","ms"],Tn={};function Wf(e,t){const r=Tn[t];if(r)return r;let s=pt(t);if(s!=="filter"&&s in e)return Tn[t]=s;s=Ka(s);for(let a=0;a<Ei.length;a++){const n=Ei[a]+s;if(n in e)return Tn[t]=n}return t}const ki="http://www.w3.org/1999/xlink";function Pi(e,t,r,s,a,n=qu(t)){s&&t.startsWith("xlink:")?r==null?e.removeAttributeNS(ki,t.slice(6,t.length)):e.setAttributeNS(ki,t,r):r==null||n&&!Lc(r)?e.removeAttribute(t):e.setAttribute(t,n?"":Rt(r)?String(r):r)}function Ai(e,t,r,s,a){if(t==="innerHTML"||t==="textContent"){r!=null&&(e[t]=t==="innerHTML"?Ud(r):r);return}const n=e.tagName;if(t==="value"&&n!=="PROGRESS"&&!n.includes("-")){const i=n==="OPTION"?e.getAttribute("value")||"":e.value,l=r==null?e.type==="checkbox"?"on":"":String(r);(i!==l||!("_value"in e))&&(e.value=l),r==null&&e.removeAttribute(t),e._value=r;return}let o=!1;if(r===""||r==null){const i=typeof e[t];i==="boolean"?r=Lc(r):r==null&&i==="string"?(r="",o=!0):i==="number"&&(r=0,o=!0)}try{e[t]=r}catch{}o&&e.removeAttribute(a||t)}function qd(e,t,r,s){e.addEventListener(t,r,s)}function Jf(e,t,r,s){e.removeEventListener(t,r,s)}const Oi=Symbol("_vei");function Xf(e,t,r,s,a=null){const n=e[Oi]||(e[Oi]={}),o=n[t];if(s&&o)o.value=s;else{const[i,l]=Qf(t);if(s){const c=n[t]=th(s,a);qd(e,i,c,l)}else o&&(Jf(e,i,o,l),n[t]=void 0)}}const Ci=/(?:Once|Passive|Capture)$/;function Qf(e){let t;if(Ci.test(e)){t={};let s;for(;s=e.match(Ci);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):fr(e.slice(2)),t]}let Sn=0;const Zf=Promise.resolve(),eh=()=>Sn||(Zf.then(()=>Sn=0),Sn=Date.now());function th(e,t){const r=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=r.attached)return;yt(rh(s,r.value),t,5,[s])};return r.value=e,r.attached=eh(),r}function rh(e,t){if(fe(t)){const r=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{r.call(e),e._stopped=!0},t.map(s=>a=>!a._stopped&&s&&s(a))}else return t}const $i=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,sh=(e,t,r,s,a,n)=>{const o=a==="svg";t==="class"?qf(e,s,o):t==="style"?Yf(e,r,s):qa(t)?_o(t)||Xf(e,t,r,s,n):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):ah(e,t,s,o))?(Ai(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Pi(e,t,s,o,n,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Re(s))?Ai(e,pt(t),s,n,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Pi(e,t,s,o))};function ah(e,t,r,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&$i(t)&&he(r));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const a=e.tagName;if(a==="IMG"||a==="VIDEO"||a==="CANVAS"||a==="SOURCE")return!1}return $i(t)&&Re(r)?!1:t in e}const Ri=e=>{const t=e.props["onUpdate:modelValue"]||!1;return fe(t)?r=>_a(t,r):t},xn=Symbol("_assign"),nh={deep:!0,created(e,t,r){e[xn]=Ri(r),qd(e,"change",()=>{const s=e._modelValue,a=oh(e),n=e.checked,o=e[xn];if(fe(s)){const i=Nc(s,a),l=i!==-1;if(n&&!l)o(s.concat(a));else if(!n&&l){const c=[...s];c.splice(i,1),o(c)}}else if(Ga(s)){const i=new Set(s);n?i.add(a):i.delete(a),o(i)}else o(Gd(e,n))})},mounted:Mi,beforeUpdate(e,t,r){e[xn]=Ri(r),Mi(e,t,r)}};function Mi(e,{value:t,oldValue:r},s){e._modelValue=t;let a;if(fe(t))a=Nc(t,s.props.value)>-1;else if(Ga(t))a=t.has(s.props.value);else{if(t===r)return;a=Wa(t,Gd(e,!0))}e.checked!==a&&(e.checked=a)}function oh(e){return"_value"in e?e._value:e.value}function Gd(e,t){const r=t?"_trueValue":"_falseValue";return r in e?e[r]:t}const ih=["ctrl","shift","alt","meta"],lh={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>ih.some(r=>e[`${r}Key`]&&!t.includes(r))},sn=(e,t)=>{const r=e._withMods||(e._withMods={}),s=t.join(".");return r[s]||(r[s]=((a,...n)=>{for(let o=0;o<t.length;o++){const i=lh[t[o]];if(i&&i(a,t))return}return e(a,...n)}))},ch={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},qt=(e,t)=>{const r=e._withKeys||(e._withKeys={}),s=t.join(".");return r[s]||(r[s]=(a=>{if(!("key"in a))return;const n=fr(a.key);if(t.some(o=>o===n||ch[o]===n))return e(a)}))},dh=Ne({patchProp:sh},If);let Li;function uh(){return Li||(Li=af(dh))}const ph=((...e)=>{const t=uh().createApp(...e),{mount:r}=t;return t.mount=s=>{const a=hh(s);if(!a)return;const n=t._component;!he(n)&&!n.render&&!n.template&&(n.template=a.innerHTML),a.nodeType===1&&(a.textContent="");const o=r(a,!1,fh(a));return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t});function fh(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function hh(e){return Re(e)?document.querySelector(e):e}let Vd;const an=e=>Vd=e,Kd=Symbol();function co(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ps;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ps||(ps={}));function mh(){const e=zc(!0),t=e.run(()=>ot({}));let r=[],s=[];const a=$o({install(n){an(a),a._a=n,n.provide(Kd,a),n.config.globalProperties.$pinia=a,s.forEach(o=>r.push(o)),s=[]},use(n){return this._a?r.push(n):s.push(n),this},_p:r,_a:null,_e:e,_s:new Map,state:t});return a}const Yd=()=>{};function Ni(e,t,r,s=Yd){e.add(t);const a=()=>{e.delete(t)&&s()};return!r&&jc()&&Vu(a),a}function Lr(e,...t){e.forEach(r=>{r(...t)})}const gh=e=>e(),Ii=Symbol(),En=Symbol();function uo(e,t){e instanceof Map&&t instanceof Map?t.forEach((r,s)=>e.set(s,r)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const r in t){if(!t.hasOwnProperty(r))continue;const s=t[r],a=e[r];co(a)&&co(s)&&e.hasOwnProperty(r)&&!Ce(s)&&!Or(s)?e[r]=uo(a,s):e[r]=s}return e}const bh=Symbol();function yh(e){return!co(e)||!Object.prototype.hasOwnProperty.call(e,bh)}const{assign:rr}=Object;function _h(e){return!!(Ce(e)&&e.effect)}function vh(e,t,r,s){const{state:a,actions:n,getters:o}=t,i=r.state.value[e];let l;function c(){i||(r.state.value[e]=a?a():{});const d=mp(r.state.value[e]);return rr(d,n,Object.keys(o||{}).reduce((u,p)=>(u[p]=$o(st(()=>{an(r);const f=r._s.get(e);return o[p].call(f,f)})),u),{}))}return l=Wd(e,c,t,r,s,!0),l}function Wd(e,t,r={},s,a,n){let o;const i=rr({actions:{}},r),l={deep:!0};let c,d,u=new Set,p=new Set,f;const _=s.state.value[e];!n&&!_&&(s.state.value[e]={}),ot({});let y;function w(k){let S;c=d=!1,typeof k=="function"?(k(s.state.value[e]),S={type:ps.patchFunction,storeId:e,events:f}):(uo(s.state.value[e],k),S={type:ps.patchObject,payload:k,storeId:e,events:f});const x=y=Symbol();Ro().then(()=>{y===x&&(c=!0)}),d=!0,Lr(u,S,s.state.value[e])}const m=n?function(){const{state:S}=r,x=S?S():{};this.$patch(C=>{rr(C,x)})}:Yd;function h(){o.stop(),u.clear(),p.clear(),s._s.delete(e)}const g=(k,S="")=>{if(Ii in k)return k[En]=S,k;const x=function(){an(s);const C=Array.from(arguments),$=new Set,M=new Set;function j(Y){$.add(Y)}function Q(Y){M.add(Y)}Lr(p,{args:C,name:x[En],store:b,after:j,onError:Q});let se;try{se=k.apply(this&&this.$id===e?this:b,C)}catch(Y){throw Lr(M,Y),Y}return se instanceof Promise?se.then(Y=>(Lr($,Y),Y)).catch(Y=>(Lr(M,Y),Promise.reject(Y))):(Lr($,se),se)};return x[Ii]=!0,x[En]=S,x},v={_p:s,$id:e,$onAction:Ni.bind(null,p),$patch:w,$reset:m,$subscribe(k,S={}){const x=Ni(u,k,S.detached,()=>C()),C=o.run(()=>ds(()=>s.state.value[e],$=>{(S.flush==="sync"?d:c)&&k({storeId:e,type:ps.direct,events:f},$)},rr({},l,S)));return x},$dispose:h},b=Kt(v);s._s.set(e,b);const P=(s._a&&s._a.runWithContext||gh)(()=>s._e.run(()=>(o=zc()).run(()=>t({action:g}))));for(const k in P){const S=P[k];if(Ce(S)&&!_h(S)||Or(S))n||(_&&yh(S)&&(Ce(S)?S.value=_[k]:uo(S,_[k])),s.state.value[e][k]=S);else if(typeof S=="function"){const x=g(S,k);P[k]=x,i.actions[k]=S}}return rr(b,P),rr(_e(b),P),Object.defineProperty(b,"$state",{get:()=>s.state.value[e],set:k=>{w(S=>{rr(S,k)})}}),s._p.forEach(k=>{rr(b,o.run(()=>k({store:b,app:s._a,pinia:s,options:i})))}),_&&n&&r.hydrate&&r.hydrate(b.$state,_),c=!0,d=!0,b}function wh(e,t,r){let s;const a=typeof t=="function";s=a?r:t;function n(o,i){const l=Xp();return o=o||(l?dt(Kd,null):null),o&&an(o),o=Vd,o._s.has(e)||(a?Wd(e,t,s,o):vh(e,s,o)),o._s.get(e)}return n.$id=e,n}const zr=typeof document<"u";function Jd(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function Th(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Jd(e.default)}const Te=Object.assign;function kn(e,t){const r={};for(const s in t){const a=t[s];r[s]=_t(a)?a.map(e):e(a)}return r}const fs=()=>{},_t=Array.isArray;function Di(e,t){const r={};for(const s in e)r[s]=s in t?t[s]:e[s];return r}const Xd=/#/g,Sh=/&/g,xh=/\//g,Eh=/=/g,kh=/\?/g,Qd=/\+/g,Ph=/%5B/g,Ah=/%5D/g,Zd=/%5E/g,Oh=/%60/g,eu=/%7B/g,Ch=/%7C/g,tu=/%7D/g,$h=/%20/g;function Fo(e){return e==null?"":encodeURI(""+e).replace(Ch,"|").replace(Ph,"[").replace(Ah,"]")}function Rh(e){return Fo(e).replace(eu,"{").replace(tu,"}").replace(Zd,"^")}function po(e){return Fo(e).replace(Qd,"%2B").replace($h,"+").replace(Xd,"%23").replace(Sh,"%26").replace(Oh,"`").replace(eu,"{").replace(tu,"}").replace(Zd,"^")}function Mh(e){return po(e).replace(Eh,"%3D")}function Lh(e){return Fo(e).replace(Xd,"%23").replace(kh,"%3F")}function Nh(e){return Lh(e).replace(xh,"%2F")}function ws(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Ih=/\/$/,Dh=e=>e.replace(Ih,"");function Pn(e,t,r="/"){let s,a={},n="",o="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(s=t.slice(0,l),n=t.slice(l,i>0?i:t.length),a=e(n.slice(1))),i>=0&&(s=s||t.slice(0,i),o=t.slice(i,t.length)),s=jh(s??t,r),{fullPath:s+n+o,path:s,query:a,hash:ws(o)}}function Bh(e,t){const r=t.query?e(t.query):"";return t.path+(r&&"?")+r+(t.hash||"")}function Bi(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Fh(e,t,r){const s=t.matched.length-1,a=r.matched.length-1;return s>-1&&s===a&&Gr(t.matched[s],r.matched[a])&&ru(t.params,r.params)&&e(t.query)===e(r.query)&&t.hash===r.hash}function Gr(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ru(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const r in e)if(!zh(e[r],t[r]))return!1;return!0}function zh(e,t){return _t(e)?Fi(e,t):_t(t)?Fi(t,e):e===t}function Fi(e,t){return _t(t)?e.length===t.length&&e.every((r,s)=>r===t[s]):e.length===1&&e[0]===t}function jh(e,t){if(e.startsWith("/"))return e;if(!e)return t;const r=t.split("/"),s=e.split("/"),a=s[s.length-1];(a===".."||a===".")&&s.push("");let n=r.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")n>1&&n--;else break;return r.slice(0,n).join("/")+"/"+s.slice(o).join("/")}const er={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let fo=(function(e){return e.pop="pop",e.push="push",e})({}),An=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Uh(e){if(!e)if(zr){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Dh(e)}const Hh=/^[^#]+#/;function qh(e,t){return e.replace(Hh,"#")+t}function Gh(e,t){const r=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-r.left-(t.left||0),top:s.top-r.top-(t.top||0)}}const nn=()=>({left:window.scrollX,top:window.scrollY});function Vh(e){let t;if("el"in e){const r=e.el,s=typeof r=="string"&&r.startsWith("#"),a=typeof r=="string"?s?document.getElementById(r.slice(1)):document.querySelector(r):r;if(!a)return;t=Gh(a,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function zi(e,t){return(history.state?history.state.position-t:-1)+e}const ho=new Map;function Kh(e,t){ho.set(e,t)}function Yh(e){const t=ho.get(e);return ho.delete(e),t}function Wh(e){return typeof e=="string"||e&&typeof e=="object"}function su(e){return typeof e=="string"||typeof e=="symbol"}let Oe=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const au=Symbol("");Oe.MATCHER_NOT_FOUND+"",Oe.NAVIGATION_GUARD_REDIRECT+"",Oe.NAVIGATION_ABORTED+"",Oe.NAVIGATION_CANCELLED+"",Oe.NAVIGATION_DUPLICATED+"";function Vr(e,t){return Te(new Error,{type:e,[au]:!0},t)}function It(e,t){return e instanceof Error&&au in e&&(t==null||!!(e.type&t))}const Jh=["params","query","hash"];function Xh(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const r of Jh)r in e&&(t[r]=e[r]);return JSON.stringify(t,null,2)}function Qh(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<r.length;++s){const a=r[s].replace(Qd," "),n=a.indexOf("="),o=ws(n<0?a:a.slice(0,n)),i=n<0?null:ws(a.slice(n+1));if(o in t){let l=t[o];_t(l)||(l=t[o]=[l]),l.push(i)}else t[o]=i}return t}function ji(e){let t="";for(let r in e){const s=e[r];if(r=Mh(r),s==null){s!==void 0&&(t+=(t.length?"&":"")+r);continue}(_t(s)?s.map(a=>a&&po(a)):[s&&po(s)]).forEach(a=>{a!==void 0&&(t+=(t.length?"&":"")+r,a!=null&&(t+="="+a))})}return t}function Zh(e){const t={};for(const r in e){const s=e[r];s!==void 0&&(t[r]=_t(s)?s.map(a=>a==null?null:""+a):s==null?s:""+s)}return t}const em=Symbol(""),Ui=Symbol(""),on=Symbol(""),zo=Symbol(""),mo=Symbol("");function Xr(){let e=[];function t(s){return e.push(s),()=>{const a=e.indexOf(s);a>-1&&e.splice(a,1)}}function r(){e=[]}return{add:t,list:()=>e.slice(),reset:r}}function nr(e,t,r,s,a,n=o=>o()){const o=s&&(s.enterCallbacks[a]=s.enterCallbacks[a]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Vr(Oe.NAVIGATION_ABORTED,{from:r,to:t})):p instanceof Error?l(p):Wh(p)?l(Vr(Oe.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&s.enterCallbacks[a]===o&&typeof p=="function"&&o.push(p),i())},d=n(()=>e.call(s&&s.instances[a],t,r,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>l(p))})}function On(e,t,r,s,a=n=>n()){const n=[];for(const o of e)for(const i in o.components){let l=o.components[i];if(!(t!=="beforeRouteEnter"&&!o.instances[i]))if(Jd(l)){const c=(l.__vccOpts||l)[t];c&&n.push(nr(c,r,s,o,i,a))}else{let c=l();n.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const u=Th(d)?d.default:d;o.mods[i]=d,o.components[i]=u;const p=(u.__vccOpts||u)[t];return p&&nr(p,r,s,o,i,a)()}))}}return n}function tm(e,t){const r=[],s=[],a=[],n=Math.max(t.matched.length,e.matched.length);for(let o=0;o<n;o++){const i=t.matched[o];i&&(e.matched.find(c=>Gr(c,i))?s.push(i):r.push(i));const l=e.matched[o];l&&(t.matched.find(c=>Gr(c,l))||a.push(l))}return[r,s,a]}let rm=()=>location.protocol+"//"+location.host;function nu(e,t){const{pathname:r,search:s,hash:a}=t,n=e.indexOf("#");if(n>-1){let o=a.includes(e.slice(n))?e.slice(n).length:1,i=a.slice(o);return i[0]!=="/"&&(i="/"+i),Bi(i,"")}return Bi(r,e)+s+a}function sm(e,t,r,s){let a=[],n=[],o=null;const i=({state:p})=>{const f=nu(e,location),_=r.value,y=t.value;let w=0;if(p){if(r.value=f,t.value=p,o&&o===_){o=null;return}w=y?p.position-y.position:0}else s(f);a.forEach(m=>{m(r.value,_,{delta:w,type:fo.pop,direction:w?w>0?An.forward:An.back:An.unknown})})};function l(){o=r.value}function c(p){a.push(p);const f=()=>{const _=a.indexOf(p);_>-1&&a.splice(_,1)};return n.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Te({},p.state,{scroll:nn()}),"")}}function u(){for(const p of n)p();n=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:c,destroy:u}}function Hi(e,t,r,s=!1,a=!1){return{back:e,current:t,forward:r,replaced:s,position:window.history.length,scroll:a?nn():null}}function am(e){const{history:t,location:r}=window,s={value:nu(e,r)},a={value:t.state};a.value||n(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function n(l,c,d){const u=e.indexOf("#"),p=u>-1?(r.host&&document.querySelector("base")?e:e.slice(u))+l:rm()+e+l;try{t[d?"replaceState":"pushState"](c,"",p),a.value=c}catch(f){console.error(f),r[d?"replace":"assign"](p)}}function o(l,c){n(l,Te({},t.state,Hi(a.value.back,l,a.value.forward,!0),c,{position:a.value.position}),!0),s.value=l}function i(l,c){const d=Te({},a.value,t.state,{forward:l,scroll:nn()});n(d.current,d,!0),n(l,Te({},Hi(s.value,l,null),{position:d.position+1},c),!1),s.value=l}return{location:s,state:a,push:i,replace:o}}function nm(e){e=Uh(e);const t=am(e),r=sm(e,t.state,t.location,t.replace);function s(n,o=!0){o||r.pauseListeners(),history.go(n)}const a=Te({location:"",base:e,go:s,createHref:qh.bind(null,e)},t,r);return Object.defineProperty(a,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(a,"state",{enumerable:!0,get:()=>t.state.value}),a}function om(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),nm(e)}let Pr=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Le=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Le||{});const im={type:Pr.Static,value:""},lm=/[a-zA-Z0-9_]/;function cm(e){if(!e)return[[]];if(e==="/")return[[im]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${r})/"${c}": ${f}`)}let r=Le.Static,s=r;const a=[];let n;function o(){n&&a.push(n),n=[]}let i=0,l,c="",d="";function u(){c&&(r===Le.Static?n.push({type:Pr.Static,value:c}):r===Le.Param||r===Le.ParamRegExp||r===Le.ParamRegExpEnd?(n.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),n.push({type:Pr.Param,value:c,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&r!==Le.ParamRegExp){s=r,r=Le.EscapeNext;continue}switch(r){case Le.Static:l==="/"?(c&&u(),o()):l===":"?(u(),r=Le.Param):p();break;case Le.EscapeNext:p(),r=s;break;case Le.Param:l==="("?r=Le.ParamRegExp:lm.test(l)?p():(u(),r=Le.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Le.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:r=Le.ParamRegExpEnd:d+=l;break;case Le.ParamRegExpEnd:u(),r=Le.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,d="";break;default:t("Unknown state");break}}return r===Le.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),a}const qi="[^/]+?",dm={sensitive:!1,strict:!1,start:!0,end:!0};var Ge=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Ge||{});const um=/[.+*?^${}()[\]/\\]/g;function pm(e,t){const r=Te({},dm,t),s=[];let a=r.start?"^":"";const n=[];for(const c of e){const d=c.length?[]:[Ge.Root];r.strict&&!c.length&&(a+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=Ge.Segment+(r.sensitive?Ge.BonusCaseSensitive:0);if(p.type===Pr.Static)u||(a+="/"),a+=p.value.replace(um,"\\$&"),f+=Ge.Static;else if(p.type===Pr.Param){const{value:_,repeatable:y,optional:w,regexp:m}=p;n.push({name:_,repeatable:y,optional:w});const h=m||qi;if(h!==qi){f+=Ge.BonusCustomRegExp;try{`${h}`}catch(v){throw new Error(`Invalid custom RegExp for param "${_}" (${h}): `+v.message)}}let g=y?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;u||(g=w&&c.length<2?`(?:/${g})`:"/"+g),w&&(g+="?"),a+=g,f+=Ge.Dynamic,w&&(f+=Ge.BonusOptional),y&&(f+=Ge.BonusRepeatable),h===".*"&&(f+=Ge.BonusWildcard)}d.push(f)}s.push(d)}if(r.strict&&r.end){const c=s.length-1;s[c][s[c].length-1]+=Ge.BonusStrict}r.strict||(a+="/?"),r.end?a+="$":r.strict&&!a.endsWith("/")&&(a+="(?:/|$)");const o=new RegExp(a,r.sensitive?"":"i");function i(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",_=n[p-1];u[_.name]=f&&_.repeatable?f.split("/"):f}return u}function l(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===Pr.Static)d+=f.value;else if(f.type===Pr.Param){const{value:_,repeatable:y,optional:w}=f,m=_ in c?c[_]:"";if(_t(m)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const h=_t(m)?m.join("/"):m;if(!h)if(w)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);d+=h}}return d||"/"}return{re:o,score:s,keys:n,parse:i,stringify:l}}function fm(e,t){let r=0;for(;r<e.length&&r<t.length;){const s=t[r]-e[r];if(s)return s;r++}return e.length<t.length?e.length===1&&e[0]===Ge.Static+Ge.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Ge.Static+Ge.Segment?1:-1:0}function ou(e,t){let r=0;const s=e.score,a=t.score;for(;r<s.length&&r<a.length;){const n=fm(s[r],a[r]);if(n)return n;r++}if(Math.abs(a.length-s.length)===1){if(Gi(s))return 1;if(Gi(a))return-1}return a.length-s.length}function Gi(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const hm={strict:!1,end:!0,sensitive:!1};function mm(e,t,r){const s=pm(cm(e.path),r),a=Te(s,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function gm(e,t){const r=[],s=new Map;t=Di(hm,t);function a(u){return s.get(u)}function n(u,p,f){const _=!f,y=Ki(u);y.aliasOf=f&&f.record;const w=Di(t,u),m=[y];if("alias"in u){const v=typeof u.alias=="string"?[u.alias]:u.alias;for(const b of v)m.push(Ki(Te({},y,{components:f?f.record.components:y.components,path:b,aliasOf:f?f.record:y})))}let h,g;for(const v of m){const{path:b}=v;if(p&&b[0]!=="/"){const T=p.record.path,P=T[T.length-1]==="/"?"":"/";v.path=p.record.path+(b&&P+b)}if(h=mm(v,p,w),f?f.alias.push(h):(g=g||h,g!==h&&g.alias.push(h),_&&u.name&&!Yi(h)&&o(u.name)),iu(h)&&l(h),y.children){const T=y.children;for(let P=0;P<T.length;P++)n(T[P],h,f&&f.children[P])}f=f||h}return g?()=>{o(g)}:fs}function o(u){if(su(u)){const p=s.get(u);p&&(s.delete(u),r.splice(r.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=r.indexOf(u);p>-1&&(r.splice(p,1),u.record.name&&s.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function i(){return r}function l(u){const p=_m(u,r);r.splice(p,0,u),u.record.name&&!Yi(u)&&s.set(u.record.name,u)}function c(u,p){let f,_={},y,w;if("name"in u&&u.name){if(f=s.get(u.name),!f)throw Vr(Oe.MATCHER_NOT_FOUND,{location:u});w=f.record.name,_=Te(Vi(p.params,f.keys.filter(g=>!g.optional).concat(f.parent?f.parent.keys.filter(g=>g.optional):[]).map(g=>g.name)),u.params&&Vi(u.params,f.keys.map(g=>g.name))),y=f.stringify(_)}else if(u.path!=null)y=u.path,f=r.find(g=>g.re.test(y)),f&&(_=f.parse(y),w=f.record.name);else{if(f=p.name?s.get(p.name):r.find(g=>g.re.test(p.path)),!f)throw Vr(Oe.MATCHER_NOT_FOUND,{location:u,currentLocation:p});w=f.record.name,_=Te({},p.params,u.params),y=f.stringify(_)}const m=[];let h=f;for(;h;)m.unshift(h.record),h=h.parent;return{name:w,path:y,params:_,matched:m,meta:ym(m)}}e.forEach(u=>n(u));function d(){r.length=0,s.clear()}return{addRoute:n,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:i,getRecordMatcher:a}}function Vi(e,t){const r={};for(const s of t)s in e&&(r[s]=e[s]);return r}function Ki(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:bm(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function bm(e){const t={},r=e.props||!1;if("component"in e)t.default=r;else for(const s in e.components)t[s]=typeof r=="object"?r[s]:r;return t}function Yi(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ym(e){return e.reduce((t,r)=>Te(t,r.meta),{})}function _m(e,t){let r=0,s=t.length;for(;r!==s;){const n=r+s>>1;ou(e,t[n])<0?s=n:r=n+1}const a=vm(e);return a&&(s=t.lastIndexOf(a,s-1)),s}function vm(e){let t=e;for(;t=t.parent;)if(iu(t)&&ou(e,t)===0)return t}function iu({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Wi(e){const t=dt(on),r=dt(zo),s=st(()=>{const l=cr(e.to);return t.resolve(l)}),a=st(()=>{const{matched:l}=s.value,{length:c}=l,d=l[c-1],u=r.matched;if(!d||!u.length)return-1;const p=u.findIndex(Gr.bind(null,d));if(p>-1)return p;const f=Ji(l[c-2]);return c>1&&Ji(d)===f&&u[u.length-1].path!==f?u.findIndex(Gr.bind(null,l[c-2])):p}),n=st(()=>a.value>-1&&Em(r.params,s.value.params)),o=st(()=>a.value>-1&&a.value===r.matched.length-1&&ru(r.params,s.value.params));function i(l={}){if(xm(l)){const c=t[cr(e.replace)?"replace":"push"](cr(e.to)).catch(fs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:st(()=>s.value.href),isActive:n,isExactActive:o,navigate:i}}function wm(e){return e.length===1?e[0]:e}const Tm=gd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wi,setup(e,{slots:t}){const r=Kt(Wi(e)),{options:s}=dt(on),a=st(()=>({[Xi(e.activeClass,s.linkActiveClass,"router-link-active")]:r.isActive,[Xi(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive}));return()=>{const n=t.default&&wm(t.default(r));return e.custom?n:Bo("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},n)}}}),Sm=Tm;function xm(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Em(e,t){for(const r in t){const s=t[r],a=e[r];if(typeof s=="string"){if(s!==a)return!1}else if(!_t(a)||a.length!==s.length||s.some((n,o)=>n!==a[o]))return!1}return!0}function Ji(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xi=(e,t,r)=>e??t??r,km=gd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:r}){const s=dt(mo),a=st(()=>e.route||s.value),n=dt(Ui,0),o=st(()=>{let c=cr(n);const{matched:d}=a.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),i=st(()=>a.value.matched[o.value]);va(Ui,st(()=>o.value+1)),va(em,i),va(mo,a);const l=ot();return ds(()=>[l.value,i.value,e.name],([c,d,u],[p,f,_])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!Gr(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=a.value,d=e.name,u=i.value,p=u&&u.components[d];if(!p)return Qi(r.default,{Component:p,route:c});const f=u.props[d],_=f?f===!0?c.params:typeof f=="function"?f(c):f:null,w=Bo(p,Te({},_,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[d]=null)},ref:l}));return Qi(r.default,{Component:w,route:c})||w}}});function Qi(e,t){if(!e)return null;const r=e(t);return r.length===1?r[0]:r}const lu=km;function Pm(e){const t=gm(e.routes,e),r=e.parseQuery||Qh,s=e.stringifyQuery||ji,a=e.history,n=Xr(),o=Xr(),i=Xr(),l=pp(er);let c=er;zr&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=kn.bind(null,L=>""+L),u=kn.bind(null,Nh),p=kn.bind(null,ws);function f(L,z){let G,te;return su(L)?(G=t.getRecordMatcher(L),te=z):te=L,t.addRoute(te,G)}function _(L){const z=t.getRecordMatcher(L);z&&t.removeRoute(z)}function y(){return t.getRoutes().map(L=>L.record)}function w(L){return!!t.getRecordMatcher(L)}function m(L,z){if(z=Te({},z||l.value),typeof L=="string"){const N=Pn(r,L,z.path),H=t.resolve({path:N.path},z),Z=a.createHref(N.fullPath);return Te(N,H,{params:p(H.params),hash:ws(N.hash),redirectedFrom:void 0,href:Z})}let G;if(L.path!=null)G=Te({},L,{path:Pn(r,L.path,z.path).path});else{const N=Te({},L.params);for(const H in N)N[H]==null&&delete N[H];G=Te({},L,{params:u(N)}),z.params=u(z.params)}const te=t.resolve(G,z),D=L.hash||"";te.params=d(p(te.params));const E=Bh(s,Te({},L,{hash:Rh(D),path:te.path})),O=a.createHref(E);return Te({fullPath:E,hash:D,query:s===ji?Zh(L.query):L.query||{}},te,{redirectedFrom:void 0,href:O})}function h(L){return typeof L=="string"?Pn(r,L,l.value.path):Te({},L)}function g(L,z){if(c!==L)return Vr(Oe.NAVIGATION_CANCELLED,{from:z,to:L})}function v(L){return P(L)}function b(L){return v(Te(h(L),{replace:!0}))}function T(L,z){const G=L.matched[L.matched.length-1];if(G&&G.redirect){const{redirect:te}=G;let D=typeof te=="function"?te(L,z):te;return typeof D=="string"&&(D=D.includes("?")||D.includes("#")?D=h(D):{path:D},D.params={}),Te({query:L.query,hash:L.hash,params:D.path!=null?{}:L.params},D)}}function P(L,z){const G=c=m(L),te=l.value,D=L.state,E=L.force,O=L.replace===!0,N=T(G,te);if(N)return P(Te(h(N),{state:typeof N=="object"?Te({},D,N.state):D,force:E,replace:O}),z||G);const H=G;H.redirectedFrom=z;let Z;return!E&&Fh(s,te,G)&&(Z=Vr(Oe.NAVIGATION_DUPLICATED,{to:H,from:te}),I(te,te,!0,!1)),(Z?Promise.resolve(Z):x(H,te)).catch(ee=>It(ee)?It(ee,Oe.NAVIGATION_GUARD_REDIRECT)?ee:B(ee):q(ee,H,te)).then(ee=>{if(ee){if(It(ee,Oe.NAVIGATION_GUARD_REDIRECT))return P(Te({replace:O},h(ee.to),{state:typeof ee.to=="object"?Te({},D,ee.to.state):D,force:E}),z||H)}else ee=$(H,te,!0,O,D);return C(H,te,ee),ee})}function k(L,z){const G=g(L,z);return G?Promise.reject(G):Promise.resolve()}function S(L){const z=A.values().next().value;return z&&typeof z.runWithContext=="function"?z.runWithContext(L):L()}function x(L,z){let G;const[te,D,E]=tm(L,z);G=On(te.reverse(),"beforeRouteLeave",L,z);for(const N of te)N.leaveGuards.forEach(H=>{G.push(nr(H,L,z))});const O=k.bind(null,L,z);return G.push(O),V(G).then(()=>{G=[];for(const N of n.list())G.push(nr(N,L,z));return G.push(O),V(G)}).then(()=>{G=On(D,"beforeRouteUpdate",L,z);for(const N of D)N.updateGuards.forEach(H=>{G.push(nr(H,L,z))});return G.push(O),V(G)}).then(()=>{G=[];for(const N of E)if(N.beforeEnter)if(_t(N.beforeEnter))for(const H of N.beforeEnter)G.push(nr(H,L,z));else G.push(nr(N.beforeEnter,L,z));return G.push(O),V(G)}).then(()=>(L.matched.forEach(N=>N.enterCallbacks={}),G=On(E,"beforeRouteEnter",L,z,S),G.push(O),V(G))).then(()=>{G=[];for(const N of o.list())G.push(nr(N,L,z));return G.push(O),V(G)}).catch(N=>It(N,Oe.NAVIGATION_CANCELLED)?N:Promise.reject(N))}function C(L,z,G){i.list().forEach(te=>S(()=>te(L,z,G)))}function $(L,z,G,te,D){const E=g(L,z);if(E)return E;const O=z===er,N=zr?history.state:{};G&&(te||O?a.replace(L.fullPath,Te({scroll:O&&N&&N.scroll},D)):a.push(L.fullPath,D)),l.value=L,I(L,z,G,O),B()}let M;function j(){M||(M=a.listen((L,z,G)=>{if(!R.listening)return;const te=m(L),D=T(te,R.currentRoute.value);if(D){P(Te(D,{replace:!0,force:!0}),te).catch(fs);return}c=te;const E=l.value;zr&&Kh(zi(E.fullPath,G.delta),nn()),x(te,E).catch(O=>It(O,Oe.NAVIGATION_ABORTED|Oe.NAVIGATION_CANCELLED)?O:It(O,Oe.NAVIGATION_GUARD_REDIRECT)?(P(Te(h(O.to),{force:!0}),te).then(N=>{It(N,Oe.NAVIGATION_ABORTED|Oe.NAVIGATION_DUPLICATED)&&!G.delta&&G.type===fo.pop&&a.go(-1,!1)}).catch(fs),Promise.reject()):(G.delta&&a.go(-G.delta,!1),q(O,te,E))).then(O=>{O=O||$(te,E,!1),O&&(G.delta&&!It(O,Oe.NAVIGATION_CANCELLED)?a.go(-G.delta,!1):G.type===fo.pop&&It(O,Oe.NAVIGATION_ABORTED|Oe.NAVIGATION_DUPLICATED)&&a.go(-1,!1)),C(te,E,O)}).catch(fs)}))}let Q=Xr(),se=Xr(),Y;function q(L,z,G){B(L);const te=se.list();return te.length?te.forEach(D=>D(L,z,G)):console.error(L),Promise.reject(L)}function K(){return Y&&l.value!==er?Promise.resolve():new Promise((L,z)=>{Q.add([L,z])})}function B(L){return Y||(Y=!L,j(),Q.list().forEach(([z,G])=>L?G(L):z()),Q.reset()),L}function I(L,z,G,te){const{scrollBehavior:D}=e;if(!zr||!D)return Promise.resolve();const E=!G&&Yh(zi(L.fullPath,0))||(te||!G)&&history.state&&history.state.scroll||null;return Ro().then(()=>D(L,z,E)).then(O=>O&&Vh(O)).catch(O=>q(O,L,z))}const U=L=>a.go(L);let F;const A=new Set,R={currentRoute:l,listening:!0,addRoute:f,removeRoute:_,clearRoutes:t.clearRoutes,hasRoute:w,getRoutes:y,resolve:m,options:e,push:v,replace:b,go:U,back:()=>U(-1),forward:()=>U(1),beforeEach:n.add,beforeResolve:o.add,afterEach:i.add,onError:se.add,isReady:K,install(L){L.component("RouterLink",Sm),L.component("RouterView",lu),L.config.globalProperties.$router=R,Object.defineProperty(L.config.globalProperties,"$route",{enumerable:!0,get:()=>cr(l)}),zr&&!F&&l.value===er&&(F=!0,v(a.location).catch(te=>{}));const z={};for(const te in er)Object.defineProperty(z,te,{get:()=>l.value[te],enumerable:!0});L.provide(on,R),L.provide(zo,rd(z)),L.provide(mo,l);const G=L.unmount;A.add(L),L.unmount=function(){A.delete(L),A.size<1&&(c=er,M&&M(),M=null,l.value=er,F=!1,Y=!1),G()}}};function V(L){return L.reduce((z,G)=>z.then(()=>S(G)),Promise.resolve())}return R}function Mt(){return dt(on)}function cu(e){return dt(zo)}var Am=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function du(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ss={exports:{}},Om=ss.exports,Zi;function Cm(){return Zi||(Zi=1,(function(e,t){(function(r,s){var a={};r.PubSub?(a=r.PubSub,console.warn("PubSub already loaded, using existing version")):(r.PubSub=a,s(a)),e!==void 0&&e.exports&&(t=e.exports=a),t.PubSub=a,e.exports=t=a})(typeof window=="object"&&window||Om||Am,function(r){var s={},a=-1,n="*";function o(y){var w;for(w in y)if(Object.prototype.hasOwnProperty.call(y,w))return!0;return!1}function i(y){return function(){throw y}}function l(y,w,m){try{y(w,m)}catch(h){setTimeout(i(h),0)}}function c(y,w,m){y(w,m)}function d(y,w,m,h){var g=s[w],v=h?c:l,b;if(Object.prototype.hasOwnProperty.call(s,w))for(b in g)Object.prototype.hasOwnProperty.call(g,b)&&v(g[b],y,m)}function u(y,w,m){return function(){var g=String(y),v=g.lastIndexOf(".");for(d(y,y,w,m);v!==-1;)g=g.substr(0,v),v=g.lastIndexOf("."),d(y,g,w,m);d(y,n,w,m)}}function p(y){var w=String(y),m=!!(Object.prototype.hasOwnProperty.call(s,w)&&o(s[w]));return m}function f(y){for(var w=String(y),m=p(w)||p(n),h=w.lastIndexOf(".");!m&&h!==-1;)w=w.substr(0,h),h=w.lastIndexOf("."),m=p(w);return m}function _(y,w,m,h){y=typeof y=="symbol"?y.toString():y;var g=u(y,w,h),v=f(y);return v?(m===!0?g():setTimeout(g,0),!0):!1}r.publish=function(y,w){return _(y,w,!1,r.immediateExceptions)},r.publishSync=function(y,w){return _(y,w,!0,r.immediateExceptions)},r.subscribe=function(y,w){if(typeof w!="function")return!1;y=typeof y=="symbol"?y.toString():y,Object.prototype.hasOwnProperty.call(s,y)||(s[y]={});var m="uid_"+String(++a);return s[y][m]=w,m},r.subscribeAll=function(y){return r.subscribe(n,y)},r.subscribeOnce=function(y,w){var m=r.subscribe(y,function(){r.unsubscribe(m),w.apply(this,arguments)});return r},r.clearAllSubscriptions=function(){s={}},r.clearSubscriptions=function(w){var m;for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(w)===0&&delete s[m]},r.countSubscriptions=function(w){var m,h,g=0;for(m in s)if(Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(w)===0){for(h in s[m])g++;break}return g},r.getSubscriptions=function(w){var m,h=[];for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(w)===0&&h.push(m);return h},r.unsubscribe=function(y){var w=function(k){var S;for(S in s)if(Object.prototype.hasOwnProperty.call(s,S)&&S.indexOf(k)===0)return!0;return!1},m=typeof y=="string"&&(Object.prototype.hasOwnProperty.call(s,y)||w(y)),h=!m&&typeof y=="string",g=typeof y=="function",v=!1,b,T,P;if(m){r.clearSubscriptions(y);return}for(b in s)if(Object.prototype.hasOwnProperty.call(s,b)){if(T=s[b],h&&T[y]){delete T[y],v=y;break}if(g)for(P in T)Object.prototype.hasOwnProperty.call(T,P)&&T[P]===y&&(delete T[P],v=!0)}return v}})})(ss,ss.exports)),ss.exports}var $m=Cm();const de=du($m);let mt=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Rm={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function pr(e){return new Promise((t,r)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>r(e.error)})}function Mm(e,t){let r;const s=()=>{if(r)return r;const a=indexedDB.open(e);return a.onupgradeneeded=()=>a.result.createObjectStore(t),r=pr(a),r.then(n=>{n.onclose=()=>r=void 0},()=>{}),r};return(a,n)=>s().then(o=>n(o.transaction(t,a).objectStore(t)))}let Cn;function Ps(){return Cn||(Cn=Mm("keyval-store","keyval")),Cn}function Lm(e,t=Ps()){return t("readonly",r=>pr(r.get(e)))}function el(e,t,r=Ps()){return r("readwrite",s=>(s.put(t,e),pr(s.transaction)))}function $n(e,t=Ps()){return t("readwrite",r=>(r.delete(e),pr(r.transaction)))}function uu(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},pr(e.transaction)}function Nr(e=Ps()){return e("readonly",t=>{if(t.getAllKeys)return pr(t.getAllKeys());const r=[];return uu(t,s=>r.push(s.key)).then(()=>r)})}function Nm(e=Ps()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([pr(t.getAllKeys()),pr(t.getAll())]).then(([s,a])=>s.map((n,o)=>[n,a[o]]));const r=[];return e("readonly",s=>uu(s,a=>r.push([a.key,a.value])).then(()=>r))})}const Kr=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",La=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r+=1)if(!La(e[r],t[r]))return!1;return!0}if(Kr(e)&&Kr(t)){const r=Object.entries(e),s=new Set(Object.keys(t));if(r.length!==s.size)return!1;for(const[a,n]of r){if(!La(n,t[a]))return!1;s.delete(a)}return s.size===0}return!1},Rs=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Kr(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Im=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",tl=e=>e>="0"&&e<="9"||e==="-",Dm=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var X;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(X||(X={}));const rl={"(":X.TOK_LPAREN,")":X.TOK_RPAREN,"*":X.TOK_STAR,",":X.TOK_COMMA,".":X.TOK_DOT,":":X.TOK_COLON,"@":X.TOK_CURRENT,$:X.TOK_ROOT,"]":X.TOK_RBRACKET,"{":X.TOK_LBRACE,"}":X.TOK_RBRACE},Bm={"!":!0,"<":!0,"=":!0,">":!0},Fm={"	":!0,"\n":!0,"\r":!0," ":!0};class zm{constructor(){this._current=0}tokenize(t){const r=[];this._current=0;let s,a,n;for(;this._current<t.length;)if(Im(t[this._current]))s=this._current,a=this.consumeUnquotedIdentifier(t),r.push({start:s,type:X.TOK_UNQUOTEDIDENTIFIER,value:a});else if(rl[t[this._current]]!==void 0)r.push({start:this._current,type:rl[t[this._current]],value:t[this._current]}),this._current+=1;else if(tl(t[this._current]))n=this.consumeNumber(t),r.push(n);else if(t[this._current]==="[")n=this.consumeLBracket(t),r.push(n);else if(t[this._current]==='"')s=this._current,a=this.consumeQuotedIdentifier(t),r.push({start:s,type:X.TOK_QUOTEDIDENTIFIER,value:a});else if(t[this._current]==="'")s=this._current,a=this.consumeRawStringLiteral(t),r.push({start:s,type:X.TOK_LITERAL,value:a});else if(t[this._current]==="`"){s=this._current;const o=this.consumeLiteral(t);r.push({start:s,type:X.TOK_LITERAL,value:o})}else if(Bm[t[this._current]]!==void 0)n=this.consumeOperator(t),n&&r.push(n);else if(Fm[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")s=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,r.push({start:s,type:X.TOK_AND,value:"&&"})):r.push({start:s,type:X.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")s=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,r.push({start:s,type:X.TOK_OR,value:"||"})):r.push({start:s,type:X.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return r}consumeUnquotedIdentifier(t){const r=this._current;for(this._current+=1;this._current<t.length&&Dm(t[this._current]);)this._current+=1;return t.slice(r,this._current)}consumeQuotedIdentifier(t){const r=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=='"'&&this._current<s;){let a=this._current;t[a]==="\\"&&(t[a+1]==="\\"||t[a+1]==='"')?a+=2:a+=1,this._current=a}return this._current+=1,JSON.parse(t.slice(r,this._current))}consumeRawStringLiteral(t){const r=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=="'"&&this._current<s;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==="'")?n+=2:n+=1,this._current=n}return this._current+=1,t.slice(r+1,this._current-1).replace("\\'","'")}consumeNumber(t){const r=this._current;this._current+=1;const s=t.length;for(;tl(t[this._current])&&this._current<s;)this._current+=1;const a=parseInt(t.slice(r,this._current),10);return{start:r,value:a,type:X.TOK_NUMBER}}consumeLBracket(t){const r=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:r,type:X.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:r,type:X.TOK_FLATTEN,value:"[]"}):{start:r,type:X.TOK_LBRACKET,value:"["}}consumeOperator(t){const r=this._current,s=t[r];if(this._current+=1,s==="!")return t[this._current]==="="?(this._current+=1,{start:r,type:X.TOK_NE,value:"!="}):{start:r,type:X.TOK_NOT,value:"!"};if(s==="<")return t[this._current]==="="?(this._current+=1,{start:r,type:X.TOK_LTE,value:"<="}):{start:r,type:X.TOK_LT,value:"<"};if(s===">")return t[this._current]==="="?(this._current+=1,{start:r,type:X.TOK_GTE,value:">="}):{start:r,type:X.TOK_GT,value:">"};if(s==="="&&t[this._current]==="=")return this._current+=1,{start:r,type:X.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const r=this._current,s=t.length;for(;t[this._current]!=="`"&&this._current<s;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let a=t.slice(r,this._current).trimLeft();a=a.replace("\\`","`");const n=this.looksLikeJSON(a)?JSON.parse(a):JSON.parse(`"${a}"`);return this._current+=1,n}looksLikeJSON(t){const s=["true","false","null"],a="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||s.includes(t))return!0;if(a.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const pu=new zm,Fe={[X.TOK_EOF]:0,[X.TOK_UNQUOTEDIDENTIFIER]:0,[X.TOK_QUOTEDIDENTIFIER]:0,[X.TOK_RBRACKET]:0,[X.TOK_RPAREN]:0,[X.TOK_COMMA]:0,[X.TOK_RBRACE]:0,[X.TOK_NUMBER]:0,[X.TOK_CURRENT]:0,[X.TOK_EXPREF]:0,[X.TOK_ROOT]:0,[X.TOK_PIPE]:1,[X.TOK_OR]:2,[X.TOK_AND]:3,[X.TOK_EQ]:5,[X.TOK_GT]:5,[X.TOK_LT]:5,[X.TOK_GTE]:5,[X.TOK_LTE]:5,[X.TOK_NE]:5,[X.TOK_FLATTEN]:9,[X.TOK_STAR]:20,[X.TOK_FILTER]:21,[X.TOK_DOT]:40,[X.TOK_NOT]:45,[X.TOK_LBRACE]:50,[X.TOK_LBRACKET]:55,[X.TOK_LPAREN]:60};class jm{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const r=this.expression(0);if(this.lookahead(0)!==X.TOK_EOF){const s=this.lookaheadToken(0);this.errorToken(s,`Unexpected token type: ${s.type}, value: ${s.value}`)}return r}loadTokens(t){this.tokens=[...pu.tokenize(t),{type:X.TOK_EOF,value:"",start:t.length}]}expression(t){const r=this.lookaheadToken(0);this.advance();let s=this.nud(r),a=this.lookahead(0);for(;t<Fe[a];)this.advance(),s=this.led(a,s),a=this.lookahead(0);return s}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let r,s,a;switch(t.type){case X.TOK_LITERAL:return{type:"Literal",value:t.value};case X.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case X.TOK_QUOTEDIDENTIFIER:const n={type:"Field",name:t.value};if(this.lookahead(0)===X.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return n;case X.TOK_NOT:return s=this.expression(Fe.Not),{type:"NotExpression",children:[s]};case X.TOK_STAR:return r={type:"Identity"},s=this.lookahead(0)===X.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Fe.Star),{type:"ValueProjection",children:[r,s]};case X.TOK_FILTER:return this.led(t.type,{type:"Identity"});case X.TOK_LBRACE:return this.parseMultiselectHash();case X.TOK_FLATTEN:return r={type:X.TOK_FLATTEN,children:[{type:"Identity"}]},s=this.parseProjectionRHS(Fe.Flatten),{type:"Projection",children:[r,s]};case X.TOK_LBRACKET:return this.lookahead(0)===X.TOK_NUMBER||this.lookahead(0)===X.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},s)):this.lookahead(0)===X.TOK_STAR&&this.lookahead(1)===X.TOK_RBRACKET?(this.advance(),this.advance(),s=this.parseProjectionRHS(Fe.Star),{children:[{type:"Identity"},s],type:"Projection"}):this.parseMultiselectList();case X.TOK_CURRENT:return{type:X.TOK_CURRENT};case X.TOK_ROOT:return{type:X.TOK_ROOT};case X.TOK_EXPREF:return a=this.expression(Fe.Expref),{type:"ExpressionReference",children:[a]};case X.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==X.TOK_RPAREN;)this.lookahead(0)===X.TOK_CURRENT?(a={type:X.TOK_CURRENT},this.advance()):a=this.expression(0),o.push(a);return this.match(X.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,r){let s;switch(t){case X.TOK_DOT:const a=Fe.Dot;return this.lookahead(0)!==X.TOK_STAR?(s=this.parseDotRHS(a),{type:"Subexpression",children:[r,s]}):(this.advance(),s=this.parseProjectionRHS(a),{type:"ValueProjection",children:[r,s]});case X.TOK_PIPE:return s=this.expression(Fe.Pipe),{type:X.TOK_PIPE,children:[r,s]};case X.TOK_OR:return s=this.expression(Fe.Or),{type:"OrExpression",children:[r,s]};case X.TOK_AND:return s=this.expression(Fe.And),{type:"AndExpression",children:[r,s]};case X.TOK_LPAREN:const n=r.name,o=[];let i;for(;this.lookahead(0)!==X.TOK_RPAREN;)this.lookahead(0)===X.TOK_CURRENT?(i={type:X.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===X.TOK_COMMA&&this.match(X.TOK_COMMA),o.push(i);return this.match(X.TOK_RPAREN),{name:n,type:"Function",children:o};case X.TOK_FILTER:const c=this.expression(0);return this.match(X.TOK_RBRACKET),s=this.lookahead(0)===X.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Fe.Filter),{type:"FilterProjection",children:[r,s,c]};case X.TOK_FLATTEN:const d={type:X.TOK_FLATTEN,children:[r]},u=this.parseProjectionRHS(Fe.Flatten);return{type:"Projection",children:[d,u]};case X.TOK_EQ:case X.TOK_NE:case X.TOK_GT:case X.TOK_GTE:case X.TOK_LT:case X.TOK_LTE:return this.parseComparator(r,t);case X.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===X.TOK_NUMBER||p.type===X.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice(r,s)):(this.match(X.TOK_STAR),this.match(X.TOK_RBRACKET),s=this.parseProjectionRHS(Fe.Star),{type:"Projection",children:[r,s]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const r=this.lookaheadToken(0);this.errorToken(r,`Expected ${t}, got: ${r.type}`)}}errorToken(t,r=""){const s=new Error(r||`Invalid token (${t.type}): "${t.value}"`);throw s.name="ParserError",s}parseIndexExpression(){if(this.lookahead(0)===X.TOK_COLON||this.lookahead(1)===X.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(X.TOK_RBRACKET),t}projectIfSlice(t,r){const s={type:"IndexExpression",children:[t,r]};return r.type==="Slice"?{children:[s,this.parseProjectionRHS(Fe.Star)],type:"Projection"}:s}parseSliceExpression(){const t=[null,null,null];let r=0,s=this.lookahead(0);for(;s!==X.TOK_RBRACKET&&r<3;){if(s===X.TOK_COLON)r+=1,this.advance();else if(s===X.TOK_NUMBER)t[r]=this.lookaheadToken(0).value,this.advance();else{const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}s=this.lookahead(0)}return this.match(X.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,r){const s=this.expression(Fe[r]);return{type:"Comparator",name:r,children:[t,s]}}parseDotRHS(t){const r=this.lookahead(0);if([X.TOK_UNQUOTEDIDENTIFIER,X.TOK_QUOTEDIDENTIFIER,X.TOK_STAR].includes(r))return this.expression(t);if(r===X.TOK_LBRACKET)return this.match(X.TOK_LBRACKET),this.parseMultiselectList();if(r===X.TOK_LBRACE)return this.match(X.TOK_LBRACE),this.parseMultiselectHash();const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseProjectionRHS(t){if(Fe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===X.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===X.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===X.TOK_DOT)return this.match(X.TOK_DOT),this.parseDotRHS(t);const r=this.lookaheadToken(0);this.errorToken(r,`Syntax error, unexpected token: ${r.value}(${r.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==X.TOK_RBRACKET;){const r=this.expression(0);if(t.push(r),this.lookahead(0)===X.TOK_COMMA&&(this.match(X.TOK_COMMA),this.lookahead(0)===X.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(X.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],r=[X.TOK_UNQUOTEDIDENTIFIER,X.TOK_QUOTEDIDENTIFIER];let s,a,n;for(;;){if(s=this.lookaheadToken(0),!r.includes(s.type))throw new Error(`Expecting an identifier token, got: ${s.type}`);if(a=s.value,this.advance(),this.match(X.TOK_COLON),n=this.expression(0),t.push({value:n,type:"KeyValuePair",name:a}),this.lookahead(0)===X.TOK_COMMA)this.match(X.TOK_COMMA);else if(this.lookahead(0)===X.TOK_RBRACE){this.match(X.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const fu=new jm;var oe;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(oe||(oe={}));class Um{constructor(t){this.TYPE_NAME_TABLE={[oe.TYPE_NUMBER]:"number",[oe.TYPE_ANY]:"any",[oe.TYPE_STRING]:"string",[oe.TYPE_ARRAY]:"array",[oe.TYPE_OBJECT]:"object",[oe.TYPE_BOOLEAN]:"boolean",[oe.TYPE_EXPREF]:"expression",[oe.TYPE_NULL]:"null",[oe.TYPE_ARRAY_NUMBER]:"Array<number>",[oe.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([r])=>Math.abs(r),this.functionAvg=([r])=>{let s=0;for(let a=0;a<r.length;a+=1)s+=r[a];return s/r.length},this.functionCeil=([r])=>Math.ceil(r),this.functionContains=r=>{const[s,a]=r;return s.includes(a)},this.functionEndsWith=r=>{const[s,a]=r;return s.includes(a,s.length-a.length)},this.functionFloor=([r])=>Math.floor(r),this.functionJoin=r=>{const[s,a]=r;return a.join(s)},this.functionKeys=([r])=>Object.keys(r),this.functionLength=([r])=>Kr(r)?Object.keys(r).length:r.length,this.functionMap=r=>{if(!this._interpreter)return[];const s=[],a=this._interpreter,n=r[0],o=r[1];for(let i=0;i<o.length;i+=1)s.push(a.visit(n,o[i]));return s},this.functionMax=([r])=>{if(!r.length)return null;if(this.getTypeName(r[0])===oe.TYPE_NUMBER)return Math.max(...r);const a=r;let n=a[0];for(let o=1;o<a.length;o+=1)n.localeCompare(a[o])<0&&(n=a[o]);return n},this.functionMaxBy=r=>{const s=r[1],a=r[0],n=this.createKeyFunction(s,[oe.TYPE_NUMBER,oe.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<a.length;c+=1)l=n&&n(a[c]),l!==void 0&&l>o&&(o=l,i=a[c]);return i},this.functionMerge=r=>{let s={};for(let a=0;a<r.length;a+=1){const n=r[a];s=Object.assign(s,n)}return s},this.functionMin=([r])=>{if(!r.length)return null;if(this.getTypeName(r[0])===oe.TYPE_NUMBER)return Math.min(...r);const a=r;let n=a[0];for(let o=1;o<a.length;o+=1)a[o].localeCompare(n)<0&&(n=a[o]);return n},this.functionMinBy=r=>{const s=r[1],a=r[0],n=this.createKeyFunction(s,[oe.TYPE_NUMBER,oe.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<a.length;c+=1)l=n&&n(a[c]),l!==void 0&&l<o&&(o=l,i=a[c]);return i},this.functionNotNull=r=>{for(let s=0;s<r.length;s+=1)if(this.getTypeName(r[s])!==oe.TYPE_NULL)return r[s];return null},this.functionReverse=([r])=>{if(this.getTypeName(r)===oe.TYPE_STRING){const n=r;let o="";for(let i=n.length-1;i>=0;i-=1)o+=n[i];return o}const a=r.slice(0);return a.reverse(),a},this.functionSort=([r])=>[...r].sort(),this.functionSortBy=r=>{if(!this._interpreter)return[];const s=r[0].slice(0);if(s.length===0)return s;const a=this._interpreter,n=r[1],o=this.getTypeName(a.visit(n,s[0]));if(o!==void 0&&![oe.TYPE_NUMBER,oe.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<s.length;l+=1)i.push([l,s[l]]);i.sort((l,c)=>{const d=a.visit(n,l[1]),u=a.visit(n,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)s[l]=i[l][1];return s},this.functionStartsWith=([r,s])=>r.startsWith(s),this.functionSum=([r])=>r.reduce((s,a)=>s+a,0),this.functionToArray=([r])=>this.getTypeName(r)===oe.TYPE_ARRAY?r:[r],this.functionToNumber=([r])=>{const s=this.getTypeName(r);let a;return s===oe.TYPE_NUMBER?r:s===oe.TYPE_STRING&&(a=+r,!isNaN(a))?a:null},this.functionToString=([r])=>this.getTypeName(r)===oe.TYPE_STRING?r:JSON.stringify(r),this.functionType=([r])=>{switch(this.getTypeName(r)){case oe.TYPE_NUMBER:return"number";case oe.TYPE_STRING:return"string";case oe.TYPE_ARRAY:return"array";case oe.TYPE_OBJECT:return"object";case oe.TYPE_BOOLEAN:return"boolean";case oe.TYPE_EXPREF:return"expref";case oe.TYPE_NULL:return"null";default:return}},this.functionValues=([r])=>Object.values(r),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[oe.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[oe.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[oe.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY]},{types:[oe.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[oe.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[oe.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY,oe.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[oe.TYPE_EXPREF]},{types:[oe.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[oe.TYPE_ARRAY_NUMBER,oe.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[oe.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[oe.TYPE_ARRAY_NUMBER,oe.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[oe.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[oe.TYPE_STRING,oe.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[oe.TYPE_ARRAY_STRING,oe.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[oe.TYPE_ARRAY]},{types:[oe.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[oe.TYPE_STRING]},{types:[oe.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[oe.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[oe.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[oe.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[oe.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[oe.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[oe.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,r,s){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:r.bind(this),_signature:s}}callFunction(t,r){const s=this.functionTable[t];if(s===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,r,s._signature),s._func.call(this,r)}validateInputSignatures(t,r){for(let s=0;s<r.length;s+=1)if("variadic"in r[s]&&s!==r.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${s+1} must occur last`)}validateArgs(t,r,s){var a,n;let o;this.validateInputSignatures(t,s);const i=s.filter(y=>{var w;return(w=!y.optional)!==null&&w!==void 0?w:!1}).length,l=(n=(a=s[s.length-1])===null||a===void 0?void 0:a.variadic)!==null&&n!==void 0?n:!1,c=r.length<i,d=r.length>s.length,u=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||d))throw o=s.length>1,new Error(`ArgumentError: ${t}() takes ${u}${i} argument${o&&"s"||""} but received ${r.length}`);let p,f,_;for(let y=0;y<s.length;y+=1){_=!1,p=s[y].types,f=this.getTypeName(r[y]);let w;for(w=0;w<p.length;w+=1)if(f!==void 0&&this.typeMatches(f,p[w],r[y])){_=!0;break}if(!_&&f!==void 0){const m=p.map(h=>this.TYPE_NAME_TABLE[h]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${y+1} to be type (${m}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,r,s){if(r===oe.TYPE_ANY)return!0;if(r===oe.TYPE_ARRAY_STRING||r===oe.TYPE_ARRAY_NUMBER||r===oe.TYPE_ARRAY){if(r===oe.TYPE_ARRAY)return t===oe.TYPE_ARRAY;if(t===oe.TYPE_ARRAY){let a;r===oe.TYPE_ARRAY_NUMBER?a=oe.TYPE_NUMBER:r===oe.TYPE_ARRAY_STRING&&(a=oe.TYPE_STRING);for(let n=0;n<s.length;n+=1){const o=this.getTypeName(s[n]);if(o!==void 0&&a!==void 0&&!this.typeMatches(o,a,s[n]))return!1}return!0}}else return t===r;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return oe.TYPE_STRING;case"[object Number]":return oe.TYPE_NUMBER;case"[object Array]":return oe.TYPE_ARRAY;case"[object Boolean]":return oe.TYPE_BOOLEAN;case"[object Null]":return oe.TYPE_NULL;case"[object Object]":return t.jmespathType===X.TOK_EXPREF?oe.TYPE_EXPREF:oe.TYPE_OBJECT;default:return}}createKeyFunction(t,r){if(!this._interpreter)return;const s=this._interpreter;return n=>{const o=s.visit(t,n);if(!r.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${r.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class Hm{constructor(){this._rootValue=null,this.runtime=new Um(this)}search(t,r){return this._rootValue=r,this.visit(t,r)}visit(t,r){let s,a,n,o,i,l,c,d,u,p,f;switch(t.type){case"Field":return r===null?null:Kr(r)?(l=r[t.name],l===void 0?null:l):null;case"Subexpression":for(n=this.visit(t.children[0],r),p=1;p<t.children.length;p+=1)if(n=this.visit(t.children[1],n),n===null)return null;return n;case"IndexExpression":return c=this.visit(t.children[0],r),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(r))return null;let _=t.value;return _<0&&(_=r.length+_),n=r[_],n===void 0&&(n=null),n;case"Slice":if(!Array.isArray(r))return null;const y=[...t.children],w=this.computeSliceParams(r.length,y),[m,h,g]=w;if(n=[],g>0)for(p=m;p<h;p+=g)n.push(r[p]);else for(p=m;p>h;p+=g)n.push(r[p]);return n;case"Projection":if(f=this.visit(t.children[0],r),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)a=this.visit(t.children[1],f[p]),a!==null&&u.push(a);return u;case"ValueProjection":if(f=this.visit(t.children[0],r),!Kr(f))return null;u=[];const v=Object.values(f);for(p=0;p<v.length;p+=1)a=this.visit(t.children[1],v[p]),a!==null&&u.push(a);return u;case"FilterProjection":if(f=this.visit(t.children[0],r),!Array.isArray(f))return null;const b=[],T=[];for(p=0;p<f.length;p+=1)s=this.visit(t.children[2],f[p]),Rs(s)||b.push(f[p]);for(let $=0;$<b.length;$+=1)a=this.visit(t.children[1],b[$]),a!==null&&T.push(a);return T;case"Comparator":switch(o=this.visit(t.children[0],r),i=this.visit(t.children[1],r),t.name){case X.TOK_EQ:n=La(o,i);break;case X.TOK_NE:n=!La(o,i);break;case X.TOK_GT:n=o>i;break;case X.TOK_GTE:n=o>=i;break;case X.TOK_LT:n=o<i;break;case X.TOK_LTE:n=o<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return n;case X.TOK_FLATTEN:const P=this.visit(t.children[0],r);if(!Array.isArray(P))return null;let k=[];for(p=0;p<P.length;p+=1)a=P[p],Array.isArray(a)?k=[...k,...a]:k.push(a);return k;case"Identity":return r;case"MultiSelectList":if(r===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],r));return u;case"MultiSelectHash":if(r===null)return null;u={};let S;for(p=0;p<t.children.length;p+=1)S=t.children[p],u[S.name]=this.visit(S.value,r);return u;case"OrExpression":return s=this.visit(t.children[0],r),Rs(s)&&(s=this.visit(t.children[1],r)),s;case"AndExpression":return o=this.visit(t.children[0],r),Rs(o)?o:this.visit(t.children[1],r);case"NotExpression":return o=this.visit(t.children[0],r),Rs(o);case"Literal":return t.value;case X.TOK_PIPE:return c=this.visit(t.children[0],r),this.visit(t.children[1],c);case X.TOK_CURRENT:return r;case X.TOK_ROOT:return this._rootValue;case"Function":const x=[];for(let $=0;$<t.children.length;$+=1)x.push(this.visit(t.children[$],r));return this.runtime.callFunction(t.name,x);case"ExpressionReference":const C=t.children[0];return C.jmespathType=X.TOK_EXPREF,C;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,r){let[s,a,n]=r;if(n===null)n=1;else if(n===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=n<0;return s=s===null?o?t-1:0:this.capSliceRange(t,s,n),a=a===null?o?-1:t:this.capSliceRange(t,a,n),[s,a,n]}capSliceRange(t,r,s){let a=r;return a<0?(a+=t,a<0&&(a=s<0?-1:0)):a>=t&&(a=s<0?t-1:t),a}}const jo=new Hm,qm=oe.TYPE_ANY,Gm=oe.TYPE_ARRAY,Vm=oe.TYPE_ARRAY_NUMBER,Km=oe.TYPE_ARRAY_STRING,Ym=oe.TYPE_BOOLEAN,Wm=oe.TYPE_EXPREF,Jm=oe.TYPE_NULL,Xm=oe.TYPE_NUMBER,Qm=oe.TYPE_OBJECT,Zm=oe.TYPE_STRING;function eg(e){return fu.parse(e)}function tg(e){return pu.tokenize(e)}const rg=(e,t,r)=>{jo.runtime.registerFunction(e,t,r)};function sg(e,t){const r=fu.parse(t);return jo.search(r,e)}const ag=jo,lt={compile:eg,registerFunction:rg,search:sg,tokenize:tg,TreeInterpreter:ag,TYPE_ANY:qm,TYPE_ARRAY_NUMBER:Vm,TYPE_ARRAY_STRING:Km,TYPE_ARRAY:Gm,TYPE_BOOLEAN:Ym,TYPE_EXPREF:Wm,TYPE_NULL:Jm,TYPE_NUMBER:Xm,TYPE_OBJECT:Qm,TYPE_STRING:Zm},kt=class kt{static async appendPrompt(t,r){el(t,LZString.compressToUTF16(JSON.stringify(r))).then(async()=>{Nr().then(s=>{s=s.filter(a=>a.indexOf(this.DELIM_PROMPTS)!=-1),s.length>kt.MAX_PROMPTS_VALS&&$n(s[0])})}).catch(s=>console.error("~IDB Failed | ",s))}static async appendVIR_products(t){t.forEach(r=>{let s=JSON.stringify({ts:Date.now(),name:r[1]});el(r[0],LZString.compressToUTF16(s)).then(async()=>{}).catch(a=>console.error("~IDB Failed | ",a))})}static async keys(t,r){Nr().then(s=>{s=s.filter(a=>a.indexOf(t)!=-1),r&&r(s)})}static async get(t,r){Lm(t).then(s=>{try{s=JSON.parse(LZString.decompressFromUTF16(s))}catch{}finally{r&&r(s)}})}static async entries(t,r){Nm().then(s=>{s=s.filter(a=>a[0].indexOf(t)!=-1),s=s.map(a=>{try{a[1]=JSON.parse(LZString.decompressFromUTF16(a[1]))}catch{}finally{}return a}),r&&r(s)})}static compr(t){return t}static decompr(t){return t}static async act(t,r,s){let a="";switch(t){case"PROMPTS_COUNT":Nr().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),a=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,a&&s&&s(a)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":Nr().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(kt.DELIM_PROMPTS)[0]==r&&$n(i)})}),a="The Prompt history has been removed for UPI: "+r,console.log("~ PROMPTS_CLEAR ------ | ",a);break;case"VIR_COUNT":Nr().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),a=`There are ${o.length} VNR names in local IDB storage.`,a&&s&&s(a)});break;case"VIR_CLEAR":let n=0;await Nr().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(kt.DELIM_VIR)[0]==r&&(n++,$n(i))})}),a=`The VNR Names have been removed for UPI: ${r} (Total Deleted: ${n})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),a="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",a),a&&s&&s(a)}};kt.MAX_TYPEAHEAD_ROWS=14,kt.MAX_PROMPTS_VALS=50,kt.DELIM_PROMPTS="_",kt.DELIM_VIR="-",kt.DELIM_SNDX="|";let kr=kt;const we=wh("AppState",()=>{const e=Mt(),t="DEV",r="BMA Tourney v0.0.5 ",s="#app",a=Kt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let n=Kt([]),o=Kt([]);const i=S=>{n.push(S),n.length>10&&(n.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${n.length}`)},l=S=>{o.push(S),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const S=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",S),S)try{const x=JSON.parse(S);return console.log("[appState] Parsed session_user:",x),x}catch(x){console.error("Failed to parse session_user from localStorage:",x)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=ot({session_app:{online:!0,route:"",version:r+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=ot({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",kr.compr(JSON.stringify(u.value.features)));else{let S=kr.decompr(localStorage.getItem("feature_flags"));S=Object.assign(u.value.features,JSON.parse(S));for(let x in S)typeof u.value?.env_override[t][x]<"u"&&(S[x]=u.value.env_override[t][x]);localStorage.setItem("feature_flags",kr.compr(JSON.stringify(u.value.features=S)))}},f=()=>{const S=document.querySelector(s);if(S){const x=S.dataset;for(let C in x){const $=C.replace(/^sync/,""),M=Object.keys(u.value.features).find(j=>j.toLowerCase()===$.toLowerCase());if(M){const j=u.value.features[M]?.state;j&&(x[C]=j)}}}},_=(S="Theme",x={state:"dark"})=>{const C=document.querySelector(s);C&&(C.dataset["sync"+S]=x.state)},y=(S="Theme",x={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&x){let $=JSON.parse(kr.decompr(localStorage.getItem("feature_flags")));$[S]={state:x.state},localStorage.setItem("feature_flags",kr.compr(JSON.stringify(u.value.features=$))),_(S,x),de.publish("APP.ROUTE_SYNC",`{ "${S}": ${JSON.stringify(x)}}`)}},w=S=>{const x=u.value?.features?.Lang?.state;let C=g.value.microcopy.language.filter($=>$.code==x)[0]?.copy;if(C=C.filter($=>$[0]==S)[0],C)return C[1]},m=(S=":version")=>{let[x,C,$]=S.split(" ");switch(x=x.toLocaleLowerCase(),$=="true"&&($=!0),$=="false"&&($=!1),x){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":y(C,{state:$});break;case":route":neodigmToast.q(`route ${C}`,"brand"),e.push({name:C});break}};p(),f();const h=Kt({designer:"guided_tour",notifications:{unread:0}}),g=ot({sports:mt,microcopy:Rm.getMeta()}),v=st(()=>d.value.session_user.fname+" "+d.value.session_user.lname),b=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},T=()=>{localStorage.removeItem("session_user")};function P(S){return d.value.session_user.authenticated=!0,d.value.session_user.token=S,b(),d.value.session_app.route="chat"}function k(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",T(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:h,appMeta:g,appSession:d,clearSessionUser:T,concatFirstLast:v,coreBetSlip:o,coreTourn:n,doCLI:m,doLogin:P,doLogout:k,hierTopics:a,i18n:w,pushCoreTourn:i,pushcoreBetSlip:l,saveSessionUser:b,setFeaturePersistPub:y}}),Rn="mvvBrand",ng=400,Ts={scanIntervalId:null,processedElements:new WeakSet,init(){const t=new URLSearchParams(window.location.search).get("brand");t!==null&&(t==="null"||t===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(t)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(e){if(e)try{localStorage.setItem(Rn,e),console.log("[BrandManager] Brand token set:",e)}catch(t){console.error("[BrandManager] Failed to set brand:",t)}},getBrand(){try{return localStorage.getItem(Rn)}catch(e){return console.error("[BrandManager] Failed to get brand:",e),null}},clearBrand(){localStorage.removeItem(Rn),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const e=this.getBrand();return e?{"x-m5t-brand":e}:{}},hydrateBrandElements(){const e=this.getBrand();if(!e)return;const t=document.querySelectorAll("[data-mvv-brand]");t.forEach(r=>{r.getAttribute("data-mvv-brand")==="token"&&(r.textContent=e)}),t.length>0&&console.log(`[BrandManager] Hydrated ${t.length} brand elements with token:`,e)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},ng),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const e=this.getBrand();if(!e)return;const t=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(r=>{t.push(r)}),document.querySelectorAll("*").forEach(r=>{r.shadowRoot&&r.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{t.push(s)})}),t.forEach(r=>{if(this.processedElements.has(r))return;const s=r.getAttribute("src");if(s&&!s.includes("&brand=")){const a=`${s}&brand=${e}`;r.setAttribute("src",a),this.processedElements.add(r),console.log("[BrandManager] Updated src for element:",r)}})}},We=class We{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),We.setTJO(null),location.reload()}static async doSignin(t,r=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",s)).json();n.ok?(typeof mvvLegit<"u"&&mvvLegit&&n?.accessToken&&mvvLegit.doSignin(n?.accessToken),r&&r(n)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,r=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",s)).json();if(n.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),r&&r(n);else{const o=n?.error||n?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),r&&r(n)}}static async checkUserName(t,r=null){const s={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",s)).json();return r&&r(n),n}static async resetHash(t,r,s=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const a=typeof neodigmUtils<"u"?neodigmUtils.genHash(r):r,n={method:"POST",body:JSON.stringify({guid:t,hash:a}),headers:We.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",n)).json();s&&s(i)}static genHeaders(t={}){let r={};r.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),r.Authorization="Bearer expired",r["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(r.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(r.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(r.company=SessionAcctEntity.oEntities.data.entity.company);const s=Ts.getBrandHeader();return Object.assign(r,s),r}static async fetchTournaments(t=null){const r={method:"GET",headers:We.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",r)).json();return t&&t(a),a}static async fetchBetSlips(t,r="",s="",a=null){let n=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;r&&(n+=`/${r}`),r&&s&&(n+=`/${s}`);const o={method:"GET",headers:We.genHeaders()},l=await(await fetch(this.API_baseURI+n,o)).json();return a&&a(l),l}static async fetchLeaderboard(t,r="",s=null){let a=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;r&&(a+=`&user=${r}`);const n={method:"GET",headers:We.genHeaders()},i=await(await fetch(this.API_baseURI+a,n)).json();return s&&s(i),i}static async fetchGlobalLeaderboard(t=null){const r=`/m5t/${this.API_ver}/coreLeaderboard`,s={method:"GET",headers:We.genHeaders()},n=await(await fetch(this.API_baseURI+r,s)).json();return t&&t(n),n}static async postBetSlips(t,r=null){const s=t.map(n=>{const o={method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(i=>i.json())}),a=await Promise.all(s);return r&&r(a),a}static async fetchPromotions(t=null){const r={method:"GET",headers:We.genHeaders()},a=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",r)).json();return t&&t(a),a}};We.API_baseURI="https://machfive-bmacdev-rest.onrender.com",We.API_ver="v5",We.jsState={},We.jsMeta={},We.jsTJO=null;let Ae=We;const Ss={shootConfetti(){if(typeof confetti=="function"){let s=function(a,n){confetti({...t,...n,particleCount:Math.floor(e*a)})};var r=s,e=200,t={origin:{y:.7}};s(.25,{zIndex:304,spread:26,startVelocity:55}),s(.2,{zIndex:304,spread:60}),s(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),s(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),s(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let r=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(r=new Date(e+"Z"));const s={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return r.toLocaleString(void 0,{...s,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let r={};for(const s in t)e[s]&&t[s]!=e[s]&&(r[s]=e[s]);return Object.keys(r).length>0?r:t},genLorumIpsum(e=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},hr=(e,t)=>{const r=e.__vccOpts||e;for(const[s,a]of t)r[s]=a;return r},og={class:"auth-page"},ig={__name:"splash_route",setup(e){const t=Mt(),r=cu();return we(),setTimeout(()=>{r&&r.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(s,a)=>(Xe(),ut("div",og,[...a[0]||(a[0]=[Rr('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),re("div",{class:"auth-page-right"},[re("div",{class:"auth-card splash-content"},[re("p",{class:"splash-message"},"Loading Tournaments..."),re("br"),re("br"),re("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[re("div")])])],-1)])]))}},sl=hr(ig,[["__scopeId","data-v-994bad53"]]);class lg{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(r=>{let s=!1;for(const a of r){if(a.attributeName==="data-sync-theme"){const n=t.getAttribute("data-sync-theme")||"dark";n!==this._theme&&(this._theme=n,s=!0)}if(a.attributeName==="data-sync-motif"){const n=t.getAttribute("data-sync-motif")||"brand";n!==this._motif&&(this._motif=n,s=!0)}if(a.attributeName==="data-sync-lang"){const n=t.getAttribute("data-sync-lang")||"en";n!==this._lang&&(this._lang=n,s=!0)}}s&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(r){console.warn("[BMAThemeResolver] Listener error:",r)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const $e=new lg().init(),Uo={mobile:"(orientation: portrait), (max-width: 768px)",wide:"(min-width: 1280px)"};function ft(){return`
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
  `}function mr(){return`
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
  `}class cg extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=$e.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=$e.theme;let r=this.getAttribute("data-sport-group")||"Soccer",s,a;r==="Multi"?(s="Multi",a=`var(--sport-icon__Multi--${t})`):(s=r.replaceAll(" ","_"),a=`var(--sport-icon__${s}--${t})`),this.shadowRoot.innerHTML=`
      <style>
        ${ft()}

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

        :host([data-sport-group="${r}"]) {
          background-image: ${a};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",cg);class dg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=$e.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,r={}){const s=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...r}});this.dispatchEvent(s)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const r=t.target.closest(".btn-info"),s=t.target.closest(".btn-join"),a=t.target.closest(".btn-play"),n=t.target.closest("bma-sport-icon");if(r){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(s){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(a){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(n){t.stopPropagation();const o=n.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,r,s){r!==s&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const r=t.scrollHeight-t.clientHeight,s=this.getAttribute("data-compact")==="true";!s&&r>2?this.setAttribute("data-compact","true"):s&&r<-10&&this.removeAttribute("data-compact")})}getTheme(){return $e.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const r=JSON.parse(t);return Array.isArray(r)?r.find(a=>Array.isArray(a))?.length||"0":r?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const r=JSON.parse(t);return Array.isArray(r)?r.find(a=>Array.isArray(a))||[]:r?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const r=JSON.parse(t);if(Array.isArray(r)){const s=r.find(n=>n&&typeof n=="object"&&!Array.isArray(n));return{current:r.find(n=>Array.isArray(n))?.length||0,max:parseInt(s?.max)||100}}return{current:r?.guids?.length||0,max:r?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const r=document.getElementById("app")?.dataset?.userGuid;return r?this.entitiesGuids.includes(r):!1}getUserBadge(){const r=document.getElementById("app")?.dataset?.userGuid;if(!r)return null;const s=this.getAttribute("data-bma-tourn-tags");if(!s)return null;try{const a=JSON.parse(s);if(!Array.isArray(a))return null;const n=a.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===r&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[r]&&o[r].startsWith("--badge__ribbon--"))));return n&&(n.badge||n[r])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const r=t.match(/--badge__ribbon--(\w+)/);return r?r[1]:""}getSportInfo(t){const r=mt.find(s=>s.key===t);return r?{title:r.title,description:r.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(s=>{const a=s.title||"Match";let n="TBD";if(s.scheduled_at)try{n=new Date(s.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{n=s.scheduled_at}return`  ${a} @ ${n}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const r=JSON.parse(t);return Array.isArray(r)?r.map(s=>typeof s=="object"&&s.sport_key?s.sport_key:s):[r]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const r=Math.min(t.length,3);let s="";for(let a=0;a<r;a++){const n=t[a].key,o=mt.find(l=>l.key===n),i=o?o.group:"default";s+=`<bma-sport-icon sport="${n}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(s+=`<span class="sport-count">+${t.length-3}</span>`),s}render(){const t=this.getTheme(),r=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${ft()}
        ${mr()}
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

      <div class="card" data-sync-theme="${r}">
        <div class="chevron-cover"></div>
        <div class="card-header">
          <div class="header-top">
            <span class="sport-tag">${this.sportsDisplay}</span>
            <span class="header-badges">
              ${(()=>{const a=this.gameModeBadge;return a?`<span class="game-mode-badge"><svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; opacity: 0.7;"><path d="M21.58 16.09l-1.09-7.66C20.21 6.46 18.52 5 16.53 5H7.47C5.48 5 3.79 6.46 3.51 8.43l-1.09 7.66C2.2 17.63 3.39 19 4.94 19c.68 0 1.32-.27 1.8-.75L9 16h6l2.25 2.25c.48.48 1.13.75 1.8.75 1.56 0 2.75-1.37 2.53-2.91zM11 11H9v2H8v-2H6v-1h2V8h1v2h2v1zm4 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2-3c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/></svg> ${a.label}</span>`:""})()}
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
<output class="card-focus__feedback">
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
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",dg);class ug extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,r,s){if(r!==s){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Ss.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",r=parseFloat(t);return isNaN(r)?"0.00":r.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{de.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const r=this.shadowRoot.querySelector(".content_stake_text input");r&&r.addEventListener("input",s=>{const a=s.target.value;this.setAttribute("data-stake",a)})}render(){this.shadowRoot.innerHTML=`
      <style>
        ${ft()}
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",ug);class pg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(r){return console.error("[bma-bet-match-card] Error parsing odds_markets:",r),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return $e.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(r){return console.error("[bma-bet-match-card] Error parsing scoreboard:",r),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const r=mt.find(s=>s.key===t);return r?r.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(r){return console.error("[bma-bet-match-card] Error parsing tournament tags:",r),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const s=this.scoreboard;if(!s||!s.time_remaining)return!1;const a=s.time_remaining.toLowerCase();return a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=$e.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const r=this.shadowRoot?.querySelector(".countdown");r&&(r.textContent=t)}attributeChangedCallback(t,r,s){r!==s&&this.render()}formatDate(t){if(!t)return"TBD";let r=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(r=new Date(t+"Z")),r.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,r=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&r.setTime(new Date(this.scheduledAt+"Z").getTime());const s=r-t;if(s<=0)return"";const a=Math.floor(s/(1e3*60*60)),n=Math.floor(s%(1e3*60*60)/(1e3*60));return a>24?`${Math.floor(a/24)}d ${a%24}h`:a>0?`${a}h ${n}m`:n>5?`${n} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const r=this.scoreboard;if(r&&r.time_remaining){const s=r.time_remaining.toLowerCase();if(s==="final")return{type:"final",text:"Final",color:"#969696"};if(s==="in progress"||s.includes("q")||s.includes("half")||s.includes("period")){const a=r.home_score!==void 0&&r.home_score!==null||r.away_score!==void 0&&r.away_score!==null,n=r.period!==void 0&&r.period!==null&&r.period!==0;if(a||n)return{type:"live",text:r.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let s=this.scheduledAt;if(!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z"),new Date(s)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,r,s,a,n){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:r,team:s,price:a,point:n,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderButton(t,r,s,a,n=!1){if(!s)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const o=s.price,i=s.point;let l="";return t==="spread"?l=`${i>0?`+${i}`:i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?l=o:t==="total"&&(l=`${a}${i}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${n?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${r}"
                    data-price="${o}"
                    ${i?`data-point="${i}"`:""}
                    ${n?'data-disabled="true"':""}>
            ${l}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const r=this.isMatchInProgressLocked(),s=this.isDisabled||r,a=this.getGameStatus(),n=this.scoreboard,o=n?.home_score||0,i=n?.away_score||0,l=a?.type==="live"||a?.type==="final",c=parseInt(o),d=parseInt(i),u=a?.type==="final",p=a?.type==="live",f=l&&u&&c>d,_=l&&u&&d>c,y=l&&p&&c>d,w=l&&p&&d>c,m=t?.spreads?.outcomes?.find(P=>P.name===this.homeTeam),h=t?.spreads?.outcomes?.find(P=>P.name===this.awayTeam),g=t?.h2h?.outcomes?.find(P=>P.name===this.homeTeam),v=t?.h2h?.outcomes?.find(P=>P.name===this.awayTeam),b=t?.totals?.outcomes?.find(P=>P.name==="Over"),T=t?.totals?.outcomes?.find(P=>P.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                ${ft()}
                ${mr()}

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

            <div class="card ${a?`card--${a.type}`:""}">
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
                    ${a&&a.type!=="scheduled"?`
                        <div class="status-badge status-badge--${a.type}">
                            ${a.type==="live"?'<span class="live-dot"></span>':""}
                            <span class="countdown">${a.text}</span>
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
                        <div class="team team--home ${f?"team--winner":""} ${_?"team--loser":""}">
                            <span class="team-name">${this.homeTeam}</span>
                            ${l?`<span class="team-score ${y?"score--leading":""} ${w?"score--trailing":""}">${o}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","home",m,null,s)}
                                ${this.renderButton("money","home",g,null,s)}
                                ${this.renderButton("total","under",T,"U",s)}
                            </div>
                        `}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${_?"team--winner":""} ${f?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${l?`<span class="team-score ${w?"score--leading":""} ${y?"score--trailing":""}">${i}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","away",h,null,s)}
                                ${this.renderButton("money","away",v,null,s)}
                                ${this.renderButton("total","over",b,"O",s)}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(P=>{const k=P.dataset.betType,S=P.dataset.team,x=P.dataset.price,C=P.dataset.point||null;P.addEventListener("click",$=>this.handleButtonClick($,k,S,x,C))})}}customElements.define("bma-bet-match-card",pg);class fg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=$e.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,r,s){r!==s&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(r){return console.warn("[bma-match-status] Failed to parse scoreboard data:",r),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=mt.find(r=>r.key===this.sportId);return t?t.group:""}get theme(){return $e.theme}get isDark(){return $e.isDark}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let r=this.scheduledAt;!r.includes("Z")&&!r.match(/[+-]\d{2}:\d{2}$/)&&(r=r+"Z");const a=new Date(r)-t;if(a<=0)return"";const n=Math.floor(a/(1e3*60*60)),o=Math.floor(a%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,r=this.homeScore!==null&&this.awayScore!==null;let s=!1;if(this.scheduledAt){let i=this.scheduledAt;!i.includes("Z")&&!i.match(/[+-]\d{2}:\d{2}$/)&&(i=i+"Z");const l=new Date(i),c=new Date(Date.now()-300*1e3);s=l<c}let a="UPCOMING",n=null;if(t?.time_remaining){const i=t.time_remaining;i==="Final"?(a="FINAL",n="Final"):i==="In Progress"?(a="IN_PROGRESS",n="In Progress"):(a="IN_PROGRESS",n=i)}else r&&s?(a="FINAL",n="Final"):(a="UPCOMING",n="Upcoming");const o=a==="UPCOMING"?this.getCountdownText():"";return{status:a,timeRemaining:n,countdown:o}}render(){const{status:t,timeRemaining:r,countdown:s}=this.getMatchStatus(),a=this.homeScore!==null&&this.awayScore!==null,n=this.scheduledAt?Ss.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=parseInt(this.homeScore),i=parseInt(this.awayScore),l=a&&t==="FINAL"&&o>i,c=a&&t==="FINAL"&&i>o;this.shadowRoot.innerHTML=`
      <style>
        ${ft()}

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
          ${r||t}${s?`<span class="countdown-badge">${s}</span>`:""}
        </span>
      </div>
      <div class="match-details">
        <div class="detail-row">Scheduled: ${n}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
      </div>
    `}}customElements.define("bma-match-status",fg);class or extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(r){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",r),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(r){return console.error("[bma-leaderboard-card] Error parsing user_matches:",r),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=$e.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,r,s){r!==s&&(this.render(),this.attachEventListeners())}toggleExpanded(){or.currentlyExpanded&&or.currentlyExpanded!==this&&or.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),r=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),r.classList.add("expanded"),or.currentlyExpanded=this):(t.classList.remove("open"),r.classList.remove("expanded"),or.currentlyExpanded===this&&(or.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),r=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),r&&r.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",r=>{r.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let r=0,s=0,a=0,n=0,o=0;return t.forEach(i=>{const l=i.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?r++:s++:(a++,n+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:r,losses:s,pending:a,total:r+s+a,pendingStakes:n,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,r=this.userMatches,s=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const a=t.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(s)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(a.length===0){if(!s){const l=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);if(l>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${l} pending bet${l!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const n={};r.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(n[c]=l)});const o={};a.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=n[c];if(d){o[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=mt.find(f=>f.key===u);o[c].sportKey=p?.group||"default"}o[c].bets.push(l)});let i="";if(Object.keys(o).forEach(l=>{const c=o[l],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;i+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const _=f.bet||[];if(_.length===0)return;const y=_[0];Object.keys(y).filter(m=>m!=="short_title").forEach(m=>{const h=y[m];if(!h||typeof h!="object")return;const g=(h.type||"").toUpperCase(),v=parseFloat(h.stake||h.wager||0).toFixed(2),b=h.odds||"-",T=b>0?`+${b}`:`${b}`,P=parseFloat(h.payout||0).toFixed(2),k=h.reconciled===!0;let S="pending",x="Pending";k&&Number(P)>0?(S="won",x="Won"):k&&Number(P)===0?(S="lost",x="Lost"):k&&(S="reconciled",x="Settled"),i+=`<div class="bet-item bet-item--${S}">
                        <div class="bet-item__header">
                            <span class="bet-item__team">${m}</span>
                            <span class="bet-status-badge ${S}">${x}</span>
                        </div>
                        <div class="bet-item__detail">
                            <span>${g}</span>
                            <span>Stake: $${v}</span>
                            <span>Odds: ${T}</span>
                            <span class="${S==="won"?"payout-win":S==="lost"?"payout-loss":""}">Payout: $${P}</span>
                        </div>
                    </div>`})})}),!s){const l=t.reduce((c,d)=>{const u=(d.bet||[])[0];if(!u)return c;const p=Object.keys(u).filter(f=>f!=="short_title");return c+p.filter(f=>u[f]?.reconciled!==!0).length},0);l>0&&(i+=`<p class="hidden-bets-note">+ ${l} pending bet${l!==1?"s":""} hidden until settled</p>`)}return i}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",r=this.unqualified?"leaderboard-card--unqualified":"",s=parseFloat(this.startingDollars||0),a=this.combinedBetslips;let n=0,o=0,i=0;a.forEach(y=>{const w=y.bet||[];if(w.length===0)return;const m=w[0];Object.keys(m).filter(h=>h!=="short_title").forEach(h=>{const g=m[h];if(!g||typeof g!="object")return;n+=parseFloat(g.stake||0);const v=parseFloat(g.payout||0);g.reconciled===!0?i+=v:o+=v})});const l=Math.max(0,s-n),c=s-n+o+i,d=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",u=c-s,p=u>=0?"+":"",f=u>0?"profit-up":u<0?"profit-down":"profit-even",_=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${ft()}
                ${mr()}

                :host {
                    display: block;
                    margin-bottom: 0.75rem;
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

            <div class="leaderboard-card ${t} ${r}">
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
                        <div class="kpi-card__value">${_.wins}W - ${_.losses}L</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">At Risk</div>
                        <div class="kpi-card__value ${_.pending>0?"kpi-card__value--risk":"kpi-card__value--none"}">${_.pending>0?"TD$ "+_.pendingStakes.toFixed(0):"TD$ 0"}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Max Win</div>
                        <div class="kpi-card__value ${_.pending>0?"kpi-card__value--max-win":"kpi-card__value--none"}">${_.pending>0?"TD$ "+_.pendingMaxPayout.toFixed(0):"TD$ 0"}</div>
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
        `}}customElements.define("bma-leaderboard-card",or);class hu{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:r,scope:s}=t.Bet,{home_team_id:a,home_team_score:n,away_team_id:o,away_team_score:i}=t.Match,l=r?.toUpperCase()||"",c=parseFloat(n)||0,d=parseFloat(i)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${a} (${c})`,away:`${o} (${d})`,scope:s}),l){case"MONEY":return this._evaluateMoneyline(s.team_id,a,o,c,d);case"SPREAD":return this._evaluateSpread(s.team_id,s.point,a,o,c,d);case"TOTAL":return this._evaluateTotal(s.over,s.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,r,s,a,n){const o=t===r,i=t===s;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=a>n,c=n>a;if(a===n)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,r,s,a,n,o){const i=t===s,l=t===a;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(r)||0;let d=n,u=o;i?d=n+c:u=o+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const y=i&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${y?"WON":"LOST"}`),y}static _evaluateTotal(t,r,s,a){const n=s+a,o=t&&t!=="";if(!o&&!(r&&r!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?t:r);if(n===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=n>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${n}) - ${c?"WON":"LOST"}`)):(c=n<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${n}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:r,odds:s,stake:a}=t.Bet,n=r?.toUpperCase()||"",o=parseFloat(s)||0,i=parseFloat(a)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(n){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",n),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,r){let s=0;return t>0?s=r*(t/100):t<0?s=r/(Math.abs(t)/100):s=0,r+s}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function al(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Ho(e={},t={}){const r=["__proto__","constructor","prototype"];Object.keys(t).filter(s=>r.indexOf(s)<0).forEach(s=>{typeof e[s]>"u"?e[s]=t[s]:al(t[s])&&al(e[s])&&Object.keys(t[s]).length>0&&Ho(e[s],t[s])})}const mu={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function $t(){const e=typeof document<"u"?document:{};return Ho(e,mu),e}const hg={document:mu,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function Ye(){const e=typeof window<"u"?window:{};return Ho(e,hg),e}function mg(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function gg(e){const t=e;Object.keys(t).forEach(r=>{try{t[r]=null}catch{}try{delete t[r]}catch{}})}function gu(e,t=0){return setTimeout(e,t)}function Na(){return Date.now()}function bg(e){const t=Ye();let r;return t.getComputedStyle&&(r=t.getComputedStyle(e,null)),!r&&e.currentStyle&&(r=e.currentStyle),r||(r=e.style),r}function yg(e,t="x"){const r=Ye();let s,a,n;const o=bg(e);return r.WebKitCSSMatrix?(a=o.transform||o.webkitTransform,a.split(",").length>6&&(a=a.split(", ").map(i=>i.replace(",",".")).join(", ")),n=new r.WebKitCSSMatrix(a==="none"?"":a)):(n=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=n.toString().split(",")),t==="x"&&(r.WebKitCSSMatrix?a=n.m41:s.length===16?a=parseFloat(s[12]):a=parseFloat(s[4])),t==="y"&&(r.WebKitCSSMatrix?a=n.m42:s.length===16?a=parseFloat(s[13]):a=parseFloat(s[5])),a||0}function Ms(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function _g(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function tt(...e){const t=Object(e[0]);for(let r=1;r<e.length;r+=1){const s=e[r];if(s!=null&&!_g(s)){const a=Object.keys(Object(s)).filter(n=>n!=="__proto__"&&n!=="constructor"&&n!=="prototype");for(let n=0,o=a.length;n<o;n+=1){const i=a[n],l=Object.getOwnPropertyDescriptor(s,i);l!==void 0&&l.enumerable&&(Ms(t[i])&&Ms(s[i])?s[i].__swiper__?t[i]=s[i]:tt(t[i],s[i]):!Ms(t[i])&&Ms(s[i])?(t[i]={},s[i].__swiper__?t[i]=s[i]:tt(t[i],s[i])):t[i]=s[i])}}}return t}function Ir(e,t,r){e.style.setProperty(t,r)}function bu({swiper:e,targetPosition:t,side:r}){const s=Ye(),a=-e.translate;let n=null,o;const i=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const l=t>a?"next":"prev",c=(u,p)=>l==="next"&&u>=p||l==="prev"&&u<=p,d=()=>{o=new Date().getTime(),n===null&&(n=o);const u=Math.max(Math.min((o-n)/i,1),0),p=.5-Math.cos(u*Math.PI)/2;let f=a+p*(t-a);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[r]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[r]:f})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(d)};d()}function Ot(e,t=""){const r=Ye(),s=[...e.children];return r.HTMLSlotElement&&e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),t?s.filter(a=>a.matches(t)):s}function vg(e,t){const r=[t];for(;r.length>0;){const s=r.shift();if(e===s)return!0;r.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function wg(e,t){const r=Ye();let s=t.contains(e);return!s&&r.HTMLSlotElement&&t instanceof HTMLSlotElement&&(s=[...t.assignedElements()].includes(e),s||(s=vg(e,t))),s}function Ia(e){try{console.warn(e);return}catch{}}function Da(e,t=[]){const r=document.createElement(e);return r.classList.add(...Array.isArray(t)?t:mg(t)),r}function Tg(e,t){const r=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;t?s.matches(t)&&r.push(s):r.push(s),e=s}return r}function Sg(e,t){const r=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;t?s.matches(t)&&r.push(s):r.push(s),e=s}return r}function ir(e,t){return Ye().getComputedStyle(e,null).getPropertyValue(t)}function Ba(e){let t=e,r;if(t){for(r=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(r+=1);return r}}function yu(e,t){const r=[];let s=e.parentElement;for(;s;)t?s.matches(t)&&r.push(s):r.push(s),s=s.parentElement;return r}function go(e,t,r){const s=Ye();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Dt(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function nl(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:r=>r}).createHTML(t):e.innerHTML=t}let Mn;function xg(){const e=Ye(),t=$t();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function _u(){return Mn||(Mn=xg()),Mn}let Ln;function Eg({userAgent:e}={}){const t=_u(),r=Ye(),s=r.navigator.platform,a=e||r.navigator.userAgent,n={ios:!1,android:!1},o=r.screen.width,i=r.screen.height,l=a.match(/(Android);?[\s\/]+([\d.]+)?/);let c=a.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=a.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&a.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=s==="Win32";let f=s==="MacIntel";const _=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&_.indexOf(`${o}x${i}`)>=0&&(c=a.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!p&&(n.os="android",n.android=!0),(c||u||d)&&(n.os="ios",n.ios=!0),n}function vu(e={}){return Ln||(Ln=Eg(e)),Ln}let Nn;function kg(){const e=Ye(),t=vu();let r=!1;function s(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(s()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));r=l<16||l===16&&c<2}}const a=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),n=s(),o=n||a&&t.ios;return{isSafari:r||n,needPerspectiveFix:r,need3dFix:o,isWebView:a}}function wu(){return Nn||(Nn=kg()),Nn}function Pg({swiper:e,on:t,emit:r}){const s=Ye();let a=null,n=null;const o=()=>{!e||e.destroyed||!e.initialized||(r("beforeResize"),r("resize"))},i=()=>{!e||e.destroyed||!e.initialized||(a=new ResizeObserver(d=>{n=s.requestAnimationFrame(()=>{const{width:u,height:p}=e;let f=u,_=p;d.forEach(({contentBoxSize:y,contentRect:w,target:m})=>{m&&m!==e.el||(f=w?w.width:(y[0]||y).inlineSize,_=w?w.height:(y[0]||y).blockSize)}),(f!==u||_!==p)&&o()})}),a.observe(e.el))},l=()=>{n&&s.cancelAnimationFrame(n),a&&a.unobserve&&e.el&&(a.unobserve(e.el),a=null)},c=()=>{!e||e.destroyed||!e.initialized||r("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){i();return}s.addEventListener("resize",o),s.addEventListener("orientationchange",c)}),t("destroy",()=>{l(),s.removeEventListener("resize",o),s.removeEventListener("orientationchange",c)})}function Ag({swiper:e,extendParams:t,on:r,emit:s}){const a=[],n=Ye(),o=(c,d={})=>{const u=n.MutationObserver||n.WebkitMutationObserver,p=new u(f=>{if(e.__preventObserver__)return;if(f.length===1){s("observerUpdate",f[0]);return}const _=function(){s("observerUpdate",f[0])};n.requestAnimationFrame?n.requestAnimationFrame(_):n.setTimeout(_,0)});p.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),a.push(p)},i=()=>{if(e.params.observer){if(e.params.observeParents){const c=yu(e.hostEl);for(let d=0;d<c.length;d+=1)o(c[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},l=()=>{a.forEach(c=>{c.disconnect()}),a.splice(0,a.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),r("init",i),r("destroy",l)}var Og={on(e,t,r){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const a=r?"unshift":"push";return e.split(" ").forEach(n=>{s.eventsListeners[n]||(s.eventsListeners[n]=[]),s.eventsListeners[n][a](t)}),s},once(e,t,r){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function a(...n){s.off(e,a),a.__emitterProxy&&delete a.__emitterProxy,t.apply(s,n)}return a.__emitterProxy=t,s.on(e,a,r)},onAny(e,t){const r=this;if(!r.eventsListeners||r.destroyed||typeof e!="function")return r;const s=t?"unshift":"push";return r.eventsAnyListeners.indexOf(e)<0&&r.eventsAnyListeners[s](e),r},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const r=t.eventsAnyListeners.indexOf(e);return r>=0&&t.eventsAnyListeners.splice(r,1),t},off(e,t){const r=this;return!r.eventsListeners||r.destroyed||!r.eventsListeners||e.split(" ").forEach(s=>{typeof t>"u"?r.eventsListeners[s]=[]:r.eventsListeners[s]&&r.eventsListeners[s].forEach((a,n)=>{(a===t||a.__emitterProxy&&a.__emitterProxy===t)&&r.eventsListeners[s].splice(n,1)})}),r},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let r,s,a;return typeof e[0]=="string"||Array.isArray(e[0])?(r=e[0],s=e.slice(1,e.length),a=t):(r=e[0].events,s=e[0].data,a=e[0].context||t),s.unshift(a),(Array.isArray(r)?r:r.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(i=>{i.apply(a,[o,...s])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(i=>{i.apply(a,s)})}),t}};function Cg(){const e=this;let t,r;const s=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=s.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?r=e.params.height:r=s.clientHeight,!(t===0&&e.isHorizontal()||r===0&&e.isVertical())&&(t=t-parseInt(ir(s,"padding-left")||0,10)-parseInt(ir(s,"padding-right")||0,10),r=r-parseInt(ir(s,"padding-top")||0,10)-parseInt(ir(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(r)&&(r=0),Object.assign(e,{width:t,height:r,size:e.isHorizontal()?t:r}))}function $g(){const e=this;function t(x,C){return parseFloat(x.getPropertyValue(e.getDirectionLabel(C))||0)}const r=e.params,{wrapperEl:s,slidesEl:a,rtlTranslate:n,wrongRTL:o}=e,i=e.virtual&&r.virtual.enabled,l=i?e.virtual.slides.length:e.slides.length,c=Ot(a,`.${e.params.slideClass}, swiper-slide`),d=i?e.virtual.slides.length:c.length;let u=[];const p=[],f=[];let _=r.slidesOffsetBefore;typeof _=="function"&&(_=r.slidesOffsetBefore.call(e));let y=r.slidesOffsetAfter;typeof y=="function"&&(y=r.slidesOffsetAfter.call(e));const w=e.snapGrid.length,m=e.slidesGrid.length,h=e.size-_-y;let g=r.spaceBetween,v=-_,b=0,T=0;if(typeof h>"u")return;typeof g=="string"&&g.indexOf("%")>=0?g=parseFloat(g.replace("%",""))/100*h:typeof g=="string"&&(g=parseFloat(g)),e.virtualSize=-g-_-y,c.forEach(x=>{n?x.style.marginLeft="":x.style.marginRight="",x.style.marginBottom="",x.style.marginTop=""}),r.centeredSlides&&r.cssMode&&(Ir(s,"--swiper-centered-offset-before",""),Ir(s,"--swiper-centered-offset-after","")),r.cssMode&&(Ir(s,"--swiper-slides-offset-before",`${_}px`),Ir(s,"--swiper-slides-offset-after",`${y}px`));const P=r.grid&&r.grid.rows>1&&e.grid;P?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let k;const S=r.slidesPerView==="auto"&&r.breakpoints&&Object.keys(r.breakpoints).filter(x=>typeof r.breakpoints[x].slidesPerView<"u").length>0;for(let x=0;x<d;x+=1){k=0;const C=c[x];if(!(C&&(P&&e.grid.updateSlide(x,C,c),ir(C,"display")==="none"))){if(i&&r.slidesPerView==="auto")r.virtual.slidesPerViewAutoSlideSize&&(k=r.virtual.slidesPerViewAutoSlideSize),k&&C&&(r.roundLengths&&(k=Math.floor(k)),C.style[e.getDirectionLabel("width")]=`${k}px`);else if(r.slidesPerView==="auto"){S&&(C.style[e.getDirectionLabel("width")]="");const $=getComputedStyle(C),M=C.style.transform,j=C.style.webkitTransform;if(M&&(C.style.transform="none"),j&&(C.style.webkitTransform="none"),r.roundLengths)k=e.isHorizontal()?go(C,"width"):go(C,"height");else{const Q=t($,"width"),se=t($,"padding-left"),Y=t($,"padding-right"),q=t($,"margin-left"),K=t($,"margin-right"),B=$.getPropertyValue("box-sizing");if(B&&B==="border-box")k=Q+q+K;else{const{clientWidth:I,offsetWidth:U}=C;k=Q+se+Y+q+K+(U-I)}}M&&(C.style.transform=M),j&&(C.style.webkitTransform=j),r.roundLengths&&(k=Math.floor(k))}else k=(h-(r.slidesPerView-1)*g)/r.slidesPerView,r.roundLengths&&(k=Math.floor(k)),C&&(C.style[e.getDirectionLabel("width")]=`${k}px`);C&&(C.swiperSlideSize=k),f.push(k),r.centeredSlides?(v=v+k/2+b/2+g,b===0&&x!==0&&(v=v-h/2-g),x===0&&(v=v-h/2-g),Math.abs(v)<1/1e3&&(v=0),r.roundLengths&&(v=Math.floor(v)),T%r.slidesPerGroup===0&&u.push(v),p.push(v)):(r.roundLengths&&(v=Math.floor(v)),(T-Math.min(e.params.slidesPerGroupSkip,T))%e.params.slidesPerGroup===0&&u.push(v),p.push(v),v=v+k+g),e.virtualSize+=k+g,b=k,T+=1}}if(e.virtualSize=Math.max(e.virtualSize,h)+y,n&&o&&(r.effect==="slide"||r.effect==="coverflow")&&(s.style.width=`${e.virtualSize+g}px`),r.setWrapperSize&&(s.style[e.getDirectionLabel("width")]=`${e.virtualSize+g}px`),P&&e.grid.updateWrapperSize(k,u),!r.centeredSlides){const x=r.slidesPerView!=="auto"&&r.slidesPerView%1!==0,C=r.snapToSlideEdge&&!r.loop&&(r.slidesPerView==="auto"||x);let $=u.length;if(C){let j;if(r.slidesPerView==="auto"){j=1;let Q=0;for(let se=f.length-1;se>=0&&(Q+=f[se]+(se<f.length-1?g:0),Q<=h);se-=1)j=f.length-se}else j=Math.floor(r.slidesPerView);$=Math.max(d-j,0)}const M=[];for(let j=0;j<u.length;j+=1){let Q=u[j];r.roundLengths&&(Q=Math.floor(Q)),C?j<=$&&M.push(Q):u[j]<=e.virtualSize-h&&M.push(Q)}u=M,Math.floor(e.virtualSize-h)-Math.floor(u[u.length-1])>1&&(C||u.push(e.virtualSize-h))}if(i&&r.loop){const x=f[0]+g;if(r.slidesPerGroup>1){const C=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/r.slidesPerGroup),$=x*r.slidesPerGroup;for(let M=0;M<C;M+=1)u.push(u[u.length-1]+$)}for(let C=0;C<e.virtual.slidesBefore+e.virtual.slidesAfter;C+=1)r.slidesPerGroup===1&&u.push(u[u.length-1]+x),p.push(p[p.length-1]+x),e.virtualSize+=x}if(u.length===0&&(u=[0]),g!==0){const x=e.isHorizontal()&&n?"marginLeft":e.getDirectionLabel("marginRight");c.filter((C,$)=>!r.cssMode||r.loop?!0:$!==c.length-1).forEach(C=>{C.style[x]=`${g}px`})}if(r.centeredSlides&&r.centeredSlidesBounds){let x=0;f.forEach($=>{x+=$+(g||0)}),x-=g;const C=x>h?x-h:0;u=u.map($=>$<=0?-_:$>C?C+y:$)}if(r.centerInsufficientSlides){let x=0;if(f.forEach(C=>{x+=C+(g||0)}),x-=g,x<h){const C=(h-x)/2;u.forEach(($,M)=>{u[M]=$-C}),p.forEach(($,M)=>{p[M]=$+C})}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:p,slidesSizesGrid:f}),r.centeredSlides&&r.cssMode&&!r.centeredSlidesBounds){Ir(s,"--swiper-centered-offset-before",`${-u[0]}px`),Ir(s,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const x=-e.snapGrid[0],C=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map($=>$+x),e.slidesGrid=e.slidesGrid.map($=>$+C)}if(d!==l&&e.emit("slidesLengthChange"),u.length!==w&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==m&&e.emit("slidesGridLengthChange"),r.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!i&&!r.cssMode&&(r.effect==="slide"||r.effect==="fade")){const x=`${r.containerModifierClass}backface-hidden`,C=e.el.classList.contains(x);d<=r.maxBackfaceHiddenSlides?C||e.el.classList.add(x):C&&e.el.classList.remove(x)}}function Rg(e){const t=this,r=[],s=t.virtual&&t.params.virtual.enabled;let a=0,n;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=i=>s?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{r.push(i)});else for(n=0;n<Math.ceil(t.params.slidesPerView);n+=1){const i=t.activeIndex+n;if(i>t.slides.length&&!s)break;r.push(o(i))}else r.push(o(t.activeIndex));for(n=0;n<r.length;n+=1)if(typeof r[n]<"u"){const i=r[n].offsetHeight;a=i>a?i:a}(a||a===0)&&(t.wrapperEl.style.height=`${a}px`)}function Mg(){const e=this,t=e.slides,r=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-r-e.cssOverflowAdjustment()}const ol=(e,t,r)=>{t&&!e.classList.contains(r)?e.classList.add(r):!t&&e.classList.contains(r)&&e.classList.remove(r)};function Lg(e=this&&this.translate||0){const t=this,r=t.params,{slides:s,rtlTranslate:a,snapGrid:n}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;a&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=r.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<s.length;l+=1){const c=s[l];let d=c.swiperSlideOffset;r.cssMode&&r.centeredSlides&&(d-=s[0].swiperSlideOffset);const u=(o+(r.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),p=(o-n[0]+(r.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+i),f=-(o-d),_=f+t.slidesSizesGrid[l],y=f>=0&&f<=t.size-t.slidesSizesGrid[l],w=f>=0&&f<t.size-1||_>1&&_<=t.size||f<=0&&_>=t.size;w&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),ol(c,w,r.slideVisibleClass),ol(c,y,r.slideFullyVisibleClass),c.progress=a?-u:u,c.originalProgress=a?-p:p}}function Ng(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const r=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:a,isBeginning:n,isEnd:o,progressLoop:i}=t;const l=n,c=o;if(s===0)a=0,n=!0,o=!0;else{a=(e-t.minTranslate())/s;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;n=d||a<=0,o=u||a>=1,d&&(a=0),u&&(a=1)}if(r.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],_=t.slidesGrid[t.slidesGrid.length-1],y=Math.abs(e);y>=p?i=(y-p)/_:i=(y+_-f)/_,i>1&&(i-=1)}Object.assign(t,{progress:a,progressLoop:i,isBeginning:n,isEnd:o}),(r.watchSlidesProgress||r.centeredSlides&&r.autoHeight)&&t.updateSlidesProgress(e),n&&!l&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(l&&!n||c&&!o)&&t.emit("fromEdge"),t.emit("progress",a)}const In=(e,t,r)=>{t&&!e.classList.contains(r)?e.classList.add(r):!t&&e.classList.contains(r)&&e.classList.remove(r)};function Ig(){const e=this,{slides:t,params:r,slidesEl:s,activeIndex:a}=e,n=e.virtual&&r.virtual.enabled,o=e.grid&&r.grid&&r.grid.rows>1,i=u=>Ot(s,`.${r.slideClass}${u}, swiper-slide${u}`)[0];let l,c,d;if(n)if(r.loop){let u=a-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${u}"]`)}else l=i(`[data-swiper-slide-index="${a}"]`);else o?(l=t.find(u=>u.column===a),d=t.find(u=>u.column===a+1),c=t.find(u=>u.column===a-1)):l=t[a];l&&(o||(d=Sg(l,`.${r.slideClass}, swiper-slide`)[0],r.loop&&!d&&(d=t[0]),c=Tg(l,`.${r.slideClass}, swiper-slide`)[0],r.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{In(u,u===l,r.slideActiveClass),In(u,u===d,r.slideNextClass),In(u,u===c,r.slidePrevClass)}),e.emitSlidesClasses()}const xa=(e,t)=>{if(!e||e.destroyed||!e.params)return;const r=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,s=t.closest(r());if(s){let a=s.querySelector(`.${e.params.lazyPreloaderClass}`);!a&&e.isElement&&(s.shadowRoot?a=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(a=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),a&&!a.lazyPreloaderManaged&&a.remove())})),a&&!a.lazyPreloaderManaged&&a.remove()}},Dn=(e,t)=>{if(!e.slides[t])return;const r=e.slides[t].querySelector('[loading="lazy"]');r&&r.removeAttribute("loading")},bo=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const r=e.slides.length;if(!r||!t||t<0)return;t=Math.min(t,r);const s=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),a=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=a,i=[o-t];i.push(...Array.from({length:t}).map((l,c)=>o+s+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&Dn(e,c)});return}const n=a+s-1;if(e.params.rewind||e.params.loop)for(let o=a-t;o<=n+t;o+=1){const i=(o%r+r)%r;(i<a||i>n)&&Dn(e,i)}else for(let o=Math.max(a-t,0);o<=Math.min(n+t,r-1);o+=1)o!==a&&(o>n||o<a)&&Dn(e,o)};function Dg(e){const{slidesGrid:t,params:r}=e,s=e.rtlTranslate?e.translate:-e.translate;let a;for(let n=0;n<t.length;n+=1)typeof t[n+1]<"u"?s>=t[n]&&s<t[n+1]-(t[n+1]-t[n])/2?a=n:s>=t[n]&&s<t[n+1]&&(a=n+1):s>=t[n]&&(a=n);return r.normalizeSlideIndex&&(a<0||typeof a>"u")&&(a=0),a}function Bg(e){const t=this,r=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:a,activeIndex:n,realIndex:o,snapIndex:i}=t;let l=e,c;const d=f=>{let _=f-t.virtual.slidesBefore;return _<0&&(_=t.virtual.slides.length+_),_>=t.virtual.slides.length&&(_-=t.virtual.slides.length),_};if(typeof l>"u"&&(l=Dg(t)),s.indexOf(r)>=0)c=s.indexOf(r);else{const f=Math.min(a.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/a.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===n&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===n&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(l);return}const u=t.grid&&a.grid&&a.grid.rows>1;let p;if(t.virtual&&a.virtual.enabled)a.loop?p=d(l):p=l;else if(u){const f=t.slides.find(y=>y.column===l);let _=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(_)&&(_=Math.max(t.slides.indexOf(f),0)),p=Math.floor(_/a.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:n,activeIndex:l}),t.initialized&&bo(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function Fg(e,t){const r=this,s=r.params;let a=e.closest(`.${s.slideClass}, swiper-slide`);!a&&r.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!a&&i.matches&&i.matches(`.${s.slideClass}, swiper-slide`)&&(a=i)});let n=!1,o;if(a){for(let i=0;i<r.slides.length;i+=1)if(r.slides[i]===a){n=!0,o=i;break}}if(a&&n)r.clickedSlide=a,r.virtual&&r.params.virtual.enabled?r.clickedIndex=parseInt(a.getAttribute("data-swiper-slide-index"),10):r.clickedIndex=o;else{r.clickedSlide=void 0,r.clickedIndex=void 0;return}s.slideToClickedSlide&&r.clickedIndex!==void 0&&r.clickedIndex!==r.activeIndex&&r.slideToClickedSlide()}var zg={updateSize:Cg,updateSlides:$g,updateAutoHeight:Rg,updateSlidesOffset:Mg,updateSlidesProgress:Lg,updateProgress:Ng,updateSlidesClasses:Ig,updateActiveIndex:Bg,updateClickedSlide:Fg};function jg(e=this.isHorizontal()?"x":"y"){const t=this,{params:r,rtlTranslate:s,translate:a,wrapperEl:n}=t;if(r.virtualTranslate)return s?-a:a;if(r.cssMode)return a;let o=yg(n,e);return o+=t.cssOverflowAdjustment(),s&&(o=-o),o||0}function Ug(e,t){const r=this,{rtlTranslate:s,params:a,wrapperEl:n,progress:o}=r;let i=0,l=0;const c=0;r.isHorizontal()?i=s?-e:e:l=e,a.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),r.previousTranslate=r.translate,r.translate=r.isHorizontal()?i:l,a.cssMode?n[r.isHorizontal()?"scrollLeft":"scrollTop"]=r.isHorizontal()?-i:-l:a.virtualTranslate||(r.isHorizontal()?i-=r.cssOverflowAdjustment():l-=r.cssOverflowAdjustment(),n.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let d;const u=r.maxTranslate()-r.minTranslate();u===0?d=0:d=(e-r.minTranslate())/u,d!==o&&r.updateProgress(e),r.emit("setTranslate",r.translate,t)}function Hg(){return-this.snapGrid[0]}function qg(){return-this.snapGrid[this.snapGrid.length-1]}function Gg(e=0,t=this.params.speed,r=!0,s=!0,a){const n=this,{params:o,wrapperEl:i}=n;if(n.animating&&o.preventInteractionOnTransition)return!1;const l=n.minTranslate(),c=n.maxTranslate();let d;if(s&&e>l?d=l:s&&e<c?d=c:d=e,n.updateProgress(d),o.cssMode){const u=n.isHorizontal();if(t===0)i[u?"scrollLeft":"scrollTop"]=-d;else{if(!n.support.smoothScroll)return bu({swiper:n,targetPosition:-d,side:u?"left":"top"}),!0;i.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(n.setTransition(0),n.setTranslate(d),r&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionEnd"))):(n.setTransition(t),n.setTranslate(d),r&&(n.emit("beforeTransitionStart",t,a),n.emit("transitionStart")),n.animating||(n.animating=!0,n.onTranslateToWrapperTransitionEnd||(n.onTranslateToWrapperTransitionEnd=function(p){!n||n.destroyed||p.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onTranslateToWrapperTransitionEnd),n.onTranslateToWrapperTransitionEnd=null,delete n.onTranslateToWrapperTransitionEnd,n.animating=!1,r&&n.emit("transitionEnd"))}),n.wrapperEl.addEventListener("transitionend",n.onTranslateToWrapperTransitionEnd))),!0}var Vg={getTranslate:jg,setTranslate:Ug,minTranslate:Hg,maxTranslate:qg,translateTo:Gg};function Kg(e,t){const r=this;r.params.cssMode||(r.wrapperEl.style.transitionDuration=`${e}ms`,r.wrapperEl.style.transitionDelay=e===0?"0ms":""),r.emit("setTransition",e,t)}function Tu({swiper:e,runCallbacks:t,direction:r,step:s}){const{activeIndex:a,previousIndex:n}=e;let o=r;o||(a>n?o="next":a<n?o="prev":o="reset"),e.emit(`transition${s}`),t&&o==="reset"?e.emit(`slideResetTransition${s}`):t&&a!==n&&(e.emit(`slideChangeTransition${s}`),o==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function Yg(e=!0,t){const r=this,{params:s}=r;s.cssMode||(s.autoHeight&&r.updateAutoHeight(),Tu({swiper:r,runCallbacks:e,direction:t,step:"Start"}))}function Wg(e=!0,t){const r=this,{params:s}=r;r.animating=!1,!s.cssMode&&(r.setTransition(0),Tu({swiper:r,runCallbacks:e,direction:t,step:"End"}))}var Jg={setTransition:Kg,transitionStart:Yg,transitionEnd:Wg};function Xg(e=0,t,r=!0,s,a){typeof e=="string"&&(e=parseInt(e,10));const n=this;let o=e;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:_}=n;if(!_&&!s&&!a||n.destroyed||n.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=n.params.speed);const y=Math.min(n.params.slidesPerGroupSkip,o);let w=y+Math.floor((o-y)/n.params.slidesPerGroup);w>=l.length&&(w=l.length-1);const m=-l[w];if(i.normalizeSlideIndex)for(let P=0;P<c.length;P+=1){const k=-Math.floor(m*100),S=Math.floor(c[P]*100),x=Math.floor(c[P+1]*100);typeof c[P+1]<"u"?k>=S&&k<x-(x-S)/2?o=P:k>=S&&k<x&&(o=P+1):k>=S&&(o=P)}if(n.initialized&&o!==u&&(!n.allowSlideNext&&(p?m>n.translate&&m>n.minTranslate():m<n.translate&&m<n.minTranslate())||!n.allowSlidePrev&&m>n.translate&&m>n.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&r&&n.emit("beforeSlideChangeStart"),n.updateProgress(m);let h;o>u?h="next":o<u?h="prev":h="reset";const g=n.virtual&&n.params.virtual.enabled;if(!(g&&a)&&(p&&-m===n.translate||!p&&m===n.translate))return n.updateActiveIndex(o),i.autoHeight&&n.updateAutoHeight(),n.updateSlidesClasses(),i.effect!=="slide"&&n.setTranslate(m),h!=="reset"&&(n.transitionStart(r,h),n.transitionEnd(r,h)),!1;if(i.cssMode){const P=n.isHorizontal(),k=p?m:-m;if(t===0)g&&(n.wrapperEl.style.scrollSnapType="none",n._immediateVirtual=!0),g&&!n._cssModeVirtualInitialSet&&n.params.initialSlide>0?(n._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[P?"scrollLeft":"scrollTop"]=k})):f[P?"scrollLeft":"scrollTop"]=k,g&&requestAnimationFrame(()=>{n.wrapperEl.style.scrollSnapType="",n._immediateVirtual=!1});else{if(!n.support.smoothScroll)return bu({swiper:n,targetPosition:k,side:P?"left":"top"}),!0;f.scrollTo({[P?"left":"top"]:k,behavior:"smooth"})}return!0}const T=wu().isSafari;return g&&!a&&T&&n.isElement&&n.virtual.update(!1,!1,o),n.setTransition(t),n.setTranslate(m),n.updateActiveIndex(o),n.updateSlidesClasses(),n.emit("beforeTransitionStart",t,s),n.transitionStart(r,h),t===0?n.transitionEnd(r,h):n.animating||(n.animating=!0,n.onSlideToWrapperTransitionEnd||(n.onSlideToWrapperTransitionEnd=function(k){!n||n.destroyed||k.target===this&&(n.wrapperEl.removeEventListener("transitionend",n.onSlideToWrapperTransitionEnd),n.onSlideToWrapperTransitionEnd=null,delete n.onSlideToWrapperTransitionEnd,n.transitionEnd(r,h))}),n.wrapperEl.addEventListener("transitionend",n.onSlideToWrapperTransitionEnd)),!0}function Qg(e=0,t,r=!0,s){typeof e=="string"&&(e=parseInt(e,10));const a=this;if(a.destroyed)return;typeof t>"u"&&(t=a.params.speed);const n=a.grid&&a.params.grid&&a.params.grid.rows>1;let o=e;if(a.params.loop)if(a.virtual&&a.params.virtual.enabled)o=o+a.virtual.slidesBefore;else{let i;if(n){const y=o*a.params.grid.rows;i=a.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else i=a.getSlideIndexByData(o);const l=n?Math.ceil(a.slides.length/a.params.grid.rows):a.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:u}=a.params,p=c||!!d||!!u;let f=a.params.slidesPerView;f==="auto"?f=a.slidesPerViewDynamic():(f=Math.ceil(parseFloat(a.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let _=l-i<f;if(p&&(_=_||i<Math.ceil(f/2)),s&&p&&a.params.slidesPerView!=="auto"&&!n&&(_=!1),_){const y=p?i<a.activeIndex?"prev":"next":i-a.activeIndex-1<a.params.slidesPerView?"next":"prev";a.loopFix({direction:y,slideTo:!0,activeSlideIndex:y==="next"?i+1:i-l+1,slideRealIndex:y==="next"?a.realIndex:void 0})}if(n){const y=o*a.params.grid.rows;o=a.slides.find(w=>w.getAttribute("data-swiper-slide-index")*1===y).column}else o=a.getSlideIndexByData(o)}return requestAnimationFrame(()=>{a.slideTo(o,t,r,s)}),a}function Zg(e,t=!0,r){const s=this,{enabled:a,params:n,animating:o}=s;if(!a||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);let i=n.slidesPerGroup;n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(i=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<n.slidesPerGroupSkip?1:i,c=s.virtual&&n.virtual.enabled;if(n.loop){if(o&&!c&&n.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,e,t,r)}),!0}return n.rewind&&s.isEnd?s.slideTo(0,e,t,r):s.slideTo(s.activeIndex+l,e,t,r)}function eb(e,t=!0,r){const s=this,{params:a,snapGrid:n,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=s;if(!l||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);const d=s.virtual&&a.virtual.enabled;if(a.loop){if(c&&!d&&a.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const u=i?s.translate:-s.translate;function p(h){return h<0?-Math.floor(Math.abs(h)):Math.floor(h)}const f=p(u),_=n.map(h=>p(h)),y=a.freeMode&&a.freeMode.enabled;let w=n[_.indexOf(f)-1];if(typeof w>"u"&&(a.cssMode||y)){let h;n.forEach((g,v)=>{f>=g&&(h=v)}),typeof h<"u"&&(w=y?n[h]:n[h>0?h-1:h])}let m=0;if(typeof w<"u"&&(m=o.indexOf(w),m<0&&(m=s.activeIndex-1),a.slidesPerView==="auto"&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(m=m-s.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),a.rewind&&s.isBeginning){const h=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(h,e,t,r)}else if(a.loop&&s.activeIndex===0&&a.cssMode)return requestAnimationFrame(()=>{s.slideTo(m,e,t,r)}),!0;return s.slideTo(m,e,t,r)}function tb(e,t=!0,r){const s=this;if(!s.destroyed)return typeof e>"u"&&(e=s.params.speed),s.slideTo(s.activeIndex,e,t,r)}function rb(e,t=!0,r,s=.5){const a=this;if(a.destroyed)return;typeof e>"u"&&(e=a.params.speed);let n=a.activeIndex;const o=Math.min(a.params.slidesPerGroupSkip,n),i=o+Math.floor((n-o)/a.params.slidesPerGroup),l=a.rtlTranslate?a.translate:-a.translate;if(l>=a.snapGrid[i]){const c=a.snapGrid[i],d=a.snapGrid[i+1];l-c>(d-c)*s&&(n+=a.params.slidesPerGroup)}else{const c=a.snapGrid[i-1],d=a.snapGrid[i];l-c<=(d-c)*s&&(n-=a.params.slidesPerGroup)}return n=Math.max(n,0),n=Math.min(n,a.slidesGrid.length-1),a.slideTo(n,e,t,r)}function sb(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:r}=e,s=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let a=e.getSlideIndexWhenGrid(e.clickedIndex),n;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;n=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(n):a>(i?(e.slides.length-s)/2-(e.params.grid.rows-1):e.slides.length-s)?(e.loopFix(),a=e.getSlideIndex(Ot(r,`${o}[data-swiper-slide-index="${n}"]`)[0]),gu(()=>{e.slideTo(a)})):e.slideTo(a)}else e.slideTo(a)}var ab={slideTo:Xg,slideToLoop:Qg,slideNext:Zg,slidePrev:eb,slideReset:tb,slideToClosest:rb,slideToClickedSlide:sb};function nb(e,t){const r=this,{params:s,slidesEl:a}=r;if(!s.loop||r.virtual&&r.params.virtual.enabled)return;const n=()=>{Ot(a,`.${s.slideClass}, swiper-slide`).forEach((_,y)=>{_.setAttribute("data-swiper-slide-index",y)})},o=()=>{const f=Ot(a,`.${s.slideBlankClass}`);f.forEach(_=>{_.remove()}),f.length>0&&(r.recalcSlides(),r.updateSlides())},i=r.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||i)&&o();const l=s.slidesPerGroup*(i?s.grid.rows:1),c=r.slides.length%l!==0,d=i&&r.slides.length%s.grid.rows!==0,u=f=>{for(let _=0;_<f;_+=1){const y=r.isElement?Da("swiper-slide",[s.slideBlankClass]):Da("div",[s.slideClass,s.slideBlankClass]);r.slidesEl.append(y)}};if(c){if(s.loopAddBlankSlides){const f=l-r.slides.length%l;u(f),r.recalcSlides(),r.updateSlides()}else Ia("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else if(d){if(s.loopAddBlankSlides){const f=s.grid.rows-r.slides.length%s.grid.rows;u(f),r.recalcSlides(),r.updateSlides()}else Ia("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");n()}else n();const p=s.centeredSlides||!!s.slidesOffsetBefore||!!s.slidesOffsetAfter;r.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function ob({slideRealIndex:e,slideTo:t=!0,direction:r,setTranslate:s,activeSlideIndex:a,initial:n,byController:o,byMousewheel:i}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:p,params:f}=l,{centeredSlides:_,slidesOffsetBefore:y,slidesOffsetAfter:w,initialSlide:m}=f,h=_||!!y||!!w;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){t&&(!h&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):h&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=d,l.allowSlideNext=u,l.emit("loopFix");return}let g=f.slidesPerView;g==="auto"?g=l.slidesPerViewDynamic():(g=Math.ceil(parseFloat(f.slidesPerView,10)),h&&g%2===0&&(g=g+1));const v=f.slidesPerGroupAuto?g:f.slidesPerGroup;let b=h?Math.max(v,Math.ceil(g/2)):v;b%v!==0&&(b+=v-b%v),b+=f.loopAdditionalSlides,l.loopedSlides=b;const T=l.grid&&f.grid&&f.grid.rows>1;c.length<g+b||l.params.effect==="cards"&&c.length<g+b*2?Ia("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):T&&f.grid.fill==="row"&&Ia("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const P=[],k=[],S=T?Math.ceil(c.length/f.grid.rows):c.length,x=n&&S-m<g&&!h;let C=x?m:l.activeIndex;typeof a>"u"?a=l.getSlideIndex(c.find(q=>q.classList.contains(f.slideActiveClass))):C=a;const $=r==="next"||!r,M=r==="prev"||!r;let j=0,Q=0;const Y=(T?c[a].column:a)+(h&&typeof s>"u"?-g/2+.5:0);if(Y<b){j=Math.max(b-Y,v);for(let q=0;q<b-Y;q+=1){const K=q-Math.floor(q/S)*S;if(T){const B=S-K-1;for(let I=c.length-1;I>=0;I-=1)c[I].column===B&&P.push(I)}else P.push(S-K-1)}}else if(Y+g>S-b){Q=Math.max(Y-(S-b*2),v),x&&(Q=Math.max(Q,g-S+m+1));for(let q=0;q<Q;q+=1){const K=q-Math.floor(q/S)*S;T?c.forEach((B,I)=>{B.column===K&&k.push(I)}):k.push(K)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<g+b*2&&(k.includes(a)&&k.splice(k.indexOf(a),1),P.includes(a)&&P.splice(P.indexOf(a),1)),M&&P.forEach(q=>{c[q].swiperLoopMoveDOM=!0,p.prepend(c[q]),c[q].swiperLoopMoveDOM=!1}),$&&k.forEach(q=>{c[q].swiperLoopMoveDOM=!0,p.append(c[q]),c[q].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():T&&(P.length>0&&M||k.length>0&&$)&&l.slides.forEach((q,K)=>{l.grid.updateSlide(K,q,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),t){if(P.length>0&&M){if(typeof e>"u"){const q=l.slidesGrid[C],B=l.slidesGrid[C+j]-q;i?l.setTranslate(l.translate-B):(l.slideTo(C+Math.ceil(j),0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-B,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-B))}else if(s){const q=T?P.length/f.grid.rows:P.length;l.slideTo(l.activeIndex+q,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(k.length>0&&$)if(typeof e>"u"){const q=l.slidesGrid[C],B=l.slidesGrid[C-Q]-q;i?l.setTranslate(l.translate-B):(l.slideTo(C-Q,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-B,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-B))}else{const q=T?k.length/f.grid.rows:k.length;l.slideTo(l.activeIndex-q,0,!1,!0)}}if(l.allowSlidePrev=d,l.allowSlideNext=u,l.controller&&l.controller.control&&!o){const q={slideRealIndex:e,direction:r,setTranslate:s,activeSlideIndex:a,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(K=>{!K.destroyed&&K.params.loop&&K.loopFix({...q,slideTo:K.params.slidesPerView===f.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...q,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}l.emit("loopFix")}function ib(){const e=this,{params:t,slidesEl:r}=e;if(!t.loop||!r||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach(a=>{const n=typeof a.swiperSlideIndex>"u"?a.getAttribute("data-swiper-slide-index")*1:a.swiperSlideIndex;s[n]=a}),e.slides.forEach(a=>{a.removeAttribute("data-swiper-slide-index")}),s.forEach(a=>{r.append(a)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var lb={loopCreate:nb,loopFix:ob,loopDestroy:ib};function cb(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const r=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),r.style.cursor="move",r.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function db(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var ub={setGrabCursor:cb,unsetGrabCursor:db};function pb(e,t=this){function r(s){if(!s||s===$t()||s===Ye())return null;s.assignedSlot&&(s=s.assignedSlot);const a=s.closest(e);return!a&&!s.getRootNode?null:a||r(s.getRootNode().host)}return r(t)}function il(e,t,r){const s=Ye(),{params:a}=e,n=a.edgeSwipeDetection,o=a.edgeSwipeThreshold;return n&&(r<=o||r>=s.innerWidth-o)?n==="prevent"?(t.preventDefault(),!0):!1:!0}function fb(e){const t=this,r=$t();let s=e;s.originalEvent&&(s=s.originalEvent);const a=t.touchEventsData;if(s.type==="pointerdown"){if(a.pointerId!==null&&a.pointerId!==s.pointerId)return;a.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(a.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){il(t,s,s.targetTouches[0].pageX);return}const{params:n,touches:o,enabled:i}=t;if(!i||!n.simulateTouch&&s.pointerType==="mouse"||t.animating&&n.preventInteractionOnTransition)return;!t.animating&&n.cssMode&&n.loop&&t.loopFix();let l=s.target;if(n.touchEventsTarget==="wrapper"&&!wg(l,t.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||a.isTouched&&a.isMoved)return;const c=!!n.noSwipingClass&&n.noSwipingClass!=="",d=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&d&&(l=d[0]);const u=n.noSwipingSelector?n.noSwipingSelector:`.${n.noSwipingClass}`,p=!!(s.target&&s.target.shadowRoot);if(n.noSwiping&&(p?pb(u,l):l.closest(u))){t.allowClick=!0;return}if(n.swipeHandler&&!l.closest(n.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;const f=o.currentX,_=o.currentY;if(!il(t,s,f))return;Object.assign(a,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=_,a.touchStartTime=Na(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,n.threshold>0&&(a.allowThresholdMove=!1);let y=!0;l.matches(a.focusableElements)&&(y=!1,l.nodeName==="SELECT"&&(a.isTouched=!1)),r.activeElement&&r.activeElement.matches(a.focusableElements)&&r.activeElement!==l&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!l.matches(a.focusableElements))&&r.activeElement.blur();const w=y&&t.allowTouchMove&&n.touchStartPreventDefault;(n.touchStartForcePreventDefault||w)&&!l.isContentEditable&&s.preventDefault(),n.freeMode&&n.freeMode.enabled&&t.freeMode&&t.animating&&!n.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function hb(e){const t=$t(),r=this,s=r.touchEventsData,{params:a,touches:n,rtlTranslate:o,enabled:i}=r;if(!i||!a.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(s.touchId!==null||l.pointerId!==s.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(b=>b.identifier===s.touchId),!c||c.identifier!==s.touchId)return}else c=l;if(!s.isTouched){s.startMoving&&s.isScrolling&&r.emit("touchMoveOpposite",l);return}const d=c.pageX,u=c.pageY;if(l.preventedByNestedSwiper){n.startX=d,n.startY=u;return}if(!r.allowTouchMove){l.target.matches(s.focusableElements)||(r.allowClick=!1),s.isTouched&&(Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u}),s.touchStartTime=Na());return}if(a.touchReleaseOnEdges&&!a.loop)if(r.isVertical()){if(u<n.startY&&r.translate<=r.maxTranslate()||u>n.startY&&r.translate>=r.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(o&&(d>n.startX&&-r.translate<=r.maxTranslate()||d<n.startX&&-r.translate>=r.minTranslate()))return;if(!o&&(d<n.startX&&r.translate<=r.maxTranslate()||d>n.startX&&r.translate>=r.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,r.allowClick=!1;return}s.allowTouchCallbacks&&r.emit("touchMove",l),n.previousX=n.currentX,n.previousY=n.currentY,n.currentX=d,n.currentY=u;const p=n.currentX-n.startX,f=n.currentY-n.startY;if(r.params.threshold&&Math.sqrt(p**2+f**2)<r.params.threshold)return;if(typeof s.isScrolling>"u"){let b;r.isHorizontal()&&n.currentY===n.startY||r.isVertical()&&n.currentX===n.startX?s.isScrolling=!1:p*p+f*f>=25&&(b=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,s.isScrolling=r.isHorizontal()?b>a.touchAngle:90-b>a.touchAngle)}if(s.isScrolling&&r.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(n.currentX!==n.startX||n.currentY!==n.startY)&&(s.startMoving=!0),s.isScrolling||l.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;r.allowClick=!1,!a.cssMode&&l.cancelable&&l.preventDefault(),a.touchMoveStopPropagation&&!a.nested&&l.stopPropagation();let _=r.isHorizontal()?p:f,y=r.isHorizontal()?n.currentX-n.previousX:n.currentY-n.previousY;a.oneWayMovement&&(_=Math.abs(_)*(o?1:-1),y=Math.abs(y)*(o?1:-1)),n.diff=_,_*=a.touchRatio,o&&(_=-_,y=-y);const w=r.touchesDirection;r.swipeDirection=_>0?"prev":"next",r.touchesDirection=y>0?"prev":"next";const m=r.params.loop&&!a.cssMode,h=r.touchesDirection==="next"&&r.allowSlideNext||r.touchesDirection==="prev"&&r.allowSlidePrev;if(!s.isMoved){if(m&&h&&r.loopFix({direction:r.swipeDirection}),s.startTranslate=r.getTranslate(),r.setTransition(0),r.animating){const b=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});r.wrapperEl.dispatchEvent(b)}s.allowMomentumBounce=!1,a.grabCursor&&(r.allowSlideNext===!0||r.allowSlidePrev===!0)&&r.setGrabCursor(!0),r.emit("sliderFirstMove",l)}if(new Date().getTime(),a._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&w!==r.touchesDirection&&m&&h&&Math.abs(_)>=1){Object.assign(n,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}r.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=_+s.startTranslate;let g=!0,v=a.resistanceRatio;if(a.touchReleaseOnEdges&&(v=0),_>0?(m&&h&&s.allowThresholdMove&&s.currentTranslate>(a.centeredSlides?r.minTranslate()-r.slidesSizesGrid[r.activeIndex+1]-(a.slidesPerView!=="auto"&&r.slides.length-a.slidesPerView>=2?r.slidesSizesGrid[r.activeIndex+1]+r.params.spaceBetween:0)-r.params.spaceBetween:r.minTranslate())&&r.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>r.minTranslate()&&(g=!1,a.resistance&&(s.currentTranslate=r.minTranslate()-1+(-r.minTranslate()+s.startTranslate+_)**v))):_<0&&(m&&h&&s.allowThresholdMove&&s.currentTranslate<(a.centeredSlides?r.maxTranslate()+r.slidesSizesGrid[r.slidesSizesGrid.length-1]+r.params.spaceBetween+(a.slidesPerView!=="auto"&&r.slides.length-a.slidesPerView>=2?r.slidesSizesGrid[r.slidesSizesGrid.length-1]+r.params.spaceBetween:0):r.maxTranslate())&&r.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:r.slides.length-(a.slidesPerView==="auto"?r.slidesPerViewDynamic():Math.ceil(parseFloat(a.slidesPerView,10)))}),s.currentTranslate<r.maxTranslate()&&(g=!1,a.resistance&&(s.currentTranslate=r.maxTranslate()+1-(r.maxTranslate()-s.startTranslate-_)**v))),g&&(l.preventedByNestedSwiper=!0),!r.allowSlideNext&&r.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!r.allowSlidePrev&&r.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!r.allowSlidePrev&&!r.allowSlideNext&&(s.currentTranslate=s.startTranslate),a.threshold>0)if(Math.abs(_)>a.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,n.startX=n.currentX,n.startY=n.currentY,s.currentTranslate=s.startTranslate,n.diff=r.isHorizontal()?n.currentX-n.startX:n.currentY-n.startY;return}}else{s.currentTranslate=s.startTranslate;return}!a.followFinger||a.cssMode||((a.freeMode&&a.freeMode.enabled&&r.freeMode||a.watchSlidesProgress)&&(r.updateActiveIndex(),r.updateSlidesClasses()),a.freeMode&&a.freeMode.enabled&&r.freeMode&&r.freeMode.onTouchMove(),r.updateProgress(s.currentTranslate),r.setTranslate(s.currentTranslate))}function mb(e){const t=this,r=t.touchEventsData;let s=e;s.originalEvent&&(s=s.originalEvent);let a;if(s.type==="touchend"||s.type==="touchcancel"){if(a=[...s.changedTouches].find(b=>b.identifier===r.touchId),!a||a.identifier!==r.touchId)return}else{if(r.touchId!==null||s.pointerId!==r.pointerId)return;a=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(t.browser.isSafari||t.browser.isWebView)))return;r.pointerId=null,r.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&s.pointerType==="mouse")return;if(r.allowTouchCallbacks&&t.emit("touchEnd",s),r.allowTouchCallbacks=!1,!r.isTouched){r.isMoved&&o.grabCursor&&t.setGrabCursor(!1),r.isMoved=!1,r.startMoving=!1;return}o.grabCursor&&r.isMoved&&r.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=Na(),p=u-r.touchStartTime;if(t.allowClick){const b=s.path||s.composedPath&&s.composedPath();t.updateClickedSlide(b&&b[0]||s.target,b),t.emit("tap click",s),p<300&&u-r.lastClickTime<300&&t.emit("doubleTap doubleClick",s)}if(r.lastClickTime=Na(),gu(()=>{t.destroyed||(t.allowClick=!0)}),!r.isTouched||!r.isMoved||!t.swipeDirection||i.diff===0&&!r.loopSwapReset||r.currentTranslate===r.startTranslate&&!r.loopSwapReset){r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;return}r.isTouched=!1,r.isMoved=!1,r.startMoving=!1;let f;if(o.followFinger?f=l?t.translate:-t.translate:f=-r.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const _=f>=-t.maxTranslate()&&!t.params.loop;let y=0,w=t.slidesSizesGrid[0];for(let b=0;b<c.length;b+=b<o.slidesPerGroupSkip?1:o.slidesPerGroup){const T=b<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[b+T]<"u"?(_||f>=c[b]&&f<c[b+T])&&(y=b,w=c[b+T]-c[b]):(_||f>=c[b])&&(y=b,w=c[c.length-1]-c[c.length-2])}let m=null,h=null;o.rewind&&(t.isBeginning?h=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const g=(f-c[y])/w,v=y<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(g>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?m:y+v):t.slideTo(y)),t.swipeDirection==="prev"&&(g>1-o.longSwipesRatio?t.slideTo(y+v):h!==null&&g<0&&Math.abs(g)>o.longSwipesRatio?t.slideTo(h):t.slideTo(y))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(s.target===t.navigation.nextEl||s.target===t.navigation.prevEl)?s.target===t.navigation.nextEl?t.slideTo(y+v):t.slideTo(y):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:y+v),t.swipeDirection==="prev"&&t.slideTo(h!==null?h:y))}}function ll(){const e=this,{params:t,el:r}=e;if(r&&r.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:a,snapGrid:n}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=a,e.allowSlideNext=s,e.params.watchOverflow&&n!==e.snapGrid&&e.checkOverflow()}function gb(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function bb(){const e=this,{wrapperEl:t,rtlTranslate:r,enabled:s}=e;if(!s)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let a;const n=e.maxTranslate()-e.minTranslate();n===0?a=0:a=(e.translate-e.minTranslate())/n,a!==e.progress&&e.updateProgress(r?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function yb(e){const t=this;xa(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function _b(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Su=(e,t)=>{const r=$t(),{params:s,el:a,wrapperEl:n,device:o}=e,i=!!s.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!a||typeof a=="string"||(r[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),a[l]("touchstart",e.onTouchStart,{passive:!1}),a[l]("pointerdown",e.onTouchStart,{passive:!1}),r[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),r[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),r[l]("touchend",e.onTouchEnd,{passive:!0}),r[l]("pointerup",e.onTouchEnd,{passive:!0}),r[l]("pointercancel",e.onTouchEnd,{passive:!0}),r[l]("touchcancel",e.onTouchEnd,{passive:!0}),r[l]("pointerout",e.onTouchEnd,{passive:!0}),r[l]("pointerleave",e.onTouchEnd,{passive:!0}),r[l]("contextmenu",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&a[l]("click",e.onClick,!0),s.cssMode&&n[l]("scroll",e.onScroll),s.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",ll,!0):e[c]("observerUpdate",ll,!0),a[l]("load",e.onLoad,{capture:!0}))};function vb(){const e=this,{params:t}=e;e.onTouchStart=fb.bind(e),e.onTouchMove=hb.bind(e),e.onTouchEnd=mb.bind(e),e.onDocumentTouchStart=_b.bind(e),t.cssMode&&(e.onScroll=bb.bind(e)),e.onClick=gb.bind(e),e.onLoad=yb.bind(e),Su(e,"on")}function wb(){Su(this,"off")}var Tb={attachEvents:vb,detachEvents:wb};const cl=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function Sb(){const e=this,{realIndex:t,initialized:r,params:s,el:a}=e,n=s.breakpoints;if(!n||n&&Object.keys(n).length===0)return;const o=$t(),i=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",l=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?e.el:o.querySelector(s.breakpointsBase),c=e.getBreakpoint(n,i,l);if(!c||e.currentBreakpoint===c)return;const u=(c in n?n[c]:void 0)||e.originalParams,p=cl(e,s),f=cl(e,u),_=e.params.grabCursor,y=u.grabCursor,w=s.enabled;p&&!f?(a.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(a.classList.add(`${s.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&s.grid.fill==="column")&&a.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),_&&!y?e.unsetGrabCursor():!_&&y&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(T=>{if(typeof u[T]>"u")return;const P=s[T]&&s[T].enabled,k=u[T]&&u[T].enabled;P&&!k&&e[T].disable(),!P&&k&&e[T].enable()});const m=u.direction&&u.direction!==s.direction,h=s.loop&&(u.slidesPerView!==s.slidesPerView||m),g=s.loop;m&&r&&e.changeDirection(),tt(e.params,u);const v=e.params.enabled,b=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),w&&!v?e.disable():!w&&v&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),r&&(h?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!g&&b?(e.loopCreate(t),e.updateSlides()):g&&!b&&e.loopDestroy()),e.emit("breakpoint",u)}function xb(e,t="window",r){if(!e||t==="container"&&!r)return;let s=!1;const a=Ye(),n=t==="window"?a.innerHeight:r.clientHeight,o=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:n*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];t==="window"?a.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=r.clientWidth&&(s=l)}return s||"max"}var Eb={setBreakpoint:Sb,getBreakpoint:xb};function kb(e,t){const r=[];return e.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(a=>{s[a]&&r.push(t+a)}):typeof s=="string"&&r.push(t+s)}),r}function Pb(){const e=this,{classNames:t,params:r,rtl:s,el:a,device:n}=e,o=kb(["initialized",r.direction,{"free-mode":e.params.freeMode&&r.freeMode.enabled},{autoheight:r.autoHeight},{rtl:s},{grid:r.grid&&r.grid.rows>1},{"grid-column":r.grid&&r.grid.rows>1&&r.grid.fill==="column"},{android:n.android},{ios:n.ios},{"css-mode":r.cssMode},{centered:r.cssMode&&r.centeredSlides},{"watch-progress":r.watchSlidesProgress}],r.containerModifierClass);t.push(...o),a.classList.add(...t),e.emitContainerClasses()}function Ab(){const e=this,{el:t,classNames:r}=e;!t||typeof t=="string"||(t.classList.remove(...r),e.emitContainerClasses())}var Ob={addClasses:Pb,removeClasses:Ab};function Cb(){const e=this,{isLocked:t,params:r}=e,{slidesOffsetBefore:s}=r;if(s){const a=e.slides.length-1,n=e.slidesGrid[a]+e.slidesSizesGrid[a]+s*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;r.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),r.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var $b={checkOverflow:Cb},dl={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Rb(e,t){return function(s={}){const a=Object.keys(s)[0],n=s[a];if(typeof n!="object"||n===null){tt(t,s);return}if(e[a]===!0&&(e[a]={enabled:!0}),a==="navigation"&&e[a]&&e[a].enabled&&!e[a].prevEl&&!e[a].nextEl&&(e[a].auto=!0),["pagination","scrollbar"].indexOf(a)>=0&&e[a]&&e[a].enabled&&!e[a].el&&(e[a].auto=!0),!(a in e&&"enabled"in n)){tt(t,s);return}typeof e[a]=="object"&&!("enabled"in e[a])&&(e[a].enabled=!0),e[a]||(e[a]={enabled:!1}),tt(t,s)}}const Bn={eventsEmitter:Og,update:zg,translate:Vg,transition:Jg,slide:ab,loop:lb,grabCursor:ub,events:Tb,breakpoints:Eb,checkOverflow:$b,classes:Ob},Fn={};class ct{constructor(...t){let r,s;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?s=t[0]:[r,s]=t,s||(s={}),s=tt({},s),r&&!s.el&&(s.el=r);const a=$t();if(s.el&&typeof s.el=="string"&&a.querySelectorAll(s.el).length>1){const l=[];return a.querySelectorAll(s.el).forEach(c=>{const d=tt({},s,{el:c});l.push(new ct(d))}),l}const n=this;n.__swiper__=!0,n.support=_u(),n.device=vu({userAgent:s.userAgent}),n.browser=wu(),n.eventsListeners={},n.eventsAnyListeners=[],n.modules=[...n.__modules__],s.modules&&Array.isArray(s.modules)&&s.modules.forEach(l=>{typeof l=="function"&&n.modules.indexOf(l)<0&&n.modules.push(l)});const o={};n.modules.forEach(l=>{l({params:s,swiper:n,extendParams:Rb(s,o),on:n.on.bind(n),once:n.once.bind(n),off:n.off.bind(n),emit:n.emit.bind(n)})});const i=tt({},dl,o);return n.params=tt({},i,Fn,s),n.originalParams=tt({},n.params),n.passedParams=tt({},s),n.params&&n.params.on&&Object.keys(n.params.on).forEach(l=>{n.on(l,n.params.on[l])}),n.params&&n.params.onAny&&n.onAny(n.params.onAny),Object.assign(n,{enabled:n.params.enabled,el:r,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return n.params.direction==="horizontal"},isVertical(){return n.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:n.params.allowSlideNext,allowSlidePrev:n.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:n.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:n.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),n.emit("_swiper"),n.params.init&&n.init(),n}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:r,params:s}=this,a=Ot(r,`.${s.slideClass}, swiper-slide`),n=Ba(a[0]);return Ba(t)-n}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(r=>r.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:r,params:s}=t;t.slides=Ot(r,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,r){const s=this;t=Math.min(Math.max(t,0),1);const a=s.minTranslate(),o=(s.maxTranslate()-a)*t+a;s.translateTo(o,typeof r>"u"?0:r),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const r=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",r.join(" "))}getSlideClasses(t){const r=this;return r.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(r.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const r=[];t.slides.forEach(s=>{const a=t.getSlideClasses(s);r.push({slideEl:s,classNames:a}),t.emit("_slideClass",s,a)}),t.emit("_slideClasses",r)}slidesPerViewDynamic(t="current",r=!1){const s=this,{params:a,slides:n,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=s;let d=1;if(typeof a.slidesPerView=="number")return a.slidesPerView;if(a.centeredSlides){let u=n[c]?Math.ceil(n[c].swiperSlideSize):0,p;for(let f=c+1;f<n.length;f+=1)n[f]&&!p&&(u+=Math.ceil(n[f].swiperSlideSize),d+=1,u>l&&(p=!0));for(let f=c-1;f>=0;f-=1)n[f]&&!p&&(u+=n[f].swiperSlideSize,d+=1,u>l&&(p=!0))}else if(t==="current")for(let u=c+1;u<n.length;u+=1)(r?o[u]+i[u]-o[c]<l:o[u]-o[c]<l)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<l&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:r,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&xa(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function a(){const o=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let n;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)a(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const o=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;n=t.slideTo(o.length-1,0,!1,!0)}else n=t.slideTo(t.activeIndex,0,!1,!0);n||a()}s.watchOverflow&&r!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,r=!0){const s=this,a=s.params.direction;return t||(t=a==="horizontal"?"vertical":"horizontal"),t===a||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${a}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(n=>{t==="vertical"?n.style.width="":n.style.height=""}),s.emit("changeDirection"),r&&s.update()),s}changeLanguageDirection(t){const r=this;r.rtl&&t==="rtl"||!r.rtl&&t==="ltr"||(r.rtl=t==="rtl",r.rtlTranslate=r.params.direction==="horizontal"&&r.rtl,r.rtl?(r.el.classList.add(`${r.params.containerModifierClass}rtl`),r.el.dir="rtl"):(r.el.classList.remove(`${r.params.containerModifierClass}rtl`),r.el.dir="ltr"),r.update())}mount(t){const r=this;if(r.mounted)return!0;let s=t||r.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=r,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===r.params.swiperElementNodeName.toUpperCase()&&(r.isElement=!0);const a=()=>`.${(r.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(a()):Ot(s,a())[0];return!o&&r.params.createElements&&(o=Da("div",r.params.wrapperClass),s.append(o),Ot(s,`.${r.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(r,{el:s,wrapperEl:o,slidesEl:r.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:r.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||ir(s,"direction")==="rtl",rtlTranslate:r.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||ir(s,"direction")==="rtl"),wrongRTL:ir(o,"display")==="-webkit-box"}),!0}init(t){const r=this;if(r.initialized||r.mount(t)===!1)return r;r.emit("beforeInit"),r.params.breakpoints&&r.setBreakpoint(),r.addClasses(),r.updateSize(),r.updateSlides(),r.params.watchOverflow&&r.checkOverflow(),r.params.grabCursor&&r.enabled&&r.setGrabCursor(),r.params.loop&&r.virtual&&r.params.virtual.enabled?r.slideTo(r.params.initialSlide+r.virtual.slidesBefore,0,r.params.runCallbacksOnInit,!1,!0):r.slideTo(r.params.initialSlide,0,r.params.runCallbacksOnInit,!1,!0),r.params.loop&&r.loopCreate(void 0,!0),r.attachEvents();const a=[...r.el.querySelectorAll('[loading="lazy"]')];return r.isElement&&a.push(...r.hostEl.querySelectorAll('[loading="lazy"]')),a.forEach(n=>{n.complete?xa(r,n):n.addEventListener("load",o=>{xa(r,o.target)})}),bo(r),r.initialized=!0,bo(r),r.emit("init"),r.emit("afterInit"),r}destroy(t=!0,r=!0){const s=this,{params:a,el:n,wrapperEl:o,slides:i}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),a.loop&&s.loopDestroy(),r&&(s.removeClasses(),n&&typeof n!="string"&&n.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(a.slideVisibleClass,a.slideFullyVisibleClass,a.slideActiveClass,a.slideNextClass,a.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),t!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),gg(s)),s.destroyed=!0),null}static extendDefaults(t){tt(Fn,t)}static get extendedDefaults(){return Fn}static get defaults(){return dl}static installModule(t){ct.prototype.__modules__||(ct.prototype.__modules__=[]);const r=ct.prototype.__modules__;typeof t=="function"&&r.indexOf(t)<0&&r.push(t)}static use(t){return Array.isArray(t)?(t.forEach(r=>ct.installModule(r)),ct):(ct.installModule(t),ct)}}Object.keys(Bn).forEach(e=>{Object.keys(Bn[e]).forEach(t=>{ct.prototype[t]=Bn[e][t]})});ct.use([Pg,Ag]);function Mb(e,t,r,s){return e.params.createElements&&Object.keys(s).forEach(a=>{if(!r[a]&&r.auto===!0){let n=Ot(e.el,`.${s[a]}`)[0];n||(n=Da("div",s[a]),n.className=s[a],e.el.append(n)),r[a]=n,t[a]=n}}),r}function Qr(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Lb({swiper:e,extendParams:t,on:r,emit:s}){const a="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${a}-bullet`,bulletActiveClass:`${a}-bullet-active`,modifierClass:`${a}-`,currentClass:`${a}-current`,totalClass:`${a}-total`,hiddenClass:`${a}-hidden`,progressbarFillClass:`${a}-progressbar-fill`,progressbarOppositeClass:`${a}-progressbar-opposite`,clickableClass:`${a}-clickable`,lockClass:`${a}-lock`,horizontalClass:`${a}-horizontal`,verticalClass:`${a}-vertical`,paginationDisabledClass:`${a}-disabled`}}),e.pagination={el:null,bullets:[]};let n,o=0;function i(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function l(m,h){const{bulletActiveClass:g}=e.params.pagination;m&&(m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${g}-${h}`),m=m[`${h==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${g}-${h}-${h}`)))}function c(m,h,g){if(m=m%g,h=h%g,h===m+1)return"next";if(h===m-1)return"previous"}function d(m){const h=m.target.closest(Qr(e.params.pagination.bulletClass));if(!h)return;m.preventDefault();const g=Ba(h)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===g)return;const v=c(e.realIndex,g,e.slides.length);v==="next"?e.slideNext():v==="previous"?e.slidePrev():e.slideToLoop(g)}else e.slideTo(g)}function u(){const m=e.rtl,h=e.params.pagination;if(i())return;let g=e.pagination.el;g=Dt(g);let v,b;const T=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,P=e.params.loop?Math.ceil(T/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(b=e.previousRealIndex||0,v=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(v=e.snapIndex,b=e.previousSnapIndex):(b=e.previousIndex||0,v=e.activeIndex||0),h.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const k=e.pagination.bullets;let S,x,C;if(h.dynamicBullets&&(n=go(k[0],e.isHorizontal()?"width":"height"),g.forEach($=>{$.style[e.isHorizontal()?"width":"height"]=`${n*(h.dynamicMainBullets+4)}px`}),h.dynamicMainBullets>1&&b!==void 0&&(o+=v-(b||0),o>h.dynamicMainBullets-1?o=h.dynamicMainBullets-1:o<0&&(o=0)),S=Math.max(v-o,0),x=S+(Math.min(k.length,h.dynamicMainBullets)-1),C=(x+S)/2),k.forEach($=>{const M=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(j=>`${h.bulletActiveClass}${j}`)].map(j=>typeof j=="string"&&j.includes(" ")?j.split(" "):j).flat();$.classList.remove(...M)}),g.length>1)k.forEach($=>{const M=Ba($);M===v?$.classList.add(...h.bulletActiveClass.split(" ")):e.isElement&&$.setAttribute("part","bullet"),h.dynamicBullets&&(M>=S&&M<=x&&$.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),M===S&&l($,"prev"),M===x&&l($,"next"))});else{const $=k[v];if($&&$.classList.add(...h.bulletActiveClass.split(" ")),e.isElement&&k.forEach((M,j)=>{M.setAttribute("part",j===v?"bullet-active":"bullet")}),h.dynamicBullets){const M=k[S],j=k[x];for(let Q=S;Q<=x;Q+=1)k[Q]&&k[Q].classList.add(...`${h.bulletActiveClass}-main`.split(" "));l(M,"prev"),l(j,"next")}}if(h.dynamicBullets){const $=Math.min(k.length,h.dynamicMainBullets+4),M=(n*$-n)/2-C*n,j=m?"right":"left";k.forEach(Q=>{Q.style[e.isHorizontal()?j:"top"]=`${M}px`})}}g.forEach((k,S)=>{if(h.type==="fraction"&&(k.querySelectorAll(Qr(h.currentClass)).forEach(x=>{x.textContent=h.formatFractionCurrent(v+1)}),k.querySelectorAll(Qr(h.totalClass)).forEach(x=>{x.textContent=h.formatFractionTotal(P)})),h.type==="progressbar"){let x;h.progressbarOpposite?x=e.isHorizontal()?"vertical":"horizontal":x=e.isHorizontal()?"horizontal":"vertical";const C=(v+1)/P;let $=1,M=1;x==="horizontal"?$=C:M=C,k.querySelectorAll(Qr(h.progressbarFillClass)).forEach(j=>{j.style.transform=`translate3d(0,0,0) scaleX(${$}) scaleY(${M})`,j.style.transitionDuration=`${e.params.speed}ms`})}h.type==="custom"&&h.renderCustom?(nl(k,h.renderCustom(e,v+1,P)),S===0&&s("paginationRender",k)):(S===0&&s("paginationRender",k),s("paginationUpdate",k)),e.params.watchOverflow&&e.enabled&&k.classList[e.isLocked?"add":"remove"](h.lockClass)})}function p(){const m=e.params.pagination;if(i())return;const h=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let g=e.pagination.el;g=Dt(g);let v="";if(m.type==="bullets"){let b=e.params.loop?Math.ceil(h/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&b>h&&(b=h);for(let T=0;T<b;T+=1)m.renderBullet?v+=m.renderBullet.call(e,T,m.bulletClass):v+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?v=m.renderFraction.call(e,m.currentClass,m.totalClass):v=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?v=m.renderProgressbar.call(e,m.progressbarFillClass):v=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],g.forEach(b=>{m.type!=="custom"&&nl(b,v||""),m.type==="bullets"&&e.pagination.bullets.push(...b.querySelectorAll(Qr(m.bulletClass)))}),m.type!=="custom"&&s("paginationRender",g[0])}function f(){e.params.pagination=Mb(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let h;typeof m.el=="string"&&e.isElement&&(h=e.el.querySelector(m.el)),!h&&typeof m.el=="string"&&(h=[...document.querySelectorAll(m.el)]),h||(h=m.el),!(!h||h.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(h)&&h.length>1&&(h=[...e.el.querySelectorAll(m.el)],h.length>1&&(h=h.find(g=>yu(g,".swiper")[0]===e.el))),Array.isArray(h)&&h.length===1&&(h=h[0]),Object.assign(e.pagination,{el:h}),h=Dt(h),h.forEach(g=>{m.type==="bullets"&&m.clickable&&g.classList.add(...(m.clickableClass||"").split(" ")),g.classList.add(m.modifierClass+m.type),g.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(g.classList.add(`${m.modifierClass}${m.type}-dynamic`),o=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&g.classList.add(m.progressbarOppositeClass),m.clickable&&g.addEventListener("click",d),e.enabled||g.classList.add(m.lockClass)}))}function _(){const m=e.params.pagination;if(i())return;let h=e.pagination.el;h&&(h=Dt(h),h.forEach(g=>{g.classList.remove(m.hiddenClass),g.classList.remove(m.modifierClass+m.type),g.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(g.classList.remove(...(m.clickableClass||"").split(" ")),g.removeEventListener("click",d))})),e.pagination.bullets&&e.pagination.bullets.forEach(g=>g.classList.remove(...m.bulletActiveClass.split(" ")))}r("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:h}=e.pagination;h=Dt(h),h.forEach(g=>{g.classList.remove(m.horizontalClass,m.verticalClass),g.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),r("init",()=>{e.params.pagination.enabled===!1?w():(f(),p(),u())}),r("activeIndexChange",()=>{typeof e.snapIndex>"u"&&u()}),r("snapIndexChange",()=>{u()}),r("snapGridLengthChange",()=>{p(),u()}),r("destroy",()=>{_()}),r("enable disable",()=>{let{el:m}=e.pagination;m&&(m=Dt(m),m.forEach(h=>h.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),r("lock unlock",()=>{u()}),r("click",(m,h)=>{const g=h.target,v=Dt(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&v&&v.length>0&&!g.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&g===e.navigation.nextEl||e.navigation.prevEl&&g===e.navigation.prevEl))return;const b=v[0].classList.contains(e.params.pagination.hiddenClass);s(b===!0?"paginationShow":"paginationHide"),v.forEach(T=>T.classList.toggle(e.params.pagination.hiddenClass))}});const y=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=Dt(m),m.forEach(h=>h.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),u()},w=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=Dt(m),m.forEach(h=>h.classList.add(e.params.pagination.paginationDisabledClass))),_()};Object.assign(e.pagination,{enable:y,disable:w,render:p,update:u,init:f,destroy:_})}function Nb({swiper:e,extendParams:t,on:r,emit:s,params:a}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let n,o,i=a&&a.autoplay?a.autoplay.delay:3e3,l=a&&a.autoplay?a.autoplay.delay:3e3,c,d=new Date().getTime(),u,p,f,_,y,w;function m(Y){!e||e.destroyed||!e.wrapperEl||Y.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(w||Y.detail&&Y.detail.bySwiperTouchMove)&&S())}const h=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(l=c,u=!1);const Y=e.autoplay.paused?c:d+l-new Date().getTime();e.autoplay.timeLeft=Y,s("autoplayTimeLeft",Y,Y/i),o=requestAnimationFrame(()=>{h()})},g=()=>{let Y;return e.virtual&&e.params.virtual.enabled?Y=e.slides.find(K=>K.classList.contains("swiper-slide-active")):Y=e.slides[e.activeIndex],Y?parseInt(Y.getAttribute("data-swiper-autoplay"),10):void 0},v=()=>{let Y=e.params.autoplay.delay;const q=g();return!Number.isNaN(q)&&q>0&&(Y=q),Y},b=Y=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),h();let q=Y;typeof q>"u"&&(q=v(),i=q,l=q),c=q;const K=e.params.speed,B=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(K,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,K,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(K,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,K,!0,!0),s("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{b()})))};return q>0?(clearTimeout(n),n=setTimeout(()=>{B()},q)):requestAnimationFrame(()=>{B()}),q},T=()=>{d=new Date().getTime(),e.autoplay.running=!0,b(),s("autoplayStart")},P=()=>{e.autoplay.running=!1,clearTimeout(n),cancelAnimationFrame(o),s("autoplayStop")},k=(Y,q)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(n),Y||(y=!0);const K=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):S()};if(e.autoplay.paused=!0,q){K();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),K())},S=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),y?(y=!1,b(c)):b(),e.autoplay.paused=!1,s("autoplayResume"))},x=()=>{if(e.destroyed||!e.autoplay.running)return;const Y=$t();Y.visibilityState==="hidden"&&(y=!0,k(!0)),Y.visibilityState==="visible"&&S()},C=Y=>{Y.pointerType==="mouse"&&(y=!0,w=!0,!(e.animating||e.autoplay.paused)&&k(!0))},$=Y=>{Y.pointerType==="mouse"&&(w=!1,e.autoplay.paused&&S())},M=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",C),e.el.addEventListener("pointerleave",$))},j=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",C),e.el.removeEventListener("pointerleave",$))},Q=()=>{$t().addEventListener("visibilitychange",x)},se=()=>{$t().removeEventListener("visibilitychange",x)};r("init",()=>{e.params.autoplay.enabled&&(M(),Q(),T())}),r("destroy",()=>{j(),se(),e.autoplay.running&&P()}),r("_freeModeStaticRelease",()=>{(f||y)&&S()}),r("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?P():k(!0,!0)}),r("beforeTransitionStart",(Y,q,K)=>{e.destroyed||!e.autoplay.running||(K||!e.params.autoplay.disableOnInteraction?k(!0,!0):P())}),r("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){P();return}p=!0,f=!1,y=!1,_=setTimeout(()=>{y=!0,f=!0,k(!0)},200)}}),r("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(_),clearTimeout(n),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&S(),f=!1,p=!1}}),r("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=v(),i=v())}),Object.assign(e.autoplay,{start:T,stop:P,pause:k,resume:S})}const Ib={class:"home-layout"},Db={class:"sticky-header-group"},Bb=["data-user-name"],Fb={class:"home-tabs",id:"home-tabs--id"},zb={class:"home-tab home-tab--active","data-home-tab":"lobby"},jb={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Ub={class:"home-tab","data-home-tab":"active"},Hb={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},qb={__name:"home_route",setup(e){const t=Mt(),r=we();window.CoreBetSlip=hu;const s=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__select"),u=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u}),l&&c&&d&&u){const p=window.matchMedia("(orientation: portrait)").matches,f=window.matchMedia("(max-width: 768px)").matches;(p||f)&&(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),l.addEventListener("click",_=>{console.log("[Bet Grid Toggle] Button clicked!"),_.preventDefault(),_.stopPropagation(),u.classList.contains("collapsed")?(d.classList.add("collapsed"),u.classList.remove("collapsed"),c.textContent="Close Bet Slip"):(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:d.classList.contains("collapsed"),slipCollapsed:u.classList.contains("collapsed"),buttonText:c.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:l,toggleText:c,selectSection:d,slipSection:u})};document.addEventListener("click",l=>{const c=l.target;if(c&&c.dataset?.promotionTopic){const d={timestamp:Date.now(),heroImg:c.dataset.promotionHeroImg||"",caption:c.dataset.promotionCaption||"",tagline:c.dataset.promotionTagline||"",toast:c.dataset.promotionToast||"",topic:c.dataset.promotionTopic||"",topicToken:c.dataset.promotionTopicToken||"",marquee:c.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",d),de.publish(r.hierTopics.PROMOTION__CLICK,JSON.stringify(d))}c&&c.dataset?.publishRouteHome&&(c.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .dash-nav__btn").forEach(u=>{u===c?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),de.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),c&&c.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const a=(l,c=!1,d="cards",u={})=>{const p=document.querySelector(".tournaments-grid");if(!p)return;p.innerHTML="",p.classList.toggle("tournaments-grid--list",d==="list");const f=document.getElementById("app"),_=f?.getAttribute("data-sync-theme")||"dark",y=f?.getAttribute("data-sync-lang")||"en",w=f?.getAttribute("data-sync-motif")||"brand",m=g=>{const v=document.createElement("bma-tournament-list-card");return v.setAttribute("data-bma-tourn-guid",g.guid||""),v.setAttribute("data-bma-tourn-caption",g.caption||""),v.setAttribute("data-bma-tourn-tagline",g.tagline||""),v.setAttribute("data-bma-tourn-status",g.status||""),v.setAttribute("data-bma-tourn-class",g.status||""),v.setAttribute("data-bma-tourn-game-type",g.class||"DEFAULT"),v.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(g.sports_allowed)?JSON.stringify(g.sports_allowed):""),v.setAttribute("data-bma-tourn-entities",g.entities?JSON.stringify(g.entities):""),v.setAttribute("data-bma-tourn-entry_fee",g.entry_fee||"0"),v.setAttribute("data-bma-tourn-tournament_dollars",g.tournament_dollars||"0"),v.setAttribute("data-bma-tourn-matches",g.matches_expanded?.length||"0"),v.setAttribute("data-bma-tourn-tags",Array.isArray(g.tags)?JSON.stringify(g.tags):"[]"),v.setAttribute("data-bma-tourn-window_start_time",g.window_start_time||""),v.setAttribute("data-bma-tourn-window_end_time",g.window_end_time||""),v.setAttribute("data-sync-theme",_),v},h=g=>{const v=document.createElement("article"),b=g.status||"DRAFT";v.className=`tournament-item tournament-status-${b.toLowerCase()}`;const T=document.createElement("bma-tournament-card");return T.setAttribute("data-bma-tourn-id",g.id||""),T.setAttribute("data-bma-tourn-guid",g.guid||""),T.setAttribute("data-bma-tourn-caption",g.caption||""),T.setAttribute("data-bma-tourn-tagline",g.tagline||""),T.setAttribute("data-bma-tourn-window_start_time",g.window_start_time||""),T.setAttribute("data-bma-tourn-window_end_time",g.window_end_time||""),T.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(g.sports_allowed)?JSON.stringify(g.sports_allowed):g.sports_allowed||""),T.setAttribute("data-bma-tourn-entities",g.entities?JSON.stringify(g.entities):""),T.setAttribute("data-bma-tourn-tournament_dollars",g.tournament_dollars||""),T.setAttribute("data-bma-tourn-prize_distro",Array.isArray(g.prize_distro)?JSON.stringify(g.prize_distro):g.prize_distro||""),T.setAttribute("data-bma-tourn-matches",Array.isArray(g.matches_guids)?JSON.stringify(g.matches_guids):g.matches_guids||""),T.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(g.matches_expanded)?JSON.stringify(g.matches_expanded):g.matches_expanded||""),T.setAttribute("data-bma-tourn-entry_fee",g.entry_fee||""),T.setAttribute("data-bma-tourn-rake",g.rake||""),T.setAttribute("data-bma-tourn-tags",Array.isArray(g.tags)?JSON.stringify(g.tags):g.tags||""),T.setAttribute("data-bma-tourn-comments",g.comments||""),T.setAttribute("data-bma-tourn-class",g.status||""),T.setAttribute("data-bma-tourn-game-type",g.class||"DEFAULT"),T.setAttribute("data-bma-tourn-status",g.status||""),T.setAttribute("data-sync-theme",_),T.setAttribute("data-sync-lang",y),T.setAttribute("data-sync-motif",w),T.setAttribute("data-n55-size","medium"),T.setAttribute("data-n55-enchanted-cta-ambient","none"),T.setAttribute("data-tourn-custom-css",""),T.setAttribute("data-tourn-trophy","0"),T.setAttribute("data-bma-tourn-focus",""),T.setAttribute("data-bma-tourn-wait","false"),v.appendChild(T),v};if(c){l.forEach(v=>{const b=document.createElement("div");b.className="tournament-category";const T=document.createElement("header");T.className="tournament-category-header";const P=document.createElement("div");P.className="category-title-line";const k=document.createElement("h2");if(k.className="category-title",k.textContent=v.title,P.appendChild(k),v.tournaments){const K=document.createElement("span");K.className="category-subtext",K.textContent=v.tournaments.length,P.appendChild(K)}const{tab:S="lobby",subStatus:x="all",sort:C="default",result:$="all",odds:M="all"}=u,Q=v.title.toLowerCase().includes("completed"),se=!Q&&S==="my",Y=(K,B,I)=>`<option value="${K}"${I?" selected":""}>${B}</option>`;let q="";if(S==="lobby"?q=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${Y("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${Y("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${Y("default","Starting TD$: Default",C==="default")}
              ${Y("td_high","Starting TD$: High to Low",C==="td_high")}
              ${Y("td_low","Starting TD$: Low to High",C==="td_low")}
            </select>
          `:S==="my"&&se?q=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${Y("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${Y("all","Status: All",x==="all")}
              ${Y("active","Status: Active",x==="active")}
              ${Y("upcoming","Status: Upcoming",x==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${Y("all","Odds: All",M==="all")}
              ${Y("available","Odds: Available",M==="available")}
              ${Y("none","Odds: Not Available",M==="none")}
            </select>
          `:(S==="my"&&Q||S==="completed")&&(q=`
            <select class="category-dropdown" data-filter-type="result">
              ${Y("all","Result: All",$==="all")}
              ${Y("trophy","Result: Won Trophy",$==="trophy")}
              ${Y("no_trophy","Result: No Trophy",$==="no_trophy")}
            </select>
          `),T.appendChild(P),q){const K=document.createElement("button");K.className="category-filter-toggle",K.setAttribute("aria-label","Toggle filters"),K.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filter <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>';const B=document.createElement("div");B.className="category-controls";const I=localStorage.getItem("bma_view_mode")||"cards",U=document.createElement("span");U.className="category-view-btns",U.innerHTML=`
            <button class="category-view-btn${I==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            </button>
            <button class="category-view-btn${I==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            </button>
          `,B.appendChild(K),B.appendChild(U),T.appendChild(B)}if(q){const K=document.createElement("div");if(K.className="category-filter-row",K.style.display=window._bmaFilterRowOpen?"":"none",K.innerHTML=q,T.appendChild(K),window._bmaFilterRowOpen){const B=T.querySelector(".category-filter-toggle");B&&B.classList.add("category-filter-toggle--open")}}if(b.appendChild(T),p.appendChild(b),v.tournaments.length===0){const K=v.emptyMessage||"No tournaments available",B=v.emptySubtext||"Check back later for new tournaments",I=v.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',U=document.createElement("div");U.className="tournaments-empty",U.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",U.innerHTML=`
            ${I}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${K}</p>
            <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${B}</p>
          `,b.appendChild(U)}else{const K=document.createElement("div");if(K.className="card-rail",v.tournaments.forEach((B,I)=>{const U=d==="list"?m(B):h(B);U.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",U.style.animationDelay=`${Math.min(I*50,300)}ms`,K.appendChild(U)}),v.tournaments.length>1){const B=document.createElement("div");B.className="card-rail__dots";for(let I=0;I<v.tournaments.length;I++){const U=document.createElement("span");U.className=`card-rail__dot${I===0?" card-rail__dot--active":""}`,B.appendChild(U)}b.appendChild(B)}if(b.appendChild(K),v.tournaments.length>1){const B=document.createElement("button");B.className="card-rail__arrow card-rail__arrow--prev",B.setAttribute("aria-label","Previous card"),B.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',B.style.opacity="0";const I=document.createElement("button");I.className="card-rail__arrow card-rail__arrow--next",I.setAttribute("aria-label","Next card"),I.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',b.appendChild(B),b.appendChild(I);const U=b.querySelector(".card-rail__dots");K.addEventListener("scroll",()=>{const F=K.scrollLeft,A=K.firstElementChild?.offsetWidth||1,V=Math.round(F/(A+12));U&&U.querySelectorAll(".card-rail__dot").forEach((z,G)=>{z.classList.toggle("card-rail__dot--active",G===V)}),B.style.opacity=F<=10?"0":"";const L=K.scrollWidth-K.clientWidth;I.style.opacity=F>=L-10?"0":""},{passive:!0}),B.addEventListener("click",()=>{const F=K.firstElementChild?.offsetWidth||300;K.scrollBy({left:-(F+12),behavior:"smooth"})}),I.addEventListener("click",()=>{const F=K.firstElementChild?.offsetWidth||300;K.scrollBy({left:F+12,behavior:"smooth"})})}}});const g=p.dataset.filterContext;if(g!=="lobby"&&g!=="private"&&p.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let v="No tournaments available",b="Check back later for new tournaments";g==="my"?(v="You haven't joined any tournaments yet",b="Head to the lobby to find tournaments"):g==="completed"&&(v="No completed tournaments yet",b="Tournaments will appear here once they finish");const T=document.createElement("div");T.className="tournaments-empty",T.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",T.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${v}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${b}</p>
        `,p.appendChild(T)}}else l.forEach((g,v)=>{const b=d==="list"?m(g):h(g);b.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",b.style.animationDelay=`${Math.min(v*50,300)}ms`,p.appendChild(b)})},n=l=>{document.querySelectorAll("bma-tournament-card").forEach(d=>{d.setAttribute("data-sync-theme",l)})},o=l=>{const c=document.querySelectorAll("bma-tournament-card"),d=Date.now().toString();c.forEach(u=>{if(u===l){if(u.setAttribute("data-bma-tourn-focus",d),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},i=l=>{const{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}=l.detail;console.log("[home_route] Tournament action:",{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}),o(l.target),de.publish("WC.TOURN_ACTION",JSON.stringify({action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f,timestamp:Date.now()}))};return Qt(async()=>{if(!r.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const l=document.getElementById("app");if(l){const p=r.appCLIFeatures.features.theme?.state,f=r.appCLIFeatures.features.lang?.state,_=r.appCLIFeatures.features.motif?.state,y=r.appSession.session_user.guid;p&&(l.setAttribute("data-sync-theme",p),document.body.setAttribute("data-sync-theme",p)),f&&l.setAttribute("data-sync-lang",f),_&&l.setAttribute("data-sync-motif",_),y&&l.setAttribute("data-user-guid",y)}window._homeRouteRenderCards=a,window.initBetGridToggle=s;const c=de.subscribe("APP.ROUTE_SYNC",(p,f)=>{try{const _=JSON.parse(f);_.theme&&n(_.theme.state)}catch(_){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",_)}});window._homeRoutePubSubToken=c,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),de.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i);const d=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,u=new ct(".featured-swiper",{modules:[Nb,Lb],slidesPerView:1,spaceBetween:16,loop:d>1,centeredSlides:d===1,autoplay:d>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:Math.min(2,d),spaceBetween:16},1024:{slidesPerView:Math.min(3,d),spaceBetween:20},1280:{slidesPerView:Math.min(3,d),spaceBetween:24}}});window.featuredSwiper=u,de.publish(r.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Za(()=>{document.removeEventListener("bma-tournament-action",i),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&de.unsubscribe(window._homeRoutePubSubToken)}),(l,c)=>(Xe(),ut("main",Ib,[re("div",Db,[re("bma-app-head-top",{"data-user-name":cr(r).appSession.session_user.name||"Guest"},null,8,Bb),c[0]||(c[0]=re("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),c[6]||(c[6]=re("section",{class:"featured-carousel-section"},[re("div",{class:"swiper featured-swiper"},[re("div",{class:"swiper-wrapper"}),re("div",{class:"swiper-pagination"})])],-1)),re("nav",Fb,[re("button",zb,[(Xe(),ut("svg",jb,[...c[1]||(c[1]=[re("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),c[2]||(c[2]=qr(" Main Lobby ",-1))]),re("button",Ub,[(Xe(),ut("svg",Hb,[...c[3]||(c[3]=[re("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"},null,-1)])])),c[4]||(c[4]=qr(" Active Tourneys ",-1)),c[5]||(c[5]=re("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{display:"none"}},"0",-1))])]),c[7]||(c[7]=re("bma-app-head-sports",{"data-selected-chip":"all"},null,-1)),c[8]||(c[8]=re("section",{class:"tournaments-section"},[re("div",{class:"tournaments-grid"})],-1)),c[9]||(c[9]=re("bma-app-foot",{"data-selected-item":"foot_all_sports"},null,-1))]))}},Gb={};function Vb(e,t){return Xe(),ut("main",null,[...t[0]||(t[0]=[re("h1",null,"App FAQ",-1)])])}const Ls=hr(Gb,[["render",Vb]]),Kb={};function Yb(e,t){return Xe(),ut("main",null,[...t[0]||(t[0]=[re("h1",null,"App Help",-1)])])}const Wb=hr(Kb,[["render",Yb]]),Ut=class Ut{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,r,s,a=!0){this.strChat=s,this.isDebug=a;const n=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",r).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${n}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(i){Ut.onSSEOpen(i)},this.sseEvent.onmessage=function(i){Ut.onSSEMessage(i)},this.sseEvent.onerror=function(i){Ut.onSSEError(i)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let r=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(r=JSON.parse(t.data),r?.class!="NO_MESSAGE")if(r?.class&&r?.msg)switch(r.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":r?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(r.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",r.id+" | "+r.class+" | "+r.msg+" | "+r.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",r),de.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(r));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Ut.sseEvent=null,Ut.strChat=null,Ut.isDebug=!0,Ut.sessionId=null;let Fa=Ut;class Jt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(r){return Math.floor(Math.random()*r)},fPromiseJS:async function(r,s){return new Promise((a,n)=>{const o=Object.assign(r.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});o.onload=a,o.onerror=n,r.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(r,s,a){const n=Object.assign(r.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});a&&(n.onload=function(){a()}),r.getElementsByTagName("head")[0].appendChild(n)},fAsyncCSS:function(r,s){let a=r.createElement("link");a.rel="stylesheet",a.href=s,r.getElementsByTagName("head")[0].appendChild(a)},data2prop:function(r){r=r.replace("data-","").toLowerCase();let s=r.split(""),a=[],n=!1;return s.forEach(o=>{o=="-"?n=!0:(a.push(n?o.toUpperCase():o),n=!1)}),a.join("")},doDataLayer:function(r,s){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+r+" | "+s),window.dataLayer&&window.dataLayer.push({event:r,msg:s})},isJSON:function(r){let s=!1;try{s=typeof JSON.parse(r)}catch{}return s=="object"},appStateListen:function(r){NeodigmKeylime.subscribe("mouseover",a=>{a?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(a.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let n=neodigmUtils.walkDOM3(a?.target,"n55TypeonClick");n&&neodigmUtils.typeOn(JSON.parse(n))},!0),NeodigmKeylime.subscribe("touchstart",a=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",a=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let s=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;s&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=s)},prettyTimeRETIRE:r=>{let s=new Date(r).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return r=="Dec 31, 1969"&&(s=""),s},prettyTime:r=>new Date(r).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:r=>r&&r[0].toUpperCase()+r.slice(1)||"",genHash:r=>(r=String(r),Math.abs(r.split("").reduce((s,a)=>(s<<5)-s+a.charCodeAt(0)|0,0))),flashTitle:(r=neodigmOpt.N55_THEME_DEFAULT,s=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[r]&&(document.title=neodigmOpt.N55_THEME_COLORS[r][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},s))},robinTheme:function(r=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const a=56;s.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=r},i*a),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(a+a)))}),s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const n=256;s.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=r},i*n),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*n+3e3)}),neodigmUtils.flashTitle(r,2e3)}},countTo:async function(r,s,a=neodigmOpt.neodigmMetronome.countTo){const n=[16,a];return[...document.querySelectorAll(r)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-s);neodigmMetronome.unsubscribe(n[1]+i).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&s!=d){let u=l/n[0];u=Math.round(u),c!=0?o.textContent=d<s?d+u:d-u:o.textContent=s}},n[1]+i,n[0])}),neodigmUtils},typeOff:async function(r){let s=document.querySelector(r?.q1st);if(s){let a=s.textContent.length,n=window.getComputedStyle(s),o=Number(n.paddingTop.replace("px",""))+Number(n.paddingBottom.replace("px",""));for(s.offsetHeight&&(s.style.height=s.offsetHeight-o+"px");a;)setTimeout(()=>{s.textContent=s.textContent.replace(/.$/,"")},r.uniqueDelay*a--)}},typeOn:async function(r){let s=document.querySelector(r?.q1st);if(s){s.dataset.n55Typeon=0;let a=r.msg.replaceAll("|","   |   ")+"   ",n=a.split("|");if(r?.mode=="OFF")return neodigmUtils.typeOff({q1st:r.q1st,uniqueDelay:r.uniqueDelay}),neodigmUtils;if(r?.mode=="RANDOM"&&n.length){let o=s.dataset.n55Typeon=neodigmUtils.f02x(n.length);a=n[o]}neodigmUtils.typeOff({q1st:r.q1st,uniqueDelay:r.uniqueDelay/s.textContent.length-4}),neodigmMetronome.unsubscribe(r.uniqueDelay).subscribe(o=>{let i=a[a.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:r.q1st,uniqueDelay:r.uniqueDelay/s.textContent.length-4}),s.dataset.n55Typeon++),s.textContent+=i,r?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(r)},r.uniqueDelay,a.length)}return neodigmUtils},getValJSON:function(r,s){try{return JSON.parse(r)}catch{return JSON.parse('{ "'+s+'": "'+r+'" }')}},walkDOM3:function(r,s,a=!1){let n=null;if(!n&&r?.dataset[s]&&(n=r),!n&&r?.parentNode?.dataset[s]&&(n=r.parentNode),!n&&r.tagName!="BODY"&&r?.parentNode?.parentNode?.dataset[s]&&(n=r.parentNode.parentNode),n)return a?n:n.dataset[s]},doSetT:function(r,s){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(r,s):setTimeout(r,s)},shake:function(r,s=!0){return[...document.querySelectorAll(r)].forEach(function(a,n){a.classList.add("shake__an"),setTimeout(function(){a.classList.remove("shake__an")},460)}),Jt.neodigmUtils},hardReload:function(r="n55reset"){const s=new URLSearchParams(window.location.search);s.set(r,new Date().getTime());const a=s.toString();window.location.search=a}}))}const Jb={class:"auth-page"},Xb={class:"auth-page-right"},Qb={class:"auth-card"},Zb={class:"form-group"},ey={class:"form-group"},ty={class:"password-input-wrapper"},ry=["type"],sy={style:{"text-align":"right"}},ay={class:"auth-link-center"},ny={__name:"signin_route",setup(e){const t=Mt(),r=we(),s=(p="signin")=>{t.push({name:p})};let a=null;const n=ot(!1),o=()=>{n.value=!n.value},i=(p=3,f=1)=>{switch(r.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const _=Math.floor(Math.random()*p)+f,y=document.querySelector(".img__bg")?.classList;y&&(y.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),y.add(`img__bg--${_}`)),a||(a=de.subscribe("APP__ROUTE_SYNC",(w,m)=>{const h=JSON.parse(m);switch(Object.keys(h)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=r.appCLIFeatures?.features?.lang?.state;let _=r.appMeta.microcopy.language.filter(y=>y.code==f)[0]?.copy;_=_.filter(y=>y[0]==p.dataset.syncMicrocopyText)[0],_&&(p.textContent=_[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=r.appCLIFeatures?.features?.lang?.state;let _=r.appMeta.microcopy.language.filter(y=>y.code==f)[0]?.copy;_=_.filter(y=>y[0]==p.dataset.syncMicrocopyPlaceholder)[0],_&&(p.placeholder=_[1])})},c=p=>{Jt.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),r.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let _=null,y=null;if(!p?.value)_="Please enter your email",y="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)_="Please enter a valid email address",y="#inp__text--email";else if(!f?.value)_="Please enter your password",y="#inp__text--password";else if(f.value.length<10)_="Password must be at least 10 characters",y="#inp__text--password";else{const w={email:p.value,hash:Jt.neodigmUtils().genHash(f.value)};Ae.doSignin(w,m=>{const v=(m?.entity?.tags||[]).find(b=>b.userName)?.userName||"";if(r.appSession.session_user.authenticated=!0,r.appSession.session_user.email=w.email,r.appSession.session_user.fname=m?.entity?.first,r.appSession.session_user.lname=m?.entity?.last,r.appSession.session_user.userName=v,r.appSession.session_user.name=v,r.appSession.session_user.guid=m?.entity?.guid,r.saveSessionUser(),r.appCLIFeatures.features.sse.state){const b=m?.entity?.guid||r.appSession.session_user.guid;Fa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",b,r,!0)}})}_&&(c(y),neodigmToast.q(_,"danger"))};return Qt(()=>{i(),l()}),(p,f)=>(Xe(),ut("div",Jb,[f[10]||(f[10]=Rr('<div class="auth-page-left" data-v-bfc68e12><div class="auth-bg" data-v-bfc68e12><div class="auth-bg-image" data-v-bfc68e12></div><div class="auth-bg-image" data-v-bfc68e12></div><div class="auth-bg-image" data-v-bfc68e12></div></div><div class="auth-overlay" data-v-bfc68e12></div><div class="auth-branding-content" data-v-bfc68e12><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-bfc68e12><p class="auth-branding-tagline" data-v-bfc68e12>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-bfc68e12>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-bfc68e12> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),re("div",Xb,[re("div",Qb,[f[9]||(f[9]=re("div",{class:"auth-header"},[re("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),re("form",{class:"auth-form",onSubmit:sn(u,["prevent"])},[re("div",Zb,[f[4]||(f[4]=re("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),re("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=_=>d())},null,32)]),re("div",ey,[f[5]||(f[5]=re("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),re("div",ty,[re("input",{id:"inp__text--password",type:n.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,ry),re("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=_=>o()),tabindex:"-1"},[re("span",{class:dr(n.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),re("div",sy,[re("a",{class:"auth-link",onClick:f[2]||(f[2]=_=>s("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=re("div",{class:"auth-actions"},[re("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),re("p",ay,[f[6]||(f[6]=re("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=qr()),re("a",{class:"auth-link",onClick:f[3]||(f[3]=_=>s("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},oy=hr(ny,[["__scopeId","data-v-bfc68e12"]]),iy={class:"auth-page"},ly={__name:"signout_route",setup(e){const t=Mt();we();const r=()=>{mvvLegit.doSignout()},s=()=>{t.push({name:"home_route"})};return(a,n)=>(Xe(),ut("div",iy,[n[1]||(n[1]=Rr('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),re("div",{class:"auth-page-right"},[re("div",{class:"auth-card"},[n[0]||(n[0]=re("div",{class:"auth-header"},[re("h1",{class:"auth-title"},"Sign Out"),re("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),re("div",{class:"auth-actions"},[re("button",{onClick:r,class:"btn btn-red"}," Sign Out "),re("button",{onClick:s,class:"btn btn-outline"}," Cancel ")])])])]))}},cy=hr(ly,[["__scopeId","data-v-15bfefd6"]]),dy={class:"auth-page"},uy={class:"auth-page-right",style:{display:"block"}},py={class:"auth-card auth-card-wide"},fy={class:"form-group"},hy={class:"form-group"},my={class:"form-group"},gy={class:"form-group"},by={class:"form-group"},yy={class:"password-input-wrapper"},_y=["type"],vy={class:"form-group"},wy={class:"password-input-wrapper"},Ty=["type"],Sy={class:"form-group form-group-checkbox"},xy={class:"checkbox-label"},Ey={class:"auth-link-center"},ky={__name:"signup_route",setup(e){const t=Mt(),r=we(),s=(g="signin")=>{t.push({name:g})};let a=null,n=null;const o=ot(!1),i=ot(!1),l=ot(!1),c=()=>{o.value=!o.value},d=()=>{i.value=!i.value},u=g=>{g.preventDefault(),de.publish(r.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(g=3,v=1)=>{switch(r.appCLIFeatures.features.motif.state){case"brand":g=3,v=1;break;case"white_label":g=3,v=4;break}const b=Math.floor(Math.random()*g)+v,T=document.querySelector(".img__bg")?.classList;T&&(T.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),T.add(`img__bg--${b}`)),a||(a=de.subscribe("APP__ROUTE_SYNC",(P,k)=>{const S=JSON.parse(k);switch(Object.keys(S)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const v=r.appCLIFeatures?.features?.lang?.state;let b=r.appMeta.microcopy.language.filter(T=>T.code==v)[0]?.copy;b=b.filter(T=>T[0]==g.dataset.syncMicrocopyText)[0],b&&(g.textContent=b[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const v=r.appCLIFeatures?.features?.lang?.state;let b=r.appMeta.microcopy.language.filter(T=>T.code==v)[0]?.copy;b=b.filter(T=>T[0]==g.dataset.syncMicrocopyPlaceholder)[0],b&&(g.placeholder=b[1])})},_=g=>{Jt.neodigmUtils().shake(g||"#inp__text--email")},y=()=>{let g=document.querySelectorAll("#inp__text--email")[0].value;r.doCLI(g)},w=g=>{const v=[];return g.length<10&&v.push("at least 10 characters"),/[a-z]/.test(g)||v.push("1 lowercase"),/[A-Z]/.test(g)||v.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||v.push("1 special character"),/[^\x00-\x7F]/.test(g)&&v.push("ASCII characters only"),v},m=async()=>{const g=document.querySelector("#inp__text--username"),v=g?.value?.trim();if(v)try{(await Ae.checkUserName(v)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),g.value="",g.focus())}catch(b){console.error("Error checking username:",b)}},h=()=>{const g=document.querySelector("#inp__text--first-name"),v=document.querySelector("#inp__text--last-name"),b=document.querySelector("#inp__text--email"),T=document.querySelector("#inp__text--username"),P=document.querySelector("#inp__text--password"),k=document.querySelector("#inp__text--verify-password");let S=null,x=null;if(!g?.value)S="Please enter your first name",x="#inp__text--first-name";else if(!v?.value)S="Please enter your last name",x="#inp__text--last-name";else if(!b?.value)S="Please enter your email",x="#inp__text--email";else if(b.value.indexOf("@")===-1||b.value.indexOf(".")===-1)S="Please enter a valid email address",x="#inp__text--email";else if(!T?.value)S="Please enter a user name",x="#inp__text--username";else if(!P?.value)S="Please enter a password",x="#inp__text--password";else{const C=w(P.value);if(C.length>0)S="Password must have:|"+C.join(", "),x="#inp__text--password";else if(!k?.value)S="Please verify your password",x="#inp__text--verify-password";else if(P.value!==k.value)S="Passwords do not match",x="#inp__text--verify-password";else{const $=g.value.trim(),M=v.value.trim(),j=[{userName:T.value.trim(),ts:Date.now()}],Q={email:b.value,hash:Jt.neodigmUtils().genHash(P.value),first:$,last:M,company:"",phone:"",tags:j};Ae.doSignup(Q,se=>{se.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}S&&(_(x),neodigmToast.q(S,"danger"))};return Qt(()=>{p(),f(),n||(n=de.subscribe(r.hierTopics.ROUTE__SIGNUP__TERMS,(g,v)=>{JSON.parse(v).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(g,v)=>(Xe(),ut("div",dy,[v[23]||(v[23]=Rr('<div class="auth-page-left" data-v-0b7e4c3a><div class="auth-bg" data-v-0b7e4c3a><div class="auth-bg-image" data-v-0b7e4c3a></div><div class="auth-bg-image" data-v-0b7e4c3a></div><div class="auth-bg-image" data-v-0b7e4c3a></div></div><div class="auth-overlay" data-v-0b7e4c3a></div><div class="auth-branding-content" data-v-0b7e4c3a><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-0b7e4c3a><p class="auth-branding-tagline" data-v-0b7e4c3a>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-0b7e4c3a>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-0b7e4c3a> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),re("div",uy,[re("div",py,[re("form",{class:"auth-form",onSubmit:sn(h,["prevent"])},[re("div",fy,[v[12]||(v[12]=re("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),re("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:v[0]||(v[0]=qt(b=>h(),["enter"]))},null,32)]),re("div",hy,[v[13]||(v[13]=re("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),re("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:v[1]||(v[1]=qt(b=>h(),["enter"]))},null,32)]),re("div",my,[v[14]||(v[14]=re("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),re("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:v[2]||(v[2]=b=>y()),onKeyup:v[3]||(v[3]=qt(b=>h(),["enter"]))},null,32)]),re("div",gy,[v[15]||(v[15]=re("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),re("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:v[4]||(v[4]=b=>m()),onKeyup:v[5]||(v[5]=qt(b=>h(),["enter"]))},null,32)]),re("div",by,[v[16]||(v[16]=re("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),re("div",yy,[re("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:v[6]||(v[6]=qt(b=>h(),["enter"]))},null,40,_y),re("button",{type:"button",class:"password-toggle-btn",onClick:v[7]||(v[7]=b=>c()),tabindex:"-1"},[re("span",{class:dr(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),v[17]||(v[17]=re("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),re("div",vy,[v[18]||(v[18]=re("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),re("div",wy,[re("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:v[8]||(v[8]=qt(b=>h(),["enter"]))},null,40,Ty),re("button",{type:"button",class:"password-toggle-btn",onClick:v[9]||(v[9]=b=>d()),tabindex:"-1"},[re("span",{class:dr(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),re("div",Sy,[re("label",xy,[Ep(re("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":v[10]||(v[10]=b=>l.value=b),class:"terms-checkbox"},null,512),[[nh,l.value]]),v[19]||(v[19]=re("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),re("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),v[22]||(v[22]=re("div",{class:"auth-actions"},[re("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),re("p",Ey,[v[20]||(v[20]=re("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),v[21]||(v[21]=qr()),re("a",{class:"auth-link",onClick:v[11]||(v[11]=b=>s("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},Py=hr(ky,[["__scopeId","data-v-0b7e4c3a"]]),Ay={class:"auth-page"},Oy={class:"auth-page-right"},Cy={class:"auth-card"},$y={class:"form-group"},Ry={class:"auth-link-center"},My={__name:"forgot_route",setup(e){const t=Mt(),r=we(),s=(c="signin_route")=>{t.push({name:c})};let a=null;const n=(c=3,d=1)=>{switch(r.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),a||(a=de.subscribe("APP__ROUTE_SYNC",(f,_)=>{const y=JSON.parse(_);switch(Object.keys(y)[0]){case"Motif":n();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=r.appCLIFeatures?.features?.lang?.state;let u=r.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=r.appCLIFeatures?.features?.lang?.state;let u=r.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},i=c=>{Jt.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Ae.genHeaders()};fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{s("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(i(u),neodigmToast.q(d,"danger"))};return Qt(()=>{n(),o()}),(c,d)=>(Xe(),ut("div",Ay,[d[7]||(d[7]=Rr('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),re("div",Oy,[re("div",Cy,[d[6]||(d[6]=re("div",{class:"auth-header"},[re("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),re("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),re("form",{class:"auth-form",onSubmit:sn(l,["prevent"])},[re("div",$y,[d[2]||(d[2]=re("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),re("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=qt(u=>l(),["enter"]))},null,32)]),d[5]||(d[5]=re("div",{class:"auth-actions"},[re("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),re("p",Ry,[d[3]||(d[3]=re("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=qr()),re("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>s("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Ly={class:"auth-page"},Ny={class:"auth-page-right"},Iy={class:"auth-card"},Dy={class:"form-group"},By={class:"password-input-wrapper"},Fy=["type"],zy={class:"form-group"},jy={class:"password-input-wrapper"},Uy=["type"],Hy={__name:"resethash_route",setup(e){const t=Mt(),r=we(),s=()=>{t.push({name:"home_route"})};let a=null;const n=ot(!1),o=ot(!1),i=()=>{n.value=!n.value},l=()=>{o.value=!o.value},c=(_=3,y=1)=>{switch(r.appCLIFeatures.features.motif.state){case"brand":_=3,y=1;break;case"white_label":_=3,y=4;break}const w=Math.floor(Math.random()*_)+y,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${w}`)),a||(a=de.subscribe("APP__ROUTE_SYNC",(h,g)=>{const v=JSON.parse(g);switch(Object.keys(v)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(_=>{const y=r.appCLIFeatures?.features?.lang?.state;let w=r.appMeta.microcopy.language.filter(m=>m.code==y)[0]?.copy;w=w.filter(m=>m[0]==_.dataset.syncMicrocopyText)[0],w&&(_.textContent=w[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(_=>{const y=r.appCLIFeatures?.features?.lang?.state;let w=r.appMeta.microcopy.language.filter(m=>m.code==y)[0]?.copy;w=w.filter(m=>m[0]==_.dataset.syncMicrocopyPlaceholder)[0],w&&(_.placeholder=w[1])})},u=_=>{Jt.neodigmUtils().shake(_||"#inp__text--password")},p=_=>{const y=[];return _.length<10&&y.push("at least 10 characters"),/[a-z]/.test(_)||y.push("1 lowercase"),/[A-Z]/.test(_)||y.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(_)||y.push("1 special character"),/[^\x00-\x7F]/.test(_)&&y.push("ASCII characters only"),y},f=()=>{const _=document.querySelector("#inp__text--password"),y=document.querySelector("#inp__text--verify-password");let w=null,m=null;if(!_?.value)w="Please enter a password",m="#inp__text--password";else{const h=p(_.value);if(h.length>0)w="Password must have:|"+h.join(", "),m="#inp__text--password";else if(!y?.value)w="Please verify your password",m="#inp__text--verify-password";else if(_.value!==y.value)w="Passwords do not match",m="#inp__text--verify-password";else{const g=r.appSession.session_user.email||"",v={email:g,hash:Jt.neodigmUtils().genHash(_.value),modified_by:g},b={method:"POST",body:JSON.stringify(v),headers:Ae.genHeaders()};fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/acctEntity/resetHash",b).then(T=>T.json()).then(T=>{T.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(T=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}w&&(u(m),neodigmToast.q(w,"danger"))};return Qt(()=>{c(),d()}),(_,y)=>(Xe(),ut("div",Ly,[y[9]||(y[9]=Rr('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),re("div",Ny,[re("div",Iy,[y[8]||(y[8]=re("div",{class:"auth-header"},[re("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),re("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),re("form",{class:"auth-form",onSubmit:sn(f,["prevent"])},[re("div",Dy,[y[4]||(y[4]=re("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),re("div",By,[re("input",{id:"inp__text--password",type:n.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:y[0]||(y[0]=qt(w=>f(),["enter"]))},null,40,Fy),re("button",{type:"button",class:"password-toggle-btn",onClick:y[1]||(y[1]=w=>i()),tabindex:"-1"},[re("span",{class:dr(n.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),y[5]||(y[5]=re("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),re("div",zy,[y[6]||(y[6]=re("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),re("div",jy,[re("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:y[2]||(y[2]=qt(w=>f(),["enter"]))},null,40,Uy),re("button",{type:"button",class:"password-toggle-btn",onClick:y[3]||(y[3]=w=>l()),tabindex:"-1"},[re("span",{class:dr(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),re("div",{class:"auth-actions"},[y[7]||(y[7]=re("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),re("button",{type:"button",onClick:s,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},qy=hr(Hy,[["__scopeId","data-v-3ae2c87b"]]),Gy={class:"auth-page"},Vy={class:"auth-page-right"},Ky={class:"auth-card"},Yy={class:"verification-content"},Wy={class:"timer-display"},Jy={__name:"verf_link_route",setup(e){const t=Mt();cu(),we();const r=ot(7200);let s=null;const a=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},n=()=>{s=setInterval(()=>{r.value--,r.value<=0&&(clearInterval(s),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return Qt(()=>{n()}),Za(()=>{s&&clearInterval(s)}),(o,i)=>(Xe(),ut("div",Gy,[i[4]||(i[4]=Rr('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),re("div",Vy,[re("div",Ky,[i[3]||(i[3]=re("div",{class:"auth-header"},[re("h1",{class:"auth-title"},"Check Your Email"),re("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),re("div",Yy,[i[0]||(i[0]=re("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=re("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=re("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),re("div",Wy,Dc(a(r.value)),1)])])])]))}},Xy=hr(Jy,[["__scopeId","data-v-d92b2a33"]]),za=Pm({history:om(),routes:[{path:"/",name:"splash_route",component:sl},{path:"/splash_route",name:"splash_route",component:sl},{path:"/error_route",name:"error_route",component:Ls},{path:"/forgot_route",name:"forgot_route",component:My},{path:"/resetforgot_route",name:"resetforgot_route",component:Ls},{path:"/resethash_route",name:"resethash_route",component:qy},{path:"/signin_route",name:"signin_route",component:oy},{path:"/signout_route",name:"signout_route",component:cy},{path:"/signup_route",name:"signup_route",component:Py},{path:"/verf_link_route",name:"verf_link_route",component:Xy},{path:"/offline_route",name:"offline_route",component:Ls},{path:"/home_route",name:"home_route",component:qb},{path:"/appFAQ",name:"appFAQ",component:Ls},{path:"/appHelp",name:"appHelp",component:Wb}]});za.beforeEach((e,t,r)=>{if(e.query.brand!==void 0){const s=e.query.brand;s==="null"||s===""?Ts.clearBrand():Ts.setBrand(s);const a={...e.query};delete a.brand,r({...e,query:a,replace:!0})}else r()});class Qy extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=$e.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,r,s){r!==s&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT"}get gameModeBadge(){if(typeof window.GameMode>"u")return null;const t=window.GameMode.get(this.gameType);return t?t.getBadge():null}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),r=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(r)?r[1]?.length||0:r.guids?.length||0,max:Array.isArray(r)?parseInt(r[0]?.max||0):r.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return $e.theme}isUserParticipating(){const r=document.getElementById("app")?.dataset?.userGuid;if(!r)return!1;try{const s=this.getAttribute("data-bma-tourn-entities"),a=s?JSON.parse(s):{guids:[]};return(Array.isArray(a)?a[1]||[]:a.guids||[]).includes(r)}catch{return!1}}getUserTrophy(){const r=document.getElementById("app")?.dataset?.userGuid;if(!r)return null;try{const s=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const a of s){if(typeof a!="object"||!a)continue;let n=null;if(a.entity_guid===r&&a.badge?n=a.badge:a[r]&&(n=a[r]),n?.includes("gold"))return"gold";if(n?.includes("silver"))return"silver";if(n?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let r=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(r=new Date(t+"Z"));const s=Date.now(),a=r.getTime()-s;if(a<=0)return null;const n=Math.floor(a/864e5),o=Math.floor(a%864e5/36e5),i=Math.floor(a%36e5/6e4);return n>0?`${n}d ${o}h`:o>0?`${o}h ${i}m`:`${i}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const r=this.getCountdown();t.textContent=r||"",r||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},r=this.sportsAllowed;if(!Array.isArray(r)||r.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const s=Math.min(r.length,3);let a="";for(let n=0;n<s;n++){const o=r[n].key||r[n],i=mt.find(d=>d.key===o),l=i?i.group:"default",c=t[o]||o.replace(/^[a-z]+_/,"").toUpperCase();a+=`<span class="lc__sport-item"><bma-sport-icon sport="${o}" data-sport-group="${l}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return r.length>3&&(a+=`<span class="lc__sport-count" data-sport-overflow="true">+${r.length-3}</span>`),a}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(r=>{const s=r.key||r;return t[s]||s.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,r,s,a){const n=(t-r)/2,o=2*Math.PI*n,i=o-s/100*o,l=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${l}" cy="${l}" r="${n}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${r}" />
            <circle cx="${l}" cy="${l}" r="${n}"
                fill="none" stroke="${a}" stroke-width="${r}"
                stroke-linecap="round"
                stroke-dasharray="${o}"
                stroke-dashoffset="${i}"
                transform="rotate(-90 ${l} ${l})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(r=>{r.addEventListener("click",s=>{s.stopPropagation(),this.dispatchAction(r.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",r=>{r.stopPropagation();const s=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(s,"info")})}render(){const t=this.isUserParticipating(),r=this.getUserTrophy(),s=this.status.toLowerCase(),a=t&&this.status!=="COMPLETED",n=!t&&this.status==="UPCOMING";this.userRank;const o=(this.entities.current/(this.entities.max||1)*100).toFixed(1);this.getCountdown();const l={upcoming:"#00E676",locked:"#F7C60D",completed:"#CD5659"}[s]||"#969696",c=52,d=3,u=m=>m.length>7?"sm":m.length>5?"md":"lg",p=`${this.entities.current}/${this.entities.max}`,f=u(p);let _="";r?_=`<span class="ring__trophy ring__trophy--${r}"></span>`:_=`<span class="ring__entrants ring__entrants--${f}">${this.entities.current}<span class="ring__entrants-sep">/</span>${this.entities.max}</span>`;const w=parseFloat(this.tournamentDollars).toLocaleString();this.shadowRoot.innerHTML=`
            <style>
                ${ft()}
                ${mr()}

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
                                ${_}
                            </div>
                        </div>
                    </div>
                    <div class="lc__name">${this.caption}</div>
                    <div class="lc__actions">
                        <button class="lc__btn lc__btn--info" data-action="INFO" aria-label="Info">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                            Info
                        </button>
                        ${a?`<button class="lc__btn lc__btn--play" data-action="PLAY" aria-label="Play">
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
                        <div class="lc__stat-val lc__stat-val--accent">${w}</div>
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
        `}}customElements.define("bma-tournament-list-card",Qy);const De={updateTDBalance(e,t){const r=document.querySelector(e);if(!r)return;t%1!==0?r.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,r,s=null,a=0){const n=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),i=document.querySelector("#summary-payout");n&&(this.updateTDBalance("#summary-balance",e),e<0?n.classList.add("summary-cell__red"):n.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),i&&(i.textContent=r.toFixed(2),r<0?i.classList.add("summary-cell__red"):i.classList.remove("summary-cell__red"));const l=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(l){let d="";if(s){const p=s.tournament_dollars||0,f=e-p;f>0?d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(d=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const u=e<0?"#FF5252":"#00E676";l.innerHTML=`<span style="color: ${u};">TD$ ${e.toLocaleString()}</span>${d}`}if(c){const d=a||r||0;let u="";d>0&&(u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${d.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${u}`}if(s&&s.tournament_dollars){const d=s.tournament_dollars,u=document.querySelector(".dash-stat__gauge-fill--balance");if(u){const f=Math.max(e/d*100,0);u.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(t/d*100,100);p.style.width=`${f}%`}}},categorizeTournaments(e,t,r,s,a={}){const n=[],{subStatus:o="all",sort:i="default",result:l="all",odds:c="all"}=a,d=P=>(P.entities?.guids||[]).includes(s),u=P=>P.status==="UPCOMING"||P.class==="UPCOMING",p=P=>P.status==="LOCKED"||P.class==="LOCKED",f=P=>u(P)||p(P),_=P=>P.status==="COMPLETED"||P.class==="COMPLETED",y=P=>Array.isArray(P.matches_expanded)&&P.matches_expanded.length>0,w=(P,k)=>(P.sports_allowed||[]).some(S=>S.key===k),m=P=>mt.find(k=>k.key===P)?.title||P,h=P=>{const k=P.tags||[];for(const S of k)if(!(typeof S!="object"||!S)&&(S.entity_guid===s&&S.badge||S[s]))return!0;return!1},g=P=>{if(i==="default")return P;const k=[...P];switch(i){case"starting_soon":k.sort((S,x)=>new Date(S.window_start_time||0)-new Date(x.window_start_time||0));break;case"most_entrants":k.sort((S,x)=>(x.entities?.guids?.length||0)-(S.entities?.guids?.length||0));break;case"fewest_spots":k.sort((S,x)=>{const C=(S.entities?.max||0)-(S.entities?.guids?.length||0),$=(x.entities?.max||0)-(x.entities?.guids?.length||0);return C-$});break;case"recently_active":k.sort((S,x)=>new Date(x.status_time||0)-new Date(S.status_time||0));break;case"newest":k.sort((S,x)=>new Date(x.status_time||0)-new Date(S.status_time||0));break;case"td_high":k.sort((S,x)=>parseFloat(x.tournament_dollars||0)-parseFloat(S.tournament_dollars||0));break;case"td_low":k.sort((S,x)=>parseFloat(S.tournament_dollars||0)-parseFloat(x.tournament_dollars||0));break}return k},v=P=>l==="all"?P:l==="trophy"?P.filter(k=>h(k)):l==="no_trophy"?P.filter(k=>!h(k)):P;let b=e,T="";if(r==="multi"?(b=e.filter(P=>(P.sports_allowed?.length||0)>1),T="Multi-Sport "):r!=="all"&&(b=e.filter(P=>w(P,r)),T=m(r)+" "),t==="lobby"){let P=b;if(o==="open"?P=b.filter(k=>u(k)):o==="locked"?P=b.filter(k=>p(k)):o==="completed"&&(P=b.filter(k=>_(k))),o==="all"){const k=g(P.filter(C=>u(C)&&!d(C)));n.push({title:`Open Entry ${T}Tournaments`,tournaments:k});const S=g(P.filter(C=>p(C)&&!d(C)));S.length>0&&n.push({title:`In Progress - Entry Closed ${T}Tournaments`,tournaments:S});const x=g(P.filter(C=>_(C))).slice(0,20);x.length>0&&n.push({title:`Recently Completed ${T}Tournaments`,tournaments:x})}else{const k=g(P),S={open:"Open",locked:"In Progress",completed:"Completed"};k.length>0&&n.push({title:`${S[o]} ${T}Tournaments`,tournaments:k})}}else if(t==="my"){const P=b.filter($=>d($));let k=P.filter($=>f($));o==="active"?k=k.filter($=>p($)):o==="upcoming"&&(k=k.filter($=>u($))),c==="available"?k=k.filter($=>y($)):c==="none"&&(k=k.filter($=>!y($)));const S=g(k);n.push({title:`Your Active ${T}Tournaments`,tournaments:S});const x=v(P.filter($=>_($))),C=g(x);C.length>0&&n.push({title:`Your Completed ${T}Tournaments`,tournaments:C})}else if(t==="completed"){const P=g(v(b.filter(S=>d(S)&&_(S))));P.length>0&&n.push({title:`Your Completed ${T}Tournaments`,tournaments:P});const k=g(b.filter(S=>!d(S)&&_(S)));k.length>0&&n.push({title:`Other Completed ${T}Tournaments`,tournaments:k})}else t==="private"?n.push({title:"Private Contests",tournaments:[],emptyMessage:"Private Contests Coming Soon",emptySubtext:"Create and join private contests with friends — feature in development"}):n.push({title:"Tournaments",tournaments:e});return n},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=we();t.appSession?.session_user?.guid;const r=e.tournament_dollars||1e4;let s=0,a=0,n=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const w=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.tournament_guid===e.guid);console.log("[Dashboard Update] Found",w.length,"existing bets for this tournament"),w.forEach(m=>{(m.bet||[]).forEach(g=>{Object.keys(g).filter(b=>b!=="short_title").forEach(b=>{const T=g[b];T&&(T.stake&&(s+=parseFloat(T.stake)),T.reconciled===!0&&T.payout>0&&(a+=parseFloat(T.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const y=parseFloat(o.textContent)||0;n=Math.max(0,y-s),console.log("[Dashboard Update] Summary total stakes:",y,"Pending:",n)}const i=s+n,l=r-s-n+a;console.log("[Dashboard Update] TD$:",r,"Committed:",s,"Pending:",n,"Payouts:",a,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");if(c){const y=l-r;let w="";y>0?w=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${y.toLocaleString()})</span>`:y<0&&(w=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${y.toLocaleString()})</span>`);const m=l<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${m};">TD$ ${l.toLocaleString()}</span>${w}`}const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".dash-stat__gauge-fill--pending");if(d){const y=n>0?n:i,w=a||0;let m="";if(w>0&&(m=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${w.toLocaleString()})</span>`),d.innerHTML=`TD$ ${y.toLocaleString()}${m}`,u){const h=Math.min(y/r*100,100);u.style.width=`${h}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const y=Math.max(l/r*100,0);p.style.width=`${y}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&e){const y=e.entities?.guids?.length||0,w=e.entities?.max||100,m=y/w*100;f.style.width=`${m}%`}const _=document.getElementById("game-mode-progress");if(_&&typeof window.GameMode<"u"){const y=e.class||"DEFAULT",w=window.GameMode.get(y),m=t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(g=>g.coreTournaments__guid===e.guid||g.tournament_guid===e.guid):[],h=w.getProgressUI(m,e);if(h.type!=="NONE"){const g=h.typesStatus?h.typesStatus.map(b=>b.placed?`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: rgba(0, 230, 118, 0.12); box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.35); color: #00E676; font-size: 0.72rem; font-weight: 700; letter-spacing: 0.3px;">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="#00E676"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                            ${b.label}${b.count>1?' <span style="opacity: 0.7;">×'+b.count+"</span>":""}
                        </span>`:`<span style="display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 9999px; background: transparent; box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.12); color: rgba(255,255,255,0.35); font-size: 0.72rem; font-weight: 600; letter-spacing: 0.3px;">
                            ${b.label}
                        </span>`).join(""):"",v=h.hints.length>0&&!h.complete?`<p style="font-size: 0.72rem; color: rgba(255,255,255,0.5); margin: 0; text-align: center;">${h.hints[0]}</p>`:h.complete?'<p style="font-size: 0.72rem; color: #00E676; margin: 0; text-align: center; font-weight: 600;">Lineup complete — ready to submit!</p>':"";_.style.display="block",_.innerHTML=`
                    <div style="margin: 0 8px 10px; padding: 14px 16px; background: rgba(20, 20, 20, 0.65); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); background-image: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, transparent 40%, rgba(0,0,0,0.1) 100%); border-radius: var(--card-radius, 12px); box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08), 0 4px 16px rgba(0,0,0,0.4);">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                            <span style="font-size: 0.72rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1px; color: var(--status-locked-text, #F7C60D);">Your Lineup</span>
                            <span style="font-size: 0.75rem; font-weight: 700; color: ${h.percent>=100?"#00E676":"rgba(255,255,255,0.7)"};">${h.label}</span>
                        </div>
                        <div style="height: 6px; background: rgba(255,255,255,0.06); border-radius: 6px; overflow: hidden; margin-bottom: 12px;">
                            <div style="height: 100%; width: ${h.percent}%; background: ${h.complete?"linear-gradient(90deg, #00E676, #69F0AE)":"linear-gradient(90deg, var(--status-locked-text, #F7C60D), #FFD54F)"}; border-radius: 6px; transition: width 0.3s ease;"></div>
                        </div>
                        <div style="display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: ${v?"10px":"0"};">${g}</div>
                        ${v}
                    </div>`}else _.style.display="none",_.innerHTML=""}},renderMatchCards(e){if(!e)return;const t=document.querySelector(".select-grid");if(!t)return;if(t.innerHTML="",!e.matches_expanded||!Array.isArray(e.matches_expanded)||e.matches_expanded.length===0){t.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const r=new Date,s=[...e.matches_expanded].sort((n,o)=>{const i=new Date(n.scheduled_at),l=new Date(o.scheduled_at),c=i<r,d=l<r;return c&&!d?1:!c&&d?-1:i-l}),a=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let i=0;o&&we().coreTourn.length>0&&(i=we().coreTourn[we().coreTourn.length-1].data.find(_=>_.guid===o)?.tournament_dollars||0);const l=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=l?l.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=we();de.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:i,bets:d,timestamp:Date.now()}))};s.forEach(n=>{const i=new Date(n.scheduled_at)<r;let l=!1;try{l=(typeof n.scoreboard_data=="string"?JSON.parse(n.scoreboard_data):n.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",n.id),c.setAttribute("data-match-guid",n.odds_id||n.guid||n.id),c.setAttribute("data-match-title",n.title),c.setAttribute("data-match-short-title",n.short_title||n.title),c.setAttribute("data-scheduled-at",n.scheduled_at),c.setAttribute("data-home-team",n.home_team_id||"Home"),c.setAttribute("data-away-team",n.away_team_id||"Away"),c.setAttribute("data-is-disabled",i||l?"true":"false"),c.setAttribute("data-sync-theme","dark"),n.odds_markets){const d=typeof n.odds_markets=="string"?n.odds_markets:JSON.stringify(n.odds_markets);c.setAttribute("data-odds-markets",d)}if(n.scoreboard_data){const d=typeof n.scoreboard_data=="string"?n.scoreboard_data:JSON.stringify(n.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(n.sport_id)c.setAttribute("data-sport-key",n.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const _=document.querySelector(".bet-grid__slip-BETSLIP-content");if(_){const y=_.querySelectorAll("bma-bet-entry");let w=!1;y.forEach(m=>{if(w)return;const h=m.getAttribute("data-content-type"),g=m.getAttribute("data-content-odds");h===u.type&&g===u.price&&(m.remove(),w=!0)}),_.children.length===0&&(_.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}f.classList.remove("btn--active"),setTimeout(()=>{a()},100)}else{const _=document.querySelector(".play-cntr"),y=_?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const h=window.GameMode.get(y),g=we(),v=g.coreBetSlip.length>0?g.coreBetSlip[g.coreBetSlip.length-1].data.filter(T=>T.coreTournaments__guid===_?.dataset?.currentTournGuid):[],b=h.canPlaceBet({matchGuid:u.matchGuid,type:u.type,team:u.team},v,null);if(!b.allowed){typeof neodigmToast<"u"&&neodigmToast.q(b.reason,"warning",3e3);return}}document.querySelectorAll("bma-bet-match-card").forEach(h=>{h.shadowRoot.querySelectorAll(".btn--selected").forEach(g=>{g.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const w=we(),m=u.type;m==="spread"?de.publish(w.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):m==="money"?de.publish(w.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):m==="total"&&de.publish(w.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),de.publish(w.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const r=document.querySelector("[data-publish-betslip]");r&&delete r.dataset.processing;const s=document.querySelector(".bet-grid__slip-BETSLIP-content");s&&(s.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const a=we();if(a.coreTourn.length>0){const i=a.coreTourn[a.coreTourn.length-1].data.find(l=>l.guid===e);i&&De.renderMatchCards(i)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{de.publish(a.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const n=document.querySelector(".bet-grid__slip");n&&n.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(s=>{try{return JSON.parse(s.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(s=>{const a=s.getAttribute("data-match-guid"),n=s.getAttribute("data-home-team"),o=s.getAttribute("data-away-team");(s.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?n:o;t.some(_=>{if(_.coreMatches__guid!==a)return!1;const y=_.bet||[];if(y.length===0)return!1;const w=y[0],h=Object.keys(w).filter(b=>b!=="short_title")[0],v=w[h]?.type;return c==="total"?v===c:v===c&&h===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},updatePlayButton(){const e=we(),t=document.querySelector(".play-cntr"),r=t?.dataset?.currentTournGuid,s=t?.dataset?.currentTournAction||"INFO",a=document.getElementById("btn-join__play--id");if(!a||!r||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===r);if(!o)return;const i=e.appSession?.session_user?.guid,l=o.entities?.guids?.includes(i),c=o.status;a.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(a.style.visibility="",c==="UPCOMING"&&!l?s==="INFO"?(a.textContent="Join",a.dataset.requiresJoin="true"):s==="PLAY"&&(a.textContent="Play",a.dataset.requiresJoin="false"):(a.textContent="Play",a.dataset.requiresJoin="false"))},populateInfoPage(){const e=we(),r=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!r||e.coreTourn.length===0)return;const a=e.coreTourn[e.coreTourn.length-1].data.find(K=>K.guid===r);if(!a)return;const n=document.getElementById("pop-play__caro-info-summary1--id");if(!n)return;const o=K=>{if(!K)return"N/A";let B=new Date(K);return!K.includes("Z")&&!K.match(/[+-]\d{2}:\d{2}$/)&&(B=new Date(K+"Z")),isNaN(B.getTime())?"Invalid Date":B.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};a.status&&`${a.status.toLowerCase()}`;const i={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},l=a.sports_allowed&&Array.isArray(a.sports_allowed)?a.sports_allowed.map(K=>{const B=K.key||K,I=mt.find(A=>A.key===B),U=I?I.group:"default",F=i[B]||I?.title||B;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${B}" data-sport-group="${U}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${F}</span>
                </span>`}).join(""):"N/A",c=e.appSession?.session_user?.guid,d=a.entities?.guids?.includes(c),u=a.entities?.guids?.length||0,p=a.entities?.max||0;(u/(p||1)*100).toFixed(1);const f=(()=>{const K=new Date(a.window_start_time),B=new Date(a.window_end_time),I=new Date;if(isNaN(K.getTime())||isNaN(B.getTime()))return"";const U=B-K,F=I-K;let A=0,R="";if(I<K){A=0;const V=K-I,L=Math.floor(V/864e5),z=Math.floor(V%864e5/36e5);R=L>0?`First match in ${L}d ${z}h`:`First match in ${z}h`}else if(I>B){const V=new Date(B.getFullYear(),B.getMonth(),B.getDate()),L=new Date(I.getFullYear(),I.getMonth(),I.getDate());A=V.getTime()===L.getTime()?95:100,R=A===100?"Tournament Complete":"Last Day"}else{A=Math.min(100,F/U*100);const V=Math.ceil(U/864e5),L=Math.ceil(F/864e5);R=L>=V?"Last Day":`Day ${L} of ${V}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${R}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${A.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),_=a.tags||[],w=_.some(K=>K.override_last_match_close===!0)?"+":"",m=_.some(K=>K.match_inprogress_lock===!0),h=_.some(K=>K.override_last_match_close===!0);let g="Free Play",v=null,b="";if(typeof window.GameMode<"u"){const K=window.GameMode.get(a.class||"DEFAULT"),B=K.getEffectiveRules(a);if(v=K.getBadge(),g=K.label,B.stakeRule==="SPEND_ALL"&&(b+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend All TD$</span></div>'),B.requiredBetTypes.length>0){const I=B.requiredBetTypes.map(U=>U==="SPREAD"?"Spread":U==="MONEY"?"Money Line":"Over/Under").join(", ");b+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${I}</span></div>`}B.oneBetPerMatchPerType&&(b+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const T=(()=>{const B=(a.tags||[]).find(A=>A.badge_gold!==void 0||A.badge_silver!==void 0||A.badge_bronze!==void 0);if(!B)return null;const I=B.badge_gold||0,U=B.badge_silver||0,F=B.badge_bronze||0;return I===0&&U===0&&F===0?null:{gold:I,silver:U,bronze:F}})(),P=a.status==="LOCKED"?"info-status-band--locked":a.status==="UPCOMING"?"info-status-band--open":a.status==="COMPLETED"?"info-status-band--completed":"",k=a.status==="LOCKED"?d?"In Progress — Entered":"In Progress":a.status==="UPCOMING"?d?"Open — Entered":"Open for Entry":a.status==="COMPLETED"?"Completed":a.status,S=a.matches_expanded?.length||0,x=S===0?"TBD":`${S}${w}`,C=`
            <div class="info-key-stats">
                <div class="info-key-stat">
                    <span class="info-key-stat__value" style="color: var(--status-upcoming-text, #00E676);">TD$ ${Number(a.tournament_dollars||0).toLocaleString()}</span>
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
            </div>`;a.status==="LOCKED"||a.status==="UPCOMING"||a.status,a.status==="LOCKED"||a.status;const $=`
            <div class="info-detail-row"><span>Game Mode</span><span>${g}${v?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${v.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${v.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${m?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${m?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${h?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${h?"On-going":"Fixed slate"}</span></div>
            ${b}
        `,M=`
            <div class="info-detail-row"><span>Sports</span><span>${l}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${o(a.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends</span><span>${o(a.window_end_time)}</span></div>
        `,j=T?`
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
        </div>`,Q=(()=>{if(!a.matches_expanded||!Array.isArray(a.matches_expanded)||a.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let K=0,B=0,I=0;const U=new Date;a.matches_expanded.forEach(z=>{let G=null;try{G=typeof z.scoreboard_data=="string"?JSON.parse(z.scoreboard_data):z.scoreboard_data}catch{}G?.time_remaining?G.time_remaining.toLowerCase()==="final"?K++:B++:new Date(z.scheduled_at)<U?K++:I++});const F=B>0?"live":"upcoming",A=[];K>0&&A.push(`<span class="match-filter-btn${F==="final"?" match-filter--active":""}" data-filter="final">${K} Final</span>`),B>0&&A.push(`<span class="match-filter-btn match-filter-btn--live${F==="live"?" match-filter--active":""}" data-filter="live">${B} Live</span>`),I>0&&A.push(`<span class="match-filter-btn match-filter-btn--upcoming${F==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${I} Upcoming</span>`);const R=A.length>0?`<div class="match-filter-bar">${A.join("")}</div>`:"",V=new Date,L=a.matches_expanded.map(z=>{const G=z.scoreboard_data?typeof z.scoreboard_data=="string"?z.scoreboard_data:JSON.stringify(z.scoreboard_data):"";let te="upcoming",D=null;try{D=typeof z.scoreboard_data=="string"?JSON.parse(z.scoreboard_data):z.scoreboard_data}catch{}D?.time_remaining?te=D.time_remaining.toLowerCase()==="final"?"final":"live":te=new Date(z.scheduled_at)<V?"final":"upcoming";const E=te!==F;return`<bma-match-status
                    data-match-guid="${z.guid||z.odds_id||z.id||""}"
                    data-match-title="${z.short_title||z.title||"Match"}"
                    data-match-scheduled-at="${z.scheduled_at||""}"
                    data-match-home-team="${z.home_team_id||"Home"}"
                    data-match-away-team="${z.away_team_id||"Away"}"
                    data-match-home-score="${z.home_team_score!==null&&z.home_team_score!==void 0?z.home_team_score:""}"
                    data-match-away-score="${z.away_team_score!==null&&z.away_team_score!==void 0?z.away_team_score:""}"
                    data-match-scoreboard="${G.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${z.sport_id||""}"
                    data-match-status="${te}"
                    data-sync-theme="dark"
                    style="${E?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${R}
                </div>
                <div class="matches-scroll-container" id="info-matches-scroll" style="max-height: 480px; overflow-y: auto; position: relative; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.15) transparent;">
                    ${L}
                </div>
                <div class="matches-scroll-fade" style="height: 32px; margin-top: -32px; position: relative; pointer-events: none; background: linear-gradient(to top, rgba(16,16,16,0.95), transparent); z-index: 1;"></div>
            `})();n.innerHTML=`
            <div class="info-status-band ${P}">${k}</div>
            ${f?`<div class="info-surface" style="margin: 8px 0; padding: 12px 16px;">${f}</div>`:""}
            <div class="info-surface" style="margin: 0 0 8px;">
                ${C}
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
                <div class="info-tab-panel" data-info-panel="summary">${M}</div>
                <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${j}</div>
                <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${Q}</div>
            </div>
        `,n.querySelectorAll(".info-tab").forEach(K=>{K.addEventListener("click",()=>{n.querySelectorAll(".info-tab").forEach(I=>I.classList.remove("info-tab--active")),K.classList.add("info-tab--active");const B=K.dataset.infoTab;n.querySelectorAll(".info-tab-panel").forEach(I=>{I.style.display=I.dataset.infoPanel===B?"":"none"})})});const se=n.querySelector('[data-info-panel="matches"]');if(se){se.addEventListener("click",I=>{const U=I.target.closest(".match-filter-btn");U&&(se.querySelectorAll(".match-filter-btn").forEach(F=>F.classList.remove("match-filter--active")),U.classList.add("match-filter--active"),se.querySelectorAll("bma-match-status").forEach(F=>{F.style.display=F.dataset.matchStatus===U.dataset.filter?"":"none"}))});const K=se.querySelector(".matches-scroll-container"),B=se.querySelector(".matches-scroll-fade");if(K&&B){const I=()=>{B.style.opacity=K.scrollHeight-K.scrollTop-K.clientHeight<8?"0":"1"};K.addEventListener("scroll",I),setTimeout(I,100)}}const Y=document.getElementById("pop-play__caro-info-summary2--id");Y&&(Y.innerHTML="");const q=document.getElementById("pop-play__caro-info-list--id");q&&(q.innerHTML="")},async populateLeaderboard(){const e=we(),r=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,s=e.appSession?.session_user?.guid;if(!r){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const a=document.getElementById("pop-play__caro-leaderboard--id");if(!a)return;let n=document.getElementById("leaderboard-loading-banner");n||(n=document.createElement("neodigm-juicebar"),n.id="leaderboard-loading-banner",n.setAttribute("role","progressbar"),n.setAttribute("data-n55-theme","warning"),n.setAttribute("data-n55-size","small"),n.innerHTML="<div></div>",n.style.cssText=`
                width: 100%;
                margin: 6px;
            `,a.parentNode.insertBefore(n,a)),n.style.visibility="visible";try{const o=await Ae.fetchLeaderboard(r),i=o?.data||o?.rows;if(i&&i.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(M=>M.guid===r),d=c?.class||"DEFAULT_FORMAT",u=window.GameMode?.get?.(d),p=u?.rankLeaderboard?u.rankLeaderboard(i.map(M=>{const j=typeof M.combined_betslips=="string"?(()=>{try{return JSON.parse(M.combined_betslips)}catch{return[]}})():M.combined_betslips||[];return{...M,bets:j,timestamp:M.created_at||M.updated_at||0}}),c):i,f=parseFloat(c?.tournament_dollars||0),_=M=>{if(d!=="DEFAULT_FORMAT"||f<=0)return!0;let j=0;return(M.bets||[]).forEach(Q=>{(Q.bet||[]).forEach(se=>{Object.keys(se).forEach(Y=>{Y!=="short_title"&&(j+=parseFloat(se[Y]?.stake||0))})})}),j>=f-.01},w=(()=>{if(d!=="DEFAULT_FORMAT")return"";const j=(c?.tags||[]).find(A=>A.badge_gold!==void 0||A.badge_silver!==void 0||A.badge_bronze!==void 0);if(!j)return"";const Q=j.badge_gold||0,se=j.badge_silver||0,Y=j.badge_bronze||0;if(Q===0&&se===0&&Y===0)return"";const q=p.filter(_),K=A=>{if(!A)return'<span class="podium-slot__empty">Open</span>';const R=A.user_guid===s;return`<span class="podium-slot__name${R?" podium-slot__name--you":""}">${A.username||"Unknown"}${R?' <span class="podium-slot__you">YOU</span>':""}</span>`},B=Array.from({length:Q},(A,R)=>K(q[R])).join(""),I=Array.from({length:se},(A,R)=>K(q[Q+R])).join(""),U=Array.from({length:Y},(A,R)=>K(q[Q+se+R])).join(""),F=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
                        <div class="leaderboard-podium">
                            <div class="leaderboard-podium__title">Trophy Preview</div>
                            <div class="leaderboard-podium__pack">
                                ${se>0?`<div class="podium-slot podium-slot--silver">
                                    <div class="podium-slot__trophy podium-slot__trophy--silver"></div>
                                    <span class="podium-slot__count">&times;${se}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--silver">
                                        <div class="podium-slot__names">${I}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${Q>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${Q}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${B}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${Y>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${Y}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${U}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${F?`<div class="leaderboard-podium__label">${F}</div>`:""}
                        </div>
                    `})(),g=`
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
                `,v=(M,j,Q=!1)=>{let se="";if(c?.tags&&Array.isArray(c.tags)){const U=c.tags.find(F=>!!(typeof F=="object"&&F!==null&&(F.entity_guid===M.user_guid&&F.badge&&F.badge.startsWith("--badge__ribbon--")||F[M.user_guid]&&F[M.user_guid].startsWith("--badge__ribbon--"))));if(U){const F=U.badge||U[M.user_guid];F==="--badge__ribbon--gold"?se="badge-trophy--gold":F==="--badge__ribbon--silver"?se="badge-trophy--silver":F==="--badge__ribbon--bronze"&&(se="badge-trophy--bronze")}}const Y=M.combined_betslips?typeof M.combined_betslips=="string"?M.combined_betslips:JSON.stringify(M.combined_betslips):"[]";let q="[]";if(M.combined_betslips&&c?.matches_expanded){const U=typeof M.combined_betslips=="string"?JSON.parse(M.combined_betslips):M.combined_betslips,F=[...new Set(U.map(R=>R.coreMatches__guid||R.match_guid||R.odds_id).filter(Boolean))],A=c.matches_expanded.filter(R=>{const V=R.guid||R.id||R.odds_id;return F.includes(V)});q=JSON.stringify(A)}const K=parseFloat(M.calculated_tournament_dollars||0),B=parseInt(M.total_betslips||0),I=K===0&&B===0?c?.tournament_dollars||0:M.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${j}"
                            data-username="${M.username||"Unknown"}"
                            data-user-guid="${M.user_guid||""}"
                            data-tournament-dollars="${I}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${M.total_betslips||0}"
                            data-total-payout="${M.total_payout||0}"
                            data-combined-betslips="${Y.replace(/"/g,"&quot;")}"
                            data-user-matches="${q.replace(/"/g,"&quot;")}"
                            data-badge-class="${se}"
                            data-is-current-user="${M.user_guid===s}"
                            data-unqualified="${Q}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `},b=p.filter(_),T=p.filter(M=>!_(M)),P=b.map((M,j)=>v(M,j+1,!1)).join(""),k=T.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${T.map(M=>v(M,"—",!0)).join("")}
                `:"";a.innerHTML=w+g+P+k,requestAnimationFrame(()=>{a.querySelectorAll("bma-leaderboard-card").forEach((M,j)=>{M.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",M.style.animationDelay=`${Math.min(j*60,400)}ms`})}),a.querySelectorAll(".leaderboard-tab").forEach(M=>{M.addEventListener("click",()=>{const j=M.dataset.lbTab;a.querySelectorAll(".leaderboard-tab").forEach(Q=>Q.classList.remove("leaderboard-tab--active")),M.classList.add("leaderboard-tab--active"),a.querySelectorAll("[data-lb-panel]").forEach(Q=>{Q.style.display=Q.dataset.lbPanel===j?"":"none"})})});const S=b.findIndex(M=>M.user_guid===s),x=c?.entities?.guids?.length||p.length,C=S>=0?S+1:"—",$=document.getElementById("dashboard-rank");if($){const M=C==="—"?"—":`${C}/${x}`;$.innerHTML=`<span class="tourn-dashboard__rank-text">${M}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else a.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{n&&(n.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),a.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{n&&(n.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=we(),r=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!r||e.coreTourn.length===0)return;const a=e.coreTourn[e.coreTourn.length-1].data.find(n=>n.guid===r);a&&(console.log("[appEvents] Hydrating play popup for tournament:",r),this.populateInfoPage(),this.renderMatchCards(a),this.updateTournamentDashboard(a),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:r,subStatus:s,sort:a,result:n}=e,o=(c,d,u,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${d}">${u}</button>`;let i="";r==="lobby"?i+=`
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
                        ${o("sort","default","Default",a==="default")}
                        ${o("sort","starting_soon","Starting Soon",a==="starting_soon")}
                        ${o("sort","most_entrants","Most Entrants",a==="most_entrants")}
                        ${o("sort","fewest_spots","Fewest Spots Left",a==="fewest_spots")}
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
                </div>`:r==="my"?i+=`
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
                        ${o("sort","default","Default",a==="default")}
                        ${o("sort","recently_active","Recently Active",a==="recently_active")}
                        ${o("sort","starting_soon","Starting Soon",a==="starting_soon")}
                    </div>
                </div>`:r==="completed"&&(i+=`
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
                        ${o("sort","default","Default",a==="default")}
                        ${o("sort","newest","Newest First",a==="newest")}
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
            `;let d={subStatus:s,sort:a,result:n};c.addEventListener("click",u=>{const p=u.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,_=p.dataset.filterVal;d[f]=_,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(y=>y.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const u=l[r]||l.lobby;d={...u},Object.keys(u).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${u[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(d)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){de.subscribe("APP",(k,S)=>{console.warn("~~ sub all APP | "+k+"|"+S)}),de.subscribe("WC",(k,S)=>{console.warn("~~ sub all WC  | "+k+"|"+S)}),de.subscribe("ROUTE",(k,S)=>{console.warn("~~ sub all ROUTE  | "+k+"|"+S)});let t="lobby",r="all",s="all",a="default",n="all",o="all",i=localStorage.getItem("bma_view_mode")||"cards";const l=()=>{r="all";const k=document.querySelector("bma-app-head-sports");k&&k.setAttribute("data-selected-chip","all")},c=()=>{const k=document.getElementById("filter-bar__count--id");if(!k)return;let S=0;s!=="all"&&S++,a!=="default"&&S++,n!=="all"&&S++,k.textContent=S,k.style.display=S>0?"":"none"},d=()=>{document.querySelectorAll(".home-tab").forEach(x=>x.classList.remove("home-tab--active"));const S=t==="my"?document.querySelector('[data-home-tab="active"]'):document.querySelector('[data-home-tab="lobby"]');S&&S.classList.add("home-tab--active")},u=()=>{s="all",a="default",n="all",o="all"};document.addEventListener("click",k=>{const S=k.target.closest(".category-filter-toggle");if(S){const $=S.closest(".tournament-category-header")?.querySelector(".category-filter-row");if($){const M=$.style.display!=="none";$.style.display=M?"none":"",S.classList.toggle("category-filter-toggle--open",!M),window._bmaFilterRowOpen=!M}return}const x=k.target.closest("[data-view-mode]");if(x){const C=x.dataset.viewMode;if(C===i)return;i=C,localStorage.setItem("bma_view_mode",C);const M=x.closest(".tournament-category-header")?.closest(".tournament-category"),j=M?[...document.querySelectorAll(".tournament-category")].indexOf(M):-1;document.querySelectorAll("[data-view-mode]").forEach(Q=>Q.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${C}"]`).forEach(Q=>Q.classList.add("view-toggle__btn--active")),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"})),j>=0&&requestAnimationFrame(()=>{const Q=document.querySelectorAll(".tournament-category");Q[j]&&Q[j].scrollIntoView({behavior:"smooth",block:"start"})})}}),document.addEventListener("click",k=>{const S=k.target.closest("[data-home-tab]");if(!S)return;const C=S.dataset.homeTab==="active"?"my":"lobby";if(C===t)return;t=C,l(),u(),c(),document.querySelectorAll(".home-tab").forEach(M=>M.classList.remove("home-tab--active")),S.classList.add("home-tab--active");const $=document.querySelector("bma-app-head-mid");$&&$.setAttribute("data-selected-tab","head_mid_lobby"),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"}))}),document.addEventListener("change",k=>{const S=k.target.closest(".category-dropdown");if(!S)return;const x=S.dataset.filterType,C=S.value;x==="subStatus"?s=C:x==="sort"?a=C:x==="result"?n=C:x==="odds"&&(o=C),c(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),de.subscribe(e.hierTopics.COREBETSLIP,(k,S)=>{JSON.parse(S);let x=16;switch(k){case e.hierTopics.COREBETSLIP__BET:x=5,Ss.shootConfetti(),console.log("~~~  |  "+k+" | ",S);const C=document.querySelector("[data-bets-valid]");C&&(C.dataset.betsValid="false");const $=document.querySelector("neodigm-sodapop");$&&$.setAttribute("data-wait","true");const M=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(M.length===0){console.warn("[app_events] No bets to submit"),$&&$.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const j=document.querySelector(".play-cntr"),Q=j?.dataset?.currentTournGuid,se=e.appSession?.session_user?.guid;if(!Q||!se){console.error("[app_events] Missing tournament or user GUID"),$&&$.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const Y=Array.from(M).map(V=>{const L=V.getAttribute("data-content-team-points"),z=V.getAttribute("data-content-odds"),G=V.getAttribute("data-stake")||"0",te=V.getAttribute("data-content-type"),D=V.getAttribute("data-payout")||"0",E=V.getAttribute("data-match-guid")||"",O={};return O[L]={type:te,stake:parseFloat(G),odds:parseFloat(z),payout:parseFloat(D),reconciled:!1},{acctEntity__guid:se,coreTournaments__guid:Q,coreMatches__guid:E,bet:[O],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",Y);const q=j?.dataset?.gameType||"DEFAULT";if(typeof window.GameMode<"u"){const V=window.GameMode.get(q),z=[...e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(E=>E.coreTournaments__guid===Q):[],...Y],te=(e.coreTourn.length>0?e.coreTourn[e.coreTourn.length-1]:null)?.data.find(E=>E.guid===Q),D=V.validateBetSlip(z,te,0);if(!D.valid){console.log("[app_events] Game mode validation failed:",D.errors),typeof neodigmToast<"u"&&D.errors.forEach(O=>neodigmToast.q(O,"warning",4e3)),$&&$.setAttribute("data-wait","false");const E=document.querySelector("[data-publish-betslip]");E&&delete E.dataset.processing;break}}Ae.postBetSlips(Y).then(V=>{console.log("[app_events] Bet slips posted successfully:",V);const L=Y.reduce((z,G)=>{const te=G.bet[0],D=Object.keys(te)[0];return z+(te[D]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${L.toFixed(2)}`,"success"),Ae.fetchBetSlips(se,Q).then(z=>{if(z?.rows){const G={timestamp:Date.now(),source:"API",data:z.rows};e.pushcoreBetSlip(G),console.log("[app_events] Refreshed bet slips in store:",z.rows.length,"items")}De.refreshPlayPopupUI(Q,z),$&&$.setAttribute("data-wait","false")}).catch(z=>{console.error("[app_events] Error fetching fresh bet slips:",z);const G=document.querySelector("[data-publish-betslip]");G&&delete G.dataset.processing,C&&(C.dataset.betsValid="true"),$&&$.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(V=>{console.error("[app_events] Error posting bet slips:",V);const L=document.querySelector("[data-publish-betslip]");L&&delete L.dataset.processing,C&&(C.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),$&&$.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:x=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&S){S=JSON.parse(S);const L=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&L){const z=e.coreBetSlip[0].data.filter(ee=>ee.coreTournaments__guid===L),G=[],te=[],D=[];z.forEach(ee=>{const le=ee.bet||[];if(le.length===0)return;const ae=le[0];Object.keys(ae).filter(W=>W!=="short_title").forEach(W=>{const ie=ae[W],ne=ie?.reconciled!==!1,ce=parseFloat(ie?.payout||0);ne?ce===0?te.push(ee):D.push(ee):G.push(ee)})});const E=lt.search(G,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,O=lt.search(te,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,N=E+O,H=lt.search(D,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Z=S.tournament_dollars-N+H;De.updateTDBalance("#summary-balance",Z)}else De.updateTDBalance("#summary-balance",S.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let B=0,I=0,U=0;if(e.coreBetSlip.length>0){const L=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(L){const G=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(H=>H.coreTournaments__guid===L),te=[],D=[],E=[];G.forEach(H=>{const Z=H.bet||[];if(Z.length===0)return;const ee=Z[0];Object.keys(ee).filter(ae=>ae!=="short_title").forEach(ae=>{const J=ee[ae],W=J?.reconciled!==!1,ie=parseFloat(J?.payout||0);W?ie===0?D.push(H):E.push(H):te.push(H)})}),B=lt.search(te,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,I=lt.search(E,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const O=lt.search(D,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,N=lt.search(E,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;U=O+N}}let F=!0,A=0;const R=document.querySelector("[data-bets-valid]");if(R&&S){S=JSON.parse(S),S.pending_stake_sum=0,S.pending_payout_sum=0,S.bets.length||(F=!1),S.bets.forEach(E=>{E.stake=Number(E.stake),E.stake>0?S.pending_stake_sum+=E.stake:F=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(E=>{const O=parseFloat(E.getAttribute("data-payout")||"0");S.pending_payout_sum+=O});const L=B+S.pending_stake_sum,z=I+S.pending_payout_sum;A=parseFloat((S.tournament_dollars-L-U+I).toFixed(2));const te=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let D=null;te&&e.coreTourn.length>0&&(D=e.coreTourn[e.coreTourn.length-1]?.data?.find(O=>O.guid===te)),De.updateSummaryAndDashboard(A,L,z,D,S.pending_payout_sum||0),(S.tournament_dollars<0||A<0)&&(F=!1),R.dataset.betsValid=F}break}x&&neodigmWired4Sound&&neodigmWired4Sound.sound(x,"QUITE").vibrate()});const p=()=>{const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let x=0;S&&e.coreTourn.length>0&&(x=e.coreTourn[e.coreTourn.length-1].data.find(M=>M.guid===S)?.tournament_dollars||0),de.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:x,timestamp:Date.now()}))},f=()=>{const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let x=0;S&&e.coreTourn.length>0&&(x=e.coreTourn[e.coreTourn.length-1].data.find(K=>K.guid===S)?.tournament_dollars||0);let C=0,$=0,M=0,j=0;if(e.coreBetSlip.length>0&&S){const q=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(R=>R.coreTournaments__guid===S);console.log("[app_events] Filtered bets for tournament:",S,"found:",q.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",q[0]);const K=[],B=[],I=[];q.forEach(R=>{const V=R.bet||[];if(V.length===0)return;const L=V[0];Object.keys(L).filter(G=>G!=="short_title").forEach(G=>{const te=L[G],D=te?.reconciled!==!1,E=parseFloat(te?.payout||0);D?E===0?B.push(R):I.push(R):K.push(R)})}),console.log("[app_events] Bet categories:",{unreconciled:K.length,reconciledZero:B.length,reconciledNonZero:I.length});const U=lt.search(K,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,F=lt.search(B,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,A=lt.search(I,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;M=F+A,$=lt.search(I,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,j=lt.search(K,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,C=U,console.log("[app_events] Balance calculation:",{unreconciledStakes:U,lostBetStakes:F,wonBetStakes:A,allReconciledStakes:M,displayedStake:C,reconciledPayouts:$,tournamentDollars:x,calculatedBalance:x-C-M+$})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const Q=x-C-M+$;let se=null;S&&e.coreTourn.length>0&&(se=e.coreTourn[e.coreTourn.length-1].data.find(q=>q.guid===S)),De.updateSummaryAndDashboard(Q,C,$,se,j)};de.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(k,S)=>{const C=JSON.parse(S)?.rows||[],$=document.querySelector(".bet-grid__slip-MYBETS");if(!$)return;if($.innerHTML="",C.length===0){$.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const se=document.querySelector(".bet-grid__slip");se&&se.setAttribute("data-active-bet-tab","BETSLIP"),p();return}C.forEach(se=>{if((se.bet||[]).length===0)return;const q=document.createElement("bma-bet-existing");q.setAttribute("data-corebetslip",JSON.stringify(se)),$.appendChild(q)});const M=document.querySelector(".bet-grid__slip");M&&M.setAttribute("data-active-bet-tab","MYBETS"),we().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&De.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",C.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),f()},200)}),document.addEventListener("click",k=>{const S=k.target;if(S&&S.classList.contains("bet-slip-tab")){const x=S.dataset.betTab,C=document.querySelector(".bet-grid__slip");x&&C&&(C.setAttribute("data-active-bet-tab",x),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",x))}if(S&&S.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(S.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}S.dataset.processing="true";const C=S.dataset.publishBetslip;de.publish(C,JSON.stringify({timestamp:Date.now()}))}});const _=()=>{const S=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let x=0;S&&e.coreTourn.length>0&&(x=e.coreTourn[e.coreTourn.length-1].data.find(Q=>Q.guid===S)?.tournament_dollars||0);const C=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),$=Array.from(C).map(M=>({teamPoints:M.getAttribute("data-content-team-points"),odds:M.getAttribute("data-content-odds"),stake:M.getAttribute("data-stake")||"0",type:M.getAttribute("data-content-type"),abbreviatedTitle:M.getAttribute("data-abbreviated-title"),scheduledAt:M.getAttribute("data-scheduled-at")}));de.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:x,bets:$,timestamp:Date.now()}))},y=(k,S)=>{const x=JSON.parse(S),C=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!C){console.error("[app_events] Bet slip container not found");return}const $=C.querySelector(".bet-slip__empty");$&&$.remove();let M="";x.type==="total"?M=x.team==="over"?"Over":"Under":x.team==="home"?M=x.homeTeam:x.team==="away"&&(M=x.awayTeam);let j=M;if(x.point)if(x.type==="spread"){const B=parseFloat(x.point)>0?`+${x.point}`:x.point;j=`${M} ${B}`}else x.type==="total"&&(j=`${M} ${x.point}`);const Q=document.createElement("bma-bet-entry");Q.setAttribute("data-content-team-points",j),Q.setAttribute("data-content-odds",x.price||"0"),Q.setAttribute("data-content-stake-text","0"),Q.setAttribute("data-content-type",x.type||""),Q.setAttribute("data-abbreviated-title",x.abbreviatedTitle||`${x.homeTeam} vs ${x.awayTeam}`),Q.setAttribute("data-scheduled-at",x.scheduledAt||""),Q.setAttribute("data-match-guid",x.matchGuid||""),Q.setAttribute("data-home-team",x.homeTeam||""),Q.setAttribute("data-away-team",x.awayTeam||""),Q.setAttribute("data-bet-team",M||"");const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Y&&e.coreTourn.length>0){const I=e.coreTourn[e.coreTourn.length-1].data.find(U=>U.guid===Y);if(I?.sports_allowed&&I.sports_allowed.length>0){const U=I.sports_allowed[0];Q.setAttribute("data-sport-key",U.key||"");const F=mt.find(A=>A.key===U.key);Q.setAttribute("data-sport-group",F?.group||"")}}C.appendChild(Q),console.log("[app_events] Bet entry appended to container:",Q,"Container children:",C.children.length),setTimeout(()=>{m(Q)},0);const q=document.querySelector(".bet-grid__slip");q&&(q.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const K=C.querySelectorAll("bma-bet-entry").length;K>=3?requestAnimationFrame(()=>{setTimeout(()=>{const B=document.querySelector(".bet-grid__slip");B&&(console.log("[app_events] Scrolling parent to bottom - bet count:",K,"scrollHeight:",B.scrollHeight,"current scrollTop:",B.scrollTop),B.scrollTo({top:B.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",B.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",K,"bet cards (need 3+)"),setTimeout(()=>{_()},200),console.log("[app_events] Created bet entry:",{teamPoints:j,odds:x.price,type:x.type})};de.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(k,S)=>{y(k,S),w()}),de.subscribe(e.hierTopics.COREBETSLIP__MONEY,(k,S)=>{y(k,S),w()}),de.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(k,S)=>{y(k,S),w()});function w(){const k=window.matchMedia("(orientation: portrait)").matches,S=window.matchMedia("(max-width: 768px)").matches;if(k||S){const x=document.querySelector(".bet-grid__select"),C=document.querySelector(".bet-grid__slip"),$=document.querySelector(".bet-grid__toggle-text");x&&C&&$&&(x.classList.add("collapsed"),C.classList.remove("collapsed"),$.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const m=k=>{const S={sport:{key:k.getAttribute("data-sport-key")||"",group:k.getAttribute("data-sport-group")||""},Match:{scheduled_at:k.getAttribute("data-scheduled-at")||"",home_team_id:k.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:k.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:k.getAttribute("data-bet-team")||"",over:"",under:""},type:k.getAttribute("data-content-type")||"",odds:k.getAttribute("data-content-odds")||"0",stake:k.getAttribute("data-stake")||"0"}},x=hu.calcPayout(S);k.setAttribute("data-payout",x.toString()),console.log("[app_events] Payout calculated:",{stake:S.Bet.stake,odds:S.Bet.odds,payout:x})};new MutationObserver(k=>{k.forEach(S=>{S.type==="attributes"&&S.attributeName==="data-stake"&&S.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",S.target.getAttribute("data-stake")),m(S.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{_()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",k=>{console.log("[app_events] Removing bet entry:",k.detail);const S=k.target,x=k.detail;S.remove(),setTimeout(()=>{const j=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(j){const Q=we(),se=Q.coreTourn[Q.coreTourn.length-1];if(se&&se.data){const Y=se.data.find(q=>q.guid===j);Y&&De.updateTournamentDashboard(Y)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(M=>{(M.shadowRoot?.querySelectorAll(".btn")||[]).forEach(Q=>{const se=Q.dataset.betType,Y=Q.dataset.price,q=se===x.type,K=Y===x.odds;q&&K&&Q.classList.contains("btn--active")&&(Q.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:se,btnPrice:Y}))})});const $=document.querySelector(".bet-grid__slip-BETSLIP-content");$&&$.children.length,setTimeout(()=>{_()},100)}),de.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(k,S)=>{const x=JSON.parse(S);x&&x.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${x.guid}"]`)}),de.subscribe(e.hierTopics.WC__APP__FOOT,(k,S)=>{JSON.parse(S);let x=16;switch(k){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:t="private",l(),u(),c(),d(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:de.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}neodigmWired4Sound&&neodigmWired4Sound.sound(x).vibrate()}),de.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(k,S)=>{const x=JSON.parse(S);let C=16;k=="WC.APP.HEAD_SPORTS.PREV"||k=="WC.APP.HEAD_SPORTS.NEXT"||k=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?C=3:(r=x.key||"all",console.log(`[app_events] Sports filter changed to: ${r} (${x.group})`),c(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),C&&neodigmWired4Sound&&neodigmWired4Sound.sound(C).vibrate()}),de.subscribe(e.hierTopics.WC__APP__HEAD_MID,(k,S)=>{JSON.parse(S);let x=16;switch(k){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",l(),u(),c(),d(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":t="private",l(),u(),c(),d(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",l(),u(),c(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":x=16,typeof neodigmSodaPop<"u"&&neodigmSodaPop.autoOpen("sodapop_leaderboard");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":de.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}x&&neodigmWired4Sound&&neodigmWired4Sound.sound(x).vibrate()}),de.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(k,S)=>{JSON.parse(S);let x=16;switch(k){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const C=window.deferredPWAPrompt;if(!C){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{C.prompt();const{outcome:M}=await C.userChoice;M==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),x=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(M){console.error("PWA install error:",M),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const j=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:j});const Q=document.getElementById("app");Q&&Q.setAttribute("data-sync-theme",j),document.body.setAttribute("data-sync-theme",j)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":za.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":za.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}x&&neodigmWired4Sound&&neodigmWired4Sound.sound(x).vibrate()});const g=k=>{document.querySelectorAll(".play-section").forEach(x=>{x.style.display="none",x.classList.remove("play-section--active")});const S=document.getElementById(`play-section-${k}`);S&&(S.style.display="",S.classList.add("play-section--active"))},v=(k,S)=>{const x=k.split(".").pop(),C=document.querySelectorAll(".play-cntr .btn-info-sm"),M=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");g(x),C.forEach(j=>{(j.dataset.publishRouteHome?.split(".").pop()||"")===x?(j.classList.add("btn-info-sm--active"),j.classList.remove("btn-info-sm--inactive")):(j.classList.add("btn-info-sm--inactive"),j.classList.remove("btn-info-sm--active"))}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),M&&(M.style.overflow=x==="PLAY"?"hidden":"auto")};de.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",v);let b=null;de.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(k,S)=>{if(v(k),b){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}b=setTimeout(()=>{b=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),De.populateLeaderboard()}),de.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(k,S)=>{JSON.parse(S);const x=document.getElementById("btn-join__play--id");if(!x){console.warn("[app_events] PLAY button not found");return}const C=x.dataset.requiresJoin==="true",$=x.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",$,"requiresJoin:",C),C&&$==="join"){const j=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,Q=we();if(!j){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",j),de.publish(Q.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:j,timestamp:Date.now()})),x.textContent="Play",x.dataset.requiresJoin="false",setTimeout(()=>{v(k),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else v(k),console.log("[app_events] Advancing carousel to PLAY page")}),de.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(k,S)=>{JSON.parse(S);let x=10;switch(k){case"WC.APP.HEAD_TOP.USER_PROFILE":x=0,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile");break;case"WC.APP.HEAD_TOP.LOGO":const C=e.appSession.session_app.version,$=new Date().getFullYear();C&&neodigmToast&&neodigmToast.q(`${C} 4/14/2026, 11:55:46 AM|© ${$} Bet Max Action`,"night");break}x&&neodigmWired4Sound&&neodigmWired4Sound.sound(x).vibrate()});let T=null,P=null;de.subscribe(e.hierTopics.WC__TOURN_ACTION,(k,S)=>{const x=JSON.parse(S);let C=0;switch(x?.action){case"JOIN":C=512;break;case"PLAY":C=8;break;case"INFO":C=8;break}if(C){T=x?.tournamentGuid,P=x?.action,console.log("[app_events] Storing pending tourn data:",T,P);const $=e.appSession?.session_user?.guid,M=x?.tournamentGuid;$&&M?Ae.fetchBetSlips($,M).then(j=>{if(j?.rows){const Q={timestamp:Date.now(),source:"API",data:j.rows};e.pushcoreBetSlip(Q),console.log("[app_events] Bet slips fetched:",j.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{de.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(j))},3e3)},C)}).catch(j=>{console.error("[app_events] Error fetching bet slips:",j),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},C)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},C)}}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,(k,S)=>{const x=JSON.parse(S);let C=16;switch(x?.action){case"FOCUS":C=3;break;case"SPORT_ICON":C=10;break;case"JOIN":C=5;break;case"PLAY":C=16;break}C&&neodigmWired4Sound&&neodigmWired4Sound.sound(C).vibrate()}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,(k,S)=>{const x=JSON.parse(S);let C=0,$="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),x?.tournamentStatus){case"UPCOMING":$="success";break;case"LOCKED":$="warning";break;case"COMPLETED":$="danger";break}switch(x?.action){case"SPORT_ICON":x?.sportTitle==x?.sportDescription?C=x?.sportTitle:C=x?.sportTitle+"|"+x?.sportDescription;break}C&&neodigmToast&&neodigmToast.q(C,$)}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,async(k,S)=>{const x=JSON.parse(S);if(x?.action==="JOIN"){const $=we().appSession?.session_user?.guid;if(!$){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const M=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${x.tournamentGuid}"]`);M&&(M.setAttribute("data-bma-tourn-wait","true"),Ss.shootConfetti());const j={acctEntityGuid:$,tournamentGuid:x.tournamentGuid};try{const Q={method:"POST",body:JSON.stringify(j),headers:Ae.genHeaders()};console.log("Posting to:",Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/coreTournaments/join",j);const Y=await(await fetch(Ae.API_baseURI+"/m5t/"+Ae.API_ver+"/coreTournaments/join",Q)).json();if(console.log("Join response:",Y),Y.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const q=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${x.tournamentGuid}"]`);if(q){q.setAttribute("data-bma-tourn-wait","false");const K=q.getAttribute("data-bma-tourn-entities");if(K)try{const B=JSON.parse(K);B.guids.includes($)||(B.guids.push($),q.setAttribute("data-bma-tourn-entities",JSON.stringify(B)))}catch(B){console.error("Failed to parse entities:",B)}}},3e3);else{const q=Y?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(q,"danger");const K=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${x.tournamentGuid}"]`);K&&K.setAttribute("data-bma-tourn-wait","false")}}catch(Q){console.error("Join tournament error:",Q),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),de.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(k,S)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const x=we();try{const C=await Ae.fetchTournaments();console.log("[app_events] Tournaments fetched:",C),C?.rows&&Array.isArray(C.rows)?(x.pushCoreTourn({timestamp:Date.now(),source:"API",data:C.rows}),console.log("[app_events] Pushed to coreTourn, length:",x.coreTourn.length),de.publish(x.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",C)}catch(C){console.error("[app_events] Error fetching tournaments:",C),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),de.subscribe(e.hierTopics.PROMOTION__LOAD,async(k,S)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const x=await Ae.fetchPromotions();if(console.log("[app_events] Promotions fetched:",x),x?.ok&&x?.data&&Array.isArray(x.data)){const C=x.data.filter(M=>M.class==="banner"&&M.status==="LIVE");console.log("[app_events] Banner promotions:",C);const $=document.querySelector(".featured-swiper .swiper-wrapper");if(!$){console.warn("[app_events] Swiper wrapper not found");return}if($.innerHTML="",C.forEach((M,j)=>{const Q=document.createElement("div");Q.className="swiper-slide";const se=document.createElement("div");se.className=`featured-card featured-card--${j+1}`;const Y=M.hero_img?encodeURI(M.hero_img):"";se.style.backgroundImage=`url("${Y}")`,se.setAttribute("data-promotion-hero-img",M.hero_img||""),se.setAttribute("data-promotion-caption",M.caption||""),se.setAttribute("data-promotion-tagline",M.tagline||""),se.setAttribute("data-promotion-toast",M.toast||""),se.setAttribute("data-promotion-topic",M.topic?.topic||""),se.setAttribute("data-promotion-topic-token",M.topic?.token||""),se.setAttribute("data-promotion-marquee",M.maquee||""),Q.appendChild(se),$.appendChild(Q)}),console.log("[app_events] Created",C.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),C.length===1){const M=document.querySelector(".featured-swiper .swiper-wrapper");M&&(M.style.justifyContent="center")}}}catch(x){console.error("[app_events] Error fetching promotions:",x)}}),de.subscribe(e.hierTopics.PROMOTION__CLICK,(k,S)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const x=JSON.parse(S);console.log("[app_events] Promotion clicked:",x),x.toast&&typeof neodigmToast<"u"&&neodigmToast.q(x.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const C=document.querySelector(".l-promotion #promoHero");C&&x.heroImg&&(C.src=x.heroImg);const $=document.querySelector(".l-promotion #promCaption");$&&x.caption&&($.textContent=x.caption);const M=document.querySelector(".l-promotion #promoTagline");return M&&x.tagline&&(/<[^>]+>/.test(x.tagline)?M.innerHTML=x.tagline:M.textContent=x.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(x){console.error("[app_events] Error handling promotion click:",x)}}),de.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(k,S)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const x=we();if(x.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const C=x.coreTourn[x.coreTourn.length-1],$=x.coreTourn.length>1?x.coreTourn[x.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",C);const M=[];if($){const Y=C.data,q=$.data;Y.forEach(K=>{const B=q.find(I=>I.guid===K.guid);B&&B.status!==K.status&&(console.log(`[app_events] Status changed for tournament ${K.guid}: ${B.status} -> ${K.status}`),M.push(K.guid))})}const j=x.appSession?.session_user?.guid,Q=[...C.data].sort((Y,q)=>{const K=Y.status||Y.class,B=q.status||q.class,I=Y.entities?.guids||[],U=q.entities?.guids||[],F=I.includes(j),A=U.includes(j),R=(N,H)=>{const Z=new Date(N.status_time||0).getTime();return new Date(H.status_time||0).getTime()-Z},V=K==="LOCKED"&&F,L=B==="LOCKED"&&A;if(V&&!L)return-1;if(!V&&L)return 1;if(V&&L)return R(Y,q);const z=K==="UPCOMING",G=B==="UPCOMING";if(z&&!G)return-1;if(!z&&G)return 1;if(z&&G)return R(Y,q);const te=K==="COMPLETED"&&F,D=B==="COMPLETED"&&A;if(te&&!D)return-1;if(!te&&D)return 1;if(te&&D)return R(Y,q);const E=K==="COMPLETED"&&!F,O=B==="COMPLETED"&&!A;return E&&!O?1:!E&&O?-1:R(Y,q)}),se=De.categorizeTournaments(Q,t,r,j,{subStatus:s,sort:a,result:n});if(console.log(`[app_events] Categorized into ${se.length} categories for filter: ${t}/${r} sub:${s} sort:${a} result:${n}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const Y=document.querySelector(".tournaments-grid");Y&&(Y.dataset.filterContext=t),window._homeRouteRenderCards(se,!0,i,{tab:t,subStatus:s,sort:a,result:n,odds:o});const q=Q.filter(U=>{const F=U.status||U.class,A=U.entities?.guids||[];return(F==="LOCKED"||F==="UPCOMING")&&A.includes(j)}).length,K=document.querySelector("bma-app-foot");K&&K.setAttribute("data-active-count",String(q));const B=document.querySelector("bma-app-head-mid");B&&B.setAttribute("data-active-count",String(q));const I=document.getElementById("home-tab-active-badge");if(I&&(I.textContent=q,I.style.display=q>0?"":"none"),M.length>0){const U=C.data;M.forEach(F=>{const A=U.find(R=>R.guid===F);if(A){const R=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{de.publish(x.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:F,status:A.status,timestamp:Date.now()}))},R)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),de.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(k,S)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",S);const x=we();try{const C=JSON.parse(S);console.log("[app_events] SSE tournament sync data:",C);const $=JSON.parse(C.msg);if(console.log("[app_events] Parsed tournaments array:",$),!Array.isArray($)){console.warn("[app_events] SSE msg is not an array:",$);return}x.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:$}),console.log("[app_events] Pushed SSE data to coreTourn, length:",x.coreTourn.length),de.publish(x.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),typeof neodigmSodaPop<"u"&&neodigmSodaPop.isOpen()==="sodapop_play"&&(console.log("[SSE] Play popup is open, triggering real-time update"),De.hydratePlayPopup())}catch(C){console.error("[app_events] Error processing SSE tournament sync:",C)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const k=document.querySelector("#caption__my-profile");k&&(k.textContent="My Profile");const S=document.getElementById("profile-trophy-username");S&&(S.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const x=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",x),console.log("[app_events] coreTourn length:",e.coreTourn.length),!x||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const $=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",$.length);let M=0,j=0,Q=0;$.forEach((se,Y)=>{if(!se.tags||!Array.isArray(se.tags)){console.log(`[app_events] Tournament ${Y} has no tags or tags not an array`);return}se.tags.forEach((q,K)=>{if(typeof q=="object"&&q!==null){let B=null;q.entity_guid===x&&q.badge?B=q.badge:q[x]&&(B=q[x]),B==="--badge__ribbon--gold"?M++:B==="--badge__ribbon--silver"?j++:B==="--badge__ribbon--bronze"&&Q++}})}),setTimeout(()=>{let se=document.querySelectorAll(".badge-counter");if(se.length===0){const Y=document.querySelector("neodigm-sodapop");Y&&(se=Y.querySelectorAll(".badge-counter"))}se.length>=3?(se[0].textContent=j,se[1].textContent=M,se[2].textContent=Q,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const se=document.querySelector("#profile-tournaments-list");if(!se||!x||e.coreTourn.length===0)return;const K=e.coreTourn[e.coreTourn.length-1].data.filter(F=>{try{return(typeof F.entities=="string"?JSON.parse(F.entities):F.entities)?.guids?.includes(x)}catch{return!1}}),B={LOCKED:0,UPCOMING:1,COMPLETED:2};K.sort((F,A)=>{const R=B[F.status]??3,V=B[A.status]??3;return R!==V?R-V:new Date(A.status_time||0)-new Date(F.status_time||0)});const I=F=>{let A=K;if(F==="active"?A=K.filter(R=>R.status==="LOCKED"||R.status==="UPCOMING"):F==="completed"&&(A=K.filter(R=>R.status==="COMPLETED")),A.length===0){se.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}se.innerHTML=A.map(R=>{const V=R.entities?JSON.stringify(R.entities).replace(/"/g,"&quot;"):"",L=R.tags?JSON.stringify(R.tags).replace(/"/g,"&quot;"):"[]",z=R.sports_allowed?JSON.stringify(R.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${R.guid||""}"
                                        data-bma-tourn-caption="${R.caption||""}"
                                        data-bma-tourn-tagline="${R.tagline||""}"
                                        data-bma-tourn-status="${R.status||""}"
                                        data-bma-tourn-class="${R.status||""}"
                                        data-bma-tourn-sports_allowed="${z}"
                                        data-bma-tourn-entities="${V}"
                                        data-bma-tourn-entry_fee="${R.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${R.tournament_dollars||0}"
                                        data-bma-tourn-matches="${R.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${L}"
                                        data-bma-tourn-window_start_time="${R.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${R.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{se.querySelectorAll("bma-tournament-list-card").forEach((R,V)=>{R.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",R.style.animationDelay=`${Math.min(V*60,400)}ms`})})};I("all");const U=document.querySelector(".profile-tournaments__filters");U&&U.addEventListener("click",F=>{const A=F.target.closest(".profile-tourn-filter");A&&(U.querySelectorAll(".profile-tourn-filter").forEach(R=>R.classList.remove("profile-tourn-filter--active")),A.classList.add("profile-tourn-filter--active"),I(A.dataset.filter))})},600)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const k=we(),S=document.querySelector(".play-cntr");T&&(S.dataset.currentTournGuid=T),P&&(S.dataset.currentTournAction=P);const x=S?.dataset?.currentTournGuid,C=S?.dataset?.currentTournAction||"INFO";if(x&&k.coreTourn.length>0){const B=k.coreTourn[k.coreTourn.length-1].data.find(U=>U.guid===x),I=B?.class||"DEFAULT";S.dataset.gameType=I,console.log("[app_events] Game mode:",I,"for tournament:",B?.caption)}console.log("[app_events] sodapop_play opened - GUID:",x,"action:",C),window.initBetGridToggle&&window.initBetGridToggle(),De.updatePlayButton(),De.populateInfoPage(),setTimeout(()=>{De.populateLeaderboard()},600);let $=C==="PLAY"||C==="JOIN"?"PLAY":C;if(!x||k.coreTourn.length===0||k.coreTourn[k.coreTourn.length-1].data.find(I=>I.guid===x)?.status==="COMPLETED"&&($="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),$){const K=`ROUTE.HOME.SODAPOP_PLAY.${$}`;console.log("[app_events] Publishing initial topic:",K),de.publish(K,JSON.stringify({tournamentGuid:x,timestamp:Date.now()}))}if(!x||k.coreTourn.length===0)return;const j=k.coreTourn[k.coreTourn.length-1].data.find(K=>K.guid===x);De.renderMatchCards(j);const Q=document.querySelector("#pop-play__tourn-caption--id"),se=document.querySelector("#pop-play__tourn-tagline--id");Q&&(Q.textContent=j.caption),se&&(se.textContent=j.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",j?.caption);const Y=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!Y),Y&&console.log("[Modal Debug] Modal classes:",Y.className),De.updateTournamentDashboard(j);const q=document.getElementById("dashboard-rank");if(q){const K=j.entities?.guids?.length||0;q.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${K}</span>                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){const k=we(),S=document.getElementById("global-leaderboard-container");if(S){S.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{const x=await Ae.fetchGlobalLeaderboard(),C=x?.data||x?.rows||[];if(!C.length){S.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data available yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const $=S,M=k.appSession?.session_user?.guid,j={},Q=k.coreTourn.length>0?k.coreTourn[k.coreTourn.length-1].data:[];C.forEach(L=>{const z=L.user_guid;j[z]||(j[z]={username:L.username||"Unknown",user_guid:z,totalTDWon:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set});const G=j[z];G.totalBets+=parseInt(L.total_betslips||0),G.tournamentsPlayed++;const te=Q.find(D=>D.guid===L.tournament_guid);te&&(te.sports_allowed||[]).forEach(E=>G.sports.add(E.key||E))}),Q.forEach(L=>{!L.tags||!Array.isArray(L.tags)||L.tags.forEach(z=>{if(typeof z!="object"||!z)return;let G=null,te=null;if(z.entity_guid&&z.badge){if(z.entity_guid==="SYSTEM")return;G=z.entity_guid,te=z.badge}else{const E=Object.keys(z);for(const O of E){const N=z[O];if(typeof N=="string"&&N.startsWith("--badge__ribbon--")){G=O,te=N;break}}}if(!G||!te)return;if(!j[G]){const E=C.find(O=>O.user_guid===G);j[G]={username:E?.username||G.substring(0,8),user_guid:G,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set}}const D=j[G];te==="--badge__ribbon--gold"?(D.gold++,D.tournamentsWon++):te==="--badge__ribbon--silver"?D.silver++:te==="--badge__ribbon--bronze"&&D.bronze++})});const se=Q.filter(L=>(L.status||L.class)==="COMPLETED");(await Promise.all(se.map(L=>Ae.fetchLeaderboard(L.guid).catch(()=>null)))).forEach(L=>{if(!L)return;(L?.data||L?.rows||[]).forEach(G=>{const te=G.user_guid;j[te]||(j[te]={username:G.username||te.substring(0,8),user_guid:te,totalTDWon:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set});const D=j[te];G.username&&D.username.length<=8&&!D.username.includes(" ")&&(D.username=G.username),(()=>{try{return G.combined_betslips?typeof G.combined_betslips=="string"?JSON.parse(G.combined_betslips):G.combined_betslips:[]}catch{return[]}})().forEach(O=>{(O.bet||[]).forEach(H=>{Object.keys(H).forEach(Z=>{if(Z==="short_title")return;const ee=H[Z];ee&&ee.reconciled===!0&&ee.payout>0&&(D.totalTDWon+=parseFloat(ee.payout))})})})})}),console.log("[Global Leaderboard] Fetched per-tournament data for",se.length,"completed tournaments");const q=Object.values(j).filter(L=>L.username!=="Unknown"),K=q.filter(L=>L.gold+L.silver+L.bronze>0),B=new Set;q.forEach(L=>L.sports.forEach(z=>B.add(z)));const I={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},U=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let F="all";const A=(L,z)=>{let G=[...q],te;L==="overall"&&(G=G.filter(J=>J.gold+J.silver+J.bronze>0)),L==="bysport"&&z&&z!=="all"&&(G=G.filter(J=>J.sports.has(z)));const D=$.querySelector(".glb__note");switch(D&&D.remove(),L){case"overall":G.sort((J,W)=>W.gold*100+W.silver*10+W.bronze-(J.gold*100+J.silver*10+J.bronze)||W.totalPayout-J.totalPayout||W.totalBets-J.totalBets),te=(J,W,ie,ne,ce)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${W<3?"glb__rank--top3":""}">#${W+1}</span>
                                                <span class="glb__avatar" style="background: ${ne};">${ie}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${J.username}</span>
                                                ${ce?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="display: flex; align-items: center; gap: 4px;">
                                                ${J.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${J.gold}</span></div>`:""}
                                                ${J.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${J.silver}</span></div>`:""}
                                                ${J.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${J.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":G=G.filter(J=>J.totalTDWon>0),G.sort((J,W)=>W.totalTDWon-J.totalTDWon),te=(J,W,ie,ne,ce)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${W<3?"glb__rank--top3":""}">#${W+1}</span>
                                                <span class="glb__avatar" style="background: ${ne};">${ie}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${J.username}</span>
                                                ${ce?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="font-weight: 800; color: var(--status-upcoming-text, #00E676); font-size: 0.95rem; font-family: 'Roboto', sans-serif;">TD$ ${Math.round(J.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":G.sort((J,W)=>W.totalPayout-J.totalPayout||W.totalBets-J.totalBets),te=(J,W,ie,ne,ce)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${W<3?"glb__rank--top3":""}">#${W+1}</span>
                                                <span class="glb__avatar" style="background: ${ne};">${ie}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${J.username}</span>
                                                ${ce?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="display: flex; align-items: center; gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${J.totalBets} bets</span>
                                                <span style="font-weight: 800; color: var(--status-upcoming-text, #00E676); font-size: 0.95rem; font-family: 'Roboto', sans-serif;">TD$ ${J.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const E=$.querySelector(".glb__list");if(!E)return;if(G.length===0){const J=L==="earnings"?"No TD$ won from reconciled bets yet":L==="bysport"?"No players found for this sport":"No leaderboard data available";E.innerHTML=`<div class="leaderboard-empty"><p>${J}</p></div>`;return}const O=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],N=J=>O[J.charCodeAt(0)%O.length];let H="";if(L==="overall"&&G.length>=3){const J=(W,ie,ne,ce,ue)=>{const pe=G[W],be=pe.user_guid===M;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${ie===1?80:ie===2?64:56}px; height: ${ie===1?80:ie===2?64:56}px; background-image: var(${ce}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${be?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${pe.username}${be?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${pe.gold+pe.silver+pe.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${ne}px; background: linear-gradient(180deg, ${ue}33 0%, ${ue}0D 100%); border-top: 3px solid ${ue}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${ue};">${ie===1?"1st":ie===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};H=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${J(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${J(0,1,90,"--badge__gold","#FFD700")}
                                        ${J(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const Z='<div class="info-section__title">Rankings</div>',ee='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',le='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(L==="bysport"&&!$.querySelector(".glb__note")){const W=document.createElement("div");W.className="glb__note",W.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",W.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const ie=$.querySelector(".glb__sport-filters");ie&&ie.parentNode.insertBefore(W,ie)}let ae="";if(L==="earnings"&&G.length>=3){const J=(W,ie,ne,ce)=>{const ue=G[W],pe=ue.user_guid===M;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${ie===1?80:ie===2?64:56}px; height: ${ie===1?80:ie===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${pe?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${ue.username}${pe?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(ue.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${ne}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${ie===1?"1st":ie===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};ae=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${J(1,2,70,"#00E676")}
                                        ${J(0,1,90,"#00E676")}
                                        ${J(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(L==="overall")E.innerHTML=H+ee+Z+G.map((J,W)=>{const ie=(J.username||"?")[0].toUpperCase(),ne=N(J.username),ce=J.user_guid===M;return te(J,W,ie,ne,ce)}).join("");else if(L==="earnings"){const J='<div class="info-section__title">TD$ Won</div>';E.innerHTML=ae+le+J+G.map((W,ie)=>{const ne=(W.username||"?")[0].toUpperCase(),ce=N(W.username),ue=W.user_guid===M;return te(W,ie,ne,ce,ue)}).join("")}else if(L==="bysport"){let J="";if(G.length>=3){const ie=(ne,ce,ue)=>{const pe=G[ne],be=pe.user_guid===M,ye=N(pe.username),Me=(pe.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${ye}; width: ${ce===1?48:38}px; height: ${ce===1?48:38}px; font-size: ${ce===1?"1rem":"0.8rem"};">${Me}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${be?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${pe.username}${be?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${pe.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${ue}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${ce===1?"1st":ce===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};J=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${ie(1,2,70)}
                                            ${ie(0,1,90)}
                                            ${ie(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const W='<div class="info-section__title">Rankings</div>';E.innerHTML=J+W+G.map((ie,ne)=>{const ce=(ie.username||"?")[0].toUpperCase(),ue=N(ie.username),pe=ie.user_guid===M;return te(ie,ne,ce,ue,pe)}).join("")}requestAnimationFrame(()=>{E.querySelectorAll(".glb__card, .info-row").forEach((J,W)=>{J.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",J.style.animationDelay=`${Math.min(W*50,400)}ms`})})},R=[...B].map(L=>{const z=I[L]||L.replace(/^[a-z]+_/,"").toUpperCase(),G=mt.find(D=>D.key===L),te=G?G.group:"default";return`<button class="glb__sport-chip" data-sport="${L}">
                                <bma-sport-icon sport="${L}" data-sport-group="${te}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${z}</span>
                            </button>`}).join("");$.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${U.map((L,z)=>`
                                    <button class="glb__tab ${z===0?"glb__tab--active":""}" data-tab="${L.id}">${L.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${R}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const V=document.createElement("style");V.textContent=`
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
                            /* When card contains info-row, card is just a wrapper */
                            .glb__card:has(.info-row) { display: block; padding: 0; border-bottom: none; }
                            .glb__card:has(.info-row):nth-child(even) { background: transparent; }

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
                        `,$.prepend(V),A("overall"),$.querySelectorAll(".glb__tab").forEach(L=>{L.addEventListener("click",()=>{$.querySelectorAll(".glb__tab").forEach(te=>te.classList.remove("glb__tab--active")),L.classList.add("glb__tab--active");const z=L.dataset.tab,G=$.querySelector(".glb__sport-filters");G&&(G.style.display=z==="bysport"?"flex":"none"),A(z,z==="bysport"?F:void 0)})}),$.querySelectorAll(".glb__sport-chip").forEach(L=>{L.addEventListener("click",()=>{$.querySelectorAll(".glb__sport-chip").forEach(z=>z.classList.remove("glb__sport-chip--active")),L.classList.add("glb__sport-chip--active"),F=L.dataset.sport,A("bysport",F)})})}catch(x){console.error("[appEvents] Error fetching global leaderboard:",x),container.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>'}}},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},Zy={__name:"App",setup(e){const t=Mt(),r=we();return Qt(()=>{setTimeout(()=>{const s=r.appSession?.session_user?.guid,a=r.appSession?.session_user?.authenticated;s&&a&&r.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",s),Fa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",s,r,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((s=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${s}`,"primary"),t.push({name:s})}).setOnState((s=null)=>{s&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=s)}).init({BASE:Ae.API_baseURI})},2e3),setTimeout(()=>{De.bindAppListeners(r)},3e3),t.beforeEach((s,a,n)=>{s.name=="splash_route"||s.name&&mvvLegit&&mvvLegit.isRouteAllowed(s.name)?n():n(!1)}),(s,a)=>(Xe(),pi(cr(lu),null,{default:to(({Component:n})=>[Je(Ff,{name:"slide-left"},{default:to(()=>[(Xe(),pi(jp(n)))]),_:2},1024)]),_:1}))}};class xu{constructor(){this.id="DEFAULT",this.label="Free Play",this.description="Place any bets you want across the tournament slate."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:[],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:0,stakeRule:"FREE",stakeMin:1,stakeMax:null,allowPartialSubmit:!0,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!1}}getEffectiveRules(t){const r=this.rules;if(!t?.tags||!Array.isArray(t.tags))return r;const s=t.tags.find(a=>typeof a=="object"&&a!==null&&a.game_rules);return s?.game_rules?{...r,...s.game_rules}:r}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","totalBets"],bonuses:[],penalizeMissing:!1}}_parseBets(t){const r=[];return t.forEach(s=>{const a=s.coreMatches__guid||s.match_guid||"";(s.bet||[]).forEach(o=>{Object.keys(o).forEach(i=>{if(i==="short_title")return;const l=o[i];l&&r.push({matchGuid:a,type:(l.type||"").toUpperCase(),team:i,stake:parseFloat(l.stake||0),payout:parseFloat(l.payout||0),odds:parseFloat(l.odds||0),reconciled:l.reconciled||!1})})})}),r}_getTypeCounts(t){const r={};return t.forEach(s=>{r[s.type]=(r[s.type]||0)+1}),r}_getTotalStakes(t){return parseFloat(t.reduce((r,s)=>r+s.stake,0).toFixed(2))}_typeLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money Line";case"TOTAL":return"Over/Under";default:return t}}_typeShortLabel(t){switch(t){case"SPREAD":return"Spread";case"MONEY":return"Money";case"TOTAL":return"Total";default:return t}}canPlaceBet(t,r,s){const a=this.getEffectiveRules(s),n=this._parseBets(r),o=(t.type||"").toUpperCase();return a.oneBetPerMatchPerType&&n.find(l=>l.matchGuid===t.matchGuid&&l.type===o)?{allowed:!1,reason:`You already have a ${this._typeLabel(o)} bet on this match`}:a.maxBetsPerType>0&&n.filter(l=>l.type===o).length>=a.maxBetsPerType?{allowed:!1,reason:`Maximum ${a.maxBetsPerType} ${this._typeLabel(o)} bets reached`}:a.maxBetsTotal>0&&n.length>=a.maxBetsTotal?{allowed:!1,reason:`Maximum ${a.maxBetsTotal} total bets reached`}:{allowed:!0,reason:null}}validateBetSlip(t,r,s){const a=this.getEffectiveRules(r),n=[],o=[],i=this._parseBets(t),l=this._getTypeCounts(i),c=this._getTotalStakes(i),d=parseFloat(r?.tournament_dollars||0);if(a.requiredBetTypes.forEach(u=>{l[u]||n.push(`You need at least one ${this._typeLabel(u)} bet`)}),a.minBetsTotal>0&&i.length<a.minBetsTotal&&n.push(`Place at least ${a.minBetsTotal} bets`),a.stakeRule==="SPEND_ALL"&&d>0){if(c<d){const u=parseFloat((d-c).toFixed(2));n.push(`You have TD$ ${u.toLocaleString()} left to spend — use your entire balance`)}else if(c>d+.01){const u=parseFloat((c-d).toFixed(2));n.push(`You've exceeded your TD$ balance by ${u.toLocaleString()}`)}}return!a.allowPartialSubmit&&n.length>0,{valid:n.length===0,errors:n,warnings:o}}scoreEntry(t,r){const s=parseFloat(t.total_payout||0);return{score:s,breakdown:{payout:s}}}rankLeaderboard(t,r){return[...t].sort((s,a)=>{const n=this.scoreEntry(s,r).score;return this.scoreEntry(a,r).score-n})}getProgressUI(t,r){const s=this.getEffectiveRules(r),a=s.requiredBetTypes.length>0,n=s.stakeRule==="SPEND_ALL";if(!a&&!n)return{type:"NONE",percent:0,label:"",hints:[],typesStatus:[],complete:!0};const o=this._parseBets(t),i=this._getTypeCounts(o),l=this._getTotalStakes(o),c=parseFloat(r?.tournament_dollars||0),d=c>0?Math.min(100,Math.round(l/c*100)):0,u=s.requiredBetTypes.every(m=>i[m]),p=!n||Math.abs(l-c)<.01,f=s.requiredBetTypes.map(m=>({type:m,label:this._typeShortLabel(m),placed:!!i[m],count:i[m]||0})),_=[],w=s.requiredBetTypes.filter(m=>!i[m]).map(m=>this._typeLabel(m));return w.length>0&&!p?_.push(`Need a ${w.join(", ")} bet · Spend all TD$ ${Math.round(c).toLocaleString()}`):w.length>0?_.push(`Need a ${w.join(", ")} bet`):!p&&l<c&&_.push(`TD$ ${Math.round(c-l).toLocaleString()} left to allocate`),{type:a?"BET_TYPES":"STAKE_PROGRESS",percent:d,label:n?`TD$ ${Math.round(l).toLocaleString()} / ${Math.round(c).toLocaleString()} spent`:`${o.length} bets placed`,typesStatus:f,hints:_,complete:u&&p}}getValidationMessages(t,r,s){return this.getProgressUI(t,r).hints}getBadge(){return null}getRulesHTML(t){return"<p>Place bets on any matches in the tournament. The player with the highest total payout wins.</p>"}getEmptyStateText(){return"Select a match to start betting"}}class ul extends xu{constructor(){super(),this.id="DEFAULT_FORMAT",this.label="Free Play",this.description="Place any bets you want across the tournament slate."}get scoring(){return{method:"POTENTIAL_WINNINGS",rankBy:["score","pendingPayout","timestamp"],bonuses:[],penalizeMissing:!1}}scoreEntry(t,r){const s=parseFloat(t.tournament_dollars??r?.tournament_dollars??0),a=this._parseBets(t.bets||[]);let n=0,o=0,i=0;a.forEach(d=>{n+=d.stake,d.reconciled?i+=d.payout:o+=d.payout});const l=s-n;return{score:parseFloat((l+o+i).toFixed(2)),breakdown:{startingTD:parseFloat(s.toFixed(2)),remainingTD:parseFloat(l.toFixed(2)),totalStakes:parseFloat(n.toFixed(2)),pendingPayout:parseFloat(o.toFixed(2)),settledPayout:parseFloat(i.toFixed(2))}}}rankLeaderboard(t,r){return[...t].map(s=>({entry:s,...this.scoreEntry(s,r)})).sort((s,a)=>{if(a.score!==s.score)return a.score-s.score;if(a.breakdown.pendingPayout!==s.breakdown.pendingPayout)return a.breakdown.pendingPayout-s.breakdown.pendingPayout;const n=new Date(s.entry.timestamp||0).getTime(),o=new Date(a.entry.timestamp||0).getTime();return n-o}).map(s=>s.entry)}}class e_ extends xu{constructor(){super(),this.id="SET_IT_AND_FORGET_IT",this.label="Set It and Forget It",this.description="Build your lineup with one of each bet type across the slate. Spend all your TD$."}get rules(){return{betTypes:["SPREAD","MONEY","TOTAL"],requiredBetTypes:["SPREAD","MONEY","TOTAL"],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:3,stakeRule:"SPEND_ALL",stakeMin:1,stakeMax:null,allowPartialSubmit:!1,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!0}}get scoring(){return{method:"PAYOUT_SUM",rankBy:["totalPayout","betCount","timestamp"],bonuses:[],penalizeMissing:!0}}getBadge(){return{label:"Set & Forget",color:"ghost"}}getEmptyStateText(){return"Build your lineup — place one of each bet type and spend all your TD$"}getRulesHTML(t){const r=t?.tournament_dollars||0;return`
            <div style="padding: 12px 0;">
                <p style="margin: 0 0 8px; font-weight: 600; color: rgba(255,255,255,0.85);">Set It and Forget It Rules:</p>
                <ul style="margin: 0; padding: 0 0 0 20px; color: rgba(255,255,255,0.6); font-size: 0.85rem; line-height: 1.8;">
                    <li>Place at least one <strong>Spread</strong>, one <strong>Money Line</strong>, and one <strong>Over/Under</strong> bet</li>
                    <li>You must spend your entire <strong>TD$ ${Number(r).toLocaleString()}</strong> balance across all bets</li>
                    <li>One bet per match per bet type (no duplicates)</li>
                    <li>Highest total payout wins the tournament</li>
                </ul>
            </div>`}}var Ns={exports:{}},zn={},Bt={},wr={},jn={},Un={},Hn={},pl;function ja(){return pl||(pl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.regexpCode=e.getEsmExportName=e.getProperty=e.safeStringify=e.stringify=e.strConcat=e.addCodeArg=e.str=e._=e.nil=e._Code=e.Name=e.IDENTIFIER=e._CodeOrName=void 0;class t{}e._CodeOrName=t,e.IDENTIFIER=/^[a-z$_][a-z$_0-9]*$/i;class r extends t{constructor(h){if(super(),!e.IDENTIFIER.test(h))throw new Error("CodeGen: name must be a valid identifier");this.str=h}toString(){return this.str}emptyStr(){return!1}get names(){return{[this.str]:1}}}e.Name=r;class s extends t{constructor(h){super(),this._items=typeof h=="string"?[h]:h}toString(){return this.str}emptyStr(){if(this._items.length>1)return!1;const h=this._items[0];return h===""||h==='""'}get str(){var h;return(h=this._str)!==null&&h!==void 0?h:this._str=this._items.reduce((g,v)=>`${g}${v}`,"")}get names(){var h;return(h=this._names)!==null&&h!==void 0?h:this._names=this._items.reduce((g,v)=>(v instanceof r&&(g[v.str]=(g[v.str]||0)+1),g),{})}}e._Code=s,e.nil=new s("");function a(m,...h){const g=[m[0]];let v=0;for(;v<h.length;)i(g,h[v]),g.push(m[++v]);return new s(g)}e._=a;const n=new s("+");function o(m,...h){const g=[f(m[0])];let v=0;for(;v<h.length;)g.push(n),i(g,h[v]),g.push(n,f(m[++v]));return l(g),new s(g)}e.str=o;function i(m,h){h instanceof s?m.push(...h._items):h instanceof r?m.push(h):m.push(u(h))}e.addCodeArg=i;function l(m){let h=1;for(;h<m.length-1;){if(m[h]===n){const g=c(m[h-1],m[h+1]);if(g!==void 0){m.splice(h-1,3,g);continue}m[h++]="+"}h++}}function c(m,h){if(h==='""')return m;if(m==='""')return h;if(typeof m=="string")return h instanceof r||m[m.length-1]!=='"'?void 0:typeof h!="string"?`${m.slice(0,-1)}${h}"`:h[0]==='"'?m.slice(0,-1)+h.slice(1):void 0;if(typeof h=="string"&&h[0]==='"'&&!(m instanceof r))return`"${m}${h.slice(1)}`}function d(m,h){return h.emptyStr()?m:m.emptyStr()?h:o`${m}${h}`}e.strConcat=d;function u(m){return typeof m=="number"||typeof m=="boolean"||m===null?m:f(Array.isArray(m)?m.join(","):m)}function p(m){return new s(f(m))}e.stringify=p;function f(m){return JSON.stringify(m).replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}e.safeStringify=f;function _(m){return typeof m=="string"&&e.IDENTIFIER.test(m)?new s(`.${m}`):a`[${m}]`}e.getProperty=_;function y(m){if(typeof m=="string"&&e.IDENTIFIER.test(m))return new s(`${m}`);throw new Error(`CodeGen: invalid export name: ${m}, use explicit $id name mapping`)}e.getEsmExportName=y;function w(m){return new s(m.toString())}e.regexpCode=w})(Hn)),Hn}var qn={},fl;function hl(){return fl||(fl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.ValueScope=e.ValueScopeName=e.Scope=e.varKinds=e.UsedValueState=void 0;const t=ja();class r extends Error{constructor(c){super(`CodeGen: "code" for ${c} not defined`),this.value=c.value}}var s;(function(l){l[l.Started=0]="Started",l[l.Completed=1]="Completed"})(s||(e.UsedValueState=s={})),e.varKinds={const:new t.Name("const"),let:new t.Name("let"),var:new t.Name("var")};class a{constructor({prefixes:c,parent:d}={}){this._names={},this._prefixes=c,this._parent=d}toName(c){return c instanceof t.Name?c:this.name(c)}name(c){return new t.Name(this._newName(c))}_newName(c){const d=this._names[c]||this._nameGroup(c);return`${c}${d.index++}`}_nameGroup(c){var d,u;if(!((u=(d=this._parent)===null||d===void 0?void 0:d._prefixes)===null||u===void 0)&&u.has(c)||this._prefixes&&!this._prefixes.has(c))throw new Error(`CodeGen: prefix "${c}" is not allowed in this scope`);return this._names[c]={prefix:c,index:0}}}e.Scope=a;class n extends t.Name{constructor(c,d){super(d),this.prefix=c}setValue(c,{property:d,itemIndex:u}){this.value=c,this.scopePath=(0,t._)`.${new t.Name(d)}[${u}]`}}e.ValueScopeName=n;const o=(0,t._)`\n`;class i extends a{constructor(c){super(c),this._values={},this._scope=c.scope,this.opts={...c,_n:c.lines?o:t.nil}}get(){return this._scope}name(c){return new n(c,this._newName(c))}value(c,d){var u;if(d.ref===void 0)throw new Error("CodeGen: ref must be passed in value");const p=this.toName(c),{prefix:f}=p,_=(u=d.key)!==null&&u!==void 0?u:d.ref;let y=this._values[f];if(y){const h=y.get(_);if(h)return h}else y=this._values[f]=new Map;y.set(_,p);const w=this._scope[f]||(this._scope[f]=[]),m=w.length;return w[m]=d.ref,p.setValue(d,{property:f,itemIndex:m}),p}getValue(c,d){const u=this._values[c];if(u)return u.get(d)}scopeRefs(c,d=this._values){return this._reduceValues(d,u=>{if(u.scopePath===void 0)throw new Error(`CodeGen: name "${u}" has no value`);return(0,t._)`${c}${u.scopePath}`})}scopeCode(c=this._values,d,u){return this._reduceValues(c,p=>{if(p.value===void 0)throw new Error(`CodeGen: name "${p}" has no value`);return p.value.code},d,u)}_reduceValues(c,d,u={},p){let f=t.nil;for(const _ in c){const y=c[_];if(!y)continue;const w=u[_]=u[_]||new Map;y.forEach(m=>{if(w.has(m))return;w.set(m,s.Started);let h=d(m);if(h){const g=this.opts.es5?e.varKinds.var:e.varKinds.const;f=(0,t._)`${f}${g} ${m} = ${h};${this.opts._n}`}else if(h=p?.(m))f=(0,t._)`${f}${h}${this.opts._n}`;else throw new r(m);w.set(m,s.Completed)})}return f}}e.ValueScope=i})(qn)),qn}var ml;function ge(){return ml||(ml=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.or=e.and=e.not=e.CodeGen=e.operators=e.varKinds=e.ValueScopeName=e.ValueScope=e.Scope=e.Name=e.regexpCode=e.stringify=e.getProperty=e.nil=e.strConcat=e.str=e._=void 0;const t=ja(),r=hl();var s=ja();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return s._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return s.str}}),Object.defineProperty(e,"strConcat",{enumerable:!0,get:function(){return s.strConcat}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return s.nil}}),Object.defineProperty(e,"getProperty",{enumerable:!0,get:function(){return s.getProperty}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return s.stringify}}),Object.defineProperty(e,"regexpCode",{enumerable:!0,get:function(){return s.regexpCode}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return s.Name}});var a=hl();Object.defineProperty(e,"Scope",{enumerable:!0,get:function(){return a.Scope}}),Object.defineProperty(e,"ValueScope",{enumerable:!0,get:function(){return a.ValueScope}}),Object.defineProperty(e,"ValueScopeName",{enumerable:!0,get:function(){return a.ValueScopeName}}),Object.defineProperty(e,"varKinds",{enumerable:!0,get:function(){return a.varKinds}}),e.operators={GT:new t._Code(">"),GTE:new t._Code(">="),LT:new t._Code("<"),LTE:new t._Code("<="),EQ:new t._Code("==="),NEQ:new t._Code("!=="),NOT:new t._Code("!"),OR:new t._Code("||"),AND:new t._Code("&&"),ADD:new t._Code("+")};class n{optimizeNodes(){return this}optimizeNames(A,R){return this}}class o extends n{constructor(A,R,V){super(),this.varKind=A,this.name=R,this.rhs=V}render({es5:A,_n:R}){const V=A?r.varKinds.var:this.varKind,L=this.rhs===void 0?"":` = ${this.rhs}`;return`${V} ${this.name}${L};`+R}optimizeNames(A,R){if(A[this.name.str])return this.rhs&&(this.rhs=j(this.rhs,A,R)),this}get names(){return this.rhs instanceof t._CodeOrName?this.rhs.names:{}}}class i extends n{constructor(A,R,V){super(),this.lhs=A,this.rhs=R,this.sideEffects=V}render({_n:A}){return`${this.lhs} = ${this.rhs};`+A}optimizeNames(A,R){if(!(this.lhs instanceof t.Name&&!A[this.lhs.str]&&!this.sideEffects))return this.rhs=j(this.rhs,A,R),this}get names(){const A=this.lhs instanceof t.Name?{}:{...this.lhs.names};return M(A,this.rhs)}}class l extends i{constructor(A,R,V,L){super(A,V,L),this.op=R}render({_n:A}){return`${this.lhs} ${this.op}= ${this.rhs};`+A}}class c extends n{constructor(A){super(),this.label=A,this.names={}}render({_n:A}){return`${this.label}:`+A}}class d extends n{constructor(A){super(),this.label=A,this.names={}}render({_n:A}){return`break${this.label?` ${this.label}`:""};`+A}}class u extends n{constructor(A){super(),this.error=A}render({_n:A}){return`throw ${this.error};`+A}get names(){return this.error.names}}class p extends n{constructor(A){super(),this.code=A}render({_n:A}){return`${this.code};`+A}optimizeNodes(){return`${this.code}`?this:void 0}optimizeNames(A,R){return this.code=j(this.code,A,R),this}get names(){return this.code instanceof t._CodeOrName?this.code.names:{}}}class f extends n{constructor(A=[]){super(),this.nodes=A}render(A){return this.nodes.reduce((R,V)=>R+V.render(A),"")}optimizeNodes(){const{nodes:A}=this;let R=A.length;for(;R--;){const V=A[R].optimizeNodes();Array.isArray(V)?A.splice(R,1,...V):V?A[R]=V:A.splice(R,1)}return A.length>0?this:void 0}optimizeNames(A,R){const{nodes:V}=this;let L=V.length;for(;L--;){const z=V[L];z.optimizeNames(A,R)||(Q(A,z.names),V.splice(L,1))}return V.length>0?this:void 0}get names(){return this.nodes.reduce((A,R)=>$(A,R.names),{})}}class _ extends f{render(A){return"{"+A._n+super.render(A)+"}"+A._n}}class y extends f{}class w extends _{}w.kind="else";class m extends _{constructor(A,R){super(R),this.condition=A}render(A){let R=`if(${this.condition})`+super.render(A);return this.else&&(R+="else "+this.else.render(A)),R}optimizeNodes(){super.optimizeNodes();const A=this.condition;if(A===!0)return this.nodes;let R=this.else;if(R){const V=R.optimizeNodes();R=this.else=Array.isArray(V)?new w(V):V}if(R)return A===!1?R instanceof m?R:R.nodes:this.nodes.length?this:new m(se(A),R instanceof m?[R]:R.nodes);if(!(A===!1||!this.nodes.length))return this}optimizeNames(A,R){var V;if(this.else=(V=this.else)===null||V===void 0?void 0:V.optimizeNames(A,R),!!(super.optimizeNames(A,R)||this.else))return this.condition=j(this.condition,A,R),this}get names(){const A=super.names;return M(A,this.condition),this.else&&$(A,this.else.names),A}}m.kind="if";class h extends _{}h.kind="for";class g extends h{constructor(A){super(),this.iteration=A}render(A){return`for(${this.iteration})`+super.render(A)}optimizeNames(A,R){if(super.optimizeNames(A,R))return this.iteration=j(this.iteration,A,R),this}get names(){return $(super.names,this.iteration.names)}}class v extends h{constructor(A,R,V,L){super(),this.varKind=A,this.name=R,this.from=V,this.to=L}render(A){const R=A.es5?r.varKinds.var:this.varKind,{name:V,from:L,to:z}=this;return`for(${R} ${V}=${L}; ${V}<${z}; ${V}++)`+super.render(A)}get names(){const A=M(super.names,this.from);return M(A,this.to)}}class b extends h{constructor(A,R,V,L){super(),this.loop=A,this.varKind=R,this.name=V,this.iterable=L}render(A){return`for(${this.varKind} ${this.name} ${this.loop} ${this.iterable})`+super.render(A)}optimizeNames(A,R){if(super.optimizeNames(A,R))return this.iterable=j(this.iterable,A,R),this}get names(){return $(super.names,this.iterable.names)}}class T extends _{constructor(A,R,V){super(),this.name=A,this.args=R,this.async=V}render(A){return`${this.async?"async ":""}function ${this.name}(${this.args})`+super.render(A)}}T.kind="func";class P extends f{render(A){return"return "+super.render(A)}}P.kind="return";class k extends _{render(A){let R="try"+super.render(A);return this.catch&&(R+=this.catch.render(A)),this.finally&&(R+=this.finally.render(A)),R}optimizeNodes(){var A,R;return super.optimizeNodes(),(A=this.catch)===null||A===void 0||A.optimizeNodes(),(R=this.finally)===null||R===void 0||R.optimizeNodes(),this}optimizeNames(A,R){var V,L;return super.optimizeNames(A,R),(V=this.catch)===null||V===void 0||V.optimizeNames(A,R),(L=this.finally)===null||L===void 0||L.optimizeNames(A,R),this}get names(){const A=super.names;return this.catch&&$(A,this.catch.names),this.finally&&$(A,this.finally.names),A}}class S extends _{constructor(A){super(),this.error=A}render(A){return`catch(${this.error})`+super.render(A)}}S.kind="catch";class x extends _{render(A){return"finally"+super.render(A)}}x.kind="finally";class C{constructor(A,R={}){this._values={},this._blockStarts=[],this._constants={},this.opts={...R,_n:R.lines?`
`:""},this._extScope=A,this._scope=new r.Scope({parent:A}),this._nodes=[new y]}toString(){return this._root.render(this.opts)}name(A){return this._scope.name(A)}scopeName(A){return this._extScope.name(A)}scopeValue(A,R){const V=this._extScope.value(A,R);return(this._values[V.prefix]||(this._values[V.prefix]=new Set)).add(V),V}getScopeValue(A,R){return this._extScope.getValue(A,R)}scopeRefs(A){return this._extScope.scopeRefs(A,this._values)}scopeCode(){return this._extScope.scopeCode(this._values)}_def(A,R,V,L){const z=this._scope.toName(R);return V!==void 0&&L&&(this._constants[z.str]=V),this._leafNode(new o(A,z,V)),z}const(A,R,V){return this._def(r.varKinds.const,A,R,V)}let(A,R,V){return this._def(r.varKinds.let,A,R,V)}var(A,R,V){return this._def(r.varKinds.var,A,R,V)}assign(A,R,V){return this._leafNode(new i(A,R,V))}add(A,R){return this._leafNode(new l(A,e.operators.ADD,R))}code(A){return typeof A=="function"?A():A!==t.nil&&this._leafNode(new p(A)),this}object(...A){const R=["{"];for(const[V,L]of A)R.length>1&&R.push(","),R.push(V),(V!==L||this.opts.es5)&&(R.push(":"),(0,t.addCodeArg)(R,L));return R.push("}"),new t._Code(R)}if(A,R,V){if(this._blockNode(new m(A)),R&&V)this.code(R).else().code(V).endIf();else if(R)this.code(R).endIf();else if(V)throw new Error('CodeGen: "else" body without "then" body');return this}elseIf(A){return this._elseNode(new m(A))}else(){return this._elseNode(new w)}endIf(){return this._endBlockNode(m,w)}_for(A,R){return this._blockNode(A),R&&this.code(R).endFor(),this}for(A,R){return this._for(new g(A),R)}forRange(A,R,V,L,z=this.opts.es5?r.varKinds.var:r.varKinds.let){const G=this._scope.toName(A);return this._for(new v(z,G,R,V),()=>L(G))}forOf(A,R,V,L=r.varKinds.const){const z=this._scope.toName(A);if(this.opts.es5){const G=R instanceof t.Name?R:this.var("_arr",R);return this.forRange("_i",0,(0,t._)`${G}.length`,te=>{this.var(z,(0,t._)`${G}[${te}]`),V(z)})}return this._for(new b("of",L,z,R),()=>V(z))}forIn(A,R,V,L=this.opts.es5?r.varKinds.var:r.varKinds.const){if(this.opts.ownProperties)return this.forOf(A,(0,t._)`Object.keys(${R})`,V);const z=this._scope.toName(A);return this._for(new b("in",L,z,R),()=>V(z))}endFor(){return this._endBlockNode(h)}label(A){return this._leafNode(new c(A))}break(A){return this._leafNode(new d(A))}return(A){const R=new P;if(this._blockNode(R),this.code(A),R.nodes.length!==1)throw new Error('CodeGen: "return" should have one node');return this._endBlockNode(P)}try(A,R,V){if(!R&&!V)throw new Error('CodeGen: "try" without "catch" and "finally"');const L=new k;if(this._blockNode(L),this.code(A),R){const z=this.name("e");this._currNode=L.catch=new S(z),R(z)}return V&&(this._currNode=L.finally=new x,this.code(V)),this._endBlockNode(S,x)}throw(A){return this._leafNode(new u(A))}block(A,R){return this._blockStarts.push(this._nodes.length),A&&this.code(A).endBlock(R),this}endBlock(A){const R=this._blockStarts.pop();if(R===void 0)throw new Error("CodeGen: not in self-balancing block");const V=this._nodes.length-R;if(V<0||A!==void 0&&V!==A)throw new Error(`CodeGen: wrong number of nodes: ${V} vs ${A} expected`);return this._nodes.length=R,this}func(A,R=t.nil,V,L){return this._blockNode(new T(A,R,V)),L&&this.code(L).endFunc(),this}endFunc(){return this._endBlockNode(T)}optimize(A=1){for(;A-- >0;)this._root.optimizeNodes(),this._root.optimizeNames(this._root.names,this._constants)}_leafNode(A){return this._currNode.nodes.push(A),this}_blockNode(A){this._currNode.nodes.push(A),this._nodes.push(A)}_endBlockNode(A,R){const V=this._currNode;if(V instanceof A||R&&V instanceof R)return this._nodes.pop(),this;throw new Error(`CodeGen: not in block "${R?`${A.kind}/${R.kind}`:A.kind}"`)}_elseNode(A){const R=this._currNode;if(!(R instanceof m))throw new Error('CodeGen: "else" without "if"');return this._currNode=R.else=A,this}get _root(){return this._nodes[0]}get _currNode(){const A=this._nodes;return A[A.length-1]}set _currNode(A){const R=this._nodes;R[R.length-1]=A}}e.CodeGen=C;function $(F,A){for(const R in A)F[R]=(F[R]||0)+(A[R]||0);return F}function M(F,A){return A instanceof t._CodeOrName?$(F,A.names):F}function j(F,A,R){if(F instanceof t.Name)return V(F);if(!L(F))return F;return new t._Code(F._items.reduce((z,G)=>(G instanceof t.Name&&(G=V(G)),G instanceof t._Code?z.push(...G._items):z.push(G),z),[]));function V(z){const G=R[z.str];return G===void 0||A[z.str]!==1?z:(delete A[z.str],G)}function L(z){return z instanceof t._Code&&z._items.some(G=>G instanceof t.Name&&A[G.str]===1&&R[G.str]!==void 0)}}function Q(F,A){for(const R in A)F[R]=(F[R]||0)-(A[R]||0)}function se(F){return typeof F=="boolean"||typeof F=="number"||F===null?!F:(0,t._)`!${U(F)}`}e.not=se;const Y=I(e.operators.AND);function q(...F){return F.reduce(Y)}e.and=q;const K=I(e.operators.OR);function B(...F){return F.reduce(K)}e.or=B;function I(F){return(A,R)=>A===t.nil?R:R===t.nil?A:(0,t._)`${U(A)} ${F} ${U(R)}`}function U(F){return F instanceof t.Name?F:(0,t._)`(${F})`}})(Un)),Un}var me={},gl;function ve(){if(gl)return me;gl=1,Object.defineProperty(me,"__esModule",{value:!0}),me.checkStrictMode=me.getErrorPath=me.Type=me.useFunc=me.setEvaluated=me.evaluatedPropsToName=me.mergeEvaluated=me.eachItem=me.unescapeJsonPointer=me.escapeJsonPointer=me.escapeFragment=me.unescapeFragment=me.schemaRefOrVal=me.schemaHasRulesButRef=me.schemaHasRules=me.checkUnknownRules=me.alwaysValidSchema=me.toHash=void 0;const e=ge(),t=ja();function r(b){const T={};for(const P of b)T[P]=!0;return T}me.toHash=r;function s(b,T){return typeof T=="boolean"?T:Object.keys(T).length===0?!0:(a(b,T),!n(T,b.self.RULES.all))}me.alwaysValidSchema=s;function a(b,T=b.schema){const{opts:P,self:k}=b;if(!P.strictSchema||typeof T=="boolean")return;const S=k.RULES.keywords;for(const x in T)S[x]||v(b,`unknown keyword: "${x}"`)}me.checkUnknownRules=a;function n(b,T){if(typeof b=="boolean")return!b;for(const P in b)if(T[P])return!0;return!1}me.schemaHasRules=n;function o(b,T){if(typeof b=="boolean")return!b;for(const P in b)if(P!=="$ref"&&T.all[P])return!0;return!1}me.schemaHasRulesButRef=o;function i({topSchemaRef:b,schemaPath:T},P,k,S){if(!S){if(typeof P=="number"||typeof P=="boolean")return P;if(typeof P=="string")return(0,e._)`${P}`}return(0,e._)`${b}${T}${(0,e.getProperty)(k)}`}me.schemaRefOrVal=i;function l(b){return u(decodeURIComponent(b))}me.unescapeFragment=l;function c(b){return encodeURIComponent(d(b))}me.escapeFragment=c;function d(b){return typeof b=="number"?`${b}`:b.replace(/~/g,"~0").replace(/\//g,"~1")}me.escapeJsonPointer=d;function u(b){return b.replace(/~1/g,"/").replace(/~0/g,"~")}me.unescapeJsonPointer=u;function p(b,T){if(Array.isArray(b))for(const P of b)T(P);else T(b)}me.eachItem=p;function f({mergeNames:b,mergeToName:T,mergeValues:P,resultToName:k}){return(S,x,C,$)=>{const M=C===void 0?x:C instanceof e.Name?(x instanceof e.Name?b(S,x,C):T(S,x,C),C):x instanceof e.Name?(T(S,C,x),x):P(x,C);return $===e.Name&&!(M instanceof e.Name)?k(S,M):M}}me.mergeEvaluated={props:f({mergeNames:(b,T,P)=>b.if((0,e._)`${P} !== true && ${T} !== undefined`,()=>{b.if((0,e._)`${T} === true`,()=>b.assign(P,!0),()=>b.assign(P,(0,e._)`${P} || {}`).code((0,e._)`Object.assign(${P}, ${T})`))}),mergeToName:(b,T,P)=>b.if((0,e._)`${P} !== true`,()=>{T===!0?b.assign(P,!0):(b.assign(P,(0,e._)`${P} || {}`),y(b,P,T))}),mergeValues:(b,T)=>b===!0?!0:{...b,...T},resultToName:_}),items:f({mergeNames:(b,T,P)=>b.if((0,e._)`${P} !== true && ${T} !== undefined`,()=>b.assign(P,(0,e._)`${T} === true ? true : ${P} > ${T} ? ${P} : ${T}`)),mergeToName:(b,T,P)=>b.if((0,e._)`${P} !== true`,()=>b.assign(P,T===!0?!0:(0,e._)`${P} > ${T} ? ${P} : ${T}`)),mergeValues:(b,T)=>b===!0?!0:Math.max(b,T),resultToName:(b,T)=>b.var("items",T)})};function _(b,T){if(T===!0)return b.var("props",!0);const P=b.var("props",(0,e._)`{}`);return T!==void 0&&y(b,P,T),P}me.evaluatedPropsToName=_;function y(b,T,P){Object.keys(P).forEach(k=>b.assign((0,e._)`${T}${(0,e.getProperty)(k)}`,!0))}me.setEvaluated=y;const w={};function m(b,T){return b.scopeValue("func",{ref:T,code:w[T.code]||(w[T.code]=new t._Code(T.code))})}me.useFunc=m;var h;(function(b){b[b.Num=0]="Num",b[b.Str=1]="Str"})(h||(me.Type=h={}));function g(b,T,P){if(b instanceof e.Name){const k=T===h.Num;return P?k?(0,e._)`"[" + ${b} + "]"`:(0,e._)`"['" + ${b} + "']"`:k?(0,e._)`"/" + ${b}`:(0,e._)`"/" + ${b}.replace(/~/g, "~0").replace(/\\//g, "~1")`}return P?(0,e.getProperty)(b).toString():"/"+d(b)}me.getErrorPath=g;function v(b,T,P=b.opts.strictSchema){if(P){if(T=`strict mode: ${T}`,P===!0)throw new Error(T);b.self.logger.warn(T)}}return me.checkStrictMode=v,me}var Is={},bl;function gr(){if(bl)return Is;bl=1,Object.defineProperty(Is,"__esModule",{value:!0});const e=ge(),t={data:new e.Name("data"),valCxt:new e.Name("valCxt"),instancePath:new e.Name("instancePath"),parentData:new e.Name("parentData"),parentDataProperty:new e.Name("parentDataProperty"),rootData:new e.Name("rootData"),dynamicAnchors:new e.Name("dynamicAnchors"),vErrors:new e.Name("vErrors"),errors:new e.Name("errors"),this:new e.Name("this"),self:new e.Name("self"),scope:new e.Name("scope"),json:new e.Name("json"),jsonPos:new e.Name("jsonPos"),jsonLen:new e.Name("jsonLen"),jsonPart:new e.Name("jsonPart")};return Is.default=t,Is}var yl;function ln(){return yl||(yl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.extendErrors=e.resetErrorsCount=e.reportExtraError=e.reportError=e.keyword$DataError=e.keywordError=void 0;const t=ge(),r=ve(),s=gr();e.keywordError={message:({keyword:w})=>(0,t.str)`must pass "${w}" keyword validation`},e.keyword$DataError={message:({keyword:w,schemaType:m})=>m?(0,t.str)`"${w}" keyword must be ${m} ($data)`:(0,t.str)`"${w}" keyword is invalid ($data)`};function a(w,m=e.keywordError,h,g){const{it:v}=w,{gen:b,compositeRule:T,allErrors:P}=v,k=u(w,m,h);g??(T||P)?l(b,k):c(v,(0,t._)`[${k}]`)}e.reportError=a;function n(w,m=e.keywordError,h){const{it:g}=w,{gen:v,compositeRule:b,allErrors:T}=g,P=u(w,m,h);l(v,P),b||T||c(g,s.default.vErrors)}e.reportExtraError=n;function o(w,m){w.assign(s.default.errors,m),w.if((0,t._)`${s.default.vErrors} !== null`,()=>w.if(m,()=>w.assign((0,t._)`${s.default.vErrors}.length`,m),()=>w.assign(s.default.vErrors,null)))}e.resetErrorsCount=o;function i({gen:w,keyword:m,schemaValue:h,data:g,errsCount:v,it:b}){if(v===void 0)throw new Error("ajv implementation error");const T=w.name("err");w.forRange("i",v,s.default.errors,P=>{w.const(T,(0,t._)`${s.default.vErrors}[${P}]`),w.if((0,t._)`${T}.instancePath === undefined`,()=>w.assign((0,t._)`${T}.instancePath`,(0,t.strConcat)(s.default.instancePath,b.errorPath))),w.assign((0,t._)`${T}.schemaPath`,(0,t.str)`${b.errSchemaPath}/${m}`),b.opts.verbose&&(w.assign((0,t._)`${T}.schema`,h),w.assign((0,t._)`${T}.data`,g))})}e.extendErrors=i;function l(w,m){const h=w.const("err",m);w.if((0,t._)`${s.default.vErrors} === null`,()=>w.assign(s.default.vErrors,(0,t._)`[${h}]`),(0,t._)`${s.default.vErrors}.push(${h})`),w.code((0,t._)`${s.default.errors}++`)}function c(w,m){const{gen:h,validateName:g,schemaEnv:v}=w;v.$async?h.throw((0,t._)`new ${w.ValidationError}(${m})`):(h.assign((0,t._)`${g}.errors`,m),h.return(!1))}const d={keyword:new t.Name("keyword"),schemaPath:new t.Name("schemaPath"),params:new t.Name("params"),propertyName:new t.Name("propertyName"),message:new t.Name("message"),schema:new t.Name("schema"),parentSchema:new t.Name("parentSchema")};function u(w,m,h){const{createErrors:g}=w.it;return g===!1?(0,t._)`{}`:p(w,m,h)}function p(w,m,h={}){const{gen:g,it:v}=w,b=[f(v,h),_(w,h)];return y(w,m,b),g.object(...b)}function f({errorPath:w},{instancePath:m}){const h=m?(0,t.str)`${w}${(0,r.getErrorPath)(m,r.Type.Str)}`:w;return[s.default.instancePath,(0,t.strConcat)(s.default.instancePath,h)]}function _({keyword:w,it:{errSchemaPath:m}},{schemaPath:h,parentSchema:g}){let v=g?m:(0,t.str)`${m}/${w}`;return h&&(v=(0,t.str)`${v}${(0,r.getErrorPath)(h,r.Type.Str)}`),[d.schemaPath,v]}function y(w,{params:m,message:h},g){const{keyword:v,data:b,schemaValue:T,it:P}=w,{opts:k,propertyName:S,topSchemaRef:x,schemaPath:C}=P;g.push([d.keyword,v],[d.params,typeof m=="function"?m(w):m||(0,t._)`{}`]),k.messages&&g.push([d.message,typeof h=="function"?h(w):h]),k.verbose&&g.push([d.schema,T],[d.parentSchema,(0,t._)`${x}${C}`],[s.default.data,b]),S&&g.push([d.propertyName,S])}})(jn)),jn}var _l;function t_(){if(_l)return wr;_l=1,Object.defineProperty(wr,"__esModule",{value:!0}),wr.boolOrEmptySchema=wr.topBoolOrEmptySchema=void 0;const e=ln(),t=ge(),r=gr(),s={message:"boolean schema is false"};function a(i){const{gen:l,schema:c,validateName:d}=i;c===!1?o(i,!1):typeof c=="object"&&c.$async===!0?l.return(r.default.data):(l.assign((0,t._)`${d}.errors`,null),l.return(!0))}wr.topBoolOrEmptySchema=a;function n(i,l){const{gen:c,schema:d}=i;d===!1?(c.var(l,!1),o(i)):c.var(l,!0)}wr.boolOrEmptySchema=n;function o(i,l){const{gen:c,data:d}=i,u={gen:c,keyword:"false schema",data:d,schema:!1,schemaCode:!1,schemaValue:!1,params:{},it:i};(0,e.reportError)(u,s,void 0,l)}return wr}var Ie={},Tr={},vl;function Eu(){if(vl)return Tr;vl=1,Object.defineProperty(Tr,"__esModule",{value:!0}),Tr.getRules=Tr.isJSONType=void 0;const e=["string","number","integer","boolean","null","object","array"],t=new Set(e);function r(a){return typeof a=="string"&&t.has(a)}Tr.isJSONType=r;function s(){const a={number:{type:"number",rules:[]},string:{type:"string",rules:[]},array:{type:"array",rules:[]},object:{type:"object",rules:[]}};return{types:{...a,integer:!0,boolean:!0,null:!0},rules:[{rules:[]},a.number,a.string,a.array,a.object],post:{rules:[]},all:{},keywords:{}}}return Tr.getRules=s,Tr}var Ft={},wl;function ku(){if(wl)return Ft;wl=1,Object.defineProperty(Ft,"__esModule",{value:!0}),Ft.shouldUseRule=Ft.shouldUseGroup=Ft.schemaHasRulesForType=void 0;function e({schema:s,self:a},n){const o=a.RULES.types[n];return o&&o!==!0&&t(s,o)}Ft.schemaHasRulesForType=e;function t(s,a){return a.rules.some(n=>r(s,n))}Ft.shouldUseGroup=t;function r(s,a){var n;return s[a.keyword]!==void 0||((n=a.definition.implements)===null||n===void 0?void 0:n.some(o=>s[o]!==void 0))}return Ft.shouldUseRule=r,Ft}var Tl;function Ua(){if(Tl)return Ie;Tl=1,Object.defineProperty(Ie,"__esModule",{value:!0}),Ie.reportTypeError=Ie.checkDataTypes=Ie.checkDataType=Ie.coerceAndCheckDataType=Ie.getJSONTypes=Ie.getSchemaTypes=Ie.DataType=void 0;const e=Eu(),t=ku(),r=ln(),s=ge(),a=ve();var n;(function(h){h[h.Correct=0]="Correct",h[h.Wrong=1]="Wrong"})(n||(Ie.DataType=n={}));function o(h){const g=i(h.type);if(g.includes("null")){if(h.nullable===!1)throw new Error("type: null contradicts nullable: false")}else{if(!g.length&&h.nullable!==void 0)throw new Error('"nullable" cannot be used without "type"');h.nullable===!0&&g.push("null")}return g}Ie.getSchemaTypes=o;function i(h){const g=Array.isArray(h)?h:h?[h]:[];if(g.every(e.isJSONType))return g;throw new Error("type must be JSONType or JSONType[]: "+g.join(","))}Ie.getJSONTypes=i;function l(h,g){const{gen:v,data:b,opts:T}=h,P=d(g,T.coerceTypes),k=g.length>0&&!(P.length===0&&g.length===1&&(0,t.schemaHasRulesForType)(h,g[0]));if(k){const S=_(g,b,T.strictNumbers,n.Wrong);v.if(S,()=>{P.length?u(h,g,P):w(h)})}return k}Ie.coerceAndCheckDataType=l;const c=new Set(["string","number","integer","boolean","null"]);function d(h,g){return g?h.filter(v=>c.has(v)||g==="array"&&v==="array"):[]}function u(h,g,v){const{gen:b,data:T,opts:P}=h,k=b.let("dataType",(0,s._)`typeof ${T}`),S=b.let("coerced",(0,s._)`undefined`);P.coerceTypes==="array"&&b.if((0,s._)`${k} == 'object' && Array.isArray(${T}) && ${T}.length == 1`,()=>b.assign(T,(0,s._)`${T}[0]`).assign(k,(0,s._)`typeof ${T}`).if(_(g,T,P.strictNumbers),()=>b.assign(S,T))),b.if((0,s._)`${S} !== undefined`);for(const C of v)(c.has(C)||C==="array"&&P.coerceTypes==="array")&&x(C);b.else(),w(h),b.endIf(),b.if((0,s._)`${S} !== undefined`,()=>{b.assign(T,S),p(h,S)});function x(C){switch(C){case"string":b.elseIf((0,s._)`${k} == "number" || ${k} == "boolean"`).assign(S,(0,s._)`"" + ${T}`).elseIf((0,s._)`${T} === null`).assign(S,(0,s._)`""`);return;case"number":b.elseIf((0,s._)`${k} == "boolean" || ${T} === null
              || (${k} == "string" && ${T} && ${T} == +${T})`).assign(S,(0,s._)`+${T}`);return;case"integer":b.elseIf((0,s._)`${k} === "boolean" || ${T} === null
              || (${k} === "string" && ${T} && ${T} == +${T} && !(${T} % 1))`).assign(S,(0,s._)`+${T}`);return;case"boolean":b.elseIf((0,s._)`${T} === "false" || ${T} === 0 || ${T} === null`).assign(S,!1).elseIf((0,s._)`${T} === "true" || ${T} === 1`).assign(S,!0);return;case"null":b.elseIf((0,s._)`${T} === "" || ${T} === 0 || ${T} === false`),b.assign(S,null);return;case"array":b.elseIf((0,s._)`${k} === "string" || ${k} === "number"
              || ${k} === "boolean" || ${T} === null`).assign(S,(0,s._)`[${T}]`)}}}function p({gen:h,parentData:g,parentDataProperty:v},b){h.if((0,s._)`${g} !== undefined`,()=>h.assign((0,s._)`${g}[${v}]`,b))}function f(h,g,v,b=n.Correct){const T=b===n.Correct?s.operators.EQ:s.operators.NEQ;let P;switch(h){case"null":return(0,s._)`${g} ${T} null`;case"array":P=(0,s._)`Array.isArray(${g})`;break;case"object":P=(0,s._)`${g} && typeof ${g} == "object" && !Array.isArray(${g})`;break;case"integer":P=k((0,s._)`!(${g} % 1) && !isNaN(${g})`);break;case"number":P=k();break;default:return(0,s._)`typeof ${g} ${T} ${h}`}return b===n.Correct?P:(0,s.not)(P);function k(S=s.nil){return(0,s.and)((0,s._)`typeof ${g} == "number"`,S,v?(0,s._)`isFinite(${g})`:s.nil)}}Ie.checkDataType=f;function _(h,g,v,b){if(h.length===1)return f(h[0],g,v,b);let T;const P=(0,a.toHash)(h);if(P.array&&P.object){const k=(0,s._)`typeof ${g} != "object"`;T=P.null?k:(0,s._)`!${g} || ${k}`,delete P.null,delete P.array,delete P.object}else T=s.nil;P.number&&delete P.integer;for(const k in P)T=(0,s.and)(T,f(k,g,v,b));return T}Ie.checkDataTypes=_;const y={message:({schema:h})=>`must be ${h}`,params:({schema:h,schemaValue:g})=>typeof h=="string"?(0,s._)`{type: ${h}}`:(0,s._)`{type: ${g}}`};function w(h){const g=m(h);(0,r.reportError)(g,y)}Ie.reportTypeError=w;function m(h){const{gen:g,data:v,schema:b}=h,T=(0,a.schemaRefOrVal)(h,b,"type");return{gen:g,keyword:"type",data:v,schema:b.type,schemaCode:T,schemaValue:T,parentSchema:b,params:{},it:h}}return Ie}var Zr={},Sl;function r_(){if(Sl)return Zr;Sl=1,Object.defineProperty(Zr,"__esModule",{value:!0}),Zr.assignDefaults=void 0;const e=ge(),t=ve();function r(a,n){const{properties:o,items:i}=a.schema;if(n==="object"&&o)for(const l in o)s(a,l,o[l].default);else n==="array"&&Array.isArray(i)&&i.forEach((l,c)=>s(a,c,l.default))}Zr.assignDefaults=r;function s(a,n,o){const{gen:i,compositeRule:l,data:c,opts:d}=a;if(o===void 0)return;const u=(0,e._)`${c}${(0,e.getProperty)(n)}`;if(l){(0,t.checkStrictMode)(a,`default is ignored for: ${u}`);return}let p=(0,e._)`${u} === undefined`;d.useDefaults==="empty"&&(p=(0,e._)`${p} || ${u} === null || ${u} === ""`),i.if(p,(0,e._)`${u} = ${(0,e.stringify)(o)}`)}return Zr}var ht={},xe={},xl;function vt(){if(xl)return xe;xl=1,Object.defineProperty(xe,"__esModule",{value:!0}),xe.validateUnion=xe.validateArray=xe.usePattern=xe.callValidateCode=xe.schemaProperties=xe.allSchemaProperties=xe.noPropertyInData=xe.propertyInData=xe.isOwnProperty=xe.hasPropFunc=xe.reportMissingProp=xe.checkMissingProp=xe.checkReportMissingProp=void 0;const e=ge(),t=ve(),r=gr(),s=ve();function a(h,g){const{gen:v,data:b,it:T}=h;v.if(d(v,b,g,T.opts.ownProperties),()=>{h.setParams({missingProperty:(0,e._)`${g}`},!0),h.error()})}xe.checkReportMissingProp=a;function n({gen:h,data:g,it:{opts:v}},b,T){return(0,e.or)(...b.map(P=>(0,e.and)(d(h,g,P,v.ownProperties),(0,e._)`${T} = ${P}`)))}xe.checkMissingProp=n;function o(h,g){h.setParams({missingProperty:g},!0),h.error()}xe.reportMissingProp=o;function i(h){return h.scopeValue("func",{ref:Object.prototype.hasOwnProperty,code:(0,e._)`Object.prototype.hasOwnProperty`})}xe.hasPropFunc=i;function l(h,g,v){return(0,e._)`${i(h)}.call(${g}, ${v})`}xe.isOwnProperty=l;function c(h,g,v,b){const T=(0,e._)`${g}${(0,e.getProperty)(v)} !== undefined`;return b?(0,e._)`${T} && ${l(h,g,v)}`:T}xe.propertyInData=c;function d(h,g,v,b){const T=(0,e._)`${g}${(0,e.getProperty)(v)} === undefined`;return b?(0,e.or)(T,(0,e.not)(l(h,g,v))):T}xe.noPropertyInData=d;function u(h){return h?Object.keys(h).filter(g=>g!=="__proto__"):[]}xe.allSchemaProperties=u;function p(h,g){return u(g).filter(v=>!(0,t.alwaysValidSchema)(h,g[v]))}xe.schemaProperties=p;function f({schemaCode:h,data:g,it:{gen:v,topSchemaRef:b,schemaPath:T,errorPath:P},it:k},S,x,C){const $=C?(0,e._)`${h}, ${g}, ${b}${T}`:g,M=[[r.default.instancePath,(0,e.strConcat)(r.default.instancePath,P)],[r.default.parentData,k.parentData],[r.default.parentDataProperty,k.parentDataProperty],[r.default.rootData,r.default.rootData]];k.opts.dynamicRef&&M.push([r.default.dynamicAnchors,r.default.dynamicAnchors]);const j=(0,e._)`${$}, ${v.object(...M)}`;return x!==e.nil?(0,e._)`${S}.call(${x}, ${j})`:(0,e._)`${S}(${j})`}xe.callValidateCode=f;const _=(0,e._)`new RegExp`;function y({gen:h,it:{opts:g}},v){const b=g.unicodeRegExp?"u":"",{regExp:T}=g.code,P=T(v,b);return h.scopeValue("pattern",{key:P.toString(),ref:P,code:(0,e._)`${T.code==="new RegExp"?_:(0,s.useFunc)(h,T)}(${v}, ${b})`})}xe.usePattern=y;function w(h){const{gen:g,data:v,keyword:b,it:T}=h,P=g.name("valid");if(T.allErrors){const S=g.let("valid",!0);return k(()=>g.assign(S,!1)),S}return g.var(P,!0),k(()=>g.break()),P;function k(S){const x=g.const("len",(0,e._)`${v}.length`);g.forRange("i",0,x,C=>{h.subschema({keyword:b,dataProp:C,dataPropType:t.Type.Num},P),g.if((0,e.not)(P),S)})}}xe.validateArray=w;function m(h){const{gen:g,schema:v,keyword:b,it:T}=h;if(!Array.isArray(v))throw new Error("ajv implementation error");if(v.some(x=>(0,t.alwaysValidSchema)(T,x))&&!T.opts.unevaluated)return;const k=g.let("valid",!1),S=g.name("_valid");g.block(()=>v.forEach((x,C)=>{const $=h.subschema({keyword:b,schemaProp:C,compositeRule:!0},S);g.assign(k,(0,e._)`${k} || ${S}`),h.mergeValidEvaluated($,S)||g.if((0,e.not)(k))})),h.result(k,()=>h.reset(),()=>h.error(!0))}return xe.validateUnion=m,xe}var El;function s_(){if(El)return ht;El=1,Object.defineProperty(ht,"__esModule",{value:!0}),ht.validateKeywordUsage=ht.validSchemaType=ht.funcKeywordCode=ht.macroKeywordCode=void 0;const e=ge(),t=gr(),r=vt(),s=ln();function a(p,f){const{gen:_,keyword:y,schema:w,parentSchema:m,it:h}=p,g=f.macro.call(h.self,w,m,h),v=c(_,y,g);h.opts.validateSchema!==!1&&h.self.validateSchema(g,!0);const b=_.name("valid");p.subschema({schema:g,schemaPath:e.nil,errSchemaPath:`${h.errSchemaPath}/${y}`,topSchemaRef:v,compositeRule:!0},b),p.pass(b,()=>p.error(!0))}ht.macroKeywordCode=a;function n(p,f){var _;const{gen:y,keyword:w,schema:m,parentSchema:h,$data:g,it:v}=p;l(v,f);const b=!g&&f.compile?f.compile.call(v.self,m,h,v):f.validate,T=c(y,w,b),P=y.let("valid");p.block$data(P,k),p.ok((_=f.valid)!==null&&_!==void 0?_:P);function k(){if(f.errors===!1)C(),f.modifying&&o(p),$(()=>p.error());else{const M=f.async?S():x();f.modifying&&o(p),$(()=>i(p,M))}}function S(){const M=y.let("ruleErrs",null);return y.try(()=>C((0,e._)`await `),j=>y.assign(P,!1).if((0,e._)`${j} instanceof ${v.ValidationError}`,()=>y.assign(M,(0,e._)`${j}.errors`),()=>y.throw(j))),M}function x(){const M=(0,e._)`${T}.errors`;return y.assign(M,null),C(e.nil),M}function C(M=f.async?(0,e._)`await `:e.nil){const j=v.opts.passContext?t.default.this:t.default.self,Q=!("compile"in f&&!g||f.schema===!1);y.assign(P,(0,e._)`${M}${(0,r.callValidateCode)(p,T,j,Q)}`,f.modifying)}function $(M){var j;y.if((0,e.not)((j=f.valid)!==null&&j!==void 0?j:P),M)}}ht.funcKeywordCode=n;function o(p){const{gen:f,data:_,it:y}=p;f.if(y.parentData,()=>f.assign(_,(0,e._)`${y.parentData}[${y.parentDataProperty}]`))}function i(p,f){const{gen:_}=p;_.if((0,e._)`Array.isArray(${f})`,()=>{_.assign(t.default.vErrors,(0,e._)`${t.default.vErrors} === null ? ${f} : ${t.default.vErrors}.concat(${f})`).assign(t.default.errors,(0,e._)`${t.default.vErrors}.length`),(0,s.extendErrors)(p)},()=>p.error())}function l({schemaEnv:p},f){if(f.async&&!p.$async)throw new Error("async keyword in sync schema")}function c(p,f,_){if(_===void 0)throw new Error(`keyword "${f}" failed to compile`);return p.scopeValue("keyword",typeof _=="function"?{ref:_}:{ref:_,code:(0,e.stringify)(_)})}function d(p,f,_=!1){return!f.length||f.some(y=>y==="array"?Array.isArray(p):y==="object"?p&&typeof p=="object"&&!Array.isArray(p):typeof p==y||_&&typeof p>"u")}ht.validSchemaType=d;function u({schema:p,opts:f,self:_,errSchemaPath:y},w,m){if(Array.isArray(w.keyword)?!w.keyword.includes(m):w.keyword!==m)throw new Error("ajv implementation error");const h=w.dependencies;if(h?.some(g=>!Object.prototype.hasOwnProperty.call(p,g)))throw new Error(`parent schema must have dependencies of ${m}: ${h.join(",")}`);if(w.validateSchema&&!w.validateSchema(p[m])){const v=`keyword "${m}" value is invalid at path "${y}": `+_.errorsText(w.validateSchema.errors);if(f.validateSchema==="log")_.logger.error(v);else throw new Error(v)}}return ht.validateKeywordUsage=u,ht}var zt={},kl;function a_(){if(kl)return zt;kl=1,Object.defineProperty(zt,"__esModule",{value:!0}),zt.extendSubschemaMode=zt.extendSubschemaData=zt.getSubschema=void 0;const e=ge(),t=ve();function r(n,{keyword:o,schemaProp:i,schema:l,schemaPath:c,errSchemaPath:d,topSchemaRef:u}){if(o!==void 0&&l!==void 0)throw new Error('both "keyword" and "schema" passed, only one allowed');if(o!==void 0){const p=n.schema[o];return i===void 0?{schema:p,schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}`,errSchemaPath:`${n.errSchemaPath}/${o}`}:{schema:p[i],schemaPath:(0,e._)`${n.schemaPath}${(0,e.getProperty)(o)}${(0,e.getProperty)(i)}`,errSchemaPath:`${n.errSchemaPath}/${o}/${(0,t.escapeFragment)(i)}`}}if(l!==void 0){if(c===void 0||d===void 0||u===void 0)throw new Error('"schemaPath", "errSchemaPath" and "topSchemaRef" are required with "schema"');return{schema:l,schemaPath:c,topSchemaRef:u,errSchemaPath:d}}throw new Error('either "keyword" or "schema" must be passed')}zt.getSubschema=r;function s(n,o,{dataProp:i,dataPropType:l,data:c,dataTypes:d,propertyName:u}){if(c!==void 0&&i!==void 0)throw new Error('both "data" and "dataProp" passed, only one allowed');const{gen:p}=o;if(i!==void 0){const{errorPath:_,dataPathArr:y,opts:w}=o,m=p.let("data",(0,e._)`${o.data}${(0,e.getProperty)(i)}`,!0);f(m),n.errorPath=(0,e.str)`${_}${(0,t.getErrorPath)(i,l,w.jsPropertySyntax)}`,n.parentDataProperty=(0,e._)`${i}`,n.dataPathArr=[...y,n.parentDataProperty]}if(c!==void 0){const _=c instanceof e.Name?c:p.let("data",c,!0);f(_),u!==void 0&&(n.propertyName=u)}d&&(n.dataTypes=d);function f(_){n.data=_,n.dataLevel=o.dataLevel+1,n.dataTypes=[],o.definedProperties=new Set,n.parentData=o.data,n.dataNames=[...o.dataNames,_]}}zt.extendSubschemaData=s;function a(n,{jtdDiscriminator:o,jtdMetadata:i,compositeRule:l,createErrors:c,allErrors:d}){l!==void 0&&(n.compositeRule=l),c!==void 0&&(n.createErrors=c),d!==void 0&&(n.allErrors=d),n.jtdDiscriminator=o,n.jtdMetadata=i}return zt.extendSubschemaMode=a,zt}var He={},Gn,Pl;function Pu(){return Pl||(Pl=1,Gn=function e(t,r){if(t===r)return!0;if(t&&r&&typeof t=="object"&&typeof r=="object"){if(t.constructor!==r.constructor)return!1;var s,a,n;if(Array.isArray(t)){if(s=t.length,s!=r.length)return!1;for(a=s;a--!==0;)if(!e(t[a],r[a]))return!1;return!0}if(t.constructor===RegExp)return t.source===r.source&&t.flags===r.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===r.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===r.toString();if(n=Object.keys(t),s=n.length,s!==Object.keys(r).length)return!1;for(a=s;a--!==0;)if(!Object.prototype.hasOwnProperty.call(r,n[a]))return!1;for(a=s;a--!==0;){var o=n[a];if(!e(t[o],r[o]))return!1}return!0}return t!==t&&r!==r}),Gn}var Vn={exports:{}},Al;function n_(){if(Al)return Vn.exports;Al=1;var e=Vn.exports=function(s,a,n){typeof a=="function"&&(n=a,a={}),n=a.cb||n;var o=typeof n=="function"?n:n.pre||function(){},i=n.post||function(){};t(a,o,i,s,"",s)};e.keywords={additionalItems:!0,items:!0,contains:!0,additionalProperties:!0,propertyNames:!0,not:!0,if:!0,then:!0,else:!0},e.arrayKeywords={items:!0,allOf:!0,anyOf:!0,oneOf:!0},e.propsKeywords={$defs:!0,definitions:!0,properties:!0,patternProperties:!0,dependencies:!0},e.skipKeywords={default:!0,enum:!0,const:!0,required:!0,maximum:!0,minimum:!0,exclusiveMaximum:!0,exclusiveMinimum:!0,multipleOf:!0,maxLength:!0,minLength:!0,pattern:!0,format:!0,maxItems:!0,minItems:!0,uniqueItems:!0,maxProperties:!0,minProperties:!0};function t(s,a,n,o,i,l,c,d,u,p){if(o&&typeof o=="object"&&!Array.isArray(o)){a(o,i,l,c,d,u,p);for(var f in o){var _=o[f];if(Array.isArray(_)){if(f in e.arrayKeywords)for(var y=0;y<_.length;y++)t(s,a,n,_[y],i+"/"+f+"/"+y,l,i,f,o,y)}else if(f in e.propsKeywords){if(_&&typeof _=="object")for(var w in _)t(s,a,n,_[w],i+"/"+f+"/"+r(w),l,i,f,o,w)}else(f in e.keywords||s.allKeys&&!(f in e.skipKeywords))&&t(s,a,n,_,i+"/"+f,l,i,f,o)}n(o,i,l,c,d,u,p)}}function r(s){return s.replace(/~/g,"~0").replace(/\//g,"~1")}return Vn.exports}var Ol;function cn(){if(Ol)return He;Ol=1,Object.defineProperty(He,"__esModule",{value:!0}),He.getSchemaRefs=He.resolveUrl=He.normalizeId=He._getFullPath=He.getFullPath=He.inlineRef=void 0;const e=ve(),t=Pu(),r=n_(),s=new Set(["type","format","pattern","maxLength","minLength","maxProperties","minProperties","maxItems","minItems","maximum","minimum","uniqueItems","multipleOf","required","enum","const"]);function a(y,w=!0){return typeof y=="boolean"?!0:w===!0?!o(y):w?i(y)<=w:!1}He.inlineRef=a;const n=new Set(["$ref","$recursiveRef","$recursiveAnchor","$dynamicRef","$dynamicAnchor"]);function o(y){for(const w in y){if(n.has(w))return!0;const m=y[w];if(Array.isArray(m)&&m.some(o)||typeof m=="object"&&o(m))return!0}return!1}function i(y){let w=0;for(const m in y){if(m==="$ref")return 1/0;if(w++,!s.has(m)&&(typeof y[m]=="object"&&(0,e.eachItem)(y[m],h=>w+=i(h)),w===1/0))return 1/0}return w}function l(y,w="",m){m!==!1&&(w=u(w));const h=y.parse(w);return c(y,h)}He.getFullPath=l;function c(y,w){return y.serialize(w).split("#")[0]+"#"}He._getFullPath=c;const d=/#\/?$/;function u(y){return y?y.replace(d,""):""}He.normalizeId=u;function p(y,w,m){return m=u(m),y.resolve(w,m)}He.resolveUrl=p;const f=/^[a-z_][-a-z0-9._]*$/i;function _(y,w){if(typeof y=="boolean")return{};const{schemaId:m,uriResolver:h}=this.opts,g=u(y[m]||w),v={"":g},b=l(h,g,!1),T={},P=new Set;return r(y,{allKeys:!0},(x,C,$,M)=>{if(M===void 0)return;const j=b+C;let Q=v[M];typeof x[m]=="string"&&(Q=se.call(this,x[m])),Y.call(this,x.$anchor),Y.call(this,x.$dynamicAnchor),v[C]=Q;function se(q){const K=this.opts.uriResolver.resolve;if(q=u(Q?K(Q,q):q),P.has(q))throw S(q);P.add(q);let B=this.refs[q];return typeof B=="string"&&(B=this.refs[B]),typeof B=="object"?k(x,B.schema,q):q!==u(j)&&(q[0]==="#"?(k(x,T[q],q),T[q]=x):this.refs[q]=j),q}function Y(q){if(typeof q=="string"){if(!f.test(q))throw new Error(`invalid anchor "${q}"`);se.call(this,`#${q}`)}}}),T;function k(x,C,$){if(C!==void 0&&!t(x,C))throw S($)}function S(x){return new Error(`reference "${x}" resolves to more than one schema`)}}return He.getSchemaRefs=_,He}var Cl;function dn(){if(Cl)return Bt;Cl=1,Object.defineProperty(Bt,"__esModule",{value:!0}),Bt.getData=Bt.KeywordCxt=Bt.validateFunctionCode=void 0;const e=t_(),t=Ua(),r=ku(),s=Ua(),a=r_(),n=s_(),o=a_(),i=ge(),l=gr(),c=cn(),d=ve(),u=ln();function p(D){if(b(D)&&(P(D),v(D))){w(D);return}f(D,()=>(0,e.topBoolOrEmptySchema)(D))}Bt.validateFunctionCode=p;function f({gen:D,validateName:E,schema:O,schemaEnv:N,opts:H},Z){H.code.es5?D.func(E,(0,i._)`${l.default.data}, ${l.default.valCxt}`,N.$async,()=>{D.code((0,i._)`"use strict"; ${h(O,H)}`),y(D,H),D.code(Z)}):D.func(E,(0,i._)`${l.default.data}, ${_(H)}`,N.$async,()=>D.code(h(O,H)).code(Z))}function _(D){return(0,i._)`{${l.default.instancePath}="", ${l.default.parentData}, ${l.default.parentDataProperty}, ${l.default.rootData}=${l.default.data}${D.dynamicRef?(0,i._)`, ${l.default.dynamicAnchors}={}`:i.nil}}={}`}function y(D,E){D.if(l.default.valCxt,()=>{D.var(l.default.instancePath,(0,i._)`${l.default.valCxt}.${l.default.instancePath}`),D.var(l.default.parentData,(0,i._)`${l.default.valCxt}.${l.default.parentData}`),D.var(l.default.parentDataProperty,(0,i._)`${l.default.valCxt}.${l.default.parentDataProperty}`),D.var(l.default.rootData,(0,i._)`${l.default.valCxt}.${l.default.rootData}`),E.dynamicRef&&D.var(l.default.dynamicAnchors,(0,i._)`${l.default.valCxt}.${l.default.dynamicAnchors}`)},()=>{D.var(l.default.instancePath,(0,i._)`""`),D.var(l.default.parentData,(0,i._)`undefined`),D.var(l.default.parentDataProperty,(0,i._)`undefined`),D.var(l.default.rootData,l.default.data),E.dynamicRef&&D.var(l.default.dynamicAnchors,(0,i._)`{}`)})}function w(D){const{schema:E,opts:O,gen:N}=D;f(D,()=>{O.$comment&&E.$comment&&M(D),x(D),N.let(l.default.vErrors,null),N.let(l.default.errors,0),O.unevaluated&&m(D),k(D),j(D)})}function m(D){const{gen:E,validateName:O}=D;D.evaluated=E.const("evaluated",(0,i._)`${O}.evaluated`),E.if((0,i._)`${D.evaluated}.dynamicProps`,()=>E.assign((0,i._)`${D.evaluated}.props`,(0,i._)`undefined`)),E.if((0,i._)`${D.evaluated}.dynamicItems`,()=>E.assign((0,i._)`${D.evaluated}.items`,(0,i._)`undefined`))}function h(D,E){const O=typeof D=="object"&&D[E.schemaId];return O&&(E.code.source||E.code.process)?(0,i._)`/*# sourceURL=${O} */`:i.nil}function g(D,E){if(b(D)&&(P(D),v(D))){T(D,E);return}(0,e.boolOrEmptySchema)(D,E)}function v({schema:D,self:E}){if(typeof D=="boolean")return!D;for(const O in D)if(E.RULES.all[O])return!0;return!1}function b(D){return typeof D.schema!="boolean"}function T(D,E){const{schema:O,gen:N,opts:H}=D;H.$comment&&O.$comment&&M(D),C(D),$(D);const Z=N.const("_errs",l.default.errors);k(D,Z),N.var(E,(0,i._)`${Z} === ${l.default.errors}`)}function P(D){(0,d.checkUnknownRules)(D),S(D)}function k(D,E){if(D.opts.jtd)return se(D,[],!1,E);const O=(0,t.getSchemaTypes)(D.schema),N=(0,t.coerceAndCheckDataType)(D,O);se(D,O,!N,E)}function S(D){const{schema:E,errSchemaPath:O,opts:N,self:H}=D;E.$ref&&N.ignoreKeywordsWithRef&&(0,d.schemaHasRulesButRef)(E,H.RULES)&&H.logger.warn(`$ref: keywords ignored in schema at path "${O}"`)}function x(D){const{schema:E,opts:O}=D;E.default!==void 0&&O.useDefaults&&O.strictSchema&&(0,d.checkStrictMode)(D,"default is ignored in the schema root")}function C(D){const E=D.schema[D.opts.schemaId];E&&(D.baseId=(0,c.resolveUrl)(D.opts.uriResolver,D.baseId,E))}function $(D){if(D.schema.$async&&!D.schemaEnv.$async)throw new Error("async schema in sync schema")}function M({gen:D,schemaEnv:E,schema:O,errSchemaPath:N,opts:H}){const Z=O.$comment;if(H.$comment===!0)D.code((0,i._)`${l.default.self}.logger.log(${Z})`);else if(typeof H.$comment=="function"){const ee=(0,i.str)`${N}/$comment`,le=D.scopeValue("root",{ref:E.root});D.code((0,i._)`${l.default.self}.opts.$comment(${Z}, ${ee}, ${le}.schema)`)}}function j(D){const{gen:E,schemaEnv:O,validateName:N,ValidationError:H,opts:Z}=D;O.$async?E.if((0,i._)`${l.default.errors} === 0`,()=>E.return(l.default.data),()=>E.throw((0,i._)`new ${H}(${l.default.vErrors})`)):(E.assign((0,i._)`${N}.errors`,l.default.vErrors),Z.unevaluated&&Q(D),E.return((0,i._)`${l.default.errors} === 0`))}function Q({gen:D,evaluated:E,props:O,items:N}){O instanceof i.Name&&D.assign((0,i._)`${E}.props`,O),N instanceof i.Name&&D.assign((0,i._)`${E}.items`,N)}function se(D,E,O,N){const{gen:H,schema:Z,data:ee,allErrors:le,opts:ae,self:J}=D,{RULES:W}=J;if(Z.$ref&&(ae.ignoreKeywordsWithRef||!(0,d.schemaHasRulesButRef)(Z,W))){H.block(()=>L(D,"$ref",W.all.$ref.definition));return}ae.jtd||q(D,E),H.block(()=>{for(const ne of W.rules)ie(ne);ie(W.post)});function ie(ne){(0,r.shouldUseGroup)(Z,ne)&&(ne.type?(H.if((0,s.checkDataType)(ne.type,ee,ae.strictNumbers)),Y(D,ne),E.length===1&&E[0]===ne.type&&O&&(H.else(),(0,s.reportTypeError)(D)),H.endIf()):Y(D,ne),le||H.if((0,i._)`${l.default.errors} === ${N||0}`))}}function Y(D,E){const{gen:O,schema:N,opts:{useDefaults:H}}=D;H&&(0,a.assignDefaults)(D,E.type),O.block(()=>{for(const Z of E.rules)(0,r.shouldUseRule)(N,Z)&&L(D,Z.keyword,Z.definition,E.type)})}function q(D,E){D.schemaEnv.meta||!D.opts.strictTypes||(K(D,E),D.opts.allowUnionTypes||B(D,E),I(D,D.dataTypes))}function K(D,E){if(E.length){if(!D.dataTypes.length){D.dataTypes=E;return}E.forEach(O=>{F(D.dataTypes,O)||R(D,`type "${O}" not allowed by context "${D.dataTypes.join(",")}"`)}),A(D,E)}}function B(D,E){E.length>1&&!(E.length===2&&E.includes("null"))&&R(D,"use allowUnionTypes to allow union type keyword")}function I(D,E){const O=D.self.RULES.all;for(const N in O){const H=O[N];if(typeof H=="object"&&(0,r.shouldUseRule)(D.schema,H)){const{type:Z}=H.definition;Z.length&&!Z.some(ee=>U(E,ee))&&R(D,`missing type "${Z.join(",")}" for keyword "${N}"`)}}}function U(D,E){return D.includes(E)||E==="number"&&D.includes("integer")}function F(D,E){return D.includes(E)||E==="integer"&&D.includes("number")}function A(D,E){const O=[];for(const N of D.dataTypes)F(E,N)?O.push(N):E.includes("integer")&&N==="number"&&O.push("integer");D.dataTypes=O}function R(D,E){const O=D.schemaEnv.baseId+D.errSchemaPath;E+=` at "${O}" (strictTypes)`,(0,d.checkStrictMode)(D,E,D.opts.strictTypes)}class V{constructor(E,O,N){if((0,n.validateKeywordUsage)(E,O,N),this.gen=E.gen,this.allErrors=E.allErrors,this.keyword=N,this.data=E.data,this.schema=E.schema[N],this.$data=O.$data&&E.opts.$data&&this.schema&&this.schema.$data,this.schemaValue=(0,d.schemaRefOrVal)(E,this.schema,N,this.$data),this.schemaType=O.schemaType,this.parentSchema=E.schema,this.params={},this.it=E,this.def=O,this.$data)this.schemaCode=E.gen.const("vSchema",te(this.$data,E));else if(this.schemaCode=this.schemaValue,!(0,n.validSchemaType)(this.schema,O.schemaType,O.allowUndefined))throw new Error(`${N} value must be ${JSON.stringify(O.schemaType)}`);("code"in O?O.trackErrors:O.errors!==!1)&&(this.errsCount=E.gen.const("_errs",l.default.errors))}result(E,O,N){this.failResult((0,i.not)(E),O,N)}failResult(E,O,N){this.gen.if(E),N?N():this.error(),O?(this.gen.else(),O(),this.allErrors&&this.gen.endIf()):this.allErrors?this.gen.endIf():this.gen.else()}pass(E,O){this.failResult((0,i.not)(E),void 0,O)}fail(E){if(E===void 0){this.error(),this.allErrors||this.gen.if(!1);return}this.gen.if(E),this.error(),this.allErrors?this.gen.endIf():this.gen.else()}fail$data(E){if(!this.$data)return this.fail(E);const{schemaCode:O}=this;this.fail((0,i._)`${O} !== undefined && (${(0,i.or)(this.invalid$data(),E)})`)}error(E,O,N){if(O){this.setParams(O),this._error(E,N),this.setParams({});return}this._error(E,N)}_error(E,O){(E?u.reportExtraError:u.reportError)(this,this.def.error,O)}$dataError(){(0,u.reportError)(this,this.def.$dataError||u.keyword$DataError)}reset(){if(this.errsCount===void 0)throw new Error('add "trackErrors" to keyword definition');(0,u.resetErrorsCount)(this.gen,this.errsCount)}ok(E){this.allErrors||this.gen.if(E)}setParams(E,O){O?Object.assign(this.params,E):this.params=E}block$data(E,O,N=i.nil){this.gen.block(()=>{this.check$data(E,N),O()})}check$data(E=i.nil,O=i.nil){if(!this.$data)return;const{gen:N,schemaCode:H,schemaType:Z,def:ee}=this;N.if((0,i.or)((0,i._)`${H} === undefined`,O)),E!==i.nil&&N.assign(E,!0),(Z.length||ee.validateSchema)&&(N.elseIf(this.invalid$data()),this.$dataError(),E!==i.nil&&N.assign(E,!1)),N.else()}invalid$data(){const{gen:E,schemaCode:O,schemaType:N,def:H,it:Z}=this;return(0,i.or)(ee(),le());function ee(){if(N.length){if(!(O instanceof i.Name))throw new Error("ajv implementation error");const ae=Array.isArray(N)?N:[N];return(0,i._)`${(0,s.checkDataTypes)(ae,O,Z.opts.strictNumbers,s.DataType.Wrong)}`}return i.nil}function le(){if(H.validateSchema){const ae=E.scopeValue("validate$data",{ref:H.validateSchema});return(0,i._)`!${ae}(${O})`}return i.nil}}subschema(E,O){const N=(0,o.getSubschema)(this.it,E);(0,o.extendSubschemaData)(N,this.it,E),(0,o.extendSubschemaMode)(N,E);const H={...this.it,...N,items:void 0,props:void 0};return g(H,O),H}mergeEvaluated(E,O){const{it:N,gen:H}=this;N.opts.unevaluated&&(N.props!==!0&&E.props!==void 0&&(N.props=d.mergeEvaluated.props(H,E.props,N.props,O)),N.items!==!0&&E.items!==void 0&&(N.items=d.mergeEvaluated.items(H,E.items,N.items,O)))}mergeValidEvaluated(E,O){const{it:N,gen:H}=this;if(N.opts.unevaluated&&(N.props!==!0||N.items!==!0))return H.if(O,()=>this.mergeEvaluated(E,i.Name)),!0}}Bt.KeywordCxt=V;function L(D,E,O,N){const H=new V(D,O,E);"code"in O?O.code(H,N):H.$data&&O.validate?(0,n.funcKeywordCode)(H,O):"macro"in O?(0,n.macroKeywordCode)(H,O):(O.compile||O.validate)&&(0,n.funcKeywordCode)(H,O)}const z=/^\/(?:[^~]|~0|~1)*$/,G=/^([0-9]+)(#|\/(?:[^~]|~0|~1)*)?$/;function te(D,{dataLevel:E,dataNames:O,dataPathArr:N}){let H,Z;if(D==="")return l.default.rootData;if(D[0]==="/"){if(!z.test(D))throw new Error(`Invalid JSON-pointer: ${D}`);H=D,Z=l.default.rootData}else{const J=G.exec(D);if(!J)throw new Error(`Invalid JSON-pointer: ${D}`);const W=+J[1];if(H=J[2],H==="#"){if(W>=E)throw new Error(ae("property/index",W));return N[E-W]}if(W>E)throw new Error(ae("data",W));if(Z=O[E-W],!H)return Z}let ee=Z;const le=H.split("/");for(const J of le)J&&(Z=(0,i._)`${Z}${(0,i.getProperty)((0,d.unescapeJsonPointer)(J))}`,ee=(0,i._)`${ee} && ${Z}`);return ee;function ae(J,W){return`Cannot access ${J} ${W} levels up, current level is ${E}`}}return Bt.getData=te,Bt}var Ds={},$l;function qo(){if($l)return Ds;$l=1,Object.defineProperty(Ds,"__esModule",{value:!0});class e extends Error{constructor(r){super("validation failed"),this.errors=r,this.ajv=this.validation=!0}}return Ds.default=e,Ds}var Bs={},Rl;function un(){if(Rl)return Bs;Rl=1,Object.defineProperty(Bs,"__esModule",{value:!0});const e=cn();class t extends Error{constructor(s,a,n,o){super(o||`can't resolve reference ${n} from id ${a}`),this.missingRef=(0,e.resolveUrl)(s,a,n),this.missingSchema=(0,e.normalizeId)((0,e.getFullPath)(s,this.missingRef))}}return Bs.default=t,Bs}var Ze={},Ml;function Go(){if(Ml)return Ze;Ml=1,Object.defineProperty(Ze,"__esModule",{value:!0}),Ze.resolveSchema=Ze.getCompilingSchema=Ze.resolveRef=Ze.compileSchema=Ze.SchemaEnv=void 0;const e=ge(),t=qo(),r=gr(),s=cn(),a=ve(),n=dn();class o{constructor(m){var h;this.refs={},this.dynamicAnchors={};let g;typeof m.schema=="object"&&(g=m.schema),this.schema=m.schema,this.schemaId=m.schemaId,this.root=m.root||this,this.baseId=(h=m.baseId)!==null&&h!==void 0?h:(0,s.normalizeId)(g?.[m.schemaId||"$id"]),this.schemaPath=m.schemaPath,this.localRefs=m.localRefs,this.meta=m.meta,this.$async=g?.$async,this.refs={}}}Ze.SchemaEnv=o;function i(w){const m=d.call(this,w);if(m)return m;const h=(0,s.getFullPath)(this.opts.uriResolver,w.root.baseId),{es5:g,lines:v}=this.opts.code,{ownProperties:b}=this.opts,T=new e.CodeGen(this.scope,{es5:g,lines:v,ownProperties:b});let P;w.$async&&(P=T.scopeValue("Error",{ref:t.default,code:(0,e._)`require("ajv/dist/runtime/validation_error").default`}));const k=T.scopeName("validate");w.validateName=k;const S={gen:T,allErrors:this.opts.allErrors,data:r.default.data,parentData:r.default.parentData,parentDataProperty:r.default.parentDataProperty,dataNames:[r.default.data],dataPathArr:[e.nil],dataLevel:0,dataTypes:[],definedProperties:new Set,topSchemaRef:T.scopeValue("schema",this.opts.code.source===!0?{ref:w.schema,code:(0,e.stringify)(w.schema)}:{ref:w.schema}),validateName:k,ValidationError:P,schema:w.schema,schemaEnv:w,rootId:h,baseId:w.baseId||h,schemaPath:e.nil,errSchemaPath:w.schemaPath||(this.opts.jtd?"":"#"),errorPath:(0,e._)`""`,opts:this.opts,self:this};let x;try{this._compilations.add(w),(0,n.validateFunctionCode)(S),T.optimize(this.opts.code.optimize);const C=T.toString();x=`${T.scopeRefs(r.default.scope)}return ${C}`,this.opts.code.process&&(x=this.opts.code.process(x,w));const M=new Function(`${r.default.self}`,`${r.default.scope}`,x)(this,this.scope.get());if(this.scope.value(k,{ref:M}),M.errors=null,M.schema=w.schema,M.schemaEnv=w,w.$async&&(M.$async=!0),this.opts.code.source===!0&&(M.source={validateName:k,validateCode:C,scopeValues:T._values}),this.opts.unevaluated){const{props:j,items:Q}=S;M.evaluated={props:j instanceof e.Name?void 0:j,items:Q instanceof e.Name?void 0:Q,dynamicProps:j instanceof e.Name,dynamicItems:Q instanceof e.Name},M.source&&(M.source.evaluated=(0,e.stringify)(M.evaluated))}return w.validate=M,w}catch(C){throw delete w.validate,delete w.validateName,x&&this.logger.error("Error compiling schema, function code:",x),C}finally{this._compilations.delete(w)}}Ze.compileSchema=i;function l(w,m,h){var g;h=(0,s.resolveUrl)(this.opts.uriResolver,m,h);const v=w.refs[h];if(v)return v;let b=p.call(this,w,h);if(b===void 0){const T=(g=w.localRefs)===null||g===void 0?void 0:g[h],{schemaId:P}=this.opts;T&&(b=new o({schema:T,schemaId:P,root:w,baseId:m}))}if(b!==void 0)return w.refs[h]=c.call(this,b)}Ze.resolveRef=l;function c(w){return(0,s.inlineRef)(w.schema,this.opts.inlineRefs)?w.schema:w.validate?w:i.call(this,w)}function d(w){for(const m of this._compilations)if(u(m,w))return m}Ze.getCompilingSchema=d;function u(w,m){return w.schema===m.schema&&w.root===m.root&&w.baseId===m.baseId}function p(w,m){let h;for(;typeof(h=this.refs[m])=="string";)m=h;return h||this.schemas[m]||f.call(this,w,m)}function f(w,m){const h=this.opts.uriResolver.parse(m),g=(0,s._getFullPath)(this.opts.uriResolver,h);let v=(0,s.getFullPath)(this.opts.uriResolver,w.baseId,void 0);if(Object.keys(w.schema).length>0&&g===v)return y.call(this,h,w);const b=(0,s.normalizeId)(g),T=this.refs[b]||this.schemas[b];if(typeof T=="string"){const P=f.call(this,w,T);return typeof P?.schema!="object"?void 0:y.call(this,h,P)}if(typeof T?.schema=="object"){if(T.validate||i.call(this,T),b===(0,s.normalizeId)(m)){const{schema:P}=T,{schemaId:k}=this.opts,S=P[k];return S&&(v=(0,s.resolveUrl)(this.opts.uriResolver,v,S)),new o({schema:P,schemaId:k,root:w,baseId:v})}return y.call(this,h,T)}}Ze.resolveSchema=f;const _=new Set(["properties","patternProperties","enum","dependencies","definitions"]);function y(w,{baseId:m,schema:h,root:g}){var v;if(((v=w.fragment)===null||v===void 0?void 0:v[0])!=="/")return;for(const P of w.fragment.slice(1).split("/")){if(typeof h=="boolean")return;const k=h[(0,a.unescapeFragment)(P)];if(k===void 0)return;h=k;const S=typeof h=="object"&&h[this.opts.schemaId];!_.has(P)&&S&&(m=(0,s.resolveUrl)(this.opts.uriResolver,m,S))}let b;if(typeof h!="boolean"&&h.$ref&&!(0,a.schemaHasRulesButRef)(h,this.RULES)){const P=(0,s.resolveUrl)(this.opts.uriResolver,m,h.$ref);b=f.call(this,g,P)}const{schemaId:T}=this.opts;if(b=b||new o({schema:h,schemaId:T,root:g,baseId:m}),b.schema!==b.root.schema)return b}return Ze}const o_="https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#",i_="Meta-schema for $data reference (JSON AnySchema extension proposal)",l_="object",c_=["$data"],d_={$data:{type:"string",anyOf:[{format:"relative-json-pointer"},{format:"json-pointer"}]}},u_=!1,p_={$id:o_,description:i_,type:l_,required:c_,properties:d_,additionalProperties:u_};var Fs={},es={exports:{}},Kn,Ll;function Au(){if(Ll)return Kn;Ll=1;const e=RegExp.prototype.test.bind(/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iu),t=RegExp.prototype.test.bind(/^(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/u);function r(p){let f="",_=0,y=0;for(y=0;y<p.length;y++)if(_=p[y].charCodeAt(0),_!==48){if(!(_>=48&&_<=57||_>=65&&_<=70||_>=97&&_<=102))return"";f+=p[y];break}for(y+=1;y<p.length;y++){if(_=p[y].charCodeAt(0),!(_>=48&&_<=57||_>=65&&_<=70||_>=97&&_<=102))return"";f+=p[y]}return f}const s=RegExp.prototype.test.bind(/[^!"$&'()*+,\-.;=_`a-z{}~]/u);function a(p){return p.length=0,!0}function n(p,f,_){if(p.length){const y=r(p);if(y!=="")f.push(y);else return _.error=!0,!1;p.length=0}return!0}function o(p){let f=0;const _={error:!1,address:"",zone:""},y=[],w=[];let m=!1,h=!1,g=n;for(let v=0;v<p.length;v++){const b=p[v];if(!(b==="["||b==="]"))if(b===":"){if(m===!0&&(h=!0),!g(w,y,_))break;if(++f>7){_.error=!0;break}v>0&&p[v-1]===":"&&(m=!0),y.push(":");continue}else if(b==="%"){if(!g(w,y,_))break;g=a}else{w.push(b);continue}}return w.length&&(g===a?_.zone=w.join(""):h?y.push(w.join("")):y.push(r(w))),_.address=y.join(""),_}function i(p){if(l(p,":")<2)return{host:p,isIPV6:!1};const f=o(p);if(f.error)return{host:p,isIPV6:!1};{let _=f.address,y=f.address;return f.zone&&(_+="%"+f.zone,y+="%25"+f.zone),{host:_,isIPV6:!0,escapedHost:y}}}function l(p,f){let _=0;for(let y=0;y<p.length;y++)p[y]===f&&_++;return _}function c(p){let f=p;const _=[];let y=-1,w=0;for(;w=f.length;){if(w===1){if(f===".")break;if(f==="/"){_.push("/");break}else{_.push(f);break}}else if(w===2){if(f[0]==="."){if(f[1]===".")break;if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&(f[1]==="."||f[1]==="/")){_.push("/");break}}else if(w===3&&f==="/.."){_.length!==0&&_.pop(),_.push("/");break}if(f[0]==="."){if(f[1]==="."){if(f[2]==="/"){f=f.slice(3);continue}}else if(f[1]==="/"){f=f.slice(2);continue}}else if(f[0]==="/"&&f[1]==="."){if(f[2]==="/"){f=f.slice(2);continue}else if(f[2]==="."&&f[3]==="/"){f=f.slice(3),_.length!==0&&_.pop();continue}}if((y=f.indexOf("/",1))===-1){_.push(f);break}else _.push(f.slice(0,y)),f=f.slice(y)}return _.join("")}function d(p,f){const _=f!==!0?escape:unescape;return p.scheme!==void 0&&(p.scheme=_(p.scheme)),p.userinfo!==void 0&&(p.userinfo=_(p.userinfo)),p.host!==void 0&&(p.host=_(p.host)),p.path!==void 0&&(p.path=_(p.path)),p.query!==void 0&&(p.query=_(p.query)),p.fragment!==void 0&&(p.fragment=_(p.fragment)),p}function u(p){const f=[];if(p.userinfo!==void 0&&(f.push(p.userinfo),f.push("@")),p.host!==void 0){let _=unescape(p.host);if(!t(_)){const y=i(_);y.isIPV6===!0?_=`[${y.escapedHost}]`:_=p.host}f.push(_)}return(typeof p.port=="number"||typeof p.port=="string")&&(f.push(":"),f.push(String(p.port))),f.length?f.join(""):void 0}return Kn={nonSimpleDomain:s,recomposeAuthority:u,normalizeComponentEncoding:d,removeDotSegments:c,isIPv4:t,isUUID:e,normalizeIPv6:i,stringArrayToHexStripped:r},Kn}var Yn,Nl;function f_(){if(Nl)return Yn;Nl=1;const{isUUID:e}=Au(),t=/([\da-z][\d\-a-z]{0,31}):((?:[\w!$'()*+,\-.:;=@]|%[\da-f]{2})+)/iu,r=["http","https","ws","wss","urn","urn:uuid"];function s(b){return r.indexOf(b)!==-1}function a(b){return b.secure===!0?!0:b.secure===!1?!1:b.scheme?b.scheme.length===3&&(b.scheme[0]==="w"||b.scheme[0]==="W")&&(b.scheme[1]==="s"||b.scheme[1]==="S")&&(b.scheme[2]==="s"||b.scheme[2]==="S"):!1}function n(b){return b.host||(b.error=b.error||"HTTP URIs must have a host."),b}function o(b){const T=String(b.scheme).toLowerCase()==="https";return(b.port===(T?443:80)||b.port==="")&&(b.port=void 0),b.path||(b.path="/"),b}function i(b){return b.secure=a(b),b.resourceName=(b.path||"/")+(b.query?"?"+b.query:""),b.path=void 0,b.query=void 0,b}function l(b){if((b.port===(a(b)?443:80)||b.port==="")&&(b.port=void 0),typeof b.secure=="boolean"&&(b.scheme=b.secure?"wss":"ws",b.secure=void 0),b.resourceName){const[T,P]=b.resourceName.split("?");b.path=T&&T!=="/"?T:void 0,b.query=P,b.resourceName=void 0}return b.fragment=void 0,b}function c(b,T){if(!b.path)return b.error="URN can not be parsed",b;const P=b.path.match(t);if(P){const k=T.scheme||b.scheme||"urn";b.nid=P[1].toLowerCase(),b.nss=P[2];const S=`${k}:${T.nid||b.nid}`,x=v(S);b.path=void 0,x&&(b=x.parse(b,T))}else b.error=b.error||"URN can not be parsed.";return b}function d(b,T){if(b.nid===void 0)throw new Error("URN without nid cannot be serialized");const P=T.scheme||b.scheme||"urn",k=b.nid.toLowerCase(),S=`${P}:${T.nid||k}`,x=v(S);x&&(b=x.serialize(b,T));const C=b,$=b.nss;return C.path=`${k||T.nid}:${$}`,T.skipEscape=!0,C}function u(b,T){const P=b;return P.uuid=P.nss,P.nss=void 0,!T.tolerant&&(!P.uuid||!e(P.uuid))&&(P.error=P.error||"UUID is not valid."),P}function p(b){const T=b;return T.nss=(b.uuid||"").toLowerCase(),T}const f={scheme:"http",domainHost:!0,parse:n,serialize:o},_={scheme:"https",domainHost:f.domainHost,parse:n,serialize:o},y={scheme:"ws",domainHost:!0,parse:i,serialize:l},w={scheme:"wss",domainHost:y.domainHost,parse:y.parse,serialize:y.serialize},g={http:f,https:_,ws:y,wss:w,urn:{scheme:"urn",parse:c,serialize:d,skipNormalize:!0},"urn:uuid":{scheme:"urn:uuid",parse:u,serialize:p,skipNormalize:!0}};Object.setPrototypeOf(g,null);function v(b){return b&&(g[b]||g[b.toLowerCase()])||void 0}return Yn={wsIsSecure:a,SCHEMES:g,isValidSchemeName:s,getSchemeHandler:v},Yn}var Il;function h_(){if(Il)return es.exports;Il=1;const{normalizeIPv6:e,removeDotSegments:t,recomposeAuthority:r,normalizeComponentEncoding:s,isIPv4:a,nonSimpleDomain:n}=Au(),{SCHEMES:o,getSchemeHandler:i}=f_();function l(w,m){return typeof w=="string"?w=p(_(w,m),m):typeof w=="object"&&(w=_(p(w,m),m)),w}function c(w,m,h){const g=h?Object.assign({scheme:"null"},h):{scheme:"null"},v=d(_(w,g),_(m,g),g,!0);return g.skipEscape=!0,p(v,g)}function d(w,m,h,g){const v={};return g||(w=_(p(w,h),h),m=_(p(m,h),h)),h=h||{},!h.tolerant&&m.scheme?(v.scheme=m.scheme,v.userinfo=m.userinfo,v.host=m.host,v.port=m.port,v.path=t(m.path||""),v.query=m.query):(m.userinfo!==void 0||m.host!==void 0||m.port!==void 0?(v.userinfo=m.userinfo,v.host=m.host,v.port=m.port,v.path=t(m.path||""),v.query=m.query):(m.path?(m.path[0]==="/"?v.path=t(m.path):((w.userinfo!==void 0||w.host!==void 0||w.port!==void 0)&&!w.path?v.path="/"+m.path:w.path?v.path=w.path.slice(0,w.path.lastIndexOf("/")+1)+m.path:v.path=m.path,v.path=t(v.path)),v.query=m.query):(v.path=w.path,m.query!==void 0?v.query=m.query:v.query=w.query),v.userinfo=w.userinfo,v.host=w.host,v.port=w.port),v.scheme=w.scheme),v.fragment=m.fragment,v}function u(w,m,h){return typeof w=="string"?(w=unescape(w),w=p(s(_(w,h),!0),{...h,skipEscape:!0})):typeof w=="object"&&(w=p(s(w,!0),{...h,skipEscape:!0})),typeof m=="string"?(m=unescape(m),m=p(s(_(m,h),!0),{...h,skipEscape:!0})):typeof m=="object"&&(m=p(s(m,!0),{...h,skipEscape:!0})),w.toLowerCase()===m.toLowerCase()}function p(w,m){const h={host:w.host,scheme:w.scheme,userinfo:w.userinfo,port:w.port,path:w.path,query:w.query,nid:w.nid,nss:w.nss,uuid:w.uuid,fragment:w.fragment,reference:w.reference,resourceName:w.resourceName,secure:w.secure,error:""},g=Object.assign({},m),v=[],b=i(g.scheme||h.scheme);b&&b.serialize&&b.serialize(h,g),h.path!==void 0&&(g.skipEscape?h.path=unescape(h.path):(h.path=escape(h.path),h.scheme!==void 0&&(h.path=h.path.split("%3A").join(":")))),g.reference!=="suffix"&&h.scheme&&v.push(h.scheme,":");const T=r(h);if(T!==void 0&&(g.reference!=="suffix"&&v.push("//"),v.push(T),h.path&&h.path[0]!=="/"&&v.push("/")),h.path!==void 0){let P=h.path;!g.absolutePath&&(!b||!b.absolutePath)&&(P=t(P)),T===void 0&&P[0]==="/"&&P[1]==="/"&&(P="/%2F"+P.slice(2)),v.push(P)}return h.query!==void 0&&v.push("?",h.query),h.fragment!==void 0&&v.push("#",h.fragment),v.join("")}const f=/^(?:([^#/:?]+):)?(?:\/\/((?:([^#/?@]*)@)?(\[[^#/?\]]+\]|[^#/:?]*)(?::(\d*))?))?([^#?]*)(?:\?([^#]*))?(?:#((?:.|[\n\r])*))?/u;function _(w,m){const h=Object.assign({},m),g={scheme:void 0,userinfo:void 0,host:"",port:void 0,path:"",query:void 0,fragment:void 0};let v=!1;h.reference==="suffix"&&(h.scheme?w=h.scheme+":"+w:w="//"+w);const b=w.match(f);if(b){if(g.scheme=b[1],g.userinfo=b[3],g.host=b[4],g.port=parseInt(b[5],10),g.path=b[6]||"",g.query=b[7],g.fragment=b[8],isNaN(g.port)&&(g.port=b[5]),g.host)if(a(g.host)===!1){const k=e(g.host);g.host=k.host.toLowerCase(),v=k.isIPV6}else v=!0;g.scheme===void 0&&g.userinfo===void 0&&g.host===void 0&&g.port===void 0&&g.query===void 0&&!g.path?g.reference="same-document":g.scheme===void 0?g.reference="relative":g.fragment===void 0?g.reference="absolute":g.reference="uri",h.reference&&h.reference!=="suffix"&&h.reference!==g.reference&&(g.error=g.error||"URI is not a "+h.reference+" reference.");const T=i(h.scheme||g.scheme);if(!h.unicodeSupport&&(!T||!T.unicodeSupport)&&g.host&&(h.domainHost||T&&T.domainHost)&&v===!1&&n(g.host))try{g.host=URL.domainToASCII(g.host.toLowerCase())}catch(P){g.error=g.error||"Host's domain name can not be converted to ASCII: "+P}(!T||T&&!T.skipNormalize)&&(w.indexOf("%")!==-1&&(g.scheme!==void 0&&(g.scheme=unescape(g.scheme)),g.host!==void 0&&(g.host=unescape(g.host))),g.path&&(g.path=escape(unescape(g.path))),g.fragment&&(g.fragment=encodeURI(decodeURIComponent(g.fragment)))),T&&T.parse&&T.parse(g,h)}else g.error=g.error||"URI can not be parsed.";return g}const y={SCHEMES:o,normalize:l,resolve:c,resolveComponent:d,equal:u,serialize:p,parse:_};return es.exports=y,es.exports.default=y,es.exports.fastUri=y,es.exports}var Dl;function m_(){if(Dl)return Fs;Dl=1,Object.defineProperty(Fs,"__esModule",{value:!0});const e=h_();return e.code='require("ajv/dist/runtime/uri").default',Fs.default=e,Fs}var Bl;function g_(){return Bl||(Bl=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CodeGen=e.Name=e.nil=e.stringify=e.str=e._=e.KeywordCxt=void 0;var t=dn();Object.defineProperty(e,"KeywordCxt",{enumerable:!0,get:function(){return t.KeywordCxt}});var r=ge();Object.defineProperty(e,"_",{enumerable:!0,get:function(){return r._}}),Object.defineProperty(e,"str",{enumerable:!0,get:function(){return r.str}}),Object.defineProperty(e,"stringify",{enumerable:!0,get:function(){return r.stringify}}),Object.defineProperty(e,"nil",{enumerable:!0,get:function(){return r.nil}}),Object.defineProperty(e,"Name",{enumerable:!0,get:function(){return r.Name}}),Object.defineProperty(e,"CodeGen",{enumerable:!0,get:function(){return r.CodeGen}});const s=qo(),a=un(),n=Eu(),o=Go(),i=ge(),l=cn(),c=Ua(),d=ve(),u=p_,p=m_(),f=(B,I)=>new RegExp(B,I);f.code="new RegExp";const _=["removeAdditional","useDefaults","coerceTypes"],y=new Set(["validate","serialize","parse","wrapper","root","schema","keyword","pattern","formats","validate$data","func","obj","Error"]),w={errorDataPath:"",format:"`validateFormats: false` can be used instead.",nullable:'"nullable" keyword is supported by default.',jsonPointers:"Deprecated jsPropertySyntax can be used instead.",extendRefs:"Deprecated ignoreKeywordsWithRef can be used instead.",missingRefs:"Pass empty schema with $id that should be ignored to ajv.addSchema.",processCode:"Use option `code: {process: (code, schemaEnv: object) => string}`",sourceCode:"Use option `code: {source: true}`",strictDefaults:"It is default now, see option `strict`.",strictKeywords:"It is default now, see option `strict`.",uniqueItems:'"uniqueItems" keyword is always validated.',unknownFormats:"Disable strict mode or pass `true` to `ajv.addFormat` (or `formats` option).",cache:"Map is used as cache, schema object as key.",serialize:"Map is used as cache, schema object as key.",ajvErrors:"It is default now."},m={ignoreKeywordsWithRef:"",jsPropertySyntax:"",unicode:'"minLength"/"maxLength" account for unicode characters by default.'},h=200;function g(B){var I,U,F,A,R,V,L,z,G,te,D,E,O,N,H,Z,ee,le,ae,J,W,ie,ne,ce,ue;const pe=B.strict,be=(I=B.code)===null||I===void 0?void 0:I.optimize,ye=be===!0||be===void 0?1:be||0,Me=(F=(U=B.code)===null||U===void 0?void 0:U.regExp)!==null&&F!==void 0?F:f,Be=(A=B.uriResolver)!==null&&A!==void 0?A:p.default;return{strictSchema:(V=(R=B.strictSchema)!==null&&R!==void 0?R:pe)!==null&&V!==void 0?V:!0,strictNumbers:(z=(L=B.strictNumbers)!==null&&L!==void 0?L:pe)!==null&&z!==void 0?z:!0,strictTypes:(te=(G=B.strictTypes)!==null&&G!==void 0?G:pe)!==null&&te!==void 0?te:"log",strictTuples:(E=(D=B.strictTuples)!==null&&D!==void 0?D:pe)!==null&&E!==void 0?E:"log",strictRequired:(N=(O=B.strictRequired)!==null&&O!==void 0?O:pe)!==null&&N!==void 0?N:!1,code:B.code?{...B.code,optimize:ye,regExp:Me}:{optimize:ye,regExp:Me},loopRequired:(H=B.loopRequired)!==null&&H!==void 0?H:h,loopEnum:(Z=B.loopEnum)!==null&&Z!==void 0?Z:h,meta:(ee=B.meta)!==null&&ee!==void 0?ee:!0,messages:(le=B.messages)!==null&&le!==void 0?le:!0,inlineRefs:(ae=B.inlineRefs)!==null&&ae!==void 0?ae:!0,schemaId:(J=B.schemaId)!==null&&J!==void 0?J:"$id",addUsedSchema:(W=B.addUsedSchema)!==null&&W!==void 0?W:!0,validateSchema:(ie=B.validateSchema)!==null&&ie!==void 0?ie:!0,validateFormats:(ne=B.validateFormats)!==null&&ne!==void 0?ne:!0,unicodeRegExp:(ce=B.unicodeRegExp)!==null&&ce!==void 0?ce:!0,int32range:(ue=B.int32range)!==null&&ue!==void 0?ue:!0,uriResolver:Be}}class v{constructor(I={}){this.schemas={},this.refs={},this.formats={},this._compilations=new Set,this._loading={},this._cache=new Map,I=this.opts={...I,...g(I)};const{es5:U,lines:F}=this.opts.code;this.scope=new i.ValueScope({scope:{},prefixes:y,es5:U,lines:F}),this.logger=$(I.logger);const A=I.validateFormats;I.validateFormats=!1,this.RULES=(0,n.getRules)(),b.call(this,w,I,"NOT SUPPORTED"),b.call(this,m,I,"DEPRECATED","warn"),this._metaOpts=x.call(this),I.formats&&k.call(this),this._addVocabularies(),this._addDefaultMetaSchema(),I.keywords&&S.call(this,I.keywords),typeof I.meta=="object"&&this.addMetaSchema(I.meta),P.call(this),I.validateFormats=A}_addVocabularies(){this.addKeyword("$async")}_addDefaultMetaSchema(){const{$data:I,meta:U,schemaId:F}=this.opts;let A=u;F==="id"&&(A={...u},A.id=A.$id,delete A.$id),U&&I&&this.addMetaSchema(A,A[F],!1)}defaultMeta(){const{meta:I,schemaId:U}=this.opts;return this.opts.defaultMeta=typeof I=="object"?I[U]||I:void 0}validate(I,U){let F;if(typeof I=="string"){if(F=this.getSchema(I),!F)throw new Error(`no schema with key or ref "${I}"`)}else F=this.compile(I);const A=F(U);return"$async"in F||(this.errors=F.errors),A}compile(I,U){const F=this._addSchema(I,U);return F.validate||this._compileSchemaEnv(F)}compileAsync(I,U){if(typeof this.opts.loadSchema!="function")throw new Error("options.loadSchema should be a function");const{loadSchema:F}=this.opts;return A.call(this,I,U);async function A(te,D){await R.call(this,te.$schema);const E=this._addSchema(te,D);return E.validate||V.call(this,E)}async function R(te){te&&!this.getSchema(te)&&await A.call(this,{$ref:te},!0)}async function V(te){try{return this._compileSchemaEnv(te)}catch(D){if(!(D instanceof a.default))throw D;return L.call(this,D),await z.call(this,D.missingSchema),V.call(this,te)}}function L({missingSchema:te,missingRef:D}){if(this.refs[te])throw new Error(`AnySchema ${te} is loaded but ${D} cannot be resolved`)}async function z(te){const D=await G.call(this,te);this.refs[te]||await R.call(this,D.$schema),this.refs[te]||this.addSchema(D,te,U)}async function G(te){const D=this._loading[te];if(D)return D;try{return await(this._loading[te]=F(te))}finally{delete this._loading[te]}}}addSchema(I,U,F,A=this.opts.validateSchema){if(Array.isArray(I)){for(const V of I)this.addSchema(V,void 0,F,A);return this}let R;if(typeof I=="object"){const{schemaId:V}=this.opts;if(R=I[V],R!==void 0&&typeof R!="string")throw new Error(`schema ${V} must be string`)}return U=(0,l.normalizeId)(U||R),this._checkUnique(U),this.schemas[U]=this._addSchema(I,F,U,A,!0),this}addMetaSchema(I,U,F=this.opts.validateSchema){return this.addSchema(I,U,!0,F),this}validateSchema(I,U){if(typeof I=="boolean")return!0;let F;if(F=I.$schema,F!==void 0&&typeof F!="string")throw new Error("$schema must be a string");if(F=F||this.opts.defaultMeta||this.defaultMeta(),!F)return this.logger.warn("meta-schema not available"),this.errors=null,!0;const A=this.validate(F,I);if(!A&&U){const R="schema is invalid: "+this.errorsText();if(this.opts.validateSchema==="log")this.logger.error(R);else throw new Error(R)}return A}getSchema(I){let U;for(;typeof(U=T.call(this,I))=="string";)I=U;if(U===void 0){const{schemaId:F}=this.opts,A=new o.SchemaEnv({schema:{},schemaId:F});if(U=o.resolveSchema.call(this,A,I),!U)return;this.refs[I]=U}return U.validate||this._compileSchemaEnv(U)}removeSchema(I){if(I instanceof RegExp)return this._removeAllSchemas(this.schemas,I),this._removeAllSchemas(this.refs,I),this;switch(typeof I){case"undefined":return this._removeAllSchemas(this.schemas),this._removeAllSchemas(this.refs),this._cache.clear(),this;case"string":{const U=T.call(this,I);return typeof U=="object"&&this._cache.delete(U.schema),delete this.schemas[I],delete this.refs[I],this}case"object":{const U=I;this._cache.delete(U);let F=I[this.opts.schemaId];return F&&(F=(0,l.normalizeId)(F),delete this.schemas[F],delete this.refs[F]),this}default:throw new Error("ajv.removeSchema: invalid parameter")}}addVocabulary(I){for(const U of I)this.addKeyword(U);return this}addKeyword(I,U){let F;if(typeof I=="string")F=I,typeof U=="object"&&(this.logger.warn("these parameters are deprecated, see docs for addKeyword"),U.keyword=F);else if(typeof I=="object"&&U===void 0){if(U=I,F=U.keyword,Array.isArray(F)&&!F.length)throw new Error("addKeywords: keyword must be string or non-empty array")}else throw new Error("invalid addKeywords parameters");if(j.call(this,F,U),!U)return(0,d.eachItem)(F,R=>Q.call(this,R)),this;Y.call(this,U);const A={...U,type:(0,c.getJSONTypes)(U.type),schemaType:(0,c.getJSONTypes)(U.schemaType)};return(0,d.eachItem)(F,A.type.length===0?R=>Q.call(this,R,A):R=>A.type.forEach(V=>Q.call(this,R,A,V))),this}getKeyword(I){const U=this.RULES.all[I];return typeof U=="object"?U.definition:!!U}removeKeyword(I){const{RULES:U}=this;delete U.keywords[I],delete U.all[I];for(const F of U.rules){const A=F.rules.findIndex(R=>R.keyword===I);A>=0&&F.rules.splice(A,1)}return this}addFormat(I,U){return typeof U=="string"&&(U=new RegExp(U)),this.formats[I]=U,this}errorsText(I=this.errors,{separator:U=", ",dataVar:F="data"}={}){return!I||I.length===0?"No errors":I.map(A=>`${F}${A.instancePath} ${A.message}`).reduce((A,R)=>A+U+R)}$dataMetaSchema(I,U){const F=this.RULES.all;I=JSON.parse(JSON.stringify(I));for(const A of U){const R=A.split("/").slice(1);let V=I;for(const L of R)V=V[L];for(const L in F){const z=F[L];if(typeof z!="object")continue;const{$data:G}=z.definition,te=V[L];G&&te&&(V[L]=K(te))}}return I}_removeAllSchemas(I,U){for(const F in I){const A=I[F];(!U||U.test(F))&&(typeof A=="string"?delete I[F]:A&&!A.meta&&(this._cache.delete(A.schema),delete I[F]))}}_addSchema(I,U,F,A=this.opts.validateSchema,R=this.opts.addUsedSchema){let V;const{schemaId:L}=this.opts;if(typeof I=="object")V=I[L];else{if(this.opts.jtd)throw new Error("schema must be object");if(typeof I!="boolean")throw new Error("schema must be object or boolean")}let z=this._cache.get(I);if(z!==void 0)return z;F=(0,l.normalizeId)(V||F);const G=l.getSchemaRefs.call(this,I,F);return z=new o.SchemaEnv({schema:I,schemaId:L,meta:U,baseId:F,localRefs:G}),this._cache.set(z.schema,z),R&&!F.startsWith("#")&&(F&&this._checkUnique(F),this.refs[F]=z),A&&this.validateSchema(I,!0),z}_checkUnique(I){if(this.schemas[I]||this.refs[I])throw new Error(`schema with key or id "${I}" already exists`)}_compileSchemaEnv(I){if(I.meta?this._compileMetaSchema(I):o.compileSchema.call(this,I),!I.validate)throw new Error("ajv implementation error");return I.validate}_compileMetaSchema(I){const U=this.opts;this.opts=this._metaOpts;try{o.compileSchema.call(this,I)}finally{this.opts=U}}}v.ValidationError=s.default,v.MissingRefError=a.default,e.default=v;function b(B,I,U,F="error"){for(const A in B){const R=A;R in I&&this.logger[F](`${U}: option ${A}. ${B[R]}`)}}function T(B){return B=(0,l.normalizeId)(B),this.schemas[B]||this.refs[B]}function P(){const B=this.opts.schemas;if(B)if(Array.isArray(B))this.addSchema(B);else for(const I in B)this.addSchema(B[I],I)}function k(){for(const B in this.opts.formats){const I=this.opts.formats[B];I&&this.addFormat(B,I)}}function S(B){if(Array.isArray(B)){this.addVocabulary(B);return}this.logger.warn("keywords option as map is deprecated, pass array");for(const I in B){const U=B[I];U.keyword||(U.keyword=I),this.addKeyword(U)}}function x(){const B={...this.opts};for(const I of _)delete B[I];return B}const C={log(){},warn(){},error(){}};function $(B){if(B===!1)return C;if(B===void 0)return console;if(B.log&&B.warn&&B.error)return B;throw new Error("logger must implement log, warn and error methods")}const M=/^[a-z_$][a-z0-9_$:-]*$/i;function j(B,I){const{RULES:U}=this;if((0,d.eachItem)(B,F=>{if(U.keywords[F])throw new Error(`Keyword ${F} is already defined`);if(!M.test(F))throw new Error(`Keyword ${F} has invalid name`)}),!!I&&I.$data&&!("code"in I||"validate"in I))throw new Error('$data keyword must have "code" or "validate" function')}function Q(B,I,U){var F;const A=I?.post;if(U&&A)throw new Error('keyword with "post" flag cannot have "type"');const{RULES:R}=this;let V=A?R.post:R.rules.find(({type:z})=>z===U);if(V||(V={type:U,rules:[]},R.rules.push(V)),R.keywords[B]=!0,!I)return;const L={keyword:B,definition:{...I,type:(0,c.getJSONTypes)(I.type),schemaType:(0,c.getJSONTypes)(I.schemaType)}};I.before?se.call(this,V,L,I.before):V.rules.push(L),R.all[B]=L,(F=I.implements)===null||F===void 0||F.forEach(z=>this.addKeyword(z))}function se(B,I,U){const F=B.rules.findIndex(A=>A.keyword===U);F>=0?B.rules.splice(F,0,I):(B.rules.push(I),this.logger.warn(`rule ${U} is not defined`))}function Y(B){let{metaSchema:I}=B;I!==void 0&&(B.$data&&this.opts.$data&&(I=K(I)),B.validateSchema=this.compile(I,!0))}const q={$ref:"https://raw.githubusercontent.com/ajv-validator/ajv/master/lib/refs/data.json#"};function K(B){return{anyOf:[B,q]}}})(zn)),zn}var zs={},js={},Us={},Fl;function b_(){if(Fl)return Us;Fl=1,Object.defineProperty(Us,"__esModule",{value:!0});const e={keyword:"id",code(){throw new Error('NOT SUPPORTED: keyword "id", use "$id" for schema ID')}};return Us.default=e,Us}var tr={},zl;function y_(){if(zl)return tr;zl=1,Object.defineProperty(tr,"__esModule",{value:!0}),tr.callRef=tr.getValidate=void 0;const e=un(),t=vt(),r=ge(),s=gr(),a=Go(),n=ve(),o={keyword:"$ref",schemaType:"string",code(c){const{gen:d,schema:u,it:p}=c,{baseId:f,schemaEnv:_,validateName:y,opts:w,self:m}=p,{root:h}=_;if((u==="#"||u==="#/")&&f===h.baseId)return v();const g=a.resolveRef.call(m,h,f,u);if(g===void 0)throw new e.default(p.opts.uriResolver,f,u);if(g instanceof a.SchemaEnv)return b(g);return T(g);function v(){if(_===h)return l(c,y,_,_.$async);const P=d.scopeValue("root",{ref:h});return l(c,(0,r._)`${P}.validate`,h,h.$async)}function b(P){const k=i(c,P);l(c,k,P,P.$async)}function T(P){const k=d.scopeValue("schema",w.code.source===!0?{ref:P,code:(0,r.stringify)(P)}:{ref:P}),S=d.name("valid"),x=c.subschema({schema:P,dataTypes:[],schemaPath:r.nil,topSchemaRef:k,errSchemaPath:u},S);c.mergeEvaluated(x),c.ok(S)}}};function i(c,d){const{gen:u}=c;return d.validate?u.scopeValue("validate",{ref:d.validate}):(0,r._)`${u.scopeValue("wrapper",{ref:d})}.validate`}tr.getValidate=i;function l(c,d,u,p){const{gen:f,it:_}=c,{allErrors:y,schemaEnv:w,opts:m}=_,h=m.passContext?s.default.this:r.nil;p?g():v();function g(){if(!w.$async)throw new Error("async schema referenced by sync schema");const P=f.let("valid");f.try(()=>{f.code((0,r._)`await ${(0,t.callValidateCode)(c,d,h)}`),T(d),y||f.assign(P,!0)},k=>{f.if((0,r._)`!(${k} instanceof ${_.ValidationError})`,()=>f.throw(k)),b(k),y||f.assign(P,!1)}),c.ok(P)}function v(){c.result((0,t.callValidateCode)(c,d,h),()=>T(d),()=>b(d))}function b(P){const k=(0,r._)`${P}.errors`;f.assign(s.default.vErrors,(0,r._)`${s.default.vErrors} === null ? ${k} : ${s.default.vErrors}.concat(${k})`),f.assign(s.default.errors,(0,r._)`${s.default.vErrors}.length`)}function T(P){var k;if(!_.opts.unevaluated)return;const S=(k=u?.validate)===null||k===void 0?void 0:k.evaluated;if(_.props!==!0)if(S&&!S.dynamicProps)S.props!==void 0&&(_.props=n.mergeEvaluated.props(f,S.props,_.props));else{const x=f.var("props",(0,r._)`${P}.evaluated.props`);_.props=n.mergeEvaluated.props(f,x,_.props,r.Name)}if(_.items!==!0)if(S&&!S.dynamicItems)S.items!==void 0&&(_.items=n.mergeEvaluated.items(f,S.items,_.items));else{const x=f.var("items",(0,r._)`${P}.evaluated.items`);_.items=n.mergeEvaluated.items(f,x,_.items,r.Name)}}}return tr.callRef=l,tr.default=o,tr}var jl;function __(){if(jl)return js;jl=1,Object.defineProperty(js,"__esModule",{value:!0});const e=b_(),t=y_(),r=["$schema","$id","$defs","$vocabulary",{keyword:"$comment"},"definitions",e.default,t.default];return js.default=r,js}var Hs={},qs={},Ul;function v_(){if(Ul)return qs;Ul=1,Object.defineProperty(qs,"__esModule",{value:!0});const e=ge(),t=e.operators,r={maximum:{okStr:"<=",ok:t.LTE,fail:t.GT},minimum:{okStr:">=",ok:t.GTE,fail:t.LT},exclusiveMaximum:{okStr:"<",ok:t.LT,fail:t.GTE},exclusiveMinimum:{okStr:">",ok:t.GT,fail:t.LTE}},s={message:({keyword:n,schemaCode:o})=>(0,e.str)`must be ${r[n].okStr} ${o}`,params:({keyword:n,schemaCode:o})=>(0,e._)`{comparison: ${r[n].okStr}, limit: ${o}}`},a={keyword:Object.keys(r),type:"number",schemaType:"number",$data:!0,error:s,code(n){const{keyword:o,data:i,schemaCode:l}=n;n.fail$data((0,e._)`${i} ${r[o].fail} ${l} || isNaN(${i})`)}};return qs.default=a,qs}var Gs={},Hl;function w_(){if(Hl)return Gs;Hl=1,Object.defineProperty(Gs,"__esModule",{value:!0});const e=ge(),r={keyword:"multipleOf",type:"number",schemaType:"number",$data:!0,error:{message:({schemaCode:s})=>(0,e.str)`must be multiple of ${s}`,params:({schemaCode:s})=>(0,e._)`{multipleOf: ${s}}`},code(s){const{gen:a,data:n,schemaCode:o,it:i}=s,l=i.opts.multipleOfPrecision,c=a.let("res"),d=l?(0,e._)`Math.abs(Math.round(${c}) - ${c}) > 1e-${l}`:(0,e._)`${c} !== parseInt(${c})`;s.fail$data((0,e._)`(${o} === 0 || (${c} = ${n}/${o}, ${d}))`)}};return Gs.default=r,Gs}var Vs={},Ks={},ql;function T_(){if(ql)return Ks;ql=1,Object.defineProperty(Ks,"__esModule",{value:!0});function e(t){const r=t.length;let s=0,a=0,n;for(;a<r;)s++,n=t.charCodeAt(a++),n>=55296&&n<=56319&&a<r&&(n=t.charCodeAt(a),(n&64512)===56320&&a++);return s}return Ks.default=e,e.code='require("ajv/dist/runtime/ucs2length").default',Ks}var Gl;function S_(){if(Gl)return Vs;Gl=1,Object.defineProperty(Vs,"__esModule",{value:!0});const e=ge(),t=ve(),r=T_(),a={keyword:["maxLength","minLength"],type:"string",schemaType:"number",$data:!0,error:{message({keyword:n,schemaCode:o}){const i=n==="maxLength"?"more":"fewer";return(0,e.str)`must NOT have ${i} than ${o} characters`},params:({schemaCode:n})=>(0,e._)`{limit: ${n}}`},code(n){const{keyword:o,data:i,schemaCode:l,it:c}=n,d=o==="maxLength"?e.operators.GT:e.operators.LT,u=c.opts.unicode===!1?(0,e._)`${i}.length`:(0,e._)`${(0,t.useFunc)(n.gen,r.default)}(${i})`;n.fail$data((0,e._)`${u} ${d} ${l}`)}};return Vs.default=a,Vs}var Ys={},Vl;function x_(){if(Vl)return Ys;Vl=1,Object.defineProperty(Ys,"__esModule",{value:!0});const e=vt(),t=ve(),r=ge(),a={keyword:"pattern",type:"string",schemaType:"string",$data:!0,error:{message:({schemaCode:n})=>(0,r.str)`must match pattern "${n}"`,params:({schemaCode:n})=>(0,r._)`{pattern: ${n}}`},code(n){const{gen:o,data:i,$data:l,schema:c,schemaCode:d,it:u}=n,p=u.opts.unicodeRegExp?"u":"";if(l){const{regExp:f}=u.opts.code,_=f.code==="new RegExp"?(0,r._)`new RegExp`:(0,t.useFunc)(o,f),y=o.let("valid");o.try(()=>o.assign(y,(0,r._)`${_}(${d}, ${p}).test(${i})`),()=>o.assign(y,!1)),n.fail$data((0,r._)`!${y}`)}else{const f=(0,e.usePattern)(n,c);n.fail$data((0,r._)`!${f}.test(${i})`)}}};return Ys.default=a,Ys}var Ws={},Kl;function E_(){if(Kl)return Ws;Kl=1,Object.defineProperty(Ws,"__esModule",{value:!0});const e=ge(),r={keyword:["maxProperties","minProperties"],type:"object",schemaType:"number",$data:!0,error:{message({keyword:s,schemaCode:a}){const n=s==="maxProperties"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${a} properties`},params:({schemaCode:s})=>(0,e._)`{limit: ${s}}`},code(s){const{keyword:a,data:n,schemaCode:o}=s,i=a==="maxProperties"?e.operators.GT:e.operators.LT;s.fail$data((0,e._)`Object.keys(${n}).length ${i} ${o}`)}};return Ws.default=r,Ws}var Js={},Yl;function k_(){if(Yl)return Js;Yl=1,Object.defineProperty(Js,"__esModule",{value:!0});const e=vt(),t=ge(),r=ve(),a={keyword:"required",type:"object",schemaType:"array",$data:!0,error:{message:({params:{missingProperty:n}})=>(0,t.str)`must have required property '${n}'`,params:({params:{missingProperty:n}})=>(0,t._)`{missingProperty: ${n}}`},code(n){const{gen:o,schema:i,schemaCode:l,data:c,$data:d,it:u}=n,{opts:p}=u;if(!d&&i.length===0)return;const f=i.length>=p.loopRequired;if(u.allErrors?_():y(),p.strictRequired){const h=n.parentSchema.properties,{definedProperties:g}=n.it;for(const v of i)if(h?.[v]===void 0&&!g.has(v)){const b=u.schemaEnv.baseId+u.errSchemaPath,T=`required property "${v}" is not defined at "${b}" (strictRequired)`;(0,r.checkStrictMode)(u,T,u.opts.strictRequired)}}function _(){if(f||d)n.block$data(t.nil,w);else for(const h of i)(0,e.checkReportMissingProp)(n,h)}function y(){const h=o.let("missing");if(f||d){const g=o.let("valid",!0);n.block$data(g,()=>m(h,g)),n.ok(g)}else o.if((0,e.checkMissingProp)(n,i,h)),(0,e.reportMissingProp)(n,h),o.else()}function w(){o.forOf("prop",l,h=>{n.setParams({missingProperty:h}),o.if((0,e.noPropertyInData)(o,c,h,p.ownProperties),()=>n.error())})}function m(h,g){n.setParams({missingProperty:h}),o.forOf(h,l,()=>{o.assign(g,(0,e.propertyInData)(o,c,h,p.ownProperties)),o.if((0,t.not)(g),()=>{n.error(),o.break()})},t.nil)}}};return Js.default=a,Js}var Xs={},Wl;function P_(){if(Wl)return Xs;Wl=1,Object.defineProperty(Xs,"__esModule",{value:!0});const e=ge(),r={keyword:["maxItems","minItems"],type:"array",schemaType:"number",$data:!0,error:{message({keyword:s,schemaCode:a}){const n=s==="maxItems"?"more":"fewer";return(0,e.str)`must NOT have ${n} than ${a} items`},params:({schemaCode:s})=>(0,e._)`{limit: ${s}}`},code(s){const{keyword:a,data:n,schemaCode:o}=s,i=a==="maxItems"?e.operators.GT:e.operators.LT;s.fail$data((0,e._)`${n}.length ${i} ${o}`)}};return Xs.default=r,Xs}var Qs={},Zs={},Jl;function Vo(){if(Jl)return Zs;Jl=1,Object.defineProperty(Zs,"__esModule",{value:!0});const e=Pu();return e.code='require("ajv/dist/runtime/equal").default',Zs.default=e,Zs}var Xl;function A_(){if(Xl)return Qs;Xl=1,Object.defineProperty(Qs,"__esModule",{value:!0});const e=Ua(),t=ge(),r=ve(),s=Vo(),n={keyword:"uniqueItems",type:"array",schemaType:"boolean",$data:!0,error:{message:({params:{i:o,j:i}})=>(0,t.str)`must NOT have duplicate items (items ## ${i} and ${o} are identical)`,params:({params:{i:o,j:i}})=>(0,t._)`{i: ${o}, j: ${i}}`},code(o){const{gen:i,data:l,$data:c,schema:d,parentSchema:u,schemaCode:p,it:f}=o;if(!c&&!d)return;const _=i.let("valid"),y=u.items?(0,e.getSchemaTypes)(u.items):[];o.block$data(_,w,(0,t._)`${p} === false`),o.ok(_);function w(){const v=i.let("i",(0,t._)`${l}.length`),b=i.let("j");o.setParams({i:v,j:b}),i.assign(_,!0),i.if((0,t._)`${v} > 1`,()=>(m()?h:g)(v,b))}function m(){return y.length>0&&!y.some(v=>v==="object"||v==="array")}function h(v,b){const T=i.name("item"),P=(0,e.checkDataTypes)(y,T,f.opts.strictNumbers,e.DataType.Wrong),k=i.const("indices",(0,t._)`{}`);i.for((0,t._)`;${v}--;`,()=>{i.let(T,(0,t._)`${l}[${v}]`),i.if(P,(0,t._)`continue`),y.length>1&&i.if((0,t._)`typeof ${T} == "string"`,(0,t._)`${T} += "_"`),i.if((0,t._)`typeof ${k}[${T}] == "number"`,()=>{i.assign(b,(0,t._)`${k}[${T}]`),o.error(),i.assign(_,!1).break()}).code((0,t._)`${k}[${T}] = ${v}`)})}function g(v,b){const T=(0,r.useFunc)(i,s.default),P=i.name("outer");i.label(P).for((0,t._)`;${v}--;`,()=>i.for((0,t._)`${b} = ${v}; ${b}--;`,()=>i.if((0,t._)`${T}(${l}[${v}], ${l}[${b}])`,()=>{o.error(),i.assign(_,!1).break(P)})))}}};return Qs.default=n,Qs}var ea={},Ql;function O_(){if(Ql)return ea;Ql=1,Object.defineProperty(ea,"__esModule",{value:!0});const e=ge(),t=ve(),r=Vo(),a={keyword:"const",$data:!0,error:{message:"must be equal to constant",params:({schemaCode:n})=>(0,e._)`{allowedValue: ${n}}`},code(n){const{gen:o,data:i,$data:l,schemaCode:c,schema:d}=n;l||d&&typeof d=="object"?n.fail$data((0,e._)`!${(0,t.useFunc)(o,r.default)}(${i}, ${c})`):n.fail((0,e._)`${d} !== ${i}`)}};return ea.default=a,ea}var ta={},Zl;function C_(){if(Zl)return ta;Zl=1,Object.defineProperty(ta,"__esModule",{value:!0});const e=ge(),t=ve(),r=Vo(),a={keyword:"enum",schemaType:"array",$data:!0,error:{message:"must be equal to one of the allowed values",params:({schemaCode:n})=>(0,e._)`{allowedValues: ${n}}`},code(n){const{gen:o,data:i,$data:l,schema:c,schemaCode:d,it:u}=n;if(!l&&c.length===0)throw new Error("enum must have non-empty array");const p=c.length>=u.opts.loopEnum;let f;const _=()=>f??(f=(0,t.useFunc)(o,r.default));let y;if(p||l)y=o.let("valid"),n.block$data(y,w);else{if(!Array.isArray(c))throw new Error("ajv implementation error");const h=o.const("vSchema",d);y=(0,e.or)(...c.map((g,v)=>m(h,v)))}n.pass(y);function w(){o.assign(y,!1),o.forOf("v",d,h=>o.if((0,e._)`${_()}(${i}, ${h})`,()=>o.assign(y,!0).break()))}function m(h,g){const v=c[g];return typeof v=="object"&&v!==null?(0,e._)`${_()}(${i}, ${h}[${g}])`:(0,e._)`${i} === ${v}`}}};return ta.default=a,ta}var ec;function $_(){if(ec)return Hs;ec=1,Object.defineProperty(Hs,"__esModule",{value:!0});const e=v_(),t=w_(),r=S_(),s=x_(),a=E_(),n=k_(),o=P_(),i=A_(),l=O_(),c=C_(),d=[e.default,t.default,r.default,s.default,a.default,n.default,o.default,i.default,{keyword:"type",schemaType:["string","array"]},{keyword:"nullable",schemaType:"boolean"},l.default,c.default];return Hs.default=d,Hs}var ra={},Dr={},tc;function Ou(){if(tc)return Dr;tc=1,Object.defineProperty(Dr,"__esModule",{value:!0}),Dr.validateAdditionalItems=void 0;const e=ge(),t=ve(),s={keyword:"additionalItems",type:"array",schemaType:["boolean","object"],before:"uniqueItems",error:{message:({params:{len:n}})=>(0,e.str)`must NOT have more than ${n} items`,params:({params:{len:n}})=>(0,e._)`{limit: ${n}}`},code(n){const{parentSchema:o,it:i}=n,{items:l}=o;if(!Array.isArray(l)){(0,t.checkStrictMode)(i,'"additionalItems" is ignored when "items" is not an array of schemas');return}a(n,l)}};function a(n,o){const{gen:i,schema:l,data:c,keyword:d,it:u}=n;u.items=!0;const p=i.const("len",(0,e._)`${c}.length`);if(l===!1)n.setParams({len:o.length}),n.pass((0,e._)`${p} <= ${o.length}`);else if(typeof l=="object"&&!(0,t.alwaysValidSchema)(u,l)){const _=i.var("valid",(0,e._)`${p} <= ${o.length}`);i.if((0,e.not)(_),()=>f(_)),n.ok(_)}function f(_){i.forRange("i",o.length,p,y=>{n.subschema({keyword:d,dataProp:y,dataPropType:t.Type.Num},_),u.allErrors||i.if((0,e.not)(_),()=>i.break())})}}return Dr.validateAdditionalItems=a,Dr.default=s,Dr}var sa={},Br={},rc;function Cu(){if(rc)return Br;rc=1,Object.defineProperty(Br,"__esModule",{value:!0}),Br.validateTuple=void 0;const e=ge(),t=ve(),r=vt(),s={keyword:"items",type:"array",schemaType:["object","array","boolean"],before:"uniqueItems",code(n){const{schema:o,it:i}=n;if(Array.isArray(o))return a(n,"additionalItems",o);i.items=!0,!(0,t.alwaysValidSchema)(i,o)&&n.ok((0,r.validateArray)(n))}};function a(n,o,i=n.schema){const{gen:l,parentSchema:c,data:d,keyword:u,it:p}=n;y(c),p.opts.unevaluated&&i.length&&p.items!==!0&&(p.items=t.mergeEvaluated.items(l,i.length,p.items));const f=l.name("valid"),_=l.const("len",(0,e._)`${d}.length`);i.forEach((w,m)=>{(0,t.alwaysValidSchema)(p,w)||(l.if((0,e._)`${_} > ${m}`,()=>n.subschema({keyword:u,schemaProp:m,dataProp:m},f)),n.ok(f))});function y(w){const{opts:m,errSchemaPath:h}=p,g=i.length,v=g===w.minItems&&(g===w.maxItems||w[o]===!1);if(m.strictTuples&&!v){const b=`"${u}" is ${g}-tuple, but minItems or maxItems/${o} are not specified or different at path "${h}"`;(0,t.checkStrictMode)(p,b,m.strictTuples)}}}return Br.validateTuple=a,Br.default=s,Br}var sc;function R_(){if(sc)return sa;sc=1,Object.defineProperty(sa,"__esModule",{value:!0});const e=Cu(),t={keyword:"prefixItems",type:"array",schemaType:["array"],before:"uniqueItems",code:r=>(0,e.validateTuple)(r,"items")};return sa.default=t,sa}var aa={},ac;function M_(){if(ac)return aa;ac=1,Object.defineProperty(aa,"__esModule",{value:!0});const e=ge(),t=ve(),r=vt(),s=Ou(),n={keyword:"items",type:"array",schemaType:["object","boolean"],before:"uniqueItems",error:{message:({params:{len:o}})=>(0,e.str)`must NOT have more than ${o} items`,params:({params:{len:o}})=>(0,e._)`{limit: ${o}}`},code(o){const{schema:i,parentSchema:l,it:c}=o,{prefixItems:d}=l;c.items=!0,!(0,t.alwaysValidSchema)(c,i)&&(d?(0,s.validateAdditionalItems)(o,d):o.ok((0,r.validateArray)(o)))}};return aa.default=n,aa}var na={},nc;function L_(){if(nc)return na;nc=1,Object.defineProperty(na,"__esModule",{value:!0});const e=ge(),t=ve(),s={keyword:"contains",type:"array",schemaType:["object","boolean"],before:"uniqueItems",trackErrors:!0,error:{message:({params:{min:a,max:n}})=>n===void 0?(0,e.str)`must contain at least ${a} valid item(s)`:(0,e.str)`must contain at least ${a} and no more than ${n} valid item(s)`,params:({params:{min:a,max:n}})=>n===void 0?(0,e._)`{minContains: ${a}}`:(0,e._)`{minContains: ${a}, maxContains: ${n}}`},code(a){const{gen:n,schema:o,parentSchema:i,data:l,it:c}=a;let d,u;const{minContains:p,maxContains:f}=i;c.opts.next?(d=p===void 0?1:p,u=f):d=1;const _=n.const("len",(0,e._)`${l}.length`);if(a.setParams({min:d,max:u}),u===void 0&&d===0){(0,t.checkStrictMode)(c,'"minContains" == 0 without "maxContains": "contains" keyword ignored');return}if(u!==void 0&&d>u){(0,t.checkStrictMode)(c,'"minContains" > "maxContains" is always invalid'),a.fail();return}if((0,t.alwaysValidSchema)(c,o)){let g=(0,e._)`${_} >= ${d}`;u!==void 0&&(g=(0,e._)`${g} && ${_} <= ${u}`),a.pass(g);return}c.items=!0;const y=n.name("valid");u===void 0&&d===1?m(y,()=>n.if(y,()=>n.break())):d===0?(n.let(y,!0),u!==void 0&&n.if((0,e._)`${l}.length > 0`,w)):(n.let(y,!1),w()),a.result(y,()=>a.reset());function w(){const g=n.name("_valid"),v=n.let("count",0);m(g,()=>n.if(g,()=>h(v)))}function m(g,v){n.forRange("i",0,_,b=>{a.subschema({keyword:"contains",dataProp:b,dataPropType:t.Type.Num,compositeRule:!0},g),v()})}function h(g){n.code((0,e._)`${g}++`),u===void 0?n.if((0,e._)`${g} >= ${d}`,()=>n.assign(y,!0).break()):(n.if((0,e._)`${g} > ${u}`,()=>n.assign(y,!1).break()),d===1?n.assign(y,!0):n.if((0,e._)`${g} >= ${d}`,()=>n.assign(y,!0)))}}};return na.default=s,na}var Wn={},oc;function N_(){return oc||(oc=1,(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.validateSchemaDeps=e.validatePropertyDeps=e.error=void 0;const t=ge(),r=ve(),s=vt();e.error={message:({params:{property:l,depsCount:c,deps:d}})=>{const u=c===1?"property":"properties";return(0,t.str)`must have ${u} ${d} when property ${l} is present`},params:({params:{property:l,depsCount:c,deps:d,missingProperty:u}})=>(0,t._)`{property: ${l},
    missingProperty: ${u},
    depsCount: ${c},
    deps: ${d}}`};const a={keyword:"dependencies",type:"object",schemaType:"object",error:e.error,code(l){const[c,d]=n(l);o(l,c),i(l,d)}};function n({schema:l}){const c={},d={};for(const u in l){if(u==="__proto__")continue;const p=Array.isArray(l[u])?c:d;p[u]=l[u]}return[c,d]}function o(l,c=l.schema){const{gen:d,data:u,it:p}=l;if(Object.keys(c).length===0)return;const f=d.let("missing");for(const _ in c){const y=c[_];if(y.length===0)continue;const w=(0,s.propertyInData)(d,u,_,p.opts.ownProperties);l.setParams({property:_,depsCount:y.length,deps:y.join(", ")}),p.allErrors?d.if(w,()=>{for(const m of y)(0,s.checkReportMissingProp)(l,m)}):(d.if((0,t._)`${w} && (${(0,s.checkMissingProp)(l,y,f)})`),(0,s.reportMissingProp)(l,f),d.else())}}e.validatePropertyDeps=o;function i(l,c=l.schema){const{gen:d,data:u,keyword:p,it:f}=l,_=d.name("valid");for(const y in c)(0,r.alwaysValidSchema)(f,c[y])||(d.if((0,s.propertyInData)(d,u,y,f.opts.ownProperties),()=>{const w=l.subschema({keyword:p,schemaProp:y},_);l.mergeValidEvaluated(w,_)},()=>d.var(_,!0)),l.ok(_))}e.validateSchemaDeps=i,e.default=a})(Wn)),Wn}var oa={},ic;function I_(){if(ic)return oa;ic=1,Object.defineProperty(oa,"__esModule",{value:!0});const e=ge(),t=ve(),s={keyword:"propertyNames",type:"object",schemaType:["object","boolean"],error:{message:"property name must be valid",params:({params:a})=>(0,e._)`{propertyName: ${a.propertyName}}`},code(a){const{gen:n,schema:o,data:i,it:l}=a;if((0,t.alwaysValidSchema)(l,o))return;const c=n.name("valid");n.forIn("key",i,d=>{a.setParams({propertyName:d}),a.subschema({keyword:"propertyNames",data:d,dataTypes:["string"],propertyName:d,compositeRule:!0},c),n.if((0,e.not)(c),()=>{a.error(!0),l.allErrors||n.break()})}),a.ok(c)}};return oa.default=s,oa}var ia={},lc;function $u(){if(lc)return ia;lc=1,Object.defineProperty(ia,"__esModule",{value:!0});const e=vt(),t=ge(),r=gr(),s=ve(),n={keyword:"additionalProperties",type:["object"],schemaType:["boolean","object"],allowUndefined:!0,trackErrors:!0,error:{message:"must NOT have additional properties",params:({params:o})=>(0,t._)`{additionalProperty: ${o.additionalProperty}}`},code(o){const{gen:i,schema:l,parentSchema:c,data:d,errsCount:u,it:p}=o;if(!u)throw new Error("ajv implementation error");const{allErrors:f,opts:_}=p;if(p.props=!0,_.removeAdditional!=="all"&&(0,s.alwaysValidSchema)(p,l))return;const y=(0,e.allSchemaProperties)(c.properties),w=(0,e.allSchemaProperties)(c.patternProperties);m(),o.ok((0,t._)`${u} === ${r.default.errors}`);function m(){i.forIn("key",d,T=>{!y.length&&!w.length?v(T):i.if(h(T),()=>v(T))})}function h(T){let P;if(y.length>8){const k=(0,s.schemaRefOrVal)(p,c.properties,"properties");P=(0,e.isOwnProperty)(i,k,T)}else y.length?P=(0,t.or)(...y.map(k=>(0,t._)`${T} === ${k}`)):P=t.nil;return w.length&&(P=(0,t.or)(P,...w.map(k=>(0,t._)`${(0,e.usePattern)(o,k)}.test(${T})`))),(0,t.not)(P)}function g(T){i.code((0,t._)`delete ${d}[${T}]`)}function v(T){if(_.removeAdditional==="all"||_.removeAdditional&&l===!1){g(T);return}if(l===!1){o.setParams({additionalProperty:T}),o.error(),f||i.break();return}if(typeof l=="object"&&!(0,s.alwaysValidSchema)(p,l)){const P=i.name("valid");_.removeAdditional==="failing"?(b(T,P,!1),i.if((0,t.not)(P),()=>{o.reset(),g(T)})):(b(T,P),f||i.if((0,t.not)(P),()=>i.break()))}}function b(T,P,k){const S={keyword:"additionalProperties",dataProp:T,dataPropType:s.Type.Str};k===!1&&Object.assign(S,{compositeRule:!0,createErrors:!1,allErrors:!1}),o.subschema(S,P)}}};return ia.default=n,ia}var la={},cc;function D_(){if(cc)return la;cc=1,Object.defineProperty(la,"__esModule",{value:!0});const e=dn(),t=vt(),r=ve(),s=$u(),a={keyword:"properties",type:"object",schemaType:"object",code(n){const{gen:o,schema:i,parentSchema:l,data:c,it:d}=n;d.opts.removeAdditional==="all"&&l.additionalProperties===void 0&&s.default.code(new e.KeywordCxt(d,s.default,"additionalProperties"));const u=(0,t.allSchemaProperties)(i);for(const w of u)d.definedProperties.add(w);d.opts.unevaluated&&u.length&&d.props!==!0&&(d.props=r.mergeEvaluated.props(o,(0,r.toHash)(u),d.props));const p=u.filter(w=>!(0,r.alwaysValidSchema)(d,i[w]));if(p.length===0)return;const f=o.name("valid");for(const w of p)_(w)?y(w):(o.if((0,t.propertyInData)(o,c,w,d.opts.ownProperties)),y(w),d.allErrors||o.else().var(f,!0),o.endIf()),n.it.definedProperties.add(w),n.ok(f);function _(w){return d.opts.useDefaults&&!d.compositeRule&&i[w].default!==void 0}function y(w){n.subschema({keyword:"properties",schemaProp:w,dataProp:w},f)}}};return la.default=a,la}var ca={},dc;function B_(){if(dc)return ca;dc=1,Object.defineProperty(ca,"__esModule",{value:!0});const e=vt(),t=ge(),r=ve(),s=ve(),a={keyword:"patternProperties",type:"object",schemaType:"object",code(n){const{gen:o,schema:i,data:l,parentSchema:c,it:d}=n,{opts:u}=d,p=(0,e.allSchemaProperties)(i),f=p.filter(v=>(0,r.alwaysValidSchema)(d,i[v]));if(p.length===0||f.length===p.length&&(!d.opts.unevaluated||d.props===!0))return;const _=u.strictSchema&&!u.allowMatchingProperties&&c.properties,y=o.name("valid");d.props!==!0&&!(d.props instanceof t.Name)&&(d.props=(0,s.evaluatedPropsToName)(o,d.props));const{props:w}=d;m();function m(){for(const v of p)_&&h(v),d.allErrors?g(v):(o.var(y,!0),g(v),o.if(y))}function h(v){for(const b in _)new RegExp(v).test(b)&&(0,r.checkStrictMode)(d,`property ${b} matches pattern ${v} (use allowMatchingProperties)`)}function g(v){o.forIn("key",l,b=>{o.if((0,t._)`${(0,e.usePattern)(n,v)}.test(${b})`,()=>{const T=f.includes(v);T||n.subschema({keyword:"patternProperties",schemaProp:v,dataProp:b,dataPropType:s.Type.Str},y),d.opts.unevaluated&&w!==!0?o.assign((0,t._)`${w}[${b}]`,!0):!T&&!d.allErrors&&o.if((0,t.not)(y),()=>o.break())})})}}};return ca.default=a,ca}var da={},uc;function F_(){if(uc)return da;uc=1,Object.defineProperty(da,"__esModule",{value:!0});const e=ve(),t={keyword:"not",schemaType:["object","boolean"],trackErrors:!0,code(r){const{gen:s,schema:a,it:n}=r;if((0,e.alwaysValidSchema)(n,a)){r.fail();return}const o=s.name("valid");r.subschema({keyword:"not",compositeRule:!0,createErrors:!1,allErrors:!1},o),r.failResult(o,()=>r.reset(),()=>r.error())},error:{message:"must NOT be valid"}};return da.default=t,da}var ua={},pc;function z_(){if(pc)return ua;pc=1,Object.defineProperty(ua,"__esModule",{value:!0});const t={keyword:"anyOf",schemaType:"array",trackErrors:!0,code:vt().validateUnion,error:{message:"must match a schema in anyOf"}};return ua.default=t,ua}var pa={},fc;function j_(){if(fc)return pa;fc=1,Object.defineProperty(pa,"__esModule",{value:!0});const e=ge(),t=ve(),s={keyword:"oneOf",schemaType:"array",trackErrors:!0,error:{message:"must match exactly one schema in oneOf",params:({params:a})=>(0,e._)`{passingSchemas: ${a.passing}}`},code(a){const{gen:n,schema:o,parentSchema:i,it:l}=a;if(!Array.isArray(o))throw new Error("ajv implementation error");if(l.opts.discriminator&&i.discriminator)return;const c=o,d=n.let("valid",!1),u=n.let("passing",null),p=n.name("_valid");a.setParams({passing:u}),n.block(f),a.result(d,()=>a.reset(),()=>a.error(!0));function f(){c.forEach((_,y)=>{let w;(0,t.alwaysValidSchema)(l,_)?n.var(p,!0):w=a.subschema({keyword:"oneOf",schemaProp:y,compositeRule:!0},p),y>0&&n.if((0,e._)`${p} && ${d}`).assign(d,!1).assign(u,(0,e._)`[${u}, ${y}]`).else(),n.if(p,()=>{n.assign(d,!0),n.assign(u,y),w&&a.mergeEvaluated(w,e.Name)})})}}};return pa.default=s,pa}var fa={},hc;function U_(){if(hc)return fa;hc=1,Object.defineProperty(fa,"__esModule",{value:!0});const e=ve(),t={keyword:"allOf",schemaType:"array",code(r){const{gen:s,schema:a,it:n}=r;if(!Array.isArray(a))throw new Error("ajv implementation error");const o=s.name("valid");a.forEach((i,l)=>{if((0,e.alwaysValidSchema)(n,i))return;const c=r.subschema({keyword:"allOf",schemaProp:l},o);r.ok(o),r.mergeEvaluated(c)})}};return fa.default=t,fa}var ha={},mc;function H_(){if(mc)return ha;mc=1,Object.defineProperty(ha,"__esModule",{value:!0});const e=ge(),t=ve(),s={keyword:"if",schemaType:["object","boolean"],trackErrors:!0,error:{message:({params:n})=>(0,e.str)`must match "${n.ifClause}" schema`,params:({params:n})=>(0,e._)`{failingKeyword: ${n.ifClause}}`},code(n){const{gen:o,parentSchema:i,it:l}=n;i.then===void 0&&i.else===void 0&&(0,t.checkStrictMode)(l,'"if" without "then" and "else" is ignored');const c=a(l,"then"),d=a(l,"else");if(!c&&!d)return;const u=o.let("valid",!0),p=o.name("_valid");if(f(),n.reset(),c&&d){const y=o.let("ifClause");n.setParams({ifClause:y}),o.if(p,_("then",y),_("else",y))}else c?o.if(p,_("then")):o.if((0,e.not)(p),_("else"));n.pass(u,()=>n.error(!0));function f(){const y=n.subschema({keyword:"if",compositeRule:!0,createErrors:!1,allErrors:!1},p);n.mergeEvaluated(y)}function _(y,w){return()=>{const m=n.subschema({keyword:y},p);o.assign(u,p),n.mergeValidEvaluated(m,u),w?o.assign(w,(0,e._)`${y}`):n.setParams({ifClause:y})}}}};function a(n,o){const i=n.schema[o];return i!==void 0&&!(0,t.alwaysValidSchema)(n,i)}return ha.default=s,ha}var ma={},gc;function q_(){if(gc)return ma;gc=1,Object.defineProperty(ma,"__esModule",{value:!0});const e=ve(),t={keyword:["then","else"],schemaType:["object","boolean"],code({keyword:r,parentSchema:s,it:a}){s.if===void 0&&(0,e.checkStrictMode)(a,`"${r}" without "if" is ignored`)}};return ma.default=t,ma}var bc;function G_(){if(bc)return ra;bc=1,Object.defineProperty(ra,"__esModule",{value:!0});const e=Ou(),t=R_(),r=Cu(),s=M_(),a=L_(),n=N_(),o=I_(),i=$u(),l=D_(),c=B_(),d=F_(),u=z_(),p=j_(),f=U_(),_=H_(),y=q_();function w(m=!1){const h=[d.default,u.default,p.default,f.default,_.default,y.default,o.default,i.default,n.default,l.default,c.default];return m?h.push(t.default,s.default):h.push(e.default,r.default),h.push(a.default),h}return ra.default=w,ra}var ga={},ba={},yc;function V_(){if(yc)return ba;yc=1,Object.defineProperty(ba,"__esModule",{value:!0});const e=ge(),r={keyword:"format",type:["number","string"],schemaType:"string",$data:!0,error:{message:({schemaCode:s})=>(0,e.str)`must match format "${s}"`,params:({schemaCode:s})=>(0,e._)`{format: ${s}}`},code(s,a){const{gen:n,data:o,$data:i,schema:l,schemaCode:c,it:d}=s,{opts:u,errSchemaPath:p,schemaEnv:f,self:_}=d;if(!u.validateFormats)return;i?y():w();function y(){const m=n.scopeValue("formats",{ref:_.formats,code:u.code.formats}),h=n.const("fDef",(0,e._)`${m}[${c}]`),g=n.let("fType"),v=n.let("format");n.if((0,e._)`typeof ${h} == "object" && !(${h} instanceof RegExp)`,()=>n.assign(g,(0,e._)`${h}.type || "string"`).assign(v,(0,e._)`${h}.validate`),()=>n.assign(g,(0,e._)`"string"`).assign(v,h)),s.fail$data((0,e.or)(b(),T()));function b(){return u.strictSchema===!1?e.nil:(0,e._)`${c} && !${v}`}function T(){const P=f.$async?(0,e._)`(${h}.async ? await ${v}(${o}) : ${v}(${o}))`:(0,e._)`${v}(${o})`,k=(0,e._)`(typeof ${v} == "function" ? ${P} : ${v}.test(${o}))`;return(0,e._)`${v} && ${v} !== true && ${g} === ${a} && !${k}`}}function w(){const m=_.formats[l];if(!m){b();return}if(m===!0)return;const[h,g,v]=T(m);h===a&&s.pass(P());function b(){if(u.strictSchema===!1){_.logger.warn(k());return}throw new Error(k());function k(){return`unknown format "${l}" ignored in schema at path "${p}"`}}function T(k){const S=k instanceof RegExp?(0,e.regexpCode)(k):u.code.formats?(0,e._)`${u.code.formats}${(0,e.getProperty)(l)}`:void 0,x=n.scopeValue("formats",{key:l,ref:k,code:S});return typeof k=="object"&&!(k instanceof RegExp)?[k.type||"string",k.validate,(0,e._)`${x}.validate`]:["string",k,x]}function P(){if(typeof m=="object"&&!(m instanceof RegExp)&&m.async){if(!f.$async)throw new Error("async format in sync schema");return(0,e._)`await ${v}(${o})`}return typeof g=="function"?(0,e._)`${v}(${o})`:(0,e._)`${v}.test(${o})`}}}};return ba.default=r,ba}var _c;function K_(){if(_c)return ga;_c=1,Object.defineProperty(ga,"__esModule",{value:!0});const t=[V_().default];return ga.default=t,ga}var Sr={},vc;function Y_(){return vc||(vc=1,Object.defineProperty(Sr,"__esModule",{value:!0}),Sr.contentVocabulary=Sr.metadataVocabulary=void 0,Sr.metadataVocabulary=["title","description","default","deprecated","readOnly","writeOnly","examples"],Sr.contentVocabulary=["contentMediaType","contentEncoding","contentSchema"]),Sr}var wc;function W_(){if(wc)return zs;wc=1,Object.defineProperty(zs,"__esModule",{value:!0});const e=__(),t=$_(),r=G_(),s=K_(),a=Y_(),n=[e.default,t.default,(0,r.default)(),s.default,a.metadataVocabulary,a.contentVocabulary];return zs.default=n,zs}var ya={},ts={},Tc;function J_(){if(Tc)return ts;Tc=1,Object.defineProperty(ts,"__esModule",{value:!0}),ts.DiscrError=void 0;var e;return(function(t){t.Tag="tag",t.Mapping="mapping"})(e||(ts.DiscrError=e={})),ts}var Sc;function X_(){if(Sc)return ya;Sc=1,Object.defineProperty(ya,"__esModule",{value:!0});const e=ge(),t=J_(),r=Go(),s=un(),a=ve(),o={keyword:"discriminator",type:"object",schemaType:"object",error:{message:({params:{discrError:i,tagName:l}})=>i===t.DiscrError.Tag?`tag "${l}" must be string`:`value of tag "${l}" must be in oneOf`,params:({params:{discrError:i,tag:l,tagName:c}})=>(0,e._)`{error: ${i}, tag: ${c}, tagValue: ${l}}`},code(i){const{gen:l,data:c,schema:d,parentSchema:u,it:p}=i,{oneOf:f}=u;if(!p.opts.discriminator)throw new Error("discriminator: requires discriminator option");const _=d.propertyName;if(typeof _!="string")throw new Error("discriminator: requires propertyName");if(d.mapping)throw new Error("discriminator: mapping is not supported");if(!f)throw new Error("discriminator: requires oneOf keyword");const y=l.let("valid",!1),w=l.const("tag",(0,e._)`${c}${(0,e.getProperty)(_)}`);l.if((0,e._)`typeof ${w} == "string"`,()=>m(),()=>i.error(!1,{discrError:t.DiscrError.Tag,tag:w,tagName:_})),i.ok(y);function m(){const v=g();l.if(!1);for(const b in v)l.elseIf((0,e._)`${w} === ${b}`),l.assign(y,h(v[b]));l.else(),i.error(!1,{discrError:t.DiscrError.Mapping,tag:w,tagName:_}),l.endIf()}function h(v){const b=l.name("valid"),T=i.subschema({keyword:"oneOf",schemaProp:v},b);return i.mergeEvaluated(T,e.Name),b}function g(){var v;const b={},T=k(u);let P=!0;for(let C=0;C<f.length;C++){let $=f[C];if($?.$ref&&!(0,a.schemaHasRulesButRef)($,p.self.RULES)){const j=$.$ref;if($=r.resolveRef.call(p.self,p.schemaEnv.root,p.baseId,j),$ instanceof r.SchemaEnv&&($=$.schema),$===void 0)throw new s.default(p.opts.uriResolver,p.baseId,j)}const M=(v=$?.properties)===null||v===void 0?void 0:v[_];if(typeof M!="object")throw new Error(`discriminator: oneOf subschemas (or referenced schemas) must have "properties/${_}"`);P=P&&(T||k($)),S(M,C)}if(!P)throw new Error(`discriminator: "${_}" must be required`);return b;function k({required:C}){return Array.isArray(C)&&C.includes(_)}function S(C,$){if(C.const)x(C.const,$);else if(C.enum)for(const M of C.enum)x(M,$);else throw new Error(`discriminator: "properties/${_}" must have "const" or "enum"`)}function x(C,$){if(typeof C!="string"||C in b)throw new Error(`discriminator: "${_}" values must be unique strings`);b[C]=$}}}};return ya.default=o,ya}const Q_="http://json-schema.org/draft-07/schema#",Z_="http://json-schema.org/draft-07/schema#",ev="Core schema meta-schema",tv={schemaArray:{type:"array",minItems:1,items:{$ref:"#"}},nonNegativeInteger:{type:"integer",minimum:0},nonNegativeIntegerDefault0:{allOf:[{$ref:"#/definitions/nonNegativeInteger"},{default:0}]},simpleTypes:{enum:["array","boolean","integer","null","number","object","string"]},stringArray:{type:"array",items:{type:"string"},uniqueItems:!0,default:[]}},rv=["object","boolean"],sv={$id:{type:"string",format:"uri-reference"},$schema:{type:"string",format:"uri"},$ref:{type:"string",format:"uri-reference"},$comment:{type:"string"},title:{type:"string"},description:{type:"string"},default:!0,readOnly:{type:"boolean",default:!1},examples:{type:"array",items:!0},multipleOf:{type:"number",exclusiveMinimum:0},maximum:{type:"number"},exclusiveMaximum:{type:"number"},minimum:{type:"number"},exclusiveMinimum:{type:"number"},maxLength:{$ref:"#/definitions/nonNegativeInteger"},minLength:{$ref:"#/definitions/nonNegativeIntegerDefault0"},pattern:{type:"string",format:"regex"},additionalItems:{$ref:"#"},items:{anyOf:[{$ref:"#"},{$ref:"#/definitions/schemaArray"}],default:!0},maxItems:{$ref:"#/definitions/nonNegativeInteger"},minItems:{$ref:"#/definitions/nonNegativeIntegerDefault0"},uniqueItems:{type:"boolean",default:!1},contains:{$ref:"#"},maxProperties:{$ref:"#/definitions/nonNegativeInteger"},minProperties:{$ref:"#/definitions/nonNegativeIntegerDefault0"},required:{$ref:"#/definitions/stringArray"},additionalProperties:{$ref:"#"},definitions:{type:"object",additionalProperties:{$ref:"#"},default:{}},properties:{type:"object",additionalProperties:{$ref:"#"},default:{}},patternProperties:{type:"object",additionalProperties:{$ref:"#"},propertyNames:{format:"regex"},default:{}},dependencies:{type:"object",additionalProperties:{anyOf:[{$ref:"#"},{$ref:"#/definitions/stringArray"}]}},propertyNames:{$ref:"#"},const:!0,enum:{type:"array",items:!0,minItems:1,uniqueItems:!0},type:{anyOf:[{$ref:"#/definitions/simpleTypes"},{type:"array",items:{$ref:"#/definitions/simpleTypes"},minItems:1,uniqueItems:!0}]},format:{type:"string"},contentMediaType:{type:"string"},contentEncoding:{type:"string"},if:{$ref:"#"},then:{$ref:"#"},else:{$ref:"#"},allOf:{$ref:"#/definitions/schemaArray"},anyOf:{$ref:"#/definitions/schemaArray"},oneOf:{$ref:"#/definitions/schemaArray"},not:{$ref:"#"}},av={$schema:Q_,$id:Z_,title:ev,definitions:tv,type:rv,properties:sv,default:!0};var xc;function nv(){return xc||(xc=1,(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.MissingRefError=t.ValidationError=t.CodeGen=t.Name=t.nil=t.stringify=t.str=t._=t.KeywordCxt=t.Ajv=void 0;const r=g_(),s=W_(),a=X_(),n=av,o=["/properties"],i="http://json-schema.org/draft-07/schema";class l extends r.default{_addVocabularies(){super._addVocabularies(),s.default.forEach(_=>this.addVocabulary(_)),this.opts.discriminator&&this.addKeyword(a.default)}_addDefaultMetaSchema(){if(super._addDefaultMetaSchema(),!this.opts.meta)return;const _=this.opts.$data?this.$dataMetaSchema(n,o):n;this.addMetaSchema(_,i,!1),this.refs["http://json-schema.org/schema"]=i}defaultMeta(){return this.opts.defaultMeta=super.defaultMeta()||(this.getSchema(i)?i:void 0)}}t.Ajv=l,e.exports=t=l,e.exports.Ajv=l,Object.defineProperty(t,"__esModule",{value:!0}),t.default=l;var c=dn();Object.defineProperty(t,"KeywordCxt",{enumerable:!0,get:function(){return c.KeywordCxt}});var d=ge();Object.defineProperty(t,"_",{enumerable:!0,get:function(){return d._}}),Object.defineProperty(t,"str",{enumerable:!0,get:function(){return d.str}}),Object.defineProperty(t,"stringify",{enumerable:!0,get:function(){return d.stringify}}),Object.defineProperty(t,"nil",{enumerable:!0,get:function(){return d.nil}}),Object.defineProperty(t,"Name",{enumerable:!0,get:function(){return d.Name}}),Object.defineProperty(t,"CodeGen",{enumerable:!0,get:function(){return d.CodeGen}});var u=qo();Object.defineProperty(t,"ValidationError",{enumerable:!0,get:function(){return u.default}});var p=un();Object.defineProperty(t,"MissingRefError",{enumerable:!0,get:function(){return p.default}})})(Ns,Ns.exports)),Ns.exports}var ov=nv();const iv=du(ov),lv={$id:"gameModeRules",type:"object",required:["betTypes","requiredBetTypes","maxBetsPerType","maxBetsTotal","minBetsTotal","stakeRule","stakeMin","allowPartialSubmit","allowBetModification","lockOnFirstBet","oneBetPerMatchPerType"],properties:{betTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},minItems:1,description:"Allowed bet types for this game mode"},requiredBetTypes:{type:"array",items:{type:"string",enum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"]},description:"Bet types the user MUST place. Empty = no requirement."},maxBetsPerType:{type:"integer",minimum:-1,description:"Max bets per bet type per match. -1 = unlimited."},maxBetsTotal:{type:"integer",minimum:-1,description:"Max total bets across all matches. -1 = unlimited."},minBetsTotal:{type:"integer",minimum:0,description:"Min total bets required before submission. 0 = none."},stakeRule:{type:"string",enum:["FREE","SPEND_ALL","MIN_MAX"],description:"FREE = any amount | SPEND_ALL = must use entire TD$ | MIN_MAX = within range"},stakeMin:{type:["number","null"],minimum:0,description:"Min stake per bet. null = no minimum."},stakeMax:{type:["number","null"],minimum:0,description:"Max stake per bet. null = no maximum."},allowPartialSubmit:{type:"boolean",description:"Can user submit with incomplete lineup?"},allowBetModification:{type:"boolean",description:"Can user change/remove bets after placing?"},lockOnFirstBet:{type:"boolean",description:"Does placing first bet lock user into the tournament?"},oneBetPerMatchPerType:{type:"boolean",description:"Restrict to one bet per match per bet type?"}},additionalProperties:!1},cv={$id:"gameModeScoring",type:"object",required:["method","rankBy","penalizeMissing"],properties:{method:{type:"string",enum:["PAYOUT_SUM","PROFIT","WIN_RATE","CUSTOM"],description:"Primary scoring method"},rankBy:{type:"array",items:{type:"string"},minItems:1,description:"Ordered tiebreaker fields"},bonuses:{type:"array",items:{type:"object",properties:{condition:{type:"string"},points:{type:"number"},label:{type:"string"}}},description:"Bonus scoring rules"},penalizeMissing:{type:"boolean",description:"Penalize users who did not place all required bets?"}},additionalProperties:!1},Ru=new iv({allErrors:!0}),Ec=Ru.compile(lv),kc=Ru.compile(cv),dv=e=>{const t=[];Ec(e.rules)||Ec.errors.forEach(n=>{t.push(`rules${n.instancePath}: ${n.message}`)}),kc(e.scoring)||kc.errors.forEach(n=>{t.push(`scoring${n.instancePath}: ${n.message}`)});const a=e.rules;return a.requiredBetTypes.forEach(n=>{a.betTypes.includes(n)||t.push(`requiredBetTypes contains "${n}" which is not in betTypes`)}),a.stakeRule==="MIN_MAX"&&a.stakeMin==null&&a.stakeMax==null&&t.push("stakeRule is MIN_MAX but neither stakeMin nor stakeMax is set"),a.minBetsTotal>0&&a.requiredBetTypes.length>a.minBetsTotal&&t.push(`requiredBetTypes (${a.requiredBetTypes.length}) exceeds minBetsTotal (${a.minBetsTotal})`),{valid:t.length===0,errors:t}},uv=e=>{const t=e.rules,r=e.scoring;return{"mode.id":e.id,"mode.label":e.label,"mode.description":e.description,"rules.betTypes":t.betTypes.join(", "),"rules.requiredBetTypes":t.requiredBetTypes.length>0?t.requiredBetTypes.join(", "):"(none)","rules.maxBetsPerType":t.maxBetsPerType===-1?"Unlimited":String(t.maxBetsPerType),"rules.maxBetsTotal":t.maxBetsTotal===-1?"Unlimited":String(t.maxBetsTotal),"rules.minBetsTotal":String(t.minBetsTotal),"rules.stakeRule":t.stakeRule,"rules.stakeMin":t.stakeMin!=null?String(t.stakeMin):"(none)","rules.stakeMax":t.stakeMax!=null?String(t.stakeMax):"(none)","rules.allowPartialSubmit":String(t.allowPartialSubmit),"rules.allowBetModification":String(t.allowBetModification),"rules.lockOnFirstBet":String(t.lockOnFirstBet),"rules.oneBetPerMatchPerType":String(t.oneBetPerMatchPerType),"scoring.method":r.method,"scoring.rankBy":r.rankBy.join(", "),"scoring.bonuses":r.bonuses.length>0?JSON.stringify(r.bonuses):"(none)","scoring.penalizeMissing":String(r.penalizeMissing),"ui.badge":e.getBadge()?`${e.getBadge().label} (${e.getBadge().color})`:"(none)","ui.emptyStateText":e.getEmptyStateText()}},Ha={DEFAULT:new ul,DEFAULT_FORMAT:new ul,SET_IT_AND_FORGET_IT:new e_},Pc=e=>Ha[e]||Ha.DEFAULT,pv=()=>Object.keys(Ha),fv=()=>{const e={};return Object.entries(Ha).forEach(([t,r])=>{e[t]=dv(r)}),e};typeof window<"u"&&(window.GameMode={get:Pc,modes:pv,validate:fv,dump:e=>uv(Pc(e))});class hv extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock(),this._unsub=$e.subscribe(()=>this.render())}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval),this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,r,s){this.shadowRoot&&r!==s&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const r=new Date,s=r.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),a=r.toLocaleDateString("en-US",{month:"short",day:"numeric"});t.textContent=`${a} • ${s}`}}handleLogoClick(t){t.preventDefault(),de.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),de.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const t=$e.isDark,r=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
      <style>
        ${ft()}
        ${mr()}

        :host {
          display: block;
          width: 100%;
          background: var(--surface-base, #141414);
          border-bottom: none;
          box-shadow: none;
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
          transition: transform var(--transition-normal, 0.2s ease);
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
          font-weight: var(--weight-semibold, 600);
          color: var(--app-core-color--gray-7__dark--brand, rgba(255, 255, 255, 0.85));
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }

        .status-divider {
          width: 1px;
          height: 16px;
          background: var(--card-border, rgba(255, 255, 255, 0.15));
        }

        .status-time {
          font-size: 0.9rem;
          font-weight: var(--weight-medium, 500);
          color: var(--status-locked-text, #F7C60D);
          opacity: 0.7;
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

        .profile-pill {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 12px 4px 4px;
          background: rgba(255, 215, 0, 0.08);
          border: none;
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.2);
          border-radius: var(--radius-2xl, 24px);
          cursor: pointer;
          transition: all var(--transition-normal, 0.3s ease);
        }

        .profile-pill:hover {
          background: rgba(255, 215, 0, 0.15);
          box-shadow: inset 0 0 0 1px rgba(255, 215, 0, 0.4);
          box-shadow: var(--shadow-glow-gold, 0 0 12px rgba(255, 215, 0, 0.2));
        }

        .profile-icon {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: rgba(32, 32, 32, 0.8);
          background-image: var(--nav-icon__account_circle--${t?"dark":"vlight"});
          background-size: 112% 112%;
          background-position: center;
          background-repeat: no-repeat;
          flex-shrink: 0;
        }

        .profile-name {
          font-size: 0.75rem;
          font-weight: var(--weight-semibold, 600);
          color: var(--status-locked-text, #F7C60D);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 120px;
        }

        /* Responsive — mobile */
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

          .status-section {
            display: none;
          }

          .status-divider {
            height: 12px;
          }
        }

        @media ${Uo.wide} {
          .logo-img {
            height: 56px;
          }
        }
      </style>

      <div class="head-top-container">
        <div class="logo-section">
          <a href="#" class="logo-link" id="logoLink">
            <img
              src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_secondary_logo&format=png"
              alt="Bet Max Action"
              class="logo-img"
              data-m5t-brand-src-swap="true"
            />
          </a>
        </div>

        <div class="status-section">
          <div class="status-time">Loading...</div>
        </div>

        <div class="profile-section">
          <div class="profile-pill" id="profileIcon" role="button" tabindex="0" aria-label="User Profile">
            <div class="profile-icon"></div>
            <span class="profile-name">${r}</span>
          </div>
        </div>
      </div>
    `;const s=this.shadowRoot.querySelector("#logoLink"),a=this.shadowRoot.querySelector("#profileIcon");s&&s.addEventListener("click",n=>this.handleLogoClick(n)),a&&(a.addEventListener("click",n=>this.handleProfileClick(n)),a.addEventListener("keypress",n=>{(n.key==="Enter"||n.key===" ")&&this.handleProfileClick(n)})),this.updateTime()}}customElements.define("bma-app-head-top",hv);class mv extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=$e.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count"]}attributeChangedCallback(t,r,s){this.shadowRoot&&r!==s&&(t==="data-selected-tab"&&(this.selectedTab=s||"head_mid_lobby"),this.render())}handleTabClick(t,r){this.selectedTab=t,this.setAttribute("data-selected-tab",t),de.publish(r,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=$e.isDark,r=[{name:"head_mid_lobby",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_leaderboard",caption:"Leaderboards",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}];parseInt(this.getAttribute("data-active-count"));const s=0,a=n=>{const o=this.selectedTab===n.name,i=n.name==="head_mid_my";return`
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
        ${ft()}
        ${mr()}

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
        @media ${Uo.mobile} {
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
        ${r.map(n=>a(n)).join("")}
      </div>
    `,r.forEach(n=>{const o=this.shadowRoot.querySelector(`[data-tab="${n.name}"]`);o&&(o.addEventListener("click",()=>this.handleTabClick(n.name,n.topic)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleTabClick(n.name,n.topic))}))})}}customElements.define("bma-app-head-mid",mv);class gv extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=$e.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,r,s){if(this.shadowRoot&&r!==s){if(t==="data-selected-chip"){if(this.selectedChip=s||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,r){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),de.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:r,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(r=>{const s=r.getAttribute("data-chip")===this.selectedChip;r.classList.toggle("chip-selected",s),r.classList.toggle("chip-unselected",!s)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),r=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(".head-sports-container"),a=this.shadowRoot?.querySelector("#navPrev"),n=this.shadowRoot?.querySelector("#navNext");if(!t||!r||!s||!a||!n)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),i=o>8,l=t.scrollLeft<=4,c=t.scrollLeft>=o-4;s.classList.toggle("rail-has-overflow",i),t.classList.toggle("has-scroll",i),r.classList.toggle("has-overflow",i),r.classList.toggle("has-left-overflow",i&&!l),r.classList.toggle("has-right-overflow",i&&!c),a.classList.toggle("nav-disabled",!i||l),n.classList.toggle("nav-disabled",!i||c),a.setAttribute("aria-disabled",String(!i||l)),n.setAttribute("aria-disabled",String(!i||c)),a.tabIndex=!i||l?-1:0,n.tabIndex=!i||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),r=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!r||!s)return;const a=r.getBoundingClientRect(),n=s.getBoundingClientRect(),o=t.scrollWidth-t.clientWidth;if(n.left>=a.left&&n.right<=a.right)return;const i=12;let l;n.left<a.left?l=t.scrollLeft+(n.left-a.left)-i:l=t.scrollLeft+(n.right-a.right)+i,l=Math.max(0,Math.min(l,o)),!(Math.abs(t.scrollLeft-l)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:l,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const r=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=r-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const r=[...t.querySelectorAll(".sport-chip")];if(!r.length)return;const s=Math.max(0,t.scrollWidth-t.clientWidth);if(s<=8)return;const a=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,n=t.scrollLeft;let o=n,i=Number.POSITIVE_INFINITY;r.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-a,s)),d=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-t.clientWidth+a,s));[c,d].forEach(u=>{const p=Math.abs(u-n);p<i&&(i=p,o=u)})}),!(i<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",s=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=s.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),de.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const r=()=>{if(!this.isPointerDown)return;const s=Date.now()-this.dragStartTime,a=this.dragDistance>10||this.dragDistance>4&&s>180;this.isPointerDown=!1,t.style.cursor="grab",a&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",r),t.addEventListener("mouseup",r),t.addEventListener("mousemove",s=>{if(!this.isPointerDown)return;s.preventDefault();const n=(s.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(n)),t.scrollLeft=this.dragStartScrollLeft-n}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=$e.isDark,a=(we().appMeta?.sports||[]).filter(p=>p.active===!0),n=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],o=[...a].sort((p,f)=>{const _=p.title||p.description||"",y=f.title||f.description||"",w=n.indexOf(_),m=n.indexOf(y);return w!==-1&&m!==-1?w-m:w!==-1?-1:m!==-1?1:_.toLowerCase().localeCompare(y.toLowerCase())}),i=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...o],l=p=>{const f=this.selectedChip===p.key,_=p.key==="all";let y="";return _?y='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':y=`<bma-sport-icon sport="${p.key}" data-sport-group="${p.group}"></bma-sport-icon>`,`
        <div
          class="sport-chip ${f?"chip-selected":"chip-unselected"}"
          data-chip="${p.key}"
          role="button"
          tabindex="0"
          aria-label="${p.description||p.title}"
        >
          <div class="chip-circle">
            ${y}
          </div>
          <span class="chip-title">${p.title||p.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${ft()}
        ${mr()}

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
            ${i.map(p=>l(p)).join("")}
          </div>
        </div>
        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,i.forEach(p=>{const f=this.shadowRoot.querySelector(`[data-chip="${p.key}"]`);f&&f.addEventListener("click",()=>this.handleChipClick(p.key,p.group))});const c=this.shadowRoot.querySelector("#navPrev"),d=this.shadowRoot.querySelector("#navNext");c&&c.addEventListener("click",()=>this.scrollToPrev()),d&&d.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const u=this.shadowRoot.querySelector(".chips-container");u&&(u.scrollLeft=0),requestAnimationFrame(()=>{u&&(u.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",gv);class bv extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=$e.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count"]}attributeChangedCallback(t,r,s){this.shadowRoot&&r!==s&&(t==="data-selected-item"&&(this.selectedItem=s||"foot_all_sports"),this.render())}handleItemClick(t,r){this.selectedItem=t,this.setAttribute("data-selected-item",t),de.publish(r,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){$e.theme;const t=$e.isDark,r=[{name:"foot_all_sports",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboards",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}];parseInt(this.getAttribute("data-active-count"));const s=0,a=n=>{const o=this.selectedItem===n.name,i=n.name==="foot_my_tourneys";return`
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
        ${ft()}
        ${mr()}

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
        @media ${Uo.mobile} {
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
        ${r.map(n=>a(n)).join("")}
      </div>
    `,r.forEach(n=>{const o=this.shadowRoot.querySelector(`[data-item="${n.name}"]`);o&&(o.addEventListener("click",()=>this.handleItemClick(n.name,n.topic)),o.addEventListener("keypress",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.handleItemClick(n.name,n.topic))}))})}}customElements.define("bma-app-foot",bv);class yv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,r,s){r!==s&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(r){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",r),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const r=t.bet||[];if(r.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const s=r[0],a=s.short_title||"Match Info N/A",o=Object.keys(s).filter(h=>h!=="short_title")[0]||"Unknown Team",i=s[o],l=i.odds||"N/A",c=i.type||"N/A",d=parseFloat(i.stake||0).toFixed(2),u=parseFloat(i.payout||0).toFixed(2),p=i.reconciled!==!1,f=p&&parseFloat(u)>parseFloat(d),_=p&&parseFloat(u)<=parseFloat(d);let y="";p?f?y="win":_&&(y="loss"):y="unreconciled";const w=t.status_time?Ss.formatDateLocal(t.status_time):"";let m=o;if(c==="spread"&&i.point){const h=parseFloat(i.point)>0?`+${i.point}`:i.point;m=`${o} ${h}`}else c==="total"&&i.point&&(m=`${i.team==="over"?"Over":"Under"} ${i.point}`);this.shadowRoot.innerHTML=`
      <style>
        ${ft()}
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

      <div class="bet-existing-card ${y}">
        <div class="grid_header">
          <div class="match_desc">${a}</div>
          <div class="match_date">${w}</div>
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
    `}}customElements.define("bma-bet-existing",yv);Ts.init();window.BrandManager=Ts;const Ac=`
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
          <h3 class="pop-play__tourn-caption">Global Leaderboard</h3>
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Ac)}):document.body.insertAdjacentHTML("beforeend",Ac);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const pn=ph(Zy);pn.config.devtools=!1;pn.use(mh());pn.use(za);pn.mount("#app");(function(){const t=document.documentElement,r=()=>{const s=window.visualViewport&&window.visualViewport.height||window.innerHeight;t.style.setProperty("--vvh",s+"px")};r(),window.visualViewport&&(window.visualViewport.addEventListener("resize",r,{passive:!0}),window.visualViewport.addEventListener("scroll",r,{passive:!0})),window.addEventListener("resize",r,{passive:!0}),window.addEventListener("orientationchange",r,{passive:!0})})();(function(){if(!/[?&]debug=vvh\b/.test(window.location.search))return;const t=document.createElement("div");t.style.cssText="position:fixed;left:-9999px;top:0;width:1px;height:100vh;pointer-events:none;";const r=document.createElement("div");r.style.cssText="position:fixed;left:-9999px;top:0;width:1px;height:100dvh;pointer-events:none;";const s=document.createElement("div");s.style.cssText="position:fixed;left:-9999px;top:0;width:1px;height:100svh;pointer-events:none;",document.body.append(t,r,s);const a=document.createElement("div");a.id="vvh-debug-overlay",a.style.cssText=`
    position: fixed; bottom: 4px; right: 4px; z-index: 2147483647;
    padding: 6px 8px; background: rgba(0,0,0,0.85); color: #0F0;
    font: 10px/1.3 monospace; pointer-events: none;
    border: 1px solid #0F0; border-radius: 4px; max-width: 70vw;
    white-space: pre; text-align: left;
  `,document.body.appendChild(a);const n=()=>{const i=window.visualViewport,l=document.querySelector("neodigm-sodapop.ndsp__opened")||document.querySelector("neodigm-sodapop"),c=document.querySelector(".bet-grid__toggle-container"),d=l?l.getBoundingClientRect():null,u=c?c.getBoundingClientRect():null,p=getComputedStyle(document.documentElement).getPropertyValue("--vvh").trim();a.textContent=[`innerH: ${window.innerHeight}`,`visualVP: ${i?i.height.toFixed(0):"—"} off:${i?i.offsetTop.toFixed(0):"—"}`,`100vh: ${t.offsetHeight}`,`100dvh: ${r.offsetHeight}`,`100svh: ${s.offsetHeight}`,`--vvh: ${p||"—"}`,d?`pop t:${d.top.toFixed(0)} b:${d.bottom.toFixed(0)} h:${d.height.toFixed(0)}`:"pop: (none)",u?`btn t:${u.top.toFixed(0)} b:${u.bottom.toFixed(0)}`:"btn: (hidden)"].join(`
`)};n();const o=()=>{n(),requestAnimationFrame(o)};requestAnimationFrame(o)})();(function(){let t=0,r=!1;const s=()=>{r||(t=window.scrollY||document.documentElement.scrollTop||0,document.body.style.position="fixed",document.body.style.top=`-${t}px`,document.body.style.left="0",document.body.style.right="0",document.body.style.width="100%",r=!0)},a=()=>{r&&(document.body.style.position="",document.body.style.top="",document.body.style.left="",document.body.style.right="",document.body.style.width="",window.scrollTo(0,t),r=!1)},n=new MutationObserver(()=>{document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']")?s():a()}),o=()=>{n.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]})};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})();document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(r=>{neodigmCarousel.init().nav({id:r.id,nav:"resize"},!1)})},303)})});
