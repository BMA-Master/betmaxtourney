(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const fc="modulepreload",hc=function(e){return"/bma-core/"+e},Jo={},kn=function(t,a,s){let n=Promise.resolve();if(a&&a.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var r=c;document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");n=c(a.map(u=>{if(u=hc(u),u in Jo)return;Jo[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":fc,d||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((g,h)=>{f.addEventListener("load",g),f.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${u}`)))})}))}function o(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return n.then(i=>{for(const l of i||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})};function To(e){const t=Object.create(null);for(const a of e.split(","))t[a]=1;return a=>a in t}const Re={},Ra=[],Dt=()=>{},mi=()=>!1,on=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),ko=e=>e.startsWith("onUpdate:"),Ke=Object.assign,So=(e,t)=>{const a=e.indexOf(t);a>-1&&e.splice(a,1)},gc=Object.prototype.hasOwnProperty,Le=(e,t)=>gc.call(e,t),ye=Array.isArray,$a=e=>bs(e)==="[object Map]",rn=e=>bs(e)==="[object Set]",Xo=e=>bs(e)==="[object Date]",we=e=>typeof e=="function",Ue=e=>typeof e=="string",$t=e=>typeof e=="symbol",De=e=>e!==null&&typeof e=="object",bi=e=>(De(e)||we(e))&&we(e.then)&&we(e.catch),_i=Object.prototype.toString,bs=e=>_i.call(e),mc=e=>bs(e).slice(8,-1),vi=e=>bs(e)==="[object Object]",Eo=e=>Ue(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Xa=To(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ln=e=>{const t=Object.create(null);return(a=>t[a]||(t[a]=e(a)))},bc=/-\w/g,wt=ln(e=>e.replace(bc,t=>t.slice(1).toUpperCase())),_c=/\B([A-Z])/g,pa=ln(e=>e.replace(_c,"-$1").toLowerCase()),cn=ln(e=>e.charAt(0).toUpperCase()+e.slice(1)),Sn=ln(e=>e?`on${cn(e)}`:""),ia=(e,t)=>!Object.is(e,t),Ds=(e,...t)=>{for(let a=0;a<e.length;a++)e[a](...t)},yi=(e,t,a,s=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:s,value:a})},Ao=e=>{const t=parseFloat(e);return isNaN(t)?e:t},vc=e=>{const t=Ue(e)?Number(e):NaN;return isNaN(t)?e:t};let Qo;const dn=()=>Qo||(Qo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function un(e){if(ye(e)){const t={};for(let a=0;a<e.length;a++){const s=e[a],n=Ue(s)?Tc(s):un(s);if(n)for(const o in n)t[o]=n[o]}return t}else if(Ue(e)||De(e))return e}const yc=/;(?![^(]*\))/g,wc=/:([^]+)/,xc=/\/\*[^]*?\*\//g;function Tc(e){const t={};return e.replace(xc,"").split(yc).forEach(a=>{if(a){const s=a.split(wc);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function qe(e){let t="";if(Ue(e))t=e;else if(ye(e))for(let a=0;a<e.length;a++){const s=qe(e[a]);s&&(t+=s+" ")}else if(De(e))for(const a in e)e[a]&&(t+=a+" ");return t.trim()}const kc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Sc=To(kc);function wi(e){return!!e||e===""}function Ec(e,t){if(e.length!==t.length)return!1;let a=!0;for(let s=0;a&&s<e.length;s++)a=pn(e[s],t[s]);return a}function pn(e,t){if(e===t)return!0;let a=Xo(e),s=Xo(t);if(a||s)return a&&s?e.getTime()===t.getTime():!1;if(a=$t(e),s=$t(t),a||s)return e===t;if(a=ye(e),s=ye(t),a||s)return a&&s?Ec(e,t):!1;if(a=De(e),s=De(t),a||s){if(!a||!s)return!1;const n=Object.keys(e).length,o=Object.keys(t).length;if(n!==o)return!1;for(const r in e){const i=e.hasOwnProperty(r),l=t.hasOwnProperty(r);if(i&&!l||!i&&l||!pn(e[r],t[r]))return!1}}return String(e)===String(t)}function xi(e,t){return e.findIndex(a=>pn(a,t))}const Ti=e=>!!(e&&e.__v_isRef===!0),be=e=>Ue(e)?e:e==null?"":ye(e)||De(e)&&(e.toString===_i||!we(e.toString))?Ti(e)?be(e.value):JSON.stringify(e,ki,2):String(e),ki=(e,t)=>Ti(t)?ki(e,t.value):$a(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((a,[s,n],o)=>(a[En(s,o)+" =>"]=n,a),{})}:rn(t)?{[`Set(${t.size})`]:[...t.values()].map(a=>En(a))}:$t(t)?En(t):De(t)&&!ye(t)&&!vi(t)?String(t):t,En=(e,t="")=>{var a;return $t(e)?`Symbol(${(a=e.description)!=null?a:t})`:e};let Xe;class Si{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Xe,!t&&Xe&&(this.index=(Xe.scopes||(Xe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].pause();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,a;if(this.scopes)for(t=0,a=this.scopes.length;t<a;t++)this.scopes[t].resume();for(t=0,a=this.effects.length;t<a;t++)this.effects[t].resume()}}run(t){if(this._active){const a=Xe;try{return Xe=this,t()}finally{Xe=a}}}on(){++this._on===1&&(this.prevScope=Xe,Xe=this)}off(){this._on>0&&--this._on===0&&(Xe=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(this.effects.length=0,a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Ei(e){return new Si(e)}function Ai(){return Xe}function Ac(e,t=!1){Xe&&Xe.cleanups.push(e)}let $e;const An=new WeakSet;class Ci{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Xe&&Xe.active&&Xe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,An.has(this)&&(An.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Oi(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Zo(this),Li(this);const t=$e,a=xt;$e=this,xt=!0;try{return this.fn()}finally{Mi(this),$e=t,xt=a,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Oo(t);this.deps=this.depsTail=void 0,Zo(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?An.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){eo(this)&&this.run()}get dirty(){return eo(this)}}let Pi=0,Qa,Za;function Oi(e,t=!1){if(e.flags|=8,t){e.next=Za,Za=e;return}e.next=Qa,Qa=e}function Co(){Pi++}function Po(){if(--Pi>0)return;if(Za){let t=Za;for(Za=void 0;t;){const a=t.next;t.next=void 0,t.flags&=-9,t=a}}let e;for(;Qa;){let t=Qa;for(Qa=void 0;t;){const a=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(s){e||(e=s)}t=a}}if(e)throw e}function Li(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Mi(e){let t,a=e.depsTail,s=a;for(;s;){const n=s.prevDep;s.version===-1?(s===a&&(a=n),Oo(s),Cc(s)):t=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}e.deps=t,e.depsTail=a}function eo(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Di(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Di(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===ls)||(e.globalVersion=ls,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!eo(e))))return;e.flags|=2;const t=e.dep,a=$e,s=xt;$e=e,xt=!0;try{Li(e);const n=e.fn(e._value);(t.version===0||ia(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{$e=a,xt=s,Mi(e),e.flags&=-3}}function Oo(e,t=!1){const{dep:a,prevSub:s,nextSub:n}=e;if(s&&(s.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=s,e.nextSub=void 0),a.subs===e&&(a.subs=s,!s&&a.computed)){a.computed.flags&=-5;for(let o=a.computed.deps;o;o=o.nextDep)Oo(o,!0)}!t&&!--a.sc&&a.map&&a.map.delete(a.key)}function Cc(e){const{prevDep:t,nextDep:a}=e;t&&(t.nextDep=a,e.prevDep=void 0),a&&(a.prevDep=t,e.nextDep=void 0)}let xt=!0;const Ri=[];function Yt(){Ri.push(xt),xt=!1}function Kt(){const e=Ri.pop();xt=e===void 0?!0:e}function Zo(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const a=$e;$e=void 0;try{t()}finally{$e=a}}}let ls=0;class Pc{constructor(t,a){this.sub=t,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Lo{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!$e||!xt||$e===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==$e)a=this.activeLink=new Pc($e,this),$e.deps?(a.prevDep=$e.depsTail,$e.depsTail.nextDep=a,$e.depsTail=a):$e.deps=$e.depsTail=a,$i(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const s=a.nextDep;s.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=s),a.prevDep=$e.depsTail,a.nextDep=void 0,$e.depsTail.nextDep=a,$e.depsTail=a,$e.deps===a&&($e.deps=s)}return a}trigger(t){this.version++,ls++,this.notify(t)}notify(t){Co();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Po()}}}function $i(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let s=t.deps;s;s=s.nextDep)$i(s)}const a=e.dep.subs;a!==e&&(e.prevSub=a,a&&(a.nextSub=e)),e.dep.subs=e}}const Hs=new WeakMap,ka=Symbol(""),to=Symbol(""),cs=Symbol("");function Qe(e,t,a){if(xt&&$e){let s=Hs.get(e);s||Hs.set(e,s=new Map);let n=s.get(a);n||(s.set(a,n=new Lo),n.map=s,n.key=a),n.track()}}function Vt(e,t,a,s,n,o){const r=Hs.get(e);if(!r){ls++;return}const i=l=>{l&&l.trigger()};if(Co(),t==="clear")r.forEach(i);else{const l=ye(e),c=l&&Eo(a);if(l&&a==="length"){const u=Number(s);r.forEach((d,p)=>{(p==="length"||p===cs||!$t(p)&&p>=u)&&i(d)})}else switch((a!==void 0||r.has(void 0))&&i(r.get(a)),c&&i(r.get(cs)),t){case"add":l?c&&i(r.get("length")):(i(r.get(ka)),$a(e)&&i(r.get(to)));break;case"delete":l||(i(r.get(ka)),$a(e)&&i(r.get(to)));break;case"set":$a(e)&&i(r.get(ka));break}}Po()}function Oc(e,t){const a=Hs.get(e);return a&&a.get(t)}function Aa(e){const t=Ee(e);return t===e?t:(Qe(t,"iterate",cs),vt(e)?t:t.map(We))}function fn(e){return Qe(e=Ee(e),"iterate",cs),e}const Lc={__proto__:null,[Symbol.iterator](){return Cn(this,Symbol.iterator,We)},concat(...e){return Aa(this).concat(...e.map(t=>ye(t)?Aa(t):t))},entries(){return Cn(this,"entries",e=>(e[1]=We(e[1]),e))},every(e,t){return It(this,"every",e,t,void 0,arguments)},filter(e,t){return It(this,"filter",e,t,a=>a.map(We),arguments)},find(e,t){return It(this,"find",e,t,We,arguments)},findIndex(e,t){return It(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return It(this,"findLast",e,t,We,arguments)},findLastIndex(e,t){return It(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return It(this,"forEach",e,t,void 0,arguments)},includes(...e){return Pn(this,"includes",e)},indexOf(...e){return Pn(this,"indexOf",e)},join(e){return Aa(this).join(e)},lastIndexOf(...e){return Pn(this,"lastIndexOf",e)},map(e,t){return It(this,"map",e,t,void 0,arguments)},pop(){return ja(this,"pop")},push(...e){return ja(this,"push",e)},reduce(e,...t){return er(this,"reduce",e,t)},reduceRight(e,...t){return er(this,"reduceRight",e,t)},shift(){return ja(this,"shift")},some(e,t){return It(this,"some",e,t,void 0,arguments)},splice(...e){return ja(this,"splice",e)},toReversed(){return Aa(this).toReversed()},toSorted(e){return Aa(this).toSorted(e)},toSpliced(...e){return Aa(this).toSpliced(...e)},unshift(...e){return ja(this,"unshift",e)},values(){return Cn(this,"values",We)}};function Cn(e,t,a){const s=fn(e),n=s[t]();return s!==e&&!vt(e)&&(n._next=n.next,n.next=()=>{const o=n._next();return o.done||(o.value=a(o.value)),o}),n}const Mc=Array.prototype;function It(e,t,a,s,n,o){const r=fn(e),i=r!==e&&!vt(e),l=r[t];if(l!==Mc[t]){const d=l.apply(e,o);return i?We(d):d}let c=a;r!==e&&(i?c=function(d,p){return a.call(this,We(d),p,e)}:a.length>2&&(c=function(d,p){return a.call(this,d,p,e)}));const u=l.call(r,c,s);return i&&n?n(u):u}function er(e,t,a,s){const n=fn(e);let o=a;return n!==e&&(vt(e)?a.length>3&&(o=function(r,i,l){return a.call(this,r,i,l,e)}):o=function(r,i,l){return a.call(this,r,We(i),l,e)}),n[t](o,...s)}function Pn(e,t,a){const s=Ee(e);Qe(s,"iterate",cs);const n=s[t](...a);return(n===-1||n===!1)&&Ro(a[0])?(a[0]=Ee(a[0]),s[t](...a)):n}function ja(e,t,a=[]){Yt(),Co();const s=Ee(e)[t].apply(e,a);return Po(),Kt(),s}const Dc=To("__proto__,__v_isRef,__isVue"),Ii=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter($t));function Rc(e){$t(e)||(e=String(e));const t=Ee(this);return Qe(t,"has",e),t.hasOwnProperty(e)}class Ni{constructor(t=!1,a=!1){this._isReadonly=t,this._isShallow=a}get(t,a,s){if(a==="__v_skip")return t.__v_skip;const n=this._isReadonly,o=this._isShallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return o;if(a==="__v_raw")return s===(n?o?jc:Hi:o?zi:Fi).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(s)?t:void 0;const r=ye(t);if(!n){let l;if(r&&(l=Lc[a]))return l;if(a==="hasOwnProperty")return Rc}const i=Reflect.get(t,a,je(t)?t:s);if(($t(a)?Ii.has(a):Dc(a))||(n||Qe(t,"get",a),o))return i;if(je(i)){const l=r&&Eo(a)?i:i.value;return n&&De(l)?so(l):l}return De(i)?n?so(i):Ot(i):i}}class Bi extends Ni{constructor(t=!1){super(!1,t)}set(t,a,s,n){let o=t[a];if(!this._isShallow){const l=ca(o);if(!vt(s)&&!ca(s)&&(o=Ee(o),s=Ee(s)),!ye(t)&&je(o)&&!je(s))return l||(o.value=s),!0}const r=ye(t)&&Eo(a)?Number(a)<t.length:Le(t,a),i=Reflect.set(t,a,s,je(t)?t:n);return t===Ee(n)&&(r?ia(s,o)&&Vt(t,"set",a,s):Vt(t,"add",a,s)),i}deleteProperty(t,a){const s=Le(t,a);t[a];const n=Reflect.deleteProperty(t,a);return n&&s&&Vt(t,"delete",a,void 0),n}has(t,a){const s=Reflect.has(t,a);return(!$t(a)||!Ii.has(a))&&Qe(t,"has",a),s}ownKeys(t){return Qe(t,"iterate",ye(t)?"length":ka),Reflect.ownKeys(t)}}class $c extends Ni{constructor(t=!1){super(!0,t)}set(t,a){return!0}deleteProperty(t,a){return!0}}const Ic=new Bi,Nc=new $c,Bc=new Bi(!0);const ao=e=>e,xs=e=>Reflect.getPrototypeOf(e);function Fc(e,t,a){return function(...s){const n=this.__v_raw,o=Ee(n),r=$a(o),i=e==="entries"||e===Symbol.iterator&&r,l=e==="keys"&&r,c=n[e](...s),u=a?ao:t?Us:We;return!t&&Qe(o,"iterate",l?to:ka),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:i?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Ts(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function zc(e,t){const a={get(n){const o=this.__v_raw,r=Ee(o),i=Ee(n);e||(ia(n,i)&&Qe(r,"get",n),Qe(r,"get",i));const{has:l}=xs(r),c=t?ao:e?Us:We;if(l.call(r,n))return c(o.get(n));if(l.call(r,i))return c(o.get(i));o!==r&&o.get(n)},get size(){const n=this.__v_raw;return!e&&Qe(Ee(n),"iterate",ka),n.size},has(n){const o=this.__v_raw,r=Ee(o),i=Ee(n);return e||(ia(n,i)&&Qe(r,"has",n),Qe(r,"has",i)),n===i?o.has(n):o.has(n)||o.has(i)},forEach(n,o){const r=this,i=r.__v_raw,l=Ee(i),c=t?ao:e?Us:We;return!e&&Qe(l,"iterate",ka),i.forEach((u,d)=>n.call(o,c(u),c(d),r))}};return Ke(a,e?{add:Ts("add"),set:Ts("set"),delete:Ts("delete"),clear:Ts("clear")}:{add(n){!t&&!vt(n)&&!ca(n)&&(n=Ee(n));const o=Ee(this);return xs(o).has.call(o,n)||(o.add(n),Vt(o,"add",n,n)),this},set(n,o){!t&&!vt(o)&&!ca(o)&&(o=Ee(o));const r=Ee(this),{has:i,get:l}=xs(r);let c=i.call(r,n);c||(n=Ee(n),c=i.call(r,n));const u=l.call(r,n);return r.set(n,o),c?ia(o,u)&&Vt(r,"set",n,o):Vt(r,"add",n,o),this},delete(n){const o=Ee(this),{has:r,get:i}=xs(o);let l=r.call(o,n);l||(n=Ee(n),l=r.call(o,n)),i&&i.call(o,n);const c=o.delete(n);return l&&Vt(o,"delete",n,void 0),c},clear(){const n=Ee(this),o=n.size!==0,r=n.clear();return o&&Vt(n,"clear",void 0,void 0),r}}),["keys","values","entries",Symbol.iterator].forEach(n=>{a[n]=Fc(n,e,t)}),a}function Mo(e,t){const a=zc(e,t);return(s,n,o)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?s:Reflect.get(Le(a,n)&&n in s?a:s,n,o)}const Hc={get:Mo(!1,!1)},Uc={get:Mo(!1,!0)},Gc={get:Mo(!0,!1)};const Fi=new WeakMap,zi=new WeakMap,Hi=new WeakMap,jc=new WeakMap;function Vc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function qc(e){return e.__v_skip||!Object.isExtensible(e)?0:Vc(mc(e))}function Ot(e){return ca(e)?e:Do(e,!1,Ic,Hc,Fi)}function Ui(e){return Do(e,!1,Bc,Uc,zi)}function so(e){return Do(e,!0,Nc,Gc,Hi)}function Do(e,t,a,s,n){if(!De(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=qc(e);if(o===0)return e;const r=n.get(e);if(r)return r;const i=new Proxy(e,o===2?s:a);return n.set(e,i),i}function la(e){return ca(e)?la(e.__v_raw):!!(e&&e.__v_isReactive)}function ca(e){return!!(e&&e.__v_isReadonly)}function vt(e){return!!(e&&e.__v_isShallow)}function Ro(e){return e?!!e.__v_raw:!1}function Ee(e){const t=e&&e.__v_raw;return t?Ee(t):e}function $o(e){return!Le(e,"__v_skip")&&Object.isExtensible(e)&&yi(e,"__v_skip",!0),e}const We=e=>De(e)?Ot(e):e,Us=e=>De(e)?so(e):e;function je(e){return e?e.__v_isRef===!0:!1}function Pe(e){return Gi(e,!1)}function Yc(e){return Gi(e,!0)}function Gi(e,t){return je(e)?e:new Kc(e,t)}class Kc{constructor(t,a){this.dep=new Lo,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?t:Ee(t),this._value=a?t:We(t),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(t){const a=this._rawValue,s=this.__v_isShallow||vt(t)||ca(t);t=s?t:Ee(t),ia(t,a)&&(this._rawValue=t,this._value=s?t:We(t),this.dep.trigger())}}function ot(e){return je(e)?e.value:e}const Wc={get:(e,t,a)=>t==="__v_raw"?e:ot(Reflect.get(e,t,a)),set:(e,t,a,s)=>{const n=e[t];return je(n)&&!je(a)?(n.value=a,!0):Reflect.set(e,t,a,s)}};function ji(e){return la(e)?e:new Proxy(e,Wc)}function Jc(e){const t=ye(e)?new Array(e.length):{};for(const a in e)t[a]=Qc(e,a);return t}class Xc{constructor(t,a,s){this._object=t,this._key=a,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Oc(Ee(this._object),this._key)}}function Qc(e,t,a){const s=e[t];return je(s)?s:new Xc(e,t,a)}class Zc{constructor(t,a,s){this.fn=t,this.setter=a,this._value=void 0,this.dep=new Lo(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=ls-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return Oi(this,!0),!0}get value(){const t=this.dep.track();return Di(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function ed(e,t,a=!1){let s,n;return we(e)?s=e:(s=e.get,n=e.set),new Zc(s,n,a)}const ks={},Gs=new WeakMap;let va;function td(e,t=!1,a=va){if(a){let s=Gs.get(a);s||Gs.set(a,s=[]),s.push(e)}}function ad(e,t,a=Re){const{immediate:s,deep:n,once:o,scheduler:r,augmentJob:i,call:l}=a,c=E=>n?E:vt(E)||n===!1||n===0?qt(E,1):qt(E);let u,d,p,f,g=!1,h=!1;if(je(e)?(d=()=>e.value,g=vt(e)):la(e)?(d=()=>c(e),g=!0):ye(e)?(h=!0,g=e.some(E=>la(E)||vt(E)),d=()=>e.map(E=>{if(je(E))return E.value;if(la(E))return c(E);if(we(E))return l?l(E,2):E()})):we(e)?t?d=l?()=>l(e,2):e:d=()=>{if(p){Yt();try{p()}finally{Kt()}}const E=va;va=u;try{return l?l(e,3,[f]):e(f)}finally{va=E}}:d=Dt,t&&n){const E=d,$=n===!0?1/0:n;d=()=>qt(E(),$)}const k=Ai(),m=()=>{u.stop(),k&&k.active&&So(k.effects,u)};if(o&&t){const E=t;t=(...$)=>{E(...$),m()}}let v=h?new Array(e.length).fill(ks):ks;const w=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(t){const $=u.run();if(n||g||(h?$.some((D,M)=>ia(D,v[M])):ia($,v))){p&&p();const D=va;va=u;try{const M=[$,v===ks?void 0:h&&v[0]===ks?[]:v,f];v=$,l?l(t,3,M):t(...M)}finally{va=D}}}else u.run()};return i&&i(w),u=new Ci(d),u.scheduler=r?()=>r(w,!1):w,f=E=>td(E,!1,u),p=u.onStop=()=>{const E=Gs.get(u);if(E){if(l)l(E,4);else for(const $ of E)$();Gs.delete(u)}},t?s?w(!0):v=u.run():r?r(w.bind(null,!0),!0):u.run(),m.pause=u.pause.bind(u),m.resume=u.resume.bind(u),m.stop=m,m}function qt(e,t=1/0,a){if(t<=0||!De(e)||e.__v_skip||(a=a||new Map,(a.get(e)||0)>=t))return e;if(a.set(e,t),t--,je(e))qt(e.value,t,a);else if(ye(e))for(let s=0;s<e.length;s++)qt(e[s],t,a);else if(rn(e)||$a(e))e.forEach(s=>{qt(s,t,a)});else if(vi(e)){for(const s in e)qt(e[s],t,a);for(const s of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,s)&&qt(e[s],t,a)}return e}function _s(e,t,a,s){try{return s?e(...s):e()}catch(n){hn(n,t,a)}}function Tt(e,t,a,s){if(we(e)){const n=_s(e,t,a,s);return n&&bi(n)&&n.catch(o=>{hn(o,t,a)}),n}if(ye(e)){const n=[];for(let o=0;o<e.length;o++)n.push(Tt(e[o],t,a,s));return n}}function hn(e,t,a,s=!0){const n=t?t.vnode:null,{errorHandler:o,throwUnhandledErrorInProduction:r}=t&&t.appContext.config||Re;if(t){let i=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,l,c)===!1)return}i=i.parent}if(o){Yt(),_s(o,null,10,[e,l,c]),Kt();return}}sd(e,a,n,s,r)}function sd(e,t,a,s=!0,n=!1){if(n)throw e;console.error(e)}const nt=[];let At=-1;const Ia=[];let aa=null,Ma=0;const Vi=Promise.resolve();let js=null;function Io(e){const t=js||Vi;return e?t.then(this?e.bind(this):e):t}function nd(e){let t=At+1,a=nt.length;for(;t<a;){const s=t+a>>>1,n=nt[s],o=ds(n);o<e||o===e&&n.flags&2?t=s+1:a=s}return t}function No(e){if(!(e.flags&1)){const t=ds(e),a=nt[nt.length-1];!a||!(e.flags&2)&&t>=ds(a)?nt.push(e):nt.splice(nd(t),0,e),e.flags|=1,qi()}}function qi(){js||(js=Vi.then(Ki))}function od(e){ye(e)?Ia.push(...e):aa&&e.id===-1?aa.splice(Ma+1,0,e):e.flags&1||(Ia.push(e),e.flags|=1),qi()}function tr(e,t,a=At+1){for(;a<nt.length;a++){const s=nt[a];if(s&&s.flags&2){if(e&&s.id!==e.uid)continue;nt.splice(a,1),a--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Yi(e){if(Ia.length){const t=[...new Set(Ia)].sort((a,s)=>ds(a)-ds(s));if(Ia.length=0,aa){aa.push(...t);return}for(aa=t,Ma=0;Ma<aa.length;Ma++){const a=aa[Ma];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}aa=null,Ma=0}}const ds=e=>e.id==null?e.flags&2?-1:1/0:e.id;function Ki(e){try{for(At=0;At<nt.length;At++){const t=nt[At];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),_s(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;At<nt.length;At++){const t=nt[At];t&&(t.flags&=-2)}At=-1,nt.length=0,Yi(),js=null,(nt.length||Ia.length)&&Ki()}}let ft=null,Wi=null;function Vs(e){const t=ft;return ft=e,Wi=e&&e.type.__scopeId||null,t}function no(e,t=ft,a){if(!t||e._n)return e;const s=(...n)=>{s._d&&Ks(-1);const o=Vs(t);let r;try{r=e(...n)}finally{Vs(o),s._d&&Ks(1)}return r};return s._n=!0,s._c=!0,s._d=!0,s}function Lt(e,t){if(ft===null)return e;const a=vn(ft),s=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[o,r,i,l=Re]=t[n];o&&(we(o)&&(o={mounted:o,updated:o}),o.deep&&qt(r),s.push({dir:o,instance:a,value:r,oldValue:void 0,arg:i,modifiers:l}))}return e}function ga(e,t,a,s){const n=e.dirs,o=t&&t.dirs;for(let r=0;r<n.length;r++){const i=n[r];o&&(i.oldValue=o[r].value);let l=i.dir[s];l&&(Yt(),Tt(l,a,8,[e.el,i,e,t]),Kt())}}const rd=Symbol("_vte"),Ji=e=>e.__isTeleport,Gt=Symbol("_leaveCb"),Ss=Symbol("_enterCb");function id(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return it(()=>{e.isMounted=!0}),ol(()=>{e.isUnmounting=!0}),e}const mt=[Function,Array],Xi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:mt,onEnter:mt,onAfterEnter:mt,onEnterCancelled:mt,onBeforeLeave:mt,onLeave:mt,onAfterLeave:mt,onLeaveCancelled:mt,onBeforeAppear:mt,onAppear:mt,onAfterAppear:mt,onAppearCancelled:mt},Qi=e=>{const t=e.subTree;return t.component?Qi(t.component):t},ld={name:"BaseTransition",props:Xi,setup(e,{slots:t}){const a=Ho(),s=id();return()=>{const n=t.default&&tl(t.default(),!0);if(!n||!n.length)return;const o=Zi(n),r=Ee(e),{mode:i}=r;if(s.isLeaving)return On(o);const l=ar(o);if(!l)return On(o);let c=oo(l,r,s,a,d=>c=d);l.type!==rt&&us(l,c);let u=a.subTree&&ar(a.subTree);if(u&&u.type!==rt&&!ya(u,l)&&Qi(a).type!==rt){let d=oo(u,r,s,a);if(us(u,d),i==="out-in"&&l.type!==rt)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,a.job.flags&8||a.update(),delete d.afterLeave,u=void 0},On(o);i==="in-out"&&l.type!==rt?d.delayLeave=(p,f,g)=>{const h=el(s,u);h[String(u.key)]=u,p[Gt]=()=>{f(),p[Gt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return o}}};function Zi(e){let t=e[0];if(e.length>1){for(const a of e)if(a.type!==rt){t=a;break}}return t}const cd=ld;function el(e,t){const{leavingVNodes:a}=e;let s=a.get(t.type);return s||(s=Object.create(null),a.set(t.type,s)),s}function oo(e,t,a,s,n){const{appear:o,mode:r,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:h,onBeforeAppear:k,onAppear:m,onAfterAppear:v,onAppearCancelled:w}=t,E=String(e.key),$=el(a,e),D=(I,U)=>{I&&Tt(I,s,9,U)},M=(I,U)=>{const j=U[1];D(I,U),ye(I)?I.every(F=>F.length<=1)&&j():I.length<=1&&j()},V={mode:r,persisted:i,beforeEnter(I){let U=l;if(!a.isMounted)if(o)U=k||l;else return;I[Gt]&&I[Gt](!0);const j=$[E];j&&ya(e,j)&&j.el[Gt]&&j.el[Gt](),D(U,[I])},enter(I){let U=c,j=u,F=d;if(!a.isMounted)if(o)U=m||c,j=v||u,F=w||d;else return;let G=!1;const C=I[Ss]=A=>{G||(G=!0,A?D(F,[I]):D(j,[I]),V.delayedLeave&&V.delayedLeave(),I[Ss]=void 0)};U?M(U,[I,C]):C()},leave(I,U){const j=String(e.key);if(I[Ss]&&I[Ss](!0),a.isUnmounting)return U();D(p,[I]);let F=!1;const G=I[Gt]=C=>{F||(F=!0,U(),C?D(h,[I]):D(g,[I]),I[Gt]=void 0,$[j]===e&&delete $[j])};$[j]=e,f?M(f,[I,G]):G()},clone(I){const U=oo(I,t,a,s,n);return n&&n(U),U}};return V}function On(e){if(gn(e))return e=da(e),e.children=null,e}function ar(e){if(!gn(e))return Ji(e.type)&&e.children?Zi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:a}=e;if(a){if(t&16)return a[0];if(t&32&&we(a.default))return a.default()}}function us(e,t){e.shapeFlag&6&&e.component?(e.transition=t,us(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function tl(e,t=!1,a){let s=[],n=0;for(let o=0;o<e.length;o++){let r=e[o];const i=a==null?r.key:String(a)+String(r.key!=null?r.key:o);r.type===Ie?(r.patchFlag&128&&n++,s=s.concat(tl(r.children,t,i))):(t||r.type!==rt)&&s.push(i!=null?da(r,{key:i}):r)}if(n>1)for(let o=0;o<s.length;o++)s[o].patchFlag=-2;return s}function al(e,t){return we(e)?Ke({name:e.name},t,{setup:e}):e}function sl(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const qs=new WeakMap;function es(e,t,a,s,n=!1){if(ye(e)){e.forEach((g,h)=>es(g,t&&(ye(t)?t[h]:t),a,s,n));return}if(ts(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&es(e,t,a,s.component.subTree);return}const o=s.shapeFlag&4?vn(s.component):s.el,r=n?null:o,{i,r:l}=e,c=t&&t.r,u=i.refs===Re?i.refs={}:i.refs,d=i.setupState,p=Ee(d),f=d===Re?mi:g=>Le(p,g);if(c!=null&&c!==l){if(sr(t),Ue(c))u[c]=null,f(c)&&(d[c]=null);else if(je(c)){c.value=null;const g=t;g.k&&(u[g.k]=null)}}if(we(l))_s(l,i,12,[r,u]);else{const g=Ue(l),h=je(l);if(g||h){const k=()=>{if(e.f){const m=g?f(l)?d[l]:u[l]:l.value;if(n)ye(m)&&So(m,o);else if(ye(m))m.includes(o)||m.push(o);else if(g)u[l]=[o],f(l)&&(d[l]=u[l]);else{const v=[o];l.value=v,e.k&&(u[e.k]=v)}}else g?(u[l]=r,f(l)&&(d[l]=r)):h&&(l.value=r,e.k&&(u[e.k]=r))};if(r){const m=()=>{k(),qs.delete(e)};m.id=-1,qs.set(e,m),ut(m,a)}else sr(e),k()}}}function sr(e){const t=qs.get(e);t&&(t.flags|=8,qs.delete(e))}dn().requestIdleCallback;dn().cancelIdleCallback;const ts=e=>!!e.type.__asyncLoader,gn=e=>e.type.__isKeepAlive;function dd(e,t){nl(e,"a",t)}function ud(e,t){nl(e,"da",t)}function nl(e,t,a=Ze){const s=e.__wdc||(e.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(mn(t,s,a),a){let n=a.parent;for(;n&&n.parent;)gn(n.parent.vnode)&&pd(s,t,a,n),n=n.parent}}function pd(e,t,a,s){const n=mn(t,e,s,!0);Xt(()=>{So(s[t],n)},a)}function mn(e,t,a=Ze,s=!1){if(a){const n=a[e]||(a[e]=[]),o=t.__weh||(t.__weh=(...r)=>{Yt();const i=vs(a),l=Tt(t,a,e,r);return i(),Kt(),l});return s?n.unshift(o):n.push(o),o}}const Jt=e=>(t,a=Ze)=>{(!fs||e==="sp")&&mn(e,(...s)=>t(...s),a)},fd=Jt("bm"),it=Jt("m"),hd=Jt("bu"),gd=Jt("u"),ol=Jt("bum"),Xt=Jt("um"),md=Jt("sp"),bd=Jt("rtg"),_d=Jt("rtc");function vd(e,t=Ze){mn("ec",e,t)}const yd="components",rl=Symbol.for("v-ndc");function wd(e){return Ue(e)?xd(yd,e,!1)||e:e||rl}function xd(e,t,a=!0,s=!1){const n=ft||Ze;if(n){const o=n.type;{const i=du(o,!1);if(i&&(i===t||i===wt(t)||i===cn(wt(t))))return o}const r=nr(n[e]||o[e],t)||nr(n.appContext[e],t);return!r&&s?o:r}}function nr(e,t){return e&&(e[t]||e[wt(t)]||e[cn(wt(t))])}function zt(e,t,a,s){let n;const o=a,r=ye(e);if(r||Ue(e)){const i=r&&la(e);let l=!1,c=!1;i&&(l=!vt(e),c=ca(e),e=fn(e)),n=new Array(e.length);for(let u=0,d=e.length;u<d;u++)n[u]=t(l?c?Us(We(e[u])):We(e[u]):e[u],u,void 0,o)}else if(typeof e=="number"){n=new Array(e);for(let i=0;i<e;i++)n[i]=t(i+1,i,void 0,o)}else if(De(e))if(e[Symbol.iterator])n=Array.from(e,(i,l)=>t(i,l,void 0,o));else{const i=Object.keys(e);n=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];n[l]=t(e[u],u,l,o)}}else n=[];return n}const ro=e=>e?Al(e)?vn(e):ro(e.parent):null,as=Ke(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>ro(e.parent),$root:e=>ro(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>ll(e),$forceUpdate:e=>e.f||(e.f=()=>{No(e.update)}),$nextTick:e=>e.n||(e.n=Io.bind(e.proxy)),$watch:e=>jd.bind(e)}),Ln=(e,t)=>e!==Re&&!e.__isScriptSetup&&Le(e,t),Td={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:a,setupState:s,data:n,props:o,accessCache:r,type:i,appContext:l}=e;let c;if(t[0]!=="$"){const f=r[t];if(f!==void 0)switch(f){case 1:return s[t];case 2:return n[t];case 4:return a[t];case 3:return o[t]}else{if(Ln(s,t))return r[t]=1,s[t];if(n!==Re&&Le(n,t))return r[t]=2,n[t];if((c=e.propsOptions[0])&&Le(c,t))return r[t]=3,o[t];if(a!==Re&&Le(a,t))return r[t]=4,a[t];io&&(r[t]=0)}}const u=as[t];let d,p;if(u)return t==="$attrs"&&Qe(e.attrs,"get",""),u(e);if((d=i.__cssModules)&&(d=d[t]))return d;if(a!==Re&&Le(a,t))return r[t]=4,a[t];if(p=l.config.globalProperties,Le(p,t))return p[t]},set({_:e},t,a){const{data:s,setupState:n,ctx:o}=e;return Ln(n,t)?(n[t]=a,!0):s!==Re&&Le(s,t)?(s[t]=a,!0):Le(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=a,!0)},has({_:{data:e,setupState:t,accessCache:a,ctx:s,appContext:n,propsOptions:o,type:r}},i){let l,c;return!!(a[i]||e!==Re&&i[0]!=="$"&&Le(e,i)||Ln(t,i)||(l=o[0])&&Le(l,i)||Le(s,i)||Le(as,i)||Le(n.config.globalProperties,i)||(c=r.__cssModules)&&c[i])},defineProperty(e,t,a){return a.get!=null?e._.accessCache[t]=0:Le(a,"value")&&this.set(e,t,a.value,null),Reflect.defineProperty(e,t,a)}};function or(e){return ye(e)?e.reduce((t,a)=>(t[a]=null,t),{}):e}let io=!0;function kd(e){const t=ll(e),a=e.proxy,s=e.ctx;io=!1,t.beforeCreate&&rr(t.beforeCreate,e,"bc");const{data:n,computed:o,methods:r,watch:i,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:f,updated:g,activated:h,deactivated:k,beforeDestroy:m,beforeUnmount:v,destroyed:w,unmounted:E,render:$,renderTracked:D,renderTriggered:M,errorCaptured:V,serverPrefetch:I,expose:U,inheritAttrs:j,components:F,directives:G,filters:C}=t;if(c&&Sd(c,s,null),r)for(const R in r){const O=r[R];we(O)&&(s[R]=O.bind(a))}if(n){const R=n.call(a,a);De(R)&&(e.data=Ot(R))}if(io=!0,o)for(const R in o){const O=o[R],q=we(O)?O.bind(a,a):we(O.get)?O.get.bind(a,a):Dt,Q=!we(O)&&we(O.set)?O.set.bind(a):Dt,X=_e({get:q,set:Q});Object.defineProperty(s,R,{enumerable:!0,configurable:!0,get:()=>X.value,set:oe=>X.value=oe})}if(i)for(const R in i)il(i[R],s,a,R);if(l){const R=we(l)?l.call(a):l;Reflect.ownKeys(R).forEach(O=>{Rs(O,R[O])})}u&&rr(u,e,"c");function S(R,O){ye(O)?O.forEach(q=>R(q.bind(a))):O&&R(O.bind(a))}if(S(fd,d),S(it,p),S(hd,f),S(gd,g),S(dd,h),S(ud,k),S(vd,V),S(_d,D),S(bd,M),S(ol,v),S(Xt,E),S(md,I),ye(U))if(U.length){const R=e.exposed||(e.exposed={});U.forEach(O=>{Object.defineProperty(R,O,{get:()=>a[O],set:q=>a[O]=q,enumerable:!0})})}else e.exposed||(e.exposed={});$&&e.render===Dt&&(e.render=$),j!=null&&(e.inheritAttrs=j),F&&(e.components=F),G&&(e.directives=G),I&&sl(e)}function Sd(e,t,a=Dt){ye(e)&&(e=lo(e));for(const s in e){const n=e[s];let o;De(n)?"default"in n?o=yt(n.from||s,n.default,!0):o=yt(n.from||s):o=yt(n),je(o)?Object.defineProperty(t,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:r=>o.value=r}):t[s]=o}}function rr(e,t,a){Tt(ye(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,a)}function il(e,t,a,s){let n=s.includes(".")?wl(a,s):()=>a[s];if(Ue(e)){const o=t[e];we(o)&&Na(n,o)}else if(we(e))Na(n,e.bind(a));else if(De(e))if(ye(e))e.forEach(o=>il(o,t,a,s));else{const o=we(e.handler)?e.handler.bind(a):t[e.handler];we(o)&&Na(n,o,e)}}function ll(e){const t=e.type,{mixins:a,extends:s}=t,{mixins:n,optionsCache:o,config:{optionMergeStrategies:r}}=e.appContext,i=o.get(t);let l;return i?l=i:!n.length&&!a&&!s?l=t:(l={},n.length&&n.forEach(c=>Ys(l,c,r,!0)),Ys(l,t,r)),De(t)&&o.set(t,l),l}function Ys(e,t,a,s=!1){const{mixins:n,extends:o}=t;o&&Ys(e,o,a,!0),n&&n.forEach(r=>Ys(e,r,a,!0));for(const r in t)if(!(s&&r==="expose")){const i=Ed[r]||a&&a[r];e[r]=i?i(e[r],t[r]):t[r]}return e}const Ed={data:ir,props:lr,emits:lr,methods:Wa,computed:Wa,beforeCreate:at,created:at,beforeMount:at,mounted:at,beforeUpdate:at,updated:at,beforeDestroy:at,beforeUnmount:at,destroyed:at,unmounted:at,activated:at,deactivated:at,errorCaptured:at,serverPrefetch:at,components:Wa,directives:Wa,watch:Cd,provide:ir,inject:Ad};function ir(e,t){return t?e?function(){return Ke(we(e)?e.call(this,this):e,we(t)?t.call(this,this):t)}:t:e}function Ad(e,t){return Wa(lo(e),lo(t))}function lo(e){if(ye(e)){const t={};for(let a=0;a<e.length;a++)t[e[a]]=e[a];return t}return e}function at(e,t){return e?[...new Set([].concat(e,t))]:t}function Wa(e,t){return e?Ke(Object.create(null),e,t):t}function lr(e,t){return e?ye(e)&&ye(t)?[...new Set([...e,...t])]:Ke(Object.create(null),or(e),or(t??{})):t}function Cd(e,t){if(!e)return t;if(!t)return e;const a=Ke(Object.create(null),e);for(const s in t)a[s]=at(e[s],t[s]);return a}function cl(){return{app:null,config:{isNativeTag:mi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Pd=0;function Od(e,t){return function(s,n=null){we(s)||(s=Ke({},s)),n!=null&&!De(n)&&(n=null);const o=cl(),r=new WeakSet,i=[];let l=!1;const c=o.app={_uid:Pd++,_component:s,_props:n,_container:null,_context:o,_instance:null,version:pu,get config(){return o.config},set config(u){},use(u,...d){return r.has(u)||(u&&we(u.install)?(r.add(u),u.install(c,...d)):we(u)&&(r.add(u),u(c,...d))),c},mixin(u){return o.mixins.includes(u)||o.mixins.push(u),c},component(u,d){return d?(o.components[u]=d,c):o.components[u]},directive(u,d){return d?(o.directives[u]=d,c):o.directives[u]},mount(u,d,p){if(!l){const f=c._ceVNode||et(s,n);return f.appContext=o,p===!0?p="svg":p===!1&&(p=void 0),e(f,u,p),l=!0,c._container=u,u.__vue_app__=c,vn(f.component)}},onUnmount(u){i.push(u)},unmount(){l&&(Tt(i,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(u,d){return o.provides[u]=d,c},runWithContext(u){const d=Sa;Sa=c;try{return u()}finally{Sa=d}}};return c}}let Sa=null;function Rs(e,t){if(Ze){let a=Ze.provides;const s=Ze.parent&&Ze.parent.provides;s===a&&(a=Ze.provides=Object.create(s)),a[e]=t}}function yt(e,t,a=!1){const s=Ho();if(s||Sa){let n=Sa?Sa._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return a&&we(t)?t.call(s&&s.proxy):t}}function Ld(){return!!(Ho()||Sa)}const dl={},ul=()=>Object.create(dl),pl=e=>Object.getPrototypeOf(e)===dl;function Md(e,t,a,s=!1){const n={},o=ul();e.propsDefaults=Object.create(null),fl(e,t,n,o);for(const r in e.propsOptions[0])r in n||(n[r]=void 0);a?e.props=s?n:Ui(n):e.type.props?e.props=n:e.props=o,e.attrs=o}function Dd(e,t,a,s){const{props:n,attrs:o,vnode:{patchFlag:r}}=e,i=Ee(n),[l]=e.propsOptions;let c=!1;if((s||r>0)&&!(r&16)){if(r&8){const u=e.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(bn(e.emitsOptions,p))continue;const f=t[p];if(l)if(Le(o,p))f!==o[p]&&(o[p]=f,c=!0);else{const g=wt(p);n[g]=co(l,i,g,f,e,!1)}else f!==o[p]&&(o[p]=f,c=!0)}}}else{fl(e,t,n,o)&&(c=!0);let u;for(const d in i)(!t||!Le(t,d)&&((u=pa(d))===d||!Le(t,u)))&&(l?a&&(a[d]!==void 0||a[u]!==void 0)&&(n[d]=co(l,i,d,void 0,e,!0)):delete n[d]);if(o!==i)for(const d in o)(!t||!Le(t,d))&&(delete o[d],c=!0)}c&&Vt(e.attrs,"set","")}function fl(e,t,a,s){const[n,o]=e.propsOptions;let r=!1,i;if(t)for(let l in t){if(Xa(l))continue;const c=t[l];let u;n&&Le(n,u=wt(l))?!o||!o.includes(u)?a[u]=c:(i||(i={}))[u]=c:bn(e.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,r=!0)}if(o){const l=Ee(a),c=i||Re;for(let u=0;u<o.length;u++){const d=o[u];a[d]=co(n,l,d,c[d],e,!Le(c,d))}}return r}function co(e,t,a,s,n,o){const r=e[a];if(r!=null){const i=Le(r,"default");if(i&&s===void 0){const l=r.default;if(r.type!==Function&&!r.skipFactory&&we(l)){const{propsDefaults:c}=n;if(a in c)s=c[a];else{const u=vs(n);s=c[a]=l.call(null,t),u()}}else s=l;n.ce&&n.ce._setProp(a,s)}r[0]&&(o&&!i?s=!1:r[1]&&(s===""||s===pa(a))&&(s=!0))}return s}const Rd=new WeakMap;function hl(e,t,a=!1){const s=a?Rd:t.propsCache,n=s.get(e);if(n)return n;const o=e.props,r={},i=[];let l=!1;if(!we(e)){const u=d=>{l=!0;const[p,f]=hl(d,t,!0);Ke(r,p),f&&i.push(...f)};!a&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!o&&!l)return De(e)&&s.set(e,Ra),Ra;if(ye(o))for(let u=0;u<o.length;u++){const d=wt(o[u]);cr(d)&&(r[d]=Re)}else if(o)for(const u in o){const d=wt(u);if(cr(d)){const p=o[u],f=r[d]=ye(p)||we(p)?{type:p}:Ke({},p),g=f.type;let h=!1,k=!0;if(ye(g))for(let m=0;m<g.length;++m){const v=g[m],w=we(v)&&v.name;if(w==="Boolean"){h=!0;break}else w==="String"&&(k=!1)}else h=we(g)&&g.name==="Boolean";f[0]=h,f[1]=k,(h||Le(f,"default"))&&i.push(d)}}const c=[r,i];return De(e)&&s.set(e,c),c}function cr(e){return e[0]!=="$"&&!Xa(e)}const Bo=e=>e==="_"||e==="_ctx"||e==="$stable",Fo=e=>ye(e)?e.map(Pt):[Pt(e)],$d=(e,t,a)=>{if(t._n)return t;const s=no((...n)=>Fo(t(...n)),a);return s._c=!1,s},gl=(e,t,a)=>{const s=e._ctx;for(const n in e){if(Bo(n))continue;const o=e[n];if(we(o))t[n]=$d(n,o,s);else if(o!=null){const r=Fo(o);t[n]=()=>r}}},ml=(e,t)=>{const a=Fo(t);e.slots.default=()=>a},bl=(e,t,a)=>{for(const s in t)(a||!Bo(s))&&(e[s]=t[s])},Id=(e,t,a)=>{const s=e.slots=ul();if(e.vnode.shapeFlag&32){const n=t._;n?(bl(s,t,a),a&&yi(s,"_",n,!0)):gl(t,s)}else t&&ml(e,t)},Nd=(e,t,a)=>{const{vnode:s,slots:n}=e;let o=!0,r=Re;if(s.shapeFlag&32){const i=t._;i?a&&i===1?o=!1:bl(n,t,a):(o=!t.$stable,gl(t,n)),r=t}else t&&(ml(e,t),r={default:1});if(o)for(const i in n)!Bo(i)&&r[i]==null&&delete n[i]},ut=Qd;function Bd(e){return Fd(e)}function Fd(e,t){const a=dn();a.__VUE__=!0;const{insert:s,remove:n,patchProp:o,createElement:r,createText:i,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:f=Dt,insertStaticContent:g}=e,h=(y,P,_,x=null,B=null,N=null,Y=void 0,W=null,L=!!P.dynamicChildren)=>{if(y===P)return;y&&!ya(y,P)&&(x=z(y),oe(y,B,N,!0),y=null),P.patchFlag===-2&&(L=!1,P.dynamicChildren=null);const{type:T,ref:H,shapeFlag:ae}=P;switch(T){case _n:k(y,P,_,x);break;case rt:m(y,P,_,x);break;case $s:y==null&&v(P,_,x,Y);break;case Ie:F(y,P,_,x,B,N,Y,W,L);break;default:ae&1?$(y,P,_,x,B,N,Y,W,L):ae&6?G(y,P,_,x,B,N,Y,W,L):(ae&64||ae&128)&&T.process(y,P,_,x,B,N,Y,W,L,re)}H!=null&&B?es(H,y&&y.ref,N,P||y,!P):H==null&&y&&y.ref!=null&&es(y.ref,null,N,y,!0)},k=(y,P,_,x)=>{if(y==null)s(P.el=i(P.children),_,x);else{const B=P.el=y.el;P.children!==y.children&&c(B,P.children)}},m=(y,P,_,x)=>{y==null?s(P.el=l(P.children||""),_,x):P.el=y.el},v=(y,P,_,x)=>{[y.el,y.anchor]=g(y.children,P,_,x,y.el,y.anchor)},w=({el:y,anchor:P},_,x)=>{let B;for(;y&&y!==P;)B=p(y),s(y,_,x),y=B;s(P,_,x)},E=({el:y,anchor:P})=>{let _;for(;y&&y!==P;)_=p(y),n(y),y=_;n(P)},$=(y,P,_,x,B,N,Y,W,L)=>{if(P.type==="svg"?Y="svg":P.type==="math"&&(Y="mathml"),y==null)D(P,_,x,B,N,Y,W,L);else{const T=y.el&&y.el._isVueCE?y.el:null;try{T&&T._beginPatch(),I(y,P,B,N,Y,W,L)}finally{T&&T._endPatch()}}},D=(y,P,_,x,B,N,Y,W)=>{let L,T;const{props:H,shapeFlag:ae,transition:ce,dirs:ge}=y;if(L=y.el=r(y.type,N,H&&H.is,H),ae&8?u(L,y.children):ae&16&&V(y.children,L,null,x,B,Mn(y,N),Y,W),ge&&ga(y,null,x,"created"),M(L,y,y.scopeId,Y,x),H){for(const le in H)le!=="value"&&!Xa(le)&&o(L,le,null,H[le],N,x);"value"in H&&o(L,"value",null,H.value,N),(T=H.onVnodeBeforeMount)&&St(T,x,y)}ge&&ga(y,null,x,"beforeMount");const he=zd(B,ce);he&&ce.beforeEnter(L),s(L,P,_),((T=H&&H.onVnodeMounted)||he||ge)&&ut(()=>{T&&St(T,x,y),he&&ce.enter(L),ge&&ga(y,null,x,"mounted")},B)},M=(y,P,_,x,B)=>{if(_&&f(y,_),x)for(let N=0;N<x.length;N++)f(y,x[N]);if(B){let N=B.subTree;if(P===N||Tl(N.type)&&(N.ssContent===P||N.ssFallback===P)){const Y=B.vnode;M(y,Y,Y.scopeId,Y.slotScopeIds,B.parent)}}},V=(y,P,_,x,B,N,Y,W,L=0)=>{for(let T=L;T<y.length;T++){const H=y[T]=W?sa(y[T]):Pt(y[T]);h(null,H,P,_,x,B,N,Y,W)}},I=(y,P,_,x,B,N,Y)=>{const W=P.el=y.el;let{patchFlag:L,dynamicChildren:T,dirs:H}=P;L|=y.patchFlag&16;const ae=y.props||Re,ce=P.props||Re;let ge;if(_&&ma(_,!1),(ge=ce.onVnodeBeforeUpdate)&&St(ge,_,P,y),H&&ga(P,y,_,"beforeUpdate"),_&&ma(_,!0),(ae.innerHTML&&ce.innerHTML==null||ae.textContent&&ce.textContent==null)&&u(W,""),T?U(y.dynamicChildren,T,W,_,x,Mn(P,B),N):Y||O(y,P,W,null,_,x,Mn(P,B),N,!1),L>0){if(L&16)j(W,ae,ce,_,B);else if(L&2&&ae.class!==ce.class&&o(W,"class",null,ce.class,B),L&4&&o(W,"style",ae.style,ce.style,B),L&8){const he=P.dynamicProps;for(let le=0;le<he.length;le++){const me=he[le],ve=ae[me],Se=ce[me];(Se!==ve||me==="value")&&o(W,me,ve,Se,B,_)}}L&1&&y.children!==P.children&&u(W,P.children)}else!Y&&T==null&&j(W,ae,ce,_,B);((ge=ce.onVnodeUpdated)||H)&&ut(()=>{ge&&St(ge,_,P,y),H&&ga(P,y,_,"updated")},x)},U=(y,P,_,x,B,N,Y)=>{for(let W=0;W<P.length;W++){const L=y[W],T=P[W],H=L.el&&(L.type===Ie||!ya(L,T)||L.shapeFlag&198)?d(L.el):_;h(L,T,H,null,x,B,N,Y,!0)}},j=(y,P,_,x,B)=>{if(P!==_){if(P!==Re)for(const N in P)!Xa(N)&&!(N in _)&&o(y,N,P[N],null,B,x);for(const N in _){if(Xa(N))continue;const Y=_[N],W=P[N];Y!==W&&N!=="value"&&o(y,N,W,Y,B,x)}"value"in _&&o(y,"value",P.value,_.value,B)}},F=(y,P,_,x,B,N,Y,W,L)=>{const T=P.el=y?y.el:i(""),H=P.anchor=y?y.anchor:i("");let{patchFlag:ae,dynamicChildren:ce,slotScopeIds:ge}=P;ge&&(W=W?W.concat(ge):ge),y==null?(s(T,_,x),s(H,_,x),V(P.children||[],_,H,B,N,Y,W,L)):ae>0&&ae&64&&ce&&y.dynamicChildren?(U(y.dynamicChildren,ce,_,B,N,Y,W),(P.key!=null||B&&P===B.subTree)&&_l(y,P,!0)):O(y,P,_,H,B,N,Y,W,L)},G=(y,P,_,x,B,N,Y,W,L)=>{P.slotScopeIds=W,y==null?P.shapeFlag&512?B.ctx.activate(P,_,x,Y,L):C(P,_,x,B,N,Y,L):A(y,P,L)},C=(y,P,_,x,B,N,Y)=>{const W=y.component=ou(y,x,B);if(gn(y)&&(W.ctx.renderer=re),ru(W,!1,Y),W.asyncDep){if(B&&B.registerDep(W,S,Y),!y.el){const L=W.subTree=et(rt);m(null,L,P,_),y.placeholder=L.el}}else S(W,y,P,_,B,N,Y)},A=(y,P,_)=>{const x=P.component=y.component;if(Jd(y,P,_))if(x.asyncDep&&!x.asyncResolved){R(x,P,_);return}else x.next=P,x.update();else P.el=y.el,x.vnode=P},S=(y,P,_,x,B,N,Y)=>{const W=()=>{if(y.isMounted){let{next:ae,bu:ce,u:ge,parent:he,vnode:le}=y;{const Ne=vl(y);if(Ne){ae&&(ae.el=le.el,R(y,ae,Y)),Ne.asyncDep.then(()=>{y.isUnmounted||W()});return}}let me=ae,ve;ma(y,!1),ae?(ae.el=le.el,R(y,ae,Y)):ae=le,ce&&Ds(ce),(ve=ae.props&&ae.props.onVnodeBeforeUpdate)&&St(ve,he,ae,le),ma(y,!0);const Se=ur(y),Ae=y.subTree;y.subTree=Se,h(Ae,Se,d(Ae.el),z(Ae),y,B,N),ae.el=Se.el,me===null&&Xd(y,Se.el),ge&&ut(ge,B),(ve=ae.props&&ae.props.onVnodeUpdated)&&ut(()=>St(ve,he,ae,le),B)}else{let ae;const{el:ce,props:ge}=P,{bm:he,m:le,parent:me,root:ve,type:Se}=y,Ae=ts(P);ma(y,!1),he&&Ds(he),!Ae&&(ae=ge&&ge.onVnodeBeforeMount)&&St(ae,me,P),ma(y,!0);{ve.ce&&ve.ce._def.shadowRoot!==!1&&ve.ce._injectChildStyle(Se);const Ne=y.subTree=ur(y);h(null,Ne,_,x,y,B,N),P.el=Ne.el}if(le&&ut(le,B),!Ae&&(ae=ge&&ge.onVnodeMounted)){const Ne=P;ut(()=>St(ae,me,Ne),B)}(P.shapeFlag&256||me&&ts(me.vnode)&&me.vnode.shapeFlag&256)&&y.a&&ut(y.a,B),y.isMounted=!0,P=_=x=null}};y.scope.on();const L=y.effect=new Ci(W);y.scope.off();const T=y.update=L.run.bind(L),H=y.job=L.runIfDirty.bind(L);H.i=y,H.id=y.uid,L.scheduler=()=>No(H),ma(y,!0),T()},R=(y,P,_)=>{P.component=y;const x=y.vnode.props;y.vnode=P,y.next=null,Dd(y,P.props,x,_),Nd(y,P.children,_),Yt(),tr(y),Kt()},O=(y,P,_,x,B,N,Y,W,L=!1)=>{const T=y&&y.children,H=y?y.shapeFlag:0,ae=P.children,{patchFlag:ce,shapeFlag:ge}=P;if(ce>0){if(ce&128){Q(T,ae,_,x,B,N,Y,W,L);return}else if(ce&256){q(T,ae,_,x,B,N,Y,W,L);return}}ge&8?(H&16&&ne(T,B,N),ae!==T&&u(_,ae)):H&16?ge&16?Q(T,ae,_,x,B,N,Y,W,L):ne(T,B,N,!0):(H&8&&u(_,""),ge&16&&V(ae,_,x,B,N,Y,W,L))},q=(y,P,_,x,B,N,Y,W,L)=>{y=y||Ra,P=P||Ra;const T=y.length,H=P.length,ae=Math.min(T,H);let ce;for(ce=0;ce<ae;ce++){const ge=P[ce]=L?sa(P[ce]):Pt(P[ce]);h(y[ce],ge,_,null,B,N,Y,W,L)}T>H?ne(y,B,N,!0,!1,ae):V(P,_,x,B,N,Y,W,L,ae)},Q=(y,P,_,x,B,N,Y,W,L)=>{let T=0;const H=P.length;let ae=y.length-1,ce=H-1;for(;T<=ae&&T<=ce;){const ge=y[T],he=P[T]=L?sa(P[T]):Pt(P[T]);if(ya(ge,he))h(ge,he,_,null,B,N,Y,W,L);else break;T++}for(;T<=ae&&T<=ce;){const ge=y[ae],he=P[ce]=L?sa(P[ce]):Pt(P[ce]);if(ya(ge,he))h(ge,he,_,null,B,N,Y,W,L);else break;ae--,ce--}if(T>ae){if(T<=ce){const ge=ce+1,he=ge<H?P[ge].el:x;for(;T<=ce;)h(null,P[T]=L?sa(P[T]):Pt(P[T]),_,he,B,N,Y,W,L),T++}}else if(T>ce)for(;T<=ae;)oe(y[T],B,N,!0),T++;else{const ge=T,he=T,le=new Map;for(T=he;T<=ce;T++){const tt=P[T]=L?sa(P[T]):Pt(P[T]);tt.key!=null&&le.set(tt.key,T)}let me,ve=0;const Se=ce-he+1;let Ae=!1,Ne=0;const Fe=new Array(Se);for(T=0;T<Se;T++)Fe[T]=0;for(T=ge;T<=ae;T++){const tt=y[T];if(ve>=Se){oe(tt,B,N,!0);continue}let gt;if(tt.key!=null)gt=le.get(tt.key);else for(me=he;me<=ce;me++)if(Fe[me-he]===0&&ya(tt,P[me])){gt=me;break}gt===void 0?oe(tt,B,N,!0):(Fe[gt-he]=T+1,gt>=Ne?Ne=gt:Ae=!0,h(tt,P[gt],_,null,B,N,Y,W,L),ve++)}const Qt=Ae?Hd(Fe):Ra;for(me=Qt.length-1,T=Se-1;T>=0;T--){const tt=he+T,gt=P[tt],Ko=P[tt+1],Wo=tt+1<H?Ko.el||Ko.placeholder:x;Fe[T]===0?h(null,gt,_,Wo,B,N,Y,W,L):Ae&&(me<0||T!==Qt[me]?X(gt,_,Wo,2):me--)}}},X=(y,P,_,x,B=null)=>{const{el:N,type:Y,transition:W,children:L,shapeFlag:T}=y;if(T&6){X(y.component.subTree,P,_,x);return}if(T&128){y.suspense.move(P,_,x);return}if(T&64){Y.move(y,P,_,re);return}if(Y===Ie){s(N,P,_);for(let ae=0;ae<L.length;ae++)X(L[ae],P,_,x);s(y.anchor,P,_);return}if(Y===$s){w(y,P,_);return}if(x!==2&&T&1&&W)if(x===0)W.beforeEnter(N),s(N,P,_),ut(()=>W.enter(N),B);else{const{leave:ae,delayLeave:ce,afterLeave:ge}=W,he=()=>{y.ctx.isUnmounted?n(N):s(N,P,_)},le=()=>{N._isLeaving&&N[Gt](!0),ae(N,()=>{he(),ge&&ge()})};ce?ce(N,he,le):le()}else s(N,P,_)},oe=(y,P,_,x=!1,B=!1)=>{const{type:N,props:Y,ref:W,children:L,dynamicChildren:T,shapeFlag:H,patchFlag:ae,dirs:ce,cacheIndex:ge}=y;if(ae===-2&&(B=!1),W!=null&&(Yt(),es(W,null,_,y,!0),Kt()),ge!=null&&(P.renderCache[ge]=void 0),H&256){P.ctx.deactivate(y);return}const he=H&1&&ce,le=!ts(y);let me;if(le&&(me=Y&&Y.onVnodeBeforeUnmount)&&St(me,P,y),H&6)ee(y.component,_,x);else{if(H&128){y.suspense.unmount(_,x);return}he&&ga(y,null,P,"beforeUnmount"),H&64?y.type.remove(y,P,_,re,x):T&&!T.hasOnce&&(N!==Ie||ae>0&&ae&64)?ne(T,P,_,!1,!0):(N===Ie&&ae&384||!B&&H&16)&&ne(L,P,_),x&&K(y)}(le&&(me=Y&&Y.onVnodeUnmounted)||he)&&ut(()=>{me&&St(me,P,y),he&&ga(y,null,P,"unmounted")},_)},K=y=>{const{type:P,el:_,anchor:x,transition:B}=y;if(P===Ie){se(_,x);return}if(P===$s){E(y);return}const N=()=>{n(_),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(y.shapeFlag&1&&B&&!B.persisted){const{leave:Y,delayLeave:W}=B,L=()=>Y(_,N);W?W(y.el,N,L):L()}else N()},se=(y,P)=>{let _;for(;y!==P;)_=p(y),n(y),y=_;n(P)},ee=(y,P,_)=>{const{bum:x,scope:B,job:N,subTree:Y,um:W,m:L,a:T}=y;dr(L),dr(T),x&&Ds(x),B.stop(),N&&(N.flags|=8,oe(Y,y,P,_)),W&&ut(W,P),ut(()=>{y.isUnmounted=!0},P)},ne=(y,P,_,x=!1,B=!1,N=0)=>{for(let Y=N;Y<y.length;Y++)oe(y[Y],P,_,x,B)},z=y=>{if(y.shapeFlag&6)return z(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const P=p(y.anchor||y.el),_=P&&P[rd];return _?p(_):P};let te=!1;const Z=(y,P,_)=>{y==null?P._vnode&&oe(P._vnode,null,null,!0):h(P._vnode||null,y,P,null,null,null,_),P._vnode=y,te||(te=!0,tr(),Yi(),te=!1)},re={p:h,um:oe,m:X,r:K,mt:C,mc:V,pc:O,pbc:U,n:z,o:e};return{render:Z,hydrate:void 0,createApp:Od(Z)}}function Mn({type:e,props:t},a){return a==="svg"&&e==="foreignObject"||a==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:a}function ma({effect:e,job:t},a){a?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function zd(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function _l(e,t,a=!1){const s=e.children,n=t.children;if(ye(s)&&ye(n))for(let o=0;o<s.length;o++){const r=s[o];let i=n[o];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=n[o]=sa(n[o]),i.el=r.el),!a&&i.patchFlag!==-2&&_l(r,i)),i.type===_n&&i.patchFlag!==-1&&(i.el=r.el),i.type===rt&&!i.el&&(i.el=r.el)}}function Hd(e){const t=e.slice(),a=[0];let s,n,o,r,i;const l=e.length;for(s=0;s<l;s++){const c=e[s];if(c!==0){if(n=a[a.length-1],e[n]<c){t[s]=n,a.push(s);continue}for(o=0,r=a.length-1;o<r;)i=o+r>>1,e[a[i]]<c?o=i+1:r=i;c<e[a[o]]&&(o>0&&(t[s]=a[o-1]),a[o]=s)}}for(o=a.length,r=a[o-1];o-- >0;)a[o]=r,r=t[r];return a}function vl(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:vl(t)}function dr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const Ud=Symbol.for("v-scx"),Gd=()=>yt(Ud);function Na(e,t,a){return yl(e,t,a)}function yl(e,t,a=Re){const{immediate:s,deep:n,flush:o,once:r}=a,i=Ke({},a),l=t&&s||!t&&o!=="post";let c;if(fs){if(o==="sync"){const f=Gd();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=Dt,f.resume=Dt,f.pause=Dt,f}}const u=Ze;i.call=(f,g,h)=>Tt(f,u,g,h);let d=!1;o==="post"?i.scheduler=f=>{ut(f,u&&u.suspense)}:o!=="sync"&&(d=!0,i.scheduler=(f,g)=>{g?f():No(f)}),i.augmentJob=f=>{t&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const p=ad(e,t,i);return fs&&(c?c.push(p):l&&p()),p}function jd(e,t,a){const s=this.proxy,n=Ue(e)?e.includes(".")?wl(s,e):()=>s[e]:e.bind(s,s);let o;we(t)?o=t:(o=t.handler,a=t);const r=vs(this),i=yl(n,o.bind(s),a);return r(),i}function wl(e,t){const a=t.split(".");return()=>{let s=e;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}const Vd=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${wt(t)}Modifiers`]||e[`${pa(t)}Modifiers`];function qd(e,t,...a){if(e.isUnmounted)return;const s=e.vnode.props||Re;let n=a;const o=t.startsWith("update:"),r=o&&Vd(s,t.slice(7));r&&(r.trim&&(n=a.map(u=>Ue(u)?u.trim():u)),r.number&&(n=a.map(Ao)));let i,l=s[i=Sn(t)]||s[i=Sn(wt(t))];!l&&o&&(l=s[i=Sn(pa(t))]),l&&Tt(l,e,6,n);const c=s[i+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[i])return;e.emitted[i]=!0,Tt(c,e,6,n)}}const Yd=new WeakMap;function xl(e,t,a=!1){const s=a?Yd:t.emitsCache,n=s.get(e);if(n!==void 0)return n;const o=e.emits;let r={},i=!1;if(!we(e)){const l=c=>{const u=xl(c,t,!0);u&&(i=!0,Ke(r,u))};!a&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!o&&!i?(De(e)&&s.set(e,null),null):(ye(o)?o.forEach(l=>r[l]=null):Ke(r,o),De(e)&&s.set(e,r),r)}function bn(e,t){return!e||!on(t)?!1:(t=t.slice(2).replace(/Once$/,""),Le(e,t[0].toLowerCase()+t.slice(1))||Le(e,pa(t))||Le(e,t))}function ur(e){const{type:t,vnode:a,proxy:s,withProxy:n,propsOptions:[o],slots:r,attrs:i,emit:l,render:c,renderCache:u,props:d,data:p,setupState:f,ctx:g,inheritAttrs:h}=e,k=Vs(e);let m,v;try{if(a.shapeFlag&4){const E=n||s,$=E;m=Pt(c.call($,E,u,d,f,p,g)),v=i}else{const E=t;m=Pt(E.length>1?E(d,{attrs:i,slots:r,emit:l}):E(d,null)),v=t.props?i:Kd(i)}}catch(E){ss.length=0,hn(E,e,1),m=et(rt)}let w=m;if(v&&h!==!1){const E=Object.keys(v),{shapeFlag:$}=w;E.length&&$&7&&(o&&E.some(ko)&&(v=Wd(v,o)),w=da(w,v,!1,!0))}return a.dirs&&(w=da(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(a.dirs):a.dirs),a.transition&&us(w,a.transition),m=w,Vs(k),m}const Kd=e=>{let t;for(const a in e)(a==="class"||a==="style"||on(a))&&((t||(t={}))[a]=e[a]);return t},Wd=(e,t)=>{const a={};for(const s in e)(!ko(s)||!(s.slice(9)in t))&&(a[s]=e[s]);return a};function Jd(e,t,a){const{props:s,children:n,component:o}=e,{props:r,children:i,patchFlag:l}=t,c=o.emitsOptions;if(t.dirs||t.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return s?pr(s,r,c):!!r;if(l&8){const u=t.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(r[p]!==s[p]&&!bn(c,p))return!0}}}else return(n||i)&&(!i||!i.$stable)?!0:s===r?!1:s?r?pr(s,r,c):!0:!!r;return!1}function pr(e,t,a){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let n=0;n<s.length;n++){const o=s[n];if(t[o]!==e[o]&&!bn(a,o))return!0}return!1}function Xd({vnode:e,parent:t},a){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===e&&(s.el=e.el),s===e)(e=t.vnode).el=a,t=t.parent;else break}}const Tl=e=>e.__isSuspense;function Qd(e,t){t&&t.pendingBranch?ye(e)?t.effects.push(...e):t.effects.push(e):od(e)}const Ie=Symbol.for("v-fgt"),_n=Symbol.for("v-txt"),rt=Symbol.for("v-cmt"),$s=Symbol.for("v-stc"),ss=[];let ht=null;function pe(e=!1){ss.push(ht=e?null:[])}function Zd(){ss.pop(),ht=ss[ss.length-1]||null}let ps=1;function Ks(e,t=!1){ps+=e,e<0&&ht&&t&&(ht.hasOnce=!0)}function kl(e){return e.dynamicChildren=ps>0?ht||Ra:null,Zd(),ps>0&&ht&&ht.push(e),e}function fe(e,t,a,s,n,o){return kl(b(e,t,a,s,n,o,!0))}function Sl(e,t,a,s,n){return kl(et(e,t,a,s,n,!0))}function Ws(e){return e?e.__v_isVNode===!0:!1}function ya(e,t){return e.type===t.type&&e.key===t.key}const El=({key:e})=>e??null,Is=({ref:e,ref_key:t,ref_for:a})=>(typeof e=="number"&&(e=""+e),e!=null?Ue(e)||je(e)||we(e)?{i:ft,r:e,k:t,f:!!a}:e:null);function b(e,t=null,a=null,s=0,n=null,o=e===Ie?0:1,r=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&El(t),ref:t&&Is(t),scopeId:Wi,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:ft};return i?(zo(l,a),o&128&&e.normalize(l)):a&&(l.shapeFlag|=Ue(a)?8:16),ps>0&&!r&&ht&&(l.patchFlag>0||o&6)&&l.patchFlag!==32&&ht.push(l),l}const et=eu;function eu(e,t=null,a=null,s=0,n=null,o=!1){if((!e||e===rl)&&(e=rt),Ws(e)){const i=da(e,t,!0);return a&&zo(i,a),ps>0&&!o&&ht&&(i.shapeFlag&6?ht[ht.indexOf(e)]=i:ht.push(i)),i.patchFlag=-2,i}if(uu(e)&&(e=e.__vccOpts),t){t=tu(t);let{class:i,style:l}=t;i&&!Ue(i)&&(t.class=qe(i)),De(l)&&(Ro(l)&&!ye(l)&&(l=Ke({},l)),t.style=un(l))}const r=Ue(e)?1:Tl(e)?128:Ji(e)?64:De(e)?4:we(e)?2:0;return b(e,t,a,s,n,r,o,!0)}function tu(e){return e?Ro(e)||pl(e)?Ke({},e):e:null}function da(e,t,a=!1,s=!1){const{props:n,ref:o,patchFlag:r,children:i,transition:l}=e,c=t?au(n||{},t):n,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&El(c),ref:t&&t.ref?a&&o?ye(o)?o.concat(Is(t)):[o,Is(t)]:Is(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ie?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:l,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&da(e.ssContent),ssFallback:e.ssFallback&&da(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return l&&s&&us(u,l.clone(u)),u}function Be(e=" ",t=0){return et(_n,null,e,t)}function dt(e,t){const a=et($s,null,e);return a.staticCount=t,a}function Te(e="",t=!1){return t?(pe(),Sl(rt,null,e)):et(rt,null,e)}function Pt(e){return e==null||typeof e=="boolean"?et(rt):ye(e)?et(Ie,null,e.slice()):Ws(e)?sa(e):et(_n,null,String(e))}function sa(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:da(e)}function zo(e,t){let a=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(ye(t))a=16;else if(typeof t=="object")if(s&65){const n=t.default;n&&(n._c&&(n._d=!1),zo(e,n()),n._c&&(n._d=!0));return}else{a=32;const n=t._;!n&&!pl(t)?t._ctx=ft:n===3&&ft&&(ft.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else we(t)?(t={default:t,_ctx:ft},a=32):(t=String(t),s&64?(a=16,t=[Be(t)]):a=8);e.children=t,e.shapeFlag|=a}function au(...e){const t={};for(let a=0;a<e.length;a++){const s=e[a];for(const n in s)if(n==="class")t.class!==s.class&&(t.class=qe([t.class,s.class]));else if(n==="style")t.style=un([t.style,s.style]);else if(on(n)){const o=t[n],r=s[n];r&&o!==r&&!(ye(o)&&o.includes(r))&&(t[n]=o?[].concat(o,r):r)}else n!==""&&(t[n]=s[n])}return t}function St(e,t,a,s=null){Tt(e,t,7,[a,s])}const su=cl();let nu=0;function ou(e,t,a){const s=e.type,n=(t?t.appContext:e.appContext)||su,o={uid:nu++,vnode:e,type:s,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Si(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:hl(s,n),emitsOptions:xl(s,n),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=qd.bind(null,o),e.ce&&e.ce(o),o}let Ze=null;const Ho=()=>Ze||ft;let Js,uo;{const e=dn(),t=(a,s)=>{let n;return(n=e[a])||(n=e[a]=[]),n.push(s),o=>{n.length>1?n.forEach(r=>r(o)):n[0](o)}};Js=t("__VUE_INSTANCE_SETTERS__",a=>Ze=a),uo=t("__VUE_SSR_SETTERS__",a=>fs=a)}const vs=e=>{const t=Ze;return Js(e),e.scope.on(),()=>{e.scope.off(),Js(t)}},fr=()=>{Ze&&Ze.scope.off(),Js(null)};function Al(e){return e.vnode.shapeFlag&4}let fs=!1;function ru(e,t=!1,a=!1){t&&uo(t);const{props:s,children:n}=e.vnode,o=Al(e);Md(e,s,o,t),Id(e,n,a||t);const r=o?iu(e,t):void 0;return t&&uo(!1),r}function iu(e,t){const a=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Td);const{setup:s}=a;if(s){Yt();const n=e.setupContext=s.length>1?cu(e):null,o=vs(e),r=_s(s,e,0,[e.props,n]),i=bi(r);if(Kt(),o(),(i||e.sp)&&!ts(e)&&sl(e),i){if(r.then(fr,fr),t)return r.then(l=>{hr(e,l)}).catch(l=>{hn(l,e,0)});e.asyncDep=r}else hr(e,r)}else Cl(e)}function hr(e,t,a){we(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:De(t)&&(e.setupState=ji(t)),Cl(e)}function Cl(e,t,a){const s=e.type;e.render||(e.render=s.render||Dt);{const n=vs(e);Yt();try{kd(e)}finally{Kt(),n()}}}const lu={get(e,t){return Qe(e,"get",""),e[t]}};function cu(e){const t=a=>{e.exposed=a||{}};return{attrs:new Proxy(e.attrs,lu),slots:e.slots,emit:e.emit,expose:t}}function vn(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(ji($o(e.exposed)),{get(t,a){if(a in t)return t[a];if(a in as)return as[a](e)},has(t,a){return a in t||a in as}})):e.proxy}function du(e,t=!0){return we(e)?e.displayName||e.name:e.name||t&&e.__name}function uu(e){return we(e)&&"__vccOpts"in e}const _e=(e,t)=>ed(e,t,fs);function Uo(e,t,a){try{Ks(-1);const s=arguments.length;return s===2?De(t)&&!ye(t)?Ws(t)?et(e,null,[t]):et(e,t):et(e,null,t):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&Ws(a)&&(a=[a]),et(e,t,a))}finally{Ks(1)}}const pu="3.5.24";let po;const gr=typeof window<"u"&&window.trustedTypes;if(gr)try{po=gr.createPolicy("vue",{createHTML:e=>e})}catch{}const Pl=po?e=>po.createHTML(e):e=>e,fu="http://www.w3.org/2000/svg",hu="http://www.w3.org/1998/Math/MathML",Ht=typeof document<"u"?document:null,mr=Ht&&Ht.createElement("template"),gu={insert:(e,t,a)=>{t.insertBefore(e,a||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,a,s)=>{const n=t==="svg"?Ht.createElementNS(fu,e):t==="mathml"?Ht.createElementNS(hu,e):a?Ht.createElement(e,{is:a}):Ht.createElement(e);return e==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:e=>Ht.createTextNode(e),createComment:e=>Ht.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Ht.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,a,s,n,o){const r=a?a.previousSibling:t.lastChild;if(n&&(n===o||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),a),!(n===o||!(n=n.nextSibling)););else{mr.innerHTML=Pl(s==="svg"?`<svg>${e}</svg>`:s==="mathml"?`<math>${e}</math>`:e);const i=mr.content;if(s==="svg"||s==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}t.insertBefore(i,a)}return[r?r.nextSibling:t.firstChild,a?a.previousSibling:t.lastChild]}},Zt="transition",Va="animation",hs=Symbol("_vtc"),Ol={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},mu=Ke({},Xi,Ol),bu=e=>(e.displayName="Transition",e.props=mu,e),_u=bu((e,{slots:t})=>Uo(cd,vu(e),t)),ba=(e,t=[])=>{ye(e)?e.forEach(a=>a(...t)):e&&e(...t)},br=e=>e?ye(e)?e.some(t=>t.length>1):e.length>1:!1;function vu(e){const t={};for(const F in e)F in Ol||(t[F]=e[F]);if(e.css===!1)return t;const{name:a="v",type:s,duration:n,enterFromClass:o=`${a}-enter-from`,enterActiveClass:r=`${a}-enter-active`,enterToClass:i=`${a}-enter-to`,appearFromClass:l=o,appearActiveClass:c=r,appearToClass:u=i,leaveFromClass:d=`${a}-leave-from`,leaveActiveClass:p=`${a}-leave-active`,leaveToClass:f=`${a}-leave-to`}=e,g=yu(n),h=g&&g[0],k=g&&g[1],{onBeforeEnter:m,onEnter:v,onEnterCancelled:w,onLeave:E,onLeaveCancelled:$,onBeforeAppear:D=m,onAppear:M=v,onAppearCancelled:V=w}=t,I=(F,G,C,A)=>{F._enterCancelled=A,_a(F,G?u:i),_a(F,G?c:r),C&&C()},U=(F,G)=>{F._isLeaving=!1,_a(F,d),_a(F,f),_a(F,p),G&&G()},j=F=>(G,C)=>{const A=F?M:v,S=()=>I(G,F,C);ba(A,[G,S]),_r(()=>{_a(G,F?l:o),Nt(G,F?u:i),br(A)||vr(G,s,h,S)})};return Ke(t,{onBeforeEnter(F){ba(m,[F]),Nt(F,o),Nt(F,r)},onBeforeAppear(F){ba(D,[F]),Nt(F,l),Nt(F,c)},onEnter:j(!1),onAppear:j(!0),onLeave(F,G){F._isLeaving=!0;const C=()=>U(F,G);Nt(F,d),F._enterCancelled?(Nt(F,p),xr(F)):(xr(F),Nt(F,p)),_r(()=>{F._isLeaving&&(_a(F,d),Nt(F,f),br(E)||vr(F,s,k,C))}),ba(E,[F,C])},onEnterCancelled(F){I(F,!1,void 0,!0),ba(w,[F])},onAppearCancelled(F){I(F,!0,void 0,!0),ba(V,[F])},onLeaveCancelled(F){U(F),ba($,[F])}})}function yu(e){if(e==null)return null;if(De(e))return[Dn(e.enter),Dn(e.leave)];{const t=Dn(e);return[t,t]}}function Dn(e){return vc(e)}function Nt(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.add(a)),(e[hs]||(e[hs]=new Set)).add(t)}function _a(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.remove(s));const a=e[hs];a&&(a.delete(t),a.size||(e[hs]=void 0))}function _r(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let wu=0;function vr(e,t,a,s){const n=e._endId=++wu,o=()=>{n===e._endId&&s()};if(a!=null)return setTimeout(o,a);const{type:r,timeout:i,propCount:l}=xu(e,t);if(!r)return s();const c=r+"end";let u=0;const d=()=>{e.removeEventListener(c,p),o()},p=f=>{f.target===e&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},i+1),e.addEventListener(c,p)}function xu(e,t){const a=window.getComputedStyle(e),s=g=>(a[g]||"").split(", "),n=s(`${Zt}Delay`),o=s(`${Zt}Duration`),r=yr(n,o),i=s(`${Va}Delay`),l=s(`${Va}Duration`),c=yr(i,l);let u=null,d=0,p=0;t===Zt?r>0&&(u=Zt,d=r,p=o.length):t===Va?c>0&&(u=Va,d=c,p=l.length):(d=Math.max(r,c),u=d>0?r>c?Zt:Va:null,p=u?u===Zt?o.length:l.length:0);const f=u===Zt&&/\b(?:transform|all)(?:,|$)/.test(s(`${Zt}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:f}}function yr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((a,s)=>wr(a)+wr(e[s])))}function wr(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function xr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Tu(e,t,a){const s=e[hs];s&&(t=(t?[t,...s]:[...s]).join(" ")),t==null?e.removeAttribute("class"):a?e.setAttribute("class",t):e.className=t}const Xs=Symbol("_vod"),Ll=Symbol("_vsh"),Es={name:"show",beforeMount(e,{value:t},{transition:a}){e[Xs]=e.style.display==="none"?"":e.style.display,a&&t?a.beforeEnter(e):qa(e,t)},mounted(e,{value:t},{transition:a}){a&&t&&a.enter(e)},updated(e,{value:t,oldValue:a},{transition:s}){!t!=!a&&(s?t?(s.beforeEnter(e),qa(e,!0),s.enter(e)):s.leave(e,()=>{qa(e,!1)}):qa(e,t))},beforeUnmount(e,{value:t}){qa(e,t)}};function qa(e,t){e.style.display=t?e[Xs]:"none",e[Ll]=!t}const ku=Symbol(""),Su=/(?:^|;)\s*display\s*:/;function Eu(e,t,a){const s=e.style,n=Ue(a);let o=!1;if(a&&!n){if(t)if(Ue(t))for(const r of t.split(";")){const i=r.slice(0,r.indexOf(":")).trim();a[i]==null&&Ns(s,i,"")}else for(const r in t)a[r]==null&&Ns(s,r,"");for(const r in a)r==="display"&&(o=!0),Ns(s,r,a[r])}else if(n){if(t!==a){const r=s[ku];r&&(a+=";"+r),s.cssText=a,o=Su.test(a)}}else t&&e.removeAttribute("style");Xs in e&&(e[Xs]=o?s.display:"",e[Ll]&&(s.display="none"))}const Tr=/\s*!important$/;function Ns(e,t,a){if(ye(a))a.forEach(s=>Ns(e,t,s));else if(a==null&&(a=""),t.startsWith("--"))e.setProperty(t,a);else{const s=Au(e,t);Tr.test(a)?e.setProperty(pa(s),a.replace(Tr,""),"important"):e[s]=a}}const kr=["Webkit","Moz","ms"],Rn={};function Au(e,t){const a=Rn[t];if(a)return a;let s=wt(t);if(s!=="filter"&&s in e)return Rn[t]=s;s=cn(s);for(let n=0;n<kr.length;n++){const o=kr[n]+s;if(o in e)return Rn[t]=o}return t}const Sr="http://www.w3.org/1999/xlink";function Er(e,t,a,s,n,o=Sc(t)){s&&t.startsWith("xlink:")?a==null?e.removeAttributeNS(Sr,t.slice(6,t.length)):e.setAttributeNS(Sr,t,a):a==null||o&&!wi(a)?e.removeAttribute(t):e.setAttribute(t,o?"":$t(a)?String(a):a)}function Ar(e,t,a,s,n){if(t==="innerHTML"||t==="textContent"){a!=null&&(e[t]=t==="innerHTML"?Pl(a):a);return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){const i=o==="OPTION"?e.getAttribute("value")||"":e.value,l=a==null?e.type==="checkbox"?"on":"":String(a);(i!==l||!("_value"in e))&&(e.value=l),a==null&&e.removeAttribute(t),e._value=a;return}let r=!1;if(a===""||a==null){const i=typeof e[t];i==="boolean"?a=wi(a):a==null&&i==="string"?(a="",r=!0):i==="number"&&(a=0,r=!0)}try{e[t]=a}catch{}r&&e.removeAttribute(n||t)}function wa(e,t,a,s){e.addEventListener(t,a,s)}function Cu(e,t,a,s){e.removeEventListener(t,a,s)}const Cr=Symbol("_vei");function Pu(e,t,a,s,n=null){const o=e[Cr]||(e[Cr]={}),r=o[t];if(s&&r)r.value=s;else{const[i,l]=Ou(t);if(s){const c=o[t]=Du(s,n);wa(e,i,c,l)}else r&&(Cu(e,i,r,l),o[t]=void 0)}}const Pr=/(?:Once|Passive|Capture)$/;function Ou(e){let t;if(Pr.test(e)){t={};let s;for(;s=e.match(Pr);)e=e.slice(0,e.length-s[0].length),t[s[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pa(e.slice(2)),t]}let $n=0;const Lu=Promise.resolve(),Mu=()=>$n||(Lu.then(()=>$n=0),$n=Date.now());function Du(e,t){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;Tt(Ru(s,a.value),t,5,[s])};return a.value=e,a.attached=Mu(),a}function Ru(e,t){if(ye(t)){const a=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{a.call(e),e._stopped=!0},t.map(s=>n=>!n._stopped&&s&&s(n))}else return t}const Or=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,$u=(e,t,a,s,n,o)=>{const r=n==="svg";t==="class"?Tu(e,s,r):t==="style"?Eu(e,a,s):on(t)?ko(t)||Pu(e,t,a,s,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Iu(e,t,s,r))?(Ar(e,t,s),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Er(e,t,s,r,o,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Ue(s))?Ar(e,wt(t),s,o,t):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),Er(e,t,s,r))};function Iu(e,t,a,s){if(s)return!!(t==="innerHTML"||t==="textContent"||t in e&&Or(t)&&we(a));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Or(t)&&Ue(a)?!1:t in e}const Qs=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ye(t)?a=>Ds(t,a):t};function Nu(e){e.target.composing=!0}function Lr(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Ba=Symbol("_assign");function Mr(e,t,a){return t&&(e=e.trim()),a&&(e=Ao(e)),e}const Bs={created(e,{modifiers:{lazy:t,trim:a,number:s}},n){e[Ba]=Qs(n);const o=s||n.props&&n.props.type==="number";wa(e,t?"change":"input",r=>{r.target.composing||e[Ba](Mr(e.value,a,o))}),(a||o)&&wa(e,"change",()=>{e.value=Mr(e.value,a,o)}),t||(wa(e,"compositionstart",Nu),wa(e,"compositionend",Lr),wa(e,"change",Lr))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,oldValue:a,modifiers:{lazy:s,trim:n,number:o}},r){if(e[Ba]=Qs(r),e.composing)return;const i=(o||e.type==="number")&&!/^0\d/.test(e.value)?Ao(e.value):e.value,l=t??"";i!==l&&(document.activeElement===e&&e.type!=="range"&&(s&&t===a||n&&e.value.trim()===l)||(e.value=l))}},Ml={deep:!0,created(e,t,a){e[Ba]=Qs(a),wa(e,"change",()=>{const s=e._modelValue,n=Bu(e),o=e.checked,r=e[Ba];if(ye(s)){const i=xi(s,n),l=i!==-1;if(o&&!l)r(s.concat(n));else if(!o&&l){const c=[...s];c.splice(i,1),r(c)}}else if(rn(s)){const i=new Set(s);o?i.add(n):i.delete(n),r(i)}else r(Dl(e,o))})},mounted:Dr,beforeUpdate(e,t,a){e[Ba]=Qs(a),Dr(e,t,a)}};function Dr(e,{value:t,oldValue:a},s){e._modelValue=t;let n;if(ye(t))n=xi(t,s.props.value)>-1;else if(rn(t))n=t.has(s.props.value);else{if(t===a)return;n=pn(t,Dl(e,!0))}e.checked!==n&&(e.checked=n)}function Bu(e){return"_value"in e?e._value:e.value}function Dl(e,t){const a=t?"_trueValue":"_falseValue";return a in e?e[a]:t}const Fu=["ctrl","shift","alt","meta"],zu={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Fu.some(a=>e[`${a}Key`]&&!t.includes(a))},Ea=(e,t)=>{const a=e._withMods||(e._withMods={}),s=t.join(".");return a[s]||(a[s]=((n,...o)=>{for(let r=0;r<t.length;r++){const i=zu[t[r]];if(i&&i(n,t))return}return e(n,...o)}))},Hu={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},jt=(e,t)=>{const a=e._withKeys||(e._withKeys={}),s=t.join(".");return a[s]||(a[s]=(n=>{if(!("key"in n))return;const o=pa(n.key);if(t.some(r=>r===o||Hu[r]===o))return e(n)}))},Uu=Ke({patchProp:$u},gu);let Rr;function Gu(){return Rr||(Rr=Bd(Uu))}const ju=((...e)=>{const t=Gu().createApp(...e),{mount:a}=t;return t.mount=s=>{const n=qu(s);if(!n)return;const o=t._component;!we(o)&&!o.render&&!o.template&&(o.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const r=a(n,!1,Vu(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),r},t});function Vu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function qu(e){return Ue(e)?document.querySelector(e):e}let Rl;const yn=e=>Rl=e,$l=Symbol();function fo(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var ns;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(ns||(ns={}));function Yu(){const e=Ei(!0),t=e.run(()=>Pe({}));let a=[],s=[];const n=$o({install(o){yn(n),n._a=o,o.provide($l,n),o.config.globalProperties.$pinia=n,s.forEach(r=>a.push(r)),s=[]},use(o){return this._a?a.push(o):s.push(o),this},_p:a,_a:null,_e:e,_s:new Map,state:t});return n}const Il=()=>{};function $r(e,t,a,s=Il){e.add(t);const n=()=>{e.delete(t)&&s()};return!a&&Ai()&&Ac(n),n}function Ca(e,...t){e.forEach(a=>{a(...t)})}const Ku=e=>e(),Ir=Symbol(),In=Symbol();function ho(e,t){e instanceof Map&&t instanceof Map?t.forEach((a,s)=>e.set(s,a)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const a in t){if(!t.hasOwnProperty(a))continue;const s=t[a],n=e[a];fo(n)&&fo(s)&&e.hasOwnProperty(a)&&!je(s)&&!la(s)?e[a]=ho(n,s):e[a]=s}return e}const Wu=Symbol();function Ju(e){return!fo(e)||!Object.prototype.hasOwnProperty.call(e,Wu)}const{assign:ta}=Object;function Xu(e){return!!(je(e)&&e.effect)}function Qu(e,t,a,s){const{state:n,actions:o,getters:r}=t,i=a.state.value[e];let l;function c(){i||(a.state.value[e]=n?n():{});const u=Jc(a.state.value[e]);return ta(u,o,Object.keys(r||{}).reduce((d,p)=>(d[p]=$o(_e(()=>{yn(a);const f=a._s.get(e);return r[p].call(f,f)})),d),{}))}return l=Nl(e,c,t,a,s,!0),l}function Nl(e,t,a={},s,n,o){let r;const i=ta({actions:{}},a),l={deep:!0};let c,u,d=new Set,p=new Set,f;const g=s.state.value[e];!o&&!g&&(s.state.value[e]={}),Pe({});let h;function k(V){let I;c=u=!1,typeof V=="function"?(V(s.state.value[e]),I={type:ns.patchFunction,storeId:e,events:f}):(ho(s.state.value[e],V),I={type:ns.patchObject,payload:V,storeId:e,events:f});const U=h=Symbol();Io().then(()=>{h===U&&(c=!0)}),u=!0,Ca(d,I,s.state.value[e])}const m=o?function(){const{state:I}=a,U=I?I():{};this.$patch(j=>{ta(j,U)})}:Il;function v(){r.stop(),d.clear(),p.clear(),s._s.delete(e)}const w=(V,I="")=>{if(Ir in V)return V[In]=I,V;const U=function(){yn(s);const j=Array.from(arguments),F=new Set,G=new Set;function C(R){F.add(R)}function A(R){G.add(R)}Ca(p,{args:j,name:U[In],store:$,after:C,onError:A});let S;try{S=V.apply(this&&this.$id===e?this:$,j)}catch(R){throw Ca(G,R),R}return S instanceof Promise?S.then(R=>(Ca(F,R),R)).catch(R=>(Ca(G,R),Promise.reject(R))):(Ca(F,S),S)};return U[Ir]=!0,U[In]=I,U},E={_p:s,$id:e,$onAction:$r.bind(null,p),$patch:k,$reset:m,$subscribe(V,I={}){const U=$r(d,V,I.detached,()=>j()),j=r.run(()=>Na(()=>s.state.value[e],F=>{(I.flush==="sync"?u:c)&&V({storeId:e,type:ns.direct,events:f},F)},ta({},l,I)));return U},$dispose:v},$=Ot(E);s._s.set(e,$);const M=(s._a&&s._a.runWithContext||Ku)(()=>s._e.run(()=>(r=Ei()).run(()=>t({action:w}))));for(const V in M){const I=M[V];if(je(I)&&!Xu(I)||la(I))o||(g&&Ju(I)&&(je(I)?I.value=g[V]:ho(I,g[V])),s.state.value[e][V]=I);else if(typeof I=="function"){const U=w(I,V);M[V]=U,i.actions[V]=I}}return ta($,M),ta(Ee($),M),Object.defineProperty($,"$state",{get:()=>s.state.value[e],set:V=>{k(I=>{ta(I,V)})}}),s._p.forEach(V=>{ta($,r.run(()=>V({store:$,app:s._a,pinia:s,options:i})))}),g&&o&&a.hydrate&&a.hydrate($.$state,g),c=!0,u=!0,$}function Zu(e,t,a){let s;const n=typeof t=="function";s=n?a:t;function o(r,i){const l=Ld();return r=r||(l?yt($l,null):null),r&&yn(r),r=Rl,r._s.has(e)||(n?Nl(e,t,s,r):Qu(e,s,r)),r._s.get(e)}return o.$id=e,o}const Da=typeof document<"u";function Bl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function ep(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&Bl(e.default)}const Oe=Object.assign;function Nn(e,t){const a={};for(const s in t){const n=t[s];a[s]=kt(n)?n.map(e):e(n)}return a}const os=()=>{},kt=Array.isArray;function Nr(e,t){const a={};for(const s in e)a[s]=s in t?t[s]:e[s];return a}const Fl=/#/g,tp=/&/g,ap=/\//g,sp=/=/g,np=/\?/g,zl=/\+/g,op=/%5B/g,rp=/%5D/g,Hl=/%5E/g,ip=/%60/g,Ul=/%7B/g,lp=/%7C/g,Gl=/%7D/g,cp=/%20/g;function Go(e){return e==null?"":encodeURI(""+e).replace(lp,"|").replace(op,"[").replace(rp,"]")}function dp(e){return Go(e).replace(Ul,"{").replace(Gl,"}").replace(Hl,"^")}function go(e){return Go(e).replace(zl,"%2B").replace(cp,"+").replace(Fl,"%23").replace(tp,"%26").replace(ip,"`").replace(Ul,"{").replace(Gl,"}").replace(Hl,"^")}function up(e){return go(e).replace(sp,"%3D")}function pp(e){return Go(e).replace(Fl,"%23").replace(np,"%3F")}function fp(e){return pp(e).replace(ap,"%2F")}function gs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const hp=/\/$/,gp=e=>e.replace(hp,"");function Bn(e,t,a="/"){let s,n={},o="",r="";const i=t.indexOf("#");let l=t.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(s=t.slice(0,l),o=t.slice(l,i>0?i:t.length),n=e(o.slice(1))),i>=0&&(s=s||t.slice(0,i),r=t.slice(i,t.length)),s=vp(s??t,a),{fullPath:s+o+r,path:s,query:n,hash:gs(r)}}function mp(e,t){const a=t.query?e(t.query):"";return t.path+(a&&"?")+a+(t.hash||"")}function Br(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function bp(e,t,a){const s=t.matched.length-1,n=a.matched.length-1;return s>-1&&s===n&&Fa(t.matched[s],a.matched[n])&&jl(t.params,a.params)&&e(t.query)===e(a.query)&&t.hash===a.hash}function Fa(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function jl(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const a in e)if(!_p(e[a],t[a]))return!1;return!0}function _p(e,t){return kt(e)?Fr(e,t):kt(t)?Fr(t,e):e===t}function Fr(e,t){return kt(t)?e.length===t.length&&e.every((a,s)=>a===t[s]):e.length===1&&e[0]===t}function vp(e,t){if(e.startsWith("/"))return e;if(!e)return t;const a=t.split("/"),s=e.split("/"),n=s[s.length-1];(n===".."||n===".")&&s.push("");let o=a.length-1,r,i;for(r=0;r<s.length;r++)if(i=s[r],i!==".")if(i==="..")o>1&&o--;else break;return a.slice(0,o).join("/")+"/"+s.slice(r).join("/")}const ea={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let mo=(function(e){return e.pop="pop",e.push="push",e})({}),Fn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function yp(e){if(!e)if(Da){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),gp(e)}const wp=/^[^#]+#/;function xp(e,t){return e.replace(wp,"#")+t}function Tp(e,t){const a=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-a.left-(t.left||0),top:s.top-a.top-(t.top||0)}}const wn=()=>({left:window.scrollX,top:window.scrollY});function kp(e){let t;if("el"in e){const a=e.el,s=typeof a=="string"&&a.startsWith("#"),n=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!n)return;t=Tp(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function zr(e,t){return(history.state?history.state.position-t:-1)+e}const bo=new Map;function Sp(e,t){bo.set(e,t)}function Ep(e){const t=bo.get(e);return bo.delete(e),t}function Ap(e){return typeof e=="string"||e&&typeof e=="object"}function Vl(e){return typeof e=="string"||typeof e=="symbol"}let He=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const ql=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function za(e,t){return Oe(new Error,{type:e,[ql]:!0},t)}function Bt(e,t){return e instanceof Error&&ql in e&&(t==null||!!(e.type&t))}const Cp=["params","query","hash"];function Pp(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const a of Cp)a in e&&(t[a]=e[a]);return JSON.stringify(t,null,2)}function Op(e){const t={};if(e===""||e==="?")return t;const a=(e[0]==="?"?e.slice(1):e).split("&");for(let s=0;s<a.length;++s){const n=a[s].replace(zl," "),o=n.indexOf("="),r=gs(o<0?n:n.slice(0,o)),i=o<0?null:gs(n.slice(o+1));if(r in t){let l=t[r];kt(l)||(l=t[r]=[l]),l.push(i)}else t[r]=i}return t}function Hr(e){let t="";for(let a in e){const s=e[a];if(a=up(a),s==null){s!==void 0&&(t+=(t.length?"&":"")+a);continue}(kt(s)?s.map(n=>n&&go(n)):[s&&go(s)]).forEach(n=>{n!==void 0&&(t+=(t.length?"&":"")+a,n!=null&&(t+="="+n))})}return t}function Lp(e){const t={};for(const a in e){const s=e[a];s!==void 0&&(t[a]=kt(s)?s.map(n=>n==null?null:""+n):s==null?s:""+s)}return t}const Mp=Symbol(""),Ur=Symbol(""),xn=Symbol(""),jo=Symbol(""),_o=Symbol("");function Ya(){let e=[];function t(s){return e.push(s),()=>{const n=e.indexOf(s);n>-1&&e.splice(n,1)}}function a(){e=[]}return{add:t,list:()=>e.slice(),reset:a}}function na(e,t,a,s,n,o=r=>r()){const r=s&&(s.enterCallbacks[n]=s.enterCallbacks[n]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(za(He.NAVIGATION_ABORTED,{from:a,to:t})):p instanceof Error?l(p):Ap(p)?l(za(He.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(r&&s.enterCallbacks[n]===r&&typeof p=="function"&&r.push(p),i())},u=o(()=>e.call(s&&s.instances[n],t,a,c));let d=Promise.resolve(u);e.length<3&&(d=d.then(c)),d.catch(p=>l(p))})}function zn(e,t,a,s,n=o=>o()){const o=[];for(const r of e)for(const i in r.components){let l=r.components[i];if(!(t!=="beforeRouteEnter"&&!r.instances[i]))if(Bl(l)){const c=(l.__vccOpts||l)[t];c&&o.push(na(c,a,s,r,i,n))}else{let c=l();o.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${i}" at "${r.path}"`);const d=ep(u)?u.default:u;r.mods[i]=u,r.components[i]=d;const p=(d.__vccOpts||d)[t];return p&&na(p,a,s,r,i,n)()}))}}return o}function Dp(e,t){const a=[],s=[],n=[],o=Math.max(t.matched.length,e.matched.length);for(let r=0;r<o;r++){const i=t.matched[r];i&&(e.matched.find(c=>Fa(c,i))?s.push(i):a.push(i));const l=e.matched[r];l&&(t.matched.find(c=>Fa(c,l))||n.push(l))}return[a,s,n]}let Rp=()=>location.protocol+"//"+location.host;function Yl(e,t){const{pathname:a,search:s,hash:n}=t,o=e.indexOf("#");if(o>-1){let r=n.includes(e.slice(o))?e.slice(o).length:1,i=n.slice(r);return i[0]!=="/"&&(i="/"+i),Br(i,"")}return Br(a,e)+s+n}function $p(e,t,a,s){let n=[],o=[],r=null;const i=({state:p})=>{const f=Yl(e,location),g=a.value,h=t.value;let k=0;if(p){if(a.value=f,t.value=p,r&&r===g){r=null;return}k=h?p.position-h.position:0}else s(f);n.forEach(m=>{m(a.value,g,{delta:k,type:mo.pop,direction:k?k>0?Fn.forward:Fn.back:Fn.unknown})})};function l(){r=a.value}function c(p){n.push(p);const f=()=>{const g=n.indexOf(p);g>-1&&n.splice(g,1)};return o.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Oe({},p.state,{scroll:wn()}),"")}}function d(){for(const p of o)p();o=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function Gr(e,t,a,s=!1,n=!1){return{back:e,current:t,forward:a,replaced:s,position:window.history.length,scroll:n?wn():null}}function Ip(e){const{history:t,location:a}=window,s={value:Yl(e,a)},n={value:t.state};n.value||o(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function o(l,c,u){const d=e.indexOf("#"),p=d>-1?(a.host&&document.querySelector("base")?e:e.slice(d))+l:Rp()+e+l;try{t[u?"replaceState":"pushState"](c,"",p),n.value=c}catch(f){console.error(f),a[u?"replace":"assign"](p)}}function r(l,c){o(l,Oe({},t.state,Gr(n.value.back,l,n.value.forward,!0),c,{position:n.value.position}),!0),s.value=l}function i(l,c){const u=Oe({},n.value,t.state,{forward:l,scroll:wn()});o(u.current,u,!0),o(l,Oe({},Gr(s.value,l,null),{position:u.position+1},c),!1),s.value=l}return{location:s,state:n,push:i,replace:r}}function Np(e){e=yp(e);const t=Ip(e),a=$p(e,t.state,t.location,t.replace);function s(o,r=!0){r||a.pauseListeners(),history.go(o)}const n=Oe({location:"",base:e,go:s,createHref:xp.bind(null,e)},t,a);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function Bp(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Np(e)}let Ta=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Ye=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Ye||{});const Fp={type:Ta.Static,value:""},zp=/[a-zA-Z0-9_]/;function Hp(e){if(!e)return[[]];if(e==="/")return[[Fp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${a})/"${c}": ${f}`)}let a=Ye.Static,s=a;const n=[];let o;function r(){o&&n.push(o),o=[]}let i=0,l,c="",u="";function d(){c&&(a===Ye.Static?o.push({type:Ta.Static,value:c}):a===Ye.Param||a===Ye.ParamRegExp||a===Ye.ParamRegExpEnd?(o.length>1&&(l==="*"||l==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),o.push({type:Ta.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<e.length;){if(l=e[i++],l==="\\"&&a!==Ye.ParamRegExp){s=a,a=Ye.EscapeNext;continue}switch(a){case Ye.Static:l==="/"?(c&&d(),r()):l===":"?(d(),a=Ye.Param):p();break;case Ye.EscapeNext:p(),a=s;break;case Ye.Param:l==="("?a=Ye.ParamRegExp:zp.test(l)?p():(d(),a=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Ye.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:a=Ye.ParamRegExpEnd:u+=l;break;case Ye.ParamRegExpEnd:d(),a=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,u="";break;default:t("Unknown state");break}}return a===Ye.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),d(),r(),n}const jr="[^/]+?",Up={sensitive:!1,strict:!1,start:!0,end:!0};var st=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(st||{});const Gp=/[.+*?^${}()[\]/\\]/g;function jp(e,t){const a=Oe({},Up,t),s=[];let n=a.start?"^":"";const o=[];for(const c of e){const u=c.length?[]:[st.Root];a.strict&&!c.length&&(n+="/");for(let d=0;d<c.length;d++){const p=c[d];let f=st.Segment+(a.sensitive?st.BonusCaseSensitive:0);if(p.type===Ta.Static)d||(n+="/"),n+=p.value.replace(Gp,"\\$&"),f+=st.Static;else if(p.type===Ta.Param){const{value:g,repeatable:h,optional:k,regexp:m}=p;o.push({name:g,repeatable:h,optional:k});const v=m||jr;if(v!==jr){f+=st.BonusCustomRegExp;try{`${v}`}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${v}): `+E.message)}}let w=h?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;d||(w=k&&c.length<2?`(?:/${w})`:"/"+w),k&&(w+="?"),n+=w,f+=st.Dynamic,k&&(f+=st.BonusOptional),h&&(f+=st.BonusRepeatable),v===".*"&&(f+=st.BonusWildcard)}u.push(f)}s.push(u)}if(a.strict&&a.end){const c=s.length-1;s[c][s[c].length-1]+=st.BonusStrict}a.strict||(n+="/?"),a.end?n+="$":a.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const r=new RegExp(n,a.sensitive?"":"i");function i(c){const u=c.match(r),d={};if(!u)return null;for(let p=1;p<u.length;p++){const f=u[p]||"",g=o[p-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const p of e){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of p)if(f.type===Ta.Static)u+=f.value;else if(f.type===Ta.Param){const{value:g,repeatable:h,optional:k}=f,m=g in c?c[g]:"";if(kt(m)&&!h)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const v=kt(m)?m.join("/"):m;if(!v)if(k)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=v}}return u||"/"}return{re:r,score:s,keys:o,parse:i,stringify:l}}function Vp(e,t){let a=0;for(;a<e.length&&a<t.length;){const s=t[a]-e[a];if(s)return s;a++}return e.length<t.length?e.length===1&&e[0]===st.Static+st.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===st.Static+st.Segment?1:-1:0}function Kl(e,t){let a=0;const s=e.score,n=t.score;for(;a<s.length&&a<n.length;){const o=Vp(s[a],n[a]);if(o)return o;a++}if(Math.abs(n.length-s.length)===1){if(Vr(s))return 1;if(Vr(n))return-1}return n.length-s.length}function Vr(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const qp={strict:!1,end:!0,sensitive:!1};function Yp(e,t,a){const s=jp(Hp(e.path),a),n=Oe(s,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function Kp(e,t){const a=[],s=new Map;t=Nr(qp,t);function n(d){return s.get(d)}function o(d,p,f){const g=!f,h=Yr(d);h.aliasOf=f&&f.record;const k=Nr(t,d),m=[h];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const $ of E)m.push(Yr(Oe({},h,{components:f?f.record.components:h.components,path:$,aliasOf:f?f.record:h})))}let v,w;for(const E of m){const{path:$}=E;if(p&&$[0]!=="/"){const D=p.record.path,M=D[D.length-1]==="/"?"":"/";E.path=p.record.path+($&&M+$)}if(v=Yp(E,p,k),f?f.alias.push(v):(w=w||v,w!==v&&w.alias.push(v),g&&d.name&&!Kr(v)&&r(d.name)),Wl(v)&&l(v),h.children){const D=h.children;for(let M=0;M<D.length;M++)o(D[M],v,f&&f.children[M])}f=f||v}return w?()=>{r(w)}:os}function r(d){if(Vl(d)){const p=s.get(d);p&&(s.delete(d),a.splice(a.indexOf(p),1),p.children.forEach(r),p.alias.forEach(r))}else{const p=a.indexOf(d);p>-1&&(a.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(r),d.alias.forEach(r))}}function i(){return a}function l(d){const p=Xp(d,a);a.splice(p,0,d),d.record.name&&!Kr(d)&&s.set(d.record.name,d)}function c(d,p){let f,g={},h,k;if("name"in d&&d.name){if(f=s.get(d.name),!f)throw za(He.MATCHER_NOT_FOUND,{location:d});k=f.record.name,g=Oe(qr(p.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&qr(d.params,f.keys.map(w=>w.name))),h=f.stringify(g)}else if(d.path!=null)h=d.path,f=a.find(w=>w.re.test(h)),f&&(g=f.parse(h),k=f.record.name);else{if(f=p.name?s.get(p.name):a.find(w=>w.re.test(p.path)),!f)throw za(He.MATCHER_NOT_FOUND,{location:d,currentLocation:p});k=f.record.name,g=Oe({},p.params,d.params),h=f.stringify(g)}const m=[];let v=f;for(;v;)m.unshift(v.record),v=v.parent;return{name:k,path:h,params:g,matched:m,meta:Jp(m)}}e.forEach(d=>o(d));function u(){a.length=0,s.clear()}return{addRoute:o,resolve:c,removeRoute:r,clearRoutes:u,getRoutes:i,getRecordMatcher:n}}function qr(e,t){const a={};for(const s of t)s in e&&(a[s]=e[s]);return a}function Yr(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:Wp(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function Wp(e){const t={},a=e.props||!1;if("component"in e)t.default=a;else for(const s in e.components)t[s]=typeof a=="object"?a[s]:a;return t}function Kr(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Jp(e){return e.reduce((t,a)=>Oe(t,a.meta),{})}function Xp(e,t){let a=0,s=t.length;for(;a!==s;){const o=a+s>>1;Kl(e,t[o])<0?s=o:a=o+1}const n=Qp(e);return n&&(s=t.lastIndexOf(n,s-1)),s}function Qp(e){let t=e;for(;t=t.parent;)if(Wl(t)&&Kl(e,t)===0)return t}function Wl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function Wr(e){const t=yt(xn),a=yt(jo),s=_e(()=>{const l=ot(e.to);return t.resolve(l)}),n=_e(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=a.matched;if(!u||!d.length)return-1;const p=d.findIndex(Fa.bind(null,u));if(p>-1)return p;const f=Jr(l[c-2]);return c>1&&Jr(u)===f&&d[d.length-1].path!==f?d.findIndex(Fa.bind(null,l[c-2])):p}),o=_e(()=>n.value>-1&&sf(a.params,s.value.params)),r=_e(()=>n.value>-1&&n.value===a.matched.length-1&&jl(a.params,s.value.params));function i(l={}){if(af(l)){const c=t[ot(e.replace)?"replace":"push"](ot(e.to)).catch(os);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:_e(()=>s.value.href),isActive:o,isExactActive:r,navigate:i}}function Zp(e){return e.length===1?e[0]:e}const ef=al({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wr,setup(e,{slots:t}){const a=Ot(Wr(e)),{options:s}=yt(xn),n=_e(()=>({[Xr(e.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[Xr(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const o=t.default&&Zp(t.default(a));return e.custom?o:Uo("a",{"aria-current":a.isExactActive?e.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:n.value},o)}}}),tf=ef;function af(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function sf(e,t){for(const a in t){const s=t[a],n=e[a];if(typeof s=="string"){if(s!==n)return!1}else if(!kt(n)||n.length!==s.length||s.some((o,r)=>o!==n[r]))return!1}return!0}function Jr(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xr=(e,t,a)=>e??t??a,nf=al({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:a}){const s=yt(_o),n=_e(()=>e.route||s.value),o=yt(Ur,0),r=_e(()=>{let c=ot(o);const{matched:u}=n.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),i=_e(()=>n.value.matched[r.value]);Rs(Ur,_e(()=>r.value+1)),Rs(Mp,i),Rs(_o,n);const l=Pe();return Na(()=>[l.value,i.value,e.name],([c,u,d],[p,f,g])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Fa(u,f)||!p)&&(u.enterCallbacks[d]||[]).forEach(h=>h(c))},{flush:"post"}),()=>{const c=n.value,u=e.name,d=i.value,p=d&&d.components[u];if(!p)return Qr(a.default,{Component:p,route:c});const f=d.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,k=Uo(p,Oe({},g,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Qr(a.default,{Component:k,route:c})||k}}});function Qr(e,t){if(!e)return null;const a=e(t);return a.length===1?a[0]:a}const Jl=nf;function of(e){const t=Kp(e.routes,e),a=e.parseQuery||Op,s=e.stringifyQuery||Hr,n=e.history,o=Ya(),r=Ya(),i=Ya(),l=Yc(ea);let c=ea;Da&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Nn.bind(null,z=>""+z),d=Nn.bind(null,fp),p=Nn.bind(null,gs);function f(z,te){let Z,re;return Vl(z)?(Z=t.getRecordMatcher(z),re=te):re=z,t.addRoute(re,Z)}function g(z){const te=t.getRecordMatcher(z);te&&t.removeRoute(te)}function h(){return t.getRoutes().map(z=>z.record)}function k(z){return!!t.getRecordMatcher(z)}function m(z,te){if(te=Oe({},te||l.value),typeof z=="string"){const _=Bn(a,z,te.path),x=t.resolve({path:_.path},te),B=n.createHref(_.fullPath);return Oe(_,x,{params:p(x.params),hash:gs(_.hash),redirectedFrom:void 0,href:B})}let Z;if(z.path!=null)Z=Oe({},z,{path:Bn(a,z.path,te.path).path});else{const _=Oe({},z.params);for(const x in _)_[x]==null&&delete _[x];Z=Oe({},z,{params:d(_)}),te.params=d(te.params)}const re=t.resolve(Z,te),ie=z.hash||"";re.params=u(p(re.params));const y=mp(s,Oe({},z,{hash:dp(ie),path:re.path})),P=n.createHref(y);return Oe({fullPath:y,hash:ie,query:s===Hr?Lp(z.query):z.query||{}},re,{redirectedFrom:void 0,href:P})}function v(z){return typeof z=="string"?Bn(a,z,l.value.path):Oe({},z)}function w(z,te){if(c!==z)return za(He.NAVIGATION_CANCELLED,{from:te,to:z})}function E(z){return M(z)}function $(z){return E(Oe(v(z),{replace:!0}))}function D(z,te){const Z=z.matched[z.matched.length-1];if(Z&&Z.redirect){const{redirect:re}=Z;let ie=typeof re=="function"?re(z,te):re;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=v(ie):{path:ie},ie.params={}),Oe({query:z.query,hash:z.hash,params:ie.path!=null?{}:z.params},ie)}}function M(z,te){const Z=c=m(z),re=l.value,ie=z.state,y=z.force,P=z.replace===!0,_=D(Z,re);if(_)return M(Oe(v(_),{state:typeof _=="object"?Oe({},ie,_.state):ie,force:y,replace:P}),te||Z);const x=Z;x.redirectedFrom=te;let B;return!y&&bp(s,re,Z)&&(B=za(He.NAVIGATION_DUPLICATED,{to:x,from:re}),X(re,re,!0,!1)),(B?Promise.resolve(B):U(x,re)).catch(N=>Bt(N)?Bt(N,He.NAVIGATION_GUARD_REDIRECT)?N:Q(N):O(N,x,re)).then(N=>{if(N){if(Bt(N,He.NAVIGATION_GUARD_REDIRECT))return M(Oe({replace:P},v(N.to),{state:typeof N.to=="object"?Oe({},ie,N.to.state):ie,force:y}),te||x)}else N=F(x,re,!0,P,ie);return j(x,re,N),N})}function V(z,te){const Z=w(z,te);return Z?Promise.reject(Z):Promise.resolve()}function I(z){const te=se.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(z):z()}function U(z,te){let Z;const[re,ie,y]=Dp(z,te);Z=zn(re.reverse(),"beforeRouteLeave",z,te);for(const _ of re)_.leaveGuards.forEach(x=>{Z.push(na(x,z,te))});const P=V.bind(null,z,te);return Z.push(P),ne(Z).then(()=>{Z=[];for(const _ of o.list())Z.push(na(_,z,te));return Z.push(P),ne(Z)}).then(()=>{Z=zn(ie,"beforeRouteUpdate",z,te);for(const _ of ie)_.updateGuards.forEach(x=>{Z.push(na(x,z,te))});return Z.push(P),ne(Z)}).then(()=>{Z=[];for(const _ of y)if(_.beforeEnter)if(kt(_.beforeEnter))for(const x of _.beforeEnter)Z.push(na(x,z,te));else Z.push(na(_.beforeEnter,z,te));return Z.push(P),ne(Z)}).then(()=>(z.matched.forEach(_=>_.enterCallbacks={}),Z=zn(y,"beforeRouteEnter",z,te,I),Z.push(P),ne(Z))).then(()=>{Z=[];for(const _ of r.list())Z.push(na(_,z,te));return Z.push(P),ne(Z)}).catch(_=>Bt(_,He.NAVIGATION_CANCELLED)?_:Promise.reject(_))}function j(z,te,Z){i.list().forEach(re=>I(()=>re(z,te,Z)))}function F(z,te,Z,re,ie){const y=w(z,te);if(y)return y;const P=te===ea,_=Da?history.state:{};Z&&(re||P?n.replace(z.fullPath,Oe({scroll:P&&_&&_.scroll},ie)):n.push(z.fullPath,ie)),l.value=z,X(z,te,Z,P),Q()}let G;function C(){G||(G=n.listen((z,te,Z)=>{if(!ee.listening)return;const re=m(z),ie=D(re,ee.currentRoute.value);if(ie){M(Oe(ie,{replace:!0,force:!0}),re).catch(os);return}c=re;const y=l.value;Da&&Sp(zr(y.fullPath,Z.delta),wn()),U(re,y).catch(P=>Bt(P,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?P:Bt(P,He.NAVIGATION_GUARD_REDIRECT)?(M(Oe(v(P.to),{force:!0}),re).then(_=>{Bt(_,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!Z.delta&&Z.type===mo.pop&&n.go(-1,!1)}).catch(os),Promise.reject()):(Z.delta&&n.go(-Z.delta,!1),O(P,re,y))).then(P=>{P=P||F(re,y,!1),P&&(Z.delta&&!Bt(P,He.NAVIGATION_CANCELLED)?n.go(-Z.delta,!1):Z.type===mo.pop&&Bt(P,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),j(re,y,P)}).catch(os)}))}let A=Ya(),S=Ya(),R;function O(z,te,Z){Q(z);const re=S.list();return re.length?re.forEach(ie=>ie(z,te,Z)):console.error(z),Promise.reject(z)}function q(){return R&&l.value!==ea?Promise.resolve():new Promise((z,te)=>{A.add([z,te])})}function Q(z){return R||(R=!z,C(),A.list().forEach(([te,Z])=>z?Z(z):te()),A.reset()),z}function X(z,te,Z,re){const{scrollBehavior:ie}=e;if(!Da||!ie)return Promise.resolve();const y=!Z&&Ep(zr(z.fullPath,0))||(re||!Z)&&history.state&&history.state.scroll||null;return Io().then(()=>ie(z,te,y)).then(P=>P&&kp(P)).catch(P=>O(P,z,te))}const oe=z=>n.go(z);let K;const se=new Set,ee={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:h,resolve:m,options:e,push:E,replace:$,go:oe,back:()=>oe(-1),forward:()=>oe(1),beforeEach:o.add,beforeResolve:r.add,afterEach:i.add,onError:S.add,isReady:q,install(z){z.component("RouterLink",tf),z.component("RouterView",Jl),z.config.globalProperties.$router=ee,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(l)}),Da&&!K&&l.value===ea&&(K=!0,E(n.location).catch(re=>{}));const te={};for(const re in ea)Object.defineProperty(te,re,{get:()=>l.value[re],enumerable:!0});z.provide(xn,ee),z.provide(jo,Ui(te)),z.provide(_o,l);const Z=z.unmount;se.add(z),z.unmount=function(){se.delete(z),se.size<1&&(c=ea,G&&G(),G=null,l.value=ea,K=!1,R=!1),Z()}}};function ne(z){return z.reduce((te,Z)=>te.then(()=>I(Z)),Promise.resolve())}return ee}function lt(){return yt(xn)}function ys(e){return yt(jo)}var rf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ja={exports:{}},cf=Ja.exports,Zr;function df(){return Zr||(Zr=1,(function(e,t){(function(a,s){var n={};a.PubSub?(n=a.PubSub,console.warn("PubSub already loaded, using existing version")):(a.PubSub=n,s(n)),e!==void 0&&e.exports&&(t=e.exports=n),t.PubSub=n,e.exports=t=n})(typeof window=="object"&&window||cf||rf,function(a){var s={},n=-1,o="*";function r(h){var k;for(k in h)if(Object.prototype.hasOwnProperty.call(h,k))return!0;return!1}function i(h){return function(){throw h}}function l(h,k,m){try{h(k,m)}catch(v){setTimeout(i(v),0)}}function c(h,k,m){h(k,m)}function u(h,k,m,v){var w=s[k],E=v?c:l,$;if(Object.prototype.hasOwnProperty.call(s,k))for($ in w)Object.prototype.hasOwnProperty.call(w,$)&&E(w[$],h,m)}function d(h,k,m){return function(){var w=String(h),E=w.lastIndexOf(".");for(u(h,h,k,m);E!==-1;)w=w.substr(0,E),E=w.lastIndexOf("."),u(h,w,k,m);u(h,o,k,m)}}function p(h){var k=String(h),m=!!(Object.prototype.hasOwnProperty.call(s,k)&&r(s[k]));return m}function f(h){for(var k=String(h),m=p(k)||p(o),v=k.lastIndexOf(".");!m&&v!==-1;)k=k.substr(0,v),v=k.lastIndexOf("."),m=p(k);return m}function g(h,k,m,v){h=typeof h=="symbol"?h.toString():h;var w=d(h,k,v),E=f(h);return E?(m===!0?w():setTimeout(w,0),!0):!1}a.publish=function(h,k){return g(h,k,!1,a.immediateExceptions)},a.publishSync=function(h,k){return g(h,k,!0,a.immediateExceptions)},a.subscribe=function(h,k){if(typeof k!="function")return!1;h=typeof h=="symbol"?h.toString():h,Object.prototype.hasOwnProperty.call(s,h)||(s[h]={});var m="uid_"+String(++n);return s[h][m]=k,m},a.subscribeAll=function(h){return a.subscribe(o,h)},a.subscribeOnce=function(h,k){var m=a.subscribe(h,function(){a.unsubscribe(m),k.apply(this,arguments)});return a},a.clearAllSubscriptions=function(){s={}},a.clearSubscriptions=function(k){var m;for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(k)===0&&delete s[m]},a.countSubscriptions=function(k){var m,v,w=0;for(m in s)if(Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(k)===0){for(v in s[m])w++;break}return w},a.getSubscriptions=function(k){var m,v=[];for(m in s)Object.prototype.hasOwnProperty.call(s,m)&&m.indexOf(k)===0&&v.push(m);return v},a.unsubscribe=function(h){var k=function(V){var I;for(I in s)if(Object.prototype.hasOwnProperty.call(s,I)&&I.indexOf(V)===0)return!0;return!1},m=typeof h=="string"&&(Object.prototype.hasOwnProperty.call(s,h)||k(h)),v=!m&&typeof h=="string",w=typeof h=="function",E=!1,$,D,M;if(m){a.clearSubscriptions(h);return}for($ in s)if(Object.prototype.hasOwnProperty.call(s,$)){if(D=s[$],v&&D[h]){delete D[h],E=h;break}if(w)for(M in D)Object.prototype.hasOwnProperty.call(D,M)&&D[M]===h&&(delete D[M],E=!0)}return E}})})(Ja,Ja.exports)),Ja.exports}var uf=df();const de=lf(uf);let Ge=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!0,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!0,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!0,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!0,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!0,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const pf={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function ua(e){return new Promise((t,a)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>a(e.error)})}function ff(e,t){let a;const s=()=>{if(a)return a;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),a=ua(n),a.then(o=>{o.onclose=()=>a=void 0},()=>{}),a};return(n,o)=>s().then(r=>o(r.transaction(t,n).objectStore(t)))}let Hn;function ws(){return Hn||(Hn=ff("keyval-store","keyval")),Hn}function hf(e,t=ws()){return t("readonly",a=>ua(a.get(e)))}function ei(e,t,a=ws()){return a("readwrite",s=>(s.put(t,e),ua(s.transaction)))}function Un(e,t=ws()){return t("readwrite",a=>(a.delete(e),ua(a.transaction)))}function Xl(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},ua(e.transaction)}function Pa(e=ws()){return e("readonly",t=>{if(t.getAllKeys)return ua(t.getAllKeys());const a=[];return Xl(t,s=>a.push(s.key)).then(()=>a)})}function gf(e=ws()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([ua(t.getAllKeys()),ua(t.getAll())]).then(([s,n])=>s.map((o,r)=>[o,n[r]]));const a=[];return e("readonly",s=>Xl(s,n=>a.push([n.key,n.value])).then(()=>a))})}const Ha=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Zs=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let a=0;a<e.length;a+=1)if(!Zs(e[a],t[a]))return!1;return!0}if(Ha(e)&&Ha(t)){const a=Object.entries(e),s=new Set(Object.keys(t));if(a.length!==s.size)return!1;for(const[n,o]of a){if(!Zs(o,t[n]))return!1;s.delete(n)}return s.size===0}return!1},As=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(Ha(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},mf=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",ti=e=>e>="0"&&e<="9"||e==="-",bf=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var J;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(J||(J={}));const ai={"(":J.TOK_LPAREN,")":J.TOK_RPAREN,"*":J.TOK_STAR,",":J.TOK_COMMA,".":J.TOK_DOT,":":J.TOK_COLON,"@":J.TOK_CURRENT,$:J.TOK_ROOT,"]":J.TOK_RBRACKET,"{":J.TOK_LBRACE,"}":J.TOK_RBRACE},_f={"!":!0,"<":!0,"=":!0,">":!0},vf={"	":!0,"\n":!0,"\r":!0," ":!0};class yf{constructor(){this._current=0}tokenize(t){const a=[];this._current=0;let s,n,o;for(;this._current<t.length;)if(mf(t[this._current]))s=this._current,n=this.consumeUnquotedIdentifier(t),a.push({start:s,type:J.TOK_UNQUOTEDIDENTIFIER,value:n});else if(ai[t[this._current]]!==void 0)a.push({start:this._current,type:ai[t[this._current]],value:t[this._current]}),this._current+=1;else if(ti(t[this._current]))o=this.consumeNumber(t),a.push(o);else if(t[this._current]==="[")o=this.consumeLBracket(t),a.push(o);else if(t[this._current]==='"')s=this._current,n=this.consumeQuotedIdentifier(t),a.push({start:s,type:J.TOK_QUOTEDIDENTIFIER,value:n});else if(t[this._current]==="'")s=this._current,n=this.consumeRawStringLiteral(t),a.push({start:s,type:J.TOK_LITERAL,value:n});else if(t[this._current]==="`"){s=this._current;const r=this.consumeLiteral(t);a.push({start:s,type:J.TOK_LITERAL,value:r})}else if(_f[t[this._current]]!==void 0)o=this.consumeOperator(t),o&&a.push(o);else if(vf[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")s=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,a.push({start:s,type:J.TOK_AND,value:"&&"})):a.push({start:s,type:J.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")s=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,a.push({start:s,type:J.TOK_OR,value:"||"})):a.push({start:s,type:J.TOK_PIPE,value:"|"});else{const r=new Error(`Unknown character: ${t[this._current]}`);throw r.name="LexerError",r}return a}consumeUnquotedIdentifier(t){const a=this._current;for(this._current+=1;this._current<t.length&&bf(t[this._current]);)this._current+=1;return t.slice(a,this._current)}consumeQuotedIdentifier(t){const a=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=='"'&&this._current<s;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==='"')?n+=2:n+=1,this._current=n}return this._current+=1,JSON.parse(t.slice(a,this._current))}consumeRawStringLiteral(t){const a=this._current;this._current+=1;const s=t.length;for(;t[this._current]!=="'"&&this._current<s;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="'")?o+=2:o+=1,this._current=o}return this._current+=1,t.slice(a+1,this._current-1).replace("\\'","'")}consumeNumber(t){const a=this._current;this._current+=1;const s=t.length;for(;ti(t[this._current])&&this._current<s;)this._current+=1;const n=parseInt(t.slice(a,this._current),10);return{start:a,value:n,type:J.TOK_NUMBER}}consumeLBracket(t){const a=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:a,type:J.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:a,type:J.TOK_FLATTEN,value:"[]"}):{start:a,type:J.TOK_LBRACKET,value:"["}}consumeOperator(t){const a=this._current,s=t[a];if(this._current+=1,s==="!")return t[this._current]==="="?(this._current+=1,{start:a,type:J.TOK_NE,value:"!="}):{start:a,type:J.TOK_NOT,value:"!"};if(s==="<")return t[this._current]==="="?(this._current+=1,{start:a,type:J.TOK_LTE,value:"<="}):{start:a,type:J.TOK_LT,value:"<"};if(s===">")return t[this._current]==="="?(this._current+=1,{start:a,type:J.TOK_GTE,value:">="}):{start:a,type:J.TOK_GT,value:">"};if(s==="="&&t[this._current]==="=")return this._current+=1,{start:a,type:J.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const a=this._current,s=t.length;for(;t[this._current]!=="`"&&this._current<s;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="`")?r+=2:r+=1,this._current=r}let n=t.slice(a,this._current).trimLeft();n=n.replace("\\`","`");const o=this.looksLikeJSON(n)?JSON.parse(n):JSON.parse(`"${n}"`);return this._current+=1,o}looksLikeJSON(t){const s=["true","false","null"],n="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||s.includes(t))return!0;if(n.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const Ql=new yf,Je={[J.TOK_EOF]:0,[J.TOK_UNQUOTEDIDENTIFIER]:0,[J.TOK_QUOTEDIDENTIFIER]:0,[J.TOK_RBRACKET]:0,[J.TOK_RPAREN]:0,[J.TOK_COMMA]:0,[J.TOK_RBRACE]:0,[J.TOK_NUMBER]:0,[J.TOK_CURRENT]:0,[J.TOK_EXPREF]:0,[J.TOK_ROOT]:0,[J.TOK_PIPE]:1,[J.TOK_OR]:2,[J.TOK_AND]:3,[J.TOK_EQ]:5,[J.TOK_GT]:5,[J.TOK_LT]:5,[J.TOK_GTE]:5,[J.TOK_LTE]:5,[J.TOK_NE]:5,[J.TOK_FLATTEN]:9,[J.TOK_STAR]:20,[J.TOK_FILTER]:21,[J.TOK_DOT]:40,[J.TOK_NOT]:45,[J.TOK_LBRACE]:50,[J.TOK_LBRACKET]:55,[J.TOK_LPAREN]:60};class wf{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const a=this.expression(0);if(this.lookahead(0)!==J.TOK_EOF){const s=this.lookaheadToken(0);this.errorToken(s,`Unexpected token type: ${s.type}, value: ${s.value}`)}return a}loadTokens(t){this.tokens=[...Ql.tokenize(t),{type:J.TOK_EOF,value:"",start:t.length}]}expression(t){const a=this.lookaheadToken(0);this.advance();let s=this.nud(a),n=this.lookahead(0);for(;t<Je[n];)this.advance(),s=this.led(n,s),n=this.lookahead(0);return s}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let a,s,n;switch(t.type){case J.TOK_LITERAL:return{type:"Literal",value:t.value};case J.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case J.TOK_QUOTEDIDENTIFIER:const o={type:"Field",name:t.value};if(this.lookahead(0)===J.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return o;case J.TOK_NOT:return s=this.expression(Je.Not),{type:"NotExpression",children:[s]};case J.TOK_STAR:return a={type:"Identity"},s=this.lookahead(0)===J.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Je.Star),{type:"ValueProjection",children:[a,s]};case J.TOK_FILTER:return this.led(t.type,{type:"Identity"});case J.TOK_LBRACE:return this.parseMultiselectHash();case J.TOK_FLATTEN:return a={type:J.TOK_FLATTEN,children:[{type:"Identity"}]},s=this.parseProjectionRHS(Je.Flatten),{type:"Projection",children:[a,s]};case J.TOK_LBRACKET:return this.lookahead(0)===J.TOK_NUMBER||this.lookahead(0)===J.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},s)):this.lookahead(0)===J.TOK_STAR&&this.lookahead(1)===J.TOK_RBRACKET?(this.advance(),this.advance(),s=this.parseProjectionRHS(Je.Star),{children:[{type:"Identity"},s],type:"Projection"}):this.parseMultiselectList();case J.TOK_CURRENT:return{type:J.TOK_CURRENT};case J.TOK_ROOT:return{type:J.TOK_ROOT};case J.TOK_EXPREF:return n=this.expression(Je.Expref),{type:"ExpressionReference",children:[n]};case J.TOK_LPAREN:const r=[];for(;this.lookahead(0)!==J.TOK_RPAREN;)this.lookahead(0)===J.TOK_CURRENT?(n={type:J.TOK_CURRENT},this.advance()):n=this.expression(0),r.push(n);return this.match(J.TOK_RPAREN),r[0];default:this.errorToken(t)}}led(t,a){let s;switch(t){case J.TOK_DOT:const n=Je.Dot;return this.lookahead(0)!==J.TOK_STAR?(s=this.parseDotRHS(n),{type:"Subexpression",children:[a,s]}):(this.advance(),s=this.parseProjectionRHS(n),{type:"ValueProjection",children:[a,s]});case J.TOK_PIPE:return s=this.expression(Je.Pipe),{type:J.TOK_PIPE,children:[a,s]};case J.TOK_OR:return s=this.expression(Je.Or),{type:"OrExpression",children:[a,s]};case J.TOK_AND:return s=this.expression(Je.And),{type:"AndExpression",children:[a,s]};case J.TOK_LPAREN:const o=a.name,r=[];let i;for(;this.lookahead(0)!==J.TOK_RPAREN;)this.lookahead(0)===J.TOK_CURRENT?(i={type:J.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===J.TOK_COMMA&&this.match(J.TOK_COMMA),r.push(i);return this.match(J.TOK_RPAREN),{name:o,type:"Function",children:r};case J.TOK_FILTER:const c=this.expression(0);return this.match(J.TOK_RBRACKET),s=this.lookahead(0)===J.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Je.Filter),{type:"FilterProjection",children:[a,s,c]};case J.TOK_FLATTEN:const u={type:J.TOK_FLATTEN,children:[a]},d=this.parseProjectionRHS(Je.Flatten);return{type:"Projection",children:[u,d]};case J.TOK_EQ:case J.TOK_NE:case J.TOK_GT:case J.TOK_GTE:case J.TOK_LT:case J.TOK_LTE:return this.parseComparator(a,t);case J.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===J.TOK_NUMBER||p.type===J.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice(a,s)):(this.match(J.TOK_STAR),this.match(J.TOK_RBRACKET),s=this.parseProjectionRHS(Je.Star),{type:"Projection",children:[a,s]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const a=this.lookaheadToken(0);this.errorToken(a,`Expected ${t}, got: ${a.type}`)}}errorToken(t,a=""){const s=new Error(a||`Invalid token (${t.type}): "${t.value}"`);throw s.name="ParserError",s}parseIndexExpression(){if(this.lookahead(0)===J.TOK_COLON||this.lookahead(1)===J.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(J.TOK_RBRACKET),t}projectIfSlice(t,a){const s={type:"IndexExpression",children:[t,a]};return a.type==="Slice"?{children:[s,this.parseProjectionRHS(Je.Star)],type:"Projection"}:s}parseSliceExpression(){const t=[null,null,null];let a=0,s=this.lookahead(0);for(;s!==J.TOK_RBRACKET&&a<3;){if(s===J.TOK_COLON)a+=1,this.advance();else if(s===J.TOK_NUMBER)t[a]=this.lookaheadToken(0).value,this.advance();else{const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}s=this.lookahead(0)}return this.match(J.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,a){const s=this.expression(Je[a]);return{type:"Comparator",name:a,children:[t,s]}}parseDotRHS(t){const a=this.lookahead(0);if([J.TOK_UNQUOTEDIDENTIFIER,J.TOK_QUOTEDIDENTIFIER,J.TOK_STAR].includes(a))return this.expression(t);if(a===J.TOK_LBRACKET)return this.match(J.TOK_LBRACKET),this.parseMultiselectList();if(a===J.TOK_LBRACE)return this.match(J.TOK_LBRACE),this.parseMultiselectHash();const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseProjectionRHS(t){if(Je[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===J.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===J.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===J.TOK_DOT)return this.match(J.TOK_DOT),this.parseDotRHS(t);const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==J.TOK_RBRACKET;){const a=this.expression(0);if(t.push(a),this.lookahead(0)===J.TOK_COMMA&&(this.match(J.TOK_COMMA),this.lookahead(0)===J.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(J.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],a=[J.TOK_UNQUOTEDIDENTIFIER,J.TOK_QUOTEDIDENTIFIER];let s,n,o;for(;;){if(s=this.lookaheadToken(0),!a.includes(s.type))throw new Error(`Expecting an identifier token, got: ${s.type}`);if(n=s.value,this.advance(),this.match(J.TOK_COLON),o=this.expression(0),t.push({value:o,type:"KeyValuePair",name:n}),this.lookahead(0)===J.TOK_COMMA)this.match(J.TOK_COMMA);else if(this.lookahead(0)===J.TOK_RBRACE){this.match(J.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const Zl=new wf;var ue;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(ue||(ue={}));class xf{constructor(t){this.TYPE_NAME_TABLE={[ue.TYPE_NUMBER]:"number",[ue.TYPE_ANY]:"any",[ue.TYPE_STRING]:"string",[ue.TYPE_ARRAY]:"array",[ue.TYPE_OBJECT]:"object",[ue.TYPE_BOOLEAN]:"boolean",[ue.TYPE_EXPREF]:"expression",[ue.TYPE_NULL]:"null",[ue.TYPE_ARRAY_NUMBER]:"Array<number>",[ue.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([a])=>Math.abs(a),this.functionAvg=([a])=>{let s=0;for(let n=0;n<a.length;n+=1)s+=a[n];return s/a.length},this.functionCeil=([a])=>Math.ceil(a),this.functionContains=a=>{const[s,n]=a;return s.includes(n)},this.functionEndsWith=a=>{const[s,n]=a;return s.includes(n,s.length-n.length)},this.functionFloor=([a])=>Math.floor(a),this.functionJoin=a=>{const[s,n]=a;return n.join(s)},this.functionKeys=([a])=>Object.keys(a),this.functionLength=([a])=>Ha(a)?Object.keys(a).length:a.length,this.functionMap=a=>{if(!this._interpreter)return[];const s=[],n=this._interpreter,o=a[0],r=a[1];for(let i=0;i<r.length;i+=1)s.push(n.visit(o,r[i]));return s},this.functionMax=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===ue.TYPE_NUMBER)return Math.max(...a);const n=a;let o=n[0];for(let r=1;r<n.length;r+=1)o.localeCompare(n[r])<0&&(o=n[r]);return o},this.functionMaxBy=a=>{const s=a[1],n=a[0],o=this.createKeyFunction(s,[ue.TYPE_NUMBER,ue.TYPE_STRING]);let r=-1/0,i,l;for(let c=0;c<n.length;c+=1)l=o&&o(n[c]),l!==void 0&&l>r&&(r=l,i=n[c]);return i},this.functionMerge=a=>{let s={};for(let n=0;n<a.length;n+=1){const o=a[n];s=Object.assign(s,o)}return s},this.functionMin=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===ue.TYPE_NUMBER)return Math.min(...a);const n=a;let o=n[0];for(let r=1;r<n.length;r+=1)n[r].localeCompare(o)<0&&(o=n[r]);return o},this.functionMinBy=a=>{const s=a[1],n=a[0],o=this.createKeyFunction(s,[ue.TYPE_NUMBER,ue.TYPE_STRING]);let r=1/0,i,l;for(let c=0;c<n.length;c+=1)l=o&&o(n[c]),l!==void 0&&l<r&&(r=l,i=n[c]);return i},this.functionNotNull=a=>{for(let s=0;s<a.length;s+=1)if(this.getTypeName(a[s])!==ue.TYPE_NULL)return a[s];return null},this.functionReverse=([a])=>{if(this.getTypeName(a)===ue.TYPE_STRING){const o=a;let r="";for(let i=o.length-1;i>=0;i-=1)r+=o[i];return r}const n=a.slice(0);return n.reverse(),n},this.functionSort=([a])=>[...a].sort(),this.functionSortBy=a=>{if(!this._interpreter)return[];const s=a[0].slice(0);if(s.length===0)return s;const n=this._interpreter,o=a[1],r=this.getTypeName(n.visit(o,s[0]));if(r!==void 0&&![ue.TYPE_NUMBER,ue.TYPE_STRING].includes(r))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[r]})`);const i=[];for(let l=0;l<s.length;l+=1)i.push([l,s[l]]);i.sort((l,c)=>{const u=n.visit(o,l[1]),d=n.visit(o,c[1]);if(this.getTypeName(u)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);if(this.getTypeName(d)!==r)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[r]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);return u>d?1:u<d?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)s[l]=i[l][1];return s},this.functionStartsWith=([a,s])=>a.startsWith(s),this.functionSum=([a])=>a.reduce((s,n)=>s+n,0),this.functionToArray=([a])=>this.getTypeName(a)===ue.TYPE_ARRAY?a:[a],this.functionToNumber=([a])=>{const s=this.getTypeName(a);let n;return s===ue.TYPE_NUMBER?a:s===ue.TYPE_STRING&&(n=+a,!isNaN(n))?n:null},this.functionToString=([a])=>this.getTypeName(a)===ue.TYPE_STRING?a:JSON.stringify(a),this.functionType=([a])=>{switch(this.getTypeName(a)){case ue.TYPE_NUMBER:return"number";case ue.TYPE_STRING:return"string";case ue.TYPE_ARRAY:return"array";case ue.TYPE_OBJECT:return"object";case ue.TYPE_BOOLEAN:return"boolean";case ue.TYPE_EXPREF:return"expref";case ue.TYPE_NULL:return"null";default:return}},this.functionValues=([a])=>Object.values(a),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[ue.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[ue.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[ue.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY]},{types:[ue.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[ue.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[ue.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY,ue.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[ue.TYPE_EXPREF]},{types:[ue.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[ue.TYPE_ARRAY_NUMBER,ue.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[ue.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[ue.TYPE_ARRAY_NUMBER,ue.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[ue.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[ue.TYPE_ARRAY_STRING,ue.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[ue.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[ue.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[ue.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[ue.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[ue.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[ue.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,a,s){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:a.bind(this),_signature:s}}callFunction(t,a){const s=this.functionTable[t];if(s===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,a,s._signature),s._func.call(this,a)}validateInputSignatures(t,a){for(let s=0;s<a.length;s+=1)if("variadic"in a[s]&&s!==a.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${s+1} must occur last`)}validateArgs(t,a,s){var n,o;let r;this.validateInputSignatures(t,s);const i=s.filter(h=>{var k;return(k=!h.optional)!==null&&k!==void 0?k:!1}).length,l=(o=(n=s[s.length-1])===null||n===void 0?void 0:n.variadic)!==null&&o!==void 0?o:!1,c=a.length<i,u=a.length>s.length,d=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||u))throw r=s.length>1,new Error(`ArgumentError: ${t}() takes ${d}${i} argument${r&&"s"||""} but received ${a.length}`);let p,f,g;for(let h=0;h<s.length;h+=1){g=!1,p=s[h].types,f=this.getTypeName(a[h]);let k;for(k=0;k<p.length;k+=1)if(f!==void 0&&this.typeMatches(f,p[k],a[h])){g=!0;break}if(!g&&f!==void 0){const m=p.map(v=>this.TYPE_NAME_TABLE[v]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${h+1} to be type (${m}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,a,s){if(a===ue.TYPE_ANY)return!0;if(a===ue.TYPE_ARRAY_STRING||a===ue.TYPE_ARRAY_NUMBER||a===ue.TYPE_ARRAY){if(a===ue.TYPE_ARRAY)return t===ue.TYPE_ARRAY;if(t===ue.TYPE_ARRAY){let n;a===ue.TYPE_ARRAY_NUMBER?n=ue.TYPE_NUMBER:a===ue.TYPE_ARRAY_STRING&&(n=ue.TYPE_STRING);for(let o=0;o<s.length;o+=1){const r=this.getTypeName(s[o]);if(r!==void 0&&n!==void 0&&!this.typeMatches(r,n,s[o]))return!1}return!0}}else return t===a;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return ue.TYPE_STRING;case"[object Number]":return ue.TYPE_NUMBER;case"[object Array]":return ue.TYPE_ARRAY;case"[object Boolean]":return ue.TYPE_BOOLEAN;case"[object Null]":return ue.TYPE_NULL;case"[object Object]":return t.jmespathType===J.TOK_EXPREF?ue.TYPE_EXPREF:ue.TYPE_OBJECT;default:return}}createKeyFunction(t,a){if(!this._interpreter)return;const s=this._interpreter;return o=>{const r=s.visit(t,o);if(!a.includes(this.getTypeName(r))){const i=`TypeError: expected one of (${a.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(r)]}`;throw new Error(i)}return r}}}class Tf{constructor(){this._rootValue=null,this.runtime=new xf(this)}search(t,a){return this._rootValue=a,this.visit(t,a)}visit(t,a){let s,n,o,r,i,l,c,u,d,p,f;switch(t.type){case"Field":return a===null?null:Ha(a)?(l=a[t.name],l===void 0?null:l):null;case"Subexpression":for(o=this.visit(t.children[0],a),p=1;p<t.children.length;p+=1)if(o=this.visit(t.children[1],o),o===null)return null;return o;case"IndexExpression":return c=this.visit(t.children[0],a),u=this.visit(t.children[1],c),u;case"Index":if(!Array.isArray(a))return null;let g=t.value;return g<0&&(g=a.length+g),o=a[g],o===void 0&&(o=null),o;case"Slice":if(!Array.isArray(a))return null;const h=[...t.children],k=this.computeSliceParams(a.length,h),[m,v,w]=k;if(o=[],w>0)for(p=m;p<v;p+=w)o.push(a[p]);else for(p=m;p>v;p+=w)o.push(a[p]);return o;case"Projection":if(f=this.visit(t.children[0],a),!Array.isArray(f))return null;for(d=[],p=0;p<f.length;p+=1)n=this.visit(t.children[1],f[p]),n!==null&&d.push(n);return d;case"ValueProjection":if(f=this.visit(t.children[0],a),!Ha(f))return null;d=[];const E=Object.values(f);for(p=0;p<E.length;p+=1)n=this.visit(t.children[1],E[p]),n!==null&&d.push(n);return d;case"FilterProjection":if(f=this.visit(t.children[0],a),!Array.isArray(f))return null;const $=[],D=[];for(p=0;p<f.length;p+=1)s=this.visit(t.children[2],f[p]),As(s)||$.push(f[p]);for(let F=0;F<$.length;F+=1)n=this.visit(t.children[1],$[F]),n!==null&&D.push(n);return D;case"Comparator":switch(r=this.visit(t.children[0],a),i=this.visit(t.children[1],a),t.name){case J.TOK_EQ:o=Zs(r,i);break;case J.TOK_NE:o=!Zs(r,i);break;case J.TOK_GT:o=r>i;break;case J.TOK_GTE:o=r>=i;break;case J.TOK_LT:o=r<i;break;case J.TOK_LTE:o=r<=i;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return o;case J.TOK_FLATTEN:const M=this.visit(t.children[0],a);if(!Array.isArray(M))return null;let V=[];for(p=0;p<M.length;p+=1)n=M[p],Array.isArray(n)?V=[...V,...n]:V.push(n);return V;case"Identity":return a;case"MultiSelectList":if(a===null)return null;for(d=[],p=0;p<t.children.length;p+=1)d.push(this.visit(t.children[p],a));return d;case"MultiSelectHash":if(a===null)return null;d={};let I;for(p=0;p<t.children.length;p+=1)I=t.children[p],d[I.name]=this.visit(I.value,a);return d;case"OrExpression":return s=this.visit(t.children[0],a),As(s)&&(s=this.visit(t.children[1],a)),s;case"AndExpression":return r=this.visit(t.children[0],a),As(r)?r:this.visit(t.children[1],a);case"NotExpression":return r=this.visit(t.children[0],a),As(r);case"Literal":return t.value;case J.TOK_PIPE:return c=this.visit(t.children[0],a),this.visit(t.children[1],c);case J.TOK_CURRENT:return a;case J.TOK_ROOT:return this._rootValue;case"Function":const U=[];for(let F=0;F<t.children.length;F+=1)U.push(this.visit(t.children[F],a));return this.runtime.callFunction(t.name,U);case"ExpressionReference":const j=t.children[0];return j.jmespathType=J.TOK_EXPREF,j;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,a){let[s,n,o]=a;if(o===null)o=1;else if(o===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const r=o<0;return s=s===null?r?t-1:0:this.capSliceRange(t,s,o),n=n===null?r?-1:t:this.capSliceRange(t,n,o),[s,n,o]}capSliceRange(t,a,s){let n=a;return n<0?(n+=t,n<0&&(n=s<0?-1:0)):n>=t&&(n=s<0?t-1:t),n}}const Vo=new Tf,kf=ue.TYPE_ANY,Sf=ue.TYPE_ARRAY,Ef=ue.TYPE_ARRAY_NUMBER,Af=ue.TYPE_ARRAY_STRING,Cf=ue.TYPE_BOOLEAN,Pf=ue.TYPE_EXPREF,Of=ue.TYPE_NULL,Lf=ue.TYPE_NUMBER,Mf=ue.TYPE_OBJECT,Df=ue.TYPE_STRING;function Rf(e){return Zl.parse(e)}function $f(e){return Ql.tokenize(e)}const If=(e,t,a)=>{Vo.runtime.registerFunction(e,t,a)};function Nf(e,t){const a=Zl.parse(t);return Vo.search(a,e)}const Bf=Vo,bt={compile:Rf,registerFunction:If,search:Nf,tokenize:$f,TreeInterpreter:Bf,TYPE_ANY:kf,TYPE_ARRAY_NUMBER:Ef,TYPE_ARRAY_STRING:Af,TYPE_ARRAY:Sf,TYPE_BOOLEAN:Cf,TYPE_EXPREF:Pf,TYPE_NULL:Of,TYPE_NUMBER:Lf,TYPE_OBJECT:Mf,TYPE_STRING:Df},Ct=class Ct{static async appendPrompt(t,a){ei(t,LZString.compressToUTF16(JSON.stringify(a))).then(async()=>{Pa().then(s=>{s=s.filter(n=>n.indexOf(this.DELIM_PROMPTS)!=-1),s.length>Ct.MAX_PROMPTS_VALS&&Un(s[0])})}).catch(s=>console.error("~IDB Failed | ",s))}static async appendVIR_products(t){t.forEach(a=>{let s=JSON.stringify({ts:Date.now(),name:a[1]});ei(a[0],LZString.compressToUTF16(s)).then(async()=>{}).catch(n=>console.error("~IDB Failed | ",n))})}static async keys(t,a){Pa().then(s=>{s=s.filter(n=>n.indexOf(t)!=-1),a&&a(s)})}static async get(t,a){hf(t).then(s=>{try{s=JSON.parse(LZString.decompressFromUTF16(s))}catch{}finally{a&&a(s)}})}static async entries(t,a){gf().then(s=>{s=s.filter(n=>n[0].indexOf(t)!=-1),s=s.map(n=>{try{n[1]=JSON.parse(LZString.decompressFromUTF16(n[1]))}catch{}finally{}return n}),a&&a(s)})}static compr(t){return t}static decompr(t){return t}static async act(t,a,s){let n="";switch(t){case"PROMPTS_COUNT":Pa().then(r=>{r=r.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),n=`There are ${r.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,n&&s&&s(n)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":Pa().then(r=>{r.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(Ct.DELIM_PROMPTS)[0]==a&&Un(i)})}),n="The Prompt history has been removed for UPI: "+a,console.log("~ PROMPTS_CLEAR ------ | ",n);break;case"VIR_COUNT":Pa().then(r=>{r=r.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),n=`There are ${r.length} VNR names in local IDB storage.`,n&&s&&s(n)});break;case"VIR_CLEAR":let o=0;await Pa().then(r=>{r.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(Ct.DELIM_VIR)[0]==a&&(o++,Un(i))})}),n=`The VNR Names have been removed for UPI: ${a} (Total Deleted: ${o})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),n="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",n),n&&s&&s(n)}};Ct.MAX_TYPEAHEAD_ROWS=14,Ct.MAX_PROMPTS_VALS=50,Ct.DELIM_PROMPTS="_",Ct.DELIM_VIR="-",Ct.DELIM_SNDX="|";let xa=Ct;const ke=Zu("AppState",()=>{const e=lt(),t="DEV",a="BMA Tourney v0.0.5 ",s="#app",n=Ot({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_TOURNEYS:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS",WC__APP__HEAD_MID__HEAD_MID_PRIVATE:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__LOBBY:"WC.APP.FOOT.LOBBY",WC__APP__FOOT__TOURNEYS:"WC.APP.FOOT.TOURNEYS",WC__APP__FOOT__PRIVATE:"WC.APP.FOOT.PRIVATE",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",ROUTE__INVITES_HYDRATE:"ROUTE.INVITES_HYDRATE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",SSE__CORE__INVITE_SYNC:"SSE.CORE.INVITE_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let o=Ot([]),r=Ot([]),i=Ot([]);const l=G=>{o.push(G),o.length>10&&(o.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${o.length}`)},c=G=>{if(!G?.guid)return;const C=i.findIndex(A=>A.guid===G.guid);C>=0?i.splice(C,1,G):i.push(G)},u=G=>{const C=i.findIndex(A=>A.guid===G);C>=0&&i.splice(C,1)},d=G=>{i.splice(0,i.length,...Array.isArray(G)?G:[])},p=G=>{r.push(G),r.length>10&&(r.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${r.length}`)},f=()=>{const G=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",G),G)try{const C=JSON.parse(G);return console.log("[appState] Parsed session_user:",C),C}catch(C){console.error("Failed to parse session_user from localStorage:",C)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},g=Pe({session_app:{online:!0,route:"",version:a+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:f()}),h=Pe({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),k=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",xa.compr(JSON.stringify(h.value.features)));else{let G=xa.decompr(localStorage.getItem("feature_flags"));G=Object.assign(h.value.features,JSON.parse(G));for(let C in G)typeof h.value?.env_override[t][C]<"u"&&(G[C]=h.value.env_override[t][C]);localStorage.setItem("feature_flags",xa.compr(JSON.stringify(h.value.features=G)))}},m=()=>{const G=document.querySelector(s);if(G){const C=G.dataset;for(let A in C){const S=A.replace(/^sync/,""),R=Object.keys(h.value.features).find(O=>O.toLowerCase()===S.toLowerCase());if(R){const O=h.value.features[R]?.state;O&&(C[A]=O)}}}},v=(G="Theme",C={state:"dark"})=>{const A=document.querySelector(s);A&&(A.dataset["sync"+G]=C.state)},w=(G="Theme",C={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&C){let S=JSON.parse(xa.decompr(localStorage.getItem("feature_flags")));S[G]={state:C.state},localStorage.setItem("feature_flags",xa.compr(JSON.stringify(h.value.features=S))),v(G,C),de.publish("APP.ROUTE_SYNC",`{ "${G}": ${JSON.stringify(C)}}`)}},E=G=>{const C=h.value?.features?.Lang?.state;let A=M.value.microcopy.language.filter(S=>S.code==C)[0]?.copy;if(A=A.filter(S=>S[0]==G)[0],A)return A[1]},$=(G=":version")=>{let[C,A,S]=G.split(" ");switch(C=C.toLocaleLowerCase(),S=="true"&&(S=!0),S=="false"&&(S=!1),C){case":version":neodigmToast.q(`Version Q ${g.value.session_app.version}`,"brand");break;case":feature":w(A,{state:S});break;case":route":neodigmToast.q(`route ${A}`,"brand"),e.push({name:A});break}};k(),m();const D=Ot({designer:"guided_tour",notifications:{unread:0}}),M=Pe({sports:Ge,microcopy:pf.getMeta()}),V=_e(()=>g.value.session_user.fname+" "+g.value.session_user.lname),I=()=>{console.log("[appState] Saving session_user to localStorage:",g.value.session_user),localStorage.setItem("session_user",JSON.stringify(g.value.session_user))},U=()=>{localStorage.removeItem("session_user")};function j(G){return g.value.session_user.authenticated=!0,g.value.session_user.token=G,I(),g.value.session_app.route="chat"}function F(){return g.value.session_user.authenticated=!1,g.value.session_user.token="",g.value.session_user.guid="",U(),API_ORCH.setTJO(null),g.value.session_app.route="auth"}return{appCLIFeatures:h,appDesigner:D,appMeta:M,appSession:g,clearSessionUser:U,concatFirstLast:V,coreBetSlip:r,coreInvites:i,coreTourn:o,doCLI:$,doLogin:j,doLogout:F,hierTopics:n,i18n:E,pushCoreTourn:l,pushcoreBetSlip:p,removeInvite:u,saveSessionUser:I,setCoreInvites:d,setFeaturePersistPub:w,upsertInvite:c}}),Gn="mvvBrand",Ff=400,Ua={scanIntervalId:null,processedElements:new WeakSet,init(){const t=new URLSearchParams(window.location.search).get("brand");t!==null&&(t==="null"||t===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(t)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(e){if(e)try{localStorage.setItem(Gn,e),console.log("[BrandManager] Brand token set:",e)}catch(t){console.error("[BrandManager] Failed to set brand:",t)}},getBrand(){try{return localStorage.getItem(Gn)}catch(e){return console.error("[BrandManager] Failed to get brand:",e),null}},clearBrand(){localStorage.removeItem(Gn),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const e=this.getBrand();return e?{"x-m5t-brand":e}:{}},hydrateBrandElements(){const e=this.getBrand();if(!e)return;const t=document.querySelectorAll("[data-mvv-brand]");t.forEach(a=>{a.getAttribute("data-mvv-brand")==="token"&&(a.textContent=e)}),t.length>0&&console.log(`[BrandManager] Hydrated ${t.length} brand elements with token:`,e)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},Ff),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const e=this.getBrand();if(!e)return;const t=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(a=>{t.push(a)}),document.querySelectorAll("*").forEach(a=>{a.shadowRoot&&a.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{t.push(s)})}),t.forEach(a=>{if(this.processedElements.has(a))return;const s=a.getAttribute("src");if(s&&!s.includes("&brand=")){const n=`${s}&brand=${e}`;a.setAttribute("src",n),this.processedElements.add(a),console.log("[BrandManager] Updated src for element:",a)}})}},vo="bma_anon_session",qo="bma_pending_join_intent",zf=1440*60*1e3,rs=Object.freeze({AUTHED:"authed",PREVIEW:"preview",DENIED:"denied"});function Hf(e,t={}){return(typeof mvvLegit<"u"&&mvvLegit&&typeof mvvLegit.isRouteAllowed=="function"?mvvLegit.isRouteAllowed(e):!1)?rs.AUTHED:t?.previewAllowed?rs.PREVIEW:rs.DENIED}function si(e){const t=typeof neodigmOpt<"u"&&neodigmOpt?.ROOT||null;t&&(t.dataset.authTier=e)}function ec(){let e=sessionStorage.getItem(vo);return e||(e=`anon_${typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}`,sessionStorage.setItem(vo,e)),e}function Uf(){sessionStorage.removeItem(vo)}function Gf(e,t=null){const a={tournamentGuid:e,joinSlug:t||null,sessionId:ec(),capturedAt:Date.now()};return sessionStorage.setItem(qo,JSON.stringify(a)),a}function jf(){const e=sessionStorage.getItem(qo);if(!e)return null;try{const t=JSON.parse(e);return!t?.capturedAt||Date.now()-t.capturedAt>zf?(yo(),null):t}catch{return yo(),null}}function yo(){sessionStorage.removeItem(qo)}function Vf(){const e=jf();return Uf(),yo(),e}const ze=class ze{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),ze.setTJO(null),location.reload()}static async doSignin(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",s)).json();o.ok?(typeof mvvLegit<"u"&&mvvLegit&&o?.accessToken&&mvvLegit.doSignin(o?.accessToken),a&&a(o)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",s)).json();if(o.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),a&&a(o);else{const r=o?.error||o?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(r,"danger"),a&&a(o)}}static async checkUserName(t,a=null){const s={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},o=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",s)).json();return a&&a(o),o}static async resetHash(t,a,s=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const n=typeof neodigmUtils<"u"?neodigmUtils.genHash(a):a,o={method:"POST",body:JSON.stringify({guid:t,hash:n}),headers:ze.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",o)).json();s&&s(i)}static genHeaders(t={}){let a={};a.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),a.Authorization="Bearer expired",a["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(a.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(a.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(a.company=SessionAcctEntity.oEntities.data.entity.company);const s=Ua.getBrandHeader();return Object.assign(a,s),a}static async fetchTournaments(t=null){const a={method:"GET",headers:ze.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",a)).json();return t&&t(n),n}static async fetchTournamentPreview(t,a=null,s=null){typeof a=="function"&&(s=a,a=null);const n={"Content-Type":"application/json","X-Bma-Anon-Session":ec()};Object.assign(n,Ua.getBrandHeader());let o=`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/preview`;a&&(o+=`?s=${encodeURIComponent(a)}`);const i=await fetch(o,{method:"GET",headers:n});let l=null;try{l=await i.json()}catch{l=null}const c={data:l,status:i.status,ok:i.ok};return s&&s(c),c}static async createTournament(t,a=null){const s={method:"POST",body:JSON.stringify(t),headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}static async fetchBetSlips(t,a="",s="",n=null){let o=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;a&&(o+=`/${a}`),a&&s&&(o+=`/${s}`);const r={method:"GET",headers:ze.genHeaders()},l=await(await fetch(this.API_baseURI+o,r)).json();return n&&n(l),l}static async fetchLeaderboard(t,a="",s=null){let n=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;a&&(n+=`&user=${a}`);const o={method:"GET",headers:ze.genHeaders()},i=await(await fetch(this.API_baseURI+n,o)).json();return s&&s(i),i}static async fetchGlobalLeaderboard(t=null){const a=`/m5t/${this.API_ver}/coreLeaderboard`,s={method:"GET",headers:ze.genHeaders()},o=await(await fetch(this.API_baseURI+a,s)).json();return t&&t(o),o}static async fetchAllTimeLeaderboard(t="ALL",a=100,s="td",n=null){const o=new URLSearchParams({sport:t,limit:String(a),sort:s}),r=`/m5t/${this.API_ver}/coreLeaderboard/alltime?${o.toString()}`,i={method:"GET",headers:ze.genHeaders()},c=await(await fetch(this.API_baseURI+r,i)).json();return n&&n(c),c}static async postBetSlips(t,a=null){const s=t.map(o=>{const r={method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",r).then(async i=>{let l=null;try{l=await i.json()}catch{l=null}return{data:l,status:i.status,ok:i.ok}}).catch(i=>({data:null,status:0,ok:!1,networkError:i?.message||"network"}))}),n=await Promise.all(s);return a&&a(n),n}static async fetchPromotions(t=null){const a={method:"GET",headers:ze.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",a)).json();return t&&t(n),n}static async sendInvite(t,a,s=null){const n={method:"POST",body:JSON.stringify(a),headers:ze.genHeaders()},o=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/invite`,n);let r=null;try{r=await o.json()}catch{r=null}const i={data:r,status:o.status,ok:o.ok};return s&&s(i),i}static async fetchInvitesForTournament(t,a=null){const s={method:"GET",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${t}/invites`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}static async fetchMyInvites(t={},a=null){typeof t=="function"&&(a=t,t={});let s=`${this.API_baseURI}/m5t/${this.API_ver}/invites/mine`;t.include==="all"&&(s+="?include=all");const n={method:"GET",headers:ze.genHeaders()},o=await fetch(s,n);let r=null;try{r=await o.json()}catch{r=null}const i={data:r,status:o.status,ok:o.ok};return a&&a(i),i}static async acceptInvite(t,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/accept`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}static async declineInvite(t,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/decline`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}static async revokeInvite(t,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${t}/revoke`,s);let o=null;try{o=await n.json()}catch{o=null}const r={data:o,status:n.status,ok:n.ok};return a&&a(r),r}};ze.API_baseURI="https://machfive-bmacdev-rest.onrender.com",ze.API_ver="v5",ze.jsState={},ze.jsMeta={},ze.jsTJO=null;let xe=ze;const Ga={shootConfetti(){if(typeof confetti=="function"){let s=function(n,o){confetti({...t,...o,particleCount:Math.floor(e*n)})};var a=s,e=200,t={origin:{y:.7}};s(.25,{zIndex:304,spread:26,startVelocity:55}),s(.2,{zIndex:304,spread:60}),s(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),s(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),s(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let a=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(e+"Z"));const s={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return a.toLocaleString(void 0,{...s,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let a={};for(const s in t)e[s]&&t[s]!=e[s]&&(a[s]=e[s]);return Object.keys(a).length>0?a:t},genLorumIpsum(e=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},fa=(e,t)=>{const a=e.__vccOpts||e;for(const[s,n]of t)a[s]=n;return a},qf={class:"auth-page"},Yf={__name:"splash_route",setup(e){const t=lt(),a=ys();return ke(),setTimeout(()=>{a&&a.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(s,n)=>(pe(),fe("div",qf,[...n[0]||(n[0]=[dt('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),b("div",{class:"auth-page-right"},[b("div",{class:"auth-card splash-content"},[b("p",{class:"splash-message"},"Loading Tournaments..."),b("br"),b("br"),b("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[b("div")])])],-1)])]))}},ni=fa(Yf,[["__scopeId","data-v-994bad53"]]);class Kf{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(a=>{let s=!1;for(const n of a){if(n.attributeName==="data-sync-theme"){const o=t.getAttribute("data-sync-theme")||"dark";o!==this._theme&&(this._theme=o,s=!0)}if(n.attributeName==="data-sync-motif"){const o=t.getAttribute("data-sync-motif")||"brand";o!==this._motif&&(this._motif=o,s=!0)}if(n.attributeName==="data-sync-lang"){const o=t.getAttribute("data-sync-lang")||"en";o!==this._lang&&(this._lang=o,s=!0)}}s&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(a){console.warn("[BMAThemeResolver] Listener error:",a)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const Me=new Kf().init(),tc={mobile:"(orientation: portrait), (max-width: 768px)"};function Ve(){return`
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
  `}class Wf extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=Me.theme;let a=this.getAttribute("data-sport-group")||"Soccer",s,n;a==="Multi"?(s="Multi",n=`var(--sport-icon__Multi--${t})`):(s=a.replaceAll(" ","_"),n=`var(--sport-icon__${s}--${t})`),this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}

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
    `}}customElements.define("bma-sport-icon",Wf);class Jf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Me.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,a={}){const s=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...a}});this.dispatchEvent(s)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const a=t.target.closest(".btn-info"),s=t.target.closest(".btn-join"),n=t.target.closest(".btn-play"),o=t.target.closest("bma-sport-icon");if(a){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(s){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(n){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(o){t.stopPropagation();const r=o.getAttribute("sport"),i=this.getSportInfo(r);this.dispatchCardEvent("SPORT_ICON",{sportKey:r,sportTitle:i.title,sportDescription:i.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,a,s){a!==s&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const a=t.scrollHeight-t.clientHeight,s=this.getAttribute("data-compact")==="true";!s&&a>2?this.setAttribute("data-compact","true"):s&&a<-10&&this.removeAttribute("data-compact")})}getTheme(){return Me.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);return Array.isArray(a)?a.find(n=>Array.isArray(n))?.length||"0":a?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);return Array.isArray(a)?a.find(n=>Array.isArray(n))||[]:a?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const a=JSON.parse(t);if(Array.isArray(a)){const s=a.find(o=>o&&typeof o=="object"&&!Array.isArray(o));return{current:a.find(o=>Array.isArray(o))?.length||0,max:parseInt(s?.max)||100}}return{current:a?.guids?.length||0,max:a?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;return a?this.entitiesGuids.includes(a):!1}getUserBadge(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;const s=this.getAttribute("data-bma-tourn-tags");if(!s)return null;try{const n=JSON.parse(s);if(!Array.isArray(n))return null;const o=n.find(r=>!!(typeof r=="object"&&r!==null&&(r.entity_guid===a&&r.badge&&r.badge.startsWith("--badge__ribbon--")||r[a]&&r[a].startsWith("--badge__ribbon--"))));return o&&(o.badge||o[a])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const a=t.match(/--badge__ribbon--(\w+)/);return a?a[1]:""}getSportInfo(t){const a=Ge.find(s=>s.key===t);return a?{title:a.title,description:a.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(s=>{const n=s.title||"Match";let o="TBD";if(s.scheduled_at)try{o=new Date(s.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{o=s.scheduled_at}return`  ${n} @ ${o}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT_FORMAT"}get gameModeBadge(){if(typeof window.GameTypeLifeCycle>"u")return null;const t=window.GameTypeLifeCycle.forToken(this.gameType);return t?t.badge:null}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const a=JSON.parse(t);return Array.isArray(a)?a.map(s=>typeof s=="object"&&s.sport_key?s.sport_key:s):[a]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const a=Math.min(t.length,3);let s="";for(let n=0;n<a;n++){const o=t[n].key,r=Ge.find(l=>l.key===o),i=r?r.group:"default";s+=`<bma-sport-icon sport="${o}" data-sport-group="${i}"></bma-sport-icon>`}return t.length>3&&(s+=`<span class="sport-count">+${t.length-3}</span>`),s}render(){const t=this.getTheme(),a=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}
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
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",Jf);class Xf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".stake-input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-content-point","data-abbreviated-title","data-scheduled-at","data-stake","data-payout","data-payout-base","data-bma-mode-token"]}attributeChangedCallback(t,a,s){if(a!==s){if(t==="data-stake")return;if(t==="data-payout"||t==="data-payout-base"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get point(){return this.getAttribute("data-content-point")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Ga.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",a=parseFloat(t);return isNaN(a)?"0.00":a.toFixed(2)}get potentialProfit(){const t=parseFloat(this.stake)||0,s=(parseFloat(this.payout)||0)-t;return s>0?s.toFixed(2):"0.00"}get bonusMultiplier(){const t=parseFloat(this.getAttribute("data-payout")||"0"),a=parseFloat(this.getAttribute("data-payout-base")||"0");if(!Number.isFinite(t)||!Number.isFinite(a)||a<=0)return null;const s=t/a;if(s<=1.005)return null;const n=parseFloat(s.toFixed(2)).toString(),o=this.getAttribute("data-bma-mode-token")||"";let r="Bonus";if(o&&window.GameTypeLifeCycle?.forToken)try{const i=window.GameTypeLifeCycle.forToken(o);i?.bonusLabel&&(r=i.bonusLabel)}catch{}return`${r} ${n}×`}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".hero-value");t&&(t.textContent=this.potentialProfit);const a=this.shadowRoot?.querySelector(".hero-mult");if(a){const s=this.bonusMultiplier;a.textContent=s||"",a.style.display=s?"":"none"}}setupEventListeners(){const t=this.shadowRoot.querySelector(".close-btn");t&&t.addEventListener("click",()=>{const s={teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")};de.publish("COREBETSLIP.CLOSE",JSON.stringify({...s,timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:s}))});const a=this.shadowRoot.querySelector(".stake-input");a&&a.addEventListener("input",s=>{this.setAttribute("data-stake",s.target.value)})}render(){const t=parseInt(this.odds,10),a=Number.isFinite(t)?t>0?`+${t}`:`${t}`:this.odds,s=this.stake!=="0"?this.stake:"",n=(this.type||"").toUpperCase();this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}

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
          text-align: right;
        }
        /* Hero number row: lets the optional multiplier mark sit tight
           next to the +TD$ amount without inventing a new layout band. */
        .hero {
          display: inline-flex;
          align-items: baseline;
          gap: 6px;
        }
        /* Multiplier mark — small gold typography tucked next to the
           profit number. Renders only when a mode bonus is in play
           (LONGSHOT_MAYHEM qualifying win, TIERED_FORMAT tier, etc).
           Tabular-nums so digits align cleanly across cards. */
        .hero-mult {
          font-size: 0.72rem;
          font-weight: 800;
          color: var(--status-locked-text, #F7C60D);
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.2px;
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
              <span class="hero">
                <span>+TD$ <span class="hero-value">${this.potentialProfit}</span></span>
                <span class="hero-mult"${this.bonusMultiplier?"":' style="display:none"'}>${this.bonusMultiplier||""}</span>
              </span>
              <span class="hero-sublabel">To win</span>
            </div>
          </div>
        </div>
      </div>
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",Xf);class Qf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._expanded=!1}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags","data-bma-mode-token","data-bma-longshot-threshold"]}isLongshotEligible(t){if(this.getAttribute("data-bma-mode-token")!=="LONGSHOT_MAYHEM")return!1;const s=parseFloat(this.getAttribute("data-bma-longshot-threshold")),n=Number.isFinite(s)?s:150,o=parseFloat(t);return Number.isFinite(o)&&o>=n}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing odds_markets:",a),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Me.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing scoreboard:",a),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const a=Ge.find(s=>s.key===t);return a?a.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_usa_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_uefa_champs_league:"UCL",soccer_uefa_europa_league:"UEL",soccer_spain_la_liga:"LALIGA",soccer_germany_bundesliga:"BUN",soccer_italy_serie_a:"SERIE A",soccer_france_ligue_one:"LIGUE 1",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-match-card] Error parsing tournament tags:",a),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(r=>r.match_inprogress_lock===!0))return!1;const s=this.scoreboard;if(!s||!s.time_remaining)return!1;const n=s.time_remaining.toLowerCase();return n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const a=this.shadowRoot?.querySelector(".countdown");a&&(a.textContent=t)}attributeChangedCallback(t,a,s){a!==s&&this.render()}formatDate(t){if(!t)return"TBD";let a=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z")),a.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,a=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&a.setTime(new Date(this.scheduledAt+"Z").getTime());const s=a-t;if(s<=0)return"";const n=Math.floor(s/(1e3*60*60)),o=Math.floor(s%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const a=this.scoreboard;if(a&&a.time_remaining){const s=a.time_remaining.toLowerCase();if(s==="final")return{type:"final",text:"Final",color:"#969696"};if(s==="in progress"||s.includes("q")||s.includes("half")||s.includes("period")){const n=a.home_score!==void 0&&a.home_score!==null||a.away_score!==void 0&&a.away_score!==null,o=a.period!==void 0&&a.period!==null&&a.period!==0;if(n||o)return{type:"live",text:a.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let s=this.scheduledAt;if(!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z"),new Date(s)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,a,s,n,o){t.stopPropagation();const r=t.currentTarget;if(r.classList.contains("btn--disabled")||r.dataset.disabled==="true")return;const i=r.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:a,team:s,price:n,point:o,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:r}}))}renderMarketSection(t,a){return!a||a.length===0?"":`
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
            </button>`;const i=a.price;return`<button class="${["soccer-money-btn",n?"soccer-money-btn--winner":"",o?"soccer-money-btn--loser":"",r?"btn--disabled":"",t==="draw"?"soccer-money-btn--draw":"",this.isLongshotEligible(i)?"btn--longshot-eligible":""].filter(Boolean).join(" ")}"
                    data-bet-type="money"
                    data-team="${t}"
                    data-price="${i}"
                    ${r?'data-disabled="true"':""}>
            <span class="soccer-money-btn__odds" data-price-value="${i}">${this.formatPrice(i)}</span>
        </button>`}renderButton(t,a,s,n,o=!1){if(!s)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const r=s.price,i=s.point,l=this.formatPrice(r),c=parseFloat(i),u=t==="spread"&&c===0;let d="";t==="spread"?u?d=l:d=`${c>0?`+${i}`:i}<br><span class="btn-odds" data-price-value="${r}">${l}</span>`:t==="money"?d=l:t==="total"&&(d=`${n}${i}<br><span class="btn-odds" data-price-value="${r}">${l}</span>`);const p=i!=null&&i!=="",f=this.isLongshotEligible(r)?" btn--longshot-eligible":"";return`<button class="btn${o?" btn--disabled":""}${f}"
                    data-bet-type="${t}"
                    data-team="${a}"
                    data-price="${r}"
                    ${p?`data-point="${i}"`:""}
                    ${o?'data-disabled="true"':""}>
            ${d}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const a=this.isMatchInProgressLocked(),s=this.isDisabled||a,n=!0,o=this.getGameStatus(),r=this.scoreboard,i=r?.home_score||0,l=r?.away_score||0,c=o?.type==="live"||o?.type==="final",u=parseInt(i),d=parseInt(l),p=o?.type==="final",f=o?.type==="live",g=c&&p&&u>d,h=c&&p&&d>u,k=c&&f&&u>d,m=c&&f&&d>u,v=t?.spreads?.outcomes?.find(A=>A.name===this.homeTeam),w=t?.spreads?.outcomes?.find(A=>A.name===this.awayTeam),E=t?.h2h?.outcomes?.find(A=>A.name===this.homeTeam),$=t?.h2h?.outcomes?.find(A=>A.name===this.awayTeam),D=t?.totals?.outcomes?.find(A=>A.name==="Over"),M=t?.totals?.outcomes?.find(A=>A.name==="Under"),V=this.sportKey?.startsWith("soccer_"),I=V?t?.h2h?.outcomes?.find(A=>A.name==="Draw"):null,U=A=>A&&parseFloat(A.point)===0,j=U(v)?v:null,F=U(w)?w:null,G=U(v)?null:v,C=U(w)?null:w;this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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

                /* LONGSHOT_MAYHEM eligibility — green border on any odds
                   button rendering at the configured threshold or higher.
                   Same green token (#00E676) used by bma-longshot-chip so
                   the visual link is unmistakable: chip says "+150 / 25%
                   bonus", every odds button outlined in matching green is
                   eligible. The hover/active gold treatment overrides
                   below, so hover still reads as the universal "you are
                   about to interact" affordance. */
                .btn--longshot-eligible:not(.btn--empty):not(.btn--disabled),
                .soccer-money-btn.btn--longshot-eligible:not(.btn--empty):not(.btn--disabled) {
                    box-shadow: inset 0 0 0 1.5px var(--status-upcoming-text, #00E676), 0 0 8px rgba(0, 230, 118, 0.18);
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

                ${V&&n?`
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
                                ${c?`<span class="team-score ${k?"score--leading":""} ${m?"score--trailing":""}">${i}</span>`:""}
                            </div>
                            <div class="team team--away ${h?"team--winner":""} ${g?"team--loser":""}">
                                <span class="team-name">${this.awayTeam}</span>
                                ${c?`<span class="team-score ${m?"score--leading":""} ${k?"score--trailing":""}">${l}</span>`:""}
                            </div>
                        </div>
                        <div class="soccer-primary__money">
                            ${this.renderSoccerMoneyBtn("home",E,{winner:g,loser:h,disabled:s})}
                            ${this.renderSoccerMoneyBtn("draw",I,{winner:c&&p&&u===d,loser:c&&p&&u!==d,disabled:s})}
                            ${this.renderSoccerMoneyBtn("away",$,{winner:h,loser:g,disabled:s})}
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
                            ${j||F?this.renderMarketSection("Draw No Bet",[{label:this.homeTeam,teamClass:g?"team--winner":h?"team--loser":"",button:this.renderButton("spread","home",j,null,s)},{label:this.awayTeam,teamClass:h?"team--winner":g?"team--loser":"",button:this.renderButton("spread","away",F,null,s)}]):""}
                            ${G||C?this.renderMarketSection("Spread",[{label:this.homeTeam,teamClass:g?"team--winner":h?"team--loser":"",button:this.renderButton("spread","home",G,null,s)},{label:this.awayTeam,teamClass:h?"team--winner":g?"team--loser":"",button:this.renderButton("spread","away",C,null,s)}]):""}
                            ${this.renderMarketSection("Total Goals",[{label:"Over",button:this.renderButton("total","over",D,"O",s)},{label:"Under",button:this.renderButton("total","under",M,"U",s)}])}
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
                                ${c?`<span class="team-score ${k?"score--leading":""} ${m?"score--trailing":""}">${i}</span>`:""}
                            </div>
                            ${`
                                <div class="buttons">
                                    ${this.renderButton("spread","home",G,null,s)}
                                    ${this.renderButton("money","home",E,null,s)}
                                    ${this.renderButton("total","under",M,"U",s)}
                                </div>
                            `}
                        </div>

                        <div class="row row--away">
                            <div class="team team--away ${h?"team--winner":""} ${g?"team--loser":""}">
                                <span class="team-name">${this.awayTeam}</span>
                                ${c?`<span class="team-score ${m?"score--leading":""} ${k?"score--trailing":""}">${l}</span>`:""}
                            </div>
                            ${`
                                <div class="buttons">
                                    ${this.renderButton("spread","away",C,null,s)}
                                    ${this.renderButton("money","away",$,null,s)}
                                    ${this.renderButton("total","over",D,"O",s)}
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
                                class="markets-link ${V?"":"markets-link--disabled"}"
                                ${V?"":'disabled aria-disabled="true"'}
                                data-markets-toggle="${V?"enabled":"disabled"}">
                            ${V&&this._expanded?"Show Less ↑":"See All Markets →"}
                        </button>
                    </div>
                `}
            </div>
        `;{this.shadowRoot.querySelectorAll(".btn:not(.btn--empty), .soccer-money-btn:not(.btn--empty)").forEach(S=>{const R=S.dataset.betType,O=S.dataset.team,q=S.dataset.price,Q=S.dataset.point||null;S.addEventListener("click",X=>this.handleButtonClick(X,R,O,q,Q))});const A=this.shadowRoot.querySelector('[data-markets-toggle="enabled"]');A&&A.addEventListener("click",S=>{S.stopPropagation(),this._expanded=!this._expanded,this.render()})}}}customElements.define("bma-bet-match-card",Qf);const Zf='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',eh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>';class th extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,a,s){a!==s&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch{return null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=Ge.find(a=>a.key===this.sportId);return t?t.group:""}get theme(){return Me.theme}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||""}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let a=this.scheduledAt;!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a+="Z");const s=new Date(a)-t;if(s<=0)return"";const n=Math.floor(s/36e5),o=Math.floor(s%36e5/6e4);return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,a=this.homeScore!==null&&this.awayScore!==null;let s=!1;if(this.scheduledAt){let i=this.scheduledAt;!i.includes("Z")&&!i.match(/[+-]\d{2}:\d{2}$/)&&(i+="Z"),s=new Date(i)<new Date(Date.now()-300*1e3)}let n,o;if(t?.time_remaining){const i=t.time_remaining;i==="Final"?(n="FINAL",o="Final"):i==="In Progress"?(n="LIVE",o="In Progress"):(n="LIVE",o=i)}else a&&s?(n="FINAL",o="Final"):(n="UPCOMING",o="Upcoming");const r=n==="UPCOMING"?this.getCountdownText():"";return{status:n,timeRemaining:o,countdown:r}}render(){const{status:t,timeRemaining:a,countdown:s}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,o=this.scheduledAt?Ga.formatDateLocal(this.scheduledAt):"",r=this.getSportAbbr(),i=t==="LIVE"?"live":t==="FINAL"?"final":"upcoming",l=t==="LIVE"?"Live":t==="FINAL"?"Final":"Upcoming",c=t==="FINAL"?eh:Zf,u=parseInt(this.homeScore),d=parseInt(this.awayScore),p=n&&t==="FINAL"&&u>d,f=n&&t==="FINAL"&&d>u;this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}

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

      <div class="card ${i}">
        <div class="pill">
          <span class="pill-dot"></span>
          <span class="pill-icon">${c}</span>
          <span class="pill-label">${l}</span>
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
    `}}customElements.define("bma-match-status",th);const ah='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',sh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',nh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',oi='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class oa extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme","data-bma-mode-token"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",a),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(a){return console.error("[bma-leaderboard-card] Error parsing user_matches:",a),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Me.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&(this.render(),this.attachEventListeners())}toggleExpanded(){oa.currentlyExpanded&&oa.currentlyExpanded!==this&&oa.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),a.classList.add("expanded"),oa.currentlyExpanded=this):(t.classList.remove("open"),a.classList.remove("expanded"),oa.currentlyExpanded===this&&(oa.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),a&&a.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",a=>{a.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let a=0,s=0,n=0,o=0,r=0;return t.forEach(i=>{const l=i.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(d=>d!=="short_title").forEach(d=>{const p=c[d];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?a++:s++:(n++,o+=parseFloat(p.stake||p.wager||0),r+=parseFloat(p.payout||0)))})}),{wins:a,losses:s,pending:n,total:a+s+n,pendingStakes:o,pendingMaxPayout:r}}renderBetsTable(){const t=this.combinedBetslips,a=this.userMatches,s=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(s)return!0;const u=c[0],d=Object.keys(u).filter(p=>p!=="short_title")[0];return u[d]?.reconciled===!0});if(n.length===0){if(!s){const l=t.reduce((c,u)=>{const d=(u.bet||[])[0];if(!d)return c;const p=Object.keys(d).filter(f=>f!=="short_title");return c+p.filter(f=>d[f]?.reconciled!==!0).length},0);if(l>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${l} pending bet${l!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const o={};a.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(o[c]=l)});const r={};n.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";r[c]||(r[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const u=o[c];if(u){r[c].matchTitle=u.short_title||u.title||"Unknown Match";const d=u.sport_id,p=Ge.find(f=>f.key===d);r[c].sportKey=p?.group||"default"}else{const p=(l.bet||[])[0];if(p&&typeof p=="object"){const f=Object.keys(p).filter(h=>h!=="short_title")[0],g=f?p[f]?.match:null;if(g?.home_team_id&&g?.away_team_id){r[c].matchTitle=`${g.away_team_id} @ ${g.home_team_id}`;const h=Ge.find(k=>k.key===g.sport_id);r[c].sportKey=h?.group||"default"}}}r[c].bets.push(l)});let i="";if(Object.keys(r).forEach(l=>{const c=r[l],u=c.sportKey||"default",d=c.matchTitle||"Unknown Match",p=c.bets.length;i+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${u}"></bma-sport-icon>
                    <span class="match-title">${d}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const g=f.bet||[];if(g.length===0)return;const h=g[0];Object.keys(h).filter(m=>m!=="short_title").forEach(m=>{const v=h[m];if(!v||typeof v!="object")return;const w=(v.type||"").toUpperCase(),E=parseFloat(v.stake||v.wager||0),$=parseFloat(v.payout||0),D=parseInt(v.odds,10),M=Number.isFinite(D)?D>0?`+${D}`:`${D}`:"—",V=v.reconciled===!0,I=$-E,U=.01;let j,F,G,C,A;V?v.outcome==="VOIDED"?(j="voided",F="Voided",G=oi,C=`TD$ ${E.toFixed(2)}`,A="Refund"):$>E+U?(j="won",F="Won",G=sh,C=`+TD$ ${I.toFixed(2)}`,A="Profit"):$<E-U?(j="lost",F="Lost",G=nh,C=`-TD$ ${E.toFixed(2)}`,A="Lost"):(j="push",F="Push",G=oi,C=`TD$ ${E.toFixed(2)}`,A="Returned"):(j="pending",F="Pending",G=ah,C=I>0?`+TD$ ${I.toFixed(2)}`:"TD$ 0.00",A="To win");let S="";if(j==="won"&&Number.isFinite(D)&&D!==0&&E>0&&$>0){const R=D>0?E*D/100:E/(Math.abs(D)/100),O=E+R;if(O>0&&$>O+.005){const q=$/O,Q=parseFloat(q.toFixed(2)).toString(),X=this.getAttribute("data-bma-mode-token")||"";let oe="Bonus";if(X&&window.GameTypeLifeCycle?.forToken)try{const K=window.GameTypeLifeCycle.forToken(X);K?.bonusLabel&&(oe=K.bonusLabel)}catch{}S=`${oe} ${Q}×`}}i+=`<div class="bet-item ${j}">
                        <div class="bet-item__pill">
                            <span class="bet-item__pill-dot"></span>
                            <span class="bet-item__pill-icon">${G}</span>
                            <span class="bet-item__pill-label">${F}</span>
                        </div>
                        <div class="bet-item__body">
                            <div class="bet-item__middle">
                                <div class="bet-item__team">${m}</div>
                                <div class="bet-item__odds">${M}</div>
                                <div class="bet-item__meta">
                                    <div class="bet-item__type">${w}</div>
                                    <div class="bet-item__stake">TD$ ${E.toFixed(2)} stake</div>
                                </div>
                            </div>
                            <div class="bet-item__footer">
                                <div class="bet-item__hero">
                                    <span>${C}</span>
                                    ${S?`<span class="bet-item__mult">${S}</span>`:""}
                                </div>
                                <div class="bet-item__sublabel">${A}</div>
                            </div>
                        </div>
                    </div>`})})}),!s){const l=t.reduce((c,u)=>{const d=(u.bet||[])[0];if(!d)return c;const p=Object.keys(d).filter(f=>f!=="short_title");return c+p.filter(f=>d[f]?.reconciled!==!0).length},0);l>0&&(i+=`<p class="hidden-bets-note">+ ${l} pending bet${l!==1?"s":""} hidden until settled</p>`)}return i}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",a=this.unqualified?"leaderboard-card--unqualified":"",s=parseFloat(this.startingDollars||0),n=this.combinedBetslips;let o=0,r=0,i=0;n.forEach(v=>{const w=v.bet||[];if(w.length===0)return;const E=w[0];Object.keys(E).filter($=>$!=="short_title").forEach($=>{const D=E[$];if(!D||typeof D!="object")return;const M=parseFloat(D.stake||0),V=parseFloat(D.payout||0);o+=M,D.reconciled===!0?i+=V:r+=M})});const l=Math.max(0,s-o),c=v=>Math.abs(v)<.01?0:v,u=o-r,d=c(s-u+i),p=d,f=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",g=c(p-s),h=g>=0?"+":"",k=g>0?"profit-up":g<0?"profit-down":"profit-even",m=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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
                /* Voided — slate-blue wash. Match bma-bet-existing for the
                   side-by-side parity the state-resolution comment promises. */
                .bet-item.voided::before  { background: rgba(120, 144, 168, 0.04); }

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
                    display: inline-flex;
                    align-items: baseline;
                    gap: 6px;
                }

                /* State color targets only the inner hero text span so the
                   multiplier mark (gold) stays distinct on lost/push rows
                   (where the parent gets line-through or muted color) and
                   on won rows (where the parent goes green). */
                .bet-item.pending .bet-item__hero > span:first-child { color: var(--status-locked-text, #F7C60D); }
                .bet-item.won     .bet-item__hero > span:first-child { color: var(--status-upcoming-text, #00E676); }
                .bet-item.lost    .bet-item__hero > span:first-child { color: var(--status-completed-text, #CD5659); text-decoration: line-through; text-decoration-thickness: 2px; }
                .bet-item.push    .bet-item__hero > span:first-child { color: var(--text-secondary, #b0b0b0); }
                .bet-item.voided  .bet-item__hero > span:first-child { color: var(--text-secondary, #b0b0b0); }

                /* Multiplier mark — tight gold typography next to the
                   profit number on settled wins where a mode bonus was
                   applied. Renders only when bonus > 0. */
                .bet-item__mult {
                    font-size: 0.7rem;
                    font-weight: 800;
                    color: var(--status-locked-text, #F7C60D);
                    letter-spacing: 0.2px;
                    line-height: 1;
                    text-decoration: none;
                }

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
                .bet-item.voided .bet-item__pill {
                    background: rgba(120, 144, 168, 0.16);
                    color: #8DA3BD;
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
                        ${this.unqualified&&l>0?`<span class="unbet-badge">TD$ ${l.toFixed(0)} unbet</span>`:""}
                    </div>

                    <div class="leaderboard-card__balance">
                        <span class="dollars-amount">TD$ ${d.toFixed(2)}</span>
                    </div>

                    <span class="expand-icon"></span>
                </div>

                <div class="kpi-strip">
                    <div class="kpi-card">
                        <div class="kpi-card__label">Gain / Loss</div>
                        <div class="kpi-card__value ${k}">${h}TD$ ${Math.abs(g).toFixed(2)}</div>
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
        `}}customElements.define("bma-leaderboard-card",oa);class ac{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:a,scope:s}=t.Bet,{home_team_id:n,home_team_score:o,away_team_id:r,away_team_score:i}=t.Match,l=a?.toUpperCase()||"",c=parseFloat(o)||0,u=parseFloat(i)||0;if(c===0&&u===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${n} (${c})`,away:`${r} (${u})`,scope:s}),l){case"MONEY":return this._evaluateMoneyline(s.team_id,n,r,c,u);case"SPREAD":return this._evaluateSpread(s.team_id,s.point,n,r,c,u);case"TOTAL":return this._evaluateTotal(s.over,s.under,c,u);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(t,a,s,n,o){if(t==="Draw"){const p=n===o;return console.log(`[CoreBetSlip.isPayout] MONEY (Draw) - ${p?"WON":"LOST"}`),p}const r=t===a,i=t===s;if(!r&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=n>o,c=o>n;if(n===o)return console.log("[CoreBetSlip.isPayout] MONEY - tie (push on non-soccer, loss on soccer)"),!1;const d=r&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${d?"WON":"LOST"}`),d}static _evaluateSpread(t,a,s,n,o,r){const i=t===s,l=t===n;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(a)||0;let u=o,d=r;i?u=o+c:d=r+c;const p=u>d,f=d>u;if(u===d)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const h=i&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${h?"WON":"LOST"}`),h}static _evaluateTotal(t,a,s,n){const o=s+n,r=t&&t!=="";if(!r&&!(a&&a!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(r?t:a);if(o===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return r?(c=o>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${o}) - ${c?"WON":"LOST"}`)):(c=o<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${o}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:a,odds:s,stake:n}=t.Bet,o=a?.toUpperCase()||"",r=parseFloat(s)||0,i=parseFloat(n)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(r===0)return console.warn("[CoreBetSlip] Invalid odds value:",r),0;let l=0;switch(o){case"SPREAD":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:r,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:r,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:r,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:r,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(r,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:r,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",o),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(t,a){let s=0;return t>0?s=a*(t/100):t<0?s=a/(Math.abs(t)/100):s=0,a+s}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function ri(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function Yo(e={},t={}){const a=["__proto__","constructor","prototype"];Object.keys(t).filter(s=>a.indexOf(s)<0).forEach(s=>{typeof e[s]>"u"?e[s]=t[s]:ri(t[s])&&ri(e[s])&&Object.keys(t[s]).length>0&&Yo(e[s],t[s])})}const sc={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function Rt(){const e=typeof document<"u"?document:{};return Yo(e,sc),e}const oh={document:sc,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function ct(){const e=typeof window<"u"?window:{};return Yo(e,oh),e}function rh(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function ih(e){const t=e;Object.keys(t).forEach(a=>{try{t[a]=null}catch{}try{delete t[a]}catch{}})}function nc(e,t=0){return setTimeout(e,t)}function en(){return Date.now()}function lh(e){const t=ct();let a;return t.getComputedStyle&&(a=t.getComputedStyle(e,null)),!a&&e.currentStyle&&(a=e.currentStyle),a||(a=e.style),a}function ch(e,t="x"){const a=ct();let s,n,o;const r=lh(e);return a.WebKitCSSMatrix?(n=r.transform||r.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(i=>i.replace(",",".")).join(", ")),o=new a.WebKitCSSMatrix(n==="none"?"":n)):(o=r.MozTransform||r.OTransform||r.MsTransform||r.msTransform||r.transform||r.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=o.toString().split(",")),t==="x"&&(a.WebKitCSSMatrix?n=o.m41:s.length===16?n=parseFloat(s[12]):n=parseFloat(s[4])),t==="y"&&(a.WebKitCSSMatrix?n=o.m42:s.length===16?n=parseFloat(s[13]):n=parseFloat(s[5])),n||0}function Cs(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function dh(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function pt(...e){const t=Object(e[0]);for(let a=1;a<e.length;a+=1){const s=e[a];if(s!=null&&!dh(s)){const n=Object.keys(Object(s)).filter(o=>o!=="__proto__"&&o!=="constructor"&&o!=="prototype");for(let o=0,r=n.length;o<r;o+=1){const i=n[o],l=Object.getOwnPropertyDescriptor(s,i);l!==void 0&&l.enumerable&&(Cs(t[i])&&Cs(s[i])?s[i].__swiper__?t[i]=s[i]:pt(t[i],s[i]):!Cs(t[i])&&Cs(s[i])?(t[i]={},s[i].__swiper__?t[i]=s[i]:pt(t[i],s[i])):t[i]=s[i])}}}return t}function Oa(e,t,a){e.style.setProperty(t,a)}function oc({swiper:e,targetPosition:t,side:a}){const s=ct(),n=-e.translate;let o=null,r;const i=e.params.speed;e.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(e.cssModeFrameID);const l=t>n?"next":"prev",c=(d,p)=>l==="next"&&d>=p||l==="prev"&&d<=p,u=()=>{r=new Date().getTime(),o===null&&(o=r);const d=Math.max(Math.min((r-o)/i,1),0),p=.5-Math.cos(d*Math.PI)/2;let f=n+p*(t-n);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[a]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[a]:f})}),s.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=s.requestAnimationFrame(u)};u()}function Mt(e,t=""){const a=ct(),s=[...e.children];return a.HTMLSlotElement&&e instanceof HTMLSlotElement&&s.push(...e.assignedElements()),t?s.filter(n=>n.matches(t)):s}function uh(e,t){const a=[t];for(;a.length>0;){const s=a.shift();if(e===s)return!0;a.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function ph(e,t){const a=ct();let s=t.contains(e);return!s&&a.HTMLSlotElement&&t instanceof HTMLSlotElement&&(s=[...t.assignedElements()].includes(e),s||(s=uh(e,t))),s}function tn(e){try{console.warn(e);return}catch{}}function an(e,t=[]){const a=document.createElement(e);return a.classList.add(...Array.isArray(t)?t:rh(t)),a}function fh(e,t){const a=[];for(;e.previousElementSibling;){const s=e.previousElementSibling;t?s.matches(t)&&a.push(s):a.push(s),e=s}return a}function hh(e,t){const a=[];for(;e.nextElementSibling;){const s=e.nextElementSibling;t?s.matches(t)&&a.push(s):a.push(s),e=s}return a}function ra(e,t){return ct().getComputedStyle(e,null).getPropertyValue(t)}function sn(e){let t=e,a;if(t){for(a=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(a+=1);return a}}function rc(e,t){const a=[];let s=e.parentElement;for(;s;)t?s.matches(t)&&a.push(s):a.push(s),s=s.parentElement;return a}function wo(e,t,a){const s=ct();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}function Ft(e){return(Array.isArray(e)?e:[e]).filter(t=>!!t)}function ii(e,t=""){typeof trustedTypes<"u"?e.innerHTML=trustedTypes.createPolicy("html",{createHTML:a=>a}).createHTML(t):e.innerHTML=t}let jn;function gh(){const e=ct(),t=Rt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function ic(){return jn||(jn=gh()),jn}let Vn;function mh({userAgent:e}={}){const t=ic(),a=ct(),s=a.navigator.platform,n=e||a.navigator.userAgent,o={ios:!1,android:!1},r=a.screen.width,i=a.screen.height,l=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=s==="Win32";let f=s==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&g.indexOf(`${r}x${i}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!p&&(o.os="android",o.android=!0),(c||d||u)&&(o.os="ios",o.ios=!0),o}function lc(e={}){return Vn||(Vn=mh(e)),Vn}let qn;function bh(){const e=ct(),t=lc();let a=!1;function s(){const i=e.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(s()){const i=String(e.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));a=l<16||l===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),o=s(),r=o||n&&t.ios;return{isSafari:a||o,needPerspectiveFix:a,need3dFix:r,isWebView:n}}function cc(){return qn||(qn=bh()),qn}function _h({swiper:e,on:t,emit:a}){const s=ct();let n=null,o=null;const r=()=>{!e||e.destroyed||!e.initialized||(a("beforeResize"),a("resize"))},i=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(u=>{o=s.requestAnimationFrame(()=>{const{width:d,height:p}=e;let f=d,g=p;u.forEach(({contentBoxSize:h,contentRect:k,target:m})=>{m&&m!==e.el||(f=k?k.width:(h[0]||h).inlineSize,g=k?k.height:(h[0]||h).blockSize)}),(f!==d||g!==p)&&r()})}),n.observe(e.el))},l=()=>{o&&s.cancelAnimationFrame(o),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||a("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof s.ResizeObserver<"u"){i();return}s.addEventListener("resize",r),s.addEventListener("orientationchange",c)}),t("destroy",()=>{l(),s.removeEventListener("resize",r),s.removeEventListener("orientationchange",c)})}function vh({swiper:e,extendParams:t,on:a,emit:s}){const n=[],o=ct(),r=(c,u={})=>{const d=o.MutationObserver||o.WebkitMutationObserver,p=new d(f=>{if(e.__preventObserver__)return;if(f.length===1){s("observerUpdate",f[0]);return}const g=function(){s("observerUpdate",f[0])};o.requestAnimationFrame?o.requestAnimationFrame(g):o.setTimeout(g,0)});p.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:e.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),n.push(p)},i=()=>{if(e.params.observer){if(e.params.observeParents){const c=rc(e.hostEl);for(let u=0;u<c.length;u+=1)r(c[u])}r(e.hostEl,{childList:e.params.observeSlideChildren}),r(e.wrapperEl,{attributes:!1})}},l=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",i),a("destroy",l)}var yh={on(e,t,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;const n=a?"unshift":"push";return e.split(" ").forEach(o=>{s.eventsListeners[o]||(s.eventsListeners[o]=[]),s.eventsListeners[o][n](t)}),s},once(e,t,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof t!="function")return s;function n(...o){s.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,t.apply(s,o)}return n.__emitterProxy=t,s.on(e,n,a)},onAny(e,t){const a=this;if(!a.eventsListeners||a.destroyed||typeof e!="function")return a;const s=t?"unshift":"push";return a.eventsAnyListeners.indexOf(e)<0&&a.eventsAnyListeners[s](e),a},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const a=t.eventsAnyListeners.indexOf(e);return a>=0&&t.eventsAnyListeners.splice(a,1),t},off(e,t){const a=this;return!a.eventsListeners||a.destroyed||!a.eventsListeners||e.split(" ").forEach(s=>{typeof t>"u"?a.eventsListeners[s]=[]:a.eventsListeners[s]&&a.eventsListeners[s].forEach((n,o)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&a.eventsListeners[s].splice(o,1)})}),a},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let a,s,n;return typeof e[0]=="string"||Array.isArray(e[0])?(a=e[0],s=e.slice(1,e.length),n=t):(a=e[0].events,s=e[0].data,n=e[0].context||t),s.unshift(n),(Array.isArray(a)?a:a.split(" ")).forEach(r=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(i=>{i.apply(n,[r,...s])}),t.eventsListeners&&t.eventsListeners[r]&&t.eventsListeners[r].forEach(i=>{i.apply(n,s)})}),t}};function wh(){const e=this;let t,a;const s=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=s.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?a=e.params.height:a=s.clientHeight,!(t===0&&e.isHorizontal()||a===0&&e.isVertical())&&(t=t-parseInt(ra(s,"padding-left")||0,10)-parseInt(ra(s,"padding-right")||0,10),a=a-parseInt(ra(s,"padding-top")||0,10)-parseInt(ra(s,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(a)&&(a=0),Object.assign(e,{width:t,height:a,size:e.isHorizontal()?t:a}))}function xh(){const e=this;function t(U,j){return parseFloat(U.getPropertyValue(e.getDirectionLabel(j))||0)}const a=e.params,{wrapperEl:s,slidesEl:n,rtlTranslate:o,wrongRTL:r}=e,i=e.virtual&&a.virtual.enabled,l=i?e.virtual.slides.length:e.slides.length,c=Mt(n,`.${e.params.slideClass}, swiper-slide`),u=i?e.virtual.slides.length:c.length;let d=[];const p=[],f=[];let g=a.slidesOffsetBefore;typeof g=="function"&&(g=a.slidesOffsetBefore.call(e));let h=a.slidesOffsetAfter;typeof h=="function"&&(h=a.slidesOffsetAfter.call(e));const k=e.snapGrid.length,m=e.slidesGrid.length,v=e.size-g-h;let w=a.spaceBetween,E=-g,$=0,D=0;if(typeof v>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*v:typeof w=="string"&&(w=parseFloat(w)),e.virtualSize=-w-g-h,c.forEach(U=>{o?U.style.marginLeft="":U.style.marginRight="",U.style.marginBottom="",U.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(Oa(s,"--swiper-centered-offset-before",""),Oa(s,"--swiper-centered-offset-after","")),a.cssMode&&(Oa(s,"--swiper-slides-offset-before",`${g}px`),Oa(s,"--swiper-slides-offset-after",`${h}px`));const M=a.grid&&a.grid.rows>1&&e.grid;M?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let V;const I=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(U=>typeof a.breakpoints[U].slidesPerView<"u").length>0;for(let U=0;U<u;U+=1){V=0;const j=c[U];if(!(j&&(M&&e.grid.updateSlide(U,j,c),ra(j,"display")==="none"))){if(i&&a.slidesPerView==="auto")a.virtual.slidesPerViewAutoSlideSize&&(V=a.virtual.slidesPerViewAutoSlideSize),V&&j&&(a.roundLengths&&(V=Math.floor(V)),j.style[e.getDirectionLabel("width")]=`${V}px`);else if(a.slidesPerView==="auto"){I&&(j.style[e.getDirectionLabel("width")]="");const F=getComputedStyle(j),G=j.style.transform,C=j.style.webkitTransform;if(G&&(j.style.transform="none"),C&&(j.style.webkitTransform="none"),a.roundLengths)V=e.isHorizontal()?wo(j,"width"):wo(j,"height");else{const A=t(F,"width"),S=t(F,"padding-left"),R=t(F,"padding-right"),O=t(F,"margin-left"),q=t(F,"margin-right"),Q=F.getPropertyValue("box-sizing");if(Q&&Q==="border-box")V=A+O+q;else{const{clientWidth:X,offsetWidth:oe}=j;V=A+S+R+O+q+(oe-X)}}G&&(j.style.transform=G),C&&(j.style.webkitTransform=C),a.roundLengths&&(V=Math.floor(V))}else V=(v-(a.slidesPerView-1)*w)/a.slidesPerView,a.roundLengths&&(V=Math.floor(V)),j&&(j.style[e.getDirectionLabel("width")]=`${V}px`);j&&(j.swiperSlideSize=V),f.push(V),a.centeredSlides?(E=E+V/2+$/2+w,$===0&&U!==0&&(E=E-v/2-w),U===0&&(E=E-v/2-w),Math.abs(E)<1/1e3&&(E=0),a.roundLengths&&(E=Math.floor(E)),D%a.slidesPerGroup===0&&d.push(E),p.push(E)):(a.roundLengths&&(E=Math.floor(E)),(D-Math.min(e.params.slidesPerGroupSkip,D))%e.params.slidesPerGroup===0&&d.push(E),p.push(E),E=E+V+w),e.virtualSize+=V+w,$=V,D+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+h,o&&r&&(a.effect==="slide"||a.effect==="coverflow")&&(s.style.width=`${e.virtualSize+w}px`),a.setWrapperSize&&(s.style[e.getDirectionLabel("width")]=`${e.virtualSize+w}px`),M&&e.grid.updateWrapperSize(V,d),!a.centeredSlides){const U=a.slidesPerView!=="auto"&&a.slidesPerView%1!==0,j=a.snapToSlideEdge&&!a.loop&&(a.slidesPerView==="auto"||U);let F=d.length;if(j){let C;if(a.slidesPerView==="auto"){C=1;let A=0;for(let S=f.length-1;S>=0&&(A+=f[S]+(S<f.length-1?w:0),A<=v);S-=1)C=f.length-S}else C=Math.floor(a.slidesPerView);F=Math.max(u-C,0)}const G=[];for(let C=0;C<d.length;C+=1){let A=d[C];a.roundLengths&&(A=Math.floor(A)),j?C<=F&&G.push(A):d[C]<=e.virtualSize-v&&G.push(A)}d=G,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(j||d.push(e.virtualSize-v))}if(i&&a.loop){const U=f[0]+w;if(a.slidesPerGroup>1){const j=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/a.slidesPerGroup),F=U*a.slidesPerGroup;for(let G=0;G<j;G+=1)d.push(d[d.length-1]+F)}for(let j=0;j<e.virtual.slidesBefore+e.virtual.slidesAfter;j+=1)a.slidesPerGroup===1&&d.push(d[d.length-1]+U),p.push(p[p.length-1]+U),e.virtualSize+=U}if(d.length===0&&(d=[0]),w!==0){const U=e.isHorizontal()&&o?"marginLeft":e.getDirectionLabel("marginRight");c.filter((j,F)=>!a.cssMode||a.loop?!0:F!==c.length-1).forEach(j=>{j.style[U]=`${w}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let U=0;f.forEach(F=>{U+=F+(w||0)}),U-=w;const j=U>v?U-v:0;d=d.map(F=>F<=0?-g:F>j?j+h:F)}if(a.centerInsufficientSlides){let U=0;if(f.forEach(j=>{U+=j+(w||0)}),U-=w,U<v){const j=(v-U)/2;d.forEach((F,G)=>{d[G]=F-j}),p.forEach((F,G)=>{p[G]=F+j})}}if(Object.assign(e,{slides:c,snapGrid:d,slidesGrid:p,slidesSizesGrid:f}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){Oa(s,"--swiper-centered-offset-before",`${-d[0]}px`),Oa(s,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const U=-e.snapGrid[0],j=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(F=>F+U),e.slidesGrid=e.slidesGrid.map(F=>F+j)}if(u!==l&&e.emit("slidesLengthChange"),d.length!==k&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==m&&e.emit("slidesGridLengthChange"),a.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!i&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const U=`${a.containerModifierClass}backface-hidden`,j=e.el.classList.contains(U);u<=a.maxBackfaceHiddenSlides?j||e.el.classList.add(U):j&&e.el.classList.remove(U)}}function Th(e){const t=this,a=[],s=t.virtual&&t.params.virtual.enabled;let n=0,o;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const r=i=>s?t.slides[t.getSlideIndexByData(i)]:t.slides[i];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(i=>{a.push(i)});else for(o=0;o<Math.ceil(t.params.slidesPerView);o+=1){const i=t.activeIndex+o;if(i>t.slides.length&&!s)break;a.push(r(i))}else a.push(r(t.activeIndex));for(o=0;o<a.length;o+=1)if(typeof a[o]<"u"){const i=a[o].offsetHeight;n=i>n?i:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function kh(){const e=this,t=e.slides,a=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=(e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop)-a-e.cssOverflowAdjustment()}const li=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function Sh(e=this&&this.translate||0){const t=this,a=t.params,{slides:s,rtlTranslate:n,snapGrid:o}=t;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let r=-e;n&&(r=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let i=a.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*t.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<s.length;l+=1){const c=s[l];let u=c.swiperSlideOffset;a.cssMode&&a.centeredSlides&&(u-=s[0].swiperSlideOffset);const d=(r+(a.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+i),p=(r-o[0]+(a.centeredSlides?t.minTranslate():0)-u)/(c.swiperSlideSize+i),f=-(r-u),g=f+t.slidesSizesGrid[l],h=f>=0&&f<=t.size-t.slidesSizesGrid[l],k=f>=0&&f<t.size-1||g>1&&g<=t.size||f<=0&&g>=t.size;k&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(l)),li(c,k,a.slideVisibleClass),li(c,h,a.slideFullyVisibleClass),c.progress=n?-d:d,c.originalProgress=n?-p:p}}function Eh(e){const t=this;if(typeof e>"u"){const u=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*u||0}const a=t.params,s=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:o,isEnd:r,progressLoop:i}=t;const l=o,c=r;if(s===0)n=0,o=!0,r=!0;else{n=(e-t.minTranslate())/s;const u=Math.abs(e-t.minTranslate())<1,d=Math.abs(e-t.maxTranslate())<1;o=u||n<=0,r=d||n>=1,u&&(n=0),d&&(n=1)}if(a.loop){const u=t.getSlideIndexByData(0),d=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[u],f=t.slidesGrid[d],g=t.slidesGrid[t.slidesGrid.length-1],h=Math.abs(e);h>=p?i=(h-p)/g:i=(h+g-f)/g,i>1&&(i-=1)}Object.assign(t,{progress:n,progressLoop:i,isBeginning:o,isEnd:r}),(a.watchSlidesProgress||a.centeredSlides&&a.autoHeight)&&t.updateSlidesProgress(e),o&&!l&&t.emit("reachBeginning toEdge"),r&&!c&&t.emit("reachEnd toEdge"),(l&&!o||c&&!r)&&t.emit("fromEdge"),t.emit("progress",n)}const Yn=(e,t,a)=>{t&&!e.classList.contains(a)?e.classList.add(a):!t&&e.classList.contains(a)&&e.classList.remove(a)};function Ah(){const e=this,{slides:t,params:a,slidesEl:s,activeIndex:n}=e,o=e.virtual&&a.virtual.enabled,r=e.grid&&a.grid&&a.grid.rows>1,i=d=>Mt(s,`.${a.slideClass}${d}, swiper-slide${d}`)[0];let l,c,u;if(o)if(a.loop){let d=n-e.virtual.slidesBefore;d<0&&(d=e.virtual.slides.length+d),d>=e.virtual.slides.length&&(d-=e.virtual.slides.length),l=i(`[data-swiper-slide-index="${d}"]`)}else l=i(`[data-swiper-slide-index="${n}"]`);else r?(l=t.find(d=>d.column===n),u=t.find(d=>d.column===n+1),c=t.find(d=>d.column===n-1)):l=t[n];l&&(r||(u=hh(l,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!u&&(u=t[0]),c=fh(l,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(d=>{Yn(d,d===l,a.slideActiveClass),Yn(d,d===u,a.slideNextClass),Yn(d,d===c,a.slidePrevClass)}),e.emitSlidesClasses()}const Fs=(e,t)=>{if(!e||e.destroyed||!e.params)return;const a=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,s=t.closest(a());if(s){let n=s.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(s.shadowRoot?n=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(n=s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},Kn=(e,t)=>{if(!e.slides[t])return;const a=e.slides[t].querySelector('[loading="lazy"]');a&&a.removeAttribute("loading")},xo=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const a=e.slides.length;if(!a||!t||t<0)return;t=Math.min(t,a);const s=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const r=n,i=[r-t];i.push(...Array.from({length:t}).map((l,c)=>r+s+c)),e.slides.forEach((l,c)=>{i.includes(l.column)&&Kn(e,c)});return}const o=n+s-1;if(e.params.rewind||e.params.loop)for(let r=n-t;r<=o+t;r+=1){const i=(r%a+a)%a;(i<n||i>o)&&Kn(e,i)}else for(let r=Math.max(n-t,0);r<=Math.min(o+t,a-1);r+=1)r!==n&&(r>o||r<n)&&Kn(e,r)};function Ch(e){const{slidesGrid:t,params:a}=e,s=e.rtlTranslate?e.translate:-e.translate;let n;for(let o=0;o<t.length;o+=1)typeof t[o+1]<"u"?s>=t[o]&&s<t[o+1]-(t[o+1]-t[o])/2?n=o:s>=t[o]&&s<t[o+1]&&(n=o+1):s>=t[o]&&(n=o);return a.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Ph(e){const t=this,a=t.rtlTranslate?t.translate:-t.translate,{snapGrid:s,params:n,activeIndex:o,realIndex:r,snapIndex:i}=t;let l=e,c;const u=f=>{let g=f-t.virtual.slidesBefore;return g<0&&(g=t.virtual.slides.length+g),g>=t.virtual.slides.length&&(g-=t.virtual.slides.length),g};if(typeof l>"u"&&(l=Ch(t)),s.indexOf(a)>=0)c=s.indexOf(a);else{const f=Math.min(n.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/n.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===o&&!t.params.loop){c!==i&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(l===o&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(l);return}const d=t.grid&&n.grid&&n.grid.rows>1;let p;if(t.virtual&&n.virtual.enabled)n.loop?p=u(l):p=l;else if(d){const f=t.slides.find(h=>h.column===l);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(t.slides.indexOf(f),0)),p=Math.floor(g/n.grid.rows)}else if(t.slides[l]){const f=t.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(t,{previousSnapIndex:i,snapIndex:c,previousRealIndex:r,realIndex:p,previousIndex:o,activeIndex:l}),t.initialized&&xo(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(r!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function Oh(e,t){const a=this,s=a.params;let n=e.closest(`.${s.slideClass}, swiper-slide`);!n&&a.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(i=>{!n&&i.matches&&i.matches(`.${s.slideClass}, swiper-slide`)&&(n=i)});let o=!1,r;if(n){for(let i=0;i<a.slides.length;i+=1)if(a.slides[i]===n){o=!0,r=i;break}}if(n&&o)a.clickedSlide=n,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):a.clickedIndex=r;else{a.clickedSlide=void 0,a.clickedIndex=void 0;return}s.slideToClickedSlide&&a.clickedIndex!==void 0&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}var Lh={updateSize:wh,updateSlides:xh,updateAutoHeight:Th,updateSlidesOffset:kh,updateSlidesProgress:Sh,updateProgress:Eh,updateSlidesClasses:Ah,updateActiveIndex:Ph,updateClickedSlide:Oh};function Mh(e=this.isHorizontal()?"x":"y"){const t=this,{params:a,rtlTranslate:s,translate:n,wrapperEl:o}=t;if(a.virtualTranslate)return s?-n:n;if(a.cssMode)return n;let r=ch(o,e);return r+=t.cssOverflowAdjustment(),s&&(r=-r),r||0}function Dh(e,t){const a=this,{rtlTranslate:s,params:n,wrapperEl:o,progress:r}=a;let i=0,l=0;const c=0;a.isHorizontal()?i=s?-e:e:l=e,n.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?i:l,n.cssMode?o[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-i:-l:n.virtualTranslate||(a.isHorizontal()?i-=a.cssOverflowAdjustment():l-=a.cssOverflowAdjustment(),o.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let u;const d=a.maxTranslate()-a.minTranslate();d===0?u=0:u=(e-a.minTranslate())/d,u!==r&&a.updateProgress(e),a.emit("setTranslate",a.translate,t)}function Rh(){return-this.snapGrid[0]}function $h(){return-this.snapGrid[this.snapGrid.length-1]}function Ih(e=0,t=this.params.speed,a=!0,s=!0,n){const o=this,{params:r,wrapperEl:i}=o;if(o.animating&&r.preventInteractionOnTransition)return!1;const l=o.minTranslate(),c=o.maxTranslate();let u;if(s&&e>l?u=l:s&&e<c?u=c:u=e,o.updateProgress(u),r.cssMode){const d=o.isHorizontal();if(t===0)i[d?"scrollLeft":"scrollTop"]=-u;else{if(!o.support.smoothScroll)return oc({swiper:o,targetPosition:-u,side:d?"left":"top"}),!0;i.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return t===0?(o.setTransition(0),o.setTranslate(u),a&&(o.emit("beforeTransitionStart",t,n),o.emit("transitionEnd"))):(o.setTransition(t),o.setTranslate(u),a&&(o.emit("beforeTransitionStart",t,n),o.emit("transitionStart")),o.animating||(o.animating=!0,o.onTranslateToWrapperTransitionEnd||(o.onTranslateToWrapperTransitionEnd=function(p){!o||o.destroyed||p.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onTranslateToWrapperTransitionEnd),o.onTranslateToWrapperTransitionEnd=null,delete o.onTranslateToWrapperTransitionEnd,o.animating=!1,a&&o.emit("transitionEnd"))}),o.wrapperEl.addEventListener("transitionend",o.onTranslateToWrapperTransitionEnd))),!0}var Nh={getTranslate:Mh,setTranslate:Dh,minTranslate:Rh,maxTranslate:$h,translateTo:Ih};function Bh(e,t){const a=this;a.params.cssMode||(a.wrapperEl.style.transitionDuration=`${e}ms`,a.wrapperEl.style.transitionDelay=e===0?"0ms":""),a.emit("setTransition",e,t)}function dc({swiper:e,runCallbacks:t,direction:a,step:s}){const{activeIndex:n,previousIndex:o}=e;let r=a;r||(n>o?r="next":n<o?r="prev":r="reset"),e.emit(`transition${s}`),t&&r==="reset"?e.emit(`slideResetTransition${s}`):t&&n!==o&&(e.emit(`slideChangeTransition${s}`),r==="next"?e.emit(`slideNextTransition${s}`):e.emit(`slidePrevTransition${s}`))}function Fh(e=!0,t){const a=this,{params:s}=a;s.cssMode||(s.autoHeight&&a.updateAutoHeight(),dc({swiper:a,runCallbacks:e,direction:t,step:"Start"}))}function zh(e=!0,t){const a=this,{params:s}=a;a.animating=!1,!s.cssMode&&(a.setTransition(0),dc({swiper:a,runCallbacks:e,direction:t,step:"End"}))}var Hh={setTransition:Bh,transitionStart:Fh,transitionEnd:zh};function Uh(e=0,t,a=!0,s,n){typeof e=="string"&&(e=parseInt(e,10));const o=this;let r=e;r<0&&(r=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:p,wrapperEl:f,enabled:g}=o;if(!g&&!s&&!n||o.destroyed||o.animating&&i.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=o.params.speed);const h=Math.min(o.params.slidesPerGroupSkip,r);let k=h+Math.floor((r-h)/o.params.slidesPerGroup);k>=l.length&&(k=l.length-1);const m=-l[k];if(i.normalizeSlideIndex)for(let M=0;M<c.length;M+=1){const V=-Math.floor(m*100),I=Math.floor(c[M]*100),U=Math.floor(c[M+1]*100);typeof c[M+1]<"u"?V>=I&&V<U-(U-I)/2?r=M:V>=I&&V<U&&(r=M+1):V>=I&&(r=M)}if(o.initialized&&r!==d&&(!o.allowSlideNext&&(p?m>o.translate&&m>o.minTranslate():m<o.translate&&m<o.minTranslate())||!o.allowSlidePrev&&m>o.translate&&m>o.maxTranslate()&&(d||0)!==r))return!1;r!==(u||0)&&a&&o.emit("beforeSlideChangeStart"),o.updateProgress(m);let v;r>d?v="next":r<d?v="prev":v="reset";const w=o.virtual&&o.params.virtual.enabled;if(!(w&&n)&&(p&&-m===o.translate||!p&&m===o.translate))return o.updateActiveIndex(r),i.autoHeight&&o.updateAutoHeight(),o.updateSlidesClasses(),i.effect!=="slide"&&o.setTranslate(m),v!=="reset"&&(o.transitionStart(a,v),o.transitionEnd(a,v)),!1;if(i.cssMode){const M=o.isHorizontal(),V=p?m:-m;if(t===0)w&&(o.wrapperEl.style.scrollSnapType="none",o._immediateVirtual=!0),w&&!o._cssModeVirtualInitialSet&&o.params.initialSlide>0?(o._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[M?"scrollLeft":"scrollTop"]=V})):f[M?"scrollLeft":"scrollTop"]=V,w&&requestAnimationFrame(()=>{o.wrapperEl.style.scrollSnapType="",o._immediateVirtual=!1});else{if(!o.support.smoothScroll)return oc({swiper:o,targetPosition:V,side:M?"left":"top"}),!0;f.scrollTo({[M?"left":"top"]:V,behavior:"smooth"})}return!0}const D=cc().isSafari;return w&&!n&&D&&o.isElement&&o.virtual.update(!1,!1,r),o.setTransition(t),o.setTranslate(m),o.updateActiveIndex(r),o.updateSlidesClasses(),o.emit("beforeTransitionStart",t,s),o.transitionStart(a,v),t===0?o.transitionEnd(a,v):o.animating||(o.animating=!0,o.onSlideToWrapperTransitionEnd||(o.onSlideToWrapperTransitionEnd=function(V){!o||o.destroyed||V.target===this&&(o.wrapperEl.removeEventListener("transitionend",o.onSlideToWrapperTransitionEnd),o.onSlideToWrapperTransitionEnd=null,delete o.onSlideToWrapperTransitionEnd,o.transitionEnd(a,v))}),o.wrapperEl.addEventListener("transitionend",o.onSlideToWrapperTransitionEnd)),!0}function Gh(e=0,t,a=!0,s){typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof t>"u"&&(t=n.params.speed);const o=n.grid&&n.params.grid&&n.params.grid.rows>1;let r=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)r=r+n.virtual.slidesBefore;else{let i;if(o){const h=r*n.params.grid.rows;i=n.slides.find(k=>k.getAttribute("data-swiper-slide-index")*1===h).column}else i=n.getSlideIndexByData(r);const l=o?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=n.params,p=c||!!u||!!d;let f=n.params.slidesPerView;f==="auto"?f=n.slidesPerViewDynamic():(f=Math.ceil(parseFloat(n.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let g=l-i<f;if(p&&(g=g||i<Math.ceil(f/2)),s&&p&&n.params.slidesPerView!=="auto"&&!o&&(g=!1),g){const h=p?i<n.activeIndex?"prev":"next":i-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:h,slideTo:!0,activeSlideIndex:h==="next"?i+1:i-l+1,slideRealIndex:h==="next"?n.realIndex:void 0})}if(o){const h=r*n.params.grid.rows;r=n.slides.find(k=>k.getAttribute("data-swiper-slide-index")*1===h).column}else r=n.getSlideIndexByData(r)}return requestAnimationFrame(()=>{n.slideTo(r,t,a,s)}),n}function jh(e,t=!0,a){const s=this,{enabled:n,params:o,animating:r}=s;if(!n||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);let i=o.slidesPerGroup;o.slidesPerView==="auto"&&o.slidesPerGroup===1&&o.slidesPerGroupAuto&&(i=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<o.slidesPerGroupSkip?1:i,c=s.virtual&&o.virtual.enabled;if(o.loop){if(r&&!c&&o.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&o.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,e,t,a)}),!0}return o.rewind&&s.isEnd?s.slideTo(0,e,t,a):s.slideTo(s.activeIndex+l,e,t,a)}function Vh(e,t=!0,a){const s=this,{params:n,snapGrid:o,slidesGrid:r,rtlTranslate:i,enabled:l,animating:c}=s;if(!l||s.destroyed)return s;typeof e>"u"&&(e=s.params.speed);const u=s.virtual&&n.virtual.enabled;if(n.loop){if(c&&!u&&n.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const d=i?s.translate:-s.translate;function p(v){return v<0?-Math.floor(Math.abs(v)):Math.floor(v)}const f=p(d),g=o.map(v=>p(v)),h=n.freeMode&&n.freeMode.enabled;let k=o[g.indexOf(f)-1];if(typeof k>"u"&&(n.cssMode||h)){let v;o.forEach((w,E)=>{f>=w&&(v=E)}),typeof v<"u"&&(k=h?o[v]:o[v>0?v-1:v])}let m=0;if(typeof k<"u"&&(m=r.indexOf(k),m<0&&(m=s.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(m=m-s.slidesPerViewDynamic("previous",!0)+1,m=Math.max(m,0))),n.rewind&&s.isBeginning){const v=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(v,e,t,a)}else if(n.loop&&s.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(m,e,t,a)}),!0;return s.slideTo(m,e,t,a)}function qh(e,t=!0,a){const s=this;if(!s.destroyed)return typeof e>"u"&&(e=s.params.speed),s.slideTo(s.activeIndex,e,t,a)}function Yh(e,t=!0,a,s=.5){const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let o=n.activeIndex;const r=Math.min(n.params.slidesPerGroupSkip,o),i=r+Math.floor((o-r)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[i]){const c=n.snapGrid[i],u=n.snapGrid[i+1];l-c>(u-c)*s&&(o+=n.params.slidesPerGroup)}else{const c=n.snapGrid[i-1],u=n.snapGrid[i];l-c<=(u-c)*s&&(o-=n.params.slidesPerGroup)}return o=Math.max(o,0),o=Math.min(o,n.slidesGrid.length-1),n.slideTo(o,e,t,a)}function Kh(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:a}=e,s=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.getSlideIndexWhenGrid(e.clickedIndex),o;const r=e.isElement?"swiper-slide":`.${t.slideClass}`,i=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;o=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(o):n>(i?(e.slides.length-s)/2-(e.params.grid.rows-1):e.slides.length-s)?(e.loopFix(),n=e.getSlideIndex(Mt(a,`${r}[data-swiper-slide-index="${o}"]`)[0]),nc(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var Wh={slideTo:Uh,slideToLoop:Gh,slideNext:jh,slidePrev:Vh,slideReset:qh,slideToClosest:Yh,slideToClickedSlide:Kh};function Jh(e,t){const a=this,{params:s,slidesEl:n}=a;if(!s.loop||a.virtual&&a.params.virtual.enabled)return;const o=()=>{Mt(n,`.${s.slideClass}, swiper-slide`).forEach((g,h)=>{g.setAttribute("data-swiper-slide-index",h)})},r=()=>{const f=Mt(n,`.${s.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(a.recalcSlides(),a.updateSlides())},i=a.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||i)&&r();const l=s.slidesPerGroup*(i?s.grid.rows:1),c=a.slides.length%l!==0,u=i&&a.slides.length%s.grid.rows!==0,d=f=>{for(let g=0;g<f;g+=1){const h=a.isElement?an("swiper-slide",[s.slideBlankClass]):an("div",[s.slideClass,s.slideBlankClass]);a.slidesEl.append(h)}};if(c){if(s.loopAddBlankSlides){const f=l-a.slides.length%l;d(f),a.recalcSlides(),a.updateSlides()}else tn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else if(u){if(s.loopAddBlankSlides){const f=s.grid.rows-a.slides.length%s.grid.rows;d(f),a.recalcSlides(),a.updateSlides()}else tn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");o()}else o();const p=s.centeredSlides||!!s.slidesOffsetBefore||!!s.slidesOffsetAfter;a.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function Xh({slideRealIndex:e,slideTo:t=!0,direction:a,setTranslate:s,activeSlideIndex:n,initial:o,byController:r,byMousewheel:i}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:p,params:f}=l,{centeredSlides:g,slidesOffsetBefore:h,slidesOffsetAfter:k,initialSlide:m}=f,v=g||!!h||!!k;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){t&&(!v&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):v&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let w=f.slidesPerView;w==="auto"?w=l.slidesPerViewDynamic():(w=Math.ceil(parseFloat(f.slidesPerView,10)),v&&w%2===0&&(w=w+1));const E=f.slidesPerGroupAuto?w:f.slidesPerGroup;let $=v?Math.max(E,Math.ceil(w/2)):E;$%E!==0&&($+=E-$%E),$+=f.loopAdditionalSlides,l.loopedSlides=$;const D=l.grid&&f.grid&&f.grid.rows>1;c.length<w+$||l.params.effect==="cards"&&c.length<w+$*2?tn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):D&&f.grid.fill==="row"&&tn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const M=[],V=[],I=D?Math.ceil(c.length/f.grid.rows):c.length,U=o&&I-m<w&&!v;let j=U?m:l.activeIndex;typeof n>"u"?n=l.getSlideIndex(c.find(O=>O.classList.contains(f.slideActiveClass))):j=n;const F=a==="next"||!a,G=a==="prev"||!a;let C=0,A=0;const R=(D?c[n].column:n)+(v&&typeof s>"u"?-w/2+.5:0);if(R<$){C=Math.max($-R,E);for(let O=0;O<$-R;O+=1){const q=O-Math.floor(O/I)*I;if(D){const Q=I-q-1;for(let X=c.length-1;X>=0;X-=1)c[X].column===Q&&M.push(X)}else M.push(I-q-1)}}else if(R+w>I-$){A=Math.max(R-(I-$*2),E),U&&(A=Math.max(A,w-I+m+1));for(let O=0;O<A;O+=1){const q=O-Math.floor(O/I)*I;D?c.forEach((Q,X)=>{Q.column===q&&V.push(X)}):V.push(q)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<w+$*2&&(V.includes(n)&&V.splice(V.indexOf(n),1),M.includes(n)&&M.splice(M.indexOf(n),1)),G&&M.forEach(O=>{c[O].swiperLoopMoveDOM=!0,p.prepend(c[O]),c[O].swiperLoopMoveDOM=!1}),F&&V.forEach(O=>{c[O].swiperLoopMoveDOM=!0,p.append(c[O]),c[O].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():D&&(M.length>0&&G||V.length>0&&F)&&l.slides.forEach((O,q)=>{l.grid.updateSlide(q,O,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),t){if(M.length>0&&G){if(typeof e>"u"){const O=l.slidesGrid[j],Q=l.slidesGrid[j+C]-O;i?l.setTranslate(l.translate-Q):(l.slideTo(j+Math.ceil(C),0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-Q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-Q))}else if(s){const O=D?M.length/f.grid.rows:M.length;l.slideTo(l.activeIndex+O,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(V.length>0&&F)if(typeof e>"u"){const O=l.slidesGrid[j],Q=l.slidesGrid[j-A]-O;i?l.setTranslate(l.translate-Q):(l.slideTo(j-A,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-Q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-Q))}else{const O=D?V.length/f.grid.rows:V.length;l.slideTo(l.activeIndex-O,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!r){const O={slideRealIndex:e,direction:a,setTranslate:s,activeSlideIndex:n,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(q=>{!q.destroyed&&q.params.loop&&q.loopFix({...O,slideTo:q.params.slidesPerView===f.slidesPerView?t:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...O,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}l.emit("loopFix")}function Qh(){const e=this,{params:t,slidesEl:a}=e;if(!t.loop||!a||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const s=[];e.slides.forEach(n=>{const o=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;s[o]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),s.forEach(n=>{a.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var Zh={loopCreate:Jh,loopFix:Xh,loopDestroy:Qh};function eg(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const a=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),a.style.cursor="move",a.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function tg(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var ag={setGrabCursor:eg,unsetGrabCursor:tg};function sg(e,t=this){function a(s){if(!s||s===Rt()||s===ct())return null;s.assignedSlot&&(s=s.assignedSlot);const n=s.closest(e);return!n&&!s.getRootNode?null:n||a(s.getRootNode().host)}return a(t)}function ci(e,t,a){const s=ct(),{params:n}=e,o=n.edgeSwipeDetection,r=n.edgeSwipeThreshold;return o&&(a<=r||a>=s.innerWidth-r)?o==="prevent"?(t.preventDefault(),!0):!1:!0}function ng(e){const t=this,a=Rt();let s=e;s.originalEvent&&(s=s.originalEvent);const n=t.touchEventsData;if(s.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==s.pointerId)return;n.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(n.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){ci(t,s,s.targetTouches[0].pageX);return}const{params:o,touches:r,enabled:i}=t;if(!i||!o.simulateTouch&&s.pointerType==="mouse"||t.animating&&o.preventInteractionOnTransition)return;!t.animating&&o.cssMode&&o.loop&&t.loopFix();let l=s.target;if(o.touchEventsTarget==="wrapper"&&!ph(l,t.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||n.isTouched&&n.isMoved)return;const c=!!o.noSwipingClass&&o.noSwipingClass!=="",u=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&u&&(l=u[0]);const d=o.noSwipingSelector?o.noSwipingSelector:`.${o.noSwipingClass}`,p=!!(s.target&&s.target.shadowRoot);if(o.noSwiping&&(p?sg(d,l):l.closest(d))){t.allowClick=!0;return}if(o.swipeHandler&&!l.closest(o.swipeHandler))return;r.currentX=s.pageX,r.currentY=s.pageY;const f=r.currentX,g=r.currentY;if(!ci(t,s,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),r.startX=f,r.startY=g,n.touchStartTime=en(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,o.threshold>0&&(n.allowThresholdMove=!1);let h=!0;l.matches(n.focusableElements)&&(h=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),a.activeElement&&a.activeElement.matches(n.focusableElements)&&a.activeElement!==l&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!l.matches(n.focusableElements))&&a.activeElement.blur();const k=h&&t.allowTouchMove&&o.touchStartPreventDefault;(o.touchStartForcePreventDefault||k)&&!l.isContentEditable&&s.preventDefault(),o.freeMode&&o.freeMode.enabled&&t.freeMode&&t.animating&&!o.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",s)}function og(e){const t=Rt(),a=this,s=a.touchEventsData,{params:n,touches:o,rtlTranslate:r,enabled:i}=a;if(!i||!n.simulateTouch&&e.pointerType==="mouse")return;let l=e;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(s.touchId!==null||l.pointerId!==s.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find($=>$.identifier===s.touchId),!c||c.identifier!==s.touchId)return}else c=l;if(!s.isTouched){s.startMoving&&s.isScrolling&&a.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){o.startX=u,o.startY=d;return}if(!a.allowTouchMove){l.target.matches(s.focusableElements)||(a.allowClick=!1),s.isTouched&&(Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d}),s.touchStartTime=en());return}if(n.touchReleaseOnEdges&&!n.loop)if(a.isVertical()){if(d<o.startY&&a.translate<=a.maxTranslate()||d>o.startY&&a.translate>=a.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(r&&(u>o.startX&&-a.translate<=a.maxTranslate()||u<o.startX&&-a.translate>=a.minTranslate()))return;if(!r&&(u<o.startX&&a.translate<=a.maxTranslate()||u>o.startX&&a.translate>=a.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(s.focusableElements)&&t.activeElement!==l.target&&l.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&l.target===t.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,a.allowClick=!1;return}s.allowTouchCallbacks&&a.emit("touchMove",l),o.previousX=o.currentX,o.previousY=o.currentY,o.currentX=u,o.currentY=d;const p=o.currentX-o.startX,f=o.currentY-o.startY;if(a.params.threshold&&Math.sqrt(p**2+f**2)<a.params.threshold)return;if(typeof s.isScrolling>"u"){let $;a.isHorizontal()&&o.currentY===o.startY||a.isVertical()&&o.currentX===o.startX?s.isScrolling=!1:p*p+f*f>=25&&($=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,s.isScrolling=a.isHorizontal()?$>n.touchAngle:90-$>n.touchAngle)}if(s.isScrolling&&a.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(o.currentX!==o.startX||o.currentY!==o.startY)&&(s.startMoving=!0),s.isScrolling||l.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;a.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let g=a.isHorizontal()?p:f,h=a.isHorizontal()?o.currentX-o.previousX:o.currentY-o.previousY;n.oneWayMovement&&(g=Math.abs(g)*(r?1:-1),h=Math.abs(h)*(r?1:-1)),o.diff=g,g*=n.touchRatio,r&&(g=-g,h=-h);const k=a.touchesDirection;a.swipeDirection=g>0?"prev":"next",a.touchesDirection=h>0?"prev":"next";const m=a.params.loop&&!n.cssMode,v=a.touchesDirection==="next"&&a.allowSlideNext||a.touchesDirection==="prev"&&a.allowSlidePrev;if(!s.isMoved){if(m&&v&&a.loopFix({direction:a.swipeDirection}),s.startTranslate=a.getTranslate(),a.setTransition(0),a.animating){const $=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});a.wrapperEl.dispatchEvent($)}s.allowMomentumBounce=!1,n.grabCursor&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!0),a.emit("sliderFirstMove",l)}if(new Date().getTime(),n._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&k!==a.touchesDirection&&m&&v&&Math.abs(g)>=1){Object.assign(o,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}a.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=g+s.startTranslate;let w=!0,E=n.resistanceRatio;if(n.touchReleaseOnEdges&&(E=0),g>0?(m&&v&&s.allowThresholdMove&&s.currentTranslate>(n.centeredSlides?a.minTranslate()-a.slidesSizesGrid[a.activeIndex+1]-(n.slidesPerView!=="auto"&&a.slides.length-n.slidesPerView>=2?a.slidesSizesGrid[a.activeIndex+1]+a.params.spaceBetween:0)-a.params.spaceBetween:a.minTranslate())&&a.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>a.minTranslate()&&(w=!1,n.resistance&&(s.currentTranslate=a.minTranslate()-1+(-a.minTranslate()+s.startTranslate+g)**E))):g<0&&(m&&v&&s.allowThresholdMove&&s.currentTranslate<(n.centeredSlides?a.maxTranslate()+a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween+(n.slidesPerView!=="auto"&&a.slides.length-n.slidesPerView>=2?a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween:0):a.maxTranslate())&&a.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:a.slides.length-(n.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),s.currentTranslate<a.maxTranslate()&&(w=!1,n.resistance&&(s.currentTranslate=a.maxTranslate()+1-(a.maxTranslate()-s.startTranslate-g)**E))),w&&(l.preventedByNestedSwiper=!0),!a.allowSlideNext&&a.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&a.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&!a.allowSlideNext&&(s.currentTranslate=s.startTranslate),n.threshold>0)if(Math.abs(g)>n.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,o.startX=o.currentX,o.startY=o.currentY,s.currentTranslate=s.startTranslate,o.diff=a.isHorizontal()?o.currentX-o.startX:o.currentY-o.startY;return}}else{s.currentTranslate=s.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&a.freeMode||n.watchSlidesProgress)&&(a.updateActiveIndex(),a.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&a.freeMode&&a.freeMode.onTouchMove(),a.updateProgress(s.currentTranslate),a.setTranslate(s.currentTranslate))}function rg(e){const t=this,a=t.touchEventsData;let s=e;s.originalEvent&&(s=s.originalEvent);let n;if(s.type==="touchend"||s.type==="touchcancel"){if(n=[...s.changedTouches].find($=>$.identifier===a.touchId),!n||n.identifier!==a.touchId)return}else{if(a.touchId!==null||s.pointerId!==a.pointerId)return;n=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(t.browser.isSafari||t.browser.isWebView)))return;a.pointerId=null,a.touchId=null;const{params:r,touches:i,rtlTranslate:l,slidesGrid:c,enabled:u}=t;if(!u||!r.simulateTouch&&s.pointerType==="mouse")return;if(a.allowTouchCallbacks&&t.emit("touchEnd",s),a.allowTouchCallbacks=!1,!a.isTouched){a.isMoved&&r.grabCursor&&t.setGrabCursor(!1),a.isMoved=!1,a.startMoving=!1;return}r.grabCursor&&a.isMoved&&a.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const d=en(),p=d-a.touchStartTime;if(t.allowClick){const $=s.path||s.composedPath&&s.composedPath();t.updateClickedSlide($&&$[0]||s.target,$),t.emit("tap click",s),p<300&&d-a.lastClickTime<300&&t.emit("doubleTap doubleClick",s)}if(a.lastClickTime=en(),nc(()=>{t.destroyed||(t.allowClick=!0)}),!a.isTouched||!a.isMoved||!t.swipeDirection||i.diff===0&&!a.loopSwapReset||a.currentTranslate===a.startTranslate&&!a.loopSwapReset){a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;return}a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;let f;if(r.followFinger?f=l?t.translate:-t.translate:f=-a.currentTranslate,r.cssMode)return;if(r.freeMode&&r.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-t.maxTranslate()&&!t.params.loop;let h=0,k=t.slidesSizesGrid[0];for(let $=0;$<c.length;$+=$<r.slidesPerGroupSkip?1:r.slidesPerGroup){const D=$<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;typeof c[$+D]<"u"?(g||f>=c[$]&&f<c[$+D])&&(h=$,k=c[$+D]-c[$]):(g||f>=c[$])&&(h=$,k=c[c.length-1]-c[c.length-2])}let m=null,v=null;r.rewind&&(t.isBeginning?v=r.virtual&&r.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(m=0));const w=(f-c[h])/k,E=h<r.slidesPerGroupSkip-1?1:r.slidesPerGroup;if(p>r.longSwipesMs){if(!r.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(w>=r.longSwipesRatio?t.slideTo(r.rewind&&t.isEnd?m:h+E):t.slideTo(h)),t.swipeDirection==="prev"&&(w>1-r.longSwipesRatio?t.slideTo(h+E):v!==null&&w<0&&Math.abs(w)>r.longSwipesRatio?t.slideTo(v):t.slideTo(h))}else{if(!r.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(s.target===t.navigation.nextEl||s.target===t.navigation.prevEl)?s.target===t.navigation.nextEl?t.slideTo(h+E):t.slideTo(h):(t.swipeDirection==="next"&&t.slideTo(m!==null?m:h+E),t.swipeDirection==="prev"&&t.slideTo(v!==null?v:h))}}function di(){const e=this,{params:t,el:a}=e;if(a&&a.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:n,snapGrid:o}=e,r=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const i=r&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!i?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!r?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=s,e.params.watchOverflow&&o!==e.snapGrid&&e.checkOverflow()}function ig(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function lg(){const e=this,{wrapperEl:t,rtlTranslate:a,enabled:s}=e;if(!s)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const o=e.maxTranslate()-e.minTranslate();o===0?n=0:n=(e.translate-e.minTranslate())/o,n!==e.progress&&e.updateProgress(a?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function cg(e){const t=this;Fs(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function dg(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const uc=(e,t)=>{const a=Rt(),{params:s,el:n,wrapperEl:o,device:r}=e,i=!!s.nested,l=t==="on"?"addEventListener":"removeEventListener",c=t;!n||typeof n=="string"||(a[l]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:i}),n[l]("touchstart",e.onTouchStart,{passive:!1}),n[l]("pointerdown",e.onTouchStart,{passive:!1}),a[l]("touchmove",e.onTouchMove,{passive:!1,capture:i}),a[l]("pointermove",e.onTouchMove,{passive:!1,capture:i}),a[l]("touchend",e.onTouchEnd,{passive:!0}),a[l]("pointerup",e.onTouchEnd,{passive:!0}),a[l]("pointercancel",e.onTouchEnd,{passive:!0}),a[l]("touchcancel",e.onTouchEnd,{passive:!0}),a[l]("pointerout",e.onTouchEnd,{passive:!0}),a[l]("pointerleave",e.onTouchEnd,{passive:!0}),a[l]("contextmenu",e.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&n[l]("click",e.onClick,!0),s.cssMode&&o[l]("scroll",e.onScroll),s.updateOnWindowResize?e[c](r.ios||r.android?"resize orientationchange observerUpdate":"resize observerUpdate",di,!0):e[c]("observerUpdate",di,!0),n[l]("load",e.onLoad,{capture:!0}))};function ug(){const e=this,{params:t}=e;e.onTouchStart=ng.bind(e),e.onTouchMove=og.bind(e),e.onTouchEnd=rg.bind(e),e.onDocumentTouchStart=dg.bind(e),t.cssMode&&(e.onScroll=lg.bind(e)),e.onClick=ig.bind(e),e.onLoad=cg.bind(e),uc(e,"on")}function pg(){uc(this,"off")}var fg={attachEvents:ug,detachEvents:pg};const ui=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function hg(){const e=this,{realIndex:t,initialized:a,params:s,el:n}=e,o=s.breakpoints;if(!o||o&&Object.keys(o).length===0)return;const r=Rt(),i=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",l=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?e.el:r.querySelector(s.breakpointsBase),c=e.getBreakpoint(o,i,l);if(!c||e.currentBreakpoint===c)return;const d=(c in o?o[c]:void 0)||e.originalParams,p=ui(e,s),f=ui(e,d),g=e.params.grabCursor,h=d.grabCursor,k=s.enabled;p&&!f?(n.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(n.classList.add(`${s.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&s.grid.fill==="column")&&n.classList.add(`${s.containerModifierClass}grid-column`),e.emitContainerClasses()),g&&!h?e.unsetGrabCursor():!g&&h&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(D=>{if(typeof d[D]>"u")return;const M=s[D]&&s[D].enabled,V=d[D]&&d[D].enabled;M&&!V&&e[D].disable(),!M&&V&&e[D].enable()});const m=d.direction&&d.direction!==s.direction,v=s.loop&&(d.slidesPerView!==s.slidesPerView||m),w=s.loop;m&&a&&e.changeDirection(),pt(e.params,d);const E=e.params.enabled,$=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),k&&!E?e.disable():!k&&E&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",d),a&&(v?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!w&&$?(e.loopCreate(t),e.updateSlides()):w&&!$&&e.loopDestroy()),e.emit("breakpoint",d)}function gg(e,t="window",a){if(!e||t==="container"&&!a)return;let s=!1;const n=ct(),o=t==="window"?n.innerHeight:a.clientHeight,r=Object.keys(e).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:o*l,point:i}}return{value:i,point:i}});r.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<r.length;i+=1){const{point:l,value:c}=r[i];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=a.clientWidth&&(s=l)}return s||"max"}var mg={setBreakpoint:hg,getBreakpoint:gg};function bg(e,t){const a=[];return e.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(n=>{s[n]&&a.push(t+n)}):typeof s=="string"&&a.push(t+s)}),a}function _g(){const e=this,{classNames:t,params:a,rtl:s,el:n,device:o}=e,r=bg(["initialized",a.direction,{"free-mode":e.params.freeMode&&a.freeMode.enabled},{autoheight:a.autoHeight},{rtl:s},{grid:a.grid&&a.grid.rows>1},{"grid-column":a.grid&&a.grid.rows>1&&a.grid.fill==="column"},{android:o.android},{ios:o.ios},{"css-mode":a.cssMode},{centered:a.cssMode&&a.centeredSlides},{"watch-progress":a.watchSlidesProgress}],a.containerModifierClass);t.push(...r),n.classList.add(...t),e.emitContainerClasses()}function vg(){const e=this,{el:t,classNames:a}=e;!t||typeof t=="string"||(t.classList.remove(...a),e.emitContainerClasses())}var yg={addClasses:_g,removeClasses:vg};function wg(){const e=this,{isLocked:t,params:a}=e,{slidesOffsetBefore:s}=a;if(s){const n=e.slides.length-1,o=e.slidesGrid[n]+e.slidesSizesGrid[n]+s*2;e.isLocked=e.size>o}else e.isLocked=e.snapGrid.length===1;a.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),a.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var xg={checkOverflow:wg},pi={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Tg(e,t){return function(s={}){const n=Object.keys(s)[0],o=s[n];if(typeof o!="object"||o===null){pt(t,s);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in o)){pt(t,s);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),pt(t,s)}}const Wn={eventsEmitter:yh,update:Lh,translate:Nh,transition:Hh,slide:Wh,loop:Zh,grabCursor:ag,events:fg,breakpoints:mg,checkOverflow:xg,classes:yg},Jn={};class _t{constructor(...t){let a,s;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?s=t[0]:[a,s]=t,s||(s={}),s=pt({},s),a&&!s.el&&(s.el=a);const n=Rt();if(s.el&&typeof s.el=="string"&&n.querySelectorAll(s.el).length>1){const l=[];return n.querySelectorAll(s.el).forEach(c=>{const u=pt({},s,{el:c});l.push(new _t(u))}),l}const o=this;o.__swiper__=!0,o.support=ic(),o.device=lc({userAgent:s.userAgent}),o.browser=cc(),o.eventsListeners={},o.eventsAnyListeners=[],o.modules=[...o.__modules__],s.modules&&Array.isArray(s.modules)&&s.modules.forEach(l=>{typeof l=="function"&&o.modules.indexOf(l)<0&&o.modules.push(l)});const r={};o.modules.forEach(l=>{l({params:s,swiper:o,extendParams:Tg(s,r),on:o.on.bind(o),once:o.once.bind(o),off:o.off.bind(o),emit:o.emit.bind(o)})});const i=pt({},pi,r);return o.params=pt({},i,Jn,s),o.originalParams=pt({},o.params),o.passedParams=pt({},s),o.params&&o.params.on&&Object.keys(o.params.on).forEach(l=>{o.on(l,o.params.on[l])}),o.params&&o.params.onAny&&o.onAny(o.params.onAny),Object.assign(o,{enabled:o.params.enabled,el:a,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return o.params.direction==="horizontal"},isVertical(){return o.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:o.params.allowSlideNext,allowSlidePrev:o.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:o.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:o.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),o.emit("_swiper"),o.params.init&&o.init(),o}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:a,params:s}=this,n=Mt(a,`.${s.slideClass}, swiper-slide`),o=sn(n[0]);return sn(t)-o}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(a=>a.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:a,params:s}=t;t.slides=Mt(a,`.${s.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,a){const s=this;t=Math.min(Math.max(t,0),1);const n=s.minTranslate(),r=(s.maxTranslate()-n)*t+n;s.translateTo(r,typeof a>"u"?0:a),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=t.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",a.join(" "))}getSlideClasses(t){const a=this;return a.destroyed?"":t.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(a.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const a=[];t.slides.forEach(s=>{const n=t.getSlideClasses(s);a.push({slideEl:s,classNames:n}),t.emit("_slideClass",s,n)}),t.emit("_slideClasses",a)}slidesPerViewDynamic(t="current",a=!1){const s=this,{params:n,slides:o,slidesGrid:r,slidesSizesGrid:i,size:l,activeIndex:c}=s;let u=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let d=o[c]?Math.ceil(o[c].swiperSlideSize):0,p;for(let f=c+1;f<o.length;f+=1)o[f]&&!p&&(d+=Math.ceil(o[f].swiperSlideSize),u+=1,d>l&&(p=!0));for(let f=c-1;f>=0;f-=1)o[f]&&!p&&(d+=o[f].swiperSlideSize,u+=1,d>l&&(p=!0))}else if(t==="current")for(let d=c+1;d<o.length;d+=1)(a?r[d]+i[d]-r[c]<l:r[d]-r[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)r[c]-r[d]<l&&(u+=1);return u}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:a,params:s}=t;s.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(r=>{r.complete&&Fs(t,r)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const r=t.rtlTranslate?t.translate*-1:t.translate,i=Math.min(Math.max(r,t.maxTranslate()),t.minTranslate());t.setTranslate(i),t.updateActiveIndex(),t.updateSlidesClasses()}let o;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)n(),s.autoHeight&&t.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&t.isEnd&&!s.centeredSlides){const r=t.virtual&&s.virtual.enabled?t.virtual.slides:t.slides;o=t.slideTo(r.length-1,0,!1,!0)}else o=t.slideTo(t.activeIndex,0,!1,!0);o||n()}s.watchOverflow&&a!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,a=!0){const s=this,n=s.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),s.el.classList.add(`${s.params.containerModifierClass}${t}`),s.emitContainerClasses(),s.params.direction=t,s.slides.forEach(o=>{t==="vertical"?o.style.width="":o.style.height=""}),s.emit("changeDirection"),a&&s.update()),s}changeLanguageDirection(t){const a=this;a.rtl&&t==="rtl"||!a.rtl&&t==="ltr"||(a.rtl=t==="rtl",a.rtlTranslate=a.params.direction==="horizontal"&&a.rtl,a.rtl?(a.el.classList.add(`${a.params.containerModifierClass}rtl`),a.el.dir="rtl"):(a.el.classList.remove(`${a.params.containerModifierClass}rtl`),a.el.dir="ltr"),a.update())}mount(t){const a=this;if(a.mounted)return!0;let s=t||a.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=a,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===a.params.swiperElementNodeName.toUpperCase()&&(a.isElement=!0);const n=()=>`.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;let r=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(n()):Mt(s,n())[0];return!r&&a.params.createElements&&(r=an("div",a.params.wrapperClass),s.append(r),Mt(s,`.${a.params.slideClass}`).forEach(i=>{r.append(i)})),Object.assign(a,{el:s,wrapperEl:r,slidesEl:a.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:r,hostEl:a.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||ra(s,"direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||ra(s,"direction")==="rtl"),wrongRTL:ra(r,"display")==="-webkit-box"}),!0}init(t){const a=this;if(a.initialized||a.mount(t)===!1)return a;a.emit("beforeInit"),a.params.breakpoints&&a.setBreakpoint(),a.addClasses(),a.updateSize(),a.updateSlides(),a.params.watchOverflow&&a.checkOverflow(),a.params.grabCursor&&a.enabled&&a.setGrabCursor(),a.params.loop&&a.virtual&&a.params.virtual.enabled?a.slideTo(a.params.initialSlide+a.virtual.slidesBefore,0,a.params.runCallbacksOnInit,!1,!0):a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,!1,!0),a.params.loop&&a.loopCreate(void 0,!0),a.attachEvents();const n=[...a.el.querySelectorAll('[loading="lazy"]')];return a.isElement&&n.push(...a.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(o=>{o.complete?Fs(a,o):o.addEventListener("load",r=>{Fs(a,r.target)})}),xo(a),a.initialized=!0,xo(a),a.emit("init"),a.emit("afterInit"),a}destroy(t=!0,a=!0){const s=this,{params:n,el:o,wrapperEl:r,slides:i}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),n.loop&&s.loopDestroy(),a&&(s.removeClasses(),o&&typeof o!="string"&&o.removeAttribute("style"),r&&r.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),t!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),ih(s)),s.destroyed=!0),null}static extendDefaults(t){pt(Jn,t)}static get extendedDefaults(){return Jn}static get defaults(){return pi}static installModule(t){_t.prototype.__modules__||(_t.prototype.__modules__=[]);const a=_t.prototype.__modules__;typeof t=="function"&&a.indexOf(t)<0&&a.push(t)}static use(t){return Array.isArray(t)?(t.forEach(a=>_t.installModule(a)),_t):(_t.installModule(t),_t)}}Object.keys(Wn).forEach(e=>{Object.keys(Wn[e]).forEach(t=>{_t.prototype[t]=Wn[e][t]})});_t.use([_h,vh]);function kg(e,t,a,s){return e.params.createElements&&Object.keys(s).forEach(n=>{if(!a[n]&&a.auto===!0){let o=Mt(e.el,`.${s[n]}`)[0];o||(o=an("div",s[n]),o.className=s[n],e.el.append(o)),a[n]=o,t[n]=o}}),a}function Ka(e=""){return`.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Sg({swiper:e,extendParams:t,on:a,emit:s}){const n="swiper-pagination";t({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:m=>m,formatFractionTotal:m=>m,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),e.pagination={el:null,bullets:[]};let o,r=0;function i(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function l(m,v){const{bulletActiveClass:w}=e.params.pagination;m&&(m=m[`${v==="prev"?"previous":"next"}ElementSibling`],m&&(m.classList.add(`${w}-${v}`),m=m[`${v==="prev"?"previous":"next"}ElementSibling`],m&&m.classList.add(`${w}-${v}-${v}`)))}function c(m,v,w){if(m=m%w,v=v%w,v===m+1)return"next";if(v===m-1)return"previous"}function u(m){const v=m.target.closest(Ka(e.params.pagination.bulletClass));if(!v)return;m.preventDefault();const w=sn(v)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===w)return;const E=c(e.realIndex,w,e.slides.length);E==="next"?e.slideNext():E==="previous"?e.slidePrev():e.slideToLoop(w)}else e.slideTo(w)}function d(){const m=e.rtl,v=e.params.pagination;if(i())return;let w=e.pagination.el;w=Ft(w);let E,$;const D=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,M=e.params.loop?Math.ceil(D/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?($=e.previousRealIndex||0,E=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(E=e.snapIndex,$=e.previousSnapIndex):($=e.previousIndex||0,E=e.activeIndex||0),v.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const V=e.pagination.bullets;let I,U,j;if(v.dynamicBullets&&(o=wo(V[0],e.isHorizontal()?"width":"height"),w.forEach(F=>{F.style[e.isHorizontal()?"width":"height"]=`${o*(v.dynamicMainBullets+4)}px`}),v.dynamicMainBullets>1&&$!==void 0&&(r+=E-($||0),r>v.dynamicMainBullets-1?r=v.dynamicMainBullets-1:r<0&&(r=0)),I=Math.max(E-r,0),U=I+(Math.min(V.length,v.dynamicMainBullets)-1),j=(U+I)/2),V.forEach(F=>{const G=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(C=>`${v.bulletActiveClass}${C}`)].map(C=>typeof C=="string"&&C.includes(" ")?C.split(" "):C).flat();F.classList.remove(...G)}),w.length>1)V.forEach(F=>{const G=sn(F);G===E?F.classList.add(...v.bulletActiveClass.split(" ")):e.isElement&&F.setAttribute("part","bullet"),v.dynamicBullets&&(G>=I&&G<=U&&F.classList.add(...`${v.bulletActiveClass}-main`.split(" ")),G===I&&l(F,"prev"),G===U&&l(F,"next"))});else{const F=V[E];if(F&&F.classList.add(...v.bulletActiveClass.split(" ")),e.isElement&&V.forEach((G,C)=>{G.setAttribute("part",C===E?"bullet-active":"bullet")}),v.dynamicBullets){const G=V[I],C=V[U];for(let A=I;A<=U;A+=1)V[A]&&V[A].classList.add(...`${v.bulletActiveClass}-main`.split(" "));l(G,"prev"),l(C,"next")}}if(v.dynamicBullets){const F=Math.min(V.length,v.dynamicMainBullets+4),G=(o*F-o)/2-j*o,C=m?"right":"left";V.forEach(A=>{A.style[e.isHorizontal()?C:"top"]=`${G}px`})}}w.forEach((V,I)=>{if(v.type==="fraction"&&(V.querySelectorAll(Ka(v.currentClass)).forEach(U=>{U.textContent=v.formatFractionCurrent(E+1)}),V.querySelectorAll(Ka(v.totalClass)).forEach(U=>{U.textContent=v.formatFractionTotal(M)})),v.type==="progressbar"){let U;v.progressbarOpposite?U=e.isHorizontal()?"vertical":"horizontal":U=e.isHorizontal()?"horizontal":"vertical";const j=(E+1)/M;let F=1,G=1;U==="horizontal"?F=j:G=j,V.querySelectorAll(Ka(v.progressbarFillClass)).forEach(C=>{C.style.transform=`translate3d(0,0,0) scaleX(${F}) scaleY(${G})`,C.style.transitionDuration=`${e.params.speed}ms`})}v.type==="custom"&&v.renderCustom?(ii(V,v.renderCustom(e,E+1,M)),I===0&&s("paginationRender",V)):(I===0&&s("paginationRender",V),s("paginationUpdate",V)),e.params.watchOverflow&&e.enabled&&V.classList[e.isLocked?"add":"remove"](v.lockClass)})}function p(){const m=e.params.pagination;if(i())return;const v=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let w=e.pagination.el;w=Ft(w);let E="";if(m.type==="bullets"){let $=e.params.loop?Math.ceil(v/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&$>v&&($=v);for(let D=0;D<$;D+=1)m.renderBullet?E+=m.renderBullet.call(e,D,m.bulletClass):E+=`<${m.bulletElement} ${e.isElement?'part="bullet"':""} class="${m.bulletClass}"></${m.bulletElement}>`}m.type==="fraction"&&(m.renderFraction?E=m.renderFraction.call(e,m.currentClass,m.totalClass):E=`<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`),m.type==="progressbar"&&(m.renderProgressbar?E=m.renderProgressbar.call(e,m.progressbarFillClass):E=`<span class="${m.progressbarFillClass}"></span>`),e.pagination.bullets=[],w.forEach($=>{m.type!=="custom"&&ii($,E||""),m.type==="bullets"&&e.pagination.bullets.push(...$.querySelectorAll(Ka(m.bulletClass)))}),m.type!=="custom"&&s("paginationRender",w[0])}function f(){e.params.pagination=kg(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const m=e.params.pagination;if(!m.el)return;let v;typeof m.el=="string"&&e.isElement&&(v=e.el.querySelector(m.el)),!v&&typeof m.el=="string"&&(v=[...document.querySelectorAll(m.el)]),v||(v=m.el),!(!v||v.length===0)&&(e.params.uniqueNavElements&&typeof m.el=="string"&&Array.isArray(v)&&v.length>1&&(v=[...e.el.querySelectorAll(m.el)],v.length>1&&(v=v.find(w=>rc(w,".swiper")[0]===e.el))),Array.isArray(v)&&v.length===1&&(v=v[0]),Object.assign(e.pagination,{el:v}),v=Ft(v),v.forEach(w=>{m.type==="bullets"&&m.clickable&&w.classList.add(...(m.clickableClass||"").split(" ")),w.classList.add(m.modifierClass+m.type),w.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.type==="bullets"&&m.dynamicBullets&&(w.classList.add(`${m.modifierClass}${m.type}-dynamic`),r=0,m.dynamicMainBullets<1&&(m.dynamicMainBullets=1)),m.type==="progressbar"&&m.progressbarOpposite&&w.classList.add(m.progressbarOppositeClass),m.clickable&&w.addEventListener("click",u),e.enabled||w.classList.add(m.lockClass)}))}function g(){const m=e.params.pagination;if(i())return;let v=e.pagination.el;v&&(v=Ft(v),v.forEach(w=>{w.classList.remove(m.hiddenClass),w.classList.remove(m.modifierClass+m.type),w.classList.remove(e.isHorizontal()?m.horizontalClass:m.verticalClass),m.clickable&&(w.classList.remove(...(m.clickableClass||"").split(" ")),w.removeEventListener("click",u))})),e.pagination.bullets&&e.pagination.bullets.forEach(w=>w.classList.remove(...m.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const m=e.params.pagination;let{el:v}=e.pagination;v=Ft(v),v.forEach(w=>{w.classList.remove(m.horizontalClass,m.verticalClass),w.classList.add(e.isHorizontal()?m.horizontalClass:m.verticalClass)})}),a("init",()=>{e.params.pagination.enabled===!1?k():(f(),p(),d())}),a("activeIndexChange",()=>{typeof e.snapIndex>"u"&&d()}),a("snapIndexChange",()=>{d()}),a("snapGridLengthChange",()=>{p(),d()}),a("destroy",()=>{g()}),a("enable disable",()=>{let{el:m}=e.pagination;m&&(m=Ft(m),m.forEach(v=>v.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),a("lock unlock",()=>{d()}),a("click",(m,v)=>{const w=v.target,E=Ft(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&E&&E.length>0&&!w.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&w===e.navigation.nextEl||e.navigation.prevEl&&w===e.navigation.prevEl))return;const $=E[0].classList.contains(e.params.pagination.hiddenClass);s($===!0?"paginationShow":"paginationHide"),E.forEach(D=>D.classList.toggle(e.params.pagination.hiddenClass))}});const h=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=Ft(m),m.forEach(v=>v.classList.remove(e.params.pagination.paginationDisabledClass))),f(),p(),d()},k=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:m}=e.pagination;m&&(m=Ft(m),m.forEach(v=>v.classList.add(e.params.pagination.paginationDisabledClass))),g()};Object.assign(e.pagination,{enable:h,disable:k,render:p,update:d,init:f,destroy:g})}function Eg({swiper:e,extendParams:t,on:a,emit:s,params:n}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let o,r,i=n&&n.autoplay?n.autoplay.delay:3e3,l=n&&n.autoplay?n.autoplay.delay:3e3,c,u=new Date().getTime(),d,p,f,g,h,k;function m(R){!e||e.destroyed||!e.wrapperEl||R.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",m),!(k||R.detail&&R.detail.bySwiperTouchMove)&&I())}const v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&(l=c,d=!1);const R=e.autoplay.paused?c:u+l-new Date().getTime();e.autoplay.timeLeft=R,s("autoplayTimeLeft",R,R/i),r=requestAnimationFrame(()=>{v()})},w=()=>{let R;return e.virtual&&e.params.virtual.enabled?R=e.slides.find(q=>q.classList.contains("swiper-slide-active")):R=e.slides[e.activeIndex],R?parseInt(R.getAttribute("data-swiper-autoplay"),10):void 0},E=()=>{let R=e.params.autoplay.delay;const O=w();return!Number.isNaN(O)&&O>0&&(R=O),R},$=R=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(r),v();let O=R;typeof O>"u"&&(O=E(),i=O,l=O),c=O;const q=e.params.speed,Q=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(q,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,q,!0,!0),s("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(q,!0,!0),s("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,q,!0,!0),s("autoplay")),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{$()})))};return O>0?(clearTimeout(o),o=setTimeout(()=>{Q()},O)):requestAnimationFrame(()=>{Q()}),O},D=()=>{u=new Date().getTime(),e.autoplay.running=!0,$(),s("autoplayStart")},M=()=>{e.autoplay.running=!1,clearTimeout(o),cancelAnimationFrame(r),s("autoplayStop")},V=(R,O)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(o),R||(h=!0);const q=()=>{s("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",m):I()};if(e.autoplay.paused=!0,O){q();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),q())},I=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),h?(h=!1,$(c)):$(),e.autoplay.paused=!1,s("autoplayResume"))},U=()=>{if(e.destroyed||!e.autoplay.running)return;const R=Rt();R.visibilityState==="hidden"&&(h=!0,V(!0)),R.visibilityState==="visible"&&I()},j=R=>{R.pointerType==="mouse"&&(h=!0,k=!0,!(e.animating||e.autoplay.paused)&&V(!0))},F=R=>{R.pointerType==="mouse"&&(k=!1,e.autoplay.paused&&I())},G=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",j),e.el.addEventListener("pointerleave",F))},C=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",j),e.el.removeEventListener("pointerleave",F))},A=()=>{Rt().addEventListener("visibilitychange",U)},S=()=>{Rt().removeEventListener("visibilitychange",U)};a("init",()=>{e.params.autoplay.enabled&&(G(),A(),D())}),a("destroy",()=>{C(),S(),e.autoplay.running&&M()}),a("_freeModeStaticRelease",()=>{(f||h)&&I()}),a("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?M():V(!0,!0)}),a("beforeTransitionStart",(R,O,q)=>{e.destroyed||!e.autoplay.running||(q||!e.params.autoplay.disableOnInteraction?V(!0,!0):M())}),a("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){M();return}p=!0,f=!1,h=!1,g=setTimeout(()=>{h=!0,f=!0,V(!0)},200)}}),a("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(o),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&I(),f=!1,p=!1}}),a("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=E(),i=E())}),Object.assign(e.autoplay,{start:D,stop:M,pause:V,resume:I})}const Ag={class:"home-layout"},Cg={class:"sticky-header-group"},Pg=["data-user-name"],Og={class:"home-tabs",id:"home-tabs--id"},Lg={class:"home-tab home-tab--lobby home-tab--active","data-home-tab":"lobby-active"},Mg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Dg={class:"home-tab home-tab--lobby","data-home-tab":"lobby-completed"},Rg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},$g={class:"home-tab home-tab--my home-tab--active","data-home-tab":"my-active"},Ig={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Ng={class:"home-tab home-tab--my","data-home-tab":"my-completed"},Bg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Fg={class:"home-tab home-tab--private home-tab--active","data-home-tab":"private-all"},zg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Hg={class:"home-tab home-tab--private","data-home-tab":"private-invites"},Ug={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Gg={class:"create-cta-banner__content"},jg={__name:"home_route",setup(e){const t=lt(),a=ke();window.CoreBetSlip=ac;const s=()=>{t.push({name:"create_tournament_route"})};document.addEventListener("click",u=>{const d=u.target;if(d&&d.dataset?.promotionTopic){const p={timestamp:Date.now(),heroImg:d.dataset.promotionHeroImg||"",caption:d.dataset.promotionCaption||"",tagline:d.dataset.promotionTagline||"",toast:d.dataset.promotionToast||"",topic:d.dataset.promotionTopic||"",topicToken:d.dataset.promotionTopicToken||"",marquee:d.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",p),de.publish(a.hierTopics.PROMOTION__CLICK,JSON.stringify(p))}d&&d.dataset?.publishRouteHome&&(d.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(f=>{f.classList.toggle("dash-nav__btn--active",f===d)}),de.publish(d.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),d&&d.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const n=(u,d=!1,p="cards",f={})=>{const g=document.querySelector(".tournaments-grid");if(!g)return;g.innerHTML="",g.style.animation="none",g.offsetHeight,g.style.animation="panel-enter 0.3s ease-out both",g.classList.toggle("tournaments-grid--list",p==="list");const h=document.getElementById("app"),k=h?.getAttribute("data-sync-theme")||"dark",m=h?.getAttribute("data-sync-lang")||"en",v=h?.getAttribute("data-sync-motif")||"brand",w=(D="")=>String(D).replace(/\S+/g,M=>/[A-Z]/.test(M)&&M===M.toUpperCase()?M:M.charAt(0).toUpperCase()+M.slice(1).toLowerCase()),E=D=>{const M=document.createElement("bma-tournament-list-card");M.setAttribute("data-bma-tourn-guid",D.guid||""),M.setAttribute("data-bma-tourn-caption",D.caption||""),M.setAttribute("data-bma-tourn-tagline",D.tagline||""),M.setAttribute("data-bma-tourn-status",D.status||""),M.setAttribute("data-bma-tourn-class",D.status||""),M.setAttribute("data-bma-tourn-game-type",D.class||"DEFAULT_FORMAT"),M.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(D.sports_allowed)?JSON.stringify(D.sports_allowed):""),M.setAttribute("data-bma-tourn-entities",D.entities?JSON.stringify(D.entities):""),M.setAttribute("data-bma-tourn-entry_fee",D.entry_fee||"0"),M.setAttribute("data-bma-tourn-tournament_dollars",D.tournament_dollars||"0"),M.setAttribute("data-bma-tourn-matches",D.matches_expanded?.length||"0"),M.setAttribute("data-bma-tourn-tags",Array.isArray(D.tags)?JSON.stringify(D.tags):"[]"),M.setAttribute("data-bma-tourn-window_start_time",D.window_start_time||""),M.setAttribute("data-bma-tourn-window_end_time",D.window_end_time||""),M.setAttribute("data-sync-theme",k);try{const V=a.appSession?.session_user?.guid,I=(D.status||D.class)==="COMPLETED",U=D.entities?.guids||[],j=V&&U.includes(V);if(I&&j&&typeof window.GameTypeLifeCycle?.forTournament=="function"){const F=window.GameTypeLifeCycle.forTournament(D);if(F&&typeof F.rankLeaderboard=="function"){const G=U.map(S=>{const R=Array.isArray(D.combined_betslips)?D.combined_betslips.filter(O=>O.entity_guid===S||O.user_guid===S||O.guid===S):[];return{guid:S,bets:R,tournament_dollars:D.tournament_dollars,timestamp:D.status_time}}),C=F.rankLeaderboard(G,D),A=C.findIndex(S=>S.guid===V);A>=0&&(M.setAttribute("data-user-rank",String(A+1)),M.setAttribute("data-user-total",String(C.length)))}}}catch{}return M},$=D=>{const M=document.createElement("article"),V=D.status||"DRAFT";M.className=`tournament-item tournament-status-${V.toLowerCase()}`;const I=document.createElement("bma-tournament-card");return I.setAttribute("data-bma-tourn-id",D.id||""),I.setAttribute("data-bma-tourn-guid",D.guid||""),I.setAttribute("data-bma-tourn-caption",D.caption||""),I.setAttribute("data-bma-tourn-tagline",D.tagline||""),I.setAttribute("data-bma-tourn-window_start_time",D.window_start_time||""),I.setAttribute("data-bma-tourn-window_end_time",D.window_end_time||""),I.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(D.sports_allowed)?JSON.stringify(D.sports_allowed):D.sports_allowed||""),I.setAttribute("data-bma-tourn-entities",D.entities?JSON.stringify(D.entities):""),I.setAttribute("data-bma-tourn-tournament_dollars",D.tournament_dollars||""),I.setAttribute("data-bma-tourn-prize_distro",Array.isArray(D.prize_distro)?JSON.stringify(D.prize_distro):D.prize_distro||""),I.setAttribute("data-bma-tourn-matches",Array.isArray(D.matches_guids)?JSON.stringify(D.matches_guids):D.matches_guids||""),I.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(D.matches_expanded)?JSON.stringify(D.matches_expanded):D.matches_expanded||""),I.setAttribute("data-bma-tourn-entry_fee",D.entry_fee||""),I.setAttribute("data-bma-tourn-rake",D.rake||""),I.setAttribute("data-bma-tourn-tags",Array.isArray(D.tags)?JSON.stringify(D.tags):D.tags||""),I.setAttribute("data-bma-tourn-comments",D.comments||""),I.setAttribute("data-bma-tourn-class",D.status||""),I.setAttribute("data-bma-tourn-game-type",D.class||"DEFAULT_FORMAT"),I.setAttribute("data-bma-tourn-status",D.status||""),I.setAttribute("data-sync-theme",k),I.setAttribute("data-sync-lang",m),I.setAttribute("data-sync-motif",v),I.setAttribute("data-n55-size","medium"),I.setAttribute("data-n55-enchanted-cta-ambient","none"),I.setAttribute("data-tourn-custom-css",""),I.setAttribute("data-tourn-trophy","0"),I.setAttribute("data-bma-tourn-focus",""),I.setAttribute("data-bma-tourn-wait","false"),M.appendChild(I),M};if(d){u.forEach(M=>{if(M.type==="stats"){const ee=document.createElement("div");ee.className="tournament-category tournament-category--stats",ee.innerHTML=M.html||"",g.appendChild(ee);return}const V=document.createElement("div");V.className="tournament-category";const I=document.createElement("header");I.className="tournament-category-header";const U=document.createElement("div");if(U.className="category-title-line",M.tournaments){const ee=document.createElement("span");ee.className="category-count-pill";const ne=(()=>{const z=M.sportKey;if(!z||z==="all")return'<span class="category-count-pill__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg></span>';if(z==="multi")return'<span class="category-count-pill__icon"><bma-sport-icon sport="multi" data-sport-group="Multi"></bma-sport-icon></span>';const Z=Ge.find(re=>re.key===z)?.group||"default";return`<span class="category-count-pill__icon"><bma-sport-icon sport="${z}" data-sport-group="${Z}"></bma-sport-icon></span>`})();ee.classList.add("category-count-pill--with-icon"),ee.innerHTML=`${ne}<span class="category-count-pill__num">${M.tournaments.length}</span>`,U.appendChild(ee)}const j=document.createElement("h2");j.className="category-title",j.textContent=w(M.title),U.appendChild(j);const{tab:F="lobby",subStatus:G="all",sort:C="default",result:A="all",odds:S="all"}=f,O=M.title.toLowerCase().includes("completed"),q=!O&&F==="my",Q=(ee,ne,z)=>`<option value="${ee}"${z?" selected":""}>${ne}</option>`;let X="";F==="lobby"?X=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${Q("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${Q("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${Q("default","Starting TD$: Default",C==="default")}
              ${Q("td_high","Starting TD$: High to Low",C==="td_high")}
              ${Q("td_low","Starting TD$: Low to High",C==="td_low")}
            </select>
          `:F==="my"&&q?X=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${Q("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${Q("all","Status: All",G==="all")}
              ${Q("active","Status: Active",G==="active")}
              ${Q("upcoming","Status: Upcoming",G==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${Q("all","Odds: All",S==="all")}
              ${Q("available","Odds: Available",S==="available")}
              ${Q("none","Odds: Not Available",S==="none")}
            </select>
          `:(F==="my"&&O||F==="completed")&&(X=`
            <select class="category-dropdown" data-filter-type="result">
              ${Q("all","Result: All",A==="all")}
              ${Q("trophy","Result: Won Trophy",A==="trophy")}
              ${Q("no_trophy","Result: No Trophy",A==="no_trophy")}
            </select>
          `),I.appendChild(U);const oe=localStorage.getItem("bma_view_mode")||"cards",K=document.createElement("div");if(K.className="category-controls",X){const ee=document.createElement("button");ee.className="category-filter-toggle",ee.setAttribute("aria-label","Toggle filters"),ee.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filters <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>',K.appendChild(ee)}const se=document.createElement("span");if(se.className="category-view-btns",se.innerHTML=`
          <button class="category-view-btn${oe==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            <span>Card</span>
          </button>
          <button class="category-view-btn${oe==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            <span>List</span>
          </button>
        `,K.appendChild(se),I.appendChild(K),X){const ee=document.createElement("div");if(ee.className="category-filter-row",ee.style.display=window._bmaFilterRowOpen?"":"none",ee.innerHTML=X,I.appendChild(ee),window._bmaFilterRowOpen){const ne=I.querySelector(".category-filter-toggle");ne&&ne.classList.add("category-filter-toggle--open")}}if(V.appendChild(I),g.appendChild(V),M.tournaments.length===0){const ee=M.emptyMessage||"No tournaments available",z=Object.prototype.hasOwnProperty.call(M,"emptySubtext")?M.emptySubtext||"":"Check back later for new tournaments",te=M.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',Z=document.createElement("div");Z.className="tournaments-empty",Z.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",Z.innerHTML=`
            ${te}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${ee}</p>
            ${z?`<p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${z}</p>`:""}
          `,V.appendChild(Z)}else{const ee=document.createElement("div");if(ee.className="card-rail",M.tournaments.forEach((ne,z)=>{const te=p==="list"?E(ne):$(ne);te.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",te.style.animationDelay=`${Math.min(z*50,300)}ms`,ee.appendChild(te)}),V.appendChild(ee),M.tournaments.length>1){const ne=document.createElement("div");ne.className="card-rail__dots";for(let z=0;z<M.tournaments.length;z++){const te=document.createElement("span");te.className=`card-rail__dot${z===0?" card-rail__dot--active":""}`,ne.appendChild(te)}V.appendChild(ne)}if(M.tournaments.length>1){const ne=document.createElement("button");ne.className="card-rail__arrow card-rail__arrow--prev",ne.setAttribute("aria-label","Previous card"),ne.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',ne.style.opacity="0";const z=document.createElement("button");z.className="card-rail__arrow card-rail__arrow--next",z.setAttribute("aria-label","Next card"),z.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',V.appendChild(ne),V.appendChild(z);const te=V.querySelector(".card-rail__dots");ee.addEventListener("scroll",()=>{const Z=ee.scrollLeft,re=ee.firstElementChild?.offsetWidth||1,y=Math.round(Z/(re+12));te&&te.querySelectorAll(".card-rail__dot").forEach((_,x)=>{_.classList.toggle("card-rail__dot--active",x===y)}),ne.style.opacity=Z<=10?"0":"";const P=ee.scrollWidth-ee.clientWidth;z.style.opacity=Z>=P-10?"0":""},{passive:!0}),ne.addEventListener("click",()=>{const Z=ee.firstElementChild?.offsetWidth||300;ee.scrollBy({left:-(Z+12),behavior:"smooth"})}),z.addEventListener("click",()=>{const Z=ee.firstElementChild?.offsetWidth||300;ee.scrollBy({left:Z+12,behavior:"smooth"})})}}});const D=g.dataset.filterContext;if(D!=="lobby"&&D!=="private"&&g.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let M="No tournaments available",V="Check back later for new tournaments";D==="my"?(M="You haven't joined any tournaments yet",V="Head to the lobby to find tournaments"):D==="completed"&&(M="No completed tournaments yet",V="Tournaments will appear here once they finish");const I=document.createElement("div");I.className="tournaments-empty",I.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",I.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${M}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${V}</p>
        `,g.appendChild(I)}}else u.forEach((D,M)=>{const V=p==="list"?E(D):$(D);V.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",V.style.animationDelay=`${Math.min(M*50,300)}ms`,g.appendChild(V)})},o=u=>{document.querySelectorAll("bma-tournament-card").forEach(p=>{p.setAttribute("data-sync-theme",u)})},r=u=>{const d=document.querySelectorAll("bma-tournament-card"),p=Date.now().toString();d.forEach(f=>{if(f===u){if(f.setAttribute("data-bma-tourn-focus",p),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="")}}else if(f.setAttribute("data-bma-tourn-focus",""),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="none")}}),typeof neodigmMarquee<"u"&&neodigmMarquee.init()},i=u=>{const{action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...h}=u.detail;console.log("[home_route] Tournament action:",{action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...h}),r(u.target),de.publish("WC.TOURN_ACTION",JSON.stringify({action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...h,timestamp:Date.now()}))};let l=null;const c=()=>{const u=document.getElementById("home-datetime--id");if(!u)return;const d=new Date,p=d.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),f=d.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});u.textContent=`${p} · ${f}`};return it(async()=>{if(!a.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}c(),l=setInterval(c,24e3);const u=document.getElementById("app");if(u){const g=a.appCLIFeatures.features.theme?.state,h=a.appCLIFeatures.features.lang?.state,k=a.appCLIFeatures.features.motif?.state,m=a.appSession.session_user.guid;g&&(u.setAttribute("data-sync-theme",g),document.body.setAttribute("data-sync-theme",g)),h&&u.setAttribute("data-sync-lang",h),k&&u.setAttribute("data-sync-motif",k),m&&u.setAttribute("data-user-guid",m)}window._homeRouteRenderCards=n;const d=de.subscribe("APP.ROUTE_SYNC",(g,h)=>{try{const k=JSON.parse(h);k.theme&&o(k.theme.state)}catch(k){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",k)}});if(window._homeRoutePubSubToken=d,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),de.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i),window._pendingTournGuid){const g=window._pendingTournGuid;delete window._pendingTournGuid,setTimeout(()=>{de.publish("WC.TOURN_ACTION",JSON.stringify({action:"PLAY",tournamentGuid:g,timestamp:Date.now()}))},800)}const p=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,f=new _t(".featured-swiper",{modules:[Eg,Sg],slidesPerView:1,spaceBetween:16,loop:p>1,initialSlide:0,centeredSlides:p>1,autoplay:p>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:p>1?1.7:1,spaceBetween:10,centeredSlides:p>1},640:{slidesPerView:Math.min(2,p),spaceBetween:16,centeredSlides:!1},1024:{slidesPerView:Math.min(3,p),spaceBetween:20,centeredSlides:!1},1280:{slidesPerView:Math.min(3,p),spaceBetween:24,centeredSlides:!1}}});window.featuredSwiper=f,de.publish(a.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Xt(()=>{l&&clearInterval(l),document.removeEventListener("bma-tournament-action",i),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&de.unsubscribe(window._homeRoutePubSubToken)}),(u,d)=>(pe(),fe("main",Ag,[b("div",Cg,[b("bma-app-head-top",{"data-user-name":ot(a).appSession.session_user.name||"Guest"},null,8,Pg),d[0]||(d[0]=b("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),d[19]||(d[19]=dt('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div><div class="home-datetime" id="home-datetime--id" aria-hidden="true">—</div><bma-scores-banner id="bma-scores-banner--id"></bma-scores-banner></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports>',2)),b("nav",Og,[b("button",Lg,[(pe(),fe("svg",Mg,[...d[1]||(d[1]=[b("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[2]||(d[2]=Be(" Active ",-1))]),b("button",Dg,[(pe(),fe("svg",Rg,[...d[3]||(d[3]=[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),d[4]||(d[4]=Be(" Completed ",-1))]),b("button",$g,[(pe(),fe("svg",Ig,[...d[5]||(d[5]=[b("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[6]||(d[6]=Be(" Active ",-1)),d[7]||(d[7]=b("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{visibility:"hidden"}},"0",-1))]),b("button",Ng,[(pe(),fe("svg",Bg,[...d[8]||(d[8]=[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),d[9]||(d[9]=Be(" Completed ",-1))]),b("button",Fg,[(pe(),fe("svg",zg,[...d[10]||(d[10]=[b("path",{d:"M7 4V2h10v2h5v3c0 2.76-2.24 5-5 5h-.58c-.59 1.85-2.17 3.31-4.42 3.79V19h4v2H8v-2h4v-3.21C9.75 15.31 8.17 13.85 7.58 12H7c-2.76 0-5-2.24-5-5V4h5zm0 2H4v1c0 1.3.84 2.4 2 2.82V6zm10 3.82C18.16 9.4 19 8.3 19 7V6h-3v3.82z"},null,-1)])])),d[11]||(d[11]=Be(" Bet Max Pools ",-1)),d[12]||(d[12]=b("span",{class:"home-tab__badge",id:"home-tab-private-badge"},"0",-1))]),b("button",Hg,[(pe(),fe("svg",Ug,[...d[13]||(d[13]=[b("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"},null,-1)])])),d[14]||(d[14]=Be(" Invites ",-1)),d[15]||(d[15]=b("span",{class:"home-tab__badge home-tab__badge--soft",id:"home-tab-invites-badge"},"0",-1))])]),b("section",{class:"create-cta-banner",onClick:s},[d[18]||(d[18]=b("div",{class:"create-cta-banner__glow","aria-hidden":"true"},null,-1)),b("div",Gg,[d[17]||(d[17]=dt('<div class="create-cta-banner__text"><span class="create-cta-banner__eyebrow" aria-label="Tournament perks"><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--1">Select Your Sports</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--2">Choose Your Game Mode</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--3">Invite Your Friends</span><span class="create-cta-banner__eyebrow-progress" aria-hidden="true"></span></span><span class="create-cta-banner__title">Start Your Own Bet Max Pool!</span><span class="create-cta-banner__sub">Your contest, your rules, your friends. Start a Bet Max Pool for Free.</span></div><div class="create-cta-banner__trophies" aria-hidden="true"><span class="create-cta-banner__trophy create-cta-banner__trophy--silver"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--gold"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--bronze"></span></div>',2)),b("button",{class:"create-cta-banner__btn",type:"button",onClick:Ea(s,["stop"])},[...d[16]||(d[16]=[b("span",null,"Create",-1),b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"9 18 15 12 9 6"})],-1)])])])]),d[20]||(d[20]=dt('<section class="tournaments-section"><div class="tournaments-grid"></div></section><section class="invites-section"><div class="invites-list" id="invites-list"></div><div class="invites-empty" id="invites-empty" hidden><svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><p class="invites-empty__head">No pending invites</p><p class="invites-empty__sub">When a friend invites you to a Bet Max Pool, it&#39;ll show up here.</p></div></section><bma-app-foot-branded></bma-app-foot-branded>',3))]))}},Vg={};function qg(e,t){return pe(),fe("main",null,[...t[0]||(t[0]=[b("h1",null,"App FAQ",-1)])])}const Ps=fa(Vg,[["render",qg]]),Yg={};function Kg(e,t){return pe(),fe("main",null,[...t[0]||(t[0]=[b("h1",null,"App Help",-1)])])}const Wg=fa(Yg,[["render",Kg]]);let ms={baseUrl:"/m5t/v5",getToken:()=>null,debug:!1};function Jg(e={}){ms={...ms,...e}}function Xg(){const e=ms.baseUrl;if(typeof e=="function")try{return e()||"/m5t/v5"}catch{return"/m5t/v5"}return e}async function pc(e,t={},a="CLIENT"){const s={caption:e,content:t,status:a};if(ms.debug)try{console.log("[clientMeter]",e,a,t)}catch{}const n=`${Xg()}/appMeter/client-event`,o=ms.getToken?.(),r={"Content-Type":"application/json"};o&&(r.Authorization=`Bearer ${o}`);try{if(typeof fetch=="function"){const i=await fetch(n,{method:"POST",headers:r,body:JSON.stringify(s),keepalive:!0});if(i.ok||i.status===202)return}}catch{}try{if(typeof navigator<"u"&&typeof navigator.sendBeacon=="function"){const i=new Blob([JSON.stringify(s)],{type:"application/json"});if(navigator.sendBeacon(n,i))return}}catch{}try{console.warn("[clientMeter] fell through to console:",e,t)}catch{}}async function Qg(e,t,a){}const Zg=Object.freeze(Object.defineProperty({__proto__:null,clientMeter:pc,configureClientMeter:Jg,noopClientMeter:Qg},Symbol.toStringTag,{value:"Module"})),Ut=class Ut{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,a,s,n=!0){this.strChat=s,this.isDebug=n;const o=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",a).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const r=t.includes("?")?"&":"?";t=`${t}${r}sessionId=${o}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(i){Ut.onSSEOpen(i)},this.sseEvent.onmessage=function(i){Ut.onSSEMessage(i)},this.sseEvent.onerror=function(i){Ut.onSSEError(i)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let a=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(a=JSON.parse(t.data),a?.class!="NO_MESSAGE")if(a?.class&&a?.msg)switch(a.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":a?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(a.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",a.id+" | "+a.class+" | "+a.msg+" | "+a.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",a),de.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(a));break;case"INVITE_SYNC":this.isDebug&&console.warn(" ~... sse INVITE_SYNC | ",a),de.publish("SSE.CORE.INVITE_SYNC",JSON.stringify(a));try{let s=a?.msg;typeof s=="string"&&(s=JSON.parse(s));const n=Array.isArray(s)?s[0]:null;pc("invite_sync_received",{invite_guid:n?.invite?.guid||null,tournament_guid:n?.invite?.tournament_guid||null,action:n?.action||null,sse_id:a?.id||null})}catch{}break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Ut.sseEvent=null,Ut.strChat=null,Ut.isDebug=!0,Ut.sessionId=null;let nn=Ut;class Wt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(a){return Math.floor(Math.random()*a)},fPromiseJS:async function(a,s){return new Promise((n,o)=>{const r=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});r.onload=n,r.onerror=o,a.getElementsByTagName("head")[0].appendChild(r)})},fAsyncJS:function(a,s,n){const o=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});n&&(o.onload=function(){n()}),a.getElementsByTagName("head")[0].appendChild(o)},fAsyncCSS:function(a,s){let n=a.createElement("link");n.rel="stylesheet",n.href=s,a.getElementsByTagName("head")[0].appendChild(n)},data2prop:function(a){a=a.replace("data-","").toLowerCase();let s=a.split(""),n=[],o=!1;return s.forEach(r=>{r=="-"?o=!0:(n.push(o?r.toUpperCase():r),o=!1)}),n.join("")},doDataLayer:function(a,s){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+a+" | "+s),window.dataLayer&&window.dataLayer.push({event:a,msg:s})},isJSON:function(a){let s=!1;try{s=typeof JSON.parse(a)}catch{}return s=="object"},appStateListen:function(a){NeodigmKeylime.subscribe("mouseover",n=>{n?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(n.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let o=neodigmUtils.walkDOM3(n?.target,"n55TypeonClick");o&&neodigmUtils.typeOn(JSON.parse(o))},!0),NeodigmKeylime.subscribe("touchstart",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let s=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;s&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=s)},prettyTimeRETIRE:a=>{let s=new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return a=="Dec 31, 1969"&&(s=""),s},prettyTime:a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:a=>a&&a[0].toUpperCase()+a.slice(1)||"",genHash:a=>(a=String(a),Math.abs(a.split("").reduce((s,n)=>(s<<5)-s+n.charCodeAt(0)|0,0))),flashTitle:(a=neodigmOpt.N55_THEME_DEFAULT,s=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[a]&&(document.title=neodigmOpt.N55_THEME_COLORS[a][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},s))},robinTheme:function(a=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const n=56;s.forEach((r,i)=>{r.dataset.n55Theme!="disabled"&&(r.n55Theme||(r.n55Theme=r.dataset.n55Theme),setTimeout(function(){r.dataset.n55Theme=a},i*n),setTimeout(function(){r.dataset.n55Theme=r.n55Theme},i*(n+n)))}),s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const o=256;s.forEach((r,i)=>{r.n55ThemePulse||(r.n55ThemePulse=r.dataset.n55ThemePulse),setTimeout(function(){r.dataset.n55ThemePulse=a},i*o),setTimeout(function(){r.dataset.n55ThemePulse=r.n55ThemePulse},i*o+3e3)}),neodigmUtils.flashTitle(a,2e3)}},countTo:async function(a,s,n=neodigmOpt.neodigmMetronome.countTo){const o=[16,n];return[...document.querySelectorAll(a)].forEach(function(r,i){let l=Math.abs(Number(r.textContent)-s);neodigmMetronome.unsubscribe(o[1]+i).subscribe(function(c){let u=Number(r.textContent);if(!Number.isNaN(u)&&!isNaN(u)&&s!=u){let d=l/o[0];d=Math.round(d),c!=0?r.textContent=u<s?u+d:u-d:r.textContent=s}},o[1]+i,o[0])}),neodigmUtils},typeOff:async function(a){let s=document.querySelector(a?.q1st);if(s){let n=s.textContent.length,o=window.getComputedStyle(s),r=Number(o.paddingTop.replace("px",""))+Number(o.paddingBottom.replace("px",""));for(s.offsetHeight&&(s.style.height=s.offsetHeight-r+"px");n;)setTimeout(()=>{s.textContent=s.textContent.replace(/.$/,"")},a.uniqueDelay*n--)}},typeOn:async function(a){let s=document.querySelector(a?.q1st);if(s){s.dataset.n55Typeon=0;let n=a.msg.replaceAll("|","   |   ")+"   ",o=n.split("|");if(a?.mode=="OFF")return neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay}),neodigmUtils;if(a?.mode=="RANDOM"&&o.length){let r=s.dataset.n55Typeon=neodigmUtils.f02x(o.length);n=o[r]}neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),neodigmMetronome.unsubscribe(a.uniqueDelay).subscribe(r=>{let i=n[n.length-(r+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),s.dataset.n55Typeon++),s.textContent+=i,a?.mode=="LOOP"&&r==0&&neodigmUtils.typeOn(a)},a.uniqueDelay,n.length)}return neodigmUtils},getValJSON:function(a,s){try{return JSON.parse(a)}catch{return JSON.parse('{ "'+s+'": "'+a+'" }')}},walkDOM3:function(a,s,n=!1){let o=null;if(!o&&a?.dataset[s]&&(o=a),!o&&a?.parentNode?.dataset[s]&&(o=a.parentNode),!o&&a.tagName!="BODY"&&a?.parentNode?.parentNode?.dataset[s]&&(o=a.parentNode.parentNode),o)return n?o:o.dataset[s]},doSetT:function(a,s){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(a,s):setTimeout(a,s)},shake:function(a,s=!0){return[...document.querySelectorAll(a)].forEach(function(n,o){n.classList.add("shake__an"),setTimeout(function(){n.classList.remove("shake__an")},460)}),Wt.neodigmUtils},hardReload:function(a="n55reset"){const s=new URLSearchParams(window.location.search);s.set(a,new Date().getTime());const n=s.toString();window.location.search=n}}))}const em={class:"auth-page"},tm={class:"auth-page-right"},am={class:"auth-card"},sm={class:"form-group"},nm={class:"form-group"},om={class:"password-input-wrapper"},rm=["type"],im={style:{"text-align":"right"}},lm={class:"auth-link-center"},cm={__name:"signin_route",setup(e){const t=lt(),a=ke(),s=(p="signin")=>{t.push({name:p})};let n=null;const o=Pe(!1),r=()=>{o.value=!o.value},i=(p=3,f=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const g=Math.floor(Math.random()*p)+f,h=document.querySelector(".img__bg")?.classList;h&&(h.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),h.add(`img__bg--${g}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(k,m)=>{const v=JSON.parse(m);switch(Object.keys(v)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(h=>h.code==f)[0]?.copy;g=g.filter(h=>h[0]==p.dataset.syncMicrocopyText)[0],g&&(p.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(h=>h.code==f)[0]?.copy;g=g.filter(h=>h[0]==p.dataset.syncMicrocopyPlaceholder)[0],g&&(p.placeholder=g[1])})},c=p=>{Wt.neodigmUtils().shake(p||"#inp__text--email")},u=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),a.doCLI(p)},d=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let g=null,h=null;if(!p?.value)g="Please enter your email",h="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)g="Please enter a valid email address",h="#inp__text--email";else if(!f?.value)g="Please enter your password",h="#inp__text--password";else if(f.value.length<10)g="Password must be at least 10 characters",h="#inp__text--password";else{const k={email:p.value,hash:Wt.neodigmUtils().genHash(f.value)};xe.doSignin(k,m=>{const E=(m?.entity?.tags||[]).find(D=>D.userName)?.userName||"";if(a.appSession.session_user.authenticated=!0,a.appSession.session_user.email=k.email,a.appSession.session_user.fname=m?.entity?.first,a.appSession.session_user.lname=m?.entity?.last,a.appSession.session_user.userName=E,a.appSession.session_user.name=E,a.appSession.session_user.guid=m?.entity?.guid,a.saveSessionUser(),a.appCLIFeatures.features.sse.state){const D=m?.entity?.guid||a.appSession.session_user.guid;nn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",D,a,!0)}xe.fetchMyInvites().then(D=>{D.ok&&Array.isArray(D.data?.invites)&&(a.setCoreInvites(D.data.invites),de.publish(a.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"signin",count:D.data.invites.length,timestamp:Date.now()})))}).catch(D=>console.warn("[signin] fetchMyInvites failed:",D));const $=Vf();if($?.tournamentGuid){const D={name:"preview_route",params:{guid:$.tournamentGuid}};$.joinSlug&&(D.query={s:$.joinSlug}),t.push(D)}})}g&&(c(h),neodigmToast.q(g,"danger"))};return it(()=>{i(),l()}),(p,f)=>(pe(),fe("div",em,[f[10]||(f[10]=dt('<div class="auth-page-left" data-v-f41beb02><div class="auth-bg" data-v-f41beb02><div class="auth-bg-image" data-v-f41beb02></div><div class="auth-bg-image" data-v-f41beb02></div><div class="auth-bg-image" data-v-f41beb02></div></div><div class="auth-overlay" data-v-f41beb02></div><div class="auth-branding-content" data-v-f41beb02><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-f41beb02><p class="auth-branding-tagline" data-v-f41beb02>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f41beb02>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f41beb02> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",tm,[b("div",am,[f[9]||(f[9]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),b("form",{class:"auth-form",onSubmit:Ea(d,["prevent"])},[b("div",sm,[f[4]||(f[4]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=g=>u())},null,32)]),b("div",nm,[f[5]||(f[5]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",om,[b("input",{id:"inp__text--password",type:o.value?"text":"password",autocomplete:"current-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,rm),b("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=g=>r()),tabindex:"-1"},[b("span",{class:qe(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",im,[b("a",{class:"auth-link",onClick:f[2]||(f[2]=g=>s("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),b("p",lm,[f[6]||(f[6]=b("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Be()),b("a",{class:"auth-link",onClick:f[3]||(f[3]=g=>s("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},dm=fa(cm,[["__scopeId","data-v-f41beb02"]]),um={class:"auth-page"},pm={__name:"signout_route",setup(e){const t=lt();ke();const a=()=>{mvvLegit.doSignout()},s=()=>{t.push({name:"home_route"})};return(n,o)=>(pe(),fe("div",um,[o[1]||(o[1]=dt('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",{class:"auth-page-right"},[b("div",{class:"auth-card"},[o[0]||(o[0]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title"},"Sign Out"),b("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),b("div",{class:"auth-actions"},[b("button",{onClick:a,class:"btn btn-red"}," Sign Out "),b("button",{onClick:s,class:"btn btn-outline"}," Cancel ")])])])]))}},fm=fa(pm,[["__scopeId","data-v-15bfefd6"]]),hm={class:"auth-page"},gm={class:"auth-page-right"},mm={class:"auth-card auth-card-wide"},bm={class:"form-row"},_m={class:"form-group"},vm={class:"form-group"},ym={class:"form-group"},wm={class:"form-group"},xm={class:"form-group"},Tm={class:"password-input-wrapper"},km=["type"],Sm={class:"form-group"},Em={class:"password-input-wrapper"},Am=["type"],Cm={class:"form-group form-group-checkbox"},Pm={class:"checkbox-label"},Om={class:"auth-link-center"},Lm={__name:"signup_route",setup(e){const t=lt(),a=ke(),s=(w="signin")=>{t.push({name:w})};let n=null,o=null;const r=Pe(!1),i=Pe(!1),l=Pe(!1),c=()=>{r.value=!r.value},u=()=>{i.value=!i.value},d=w=>{w.preventDefault(),de.publish(a.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(w=3,E=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":w=3,E=1;break;case"white_label":w=3,E=4;break}const $=Math.floor(Math.random()*w)+E,D=document.querySelector(".img__bg")?.classList;D&&(D.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),D.add(`img__bg--${$}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(M,V)=>{const I=JSON.parse(V);switch(Object.keys(I)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(w=>{const E=a.appCLIFeatures?.features?.lang?.state;let $=a.appMeta.microcopy.language.filter(D=>D.code==E)[0]?.copy;$=$.filter(D=>D[0]==w.dataset.syncMicrocopyText)[0],$&&(w.textContent=$[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(w=>{const E=a.appCLIFeatures?.features?.lang?.state;let $=a.appMeta.microcopy.language.filter(D=>D.code==E)[0]?.copy;$=$.filter(D=>D[0]==w.dataset.syncMicrocopyPlaceholder)[0],$&&(w.placeholder=$[1])})},g=w=>{Wt.neodigmUtils().shake(w||"#inp__text--email")},h=()=>{let w=document.querySelectorAll("#inp__text--email")[0].value;a.doCLI(w)},k=w=>{const E=[];return w.length<10&&E.push("at least 10 characters"),/[a-z]/.test(w)||E.push("1 lowercase"),/[A-Z]/.test(w)||E.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(w)||E.push("1 special character"),/[^\x00-\x7F]/.test(w)&&E.push("ASCII characters only"),E},m=async()=>{const w=document.querySelector("#inp__text--username"),E=w?.value?.trim();if(E)try{(await xe.checkUserName(E)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),w.value="",w.focus())}catch($){console.error("Error checking username:",$)}},v=()=>{const w=document.querySelector("#inp__text--first-name"),E=document.querySelector("#inp__text--last-name"),$=document.querySelector("#inp__text--email"),D=document.querySelector("#inp__text--username"),M=document.querySelector("#inp__text--password"),V=document.querySelector("#inp__text--verify-password");let I=null,U=null;if(!w?.value)I="Please enter your first name",U="#inp__text--first-name";else if(!E?.value)I="Please enter your last name",U="#inp__text--last-name";else if(!$?.value)I="Please enter your email",U="#inp__text--email";else if($.value.indexOf("@")===-1||$.value.indexOf(".")===-1)I="Please enter a valid email address",U="#inp__text--email";else if(!D?.value)I="Please enter a user name",U="#inp__text--username";else if(!M?.value)I="Please enter a password",U="#inp__text--password";else{const j=k(M.value);if(j.length>0)I="Password must have:|"+j.join(", "),U="#inp__text--password";else if(!V?.value)I="Please verify your password",U="#inp__text--verify-password";else if(M.value!==V.value)I="Passwords do not match",U="#inp__text--verify-password";else{const F=w.value.trim(),G=E.value.trim(),C=[{userName:D.value.trim(),ts:Date.now()}],A={email:$.value,hash:Wt.neodigmUtils().genHash(M.value),first:F,last:G,company:"",phone:"",tags:C};xe.doSignup(A,S=>{S.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}I&&(g(U),neodigmToast.q(I,"danger"))};return it(()=>{p(),f(),o||(o=de.subscribe(a.hierTopics.ROUTE__SIGNUP__TERMS,(w,E)=>{JSON.parse(E).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(w,E)=>(pe(),fe("div",hm,[E[23]||(E[23]=dt('<div class="auth-page-left" data-v-e1a086be><div class="auth-bg" data-v-e1a086be><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div></div><div class="auth-overlay" data-v-e1a086be></div><div class="auth-branding-content" data-v-e1a086be><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-e1a086be><p class="auth-branding-tagline" data-v-e1a086be>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-e1a086be>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-e1a086be> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",gm,[b("div",mm,[b("form",{class:"auth-form",onSubmit:Ea(v,["prevent"])},[b("div",bm,[b("div",_m,[E[12]||(E[12]=b("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),b("input",{id:"inp__text--first-name",type:"text",autocomplete:"given-name","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"First name",onKeyup:E[0]||(E[0]=jt($=>v(),["enter"]))},null,32)]),b("div",vm,[E[13]||(E[13]=b("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),b("input",{id:"inp__text--last-name",type:"text",autocomplete:"family-name","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Last name",onKeyup:E[1]||(E[1]=jt($=>v(),["enter"]))},null,32)])]),b("div",ym,[E[14]||(E[14]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:E[2]||(E[2]=$=>h()),onKeyup:E[3]||(E[3]=jt($=>v(),["enter"]))},null,32)]),b("div",wm,[E[15]||(E[15]=b("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),b("input",{id:"inp__text--username",type:"text",autocomplete:"username","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:E[4]||(E[4]=$=>m()),onKeyup:E[5]||(E[5]=jt($=>v(),["enter"]))},null,32)]),b("div",xm,[E[16]||(E[16]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",Tm,[b("input",{id:"inp__text--password",type:r.value?"text":"password",autocomplete:"new-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:E[6]||(E[6]=jt($=>v(),["enter"]))},null,40,km),b("button",{type:"button",class:"password-toggle-btn",onClick:E[7]||(E[7]=$=>c()),tabindex:"-1"},[b("span",{class:qe(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),E[17]||(E[17]=b("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),b("div",Sm,[E[18]||(E[18]=b("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),b("div",Em,[b("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:E[8]||(E[8]=jt($=>v(),["enter"]))},null,40,Am),b("button",{type:"button",class:"password-toggle-btn",onClick:E[9]||(E[9]=$=>u()),tabindex:"-1"},[b("span",{class:qe(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",Cm,[b("label",Pm,[Lt(b("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":E[10]||(E[10]=$=>l.value=$),class:"terms-checkbox"},null,512),[[Ml,l.value]]),E[19]||(E[19]=b("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),b("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:d},"Terms")])]),E[22]||(E[22]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),b("p",Om,[E[20]||(E[20]=b("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),E[21]||(E[21]=Be()),b("a",{class:"auth-link",onClick:E[11]||(E[11]=$=>s("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},Mm=fa(Lm,[["__scopeId","data-v-e1a086be"]]),Dm={class:"auth-page"},Rm={class:"auth-page-right"},$m={class:"auth-card"},Im={class:"form-group"},Nm={class:"auth-link-center"},Bm={__name:"forgot_route",setup(e){const t=lt(),a=ke(),s=(c="signin_route")=>{t.push({name:c})};let n=null;const o=(c=3,u=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":c=3,u=1;break;case"white_label":c=3,u=4;break}const d=Math.floor(Math.random()*c)+u,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${d}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(f,g)=>{const h=JSON.parse(g);switch(Object.keys(h)[0]){case"Motif":o();break;case"Lang":r();break}}))},r=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const u=a.appCLIFeatures?.features?.lang?.state;let d=a.appMeta.microcopy.language.filter(p=>p.code==u)[0]?.copy;d=d.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],d&&(c.textContent=d[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const u=a.appCLIFeatures?.features?.lang?.state;let d=a.appMeta.microcopy.language.filter(p=>p.code==u)[0]?.copy;d=d.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],d&&(c.placeholder=d[1])})},i=c=>{Wt.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let u=null,d=null;if(!c?.value)u="Please enter your email address",d="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)u="Please enter a valid email address",d="#inp__text--email";else{const p={method:"GET",headers:xe.genHeaders()};fetch(xe.API_baseURI+"/m5t/"+xe.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{s("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}u&&(i(d),neodigmToast.q(u,"danger"))};return it(()=>{o(),r()}),(c,u)=>(pe(),fe("div",Dm,[u[7]||(u[7]=dt('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",Rm,[b("div",$m,[u[6]||(u[6]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),b("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),b("form",{class:"auth-form",onSubmit:Ea(l,["prevent"])},[b("div",Im,[u[2]||(u[2]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:u[0]||(u[0]=jt(d=>l(),["enter"]))},null,32)]),u[5]||(u[5]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),b("p",Nm,[u[3]||(u[3]=b("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),u[4]||(u[4]=Be()),b("a",{class:"auth-link",onClick:u[1]||(u[1]=d=>s("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Fm={class:"auth-page"},zm={class:"auth-page-right"},Hm={class:"auth-card"},Um={class:"form-group"},Gm={class:"password-input-wrapper"},jm=["type"],Vm={class:"form-group"},qm={class:"password-input-wrapper"},Ym=["type"],Km={__name:"resethash_route",setup(e){const t=lt(),a=ke(),s=()=>{t.push({name:"home_route"})};let n=null;const o=Pe(!1),r=Pe(!1),i=()=>{o.value=!o.value},l=()=>{r.value=!r.value},c=(g=3,h=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":g=3,h=1;break;case"white_label":g=3,h=4;break}const k=Math.floor(Math.random()*g)+h,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${k}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(v,w)=>{const E=JSON.parse(w);switch(Object.keys(E)[0]){case"Motif":c();break;case"Lang":u();break}}))},u=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const h=a.appCLIFeatures?.features?.lang?.state;let k=a.appMeta.microcopy.language.filter(m=>m.code==h)[0]?.copy;k=k.filter(m=>m[0]==g.dataset.syncMicrocopyText)[0],k&&(g.textContent=k[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const h=a.appCLIFeatures?.features?.lang?.state;let k=a.appMeta.microcopy.language.filter(m=>m.code==h)[0]?.copy;k=k.filter(m=>m[0]==g.dataset.syncMicrocopyPlaceholder)[0],k&&(g.placeholder=k[1])})},d=g=>{Wt.neodigmUtils().shake(g||"#inp__text--password")},p=g=>{const h=[];return g.length<10&&h.push("at least 10 characters"),/[a-z]/.test(g)||h.push("1 lowercase"),/[A-Z]/.test(g)||h.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||h.push("1 special character"),/[^\x00-\x7F]/.test(g)&&h.push("ASCII characters only"),h},f=()=>{const g=document.querySelector("#inp__text--password"),h=document.querySelector("#inp__text--verify-password");let k=null,m=null;if(!g?.value)k="Please enter a password",m="#inp__text--password";else{const v=p(g.value);if(v.length>0)k="Password must have:|"+v.join(", "),m="#inp__text--password";else if(!h?.value)k="Please verify your password",m="#inp__text--verify-password";else if(g.value!==h.value)k="Passwords do not match",m="#inp__text--verify-password";else{const w=a.appSession.session_user.email||"",E={email:w,hash:Wt.neodigmUtils().genHash(g.value),modified_by:w},$={method:"POST",body:JSON.stringify(E),headers:xe.genHeaders()};fetch(xe.API_baseURI+"/m5t/"+xe.API_ver+"/acctEntity/resetHash",$).then(D=>D.json()).then(D=>{D.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(D=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}k&&(d(m),neodigmToast.q(k,"danger"))};return it(()=>{c(),u()}),(g,h)=>(pe(),fe("div",Fm,[h[9]||(h[9]=dt('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",zm,[b("div",Hm,[h[8]||(h[8]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),b("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),b("form",{class:"auth-form",onSubmit:Ea(f,["prevent"])},[b("div",Um,[h[4]||(h[4]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",Gm,[b("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:h[0]||(h[0]=jt(k=>f(),["enter"]))},null,40,jm),b("button",{type:"button",class:"password-toggle-btn",onClick:h[1]||(h[1]=k=>i()),tabindex:"-1"},[b("span",{class:qe(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),h[5]||(h[5]=b("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),b("div",Vm,[h[6]||(h[6]=b("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),b("div",qm,[b("input",{id:"inp__text--verify-password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:h[2]||(h[2]=jt(k=>f(),["enter"]))},null,40,Ym),b("button",{type:"button",class:"password-toggle-btn",onClick:h[3]||(h[3]=k=>l()),tabindex:"-1"},[b("span",{class:qe(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",{class:"auth-actions"},[h[7]||(h[7]=b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),b("button",{type:"button",onClick:s,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},Wm=fa(Km,[["__scopeId","data-v-3ae2c87b"]]),Jm={class:"auth-page"},Xm={class:"auth-page-right"},Qm={class:"auth-card"},Zm={class:"verification-content"},eb={class:"timer-display"},tb={__name:"verf_link_route",setup(e){const t=lt();ys(),ke();const a=Pe(7200);let s=null;const n=r=>{const i=Math.floor(r/3600),l=Math.floor(r%3600/60),c=r%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},o=()=>{s=setInterval(()=>{a.value--,a.value<=0&&(clearInterval(s),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return it(()=>{o()}),Xt(()=>{s&&clearInterval(s)}),(r,i)=>(pe(),fe("div",Jm,[i[4]||(i[4]=dt('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",Xm,[b("div",Qm,[i[3]||(i[3]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title"},"Check Your Email"),b("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),b("div",Zm,[i[0]||(i[0]=b("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=b("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=b("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),b("div",eb,be(n(a.value)),1)])])])]))}},ab=fa(tb,[["__scopeId","data-v-d92b2a33"]]);class sb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-email","data-active-count","data-played-count","data-trophy-count"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",a=this.getAttribute("data-email")||"",s=this.getAttribute("data-active-count")||"0",n=this.getAttribute("data-played-count")||"0",o=this.getAttribute("data-trophy-count")||"0",r=t.charAt(0).toUpperCase(),i=new Date,l=i.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),c=i.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"}),u=`${l} · ${c}`;this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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
        `}}customElements.define("bma-profile-hero",sb);class nb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-played","data-first-place","data-trophies","data-favorite-sport","data-favorite-sport-group","data-win-rate","data-win-loss-record"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-played")||"0",a=this.getAttribute("data-first-place")||"0",s=this.getAttribute("data-trophies")||"0",n=this.getAttribute("data-favorite-sport")||"—",o=this.getAttribute("data-favorite-sport-group")||"",r=this.getAttribute("data-win-rate")||"—",i=this.getAttribute("data-win-loss-record")||"",l=o?`<bma-sport-icon data-sport-group="${o.toLowerCase()}" style="width:20px;height:20px;"></bma-sport-icon>`:"";this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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
                    <span class="row__value row__value--sport">${l}<span>${n}</span></span>
                </div>
                <div class="row">
                    <span class="row__label">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>
                        Bet Win Rate
                    </span>
                    <span class="row__value">${r}${i?`<span class="row__sub">${i}</span>`:""}</span>
                </div>
            </div>
        `}}customElements.define("bma-profile-stats",nb);class ob extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._openPanels={private:!0,public:!0}}static get observedAttributes(){return["data-contests","data-private-contests"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}get contests(){const t=this.getAttribute("data-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}get privateContests(){const t=this.getAttribute("data-private-contests");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ge.find(s=>s.key===t)?.group||""}render(){const t=this.contests,a=this.privateContests,s=l=>`<span class="chip chip--${l==="LOCKED"?"locked":l==="UPCOMING"?"upcoming":l==="COMPLETED"?"completed":"default"}">${l==="LOCKED"?"In Progress":l==="UPCOMING"?"Open":l==="COMPLETED"?"Completed":l}</span>`,n=l=>l===1?'<div class="card__trophy" style="background-image: var(--trophy-gold-tall);"></div>':l===2?'<div class="card__trophy" style="background-image: var(--trophy-silver-tall);"></div>':l===3?'<div class="card__trophy" style="background-image: var(--trophy-bronze-tall);"></div>':"",o=l=>{const c=l.sports?.[0]||"",u=this._sportGroup(c),d=u?`<bma-sport-icon data-sport-group="${u}" style="width:18px;height:18px;flex-shrink:0;opacity:0.7;"></bma-sport-icon>`:"",p=l.startTime?Ga.formatDateLocal(l.startTime,{month:"short",day:"numeric"}):"",f=l.placement?n(l.placement):"",g=l.isHosting?'<span class="chip chip--host">Host</span>':"";return`
                <div class="card" data-contest-id="${l.id||""}">
                    <div class="card__top">
                        <div class="card__info">
                            ${d}
                            <span class="card__name">${l.name||"Tournament"}</span>
                        </div>
                        <div class="card__right">
                            ${g}
                            ${s(l.status)}
                            <svg class="card__arrow" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                        </div>
                    </div>
                    <div class="card__bottom">
                        <span class="card__meta">${p}${p&&l.sport?" · ":""}${l.sport||""}</span>
                        ${f}
                    </div>
                </div>
            `},r=t.map(o).join(""),i=a.map(o).join("");this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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
                    ${a.length>0?i:`<div class="empty">You haven't hosted or joined a Bet Max Pool yet.</div>`}
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
        `,this.shadowRoot.querySelectorAll(".card[data-contest-id]").forEach(l=>{l.addEventListener("click",()=>{const c=l.dataset.contestId;c&&this.dispatchEvent(new CustomEvent("contest-click",{detail:{contestGuid:c},bubbles:!0,composed:!0}))})}),this.shadowRoot.querySelectorAll("[data-toggle]").forEach(l=>{l.addEventListener("click",()=>{const c=l.dataset.toggle;this._openPanels[c]=!this._openPanels[c];const u=this.shadowRoot.querySelector(`[data-panel="${c}"]`);u&&u.classList.toggle("panel--collapsed",!this._openPanels[c]),l.setAttribute("aria-expanded",String(this._openPanels[c]))})})}}customElements.define("bma-profile-history",ob);class rb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-active-section","data-sections"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}get activeSection(){return this.getAttribute("data-active-section")||"overview"}render(){const t=this.activeSection,r=((this.getAttribute("data-sections")||"profile")==="top-players"?[{id:"overall",label:"Overall",icon:'<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>'},{id:"earnings",label:"TD$ Won",icon:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>'}]:[{id:"overview",label:"Overview",icon:'<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>'},{id:"contests",label:"Tourneys",icon:'<path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>'},{id:"guide",label:"How to Play",icon:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>'},{id:"account",label:"Account",icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',desktopOnly:!0}]).map(i=>`
            <button class="nav-item ${i.id===t?"nav-item--active":""}${i.desktopOnly?" nav-item--desktop-only":""}" data-section="${i.id}" type="button">
                <svg class="nav-item__icon" viewBox="0 0 24 24" fill="currentColor">${i.icon}</svg>
                <span class="nav-item__label">${i.label}</span>
            </button>
        `).join("");this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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
        `,this.shadowRoot.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.section;this.setAttribute("data-active-section",l),this.dispatchEvent(new CustomEvent("section-change",{detail:{section:l},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-nav",rb);const ib=[{id:"welcome",label:"Welcome"},{id:"why-play",label:"Why Play"},{id:"betting-101",label:"Betting 101"},{id:"td-dollars",label:"Tournament $"},{id:"game-modes",label:"Game Modes"},{id:"leaderboard",label:"Climb & Win"},{id:"premium",label:"Go Premium"},{id:"glossary",label:"Glossary"}];class lb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._modesPayload=null,this._modesError=null}static get observedAttributes(){return["data-user-class"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render(),this._fetchModes()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}async _fetchModes(){try{const t=window.BMACOREAPI?.API_baseURI&&window.BMACOREAPI?.API_ver?`${window.BMACOREAPI.API_baseURI}/m5t/${window.BMACOREAPI.API_ver}`:"https://machfive-bmacdev-rest.onrender.com/m5t/v5",a=await fetch(`${t}/meta/game-modes`);if(!a.ok)throw new Error(`HTTP ${a.status}`);const s=await a.json();s&&s.ok&&s.modes&&Array.isArray(s.tokens)&&(this._modesPayload=s,this._modesError=null,this.render())}catch(t){this._modesError=t?.message||"failed",this.render()}}_resolveTier(){const t=this.getAttribute("data-user-class")||"";if(window.GameTypeLifeCycle?.forToken)try{const a=window.GameTypeLifeCycle.forToken("DEFAULT_FORMAT");if(a?.resolveUserTier)return a.resolveUserTier(t)}catch{}return/^admin_/.test(t)||/tier_[23]/.test(t)?"premium":"basic"}_isModeAllowed(t,a){return(Array.isArray(t?.tiers)?t.tiers:[]).includes(a)}render(){const t=this._resolveTier();this.shadowRoot.innerHTML=`
            <style>${Ve()}${this._styles()}</style>
            <div class="guide">
                ${this._renderTOC()}
                ${this._renderWelcome()}
                ${this._renderWhyPlay()}
                ${this._renderBetting101()}
                ${this._renderTDDollars()}
                ${this._renderGameModes()}
                ${this._renderLeaderboard()}
                ${this._renderPremium(t)}
                ${this._renderGlossary()}
            </div>
        `,this._wireInteractions()}_renderTOC(){return`<nav class="toc" aria-label="Sections">${ib.map(a=>`
            <button class="toc__pill" type="button" data-toc-target="${a.id}">${a.label}</button>
        `).join("")}</nav>`}_sectionHeader(t,a){return`
            <div class="section__header">
                <span class="section__rule"></span>
                <h2 class="section__title">${t}</h2>
            </div>
            ${a?`<p class="section__intro">${a}</p>`:""}
        `}_renderWelcome(){return`
            <section class="section section--hero" id="section-welcome">
                <div class="hero">
                    <span class="hero__eyebrow">How to Play</span>
                    <h1 class="hero__title">Bet Max Action</h1>
                    <p class="hero__lede">Free-to-play sports tournaments. Real games, real odds, no money down. Climb leaderboards on skill alone.</p>
                </div>
                <div class="quick-arc">
                    ${this._quickStep(1,"Join","Browse open tournaments and tap Join. Free, no deposit.")}
                    ${this._quickStep(2,"Pick","Place bets with Tournament Dollars (TD$) on real games.")}
                    ${this._quickStep(3,"Climb","Settle wins, grow your TD$, top the leaderboard, earn trophies.")}
                </div>
            </section>
        `}_quickStep(t,a,s){return`
            <div class="quick-step">
                <span class="quick-step__num">${t}</span>
                <div class="quick-step__body">
                    <span class="quick-step__title">${a}</span>
                    <span class="quick-step__desc">${s}</span>
                </div>
            </div>
        `}_renderWhyPlay(){const t=[{icon:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",title:"Free to play",body:"No deposits, no withdrawals. Compete on skill. Your TD$ is for tournament play only."},{icon:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z",title:"Real games, real odds",body:"Bet on live NFL, NBA, MLB, NHL, soccer slates with up-to-date sportsbook odds."},{icon:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85 17.96 7.5 12 4.15zM5 15.91l6 3.38v-6.71L5 9.21v6.7zm14 0v-6.7l-6 3.37v6.71l6-3.38z",title:"Skill, not chance",body:"Strategy, research, and discipline determine your finish. Track your record across the platform."},{icon:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",title:"Compete with friends",body:"Create a private Bet Max Pool, share the link, and run your own contest with friends."}];return`
            <section class="section" id="section-why-play">
                ${this._sectionHeader("Why play","Sports betting culture, no skin in the game. Tournament-only currency means you can play hard without playing real money.")}
                <div class="tiles">
                    ${t.map(a=>`
                        <div class="tile">
                            <svg class="tile__icon" viewBox="0 0 24 24" fill="currentColor"><path d="${a.icon}"/></svg>
                            <div class="tile__body">
                                <span class="tile__title">${a.title}</span>
                                <span class="tile__desc">${a.body}</span>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </section>
        `}_renderBetting101(){const t=[{name:"Moneyline",short:"Pick the winner",long:"Just pick which team wins. Odds tell you the payout. Favorites have negative odds (less risk, less reward); underdogs have positive odds (more risk, more reward).",example:"Bet TD$ 100 on the Underdog at +150. If they win, you collect TD$ 250 (your stake plus 150 profit)."},{name:"Spread",short:"Beat the handicap",long:"A point handicap evens out a mismatch. The favorite has to win by more than the spread; the underdog can lose, but only by less than the spread (or win outright).",example:"Take Team A at -7. They win 24 to 14? You win (covered by 10). They win 24 to 20? You lose (only covered by 4)."},{name:"Total (O/U)",short:"Over or under the line",long:"A single combined-score line for both teams. You bet whether the total points scored will be Over or Under. The actual winner doesn't matter.",example:"Total set at 47.5. Final score 28 to 24 = 52, so Over wins. Final 21 to 20 = 41, so Under wins."}];return`
            <section class="section" id="section-betting-101">
                ${this._sectionHeader("Betting 101","Three bet types cover almost everything you'll see on a slate. Tap any card to read the long version.")}
                <div class="bet-types">
                    ${t.map((a,s)=>`
                        <div class="bet-type" data-bet-flip data-flipped="false">
                            <div class="bet-type__face bet-type__face--front">
                                <span class="bet-type__index">0${s+1}</span>
                                <span class="bet-type__name">${a.name}</span>
                                <span class="bet-type__short">${a.short}</span>
                                <span class="bet-type__hint">Tap to flip</span>
                            </div>
                            <div class="bet-type__face bet-type__face--back">
                                <span class="bet-type__name">${a.name}</span>
                                <p class="bet-type__long">${a.long}</p>
                                <p class="bet-type__example"><strong>Example:</strong> ${a.example}</p>
                                <span class="bet-type__hint">Tap to flip back</span>
                            </div>
                        </div>
                    `).join("")}
                </div>
            </section>
        `}_renderTDDollars(){return`
            <section class="section" id="section-td-dollars">
                ${this._sectionHeader("Tournament Dollars","TD$ is the currency of every BMA tournament. A fresh stack at the start of each pool, yours to wager across the slate.")}
                <div class="rows">
                    <div class="row row--win">
                        <span class="row__key">Win</span>
                        <span class="row__val">Pick correct. Earn TD$ based on the odds (TD$ 100 at +150 = TD$ 150 profit plus your stake back).</span>
                    </div>
                    <div class="row row--lose">
                        <span class="row__key">Lose</span>
                        <span class="row__val">Pick wrong. Lose the TD$ wagered.</span>
                    </div>
                    <div class="row row--push">
                        <span class="row__key">Push</span>
                        <span class="row__val">Result lands exactly on the spread or total. TD$ returned, no profit.</span>
                    </div>
                </div>
                <div class="sub-label">Reading the odds</div>
                <div class="odds-row">
                    <div class="odds-card">
                        <div class="odds-card__value">+150</div>
                        <div class="odds-card__label">Underdog</div>
                        <div class="odds-card__desc">Risk TD$ 100, win TD$ 150 profit. Bigger plus = bigger payout.</div>
                    </div>
                    <div class="odds-card">
                        <div class="odds-card__value">-110</div>
                        <div class="odds-card__label">Favorite</div>
                        <div class="odds-card__desc">Risk TD$ 110, win TD$ 100 profit. Bigger minus = safer pick.</div>
                    </div>
                </div>
                <div class="tip">
                    <strong>Pro tip:</strong> place bets early, then reinvest winnings as they settle. Compounding your TD$ across the slate is what separates podium finishers from middle-of-the-packers.
                </div>
            </section>
        `}_renderGameModes(){const t=this._modesPayload;let a;return t?a=t.tokens.map(s=>{const n=t.modes[s];return n?this._renderModeCard(s,n):""}).join(""):a=this._modesError?`<div class="modes__empty">Couldn't load game modes. ${this._modesError}</div>`:'<div class="modes__empty modes__empty--loading">Loading game modes...</div>',`
            <section class="section" id="section-game-modes">
                ${this._sectionHeader("Game Modes","BMA pools come in flavors. Tap a card to flip and see the rules and ranking. Modes marked Premium are available with an upgrade.")}
                <div class="modes">${a}</div>
            </section>
        `}_renderModeCard(t,a){const s=!this._isModeAllowed(a,"basic"),n=!!a.beta,o=[];return t==="DEFAULT_FORMAT"&&o.push('<span class="mode__badge mode__badge--default">Default</span>'),s&&o.push('<span class="mode__badge mode__badge--premium" title="Available with Premium">Premium</span>'),n&&o.push('<span class="mode__badge mode__badge--beta">Beta</span>'),`
            <article class="mode" data-mode-flip data-flipped="false">
                <div class="mode__face mode__face--front">
                    <div class="mode__icon" aria-hidden="true"></div>
                    <div class="mode__head">
                        <span class="mode__name">${a.label}</span>
                        <span class="mode__badges">${o.join("")}</span>
                    </div>
                    <p class="mode__desc">${a.description||""}</p>
                    <div class="mode__hint">Tap to flip</div>
                </div>
                <div class="mode__face mode__face--back">
                    <div class="mode__head">
                        <span class="mode__name">${a.label}</span>
                    </div>
                    ${this._modeBackBody(t,a)}
                    <div class="mode__hint">Tap to flip back</div>
                </div>
            </article>
        `}_modeBackBody(t,a){const n={DEFAULT_FORMAT:"Bet TD$ 100 across the slate. Win, lose, push. Your balance moves accordingly. Highest balance at the end takes 1st.",SET_IT_AND_FORGET_IT:"Place one Spread, one Money Line, one Total. Spend every TD$. No edits after submission. Highest payout total wins.",LONGSHOT_MAYHEM:"Hit a winner at +150 or higher? It pays an extra 25% straight to your TD$ balance. Big plus-money wins compound fast.",TIERED_FORMAT:"Win 3 in a row to reach Silver (1.5x). 6 in a row reaches Gold (2x). 9 in a row reaches Platinum (3x). Lose a bet and your streak resets.",BRACKET:"Pick winners round-by-round. Survive each round to advance. Most rounds survived takes the pool.",TEAM_MODE:"Form a squad. Coordinate, share picks, win together. Your team's total TD$ balance determines your rank."}[t]||"See the in-pool legend for the exact ranking rules.",o=a.rules||{},r=[];return o.stakeRule==="SPEND_ALL"&&r.push("Must commit your full starting TD$ to qualify"),o.minBetsTotal&&o.minBetsTotal>0&&r.push(`Minimum ${o.minBetsTotal} bets`),Array.isArray(o.requiredBetTypes)&&o.requiredBetTypes.length>0&&r.push(`Must include: ${o.requiredBetTypes.join(", ")}`),o.allowPartialSubmit===!1&&r.push("No partial submissions"),o.allowBetModification===!1&&r.push("No bet edits after placement"),`
            <p class="mode__example">${n}</p>
            ${r.length>0?`<ul class="mode__facts">${r.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
        `}_renderLeaderboard(){return`
            <section class="section" id="section-leaderboard">
                ${this._sectionHeader("Climb & Win","Trophies are earned by working the slate. Here's how to climb.")}
                <div class="podium" aria-hidden="true">
                    <div class="podium__slot podium__slot--silver">
                        <div class="podium__trophy podium__trophy--silver"></div>
                        <div class="podium__pedestal podium__pedestal--silver">2</div>
                    </div>
                    <div class="podium__slot podium__slot--gold">
                        <div class="podium__trophy podium__trophy--gold"></div>
                        <div class="podium__pedestal podium__pedestal--gold">1</div>
                    </div>
                    <div class="podium__slot podium__slot--bronze">
                        <div class="podium__trophy podium__trophy--bronze"></div>
                        <div class="podium__pedestal podium__pedestal--bronze">3</div>
                    </div>
                </div>
                <div class="tips">
                    <div class="tips__item">
                        <span class="tips__num">1</span>
                        <div>
                            <strong>Reinvest your winnings.</strong>
                            <span>The moment a bet settles in your favor, that TD$ is back in play. Stake again. Compounding is everything.</span>
                        </div>
                    </div>
                    <div class="tips__item">
                        <span class="tips__num">2</span>
                        <div>
                            <strong>Diversify across matches.</strong>
                            <span>Stacking on one game maximizes upside, and variance. Spread across the slate to smooth out the ride.</span>
                        </div>
                    </div>
                    <div class="tips__item">
                        <span class="tips__num">3</span>
                        <div>
                            <strong>Chase value on longshots.</strong>
                            <span>Plus-money bets pay more than they risk. A well-placed +200 underdog can leap you up the leaderboard in one swing.</span>
                        </div>
                    </div>
                </div>
            </section>
        `}_renderPremium(t){const a=t!=="basic",s=[{title:"Unlimited tournaments",body:"Create and join as many pools as you want. No active-pool cap."},{title:"Up to 100 participants",body:"Run pools with 100 players. Build your league, your office pool, your friend group at scale."},{title:"Live odds",body:"Real-time market odds throughout each game. Bet at any moment up to first pitch, kickoff, or tipoff."},{title:"All game modes",body:"Bet Max Tiers, Bracket, Team Mode. Every mode unlocked, no paywalls."}];return`
            <section class="section section--premium" id="section-premium">
                ${this._sectionHeader("Go Premium",a?"You've got the keys already. Here's what your tier gives you.":"Run your own contests at scale and unlock every mode the platform has.")}
                <div class="premium-card">
                    <div class="premium-card__head">
                        <svg class="premium-card__crown" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 3h14v2H5v-2z"/></svg>
                        <h3 class="premium-card__title">Premium</h3>
                    </div>
                    <div class="premium-card__features">
                        ${s.map(n=>`
                            <div class="premium-card__feature">
                                <svg class="premium-card__check" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/></svg>
                                <div>
                                    <strong>${n.title}</strong>
                                    <span>${n.body}</span>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                    <div class="premium-card__foot">
                        <span class="premium-card__price">Pricing coming soon</span>
                        ${a?`<span class="premium-card__badge">You're in</span>`:'<button class="premium-card__cta" type="button" disabled aria-disabled="true">Upgrade Soon</button>'}
                    </div>
                </div>
            </section>
        `}_renderGlossary(){const t=[["Moneyline","Bet on which team wins outright."],["Spread","Point handicap applied to the favorite."],["Totals (O/U)","Combined score over or under a set number."],["Push","Result lands on the line. Wager returned."],["Favorite","Expected winner, listed with negative (-) odds."],["Underdog","Expected loser, listed with positive (+) odds."],["Cover","When a team beats the point spread."],["Parlay","A single ticket combining multiple bets. All must win."],["Hedge","Placing a counter-bet to reduce or lock in profit."],["Chalk",'Heavy favorites; "betting chalk" = safer plays.']];return`
            <section class="section section--glossary" id="section-glossary">
                ${this._sectionHeader("Glossary","A pocket reference for the lingo on the slate.")}
                <div class="rows">
                    ${t.map(([a,s])=>`
                        <div class="row"><span class="row__key">${a}</span><span class="row__val">${s}</span></div>
                    `).join("")}
                </div>
            </section>
        `}_wireInteractions(){const t=this.shadowRoot;t&&(t.querySelectorAll("[data-toc-target]").forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();const n=a.getAttribute("data-toc-target"),o=t.getElementById(`section-${n}`);o&&o.scrollIntoView({behavior:"smooth",block:"start"})})}),t.querySelectorAll("[data-bet-flip], [data-mode-flip]").forEach(a=>{a.addEventListener("click",s=>{if(s.target.closest("button"))return;const n=a.getAttribute("data-flipped")==="true";a.setAttribute("data-flipped",n?"false":"true")})}))}_styles(){return`
            :host { display: block; width: 100%; }

            .guide {
                max-width: min(94%, 880px);
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 28px;
                padding-bottom: 32px;
            }

            /* ── TOC ─────────────────────────────────────────────────── */
            .toc {
                position: sticky;
                top: 0;
                z-index: 5;
                display: flex;
                gap: 6px;
                overflow-x: auto;
                padding: 10px 4px;
                margin: 0 -4px;
                background: rgba(10, 10, 10, 0.85);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                box-shadow: 0 1px 0 rgba(255, 255, 255, 0.06);
                scrollbar-width: none;
            }
            .toc::-webkit-scrollbar { display: none; }
            .toc__pill {
                flex-shrink: 0;
                padding: 6px 12px;
                font-family: inherit;
                font-size: 0.72rem;
                font-weight: 700;
                letter-spacing: 0.4px;
                text-transform: uppercase;
                color: rgba(255, 255, 255, 0.7);
                background: transparent;
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 999px;
                cursor: pointer;
                transition: color 0.15s, background 0.15s, border-color 0.15s;
                -webkit-tap-highlight-color: transparent;
            }
            .toc__pill:hover {
                color: var(--status-locked-text, #F7C60D);
                border-color: rgba(247, 198, 13, 0.4);
                background: rgba(247, 198, 13, 0.04);
            }

            /* ── Section base ────────────────────────────────────────── */
            .section { display: flex; flex-direction: column; gap: 12px; }

            .section__header {
                display: flex;
                align-items: center;
                gap: 10px;
                padding-bottom: 6px;
            }
            .section__rule {
                width: 28px;
                height: 3px;
                border-radius: 2px;
                background: var(--status-locked-text, #F7C60D);
                flex-shrink: 0;
            }
            .section__title {
                margin: 0;
                font-size: 1.05rem;
                font-weight: 800;
                color: rgba(255, 255, 255, 0.95);
                text-transform: uppercase;
                letter-spacing: 0.8px;
            }
            .section__intro {
                font-size: 0.86rem;
                color: rgba(255, 255, 255, 0.65);
                line-height: 1.55;
                margin: 0 0 4px;
            }

            /* ── Hero ────────────────────────────────────────────────── */
            .section--hero { gap: 18px; padding-top: 8px; }
            .hero {
                background: linear-gradient(135deg, rgba(247,198,13,0.05), rgba(247,198,13,0) 70%);
                padding: 22px 20px;
                border-radius: 12px;
                box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.1);
            }
            .hero__eyebrow {
                display: inline-block;
                font-size: 0.66rem;
                font-weight: 800;
                letter-spacing: 1.5px;
                text-transform: uppercase;
                color: var(--status-locked-text, #F7C60D);
                margin-bottom: 6px;
            }
            .hero__title {
                margin: 0 0 8px;
                font-size: 1.6rem;
                font-weight: 900;
                color: #fff;
                letter-spacing: -0.01em;
            }
            .hero__lede {
                margin: 0;
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.55;
                max-width: 520px;
            }

            .quick-arc {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
            .quick-step {
                background: #1a1a1a;
                border-radius: 10px;
                padding: 14px;
                display: flex;
                align-items: flex-start;
                gap: 12px;
                box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
            }
            .quick-step__num {
                width: 32px;
                height: 32px;
                border-radius: 50%;
                background: rgba(247, 198, 13, 0.15);
                color: var(--status-locked-text, #F7C60D);
                font-weight: 900;
                font-size: 0.95rem;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }
            .quick-step__body {
                display: flex;
                flex-direction: column;
                gap: 3px;
                min-width: 0;
            }
            .quick-step__title {
                font-size: 0.88rem;
                font-weight: 800;
                color: #fff;
            }
            .quick-step__desc {
                font-size: 0.76rem;
                color: rgba(255, 255, 255, 0.6);
                line-height: 1.45;
            }

            /* ── Why play tiles ──────────────────────────────────────── */
            .tiles {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            .tile {
                background: #1a1a1a;
                border-radius: 10px;
                padding: 14px;
                display: flex;
                gap: 12px;
                align-items: flex-start;
                box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
            }
            .tile__icon {
                width: 22px;
                height: 22px;
                color: var(--status-locked-text, #F7C60D);
                flex-shrink: 0;
            }
            .tile__body { display: flex; flex-direction: column; gap: 3px; min-width: 0; }
            .tile__title {
                font-size: 0.86rem;
                font-weight: 800;
                color: #fff;
            }
            .tile__desc {
                font-size: 0.76rem;
                color: rgba(255, 255, 255, 0.6);
                line-height: 1.5;
            }

            /* ── Bet-type cards ──────────────────────────────────────── */
            .bet-types {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 10px;
            }
            .bet-type {
                position: relative;
                min-height: 160px;
                perspective: 1000px;
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
            }
            .bet-type__face {
                position: absolute;
                inset: 0;
                background: #1a1a1a;
                border-radius: 10px;
                padding: 14px;
                box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                flex-direction: column;
                gap: 6px;
            }
            .bet-type__face--back { transform: rotateY(180deg); }
            .bet-type[data-flipped="true"] .bet-type__face--front { transform: rotateY(180deg); }
            .bet-type[data-flipped="true"] .bet-type__face--back { transform: rotateY(360deg); }
            .bet-type__index {
                font-size: 0.62rem;
                font-weight: 800;
                color: var(--status-locked-text, #F7C60D);
                letter-spacing: 1px;
            }
            .bet-type__name {
                font-size: 0.95rem;
                font-weight: 800;
                color: #fff;
            }
            .bet-type__short {
                font-size: 0.76rem;
                color: rgba(255, 255, 255, 0.6);
                margin-top: 2px;
            }
            .bet-type__hint {
                margin-top: auto;
                font-size: 0.62rem;
                color: rgba(255, 255, 255, 0.4);
                letter-spacing: 0.6px;
                text-transform: uppercase;
            }
            .bet-type__long {
                margin: 4px 0;
                font-size: 0.74rem;
                color: rgba(255, 255, 255, 0.7);
                line-height: 1.45;
            }
            .bet-type__example {
                margin: 0;
                font-size: 0.7rem;
                color: rgba(255, 255, 255, 0.55);
                line-height: 1.45;
            }
            .bet-type__example strong { color: var(--status-locked-text, #F7C60D); }

            /* ── Banded rows ─────────────────────────────────────────── */
            .rows {
                display: flex;
                flex-direction: column;
                background: #1a1a1a;
                border-radius: 10px;
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
            .row:last-child { border-bottom: none; }
            .row:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
            .row__key {
                font-weight: 700;
                color: rgba(255, 255, 255, 0.92);
                flex-shrink: 0;
            }
            .row__val {
                color: rgba(255, 255, 255, 0.55);
                text-align: right;
                flex: 1;
            }
            /* Win / Lose / Push retain semantic status colors that match
               the rest of the app (leaderboard win/lose color, locked-text
               gold for push). These are intentional, not section theming. */
            .row--win .row__key { color: var(--status-upcoming-text, #00E676); }
            .row--lose .row__key { color: #FF5252; }
            .row--push .row__key { color: var(--status-locked-text, #F7C60D); }

            .sub-label {
                font-size: 0.7rem;
                font-weight: 800;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: rgba(255, 255, 255, 0.45);
                margin: 6px 0 0;
            }

            .odds-row {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }
            .odds-card {
                background: #1a1a1a;
                border-radius: 10px;
                padding: 14px;
                text-align: center;
                box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
            }
            .odds-card__value {
                font-size: 1.4rem;
                font-weight: 900;
                color: var(--status-locked-text, #F7C60D);
                margin-bottom: 4px;
                font-variant-numeric: tabular-nums;
            }
            .odds-card__label {
                font-size: 0.7rem;
                font-weight: 700;
                color: rgba(255, 255, 255, 0.5);
                text-transform: uppercase;
                letter-spacing: 0.6px;
                margin-bottom: 6px;
            }
            .odds-card__desc {
                font-size: 0.74rem;
                color: rgba(255, 255, 255, 0.6);
                line-height: 1.4;
            }

            .tip {
                border-left: 3px solid var(--status-locked-text, #F7C60D);
                padding: 10px 14px;
                font-size: 0.82rem;
                color: rgba(255, 255, 255, 0.75);
                line-height: 1.55;
                background: rgba(247, 198, 13, 0.04);
                border-radius: 0 8px 8px 0;
            }
            .tip strong { color: var(--status-locked-text, #F7C60D); }

            /* ── Game modes ──────────────────────────────────────────── */
            .modes {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 10px;
            }
            .mode {
                position: relative;
                min-height: 200px;
                perspective: 1000px;
                cursor: pointer;
                -webkit-tap-highlight-color: transparent;
            }
            .mode__face {
                position: absolute;
                inset: 0;
                background: #1a1a1a;
                border-radius: 10px;
                padding: 14px;
                box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
                backface-visibility: hidden;
                -webkit-backface-visibility: hidden;
                transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                display: flex;
                flex-direction: column;
                gap: 8px;
            }
            /* Front-only placeholder: gold trophy icon that signals "game
               mode" identity without per-mode color theming. Reuses the
               existing --trophy-gold-tall CSS var so the artwork matches
               the leaderboard podium, profile hero, and trophy
               celebrations elsewhere in the app. */
            .mode__icon {
                width: 36px;
                height: 36px;
                background-image: var(--trophy-gold-tall);
                background-size: contain;
                background-repeat: no-repeat;
                background-position: left center;
                flex-shrink: 0;
            }
            .mode__face--back { transform: rotateY(180deg); }
            .mode[data-flipped="true"] .mode__face--front { transform: rotateY(180deg); }
            .mode[data-flipped="true"] .mode__face--back { transform: rotateY(360deg); }
            .mode__head {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 8px;
            }
            .mode__name {
                font-size: 0.92rem;
                font-weight: 800;
                color: #fff;
                line-height: 1.2;
            }
            .mode__badges {
                display: inline-flex;
                gap: 4px;
                flex-wrap: wrap;
                justify-content: flex-end;
            }
            .mode__badge {
                font-size: 0.56rem;
                font-weight: 800;
                letter-spacing: 0.6px;
                text-transform: uppercase;
                padding: 2px 6px;
                border-radius: 3px;
            }
            .mode__badge--default {
                background: rgba(0, 230, 118, 0.12);
                color: var(--status-upcoming-text, #00E676);
            }
            .mode__badge--premium {
                background: rgba(247, 198, 13, 0.12);
                color: var(--status-locked-text, #F7C60D);
            }
            .mode__badge--beta {
                background: rgba(255, 255, 255, 0.06);
                color: rgba(255, 255, 255, 0.65);
            }
            .mode__desc {
                margin: 0;
                font-size: 0.76rem;
                color: rgba(255, 255, 255, 0.6);
                line-height: 1.5;
                flex: 1;
            }
            .mode__hint {
                font-size: 0.6rem;
                font-weight: 700;
                letter-spacing: 0.6px;
                text-transform: uppercase;
                color: rgba(255, 255, 255, 0.35);
                margin-top: auto;
            }
            .mode__example {
                margin: 0;
                font-size: 0.78rem;
                color: rgba(255, 255, 255, 0.78);
                line-height: 1.5;
            }
            .mode__facts {
                margin: 4px 0 0;
                padding: 0 0 0 16px;
                font-size: 0.72rem;
                color: rgba(255, 255, 255, 0.55);
                line-height: 1.6;
            }
            .modes__empty {
                text-align: center;
                padding: 32px 16px;
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.5);
            }
            .modes__empty--loading {
                color: rgba(255, 255, 255, 0.6);
                animation: pulse 1.5s ease-in-out infinite;
            }
            @keyframes pulse {
                0%, 100% { opacity: 0.5; }
                50%      { opacity: 1; }
            }

            /* ── Podium (reuses --trophy-*-tall CSS vars from the
                  rest of the app so the trophies match the leaderboard
                  podium, profile hero, top-players page, etc.) ───────── */
            .podium {
                display: grid;
                grid-template-columns: 1fr 1.2fr 1fr;
                gap: 10px;
                align-items: end;
                padding: 8px 0 0;
                max-width: 360px;
                margin: 0 auto;
            }
            .podium__slot {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 8px;
            }
            .podium__trophy {
                background-size: contain;
                background-repeat: no-repeat;
                background-position: center bottom;
            }
            .podium__trophy--gold   { width: 88px; height: 88px; background-image: var(--trophy-gold-tall); }
            .podium__trophy--silver { width: 64px; height: 64px; background-image: var(--trophy-silver-tall); }
            .podium__trophy--bronze { width: 56px; height: 56px; background-image: var(--trophy-bronze-tall); }
            .podium__pedestal {
                width: 100%;
                font-size: 1.4rem;
                font-weight: 900;
                color: rgba(0, 0, 0, 0.55);
                text-align: center;
                padding: 16px 0;
                border-radius: 6px 6px 0 0;
                font-variant-numeric: tabular-nums;
            }
            .podium__pedestal--gold   { background: #F7C60D; padding: 24px 0; }
            .podium__pedestal--silver { background: #B5BCC2; padding: 14px 0; }
            .podium__pedestal--bronze { background: #CD7F32; padding: 10px 0; }

            .tips {
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            .tips__item {
                background: #1a1a1a;
                border-radius: 10px;
                padding: 14px;
                display: flex;
                gap: 12px;
                align-items: flex-start;
                box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.05);
            }
            .tips__num {
                width: 28px;
                height: 28px;
                border-radius: 50%;
                background: rgba(247, 198, 13, 0.15);
                color: var(--status-locked-text, #F7C60D);
                font-weight: 900;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
                font-size: 0.85rem;
            }
            .tips__item strong {
                display: block;
                font-size: 0.86rem;
                color: #fff;
                margin-bottom: 3px;
            }
            .tips__item span {
                font-size: 0.78rem;
                color: rgba(255, 255, 255, 0.62);
                line-height: 1.5;
            }

            /* ── Premium ─────────────────────────────────────────────── */
            .premium-card {
                background: linear-gradient(135deg, rgba(247, 198, 13, 0.08), rgba(247, 198, 13, 0.02) 70%);
                border-radius: 12px;
                padding: 18px;
                box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.25);
                display: flex;
                flex-direction: column;
                gap: 14px;
            }
            .premium-card__head {
                display: flex;
                align-items: center;
                gap: 10px;
            }
            .premium-card__crown {
                width: 24px;
                height: 24px;
                color: var(--status-locked-text, #F7C60D);
            }
            .premium-card__title {
                margin: 0;
                font-size: 1.1rem;
                font-weight: 900;
                color: #fff;
                letter-spacing: 0.5px;
            }
            .premium-card__features {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
            }
            .premium-card__feature {
                display: flex;
                gap: 8px;
                align-items: flex-start;
            }
            .premium-card__check {
                width: 18px;
                height: 18px;
                color: var(--status-locked-text, #F7C60D);
                flex-shrink: 0;
                margin-top: 1px;
            }
            .premium-card__feature strong {
                display: block;
                font-size: 0.82rem;
                color: #fff;
                margin-bottom: 2px;
            }
            .premium-card__feature span {
                font-size: 0.74rem;
                color: rgba(255, 255, 255, 0.62);
                line-height: 1.45;
            }
            .premium-card__foot {
                display: flex;
                justify-content: space-between;
                align-items: center;
                margin-top: 4px;
                padding-top: 12px;
                border-top: 1px solid rgba(247, 198, 13, 0.18);
            }
            .premium-card__price {
                font-size: 0.74rem;
                font-weight: 600;
                color: rgba(255, 255, 255, 0.5);
            }
            .premium-card__cta {
                background: var(--status-locked-text, #F7C60D);
                color: #0a0612;
                border: none;
                padding: 10px 18px;
                border-radius: 8px;
                font-family: inherit;
                font-size: 0.78rem;
                font-weight: 800;
                letter-spacing: 0.6px;
                text-transform: uppercase;
                cursor: not-allowed;
                opacity: 0.8;
                box-shadow: 0 2px 12px rgba(247, 198, 13, 0.2);
            }
            .premium-card__badge {
                font-size: 0.7rem;
                font-weight: 800;
                letter-spacing: 0.6px;
                text-transform: uppercase;
                padding: 6px 12px;
                border-radius: 999px;
                background: rgba(0, 230, 118, 0.15);
                color: var(--status-upcoming-text, #00E676);
            }

            /* ── Glossary ────────────────────────────────────────────── */
            .section--glossary { opacity: 0.92; }

            /* ── Mobile breakpoint ───────────────────────────────────── */
            @media (max-width: 640px) {
                .guide { gap: 22px; padding: 0 6px 24px; }
                .toc { padding: 8px 4px; }
                .toc__pill { font-size: 0.66rem; padding: 5px 10px; }

                .section__title { font-size: 0.92rem; }
                .section__intro { font-size: 0.82rem; }

                .hero { padding: 18px 14px; }
                .hero__title { font-size: 1.3rem; }
                .hero__lede { font-size: 0.84rem; }

                .quick-arc { grid-template-columns: 1fr; gap: 8px; }
                .quick-step { padding: 12px; }

                .tiles { grid-template-columns: 1fr; gap: 8px; }
                .bet-types { grid-template-columns: 1fr; }
                .bet-type { min-height: 140px; }

                .modes { grid-template-columns: 1fr; }
                .mode { min-height: 180px; }

                .odds-row { grid-template-columns: 1fr; }
                .row { flex-direction: column; align-items: flex-start; gap: 4px; padding: 8px 12px; }
                .row__val { text-align: left; font-size: 0.76rem; }

                .podium { max-width: 280px; }
                .podium__trophy--gold   { width: 70px; height: 70px; }
                .podium__trophy--silver { width: 52px; height: 52px; }
                .podium__trophy--bronze { width: 46px; height: 46px; }

                .premium-card { padding: 14px; }
                .premium-card__features { grid-template-columns: 1fr; }
                .premium-card__foot { flex-direction: column; gap: 10px; align-items: stretch; }
                .premium-card__cta { width: 100%; }
                .premium-card__price { text-align: center; }
            }
        `}}customElements.define("bma-profile-guide",lb);const cb={class:"profile-layout"},db={class:"profile-shell"},ub={class:"profile-sidebar"},pb=["data-active-section"],fb={class:"profile-content"},hb={class:"profile-panel"},gb={class:"profile-panel"},mb={class:"profile-panel"},bb=["data-user-class"],_b={class:"profile-panel profile-panel--account-desktop"},vb={class:"account-panel"},yb={class:"mobile-account-bar"},wb={__name:"profile_route",setup(e){const t=lt(),a=ke(),s=Pe("overview"),n=Pe(!1),o=()=>{t.push({name:"home_route"})},r=d=>{s.value=d.detail?.section||"overview"},i=d=>{const p=d.detail?.contestGuid;p&&(window._pendingTournGuid=p,t.push({name:"home_route"}))},l=()=>{const d=a.appSession?.session_user||{},p=d.guid,f=a.coreTourn.length>0?a.coreTourn[a.coreTourn.length-1].data:[],g=f.filter(X=>(X.entities?.guids||[]).includes(p)),h=g.filter(X=>["LOCKED","UPCOMING"].includes(X.status||X.class)),k=g.filter(X=>(X.status||X.class)==="COMPLETED"),m=X=>{let oe=0,K=0,se=0;return X.forEach(ee=>{(Array.isArray(ee.tags)?ee.tags:[]).forEach(z=>{if(!z||typeof z!="object")return;const te=(z.entity_guid===p?z.badge:null)||(typeof z[p]=="string"?z[p]:null);typeof te=="string"&&te.startsWith("--badge__ribbon--")&&(te==="--badge__ribbon--gold"?oe++:te==="--badge__ribbon--silver"?K++:te==="--badge__ribbon--bronze"&&se++)})}),{gold:oe,silver:K,bronze:se}},v=g.filter(X=>X.is_private!==!0),w=g.filter(X=>X.is_private===!0),E=m(v),$=m(w),{gold:D,silver:M,bronze:V}=E,I={};g.forEach(X=>{(X.sports_allowed||[]).forEach(oe=>{const se=Ge.find(ee=>ee.key===oe.key)?.group||"Other";I[se]=(I[se]||0)+1})});let U="",j="",F=0;Object.entries(I).forEach(([X,oe])=>{oe>F&&(F=oe,U=X,j=X)});const G=Ce._betStatsCache?.stats||null;let C="—",A="";if(G){const X=G.wins+G.losses;X>0&&(C=Math.round(G.wins/X*100)+"%",A=`${G.wins}-${G.losses}`)}const S=X=>{let oe=null;(Array.isArray(X.tags)?X.tags:[]).forEach(z=>{if(!z||typeof z!="object")return;const te=(z.entity_guid===p?z.badge:null)||(typeof z[p]=="string"?z[p]:null);te==="--badge__ribbon--gold"?oe=1:te==="--badge__ribbon--silver"?oe=2:te==="--badge__ribbon--bronze"&&(oe=3)});const se=X.sports_allowed?.[0]?.key||"",ee=Ge.find(z=>z.key===se),ne=!!(X.creator_guid&&X.creator_guid===p);return{id:X.guid,name:X.caption||"Tournament",sport:ee?.title||"",sports:[se],status:X.status||X.class||"",placement:oe,startTime:X.window_start_time,isPrivate:X.is_private===!0,isHosting:ne}},R=(X,oe)=>new Date(oe.status_time||0)-new Date(X.status_time||0),O=[...g].filter(X=>X.is_private!==!0).sort(R).slice(0,20).map(S),Q=f.filter(X=>X.is_private===!0).filter(X=>{const oe=X.creator_guid&&X.creator_guid===p,K=(X.entities?.guids||[]).includes(p);return oe||K}).sort(R).slice(0,20).map(S);return{username:d.userName||d.name||"Player",email:d.email||"",activeCount:h.length,playedCount:k.length,trophyCount:D+M+V,gold:D,silver:M,bronze:V,firstPlace:D,publicTrophies:E,privateTrophies:$,favSport:U,favGroup:j,winRate:C,record:A,recentContests:O,privateContests:Q}},c=()=>{const d=l(),p=document.querySelector("bma-profile-hero");p&&(p.setAttribute("data-username",d.username),p.setAttribute("data-email",d.email),p.setAttribute("data-active-count",String(d.activeCount)),p.setAttribute("data-played-count",String(d.playedCount)),p.setAttribute("data-trophy-count",String(d.trophyCount)));const f=document.querySelector("bma-profile-stats");f&&(f.setAttribute("data-played",String(d.playedCount)),f.setAttribute("data-first-place",String(d.firstPlace)),f.setAttribute("data-trophies",String(d.trophyCount)),f.setAttribute("data-favorite-sport",d.favSport),f.setAttribute("data-favorite-sport-group",d.favGroup),f.setAttribute("data-win-rate",d.winRate),f.setAttribute("data-win-loss-record",d.record));const g=document.querySelector("bma-profile-history");g&&(g.setAttribute("data-contests",JSON.stringify(d.recentContests)),g.setAttribute("data-private-contests",JSON.stringify(d.privateContests)));const h=document.getElementById("profile-trophy-pack");if(h){const k=h.dataset.activeTab==="pools"?"pools":"lobbies",m=w=>`
        <div class="trophy-podium">
          <div class="podium-col podium-col--silver">
            <div class="podium-col__trophy" style="background-image: var(--trophy-silver-tall); width: 56px; height: 56px;"></div>
            <span class="podium-col__count" style="color: #C0C0C0;">&times;${w.silver}</span>
            <div class="podium-col__pedestal podium-col__pedestal--silver">
              <span class="podium-col__place">2nd</span>
            </div>
          </div>
          <div class="podium-col podium-col--gold">
            <div class="podium-col__trophy" style="background-image: var(--trophy-gold-tall); width: 72px; height: 72px;"></div>
            <span class="podium-col__count" style="color: var(--status-locked-text, #FFD700);">&times;${w.gold}</span>
            <div class="podium-col__pedestal podium-col__pedestal--gold">
              <span class="podium-col__place">1st</span>
            </div>
          </div>
          <div class="podium-col podium-col--bronze">
            <div class="podium-col__trophy" style="background-image: var(--trophy-bronze-tall); width: 48px; height: 48px;"></div>
            <span class="podium-col__count" style="color: #DA954B;">&times;${w.bronze}</span>
            <div class="podium-col__pedestal podium-col__pedestal--bronze">
              <span class="podium-col__place">3rd</span>
            </div>
          </div>
        </div>
      `,v=k==="pools"?d.privateTrophies:d.publicTrophies;h.innerHTML=`
        <div class="trophy-pack__header">My Trophies</div>
        <div class="trophy-pack__tabs" role="tablist">
          <button type="button" class="trophy-pack__tab ${k==="lobbies"?"trophy-pack__tab--active":""}" data-trophy-tab="lobbies" role="tab" aria-selected="${k==="lobbies"}">Bet Max Lobbies</button>
          <button type="button" class="trophy-pack__tab ${k==="pools"?"trophy-pack__tab--active":""}" data-trophy-tab="pools" role="tab" aria-selected="${k==="pools"}">Bet Max Pools</button>
        </div>
        ${m(v)}
      `,h.querySelectorAll("[data-trophy-tab]").forEach(w=>{w.addEventListener("click",()=>{const E=w.dataset.trophyTab;h.dataset.activeTab!==E&&(h.dataset.activeTab=E,c())})})}};let u=null;return it(async()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),c();const d=a.appSession?.session_user?.guid;d&&Ce._ensureBetStatsCache(d).then(p=>{p&&c()}),u=de.subscribe(a.hierTopics.ROUTE__HOME_HYDRATE,()=>{c()})}),Xt(()=>{u&&de.unsubscribe(u)}),(d,p)=>(pe(),fe("main",cb,[b("div",{class:"profile-header"},[b("button",{class:"profile-header__back",onClick:o,"aria-label":"Back"},[...p[7]||(p[7]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),p[8]||(p[8]=b("h1",{class:"profile-header__title"},"My Profile",-1))]),p[17]||(p[17]=b("bma-profile-hero",null,null,-1)),b("div",db,[b("aside",ub,[b("bma-profile-nav",{"data-active-section":s.value,onSectionChange:r},null,40,pb)]),b("div",fb,[Lt(b("section",hb,[...p[9]||(p[9]=[b("div",{id:"profile-trophy-pack",class:"trophy-pack"},null,-1),b("bma-profile-stats",null,null,-1)])],512),[[Es,s.value==="overview"]]),Lt(b("section",gb,[b("bma-profile-history",{onContestClick:i},null,32)],512),[[Es,s.value==="contests"]]),Lt(b("section",mb,[b("bma-profile-guide",{"data-user-class":ot(a).appSession?.session_user?.class||""},null,8,bb)],512),[[Es,s.value==="guide"]]),Lt(b("section",_b,[b("div",vb,[b("button",{class:"account-btn",onClick:p[0]||(p[0]=f=>ot(de).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[10]||(p[10]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Be(" Change Password ",-1)])]),b("button",{class:"account-btn account-btn--signout",onClick:p[1]||(p[1]=f=>ot(de).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[11]||(p[11]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Be(" Sign Out ",-1)])])])],512),[[Es,s.value==="account"]])])]),b("div",yb,[n.value?(pe(),fe("div",{key:0,class:"mobile-account-scrim",onClick:p[2]||(p[2]=f=>n.value=!1)})):Te("",!0),n.value?(pe(),fe("div",{key:1,class:"mobile-account-bar__panel",onClick:p[5]||(p[5]=Ea(()=>{},["stop"]))},[b("button",{class:"account-btn",onClick:p[3]||(p[3]=f=>ot(de).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[12]||(p[12]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Be(" Change Password ",-1)])]),b("button",{class:"account-btn account-btn--signout",onClick:p[4]||(p[4]=f=>ot(de).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[13]||(p[13]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Be(" Sign Out ",-1)])])])):Te("",!0),b("div",{class:"mobile-account-bar__trigger",onClick:p[6]||(p[6]=f=>n.value=!n.value)},[p[15]||(p[15]=b("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})],-1)),p[16]||(p[16]=b("span",null,"Account",-1)),(pe(),fe("svg",{class:qe(["mobile-account-bar__chevron",n.value?"mobile-account-bar__chevron--open":""]),viewBox:"0 0 24 24",fill:"currentColor"},[...p[14]||(p[14]=[b("path",{d:"M7 10l5 5 5-5z"},null,-1)])],2))])])]))}};class xb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-rank","data-trophies","data-td-dollars"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const t=this.getAttribute("data-username")||"Player",a=this.getAttribute("data-rank")||"—",s=this.getAttribute("data-trophies")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),o=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString(),r=t.charAt(0).toUpperCase();this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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
        `}}customElements.define("bma-top-players-hero",xb);const Tb={class:"top-players-layout"},kb={class:"top-players-shell"},Sb={class:"top-players-sidebar"},Eb=["data-active-section"],Ab={__name:"top_players_route",setup(e){const t=lt(),a=ke(),s=Pe("overall"),n=()=>{t.push({name:"home_route"})},o=l=>{const c=l.detail?.section||"overall";s.value=c;const u=document.querySelector(`#global-leaderboard-container .glb__tab[data-tab="${c}"]`);u&&u.click()},r=l=>{const c=a.appSession?.session_user?.guid,u=a.appSession?.session_user?.userName||a.appSession?.session_user?.name||"Player",d=l.find(f=>f.user_guid===c),p=document.querySelector("bma-top-players-hero");if(p)if(d){const f=l.indexOf(d)+1;p.setAttribute("data-username",d.username||u),p.setAttribute("data-rank",String(f)),p.setAttribute("data-trophies",String(d.tournaments_won||0)),p.setAttribute("data-td-dollars",String(d.total_payout||0))}else p.setAttribute("data-username",u),p.setAttribute("data-rank","—"),p.setAttribute("data-trophies","0"),p.setAttribute("data-td-dollars","0")},i=async()=>{try{const l=Ce._globalLBCache?.ALL;let c;l?.data&&Date.now()-l.ts<300*1e3?c=l.data:(c=await xe.fetchAllTimeLeaderboard("ALL",100,"td"),Ce._globalLBCache&&(Ce._globalLBCache.ALL={data:c,ts:Date.now(),inflight:!1})),r(c?.data||[]),typeof window._renderTopPlayers=="function"&&await window._renderTopPlayers("ALL")}catch(l){console.warn("[top_players_route] load failed",l)}};return it(()=>{if(!a.appSession.session_user.authenticated){t.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),requestAnimationFrame(()=>{i()})}),(l,c)=>(pe(),fe("main",Tb,[b("div",{class:"top-players-header"},[b("button",{class:"top-players-header__back",onClick:n,"aria-label":"Back"},[...c[0]||(c[0]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=b("h1",{class:"top-players-header__title"},"Top Players",-1))]),c[3]||(c[3]=b("bma-top-players-hero",null,null,-1)),c[4]||(c[4]=b("p",{class:"top-players-scope-note"}," Top Players leaderboard reflects public Bet Max Tourney games, not Bet Max Pools results. ",-1)),b("div",kb,[b("aside",Sb,[b("bma-profile-nav",{"data-active-section":s.value,onSectionChange:o,"data-sections":"top-players"},null,40,Eb)]),c[2]||(c[2]=b("div",{class:"top-players-content"},[b("div",{id:"global-leaderboard-container"},[b("div",{class:"leaderboard-empty"},[b("p",null,"Loading leaderboard...")])])],-1))])]))}},Cb={class:"play-cntr","data-current-tourn-guid":"","data-current-tourn-action":""},Pb={id:"play-section-PLAY",class:"play-section",style:{display:"none","padding-top":"8px"}},Ob={class:"bet-grid"},Lb={class:"bet-grid__slip","data-active-bet-tab":"MYBETS"},Mb={class:"bet-grid__slip-BETSLIP",style:{display:"none"},"data-bets-valid":"false"},Db=["innerHTML"],Rb={__name:"play_route",setup(e){const t=lt(),a=ys(),s=ke(),n=window.EMPTY_BETSLIP_HTML||"",o=()=>{t.push({name:"home_route"})},r=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),u=document.querySelector(".bet-grid__toggle-container"),d=document.querySelector(".bet-grid__select"),p=document.querySelector(".bet-grid__slip");if(!l||!c||!u||!d||!p){console.warn("[play_route] initBetGridToggle: missing elements");return}const f=window.matchMedia("(orientation: portrait)").matches,g=window.matchMedia("(max-width: 768px)").matches,h=m=>{d.classList.toggle("collapsed",m),p.classList.toggle("collapsed",!m),c.textContent=m?"Close Bet Slip":"Open Bet Slip",u.classList.toggle("bet-grid__toggle-container--open",m)};(f||g)&&h(!1);let k=null;l.addEventListener("pointerdown",m=>{k=m.pointerId}),l.addEventListener("pointerup",m=>{if(m.pointerId!==k)return;k=null;const v=!p.classList.contains("collapsed");h(!v)}),l.addEventListener("pointercancel",()=>{k=null}),l.addEventListener("click",m=>{m.preventDefault(),m.stopPropagation()})},i=l=>{const c=l.target.closest("[data-publish-route-home], [data-sodapop-close]");c&&c.dataset?.publishRouteHome?.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&(document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(d=>{d.classList.toggle("dash-nav__btn--active",d===c)}),de.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`))};return it(async()=>{if(!s.appSession.session_user.authenticated){t.push({name:"signin_route"});return}const l=a.query.guid||"",c=a.query.action||"INFO";if(!l){console.warn("[play_route] No tournament guid provided"),t.push({name:"home_route"});return}const u=s.appSession?.session_user?.guid;if(u)try{const p=await xe.fetchBetSlips(u,l);p?.rows&&(s.pushcoreBetSlip({timestamp:Date.now(),source:"API",data:p.rows}),setTimeout(()=>{de.publish(s.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(p))},300))}catch(p){console.warn("[play_route] fetchBetSlips failed:",p)}if(!(s.coreTourn.length>0&&s.coreTourn[s.coreTourn.length-1]?.data?.some(p=>p.guid===l)))try{const p=await xe.fetchTournaments();p?.rows&&Array.isArray(p.rows)&&(s.pushCoreTourn({timestamp:Date.now(),source:"API_PLAY_HYDRATE",data:p.rows}),console.log("[play_route] Hydrated coreTourn for direct entry — guid:",l))}catch(p){console.warn("[play_route] coreTourn hydrate failed:",p)}document.body.classList.add("route-locked"),document.addEventListener("click",i),window.initBetGridToggle=r,requestAnimationFrame(()=>{typeof Ce.initPlayScreen=="function"&&Ce.initPlayScreen(l,c)})}),Xt(()=>{document.body.classList.remove("route-locked"),document.removeEventListener("click",i),delete window.initBetGridToggle;const l=document.querySelector(".play-cntr");l&&(l.dataset.currentTournGuid="",l.dataset.currentTournAction="")}),(l,c)=>(pe(),fe("article",Cb,[b("div",{class:"head-caption tourn-dashboard"},[b("div",{class:"head-caption__back",onClick:o,role:"button",tabindex:"0","aria-label":"Back"},[...c[0]||(c[0]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=b("section",{class:"head-caption__content"},[b("h3",{id:"pop-play__tourn-caption--id",class:"pop-play__tourn-caption"},"Tournament"),b("p",{id:"pop-play__tourn-tagline--id",class:"pop-play__tourn-tagline"},"Loading...")],-1))]),c[6]||(c[6]=dt('<div class="dash-stats"><div class="dash-stat"><span class="dash-stat__label">TD$ Balance</span><span class="dash-stat__value" id="dashboard-td-balance">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--balance" style="width:100%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">At Risk</span><span class="dash-stat__value dash-stat__value--pending" id="dashboard-td-pending">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--pending" style="width:0%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">Rank</span><span class="dash-stat__value" id="dashboard-rank"><span class="tourn-dashboard__rank-text">-/-</span><span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--participants" style="width:0%;"></div></div></div></div><nav class="dash-nav"><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><span>Info</span></button><button id="btn-join__play--id" class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="visibility:hidden;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><span>Play</span></button><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"></path></svg><span>Leaderboard</span></button></nav><div id="play-section-INFO" class="play-section play-section--active"><div id="pop-play__caro-info-summary2--id"></div><div id="pop-play__caro-info-summary1--id"></div><div id="pop-play__caro-info-list--id"></div></div>',3)),b("div",Pb,[b("article",Ob,[c[5]||(c[5]=dt('<section class="bet-grid__select"><bma-game-mode-progress id="game-mode-progress" hidden></bma-game-mode-progress><article class="select-grid"></article></section><div class="bet-grid__toggle-container"><button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle bet slip"><span class="bet-grid__toggle-summary"><span class="bet-grid__toggle-badge" id="bet-grid-toggle-count">0</span><span class="bet-grid__toggle-label">Bets</span></span><span class="bet-grid__toggle-action"><span class="bet-grid__toggle-text">Open Bet Slip</span><svg class="bet-grid__toggle-chevron" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 14l5-5 5 5z"></path></svg></span></button></div>',2)),b("aside",Lb,[c[3]||(c[3]=dt('<bma-longshot-chip id="betslip-longshot-chip" data-show-stats="false" hidden style="margin:8px 8px 4px;"></bma-longshot-chip><nav class="bet-slip__tabs"><button class="bet-slip-tab" data-bet-tab="BETSLIP">Bet Slip<span class="bet-slip-tab__badge bet-slip-tab__badge--slip" id="bet-slip-tab-slip-badge" style="visibility:hidden;">0</span></button><button class="bet-slip-tab" data-bet-tab="MYBETS">My Bets<span class="bet-slip-tab__badge bet-slip-tab__badge--mybets" id="bet-slip-tab-mybets-badge" style="visibility:hidden;">0</span></button></nav>',2)),b("section",Mb,[b("div",{class:"bet-grid__slip-BETSLIP-content",innerHTML:ot(n)},null,8,Db),c[2]||(c[2]=dt('<output class="bet-grid__slip-BETSLIP-summary"><div class="summary-row summary-row--labels"><div class="summary-cell">TD$</div><div class="summary-cell">Stake</div><div class="summary-cell">Payout</div></div><div class="summary-row summary-row--values"><div id="summary-balance" class="summary-cell">0.00</div><div id="summary-stake" class="summary-cell">0.00</div><div id="summary-payout" class="summary-cell">0.00</div></div></output><button class="bet-grid__slip-BETSLIP-cta" data-publish-betslip="COREBETSLIP.BET">BET!</button>',2))]),c[4]||(c[4]=b("div",{class:"bet-grid__slip-MYBETS"},null,-1))])])]),c[7]||(c[7]=b("div",{id:"play-section-LEADERBOARD",class:"play-section",style:{display:"none"}},[b("div",{id:"pop-play__caro-leaderboard--id"})],-1)),c[8]||(c[8]=b("br",null,null,-1))]))}},$b={class:"preview-cntr"},Ib={class:"head-caption tourn-dashboard"},Nb={class:"head-caption__content"},Bb={class:"pop-play__tourn-caption"},Fb={class:"pop-play__tourn-tagline"},zb={key:0,class:"preview-wrap"},Hb={key:0,class:"preview-invite-band"},Ub={class:"info-summary-pack"},Gb={class:"info-summary-pack__stat"},jb={class:"info-summary-pack__stat-value",style:{color:"var(--status-upcoming-text, #00E676)"}},Vb={class:"info-summary-pack__stat"},qb={class:"info-summary-pack__stat-value"},Yb={class:"info-summary-pack__stat"},Kb={class:"info-summary-pack__stat-value"},Wb={class:"info-pack info-pack--padded"},Jb={class:"info-progress-status"},Xb={class:"info-progress-status__row"},Qb={key:0,class:"preview-countdown"},Zb={class:"preview-schedule-row"},e_={class:"preview-schedule-value"},t_={class:"preview-schedule-value"},a_={key:1,class:"info-pack info-pack--padded preview-joined"},s_={class:"preview-section-row"},n_={class:"preview-section-meta"},o_={class:"preview-players-row"},r_={class:"preview-player-avatar"},i_={class:"preview-player-name"},l_={key:0,class:"preview-player-more"},c_={key:2,class:"info-pack info-pack--padded preview-trophies"},d_={class:"preview-trophy-podium"},u_={key:0,class:"preview-trophy preview-trophy--silver"},p_={class:"preview-trophy-count"},f_={key:1,class:"preview-trophy preview-trophy--gold"},h_={class:"preview-trophy-count"},g_={key:2,class:"preview-trophy preview-trophy--bronze"},m_={class:"preview-trophy-count"},b_={class:"info-pack preview-legend"},__={class:"preview-legend-item"},v_={class:"preview-legend-value"},y_={class:"preview-legend-item"},w_={class:"preview-legend-value"},x_={class:"preview-legend-item"},T_={class:"preview-legend-value",style:{color:"var(--status-locked-text, #F7C60D)"}},k_={key:3,class:"info-pack info-pack--padded preview-invite-composer"},S_={class:"preview-section-row"},E_={key:0,class:"preview-section-meta"},A_=["disabled"],C_=["disabled"],P_={key:0,class:"invite-form__hint"},O_={key:1,class:"invite-form__error"},L_={key:2,class:"invite-sent-list"},M_={class:"invite-sent-row__main"},D_={class:"invite-sent-row__name"},R_=["onClick","aria-label"],$_={class:"preview-cta-bar"},I_={key:1,class:"preview-cta-hint"},N_={key:2,class:"preview-cta-hint"},B_={key:1,class:"preview-empty"},F_={__name:"preview_route",setup(e){const t=lt(),a=ys(),s=ke(),n=_e(()=>a.params.guid||""),o=_e(()=>a.query.s||null),r=Pe(null),i=Pe("idle"),l=_e(()=>{if(s.coreTourn.length){const x=s.coreTourn[s.coreTourn.length-1].data.find(B=>B.guid===n.value);if(x)return x}return r.value}),c=_e(()=>s.appSession?.session_user?.authenticated===!0),u=_e(()=>!c.value),d=_e(()=>s.appSession?.session_user?.guid||""),p=_e(()=>!c.value||!l.value?!1:(l.value.entities?.guids||[]).includes(d.value)),f=_e(()=>{if(!c.value||!l.value)return!1;const _=l.value.creator_guid;return!!_&&_===d.value}),g=Pe(""),h=Pe(!1),k=Pe(""),m=Pe([]);let v=null;const w=_=>{const x=(_||"").trim();return x?x.includes("@")?{email:x}:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(x)?{user_guid:x}:{userName:x}:null},E=async()=>{k.value="";const _=w(g.value);if(_){h.value=!0;try{const x=await xe.sendInvite(n.value,_);if(x.ok&&x.data?.invite){if(m.value=[x.data.invite,...m.value],g.value="",typeof neodigmToast<"u"){const N=x.data.invite.invitee_display_name||x.data.invite.invitee_user_name||"them";neodigmToast.q(`Invite sent to ${N}.`,"success")}return}const B=x.data?.error||`http_${x.status}`;k.value=(()=>{if(B==="invitee_not_found")return"Couldn't find that player on BMA. You can still share the invite link.";if(B==="already_invited")return"You've already invited them. Check the list below.";if(B==="already_joined")return"They're already in this pool.";if(B==="pool_full")return"Pool is full.";if(B==="cooldown_active"){const N=x.data?.retry_after_hours;return N?`They declined recently. Try again in ${N}h.`:"They declined recently. Try again tomorrow."}return B==="rate_limited"?"Too many invites for now. Try again in a few minutes.":B==="not_creator"?"Only the pool creator can send invites.":B==="not_private"?"This pool doesn't accept directed invites.":B==="invalid_request_shape"?"Enter a User Name or Email to send an invite.":"Couldn't send invite right now. Try again."})()}catch(x){console.warn("[preview_route] sendInvite failed:",x),k.value="Network error. Try again."}finally{h.value=!1}}},$=async _=>{if(!_)return;const x=m.value;m.value=x.filter(N=>N.guid!==_),(await xe.revokeInvite(_)).ok?typeof neodigmToast<"u"&&neodigmToast.q("Invite revoked.","info"):(m.value=x,typeof neodigmToast<"u"&&neodigmToast.q("Couldn't revoke. Try again.","warning"))},D=async()=>{if(!f.value||!n.value)return;const _=await xe.fetchInvitesForTournament(n.value);_.ok&&Array.isArray(_.data?.invites)&&(m.value=_.data.invites)},M=_e(()=>{const _=m.value||[],x=_.filter(W=>(W.status||"").toUpperCase()==="PENDING").length,B=_.filter(W=>(W.status||"").toUpperCase()==="ACCEPTED").length,N=_.filter(W=>(W.status||"").toUpperCase()==="DECLINED").length,Y=typeof l.value?.invited_count=="number"?l.value.invited_count:x;return{pending:x,accepted:B,declined:N,invited:Y}}),V=_e(()=>{const _=l.value;if(!_)return"";if(_.share_url)return _.share_url;const B=`${window.location.origin+window.location.pathname}#/preview/${_.guid||n.value}`;return _.join_slug?`${B}?s=${encodeURIComponent(_.join_slug)}`:B}),I=_e(()=>Number(l.value?.tournament_dollars||0)),U=_e(()=>{const _=l.value;return _?typeof _.entities?.count=="number"?_.entities.count:_.entities?.guids?.length||0:0}),j=_e(()=>l.value?.entities?.max||0),F=_e(()=>l.value?.matches_expanded?.length||0),G=_e(()=>{const _=l.value;return _?_.format?.on_going!==void 0?_.format.on_going:(_.tags||[]).some(x=>x.override_last_match_close===!0):!1}),C=_e(()=>{const _=l.value;return _?_.format?.odds_locked_at_start!==void 0?_.format.odds_locked_at_start:(_.tags||[]).some(x=>x.match_inprogress_lock===!0):!1}),A=_e(()=>{const _=l.value;if(!_)return null;if(_.trophies){const W=_.trophies.gold||0,L=_.trophies.silver||0,T=_.trophies.bronze||0;return W+L+T===0?null:{gold:W,silver:L,bronze:T}}const x=(_.tags||[]).find(W=>W.badge_gold!==void 0||W.badge_silver!==void 0||W.badge_bronze!==void 0);if(!x)return null;const B=x.badge_gold||0,N=x.badge_silver||0,Y=x.badge_bronze||0;return B+N+Y===0?null:{gold:B,silver:N,bronze:Y}}),S=_e(()=>{const _=r.value?.joined_players||l.value?.joined_players;return Array.isArray(_)?_:[]}),R=_e(()=>Math.max(0,U.value-S.value.length)),O=_e(()=>C.value?"Locked Odds":"Live Odds"),q=_e(()=>G.value?"On-going":"Fixed Slate"),Q=_e(()=>{const _=l.value;if(!_)return"Bet Max Tourney";const x=_.game_mode?.class||_.class||"DEFAULT_FORMAT";return x==="DEFAULT_FORMAT"?"Bet Max Tourney":_.game_mode?.label||x}),X=_e(()=>{if(K.value!=="UPCOMING")return"";const _=l.value;if(!_?.window_start_time)return"";let x=_.window_start_time;!x.includes("Z")&&!x.match(/[+-]\d{2}:\d{2}$/)&&(x+="Z");const B=new Date(x).getTime()-Date.now();if(B<=0)return"Starting now";const N=Math.floor(B/36e5),Y=Math.floor(B%36e5/6e4);return N>=24?`Starts in ${Math.floor(N/24)}d ${N%24}h`:N>0?`Starts in ${N}h ${Y}m`:Y>5?`Starts in ${Y}m`:"Starting soon"}),oe=_e(()=>F.value===0?"TBD":`${F.value}${G.value?"+":""}`),K=_e(()=>l.value?.status||""),se=_e(()=>K.value==="LOCKED"?"In Progress":K.value==="UPCOMING"?"Open for Entry":K.value==="COMPLETED"?"Completed":K.value),ee=_e(()=>K.value==="LOCKED"?"var(--status-locked-text, #F7C60D)":K.value==="UPCOMING"?"var(--status-upcoming-text, #00E676)":K.value==="COMPLETED"?"var(--status-completed-text, #CD5659)":"#fff"),ne=_e(()=>c.value?p.value?"View Tournament":K.value==="COMPLETED"?"View Results":K.value==="LOCKED"?"View Tournament":l.value?.is_private===!0?"Join Bet Max Pool":"Join Tournament":"Sign Up to Join"),z=()=>{c.value?t.push({name:"home_route"}):t.push({name:"signin_route"})},te=()=>{if(l.value){if(!c.value){Gf(n.value,o.value),t.push({name:"signup_route"});return}if(p.value||K.value!=="UPCOMING"){t.push({name:"play_route",query:{guid:n.value,action:"INFO"}});return}de.publish(s.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:n.value,ts:Date.now()}))}},Z=async()=>{const _=V.value;if(!_)return;const x=l.value?.caption||"Join my tournament",B=`You're invited to join ${x} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:x,text:B,url:_});return}catch(N){if(N?.name==="AbortError")return}try{await navigator.clipboard.writeText(_),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(N){console.warn("[preview_route] clipboard write failed:",N),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Long-press to copy: "+_,"danger")}},re=_e(()=>{const _=l.value;return _?(_.game_mode?.class||_.game_mode_class||"DEFAULT_FORMAT")==="DEFAULT_FORMAT":!0}),ie=_=>{if(!_)return"TBD";let x=new Date(_);if(!_.includes("Z")&&!_.match(/[+-]\d{2}:\d{2}$/)&&(x=new Date(_+"Z")),isNaN(x.getTime()))return"TBD";const B=re.value?{weekday:"short",month:"short",day:"numeric"}:{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return x.toLocaleString(void 0,B)},y=async()=>{if(n.value){i.value="loading";try{const{data:_,status:x,ok:B}=await xe.fetchTournamentPreview(n.value,o.value);B&&_?(r.value=_,i.value="ok"):x===404?i.value="not_found":x===410?i.value="archived":i.value="error"}catch(_){console.warn("[preview_route] fetchTournamentPreview failed:",_),i.value="error"}}},P=_e(()=>{switch(i.value){case"loading":return"Loading tournament…";case"not_found":return"This tournament doesn't exist or the link is wrong.";case"archived":return"This tournament has ended and been archived.";case"error":return"Couldn't load this tournament. Please try again.";default:return"Tournament details aren't available yet."}});return it(()=>{document.body.classList.add("route-tournament-preview"),y(),setTimeout(()=>D(),0),v=de.subscribe(s.hierTopics.SSE__CORE__INVITE_SYNC,(_,x)=>{try{const B=JSON.parse(x),N=JSON.parse(B.msg),{invite:Y,action:W}=N?.[0]||{};if(!Y?.guid||Y.tournament_guid!==n.value)return;const L=m.value.findIndex(T=>T.guid===Y.guid);if(W==="accepted"||W==="declined"||W==="expired"){if(L>=0){const T=[...m.value];T[L]={...T[L],...Y},m.value=T}}else W==="revoked"&&L>=0&&(m.value=m.value.filter(T=>T.guid!==Y.guid))}catch(B){console.warn("[preview_route] INVITE_SYNC handler error:",B)}})}),Xt(()=>{document.body.classList.remove("route-tournament-preview"),v&&de.unsubscribe(v)}),(_,x)=>(pe(),fe("main",$b,[b("div",Ib,[b("div",{class:"head-caption__back",onClick:z,role:"button",tabindex:"0","aria-label":"Back"},[...x[1]||(x[1]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),b("section",Nb,[b("h3",Bb,be(l.value?.caption||"Tournament"),1),b("p",Fb,be(l.value?.tagline||(u.value?"You're invited to a tournament":"")),1)])]),l.value?(pe(),fe("div",zb,[u.value?(pe(),fe("div",Hb,[...x[2]||(x[2]=[b("img",{class:"preview-invite-band__logo",src:"https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&format=png",alt:"Bet Max Tourney"},null,-1),b("div",{class:"preview-invite-band__text"},[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[b("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})]),b("span",null,"You're invited to join this tournament")],-1)])])):Te("",!0),b("div",Ub,[b("div",Gb,[x[3]||(x[3]=b("span",{class:"info-summary-pack__stat-label"},"Starting TD$",-1)),b("span",jb,"TD$ "+be(I.value.toLocaleString()),1)]),b("div",Vb,[x[4]||(x[4]=b("span",{class:"info-summary-pack__stat-label"},"Players",-1)),b("span",qb,be(U.value)+" / "+be(j.value),1)]),b("div",Yb,[x[5]||(x[5]=b("span",{class:"info-summary-pack__stat-label"},"Games",-1)),b("span",Kb,be(oe.value),1)])]),b("div",Wb,[b("div",Jb,[b("div",Xb,[x[6]||(x[6]=b("span",{class:"info-progress-status__label"},"Status",-1)),b("span",{class:"info-progress-status__value",style:un({color:ee.value})},be(se.value),5)]),X.value?(pe(),fe("div",Qb,be(X.value),1)):Te("",!0)]),x[9]||(x[9]=b("div",{class:"info-progress-divider"},null,-1)),b("div",Zb,[b("div",null,[x[7]||(x[7]=b("span",{class:"info-progress-status__label"},"Starts",-1)),b("span",e_,be(ie(l.value.window_start_time)),1)]),b("div",null,[x[8]||(x[8]=b("span",{class:"info-progress-status__label"},"Ends (est.)",-1)),b("span",t_,be(ie(l.value.window_end_time)),1)])])]),S.value.length>0?(pe(),fe("div",a_,[b("div",s_,[x[10]||(x[10]=b("span",{class:"preview-section-label"},"Who's In",-1)),b("span",n_,[Be(be(U.value)+" joined",1),f.value&&M.value.invited>0?(pe(),fe(Ie,{key:0},[Be(" · "+be(M.value.invited)+" invited",1)],64)):Te("",!0)])]),b("div",o_,[(pe(!0),fe(Ie,null,zt(S.value,B=>(pe(),fe("div",{class:"preview-player-chip",key:B.username},[b("div",r_,be((B.username||"?").charAt(0).toUpperCase()),1),b("span",i_,be(B.username),1)]))),128)),R.value>0?(pe(),fe("div",l_," +"+be(R.value)+" more ",1)):Te("",!0)])])):Te("",!0),A.value?(pe(),fe("div",c_,[x[17]||(x[17]=b("span",{class:"preview-section-label"},"Trophies",-1)),b("div",d_,[A.value.silver>0?(pe(),fe("div",u_,[x[11]||(x[11]=b("div",{class:"preview-trophy-img"},null,-1)),b("span",p_,"×"+be(A.value.silver),1),x[12]||(x[12]=b("span",{class:"preview-trophy-place"},"2nd",-1))])):Te("",!0),A.value.gold>0?(pe(),fe("div",f_,[x[13]||(x[13]=b("div",{class:"preview-trophy-img preview-trophy-img--lg"},null,-1)),b("span",h_,"×"+be(A.value.gold),1),x[14]||(x[14]=b("span",{class:"preview-trophy-place"},"1st",-1))])):Te("",!0),A.value.bronze>0?(pe(),fe("div",g_,[x[15]||(x[15]=b("div",{class:"preview-trophy-img"},null,-1)),b("span",m_,"×"+be(A.value.bronze),1),x[16]||(x[16]=b("span",{class:"preview-trophy-place"},"3rd",-1))])):Te("",!0)])])):Te("",!0),b("div",b_,[b("div",__,[x[18]||(x[18]=b("span",{class:"preview-legend-label"},"Odds Format",-1)),b("span",v_,be(O.value),1)]),b("div",y_,[x[19]||(x[19]=b("span",{class:"preview-legend-label"},"Format",-1)),b("span",w_,be(q.value),1)]),b("div",x_,[x[20]||(x[20]=b("span",{class:"preview-legend-label"},"Game Mode",-1)),b("span",T_,be(Q.value),1)]),x[21]||(x[21]=b("div",{class:"preview-legend-item"},[b("span",{class:"preview-legend-label"},"Entry"),b("span",{class:"preview-legend-value",style:{color:"var(--status-upcoming-text, #00E676)"}},"Free")],-1))]),f.value&&l.value?.is_private===!0?(pe(),fe("div",k_,[b("div",S_,[x[22]||(x[22]=b("span",{class:"preview-section-label"},"Invite players",-1)),M.value.pending+M.value.accepted+M.value.declined>0?(pe(),fe("span",E_,[M.value.pending>0?(pe(),fe(Ie,{key:0},[Be(be(M.value.pending)+" pending",1)],64)):Te("",!0),M.value.accepted>0?(pe(),fe(Ie,{key:1},[M.value.pending>0?(pe(),fe(Ie,{key:0},[Be(" · ")],64)):Te("",!0),Be(" "+be(M.value.accepted)+" accepted ",1)],64)):Te("",!0),M.value.declined>0?(pe(),fe(Ie,{key:2},[M.value.pending>0||M.value.accepted>0?(pe(),fe(Ie,{key:0},[Be(" · ")],64)):Te("",!0),Be(" "+be(M.value.declined)+" declined ",1)],64)):Te("",!0)])):Te("",!0)]),b("form",{class:"invite-form",onSubmit:Ea(E,["prevent"]),autocomplete:"off"},[Lt(b("input",{type:"text",class:"invite-form__input","onUpdate:modelValue":x[0]||(x[0]=B=>g.value=B),disabled:h.value,placeholder:"User Name or Email",name:"invite-recipient",autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off","data-lpignore":"true","data-1p-ignore":"true","data-form-type":"other"},null,8,A_),[[Bs,g.value]]),b("button",{type:"submit",class:"invite-form__btn",disabled:h.value||!g.value.trim()},be(h.value?"Sending...":"Send"),9,C_)],32),k.value?(pe(),fe("p",O_,be(k.value),1)):(pe(),fe("p",P_," Goes to their in-app inbox. For friends not on BMA yet, use the Share link below. ")),m.value.length>0?(pe(),fe("div",L_,[(pe(!0),fe(Ie,null,zt(m.value,B=>(pe(),fe("div",{class:"invite-sent-row",key:B.guid},[b("div",M_,[b("span",D_,be(B.invitee_display_name||B.invitee_user_name||"Invitee"),1),b("span",{class:qe(["invite-sent-row__status","invite-sent-row__status--"+(B.status||"pending").toLowerCase()])},be((B.status||"PENDING").toLowerCase()),3)]),(B.status||"").toUpperCase()==="PENDING"?(pe(),fe("button",{key:0,class:"invite-sent-row__revoke",type:"button",onClick:N=>$(B.guid),"aria-label":"Revoke invite to "+(B.invitee_display_name||"invitee")},"Revoke",8,R_)):Te("",!0)]))),128))])):Te("",!0)])):Te("",!0),b("div",$_,[f.value?(pe(),fe("button",{key:0,class:"preview-share-btn",onClick:Z,"aria-label":"Share invite link"},[...x[23]||(x[23]=[b("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[b("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})],-1),b("span",null,"Share Invite Link",-1)])])):Te("",!0),b("button",{class:"preview-cta-btn",onClick:te},be(ne.value),1),u.value?(pe(),fe("p",I_," Sign up is quick. You'll come right back to join. ")):f.value?(pe(),fe("p",N_," You're the host. Share the link to fill your lobby. ")):Te("",!0)])])):(pe(),fe("div",B_,[b("p",null,be(P.value),1),i.value!=="loading"?(pe(),fe("button",{key:0,class:"preview-empty-btn",onClick:z},"Back")):Te("",!0)]))]))}},z_={class:"create-cntr"},H_={class:"create-steps"},U_=["onClick"],G_={class:"create-steps__num"},j_={class:"create-steps__label"},V_={class:"create-wrap"},q_={key:0,class:"create-banner create-banner--error"},Y_={key:1,class:"create-step"},K_={key:0,class:"create-banner create-banner--gate",role:"status"},W_={class:"create-banner__msg"},J_={class:"create-field"},X_={key:0,class:"create-field__hint"},Q_={key:1,class:"create-field__hint create-field__hint--muted"},Z_={class:"create-field"},e0={key:0,class:"create-field__hint"},t0={key:1,class:"create-field__hint create-field__hint--muted"},a0={class:"create-field"},s0=["data-offset","onClick"],n0={class:"create-day-chip__dow"},o0={class:"create-day-chip__date"},r0={key:0,class:"create-day-chip__tag"},i0={class:"create-field"},l0={class:"create-chip-row"},c0=["onClick"],d0={key:0,class:"create-field__hint"},u0={key:1,class:"create-field__hint create-field__hint--muted"},p0={key:1,class:"create-duration"},f0={class:"create-duration__range"},h0={class:"create-duration__day"},g0={class:"create-duration__day"},m0={class:"create-duration__num-row"},b0={class:"create-duration__num"},_0={class:"create-duration__label"},v0={key:2,class:"create-step"},y0={class:"create-mode-list"},w0=["disabled","aria-disabled","title","onClick"],x0={class:"create-mode__head"},T0={class:"create-mode__title"},k0={class:"create-mode__desc"},S0={key:0,class:"create-mode__check","aria-hidden":"true"},E0={key:1,class:"create-mode__lock","aria-hidden":"true"},A0={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},C0={key:3,class:"create-step"},P0={class:"create-sports-header"},O0={class:"create-sports-counter__num"},L0={class:"create-sport-picker"},M0=["disabled","onClick"],D0={class:"create-sport-pick__icon"},R0=["sport","data-sport-group"],$0={class:"create-sport-pick__title"},I0={key:0,class:"create-sport-pick__check","aria-hidden":"true"},N0={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},B0={key:1,class:"create-slate"},F0={class:"create-slate__rows"},z0={class:"create-slate-row__icon"},H0=["sport","data-sport-group"],U0={class:"create-slate-row__main"},G0={class:"create-slate-row__title"},j0={key:0,class:"create-slate-row__status"},V0={key:1,class:"create-slate-row__status create-slate-row__status--muted"},q0=["aria-label","onClick"],Y0={key:0,class:"create-slate__footnote"},K0={key:1,class:"create-slate__footnote create-slate__footnote--muted"},W0={key:4,class:"create-step"},J0={class:"create-field"},X0={key:0,class:"create-field__hint"},Q0={key:1,class:"create-field__hint create-field__hint--muted"},Z0={class:"create-toggle"},ev={key:5,class:"create-step"},tv={class:"create-review-card"},av={class:"create-review-row"},sv={class:"create-review-value"},nv={key:0,class:"create-review-row"},ov={class:"create-review-value"},rv={class:"create-review-row"},iv={class:"create-review-value"},lv={class:"create-review-row"},cv={class:"create-review-value"},dv={class:"create-review-row"},uv={class:"create-review-value"},pv={class:"create-review-row"},fv={class:"create-review-value"},hv={class:"create-nav"},gv=["disabled"],mv=["disabled"],bv=["disabled"],Xn=7,_v=28,fi=2,vv={__name:"create_tournament_route",setup(e){const t=lt(),a=ke(),s=[{id:1,label:"Basics"},{id:2,label:"Game Mode"},{id:3,label:"Sports"},{id:4,label:"Players"},{id:5,label:"Review"}],n=Pe(1),o=Pe({tokens:[],modes:{},tiers:{role_to_tier:{},allowed_modes:{}}}),r=_e(()=>{const L=a.appSession?.session_user?.class;if(typeof window<"u"&&window.GameTypeLifeCycle?.forToken){const T=window.GameTypeLifeCycle.forToken("DEFAULT_FORMAT");if(T&&typeof T.resolveUserTier=="function")return T.resolveUserTier(L)}return"basic"}),i=_e(()=>{const L=o.value.tokens||[],T=o.value.modes||{},H=r.value;return L.map(ae=>{const ce=T[ae]||{},he=(Array.isArray(ce.tiers)?ce.tiers:[]).includes(H),le=he?ce.beta?"Beta":ae==="DEFAULT_FORMAT"?"The classic":"":"Requires Premium";return{key:ae,title:ce.label||ae,tagline:le,description:ce.description||"",available:he,beta:!!ce.beta,betaMessage:ce.betaMessage||""}})});async function l(){try{const L=window.BMACOREAPI?.API_baseURI&&window.BMACOREAPI?.API_ver?`${window.BMACOREAPI.API_baseURI}/m5t/${window.BMACOREAPI.API_ver}`:"https://machfive-bmacdev-rest.onrender.com/m5t/v5",T=await fetch(`${L}/meta/game-modes`);if(!T.ok)throw new Error(`HTTP ${T.status}`);const H=await T.json();H&&H.ok&&H.modes&&Array.isArray(H.tokens)&&(o.value={tokens:H.tokens,modes:H.modes,tiers:H.tiers||{role_to_tier:{},allowed_modes:{}}})}catch(L){console.warn("[create_tournament_route] /meta/game-modes load failed:",L?.message),o.value={tokens:["DEFAULT_FORMAT"],modes:{DEFAULT_FORMAT:{token:"DEFAULT_FORMAT",label:"Bet Max Tourney",description:"Free-form picks throughout the tournament window.",beta:!1,betaMessage:null,tiers:["basic","premium"]}},tiers:{role_to_tier:{},allowed_modes:{basic:["DEFAULT_FORMAT"],premium:["*"]}}}}}const c=_e(()=>{const L=a.appSession?.session_user?.guid;if(!L)return null;const T=a.coreTourn?.length?a.coreTourn[a.coreTourn.length-1]:null;return T&&(T.data||[]).find(ae=>{if(!ae?.creator_guid||ae.creator_guid!==L||ae.is_private!==!0)return!1;const ce=ae.status||ae.class;return ce==="UPCOMING"||ce==="LOCKED"})||null}),u=_e(()=>{const L=c.value?.window_end_time;if(!L)return"";let T=new Date(L);return!L.includes("Z")&&!L.match(/[+-]\d{2}:\d{2}$/)&&(T=new Date(L+"Z")),isNaN(T.getTime())?"":T.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}),d=_e(()=>{const L=a.appSession?.session_user||{};return L.first||L.username||"My"}),p=_e(()=>{const L=new Date().toLocaleString(void 0,{month:"long"});return`${d.value}'s ${L} Pool`}),f=L=>{const T=H=>String(H).padStart(2,"0");return`${L.getFullYear()}-${T(L.getMonth()+1)}-${T(L.getDate())}`},g=(()=>{const L=new Date;return L.setHours(0,0,0,0),L})(),h=(L,T)=>{const H=new Date(L.getTime());return H.setDate(H.getDate()+T),H},k=Array.from({length:_v},(L,T)=>T),m=L=>h(g,L),v=L=>L.toLocaleDateString(void 0,{weekday:"short"}),w=L=>L.toLocaleDateString(void 0,{month:"short",day:"numeric"}),E=L=>L===0?"Today":L===1?"Tomorrow":"",$=[{key:1,label:"1 day"},{key:2,label:"2 days"},{key:3,label:"3 days"},{key:5,label:"5 days"},{key:7,label:"7 days"}],D=(()=>{const L=(6-g.getDay()+7)%7;return L===0?0:L})(),M=Pe({caption:p.value,tagline:"",sportKeys:[],gameMode:"DEFAULT_FORMAT",startOffset:D,lengthDays:3,maxEntrants:10,creatorParticipating:!0}),V=L=>{const T=i.value.find(H=>H.key===L);!T||!T.available||(M.value.gameMode=L)},I=_e(()=>f(h(g,M.value.startOffset))),U=_e(()=>{const L=M.value.startOffset+Math.max(1,M.value.lengthDays)-1;return f(h(g,L))}),j=Pe(typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`draft_${crypto.randomUUID()}`:`draft_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`),F=Pe(!1),G=Pe(""),C=Pe({}),A=Pe(null),S=(L,T=!1)=>{if(!L)return"";const[H,ae,ce]=L.split("-").map(Number);return new Date(H,(ae||1)-1,ce||1,T?23:0,T?59:0,0,0).toISOString()},R=_e(()=>S(I.value,!1)),O=_e(()=>S(U.value,!0)),q=L=>{if(!L)return"";const[T,H,ae]=L.split("-").map(Number);return new Date(T,(H||1)-1,ae||1).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})},Q=L=>{if(!L)return NaN;const[T,H,ae]=L.split("-").map(Number);return new Date(T,(H||1)-1,ae||1,0,0,0,0).getTime()},X=_e(()=>{if(!I.value||!U.value)return 0;const L=Q(I.value),T=Q(U.value);return isNaN(L)||isNaN(T)?0:Math.max(1,Math.round((T-L)/(24*3600*1e3))+1)}),oe=_e(()=>{const L=new Set,T=[],H=a.coreTourn?.length?a.coreTourn[a.coreTourn.length-1]:null;if(!H)return T;for(const ae of H.data||[]){const ce=Array.isArray(ae.matches_expanded)?ae.matches_expanded:[];for(const ge of ce){const he=ge.guid||ge.odds_id||ge.id;!he||L.has(he)||(L.add(he),T.push(ge))}}return T}),K=L=>{if(!L||!R.value||!O.value)return 0;const T=new Date(R.value).getTime(),H=new Date(O.value).getTime();return oe.value.reduce((ae,ce)=>{if(ce.sport_id!==L)return ae;const ge=ce.scheduled_at||"";let he=new Date(ge);!ge.includes("Z")&&!ge.match(/[+-]\d{2}:\d{2}$/)&&(he=new Date(ge+"Z"));const le=he.getTime();return isNaN(le)?ae:le>=T&&le<=H?ae+1:ae},0)},se=_e(()=>(a.appMeta?.sports||[]).filter(T=>T.active===!0&&!T.has_outrights).map(T=>({key:T.key,title:T.title||T.description||T.key,group:T.group||"default"})).sort((T,H)=>T.title.localeCompare(H.title))),ee=L=>se.value.find(T=>T.key===L)||{key:L,title:L,group:"default"},ne=_e(()=>M.value.sportKeys.length>=fi),z=L=>{const T=M.value.sportKeys.indexOf(L);if(T>=0){M.value.sportKeys.splice(T,1);return}if(M.value.sportKeys.length>=2){G.value="Free tier is limited to 2 sports. Deselect one first.";return}M.value.sportKeys.push(L)},te=L=>M.value.sportKeys.includes(L),Z=_e(()=>M.value.sportKeys.reduce((L,T)=>L+K(T),0)),re=_e(()=>{const L={},T=Q(I.value),H=Q(U.value),ae=g.getTime();isNaN(T)?L.window="Pick a start day.":T<ae&&(L.window="Start day can't be in the past."),isNaN(H)?L.window=L.window||"Pick a length.":T&&H<T&&(L.window="End day must be on or after the start day."),M.value.lengthDays>Xn&&(L.window=`Free tier contests max out at ${Xn} days.`);const ce=(M.value.caption||"").trim();(ce.length<3||ce.length>60)&&(L.caption="Name must be 3 to 60 characters."),(M.value.tagline||"").trim().length>120&&(L.tagline="Tagline max is 120 characters.");const he=i.value.find(me=>me.key===M.value.gameMode);(!he||!he.available)&&(L.mode="Pick a game mode."),M.value.sportKeys.length<1&&(L.sports="Pick at least one sport."),M.value.sportKeys.length>2&&(L.sports="Free tier is limited to 2 sports.");const le=Number(M.value.maxEntrants);return le>=2&&le<=10||(L.max="Max entrants must be between 2 and 10."),L}),ie=L=>{const T=re.value;return L===1?!T.window&&!T.caption&&!T.tagline:L===2?!T.mode:L===3?!T.sports:L===4?!T.max:L===5?!T.window&&!T.caption&&!T.tagline&&!T.mode&&!T.sports&&!T.max:!0},y=_e(()=>ie(n.value)),P=()=>{if(G.value="",!y.value){G.value="Please complete this step before moving on.",C.value=re.value;return}C.value={},n.value<s.length&&n.value++},_=()=>{G.value="",C.value={},n.value>1&&n.value--},x=L=>{L<n.value&&(n.value=L,G.value="",C.value={})},B=()=>({caption:M.value.caption.trim(),tagline:M.value.tagline.trim()||void 0,sports_allowed:M.value.sportKeys.map(L=>({key:L})),window_start_time:R.value,window_end_time:O.value,entities:{max:Number(M.value.maxEntrants)},creator_participating:M.value.creatorParticipating,game_mode_class:M.value.gameMode,client_draft_id:j.value}),N=L=>{console.warn("[create_tournament_route] server rejected create:",{httpStatus:L?.status,ok:L?.ok,data:L?.data});const T=L?.data?.error||`http_${L?.status||"unknown"}`,H=L?.data?.reason?` (${L.data.reason})`:"",ae=L?.data?.message||L?.data?.detail||"";switch(T){case"invalid_caption":return C.value.caption=`Name rejected${H}.`,n.value=1,"Please fix the tournament name.";case"invalid_tagline":return C.value.tagline=`Tagline rejected${H}.`,n.value=1,"Please fix the tagline.";case"invalid_sports":return C.value.sports=`Sports rejected${H}.`,n.value=3,"Please review your sport selection.";case"invalid_window":return C.value.window=`Window rejected${H}.`,n.value=1,"Please review the tournament window.";case"invalid_max_entrants":return C.value.max="Max entrants rejected.",n.value=4,"Max entrants must be between 2 and 10.";case"invalid_request_shape":return`Request rejected as malformed${ae?": "+ae:""}.`;case"active_limit_reached":return"You already have an active contest. Cancel or finish it first.";case"tier_gate_violation":return`That option isn't available on the free tier yet${L?.data?.field?` (${L.data.field})`:""}.`;case"rate_limited":return"Too many create attempts. Try again in a bit.";case"unauthenticated":return"Your session expired. Please sign in again.";case"internal":return"Server error. Please try again in a moment.";default:return`Server said: ${T}${ae?" · "+ae:""}`}},Y=async()=>{if(G.value="",C.value={},!ie(5)){G.value="Please check all steps before publishing.",C.value=re.value;return}F.value=!0;try{const L=B();console.log("[create_tournament_route] POST /m5t/v5/tournament payload:",L);const T=await xe.createTournament(L);if(console.log("[create_tournament_route] response:",T),T.ok&&T.data?.tournament){const H=T.data.tournament;a.pushCoreTourn({timestamp:Date.now(),source:"API",data:[H]}),typeof neodigmToast<"u"&&neodigmToast.q("Tournament created. Share the link to invite friends.","success"),t.push({name:"preview_route",params:{guid:H.guid},query:H.join_slug?{s:H.join_slug}:void 0});return}G.value=N(T)}catch(L){console.warn("[create_tournament_route] createTournament failed:",L),G.value="Network error. Please try again."}finally{F.value=!1}},W=()=>t.push({name:"home_route"});return it(()=>{document.body.classList.add("route-create-tournament"),window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),l();try{window.GameTypeLifeCycle&&window.GameTypeLifeCycle.forTournament({class:M.value.gameMode}).doBeforeTournamentCreate({tournament:{class:M.value.gameMode,status:"DRAFT"}}).catch(T=>console.warn("[create_tournament_route] doBeforeTournamentCreate failed (non-fatal):",T?.message))}catch{}requestAnimationFrame(()=>{const L=A.value;if(!L)return;const T=L.querySelector(`[data-offset="${M.value.startOffset}"]`);if(T){const H=T.offsetLeft-L.clientWidth/2+T.offsetWidth/2;L.scrollLeft=Math.max(0,H)}})}),Xt(()=>{document.body.classList.remove("route-create-tournament")}),(()=>{const L=new Date;return L.setHours(0,0,0,0),f(L)})(),(L,T)=>(pe(),fe("main",z_,[b("div",{class:"create-header"},[b("button",{class:"create-header__back",onClick:W,"aria-label":"Back to home"},[...T[4]||(T[4]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),T[5]||(T[5]=b("h1",{class:"create-header__title"},"Create a Tournament",-1))]),b("div",H_,[(pe(),fe(Ie,null,zt(s,H=>b("div",{key:H.id,class:qe(["create-steps__dot",{"create-steps__dot--active":H.id===n.value,"create-steps__dot--complete":H.id<n.value}]),onClick:ae=>x(H.id)},[b("span",G_,be(H.id),1),b("span",j_,be(H.label),1)],10,U_)),64))]),b("div",V_,[G.value?(pe(),fe("div",q_,be(G.value),1)):Te("",!0),n.value===1?(pe(),fe("section",Y_,[c.value?(pe(),fe("div",K_,[T[6]||(T[6]=b("span",{class:"create-banner__tag create-banner__tag--gate"},"ACTIVE POOL",-1)),b("span",W_,[b("strong",null,be(c.value.caption||"Your pool"),1),Be(" is still running"+be(u.value?` through ${u.value}`:"")+". Free tier runs one pool at a time, so your next one opens up as soon as this one wraps. ",1)])])):Te("",!0),T[12]||(T[12]=b("div",{class:"create-banner create-banner--dev",role:"status"},[b("span",{class:"create-banner__tag"},"BETA"),b("span",{class:"create-banner__msg"},"Feature in active development.")],-1)),T[13]||(T[13]=b("h4",{class:"create-step__heading"},"Name it and set the window",-1)),T[14]||(T[14]=b("p",{class:"create-step__hint"},"Quick setup: a name for the invite, a start day, and how long it runs.",-1)),b("label",J_,[T[7]||(T[7]=b("span",{class:"create-field__label"},"Name",-1)),Lt(b("input",{type:"text","onUpdate:modelValue":T[0]||(T[0]=H=>M.value.caption=H),maxlength:"60",placeholder:"Name your tournament",autocapitalize:"words",autocomplete:"off",enterkeyhint:"next",class:qe(["create-field__input",{"create-field__input--error":C.value.caption}])},null,2),[[Bs,M.value.caption]]),C.value.caption?(pe(),fe("span",X_,be(C.value.caption),1)):(pe(),fe("span",Q_,be((M.value.caption||"").length)+" / 60",1))]),b("label",Z_,[T[8]||(T[8]=b("span",{class:"create-field__label"},[Be("Tagline "),b("span",{class:"create-field__optional"},"(optional)")],-1)),Lt(b("input",{type:"text","onUpdate:modelValue":T[1]||(T[1]=H=>M.value.tagline=H),maxlength:"120",placeholder:"One line about your contest",autocapitalize:"sentences",autocomplete:"off",enterkeyhint:"next",class:qe(["create-field__input",{"create-field__input--error":C.value.tagline}])},null,2),[[Bs,M.value.tagline]]),C.value.tagline?(pe(),fe("span",e0,be(C.value.tagline),1)):(pe(),fe("span",t0,be((M.value.tagline||"").length)+" / 120",1))]),b("div",a0,[T[9]||(T[9]=b("span",{class:"create-field__label"},"Starts",-1)),b("div",{class:"create-day-scroller",ref_key:"dayScrollerEl",ref:A},[(pe(!0),fe(Ie,null,zt(ot(k),H=>(pe(),fe("button",{key:H,type:"button",class:qe(["create-day-chip",{"create-day-chip--on":M.value.startOffset===H}]),"data-offset":H,onClick:ae=>M.value.startOffset=H},[b("span",n0,be(v(m(H))),1),b("span",o0,be(w(m(H))),1),E(H)?(pe(),fe("span",r0,be(E(H)),1)):Te("",!0)],10,s0))),128))],512)]),b("div",i0,[T[10]||(T[10]=b("span",{class:"create-field__label"},"Length",-1)),b("div",l0,[(pe(),fe(Ie,null,zt($,H=>b("button",{key:H.key,type:"button",class:qe(["create-chip",{"create-chip--on":M.value.lengthDays===H.key}]),onClick:ae=>M.value.lengthDays=H.key},be(H.label),11,c0)),64))]),C.value.window?(pe(),fe("span",d0,be(C.value.window),1)):(pe(),fe("span",u0,"Free tier runs up to "+be(Xn)+" days."))]),X.value>0?(pe(),fe("div",p0,[b("div",f0,[b("span",h0,be(q(I.value)),1),T[11]||(T[11]=b("span",{class:"create-duration__arrow"},"→",-1)),b("span",g0,be(q(U.value)),1)]),b("div",m0,[b("span",b0,be(X.value),1),b("span",_0,be(X.value===1?"day":"days")+" of play",1)])])):Te("",!0)])):Te("",!0),n.value===2?(pe(),fe("section",v0,[T[17]||(T[17]=b("h4",{class:"create-step__heading"},"Choose a game mode",-1)),T[18]||(T[18]=b("p",{class:"create-step__hint"}," Modes available to you depend on your tier. Locked tiles are available with Premium. ",-1)),b("div",y0,[(pe(!0),fe(Ie,null,zt(i.value,H=>(pe(),fe("button",{key:H.key,type:"button",class:qe(["create-mode",{"create-mode--on":M.value.gameMode===H.key&&H.available,"create-mode--disabled":!H.available}]),disabled:!H.available,"aria-disabled":!H.available,title:H.available?H.betaMessage||"":"Requires Premium",onClick:ae=>V(H.key)},[b("div",x0,[b("span",T0,be(H.title),1),b("span",{class:qe(["create-mode__tagline",{"create-mode__tagline--soon":!H.available,"create-mode__tagline--beta":H.available&&H.beta}])},be(H.tagline),3)]),b("p",k0,be(H.description),1),M.value.gameMode===H.key&&H.available?(pe(),fe("span",S0,[...T[15]||(T[15]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"20 6 9 17 4 12"})],-1)])])):Te("",!0),H.available?Te("",!0):(pe(),fe("span",E0,[...T[16]||(T[16]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[b("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),b("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)])]))],10,w0))),128))]),C.value.mode?(pe(),fe("span",A0,be(C.value.mode),1)):Te("",!0)])):Te("",!0),n.value===3?(pe(),fe("section",C0,[b("div",P0,[T[20]||(T[20]=b("div",null,[b("h4",{class:"create-step__heading",style:{"margin-bottom":"4px"}},"Pick your sports"),b("p",{class:"create-step__hint",style:{margin:"0"}},"Tap a chip to add it. Games scheduled during your window will be added automatically as odds post.")],-1)),b("div",{class:qe(["create-sports-counter",{"create-sports-counter--max":ne.value}])},[b("span",O0,be(M.value.sportKeys.length),1),T[19]||(T[19]=b("span",{class:"create-sports-counter__divider"},"/",-1)),b("span",{class:"create-sports-counter__max"},be(fi))],2)]),b("div",L0,[(pe(!0),fe(Ie,null,zt(se.value,H=>(pe(),fe("button",{key:H.key,type:"button",class:qe(["create-sport-pick",{"create-sport-pick--on":te(H.key),"create-sport-pick--disabled":ne.value&&!te(H.key)}]),disabled:ne.value&&!te(H.key),onClick:ae=>z(H.key)},[b("span",D0,[b("bma-sport-icon",{sport:H.key,"data-sport-group":H.group},null,8,R0)]),b("span",$0,be(H.title),1),te(H.key)?(pe(),fe("span",I0,[...T[21]||(T[21]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"20 6 9 17 4 12"})],-1)])])):Te("",!0)],10,M0))),128))]),C.value.sports?(pe(),fe("span",N0,be(C.value.sports),1)):Te("",!0),M.value.sportKeys.length>0?(pe(),fe("div",B0,[T[23]||(T[23]=b("div",{class:"create-slate__label"},"Your slate",-1)),b("div",F0,[(pe(!0),fe(Ie,null,zt(M.value.sportKeys,H=>(pe(),fe("div",{key:H,class:"create-slate-row"},[b("span",z0,[b("bma-sport-icon",{sport:H,"data-sport-group":ee(H).group},null,8,H0)]),b("div",U0,[b("span",G0,be(ee(H).title),1),K(H)>0?(pe(),fe("span",j0,be(K(H))+" game"+be(K(H)===1?"":"s")+" available this window",1)):(pe(),fe("span",V0," Games will be added when odds post "))]),b("button",{class:"create-slate-row__remove",type:"button","aria-label":"Remove "+ee(H).title,onClick:ae=>z(H)},[...T[22]||(T[22]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),b("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,q0)]))),128))]),Z.value>0?(pe(),fe("div",Y0,be(Z.value)+" game"+be(Z.value===1?"":"s")+" already on the slate · more added during the tournament. ",1)):(pe(),fe("div",K0," No games are on the slate yet. They'll populate as odds post. "))])):Te("",!0)])):Te("",!0),n.value===4?(pe(),fe("section",W0,[T[26]||(T[26]=b("h4",{class:"create-step__heading"},"How many players?",-1)),T[27]||(T[27]=b("p",{class:"create-step__hint"},"Up to 10 on the free tier. You're in by default — toggle off if you're just hosting.",-1)),b("label",J0,[T[24]||(T[24]=b("span",{class:"create-field__label"},"Max Entrants",-1)),Lt(b("input",{type:"number",min:"2",max:"10",inputmode:"numeric",pattern:"[0-9]*","onUpdate:modelValue":T[2]||(T[2]=H=>M.value.maxEntrants=H),class:qe(["create-field__input create-field__input--num",{"create-field__input--error":C.value.max}])},null,2),[[Bs,M.value.maxEntrants,void 0,{number:!0}]]),C.value.max?(pe(),fe("span",X0,be(C.value.max),1)):(pe(),fe("span",Q0,"Free tier max is 10."))]),b("label",Z0,[Lt(b("input",{type:"checkbox","onUpdate:modelValue":T[3]||(T[3]=H=>M.value.creatorParticipating=H)},null,512),[[Ml,M.value.creatorParticipating]]),T[25]||(T[25]=b("span",null,"I'm playing in this tournament",-1))]),T[28]||(T[28]=b("p",{class:"create-step__note"}," You'll be able to invite friends by User Name or Email once your pool is published. Look for the Invite panel on the pool's info page. ",-1))])):Te("",!0),n.value===5?(pe(),fe("section",ev,[T[36]||(T[36]=b("h4",{class:"create-step__heading"},"Ready to publish?",-1)),T[37]||(T[37]=b("p",{class:"create-step__hint"},"Here's what your invitees will see. Tap any step number above to edit.",-1)),b("div",tv,[b("div",av,[T[29]||(T[29]=b("span",{class:"create-review-label"},"Name",-1)),b("span",sv,be(M.value.caption),1)]),M.value.tagline?(pe(),fe("div",nv,[T[30]||(T[30]=b("span",{class:"create-review-label"},"Tagline",-1)),b("span",ov,be(M.value.tagline),1)])):Te("",!0),b("div",rv,[T[31]||(T[31]=b("span",{class:"create-review-label"},"Dates",-1)),b("span",iv,be(q(I.value))+" → "+be(q(U.value)),1)]),b("div",lv,[T[32]||(T[32]=b("span",{class:"create-review-label"},"Sports",-1)),b("span",cv,[(pe(!0),fe(Ie,null,zt(M.value.sportKeys,H=>(pe(),fe("span",{key:H,class:"create-review-pill"},be((se.value.find(ae=>ae.key===H)||{}).title||H)+" · "+be(K(H)),1))),128))])]),b("div",dv,[T[33]||(T[33]=b("span",{class:"create-review-label"},"Players",-1)),b("span",uv,"Up to "+be(M.value.maxEntrants)+" · "+be(M.value.creatorParticipating?"you're in":"hosting only"),1)]),b("div",pv,[T[34]||(T[34]=b("span",{class:"create-review-label"},"Format",-1)),b("span",fv,be((i.value.find(H=>H.key===M.value.gameMode)||{}).title||"Bet Max Tourney")+" · Fixed Slate · TD$ 500",1)]),T[35]||(T[35]=b("div",{class:"create-review-row"},[b("span",{class:"create-review-label"},"Trophies"),b("span",{class:"create-review-value"},"1 Gold · 1 Silver · 1 Bronze")],-1))])])):Te("",!0),b("div",hv,[b("button",{class:"create-nav__btn create-nav__btn--ghost",onClick:_,disabled:n.value===1||F.value},"Back",8,gv),n.value<s.length?(pe(),fe("button",{key:0,class:"create-nav__btn create-nav__btn--primary",onClick:P,disabled:!y.value},"Next",8,mv)):(pe(),fe("button",{key:1,class:"create-nav__btn create-nav__btn--primary",onClick:Y,disabled:F.value},be(F.value?"Publishing…":"Publish Tournament"),9,bv))])])]))}},is=of({history:Bp(),routes:[{path:"/",name:"splash_route",component:ni},{path:"/splash_route",name:"splash_route",component:ni},{path:"/error_route",name:"error_route",component:Ps},{path:"/forgot_route",name:"forgot_route",component:Bm},{path:"/resetforgot_route",name:"resetforgot_route",component:Ps},{path:"/resethash_route",name:"resethash_route",component:Wm},{path:"/signin_route",name:"signin_route",component:dm},{path:"/signout_route",name:"signout_route",component:fm},{path:"/signup_route",name:"signup_route",component:Mm},{path:"/verf_link_route",name:"verf_link_route",component:ab},{path:"/offline_route",name:"offline_route",component:Ps},{path:"/home_route",name:"home_route",component:jg},{path:"/profile_route",name:"profile_route",component:wb},{path:"/top_players_route",name:"top_players_route",component:Ab},{path:"/play_route",name:"play_route",component:Rb},{path:"/create_tournament_route",name:"create_tournament_route",component:vv},{path:"/preview/:guid",name:"preview_route",component:F_,meta:{previewAllowed:!0}},{path:"/appFAQ",name:"appFAQ",component:Ps},{path:"/appHelp",name:"appHelp",component:Wg}]});is.beforeEach((e,t,a)=>{if(e.query.brand!==void 0){const s=e.query.brand;s==="null"||s===""?Ua.clearBrand():Ua.setBrand(s);const n={...e.query};delete n.brand,a({...e,query:n,replace:!0})}else a()});class yv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Me.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT_FORMAT"}get gameModeBadge(){if(typeof window.GameTypeLifeCycle>"u")return null;const t=window.GameTypeLifeCycle.forToken(this.gameType);return t?t.badge:null}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),a=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(a)?a[1]?.length||0:a.guids?.length||0,max:Array.isArray(a)?parseInt(a[0]?.max||0):a.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Me.theme}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return!1;try{const s=this.getAttribute("data-bma-tourn-entities"),n=s?JSON.parse(s):{guids:[]};return(Array.isArray(n)?n[1]||[]:n.guids||[]).includes(a)}catch{return!1}}getUserTrophy(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;try{const s=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const n of s){if(typeof n!="object"||!n)continue;let o=null;if(n.entity_guid===a&&n.badge?o=n.badge:n[a]&&(o=n[a]),o?.includes("gold"))return"gold";if(o?.includes("silver"))return"silver";if(o?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let a=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z"));const s=Date.now(),n=a.getTime()-s;if(n<=0)return null;const o=Math.floor(n/864e5),r=Math.floor(n%864e5/36e5),i=Math.floor(n%36e5/6e4);return o>0?`${o}d ${r}h`:r>0?`${r}h ${i}m`:`${i}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const a=this.getCountdown();t.textContent=a||"",a||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},a=this.sportsAllowed;if(!Array.isArray(a)||a.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const s=Math.min(a.length,3);let n="";for(let o=0;o<s;o++){const r=a[o].key||a[o],i=Ge.find(u=>u.key===r),l=i?i.group:"default",c=t[r]||r.replace(/^[a-z]+_/,"").toUpperCase();n+=`<span class="lc__sport-item"><bma-sport-icon sport="${r}" data-sport-group="${l}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return a.length>3&&(n+=`<span class="lc__sport-count" data-sport-overflow="true">+${a.length-3}</span>`),n}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(a=>{const s=a.key||a;return t[s]||s.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,a,s,n){const o=(t-a)/2,r=2*Math.PI*o,i=r-s/100*r,l=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${l}" cy="${l}" r="${o}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${a}" />
            <circle cx="${l}" cy="${l}" r="${o}"
                fill="none" stroke="${n}" stroke-width="${a}"
                stroke-linecap="round"
                stroke-dasharray="${r}"
                stroke-dashoffset="${i}"
                transform="rotate(-90 ${l} ${l})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),this.dispatchAction(a.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",a=>{a.stopPropagation();const s=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(s,"info")})}render(){const t=this.isUserParticipating(),a=this.getUserTrophy(),s=this.status.toLowerCase(),n=t&&this.status!=="COMPLETED",o=!t&&this.status==="UPCOMING";this.userRank,(this.entities.current/(this.entities.max||1)*100).toFixed(1);const r=this.getCountdown();return this._renderSlim({isParticipating:t,trophy:a,statusClass:s,showPlay:n,showJoin:o,countdown:r})}_renderSlim({statusClass:t,showPlay:a,showJoin:s,trophy:n,countdown:o}){this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating");const r=this.status==="LOCKED"?"IN PROGRESS":this.status==="UPCOMING"?"OPEN":this.status==="COMPLETED"?"COMPLETED":this.status,i=(()=>{if(this.matches==0)return"TBD";let E="";try{JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(D=>D.override_last_match_close===!0)&&(E="+")}catch{}return`${this.matches}${E}`})();this.entryFee&&this.entryFee!=="Free"&&this.entryFee;const l=parseFloat(this.tournamentDollars||0).toLocaleString(),c=`${this.entities.current}/${this.entities.max}`,u=this.status==="COMPLETED"?"Ended":this.status==="LOCKED"?"Ends":this.status==="UPCOMING"?"Locks":"Starts",d=o||(this.status==="COMPLETED"?"—":"Soon"),p=(this.sportsAllowed||[]).slice(0,3).map(E=>{const $=E.key||"",D=Ge.find(I=>I.key===$),M=D?.group||"default",V=D?.abbr||D?.title||$.split("_").pop().toUpperCase().slice(0,4);return`
                    <span class="lcs__sport">
                        <bma-sport-icon sport="${$}" data-sport-group="${M}"></bma-sport-icon>
                        <span class="lcs__sport-label">${V}</span>
                    </span>
                `}).join(""),f=(this.sportsAllowed?.length||0)>3?`<span class="lcs__sport-more">+${this.sportsAllowed.length-3}</span>`:"";let g="";n?g=`<div class="lcs__trophy-hero lcs__trophy-hero--${n}" aria-label="You won ${n}"></div>`:this.status==="COMPLETED"&&this.isUserParticipating()&&this.userRank!=="-"&&this.userRank!==""&&(g=`
                <div class="lcs__rank-hero" aria-label="Your rank ${this.userRank} of ${this.userTotal}">
                    <span class="lcs__rank-hero__place">#${this.userRank}</span>
                    <span class="lcs__rank-hero__total">/ ${this.userTotal}</span>
                </div>
            `);const k=this.gameModeBadge?.label||(this.gameType==="DEFAULT_FORMAT"?"Bet Max Tourney":""),m=k?`<span class="lcs__pill lcs__pill--neutral">${k}</span>`:"",v=`<span class="lcs__pill lcs__pill--${t}">${r}</span>`,w=(()=>{const E=`<button class="lcs__btn lcs__btn--info" data-action="INFO" aria-label="Info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span>Info</span>
            </button>`;let $="";return a?$='<button class="lcs__btn lcs__btn--play" data-action="PLAY" aria-label="Play"><span>Play</span></button>':s?$='<button class="lcs__btn lcs__btn--join" data-action="JOIN" aria-label="Join"><span>Join</span></button>':$='<button class="lcs__btn lcs__btn--view" data-action="INFO" aria-label="View"><span>View</span></button>',`${E}${$}`})();this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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
                            ${v}
                            ${g}
                            <div class="lcs__actions">
                                ${w}
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
                            <span class="lcs__kpi-value">${i}</span>
                        </div>
                        <div class="lcs__kpi-cell">
                            <span class="lcs__kpi-label">Starting TD$</span>
                            <span class="lcs__kpi-value lcs__kpi-value--td">${l}</span>
                        </div>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-tournament-list-card",yv);const Et={},Qn={},wv={pending:"pending",accepted:"accepted",declined:"declined",expired:"expired",pool_full:"pool was full",revoked:"revoked",joined:"joined via link"};function hi(e){switch(e){case"tournament_not_live":return"This tournament isn't accepting bets right now.";case"not_in_tournament":return"Join the tournament before placing bets.";case"match_already_final":return"This match has already ended.";case"bet_type_not_allowed":return"This bet type isn't allowed in this game mode.";case"bet_type_incompatible_with_sport":return"This bet type isn't available for this sport.";case"stake_out_of_bounds":return"Stake is outside the allowed range.";case"max_bets_total_exceeded":return"You've reached the total bet limit for this tournament.";case"max_bets_per_type_exceeded":return"You've reached the limit for this bet type.";case"duplicate_bet":return"You already have this bet type on this match.";case"missing_required_bet_type":return"Add the missing bet type to qualify.";case"min_bets_not_met":return"Place more bets to meet the minimum.";case"tournament_not_found":return"Tournament not found.";case"match_not_found":return"Match not found.";default:return e||"Bet rejected."}}const La=e=>{const t=document.querySelector(`[data-info-invite-sent-list][data-tournament-guid="${e}"]`);if(!t)return;const a=Et[e]||[];if(a.length===0){t.innerHTML="";return}const s=[...a].sort((n,o)=>new Date(o.invited_at||0)-new Date(n.invited_at||0));t.innerHTML=s.map(n=>{const o=n.invitee_display_name||n.invitee_user_name||"Invitee",r=(n.status||"PENDING").toLowerCase(),i=wv[r]||r;return`
      <div class="info-invite-sent-row">
        <div class="info-invite-sent-row__main">
          <span class="info-invite-sent-row__name">${o}</span>
          <span class="info-invite-sent-row__status info-invite-sent-row__status--${r}">${i}</span>
        </div>
        ${r==="pending"?`<button class="info-invite-sent-row__revoke" type="button" data-info-revoke="${n.guid}">Revoke</button>`:""}
      </div>
    `}).join("")},zs=`
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
`.trim();typeof window<"u"&&(window.EMPTY_BETSLIP_HTML=zs);const Ce={updateTDBalance(e,t){const a=document.querySelector(e);if(!a)return;t%1!==0?a.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,a,s=null,n=0){const o=document.querySelector("#summary-balance"),r=document.querySelector("#summary-stake"),i=document.querySelector("#summary-payout");o&&(this.updateTDBalance("#summary-balance",e),e<0?o.classList.add("summary-cell__red"):o.classList.remove("summary-cell__red")),r&&(r.textContent=t.toFixed(2)),i&&(i.textContent=a.toFixed(2),a<0?i.classList.add("summary-cell__red"):i.classList.remove("summary-cell__red"));const l=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(l){let u="";if(s){const p=s.tournament_dollars||0,f=e-p;f>0?u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(u=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const d=e<0?"#FF5252":"#00E676";l.innerHTML=`<span style="color: ${d};">TD$ ${e.toLocaleString()}</span>${u}`}if(c){const u=n||a||0;let d="";u>0&&(d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${u.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${d}`}if(s&&s.tournament_dollars){const u=s.tournament_dollars,d=document.querySelector(".dash-stat__gauge-fill--balance");if(d){const f=Math.max(e/u*100,0);d.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(t/u*100,100);p.style.width=`${f}%`}}this.updateBetSlipToggleSummary()},updateBetSlipToggleSummary(){const e=document.getElementById("bet-grid-toggle-count"),t=document.querySelector(".bet-grid__toggle-container");if(!e||!t)return;const a=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").length;e.textContent=a,t.classList.toggle("bet-grid__toggle-container--has-bets",a>0);const s=document.getElementById("bet-slip-tab-slip-badge");s&&(s.textContent=a,s.style.visibility=a>0?"visible":"hidden");const n=document.getElementById("bet-slip-tab-mybets-badge");if(n){const o=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing").length;n.textContent=o,n.style.visibility=o>0?"visible":"hidden"}},_globalLBCache:{},async prefetchGlobalLeaderboard(e="ALL"){const a=this._globalLBCache[e];if(a?.data&&Date.now()-a.ts<3e5)return a.data;if(a?.inflight)return null;this._globalLBCache[e]={data:a?.data||null,ts:a?.ts||0,inflight:!0};try{const s=await xe.fetchAllTimeLeaderboard(e,100,"td");return this._globalLBCache[e]={data:s,ts:Date.now(),inflight:!1},console.log(`[appEvents] All-time leaderboard prefetched [${e}]:`,s?.count||0,"rows, last_updated:",s?.last_updated),s}catch(s){return console.warn(`[appEvents] All-time leaderboard prefetch failed [${e}]:`,s),this._globalLBCache[e]&&(this._globalLBCache[e].inflight=!1),null}},_betStatsCache:{stats:null,ts:0,inflight:!1},async _ensureBetStatsCache(e){const a=Date.now();if(this._betStatsCache.stats&&a-this._betStatsCache.ts<3e5)return this._betStatsCache.stats;if(this._betStatsCache.inflight)return null;this._betStatsCache.inflight=!0;try{const n=(await xe.fetchBetSlips(e))?.rows||[];let o=0,r=0,i=0;return n.forEach(l=>{(l.bet||[]).forEach(u=>{Object.keys(u).forEach(d=>{if(d==="short_title")return;const p=u[d];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?o++:r++:i++)})})}),this._betStatsCache={stats:{wins:o,losses:r,pending:i},ts:a,inflight:!1},this._betStatsCache.stats}catch(s){return console.warn("[app_events] fetchBetSlips failed for stats panel",s),this._betStatsCache.inflight=!1,null}},buildStatsPanel(e,t,a=null){if(!t||!e||e.length===0)return"";const s=e.filter(g=>(g.entities?.guids||[]).includes(t)),n=s.filter(g=>(g.status||g.class)==="COMPLETED").length;let o=0,r=0;s.forEach(g=>{(Array.isArray(g.tags)?g.tags:[]).forEach(k=>{if(!k||typeof k!="object")return;const m=(k.entity_guid===t?k.badge:null)||(typeof k[t]=="string"?k[t]:null);typeof m=="string"&&m.startsWith("--badge__ribbon--")&&(r++,m==="--badge__ribbon--gold"&&o++)})});const i={};s.forEach(g=>{(Array.isArray(g.sports_allowed)?g.sports_allowed:[]).forEach(k=>{const v=Ge.find(w=>w.key===k.key)?.group||"Other";i[v]=(i[v]||0)+1})});let l="—",c="",u=0;Object.entries(i).forEach(([g,h])=>{h>u&&(u=h,l=g,c=g)});let d="—",p="Pending";if(a){const g=a.wins+a.losses;g>0?(d=`${Math.round(a.wins/g*100)}%`,p=`${a.wins}-${a.losses}`):(d="—",p="No settled bets")}const f=c?`<bma-sport-icon data-sport-group="${c.toLowerCase()}"></bma-sport-icon>`:"";return`
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
                            <span>${l}</span>
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
        `},categorizeTournaments(e,t,a,s,n={}){const o=[],{subStatus:r="all",sort:i="default",result:l="all",odds:c="all"}=n,u=I=>(I.entities?.guids||[]).includes(s),d=I=>I.status==="UPCOMING"||I.class==="UPCOMING",p=I=>I.status==="LOCKED"||I.class==="LOCKED",f=I=>d(I)||p(I),g=I=>I.status==="COMPLETED"||I.class==="COMPLETED",h=I=>Array.isArray(I.matches_expanded)&&I.matches_expanded.length>0,k=(I,U)=>(I.sports_allowed||[]).some(j=>j.key===U),m=I=>{if(!I)return"";const U=String(I),j=U.toLowerCase(),F=Ge.find(G=>G.key===U||String(G.key).toLowerCase()===j||String(G.title||"").toLowerCase()===j);return F?.title?F.title:/^[a-zA-Z]{2,5}$/.test(U)?U.toUpperCase():U},v=I=>{const U=I.tags||[];for(const j of U)if(!(typeof j!="object"||!j)&&(j.entity_guid===s&&j.badge||j[s]))return!0;return!1},w=I=>{if(i==="default")return I;const U=[...I];switch(i){case"starting_soon":U.sort((j,F)=>new Date(j.window_start_time||0)-new Date(F.window_start_time||0));break;case"most_entrants":U.sort((j,F)=>(F.entities?.guids?.length||0)-(j.entities?.guids?.length||0));break;case"fewest_spots":U.sort((j,F)=>{const G=(j.entities?.max||0)-(j.entities?.guids?.length||0),C=(F.entities?.max||0)-(F.entities?.guids?.length||0);return G-C});break;case"recently_active":U.sort((j,F)=>new Date(F.status_time||0)-new Date(j.status_time||0));break;case"newest":U.sort((j,F)=>new Date(F.status_time||0)-new Date(j.status_time||0));break;case"td_high":U.sort((j,F)=>parseFloat(F.tournament_dollars||0)-parseFloat(j.tournament_dollars||0));break;case"td_low":U.sort((j,F)=>parseFloat(j.tournament_dollars||0)-parseFloat(F.tournament_dollars||0));break}return U},E=I=>l==="all"?I:l==="trophy"?I.filter(U=>v(U)):l==="no_trophy"?I.filter(U=>!v(U)):I;let $=e,D="",M=a||"all";if(a==="multi"?($=e.filter(I=>(I.sports_allowed?.length||0)>1),D="Multi-Sport "):a!=="all"&&($=e.filter(I=>k(I,a)),D=m(a)+" "),t==="lobby"){const I=n.lobbySubTab||"active";let U=$.filter(j=>j.is_private!==!0);if(I==="completed"){const j=w(U.filter(F=>g(F))).slice(0,20);j.length>0?o.push({title:`Recently Completed ${D}Tournaments`,tournaments:j}):o.push({title:`Recently Completed ${D}Tournaments`,tournaments:[],emptyMessage:"No recently completed tournaments",emptySubtext:"Finished public tournaments will show up here."})}else{let j=U.filter(C=>f(C));r==="open"?j=j.filter(C=>d(C)):r==="locked"&&(j=j.filter(C=>p(C)));const F=w(j.filter(C=>d(C)&&!u(C)));o.push({title:`Open Entry ${D}Tournaments`,tournaments:F});const G=w(j.filter(C=>p(C)&&!u(C)));G.length>0&&o.push({title:`In Progress - Entry Closed ${D}Tournaments`,tournaments:G})}}else if(t==="my"){const I=n.mySubTab||"active",U=$.filter(j=>u(j));if(I==="completed"){const j=E(U.filter(G=>g(G))),F=w(j);F.length>0?o.push({title:`Your Completed ${D}Tournaments`,tournaments:F}):o.push({title:`Completed ${D}Tournaments`,tournaments:[],emptyMessage:"No completed contests yet",emptySubtext:"Finished tournaments you joined will show here."})}else{let j=U.filter(G=>f(G));r==="active"?j=j.filter(G=>p(G)):r==="upcoming"&&(j=j.filter(G=>d(G))),c==="available"?j=j.filter(G=>h(G)):c==="none"&&(j=j.filter(G=>!h(G)));const F=w(j);F.length>0?o.push({title:`Your Active ${D}Tournaments`,tournaments:F}):o.push({title:`Active ${D}Tournaments`,tournaments:[],emptyMessage:"No active contests",emptySubtext:"Join a tournament from the Lobby and it'll show up here."})}}else if(t==="private")if((n.privateSubTab||"all")==="invites")o.push({title:"Invites",tournaments:[],emptyMessage:"No pending invites",emptySubtext:null});else{const U=$.filter(G=>G.is_private===!0),j=w(U.filter(G=>G.creator_guid&&G.creator_guid===s)),F=w(U.filter(G=>(!G.creator_guid||G.creator_guid!==s)&&u(G)));j.length>0&&o.push({title:"Running",tournaments:j}),F.length>0&&o.push({title:"Playing In",tournaments:F}),j.length===0&&F.length===0&&o.push({title:"Bet Max Pools",tournaments:[],emptyMessage:"No pools yet",emptySubtext:"Start your own Bet Max Pool. Your contest, your rules."})}else o.push({title:"Tournaments",tournaments:e});const V=M==="all"||M==="multi"?"":m(M);return o.forEach(I=>{I.sportKey=M,I.sportLabel=V}),o},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=ke();t.appSession?.session_user?.guid;const a=e.tournament_dollars||1e4;let s=0,n=0,o=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const k=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.tournament_guid===e.guid);console.log("[Dashboard Update] Found",k.length,"existing bets for this tournament"),k.forEach(m=>{(m.bet||[]).forEach(w=>{Object.keys(w).filter($=>$!=="short_title").forEach($=>{const D=w[$];D&&(D.stake&&(s+=parseFloat(D.stake)),D.reconciled===!0&&D.payout>0&&(n+=parseFloat(D.payout)))})})})}const r=document.querySelector("#summary-stake");if(r){const h=parseFloat(r.textContent)||0;o=Math.max(0,h-s),console.log("[Dashboard Update] Summary total stakes:",h,"Pending:",o)}const i=s+o,l=a-s-o+n;console.log("[Dashboard Update] TD$:",a,"Committed:",s,"Pending:",o,"Payouts:",n,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");if(c){const h=l-a;let k="";h>0?k=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${h.toLocaleString()})</span>`:h<0&&(k=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${h.toLocaleString()})</span>`);const m=l<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${m};">TD$ ${l.toLocaleString()}</span>${k}`}const u=document.getElementById("dashboard-td-pending"),d=document.querySelector(".dash-stat__gauge-fill--pending");if(u){const h=o>0?o:i,k=n||0;let m="";if(k>0&&(m=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${k.toLocaleString()})</span>`),u.innerHTML=`TD$ ${h.toLocaleString()}${m}`,d){const v=Math.min(h/a*100,100);d.style.width=`${v}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const h=Math.max(l/a*100,0);p.style.width=`${h}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&e){const h=e.entities?.guids?.length||0,k=e.entities?.max||100,m=h/k*100;f.style.width=`${m}%`}const g=document.getElementById("game-mode-progress");if(g){const h=e.class||"DEFAULT_FORMAT",k=t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(m=>m.coreTournaments__guid===e.guid||m.tournament_guid===e.guid):[];g.setAttribute("data-game-mode-class",h),g.setAttribute("data-starting-td",String(e.tournament_dollars||0)),g.setAttribute("data-tags",JSON.stringify(e.tags||[])),g.setAttribute("data-bets",JSON.stringify(k))}},renderMatchCards(e){if(!e)return;const t=document.querySelector(".select-grid");if(!t)return;t.innerHTML="";const a=Array.isArray(e.sports_allowed)?e.sports_allowed:[],s=g=>{t.querySelectorAll("bma-bet-match-card").forEach(k=>{const m=k.getAttribute("data-sport-key")||"";k.style.display=g==="all"||m===g?"":"none"}),t.querySelectorAll(".play-match-group-header").forEach(k=>{let m=k.nextElementSibling,v=!1;for(;m&&!m.classList.contains("play-match-group-header");){if(m.tagName==="BMA-BET-MATCH-CARD"&&m.style.display!=="none"){v=!0;break}m=m.nextElementSibling}k.style.display=v?"":"none"})},o=new Set(["all",...a.map(g=>g.key)]).has(Qn[e.guid])?Qn[e.guid]:"all";if(a.length>1){const g=document.createElement("bma-play-sport-rail"),h=a.map(k=>{const m=Ge.find(v=>v.key===k.key)||{};return{key:k.key,title:m.title||k.title||k.key,group:m.group||""}});g.setAttribute("data-sports",JSON.stringify(h)),g.setAttribute("data-selected",o),g.addEventListener("sport-rail-change",k=>{const m=k.detail?.key||"all";Qn[e.guid]=m,s(m)}),t.appendChild(g)}if(!e.matches_expanded||!Array.isArray(e.matches_expanded)||e.matches_expanded.length===0){t.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const r=new Date,i=g=>{let h=null;try{h=typeof g.scoreboard_data=="string"?JSON.parse(g.scoreboard_data):g.scoreboard_data}catch{}const k=(h?.time_remaining||"").toString().trim().toLowerCase();if(k)return k==="final"||k.startsWith("final")||k==="game over"||k==="ended"?"final":"live";const m=new Date(g.scheduled_at).getTime();if(isNaN(m))return"upcoming";const v=r.getTime();if(v<m)return"upcoming";const w=14400*1e3;return v-m>w?"final":"live"},l={upcoming:[],live:[],final:[]};e.matches_expanded.forEach(g=>l[i(g)].push(g)),l.upcoming.sort((g,h)=>new Date(g.scheduled_at)-new Date(h.scheduled_at)),l.live.sort((g,h)=>new Date(g.scheduled_at)-new Date(h.scheduled_at)),l.final.sort((g,h)=>new Date(h.scheduled_at)-new Date(g.scheduled_at));const c=[{key:"upcoming",label:"Upcoming",matches:l.upcoming},{key:"live",label:"Live",matches:l.live},{key:"final",label:"Final",matches:l.final}],d=c.filter(g=>g.matches.length>0).length>1,p=[];c.forEach(g=>{g.matches.length!==0&&(d&&p.push({kind:"header",section:g}),g.matches.forEach(h=>p.push({kind:"match",match:h})))});const f=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let k=0;h&&ke().coreTourn.length>0&&(k=ke().coreTourn[ke().coreTourn.length-1].data.find(M=>M.guid===h)?.tournament_dollars||0);const m=document.querySelector(".bet-grid__slip-BETSLIP-content"),v=m?m.querySelectorAll("bma-bet-entry"):[],w=Array.from(v).map($=>({matchGuid:$.getAttribute("data-match-guid"),type:$.getAttribute("data-content-type"),teamPoints:$.getAttribute("data-content-team-points"),odds:$.getAttribute("data-content-odds"),stake:$.getAttribute("data-stake"),payout:$.getAttribute("data-payout"),matchTitle:$.getAttribute("data-match-title"),abbreviatedTitle:$.getAttribute("data-abbreviated-title"),scheduledAt:$.getAttribute("data-scheduled-at")})),E=ke();de.publish(E.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:k,bets:w,timestamp:Date.now()}))};p.forEach(g=>{if(g.kind==="header"){const $=document.createElement("div");$.className=`play-match-group-header play-match-group-header--${g.section.key}`,$.innerHTML=`
                    <span class="play-match-group-header__label">${g.section.label}</span>
                    <span class="play-match-group-header__count">${g.section.matches.length}</span>
                `,t.appendChild($);return}const h=g.match,m=new Date(h.scheduled_at)<r;let v=!1;try{v=(typeof h.scoreboard_data=="string"?JSON.parse(h.scoreboard_data):h.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const w=document.createElement("bma-bet-match-card");if(w.setAttribute("data-match-id",h.id),w.setAttribute("data-match-guid",h.odds_id||h.guid||h.id),w.setAttribute("data-match-title",h.title),w.setAttribute("data-match-short-title",h.short_title||h.title),w.setAttribute("data-scheduled-at",h.scheduled_at),w.setAttribute("data-home-team",h.home_team_id||"Home"),w.setAttribute("data-away-team",h.away_team_id||"Away"),w.setAttribute("data-is-disabled",m||v?"true":"false"),w.setAttribute("data-sync-theme","dark"),h.odds_markets){const $=typeof h.odds_markets=="string"?h.odds_markets:JSON.stringify(h.odds_markets);w.setAttribute("data-odds-markets",$)}if(h.scoreboard_data){const $=typeof h.scoreboard_data=="string"?h.scoreboard_data:JSON.stringify(h.scoreboard_data);w.setAttribute("data-scoreboard",$)}if(e&&e.tags){const $=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);w.setAttribute("data-tournament-tags",$)}const E=e?.class||"DEFAULT_FORMAT";if(w.setAttribute("data-bma-mode-token",E),E==="LONGSHOT_MAYHEM"&&window.GameTypeLifeCycle)try{const D=window.GameTypeLifeCycle.forToken(E)?.getEffectiveRules?.(e)||{},M=parseFloat(D.longshotThreshold);Number.isFinite(M)&&w.setAttribute("data-bma-longshot-threshold",String(M))}catch{}if(h.sport_id)w.setAttribute("data-sport-key",h.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const $=e.sports_allowed[0];$&&$.key&&w.setAttribute("data-sport-key",$.key)}w.addEventListener("bet-button-click",async $=>{const{betData:D,isActive:M,button:V}=$.detail;if(M){const I=document.querySelector(".bet-grid__slip-BETSLIP-content");if(I){const U=I.querySelectorAll("bma-bet-entry");let j=!1;U.forEach(F=>{if(j)return;const G=F.getAttribute("data-content-type"),C=F.getAttribute("data-content-odds");G===D.type&&C===D.price&&(F.remove(),j=!0)}),I.children.length===0&&(I.innerHTML=zs)}V.classList.remove("btn--active"),setTimeout(()=>{f()},100)}else{const U=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(typeof window.GameTypeLifeCycle<"u"&&U)try{const G=ke(),A=(G.coreTourn?.length?G.coreTourn[G.coreTourn.length-1]:null)?.data?.find(q=>q.guid===U),S=G.appSession?.session_user?.guid,R=(A?.matches_expanded||[]).find(q=>q.guid===D.matchGuid)||{guid:D.matchGuid},O=G.coreBetSlip?.length>0?G.coreBetSlip[G.coreBetSlip.length-1].data.filter(q=>q.coreTournaments__guid===U):[];if(A&&S){const Q=await window.GameTypeLifeCycle.forTournament(A).doBeforeBetPlace({tournament:A,match:R,user:{guid:S},bet:{type:D.type,team:D.team},existingBets:O});if(Q&&Q.ok===!1){typeof neodigmToast<"u"&&neodigmToast.q(hi(Q.reason),"warning",3e3);return}}}catch(G){console.warn("[app_events] doBeforeBetPlace tap-time guard failed (non-fatal):",G?.message)}document.querySelectorAll("bma-bet-match-card").forEach(G=>{G.shadowRoot.querySelectorAll(".btn--selected").forEach(C=>{C.classList.remove("btn--selected")})}),V.classList.add("btn--selected"),V.classList.add("btn--active");const j=ke(),F=D.type;F==="spread"?de.publish(j.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(D)):F==="money"?de.publish(j.hierTopics.COREBETSLIP__MONEY,JSON.stringify(D)):F==="total"&&de.publish(j.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(D)),de.publish(j.hierTopics.COREBETSLIP,JSON.stringify(D))}}),t.appendChild(w)}),o!=="all"&&s(o)},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const a=document.querySelector("[data-publish-betslip]");a&&delete a.dataset.processing;const s=document.querySelector(".bet-grid__slip-BETSLIP-content");s&&(s.innerHTML=zs);const n=ke();if(n.coreTourn.length>0){const i=n.coreTourn[n.coreTourn.length-1].data.find(l=>l.guid===e);i&&Ce.renderMatchCards(i)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{de.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const o=document.querySelector(".bet-grid__slip");o&&o.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(s=>{try{return JSON.parse(s.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(s=>{const n=s.getAttribute("data-match-guid"),o=s.getAttribute("data-home-team"),r=s.getAttribute("data-away-team");(s.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?o:r;t.some(g=>{if(g.coreMatches__guid!==n)return!1;const h=g.bet||[];if(h.length===0)return!1;const k=h[0],v=Object.keys(k).filter($=>$!=="short_title")[0],E=k[v]?.type;return c==="total"?E===c:E===c&&v===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},initPlayScreen(e,t="INFO"){const a=ke(),s=document.querySelector(".play-cntr");if(!s){console.warn("[app_events] initPlayScreen: .play-cntr not found");return}e&&(s.dataset.currentTournGuid=e),t&&(s.dataset.currentTournAction=t);const n=s.dataset.currentTournGuid,o=s.dataset.currentTournAction||"INFO";if(n&&a.coreTourn.length>0){const f=a.coreTourn[a.coreTourn.length-1].data.find(h=>h.guid===n),g=f?.class||"DEFAULT_FORMAT";s.dataset.gameType=g,console.log("[app_events] Game mode:",g,"for tournament:",f?.caption)}console.log("[app_events] play_route mounted - GUID:",n,"action:",o),window.initBetGridToggle&&window.initBetGridToggle(),Ce.updatePlayButton(),Ce.populateInfoPage();let r=o==="PLAY"||o==="JOIN"?"PLAY":o;if(n&&a.coreTourn.length>0&&a.coreTourn[a.coreTourn.length-1].data.find(g=>g.guid===n)?.status==="COMPLETED"&&(r="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),r){const p=`ROUTE.HOME.SODAPOP_PLAY.${r}`;console.log("[app_events] Publishing initial topic:",p),de.publish(p,JSON.stringify({tournamentGuid:n,timestamp:Date.now()}))}if(!n||a.coreTourn.length===0)return;const l=a.coreTourn[a.coreTourn.length-1].data.find(p=>p.guid===n);if(!l)return;Ce.renderMatchCards(l),Ce.updateBetSlipLongshotChip(l);const c=document.querySelector("#pop-play__tourn-caption--id"),u=document.querySelector("#pop-play__tourn-tagline--id");c&&(c.textContent=l.caption),u&&(u.textContent=l.tagline),Ce.updateTournamentDashboard(l);const d=document.getElementById("dashboard-rank");if(d){const p=l.entities?.guids?.length||0;d.innerHTML=`<span class="tourn-dashboard__rank-text">-/${p}</span>`}Ce.updateBetSlipToggleSummary()},updateBetSlipLongshotChip(e){const t=document.getElementById("betslip-longshot-chip");if(!t)return;const a=e?.class||"DEFAULT_FORMAT";if(a!=="LONGSHOT_MAYHEM"||!window.GameTypeLifeCycle){t.setAttribute("hidden","");return}try{const n=window.GameTypeLifeCycle.forToken(a)?.getEffectiveRules?.(e)||{},o=parseFloat(n.longshotThreshold),r=parseFloat(n.longshotBonusRatio);t.setAttribute("data-threshold",Number.isFinite(o)?String(o):"150"),t.setAttribute("data-ratio",Number.isFinite(r)?String(r):"0.25"),t.removeAttribute("hidden")}catch{t.setAttribute("hidden","")}},updatePlayButton(){const e=ke(),t=document.querySelector(".play-cntr"),a=t?.dataset?.currentTournGuid,s=t?.dataset?.currentTournAction||"INFO",n=document.getElementById("btn-join__play--id");if(!n||!a||e.coreTourn.length===0)return;const r=e.coreTourn[e.coreTourn.length-1].data.find(u=>u.guid===a);if(!r)return;const i=e.appSession?.session_user?.guid,l=r.entities?.guids?.includes(i),c=r.status;n.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(n.style.visibility="",c==="UPCOMING"&&!l?s==="INFO"?(n.textContent="Join",n.dataset.requiresJoin="true"):s==="PLAY"&&(n.textContent="Play",n.dataset.requiresJoin="false"):(n.textContent="Play",n.dataset.requiresJoin="false"))},populateInfoPage(){const e=ke(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(N=>N.guid===a);if(!n)return;const o=document.getElementById("pop-play__caro-info-summary1--id");if(!o)return;const r=N=>{if(!N)return"N/A";let Y=new Date(N);return!N.includes("Z")&&!N.match(/[+-]\d{2}:\d{2}$/)&&(Y=new Date(N+"Z")),isNaN(Y.getTime())?"Invalid Date":Y.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};n.status&&`${n.status.toLowerCase()}`;const i={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},l=n.sports_allowed&&Array.isArray(n.sports_allowed)?n.sports_allowed.map(N=>{const Y=N.key||N,W=Ge.find(H=>H.key===Y),L=W?W.group:"default",T=i[Y]||W?.title||Y;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${Y}" data-sport-group="${L}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${T}</span>
                </span>`}).join(""):"N/A",c=e.appSession?.session_user?.guid,u=n.entities?.guids?.includes(c),d=n.entities?.guids?.length||0,p=n.entities?.max||0;(d/(p||1)*100).toFixed(1);const f=(()=>{const N=new Date(n.window_start_time),Y=new Date(n.window_end_time),W=new Date;if(isNaN(N.getTime())||isNaN(Y.getTime()))return"";const L=Y-N,T=W-N;let H=0,ae="";if(W<N){H=0;const ce=N-W,ge=Math.floor(ce/864e5),he=Math.floor(ce%864e5/36e5);ae=ge>0?`First match in ${ge}d ${he}h`:`First match in ${he}h`}else if(W>Y){const ce=new Date(Y.getFullYear(),Y.getMonth(),Y.getDate()),ge=new Date(W.getFullYear(),W.getMonth(),W.getDate());H=ce.getTime()===ge.getTime()?95:100,ae=H===100?"Tournament Complete":"Last Day"}else{H=Math.min(100,T/L*100);const ce=Math.ceil(L/864e5),ge=Math.ceil(T/864e5);ae=ge>=ce?"Last Day":`Day ${ge} of ${ce}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${ae}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${H.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),g=n.tags||[],k=g.some(N=>N.override_last_match_close===!0)?"+":"",m=g.some(N=>N.match_inprogress_lock===!0),v=g.some(N=>N.override_last_match_close===!0);let w="Bet Max Tourney",E=null,$="",D="";if(typeof window.GameTypeLifeCycle<"u"){const N=window.GameTypeLifeCycle.forTournament(n),Y=N.getEffectiveRules(n);E=N.badge,w=N.label;try{D=typeof N.rankingDescription=="function"?N.rankingDescription(n):""}catch{}try{const W=`doTournament_${String(n.status||"UPCOMING").toUpperCase()}`;typeof N[W]=="function"&&N[W]({tournament:n}).catch(L=>console.warn("[app_events] info-page lifecycle hook failed (non-fatal):",L?.message))}catch{}if(Y.stakeRule==="SPEND_ALL"&&($+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend entire starting TD$ amount</span></div>'),Y.requiredBetTypes.length>0){const W=Y.requiredBetTypes.map(L=>L==="SPREAD"?"Spread":L==="MONEY"?"Money Line":"Over/Under").join(", ");$+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${W}</span></div>`}Y.oneBetPerMatchPerType&&($+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const M=(()=>{const Y=(n.tags||[]).find(H=>H.badge_gold!==void 0||H.badge_silver!==void 0||H.badge_bronze!==void 0);if(!Y)return null;const W=Y.badge_gold||0,L=Y.badge_silver||0,T=Y.badge_bronze||0;return W===0&&L===0&&T===0?null:{gold:W,silver:L,bronze:T}})();n.status==="LOCKED"||n.status==="UPCOMING"||n.status,n.status==="LOCKED"||n.status==="UPCOMING"||n.status==="COMPLETED"||n.status;const V=n.matches_expanded?.length||0,I=V===0?"TBD":`${V}${k}`;`${Number(n.tournament_dollars||0).toLocaleString()}${d}${p}${I}`;const U=n.status==="LOCKED"?"In Progress":n.status==="UPCOMING"?"Open":n.status,j=n.status==="LOCKED"?"var(--status-locked-text, #F7C60D)":n.status==="UPCOMING"?"var(--status-upcoming-text, #00E676)":"var(--status-completed-text, #CD5659)";let F="";try{if(window.GameTypeLifeCycle){const N=window.GameTypeLifeCycle.forTournament(n);if(N&&N.beta&&N.betaMessage){const Y=W=>String(W??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");F=`<bma-mode-beta-banner
                        data-tournament-guid="${Y(n.guid)}"
                        data-mode-token="${Y(N.token)}"
                        data-mode-label="${Y(N.label||N.token)}"
                        data-beta-message="${Y(N.betaMessage)}"></bma-mode-beta-banner>`}}}catch{}const G=`
            ${F}
            <div class="info-detail-row"><span>Game Mode</span><span>${w}${E?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${E.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${E.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${m?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${m?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${v?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${v?"On-going":"Fixed slate"}</span></div>
            ${$}
        `,C=`
            <div class="info-detail-row"><span>Sports</span><span>${l}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${r(n.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends <span style="color: rgba(255,255,255,0.45); font-weight: 400; margin-left: 4px;">(estimated)</span></span><span>${r(n.window_end_time)}</span></div>
        `,A=M?`
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${M.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${M.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${M.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${M.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${M.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${M.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            <div style="padding: 16px 0 0;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); padding: 0 16px 8px;">Trophy Breakdown</div>
                ${M.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${M.gold}</span>
                </div>`:""}
                ${M.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${M.silver}</span>
                </div>`:""}
                ${M.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${M.bronze}</span>
                </div>`:""}
            </div>
        `:`<div class="info-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
            <p>No trophies configured for this tournament</p>
        </div>`,S=(()=>{if(!n.matches_expanded||!Array.isArray(n.matches_expanded)||n.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let N=0,Y=0,W=0;const L=new Date;n.matches_expanded.forEach(he=>{let le=null;try{le=typeof he.scoreboard_data=="string"?JSON.parse(he.scoreboard_data):he.scoreboard_data}catch{}le?.time_remaining?le.time_remaining.toLowerCase()==="final"?N++:Y++:new Date(he.scheduled_at)<L?N++:W++});const T=Y>0?"live":"upcoming",H=[];N>0&&H.push(`<span class="match-filter-btn${T==="final"?" match-filter--active":""}" data-filter="final">${N} Final</span>`),Y>0&&H.push(`<span class="match-filter-btn match-filter-btn--live${T==="live"?" match-filter--active":""}" data-filter="live">${Y} Live</span>`),W>0&&H.push(`<span class="match-filter-btn match-filter-btn--upcoming${T==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${W} Upcoming</span>`);const ae=H.length>0?`<div class="match-filter-bar">${H.join("")}</div>`:"",ce=new Date,ge=n.matches_expanded.map(he=>{const le=he.scoreboard_data?typeof he.scoreboard_data=="string"?he.scoreboard_data:JSON.stringify(he.scoreboard_data):"";let me="upcoming",ve=null;try{ve=typeof he.scoreboard_data=="string"?JSON.parse(he.scoreboard_data):he.scoreboard_data}catch{}ve?.time_remaining?me=ve.time_remaining.toLowerCase()==="final"?"final":"live":me=new Date(he.scheduled_at)<ce?"final":"upcoming";const Se=me!==T;return`<bma-match-status
                    data-match-guid="${he.guid||he.odds_id||he.id||""}"
                    data-match-title="${he.short_title||he.title||"Match"}"
                    data-match-scheduled-at="${he.scheduled_at||""}"
                    data-match-home-team="${he.home_team_id||"Home"}"
                    data-match-away-team="${he.away_team_id||"Away"}"
                    data-match-home-score="${he.home_team_score!==null&&he.home_team_score!==void 0?he.home_team_score:""}"
                    data-match-away-score="${he.away_team_score!==null&&he.away_team_score!==void 0?he.away_team_score:""}"
                    data-match-scoreboard="${le.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${he.sport_id||""}"
                    data-match-status="${me}"
                    data-sync-theme="dark"
                    style="${Se?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${ae}
                </div>
                <div class="matches-list" id="info-matches-scroll">
                    ${ge}
                </div>
            `})(),R=n.status==="UPCOMING"?"Accepting new players. Place bets before each match starts.":n.status==="LOCKED"?"No new entrants. Joined players can still bet on matches that haven't started yet.":n.status==="COMPLETED"?"All matches settled. Final standings locked in.":"",O=`
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
                        <span class="info-legend__term">Format · ${v?"On-going":"Fixed Slate"}</span>
                        <span class="info-legend__def">${v?"New matches are added as odds become available throughout the tournament.":"The slate is fixed at the start of the tournament. No new matches will be added."}</span>
                    </div>
                    <div class="info-legend__item">
                        <span class="info-legend__term">Game Mode · ${w}</span>
                        <span class="info-legend__def">${D||(w==="Bet Max Tourney"?"Open betting across the full tournament slate. Rank by your TD$ balance. Pending bets don't move it; only settled wins and losses do. Ties break on Max Win, then earliest bet placed.":"See tournament rules for scoring and stake requirements.")}</span>
                    </div>
                </div>
            </div>
        `,ne=e.appSession?.session_user?.guid||"",z=!!n.creator_guid&&n.creator_guid===ne;console.log("[info share] isCreator check:",{viewerGuid:ne,creator_guid:n.creator_guid,created_by_user:n.created_by_user,is_private:n.is_private,join_slug:n.join_slug,share_url:n.share_url,tournament_guid:n.guid,isCreator:z});const te=n.share_url||`${window.location.origin}${window.location.pathname}#/preview/${n.guid}${n.join_slug?"?s="+encodeURIComponent(n.join_slug):""}`,Z=z?`
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
                <button class="info-share-pack__btn info-share-pack__btn--secondary" data-info-share-btn data-share-url="${te.replace(/"/g,"&quot;")}" data-share-caption="${(n.caption||"tournament").replace(/"/g,"&quot;")}" aria-label="Share invite link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/></svg>
                    <span>Share Invite Link</span>
                </button>
            </div>
        `:"",re=`
            <div class="info-pack info-pack--padded">
                <div class="info-progress-status">
                    <div class="info-progress-status__row">
                        <span class="info-progress-status__label">Status</span>
                        <span class="info-progress-status__value" style="color: ${j};">${U}</span>
                    </div>
                    ${R?`<div class="info-progress-status__hint">${R}</div>`:""}
                </div>
                ${f?`<div class="info-progress-divider"></div>${f}`:""}
            </div>
        `;o.innerHTML=`
            <div class="info-wrap">
                ${Z}
                ${re}
                ${O}
                ${se}
                <div class="info-pack">
                    <div class="info-tabs">
                        <button class="info-tab info-tab--active" data-info-tab="summary"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Summary</button>
                        <button class="info-tab" data-info-tab="trophies"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Trophies</button>
                        <button class="info-tab" data-info-tab="matches"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> Matches</button>
                    </div>
                    <div class="info-tab-panel" data-info-panel="summary">${C}${G}</div>
                    <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${A}</div>
                    <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${S}</div>
                </div>
            </div>
        `;const ie=o.querySelector("[data-info-legend-toggle]");if(ie&&ie.addEventListener("click",()=>{const Y=ie.closest(".info-legend").classList.toggle("info-legend--open");ie.setAttribute("aria-expanded",String(Y))}),z){const N=o.querySelector("[data-info-invite-sent-list]");N&&(xe.fetchInvitesForTournament(n.guid).then(Y=>{Y.ok&&Array.isArray(Y.data?.invites)&&(Et[n.guid]=Y.data.invites,La(n.guid))}).catch(Y=>console.warn("[info invite list] fetch failed:",Y)),N.addEventListener("click",async Y=>{const W=Y.target.closest("[data-info-revoke]");if(!W)return;const L=W.getAttribute("data-info-revoke");if(!L)return;const T=Et[n.guid]||[];Et[n.guid]=T.filter(ae=>ae.guid!==L),La(n.guid),(await xe.revokeInvite(L)).ok?typeof neodigmToast<"u"&&neodigmToast.q("Invite revoked.","info"):(Et[n.guid]=T,La(n.guid),typeof neodigmToast<"u"&&neodigmToast.q("Couldn't revoke. Try again.","warning"))}))}const y=o.querySelector("[data-info-invite-form]");y&&y.addEventListener("submit",async N=>{N.preventDefault();const Y=y.querySelector("[data-info-invite-input]"),W=y.querySelector("[data-info-invite-send]"),L=y.parentElement.querySelector("[data-info-invite-status]"),T=(Y?.value||"").trim();if(!T||!W)return;let H=null;T.includes("@")?H={email:T}:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(T)?H={user_guid:T}:H={userName:T},W.disabled=!0;const ae=W.textContent;W.textContent="Sending...",L&&(L.hidden=!0,L.textContent="");try{const ce=await xe.sendInvite(n.guid,H);if(ce.ok&&ce.data?.invite){Y.value="";const ge=ce.data.invite.invitee_display_name||ce.data.invite.invitee_user_name||"them",he=Et[n.guid]||[];Et[n.guid]=[ce.data.invite,...he],La(n.guid),typeof neodigmToast<"u"&&neodigmToast.q(`Invite sent to ${ge}.`,"success")}else{const ge=ce.data?.error||`http_${ce.status}`,he=(()=>{if(ge==="invitee_not_found")return"Couldn't find that player. Share the link instead.";if(ge==="already_invited")return"You've already invited them.";if(ge==="already_joined")return"They're already in this pool.";if(ge==="pool_full")return"Pool is full.";if(ge==="cooldown_active"){const le=ce.data?.retry_after_hours;return le?`They declined recently. Try again in ${le}h.`:"They declined recently. Try again tomorrow."}return ge==="rate_limited"?"Too many invites. Try again in a few minutes.":ge==="not_creator"?"Only the pool creator can send invites.":ge==="not_private"?"This pool doesn't accept directed invites.":ge==="invalid_request_shape"?"Enter a User Name or Email.":"Couldn't send invite. Try again."})();L&&(L.textContent=he,L.hidden=!1,L.classList.add("info-invite-form__status--error"))}}catch(ce){console.warn("[info invite] send failed:",ce),L&&(L.textContent="Network error. Try again.",L.hidden=!1,L.classList.add("info-invite-form__status--error"))}finally{W.disabled=!1,W.textContent=ae}});const P=o.querySelector("[data-info-share-btn]");P&&P.addEventListener("click",async()=>{const N=P.dataset.shareUrl,Y=P.dataset.shareCaption||"tournament";if(!N)return;const W=`Join ${Y}`,L=`You're invited to join ${Y} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:W,text:L,url:N});return}catch(T){if(T?.name==="AbortError")return}try{await navigator.clipboard.writeText(N),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(T){console.warn("[info share] clipboard write failed:",T),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Link: "+N,"danger")}}),o.querySelectorAll(".info-tab").forEach(N=>{N.addEventListener("click",()=>{o.querySelectorAll(".info-tab").forEach(W=>W.classList.remove("info-tab--active")),N.classList.add("info-tab--active");const Y=N.dataset.infoTab;o.querySelectorAll(".info-tab-panel").forEach(W=>{W.style.display=W.dataset.infoPanel===Y?"":"none"})})});const _=o.querySelector('[data-info-panel="matches"]');_&&_.addEventListener("click",N=>{const Y=N.target.closest(".match-filter-btn");Y&&(_.querySelectorAll(".match-filter-btn").forEach(W=>W.classList.remove("match-filter--active")),Y.classList.add("match-filter--active"),_.querySelectorAll("bma-match-status").forEach(W=>{W.style.display=W.dataset.matchStatus===Y.dataset.filter?"":"none"}))});const x=document.getElementById("pop-play__caro-info-summary2--id");x&&(x.innerHTML="");const B=document.getElementById("pop-play__caro-info-list--id");B&&(B.innerHTML="")},async populateLeaderboard(){const e=ke(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,s=e.appSession?.session_user?.guid;if(!a){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const n=document.getElementById("pop-play__caro-leaderboard--id");if(!n)return;let o=document.getElementById("leaderboard-loading-banner");o||(o=document.createElement("neodigm-juicebar"),o.id="leaderboard-loading-banner",o.setAttribute("role","progressbar"),o.setAttribute("data-n55-theme","warning"),o.setAttribute("data-n55-size","small"),o.innerHTML="<div></div>",o.style.cssText=`
                width: 100%;
                margin: 6px;
            `,n.parentNode.insertBefore(o,n)),o.style.visibility="visible";try{const r=await xe.fetchLeaderboard(a),i=r?.data||r?.rows;if(i&&i.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(K=>K.guid===a),u=c?.class||"DEFAULT_FORMAT",d=window.GameTypeLifeCycle?.forToken?.(u)||window.GameTypeLifeCycle?.forTournament?.(c),p=i.map(K=>{const se=typeof K.combined_betslips=="string"?(()=>{try{return JSON.parse(K.combined_betslips)}catch{return[]}})():K.combined_betslips||[];return{...K,bets:se,timestamp:K.created_at||K.updated_at||0}}),f=parseFloat(c?.tournament_dollars||0),h=(d&&typeof d.getEffectiveRules=="function"?d.getEffectiveRules(c):{}).stakeRule==="SPEND_ALL",k=K=>{if(!h||f<=0)return!0;let se=0;return(K.bets||[]).forEach(ee=>{(ee.bet||[]).forEach(ne=>{Object.keys(ne).forEach(z=>{z!=="short_title"&&(se+=parseFloat(ne[z]?.stake||0))})})}),se>=f-.01},v=(()=>{if(u!=="DEFAULT_FORMAT")return"";const se=(c?.tags||[]).find(x=>x.badge_gold!==void 0||x.badge_silver!==void 0||x.badge_bronze!==void 0);if(!se)return"";const ee=se.badge_gold||0,ne=se.badge_silver||0,z=se.badge_bronze||0;if(ee===0&&ne===0&&z===0)return"";const Z=p.some(x=>(x.bets||[]).some(B=>(B.bet||[]).some(N=>Object.keys(N).some(Y=>Y!=="short_title"&&N[Y]?.reconciled===!0))))?p.filter(k):[],re=x=>{if(!x)return'<span class="podium-slot__empty">Open</span>';const B=x.user_guid===s;return`<span class="podium-slot__name${B?" podium-slot__name--you":""}">${x.username||"Unknown"}${B?' <span class="podium-slot__you">YOU</span>':""}</span>`},ie=Array.from({length:ee},(x,B)=>re(Z[B])).join(""),y=Array.from({length:ne},(x,B)=>re(Z[ee+B])).join(""),P=Array.from({length:z},(x,B)=>re(Z[ee+ne+B])).join(""),_=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
                        <div class="leaderboard-podium">
                            <div class="leaderboard-podium__title">Trophy Preview</div>
                            <div class="leaderboard-podium__pack">
                                ${ne>0?`<div class="podium-slot podium-slot--silver">
                                    <div class="podium-slot__trophy podium-slot__trophy--silver"></div>
                                    <span class="podium-slot__count">&times;${ne}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--silver">
                                        <div class="podium-slot__names">${y}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${ee>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${ee}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${ie}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${z>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${z}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${P}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${_?`<div class="leaderboard-podium__label">${_}</div>`:""}
                        </div>
                    `})();let w="";try{w=d&&typeof d.rankingDescription=="function"?d.rankingDescription(c):""}catch{}const E=w.match(/^([^.]+\.)\s*(.*)$/s),$=E?E[1]:w,D=E?E[2]:"",M=w?`
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/></svg>
                        <span><strong>${$}</strong>${D?" "+D:""}</span>
                    </div>
                `:"";let V=!1;try{V=(d?.getEffectiveRules?.(c)||{}).stakeRule==="SPEND_ALL"}catch{}const F=`
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
                    ${M}
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        <span><strong>Pending bets are hidden</strong> from other players until settled. Your own pending bets are always visible to you.</span>
                    </div>
                    ${V?`
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                        <span><strong>Spend your entire starting TD$ balance</strong> to qualify for a finishing position.</span>
                    </div>
                `:""}
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
                `,G=(K,se,ee=!1)=>{let ne="";if(c?.tags&&Array.isArray(c.tags)){const y=c.tags.find(P=>!!(typeof P=="object"&&P!==null&&(P.entity_guid===K.user_guid&&P.badge&&P.badge.startsWith("--badge__ribbon--")||P[K.user_guid]&&P[K.user_guid].startsWith("--badge__ribbon--"))));if(y){const P=y.badge||y[K.user_guid];P==="--badge__ribbon--gold"?ne="badge-trophy--gold":P==="--badge__ribbon--silver"?ne="badge-trophy--silver":P==="--badge__ribbon--bronze"&&(ne="badge-trophy--bronze")}}const z=K.combined_betslips?typeof K.combined_betslips=="string"?K.combined_betslips:JSON.stringify(K.combined_betslips):"[]";let te="[]";if(K.combined_betslips&&c?.matches_expanded){const y=typeof K.combined_betslips=="string"?JSON.parse(K.combined_betslips):K.combined_betslips,P=[...new Set(y.map(x=>x.coreMatches__guid||x.match_guid||x.odds_id).filter(Boolean))],_=c.matches_expanded.filter(x=>{const B=x.guid||x.id||x.odds_id;return P.includes(B)});te=JSON.stringify(_)}const Z=parseFloat(K.calculated_tournament_dollars||0),re=parseInt(K.total_betslips||0),ie=Z===0&&re===0?c?.tournament_dollars||0:K.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${se}"
                            data-username="${K.username||"Unknown"}"
                            data-user-guid="${K.user_guid||""}"
                            data-tournament-dollars="${ie}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${K.total_betslips||0}"
                            data-total-payout="${K.total_payout||0}"
                            data-combined-betslips="${z.replace(/"/g,"&quot;")}"
                            data-user-matches="${te.replace(/"/g,"&quot;")}"
                            data-badge-class="${ne}"
                            data-is-current-user="${K.user_guid===s}"
                            data-unqualified="${ee}"
                            data-sync-theme="dark"
                            data-bma-mode-token="${u}"
                        ></bma-leaderboard-card>
                    `},C=p.filter(k),A=p.filter(K=>!k(K)),R=(u==="DEFAULT_FORMAT"&&C.length>0?`
                    <div class="leaderboard-divider leaderboard-divider--qualified">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                            <span class="leaderboard-divider__title">Qualified</span>
                            <span class="leaderboard-divider__subtitle">Ranked for tournament prizes</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                `:"")+C.map((K,se)=>G(K,se+1,!1)).join(""),O=A.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${A.map(K=>G(K,"—",!0)).join("")}
                `:"";n.innerHTML=v+F+R+O,requestAnimationFrame(()=>{n.querySelectorAll("bma-leaderboard-card").forEach((K,se)=>{K.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",K.style.animationDelay=`${Math.min(se*60,400)}ms`})}),n.querySelectorAll(".leaderboard-tab").forEach(K=>{K.addEventListener("click",()=>{const se=K.dataset.lbTab;n.querySelectorAll(".leaderboard-tab").forEach(ee=>ee.classList.remove("leaderboard-tab--active")),K.classList.add("leaderboard-tab--active"),n.querySelectorAll("[data-lb-panel]").forEach(ee=>{ee.style.display=ee.dataset.lbPanel===se?"":"none"})})});const q=C.findIndex(K=>K.user_guid===s),Q=c?.entities?.guids?.length||p.length,X=q>=0?q+1:"—",oe=document.getElementById("dashboard-rank");if(oe){const K=X==="—"?"—":`${X}/${Q}`;oe.innerHTML=`<span class="tourn-dashboard__rank-text">${K}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else n.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{o&&(o.style.visibility="hidden")},1800)}catch(r){console.error("[appEvents] Error fetching leaderboard:",r),n.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{o&&(o.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=ke(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(o=>o.guid===a);n&&(console.log("[appEvents] Hydrating play popup for tournament:",a),this.populateInfoPage(),this.renderMatchCards(n),this.updateTournamentDashboard(n),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:a,subStatus:s,sort:n,result:o}=e,r=(c,u,d,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${u}">${d}</button>`;let i="";a==="lobby"?i+=`
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
                </div>`:a==="my"?i+=`
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
                </div>`:a==="completed"&&(i+=`
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
                </div>`);const l={lobby:{subStatus:"all",sort:"default",result:"all"},my:{subStatus:"all",sort:"default",result:"all"},completed:{subStatus:"all",sort:"default",result:"all"}};neodigmSodaPop.setOnAfterOpen(()=>{const c=document.getElementById("filter-popup__content--id");if(!c)return;c.innerHTML=`
                ${i}
                <div class="filter-actions">
                    <button class="filter-btn filter-btn--reset" id="filter-reset-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
                        Reset
                    </button>
                    <button class="filter-btn filter-btn--apply" id="filter-apply-btn">Apply</button>
                </div>
            `;let u={subStatus:s,sort:n,result:o};c.addEventListener("click",d=>{const p=d.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,g=p.dataset.filterVal;u[f]=g,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(h=>h.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const d=l[a]||l.lobby;u={...d},Object.keys(d).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${d[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(u)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){if(window._bmaAppListenersBound){console.warn("[app_events] bindAppListeners already bound; skipping duplicate call");return}window._bmaAppListenersBound=!0,de.subscribe("APP",(C,A)=>{console.warn("~~ sub all APP | "+C+"|"+A)}),de.subscribe("WC",(C,A)=>{console.warn("~~ sub all WC  | "+C+"|"+A)}),de.subscribe("ROUTE",(C,A)=>{console.warn("~~ sub all ROUTE  | "+C+"|"+A)});let t="lobby",a="all",s="all",n="all",o="active",r="active",i="default",l="all",c="all",u=localStorage.getItem("bma_view_mode")||"cards";const d="bma_home_nav_state",p=()=>{try{sessionStorage.setItem(d,JSON.stringify({filter:t,lobbySubTab:r,mySubTab:o,privateSubTab:n,sportFilter:a}))}catch{}},f=()=>{try{const C=sessionStorage.getItem(d);if(!C)return null;const A=JSON.parse(C);return["lobby","my","private"].includes(A.filter)?A:null}catch{return null}},g=()=>{a="all";const C=document.querySelector("bma-app-head-sports");C&&C.setAttribute("data-selected-chip","all"),p()},h=()=>{const C=document.getElementById("filter-bar__count--id");if(!C)return;let A=0;s!=="all"&&A++,i!=="default"&&A++,l!=="all"&&A++,C.textContent=A,C.style.display=A>0?"":"none"},k=()=>{document.querySelectorAll(".home-tab").forEach(R=>R.classList.remove("home-tab--active"));let A=null;if(t==="lobby"?A=r==="completed"?'[data-home-tab="lobby-completed"]':'[data-home-tab="lobby-active"]':t==="private"?A=n==="invites"?'[data-home-tab="private-invites"]':'[data-home-tab="private-all"]':t==="my"&&(A=o==="completed"?'[data-home-tab="my-completed"]':'[data-home-tab="my-active"]'),!A)return;const S=document.querySelector(A);S&&S.classList.add("home-tab--active")},m=()=>{s="all",i="default",l="all",c="all"};document.addEventListener("click",C=>{const A=C.target.closest(".category-filter-toggle");if(A){const O=A.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(O){const q=O.style.display!=="none";O.style.display=q?"none":"",A.classList.toggle("category-filter-toggle--open",!q),window._bmaFilterRowOpen=!q}return}const S=C.target.closest("[data-view-mode]");if(S){const R=S.dataset.viewMode;if(R===u)return;u=R,localStorage.setItem("bma_view_mode",R),document.querySelectorAll("[data-view-mode]").forEach(O=>O.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${R}"]`).forEach(O=>O.classList.add("view-toggle__btn--active")),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"}))}}),document.addEventListener("click",C=>{const A=C.target.closest("[data-home-tab]");if(!A)return;const S=A.dataset.homeTab;let R=!1;if(S==="lobby-active"||S==="lobby-completed"){const O=S==="lobby-completed"?"completed":"active";if(t==="lobby"&&O===r)return;t="lobby",r=O,R=!0}else if(S==="my-active"||S==="my-completed"){const O=S==="my-completed"?"completed":"active";if(t==="my"&&O===o)return;t="my",o=O,R=!0}else if(S==="private-all"||S==="private-invites"){const O=S==="private-invites"?"invites":"all";if(t==="private"&&O===n)return;t="private",n=O,document.body.dataset.privateSub=O,R=!0}R&&(g(),m(),h(),document.querySelectorAll(".home-tab").forEach(O=>O.classList.remove("home-tab--active")),A.classList.add("home-tab--active"),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"})),p())}),document.addEventListener("change",C=>{const A=C.target.closest(".category-dropdown");if(!A)return;const S=A.dataset.filterType,R=A.value;S==="subStatus"?s=R:S==="sort"?i=R:S==="result"?l=R:S==="odds"&&(c=R),h(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),de.subscribe(e.hierTopics.COREBETSLIP,async(C,A)=>{JSON.parse(A);let S=16;switch(C){case e.hierTopics.COREBETSLIP__BET:S=5,Ga.shootConfetti(),console.log("~~~  |  "+C+" | ",A);const R=document.querySelector("[data-bets-valid]");R&&(R.dataset.betsValid="false");const O=document.querySelector("neodigm-sodapop");O&&O.setAttribute("data-wait","true");const q=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(q.length===0){console.warn("[app_events] No bets to submit"),O&&O.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const X=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,oe=e.appSession?.session_user?.guid;if(!X||!oe){console.error("[app_events] Missing tournament or user GUID"),O&&O.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const K=Array.from(q).map(ie=>{const y=ie.getAttribute("data-content-team-points"),P=ie.getAttribute("data-content-odds"),_=ie.getAttribute("data-stake")||"0",x=ie.getAttribute("data-content-type"),B=ie.getAttribute("data-payout")||"0",N=ie.getAttribute("data-match-guid")||"",Y={};return Y[y]={type:x,stake:parseFloat(_),odds:parseFloat(P),payout:parseFloat(B),reconciled:!1},{acctEntity__guid:oe,coreTournaments__guid:X,coreMatches__guid:N,bet:[Y],status:"PENDING"}});if(console.log("[app_events] Submitting bet slips:",K),typeof window.GameTypeLifeCycle<"u")try{const y=[...e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(x=>x.coreTournaments__guid===X):[],...K],_=(e.coreTourn.length>0?e.coreTourn[e.coreTourn.length-1]:null)?.data.find(x=>x.guid===X);if(_){const B=await window.GameTypeLifeCycle.forTournament(_).doBeforeSubmit({tournament:_,user:{guid:oe},bets:y});if(B&&B.ok===!1){console.log("[app_events] doBeforeSubmit rejected:",B),typeof neodigmToast<"u"&&(Array.isArray(B.failures)&&B.failures.length?B.failures:[{reason:B.reason}]).forEach(W=>neodigmToast.q(hi(W.reason),"warning",4e3)),O&&O.setAttribute("data-wait","false");const N=document.querySelector("[data-publish-betslip]");N&&delete N.dataset.processing;break}}}catch(ie){console.warn("[app_events] doBeforeSubmit guard failed (non-fatal):",ie?.message)}xe.postBetSlips(K).then(ie=>{const y=ie.filter(_=>!_.ok);if(y.length>0){console.error("[app_events] Bet submission rejected by server:",y.map(Y=>({status:Y.status,data:Y.data,networkError:Y.networkError})));const _=y[0],x=_.data?.error||_.data?.message||_.networkError,B=x?`${x}`:`Server returned ${_.status||"no response"}.`;typeof neodigmToast<"u"&&neodigmToast.q(`Bets not placed|${B}`,"danger",6e3);const N=document.querySelector("[data-publish-betslip]");N&&delete N.dataset.processing,R&&(R.dataset.betsValid="true"),O&&O.setAttribute("data-wait","false");return}console.log("[app_events] Bet slips posted successfully:",ie);const P=K.reduce((_,x)=>{const B=x.bet[0],N=Object.keys(B)[0];return _+(B[N]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${P.toFixed(2)}`,"success"),xe.fetchBetSlips(oe,X).then(_=>{if(_?.rows){const x={timestamp:Date.now(),source:"API",data:_.rows};e.pushcoreBetSlip(x),console.log("[app_events] Refreshed bet slips in store:",_.rows.length,"items")}Ce.refreshPlayPopupUI(X,_),O&&O.setAttribute("data-wait","false")}).catch(_=>{console.error("[app_events] Error fetching fresh bet slips:",_);const x=document.querySelector("[data-publish-betslip]");x&&delete x.dataset.processing,R&&(R.dataset.betsValid="true"),O&&O.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(ie=>{console.error("[app_events] Error posting bet slips:",ie);const y=document.querySelector("[data-publish-betslip]");y&&delete y.dataset.processing,R&&(R.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),O&&O.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:S=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&A){A=JSON.parse(A);const y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&y){const P=e.coreBetSlip[0].data.filter(H=>H.coreTournaments__guid===y),_=[],x=[],B=[];P.forEach(H=>{const ae=H.bet||[];if(ae.length===0)return;const ce=ae[0];Object.keys(ce).filter(he=>he!=="short_title").forEach(he=>{const le=ce[he],me=le?.reconciled!==!1,ve=parseFloat(le?.payout||0);me?ve===0?x.push(H):B.push(H):_.push(H)})});const N=bt.search(_,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Y=bt.search(x,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,W=N+Y,L=bt.search(B,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,T=A.tournament_dollars-W+L;Ce.updateTDBalance("#summary-balance",T)}else Ce.updateTDBalance("#summary-balance",A.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let ee=0,ne=0,z=0;if(e.coreBetSlip.length>0){const y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(y){const _=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(L=>L.coreTournaments__guid===y),x=[],B=[],N=[];_.forEach(L=>{const T=L.bet||[];if(T.length===0)return;const H=T[0];Object.keys(H).filter(ce=>ce!=="short_title").forEach(ce=>{const ge=H[ce],he=ge?.reconciled!==!1,le=parseFloat(ge?.payout||0);he?le===0?B.push(L):N.push(L):x.push(L)})}),ee=bt.search(x,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ne=bt.search(N,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const Y=bt.search(B,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,W=bt.search(N,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;z=Y+W}}let te=!0,Z=0;const re=document.querySelector("[data-bets-valid]");if(re&&A){A=JSON.parse(A),A.pending_stake_sum=0,A.pending_payout_sum=0,A.bets.length||(te=!1),A.bets.forEach(N=>{N.stake=Number(N.stake),N.stake>0?A.pending_stake_sum+=N.stake:te=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(N=>{const Y=parseFloat(N.getAttribute("data-payout")||"0");A.pending_payout_sum+=Y});const y=ee+A.pending_stake_sum,P=ne+A.pending_payout_sum;Z=parseFloat((A.tournament_dollars-y-z+ne).toFixed(2));const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let B=null;x&&e.coreTourn.length>0&&(B=e.coreTourn[e.coreTourn.length-1]?.data?.find(Y=>Y.guid===x)),Ce.updateSummaryAndDashboard(Z,y,P,B,A.pending_payout_sum||0),(A.tournament_dollars<0||Z<0)&&(te=!1),re.dataset.betsValid=te}break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S,"QUITE").vibrate()});const v=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(q=>q.guid===A)?.tournament_dollars||0),de.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:S,timestamp:Date.now()}))},w=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(ee=>ee.guid===A)?.tournament_dollars||0);let R=0,O=0,q=0,Q=0;if(e.coreBetSlip.length>0&&A){const se=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(ie=>ie.coreTournaments__guid===A);console.log("[app_events] Filtered bets for tournament:",A,"found:",se.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",se[0]);const ee=[],ne=[],z=[];se.forEach(ie=>{const y=ie.bet||[];if(y.length===0)return;const P=y[0];Object.keys(P).filter(x=>x!=="short_title").forEach(x=>{const B=P[x],N=B?.reconciled!==!1,Y=parseFloat(B?.payout||0);N?Y===0?ne.push(ie):z.push(ie):ee.push(ie)})}),console.log("[app_events] Bet categories:",{unreconciled:ee.length,reconciledZero:ne.length,reconciledNonZero:z.length});const te=bt.search(ee,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,Z=bt.search(ne,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,re=bt.search(z,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;q=Z+re,O=bt.search(z,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Q=bt.search(ee,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,R=te,console.log("[app_events] Balance calculation:",{unreconciledStakes:te,lostBetStakes:Z,wonBetStakes:re,allReconciledStakes:q,displayedStake:R,reconciledPayouts:O,tournamentDollars:S,calculatedBalance:S-R-q+O})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const X=S-R-q+O;let oe=null;A&&e.coreTourn.length>0&&(oe=e.coreTourn[e.coreTourn.length-1].data.find(se=>se.guid===A)),Ce.updateSummaryAndDashboard(X,R,O,oe,Q)};de.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(C,A)=>{const R=JSON.parse(A)?.rows||[],O=document.querySelector(".bet-grid__slip-MYBETS");if(!O)return;if(O.innerHTML="",R.length===0){O.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const K=document.querySelector(".bet-grid__slip");K&&K.setAttribute("data-active-bet-tab","BETSLIP"),v();return}let q="";try{const se=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(se&&e.coreTourn.length>0){const ne=e.coreTourn[e.coreTourn.length-1].data.find(z=>z.guid===se);ne?.class&&(q=ne.class)}}catch{}R.forEach(K=>{if((K.bet||[]).length===0)return;const ee=document.createElement("bma-bet-existing");ee.setAttribute("data-corebetslip",JSON.stringify(K)),q&&ee.setAttribute("data-bma-mode-token",q),O.appendChild(ee)});const Q=document.querySelector(".bet-grid__slip");Q&&Q.setAttribute("data-active-bet-tab","MYBETS"),ke().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Ce.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",R.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),w()},200)}),document.addEventListener("click",C=>{const A=C.target;if(A&&A.classList.contains("bet-slip-tab")){const S=A.dataset.betTab,R=document.querySelector(".bet-grid__slip");S&&R&&(R.setAttribute("data-active-bet-tab",S),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",S))}if(A&&A.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(A.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}A.dataset.processing="true";const R=A.dataset.publishBetslip;de.publish(R,JSON.stringify({timestamp:Date.now()}))}});const E=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&e.coreTourn.length>0&&(S=e.coreTourn[e.coreTourn.length-1].data.find(X=>X.guid===A)?.tournament_dollars||0);const R=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),O=Array.from(R).map(q=>({teamPoints:q.getAttribute("data-content-team-points"),odds:q.getAttribute("data-content-odds"),stake:q.getAttribute("data-stake")||"0",type:q.getAttribute("data-content-type"),abbreviatedTitle:q.getAttribute("data-abbreviated-title"),scheduledAt:q.getAttribute("data-scheduled-at")}));de.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:S,bets:O,timestamp:Date.now()}))},$=(C,A)=>{const S=JSON.parse(A),R=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!R){console.error("[app_events] Bet slip container not found");return}const O=R.querySelector(".bet-slip__empty");O&&O.remove();let q="";S.type==="total"?q=S.team==="over"?"Over":"Under":S.team==="home"?q=S.homeTeam:S.team==="away"?q=S.awayTeam:S.team==="draw"&&(q="Draw");let Q=q;const X=S.point,oe=parseFloat(X),K=X!=null&&X!=="";if(K)if(S.type==="spread"&&oe!==0){const Z=oe>0?`+${X}`:String(X);Q=`${q} ${Z}`}else S.type==="total"&&(Q=`${q} ${X}`);const se=document.createElement("bma-bet-entry");se.setAttribute("data-content-team-points",Q),se.setAttribute("data-content-odds",S.price||"0"),se.setAttribute("data-content-stake-text","0"),se.setAttribute("data-content-type",S.type||""),K&&se.setAttribute("data-content-point",String(X)),se.setAttribute("data-abbreviated-title",S.abbreviatedTitle||`${S.homeTeam} vs ${S.awayTeam}`),se.setAttribute("data-scheduled-at",S.scheduledAt||""),se.setAttribute("data-match-guid",S.matchGuid||""),se.setAttribute("data-home-team",S.homeTeam||""),se.setAttribute("data-away-team",S.awayTeam||""),se.setAttribute("data-bet-team",q||"");const ne=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(ne&&e.coreTourn.length>0){const re=e.coreTourn[e.coreTourn.length-1].data.find(ie=>ie.guid===ne);if(re?.sports_allowed&&re.sports_allowed.length>0){const ie=re.sports_allowed[0];se.setAttribute("data-sport-key",ie.key||"");const y=Ge.find(P=>P.key===ie.key);se.setAttribute("data-sport-group",y?.group||"")}re?.class&&se.setAttribute("data-bma-mode-token",re.class)}R.appendChild(se),console.log("[app_events] Bet entry appended to container:",se,"Container children:",R.children.length),setTimeout(()=>{M(se)},0);const z=document.querySelector(".bet-grid__slip");z&&(z.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const te=R.querySelectorAll("bma-bet-entry").length;te>=3?requestAnimationFrame(()=>{setTimeout(()=>{const Z=document.querySelector(".bet-grid__slip");Z&&(console.log("[app_events] Scrolling parent to bottom - bet count:",te,"scrollHeight:",Z.scrollHeight,"current scrollTop:",Z.scrollTop),Z.scrollTo({top:Z.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",Z.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",te,"bet cards (need 3+)"),setTimeout(()=>{E()},200),console.log("[app_events] Created bet entry:",{teamPoints:Q,odds:S.price,type:S.type})};de.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(C,A)=>{$(C,A),D()}),de.subscribe(e.hierTopics.COREBETSLIP__MONEY,(C,A)=>{$(C,A),D()}),de.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(C,A)=>{$(C,A),D()});function D(){const C=window.matchMedia("(orientation: portrait)").matches,A=window.matchMedia("(max-width: 768px)").matches;if(C||A){const S=document.querySelector(".bet-grid__select"),R=document.querySelector(".bet-grid__slip"),O=document.querySelector(".bet-grid__toggle-text");S&&R&&O&&(S.classList.add("collapsed"),R.classList.remove("collapsed"),O.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const M=C=>{const A={sport:{key:C.getAttribute("data-sport-key")||"",group:C.getAttribute("data-sport-group")||""},Match:{scheduled_at:C.getAttribute("data-scheduled-at")||"",home_team_id:C.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:C.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:C.getAttribute("data-bet-team")||"",over:"",under:""},type:C.getAttribute("data-content-type")||"",odds:C.getAttribute("data-content-odds")||"0",stake:C.getAttribute("data-stake")||"0"}},S=ac.calcPayout(A);let R=S;try{const q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,Q=ke(),oe=Q.coreTourn[Q.coreTourn.length-1]?.data?.find(K=>K.guid===q);if(oe&&window.GameTypeLifeCycle){const K=window.GameTypeLifeCycle.forTournament(oe);if(K&&typeof K.calcPayout=="function"){const se=[],ee=Q.coreBetSlip[Q.coreBetSlip.length-1]?.data||[];for(const ne of ee){if(ne?.coreTournaments__guid!==oe.guid)continue;const z=ne.status_time?new Date(ne.status_time).getTime():0,te=Array.isArray(ne?.bet)?ne.bet:[];for(const Z of te)if(!(!Z||typeof Z!="object"))for(const re of Object.keys(Z)){if(re==="short_title")continue;const ie=Z[re];ie&&ie.reconciled===!0&&se.push({outcome:ie.outcome||null,slipStatusTime:z})}}se.sort((ne,z)=>(ne.slipStatusTime||0)-(z.slipStatusTime||0)),R=K.calcPayout(S,A.Bet,oe,{priorBets:se})}}}catch{R=S}C.setAttribute("data-payout-base",S.toString()),C.setAttribute("data-payout",R.toString()),console.log("[app_events] Payout calculated:",{stake:A.Bet.stake,odds:A.Bet.odds,rawPayout:S,finalPayout:R,bonusApplied:R!==S})};new MutationObserver(C=>{C.forEach(A=>{A.type==="attributes"&&A.attributeName==="data-stake"&&A.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",A.target.getAttribute("data-stake")),M(A.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{E()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",C=>{console.log("[app_events] Removing bet entry:",C.detail);const A=C.target,S=C.detail;A.remove(),setTimeout(()=>{const Q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Q){const X=ke(),oe=X.coreTourn[X.coreTourn.length-1];if(oe&&oe.data){const K=oe.data.find(se=>se.guid===Q);K&&Ce.updateTournamentDashboard(K)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(q=>{(q.shadowRoot?.querySelectorAll(".btn")||[]).forEach(X=>{const oe=X.dataset.betType,K=X.dataset.price,se=oe===S.type,ee=K===S.odds;se&&ee&&X.classList.contains("btn--active")&&(X.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:oe,btnPrice:K}))})});const O=document.querySelector(".bet-grid__slip-BETSLIP-content");O&&O.children.length===0&&(O.innerHTML=zs),setTimeout(()=>{E()},100)}),de.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(C,A)=>{const S=JSON.parse(A);S&&S.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${S.guid}"]`)}),de.subscribe(e.hierTopics.WC__APP__FOOT,(C,A)=>{switch(JSON.parse(A),C){case"WC.APP.FOOT.LOBBY":case"WC.APP.FOOT.ALL_SPORTS":de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"LOBBY",timestamp:Date.now()}));break;case"WC.APP.FOOT.TOURNEYS":de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_TOURNEYS,JSON.stringify({tab:"TOURNEYS",timestamp:Date.now()}));break;case"WC.APP.FOOT.PRIVATE":case"WC.APP.FOOT.MY_TOURNEYS":de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_PRIVATE,JSON.stringify({tab:"PRIVATE",timestamp:Date.now()}));break;case"WC.APP.FOOT.LEADERBOARD":de.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case"WC.APP.FOOT.MY_PROFILE":neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break}}),de.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(C,A)=>{const S=JSON.parse(A);let R=16;C=="WC.APP.HEAD_SPORTS.PREV"||C=="WC.APP.HEAD_SPORTS.NEXT"||C=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?R=3:(a=S.key||"all",console.log(`[app_events] Sports filter changed to: ${a} (${S.group})`),h(),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"})),p()),R&&neodigmWired4Sound&&neodigmWired4Sound.sound(R).vibrate()}),de.subscribe(e.hierTopics.WC__APP__HEAD_MID,(C,A)=>{JSON.parse(A);let S=16;const R=(O,q="active")=>{t=O,n="all",o=q,r="active",document.body.dataset.tournFilter=O,document.body.dataset.privateSub=n,g(),m(),h(),k(),(window.location.hash||"").startsWith("#/home_route")||(window.location.hash||"")==="#/"||!window.location.hash||(typeof neodigmSodaPop<"u"&&neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/home_route"),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"})),p()};switch(C){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":R("lobby");break;case"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS":R("my","active");break;case"WC.APP.HEAD_MID.HEAD_MID_PRIVATE":case"WC.APP.HEAD_MID.HEAD_MID_MY":R("private");break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":R("my","completed");break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":S=16,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/top_players_route";break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":de.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()}),de.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(C,A)=>{JSON.parse(A);let S=16;switch(C){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const R=window.deferredPWAPrompt;if(!R){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{R.prompt();const{outcome:q}=await R.userChoice;q==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),S=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(q){console.error("PWA install error:",q),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const Q=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:Q});const X=document.getElementById("app");X&&X.setAttribute("data-sync-theme",Q),document.body.setAttribute("data-sync-theme",Q)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":is.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":is.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()});const I=C=>{document.querySelectorAll(".play-section").forEach(S=>{S.style.display="none",S.classList.remove("play-section--active")});const A=document.getElementById(`play-section-${C}`);A&&(A.style.display="",A.classList.add("play-section--active"))},U=(C,A)=>{const S=C.split(".").pop(),R=document.querySelectorAll(".play-cntr .dash-nav__btn"),q=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");I(S),R.forEach(Q=>{const X=Q.dataset.publishRouteHome?.split(".").pop()||"";Q.classList.toggle("dash-nav__btn--active",X===S)}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),q&&(q.style.overflow=S==="PLAY"?"hidden":"auto")};de.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",U);let j=null;de.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(C,A)=>{if(U(C),j){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}j=setTimeout(()=>{j=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),Ce.populateLeaderboard()}),de.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(C,A)=>{JSON.parse(A);const S=document.getElementById("btn-join__play--id");if(!S){console.warn("[app_events] PLAY button not found");return}const R=S.dataset.requiresJoin==="true",O=S.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",O,"requiresJoin:",R),R&&O==="join"){const Q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,X=ke();if(!Q){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",Q),de.publish(X.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:Q,timestamp:Date.now()})),S.textContent="Play",S.dataset.requiresJoin="false",setTimeout(()=>{U(C),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else U(C),console.log("[app_events] Advancing carousel to PLAY page")}),de.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(C,A)=>{JSON.parse(A);let S=10;switch(C){case"WC.APP.HEAD_TOP.USER_PROFILE":S=0,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break;case"WC.APP.HEAD_TOP.LOGO":const R=e.appSession.session_app.version,O=new Date().getFullYear();R&&neodigmToast&&neodigmToast.q(`${R} 5/2/2026, 12:59:46 PM|© ${O} Bet Max Action`,"night");break;case"WC.APP.HEAD_TOP.CREATE_CONTEST":de.publish(e.hierTopics.WC__APP__FOOT__MY_TOURNEYS,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,(C,A)=>{const S=JSON.parse(A);let R=0;switch(S?.action){case"JOIN":R=512;break;case"PLAY":R=8;break;case"INFO":R=8;break}if(R){const O=S?.tournamentGuid,q=S?.action;console.log("[app_events] Navigating to play_route:",O,q),setTimeout(()=>{is.push({name:"play_route",query:{guid:O,action:q}})},R)}}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,(C,A)=>{const S=JSON.parse(A);let R=16;switch(S?.action){case"FOCUS":R=3;break;case"SPORT_ICON":R=10;break;case"JOIN":R=5;break;case"PLAY":R=16;break}R&&neodigmWired4Sound&&neodigmWired4Sound.sound(R).vibrate()}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,(C,A)=>{const S=JSON.parse(A);let R=0,O="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),S?.tournamentStatus){case"UPCOMING":O="success";break;case"LOCKED":O="warning";break;case"COMPLETED":O="danger";break}switch(S?.action){case"SPORT_ICON":S?.sportTitle==S?.sportDescription?R=S?.sportTitle:R=S?.sportTitle+"|"+S?.sportDescription;break}R&&neodigmToast&&neodigmToast.q(R,O)}),de.subscribe(e.hierTopics.WC__TOURN_ACTION,async(C,A)=>{const S=JSON.parse(A);if(S?.action==="JOIN"){const R=ke(),O=R.appSession?.session_user?.guid;if(!O){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const q=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);q&&(q.setAttribute("data-bma-tourn-wait","true"),Ga.shootConfetti());const Q={acctEntityGuid:O,tournamentGuid:S.tournamentGuid};try{const X={method:"POST",body:JSON.stringify(Q),headers:xe.genHeaders()};console.log("Posting to:",xe.API_baseURI+"/m5t/"+xe.API_ver+"/coreTournaments/join",Q);const K=await(await fetch(xe.API_baseURI+"/m5t/"+xe.API_ver+"/coreTournaments/join",X)).json();if(console.log("Join response:",K),K.ok){typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success");try{const ee=R.coreTourn[R.coreTourn.length-1]?.data?.find(ne=>ne.guid===S.tournamentGuid);if(ee){const ne=ee.entities||{max:0,guids:[]},z=Array.isArray(ne.guids)?ne.guids:[];z.includes(O)||(ee.entities={...ne,guids:[...z,O]})}}catch(se){console.warn("[app_events] post-join Pinia splice failed (non-fatal):",se?.message)}setTimeout(()=>{const se=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);if(se){se.setAttribute("data-bma-tourn-wait","false");const ee=se.getAttribute("data-bma-tourn-entities");if(ee)try{const ne=JSON.parse(ee);ne.guids.includes(O)||(ne.guids.push(O),se.setAttribute("data-bma-tourn-entities",JSON.stringify(ne)))}catch(ne){console.error("Failed to parse entities:",ne)}}},3e3)}else{const se=K?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(se,"danger");const ee=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);ee&&ee.setAttribute("data-bma-tourn-wait","false")}}catch(X){console.error("Join tournament error:",X),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),de.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(C,A)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const S=ke(),R=f();console.log("[nav-persist] HOME_ONMOUNT rehydrate. saved=",R,"raw=",sessionStorage.getItem("bma_home_nav_state")),R?(t=R.filter,r=R.lobbySubTab||"active",o=R.mySubTab||"active",n=R.privateSubTab||"all",a=R.sportFilter||"all"):(t="lobby",r="active",o="active",n="all",a="all"),console.log("[nav-persist] after rehydrate: currentFilter=",t,"privateSubTab=",n,"sport=",a),s="all",i="default",l="all",c="all",document.body.dataset.tournFilter=t,document.body.dataset.privateSub=n;try{document.querySelectorAll(".home-tab").forEach(Q=>Q.classList.remove("home-tab--active"));const O=t==="private"?n==="invites"?"private-invites":"private-all":t==="my"?o==="completed"?"my-completed":"my-active":r==="completed"?"lobby-completed":"lobby-active",q=document.querySelector(`[data-home-tab="${O}"]`);q&&q.classList.add("home-tab--active")}catch{}try{const O=document.querySelector("bma-app-head-sports");O&&O.setAttribute("data-selected-chip",a)}catch{}try{const O=document.querySelector("bma-app-head-mid");if(O){const Q=t==="private"?"head_mid_private":t==="my"?"head_mid_tourneys":"head_mid_lobby";O.setAttribute("data-selected-tab",Q)}const q=document.querySelector("bma-app-foot");if(q){const Q=t==="private"?"foot_private":t==="my"?"foot_tourneys":"foot_lobby";q.setAttribute("data-selected-item",Q)}}catch{}if(S.appSession?.session_user?.authenticated&&(S.coreInvites.length===0?xe.fetchMyInvites().then(O=>{O.ok&&Array.isArray(O.data?.invites)&&O.data.invites.length>0&&(S.setCoreInvites(O.data.invites),de.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"home_onmount_fetch",count:O.data.invites.length,timestamp:Date.now()})))}).catch(O=>console.warn("[home_onmount] fetchMyInvites failed:",O)):de.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"home_onmount_rerender",count:S.coreInvites.length,timestamp:Date.now()}))),S.coreTourn.length>0){console.log("[app_events] coreTourn already populated, hydrating from existing data"),de.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"REMOUNT"}));return}try{const O=await xe.fetchTournaments();console.log("[app_events] Tournaments fetched:",O),O?.rows&&Array.isArray(O.rows)?(S.pushCoreTourn({timestamp:Date.now(),source:"API",data:O.rows}),console.log("[app_events] Pushed to coreTourn, length:",S.coreTourn.length),de.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",O)}catch(O){console.error("[app_events] Error fetching tournaments:",O),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),de.subscribe(e.hierTopics.PROMOTION__LOAD,async(C,A)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const S=await xe.fetchPromotions();if(console.log("[app_events] Promotions fetched:",S),S?.ok&&S?.data&&Array.isArray(S.data)){const R=S.data.filter(q=>q.class==="banner"&&q.status==="LIVE");R.sort((q,Q)=>(q.sort_order??0)-(Q.sort_order??0)),console.log("[app_events] Banner promotions:",R);const O=document.querySelector(".featured-swiper .swiper-wrapper");if(!O){console.warn("[app_events] Swiper wrapper not found");return}if(O.innerHTML="",R.forEach((q,Q)=>{const X=document.createElement("div");X.className="swiper-slide";const oe=document.createElement("div");oe.className=`featured-card featured-card--${Q+1}`;const K=q.hero_img?encodeURI(q.hero_img):"";oe.style.backgroundImage=`url("${K}")`,oe.setAttribute("data-promotion-hero-img",q.hero_img||""),oe.setAttribute("data-promotion-caption",q.caption||""),oe.setAttribute("data-promotion-tagline",q.tagline||""),oe.setAttribute("data-promotion-toast",q.toast||""),oe.setAttribute("data-promotion-topic",q.topic?.topic||""),oe.setAttribute("data-promotion-topic-token",q.topic?.token||""),oe.setAttribute("data-promotion-marquee",q.maquee||""),X.appendChild(oe),O.appendChild(X)}),console.log("[app_events] Created",R.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),R.length===1){const q=document.querySelector(".featured-swiper .swiper-wrapper");q&&(q.style.justifyContent="center")}}}catch(S){console.error("[app_events] Error fetching promotions:",S)}}),de.subscribe(e.hierTopics.PROMOTION__CLICK,(C,A)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const S=JSON.parse(A);console.log("[app_events] Promotion clicked:",S),S.toast&&typeof neodigmToast<"u"&&neodigmToast.q(S.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const R=document.querySelector(".l-promotion #promoHero");R&&S.heroImg&&(R.src=S.heroImg);const O=document.querySelector(".l-promotion #promCaption");O&&S.caption&&(O.textContent=S.caption);const q=document.querySelector(".l-promotion #promoTagline");return q&&S.tagline&&(/<[^>]+>/.test(S.tagline)?q.innerHTML=S.tagline:q.textContent=S.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(S){console.error("[app_events] Error handling promotion click:",S)}}),de.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(C,A)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const S=ke();if(S.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const R=S.coreTourn[S.coreTourn.length-1],O=S.coreTourn.length>1?S.coreTourn[S.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",R);const q=[];if(O){const se=R.data,ee=O.data;se.forEach(ne=>{const z=ee.find(te=>te.guid===ne.guid);z&&z.status!==ne.status&&(console.log(`[app_events] Status changed for tournament ${ne.guid}: ${z.status} -> ${ne.status}`),q.push(ne.guid))})}const Q=S.appSession?.session_user?.guid,X=[...R.data].sort((se,ee)=>{const ne=se.status||se.class,z=ee.status||ee.class,te=se.entities?.guids||[],Z=ee.entities?.guids||[],re=te.includes(Q),ie=Z.includes(Q),y=(T,H)=>{const ae=new Date(T.status_time||0).getTime();return new Date(H.status_time||0).getTime()-ae},P=ne==="LOCKED"&&re,_=z==="LOCKED"&&ie;if(P&&!_)return-1;if(!P&&_)return 1;if(P&&_)return y(se,ee);const x=ne==="UPCOMING",B=z==="UPCOMING";if(x&&!B)return-1;if(!x&&B)return 1;if(x&&B)return y(se,ee);const N=ne==="COMPLETED"&&re,Y=z==="COMPLETED"&&ie;if(N&&!Y)return-1;if(!N&&Y)return 1;if(N&&Y)return y(se,ee);const W=ne==="COMPLETED"&&!re,L=z==="COMPLETED"&&!ie;return W&&!L?1:!W&&L?-1:y(se,ee)}),oe=Ce.categorizeTournaments(X,t,a,Q,{subStatus:s,sort:i,result:l,privateSubTab:n,mySubTab:o,lobbySubTab:r});if(console.log(`[app_events] Categorized into ${oe.length} categories for filter: ${t}/${a} sub:${s} sort:${i} result:${l}`),document.body.dataset.tournFilter=t,window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const se=document.querySelector(".tournaments-grid");se&&(se.dataset.filterContext=t),window._homeRouteRenderCards(oe,!0,u,{tab:t,subStatus:s,sort:i,result:l,odds:c});const ee=X.filter(P=>{const _=P.status||P.class,x=P.entities?.guids||[];return(_==="LOCKED"||_==="UPCOMING")&&x.includes(Q)}).length,ne=X.reduce((P,_)=>{const x=_.status||_.class,B=_.entities?.guids||[];return(x==="LOCKED"||x==="UPCOMING")&&B.includes(Q)?P+parseFloat(_.tournament_dollars||0):P},0),z=document.querySelector("bma-app-foot");z&&z.setAttribute("data-active-count",String(ee));const te=document.querySelector("bma-app-head-mid");te&&te.setAttribute("data-active-count",String(ee));const Z=document.querySelector("bma-app-head-top");Z&&(Z.setAttribute("data-active-count",String(ee)),Z.setAttribute("data-td-dollars",String(ne)));const re=document.getElementById("home-tab-active-badge");re&&(re.textContent=ee,re.style.visibility=ee>0?"visible":"hidden");const ie=X.filter(P=>{if(P.is_private!==!0)return!1;const _=P.status||P.class;if(_!=="LOCKED"&&_!=="UPCOMING")return!1;const x=P.entities?.guids||[];return P.creator_guid===Q||x.includes(Q)}).length,y=document.getElementById("home-tab-private-badge");if(y&&(y.textContent=ie),te&&te.setAttribute("data-private-count",String(ie)),z&&z.setAttribute("data-private-count",String(ie)),q.length>0){const P=R.data;q.forEach(_=>{const x=P.find(B=>B.guid===_);if(x){const B=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{de.publish(S.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:_,status:x.status,timestamp:Date.now()}))},B)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available");const K=document.getElementById("bma-scores-banner--id");if(K){const se=new Set,ee=[];for(const ne of R.data){const z=Array.isArray(ne.matches_expanded)?ne.matches_expanded:[];for(const te of z){const Z=te.guid||te.id||te.odds_id;!Z||se.has(Z)||(se.add(Z),ee.push(te))}}K.setAttribute("data-matches",JSON.stringify(ee))}Ce.prefetchGlobalLeaderboard()}),de.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(C,A)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",A);const S=ke();try{const R=JSON.parse(A);console.log("[app_events] SSE tournament sync data:",R);const O=JSON.parse(R.msg);if(console.log("[app_events] Parsed tournaments array:",O),!Array.isArray(O)){console.warn("[app_events] SSE msg is not an array:",O);return}S.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:O}),console.log("[app_events] Pushed SSE data to coreTourn, length:",S.coreTourn.length),de.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),document.querySelector(".play-cntr")&&(console.log("[SSE] Play route is active, triggering real-time update"),Ce.hydratePlayPopup())}catch(R){console.error("[app_events] Error processing SSE tournament sync:",R)}}),de.subscribe(e.hierTopics.SSE__CORE__INVITE_SYNC,(C,A)=>{console.log("[app_events] SSE__CORE__INVITE_SYNC event received");const S=ke();try{const R=JSON.parse(A),O=JSON.parse(R.msg);if(!Array.isArray(O)||O.length===0){console.warn("[app_events] INVITE_SYNC msg not an array:",O);return}const{invite:q,action:Q}=O[0]||{};if(!q?.guid||!Q){console.warn("[app_events] INVITE_SYNC missing invite or action:",O[0]);return}switch(Q){case"created":S.upsertInvite(q);break;case"revoked":case"accepted":case"declined":case"expired":case"pool_full":S.removeInvite(q.guid);break;default:console.warn("[app_events] INVITE_SYNC unknown action:",Q);return}try{window.GameTypeLifeCycle&&Q==="created"&&window.GameTypeLifeCycle.forTournament({guid:q.coreTournaments__guid,class:null}).doInviteReceived({tournament:{guid:q.coreTournaments__guid},invite:{guid:q.guid}}).catch(X=>console.warn("[app_events] doInviteReceived failed (non-fatal):",X?.message))}catch{}de.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:Q,inviteGuid:q.guid,timestamp:Date.now()}))}catch(R){console.error("[app_events] Error processing INVITE_SYNC:",R)}});const F=()=>{const C=document.getElementById("invites-list");if(!C)return;const A=(e.coreInvites||[]).filter(q=>(q.status||"").toUpperCase()==="PENDING");A.sort((q,Q)=>new Date(Q.invited_at||0)-new Date(q.invited_at||0)),C.innerHTML="",A.forEach(q=>{const Q=document.createElement("bma-invite-card"),X=q.tournament_preview||{},oe=(X.sports_allowed||[])[0]||{},K=Ge.find(se=>se.key===oe.key);Q.setAttribute("data-invite-guid",q.guid||""),Q.setAttribute("data-tournament-caption",q.tournament_caption||X.caption||"Bet Max Pool"),Q.setAttribute("data-invited-by-name",q.invited_by?.display_name||q.invited_by?.userName||"A friend"),Q.setAttribute("data-expires-at",q.expires_at||""),oe.key&&Q.setAttribute("data-sport-key",oe.key),K?.group&&Q.setAttribute("data-sport-group",K.group),Q.setAttribute("data-entrants-count",String(X.entities?.count??X.entities?.guids?.length??0)),Q.setAttribute("data-entrants-max",String(X.entities?.max??0)),X.window_start_time&&Q.setAttribute("data-window-start",X.window_start_time),C.appendChild(Q)});const S=document.getElementById("home-tab-invites-badge");S&&(S.textContent=A.length,S.style.visibility=A.length>0?"visible":"hidden");const R=document.querySelector("bma-app-head-mid");R&&R.setAttribute("data-invites-count",String(A.length));const O=document.querySelector("bma-app-foot");O&&O.setAttribute("data-invites-count",String(A.length))};document.addEventListener("invite-accept",async C=>{const A=C.detail?.inviteGuid;if(!A)return;const S=await xe.acceptInvite(A);if(S.ok&&S.data?.tournament){e.pushCoreTourn({timestamp:Date.now(),source:"API",data:[S.data.tournament]}),e.removeInvite(A),de.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"accepted",inviteGuid:A,timestamp:Date.now()})),de.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"INVITE_ACCEPT"})),typeof neodigmToast<"u"&&neodigmToast.q("Joined the pool. Good luck.","success");return}const R=S.data?.error||`http_${S.status}`,O=R==="pool_full"?"This pool just filled up. Ask the host to create another.":R==="expired"?"This invite has expired. Ask the host to send a new one.":R==="already_accepted"?"You already joined this pool.":R==="not_invitee"?"This invite isn't yours.":R==="invite_not_found"?"Invite not found. It may have been revoked.":"Couldn't accept right now. Try again in a moment.";typeof neodigmToast<"u"&&neodigmToast.q(O,"warning"),["pool_full","expired","already_accepted","invite_not_found"].includes(R)&&(e.removeInvite(A),de.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"cleanup",inviteGuid:A,timestamp:Date.now()})))}),document.addEventListener("invite-decline",async C=>{const A=C.detail?.inviteGuid;if(!A)return;e.removeInvite(A),de.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"declined",inviteGuid:A,timestamp:Date.now()}));const S=await xe.declineInvite(A);S.ok||(console.warn("[app_events] decline failed:",S.status,S.data),typeof neodigmToast<"u"&&neodigmToast.q("Couldn't decline right now. Try again.","warning"))}),de.subscribe(e.hierTopics.ROUTE__INVITES_HYDRATE,()=>{F()}),de.subscribe(e.hierTopics.SSE__CORE__INVITE_SYNC,(C,A)=>{try{const S=JSON.parse(A),R=JSON.parse(S.msg),{invite:O,action:q}=R?.[0]||{};if(!O?.guid||!O.tournament_guid)return;const Q=O.tournament_guid,X=Et[Q];if(!X)return;const oe=X.findIndex(K=>K.guid===O.guid);if(q==="accepted"||q==="declined"||q==="expired"||q==="pool_full"){if(oe>=0){const K=[...X];K[oe]={...K[oe],...O},Et[Q]=K,La(Q)}}else q==="revoked"&&oe>=0&&(Et[Q]=X.filter(K=>K.guid!==O.guid),La(Q))}catch(S){console.warn("[info sent invites] SSE handler error:",S)}}),e.appSession?.session_user?.authenticated&&xe.fetchMyInvites().then(C=>{C.ok&&Array.isArray(C.data?.invites)?(e.setCoreInvites(C.data.invites),de.publish(e.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"bootstrap",count:C.data.invites.length,timestamp:Date.now()})),console.log(`[app_events] Invites bootstrap: ${C.data.invites.length} pending`)):console.warn("[app_events] Invites bootstrap failed:",C.status,C.data)}).catch(C=>{console.warn("[app_events] Invites bootstrap error:",C)}),((window.location.hash||"").startsWith("#/home_route")||(window.location.hash||"")==="#/"||!window.location.hash)&&(console.log("[nav-persist] bindAppListeners boot-rehydrate; on home, re-publishing HOME_ONMOUNT"),de.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now(),source:"BOOT_REHYDRATE"}))),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const C=document.querySelector("#caption__my-profile");C&&(C.textContent="My Profile");const A=document.getElementById("profile-trophy-username");A&&(A.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const S=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",S),console.log("[app_events] coreTourn length:",e.coreTourn.length),!S||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const O=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",O.length);const q=K=>{const se=document.getElementById("profile-stats-panel");se&&(se.innerHTML=Ce.buildStatsPanel(O,S,K))};q(Ce._betStatsCache?.stats||null),Ce._ensureBetStatsCache(S).then(K=>{K&&q(K)});let Q=0,X=0,oe=0;O.forEach((K,se)=>{if(!K.tags||!Array.isArray(K.tags)){console.log(`[app_events] Tournament ${se} has no tags or tags not an array`);return}K.tags.forEach((ee,ne)=>{if(typeof ee=="object"&&ee!==null){let z=null;ee.entity_guid===S&&ee.badge?z=ee.badge:ee[S]&&(z=ee[S]),z==="--badge__ribbon--gold"?Q++:z==="--badge__ribbon--silver"?X++:z==="--badge__ribbon--bronze"&&oe++}})}),setTimeout(()=>{let K=document.querySelectorAll(".badge-counter");if(K.length===0){const se=document.querySelector("neodigm-sodapop");se&&(K=se.querySelectorAll(".badge-counter"))}K.length>=3?(K[0].textContent=X,K[1].textContent=Q,K[2].textContent=oe,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const K=document.querySelector("#profile-tournaments-list");if(!K||!S||e.coreTourn.length===0)return;const ne=e.coreTourn[e.coreTourn.length-1].data.filter(re=>{try{return(typeof re.entities=="string"?JSON.parse(re.entities):re.entities)?.guids?.includes(S)}catch{return!1}}),z={LOCKED:0,UPCOMING:1,COMPLETED:2};ne.sort((re,ie)=>{const y=z[re.status]??3,P=z[ie.status]??3;return y!==P?y-P:new Date(ie.status_time||0)-new Date(re.status_time||0)});const te=re=>{let ie=ne;if(re==="active"?ie=ne.filter(y=>y.status==="LOCKED"||y.status==="UPCOMING"):re==="completed"&&(ie=ne.filter(y=>y.status==="COMPLETED")),ie.length===0){K.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}K.innerHTML=ie.map(y=>{const P=y.entities?JSON.stringify(y.entities).replace(/"/g,"&quot;"):"",_=y.tags?JSON.stringify(y.tags).replace(/"/g,"&quot;"):"[]",x=y.sports_allowed?JSON.stringify(y.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${y.guid||""}"
                                        data-bma-tourn-caption="${y.caption||""}"
                                        data-bma-tourn-tagline="${y.tagline||""}"
                                        data-bma-tourn-status="${y.status||""}"
                                        data-bma-tourn-class="${y.status||""}"
                                        data-bma-tourn-sports_allowed="${x}"
                                        data-bma-tourn-entities="${P}"
                                        data-bma-tourn-entry_fee="${y.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${y.tournament_dollars||0}"
                                        data-bma-tourn-matches="${y.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${_}"
                                        data-bma-tourn-window_start_time="${y.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${y.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{K.querySelectorAll("bma-tournament-list-card").forEach((y,P)=>{y.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",y.style.animationDelay=`${Math.min(P*60,400)}ms`})})};te("all");const Z=document.querySelector(".profile-tournaments__filters");Z&&Z.addEventListener("click",re=>{const ie=re.target.closest(".profile-tourn-filter");ie&&(Z.querySelectorAll(".profile-tourn-filter").forEach(y=>y.classList.remove("profile-tourn-filter--active")),ie.classList.add("profile-tourn-filter--active"),te(ie.dataset.filter))})},600)},1e3)},"sodapop_my_profile"))},3e3),window._renderTopPlayers=async function(C="ALL"){const A=ke(),S=document.getElementById("global-leaderboard-container");if(S){S.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{let R;const O=Ce._globalLBCache[C];O?.data&&Date.now()-O.ts<300*1e3?(console.log(`[Global Leaderboard] Using prefetched cache [${C}]`),R=O.data):(console.log(`[Global Leaderboard] Cache miss [${C}], fetching fresh`),R=await xe.fetchAllTimeLeaderboard(C,100,"td"),Ce._globalLBCache[C]={data:R,ts:Date.now(),inflight:!1});const q=R?.data||[],Q=R?.last_updated||null,X=A.coreTourn.length>0?A.coreTourn[A.coreTourn.length-1].data:[];if(!q.length){S.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const oe=S,K=A.appSession?.session_user?.guid,se={};q.forEach(_=>{const x=_.user_guid;se[x]={username:_.username||"Unknown",user_guid:x,totalTDWon:parseFloat(_.total_payout||0),totalPayout:parseFloat(_.total_payout||0),totalBets:parseInt(_.total_betslips||0),tournamentsPlayed:parseInt(_.tournaments_joined||0),tournamentsWon:parseInt(_.tournaments_won||0),totalTD:parseFloat(_.total_td_dollars||0),gold:0,silver:0,bronze:0,sports:new Set}}),X.forEach(_=>{!_.tags||!Array.isArray(_.tags)||_.tags.forEach(x=>{if(typeof x!="object"||!x)return;let B=null,N=null;if(x.entity_guid&&x.badge){if(x.entity_guid==="SYSTEM")return;B=x.entity_guid,N=x.badge}else{const W=Object.keys(x);for(const L of W){const T=x[L];if(typeof T=="string"&&T.startsWith("--badge__ribbon--")){B=L,N=T;break}}}if(!B||!N)return;se[B]||(se[B]={username:B.substring(0,8),user_guid:B,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,totalTD:0,gold:0,silver:0,bronze:0,sports:new Set});const Y=se[B];N==="--badge__ribbon--gold"?Y.gold++:N==="--badge__ribbon--silver"?Y.silver++:N==="--badge__ribbon--bronze"&&Y.bronze++})});const ee=Object.values(se).filter(_=>_.username!=="Unknown");if(Q){const _=Math.round((Date.now()-new Date(Q).getTime())/6e4),x=_<1?"just now":_===1?"1 minute ago":`${_} minutes ago`;console.log(`[Global Leaderboard] Server last updated ${x}`)}const ne=ee.filter(_=>_.gold+_.silver+_.bronze>0),z=new Set;ee.forEach(_=>_.sports.forEach(x=>z.add(x)));const te={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},Z=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let re="all";const ie=(_,x)=>{let B=[...ee],N;_==="overall"&&(B=B.filter(le=>le.gold+le.silver+le.bronze>0)),_==="bysport"&&x&&x!=="all"&&(B=B.filter(le=>le.sports.has(x)));const Y=oe.querySelector(".glb__note");switch(Y&&Y.remove(),_){case"overall":B.sort((le,me)=>me.gold*100+me.silver*10+me.bronze-(le.gold*100+le.silver*10+le.bronze)||me.totalPayout-le.totalPayout||me.totalBets-le.totalBets),N=(le,me,ve,Se,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${me<3?"glb__rank--top3":""}">#${me+1}</span>
                                                <span class="glb__avatar" style="background: ${Se};">${ve}</span>
                                                <span class="glb__name">${le.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right">
                                                ${le.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${le.gold}</span></div>`:""}
                                                ${le.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${le.silver}</span></div>`:""}
                                                ${le.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${le.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":B=B.filter(le=>le.totalTDWon>0),B.sort((le,me)=>me.totalTDWon-le.totalTDWon),N=(le,me,ve,Se,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${me<3?"glb__rank--top3":""}">#${me+1}</span>
                                                <span class="glb__avatar" style="background: ${Se};">${ve}</span>
                                                <span class="glb__name">${le.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__earnings">TD$ ${Math.round(le.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":B.sort((le,me)=>me.totalPayout-le.totalPayout||me.totalBets-le.totalBets),N=(le,me,ve,Se,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${me<3?"glb__rank--top3":""}">#${me+1}</span>
                                                <span class="glb__avatar" style="background: ${Se};">${ve}</span>
                                                <span class="glb__name">${le.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right" style="gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${le.totalBets} bets</span>
                                                <span class="glb__earnings">TD$ ${le.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const W=oe.querySelector(".glb__list");if(!W)return;if(B.length===0){const le=_==="earnings"?"No TD$ won from reconciled bets yet":_==="bysport"?"No players found for this sport":"No leaderboard data available";W.innerHTML=`<div class="leaderboard-empty"><p>${le}</p></div>`;return}const L=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],T=le=>L[le.charCodeAt(0)%L.length];let H="";if(_==="overall"&&B.length>=3){const le=(me,ve,Se,Ae,Ne)=>{const Fe=B[me],Qt=Fe.user_guid===K;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${ve===1?80:ve===2?64:56}px; height: ${ve===1?80:ve===2?64:56}px; background-image: var(${Ae}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${Qt?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${Fe.username}${Qt?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${Fe.gold+Fe.silver+Fe.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${Se}px; background: linear-gradient(180deg, ${Ne}33 0%, ${Ne}0D 100%); border-top: 3px solid ${Ne}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${Ne};">${ve===1?"1st":ve===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};H=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${le(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${le(0,1,90,"--badge__gold","#FFD700")}
                                        ${le(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const ae='<div class="info-section__title">Rankings</div>',ce='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',ge='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(_==="bysport"&&!oe.querySelector(".glb__note")){const me=document.createElement("div");me.className="glb__note",me.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",me.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const ve=oe.querySelector(".glb__sport-filters");ve&&ve.parentNode.insertBefore(me,ve)}let he="";if(_==="earnings"&&B.length>=3){const le=(me,ve,Se,Ae)=>{const Ne=B[me],Fe=Ne.user_guid===K;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${ve===1?80:ve===2?64:56}px; height: ${ve===1?80:ve===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${Fe?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${Ne.username}${Fe?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(Ne.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${Se}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${ve===1?"1st":ve===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};he=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${le(1,2,70,"#00E676")}
                                        ${le(0,1,90,"#00E676")}
                                        ${le(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(_==="overall")W.innerHTML=H+ce+ae+B.map((le,me)=>{const ve=(le.username||"?")[0].toUpperCase(),Se=T(le.username),Ae=le.user_guid===K;return N(le,me,ve,Se,Ae)}).join("");else if(_==="earnings"){const le='<div class="info-section__title">TD$ Won</div>';W.innerHTML=he+ge+le+B.map((me,ve)=>{const Se=(me.username||"?")[0].toUpperCase(),Ae=T(me.username),Ne=me.user_guid===K;return N(me,ve,Se,Ae,Ne)}).join("")}else if(_==="bysport"){let le="";if(B.length>=3){const ve=(Se,Ae,Ne)=>{const Fe=B[Se],Qt=Fe.user_guid===K,tt=T(Fe.username),gt=(Fe.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${tt}; width: ${Ae===1?48:38}px; height: ${Ae===1?48:38}px; font-size: ${Ae===1?"1rem":"0.8rem"};">${gt}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${Qt?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${Fe.username}${Qt?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Fe.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${Ne}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${Ae===1?"1st":Ae===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};le=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${ve(1,2,70)}
                                            ${ve(0,1,90)}
                                            ${ve(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const me='<div class="info-section__title">Rankings</div>';W.innerHTML=le+me+B.map((ve,Se)=>{const Ae=(ve.username||"?")[0].toUpperCase(),Ne=T(ve.username),Fe=ve.user_guid===K;return N(ve,Se,Ae,Ne,Fe)}).join("")}requestAnimationFrame(()=>{W.querySelectorAll(".glb__card, .info-row").forEach((le,me)=>{le.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",le.style.animationDelay=`${Math.min(me*50,400)}ms`})})},y=[...z].map(_=>{const x=te[_]||_.replace(/^[a-z]+_/,"").toUpperCase(),B=Ge.find(Y=>Y.key===_),N=B?B.group:"default";return`<button class="glb__sport-chip" data-sport="${_}">
                                <bma-sport-icon sport="${_}" data-sport-group="${N}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${x}</span>
                            </button>`}).join("");oe.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${Z.map((_,x)=>`
                                    <button class="glb__tab ${x===0?"glb__tab--active":""}" data-tab="${_.id}">${_.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${y}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const P=document.createElement("style");P.textContent=`
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
                        `,oe.prepend(P),ie("overall"),oe.querySelectorAll(".glb__tab").forEach(_=>{_.addEventListener("click",()=>{oe.querySelectorAll(".glb__tab").forEach(N=>N.classList.remove("glb__tab--active")),_.classList.add("glb__tab--active");const x=_.dataset.tab,B=oe.querySelector(".glb__sport-filters");B&&(B.style.display=x==="bysport"?"flex":"none"),ie(x,x==="bysport"?re:void 0)})}),oe.querySelectorAll(".glb__sport-chip").forEach(_=>{_.addEventListener("click",()=>{oe.querySelectorAll(".glb__sport-chip").forEach(x=>x.classList.remove("glb__sport-chip--active")),_.classList.add("glb__sport-chip--active"),re=_.dataset.sport,ie("bysport",re)})})}catch(R){console.error("[appEvents] Error fetching global leaderboard:",R);const O=document.getElementById("global-leaderboard-container");O&&(O.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>')}}},setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){window._renderTopPlayers&&await window._renderTopPlayers()},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}};class xv extends HTMLElement{constructor(){super(),this.selectedItem="foot_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count","data-private-count","data-invites-count"]}attributeChangedCallback(t,a,s){a!==s&&(t==="data-selected-item"&&(this.selectedItem=s||"foot_lobby"),this.shadowRoot&&this.render())}handleItemClick(t,a){this.selectedItem=t,this.setAttribute("data-selected-item",t),de.publish(a,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){Me.theme;const t=Me.isDark,a=[{name:"foot_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.LOBBY"},{name:"foot_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.FOOT.TOURNEYS"},{name:"foot_private",caption:"Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.PRIVATE"},{name:"foot_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_profile",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],s=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,o=parseInt(this.getAttribute("data-invites-count"))||0,r=i=>{const l=this.selectedItem===i.name;let c="";return i.name==="foot_tourneys"?c=`<span class="nav-badge">${s}</span>`:i.name==="foot_private"&&(c=`<span class="nav-badge">${n}</span>`,o>0&&(c+=`<span class="nav-badge nav-badge--invite" aria-label="${o} pending invite${o===1?"":"s"}">${o}</span>`)),`
        <div
          class="nav-item ${l?"nav-selected":"nav-unselected"}"
          data-item="${i.name}"
          role="button"
          tabindex="0"
          aria-label="${i.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${i.iconVar}"></div>
            ${c}
          </div>
          <span class="nav-caption">${i.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}
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
        @media ${tc.mobile} {
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
        ${a.map(i=>r(i)).join("")}
      </div>
    `,a.forEach(i=>{const l=this.shadowRoot.querySelector(`[data-item="${i.name}"]`);l&&(l.addEventListener("click",()=>this.handleItemClick(i.name,i.topic)),l.addEventListener("keypress",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.handleItemClick(i.name,i.topic))}))})}}customElements.define("bma-app-foot",xv);const Tv=["data-selected-item"],kv={__name:"App",setup(e){const t=lt(),a=ys(),s=ke(),n=_e(()=>{const c=a.name;return c==="home_route"||c==="top_players_route"}),o=Pe("foot_lobby"),r=c=>c==="my"?"foot_tourneys":c==="private"?"foot_private":"foot_lobby",i=()=>{const c=window.location.hash||"";if(c.startsWith("#/top_players_route"))o.value="foot_leaderboard";else if(c.startsWith("#/home_route")||c==="#/"||!c){const u=document.body.dataset.tournFilter||"lobby";o.value=r(u)}};Na(()=>a.name,()=>i(),{immediate:!0});let l=null;return it(()=>{l=de.subscribe("ROUTE.HOME_HYDRATE",()=>i())}),Xt(()=>{l&&de.unsubscribe(l)}),it(()=>{setTimeout(()=>{const c=s.appSession?.session_user?.guid,u=s.appSession?.session_user?.authenticated;c&&u&&s.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",c),nn.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",c,s,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((c=null)=>{t.currentRoute.value?.meta?.previewAllowed||(neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${c}`,"primary"),t.push({name:c}))}).setOnState((c=null)=>{c&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=c)}).init({BASE:xe.API_baseURI})},2e3),setTimeout(()=>{Ce.bindAppListeners(s)},3e3),t.beforeEach((c,u,d)=>{if(c.name==="splash_route")return si(rs.AUTHED),d();if(!c.name)return d(!1);const p=Hf(c.name,c.meta);if(si(p),p===rs.DENIED)return d(!1);d()}),(c,u)=>(pe(),fe(Ie,null,[et(ot(Jl),null,{default:no(({Component:d})=>[et(_u,{name:"slide-left"},{default:no(()=>[(pe(),Sl(wd(d)))]),_:2},1024)]),_:1}),n.value?(pe(),fe("bma-app-foot",{key:0,"data-selected-item":o.value},null,8,Tv)):Te("",!0)],64))}};class Sv extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name","data-active-count","data-td-dollars"]}attributeChangedCallback(t,a,s){this.shadowRoot&&a!==s&&this.render()}handleLogoClick(t){t.preventDefault(),de.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),de.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}handleCreateContestClick(t){t.preventDefault(),de.publish("WC.APP.HEAD_TOP.CREATE_CONTEST",JSON.stringify({timestamp:Date.now()}))}render(){const t=Me.isDark,a=this.getAttribute("data-user-name")||"Guest",s=this.getAttribute("data-active-count")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),o=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString();this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}
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
    `;const r=this.shadowRoot.querySelector("#logoLink"),i=this.shadowRoot.querySelector("#profileIcon"),l=this.shadowRoot.querySelector("#createContestBtn");r&&r.addEventListener("click",c=>this.handleLogoClick(c)),i&&i.addEventListener("click",c=>this.handleProfileClick(c)),l&&l.addEventListener("click",c=>this.handleCreateContestClick(c))}}customElements.define("bma-app-head-top",Sv);class Ev extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count","data-private-count","data-invites-count"]}attributeChangedCallback(t,a,s){a!==s&&(t==="data-selected-tab"&&(this.selectedTab=s||"head_mid_lobby"),this.shadowRoot&&this.render())}handleTabClick(t,a){this.selectedTab=t,this.setAttribute("data-selected-tab",t),de.publish(a,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=Me.isDark,a=[{name:"head_mid_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS"},{name:"head_mid_private",caption:"Bet Max Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE"},{name:"head_mid_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],s=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,o=parseInt(this.getAttribute("data-invites-count"))||0,r=i=>{const l=this.selectedTab===i.name;let c="";return i.name==="head_mid_tourneys"?c=`<span class="nav-badge">${s}</span>`:i.name==="head_mid_private"&&(c=`<span class="nav-badge">${n}</span>`,o>0&&(c+=`<span class="nav-badge nav-badge--invite" aria-label="${o} pending invite${o===1?"":"s"}">${o}</span>`)),`
        <div
          class="nav-item ${l?"nav-selected":"nav-unselected"}"
          data-tab="${i.name}"
          role="button"
          tabindex="0"
          aria-label="${i.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${i.iconVar}"></div>
            ${c}
          </div>
          <span class="nav-caption">${i.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}
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
        @media ${tc.mobile} {
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
        ${a.map(i=>r(i)).join("")}
      </div>
    `,a.forEach(i=>{const l=this.shadowRoot.querySelector(`[data-tab="${i.name}"]`);l&&(l.addEventListener("click",()=>this.handleTabClick(i.name,i.topic)),l.addEventListener("keypress",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.handleTabClick(i.name,i.topic))}))})}}customElements.define("bma-app-head-mid",Ev);class Av extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,a,s){if(this.shadowRoot&&a!==s){if(t==="data-selected-chip"){if(this.selectedChip=s||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,a){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),de.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:a,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(a=>{const s=a.getAttribute("data-chip")===this.selectedChip;a.classList.toggle("chip-selected",s),a.classList.toggle("chip-unselected",!s)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(".head-sports-container"),n=this.shadowRoot?.querySelector("#navPrev"),o=this.shadowRoot?.querySelector("#navNext");if(!t||!a||!s||!n||!o)return;const r=Math.max(0,t.scrollWidth-t.clientWidth),i=r>8,l=t.scrollLeft<=4,c=t.scrollLeft>=r-4;s.classList.toggle("rail-has-overflow",i),t.classList.toggle("has-scroll",i),a.classList.toggle("has-overflow",i),a.classList.toggle("has-left-overflow",i&&!l),a.classList.toggle("has-right-overflow",i&&!c),n.classList.toggle("nav-disabled",!i||l),o.classList.toggle("nav-disabled",!i||c),n.setAttribute("aria-disabled",String(!i||l)),o.setAttribute("aria-disabled",String(!i||c)),n.tabIndex=!i||l?-1:0,o.tabIndex=!i||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!a||!s)return;const n=a.getBoundingClientRect(),o=s.getBoundingClientRect(),r=t.scrollWidth-t.clientWidth;if(o.left>=n.left&&o.right<=n.right)return;const i=12;let l;o.left<n.left?l=t.scrollLeft+(o.left-n.left)-i:l=t.scrollLeft+(o.right-n.right)+i,l=Math.max(0,Math.min(l,r)),!(Math.abs(t.scrollLeft-l)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:l,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const a=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=a-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const a=[...t.querySelectorAll(".sport-chip")];if(!a.length)return;const s=Math.max(0,t.scrollWidth-t.clientWidth);if(s<=8)return;const n=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,o=t.scrollLeft;let r=o,i=Number.POSITIVE_INFINITY;a.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-n,s)),u=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-t.clientWidth+n,s));[c,u].forEach(d=>{const p=Math.abs(d-o);p<i&&(i=p,r=d)})}),!(i<8)&&(this.isSnapping=!0,t.scrollTo({left:r,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",s=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=s.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),de.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const a=()=>{if(!this.isPointerDown)return;const s=Date.now()-this.dragStartTime,n=this.dragDistance>10||this.dragDistance>4&&s>180;this.isPointerDown=!1,t.style.cursor="grab",n&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",a),t.addEventListener("mouseup",a),t.addEventListener("mousemove",s=>{if(!this.isPointerDown)return;s.preventDefault();const o=(s.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(o)),t.scrollLeft=this.dragStartScrollLeft-o}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=Me.isDark,n=(ke().appMeta?.sports||[]).filter(f=>f.active===!0),o=["NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],r=[...n].sort((f,g)=>{const h=f.title||f.description||"",k=g.title||g.description||"",m=o.indexOf(h),v=o.indexOf(k);return m!==-1&&v!==-1?m-v:m!==-1?-1:v!==-1?1:h.toLowerCase().localeCompare(k.toLowerCase())}),i=r.findIndex(f=>(f.title||f.description)==="NFL");if(i!==-1){const[f]=r.splice(i,1);let g=-1;r.forEach((k,m)=>{String(k.key||"").startsWith("soccer_fifa_world_cup")&&(g=m)});const h=g!==-1?g+1:r.length;r.splice(h,0,f)}const l=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...r],c=f=>{const g=this.selectedChip===f.key,h=f.key==="all";let k="";return h?k='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':k=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`,`
        <div
          class="sport-chip ${g?"chip-selected":"chip-unselected"}"
          data-chip="${f.key}"
          role="button"
          tabindex="0"
          aria-label="${f.description||f.title}"
        >
          <div class="chip-circle">
            ${k}
          </div>
          <span class="chip-title">${f.title||f.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}
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
            ${l.map(f=>c(f)).join("")}
          </div>
        </div>
        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,l.forEach(f=>{const g=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const u=this.shadowRoot.querySelector("#navPrev"),d=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),d&&d.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const p=this.shadowRoot.querySelector(".chips-container");p&&(p.scrollLeft=0),requestAnimationFrame(()=>{p&&(p.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",Av);class Cv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-matches","data-sync-theme"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,a,s){a!==s&&this.render()}get matches(){const t=this.getAttribute("data-matches");if(!t)return[];try{return JSON.parse(t)}catch{return[]}}_sportGroup(t){return Ge.find(s=>s.key===t)?.group||"default"}_parseScoreboard(t){const a=t.scoreboard_data;if(!a)return null;try{return typeof a=="string"?JSON.parse(a):a}catch{return null}}_getMatchDisplay(t){const a=this._parseScoreboard(t)||{},s=parseInt(a.home_score||0),n=parseInt(a.away_score||0),o=a.period||0,r=String(a.time_remaining||"").trim(),i=r.toLowerCase(),l=s>0||n>0||o>0,c=String(t.status||"").toUpperCase()==="COMPLETED"||i==="final",u=t.scheduled_at||t.start_time||"";let d=!1;if(u){const v=u.includes("Z")||/[+-]\d{2}:\d{2}$/.test(u),w=new Date(v?u:u+"Z").getTime();isNaN(w)||(d=w<=Date.now())}const f=!c&&(l||r&&i!=="scheduled"&&i!=="final"||d),g=t.home_team_id||t.home_team||"Home",h=t.away_team_id||t.away_team||"Away";if(c)return{homeName:g,awayName:h,homeScore:s,awayScore:n,statusLabel:"FINAL",statusClass:"final",showScores:!0};if(f)return{homeName:g,awayName:h,homeScore:s,awayScore:n,statusLabel:r&&i!=="in progress"?r:"LIVE",statusClass:"live",showScores:!0};const k=t.scheduled_at||t.start_time||t.status_time;let m="UPCOMING";if(k)try{const v=k.includes("Z")||/[+-]\d{2}:\d{2}$/.test(k),w=new Date(v?k:k+"Z");isNaN(w.getTime())||(m=w.toLocaleString(void 0,{weekday:"short",hour:"numeric",minute:"2-digit"}))}catch{}return{homeName:g,awayName:h,homeScore:0,awayScore:0,statusLabel:m,statusClass:"upcoming",showScores:!1}}render(){const t=Date.now(),a=1440*60*1e3,s=2880*60*1e3,o=this.matches.map(c=>({match:c,display:this._getMatchDisplay(c)})).filter(c=>c.display!==null).filter(c=>{const u=c.display.statusClass;if(u==="live")return!0;const d=new Date(c.match.scheduled_at||c.match.status_time||0).getTime();return d?u==="final"?t-d<=a:u==="upcoming"?d-t<=s&&d>=t:!1:!1}),r={live:0,final:1,upcoming:2};o.sort((c,u)=>{const d=r[c.display.statusClass]??9,p=r[u.display.statusClass]??9;if(d!==p)return d-p;const f=new Date(c.match.scheduled_at||c.match.status_time||0).getTime(),g=new Date(u.match.scheduled_at||u.match.status_time||0).getTime();return c.display.statusClass==="upcoming"?f-g:g-f});const i=o.slice(0,40);if(i.length===0){this.shadowRoot.innerHTML="";return}const l=i.map(({match:c,display:u})=>{const d=this._sportGroup(c.sport_id),p=f=>u.showScores?`<span class="score-pill__score">${f}</span>`:"";return`
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
                ${Ve()}
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
                    /* Duration is set inline per-render so speed scales
                       with content count. The animation translates by
                       one full content-set width per cycle (since the
                       set is duplicated), so with a fixed duration few
                       entries crawl while many entries fly. ~4s per
                       pill keeps the apparent scroll speed constant. */
                    animation: scores-marquee linear infinite;
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
                <div class="scores-track" style="animation-duration: ${Math.max(25,i.length*4)}s">
                    ${l}
                    ${l}
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".score-pill").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.matchGuid;de.publish("SCORES.MATCH_CLICK",JSON.stringify({matchGuid:u,timestamp:Date.now()}))})})}_abbr(t){if(!t)return"";const a=String(t);if(a.length<=14)return a;const s=a.split(" ");return s.length>1?s[s.length-1].slice(0,14):a.slice(0,14)}}customElements.define("bma-scores-banner",Cv);class Pv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}_doLogout(){de.publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()}))}render(){let t="";try{t=ke().appSession?.session_app?.version||""}catch{}this.shadowRoot.innerHTML=`
            <style>
                ${Ve()}
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
        `;const a=this.shadowRoot.querySelector(".foot-logout");a&&a.addEventListener("click",()=>this._doLogout())}}customElements.define("bma-app-foot-branded",Pv);const Ov='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',Os='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',Ls='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',Ms='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class Lv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip","data-bma-mode-token"]}attributeChangedCallback(t,a,s){a!==s&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(a){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",a),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const a=t.bet||[];if(a.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const s=a[0],n=s.short_title||"Match Info N/A",r=Object.keys(s).filter(F=>F!=="short_title")[0]||"Unknown Team",i=s[r]||{},l=r==="Draw"?"Tie":r,c=i.odds??"N/A",u=(i.type||"N/A").toUpperCase(),d=parseFloat(i.stake||0),p=parseFloat(i.payout||0),f=i.reconciled!==!1,g=.01;let h,k,m;if(!f)h="pending",k="Pending",m=Ov;else if(i.outcome)switch(i.outcome){case"WIN":h="won",k="Won",m=Os;break;case"HALF_WIN":h="half_won",k="Half Win",m=Os;break;case"PUSH":h="push",k="Push",m=Ms;break;case"VOIDED":h="voided",k="Voided",m=Ms;break;case"HALF_LOSS":h="half_lost",k="Half Loss",m=Ls;break;case"LOSS":h="lost",k="Lost",m=Ls;break;default:p>d+g?(h="won",k="Won",m=Os):p<d-g?(h="lost",k="Lost",m=Ls):(h="push",k="Push",m=Ms)}else p>d+g?(h="won",k="Won",m=Os):p<d-g?(h="lost",k="Lost",m=Ls):(h="push",k="Push",m=Ms);let v=l;if(i.type==="spread"&&i.point!==void 0){const F=parseFloat(i.point);if(F===0)v=`${l} (DNB)`;else{const G=F>0?`+${F}`:`${F}`;v=`${l} ${G}`}}else i.type==="total"&&i.point!==void 0&&(v=`${i.team==="over"?"Over":"Under"} ${i.point}`);const w=F=>`TD$ ${F.toFixed(2)}`,E=p-d;let $="";if(h==="won"||h==="half_won"){const F=parseFloat(c)||0;if(Number.isFinite(F)&&F!==0&&d>0&&p>0){const G=F>0?d*F/100:d/(Math.abs(F)/100),C=d+G;if(C>0&&p>C+.005){const A=p/C,S=parseFloat(A.toFixed(2)).toString(),R=this.getAttribute("data-bma-mode-token")||"";let O="Bonus";if(R&&window.GameTypeLifeCycle?.forToken)try{const q=window.GameTypeLifeCycle.forToken(R);q?.bonusLabel&&(O=q.bonusLabel)}catch{}$=`${O} ${S}×`}}}let D,M;switch(h){case"pending":D=E>0?`+${w(E)}`:w(0),M="To win";break;case"won":D=`+${w(E)}`,M="Profit";break;case"half_won":D=`+${w(E)}`,M="Half Profit";break;case"lost":D=`-${w(d)}`,M="Lost";break;case"half_lost":D=`-${w(d-p)}`,M="Half Lost";break;case"push":D=w(d),M="Returned";break;case"voided":D=w(d),M="Refund";break}const V=parseInt(c,10),I=Number.isFinite(V)&&V>0?`+${V}`:`${c}`,U=t.status_time?Ga.formatDateLocal(t.status_time):"",j=h==="pending"?"Placed":"Settled";this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}

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
        /* Voided — slate-blue wash. Distinct from push (transparent) so a
           refund-due-to-invalidation reads differently from a tied-match
           refund, but stays neutral (no green/red emotion). */
        .card.voided::before    { background: rgba(120, 144, 168, 0.04); }

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
        .card.voided .pill {
          background: rgba(120, 144, 168, 0.16);
          color: #8DA3BD;
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
          display: inline-flex;
          align-items: baseline;
          gap: 6px;
        }
        /* Multiplier mark — tight typographic tag next to the hero
           number, only rendered when a mode bonus was applied at reconcile
           (LONGSHOT_MAYHEM, TIERED_FORMAT). Stays gold regardless of the
           hero's state color so it reads as a separate signal: this
           profit number includes a multiplier. */
        .hero-mult {
          font-size: 0.7rem;
          font-weight: 800;
          color: var(--status-locked-text, #F7C60D);
          letter-spacing: 0.2px;
          text-decoration: none;
          line-height: 1;
        }

        .card.pending   .hero { color: var(--status-locked-text, #F7C60D); }
        .card.won       .hero { color: var(--status-upcoming-text, #00E676); }
        .card.half_won  .hero { color: #6FD89E; }
        .card.lost      .hero { color: var(--status-completed-text, #CD5659); text-decoration: line-through; text-decoration-thickness: 2px; }
        .card.half_lost .hero { color: #D8898B; }
        .card.push      .hero { color: var(--text-secondary, #b0b0b0); }
        .card.voided    .hero { color: var(--text-secondary, #b0b0b0); }

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
          <span class="pill-label">${k}</span>
        </div>
        <div class="body">
          <div class="header">
            <div class="match-desc">${n}</div>
          </div>
          <div class="middle">
            <div class="selection">${v}</div>
            <div class="odds">${I}</div>
            <div class="side-meta">
              <div class="bet-type">${u}</div>
              <div class="stake">${w(d)} stake</div>
            </div>
          </div>
          <div class="footer">
            <div class="hero">
              <span>${D}</span>
              ${$?`<span class="hero-mult">${$}</span>`:""}
            </div>
            <div class="footer-meta">
              <div class="hero-sublabel">${M}</div>
              <div class="timestamp">${j} · ${U}</div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",Lv);class Mv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-game-mode-class","data-starting-td","data-tags","data-bets"]}connectedCallback(){this.render()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}_readJSONAttr(t){const a=this.getAttribute(t);if(!a)return null;try{return JSON.parse(a)}catch{return null}}_totalStakes(t){let a=0;for(const s of t||[]){const n=s?.bet||[];for(const o of n)for(const r of Object.keys(o)){if(r==="short_title")continue;const i=o[r],l=parseFloat(i?.stake||0);isNaN(l)||(a+=l)}}return a}render(){const t=this.getAttribute("data-game-mode-class")||"DEFAULT_FORMAT",a=parseFloat(this.getAttribute("data-starting-td")||0),s=this._readJSONAttr("data-tags")||[],n=this._readJSONAttr("data-bets")||[],o=typeof window<"u"&&window.GameTypeLifeCycle?window.GameTypeLifeCycle.forToken(t)||window.GameTypeLifeCycle.forTournament({class:t}):null;if(!o||typeof o.getProgressUI!="function"){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}const r={tournament_dollars:a,tags:s},i=o.getProgressUI(n,r);if(!i||i.type==="NONE"){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}if(this.removeAttribute("hidden"),i.type==="LONGSHOT"){const g=!!(i.spendAll&&!i.stakeComplete&&i.startingTD>0);this.shadowRoot.innerHTML=`
        <style>
          :host { display: block; margin: 0 8px 10px; }
          :host([hidden]) { display: none; }
        </style>
        <bma-longshot-chip
          data-threshold="${i.threshold??150}"
          data-ratio="${i.ratio??.25}"
          data-spend-all="${g?"true":"false"}"
          data-starting-td="${i.startingTD??0}"
          data-total-stakes="${i.totalStakes??0}"
          data-stake-remaining="${i.stakeRemaining??0}"
        ></bma-longshot-chip>
      `;return}if(i.type==="TIERED"){const g=JSON.stringify(i.tierMultipliers||[1,1.5,2,3]),h=JSON.stringify(i.tierLabels||["Bronze","Silver","Gold","Platinum"]);this.shadowRoot.innerHTML=`
        <style>
          :host { display: block; margin: 0 8px 10px; }
          :host([hidden]) { display: none; }
        </style>
        <bma-tier-meter
          data-current-tier-index="${i.currentTierIndex??0}"
          data-current-tier-label="${i.currentTierLabel??"Bronze"}"
          data-current-multiplier="${i.currentMultiplier??1}"
          data-current-streak="${i.currentStreak??0}"
          data-wins-to-next="${i.winsToNextTier??-1}"
          data-next-tier-label="${i.nextTierLabel??""}"
          data-next-multiplier="${i.nextMultiplier??""}"
          data-tier-multipliers='${g}'
          data-tier-labels='${h}'
          data-threshold="${i.threshold??3}"
          data-at-max="${i.atMax?"true":"false"}"
        ></bma-tier-meter>
      `;return}const l=this._totalStakes(n),c=Math.round(a).toLocaleString(),u=Math.round(l).toLocaleString(),d=Math.round(Math.max(0,a-l)).toLocaleString();if(i.complete){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}const p=i.type==="BET_TYPES"?"Build your lineup to qualify for the leaderboard.":`Bet TD$ ${c} to qualify for the leaderboard.`,f=i.hints?.[0]||`TD$ ${u} placed. TD$ ${d} to qualify.`;this.shadowRoot.innerHTML=`
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
    `}}customElements.define("bma-game-mode-progress",Mv);class Dv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-threshold","data-ratio","data-spend-all","data-starting-td","data-total-stakes","data-stake-remaining"]}connectedCallback(){this.render()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}_readNum(t,a){const s=parseFloat(this.getAttribute(t));return Number.isFinite(s)?s:a}render(){const t=this._readNum("data-threshold",150),a=this._readNum("data-ratio",.25),s=this.getAttribute("data-spend-all")==="true",n=this._readNum("data-starting-td",0),o=this._readNum("data-total-stakes",0),r=this._readNum("data-stake-remaining",0),i=t>=0?`+${t}`:`${t}`,l=Math.round(a*100),c=s&&r>.01&&n>0,u=d=>`TD$ ${Math.round(d).toLocaleString()}`;this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; margin: 0; }
        /* The browser-default hidden attribute doesn't take effect on a
           custom element that explicitly sets :host display, because
           :host wins specificity. Without this rule, setAttribute('hidden')
           was a no-op — the chip stayed visible on non-LONGSHOT pools. */
        :host([hidden]) { display: none !important; }

        .card {
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          /* Sharp edges — reads as a data panel rather than a chip,
             matches the squared feel of admin/stats surfaces. */
          border-radius: 0;
          /* Single thin neutral border — the longshot signal lives in
             the green header label, qualifying-odds button outlines,
             and bonus accent values. A thick green left band collided
             visually with the bet-slip green treatment. */
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .row { padding: 10px 14px; }
        .row + .row {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        /* ── Header ─────────────────────────────────────────────────────
           Mode label on the left, threshold/bonus pill values on the right.
           Single horizontal line so the card scans as a header strip
           rather than a multi-line block. */
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .header__label {
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: var(--status-upcoming-text, #00E676);
          line-height: 1;
        }
        .header__values {
          display: inline-flex;
          align-items: baseline;
          gap: 10px;
          font-variant-numeric: tabular-nums;
        }
        .header__num {
          font-size: 0.95rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }
        .header__sep {
          width: 1px;
          height: 11px;
          background: rgba(255, 255, 255, 0.18);
        }
        .header__hint {
          font-size: 0.62rem;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.4px;
          text-transform: uppercase;
        }

        /* ── Stake-progress hint ────────────────────────────────────────
           Compact two-line block. Action number in gold (matches the
           "needs attention" semantic used elsewhere in the dashboard);
           sublabel is muted so the eye lands on the action first. */
        .hint {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .hint__line {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.25;
        }
        .hint__line strong {
          font-weight: 800;
          color: var(--status-locked-text, #F7C60D);
        }
        .hint__sub {
          font-size: 0.66rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.3;
        }
      </style>

      <div class="card">
        <div class="row header">
          <span class="header__label">Longshot Mayhem</span>
          <span class="header__values">
            <span class="header__num">${i}</span>
            <span class="header__hint">or higher</span>
            <span class="header__sep"></span>
            <span class="header__num">${l}%</span>
            <span class="header__hint">bonus</span>
          </span>
        </div>

        ${c?`
          <div class="row hint">
            <span class="hint__line">Bet <strong>${u(r)}</strong> more to qualify</span>
            <span class="hint__sub">${u(o)} of ${u(n)} placed · spend all to finish on the leaderboard</span>
          </div>
        `:""}
      </div>
    `}}customElements.define("bma-longshot-chip",Dv);const Zn={Bronze:"#CD7F32",Silver:"#B5BCC2",Gold:"#F7C60D",Platinum:"#DDE6F0",Diamond:"#9FE7FF"};class Rv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-current-tier-index","data-current-tier-label","data-current-multiplier","data-current-streak","data-wins-to-next","data-next-tier-label","data-next-multiplier","data-tier-multipliers","data-tier-labels","data-threshold","data-at-max"]}connectedCallback(){this.render()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}_readJSON(t,a){const s=this.getAttribute(t);if(!s)return a;try{return JSON.parse(s)}catch{return a}}_readNum(t,a){const s=parseFloat(this.getAttribute(t));return Number.isFinite(s)?s:a}_readInt(t,a){const s=parseInt(this.getAttribute(t)||"",10);return Number.isFinite(s)?s:a}render(){const t=this._readInt("data-current-tier-index",0),a=this.getAttribute("data-current-tier-label")||"Bronze",s=this._readNum("data-current-multiplier",1),n=this._readInt("data-current-streak",0),o=this._readInt("data-wins-to-next",-1),r=this.getAttribute("data-next-tier-label")||"",i=this._readJSON("data-tier-multipliers",[1,1.5,2,3]),l=this._readJSON("data-tier-labels",["Bronze","Silver","Gold","Platinum"]),c=this.getAttribute("data-at-max")==="true",u=Zn[a]||"#F7C60D",d=g=>Number.isInteger(g)?`${g}×`:`${g}×`,p=i.map((g,h)=>{const k=l[h]||`Tier ${h+1}`,m=Zn[k]||"#F7C60D",v=h===t,w=h<t;return`
        <div class="ladder__cell ${v?"ladder__cell--current":""}">
          <span class="${v?"dot dot--current":w?"dot dot--past":"dot dot--future"}" style="--tier-color: ${m};"></span>
          <span class="ladder__label" style="${v?`color: ${m};`:""}">${k}</span>
          <span class="ladder__mult">${d(g)}</span>
        </div>
      `}).join('<span class="ladder__connector" aria-hidden="true"></span>'),f=c?`<span class="hint__line">Max tier reached — every win pays at <strong style="color:${u};">${d(s)}</strong></span>`:o>=0?`<span class="hint__line">${o} ${o===1?"win":"wins"} from <strong style="color:${Zn[r]||"#F7C60D"};">${r}</strong></span>
           <span class="hint__sub">Streak: ${n} ${n===1?"win":"wins"} · keep stringing them together</span>`:"";this.shadowRoot.innerHTML=`
      <style>
        :host { display: block; margin: 0; }
        /* The browser-default hidden attribute doesn't take effect on a
           custom element with an explicit :host display rule (specificity
           outranks the user-agent stylesheet). Make hidden actually hide. */
        :host([hidden]) { display: none !important; }

        .card {
          background: rgba(20, 20, 20, 0.65);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 0;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
          overflow: hidden;
        }

        .row { padding: 10px 14px; }
        .row + .row { border-top: 1px solid rgba(255, 255, 255, 0.06); }

        /* ── Header ─────────────────────────────────────────────────── */
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .header__label {
          font-size: 0.66rem;
          font-weight: 800;
          letter-spacing: 0.8px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1;
        }
        .header__current {
          display: inline-flex;
          align-items: baseline;
          gap: 8px;
          font-variant-numeric: tabular-nums;
        }
        .header__tier {
          font-size: 0.7rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          line-height: 1;
        }
        .header__mult {
          font-size: 0.95rem;
          font-weight: 800;
          color: #fff;
          line-height: 1;
        }

        /* ── Tier ladder ───────────────────────────────────────────────
           Equal-width cells separated by thin connector lines. Each cell
           shows a dot, the tier name, and the multiplier value. The
           current tier's dot is larger + pulsing-glow so it pops; past
           tiers fill solid in their color; future tiers are hollow
           rings. */
        .ladder {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .ladder__cell {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          min-width: 0;
        }
        .ladder__connector {
          flex: 0 0 12px;
          height: 1px;
          background: rgba(255, 255, 255, 0.12);
          margin-bottom: 18px;
        }
        .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: transparent;
          box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, 0.22);
        }
        .dot--past {
          background: var(--tier-color, #F7C60D);
          box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.15);
        }
        .dot--current {
          width: 12px;
          height: 12px;
          background: var(--tier-color, #F7C60D);
          box-shadow:
            inset 0 0 0 1px rgba(0, 0, 0, 0.15),
            0 0 0 3px color-mix(in srgb, var(--tier-color, #F7C60D) 25%, transparent);
        }
        .ladder__label {
          font-size: 0.6rem;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1;
        }
        .ladder__cell--current .ladder__label {
          font-weight: 800;
        }
        .ladder__mult {
          font-size: 0.7rem;
          font-weight: 800;
          color: #fff;
          font-variant-numeric: tabular-nums;
          line-height: 1;
        }

        /* ── Progress hint ────────────────────────────────────────────── */
        .hint {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .hint__line {
          font-size: 0.78rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.88);
          line-height: 1.25;
        }
        .hint__line strong { font-weight: 800; }
        .hint__sub {
          font-size: 0.66rem;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.3;
        }
      </style>

      <div class="card">
        <div class="row header">
          <span class="header__label">Bet Max Tiers</span>
          <span class="header__current">
            <span class="header__tier" style="color: ${u};">${a}</span>
            <span class="header__mult">${d(s)}</span>
          </span>
        </div>

        <div class="row ladder">
          ${p}
        </div>

        ${f?`<div class="row hint">${f}</div>`:""}
      </div>
    `}}customElements.define("bma-tier-meter",Rv);const $v="bma-beta-banner-dismissed:";class Iv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-tournament-guid","data-mode-token","data-mode-label","data-beta-message"]}connectedCallback(){this.render()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}_storageKey(){const t=this.getAttribute("data-tournament-guid")||"";return t?`${$v}${t}`:null}_isDismissed(){const t=this._storageKey();if(!t)return!1;try{return localStorage.getItem(t)==="1"}catch{return!1}}_markDismissed(){const t=this._storageKey();if(t)try{localStorage.setItem(t,"1")}catch{}}render(){const t=this.getAttribute("data-mode-token")||"",a=this.getAttribute("data-mode-label")||t,s=this.getAttribute("data-beta-message")||"";if(!this.getAttribute("data-tournament-guid")||!s){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}if(this._isDismissed()){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}this.removeAttribute("hidden"),this.shadowRoot.innerHTML=`
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
        `;const n=this.shadowRoot.querySelector(".dismiss");n&&n.addEventListener("click",()=>{this._markDismissed(),this.setAttribute("hidden",""),this.shadowRoot.innerHTML=""})}_escape(t){return String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}}customElements.define("bma-mode-beta-banner",Iv);class Nv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-invite-guid","data-tournament-caption","data-invited-by-name","data-expires-at","data-sport-key","data-sport-group","data-entrants-count","data-entrants-max","data-window-start"]}connectedCallback(){this.render()}attributeChangedCallback(t,a,s){a!==s&&this.shadowRoot&&this.render()}_formatCountdown(t){if(!t)return{text:"",level:"normal"};let a=new Date(t);if(!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z")),isNaN(a.getTime()))return{text:"",level:"normal"};const s=a.getTime()-Date.now();if(s<=0)return{text:"Expired",level:"critical"};const n=Math.floor(s/6e4),o=Math.floor(n/60),r=Math.floor(o/24);return r>=2?{text:`Expires in ${r}d`,level:"normal"}:o>=1?{text:`Expires in ${o}h`,level:"normal"}:n>=1?{text:`Expires in ${n}m`,level:"warn"}:{text:"Expires soon",level:"critical"}}_formatDay(t){if(!t)return"";let a=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z")),isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}render(){const t=this.getAttribute("data-invite-guid")||"",a=this.getAttribute("data-tournament-caption")||"Bet Max Pool",s=this.getAttribute("data-invited-by-name")||"Someone",n=this.getAttribute("data-expires-at")||"",o=this.getAttribute("data-sport-key")||"",r=this.getAttribute("data-sport-group")||"",i=this.getAttribute("data-entrants-count")||"0",l=this.getAttribute("data-entrants-max")||"0",c=this.getAttribute("data-window-start")||"",{text:u,level:d}=this._formatCountdown(n),p=d!=="normal"?`countdown--${d}`:"",f=o?`<bma-sport-icon sport="${o}" data-sport-group="${r}"></bma-sport-icon>`:"",g=c?this._formatDay(c):"";this.shadowRoot.innerHTML=`
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
            <span class="kpi__value">${i} / ${l}</span>
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
    `,this.shadowRoot.querySelectorAll("[data-action]").forEach(h=>{h.addEventListener("click",()=>{const k=h.dataset.action;this.dispatchEvent(new CustomEvent(`invite-${k}`,{detail:{inviteGuid:t},bubbles:!0,composed:!0}))})})}}customElements.define("bma-invite-card",Nv);class Bv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._selected="all"}static get observedAttributes(){return["data-sports","data-selected"]}connectedCallback(){this.render(),this._themeUnsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._themeUnsub&&this._themeUnsub()}attributeChangedCallback(t,a,s){if(a!==s){if(t==="data-selected"){const n=s||"all";if(this._selected===n)return;this._selected=n,this.shadowRoot&&this._syncChipStates();return}this.shadowRoot&&this.render()}}_syncChipStates(){this.shadowRoot.querySelectorAll("[data-chip]").forEach(t=>{const a=t.dataset.chip===this._selected;t.classList.toggle("chip--selected",a),t.setAttribute("aria-pressed",String(a))}),this._scrollSelectedIntoView()}_scrollSelectedIntoView(){this.isConnected&&requestAnimationFrame(()=>{const t=this.shadowRoot.querySelector(".rail-scroller"),a=this.shadowRoot.querySelector(".chip--selected");if(!t||!a)return;const s=a.offsetLeft,n=a.offsetWidth,o=t.clientWidth,r=t.scrollLeft;if(s>=r&&s+n<=r+o)return;const i=s-(o-n)/2;t.scrollTo({left:Math.max(0,i),behavior:"smooth"})})}get sports(){const t=this.getAttribute("data-sports");if(!t)return[];try{const a=JSON.parse(t);return Array.isArray(a)?a:[]}catch{return[]}}handleChipClick(t,a){this._selected!==t&&(this._selected=t,this._syncChipStates(),this.setAttribute("data-selected",t),this.dispatchEvent(new CustomEvent("sport-rail-change",{bubbles:!0,composed:!0,detail:{key:t,group:a||""}})))}handleArrowClick(t){const a=this.shadowRoot.querySelector(".rail-scroller");if(!a)return;const s=Math.max(160,a.clientWidth*.6);a.scrollBy({left:t==="next"?s:-s,behavior:"smooth"})}render(){const t=this.sports,a=[{key:"all",title:"All",group:"All"},...t],s=n=>{const o=this._selected===n.key,i=n.key==="all"?'<svg class="all-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"/></svg>':`<bma-sport-icon sport="${n.key}" data-sport-group="${n.group||""}"></bma-sport-icon>`;return`
        <button
          type="button"
          class="chip ${o?"chip--selected":""}"
          data-chip="${n.key}"
          data-chip-group="${n.group||""}"
          aria-pressed="${o}"
        >
          <span class="chip__icon">${i}</span>
          <span class="chip__label">${n.title||n.group||n.key}</span>
        </button>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${Ve()}

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
    `,this.shadowRoot.querySelectorAll("[data-chip]").forEach(n=>{n.addEventListener("click",()=>{this.handleChipClick(n.dataset.chip,n.dataset.chipGroup)})}),this.shadowRoot.querySelectorAll("[data-rail-arrow]").forEach(n=>{n.addEventListener("click",()=>this.handleArrowClick(n.dataset.railArrow))}),this._scrollSelectedIntoView()}}customElements.define("bma-play-sport-rail",Bv);Ua.init();window.BrandManager=Ua;(async()=>{const e=()=>{const t=window.BMACOREAPI;return t?.API_baseURI?`${t.API_baseURI}/m5t/${t.API_ver||"v5"}`:"https://machfive-bmacdev-rest.onrender.com/m5t/v5"};try{const[t,a,s]=await Promise.all([kn(()=>import("./GameTypeLifeCycle-DN4majdP.js"),[]),kn(()=>Promise.resolve().then(()=>Zg),void 0),kn(()=>import("./SportMarkets-C37he7Ah.js"),[])]);a.configureClientMeter({baseUrl:e,getToken:()=>localStorage.getItem("authToken")||null,debug:!1}),t.default.configureMeter(a.clientMeter),t.default.configureSportMarkets(n=>s.default.get(n)),s.default.init({baseUrl:e}).catch(n=>{console.warn("[SportMarkets] background init failed (non-fatal):",n?.message)}),window.GameTypeLifeCycle=t.default,window.SportMarkets=s.default,console.log("[GameTypeLifeCycle] client meter wired. Tokens:",t.default.TOKENS)}catch(t){console.warn("[GameTypeLifeCycle] boot failed (non-fatal):",t?.message)}})();const gi=`
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",gi)}):document.body.insertAdjacentHTML("beforeend",gi);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const Tn=ju(kv);Tn.config.devtools=!1;Tn.use(Yu());Tn.use(is);Tn.mount("#app");(function(){let t=!1;const a=r=>{if(!t)return;const i=r.target;i&&typeof i.closest=="function"&&i.closest("neodigm-sodapop")||r.preventDefault()},s=()=>{const r=t,i=!!document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']");if(t=i,document.body.style.touchAction=i?"none":"",document.documentElement.style.overscrollBehavior=i?"none":"",r&&!i){const l=document.querySelector("bma-app-foot");l&&l.setAttribute("data-selected-item","foot_lobby");const c=document.querySelector("bma-app-head-mid");c&&c.setAttribute("data-selected-tab","head_mid_lobby")}},n=new MutationObserver(s),o=()=>{n.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]}),document.addEventListener("touchmove",a,{passive:!1,capture:!0}),s()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",o):o()})();document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(a=>{neodigmCarousel.init().nav({id:a.id,nav:"resize"},!1)})},303)})});
