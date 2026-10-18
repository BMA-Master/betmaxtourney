(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function a(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=a(n);fetch(n.href,r)}})();const Oc="modulepreload",Lc=function(t){return"/bma-core/"+t},eo={},An=function(e,a,s){let n=Promise.resolve();if(a&&a.length>0){let c=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};var o=c;document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=i?.nonce||i?.getAttribute("nonce");n=c(a.map(u=>{if(u=Lc(u),u in eo)return;eo[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":Oc,d||(f.as="script"),f.crossOrigin="",f.href=u,l&&f.setAttribute("nonce",l),document.head.appendChild(f),d)return new Promise((g,m)=>{f.addEventListener("load",g),f.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return n.then(i=>{for(const l of i||[])l.status==="rejected"&&r(l.reason);return e().catch(r)})};function Ar(t){const e=Object.create(null);for(const a of t.split(","))e[a]=1;return a=>a in e}const Re={},$a=[],It=()=>{},xi=()=>!1,cn=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Cr=t=>t.startsWith("onUpdate:"),We=Object.assign,Pr=(t,e)=>{const a=t.indexOf(e);a>-1&&t.splice(a,1)},Mc=Object.prototype.hasOwnProperty,Le=(t,e)=>Mc.call(t,e),ye=Array.isArray,Na=t=>vs(t)==="[object Map]",dn=t=>vs(t)==="[object Set]",to=t=>vs(t)==="[object Date]",we=t=>typeof t=="function",Ue=t=>typeof t=="string",Nt=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Ti=t=>(De(t)||we(t))&&we(t.then)&&we(t.catch),ki=Object.prototype.toString,vs=t=>ki.call(t),Dc=t=>vs(t).slice(8,-1),Si=t=>vs(t)==="[object Object]",Or=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Qa=Ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),un=t=>{const e=Object.create(null);return(a=>e[a]||(e[a]=t(a)))},Rc=/-\w/g,xt=un(t=>t.replace(Rc,e=>e.slice(1).toUpperCase())),Ic=/\B([A-Z])/g,ha=un(t=>t.replace(Ic,"-$1").toLowerCase()),pn=un(t=>t.charAt(0).toUpperCase()+t.slice(1)),Cn=un(t=>t?`on${pn(t)}`:""),ca=(t,e)=>!Object.is(t,e),$s=(t,...e)=>{for(let a=0;a<t.length;a++)t[a](...e)},Ei=(t,e,a,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:a})},Lr=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$c=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let ao;const fn=()=>ao||(ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hn(t){if(ye(t)){const e={};for(let a=0;a<t.length;a++){const s=t[a],n=Ue(s)?zc(s):hn(s);if(n)for(const r in n)e[r]=n[r]}return e}else if(Ue(t)||De(t))return t}const Nc=/;(?![^(]*\))/g,Bc=/:([^]+)/,Fc=/\/\*[^]*?\*\//g;function zc(t){const e={};return t.replace(Fc,"").split(Nc).forEach(a=>{if(a){const s=a.split(Bc);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Ve(t){let e="";if(Ue(t))e=t;else if(ye(t))for(let a=0;a<t.length;a++){const s=Ve(t[a]);s&&(e+=s+" ")}else if(De(t))for(const a in t)t[a]&&(e+=a+" ");return e.trim()}const Hc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Uc=Ar(Hc);function Ai(t){return!!t||t===""}function Gc(t,e){if(t.length!==e.length)return!1;let a=!0;for(let s=0;a&&s<t.length;s++)a=mn(t[s],e[s]);return a}function mn(t,e){if(t===e)return!0;let a=to(t),s=to(e);if(a||s)return a&&s?t.getTime()===e.getTime():!1;if(a=Nt(t),s=Nt(e),a||s)return t===e;if(a=ye(t),s=ye(e),a||s)return a&&s?Gc(t,e):!1;if(a=De(t),s=De(e),a||s){if(!a||!s)return!1;const n=Object.keys(t).length,r=Object.keys(e).length;if(n!==r)return!1;for(const o in t){const i=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(i&&!l||!i&&l||!mn(t[o],e[o]))return!1}}return String(t)===String(e)}function Ci(t,e){return t.findIndex(a=>mn(a,e))}const Pi=t=>!!(t&&t.__v_isRef===!0),be=t=>Ue(t)?t:t==null?"":ye(t)||De(t)&&(t.toString===ki||!we(t.toString))?Pi(t)?be(t.value):JSON.stringify(t,Oi,2):String(t),Oi=(t,e)=>Pi(e)?Oi(t,e.value):Na(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((a,[s,n],r)=>(a[Pn(s,r)+" =>"]=n,a),{})}:dn(e)?{[`Set(${e.size})`]:[...e.values()].map(a=>Pn(a))}:Nt(e)?Pn(e):De(e)&&!ye(e)&&!Si(e)?String(e):e,Pn=(t,e="")=>{var a;return Nt(t)?`Symbol(${(a=t.description)!=null?a:e})`:t};let Qe;class Li{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Qe,!e&&Qe&&(this.index=(Qe.scopes||(Qe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,a;if(this.scopes)for(e=0,a=this.scopes.length;e<a;e++)this.scopes[e].pause();for(e=0,a=this.effects.length;e<a;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,a;if(this.scopes)for(e=0,a=this.scopes.length;e<a;e++)this.scopes[e].resume();for(e=0,a=this.effects.length;e<a;e++)this.effects[e].resume()}}run(e){if(this._active){const a=Qe;try{return Qe=this,e()}finally{Qe=a}}}on(){++this._on===1&&(this.prevScope=Qe,Qe=this)}off(){this._on>0&&--this._on===0&&(Qe=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let a,s;for(a=0,s=this.effects.length;a<s;a++)this.effects[a].stop();for(this.effects.length=0,a=0,s=this.cleanups.length;a<s;a++)this.cleanups[a]();if(this.cleanups.length=0,this.scopes){for(a=0,s=this.scopes.length;a<s;a++)this.scopes[a].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Mi(t){return new Li(t)}function Di(){return Qe}function jc(t,e=!1){Qe&&Qe.cleanups.push(t)}let Ie;const On=new WeakSet;class Ri{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Qe&&Qe.active&&Qe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,On.has(this)&&(On.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||$i(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,so(this),Ni(this);const e=Ie,a=Tt;Ie=this,Tt=!0;try{return this.fn()}finally{Bi(this),Ie=e,Tt=a,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rr(e);this.deps=this.depsTail=void 0,so(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?On.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){sr(this)&&this.run()}get dirty(){return sr(this)}}let Ii=0,Za,es;function $i(t,e=!1){if(t.flags|=8,e){t.next=es,es=t;return}t.next=Za,Za=t}function Mr(){Ii++}function Dr(){if(--Ii>0)return;if(es){let e=es;for(es=void 0;e;){const a=e.next;e.next=void 0,e.flags&=-9,e=a}}let t;for(;Za;){let e=Za;for(Za=void 0;e;){const a=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=a}}if(t)throw t}function Ni(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Bi(t){let e,a=t.depsTail,s=a;for(;s;){const n=s.prevDep;s.version===-1?(s===a&&(a=n),Rr(s),qc(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=n}t.deps=e,t.depsTail=a}function sr(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Fi(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Fi(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===cs)||(t.globalVersion=cs,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!sr(t))))return;t.flags|=2;const e=t.dep,a=Ie,s=Tt;Ie=t,Tt=!0;try{Ni(t);const n=t.fn(t._value);(e.version===0||ca(n,t._value))&&(t.flags|=128,t._value=n,e.version++)}catch(n){throw e.version++,n}finally{Ie=a,Tt=s,Bi(t),t.flags&=-3}}function Rr(t,e=!1){const{dep:a,prevSub:s,nextSub:n}=t;if(s&&(s.nextSub=n,t.prevSub=void 0),n&&(n.prevSub=s,t.nextSub=void 0),a.subs===t&&(a.subs=s,!s&&a.computed)){a.computed.flags&=-5;for(let r=a.computed.deps;r;r=r.nextDep)Rr(r,!0)}!e&&!--a.sc&&a.map&&a.map.delete(a.key)}function qc(t){const{prevDep:e,nextDep:a}=t;e&&(e.nextDep=a,t.prevDep=void 0),a&&(a.prevDep=e,t.nextDep=void 0)}let Tt=!0;const zi=[];function Jt(){zi.push(Tt),Tt=!1}function Xt(){const t=zi.pop();Tt=t===void 0?!0:t}function so(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const a=Ie;Ie=void 0;try{e()}finally{Ie=a}}}let cs=0;class Vc{constructor(e,a){this.sub=e,this.dep=a,this.version=a.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Ir{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Ie||!Tt||Ie===this.computed)return;let a=this.activeLink;if(a===void 0||a.sub!==Ie)a=this.activeLink=new Vc(Ie,this),Ie.deps?(a.prevDep=Ie.depsTail,Ie.depsTail.nextDep=a,Ie.depsTail=a):Ie.deps=Ie.depsTail=a,Hi(a);else if(a.version===-1&&(a.version=this.version,a.nextDep)){const s=a.nextDep;s.prevDep=a.prevDep,a.prevDep&&(a.prevDep.nextDep=s),a.prevDep=Ie.depsTail,a.nextDep=void 0,Ie.depsTail.nextDep=a,Ie.depsTail=a,Ie.deps===a&&(Ie.deps=s)}return a}trigger(e){this.version++,cs++,this.notify(e)}notify(e){Mr();try{for(let a=this.subs;a;a=a.prevSub)a.sub.notify()&&a.sub.dep.notify()}finally{Dr()}}}function Hi(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Hi(s)}const a=t.dep.subs;a!==t&&(t.prevSub=a,a&&(a.nextSub=t)),t.dep.subs=t}}const js=new WeakMap,Ea=Symbol(""),nr=Symbol(""),ds=Symbol("");function Ze(t,e,a){if(Tt&&Ie){let s=js.get(t);s||js.set(t,s=new Map);let n=s.get(a);n||(s.set(a,n=new Ir),n.map=s,n.key=a),n.track()}}function Kt(t,e,a,s,n,r){const o=js.get(t);if(!o){cs++;return}const i=l=>{l&&l.trigger()};if(Mr(),e==="clear")o.forEach(i);else{const l=ye(t),c=l&&Or(a);if(l&&a==="length"){const u=Number(s);o.forEach((d,p)=>{(p==="length"||p===ds||!Nt(p)&&p>=u)&&i(d)})}else switch((a!==void 0||o.has(void 0))&&i(o.get(a)),c&&i(o.get(ds)),e){case"add":l?c&&i(o.get("length")):(i(o.get(Ea)),Na(t)&&i(o.get(nr)));break;case"delete":l||(i(o.get(Ea)),Na(t)&&i(o.get(nr)));break;case"set":Na(t)&&i(o.get(Ea));break}}Dr()}function Yc(t,e){const a=js.get(t);return a&&a.get(e)}function Pa(t){const e=Ee(t);return e===t?e:(Ze(e,"iterate",ds),yt(t)?e:e.map(Je))}function gn(t){return Ze(t=Ee(t),"iterate",ds),t}const Kc={__proto__:null,[Symbol.iterator](){return Ln(this,Symbol.iterator,Je)},concat(...t){return Pa(this).concat(...t.map(e=>ye(e)?Pa(e):e))},entries(){return Ln(this,"entries",t=>(t[1]=Je(t[1]),t))},every(t,e){return Ft(this,"every",t,e,void 0,arguments)},filter(t,e){return Ft(this,"filter",t,e,a=>a.map(Je),arguments)},find(t,e){return Ft(this,"find",t,e,Je,arguments)},findIndex(t,e){return Ft(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Ft(this,"findLast",t,e,Je,arguments)},findLastIndex(t,e){return Ft(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Ft(this,"forEach",t,e,void 0,arguments)},includes(...t){return Mn(this,"includes",t)},indexOf(...t){return Mn(this,"indexOf",t)},join(t){return Pa(this).join(t)},lastIndexOf(...t){return Mn(this,"lastIndexOf",t)},map(t,e){return Ft(this,"map",t,e,void 0,arguments)},pop(){return qa(this,"pop")},push(...t){return qa(this,"push",t)},reduce(t,...e){return no(this,"reduce",t,e)},reduceRight(t,...e){return no(this,"reduceRight",t,e)},shift(){return qa(this,"shift")},some(t,e){return Ft(this,"some",t,e,void 0,arguments)},splice(...t){return qa(this,"splice",t)},toReversed(){return Pa(this).toReversed()},toSorted(t){return Pa(this).toSorted(t)},toSpliced(...t){return Pa(this).toSpliced(...t)},unshift(...t){return qa(this,"unshift",t)},values(){return Ln(this,"values",Je)}};function Ln(t,e,a){const s=gn(t),n=s[e]();return s!==t&&!yt(t)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=a(r.value)),r}),n}const Wc=Array.prototype;function Ft(t,e,a,s,n,r){const o=gn(t),i=o!==t&&!yt(t),l=o[e];if(l!==Wc[e]){const d=l.apply(t,r);return i?Je(d):d}let c=a;o!==t&&(i?c=function(d,p){return a.call(this,Je(d),p,t)}:a.length>2&&(c=function(d,p){return a.call(this,d,p,t)}));const u=l.call(o,c,s);return i&&n?n(u):u}function no(t,e,a,s){const n=gn(t);let r=a;return n!==t&&(yt(t)?a.length>3&&(r=function(o,i,l){return a.call(this,o,i,l,t)}):r=function(o,i,l){return a.call(this,o,Je(i),l,t)}),n[e](r,...s)}function Mn(t,e,a){const s=Ee(t);Ze(s,"iterate",ds);const n=s[e](...a);return(n===-1||n===!1)&&Br(a[0])?(a[0]=Ee(a[0]),s[e](...a)):n}function qa(t,e,a=[]){Jt(),Mr();const s=Ee(t)[e].apply(t,a);return Dr(),Xt(),s}const Jc=Ar("__proto__,__v_isRef,__isVue"),Ui=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nt));function Xc(t){Nt(t)||(t=String(t));const e=Ee(this);return Ze(e,"has",t),e.hasOwnProperty(t)}class Gi{constructor(e=!1,a=!1){this._isReadonly=e,this._isShallow=a}get(e,a,s){if(a==="__v_skip")return e.__v_skip;const n=this._isReadonly,r=this._isShallow;if(a==="__v_isReactive")return!n;if(a==="__v_isReadonly")return n;if(a==="__v_isShallow")return r;if(a==="__v_raw")return s===(n?r?id:Yi:r?Vi:qi).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=ye(e);if(!n){let l;if(o&&(l=Kc[a]))return l;if(a==="hasOwnProperty")return Xc}const i=Reflect.get(e,a,je(e)?e:s);if((Nt(a)?Ui.has(a):Jc(a))||(n||Ze(e,"get",a),r))return i;if(je(i)){const l=o&&Or(a)?i:i.value;return n&&De(l)?or(l):l}return De(i)?n?or(i):Mt(i):i}}class ji extends Gi{constructor(e=!1){super(!1,e)}set(e,a,s,n){let r=e[a];if(!this._isShallow){const l=ua(r);if(!yt(s)&&!ua(s)&&(r=Ee(r),s=Ee(s)),!ye(e)&&je(r)&&!je(s))return l||(r.value=s),!0}const o=ye(e)&&Or(a)?Number(a)<e.length:Le(e,a),i=Reflect.set(e,a,s,je(e)?e:n);return e===Ee(n)&&(o?ca(s,r)&&Kt(e,"set",a,s):Kt(e,"add",a,s)),i}deleteProperty(e,a){const s=Le(e,a);e[a];const n=Reflect.deleteProperty(e,a);return n&&s&&Kt(e,"delete",a,void 0),n}has(e,a){const s=Reflect.has(e,a);return(!Nt(a)||!Ui.has(a))&&Ze(e,"has",a),s}ownKeys(e){return Ze(e,"iterate",ye(e)?"length":Ea),Reflect.ownKeys(e)}}class Qc extends Gi{constructor(e=!1){super(!0,e)}set(e,a){return!0}deleteProperty(e,a){return!0}}const Zc=new ji,ed=new Qc,td=new ji(!0);const rr=t=>t,ks=t=>Reflect.getPrototypeOf(t);function ad(t,e,a){return function(...s){const n=this.__v_raw,r=Ee(n),o=Na(r),i=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=n[t](...s),u=a?rr:e?qs:Je;return!e&&Ze(r,"iterate",l?nr:Ea),{next(){const{value:d,done:p}=c.next();return p?{value:d,done:p}:{value:i?[u(d[0]),u(d[1])]:u(d),done:p}},[Symbol.iterator](){return this}}}}function Ss(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function sd(t,e){const a={get(n){const r=this.__v_raw,o=Ee(r),i=Ee(n);t||(ca(n,i)&&Ze(o,"get",n),Ze(o,"get",i));const{has:l}=ks(o),c=e?rr:t?qs:Je;if(l.call(o,n))return c(r.get(n));if(l.call(o,i))return c(r.get(i));r!==o&&r.get(n)},get size(){const n=this.__v_raw;return!t&&Ze(Ee(n),"iterate",Ea),n.size},has(n){const r=this.__v_raw,o=Ee(r),i=Ee(n);return t||(ca(n,i)&&Ze(o,"has",n),Ze(o,"has",i)),n===i?r.has(n):r.has(n)||r.has(i)},forEach(n,r){const o=this,i=o.__v_raw,l=Ee(i),c=e?rr:t?qs:Je;return!t&&Ze(l,"iterate",Ea),i.forEach((u,d)=>n.call(r,c(u),c(d),o))}};return We(a,t?{add:Ss("add"),set:Ss("set"),delete:Ss("delete"),clear:Ss("clear")}:{add(n){!e&&!yt(n)&&!ua(n)&&(n=Ee(n));const r=Ee(this);return ks(r).has.call(r,n)||(r.add(n),Kt(r,"add",n,n)),this},set(n,r){!e&&!yt(r)&&!ua(r)&&(r=Ee(r));const o=Ee(this),{has:i,get:l}=ks(o);let c=i.call(o,n);c||(n=Ee(n),c=i.call(o,n));const u=l.call(o,n);return o.set(n,r),c?ca(r,u)&&Kt(o,"set",n,r):Kt(o,"add",n,r),this},delete(n){const r=Ee(this),{has:o,get:i}=ks(r);let l=o.call(r,n);l||(n=Ee(n),l=o.call(r,n)),i&&i.call(r,n);const c=r.delete(n);return l&&Kt(r,"delete",n,void 0),c},clear(){const n=Ee(this),r=n.size!==0,o=n.clear();return r&&Kt(n,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(n=>{a[n]=ad(n,t,e)}),a}function $r(t,e){const a=sd(t,e);return(s,n,r)=>n==="__v_isReactive"?!t:n==="__v_isReadonly"?t:n==="__v_raw"?s:Reflect.get(Le(a,n)&&n in s?a:s,n,r)}const nd={get:$r(!1,!1)},rd={get:$r(!1,!0)},od={get:$r(!0,!1)};const qi=new WeakMap,Vi=new WeakMap,Yi=new WeakMap,id=new WeakMap;function ld(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function cd(t){return t.__v_skip||!Object.isExtensible(t)?0:ld(Dc(t))}function Mt(t){return ua(t)?t:Nr(t,!1,Zc,nd,qi)}function Ki(t){return Nr(t,!1,td,rd,Vi)}function or(t){return Nr(t,!0,ed,od,Yi)}function Nr(t,e,a,s,n){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=cd(t);if(r===0)return t;const o=n.get(t);if(o)return o;const i=new Proxy(t,r===2?s:a);return n.set(t,i),i}function da(t){return ua(t)?da(t.__v_raw):!!(t&&t.__v_isReactive)}function ua(t){return!!(t&&t.__v_isReadonly)}function yt(t){return!!(t&&t.__v_isShallow)}function Br(t){return t?!!t.__v_raw:!1}function Ee(t){const e=t&&t.__v_raw;return e?Ee(e):t}function Fr(t){return!Le(t,"__v_skip")&&Object.isExtensible(t)&&Ei(t,"__v_skip",!0),t}const Je=t=>De(t)?Mt(t):t,qs=t=>De(t)?or(t):t;function je(t){return t?t.__v_isRef===!0:!1}function Pe(t){return Wi(t,!1)}function dd(t){return Wi(t,!0)}function Wi(t,e){return je(t)?t:new ud(t,e)}class ud{constructor(e,a){this.dep=new Ir,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=a?e:Ee(e),this._value=a?e:Je(e),this.__v_isShallow=a}get value(){return this.dep.track(),this._value}set value(e){const a=this._rawValue,s=this.__v_isShallow||yt(e)||ua(e);e=s?e:Ee(e),ca(e,a)&&(this._rawValue=e,this._value=s?e:Je(e),this.dep.trigger())}}function ot(t){return je(t)?t.value:t}const pd={get:(t,e,a)=>e==="__v_raw"?t:ot(Reflect.get(t,e,a)),set:(t,e,a,s)=>{const n=t[e];return je(n)&&!je(a)?(n.value=a,!0):Reflect.set(t,e,a,s)}};function Ji(t){return da(t)?t:new Proxy(t,pd)}function fd(t){const e=ye(t)?new Array(t.length):{};for(const a in t)e[a]=md(t,a);return e}class hd{constructor(e,a,s){this._object=e,this._key=a,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Yc(Ee(this._object),this._key)}}function md(t,e,a){const s=t[e];return je(s)?s:new hd(t,e,a)}class gd{constructor(e,a,s){this.fn=e,this.setter=a,this._value=void 0,this.dep=new Ir(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=cs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!a,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Ie!==this)return $i(this,!0),!0}get value(){const e=this.dep.track();return Fi(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function bd(t,e,a=!1){let s,n;return we(t)?s=t:(s=t.get,n=t.set),new gd(s,n,a)}const Es={},Vs=new WeakMap;let wa;function _d(t,e=!1,a=wa){if(a){let s=Vs.get(a);s||Vs.set(a,s=[]),s.push(t)}}function vd(t,e,a=Re){const{immediate:s,deep:n,once:r,scheduler:o,augmentJob:i,call:l}=a,c=E=>n?E:yt(E)||n===!1||n===0?Wt(E,1):Wt(E);let u,d,p,f,g=!1,m=!1;if(je(t)?(d=()=>t.value,g=yt(t)):da(t)?(d=()=>c(t),g=!0):ye(t)?(m=!0,g=t.some(E=>da(E)||yt(E)),d=()=>t.map(E=>{if(je(E))return E.value;if(da(E))return c(E);if(we(E))return l?l(E,2):E()})):we(t)?e?d=l?()=>l(t,2):t:d=()=>{if(p){Jt();try{p()}finally{Xt()}}const E=wa;wa=u;try{return l?l(t,3,[f]):t(f)}finally{wa=E}}:d=It,e&&n){const E=d,I=n===!0?1/0:n;d=()=>Wt(E(),I)}const v=Di(),h=()=>{u.stop(),v&&v.active&&Pr(v.effects,u)};if(r&&e){const E=e;e=(...I)=>{E(...I),h()}}let _=m?new Array(t.length).fill(Es):Es;const w=E=>{if(!(!(u.flags&1)||!u.dirty&&!E))if(e){const I=u.run();if(n||g||(m?I.some((R,C)=>ca(R,_[C])):ca(I,_))){p&&p();const R=wa;wa=u;try{const C=[I,_===Es?void 0:m&&_[0]===Es?[]:_,f];_=I,l?l(e,3,C):e(...C)}finally{wa=R}}}else u.run()};return i&&i(w),u=new Ri(d),u.scheduler=o?()=>o(w,!1):w,f=E=>_d(E,!1,u),p=u.onStop=()=>{const E=Vs.get(u);if(E){if(l)l(E,4);else for(const I of E)I();Vs.delete(u)}},e?s?w(!0):_=u.run():o?o(w.bind(null,!0),!0):u.run(),h.pause=u.pause.bind(u),h.resume=u.resume.bind(u),h.stop=h,h}function Wt(t,e=1/0,a){if(e<=0||!De(t)||t.__v_skip||(a=a||new Map,(a.get(t)||0)>=e))return t;if(a.set(t,e),e--,je(t))Wt(t.value,e,a);else if(ye(t))for(let s=0;s<t.length;s++)Wt(t[s],e,a);else if(dn(t)||Na(t))t.forEach(s=>{Wt(s,e,a)});else if(Si(t)){for(const s in t)Wt(t[s],e,a);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Wt(t[s],e,a)}return t}function ys(t,e,a,s){try{return s?t(...s):t()}catch(n){bn(n,e,a)}}function kt(t,e,a,s){if(we(t)){const n=ys(t,e,a,s);return n&&Ti(n)&&n.catch(r=>{bn(r,e,a)}),n}if(ye(t)){const n=[];for(let r=0;r<t.length;r++)n.push(kt(t[r],e,a,s));return n}}function bn(t,e,a,s=!0){const n=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Re;if(e){let i=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${a}`;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}i=i.parent}if(r){Jt(),ys(r,null,10,[t,l,c]),Xt();return}}yd(t,a,n,s,o)}function yd(t,e,a,s=!0,n=!1){if(n)throw t;console.error(t)}const rt=[];let Ct=-1;const Ba=[];let na=null,Ra=0;const Xi=Promise.resolve();let Ys=null;function zr(t){const e=Ys||Xi;return t?e.then(this?t.bind(this):t):e}function wd(t){let e=Ct+1,a=rt.length;for(;e<a;){const s=e+a>>>1,n=rt[s],r=us(n);r<t||r===t&&n.flags&2?e=s+1:a=s}return e}function Hr(t){if(!(t.flags&1)){const e=us(t),a=rt[rt.length-1];!a||!(t.flags&2)&&e>=us(a)?rt.push(t):rt.splice(wd(e),0,t),t.flags|=1,Qi()}}function Qi(){Ys||(Ys=Xi.then(el))}function xd(t){ye(t)?Ba.push(...t):na&&t.id===-1?na.splice(Ra+1,0,t):t.flags&1||(Ba.push(t),t.flags|=1),Qi()}function ro(t,e,a=Ct+1){for(;a<rt.length;a++){const s=rt[a];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;rt.splice(a,1),a--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Zi(t){if(Ba.length){const e=[...new Set(Ba)].sort((a,s)=>us(a)-us(s));if(Ba.length=0,na){na.push(...e);return}for(na=e,Ra=0;Ra<na.length;Ra++){const a=na[Ra];a.flags&4&&(a.flags&=-2),a.flags&8||a(),a.flags&=-2}na=null,Ra=0}}const us=t=>t.id==null?t.flags&2?-1:1/0:t.id;function el(t){try{for(Ct=0;Ct<rt.length;Ct++){const e=rt[Ct];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ys(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ct<rt.length;Ct++){const e=rt[Ct];e&&(e.flags&=-2)}Ct=-1,rt.length=0,Zi(),Ys=null,(rt.length||Ba.length)&&el()}}let ht=null,tl=null;function Ks(t){const e=ht;return ht=t,tl=t&&t.type.__scopeId||null,e}function ir(t,e=ht,a){if(!e||t._n)return t;const s=(...n)=>{s._d&&Xs(-1);const r=Ks(e);let o;try{o=t(...n)}finally{Ks(r),s._d&&Xs(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Dt(t,e){if(ht===null)return t;const a=xn(ht),s=t.dirs||(t.dirs=[]);for(let n=0;n<e.length;n++){let[r,o,i,l=Re]=e[n];r&&(we(r)&&(r={mounted:r,updated:r}),r.deep&&Wt(o),s.push({dir:r,instance:a,value:o,oldValue:void 0,arg:i,modifiers:l}))}return t}function ba(t,e,a,s){const n=t.dirs,r=e&&e.dirs;for(let o=0;o<n.length;o++){const i=n[o];r&&(i.oldValue=r[o].value);let l=i.dir[s];l&&(Jt(),kt(l,a,8,[t.el,i,t,e]),Xt())}}const Td=Symbol("_vte"),al=t=>t.__isTeleport,Vt=Symbol("_leaveCb"),As=Symbol("_enterCb");function kd(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return lt(()=>{t.isMounted=!0}),ul(()=>{t.isUnmounting=!0}),t}const bt=[Function,Array],sl={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:bt,onEnter:bt,onAfterEnter:bt,onEnterCancelled:bt,onBeforeLeave:bt,onLeave:bt,onAfterLeave:bt,onLeaveCancelled:bt,onBeforeAppear:bt,onAppear:bt,onAfterAppear:bt,onAppearCancelled:bt},nl=t=>{const e=t.subTree;return e.component?nl(e.component):e},Sd={name:"BaseTransition",props:sl,setup(t,{slots:e}){const a=qr(),s=kd();return()=>{const n=e.default&&il(e.default(),!0);if(!n||!n.length)return;const r=rl(n),o=Ee(t),{mode:i}=o;if(s.isLeaving)return Dn(r);const l=oo(r);if(!l)return Dn(r);let c=lr(l,o,s,a,d=>c=d);l.type!==it&&ps(l,c);let u=a.subTree&&oo(a.subTree);if(u&&u.type!==it&&!xa(u,l)&&nl(a).type!==it){let d=lr(u,o,s,a);if(ps(u,d),i==="out-in"&&l.type!==it)return s.isLeaving=!0,d.afterLeave=()=>{s.isLeaving=!1,a.job.flags&8||a.update(),delete d.afterLeave,u=void 0},Dn(r);i==="in-out"&&l.type!==it?d.delayLeave=(p,f,g)=>{const m=ol(s,u);m[String(u.key)]=u,p[Vt]=()=>{f(),p[Vt]=void 0,delete c.delayedLeave,u=void 0},c.delayedLeave=()=>{g(),delete c.delayedLeave,u=void 0}}:u=void 0}else u&&(u=void 0);return r}}};function rl(t){let e=t[0];if(t.length>1){for(const a of t)if(a.type!==it){e=a;break}}return e}const Ed=Sd;function ol(t,e){const{leavingVNodes:a}=t;let s=a.get(e.type);return s||(s=Object.create(null),a.set(e.type,s)),s}function lr(t,e,a,s,n){const{appear:r,mode:o,persisted:i=!1,onBeforeEnter:l,onEnter:c,onAfterEnter:u,onEnterCancelled:d,onBeforeLeave:p,onLeave:f,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:h,onAfterAppear:_,onAppearCancelled:w}=e,E=String(t.key),I=ol(a,t),R=($,G)=>{$&&kt($,s,9,G)},C=($,G)=>{const j=G[1];R($,G),ye($)?$.every(F=>F.length<=1)&&j():$.length<=1&&j()},H={mode:o,persisted:i,beforeEnter($){let G=l;if(!a.isMounted)if(r)G=v||l;else return;$[Vt]&&$[Vt](!0);const j=I[E];j&&xa(t,j)&&j.el[Vt]&&j.el[Vt](),R(G,[$])},enter($){let G=c,j=u,F=d;if(!a.isMounted)if(r)G=h||c,j=_||u,F=w||d;else return;let q=!1;const P=$[As]=A=>{q||(q=!0,A?R(F,[$]):R(j,[$]),H.delayedLeave&&H.delayedLeave(),$[As]=void 0)};G?C(G,[$,P]):P()},leave($,G){const j=String(t.key);if($[As]&&$[As](!0),a.isUnmounting)return G();R(p,[$]);let F=!1;const q=$[Vt]=P=>{F||(F=!0,G(),P?R(m,[$]):R(g,[$]),$[Vt]=void 0,I[j]===t&&delete I[j])};I[j]=t,f?C(f,[$,q]):q()},clone($){const G=lr($,e,a,s,n);return n&&n(G),G}};return H}function Dn(t){if(_n(t))return t=pa(t),t.children=null,t}function oo(t){if(!_n(t))return al(t.type)&&t.children?rl(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:a}=t;if(a){if(e&16)return a[0];if(e&32&&we(a.default))return a.default()}}function ps(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ps(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function il(t,e=!1,a){let s=[],n=0;for(let r=0;r<t.length;r++){let o=t[r];const i=a==null?o.key:String(a)+String(o.key!=null?o.key:r);o.type===$e?(o.patchFlag&128&&n++,s=s.concat(il(o.children,e,i))):(e||o.type!==it)&&s.push(i!=null?pa(o,{key:i}):o)}if(n>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}function ll(t,e){return we(t)?We({name:t.name},e,{setup:t}):t}function cl(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}const Ws=new WeakMap;function ts(t,e,a,s,n=!1){if(ye(t)){t.forEach((g,m)=>ts(g,e&&(ye(e)?e[m]:e),a,s,n));return}if(as(s)&&!n){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&ts(t,e,a,s.component.subTree);return}const r=s.shapeFlag&4?xn(s.component):s.el,o=n?null:r,{i,r:l}=t,c=e&&e.r,u=i.refs===Re?i.refs={}:i.refs,d=i.setupState,p=Ee(d),f=d===Re?xi:g=>Le(p,g);if(c!=null&&c!==l){if(io(e),Ue(c))u[c]=null,f(c)&&(d[c]=null);else if(je(c)){c.value=null;const g=e;g.k&&(u[g.k]=null)}}if(we(l))ys(l,i,12,[o,u]);else{const g=Ue(l),m=je(l);if(g||m){const v=()=>{if(t.f){const h=g?f(l)?d[l]:u[l]:l.value;if(n)ye(h)&&Pr(h,r);else if(ye(h))h.includes(r)||h.push(r);else if(g)u[l]=[r],f(l)&&(d[l]=u[l]);else{const _=[r];l.value=_,t.k&&(u[t.k]=_)}}else g?(u[l]=o,f(l)&&(d[l]=o)):m&&(l.value=o,t.k&&(u[t.k]=o))};if(o){const h=()=>{v(),Ws.delete(t)};h.id=-1,Ws.set(t,h),pt(h,a)}else io(t),v()}}}function io(t){const e=Ws.get(t);e&&(e.flags|=8,Ws.delete(t))}fn().requestIdleCallback;fn().cancelIdleCallback;const as=t=>!!t.type.__asyncLoader,_n=t=>t.type.__isKeepAlive;function Ad(t,e){dl(t,"a",e)}function Cd(t,e){dl(t,"da",e)}function dl(t,e,a=et){const s=t.__wdc||(t.__wdc=()=>{let n=a;for(;n;){if(n.isDeactivated)return;n=n.parent}return t()});if(vn(e,s,a),a){let n=a.parent;for(;n&&n.parent;)_n(n.parent.vnode)&&Pd(s,e,a,n),n=n.parent}}function Pd(t,e,a,s){const n=vn(e,t,s,!0);Bt(()=>{Pr(s[e],n)},a)}function vn(t,e,a=et,s=!1){if(a){const n=a[t]||(a[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Jt();const i=ws(a),l=kt(e,a,t,o);return i(),Xt(),l});return s?n.unshift(r):n.push(r),r}}const Zt=t=>(e,a=et)=>{(!hs||t==="sp")&&vn(t,(...s)=>e(...s),a)},Od=Zt("bm"),lt=Zt("m"),Ld=Zt("bu"),Md=Zt("u"),ul=Zt("bum"),Bt=Zt("um"),Dd=Zt("sp"),Rd=Zt("rtg"),Id=Zt("rtc");function $d(t,e=et){vn("ec",t,e)}const Nd="components",pl=Symbol.for("v-ndc");function Bd(t){return Ue(t)?Fd(Nd,t,!1)||t:t||pl}function Fd(t,e,a=!0,s=!1){const n=ht||et;if(n){const r=n.type;{const i=Au(r,!1);if(i&&(i===e||i===xt(e)||i===pn(xt(e))))return r}const o=lo(n[t]||r[t],e)||lo(n.appContext[t],e);return!o&&s?r:o}}function lo(t,e){return t&&(t[e]||t[xt(e)]||t[pn(xt(e))])}function Gt(t,e,a,s){let n;const r=a,o=ye(t);if(o||Ue(t)){const i=o&&da(t);let l=!1,c=!1;i&&(l=!yt(t),c=ua(t),t=gn(t)),n=new Array(t.length);for(let u=0,d=t.length;u<d;u++)n[u]=e(l?c?qs(Je(t[u])):Je(t[u]):t[u],u,void 0,r)}else if(typeof t=="number"){n=new Array(t);for(let i=0;i<t;i++)n[i]=e(i+1,i,void 0,r)}else if(De(t))if(t[Symbol.iterator])n=Array.from(t,(i,l)=>e(i,l,void 0,r));else{const i=Object.keys(t);n=new Array(i.length);for(let l=0,c=i.length;l<c;l++){const u=i[l];n[l]=e(t[u],u,l,r)}}else n=[];return n}const cr=t=>t?Dl(t)?xn(t):cr(t.parent):null,ss=We(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>cr(t.parent),$root:t=>cr(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>hl(t),$forceUpdate:t=>t.f||(t.f=()=>{Hr(t.update)}),$nextTick:t=>t.n||(t.n=zr.bind(t.proxy)),$watch:t=>iu.bind(t)}),Rn=(t,e)=>t!==Re&&!t.__isScriptSetup&&Le(t,e),zd={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:a,setupState:s,data:n,props:r,accessCache:o,type:i,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return s[e];case 2:return n[e];case 4:return a[e];case 3:return r[e]}else{if(Rn(s,e))return o[e]=1,s[e];if(n!==Re&&Le(n,e))return o[e]=2,n[e];if((c=t.propsOptions[0])&&Le(c,e))return o[e]=3,r[e];if(a!==Re&&Le(a,e))return o[e]=4,a[e];dr&&(o[e]=0)}}const u=ss[e];let d,p;if(u)return e==="$attrs"&&Ze(t.attrs,"get",""),u(t);if((d=i.__cssModules)&&(d=d[e]))return d;if(a!==Re&&Le(a,e))return o[e]=4,a[e];if(p=l.config.globalProperties,Le(p,e))return p[e]},set({_:t},e,a){const{data:s,setupState:n,ctx:r}=t;return Rn(n,e)?(n[e]=a,!0):s!==Re&&Le(s,e)?(s[e]=a,!0):Le(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=a,!0)},has({_:{data:t,setupState:e,accessCache:a,ctx:s,appContext:n,propsOptions:r,type:o}},i){let l,c;return!!(a[i]||t!==Re&&i[0]!=="$"&&Le(t,i)||Rn(e,i)||(l=r[0])&&Le(l,i)||Le(s,i)||Le(ss,i)||Le(n.config.globalProperties,i)||(c=o.__cssModules)&&c[i])},defineProperty(t,e,a){return a.get!=null?t._.accessCache[e]=0:Le(a,"value")&&this.set(t,e,a.value,null),Reflect.defineProperty(t,e,a)}};function co(t){return ye(t)?t.reduce((e,a)=>(e[a]=null,e),{}):t}let dr=!0;function Hd(t){const e=hl(t),a=t.proxy,s=t.ctx;dr=!1,e.beforeCreate&&uo(e.beforeCreate,t,"bc");const{data:n,computed:r,methods:o,watch:i,provide:l,inject:c,created:u,beforeMount:d,mounted:p,beforeUpdate:f,updated:g,activated:m,deactivated:v,beforeDestroy:h,beforeUnmount:_,destroyed:w,unmounted:E,render:I,renderTracked:R,renderTriggered:C,errorCaptured:H,serverPrefetch:$,expose:G,inheritAttrs:j,components:F,directives:q,filters:P}=e;if(c&&Ud(c,s,null),o)for(const D in o){const L=o[D];we(L)&&(s[D]=L.bind(a))}if(n){const D=n.call(a,a);De(D)&&(t.data=Mt(D))}if(dr=!0,r)for(const D in r){const L=r[D],Y=we(L)?L.bind(a,a):we(L.get)?L.get.bind(a,a):It,Q=!we(L)&&we(L.set)?L.set.bind(a):It,re=_e({get:Y,set:Q});Object.defineProperty(s,D,{enumerable:!0,configurable:!0,get:()=>re.value,set:Z=>re.value=Z})}if(i)for(const D in i)fl(i[D],s,a,D);if(l){const D=we(l)?l.call(a):l;Reflect.ownKeys(D).forEach(L=>{Ns(L,D[L])})}u&&uo(u,t,"c");function S(D,L){ye(L)?L.forEach(Y=>D(Y.bind(a))):L&&D(L.bind(a))}if(S(Od,d),S(lt,p),S(Ld,f),S(Md,g),S(Ad,m),S(Cd,v),S($d,H),S(Id,R),S(Rd,C),S(ul,_),S(Bt,E),S(Dd,$),ye(G))if(G.length){const D=t.exposed||(t.exposed={});G.forEach(L=>{Object.defineProperty(D,L,{get:()=>a[L],set:Y=>a[L]=Y,enumerable:!0})})}else t.exposed||(t.exposed={});I&&t.render===It&&(t.render=I),j!=null&&(t.inheritAttrs=j),F&&(t.components=F),q&&(t.directives=q),$&&cl(t)}function Ud(t,e,a=It){ye(t)&&(t=ur(t));for(const s in t){const n=t[s];let r;De(n)?"default"in n?r=wt(n.from||s,n.default,!0):r=wt(n.from||s):r=wt(n),je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function uo(t,e,a){kt(ye(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,a)}function fl(t,e,a,s){let n=s.includes(".")?Al(a,s):()=>a[s];if(Ue(t)){const r=e[t];we(r)&&Fa(n,r)}else if(we(t))Fa(n,t.bind(a));else if(De(t))if(ye(t))t.forEach(r=>fl(r,e,a,s));else{const r=we(t.handler)?t.handler.bind(a):e[t.handler];we(r)&&Fa(n,r,t)}}function hl(t){const e=t.type,{mixins:a,extends:s}=e,{mixins:n,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,i=r.get(e);let l;return i?l=i:!n.length&&!a&&!s?l=e:(l={},n.length&&n.forEach(c=>Js(l,c,o,!0)),Js(l,e,o)),De(e)&&r.set(e,l),l}function Js(t,e,a,s=!1){const{mixins:n,extends:r}=e;r&&Js(t,r,a,!0),n&&n.forEach(o=>Js(t,o,a,!0));for(const o in e)if(!(s&&o==="expose")){const i=Gd[o]||a&&a[o];t[o]=i?i(t[o],e[o]):e[o]}return t}const Gd={data:po,props:fo,emits:fo,methods:Ja,computed:Ja,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Ja,directives:Ja,watch:qd,provide:po,inject:jd};function po(t,e){return e?t?function(){return We(we(t)?t.call(this,this):t,we(e)?e.call(this,this):e)}:e:t}function jd(t,e){return Ja(ur(t),ur(e))}function ur(t){if(ye(t)){const e={};for(let a=0;a<t.length;a++)e[t[a]]=t[a];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function Ja(t,e){return t?We(Object.create(null),t,e):e}function fo(t,e){return t?ye(t)&&ye(e)?[...new Set([...t,...e])]:We(Object.create(null),co(t),co(e??{})):e}function qd(t,e){if(!t)return e;if(!e)return t;const a=We(Object.create(null),t);for(const s in e)a[s]=st(t[s],e[s]);return a}function ml(){return{app:null,config:{isNativeTag:xi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vd=0;function Yd(t,e){return function(s,n=null){we(s)||(s=We({},s)),n!=null&&!De(n)&&(n=null);const r=ml(),o=new WeakSet,i=[];let l=!1;const c=r.app={_uid:Vd++,_component:s,_props:n,_container:null,_context:r,_instance:null,version:Pu,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&we(u.install)?(o.add(u),u.install(c,...d)):we(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,p){if(!l){const f=c._ceVNode||tt(s,n);return f.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),t(f,u,p),l=!0,c._container=u,u.__vue_app__=c,xn(f.component)}},onUnmount(u){i.push(u)},unmount(){l&&(kt(i,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Aa;Aa=c;try{return u()}finally{Aa=d}}};return c}}let Aa=null;function Ns(t,e){if(et){let a=et.provides;const s=et.parent&&et.parent.provides;s===a&&(a=et.provides=Object.create(s)),a[t]=e}}function wt(t,e,a=!1){const s=qr();if(s||Aa){let n=Aa?Aa._context.provides:s?s.parent==null||s.ce?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(n&&t in n)return n[t];if(arguments.length>1)return a&&we(e)?e.call(s&&s.proxy):e}}function Kd(){return!!(qr()||Aa)}const gl={},bl=()=>Object.create(gl),_l=t=>Object.getPrototypeOf(t)===gl;function Wd(t,e,a,s=!1){const n={},r=bl();t.propsDefaults=Object.create(null),vl(t,e,n,r);for(const o in t.propsOptions[0])o in n||(n[o]=void 0);a?t.props=s?n:Ki(n):t.type.props?t.props=n:t.props=r,t.attrs=r}function Jd(t,e,a,s){const{props:n,attrs:r,vnode:{patchFlag:o}}=t,i=Ee(n),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let p=u[d];if(yn(t.emitsOptions,p))continue;const f=e[p];if(l)if(Le(r,p))f!==r[p]&&(r[p]=f,c=!0);else{const g=xt(p);n[g]=pr(l,i,g,f,t,!1)}else f!==r[p]&&(r[p]=f,c=!0)}}}else{vl(t,e,n,r)&&(c=!0);let u;for(const d in i)(!e||!Le(e,d)&&((u=ha(d))===d||!Le(e,u)))&&(l?a&&(a[d]!==void 0||a[u]!==void 0)&&(n[d]=pr(l,i,d,void 0,t,!0)):delete n[d]);if(r!==i)for(const d in r)(!e||!Le(e,d))&&(delete r[d],c=!0)}c&&Kt(t.attrs,"set","")}function vl(t,e,a,s){const[n,r]=t.propsOptions;let o=!1,i;if(e)for(let l in e){if(Qa(l))continue;const c=e[l];let u;n&&Le(n,u=xt(l))?!r||!r.includes(u)?a[u]=c:(i||(i={}))[u]=c:yn(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=Ee(a),c=i||Re;for(let u=0;u<r.length;u++){const d=r[u];a[d]=pr(n,l,d,c[d],t,!Le(c,d))}}return o}function pr(t,e,a,s,n,r){const o=t[a];if(o!=null){const i=Le(o,"default");if(i&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&we(l)){const{propsDefaults:c}=n;if(a in c)s=c[a];else{const u=ws(n);s=c[a]=l.call(null,e),u()}}else s=l;n.ce&&n.ce._setProp(a,s)}o[0]&&(r&&!i?s=!1:o[1]&&(s===""||s===ha(a))&&(s=!0))}return s}const Xd=new WeakMap;function yl(t,e,a=!1){const s=a?Xd:e.propsCache,n=s.get(t);if(n)return n;const r=t.props,o={},i=[];let l=!1;if(!we(t)){const u=d=>{l=!0;const[p,f]=yl(d,e,!0);We(o,p),f&&i.push(...f)};!a&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return De(t)&&s.set(t,$a),$a;if(ye(r))for(let u=0;u<r.length;u++){const d=xt(r[u]);ho(d)&&(o[d]=Re)}else if(r)for(const u in r){const d=xt(u);if(ho(d)){const p=r[u],f=o[d]=ye(p)||we(p)?{type:p}:We({},p),g=f.type;let m=!1,v=!0;if(ye(g))for(let h=0;h<g.length;++h){const _=g[h],w=we(_)&&_.name;if(w==="Boolean"){m=!0;break}else w==="String"&&(v=!1)}else m=we(g)&&g.name==="Boolean";f[0]=m,f[1]=v,(m||Le(f,"default"))&&i.push(d)}}const c=[o,i];return De(t)&&s.set(t,c),c}function ho(t){return t[0]!=="$"&&!Qa(t)}const Ur=t=>t==="_"||t==="_ctx"||t==="$stable",Gr=t=>ye(t)?t.map(Ot):[Ot(t)],Qd=(t,e,a)=>{if(e._n)return e;const s=ir((...n)=>Gr(e(...n)),a);return s._c=!1,s},wl=(t,e,a)=>{const s=t._ctx;for(const n in t){if(Ur(n))continue;const r=t[n];if(we(r))e[n]=Qd(n,r,s);else if(r!=null){const o=Gr(r);e[n]=()=>o}}},xl=(t,e)=>{const a=Gr(e);t.slots.default=()=>a},Tl=(t,e,a)=>{for(const s in e)(a||!Ur(s))&&(t[s]=e[s])},Zd=(t,e,a)=>{const s=t.slots=bl();if(t.vnode.shapeFlag&32){const n=e._;n?(Tl(s,e,a),a&&Ei(s,"_",n,!0)):wl(e,s)}else e&&xl(t,e)},eu=(t,e,a)=>{const{vnode:s,slots:n}=t;let r=!0,o=Re;if(s.shapeFlag&32){const i=e._;i?a&&i===1?r=!1:Tl(n,e,a):(r=!e.$stable,wl(e,n)),o=e}else e&&(xl(t,e),o={default:1});if(r)for(const i in n)!Ur(i)&&o[i]==null&&delete n[i]},pt=mu;function tu(t){return au(t)}function au(t,e){const a=fn();a.__VUE__=!0;const{insert:s,remove:n,patchProp:r,createElement:o,createText:i,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:p,setScopeId:f=It,insertStaticContent:g}=t,m=(x,O,y,T=null,B=null,N=null,K=void 0,W=null,M=!!O.dynamicChildren)=>{if(x===O)return;x&&!xa(x,O)&&(T=U(x),Z(x,B,N,!0),x=null),O.patchFlag===-2&&(M=!1,O.dynamicChildren=null);const{type:k,ref:z,shapeFlag:se}=O;switch(k){case wn:v(x,O,y,T);break;case it:h(x,O,y,T);break;case Bs:x==null&&_(O,y,T,K);break;case $e:F(x,O,y,T,B,N,K,W,M);break;default:se&1?I(x,O,y,T,B,N,K,W,M):se&6?q(x,O,y,T,B,N,K,W,M):(se&64||se&128)&&k.process(x,O,y,T,B,N,K,W,M,oe)}z!=null&&B?ts(z,x&&x.ref,N,O||x,!O):z==null&&x&&x.ref!=null&&ts(x.ref,null,N,x,!0)},v=(x,O,y,T)=>{if(x==null)s(O.el=i(O.children),y,T);else{const B=O.el=x.el;O.children!==x.children&&c(B,O.children)}},h=(x,O,y,T)=>{x==null?s(O.el=l(O.children||""),y,T):O.el=x.el},_=(x,O,y,T)=>{[x.el,x.anchor]=g(x.children,O,y,T,x.el,x.anchor)},w=({el:x,anchor:O},y,T)=>{let B;for(;x&&x!==O;)B=p(x),s(x,y,T),x=B;s(O,y,T)},E=({el:x,anchor:O})=>{let y;for(;x&&x!==O;)y=p(x),n(x),x=y;n(O)},I=(x,O,y,T,B,N,K,W,M)=>{if(O.type==="svg"?K="svg":O.type==="math"&&(K="mathml"),x==null)R(O,y,T,B,N,K,W,M);else{const k=x.el&&x.el._isVueCE?x.el:null;try{k&&k._beginPatch(),$(x,O,B,N,K,W,M)}finally{k&&k._endPatch()}}},R=(x,O,y,T,B,N,K,W)=>{let M,k;const{props:z,shapeFlag:se,transition:ce,dirs:me}=x;if(M=x.el=o(x.type,N,z&&z.is,z),se&8?u(M,x.children):se&16&&H(x.children,M,null,T,B,In(x,N),K,W),me&&ba(x,null,T,"created"),C(M,x,x.scopeId,K,T),z){for(const le in z)le!=="value"&&!Qa(le)&&r(M,le,null,z[le],N,T);"value"in z&&r(M,"value",null,z.value,N),(k=z.onVnodeBeforeMount)&&Et(k,T,x)}me&&ba(x,null,T,"beforeMount");const he=su(B,ce);he&&ce.beforeEnter(M),s(M,O,y),((k=z&&z.onVnodeMounted)||he||me)&&pt(()=>{k&&Et(k,T,x),he&&ce.enter(M),me&&ba(x,null,T,"mounted")},B)},C=(x,O,y,T,B)=>{if(y&&f(x,y),T)for(let N=0;N<T.length;N++)f(x,T[N]);if(B){let N=B.subTree;if(O===N||Pl(N.type)&&(N.ssContent===O||N.ssFallback===O)){const K=B.vnode;C(x,K,K.scopeId,K.slotScopeIds,B.parent)}}},H=(x,O,y,T,B,N,K,W,M=0)=>{for(let k=M;k<x.length;k++){const z=x[k]=W?ra(x[k]):Ot(x[k]);m(null,z,O,y,T,B,N,K,W)}},$=(x,O,y,T,B,N,K)=>{const W=O.el=x.el;let{patchFlag:M,dynamicChildren:k,dirs:z}=O;M|=x.patchFlag&16;const se=x.props||Re,ce=O.props||Re;let me;if(y&&_a(y,!1),(me=ce.onVnodeBeforeUpdate)&&Et(me,y,O,x),z&&ba(O,x,y,"beforeUpdate"),y&&_a(y,!0),(se.innerHTML&&ce.innerHTML==null||se.textContent&&ce.textContent==null)&&u(W,""),k?G(x.dynamicChildren,k,W,y,T,In(O,B),N):K||L(x,O,W,null,y,T,In(O,B),N,!1),M>0){if(M&16)j(W,se,ce,y,B);else if(M&2&&se.class!==ce.class&&r(W,"class",null,ce.class,B),M&4&&r(W,"style",se.style,ce.style,B),M&8){const he=O.dynamicProps;for(let le=0;le<he.length;le++){const ge=he[le],ve=se[ge],Se=ce[ge];(Se!==ve||ge==="value")&&r(W,ge,ve,Se,B,y)}}M&1&&x.children!==O.children&&u(W,O.children)}else!K&&k==null&&j(W,se,ce,y,B);((me=ce.onVnodeUpdated)||z)&&pt(()=>{me&&Et(me,y,O,x),z&&ba(O,x,y,"updated")},T)},G=(x,O,y,T,B,N,K)=>{for(let W=0;W<O.length;W++){const M=x[W],k=O[W],z=M.el&&(M.type===$e||!xa(M,k)||M.shapeFlag&198)?d(M.el):y;m(M,k,z,null,T,B,N,K,!0)}},j=(x,O,y,T,B)=>{if(O!==y){if(O!==Re)for(const N in O)!Qa(N)&&!(N in y)&&r(x,N,O[N],null,B,T);for(const N in y){if(Qa(N))continue;const K=y[N],W=O[N];K!==W&&N!=="value"&&r(x,N,W,K,B,T)}"value"in y&&r(x,"value",O.value,y.value,B)}},F=(x,O,y,T,B,N,K,W,M)=>{const k=O.el=x?x.el:i(""),z=O.anchor=x?x.anchor:i("");let{patchFlag:se,dynamicChildren:ce,slotScopeIds:me}=O;me&&(W=W?W.concat(me):me),x==null?(s(k,y,T),s(z,y,T),H(O.children||[],y,z,B,N,K,W,M)):se>0&&se&64&&ce&&x.dynamicChildren?(G(x.dynamicChildren,ce,y,B,N,K,W),(O.key!=null||B&&O===B.subTree)&&kl(x,O,!0)):L(x,O,y,z,B,N,K,W,M)},q=(x,O,y,T,B,N,K,W,M)=>{O.slotScopeIds=W,x==null?O.shapeFlag&512?B.ctx.activate(O,y,T,K,M):P(O,y,T,B,N,K,M):A(x,O,M)},P=(x,O,y,T,B,N,K)=>{const W=x.component=xu(x,T,B);if(_n(x)&&(W.ctx.renderer=oe),Tu(W,!1,K),W.asyncDep){if(B&&B.registerDep(W,S,K),!x.el){const M=W.subTree=tt(it);h(null,M,O,y),x.placeholder=M.el}}else S(W,x,O,y,B,N,K)},A=(x,O,y)=>{const T=O.component=x.component;if(fu(x,O,y))if(T.asyncDep&&!T.asyncResolved){D(T,O,y);return}else T.next=O,T.update();else O.el=x.el,T.vnode=O},S=(x,O,y,T,B,N,K)=>{const W=()=>{if(x.isMounted){let{next:se,bu:ce,u:me,parent:he,vnode:le}=x;{const Ne=Sl(x);if(Ne){se&&(se.el=le.el,D(x,se,K)),Ne.asyncDep.then(()=>{x.isUnmounted||W()});return}}let ge=se,ve;_a(x,!1),se?(se.el=le.el,D(x,se,K)):se=le,ce&&$s(ce),(ve=se.props&&se.props.onVnodeBeforeUpdate)&&Et(ve,he,se,le),_a(x,!0);const Se=go(x),Ae=x.subTree;x.subTree=Se,m(Ae,Se,d(Ae.el),U(Ae),x,B,N),se.el=Se.el,ge===null&&hu(x,Se.el),me&&pt(me,B),(ve=se.props&&se.props.onVnodeUpdated)&&pt(()=>Et(ve,he,se,le),B)}else{let se;const{el:ce,props:me}=O,{bm:he,m:le,parent:ge,root:ve,type:Se}=x,Ae=as(O);_a(x,!1),he&&$s(he),!Ae&&(se=me&&me.onVnodeBeforeMount)&&Et(se,ge,O),_a(x,!0);{ve.ce&&ve.ce._def.shadowRoot!==!1&&ve.ce._injectChildStyle(Se);const Ne=x.subTree=go(x);m(null,Ne,y,T,x,B,N),O.el=Ne.el}if(le&&pt(le,B),!Ae&&(se=me&&me.onVnodeMounted)){const Ne=O;pt(()=>Et(se,ge,Ne),B)}(O.shapeFlag&256||ge&&as(ge.vnode)&&ge.vnode.shapeFlag&256)&&x.a&&pt(x.a,B),x.isMounted=!0,O=y=T=null}};x.scope.on();const M=x.effect=new Ri(W);x.scope.off();const k=x.update=M.run.bind(M),z=x.job=M.runIfDirty.bind(M);z.i=x,z.id=x.uid,M.scheduler=()=>Hr(z),_a(x,!0),k()},D=(x,O,y)=>{O.component=x;const T=x.vnode.props;x.vnode=O,x.next=null,Jd(x,O.props,T,y),eu(x,O.children,y),Jt(),ro(x),Xt()},L=(x,O,y,T,B,N,K,W,M=!1)=>{const k=x&&x.children,z=x?x.shapeFlag:0,se=O.children,{patchFlag:ce,shapeFlag:me}=O;if(ce>0){if(ce&128){Q(k,se,y,T,B,N,K,W,M);return}else if(ce&256){Y(k,se,y,T,B,N,K,W,M);return}}me&8?(z&16&&ne(k,B,N),se!==k&&u(y,se)):z&16?me&16?Q(k,se,y,T,B,N,K,W,M):ne(k,B,N,!0):(z&8&&u(y,""),me&16&&H(se,y,T,B,N,K,W,M))},Y=(x,O,y,T,B,N,K,W,M)=>{x=x||$a,O=O||$a;const k=x.length,z=O.length,se=Math.min(k,z);let ce;for(ce=0;ce<se;ce++){const me=O[ce]=M?ra(O[ce]):Ot(O[ce]);m(x[ce],me,y,null,B,N,K,W,M)}k>z?ne(x,B,N,!0,!1,se):H(O,y,T,B,N,K,W,M,se)},Q=(x,O,y,T,B,N,K,W,M)=>{let k=0;const z=O.length;let se=x.length-1,ce=z-1;for(;k<=se&&k<=ce;){const me=x[k],he=O[k]=M?ra(O[k]):Ot(O[k]);if(xa(me,he))m(me,he,y,null,B,N,K,W,M);else break;k++}for(;k<=se&&k<=ce;){const me=x[se],he=O[ce]=M?ra(O[ce]):Ot(O[ce]);if(xa(me,he))m(me,he,y,null,B,N,K,W,M);else break;se--,ce--}if(k>se){if(k<=ce){const me=ce+1,he=me<z?O[me].el:T;for(;k<=ce;)m(null,O[k]=M?ra(O[k]):Ot(O[k]),y,he,B,N,K,W,M),k++}}else if(k>ce)for(;k<=se;)Z(x[k],B,N,!0),k++;else{const me=k,he=k,le=new Map;for(k=he;k<=ce;k++){const at=O[k]=M?ra(O[k]):Ot(O[k]);at.key!=null&&le.set(at.key,k)}let ge,ve=0;const Se=ce-he+1;let Ae=!1,Ne=0;const Fe=new Array(Se);for(k=0;k<Se;k++)Fe[k]=0;for(k=me;k<=se;k++){const at=x[k];if(ve>=Se){Z(at,B,N,!0);continue}let gt;if(at.key!=null)gt=le.get(at.key);else for(ge=he;ge<=ce;ge++)if(Fe[ge-he]===0&&xa(at,O[ge])){gt=ge;break}gt===void 0?Z(at,B,N,!0):(Fe[gt-he]=k+1,gt>=Ne?Ne=gt:Ae=!0,m(at,O[gt],y,null,B,N,K,W,M),ve++)}const ea=Ae?nu(Fe):$a;for(ge=ea.length-1,k=Se-1;k>=0;k--){const at=he+k,gt=O[at],Qr=O[at+1],Zr=at+1<z?Qr.el||Qr.placeholder:T;Fe[k]===0?m(null,gt,y,Zr,B,N,K,W,M):Ae&&(ge<0||k!==ea[ge]?re(gt,y,Zr,2):ge--)}}},re=(x,O,y,T,B=null)=>{const{el:N,type:K,transition:W,children:M,shapeFlag:k}=x;if(k&6){re(x.component.subTree,O,y,T);return}if(k&128){x.suspense.move(O,y,T);return}if(k&64){K.move(x,O,y,oe);return}if(K===$e){s(N,O,y);for(let se=0;se<M.length;se++)re(M[se],O,y,T);s(x.anchor,O,y);return}if(K===Bs){w(x,O,y);return}if(T!==2&&k&1&&W)if(T===0)W.beforeEnter(N),s(N,O,y),pt(()=>W.enter(N),B);else{const{leave:se,delayLeave:ce,afterLeave:me}=W,he=()=>{x.ctx.isUnmounted?n(N):s(N,O,y)},le=()=>{N._isLeaving&&N[Vt](!0),se(N,()=>{he(),me&&me()})};ce?ce(N,he,le):le()}else s(N,O,y)},Z=(x,O,y,T=!1,B=!1)=>{const{type:N,props:K,ref:W,children:M,dynamicChildren:k,shapeFlag:z,patchFlag:se,dirs:ce,cacheIndex:me}=x;if(se===-2&&(B=!1),W!=null&&(Jt(),ts(W,null,y,x,!0),Xt()),me!=null&&(O.renderCache[me]=void 0),z&256){O.ctx.deactivate(x);return}const he=z&1&&ce,le=!as(x);let ge;if(le&&(ge=K&&K.onVnodeBeforeUnmount)&&Et(ge,O,x),z&6)ee(x.component,y,T);else{if(z&128){x.suspense.unmount(y,T);return}he&&ba(x,null,O,"beforeUnmount"),z&64?x.type.remove(x,O,y,oe,T):k&&!k.hasOnce&&(N!==$e||se>0&&se&64)?ne(k,O,y,!1,!0):(N===$e&&se&384||!B&&z&16)&&ne(M,O,y),T&&V(x)}(le&&(ge=K&&K.onVnodeUnmounted)||he)&&pt(()=>{ge&&Et(ge,O,x),he&&ba(x,null,O,"unmounted")},y)},V=x=>{const{type:O,el:y,anchor:T,transition:B}=x;if(O===$e){ae(y,T);return}if(O===Bs){E(x);return}const N=()=>{n(y),B&&!B.persisted&&B.afterLeave&&B.afterLeave()};if(x.shapeFlag&1&&B&&!B.persisted){const{leave:K,delayLeave:W}=B,M=()=>K(y,N);W?W(x.el,N,M):M()}else N()},ae=(x,O)=>{let y;for(;x!==O;)y=p(x),n(x),x=y;n(O)},ee=(x,O,y)=>{const{bum:T,scope:B,job:N,subTree:K,um:W,m:M,a:k}=x;mo(M),mo(k),T&&$s(T),B.stop(),N&&(N.flags|=8,Z(K,x,O,y)),W&&pt(W,O),pt(()=>{x.isUnmounted=!0},O)},ne=(x,O,y,T=!1,B=!1,N=0)=>{for(let K=N;K<x.length;K++)Z(x[K],O,y,T,B)},U=x=>{if(x.shapeFlag&6)return U(x.component.subTree);if(x.shapeFlag&128)return x.suspense.next();const O=p(x.anchor||x.el),y=O&&O[Td];return y?p(y):O};let te=!1;const X=(x,O,y)=>{x==null?O._vnode&&Z(O._vnode,null,null,!0):m(O._vnode||null,x,O,null,null,null,y),O._vnode=x,te||(te=!0,ro(),Zi(),te=!1)},oe={p:m,um:Z,m:re,r:V,mt:P,mc:H,pc:L,pbc:G,n:U,o:t};return{render:X,hydrate:void 0,createApp:Yd(X)}}function In({type:t,props:e},a){return a==="svg"&&t==="foreignObject"||a==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:a}function _a({effect:t,job:e},a){a?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function su(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function kl(t,e,a=!1){const s=t.children,n=e.children;if(ye(s)&&ye(n))for(let r=0;r<s.length;r++){const o=s[r];let i=n[r];i.shapeFlag&1&&!i.dynamicChildren&&((i.patchFlag<=0||i.patchFlag===32)&&(i=n[r]=ra(n[r]),i.el=o.el),!a&&i.patchFlag!==-2&&kl(o,i)),i.type===wn&&i.patchFlag!==-1&&(i.el=o.el),i.type===it&&!i.el&&(i.el=o.el)}}function nu(t){const e=t.slice(),a=[0];let s,n,r,o,i;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(n=a[a.length-1],t[n]<c){e[s]=n,a.push(s);continue}for(r=0,o=a.length-1;r<o;)i=r+o>>1,t[a[i]]<c?r=i+1:o=i;c<t[a[r]]&&(r>0&&(e[s]=a[r-1]),a[r]=s)}}for(r=a.length,o=a[r-1];r-- >0;)a[r]=o,o=e[o];return a}function Sl(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Sl(e)}function mo(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const ru=Symbol.for("v-scx"),ou=()=>wt(ru);function Fa(t,e,a){return El(t,e,a)}function El(t,e,a=Re){const{immediate:s,deep:n,flush:r,once:o}=a,i=We({},a),l=e&&s||!e&&r!=="post";let c;if(hs){if(r==="sync"){const f=ou();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!l){const f=()=>{};return f.stop=It,f.resume=It,f.pause=It,f}}const u=et;i.call=(f,g,m)=>kt(f,u,g,m);let d=!1;r==="post"?i.scheduler=f=>{pt(f,u&&u.suspense)}:r!=="sync"&&(d=!0,i.scheduler=(f,g)=>{g?f():Hr(f)}),i.augmentJob=f=>{e&&(f.flags|=4),d&&(f.flags|=2,u&&(f.id=u.uid,f.i=u))};const p=vd(t,e,i);return hs&&(c?c.push(p):l&&p()),p}function iu(t,e,a){const s=this.proxy,n=Ue(t)?t.includes(".")?Al(s,t):()=>s[t]:t.bind(s,s);let r;we(e)?r=e:(r=e.handler,a=e);const o=ws(this),i=El(n,r.bind(s),a);return o(),i}function Al(t,e){const a=e.split(".");return()=>{let s=t;for(let n=0;n<a.length&&s;n++)s=s[a[n]];return s}}const lu=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${xt(e)}Modifiers`]||t[`${ha(e)}Modifiers`];function cu(t,e,...a){if(t.isUnmounted)return;const s=t.vnode.props||Re;let n=a;const r=e.startsWith("update:"),o=r&&lu(s,e.slice(7));o&&(o.trim&&(n=a.map(u=>Ue(u)?u.trim():u)),o.number&&(n=a.map(Lr)));let i,l=s[i=Cn(e)]||s[i=Cn(xt(e))];!l&&r&&(l=s[i=Cn(ha(e))]),l&&kt(l,t,6,n);const c=s[i+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[i])return;t.emitted[i]=!0,kt(c,t,6,n)}}const du=new WeakMap;function Cl(t,e,a=!1){const s=a?du:e.emitsCache,n=s.get(t);if(n!==void 0)return n;const r=t.emits;let o={},i=!1;if(!we(t)){const l=c=>{const u=Cl(c,e,!0);u&&(i=!0,We(o,u))};!a&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!i?(De(t)&&s.set(t,null),null):(ye(r)?r.forEach(l=>o[l]=null):We(o,r),De(t)&&s.set(t,o),o)}function yn(t,e){return!t||!cn(e)?!1:(e=e.slice(2).replace(/Once$/,""),Le(t,e[0].toLowerCase()+e.slice(1))||Le(t,ha(e))||Le(t,e))}function go(t){const{type:e,vnode:a,proxy:s,withProxy:n,propsOptions:[r],slots:o,attrs:i,emit:l,render:c,renderCache:u,props:d,data:p,setupState:f,ctx:g,inheritAttrs:m}=t,v=Ks(t);let h,_;try{if(a.shapeFlag&4){const E=n||s,I=E;h=Ot(c.call(I,E,u,d,f,p,g)),_=i}else{const E=e;h=Ot(E.length>1?E(d,{attrs:i,slots:o,emit:l}):E(d,null)),_=e.props?i:uu(i)}}catch(E){ns.length=0,bn(E,t,1),h=tt(it)}let w=h;if(_&&m!==!1){const E=Object.keys(_),{shapeFlag:I}=w;E.length&&I&7&&(r&&E.some(Cr)&&(_=pu(_,r)),w=pa(w,_,!1,!0))}return a.dirs&&(w=pa(w,null,!1,!0),w.dirs=w.dirs?w.dirs.concat(a.dirs):a.dirs),a.transition&&ps(w,a.transition),h=w,Ks(v),h}const uu=t=>{let e;for(const a in t)(a==="class"||a==="style"||cn(a))&&((e||(e={}))[a]=t[a]);return e},pu=(t,e)=>{const a={};for(const s in t)(!Cr(s)||!(s.slice(9)in e))&&(a[s]=t[s]);return a};function fu(t,e,a){const{props:s,children:n,component:r}=t,{props:o,children:i,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(a&&l>=0){if(l&1024)return!0;if(l&16)return s?bo(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const p=u[d];if(o[p]!==s[p]&&!yn(c,p))return!0}}}else return(n||i)&&(!i||!i.$stable)?!0:s===o?!1:s?o?bo(s,o,c):!0:!!o;return!1}function bo(t,e,a){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let n=0;n<s.length;n++){const r=s[n];if(e[r]!==t[r]&&!yn(a,r))return!0}return!1}function hu({vnode:t,parent:e},a){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=a,e=e.parent;else break}}const Pl=t=>t.__isSuspense;function mu(t,e){e&&e.pendingBranch?ye(t)?e.effects.push(...t):e.effects.push(t):xd(t)}const $e=Symbol.for("v-fgt"),wn=Symbol.for("v-txt"),it=Symbol.for("v-cmt"),Bs=Symbol.for("v-stc"),ns=[];let mt=null;function pe(t=!1){ns.push(mt=t?null:[])}function gu(){ns.pop(),mt=ns[ns.length-1]||null}let fs=1;function Xs(t,e=!1){fs+=t,t<0&&mt&&e&&(mt.hasOnce=!0)}function Ol(t){return t.dynamicChildren=fs>0?mt||$a:null,gu(),fs>0&&mt&&mt.push(t),t}function fe(t,e,a,s,n,r){return Ol(b(t,e,a,s,n,r,!0))}function Ll(t,e,a,s,n){return Ol(tt(t,e,a,s,n,!0))}function Qs(t){return t?t.__v_isVNode===!0:!1}function xa(t,e){return t.type===e.type&&t.key===e.key}const Ml=({key:t})=>t??null,Fs=({ref:t,ref_key:e,ref_for:a})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||je(t)||we(t)?{i:ht,r:t,k:e,f:!!a}:t:null);function b(t,e=null,a=null,s=0,n=null,r=t===$e?0:1,o=!1,i=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ml(e),ref:e&&Fs(e),scopeId:tl,slotScopeIds:null,children:a,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:ht};return i?(jr(l,a),r&128&&t.normalize(l)):a&&(l.shapeFlag|=Ue(a)?8:16),fs>0&&!o&&mt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&mt.push(l),l}const tt=bu;function bu(t,e=null,a=null,s=0,n=null,r=!1){if((!t||t===pl)&&(t=it),Qs(t)){const i=pa(t,e,!0);return a&&jr(i,a),fs>0&&!r&&mt&&(i.shapeFlag&6?mt[mt.indexOf(t)]=i:mt.push(i)),i.patchFlag=-2,i}if(Cu(t)&&(t=t.__vccOpts),e){e=_u(e);let{class:i,style:l}=e;i&&!Ue(i)&&(e.class=Ve(i)),De(l)&&(Br(l)&&!ye(l)&&(l=We({},l)),e.style=hn(l))}const o=Ue(t)?1:Pl(t)?128:al(t)?64:De(t)?4:we(t)?2:0;return b(t,e,a,s,n,o,r,!0)}function _u(t){return t?Br(t)||_l(t)?We({},t):t:null}function pa(t,e,a=!1,s=!1){const{props:n,ref:r,patchFlag:o,children:i,transition:l}=t,c=e?vu(n||{},e):n,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Ml(c),ref:e&&e.ref?a&&r?ye(r)?r.concat(Fs(e)):[r,Fs(e)]:Fs(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:i,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&pa(t.ssContent),ssFallback:t.ssFallback&&pa(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&ps(u,l.clone(u)),u}function Be(t=" ",e=0){return tt(wn,null,t,e)}function ut(t,e){const a=tt(Bs,null,t);return a.staticCount=e,a}function ke(t="",e=!1){return e?(pe(),Ll(it,null,t)):tt(it,null,t)}function Ot(t){return t==null||typeof t=="boolean"?tt(it):ye(t)?tt($e,null,t.slice()):Qs(t)?ra(t):tt(wn,null,String(t))}function ra(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:pa(t)}function jr(t,e){let a=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(ye(e))a=16;else if(typeof e=="object")if(s&65){const n=e.default;n&&(n._c&&(n._d=!1),jr(t,n()),n._c&&(n._d=!0));return}else{a=32;const n=e._;!n&&!_l(e)?e._ctx=ht:n===3&&ht&&(ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else we(e)?(e={default:e,_ctx:ht},a=32):(e=String(e),s&64?(a=16,e=[Be(e)]):a=8);t.children=e,t.shapeFlag|=a}function vu(...t){const e={};for(let a=0;a<t.length;a++){const s=t[a];for(const n in s)if(n==="class")e.class!==s.class&&(e.class=Ve([e.class,s.class]));else if(n==="style")e.style=hn([e.style,s.style]);else if(cn(n)){const r=e[n],o=s[n];o&&r!==o&&!(ye(r)&&r.includes(o))&&(e[n]=r?[].concat(r,o):o)}else n!==""&&(e[n]=s[n])}return e}function Et(t,e,a,s=null){kt(t,e,7,[a,s])}const yu=ml();let wu=0;function xu(t,e,a){const s=t.type,n=(e?e.appContext:t.appContext)||yu,r={uid:wu++,vnode:t,type:s,parent:e,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Li(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(n.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yl(s,n),emitsOptions:Cl(s,n),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:s.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:a,suspenseId:a?a.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=cu.bind(null,r),t.ce&&t.ce(r),r}let et=null;const qr=()=>et||ht;let Zs,fr;{const t=fn(),e=(a,s)=>{let n;return(n=t[a])||(n=t[a]=[]),n.push(s),r=>{n.length>1?n.forEach(o=>o(r)):n[0](r)}};Zs=e("__VUE_INSTANCE_SETTERS__",a=>et=a),fr=e("__VUE_SSR_SETTERS__",a=>hs=a)}const ws=t=>{const e=et;return Zs(t),t.scope.on(),()=>{t.scope.off(),Zs(e)}},_o=()=>{et&&et.scope.off(),Zs(null)};function Dl(t){return t.vnode.shapeFlag&4}let hs=!1;function Tu(t,e=!1,a=!1){e&&fr(e);const{props:s,children:n}=t.vnode,r=Dl(t);Wd(t,s,r,e),Zd(t,n,a||e);const o=r?ku(t,e):void 0;return e&&fr(!1),o}function ku(t,e){const a=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,zd);const{setup:s}=a;if(s){Jt();const n=t.setupContext=s.length>1?Eu(t):null,r=ws(t),o=ys(s,t,0,[t.props,n]),i=Ti(o);if(Xt(),r(),(i||t.sp)&&!as(t)&&cl(t),i){if(o.then(_o,_o),e)return o.then(l=>{vo(t,l)}).catch(l=>{bn(l,t,0)});t.asyncDep=o}else vo(t,o)}else Rl(t)}function vo(t,e,a){we(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=Ji(e)),Rl(t)}function Rl(t,e,a){const s=t.type;t.render||(t.render=s.render||It);{const n=ws(t);Jt();try{Hd(t)}finally{Xt(),n()}}}const Su={get(t,e){return Ze(t,"get",""),t[e]}};function Eu(t){const e=a=>{t.exposed=a||{}};return{attrs:new Proxy(t.attrs,Su),slots:t.slots,emit:t.emit,expose:e}}function xn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ji(Fr(t.exposed)),{get(e,a){if(a in e)return e[a];if(a in ss)return ss[a](t)},has(e,a){return a in e||a in ss}})):t.proxy}function Au(t,e=!0){return we(t)?t.displayName||t.name:t.name||e&&t.__name}function Cu(t){return we(t)&&"__vccOpts"in t}const _e=(t,e)=>bd(t,e,hs);function Vr(t,e,a){try{Xs(-1);const s=arguments.length;return s===2?De(e)&&!ye(e)?Qs(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(s>3?a=Array.prototype.slice.call(arguments,2):s===3&&Qs(a)&&(a=[a]),tt(t,e,a))}finally{Xs(1)}}const Pu="3.5.24";let hr;const yo=typeof window<"u"&&window.trustedTypes;if(yo)try{hr=yo.createPolicy("vue",{createHTML:t=>t})}catch{}const Il=hr?t=>hr.createHTML(t):t=>t,Ou="http://www.w3.org/2000/svg",Lu="http://www.w3.org/1998/Math/MathML",jt=typeof document<"u"?document:null,wo=jt&&jt.createElement("template"),Mu={insert:(t,e,a)=>{e.insertBefore(t,a||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,a,s)=>{const n=e==="svg"?jt.createElementNS(Ou,t):e==="mathml"?jt.createElementNS(Lu,t):a?jt.createElement(t,{is:a}):jt.createElement(t);return t==="select"&&s&&s.multiple!=null&&n.setAttribute("multiple",s.multiple),n},createText:t=>jt.createTextNode(t),createComment:t=>jt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>jt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,a,s,n,r){const o=a?a.previousSibling:e.lastChild;if(n&&(n===r||n.nextSibling))for(;e.insertBefore(n.cloneNode(!0),a),!(n===r||!(n=n.nextSibling)););else{wo.innerHTML=Il(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const i=wo.content;if(s==="svg"||s==="mathml"){const l=i.firstChild;for(;l.firstChild;)i.appendChild(l.firstChild);i.removeChild(l)}e.insertBefore(i,a)}return[o?o.nextSibling:e.firstChild,a?a.previousSibling:e.lastChild]}},ta="transition",Va="animation",ms=Symbol("_vtc"),$l={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Du=We({},sl,$l),Ru=t=>(t.displayName="Transition",t.props=Du,t),Iu=Ru((t,{slots:e})=>Vr(Ed,$u(t),e)),va=(t,e=[])=>{ye(t)?t.forEach(a=>a(...e)):t&&t(...e)},xo=t=>t?ye(t)?t.some(e=>e.length>1):t.length>1:!1;function $u(t){const e={};for(const F in t)F in $l||(e[F]=t[F]);if(t.css===!1)return e;const{name:a="v",type:s,duration:n,enterFromClass:r=`${a}-enter-from`,enterActiveClass:o=`${a}-enter-active`,enterToClass:i=`${a}-enter-to`,appearFromClass:l=r,appearActiveClass:c=o,appearToClass:u=i,leaveFromClass:d=`${a}-leave-from`,leaveActiveClass:p=`${a}-leave-active`,leaveToClass:f=`${a}-leave-to`}=t,g=Nu(n),m=g&&g[0],v=g&&g[1],{onBeforeEnter:h,onEnter:_,onEnterCancelled:w,onLeave:E,onLeaveCancelled:I,onBeforeAppear:R=h,onAppear:C=_,onAppearCancelled:H=w}=e,$=(F,q,P,A)=>{F._enterCancelled=A,ya(F,q?u:i),ya(F,q?c:o),P&&P()},G=(F,q)=>{F._isLeaving=!1,ya(F,d),ya(F,f),ya(F,p),q&&q()},j=F=>(q,P)=>{const A=F?C:_,S=()=>$(q,F,P);va(A,[q,S]),To(()=>{ya(q,F?l:r),zt(q,F?u:i),xo(A)||ko(q,s,m,S)})};return We(e,{onBeforeEnter(F){va(h,[F]),zt(F,r),zt(F,o)},onBeforeAppear(F){va(R,[F]),zt(F,l),zt(F,c)},onEnter:j(!1),onAppear:j(!0),onLeave(F,q){F._isLeaving=!0;const P=()=>G(F,q);zt(F,d),F._enterCancelled?(zt(F,p),Ao(F)):(Ao(F),zt(F,p)),To(()=>{F._isLeaving&&(ya(F,d),zt(F,f),xo(E)||ko(F,s,v,P))}),va(E,[F,P])},onEnterCancelled(F){$(F,!1,void 0,!0),va(w,[F])},onAppearCancelled(F){$(F,!0,void 0,!0),va(H,[F])},onLeaveCancelled(F){G(F),va(I,[F])}})}function Nu(t){if(t==null)return null;if(De(t))return[$n(t.enter),$n(t.leave)];{const e=$n(t);return[e,e]}}function $n(t){return $c(t)}function zt(t,e){e.split(/\s+/).forEach(a=>a&&t.classList.add(a)),(t[ms]||(t[ms]=new Set)).add(e)}function ya(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const a=t[ms];a&&(a.delete(e),a.size||(t[ms]=void 0))}function To(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let Bu=0;function ko(t,e,a,s){const n=t._endId=++Bu,r=()=>{n===t._endId&&s()};if(a!=null)return setTimeout(r,a);const{type:o,timeout:i,propCount:l}=Fu(t,e);if(!o)return s();const c=o+"end";let u=0;const d=()=>{t.removeEventListener(c,p),r()},p=f=>{f.target===t&&++u>=l&&d()};setTimeout(()=>{u<l&&d()},i+1),t.addEventListener(c,p)}function Fu(t,e){const a=window.getComputedStyle(t),s=g=>(a[g]||"").split(", "),n=s(`${ta}Delay`),r=s(`${ta}Duration`),o=So(n,r),i=s(`${Va}Delay`),l=s(`${Va}Duration`),c=So(i,l);let u=null,d=0,p=0;e===ta?o>0&&(u=ta,d=o,p=r.length):e===Va?c>0&&(u=Va,d=c,p=l.length):(d=Math.max(o,c),u=d>0?o>c?ta:Va:null,p=u?u===ta?r.length:l.length:0);const f=u===ta&&/\b(?:transform|all)(?:,|$)/.test(s(`${ta}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:f}}function So(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((a,s)=>Eo(a)+Eo(t[s])))}function Eo(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Ao(t){return(t?t.ownerDocument:document).body.offsetHeight}function zu(t,e,a){const s=t[ms];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):a?t.setAttribute("class",e):t.className=e}const en=Symbol("_vod"),Nl=Symbol("_vsh"),Cs={name:"show",beforeMount(t,{value:e},{transition:a}){t[en]=t.style.display==="none"?"":t.style.display,a&&e?a.beforeEnter(t):Ya(t,e)},mounted(t,{value:e},{transition:a}){a&&e&&a.enter(t)},updated(t,{value:e,oldValue:a},{transition:s}){!e!=!a&&(s?e?(s.beforeEnter(t),Ya(t,!0),s.enter(t)):s.leave(t,()=>{Ya(t,!1)}):Ya(t,e))},beforeUnmount(t,{value:e}){Ya(t,e)}};function Ya(t,e){t.style.display=e?t[en]:"none",t[Nl]=!e}const Hu=Symbol(""),Uu=/(?:^|;)\s*display\s*:/;function Gu(t,e,a){const s=t.style,n=Ue(a);let r=!1;if(a&&!n){if(e)if(Ue(e))for(const o of e.split(";")){const i=o.slice(0,o.indexOf(":")).trim();a[i]==null&&zs(s,i,"")}else for(const o in e)a[o]==null&&zs(s,o,"");for(const o in a)o==="display"&&(r=!0),zs(s,o,a[o])}else if(n){if(e!==a){const o=s[Hu];o&&(a+=";"+o),s.cssText=a,r=Uu.test(a)}}else e&&t.removeAttribute("style");en in t&&(t[en]=r?s.display:"",t[Nl]&&(s.display="none"))}const Co=/\s*!important$/;function zs(t,e,a){if(ye(a))a.forEach(s=>zs(t,e,s));else if(a==null&&(a=""),e.startsWith("--"))t.setProperty(e,a);else{const s=ju(t,e);Co.test(a)?t.setProperty(ha(s),a.replace(Co,""),"important"):t[s]=a}}const Po=["Webkit","Moz","ms"],Nn={};function ju(t,e){const a=Nn[e];if(a)return a;let s=xt(e);if(s!=="filter"&&s in t)return Nn[e]=s;s=pn(s);for(let n=0;n<Po.length;n++){const r=Po[n]+s;if(r in t)return Nn[e]=r}return e}const Oo="http://www.w3.org/1999/xlink";function Lo(t,e,a,s,n,r=Uc(e)){s&&e.startsWith("xlink:")?a==null?t.removeAttributeNS(Oo,e.slice(6,e.length)):t.setAttributeNS(Oo,e,a):a==null||r&&!Ai(a)?t.removeAttribute(e):t.setAttribute(e,r?"":Nt(a)?String(a):a)}function Mo(t,e,a,s,n){if(e==="innerHTML"||e==="textContent"){a!=null&&(t[e]=e==="innerHTML"?Il(a):a);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const i=r==="OPTION"?t.getAttribute("value")||"":t.value,l=a==null?t.type==="checkbox"?"on":"":String(a);(i!==l||!("_value"in t))&&(t.value=l),a==null&&t.removeAttribute(e),t._value=a;return}let o=!1;if(a===""||a==null){const i=typeof t[e];i==="boolean"?a=Ai(a):a==null&&i==="string"?(a="",o=!0):i==="number"&&(a=0,o=!0)}try{t[e]=a}catch{}o&&t.removeAttribute(n||e)}function Ta(t,e,a,s){t.addEventListener(e,a,s)}function qu(t,e,a,s){t.removeEventListener(e,a,s)}const Do=Symbol("_vei");function Vu(t,e,a,s,n=null){const r=t[Do]||(t[Do]={}),o=r[e];if(s&&o)o.value=s;else{const[i,l]=Yu(e);if(s){const c=r[e]=Ju(s,n);Ta(t,i,c,l)}else o&&(qu(t,i,o,l),r[e]=void 0)}}const Ro=/(?:Once|Passive|Capture)$/;function Yu(t){let e;if(Ro.test(t)){e={};let s;for(;s=t.match(Ro);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ha(t.slice(2)),e]}let Bn=0;const Ku=Promise.resolve(),Wu=()=>Bn||(Ku.then(()=>Bn=0),Bn=Date.now());function Ju(t,e){const a=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=a.attached)return;kt(Xu(s,a.value),e,5,[s])};return a.value=t,a.attached=Wu(),a}function Xu(t,e){if(ye(e)){const a=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{a.call(t),t._stopped=!0},e.map(s=>n=>!n._stopped&&s&&s(n))}else return e}const Io=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Qu=(t,e,a,s,n,r)=>{const o=n==="svg";e==="class"?zu(t,s,o):e==="style"?Gu(t,a,s):cn(e)?Cr(e)||Vu(t,e,a,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Zu(t,e,s,o))?(Mo(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Lo(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Ue(s))?Mo(t,xt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Lo(t,e,s,o))};function Zu(t,e,a,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Io(e)&&we(a));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const n=t.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Io(e)&&Ue(a)?!1:e in t}const tn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ye(e)?a=>$s(e,a):e};function ep(t){t.target.composing=!0}function $o(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const za=Symbol("_assign");function No(t,e,a){return e&&(t=t.trim()),a&&(t=Lr(t)),t}const Hs={created(t,{modifiers:{lazy:e,trim:a,number:s}},n){t[za]=tn(n);const r=s||n.props&&n.props.type==="number";Ta(t,e?"change":"input",o=>{o.target.composing||t[za](No(t.value,a,r))}),(a||r)&&Ta(t,"change",()=>{t.value=No(t.value,a,r)}),e||(Ta(t,"compositionstart",ep),Ta(t,"compositionend",$o),Ta(t,"change",$o))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:a,modifiers:{lazy:s,trim:n,number:r}},o){if(t[za]=tn(o),t.composing)return;const i=(r||t.type==="number")&&!/^0\d/.test(t.value)?Lr(t.value):t.value,l=e??"";i!==l&&(document.activeElement===t&&t.type!=="range"&&(s&&e===a||n&&t.value.trim()===l)||(t.value=l))}},Bl={deep:!0,created(t,e,a){t[za]=tn(a),Ta(t,"change",()=>{const s=t._modelValue,n=tp(t),r=t.checked,o=t[za];if(ye(s)){const i=Ci(s,n),l=i!==-1;if(r&&!l)o(s.concat(n));else if(!r&&l){const c=[...s];c.splice(i,1),o(c)}}else if(dn(s)){const i=new Set(s);r?i.add(n):i.delete(n),o(i)}else o(Fl(t,r))})},mounted:Bo,beforeUpdate(t,e,a){t[za]=tn(a),Bo(t,e,a)}};function Bo(t,{value:e,oldValue:a},s){t._modelValue=e;let n;if(ye(e))n=Ci(e,s.props.value)>-1;else if(dn(e))n=e.has(s.props.value);else{if(e===a)return;n=mn(e,Fl(t,!0))}t.checked!==n&&(t.checked=n)}function tp(t){return"_value"in t?t._value:t.value}function Fl(t,e){const a=e?"_trueValue":"_falseValue";return a in t?t[a]:e}const ap=["ctrl","shift","alt","meta"],sp={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>ap.some(a=>t[`${a}Key`]&&!e.includes(a))},Ca=(t,e)=>{const a=t._withMods||(t._withMods={}),s=e.join(".");return a[s]||(a[s]=((n,...r)=>{for(let o=0;o<e.length;o++){const i=sp[e[o]];if(i&&i(n,e))return}return t(n,...r)}))},np={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Yt=(t,e)=>{const a=t._withKeys||(t._withKeys={}),s=e.join(".");return a[s]||(a[s]=(n=>{if(!("key"in n))return;const r=ha(n.key);if(e.some(o=>o===r||np[o]===r))return t(n)}))},rp=We({patchProp:Qu},Mu);let Fo;function op(){return Fo||(Fo=tu(rp))}const ip=((...t)=>{const e=op().createApp(...t),{mount:a}=e;return e.mount=s=>{const n=cp(s);if(!n)return;const r=e._component;!we(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const o=a(n,!1,lp(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),o},e});function lp(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function cp(t){return Ue(t)?document.querySelector(t):t}let zl;const Tn=t=>zl=t,Hl=Symbol();function mr(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var rs;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rs||(rs={}));function dp(){const t=Mi(!0),e=t.run(()=>Pe({}));let a=[],s=[];const n=Fr({install(r){Tn(n),n._a=r,r.provide(Hl,n),r.config.globalProperties.$pinia=n,s.forEach(o=>a.push(o)),s=[]},use(r){return this._a?a.push(r):s.push(r),this},_p:a,_a:null,_e:t,_s:new Map,state:e});return n}const Ul=()=>{};function zo(t,e,a,s=Ul){t.add(e);const n=()=>{t.delete(e)&&s()};return!a&&Di()&&jc(n),n}function Oa(t,...e){t.forEach(a=>{a(...e)})}const up=t=>t(),Ho=Symbol(),Fn=Symbol();function gr(t,e){t instanceof Map&&e instanceof Map?e.forEach((a,s)=>t.set(s,a)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const a in e){if(!e.hasOwnProperty(a))continue;const s=e[a],n=t[a];mr(n)&&mr(s)&&t.hasOwnProperty(a)&&!je(s)&&!da(s)?t[a]=gr(n,s):t[a]=s}return t}const pp=Symbol();function fp(t){return!mr(t)||!Object.prototype.hasOwnProperty.call(t,pp)}const{assign:sa}=Object;function hp(t){return!!(je(t)&&t.effect)}function mp(t,e,a,s){const{state:n,actions:r,getters:o}=e,i=a.state.value[t];let l;function c(){i||(a.state.value[t]=n?n():{});const u=fd(a.state.value[t]);return sa(u,r,Object.keys(o||{}).reduce((d,p)=>(d[p]=Fr(_e(()=>{Tn(a);const f=a._s.get(t);return o[p].call(f,f)})),d),{}))}return l=Gl(t,c,e,a,s,!0),l}function Gl(t,e,a={},s,n,r){let o;const i=sa({actions:{}},a),l={deep:!0};let c,u,d=new Set,p=new Set,f;const g=s.state.value[t];!r&&!g&&(s.state.value[t]={}),Pe({});let m;function v(H){let $;c=u=!1,typeof H=="function"?(H(s.state.value[t]),$={type:rs.patchFunction,storeId:t,events:f}):(gr(s.state.value[t],H),$={type:rs.patchObject,payload:H,storeId:t,events:f});const G=m=Symbol();zr().then(()=>{m===G&&(c=!0)}),u=!0,Oa(d,$,s.state.value[t])}const h=r?function(){const{state:$}=a,G=$?$():{};this.$patch(j=>{sa(j,G)})}:Ul;function _(){o.stop(),d.clear(),p.clear(),s._s.delete(t)}const w=(H,$="")=>{if(Ho in H)return H[Fn]=$,H;const G=function(){Tn(s);const j=Array.from(arguments),F=new Set,q=new Set;function P(D){F.add(D)}function A(D){q.add(D)}Oa(p,{args:j,name:G[Fn],store:I,after:P,onError:A});let S;try{S=H.apply(this&&this.$id===t?this:I,j)}catch(D){throw Oa(q,D),D}return S instanceof Promise?S.then(D=>(Oa(F,D),D)).catch(D=>(Oa(q,D),Promise.reject(D))):(Oa(F,S),S)};return G[Ho]=!0,G[Fn]=$,G},E={_p:s,$id:t,$onAction:zo.bind(null,p),$patch:v,$reset:h,$subscribe(H,$={}){const G=zo(d,H,$.detached,()=>j()),j=o.run(()=>Fa(()=>s.state.value[t],F=>{($.flush==="sync"?u:c)&&H({storeId:t,type:rs.direct,events:f},F)},sa({},l,$)));return G},$dispose:_},I=Mt(E);s._s.set(t,I);const C=(s._a&&s._a.runWithContext||up)(()=>s._e.run(()=>(o=Mi()).run(()=>e({action:w}))));for(const H in C){const $=C[H];if(je($)&&!hp($)||da($))r||(g&&fp($)&&(je($)?$.value=g[H]:gr($,g[H])),s.state.value[t][H]=$);else if(typeof $=="function"){const G=w($,H);C[H]=G,i.actions[H]=$}}return sa(I,C),sa(Ee(I),C),Object.defineProperty(I,"$state",{get:()=>s.state.value[t],set:H=>{v($=>{sa($,H)})}}),s._p.forEach(H=>{sa(I,o.run(()=>H({store:I,app:s._a,pinia:s,options:i})))}),g&&r&&a.hydrate&&a.hydrate(I.$state,g),c=!0,u=!0,I}function gp(t,e,a){let s;const n=typeof e=="function";s=n?a:e;function r(o,i){const l=Kd();return o=o||(l?wt(Hl,null):null),o&&Tn(o),o=zl,o._s.has(t)||(n?Gl(t,e,s,o):mp(t,s,o)),o._s.get(t)}return r.$id=t,r}const Ia=typeof document<"u";function jl(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bp(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&jl(t.default)}const Oe=Object.assign;function zn(t,e){const a={};for(const s in e){const n=e[s];a[s]=St(n)?n.map(t):t(n)}return a}const os=()=>{},St=Array.isArray;function Uo(t,e){const a={};for(const s in t)a[s]=s in e?e[s]:t[s];return a}const ql=/#/g,_p=/&/g,vp=/\//g,yp=/=/g,wp=/\?/g,Vl=/\+/g,xp=/%5B/g,Tp=/%5D/g,Yl=/%5E/g,kp=/%60/g,Kl=/%7B/g,Sp=/%7C/g,Wl=/%7D/g,Ep=/%20/g;function Yr(t){return t==null?"":encodeURI(""+t).replace(Sp,"|").replace(xp,"[").replace(Tp,"]")}function Ap(t){return Yr(t).replace(Kl,"{").replace(Wl,"}").replace(Yl,"^")}function br(t){return Yr(t).replace(Vl,"%2B").replace(Ep,"+").replace(ql,"%23").replace(_p,"%26").replace(kp,"`").replace(Kl,"{").replace(Wl,"}").replace(Yl,"^")}function Cp(t){return br(t).replace(yp,"%3D")}function Pp(t){return Yr(t).replace(ql,"%23").replace(wp,"%3F")}function Op(t){return Pp(t).replace(vp,"%2F")}function gs(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const Lp=/\/$/,Mp=t=>t.replace(Lp,"");function Hn(t,e,a="/"){let s,n={},r="",o="";const i=e.indexOf("#");let l=e.indexOf("?");return l=i>=0&&l>i?-1:l,l>=0&&(s=e.slice(0,l),r=e.slice(l,i>0?i:e.length),n=t(r.slice(1))),i>=0&&(s=s||e.slice(0,i),o=e.slice(i,e.length)),s=$p(s??e,a),{fullPath:s+r+o,path:s,query:n,hash:gs(o)}}function Dp(t,e){const a=e.query?t(e.query):"";return e.path+(a&&"?")+a+(e.hash||"")}function Go(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Rp(t,e,a){const s=e.matched.length-1,n=a.matched.length-1;return s>-1&&s===n&&Ha(e.matched[s],a.matched[n])&&Jl(e.params,a.params)&&t(e.query)===t(a.query)&&e.hash===a.hash}function Ha(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Jl(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const a in t)if(!Ip(t[a],e[a]))return!1;return!0}function Ip(t,e){return St(t)?jo(t,e):St(e)?jo(e,t):t===e}function jo(t,e){return St(e)?t.length===e.length&&t.every((a,s)=>a===e[s]):t.length===1&&t[0]===e}function $p(t,e){if(t.startsWith("/"))return t;if(!t)return e;const a=e.split("/"),s=t.split("/"),n=s[s.length-1];(n===".."||n===".")&&s.push("");let r=a.length-1,o,i;for(o=0;o<s.length;o++)if(i=s[o],i!==".")if(i==="..")r>1&&r--;else break;return a.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const aa={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let _r=(function(t){return t.pop="pop",t.push="push",t})({}),Un=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Np(t){if(!t)if(Ia){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Mp(t)}const Bp=/^[^#]+#/;function Fp(t,e){return t.replace(Bp,"#")+e}function zp(t,e){const a=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-a.left-(e.left||0),top:s.top-a.top-(e.top||0)}}const kn=()=>({left:window.scrollX,top:window.scrollY});function Hp(t){let e;if("el"in t){const a=t.el,s=typeof a=="string"&&a.startsWith("#"),n=typeof a=="string"?s?document.getElementById(a.slice(1)):document.querySelector(a):a;if(!n)return;e=zp(n,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function qo(t,e){return(history.state?history.state.position-e:-1)+t}const vr=new Map;function Up(t,e){vr.set(t,e)}function Gp(t){const e=vr.get(t);return vr.delete(t),e}function jp(t){return typeof t=="string"||t&&typeof t=="object"}function Xl(t){return typeof t=="string"||typeof t=="symbol"}let He=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const Ql=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function Ua(t,e){return Oe(new Error,{type:t,[Ql]:!0},e)}function Ht(t,e){return t instanceof Error&&Ql in t&&(e==null||!!(t.type&e))}const qp=["params","query","hash"];function Vp(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const a of qp)a in t&&(e[a]=t[a]);return JSON.stringify(e,null,2)}function Yp(t){const e={};if(t===""||t==="?")return e;const a=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<a.length;++s){const n=a[s].replace(Vl," "),r=n.indexOf("="),o=gs(r<0?n:n.slice(0,r)),i=r<0?null:gs(n.slice(r+1));if(o in e){let l=e[o];St(l)||(l=e[o]=[l]),l.push(i)}else e[o]=i}return e}function Vo(t){let e="";for(let a in t){const s=t[a];if(a=Cp(a),s==null){s!==void 0&&(e+=(e.length?"&":"")+a);continue}(St(s)?s.map(n=>n&&br(n)):[s&&br(s)]).forEach(n=>{n!==void 0&&(e+=(e.length?"&":"")+a,n!=null&&(e+="="+n))})}return e}function Kp(t){const e={};for(const a in t){const s=t[a];s!==void 0&&(e[a]=St(s)?s.map(n=>n==null?null:""+n):s==null?s:""+s)}return e}const Wp=Symbol(""),Yo=Symbol(""),Sn=Symbol(""),Kr=Symbol(""),yr=Symbol("");function Ka(){let t=[];function e(s){return t.push(s),()=>{const n=t.indexOf(s);n>-1&&t.splice(n,1)}}function a(){t=[]}return{add:e,list:()=>t.slice(),reset:a}}function oa(t,e,a,s,n,r=o=>o()){const o=s&&(s.enterCallbacks[n]=s.enterCallbacks[n]||[]);return()=>new Promise((i,l)=>{const c=p=>{p===!1?l(Ua(He.NAVIGATION_ABORTED,{from:a,to:e})):p instanceof Error?l(p):jp(p)?l(Ua(He.NAVIGATION_GUARD_REDIRECT,{from:e,to:p})):(o&&s.enterCallbacks[n]===o&&typeof p=="function"&&o.push(p),i())},u=r(()=>t.call(s&&s.instances[n],e,a,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(p=>l(p))})}function Gn(t,e,a,s,n=r=>r()){const r=[];for(const o of t)for(const i in o.components){let l=o.components[i];if(!(e!=="beforeRouteEnter"&&!o.instances[i]))if(jl(l)){const c=(l.__vccOpts||l)[e];c&&r.push(oa(c,a,s,o,i,n))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${i}" at "${o.path}"`);const d=bp(u)?u.default:u;o.mods[i]=u,o.components[i]=d;const p=(d.__vccOpts||d)[e];return p&&oa(p,a,s,o,i,n)()}))}}return r}function Jp(t,e){const a=[],s=[],n=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const i=e.matched[o];i&&(t.matched.find(c=>Ha(c,i))?s.push(i):a.push(i));const l=t.matched[o];l&&(e.matched.find(c=>Ha(c,l))||n.push(l))}return[a,s,n]}let Xp=()=>location.protocol+"//"+location.host;function Zl(t,e){const{pathname:a,search:s,hash:n}=e,r=t.indexOf("#");if(r>-1){let o=n.includes(t.slice(r))?t.slice(r).length:1,i=n.slice(o);return i[0]!=="/"&&(i="/"+i),Go(i,"")}return Go(a,t)+s+n}function Qp(t,e,a,s){let n=[],r=[],o=null;const i=({state:p})=>{const f=Zl(t,location),g=a.value,m=e.value;let v=0;if(p){if(a.value=f,e.value=p,o&&o===g){o=null;return}v=m?p.position-m.position:0}else s(f);n.forEach(h=>{h(a.value,g,{delta:v,type:_r.pop,direction:v?v>0?Un.forward:Un.back:Un.unknown})})};function l(){o=a.value}function c(p){n.push(p);const f=()=>{const g=n.indexOf(p);g>-1&&n.splice(g,1)};return r.push(f),f}function u(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(Oe({},p.state,{scroll:kn()}),"")}}function d(){for(const p of r)p();r=[],window.removeEventListener("popstate",i),window.removeEventListener("pagehide",u),document.removeEventListener("visibilitychange",u)}return window.addEventListener("popstate",i),window.addEventListener("pagehide",u),document.addEventListener("visibilitychange",u),{pauseListeners:l,listen:c,destroy:d}}function Ko(t,e,a,s=!1,n=!1){return{back:t,current:e,forward:a,replaced:s,position:window.history.length,scroll:n?kn():null}}function Zp(t){const{history:e,location:a}=window,s={value:Zl(t,a)},n={value:e.state};n.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),p=d>-1?(a.host&&document.querySelector("base")?t:t.slice(d))+l:Xp()+t+l;try{e[u?"replaceState":"pushState"](c,"",p),n.value=c}catch(f){console.error(f),a[u?"replace":"assign"](p)}}function o(l,c){r(l,Oe({},e.state,Ko(n.value.back,l,n.value.forward,!0),c,{position:n.value.position}),!0),s.value=l}function i(l,c){const u=Oe({},n.value,e.state,{forward:l,scroll:kn()});r(u.current,u,!0),r(l,Oe({},Ko(s.value,l,null),{position:u.position+1},c),!1),s.value=l}return{location:s,state:n,push:i,replace:o}}function ef(t){t=Np(t);const e=Zp(t),a=Qp(t,e.state,e.location,e.replace);function s(r,o=!0){o||a.pauseListeners(),history.go(r)}const n=Oe({location:"",base:t,go:s,createHref:Fp.bind(null,t)},e,a);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>e.state.value}),n}function tf(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),ef(t)}let Sa=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ye=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ye||{});const af={type:Sa.Static,value:""},sf=/[a-zA-Z0-9_]/;function nf(t){if(!t)return[[]];if(t==="/")return[[af]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${a})/"${c}": ${f}`)}let a=Ye.Static,s=a;const n=[];let r;function o(){r&&n.push(r),r=[]}let i=0,l,c="",u="";function d(){c&&(a===Ye.Static?r.push({type:Sa.Static,value:c}):a===Ye.Param||a===Ye.ParamRegExp||a===Ye.ParamRegExpEnd?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:Sa.Param,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function p(){c+=l}for(;i<t.length;){if(l=t[i++],l==="\\"&&a!==Ye.ParamRegExp){s=a,a=Ye.EscapeNext;continue}switch(a){case Ye.Static:l==="/"?(c&&d(),o()):l===":"?(d(),a=Ye.Param):p();break;case Ye.EscapeNext:p(),a=s;break;case Ye.Param:l==="("?a=Ye.ParamRegExp:sf.test(l)?p():(d(),a=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--);break;case Ye.ParamRegExp:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:a=Ye.ParamRegExpEnd:u+=l;break;case Ye.ParamRegExpEnd:d(),a=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&i--,u="";break;default:e("Unknown state");break}}return a===Ye.ParamRegExp&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),n}const Wo="[^/]+?",rf={sensitive:!1,strict:!1,start:!0,end:!0};var nt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(nt||{});const of=/[.+*?^${}()[\]/\\]/g;function lf(t,e){const a=Oe({},rf,e),s=[];let n=a.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[nt.Root];a.strict&&!c.length&&(n+="/");for(let d=0;d<c.length;d++){const p=c[d];let f=nt.Segment+(a.sensitive?nt.BonusCaseSensitive:0);if(p.type===Sa.Static)d||(n+="/"),n+=p.value.replace(of,"\\$&"),f+=nt.Static;else if(p.type===Sa.Param){const{value:g,repeatable:m,optional:v,regexp:h}=p;r.push({name:g,repeatable:m,optional:v});const _=h||Wo;if(_!==Wo){f+=nt.BonusCustomRegExp;try{`${_}`}catch(E){throw new Error(`Invalid custom RegExp for param "${g}" (${_}): `+E.message)}}let w=m?`((?:${_})(?:/(?:${_}))*)`:`(${_})`;d||(w=v&&c.length<2?`(?:/${w})`:"/"+w),v&&(w+="?"),n+=w,f+=nt.Dynamic,v&&(f+=nt.BonusOptional),m&&(f+=nt.BonusRepeatable),_===".*"&&(f+=nt.BonusWildcard)}u.push(f)}s.push(u)}if(a.strict&&a.end){const c=s.length-1;s[c][s[c].length-1]+=nt.BonusStrict}a.strict||(n+="/?"),a.end?n+="$":a.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const o=new RegExp(n,a.sensitive?"":"i");function i(c){const u=c.match(o),d={};if(!u)return null;for(let p=1;p<u.length;p++){const f=u[p]||"",g=r[p-1];d[g.name]=f&&g.repeatable?f.split("/"):f}return d}function l(c){let u="",d=!1;for(const p of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const f of p)if(f.type===Sa.Static)u+=f.value;else if(f.type===Sa.Param){const{value:g,repeatable:m,optional:v}=f,h=g in c?c[g]:"";if(St(h)&&!m)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const _=St(h)?h.join("/"):h;if(!_)if(v)p.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${g}"`);u+=_}}return u||"/"}return{re:o,score:s,keys:r,parse:i,stringify:l}}function cf(t,e){let a=0;for(;a<t.length&&a<e.length;){const s=e[a]-t[a];if(s)return s;a++}return t.length<e.length?t.length===1&&t[0]===nt.Static+nt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===nt.Static+nt.Segment?1:-1:0}function ec(t,e){let a=0;const s=t.score,n=e.score;for(;a<s.length&&a<n.length;){const r=cf(s[a],n[a]);if(r)return r;a++}if(Math.abs(n.length-s.length)===1){if(Jo(s))return 1;if(Jo(n))return-1}return n.length-s.length}function Jo(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const df={strict:!1,end:!0,sensitive:!1};function uf(t,e,a){const s=lf(nf(t.path),a),n=Oe(s,{record:t,parent:e,children:[],alias:[]});return e&&!n.record.aliasOf==!e.record.aliasOf&&e.children.push(n),n}function pf(t,e){const a=[],s=new Map;e=Uo(df,e);function n(d){return s.get(d)}function r(d,p,f){const g=!f,m=Qo(d);m.aliasOf=f&&f.record;const v=Uo(e,d),h=[m];if("alias"in d){const E=typeof d.alias=="string"?[d.alias]:d.alias;for(const I of E)h.push(Qo(Oe({},m,{components:f?f.record.components:m.components,path:I,aliasOf:f?f.record:m})))}let _,w;for(const E of h){const{path:I}=E;if(p&&I[0]!=="/"){const R=p.record.path,C=R[R.length-1]==="/"?"":"/";E.path=p.record.path+(I&&C+I)}if(_=uf(E,p,v),f?f.alias.push(_):(w=w||_,w!==_&&w.alias.push(_),g&&d.name&&!Zo(_)&&o(d.name)),tc(_)&&l(_),m.children){const R=m.children;for(let C=0;C<R.length;C++)r(R[C],_,f&&f.children[C])}f=f||_}return w?()=>{o(w)}:os}function o(d){if(Xl(d)){const p=s.get(d);p&&(s.delete(d),a.splice(a.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=a.indexOf(d);p>-1&&(a.splice(p,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function i(){return a}function l(d){const p=mf(d,a);a.splice(p,0,d),d.record.name&&!Zo(d)&&s.set(d.record.name,d)}function c(d,p){let f,g={},m,v;if("name"in d&&d.name){if(f=s.get(d.name),!f)throw Ua(He.MATCHER_NOT_FOUND,{location:d});v=f.record.name,g=Oe(Xo(p.params,f.keys.filter(w=>!w.optional).concat(f.parent?f.parent.keys.filter(w=>w.optional):[]).map(w=>w.name)),d.params&&Xo(d.params,f.keys.map(w=>w.name))),m=f.stringify(g)}else if(d.path!=null)m=d.path,f=a.find(w=>w.re.test(m)),f&&(g=f.parse(m),v=f.record.name);else{if(f=p.name?s.get(p.name):a.find(w=>w.re.test(p.path)),!f)throw Ua(He.MATCHER_NOT_FOUND,{location:d,currentLocation:p});v=f.record.name,g=Oe({},p.params,d.params),m=f.stringify(g)}const h=[];let _=f;for(;_;)h.unshift(_.record),_=_.parent;return{name:v,path:m,params:g,matched:h,meta:hf(h)}}t.forEach(d=>r(d));function u(){a.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:i,getRecordMatcher:n}}function Xo(t,e){const a={};for(const s of e)s in t&&(a[s]=t[s]);return a}function Qo(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:ff(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function ff(t){const e={},a=t.props||!1;if("component"in t)e.default=a;else for(const s in t.components)e[s]=typeof a=="object"?a[s]:a;return e}function Zo(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function hf(t){return t.reduce((e,a)=>Oe(e,a.meta),{})}function mf(t,e){let a=0,s=e.length;for(;a!==s;){const r=a+s>>1;ec(t,e[r])<0?s=r:a=r+1}const n=gf(t);return n&&(s=e.lastIndexOf(n,s-1)),s}function gf(t){let e=t;for(;e=e.parent;)if(tc(e)&&ec(t,e)===0)return e}function tc({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ei(t){const e=wt(Sn),a=wt(Kr),s=_e(()=>{const l=ot(t.to);return e.resolve(l)}),n=_e(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=a.matched;if(!u||!d.length)return-1;const p=d.findIndex(Ha.bind(null,u));if(p>-1)return p;const f=ti(l[c-2]);return c>1&&ti(u)===f&&d[d.length-1].path!==f?d.findIndex(Ha.bind(null,l[c-2])):p}),r=_e(()=>n.value>-1&&wf(a.params,s.value.params)),o=_e(()=>n.value>-1&&n.value===a.matched.length-1&&Jl(a.params,s.value.params));function i(l={}){if(yf(l)){const c=e[ot(t.replace)?"replace":"push"](ot(t.to)).catch(os);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:_e(()=>s.value.href),isActive:r,isExactActive:o,navigate:i}}function bf(t){return t.length===1?t[0]:t}const _f=ll({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ei,setup(t,{slots:e}){const a=Mt(ei(t)),{options:s}=wt(Sn),n=_e(()=>({[ai(t.activeClass,s.linkActiveClass,"router-link-active")]:a.isActive,[ai(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:a.isExactActive}));return()=>{const r=e.default&&bf(e.default(a));return t.custom?r:Vr("a",{"aria-current":a.isExactActive?t.ariaCurrentValue:null,href:a.href,onClick:a.navigate,class:n.value},r)}}}),vf=_f;function yf(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function wf(t,e){for(const a in e){const s=e[a],n=t[a];if(typeof s=="string"){if(s!==n)return!1}else if(!St(n)||n.length!==s.length||s.some((r,o)=>r!==n[o]))return!1}return!0}function ti(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ai=(t,e,a)=>t??e??a,xf=ll({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:a}){const s=wt(yr),n=_e(()=>t.route||s.value),r=wt(Yo,0),o=_e(()=>{let c=ot(r);const{matched:u}=n.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),i=_e(()=>n.value.matched[o.value]);Ns(Yo,_e(()=>o.value+1)),Ns(Wp,i),Ns(yr,n);const l=Pe();return Fa(()=>[l.value,i.value,t.name],([c,u,d],[p,f,g])=>{u&&(u.instances[d]=c,f&&f!==u&&c&&c===p&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!Ha(u,f)||!p)&&(u.enterCallbacks[d]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=n.value,u=t.name,d=i.value,p=d&&d.components[u];if(!p)return si(a.default,{Component:p,route:c});const f=d.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=Vr(p,Oe({},g,e,{onVnodeUnmounted:h=>{h.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return si(a.default,{Component:v,route:c})||v}}});function si(t,e){if(!t)return null;const a=t(e);return a.length===1?a[0]:a}const ac=xf;function Tf(t){const e=pf(t.routes,t),a=t.parseQuery||Yp,s=t.stringifyQuery||Vo,n=t.history,r=Ka(),o=Ka(),i=Ka(),l=dd(aa);let c=aa;Ia&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=zn.bind(null,U=>""+U),d=zn.bind(null,Op),p=zn.bind(null,gs);function f(U,te){let X,oe;return Xl(U)?(X=e.getRecordMatcher(U),oe=te):oe=U,e.addRoute(oe,X)}function g(U){const te=e.getRecordMatcher(U);te&&e.removeRoute(te)}function m(){return e.getRoutes().map(U=>U.record)}function v(U){return!!e.getRecordMatcher(U)}function h(U,te){if(te=Oe({},te||l.value),typeof U=="string"){const y=Hn(a,U,te.path),T=e.resolve({path:y.path},te),B=n.createHref(y.fullPath);return Oe(y,T,{params:p(T.params),hash:gs(y.hash),redirectedFrom:void 0,href:B})}let X;if(U.path!=null)X=Oe({},U,{path:Hn(a,U.path,te.path).path});else{const y=Oe({},U.params);for(const T in y)y[T]==null&&delete y[T];X=Oe({},U,{params:d(y)}),te.params=d(te.params)}const oe=e.resolve(X,te),ie=U.hash||"";oe.params=u(p(oe.params));const x=Dp(s,Oe({},U,{hash:Ap(ie),path:oe.path})),O=n.createHref(x);return Oe({fullPath:x,hash:ie,query:s===Vo?Kp(U.query):U.query||{}},oe,{redirectedFrom:void 0,href:O})}function _(U){return typeof U=="string"?Hn(a,U,l.value.path):Oe({},U)}function w(U,te){if(c!==U)return Ua(He.NAVIGATION_CANCELLED,{from:te,to:U})}function E(U){return C(U)}function I(U){return E(Oe(_(U),{replace:!0}))}function R(U,te){const X=U.matched[U.matched.length-1];if(X&&X.redirect){const{redirect:oe}=X;let ie=typeof oe=="function"?oe(U,te):oe;return typeof ie=="string"&&(ie=ie.includes("?")||ie.includes("#")?ie=_(ie):{path:ie},ie.params={}),Oe({query:U.query,hash:U.hash,params:ie.path!=null?{}:U.params},ie)}}function C(U,te){const X=c=h(U),oe=l.value,ie=U.state,x=U.force,O=U.replace===!0,y=R(X,oe);if(y)return C(Oe(_(y),{state:typeof y=="object"?Oe({},ie,y.state):ie,force:x,replace:O}),te||X);const T=X;T.redirectedFrom=te;let B;return!x&&Rp(s,oe,X)&&(B=Ua(He.NAVIGATION_DUPLICATED,{to:T,from:oe}),re(oe,oe,!0,!1)),(B?Promise.resolve(B):G(T,oe)).catch(N=>Ht(N)?Ht(N,He.NAVIGATION_GUARD_REDIRECT)?N:Q(N):L(N,T,oe)).then(N=>{if(N){if(Ht(N,He.NAVIGATION_GUARD_REDIRECT))return C(Oe({replace:O},_(N.to),{state:typeof N.to=="object"?Oe({},ie,N.to.state):ie,force:x}),te||T)}else N=F(T,oe,!0,O,ie);return j(T,oe,N),N})}function H(U,te){const X=w(U,te);return X?Promise.reject(X):Promise.resolve()}function $(U){const te=ae.values().next().value;return te&&typeof te.runWithContext=="function"?te.runWithContext(U):U()}function G(U,te){let X;const[oe,ie,x]=Jp(U,te);X=Gn(oe.reverse(),"beforeRouteLeave",U,te);for(const y of oe)y.leaveGuards.forEach(T=>{X.push(oa(T,U,te))});const O=H.bind(null,U,te);return X.push(O),ne(X).then(()=>{X=[];for(const y of r.list())X.push(oa(y,U,te));return X.push(O),ne(X)}).then(()=>{X=Gn(ie,"beforeRouteUpdate",U,te);for(const y of ie)y.updateGuards.forEach(T=>{X.push(oa(T,U,te))});return X.push(O),ne(X)}).then(()=>{X=[];for(const y of x)if(y.beforeEnter)if(St(y.beforeEnter))for(const T of y.beforeEnter)X.push(oa(T,U,te));else X.push(oa(y.beforeEnter,U,te));return X.push(O),ne(X)}).then(()=>(U.matched.forEach(y=>y.enterCallbacks={}),X=Gn(x,"beforeRouteEnter",U,te,$),X.push(O),ne(X))).then(()=>{X=[];for(const y of o.list())X.push(oa(y,U,te));return X.push(O),ne(X)}).catch(y=>Ht(y,He.NAVIGATION_CANCELLED)?y:Promise.reject(y))}function j(U,te,X){i.list().forEach(oe=>$(()=>oe(U,te,X)))}function F(U,te,X,oe,ie){const x=w(U,te);if(x)return x;const O=te===aa,y=Ia?history.state:{};X&&(oe||O?n.replace(U.fullPath,Oe({scroll:O&&y&&y.scroll},ie)):n.push(U.fullPath,ie)),l.value=U,re(U,te,X,O),Q()}let q;function P(){q||(q=n.listen((U,te,X)=>{if(!ee.listening)return;const oe=h(U),ie=R(oe,ee.currentRoute.value);if(ie){C(Oe(ie,{replace:!0,force:!0}),oe).catch(os);return}c=oe;const x=l.value;Ia&&Up(qo(x.fullPath,X.delta),kn()),G(oe,x).catch(O=>Ht(O,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?O:Ht(O,He.NAVIGATION_GUARD_REDIRECT)?(C(Oe(_(O.to),{force:!0}),oe).then(y=>{Ht(y,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!X.delta&&X.type===_r.pop&&n.go(-1,!1)}).catch(os),Promise.reject()):(X.delta&&n.go(-X.delta,!1),L(O,oe,x))).then(O=>{O=O||F(oe,x,!1),O&&(X.delta&&!Ht(O,He.NAVIGATION_CANCELLED)?n.go(-X.delta,!1):X.type===_r.pop&&Ht(O,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),j(oe,x,O)}).catch(os)}))}let A=Ka(),S=Ka(),D;function L(U,te,X){Q(U);const oe=S.list();return oe.length?oe.forEach(ie=>ie(U,te,X)):console.error(U),Promise.reject(U)}function Y(){return D&&l.value!==aa?Promise.resolve():new Promise((U,te)=>{A.add([U,te])})}function Q(U){return D||(D=!U,P(),A.list().forEach(([te,X])=>U?X(U):te()),A.reset()),U}function re(U,te,X,oe){const{scrollBehavior:ie}=t;if(!Ia||!ie)return Promise.resolve();const x=!X&&Gp(qo(U.fullPath,0))||(oe||!X)&&history.state&&history.state.scroll||null;return zr().then(()=>ie(U,te,x)).then(O=>O&&Hp(O)).catch(O=>L(O,U,te))}const Z=U=>n.go(U);let V;const ae=new Set,ee={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:v,getRoutes:m,resolve:h,options:t,push:E,replace:I,go:Z,back:()=>Z(-1),forward:()=>Z(1),beforeEach:r.add,beforeResolve:o.add,afterEach:i.add,onError:S.add,isReady:Y,install(U){U.component("RouterLink",vf),U.component("RouterView",ac),U.config.globalProperties.$router=ee,Object.defineProperty(U.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(l)}),Ia&&!V&&l.value===aa&&(V=!0,E(n.location).catch(oe=>{}));const te={};for(const oe in aa)Object.defineProperty(te,oe,{get:()=>l.value[oe],enumerable:!0});U.provide(Sn,ee),U.provide(Kr,Ki(te)),U.provide(yr,l);const X=U.unmount;ae.add(U),U.unmount=function(){ae.delete(U),ae.size<1&&(c=aa,q&&q(),q=null,l.value=aa,V=!1,D=!1),X()}}};function ne(U){return U.reduce((te,X)=>te.then(()=>$(X)),Promise.resolve())}return ee}function ct(){return wt(Sn)}function xs(t){return wt(Kr)}var kf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Sf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xa={exports:{}},Ef=Xa.exports,ni;function Af(){return ni||(ni=1,(function(t,e){(function(a,s){var n={};a.PubSub?(n=a.PubSub,console.warn("PubSub already loaded, using existing version")):(a.PubSub=n,s(n)),t!==void 0&&t.exports&&(e=t.exports=n),e.PubSub=n,t.exports=e=n})(typeof window=="object"&&window||Ef||kf,function(a){var s={},n=-1,r="*";function o(m){var v;for(v in m)if(Object.prototype.hasOwnProperty.call(m,v))return!0;return!1}function i(m){return function(){throw m}}function l(m,v,h){try{m(v,h)}catch(_){setTimeout(i(_),0)}}function c(m,v,h){m(v,h)}function u(m,v,h,_){var w=s[v],E=_?c:l,I;if(Object.prototype.hasOwnProperty.call(s,v))for(I in w)Object.prototype.hasOwnProperty.call(w,I)&&E(w[I],m,h)}function d(m,v,h){return function(){var w=String(m),E=w.lastIndexOf(".");for(u(m,m,v,h);E!==-1;)w=w.substr(0,E),E=w.lastIndexOf("."),u(m,w,v,h);u(m,r,v,h)}}function p(m){var v=String(m),h=!!(Object.prototype.hasOwnProperty.call(s,v)&&o(s[v]));return h}function f(m){for(var v=String(m),h=p(v)||p(r),_=v.lastIndexOf(".");!h&&_!==-1;)v=v.substr(0,_),_=v.lastIndexOf("."),h=p(v);return h}function g(m,v,h,_){m=typeof m=="symbol"?m.toString():m;var w=d(m,v,_),E=f(m);return E?(h===!0?w():setTimeout(w,0),!0):!1}a.publish=function(m,v){return g(m,v,!1,a.immediateExceptions)},a.publishSync=function(m,v){return g(m,v,!0,a.immediateExceptions)},a.subscribe=function(m,v){if(typeof v!="function")return!1;m=typeof m=="symbol"?m.toString():m,Object.prototype.hasOwnProperty.call(s,m)||(s[m]={});var h="uid_"+String(++n);return s[m][h]=v,h},a.subscribeAll=function(m){return a.subscribe(r,m)},a.subscribeOnce=function(m,v){var h=a.subscribe(m,function(){a.unsubscribe(h),v.apply(this,arguments)});return a},a.clearAllSubscriptions=function(){s={}},a.clearSubscriptions=function(v){var h;for(h in s)Object.prototype.hasOwnProperty.call(s,h)&&h.indexOf(v)===0&&delete s[h]},a.countSubscriptions=function(v){var h,_,w=0;for(h in s)if(Object.prototype.hasOwnProperty.call(s,h)&&h.indexOf(v)===0){for(_ in s[h])w++;break}return w},a.getSubscriptions=function(v){var h,_=[];for(h in s)Object.prototype.hasOwnProperty.call(s,h)&&h.indexOf(v)===0&&_.push(h);return _},a.unsubscribe=function(m){var v=function(H){var $;for($ in s)if(Object.prototype.hasOwnProperty.call(s,$)&&$.indexOf(H)===0)return!0;return!1},h=typeof m=="string"&&(Object.prototype.hasOwnProperty.call(s,m)||v(m)),_=!h&&typeof m=="string",w=typeof m=="function",E=!1,I,R,C;if(h){a.clearSubscriptions(m);return}for(I in s)if(Object.prototype.hasOwnProperty.call(s,I)){if(R=s[I],_&&R[m]){delete R[m],E=m;break}if(w)for(C in R)Object.prototype.hasOwnProperty.call(R,C)&&R[C]===m&&(delete R[C],E=!0)}return E}})})(Xa,Xa.exports)),Xa.exports}var Cf=Af();const de=Sf(Cf);let Ge=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!0,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!0,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!0,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!0,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!0,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Pf={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function fa(t){return new Promise((e,a)=>{t.oncomplete=t.onsuccess=()=>e(t.result),t.onabort=t.onerror=()=>a(t.error)})}function Of(t,e){let a;const s=()=>{if(a)return a;const n=indexedDB.open(t);return n.onupgradeneeded=()=>n.result.createObjectStore(e),a=fa(n),a.then(r=>{r.onclose=()=>a=void 0},()=>{}),a};return(n,r)=>s().then(o=>r(o.transaction(e,n).objectStore(e)))}let jn;function Ts(){return jn||(jn=Of("keyval-store","keyval")),jn}function Lf(t,e=Ts()){return e("readonly",a=>fa(a.get(t)))}function ri(t,e,a=Ts()){return a("readwrite",s=>(s.put(e,t),fa(s.transaction)))}function qn(t,e=Ts()){return e("readwrite",a=>(a.delete(t),fa(a.transaction)))}function sc(t,e){return t.openCursor().onsuccess=function(){this.result&&(e(this.result),this.result.continue())},fa(t.transaction)}function La(t=Ts()){return t("readonly",e=>{if(e.getAllKeys)return fa(e.getAllKeys());const a=[];return sc(e,s=>a.push(s.key)).then(()=>a)})}function Mf(t=Ts()){return t("readonly",e=>{if(e.getAll&&e.getAllKeys)return Promise.all([fa(e.getAllKeys()),fa(e.getAll())]).then(([s,n])=>s.map((r,o)=>[r,n[o]]));const a=[];return t("readonly",s=>sc(s,n=>a.push([n.key,n.value])).then(()=>a))})}const Ga=t=>t!==null&&Object.prototype.toString.call(t)==="[object Object]",an=(t,e)=>{if(t===e)return!0;if(typeof t!=typeof e)return!1;if(Array.isArray(t)&&Array.isArray(e)){if(t.length!==e.length)return!1;for(let a=0;a<t.length;a+=1)if(!an(t[a],e[a]))return!1;return!0}if(Ga(t)&&Ga(e)){const a=Object.entries(t),s=new Set(Object.keys(e));if(a.length!==s.size)return!1;for(const[n,r]of a){if(!an(r,e[n]))return!1;s.delete(n)}return s.size===0}return!1},Ps=t=>{if(t===""||t===!1||t===null||t===void 0||Array.isArray(t)&&t.length===0)return!0;if(Ga(t)){for(const e in t)if(t.hasOwnProperty(e))return!1;return!0}return!1},Df=t=>t>="a"&&t<="z"||t>="A"&&t<="Z"||t==="_",oi=t=>t>="0"&&t<="9"||t==="-",Rf=t=>t>="a"&&t<="z"||t>="A"&&t<="Z"||t>="0"&&t<="9"||t==="_";var J;(function(t){t.TOK_EOF="EOF",t.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",t.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",t.TOK_RBRACKET="Rbracket",t.TOK_RPAREN="Rparen",t.TOK_COMMA="Comma",t.TOK_COLON="Colon",t.TOK_RBRACE="Rbrace",t.TOK_NUMBER="Number",t.TOK_CURRENT="Current",t.TOK_ROOT="Root",t.TOK_EXPREF="Expref",t.TOK_PIPE="Pipe",t.TOK_OR="Or",t.TOK_AND="And",t.TOK_EQ="EQ",t.TOK_GT="GT",t.TOK_LT="LT",t.TOK_GTE="GTE",t.TOK_LTE="LTE",t.TOK_NE="NE",t.TOK_FLATTEN="Flatten",t.TOK_STAR="Star",t.TOK_FILTER="Filter",t.TOK_DOT="Dot",t.TOK_NOT="Not",t.TOK_LBRACE="Lbrace",t.TOK_LBRACKET="Lbracket",t.TOK_LPAREN="Lparen",t.TOK_LITERAL="Literal"})(J||(J={}));const ii={"(":J.TOK_LPAREN,")":J.TOK_RPAREN,"*":J.TOK_STAR,",":J.TOK_COMMA,".":J.TOK_DOT,":":J.TOK_COLON,"@":J.TOK_CURRENT,$:J.TOK_ROOT,"]":J.TOK_RBRACKET,"{":J.TOK_LBRACE,"}":J.TOK_RBRACE},If={"!":!0,"<":!0,"=":!0,">":!0},$f={"	":!0,"\n":!0,"\r":!0," ":!0};class Nf{constructor(){this._current=0}tokenize(e){const a=[];this._current=0;let s,n,r;for(;this._current<e.length;)if(Df(e[this._current]))s=this._current,n=this.consumeUnquotedIdentifier(e),a.push({start:s,type:J.TOK_UNQUOTEDIDENTIFIER,value:n});else if(ii[e[this._current]]!==void 0)a.push({start:this._current,type:ii[e[this._current]],value:e[this._current]}),this._current+=1;else if(oi(e[this._current]))r=this.consumeNumber(e),a.push(r);else if(e[this._current]==="[")r=this.consumeLBracket(e),a.push(r);else if(e[this._current]==='"')s=this._current,n=this.consumeQuotedIdentifier(e),a.push({start:s,type:J.TOK_QUOTEDIDENTIFIER,value:n});else if(e[this._current]==="'")s=this._current,n=this.consumeRawStringLiteral(e),a.push({start:s,type:J.TOK_LITERAL,value:n});else if(e[this._current]==="`"){s=this._current;const o=this.consumeLiteral(e);a.push({start:s,type:J.TOK_LITERAL,value:o})}else if(If[e[this._current]]!==void 0)r=this.consumeOperator(e),r&&a.push(r);else if($f[e[this._current]]!==void 0)this._current+=1;else if(e[this._current]==="&")s=this._current,this._current+=1,e[this._current]==="&"?(this._current+=1,a.push({start:s,type:J.TOK_AND,value:"&&"})):a.push({start:s,type:J.TOK_EXPREF,value:"&"});else if(e[this._current]==="|")s=this._current,this._current+=1,e[this._current]==="|"?(this._current+=1,a.push({start:s,type:J.TOK_OR,value:"||"})):a.push({start:s,type:J.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${e[this._current]}`);throw o.name="LexerError",o}return a}consumeUnquotedIdentifier(e){const a=this._current;for(this._current+=1;this._current<e.length&&Rf(e[this._current]);)this._current+=1;return e.slice(a,this._current)}consumeQuotedIdentifier(e){const a=this._current;this._current+=1;const s=e.length;for(;e[this._current]!=='"'&&this._current<s;){let n=this._current;e[n]==="\\"&&(e[n+1]==="\\"||e[n+1]==='"')?n+=2:n+=1,this._current=n}return this._current+=1,JSON.parse(e.slice(a,this._current))}consumeRawStringLiteral(e){const a=this._current;this._current+=1;const s=e.length;for(;e[this._current]!=="'"&&this._current<s;){let r=this._current;e[r]==="\\"&&(e[r+1]==="\\"||e[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,e.slice(a+1,this._current-1).replace("\\'","'")}consumeNumber(e){const a=this._current;this._current+=1;const s=e.length;for(;oi(e[this._current])&&this._current<s;)this._current+=1;const n=parseInt(e.slice(a,this._current),10);return{start:a,value:n,type:J.TOK_NUMBER}}consumeLBracket(e){const a=this._current;return this._current+=1,e[this._current]==="?"?(this._current+=1,{start:a,type:J.TOK_FILTER,value:"[?"}):e[this._current]==="]"?(this._current+=1,{start:a,type:J.TOK_FLATTEN,value:"[]"}):{start:a,type:J.TOK_LBRACKET,value:"["}}consumeOperator(e){const a=this._current,s=e[a];if(this._current+=1,s==="!")return e[this._current]==="="?(this._current+=1,{start:a,type:J.TOK_NE,value:"!="}):{start:a,type:J.TOK_NOT,value:"!"};if(s==="<")return e[this._current]==="="?(this._current+=1,{start:a,type:J.TOK_LTE,value:"<="}):{start:a,type:J.TOK_LT,value:"<"};if(s===">")return e[this._current]==="="?(this._current+=1,{start:a,type:J.TOK_GTE,value:">="}):{start:a,type:J.TOK_GT,value:">"};if(s==="="&&e[this._current]==="=")return this._current+=1,{start:a,type:J.TOK_EQ,value:"=="}}consumeLiteral(e){this._current+=1;const a=this._current,s=e.length;for(;e[this._current]!=="`"&&this._current<s;){let o=this._current;e[o]==="\\"&&(e[o+1]==="\\"||e[o+1]==="`")?o+=2:o+=1,this._current=o}let n=e.slice(a,this._current).trimLeft();n=n.replace("\\`","`");const r=this.looksLikeJSON(n)?JSON.parse(n):JSON.parse(`"${n}"`);return this._current+=1,r}looksLikeJSON(e){const s=["true","false","null"],n="-0123456789";if(e==="")return!1;if('[{"'.includes(e[0])||s.includes(e))return!0;if(n.includes(e[0]))try{return JSON.parse(e),!0}catch{return!1}return!1}}const nc=new Nf,Xe={[J.TOK_EOF]:0,[J.TOK_UNQUOTEDIDENTIFIER]:0,[J.TOK_QUOTEDIDENTIFIER]:0,[J.TOK_RBRACKET]:0,[J.TOK_RPAREN]:0,[J.TOK_COMMA]:0,[J.TOK_RBRACE]:0,[J.TOK_NUMBER]:0,[J.TOK_CURRENT]:0,[J.TOK_EXPREF]:0,[J.TOK_ROOT]:0,[J.TOK_PIPE]:1,[J.TOK_OR]:2,[J.TOK_AND]:3,[J.TOK_EQ]:5,[J.TOK_GT]:5,[J.TOK_LT]:5,[J.TOK_GTE]:5,[J.TOK_LTE]:5,[J.TOK_NE]:5,[J.TOK_FLATTEN]:9,[J.TOK_STAR]:20,[J.TOK_FILTER]:21,[J.TOK_DOT]:40,[J.TOK_NOT]:45,[J.TOK_LBRACE]:50,[J.TOK_LBRACKET]:55,[J.TOK_LPAREN]:60};class Bf{constructor(){this.index=0,this.tokens=[]}parse(e){this.loadTokens(e),this.index=0;const a=this.expression(0);if(this.lookahead(0)!==J.TOK_EOF){const s=this.lookaheadToken(0);this.errorToken(s,`Unexpected token type: ${s.type}, value: ${s.value}`)}return a}loadTokens(e){this.tokens=[...nc.tokenize(e),{type:J.TOK_EOF,value:"",start:e.length}]}expression(e){const a=this.lookaheadToken(0);this.advance();let s=this.nud(a),n=this.lookahead(0);for(;e<Xe[n];)this.advance(),s=this.led(n,s),n=this.lookahead(0);return s}lookahead(e){return this.tokens[this.index+e].type}lookaheadToken(e){return this.tokens[this.index+e]}advance(){this.index+=1}nud(e){let a,s,n;switch(e.type){case J.TOK_LITERAL:return{type:"Literal",value:e.value};case J.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:e.value};case J.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:e.value};if(this.lookahead(0)===J.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case J.TOK_NOT:return s=this.expression(Xe.Not),{type:"NotExpression",children:[s]};case J.TOK_STAR:return a={type:"Identity"},s=this.lookahead(0)===J.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Xe.Star),{type:"ValueProjection",children:[a,s]};case J.TOK_FILTER:return this.led(e.type,{type:"Identity"});case J.TOK_LBRACE:return this.parseMultiselectHash();case J.TOK_FLATTEN:return a={type:J.TOK_FLATTEN,children:[{type:"Identity"}]},s=this.parseProjectionRHS(Xe.Flatten),{type:"Projection",children:[a,s]};case J.TOK_LBRACKET:return this.lookahead(0)===J.TOK_NUMBER||this.lookahead(0)===J.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},s)):this.lookahead(0)===J.TOK_STAR&&this.lookahead(1)===J.TOK_RBRACKET?(this.advance(),this.advance(),s=this.parseProjectionRHS(Xe.Star),{children:[{type:"Identity"},s],type:"Projection"}):this.parseMultiselectList();case J.TOK_CURRENT:return{type:J.TOK_CURRENT};case J.TOK_ROOT:return{type:J.TOK_ROOT};case J.TOK_EXPREF:return n=this.expression(Xe.Expref),{type:"ExpressionReference",children:[n]};case J.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==J.TOK_RPAREN;)this.lookahead(0)===J.TOK_CURRENT?(n={type:J.TOK_CURRENT},this.advance()):n=this.expression(0),o.push(n);return this.match(J.TOK_RPAREN),o[0];default:this.errorToken(e)}}led(e,a){let s;switch(e){case J.TOK_DOT:const n=Xe.Dot;return this.lookahead(0)!==J.TOK_STAR?(s=this.parseDotRHS(n),{type:"Subexpression",children:[a,s]}):(this.advance(),s=this.parseProjectionRHS(n),{type:"ValueProjection",children:[a,s]});case J.TOK_PIPE:return s=this.expression(Xe.Pipe),{type:J.TOK_PIPE,children:[a,s]};case J.TOK_OR:return s=this.expression(Xe.Or),{type:"OrExpression",children:[a,s]};case J.TOK_AND:return s=this.expression(Xe.And),{type:"AndExpression",children:[a,s]};case J.TOK_LPAREN:const r=a.name,o=[];let i;for(;this.lookahead(0)!==J.TOK_RPAREN;)this.lookahead(0)===J.TOK_CURRENT?(i={type:J.TOK_CURRENT},this.advance()):i=this.expression(0),this.lookahead(0)===J.TOK_COMMA&&this.match(J.TOK_COMMA),o.push(i);return this.match(J.TOK_RPAREN),{name:r,type:"Function",children:o};case J.TOK_FILTER:const c=this.expression(0);return this.match(J.TOK_RBRACKET),s=this.lookahead(0)===J.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Xe.Filter),{type:"FilterProjection",children:[a,s,c]};case J.TOK_FLATTEN:const u={type:J.TOK_FLATTEN,children:[a]},d=this.parseProjectionRHS(Xe.Flatten);return{type:"Projection",children:[u,d]};case J.TOK_EQ:case J.TOK_NE:case J.TOK_GT:case J.TOK_GTE:case J.TOK_LT:case J.TOK_LTE:return this.parseComparator(a,e);case J.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===J.TOK_NUMBER||p.type===J.TOK_COLON?(s=this.parseIndexExpression(),this.projectIfSlice(a,s)):(this.match(J.TOK_STAR),this.match(J.TOK_RBRACKET),s=this.parseProjectionRHS(Xe.Star),{type:"Projection",children:[a,s]});default:return this.errorToken(this.lookaheadToken(0))}}match(e){if(this.lookahead(0)===e){this.advance();return}else{const a=this.lookaheadToken(0);this.errorToken(a,`Expected ${e}, got: ${a.type}`)}}errorToken(e,a=""){const s=new Error(a||`Invalid token (${e.type}): "${e.value}"`);throw s.name="ParserError",s}parseIndexExpression(){if(this.lookahead(0)===J.TOK_COLON||this.lookahead(1)===J.TOK_COLON)return this.parseSliceExpression();const e={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(J.TOK_RBRACKET),e}projectIfSlice(e,a){const s={type:"IndexExpression",children:[e,a]};return a.type==="Slice"?{children:[s,this.parseProjectionRHS(Xe.Star)],type:"Projection"}:s}parseSliceExpression(){const e=[null,null,null];let a=0,s=this.lookahead(0);for(;s!==J.TOK_RBRACKET&&a<3;){if(s===J.TOK_COLON)a+=1,this.advance();else if(s===J.TOK_NUMBER)e[a]=this.lookaheadToken(0).value,this.advance();else{const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}s=this.lookahead(0)}return this.match(J.TOK_RBRACKET),{children:e,type:"Slice"}}parseComparator(e,a){const s=this.expression(Xe[a]);return{type:"Comparator",name:a,children:[e,s]}}parseDotRHS(e){const a=this.lookahead(0);if([J.TOK_UNQUOTEDIDENTIFIER,J.TOK_QUOTEDIDENTIFIER,J.TOK_STAR].includes(a))return this.expression(e);if(a===J.TOK_LBRACKET)return this.match(J.TOK_LBRACKET),this.parseMultiselectList();if(a===J.TOK_LBRACE)return this.match(J.TOK_LBRACE),this.parseMultiselectHash();const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseProjectionRHS(e){if(Xe[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===J.TOK_LBRACKET)return this.expression(e);if(this.lookahead(0)===J.TOK_FILTER)return this.expression(e);if(this.lookahead(0)===J.TOK_DOT)return this.match(J.TOK_DOT),this.parseDotRHS(e);const a=this.lookaheadToken(0);this.errorToken(a,`Syntax error, unexpected token: ${a.value}(${a.type})`)}parseMultiselectList(){const e=[];for(;this.lookahead(0)!==J.TOK_RBRACKET;){const a=this.expression(0);if(e.push(a),this.lookahead(0)===J.TOK_COMMA&&(this.match(J.TOK_COMMA),this.lookahead(0)===J.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(J.TOK_RBRACKET),{type:"MultiSelectList",children:e}}parseMultiselectHash(){const e=[],a=[J.TOK_UNQUOTEDIDENTIFIER,J.TOK_QUOTEDIDENTIFIER];let s,n,r;for(;;){if(s=this.lookaheadToken(0),!a.includes(s.type))throw new Error(`Expecting an identifier token, got: ${s.type}`);if(n=s.value,this.advance(),this.match(J.TOK_COLON),r=this.expression(0),e.push({value:r,type:"KeyValuePair",name:n}),this.lookahead(0)===J.TOK_COMMA)this.match(J.TOK_COMMA);else if(this.lookahead(0)===J.TOK_RBRACE){this.match(J.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:e}}}const rc=new Bf;var ue;(function(t){t[t.TYPE_NUMBER=0]="TYPE_NUMBER",t[t.TYPE_ANY=1]="TYPE_ANY",t[t.TYPE_STRING=2]="TYPE_STRING",t[t.TYPE_ARRAY=3]="TYPE_ARRAY",t[t.TYPE_OBJECT=4]="TYPE_OBJECT",t[t.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",t[t.TYPE_EXPREF=6]="TYPE_EXPREF",t[t.TYPE_NULL=7]="TYPE_NULL",t[t.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",t[t.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(ue||(ue={}));class Ff{constructor(e){this.TYPE_NAME_TABLE={[ue.TYPE_NUMBER]:"number",[ue.TYPE_ANY]:"any",[ue.TYPE_STRING]:"string",[ue.TYPE_ARRAY]:"array",[ue.TYPE_OBJECT]:"object",[ue.TYPE_BOOLEAN]:"boolean",[ue.TYPE_EXPREF]:"expression",[ue.TYPE_NULL]:"null",[ue.TYPE_ARRAY_NUMBER]:"Array<number>",[ue.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([a])=>Math.abs(a),this.functionAvg=([a])=>{let s=0;for(let n=0;n<a.length;n+=1)s+=a[n];return s/a.length},this.functionCeil=([a])=>Math.ceil(a),this.functionContains=a=>{const[s,n]=a;return s.includes(n)},this.functionEndsWith=a=>{const[s,n]=a;return s.includes(n,s.length-n.length)},this.functionFloor=([a])=>Math.floor(a),this.functionJoin=a=>{const[s,n]=a;return n.join(s)},this.functionKeys=([a])=>Object.keys(a),this.functionLength=([a])=>Ga(a)?Object.keys(a).length:a.length,this.functionMap=a=>{if(!this._interpreter)return[];const s=[],n=this._interpreter,r=a[0],o=a[1];for(let i=0;i<o.length;i+=1)s.push(n.visit(r,o[i]));return s},this.functionMax=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===ue.TYPE_NUMBER)return Math.max(...a);const n=a;let r=n[0];for(let o=1;o<n.length;o+=1)r.localeCompare(n[o])<0&&(r=n[o]);return r},this.functionMaxBy=a=>{const s=a[1],n=a[0],r=this.createKeyFunction(s,[ue.TYPE_NUMBER,ue.TYPE_STRING]);let o=-1/0,i,l;for(let c=0;c<n.length;c+=1)l=r&&r(n[c]),l!==void 0&&l>o&&(o=l,i=n[c]);return i},this.functionMerge=a=>{let s={};for(let n=0;n<a.length;n+=1){const r=a[n];s=Object.assign(s,r)}return s},this.functionMin=([a])=>{if(!a.length)return null;if(this.getTypeName(a[0])===ue.TYPE_NUMBER)return Math.min(...a);const n=a;let r=n[0];for(let o=1;o<n.length;o+=1)n[o].localeCompare(r)<0&&(r=n[o]);return r},this.functionMinBy=a=>{const s=a[1],n=a[0],r=this.createKeyFunction(s,[ue.TYPE_NUMBER,ue.TYPE_STRING]);let o=1/0,i,l;for(let c=0;c<n.length;c+=1)l=r&&r(n[c]),l!==void 0&&l<o&&(o=l,i=n[c]);return i},this.functionNotNull=a=>{for(let s=0;s<a.length;s+=1)if(this.getTypeName(a[s])!==ue.TYPE_NULL)return a[s];return null},this.functionReverse=([a])=>{if(this.getTypeName(a)===ue.TYPE_STRING){const r=a;let o="";for(let i=r.length-1;i>=0;i-=1)o+=r[i];return o}const n=a.slice(0);return n.reverse(),n},this.functionSort=([a])=>[...a].sort(),this.functionSortBy=a=>{if(!this._interpreter)return[];const s=a[0].slice(0);if(s.length===0)return s;const n=this._interpreter,r=a[1],o=this.getTypeName(n.visit(r,s[0]));if(o!==void 0&&![ue.TYPE_NUMBER,ue.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const i=[];for(let l=0;l<s.length;l+=1)i.push([l,s[l]]);i.sort((l,c)=>{const u=n.visit(r,l[1]),d=n.visit(r,c[1]);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);return u>d?1:u<d?-1:l[0]-c[0]});for(let l=0;l<i.length;l+=1)s[l]=i[l][1];return s},this.functionStartsWith=([a,s])=>a.startsWith(s),this.functionSum=([a])=>a.reduce((s,n)=>s+n,0),this.functionToArray=([a])=>this.getTypeName(a)===ue.TYPE_ARRAY?a:[a],this.functionToNumber=([a])=>{const s=this.getTypeName(a);let n;return s===ue.TYPE_NUMBER?a:s===ue.TYPE_STRING&&(n=+a,!isNaN(n))?n:null},this.functionToString=([a])=>this.getTypeName(a)===ue.TYPE_STRING?a:JSON.stringify(a),this.functionType=([a])=>{switch(this.getTypeName(a)){case ue.TYPE_NUMBER:return"number";case ue.TYPE_STRING:return"string";case ue.TYPE_ARRAY:return"array";case ue.TYPE_OBJECT:return"object";case ue.TYPE_BOOLEAN:return"boolean";case ue.TYPE_EXPREF:return"expref";case ue.TYPE_NULL:return"null";default:return}},this.functionValues=([a])=>Object.values(a),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[ue.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[ue.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[ue.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY]},{types:[ue.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[ue.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[ue.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY,ue.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[ue.TYPE_EXPREF]},{types:[ue.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[ue.TYPE_ARRAY_NUMBER,ue.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[ue.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[ue.TYPE_ARRAY_NUMBER,ue.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[ue.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[ue.TYPE_STRING,ue.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[ue.TYPE_ARRAY_STRING,ue.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[ue.TYPE_ARRAY]},{types:[ue.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[ue.TYPE_STRING]},{types:[ue.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[ue.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[ue.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[ue.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[ue.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[ue.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[ue.TYPE_OBJECT]}]}},this._interpreter=e}registerFunction(e,a,s){if(e in this.functionTable)throw new Error(`Function already defined: ${e}()`);this.functionTable[e]={_func:a.bind(this),_signature:s}}callFunction(e,a){const s=this.functionTable[e];if(s===void 0)throw new Error(`Unknown function: ${e}()`);return this.validateArgs(e,a,s._signature),s._func.call(this,a)}validateInputSignatures(e,a){for(let s=0;s<a.length;s+=1)if("variadic"in a[s]&&s!==a.length-1)throw new Error(`ArgumentError: ${e}() 'variadic' argument ${s+1} must occur last`)}validateArgs(e,a,s){var n,r;let o;this.validateInputSignatures(e,s);const i=s.filter(m=>{var v;return(v=!m.optional)!==null&&v!==void 0?v:!1}).length,l=(r=(n=s[s.length-1])===null||n===void 0?void 0:n.variadic)!==null&&r!==void 0?r:!1,c=a.length<i,u=a.length>s.length,d=c&&(!l&&i>1||l)?"at least ":"";if(l&&c||!l&&(c||u))throw o=s.length>1,new Error(`ArgumentError: ${e}() takes ${d}${i} argument${o&&"s"||""} but received ${a.length}`);let p,f,g;for(let m=0;m<s.length;m+=1){g=!1,p=s[m].types,f=this.getTypeName(a[m]);let v;for(v=0;v<p.length;v+=1)if(f!==void 0&&this.typeMatches(f,p[v],a[m])){g=!0;break}if(!g&&f!==void 0){const h=p.map(_=>this.TYPE_NAME_TABLE[_]).join(" | ");throw new Error(`TypeError: ${e}() expected argument ${m+1} to be type (${h}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(e,a,s){if(a===ue.TYPE_ANY)return!0;if(a===ue.TYPE_ARRAY_STRING||a===ue.TYPE_ARRAY_NUMBER||a===ue.TYPE_ARRAY){if(a===ue.TYPE_ARRAY)return e===ue.TYPE_ARRAY;if(e===ue.TYPE_ARRAY){let n;a===ue.TYPE_ARRAY_NUMBER?n=ue.TYPE_NUMBER:a===ue.TYPE_ARRAY_STRING&&(n=ue.TYPE_STRING);for(let r=0;r<s.length;r+=1){const o=this.getTypeName(s[r]);if(o!==void 0&&n!==void 0&&!this.typeMatches(o,n,s[r]))return!1}return!0}}else return e===a;return!1}getTypeName(e){switch(Object.prototype.toString.call(e)){case"[object String]":return ue.TYPE_STRING;case"[object Number]":return ue.TYPE_NUMBER;case"[object Array]":return ue.TYPE_ARRAY;case"[object Boolean]":return ue.TYPE_BOOLEAN;case"[object Null]":return ue.TYPE_NULL;case"[object Object]":return e.jmespathType===J.TOK_EXPREF?ue.TYPE_EXPREF:ue.TYPE_OBJECT;default:return}}createKeyFunction(e,a){if(!this._interpreter)return;const s=this._interpreter;return r=>{const o=s.visit(e,r);if(!a.includes(this.getTypeName(o))){const i=`TypeError: expected one of (${a.map(l=>this.TYPE_NAME_TABLE[l]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(i)}return o}}}class zf{constructor(){this._rootValue=null,this.runtime=new Ff(this)}search(e,a){return this._rootValue=a,this.visit(e,a)}visit(e,a){let s,n,r,o,i,l,c,u,d,p,f;switch(e.type){case"Field":return a===null?null:Ga(a)?(l=a[e.name],l===void 0?null:l):null;case"Subexpression":for(r=this.visit(e.children[0],a),p=1;p<e.children.length;p+=1)if(r=this.visit(e.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(e.children[0],a),u=this.visit(e.children[1],c),u;case"Index":if(!Array.isArray(a))return null;let g=e.value;return g<0&&(g=a.length+g),r=a[g],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(a))return null;const m=[...e.children],v=this.computeSliceParams(a.length,m),[h,_,w]=v;if(r=[],w>0)for(p=h;p<_;p+=w)r.push(a[p]);else for(p=h;p>_;p+=w)r.push(a[p]);return r;case"Projection":if(f=this.visit(e.children[0],a),!Array.isArray(f))return null;for(d=[],p=0;p<f.length;p+=1)n=this.visit(e.children[1],f[p]),n!==null&&d.push(n);return d;case"ValueProjection":if(f=this.visit(e.children[0],a),!Ga(f))return null;d=[];const E=Object.values(f);for(p=0;p<E.length;p+=1)n=this.visit(e.children[1],E[p]),n!==null&&d.push(n);return d;case"FilterProjection":if(f=this.visit(e.children[0],a),!Array.isArray(f))return null;const I=[],R=[];for(p=0;p<f.length;p+=1)s=this.visit(e.children[2],f[p]),Ps(s)||I.push(f[p]);for(let F=0;F<I.length;F+=1)n=this.visit(e.children[1],I[F]),n!==null&&R.push(n);return R;case"Comparator":switch(o=this.visit(e.children[0],a),i=this.visit(e.children[1],a),e.name){case J.TOK_EQ:r=an(o,i);break;case J.TOK_NE:r=!an(o,i);break;case J.TOK_GT:r=o>i;break;case J.TOK_GTE:r=o>=i;break;case J.TOK_LT:r=o<i;break;case J.TOK_LTE:r=o<=i;break;default:throw new Error(`Unknown comparator: ${e.name}`)}return r;case J.TOK_FLATTEN:const C=this.visit(e.children[0],a);if(!Array.isArray(C))return null;let H=[];for(p=0;p<C.length;p+=1)n=C[p],Array.isArray(n)?H=[...H,...n]:H.push(n);return H;case"Identity":return a;case"MultiSelectList":if(a===null)return null;for(d=[],p=0;p<e.children.length;p+=1)d.push(this.visit(e.children[p],a));return d;case"MultiSelectHash":if(a===null)return null;d={};let $;for(p=0;p<e.children.length;p+=1)$=e.children[p],d[$.name]=this.visit($.value,a);return d;case"OrExpression":return s=this.visit(e.children[0],a),Ps(s)&&(s=this.visit(e.children[1],a)),s;case"AndExpression":return o=this.visit(e.children[0],a),Ps(o)?o:this.visit(e.children[1],a);case"NotExpression":return o=this.visit(e.children[0],a),Ps(o);case"Literal":return e.value;case J.TOK_PIPE:return c=this.visit(e.children[0],a),this.visit(e.children[1],c);case J.TOK_CURRENT:return a;case J.TOK_ROOT:return this._rootValue;case"Function":const G=[];for(let F=0;F<e.children.length;F+=1)G.push(this.visit(e.children[F],a));return this.runtime.callFunction(e.name,G);case"ExpressionReference":const j=e.children[0];return j.jmespathType=J.TOK_EXPREF,j;default:throw new Error(`Unknown node type: ${e.type}`)}}computeSliceParams(e,a){let[s,n,r]=a;if(r===null)r=1;else if(r===0){const i=new Error("Invalid slice, step cannot be 0");throw i.name="RuntimeError",i}const o=r<0;return s=s===null?o?e-1:0:this.capSliceRange(e,s,r),n=n===null?o?-1:e:this.capSliceRange(e,n,r),[s,n,r]}capSliceRange(e,a,s){let n=a;return n<0?(n+=e,n<0&&(n=s<0?-1:0)):n>=e&&(n=s<0?e-1:e),n}}const Wr=new zf,Hf=ue.TYPE_ANY,Uf=ue.TYPE_ARRAY,Gf=ue.TYPE_ARRAY_NUMBER,jf=ue.TYPE_ARRAY_STRING,qf=ue.TYPE_BOOLEAN,Vf=ue.TYPE_EXPREF,Yf=ue.TYPE_NULL,Kf=ue.TYPE_NUMBER,Wf=ue.TYPE_OBJECT,Jf=ue.TYPE_STRING;function Xf(t){return rc.parse(t)}function Qf(t){return nc.tokenize(t)}const Zf=(t,e,a)=>{Wr.runtime.registerFunction(t,e,a)};function eh(t,e){const a=rc.parse(e);return Wr.search(a,t)}const th=Wr,_t={compile:Xf,registerFunction:Zf,search:eh,tokenize:Qf,TreeInterpreter:th,TYPE_ANY:Hf,TYPE_ARRAY_NUMBER:Gf,TYPE_ARRAY_STRING:jf,TYPE_ARRAY:Uf,TYPE_BOOLEAN:qf,TYPE_EXPREF:Vf,TYPE_NULL:Yf,TYPE_NUMBER:Kf,TYPE_OBJECT:Wf,TYPE_STRING:Jf},Pt=class Pt{static async appendPrompt(e,a){ri(e,LZString.compressToUTF16(JSON.stringify(a))).then(async()=>{La().then(s=>{s=s.filter(n=>n.indexOf(this.DELIM_PROMPTS)!=-1),s.length>Pt.MAX_PROMPTS_VALS&&qn(s[0])})}).catch(s=>console.error("~IDB Failed | ",s))}static async appendVIR_products(e){e.forEach(a=>{let s=JSON.stringify({ts:Date.now(),name:a[1]});ri(a[0],LZString.compressToUTF16(s)).then(async()=>{}).catch(n=>console.error("~IDB Failed | ",n))})}static async keys(e,a){La().then(s=>{s=s.filter(n=>n.indexOf(e)!=-1),a&&a(s)})}static async get(e,a){Lf(e).then(s=>{try{s=JSON.parse(LZString.decompressFromUTF16(s))}catch{}finally{a&&a(s)}})}static async entries(e,a){Mf().then(s=>{s=s.filter(n=>n[0].indexOf(e)!=-1),s=s.map(n=>{try{n[1]=JSON.parse(LZString.decompressFromUTF16(n[1]))}catch{}finally{}return n}),a&&a(s)})}static compr(e){return e}static decompr(e){return e}static async act(e,a,s){let n="";switch(e){case"PROMPTS_COUNT":La().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_PROMPTS)!=-1),n=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,n&&s&&s(n)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":La().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_PROMPTS)!=-1&&i.split(Pt.DELIM_PROMPTS)[0]==a&&qn(i)})}),n="The Prompt history has been removed for UPI: "+a,console.log("~ PROMPTS_CLEAR ------ | ",n);break;case"VIR_COUNT":La().then(o=>{o=o.filter(i=>i.indexOf(this.DELIM_VIR)!=-1),n=`There are ${o.length} VNR names in local IDB storage.`,n&&s&&s(n)});break;case"VIR_CLEAR":let r=0;await La().then(o=>{o.forEach(i=>{i.indexOf(this.DELIM_VIR)!=-1&&i.split(Pt.DELIM_VIR)[0]==a&&(r++,qn(i))})}),n=`The VNR Names have been removed for UPI: ${a} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),n="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",n),n&&s&&s(n)}};Pt.MAX_TYPEAHEAD_ROWS=14,Pt.MAX_PROMPTS_VALS=50,Pt.DELIM_PROMPTS="_",Pt.DELIM_VIR="-",Pt.DELIM_SNDX="|";let ka=Pt;const xe=gp("AppState",()=>{const t=ct(),e="DEV",a="BMA Tourney v0.0.5 ",s="#app",n=Mt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_TOURNEYS:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS",WC__APP__HEAD_MID__HEAD_MID_PRIVATE:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__LOBBY:"WC.APP.FOOT.LOBBY",WC__APP__FOOT__TOURNEYS:"WC.APP.FOOT.TOURNEYS",WC__APP__FOOT__PRIVATE:"WC.APP.FOOT.PRIVATE",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",ROUTE__INVITES_HYDRATE:"ROUTE.INVITES_HYDRATE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",SSE__CORE__INVITE_SYNC:"SSE.CORE.INVITE_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let r=Mt([]),o=Mt([]),i=Mt([]);const l=q=>{r.push(q),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},c=q=>{if(!q?.guid)return;const P=i.findIndex(A=>A.guid===q.guid);P>=0?i.splice(P,1,q):i.push(q)},u=q=>{const P=i.findIndex(A=>A.guid===q);P>=0&&i.splice(P,1)},d=q=>{i.splice(0,i.length,...Array.isArray(q)?q:[])},p=q=>{o.push(q),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},f=()=>{const q=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",q),q)try{const P=JSON.parse(q);return console.log("[appState] Parsed session_user:",P),P}catch(P){console.error("Failed to parse session_user from localStorage:",P)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},g=Pe({session_app:{online:!0,route:"",version:a+e,buildmode:e},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:f()}),m=Pe({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),v=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",ka.compr(JSON.stringify(m.value.features)));else{let q=ka.decompr(localStorage.getItem("feature_flags"));q=Object.assign(m.value.features,JSON.parse(q));for(let P in q)typeof m.value?.env_override[e][P]<"u"&&(q[P]=m.value.env_override[e][P]);localStorage.setItem("feature_flags",ka.compr(JSON.stringify(m.value.features=q)))}},h=()=>{const q=document.querySelector(s);if(q){const P=q.dataset;for(let A in P){const S=A.replace(/^sync/,""),D=Object.keys(m.value.features).find(L=>L.toLowerCase()===S.toLowerCase());if(D){const L=m.value.features[D]?.state;L&&(P[A]=L)}}}},_=(q="Theme",P={state:"dark"})=>{const A=document.querySelector(s);A&&(A.dataset["sync"+q]=P.state)},w=(q="Theme",P={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&P){let S=JSON.parse(ka.decompr(localStorage.getItem("feature_flags")));S[q]={state:P.state},localStorage.setItem("feature_flags",ka.compr(JSON.stringify(m.value.features=S))),_(q,P),de.publish("APP.ROUTE_SYNC",`{ "${q}": ${JSON.stringify(P)}}`)}},E=q=>{const P=m.value?.features?.Lang?.state;let A=C.value.microcopy.language.filter(S=>S.code==P)[0]?.copy;if(A=A.filter(S=>S[0]==q)[0],A)return A[1]},I=(q=":version")=>{let[P,A,S]=q.split(" ");switch(P=P.toLocaleLowerCase(),S=="true"&&(S=!0),S=="false"&&(S=!1),P){case":version":neodigmToast.q(`Version Q ${g.value.session_app.version}`,"brand");break;case":feature":w(A,{state:S});break;case":route":neodigmToast.q(`route ${A}`,"brand"),t.push({name:A});break}};v(),h();const R=Mt({designer:"guided_tour",notifications:{unread:0}}),C=Pe({sports:Ge,microcopy:Pf.getMeta()}),H=_e(()=>g.value.session_user.fname+" "+g.value.session_user.lname),$=()=>{console.log("[appState] Saving session_user to localStorage:",g.value.session_user),localStorage.setItem("session_user",JSON.stringify(g.value.session_user))},G=()=>{localStorage.removeItem("session_user")};function j(q){return g.value.session_user.authenticated=!0,g.value.session_user.token=q,$(),g.value.session_app.route="chat"}function F(){return g.value.session_user.authenticated=!1,g.value.session_user.token="",g.value.session_user.guid="",G(),API_ORCH.setTJO(null),g.value.session_app.route="auth"}return{appCLIFeatures:m,appDesigner:R,appMeta:C,appSession:g,clearSessionUser:G,concatFirstLast:H,coreBetSlip:o,coreInvites:i,coreTourn:r,doCLI:I,doLogin:j,doLogout:F,hierTopics:n,i18n:E,pushCoreTourn:l,pushcoreBetSlip:p,removeInvite:u,saveSessionUser:$,setCoreInvites:d,setFeaturePersistPub:w,upsertInvite:c}}),Vn="mvvBrand",ah=400,ja={scanIntervalId:null,processedElements:new WeakSet,init(){const e=new URLSearchParams(window.location.search).get("brand");e!==null&&(e==="null"||e===""?(this.clearBrand(),this.stopSrcSwapScanner()):this.setBrand(e)),this.hydrateBrandElements(),this.startSrcSwapScanner()},setBrand(t){if(t)try{localStorage.setItem(Vn,t),console.log("[BrandManager] Brand token set:",t)}catch(e){console.error("[BrandManager] Failed to set brand:",e)}},getBrand(){try{return localStorage.getItem(Vn)}catch(t){return console.error("[BrandManager] Failed to get brand:",t),null}},clearBrand(){localStorage.removeItem(Vn),this.stopSrcSwapScanner(),console.log("[BrandManager] Brand token cleared")},getBrandHeader(){const t=this.getBrand();return t?{"x-m5t-brand":t}:{}},hydrateBrandElements(){const t=this.getBrand();if(!t)return;const e=document.querySelectorAll("[data-mvv-brand]");e.forEach(a=>{a.getAttribute("data-mvv-brand")==="token"&&(a.textContent=t)}),e.length>0&&console.log(`[BrandManager] Hydrated ${e.length} brand elements with token:`,t)},rehydrate(){this.hydrateBrandElements()},startSrcSwapScanner(){this.getBrand()&&(this.scanAndSwapSrc(),this.scanIntervalId=setInterval(()=>{this.scanAndSwapSrc()},ah),console.log("[BrandManager] Src swap scanner started"))},stopSrcSwapScanner(){this.scanIntervalId&&(clearInterval(this.scanIntervalId),this.scanIntervalId=null,this.processedElements=new WeakSet,console.log("[BrandManager] Src swap scanner stopped"))},scanAndSwapSrc(){const t=this.getBrand();if(!t)return;const e=[];document.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(a=>{e.push(a)}),document.querySelectorAll("*").forEach(a=>{a.shadowRoot&&a.shadowRoot.querySelectorAll('[data-m5t-brand-src-swap="true"]').forEach(s=>{e.push(s)})}),e.forEach(a=>{if(this.processedElements.has(a))return;const s=a.getAttribute("src");if(s&&!s.includes("&brand=")){const n=`${s}&brand=${t}`;a.setAttribute("src",n),this.processedElements.add(a),console.log("[BrandManager] Updated src for element:",a)}})}},wr="bma_anon_session",Jr="bma_pending_join_intent",sh=1440*60*1e3,is=Object.freeze({AUTHED:"authed",PREVIEW:"preview",DENIED:"denied"});function nh(t,e={}){return(typeof mvvLegit<"u"&&mvvLegit&&typeof mvvLegit.isRouteAllowed=="function"?mvvLegit.isRouteAllowed(t):!1)?is.AUTHED:e?.previewAllowed?is.PREVIEW:is.DENIED}function li(t){const e=typeof neodigmOpt<"u"&&neodigmOpt?.ROOT||null;e&&(e.dataset.authTier=t)}function oc(){let t=sessionStorage.getItem(wr);return t||(t=`anon_${typeof crypto<"u"&&typeof crypto.randomUUID=="function"?crypto.randomUUID():`${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}`,sessionStorage.setItem(wr,t)),t}function rh(){sessionStorage.removeItem(wr)}function oh(t,e=null){const a={tournamentGuid:t,joinSlug:e||null,sessionId:oc(),capturedAt:Date.now()};return sessionStorage.setItem(Jr,JSON.stringify(a)),a}function ih(){const t=sessionStorage.getItem(Jr);if(!t)return null;try{const e=JSON.parse(t);return!e?.capturedAt||Date.now()-e.capturedAt>sh?(xr(),null):e}catch{return xr(),null}}function xr(){sessionStorage.removeItem(Jr)}function lh(){const t=ih();return rh(),xr(),t}const ze=class ze{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let e=localStorage.getItem("tjo");return e&&(this.jsTJO=JSON.parse(e)),this.jsTJO}static RETIREsetTJO(e){return e?localStorage.setItem("tjo",JSON.stringify(e)):localStorage.clear("tjo"),this.jsTJO=e}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),ze.setTJO(null),location.reload()}static async doSignin(e,a=null){const s={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",s)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),a&&a(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(e,a=null){const s={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",s)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),a&&a(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),a&&a(r)}}static async checkUserName(e,a=null){const s={method:"POST",body:JSON.stringify({userName:e}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",s)).json();return a&&a(r),r}static async resetHash(e,a,s=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const n=typeof neodigmUtils<"u"?neodigmUtils.genHash(a):a,r={method:"POST",body:JSON.stringify({guid:e,hash:n}),headers:ze.genHeaders()},i=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();s&&s(i)}static genHeaders(e={}){let a={};a.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),a.Authorization="Bearer expired",a["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(a.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(a.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(a.company=SessionAcctEntity.oEntities.data.entity.company);const s=ja.getBrandHeader();return Object.assign(a,s),a}static async fetchTournaments(e=null){const a={method:"GET",headers:ze.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",a)).json();return e&&e(n),n}static async fetchTournamentPreview(e,a=null,s=null){typeof a=="function"&&(s=a,a=null);const n={"Content-Type":"application/json","X-Bma-Anon-Session":oc()};Object.assign(n,ja.getBrandHeader());let r=`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${e}/preview`;a&&(r+=`?s=${encodeURIComponent(a)}`);const i=await fetch(r,{method:"GET",headers:n});let l=null;try{l=await i.json()}catch{l=null}const c={data:l,status:i.status,ok:i.ok};return s&&s(c),c}static async createTournament(e,a=null){const s={method:"POST",body:JSON.stringify(e),headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament`,s);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return a&&a(o),o}static async fetchBetSlips(e,a="",s="",n=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${e}`;a&&(r+=`/${a}`),a&&s&&(r+=`/${s}`);const o={method:"GET",headers:ze.genHeaders()},l=await(await fetch(this.API_baseURI+r,o)).json();return n&&n(l),l}static async fetchLeaderboard(e,a="",s=null){let n=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${e}`;a&&(n+=`&user=${a}`);const r={method:"GET",headers:ze.genHeaders()},i=await(await fetch(this.API_baseURI+n,r)).json();return s&&s(i),i}static async fetchGlobalLeaderboard(e=null){const a=`/m5t/${this.API_ver}/coreLeaderboard`,s={method:"GET",headers:ze.genHeaders()},r=await(await fetch(this.API_baseURI+a,s)).json();return e&&e(r),r}static async fetchAllTimeLeaderboard(e="ALL",a=100,s="td",n=null){const r=new URLSearchParams({sport:e,limit:String(a),sort:s}),o=`/m5t/${this.API_ver}/coreLeaderboard/alltime?${r.toString()}`,i={method:"GET",headers:ze.genHeaders()},c=await(await fetch(this.API_baseURI+o,i)).json();return n&&n(c),c}static async postBetSlips(e,a=null){const s=e.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(async i=>{let l=null;try{l=await i.json()}catch{l=null}return{data:l,status:i.status,ok:i.ok}}).catch(i=>({data:null,status:0,ok:!1,networkError:i?.message||"network"}))}),n=await Promise.all(s);return a&&a(n),n}static async fetchPromotions(e=null){const a={method:"GET",headers:ze.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",a)).json();return e&&e(n),n}static async sendInvite(e,a,s=null){const n={method:"POST",body:JSON.stringify(a),headers:ze.genHeaders()},r=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${e}/invite`,n);let o=null;try{o=await r.json()}catch{o=null}const i={data:o,status:r.status,ok:r.ok};return s&&s(i),i}static async fetchInvitesForTournament(e,a=null){const s={method:"GET",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/tournament/${e}/invites`,s);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return a&&a(o),o}static async fetchMyInvites(e={},a=null){typeof e=="function"&&(a=e,e={});let s=`${this.API_baseURI}/m5t/${this.API_ver}/invites/mine`;e.include==="all"&&(s+="?include=all");const n={method:"GET",headers:ze.genHeaders()},r=await fetch(s,n);let o=null;try{o=await r.json()}catch{o=null}const i={data:o,status:r.status,ok:r.ok};return a&&a(i),i}static async acceptInvite(e,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${e}/accept`,s);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return a&&a(o),o}static async declineInvite(e,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${e}/decline`,s);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return a&&a(o),o}static async revokeInvite(e,a=null){const s={method:"POST",headers:ze.genHeaders()},n=await fetch(`${this.API_baseURI}/m5t/${this.API_ver}/invite/${e}/revoke`,s);let r=null;try{r=await n.json()}catch{r=null}const o={data:r,status:n.status,ok:n.ok};return a&&a(o),o}};ze.API_baseURI="https://machfive-bmacdev-rest.onrender.com",ze.API_ver="v5",ze.jsState={},ze.jsMeta={},ze.jsTJO=null;let Te=ze;const bs={shootConfetti(){if(typeof confetti=="function"){let s=function(n,r){confetti({...e,...r,particleCount:Math.floor(t*n)})};var a=s,t=200,e={origin:{y:.7}};s(.25,{zIndex:304,spread:26,startVelocity:55}),s(.2,{zIndex:304,spread:60}),s(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),s(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),s(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const t=new URLSearchParams(window.location.search);t.set("reload",new Date().getTime());const e=t.toString();window.location.search=e},isJSON(t){let e=!1;try{e=typeof JSON.parse(t)}catch{}return e=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(t,e={}){if(!t)return"TBD";let a=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(t+"Z"));const s={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return a.toLocaleString(void 0,{...s,...e})},shallowDelta(t,e){if(Object.keys(e).length==0&&Object.keys(t).length>0)return t;let a={};for(const s in e)t[s]&&e[s]!=t[s]&&(a[s]=t[s]);return Object.keys(a).length>0?a:e},genLorumIpsum(t=1){},rehydrateBrand(){typeof window.BrandManager<"u"&&window.BrandManager.rehydrate()}},ma=(t,e)=>{const a=t.__vccOpts||t;for(const[s,n]of e)a[s]=n;return a},ch={class:"auth-page"},dh={__name:"splash_route",setup(t){const e=ct(),a=xs();return xe(),setTimeout(()=>{a&&a.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?e.push({name:"home_route"}):e.push({name:"signin_route"}))},3e3),(s,n)=>(pe(),fe("div",ch,[...n[0]||(n[0]=[ut('<div class="auth-page-left" data-v-994bad53><div class="auth-bg" data-v-994bad53><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div><div class="auth-bg-image" data-v-994bad53></div></div><div class="auth-overlay" data-v-994bad53></div><div class="auth-branding-content" data-v-994bad53><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-994bad53><p class="auth-branding-tagline" data-v-994bad53>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-994bad53>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-994bad53> © 2026 Bet Max Action. All rights reserved. </div></div>',1),b("div",{class:"auth-page-right"},[b("div",{class:"auth-card splash-content"},[b("p",{class:"splash-message"},"Loading Tournaments..."),b("br"),b("br"),b("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[b("div")])])],-1)])]))}},ci=ma(dh,[["__scopeId","data-v-994bad53"]]);class uh{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const e=document.getElementById("app");return e?(this._readFromApp(e),this._observeApp(e),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(e){this._theme=e.getAttribute("data-sync-theme")||"dark",this._motif=e.getAttribute("data-sync-motif")||"brand",this._lang=e.getAttribute("data-sync-lang")||"en"}_observeApp(e){this._observer||(this._observer=new MutationObserver(a=>{let s=!1;for(const n of a){if(n.attributeName==="data-sync-theme"){const r=e.getAttribute("data-sync-theme")||"dark";r!==this._theme&&(this._theme=r,s=!0)}if(n.attributeName==="data-sync-motif"){const r=e.getAttribute("data-sync-motif")||"brand";r!==this._motif&&(this._motif=r,s=!0)}if(n.attributeName==="data-sync-lang"){const r=e.getAttribute("data-sync-lang")||"en";r!==this._lang&&(this._lang=r,s=!0)}}s&&this._notify()}),this._observer.observe(e,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const e of this._listeners)try{e(this)}catch(a){console.warn("[BMAThemeResolver] Listener error:",a)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(e){return this._listeners.add(e),()=>this._listeners.delete(e)}}const Me=new uh().init(),ic={mobile:"(orientation: portrait), (max-width: 768px)"};function qe(){return`
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
  `}class ph extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const e=Me.theme;let a=this.getAttribute("data-sport-group")||"Soccer",s,n;a==="Multi"?(s="Multi",n=`var(--sport-icon__Multi--${e})`):(s=a.replaceAll(" ","_"),n=`var(--sport-icon__${s}--${e})`),this.shadowRoot.innerHTML=`
      <style>
        ${qe()}

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
    `}}customElements.define("bma-sport-icon",ph);class fh extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Me.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(e,a={}){const s=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:e,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...a}});this.dispatchEvent(s)}attachEventListeners(){this.shadowRoot.addEventListener("click",e=>{const a=e.target.closest(".btn-info"),s=e.target.closest(".btn-join"),n=e.target.closest(".btn-play"),r=e.target.closest("bma-sport-icon");if(a){e.stopPropagation(),this.dispatchCardEvent("INFO");return}if(s){e.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(n){e.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){e.stopPropagation();const o=r.getAttribute("sport"),i=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:i.title,sportDescription:i.description});return}e.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(e,a,s){a!==s&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const e=this.shadowRoot?.querySelector(".card");if(!e)return;const a=e.scrollHeight-e.clientHeight,s=this.getAttribute("data-compact")==="true";!s&&a>2?this.setAttribute("data-compact","true"):s&&a<-10&&this.removeAttribute("data-compact")})}getTheme(){return Me.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let e=this.getAttribute("data-bma-tourn-entities");if(e)try{const a=JSON.parse(e);return Array.isArray(a)?a.find(n=>Array.isArray(n))?.length||"0":a?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let e=this.getAttribute("data-bma-tourn-entities");if(e)try{const a=JSON.parse(e);return Array.isArray(a)?a.find(n=>Array.isArray(n))||[]:a?.guids||[]}catch{return[]}return[]}get entitiesData(){let e=this.getAttribute("data-bma-tourn-entities");if(e)try{const a=JSON.parse(e);if(Array.isArray(a)){const s=a.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:a.find(r=>Array.isArray(r))?.length||0,max:parseInt(s?.max)||100}}return{current:a?.guids?.length||0,max:a?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;return a?this.entitiesGuids.includes(a):!1}getUserBadge(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;const s=this.getAttribute("data-bma-tourn-tags");if(!s)return null;try{const n=JSON.parse(s);if(!Array.isArray(n))return null;const r=n.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===a&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[a]&&o[a].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[a])||null}catch{return null}}getBadgeClass(){const e=this.getUserBadge();if(!e)return"";const a=e.match(/--badge__ribbon--(\w+)/);return a?a[1]:""}getSportInfo(e){const a=Ge.find(s=>s.key===e);return a?{title:a.title,description:a.description}:{title:e,description:e}}get matches(){let e=this.getAttribute("data-bma-tourn-matches");return e&&(e=JSON.parse(e)),e?.length||"0"}get matches_expanded(){let e=this.getAttribute("data-bma-tourn-matches_expanded");return e&&(e=JSON.parse(e)),e||null}get marqueeText(){const e=this.matches_expanded;return!e||e.length===0?"   Game lines drop a few days before each matchup   ":"  "+e.map(s=>{const n=s.title||"Match";let r="TBD";if(s.scheduled_at)try{r=new Date(s.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=s.scheduled_at}return`  ${n} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT_FORMAT"}get gameModeBadge(){if(typeof window.GameTypeLifeCycle>"u")return null;const e=window.GameTypeLifeCycle.forToken(this.gameType);return e?e.badge:null}get prizeDistro(){const e=this.getAttribute("data-bma-tourn-prize_distro");if(!e)return null;try{return JSON.parse(e)}catch{return e}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const e=this.getAttribute("data-bma-tourn-sports_allowed");if(!e)return[];try{const a=JSON.parse(e);return Array.isArray(a)?a.map(s=>typeof s=="object"&&s.sport_key?s.sport_key:s):[a]}catch{return[e]}}get sportsDisplay(){const e=this.sportsAllowed;if(!Array.isArray(e)||e.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const a=Math.min(e.length,3);let s="";for(let n=0;n<a;n++){const r=e[n].key,o=Ge.find(l=>l.key===r),i=o?o.group:"default";s+=`<bma-sport-icon sport="${r}" data-sport-group="${i}"></bma-sport-icon>`}return e.length>3&&(s+=`<span class="sport-count">+${e.length-3}</span>`),s}render(){const e=this.getTheme(),a=this.getAttribute("data-sync-theme")||e;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${qe()}
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
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",fh);class hh extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const e=this.shadowRoot.querySelector(".stake-input");e&&e.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-content-point","data-abbreviated-title","data-scheduled-at","data-stake","data-payout","data-payout-base","data-bma-mode-token"]}attributeChangedCallback(e,a,s){if(a!==s){if(e==="data-stake")return;if(e==="data-payout"||e==="data-payout-base"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get point(){return this.getAttribute("data-content-point")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const e=this.getAttribute("data-scheduled-at")||"";return e?bs.formatDateLocal(e):""}get payout(){const e=this.getAttribute("data-payout")||"0",a=parseFloat(e);return isNaN(a)?"0.00":a.toFixed(2)}get potentialProfit(){const e=parseFloat(this.stake)||0,s=(parseFloat(this.payout)||0)-e;return s>0?s.toFixed(2):"0.00"}get bonusMultiplier(){const e=parseFloat(this.getAttribute("data-payout")||"0"),a=parseFloat(this.getAttribute("data-payout-base")||"0");if(!Number.isFinite(e)||!Number.isFinite(a)||a<=0)return null;const s=e/a;if(s<=1.005)return null;const n=parseFloat(s.toFixed(2)).toString(),r=this.getAttribute("data-bma-mode-token")||"";let o="Bonus";if(r&&window.GameTypeLifeCycle?.forToken)try{const i=window.GameTypeLifeCycle.forToken(r);i?.bonusLabel&&(o=i.bonusLabel)}catch{}return`${o} ${n}×`}updatePayoutDisplay(){const e=this.shadowRoot?.querySelector(".hero-value");e&&(e.textContent=this.potentialProfit);const a=this.shadowRoot?.querySelector(".hero-mult");if(a){const s=this.bonusMultiplier;a.textContent=s||"",a.style.display=s?"":"none"}}setupEventListeners(){const e=this.shadowRoot.querySelector(".close-btn");e&&e.addEventListener("click",()=>{const s={teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")};de.publish("COREBETSLIP.CLOSE",JSON.stringify({...s,timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:s}))});const a=this.shadowRoot.querySelector(".stake-input");a&&a.addEventListener("input",s=>{this.setAttribute("data-stake",s.target.value)})}get isSurvivor(){return(this.getAttribute("data-bma-mode-token")||"")==="SURVIVOR"}render(){const e=parseInt(this.odds,10),a=Number.isFinite(e)?e>0?`+${e}`:`${e}`:this.odds,s=this.stake!=="0"?this.stake:"",n=(this.type||"").toUpperCase(),r=this.isSurvivor;this.shadowRoot.innerHTML=`
      <style>
        ${qe()}

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

        /* SURVIVOR variant — single pill replaces stake + hero. */
        .footer--survivor {
          grid-template-columns: 1fr;
          justify-items: flex-start;
        }
        .survivor-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 999px;
          background: rgba(247, 198, 13, 0.12);
          color: var(--status-locked-text, #F7C60D);
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.35);
        }

        @media (orientation: portrait), (max-width: 768px) {
          .body { padding: 10px; gap: 10px; }
          .header { padding-right: 36px; }
          .match-desc { font-size: 0.75rem; }
          .selection { font-size: 0.88rem; }
          .odds { padding: 5px 10px; font-size: 0.82rem; min-width: 50px; }
          .stake-input { padding: 7px 10px 7px 40px; font-size: 0.88rem; max-width: 140px; }
          .hero { font-size: 1.15rem; }
          .survivor-pill { font-size: 0.62rem; padding: 5px 10px; }
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
          <div class="footer${r?" footer--survivor":""}">
            ${r?`
              <div class="survivor-pill">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true">
                  <path d="M12 2L4 5v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V5l-8-3z"/>
                </svg>
                <span>Survival pick — no stake</span>
              </div>
            `:`
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
            `}
          </div>
        </div>
      </div>
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",hh);class mh extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._expanded=!1}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags","data-bma-mode-token","data-bma-longshot-threshold","data-bma-survivor-used-teams","data-bma-survivor-picked-matches","data-bma-survivor-eliminated"]}isSurvivorTeamUsed(e){if(this.getAttribute("data-bma-mode-token")!=="SURVIVOR")return!1;const a=this.getAttribute("data-bma-survivor-used-teams");if(!a)return!1;try{const s=JSON.parse(a);return Array.isArray(s)&&s.includes(e)}catch{return!1}}isSurvivorMatchPicked(){if(this.getAttribute("data-bma-mode-token")!=="SURVIVOR")return!1;const e=this.getAttribute("data-bma-survivor-picked-matches");if(!e)return!1;try{const a=JSON.parse(e);return Array.isArray(a)&&a.includes(this.matchGuid)}catch{return!1}}isSurvivorEliminated(){return this.getAttribute("data-bma-survivor-eliminated")==="true"}isLongshotEligible(e){if(this.getAttribute("data-bma-mode-token")!=="LONGSHOT_MAYHEM")return!1;const s=parseFloat(this.getAttribute("data-bma-longshot-threshold")),n=Number.isFinite(s)?s:150,r=parseFloat(e);return Number.isFinite(r)&&r>=n}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const e=this.getAttribute("data-odds-markets");if(!e)return null;try{return JSON.parse(e)}catch(a){return console.error("[bma-bet-match-card] Error parsing odds_markets:",a),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Me.theme}get scoreboard(){const e=this.getAttribute("data-scoreboard");if(!e)return null;try{return JSON.parse(e)}catch(a){return console.error("[bma-bet-match-card] Error parsing scoreboard:",a),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const e=this.sportKey;if(!e)return"";const a=Ge.find(s=>s.key===e);return a?a.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_usa_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_uefa_champs_league:"UCL",soccer_uefa_europa_league:"UEL",soccer_spain_la_liga:"LALIGA",soccer_germany_bundesliga:"BUN",soccer_italy_serie_a:"SERIE A",soccer_france_ligue_one:"LIGUE 1",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const e=this.getAttribute("data-tournament-tags");if(!e)return[];try{return JSON.parse(e)}catch(a){return console.error("[bma-bet-match-card] Error parsing tournament tags:",a),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const s=this.scoreboard;if(!s||!s.time_remaining)return!1;const n=s.time_remaining.toLowerCase();return n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const e=this.getCountdownText();if(!e){this.stopCountdownTimer(),this.render();return}const a=this.shadowRoot?.querySelector(".countdown");a&&(a.textContent=e)}attributeChangedCallback(e,a,s){a!==s&&this.render()}formatDate(e){if(!e)return"TBD";let a=new Date(e);return!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(e+"Z")),a.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const e=new Date,a=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&a.setTime(new Date(this.scheduledAt+"Z").getTime());const s=a-e;if(s<=0)return"";const n=Math.floor(s/(1e3*60*60)),r=Math.floor(s%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const e=this.getCountdownText();if(e)return{type:"upcoming",text:e,color:"#F7C60D"};const a=this.scoreboard;if(a&&a.time_remaining){const s=a.time_remaining.toLowerCase();if(s==="final")return{type:"final",text:"Final",color:"#969696"};if(s==="in progress"||s.includes("q")||s.includes("half")||s.includes("period")){const n=a.home_score!==void 0&&a.home_score!==null||a.away_score!==void 0&&a.away_score!==null,r=a.period!==void 0&&a.period!==null&&a.period!==0;if(n||r)return{type:"live",text:a.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let s=this.scheduledAt;if(!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z"),new Date(s)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(e,a,s,n,r){e.stopPropagation();const o=e.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const i=o.classList.contains("btn--active"),l={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:a,team:s,price:n,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:l,isActive:i,button:o}}))}renderMarketSection(e,a){return!a||a.length===0?"":`
            <section class="soccer-market">
                <h4 class="soccer-market__title">${e}</h4>
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
        `}formatPrice(e){if(e==null||e==="")return"";const a=String(e).trim();if(a.startsWith("+")||a.startsWith("-"))return a;const s=parseFloat(a);return isNaN(s)?a:s>0?`+${s}`:String(s)}renderSoccerMoneyBtn(e,a,s={}){const{winner:n,loser:r,disabled:o}=s;if(!a)return`<button class="soccer-money-btn btn--empty btn--pending" disabled>
                <span class="btn-pending-label">Coming<br>Soon</span>
            </button>`;const i=a.price,l=a.name||"",c=this.isSurvivorTeamUsed(l),u=this.isSurvivorEliminated()||this.isSurvivorMatchPicked(),d=c||u;return`<button class="${["soccer-money-btn",n?"soccer-money-btn--winner":"",r?"soccer-money-btn--loser":"",o||d?"btn--disabled":"",c?"btn--survivor-used":"",e==="draw"?"soccer-money-btn--draw":"",this.isLongshotEligible(i)?"btn--longshot-eligible":""].filter(Boolean).join(" ")}"
                    data-bet-type="money"
                    data-team="${e}"
                    data-price="${i}"
                    ${o||d?'data-disabled="true"':""}>
            <span class="soccer-money-btn__odds" data-price-value="${i}">${this.formatPrice(i)}</span>
            ${c?'<span class="btn-survivor-used-tag">Used</span>':""}
        </button>`}renderButton(e,a,s,n,r=!1){if(!s)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const o=s.price,i=s.point,l=this.formatPrice(o),c=parseFloat(i),u=e==="spread"&&c===0;let d="";e==="spread"?u?d=l:d=`${c>0?`+${i}`:i}<br><span class="btn-odds" data-price-value="${o}">${l}</span>`:e==="money"?d=l:e==="total"&&(d=`${n}${i}<br><span class="btn-odds" data-price-value="${o}">${l}</span>`);const p=i!=null&&i!=="",f=this.isLongshotEligible(o)?" btn--longshot-eligible":"",g=s.name||"",m=e==="money"?this.isSurvivorTeamUsed(g):!1,v=this.isSurvivorEliminated()||this.isSurvivorMatchPicked(),h=m||v;return`<button class="btn${r||h?" btn--disabled":""}${f}${m?" btn--survivor-used":""}"
                    data-bet-type="${e}"
                    data-team="${a}"
                    data-price="${o}"
                    ${p?`data-point="${i}"`:""}
                    ${r||h?'data-disabled="true"':""}>
            ${d}
            ${m?'<span class="btn-survivor-used-tag">Used</span>':""}
        </button>`}render(){this.theme;const e=this.oddsMarkets;e&&(e.h2h||e.totals||e.spreads);const a=this.isMatchInProgressLocked(),s=this.isDisabled||a,n=!0,r=this.getGameStatus(),o=this.scoreboard,i=o?.home_score||0,l=o?.away_score||0,c=r?.type==="live"||r?.type==="final",u=parseInt(i),d=parseInt(l),p=r?.type==="final",f=r?.type==="live",g=c&&p&&u>d,m=c&&p&&d>u,v=c&&f&&u>d,h=c&&f&&d>u,_=e?.spreads?.outcomes?.find(A=>A.name===this.homeTeam),w=e?.spreads?.outcomes?.find(A=>A.name===this.awayTeam),E=e?.h2h?.outcomes?.find(A=>A.name===this.homeTeam),I=e?.h2h?.outcomes?.find(A=>A.name===this.awayTeam),R=e?.totals?.outcomes?.find(A=>A.name==="Over"),C=e?.totals?.outcomes?.find(A=>A.name==="Under"),H=this.sportKey?.startsWith("soccer_"),$=H?e?.h2h?.outcomes?.find(A=>A.name==="Draw"):null,G=A=>A&&parseFloat(A.point)===0,j=G(_)?_:null,F=G(w)?w:null,q=G(_)?null:_,P=G(w)?null:w;this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
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

                /* SURVIVOR — used-team strikethrough. Renders alongside
                   .btn--disabled so the price still reads (greyed out)
                   but the user sees it's burned. Works on both standard
                   .btn and .soccer-money-btn variants. The "Used" tag
                   sits in the corner so the strikethrough doesn't get
                   confused with a generic disabled state. */
                .btn--survivor-used {
                    position: relative;
                    text-decoration: line-through;
                    text-decoration-thickness: 1.5px;
                    opacity: 0.55;
                }
                .btn-survivor-used-tag {
                    position: absolute;
                    top: 2px;
                    right: 4px;
                    font-size: 0.55rem;
                    font-weight: 800;
                    letter-spacing: 0.4px;
                    text-transform: uppercase;
                    color: var(--text-muted, #808080);
                    text-decoration: none;
                    line-height: 1;
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

                ${H&&n?`
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
                            <div class="team team--home ${g?"team--winner":""} ${m?"team--loser":""}">
                                <span class="team-name">${this.homeTeam}</span>
                                ${c?`<span class="team-score ${v?"score--leading":""} ${h?"score--trailing":""}">${i}</span>`:""}
                            </div>
                            <div class="team team--away ${m?"team--winner":""} ${g?"team--loser":""}">
                                <span class="team-name">${this.awayTeam}</span>
                                ${c?`<span class="team-score ${h?"score--leading":""} ${v?"score--trailing":""}">${l}</span>`:""}
                            </div>
                        </div>
                        <div class="soccer-primary__money">
                            ${this.renderSoccerMoneyBtn("home",E,{winner:g,loser:m,disabled:s})}
                            ${this.renderSoccerMoneyBtn("draw",$,{winner:c&&p&&u===d,loser:c&&p&&u!==d,disabled:s})}
                            ${this.renderSoccerMoneyBtn("away",I,{winner:m,loser:g,disabled:s})}
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
                            ${j||F?this.renderMarketSection("Draw No Bet",[{label:this.homeTeam,teamClass:g?"team--winner":m?"team--loser":"",button:this.renderButton("spread","home",j,null,s)},{label:this.awayTeam,teamClass:m?"team--winner":g?"team--loser":"",button:this.renderButton("spread","away",F,null,s)}]):""}
                            ${q||P?this.renderMarketSection("Spread",[{label:this.homeTeam,teamClass:g?"team--winner":m?"team--loser":"",button:this.renderButton("spread","home",q,null,s)},{label:this.awayTeam,teamClass:m?"team--winner":g?"team--loser":"",button:this.renderButton("spread","away",P,null,s)}]):""}
                            ${this.renderMarketSection("Total Goals",[{label:"Over",button:this.renderButton("total","over",R,"O",s)},{label:"Under",button:this.renderButton("total","under",C,"U",s)}])}
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
                            <div class="team team--home ${g?"team--winner":""} ${m?"team--loser":""}">
                                <span class="team-name">${this.homeTeam}</span>
                                ${c?`<span class="team-score ${v?"score--leading":""} ${h?"score--trailing":""}">${i}</span>`:""}
                            </div>
                            ${`
                                <div class="buttons">
                                    ${this.renderButton("spread","home",q,null,s)}
                                    ${this.renderButton("money","home",E,null,s)}
                                    ${this.renderButton("total","under",C,"U",s)}
                                </div>
                            `}
                        </div>

                        <div class="row row--away">
                            <div class="team team--away ${m?"team--winner":""} ${g?"team--loser":""}">
                                <span class="team-name">${this.awayTeam}</span>
                                ${c?`<span class="team-score ${h?"score--leading":""} ${v?"score--trailing":""}">${l}</span>`:""}
                            </div>
                            ${`
                                <div class="buttons">
                                    ${this.renderButton("spread","away",P,null,s)}
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
                                class="markets-link ${H?"":"markets-link--disabled"}"
                                ${H?"":'disabled aria-disabled="true"'}
                                data-markets-toggle="${H?"enabled":"disabled"}">
                            ${H&&this._expanded?"Show Less ↑":"See All Markets →"}
                        </button>
                    </div>
                `}
            </div>
        `;{this.shadowRoot.querySelectorAll(".btn:not(.btn--empty), .soccer-money-btn:not(.btn--empty)").forEach(S=>{const D=S.dataset.betType,L=S.dataset.team,Y=S.dataset.price,Q=S.dataset.point||null;S.addEventListener("click",re=>this.handleButtonClick(re,D,L,Y,Q))});const A=this.shadowRoot.querySelector('[data-markets-toggle="enabled"]');A&&A.addEventListener("click",S=>{S.stopPropagation(),this._expanded=!this._expanded,this.render()})}}}customElements.define("bma-bet-match-card",mh);const gh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',bh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>';class _h extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(e,a,s){a!==s&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const e=this.getAttribute("data-match-home-score");return e!=null&&e!==""?e:null}get awayScore(){const e=this.getAttribute("data-match-away-score");return e!=null&&e!==""?e:null}get scoreboardData(){const e=this.getAttribute("data-match-scoreboard");if(!e)return null;try{return typeof e=="string"?JSON.parse(e):e}catch{return null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const e=Ge.find(a=>a.key===this.sportId);return e?e.group:""}get theme(){return Me.theme}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||""}getCountdownText(){if(!this.scheduledAt)return"";const e=new Date;let a=this.scheduledAt;!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a+="Z");const s=new Date(a)-e;if(s<=0)return"";const n=Math.floor(s/36e5),r=Math.floor(s%36e5/6e4);return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getMatchStatus(){const e=this.scoreboardData,a=this.homeScore!==null&&this.awayScore!==null;let s=!1;if(this.scheduledAt){let i=this.scheduledAt;!i.includes("Z")&&!i.match(/[+-]\d{2}:\d{2}$/)&&(i+="Z"),s=new Date(i)<new Date(Date.now()-300*1e3)}let n,r;if(e?.time_remaining){const i=e.time_remaining;i==="Final"?(n="FINAL",r="Final"):i==="In Progress"?(n="LIVE",r="In Progress"):(n="LIVE",r=i)}else a&&s?(n="FINAL",r="Final"):(n="UPCOMING",r="Upcoming");const o=n==="UPCOMING"?this.getCountdownText():"";return{status:n,timeRemaining:r,countdown:o}}render(){const{status:e,timeRemaining:a,countdown:s}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,r=this.scheduledAt?bs.formatDateLocal(this.scheduledAt):"",o=this.getSportAbbr(),i=e==="LIVE"?"live":e==="FINAL"?"final":"upcoming",l=e==="LIVE"?"Live":e==="FINAL"?"Final":"Upcoming",c=e==="FINAL"?bh:gh,u=parseInt(this.homeScore),d=parseInt(this.awayScore),p=n&&e==="FINAL"&&u>d,f=n&&e==="FINAL"&&d>u;this.shadowRoot.innerHTML=`
      <style>
        ${qe()}

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
              ${a||e}${s?`<span class="countdown-badge">${s}</span>`:""}
            </span>
          </div>
        </div>
      </div>
    `}}customElements.define("bma-match-status",_h);const vh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',yh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',wh='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',di='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class ia extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-unqualified","data-sync-theme","data-bma-mode-token"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const e=this.getAttribute("data-combined-betslips");if(!e)return[];try{return JSON.parse(e)}catch(a){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",a),[]}}get userMatches(){const e=this.getAttribute("data-user-matches");if(!e)return[];try{return JSON.parse(e)}catch(a){return console.error("[bma-leaderboard-card] Error parsing user_matches:",a),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get unqualified(){return this.getAttribute("data-unqualified")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Me.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(e,a,s){a!==s&&(this.render(),this.attachEventListeners())}toggleExpanded(){ia.currentlyExpanded&&ia.currentlyExpanded!==this&&ia.currentlyExpanded.collapse(),this.expanded=!this.expanded;const e=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");this.expanded?(e.classList.add("open"),a.classList.add("expanded"),ia.currentlyExpanded=this):(e.classList.remove("open"),a.classList.remove("expanded"),ia.currentlyExpanded===this&&(ia.currentlyExpanded=null))}collapse(){this.expanded=!1;const e=this.shadowRoot.querySelector(".leaderboard-card__details"),a=this.shadowRoot.querySelector(".expand-icon");e&&e.classList.remove("open"),a&&a.classList.remove("expanded")}attachEventListeners(){const e=this.shadowRoot.querySelector(".expand-icon");e&&e.addEventListener("click",a=>{a.stopPropagation(),this.toggleExpanded()})}getBetStats(){const e=this.combinedBetslips;let a=0,s=0,n=0,r=0,o=0;return e.forEach(i=>{const l=i.bet||[];if(l.length===0)return;const c=l[0];Object.keys(c).filter(d=>d!=="short_title").forEach(d=>{const p=c[d];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?a++:s++:(n++,r+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:a,losses:s,pending:n,total:a+s+n,pendingStakes:r,pendingMaxPayout:o}}renderBetsTable(){const e=this.combinedBetslips,a=this.userMatches,s=this.isCurrentUser;if(!e||e.length===0)return'<p class="no-bets">No bets available</p>';const n=e.filter(l=>{const c=l.bet||[];if(c.length===0)return!1;if(s)return!0;const u=c[0],d=Object.keys(u).filter(p=>p!=="short_title")[0];return u[d]?.reconciled===!0});if(n.length===0){if(!s){const l=e.reduce((c,u)=>{const d=(u.bet||[])[0];if(!d)return c;const p=Object.keys(d).filter(f=>f!=="short_title");return c+p.filter(f=>d[f]?.reconciled!==!0).length},0);if(l>0)return`<p class="no-bets no-bets--hidden">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align:-2px;margin-right:4px;opacity:0.6;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        ${l} pending bet${l!==1?"s":""} hidden until settled
                    </p>`}return'<p class="no-bets">No reconciled bets</p>'}const r={};a.forEach(l=>{const c=l.guid||l.id||l.odds_id;c&&(r[c]=l)});const o={};n.forEach(l=>{const c=l.coreMatches__guid||l.match_guid||l.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const u=r[c];if(u){o[c].matchTitle=u.short_title||u.title||"Unknown Match";const d=u.sport_id,p=Ge.find(f=>f.key===d);o[c].sportKey=p?.group||"default"}else{const p=(l.bet||[])[0];if(p&&typeof p=="object"){const f=Object.keys(p).filter(m=>m!=="short_title")[0],g=f?p[f]?.match:null;if(g?.home_team_id&&g?.away_team_id){o[c].matchTitle=`${g.away_team_id} @ ${g.home_team_id}`;const m=Ge.find(v=>v.key===g.sport_id);o[c].sportKey=m?.group||"default"}}}o[c].bets.push(l)});let i="";if(Object.keys(o).forEach(l=>{const c=o[l],u=c.sportKey||"default",d=c.matchTitle||"Unknown Match",p=c.bets.length;i+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${u}"></bma-sport-icon>
                    <span class="match-title">${d}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const g=f.bet||[];if(g.length===0)return;const m=g[0];Object.keys(m).filter(h=>h!=="short_title").forEach(h=>{const _=m[h];if(!_||typeof _!="object")return;const w=(_.type||"").toUpperCase(),E=parseFloat(_.stake||_.wager||0),I=parseFloat(_.payout||0),R=parseInt(_.odds,10),C=Number.isFinite(R)?R>0?`+${R}`:`${R}`:"—",H=_.reconciled===!0,$=I-E,G=.01;let j,F,q,P,A;H?_.outcome==="VOIDED"?(j="voided",F="Voided",q=di,P=`TD$ ${E.toFixed(2)}`,A="Refund"):I>E+G?(j="won",F="Won",q=yh,P=`+TD$ ${$.toFixed(2)}`,A="Profit"):I<E-G?(j="lost",F="Lost",q=wh,P=`-TD$ ${E.toFixed(2)}`,A="Lost"):(j="push",F="Push",q=di,P=`TD$ ${E.toFixed(2)}`,A="Returned"):(j="pending",F="Pending",q=vh,P=$>0?`+TD$ ${$.toFixed(2)}`:"TD$ 0.00",A="To win");let S="";if(j==="won"&&Number.isFinite(R)&&R!==0&&E>0&&I>0){const D=R>0?E*R/100:E/(Math.abs(R)/100),L=E+D;if(L>0&&I>L+.005){const Y=I/L,Q=parseFloat(Y.toFixed(2)).toString(),re=this.getAttribute("data-bma-mode-token")||"";let Z="Bonus";if(re&&window.GameTypeLifeCycle?.forToken)try{const V=window.GameTypeLifeCycle.forToken(re);V?.bonusLabel&&(Z=V.bonusLabel)}catch{}S=`${Z} ${Q}×`}}i+=`<div class="bet-item ${j}">
                        <div class="bet-item__pill">
                            <span class="bet-item__pill-dot"></span>
                            <span class="bet-item__pill-icon">${q}</span>
                            <span class="bet-item__pill-label">${F}</span>
                        </div>
                        <div class="bet-item__body">
                            <div class="bet-item__middle">
                                <div class="bet-item__team">${h}</div>
                                <div class="bet-item__odds">${C}</div>
                                <div class="bet-item__meta">
                                    <div class="bet-item__type">${w}</div>
                                    <div class="bet-item__stake">TD$ ${E.toFixed(2)} stake</div>
                                </div>
                            </div>
                            <div class="bet-item__footer">
                                <div class="bet-item__hero">
                                    <span>${P}</span>
                                    ${S?`<span class="bet-item__mult">${S}</span>`:""}
                                </div>
                                <div class="bet-item__sublabel">${A}</div>
                            </div>
                        </div>
                    </div>`})})}),!s){const l=e.reduce((c,u)=>{const d=(u.bet||[])[0];if(!d)return c;const p=Object.keys(d).filter(f=>f!=="short_title");return c+p.filter(f=>d[f]?.reconciled!==!0).length},0);l>0&&(i+=`<p class="hidden-bets-note">+ ${l} pending bet${l!==1?"s":""} hidden until settled</p>`)}return i}render(){const e=this.isCurrentUser?"leaderboard-card--current-user":"",a=this.unqualified?"leaderboard-card--unqualified":"",s=parseFloat(this.startingDollars||0),n=this.combinedBetslips;let r=0,o=0,i=0;n.forEach(_=>{const w=_.bet||[];if(w.length===0)return;const E=w[0];Object.keys(E).filter(I=>I!=="short_title").forEach(I=>{const R=E[I];if(!R||typeof R!="object")return;const C=parseFloat(R.stake||0),H=parseFloat(R.payout||0);r+=C,R.reconciled===!0?i+=H:o+=C})});const l=Math.max(0,s-r),c=_=>Math.abs(_)<.01?0:_,u=r-o,d=c(s-u+i),p=d,f=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",g=c(p-s),m=g>=0?"+":"",v=g>0?"profit-up":g<0?"profit-down":"profit-even",h=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
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

            <div class="leaderboard-card ${e} ${a}">
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
                        <div class="kpi-card__value ${v}">${m}TD$ ${Math.abs(g).toFixed(2)}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Bet Record</div>
                        <div class="kpi-card__value">${h.wins}W - ${h.losses}L</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">At Risk</div>
                        <div class="kpi-card__value ${h.pending>0?"kpi-card__value--risk":"kpi-card__value--none"}">${h.pending>0?"TD$ "+h.pendingStakes.toFixed(0):"TD$ 0"}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Max Win</div>
                        <div class="kpi-card__value ${h.pending>0?"kpi-card__value--max-win":"kpi-card__value--none"}">${h.pending>0?"TD$ "+h.pendingMaxPayout.toFixed(0):"TD$ 0"}</div>
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
        `}}customElements.define("bma-leaderboard-card",ia);class lc{static isPayout(e){if(!e?.Bet||!e?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:a,scope:s}=e.Bet,{home_team_id:n,home_team_score:r,away_team_id:o,away_team_score:i}=e.Match,l=a?.toUpperCase()||"",c=parseFloat(r)||0,u=parseFloat(i)||0;if(c===0&&u===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${l} bet:`,{home:`${n} (${c})`,away:`${o} (${u})`,scope:s}),l){case"MONEY":return this._evaluateMoneyline(s.team_id,n,o,c,u);case"SPREAD":return this._evaluateSpread(s.team_id,s.point,n,o,c,u);case"TOTAL":return this._evaluateTotal(s.over,s.under,c,u);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",l),!1}}static _evaluateMoneyline(e,a,s,n,r){if(e==="Draw"){const p=n===r;return console.log(`[CoreBetSlip.isPayout] MONEY (Draw) - ${p?"WON":"LOST"}`),p}const o=e===a,i=e===s;if(!o&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const l=n>r,c=r>n;if(n===r)return console.log("[CoreBetSlip.isPayout] MONEY - tie (push on non-soccer, loss on soccer)"),!1;const d=o&&l||i&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${d?"WON":"LOST"}`),d}static _evaluateSpread(e,a,s,n,r,o){const i=e===s,l=e===n;if(!i&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(a)||0;let u=r,d=o;i?u=r+c:d=o+c;const p=u>d,f=d>u;if(u===d)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const m=i&&p||l&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${m?"WON":"LOST"}`),m}static _evaluateTotal(e,a,s,n){const r=s+n,o=e&&e!=="";if(!o&&!(a&&a!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const l=parseFloat(o?e:a);if(r===l)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=r>l,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<l,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${l} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(e){if(!e?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:a,odds:s,stake:n}=e.Bet,r=a?.toUpperCase()||"",o=parseFloat(s)||0,i=parseFloat(n)||0;if(i<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",i),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let l=0;switch(r){case"SPREAD":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:i,payout:l});break;case"MONEY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:i,payout:l});break;case"TOTAL":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:i,payout:l});break;case"PROP":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:i,payout:l});break;case"PARLAY":l=this.calcAmericanOddsPayout(o,i),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:i,payout:l});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),l=0;break}return parseFloat(l.toFixed(2))}static calcAmericanOddsPayout(e,a){let s=0;return e>0?s=a*(e/100):e<0?s=a/(Math.abs(e)/100):s=0,a+s}static americanToDecimal(e){return e>0?e/100+1:e<0?100/Math.abs(e)+1:1}static calcImpliedProbability(e){return e>0?100/(e+100)*100:e<0?Math.abs(e)/(Math.abs(e)+100)*100:0}}function ui(t){return t!==null&&typeof t=="object"&&"constructor"in t&&t.constructor===Object}function Xr(t={},e={}){const a=["__proto__","constructor","prototype"];Object.keys(e).filter(s=>a.indexOf(s)<0).forEach(s=>{typeof t[s]>"u"?t[s]=e[s]:ui(e[s])&&ui(t[s])&&Object.keys(e[s]).length>0&&Xr(t[s],e[s])})}const cc={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function $t(){const t=typeof document<"u"?document:{};return Xr(t,cc),t}const xh={document:cc,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(t){return typeof setTimeout>"u"?(t(),null):setTimeout(t,0)},cancelAnimationFrame(t){typeof setTimeout>"u"||clearTimeout(t)}};function dt(){const t=typeof window<"u"?window:{};return Xr(t,xh),t}function Th(t=""){return t.trim().split(" ").filter(e=>!!e.trim())}function kh(t){const e=t;Object.keys(e).forEach(a=>{try{e[a]=null}catch{}try{delete e[a]}catch{}})}function dc(t,e=0){return setTimeout(t,e)}function sn(){return Date.now()}function Sh(t){const e=dt();let a;return e.getComputedStyle&&(a=e.getComputedStyle(t,null)),!a&&t.currentStyle&&(a=t.currentStyle),a||(a=t.style),a}function Eh(t,e="x"){const a=dt();let s,n,r;const o=Sh(t);return a.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(i=>i.replace(",",".")).join(", ")),r=new a.WebKitCSSMatrix(n==="none"?"":n)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),s=r.toString().split(",")),e==="x"&&(a.WebKitCSSMatrix?n=r.m41:s.length===16?n=parseFloat(s[12]):n=parseFloat(s[4])),e==="y"&&(a.WebKitCSSMatrix?n=r.m42:s.length===16?n=parseFloat(s[13]):n=parseFloat(s[5])),n||0}function Os(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"}function Ah(t){return typeof window<"u"&&typeof window.HTMLElement<"u"?t instanceof HTMLElement:t&&(t.nodeType===1||t.nodeType===11)}function ft(...t){const e=Object(t[0]);for(let a=1;a<t.length;a+=1){const s=t[a];if(s!=null&&!Ah(s)){const n=Object.keys(Object(s)).filter(r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype");for(let r=0,o=n.length;r<o;r+=1){const i=n[r],l=Object.getOwnPropertyDescriptor(s,i);l!==void 0&&l.enumerable&&(Os(e[i])&&Os(s[i])?s[i].__swiper__?e[i]=s[i]:ft(e[i],s[i]):!Os(e[i])&&Os(s[i])?(e[i]={},s[i].__swiper__?e[i]=s[i]:ft(e[i],s[i])):e[i]=s[i])}}}return e}function Ma(t,e,a){t.style.setProperty(e,a)}function uc({swiper:t,targetPosition:e,side:a}){const s=dt(),n=-t.translate;let r=null,o;const i=t.params.speed;t.wrapperEl.style.scrollSnapType="none",s.cancelAnimationFrame(t.cssModeFrameID);const l=e>n?"next":"prev",c=(d,p)=>l==="next"&&d>=p||l==="prev"&&d<=p,u=()=>{o=new Date().getTime(),r===null&&(r=o);const d=Math.max(Math.min((o-r)/i,1),0),p=.5-Math.cos(d*Math.PI)/2;let f=n+p*(e-n);if(c(f,e)&&(f=e),t.wrapperEl.scrollTo({[a]:f}),c(f,e)){t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[a]:f})}),s.cancelAnimationFrame(t.cssModeFrameID);return}t.cssModeFrameID=s.requestAnimationFrame(u)};u()}function Rt(t,e=""){const a=dt(),s=[...t.children];return a.HTMLSlotElement&&t instanceof HTMLSlotElement&&s.push(...t.assignedElements()),e?s.filter(n=>n.matches(e)):s}function Ch(t,e){const a=[e];for(;a.length>0;){const s=a.shift();if(t===s)return!0;a.push(...s.children,...s.shadowRoot?s.shadowRoot.children:[],...s.assignedElements?s.assignedElements():[])}}function Ph(t,e){const a=dt();let s=e.contains(t);return!s&&a.HTMLSlotElement&&e instanceof HTMLSlotElement&&(s=[...e.assignedElements()].includes(t),s||(s=Ch(t,e))),s}function nn(t){try{console.warn(t);return}catch{}}function rn(t,e=[]){const a=document.createElement(t);return a.classList.add(...Array.isArray(e)?e:Th(e)),a}function Oh(t,e){const a=[];for(;t.previousElementSibling;){const s=t.previousElementSibling;e?s.matches(e)&&a.push(s):a.push(s),t=s}return a}function Lh(t,e){const a=[];for(;t.nextElementSibling;){const s=t.nextElementSibling;e?s.matches(e)&&a.push(s):a.push(s),t=s}return a}function la(t,e){return dt().getComputedStyle(t,null).getPropertyValue(e)}function on(t){let e=t,a;if(e){for(a=0;(e=e.previousSibling)!==null;)e.nodeType===1&&(a+=1);return a}}function pc(t,e){const a=[];let s=t.parentElement;for(;s;)e?s.matches(e)&&a.push(s):a.push(s),s=s.parentElement;return a}function Tr(t,e,a){const s=dt();return t[e==="width"?"offsetWidth":"offsetHeight"]+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-right":"margin-top"))+parseFloat(s.getComputedStyle(t,null).getPropertyValue(e==="width"?"margin-left":"margin-bottom"))}function Ut(t){return(Array.isArray(t)?t:[t]).filter(e=>!!e)}function pi(t,e=""){typeof trustedTypes<"u"?t.innerHTML=trustedTypes.createPolicy("html",{createHTML:a=>a}).createHTML(e):t.innerHTML=e}let Yn;function Mh(){const t=dt(),e=$t();return{smoothScroll:e.documentElement&&e.documentElement.style&&"scrollBehavior"in e.documentElement.style,touch:!!("ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)}}function fc(){return Yn||(Yn=Mh()),Yn}let Kn;function Dh({userAgent:t}={}){const e=fc(),a=dt(),s=a.navigator.platform,n=t||a.navigator.userAgent,r={ios:!1,android:!1},o=a.screen.width,i=a.screen.height,l=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const u=n.match(/(iPod)(.*OS\s([\d_]+))?/),d=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=s==="Win32";let f=s==="MacIntel";const g=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&e.touch&&g.indexOf(`${o}x${i}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),l&&!p&&(r.os="android",r.android=!0),(c||d||u)&&(r.os="ios",r.ios=!0),r}function hc(t={}){return Kn||(Kn=Dh(t)),Kn}let Wn;function Rh(){const t=dt(),e=hc();let a=!1;function s(){const i=t.navigator.userAgent.toLowerCase();return i.indexOf("safari")>=0&&i.indexOf("chrome")<0&&i.indexOf("android")<0}if(s()){const i=String(t.navigator.userAgent);if(i.includes("Version/")){const[l,c]=i.split("Version/")[1].split(" ")[0].split(".").map(u=>Number(u));a=l<16||l===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent),r=s(),o=r||n&&e.ios;return{isSafari:a||r,needPerspectiveFix:a,need3dFix:o,isWebView:n}}function mc(){return Wn||(Wn=Rh()),Wn}function Ih({swiper:t,on:e,emit:a}){const s=dt();let n=null,r=null;const o=()=>{!t||t.destroyed||!t.initialized||(a("beforeResize"),a("resize"))},i=()=>{!t||t.destroyed||!t.initialized||(n=new ResizeObserver(u=>{r=s.requestAnimationFrame(()=>{const{width:d,height:p}=t;let f=d,g=p;u.forEach(({contentBoxSize:m,contentRect:v,target:h})=>{h&&h!==t.el||(f=v?v.width:(m[0]||m).inlineSize,g=v?v.height:(m[0]||m).blockSize)}),(f!==d||g!==p)&&o()})}),n.observe(t.el))},l=()=>{r&&s.cancelAnimationFrame(r),n&&n.unobserve&&t.el&&(n.unobserve(t.el),n=null)},c=()=>{!t||t.destroyed||!t.initialized||a("orientationchange")};e("init",()=>{if(t.params.resizeObserver&&typeof s.ResizeObserver<"u"){i();return}s.addEventListener("resize",o),s.addEventListener("orientationchange",c)}),e("destroy",()=>{l(),s.removeEventListener("resize",o),s.removeEventListener("orientationchange",c)})}function $h({swiper:t,extendParams:e,on:a,emit:s}){const n=[],r=dt(),o=(c,u={})=>{const d=r.MutationObserver||r.WebkitMutationObserver,p=new d(f=>{if(t.__preventObserver__)return;if(f.length===1){s("observerUpdate",f[0]);return}const g=function(){s("observerUpdate",f[0])};r.requestAnimationFrame?r.requestAnimationFrame(g):r.setTimeout(g,0)});p.observe(c,{attributes:typeof u.attributes>"u"?!0:u.attributes,childList:t.isElement||(typeof u.childList>"u"?!0:u).childList,characterData:typeof u.characterData>"u"?!0:u.characterData}),n.push(p)},i=()=>{if(t.params.observer){if(t.params.observeParents){const c=pc(t.hostEl);for(let u=0;u<c.length;u+=1)o(c[u])}o(t.hostEl,{childList:t.params.observeSlideChildren}),o(t.wrapperEl,{attributes:!1})}},l=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};e({observer:!1,observeParents:!1,observeSlideChildren:!1}),a("init",i),a("destroy",l)}var Nh={on(t,e,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const n=a?"unshift":"push";return t.split(" ").forEach(r=>{s.eventsListeners[r]||(s.eventsListeners[r]=[]),s.eventsListeners[r][n](e)}),s},once(t,e,a){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;function n(...r){s.off(t,n),n.__emitterProxy&&delete n.__emitterProxy,e.apply(s,r)}return n.__emitterProxy=e,s.on(t,n,a)},onAny(t,e){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const s=e?"unshift":"push";return a.eventsAnyListeners.indexOf(t)<0&&a.eventsAnyListeners[s](t),a},offAny(t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsAnyListeners)return e;const a=e.eventsAnyListeners.indexOf(t);return a>=0&&e.eventsAnyListeners.splice(a,1),e},off(t,e){const a=this;return!a.eventsListeners||a.destroyed||!a.eventsListeners||t.split(" ").forEach(s=>{typeof e>"u"?a.eventsListeners[s]=[]:a.eventsListeners[s]&&a.eventsListeners[s].forEach((n,r)=>{(n===e||n.__emitterProxy&&n.__emitterProxy===e)&&a.eventsListeners[s].splice(r,1)})}),a},emit(...t){const e=this;if(!e.eventsListeners||e.destroyed||!e.eventsListeners)return e;let a,s,n;return typeof t[0]=="string"||Array.isArray(t[0])?(a=t[0],s=t.slice(1,t.length),n=e):(a=t[0].events,s=t[0].data,n=t[0].context||e),s.unshift(n),(Array.isArray(a)?a:a.split(" ")).forEach(o=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(i=>{i.apply(n,[o,...s])}),e.eventsListeners&&e.eventsListeners[o]&&e.eventsListeners[o].forEach(i=>{i.apply(n,s)})}),e}};function Bh(){const t=this;let e,a;const s=t.el;typeof t.params.width<"u"&&t.params.width!==null?e=t.params.width:e=s.clientWidth,typeof t.params.height<"u"&&t.params.height!==null?a=t.params.height:a=s.clientHeight,!(e===0&&t.isHorizontal()||a===0&&t.isVertical())&&(e=e-parseInt(la(s,"padding-left")||0,10)-parseInt(la(s,"padding-right")||0,10),a=a-parseInt(la(s,"padding-top")||0,10)-parseInt(la(s,"padding-bottom")||0,10),Number.isNaN(e)&&(e=0),Number.isNaN(a)&&(a=0),Object.assign(t,{width:e,height:a,size:t.isHorizontal()?e:a}))}function Fh(){const t=this;function e(G,j){return parseFloat(G.getPropertyValue(t.getDirectionLabel(j))||0)}const a=t.params,{wrapperEl:s,slidesEl:n,rtlTranslate:r,wrongRTL:o}=t,i=t.virtual&&a.virtual.enabled,l=i?t.virtual.slides.length:t.slides.length,c=Rt(n,`.${t.params.slideClass}, swiper-slide`),u=i?t.virtual.slides.length:c.length;let d=[];const p=[],f=[];let g=a.slidesOffsetBefore;typeof g=="function"&&(g=a.slidesOffsetBefore.call(t));let m=a.slidesOffsetAfter;typeof m=="function"&&(m=a.slidesOffsetAfter.call(t));const v=t.snapGrid.length,h=t.slidesGrid.length,_=t.size-g-m;let w=a.spaceBetween,E=-g,I=0,R=0;if(typeof _>"u")return;typeof w=="string"&&w.indexOf("%")>=0?w=parseFloat(w.replace("%",""))/100*_:typeof w=="string"&&(w=parseFloat(w)),t.virtualSize=-w-g-m,c.forEach(G=>{r?G.style.marginLeft="":G.style.marginRight="",G.style.marginBottom="",G.style.marginTop=""}),a.centeredSlides&&a.cssMode&&(Ma(s,"--swiper-centered-offset-before",""),Ma(s,"--swiper-centered-offset-after","")),a.cssMode&&(Ma(s,"--swiper-slides-offset-before",`${g}px`),Ma(s,"--swiper-slides-offset-after",`${m}px`));const C=a.grid&&a.grid.rows>1&&t.grid;C?t.grid.initSlides(c):t.grid&&t.grid.unsetSlides();let H;const $=a.slidesPerView==="auto"&&a.breakpoints&&Object.keys(a.breakpoints).filter(G=>typeof a.breakpoints[G].slidesPerView<"u").length>0;for(let G=0;G<u;G+=1){H=0;const j=c[G];if(!(j&&(C&&t.grid.updateSlide(G,j,c),la(j,"display")==="none"))){if(i&&a.slidesPerView==="auto")a.virtual.slidesPerViewAutoSlideSize&&(H=a.virtual.slidesPerViewAutoSlideSize),H&&j&&(a.roundLengths&&(H=Math.floor(H)),j.style[t.getDirectionLabel("width")]=`${H}px`);else if(a.slidesPerView==="auto"){$&&(j.style[t.getDirectionLabel("width")]="");const F=getComputedStyle(j),q=j.style.transform,P=j.style.webkitTransform;if(q&&(j.style.transform="none"),P&&(j.style.webkitTransform="none"),a.roundLengths)H=t.isHorizontal()?Tr(j,"width"):Tr(j,"height");else{const A=e(F,"width"),S=e(F,"padding-left"),D=e(F,"padding-right"),L=e(F,"margin-left"),Y=e(F,"margin-right"),Q=F.getPropertyValue("box-sizing");if(Q&&Q==="border-box")H=A+L+Y;else{const{clientWidth:re,offsetWidth:Z}=j;H=A+S+D+L+Y+(Z-re)}}q&&(j.style.transform=q),P&&(j.style.webkitTransform=P),a.roundLengths&&(H=Math.floor(H))}else H=(_-(a.slidesPerView-1)*w)/a.slidesPerView,a.roundLengths&&(H=Math.floor(H)),j&&(j.style[t.getDirectionLabel("width")]=`${H}px`);j&&(j.swiperSlideSize=H),f.push(H),a.centeredSlides?(E=E+H/2+I/2+w,I===0&&G!==0&&(E=E-_/2-w),G===0&&(E=E-_/2-w),Math.abs(E)<1/1e3&&(E=0),a.roundLengths&&(E=Math.floor(E)),R%a.slidesPerGroup===0&&d.push(E),p.push(E)):(a.roundLengths&&(E=Math.floor(E)),(R-Math.min(t.params.slidesPerGroupSkip,R))%t.params.slidesPerGroup===0&&d.push(E),p.push(E),E=E+H+w),t.virtualSize+=H+w,I=H,R+=1}}if(t.virtualSize=Math.max(t.virtualSize,_)+m,r&&o&&(a.effect==="slide"||a.effect==="coverflow")&&(s.style.width=`${t.virtualSize+w}px`),a.setWrapperSize&&(s.style[t.getDirectionLabel("width")]=`${t.virtualSize+w}px`),C&&t.grid.updateWrapperSize(H,d),!a.centeredSlides){const G=a.slidesPerView!=="auto"&&a.slidesPerView%1!==0,j=a.snapToSlideEdge&&!a.loop&&(a.slidesPerView==="auto"||G);let F=d.length;if(j){let P;if(a.slidesPerView==="auto"){P=1;let A=0;for(let S=f.length-1;S>=0&&(A+=f[S]+(S<f.length-1?w:0),A<=_);S-=1)P=f.length-S}else P=Math.floor(a.slidesPerView);F=Math.max(u-P,0)}const q=[];for(let P=0;P<d.length;P+=1){let A=d[P];a.roundLengths&&(A=Math.floor(A)),j?P<=F&&q.push(A):d[P]<=t.virtualSize-_&&q.push(A)}d=q,Math.floor(t.virtualSize-_)-Math.floor(d[d.length-1])>1&&(j||d.push(t.virtualSize-_))}if(i&&a.loop){const G=f[0]+w;if(a.slidesPerGroup>1){const j=Math.ceil((t.virtual.slidesBefore+t.virtual.slidesAfter)/a.slidesPerGroup),F=G*a.slidesPerGroup;for(let q=0;q<j;q+=1)d.push(d[d.length-1]+F)}for(let j=0;j<t.virtual.slidesBefore+t.virtual.slidesAfter;j+=1)a.slidesPerGroup===1&&d.push(d[d.length-1]+G),p.push(p[p.length-1]+G),t.virtualSize+=G}if(d.length===0&&(d=[0]),w!==0){const G=t.isHorizontal()&&r?"marginLeft":t.getDirectionLabel("marginRight");c.filter((j,F)=>!a.cssMode||a.loop?!0:F!==c.length-1).forEach(j=>{j.style[G]=`${w}px`})}if(a.centeredSlides&&a.centeredSlidesBounds){let G=0;f.forEach(F=>{G+=F+(w||0)}),G-=w;const j=G>_?G-_:0;d=d.map(F=>F<=0?-g:F>j?j+m:F)}if(a.centerInsufficientSlides){let G=0;if(f.forEach(j=>{G+=j+(w||0)}),G-=w,G<_){const j=(_-G)/2;d.forEach((F,q)=>{d[q]=F-j}),p.forEach((F,q)=>{p[q]=F+j})}}if(Object.assign(t,{slides:c,snapGrid:d,slidesGrid:p,slidesSizesGrid:f}),a.centeredSlides&&a.cssMode&&!a.centeredSlidesBounds){Ma(s,"--swiper-centered-offset-before",`${-d[0]}px`),Ma(s,"--swiper-centered-offset-after",`${t.size/2-f[f.length-1]/2}px`);const G=-t.snapGrid[0],j=-t.slidesGrid[0];t.snapGrid=t.snapGrid.map(F=>F+G),t.slidesGrid=t.slidesGrid.map(F=>F+j)}if(u!==l&&t.emit("slidesLengthChange"),d.length!==v&&(t.params.watchOverflow&&t.checkOverflow(),t.emit("snapGridLengthChange")),p.length!==h&&t.emit("slidesGridLengthChange"),a.watchSlidesProgress&&t.updateSlidesOffset(),t.emit("slidesUpdated"),!i&&!a.cssMode&&(a.effect==="slide"||a.effect==="fade")){const G=`${a.containerModifierClass}backface-hidden`,j=t.el.classList.contains(G);u<=a.maxBackfaceHiddenSlides?j||t.el.classList.add(G):j&&t.el.classList.remove(G)}}function zh(t){const e=this,a=[],s=e.virtual&&e.params.virtual.enabled;let n=0,r;typeof t=="number"?e.setTransition(t):t===!0&&e.setTransition(e.params.speed);const o=i=>s?e.slides[e.getSlideIndexByData(i)]:e.slides[i];if(e.params.slidesPerView!=="auto"&&e.params.slidesPerView>1)if(e.params.centeredSlides)(e.visibleSlides||[]).forEach(i=>{a.push(i)});else for(r=0;r<Math.ceil(e.params.slidesPerView);r+=1){const i=e.activeIndex+r;if(i>e.slides.length&&!s)break;a.push(o(i))}else a.push(o(e.activeIndex));for(r=0;r<a.length;r+=1)if(typeof a[r]<"u"){const i=a[r].offsetHeight;n=i>n?i:n}(n||n===0)&&(e.wrapperEl.style.height=`${n}px`)}function Hh(){const t=this,e=t.slides,a=t.isElement?t.isHorizontal()?t.wrapperEl.offsetLeft:t.wrapperEl.offsetTop:0;for(let s=0;s<e.length;s+=1)e[s].swiperSlideOffset=(t.isHorizontal()?e[s].offsetLeft:e[s].offsetTop)-a-t.cssOverflowAdjustment()}const fi=(t,e,a)=>{e&&!t.classList.contains(a)?t.classList.add(a):!e&&t.classList.contains(a)&&t.classList.remove(a)};function Uh(t=this&&this.translate||0){const e=this,a=e.params,{slides:s,rtlTranslate:n,snapGrid:r}=e;if(s.length===0)return;typeof s[0].swiperSlideOffset>"u"&&e.updateSlidesOffset();let o=-t;n&&(o=t),e.visibleSlidesIndexes=[],e.visibleSlides=[];let i=a.spaceBetween;typeof i=="string"&&i.indexOf("%")>=0?i=parseFloat(i.replace("%",""))/100*e.size:typeof i=="string"&&(i=parseFloat(i));for(let l=0;l<s.length;l+=1){const c=s[l];let u=c.swiperSlideOffset;a.cssMode&&a.centeredSlides&&(u-=s[0].swiperSlideOffset);const d=(o+(a.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+i),p=(o-r[0]+(a.centeredSlides?e.minTranslate():0)-u)/(c.swiperSlideSize+i),f=-(o-u),g=f+e.slidesSizesGrid[l],m=f>=0&&f<=e.size-e.slidesSizesGrid[l],v=f>=0&&f<e.size-1||g>1&&g<=e.size||f<=0&&g>=e.size;v&&(e.visibleSlides.push(c),e.visibleSlidesIndexes.push(l)),fi(c,v,a.slideVisibleClass),fi(c,m,a.slideFullyVisibleClass),c.progress=n?-d:d,c.originalProgress=n?-p:p}}function Gh(t){const e=this;if(typeof t>"u"){const u=e.rtlTranslate?-1:1;t=e&&e.translate&&e.translate*u||0}const a=e.params,s=e.maxTranslate()-e.minTranslate();let{progress:n,isBeginning:r,isEnd:o,progressLoop:i}=e;const l=r,c=o;if(s===0)n=0,r=!0,o=!0;else{n=(t-e.minTranslate())/s;const u=Math.abs(t-e.minTranslate())<1,d=Math.abs(t-e.maxTranslate())<1;r=u||n<=0,o=d||n>=1,u&&(n=0),d&&(n=1)}if(a.loop){const u=e.getSlideIndexByData(0),d=e.getSlideIndexByData(e.slides.length-1),p=e.slidesGrid[u],f=e.slidesGrid[d],g=e.slidesGrid[e.slidesGrid.length-1],m=Math.abs(t);m>=p?i=(m-p)/g:i=(m+g-f)/g,i>1&&(i-=1)}Object.assign(e,{progress:n,progressLoop:i,isBeginning:r,isEnd:o}),(a.watchSlidesProgress||a.centeredSlides&&a.autoHeight)&&e.updateSlidesProgress(t),r&&!l&&e.emit("reachBeginning toEdge"),o&&!c&&e.emit("reachEnd toEdge"),(l&&!r||c&&!o)&&e.emit("fromEdge"),e.emit("progress",n)}const Jn=(t,e,a)=>{e&&!t.classList.contains(a)?t.classList.add(a):!e&&t.classList.contains(a)&&t.classList.remove(a)};function jh(){const t=this,{slides:e,params:a,slidesEl:s,activeIndex:n}=t,r=t.virtual&&a.virtual.enabled,o=t.grid&&a.grid&&a.grid.rows>1,i=d=>Rt(s,`.${a.slideClass}${d}, swiper-slide${d}`)[0];let l,c,u;if(r)if(a.loop){let d=n-t.virtual.slidesBefore;d<0&&(d=t.virtual.slides.length+d),d>=t.virtual.slides.length&&(d-=t.virtual.slides.length),l=i(`[data-swiper-slide-index="${d}"]`)}else l=i(`[data-swiper-slide-index="${n}"]`);else o?(l=e.find(d=>d.column===n),u=e.find(d=>d.column===n+1),c=e.find(d=>d.column===n-1)):l=e[n];l&&(o||(u=Lh(l,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!u&&(u=e[0]),c=Oh(l,`.${a.slideClass}, swiper-slide`)[0],a.loop&&!c===0&&(c=e[e.length-1]))),e.forEach(d=>{Jn(d,d===l,a.slideActiveClass),Jn(d,d===u,a.slideNextClass),Jn(d,d===c,a.slidePrevClass)}),t.emitSlidesClasses()}const Us=(t,e)=>{if(!t||t.destroyed||!t.params)return;const a=()=>t.isElement?"swiper-slide":`.${t.params.slideClass}`,s=e.closest(a());if(s){let n=s.querySelector(`.${t.params.lazyPreloaderClass}`);!n&&t.isElement&&(s.shadowRoot?n=s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{s.shadowRoot&&(n=s.shadowRoot.querySelector(`.${t.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},Xn=(t,e)=>{if(!t.slides[e])return;const a=t.slides[e].querySelector('[loading="lazy"]');a&&a.removeAttribute("loading")},kr=t=>{if(!t||t.destroyed||!t.params)return;let e=t.params.lazyPreloadPrevNext;const a=t.slides.length;if(!a||!e||e<0)return;e=Math.min(e,a);const s=t.params.slidesPerView==="auto"?t.slidesPerViewDynamic():Math.ceil(t.params.slidesPerView),n=t.activeIndex;if(t.params.grid&&t.params.grid.rows>1){const o=n,i=[o-e];i.push(...Array.from({length:e}).map((l,c)=>o+s+c)),t.slides.forEach((l,c)=>{i.includes(l.column)&&Xn(t,c)});return}const r=n+s-1;if(t.params.rewind||t.params.loop)for(let o=n-e;o<=r+e;o+=1){const i=(o%a+a)%a;(i<n||i>r)&&Xn(t,i)}else for(let o=Math.max(n-e,0);o<=Math.min(r+e,a-1);o+=1)o!==n&&(o>r||o<n)&&Xn(t,o)};function qh(t){const{slidesGrid:e,params:a}=t,s=t.rtlTranslate?t.translate:-t.translate;let n;for(let r=0;r<e.length;r+=1)typeof e[r+1]<"u"?s>=e[r]&&s<e[r+1]-(e[r+1]-e[r])/2?n=r:s>=e[r]&&s<e[r+1]&&(n=r+1):s>=e[r]&&(n=r);return a.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Vh(t){const e=this,a=e.rtlTranslate?e.translate:-e.translate,{snapGrid:s,params:n,activeIndex:r,realIndex:o,snapIndex:i}=e;let l=t,c;const u=f=>{let g=f-e.virtual.slidesBefore;return g<0&&(g=e.virtual.slides.length+g),g>=e.virtual.slides.length&&(g-=e.virtual.slides.length),g};if(typeof l>"u"&&(l=qh(e)),s.indexOf(a)>=0)c=s.indexOf(a);else{const f=Math.min(n.slidesPerGroupSkip,l);c=f+Math.floor((l-f)/n.slidesPerGroup)}if(c>=s.length&&(c=s.length-1),l===r&&!e.params.loop){c!==i&&(e.snapIndex=c,e.emit("snapIndexChange"));return}if(l===r&&e.params.loop&&e.virtual&&e.params.virtual.enabled){e.realIndex=u(l);return}const d=e.grid&&n.grid&&n.grid.rows>1;let p;if(e.virtual&&n.virtual.enabled)n.loop?p=u(l):p=l;else if(d){const f=e.slides.find(m=>m.column===l);let g=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(g)&&(g=Math.max(e.slides.indexOf(f),0)),p=Math.floor(g/n.grid.rows)}else if(e.slides[l]){const f=e.slides[l].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=l}else p=l;Object.assign(e,{previousSnapIndex:i,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:r,activeIndex:l}),e.initialized&&kr(e),e.emit("activeIndexChange"),e.emit("snapIndexChange"),(e.initialized||e.params.runCallbacksOnInit)&&(o!==p&&e.emit("realIndexChange"),e.emit("slideChange"))}function Yh(t,e){const a=this,s=a.params;let n=t.closest(`.${s.slideClass}, swiper-slide`);!n&&a.isElement&&e&&e.length>1&&e.includes(t)&&[...e.slice(e.indexOf(t)+1,e.length)].forEach(i=>{!n&&i.matches&&i.matches(`.${s.slideClass}, swiper-slide`)&&(n=i)});let r=!1,o;if(n){for(let i=0;i<a.slides.length;i+=1)if(a.slides[i]===n){r=!0,o=i;break}}if(n&&r)a.clickedSlide=n,a.virtual&&a.params.virtual.enabled?a.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):a.clickedIndex=o;else{a.clickedSlide=void 0,a.clickedIndex=void 0;return}s.slideToClickedSlide&&a.clickedIndex!==void 0&&a.clickedIndex!==a.activeIndex&&a.slideToClickedSlide()}var Kh={updateSize:Bh,updateSlides:Fh,updateAutoHeight:zh,updateSlidesOffset:Hh,updateSlidesProgress:Uh,updateProgress:Gh,updateSlidesClasses:jh,updateActiveIndex:Vh,updateClickedSlide:Yh};function Wh(t=this.isHorizontal()?"x":"y"){const e=this,{params:a,rtlTranslate:s,translate:n,wrapperEl:r}=e;if(a.virtualTranslate)return s?-n:n;if(a.cssMode)return n;let o=Eh(r,t);return o+=e.cssOverflowAdjustment(),s&&(o=-o),o||0}function Jh(t,e){const a=this,{rtlTranslate:s,params:n,wrapperEl:r,progress:o}=a;let i=0,l=0;const c=0;a.isHorizontal()?i=s?-t:t:l=t,n.roundLengths&&(i=Math.floor(i),l=Math.floor(l)),a.previousTranslate=a.translate,a.translate=a.isHorizontal()?i:l,n.cssMode?r[a.isHorizontal()?"scrollLeft":"scrollTop"]=a.isHorizontal()?-i:-l:n.virtualTranslate||(a.isHorizontal()?i-=a.cssOverflowAdjustment():l-=a.cssOverflowAdjustment(),r.style.transform=`translate3d(${i}px, ${l}px, ${c}px)`);let u;const d=a.maxTranslate()-a.minTranslate();d===0?u=0:u=(t-a.minTranslate())/d,u!==o&&a.updateProgress(t),a.emit("setTranslate",a.translate,e)}function Xh(){return-this.snapGrid[0]}function Qh(){return-this.snapGrid[this.snapGrid.length-1]}function Zh(t=0,e=this.params.speed,a=!0,s=!0,n){const r=this,{params:o,wrapperEl:i}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const l=r.minTranslate(),c=r.maxTranslate();let u;if(s&&t>l?u=l:s&&t<c?u=c:u=t,r.updateProgress(u),o.cssMode){const d=r.isHorizontal();if(e===0)i[d?"scrollLeft":"scrollTop"]=-u;else{if(!r.support.smoothScroll)return uc({swiper:r,targetPosition:-u,side:d?"left":"top"}),!0;i.scrollTo({[d?"left":"top"]:-u,behavior:"smooth"})}return!0}return e===0?(r.setTransition(0),r.setTranslate(u),a&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionEnd"))):(r.setTransition(e),r.setTranslate(u),a&&(r.emit("beforeTransitionStart",e,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,a&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var em={getTranslate:Wh,setTranslate:Jh,minTranslate:Xh,maxTranslate:Qh,translateTo:Zh};function tm(t,e){const a=this;a.params.cssMode||(a.wrapperEl.style.transitionDuration=`${t}ms`,a.wrapperEl.style.transitionDelay=t===0?"0ms":""),a.emit("setTransition",t,e)}function gc({swiper:t,runCallbacks:e,direction:a,step:s}){const{activeIndex:n,previousIndex:r}=t;let o=a;o||(n>r?o="next":n<r?o="prev":o="reset"),t.emit(`transition${s}`),e&&o==="reset"?t.emit(`slideResetTransition${s}`):e&&n!==r&&(t.emit(`slideChangeTransition${s}`),o==="next"?t.emit(`slideNextTransition${s}`):t.emit(`slidePrevTransition${s}`))}function am(t=!0,e){const a=this,{params:s}=a;s.cssMode||(s.autoHeight&&a.updateAutoHeight(),gc({swiper:a,runCallbacks:t,direction:e,step:"Start"}))}function sm(t=!0,e){const a=this,{params:s}=a;a.animating=!1,!s.cssMode&&(a.setTransition(0),gc({swiper:a,runCallbacks:t,direction:e,step:"End"}))}var nm={setTransition:tm,transitionStart:am,transitionEnd:sm};function rm(t=0,e,a=!0,s,n){typeof t=="string"&&(t=parseInt(t,10));const r=this;let o=t;o<0&&(o=0);const{params:i,snapGrid:l,slidesGrid:c,previousIndex:u,activeIndex:d,rtlTranslate:p,wrapperEl:f,enabled:g}=r;if(!g&&!s&&!n||r.destroyed||r.animating&&i.preventInteractionOnTransition)return!1;typeof e>"u"&&(e=r.params.speed);const m=Math.min(r.params.slidesPerGroupSkip,o);let v=m+Math.floor((o-m)/r.params.slidesPerGroup);v>=l.length&&(v=l.length-1);const h=-l[v];if(i.normalizeSlideIndex)for(let C=0;C<c.length;C+=1){const H=-Math.floor(h*100),$=Math.floor(c[C]*100),G=Math.floor(c[C+1]*100);typeof c[C+1]<"u"?H>=$&&H<G-(G-$)/2?o=C:H>=$&&H<G&&(o=C+1):H>=$&&(o=C)}if(r.initialized&&o!==d&&(!r.allowSlideNext&&(p?h>r.translate&&h>r.minTranslate():h<r.translate&&h<r.minTranslate())||!r.allowSlidePrev&&h>r.translate&&h>r.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&a&&r.emit("beforeSlideChangeStart"),r.updateProgress(h);let _;o>d?_="next":o<d?_="prev":_="reset";const w=r.virtual&&r.params.virtual.enabled;if(!(w&&n)&&(p&&-h===r.translate||!p&&h===r.translate))return r.updateActiveIndex(o),i.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),i.effect!=="slide"&&r.setTranslate(h),_!=="reset"&&(r.transitionStart(a,_),r.transitionEnd(a,_)),!1;if(i.cssMode){const C=r.isHorizontal(),H=p?h:-h;if(e===0)w&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),w&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[C?"scrollLeft":"scrollTop"]=H})):f[C?"scrollLeft":"scrollTop"]=H,w&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return uc({swiper:r,targetPosition:H,side:C?"left":"top"}),!0;f.scrollTo({[C?"left":"top"]:H,behavior:"smooth"})}return!0}const R=mc().isSafari;return w&&!n&&R&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(e),r.setTranslate(h),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",e,s),r.transitionStart(a,_),e===0?r.transitionEnd(a,_):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(H){!r||r.destroyed||H.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(a,_))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function om(t=0,e,a=!0,s){typeof t=="string"&&(t=parseInt(t,10));const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let o=t;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)o=o+n.virtual.slidesBefore;else{let i;if(r){const m=o*n.params.grid.rows;i=n.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===m).column}else i=n.getSlideIndexByData(o);const l=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c,slidesOffsetBefore:u,slidesOffsetAfter:d}=n.params,p=c||!!u||!!d;let f=n.params.slidesPerView;f==="auto"?f=n.slidesPerViewDynamic():(f=Math.ceil(parseFloat(n.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let g=l-i<f;if(p&&(g=g||i<Math.ceil(f/2)),s&&p&&n.params.slidesPerView!=="auto"&&!r&&(g=!1),g){const m=p?i<n.activeIndex?"prev":"next":i-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?i+1:i-l+1,slideRealIndex:m==="next"?n.realIndex:void 0})}if(r){const m=o*n.params.grid.rows;o=n.slides.find(v=>v.getAttribute("data-swiper-slide-index")*1===m).column}else o=n.getSlideIndexByData(o)}return requestAnimationFrame(()=>{n.slideTo(o,e,a,s)}),n}function im(t,e=!0,a){const s=this,{enabled:n,params:r,animating:o}=s;if(!n||s.destroyed)return s;typeof t>"u"&&(t=s.params.speed);let i=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(i=Math.max(s.slidesPerViewDynamic("current",!0),1));const l=s.activeIndex<r.slidesPerGroupSkip?1:i,c=s.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(s.loopFix({direction:"next"}),s._clientLeft=s.wrapperEl.clientLeft,s.activeIndex===s.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{s.slideTo(s.activeIndex+l,t,e,a)}),!0}return r.rewind&&s.isEnd?s.slideTo(0,t,e,a):s.slideTo(s.activeIndex+l,t,e,a)}function lm(t,e=!0,a){const s=this,{params:n,snapGrid:r,slidesGrid:o,rtlTranslate:i,enabled:l,animating:c}=s;if(!l||s.destroyed)return s;typeof t>"u"&&(t=s.params.speed);const u=s.virtual&&n.virtual.enabled;if(n.loop){if(c&&!u&&n.loopPreventsSliding)return!1;s.loopFix({direction:"prev"}),s._clientLeft=s.wrapperEl.clientLeft}const d=i?s.translate:-s.translate;function p(_){return _<0?-Math.floor(Math.abs(_)):Math.floor(_)}const f=p(d),g=r.map(_=>p(_)),m=n.freeMode&&n.freeMode.enabled;let v=r[g.indexOf(f)-1];if(typeof v>"u"&&(n.cssMode||m)){let _;r.forEach((w,E)=>{f>=w&&(_=E)}),typeof _<"u"&&(v=m?r[_]:r[_>0?_-1:_])}let h=0;if(typeof v<"u"&&(h=o.indexOf(v),h<0&&(h=s.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(h=h-s.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),n.rewind&&s.isBeginning){const _=s.params.virtual&&s.params.virtual.enabled&&s.virtual?s.virtual.slides.length-1:s.slides.length-1;return s.slideTo(_,t,e,a)}else if(n.loop&&s.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{s.slideTo(h,t,e,a)}),!0;return s.slideTo(h,t,e,a)}function cm(t,e=!0,a){const s=this;if(!s.destroyed)return typeof t>"u"&&(t=s.params.speed),s.slideTo(s.activeIndex,t,e,a)}function dm(t,e=!0,a,s=.5){const n=this;if(n.destroyed)return;typeof t>"u"&&(t=n.params.speed);let r=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,r),i=o+Math.floor((r-o)/n.params.slidesPerGroup),l=n.rtlTranslate?n.translate:-n.translate;if(l>=n.snapGrid[i]){const c=n.snapGrid[i],u=n.snapGrid[i+1];l-c>(u-c)*s&&(r+=n.params.slidesPerGroup)}else{const c=n.snapGrid[i-1],u=n.snapGrid[i];l-c<=(u-c)*s&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,t,e,a)}function um(){const t=this;if(t.destroyed)return;const{params:e,slidesEl:a}=t,s=e.slidesPerView==="auto"?t.slidesPerViewDynamic():e.slidesPerView;let n=t.getSlideIndexWhenGrid(t.clickedIndex),r;const o=t.isElement?"swiper-slide":`.${e.slideClass}`,i=t.grid&&t.params.grid&&t.params.grid.rows>1;if(e.loop){if(t.animating)return;r=parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"),10),e.centeredSlides?t.slideToLoop(r):n>(i?(t.slides.length-s)/2-(t.params.grid.rows-1):t.slides.length-s)?(t.loopFix(),n=t.getSlideIndex(Rt(a,`${o}[data-swiper-slide-index="${r}"]`)[0]),dc(()=>{t.slideTo(n)})):t.slideTo(n)}else t.slideTo(n)}var pm={slideTo:rm,slideToLoop:om,slideNext:im,slidePrev:lm,slideReset:cm,slideToClosest:dm,slideToClickedSlide:um};function fm(t,e){const a=this,{params:s,slidesEl:n}=a;if(!s.loop||a.virtual&&a.params.virtual.enabled)return;const r=()=>{Rt(n,`.${s.slideClass}, swiper-slide`).forEach((g,m)=>{g.setAttribute("data-swiper-slide-index",m)})},o=()=>{const f=Rt(n,`.${s.slideBlankClass}`);f.forEach(g=>{g.remove()}),f.length>0&&(a.recalcSlides(),a.updateSlides())},i=a.grid&&s.grid&&s.grid.rows>1;s.loopAddBlankSlides&&(s.slidesPerGroup>1||i)&&o();const l=s.slidesPerGroup*(i?s.grid.rows:1),c=a.slides.length%l!==0,u=i&&a.slides.length%s.grid.rows!==0,d=f=>{for(let g=0;g<f;g+=1){const m=a.isElement?rn("swiper-slide",[s.slideBlankClass]):rn("div",[s.slideClass,s.slideBlankClass]);a.slidesEl.append(m)}};if(c){if(s.loopAddBlankSlides){const f=l-a.slides.length%l;d(f),a.recalcSlides(),a.updateSlides()}else nn("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(u){if(s.loopAddBlankSlides){const f=s.grid.rows-a.slides.length%s.grid.rows;d(f),a.recalcSlides(),a.updateSlides()}else nn("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const p=s.centeredSlides||!!s.slidesOffsetBefore||!!s.slidesOffsetAfter;a.loopFix({slideRealIndex:t,direction:p?void 0:"next",initial:e})}function hm({slideRealIndex:t,slideTo:e=!0,direction:a,setTranslate:s,activeSlideIndex:n,initial:r,byController:o,byMousewheel:i}={}){const l=this;if(!l.params.loop)return;l.emit("beforeLoopFix");const{slides:c,allowSlidePrev:u,allowSlideNext:d,slidesEl:p,params:f}=l,{centeredSlides:g,slidesOffsetBefore:m,slidesOffsetAfter:v,initialSlide:h}=f,_=g||!!m||!!v;if(l.allowSlidePrev=!0,l.allowSlideNext=!0,l.virtual&&f.virtual.enabled){e&&(!_&&l.snapIndex===0?l.slideTo(l.virtual.slides.length,0,!1,!0):_&&l.snapIndex<f.slidesPerView?l.slideTo(l.virtual.slides.length+l.snapIndex,0,!1,!0):l.snapIndex===l.snapGrid.length-1&&l.slideTo(l.virtual.slidesBefore,0,!1,!0)),l.allowSlidePrev=u,l.allowSlideNext=d,l.emit("loopFix");return}let w=f.slidesPerView;w==="auto"?w=l.slidesPerViewDynamic():(w=Math.ceil(parseFloat(f.slidesPerView,10)),_&&w%2===0&&(w=w+1));const E=f.slidesPerGroupAuto?w:f.slidesPerGroup;let I=_?Math.max(E,Math.ceil(w/2)):E;I%E!==0&&(I+=E-I%E),I+=f.loopAdditionalSlides,l.loopedSlides=I;const R=l.grid&&f.grid&&f.grid.rows>1;c.length<w+I||l.params.effect==="cards"&&c.length<w+I*2?nn("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):R&&f.grid.fill==="row"&&nn("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const C=[],H=[],$=R?Math.ceil(c.length/f.grid.rows):c.length,G=r&&$-h<w&&!_;let j=G?h:l.activeIndex;typeof n>"u"?n=l.getSlideIndex(c.find(L=>L.classList.contains(f.slideActiveClass))):j=n;const F=a==="next"||!a,q=a==="prev"||!a;let P=0,A=0;const D=(R?c[n].column:n)+(_&&typeof s>"u"?-w/2+.5:0);if(D<I){P=Math.max(I-D,E);for(let L=0;L<I-D;L+=1){const Y=L-Math.floor(L/$)*$;if(R){const Q=$-Y-1;for(let re=c.length-1;re>=0;re-=1)c[re].column===Q&&C.push(re)}else C.push($-Y-1)}}else if(D+w>$-I){A=Math.max(D-($-I*2),E),G&&(A=Math.max(A,w-$+h+1));for(let L=0;L<A;L+=1){const Y=L-Math.floor(L/$)*$;R?c.forEach((Q,re)=>{Q.column===Y&&H.push(re)}):H.push(Y)}}if(l.__preventObserver__=!0,requestAnimationFrame(()=>{l.__preventObserver__=!1}),l.params.effect==="cards"&&c.length<w+I*2&&(H.includes(n)&&H.splice(H.indexOf(n),1),C.includes(n)&&C.splice(C.indexOf(n),1)),q&&C.forEach(L=>{c[L].swiperLoopMoveDOM=!0,p.prepend(c[L]),c[L].swiperLoopMoveDOM=!1}),F&&H.forEach(L=>{c[L].swiperLoopMoveDOM=!0,p.append(c[L]),c[L].swiperLoopMoveDOM=!1}),l.recalcSlides(),f.slidesPerView==="auto"?l.updateSlides():R&&(C.length>0&&q||H.length>0&&F)&&l.slides.forEach((L,Y)=>{l.grid.updateSlide(Y,L,l.slides)}),f.watchSlidesProgress&&l.updateSlidesOffset(),e){if(C.length>0&&q){if(typeof t>"u"){const L=l.slidesGrid[j],Q=l.slidesGrid[j+P]-L;i?l.setTranslate(l.translate-Q):(l.slideTo(j+Math.ceil(P),0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-Q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-Q))}else if(s){const L=R?C.length/f.grid.rows:C.length;l.slideTo(l.activeIndex+L,0,!1,!0),l.touchEventsData.currentTranslate=l.translate}}else if(H.length>0&&F)if(typeof t>"u"){const L=l.slidesGrid[j],Q=l.slidesGrid[j-A]-L;i?l.setTranslate(l.translate-Q):(l.slideTo(j-A,0,!1,!0),s&&(l.touchEventsData.startTranslate=l.touchEventsData.startTranslate-Q,l.touchEventsData.currentTranslate=l.touchEventsData.currentTranslate-Q))}else{const L=R?H.length/f.grid.rows:H.length;l.slideTo(l.activeIndex-L,0,!1,!0)}}if(l.allowSlidePrev=u,l.allowSlideNext=d,l.controller&&l.controller.control&&!o){const L={slideRealIndex:t,direction:a,setTranslate:s,activeSlideIndex:n,byController:!0};Array.isArray(l.controller.control)?l.controller.control.forEach(Y=>{!Y.destroyed&&Y.params.loop&&Y.loopFix({...L,slideTo:Y.params.slidesPerView===f.slidesPerView?e:!1})}):l.controller.control instanceof l.constructor&&l.controller.control.params.loop&&l.controller.control.loopFix({...L,slideTo:l.controller.control.params.slidesPerView===f.slidesPerView?e:!1})}l.emit("loopFix")}function mm(){const t=this,{params:e,slidesEl:a}=t;if(!e.loop||!a||t.virtual&&t.params.virtual.enabled)return;t.recalcSlides();const s=[];t.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;s[r]=n}),t.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),s.forEach(n=>{a.append(n)}),t.recalcSlides(),t.slideTo(t.realIndex,0)}var gm={loopCreate:fm,loopFix:hm,loopDestroy:mm};function bm(t){const e=this;if(!e.params.simulateTouch||e.params.watchOverflow&&e.isLocked||e.params.cssMode)return;const a=e.params.touchEventsTarget==="container"?e.el:e.wrapperEl;e.isElement&&(e.__preventObserver__=!0),a.style.cursor="move",a.style.cursor=t?"grabbing":"grab",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1})}function _m(){const t=this;t.params.watchOverflow&&t.isLocked||t.params.cssMode||(t.isElement&&(t.__preventObserver__=!0),t[t.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1}))}var vm={setGrabCursor:bm,unsetGrabCursor:_m};function ym(t,e=this){function a(s){if(!s||s===$t()||s===dt())return null;s.assignedSlot&&(s=s.assignedSlot);const n=s.closest(t);return!n&&!s.getRootNode?null:n||a(s.getRootNode().host)}return a(e)}function hi(t,e,a){const s=dt(),{params:n}=t,r=n.edgeSwipeDetection,o=n.edgeSwipeThreshold;return r&&(a<=o||a>=s.innerWidth-o)?r==="prevent"?(e.preventDefault(),!0):!1:!0}function wm(t){const e=this,a=$t();let s=t;s.originalEvent&&(s=s.originalEvent);const n=e.touchEventsData;if(s.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==s.pointerId)return;n.pointerId=s.pointerId}else s.type==="touchstart"&&s.targetTouches.length===1&&(n.touchId=s.targetTouches[0].identifier);if(s.type==="touchstart"){hi(e,s,s.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:i}=e;if(!i||!r.simulateTouch&&s.pointerType==="mouse"||e.animating&&r.preventInteractionOnTransition)return;!e.animating&&r.cssMode&&r.loop&&e.loopFix();let l=s.target;if(r.touchEventsTarget==="wrapper"&&!Ph(l,e.wrapperEl)||"which"in s&&s.which===3||"button"in s&&s.button>0||n.isTouched&&n.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",u=s.composedPath?s.composedPath():s.path;c&&s.target&&s.target.shadowRoot&&u&&(l=u[0]);const d=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(s.target&&s.target.shadowRoot);if(r.noSwiping&&(p?ym(d,l):l.closest(d))){e.allowClick=!0;return}if(r.swipeHandler&&!l.closest(r.swipeHandler))return;o.currentX=s.pageX,o.currentY=s.pageY;const f=o.currentX,g=o.currentY;if(!hi(e,s,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=g,n.touchStartTime=sn(),e.allowClick=!0,e.updateSize(),e.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let m=!0;l.matches(n.focusableElements)&&(m=!1,l.nodeName==="SELECT"&&(n.isTouched=!1)),a.activeElement&&a.activeElement.matches(n.focusableElements)&&a.activeElement!==l&&(s.pointerType==="mouse"||s.pointerType!=="mouse"&&!l.matches(n.focusableElements))&&a.activeElement.blur();const v=m&&e.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||v)&&!l.isContentEditable&&s.preventDefault(),r.freeMode&&r.freeMode.enabled&&e.freeMode&&e.animating&&!r.cssMode&&e.freeMode.onTouchStart(),e.emit("touchStart",s)}function xm(t){const e=$t(),a=this,s=a.touchEventsData,{params:n,touches:r,rtlTranslate:o,enabled:i}=a;if(!i||!n.simulateTouch&&t.pointerType==="mouse")return;let l=t;if(l.originalEvent&&(l=l.originalEvent),l.type==="pointermove"&&(s.touchId!==null||l.pointerId!==s.pointerId))return;let c;if(l.type==="touchmove"){if(c=[...l.changedTouches].find(I=>I.identifier===s.touchId),!c||c.identifier!==s.touchId)return}else c=l;if(!s.isTouched){s.startMoving&&s.isScrolling&&a.emit("touchMoveOpposite",l);return}const u=c.pageX,d=c.pageY;if(l.preventedByNestedSwiper){r.startX=u,r.startY=d;return}if(!a.allowTouchMove){l.target.matches(s.focusableElements)||(a.allowClick=!1),s.isTouched&&(Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d}),s.touchStartTime=sn());return}if(n.touchReleaseOnEdges&&!n.loop)if(a.isVertical()){if(d<r.startY&&a.translate<=a.maxTranslate()||d>r.startY&&a.translate>=a.minTranslate()){s.isTouched=!1,s.isMoved=!1;return}}else{if(o&&(u>r.startX&&-a.translate<=a.maxTranslate()||u<r.startX&&-a.translate>=a.minTranslate()))return;if(!o&&(u<r.startX&&a.translate<=a.maxTranslate()||u>r.startX&&a.translate>=a.minTranslate()))return}if(e.activeElement&&e.activeElement.matches(s.focusableElements)&&e.activeElement!==l.target&&l.pointerType!=="mouse"&&e.activeElement.blur(),e.activeElement&&l.target===e.activeElement&&l.target.matches(s.focusableElements)){s.isMoved=!0,a.allowClick=!1;return}s.allowTouchCallbacks&&a.emit("touchMove",l),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=u,r.currentY=d;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(a.params.threshold&&Math.sqrt(p**2+f**2)<a.params.threshold)return;if(typeof s.isScrolling>"u"){let I;a.isHorizontal()&&r.currentY===r.startY||a.isVertical()&&r.currentX===r.startX?s.isScrolling=!1:p*p+f*f>=25&&(I=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,s.isScrolling=a.isHorizontal()?I>n.touchAngle:90-I>n.touchAngle)}if(s.isScrolling&&a.emit("touchMoveOpposite",l),typeof s.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(s.startMoving=!0),s.isScrolling||l.type==="touchmove"&&s.preventTouchMoveFromPointerMove){s.isTouched=!1;return}if(!s.startMoving)return;a.allowClick=!1,!n.cssMode&&l.cancelable&&l.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&l.stopPropagation();let g=a.isHorizontal()?p:f,m=a.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(g=Math.abs(g)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),r.diff=g,g*=n.touchRatio,o&&(g=-g,m=-m);const v=a.touchesDirection;a.swipeDirection=g>0?"prev":"next",a.touchesDirection=m>0?"prev":"next";const h=a.params.loop&&!n.cssMode,_=a.touchesDirection==="next"&&a.allowSlideNext||a.touchesDirection==="prev"&&a.allowSlidePrev;if(!s.isMoved){if(h&&_&&a.loopFix({direction:a.swipeDirection}),s.startTranslate=a.getTranslate(),a.setTransition(0),a.animating){const I=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});a.wrapperEl.dispatchEvent(I)}s.allowMomentumBounce=!1,n.grabCursor&&(a.allowSlideNext===!0||a.allowSlidePrev===!0)&&a.setGrabCursor(!0),a.emit("sliderFirstMove",l)}if(new Date().getTime(),n._loopSwapReset!==!1&&s.isMoved&&s.allowThresholdMove&&v!==a.touchesDirection&&h&&_&&Math.abs(g)>=1){Object.assign(r,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:s.currentTranslate}),s.loopSwapReset=!0,s.startTranslate=s.currentTranslate;return}a.emit("sliderMove",l),s.isMoved=!0,s.currentTranslate=g+s.startTranslate;let w=!0,E=n.resistanceRatio;if(n.touchReleaseOnEdges&&(E=0),g>0?(h&&_&&s.allowThresholdMove&&s.currentTranslate>(n.centeredSlides?a.minTranslate()-a.slidesSizesGrid[a.activeIndex+1]-(n.slidesPerView!=="auto"&&a.slides.length-n.slidesPerView>=2?a.slidesSizesGrid[a.activeIndex+1]+a.params.spaceBetween:0)-a.params.spaceBetween:a.minTranslate())&&a.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),s.currentTranslate>a.minTranslate()&&(w=!1,n.resistance&&(s.currentTranslate=a.minTranslate()-1+(-a.minTranslate()+s.startTranslate+g)**E))):g<0&&(h&&_&&s.allowThresholdMove&&s.currentTranslate<(n.centeredSlides?a.maxTranslate()+a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween+(n.slidesPerView!=="auto"&&a.slides.length-n.slidesPerView>=2?a.slidesSizesGrid[a.slidesSizesGrid.length-1]+a.params.spaceBetween:0):a.maxTranslate())&&a.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:a.slides.length-(n.slidesPerView==="auto"?a.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),s.currentTranslate<a.maxTranslate()&&(w=!1,n.resistance&&(s.currentTranslate=a.maxTranslate()+1-(a.maxTranslate()-s.startTranslate-g)**E))),w&&(l.preventedByNestedSwiper=!0),!a.allowSlideNext&&a.swipeDirection==="next"&&s.currentTranslate<s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&a.swipeDirection==="prev"&&s.currentTranslate>s.startTranslate&&(s.currentTranslate=s.startTranslate),!a.allowSlidePrev&&!a.allowSlideNext&&(s.currentTranslate=s.startTranslate),n.threshold>0)if(Math.abs(g)>n.threshold||s.allowThresholdMove){if(!s.allowThresholdMove){s.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,s.currentTranslate=s.startTranslate,r.diff=a.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{s.currentTranslate=s.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&a.freeMode||n.watchSlidesProgress)&&(a.updateActiveIndex(),a.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&a.freeMode&&a.freeMode.onTouchMove(),a.updateProgress(s.currentTranslate),a.setTranslate(s.currentTranslate))}function Tm(t){const e=this,a=e.touchEventsData;let s=t;s.originalEvent&&(s=s.originalEvent);let n;if(s.type==="touchend"||s.type==="touchcancel"){if(n=[...s.changedTouches].find(I=>I.identifier===a.touchId),!n||n.identifier!==a.touchId)return}else{if(a.touchId!==null||s.pointerId!==a.pointerId)return;n=s}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(s.type)&&!(["pointercancel","contextmenu"].includes(s.type)&&(e.browser.isSafari||e.browser.isWebView)))return;a.pointerId=null,a.touchId=null;const{params:o,touches:i,rtlTranslate:l,slidesGrid:c,enabled:u}=e;if(!u||!o.simulateTouch&&s.pointerType==="mouse")return;if(a.allowTouchCallbacks&&e.emit("touchEnd",s),a.allowTouchCallbacks=!1,!a.isTouched){a.isMoved&&o.grabCursor&&e.setGrabCursor(!1),a.isMoved=!1,a.startMoving=!1;return}o.grabCursor&&a.isMoved&&a.isTouched&&(e.allowSlideNext===!0||e.allowSlidePrev===!0)&&e.setGrabCursor(!1);const d=sn(),p=d-a.touchStartTime;if(e.allowClick){const I=s.path||s.composedPath&&s.composedPath();e.updateClickedSlide(I&&I[0]||s.target,I),e.emit("tap click",s),p<300&&d-a.lastClickTime<300&&e.emit("doubleTap doubleClick",s)}if(a.lastClickTime=sn(),dc(()=>{e.destroyed||(e.allowClick=!0)}),!a.isTouched||!a.isMoved||!e.swipeDirection||i.diff===0&&!a.loopSwapReset||a.currentTranslate===a.startTranslate&&!a.loopSwapReset){a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;return}a.isTouched=!1,a.isMoved=!1,a.startMoving=!1;let f;if(o.followFinger?f=l?e.translate:-e.translate:f=-a.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){e.freeMode.onTouchEnd({currentPos:f});return}const g=f>=-e.maxTranslate()&&!e.params.loop;let m=0,v=e.slidesSizesGrid[0];for(let I=0;I<c.length;I+=I<o.slidesPerGroupSkip?1:o.slidesPerGroup){const R=I<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[I+R]<"u"?(g||f>=c[I]&&f<c[I+R])&&(m=I,v=c[I+R]-c[I]):(g||f>=c[I])&&(m=I,v=c[c.length-1]-c[c.length-2])}let h=null,_=null;o.rewind&&(e.isBeginning?_=o.virtual&&o.virtual.enabled&&e.virtual?e.virtual.slides.length-1:e.slides.length-1:e.isEnd&&(h=0));const w=(f-c[m])/v,E=m<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){e.slideTo(e.activeIndex);return}e.swipeDirection==="next"&&(w>=o.longSwipesRatio?e.slideTo(o.rewind&&e.isEnd?h:m+E):e.slideTo(m)),e.swipeDirection==="prev"&&(w>1-o.longSwipesRatio?e.slideTo(m+E):_!==null&&w<0&&Math.abs(w)>o.longSwipesRatio?e.slideTo(_):e.slideTo(m))}else{if(!o.shortSwipes){e.slideTo(e.activeIndex);return}e.navigation&&(s.target===e.navigation.nextEl||s.target===e.navigation.prevEl)?s.target===e.navigation.nextEl?e.slideTo(m+E):e.slideTo(m):(e.swipeDirection==="next"&&e.slideTo(h!==null?h:m+E),e.swipeDirection==="prev"&&e.slideTo(_!==null?_:m))}}function mi(){const t=this,{params:e,el:a}=t;if(a&&a.offsetWidth===0)return;e.breakpoints&&t.setBreakpoint();const{allowSlideNext:s,allowSlidePrev:n,snapGrid:r}=t,o=t.virtual&&t.params.virtual.enabled;t.allowSlideNext=!0,t.allowSlidePrev=!0,t.updateSize(),t.updateSlides(),t.updateSlidesClasses();const i=o&&e.loop;(e.slidesPerView==="auto"||e.slidesPerView>1)&&t.isEnd&&!t.isBeginning&&!t.params.centeredSlides&&!i?t.slideTo(t.slides.length-1,0,!1,!0):t.params.loop&&!o?t.slideToLoop(t.realIndex,0,!1,!0):t.slideTo(t.activeIndex,0,!1,!0),t.autoplay&&t.autoplay.running&&t.autoplay.paused&&(clearTimeout(t.autoplay.resizeTimeout),t.autoplay.resizeTimeout=setTimeout(()=>{t.autoplay&&t.autoplay.running&&t.autoplay.paused&&t.autoplay.resume()},500)),t.allowSlidePrev=n,t.allowSlideNext=s,t.params.watchOverflow&&r!==t.snapGrid&&t.checkOverflow()}function km(t){const e=this;e.enabled&&(e.allowClick||(e.params.preventClicks&&t.preventDefault(),e.params.preventClicksPropagation&&e.animating&&(t.stopPropagation(),t.stopImmediatePropagation())))}function Sm(){const t=this,{wrapperEl:e,rtlTranslate:a,enabled:s}=t;if(!s)return;t.previousTranslate=t.translate,t.isHorizontal()?t.translate=-e.scrollLeft:t.translate=-e.scrollTop,t.translate===0&&(t.translate=0),t.updateActiveIndex(),t.updateSlidesClasses();let n;const r=t.maxTranslate()-t.minTranslate();r===0?n=0:n=(t.translate-t.minTranslate())/r,n!==t.progress&&t.updateProgress(a?-t.translate:t.translate),t.emit("setTranslate",t.translate,!1)}function Em(t){const e=this;Us(e,t.target),!(e.params.cssMode||e.params.slidesPerView!=="auto"&&!e.params.autoHeight)&&e.update()}function Am(){const t=this;t.documentTouchHandlerProceeded||(t.documentTouchHandlerProceeded=!0,t.params.touchReleaseOnEdges&&(t.el.style.touchAction="auto"))}const bc=(t,e)=>{const a=$t(),{params:s,el:n,wrapperEl:r,device:o}=t,i=!!s.nested,l=e==="on"?"addEventListener":"removeEventListener",c=e;!n||typeof n=="string"||(a[l]("touchstart",t.onDocumentTouchStart,{passive:!1,capture:i}),n[l]("touchstart",t.onTouchStart,{passive:!1}),n[l]("pointerdown",t.onTouchStart,{passive:!1}),a[l]("touchmove",t.onTouchMove,{passive:!1,capture:i}),a[l]("pointermove",t.onTouchMove,{passive:!1,capture:i}),a[l]("touchend",t.onTouchEnd,{passive:!0}),a[l]("pointerup",t.onTouchEnd,{passive:!0}),a[l]("pointercancel",t.onTouchEnd,{passive:!0}),a[l]("touchcancel",t.onTouchEnd,{passive:!0}),a[l]("pointerout",t.onTouchEnd,{passive:!0}),a[l]("pointerleave",t.onTouchEnd,{passive:!0}),a[l]("contextmenu",t.onTouchEnd,{passive:!0}),(s.preventClicks||s.preventClicksPropagation)&&n[l]("click",t.onClick,!0),s.cssMode&&r[l]("scroll",t.onScroll),s.updateOnWindowResize?t[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",mi,!0):t[c]("observerUpdate",mi,!0),n[l]("load",t.onLoad,{capture:!0}))};function Cm(){const t=this,{params:e}=t;t.onTouchStart=wm.bind(t),t.onTouchMove=xm.bind(t),t.onTouchEnd=Tm.bind(t),t.onDocumentTouchStart=Am.bind(t),e.cssMode&&(t.onScroll=Sm.bind(t)),t.onClick=km.bind(t),t.onLoad=Em.bind(t),bc(t,"on")}function Pm(){bc(this,"off")}var Om={attachEvents:Cm,detachEvents:Pm};const gi=(t,e)=>t.grid&&e.grid&&e.grid.rows>1;function Lm(){const t=this,{realIndex:e,initialized:a,params:s,el:n}=t,r=s.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=$t(),i=s.breakpointsBase==="window"||!s.breakpointsBase?s.breakpointsBase:"container",l=["window","container"].includes(s.breakpointsBase)||!s.breakpointsBase?t.el:o.querySelector(s.breakpointsBase),c=t.getBreakpoint(r,i,l);if(!c||t.currentBreakpoint===c)return;const d=(c in r?r[c]:void 0)||t.originalParams,p=gi(t,s),f=gi(t,d),g=t.params.grabCursor,m=d.grabCursor,v=s.enabled;p&&!f?(n.classList.remove(`${s.containerModifierClass}grid`,`${s.containerModifierClass}grid-column`),t.emitContainerClasses()):!p&&f&&(n.classList.add(`${s.containerModifierClass}grid`),(d.grid.fill&&d.grid.fill==="column"||!d.grid.fill&&s.grid.fill==="column")&&n.classList.add(`${s.containerModifierClass}grid-column`),t.emitContainerClasses()),g&&!m?t.unsetGrabCursor():!g&&m&&t.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(R=>{if(typeof d[R]>"u")return;const C=s[R]&&s[R].enabled,H=d[R]&&d[R].enabled;C&&!H&&t[R].disable(),!C&&H&&t[R].enable()});const h=d.direction&&d.direction!==s.direction,_=s.loop&&(d.slidesPerView!==s.slidesPerView||h),w=s.loop;h&&a&&t.changeDirection(),ft(t.params,d);const E=t.params.enabled,I=t.params.loop;Object.assign(t,{allowTouchMove:t.params.allowTouchMove,allowSlideNext:t.params.allowSlideNext,allowSlidePrev:t.params.allowSlidePrev}),v&&!E?t.disable():!v&&E&&t.enable(),t.currentBreakpoint=c,t.emit("_beforeBreakpoint",d),a&&(_?(t.loopDestroy(),t.loopCreate(e),t.updateSlides()):!w&&I?(t.loopCreate(e),t.updateSlides()):w&&!I&&t.loopDestroy()),t.emit("breakpoint",d)}function Mm(t,e="window",a){if(!t||e==="container"&&!a)return;let s=!1;const n=dt(),r=e==="window"?n.innerHeight:a.clientHeight,o=Object.keys(t).map(i=>{if(typeof i=="string"&&i.indexOf("@")===0){const l=parseFloat(i.substr(1));return{value:r*l,point:i}}return{value:i,point:i}});o.sort((i,l)=>parseInt(i.value,10)-parseInt(l.value,10));for(let i=0;i<o.length;i+=1){const{point:l,value:c}=o[i];e==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(s=l):c<=a.clientWidth&&(s=l)}return s||"max"}var Dm={setBreakpoint:Lm,getBreakpoint:Mm};function Rm(t,e){const a=[];return t.forEach(s=>{typeof s=="object"?Object.keys(s).forEach(n=>{s[n]&&a.push(e+n)}):typeof s=="string"&&a.push(e+s)}),a}function Im(){const t=this,{classNames:e,params:a,rtl:s,el:n,device:r}=t,o=Rm(["initialized",a.direction,{"free-mode":t.params.freeMode&&a.freeMode.enabled},{autoheight:a.autoHeight},{rtl:s},{grid:a.grid&&a.grid.rows>1},{"grid-column":a.grid&&a.grid.rows>1&&a.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":a.cssMode},{centered:a.cssMode&&a.centeredSlides},{"watch-progress":a.watchSlidesProgress}],a.containerModifierClass);e.push(...o),n.classList.add(...e),t.emitContainerClasses()}function $m(){const t=this,{el:e,classNames:a}=t;!e||typeof e=="string"||(e.classList.remove(...a),t.emitContainerClasses())}var Nm={addClasses:Im,removeClasses:$m};function Bm(){const t=this,{isLocked:e,params:a}=t,{slidesOffsetBefore:s}=a;if(s){const n=t.slides.length-1,r=t.slidesGrid[n]+t.slidesSizesGrid[n]+s*2;t.isLocked=t.size>r}else t.isLocked=t.snapGrid.length===1;a.allowSlideNext===!0&&(t.allowSlideNext=!t.isLocked),a.allowSlidePrev===!0&&(t.allowSlidePrev=!t.isLocked),e&&e!==t.isLocked&&(t.isEnd=!1),e!==t.isLocked&&t.emit(t.isLocked?"lock":"unlock")}var Fm={checkOverflow:Bm},bi={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function zm(t,e){return function(s={}){const n=Object.keys(s)[0],r=s[n];if(typeof r!="object"||r===null){ft(e,s);return}if(t[n]===!0&&(t[n]={enabled:!0}),n==="navigation"&&t[n]&&t[n].enabled&&!t[n].prevEl&&!t[n].nextEl&&(t[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&t[n]&&t[n].enabled&&!t[n].el&&(t[n].auto=!0),!(n in t&&"enabled"in r)){ft(e,s);return}typeof t[n]=="object"&&!("enabled"in t[n])&&(t[n].enabled=!0),t[n]||(t[n]={enabled:!1}),ft(e,s)}}const Qn={eventsEmitter:Nh,update:Kh,translate:em,transition:nm,slide:pm,loop:gm,grabCursor:vm,events:Om,breakpoints:Dm,checkOverflow:Fm,classes:Nm},Zn={};class vt{constructor(...e){let a,s;e.length===1&&e[0].constructor&&Object.prototype.toString.call(e[0]).slice(8,-1)==="Object"?s=e[0]:[a,s]=e,s||(s={}),s=ft({},s),a&&!s.el&&(s.el=a);const n=$t();if(s.el&&typeof s.el=="string"&&n.querySelectorAll(s.el).length>1){const l=[];return n.querySelectorAll(s.el).forEach(c=>{const u=ft({},s,{el:c});l.push(new vt(u))}),l}const r=this;r.__swiper__=!0,r.support=fc(),r.device=hc({userAgent:s.userAgent}),r.browser=mc(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],s.modules&&Array.isArray(s.modules)&&s.modules.forEach(l=>{typeof l=="function"&&r.modules.indexOf(l)<0&&r.modules.push(l)});const o={};r.modules.forEach(l=>{l({params:s,swiper:r,extendParams:zm(s,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const i=ft({},bi,o);return r.params=ft({},i,Zn,s),r.originalParams=ft({},r.params),r.passedParams=ft({},s),r.params&&r.params.on&&Object.keys(r.params.on).forEach(l=>{r.on(l,r.params.on[l])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:a,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(e){return this.isHorizontal()?e:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[e]}getSlideIndex(e){const{slidesEl:a,params:s}=this,n=Rt(a,`.${s.slideClass}, swiper-slide`),r=on(n[0]);return on(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(a=>a.getAttribute("data-swiper-slide-index")*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill==="row"&&(e=e%Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){const e=this,{slidesEl:a,params:s}=e;e.slides=Rt(a,`.${s.slideClass}, swiper-slide`)}enable(){const e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,a){const s=this;e=Math.min(Math.max(e,0),1);const n=s.minTranslate(),o=(s.maxTranslate()-n)*e+n;s.translateTo(o,typeof a>"u"?0:a),s.updateActiveIndex(),s.updateSlidesClasses()}emitContainerClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const a=e.el.className.split(" ").filter(s=>s.indexOf("swiper")===0||s.indexOf(e.params.containerModifierClass)===0);e.emit("_containerClasses",a.join(" "))}getSlideClasses(e){const a=this;return a.destroyed?"":e.className.split(" ").filter(s=>s.indexOf("swiper-slide")===0||s.indexOf(a.params.slideClass)===0).join(" ")}emitSlidesClasses(){const e=this;if(!e.params._emitClasses||!e.el)return;const a=[];e.slides.forEach(s=>{const n=e.getSlideClasses(s);a.push({slideEl:s,classNames:n}),e.emit("_slideClass",s,n)}),e.emit("_slideClasses",a)}slidesPerViewDynamic(e="current",a=!1){const s=this,{params:n,slides:r,slidesGrid:o,slidesSizesGrid:i,size:l,activeIndex:c}=s;let u=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let d=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let f=c+1;f<r.length;f+=1)r[f]&&!p&&(d+=Math.ceil(r[f].swiperSlideSize),u+=1,d>l&&(p=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!p&&(d+=r[f].swiperSlideSize,u+=1,d>l&&(p=!0))}else if(e==="current")for(let d=c+1;d<r.length;d+=1)(a?o[d]+i[d]-o[c]<l:o[d]-o[c]<l)&&(u+=1);else for(let d=c-1;d>=0;d-=1)o[c]-o[d]<l&&(u+=1);return u}update(){const e=this;if(!e||e.destroyed)return;const{snapGrid:a,params:s}=e;s.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&Us(e,o)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function n(){const o=e.rtlTranslate?e.translate*-1:e.translate,i=Math.min(Math.max(o,e.maxTranslate()),e.minTranslate());e.setTranslate(i),e.updateActiveIndex(),e.updateSlidesClasses()}let r;if(s.freeMode&&s.freeMode.enabled&&!s.cssMode)n(),s.autoHeight&&e.updateAutoHeight();else{if((s.slidesPerView==="auto"||s.slidesPerView>1)&&e.isEnd&&!s.centeredSlides){const o=e.virtual&&s.virtual.enabled?e.virtual.slides:e.slides;r=e.slideTo(o.length-1,0,!1,!0)}else r=e.slideTo(e.activeIndex,0,!1,!0);r||n()}s.watchOverflow&&a!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,a=!0){const s=this,n=s.params.direction;return e||(e=n==="horizontal"?"vertical":"horizontal"),e===n||e!=="horizontal"&&e!=="vertical"||(s.el.classList.remove(`${s.params.containerModifierClass}${n}`),s.el.classList.add(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.forEach(r=>{e==="vertical"?r.style.width="":r.style.height=""}),s.emit("changeDirection"),a&&s.update()),s}changeLanguageDirection(e){const a=this;a.rtl&&e==="rtl"||!a.rtl&&e==="ltr"||(a.rtl=e==="rtl",a.rtlTranslate=a.params.direction==="horizontal"&&a.rtl,a.rtl?(a.el.classList.add(`${a.params.containerModifierClass}rtl`),a.el.dir="rtl"):(a.el.classList.remove(`${a.params.containerModifierClass}rtl`),a.el.dir="ltr"),a.update())}mount(e){const a=this;if(a.mounted)return!0;let s=e||a.params.el;if(typeof s=="string"&&(s=document.querySelector(s)),!s)return!1;s.swiper=a,s.parentNode&&s.parentNode.host&&s.parentNode.host.nodeName===a.params.swiperElementNodeName.toUpperCase()&&(a.isElement=!0);const n=()=>`.${(a.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=s&&s.shadowRoot&&s.shadowRoot.querySelector?s.shadowRoot.querySelector(n()):Rt(s,n())[0];return!o&&a.params.createElements&&(o=rn("div",a.params.wrapperClass),s.append(o),Rt(s,`.${a.params.slideClass}`).forEach(i=>{o.append(i)})),Object.assign(a,{el:s,wrapperEl:o,slidesEl:a.isElement&&!s.parentNode.host.slideSlots?s.parentNode.host:o,hostEl:a.isElement?s.parentNode.host:s,mounted:!0,rtl:s.dir.toLowerCase()==="rtl"||la(s,"direction")==="rtl",rtlTranslate:a.params.direction==="horizontal"&&(s.dir.toLowerCase()==="rtl"||la(s,"direction")==="rtl"),wrongRTL:la(o,"display")==="-webkit-box"}),!0}init(e){const a=this;if(a.initialized||a.mount(e)===!1)return a;a.emit("beforeInit"),a.params.breakpoints&&a.setBreakpoint(),a.addClasses(),a.updateSize(),a.updateSlides(),a.params.watchOverflow&&a.checkOverflow(),a.params.grabCursor&&a.enabled&&a.setGrabCursor(),a.params.loop&&a.virtual&&a.params.virtual.enabled?a.slideTo(a.params.initialSlide+a.virtual.slidesBefore,0,a.params.runCallbacksOnInit,!1,!0):a.slideTo(a.params.initialSlide,0,a.params.runCallbacksOnInit,!1,!0),a.params.loop&&a.loopCreate(void 0,!0),a.attachEvents();const n=[...a.el.querySelectorAll('[loading="lazy"]')];return a.isElement&&n.push(...a.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?Us(a,r):r.addEventListener("load",o=>{Us(a,o.target)})}),kr(a),a.initialized=!0,kr(a),a.emit("init"),a.emit("afterInit"),a}destroy(e=!0,a=!0){const s=this,{params:n,el:r,wrapperEl:o,slides:i}=s;return typeof s.params>"u"||s.destroyed||(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),n.loop&&s.loopDestroy(),a&&(s.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),i&&i.length&&i.forEach(l=>{l.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),l.removeAttribute("style"),l.removeAttribute("data-swiper-slide-index")})),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(l=>{s.off(l)}),e!==!1&&(s.el&&typeof s.el!="string"&&(s.el.swiper=null),kh(s)),s.destroyed=!0),null}static extendDefaults(e){ft(Zn,e)}static get extendedDefaults(){return Zn}static get defaults(){return bi}static installModule(e){vt.prototype.__modules__||(vt.prototype.__modules__=[]);const a=vt.prototype.__modules__;typeof e=="function"&&a.indexOf(e)<0&&a.push(e)}static use(e){return Array.isArray(e)?(e.forEach(a=>vt.installModule(a)),vt):(vt.installModule(e),vt)}}Object.keys(Qn).forEach(t=>{Object.keys(Qn[t]).forEach(e=>{vt.prototype[e]=Qn[t][e]})});vt.use([Ih,$h]);function Hm(t,e,a,s){return t.params.createElements&&Object.keys(s).forEach(n=>{if(!a[n]&&a.auto===!0){let r=Rt(t.el,`.${s[n]}`)[0];r||(r=rn("div",s[n]),r.className=s[n],t.el.append(r)),a[n]=r,e[n]=r}}),a}function Wa(t=""){return`.${t.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`}function Um({swiper:t,extendParams:e,on:a,emit:s}){const n="swiper-pagination";e({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:h=>h,formatFractionTotal:h=>h,bulletClass:`${n}-bullet`,bulletActiveClass:`${n}-bullet-active`,modifierClass:`${n}-`,currentClass:`${n}-current`,totalClass:`${n}-total`,hiddenClass:`${n}-hidden`,progressbarFillClass:`${n}-progressbar-fill`,progressbarOppositeClass:`${n}-progressbar-opposite`,clickableClass:`${n}-clickable`,lockClass:`${n}-lock`,horizontalClass:`${n}-horizontal`,verticalClass:`${n}-vertical`,paginationDisabledClass:`${n}-disabled`}}),t.pagination={el:null,bullets:[]};let r,o=0;function i(){return!t.params.pagination.el||!t.pagination.el||Array.isArray(t.pagination.el)&&t.pagination.el.length===0}function l(h,_){const{bulletActiveClass:w}=t.params.pagination;h&&(h=h[`${_==="prev"?"previous":"next"}ElementSibling`],h&&(h.classList.add(`${w}-${_}`),h=h[`${_==="prev"?"previous":"next"}ElementSibling`],h&&h.classList.add(`${w}-${_}-${_}`)))}function c(h,_,w){if(h=h%w,_=_%w,_===h+1)return"next";if(_===h-1)return"previous"}function u(h){const _=h.target.closest(Wa(t.params.pagination.bulletClass));if(!_)return;h.preventDefault();const w=on(_)*t.params.slidesPerGroup;if(t.params.loop){if(t.realIndex===w)return;const E=c(t.realIndex,w,t.slides.length);E==="next"?t.slideNext():E==="previous"?t.slidePrev():t.slideToLoop(w)}else t.slideTo(w)}function d(){const h=t.rtl,_=t.params.pagination;if(i())return;let w=t.pagination.el;w=Ut(w);let E,I;const R=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,C=t.params.loop?Math.ceil(R/t.params.slidesPerGroup):t.snapGrid.length;if(t.params.loop?(I=t.previousRealIndex||0,E=t.params.slidesPerGroup>1?Math.floor(t.realIndex/t.params.slidesPerGroup):t.realIndex):typeof t.snapIndex<"u"?(E=t.snapIndex,I=t.previousSnapIndex):(I=t.previousIndex||0,E=t.activeIndex||0),_.type==="bullets"&&t.pagination.bullets&&t.pagination.bullets.length>0){const H=t.pagination.bullets;let $,G,j;if(_.dynamicBullets&&(r=Tr(H[0],t.isHorizontal()?"width":"height"),w.forEach(F=>{F.style[t.isHorizontal()?"width":"height"]=`${r*(_.dynamicMainBullets+4)}px`}),_.dynamicMainBullets>1&&I!==void 0&&(o+=E-(I||0),o>_.dynamicMainBullets-1?o=_.dynamicMainBullets-1:o<0&&(o=0)),$=Math.max(E-o,0),G=$+(Math.min(H.length,_.dynamicMainBullets)-1),j=(G+$)/2),H.forEach(F=>{const q=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(P=>`${_.bulletActiveClass}${P}`)].map(P=>typeof P=="string"&&P.includes(" ")?P.split(" "):P).flat();F.classList.remove(...q)}),w.length>1)H.forEach(F=>{const q=on(F);q===E?F.classList.add(..._.bulletActiveClass.split(" ")):t.isElement&&F.setAttribute("part","bullet"),_.dynamicBullets&&(q>=$&&q<=G&&F.classList.add(...`${_.bulletActiveClass}-main`.split(" ")),q===$&&l(F,"prev"),q===G&&l(F,"next"))});else{const F=H[E];if(F&&F.classList.add(..._.bulletActiveClass.split(" ")),t.isElement&&H.forEach((q,P)=>{q.setAttribute("part",P===E?"bullet-active":"bullet")}),_.dynamicBullets){const q=H[$],P=H[G];for(let A=$;A<=G;A+=1)H[A]&&H[A].classList.add(...`${_.bulletActiveClass}-main`.split(" "));l(q,"prev"),l(P,"next")}}if(_.dynamicBullets){const F=Math.min(H.length,_.dynamicMainBullets+4),q=(r*F-r)/2-j*r,P=h?"right":"left";H.forEach(A=>{A.style[t.isHorizontal()?P:"top"]=`${q}px`})}}w.forEach((H,$)=>{if(_.type==="fraction"&&(H.querySelectorAll(Wa(_.currentClass)).forEach(G=>{G.textContent=_.formatFractionCurrent(E+1)}),H.querySelectorAll(Wa(_.totalClass)).forEach(G=>{G.textContent=_.formatFractionTotal(C)})),_.type==="progressbar"){let G;_.progressbarOpposite?G=t.isHorizontal()?"vertical":"horizontal":G=t.isHorizontal()?"horizontal":"vertical";const j=(E+1)/C;let F=1,q=1;G==="horizontal"?F=j:q=j,H.querySelectorAll(Wa(_.progressbarFillClass)).forEach(P=>{P.style.transform=`translate3d(0,0,0) scaleX(${F}) scaleY(${q})`,P.style.transitionDuration=`${t.params.speed}ms`})}_.type==="custom"&&_.renderCustom?(pi(H,_.renderCustom(t,E+1,C)),$===0&&s("paginationRender",H)):($===0&&s("paginationRender",H),s("paginationUpdate",H)),t.params.watchOverflow&&t.enabled&&H.classList[t.isLocked?"add":"remove"](_.lockClass)})}function p(){const h=t.params.pagination;if(i())return;const _=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.grid&&t.params.grid.rows>1?t.slides.length/Math.ceil(t.params.grid.rows):t.slides.length;let w=t.pagination.el;w=Ut(w);let E="";if(h.type==="bullets"){let I=t.params.loop?Math.ceil(_/t.params.slidesPerGroup):t.snapGrid.length;t.params.freeMode&&t.params.freeMode.enabled&&I>_&&(I=_);for(let R=0;R<I;R+=1)h.renderBullet?E+=h.renderBullet.call(t,R,h.bulletClass):E+=`<${h.bulletElement} ${t.isElement?'part="bullet"':""} class="${h.bulletClass}"></${h.bulletElement}>`}h.type==="fraction"&&(h.renderFraction?E=h.renderFraction.call(t,h.currentClass,h.totalClass):E=`<span class="${h.currentClass}"></span> / <span class="${h.totalClass}"></span>`),h.type==="progressbar"&&(h.renderProgressbar?E=h.renderProgressbar.call(t,h.progressbarFillClass):E=`<span class="${h.progressbarFillClass}"></span>`),t.pagination.bullets=[],w.forEach(I=>{h.type!=="custom"&&pi(I,E||""),h.type==="bullets"&&t.pagination.bullets.push(...I.querySelectorAll(Wa(h.bulletClass)))}),h.type!=="custom"&&s("paginationRender",w[0])}function f(){t.params.pagination=Hm(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"});const h=t.params.pagination;if(!h.el)return;let _;typeof h.el=="string"&&t.isElement&&(_=t.el.querySelector(h.el)),!_&&typeof h.el=="string"&&(_=[...document.querySelectorAll(h.el)]),_||(_=h.el),!(!_||_.length===0)&&(t.params.uniqueNavElements&&typeof h.el=="string"&&Array.isArray(_)&&_.length>1&&(_=[...t.el.querySelectorAll(h.el)],_.length>1&&(_=_.find(w=>pc(w,".swiper")[0]===t.el))),Array.isArray(_)&&_.length===1&&(_=_[0]),Object.assign(t.pagination,{el:_}),_=Ut(_),_.forEach(w=>{h.type==="bullets"&&h.clickable&&w.classList.add(...(h.clickableClass||"").split(" ")),w.classList.add(h.modifierClass+h.type),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.type==="bullets"&&h.dynamicBullets&&(w.classList.add(`${h.modifierClass}${h.type}-dynamic`),o=0,h.dynamicMainBullets<1&&(h.dynamicMainBullets=1)),h.type==="progressbar"&&h.progressbarOpposite&&w.classList.add(h.progressbarOppositeClass),h.clickable&&w.addEventListener("click",u),t.enabled||w.classList.add(h.lockClass)}))}function g(){const h=t.params.pagination;if(i())return;let _=t.pagination.el;_&&(_=Ut(_),_.forEach(w=>{w.classList.remove(h.hiddenClass),w.classList.remove(h.modifierClass+h.type),w.classList.remove(t.isHorizontal()?h.horizontalClass:h.verticalClass),h.clickable&&(w.classList.remove(...(h.clickableClass||"").split(" ")),w.removeEventListener("click",u))})),t.pagination.bullets&&t.pagination.bullets.forEach(w=>w.classList.remove(...h.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!t.pagination||!t.pagination.el)return;const h=t.params.pagination;let{el:_}=t.pagination;_=Ut(_),_.forEach(w=>{w.classList.remove(h.horizontalClass,h.verticalClass),w.classList.add(t.isHorizontal()?h.horizontalClass:h.verticalClass)})}),a("init",()=>{t.params.pagination.enabled===!1?v():(f(),p(),d())}),a("activeIndexChange",()=>{typeof t.snapIndex>"u"&&d()}),a("snapIndexChange",()=>{d()}),a("snapGridLengthChange",()=>{p(),d()}),a("destroy",()=>{g()}),a("enable disable",()=>{let{el:h}=t.pagination;h&&(h=Ut(h),h.forEach(_=>_.classList[t.enabled?"remove":"add"](t.params.pagination.lockClass)))}),a("lock unlock",()=>{d()}),a("click",(h,_)=>{const w=_.target,E=Ut(t.pagination.el);if(t.params.pagination.el&&t.params.pagination.hideOnClick&&E&&E.length>0&&!w.classList.contains(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&w===t.navigation.nextEl||t.navigation.prevEl&&w===t.navigation.prevEl))return;const I=E[0].classList.contains(t.params.pagination.hiddenClass);s(I===!0?"paginationShow":"paginationHide"),E.forEach(R=>R.classList.toggle(t.params.pagination.hiddenClass))}});const m=()=>{t.el.classList.remove(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ut(h),h.forEach(_=>_.classList.remove(t.params.pagination.paginationDisabledClass))),f(),p(),d()},v=()=>{t.el.classList.add(t.params.pagination.paginationDisabledClass);let{el:h}=t.pagination;h&&(h=Ut(h),h.forEach(_=>_.classList.add(t.params.pagination.paginationDisabledClass))),g()};Object.assign(t.pagination,{enable:m,disable:v,render:p,update:d,init:f,destroy:g})}function Gm({swiper:t,extendParams:e,on:a,emit:s,params:n}){t.autoplay={running:!1,paused:!1,timeLeft:0},e({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,i=n&&n.autoplay?n.autoplay.delay:3e3,l=n&&n.autoplay?n.autoplay.delay:3e3,c,u=new Date().getTime(),d,p,f,g,m,v;function h(D){!t||t.destroyed||!t.wrapperEl||D.target===t.wrapperEl&&(t.wrapperEl.removeEventListener("transitionend",h),!(v||D.detail&&D.detail.bySwiperTouchMove)&&$())}const _=()=>{if(t.destroyed||!t.autoplay.running)return;t.autoplay.paused?d=!0:d&&(l=c,d=!1);const D=t.autoplay.paused?c:u+l-new Date().getTime();t.autoplay.timeLeft=D,s("autoplayTimeLeft",D,D/i),o=requestAnimationFrame(()=>{_()})},w=()=>{let D;return t.virtual&&t.params.virtual.enabled?D=t.slides.find(Y=>Y.classList.contains("swiper-slide-active")):D=t.slides[t.activeIndex],D?parseInt(D.getAttribute("data-swiper-autoplay"),10):void 0},E=()=>{let D=t.params.autoplay.delay;const L=w();return!Number.isNaN(L)&&L>0&&(D=L),D},I=D=>{if(t.destroyed||!t.autoplay.running)return;cancelAnimationFrame(o),_();let L=D;typeof L>"u"&&(L=E(),i=L,l=L),c=L;const Y=t.params.speed,Q=()=>{!t||t.destroyed||(t.params.autoplay.reverseDirection?!t.isBeginning||t.params.loop||t.params.rewind?(t.slidePrev(Y,!0,!0),s("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(t.slides.length-1,Y,!0,!0),s("autoplay")):!t.isEnd||t.params.loop||t.params.rewind?(t.slideNext(Y,!0,!0),s("autoplay")):t.params.autoplay.stopOnLastSlide||(t.slideTo(0,Y,!0,!0),s("autoplay")),t.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{I()})))};return L>0?(clearTimeout(r),r=setTimeout(()=>{Q()},L)):requestAnimationFrame(()=>{Q()}),L},R=()=>{u=new Date().getTime(),t.autoplay.running=!0,I(),s("autoplayStart")},C=()=>{t.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),s("autoplayStop")},H=(D,L)=>{if(t.destroyed||!t.autoplay.running)return;clearTimeout(r),D||(m=!0);const Y=()=>{s("autoplayPause"),t.params.autoplay.waitForTransition?t.wrapperEl.addEventListener("transitionend",h):$()};if(t.autoplay.paused=!0,L){Y();return}c=(c||t.params.autoplay.delay)-(new Date().getTime()-u),!(t.isEnd&&c<0&&!t.params.loop)&&(c<0&&(c=0),Y())},$=()=>{t.isEnd&&c<0&&!t.params.loop||t.destroyed||!t.autoplay.running||(u=new Date().getTime(),m?(m=!1,I(c)):I(),t.autoplay.paused=!1,s("autoplayResume"))},G=()=>{if(t.destroyed||!t.autoplay.running)return;const D=$t();D.visibilityState==="hidden"&&(m=!0,H(!0)),D.visibilityState==="visible"&&$()},j=D=>{D.pointerType==="mouse"&&(m=!0,v=!0,!(t.animating||t.autoplay.paused)&&H(!0))},F=D=>{D.pointerType==="mouse"&&(v=!1,t.autoplay.paused&&$())},q=()=>{t.params.autoplay.pauseOnMouseEnter&&(t.el.addEventListener("pointerenter",j),t.el.addEventListener("pointerleave",F))},P=()=>{t.el&&typeof t.el!="string"&&(t.el.removeEventListener("pointerenter",j),t.el.removeEventListener("pointerleave",F))},A=()=>{$t().addEventListener("visibilitychange",G)},S=()=>{$t().removeEventListener("visibilitychange",G)};a("init",()=>{t.params.autoplay.enabled&&(q(),A(),R())}),a("destroy",()=>{P(),S(),t.autoplay.running&&C()}),a("_freeModeStaticRelease",()=>{(f||m)&&$()}),a("_freeModeNoMomentumRelease",()=>{t.params.autoplay.disableOnInteraction?C():H(!0,!0)}),a("beforeTransitionStart",(D,L,Y)=>{t.destroyed||!t.autoplay.running||(Y||!t.params.autoplay.disableOnInteraction?H(!0,!0):C())}),a("sliderFirstMove",()=>{if(!(t.destroyed||!t.autoplay.running)){if(t.params.autoplay.disableOnInteraction){C();return}p=!0,f=!1,m=!1,g=setTimeout(()=>{m=!0,f=!0,H(!0)},200)}}),a("touchEnd",()=>{if(!(t.destroyed||!t.autoplay.running||!p)){if(clearTimeout(g),clearTimeout(r),t.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&t.params.cssMode&&$(),f=!1,p=!1}}),a("slideChange",()=>{t.destroyed||!t.autoplay.running||t.autoplay.paused&&(c=E(),i=E())}),Object.assign(t.autoplay,{start:R,stop:C,pause:H,resume:$})}const jm={class:"home-layout"},qm={class:"sticky-header-group"},Vm=["data-user-name"],Ym={class:"home-scroll"},Km={class:"home-tabs",id:"home-tabs--id"},Wm={class:"home-tab home-tab--lobby home-tab--active","data-home-tab":"lobby-active"},Jm={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Xm={class:"home-tab home-tab--lobby","data-home-tab":"lobby-completed"},Qm={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Zm={class:"home-tab home-tab--my home-tab--active","data-home-tab":"my-active"},eg={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},tg={class:"home-tab home-tab--my","data-home-tab":"my-completed"},ag={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},sg={class:"home-tab home-tab--private home-tab--active","data-home-tab":"private-all"},ng={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},rg={class:"home-tab home-tab--private","data-home-tab":"private-invites"},og={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},ig={class:"create-cta-banner__content"},lg={__name:"home_route",setup(t){const e=ct(),a=xe();window.CoreBetSlip=lc;const s=()=>{e.push({name:"create_tournament_route"})};document.addEventListener("click",u=>{const d=u.target;if(d&&d.dataset?.promotionTopic){const p={timestamp:Date.now(),heroImg:d.dataset.promotionHeroImg||"",caption:d.dataset.promotionCaption||"",tagline:d.dataset.promotionTagline||"",toast:d.dataset.promotionToast||"",topic:d.dataset.promotionTopic||"",topicToken:d.dataset.promotionTopicToken||"",marquee:d.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",p),de.publish(a.hierTopics.PROMOTION__CLICK,JSON.stringify(p))}d&&d.dataset?.publishRouteHome&&(d.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(f=>{f.classList.toggle("dash-nav__btn--active",f===d)}),de.publish(d.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),d&&d.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const n=(u,d=!1,p="cards",f={})=>{const g=document.querySelector(".tournaments-grid");if(!g)return;g.innerHTML="",g.style.animation="none",g.offsetHeight,g.style.animation="panel-enter 0.3s ease-out both",g.classList.toggle("tournaments-grid--list",p==="list");const m=document.getElementById("app"),v=m?.getAttribute("data-sync-theme")||"dark",h=m?.getAttribute("data-sync-lang")||"en",_=m?.getAttribute("data-sync-motif")||"brand",w=(R="")=>String(R).replace(/\S+/g,C=>/[A-Z]/.test(C)&&C===C.toUpperCase()?C:C.charAt(0).toUpperCase()+C.slice(1).toLowerCase()),E=R=>{const C=document.createElement("bma-tournament-list-card");C.setAttribute("data-bma-tourn-guid",R.guid||""),C.setAttribute("data-bma-tourn-caption",R.caption||""),C.setAttribute("data-bma-tourn-tagline",R.tagline||""),C.setAttribute("data-bma-tourn-status",R.status||""),C.setAttribute("data-bma-tourn-class",R.status||""),C.setAttribute("data-bma-tourn-game-type",R.class||"DEFAULT_FORMAT"),C.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(R.sports_allowed)?JSON.stringify(R.sports_allowed):""),C.setAttribute("data-bma-tourn-entities",R.entities?JSON.stringify(R.entities):""),C.setAttribute("data-bma-tourn-entry_fee",R.entry_fee||"0"),C.setAttribute("data-bma-tourn-tournament_dollars",R.tournament_dollars||"0"),C.setAttribute("data-bma-tourn-matches",R.matches_expanded?.length||"0"),C.setAttribute("data-bma-tourn-tags",Array.isArray(R.tags)?JSON.stringify(R.tags):"[]"),C.setAttribute("data-bma-tourn-window_start_time",R.window_start_time||""),C.setAttribute("data-bma-tourn-window_end_time",R.window_end_time||""),C.setAttribute("data-sync-theme",v);try{const H=a.appSession?.session_user?.guid,$=(R.status||R.class)==="COMPLETED",G=R.entities?.guids||[],j=H&&G.includes(H);if($&&j&&typeof window.GameTypeLifeCycle?.forTournament=="function"){const F=window.GameTypeLifeCycle.forTournament(R);if(F&&typeof F.rankLeaderboard=="function"){const q=G.map(S=>{const D=Array.isArray(R.combined_betslips)?R.combined_betslips.filter(L=>L.entity_guid===S||L.user_guid===S||L.guid===S):[];return{guid:S,bets:D,tournament_dollars:R.tournament_dollars,timestamp:R.status_time}}),P=F.rankLeaderboard(q,R),A=P.findIndex(S=>S.guid===H);A>=0&&(C.setAttribute("data-user-rank",String(A+1)),C.setAttribute("data-user-total",String(P.length)))}}}catch{}return C},I=R=>{const C=document.createElement("article"),H=R.status||"DRAFT";C.className=`tournament-item tournament-status-${H.toLowerCase()}`;const $=document.createElement("bma-tournament-card");return $.setAttribute("data-bma-tourn-id",R.id||""),$.setAttribute("data-bma-tourn-guid",R.guid||""),$.setAttribute("data-bma-tourn-caption",R.caption||""),$.setAttribute("data-bma-tourn-tagline",R.tagline||""),$.setAttribute("data-bma-tourn-window_start_time",R.window_start_time||""),$.setAttribute("data-bma-tourn-window_end_time",R.window_end_time||""),$.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(R.sports_allowed)?JSON.stringify(R.sports_allowed):R.sports_allowed||""),$.setAttribute("data-bma-tourn-entities",R.entities?JSON.stringify(R.entities):""),$.setAttribute("data-bma-tourn-tournament_dollars",R.tournament_dollars||""),$.setAttribute("data-bma-tourn-prize_distro",Array.isArray(R.prize_distro)?JSON.stringify(R.prize_distro):R.prize_distro||""),$.setAttribute("data-bma-tourn-matches",Array.isArray(R.matches_guids)?JSON.stringify(R.matches_guids):R.matches_guids||""),$.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(R.matches_expanded)?JSON.stringify(R.matches_expanded):R.matches_expanded||""),$.setAttribute("data-bma-tourn-entry_fee",R.entry_fee||""),$.setAttribute("data-bma-tourn-rake",R.rake||""),$.setAttribute("data-bma-tourn-tags",Array.isArray(R.tags)?JSON.stringify(R.tags):R.tags||""),$.setAttribute("data-bma-tourn-comments",R.comments||""),$.setAttribute("data-bma-tourn-class",R.status||""),$.setAttribute("data-bma-tourn-game-type",R.class||"DEFAULT_FORMAT"),$.setAttribute("data-bma-tourn-status",R.status||""),$.setAttribute("data-sync-theme",v),$.setAttribute("data-sync-lang",h),$.setAttribute("data-sync-motif",_),$.setAttribute("data-n55-size","medium"),$.setAttribute("data-n55-enchanted-cta-ambient","none"),$.setAttribute("data-tourn-custom-css",""),$.setAttribute("data-tourn-trophy","0"),$.setAttribute("data-bma-tourn-focus",""),$.setAttribute("data-bma-tourn-wait","false"),C.appendChild($),C};if(d){u.forEach(C=>{if(C.type==="stats"){const ee=document.createElement("div");ee.className="tournament-category tournament-category--stats",ee.innerHTML=C.html||"",g.appendChild(ee);return}const H=document.createElement("div");H.className="tournament-category";const $=document.createElement("header");$.className="tournament-category-header";const G=document.createElement("div");if(G.className="category-title-line",C.tournaments){const ee=document.createElement("span");ee.className="category-count-pill";const ne=(()=>{const U=C.sportKey;if(!U||U==="all")return'<span class="category-count-pill__icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="#fff"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg></span>';if(U==="multi")return'<span class="category-count-pill__icon"><bma-sport-icon sport="multi" data-sport-group="Multi"></bma-sport-icon></span>';const X=Ge.find(oe=>oe.key===U)?.group||"default";return`<span class="category-count-pill__icon"><bma-sport-icon sport="${U}" data-sport-group="${X}"></bma-sport-icon></span>`})();ee.classList.add("category-count-pill--with-icon"),ee.innerHTML=`${ne}<span class="category-count-pill__num">${C.tournaments.length}</span>`,G.appendChild(ee)}const j=document.createElement("h2");j.className="category-title",j.textContent=w(C.title),G.appendChild(j);const{tab:F="lobby",subStatus:q="all",sort:P="default",result:A="all",odds:S="all"}=f,L=C.title.toLowerCase().includes("completed"),Y=!L&&F==="my",Q=(ee,ne,U)=>`<option value="${ee}"${U?" selected":""}>${ne}</option>`;let re="";F==="lobby"?re=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${Q("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${Q("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${Q("default","Starting TD$: Default",P==="default")}
              ${Q("td_high","Starting TD$: High to Low",P==="td_high")}
              ${Q("td_low","Starting TD$: Low to High",P==="td_low")}
            </select>
          `:F==="my"&&Y?re=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${Q("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${Q("all","Status: All",q==="all")}
              ${Q("active","Status: Active",q==="active")}
              ${Q("upcoming","Status: Upcoming",q==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${Q("all","Odds: All",S==="all")}
              ${Q("available","Odds: Available",S==="available")}
              ${Q("none","Odds: Not Available",S==="none")}
            </select>
          `:(F==="my"&&L||F==="completed")&&(re=`
            <select class="category-dropdown" data-filter-type="result">
              ${Q("all","Result: All",A==="all")}
              ${Q("trophy","Result: Won Trophy",A==="trophy")}
              ${Q("no_trophy","Result: No Trophy",A==="no_trophy")}
            </select>
          `),$.appendChild(G);const Z=localStorage.getItem("bma_view_mode")||"cards",V=document.createElement("div");if(V.className="category-controls",re){const ee=document.createElement("button");ee.className="category-filter-toggle",ee.setAttribute("aria-label","Toggle filters"),ee.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Filters <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>',V.appendChild(ee)}const ae=document.createElement("span");if(ae.className="category-view-btns",ae.innerHTML=`
          <button class="category-view-btn${Z==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            <span>Card</span>
          </button>
          <button class="category-view-btn${Z==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            <span>List</span>
          </button>
        `,V.appendChild(ae),$.appendChild(V),re){const ee=document.createElement("div");if(ee.className="category-filter-row",ee.style.display=window._bmaFilterRowOpen?"":"none",ee.innerHTML=re,$.appendChild(ee),window._bmaFilterRowOpen){const ne=$.querySelector(".category-filter-toggle");ne&&ne.classList.add("category-filter-toggle--open")}}if(H.appendChild($),g.appendChild(H),C.tournaments.length===0){const ee=C.emptyMessage||"No tournaments available",U=Object.prototype.hasOwnProperty.call(C,"emptySubtext")?C.emptySubtext||"":"Check back later for new tournaments",te=C.emptyMessage?'<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>':'<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>',X=document.createElement("div");X.className="tournaments-empty",X.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",X.innerHTML=`
            ${te}
            <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${ee}</p>
            ${U?`<p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0; max-width: 320px; margin-left: auto; margin-right: auto;">${U}</p>`:""}
          `,H.appendChild(X)}else{const ee=document.createElement("div");if(ee.className="card-rail",C.tournaments.forEach((ne,U)=>{const te=p==="list"?E(ne):I(ne);te.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",te.style.animationDelay=`${Math.min(U*50,300)}ms`,ee.appendChild(te)}),H.appendChild(ee),C.tournaments.length>1){const ne=document.createElement("div");ne.className="card-rail__dots";for(let U=0;U<C.tournaments.length;U++){const te=document.createElement("span");te.className=`card-rail__dot${U===0?" card-rail__dot--active":""}`,ne.appendChild(te)}H.appendChild(ne)}if(C.tournaments.length>1){const ne=document.createElement("button");ne.className="card-rail__arrow card-rail__arrow--prev",ne.setAttribute("aria-label","Previous card"),ne.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>',ne.style.opacity="0";const U=document.createElement("button");U.className="card-rail__arrow card-rail__arrow--next",U.setAttribute("aria-label","Next card"),U.innerHTML='<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>',H.appendChild(ne),H.appendChild(U);const te=H.querySelector(".card-rail__dots");ee.addEventListener("scroll",()=>{const X=ee.scrollLeft,oe=ee.firstElementChild?.offsetWidth||1,x=Math.round(X/(oe+12));te&&te.querySelectorAll(".card-rail__dot").forEach((y,T)=>{y.classList.toggle("card-rail__dot--active",T===x)}),ne.style.opacity=X<=10?"0":"";const O=ee.scrollWidth-ee.clientWidth;U.style.opacity=X>=O-10?"0":""},{passive:!0}),ne.addEventListener("click",()=>{const X=ee.firstElementChild?.offsetWidth||300;ee.scrollBy({left:-(X+12),behavior:"smooth"})}),U.addEventListener("click",()=>{const X=ee.firstElementChild?.offsetWidth||300;ee.scrollBy({left:X+12,behavior:"smooth"})})}}});const R=g.dataset.filterContext;if(R!=="lobby"&&R!=="private"&&g.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let C="No tournaments available",H="Check back later for new tournaments";R==="my"?(C="You haven't joined any tournaments yet",H="Head to the lobby to find tournaments"):R==="completed"&&(C="No completed tournaments yet",H="Tournaments will appear here once they finish");const $=document.createElement("div");$.className="tournaments-empty",$.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",$.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 700; color: rgba(255,255,255,0.55); margin: 0 0 8px;">${C}</p>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.4); margin: 0;">${H}</p>
        `,g.appendChild($)}}else u.forEach((R,C)=>{const H=p==="list"?E(R):I(R);H.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",H.style.animationDelay=`${Math.min(C*50,300)}ms`,g.appendChild(H)})},r=u=>{document.querySelectorAll("bma-tournament-card").forEach(p=>{p.setAttribute("data-sync-theme",u)})},o=u=>{const d=document.querySelectorAll("bma-tournament-card"),p=Date.now().toString();d.forEach(f=>{if(f===u){if(f.setAttribute("data-bma-tourn-focus",p),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="")}}else if(f.setAttribute("data-bma-tourn-focus",""),f.shadowRoot){const g=f.shadowRoot.querySelector(".card-focus__feedback");g&&(g.style.display="none")}}),typeof neodigmMarquee<"u"&&neodigmMarquee.init()},i=u=>{const{action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...m}=u.detail;console.log("[home_route] Tournament action:",{action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...m}),o(u.target),de.publish("WC.TOURN_ACTION",JSON.stringify({action:d,tournamentId:p,tournamentGuid:f,tournamentStatus:g,...m,timestamp:Date.now()}))};let l=null;const c=()=>{const u=document.getElementById("home-datetime--id");if(!u)return;const d=new Date,p=d.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"}),f=d.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"});u.textContent=`${p} · ${f}`};return lt(async()=>{if(document.body.classList.add("route-home-shell"),!a.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),e.push({name:"signin_route"});return}c(),l=setInterval(c,24e3);const u=document.getElementById("app");if(u){const g=a.appCLIFeatures.features.theme?.state,m=a.appCLIFeatures.features.lang?.state,v=a.appCLIFeatures.features.motif?.state,h=a.appSession.session_user.guid;g&&(u.setAttribute("data-sync-theme",g),document.body.setAttribute("data-sync-theme",g)),m&&u.setAttribute("data-sync-lang",m),v&&u.setAttribute("data-sync-motif",v),h&&u.setAttribute("data-user-guid",h)}window._homeRouteRenderCards=n;const d=de.subscribe("APP.ROUTE_SYNC",(g,m)=>{try{const v=JSON.parse(m);v.theme&&r(v.theme.state)}catch(v){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",v)}});if(window._homeRoutePubSubToken=d,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),de.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",i),window._pendingTournGuid){const g=window._pendingTournGuid;delete window._pendingTournGuid,setTimeout(()=>{de.publish("WC.TOURN_ACTION",JSON.stringify({action:"PLAY",tournamentGuid:g,timestamp:Date.now()}))},800)}const p=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,f=new vt(".featured-swiper",{modules:[Gm,Um],slidesPerView:1,spaceBetween:16,loop:p>1,initialSlide:0,centeredSlides:p>1,autoplay:p>1?{delay:4e3,disableOnInteraction:!0,pauseOnMouseEnter:!0}:!1,pagination:{el:".swiper-pagination",clickable:!0},breakpoints:{320:{slidesPerView:p>1?1.7:1,spaceBetween:10,centeredSlides:p>1},640:{slidesPerView:Math.min(2,p),spaceBetween:16,centeredSlides:!1},1024:{slidesPerView:Math.min(3,p),spaceBetween:20,centeredSlides:!1},1280:{slidesPerView:Math.min(3,p),spaceBetween:24,centeredSlides:!1}}});window.featuredSwiper=f,de.publish(a.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Bt(()=>{document.body.classList.remove("route-home-shell"),l&&clearInterval(l),document.removeEventListener("bma-tournament-action",i),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,window._homeRoutePubSubToken&&de.unsubscribe(window._homeRoutePubSubToken)}),(u,d)=>(pe(),fe("main",jm,[b("div",qm,[b("bma-app-head-top",{"data-user-name":ot(a).appSession.session_user.name||"Guest"},null,8,Vm),d[0]||(d[0]=b("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),b("div",Ym,[d[19]||(d[19]=ut('<section class="featured-carousel-section"><div class="swiper featured-swiper"><div class="swiper-wrapper"></div><div class="swiper-pagination"></div></div><div class="home-datetime" id="home-datetime--id" aria-hidden="true">—</div><bma-scores-banner id="bma-scores-banner--id"></bma-scores-banner></section><bma-app-head-sports data-selected-chip="all"></bma-app-head-sports>',2)),b("nav",Km,[b("button",Wm,[(pe(),fe("svg",Jm,[...d[1]||(d[1]=[b("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[2]||(d[2]=Be(" Active ",-1))]),b("button",Xm,[(pe(),fe("svg",Qm,[...d[3]||(d[3]=[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),d[4]||(d[4]=Be(" Completed ",-1))]),b("button",Zm,[(pe(),fe("svg",eg,[...d[5]||(d[5]=[b("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),d[6]||(d[6]=Be(" Active ",-1)),d[7]||(d[7]=b("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{visibility:"hidden"}},"0",-1))]),b("button",tg,[(pe(),fe("svg",ag,[...d[8]||(d[8]=[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"},null,-1)])])),d[9]||(d[9]=Be(" Completed ",-1))]),b("button",sg,[(pe(),fe("svg",ng,[...d[10]||(d[10]=[b("path",{d:"M7 4V2h10v2h5v3c0 2.76-2.24 5-5 5h-.58c-.59 1.85-2.17 3.31-4.42 3.79V19h4v2H8v-2h4v-3.21C9.75 15.31 8.17 13.85 7.58 12H7c-2.76 0-5-2.24-5-5V4h5zm0 2H4v1c0 1.3.84 2.4 2 2.82V6zm10 3.82C18.16 9.4 19 8.3 19 7V6h-3v3.82z"},null,-1)])])),d[11]||(d[11]=Be(" Bet Max Pools ",-1)),d[12]||(d[12]=b("span",{class:"home-tab__badge",id:"home-tab-private-badge"},"0",-1))]),b("button",rg,[(pe(),fe("svg",og,[...d[13]||(d[13]=[b("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"},null,-1)])])),d[14]||(d[14]=Be(" Invites ",-1)),d[15]||(d[15]=b("span",{class:"home-tab__badge home-tab__badge--soft",id:"home-tab-invites-badge"},"0",-1))])]),b("section",{class:"create-cta-banner",onClick:s},[d[18]||(d[18]=b("div",{class:"create-cta-banner__glow","aria-hidden":"true"},null,-1)),b("div",ig,[d[17]||(d[17]=ut('<div class="create-cta-banner__text"><span class="create-cta-banner__eyebrow" aria-label="Tournament perks"><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--1">Select Your Sports</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--2">Choose Your Game Mode</span><span class="create-cta-banner__eyebrow-item create-cta-banner__eyebrow-item--3">Invite Your Friends</span><span class="create-cta-banner__eyebrow-progress" aria-hidden="true"></span></span><span class="create-cta-banner__title">Start Your Own Bet Max Pool!</span><span class="create-cta-banner__sub">Your contest, your rules, your friends. Start a Bet Max Pool for Free.</span></div><div class="create-cta-banner__trophies" aria-hidden="true"><span class="create-cta-banner__trophy create-cta-banner__trophy--silver"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--gold"></span><span class="create-cta-banner__trophy create-cta-banner__trophy--bronze"></span></div>',2)),b("button",{class:"create-cta-banner__btn",type:"button",onClick:Ca(s,["stop"])},[...d[16]||(d[16]=[b("span",null,"Create",-1),b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"9 18 15 12 9 6"})],-1)])])])]),d[20]||(d[20]=ut('<section class="tournaments-section"><div class="tournaments-grid"></div></section><section class="invites-section"><div class="invites-list" id="invites-list"></div><div class="invites-empty" id="invites-empty" hidden><svg width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.25)" aria-hidden="true"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg><p class="invites-empty__head">No pending invites</p><p class="invites-empty__sub">When a friend invites you to a Bet Max Pool, it&#39;ll show up here.</p></div></section><bma-app-foot-branded></bma-app-foot-branded>',3))])]))}},cg={};function dg(t,e){return pe(),fe("main",null,[...e[0]||(e[0]=[b("h1",null,"App FAQ",-1)])])}const Ls=ma(cg,[["render",dg]]),ug={};function pg(t,e){return pe(),fe("main",null,[...e[0]||(e[0]=[b("h1",null,"App Help",-1)])])}const fg=ma(ug,[["render",pg]]);let _s={baseUrl:"/m5t/v5",getToken:()=>null,debug:!1};function hg(t={}){_s={..._s,...t}}function mg(){const t=_s.baseUrl;if(typeof t=="function")try{return t()||"/m5t/v5"}catch{return"/m5t/v5"}return t}async function _c(t,e={},a="CLIENT"){const s={caption:t,content:e,status:a};if(_s.debug)try{console.log("[clientMeter]",t,a,e)}catch{}const n=`${mg()}/appMeter/client-event`,r=_s.getToken?.(),o={"Content-Type":"application/json"};r&&(o.Authorization=`Bearer ${r}`);try{if(typeof fetch=="function"){const i=await fetch(n,{method:"POST",headers:o,body:JSON.stringify(s),keepalive:!0});if(i.ok||i.status===202)return}}catch{}try{if(typeof navigator<"u"&&typeof navigator.sendBeacon=="function"){const i=new Blob([JSON.stringify(s)],{type:"application/json"});if(navigator.sendBeacon(n,i))return}}catch{}try{console.warn("[clientMeter] fell through to console:",t,e)}catch{}}async function gg(t,e,a){}const bg=Object.freeze(Object.defineProperty({__proto__:null,clientMeter:_c,configureClientMeter:hg,noopClientMeter:gg},Symbol.toStringTag,{value:"Module"})),qt=class qt{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(e,a,s,n=!0){this.strChat=s,this.isDebug=n;const r=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),e=e.replaceAll("##SSEID##",a).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=e.includes("?")?"&":"?";e=`${e}${o}sessionId=${r}`,this.isDebug&&console.warn(" ~... sse push uri | ",e),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(e),this.sseEvent.onopen=function(i){qt.onSSEOpen(i)},this.sseEvent.onmessage=function(i){qt.onSSEMessage(i)},this.sseEvent.onerror=function(i){qt.onSSEError(i)}}static async onSSEOpen(e){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",e)}static async onSSEMessage(e){let a=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",e),e?.data){localStorage.setItem("sse_lastkey",e?.data?.id||-1);try{if(a=JSON.parse(e.data),a?.class!="NO_MESSAGE")if(a?.class&&a?.msg)switch(a.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":a?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(a.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",a.id+" | "+a.class+" | "+a.msg+" | "+a.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",a),de.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(a));break;case"INVITE_SYNC":this.isDebug&&console.warn(" ~... sse INVITE_SYNC | ",a),de.publish("SSE.CORE.INVITE_SYNC",JSON.stringify(a));try{let s=a?.msg;typeof s=="string"&&(s=JSON.parse(s));const n=Array.isArray(s)?s[0]:null;_c("invite_sync_received",{invite_guid:n?.invite?.guid||null,tournament_guid:n?.invite?.tournament_guid||null,action:n?.action||null,sse_id:a?.id||null})}catch{}break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(e){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",e)}static async disconnectSSE(e){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",e),this.sseEvent.close(),this.sseEvent=null}};qt.sseEvent=null,qt.strChat=null,qt.isDebug=!0,qt.sessionId=null;let ln=qt;class Qt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((e=document)=>({ver:"4.0.0",isMobile:function(){return e.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(a){return Math.floor(Math.random()*a)},fPromiseJS:async function(a,s){return new Promise((n,r)=>{const o=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});o.onload=n,o.onerror=r,a.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(a,s,n){const r=Object.assign(a.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:s});n&&(r.onload=function(){n()}),a.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(a,s){let n=a.createElement("link");n.rel="stylesheet",n.href=s,a.getElementsByTagName("head")[0].appendChild(n)},data2prop:function(a){a=a.replace("data-","").toLowerCase();let s=a.split(""),n=[],r=!1;return s.forEach(o=>{o=="-"?r=!0:(n.push(r?o.toUpperCase():o),r=!1)}),n.join("")},doDataLayer:function(a,s){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+a+" | "+s),window.dataLayer&&window.dataLayer.push({event:a,msg:s})},isJSON:function(a){let s=!1;try{s=typeof JSON.parse(a)}catch{}return s=="object"},appStateListen:function(a){NeodigmKeylime.subscribe("mouseover",n=>{n?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(n.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(n?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let s=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;s&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=s)},prettyTimeRETIRE:a=>{let s=new Date(a).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return a=="Dec 31, 1969"&&(s=""),s},prettyTime:a=>new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:a=>a&&a[0].toUpperCase()+a.slice(1)||"",genHash:a=>(a=String(a),Math.abs(a.split("").reduce((s,n)=>(s<<5)-s+n.charCodeAt(0)|0,0))),flashTitle:(a=neodigmOpt.N55_THEME_DEFAULT,s=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[a]&&(document.title=neodigmOpt.N55_THEME_COLORS[a][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},s))},robinTheme:function(a=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const n=56;s.forEach((o,i)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=a},i*n),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},i*(n+n)))}),s=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;s.forEach((o,i)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=a},i*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},i*r+3e3)}),neodigmUtils.flashTitle(a,2e3)}},countTo:async function(a,s,n=neodigmOpt.neodigmMetronome.countTo){const r=[16,n];return[...document.querySelectorAll(a)].forEach(function(o,i){let l=Math.abs(Number(o.textContent)-s);neodigmMetronome.unsubscribe(r[1]+i).subscribe(function(c){let u=Number(o.textContent);if(!Number.isNaN(u)&&!isNaN(u)&&s!=u){let d=l/r[0];d=Math.round(d),c!=0?o.textContent=u<s?u+d:u-d:o.textContent=s}},r[1]+i,r[0])}),neodigmUtils},typeOff:async function(a){let s=document.querySelector(a?.q1st);if(s){let n=s.textContent.length,r=window.getComputedStyle(s),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(s.offsetHeight&&(s.style.height=s.offsetHeight-o+"px");n;)setTimeout(()=>{s.textContent=s.textContent.replace(/.$/,"")},a.uniqueDelay*n--)}},typeOn:async function(a){let s=document.querySelector(a?.q1st);if(s){s.dataset.n55Typeon=0;let n=a.msg.replaceAll("|","   |   ")+"   ",r=n.split("|");if(a?.mode=="OFF")return neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay}),neodigmUtils;if(a?.mode=="RANDOM"&&r.length){let o=s.dataset.n55Typeon=neodigmUtils.f02x(r.length);n=r[o]}neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),neodigmMetronome.unsubscribe(a.uniqueDelay).subscribe(o=>{let i=n[n.length-(o+1)];i=="|"&&(i="",neodigmUtils.typeOff({q1st:a.q1st,uniqueDelay:a.uniqueDelay/s.textContent.length-4}),s.dataset.n55Typeon++),s.textContent+=i,a?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(a)},a.uniqueDelay,n.length)}return neodigmUtils},getValJSON:function(a,s){try{return JSON.parse(a)}catch{return JSON.parse('{ "'+s+'": "'+a+'" }')}},walkDOM3:function(a,s,n=!1){let r=null;if(!r&&a?.dataset[s]&&(r=a),!r&&a?.parentNode?.dataset[s]&&(r=a.parentNode),!r&&a.tagName!="BODY"&&a?.parentNode?.parentNode?.dataset[s]&&(r=a.parentNode.parentNode),r)return n?r:r.dataset[s]},doSetT:function(a,s){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(a,s):setTimeout(a,s)},shake:function(a,s=!0){return[...document.querySelectorAll(a)].forEach(function(n,r){n.classList.add("shake__an"),setTimeout(function(){n.classList.remove("shake__an")},460)}),Qt.neodigmUtils},hardReload:function(a="n55reset"){const s=new URLSearchParams(window.location.search);s.set(a,new Date().getTime());const n=s.toString();window.location.search=n}}))}const _g={class:"auth-page"},vg={class:"auth-page-right"},yg={class:"auth-card"},wg={class:"form-group"},xg={class:"form-group"},Tg={class:"password-input-wrapper"},kg=["type"],Sg={style:{"text-align":"right"}},Eg={class:"auth-link-center"},Ag={__name:"signin_route",setup(t){const e=ct(),a=xe(),s=(p="signin")=>{e.push({name:p})};let n=null;const r=Pe(!1),o=()=>{r.value=!r.value},i=(p=3,f=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const g=Math.floor(Math.random()*p)+f,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${g}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(v,h)=>{const _=JSON.parse(h);switch(Object.keys(_)[0]){case"Motif":i();break;case"Lang":l();break}}))},l=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(m=>m.code==f)[0]?.copy;g=g.filter(m=>m[0]==p.dataset.syncMicrocopyText)[0],g&&(p.textContent=g[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=a.appCLIFeatures?.features?.lang?.state;let g=a.appMeta.microcopy.language.filter(m=>m.code==f)[0]?.copy;g=g.filter(m=>m[0]==p.dataset.syncMicrocopyPlaceholder)[0],g&&(p.placeholder=g[1])})},c=p=>{Qt.neodigmUtils().shake(p||"#inp__text--email")},u=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),a.doCLI(p)},d=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let g=null,m=null;if(!p?.value)g="Please enter your email",m="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)g="Please enter a valid email address",m="#inp__text--email";else if(!f?.value)g="Please enter your password",m="#inp__text--password";else if(f.value.length<10)g="Password must be at least 10 characters",m="#inp__text--password";else{const v={email:p.value,hash:Qt.neodigmUtils().genHash(f.value)};Te.doSignin(v,h=>{const E=(h?.entity?.tags||[]).find(R=>R.userName)?.userName||"";if(a.appSession.session_user.authenticated=!0,a.appSession.session_user.email=v.email,a.appSession.session_user.fname=h?.entity?.first,a.appSession.session_user.lname=h?.entity?.last,a.appSession.session_user.userName=E,a.appSession.session_user.name=E,a.appSession.session_user.guid=h?.entity?.guid,a.saveSessionUser(),a.appCLIFeatures.features.sse.state){const R=h?.entity?.guid||a.appSession.session_user.guid;ln.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",R,a,!0)}Te.fetchMyInvites().then(R=>{R.ok&&Array.isArray(R.data?.invites)&&(a.setCoreInvites(R.data.invites),de.publish(a.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"signin",count:R.data.invites.length,timestamp:Date.now()})))}).catch(R=>console.warn("[signin] fetchMyInvites failed:",R));const I=lh();if(I?.tournamentGuid){const R={name:"preview_route",params:{guid:I.tournamentGuid}};I.joinSlug&&(R.query={s:I.joinSlug}),e.push(R)}})}g&&(c(m),neodigmToast.q(g,"danger"))};return lt(()=>{i(),l()}),(p,f)=>(pe(),fe("div",_g,[f[10]||(f[10]=ut('<div class="auth-page-left" data-v-f41beb02><div class="auth-bg" data-v-f41beb02><div class="auth-bg-image" data-v-f41beb02></div><div class="auth-bg-image" data-v-f41beb02></div><div class="auth-bg-image" data-v-f41beb02></div></div><div class="auth-overlay" data-v-f41beb02></div><div class="auth-branding-content" data-v-f41beb02><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-f41beb02><p class="auth-branding-tagline" data-v-f41beb02>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f41beb02>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f41beb02> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",vg,[b("div",yg,[f[9]||(f[9]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),b("form",{class:"auth-form",onSubmit:Ca(d,["prevent"])},[b("div",wg,[f[4]||(f[4]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=g=>u())},null,32)]),b("div",xg,[f[5]||(f[5]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",Tg,[b("input",{id:"inp__text--password",type:r.value?"text":"password",autocomplete:"current-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,kg),b("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=g=>o()),tabindex:"-1"},[b("span",{class:Ve(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",Sg,[b("a",{class:"auth-link",onClick:f[2]||(f[2]=g=>s("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),b("p",Eg,[f[6]||(f[6]=b("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Be()),b("a",{class:"auth-link",onClick:f[3]||(f[3]=g=>s("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},Cg=ma(Ag,[["__scopeId","data-v-f41beb02"]]),Pg={class:"auth-page"},Og={__name:"signout_route",setup(t){const e=ct();xe();const a=()=>{mvvLegit.doSignout()},s=()=>{e.push({name:"home_route"})};return(n,r)=>(pe(),fe("div",Pg,[r[1]||(r[1]=ut('<div class="auth-page-left" data-v-15bfefd6><div class="auth-bg" data-v-15bfefd6><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div><div class="auth-bg-image" data-v-15bfefd6></div></div><div class="auth-overlay" data-v-15bfefd6></div><div class="auth-branding-content" data-v-15bfefd6><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-15bfefd6><p class="auth-branding-tagline" data-v-15bfefd6>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-15bfefd6>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-15bfefd6> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",{class:"auth-page-right"},[b("div",{class:"auth-card"},[r[0]||(r[0]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title"},"Sign Out"),b("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),b("div",{class:"auth-actions"},[b("button",{onClick:a,class:"btn btn-red"}," Sign Out "),b("button",{onClick:s,class:"btn btn-outline"}," Cancel ")])])])]))}},Lg=ma(Og,[["__scopeId","data-v-15bfefd6"]]),Mg={class:"auth-page"},Dg={class:"auth-page-right"},Rg={class:"auth-card auth-card-wide"},Ig={class:"form-row"},$g={class:"form-group"},Ng={class:"form-group"},Bg={class:"form-group"},Fg={class:"form-group"},zg={class:"form-group"},Hg={class:"password-input-wrapper"},Ug=["type"],Gg={class:"form-group"},jg={class:"password-input-wrapper"},qg=["type"],Vg={class:"form-group form-group-checkbox"},Yg={class:"checkbox-label"},Kg={class:"auth-link-center"},Wg={__name:"signup_route",setup(t){const e=ct(),a=xe(),s=(w="signin")=>{e.push({name:w})};let n=null,r=null;const o=Pe(!1),i=Pe(!1),l=Pe(!1),c=()=>{o.value=!o.value},u=()=>{i.value=!i.value},d=w=>{w.preventDefault(),de.publish(a.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(w=3,E=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":w=3,E=1;break;case"white_label":w=3,E=4;break}const I=Math.floor(Math.random()*w)+E,R=document.querySelector(".img__bg")?.classList;R&&(R.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),R.add(`img__bg--${I}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(C,H)=>{const $=JSON.parse(H);switch(Object.keys($)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(w=>{const E=a.appCLIFeatures?.features?.lang?.state;let I=a.appMeta.microcopy.language.filter(R=>R.code==E)[0]?.copy;I=I.filter(R=>R[0]==w.dataset.syncMicrocopyText)[0],I&&(w.textContent=I[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(w=>{const E=a.appCLIFeatures?.features?.lang?.state;let I=a.appMeta.microcopy.language.filter(R=>R.code==E)[0]?.copy;I=I.filter(R=>R[0]==w.dataset.syncMicrocopyPlaceholder)[0],I&&(w.placeholder=I[1])})},g=w=>{Qt.neodigmUtils().shake(w||"#inp__text--email")},m=()=>{let w=document.querySelectorAll("#inp__text--email")[0].value;a.doCLI(w)},v=w=>{const E=[];return w.length<10&&E.push("at least 10 characters"),/[a-z]/.test(w)||E.push("1 lowercase"),/[A-Z]/.test(w)||E.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(w)||E.push("1 special character"),/[^\x00-\x7F]/.test(w)&&E.push("ASCII characters only"),E},h=async()=>{const w=document.querySelector("#inp__text--username"),E=w?.value?.trim();if(E)try{(await Te.checkUserName(E)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),w.value="",w.focus())}catch(I){console.error("Error checking username:",I)}},_=()=>{const w=document.querySelector("#inp__text--first-name"),E=document.querySelector("#inp__text--last-name"),I=document.querySelector("#inp__text--email"),R=document.querySelector("#inp__text--username"),C=document.querySelector("#inp__text--password"),H=document.querySelector("#inp__text--verify-password");let $=null,G=null;if(!w?.value)$="Please enter your first name",G="#inp__text--first-name";else if(!E?.value)$="Please enter your last name",G="#inp__text--last-name";else if(!I?.value)$="Please enter your email",G="#inp__text--email";else if(I.value.indexOf("@")===-1||I.value.indexOf(".")===-1)$="Please enter a valid email address",G="#inp__text--email";else if(!R?.value)$="Please enter a user name",G="#inp__text--username";else if(!C?.value)$="Please enter a password",G="#inp__text--password";else{const j=v(C.value);if(j.length>0)$="Password must have:|"+j.join(", "),G="#inp__text--password";else if(!H?.value)$="Please verify your password",G="#inp__text--verify-password";else if(C.value!==H.value)$="Passwords do not match",G="#inp__text--verify-password";else{const F=w.value.trim(),q=E.value.trim(),P=[{userName:R.value.trim(),ts:Date.now()}],A={email:I.value,hash:Qt.neodigmUtils().genHash(C.value),first:F,last:q,company:"",phone:"",tags:P};Te.doSignup(A,S=>{S.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}$&&(g(G),neodigmToast.q($,"danger"))};return lt(()=>{p(),f(),r||(r=de.subscribe(a.hierTopics.ROUTE__SIGNUP__TERMS,(w,E)=>{JSON.parse(E).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),l.value=!0)}))}),(w,E)=>(pe(),fe("div",Mg,[E[23]||(E[23]=ut('<div class="auth-page-left" data-v-e1a086be><div class="auth-bg" data-v-e1a086be><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div><div class="auth-bg-image" data-v-e1a086be></div></div><div class="auth-overlay" data-v-e1a086be></div><div class="auth-branding-content" data-v-e1a086be><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-e1a086be><p class="auth-branding-tagline" data-v-e1a086be>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-e1a086be>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-e1a086be> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",Dg,[b("div",Rg,[b("form",{class:"auth-form",onSubmit:Ca(_,["prevent"])},[b("div",Ig,[b("div",$g,[E[12]||(E[12]=b("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),b("input",{id:"inp__text--first-name",type:"text",autocomplete:"given-name","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"First name",onKeyup:E[0]||(E[0]=Yt(I=>_(),["enter"]))},null,32)]),b("div",Ng,[E[13]||(E[13]=b("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),b("input",{id:"inp__text--last-name",type:"text",autocomplete:"family-name","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Last name",onKeyup:E[1]||(E[1]=Yt(I=>_(),["enter"]))},null,32)])]),b("div",Bg,[E[14]||(E[14]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"email",autocomplete:"email","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:E[2]||(E[2]=I=>m()),onKeyup:E[3]||(E[3]=Yt(I=>_(),["enter"]))},null,32)]),b("div",Fg,[E[15]||(E[15]=b("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),b("input",{id:"inp__text--username",type:"text",autocomplete:"username","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:E[4]||(E[4]=I=>h()),onKeyup:E[5]||(E[5]=Yt(I=>_(),["enter"]))},null,32)]),b("div",zg,[E[16]||(E[16]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",Hg,[b("input",{id:"inp__text--password",type:o.value?"text":"password",autocomplete:"new-password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:E[6]||(E[6]=Yt(I=>_(),["enter"]))},null,40,Ug),b("button",{type:"button",class:"password-toggle-btn",onClick:E[7]||(E[7]=I=>c()),tabindex:"-1"},[b("span",{class:Ve(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),E[17]||(E[17]=b("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),b("div",Gg,[E[18]||(E[18]=b("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),b("div",jg,[b("input",{id:"inp__text--verify-password",type:i.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:E[8]||(E[8]=Yt(I=>_(),["enter"]))},null,40,qg),b("button",{type:"button",class:"password-toggle-btn",onClick:E[9]||(E[9]=I=>u()),tabindex:"-1"},[b("span",{class:Ve(i.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",Vg,[b("label",Yg,[Dt(b("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":E[10]||(E[10]=I=>l.value=I),class:"terms-checkbox"},null,512),[[Bl,l.value]]),E[19]||(E[19]=b("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),b("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:d},"Terms")])]),E[22]||(E[22]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),b("p",Kg,[E[20]||(E[20]=b("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),E[21]||(E[21]=Be()),b("a",{class:"auth-link",onClick:E[11]||(E[11]=I=>s("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},Jg=ma(Wg,[["__scopeId","data-v-e1a086be"]]),Xg={class:"auth-page"},Qg={class:"auth-page-right"},Zg={class:"auth-card"},eb={class:"form-group"},tb={class:"auth-link-center"},ab={__name:"forgot_route",setup(t){const e=ct(),a=xe(),s=(c="signin_route")=>{e.push({name:c})};let n=null;const r=(c=3,u=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":c=3,u=1;break;case"white_label":c=3,u=4;break}const d=Math.floor(Math.random()*c)+u,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${d}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(f,g)=>{const m=JSON.parse(g);switch(Object.keys(m)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const u=a.appCLIFeatures?.features?.lang?.state;let d=a.appMeta.microcopy.language.filter(p=>p.code==u)[0]?.copy;d=d.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],d&&(c.textContent=d[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const u=a.appCLIFeatures?.features?.lang?.state;let d=a.appMeta.microcopy.language.filter(p=>p.code==u)[0]?.copy;d=d.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],d&&(c.placeholder=d[1])})},i=c=>{Qt.neodigmUtils().shake(c||"#inp__text--email")},l=()=>{const c=document.querySelector("#inp__text--email");let u=null,d=null;if(!c?.value)u="Please enter your email address",d="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)u="Please enter a valid email address",d="#inp__text--email";else{const p={method:"GET",headers:Te.genHeaders()};fetch(Te.API_baseURI+"/m5t/"+Te.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{s("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}u&&(i(d),neodigmToast.q(u,"danger"))};return lt(()=>{r(),o()}),(c,u)=>(pe(),fe("div",Xg,[u[7]||(u[7]=ut('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",Qg,[b("div",Zg,[u[6]||(u[6]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),b("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),b("form",{class:"auth-form",onSubmit:Ca(l,["prevent"])},[b("div",eb,[u[2]||(u[2]=b("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),b("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:u[0]||(u[0]=Yt(d=>l(),["enter"]))},null,32)]),u[5]||(u[5]=b("div",{class:"auth-actions"},[b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),b("p",tb,[u[3]||(u[3]=b("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),u[4]||(u[4]=Be()),b("a",{class:"auth-link",onClick:u[1]||(u[1]=d=>s("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},sb={class:"auth-page"},nb={class:"auth-page-right"},rb={class:"auth-card"},ob={class:"form-group"},ib={class:"password-input-wrapper"},lb=["type"],cb={class:"form-group"},db={class:"password-input-wrapper"},ub=["type"],pb={__name:"resethash_route",setup(t){const e=ct(),a=xe(),s=()=>{e.push({name:"home_route"})};let n=null;const r=Pe(!1),o=Pe(!1),i=()=>{r.value=!r.value},l=()=>{o.value=!o.value},c=(g=3,m=1)=>{switch(a.appCLIFeatures.features.motif.state){case"brand":g=3,m=1;break;case"white_label":g=3,m=4;break}const v=Math.floor(Math.random()*g)+m,h=document.querySelector(".img__bg")?.classList;h&&(h.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),h.add(`img__bg--${v}`)),n||(n=de.subscribe("APP__ROUTE_SYNC",(_,w)=>{const E=JSON.parse(w);switch(Object.keys(E)[0]){case"Motif":c();break;case"Lang":u();break}}))},u=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(g=>{const m=a.appCLIFeatures?.features?.lang?.state;let v=a.appMeta.microcopy.language.filter(h=>h.code==m)[0]?.copy;v=v.filter(h=>h[0]==g.dataset.syncMicrocopyText)[0],v&&(g.textContent=v[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(g=>{const m=a.appCLIFeatures?.features?.lang?.state;let v=a.appMeta.microcopy.language.filter(h=>h.code==m)[0]?.copy;v=v.filter(h=>h[0]==g.dataset.syncMicrocopyPlaceholder)[0],v&&(g.placeholder=v[1])})},d=g=>{Qt.neodigmUtils().shake(g||"#inp__text--password")},p=g=>{const m=[];return g.length<10&&m.push("at least 10 characters"),/[a-z]/.test(g)||m.push("1 lowercase"),/[A-Z]/.test(g)||m.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(g)||m.push("1 special character"),/[^\x00-\x7F]/.test(g)&&m.push("ASCII characters only"),m},f=()=>{const g=document.querySelector("#inp__text--password"),m=document.querySelector("#inp__text--verify-password");let v=null,h=null;if(!g?.value)v="Please enter a password",h="#inp__text--password";else{const _=p(g.value);if(_.length>0)v="Password must have:|"+_.join(", "),h="#inp__text--password";else if(!m?.value)v="Please verify your password",h="#inp__text--verify-password";else if(g.value!==m.value)v="Passwords do not match",h="#inp__text--verify-password";else{const w=a.appSession.session_user.email||"",E={email:w,hash:Qt.neodigmUtils().genHash(g.value),modified_by:w},I={method:"POST",body:JSON.stringify(E),headers:Te.genHeaders()};fetch(Te.API_baseURI+"/m5t/"+Te.API_ver+"/acctEntity/resetHash",I).then(R=>R.json()).then(R=>{R.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(R=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}v&&(d(h),neodigmToast.q(v,"danger"))};return lt(()=>{c(),u()}),(g,m)=>(pe(),fe("div",sb,[m[9]||(m[9]=ut('<div class="auth-page-left" data-v-3ae2c87b><div class="auth-bg" data-v-3ae2c87b><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div><div class="auth-bg-image" data-v-3ae2c87b></div></div><div class="auth-overlay" data-v-3ae2c87b></div><div class="auth-branding-content" data-v-3ae2c87b><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-3ae2c87b><p class="auth-branding-tagline" data-v-3ae2c87b>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3ae2c87b>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3ae2c87b> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",nb,[b("div",rb,[m[8]||(m[8]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),b("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),b("form",{class:"auth-form",onSubmit:Ca(f,["prevent"])},[b("div",ob,[m[4]||(m[4]=b("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),b("div",ib,[b("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:m[0]||(m[0]=Yt(v=>f(),["enter"]))},null,40,lb),b("button",{type:"button",class:"password-toggle-btn",onClick:m[1]||(m[1]=v=>i()),tabindex:"-1"},[b("span",{class:Ve(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),m[5]||(m[5]=b("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),b("div",cb,[m[6]||(m[6]=b("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),b("div",db,[b("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:m[2]||(m[2]=Yt(v=>f(),["enter"]))},null,40,ub),b("button",{type:"button",class:"password-toggle-btn",onClick:m[3]||(m[3]=v=>l()),tabindex:"-1"},[b("span",{class:Ve(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),b("div",{class:"auth-actions"},[m[7]||(m[7]=b("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),b("button",{type:"button",onClick:s,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},fb=ma(pb,[["__scopeId","data-v-3ae2c87b"]]),hb={class:"auth-page"},mb={class:"auth-page-right"},gb={class:"auth-card"},bb={class:"verification-content"},_b={class:"timer-display"},vb={__name:"verf_link_route",setup(t){const e=ct();xs(),xe();const a=Pe(7200);let s=null;const n=o=>{const i=Math.floor(o/3600),l=Math.floor(o%3600/60),c=o%60;return`${i.toString().padStart(2,"0")}:${l.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{s=setInterval(()=>{a.value--,a.value<=0&&(clearInterval(s),neodigmWired4Sound.sound(14),e.push({name:"splash_route"}))},1e3)};return lt(()=>{r()}),Bt(()=>{s&&clearInterval(s)}),(o,i)=>(pe(),fe("div",hb,[i[4]||(i[4]=ut('<div class="auth-page-left" data-v-d92b2a33><div class="auth-bg" data-v-d92b2a33><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div><div class="auth-bg-image" data-v-d92b2a33></div></div><div class="auth-overlay" data-v-d92b2a33></div><div class="auth-branding-content" data-v-d92b2a33><img src="https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&amp;format=png" alt="BMA Logo" class="auth-logo-img" data-m5t-brand-src-swap="true" data-v-d92b2a33><p class="auth-branding-tagline" data-v-d92b2a33>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-d92b2a33>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-d92b2a33> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),b("div",mb,[b("div",gb,[i[3]||(i[3]=b("div",{class:"auth-header"},[b("h1",{class:"auth-title"},"Check Your Email"),b("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),b("div",bb,[i[0]||(i[0]=b("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),i[1]||(i[1]=b("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),i[2]||(i[2]=b("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),b("div",_b,be(n(a.value)),1)])])])]))}},yb=ma(vb,[["__scopeId","data-v-d92b2a33"]]);class wb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-email","data-active-count","data-played-count","data-trophy-count"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(e,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const e=this.getAttribute("data-username")||"Player",a=this.getAttribute("data-email")||"",s=this.getAttribute("data-active-count")||"0",n=this.getAttribute("data-played-count")||"0",r=this.getAttribute("data-trophy-count")||"0",o=e.charAt(0).toUpperCase();this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
                :host {
                    display: block;
                    width: 100%;
                }
                /* Compact hero, mirrors bma-top-players-hero's footprint —
                   avatar + identity sit on a single horizontal row instead
                   of the old stacked column. KPIs stay as the bottom row. */
                .hero {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 18px 20px 14px;
                    background: linear-gradient(135deg, #1a5235 0%, #0f3320 100%);
                    border-top: 2px solid rgba(255, 215, 0, 0.3);
                    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                    position: relative;
                    overflow: hidden;
                }
                .hero__id-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    width: 100%;
                    max-width: 360px;
                    margin-bottom: 12px;
                }
                .hero__avatar {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #2A3A2E;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: var(--status-locked-text, #F7C60D);
                    text-transform: uppercase;
                    box-shadow: 0 0 0 2px rgba(247, 198, 13, 0.2);
                    flex-shrink: 0;
                }
                .hero__id-block {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                .hero__name {
                    font-size: 1.05rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .hero__email {
                    font-size: 0.72rem;
                    color: rgba(255, 255, 255, 0.45);
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
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
                    padding: 10px 8px 2px;
                    border-right: 1px solid rgba(255, 255, 255, 0.06);
                }
                .hero__kpi:last-child { border-right: none; }
                .hero__kpi-value {
                    display: block;
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    font-variant-numeric: tabular-nums;
                }
                .hero__kpi-label {
                    display: block;
                    font-size: 0.58rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.45);
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-top: 2px;
                }
                @media (max-width: 480px) {
                    .hero { padding: 14px 14px 10px; }
                    .hero__avatar { width: 38px; height: 38px; font-size: 1rem; }
                    .hero__name { font-size: 0.95rem; }
                    .hero__kpi-value { font-size: 0.95rem; }
                }
            </style>
            <div class="hero">
                <div class="hero__id-row">
                    <div class="hero__avatar">${o}</div>
                    <div class="hero__id-block">
                        <div class="hero__name">${e}</div>
                        ${a?`<div class="hero__email">${a}</div>`:""}
                    </div>
                </div>
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
                        <span class="hero__kpi-value">${r}</span>
                        <span class="hero__kpi-label">Trophies</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-profile-hero",wb);class xb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-played","data-first-place","data-trophies","data-favorite-sport","data-favorite-sport-group","data-win-rate","data-win-loss-record"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(e,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const e=this.getAttribute("data-played")||"0",a=this.getAttribute("data-first-place")||"0",s=this.getAttribute("data-trophies")||"0",n=this.getAttribute("data-favorite-sport")||"—",r=this.getAttribute("data-favorite-sport-group")||"",o=this.getAttribute("data-win-rate")||"—",i=this.getAttribute("data-win-loss-record")||"",l=r?`<bma-sport-icon data-sport-group="${r.toLowerCase()}" style="width:20px;height:20px;"></bma-sport-icon>`:"";this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
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
                    <span class="row__value">${e}</span>
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
                    <span class="row__value">${o}${i?`<span class="row__sub">${i}</span>`:""}</span>
                </div>
            </div>
        `}}customElements.define("bma-profile-stats",xb);class Tb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._openPanels={private:!0,public:!0}}static get observedAttributes(){return["data-contests","data-private-contests"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(e,a,s){this.shadowRoot&&a!==s&&this.render()}get contests(){const e=this.getAttribute("data-contests");if(!e)return[];try{return JSON.parse(e)}catch{return[]}}get privateContests(){const e=this.getAttribute("data-private-contests");if(!e)return[];try{return JSON.parse(e)}catch{return[]}}render(){const e=this.contests,a=this.privateContests,s=u=>`<span class="chip chip--${u==="LOCKED"?"locked":u==="UPCOMING"?"upcoming":u==="COMPLETED"?"completed":"default"}">${u==="LOCKED"?"In Progress":u==="UPCOMING"?"Open":u==="COMPLETED"?"Completed":u}</span>`,n=u=>u===1?'<div class="card__trophy" style="background-image: var(--trophy-gold-tall);"></div>':u===2?'<div class="card__trophy" style="background-image: var(--trophy-silver-tall);"></div>':u===3?'<div class="card__trophy" style="background-image: var(--trophy-bronze-tall);"></div>':"",r=2,o=u=>{const d=Array.isArray(u)?u.filter(Boolean):[];if(d.length===0)return"";const p=d.slice(0,r).map(g=>{const m=Ge.find(_=>_.key===g),v=m?.group||"default",h=m?.abbr||m?.title||g.split("_").pop().toUpperCase().slice(0,4);return`<span class="card__sport">
                    <bma-sport-icon sport="${g}" data-sport-group="${v}"></bma-sport-icon>
                    <span class="card__sport-label">${h}</span>
                </span>`}).join(""),f=d.length>r?`<span class="card__sport-more">+${d.length-r}</span>`:"";return`<div class="card__sports">${p}${f}</div>`},i=u=>{const d=u.placement?n(u.placement):"",p=u.isHosting?'<span class="chip chip--host">Host</span>':"",f=o(u.sports);return`
                <div class="card" data-contest-id="${u.id||""}">
                    <div class="card__content">
                        <span class="card__name">${u.name||"Tournament"}</span>
                        ${f}
                    </div>
                    <div class="card__right">
                        ${d}
                        ${p}
                        ${s(u.status)}
                        <svg class="card__arrow" viewBox="0 0 24 24" fill="currentColor"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
                    </div>
                </div>
            `},l=e.map(i).join(""),c=a.map(i).join("");this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
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
                /* Card is a single horizontal row. align-items: center keeps
                   the right cluster (trophy/chip/arrow) vertically centered
                   regardless of how tall the left content is (1 line for
                   name only, 2 lines when sports row is present). */
                .card {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    padding: 12px 16px;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.04);
                    cursor: pointer;
                    transition: background 0.15s;
                }
                .card:hover { background: rgba(255, 255, 255, 0.04) !important; }
                .card:nth-child(even) { background: rgba(255, 255, 255, 0.02); }
                .card:last-child { border-bottom: none; }
                .card__content {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
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
                /* Sports row — mirrors the yellow icon+abbr language used
                   on the INFO tab of play_route so the visual vocabulary
                   stays consistent across the app. */
                .card__sports {
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                    min-width: 0;
                    overflow: hidden;
                }
                .card__sport {
                    display: inline-flex;
                    align-items: center;
                    gap: 4px;
                    flex-shrink: 0;
                }
                .card__sport bma-sport-icon {
                    width: 16px;
                    height: 16px;
                }
                .card__sport-label {
                    font-size: 0.7rem;
                    font-weight: 600;
                    color: var(--status-locked-text, #F7C60D);
                    letter-spacing: 0.03em;
                }
                .card__sport-more {
                    font-size: 0.7rem;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.45);
                    letter-spacing: 0.03em;
                    flex-shrink: 0;
                }
                /* Trophy sits inline with the status chip + arrow on the right.
                   Sized larger than the chip so it reads as the card's
                   placement award without dominating the row. */
                .card__trophy {
                    width: 32px;
                    height: 32px;
                    background-size: contain;
                    background-repeat: no-repeat;
                    background-position: center;
                    flex-shrink: 0;
                    filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.45));
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
                    .card__trophy { width: 28px; height: 28px; }
                }
            </style>
            <div class="panel ${this._openPanels.private?"":"panel--collapsed"}" data-panel="private">
                <button class="panel__header" type="button" data-toggle="private" aria-expanded="${this._openPanels.private}">
                    <svg class="panel__icon" width="18" height="18" viewBox="0 -960 960 960" fill="currentColor"><path d="M280-120v-80h160v-124q-49-11-87.5-41.5T296-442q-75-9-125.5-65.5T120-640v-40q0-33 23.5-56.5T200-760h80v-80h400v80h80q33 0 56.5 23.5T840-680v40q0 76-50.5 132.5T664-442q-18 46-56.5 76.5T520-324v124h160v80zm0-408v-152h-80v40q0 38 22 68.5t58 43.5m200 128q50 0 85-35t35-85v-240H360v240q0 50 35 85t85 35m200-128q36-13 58-43.5t22-68.5v-40h-80zm-200-52"/></svg>
                    <span class="panel__title">Bet Max Pool History</span>
                    <span class="panel__count">${a.length}</span>
                    <svg class="panel__chevron" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </button>
                <div class="panel__body">
                    ${a.length>0?c:`<div class="empty">You haven't hosted or joined a Bet Max Pool yet.</div>`}
                </div>
            </div>

            <div class="panel ${this._openPanels.public?"":"panel--collapsed"}" data-panel="public" style="margin-top: 16px;">
                <button class="panel__header" type="button" data-toggle="public" aria-expanded="${this._openPanels.public}">
                    <svg class="panel__icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.954 8.954 0 0013 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/></svg>
                    <span class="panel__title">Public Tourney History</span>
                    <span class="panel__count">${e.length}</span>
                    <svg class="panel__chevron" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 10l5 5 5-5z"/></svg>
                </button>
                <div class="panel__body">
                    ${e.length>0?l:'<div class="empty">No contest history yet</div>'}
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".card[data-contest-id]").forEach(u=>{u.addEventListener("click",()=>{const d=u.dataset.contestId;d&&this.dispatchEvent(new CustomEvent("contest-click",{detail:{contestGuid:d},bubbles:!0,composed:!0}))})}),this.shadowRoot.querySelectorAll("[data-toggle]").forEach(u=>{u.addEventListener("click",()=>{const d=u.dataset.toggle;this._openPanels[d]=!this._openPanels[d];const p=this.shadowRoot.querySelector(`[data-panel="${d}"]`);p&&p.classList.toggle("panel--collapsed",!this._openPanels[d]),u.setAttribute("aria-expanded",String(this._openPanels[d]))})})}}customElements.define("bma-profile-history",Tb);class kb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-active-section","data-sections"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(e,a,s){this.shadowRoot&&a!==s&&this.render()}get activeSection(){return this.getAttribute("data-active-section")||"overview"}render(){const e=this.activeSection,o=((this.getAttribute("data-sections")||"profile")==="top-players"?[{id:"overall",label:"Overall",icon:'<path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/>'},{id:"earnings",label:"TD$ Won",icon:'<path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/>'}]:[{id:"overview",label:"Overview",icon:'<path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>'},{id:"contests",label:"Tourneys",icon:'<path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>'},{id:"guide",label:"How to Play",icon:'<path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>'},{id:"account",label:"Account",icon:'<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>',desktopOnly:!0}]).map(i=>`
            <button class="nav-item ${i.id===e?"nav-item--active":""}${i.desktopOnly?" nav-item--desktop-only":""}" data-section="${i.id}" type="button">
                <svg class="nav-item__icon" viewBox="0 0 24 24" fill="currentColor">${i.icon}</svg>
                <span class="nav-item__label">${i.label}</span>
            </button>
        `).join("");this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
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
        `,this.shadowRoot.querySelectorAll(".nav-item").forEach(i=>{i.addEventListener("click",()=>{const l=i.dataset.section;this.setAttribute("data-active-section",l),this.dispatchEvent(new CustomEvent("section-change",{detail:{section:l},bubbles:!0,composed:!0}))})})}}customElements.define("bma-profile-nav",kb);const Sb=[{id:"welcome",label:"Welcome"},{id:"why-play",label:"Why Play"},{id:"betting-101",label:"Betting 101"},{id:"td-dollars",label:"Tournament $"},{id:"game-modes",label:"Game Modes"},{id:"leaderboard",label:"Climb & Win"},{id:"premium",label:"Go Premium"},{id:"glossary",label:"Glossary"}];class Eb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._modesPayload=null,this._modesError=null}static get observedAttributes(){return["data-user-class"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render(),this._fetchModes()}disconnectedCallback(){this._unsub&&this._unsub(),this._sectionObserver&&(this._sectionObserver.disconnect(),this._sectionObserver=null)}attributeChangedCallback(e,a,s){a!==s&&this.shadowRoot&&this.render()}async _fetchModes(){try{const e=window.BMACOREAPI?.API_baseURI&&window.BMACOREAPI?.API_ver?`${window.BMACOREAPI.API_baseURI}/m5t/${window.BMACOREAPI.API_ver}`:"https://machfive-bmacdev-rest.onrender.com/m5t/v5",a=await fetch(`${e}/meta/game-modes`);if(!a.ok)throw new Error(`HTTP ${a.status}`);const s=await a.json();s&&s.ok&&s.modes&&Array.isArray(s.tokens)&&(this._modesPayload=s,this._modesError=null,this.render())}catch(e){this._modesError=e?.message||"failed",this.render()}}_resolveTier(){const e=this.getAttribute("data-user-class")||"";if(window.GameTypeLifeCycle?.forToken)try{const a=window.GameTypeLifeCycle.forToken("DEFAULT_FORMAT");if(a?.resolveUserTier)return a.resolveUserTier(e)}catch{}return/^admin_/.test(e)||/tier_[23]/.test(e)?"premium":"basic"}_isModeAllowed(e,a){return(Array.isArray(e?.tiers)?e.tiers:[]).includes(a)}render(){const e=this._resolveTier();this.shadowRoot.innerHTML=`
            <style>${qe()}${this._styles()}</style>
            <div class="guide">
                ${this._renderTOC()}
                ${this._renderWelcome()}
                ${this._renderWhyPlay()}
                ${this._renderBetting101()}
                ${this._renderTDDollars()}
                ${this._renderGameModes()}
                ${this._renderLeaderboard()}
                ${this._renderPremium(e)}
                ${this._renderGlossary()}
            </div>
        `,this._wireInteractions()}_renderTOC(){return`<nav class="toc" aria-label="Sections">${Sb.map(a=>`
            <button class="toc__pill" type="button" data-toc-target="${a.id}">${a.label}</button>
        `).join("")}</nav>`}_sectionHeader(e,a){return`
            <div class="section__header">
                <span class="section__rule"></span>
                <h2 class="section__title">${e}</h2>
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
        `}_quickStep(e,a,s){return`
            <div class="quick-step">
                <span class="quick-step__num">${e}</span>
                <div class="quick-step__body">
                    <span class="quick-step__title">${a}</span>
                    <span class="quick-step__desc">${s}</span>
                </div>
            </div>
        `}_renderWhyPlay(){const e=[{icon:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",title:"Free to play",body:"No deposits, no withdrawals. Compete on skill. Your TD$ is for tournament play only."},{icon:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM7 10.82C5.84 10.4 5 9.3 5 8V7h2v3.82zM19 8c0 1.3-.84 2.4-2 2.82V7h2v1z",title:"Real games, real odds",body:"Bet on live NFL, NBA, MLB, NHL, soccer slates with up-to-date sportsbook odds."},{icon:"M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18-.21 0-.41-.06-.57-.18l-7.9-4.44A.991.991 0 013 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18.21 0 .41.06.57.18l7.9 4.44c.32.17.53.5.53.88v9zM12 4.15L6.04 7.5 12 10.85 17.96 7.5 12 4.15zM5 15.91l6 3.38v-6.71L5 9.21v6.7zm14 0v-6.7l-6 3.37v6.71l6-3.38z",title:"Skill, not chance",body:"Strategy, research, and discipline determine your finish. Track your record across the platform."},{icon:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z",title:"Compete with friends",body:"Create a private Bet Max Pool, share the link, and run your own contest with friends."}];return`
            <section class="section" id="section-why-play">
                ${this._sectionHeader("Why play","Sports betting culture, no skin in the game. Tournament-only currency means you can play hard without playing real money.")}
                <div class="tiles">
                    ${e.map(a=>`
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
        `}_renderBetting101(){const e=[{name:"Moneyline",short:"Pick the winner",long:"Just pick which team wins. Odds tell you the payout. Favorites have negative odds (less risk, less reward); underdogs have positive odds (more risk, more reward).",example:"Bet TD$ 100 on the Underdog at +150. If they win, you collect TD$ 250 (your stake plus 150 profit)."},{name:"Spread",short:"Beat the handicap",long:"A point handicap evens out a mismatch. The favorite has to win by more than the spread; the underdog can lose, but only by less than the spread (or win outright).",example:"Take Team A at -7. They win 24 to 14? You win (covered by 10). They win 24 to 20? You lose (only covered by 4)."},{name:"Total (O/U)",short:"Over or under the line",long:"A single combined-score line for both teams. You bet whether the total points scored will be Over or Under. The actual winner doesn't matter.",example:"Total set at 47.5. Final score 28 to 24 = 52, so Over wins. Final 21 to 20 = 41, so Under wins."}];return`
            <section class="section" id="section-betting-101">
                ${this._sectionHeader("Betting 101","Three bet types cover almost everything you'll see on a slate. Tap any card to read the long version.")}
                <div class="bet-types">
                    ${e.map((a,s)=>`
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
        `}_renderGameModes(){const e=this._modesPayload;let a;return e?a=e.tokens.map(s=>{const n=e.modes[s];return n?this._renderModeCard(s,n):""}).join(""):a=this._modesError?`<div class="modes__empty">Couldn't load game modes. ${this._modesError}</div>`:'<div class="modes__empty modes__empty--loading">Loading game modes...</div>',`
            <section class="section" id="section-game-modes">
                ${this._sectionHeader("Game Modes","BMA pools come in flavors. Tap a card to flip and see the rules and ranking. Modes marked Premium are available with an upgrade.")}
                <div class="modes">${a}</div>
            </section>
        `}_renderModeCard(e,a){const s=!this._isModeAllowed(a,"basic"),n=!!a.beta,r=[];return e==="DEFAULT_FORMAT"&&r.push('<span class="mode__badge mode__badge--default">Default</span>'),s&&r.push('<span class="mode__badge mode__badge--premium" title="Available with Premium">Premium</span>'),n&&r.push('<span class="mode__badge mode__badge--beta">Beta</span>'),`
            <article class="mode" data-mode-flip data-flipped="false">
                <div class="mode__face mode__face--front">
                    <div class="mode__icon" aria-hidden="true"></div>
                    <div class="mode__head">
                        <span class="mode__name">${a.label}</span>
                        <span class="mode__badges">${r.join("")}</span>
                    </div>
                    <p class="mode__desc">${a.description||""}</p>
                    <div class="mode__hint">Tap to flip</div>
                </div>
                <div class="mode__face mode__face--back">
                    <div class="mode__head">
                        <span class="mode__name">${a.label}</span>
                    </div>
                    ${this._modeBackBody(e,a)}
                    <div class="mode__hint">Tap to flip back</div>
                </div>
            </article>
        `}_modeBackBody(e,a){const n={DEFAULT_FORMAT:"Bet TD$ 100 across the slate. Win, lose, push. Your balance moves accordingly. Highest balance at the end takes 1st.",SET_IT_AND_FORGET_IT:"Place one Spread, one Money Line, one Total. Spend every TD$. No edits after submission. Highest payout total wins.",LONGSHOT_MAYHEM:"Hit a winner at +150 or higher? It pays an extra 25% straight to your TD$ balance. Big plus-money wins compound fast.",TIERED_FORMAT:"Win 3 in a row to reach Silver (1.5x). 6 in a row reaches Gold (2x). 9 in a row reaches Platinum (3x). Lose a bet and your streak resets.",BRACKET:"Pick winners round-by-round. Survive each round to advance. Most rounds survived takes the pool.",TEAM_MODE:"Form a squad. Coordinate, share picks, win together. Your team's total TD$ balance determines your rank."}[e]||"See the in-pool legend for the exact ranking rules.",r=a.rules||{},o=[];return r.stakeRule==="SPEND_ALL"&&o.push("Must commit your full starting TD$ to qualify"),r.minBetsTotal&&r.minBetsTotal>0&&o.push(`Minimum ${r.minBetsTotal} bets`),Array.isArray(r.requiredBetTypes)&&r.requiredBetTypes.length>0&&o.push(`Must include: ${r.requiredBetTypes.join(", ")}`),r.allowPartialSubmit===!1&&o.push("No partial submissions"),r.allowBetModification===!1&&o.push("No bet edits after placement"),`
            <p class="mode__example">${n}</p>
            ${o.length>0?`<ul class="mode__facts">${o.map(i=>`<li>${i}</li>`).join("")}</ul>`:""}
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
        `}_renderPremium(e){const a=e!=="basic",s=[{title:"Unlimited tournaments",body:"Create and join as many pools as you want. No active-pool cap."},{title:"Up to 100 participants",body:"Run pools with 100 players. Build your league, your office pool, your friend group at scale."},{title:"Live odds",body:"Real-time market odds throughout each game. Bet at any moment up to first pitch, kickoff, or tipoff."},{title:"All game modes",body:"Bet Max Tiers, Bracket, Team Mode. Every mode unlocked, no paywalls."}];return`
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
        `}_renderGlossary(){const e=[["Moneyline","Bet on which team wins outright."],["Spread","Point handicap applied to the favorite."],["Totals (O/U)","Combined score over or under a set number."],["Push","Result lands on the line. Wager returned."],["Favorite","Expected winner, listed with negative (-) odds."],["Underdog","Expected loser, listed with positive (+) odds."],["Cover","When a team beats the point spread."],["Parlay","A single ticket combining multiple bets. All must win."],["Hedge","Placing a counter-bet to reduce or lock in profit."],["Chalk",'Heavy favorites; "betting chalk" = safer plays.']];return`
            <section class="section section--glossary" id="section-glossary">
                ${this._sectionHeader("Glossary","A pocket reference for the lingo on the slate.")}
                <div class="rows">
                    ${e.map(([a,s])=>`
                        <div class="row"><span class="row__key">${a}</span><span class="row__val">${s}</span></div>
                    `).join("")}
                </div>
            </section>
        `}_wireInteractions(){const e=this.shadowRoot;e&&(e.querySelectorAll("[data-toc-target]").forEach(a=>{a.addEventListener("click",s=>{s.preventDefault();const n=a.getAttribute("data-toc-target"),r=e.getElementById(`section-${n}`);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})}),e.querySelectorAll("[data-bet-flip], [data-mode-flip]").forEach(a=>{a.addEventListener("click",s=>{if(s.target.closest("button"))return;const n=a.getAttribute("data-flipped")==="true";a.setAttribute("data-flipped",n?"false":"true")})}),this._wireSectionObserver())}_wireSectionObserver(){const e=this.shadowRoot;if(!e||typeof IntersectionObserver>"u")return;this._sectionObserver&&this._sectionObserver.disconnect();const a=new Set,s=r=>{e.querySelectorAll(".toc__pill").forEach(i=>{const l=i.getAttribute("data-toc-target")===r;i.classList.toggle("toc__pill--active",l),l&&this._scrollPillIntoView(i)})},n=Array.from(e.querySelectorAll('section[id^="section-"]'));n.length!==0&&(this._sectionObserver=new IntersectionObserver(r=>{if(r.forEach(i=>{const l=i.target.id.replace(/^section-/,"");i.isIntersecting?a.add(l):a.delete(l)}),a.size===0)return;const o=n.map(i=>i.id.replace(/^section-/,"")).filter(i=>a.has(i));o.length>0&&s(o[0])},{rootMargin:"-25% 0px -60% 0px",threshold:0}),n.forEach(r=>this._sectionObserver.observe(r)))}_scrollPillIntoView(e){const a=this.shadowRoot?.querySelector(".toc");if(!a||!e)return;const s=a.scrollLeft,n=a.clientWidth,r=e.offsetLeft,o=e.offsetWidth;if(r>=s&&r+o<=s+n)return;const i=r-(n-o)/2;a.scrollTo({left:Math.max(0,i),behavior:"smooth"})}_styles(){return`
            :host { display: block; width: 100%; }

            .guide {
                max-width: min(94%, 880px);
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 28px;
                padding-bottom: 32px;
            }

            /* ── TOC ───────────────────────────────────────────────────
               Mirrors bma-play-sport-rail's chip language: text-only
               buttons with a gold underline on hover/active rather than
               full pill outlines, gray default → white hover → gold
               selected, hidden scrollbar. */
            .toc {
                position: sticky;
                top: 0;
                z-index: 5;
                display: inline-flex;
                gap: 6px;
                overflow-x: auto;
                padding: 8px 4px;
                margin: 0 -4px;
                white-space: nowrap;
                background: rgba(10, 10, 10, 0.85);
                backdrop-filter: blur(10px);
                -webkit-backdrop-filter: blur(10px);
                border-bottom: 1px solid rgba(255, 255, 255, 0.06);
                scrollbar-width: none;
                -ms-overflow-style: none;
            }
            .toc::-webkit-scrollbar { display: none; }
            .toc__pill {
                flex-shrink: 0;
                appearance: none;
                background: transparent;
                border: none;
                border-bottom: 2px solid transparent;
                padding: 6px 10px 8px;
                font-family: inherit;
                font-size: 0.78rem;
                font-weight: 600;
                letter-spacing: 0.2px;
                color: var(--app-core-color--gray-6__dark--brand, #969696);
                cursor: pointer;
                transition: color 160ms ease, border-color 160ms ease;
                -webkit-tap-highlight-color: transparent;
                white-space: nowrap;
            }
            .toc__pill:hover {
                color: rgba(255, 255, 255, 0.85);
            }
            .toc__pill:focus-visible {
                outline: 2px solid rgba(247, 198, 13, 0.4);
                outline-offset: 1px;
                border-radius: 2px;
            }
            /* Active = the section currently in view per IntersectionObserver. */
            .toc__pill--active {
                color: var(--status-locked-text, #F7C60D);
                border-bottom-color: var(--status-locked-text, #F7C60D);
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
                .toc { padding: 6px 4px; }
                .toc__pill { font-size: 0.72rem; padding: 6px 8px 7px; }

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
        `}}customElements.define("bma-profile-guide",Eb);const Ab={class:"profile-layout"},Cb={class:"profile-scroll"},Pb={class:"profile-shell"},Ob={class:"profile-sidebar"},Lb=["data-active-section"],Mb={class:"profile-content"},Db={class:"profile-panel"},Rb={class:"profile-panel"},Ib={class:"profile-panel"},$b=["data-user-class"],Nb={class:"profile-panel profile-panel--account-desktop"},Bb={class:"account-panel"},Fb={class:"mobile-account-bar"},zb={__name:"profile_route",setup(t){const e=ct(),a=xe(),s=Pe("overview"),n=Pe(!1),r=()=>{e.push({name:"home_route"})},o=d=>{s.value=d.detail?.section||"overview"},i=d=>{const p=d.detail?.contestGuid;p&&(window._pendingTournGuid=p,e.push({name:"home_route"}))},l=()=>{const d=a.appSession?.session_user||{},p=d.guid,f=a.coreTourn.length>0?a.coreTourn[a.coreTourn.length-1].data:[],g=f.filter(Z=>(Z.entities?.guids||[]).includes(p)),m=g.filter(Z=>["LOCKED","UPCOMING"].includes(Z.status||Z.class)),v=g.filter(Z=>(Z.status||Z.class)==="COMPLETED"),h=Z=>{let V=0,ae=0,ee=0;return Z.forEach(ne=>{(Array.isArray(ne.tags)?ne.tags:[]).forEach(te=>{if(!te||typeof te!="object")return;const X=(te.entity_guid===p?te.badge:null)||(typeof te[p]=="string"?te[p]:null);typeof X=="string"&&X.startsWith("--badge__ribbon--")&&(X==="--badge__ribbon--gold"?V++:X==="--badge__ribbon--silver"?ae++:X==="--badge__ribbon--bronze"&&ee++)})}),{gold:V,silver:ae,bronze:ee}},_=g.filter(Z=>Z.is_private!==!0),w=g.filter(Z=>Z.is_private===!0),E=h(_),I=h(w),{gold:R,silver:C,bronze:H}=E,$={};g.forEach(Z=>{(Z.sports_allowed||[]).forEach(V=>{const ee=Ge.find(ne=>ne.key===V.key)?.group||"Other";$[ee]=($[ee]||0)+1})});let G="",j="",F=0;Object.entries($).forEach(([Z,V])=>{V>F&&(F=V,G=Z,j=Z)});const q=Ce._betStatsCache?.stats||null;let P="—",A="";if(q){const Z=q.wins+q.losses;Z>0&&(P=Math.round(q.wins/Z*100)+"%",A=`${q.wins}-${q.losses}`)}const S=Z=>{let V=null;(Array.isArray(Z.tags)?Z.tags:[]).forEach(X=>{if(!X||typeof X!="object")return;const oe=(X.entity_guid===p?X.badge:null)||(typeof X[p]=="string"?X[p]:null);oe==="--badge__ribbon--gold"?V=1:oe==="--badge__ribbon--silver"?V=2:oe==="--badge__ribbon--bronze"&&(V=3)});const ne=(Array.isArray(Z.sports_allowed)?Z.sports_allowed:[]).map(X=>X?.key||X).filter(Boolean),U=Ge.find(X=>X.key===ne[0]),te=!!(Z.creator_guid&&Z.creator_guid===p);return{id:Z.guid,name:Z.caption||"Tournament",sport:U?.title||"",sports:ne,status:Z.status||Z.class||"",placement:V,isPrivate:Z.is_private===!0,isHosting:te}},D={UPCOMING:0,LOCKED:1,COMPLETED:2},L=(Z,V)=>{const ae=D[Z.status||Z.class]??99,ee=D[V.status||V.class]??99;return ae!==ee?ae-ee:new Date(V.status_time||0)-new Date(Z.status_time||0)},Y=[...g].filter(Z=>Z.is_private!==!0).sort(L).slice(0,20).map(S),re=f.filter(Z=>Z.is_private===!0).filter(Z=>{const V=Z.creator_guid&&Z.creator_guid===p,ae=(Z.entities?.guids||[]).includes(p);return V||ae}).sort(L).slice(0,20).map(S);return{username:d.userName||d.name||"Player",email:d.email||"",activeCount:m.length,playedCount:v.length,trophyCount:R+C+H,gold:R,silver:C,bronze:H,firstPlace:R,publicTrophies:E,privateTrophies:I,favSport:G,favGroup:j,winRate:P,record:A,recentContests:Y,privateContests:re}},c=()=>{const d=l(),p=document.querySelector("bma-profile-hero");p&&(p.setAttribute("data-username",d.username),p.setAttribute("data-email",d.email),p.setAttribute("data-active-count",String(d.activeCount)),p.setAttribute("data-played-count",String(d.playedCount)),p.setAttribute("data-trophy-count",String(d.trophyCount)));const f=document.querySelector("bma-profile-stats");f&&(f.setAttribute("data-played",String(d.playedCount)),f.setAttribute("data-first-place",String(d.firstPlace)),f.setAttribute("data-trophies",String(d.trophyCount)),f.setAttribute("data-favorite-sport",d.favSport),f.setAttribute("data-favorite-sport-group",d.favGroup),f.setAttribute("data-win-rate",d.winRate),f.setAttribute("data-win-loss-record",d.record));const g=document.querySelector("bma-profile-history");g&&(g.setAttribute("data-contests",JSON.stringify(d.recentContests)),g.setAttribute("data-private-contests",JSON.stringify(d.privateContests)));const m=document.getElementById("profile-trophy-pack");if(m){const v=m.dataset.activeTab==="pools"?"pools":"lobbies",h=w=>`
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
      `,_=v==="pools"?d.privateTrophies:d.publicTrophies;m.innerHTML=`
        <div class="trophy-pack__header">My Trophies</div>
        <div class="trophy-pack__tabs" role="tablist">
          <button type="button" class="trophy-pack__tab ${v==="lobbies"?"trophy-pack__tab--active":""}" data-trophy-tab="lobbies" role="tab" aria-selected="${v==="lobbies"}">Bet Max Lobbies</button>
          <button type="button" class="trophy-pack__tab ${v==="pools"?"trophy-pack__tab--active":""}" data-trophy-tab="pools" role="tab" aria-selected="${v==="pools"}">Bet Max Pools</button>
        </div>
        ${h(_)}
      `,m.querySelectorAll("[data-trophy-tab]").forEach(w=>{w.addEventListener("click",()=>{const E=w.dataset.trophyTab;m.dataset.activeTab!==E&&(m.dataset.activeTab=E,c())})})}};let u=null;return lt(async()=>{if(document.body.classList.add("route-profile-shell"),!a.appSession.session_user.authenticated){e.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),c();const d=a.appSession?.session_user?.guid;d&&Ce._ensureBetStatsCache(d).then(p=>{p&&c()}),u=de.subscribe(a.hierTopics.ROUTE__HOME_HYDRATE,()=>{c()})}),Bt(()=>{document.body.classList.remove("route-profile-shell"),u&&de.unsubscribe(u)}),(d,p)=>(pe(),fe("main",Ab,[b("div",{class:"profile-header"},[b("button",{class:"profile-header__back",onClick:r,"aria-label":"Back"},[...p[7]||(p[7]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),p[8]||(p[8]=b("h1",{class:"profile-header__title"},"My Profile",-1))]),p[17]||(p[17]=b("bma-profile-hero",null,null,-1)),b("div",Cb,[b("div",Pb,[b("aside",Ob,[b("bma-profile-nav",{"data-active-section":s.value,onSectionChange:o},null,40,Lb)]),b("div",Mb,[Dt(b("section",Db,[...p[9]||(p[9]=[b("div",{id:"profile-trophy-pack",class:"trophy-pack"},null,-1),b("bma-profile-stats",null,null,-1)])],512),[[Cs,s.value==="overview"]]),Dt(b("section",Rb,[b("bma-profile-history",{onContestClick:i},null,32)],512),[[Cs,s.value==="contests"]]),Dt(b("section",Ib,[b("bma-profile-guide",{"data-user-class":ot(a).appSession?.session_user?.class||""},null,8,$b)],512),[[Cs,s.value==="guide"]]),Dt(b("section",Nb,[b("div",Bb,[b("button",{class:"account-btn",onClick:p[0]||(p[0]=f=>ot(de).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[10]||(p[10]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Be(" Change Password ",-1)])]),b("button",{class:"account-btn account-btn--signout",onClick:p[1]||(p[1]=f=>ot(de).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[11]||(p[11]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Be(" Sign Out ",-1)])])])],512),[[Cs,s.value==="account"]])])])]),b("div",Fb,[n.value?(pe(),fe("div",{key:0,class:"mobile-account-scrim",onClick:p[2]||(p[2]=f=>n.value=!1)})):ke("",!0),n.value?(pe(),fe("div",{key:1,class:"mobile-account-bar__panel",onClick:p[5]||(p[5]=Ca(()=>{},["stop"]))},[b("button",{class:"account-btn",onClick:p[3]||(p[3]=f=>ot(de).publish("ROUTE.HOME.USER_PROFILE.RESET_PASSWORD",JSON.stringify({ts:Date.now()})))},[...p[12]||(p[12]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"})],-1),Be(" Change Password ",-1)])]),b("button",{class:"account-btn account-btn--signout",onClick:p[4]||(p[4]=f=>ot(de).publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()})))},[...p[13]||(p[13]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"})],-1),Be(" Sign Out ",-1)])])])):ke("",!0),b("div",{class:"mobile-account-bar__trigger",onClick:p[6]||(p[6]=f=>n.value=!n.value)},[p[15]||(p[15]=b("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"currentColor"},[b("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"})],-1)),p[16]||(p[16]=b("span",null,"Account",-1)),(pe(),fe("svg",{class:Ve(["mobile-account-bar__chevron",n.value?"mobile-account-bar__chevron--open":""]),viewBox:"0 0 24 24",fill:"currentColor"},[...p[14]||(p[14]=[b("path",{d:"M7 10l5 5 5-5z"},null,-1)])],2))])])]))}};class Hb extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-username","data-rank","data-trophies","data-td-dollars"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(e,a,s){this.shadowRoot&&a!==s&&this.render()}render(){const e=this.getAttribute("data-username")||"Player",a=this.getAttribute("data-rank")||"—",s=this.getAttribute("data-trophies")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),r=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString(),o=e.charAt(0).toUpperCase(),i=a==="—"?"—":`#${a}`;this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
                :host { display: block; width: 100%; }

                /* Compact hero — matches bma-profile-hero footprint exactly.
                   Avatar + identity on a single horizontal row, KPIs below.
                   The rank takes the position the email occupies on profile,
                   in the brand gold so it still reads as the hero metric. */
                .hero {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    padding: 18px 20px 14px;
                    background: linear-gradient(135deg, #1a5235 0%, #0f3320 100%);
                    border-top: 2px solid rgba(255, 215, 0, 0.3);
                    border-bottom: 2px solid rgba(255, 215, 0, 0.3);
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
                    position: relative;
                    overflow: hidden;
                }
                .hero__id-row {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    width: 100%;
                    max-width: 360px;
                    margin-bottom: 12px;
                }
                .hero__avatar {
                    width: 44px;
                    height: 44px;
                    border-radius: 50%;
                    background: #2A3A2E;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 1.15rem;
                    font-weight: 800;
                    color: var(--status-locked-text, #F7C60D);
                    text-transform: uppercase;
                    box-shadow: 0 0 0 2px rgba(247, 198, 13, 0.2);
                    flex-shrink: 0;
                }
                .hero__id-block {
                    flex: 1;
                    min-width: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 2px;
                }
                .hero__name {
                    font-size: 1.05rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
                }
                .hero__rank-line {
                    font-size: 0.72rem;
                    font-weight: 700;
                    color: var(--status-locked-text, #F7C60D);
                    letter-spacing: 0.6px;
                    text-transform: uppercase;
                    white-space: nowrap;
                    overflow: hidden;
                    text-overflow: ellipsis;
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
                    padding: 10px 8px 2px;
                    border-right: 1px solid rgba(255, 255, 255, 0.06);
                }
                .hero__kpi:last-child { border-right: none; }
                .hero__kpi-value {
                    display: block;
                    font-size: 1.1rem;
                    font-weight: 800;
                    color: rgba(255, 255, 255, 0.95);
                    font-variant-numeric: tabular-nums;
                }
                .hero__kpi-label {
                    display: block;
                    font-size: 0.58rem;
                    font-weight: 700;
                    color: rgba(255, 255, 255, 0.45);
                    text-transform: uppercase;
                    letter-spacing: 0.8px;
                    margin-top: 2px;
                }
                @media (max-width: 480px) {
                    .hero { padding: 14px 14px 10px; }
                    .hero__avatar { width: 38px; height: 38px; font-size: 1rem; }
                    .hero__name { font-size: 0.95rem; }
                    .hero__kpi-value { font-size: 0.95rem; }
                }
            </style>
            <div class="hero">
                <div class="hero__id-row">
                    <div class="hero__avatar">${o}</div>
                    <div class="hero__id-block">
                        <div class="hero__name">${e}</div>
                        <div class="hero__rank-line">Global Rank ${i}</div>
                    </div>
                </div>
                <div class="hero__kpis">
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">${s}</span>
                        <span class="hero__kpi-label">Trophies</span>
                    </div>
                    <div class="hero__kpi">
                        <span class="hero__kpi-value">TD$ ${r}</span>
                        <span class="hero__kpi-label">Total Earned</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-top-players-hero",Hb);const Ub={class:"top-players-layout"},Gb={class:"top-players-scroll"},jb={class:"top-players-shell"},qb={class:"top-players-sidebar"},Vb=["data-active-section"],Yb={__name:"top_players_route",setup(t){const e=ct(),a=xe(),s=Pe("overall"),n=()=>{e.push({name:"home_route"})},r=l=>{const c=l.detail?.section||"overall";s.value=c;const u=document.querySelector(`#global-leaderboard-container .glb__tab[data-tab="${c}"]`);u&&u.click()},o=l=>{const c=a.appSession?.session_user?.guid,u=a.appSession?.session_user?.userName||a.appSession?.session_user?.name||"Player",d=l.find(f=>f.user_guid===c),p=document.querySelector("bma-top-players-hero");if(p)if(d){const f=l.indexOf(d)+1;p.setAttribute("data-username",d.username||u),p.setAttribute("data-rank",String(f)),p.setAttribute("data-trophies",String(d.tournaments_won||0)),p.setAttribute("data-td-dollars",String(d.total_payout||0))}else p.setAttribute("data-username",u),p.setAttribute("data-rank","—"),p.setAttribute("data-trophies","0"),p.setAttribute("data-td-dollars","0")},i=async()=>{try{const l=Ce._globalLBCache?.ALL;let c;l?.data&&Date.now()-l.ts<300*1e3?c=l.data:(c=await Te.fetchAllTimeLeaderboard("ALL",100,"td"),Ce._globalLBCache&&(Ce._globalLBCache.ALL={data:c,ts:Date.now(),inflight:!1})),o(c?.data||[]),typeof window._renderTopPlayers=="function"&&await window._renderTopPlayers("ALL")}catch(l){console.warn("[top_players_route] load failed",l)}};return lt(()=>{if(document.body.classList.add("route-top-players-shell"),!a.appSession.session_user.authenticated){e.push({name:"signin_route"});return}window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),requestAnimationFrame(()=>{i()})}),Bt(()=>{document.body.classList.remove("route-top-players-shell")}),(l,c)=>(pe(),fe("main",Ub,[b("div",{class:"top-players-header"},[b("button",{class:"top-players-header__back",onClick:n,"aria-label":"Back"},[...c[0]||(c[0]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=b("h1",{class:"top-players-header__title"},"Top Players",-1))]),c[4]||(c[4]=b("bma-top-players-hero",null,null,-1)),b("div",Gb,[c[3]||(c[3]=b("p",{class:"top-players-scope-note"}," Top Players leaderboard reflects public Bet Max Tourney games, not Bet Max Pools results. ",-1)),b("div",jb,[b("aside",qb,[b("bma-profile-nav",{"data-active-section":s.value,onSectionChange:r,"data-sections":"top-players"},null,40,Vb)]),c[2]||(c[2]=b("div",{class:"top-players-content"},[b("div",{id:"global-leaderboard-container"},[b("div",{class:"leaderboard-empty"},[b("p",null,"Loading leaderboard...")])])],-1))])])]))}},Kb={class:"play-cntr","data-current-tourn-guid":"","data-current-tourn-action":""},Wb={id:"play-section-PLAY",class:"play-section",style:{display:"none","padding-top":"8px"}},Jb={class:"bet-grid"},Xb={class:"bet-grid__slip","data-active-bet-tab":"MYBETS"},Qb={class:"bet-grid__slip-BETSLIP",style:{display:"none"},"data-bets-valid":"false"},Zb=["innerHTML"],e_={__name:"play_route",setup(t){const e=ct(),a=xs(),s=xe(),n=window.EMPTY_BETSLIP_HTML||"",r=()=>{e.push({name:"home_route"})},o=()=>{const l=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),u=document.querySelector(".bet-grid__toggle-container"),d=document.querySelector(".bet-grid__select"),p=document.querySelector(".bet-grid__slip");if(!l||!c||!u||!d||!p){console.warn("[play_route] initBetGridToggle: missing elements");return}const f=window.matchMedia("(orientation: portrait)").matches,g=window.matchMedia("(max-width: 768px)").matches,m=h=>{d.classList.toggle("collapsed",h),p.classList.toggle("collapsed",!h),c.textContent=h?"Close Bet Slip":"Open Bet Slip",u.classList.toggle("bet-grid__toggle-container--open",h)};(f||g)&&m(!1);let v=null;l.addEventListener("pointerdown",h=>{v=h.pointerId}),l.addEventListener("pointerup",h=>{if(h.pointerId!==v)return;v=null;const _=!p.classList.contains("collapsed");m(!_)}),l.addEventListener("pointercancel",()=>{v=null}),l.addEventListener("click",h=>{h.preventDefault(),h.stopPropagation()})},i=l=>{const c=l.target.closest("[data-publish-route-home], [data-sodapop-close]");c&&c.dataset?.publishRouteHome?.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&(document.querySelectorAll(".play-cntr .dash-nav__btn").forEach(d=>{d.classList.toggle("dash-nav__btn--active",d===c)}),de.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`))};return lt(async()=>{if(!s.appSession.session_user.authenticated){e.push({name:"signin_route"});return}const l=a.query.guid||"",c=a.query.action||"INFO";if(!l){console.warn("[play_route] No tournament guid provided"),e.push({name:"home_route"});return}const u=s.appSession?.session_user?.guid;if(u)try{const p=await Te.fetchBetSlips(u,l);p?.rows&&(s.pushcoreBetSlip({timestamp:Date.now(),source:"API",data:p.rows}),setTimeout(()=>{de.publish(s.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(p))},300))}catch(p){console.warn("[play_route] fetchBetSlips failed:",p)}if(!(s.coreTourn.length>0&&s.coreTourn[s.coreTourn.length-1]?.data?.some(p=>p.guid===l)))try{const p=await Te.fetchTournaments();p?.rows&&Array.isArray(p.rows)&&(s.pushCoreTourn({timestamp:Date.now(),source:"API_PLAY_HYDRATE",data:p.rows}),console.log("[play_route] Hydrated coreTourn for direct entry — guid:",l))}catch(p){console.warn("[play_route] coreTourn hydrate failed:",p)}document.body.classList.add("route-locked"),document.addEventListener("click",i),window.initBetGridToggle=o,requestAnimationFrame(()=>{typeof Ce.initPlayScreen=="function"&&Ce.initPlayScreen(l,c)})}),Bt(()=>{document.body.classList.remove("route-locked"),document.removeEventListener("click",i),delete window.initBetGridToggle;const l=document.querySelector(".play-cntr");l&&(l.dataset.currentTournGuid="",l.dataset.currentTournAction="")}),(l,c)=>(pe(),fe("article",Kb,[b("div",{class:"head-caption tourn-dashboard"},[b("div",{class:"head-caption__back",onClick:r,role:"button",tabindex:"0","aria-label":"Back"},[...c[0]||(c[0]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"28",height:"28",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),c[1]||(c[1]=b("section",{class:"head-caption__content"},[b("h3",{id:"pop-play__tourn-caption--id",class:"pop-play__tourn-caption"},"Tournament"),b("p",{id:"pop-play__tourn-tagline--id",class:"pop-play__tourn-tagline"},"Loading...")],-1))]),c[6]||(c[6]=ut('<div class="dash-stats"><div class="dash-stat"><span class="dash-stat__label">TD$ Balance</span><span class="dash-stat__value" id="dashboard-td-balance">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--balance" style="width:100%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">At Risk</span><span class="dash-stat__value dash-stat__value--pending" id="dashboard-td-pending">TD$ 0<span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--pending" style="width:0%;"></div></div></div><div class="dash-stat"><span class="dash-stat__label">Rank</span><span class="dash-stat__value" id="dashboard-rank"><span class="tourn-dashboard__rank-text">-/-</span><span style="display:block;font-size:0.6em;margin-top:2px;visibility:hidden;">(0)</span></span><div class="dash-stat__gauge"><div class="dash-stat__gauge-fill dash-stat__gauge-fill--participants" style="width:0%;"></div></div></div></div><nav class="dash-nav"><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.INFO"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg><span>Info</span></button><button id="btn-join__play--id" class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.PLAY" style="visibility:hidden;"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"></path></svg><span>Play</span></button><button class="dash-nav__btn" data-publish-route-home="ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"></path></svg><span>Leaderboard</span></button></nav><div id="play-section-INFO" class="play-section play-section--active"><div id="pop-play__caro-info-summary2--id"></div><div id="pop-play__caro-info-summary1--id"></div><div id="pop-play__caro-info-list--id"></div></div>',3)),b("div",Wb,[b("article",Jb,[c[5]||(c[5]=ut('<section class="bet-grid__select"><bma-game-mode-progress id="game-mode-progress" hidden></bma-game-mode-progress><article class="select-grid"></article></section><div class="bet-grid__toggle-container"><button id="bet-grid-toggle" class="bet-grid__toggle" aria-label="Toggle bet slip"><span class="bet-grid__toggle-summary"><span class="bet-grid__toggle-badge" id="bet-grid-toggle-count">0</span><span class="bet-grid__toggle-label">Bets</span></span><span class="bet-grid__toggle-action"><span class="bet-grid__toggle-text">Open Bet Slip</span><svg class="bet-grid__toggle-chevron" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 14l5-5 5 5z"></path></svg></span></button></div>',2)),b("aside",Xb,[c[3]||(c[3]=ut('<bma-longshot-chip id="betslip-longshot-chip" data-show-stats="false" hidden style="margin:8px 8px 4px;"></bma-longshot-chip><nav class="bet-slip__tabs"><button class="bet-slip-tab" data-bet-tab="BETSLIP">Bet Slip<span class="bet-slip-tab__badge bet-slip-tab__badge--slip" id="bet-slip-tab-slip-badge" style="visibility:hidden;">0</span></button><button class="bet-slip-tab" data-bet-tab="MYBETS">My Bets<span class="bet-slip-tab__badge bet-slip-tab__badge--mybets" id="bet-slip-tab-mybets-badge" style="visibility:hidden;">0</span></button></nav>',2)),b("section",Qb,[b("div",{class:"bet-grid__slip-BETSLIP-content",innerHTML:ot(n)},null,8,Zb),c[2]||(c[2]=ut('<output class="bet-grid__slip-BETSLIP-summary"><div class="summary-row summary-row--labels"><div class="summary-cell">TD$</div><div class="summary-cell">Stake</div><div class="summary-cell">Payout</div></div><div class="summary-row summary-row--values"><div id="summary-balance" class="summary-cell">0.00</div><div id="summary-stake" class="summary-cell">0.00</div><div id="summary-payout" class="summary-cell">0.00</div></div></output><button class="bet-grid__slip-BETSLIP-cta" data-publish-betslip="COREBETSLIP.BET">BET!</button>',2))]),c[4]||(c[4]=b("div",{class:"bet-grid__slip-MYBETS"},null,-1))])])]),c[7]||(c[7]=b("div",{id:"play-section-LEADERBOARD",class:"play-section",style:{display:"none"}},[b("div",{id:"pop-play__caro-leaderboard--id"})],-1)),c[8]||(c[8]=b("br",null,null,-1))]))}},t_={class:"preview-cntr"},a_={class:"head-caption tourn-dashboard"},s_={class:"head-caption__content"},n_={class:"pop-play__tourn-caption"},r_={class:"pop-play__tourn-tagline"},o_={key:0,class:"preview-wrap"},i_={key:0,class:"preview-invite-band"},l_={class:"info-summary-pack"},c_={class:"info-summary-pack__stat"},d_={class:"info-summary-pack__stat-value",style:{color:"var(--status-upcoming-text, #00E676)"}},u_={class:"info-summary-pack__stat"},p_={class:"info-summary-pack__stat-value"},f_={class:"info-summary-pack__stat"},h_={class:"info-summary-pack__stat-value"},m_={class:"info-pack info-pack--padded"},g_={class:"info-progress-status"},b_={class:"info-progress-status__row"},__={key:0,class:"preview-countdown"},v_={class:"preview-schedule-row"},y_={class:"preview-schedule-value"},w_={class:"preview-schedule-value"},x_={key:1,class:"info-pack info-pack--padded preview-joined"},T_={class:"preview-section-row"},k_={class:"preview-section-meta"},S_={class:"preview-players-row"},E_={class:"preview-player-avatar"},A_={class:"preview-player-name"},C_={key:0,class:"preview-player-more"},P_={key:2,class:"info-pack info-pack--padded preview-trophies"},O_={class:"preview-trophy-podium"},L_={key:0,class:"preview-trophy preview-trophy--silver"},M_={class:"preview-trophy-count"},D_={key:1,class:"preview-trophy preview-trophy--gold"},R_={class:"preview-trophy-count"},I_={key:2,class:"preview-trophy preview-trophy--bronze"},$_={class:"preview-trophy-count"},N_={class:"info-pack preview-legend"},B_={class:"preview-legend-item"},F_={class:"preview-legend-value"},z_={class:"preview-legend-item"},H_={class:"preview-legend-value"},U_={class:"preview-legend-item"},G_={class:"preview-legend-value",style:{color:"var(--status-locked-text, #F7C60D)"}},j_={key:3,class:"info-pack info-pack--padded preview-invite-composer"},q_={class:"preview-section-row"},V_={key:0,class:"preview-section-meta"},Y_=["disabled"],K_=["disabled"],W_={key:0,class:"invite-form__hint"},J_={key:1,class:"invite-form__error"},X_={key:2,class:"invite-sent-list"},Q_={class:"invite-sent-row__main"},Z_={class:"invite-sent-row__name"},e0=["onClick","aria-label"],t0={class:"preview-cta-bar"},a0={key:1,class:"preview-cta-hint"},s0={key:2,class:"preview-cta-hint"},n0={key:1,class:"preview-empty"},r0={__name:"preview_route",setup(t){const e=ct(),a=xs(),s=xe(),n=_e(()=>a.params.guid||""),r=_e(()=>a.query.s||null),o=Pe(null),i=Pe("idle"),l=_e(()=>{if(s.coreTourn.length){const T=s.coreTourn[s.coreTourn.length-1].data.find(B=>B.guid===n.value);if(T)return T}return o.value}),c=_e(()=>s.appSession?.session_user?.authenticated===!0),u=_e(()=>!c.value),d=_e(()=>s.appSession?.session_user?.guid||""),p=_e(()=>!c.value||!l.value?!1:(l.value.entities?.guids||[]).includes(d.value)),f=_e(()=>{if(!c.value||!l.value)return!1;const y=l.value.creator_guid;return!!y&&y===d.value}),g=Pe(""),m=Pe(!1),v=Pe(""),h=Pe([]);let _=null;const w=y=>{const T=(y||"").trim();return T?T.includes("@")?{email:T}:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(T)?{user_guid:T}:{userName:T}:null},E=async()=>{v.value="";const y=w(g.value);if(y){m.value=!0;try{const T=await Te.sendInvite(n.value,y);if(T.ok&&T.data?.invite){if(h.value=[T.data.invite,...h.value],g.value="",typeof neodigmToast<"u"){const N=T.data.invite.invitee_display_name||T.data.invite.invitee_user_name||"them";neodigmToast.q(`Invite sent to ${N}.`,"success")}return}const B=T.data?.error||`http_${T.status}`;v.value=(()=>{if(B==="invitee_not_found")return"Couldn't find that player on BMA. You can still share the invite link.";if(B==="already_invited")return"You've already invited them. Check the list below.";if(B==="already_joined")return"They're already in this pool.";if(B==="pool_full")return"Pool is full.";if(B==="cooldown_active"){const N=T.data?.retry_after_hours;return N?`They declined recently. Try again in ${N}h.`:"They declined recently. Try again tomorrow."}return B==="rate_limited"?"Too many invites for now. Try again in a few minutes.":B==="not_creator"?"Only the pool creator can send invites.":B==="not_private"?"This pool doesn't accept directed invites.":B==="invalid_request_shape"?"Enter a User Name or Email to send an invite.":"Couldn't send invite right now. Try again."})()}catch(T){console.warn("[preview_route] sendInvite failed:",T),v.value="Network error. Try again."}finally{m.value=!1}}},I=async y=>{if(!y)return;const T=h.value;h.value=T.filter(N=>N.guid!==y),(await Te.revokeInvite(y)).ok?typeof neodigmToast<"u"&&neodigmToast.q("Invite revoked.","info"):(h.value=T,typeof neodigmToast<"u"&&neodigmToast.q("Couldn't revoke. Try again.","warning"))},R=async()=>{if(!f.value||!n.value)return;const y=await Te.fetchInvitesForTournament(n.value);y.ok&&Array.isArray(y.data?.invites)&&(h.value=y.data.invites)},C=_e(()=>{const y=h.value||[],T=y.filter(W=>(W.status||"").toUpperCase()==="PENDING").length,B=y.filter(W=>(W.status||"").toUpperCase()==="ACCEPTED").length,N=y.filter(W=>(W.status||"").toUpperCase()==="DECLINED").length,K=typeof l.value?.invited_count=="number"?l.value.invited_count:T;return{pending:T,accepted:B,declined:N,invited:K}}),H=_e(()=>{const y=l.value;if(!y)return"";if(y.share_url)return y.share_url;const B=`${window.location.origin+window.location.pathname}#/preview/${y.guid||n.value}`;return y.join_slug?`${B}?s=${encodeURIComponent(y.join_slug)}`:B}),$=_e(()=>Number(l.value?.tournament_dollars||0)),G=_e(()=>{const y=l.value;return y?typeof y.entities?.count=="number"?y.entities.count:y.entities?.guids?.length||0:0}),j=_e(()=>l.value?.entities?.max||0),F=_e(()=>l.value?.matches_expanded?.length||0),q=_e(()=>{const y=l.value;return y?y.format?.on_going!==void 0?y.format.on_going:(y.tags||[]).some(T=>T.override_last_match_close===!0):!1}),P=_e(()=>{const y=l.value;return y?y.format?.odds_locked_at_start!==void 0?y.format.odds_locked_at_start:(y.tags||[]).some(T=>T.match_inprogress_lock===!0):!1}),A=_e(()=>{const y=l.value;if(!y)return null;if(y.trophies){const W=y.trophies.gold||0,M=y.trophies.silver||0,k=y.trophies.bronze||0;return W+M+k===0?null:{gold:W,silver:M,bronze:k}}const T=(y.tags||[]).find(W=>W.badge_gold!==void 0||W.badge_silver!==void 0||W.badge_bronze!==void 0);if(!T)return null;const B=T.badge_gold||0,N=T.badge_silver||0,K=T.badge_bronze||0;return B+N+K===0?null:{gold:B,silver:N,bronze:K}}),S=_e(()=>{const y=o.value?.joined_players||l.value?.joined_players;return Array.isArray(y)?y:[]}),D=_e(()=>Math.max(0,G.value-S.value.length)),L=_e(()=>P.value?"Locked Odds":"Live Odds"),Y=_e(()=>q.value?"On-going":"Fixed Slate"),Q=_e(()=>{const y=l.value;if(!y)return"Bet Max Tourney";const T=y.game_mode?.class||y.class||"DEFAULT_FORMAT";return T==="DEFAULT_FORMAT"?"Bet Max Tourney":y.game_mode?.label||T}),re=_e(()=>{if(V.value!=="UPCOMING")return"";const y=l.value;if(!y?.window_start_time)return"";let T=y.window_start_time;!T.includes("Z")&&!T.match(/[+-]\d{2}:\d{2}$/)&&(T+="Z");const B=new Date(T).getTime()-Date.now();if(B<=0)return"Starting now";const N=Math.floor(B/36e5),K=Math.floor(B%36e5/6e4);return N>=24?`Starts in ${Math.floor(N/24)}d ${N%24}h`:N>0?`Starts in ${N}h ${K}m`:K>5?`Starts in ${K}m`:"Starting soon"}),Z=_e(()=>F.value===0?"TBD":`${F.value}${q.value?"+":""}`),V=_e(()=>l.value?.status||""),ae=_e(()=>V.value==="LOCKED"?"In Progress":V.value==="UPCOMING"?"Open for Entry":V.value==="COMPLETED"?"Completed":V.value),ee=_e(()=>V.value==="LOCKED"?"var(--status-locked-text, #F7C60D)":V.value==="UPCOMING"?"var(--status-upcoming-text, #00E676)":V.value==="COMPLETED"?"var(--status-completed-text, #CD5659)":"#fff"),ne=_e(()=>c.value?p.value?"View Tournament":V.value==="COMPLETED"?"View Results":V.value==="LOCKED"?"View Tournament":l.value?.is_private===!0?"Join Bet Max Pool":"Join Tournament":"Sign Up to Join"),U=()=>{c.value?e.push({name:"home_route"}):e.push({name:"signin_route"})},te=()=>{if(l.value){if(!c.value){oh(n.value,r.value),e.push({name:"signup_route"});return}if(p.value||V.value!=="UPCOMING"){e.push({name:"play_route",query:{guid:n.value,action:"INFO"}});return}de.publish(s.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:n.value,ts:Date.now()}))}},X=async()=>{const y=H.value;if(!y)return;const T=l.value?.caption||"Join my tournament",B=`You're invited to join ${T} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:T,text:B,url:y});return}catch(N){if(N?.name==="AbortError")return}try{await navigator.clipboard.writeText(y),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(N){console.warn("[preview_route] clipboard write failed:",N),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Long-press to copy: "+y,"danger")}},oe=_e(()=>{const y=l.value;return y?(y.game_mode?.class||y.game_mode_class||"DEFAULT_FORMAT")==="DEFAULT_FORMAT":!0}),ie=y=>{if(!y)return"TBD";let T=new Date(y);if(!y.includes("Z")&&!y.match(/[+-]\d{2}:\d{2}$/)&&(T=new Date(y+"Z")),isNaN(T.getTime()))return"TBD";const B=oe.value?{weekday:"short",month:"short",day:"numeric"}:{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return T.toLocaleString(void 0,B)},x=async()=>{if(n.value){i.value="loading";try{const{data:y,status:T,ok:B}=await Te.fetchTournamentPreview(n.value,r.value);B&&y?(o.value=y,i.value="ok"):T===404?i.value="not_found":T===410?i.value="archived":i.value="error"}catch(y){console.warn("[preview_route] fetchTournamentPreview failed:",y),i.value="error"}}},O=_e(()=>{switch(i.value){case"loading":return"Loading tournament…";case"not_found":return"This tournament doesn't exist or the link is wrong.";case"archived":return"This tournament has ended and been archived.";case"error":return"Couldn't load this tournament. Please try again.";default:return"Tournament details aren't available yet."}});return lt(()=>{document.body.classList.add("route-tournament-preview"),x(),setTimeout(()=>R(),0),_=de.subscribe(s.hierTopics.SSE__CORE__INVITE_SYNC,(y,T)=>{try{const B=JSON.parse(T),N=JSON.parse(B.msg),{invite:K,action:W}=N?.[0]||{};if(!K?.guid||K.tournament_guid!==n.value)return;const M=h.value.findIndex(k=>k.guid===K.guid);if(W==="accepted"||W==="declined"||W==="expired"){if(M>=0){const k=[...h.value];k[M]={...k[M],...K},h.value=k}}else W==="revoked"&&M>=0&&(h.value=h.value.filter(k=>k.guid!==K.guid))}catch(B){console.warn("[preview_route] INVITE_SYNC handler error:",B)}})}),Bt(()=>{document.body.classList.remove("route-tournament-preview"),_&&de.unsubscribe(_)}),(y,T)=>(pe(),fe("main",t_,[b("div",a_,[b("div",{class:"head-caption__back",onClick:U,role:"button",tabindex:"0","aria-label":"Back"},[...T[1]||(T[1]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),b("section",s_,[b("h3",n_,be(l.value?.caption||"Tournament"),1),b("p",r_,be(l.value?.tagline||(u.value?"You're invited to a tournament":"")),1)])]),l.value?(pe(),fe("div",o_,[u.value?(pe(),fe("div",i_,[...T[2]||(T[2]=[b("img",{class:"preview-invite-band__logo",src:"https://machfive-bmacdev-rest.onrender.com/m5t/v5/coreAssets/image?token=bmt_white_primary_logo&format=png",alt:"Bet Max Tourney"},null,-1),b("div",{class:"preview-invite-band__text"},[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[b("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"})]),b("span",null,"You're invited to join this tournament")],-1)])])):ke("",!0),b("div",l_,[b("div",c_,[T[3]||(T[3]=b("span",{class:"info-summary-pack__stat-label"},"Starting TD$",-1)),b("span",d_,"TD$ "+be($.value.toLocaleString()),1)]),b("div",u_,[T[4]||(T[4]=b("span",{class:"info-summary-pack__stat-label"},"Players",-1)),b("span",p_,be(G.value)+" / "+be(j.value),1)]),b("div",f_,[T[5]||(T[5]=b("span",{class:"info-summary-pack__stat-label"},"Games",-1)),b("span",h_,be(Z.value),1)])]),b("div",m_,[b("div",g_,[b("div",b_,[T[6]||(T[6]=b("span",{class:"info-progress-status__label"},"Status",-1)),b("span",{class:"info-progress-status__value",style:hn({color:ee.value})},be(ae.value),5)]),re.value?(pe(),fe("div",__,be(re.value),1)):ke("",!0)]),T[9]||(T[9]=b("div",{class:"info-progress-divider"},null,-1)),b("div",v_,[b("div",null,[T[7]||(T[7]=b("span",{class:"info-progress-status__label"},"Starts",-1)),b("span",y_,be(ie(l.value.window_start_time)),1)]),b("div",null,[T[8]||(T[8]=b("span",{class:"info-progress-status__label"},"Ends (est.)",-1)),b("span",w_,be(ie(l.value.window_end_time)),1)])])]),S.value.length>0?(pe(),fe("div",x_,[b("div",T_,[T[10]||(T[10]=b("span",{class:"preview-section-label"},"Who's In",-1)),b("span",k_,[Be(be(G.value)+" joined",1),f.value&&C.value.invited>0?(pe(),fe($e,{key:0},[Be(" · "+be(C.value.invited)+" invited",1)],64)):ke("",!0)])]),b("div",S_,[(pe(!0),fe($e,null,Gt(S.value,B=>(pe(),fe("div",{class:"preview-player-chip",key:B.username},[b("div",E_,be((B.username||"?").charAt(0).toUpperCase()),1),b("span",A_,be(B.username),1)]))),128)),D.value>0?(pe(),fe("div",C_," +"+be(D.value)+" more ",1)):ke("",!0)])])):ke("",!0),A.value?(pe(),fe("div",P_,[T[17]||(T[17]=b("span",{class:"preview-section-label"},"Trophies",-1)),b("div",O_,[A.value.silver>0?(pe(),fe("div",L_,[T[11]||(T[11]=b("div",{class:"preview-trophy-img"},null,-1)),b("span",M_,"×"+be(A.value.silver),1),T[12]||(T[12]=b("span",{class:"preview-trophy-place"},"2nd",-1))])):ke("",!0),A.value.gold>0?(pe(),fe("div",D_,[T[13]||(T[13]=b("div",{class:"preview-trophy-img preview-trophy-img--lg"},null,-1)),b("span",R_,"×"+be(A.value.gold),1),T[14]||(T[14]=b("span",{class:"preview-trophy-place"},"1st",-1))])):ke("",!0),A.value.bronze>0?(pe(),fe("div",I_,[T[15]||(T[15]=b("div",{class:"preview-trophy-img"},null,-1)),b("span",$_,"×"+be(A.value.bronze),1),T[16]||(T[16]=b("span",{class:"preview-trophy-place"},"3rd",-1))])):ke("",!0)])])):ke("",!0),b("div",N_,[b("div",B_,[T[18]||(T[18]=b("span",{class:"preview-legend-label"},"Odds Format",-1)),b("span",F_,be(L.value),1)]),b("div",z_,[T[19]||(T[19]=b("span",{class:"preview-legend-label"},"Format",-1)),b("span",H_,be(Y.value),1)]),b("div",U_,[T[20]||(T[20]=b("span",{class:"preview-legend-label"},"Game Mode",-1)),b("span",G_,be(Q.value),1)]),T[21]||(T[21]=b("div",{class:"preview-legend-item"},[b("span",{class:"preview-legend-label"},"Entry"),b("span",{class:"preview-legend-value",style:{color:"var(--status-upcoming-text, #00E676)"}},"Free")],-1))]),f.value&&l.value?.is_private===!0?(pe(),fe("div",j_,[b("div",q_,[T[22]||(T[22]=b("span",{class:"preview-section-label"},"Invite players",-1)),C.value.pending+C.value.accepted+C.value.declined>0?(pe(),fe("span",V_,[C.value.pending>0?(pe(),fe($e,{key:0},[Be(be(C.value.pending)+" pending",1)],64)):ke("",!0),C.value.accepted>0?(pe(),fe($e,{key:1},[C.value.pending>0?(pe(),fe($e,{key:0},[Be(" · ")],64)):ke("",!0),Be(" "+be(C.value.accepted)+" accepted ",1)],64)):ke("",!0),C.value.declined>0?(pe(),fe($e,{key:2},[C.value.pending>0||C.value.accepted>0?(pe(),fe($e,{key:0},[Be(" · ")],64)):ke("",!0),Be(" "+be(C.value.declined)+" declined ",1)],64)):ke("",!0)])):ke("",!0)]),b("form",{class:"invite-form",onSubmit:Ca(E,["prevent"]),autocomplete:"off"},[Dt(b("input",{type:"text",class:"invite-form__input","onUpdate:modelValue":T[0]||(T[0]=B=>g.value=B),disabled:m.value,placeholder:"User Name or Email",name:"invite-recipient",autocapitalize:"off",autocorrect:"off",spellcheck:"false",autocomplete:"off","data-lpignore":"true","data-1p-ignore":"true","data-form-type":"other"},null,8,Y_),[[Hs,g.value]]),b("button",{type:"submit",class:"invite-form__btn",disabled:m.value||!g.value.trim()},be(m.value?"Sending...":"Send"),9,K_)],32),v.value?(pe(),fe("p",J_,be(v.value),1)):(pe(),fe("p",W_," Goes to their in-app inbox. For friends not on BMA yet, use the Share link below. ")),h.value.length>0?(pe(),fe("div",X_,[(pe(!0),fe($e,null,Gt(h.value,B=>(pe(),fe("div",{class:"invite-sent-row",key:B.guid},[b("div",Q_,[b("span",Z_,be(B.invitee_display_name||B.invitee_user_name||"Invitee"),1),b("span",{class:Ve(["invite-sent-row__status","invite-sent-row__status--"+(B.status||"pending").toLowerCase()])},be((B.status||"PENDING").toLowerCase()),3)]),(B.status||"").toUpperCase()==="PENDING"?(pe(),fe("button",{key:0,class:"invite-sent-row__revoke",type:"button",onClick:N=>I(B.guid),"aria-label":"Revoke invite to "+(B.invitee_display_name||"invitee")},"Revoke",8,e0)):ke("",!0)]))),128))])):ke("",!0)])):ke("",!0),b("div",t0,[f.value?(pe(),fe("button",{key:0,class:"preview-share-btn",onClick:X,"aria-label":"Share invite link"},[...T[23]||(T[23]=[b("svg",{width:"18",height:"18",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true"},[b("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"})],-1),b("span",null,"Share Invite Link",-1)])])):ke("",!0),b("button",{class:"preview-cta-btn",onClick:te},be(ne.value),1),u.value?(pe(),fe("p",a0," Sign up is quick. You'll come right back to join. ")):f.value?(pe(),fe("p",s0," You're the host. Share the link to fill your lobby. ")):ke("",!0)])])):(pe(),fe("div",n0,[b("p",null,be(O.value),1),i.value!=="loading"?(pe(),fe("button",{key:0,class:"preview-empty-btn",onClick:U},"Back")):ke("",!0)]))]))}},o0={class:"create-cntr"},i0={class:"create-scroll"},l0={class:"create-steps"},c0=["onClick"],d0={class:"create-steps__num"},u0={class:"create-steps__label"},p0={class:"create-wrap"},f0={key:0,class:"create-banner create-banner--error"},h0={key:1,class:"create-step"},m0={key:0,class:"create-banner create-banner--gate",role:"status"},g0={class:"create-banner__msg"},b0={class:"create-field"},_0={key:0,class:"create-field__hint"},v0={key:1,class:"create-field__hint create-field__hint--muted"},y0={class:"create-field"},w0={key:0,class:"create-field__hint"},x0={key:1,class:"create-field__hint create-field__hint--muted"},T0={class:"create-field"},k0=["data-offset","onClick"],S0={class:"create-day-chip__dow"},E0={class:"create-day-chip__date"},A0={key:0,class:"create-day-chip__tag"},C0={class:"create-field"},P0={class:"create-chip-row"},O0=["onClick"],L0={key:0,class:"create-field__hint"},M0={key:1,class:"create-field__hint create-field__hint--muted"},D0={key:1,class:"create-duration"},R0={class:"create-duration__range"},I0={class:"create-duration__day"},$0={class:"create-duration__day"},N0={class:"create-duration__num-row"},B0={class:"create-duration__num"},F0={class:"create-duration__label"},z0={key:2,class:"create-step"},H0={class:"create-mode-list"},U0=["disabled","aria-disabled","title","onClick"],G0={class:"create-mode__head"},j0={class:"create-mode__title"},q0={class:"create-mode__desc"},V0={key:0,class:"create-mode__check","aria-hidden":"true"},Y0={key:1,class:"create-mode__lock","aria-hidden":"true"},K0={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},W0={key:3,class:"create-step"},J0={class:"create-sports-header"},X0={class:"create-sports-counter__num"},Q0={class:"create-sport-picker"},Z0=["disabled","onClick"],ev={class:"create-sport-pick__icon"},tv=["sport","data-sport-group"],av={class:"create-sport-pick__title"},sv={key:0,class:"create-sport-pick__check","aria-hidden":"true"},nv={key:0,class:"create-field__hint",style:{display:"block","margin-top":"8px"}},rv={key:1,class:"create-slate"},ov={class:"create-slate__rows"},iv={class:"create-slate-row__icon"},lv=["sport","data-sport-group"],cv={class:"create-slate-row__main"},dv={class:"create-slate-row__title"},uv={key:0,class:"create-slate-row__status"},pv={key:1,class:"create-slate-row__status create-slate-row__status--muted"},fv=["aria-label","onClick"],hv={key:0,class:"create-slate__footnote"},mv={key:1,class:"create-slate__footnote create-slate__footnote--muted"},gv={key:4,class:"create-step"},bv={class:"create-field"},_v={key:0,class:"create-field__hint"},vv={key:1,class:"create-field__hint create-field__hint--muted"},yv={class:"create-toggle"},wv={key:5,class:"create-step"},xv={class:"create-review-card"},Tv={class:"create-review-row"},kv={class:"create-review-value"},Sv={key:0,class:"create-review-row"},Ev={class:"create-review-value"},Av={class:"create-review-row"},Cv={class:"create-review-value"},Pv={class:"create-review-row"},Ov={class:"create-review-value"},Lv={class:"create-review-row"},Mv={class:"create-review-value"},Dv={class:"create-review-row"},Rv={class:"create-review-value"},Iv={class:"create-nav"},$v=["disabled"],Nv=["disabled"],Bv=["disabled"],er=7,Fv=28,_i=2,zv={__name:"create_tournament_route",setup(t){const e=ct(),a=xe(),s=[{id:1,label:"Basics"},{id:2,label:"Game Mode"},{id:3,label:"Sports"},{id:4,label:"Players"},{id:5,label:"Review"}],n=Pe(1),r=Pe({tokens:[],modes:{},tiers:{role_to_tier:{},allowed_modes:{}}}),o=_e(()=>{const M=a.appSession?.session_user?.class;if(typeof window<"u"&&window.GameTypeLifeCycle?.forToken){const k=window.GameTypeLifeCycle.forToken("DEFAULT_FORMAT");if(k&&typeof k.resolveUserTier=="function")return k.resolveUserTier(M)}return"basic"}),i=_e(()=>{const M=r.value.tokens||[],k=r.value.modes||{},z=o.value;return M.map(se=>{const ce=k[se]||{},he=(Array.isArray(ce.tiers)?ce.tiers:[]).includes(z),le=he?ce.beta?"Beta":se==="DEFAULT_FORMAT"?"The classic":"":"Requires Premium";return{key:se,title:ce.label||se,tagline:le,description:ce.description||"",available:he,beta:!!ce.beta,betaMessage:ce.betaMessage||""}})});async function l(){try{const M=window.BMACOREAPI?.API_baseURI&&window.BMACOREAPI?.API_ver?`${window.BMACOREAPI.API_baseURI}/m5t/${window.BMACOREAPI.API_ver}`:"https://machfive-bmacdev-rest.onrender.com/m5t/v5",k=await fetch(`${M}/meta/game-modes`);if(!k.ok)throw new Error(`HTTP ${k.status}`);const z=await k.json();z&&z.ok&&z.modes&&Array.isArray(z.tokens)&&(r.value={tokens:z.tokens,modes:z.modes,tiers:z.tiers||{role_to_tier:{},allowed_modes:{}}})}catch(M){console.warn("[create_tournament_route] /meta/game-modes load failed:",M?.message),r.value={tokens:["DEFAULT_FORMAT"],modes:{DEFAULT_FORMAT:{token:"DEFAULT_FORMAT",label:"Bet Max Tourney",description:"Free-form picks throughout the tournament window.",beta:!1,betaMessage:null,tiers:["basic","premium"]}},tiers:{role_to_tier:{},allowed_modes:{basic:["DEFAULT_FORMAT"],premium:["*"]}}}}}const c=_e(()=>{const M=a.appSession?.session_user?.guid;if(!M)return null;const k=a.coreTourn?.length?a.coreTourn[a.coreTourn.length-1]:null;return k&&(k.data||[]).find(se=>{if(!se?.creator_guid||se.creator_guid!==M||se.is_private!==!0)return!1;const ce=se.status||se.class;return ce==="UPCOMING"||ce==="LOCKED"})||null}),u=_e(()=>{const M=c.value?.window_end_time;if(!M)return"";let k=new Date(M);return!M.includes("Z")&&!M.match(/[+-]\d{2}:\d{2}$/)&&(k=new Date(M+"Z")),isNaN(k.getTime())?"":k.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}),d=_e(()=>{const M=a.appSession?.session_user||{};return M.first||M.username||"My"}),p=_e(()=>{const M=new Date().toLocaleString(void 0,{month:"long"});return`${d.value}'s ${M} Pool`}),f=M=>{const k=z=>String(z).padStart(2,"0");return`${M.getFullYear()}-${k(M.getMonth()+1)}-${k(M.getDate())}`},g=(()=>{const M=new Date;return M.setHours(0,0,0,0),M})(),m=(M,k)=>{const z=new Date(M.getTime());return z.setDate(z.getDate()+k),z},v=Array.from({length:Fv},(M,k)=>k),h=M=>m(g,M),_=M=>M.toLocaleDateString(void 0,{weekday:"short"}),w=M=>M.toLocaleDateString(void 0,{month:"short",day:"numeric"}),E=M=>M===0?"Today":M===1?"Tomorrow":"",I=[{key:1,label:"1 day"},{key:2,label:"2 days"},{key:3,label:"3 days"},{key:5,label:"5 days"},{key:7,label:"7 days"}],R=(()=>{const M=(6-g.getDay()+7)%7;return M===0?0:M})(),C=Pe({caption:p.value,tagline:"",sportKeys:[],gameMode:"DEFAULT_FORMAT",startOffset:R,lengthDays:3,maxEntrants:10,creatorParticipating:!0}),H=M=>{const k=i.value.find(z=>z.key===M);!k||!k.available||(C.value.gameMode=M)},$=_e(()=>f(m(g,C.value.startOffset))),G=_e(()=>{const M=C.value.startOffset+Math.max(1,C.value.lengthDays)-1;return f(m(g,M))}),j=Pe(typeof crypto<"u"&&typeof crypto.randomUUID=="function"?`draft_${crypto.randomUUID()}`:`draft_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,10)}`),F=Pe(!1),q=Pe(""),P=Pe({}),A=Pe(null),S=(M,k=!1)=>{if(!M)return"";const[z,se,ce]=M.split("-").map(Number);return new Date(z,(se||1)-1,ce||1,k?23:0,k?59:0,0,0).toISOString()},D=_e(()=>S($.value,!1)),L=_e(()=>S(G.value,!0)),Y=M=>{if(!M)return"";const[k,z,se]=M.split("-").map(Number);return new Date(k,(z||1)-1,se||1).toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})},Q=M=>{if(!M)return NaN;const[k,z,se]=M.split("-").map(Number);return new Date(k,(z||1)-1,se||1,0,0,0,0).getTime()},re=_e(()=>{if(!$.value||!G.value)return 0;const M=Q($.value),k=Q(G.value);return isNaN(M)||isNaN(k)?0:Math.max(1,Math.round((k-M)/(24*3600*1e3))+1)}),Z=_e(()=>{const M=new Set,k=[],z=a.coreTourn?.length?a.coreTourn[a.coreTourn.length-1]:null;if(!z)return k;for(const se of z.data||[]){const ce=Array.isArray(se.matches_expanded)?se.matches_expanded:[];for(const me of ce){const he=me.guid||me.odds_id||me.id;!he||M.has(he)||(M.add(he),k.push(me))}}return k}),V=M=>{if(!M||!D.value||!L.value)return 0;const k=new Date(D.value).getTime(),z=new Date(L.value).getTime();return Z.value.reduce((se,ce)=>{if(ce.sport_id!==M)return se;const me=ce.scheduled_at||"";let he=new Date(me);!me.includes("Z")&&!me.match(/[+-]\d{2}:\d{2}$/)&&(he=new Date(me+"Z"));const le=he.getTime();return isNaN(le)?se:le>=k&&le<=z?se+1:se},0)},ae=_e(()=>(a.appMeta?.sports||[]).filter(k=>k.active===!0&&!k.has_outrights).map(k=>({key:k.key,title:k.title||k.description||k.key,group:k.group||"default"})).sort((k,z)=>k.title.localeCompare(z.title))),ee=M=>ae.value.find(k=>k.key===M)||{key:M,title:M,group:"default"},ne=_e(()=>C.value.sportKeys.length>=_i),U=M=>{const k=C.value.sportKeys.indexOf(M);if(k>=0){C.value.sportKeys.splice(k,1);return}if(C.value.sportKeys.length>=2){q.value="Free tier is limited to 2 sports. Deselect one first.";return}C.value.sportKeys.push(M)},te=M=>C.value.sportKeys.includes(M),X=_e(()=>C.value.sportKeys.reduce((M,k)=>M+V(k),0)),oe=_e(()=>{const M={},k=Q($.value),z=Q(G.value),se=g.getTime();isNaN(k)?M.window="Pick a start day.":k<se&&(M.window="Start day can't be in the past."),isNaN(z)?M.window=M.window||"Pick a length.":k&&z<k&&(M.window="End day must be on or after the start day."),C.value.lengthDays>er&&(M.window=`Free tier contests max out at ${er} days.`);const ce=(C.value.caption||"").trim();(ce.length<3||ce.length>60)&&(M.caption="Name must be 3 to 60 characters."),(C.value.tagline||"").trim().length>120&&(M.tagline="Tagline max is 120 characters.");const he=i.value.find(ge=>ge.key===C.value.gameMode);(!he||!he.available)&&(M.mode="Pick a game mode."),C.value.sportKeys.length<1&&(M.sports="Pick at least one sport."),C.value.sportKeys.length>2&&(M.sports="Free tier is limited to 2 sports.");const le=Number(C.value.maxEntrants);return le>=2&&le<=10||(M.max="Max entrants must be between 2 and 10."),M}),ie=M=>{const k=oe.value;return M===1?!k.window&&!k.caption&&!k.tagline:M===2?!k.mode:M===3?!k.sports:M===4?!k.max:M===5?!k.window&&!k.caption&&!k.tagline&&!k.mode&&!k.sports&&!k.max:!0},x=_e(()=>ie(n.value)),O=()=>{if(q.value="",!x.value){q.value="Please complete this step before moving on.",P.value=oe.value;return}P.value={},n.value<s.length&&n.value++},y=()=>{q.value="",P.value={},n.value>1&&n.value--},T=M=>{M<n.value&&(n.value=M,q.value="",P.value={})},B=()=>({caption:C.value.caption.trim(),tagline:C.value.tagline.trim()||void 0,sports_allowed:C.value.sportKeys.map(M=>({key:M})),window_start_time:D.value,window_end_time:L.value,entities:{max:Number(C.value.maxEntrants)},creator_participating:C.value.creatorParticipating,game_mode_class:C.value.gameMode,client_draft_id:j.value}),N=M=>{console.warn("[create_tournament_route] server rejected create:",{httpStatus:M?.status,ok:M?.ok,data:M?.data});const k=M?.data?.error||`http_${M?.status||"unknown"}`,z=M?.data?.reason?` (${M.data.reason})`:"",se=M?.data?.message||M?.data?.detail||"";switch(k){case"invalid_caption":return P.value.caption=`Name rejected${z}.`,n.value=1,"Please fix the tournament name.";case"invalid_tagline":return P.value.tagline=`Tagline rejected${z}.`,n.value=1,"Please fix the tagline.";case"invalid_sports":return P.value.sports=`Sports rejected${z}.`,n.value=3,"Please review your sport selection.";case"invalid_window":return P.value.window=`Window rejected${z}.`,n.value=1,"Please review the tournament window.";case"invalid_max_entrants":return P.value.max="Max entrants rejected.",n.value=4,"Max entrants must be between 2 and 10.";case"invalid_request_shape":return`Request rejected as malformed${se?": "+se:""}.`;case"active_limit_reached":return"You already have an active contest. Cancel or finish it first.";case"tier_gate_violation":return`That option isn't available on the free tier yet${M?.data?.field?` (${M.data.field})`:""}.`;case"rate_limited":return"Too many create attempts. Try again in a bit.";case"unauthenticated":return"Your session expired. Please sign in again.";case"internal":return"Server error. Please try again in a moment.";default:return`Server said: ${k}${se?" · "+se:""}`}},K=async()=>{if(q.value="",P.value={},!ie(5)){q.value="Please check all steps before publishing.",P.value=oe.value;return}F.value=!0;try{const M=B();console.log("[create_tournament_route] POST /m5t/v5/tournament payload:",M);const k=await Te.createTournament(M);if(console.log("[create_tournament_route] response:",k),k.ok&&k.data?.tournament){const z=k.data.tournament;a.pushCoreTourn({timestamp:Date.now(),source:"API",data:[z]}),typeof neodigmToast<"u"&&neodigmToast.q("Tournament created. Share the link to invite friends.","success"),e.push({name:"preview_route",params:{guid:z.guid},query:z.join_slug?{s:z.join_slug}:void 0});return}q.value=N(k)}catch(M){console.warn("[create_tournament_route] createTournament failed:",M),q.value="Network error. Please try again."}finally{F.value=!1}},W=()=>e.push({name:"home_route"});return lt(()=>{document.body.classList.add("route-create-tournament"),window.scrollTo(0,0),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0),l();try{window.GameTypeLifeCycle&&window.GameTypeLifeCycle.forTournament({class:C.value.gameMode}).doBeforeTournamentCreate({tournament:{class:C.value.gameMode,status:"DRAFT"}}).catch(k=>console.warn("[create_tournament_route] doBeforeTournamentCreate failed (non-fatal):",k?.message))}catch{}requestAnimationFrame(()=>{const M=A.value;if(!M)return;const k=M.querySelector(`[data-offset="${C.value.startOffset}"]`);if(k){const z=k.offsetLeft-M.clientWidth/2+k.offsetWidth/2;M.scrollLeft=Math.max(0,z)}})}),Bt(()=>{document.body.classList.remove("route-create-tournament")}),(()=>{const M=new Date;return M.setHours(0,0,0,0),f(M)})(),(M,k)=>(pe(),fe("main",o0,[b("div",{class:"create-header"},[b("button",{class:"create-header__back",onClick:W,"aria-label":"Back to home"},[...k[4]||(k[4]=[b("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"15 18 9 12 15 6"})],-1)])]),k[5]||(k[5]=b("h1",{class:"create-header__title"},"Create a Tournament",-1))]),b("div",i0,[b("div",l0,[(pe(),fe($e,null,Gt(s,z=>b("div",{key:z.id,class:Ve(["create-steps__dot",{"create-steps__dot--active":z.id===n.value,"create-steps__dot--complete":z.id<n.value}]),onClick:se=>T(z.id)},[b("span",d0,be(z.id),1),b("span",u0,be(z.label),1)],10,c0)),64))]),b("div",p0,[q.value?(pe(),fe("div",f0,be(q.value),1)):ke("",!0),n.value===1?(pe(),fe("section",h0,[c.value?(pe(),fe("div",m0,[k[6]||(k[6]=b("span",{class:"create-banner__tag create-banner__tag--gate"},"ACTIVE POOL",-1)),b("span",g0,[b("strong",null,be(c.value.caption||"Your pool"),1),Be(" is still running"+be(u.value?` through ${u.value}`:"")+". Free tier runs one pool at a time, so your next one opens up as soon as this one wraps. ",1)])])):ke("",!0),k[12]||(k[12]=b("div",{class:"create-banner create-banner--dev",role:"status"},[b("span",{class:"create-banner__tag"},"BETA"),b("span",{class:"create-banner__msg"},"Feature in active development.")],-1)),k[13]||(k[13]=b("h4",{class:"create-step__heading"},"Name it and set the window",-1)),k[14]||(k[14]=b("p",{class:"create-step__hint"},"Quick setup: a name for the invite, a start day, and how long it runs.",-1)),b("label",b0,[k[7]||(k[7]=b("span",{class:"create-field__label"},"Name",-1)),Dt(b("input",{type:"text","onUpdate:modelValue":k[0]||(k[0]=z=>C.value.caption=z),maxlength:"60",placeholder:"Name your tournament",autocapitalize:"words",autocomplete:"off",enterkeyhint:"next",class:Ve(["create-field__input",{"create-field__input--error":P.value.caption}])},null,2),[[Hs,C.value.caption]]),P.value.caption?(pe(),fe("span",_0,be(P.value.caption),1)):(pe(),fe("span",v0,be((C.value.caption||"").length)+" / 60",1))]),b("label",y0,[k[8]||(k[8]=b("span",{class:"create-field__label"},[Be("Tagline "),b("span",{class:"create-field__optional"},"(optional)")],-1)),Dt(b("input",{type:"text","onUpdate:modelValue":k[1]||(k[1]=z=>C.value.tagline=z),maxlength:"120",placeholder:"One line about your contest",autocapitalize:"sentences",autocomplete:"off",enterkeyhint:"next",class:Ve(["create-field__input",{"create-field__input--error":P.value.tagline}])},null,2),[[Hs,C.value.tagline]]),P.value.tagline?(pe(),fe("span",w0,be(P.value.tagline),1)):(pe(),fe("span",x0,be((C.value.tagline||"").length)+" / 120",1))]),b("div",T0,[k[9]||(k[9]=b("span",{class:"create-field__label"},"Starts",-1)),b("div",{class:"create-day-scroller",ref_key:"dayScrollerEl",ref:A},[(pe(!0),fe($e,null,Gt(ot(v),z=>(pe(),fe("button",{key:z,type:"button",class:Ve(["create-day-chip",{"create-day-chip--on":C.value.startOffset===z}]),"data-offset":z,onClick:se=>C.value.startOffset=z},[b("span",S0,be(_(h(z))),1),b("span",E0,be(w(h(z))),1),E(z)?(pe(),fe("span",A0,be(E(z)),1)):ke("",!0)],10,k0))),128))],512)]),b("div",C0,[k[10]||(k[10]=b("span",{class:"create-field__label"},"Length",-1)),b("div",P0,[(pe(),fe($e,null,Gt(I,z=>b("button",{key:z.key,type:"button",class:Ve(["create-chip",{"create-chip--on":C.value.lengthDays===z.key}]),onClick:se=>C.value.lengthDays=z.key},be(z.label),11,O0)),64))]),P.value.window?(pe(),fe("span",L0,be(P.value.window),1)):(pe(),fe("span",M0,"Free tier runs up to "+be(er)+" days."))]),re.value>0?(pe(),fe("div",D0,[b("div",R0,[b("span",I0,be(Y($.value)),1),k[11]||(k[11]=b("span",{class:"create-duration__arrow"},"→",-1)),b("span",$0,be(Y(G.value)),1)]),b("div",N0,[b("span",B0,be(re.value),1),b("span",F0,be(re.value===1?"day":"days")+" of play",1)])])):ke("",!0)])):ke("",!0),n.value===2?(pe(),fe("section",z0,[k[17]||(k[17]=b("h4",{class:"create-step__heading"},"Choose a game mode",-1)),k[18]||(k[18]=b("p",{class:"create-step__hint"}," Modes available to you depend on your tier. Locked tiles are available with Premium. ",-1)),b("div",H0,[(pe(!0),fe($e,null,Gt(i.value,z=>(pe(),fe("button",{key:z.key,type:"button",class:Ve(["create-mode",{"create-mode--on":C.value.gameMode===z.key&&z.available,"create-mode--disabled":!z.available}]),disabled:!z.available,"aria-disabled":!z.available,title:z.available?z.betaMessage||"":"Requires Premium",onClick:se=>H(z.key)},[b("div",G0,[b("span",j0,be(z.title),1),b("span",{class:Ve(["create-mode__tagline",{"create-mode__tagline--soon":!z.available,"create-mode__tagline--beta":z.available&&z.beta}])},be(z.tagline),3)]),b("p",q0,be(z.description),1),C.value.gameMode===z.key&&z.available?(pe(),fe("span",V0,[...k[15]||(k[15]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"20 6 9 17 4 12"})],-1)])])):ke("",!0),z.available?ke("",!0):(pe(),fe("span",Y0,[...k[16]||(k[16]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[b("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),b("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})],-1)])]))],10,U0))),128))]),P.value.mode?(pe(),fe("span",K0,be(P.value.mode),1)):ke("",!0)])):ke("",!0),n.value===3?(pe(),fe("section",W0,[b("div",J0,[k[20]||(k[20]=b("div",null,[b("h4",{class:"create-step__heading",style:{"margin-bottom":"4px"}},"Pick your sports"),b("p",{class:"create-step__hint",style:{margin:"0"}},"Tap a chip to add it. Games scheduled during your window will be added automatically as odds post.")],-1)),b("div",{class:Ve(["create-sports-counter",{"create-sports-counter--max":ne.value}])},[b("span",X0,be(C.value.sportKeys.length),1),k[19]||(k[19]=b("span",{class:"create-sports-counter__divider"},"/",-1)),b("span",{class:"create-sports-counter__max"},be(_i))],2)]),b("div",Q0,[(pe(!0),fe($e,null,Gt(ae.value,z=>(pe(),fe("button",{key:z.key,type:"button",class:Ve(["create-sport-pick",{"create-sport-pick--on":te(z.key),"create-sport-pick--disabled":ne.value&&!te(z.key)}]),disabled:ne.value&&!te(z.key),onClick:se=>U(z.key)},[b("span",ev,[b("bma-sport-icon",{sport:z.key,"data-sport-group":z.group},null,8,tv)]),b("span",av,be(z.title),1),te(z.key)?(pe(),fe("span",sv,[...k[21]||(k[21]=[b("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"3","stroke-linecap":"round","stroke-linejoin":"round"},[b("polyline",{points:"20 6 9 17 4 12"})],-1)])])):ke("",!0)],10,Z0))),128))]),P.value.sports?(pe(),fe("span",nv,be(P.value.sports),1)):ke("",!0),C.value.sportKeys.length>0?(pe(),fe("div",rv,[k[23]||(k[23]=b("div",{class:"create-slate__label"},"Your slate",-1)),b("div",ov,[(pe(!0),fe($e,null,Gt(C.value.sportKeys,z=>(pe(),fe("div",{key:z,class:"create-slate-row"},[b("span",iv,[b("bma-sport-icon",{sport:z,"data-sport-group":ee(z).group},null,8,lv)]),b("div",cv,[b("span",dv,be(ee(z).title),1),V(z)>0?(pe(),fe("span",uv,be(V(z))+" game"+be(V(z)===1?"":"s")+" available this window",1)):(pe(),fe("span",pv," Games will be added when odds post "))]),b("button",{class:"create-slate-row__remove",type:"button","aria-label":"Remove "+ee(z).title,onClick:se=>U(z)},[...k[22]||(k[22]=[b("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2.5","stroke-linecap":"round","stroke-linejoin":"round"},[b("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),b("line",{x1:"6",y1:"6",x2:"18",y2:"18"})],-1)])],8,fv)]))),128))]),X.value>0?(pe(),fe("div",hv,be(X.value)+" game"+be(X.value===1?"":"s")+" already on the slate · more added during the tournament. ",1)):(pe(),fe("div",mv," No games are on the slate yet. They'll populate as odds post. "))])):ke("",!0)])):ke("",!0),n.value===4?(pe(),fe("section",gv,[k[26]||(k[26]=b("h4",{class:"create-step__heading"},"How many players?",-1)),k[27]||(k[27]=b("p",{class:"create-step__hint"},"Up to 10 on the free tier. You're in by default — toggle off if you're just hosting.",-1)),b("label",bv,[k[24]||(k[24]=b("span",{class:"create-field__label"},"Max Entrants",-1)),Dt(b("input",{type:"number",min:"2",max:"10",inputmode:"numeric",pattern:"[0-9]*","onUpdate:modelValue":k[2]||(k[2]=z=>C.value.maxEntrants=z),class:Ve(["create-field__input create-field__input--num",{"create-field__input--error":P.value.max}])},null,2),[[Hs,C.value.maxEntrants,void 0,{number:!0}]]),P.value.max?(pe(),fe("span",_v,be(P.value.max),1)):(pe(),fe("span",vv,"Free tier max is 10."))]),b("label",yv,[Dt(b("input",{type:"checkbox","onUpdate:modelValue":k[3]||(k[3]=z=>C.value.creatorParticipating=z)},null,512),[[Bl,C.value.creatorParticipating]]),k[25]||(k[25]=b("span",null,"I'm playing in this tournament",-1))]),k[28]||(k[28]=b("p",{class:"create-step__note"}," You'll be able to invite friends by User Name or Email once your pool is published. Look for the Invite panel on the pool's info page. ",-1))])):ke("",!0),n.value===5?(pe(),fe("section",wv,[k[36]||(k[36]=b("h4",{class:"create-step__heading"},"Ready to publish?",-1)),k[37]||(k[37]=b("p",{class:"create-step__hint"},"Here's what your invitees will see. Tap any step number above to edit.",-1)),b("div",xv,[b("div",Tv,[k[29]||(k[29]=b("span",{class:"create-review-label"},"Name",-1)),b("span",kv,be(C.value.caption),1)]),C.value.tagline?(pe(),fe("div",Sv,[k[30]||(k[30]=b("span",{class:"create-review-label"},"Tagline",-1)),b("span",Ev,be(C.value.tagline),1)])):ke("",!0),b("div",Av,[k[31]||(k[31]=b("span",{class:"create-review-label"},"Dates",-1)),b("span",Cv,be(Y($.value))+" → "+be(Y(G.value)),1)]),b("div",Pv,[k[32]||(k[32]=b("span",{class:"create-review-label"},"Sports",-1)),b("span",Ov,[(pe(!0),fe($e,null,Gt(C.value.sportKeys,z=>(pe(),fe("span",{key:z,class:"create-review-pill"},be((ae.value.find(se=>se.key===z)||{}).title||z)+" · "+be(V(z)),1))),128))])]),b("div",Lv,[k[33]||(k[33]=b("span",{class:"create-review-label"},"Players",-1)),b("span",Mv,"Up to "+be(C.value.maxEntrants)+" · "+be(C.value.creatorParticipating?"you're in":"hosting only"),1)]),b("div",Dv,[k[34]||(k[34]=b("span",{class:"create-review-label"},"Format",-1)),b("span",Rv,be((i.value.find(z=>z.key===C.value.gameMode)||{}).title||"Bet Max Tourney")+" · Fixed Slate · TD$ 500",1)]),k[35]||(k[35]=b("div",{class:"create-review-row"},[b("span",{class:"create-review-label"},"Trophies"),b("span",{class:"create-review-value"},"1 Gold · 1 Silver · 1 Bronze")],-1))])])):ke("",!0),b("div",Iv,[b("button",{class:"create-nav__btn create-nav__btn--ghost",onClick:y,disabled:n.value===1||F.value},"Back",8,$v),n.value<s.length?(pe(),fe("button",{key:0,class:"create-nav__btn create-nav__btn--primary",onClick:O,disabled:!x.value},"Next",8,Nv)):(pe(),fe("button",{key:1,class:"create-nav__btn create-nav__btn--primary",onClick:K,disabled:F.value},be(F.value?"Publishing…":"Publish Tournament"),9,Bv))])])])]))}},ls=Tf({history:tf(),routes:[{path:"/",name:"splash_route",component:ci},{path:"/splash_route",name:"splash_route",component:ci},{path:"/error_route",name:"error_route",component:Ls},{path:"/forgot_route",name:"forgot_route",component:ab},{path:"/resetforgot_route",name:"resetforgot_route",component:Ls},{path:"/resethash_route",name:"resethash_route",component:fb},{path:"/signin_route",name:"signin_route",component:Cg},{path:"/signout_route",name:"signout_route",component:Lg},{path:"/signup_route",name:"signup_route",component:Jg},{path:"/verf_link_route",name:"verf_link_route",component:yb},{path:"/offline_route",name:"offline_route",component:Ls},{path:"/home_route",name:"home_route",component:lg},{path:"/profile_route",name:"profile_route",component:zb},{path:"/top_players_route",name:"top_players_route",component:Yb},{path:"/play_route",name:"play_route",component:e_},{path:"/create_tournament_route",name:"create_tournament_route",component:zv},{path:"/preview/:guid",name:"preview_route",component:r0,meta:{previewAllowed:!0}},{path:"/appFAQ",name:"appFAQ",component:Ls},{path:"/appHelp",name:"appHelp",component:fg}]});ls.beforeEach((t,e,a)=>{if(t.query.brand!==void 0){const s=t.query.brand;s==="null"||s===""?ja.clearBrand():ja.setBrand(s);const n={...t.query};delete n.brand,a({...t,query:n,replace:!0})}else a()});let Lt=async(t,e,a)=>{typeof console<"u"&&console.log("[GameTypeLifeCycle — no meter configured]",t,a,e)};function vc(t){if(typeof t!="function")throw new TypeError("configureMeter requires a function");Lt=t}let Sr=()=>[];function yc(t){if(typeof t!="function")throw new TypeError("configureSportMarkets requires a function");Sr=t}let Er=null;function wc(t){if(typeof t!="function")throw new TypeError("configureBadgeAwarder requires a function");Er=t}class Ke{static token="BASE";static label="Base";static beta=!1;static betaMessage=null;static bonusLabel="Bonus";static rules={betTypes:["MONEY","SPREAD","TOTAL"],requiredBetTypes:[],maxBetsPerType:-1,maxBetsTotal:-1,minBetsTotal:0,stakeRule:"FREE",stakeMin:1,stakeMax:null,allowPartialSubmit:!0,allowBetModification:!0,lockOnFirstBet:!1,oneBetPerMatchPerType:!1};static ROLE_TO_TIER=Object.freeze({client_standard_role:"basic",client_tier_1_role:"premium",client_tier_2_role:"premium",client_tier_3_role:"premium",admin_root_role:"premium",admin_business_role:"premium",admin_support_role:"premium",admin_readonly_role:"premium"});static TIER_ALLOWED_MODES=Object.freeze({basic:["DEFAULT_FORMAT","LONGSHOT_MAYHEM","SET_IT_AND_FORGET_IT","SURVIVOR"],premium:["*"]});static resolveUserTier(e){if(!e)return"basic";const a=this.ROLE_TO_TIER[e];if(!a){try{Lt("unknown_role_to_tier",{class:e},"WARN")}catch{}return"basic"}return a}static isTierAllowed(e,a){const s=this.TIER_ALLOWED_MODES[a];return Array.isArray(s)?s.includes("*")?!0:s.includes(e):!1}static rulesSchema={required:["betTypes","requiredBetTypes","maxBetsPerType","maxBetsTotal","minBetsTotal","stakeRule","stakeMin","allowPartialSubmit","allowBetModification","lockOnFirstBet","oneBetPerMatchPerType"],properties:{betTypes:{type:"array",itemEnum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"],label:"Bet Types",hint:"Allowed bet types for this mode"},requiredBetTypes:{type:"array",itemEnum:["SPREAD","MONEY","TOTAL","PROP","PARLAY"],label:"Required Bet Types",hint:"Bet types the user must place at least one of"},maxBetsPerType:{type:"integer",min:-1,label:"Max Bets Per Type",hint:"-1 = unlimited"},maxBetsTotal:{type:"integer",min:-1,label:"Max Bets Total",hint:"-1 = unlimited"},minBetsTotal:{type:"integer",min:0,label:"Min Bets Total",hint:"Minimum number of bets required"},stakeRule:{type:"enum",options:["FREE","SPEND_ALL","MIN_MAX"],label:"Stake Rule",hint:"FREE = no constraint, SPEND_ALL = must spend entire TD$, MIN_MAX = within range"},stakeMin:{type:"number",nullable:!0,label:"Stake Minimum",hint:"Minimum per-bet stake (null = no minimum)"},stakeMax:{type:"number",nullable:!0,label:"Stake Maximum",hint:"Maximum per-bet stake (null = no maximum)"},allowPartialSubmit:{type:"boolean",label:"Allow Partial Submit",hint:"Can submit without meeting all requirements"},allowBetModification:{type:"boolean",label:"Allow Bet Modification",hint:"Can modify bets after initial placement"},lockOnFirstBet:{type:"boolean",label:"Lock On First Bet",hint:"Lock all picks after first bet is placed"},oneBetPerMatchPerType:{type:"boolean",label:"One Bet Per Match Per Type",hint:"Prevent duplicate bet types on same match"}}};static rulesSchemaExtensions={required:[],properties:{}};static getRulesSchema(){const e=this.rulesSchemaExtensions||{required:[],properties:{}};return{required:[...Ke.rulesSchema.required||[],...Array.isArray(e.required)?e.required:[]],properties:{...Ke.rulesSchema.properties||{},...e.properties||{}}}}static getEffectiveRules(e){const a=this.rules,n=(Array.isArray(e?.tags)?e.tags:[]).find(r=>r&&typeof r=="object"&&r.game_rules);return!n||!n.game_rules?a:{...a,...n.game_rules}}static _normalizeBetType(e){return String(e||"").toUpperCase().trim()}static _stakeOf(e){if(!e)return;const a=e.stake??e.wager;if(a==null||a==="")return;const s=parseFloat(a);return Number.isFinite(s)?s:void 0}static _flattenBets(e){const a=[];for(const s of Array.isArray(e)?e:[]){const n=s?.coreMatches__guid||s?.match_guid||"",r=s?.status_time||s?.update_time||s?.create_time||null,o=r?new Date(r).getTime():0,i=Array.isArray(s?.bet)?s.bet:[];for(const l of i)if(!(!l||typeof l!="object"))for(const c of Object.keys(l)){if(c==="short_title")continue;const u=l[c];!u||typeof u!="object"||a.push({matchGuid:n,type:this._normalizeBetType(u.type),team:c,stake:this._stakeOf(u),payout:parseFloat(u.payout)||0,odds:parseFloat(u.odds)||0,reconciled:u.reconciled===!0,outcome:u.outcome||null,slipStatusTime:o})}}return a}static scoreEntry(e,a){if(e?.total_payout!=null){const r=parseFloat(e.total_payout)||0;return{score:r,breakdown:{payout:r,method:"PAYOUT_SUM"}}}const n=this._flattenBets(e?.bets).reduce((r,o)=>o.reconciled?r+o.payout:r,0);return{score:n,breakdown:{payout:n,method:"PAYOUT_SUM"}}}static badge=null;static getBadge(){return this.badge}static _typeLabel(e){switch(this._normalizeBetType(e)){case"SPREAD":return"Spread";case"MONEY":return"Money Line";case"TOTAL":return"Over/Under";default:return e}}static _typeShortLabel(e){switch(this._normalizeBetType(e)){case"SPREAD":return"Spread";case"MONEY":return"Money";case"TOTAL":return"Total";default:return e}}static _typeCounts(e){const a={};for(const s of e||[])a[s.type]=(a[s.type]||0)+1;return a}static _totalStakes(e){const a=(e||[]).reduce((s,n)=>s+(n.stake||0),0);return parseFloat(a.toFixed(2))}static rankLeaderboard(e,a){return Array.isArray(e)?[...e].map(s=>({entry:s,...this.scoreEntry(s,a)})).sort((s,n)=>n.score-s.score).map(s=>s.entry):[]}static getProgressUI(e,a){const s=this.getEffectiveRules(a),n=Array.isArray(s.requiredBetTypes)?s.requiredBetTypes:[],r=n.length>0,o=s.stakeRule==="SPEND_ALL";if(!r&&!o)return{type:"NONE",percent:0,label:"",hints:[],typesStatus:[],complete:!0};const i=this._flattenBets(e),l=this._typeCounts(i),c=this._totalStakes(i),u=parseFloat(a?.tournament_dollars||0),d=u>0?Math.min(100,Math.round(c/u*100)):0,p=n.every(_=>l[this._normalizeBetType(_)]),f=!o||Math.abs(c-u)<.01,g=n.map(_=>{const w=this._normalizeBetType(_);return{type:w,label:this._typeShortLabel(w),placed:!!l[w],count:l[w]||0}}),m=[],h=n.filter(_=>!l[this._normalizeBetType(_)]).map(_=>this._typeLabel(_));return h.length>0&&!f?m.push(`Need a ${h.join(", ")} bet · Spend all TD$ ${Math.round(u).toLocaleString()}`):h.length>0?m.push(`Need a ${h.join(", ")} bet`):!f&&c<u&&m.push(`TD$ ${Math.round(u-c).toLocaleString()} left to allocate`),{type:r?"BET_TYPES":"STAKE_PROGRESS",percent:d,label:o?`TD$ ${Math.round(c).toLocaleString()} / ${Math.round(u).toLocaleString()} spent`:`${i.length} bets placed`,typesStatus:g,hints:m,complete:p&&f}}static rankingDescription(e){return"Rank by your TD$ balance. Your TD$ only moves when a bet settles: wins add the payout, losses subtract the stake. Pending bets don't count until they settle. Higher TD$ wins; ties break on Max Win, then earliest bet placed."}static calcPayout(e,a,s){return e}static _firstBetTime(e){const a=e?.bets||[];let s=1/0;for(const n of a){const r=n?.create_time||n?.timestamp||n?.status_time;if(!r)continue;const o=new Date(r).getTime();!isNaN(o)&&o<s&&(s=o)}return s}static async _reject(e,a,s){await this._meter(e,a,s);try{await Lt(`bet_rejected_${s}`,{tournament_guid:a?.tournament?.guid||null,match_guid:a?.match?.guid||null,user_guid:a?.user?.guid||null,bet_type:this._normalizeBetType(a?.bet?.type)||null,mode:this.token},"REJECT")}catch{}return{ok:!1,reason:s}}static async _meter(e,a={},s="FIRED"){const n=`hook_${e}_${this.token}`,r={tournament_guid:a?.tournament?.guid||null,tournament_class:a?.tournament?.class||null,tournament_status:a?.tournament?.status||null,match_guid:a?.match?.guid||null,user_guid:a?.user?.guid||null,bet_guid:a?.bet?.guid||null,invite_guid:a?.invite?.guid||null,result:s};try{await Lt(n,r,"NEW")}catch(o){typeof console<"u"&&console.warn("[GameTypeLifeCycle] meter failed (non-fatal):",o?.message)}}static async doBeforeTournamentCreate(e){const a=e?.user?.class,s=Ke.resolveUserTier(a);if(!Ke.isTierAllowed(this.token,s)){try{await Lt("tier_gate_violation",{user_guid:e?.user?.guid||null,user_class:a||null,user_tier:s,requested_mode:this.token,path:"doBeforeTournamentCreate"},"REJECT")}catch{}return await this._meter("doBeforeTournamentCreate",e,"tier_gate_violation"),{ok:!1,reason:"tier_gate_violation"}}return await this._meter("doBeforeTournamentCreate",e,"OK"),{ok:!0}}static async doBeforeJoin(e){return await this._meter("doBeforeJoin",e,"OK"),{ok:!0}}static async doBeforeLeave(e){return await this._meter("doBeforeLeave",e),{ok:!0}}static async doBeforeBetPlace(e){const a=e?.tournament||{},s=e?.match||{},n=e?.user||{},r=e?.bet||{},o=String(a.status||"").toUpperCase();if(o!=="UPCOMING"&&o!=="LOCKED")return this._reject("doBeforeBetPlace",e,"tournament_not_live");const i=Array.isArray(a?.entities?.guids)?a.entities.guids:[];if(!n.guid||!i.includes(n.guid))return this._reject("doBeforeBetPlace",e,"not_in_tournament");if(String(s?.scoreboard_data?.time_remaining||"").trim()==="Final")return this._reject("doBeforeBetPlace",e,"match_already_final");const c=this.getEffectiveRules(a),u=this._normalizeBetType(r.type),d=Array.isArray(c.betTypes)?c.betTypes:[];if(d.length>0&&!d.includes(u))return this._reject("doBeforeBetPlace",e,"bet_type_not_allowed");const p=s.sport_id||"";if(p&&typeof Sr=="function"){const m=Sr(p)||[];if(m.length>0&&!m.includes(u))return this._reject("doBeforeBetPlace",e,"bet_type_incompatible_with_sport")}const f=this._stakeOf(r);if(f!==void 0){if(c.stakeMin!=null&&f<c.stakeMin)return this._reject("doBeforeBetPlace",e,"stake_out_of_bounds");if(c.stakeMax!=null&&f>c.stakeMax)return this._reject("doBeforeBetPlace",e,"stake_out_of_bounds")}const g=this._flattenBets(e?.existingBets);return c.maxBetsTotal>0&&g.length>=c.maxBetsTotal?this._reject("doBeforeBetPlace",e,"max_bets_total_exceeded"):c.maxBetsPerType>0&&g.filter(v=>v.type===u).length>=c.maxBetsPerType?this._reject("doBeforeBetPlace",e,"max_bets_per_type_exceeded"):c.oneBetPerMatchPerType&&g.find(v=>v.matchGuid===s.guid&&v.type===u)?this._reject("doBeforeBetPlace",e,"duplicate_bet"):(await this._meter("doBeforeBetPlace",e,"OK"),{ok:!0})}static async doBeforeBetModify(e){return await this._meter("doBeforeBetModify",e),{ok:!0}}static async doBeforeSubmit(e){const a=e?.tournament||{},s=this.getEffectiveRules(a),n=this._flattenBets(e?.bets),r=new Set(n.map(c=>c.type)),o=[],i=Array.isArray(s.requiredBetTypes)?s.requiredBetTypes:[];for(const c of i)r.has(this._normalizeBetType(c))||o.push({reason:"missing_required_bet_type",detail:this._normalizeBetType(c)});if(s.minBetsTotal>0&&n.length<s.minBetsTotal&&o.push({reason:"min_bets_not_met",detail:`${n.length}/${s.minBetsTotal}`}),o.length===0)return await this._meter("doBeforeSubmit",e,"OK"),{ok:!0};if(s.allowPartialSubmit!==!1)return await this._meter("doBeforeSubmit",e,"PARTIAL"),{ok:!0,partial:!0,failures:o};const l=o[0];await this._meter("doBeforeSubmit",e,l.reason);try{await Lt(`bet_rejected_${l.reason}`,{tournament_guid:a?.guid||null,user_guid:e?.user?.guid||null,mode:this.token,detail:l.detail||null},"REJECT")}catch{}return{ok:!1,reason:l.reason,failures:o}}static async doBeforeInviteSend(e){return await this._meter("doBeforeInviteSend",e),{ok:!0}}static async doAfterTournamentCreate(e){await this._meter("doAfterTournamentCreate",e)}static async doAfterJoin(e){await this._meter("doAfterJoin",e)}static async doAfterLeave(e){await this._meter("doAfterLeave",e)}static async doBetPlace(e){await this._meter("doBetPlace",e)}static async doBetReconcile(e){await this._meter("doBetReconcile",e)}static async doMatchStart(e){await this._meter("doMatchStart",e)}static async doMatchUpdate(e){await this._meter("doMatchUpdate",e)}static async doMatchEnd(e){await this._meter("doMatchEnd",e)}static async doInviteSent(e){await this._meter("doInviteSent",e)}static async doInviteReceived(e){await this._meter("doInviteReceived",e)}static async doInviteAccepted(e){await this._meter("doInviteAccepted",e)}static async doInviteDeclined(e){await this._meter("doInviteDeclined",e)}static async doTournament_DRAFT(e){await this._meter("doTournament_DRAFT",e)}static async doTournament_UPCOMING(e){await this._meter("doTournament_UPCOMING",e)}static async doTournament_LOCKED(e){await this._meter("doTournament_LOCKED",e)}static async doTournament_COMPLETED(e){if(await this._meter("doTournament_COMPLETED",e),Er&&e?.pgClient&&e?.tournament)try{await Er(e.pgClient,e.tournament)}catch(a){typeof console<"u"&&console.warn(`[GameTypeLifeCycle] badge awarder failed for tournament ${e.tournament.id}:`,a?.message);try{await Lt("hook_badge_award_failed",{tournament_id:e.tournament.id||null,tournament_guid:e.tournament.guid||null,mode:this.token,error:a?.message||String(a)},"ERROR")}catch{}}}static async doTournament_CANCELLED(e){await this._meter("doTournament_CANCELLED",e)}static async doTournament_ARCHIVED(e){await this._meter("doTournament_ARCHIVED",e)}}class xc extends Ke{static token="DEFAULT_FORMAT";static label="Bet Max Tourney";static description="Free-form picks throughout the tournament window.";static beta=!1;static rules={...Ke.rules,stakeRule:"SPEND_ALL"};static scoreEntry(e,a){const s=parseFloat(e?.tournament_dollars??a?.tournament_dollars??0),n=this._flattenBets(e?.bets);let r=0,o=0,i=0,l=0,c=0;for(const v of n)r+=v.stake,v.reconciled?(o+=v.stake,c+=v.payout):(i+=v.stake,l+=v.payout);const u=s-r,d=parseFloat((s-o+c).toFixed(2)),p=d,m=!(this.getEffectiveRules(a).stakeRule==="SPEND_ALL")||r>=s-.01;return{score:d,breakdown:{method:"SETTLED_PNL",startingTD:parseFloat(s.toFixed(2)),remainingTD:parseFloat(u.toFixed(2)),totalStakes:parseFloat(r.toFixed(2)),committedStakes:parseFloat(o.toFixed(2)),pendingStakes:parseFloat(i.toFixed(2)),balance:parseFloat(p.toFixed(2)),pendingPayout:parseFloat(l.toFixed(2)),settledPayout:parseFloat(c.toFixed(2)),firstBetTime:this._firstBetTime(e),qualified:m}}}static rankLeaderboard(e,a){return Array.isArray(e)?[...e].map(s=>({entry:s,...this.scoreEntry(s,a)})).sort((s,n)=>s.breakdown.qualified!==n.breakdown.qualified?s.breakdown.qualified?-1:1:n.score!==s.score?n.score-s.score:n.breakdown.pendingPayout!==s.breakdown.pendingPayout?n.breakdown.pendingPayout-s.breakdown.pendingPayout:s.breakdown.firstBetTime-n.breakdown.firstBetTime).map(s=>s.entry):[]}}class Tc extends Ke{static token="SET_IT_AND_FORGET_IT";static label="Set It and Forget It";static description="Lock all picks at tournament start. No in-tournament adjustments allowed once submitted.";static beta=!1;static badge={label:"Set & Forget",color:"ghost"};static rules={...Ke.rules,requiredBetTypes:["SPREAD","MONEY","TOTAL"],minBetsTotal:3,stakeRule:"SPEND_ALL",allowPartialSubmit:!1,oneBetPerMatchPerType:!0}}class kc extends Ke{static token="BRACKET";static label="Bet Max Bracket";static description="Single-elimination bracket-style tournament. Picks advance through rounds.";static beta=!0;static betaMessage="Bracket scoring is in beta — the leaderboard currently ranks by payout sum while the full bracket engine is built.";static rankingDescription(e){return"Rank by total payout sum during the beta phase. Full bracket engine ships in a follow-up — once live, advancing through rounds will weight higher than raw payout. Pending bets don't count until they settle."}}class Sc extends Ke{static token="TIERED_FORMAT";static label="Bet Max Tiers";static description="String wins together to tier up. Each tier multiplies your winning bets straight to your balance — Bronze → Silver → Gold → Platinum.";static beta=!0;static betaMessage="Bet Max Tiers (streak) is in beta — multipliers apply at bet settlement; tier mechanics may evolve as we tune for fairness in different pool sizes.";static bonusLabel="Tier";static rules={...Ke.rules,tierSubType:"STREAK",tierStreakThreshold:3,tierMultipliers:[1,1.5,2,3]};static rulesSchemaExtensions={required:[],properties:{tierSubType:{type:"enum",enum:["STREAK"],label:"Tier Mechanic",hint:"STREAK: tier up by winning consecutive bets, demote on loss. (Future sub-types: CUMULATIVE, CAPTAIN.)"},tierStreakThreshold:{type:"integer",min:2,label:"Wins per Tier",hint:"Consecutive winning bets needed to advance one tier. Default 3."},tierMultipliers:{type:"array",label:"Tier Multipliers",hint:"Payout multipliers per tier, ascending. Default [1, 1.5, 2, 3] for Bronze/Silver/Gold/Platinum."}}};static _resolveTierParams(e){const a=this.getEffectiveRules(e),s=a.tierSubType||"STREAK",n=parseInt(a.tierStreakThreshold,10),r=Number.isFinite(n)&&n>0?n:3,o=Array.isArray(a.tierMultipliers)?a.tierMultipliers:[],i=o.length>0?o.map(l=>{const c=parseFloat(l);return Number.isFinite(c)&&c>0?c:1}):[1,1.5,2,3];return{subType:s,threshold:r,multipliers:i}}static _computeStreak(e){if(!Array.isArray(e)||e.length===0)return 0;let a=0;for(let s=e.length-1;s>=0;s--){const n=e[s]?.outcome;if(n==="WIN"||n==="HALF_WIN")a++;else if(n==="LOSS"||n==="HALF_LOSS")break}return a}static _streakToTier(e,a){const s=Math.min(Math.floor(e/a.threshold),a.multipliers.length-1);return{tierIndex:s,multiplier:a.multipliers[s]||1,label:this._tierLabel(s)}}static _tierLabel(e){return["Bronze","Silver","Gold","Platinum","Diamond"][e]||`Tier ${e+1}`}static _orderSettledBets(e){return e.filter(a=>a.reconciled).slice().sort((a,s)=>{const n=a.slipStatusTime||0,r=s.slipStatusTime||0;return n!==r?n-r:0})}static rankingDescription(e){const a=this._resolveTierParams(e);if(a.subType!=="STREAK")return"Rank by your TD$ balance with tier multipliers applied at bet settlement. Pending bets don't count until they settle.";const s=a.multipliers.map((n,r)=>`${this._tierLabel(r)} (${n}×)`).join(" → ");return`Rank by your TD$ balance. Win ${a.threshold} bets in a row to tier up — your tier multiplies every winning bet's payout straight into your balance. Tiers: ${s}. Lose a bet and your streak resets to ${this._tierLabel(0)}. Pending bets don't count until they settle. Ties break on Max Win, then earliest bet placed.`}static getProgressUI(e,a){const s=this._resolveTierParams(a),n=this._flattenBets(e),r=this._orderSettledBets(n),o=this._computeStreak(r),i=this._streakToTier(o,s),l=i.tierIndex>=s.multipliers.length-1,c=l?null:Math.max(0,(i.tierIndex+1)*s.threshold-o),u=l?null:i.tierIndex+1;return{type:"TIERED",subType:s.subType,currentStreak:o,currentTierIndex:i.tierIndex,currentTierLabel:i.label,currentMultiplier:i.multiplier,winsToNextTier:c,nextTierLabel:u===null?null:this._tierLabel(u),nextMultiplier:u===null?null:s.multipliers[u],tierMultipliers:s.multipliers,tierLabels:s.multipliers.map((d,p)=>this._tierLabel(p)),threshold:s.threshold,atMax:l,complete:!1,label:"",hints:[],typesStatus:[]}}static calcPayout(e,a,s,n={}){const r=this._resolveTierParams(s);if(r.subType!=="STREAK"||!Number.isFinite(e)||e<=0)return e;const o=n?.outcome;if(!(o==="WIN"||o==="HALF_WIN"||o===void 0))return e;const c=this._computeStreak(n?.priorBets||[])+1,u=this._streakToTier(c,r);return e*u.multiplier}}class Ec extends Ke{static token="TEAM_MODE";static label="Bet Max Squads";static description="Squad-based competition with shared TD$ pools and collaborative scoring.";static beta=!0;static betaMessage="Bet Max Squads runs as individual scoring during beta. Full squad aggregation ships in a follow-up.";static rankingDescription(e){return"Rank by individual TD$ balance during the beta phase. Team aggregation ships in a follow-up — once live, your team's combined balance will determine standing. Pending bets don't count until they settle."}}class Ac extends Ke{static token="LONGSHOT_MAYHEM";static label="Longshot Mayhem";static description="High-risk high-reward format favoring underdog picks with payout multipliers.";static beta=!1;static betaMessage=null;static bonusLabel="Longshot";static rules={...Ke.rules,stakeRule:"SPEND_ALL",longshotThreshold:150,longshotBonusRatio:.25};static rulesSchemaExtensions={required:[],properties:{longshotThreshold:{type:"integer",min:100,label:"Longshot Threshold (American odds)",hint:"Minimum American odds for a winning bet to earn the bonus. Default 150 (+150 odds)."},longshotBonusRatio:{type:"number",min:0,label:"Longshot Bonus Ratio",hint:"Multiplier on the qualifying-win payout. 0.25 = +25% bonus on top of normal payout."}}};static _resolveLongshotParams(e){const a=this.getEffectiveRules(e),s=Number.isFinite(parseFloat(a.longshotThreshold))?parseFloat(a.longshotThreshold):150,n=Number.isFinite(parseFloat(a.longshotBonusRatio))?parseFloat(a.longshotBonusRatio):.25;return{threshold:s,ratio:n}}static rankingDescription(e){const{threshold:a,ratio:s}=this._resolveLongshotParams(e),n=this.getEffectiveRules(e),r=a>=0?`+${a}`:`${a}`,o=Math.round(s*100),i=n.stakeRule==="SPEND_ALL"?" You must commit your full starting TD$ across the slate to qualify for a finishing position.":"";return`Rank by your TD$ balance. Wins on bets at ${r} or higher pay out ${o}% extra straight to your TD$ balance — reinvest the bonus across more bets.${i} Pending bets don't count until they settle. Ties break on Max Win, then earliest bet placed.`}static calcPayout(e,a,s){const{threshold:n,ratio:r}=this._resolveLongshotParams(s),o=parseFloat(a?.odds)||0;return Number.isFinite(e)&&e>0&&o>=n?e*(1+r):e}static getProgressUI(e,a){const{threshold:s,ratio:n}=this._resolveLongshotParams(a),r=this._flattenBets(e),o=n/(1+n);let i=0,l=0,c=0,u=0;for(const v of r)u+=v.stake,v.odds>=s&&i++,v.reconciled&&v.payout>0&&v.odds>=s&&(l++,c+=v.payout*o);const p=this.getEffectiveRules(a).stakeRule==="SPEND_ALL",f=parseFloat(a?.tournament_dollars||0),g=Math.max(0,f-u),m=!p||g<.01;return{type:"LONGSHOT",threshold:s,ratio:n,longshotBets:i,longshotWins:l,totalBonus:parseFloat(c.toFixed(2)),spendAll:p,startingTD:parseFloat(f.toFixed(2)),totalStakes:parseFloat(u.toFixed(2)),stakeRemaining:parseFloat(g.toFixed(2)),stakeComplete:m,complete:!1,label:"",hints:[],typesStatus:[]}}static async doBetReconcile(e){await this._meter("doBetReconcile",e);const a=e?.bet||{},s=e?.tournament||{},{threshold:n,ratio:r}=this._resolveLongshotParams(s),o=parseFloat(a.odds)||0,i=parseFloat(e?.payout??a.payout)||0;if(i>0&&o>=n)try{const c=i/(1+r),u=i-c;await Lt("longshot_bonus_awarded",{tournament_guid:s.guid||null,user_guid:e?.user?.guid||null,bet_guid:a.guid||null,odds:o,base_payout:parseFloat(c.toFixed(2)),bonus_amount:parseFloat(u.toFixed(2)),final_payout:parseFloat(i.toFixed(2)),threshold:n,ratio:r},"NEW")}catch{}}}class Cc extends Ke{static token="SURVIVOR";static label="Bet Max Survivor";static description="One pick per round. Wrong pick eliminates you. Last person standing wins.";static beta=!0;static betaMessage="Bet Max Survivor is in beta — survival logic and per-round picks are live; mid-tournament rule changes (lives, cadence) may not propagate to in-flight picks.";static rules={...Ke.rules,betTypes:["MONEY"],stakeMin:0,stakeMax:0,pickCadence:"per_match",livesPerUser:1,allowTeamReuse:!1,survivorBetTypes:["MONEY"],minPicksToQualify:1,tieBreakRule:"most_correct_picks",pickDeadlineMinutesBefore:5};static rulesSchemaExtensions={required:[],properties:{pickCadence:{type:"enum",options:["per_match","per_day","per_round"],label:"Pick Cadence",hint:"How often each user picks. per_match = one pick per individual match (NFL classic). per_day groups all matches on a calendar day. per_round = admin-defined rounds."},livesPerUser:{type:"integer",min:1,label:"Lives Per User",hint:"1 = single-elimination Survivor (classic). 2+ creates a strikes/forgiving variant."},allowTeamReuse:{type:"boolean",label:"Allow Team Reuse",hint:"Off = each team usable once per user (classic NFL Survivor). On = any team any week."},survivorBetTypes:{type:"array",itemEnum:["MONEY","SPREAD"],label:"Allowed Bet Types",hint:"Most Survivor pools are moneyline only. Add SPREAD for an alternative pool feel."},minPicksToQualify:{type:"integer",min:0,label:"Minimum Picks To Qualify",hint:"Filters out users who joined and never picked. Default 1 — they must pick at least once to be ranked."},tieBreakRule:{type:"enum",options:["most_correct_picks","earliest_eliminated_loses","random"],label:"Tiebreaker Rule",hint:"How to break ties when multiple users finish alive (rare in deep pools). most_correct_picks is standard."},pickDeadlineMinutesBefore:{type:"integer",min:0,label:"Pick Deadline (minutes before match)",hint:"How many minutes before scheduled match start a pick locks. 5 is standard; 0 means picks lock at commence."}}};static rankingDescription(e){const a=this._resolveSurvivorParams(e),s=a.pickCadence==="per_day"?"day":a.pickCadence==="per_round"?"round":"match",n=a.livesPerUser===1?"1 life":`${a.livesPerUser} lives`,r=a.survivorBetTypes.join("/"),o=a.allowTeamReuse?"Teams may be reused.":"Each team usable once per user.",i=a.pickDeadlineMinutesBefore>0?`Picks lock ${a.pickDeadlineMinutesBefore} minutes before each match.`:"Picks lock at match start.";return`Make one pick per ${s}. Wrong picks cost a life (${n} total). Last person standing wins. ${r} only. ${i} ${o}`}static _resolveSurvivorParams(e){const a=this.getEffectiveRules(e),s=parseInt(a.livesPerUser,10),n=parseInt(a.minPicksToQualify,10),r=parseInt(a.pickDeadlineMinutesBefore,10),o=a.pickCadence==="per_day"||a.pickCadence==="per_round"?a.pickCadence:"per_match",i=["most_correct_picks","earliest_eliminated_loses","random"].includes(a.tieBreakRule)?a.tieBreakRule:"most_correct_picks",l=Array.isArray(a.survivorBetTypes)&&a.survivorBetTypes.length?a.survivorBetTypes.filter(c=>c==="MONEY"||c==="SPREAD"):[];return{pickCadence:o,livesPerUser:Number.isFinite(s)&&s>=1?s:1,allowTeamReuse:a.allowTeamReuse===!0,survivorBetTypes:l.length?l:["MONEY"],minPicksToQualify:Number.isFinite(n)&&n>=0?n:1,tieBreakRule:i,pickDeadlineMinutesBefore:Number.isFinite(r)&&r>=0?r:5}}static scoreEntry(e,a){const s=this._resolveSurvivorParams(a),n=this._flattenBets(e?.bets),r=n.filter(m=>m.reconciled).slice().sort((m,v)=>(m.slipStatusTime||0)-(v.slipStatusTime||0));let o=s.livesPerUser,i=0,l=0,c=0,u=null;for(let m=0;m<r.length;m++){const v=r[m],h=v?.outcome;if(l++,h==="WIN"||h==="HALF_WIN")i++;else if((h==="LOSS"||h==="HALF_LOSS")&&o>0&&(o--,o===0)){c=m+1,u=v.slipStatusTime?new Date(v.slipStatusTime).toISOString():null;break}}const d=o>0,p=n.length,f=l>=s.minPicksToQualify;return{score:d?1e6+i*1e3:c,breakdown:{method:"SURVIVOR",alive:d,livesRemaining:o,livesPerUser:s.livesPerUser,eliminatedAt:u,eliminatedAtIndex:c,correctPicks:i,totalSettledPicks:l,totalPicks:p,qualified:f,firstBetTime:this._firstBetTime(e)}}}static rankLeaderboard(e,a){if(!Array.isArray(e))return[];const s=this._resolveSurvivorParams(a);return[...e].map(n=>({entry:n,...this.scoreEntry(n,a)})).sort((n,r)=>{if(n.breakdown.qualified!==r.breakdown.qualified)return n.breakdown.qualified?-1:1;if(r.score!==n.score)return r.score-n.score;if(s.tieBreakRule==="random"){const l=this._hashGuid(n.entry?.user_guid||""),c=this._hashGuid(r.entry?.user_guid||"");if(l!==c)return l-c}if(!n.breakdown.alive&&!r.breakdown.alive&&r.breakdown.correctPicks!==n.breakdown.correctPicks)return r.breakdown.correctPicks-n.breakdown.correctPicks;if(n.breakdown.firstBetTime!==r.breakdown.firstBetTime)return n.breakdown.firstBetTime-r.breakdown.firstBetTime;const o=String(n.entry?.username||"").toLowerCase(),i=String(r.entry?.username||"").toLowerCase();return o<i?-1:o>i?1:0}).map(n=>n.entry)}static _hashGuid(e){let a=0;const s=String(e||"");for(let n=0;n<s.length;n++)a=(a<<5)-a+s.charCodeAt(n)|0;return a}static async doBeforeBetPlace(e){const a=await super.doBeforeBetPlace(e);if(!a?.ok)return a;const s=this._resolveSurvivorParams(e?.tournament),n=e?.bet||{},r=e?.match||{},o=Array.isArray(e?.existingBets)?e.existingBets:[],i=this._normalizeBetType(n.type);if(!s.survivorBetTypes.includes(i))return this._reject("doBeforeBetPlace",e,"survivor_bet_type_not_allowed");if((this.scoreEntry({bets:o},e?.tournament)?.breakdown||{}).alive===!1)return this._reject("doBeforeBetPlace",e,"survivor_already_eliminated");if(s.pickCadence==="per_match"){if(o.find(u=>u?.coreMatches__guid===r.guid))return this._reject("doBeforeBetPlace",e,"survivor_pick_already_made")}else try{await Lt("survivor_cadence_unhandled",{tournament_guid:e?.tournament?.guid||null,user_guid:e?.user?.guid||null,cadence:s.pickCadence},"WARN")}catch{}if(!s.allowTeamReuse&&n.team&&this._flattenBets(o).find(d=>d.team===n.team))return this._reject("doBeforeBetPlace",e,"survivor_team_already_used");if(r.scheduled_at){const c=new Date(r.scheduled_at).getTime();if(Number.isFinite(c)){const u=c-s.pickDeadlineMinutesBefore*60*1e3;if(Date.now()>=u)return this._reject("doBeforeBetPlace",e,"survivor_pick_locked")}}return await this._meter("doBeforeBetPlace",e,"OK"),{ok:!0}}}const Ms=Object.freeze({DEFAULT_FORMAT:xc,SET_IT_AND_FORGET_IT:Tc,BRACKET:kc,TIERED_FORMAT:Sc,TEAM_MODE:Ec,LONGSHOT_MAYHEM:Ac,SURVIVOR:Cc});class Pc{static TOKENS=Object.keys(Ms);static configureMeter=vc;static configureSportMarkets=yc;static configureBadgeAwarder=wc;static forTournament(e){const a=e?.class||"DEFAULT_FORMAT",s=Ms[a];if(s)return s;try{Lt("unknown_game_mode_class",{requested:a,tournament_guid:e?.guid||null},"WARN")}catch{}return typeof console<"u"&&console.warn("[GameTypeLifeCycle] Unknown game_mode_class resolved to DEFAULT_FORMAT:",a),Ms.DEFAULT_FORMAT}static forToken(e){return Ms[e]||null}}const Hv=Object.freeze(Object.defineProperty({__proto__:null,BRACKET:kc,BaseGameType:Ke,DEFAULT_FORMAT:xc,LONGSHOT_MAYHEM:Ac,SET_IT_AND_FORGET_IT:Tc,SURVIVOR:Cc,TEAM_MODE:Ec,TIERED_FORMAT:Sc,configureBadgeAwarder:wc,configureMeter:vc,configureSportMarkets:yc,default:Pc},Symbol.toStringTag,{value:"Module"}));function vi(t,e){if(!t||t.class!=="SURVIVOR")return null;const a=Pc?.forToken?.("SURVIVOR");if(!a||typeof a.scoreEntry!="function")return null;const s=Array.isArray(e)?e:[],n=a.scoreEntry({bets:s},t)?.breakdown||{},r=new Set;for(const o of s){const i=Array.isArray(o?.bet)?o.bet:[];for(const l of i)if(!(!l||typeof l!="object"))for(const c of Object.keys(l))c!=="short_title"&&r.add(c)}return{alive:n.alive===!0,livesRemaining:Number.isFinite(n.livesRemaining)?n.livesRemaining:0,livesPerUser:Number.isFinite(n.livesPerUser)?n.livesPerUser:1,eliminatedAt:n.eliminatedAt||null,correctPicks:Number.isFinite(n.correctPicks)?n.correctPicks:0,totalSettledPicks:Number.isFinite(n.totalSettledPicks)?n.totalSettledPicks:0,totalPicks:Number.isFinite(n.totalPicks)?n.totalPicks:0,qualified:n.qualified===!0,usedTeams:Array.from(r)}}function Uv(t){const e=new Set;for(const a of Array.isArray(t)?t:[])a?.coreMatches__guid&&e.add(a.coreMatches__guid);return Array.from(e)}class Gv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Me.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(e,a,s){a!==s&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get gameType(){return this.getAttribute("data-bma-tourn-game-type")||"DEFAULT_FORMAT"}get gameModeBadge(){if(typeof window.GameTypeLifeCycle>"u")return null;const e=window.GameTypeLifeCycle.forToken(this.gameType);return e?e.badge:null}get sportsAllowed(){try{const e=this.getAttribute("data-bma-tourn-sports_allowed");return e?JSON.parse(e):[]}catch{return[]}}get entities(){try{const e=this.getAttribute("data-bma-tourn-entities"),a=e?JSON.parse(e):{guids:[],max:0};return{current:Array.isArray(a)?a[1]?.length||0:a.guids?.length||0,max:Array.isArray(a)?parseInt(a[0]?.max||0):a.max||0}}catch{return{current:0,max:0}}}get entryFee(){const e=this.getAttribute("data-bma-tourn-entry_fee");return!e||e==="0"||e==="0.00"?"Free":`$${e}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Me.theme}isUserParticipating(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return!1;try{const s=this.getAttribute("data-bma-tourn-entities"),n=s?JSON.parse(s):{guids:[]};return(Array.isArray(n)?n[1]||[]:n.guids||[]).includes(a)}catch{return!1}}getUserTrophy(){const a=document.getElementById("app")?.dataset?.userGuid;if(!a)return null;try{const s=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const n of s){if(typeof n!="object"||!n)continue;let r=null;if(n.entity_guid===a&&n.badge?r=n.badge:n[a]&&(r=n[a]),r?.includes("gold"))return"gold";if(r?.includes("silver"))return"silver";if(r?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const e=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!e)return null;let a=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(e+"Z"));const s=Date.now(),n=a.getTime()-s;if(n<=0)return null;const r=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),i=Math.floor(n%36e5/6e4);return r>0?`${r}d ${o}h`:o>0?`${o}h ${i}m`:`${i}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const e=this.shadowRoot?.querySelector(".ring__countdown");if(e){const a=this.getCountdown();e.textContent=a||"",a||(e.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const e={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},a=this.sportsAllowed;if(!Array.isArray(a)||a.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const s=Math.min(a.length,3);let n="";for(let r=0;r<s;r++){const o=a[r].key||a[r],i=Ge.find(u=>u.key===o),l=i?i.group:"default",c=e[o]||o.replace(/^[a-z]+_/,"").toUpperCase();n+=`<span class="lc__sport-item"><bma-sport-icon sport="${o}" data-sport-group="${l}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return a.length>3&&(n+=`<span class="lc__sport-count" data-sport-overflow="true">+${a.length-3}</span>`),n}getSportsFullList(){const e={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(a=>{const s=a.key||a;return e[s]||s.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(e,a,s,n){const r=(e-a)/2,o=2*Math.PI*r,i=o-s/100*o,l=e/2;return`<svg class="ring__svg" width="${e}" height="${e}" viewBox="0 0 ${e} ${e}">
            <circle cx="${l}" cy="${l}" r="${r}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${a}" />
            <circle cx="${l}" cy="${l}" r="${r}"
                fill="none" stroke="${n}" stroke-width="${a}"
                stroke-linecap="round"
                stroke-dasharray="${o}"
                stroke-dashoffset="${i}"
                transform="rotate(-90 ${l} ${l})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(e){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:e,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(a=>{a.addEventListener("click",s=>{s.stopPropagation(),this.dispatchAction(a.dataset.action)})});const e=this.shadowRoot.querySelector("[data-sport-overflow]");e&&e.addEventListener("click",a=>{a.stopPropagation();const s=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(s,"info")})}render(){const e=this.isUserParticipating(),a=this.getUserTrophy(),s=this.status.toLowerCase(),n=e&&this.status!=="COMPLETED",r=!e&&this.status==="UPCOMING";this.userRank,(this.entities.current/(this.entities.max||1)*100).toFixed(1);const o=this.getCountdown();return this._renderSlim({isParticipating:e,trophy:a,statusClass:s,showPlay:n,showJoin:r,countdown:o})}_renderSlim({statusClass:e,showPlay:a,showJoin:s,trophy:n,countdown:r}){this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating");const o=this.status==="LOCKED"?"IN PROGRESS":this.status==="UPCOMING"?"OPEN":this.status==="COMPLETED"?"COMPLETED":this.status,i=(()=>{if(this.matches==0)return"TBD";let E="";try{JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(R=>R.override_last_match_close===!0)&&(E="+")}catch{}return`${this.matches}${E}`})();this.entryFee&&this.entryFee!=="Free"&&this.entryFee;const l=parseFloat(this.tournamentDollars||0).toLocaleString(),c=`${this.entities.current}/${this.entities.max}`,u=this.status==="COMPLETED"?"Ended":this.status==="LOCKED"?"Ends":this.status==="UPCOMING"?"Locks":"Starts",d=r||(this.status==="COMPLETED"?"—":"Soon"),p=(this.sportsAllowed||[]).slice(0,3).map(E=>{const I=E.key||"",R=Ge.find($=>$.key===I),C=R?.group||"default",H=R?.abbr||R?.title||I.split("_").pop().toUpperCase().slice(0,4);return`
                    <span class="lcs__sport">
                        <bma-sport-icon sport="${I}" data-sport-group="${C}"></bma-sport-icon>
                        <span class="lcs__sport-label">${H}</span>
                    </span>
                `}).join(""),f=(this.sportsAllowed?.length||0)>3?`<span class="lcs__sport-more">+${this.sportsAllowed.length-3}</span>`:"";let g="";n?g=`<div class="lcs__trophy-hero lcs__trophy-hero--${n}" aria-label="You won ${n}"></div>`:this.status==="COMPLETED"&&this.isUserParticipating()&&this.userRank!=="-"&&this.userRank!==""&&(g=`
                <div class="lcs__rank-hero" aria-label="Your rank ${this.userRank} of ${this.userTotal}">
                    <span class="lcs__rank-hero__place">#${this.userRank}</span>
                    <span class="lcs__rank-hero__total">/ ${this.userTotal}</span>
                </div>
            `);const v=this.gameModeBadge?.label||(this.gameType==="DEFAULT_FORMAT"?"Bet Max Tourney":""),h=v?`<span class="lcs__pill lcs__pill--neutral">${v}</span>`:"",_=`<span class="lcs__pill lcs__pill--${e}">${o}</span>`,w=(()=>{const E=`<button class="lcs__btn lcs__btn--info" data-action="INFO" aria-label="Info">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                <span>Info</span>
            </button>`;let I="";return a?I='<button class="lcs__btn lcs__btn--play" data-action="PLAY" aria-label="Play"><span>Play</span></button>':s?I='<button class="lcs__btn lcs__btn--join" data-action="JOIN" aria-label="Join"><span>Join</span></button>':I='<button class="lcs__btn lcs__btn--view" data-action="INFO" aria-label="View"><span>View</span></button>',`${E}${I}`})();this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
                ${ga()}

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
                            ${h?`<span class="lcs__mode-row">${h}</span>`:""}
                        </div>
                        <div class="lcs__side">
                            ${_}
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
        `}}customElements.define("bma-tournament-list-card",Gv);const At={},tr={},jv={pending:"pending",accepted:"accepted",declined:"declined",expired:"expired",pool_full:"pool was full",revoked:"revoked",joined:"joined via link"};function yi(t){switch(t){case"tournament_not_live":return"This tournament isn't accepting bets right now.";case"not_in_tournament":return"Join the tournament before placing bets.";case"match_already_final":return"This match has already ended.";case"bet_type_not_allowed":return"This bet type isn't allowed in this game mode.";case"bet_type_incompatible_with_sport":return"This bet type isn't available for this sport.";case"stake_out_of_bounds":return"Stake is outside the allowed range.";case"max_bets_total_exceeded":return"You've reached the total bet limit for this tournament.";case"max_bets_per_type_exceeded":return"You've reached the limit for this bet type.";case"duplicate_bet":return"You already have this bet type on this match.";case"missing_required_bet_type":return"Add the missing bet type to qualify.";case"min_bets_not_met":return"Place more bets to meet the minimum.";case"tournament_not_found":return"Tournament not found.";case"match_not_found":return"Match not found.";default:return t||"Bet rejected."}}const Da=t=>{const e=document.querySelector(`[data-info-invite-sent-list][data-tournament-guid="${t}"]`);if(!e)return;const a=At[t]||[];if(a.length===0){e.innerHTML="";return}const s=[...a].sort((n,r)=>new Date(r.invited_at||0)-new Date(n.invited_at||0));e.innerHTML=s.map(n=>{const r=n.invitee_display_name||n.invitee_user_name||"Invitee",o=(n.status||"PENDING").toLowerCase(),i=jv[o]||o;return`
      <div class="info-invite-sent-row">
        <div class="info-invite-sent-row__main">
          <span class="info-invite-sent-row__name">${r}</span>
          <span class="info-invite-sent-row__status info-invite-sent-row__status--${o}">${i}</span>
        </div>
        ${o==="pending"?`<button class="info-invite-sent-row__revoke" type="button" data-info-revoke="${n.guid}">Revoke</button>`:""}
      </div>
    `}).join("")},Gs=`
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
`.trim();typeof window<"u"&&(window.EMPTY_BETSLIP_HTML=Gs);const Ce={updateTDBalance(t,e){const a=document.querySelector(t);if(!a)return;e%1!==0?a.textContent=e.toFixed(2):neodigmUtils.countTo(t,e)},updateSummaryAndDashboard(t,e,a,s=null,n=0){const r=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),i=document.querySelector("#summary-payout");r&&(this.updateTDBalance("#summary-balance",t),t<0?r.classList.add("summary-cell__red"):r.classList.remove("summary-cell__red")),o&&(o.textContent=e.toFixed(2)),i&&(i.textContent=a.toFixed(2),a<0?i.classList.add("summary-cell__red"):i.classList.remove("summary-cell__red"));const l=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(l){let u="";if(s){const p=s.tournament_dollars||0,f=t-p;f>0?u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(u=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const d=t<0?"#FF5252":"#00E676";l.innerHTML=`<span style="color: ${d};">TD$ ${t.toLocaleString()}</span>${u}`}if(c){const u=n||a||0;let d="";u>0&&(d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${u.toLocaleString()})</span>`),c.innerHTML=`TD$ ${e.toLocaleString()}${d}`}if(s&&s.tournament_dollars){const u=s.tournament_dollars,d=document.querySelector(".dash-stat__gauge-fill--balance");if(d){const f=Math.max(t/u*100,0);d.style.width=`${f}%`}const p=document.querySelector(".dash-stat__gauge-fill--pending");if(p){const f=Math.min(e/u*100,100);p.style.width=`${f}%`}}this.updateBetSlipToggleSummary()},updateBetSlipToggleSummary(){const t=document.getElementById("bet-grid-toggle-count"),e=document.querySelector(".bet-grid__toggle-container");if(!t||!e)return;const a=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").length;t.textContent=a,e.classList.toggle("bet-grid__toggle-container--has-bets",a>0);const s=document.getElementById("bet-slip-tab-slip-badge");s&&(s.textContent=a,s.style.visibility=a>0?"visible":"hidden");const n=document.getElementById("bet-slip-tab-mybets-badge");if(n){const r=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing").length;n.textContent=r,n.style.visibility=r>0?"visible":"hidden"}},_globalLBCache:{},async prefetchGlobalLeaderboard(t="ALL"){const a=this._globalLBCache[t];if(a?.data&&Date.now()-a.ts<3e5)return a.data;if(a?.inflight)return null;this._globalLBCache[t]={data:a?.data||null,ts:a?.ts||0,inflight:!0};try{const s=await Te.fetchAllTimeLeaderboard(t,100,"td");return this._globalLBCache[t]={data:s,ts:Date.now(),inflight:!1},console.log(`[appEvents] All-time leaderboard prefetched [${t}]:`,s?.count||0,"rows, last_updated:",s?.last_updated),s}catch(s){return console.warn(`[appEvents] All-time leaderboard prefetch failed [${t}]:`,s),this._globalLBCache[t]&&(this._globalLBCache[t].inflight=!1),null}},_betStatsCache:{stats:null,ts:0,inflight:!1},async _ensureBetStatsCache(t){const a=Date.now();if(this._betStatsCache.stats&&a-this._betStatsCache.ts<3e5)return this._betStatsCache.stats;if(this._betStatsCache.inflight)return null;this._betStatsCache.inflight=!0;try{const n=(await Te.fetchBetSlips(t))?.rows||[];let r=0,o=0,i=0;return n.forEach(l=>{(l.bet||[]).forEach(u=>{Object.keys(u).forEach(d=>{if(d==="short_title")return;const p=u[d];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?r++:o++:i++)})})}),this._betStatsCache={stats:{wins:r,losses:o,pending:i},ts:a,inflight:!1},this._betStatsCache.stats}catch(s){return console.warn("[app_events] fetchBetSlips failed for stats panel",s),this._betStatsCache.inflight=!1,null}},buildStatsPanel(t,e,a=null){if(!e||!t||t.length===0)return"";const s=t.filter(g=>(g.entities?.guids||[]).includes(e)),n=s.filter(g=>(g.status||g.class)==="COMPLETED").length;let r=0,o=0;s.forEach(g=>{(Array.isArray(g.tags)?g.tags:[]).forEach(v=>{if(!v||typeof v!="object")return;const h=(v.entity_guid===e?v.badge:null)||(typeof v[e]=="string"?v[e]:null);typeof h=="string"&&h.startsWith("--badge__ribbon--")&&(o++,h==="--badge__ribbon--gold"&&r++)})});const i={};s.forEach(g=>{(Array.isArray(g.sports_allowed)?g.sports_allowed:[]).forEach(v=>{const _=Ge.find(w=>w.key===v.key)?.group||"Other";i[_]=(i[_]||0)+1})});let l="—",c="",u=0;Object.entries(i).forEach(([g,m])=>{m>u&&(u=m,l=g,c=g)});let d="—",p="Pending";if(a){const g=a.wins+a.losses;g>0?(d=`${Math.round(a.wins/g*100)}%`,p=`${a.wins}-${a.losses}`):(d="—",p="No settled bets")}const f=c?`<bma-sport-icon data-sport-group="${c.toLowerCase()}"></bma-sport-icon>`:"";return`
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
        `},categorizeTournaments(t,e,a,s,n={}){const r=[],{subStatus:o="all",sort:i="default",result:l="all",odds:c="all"}=n,u=$=>($.entities?.guids||[]).includes(s),d=$=>$.status==="UPCOMING"||$.class==="UPCOMING",p=$=>$.status==="LOCKED"||$.class==="LOCKED",f=$=>d($)||p($),g=$=>$.status==="COMPLETED"||$.class==="COMPLETED",m=$=>Array.isArray($.matches_expanded)&&$.matches_expanded.length>0,v=($,G)=>($.sports_allowed||[]).some(j=>j.key===G),h=$=>{if(!$)return"";const G=String($),j=G.toLowerCase(),F=Ge.find(q=>q.key===G||String(q.key).toLowerCase()===j||String(q.title||"").toLowerCase()===j);return F?.title?F.title:/^[a-zA-Z]{2,5}$/.test(G)?G.toUpperCase():G},_=$=>{const G=$.tags||[];for(const j of G)if(!(typeof j!="object"||!j)&&(j.entity_guid===s&&j.badge||j[s]))return!0;return!1},w=$=>{if(i==="default")return $;const G=[...$];switch(i){case"starting_soon":G.sort((j,F)=>new Date(j.window_start_time||0)-new Date(F.window_start_time||0));break;case"most_entrants":G.sort((j,F)=>(F.entities?.guids?.length||0)-(j.entities?.guids?.length||0));break;case"fewest_spots":G.sort((j,F)=>{const q=(j.entities?.max||0)-(j.entities?.guids?.length||0),P=(F.entities?.max||0)-(F.entities?.guids?.length||0);return q-P});break;case"recently_active":G.sort((j,F)=>new Date(F.status_time||0)-new Date(j.status_time||0));break;case"newest":G.sort((j,F)=>new Date(F.status_time||0)-new Date(j.status_time||0));break;case"td_high":G.sort((j,F)=>parseFloat(F.tournament_dollars||0)-parseFloat(j.tournament_dollars||0));break;case"td_low":G.sort((j,F)=>parseFloat(j.tournament_dollars||0)-parseFloat(F.tournament_dollars||0));break}return G},E=$=>l==="all"?$:l==="trophy"?$.filter(G=>_(G)):l==="no_trophy"?$.filter(G=>!_(G)):$;let I=t,R="",C=a||"all";if(a==="multi"?(I=t.filter($=>($.sports_allowed?.length||0)>1),R="Multi-Sport "):a!=="all"&&(I=t.filter($=>v($,a)),R=h(a)+" "),e==="lobby"){const $=n.lobbySubTab||"active";let G=I.filter(j=>j.is_private!==!0);if($==="completed"){const j=w(G.filter(F=>g(F))).slice(0,20);j.length>0?r.push({title:`Recently Completed ${R}Tournaments`,tournaments:j}):r.push({title:`Recently Completed ${R}Tournaments`,tournaments:[],emptyMessage:"No recently completed tournaments",emptySubtext:"Finished public tournaments will show up here."})}else{let j=G.filter(P=>f(P));o==="open"?j=j.filter(P=>d(P)):o==="locked"&&(j=j.filter(P=>p(P)));const F=w(j.filter(P=>d(P)&&!u(P)));r.push({title:`Open Entry ${R}Tournaments`,tournaments:F});const q=w(j.filter(P=>p(P)&&!u(P)));q.length>0&&r.push({title:`In Progress - Entry Closed ${R}Tournaments`,tournaments:q})}}else if(e==="my"){const $=n.mySubTab||"active",G=I.filter(j=>u(j));if($==="completed"){const j=E(G.filter(q=>g(q))),F=w(j);F.length>0?r.push({title:`Your Completed ${R}Tournaments`,tournaments:F}):r.push({title:`Completed ${R}Tournaments`,tournaments:[],emptyMessage:"No completed contests yet",emptySubtext:"Finished tournaments you joined will show here."})}else{let j=G.filter(q=>f(q));o==="active"?j=j.filter(q=>p(q)):o==="upcoming"&&(j=j.filter(q=>d(q))),c==="available"?j=j.filter(q=>m(q)):c==="none"&&(j=j.filter(q=>!m(q)));const F=w(j);F.length>0?r.push({title:`Your Active ${R}Tournaments`,tournaments:F}):r.push({title:`Active ${R}Tournaments`,tournaments:[],emptyMessage:"No active contests",emptySubtext:"Join a tournament from the Lobby and it'll show up here."})}}else if(e==="private")if((n.privateSubTab||"all")==="invites")r.push({title:"Invites",tournaments:[],emptyMessage:"No pending invites",emptySubtext:null});else{const G=I.filter(q=>q.is_private===!0),j=w(G.filter(q=>q.creator_guid&&q.creator_guid===s)),F=w(G.filter(q=>(!q.creator_guid||q.creator_guid!==s)&&u(q)));j.length>0&&r.push({title:"Running",tournaments:j}),F.length>0&&r.push({title:"Playing In",tournaments:F}),j.length===0&&F.length===0&&r.push({title:"Bet Max Pools",tournaments:[],emptyMessage:"No pools yet",emptySubtext:"Start your own Bet Max Pool. Your contest, your rules."})}else r.push({title:"Tournaments",tournaments:t});const H=C==="all"||C==="multi"?"":h(C);return r.forEach($=>{$.sportKey=C,$.sportLabel=H}),r},updateTournamentDashboard(t){if(!t)return;console.log("[Dashboard Update] Starting dashboard update for:",t.caption);const e=xe();e.appSession?.session_user?.guid;const a=t.tournament_dollars||1e4;if(t.class==="SURVIVOR"){Ce._renderSurvivorDashboard(t);const m=document.querySelector(".dash-stat__gauge-fill--participants");if(m&&t.entities){const v=t.entities?.guids?.length||0,h=t.entities?.max||100;m.style.width=`${v/h*100}%`}return}let s=0,n=0,r=0;if(e.coreBetSlip&&e.coreBetSlip.length>0){const v=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(h=>h.tournament_guid===t.guid);console.log("[Dashboard Update] Found",v.length,"existing bets for this tournament"),v.forEach(h=>{(h.bet||[]).forEach(w=>{Object.keys(w).filter(I=>I!=="short_title").forEach(I=>{const R=w[I];R&&(R.stake&&(s+=parseFloat(R.stake)),R.reconciled===!0&&R.payout>0&&(n+=parseFloat(R.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const m=parseFloat(o.textContent)||0;r=Math.max(0,m-s),console.log("[Dashboard Update] Summary total stakes:",m,"Pending:",r)}const i=s+r,l=a-s-r+n;console.log("[Dashboard Update] TD$:",a,"Committed:",s,"Pending:",r,"Payouts:",n,"=> Balance:",l);const c=document.getElementById("dashboard-td-balance");if(c){const m=l-a;let v="";m>0?v=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${m.toLocaleString()})</span>`:m<0&&(v=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${m.toLocaleString()})</span>`);const h=l<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${h};">TD$ ${l.toLocaleString()}</span>${v}`}const u=document.getElementById("dashboard-td-pending"),d=document.querySelector(".dash-stat__gauge-fill--pending");if(u){const m=r>0?r:i,v=n||0;let h="";if(v>0&&(h=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${v.toLocaleString()})</span>`),u.innerHTML=`TD$ ${m.toLocaleString()}${h}`,d){const _=Math.min(m/a*100,100);d.style.width=`${_}%`}}const p=document.querySelector(".dash-stat__gauge-fill--balance");if(p){const m=Math.max(l/a*100,0);p.style.width=`${m}%`}const f=document.querySelector(".dash-stat__gauge-fill--participants");if(f&&t){const m=t.entities?.guids?.length||0,v=t.entities?.max||100,h=m/v*100;f.style.width=`${h}%`}const g=document.getElementById("game-mode-progress");if(g){const m=t.class||"DEFAULT_FORMAT",v=e.coreBetSlip.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(h=>h.coreTournaments__guid===t.guid||h.tournament_guid===t.guid):[];g.setAttribute("data-game-mode-class",m),g.setAttribute("data-starting-td",String(t.tournament_dollars||0)),g.setAttribute("data-tags",JSON.stringify(t.tags||[])),g.setAttribute("data-bets",JSON.stringify(v))}},_renderSurvivorDashboard(t){const e=xe(),a=e.coreBetSlip?.length>0?e.coreBetSlip[e.coreBetSlip.length-1].data.filter(c=>c.coreTournaments__guid===t.guid||c.tournament_guid===t.guid):[],s=vi(t,a),n=document.querySelector(".play-cntr");if(n&&(n.dataset.bmaSurvivorEliminated=s&&!s.alive?"true":"false"),!s)return;const r=document.getElementById("dashboard-td-balance");if(r){const u=r.closest(".dash-stat")?.querySelector(".dash-stat__label");u&&(u.textContent="Status");const d=s.alive?"#00E676":"#FF5252",p=s.alive?"Alive":"Eliminated";r.innerHTML=`<span style="color: ${d};">${p}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}const o=document.querySelector(".dash-stat__gauge-fill--balance");o&&(o.style.width=s.alive?"100%":"0%");const i=document.getElementById("dashboard-td-pending");if(i){const u=i.closest(".dash-stat")?.querySelector(".dash-stat__label");u&&(u.textContent="Lives"),i.innerHTML=`${s.livesRemaining}<span style="font-size: 0.65em; color: var(--text-muted, #808080); margin-left: 4px;">/ ${s.livesPerUser}</span>`}const l=document.querySelector(".dash-stat__gauge-fill--pending");if(l){const c=s.livesPerUser>0?s.livesRemaining/s.livesPerUser*100:0;l.style.width=`${c}%`}},renderMatchCards(t){if(!t)return;const e=document.querySelector(".select-grid");if(!e)return;e.innerHTML="";const a=Array.isArray(t.sports_allowed)?t.sports_allowed:[],s=v=>{e.querySelectorAll("bma-bet-match-card").forEach(_=>{const w=_.getAttribute("data-sport-key")||"";_.style.display=v==="all"||w===v?"":"none"}),e.querySelectorAll(".play-match-group-header").forEach(_=>{let w=_.nextElementSibling,E=!1;for(;w&&!w.classList.contains("play-match-group-header");){if(w.tagName==="BMA-BET-MATCH-CARD"&&w.style.display!=="none"){E=!0;break}w=w.nextElementSibling}_.style.display=E?"":"none"})},r=new Set(["all",...a.map(v=>v.key)]).has(tr[t.guid])?tr[t.guid]:"all";if(a.length>1){const v=document.createElement("bma-play-sport-rail"),h=a.map(_=>{const w=Ge.find(E=>E.key===_.key)||{};return{key:_.key,title:w.title||_.title||_.key,group:w.group||""}});v.setAttribute("data-sports",JSON.stringify(h)),v.setAttribute("data-selected",r),v.addEventListener("sport-rail-change",_=>{const w=_.detail?.key||"all";tr[t.guid]=w,s(w)}),e.appendChild(v)}if(!t.matches_expanded||!Array.isArray(t.matches_expanded)||t.matches_expanded.length===0){e.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const o=new Date,i=v=>{let h=null;try{h=typeof v.scoreboard_data=="string"?JSON.parse(v.scoreboard_data):v.scoreboard_data}catch{}const _=(h?.time_remaining||"").toString().trim().toLowerCase();if(_)return _==="final"||_.startsWith("final")||_==="game over"||_==="ended"?"final":"live";const w=new Date(v.scheduled_at).getTime();if(isNaN(w))return"upcoming";const E=o.getTime();if(E<w)return"upcoming";const I=14400*1e3;return E-w>I?"final":"live"},l={upcoming:[],live:[],final:[]};t.matches_expanded.forEach(v=>l[i(v)].push(v)),l.upcoming.sort((v,h)=>new Date(v.scheduled_at)-new Date(h.scheduled_at)),l.live.sort((v,h)=>new Date(v.scheduled_at)-new Date(h.scheduled_at)),l.final.sort((v,h)=>new Date(h.scheduled_at)-new Date(v.scheduled_at));const c=[{key:"upcoming",label:"Upcoming",matches:l.upcoming},{key:"live",label:"Live",matches:l.live},{key:"final",label:"Final",matches:l.final}],d=c.filter(v=>v.matches.length>0).length>1,p=[];c.forEach(v=>{v.matches.length!==0&&(d&&p.push({kind:"header",section:v}),v.matches.forEach(h=>p.push({kind:"match",match:h})))});const f=()=>{const h=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let _=0;h&&xe().coreTourn.length>0&&(_=xe().coreTourn[xe().coreTourn.length-1].data.find($=>$.guid===h)?.tournament_dollars||0);const w=document.querySelector(".bet-grid__slip-BETSLIP-content"),E=w?w.querySelectorAll("bma-bet-entry"):[],I=Array.from(E).map(C=>({matchGuid:C.getAttribute("data-match-guid"),type:C.getAttribute("data-content-type"),teamPoints:C.getAttribute("data-content-team-points"),odds:C.getAttribute("data-content-odds"),stake:C.getAttribute("data-stake"),payout:C.getAttribute("data-payout"),matchTitle:C.getAttribute("data-match-title"),abbreviatedTitle:C.getAttribute("data-abbreviated-title"),scheduledAt:C.getAttribute("data-scheduled-at")})),R=xe();de.publish(R.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:_,bets:I,timestamp:Date.now()}))};let g=null,m=[];if(t.class==="SURVIVOR"){const v=xe(),h=v.coreBetSlip?.length>0?v.coreBetSlip[v.coreBetSlip.length-1].data.filter(_=>_.coreTournaments__guid===t.guid||_.tournament_guid===t.guid):[];if(g=vi(t,h),m=Uv(h),g&&!g.alive){const _=document.createElement("div");_.className="survivor-eliminated-banner",_.innerHTML=`
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"/>
                    </svg>
                    <div>
                        <strong>You're out.</strong>
                        <span>You can still watch the bracket play out, but no more picks.</span>
                    </div>
                `,e.appendChild(_)}}p.forEach(v=>{if(v.kind==="header"){const C=document.createElement("div");C.className=`play-match-group-header play-match-group-header--${v.section.key}`,C.innerHTML=`
                    <span class="play-match-group-header__label">${v.section.label}</span>
                    <span class="play-match-group-header__count">${v.section.matches.length}</span>
                `,e.appendChild(C);return}const h=v.match,w=new Date(h.scheduled_at)<o;let E=!1;try{E=(typeof h.scoreboard_data=="string"?JSON.parse(h.scoreboard_data):h.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const I=document.createElement("bma-bet-match-card");if(I.setAttribute("data-match-id",h.id),I.setAttribute("data-match-guid",h.odds_id||h.guid||h.id),I.setAttribute("data-match-title",h.title),I.setAttribute("data-match-short-title",h.short_title||h.title),I.setAttribute("data-scheduled-at",h.scheduled_at),I.setAttribute("data-home-team",h.home_team_id||"Home"),I.setAttribute("data-away-team",h.away_team_id||"Away"),I.setAttribute("data-is-disabled",w||E?"true":"false"),I.setAttribute("data-sync-theme","dark"),h.odds_markets){const C=typeof h.odds_markets=="string"?h.odds_markets:JSON.stringify(h.odds_markets);I.setAttribute("data-odds-markets",C)}if(h.scoreboard_data){const C=typeof h.scoreboard_data=="string"?h.scoreboard_data:JSON.stringify(h.scoreboard_data);I.setAttribute("data-scoreboard",C)}if(t&&t.tags){const C=typeof t.tags=="string"?t.tags:JSON.stringify(t.tags);I.setAttribute("data-tournament-tags",C)}const R=t?.class||"DEFAULT_FORMAT";if(I.setAttribute("data-bma-mode-token",R),R==="LONGSHOT_MAYHEM"&&window.GameTypeLifeCycle)try{const H=window.GameTypeLifeCycle.forToken(R)?.getEffectiveRules?.(t)||{},$=parseFloat(H.longshotThreshold);Number.isFinite($)&&I.setAttribute("data-bma-longshot-threshold",String($))}catch{}if(R==="SURVIVOR"&&g&&(g.usedTeams.length&&I.setAttribute("data-bma-survivor-used-teams",JSON.stringify(g.usedTeams)),m.length&&I.setAttribute("data-bma-survivor-picked-matches",JSON.stringify(m)),g.alive||I.setAttribute("data-bma-survivor-eliminated","true")),h.sport_id)I.setAttribute("data-sport-key",h.sport_id);else if(t.sports_allowed&&t.sports_allowed.length===1){const C=t.sports_allowed[0];C&&C.key&&I.setAttribute("data-sport-key",C.key)}I.addEventListener("bet-button-click",async C=>{const{betData:H,isActive:$,button:G}=C.detail;if($){const j=document.querySelector(".bet-grid__slip-BETSLIP-content");if(j){const F=j.querySelectorAll("bma-bet-entry");let q=!1;F.forEach(P=>{if(q)return;const A=P.getAttribute("data-content-type"),S=P.getAttribute("data-content-odds");A===H.type&&S===H.price&&(P.remove(),q=!0)}),j.children.length===0&&(j.innerHTML=Gs)}G.classList.remove("btn--active"),setTimeout(()=>{f()},100)}else{const F=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(typeof window.GameTypeLifeCycle<"u"&&F)try{const A=xe(),D=(A.coreTourn?.length?A.coreTourn[A.coreTourn.length-1]:null)?.data?.find(re=>re.guid===F),L=A.appSession?.session_user?.guid,Y=(D?.matches_expanded||[]).find(re=>re.guid===H.matchGuid)||{guid:H.matchGuid},Q=A.coreBetSlip?.length>0?A.coreBetSlip[A.coreBetSlip.length-1].data.filter(re=>re.coreTournaments__guid===F):[];if(D&&L){const Z=await window.GameTypeLifeCycle.forTournament(D).doBeforeBetPlace({tournament:D,match:Y,user:{guid:L},bet:{type:H.type,team:H.team},existingBets:Q});if(Z&&Z.ok===!1){typeof neodigmToast<"u"&&neodigmToast.q(yi(Z.reason),"warning",3e3);return}}}catch(A){console.warn("[app_events] doBeforeBetPlace tap-time guard failed (non-fatal):",A?.message)}document.querySelectorAll("bma-bet-match-card").forEach(A=>{A.shadowRoot.querySelectorAll(".btn--selected").forEach(S=>{S.classList.remove("btn--selected")})}),G.classList.add("btn--selected"),G.classList.add("btn--active");const q=xe(),P=H.type;P==="spread"?de.publish(q.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(H)):P==="money"?de.publish(q.hierTopics.COREBETSLIP__MONEY,JSON.stringify(H)):P==="total"&&de.publish(q.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(H)),de.publish(q.hierTopics.COREBETSLIP,JSON.stringify(H))}}),e.appendChild(I)}),r!=="all"&&s(r)},refreshPlayPopupUI(t,e){console.log("[app_events] Refreshing PLAY popup UI for tournament:",t);const a=document.querySelector("[data-publish-betslip]");a&&delete a.dataset.processing;const s=document.querySelector(".bet-grid__slip-BETSLIP-content");s&&(s.innerHTML=Gs);const n=xe();if(n.coreTourn.length>0){const i=n.coreTourn[n.coreTourn.length-1].data.find(l=>l.guid===t);i&&Ce.renderMatchCards(i)}e?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",e.rows.length,"bets"),setTimeout(()=>{de.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(e))},100));const r=document.querySelector(".bet-grid__slip");r&&r.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const t=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),e=Array.from(t).map(s=>{try{return JSON.parse(s.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(s=>{const n=s.getAttribute("data-match-guid"),r=s.getAttribute("data-home-team"),o=s.getAttribute("data-away-team");(s.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(l=>{if(l.disabled)return;const c=l.dataset.betType,p=l.dataset.team==="home"?r:o;e.some(g=>{if(g.coreMatches__guid!==n)return!1;const m=g.bet||[];if(m.length===0)return!1;const v=m[0],_=Object.keys(v).filter(I=>I!=="short_title")[0],E=v[_]?.type;return c==="total"?E===c:E===c&&_===p})&&(l.disabled=!0,l.classList.add("btn--disabled"))})})},initPlayScreen(t,e="INFO"){const a=xe(),s=document.querySelector(".play-cntr");if(!s){console.warn("[app_events] initPlayScreen: .play-cntr not found");return}t&&(s.dataset.currentTournGuid=t),e&&(s.dataset.currentTournAction=e);const n=s.dataset.currentTournGuid,r=s.dataset.currentTournAction||"INFO";if(n&&a.coreTourn.length>0){const f=a.coreTourn[a.coreTourn.length-1].data.find(m=>m.guid===n),g=f?.class||"DEFAULT_FORMAT";s.dataset.gameType=g,console.log("[app_events] Game mode:",g,"for tournament:",f?.caption)}console.log("[app_events] play_route mounted - GUID:",n,"action:",r),window.initBetGridToggle&&window.initBetGridToggle(),Ce.updatePlayButton(),Ce.populateInfoPage();let o=r==="PLAY"||r==="JOIN"?"PLAY":r;if(n&&a.coreTourn.length>0&&a.coreTourn[a.coreTourn.length-1].data.find(g=>g.guid===n)?.status==="COMPLETED"&&(o="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),o){const p=`ROUTE.HOME.SODAPOP_PLAY.${o}`;console.log("[app_events] Publishing initial topic:",p),de.publish(p,JSON.stringify({tournamentGuid:n,timestamp:Date.now()}))}if(!n||a.coreTourn.length===0)return;const l=a.coreTourn[a.coreTourn.length-1].data.find(p=>p.guid===n);if(!l)return;Ce.renderMatchCards(l),Ce.updateBetSlipLongshotChip(l);const c=document.querySelector("#pop-play__tourn-caption--id"),u=document.querySelector("#pop-play__tourn-tagline--id");c&&(c.textContent=l.caption),u&&(u.textContent=l.tagline),Ce.updateTournamentDashboard(l);const d=document.getElementById("dashboard-rank");if(d){const p=l.entities?.guids?.length||0;d.innerHTML=`<span class="tourn-dashboard__rank-text">-/${p}</span>`}Ce.updateBetSlipToggleSummary()},updateBetSlipLongshotChip(t){const e=document.getElementById("betslip-longshot-chip");if(!e)return;const a=t?.class||"DEFAULT_FORMAT";if(a!=="LONGSHOT_MAYHEM"||!window.GameTypeLifeCycle){e.setAttribute("hidden","");return}try{const n=window.GameTypeLifeCycle.forToken(a)?.getEffectiveRules?.(t)||{},r=parseFloat(n.longshotThreshold),o=parseFloat(n.longshotBonusRatio);e.setAttribute("data-threshold",Number.isFinite(r)?String(r):"150"),e.setAttribute("data-ratio",Number.isFinite(o)?String(o):"0.25"),e.removeAttribute("hidden")}catch{e.setAttribute("hidden","")}},updatePlayButton(){const t=xe(),e=document.querySelector(".play-cntr"),a=e?.dataset?.currentTournGuid,s=e?.dataset?.currentTournAction||"INFO",n=document.getElementById("btn-join__play--id");if(!n||!a||t.coreTourn.length===0)return;const o=t.coreTourn[t.coreTourn.length-1].data.find(u=>u.guid===a);if(!o)return;const i=t.appSession?.session_user?.guid,l=o.entities?.guids?.includes(i),c=o.status;n.style.visibility="hidden",!(c==="COMPLETED"||c==="LOCKED"&&!l)&&(n.style.visibility="",c==="UPCOMING"&&!l?s==="INFO"?(n.textContent="Join",n.dataset.requiresJoin="true"):s==="PLAY"&&(n.textContent="Play",n.dataset.requiresJoin="false"):(n.textContent="Play",n.dataset.requiresJoin="false"))},populateInfoPage(){const t=xe(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||t.coreTourn.length===0)return;const n=t.coreTourn[t.coreTourn.length-1].data.find(N=>N.guid===a);if(!n)return;const r=document.getElementById("pop-play__caro-info-summary1--id");if(!r)return;const o=N=>{if(!N)return"N/A";let K=new Date(N);return!N.includes("Z")&&!N.match(/[+-]\d{2}:\d{2}$/)&&(K=new Date(N+"Z")),isNaN(K.getTime())?"Invalid Date":K.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})};n.status&&`${n.status.toLowerCase()}`;const i={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},l=n.sports_allowed&&Array.isArray(n.sports_allowed)?n.sports_allowed.map(N=>{const K=N.key||N,W=Ge.find(z=>z.key===K),M=W?W.group:"default",k=i[K]||W?.title||K;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${K}" data-sport-group="${M}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${k}</span>
                </span>`}).join(""):"N/A",c=t.appSession?.session_user?.guid,u=n.entities?.guids?.includes(c),d=n.entities?.guids?.length||0,p=n.entities?.max||0;(d/(p||1)*100).toFixed(1);const f=(()=>{const N=new Date(n.window_start_time),K=new Date(n.window_end_time),W=new Date;if(isNaN(N.getTime())||isNaN(K.getTime()))return"";const M=K-N,k=W-N;let z=0,se="";if(W<N){z=0;const ce=N-W,me=Math.floor(ce/864e5),he=Math.floor(ce%864e5/36e5);se=me>0?`First match in ${me}d ${he}h`:`First match in ${he}h`}else if(W>K){const ce=new Date(K.getFullYear(),K.getMonth(),K.getDate()),me=new Date(W.getFullYear(),W.getMonth(),W.getDate());z=ce.getTime()===me.getTime()?95:100,se=z===100?"Tournament Complete":"Last Day"}else{z=Math.min(100,k/M*100);const ce=Math.ceil(M/864e5),me=Math.ceil(k/864e5);se=me>=ce?"Last Day":`Day ${me} of ${ce}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${se}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${z.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),g=n.tags||[],v=g.some(N=>N.override_last_match_close===!0)?"+":"",h=g.some(N=>N.match_inprogress_lock===!0),_=g.some(N=>N.override_last_match_close===!0);let w="Bet Max Tourney",E=null,I="",R="";if(typeof window.GameTypeLifeCycle<"u"){const N=window.GameTypeLifeCycle.forTournament(n),K=N.getEffectiveRules(n);E=N.badge,w=N.label;try{R=typeof N.rankingDescription=="function"?N.rankingDescription(n):""}catch{}try{const W=`doTournament_${String(n.status||"UPCOMING").toUpperCase()}`;typeof N[W]=="function"&&N[W]({tournament:n}).catch(M=>console.warn("[app_events] info-page lifecycle hook failed (non-fatal):",M?.message))}catch{}if(K.stakeRule==="SPEND_ALL"&&(I+='<div class="info-detail-row"><span>Stake Rule</span><span style="color: var(--status-locked-text, #F7C60D);">Spend entire starting TD$ amount</span></div>'),K.requiredBetTypes.length>0){const W=K.requiredBetTypes.map(M=>M==="SPREAD"?"Spread":M==="MONEY"?"Money Line":"Over/Under").join(", ");I+=`<div class="info-detail-row"><span>Required Bets</span><span style="color: var(--status-upcoming-text, #00E676);">${W}</span></div>`}K.oneBetPerMatchPerType&&(I+='<div class="info-detail-row"><span>Bet Limit</span><span>One per match per type</span></div>')}const C=(()=>{const K=(n.tags||[]).find(z=>z.badge_gold!==void 0||z.badge_silver!==void 0||z.badge_bronze!==void 0);if(!K)return null;const W=K.badge_gold||0,M=K.badge_silver||0,k=K.badge_bronze||0;return W===0&&M===0&&k===0?null:{gold:W,silver:M,bronze:k}})();n.status==="LOCKED"||n.status==="UPCOMING"||n.status,n.status==="LOCKED"||n.status==="UPCOMING"||n.status==="COMPLETED"||n.status;const H=n.matches_expanded?.length||0,$=H===0?"TBD":`${H}${v}`;`${Number(n.tournament_dollars||0).toLocaleString()}${d}${p}${$}`;const G=n.status==="LOCKED"?"In Progress":n.status==="UPCOMING"?"Open":n.status,j=n.status==="LOCKED"?"var(--status-locked-text, #F7C60D)":n.status==="UPCOMING"?"var(--status-upcoming-text, #00E676)":"var(--status-completed-text, #CD5659)";let F="";try{if(window.GameTypeLifeCycle){const N=window.GameTypeLifeCycle.forTournament(n);if(N&&N.beta&&N.betaMessage){const K=W=>String(W??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;");F=`<bma-mode-beta-banner
                        data-tournament-guid="${K(n.guid)}"
                        data-mode-token="${K(N.token)}"
                        data-mode-label="${K(N.label||N.token)}"
                        data-beta-message="${K(N.betaMessage)}"></bma-mode-beta-banner>`}}}catch{}const q=`
            ${F}
            <div class="info-detail-row"><span>Game Mode</span><span>${w}${E?` <span style="display: inline-block; padding: 2px 8px; border-radius: 9999px; background: ${E.color}; color: #fff; font-size: 0.75rem; font-weight: 700; vertical-align: middle;">${E.label}</span>`:""}</span></div>
            <div class="info-detail-row"><span>Entry</span><span>Free</span></div>
            <div class="info-detail-row"><span>Odds</span><span style="color: ${h?"var(--status-locked-text, #F7C60D)":"var(--status-upcoming-text, #00E676)"};">${h?"Locked at game start":"Live during games"}</span></div>
            <div class="info-detail-row"><span>Format</span><span style="color: ${_?"var(--status-upcoming-text, #00E676)":"var(--text-secondary, rgba(255,255,255,0.6))"};">${_?"On-going":"Fixed slate"}</span></div>
            ${I}
        `,P=`
            <div class="info-detail-row"><span>Sports</span><span>${l}</span></div>
            <div class="info-detail-row"><span>Starts</span><span>${o(n.window_start_time)}</span></div>
            <div class="info-detail-row"><span>Ends <span style="color: rgba(255,255,255,0.45); font-weight: 400; margin-left: 4px;">(estimated)</span></span><span>${o(n.window_end_time)}</span></div>
        `,A=C?`
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${C.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${C.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${C.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${C.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${C.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${C.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            <div style="padding: 16px 0 0;">
                <div style="font-size: 0.75rem; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; color: rgba(255,255,255,0.5); padding: 0 16px 8px;">Trophy Breakdown</div>
                ${C.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${C.gold}</span>
                </div>`:""}
                ${C.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${C.silver}</span>
                </div>`:""}
                ${C.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${C.bronze}</span>
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
                </div>`;let N=0,K=0,W=0;const M=new Date;n.matches_expanded.forEach(he=>{let le=null;try{le=typeof he.scoreboard_data=="string"?JSON.parse(he.scoreboard_data):he.scoreboard_data}catch{}le?.time_remaining?le.time_remaining.toLowerCase()==="final"?N++:K++:new Date(he.scheduled_at)<M?N++:W++});const k=K>0?"live":"upcoming",z=[];N>0&&z.push(`<span class="match-filter-btn${k==="final"?" match-filter--active":""}" data-filter="final">${N} Final</span>`),K>0&&z.push(`<span class="match-filter-btn match-filter-btn--live${k==="live"?" match-filter--active":""}" data-filter="live">${K} Live</span>`),W>0&&z.push(`<span class="match-filter-btn match-filter-btn--upcoming${k==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${W} Upcoming</span>`);const se=z.length>0?`<div class="match-filter-bar">${z.join("")}</div>`:"",ce=new Date,me=n.matches_expanded.map(he=>{const le=he.scoreboard_data?typeof he.scoreboard_data=="string"?he.scoreboard_data:JSON.stringify(he.scoreboard_data):"";let ge="upcoming",ve=null;try{ve=typeof he.scoreboard_data=="string"?JSON.parse(he.scoreboard_data):he.scoreboard_data}catch{}ve?.time_remaining?ge=ve.time_remaining.toLowerCase()==="final"?"final":"live":ge=new Date(he.scheduled_at)<ce?"final":"upcoming";const Se=ge!==k;return`<bma-match-status
                    data-match-guid="${he.guid||he.odds_id||he.id||""}"
                    data-match-title="${he.short_title||he.title||"Match"}"
                    data-match-scheduled-at="${he.scheduled_at||""}"
                    data-match-home-team="${he.home_team_id||"Home"}"
                    data-match-away-team="${he.away_team_id||"Away"}"
                    data-match-home-score="${he.home_team_score!==null&&he.home_team_score!==void 0?he.home_team_score:""}"
                    data-match-away-score="${he.away_team_score!==null&&he.away_team_score!==void 0?he.away_team_score:""}"
                    data-match-scoreboard="${le.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${he.sport_id||""}"
                    data-match-status="${ge}"
                    data-sync-theme="dark"
                    style="${Se?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${se}
                </div>
                <div class="matches-list" id="info-matches-scroll">
                    ${me}
                </div>
            `})(),D=n.status==="UPCOMING"?"Accepting new players. Place bets before each match starts.":n.status==="LOCKED"?"No new entrants. Joined players can still bet on matches that haven't started yet.":n.status==="COMPLETED"?"All matches settled. Final standings locked in.":"",L=`
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
                    <span class="info-summary-pack__stat-value">${$}</span>
                </div>
            </div>
        `,ae=`
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
                        <span class="info-legend__term">Odds Format · ${h?"Locked Odds":"Live Odds"}</span>
                        <span class="info-legend__def">${h?"Odds freeze at each match's scheduled start.":"Odds move with real-world markets throughout each game."}</span>
                    </div>
                    <div class="info-legend__item">
                        <span class="info-legend__term">Format · ${_?"On-going":"Fixed Slate"}</span>
                        <span class="info-legend__def">${_?"New matches are added as odds become available throughout the tournament.":"The slate is fixed at the start of the tournament. No new matches will be added."}</span>
                    </div>
                    <div class="info-legend__item">
                        <span class="info-legend__term">Game Mode · ${w}</span>
                        <span class="info-legend__def">${R||(w==="Bet Max Tourney"?"Open betting across the full tournament slate. Rank by your TD$ balance. Pending bets don't move it; only settled wins and losses do. Ties break on Max Win, then earliest bet placed.":"See tournament rules for scoring and stake requirements.")}</span>
                    </div>
                </div>
            </div>
        `,ne=t.appSession?.session_user?.guid||"",U=!!n.creator_guid&&n.creator_guid===ne;console.log("[info share] isCreator check:",{viewerGuid:ne,creator_guid:n.creator_guid,created_by_user:n.created_by_user,is_private:n.is_private,join_slug:n.join_slug,share_url:n.share_url,tournament_guid:n.guid,isCreator:U});const te=n.share_url||`${window.location.origin}${window.location.pathname}#/preview/${n.guid}${n.join_slug?"?s="+encodeURIComponent(n.join_slug):""}`,X=U?`
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
        `:"",oe=`
            <div class="info-pack info-pack--padded">
                <div class="info-progress-status">
                    <div class="info-progress-status__row">
                        <span class="info-progress-status__label">Status</span>
                        <span class="info-progress-status__value" style="color: ${j};">${G}</span>
                    </div>
                    ${D?`<div class="info-progress-status__hint">${D}</div>`:""}
                </div>
                ${f?`<div class="info-progress-divider"></div>${f}`:""}
            </div>
        `;r.innerHTML=`
            <div class="info-wrap">
                ${X}
                ${oe}
                ${L}
                ${ae}
                <div class="info-pack">
                    <div class="info-tabs">
                        <button class="info-tab info-tab--active" data-info-tab="summary"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg> Summary</button>
                        <button class="info-tab" data-info-tab="trophies"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg> Trophies</button>
                        <button class="info-tab" data-info-tab="matches"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg> Matches</button>
                    </div>
                    <div class="info-tab-panel" data-info-panel="summary">${P}${q}</div>
                    <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${A}</div>
                    <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${S}</div>
                </div>
            </div>
        `;const ie=r.querySelector("[data-info-legend-toggle]");if(ie&&ie.addEventListener("click",()=>{const K=ie.closest(".info-legend").classList.toggle("info-legend--open");ie.setAttribute("aria-expanded",String(K))}),U){const N=r.querySelector("[data-info-invite-sent-list]");N&&(Te.fetchInvitesForTournament(n.guid).then(K=>{K.ok&&Array.isArray(K.data?.invites)&&(At[n.guid]=K.data.invites,Da(n.guid))}).catch(K=>console.warn("[info invite list] fetch failed:",K)),N.addEventListener("click",async K=>{const W=K.target.closest("[data-info-revoke]");if(!W)return;const M=W.getAttribute("data-info-revoke");if(!M)return;const k=At[n.guid]||[];At[n.guid]=k.filter(se=>se.guid!==M),Da(n.guid),(await Te.revokeInvite(M)).ok?typeof neodigmToast<"u"&&neodigmToast.q("Invite revoked.","info"):(At[n.guid]=k,Da(n.guid),typeof neodigmToast<"u"&&neodigmToast.q("Couldn't revoke. Try again.","warning"))}))}const x=r.querySelector("[data-info-invite-form]");x&&x.addEventListener("submit",async N=>{N.preventDefault();const K=x.querySelector("[data-info-invite-input]"),W=x.querySelector("[data-info-invite-send]"),M=x.parentElement.querySelector("[data-info-invite-status]"),k=(K?.value||"").trim();if(!k||!W)return;let z=null;k.includes("@")?z={email:k}:/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(k)?z={user_guid:k}:z={userName:k},W.disabled=!0;const se=W.textContent;W.textContent="Sending...",M&&(M.hidden=!0,M.textContent="");try{const ce=await Te.sendInvite(n.guid,z);if(ce.ok&&ce.data?.invite){K.value="";const me=ce.data.invite.invitee_display_name||ce.data.invite.invitee_user_name||"them",he=At[n.guid]||[];At[n.guid]=[ce.data.invite,...he],Da(n.guid),typeof neodigmToast<"u"&&neodigmToast.q(`Invite sent to ${me}.`,"success")}else{const me=ce.data?.error||`http_${ce.status}`,he=(()=>{if(me==="invitee_not_found")return"Couldn't find that player. Share the link instead.";if(me==="already_invited")return"You've already invited them.";if(me==="already_joined")return"They're already in this pool.";if(me==="pool_full")return"Pool is full.";if(me==="cooldown_active"){const le=ce.data?.retry_after_hours;return le?`They declined recently. Try again in ${le}h.`:"They declined recently. Try again tomorrow."}return me==="rate_limited"?"Too many invites. Try again in a few minutes.":me==="not_creator"?"Only the pool creator can send invites.":me==="not_private"?"This pool doesn't accept directed invites.":me==="invalid_request_shape"?"Enter a User Name or Email.":"Couldn't send invite. Try again."})();M&&(M.textContent=he,M.hidden=!1,M.classList.add("info-invite-form__status--error"))}}catch(ce){console.warn("[info invite] send failed:",ce),M&&(M.textContent="Network error. Try again.",M.hidden=!1,M.classList.add("info-invite-form__status--error"))}finally{W.disabled=!1,W.textContent=se}});const O=r.querySelector("[data-info-share-btn]");O&&O.addEventListener("click",async()=>{const N=O.dataset.shareUrl,K=O.dataset.shareCaption||"tournament";if(!N)return;const W=`Join ${K}`,M=`You're invited to join ${K} on Bet Max Tourney.`;if(typeof navigator<"u"&&typeof navigator.share=="function")try{await navigator.share({title:W,text:M,url:N});return}catch(k){if(k?.name==="AbortError")return}try{await navigator.clipboard.writeText(N),typeof neodigmToast<"u"&&neodigmToast.q("Invite link copied","success")}catch(k){console.warn("[info share] clipboard write failed:",k),typeof neodigmToast<"u"&&neodigmToast.q("Copy failed. Link: "+N,"danger")}}),r.querySelectorAll(".info-tab").forEach(N=>{N.addEventListener("click",()=>{r.querySelectorAll(".info-tab").forEach(W=>W.classList.remove("info-tab--active")),N.classList.add("info-tab--active");const K=N.dataset.infoTab;r.querySelectorAll(".info-tab-panel").forEach(W=>{W.style.display=W.dataset.infoPanel===K?"":"none"})})});const y=r.querySelector('[data-info-panel="matches"]');y&&y.addEventListener("click",N=>{const K=N.target.closest(".match-filter-btn");K&&(y.querySelectorAll(".match-filter-btn").forEach(W=>W.classList.remove("match-filter--active")),K.classList.add("match-filter--active"),y.querySelectorAll("bma-match-status").forEach(W=>{W.style.display=W.dataset.matchStatus===K.dataset.filter?"":"none"}))});const T=document.getElementById("pop-play__caro-info-summary2--id");T&&(T.innerHTML="");const B=document.getElementById("pop-play__caro-info-list--id");B&&(B.innerHTML="")},async populateLeaderboard(){const t=xe(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,s=t.appSession?.session_user?.guid;if(!a){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const n=document.getElementById("pop-play__caro-leaderboard--id");if(!n)return;let r=document.getElementById("leaderboard-loading-banner");r||(r=document.createElement("neodigm-juicebar"),r.id="leaderboard-loading-banner",r.setAttribute("role","progressbar"),r.setAttribute("data-n55-theme","warning"),r.setAttribute("data-n55-size","small"),r.innerHTML="<div></div>",r.style.cssText=`
                width: 100%;
                margin: 6px;
            `,n.parentNode.insertBefore(r,n)),r.style.visibility="visible";try{const o=await Te.fetchLeaderboard(a),i=o?.data||o?.rows;if(i&&i.length>0){const c=t.coreTourn[t.coreTourn.length-1]?.data.find(V=>V.guid===a),u=c?.class||"DEFAULT_FORMAT",d=window.GameTypeLifeCycle?.forToken?.(u)||window.GameTypeLifeCycle?.forTournament?.(c),p=i.map(V=>{const ae=typeof V.combined_betslips=="string"?(()=>{try{return JSON.parse(V.combined_betslips)}catch{return[]}})():V.combined_betslips||[];return{...V,bets:ae,timestamp:V.created_at||V.updated_at||0}}),f=parseFloat(c?.tournament_dollars||0),m=(d&&typeof d.getEffectiveRules=="function"?d.getEffectiveRules(c):{}).stakeRule==="SPEND_ALL",v=V=>{if(!m||f<=0)return!0;let ae=0;return(V.bets||[]).forEach(ee=>{(ee.bet||[]).forEach(ne=>{Object.keys(ne).forEach(U=>{U!=="short_title"&&(ae+=parseFloat(ne[U]?.stake||0))})})}),ae>=f-.01},_=(()=>{if(u!=="DEFAULT_FORMAT")return"";const ae=(c?.tags||[]).find(T=>T.badge_gold!==void 0||T.badge_silver!==void 0||T.badge_bronze!==void 0);if(!ae)return"";const ee=ae.badge_gold||0,ne=ae.badge_silver||0,U=ae.badge_bronze||0;if(ee===0&&ne===0&&U===0)return"";const X=p.some(T=>(T.bets||[]).some(B=>(B.bet||[]).some(N=>Object.keys(N).some(K=>K!=="short_title"&&N[K]?.reconciled===!0))))?p.filter(v):[],oe=T=>{if(!T)return'<span class="podium-slot__empty">Open</span>';const B=T.user_guid===s;return`<span class="podium-slot__name${B?" podium-slot__name--you":""}">${T.username||"Unknown"}${B?' <span class="podium-slot__you">YOU</span>':""}</span>`},ie=Array.from({length:ee},(T,B)=>oe(X[B])).join(""),x=Array.from({length:ne},(T,B)=>oe(X[ee+B])).join(""),O=Array.from({length:U},(T,B)=>oe(X[ee+ne+B])).join(""),y=c?.status==="COMPLETED"?"":"Waiting for bets to settle";return`
                        <div class="leaderboard-podium">
                            <div class="leaderboard-podium__title">Trophy Preview</div>
                            <div class="leaderboard-podium__pack">
                                ${ne>0?`<div class="podium-slot podium-slot--silver">
                                    <div class="podium-slot__trophy podium-slot__trophy--silver"></div>
                                    <span class="podium-slot__count">&times;${ne}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--silver">
                                        <div class="podium-slot__names">${x}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${ee>0?`<div class="podium-slot podium-slot--gold">
                                    <div class="podium-slot__trophy podium-slot__trophy--gold"></div>
                                    <span class="podium-slot__count">&times;${ee}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--gold">
                                        <div class="podium-slot__names">${ie}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                                ${U>0?`<div class="podium-slot podium-slot--bronze">
                                    <div class="podium-slot__trophy podium-slot__trophy--bronze"></div>
                                    <span class="podium-slot__count">&times;${U}</span>
                                    <div class="podium-slot__pedestal podium-slot__pedestal--bronze">
                                        <div class="podium-slot__names">${O}</div>
                                    </div>
                                </div>`:'<div class="podium-slot podium-slot--spacer"></div>'}
                            </div>
                            ${y?`<div class="leaderboard-podium__label">${y}</div>`:""}
                        </div>
                    `})();let w="";try{w=d&&typeof d.rankingDescription=="function"?d.rankingDescription(c):""}catch{}const E=w.match(/^([^.]+\.)\s*(.*)$/s),I=E?E[1]:w,R=E?E[2]:"",C=w?`
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.5 21H2V9h5.5v12zm7.25-18h-5.5v18h5.5V3zM22 11h-5.5v10H22V11z"/></svg>
                        <span><strong>${I}</strong>${R?" "+R:""}</span>
                    </div>
                `:"";let H=!1;try{H=(d?.getEffectiveRules?.(c)||{}).stakeRule==="SPEND_ALL"}catch{}const F=`
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
                    ${C}
                    <div class="leaderboard-privacy-banner__tip">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>
                        <span><strong>Pending bets are hidden</strong> from other players until settled. Your own pending bets are always visible to you.</span>
                    </div>
                    ${H?`
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
                `,q=(V,ae,ee=!1)=>{let ne="";if(c?.tags&&Array.isArray(c.tags)){const x=c.tags.find(O=>!!(typeof O=="object"&&O!==null&&(O.entity_guid===V.user_guid&&O.badge&&O.badge.startsWith("--badge__ribbon--")||O[V.user_guid]&&O[V.user_guid].startsWith("--badge__ribbon--"))));if(x){const O=x.badge||x[V.user_guid];O==="--badge__ribbon--gold"?ne="badge-trophy--gold":O==="--badge__ribbon--silver"?ne="badge-trophy--silver":O==="--badge__ribbon--bronze"&&(ne="badge-trophy--bronze")}}const U=V.combined_betslips?typeof V.combined_betslips=="string"?V.combined_betslips:JSON.stringify(V.combined_betslips):"[]";let te="[]";if(V.combined_betslips&&c?.matches_expanded){const x=typeof V.combined_betslips=="string"?JSON.parse(V.combined_betslips):V.combined_betslips,O=[...new Set(x.map(T=>T.coreMatches__guid||T.match_guid||T.odds_id).filter(Boolean))],y=c.matches_expanded.filter(T=>{const B=T.guid||T.id||T.odds_id;return O.includes(B)});te=JSON.stringify(y)}const X=parseFloat(V.calculated_tournament_dollars||0),oe=parseInt(V.total_betslips||0),ie=X===0&&oe===0?c?.tournament_dollars||0:V.calculated_tournament_dollars||0;return`
                        <bma-leaderboard-card
                            data-rank="${ae}"
                            data-username="${V.username||"Unknown"}"
                            data-user-guid="${V.user_guid||""}"
                            data-tournament-dollars="${ie}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${V.total_betslips||0}"
                            data-total-payout="${V.total_payout||0}"
                            data-combined-betslips="${U.replace(/"/g,"&quot;")}"
                            data-user-matches="${te.replace(/"/g,"&quot;")}"
                            data-badge-class="${ne}"
                            data-is-current-user="${V.user_guid===s}"
                            data-unqualified="${ee}"
                            data-sync-theme="dark"
                            data-bma-mode-token="${u}"
                        ></bma-leaderboard-card>
                    `},P=p.filter(v),A=p.filter(V=>!v(V)),D=(u==="DEFAULT_FORMAT"&&P.length>0?`
                    <div class="leaderboard-divider leaderboard-divider--qualified">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>
                            <span class="leaderboard-divider__title">Qualified</span>
                            <span class="leaderboard-divider__subtitle">Ranked for tournament prizes</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                `:"")+P.map((V,ae)=>q(V,ae+1,!1)).join(""),L=A.length>0?`
                    <div class="leaderboard-divider">
                        <div class="leaderboard-divider__line"></div>
                        <div class="leaderboard-divider__label">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/></svg>
                            <span class="leaderboard-divider__title">Not Qualified</span>
                            <span class="leaderboard-divider__subtitle">Spend remaining TD$ to enter rankings</span>
                        </div>
                        <div class="leaderboard-divider__line"></div>
                    </div>
                    ${A.map(V=>q(V,"—",!0)).join("")}
                `:"";n.innerHTML=_+F+D+L,requestAnimationFrame(()=>{n.querySelectorAll("bma-leaderboard-card").forEach((V,ae)=>{V.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",V.style.animationDelay=`${Math.min(ae*60,400)}ms`})}),n.querySelectorAll(".leaderboard-tab").forEach(V=>{V.addEventListener("click",()=>{const ae=V.dataset.lbTab;n.querySelectorAll(".leaderboard-tab").forEach(ee=>ee.classList.remove("leaderboard-tab--active")),V.classList.add("leaderboard-tab--active"),n.querySelectorAll("[data-lb-panel]").forEach(ee=>{ee.style.display=ee.dataset.lbPanel===ae?"":"none"})})});const Y=P.findIndex(V=>V.user_guid===s),Q=c?.entities?.guids?.length||p.length,re=Y>=0?Y+1:"—",Z=document.getElementById("dashboard-rank");if(Z){const V=re==="—"?"—":`${re}/${Q}`;Z.innerHTML=`<span class="tourn-dashboard__rank-text">${V}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`}}else n.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),n.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}},hydratePlayPopup(){const t=xe(),a=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!a||t.coreTourn.length===0)return;const n=t.coreTourn[t.coreTourn.length-1].data.find(r=>r.guid===a);n&&(console.log("[appEvents] Hydrating play popup for tournament:",a),this.populateInfoPage(),this.renderMatchCards(n),this.updateTournamentDashboard(n),this.updatePlayButton())},openFilterPopup(t,e){if(typeof neodigmSodaPop>"u")return;const{tab:a,subStatus:s,sort:n,result:r}=t,o=(c,u,d,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${u}">${d}</button>`;let i="";a==="lobby"?i+=`
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
                </div>`:a==="completed"&&(i+=`
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
                </div>`);const l={lobby:{subStatus:"all",sort:"default",result:"all"},my:{subStatus:"all",sort:"default",result:"all"},completed:{subStatus:"all",sort:"default",result:"all"}};neodigmSodaPop.setOnAfterOpen(()=>{const c=document.getElementById("filter-popup__content--id");if(!c)return;c.innerHTML=`
                ${i}
                <div class="filter-actions">
                    <button class="filter-btn filter-btn--reset" id="filter-reset-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
                        Reset
                    </button>
                    <button class="filter-btn filter-btn--apply" id="filter-apply-btn">Apply</button>
                </div>
            `;let u={subStatus:s,sort:n,result:r};c.addEventListener("click",d=>{const p=d.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,g=p.dataset.filterVal;u[f]=g,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(m=>m.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const d=l[a]||l.lobby;u={...d},Object.keys(d).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${d[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),e&&e(u)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(t){if(window._bmaAppListenersBound){console.warn("[app_events] bindAppListeners already bound; skipping duplicate call");return}window._bmaAppListenersBound=!0,de.subscribe("APP",(P,A)=>{console.warn("~~ sub all APP | "+P+"|"+A)}),de.subscribe("WC",(P,A)=>{console.warn("~~ sub all WC  | "+P+"|"+A)}),de.subscribe("ROUTE",(P,A)=>{console.warn("~~ sub all ROUTE  | "+P+"|"+A)});let e="lobby",a="all",s="all",n="all",r="active",o="active",i="default",l="all",c="all",u=localStorage.getItem("bma_view_mode")||"cards";const d="bma_home_nav_state",p=()=>{try{sessionStorage.setItem(d,JSON.stringify({filter:e,lobbySubTab:o,mySubTab:r,privateSubTab:n,sportFilter:a}))}catch{}},f=()=>{try{const P=sessionStorage.getItem(d);if(!P)return null;const A=JSON.parse(P);return["lobby","my","private"].includes(A.filter)?A:null}catch{return null}},g=()=>{a="all";const P=document.querySelector("bma-app-head-sports");P&&P.setAttribute("data-selected-chip","all"),p()},m=()=>{const P=document.getElementById("filter-bar__count--id");if(!P)return;let A=0;s!=="all"&&A++,i!=="default"&&A++,l!=="all"&&A++,P.textContent=A,P.style.display=A>0?"":"none"},v=()=>{document.querySelectorAll(".home-tab").forEach(D=>D.classList.remove("home-tab--active"));let A=null;if(e==="lobby"?A=o==="completed"?'[data-home-tab="lobby-completed"]':'[data-home-tab="lobby-active"]':e==="private"?A=n==="invites"?'[data-home-tab="private-invites"]':'[data-home-tab="private-all"]':e==="my"&&(A=r==="completed"?'[data-home-tab="my-completed"]':'[data-home-tab="my-active"]'),!A)return;const S=document.querySelector(A);S&&S.classList.add("home-tab--active")},h=()=>{s="all",i="default",l="all",c="all"};document.addEventListener("click",P=>{const A=P.target.closest(".category-filter-toggle");if(A){const L=A.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(L){const Y=L.style.display!=="none";L.style.display=Y?"none":"",A.classList.toggle("category-filter-toggle--open",!Y),window._bmaFilterRowOpen=!Y}return}const S=P.target.closest("[data-view-mode]");if(S){const D=S.dataset.viewMode;if(D===u)return;u=D,localStorage.setItem("bma_view_mode",D),document.querySelectorAll("[data-view-mode]").forEach(L=>L.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${D}"]`).forEach(L=>L.classList.add("view-toggle__btn--active")),de.publish(t.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"}))}}),document.addEventListener("click",P=>{const A=P.target.closest("[data-home-tab]");if(!A)return;const S=A.dataset.homeTab;let D=!1;if(S==="lobby-active"||S==="lobby-completed"){const L=S==="lobby-completed"?"completed":"active";if(e==="lobby"&&L===o)return;e="lobby",o=L,D=!0}else if(S==="my-active"||S==="my-completed"){const L=S==="my-completed"?"completed":"active";if(e==="my"&&L===r)return;e="my",r=L,D=!0}else if(S==="private-all"||S==="private-invites"){const L=S==="private-invites"?"invites":"all";if(e==="private"&&L===n)return;e="private",n=L,document.body.dataset.privateSub=L,D=!0}D&&(g(),h(),m(),document.querySelectorAll(".home-tab").forEach(L=>L.classList.remove("home-tab--active")),A.classList.add("home-tab--active"),de.publish(t.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"})),p())}),document.addEventListener("change",P=>{const A=P.target.closest(".category-dropdown");if(!A)return;const S=A.dataset.filterType,D=A.value;S==="subStatus"?s=D:S==="sort"?i=D:S==="result"?l=D:S==="odds"&&(c=D),m(),de.publish(t.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),de.subscribe(t.hierTopics.COREBETSLIP,async(P,A)=>{JSON.parse(A);let S=16;switch(P){case t.hierTopics.COREBETSLIP__BET:S=5,bs.shootConfetti(),console.log("~~~  |  "+P+" | ",A);const D=document.querySelector("[data-bets-valid]");D&&(D.dataset.betsValid="false");const L=document.querySelector("neodigm-sodapop");L&&L.setAttribute("data-wait","true");const Y=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(Y.length===0){console.warn("[app_events] No bets to submit"),L&&L.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const re=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,Z=t.appSession?.session_user?.guid;if(!re||!Z){console.error("[app_events] Missing tournament or user GUID"),L&&L.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const V=Array.from(Y).map(ie=>{const x=ie.getAttribute("data-content-team-points"),O=ie.getAttribute("data-content-odds"),y=ie.getAttribute("data-stake")||"0",T=ie.getAttribute("data-content-type"),B=ie.getAttribute("data-payout")||"0",N=ie.getAttribute("data-match-guid")||"",K={};return K[x]={type:T,stake:parseFloat(y),odds:parseFloat(O),payout:parseFloat(B),reconciled:!1},{acctEntity__guid:Z,coreTournaments__guid:re,coreMatches__guid:N,bet:[K],status:"PENDING"}});if(console.log("[app_events] Submitting bet slips:",V),typeof window.GameTypeLifeCycle<"u")try{const x=[...t.coreBetSlip.length>0?t.coreBetSlip[t.coreBetSlip.length-1].data.filter(T=>T.coreTournaments__guid===re):[],...V],y=(t.coreTourn.length>0?t.coreTourn[t.coreTourn.length-1]:null)?.data.find(T=>T.guid===re);if(y){const B=await window.GameTypeLifeCycle.forTournament(y).doBeforeSubmit({tournament:y,user:{guid:Z},bets:x});if(B&&B.ok===!1){console.log("[app_events] doBeforeSubmit rejected:",B),typeof neodigmToast<"u"&&(Array.isArray(B.failures)&&B.failures.length?B.failures:[{reason:B.reason}]).forEach(W=>neodigmToast.q(yi(W.reason),"warning",4e3)),L&&L.setAttribute("data-wait","false");const N=document.querySelector("[data-publish-betslip]");N&&delete N.dataset.processing;break}}}catch(ie){console.warn("[app_events] doBeforeSubmit guard failed (non-fatal):",ie?.message)}Te.postBetSlips(V).then(ie=>{const x=ie.filter(y=>!y.ok);if(x.length>0){console.error("[app_events] Bet submission rejected by server:",x.map(K=>({status:K.status,data:K.data,networkError:K.networkError})));const y=x[0],T=y.data?.error||y.data?.message||y.networkError,B=T?`${T}`:`Server returned ${y.status||"no response"}.`;typeof neodigmToast<"u"&&neodigmToast.q(`Bets not placed|${B}`,"danger",6e3);const N=document.querySelector("[data-publish-betslip]");N&&delete N.dataset.processing,D&&(D.dataset.betsValid="true"),L&&L.setAttribute("data-wait","false");return}console.log("[app_events] Bet slips posted successfully:",ie);const O=V.reduce((y,T)=>{const B=T.bet[0],N=Object.keys(B)[0];return y+(B[N]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${O.toFixed(2)}`,"success"),Te.fetchBetSlips(Z,re).then(y=>{if(y?.rows){const T={timestamp:Date.now(),source:"API",data:y.rows};t.pushcoreBetSlip(T),console.log("[app_events] Refreshed bet slips in store:",y.rows.length,"items")}Ce.refreshPlayPopupUI(re,y),L&&L.setAttribute("data-wait","false")}).catch(y=>{console.error("[app_events] Error fetching fresh bet slips:",y);const T=document.querySelector("[data-publish-betslip]");T&&delete T.dataset.processing,D&&(D.dataset.betsValid="true"),L&&L.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(ie=>{console.error("[app_events] Error posting bet slips:",ie);const x=document.querySelector("[data-publish-betslip]");x&&delete x.dataset.processing,D&&(D.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),L&&L.setAttribute("data-wait","false")});break;case t.hierTopics.COREBETSLIP__SPREAD:break;case t.hierTopics.COREBETSLIP__MONEY:break;case t.hierTopics.COREBETSLIP__TOTAL:break;case t.hierTopics.COREBETSLIP__CLOSE:S=24;break;case t.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&A){A=JSON.parse(A);const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(t.coreBetSlip[0]?.data&&x){const O=t.coreBetSlip[0].data.filter(z=>z.coreTournaments__guid===x),y=[],T=[],B=[];O.forEach(z=>{const se=z.bet||[];if(se.length===0)return;const ce=se[0];Object.keys(ce).filter(he=>he!=="short_title").forEach(he=>{const le=ce[he],ge=le?.reconciled!==!1,ve=parseFloat(le?.payout||0);ge?ve===0?T.push(z):B.push(z):y.push(z)})});const N=_t.search(y,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,K=_t.search(T,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,W=N+K,M=_t.search(B,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,k=A.tournament_dollars-W+M;Ce.updateTDBalance("#summary-balance",k)}else Ce.updateTDBalance("#summary-balance",A.tournament_dollars)}break;case t.hierTopics.COREBETSLIP__INTERSYNC:let ee=0,ne=0,U=0;if(t.coreBetSlip.length>0){const x=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(x){const y=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(M=>M.coreTournaments__guid===x),T=[],B=[],N=[];y.forEach(M=>{const k=M.bet||[];if(k.length===0)return;const z=k[0];Object.keys(z).filter(ce=>ce!=="short_title").forEach(ce=>{const me=z[ce],he=me?.reconciled!==!1,le=parseFloat(me?.payout||0);he?le===0?B.push(M):N.push(M):T.push(M)})}),ee=_t.search(T,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,ne=_t.search(N,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const K=_t.search(B,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,W=_t.search(N,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;U=K+W}}let te=!0,X=0;const oe=document.querySelector("[data-bets-valid]");if(oe&&A){A=JSON.parse(A),A.pending_stake_sum=0,A.pending_payout_sum=0,A.bets.length||(te=!1),A.bets.forEach(N=>{N.stake=Number(N.stake),N.stake>0?A.pending_stake_sum+=N.stake:te=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(N=>{const K=parseFloat(N.getAttribute("data-payout")||"0");A.pending_payout_sum+=K});const x=ee+A.pending_stake_sum,O=ne+A.pending_payout_sum;X=parseFloat((A.tournament_dollars-x-U+ne).toFixed(2));const T=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let B=null;T&&t.coreTourn.length>0&&(B=t.coreTourn[t.coreTourn.length-1]?.data?.find(K=>K.guid===T)),Ce.updateSummaryAndDashboard(X,x,O,B,A.pending_payout_sum||0),(A.tournament_dollars<0||X<0)&&(te=!1),oe.dataset.betsValid=te}break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S,"QUITE").vibrate()});const _=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&t.coreTourn.length>0&&(S=t.coreTourn[t.coreTourn.length-1].data.find(Y=>Y.guid===A)?.tournament_dollars||0),de.publish(t.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:S,timestamp:Date.now()}))},w=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&t.coreTourn.length>0&&(S=t.coreTourn[t.coreTourn.length-1].data.find(ee=>ee.guid===A)?.tournament_dollars||0);let D=0,L=0,Y=0,Q=0;if(t.coreBetSlip.length>0&&A){const ae=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(ie=>ie.coreTournaments__guid===A);console.log("[app_events] Filtered bets for tournament:",A,"found:",ae.length),console.log("[app_events] Using latest bet slip data index:",t.coreBetSlip.length-1),console.log("[app_events] First bet sample:",ae[0]);const ee=[],ne=[],U=[];ae.forEach(ie=>{const x=ie.bet||[];if(x.length===0)return;const O=x[0];Object.keys(O).filter(T=>T!=="short_title").forEach(T=>{const B=O[T],N=B?.reconciled!==!1,K=parseFloat(B?.payout||0);N?K===0?ne.push(ie):U.push(ie):ee.push(ie)})}),console.log("[app_events] Bet categories:",{unreconciled:ee.length,reconciledZero:ne.length,reconciledNonZero:U.length});const te=_t.search(ee,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,X=_t.search(ne,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,oe=_t.search(U,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;Y=X+oe,L=_t.search(U,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,Q=_t.search(ee,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,D=te,console.log("[app_events] Balance calculation:",{unreconciledStakes:te,lostBetStakes:X,wonBetStakes:oe,allReconciledStakes:Y,displayedStake:D,reconciledPayouts:L,tournamentDollars:S,calculatedBalance:S-D-Y+L})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const re=S-D-Y+L;let Z=null;A&&t.coreTourn.length>0&&(Z=t.coreTourn[t.coreTourn.length-1].data.find(ae=>ae.guid===A)),Ce.updateSummaryAndDashboard(re,D,L,Z,Q)};de.subscribe(t.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(P,A)=>{const D=JSON.parse(A)?.rows||[],L=document.querySelector(".bet-grid__slip-MYBETS");if(!L)return;if(L.innerHTML="",D.length===0){L.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const V=document.querySelector(".bet-grid__slip");V&&V.setAttribute("data-active-bet-tab","BETSLIP"),_();return}let Y="";try{const ae=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(ae&&t.coreTourn.length>0){const ne=t.coreTourn[t.coreTourn.length-1].data.find(U=>U.guid===ae);ne?.class&&(Y=ne.class)}}catch{}D.forEach(V=>{if((V.bet||[]).length===0)return;const ee=document.createElement("bma-bet-existing");ee.setAttribute("data-corebetslip",JSON.stringify(V)),Y&&ee.setAttribute("data-bma-mode-token",Y),L.appendChild(ee)});const Q=document.querySelector(".bet-grid__slip");Q&&Q.setAttribute("data-active-bet-tab","MYBETS"),xe().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Ce.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",D.length),console.log("[app_events] Pinia store bet count:",t.coreBetSlip[0]?.data?.length||0),w()},200)}),document.addEventListener("click",P=>{const A=P.target;if(A&&A.classList.contains("bet-slip-tab")){const S=A.dataset.betTab,D=document.querySelector(".bet-grid__slip");S&&D&&(D.setAttribute("data-active-bet-tab",S),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",S))}if(A&&A.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(A.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}A.dataset.processing="true";const D=A.dataset.publishBetslip;de.publish(D,JSON.stringify({timestamp:Date.now()}))}});const E=()=>{const A=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let S=0;A&&t.coreTourn.length>0&&(S=t.coreTourn[t.coreTourn.length-1].data.find(re=>re.guid===A)?.tournament_dollars||0);const D=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),L=Array.from(D).map(Y=>({teamPoints:Y.getAttribute("data-content-team-points"),odds:Y.getAttribute("data-content-odds"),stake:Y.getAttribute("data-stake")||"0",type:Y.getAttribute("data-content-type"),abbreviatedTitle:Y.getAttribute("data-abbreviated-title"),scheduledAt:Y.getAttribute("data-scheduled-at")}));de.publish(t.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:S,bets:L,timestamp:Date.now()}))},I=(P,A)=>{const S=JSON.parse(A),D=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!D){console.error("[app_events] Bet slip container not found");return}const L=D.querySelector(".bet-slip__empty");L&&L.remove();let Y="";S.type==="total"?Y=S.team==="over"?"Over":"Under":S.team==="home"?Y=S.homeTeam:S.team==="away"?Y=S.awayTeam:S.team==="draw"&&(Y="Draw");let Q=Y;const re=S.point,Z=parseFloat(re),V=re!=null&&re!=="";if(V)if(S.type==="spread"&&Z!==0){const X=Z>0?`+${re}`:String(re);Q=`${Y} ${X}`}else S.type==="total"&&(Q=`${Y} ${re}`);const ae=document.createElement("bma-bet-entry");ae.setAttribute("data-content-team-points",Q),ae.setAttribute("data-content-odds",S.price||"0"),ae.setAttribute("data-content-stake-text","0"),ae.setAttribute("data-content-type",S.type||""),V&&ae.setAttribute("data-content-point",String(re)),ae.setAttribute("data-abbreviated-title",S.abbreviatedTitle||`${S.homeTeam} vs ${S.awayTeam}`),ae.setAttribute("data-scheduled-at",S.scheduledAt||""),ae.setAttribute("data-match-guid",S.matchGuid||""),ae.setAttribute("data-home-team",S.homeTeam||""),ae.setAttribute("data-away-team",S.awayTeam||""),ae.setAttribute("data-bet-team",Y||"");const ne=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(ne&&t.coreTourn.length>0){const oe=t.coreTourn[t.coreTourn.length-1].data.find(ie=>ie.guid===ne);if(oe?.sports_allowed&&oe.sports_allowed.length>0){const ie=oe.sports_allowed[0];ae.setAttribute("data-sport-key",ie.key||"");const x=Ge.find(O=>O.key===ie.key);ae.setAttribute("data-sport-group",x?.group||"")}oe?.class&&ae.setAttribute("data-bma-mode-token",oe.class)}D.appendChild(ae),console.log("[app_events] Bet entry appended to container:",ae,"Container children:",D.children.length),setTimeout(()=>{C(ae)},0);const U=document.querySelector(".bet-grid__slip");U&&(U.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const te=D.querySelectorAll("bma-bet-entry").length;te>=3?requestAnimationFrame(()=>{setTimeout(()=>{const X=document.querySelector(".bet-grid__slip");X&&(console.log("[app_events] Scrolling parent to bottom - bet count:",te,"scrollHeight:",X.scrollHeight,"current scrollTop:",X.scrollTop),X.scrollTo({top:X.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",X.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",te,"bet cards (need 3+)"),setTimeout(()=>{E()},200),console.log("[app_events] Created bet entry:",{teamPoints:Q,odds:S.price,type:S.type})};de.subscribe(t.hierTopics.COREBETSLIP__SPREAD,(P,A)=>{I(P,A),R()}),de.subscribe(t.hierTopics.COREBETSLIP__MONEY,(P,A)=>{I(P,A),R()}),de.subscribe(t.hierTopics.COREBETSLIP__TOTAL,(P,A)=>{I(P,A),R()});function R(){const P=window.matchMedia("(orientation: portrait)").matches,A=window.matchMedia("(max-width: 768px)").matches;if(P||A){const S=document.querySelector(".bet-grid__select"),D=document.querySelector(".bet-grid__slip"),L=document.querySelector(".bet-grid__toggle-text");S&&D&&L&&(S.classList.add("collapsed"),D.classList.remove("collapsed"),L.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const C=P=>{const A={sport:{key:P.getAttribute("data-sport-key")||"",group:P.getAttribute("data-sport-group")||""},Match:{scheduled_at:P.getAttribute("data-scheduled-at")||"",home_team_id:P.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:P.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:P.getAttribute("data-bet-team")||"",over:"",under:""},type:P.getAttribute("data-content-type")||"",odds:P.getAttribute("data-content-odds")||"0",stake:P.getAttribute("data-stake")||"0"}},S=lc.calcPayout(A);let D=S;try{const Y=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,Q=xe(),Z=Q.coreTourn[Q.coreTourn.length-1]?.data?.find(V=>V.guid===Y);if(Z&&window.GameTypeLifeCycle){const V=window.GameTypeLifeCycle.forTournament(Z);if(V&&typeof V.calcPayout=="function"){const ae=[],ee=Q.coreBetSlip[Q.coreBetSlip.length-1]?.data||[];for(const ne of ee){if(ne?.coreTournaments__guid!==Z.guid)continue;const U=ne.status_time?new Date(ne.status_time).getTime():0,te=Array.isArray(ne?.bet)?ne.bet:[];for(const X of te)if(!(!X||typeof X!="object"))for(const oe of Object.keys(X)){if(oe==="short_title")continue;const ie=X[oe];ie&&ie.reconciled===!0&&ae.push({outcome:ie.outcome||null,slipStatusTime:U})}}ae.sort((ne,U)=>(ne.slipStatusTime||0)-(U.slipStatusTime||0)),D=V.calcPayout(S,A.Bet,Z,{priorBets:ae})}}}catch{D=S}P.setAttribute("data-payout-base",S.toString()),P.setAttribute("data-payout",D.toString()),console.log("[app_events] Payout calculated:",{stake:A.Bet.stake,odds:A.Bet.odds,rawPayout:S,finalPayout:D,bonusApplied:D!==S})};new MutationObserver(P=>{P.forEach(A=>{A.type==="attributes"&&A.attributeName==="data-stake"&&A.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",A.target.getAttribute("data-stake")),C(A.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{E()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",P=>{console.log("[app_events] Removing bet entry:",P.detail);const A=P.target,S=P.detail;A.remove(),setTimeout(()=>{const Q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(Q){const re=xe(),Z=re.coreTourn[re.coreTourn.length-1];if(Z&&Z.data){const V=Z.data.find(ae=>ae.guid===Q);V&&Ce.updateTournamentDashboard(V)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(Y=>{(Y.shadowRoot?.querySelectorAll(".btn")||[]).forEach(re=>{const Z=re.dataset.betType,V=re.dataset.price,ae=Z===S.type,ee=V===S.odds;ae&&ee&&re.classList.contains("btn--active")&&(re.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:Z,btnPrice:V}))})});const L=document.querySelector(".bet-grid__slip-BETSLIP-content");L&&L.children.length===0&&(L.innerHTML=Gs),setTimeout(()=>{E()},100)}),de.subscribe(t.hierTopics.CANVAS__HYDRATE__STATUS,(P,A)=>{const S=JSON.parse(A);S&&S.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${S.guid}"]`)}),de.subscribe(t.hierTopics.WC__APP__FOOT,(P,A)=>{switch(JSON.parse(A),P){case"WC.APP.FOOT.LOBBY":case"WC.APP.FOOT.ALL_SPORTS":de.publish(t.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"LOBBY",timestamp:Date.now()}));break;case"WC.APP.FOOT.TOURNEYS":de.publish(t.hierTopics.WC__APP__HEAD_MID__HEAD_MID_TOURNEYS,JSON.stringify({tab:"TOURNEYS",timestamp:Date.now()}));break;case"WC.APP.FOOT.PRIVATE":case"WC.APP.FOOT.MY_TOURNEYS":de.publish(t.hierTopics.WC__APP__HEAD_MID__HEAD_MID_PRIVATE,JSON.stringify({tab:"PRIVATE",timestamp:Date.now()}));break;case"WC.APP.FOOT.LEADERBOARD":de.publish(t.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case"WC.APP.FOOT.MY_PROFILE":neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break}}),de.subscribe(t.hierTopics.WC__APP__HEAD_SPORTS,(P,A)=>{const S=JSON.parse(A);let D=16;P=="WC.APP.HEAD_SPORTS.PREV"||P=="WC.APP.HEAD_SPORTS.NEXT"||P=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?D=3:(a=S.key||"all",console.log(`[app_events] Sports filter changed to: ${a} (${S.group})`),m(),de.publish(t.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"})),p()),D&&neodigmWired4Sound&&neodigmWired4Sound.sound(D).vibrate()}),de.subscribe(t.hierTopics.WC__APP__HEAD_MID,(P,A)=>{JSON.parse(A);let S=16;const D=(L,Y="active")=>{e=L,n="all",r=Y,o="active",document.body.dataset.tournFilter=L,document.body.dataset.privateSub=n,g(),h(),m(),v(),(window.location.hash||"").startsWith("#/home_route")||(window.location.hash||"")==="#/"||!window.location.hash||(typeof neodigmSodaPop<"u"&&neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/home_route"),de.publish(t.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"})),p()};switch(P){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":D("lobby");break;case"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS":D("my","active");break;case"WC.APP.HEAD_MID.HEAD_MID_PRIVATE":case"WC.APP.HEAD_MID.HEAD_MID_MY":D("private");break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":D("my","completed");break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":S=16,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/top_players_route";break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":de.publish(t.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()}),de.subscribe(t.hierTopics.ROUTE__HOME__USER_PROFILE,async(P,A)=>{JSON.parse(A);let S=16;switch(P){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const D=window.deferredPWAPrompt;if(!D){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{D.prompt();const{outcome:Y}=await D.userChoice;Y==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),S=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(Y){console.error("PWA install error:",Y),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const Q=t.appCLIFeatures.features.theme.state==="dark"?"light":"dark";t.setFeaturePersistPub("theme",{state:Q});const re=document.getElementById("app");re&&re.setAttribute("data-sync-theme",Q),document.body.setAttribute("data-sync-theme",Q)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":ls.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":ls.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()});const $=P=>{document.querySelectorAll(".play-section").forEach(S=>{S.style.display="none",S.classList.remove("play-section--active")});const A=document.getElementById(`play-section-${P}`);A&&(A.style.display="",A.classList.add("play-section--active"))},G=(P,A)=>{const S=P.split(".").pop(),D=document.querySelectorAll(".play-cntr .dash-nav__btn"),Y=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");$(S),D.forEach(Q=>{const re=Q.dataset.publishRouteHome?.split(".").pop()||"";Q.classList.toggle("dash-nav__btn--active",re===S)}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),Y&&(Y.style.overflow=S==="PLAY"?"hidden":"auto")};de.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",G);let j=null;de.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(P,A)=>{if(G(P),j){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}j=setTimeout(()=>{j=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),Ce.populateLeaderboard()}),de.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(P,A)=>{JSON.parse(A);const S=document.getElementById("btn-join__play--id");if(!S){console.warn("[app_events] PLAY button not found");return}const D=S.dataset.requiresJoin==="true",L=S.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",L,"requiresJoin:",D),D&&L==="join"){const Q=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,re=xe();if(!Q){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",Q),de.publish(re.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:Q,timestamp:Date.now()})),S.textContent="Play",S.dataset.requiresJoin="false",setTimeout(()=>{G(P),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else G(P),console.log("[app_events] Advancing carousel to PLAY page")}),de.subscribe(t.hierTopics.WC__APP__HEAD_TOP,(P,A)=>{JSON.parse(A);let S=10;switch(P){case"WC.APP.HEAD_TOP.USER_PROFILE":S=0,neodigmSodaPop&&neodigmSodaPop.close(),window.location.hash="#/profile_route";break;case"WC.APP.HEAD_TOP.LOGO":const D=t.appSession.session_app.version,L=new Date().getFullYear();D&&neodigmToast&&neodigmToast.q(`${D} 5/3/2026, 1:11:41 PM|© ${L} Bet Max Action`,"night");break;case"WC.APP.HEAD_TOP.CREATE_CONTEST":de.publish(t.hierTopics.WC__APP__FOOT__MY_TOURNEYS,JSON.stringify({tab:"MY_TOURNEYS",timestamp:Date.now()}));break}S&&neodigmWired4Sound&&neodigmWired4Sound.sound(S).vibrate()}),de.subscribe(t.hierTopics.WC__TOURN_ACTION,(P,A)=>{const S=JSON.parse(A);let D=0;switch(S?.action){case"JOIN":D=512;break;case"PLAY":D=8;break;case"INFO":D=8;break}if(D){const L=S?.tournamentGuid,Y=S?.action;console.log("[app_events] Navigating to play_route:",L,Y),setTimeout(()=>{ls.push({name:"play_route",query:{guid:L,action:Y}})},D)}}),de.subscribe(t.hierTopics.WC__TOURN_ACTION,(P,A)=>{const S=JSON.parse(A);let D=16;switch(S?.action){case"FOCUS":D=3;break;case"SPORT_ICON":D=10;break;case"JOIN":D=5;break;case"PLAY":D=16;break}D&&neodigmWired4Sound&&neodigmWired4Sound.sound(D).vibrate()}),de.subscribe(t.hierTopics.WC__TOURN_ACTION,(P,A)=>{const S=JSON.parse(A);let D=0,L="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),S?.tournamentStatus){case"UPCOMING":L="success";break;case"LOCKED":L="warning";break;case"COMPLETED":L="danger";break}switch(S?.action){case"SPORT_ICON":S?.sportTitle==S?.sportDescription?D=S?.sportTitle:D=S?.sportTitle+"|"+S?.sportDescription;break}D&&neodigmToast&&neodigmToast.q(D,L)}),de.subscribe(t.hierTopics.WC__TOURN_ACTION,async(P,A)=>{const S=JSON.parse(A);if(S?.action==="JOIN"){const D=xe(),L=D.appSession?.session_user?.guid;if(!L){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const Y=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);Y&&(Y.setAttribute("data-bma-tourn-wait","true"),bs.shootConfetti());const Q={acctEntityGuid:L,tournamentGuid:S.tournamentGuid};try{const re={method:"POST",body:JSON.stringify(Q),headers:Te.genHeaders()};console.log("Posting to:",Te.API_baseURI+"/m5t/"+Te.API_ver+"/coreTournaments/join",Q);const V=await(await fetch(Te.API_baseURI+"/m5t/"+Te.API_ver+"/coreTournaments/join",re)).json();if(console.log("Join response:",V),V.ok){typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success");try{const ee=D.coreTourn[D.coreTourn.length-1]?.data?.find(ne=>ne.guid===S.tournamentGuid);if(ee){const ne=ee.entities||{max:0,guids:[]},U=Array.isArray(ne.guids)?ne.guids:[];U.includes(L)||(ee.entities={...ne,guids:[...U,L]})}}catch(ae){console.warn("[app_events] post-join Pinia splice failed (non-fatal):",ae?.message)}setTimeout(()=>{const ae=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);if(ae){ae.setAttribute("data-bma-tourn-wait","false");const ee=ae.getAttribute("data-bma-tourn-entities");if(ee)try{const ne=JSON.parse(ee);ne.guids.includes(L)||(ne.guids.push(L),ae.setAttribute("data-bma-tourn-entities",JSON.stringify(ne)))}catch(ne){console.error("Failed to parse entities:",ne)}}},3e3)}else{const ae=V?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(ae,"danger");const ee=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${S.tournamentGuid}"]`);ee&&ee.setAttribute("data-bma-tourn-wait","false")}}catch(re){console.error("Join tournament error:",re),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),de.subscribe(t.hierTopics.ROUTE__HOME_ONMOUNT,async(P,A)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const S=xe(),D=f();console.log("[nav-persist] HOME_ONMOUNT rehydrate. saved=",D,"raw=",sessionStorage.getItem("bma_home_nav_state")),D?(e=D.filter,o=D.lobbySubTab||"active",r=D.mySubTab||"active",n=D.privateSubTab||"all",a=D.sportFilter||"all"):(e="lobby",o="active",r="active",n="all",a="all"),console.log("[nav-persist] after rehydrate: currentFilter=",e,"privateSubTab=",n,"sport=",a),s="all",i="default",l="all",c="all",document.body.dataset.tournFilter=e,document.body.dataset.privateSub=n;try{document.querySelectorAll(".home-tab").forEach(Q=>Q.classList.remove("home-tab--active"));const L=e==="private"?n==="invites"?"private-invites":"private-all":e==="my"?r==="completed"?"my-completed":"my-active":o==="completed"?"lobby-completed":"lobby-active",Y=document.querySelector(`[data-home-tab="${L}"]`);Y&&Y.classList.add("home-tab--active")}catch{}try{const L=document.querySelector("bma-app-head-sports");L&&L.setAttribute("data-selected-chip",a)}catch{}try{const L=document.querySelector("bma-app-head-mid");if(L){const Q=e==="private"?"head_mid_private":e==="my"?"head_mid_tourneys":"head_mid_lobby";L.setAttribute("data-selected-tab",Q)}const Y=document.querySelector("bma-app-foot");if(Y){const Q=e==="private"?"foot_private":e==="my"?"foot_tourneys":"foot_lobby";Y.setAttribute("data-selected-item",Q)}}catch{}if(S.appSession?.session_user?.authenticated&&(S.coreInvites.length===0?Te.fetchMyInvites().then(L=>{L.ok&&Array.isArray(L.data?.invites)&&L.data.invites.length>0&&(S.setCoreInvites(L.data.invites),de.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"home_onmount_fetch",count:L.data.invites.length,timestamp:Date.now()})))}).catch(L=>console.warn("[home_onmount] fetchMyInvites failed:",L)):de.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"home_onmount_rerender",count:S.coreInvites.length,timestamp:Date.now()}))),S.coreTourn.length>0){console.log("[app_events] coreTourn already populated, hydrating from existing data"),de.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"REMOUNT"}));return}try{const L=await Te.fetchTournaments();console.log("[app_events] Tournaments fetched:",L),L?.rows&&Array.isArray(L.rows)?(S.pushCoreTourn({timestamp:Date.now(),source:"API",data:L.rows}),console.log("[app_events] Pushed to coreTourn, length:",S.coreTourn.length),de.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",L)}catch(L){console.error("[app_events] Error fetching tournaments:",L),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),de.subscribe(t.hierTopics.PROMOTION__LOAD,async(P,A)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const S=await Te.fetchPromotions();if(console.log("[app_events] Promotions fetched:",S),S?.ok&&S?.data&&Array.isArray(S.data)){const D=S.data.filter(Y=>Y.class==="banner"&&Y.status==="LIVE");D.sort((Y,Q)=>(Y.sort_order??0)-(Q.sort_order??0)),console.log("[app_events] Banner promotions:",D);const L=document.querySelector(".featured-swiper .swiper-wrapper");if(!L){console.warn("[app_events] Swiper wrapper not found");return}if(L.innerHTML="",D.forEach((Y,Q)=>{const re=document.createElement("div");re.className="swiper-slide";const Z=document.createElement("div");Z.className=`featured-card featured-card--${Q+1}`;const V=Y.hero_img?encodeURI(Y.hero_img):"";Z.style.backgroundImage=`url("${V}")`,Z.setAttribute("data-promotion-hero-img",Y.hero_img||""),Z.setAttribute("data-promotion-caption",Y.caption||""),Z.setAttribute("data-promotion-tagline",Y.tagline||""),Z.setAttribute("data-promotion-toast",Y.toast||""),Z.setAttribute("data-promotion-topic",Y.topic?.topic||""),Z.setAttribute("data-promotion-topic-token",Y.topic?.token||""),Z.setAttribute("data-promotion-marquee",Y.maquee||""),re.appendChild(Z),L.appendChild(re)}),console.log("[app_events] Created",D.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),D.length===1){const Y=document.querySelector(".featured-swiper .swiper-wrapper");Y&&(Y.style.justifyContent="center")}}}catch(S){console.error("[app_events] Error fetching promotions:",S)}}),de.subscribe(t.hierTopics.PROMOTION__CLICK,(P,A)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const S=JSON.parse(A);console.log("[app_events] Promotion clicked:",S),S.toast&&typeof neodigmToast<"u"&&neodigmToast.q(S.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const D=document.querySelector(".l-promotion #promoHero");D&&S.heroImg&&(D.src=S.heroImg);const L=document.querySelector(".l-promotion #promCaption");L&&S.caption&&(L.textContent=S.caption);const Y=document.querySelector(".l-promotion #promoTagline");return Y&&S.tagline&&(/<[^>]+>/.test(S.tagline)?Y.innerHTML=S.tagline:Y.textContent=S.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(S){console.error("[app_events] Error handling promotion click:",S)}}),de.subscribe(t.hierTopics.ROUTE__HOME_HYDRATE,(P,A)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const S=xe();if(S.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const D=S.coreTourn[S.coreTourn.length-1],L=S.coreTourn.length>1?S.coreTourn[S.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",D);const Y=[];if(L){const ae=D.data,ee=L.data;ae.forEach(ne=>{const U=ee.find(te=>te.guid===ne.guid);U&&U.status!==ne.status&&(console.log(`[app_events] Status changed for tournament ${ne.guid}: ${U.status} -> ${ne.status}`),Y.push(ne.guid))})}const Q=S.appSession?.session_user?.guid,re=[...D.data].sort((ae,ee)=>{const ne=ae.status||ae.class,U=ee.status||ee.class,te=ae.entities?.guids||[],X=ee.entities?.guids||[],oe=te.includes(Q),ie=X.includes(Q),x=(k,z)=>{const se=new Date(k.status_time||0).getTime();return new Date(z.status_time||0).getTime()-se},O=ne==="LOCKED"&&oe,y=U==="LOCKED"&&ie;if(O&&!y)return-1;if(!O&&y)return 1;if(O&&y)return x(ae,ee);const T=ne==="UPCOMING",B=U==="UPCOMING";if(T&&!B)return-1;if(!T&&B)return 1;if(T&&B)return x(ae,ee);const N=ne==="COMPLETED"&&oe,K=U==="COMPLETED"&&ie;if(N&&!K)return-1;if(!N&&K)return 1;if(N&&K)return x(ae,ee);const W=ne==="COMPLETED"&&!oe,M=U==="COMPLETED"&&!ie;return W&&!M?1:!W&&M?-1:x(ae,ee)}),Z=Ce.categorizeTournaments(re,e,a,Q,{subStatus:s,sort:i,result:l,privateSubTab:n,mySubTab:r,lobbySubTab:o});if(console.log(`[app_events] Categorized into ${Z.length} categories for filter: ${e}/${a} sub:${s} sort:${i} result:${l}`),document.body.dataset.tournFilter=e,window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const ae=document.querySelector(".tournaments-grid");ae&&(ae.dataset.filterContext=e),window._homeRouteRenderCards(Z,!0,u,{tab:e,subStatus:s,sort:i,result:l,odds:c});const ee=re.filter(O=>{const y=O.status||O.class,T=O.entities?.guids||[];return(y==="LOCKED"||y==="UPCOMING")&&T.includes(Q)}).length,ne=re.reduce((O,y)=>{const T=y.status||y.class,B=y.entities?.guids||[];return(T==="LOCKED"||T==="UPCOMING")&&B.includes(Q)?O+parseFloat(y.tournament_dollars||0):O},0),U=document.querySelector("bma-app-foot");U&&U.setAttribute("data-active-count",String(ee));const te=document.querySelector("bma-app-head-mid");te&&te.setAttribute("data-active-count",String(ee));const X=document.querySelector("bma-app-head-top");X&&(X.setAttribute("data-active-count",String(ee)),X.setAttribute("data-td-dollars",String(ne)));const oe=document.getElementById("home-tab-active-badge");oe&&(oe.textContent=ee,oe.style.visibility=ee>0?"visible":"hidden");const ie=re.filter(O=>{if(O.is_private!==!0)return!1;const y=O.status||O.class;if(y!=="LOCKED"&&y!=="UPCOMING")return!1;const T=O.entities?.guids||[];return O.creator_guid===Q||T.includes(Q)}).length,x=document.getElementById("home-tab-private-badge");if(x&&(x.textContent=ie),te&&te.setAttribute("data-private-count",String(ie)),U&&U.setAttribute("data-private-count",String(ie)),Y.length>0){const O=D.data;Y.forEach(y=>{const T=O.find(B=>B.guid===y);if(T){const B=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{de.publish(S.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:y,status:T.status,timestamp:Date.now()}))},B)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available");const V=document.getElementById("bma-scores-banner--id");if(V){const ae=new Set,ee=[];for(const ne of D.data){const U=Array.isArray(ne.matches_expanded)?ne.matches_expanded:[];for(const te of U){const X=te.guid||te.id||te.odds_id;!X||ae.has(X)||(ae.add(X),ee.push(te))}}V.setAttribute("data-matches",JSON.stringify(ee))}Ce.prefetchGlobalLeaderboard()}),de.subscribe(t.hierTopics.SSE__CORE__TOURN_SYNC,(P,A)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",A);const S=xe();try{const D=JSON.parse(A);console.log("[app_events] SSE tournament sync data:",D);const L=JSON.parse(D.msg);if(console.log("[app_events] Parsed tournaments array:",L),!Array.isArray(L)){console.warn("[app_events] SSE msg is not an array:",L);return}S.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:L}),console.log("[app_events] Pushed SSE data to coreTourn, length:",S.coreTourn.length),de.publish(S.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),document.querySelector(".play-cntr")&&(console.log("[SSE] Play route is active, triggering real-time update"),Ce.hydratePlayPopup())}catch(D){console.error("[app_events] Error processing SSE tournament sync:",D)}}),de.subscribe(t.hierTopics.SSE__CORE__INVITE_SYNC,(P,A)=>{console.log("[app_events] SSE__CORE__INVITE_SYNC event received");const S=xe();try{const D=JSON.parse(A),L=JSON.parse(D.msg);if(!Array.isArray(L)||L.length===0){console.warn("[app_events] INVITE_SYNC msg not an array:",L);return}const{invite:Y,action:Q}=L[0]||{};if(!Y?.guid||!Q){console.warn("[app_events] INVITE_SYNC missing invite or action:",L[0]);return}switch(Q){case"created":S.upsertInvite(Y);break;case"revoked":case"accepted":case"declined":case"expired":case"pool_full":S.removeInvite(Y.guid);break;default:console.warn("[app_events] INVITE_SYNC unknown action:",Q);return}try{window.GameTypeLifeCycle&&Q==="created"&&window.GameTypeLifeCycle.forTournament({guid:Y.coreTournaments__guid,class:null}).doInviteReceived({tournament:{guid:Y.coreTournaments__guid},invite:{guid:Y.guid}}).catch(re=>console.warn("[app_events] doInviteReceived failed (non-fatal):",re?.message))}catch{}de.publish(S.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:Q,inviteGuid:Y.guid,timestamp:Date.now()}))}catch(D){console.error("[app_events] Error processing INVITE_SYNC:",D)}});const F=()=>{const P=document.getElementById("invites-list");if(!P)return;const A=(t.coreInvites||[]).filter(Y=>(Y.status||"").toUpperCase()==="PENDING");A.sort((Y,Q)=>new Date(Q.invited_at||0)-new Date(Y.invited_at||0)),P.innerHTML="",A.forEach(Y=>{const Q=document.createElement("bma-invite-card"),re=Y.tournament_preview||{},Z=(re.sports_allowed||[])[0]||{},V=Ge.find(ae=>ae.key===Z.key);Q.setAttribute("data-invite-guid",Y.guid||""),Q.setAttribute("data-tournament-caption",Y.tournament_caption||re.caption||"Bet Max Pool"),Q.setAttribute("data-invited-by-name",Y.invited_by?.display_name||Y.invited_by?.userName||"A friend"),Q.setAttribute("data-expires-at",Y.expires_at||""),Z.key&&Q.setAttribute("data-sport-key",Z.key),V?.group&&Q.setAttribute("data-sport-group",V.group),Q.setAttribute("data-entrants-count",String(re.entities?.count??re.entities?.guids?.length??0)),Q.setAttribute("data-entrants-max",String(re.entities?.max??0)),re.window_start_time&&Q.setAttribute("data-window-start",re.window_start_time),P.appendChild(Q)});const S=document.getElementById("home-tab-invites-badge");S&&(S.textContent=A.length,S.style.visibility=A.length>0?"visible":"hidden");const D=document.querySelector("bma-app-head-mid");D&&D.setAttribute("data-invites-count",String(A.length));const L=document.querySelector("bma-app-foot");L&&L.setAttribute("data-invites-count",String(A.length))};document.addEventListener("invite-accept",async P=>{const A=P.detail?.inviteGuid;if(!A)return;const S=await Te.acceptInvite(A);if(S.ok&&S.data?.tournament){t.pushCoreTourn({timestamp:Date.now(),source:"API",data:[S.data.tournament]}),t.removeInvite(A),de.publish(t.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"accepted",inviteGuid:A,timestamp:Date.now()})),de.publish(t.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"INVITE_ACCEPT"})),typeof neodigmToast<"u"&&neodigmToast.q("Joined the pool. Good luck.","success");return}const D=S.data?.error||`http_${S.status}`,L=D==="pool_full"?"This pool just filled up. Ask the host to create another.":D==="expired"?"This invite has expired. Ask the host to send a new one.":D==="already_accepted"?"You already joined this pool.":D==="not_invitee"?"This invite isn't yours.":D==="invite_not_found"?"Invite not found. It may have been revoked.":"Couldn't accept right now. Try again in a moment.";typeof neodigmToast<"u"&&neodigmToast.q(L,"warning"),["pool_full","expired","already_accepted","invite_not_found"].includes(D)&&(t.removeInvite(A),de.publish(t.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"cleanup",inviteGuid:A,timestamp:Date.now()})))}),document.addEventListener("invite-decline",async P=>{const A=P.detail?.inviteGuid;if(!A)return;t.removeInvite(A),de.publish(t.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({action:"declined",inviteGuid:A,timestamp:Date.now()}));const S=await Te.declineInvite(A);S.ok||(console.warn("[app_events] decline failed:",S.status,S.data),typeof neodigmToast<"u"&&neodigmToast.q("Couldn't decline right now. Try again.","warning"))}),de.subscribe(t.hierTopics.ROUTE__INVITES_HYDRATE,()=>{F()}),de.subscribe(t.hierTopics.SSE__CORE__INVITE_SYNC,(P,A)=>{try{const S=JSON.parse(A),D=JSON.parse(S.msg),{invite:L,action:Y}=D?.[0]||{};if(!L?.guid||!L.tournament_guid)return;const Q=L.tournament_guid,re=At[Q];if(!re)return;const Z=re.findIndex(V=>V.guid===L.guid);if(Y==="accepted"||Y==="declined"||Y==="expired"||Y==="pool_full"){if(Z>=0){const V=[...re];V[Z]={...V[Z],...L},At[Q]=V,Da(Q)}}else Y==="revoked"&&Z>=0&&(At[Q]=re.filter(V=>V.guid!==L.guid),Da(Q))}catch(S){console.warn("[info sent invites] SSE handler error:",S)}}),t.appSession?.session_user?.authenticated&&Te.fetchMyInvites().then(P=>{P.ok&&Array.isArray(P.data?.invites)?(t.setCoreInvites(P.data.invites),de.publish(t.hierTopics.ROUTE__INVITES_HYDRATE,JSON.stringify({source:"bootstrap",count:P.data.invites.length,timestamp:Date.now()})),console.log(`[app_events] Invites bootstrap: ${P.data.invites.length} pending`)):console.warn("[app_events] Invites bootstrap failed:",P.status,P.data)}).catch(P=>{console.warn("[app_events] Invites bootstrap error:",P)}),((window.location.hash||"").startsWith("#/home_route")||(window.location.hash||"")==="#/"||!window.location.hash)&&(console.log("[nav-persist] bindAppListeners boot-rehydrate; on home, re-publishing HOME_ONMOUNT"),de.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now(),source:"BOOT_REHYDRATE"}))),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const P=document.querySelector("#caption__my-profile");P&&(P.textContent="My Profile");const A=document.getElementById("profile-trophy-username");A&&(A.textContent=t.appSession?.session_user?.userName||t.appSession?.session_user?.name||"");const S=t.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",S),console.log("[app_events] coreTourn length:",t.coreTourn.length),!S||t.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const L=t.coreTourn[t.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",L.length);const Y=V=>{const ae=document.getElementById("profile-stats-panel");ae&&(ae.innerHTML=Ce.buildStatsPanel(L,S,V))};Y(Ce._betStatsCache?.stats||null),Ce._ensureBetStatsCache(S).then(V=>{V&&Y(V)});let Q=0,re=0,Z=0;L.forEach((V,ae)=>{if(!V.tags||!Array.isArray(V.tags)){console.log(`[app_events] Tournament ${ae} has no tags or tags not an array`);return}V.tags.forEach((ee,ne)=>{if(typeof ee=="object"&&ee!==null){let U=null;ee.entity_guid===S&&ee.badge?U=ee.badge:ee[S]&&(U=ee[S]),U==="--badge__ribbon--gold"?Q++:U==="--badge__ribbon--silver"?re++:U==="--badge__ribbon--bronze"&&Z++}})}),setTimeout(()=>{let V=document.querySelectorAll(".badge-counter");if(V.length===0){const ae=document.querySelector("neodigm-sodapop");ae&&(V=ae.querySelectorAll(".badge-counter"))}V.length>=3?(V[0].textContent=re,V[1].textContent=Q,V[2].textContent=Z,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const V=document.querySelector("#profile-tournaments-list");if(!V||!S||t.coreTourn.length===0)return;const ne=t.coreTourn[t.coreTourn.length-1].data.filter(oe=>{try{return(typeof oe.entities=="string"?JSON.parse(oe.entities):oe.entities)?.guids?.includes(S)}catch{return!1}}),U={LOCKED:0,UPCOMING:1,COMPLETED:2};ne.sort((oe,ie)=>{const x=U[oe.status]??3,O=U[ie.status]??3;return x!==O?x-O:new Date(ie.status_time||0)-new Date(oe.status_time||0)});const te=oe=>{let ie=ne;if(oe==="active"?ie=ne.filter(x=>x.status==="LOCKED"||x.status==="UPCOMING"):oe==="completed"&&(ie=ne.filter(x=>x.status==="COMPLETED")),ie.length===0){V.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}V.innerHTML=ie.map(x=>{const O=x.entities?JSON.stringify(x.entities).replace(/"/g,"&quot;"):"",y=x.tags?JSON.stringify(x.tags).replace(/"/g,"&quot;"):"[]",T=x.sports_allowed?JSON.stringify(x.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${x.guid||""}"
                                        data-bma-tourn-caption="${x.caption||""}"
                                        data-bma-tourn-tagline="${x.tagline||""}"
                                        data-bma-tourn-status="${x.status||""}"
                                        data-bma-tourn-class="${x.status||""}"
                                        data-bma-tourn-sports_allowed="${T}"
                                        data-bma-tourn-entities="${O}"
                                        data-bma-tourn-entry_fee="${x.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${x.tournament_dollars||0}"
                                        data-bma-tourn-matches="${x.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${y}"
                                        data-bma-tourn-window_start_time="${x.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${x.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{V.querySelectorAll("bma-tournament-list-card").forEach((x,O)=>{x.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",x.style.animationDelay=`${Math.min(O*60,400)}ms`})})};te("all");const X=document.querySelector(".profile-tournaments__filters");X&&X.addEventListener("click",oe=>{const ie=oe.target.closest(".profile-tourn-filter");ie&&(X.querySelectorAll(".profile-tourn-filter").forEach(x=>x.classList.remove("profile-tourn-filter--active")),ie.classList.add("profile-tourn-filter--active"),te(ie.dataset.filter))})},600)},1e3)},"sodapop_my_profile"))},3e3),window._renderTopPlayers=async function(P="ALL"){const A=xe(),S=document.getElementById("global-leaderboard-container");if(S){S.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{let D;const L=Ce._globalLBCache[P];L?.data&&Date.now()-L.ts<300*1e3?(console.log(`[Global Leaderboard] Using prefetched cache [${P}]`),D=L.data):(console.log(`[Global Leaderboard] Cache miss [${P}], fetching fresh`),D=await Te.fetchAllTimeLeaderboard(P,100,"td"),Ce._globalLBCache[P]={data:D,ts:Date.now(),inflight:!1});const Y=D?.data||[],Q=D?.last_updated||null,re=A.coreTourn.length>0?A.coreTourn[A.coreTourn.length-1].data:[];if(!Y.length){S.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const Z=S,V=A.appSession?.session_user?.guid,ae={};Y.forEach(y=>{const T=y.user_guid;ae[T]={username:y.username||"Unknown",user_guid:T,totalTDWon:parseFloat(y.total_payout||0),totalPayout:parseFloat(y.total_payout||0),totalBets:parseInt(y.total_betslips||0),tournamentsPlayed:parseInt(y.tournaments_joined||0),tournamentsWon:parseInt(y.tournaments_won||0),totalTD:parseFloat(y.total_td_dollars||0),gold:0,silver:0,bronze:0,sports:new Set}}),re.forEach(y=>{!y.tags||!Array.isArray(y.tags)||y.tags.forEach(T=>{if(typeof T!="object"||!T)return;let B=null,N=null;if(T.entity_guid&&T.badge){if(T.entity_guid==="SYSTEM")return;B=T.entity_guid,N=T.badge}else{const W=Object.keys(T);for(const M of W){const k=T[M];if(typeof k=="string"&&k.startsWith("--badge__ribbon--")){B=M,N=k;break}}}if(!B||!N)return;ae[B]||(ae[B]={username:B.substring(0,8),user_guid:B,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,totalTD:0,gold:0,silver:0,bronze:0,sports:new Set});const K=ae[B];N==="--badge__ribbon--gold"?K.gold++:N==="--badge__ribbon--silver"?K.silver++:N==="--badge__ribbon--bronze"&&K.bronze++})});const ee=Object.values(ae).filter(y=>y.username!=="Unknown");if(Q){const y=Math.round((Date.now()-new Date(Q).getTime())/6e4),T=y<1?"just now":y===1?"1 minute ago":`${y} minutes ago`;console.log(`[Global Leaderboard] Server last updated ${T}`)}const ne=ee.filter(y=>y.gold+y.silver+y.bronze>0),U=new Set;ee.forEach(y=>y.sports.forEach(T=>U.add(T)));const te={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},X=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let oe="all";const ie=(y,T)=>{let B=[...ee],N;y==="overall"&&(B=B.filter(le=>le.gold+le.silver+le.bronze>0)),y==="bysport"&&T&&T!=="all"&&(B=B.filter(le=>le.sports.has(T)));const K=Z.querySelector(".glb__note");switch(K&&K.remove(),y){case"overall":B.sort((le,ge)=>ge.gold*100+ge.silver*10+ge.bronze-(le.gold*100+le.silver*10+le.bronze)||ge.totalPayout-le.totalPayout||ge.totalBets-le.totalBets),N=(le,ge,ve,Se,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${ge<3?"glb__rank--top3":""}">#${ge+1}</span>
                                                <span class="glb__avatar" style="background: ${Se};">${ve}</span>
                                                <span class="glb__name">${le.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right">
                                                ${le.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${le.gold}</span></div>`:""}
                                                ${le.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${le.silver}</span></div>`:""}
                                                ${le.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${le.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":B=B.filter(le=>le.totalTDWon>0),B.sort((le,ge)=>ge.totalTDWon-le.totalTDWon),N=(le,ge,ve,Se,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${ge<3?"glb__rank--top3":""}">#${ge+1}</span>
                                                <span class="glb__avatar" style="background: ${Se};">${ve}</span>
                                                <span class="glb__name">${le.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__earnings">TD$ ${Math.round(le.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":B.sort((le,ge)=>ge.totalPayout-le.totalPayout||ge.totalBets-le.totalBets),N=(le,ge,ve,Se,Ae)=>`
                                        <div class="glb__row">
                                            <span class="glb__row-left">
                                                <span class="glb__rank ${ge<3?"glb__rank--top3":""}">#${ge+1}</span>
                                                <span class="glb__avatar" style="background: ${Se};">${ve}</span>
                                                <span class="glb__name">${le.username}</span>
                                                ${Ae?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span class="glb__row-right" style="gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${le.totalBets} bets</span>
                                                <span class="glb__earnings">TD$ ${le.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const W=Z.querySelector(".glb__list");if(!W)return;if(B.length===0){const le=y==="earnings"?"No TD$ won from reconciled bets yet":y==="bysport"?"No players found for this sport":"No leaderboard data available";W.innerHTML=`<div class="leaderboard-empty"><p>${le}</p></div>`;return}const M=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],k=le=>M[le.charCodeAt(0)%M.length];let z="";if(y==="overall"&&B.length>=3){const le=(ge,ve,Se,Ae,Ne)=>{const Fe=B[ge],ea=Fe.user_guid===V;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${ve===1?80:ve===2?64:56}px; height: ${ve===1?80:ve===2?64:56}px; background-image: var(${Ae}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${ea?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${Fe.username}${ea?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${Fe.gold+Fe.silver+Fe.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${Se}px; background: linear-gradient(180deg, ${Ne}33 0%, ${Ne}0D 100%); border-top: 3px solid ${Ne}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${Ne};">${ve===1?"1st":ve===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};z=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${le(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${le(0,1,90,"--badge__gold","#FFD700")}
                                        ${le(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const se='<div class="info-section__title">Rankings</div>',ce='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',me='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(y==="bysport"&&!Z.querySelector(".glb__note")){const ge=document.createElement("div");ge.className="glb__note",ge.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",ge.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const ve=Z.querySelector(".glb__sport-filters");ve&&ve.parentNode.insertBefore(ge,ve)}let he="";if(y==="earnings"&&B.length>=3){const le=(ge,ve,Se,Ae)=>{const Ne=B[ge],Fe=Ne.user_guid===V;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
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
                                `}if(y==="overall")W.innerHTML=z+ce+se+B.map((le,ge)=>{const ve=(le.username||"?")[0].toUpperCase(),Se=k(le.username),Ae=le.user_guid===V;return N(le,ge,ve,Se,Ae)}).join("");else if(y==="earnings"){const le='<div class="info-section__title">TD$ Won</div>';W.innerHTML=he+me+le+B.map((ge,ve)=>{const Se=(ge.username||"?")[0].toUpperCase(),Ae=k(ge.username),Ne=ge.user_guid===V;return N(ge,ve,Se,Ae,Ne)}).join("")}else if(y==="bysport"){let le="";if(B.length>=3){const ve=(Se,Ae,Ne)=>{const Fe=B[Se],ea=Fe.user_guid===V,at=k(Fe.username),gt=(Fe.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${at}; width: ${Ae===1?48:38}px; height: ${Ae===1?48:38}px; font-size: ${Ae===1?"1rem":"0.8rem"};">${gt}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${ea?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${Fe.username}${ea?" (You)":""}</span>
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
                                    `}const ge='<div class="info-section__title">Rankings</div>';W.innerHTML=le+ge+B.map((ve,Se)=>{const Ae=(ve.username||"?")[0].toUpperCase(),Ne=k(ve.username),Fe=ve.user_guid===V;return N(ve,Se,Ae,Ne,Fe)}).join("")}requestAnimationFrame(()=>{W.querySelectorAll(".glb__card, .info-row").forEach((le,ge)=>{le.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",le.style.animationDelay=`${Math.min(ge*50,400)}ms`})})},x=[...U].map(y=>{const T=te[y]||y.replace(/^[a-z]+_/,"").toUpperCase(),B=Ge.find(K=>K.key===y),N=B?B.group:"default";return`<button class="glb__sport-chip" data-sport="${y}">
                                <bma-sport-icon sport="${y}" data-sport-group="${N}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${T}</span>
                            </button>`}).join("");Z.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${X.map((y,T)=>`
                                    <button class="glb__tab ${T===0?"glb__tab--active":""}" data-tab="${y.id}">${y.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${x}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const O=document.createElement("style");O.textContent=`
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
                        `,Z.prepend(O),ie("overall"),Z.querySelectorAll(".glb__tab").forEach(y=>{y.addEventListener("click",()=>{Z.querySelectorAll(".glb__tab").forEach(N=>N.classList.remove("glb__tab--active")),y.classList.add("glb__tab--active");const T=y.dataset.tab,B=Z.querySelector(".glb__sport-filters");B&&(B.style.display=T==="bysport"?"flex":"none"),ie(T,T==="bysport"?oe:void 0)})}),Z.querySelectorAll(".glb__sport-chip").forEach(y=>{y.addEventListener("click",()=>{Z.querySelectorAll(".glb__sport-chip").forEach(T=>T.classList.remove("glb__sport-chip--active")),y.classList.add("glb__sport-chip--active"),oe=y.dataset.sport,ie("bysport",oe)})})}catch(D){console.error("[appEvents] Error fetching global leaderboard:",D);const L=document.getElementById("global-leaderboard-container");L&&(L.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>')}}},setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){window._renderTopPlayers&&await window._renderTopPlayers()},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}};class qv extends HTMLElement{constructor(){super(),this.selectedItem="foot_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count","data-private-count","data-invites-count"]}attributeChangedCallback(e,a,s){a!==s&&(e==="data-selected-item"&&(this.selectedItem=s||"foot_lobby"),this.shadowRoot&&this.render())}handleItemClick(e,a){this.selectedItem=e,this.setAttribute("data-selected-item",e),de.publish(a,JSON.stringify({item:e,timestamp:Date.now()})),this.render()}render(){Me.theme;const e=Me.isDark,a=[{name:"foot_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.LOBBY"},{name:"foot_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.FOOT.TOURNEYS"},{name:"foot_private",caption:"Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.PRIVATE"},{name:"foot_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_profile",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}],s=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,r=parseInt(this.getAttribute("data-invites-count"))||0,o=i=>{const l=this.selectedItem===i.name;let c="";return i.name==="foot_tourneys"?c=`<span class="nav-badge">${s}</span>`:i.name==="foot_private"&&(c=`<span class="nav-badge">${n}</span>`,r>0&&(c+=`<span class="nav-badge nav-badge--invite" aria-label="${r} pending invite${r===1?"":"s"}">${r}</span>`)),`
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
        ${qe()}
        ${ga()}

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
          /* Force own compositing layer so iOS Safari paints the foot
             above any scrolling sibling content. Without this the foot
             can be partially occluded by content from a sibling
             overflow-y: auto container due to a known paint-order bug
             when the body has overflow: hidden. */
          transform: translateZ(0);
          will-change: transform;
        }

        /* Show only on mobile */
        @media ${ic.mobile} {
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
          background-image: var(--nav-icon__trophy--${e?"dark":"light"});
        }

        /* My Tourneys — Material Symbols "calendar_today" inlined. */
        .nav-icon[data-icon-var="--nav-icon__my_tourneys--"] {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='${e?"%23fff":"%23000"}' viewBox='0 -960 960 960'%3E%3Cpath d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80zm0-80h560v-400H200zm0-480h560v-80H200zm0 0v-80z'/%3E%3C/svg%3E");
        }

        .nav-icon[data-icon-var="--nav-icon__trophy--"] {
          background-image: var(--nav-icon__person_celebrate--${e?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__leaderboard--"] {
          background-image: var(--nav-icon__social_leaderboard--${e?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__my_profile_circle--"] {
          background-image: var(--nav-icon__account_circle--${e?"dark":"light"});
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
        ${a.map(i=>o(i)).join("")}
      </div>
    `,a.forEach(i=>{const l=this.shadowRoot.querySelector(`[data-item="${i.name}"]`);l&&(l.addEventListener("click",()=>this.handleItemClick(i.name,i.topic)),l.addEventListener("keypress",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.handleItemClick(i.name,i.topic))}))})}}customElements.define("bma-app-foot",qv);const Vv=["data-selected-item"],Yv={__name:"App",setup(t){const e=ct(),a=xs(),s=xe(),n=_e(()=>{const c=a.name;return c==="home_route"||c==="top_players_route"}),r=Pe("foot_lobby"),o=c=>c==="my"?"foot_tourneys":c==="private"?"foot_private":"foot_lobby",i=()=>{const c=window.location.hash||"";if(c.startsWith("#/top_players_route"))r.value="foot_leaderboard";else if(c.startsWith("#/home_route")||c==="#/"||!c){const u=document.body.dataset.tournFilter||"lobby";r.value=o(u)}};Fa(()=>a.name,()=>i(),{immediate:!0});let l=null;return lt(()=>{l=de.subscribe("ROUTE.HOME_HYDRATE",()=>i())}),Bt(()=>{l&&de.unsubscribe(l)}),lt(()=>{setTimeout(()=>{const c=s.appSession?.session_user?.guid,u=s.appSession?.session_user?.authenticated;c&&u&&s.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",c),ln.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",c,s,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((c=null)=>{e.currentRoute.value?.meta?.previewAllowed||(neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${c}`,"primary"),e.push({name:c}))}).setOnState((c=null)=>{c&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=c)}).init({BASE:Te.API_baseURI})},2e3),setTimeout(()=>{Ce.bindAppListeners(s)},3e3),e.beforeEach((c,u,d)=>{if(c.name==="splash_route")return li(is.AUTHED),d();if(!c.name)return d(!1);const p=nh(c.name,c.meta);if(li(p),p===is.DENIED)return d(!1);d()}),(c,u)=>(pe(),fe($e,null,[tt(ot(ac),null,{default:ir(({Component:d})=>[tt(Iu,{name:"slide-left"},{default:ir(()=>[(pe(),Ll(Bd(d)))]),_:2},1024)]),_:1}),n.value?(pe(),fe("bma-app-foot",{key:0,"data-selected-item":r.value},null,8,Vv)):ke("",!0)],64))}};class Kv extends HTMLElement{constructor(){super()}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name","data-active-count","data-td-dollars"]}attributeChangedCallback(e,a,s){this.shadowRoot&&a!==s&&this.render()}handleLogoClick(e){e.preventDefault(),de.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(e){e.preventDefault(),de.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}handleCreateContestClick(e){e.preventDefault(),de.publish("WC.APP.HEAD_TOP.CREATE_CONTEST",JSON.stringify({timestamp:Date.now()}))}render(){const e=Me.isDark,a=this.getAttribute("data-user-name")||"Guest",s=this.getAttribute("data-active-count")||"0",n=parseFloat(this.getAttribute("data-td-dollars")||"0"),r=n>=1e3?`${Math.round(n/100)/10}K`:Math.round(n).toLocaleString();this.shadowRoot.innerHTML=`
      <style>
        ${qe()}
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
          background-image: var(--nav-icon__account_circle--${e?"dark":"vlight"});
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
    `;const o=this.shadowRoot.querySelector("#logoLink"),i=this.shadowRoot.querySelector("#profileIcon"),l=this.shadowRoot.querySelector("#createContestBtn");o&&o.addEventListener("click",c=>this.handleLogoClick(c)),i&&i.addEventListener("click",c=>this.handleProfileClick(c)),l&&l.addEventListener("click",c=>this.handleCreateContestClick(c))}}customElements.define("bma-app-head-top",Kv);class Wv extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count","data-private-count","data-invites-count"]}attributeChangedCallback(e,a,s){a!==s&&(e==="data-selected-tab"&&(this.selectedTab=s||"head_mid_lobby"),this.shadowRoot&&this.render())}handleTabClick(e,a){this.selectedTab=e,this.setAttribute("data-selected-tab",e),de.publish(a,JSON.stringify({tab:e,timestamp:Date.now()})),this.render()}render(){const e=Me.isDark,a=[{name:"head_mid_lobby",caption:"Lobby",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_tourneys",caption:"My Tourneys",iconVar:"--nav-icon__my_tourneys--",topic:"WC.APP.HEAD_MID.HEAD_MID_TOURNEYS"},{name:"head_mid_private",caption:"Bet Max Pools",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_PRIVATE"},{name:"head_mid_leaderboard",caption:"Top Players",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}],s=parseInt(this.getAttribute("data-active-count"))||0,n=parseInt(this.getAttribute("data-private-count"))||0,r=parseInt(this.getAttribute("data-invites-count"))||0,o=i=>{const l=this.selectedTab===i.name;let c="";return i.name==="head_mid_tourneys"?c=`<span class="nav-badge">${s}</span>`:i.name==="head_mid_private"&&(c=`<span class="nav-badge">${n}</span>`,r>0&&(c+=`<span class="nav-badge nav-badge--invite" aria-label="${r} pending invite${r===1?"":"s"}">${r}</span>`)),`
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
        ${qe()}
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
        @media ${ic.mobile} {
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
          background-image: var(--nav-icon__trophy--${e?"dark":"light"});
        }

        /* My Tourneys — Material Symbols "calendar_today" inlined.
           Reads as "my schedule of contests"; kept local to this component
           to avoid adding a shared CSS var just for one tab. */
        .nav-icon[data-icon-var="--nav-icon__my_tourneys--"] {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='${e?"%23fff":"%23000"}' viewBox='0 -960 960 960'%3E%3Cpath d='M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80zm0-80h560v-400H200zm0-480h560v-80H200zm0 0v-80z'/%3E%3C/svg%3E");
        }

        .nav-icon[data-icon-var="--nav-icon__trophy--"] {
          background-image: var(--nav-icon__person_celebrate--${e?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__leaderboard--"] {
          background-image: var(--nav-icon__social_leaderboard--${e?"dark":"light"});
        }

        .nav-icon[data-icon-var="--nav-icon__my_profile_circle--"] {
          background-image: var(--nav-icon__account_circle--${e?"dark":"light"});
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
        ${a.map(i=>o(i)).join("")}
      </div>
    `,a.forEach(i=>{const l=this.shadowRoot.querySelector(`[data-tab="${i.name}"]`);l&&(l.addEventListener("click",()=>this.handleTabClick(i.name,i.topic)),l.addEventListener("keypress",c=>{(c.key==="Enter"||c.key===" ")&&(c.preventDefault(),this.handleTabClick(i.name,i.topic))}))})}}customElements.define("bma-app-head-mid",Wv);class Jv extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(e,a,s){if(this.shadowRoot&&a!==s){if(e==="data-selected-chip"){if(this.selectedChip=s||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(e,a){Date.now()<this.suppressClickUntil||(this.selectedChip=e,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",e),this.updateChipSelection(),de.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:e,group:a,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const e=this.shadowRoot?.querySelectorAll(".sport-chip");return e?.length?(e.forEach(a=>{const s=a.getAttribute("data-chip")===this.selectedChip;a.classList.toggle("chip-selected",s),a.classList.toggle("chip-unselected",!s)}),!0):!1}updateRailState(){const e=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(".head-sports-container"),n=this.shadowRoot?.querySelector("#navPrev"),r=this.shadowRoot?.querySelector("#navNext");if(!e||!a||!s||!n||!r)return;const o=Math.max(0,e.scrollWidth-e.clientWidth),i=o>8,l=e.scrollLeft<=4,c=e.scrollLeft>=o-4;s.classList.toggle("rail-has-overflow",i),e.classList.toggle("has-scroll",i),a.classList.toggle("has-overflow",i),a.classList.toggle("has-left-overflow",i&&!l),a.classList.toggle("has-right-overflow",i&&!c),n.classList.toggle("nav-disabled",!i||l),r.classList.toggle("nav-disabled",!i||c),n.setAttribute("aria-disabled",String(!i||l)),r.setAttribute("aria-disabled",String(!i||c)),n.tabIndex=!i||l?-1:0,r.tabIndex=!i||c?-1:0}alignSelectedChip(){const e=this.shadowRoot?.querySelector(".chips-container"),a=this.shadowRoot?.querySelector(".chips-wrapper"),s=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!e||!a||!s)return;const n=a.getBoundingClientRect(),r=s.getBoundingClientRect(),o=e.scrollWidth-e.clientWidth;if(r.left>=n.left&&r.right<=n.right)return;const i=12;let l;r.left<n.left?l=e.scrollLeft+(r.left-n.left)-i:l=e.scrollLeft+(r.right-n.right)+i,l=Math.max(0,Math.min(l,o)),!(Math.abs(e.scrollLeft-l)<6)&&(this.skipSnapUntil=Date.now()+260,e.scrollTo({left:l,behavior:"smooth"}))}scrollToPrev(){const e=this.shadowRoot.querySelector(".chips-container");if(e){if(e.scrollLeft<=4)return;e.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const e=this.shadowRoot.querySelector(".chips-container");if(e){const a=Math.max(0,e.scrollWidth-e.clientWidth);if(e.scrollLeft>=a-4)return;e.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:e=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),e&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const e=this.shadowRoot?.querySelector(".chips-container");if(!e)return;const a=[...e.querySelectorAll(".sport-chip")];if(!a.length)return;const s=Math.max(0,e.scrollWidth-e.clientWidth);if(s<=8)return;const n=Number.parseFloat(getComputedStyle(e).paddingLeft)||0,r=e.scrollLeft;let o=r,i=Number.POSITIVE_INFINITY;a.forEach(l=>{const c=Math.max(0,Math.min(l.offsetLeft-n,s)),u=Math.max(0,Math.min(l.offsetLeft+l.offsetWidth-e.clientWidth+n,s));[c,u].forEach(d=>{const p=Math.abs(d-r);p<i&&(i=p,o=d)})}),!(i<8)&&(this.isSnapping=!0,e.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const e=this.shadowRoot.querySelector(".chips-container");if(!e)return;e.addEventListener("mousedown",s=>{this.isPointerDown=!0,e.style.cursor="grabbing",this.dragStartX=s.pageX-e.offsetLeft,this.dragStartScrollLeft=e.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),de.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const a=()=>{if(!this.isPointerDown)return;const s=Date.now()-this.dragStartTime,n=this.dragDistance>10||this.dragDistance>4&&s>180;this.isPointerDown=!1,e.style.cursor="grab",n&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};e.addEventListener("mouseleave",a),e.addEventListener("mouseup",a),e.addEventListener("mousemove",s=>{if(!this.isPointerDown)return;s.preventDefault();const r=(s.pageX-e.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(r)),e.scrollLeft=this.dragStartScrollLeft-r}),e.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const e=Me.isDark,n=(xe().appMeta?.sports||[]).filter(f=>f.active===!0),r=["NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],o=[...n].sort((f,g)=>{const m=f.title||f.description||"",v=g.title||g.description||"",h=r.indexOf(m),_=r.indexOf(v);return h!==-1&&_!==-1?h-_:h!==-1?-1:_!==-1?1:m.toLowerCase().localeCompare(v.toLowerCase())}),i=o.findIndex(f=>(f.title||f.description)==="NFL");if(i!==-1){const[f]=o.splice(i,1);let g=-1;o.forEach((v,h)=>{String(v.key||"").startsWith("soccer_fifa_world_cup")&&(g=h)});const m=g!==-1?g+1:o.length;o.splice(m,0,f)}const l=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...o],c=f=>{const g=this.selectedChip===f.key,m=f.key==="all";let v="";return m?v='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':v=`<bma-sport-icon sport="${f.key}" data-sport-group="${f.group}"></bma-sport-icon>`,`
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
        ${qe()}
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

        .nav-icon.nav-icon__prev { background-image: var(--nav-icon__chevron_prev--${e?"dark":"light"}); }
        .nav-icon.nav-icon__next { background-image: var(--nav-icon__chevron_next--${e?"dark":"light"}); }

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
    `,l.forEach(f=>{const g=this.shadowRoot.querySelector(`[data-chip="${f.key}"]`);g&&g.addEventListener("click",()=>this.handleChipClick(f.key,f.group))});const u=this.shadowRoot.querySelector("#navPrev"),d=this.shadowRoot.querySelector("#navNext");u&&u.addEventListener("click",()=>this.scrollToPrev()),d&&d.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const p=this.shadowRoot.querySelector(".chips-container");p&&(p.scrollLeft=0),requestAnimationFrame(()=>{p&&(p.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",Jv);class Xv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-matches","data-sync-theme"]}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(e,a,s){a!==s&&this.render()}get matches(){const e=this.getAttribute("data-matches");if(!e)return[];try{return JSON.parse(e)}catch{return[]}}_sportGroup(e){return Ge.find(s=>s.key===e)?.group||"default"}_parseScoreboard(e){const a=e.scoreboard_data;if(!a)return null;try{return typeof a=="string"?JSON.parse(a):a}catch{return null}}_getMatchDisplay(e){const a=this._parseScoreboard(e)||{},s=parseInt(a.home_score||0),n=parseInt(a.away_score||0),r=a.period||0,o=String(a.time_remaining||"").trim(),i=o.toLowerCase(),l=s>0||n>0||r>0,c=String(e.status||"").toUpperCase()==="COMPLETED"||i==="final",u=e.scheduled_at||e.start_time||"";let d=!1;if(u){const _=u.includes("Z")||/[+-]\d{2}:\d{2}$/.test(u),w=new Date(_?u:u+"Z").getTime();isNaN(w)||(d=w<=Date.now())}const f=!c&&(l||o&&i!=="scheduled"&&i!=="final"||d),g=e.home_team_id||e.home_team||"Home",m=e.away_team_id||e.away_team||"Away";if(c)return{homeName:g,awayName:m,homeScore:s,awayScore:n,statusLabel:"FINAL",statusClass:"final",showScores:!0};if(f)return{homeName:g,awayName:m,homeScore:s,awayScore:n,statusLabel:o&&i!=="in progress"?o:"LIVE",statusClass:"live",showScores:!0};const v=e.scheduled_at||e.start_time||e.status_time;let h="UPCOMING";if(v)try{const _=v.includes("Z")||/[+-]\d{2}:\d{2}$/.test(v),w=new Date(_?v:v+"Z");isNaN(w.getTime())||(h=w.toLocaleString(void 0,{weekday:"short",hour:"numeric",minute:"2-digit"}))}catch{}return{homeName:g,awayName:m,homeScore:0,awayScore:0,statusLabel:h,statusClass:"upcoming",showScores:!1}}render(){const e=Date.now(),a=1440*60*1e3,s=2880*60*1e3,r=this.matches.map(c=>({match:c,display:this._getMatchDisplay(c)})).filter(c=>c.display!==null).filter(c=>{const u=c.display.statusClass;if(u==="live")return!0;const d=new Date(c.match.scheduled_at||c.match.status_time||0).getTime();return d?u==="final"?e-d<=a:u==="upcoming"?d-e<=s&&d>=e:!1:!1}),o={live:0,final:1,upcoming:2};r.sort((c,u)=>{const d=o[c.display.statusClass]??9,p=o[u.display.statusClass]??9;if(d!==p)return d-p;const f=new Date(c.match.scheduled_at||c.match.status_time||0).getTime(),g=new Date(u.match.scheduled_at||u.match.status_time||0).getTime();return c.display.statusClass==="upcoming"?f-g:g-f});const i=r.slice(0,40);if(i.length===0){this.shadowRoot.innerHTML="";return}const l=i.map(({match:c,display:u})=>{const d=this._sportGroup(c.sport_id),p=f=>u.showScores?`<span class="score-pill__score">${f}</span>`:"";return`
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
                ${qe()}
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
        `,this.shadowRoot.querySelectorAll(".score-pill").forEach(c=>{c.addEventListener("click",()=>{const u=c.dataset.matchGuid;de.publish("SCORES.MATCH_CLICK",JSON.stringify({matchGuid:u,timestamp:Date.now()}))})})}_abbr(e){if(!e)return"";const a=String(e);if(a.length<=14)return a;const s=a.split(" ");return s.length>1?s[s.length-1].slice(0,14):a.slice(0,14)}}customElements.define("bma-scores-banner",Xv);class Qv extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this._unsub=Me.subscribe(()=>this.render()),this.render()}disconnectedCallback(){this._unsub&&this._unsub()}_doLogout(){de.publish("ROUTE.HOME.USER_PROFILE.SIGNOUT",JSON.stringify({ts:Date.now()}))}render(){let e="";try{e=xe().appSession?.session_app?.version||""}catch{}this.shadowRoot.innerHTML=`
            <style>
                ${qe()}
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
                            ${e?`<span>v${e}</span>`:""}
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
        `;const a=this.shadowRoot.querySelector(".foot-logout");a&&a.addEventListener("click",()=>this._doLogout())}}customElements.define("bma-app-foot-branded",Qv);const Zv='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15 14"/></svg>',Ds='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 7"/></svg>',Rs='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',Is='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/></svg>';class ey extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip","data-bma-mode-token"]}attributeChangedCallback(e,a,s){a!==s&&this.render()}get betSlipData(){const e=this.getAttribute("data-corebetslip");if(!e)return null;try{return JSON.parse(e)}catch(a){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",a),null}}render(){const e=this.betSlipData;if(!e){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const a=e.bet||[];if(a.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const s=a[0],n=s.short_title||"Match Info N/A",o=Object.keys(s).filter(F=>F!=="short_title")[0]||"Unknown Team",i=s[o]||{},l=o==="Draw"?"Tie":o,c=i.odds??"N/A",u=(i.type||"N/A").toUpperCase(),d=parseFloat(i.stake||0),p=parseFloat(i.payout||0),f=i.reconciled!==!1,g=.01;let m,v,h;if(!f)m="pending",v="Pending",h=Zv;else if(i.outcome)switch(i.outcome){case"WIN":m="won",v="Won",h=Ds;break;case"HALF_WIN":m="half_won",v="Half Win",h=Ds;break;case"PUSH":m="push",v="Push",h=Is;break;case"VOIDED":m="voided",v="Voided",h=Is;break;case"HALF_LOSS":m="half_lost",v="Half Loss",h=Rs;break;case"LOSS":m="lost",v="Lost",h=Rs;break;default:p>d+g?(m="won",v="Won",h=Ds):p<d-g?(m="lost",v="Lost",h=Rs):(m="push",v="Push",h=Is)}else p>d+g?(m="won",v="Won",h=Ds):p<d-g?(m="lost",v="Lost",h=Rs):(m="push",v="Push",h=Is);let _=l;if(i.type==="spread"&&i.point!==void 0){const F=parseFloat(i.point);if(F===0)_=`${l} (DNB)`;else{const q=F>0?`+${F}`:`${F}`;_=`${l} ${q}`}}else i.type==="total"&&i.point!==void 0&&(_=`${i.team==="over"?"Over":"Under"} ${i.point}`);const w=F=>`TD$ ${F.toFixed(2)}`,E=p-d;let I="";if(m==="won"||m==="half_won"){const F=parseFloat(c)||0;if(Number.isFinite(F)&&F!==0&&d>0&&p>0){const q=F>0?d*F/100:d/(Math.abs(F)/100),P=d+q;if(P>0&&p>P+.005){const A=p/P,S=parseFloat(A.toFixed(2)).toString(),D=this.getAttribute("data-bma-mode-token")||"";let L="Bonus";if(D&&window.GameTypeLifeCycle?.forToken)try{const Y=window.GameTypeLifeCycle.forToken(D);Y?.bonusLabel&&(L=Y.bonusLabel)}catch{}I=`${L} ${S}×`}}}let R,C;switch(m){case"pending":R=E>0?`+${w(E)}`:w(0),C="To win";break;case"won":R=`+${w(E)}`,C="Profit";break;case"half_won":R=`+${w(E)}`,C="Half Profit";break;case"lost":R=`-${w(d)}`,C="Lost";break;case"half_lost":R=`-${w(d-p)}`,C="Half Lost";break;case"push":R=w(d),C="Returned";break;case"voided":R=w(d),C="Refund";break}const H=parseInt(c,10),$=Number.isFinite(H)&&H>0?`+${H}`:`${c}`,G=e.status_time?bs.formatDateLocal(e.status_time):"",j=m==="pending"?"Placed":"Settled";this.shadowRoot.innerHTML=`
      <style>
        ${qe()}

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

      <div class="card ${m}">
        <div class="pill">
          <span class="pill-dot"></span>
          <span class="pill-icon">${h}</span>
          <span class="pill-label">${v}</span>
        </div>
        <div class="body">
          <div class="header">
            <div class="match-desc">${n}</div>
          </div>
          <div class="middle">
            <div class="selection">${_}</div>
            <div class="odds">${$}</div>
            <div class="side-meta">
              <div class="bet-type">${u}</div>
              <div class="stake">${w(d)} stake</div>
            </div>
          </div>
          <div class="footer">
            <div class="hero">
              <span>${R}</span>
              ${I?`<span class="hero-mult">${I}</span>`:""}
            </div>
            <div class="footer-meta">
              <div class="hero-sublabel">${C}</div>
              <div class="timestamp">${j} · ${G}</div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("bma-bet-existing",ey);class ty extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-game-mode-class","data-starting-td","data-tags","data-bets"]}connectedCallback(){this.render()}attributeChangedCallback(e,a,s){a!==s&&this.shadowRoot&&this.render()}_readJSONAttr(e){const a=this.getAttribute(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}}_totalStakes(e){let a=0;for(const s of e||[]){const n=s?.bet||[];for(const r of n)for(const o of Object.keys(r)){if(o==="short_title")continue;const i=r[o],l=parseFloat(i?.stake||0);isNaN(l)||(a+=l)}}return a}render(){const e=this.getAttribute("data-game-mode-class")||"DEFAULT_FORMAT",a=parseFloat(this.getAttribute("data-starting-td")||0),s=this._readJSONAttr("data-tags")||[],n=this._readJSONAttr("data-bets")||[],r=typeof window<"u"&&window.GameTypeLifeCycle?window.GameTypeLifeCycle.forToken(e)||window.GameTypeLifeCycle.forTournament({class:e}):null;if(!r||typeof r.getProgressUI!="function"){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}const o={tournament_dollars:a,tags:s},i=r.getProgressUI(n,o);if(!i||i.type==="NONE"){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}if(this.removeAttribute("hidden"),i.type==="LONGSHOT"){const g=!!(i.spendAll&&!i.stakeComplete&&i.startingTD>0);this.shadowRoot.innerHTML=`
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
      `;return}if(i.type==="TIERED"){const g=JSON.stringify(i.tierMultipliers||[1,1.5,2,3]),m=JSON.stringify(i.tierLabels||["Bronze","Silver","Gold","Platinum"]);this.shadowRoot.innerHTML=`
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
          data-tier-labels='${m}'
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
    `}}customElements.define("bma-game-mode-progress",ty);class ay extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-threshold","data-ratio","data-spend-all","data-starting-td","data-total-stakes","data-stake-remaining"]}connectedCallback(){this.render()}attributeChangedCallback(e,a,s){a!==s&&this.shadowRoot&&this.render()}_readNum(e,a){const s=parseFloat(this.getAttribute(e));return Number.isFinite(s)?s:a}render(){const e=this._readNum("data-threshold",150),a=this._readNum("data-ratio",.25),s=this.getAttribute("data-spend-all")==="true",n=this._readNum("data-starting-td",0),r=this._readNum("data-total-stakes",0),o=this._readNum("data-stake-remaining",0),i=e>=0?`+${e}`:`${e}`,l=Math.round(a*100),c=s&&o>.01&&n>0,u=d=>`TD$ ${Math.round(d).toLocaleString()}`;this.shadowRoot.innerHTML=`
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
            <span class="hint__line">Bet <strong>${u(o)}</strong> more to qualify</span>
            <span class="hint__sub">${u(r)} of ${u(n)} placed · spend all to finish on the leaderboard</span>
          </div>
        `:""}
      </div>
    `}}customElements.define("bma-longshot-chip",ay);const ar={Bronze:"#CD7F32",Silver:"#B5BCC2",Gold:"#F7C60D",Platinum:"#DDE6F0",Diamond:"#9FE7FF"};class sy extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-current-tier-index","data-current-tier-label","data-current-multiplier","data-current-streak","data-wins-to-next","data-next-tier-label","data-next-multiplier","data-tier-multipliers","data-tier-labels","data-threshold","data-at-max"]}connectedCallback(){this.render()}attributeChangedCallback(e,a,s){a!==s&&this.shadowRoot&&this.render()}_readJSON(e,a){const s=this.getAttribute(e);if(!s)return a;try{return JSON.parse(s)}catch{return a}}_readNum(e,a){const s=parseFloat(this.getAttribute(e));return Number.isFinite(s)?s:a}_readInt(e,a){const s=parseInt(this.getAttribute(e)||"",10);return Number.isFinite(s)?s:a}render(){const e=this._readInt("data-current-tier-index",0),a=this.getAttribute("data-current-tier-label")||"Bronze",s=this._readNum("data-current-multiplier",1),n=this._readInt("data-current-streak",0),r=this._readInt("data-wins-to-next",-1),o=this.getAttribute("data-next-tier-label")||"",i=this._readJSON("data-tier-multipliers",[1,1.5,2,3]),l=this._readJSON("data-tier-labels",["Bronze","Silver","Gold","Platinum"]),c=this.getAttribute("data-at-max")==="true",u=ar[a]||"#F7C60D",d=g=>Number.isInteger(g)?`${g}×`:`${g}×`,p=i.map((g,m)=>{const v=l[m]||`Tier ${m+1}`,h=ar[v]||"#F7C60D",_=m===e,w=m<e;return`
        <div class="ladder__cell ${_?"ladder__cell--current":""}">
          <span class="${_?"dot dot--current":w?"dot dot--past":"dot dot--future"}" style="--tier-color: ${h};"></span>
          <span class="ladder__label" style="${_?`color: ${h};`:""}">${v}</span>
          <span class="ladder__mult">${d(g)}</span>
        </div>
      `}).join('<span class="ladder__connector" aria-hidden="true"></span>'),f=c?`<span class="hint__line">Max tier reached — every win pays at <strong style="color:${u};">${d(s)}</strong></span>`:r>=0?`<span class="hint__line">${r} ${r===1?"win":"wins"} from <strong style="color:${ar[o]||"#F7C60D"};">${o}</strong></span>
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
    `}}customElements.define("bma-tier-meter",sy);const ny="bma-beta-banner-dismissed:";class ry extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-tournament-guid","data-mode-token","data-mode-label","data-beta-message"]}connectedCallback(){this.render()}attributeChangedCallback(e,a,s){a!==s&&this.shadowRoot&&this.render()}_storageKey(){const e=this.getAttribute("data-tournament-guid")||"";return e?`${ny}${e}`:null}_isDismissed(){const e=this._storageKey();if(!e)return!1;try{return localStorage.getItem(e)==="1"}catch{return!1}}_markDismissed(){const e=this._storageKey();if(e)try{localStorage.setItem(e,"1")}catch{}}render(){const e=this.getAttribute("data-mode-token")||"",a=this.getAttribute("data-mode-label")||e,s=this.getAttribute("data-beta-message")||"";if(!this.getAttribute("data-tournament-guid")||!s){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}if(this._isDismissed()){this.setAttribute("hidden",""),this.shadowRoot.innerHTML="";return}this.removeAttribute("hidden"),this.shadowRoot.innerHTML=`
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
        `;const n=this.shadowRoot.querySelector(".dismiss");n&&n.addEventListener("click",()=>{this._markDismissed(),this.setAttribute("hidden",""),this.shadowRoot.innerHTML=""})}_escape(e){return String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}}customElements.define("bma-mode-beta-banner",ry);class oy extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-invite-guid","data-tournament-caption","data-invited-by-name","data-expires-at","data-sport-key","data-sport-group","data-entrants-count","data-entrants-max","data-window-start"]}connectedCallback(){this.render()}attributeChangedCallback(e,a,s){a!==s&&this.shadowRoot&&this.render()}_formatCountdown(e){if(!e)return{text:"",level:"normal"};let a=new Date(e);if(!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(e+"Z")),isNaN(a.getTime()))return{text:"",level:"normal"};const s=a.getTime()-Date.now();if(s<=0)return{text:"Expired",level:"critical"};const n=Math.floor(s/6e4),r=Math.floor(n/60),o=Math.floor(r/24);return o>=2?{text:`Expires in ${o}d`,level:"normal"}:r>=1?{text:`Expires in ${r}h`,level:"normal"}:n>=1?{text:`Expires in ${n}m`,level:"warn"}:{text:"Expires soon",level:"critical"}}_formatDay(e){if(!e)return"";let a=new Date(e);return!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(a=new Date(e+"Z")),isNaN(a.getTime())?"":a.toLocaleDateString(void 0,{weekday:"short",month:"short",day:"numeric"})}render(){const e=this.getAttribute("data-invite-guid")||"",a=this.getAttribute("data-tournament-caption")||"Bet Max Pool",s=this.getAttribute("data-invited-by-name")||"Someone",n=this.getAttribute("data-expires-at")||"",r=this.getAttribute("data-sport-key")||"",o=this.getAttribute("data-sport-group")||"",i=this.getAttribute("data-entrants-count")||"0",l=this.getAttribute("data-entrants-max")||"0",c=this.getAttribute("data-window-start")||"",{text:u,level:d}=this._formatCountdown(n),p=d!=="normal"?`countdown--${d}`:"",f=r?`<bma-sport-icon sport="${r}" data-sport-group="${o}"></bma-sport-icon>`:"",g=c?this._formatDay(c):"";this.shadowRoot.innerHTML=`
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

      <article class="card" data-invite-guid="${e}">
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
    `,this.shadowRoot.querySelectorAll("[data-action]").forEach(m=>{m.addEventListener("click",()=>{const v=m.dataset.action;this.dispatchEvent(new CustomEvent(`invite-${v}`,{detail:{inviteGuid:e},bubbles:!0,composed:!0}))})})}}customElements.define("bma-invite-card",oy);class iy extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._selected="all"}static get observedAttributes(){return["data-sports","data-selected"]}connectedCallback(){this.render(),this._themeUnsub=Me.subscribe(()=>this.render())}disconnectedCallback(){this._themeUnsub&&this._themeUnsub()}attributeChangedCallback(e,a,s){if(a!==s){if(e==="data-selected"){const n=s||"all";if(this._selected===n)return;this._selected=n,this.shadowRoot&&this._syncChipStates();return}this.shadowRoot&&this.render()}}_syncChipStates(){this.shadowRoot.querySelectorAll("[data-chip]").forEach(e=>{const a=e.dataset.chip===this._selected;e.classList.toggle("chip--selected",a),e.setAttribute("aria-pressed",String(a))}),this._scrollSelectedIntoView()}_scrollSelectedIntoView(){this.isConnected&&requestAnimationFrame(()=>{const e=this.shadowRoot.querySelector(".rail-scroller"),a=this.shadowRoot.querySelector(".chip--selected");if(!e||!a)return;const s=a.offsetLeft,n=a.offsetWidth,r=e.clientWidth,o=e.scrollLeft;if(s>=o&&s+n<=o+r)return;const i=s-(r-n)/2;e.scrollTo({left:Math.max(0,i),behavior:"smooth"})})}get sports(){const e=this.getAttribute("data-sports");if(!e)return[];try{const a=JSON.parse(e);return Array.isArray(a)?a:[]}catch{return[]}}handleChipClick(e,a){this._selected!==e&&(this._selected=e,this._syncChipStates(),this.setAttribute("data-selected",e),this.dispatchEvent(new CustomEvent("sport-rail-change",{bubbles:!0,composed:!0,detail:{key:e,group:a||""}})))}handleArrowClick(e){const a=this.shadowRoot.querySelector(".rail-scroller");if(!a)return;const s=Math.max(160,a.clientWidth*.6);a.scrollBy({left:e==="next"?s:-s,behavior:"smooth"})}render(){const e=this.sports,a=[{key:"all",title:"All",group:"All"},...e],s=n=>{const r=this._selected===n.key,i=n.key==="all"?'<svg class="all-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 6h16v2H4zM4 11h16v2H4zM4 16h16v2H4z"/></svg>':`<bma-sport-icon sport="${n.key}" data-sport-group="${n.group||""}"></bma-sport-icon>`;return`
        <button
          type="button"
          class="chip ${r?"chip--selected":""}"
          data-chip="${n.key}"
          data-chip-group="${n.group||""}"
          aria-pressed="${r}"
        >
          <span class="chip__icon">${i}</span>
          <span class="chip__label">${n.title||n.group||n.key}</span>
        </button>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${qe()}

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
    `,this.shadowRoot.querySelectorAll("[data-chip]").forEach(n=>{n.addEventListener("click",()=>{this.handleChipClick(n.dataset.chip,n.dataset.chipGroup)})}),this.shadowRoot.querySelectorAll("[data-rail-arrow]").forEach(n=>{n.addEventListener("click",()=>this.handleArrowClick(n.dataset.railArrow))}),this._scrollSelectedIntoView()}}customElements.define("bma-play-sport-rail",iy);ja.init();window.BrandManager=ja;(async()=>{const t=()=>{const e=window.BMACOREAPI;return e?.API_baseURI?`${e.API_baseURI}/m5t/${e.API_ver||"v5"}`:"https://machfive-bmacdev-rest.onrender.com/m5t/v5"};try{const[e,a,s]=await Promise.all([An(()=>Promise.resolve().then(()=>Hv),void 0),An(()=>Promise.resolve().then(()=>bg),void 0),An(()=>import("./SportMarkets-C37he7Ah.js"),[])]);a.configureClientMeter({baseUrl:t,getToken:()=>localStorage.getItem("authToken")||null,debug:!1}),e.default.configureMeter(a.clientMeter),e.default.configureSportMarkets(n=>s.default.get(n)),s.default.init({baseUrl:t}).catch(n=>{console.warn("[SportMarkets] background init failed (non-fatal):",n?.message)}),window.GameTypeLifeCycle=e.default,window.SportMarkets=s.default,console.log("[GameTypeLifeCycle] client meter wired. Tokens:",e.default.TOKENS)}catch(e){console.warn("[GameTypeLifeCycle] boot failed (non-fatal):",e?.message)}})();const wi=`
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",wi)}):document.body.insertAdjacentHTML("beforeend",wi);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",t=>{console.log("[Global] beforeinstallprompt event fired"),t.preventDefault(),window.deferredPWAPrompt=t,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const En=ip(Yv);En.config.devtools=!1;En.use(dp());En.use(ls);En.mount("#app");(function(){let e=!1;const a=o=>{if(!e)return;const i=o.target;i&&typeof i.closest=="function"&&i.closest("neodigm-sodapop")||o.preventDefault()},s=()=>{const o=e,i=!!document.querySelector("neodigm-sodapop-scrim[data-n55-sodapop-scrim='opened']");if(e=i,document.body.style.touchAction=i?"none":"",document.documentElement.style.overscrollBehavior=i?"none":"",o&&!i){const l=document.querySelector("bma-app-foot");l&&l.setAttribute("data-selected-item","foot_lobby");const c=document.querySelector("bma-app-head-mid");c&&c.setAttribute("data-selected-tab","head_mid_lobby")}},n=new MutationObserver(s),r=()=>{n.observe(document.body,{attributes:!0,subtree:!0,attributeFilter:["data-n55-sodapop-scrim"]}),document.addEventListener("touchmove",a,{passive:!1,capture:!0}),s()};document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r()})();document.addEventListener("gesturestart",function(t){t.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(t){t.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(t){t.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let t=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{t||(t=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(e=>{e?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",t=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(a=>{neodigmCarousel.init().nav({id:a.id,nav:"resize"},!1)})},303)})});
