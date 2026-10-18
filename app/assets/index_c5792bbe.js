(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();function Un(e){const t=Object.create(null);for(const s of e.split(","))t[s]=1;return s=>s in t}const we={},ws=[],vt=()=>{},Io=()=>!1,Oa=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Gn=e=>e.startsWith("onUpdate:"),Ce=Object.assign,jn=(e,t)=>{const s=e.indexOf(t);s>-1&&e.splice(s,1)},Pl=Object.prototype.hasOwnProperty,ve=(e,t)=>Pl.call(e,t),ce=Array.isArray,xs=e=>Zs(e)==="[object Map]",Ca=e=>Zs(e)==="[object Set]",br=e=>Zs(e)==="[object Date]",he=e=>typeof e=="function",Pe=e=>typeof e=="string",xt=e=>typeof e=="symbol",xe=e=>e!==null&&typeof e=="object",No=e=>(xe(e)||he(e))&&he(e.then)&&he(e.catch),Bo=Object.prototype.toString,Zs=e=>Bo.call(e),Ol=e=>Zs(e).slice(8,-1),Fo=e=>Zs(e)==="[object Object]",Yn=e=>Pe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Ds=Un(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),La=e=>{const t=Object.create(null);return(s=>t[s]||(t[s]=e(s)))},Cl=/-\w/g,rt=La(e=>e.replace(Cl,t=>t.slice(1).toUpperCase())),Ll=/\B([A-Z])/g,Zt=La(e=>e.replace(Ll,"-$1").toLowerCase()),Ra=La(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ka=La(e=>e?`on${Ra(e)}`:""),qt=(e,t)=>!Object.is(e,t),da=(e,...t)=>{for(let s=0;s<e.length;s++)e[s](...t)},$o=(e,t,s,a=!1)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,writable:a,value:s})},Rl=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Ml=e=>{const t=Pe(e)?Number(e):NaN;return isNaN(t)?e:t};let _r;const Ma=()=>_r||(_r=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vn(e){if(ce(e)){const t={};for(let s=0;s<e.length;s++){const a=e[s],n=Pe(a)?Bl(a):Vn(a);if(n)for(const r in n)t[r]=n[r]}return t}else if(Pe(e)||xe(e))return e}const Dl=/;(?![^(]*\))/g,Il=/:([^]+)/,Nl=/\/\*[^]*?\*\//g;function Bl(e){const t={};return e.replace(Nl,"").split(Dl).forEach(s=>{if(s){const a=s.split(Il);a.length>1&&(t[a[0].trim()]=a[1].trim())}}),t}function Jt(e){let t="";if(Pe(e))t=e;else if(ce(e))for(let s=0;s<e.length;s++){const a=Jt(e[s]);a&&(t+=a+" ")}else if(xe(e))for(const s in e)e[s]&&(t+=s+" ");return t.trim()}const Fl="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",$l=Un(Fl);function zo(e){return!!e||e===""}function zl(e,t){if(e.length!==t.length)return!1;let s=!0;for(let a=0;s&&a<e.length;a++)s=Da(e[a],t[a]);return s}function Da(e,t){if(e===t)return!0;let s=br(e),a=br(t);if(s||a)return s&&a?e.getTime()===t.getTime():!1;if(s=xt(e),a=xt(t),s||a)return e===t;if(s=ce(e),a=ce(t),s||a)return s&&a?zl(e,t):!1;if(s=xe(e),a=xe(t),s||a){if(!s||!a)return!1;const n=Object.keys(e).length,r=Object.keys(t).length;if(n!==r)return!1;for(const o in e){const l=e.hasOwnProperty(o),i=t.hasOwnProperty(o);if(l&&!i||!l&&i||!Da(e[o],t[o]))return!1}}return String(e)===String(t)}function Ho(e,t){return e.findIndex(s=>Da(s,t))}const Uo=e=>!!(e&&e.__v_isRef===!0),Go=e=>Pe(e)?e:e==null?"":ce(e)||xe(e)&&(e.toString===Bo||!he(e.toString))?Uo(e)?Go(e.value):JSON.stringify(e,jo,2):String(e),jo=(e,t)=>Uo(t)?jo(e,t.value):xs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((s,[a,n],r)=>(s[qa(a,r)+" =>"]=n,s),{})}:Ca(t)?{[`Set(${t.size})`]:[...t.values()].map(s=>qa(s))}:xt(t)?qa(t):xe(t)&&!ce(t)&&!Fo(t)?String(t):t,qa=(e,t="")=>{var s;return xt(e)?`Symbol(${(s=e.description)!=null?s:t})`:e};let De;class Yo{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=De,!t&&De&&(this.index=(De.scopes||(De.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].pause();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,s;if(this.scopes)for(t=0,s=this.scopes.length;t<s;t++)this.scopes[t].resume();for(t=0,s=this.effects.length;t<s;t++)this.effects[t].resume()}}run(t){if(this._active){const s=De;try{return De=this,t()}finally{De=s}}}on(){++this._on===1&&(this.prevScope=De,De=this)}off(){this._on>0&&--this._on===0&&(De=this.prevScope,this.prevScope=void 0)}stop(t){if(this._active){this._active=!1;let s,a;for(s=0,a=this.effects.length;s<a;s++)this.effects[s].stop();for(this.effects.length=0,s=0,a=this.cleanups.length;s<a;s++)this.cleanups[s]();if(this.cleanups.length=0,this.scopes){for(s=0,a=this.scopes.length;s<a;s++)this.scopes[s].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const n=this.parent.scopes.pop();n&&n!==this&&(this.parent.scopes[this.index]=n,n.index=this.index)}this.parent=void 0}}}function Vo(e){return new Yo(e)}function Ko(){return De}function Hl(e,t=!1){De&&De.cleanups.push(e)}let Te;const Wa=new WeakSet;class qo{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,De&&De.active&&De.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Wa.has(this)&&(Wa.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Jo(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,yr(this),Xo(this);const t=Te,s=lt;Te=this,lt=!0;try{return this.fn()}finally{Qo(this),Te=t,lt=s,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Wn(t);this.deps=this.depsTail=void 0,yr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Wa.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){vn(this)&&this.run()}get dirty(){return vn(this)}}let Wo=0,Is,Ns;function Jo(e,t=!1){if(e.flags|=8,t){e.next=Ns,Ns=e;return}e.next=Is,Is=e}function Kn(){Wo++}function qn(){if(--Wo>0)return;if(Ns){let t=Ns;for(Ns=void 0;t;){const s=t.next;t.next=void 0,t.flags&=-9,t=s}}let e;for(;Is;){let t=Is;for(Is=void 0;t;){const s=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(a){e||(e=a)}t=s}}if(e)throw e}function Xo(e){for(let t=e.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function Qo(e){let t,s=e.depsTail,a=s;for(;a;){const n=a.prevDep;a.version===-1?(a===s&&(s=n),Wn(a),Ul(a)):t=a,a.dep.activeLink=a.prevActiveLink,a.prevActiveLink=void 0,a=n}e.deps=t,e.depsTail=s}function vn(e){for(let t=e.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(Zo(t.dep.computed)||t.dep.version!==t.version))return!0;return!!e._dirty}function Zo(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===js)||(e.globalVersion=js,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!vn(e))))return;e.flags|=2;const t=e.dep,s=Te,a=lt;Te=e,lt=!0;try{Xo(e);const n=e.fn(e._value);(t.version===0||qt(n,e._value))&&(e.flags|=128,e._value=n,t.version++)}catch(n){throw t.version++,n}finally{Te=s,lt=a,Qo(e),e.flags&=-3}}function Wn(e,t=!1){const{dep:s,prevSub:a,nextSub:n}=e;if(a&&(a.nextSub=n,e.prevSub=void 0),n&&(n.prevSub=a,e.nextSub=void 0),s.subs===e&&(s.subs=a,!a&&s.computed)){s.computed.flags&=-5;for(let r=s.computed.deps;r;r=r.nextDep)Wn(r,!0)}!t&&!--s.sc&&s.map&&s.map.delete(s.key)}function Ul(e){const{prevDep:t,nextDep:s}=e;t&&(t.nextDep=s,e.prevDep=void 0),s&&(s.prevDep=t,e.nextDep=void 0)}let lt=!0;const ei=[];function It(){ei.push(lt),lt=!1}function Nt(){const e=ei.pop();lt=e===void 0?!0:e}function yr(e){const{cleanup:t}=e;if(e.cleanup=void 0,t){const s=Te;Te=void 0;try{t()}finally{Te=s}}}let js=0;class Gl{constructor(t,s){this.sub=t,this.dep=s,this.version=s.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Jn{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!Te||!lt||Te===this.computed)return;let s=this.activeLink;if(s===void 0||s.sub!==Te)s=this.activeLink=new Gl(Te,this),Te.deps?(s.prevDep=Te.depsTail,Te.depsTail.nextDep=s,Te.depsTail=s):Te.deps=Te.depsTail=s,ti(s);else if(s.version===-1&&(s.version=this.version,s.nextDep)){const a=s.nextDep;a.prevDep=s.prevDep,s.prevDep&&(s.prevDep.nextDep=a),s.prevDep=Te.depsTail,s.nextDep=void 0,Te.depsTail.nextDep=s,Te.depsTail=s,Te.deps===s&&(Te.deps=a)}return s}trigger(t){this.version++,js++,this.notify(t)}notify(t){Kn();try{for(let s=this.subs;s;s=s.prevSub)s.sub.notify()&&s.sub.dep.notify()}finally{qn()}}}function ti(e){if(e.dep.sc++,e.sub.flags&4){const t=e.dep.computed;if(t&&!e.dep.subs){t.flags|=20;for(let a=t.deps;a;a=a.nextDep)ti(a)}const s=e.dep.subs;s!==e&&(e.prevSub=s,s&&(s.nextSub=e)),e.dep.subs=e}}const ma=new WeakMap,ds=Symbol(""),wn=Symbol(""),Ys=Symbol("");function Ie(e,t,s){if(lt&&Te){let a=ma.get(e);a||ma.set(e,a=new Map);let n=a.get(s);n||(a.set(s,n=new Jn),n.map=a,n.key=s),n.track()}}function Lt(e,t,s,a,n,r){const o=ma.get(e);if(!o){js++;return}const l=i=>{i&&i.trigger()};if(Kn(),t==="clear")o.forEach(l);else{const i=ce(e),c=i&&Yn(s);if(i&&s==="length"){const d=Number(a);o.forEach((u,p)=>{(p==="length"||p===Ys||!xt(p)&&p>=d)&&l(u)})}else switch((s!==void 0||o.has(void 0))&&l(o.get(s)),c&&l(o.get(Ys)),t){case"add":i?c&&l(o.get("length")):(l(o.get(ds)),xs(e)&&l(o.get(wn)));break;case"delete":i||(l(o.get(ds)),xs(e)&&l(o.get(wn)));break;case"set":xs(e)&&l(o.get(ds));break}}qn()}function jl(e,t){const s=ma.get(e);return s&&s.get(t)}function gs(e){const t=ge(e);return t===e?t:(Ie(t,"iterate",Ys),ct(e)?t:t.map($e))}function Xn(e){return Ie(e=ge(e),"iterate",Ys),e}const Yl={__proto__:null,[Symbol.iterator](){return Ja(this,Symbol.iterator,$e)},concat(...e){return gs(this).concat(...e.map(t=>ce(t)?gs(t):t))},entries(){return Ja(this,"entries",e=>(e[1]=$e(e[1]),e))},every(e,t){return St(this,"every",e,t,void 0,arguments)},filter(e,t){return St(this,"filter",e,t,s=>s.map($e),arguments)},find(e,t){return St(this,"find",e,t,$e,arguments)},findIndex(e,t){return St(this,"findIndex",e,t,void 0,arguments)},findLast(e,t){return St(this,"findLast",e,t,$e,arguments)},findLastIndex(e,t){return St(this,"findLastIndex",e,t,void 0,arguments)},forEach(e,t){return St(this,"forEach",e,t,void 0,arguments)},includes(...e){return Xa(this,"includes",e)},indexOf(...e){return Xa(this,"indexOf",e)},join(e){return gs(this).join(e)},lastIndexOf(...e){return Xa(this,"lastIndexOf",e)},map(e,t){return St(this,"map",e,t,void 0,arguments)},pop(){return Os(this,"pop")},push(...e){return Os(this,"push",e)},reduce(e,...t){return vr(this,"reduce",e,t)},reduceRight(e,...t){return vr(this,"reduceRight",e,t)},shift(){return Os(this,"shift")},some(e,t){return St(this,"some",e,t,void 0,arguments)},splice(...e){return Os(this,"splice",e)},toReversed(){return gs(this).toReversed()},toSorted(e){return gs(this).toSorted(e)},toSpliced(...e){return gs(this).toSpliced(...e)},unshift(...e){return Os(this,"unshift",e)},values(){return Ja(this,"values",$e)}};function Ja(e,t,s){const a=Xn(e),n=a[t]();return a!==e&&!ct(e)&&(n._next=n.next,n.next=()=>{const r=n._next();return r.done||(r.value=s(r.value)),r}),n}const Vl=Array.prototype;function St(e,t,s,a,n,r){const o=Xn(e),l=o!==e&&!ct(e),i=o[t];if(i!==Vl[t]){const u=i.apply(e,r);return l?$e(u):u}let c=s;o!==e&&(l?c=function(u,p){return s.call(this,$e(u),p,e)}:s.length>2&&(c=function(u,p){return s.call(this,u,p,e)}));const d=i.call(o,c,a);return l&&n?n(d):d}function vr(e,t,s,a){const n=Xn(e);let r=s;return n!==e&&(ct(e)?s.length>3&&(r=function(o,l,i){return s.call(this,o,l,i,e)}):r=function(o,l,i){return s.call(this,o,$e(l),i,e)}),n[t](r,...a)}function Xa(e,t,s){const a=ge(e);Ie(a,"iterate",Ys);const n=a[t](...s);return(n===-1||n===!1)&&er(s[0])?(s[0]=ge(s[0]),a[t](...s)):n}function Os(e,t,s=[]){It(),Kn();const a=ge(e)[t].apply(e,s);return qn(),Nt(),a}const Kl=Un("__proto__,__v_isRef,__isVue"),si=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(xt));function ql(e){xt(e)||(e=String(e));const t=ge(this);return Ie(t,"has",e),t.hasOwnProperty(e)}class ai{constructor(t=!1,s=!1){this._isReadonly=t,this._isShallow=s}get(t,s,a){if(s==="__v_skip")return t.__v_skip;const n=this._isReadonly,r=this._isShallow;if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return r;if(s==="__v_raw")return a===(n?r?nc:ii:r?oi:ri).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(a)?t:void 0;const o=ce(t);if(!n){let i;if(o&&(i=Yl[s]))return i;if(s==="hasOwnProperty")return ql}const l=Reflect.get(t,s,ke(t)?t:a);if((xt(s)?si.has(s):Kl(s))||(n||Ie(t,"get",s),r))return l;if(ke(l)){const i=o&&Yn(s)?l:l.value;return n&&xe(i)?Tn(i):i}return xe(l)?n?Tn(l):Mt(l):l}}class ni extends ai{constructor(t=!1){super(!1,t)}set(t,s,a,n){let r=t[s];if(!this._isShallow){const i=fs(r);if(!ct(a)&&!fs(a)&&(r=ge(r),a=ge(a)),!ce(t)&&ke(r)&&!ke(a))return i||(r.value=a),!0}const o=ce(t)&&Yn(s)?Number(s)<t.length:ve(t,s),l=Reflect.set(t,s,a,ke(t)?t:n);return t===ge(n)&&(o?qt(a,r)&&Lt(t,"set",s,a):Lt(t,"add",s,a)),l}deleteProperty(t,s){const a=ve(t,s);t[s];const n=Reflect.deleteProperty(t,s);return n&&a&&Lt(t,"delete",s,void 0),n}has(t,s){const a=Reflect.has(t,s);return(!xt(s)||!si.has(s))&&Ie(t,"has",s),a}ownKeys(t){return Ie(t,"iterate",ce(t)?"length":ds),Reflect.ownKeys(t)}}class Wl extends ai{constructor(t=!1){super(!0,t)}set(t,s){return!0}deleteProperty(t,s){return!0}}const Jl=new ni,Xl=new Wl,Ql=new ni(!0);const xn=e=>e,aa=e=>Reflect.getPrototypeOf(e);function Zl(e,t,s){return function(...a){const n=this.__v_raw,r=ge(n),o=xs(r),l=e==="entries"||e===Symbol.iterator&&o,i=e==="keys"&&o,c=n[e](...a),d=s?xn:t?Sn:$e;return!t&&Ie(r,"iterate",i?wn:ds),{next(){const{value:u,done:p}=c.next();return p?{value:u,done:p}:{value:l?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function na(e){return function(...t){return e==="delete"?!1:e==="clear"?void 0:this}}function ec(e,t){const s={get(n){const r=this.__v_raw,o=ge(r),l=ge(n);e||(qt(n,l)&&Ie(o,"get",n),Ie(o,"get",l));const{has:i}=aa(o),c=t?xn:e?Sn:$e;if(i.call(o,n))return c(r.get(n));if(i.call(o,l))return c(r.get(l));r!==o&&r.get(n)},get size(){const n=this.__v_raw;return!e&&Ie(ge(n),"iterate",ds),n.size},has(n){const r=this.__v_raw,o=ge(r),l=ge(n);return e||(qt(n,l)&&Ie(o,"has",n),Ie(o,"has",l)),n===l?r.has(n):r.has(n)||r.has(l)},forEach(n,r){const o=this,l=o.__v_raw,i=ge(l),c=t?xn:e?Sn:$e;return!e&&Ie(i,"iterate",ds),l.forEach((d,u)=>n.call(r,c(d),c(u),o))}};return Ce(s,e?{add:na("add"),set:na("set"),delete:na("delete"),clear:na("clear")}:{add(n){!t&&!ct(n)&&!fs(n)&&(n=ge(n));const r=ge(this);return aa(r).has.call(r,n)||(r.add(n),Lt(r,"add",n,n)),this},set(n,r){!t&&!ct(r)&&!fs(r)&&(r=ge(r));const o=ge(this),{has:l,get:i}=aa(o);let c=l.call(o,n);c||(n=ge(n),c=l.call(o,n));const d=i.call(o,n);return o.set(n,r),c?qt(r,d)&&Lt(o,"set",n,r):Lt(o,"add",n,r),this},delete(n){const r=ge(this),{has:o,get:l}=aa(r);let i=o.call(r,n);i||(n=ge(n),i=o.call(r,n)),l&&l.call(r,n);const c=r.delete(n);return i&&Lt(r,"delete",n,void 0),c},clear(){const n=ge(this),r=n.size!==0,o=n.clear();return r&&Lt(n,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(n=>{s[n]=Zl(n,e,t)}),s}function Qn(e,t){const s=ec(e,t);return(a,n,r)=>n==="__v_isReactive"?!e:n==="__v_isReadonly"?e:n==="__v_raw"?a:Reflect.get(ve(s,n)&&n in a?s:a,n,r)}const tc={get:Qn(!1,!1)},sc={get:Qn(!1,!0)},ac={get:Qn(!0,!1)};const ri=new WeakMap,oi=new WeakMap,ii=new WeakMap,nc=new WeakMap;function rc(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function oc(e){return e.__v_skip||!Object.isExtensible(e)?0:rc(Ol(e))}function Mt(e){return fs(e)?e:Zn(e,!1,Jl,tc,ri)}function li(e){return Zn(e,!1,Ql,sc,oi)}function Tn(e){return Zn(e,!0,Xl,ac,ii)}function Zn(e,t,s,a,n){if(!xe(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=oc(e);if(r===0)return e;const o=n.get(e);if(o)return o;const l=new Proxy(e,r===2?a:s);return n.set(e,l),l}function us(e){return fs(e)?us(e.__v_raw):!!(e&&e.__v_isReactive)}function fs(e){return!!(e&&e.__v_isReadonly)}function ct(e){return!!(e&&e.__v_isShallow)}function er(e){return e?!!e.__v_raw:!1}function ge(e){const t=e&&e.__v_raw;return t?ge(t):e}function tr(e){return!ve(e,"__v_skip")&&Object.isExtensible(e)&&$o(e,"__v_skip",!0),e}const $e=e=>xe(e)?Mt(e):e,Sn=e=>xe(e)?Tn(e):e;function ke(e){return e?e.__v_isRef===!0:!1}function Ze(e){return ci(e,!1)}function ic(e){return ci(e,!0)}function ci(e,t){return ke(e)?e:new lc(e,t)}class lc{constructor(t,s){this.dep=new Jn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=s?t:ge(t),this._value=s?t:$e(t),this.__v_isShallow=s}get value(){return this.dep.track(),this._value}set value(t){const s=this._rawValue,a=this.__v_isShallow||ct(t)||fs(t);t=a?t:ge(t),qt(t,s)&&(this._rawValue=t,this._value=a?t:$e(t),this.dep.trigger())}}function Wt(e){return ke(e)?e.value:e}const cc={get:(e,t,s)=>t==="__v_raw"?e:Wt(Reflect.get(e,t,s)),set:(e,t,s,a)=>{const n=e[t];return ke(n)&&!ke(s)?(n.value=s,!0):Reflect.set(e,t,s,a)}};function di(e){return us(e)?e:new Proxy(e,cc)}function dc(e){const t=ce(e)?new Array(e.length):{};for(const s in e)t[s]=pc(e,s);return t}class uc{constructor(t,s,a){this._object=t,this._key=s,this._defaultValue=a,this.__v_isRef=!0,this._value=void 0}get value(){const t=this._object[this._key];return this._value=t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return jl(ge(this._object),this._key)}}function pc(e,t,s){const a=e[t];return ke(a)?a:new uc(e,t,s)}class fc{constructor(t,s,a){this.fn=t,this.setter=s,this._value=void 0,this.dep=new Jn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!s,this.isSSR=a}notify(){if(this.flags|=16,!(this.flags&8)&&Te!==this)return Jo(this,!0),!0}get value(){const t=this.dep.track();return Zo(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function hc(e,t,s=!1){let a,n;return he(e)?a=e:(a=e.get,n=e.set),new fc(a,n,s)}const ra={},ba=new WeakMap;let os;function gc(e,t=!1,s=os){if(s){let a=ba.get(s);a||ba.set(s,a=[]),a.push(e)}}function mc(e,t,s=we){const{immediate:a,deep:n,once:r,scheduler:o,augmentJob:l,call:i}=s,c=y=>n?y:ct(y)||n===!1||n===0?Rt(y,1):Rt(y);let d,u,p,f,b=!1,m=!1;if(ke(e)?(u=()=>e.value,b=ct(e)):us(e)?(u=()=>c(e),b=!0):ce(e)?(m=!0,b=e.some(y=>us(y)||ct(y)),u=()=>e.map(y=>{if(ke(y))return y.value;if(us(y))return c(y);if(he(y))return i?i(y,2):y()})):he(e)?t?u=i?()=>i(e,2):e:u=()=>{if(p){It();try{p()}finally{Nt()}}const y=os;os=d;try{return i?i(e,3,[f]):e(f)}finally{os=y}}:u=vt,t&&n){const y=u,P=n===!0?1/0:n;u=()=>Rt(y(),P)}const k=Ko(),E=()=>{d.stop(),k&&k.active&&jn(k.effects,d)};if(r&&t){const y=t;t=(...P)=>{y(...P),E()}}let A=m?new Array(e.length).fill(ra):ra;const x=y=>{if(!(!(d.flags&1)||!d.dirty&&!y))if(t){const P=d.run();if(n||b||(m?P.some((M,R)=>qt(M,A[R])):qt(P,A))){p&&p();const M=os;os=d;try{const R=[P,A===ra?void 0:m&&A[0]===ra?[]:A,f];A=P,i?i(t,3,R):t(...R)}finally{os=M}}}else d.run()};return l&&l(x),d=new qo(u),d.scheduler=o?()=>o(x,!1):x,f=y=>gc(y,!1,d),p=d.onStop=()=>{const y=ba.get(d);if(y){if(i)i(y,4);else for(const P of y)P();ba.delete(d)}},t?a?x(!0):A=d.run():o?o(x.bind(null,!0),!0):d.run(),E.pause=d.pause.bind(d),E.resume=d.resume.bind(d),E.stop=E,E}function Rt(e,t=1/0,s){if(t<=0||!xe(e)||e.__v_skip||(s=s||new Map,(s.get(e)||0)>=t))return e;if(s.set(e,t),t--,ke(e))Rt(e.value,t,s);else if(ce(e))for(let a=0;a<e.length;a++)Rt(e[a],t,s);else if(Ca(e)||xs(e))e.forEach(a=>{Rt(a,t,s)});else if(Fo(e)){for(const a in e)Rt(e[a],t,s);for(const a of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,a)&&Rt(e[a],t,s)}return e}function ea(e,t,s,a){try{return a?e(...a):e()}catch(n){Ia(n,t,s)}}function dt(e,t,s,a){if(he(e)){const n=ea(e,t,s,a);return n&&No(n)&&n.catch(r=>{Ia(r,t,s)}),n}if(ce(e)){const n=[];for(let r=0;r<e.length;r++)n.push(dt(e[r],t,s,a));return n}}function Ia(e,t,s,a=!0){const n=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||we;if(t){let l=t.parent;const i=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${s}`;for(;l;){const d=l.ec;if(d){for(let u=0;u<d.length;u++)if(d[u](e,i,c)===!1)return}l=l.parent}if(r){It(),ea(r,null,10,[e,i,c]),Nt();return}}bc(e,s,n,a,o)}function bc(e,t,s,a=!0,n=!1){if(n)throw e;console.error(e)}const ze=[];let mt=-1;const Ts=[];let Gt=null,ys=0;const ui=Promise.resolve();let _a=null;function sr(e){const t=_a||ui;return e?t.then(this?e.bind(this):e):t}function _c(e){let t=mt+1,s=ze.length;for(;t<s;){const a=t+s>>>1,n=ze[a],r=Vs(n);r<e||r===e&&n.flags&2?t=a+1:s=a}return t}function ar(e){if(!(e.flags&1)){const t=Vs(e),s=ze[ze.length-1];!s||!(e.flags&2)&&t>=Vs(s)?ze.push(e):ze.splice(_c(t),0,e),e.flags|=1,pi()}}function pi(){_a||(_a=ui.then(hi))}function yc(e){ce(e)?Ts.push(...e):Gt&&e.id===-1?Gt.splice(ys+1,0,e):e.flags&1||(Ts.push(e),e.flags|=1),pi()}function wr(e,t,s=mt+1){for(;s<ze.length;s++){const a=ze[s];if(a&&a.flags&2){if(e&&a.id!==e.uid)continue;ze.splice(s,1),s--,a.flags&4&&(a.flags&=-2),a(),a.flags&4||(a.flags&=-2)}}}function fi(e){if(Ts.length){const t=[...new Set(Ts)].sort((s,a)=>Vs(s)-Vs(a));if(Ts.length=0,Gt){Gt.push(...t);return}for(Gt=t,ys=0;ys<Gt.length;ys++){const s=Gt[ys];s.flags&4&&(s.flags&=-2),s.flags&8||s(),s.flags&=-2}Gt=null,ys=0}}const Vs=e=>e.id==null?e.flags&2?-1:1/0:e.id;function hi(e){try{for(mt=0;mt<ze.length;mt++){const t=ze[mt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ea(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;mt<ze.length;mt++){const t=ze[mt];t&&(t.flags&=-2)}mt=-1,ze.length=0,fi(),_a=null,(ze.length||Ts.length)&&hi()}}let Xe=null,gi=null;function ya(e){const t=Xe;return Xe=e,gi=e&&e.type.__scopeId||null,t}function En(e,t=Xe,s){if(!t||e._n)return e;const a=(...n)=>{a._d&&xa(-1);const r=ya(t);let o;try{o=e(...n)}finally{ya(r),a._d&&xa(1)}return o};return a._n=!0,a._c=!0,a._d=!0,a}function vc(e,t){if(Xe===null)return e;const s=Ha(Xe),a=e.dirs||(e.dirs=[]);for(let n=0;n<t.length;n++){let[r,o,l,i=we]=t[n];r&&(he(r)&&(r={mounted:r,updated:r}),r.deep&&Rt(o),a.push({dir:r,instance:s,value:o,oldValue:void 0,arg:l,modifiers:i}))}return e}function ss(e,t,s,a){const n=e.dirs,r=t&&t.dirs;for(let o=0;o<n.length;o++){const l=n[o];r&&(l.oldValue=r[o].value);let i=l.dir[a];i&&(It(),dt(i,s,8,[e.el,l,e,t]),Nt())}}const wc=Symbol("_vte"),mi=e=>e.__isTeleport,Ot=Symbol("_leaveCb"),oa=Symbol("_enterCb");function xc(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return $t(()=>{e.isMounted=!0}),Ei(()=>{e.isUnmounting=!0}),e}const et=[Function,Array],bi={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:et,onEnter:et,onAfterEnter:et,onEnterCancelled:et,onBeforeLeave:et,onLeave:et,onAfterLeave:et,onLeaveCancelled:et,onBeforeAppear:et,onAppear:et,onAfterAppear:et,onAppearCancelled:et},_i=e=>{const t=e.subTree;return t.component?_i(t.component):t},Tc={name:"BaseTransition",props:bi,setup(e,{slots:t}){const s=ir(),a=xc();return()=>{const n=t.default&&wi(t.default(),!0);if(!n||!n.length)return;const r=yi(n),o=ge(e),{mode:l}=o;if(a.isLeaving)return Qa(r);const i=xr(r);if(!i)return Qa(r);let c=kn(i,o,a,s,u=>c=u);i.type!==We&&Ks(i,c);let d=s.subTree&&xr(s.subTree);if(d&&d.type!==We&&!is(d,i)&&_i(s).type!==We){let u=kn(d,o,a,s);if(Ks(d,u),l==="out-in"&&i.type!==We)return a.isLeaving=!0,u.afterLeave=()=>{a.isLeaving=!1,s.job.flags&8||s.update(),delete u.afterLeave,d=void 0},Qa(r);l==="in-out"&&i.type!==We?u.delayLeave=(p,f,b)=>{const m=vi(a,d);m[String(d.key)]=d,p[Ot]=()=>{f(),p[Ot]=void 0,delete c.delayedLeave,d=void 0},c.delayedLeave=()=>{b(),delete c.delayedLeave,d=void 0}}:d=void 0}else d&&(d=void 0);return r}}};function yi(e){let t=e[0];if(e.length>1){for(const s of e)if(s.type!==We){t=s;break}}return t}const Sc=Tc;function vi(e,t){const{leavingVNodes:s}=e;let a=s.get(t.type);return a||(a=Object.create(null),s.set(t.type,a)),a}function kn(e,t,s,a,n){const{appear:r,mode:o,persisted:l=!1,onBeforeEnter:i,onEnter:c,onAfterEnter:d,onEnterCancelled:u,onBeforeLeave:p,onLeave:f,onAfterLeave:b,onLeaveCancelled:m,onBeforeAppear:k,onAppear:E,onAfterAppear:A,onAppearCancelled:x}=t,y=String(e.key),P=vi(s,e),M=(g,h)=>{g&&dt(g,a,9,h)},R=(g,h)=>{const T=h[1];M(g,h),ce(g)?g.every(_=>_.length<=1)&&T():g.length<=1&&T()},w={mode:o,persisted:l,beforeEnter(g){let h=i;if(!s.isMounted)if(r)h=k||i;else return;g[Ot]&&g[Ot](!0);const T=P[y];T&&is(e,T)&&T.el[Ot]&&T.el[Ot](),M(h,[g])},enter(g){let h=c,T=d,_=u;if(!s.isMounted)if(r)h=E||c,T=A||d,_=x||u;else return;let C=!1;const B=g[oa]=K=>{C||(C=!0,K?M(_,[g]):M(T,[g]),w.delayedLeave&&w.delayedLeave(),g[oa]=void 0)};h?R(h,[g,B]):B()},leave(g,h){const T=String(e.key);if(g[oa]&&g[oa](!0),s.isUnmounting)return h();M(p,[g]);let _=!1;const C=g[Ot]=B=>{_||(_=!0,h(),B?M(m,[g]):M(b,[g]),g[Ot]=void 0,P[T]===e&&delete P[T])};P[T]=e,f?R(f,[g,C]):C()},clone(g){const h=kn(g,t,s,a,n);return n&&n(h),h}};return w}function Qa(e){if(Na(e))return e=Xt(e),e.children=null,e}function xr(e){if(!Na(e))return mi(e.type)&&e.children?yi(e.children):e;if(e.component)return e.component.subTree;const{shapeFlag:t,children:s}=e;if(s){if(t&16)return s[0];if(t&32&&he(s.default))return s.default()}}function Ks(e,t){e.shapeFlag&6&&e.component?(e.transition=t,Ks(e.component.subTree,t)):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function wi(e,t=!1,s){let a=[],n=0;for(let r=0;r<e.length;r++){let o=e[r];const l=s==null?o.key:String(s)+String(o.key!=null?o.key:r);o.type===_t?(o.patchFlag&128&&n++,a=a.concat(wi(o.children,t,l))):(t||o.type!==We)&&a.push(l!=null?Xt(o,{key:l}):o)}if(n>1)for(let r=0;r<a.length;r++)a[r].patchFlag=-2;return a}function xi(e,t){return he(e)?Ce({name:e.name},t,{setup:e}):e}function Ti(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}const va=new WeakMap;function Bs(e,t,s,a,n=!1){if(ce(e)){e.forEach((b,m)=>Bs(b,t&&(ce(t)?t[m]:t),s,a,n));return}if(Fs(a)&&!n){a.shapeFlag&512&&a.type.__asyncResolved&&a.component.subTree.component&&Bs(e,t,s,a.component.subTree);return}const r=a.shapeFlag&4?Ha(a.component):a.el,o=n?null:r,{i:l,r:i}=e,c=t&&t.r,d=l.refs===we?l.refs={}:l.refs,u=l.setupState,p=ge(u),f=u===we?Io:b=>ve(p,b);if(c!=null&&c!==i){if(Tr(t),Pe(c))d[c]=null,f(c)&&(u[c]=null);else if(ke(c)){c.value=null;const b=t;b.k&&(d[b.k]=null)}}if(he(i))ea(i,l,12,[o,d]);else{const b=Pe(i),m=ke(i);if(b||m){const k=()=>{if(e.f){const E=b?f(i)?u[i]:d[i]:i.value;if(n)ce(E)&&jn(E,r);else if(ce(E))E.includes(r)||E.push(r);else if(b)d[i]=[r],f(i)&&(u[i]=d[i]);else{const A=[r];i.value=A,e.k&&(d[e.k]=A)}}else b?(d[i]=o,f(i)&&(u[i]=o)):m&&(i.value=o,e.k&&(d[e.k]=o))};if(o){const E=()=>{k(),va.delete(e)};E.id=-1,va.set(e,E),Ke(E,s)}else Tr(e),k()}}}function Tr(e){const t=va.get(e);t&&(t.flags|=8,va.delete(e))}Ma().requestIdleCallback;Ma().cancelIdleCallback;const Fs=e=>!!e.type.__asyncLoader,Na=e=>e.type.__isKeepAlive;function Ec(e,t){Si(e,"a",t)}function kc(e,t){Si(e,"da",t)}function Si(e,t,s=Ne){const a=e.__wdc||(e.__wdc=()=>{let n=s;for(;n;){if(n.isDeactivated)return;n=n.parent}return e()});if(Ba(t,a,s),s){let n=s.parent;for(;n&&n.parent;)Na(n.parent.vnode)&&Ac(a,t,s,n),n=n.parent}}function Ac(e,t,s,a){const n=Ba(t,e,a,!0);Fa(()=>{jn(a[t],n)},s)}function Ba(e,t,s=Ne,a=!1){if(s){const n=s[e]||(s[e]=[]),r=t.__weh||(t.__weh=(...o)=>{It();const l=ta(s),i=dt(t,s,e,o);return l(),Nt(),i});return a?n.unshift(r):n.push(r),r}}const Ft=e=>(t,s=Ne)=>{(!Ws||e==="sp")&&Ba(e,(...a)=>t(...a),s)},Pc=Ft("bm"),$t=Ft("m"),Oc=Ft("bu"),Cc=Ft("u"),Ei=Ft("bum"),Fa=Ft("um"),Lc=Ft("sp"),Rc=Ft("rtg"),Mc=Ft("rtc");function Dc(e,t=Ne){Ba("ec",e,t)}const Ic="components",ki=Symbol.for("v-ndc");function Nc(e){return Pe(e)?Bc(Ic,e,!1)||e:e||ki}function Bc(e,t,s=!0,a=!1){const n=Xe||Ne;if(n){const r=n.type;{const l=Ed(r,!1);if(l&&(l===t||l===rt(t)||l===Ra(rt(t))))return r}const o=Sr(n[e]||r[e],t)||Sr(n.appContext[e],t);return!o&&a?r:o}}function Sr(e,t){return e&&(e[t]||e[rt(t)]||e[Ra(rt(t))])}const An=e=>e?Vi(e)?Ha(e):An(e.parent):null,$s=Ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>An(e.parent),$root:e=>An(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Pi(e),$forceUpdate:e=>e.f||(e.f=()=>{ar(e.update)}),$nextTick:e=>e.n||(e.n=sr.bind(e.proxy)),$watch:e=>rd.bind(e)}),Za=(e,t)=>e!==we&&!e.__isScriptSetup&&ve(e,t),Fc={get({_:e},t){if(t==="__v_skip")return!0;const{ctx:s,setupState:a,data:n,props:r,accessCache:o,type:l,appContext:i}=e;let c;if(t[0]!=="$"){const f=o[t];if(f!==void 0)switch(f){case 1:return a[t];case 2:return n[t];case 4:return s[t];case 3:return r[t]}else{if(Za(a,t))return o[t]=1,a[t];if(n!==we&&ve(n,t))return o[t]=2,n[t];if((c=e.propsOptions[0])&&ve(c,t))return o[t]=3,r[t];if(s!==we&&ve(s,t))return o[t]=4,s[t];Pn&&(o[t]=0)}}const d=$s[t];let u,p;if(d)return t==="$attrs"&&Ie(e.attrs,"get",""),d(e);if((u=l.__cssModules)&&(u=u[t]))return u;if(s!==we&&ve(s,t))return o[t]=4,s[t];if(p=i.config.globalProperties,ve(p,t))return p[t]},set({_:e},t,s){const{data:a,setupState:n,ctx:r}=e;return Za(n,t)?(n[t]=s,!0):a!==we&&ve(a,t)?(a[t]=s,!0):ve(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=s,!0)},has({_:{data:e,setupState:t,accessCache:s,ctx:a,appContext:n,propsOptions:r,type:o}},l){let i,c;return!!(s[l]||e!==we&&l[0]!=="$"&&ve(e,l)||Za(t,l)||(i=r[0])&&ve(i,l)||ve(a,l)||ve($s,l)||ve(n.config.globalProperties,l)||(c=o.__cssModules)&&c[l])},defineProperty(e,t,s){return s.get!=null?e._.accessCache[t]=0:ve(s,"value")&&this.set(e,t,s.value,null),Reflect.defineProperty(e,t,s)}};function Er(e){return ce(e)?e.reduce((t,s)=>(t[s]=null,t),{}):e}let Pn=!0;function $c(e){const t=Pi(e),s=e.proxy,a=e.ctx;Pn=!1,t.beforeCreate&&kr(t.beforeCreate,e,"bc");const{data:n,computed:r,methods:o,watch:l,provide:i,inject:c,created:d,beforeMount:u,mounted:p,beforeUpdate:f,updated:b,activated:m,deactivated:k,beforeDestroy:E,beforeUnmount:A,destroyed:x,unmounted:y,render:P,renderTracked:M,renderTriggered:R,errorCaptured:w,serverPrefetch:g,expose:h,inheritAttrs:T,components:_,directives:C,filters:B}=t;if(c&&zc(c,a,null),o)for(const D in o){const I=o[D];he(I)&&(a[D]=I.bind(s))}if(n){const D=n.call(s,s);xe(D)&&(e.data=Mt(D))}if(Pn=!0,r)for(const D in r){const I=r[D],U=he(I)?I.bind(s,s):he(I.get)?I.get.bind(s,s):vt,J=!he(I)&&he(I.set)?I.set.bind(s):vt,Q=Je({get:U,set:J});Object.defineProperty(a,D,{enumerable:!0,configurable:!0,get:()=>Q.value,set:le=>Q.value=le})}if(l)for(const D in l)Ai(l[D],a,s,D);if(i){const D=he(i)?i.call(s):i;Reflect.ownKeys(D).forEach(I=>{ua(I,D[I])})}d&&kr(d,e,"c");function V(D,I){ce(I)?I.forEach(U=>D(U.bind(s))):I&&D(I.bind(s))}if(V(Pc,u),V($t,p),V(Oc,f),V(Cc,b),V(Ec,m),V(kc,k),V(Dc,w),V(Mc,M),V(Rc,R),V(Ei,A),V(Fa,y),V(Lc,g),ce(h))if(h.length){const D=e.exposed||(e.exposed={});h.forEach(I=>{Object.defineProperty(D,I,{get:()=>s[I],set:U=>s[I]=U,enumerable:!0})})}else e.exposed||(e.exposed={});P&&e.render===vt&&(e.render=P),T!=null&&(e.inheritAttrs=T),_&&(e.components=_),C&&(e.directives=C),g&&Ti(e)}function zc(e,t,s=vt){ce(e)&&(e=On(e));for(const a in e){const n=e[a];let r;xe(n)?"default"in n?r=at(n.from||a,n.default,!0):r=at(n.from||a):r=at(n),ke(r)?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[a]=r}}function kr(e,t,s){dt(ce(e)?e.map(a=>a.bind(t.proxy)):e.bind(t.proxy),t,s)}function Ai(e,t,s,a){let n=a.includes(".")?Hi(s,a):()=>s[a];if(Pe(e)){const r=t[e];he(r)&&zs(n,r)}else if(he(e))zs(n,e.bind(s));else if(xe(e))if(ce(e))e.forEach(r=>Ai(r,t,s,a));else{const r=he(e.handler)?e.handler.bind(s):t[e.handler];he(r)&&zs(n,r,e)}}function Pi(e){const t=e.type,{mixins:s,extends:a}=t,{mixins:n,optionsCache:r,config:{optionMergeStrategies:o}}=e.appContext,l=r.get(t);let i;return l?i=l:!n.length&&!s&&!a?i=t:(i={},n.length&&n.forEach(c=>wa(i,c,o,!0)),wa(i,t,o)),xe(t)&&r.set(t,i),i}function wa(e,t,s,a=!1){const{mixins:n,extends:r}=t;r&&wa(e,r,s,!0),n&&n.forEach(o=>wa(e,o,s,!0));for(const o in t)if(!(a&&o==="expose")){const l=Hc[o]||s&&s[o];e[o]=l?l(e[o],t[o]):t[o]}return e}const Hc={data:Ar,props:Pr,emits:Pr,methods:Rs,computed:Rs,beforeCreate:Be,created:Be,beforeMount:Be,mounted:Be,beforeUpdate:Be,updated:Be,beforeDestroy:Be,beforeUnmount:Be,destroyed:Be,unmounted:Be,activated:Be,deactivated:Be,errorCaptured:Be,serverPrefetch:Be,components:Rs,directives:Rs,watch:Gc,provide:Ar,inject:Uc};function Ar(e,t){return t?e?function(){return Ce(he(e)?e.call(this,this):e,he(t)?t.call(this,this):t)}:t:e}function Uc(e,t){return Rs(On(e),On(t))}function On(e){if(ce(e)){const t={};for(let s=0;s<e.length;s++)t[e[s]]=e[s];return t}return e}function Be(e,t){return e?[...new Set([].concat(e,t))]:t}function Rs(e,t){return e?Ce(Object.create(null),e,t):t}function Pr(e,t){return e?ce(e)&&ce(t)?[...new Set([...e,...t])]:Ce(Object.create(null),Er(e),Er(t??{})):t}function Gc(e,t){if(!e)return t;if(!t)return e;const s=Ce(Object.create(null),e);for(const a in t)s[a]=Be(e[a],t[a]);return s}function Oi(){return{app:null,config:{isNativeTag:Io,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jc=0;function Yc(e,t){return function(a,n=null){he(a)||(a=Ce({},a)),n!=null&&!xe(n)&&(n=null);const r=Oi(),o=new WeakSet,l=[];let i=!1;const c=r.app={_uid:jc++,_component:a,_props:n,_container:null,_context:r,_instance:null,version:Ad,get config(){return r.config},set config(d){},use(d,...u){return o.has(d)||(d&&he(d.install)?(o.add(d),d.install(c,...u)):he(d)&&(o.add(d),d(c,...u))),c},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),c},component(d,u){return u?(r.components[d]=u,c):r.components[d]},directive(d,u){return u?(r.directives[d]=u,c):r.directives[d]},mount(d,u,p){if(!i){const f=c._ceVNode||je(a,n);return f.appContext=r,p===!0?p="svg":p===!1&&(p=void 0),e(f,d,p),i=!0,c._container=d,d.__vue_app__=c,Ha(f.component)}},onUnmount(d){l.push(d)},unmount(){i&&(dt(l,c._instance,16),e(null,c._container),delete c._container.__vue_app__)},provide(d,u){return r.provides[d]=u,c},runWithContext(d){const u=ps;ps=c;try{return d()}finally{ps=u}}};return c}}let ps=null;function ua(e,t){if(Ne){let s=Ne.provides;const a=Ne.parent&&Ne.parent.provides;a===s&&(s=Ne.provides=Object.create(a)),s[e]=t}}function at(e,t,s=!1){const a=ir();if(a||ps){let n=ps?ps._context.provides:a?a.parent==null||a.ce?a.vnode.appContext&&a.vnode.appContext.provides:a.parent.provides:void 0;if(n&&e in n)return n[e];if(arguments.length>1)return s&&he(t)?t.call(a&&a.proxy):t}}function Vc(){return!!(ir()||ps)}const Ci={},Li=()=>Object.create(Ci),Ri=e=>Object.getPrototypeOf(e)===Ci;function Kc(e,t,s,a=!1){const n={},r=Li();e.propsDefaults=Object.create(null),Mi(e,t,n,r);for(const o in e.propsOptions[0])o in n||(n[o]=void 0);s?e.props=a?n:li(n):e.type.props?e.props=n:e.props=r,e.attrs=r}function qc(e,t,s,a){const{props:n,attrs:r,vnode:{patchFlag:o}}=e,l=ge(n),[i]=e.propsOptions;let c=!1;if((a||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if($a(e.emitsOptions,p))continue;const f=t[p];if(i)if(ve(r,p))f!==r[p]&&(r[p]=f,c=!0);else{const b=rt(p);n[b]=Cn(i,l,b,f,e,!1)}else f!==r[p]&&(r[p]=f,c=!0)}}}else{Mi(e,t,n,r)&&(c=!0);let d;for(const u in l)(!t||!ve(t,u)&&((d=Zt(u))===u||!ve(t,d)))&&(i?s&&(s[u]!==void 0||s[d]!==void 0)&&(n[u]=Cn(i,l,u,void 0,e,!0)):delete n[u]);if(r!==l)for(const u in r)(!t||!ve(t,u))&&(delete r[u],c=!0)}c&&Lt(e.attrs,"set","")}function Mi(e,t,s,a){const[n,r]=e.propsOptions;let o=!1,l;if(t)for(let i in t){if(Ds(i))continue;const c=t[i];let d;n&&ve(n,d=rt(i))?!r||!r.includes(d)?s[d]=c:(l||(l={}))[d]=c:$a(e.emitsOptions,i)||(!(i in a)||c!==a[i])&&(a[i]=c,o=!0)}if(r){const i=ge(s),c=l||we;for(let d=0;d<r.length;d++){const u=r[d];s[u]=Cn(n,i,u,c[u],e,!ve(c,u))}}return o}function Cn(e,t,s,a,n,r){const o=e[s];if(o!=null){const l=ve(o,"default");if(l&&a===void 0){const i=o.default;if(o.type!==Function&&!o.skipFactory&&he(i)){const{propsDefaults:c}=n;if(s in c)a=c[s];else{const d=ta(n);a=c[s]=i.call(null,t),d()}}else a=i;n.ce&&n.ce._setProp(s,a)}o[0]&&(r&&!l?a=!1:o[1]&&(a===""||a===Zt(s))&&(a=!0))}return a}const Wc=new WeakMap;function Di(e,t,s=!1){const a=s?Wc:t.propsCache,n=a.get(e);if(n)return n;const r=e.props,o={},l=[];let i=!1;if(!he(e)){const d=u=>{i=!0;const[p,f]=Di(u,t,!0);Ce(o,p),f&&l.push(...f)};!s&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!r&&!i)return xe(e)&&a.set(e,ws),ws;if(ce(r))for(let d=0;d<r.length;d++){const u=rt(r[d]);Or(u)&&(o[u]=we)}else if(r)for(const d in r){const u=rt(d);if(Or(u)){const p=r[d],f=o[u]=ce(p)||he(p)?{type:p}:Ce({},p),b=f.type;let m=!1,k=!0;if(ce(b))for(let E=0;E<b.length;++E){const A=b[E],x=he(A)&&A.name;if(x==="Boolean"){m=!0;break}else x==="String"&&(k=!1)}else m=he(b)&&b.name==="Boolean";f[0]=m,f[1]=k,(m||ve(f,"default"))&&l.push(u)}}const c=[o,l];return xe(e)&&a.set(e,c),c}function Or(e){return e[0]!=="$"&&!Ds(e)}const nr=e=>e==="_"||e==="_ctx"||e==="$stable",rr=e=>ce(e)?e.map(yt):[yt(e)],Jc=(e,t,s)=>{if(t._n)return t;const a=En((...n)=>rr(t(...n)),s);return a._c=!1,a},Ii=(e,t,s)=>{const a=e._ctx;for(const n in e){if(nr(n))continue;const r=e[n];if(he(r))t[n]=Jc(n,r,a);else if(r!=null){const o=rr(r);t[n]=()=>o}}},Ni=(e,t)=>{const s=rr(t);e.slots.default=()=>s},Bi=(e,t,s)=>{for(const a in t)(s||!nr(a))&&(e[a]=t[a])},Xc=(e,t,s)=>{const a=e.slots=Li();if(e.vnode.shapeFlag&32){const n=t._;n?(Bi(a,t,s),s&&$o(a,"_",n,!0)):Ii(t,a)}else t&&Ni(e,t)},Qc=(e,t,s)=>{const{vnode:a,slots:n}=e;let r=!0,o=we;if(a.shapeFlag&32){const l=t._;l?s&&l===1?r=!1:Bi(n,t,s):(r=!t.$stable,Ii(t,n)),o=t}else t&&(Ni(e,t),o={default:1});if(r)for(const l in n)!nr(l)&&o[l]==null&&delete n[l]},Ke=fd;function Zc(e){return ed(e)}function ed(e,t){const s=Ma();s.__VUE__=!0;const{insert:a,remove:n,patchProp:r,createElement:o,createText:l,createComment:i,setText:c,setElementText:d,parentNode:u,nextSibling:p,setScopeId:f=vt,insertStaticContent:b}=e,m=(v,S,L,G=null,Y=null,j=null,se=void 0,te=null,F=!!S.dynamicChildren)=>{if(v===S)return;v&&!is(v,S)&&(G=O(v),le(v,Y,j,!0),v=null),S.patchFlag===-2&&(F=!1,S.dynamicChildren=null);const{type:z,ref:Z,shapeFlag:ee}=S;switch(z){case za:k(v,S,L,G);break;case We:E(v,S,L,G);break;case pa:v==null&&A(S,L,G,se);break;case _t:_(v,S,L,G,Y,j,se,te,F);break;default:ee&1?P(v,S,L,G,Y,j,se,te,F):ee&6?C(v,S,L,G,Y,j,se,te,F):(ee&64||ee&128)&&z.process(v,S,L,G,Y,j,se,te,F,X)}Z!=null&&Y?Bs(Z,v&&v.ref,j,S||v,!S):Z==null&&v&&v.ref!=null&&Bs(v.ref,null,j,v,!0)},k=(v,S,L,G)=>{if(v==null)a(S.el=l(S.children),L,G);else{const Y=S.el=v.el;S.children!==v.children&&c(Y,S.children)}},E=(v,S,L,G)=>{v==null?a(S.el=i(S.children||""),L,G):S.el=v.el},A=(v,S,L,G)=>{[v.el,v.anchor]=b(v.children,S,L,G,v.el,v.anchor)},x=({el:v,anchor:S},L,G)=>{let Y;for(;v&&v!==S;)Y=p(v),a(v,L,G),v=Y;a(S,L,G)},y=({el:v,anchor:S})=>{let L;for(;v&&v!==S;)L=p(v),n(v),v=L;n(S)},P=(v,S,L,G,Y,j,se,te,F)=>{if(S.type==="svg"?se="svg":S.type==="math"&&(se="mathml"),v==null)M(S,L,G,Y,j,se,te,F);else{const z=v.el&&v.el._isVueCE?v.el:null;try{z&&z._beginPatch(),g(v,S,Y,j,se,te,F)}finally{z&&z._endPatch()}}},M=(v,S,L,G,Y,j,se,te)=>{let F,z;const{props:Z,shapeFlag:ee,transition:ne,dirs:ie}=v;if(F=v.el=o(v.type,j,Z&&Z.is,Z),ee&8?d(F,v.children):ee&16&&w(v.children,F,null,G,Y,en(v,j),se,te),ie&&ss(v,null,G,"created"),R(F,v,v.scopeId,se,G),Z){for(const me in Z)me!=="value"&&!Ds(me)&&r(F,me,null,Z[me],j,G);"value"in Z&&r(F,"value",null,Z.value,j),(z=Z.onVnodeBeforeMount)&&gt(z,G,v)}ie&&ss(v,null,G,"beforeMount");const ue=td(Y,ne);ue&&ne.beforeEnter(F),a(F,S,L),((z=Z&&Z.onVnodeMounted)||ue||ie)&&Ke(()=>{z&&gt(z,G,v),ue&&ne.enter(F),ie&&ss(v,null,G,"mounted")},Y)},R=(v,S,L,G,Y)=>{if(L&&f(v,L),G)for(let j=0;j<G.length;j++)f(v,G[j]);if(Y){let j=Y.subTree;if(S===j||Gi(j.type)&&(j.ssContent===S||j.ssFallback===S)){const se=Y.vnode;R(v,se,se.scopeId,se.slotScopeIds,Y.parent)}}},w=(v,S,L,G,Y,j,se,te,F=0)=>{for(let z=F;z<v.length;z++){const Z=v[z]=te?jt(v[z]):yt(v[z]);m(null,Z,S,L,G,Y,j,se,te)}},g=(v,S,L,G,Y,j,se)=>{const te=S.el=v.el;let{patchFlag:F,dynamicChildren:z,dirs:Z}=S;F|=v.patchFlag&16;const ee=v.props||we,ne=S.props||we;let ie;if(L&&as(L,!1),(ie=ne.onVnodeBeforeUpdate)&&gt(ie,L,S,v),Z&&ss(S,v,L,"beforeUpdate"),L&&as(L,!0),(ee.innerHTML&&ne.innerHTML==null||ee.textContent&&ne.textContent==null)&&d(te,""),z?h(v.dynamicChildren,z,te,L,G,en(S,Y),j):se||I(v,S,te,null,L,G,en(S,Y),j,!1),F>0){if(F&16)T(te,ee,ne,L,Y);else if(F&2&&ee.class!==ne.class&&r(te,"class",null,ne.class,Y),F&4&&r(te,"style",ee.style,ne.style,Y),F&8){const ue=S.dynamicProps;for(let me=0;me<ue.length;me++){const be=ue[me],Re=ee[be],Ue=ne[be];(Ue!==Re||be==="value")&&r(te,be,Re,Ue,Y,L)}}F&1&&v.children!==S.children&&d(te,S.children)}else!se&&z==null&&T(te,ee,ne,L,Y);((ie=ne.onVnodeUpdated)||Z)&&Ke(()=>{ie&&gt(ie,L,S,v),Z&&ss(S,v,L,"updated")},G)},h=(v,S,L,G,Y,j,se)=>{for(let te=0;te<S.length;te++){const F=v[te],z=S[te],Z=F.el&&(F.type===_t||!is(F,z)||F.shapeFlag&198)?u(F.el):L;m(F,z,Z,null,G,Y,j,se,!0)}},T=(v,S,L,G,Y)=>{if(S!==L){if(S!==we)for(const j in S)!Ds(j)&&!(j in L)&&r(v,j,S[j],null,Y,G);for(const j in L){if(Ds(j))continue;const se=L[j],te=S[j];se!==te&&j!=="value"&&r(v,j,te,se,Y,G)}"value"in L&&r(v,"value",S.value,L.value,Y)}},_=(v,S,L,G,Y,j,se,te,F)=>{const z=S.el=v?v.el:l(""),Z=S.anchor=v?v.anchor:l("");let{patchFlag:ee,dynamicChildren:ne,slotScopeIds:ie}=S;ie&&(te=te?te.concat(ie):ie),v==null?(a(z,L,G),a(Z,L,G),w(S.children||[],L,Z,Y,j,se,te,F)):ee>0&&ee&64&&ne&&v.dynamicChildren?(h(v.dynamicChildren,ne,L,Y,j,se,te),(S.key!=null||Y&&S===Y.subTree)&&Fi(v,S,!0)):I(v,S,L,Z,Y,j,se,te,F)},C=(v,S,L,G,Y,j,se,te,F)=>{S.slotScopeIds=te,v==null?S.shapeFlag&512?Y.ctx.activate(S,L,G,se,F):B(S,L,G,Y,j,se,F):K(v,S,F)},B=(v,S,L,G,Y,j,se)=>{const te=v.component=vd(v,G,Y);if(Na(v)&&(te.ctx.renderer=X),wd(te,!1,se),te.asyncDep){if(Y&&Y.registerDep(te,V,se),!v.el){const F=te.subTree=je(We);E(null,F,S,L),v.placeholder=F.el}}else V(te,v,S,L,Y,j,se)},K=(v,S,L)=>{const G=S.component=v.component;if(ud(v,S,L))if(G.asyncDep&&!G.asyncResolved){D(G,S,L);return}else G.next=S,G.update();else S.el=v.el,G.vnode=S},V=(v,S,L,G,Y,j,se)=>{const te=()=>{if(v.isMounted){let{next:ee,bu:ne,u:ie,parent:ue,vnode:me}=v;{const ft=$i(v);if(ft){ee&&(ee.el=me.el,D(v,ee,se)),ft.asyncDep.then(()=>{v.isUnmounted||te()});return}}let be=ee,Re;as(v,!1),ee?(ee.el=me.el,D(v,ee,se)):ee=me,ne&&da(ne),(Re=ee.props&&ee.props.onVnodeBeforeUpdate)&&gt(Re,ue,ee,me),as(v,!0);const Ue=Lr(v),pt=v.subTree;v.subTree=Ue,m(pt,Ue,u(pt.el),O(pt),v,Y,j),ee.el=Ue.el,be===null&&pd(v,Ue.el),ie&&Ke(ie,Y),(Re=ee.props&&ee.props.onVnodeUpdated)&&Ke(()=>gt(Re,ue,ee,me),Y)}else{let ee;const{el:ne,props:ie}=S,{bm:ue,m:me,parent:be,root:Re,type:Ue}=v,pt=Fs(S);as(v,!1),ue&&da(ue),!pt&&(ee=ie&&ie.onVnodeBeforeMount)&&gt(ee,be,S),as(v,!0);{Re.ce&&Re.ce._def.shadowRoot!==!1&&Re.ce._injectChildStyle(Ue);const ft=v.subTree=Lr(v);m(null,ft,L,G,v,Y,j),S.el=ft.el}if(me&&Ke(me,Y),!pt&&(ee=ie&&ie.onVnodeMounted)){const ft=S;Ke(()=>gt(ee,be,ft),Y)}(S.shapeFlag&256||be&&Fs(be.vnode)&&be.vnode.shapeFlag&256)&&v.a&&Ke(v.a,Y),v.isMounted=!0,S=L=G=null}};v.scope.on();const F=v.effect=new qo(te);v.scope.off();const z=v.update=F.run.bind(F),Z=v.job=F.runIfDirty.bind(F);Z.i=v,Z.id=v.uid,F.scheduler=()=>ar(Z),as(v,!0),z()},D=(v,S,L)=>{S.component=v;const G=v.vnode.props;v.vnode=S,v.next=null,qc(v,S.props,G,L),Qc(v,S.children,L),It(),wr(v),Nt()},I=(v,S,L,G,Y,j,se,te,F=!1)=>{const z=v&&v.children,Z=v?v.shapeFlag:0,ee=S.children,{patchFlag:ne,shapeFlag:ie}=S;if(ne>0){if(ne&128){J(z,ee,L,G,Y,j,se,te,F);return}else if(ne&256){U(z,ee,L,G,Y,j,se,te,F);return}}ie&8?(Z&16&&pe(z,Y,j),ee!==z&&d(L,ee)):Z&16?ie&16?J(z,ee,L,G,Y,j,se,te,F):pe(z,Y,j,!0):(Z&8&&d(L,""),ie&16&&w(ee,L,G,Y,j,se,te,F))},U=(v,S,L,G,Y,j,se,te,F)=>{v=v||ws,S=S||ws;const z=v.length,Z=S.length,ee=Math.min(z,Z);let ne;for(ne=0;ne<ee;ne++){const ie=S[ne]=F?jt(S[ne]):yt(S[ne]);m(v[ne],ie,L,null,Y,j,se,te,F)}z>Z?pe(v,Y,j,!0,!1,ee):w(S,L,G,Y,j,se,te,F,ee)},J=(v,S,L,G,Y,j,se,te,F)=>{let z=0;const Z=S.length;let ee=v.length-1,ne=Z-1;for(;z<=ee&&z<=ne;){const ie=v[z],ue=S[z]=F?jt(S[z]):yt(S[z]);if(is(ie,ue))m(ie,ue,L,null,Y,j,se,te,F);else break;z++}for(;z<=ee&&z<=ne;){const ie=v[ee],ue=S[ne]=F?jt(S[ne]):yt(S[ne]);if(is(ie,ue))m(ie,ue,L,null,Y,j,se,te,F);else break;ee--,ne--}if(z>ee){if(z<=ne){const ie=ne+1,ue=ie<Z?S[ie].el:G;for(;z<=ne;)m(null,S[z]=F?jt(S[z]):yt(S[z]),L,ue,Y,j,se,te,F),z++}}else if(z>ne)for(;z<=ee;)le(v[z],Y,j,!0),z++;else{const ie=z,ue=z,me=new Map;for(z=ue;z<=ne;z++){const Ve=S[z]=F?jt(S[z]):yt(S[z]);Ve.key!=null&&me.set(Ve.key,z)}let be,Re=0;const Ue=ne-ue+1;let pt=!1,ft=0;const Ps=new Array(Ue);for(z=0;z<Ue;z++)Ps[z]=0;for(z=ie;z<=ee;z++){const Ve=v[z];if(Re>=Ue){le(Ve,Y,j,!0);continue}let ht;if(Ve.key!=null)ht=me.get(Ve.key);else for(be=ue;be<=ne;be++)if(Ps[be-ue]===0&&is(Ve,S[be])){ht=be;break}ht===void 0?le(Ve,Y,j,!0):(Ps[ht-ue]=z+1,ht>=ft?ft=ht:pt=!0,m(Ve,S[ht],L,null,Y,j,se,te,F),Re++)}const hr=pt?sd(Ps):ws;for(be=hr.length-1,z=Ue-1;z>=0;z--){const Ve=ue+z,ht=S[Ve],gr=S[Ve+1],mr=Ve+1<Z?gr.el||gr.placeholder:G;Ps[z]===0?m(null,ht,L,mr,Y,j,se,te,F):pt&&(be<0||z!==hr[be]?Q(ht,L,mr,2):be--)}}},Q=(v,S,L,G,Y=null)=>{const{el:j,type:se,transition:te,children:F,shapeFlag:z}=v;if(z&6){Q(v.component.subTree,S,L,G);return}if(z&128){v.suspense.move(S,L,G);return}if(z&64){se.move(v,S,L,X);return}if(se===_t){a(j,S,L);for(let ee=0;ee<F.length;ee++)Q(F[ee],S,L,G);a(v.anchor,S,L);return}if(se===pa){x(v,S,L);return}if(G!==2&&z&1&&te)if(G===0)te.beforeEnter(j),a(j,S,L),Ke(()=>te.enter(j),Y);else{const{leave:ee,delayLeave:ne,afterLeave:ie}=te,ue=()=>{v.ctx.isUnmounted?n(j):a(j,S,L)},me=()=>{j._isLeaving&&j[Ot](!0),ee(j,()=>{ue(),ie&&ie()})};ne?ne(j,ue,me):me()}else a(j,S,L)},le=(v,S,L,G=!1,Y=!1)=>{const{type:j,props:se,ref:te,children:F,dynamicChildren:z,shapeFlag:Z,patchFlag:ee,dirs:ne,cacheIndex:ie}=v;if(ee===-2&&(Y=!1),te!=null&&(It(),Bs(te,null,L,v,!0),Nt()),ie!=null&&(S.renderCache[ie]=void 0),Z&256){S.ctx.deactivate(v);return}const ue=Z&1&&ne,me=!Fs(v);let be;if(me&&(be=se&&se.onVnodeBeforeUnmount)&&gt(be,S,v),Z&6)oe(v.component,L,G);else{if(Z&128){v.suspense.unmount(L,G);return}ue&&ss(v,null,S,"beforeUnmount"),Z&64?v.type.remove(v,S,L,X,G):z&&!z.hasOnce&&(j!==_t||ee>0&&ee&64)?pe(z,S,L,!1,!0):(j===_t&&ee&384||!Y&&Z&16)&&pe(F,S,L),G&&de(v)}(me&&(be=se&&se.onVnodeUnmounted)||ue)&&Ke(()=>{be&&gt(be,S,v),ue&&ss(v,null,S,"unmounted")},L)},de=v=>{const{type:S,el:L,anchor:G,transition:Y}=v;if(S===_t){fe(L,G);return}if(S===pa){y(v);return}const j=()=>{n(L),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(v.shapeFlag&1&&Y&&!Y.persisted){const{leave:se,delayLeave:te}=Y,F=()=>se(L,j);te?te(v.el,j,F):F()}else j()},fe=(v,S)=>{let L;for(;v!==S;)L=p(v),n(v),v=L;n(S)},oe=(v,S,L)=>{const{bum:G,scope:Y,job:j,subTree:se,um:te,m:F,a:z}=v;Cr(F),Cr(z),G&&da(G),Y.stop(),j&&(j.flags|=8,le(se,v,S,L)),te&&Ke(te,S),Ke(()=>{v.isUnmounted=!0},S)},pe=(v,S,L,G=!1,Y=!1,j=0)=>{for(let se=j;se<v.length;se++)le(v[se],S,L,G,Y)},O=v=>{if(v.shapeFlag&6)return O(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const S=p(v.anchor||v.el),L=S&&S[wc];return L?p(L):S};let q=!1;const $=(v,S,L)=>{v==null?S._vnode&&le(S._vnode,null,null,!0):m(S._vnode||null,v,S,null,null,null,L),S._vnode=v,q||(q=!0,wr(),fi(),q=!1)},X={p:m,um:le,m:Q,r:de,mt:B,mc:w,pc:I,pbc:h,n:O,o:e};return{render:$,hydrate:void 0,createApp:Yc($)}}function en({type:e,props:t},s){return s==="svg"&&e==="foreignObject"||s==="mathml"&&e==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:s}function as({effect:e,job:t},s){s?(e.flags|=32,t.flags|=4):(e.flags&=-33,t.flags&=-5)}function td(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fi(e,t,s=!1){const a=e.children,n=t.children;if(ce(a)&&ce(n))for(let r=0;r<a.length;r++){const o=a[r];let l=n[r];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=n[r]=jt(n[r]),l.el=o.el),!s&&l.patchFlag!==-2&&Fi(o,l)),l.type===za&&l.patchFlag!==-1&&(l.el=o.el),l.type===We&&!l.el&&(l.el=o.el)}}function sd(e){const t=e.slice(),s=[0];let a,n,r,o,l;const i=e.length;for(a=0;a<i;a++){const c=e[a];if(c!==0){if(n=s[s.length-1],e[n]<c){t[a]=n,s.push(a);continue}for(r=0,o=s.length-1;r<o;)l=r+o>>1,e[s[l]]<c?r=l+1:o=l;c<e[s[r]]&&(r>0&&(t[a]=s[r-1]),s[r]=a)}}for(r=s.length,o=s[r-1];r-- >0;)s[r]=o,o=t[o];return s}function $i(e){const t=e.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:$i(t)}function Cr(e){if(e)for(let t=0;t<e.length;t++)e[t].flags|=8}const ad=Symbol.for("v-scx"),nd=()=>at(ad);function zs(e,t,s){return zi(e,t,s)}function zi(e,t,s=we){const{immediate:a,deep:n,flush:r,once:o}=s,l=Ce({},s),i=t&&a||!t&&r!=="post";let c;if(Ws){if(r==="sync"){const f=nd();c=f.__watcherHandles||(f.__watcherHandles=[])}else if(!i){const f=()=>{};return f.stop=vt,f.resume=vt,f.pause=vt,f}}const d=Ne;l.call=(f,b,m)=>dt(f,d,b,m);let u=!1;r==="post"?l.scheduler=f=>{Ke(f,d&&d.suspense)}:r!=="sync"&&(u=!0,l.scheduler=(f,b)=>{b?f():ar(f)}),l.augmentJob=f=>{t&&(f.flags|=4),u&&(f.flags|=2,d&&(f.id=d.uid,f.i=d))};const p=mc(e,t,l);return Ws&&(c?c.push(p):i&&p()),p}function rd(e,t,s){const a=this.proxy,n=Pe(e)?e.includes(".")?Hi(a,e):()=>a[e]:e.bind(a,a);let r;he(t)?r=t:(r=t.handler,s=t);const o=ta(this),l=zi(n,r.bind(a),s);return o(),l}function Hi(e,t){const s=t.split(".");return()=>{let a=e;for(let n=0;n<s.length&&a;n++)a=a[s[n]];return a}}const od=(e,t)=>t==="modelValue"||t==="model-value"?e.modelModifiers:e[`${t}Modifiers`]||e[`${rt(t)}Modifiers`]||e[`${Zt(t)}Modifiers`];function id(e,t,...s){if(e.isUnmounted)return;const a=e.vnode.props||we;let n=s;const r=t.startsWith("update:"),o=r&&od(a,t.slice(7));o&&(o.trim&&(n=s.map(d=>Pe(d)?d.trim():d)),o.number&&(n=s.map(Rl)));let l,i=a[l=Ka(t)]||a[l=Ka(rt(t))];!i&&r&&(i=a[l=Ka(Zt(t))]),i&&dt(i,e,6,n);const c=a[l+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[l])return;e.emitted[l]=!0,dt(c,e,6,n)}}const ld=new WeakMap;function Ui(e,t,s=!1){const a=s?ld:t.emitsCache,n=a.get(e);if(n!==void 0)return n;const r=e.emits;let o={},l=!1;if(!he(e)){const i=c=>{const d=Ui(c,t,!0);d&&(l=!0,Ce(o,d))};!s&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return!r&&!l?(xe(e)&&a.set(e,null),null):(ce(r)?r.forEach(i=>o[i]=null):Ce(o,r),xe(e)&&a.set(e,o),o)}function $a(e,t){return!e||!Oa(t)?!1:(t=t.slice(2).replace(/Once$/,""),ve(e,t[0].toLowerCase()+t.slice(1))||ve(e,Zt(t))||ve(e,t))}function Lr(e){const{type:t,vnode:s,proxy:a,withProxy:n,propsOptions:[r],slots:o,attrs:l,emit:i,render:c,renderCache:d,props:u,data:p,setupState:f,ctx:b,inheritAttrs:m}=e,k=ya(e);let E,A;try{if(s.shapeFlag&4){const y=n||a,P=y;E=yt(c.call(P,y,d,u,f,p,b)),A=l}else{const y=t;E=yt(y.length>1?y(u,{attrs:l,slots:o,emit:i}):y(u,null)),A=t.props?l:cd(l)}}catch(y){Hs.length=0,Ia(y,e,1),E=je(We)}let x=E;if(A&&m!==!1){const y=Object.keys(A),{shapeFlag:P}=x;y.length&&P&7&&(r&&y.some(Gn)&&(A=dd(A,r)),x=Xt(x,A,!1,!0))}return s.dirs&&(x=Xt(x,null,!1,!0),x.dirs=x.dirs?x.dirs.concat(s.dirs):s.dirs),s.transition&&Ks(x,s.transition),E=x,ya(k),E}const cd=e=>{let t;for(const s in e)(s==="class"||s==="style"||Oa(s))&&((t||(t={}))[s]=e[s]);return t},dd=(e,t)=>{const s={};for(const a in e)(!Gn(a)||!(a.slice(9)in t))&&(s[a]=e[a]);return s};function ud(e,t,s){const{props:a,children:n,component:r}=e,{props:o,children:l,patchFlag:i}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(s&&i>=0){if(i&1024)return!0;if(i&16)return a?Rr(a,o,c):!!o;if(i&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(o[p]!==a[p]&&!$a(c,p))return!0}}}else return(n||l)&&(!l||!l.$stable)?!0:a===o?!1:a?o?Rr(a,o,c):!0:!!o;return!1}function Rr(e,t,s){const a=Object.keys(t);if(a.length!==Object.keys(e).length)return!0;for(let n=0;n<a.length;n++){const r=a[n];if(t[r]!==e[r]&&!$a(s,r))return!0}return!1}function pd({vnode:e,parent:t},s){for(;t;){const a=t.subTree;if(a.suspense&&a.suspense.activeBranch===e&&(a.el=e.el),a===e)(e=t.vnode).el=s,t=t.parent;else break}}const Gi=e=>e.__isSuspense;function fd(e,t){t&&t.pendingBranch?ce(e)?t.effects.push(...e):t.effects.push(e):yc(e)}const _t=Symbol.for("v-fgt"),za=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),pa=Symbol.for("v-stc"),Hs=[];let Qe=null;function Ye(e=!1){Hs.push(Qe=e?null:[])}function hd(){Hs.pop(),Qe=Hs[Hs.length-1]||null}let qs=1;function xa(e,t=!1){qs+=e,e<0&&Qe&&t&&(Qe.hasOnce=!0)}function ji(e){return e.dynamicChildren=qs>0?Qe||ws:null,hd(),qs>0&&Qe&&Qe.push(e),e}function nt(e,t,s,a,n,r){return ji(H(e,t,s,a,n,r,!0))}function Mr(e,t,s,a,n){return ji(je(e,t,s,a,n,!0))}function Ta(e){return e?e.__v_isVNode===!0:!1}function is(e,t){return e.type===t.type&&e.key===t.key}const Yi=({key:e})=>e??null,fa=({ref:e,ref_key:t,ref_for:s})=>(typeof e=="number"&&(e=""+e),e!=null?Pe(e)||ke(e)||he(e)?{i:Xe,r:e,k:t,f:!!s}:e:null);function H(e,t=null,s=null,a=0,n=null,r=e===_t?0:1,o=!1,l=!1){const i={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yi(t),ref:t&&fa(t),scopeId:gi,slotScopeIds:null,children:s,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:a,dynamicProps:n,dynamicChildren:null,appContext:null,ctx:Xe};return l?(or(i,s),r&128&&e.normalize(i)):s&&(i.shapeFlag|=Pe(s)?8:16),qs>0&&!o&&Qe&&(i.patchFlag>0||r&6)&&i.patchFlag!==32&&Qe.push(i),i}const je=gd;function gd(e,t=null,s=null,a=0,n=null,r=!1){if((!e||e===ki)&&(e=We),Ta(e)){const l=Xt(e,t,!0);return s&&or(l,s),qs>0&&!r&&Qe&&(l.shapeFlag&6?Qe[Qe.indexOf(e)]=l:Qe.push(l)),l.patchFlag=-2,l}if(kd(e)&&(e=e.__vccOpts),t){t=md(t);let{class:l,style:i}=t;l&&!Pe(l)&&(t.class=Jt(l)),xe(i)&&(er(i)&&!ce(i)&&(i=Ce({},i)),t.style=Vn(i))}const o=Pe(e)?1:Gi(e)?128:mi(e)?64:xe(e)?4:he(e)?2:0;return H(e,t,s,a,n,o,r,!0)}function md(e){return e?er(e)||Ri(e)?Ce({},e):e:null}function Xt(e,t,s=!1,a=!1){const{props:n,ref:r,patchFlag:o,children:l,transition:i}=e,c=t?bd(n||{},t):n,d={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&Yi(c),ref:t&&t.ref?s&&r?ce(r)?r.concat(fa(t)):[r,fa(t)]:fa(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_t?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:i,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Xt(e.ssContent),ssFallback:e.ssFallback&&Xt(e.ssFallback),placeholder:e.placeholder,el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return i&&a&&Ks(d,i.clone(d)),d}function Ss(e=" ",t=0){return je(za,null,e,t)}function hs(e,t){const s=je(pa,null,e);return s.staticCount=t,s}function yt(e){return e==null||typeof e=="boolean"?je(We):ce(e)?je(_t,null,e.slice()):Ta(e)?jt(e):je(za,null,String(e))}function jt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Xt(e)}function or(e,t){let s=0;const{shapeFlag:a}=e;if(t==null)t=null;else if(ce(t))s=16;else if(typeof t=="object")if(a&65){const n=t.default;n&&(n._c&&(n._d=!1),or(e,n()),n._c&&(n._d=!0));return}else{s=32;const n=t._;!n&&!Ri(t)?t._ctx=Xe:n===3&&Xe&&(Xe.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else he(t)?(t={default:t,_ctx:Xe},s=32):(t=String(t),a&64?(s=16,t=[Ss(t)]):s=8);e.children=t,e.shapeFlag|=s}function bd(...e){const t={};for(let s=0;s<e.length;s++){const a=e[s];for(const n in a)if(n==="class")t.class!==a.class&&(t.class=Jt([t.class,a.class]));else if(n==="style")t.style=Vn([t.style,a.style]);else if(Oa(n)){const r=t[n],o=a[n];o&&r!==o&&!(ce(r)&&r.includes(o))&&(t[n]=r?[].concat(r,o):o)}else n!==""&&(t[n]=a[n])}return t}function gt(e,t,s,a=null){dt(e,t,7,[s,a])}const _d=Oi();let yd=0;function vd(e,t,s){const a=e.type,n=(t?t.appContext:e.appContext)||_d,r={uid:yd++,vnode:e,type:a,parent:t,appContext:n,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Yo(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(n.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Di(a,n),emitsOptions:Ui(a,n),emit:null,emitted:null,propsDefaults:we,inheritAttrs:a.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:s,suspenseId:s?s.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=id.bind(null,r),e.ce&&e.ce(r),r}let Ne=null;const ir=()=>Ne||Xe;let Sa,Ln;{const e=Ma(),t=(s,a)=>{let n;return(n=e[s])||(n=e[s]=[]),n.push(a),r=>{n.length>1?n.forEach(o=>o(r)):n[0](r)}};Sa=t("__VUE_INSTANCE_SETTERS__",s=>Ne=s),Ln=t("__VUE_SSR_SETTERS__",s=>Ws=s)}const ta=e=>{const t=Ne;return Sa(e),e.scope.on(),()=>{e.scope.off(),Sa(t)}},Dr=()=>{Ne&&Ne.scope.off(),Sa(null)};function Vi(e){return e.vnode.shapeFlag&4}let Ws=!1;function wd(e,t=!1,s=!1){t&&Ln(t);const{props:a,children:n}=e.vnode,r=Vi(e);Kc(e,a,r,t),Xc(e,n,s||t);const o=r?xd(e,t):void 0;return t&&Ln(!1),o}function xd(e,t){const s=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,Fc);const{setup:a}=s;if(a){It();const n=e.setupContext=a.length>1?Sd(e):null,r=ta(e),o=ea(a,e,0,[e.props,n]),l=No(o);if(Nt(),r(),(l||e.sp)&&!Fs(e)&&Ti(e),l){if(o.then(Dr,Dr),t)return o.then(i=>{Ir(e,i)}).catch(i=>{Ia(i,e,0)});e.asyncDep=o}else Ir(e,o)}else Ki(e)}function Ir(e,t,s){he(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:xe(t)&&(e.setupState=di(t)),Ki(e)}function Ki(e,t,s){const a=e.type;e.render||(e.render=a.render||vt);{const n=ta(e);It();try{$c(e)}finally{Nt(),n()}}}const Td={get(e,t){return Ie(e,"get",""),e[t]}};function Sd(e){const t=s=>{e.exposed=s||{}};return{attrs:new Proxy(e.attrs,Td),slots:e.slots,emit:e.emit,expose:t}}function Ha(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(di(tr(e.exposed)),{get(t,s){if(s in t)return t[s];if(s in $s)return $s[s](e)},has(t,s){return s in t||s in $s}})):e.proxy}function Ed(e,t=!0){return he(e)?e.displayName||e.name:e.name||t&&e.__name}function kd(e){return he(e)&&"__vccOpts"in e}const Je=(e,t)=>hc(e,t,Ws);function lr(e,t,s){try{xa(-1);const a=arguments.length;return a===2?xe(t)&&!ce(t)?Ta(t)?je(e,null,[t]):je(e,t):je(e,null,t):(a>3?s=Array.prototype.slice.call(arguments,2):a===3&&Ta(s)&&(s=[s]),je(e,t,s))}finally{xa(1)}}const Ad="3.5.24";let Rn;const Nr=typeof window<"u"&&window.trustedTypes;if(Nr)try{Rn=Nr.createPolicy("vue",{createHTML:e=>e})}catch{}const qi=Rn?e=>Rn.createHTML(e):e=>e,Pd="http://www.w3.org/2000/svg",Od="http://www.w3.org/1998/Math/MathML",At=typeof document<"u"?document:null,Br=At&&At.createElement("template"),Cd={insert:(e,t,s)=>{t.insertBefore(e,s||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,s,a)=>{const n=t==="svg"?At.createElementNS(Pd,e):t==="mathml"?At.createElementNS(Od,e):s?At.createElement(e,{is:s}):At.createElement(e);return e==="select"&&a&&a.multiple!=null&&n.setAttribute("multiple",a.multiple),n},createText:e=>At.createTextNode(e),createComment:e=>At.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>At.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,s,a,n,r){const o=s?s.previousSibling:t.lastChild;if(n&&(n===r||n.nextSibling))for(;t.insertBefore(n.cloneNode(!0),s),!(n===r||!(n=n.nextSibling)););else{Br.innerHTML=qi(a==="svg"?`<svg>${e}</svg>`:a==="mathml"?`<math>${e}</math>`:e);const l=Br.content;if(a==="svg"||a==="mathml"){const i=l.firstChild;for(;i.firstChild;)l.appendChild(i.firstChild);l.removeChild(i)}t.insertBefore(l,s)}return[o?o.nextSibling:t.firstChild,s?s.previousSibling:t.lastChild]}},zt="transition",Cs="animation",Js=Symbol("_vtc"),Wi={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Ld=Ce({},bi,Wi),Rd=e=>(e.displayName="Transition",e.props=Ld,e),Md=Rd((e,{slots:t})=>lr(Sc,Dd(e),t)),ns=(e,t=[])=>{ce(e)?e.forEach(s=>s(...t)):e&&e(...t)},Fr=e=>e?ce(e)?e.some(t=>t.length>1):e.length>1:!1;function Dd(e){const t={};for(const _ in e)_ in Wi||(t[_]=e[_]);if(e.css===!1)return t;const{name:s="v",type:a,duration:n,enterFromClass:r=`${s}-enter-from`,enterActiveClass:o=`${s}-enter-active`,enterToClass:l=`${s}-enter-to`,appearFromClass:i=r,appearActiveClass:c=o,appearToClass:d=l,leaveFromClass:u=`${s}-leave-from`,leaveActiveClass:p=`${s}-leave-active`,leaveToClass:f=`${s}-leave-to`}=e,b=Id(n),m=b&&b[0],k=b&&b[1],{onBeforeEnter:E,onEnter:A,onEnterCancelled:x,onLeave:y,onLeaveCancelled:P,onBeforeAppear:M=E,onAppear:R=A,onAppearCancelled:w=x}=t,g=(_,C,B,K)=>{_._enterCancelled=K,rs(_,C?d:l),rs(_,C?c:o),B&&B()},h=(_,C)=>{_._isLeaving=!1,rs(_,u),rs(_,f),rs(_,p),C&&C()},T=_=>(C,B)=>{const K=_?R:A,V=()=>g(C,_,B);ns(K,[C,V]),$r(()=>{rs(C,_?i:r),Et(C,_?d:l),Fr(K)||zr(C,a,m,V)})};return Ce(t,{onBeforeEnter(_){ns(E,[_]),Et(_,r),Et(_,o)},onBeforeAppear(_){ns(M,[_]),Et(_,i),Et(_,c)},onEnter:T(!1),onAppear:T(!0),onLeave(_,C){_._isLeaving=!0;const B=()=>h(_,C);Et(_,u),_._enterCancelled?(Et(_,p),Gr(_)):(Gr(_),Et(_,p)),$r(()=>{_._isLeaving&&(rs(_,u),Et(_,f),Fr(y)||zr(_,a,k,B))}),ns(y,[_,B])},onEnterCancelled(_){g(_,!1,void 0,!0),ns(x,[_])},onAppearCancelled(_){g(_,!0,void 0,!0),ns(w,[_])},onLeaveCancelled(_){h(_),ns(P,[_])}})}function Id(e){if(e==null)return null;if(xe(e))return[tn(e.enter),tn(e.leave)];{const t=tn(e);return[t,t]}}function tn(e){return Ml(e)}function Et(e,t){t.split(/\s+/).forEach(s=>s&&e.classList.add(s)),(e[Js]||(e[Js]=new Set)).add(t)}function rs(e,t){t.split(/\s+/).forEach(a=>a&&e.classList.remove(a));const s=e[Js];s&&(s.delete(t),s.size||(e[Js]=void 0))}function $r(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Nd=0;function zr(e,t,s,a){const n=e._endId=++Nd,r=()=>{n===e._endId&&a()};if(s!=null)return setTimeout(r,s);const{type:o,timeout:l,propCount:i}=Bd(e,t);if(!o)return a();const c=o+"end";let d=0;const u=()=>{e.removeEventListener(c,p),r()},p=f=>{f.target===e&&++d>=i&&u()};setTimeout(()=>{d<i&&u()},l+1),e.addEventListener(c,p)}function Bd(e,t){const s=window.getComputedStyle(e),a=b=>(s[b]||"").split(", "),n=a(`${zt}Delay`),r=a(`${zt}Duration`),o=Hr(n,r),l=a(`${Cs}Delay`),i=a(`${Cs}Duration`),c=Hr(l,i);let d=null,u=0,p=0;t===zt?o>0&&(d=zt,u=o,p=r.length):t===Cs?c>0&&(d=Cs,u=c,p=i.length):(u=Math.max(o,c),d=u>0?o>c?zt:Cs:null,p=d?d===zt?r.length:i.length:0);const f=d===zt&&/\b(?:transform|all)(?:,|$)/.test(a(`${zt}Property`).toString());return{type:d,timeout:u,propCount:p,hasTransform:f}}function Hr(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((s,a)=>Ur(s)+Ur(e[a])))}function Ur(e){return e==="auto"?0:Number(e.slice(0,-1).replace(",","."))*1e3}function Gr(e){return(e?e.ownerDocument:document).body.offsetHeight}function Fd(e,t,s){const a=e[Js];a&&(t=(t?[t,...a]:[...a]).join(" ")),t==null?e.removeAttribute("class"):s?e.setAttribute("class",t):e.className=t}const jr=Symbol("_vod"),$d=Symbol("_vsh"),zd=Symbol(""),Hd=/(?:^|;)\s*display\s*:/;function Ud(e,t,s){const a=e.style,n=Pe(s);let r=!1;if(s&&!n){if(t)if(Pe(t))for(const o of t.split(";")){const l=o.slice(0,o.indexOf(":")).trim();s[l]==null&&ha(a,l,"")}else for(const o in t)s[o]==null&&ha(a,o,"");for(const o in s)o==="display"&&(r=!0),ha(a,o,s[o])}else if(n){if(t!==s){const o=a[zd];o&&(s+=";"+o),a.cssText=s,r=Hd.test(s)}}else t&&e.removeAttribute("style");jr in e&&(e[jr]=r?a.display:"",e[$d]&&(a.display="none"))}const Yr=/\s*!important$/;function ha(e,t,s){if(ce(s))s.forEach(a=>ha(e,t,a));else if(s==null&&(s=""),t.startsWith("--"))e.setProperty(t,s);else{const a=Gd(e,t);Yr.test(s)?e.setProperty(Zt(a),s.replace(Yr,""),"important"):e[a]=s}}const Vr=["Webkit","Moz","ms"],sn={};function Gd(e,t){const s=sn[t];if(s)return s;let a=rt(t);if(a!=="filter"&&a in e)return sn[t]=a;a=Ra(a);for(let n=0;n<Vr.length;n++){const r=Vr[n]+a;if(r in e)return sn[t]=r}return t}const Kr="http://www.w3.org/1999/xlink";function qr(e,t,s,a,n,r=$l(t)){a&&t.startsWith("xlink:")?s==null?e.removeAttributeNS(Kr,t.slice(6,t.length)):e.setAttributeNS(Kr,t,s):s==null||r&&!zo(s)?e.removeAttribute(t):e.setAttribute(t,r?"":xt(s)?String(s):s)}function Wr(e,t,s,a,n){if(t==="innerHTML"||t==="textContent"){s!=null&&(e[t]=t==="innerHTML"?qi(s):s);return}const r=e.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const l=r==="OPTION"?e.getAttribute("value")||"":e.value,i=s==null?e.type==="checkbox"?"on":"":String(s);(l!==i||!("_value"in e))&&(e.value=i),s==null&&e.removeAttribute(t),e._value=s;return}let o=!1;if(s===""||s==null){const l=typeof e[t];l==="boolean"?s=zo(s):s==null&&l==="string"?(s="",o=!0):l==="number"&&(s=0,o=!0)}try{e[t]=s}catch{}o&&e.removeAttribute(n||t)}function Ji(e,t,s,a){e.addEventListener(t,s,a)}function jd(e,t,s,a){e.removeEventListener(t,s,a)}const Jr=Symbol("_vei");function Yd(e,t,s,a,n=null){const r=e[Jr]||(e[Jr]={}),o=r[t];if(a&&o)o.value=a;else{const[l,i]=Vd(t);if(a){const c=r[t]=Wd(a,n);Ji(e,l,c,i)}else o&&(jd(e,l,o,i),r[t]=void 0)}}const Xr=/(?:Once|Passive|Capture)$/;function Vd(e){let t;if(Xr.test(e)){t={};let a;for(;a=e.match(Xr);)e=e.slice(0,e.length-a[0].length),t[a[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Zt(e.slice(2)),t]}let an=0;const Kd=Promise.resolve(),qd=()=>an||(Kd.then(()=>an=0),an=Date.now());function Wd(e,t){const s=a=>{if(!a._vts)a._vts=Date.now();else if(a._vts<=s.attached)return;dt(Jd(a,s.value),t,5,[a])};return s.value=e,s.attached=qd(),s}function Jd(e,t){if(ce(t)){const s=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{s.call(e),e._stopped=!0},t.map(a=>n=>!n._stopped&&a&&a(n))}else return t}const Qr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Xd=(e,t,s,a,n,r)=>{const o=n==="svg";t==="class"?Fd(e,a,o):t==="style"?Ud(e,s,a):Oa(t)?Gn(t)||Yd(e,t,s,a,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Qd(e,t,a,o))?(Wr(e,t,a),!e.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&qr(e,t,a,o,r,t!=="value")):e._isVueCE&&(/[A-Z]/.test(t)||!Pe(a))?Wr(e,rt(t),a,r,t):(t==="true-value"?e._trueValue=a:t==="false-value"&&(e._falseValue=a),qr(e,t,a,o))};function Qd(e,t,s,a){if(a)return!!(t==="innerHTML"||t==="textContent"||t in e&&Qr(t)&&he(s));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&e.tagName==="IFRAME"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const n=e.tagName;if(n==="IMG"||n==="VIDEO"||n==="CANVAS"||n==="SOURCE")return!1}return Qr(t)&&Pe(s)?!1:t in e}const Zr=e=>{const t=e.props["onUpdate:modelValue"]||!1;return ce(t)?s=>da(t,s):t},nn=Symbol("_assign"),Zd={deep:!0,created(e,t,s){e[nn]=Zr(s),Ji(e,"change",()=>{const a=e._modelValue,n=eu(e),r=e.checked,o=e[nn];if(ce(a)){const l=Ho(a,n),i=l!==-1;if(r&&!i)o(a.concat(n));else if(!r&&i){const c=[...a];c.splice(l,1),o(c)}}else if(Ca(a)){const l=new Set(a);r?l.add(n):l.delete(n),o(l)}else o(Xi(e,r))})},mounted:eo,beforeUpdate(e,t,s){e[nn]=Zr(s),eo(e,t,s)}};function eo(e,{value:t,oldValue:s},a){e._modelValue=t;let n;if(ce(t))n=Ho(t,a.props.value)>-1;else if(Ca(t))n=t.has(a.props.value);else{if(t===s)return;n=Da(t,Xi(e,!0))}e.checked!==n&&(e.checked=n)}function eu(e){return"_value"in e?e._value:e.value}function Xi(e,t){const s=t?"_trueValue":"_falseValue";return s in e?e[s]:t}const tu=["ctrl","shift","alt","meta"],su={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>tu.some(s=>e[`${s}Key`]&&!t.includes(s))},Ua=(e,t)=>{const s=e._withMods||(e._withMods={}),a=t.join(".");return s[a]||(s[a]=((n,...r)=>{for(let o=0;o<t.length;o++){const l=su[t[o]];if(l&&l(n,t))return}return e(n,...r)}))},au={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ct=(e,t)=>{const s=e._withKeys||(e._withKeys={}),a=t.join(".");return s[a]||(s[a]=(n=>{if(!("key"in n))return;const r=Zt(n.key);if(t.some(o=>o===r||au[o]===r))return e(n)}))},nu=Ce({patchProp:Xd},Cd);let to;function ru(){return to||(to=Zc(nu))}const ou=((...e)=>{const t=ru().createApp(...e),{mount:s}=t;return t.mount=a=>{const n=lu(a);if(!n)return;const r=t._component;!he(r)&&!r.render&&!r.template&&(r.template=n.innerHTML),n.nodeType===1&&(n.textContent="");const o=s(n,!1,iu(n));return n instanceof Element&&(n.removeAttribute("v-cloak"),n.setAttribute("data-v-app","")),o},t});function iu(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function lu(e){return Pe(e)?document.querySelector(e):e}let Qi;const Ga=e=>Qi=e,Zi=Symbol();function Mn(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var Us;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(Us||(Us={}));function cu(){const e=Vo(!0),t=e.run(()=>Ze({}));let s=[],a=[];const n=tr({install(r){Ga(n),n._a=r,r.provide(Zi,n),r.config.globalProperties.$pinia=n,a.forEach(o=>s.push(o)),a=[]},use(r){return this._a?s.push(r):a.push(r),this},_p:s,_a:null,_e:e,_s:new Map,state:t});return n}const el=()=>{};function so(e,t,s,a=el){e.add(t);const n=()=>{e.delete(t)&&a()};return!s&&Ko()&&Hl(n),n}function ms(e,...t){e.forEach(s=>{s(...t)})}const du=e=>e(),ao=Symbol(),rn=Symbol();function Dn(e,t){e instanceof Map&&t instanceof Map?t.forEach((s,a)=>e.set(a,s)):e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const s in t){if(!t.hasOwnProperty(s))continue;const a=t[s],n=e[s];Mn(n)&&Mn(a)&&e.hasOwnProperty(s)&&!ke(a)&&!us(a)?e[s]=Dn(n,a):e[s]=a}return e}const uu=Symbol();function pu(e){return!Mn(e)||!Object.prototype.hasOwnProperty.call(e,uu)}const{assign:Ut}=Object;function fu(e){return!!(ke(e)&&e.effect)}function hu(e,t,s,a){const{state:n,actions:r,getters:o}=t,l=s.state.value[e];let i;function c(){l||(s.state.value[e]=n?n():{});const d=dc(s.state.value[e]);return Ut(d,r,Object.keys(o||{}).reduce((u,p)=>(u[p]=tr(Je(()=>{Ga(s);const f=s._s.get(e);return o[p].call(f,f)})),u),{}))}return i=tl(e,c,t,s,a,!0),i}function tl(e,t,s={},a,n,r){let o;const l=Ut({actions:{}},s),i={deep:!0};let c,d,u=new Set,p=new Set,f;const b=a.state.value[e];!r&&!b&&(a.state.value[e]={}),Ze({});let m;function k(w){let g;c=d=!1,typeof w=="function"?(w(a.state.value[e]),g={type:Us.patchFunction,storeId:e,events:f}):(Dn(a.state.value[e],w),g={type:Us.patchObject,payload:w,storeId:e,events:f});const h=m=Symbol();sr().then(()=>{m===h&&(c=!0)}),d=!0,ms(u,g,a.state.value[e])}const E=r?function(){const{state:g}=s,h=g?g():{};this.$patch(T=>{Ut(T,h)})}:el;function A(){o.stop(),u.clear(),p.clear(),a._s.delete(e)}const x=(w,g="")=>{if(ao in w)return w[rn]=g,w;const h=function(){Ga(a);const T=Array.from(arguments),_=new Set,C=new Set;function B(D){_.add(D)}function K(D){C.add(D)}ms(p,{args:T,name:h[rn],store:P,after:B,onError:K});let V;try{V=w.apply(this&&this.$id===e?this:P,T)}catch(D){throw ms(C,D),D}return V instanceof Promise?V.then(D=>(ms(_,D),D)).catch(D=>(ms(C,D),Promise.reject(D))):(ms(_,V),V)};return h[ao]=!0,h[rn]=g,h},y={_p:a,$id:e,$onAction:so.bind(null,p),$patch:k,$reset:E,$subscribe(w,g={}){const h=so(u,w,g.detached,()=>T()),T=o.run(()=>zs(()=>a.state.value[e],_=>{(g.flush==="sync"?d:c)&&w({storeId:e,type:Us.direct,events:f},_)},Ut({},i,g)));return h},$dispose:A},P=Mt(y);a._s.set(e,P);const R=(a._a&&a._a.runWithContext||du)(()=>a._e.run(()=>(o=Vo()).run(()=>t({action:x}))));for(const w in R){const g=R[w];if(ke(g)&&!fu(g)||us(g))r||(b&&pu(g)&&(ke(g)?g.value=b[w]:Dn(g,b[w])),a.state.value[e][w]=g);else if(typeof g=="function"){const h=x(g,w);R[w]=h,l.actions[w]=g}}return Ut(P,R),Ut(ge(P),R),Object.defineProperty(P,"$state",{get:()=>a.state.value[e],set:w=>{k(g=>{Ut(g,w)})}}),a._p.forEach(w=>{Ut(P,o.run(()=>w({store:P,app:a._a,pinia:a,options:l})))}),b&&r&&s.hydrate&&s.hydrate(P.$state,b),c=!0,d=!0,P}function gu(e,t,s){let a;const n=typeof t=="function";a=n?s:t;function r(o,l){const i=Vc();return o=o||(i?at(Zi,null):null),o&&Ga(o),o=Qi,o._s.has(e)||(n?tl(e,t,a,o):hu(e,a,o)),o._s.get(e)}return r.$id=e,r}const vs=typeof document<"u";function sl(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function mu(e){return e.__esModule||e[Symbol.toStringTag]==="Module"||e.default&&sl(e.default)}const ye=Object.assign;function on(e,t){const s={};for(const a in t){const n=t[a];s[a]=ut(n)?n.map(e):e(n)}return s}const Gs=()=>{},ut=Array.isArray;function no(e,t){const s={};for(const a in e)s[a]=a in t?t[a]:e[a];return s}const al=/#/g,bu=/&/g,_u=/\//g,yu=/=/g,vu=/\?/g,nl=/\+/g,wu=/%5B/g,xu=/%5D/g,rl=/%5E/g,Tu=/%60/g,ol=/%7B/g,Su=/%7C/g,il=/%7D/g,Eu=/%20/g;function cr(e){return e==null?"":encodeURI(""+e).replace(Su,"|").replace(wu,"[").replace(xu,"]")}function ku(e){return cr(e).replace(ol,"{").replace(il,"}").replace(rl,"^")}function In(e){return cr(e).replace(nl,"%2B").replace(Eu,"+").replace(al,"%23").replace(bu,"%26").replace(Tu,"`").replace(ol,"{").replace(il,"}").replace(rl,"^")}function Au(e){return In(e).replace(yu,"%3D")}function Pu(e){return cr(e).replace(al,"%23").replace(vu,"%3F")}function Ou(e){return Pu(e).replace(_u,"%2F")}function Xs(e){if(e==null)return null;try{return decodeURIComponent(""+e)}catch{}return""+e}const Cu=/\/$/,Lu=e=>e.replace(Cu,"");function ln(e,t,s="/"){let a,n={},r="",o="";const l=t.indexOf("#");let i=t.indexOf("?");return i=l>=0&&i>l?-1:i,i>=0&&(a=t.slice(0,i),r=t.slice(i,l>0?l:t.length),n=e(r.slice(1))),l>=0&&(a=a||t.slice(0,l),o=t.slice(l,t.length)),a=Iu(a??t,s),{fullPath:a+r+o,path:a,query:n,hash:Xs(o)}}function Ru(e,t){const s=t.query?e(t.query):"";return t.path+(s&&"?")+s+(t.hash||"")}function ro(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Mu(e,t,s){const a=t.matched.length-1,n=s.matched.length-1;return a>-1&&a===n&&Es(t.matched[a],s.matched[n])&&ll(t.params,s.params)&&e(t.query)===e(s.query)&&t.hash===s.hash}function Es(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ll(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const s in e)if(!Du(e[s],t[s]))return!1;return!0}function Du(e,t){return ut(e)?oo(e,t):ut(t)?oo(t,e):e===t}function oo(e,t){return ut(t)?e.length===t.length&&e.every((s,a)=>s===t[a]):e.length===1&&e[0]===t}function Iu(e,t){if(e.startsWith("/"))return e;if(!e)return t;const s=t.split("/"),a=e.split("/"),n=a[a.length-1];(n===".."||n===".")&&a.push("");let r=s.length-1,o,l;for(o=0;o<a.length;o++)if(l=a[o],l!==".")if(l==="..")r>1&&r--;else break;return s.slice(0,r).join("/")+"/"+a.slice(o).join("/")}const Ht={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Nn=(function(e){return e.pop="pop",e.push="push",e})({}),cn=(function(e){return e.back="back",e.forward="forward",e.unknown="",e})({});function Nu(e){if(!e)if(vs){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),Lu(e)}const Bu=/^[^#]+#/;function Fu(e,t){return e.replace(Bu,"#")+t}function $u(e,t){const s=document.documentElement.getBoundingClientRect(),a=e.getBoundingClientRect();return{behavior:t.behavior,left:a.left-s.left-(t.left||0),top:a.top-s.top-(t.top||0)}}const ja=()=>({left:window.scrollX,top:window.scrollY});function zu(e){let t;if("el"in e){const s=e.el,a=typeof s=="string"&&s.startsWith("#"),n=typeof s=="string"?a?document.getElementById(s.slice(1)):document.querySelector(s):s;if(!n)return;t=$u(n,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.scrollX,t.top!=null?t.top:window.scrollY)}function io(e,t){return(history.state?history.state.position-t:-1)+e}const Bn=new Map;function Hu(e,t){Bn.set(e,t)}function Uu(e){const t=Bn.get(e);return Bn.delete(e),t}function Gu(e){return typeof e=="string"||e&&typeof e=="object"}function cl(e){return typeof e=="string"||typeof e=="symbol"}let Ee=(function(e){return e[e.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",e[e.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",e[e.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",e[e.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",e[e.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",e})({});const dl=Symbol("");Ee.MATCHER_NOT_FOUND+"",Ee.NAVIGATION_GUARD_REDIRECT+"",Ee.NAVIGATION_ABORTED+"",Ee.NAVIGATION_CANCELLED+"",Ee.NAVIGATION_DUPLICATED+"";function ks(e,t){return ye(new Error,{type:e,[dl]:!0},t)}function kt(e,t){return e instanceof Error&&dl in e&&(t==null||!!(e.type&t))}const ju=["params","query","hash"];function Yu(e){if(typeof e=="string")return e;if(e.path!=null)return e.path;const t={};for(const s of ju)s in e&&(t[s]=e[s]);return JSON.stringify(t,null,2)}function Vu(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let a=0;a<s.length;++a){const n=s[a].replace(nl," "),r=n.indexOf("="),o=Xs(r<0?n:n.slice(0,r)),l=r<0?null:Xs(n.slice(r+1));if(o in t){let i=t[o];ut(i)||(i=t[o]=[i]),i.push(l)}else t[o]=l}return t}function lo(e){let t="";for(let s in e){const a=e[s];if(s=Au(s),a==null){a!==void 0&&(t+=(t.length?"&":"")+s);continue}(ut(a)?a.map(n=>n&&In(n)):[a&&In(a)]).forEach(n=>{n!==void 0&&(t+=(t.length?"&":"")+s,n!=null&&(t+="="+n))})}return t}function Ku(e){const t={};for(const s in e){const a=e[s];a!==void 0&&(t[s]=ut(a)?a.map(n=>n==null?null:""+n):a==null?a:""+a)}return t}const qu=Symbol(""),co=Symbol(""),Ya=Symbol(""),dr=Symbol(""),Fn=Symbol("");function Ls(){let e=[];function t(a){return e.push(a),()=>{const n=e.indexOf(a);n>-1&&e.splice(n,1)}}function s(){e=[]}return{add:t,list:()=>e.slice(),reset:s}}function Yt(e,t,s,a,n,r=o=>o()){const o=a&&(a.enterCallbacks[n]=a.enterCallbacks[n]||[]);return()=>new Promise((l,i)=>{const c=p=>{p===!1?i(ks(Ee.NAVIGATION_ABORTED,{from:s,to:t})):p instanceof Error?i(p):Gu(p)?i(ks(Ee.NAVIGATION_GUARD_REDIRECT,{from:t,to:p})):(o&&a.enterCallbacks[n]===o&&typeof p=="function"&&o.push(p),l())},d=r(()=>e.call(a&&a.instances[n],t,s,c));let u=Promise.resolve(d);e.length<3&&(u=u.then(c)),u.catch(p=>i(p))})}function dn(e,t,s,a,n=r=>r()){const r=[];for(const o of e)for(const l in o.components){let i=o.components[l];if(!(t!=="beforeRouteEnter"&&!o.instances[l]))if(sl(i)){const c=(i.__vccOpts||i)[t];c&&r.push(Yt(c,s,a,o,l,n))}else{let c=i();r.push(()=>c.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${l}" at "${o.path}"`);const u=mu(d)?d.default:d;o.mods[l]=d,o.components[l]=u;const p=(u.__vccOpts||u)[t];return p&&Yt(p,s,a,o,l,n)()}))}}return r}function Wu(e,t){const s=[],a=[],n=[],r=Math.max(t.matched.length,e.matched.length);for(let o=0;o<r;o++){const l=t.matched[o];l&&(e.matched.find(c=>Es(c,l))?a.push(l):s.push(l));const i=e.matched[o];i&&(t.matched.find(c=>Es(c,i))||n.push(i))}return[s,a,n]}let Ju=()=>location.protocol+"//"+location.host;function ul(e,t){const{pathname:s,search:a,hash:n}=t,r=e.indexOf("#");if(r>-1){let o=n.includes(e.slice(r))?e.slice(r).length:1,l=n.slice(o);return l[0]!=="/"&&(l="/"+l),ro(l,"")}return ro(s,e)+a+n}function Xu(e,t,s,a){let n=[],r=[],o=null;const l=({state:p})=>{const f=ul(e,location),b=s.value,m=t.value;let k=0;if(p){if(s.value=f,t.value=p,o&&o===b){o=null;return}k=m?p.position-m.position:0}else a(f);n.forEach(E=>{E(s.value,b,{delta:k,type:Nn.pop,direction:k?k>0?cn.forward:cn.back:cn.unknown})})};function i(){o=s.value}function c(p){n.push(p);const f=()=>{const b=n.indexOf(p);b>-1&&n.splice(b,1)};return r.push(f),f}function d(){if(document.visibilityState==="hidden"){const{history:p}=window;if(!p.state)return;p.replaceState(ye({},p.state,{scroll:ja()}),"")}}function u(){for(const p of r)p();r=[],window.removeEventListener("popstate",l),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",l),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:i,listen:c,destroy:u}}function uo(e,t,s,a=!1,n=!1){return{back:e,current:t,forward:s,replaced:a,position:window.history.length,scroll:n?ja():null}}function Qu(e){const{history:t,location:s}=window,a={value:ul(e,s)},n={value:t.state};n.value||r(a.value,{back:null,current:a.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(i,c,d){const u=e.indexOf("#"),p=u>-1?(s.host&&document.querySelector("base")?e:e.slice(u))+i:Ju()+e+i;try{t[d?"replaceState":"pushState"](c,"",p),n.value=c}catch(f){console.error(f),s[d?"replace":"assign"](p)}}function o(i,c){r(i,ye({},t.state,uo(n.value.back,i,n.value.forward,!0),c,{position:n.value.position}),!0),a.value=i}function l(i,c){const d=ye({},n.value,t.state,{forward:i,scroll:ja()});r(d.current,d,!0),r(i,ye({},uo(a.value,i,null),{position:d.position+1},c),!1),a.value=i}return{location:a,state:n,push:l,replace:o}}function Zu(e){e=Nu(e);const t=Qu(e),s=Xu(e,t.state,t.location,t.replace);function a(r,o=!0){o||s.pauseListeners(),history.go(r)}const n=ye({location:"",base:e,go:a,createHref:Fu.bind(null,e)},t,s);return Object.defineProperty(n,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(n,"state",{enumerable:!0,get:()=>t.state.value}),n}function ep(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),Zu(e)}let cs=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.Group=2]="Group",e})({});var Oe=(function(e){return e[e.Static=0]="Static",e[e.Param=1]="Param",e[e.ParamRegExp=2]="ParamRegExp",e[e.ParamRegExpEnd=3]="ParamRegExpEnd",e[e.EscapeNext=4]="EscapeNext",e})(Oe||{});const tp={type:cs.Static,value:""},sp=/[a-zA-Z0-9_]/;function ap(e){if(!e)return[[]];if(e==="/")return[[tp]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(f){throw new Error(`ERR (${s})/"${c}": ${f}`)}let s=Oe.Static,a=s;const n=[];let r;function o(){r&&n.push(r),r=[]}let l=0,i,c="",d="";function u(){c&&(s===Oe.Static?r.push({type:cs.Static,value:c}):s===Oe.Param||s===Oe.ParamRegExp||s===Oe.ParamRegExpEnd?(r.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:cs.Param,value:c,regexp:d,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),c="")}function p(){c+=i}for(;l<e.length;){if(i=e[l++],i==="\\"&&s!==Oe.ParamRegExp){a=s,s=Oe.EscapeNext;continue}switch(s){case Oe.Static:i==="/"?(c&&u(),o()):i===":"?(u(),s=Oe.Param):p();break;case Oe.EscapeNext:p(),s=a;break;case Oe.Param:i==="("?s=Oe.ParamRegExp:sp.test(i)?p():(u(),s=Oe.Static,i!=="*"&&i!=="?"&&i!=="+"&&l--);break;case Oe.ParamRegExp:i===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+i:s=Oe.ParamRegExpEnd:d+=i;break;case Oe.ParamRegExpEnd:u(),s=Oe.Static,i!=="*"&&i!=="?"&&i!=="+"&&l--,d="";break;default:t("Unknown state");break}}return s===Oe.ParamRegExp&&t(`Unfinished custom RegExp for param "${c}"`),u(),o(),n}const po="[^/]+?",np={sensitive:!1,strict:!1,start:!0,end:!0};var Fe=(function(e){return e[e._multiplier=10]="_multiplier",e[e.Root=90]="Root",e[e.Segment=40]="Segment",e[e.SubSegment=30]="SubSegment",e[e.Static=40]="Static",e[e.Dynamic=20]="Dynamic",e[e.BonusCustomRegExp=10]="BonusCustomRegExp",e[e.BonusWildcard=-50]="BonusWildcard",e[e.BonusRepeatable=-20]="BonusRepeatable",e[e.BonusOptional=-8]="BonusOptional",e[e.BonusStrict=.7000000000000001]="BonusStrict",e[e.BonusCaseSensitive=.25]="BonusCaseSensitive",e})(Fe||{});const rp=/[.+*?^${}()[\]/\\]/g;function op(e,t){const s=ye({},np,t),a=[];let n=s.start?"^":"";const r=[];for(const c of e){const d=c.length?[]:[Fe.Root];s.strict&&!c.length&&(n+="/");for(let u=0;u<c.length;u++){const p=c[u];let f=Fe.Segment+(s.sensitive?Fe.BonusCaseSensitive:0);if(p.type===cs.Static)u||(n+="/"),n+=p.value.replace(rp,"\\$&"),f+=Fe.Static;else if(p.type===cs.Param){const{value:b,repeatable:m,optional:k,regexp:E}=p;r.push({name:b,repeatable:m,optional:k});const A=E||po;if(A!==po){f+=Fe.BonusCustomRegExp;try{`${A}`}catch(y){throw new Error(`Invalid custom RegExp for param "${b}" (${A}): `+y.message)}}let x=m?`((?:${A})(?:/(?:${A}))*)`:`(${A})`;u||(x=k&&c.length<2?`(?:/${x})`:"/"+x),k&&(x+="?"),n+=x,f+=Fe.Dynamic,k&&(f+=Fe.BonusOptional),m&&(f+=Fe.BonusRepeatable),A===".*"&&(f+=Fe.BonusWildcard)}d.push(f)}a.push(d)}if(s.strict&&s.end){const c=a.length-1;a[c][a[c].length-1]+=Fe.BonusStrict}s.strict||(n+="/?"),s.end?n+="$":s.strict&&!n.endsWith("/")&&(n+="(?:/|$)");const o=new RegExp(n,s.sensitive?"":"i");function l(c){const d=c.match(o),u={};if(!d)return null;for(let p=1;p<d.length;p++){const f=d[p]||"",b=r[p-1];u[b.name]=f&&b.repeatable?f.split("/"):f}return u}function i(c){let d="",u=!1;for(const p of e){(!u||!d.endsWith("/"))&&(d+="/"),u=!1;for(const f of p)if(f.type===cs.Static)d+=f.value;else if(f.type===cs.Param){const{value:b,repeatable:m,optional:k}=f,E=b in c?c[b]:"";if(ut(E)&&!m)throw new Error(`Provided param "${b}" is an array but it is not repeatable (* or + modifiers)`);const A=ut(E)?E.join("/"):E;if(!A)if(k)p.length<2&&(d.endsWith("/")?d=d.slice(0,-1):u=!0);else throw new Error(`Missing required param "${b}"`);d+=A}}return d||"/"}return{re:o,score:a,keys:r,parse:l,stringify:i}}function ip(e,t){let s=0;for(;s<e.length&&s<t.length;){const a=t[s]-e[s];if(a)return a;s++}return e.length<t.length?e.length===1&&e[0]===Fe.Static+Fe.Segment?-1:1:e.length>t.length?t.length===1&&t[0]===Fe.Static+Fe.Segment?1:-1:0}function pl(e,t){let s=0;const a=e.score,n=t.score;for(;s<a.length&&s<n.length;){const r=ip(a[s],n[s]);if(r)return r;s++}if(Math.abs(n.length-a.length)===1){if(fo(a))return 1;if(fo(n))return-1}return n.length-a.length}function fo(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const lp={strict:!1,end:!0,sensitive:!1};function cp(e,t,s){const a=op(ap(e.path),s),n=ye(a,{record:e,parent:t,children:[],alias:[]});return t&&!n.record.aliasOf==!t.record.aliasOf&&t.children.push(n),n}function dp(e,t){const s=[],a=new Map;t=no(lp,t);function n(u){return a.get(u)}function r(u,p,f){const b=!f,m=go(u);m.aliasOf=f&&f.record;const k=no(t,u),E=[m];if("alias"in u){const y=typeof u.alias=="string"?[u.alias]:u.alias;for(const P of y)E.push(go(ye({},m,{components:f?f.record.components:m.components,path:P,aliasOf:f?f.record:m})))}let A,x;for(const y of E){const{path:P}=y;if(p&&P[0]!=="/"){const M=p.record.path,R=M[M.length-1]==="/"?"":"/";y.path=p.record.path+(P&&R+P)}if(A=cp(y,p,k),f?f.alias.push(A):(x=x||A,x!==A&&x.alias.push(A),b&&u.name&&!mo(A)&&o(u.name)),fl(A)&&i(A),m.children){const M=m.children;for(let R=0;R<M.length;R++)r(M[R],A,f&&f.children[R])}f=f||A}return x?()=>{o(x)}:Gs}function o(u){if(cl(u)){const p=a.get(u);p&&(a.delete(u),s.splice(s.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=s.indexOf(u);p>-1&&(s.splice(p,1),u.record.name&&a.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function l(){return s}function i(u){const p=fp(u,s);s.splice(p,0,u),u.record.name&&!mo(u)&&a.set(u.record.name,u)}function c(u,p){let f,b={},m,k;if("name"in u&&u.name){if(f=a.get(u.name),!f)throw ks(Ee.MATCHER_NOT_FOUND,{location:u});k=f.record.name,b=ye(ho(p.params,f.keys.filter(x=>!x.optional).concat(f.parent?f.parent.keys.filter(x=>x.optional):[]).map(x=>x.name)),u.params&&ho(u.params,f.keys.map(x=>x.name))),m=f.stringify(b)}else if(u.path!=null)m=u.path,f=s.find(x=>x.re.test(m)),f&&(b=f.parse(m),k=f.record.name);else{if(f=p.name?a.get(p.name):s.find(x=>x.re.test(p.path)),!f)throw ks(Ee.MATCHER_NOT_FOUND,{location:u,currentLocation:p});k=f.record.name,b=ye({},p.params,u.params),m=f.stringify(b)}const E=[];let A=f;for(;A;)E.unshift(A.record),A=A.parent;return{name:k,path:m,params:b,matched:E,meta:pp(E)}}e.forEach(u=>r(u));function d(){s.length=0,a.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:d,getRoutes:l,getRecordMatcher:n}}function ho(e,t){const s={};for(const a of t)a in e&&(s[a]=e[a]);return s}function go(e){const t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:up(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function up(e){const t={},s=e.props||!1;if("component"in e)t.default=s;else for(const a in e.components)t[a]=typeof s=="object"?s[a]:s;return t}function mo(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function pp(e){return e.reduce((t,s)=>ye(t,s.meta),{})}function fp(e,t){let s=0,a=t.length;for(;s!==a;){const r=s+a>>1;pl(e,t[r])<0?a=r:s=r+1}const n=hp(e);return n&&(a=t.lastIndexOf(n,a-1)),a}function hp(e){let t=e;for(;t=t.parent;)if(fl(t)&&pl(e,t)===0)return t}function fl({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function bo(e){const t=at(Ya),s=at(dr),a=Je(()=>{const i=Wt(e.to);return t.resolve(i)}),n=Je(()=>{const{matched:i}=a.value,{length:c}=i,d=i[c-1],u=s.matched;if(!d||!u.length)return-1;const p=u.findIndex(Es.bind(null,d));if(p>-1)return p;const f=_o(i[c-2]);return c>1&&_o(d)===f&&u[u.length-1].path!==f?u.findIndex(Es.bind(null,i[c-2])):p}),r=Je(()=>n.value>-1&&yp(s.params,a.value.params)),o=Je(()=>n.value>-1&&n.value===s.matched.length-1&&ll(s.params,a.value.params));function l(i={}){if(_p(i)){const c=t[Wt(e.replace)?"replace":"push"](Wt(e.to)).catch(Gs);return e.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:a,href:Je(()=>a.value.href),isActive:r,isExactActive:o,navigate:l}}function gp(e){return e.length===1?e[0]:e}const mp=xi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:bo,setup(e,{slots:t}){const s=Mt(bo(e)),{options:a}=at(Ya),n=Je(()=>({[yo(e.activeClass,a.linkActiveClass,"router-link-active")]:s.isActive,[yo(e.exactActiveClass,a.linkExactActiveClass,"router-link-exact-active")]:s.isExactActive}));return()=>{const r=t.default&&gp(t.default(s));return e.custom?r:lr("a",{"aria-current":s.isExactActive?e.ariaCurrentValue:null,href:s.href,onClick:s.navigate,class:n.value},r)}}}),bp=mp;function _p(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function yp(e,t){for(const s in t){const a=t[s],n=e[s];if(typeof a=="string"){if(a!==n)return!1}else if(!ut(n)||n.length!==a.length||a.some((r,o)=>r!==n[o]))return!1}return!0}function _o(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const yo=(e,t,s)=>e??t??s,vp=xi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:s}){const a=at(Fn),n=Je(()=>e.route||a.value),r=at(co,0),o=Je(()=>{let c=Wt(r);const{matched:d}=n.value;let u;for(;(u=d[c])&&!u.components;)c++;return c}),l=Je(()=>n.value.matched[o.value]);ua(co,Je(()=>o.value+1)),ua(qu,l),ua(Fn,n);const i=Ze();return zs(()=>[i.value,l.value,e.name],([c,d,u],[p,f,b])=>{d&&(d.instances[u]=c,f&&f!==d&&c&&c===p&&(d.leaveGuards.size||(d.leaveGuards=f.leaveGuards),d.updateGuards.size||(d.updateGuards=f.updateGuards))),c&&d&&(!f||!Es(d,f)||!p)&&(d.enterCallbacks[u]||[]).forEach(m=>m(c))},{flush:"post"}),()=>{const c=n.value,d=e.name,u=l.value,p=u&&u.components[d];if(!p)return vo(s.default,{Component:p,route:c});const f=u.props[d],b=f?f===!0?c.params:typeof f=="function"?f(c):f:null,k=lr(p,ye({},b,t,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(u.instances[d]=null)},ref:i}));return vo(s.default,{Component:k,route:c})||k}}});function vo(e,t){if(!e)return null;const s=e(t);return s.length===1?s[0]:s}const hl=vp;function wp(e){const t=dp(e.routes,e),s=e.parseQuery||Vu,a=e.stringifyQuery||lo,n=e.history,r=Ls(),o=Ls(),l=Ls(),i=ic(Ht);let c=Ht;vs&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=on.bind(null,O=>""+O),u=on.bind(null,Ou),p=on.bind(null,Xs);function f(O,q){let $,X;return cl(O)?($=t.getRecordMatcher(O),X=q):X=O,t.addRoute(X,$)}function b(O){const q=t.getRecordMatcher(O);q&&t.removeRoute(q)}function m(){return t.getRoutes().map(O=>O.record)}function k(O){return!!t.getRecordMatcher(O)}function E(O,q){if(q=ye({},q||i.value),typeof O=="string"){const L=ln(s,O,q.path),G=t.resolve({path:L.path},q),Y=n.createHref(L.fullPath);return ye(L,G,{params:p(G.params),hash:Xs(L.hash),redirectedFrom:void 0,href:Y})}let $;if(O.path!=null)$=ye({},O,{path:ln(s,O.path,q.path).path});else{const L=ye({},O.params);for(const G in L)L[G]==null&&delete L[G];$=ye({},O,{params:u(L)}),q.params=u(q.params)}const X=t.resolve($,q),ae=O.hash||"";X.params=d(p(X.params));const v=Ru(a,ye({},O,{hash:ku(ae),path:X.path})),S=n.createHref(v);return ye({fullPath:v,hash:ae,query:a===lo?Ku(O.query):O.query||{}},X,{redirectedFrom:void 0,href:S})}function A(O){return typeof O=="string"?ln(s,O,i.value.path):ye({},O)}function x(O,q){if(c!==O)return ks(Ee.NAVIGATION_CANCELLED,{from:q,to:O})}function y(O){return R(O)}function P(O){return y(ye(A(O),{replace:!0}))}function M(O,q){const $=O.matched[O.matched.length-1];if($&&$.redirect){const{redirect:X}=$;let ae=typeof X=="function"?X(O,q):X;return typeof ae=="string"&&(ae=ae.includes("?")||ae.includes("#")?ae=A(ae):{path:ae},ae.params={}),ye({query:O.query,hash:O.hash,params:ae.path!=null?{}:O.params},ae)}}function R(O,q){const $=c=E(O),X=i.value,ae=O.state,v=O.force,S=O.replace===!0,L=M($,X);if(L)return R(ye(A(L),{state:typeof L=="object"?ye({},ae,L.state):ae,force:v,replace:S}),q||$);const G=$;G.redirectedFrom=q;let Y;return!v&&Mu(a,X,$)&&(Y=ks(Ee.NAVIGATION_DUPLICATED,{to:G,from:X}),Q(X,X,!0,!1)),(Y?Promise.resolve(Y):h(G,X)).catch(j=>kt(j)?kt(j,Ee.NAVIGATION_GUARD_REDIRECT)?j:J(j):I(j,G,X)).then(j=>{if(j){if(kt(j,Ee.NAVIGATION_GUARD_REDIRECT))return R(ye({replace:S},A(j.to),{state:typeof j.to=="object"?ye({},ae,j.to.state):ae,force:v}),q||G)}else j=_(G,X,!0,S,ae);return T(G,X,j),j})}function w(O,q){const $=x(O,q);return $?Promise.reject($):Promise.resolve()}function g(O){const q=fe.values().next().value;return q&&typeof q.runWithContext=="function"?q.runWithContext(O):O()}function h(O,q){let $;const[X,ae,v]=Wu(O,q);$=dn(X.reverse(),"beforeRouteLeave",O,q);for(const L of X)L.leaveGuards.forEach(G=>{$.push(Yt(G,O,q))});const S=w.bind(null,O,q);return $.push(S),pe($).then(()=>{$=[];for(const L of r.list())$.push(Yt(L,O,q));return $.push(S),pe($)}).then(()=>{$=dn(ae,"beforeRouteUpdate",O,q);for(const L of ae)L.updateGuards.forEach(G=>{$.push(Yt(G,O,q))});return $.push(S),pe($)}).then(()=>{$=[];for(const L of v)if(L.beforeEnter)if(ut(L.beforeEnter))for(const G of L.beforeEnter)$.push(Yt(G,O,q));else $.push(Yt(L.beforeEnter,O,q));return $.push(S),pe($)}).then(()=>(O.matched.forEach(L=>L.enterCallbacks={}),$=dn(v,"beforeRouteEnter",O,q,g),$.push(S),pe($))).then(()=>{$=[];for(const L of o.list())$.push(Yt(L,O,q));return $.push(S),pe($)}).catch(L=>kt(L,Ee.NAVIGATION_CANCELLED)?L:Promise.reject(L))}function T(O,q,$){l.list().forEach(X=>g(()=>X(O,q,$)))}function _(O,q,$,X,ae){const v=x(O,q);if(v)return v;const S=q===Ht,L=vs?history.state:{};$&&(X||S?n.replace(O.fullPath,ye({scroll:S&&L&&L.scroll},ae)):n.push(O.fullPath,ae)),i.value=O,Q(O,q,$,S),J()}let C;function B(){C||(C=n.listen((O,q,$)=>{if(!oe.listening)return;const X=E(O),ae=M(X,oe.currentRoute.value);if(ae){R(ye(ae,{replace:!0,force:!0}),X).catch(Gs);return}c=X;const v=i.value;vs&&Hu(io(v.fullPath,$.delta),ja()),h(X,v).catch(S=>kt(S,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_CANCELLED)?S:kt(S,Ee.NAVIGATION_GUARD_REDIRECT)?(R(ye(A(S.to),{force:!0}),X).then(L=>{kt(L,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&!$.delta&&$.type===Nn.pop&&n.go(-1,!1)}).catch(Gs),Promise.reject()):($.delta&&n.go(-$.delta,!1),I(S,X,v))).then(S=>{S=S||_(X,v,!1),S&&($.delta&&!kt(S,Ee.NAVIGATION_CANCELLED)?n.go(-$.delta,!1):$.type===Nn.pop&&kt(S,Ee.NAVIGATION_ABORTED|Ee.NAVIGATION_DUPLICATED)&&n.go(-1,!1)),T(X,v,S)}).catch(Gs)}))}let K=Ls(),V=Ls(),D;function I(O,q,$){J(O);const X=V.list();return X.length?X.forEach(ae=>ae(O,q,$)):console.error(O),Promise.reject(O)}function U(){return D&&i.value!==Ht?Promise.resolve():new Promise((O,q)=>{K.add([O,q])})}function J(O){return D||(D=!O,B(),K.list().forEach(([q,$])=>O?$(O):q()),K.reset()),O}function Q(O,q,$,X){const{scrollBehavior:ae}=e;if(!vs||!ae)return Promise.resolve();const v=!$&&Uu(io(O.fullPath,0))||(X||!$)&&history.state&&history.state.scroll||null;return sr().then(()=>ae(O,q,v)).then(S=>S&&zu(S)).catch(S=>I(S,O,q))}const le=O=>n.go(O);let de;const fe=new Set,oe={currentRoute:i,listening:!0,addRoute:f,removeRoute:b,clearRoutes:t.clearRoutes,hasRoute:k,getRoutes:m,resolve:E,options:e,push:y,replace:P,go:le,back:()=>le(-1),forward:()=>le(1),beforeEach:r.add,beforeResolve:o.add,afterEach:l.add,onError:V.add,isReady:U,install(O){O.component("RouterLink",bp),O.component("RouterView",hl),O.config.globalProperties.$router=oe,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>Wt(i)}),vs&&!de&&i.value===Ht&&(de=!0,y(n.location).catch(X=>{}));const q={};for(const X in Ht)Object.defineProperty(q,X,{get:()=>i.value[X],enumerable:!0});O.provide(Ya,oe),O.provide(dr,li(q)),O.provide(Fn,i);const $=O.unmount;fe.add(O),O.unmount=function(){fe.delete(O),fe.size<1&&(c=Ht,C&&C(),C=null,i.value=Ht,de=!1,D=!1),$()}}};function pe(O){return O.reduce((q,$)=>q.then(()=>g($)),Promise.resolve())}return oe}function Tt(){return at(Ya)}function gl(e){return at(dr)}var xp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Tp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ms={exports:{}},Sp=Ms.exports,wo;function Ep(){return wo||(wo=1,(function(e,t){(function(s,a){var n={};s.PubSub?(n=s.PubSub,console.warn("PubSub already loaded, using existing version")):(s.PubSub=n,a(n)),e!==void 0&&e.exports&&(t=e.exports=n),t.PubSub=n,e.exports=t=n})(typeof window=="object"&&window||Sp||xp,function(s){var a={},n=-1,r="*";function o(m){var k;for(k in m)if(Object.prototype.hasOwnProperty.call(m,k))return!0;return!1}function l(m){return function(){throw m}}function i(m,k,E){try{m(k,E)}catch(A){setTimeout(l(A),0)}}function c(m,k,E){m(k,E)}function d(m,k,E,A){var x=a[k],y=A?c:i,P;if(Object.prototype.hasOwnProperty.call(a,k))for(P in x)Object.prototype.hasOwnProperty.call(x,P)&&y(x[P],m,E)}function u(m,k,E){return function(){var x=String(m),y=x.lastIndexOf(".");for(d(m,m,k,E);y!==-1;)x=x.substr(0,y),y=x.lastIndexOf("."),d(m,x,k,E);d(m,r,k,E)}}function p(m){var k=String(m),E=!!(Object.prototype.hasOwnProperty.call(a,k)&&o(a[k]));return E}function f(m){for(var k=String(m),E=p(k)||p(r),A=k.lastIndexOf(".");!E&&A!==-1;)k=k.substr(0,A),A=k.lastIndexOf("."),E=p(k);return E}function b(m,k,E,A){m=typeof m=="symbol"?m.toString():m;var x=u(m,k,A),y=f(m);return y?(E===!0?x():setTimeout(x,0),!0):!1}s.publish=function(m,k){return b(m,k,!1,s.immediateExceptions)},s.publishSync=function(m,k){return b(m,k,!0,s.immediateExceptions)},s.subscribe=function(m,k){if(typeof k!="function")return!1;m=typeof m=="symbol"?m.toString():m,Object.prototype.hasOwnProperty.call(a,m)||(a[m]={});var E="uid_"+String(++n);return a[m][E]=k,E},s.subscribeAll=function(m){return s.subscribe(r,m)},s.subscribeOnce=function(m,k){var E=s.subscribe(m,function(){s.unsubscribe(E),k.apply(this,arguments)});return s},s.clearAllSubscriptions=function(){a={}},s.clearSubscriptions=function(k){var E;for(E in a)Object.prototype.hasOwnProperty.call(a,E)&&E.indexOf(k)===0&&delete a[E]},s.countSubscriptions=function(k){var E,A,x=0;for(E in a)if(Object.prototype.hasOwnProperty.call(a,E)&&E.indexOf(k)===0){for(A in a[E])x++;break}return x},s.getSubscriptions=function(k){var E,A=[];for(E in a)Object.prototype.hasOwnProperty.call(a,E)&&E.indexOf(k)===0&&A.push(E);return A},s.unsubscribe=function(m){var k=function(w){var g;for(g in a)if(Object.prototype.hasOwnProperty.call(a,g)&&g.indexOf(w)===0)return!0;return!1},E=typeof m=="string"&&(Object.prototype.hasOwnProperty.call(a,m)||k(m)),A=!E&&typeof m=="string",x=typeof m=="function",y=!1,P,M,R;if(E){s.clearSubscriptions(m);return}for(P in a)if(Object.prototype.hasOwnProperty.call(a,P)){if(M=a[P],A&&M[m]){delete M[m],y=m;break}if(x)for(R in M)Object.prototype.hasOwnProperty.call(M,R)&&M[R]===m&&(delete M[R],y=!0)}return y}})})(Ms,Ms.exports)),Ms.exports}var kp=Ep();const re=Tp(kp);let it=[{key:"americanfootball_cfl",group:"American Football",title:"CFL",description:"Canadian Football League",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf",group:"American Football",title:"NCAAF",description:"US College Football",active:!0,has_outrights:!1},{key:"americanfootball_ncaaf_championship_winner",group:"American Football",title:"NCAAF Championship Winner",description:"US College Football Championship Winner",active:!0,has_outrights:!0},{key:"americanfootball_nfl",group:"American Football",title:"NFL",description:"US Football",active:!0,has_outrights:!1},{key:"americanfootball_nfl_super_bowl_winner",group:"American Football",title:"NFL Super Bowl Winner",description:"Super Bowl Winner 2025/2026",active:!1,has_outrights:!0},{key:"aussierules_afl",group:"Aussie Rules",title:"AFL",description:"Aussie Football",active:!1,has_outrights:!1},{key:"baseball_kbo",group:"Baseball",title:"KBO",description:"KBO League",active:!1,has_outrights:!1},{key:"baseball_milb",group:"Baseball",title:"MiLB",description:"Minor League Baseball",active:!1,has_outrights:!1},{key:"baseball_mlb",group:"Baseball",title:"MLB",description:"Major League Baseball",active:!0,has_outrights:!1},{key:"baseball_mlb_world_series_winner",group:"Baseball",title:"MLB World Series Winner",description:"World Series Winner 2025",active:!1,has_outrights:!0},{key:"baseball_npb",group:"Baseball",title:"NPB",description:"Nippon Professional Baseball",active:!0,has_outrights:!1},{key:"basketball_euroleague",group:"Basketball",title:"Basketball Euroleague",description:"Basketball Euroleague",active:!1,has_outrights:!1},{key:"basketball_nba",group:"Basketball",title:"NBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"basketball_nba_championship_winner",group:"Basketball",title:"NBA Championship Winner",description:"Championship Winner 2025/2026",active:!1,has_outrights:!0},{key:"basketball_nbl",group:"Basketball",title:"NBL",description:"AU National Basketball League",active:!1,has_outrights:!1},{key:"basketball_ncaab",group:"Basketball",title:"NCAAB",description:"US College Basketball",active:!0,has_outrights:!0},{key:"basketball_ncaab_championship_winner",group:"Basketball",title:"NCAAB Championship Winner",description:"US College Basketball Championship Winner",active:!0,has_outrights:!0},{key:"basketball_wnba",group:"Basketball",title:"WNBA",description:"US Basketball",active:!0,has_outrights:!1},{key:"boxing_boxing",group:"Boxing",title:"Boxing",description:"Boxing Bouts",active:!0,has_outrights:!1},{key:"cricket_asia_cup",group:"Cricket",title:"Asia Cup",description:"Asia Cup",active:!1,has_outrights:!1},{key:"cricket_international_t20",group:"Cricket",title:"International Twenty20",description:"International Twenty20",active:!0,has_outrights:!1},{key:"golf_masters_tournament_winner",group:"Golf",title:"Masters Tournament Winner",description:"2026 Winner",active:!0,has_outrights:!0},{key:"icehockey_liiga",group:"Ice Hockey",title:"Liiga",description:"Finnish SM League",active:!1,has_outrights:!1},{key:"icehockey_mestis",group:"Ice Hockey",title:"Mestis",description:"Finnish Mestis League",active:!1,has_outrights:!1},{key:"icehockey_nhl",group:"Ice Hockey",title:"NHL",description:"US Ice Hockey",active:!0,has_outrights:!1},{key:"icehockey_nhl_championship_winner",group:"Ice Hockey",title:"NHL Championship Winner",description:"Stanley Cup Winner 2025/2026",active:!1,has_outrights:!0},{key:"icehockey_sweden_allsvenskan",group:"Ice Hockey",title:"HockeyAllsvenskan",description:"Swedish Hockey Allsvenskan",active:!1,has_outrights:!1},{key:"icehockey_sweden_hockey_league",group:"Ice Hockey",title:"SHL",description:"Swedish Hockey League",active:!1,has_outrights:!1},{key:"mma_mixed_martial_arts",group:"Mixed Martial Arts",title:"MMA",description:"Mixed Martial Arts",active:!0,has_outrights:!1},{key:"politics_us_presidential_election_winner",group:"Politics",title:"US Presidential Elections Winner",description:"2028 US Presidential Election Winner",active:!1,has_outrights:!0},{key:"rugbyleague_nrl",group:"Rugby League",title:"NRL",description:"Aussie Rugby League",active:!1,has_outrights:!1},{key:"soccer_argentina_primera_division",group:"Soccer",title:"Primera División - Argentina",description:"Argentine Primera División",active:!1,has_outrights:!1},{key:"soccer_australia_aleague",group:"Soccer",title:"A-League",description:"Aussie Soccer",active:!1,has_outrights:!1},{key:"soccer_austria_bundesliga",group:"Soccer",title:"Austrian Football Bundesliga",description:"Austrian Soccer",active:!1,has_outrights:!1},{key:"soccer_belgium_first_div",group:"Soccer",title:"Belgium First Div",description:"Belgian First Division A",active:!1,has_outrights:!1},{key:"soccer_brazil_campeonato",group:"Soccer",title:"Brazil Série A",description:"Brasileirão Série A",active:!1,has_outrights:!1},{key:"soccer_brazil_serie_b",group:"Soccer",title:"Brazil Série B",description:"Campeonato Brasileiro Série B",active:!1,has_outrights:!1},{key:"soccer_chile_campeonato",group:"Soccer",title:"Primera División - Chile",description:"Campeonato Chileno",active:!1,has_outrights:!1},{key:"soccer_china_superleague",group:"Soccer",title:"Super League - China",description:"Chinese Soccer",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_libertadores",group:"Soccer",title:"Copa Libertadores",description:"CONMEBOL Copa Libertadores",active:!1,has_outrights:!1},{key:"soccer_conmebol_copa_sudamericana",group:"Soccer",title:"Copa Sudamericana",description:"CONMEBOL Copa Sudamericana",active:!1,has_outrights:!1},{key:"soccer_denmark_superliga",group:"Soccer",title:"Denmark Superliga",description:"Danish Soccer",active:!1,has_outrights:!1},{key:"soccer_efl_champ",group:"Soccer",title:"Championship",description:"EFL Championship",active:!1,has_outrights:!1},{key:"soccer_england_league1",group:"Soccer",title:"League 1",description:"EFL League 1",active:!1,has_outrights:!1},{key:"soccer_england_league2",group:"Soccer",title:"League 2",description:"EFL League 2 ",active:!1,has_outrights:!1},{key:"soccer_epl",group:"Soccer",title:"EPL",description:"English Premier League",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_qualifiers_europe",group:"Soccer",title:"FIFA World Cup Qualifiers - Europe",description:"FIFA World Cup Qualifiers - UEFA",active:!0,has_outrights:!1},{key:"soccer_fifa_world_cup_winner",group:"Soccer",title:"FIFA World Cup Winner",description:"FIFA World Cup Winner 2026",active:!1,has_outrights:!0},{key:"soccer_finland_veikkausliiga",group:"Soccer",title:"Veikkausliiga - Finland",description:"Finnish  Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_one",group:"Soccer",title:"Ligue 1 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_france_ligue_two",group:"Soccer",title:"Ligue 2 - France",description:"French Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga",group:"Soccer",title:"Bundesliga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_bundesliga2",group:"Soccer",title:"Bundesliga 2 - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_germany_liga3",group:"Soccer",title:"3. Liga - Germany",description:"German Soccer",active:!1,has_outrights:!1},{key:"soccer_greece_super_league",group:"Soccer",title:"Super League - Greece",description:"Greek Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_a",group:"Soccer",title:"Serie A - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_italy_serie_b",group:"Soccer",title:"Serie B - Italy",description:"Italian Soccer",active:!1,has_outrights:!1},{key:"soccer_japan_j_league",group:"Soccer",title:"J League",description:"Japan Soccer League",active:!1,has_outrights:!1},{key:"soccer_korea_kleague1",group:"Soccer",title:"K League 1",description:"Korean Soccer",active:!1,has_outrights:!1},{key:"soccer_league_of_ireland",group:"Soccer",title:"League of Ireland",description:"Airtricity League Premier Division",active:!1,has_outrights:!1},{key:"soccer_mexico_ligamx",group:"Soccer",title:"Liga MX",description:"Mexican Soccer",active:!1,has_outrights:!1},{key:"soccer_netherlands_eredivisie",group:"Soccer",title:"Dutch Eredivisie",description:"Dutch Soccer",active:!1,has_outrights:!1},{key:"soccer_norway_eliteserien",group:"Soccer",title:"Eliteserien - Norway",description:"Norwegian Soccer",active:!1,has_outrights:!1},{key:"soccer_poland_ekstraklasa",group:"Soccer",title:"Ekstraklasa - Poland",description:"Polish Soccer",active:!1,has_outrights:!1},{key:"soccer_portugal_primeira_liga",group:"Soccer",title:"Primeira Liga - Portugal",description:"Portugese Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_la_liga",group:"Soccer",title:"La Liga - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spain_segunda_division",group:"Soccer",title:"La Liga 2 - Spain",description:"Spanish Soccer",active:!1,has_outrights:!1},{key:"soccer_spl",group:"Soccer",title:"Premiership - Scotland",description:"Scottish Premiership",active:!1,has_outrights:!1},{key:"soccer_sweden_allsvenskan",group:"Soccer",title:"Allsvenskan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_sweden_superettan",group:"Soccer",title:"Superettan - Sweden",description:"Swedish Soccer",active:!1,has_outrights:!1},{key:"soccer_switzerland_superleague",group:"Soccer",title:"Swiss Superleague",description:"Swiss Soccer",active:!1,has_outrights:!1},{key:"soccer_turkey_super_league",group:"Soccer",title:"Turkey Super League",description:"Turkish Soccer",active:!1,has_outrights:!1},{key:"soccer_uefa_champs_league",group:"Soccer",title:"UEFA Champions League",description:"European Champions League",active:!0,has_outrights:!1},{key:"soccer_uefa_europa_conference_league",group:"Soccer",title:"UEFA Europa Conference League",description:"UEFA Europa Conference League",active:!1,has_outrights:!1},{key:"soccer_uefa_europa_league",group:"Soccer",title:"UEFA Europa League",description:"European Europa League",active:!1,has_outrights:!1},{key:"soccer_usa_mls",group:"Soccer",title:"MLS",description:"Major League Soccer",active:!1,has_outrights:!1},{key:"tennis_atp_china_open",group:"Tennis",title:"ATP China Open",description:"Men's Singles",active:!1,has_outrights:!1},{key:"tennis_wta_china_open",group:"Tennis",title:"WTA China Open",description:"Women's Singles",active:!1,has_outrights:!1}];const Ap={getMeta(){return{language:[{lang:"Abkhazian",code:"ab",enabled:!1,copy:[["key","value"]]},{lang:"Afar",code:"aa",enabled:!1,copy:[["key","value"]]},{lang:"Afrikaans",code:"af",enabled:!1,copy:[["key","value"]]},{lang:"Akan",code:"ak",enabled:!1,copy:[["key","value"]]},{lang:"Albanian",code:"sq",enabled:!1,copy:[["key","value"]]},{lang:"Amharic",code:"am",enabled:!1,copy:[["key","value"]]},{lang:"Arabic",code:"ar",enabled:!1,copy:[["key","value"]]},{lang:"Aragonese",code:"an",enabled:!1,copy:[["key","value"]]},{lang:"Armenian",code:"hy",enabled:!1,copy:[["key","value"]]},{lang:"Assamese",code:"as",enabled:!1,copy:[["key","value"]]},{lang:"Avaric",code:"av",enabled:!1,copy:[["key","value"]]},{lang:"Avestan",code:"ae",enabled:!1,copy:[["key","value"]]},{lang:"Aymara",code:"ay",enabled:!1,copy:[["key","value"]]},{lang:"Azerbaijani",code:"az",enabled:!1,copy:[["key","value"]]},{lang:"Bambara",code:"bm",enabled:!1,copy:[["key","value"]]},{lang:"Bashkir",code:"ba",enabled:!1,copy:[["key","value"]]},{lang:"Basque",code:"eu",enabled:!1,copy:[["key","value"]]},{lang:"Belarusian",code:"be",enabled:!1,copy:[["key","value"]]},{lang:"Bengali (Bangla)",code:"bn",enabled:!1,copy:[["key","value"]]},{lang:"Bihari",code:"bh",enabled:!1,copy:[["key","value"]]},{lang:"Bislama",code:"bi",enabled:!1,copy:[["key","value"]]},{lang:"Bosnian",code:"bs",enabled:!1,copy:[["key","value"]]},{lang:"Breton",code:"br",enabled:!1,copy:[["key","value"]]},{lang:"Bulgarian",code:"bg",enabled:!1,copy:[["key","value"]]},{lang:"Burmese",code:"my",enabled:!1,copy:[["key","value"]]},{lang:"Catalan",code:"ca",enabled:!1,copy:[["key","value"]]},{lang:"Chamorro",code:"ch",enabled:!1,copy:[["key","value"]]},{lang:"Chechen",code:"ce",enabled:!1,copy:[["key","value"]]},{lang:"Chichewa, Chewa, Nyanja",code:"ny",enabled:!1,copy:[["key","value"]]},{lang:"Chinese",code:"zh",enabled:!1,copy:[["key","value"]]},{lang:"Chinese (Simplified)",code:"zh-Hans",enabled:!1,copy:[["welcome_back","欢迎回来"],["please_enter_your_details","请输入您的详细信息"],["email","电子邮件"],["enter_your_email","输入您的电子邮件"],["password","密码"],["enter_your_password","输入您的密码"],["enter_email_and_password","输入邮箱和密码"],["sign_in","登入"],["forgot_password","忘记密码"],["dont_have_an_account","沒有帳戶？"],["sign_up","报名"],["please_enter_your_details_to_get_started","请输入您的详细信息以开始"],["already_have_an_account","已有账户？"],["log_in","登录"],["name","姓名"],["enter_your_name","输入您的姓名"]]},{lang:"Chinese (Traditional)",code:"zh-Hant",enabled:!1,copy:[["key","value"]]},{lang:"Chuvash",code:"cv",enabled:!1,copy:[["key","value"]]},{lang:"Cornish",code:"kw",enabled:!1,copy:[["key","value"]]},{lang:"Corsican",code:"co",enabled:!1,copy:[["key","value"]]},{lang:"Cree",code:"cr",enabled:!1,copy:[["key","value"]]},{lang:"Croatian",code:"hr",enabled:!1,copy:[["key","value"]]},{lang:"Czech",code:"cs",enabled:!1,copy:[["key","value"]]},{lang:"Danish",code:"da",enabled:!1,copy:[["key","value"]]},{lang:"Divehi, Dhivehi, Maldivian",code:"dv",enabled:!1,copy:[["key","value"]]},{lang:"Dutch",code:"nl",enabled:!1,copy:[["key","value"]]},{lang:"Dzongkha",code:"dz",enabled:!1,copy:[["key","value"]]},{lang:"English",code:"en",enabled:!0,copy:[["welcome_back","Welcome Back"],["please_enter_your_details","Please Enter your Details"],["email","Email"],["enter_your_email","Enter your email"],["password","Password"],["enter_your_password","Enter your password"],["enter_email_and_password","Enter Email and Password"],["sign_in","Sign in"],["forgot_password","Forgot Password"],["dont_have_an_account","Don't have an account?"],["sign_up","Sign up"],["please_enter_your_details_to_get_started","Please enter your details to get started"],["already_have_an_account","Already have an account?"],["log_in","Sign in"],["name","Name"],["enter_your_name","Enter your name"]]},{lang:"Esperanto",code:"eo",enabled:!1,copy:[["key","value"]]},{lang:"Estonian",code:"et",enabled:!1,copy:[["key","value"]]},{lang:"Ewe",code:"ee",enabled:!1,copy:[["key","value"]]},{lang:"Faroese",code:"fo",enabled:!1,copy:[["key","value"]]},{lang:"Fijian",code:"fj",enabled:!1,copy:[["key","value"]]},{lang:"Finnish",code:"fi",enabled:!1,copy:[["key","value"]]},{lang:"French",code:"fr",enabled:!1,copy:[["key","value"]]},{lang:"Fula, Fulah, Pulaar, Pular",code:"ff",enabled:!1,copy:[["key","value"]]},{lang:"Galician",code:"gl",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Scottish)",code:"gd",enabled:!1,copy:[["key","value"]]},{lang:"Gaelic (Manx)",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Georgian",code:"ka",enabled:!1,copy:[["key","value"]]},{lang:"German",code:"de",enabled:!1,copy:[["key","value"]]},{lang:"Greek",code:"el",enabled:!1,copy:[["key","value"]]},{lang:"Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Guarani",code:"gn",enabled:!1,copy:[["key","value"]]},{lang:"Gujarati",code:"gu",enabled:!1,copy:[["key","value"]]},{lang:"Haitian Creole",code:"ht",enabled:!1,copy:[["key","value"]]},{lang:"Hausa",code:"ha",enabled:!1,copy:[["key","value"]]},{lang:"Hebrew",code:"he",enabled:!1,copy:[["key","value"]]},{lang:"Herero",code:"hz",enabled:!1,copy:[["key","value"]]},{lang:"Hindi",code:"hi",enabled:!1,copy:[["key","value"]]},{lang:"Hiri Motu",code:"ho",enabled:!1,copy:[["key","value"]]},{lang:"Hungarian",code:"hu",enabled:!1,copy:[["key","value"]]},{lang:"Icelandic",code:"is",enabled:!1,copy:[["key","value"]]},{lang:"Ido",code:"io",enabled:!1,copy:[["key","value"]]},{lang:"Igbo",code:"ig",enabled:!1,copy:[["key","value"]]},{lang:"Indonesian",code:"id, in",enabled:!1,copy:[["key","value"]]},{lang:"Interlingua",code:"ia",enabled:!1,copy:[["key","value"]]},{lang:"Interlingue",code:"ie",enabled:!1,copy:[["key","value"]]},{lang:"Inuktitut",code:"iu",enabled:!1,copy:[["key","value"]]},{lang:"Inupiak",code:"ik",enabled:!1,copy:[["key","value"]]},{lang:"Irish",code:"ga",enabled:!1,copy:[["key","value"]]},{lang:"Italian",code:"it",enabled:!0,copy:[["welcome_back","Bentornato"],["please_enter_your_details","Per favore, inserisci i tuoi dati"],["email","E-mail"],["enter_your_email","Inserisci la tua email"],["password","Password"],["enter_your_password","Inserisci la tua password"],["enter_email_and_password","Inserisci email e password"],["sign_in","Registrazione"],["forgot_password","Ha dimenticato la password"],["dont_have_an_account","Non hai un account?"],["sign_up","Iscrizione"],["please_enter_your_details_to_get_started","Inserisci i tuoi dati per iniziare"],["already_have_an_account","Hai già un account?"],["log_in","Login"],["name","Nome"],["enter_your_name","Inserisci il tuo nome"]]},{lang:"Japanese",code:"ja",enabled:!1,copy:[["key","value"]]},{lang:"Javanese",code:"jv",enabled:!1,copy:[["key","value"]]},{lang:"Kalaallisut, Greenlandic",code:"kl",enabled:!1,copy:[["key","value"]]},{lang:"Kannada",code:"kn",enabled:!1,copy:[["key","value"]]},{lang:"Kanuri",code:"kr",enabled:!1,copy:[["key","value"]]},{lang:"Kashmiri",code:"ks",enabled:!1,copy:[["key","value"]]},{lang:"Kazakh",code:"kk",enabled:!1,copy:[["key","value"]]},{lang:"Khmer",code:"km",enabled:!1,copy:[["key","value"]]},{lang:"Kikuyu",code:"ki",enabled:!1,copy:[["key","value"]]},{lang:"Kinyarwanda (Rwanda)",code:"rw",enabled:!1,copy:[["key","value"]]},{lang:"Kirundi",code:"rn",enabled:!1,copy:[["key","value"]]},{lang:"Kyrgyz",code:"ky",enabled:!1,copy:[["key","value"]]},{lang:"Komi",code:"kv",enabled:!1,copy:[["key","value"]]},{lang:"Kongo",code:"kg",enabled:!1,copy:[["key","value"]]},{lang:"Korean",code:"ko",enabled:!1,copy:[["key","value"]]},{lang:"Kurdish",code:"ku",enabled:!1,copy:[["key","value"]]},{lang:"Kwanyama",code:"kj",enabled:!1,copy:[["key","value"]]},{lang:"Lao",code:"lo",enabled:!1,copy:[["key","value"]]},{lang:"Latin",code:"la",enabled:!0,copy:[["key","value"]]},{lang:"Latvian (Lettish)",code:"lv",enabled:!1,copy:[["key","value"]]},{lang:"Limburgish ( Limburger)",code:"li",enabled:!1,copy:[["key","value"]]},{lang:"Lingala",code:"ln",enabled:!1,copy:[["key","value"]]},{lang:"Lithuanian",code:"lt",enabled:!1,copy:[["key","value"]]},{lang:"Luga-Katanga",code:"lu",enabled:!1,copy:[["key","value"]]},{lang:"Luganda, Ganda",code:"lg",enabled:!1,copy:[["key","value"]]},{lang:"Luxembourgish",code:"lb",enabled:!1,copy:[["key","value"]]},{lang:"Manx",code:"gv",enabled:!1,copy:[["key","value"]]},{lang:"Macedonian",code:"mk",enabled:!1,copy:[["key","value"]]},{lang:"Malagasy",code:"mg",enabled:!1,copy:[["key","value"]]},{lang:"Malay",code:"ms",enabled:!1,copy:[["key","value"]]},{lang:"Malayalam",code:"ml",enabled:!1,copy:[["key","value"]]},{lang:"Maltese",code:"mt",enabled:!1,copy:[["key","value"]]},{lang:"Maori",code:"mi",enabled:!1,copy:[["key","value"]]},{lang:"Marathi",code:"mr",enabled:!1,copy:[["key","value"]]},{lang:"Marshallese",code:"mh",enabled:!1,copy:[["key","value"]]},{lang:"Moldavian",code:"mo",enabled:!1,copy:[["key","value"]]},{lang:"Mongolian",code:"mn",enabled:!1,copy:[["key","value"]]},{lang:"Nauru",code:"na",enabled:!1,copy:[["key","value"]]},{lang:"Navajo",code:"nv",enabled:!1,copy:[["key","value"]]},{lang:"Ndonga",code:"ng",enabled:!1,copy:[["key","value"]]},{lang:"Northern Ndebele",code:"nd",enabled:!1,copy:[["key","value"]]},{lang:"Nepali",code:"ne",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian",code:"no",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian bokmål",code:"nb",enabled:!1,copy:[["key","value"]]},{lang:"Norwegian nynorsk",code:"nn",enabled:!1,copy:[["key","value"]]},{lang:"Nuosu",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Occitan",code:"oc",enabled:!1,copy:[["key","value"]]},{lang:"Ojibwe",code:"oj",enabled:!1,copy:[["key","value"]]},{lang:"Old Church Slavonic, Old Bulgarian",code:"cu",enabled:!1,copy:[["key","value"]]},{lang:"Oriya",code:"or",enabled:!1,copy:[["key","value"]]},{lang:"Oromo (Afaan Oromo)",code:"om",enabled:!1,copy:[["key","value"]]},{lang:"Ossetian",code:"os",enabled:!1,copy:[["key","value"]]},{lang:"Pāli",code:"pi",enabled:!1,copy:[["key","value"]]},{lang:"Pashto, Pushto",code:"ps",enabled:!1,copy:[["key","value"]]},{lang:"Persian (Farsi)",code:"fa",enabled:!1,copy:[["key","value"]]},{lang:"Polish",code:"pl",enabled:!1,copy:[["key","value"]]},{lang:"Portuguese",code:"pt",enabled:!1,copy:[["key","value"]]},{lang:"Punjabi (Eastern)",code:"pa",enabled:!1,copy:[["key","value"]]},{lang:"Quechua",code:"qu",enabled:!1,copy:[["key","value"]]},{lang:"Romansh",code:"rm",enabled:!1,copy:[["key","value"]]},{lang:"Romanian",code:"ro",enabled:!1,copy:[["key","value"]]},{lang:"Russian",code:"ru",enabled:!1,copy:[["key","value"]]},{lang:"Sami",code:"se",enabled:!1,copy:[["key","value"]]},{lang:"Samoan",code:"sm",enabled:!1,copy:[["key","value"]]},{lang:"Sango",code:"sg",enabled:!1,copy:[["key","value"]]},{lang:"Sanskrit",code:"sa",enabled:!1,copy:[["key","value"]]},{lang:"Serbian",code:"sr",enabled:!1,copy:[["key","value"]]},{lang:"Serbo-Croatian",code:"sh",enabled:!1,copy:[["key","value"]]},{lang:"Sesotho",code:"st",enabled:!1,copy:[["key","value"]]},{lang:"Setswana",code:"tn",enabled:!1,copy:[["key","value"]]},{lang:"Shona",code:"sn",enabled:!1,copy:[["key","value"]]},{lang:"Sichuan Yi",code:"ii",enabled:!1,copy:[["key","value"]]},{lang:"Sindhi",code:"sd",enabled:!1,copy:[["key","value"]]},{lang:"Sinhalese",code:"si",enabled:!1,copy:[["key","value"]]},{lang:"Siswati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Slovak",code:"sk",enabled:!1,copy:[["key","value"]]},{lang:"Slovenian",code:"sl",enabled:!1,copy:[["key","value"]]},{lang:"Somali",code:"so",enabled:!1,copy:[["key","value"]]},{lang:"Southern Ndebele",code:"nr",enabled:!1,copy:[["key","value"]]},{lang:"Spanish",code:"es",enabled:!1,copy:[["key","value"]]},{lang:"Sundanese",code:"su",enabled:!1,copy:[["key","value"]]},{lang:"Swahili (Kiswahili)",code:"sw",enabled:!1,copy:[["key","value"]]},{lang:"Swati",code:"ss",enabled:!1,copy:[["key","value"]]},{lang:"Swedish",code:"sv",enabled:!1,copy:[["key","value"]]},{lang:"Tagalog",code:"tl",enabled:!1,copy:[["key","value"]]},{lang:"Tahitian",code:"ty",enabled:!1,copy:[["key","value"]]},{lang:"Tajik",code:"tg",enabled:!1,copy:[["key","value"]]},{lang:"Tamil",code:"ta",enabled:!1,copy:[["key","value"]]},{lang:"Tatar",code:"tt",enabled:!1,copy:[["key","value"]]},{lang:"Telugu",code:"te",enabled:!1,copy:[["key","value"]]},{lang:"Thai",code:"th",enabled:!1,copy:[["key","value"]]},{lang:"Tibetan",code:"bo",enabled:!1,copy:[["key","value"]]},{lang:"Tigrinya",code:"ti",enabled:!1,copy:[["key","value"]]},{lang:"Tonga",code:"to",enabled:!1,copy:[["key","value"]]},{lang:"Tsonga",code:"ts",enabled:!1,copy:[["key","value"]]},{lang:"Turkish",code:"tr",enabled:!1,copy:[["key","value"]]},{lang:"Turkmen",code:"tk",enabled:!1,copy:[["key","value"]]},{lang:"Twi",code:"tw",enabled:!1,copy:[["key","value"]]},{lang:"Uyghur",code:"ug",enabled:!1,copy:[["key","value"]]},{lang:"Ukrainian",code:"uk",enabled:!1,copy:[["key","value"]]},{lang:"Urdu",code:"ur",enabled:!1,copy:[["key","value"]]},{lang:"Uzbek",code:"uz",enabled:!1,copy:[["key","value"]]},{lang:"Venda",code:"ve",enabled:!1,copy:[["key","value"]]},{lang:"Vietnamese",code:"vi",enabled:!1,copy:[["key","value"]]},{lang:"Volapük",code:"vo",enabled:!1,copy:[["key","value"]]},{lang:"Wallon",code:"wa",enabled:!1,copy:[["key","value"]]},{lang:"Welsh",code:"cy",enabled:!1,copy:[["key","value"]]},{lang:"Wolof",code:"wo",enabled:!1,copy:[["key","value"]]},{lang:"Western Frisian",code:"fy",enabled:!1,copy:[["key","value"]]},{lang:"Xhosa",code:"xh",enabled:!1,copy:[["key","value"]]},{lang:"Yiddish",code:"yi, ji",enabled:!1,copy:[["key","value"]]},{lang:"Yoruba",code:"yo",enabled:!1,copy:[["key","value"]]},{lang:"Zhuang, Chuang",code:"za",enabled:!1,copy:[["key","value"]]},{lang:"Zulu",code:"zu",enabled:!1,copy:[["key","value"]]}]}}};function Qt(e){return new Promise((t,s)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>s(e.error)})}function Pp(e,t){let s;const a=()=>{if(s)return s;const n=indexedDB.open(e);return n.onupgradeneeded=()=>n.result.createObjectStore(t),s=Qt(n),s.then(r=>{r.onclose=()=>s=void 0},()=>{}),s};return(n,r)=>a().then(o=>r(o.transaction(t,n).objectStore(t)))}let un;function sa(){return un||(un=Pp("keyval-store","keyval")),un}function Op(e,t=sa()){return t("readonly",s=>Qt(s.get(e)))}function xo(e,t,s=sa()){return s("readwrite",a=>(a.put(t,e),Qt(a.transaction)))}function pn(e,t=sa()){return t("readwrite",s=>(s.delete(e),Qt(s.transaction)))}function ml(e,t){return e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},Qt(e.transaction)}function bs(e=sa()){return e("readonly",t=>{if(t.getAllKeys)return Qt(t.getAllKeys());const s=[];return ml(t,a=>s.push(a.key)).then(()=>s)})}function Cp(e=sa()){return e("readonly",t=>{if(t.getAll&&t.getAllKeys)return Promise.all([Qt(t.getAllKeys()),Qt(t.getAll())]).then(([a,n])=>a.map((r,o)=>[r,n[o]]));const s=[];return e("readonly",a=>ml(a,n=>s.push([n.key,n.value])).then(()=>s))})}const As=e=>e!==null&&Object.prototype.toString.call(e)==="[object Object]",Ea=(e,t)=>{if(e===t)return!0;if(typeof e!=typeof t)return!1;if(Array.isArray(e)&&Array.isArray(t)){if(e.length!==t.length)return!1;for(let s=0;s<e.length;s+=1)if(!Ea(e[s],t[s]))return!1;return!0}if(As(e)&&As(t)){const s=Object.entries(e),a=new Set(Object.keys(t));if(s.length!==a.size)return!1;for(const[n,r]of s){if(!Ea(r,t[n]))return!1;a.delete(n)}return a.size===0}return!1},ia=e=>{if(e===""||e===!1||e===null||e===void 0||Array.isArray(e)&&e.length===0)return!0;if(As(e)){for(const t in e)if(e.hasOwnProperty(t))return!1;return!0}return!1},Lp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e==="_",To=e=>e>="0"&&e<="9"||e==="-",Rp=e=>e>="a"&&e<="z"||e>="A"&&e<="Z"||e>="0"&&e<="9"||e==="_";var N;(function(e){e.TOK_EOF="EOF",e.TOK_UNQUOTEDIDENTIFIER="UnquotedIdentifier",e.TOK_QUOTEDIDENTIFIER="QuotedIdentifier",e.TOK_RBRACKET="Rbracket",e.TOK_RPAREN="Rparen",e.TOK_COMMA="Comma",e.TOK_COLON="Colon",e.TOK_RBRACE="Rbrace",e.TOK_NUMBER="Number",e.TOK_CURRENT="Current",e.TOK_ROOT="Root",e.TOK_EXPREF="Expref",e.TOK_PIPE="Pipe",e.TOK_OR="Or",e.TOK_AND="And",e.TOK_EQ="EQ",e.TOK_GT="GT",e.TOK_LT="LT",e.TOK_GTE="GTE",e.TOK_LTE="LTE",e.TOK_NE="NE",e.TOK_FLATTEN="Flatten",e.TOK_STAR="Star",e.TOK_FILTER="Filter",e.TOK_DOT="Dot",e.TOK_NOT="Not",e.TOK_LBRACE="Lbrace",e.TOK_LBRACKET="Lbracket",e.TOK_LPAREN="Lparen",e.TOK_LITERAL="Literal"})(N||(N={}));const So={"(":N.TOK_LPAREN,")":N.TOK_RPAREN,"*":N.TOK_STAR,",":N.TOK_COMMA,".":N.TOK_DOT,":":N.TOK_COLON,"@":N.TOK_CURRENT,$:N.TOK_ROOT,"]":N.TOK_RBRACKET,"{":N.TOK_LBRACE,"}":N.TOK_RBRACE},Mp={"!":!0,"<":!0,"=":!0,">":!0},Dp={"	":!0,"\n":!0,"\r":!0," ":!0};class Ip{constructor(){this._current=0}tokenize(t){const s=[];this._current=0;let a,n,r;for(;this._current<t.length;)if(Lp(t[this._current]))a=this._current,n=this.consumeUnquotedIdentifier(t),s.push({start:a,type:N.TOK_UNQUOTEDIDENTIFIER,value:n});else if(So[t[this._current]]!==void 0)s.push({start:this._current,type:So[t[this._current]],value:t[this._current]}),this._current+=1;else if(To(t[this._current]))r=this.consumeNumber(t),s.push(r);else if(t[this._current]==="[")r=this.consumeLBracket(t),s.push(r);else if(t[this._current]==='"')a=this._current,n=this.consumeQuotedIdentifier(t),s.push({start:a,type:N.TOK_QUOTEDIDENTIFIER,value:n});else if(t[this._current]==="'")a=this._current,n=this.consumeRawStringLiteral(t),s.push({start:a,type:N.TOK_LITERAL,value:n});else if(t[this._current]==="`"){a=this._current;const o=this.consumeLiteral(t);s.push({start:a,type:N.TOK_LITERAL,value:o})}else if(Mp[t[this._current]]!==void 0)r=this.consumeOperator(t),r&&s.push(r);else if(Dp[t[this._current]]!==void 0)this._current+=1;else if(t[this._current]==="&")a=this._current,this._current+=1,t[this._current]==="&"?(this._current+=1,s.push({start:a,type:N.TOK_AND,value:"&&"})):s.push({start:a,type:N.TOK_EXPREF,value:"&"});else if(t[this._current]==="|")a=this._current,this._current+=1,t[this._current]==="|"?(this._current+=1,s.push({start:a,type:N.TOK_OR,value:"||"})):s.push({start:a,type:N.TOK_PIPE,value:"|"});else{const o=new Error(`Unknown character: ${t[this._current]}`);throw o.name="LexerError",o}return s}consumeUnquotedIdentifier(t){const s=this._current;for(this._current+=1;this._current<t.length&&Rp(t[this._current]);)this._current+=1;return t.slice(s,this._current)}consumeQuotedIdentifier(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=='"'&&this._current<a;){let n=this._current;t[n]==="\\"&&(t[n+1]==="\\"||t[n+1]==='"')?n+=2:n+=1,this._current=n}return this._current+=1,JSON.parse(t.slice(s,this._current))}consumeRawStringLiteral(t){const s=this._current;this._current+=1;const a=t.length;for(;t[this._current]!=="'"&&this._current<a;){let r=this._current;t[r]==="\\"&&(t[r+1]==="\\"||t[r+1]==="'")?r+=2:r+=1,this._current=r}return this._current+=1,t.slice(s+1,this._current-1).replace("\\'","'")}consumeNumber(t){const s=this._current;this._current+=1;const a=t.length;for(;To(t[this._current])&&this._current<a;)this._current+=1;const n=parseInt(t.slice(s,this._current),10);return{start:s,value:n,type:N.TOK_NUMBER}}consumeLBracket(t){const s=this._current;return this._current+=1,t[this._current]==="?"?(this._current+=1,{start:s,type:N.TOK_FILTER,value:"[?"}):t[this._current]==="]"?(this._current+=1,{start:s,type:N.TOK_FLATTEN,value:"[]"}):{start:s,type:N.TOK_LBRACKET,value:"["}}consumeOperator(t){const s=this._current,a=t[s];if(this._current+=1,a==="!")return t[this._current]==="="?(this._current+=1,{start:s,type:N.TOK_NE,value:"!="}):{start:s,type:N.TOK_NOT,value:"!"};if(a==="<")return t[this._current]==="="?(this._current+=1,{start:s,type:N.TOK_LTE,value:"<="}):{start:s,type:N.TOK_LT,value:"<"};if(a===">")return t[this._current]==="="?(this._current+=1,{start:s,type:N.TOK_GTE,value:">="}):{start:s,type:N.TOK_GT,value:">"};if(a==="="&&t[this._current]==="=")return this._current+=1,{start:s,type:N.TOK_EQ,value:"=="}}consumeLiteral(t){this._current+=1;const s=this._current,a=t.length;for(;t[this._current]!=="`"&&this._current<a;){let o=this._current;t[o]==="\\"&&(t[o+1]==="\\"||t[o+1]==="`")?o+=2:o+=1,this._current=o}let n=t.slice(s,this._current).trimLeft();n=n.replace("\\`","`");const r=this.looksLikeJSON(n)?JSON.parse(n):JSON.parse(`"${n}"`);return this._current+=1,r}looksLikeJSON(t){const a=["true","false","null"],n="-0123456789";if(t==="")return!1;if('[{"'.includes(t[0])||a.includes(t))return!0;if(n.includes(t[0]))try{return JSON.parse(t),!0}catch{return!1}return!1}}const bl=new Ip,Me={[N.TOK_EOF]:0,[N.TOK_UNQUOTEDIDENTIFIER]:0,[N.TOK_QUOTEDIDENTIFIER]:0,[N.TOK_RBRACKET]:0,[N.TOK_RPAREN]:0,[N.TOK_COMMA]:0,[N.TOK_RBRACE]:0,[N.TOK_NUMBER]:0,[N.TOK_CURRENT]:0,[N.TOK_EXPREF]:0,[N.TOK_ROOT]:0,[N.TOK_PIPE]:1,[N.TOK_OR]:2,[N.TOK_AND]:3,[N.TOK_EQ]:5,[N.TOK_GT]:5,[N.TOK_LT]:5,[N.TOK_GTE]:5,[N.TOK_LTE]:5,[N.TOK_NE]:5,[N.TOK_FLATTEN]:9,[N.TOK_STAR]:20,[N.TOK_FILTER]:21,[N.TOK_DOT]:40,[N.TOK_NOT]:45,[N.TOK_LBRACE]:50,[N.TOK_LBRACKET]:55,[N.TOK_LPAREN]:60};class Np{constructor(){this.index=0,this.tokens=[]}parse(t){this.loadTokens(t),this.index=0;const s=this.expression(0);if(this.lookahead(0)!==N.TOK_EOF){const a=this.lookaheadToken(0);this.errorToken(a,`Unexpected token type: ${a.type}, value: ${a.value}`)}return s}loadTokens(t){this.tokens=[...bl.tokenize(t),{type:N.TOK_EOF,value:"",start:t.length}]}expression(t){const s=this.lookaheadToken(0);this.advance();let a=this.nud(s),n=this.lookahead(0);for(;t<Me[n];)this.advance(),a=this.led(n,a),n=this.lookahead(0);return a}lookahead(t){return this.tokens[this.index+t].type}lookaheadToken(t){return this.tokens[this.index+t]}advance(){this.index+=1}nud(t){let s,a,n;switch(t.type){case N.TOK_LITERAL:return{type:"Literal",value:t.value};case N.TOK_UNQUOTEDIDENTIFIER:return{type:"Field",name:t.value};case N.TOK_QUOTEDIDENTIFIER:const r={type:"Field",name:t.value};if(this.lookahead(0)===N.TOK_LPAREN)throw new Error("Quoted identifier not allowed for function names.");return r;case N.TOK_NOT:return a=this.expression(Me.Not),{type:"NotExpression",children:[a]};case N.TOK_STAR:return s={type:"Identity"},a=this.lookahead(0)===N.TOK_RBRACKET&&{type:"Identity"}||this.parseProjectionRHS(Me.Star),{type:"ValueProjection",children:[s,a]};case N.TOK_FILTER:return this.led(t.type,{type:"Identity"});case N.TOK_LBRACE:return this.parseMultiselectHash();case N.TOK_FLATTEN:return s={type:N.TOK_FLATTEN,children:[{type:"Identity"}]},a=this.parseProjectionRHS(Me.Flatten),{type:"Projection",children:[s,a]};case N.TOK_LBRACKET:return this.lookahead(0)===N.TOK_NUMBER||this.lookahead(0)===N.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice({type:"Identity"},a)):this.lookahead(0)===N.TOK_STAR&&this.lookahead(1)===N.TOK_RBRACKET?(this.advance(),this.advance(),a=this.parseProjectionRHS(Me.Star),{children:[{type:"Identity"},a],type:"Projection"}):this.parseMultiselectList();case N.TOK_CURRENT:return{type:N.TOK_CURRENT};case N.TOK_ROOT:return{type:N.TOK_ROOT};case N.TOK_EXPREF:return n=this.expression(Me.Expref),{type:"ExpressionReference",children:[n]};case N.TOK_LPAREN:const o=[];for(;this.lookahead(0)!==N.TOK_RPAREN;)this.lookahead(0)===N.TOK_CURRENT?(n={type:N.TOK_CURRENT},this.advance()):n=this.expression(0),o.push(n);return this.match(N.TOK_RPAREN),o[0];default:this.errorToken(t)}}led(t,s){let a;switch(t){case N.TOK_DOT:const n=Me.Dot;return this.lookahead(0)!==N.TOK_STAR?(a=this.parseDotRHS(n),{type:"Subexpression",children:[s,a]}):(this.advance(),a=this.parseProjectionRHS(n),{type:"ValueProjection",children:[s,a]});case N.TOK_PIPE:return a=this.expression(Me.Pipe),{type:N.TOK_PIPE,children:[s,a]};case N.TOK_OR:return a=this.expression(Me.Or),{type:"OrExpression",children:[s,a]};case N.TOK_AND:return a=this.expression(Me.And),{type:"AndExpression",children:[s,a]};case N.TOK_LPAREN:const r=s.name,o=[];let l;for(;this.lookahead(0)!==N.TOK_RPAREN;)this.lookahead(0)===N.TOK_CURRENT?(l={type:N.TOK_CURRENT},this.advance()):l=this.expression(0),this.lookahead(0)===N.TOK_COMMA&&this.match(N.TOK_COMMA),o.push(l);return this.match(N.TOK_RPAREN),{name:r,type:"Function",children:o};case N.TOK_FILTER:const c=this.expression(0);return this.match(N.TOK_RBRACKET),a=this.lookahead(0)===N.TOK_FLATTEN&&{type:"Identity"}||this.parseProjectionRHS(Me.Filter),{type:"FilterProjection",children:[s,a,c]};case N.TOK_FLATTEN:const d={type:N.TOK_FLATTEN,children:[s]},u=this.parseProjectionRHS(Me.Flatten);return{type:"Projection",children:[d,u]};case N.TOK_EQ:case N.TOK_NE:case N.TOK_GT:case N.TOK_GTE:case N.TOK_LT:case N.TOK_LTE:return this.parseComparator(s,t);case N.TOK_LBRACKET:const p=this.lookaheadToken(0);return p.type===N.TOK_NUMBER||p.type===N.TOK_COLON?(a=this.parseIndexExpression(),this.projectIfSlice(s,a)):(this.match(N.TOK_STAR),this.match(N.TOK_RBRACKET),a=this.parseProjectionRHS(Me.Star),{type:"Projection",children:[s,a]});default:return this.errorToken(this.lookaheadToken(0))}}match(t){if(this.lookahead(0)===t){this.advance();return}else{const s=this.lookaheadToken(0);this.errorToken(s,`Expected ${t}, got: ${s.type}`)}}errorToken(t,s=""){const a=new Error(s||`Invalid token (${t.type}): "${t.value}"`);throw a.name="ParserError",a}parseIndexExpression(){if(this.lookahead(0)===N.TOK_COLON||this.lookahead(1)===N.TOK_COLON)return this.parseSliceExpression();const t={type:"Index",value:this.lookaheadToken(0).value};return this.advance(),this.match(N.TOK_RBRACKET),t}projectIfSlice(t,s){const a={type:"IndexExpression",children:[t,s]};return s.type==="Slice"?{children:[a,this.parseProjectionRHS(Me.Star)],type:"Projection"}:a}parseSliceExpression(){const t=[null,null,null];let s=0,a=this.lookahead(0);for(;a!==N.TOK_RBRACKET&&s<3;){if(a===N.TOK_COLON)s+=1,this.advance();else if(a===N.TOK_NUMBER)t[s]=this.lookaheadToken(0).value,this.advance();else{const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}a=this.lookahead(0)}return this.match(N.TOK_RBRACKET),{children:t,type:"Slice"}}parseComparator(t,s){const a=this.expression(Me[s]);return{type:"Comparator",name:s,children:[t,a]}}parseDotRHS(t){const s=this.lookahead(0);if([N.TOK_UNQUOTEDIDENTIFIER,N.TOK_QUOTEDIDENTIFIER,N.TOK_STAR].includes(s))return this.expression(t);if(s===N.TOK_LBRACKET)return this.match(N.TOK_LBRACKET),this.parseMultiselectList();if(s===N.TOK_LBRACE)return this.match(N.TOK_LBRACE),this.parseMultiselectHash();const n=this.lookaheadToken(0);this.errorToken(n,`Syntax error, unexpected token: ${n.value}(${n.type})`)}parseProjectionRHS(t){if(Me[this.lookahead(0)]<10)return{type:"Identity"};if(this.lookahead(0)===N.TOK_LBRACKET)return this.expression(t);if(this.lookahead(0)===N.TOK_FILTER)return this.expression(t);if(this.lookahead(0)===N.TOK_DOT)return this.match(N.TOK_DOT),this.parseDotRHS(t);const s=this.lookaheadToken(0);this.errorToken(s,`Syntax error, unexpected token: ${s.value}(${s.type})`)}parseMultiselectList(){const t=[];for(;this.lookahead(0)!==N.TOK_RBRACKET;){const s=this.expression(0);if(t.push(s),this.lookahead(0)===N.TOK_COMMA&&(this.match(N.TOK_COMMA),this.lookahead(0)===N.TOK_RBRACKET))throw new Error("Unexpected token Rbracket")}return this.match(N.TOK_RBRACKET),{type:"MultiSelectList",children:t}}parseMultiselectHash(){const t=[],s=[N.TOK_UNQUOTEDIDENTIFIER,N.TOK_QUOTEDIDENTIFIER];let a,n,r;for(;;){if(a=this.lookaheadToken(0),!s.includes(a.type))throw new Error(`Expecting an identifier token, got: ${a.type}`);if(n=a.value,this.advance(),this.match(N.TOK_COLON),r=this.expression(0),t.push({value:r,type:"KeyValuePair",name:n}),this.lookahead(0)===N.TOK_COMMA)this.match(N.TOK_COMMA);else if(this.lookahead(0)===N.TOK_RBRACE){this.match(N.TOK_RBRACE);break}}return{type:"MultiSelectHash",children:t}}}const _l=new Np;var W;(function(e){e[e.TYPE_NUMBER=0]="TYPE_NUMBER",e[e.TYPE_ANY=1]="TYPE_ANY",e[e.TYPE_STRING=2]="TYPE_STRING",e[e.TYPE_ARRAY=3]="TYPE_ARRAY",e[e.TYPE_OBJECT=4]="TYPE_OBJECT",e[e.TYPE_BOOLEAN=5]="TYPE_BOOLEAN",e[e.TYPE_EXPREF=6]="TYPE_EXPREF",e[e.TYPE_NULL=7]="TYPE_NULL",e[e.TYPE_ARRAY_NUMBER=8]="TYPE_ARRAY_NUMBER",e[e.TYPE_ARRAY_STRING=9]="TYPE_ARRAY_STRING"})(W||(W={}));class Bp{constructor(t){this.TYPE_NAME_TABLE={[W.TYPE_NUMBER]:"number",[W.TYPE_ANY]:"any",[W.TYPE_STRING]:"string",[W.TYPE_ARRAY]:"array",[W.TYPE_OBJECT]:"object",[W.TYPE_BOOLEAN]:"boolean",[W.TYPE_EXPREF]:"expression",[W.TYPE_NULL]:"null",[W.TYPE_ARRAY_NUMBER]:"Array<number>",[W.TYPE_ARRAY_STRING]:"Array<string>"},this.functionAbs=([s])=>Math.abs(s),this.functionAvg=([s])=>{let a=0;for(let n=0;n<s.length;n+=1)a+=s[n];return a/s.length},this.functionCeil=([s])=>Math.ceil(s),this.functionContains=s=>{const[a,n]=s;return a.includes(n)},this.functionEndsWith=s=>{const[a,n]=s;return a.includes(n,a.length-n.length)},this.functionFloor=([s])=>Math.floor(s),this.functionJoin=s=>{const[a,n]=s;return n.join(a)},this.functionKeys=([s])=>Object.keys(s),this.functionLength=([s])=>As(s)?Object.keys(s).length:s.length,this.functionMap=s=>{if(!this._interpreter)return[];const a=[],n=this._interpreter,r=s[0],o=s[1];for(let l=0;l<o.length;l+=1)a.push(n.visit(r,o[l]));return a},this.functionMax=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===W.TYPE_NUMBER)return Math.max(...s);const n=s;let r=n[0];for(let o=1;o<n.length;o+=1)r.localeCompare(n[o])<0&&(r=n[o]);return r},this.functionMaxBy=s=>{const a=s[1],n=s[0],r=this.createKeyFunction(a,[W.TYPE_NUMBER,W.TYPE_STRING]);let o=-1/0,l,i;for(let c=0;c<n.length;c+=1)i=r&&r(n[c]),i!==void 0&&i>o&&(o=i,l=n[c]);return l},this.functionMerge=s=>{let a={};for(let n=0;n<s.length;n+=1){const r=s[n];a=Object.assign(a,r)}return a},this.functionMin=([s])=>{if(!s.length)return null;if(this.getTypeName(s[0])===W.TYPE_NUMBER)return Math.min(...s);const n=s;let r=n[0];for(let o=1;o<n.length;o+=1)n[o].localeCompare(r)<0&&(r=n[o]);return r},this.functionMinBy=s=>{const a=s[1],n=s[0],r=this.createKeyFunction(a,[W.TYPE_NUMBER,W.TYPE_STRING]);let o=1/0,l,i;for(let c=0;c<n.length;c+=1)i=r&&r(n[c]),i!==void 0&&i<o&&(o=i,l=n[c]);return l},this.functionNotNull=s=>{for(let a=0;a<s.length;a+=1)if(this.getTypeName(s[a])!==W.TYPE_NULL)return s[a];return null},this.functionReverse=([s])=>{if(this.getTypeName(s)===W.TYPE_STRING){const r=s;let o="";for(let l=r.length-1;l>=0;l-=1)o+=r[l];return o}const n=s.slice(0);return n.reverse(),n},this.functionSort=([s])=>[...s].sort(),this.functionSortBy=s=>{if(!this._interpreter)return[];const a=s[0].slice(0);if(a.length===0)return a;const n=this._interpreter,r=s[1],o=this.getTypeName(n.visit(r,a[0]));if(o!==void 0&&![W.TYPE_NUMBER,W.TYPE_STRING].includes(o))throw new Error(`TypeError: unexpected type (${this.TYPE_NAME_TABLE[o]})`);const l=[];for(let i=0;i<a.length;i+=1)l.push([i,a[i]]);l.sort((i,c)=>{const d=n.visit(r,i[1]),u=n.visit(r,c[1]);if(this.getTypeName(d)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(d)]}`);if(this.getTypeName(u)!==o)throw new Error(`TypeError: expected (${this.TYPE_NAME_TABLE[o]}), received ${this.TYPE_NAME_TABLE[this.getTypeName(u)]}`);return d>u?1:d<u?-1:i[0]-c[0]});for(let i=0;i<l.length;i+=1)a[i]=l[i][1];return a},this.functionStartsWith=([s,a])=>s.startsWith(a),this.functionSum=([s])=>s.reduce((a,n)=>a+n,0),this.functionToArray=([s])=>this.getTypeName(s)===W.TYPE_ARRAY?s:[s],this.functionToNumber=([s])=>{const a=this.getTypeName(s);let n;return a===W.TYPE_NUMBER?s:a===W.TYPE_STRING&&(n=+s,!isNaN(n))?n:null},this.functionToString=([s])=>this.getTypeName(s)===W.TYPE_STRING?s:JSON.stringify(s),this.functionType=([s])=>{switch(this.getTypeName(s)){case W.TYPE_NUMBER:return"number";case W.TYPE_STRING:return"string";case W.TYPE_ARRAY:return"array";case W.TYPE_OBJECT:return"object";case W.TYPE_BOOLEAN:return"boolean";case W.TYPE_EXPREF:return"expref";case W.TYPE_NULL:return"null";default:return}},this.functionValues=([s])=>Object.values(s),this.functionTable={abs:{_func:this.functionAbs,_signature:[{types:[W.TYPE_NUMBER]}]},avg:{_func:this.functionAvg,_signature:[{types:[W.TYPE_ARRAY_NUMBER]}]},ceil:{_func:this.functionCeil,_signature:[{types:[W.TYPE_NUMBER]}]},contains:{_func:this.functionContains,_signature:[{types:[W.TYPE_STRING,W.TYPE_ARRAY]},{types:[W.TYPE_ANY]}]},ends_with:{_func:this.functionEndsWith,_signature:[{types:[W.TYPE_STRING]},{types:[W.TYPE_STRING]}]},floor:{_func:this.functionFloor,_signature:[{types:[W.TYPE_NUMBER]}]},join:{_func:this.functionJoin,_signature:[{types:[W.TYPE_STRING]},{types:[W.TYPE_ARRAY_STRING]}]},keys:{_func:this.functionKeys,_signature:[{types:[W.TYPE_OBJECT]}]},length:{_func:this.functionLength,_signature:[{types:[W.TYPE_STRING,W.TYPE_ARRAY,W.TYPE_OBJECT]}]},map:{_func:this.functionMap,_signature:[{types:[W.TYPE_EXPREF]},{types:[W.TYPE_ARRAY]}]},max:{_func:this.functionMax,_signature:[{types:[W.TYPE_ARRAY_NUMBER,W.TYPE_ARRAY_STRING]}]},max_by:{_func:this.functionMaxBy,_signature:[{types:[W.TYPE_ARRAY]},{types:[W.TYPE_EXPREF]}]},merge:{_func:this.functionMerge,_signature:[{types:[W.TYPE_OBJECT],variadic:!0}]},min:{_func:this.functionMin,_signature:[{types:[W.TYPE_ARRAY_NUMBER,W.TYPE_ARRAY_STRING]}]},min_by:{_func:this.functionMinBy,_signature:[{types:[W.TYPE_ARRAY]},{types:[W.TYPE_EXPREF]}]},not_null:{_func:this.functionNotNull,_signature:[{types:[W.TYPE_ANY],variadic:!0}]},reverse:{_func:this.functionReverse,_signature:[{types:[W.TYPE_STRING,W.TYPE_ARRAY]}]},sort:{_func:this.functionSort,_signature:[{types:[W.TYPE_ARRAY_STRING,W.TYPE_ARRAY_NUMBER]}]},sort_by:{_func:this.functionSortBy,_signature:[{types:[W.TYPE_ARRAY]},{types:[W.TYPE_EXPREF]}]},starts_with:{_func:this.functionStartsWith,_signature:[{types:[W.TYPE_STRING]},{types:[W.TYPE_STRING]}]},sum:{_func:this.functionSum,_signature:[{types:[W.TYPE_ARRAY_NUMBER]}]},to_array:{_func:this.functionToArray,_signature:[{types:[W.TYPE_ANY]}]},to_number:{_func:this.functionToNumber,_signature:[{types:[W.TYPE_ANY]}]},to_string:{_func:this.functionToString,_signature:[{types:[W.TYPE_ANY]}]},type:{_func:this.functionType,_signature:[{types:[W.TYPE_ANY]}]},values:{_func:this.functionValues,_signature:[{types:[W.TYPE_OBJECT]}]}},this._interpreter=t}registerFunction(t,s,a){if(t in this.functionTable)throw new Error(`Function already defined: ${t}()`);this.functionTable[t]={_func:s.bind(this),_signature:a}}callFunction(t,s){const a=this.functionTable[t];if(a===void 0)throw new Error(`Unknown function: ${t}()`);return this.validateArgs(t,s,a._signature),a._func.call(this,s)}validateInputSignatures(t,s){for(let a=0;a<s.length;a+=1)if("variadic"in s[a]&&a!==s.length-1)throw new Error(`ArgumentError: ${t}() 'variadic' argument ${a+1} must occur last`)}validateArgs(t,s,a){var n,r;let o;this.validateInputSignatures(t,a);const l=a.filter(m=>{var k;return(k=!m.optional)!==null&&k!==void 0?k:!1}).length,i=(r=(n=a[a.length-1])===null||n===void 0?void 0:n.variadic)!==null&&r!==void 0?r:!1,c=s.length<l,d=s.length>a.length,u=c&&(!i&&l>1||i)?"at least ":"";if(i&&c||!i&&(c||d))throw o=a.length>1,new Error(`ArgumentError: ${t}() takes ${u}${l} argument${o&&"s"||""} but received ${s.length}`);let p,f,b;for(let m=0;m<a.length;m+=1){b=!1,p=a[m].types,f=this.getTypeName(s[m]);let k;for(k=0;k<p.length;k+=1)if(f!==void 0&&this.typeMatches(f,p[k],s[m])){b=!0;break}if(!b&&f!==void 0){const E=p.map(A=>this.TYPE_NAME_TABLE[A]).join(" | ");throw new Error(`TypeError: ${t}() expected argument ${m+1} to be type (${E}) but received type ${this.TYPE_NAME_TABLE[f]} instead.`)}}}typeMatches(t,s,a){if(s===W.TYPE_ANY)return!0;if(s===W.TYPE_ARRAY_STRING||s===W.TYPE_ARRAY_NUMBER||s===W.TYPE_ARRAY){if(s===W.TYPE_ARRAY)return t===W.TYPE_ARRAY;if(t===W.TYPE_ARRAY){let n;s===W.TYPE_ARRAY_NUMBER?n=W.TYPE_NUMBER:s===W.TYPE_ARRAY_STRING&&(n=W.TYPE_STRING);for(let r=0;r<a.length;r+=1){const o=this.getTypeName(a[r]);if(o!==void 0&&n!==void 0&&!this.typeMatches(o,n,a[r]))return!1}return!0}}else return t===s;return!1}getTypeName(t){switch(Object.prototype.toString.call(t)){case"[object String]":return W.TYPE_STRING;case"[object Number]":return W.TYPE_NUMBER;case"[object Array]":return W.TYPE_ARRAY;case"[object Boolean]":return W.TYPE_BOOLEAN;case"[object Null]":return W.TYPE_NULL;case"[object Object]":return t.jmespathType===N.TOK_EXPREF?W.TYPE_EXPREF:W.TYPE_OBJECT;default:return}}createKeyFunction(t,s){if(!this._interpreter)return;const a=this._interpreter;return r=>{const o=a.visit(t,r);if(!s.includes(this.getTypeName(o))){const l=`TypeError: expected one of (${s.map(i=>this.TYPE_NAME_TABLE[i]).join(" | ")}), received ${this.TYPE_NAME_TABLE[this.getTypeName(o)]}`;throw new Error(l)}return o}}}class Fp{constructor(){this._rootValue=null,this.runtime=new Bp(this)}search(t,s){return this._rootValue=s,this.visit(t,s)}visit(t,s){let a,n,r,o,l,i,c,d,u,p,f;switch(t.type){case"Field":return s===null?null:As(s)?(i=s[t.name],i===void 0?null:i):null;case"Subexpression":for(r=this.visit(t.children[0],s),p=1;p<t.children.length;p+=1)if(r=this.visit(t.children[1],r),r===null)return null;return r;case"IndexExpression":return c=this.visit(t.children[0],s),d=this.visit(t.children[1],c),d;case"Index":if(!Array.isArray(s))return null;let b=t.value;return b<0&&(b=s.length+b),r=s[b],r===void 0&&(r=null),r;case"Slice":if(!Array.isArray(s))return null;const m=[...t.children],k=this.computeSliceParams(s.length,m),[E,A,x]=k;if(r=[],x>0)for(p=E;p<A;p+=x)r.push(s[p]);else for(p=E;p>A;p+=x)r.push(s[p]);return r;case"Projection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;for(u=[],p=0;p<f.length;p+=1)n=this.visit(t.children[1],f[p]),n!==null&&u.push(n);return u;case"ValueProjection":if(f=this.visit(t.children[0],s),!As(f))return null;u=[];const y=Object.values(f);for(p=0;p<y.length;p+=1)n=this.visit(t.children[1],y[p]),n!==null&&u.push(n);return u;case"FilterProjection":if(f=this.visit(t.children[0],s),!Array.isArray(f))return null;const P=[],M=[];for(p=0;p<f.length;p+=1)a=this.visit(t.children[2],f[p]),ia(a)||P.push(f[p]);for(let _=0;_<P.length;_+=1)n=this.visit(t.children[1],P[_]),n!==null&&M.push(n);return M;case"Comparator":switch(o=this.visit(t.children[0],s),l=this.visit(t.children[1],s),t.name){case N.TOK_EQ:r=Ea(o,l);break;case N.TOK_NE:r=!Ea(o,l);break;case N.TOK_GT:r=o>l;break;case N.TOK_GTE:r=o>=l;break;case N.TOK_LT:r=o<l;break;case N.TOK_LTE:r=o<=l;break;default:throw new Error(`Unknown comparator: ${t.name}`)}return r;case N.TOK_FLATTEN:const R=this.visit(t.children[0],s);if(!Array.isArray(R))return null;let w=[];for(p=0;p<R.length;p+=1)n=R[p],Array.isArray(n)?w=[...w,...n]:w.push(n);return w;case"Identity":return s;case"MultiSelectList":if(s===null)return null;for(u=[],p=0;p<t.children.length;p+=1)u.push(this.visit(t.children[p],s));return u;case"MultiSelectHash":if(s===null)return null;u={};let g;for(p=0;p<t.children.length;p+=1)g=t.children[p],u[g.name]=this.visit(g.value,s);return u;case"OrExpression":return a=this.visit(t.children[0],s),ia(a)&&(a=this.visit(t.children[1],s)),a;case"AndExpression":return o=this.visit(t.children[0],s),ia(o)?o:this.visit(t.children[1],s);case"NotExpression":return o=this.visit(t.children[0],s),ia(o);case"Literal":return t.value;case N.TOK_PIPE:return c=this.visit(t.children[0],s),this.visit(t.children[1],c);case N.TOK_CURRENT:return s;case N.TOK_ROOT:return this._rootValue;case"Function":const h=[];for(let _=0;_<t.children.length;_+=1)h.push(this.visit(t.children[_],s));return this.runtime.callFunction(t.name,h);case"ExpressionReference":const T=t.children[0];return T.jmespathType=N.TOK_EXPREF,T;default:throw new Error(`Unknown node type: ${t.type}`)}}computeSliceParams(t,s){let[a,n,r]=s;if(r===null)r=1;else if(r===0){const l=new Error("Invalid slice, step cannot be 0");throw l.name="RuntimeError",l}const o=r<0;return a=a===null?o?t-1:0:this.capSliceRange(t,a,r),n=n===null?o?-1:t:this.capSliceRange(t,n,r),[a,n,r]}capSliceRange(t,s,a){let n=s;return n<0?(n+=t,n<0&&(n=a<0?-1:0)):n>=t&&(n=a<0?t-1:t),n}}const ur=new Fp,$p=W.TYPE_ANY,zp=W.TYPE_ARRAY,Hp=W.TYPE_ARRAY_NUMBER,Up=W.TYPE_ARRAY_STRING,Gp=W.TYPE_BOOLEAN,jp=W.TYPE_EXPREF,Yp=W.TYPE_NULL,Vp=W.TYPE_NUMBER,Kp=W.TYPE_OBJECT,qp=W.TYPE_STRING;function Wp(e){return _l.parse(e)}function Jp(e){return bl.tokenize(e)}const Xp=(e,t,s)=>{ur.runtime.registerFunction(e,t,s)};function Qp(e,t){const s=_l.parse(t);return ur.search(s,e)}const Zp=ur,tt={compile:Wp,registerFunction:Xp,search:Qp,tokenize:Jp,TreeInterpreter:Zp,TYPE_ANY:$p,TYPE_ARRAY_NUMBER:Hp,TYPE_ARRAY_STRING:Up,TYPE_ARRAY:zp,TYPE_BOOLEAN:Gp,TYPE_EXPREF:jp,TYPE_NULL:Yp,TYPE_NUMBER:Vp,TYPE_OBJECT:Kp,TYPE_STRING:qp},bt=class bt{static async appendPrompt(t,s){xo(t,LZString.compressToUTF16(JSON.stringify(s))).then(async()=>{bs().then(a=>{a=a.filter(n=>n.indexOf(this.DELIM_PROMPTS)!=-1),a.length>bt.MAX_PROMPTS_VALS&&pn(a[0])})}).catch(a=>console.error("~IDB Failed | ",a))}static async appendVIR_products(t){t.forEach(s=>{let a=JSON.stringify({ts:Date.now(),name:s[1]});xo(s[0],LZString.compressToUTF16(a)).then(async()=>{}).catch(n=>console.error("~IDB Failed | ",n))})}static async keys(t,s){bs().then(a=>{a=a.filter(n=>n.indexOf(t)!=-1),s&&s(a)})}static async get(t,s){Op(t).then(a=>{try{a=JSON.parse(LZString.decompressFromUTF16(a))}catch{}finally{s&&s(a)}})}static async entries(t,s){Cp().then(a=>{a=a.filter(n=>n[0].indexOf(t)!=-1),a=a.map(n=>{try{n[1]=JSON.parse(LZString.decompressFromUTF16(n[1]))}catch{}finally{}return n}),s&&s(a)})}static compr(t){return t}static decompr(t){return t}static async act(t,s,a){let n="";switch(t){case"PROMPTS_COUNT":bs().then(o=>{o=o.filter(l=>l.indexOf(this.DELIM_PROMPTS)!=-1),n=`There are ${o.length} prompts in local IDB storage. The current max is ${this.MAX_PROMPTS_VALS}.`,n&&a&&a(n)});break;case"PROMPTS_IMPORT":console.log("~ PROMPTS_IMPORT | ");break;case"PROMPTS_EXPORT":console.log("~ PROMPTS_EXPORT | ");break;case"PROMPTS_CLEAR":bs().then(o=>{o.forEach(l=>{l.indexOf(this.DELIM_PROMPTS)!=-1&&l.split(bt.DELIM_PROMPTS)[0]==s&&pn(l)})}),n="The Prompt history has been removed for UPI: "+s,console.log("~ PROMPTS_CLEAR ------ | ",n);break;case"VIR_COUNT":bs().then(o=>{o=o.filter(l=>l.indexOf(this.DELIM_VIR)!=-1),n=`There are ${o.length} VNR names in local IDB storage.`,n&&a&&a(n)});break;case"VIR_CLEAR":let r=0;await bs().then(o=>{o.forEach(l=>{l.indexOf(this.DELIM_VIR)!=-1&&l.split(bt.DELIM_VIR)[0]==s&&(r++,pn(l))})}),n=`The VNR Names have been removed for UPI: ${s} (Total Deleted: ${r})`;break;case"FEATURE_CLEAR":localStorage.getItem("feature_flags")&&localStorage.removeItem("feature_flags"),n="Features have been reset to default. Refresh.";break}console.log("~ resultMsg | ",n),n&&a&&a(n)}};bt.MAX_TYPEAHEAD_ROWS=14,bt.MAX_PROMPTS_VALS=50,bt.DELIM_PROMPTS="_",bt.DELIM_VIR="-",bt.DELIM_SNDX="|";let ls=bt;const _e=gu("AppState",()=>{const e=Tt(),t="DEV",s="BMA Tourney v0.0.5 ",a="#app",n=Mt({APP__ROUTE_SYNC:"APP.ROUTE_SYNC",WC__TOURN_ACTION:"WC.TOURN_ACTION",WC__APP__HEAD_TOP:"WC.APP.HEAD_TOP",WC__APP__HEAD_TOP__LOGO:"WC.APP.HEAD_TOP.LOGO",WC__APP__HEAD_TOP__USER_PROFILE:"WC.APP.HEAD_TOP.USER_PROFILE",WC__APP__HEAD_MID:"WC.APP.HEAD_MID",WC__APP__HEAD_MID__HEAD_MID_LOBBY:"WC.APP.HEAD_MID.HEAD_MID_LOBBY",WC__APP__HEAD_MID__HEAD_MID_MY:"WC.APP.HEAD_MID.HEAD_MID_MY",WC__APP__HEAD_MID__HEAD_MID_COMPLETED:"WC.APP.HEAD_MID.HEAD_MID_COMPLETED",WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD",WC__APP__HEAD_MID__HEAD_MID_SQUAD:"WC.APP.HEAD_MID.HEAD_MID_SQUAD",WC__APP__HEAD_SPORTS:"WC.APP.HEAD_SPORTS",WC__APP__HEAD_SPORTS__HEAD_SPORTS_DRAG_START:"WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",WC__APP__FOOT:"WC.APP.FOOT",WC__APP__FOOT__ALL_SPORTS:"WC.APP.FOOT.ALL_SPORTS",WC__APP__FOOT__MY_TOURNEYS:"WC.APP.FOOT.MY_TOURNEYS",WC__APP__FOOT__LEADERBOARD:"WC.APP.FOOT.LEADERBOARD",WC__APP__FOOT__MY_PROFILE:"WC.APP.FOOT.MY_PROFILE",ROUTE__HOME_ONMOUNT:"ROUTE.HOME_ONMOUNT",ROUTE__HOME_HYDRATE:"ROUTE.HOME_HYDRATE",ROUTE__HOME__USER_PROFILE:"ROUTE.HOME.USER_PROFILE",SSE__CORE__TOURN_SYNC:"SSE.CORE.TOURN_SYNC",CANVAS__HYDRATE__STATUS:"CANVAS.HYDRATE.STATUS",SODAPOP__HYDRATE__COREBETSLIP:"SODAPOP.HYDRATE.COREBETSLIP",COREBETSLIP:"COREBETSLIP",COREBETSLIP__BET:"COREBETSLIP.BET",COREBETSLIP__SPREAD:"COREBETSLIP.SPREAD",COREBETSLIP__MONEY:"COREBETSLIP.MONEY",COREBETSLIP__TOTAL:"COREBETSLIP.TOTAL",COREBETSLIP__CLOSE:"COREBETSLIP.CLOSE",COREBETSLIP__INTERSYNC:"COREBETSLIP.INTERSYNC",COREBETSLIP__TDSYNC:"COREBETSLIP.TDSYNC",ROUTE__SIGNUP__TERMS:"ROUTE.SIGNUP.TERMS",PROMOTION__LOAD:"PROMOTION.LOAD",PROMOTION__CLICK:"PROMOTION.CLICK"});let r=Mt([]),o=Mt([]);const l=g=>{r.push(g),r.length>10&&(r.shift(),console.log("[appState] coreTourn exceeded 10 items, removed oldest")),console.log(`[appState] coreTourn length: ${r.length}`)},i=g=>{o.push(g),o.length>10&&(o.shift(),console.log("[appState] coreBetSlip exceeded 10 items, removed oldest")),console.log(`[appState] coreBetSlip length: ${o.length}`)},c=()=>{const g=localStorage.getItem("session_user");if(console.log("[appState] Loading session_user from localStorage:",g),g)try{const h=JSON.parse(g);return console.log("[appState] Parsed session_user:",h),h}catch(h){console.error("Failed to parse session_user from localStorage:",h)}return console.log("[appState] No saved session, returning default"),{authenticated:!1,userName:"",name:"",fname:"",lname:"",email:"",token:"",guid:""}},d=Ze({session_app:{online:!0,route:"",version:s+t,buildmode:t},session_log:[],session_ui:{orientation:"landscape",isTouch:"utils.isTouch()"},session_user:c()}),u=Ze({commands:["clear","debug","export","feature","help","logout","reload","route","theme","version","workflow"],features:{theme:{state:"dark"},motif:{state:"brand"},lang:{state:"en"},sse:{state:!0},disable_existing_bet_btn:{state:!1},animation:{state:!0},audio:{state:!0},contextmenu:{state:!1},debug:{state:!1},guided_tour:{state:!1}},env_override:{DEV:{contextmenu:{state:!1}},QA:{contextmenu:{state:!0}},PROD:{contextmenu:{state:!1},sse:!0}}}),p=()=>{if(!localStorage.getItem("feature_flags"))localStorage.setItem("feature_flags",ls.compr(JSON.stringify(u.value.features)));else{let g=ls.decompr(localStorage.getItem("feature_flags"));g=Object.assign(u.value.features,JSON.parse(g));for(let h in g)typeof u.value?.env_override[t][h]<"u"&&(g[h]=u.value.env_override[t][h]);localStorage.setItem("feature_flags",ls.compr(JSON.stringify(u.value.features=g)))}},f=()=>{const g=document.querySelector(a);if(g){const h=g.dataset;for(let T in h){const _=T.replace(/^sync/,""),C=Object.keys(u.value.features).find(B=>B.toLowerCase()===_.toLowerCase());if(C){const B=u.value.features[C]?.state;B&&(h[T]=B)}}}},b=(g="Theme",h={state:"dark"})=>{const T=document.querySelector(a);T&&(T.dataset["sync"+g]=h.state)},m=(g="Theme",h={state:"dark"})=>{if(localStorage.getItem("feature_flags")&&h){let _=JSON.parse(ls.decompr(localStorage.getItem("feature_flags")));_[g]={state:h.state},localStorage.setItem("feature_flags",ls.compr(JSON.stringify(u.value.features=_))),b(g,h),re.publish("APP.ROUTE_SYNC",`{ "${g}": ${JSON.stringify(h)}}`)}},k=g=>{const h=u.value?.features?.Lang?.state;let T=x.value.microcopy.language.filter(_=>_.code==h)[0]?.copy;if(T=T.filter(_=>_[0]==g)[0],T)return T[1]},E=(g=":version")=>{let[h,T,_]=g.split(" ");switch(h=h.toLocaleLowerCase(),_=="true"&&(_=!0),_=="false"&&(_=!1),h){case":version":neodigmToast.q(`Version Q ${d.value.session_app.version}`,"brand");break;case":feature":m(T,{state:_});break;case":route":neodigmToast.q(`route ${T}`,"brand"),e.push({name:T});break}};p(),f();const A=Mt({designer:"guided_tour",notifications:{unread:0}}),x=Ze({sports:it,microcopy:Ap.getMeta()}),y=Je(()=>d.value.session_user.fname+" "+d.value.session_user.lname),P=()=>{console.log("[appState] Saving session_user to localStorage:",d.value.session_user),localStorage.setItem("session_user",JSON.stringify(d.value.session_user))},M=()=>{localStorage.removeItem("session_user")};function R(g){return d.value.session_user.authenticated=!0,d.value.session_user.token=g,P(),d.value.session_app.route="chat"}function w(){return d.value.session_user.authenticated=!1,d.value.session_user.token="",d.value.session_user.guid="",M(),API_ORCH.setTJO(null),d.value.session_app.route="auth"}return{appCLIFeatures:u,appDesigner:A,appMeta:x,appSession:d,clearSessionUser:M,concatFirstLast:y,coreBetSlip:o,coreTourn:r,doCLI:E,doLogin:R,doLogout:w,hierTopics:n,i18n:k,pushCoreTourn:l,pushcoreBetSlip:i,saveSessionUser:P,setFeaturePersistPub:m}}),Ge=class Ge{static RETIREgetTJO(){if(this.jsTJO)return this.jsTJO;let t=localStorage.getItem("tjo");return t&&(this.jsTJO=JSON.parse(t)),this.jsTJO}static RETIREsetTJO(t){return t?localStorage.setItem("tjo",JSON.stringify(t)):localStorage.clear("tjo"),this.jsTJO=t}static setStateSignout(){typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(11),Ge.setTJO(null),location.reload()}static async doSignin(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/signin",a)).json();r.ok?(typeof mvvLegit<"u"&&mvvLegit&&r?.accessToken&&mvvLegit.doSignin(r?.accessToken),s&&s(r)):typeof neodigmToast<"u"&&neodigmToast.q("Invalid User ID|Password")}static async doSignup(t,s=null){const a={method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity",a)).json();if(r.ok)typeof neodigmToast<"u"&&neodigmToast.q("Account created successfully!|Please sign in","success"),s&&s(r);else{const o=r?.error||r?.message||"Signup failed. Please try again.";typeof neodigmToast<"u"&&neodigmToast.q(o,"danger"),s&&s(r)}}static async checkUserName(t,s=null){const a={method:"POST",body:JSON.stringify({userName:t}),headers:{"Content-Type":"application/json"}},r=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/acctEntity/checkUserName",a)).json();return s&&s(r),r}static async resetHash(t,s,a=null){typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now();const n=typeof neodigmUtils<"u"?neodigmUtils.genHash(s):s,r={method:"POST",body:JSON.stringify({guid:t,hash:n}),headers:Ge.genHeaders()},l=await(await fetch(this.API_baseURI+this.API_ver+"/acct/resetHash",r)).json();a&&a(l)}static genHeaders(t={}){let s={};return s.protomolecule=typeof neodigmAgent<"u"?neodigmAgent.genChronSync():Date.now(),s.Authorization="Bearer expired",s["Content-Type"]="application/json",typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.class&&(s.role=SessionAcctEntity.oEntities.data.entity.class),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.guid&&(s.guid=SessionAcctEntity.oEntities.data.entity.guid),typeof SessionAcctEntity<"u"&&SessionAcctEntity&&SessionAcctEntity.oEntities?.data?.entity?.company&&(s.company=SessionAcctEntity.oEntities.data.entity.company),s}static async fetchTournaments(t=null){const s={method:"GET",headers:Ge.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreTournaments",s)).json();return t&&t(n),n}static async fetchBetSlips(t,s="",a="",n=null){let r=`/m5t/${this.API_ver}/coreBetSlip/filter/${t}`;s&&(r+=`/${s}`),s&&a&&(r+=`/${a}`);const o={method:"GET",headers:Ge.genHeaders()},i=await(await fetch(this.API_baseURI+r,o)).json();return n&&n(i),i}static async fetchLeaderboard(t,s="",a=null){let n=`/m5t/${this.API_ver}/coreLeaderboard?tourney=${t}`;s&&(n+=`&user=${s}`);const r={method:"GET",headers:Ge.genHeaders()},l=await(await fetch(this.API_baseURI+n,r)).json();return a&&a(l),l}static async fetchGlobalLeaderboard(t=null){const s=`/m5t/${this.API_ver}/coreLeaderboard`,a={method:"GET",headers:Ge.genHeaders()},r=await(await fetch(this.API_baseURI+s,a)).json();return t&&t(r),r}static async postBetSlips(t,s=null){const a=t.map(r=>{const o={method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}};return fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/coreBetSlip/",o).then(l=>l.json())}),n=await Promise.all(a);return s&&s(n),n}static async fetchPromotions(t=null){const s={method:"GET",headers:Ge.genHeaders()},n=await(await fetch(this.API_baseURI+"/m5t/"+this.API_ver+"/corePromotion",s)).json();return t&&t(n),n}};Ge.API_baseURI="https://machfive-bmacdev-rest.onrender.com",Ge.API_ver="v5",Ge.jsState={},Ge.jsMeta={},Ge.jsTJO=null;let Se=Ge;const Qs={shootConfetti(){if(typeof confetti=="function"){let a=function(n,r){confetti({...t,...r,particleCount:Math.floor(e*n)})};var s=a,e=200,t={origin:{y:.7}};a(.25,{zIndex:304,spread:26,startVelocity:55}),a(.2,{zIndex:304,spread:60}),a(.35,{zIndex:304,spread:100,decay:.91,scalar:.8}),a(.1,{zIndex:304,spread:120,startVelocity:25,decay:.92,scalar:1.2}),a(.1,{zIndex:304,spread:120,startVelocity:45})}},hardReload(){const e=new URLSearchParams(window.location.search);e.set("reload",new Date().getTime());const t=e.toString();window.location.search=t},isJSON(e){let t=!1;try{t=typeof JSON.parse(e)}catch{}return t=="object"},isTouch:function(){return typeof document.body.ontouchstart<"u"},prettyTimeExt(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})},formatDateLocal(e,t={}){if(!e)return"TBD";let s=new Date(e);!e.includes("Z")&&!e.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(e+"Z"));const a={month:"short",day:"numeric",hour:"numeric",minute:"2-digit"};return s.toLocaleString(void 0,{...a,...t})},shallowDelta(e,t){if(Object.keys(t).length==0&&Object.keys(e).length>0)return e;let s={};for(const a in t)e[a]&&t[a]!=e[a]&&(s[a]=e[a]);return Object.keys(s).length>0?s:t},genLorumIpsum(e=1){}},es=(e,t)=>{const s=e.__vccOpts||e;for(const[a,n]of t)s[a]=n;return s},ef={class:"auth-page"},tf={__name:"splash_route",setup(e){const t=Tt(),s=gl();return _e(),setTimeout(()=>{s&&s.name=="splash_route"&&(mvvLegit&&mvvLegit.isRouteAllowed("home_route")?t.push({name:"home_route"}):t.push({name:"signin_route"}))},3e3),(a,n)=>(Ye(),nt("div",ef,[...n[0]||(n[0]=[hs('<div class="auth-page-left" data-v-910ecc85><div class="auth-bg" data-v-910ecc85><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div><div class="auth-bg-image" data-v-910ecc85></div></div><div class="auth-overlay" data-v-910ecc85></div><div class="auth-branding-content" data-v-910ecc85><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-910ecc85><p class="auth-branding-tagline" data-v-910ecc85>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-910ecc85>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-910ecc85> © 2026 Bet Max Action. All rights reserved. </div></div>',1),H("div",{class:"auth-page-right"},[H("div",{class:"auth-card splash-content"},[H("p",{class:"splash-message"},"Loading Tournaments..."),H("br"),H("br"),H("neodigm-juicebar",{role:"progressbar","data-n55-theme":"brand","data-n55-size":"medium",style:{"background-color":"#242424"}},[H("div")])])],-1)])]))}},Eo=es(tf,[["__scopeId","data-v-910ecc85"]]);class sf{constructor(){this._theme="dark",this._motif="brand",this._lang="en",this._listeners=new Set,this._observer=null,this._initialized=!1}init(){if(this._initialized)return this;const t=document.getElementById("app");return t?(this._readFromApp(t),this._observeApp(t),this._initialized=!0,this):(document.readyState==="loading"&&document.addEventListener("DOMContentLoaded",()=>this.init(),{once:!0}),this)}_readFromApp(t){this._theme=t.getAttribute("data-sync-theme")||"dark",this._motif=t.getAttribute("data-sync-motif")||"brand",this._lang=t.getAttribute("data-sync-lang")||"en"}_observeApp(t){this._observer||(this._observer=new MutationObserver(s=>{let a=!1;for(const n of s){if(n.attributeName==="data-sync-theme"){const r=t.getAttribute("data-sync-theme")||"dark";r!==this._theme&&(this._theme=r,a=!0)}if(n.attributeName==="data-sync-motif"){const r=t.getAttribute("data-sync-motif")||"brand";r!==this._motif&&(this._motif=r,a=!0)}if(n.attributeName==="data-sync-lang"){const r=t.getAttribute("data-sync-lang")||"en";r!==this._lang&&(this._lang=r,a=!0)}}a&&this._notify()}),this._observer.observe(t,{attributes:!0,attributeFilter:["data-sync-theme","data-sync-motif","data-sync-lang"]}))}_notify(){for(const t of this._listeners)try{t(this)}catch(s){console.warn("[BMAThemeResolver] Listener error:",s)}}get theme(){return this._theme}get motif(){return this._motif}get lang(){return this._lang}get isDark(){return this._theme==="dark"}subscribe(t){return this._listeners.add(t),()=>this._listeners.delete(t)}}const Ae=new sf().init(),pr={mobile:"(orientation: portrait), (max-width: 768px)",wide:"(min-width: 1280px)"};function ot(){return`
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
  `}function ts(){return`
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
  `}class af extends HTMLElement{connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["sport","data-sync-theme"]}attributeChangedCallback(){this.shadowRoot&&this.render()}render(){this.getAttribute("sport");const t=Ae.theme;let s=this.getAttribute("data-sport-group")||"Soccer",a,n;s==="Multi"?(a="Multi",n=`var(--sport-icon__Multi--${t})`):(a=s.replaceAll(" ","_"),n=`var(--sport-icon__${a}--${t})`),this.shadowRoot.innerHTML=`
      <style>
        ${ot()}

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
          background-image: ${n};
        }
      </style>
      <div class="icon"></div>
    `}}customElements.define("bma-sport-icon",af);class nf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._resizeObserver=null,this._compactRaf=null}static get observedAttributes(){return["data-bma-tourn-caption","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-matches","data-bma-tourn-matches_expanded","data-bma-tourn-prize_distro","data-bma-tourn-sports_allowed","data-bma-tourn-status","data-sync-theme","data-bma-tourn-tagline","data-bma-tourn-tournament_dollars","data-bma-tourn-tags"]}connectedCallback(){this.render(),this._unsub=Ae.subscribe(()=>this.render()),this.attachEventListeners(),this.observeCardSize(),this._boundWindowResize=()=>this.updateCompactState(),window.addEventListener("resize",this._boundWindowResize)}disconnectedCallback(){this._unsub&&this._unsub(),this._boundWindowResize&&window.removeEventListener("resize",this._boundWindowResize),this._resizeObserver&&(this._resizeObserver.disconnect(),this._resizeObserver=null),this._compactRaf&&(cancelAnimationFrame(this._compactRaf),this._compactRaf=null)}dispatchCardEvent(t,s={}){const a=new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentId:this.getAttribute("data-bma-tourn-id"),tournamentGuid:this.getAttribute("data-bma-tourn-guid"),tournamentStatus:this.status,...s}});this.dispatchEvent(a)}attachEventListeners(){this.shadowRoot.addEventListener("click",t=>{const s=t.target.closest(".btn-info"),a=t.target.closest(".btn-join"),n=t.target.closest(".btn-play"),r=t.target.closest("bma-sport-icon");if(s){t.stopPropagation(),this.dispatchCardEvent("INFO");return}if(a){t.stopPropagation(),this.dispatchCardEvent("JOIN");return}if(n){t.stopPropagation(),this.dispatchCardEvent("PLAY");return}if(r){t.stopPropagation();const o=r.getAttribute("sport"),l=this.getSportInfo(o);this.dispatchCardEvent("SPORT_ICON",{sportKey:o,sportTitle:l.title,sportDescription:l.description});return}t.target.closest(".card")&&this.dispatchCardEvent("FOCUS")})}attributeChangedCallback(t,s,a){s!==a&&this.render()}observeCardSize(){this._resizeObserver||(this._resizeObserver=new ResizeObserver(()=>{this.updateCompactState()}),this._resizeObserver.observe(this))}updateCompactState(){this._compactRaf&&cancelAnimationFrame(this._compactRaf),this._compactRaf=requestAnimationFrame(()=>{const t=this.shadowRoot?.querySelector(".card");if(!t)return;const s=t.scrollHeight-t.clientHeight,a=this.getAttribute("data-compact")==="true";!a&&s>2?this.setAttribute("data-compact","true"):a&&s<-10&&this.removeAttribute("data-compact")})}getTheme(){return Ae.theme}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tournament_dollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get entities(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(n=>Array.isArray(n))?.length||"0":s?.guids?.length||"0"}catch{return"0"}return"0"}get entitiesGuids(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);return Array.isArray(s)?s.find(n=>Array.isArray(n))||[]:s?.guids||[]}catch{return[]}return[]}get entitiesData(){let t=this.getAttribute("data-bma-tourn-entities");if(t)try{const s=JSON.parse(t);if(Array.isArray(s)){const a=s.find(r=>r&&typeof r=="object"&&!Array.isArray(r));return{current:s.find(r=>Array.isArray(r))?.length||0,max:parseInt(a?.max)||100}}return{current:s?.guids?.length||0,max:s?.max||100}}catch{return{current:0,max:100}}return{current:0,max:100}}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;return s?this.entitiesGuids.includes(s):!1}getUserBadge(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;const a=this.getAttribute("data-bma-tourn-tags");if(!a)return null;try{const n=JSON.parse(a);if(!Array.isArray(n))return null;const r=n.find(o=>!!(typeof o=="object"&&o!==null&&(o.entity_guid===s&&o.badge&&o.badge.startsWith("--badge__ribbon--")||o[s]&&o[s].startsWith("--badge__ribbon--"))));return r&&(r.badge||r[s])||null}catch{return null}}getBadgeClass(){const t=this.getUserBadge();if(!t)return"";const s=t.match(/--badge__ribbon--(\w+)/);return s?s[1]:""}getSportInfo(t){const s=it.find(a=>a.key===t);return s?{title:s.title,description:s.description}:{title:t,description:t}}get matches(){let t=this.getAttribute("data-bma-tourn-matches");return t&&(t=JSON.parse(t)),t?.length||"0"}get matches_expanded(){let t=this.getAttribute("data-bma-tourn-matches_expanded");return t&&(t=JSON.parse(t)),t||null}get marqueeText(){const t=this.matches_expanded;return!t||t.length===0?"   Game lines drop a few days before each matchup   ":"  "+t.map(a=>{const n=a.title||"Match";let r="TBD";if(a.scheduled_at)try{r=new Date(a.scheduled_at).toLocaleString("en-US",{month:"short",day:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}catch{r=a.scheduled_at}return`  ${n} @ ${r}  `}).join(" • ")+"  "}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return this.getAttribute("data-bma-tourn-status")||"upcoming"}get prizeDistro(){const t=this.getAttribute("data-bma-tourn-prize_distro");if(!t)return null;try{return JSON.parse(t)}catch{return t}}get entryFee(){return this.getAttribute("data-bma-tourn-entry_fee")||"Free"}get sportsAllowed(){const t=this.getAttribute("data-bma-tourn-sports_allowed");if(!t)return[];try{const s=JSON.parse(t);return Array.isArray(s)?s.map(a=>typeof a=="object"&&a.sport_key?a.sport_key:a):[s]}catch{return[t]}}get sportsDisplay(){const t=this.sportsAllowed;if(!Array.isArray(t)||t.length===0)return'<bma-sport-icon sport="default" data-sport-group="default"></bma-sport-icon>';const s=Math.min(t.length,3);let a="";for(let n=0;n<s;n++){const r=t[n].key,o=it.find(i=>i.key===r),l=o?o.group:"default";a+=`<bma-sport-icon sport="${r}" data-sport-group="${l}"></bma-sport-icon>`}return t.length>3&&(a+=`<span class="sport-count">+${t.length-3}</span>`),a}render(){const t=this.getTheme(),s=this.getAttribute("data-sync-theme")||t;this.isUserParticipating()?this.setAttribute("data-user-participating","true"):this.removeAttribute("data-user-participating"),this.shadowRoot.innerHTML=`
      <style>
        ${ot()}
        ${ts()}
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
.card-focus__feedback {
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
            <span class="status ${this.status.toUpperCase()}">${this.status.toUpperCase()==="LOCKED"?"IN PROGRESS":this.status.toUpperCase()==="UPCOMING"?"OPEN":this.status}</span>
          </div>
          <section class="header-content">
            <h3 class="txt-caption">${this.caption}</h3>
            <p class="tagline">${this.tagline}</p>
          </section>
        </div>
        <output class="card-focus__feedback">
          <neodigm-marquee data-n55-marquee-text="${this.marqueeText}"
          data-n55-marquee-size="small">
          <pre data-n55-theme="warning"></pre>
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
    `,this.updateCompactState()}}customElements.define("bma-tournament-card",nf);class rf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.setupEventListeners(),setTimeout(()=>{const t=this.shadowRoot.querySelector(".content_stake_text input");t&&t.focus()},100)}static get observedAttributes(){return["data-content-team-points","data-content-odds","data-content-stake-text","data-content-type","data-abbreviated-title","data-scheduled-at","data-stake","data-payout"]}attributeChangedCallback(t,s,a){if(s!==a){if(t==="data-stake")return;if(t==="data-payout"){this.updatePayoutDisplay();return}this.render()}}get teamPoints(){return this.getAttribute("data-content-team-points")||""}get odds(){return this.getAttribute("data-content-odds")||"0"}get stake(){return this.getAttribute("data-content-stake-text")||"0"}get type(){return this.getAttribute("data-content-type")||""}get abbreviatedTitle(){return this.getAttribute("data-abbreviated-title")||""}get scheduledAt(){const t=this.getAttribute("data-scheduled-at")||"";return t?Qs.formatDateLocal(t):""}get payout(){const t=this.getAttribute("data-payout")||"0",s=parseFloat(t);return isNaN(s)?"0.00":s.toFixed(2)}updatePayoutDisplay(){const t=this.shadowRoot?.querySelector(".payout-value");t&&(t.textContent=this.payout)}setupEventListeners(){const t=this.shadowRoot.querySelector(".grid_close button");t&&t.addEventListener("click",()=>{re.publish("COREBETSLIP.CLOSE",JSON.stringify({teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at"),timestamp:Date.now()})),this.dispatchEvent(new CustomEvent("bma-bet-entry-remove",{bubbles:!0,composed:!0,detail:{teamPoints:this.teamPoints,odds:this.odds,stake:this.stake,type:this.type,abbreviatedTitle:this.abbreviatedTitle,scheduledAt:this.getAttribute("data-scheduled-at")}}))});const s=this.shadowRoot.querySelector(".content_stake_text input");s&&s.addEventListener("input",a=>{const n=a.target.value;this.setAttribute("data-stake",n)})}render(){this.shadowRoot.innerHTML=`
      <style>
        ${ot()}
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
    `,this.setupEventListeners()}}customElements.define("bma-bet-entry",rf);class of extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["data-match-id","data-match-guid","data-match-title","data-match-short-title","data-scheduled-at","data-home-team","data-away-team","data-odds-markets","data-is-disabled","data-sync-theme","data-scoreboard","data-sport-key","data-tournament-tags"]}get matchId(){return this.getAttribute("data-match-id")||""}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||""}get shortTitle(){return this.getAttribute("data-match-short-title")||this.matchTitle}get scheduledAt(){return this.getAttribute("data-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-away-team")||"Away"}get oddsMarkets(){const t=this.getAttribute("data-odds-markets");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing odds_markets:",s),null}}get isDisabled(){return this.getAttribute("data-is-disabled")==="true"}get theme(){return Ae.theme}get scoreboard(){const t=this.getAttribute("data-scoreboard");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing scoreboard:",s),null}}get sportKey(){return this.getAttribute("data-sport-key")||""}get sportGroup(){const t=this.sportKey;if(!t)return"";const s=it.find(a=>a.key===t);return s?s.group:""}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportKey]||"SPORT"}get tournamentTags(){const t=this.getAttribute("data-tournament-tags");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-match-card] Error parsing tournament tags:",s),[]}}isMatchInProgressLocked(){if(!this.tournamentTags.some(o=>o.match_inprogress_lock===!0))return!1;const a=this.scoreboard;if(!a||!a.time_remaining)return!1;const n=a.time_remaining.toLowerCase();return n==="in progress"||n.includes("q")||n.includes("half")||n.includes("period")}connectedCallback(){this.render(),this.startCountdownTimer(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this.stopCountdownTimer(),this._unsub&&this._unsub()}startCountdownTimer(){this.stopCountdownTimer(),this.countdownInterval=setInterval(()=>{this.updateCountdown()},6e4)}stopCountdownTimer(){this.countdownInterval&&(clearInterval(this.countdownInterval),this.countdownInterval=null)}updateCountdown(){const t=this.getCountdownText();if(!t){this.stopCountdownTimer(),this.render();return}const s=this.shadowRoot?.querySelector(".countdown");s&&(s.textContent=t)}attributeChangedCallback(t,s,a){s!==a&&this.render()}formatDate(t){if(!t)return"TBD";let s=new Date(t);return!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z")),s.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date,s=new Date(this.scheduledAt);!this.scheduledAt.includes("Z")&&!this.scheduledAt.match(/[+-]\d{2}:\d{2}$/)&&s.setTime(new Date(this.scheduledAt+"Z").getTime());const a=s-t;if(a<=0)return"";const n=Math.floor(a/(1e3*60*60)),r=Math.floor(a%(1e3*60*60)/(1e3*60));return n>24?`${Math.floor(n/24)}d ${n%24}h`:n>0?`${n}h ${r}m`:r>5?`${r} min`:"Starting Soon"}getGameStatus(){const t=this.getCountdownText();if(t)return{type:"upcoming",text:t,color:"#F7C60D"};const s=this.scoreboard;if(s&&s.time_remaining){const a=s.time_remaining.toLowerCase();if(a==="final")return{type:"final",text:"Final",color:"#969696"};if(a==="in progress"||a.includes("q")||a.includes("half")||a.includes("period")){const n=s.home_score!==void 0&&s.home_score!==null||s.away_score!==void 0&&s.away_score!==null,r=s.period!==void 0&&s.period!==null&&s.period!==0;if(n||r)return{type:"live",text:s.time_remaining,color:"#00E676"}}}if(this.scheduledAt){let a=this.scheduledAt;if(!a.includes("Z")&&!a.match(/[+-]\d{2}:\d{2}$/)&&(a=a+"Z"),new Date(a)<new Date)return{type:"live",text:"In Progress",color:"#00E676"}}return{type:"scheduled",text:this.formatDate(this.scheduledAt),color:"#969696"}}handleButtonClick(t,s,a,n,r){t.stopPropagation();const o=t.currentTarget;if(o.classList.contains("btn--disabled")||o.dataset.disabled==="true")return;const l=o.classList.contains("btn--active"),i={matchId:this.matchId,matchGuid:this.matchGuid,matchTitle:this.matchTitle,abbreviatedTitle:this.shortTitle,homeTeam:this.homeTeam,awayTeam:this.awayTeam,scheduledAt:this.scheduledAt,type:s,team:a,price:n,point:r,timestamp:Date.now()};this.dispatchEvent(new CustomEvent("bet-button-click",{bubbles:!0,composed:!0,detail:{betData:i,isActive:l,button:o}}))}renderButton(t,s,a,n,r=!1){if(!a)return'<button class="btn btn--empty btn--pending" disabled><span class="btn-pending-label">Coming<br>Soon</span></button>';const o=a.price,l=a.point;let i="";return t==="spread"?i=`${l>0?`+${l}`:l}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`:t==="money"?i=o:t==="total"&&(i=`${n}${l}<br><span class="btn-odds" data-price-value="${o}">${o}</span>`),`<button class="btn ${r?"btn--disabled":""}"
                    data-bet-type="${t}"
                    data-team="${s}"
                    data-price="${o}"
                    ${l?`data-point="${l}"`:""}
                    ${r?'data-disabled="true"':""}>
            ${i}
        </button>`}render(){this.theme;const t=this.oddsMarkets;t&&(t.h2h||t.totals||t.spreads);const s=this.isMatchInProgressLocked(),a=this.isDisabled||s,n=this.getGameStatus(),r=this.scoreboard,o=r?.home_score||0,l=r?.away_score||0,i=n?.type==="live"||n?.type==="final",c=parseInt(o),d=parseInt(l),u=n?.type==="final",p=n?.type==="live",f=i&&u&&c>d,b=i&&u&&d>c,m=i&&p&&c>d,k=i&&p&&d>c,E=t?.spreads?.outcomes?.find(R=>R.name===this.homeTeam),A=t?.spreads?.outcomes?.find(R=>R.name===this.awayTeam),x=t?.h2h?.outcomes?.find(R=>R.name===this.homeTeam),y=t?.h2h?.outcomes?.find(R=>R.name===this.awayTeam),P=t?.totals?.outcomes?.find(R=>R.name==="Over"),M=t?.totals?.outcomes?.find(R=>R.name==="Under");this.shadowRoot.innerHTML=`
            <style>
                ${ot()}
                ${ts()}

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

            <div class="card ${n?`card--${n.type}`:""}">
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
                    ${n&&n.type!=="scheduled"?`
                        <div class="status-badge status-badge--${n.type}">
                            ${n.type==="live"?'<span class="live-dot"></span>':""}
                            <span class="countdown">${n.text}</span>
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
                            ${i?`<span class="team-score ${m?"score--leading":""} ${k?"score--trailing":""}">${o}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","home",E,null,a)}
                                ${this.renderButton("money","home",x,null,a)}
                                ${this.renderButton("total","under",M,"U",a)}
                            </div>
                        `}
                    </div>

                    <div class="row row--away">
                        <div class="team team--away ${b?"team--winner":""} ${f?"team--loser":""}">
                            <span class="team-name">${this.awayTeam}</span>
                            ${i?`<span class="team-score ${k?"score--leading":""} ${m?"score--trailing":""}">${l}</span>`:""}
                        </div>
                        ${`
                            <div class="buttons">
                                ${this.renderButton("spread","away",A,null,a)}
                                ${this.renderButton("money","away",y,null,a)}
                                ${this.renderButton("total","over",P,"O",a)}
                            </div>
                        `}
                    </div>
                </div>
            </div>
        `,this.shadowRoot.querySelectorAll(".btn:not(.btn--empty)").forEach(R=>{const w=R.dataset.betType,g=R.dataset.team,h=R.dataset.price,T=R.dataset.point||null;R.addEventListener("click",_=>this.handleButtonClick(_,w,g,h,T))})}}customElements.define("bma-bet-match-card",of);class lf extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-match-guid","data-match-title","data-match-scheduled-at","data-match-home-team","data-match-away-team","data-match-home-score","data-match-away-score","data-match-scoreboard","data-match-sport-id","data-sync-theme"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get matchGuid(){return this.getAttribute("data-match-guid")||""}get matchTitle(){return this.getAttribute("data-match-title")||"Match"}get scheduledAt(){return this.getAttribute("data-match-scheduled-at")||""}get homeTeam(){return this.getAttribute("data-match-home-team")||"Home"}get awayTeam(){return this.getAttribute("data-match-away-team")||"Away"}get homeScore(){const t=this.getAttribute("data-match-home-score");return t!=null&&t!==""?t:null}get awayScore(){const t=this.getAttribute("data-match-away-score");return t!=null&&t!==""?t:null}get scoreboardData(){const t=this.getAttribute("data-match-scoreboard");if(!t)return null;try{return typeof t=="string"?JSON.parse(t):t}catch(s){return console.warn("[bma-match-status] Failed to parse scoreboard data:",s),null}}get sportId(){return this.getAttribute("data-match-sport-id")||""}get sportGroup(){const t=it.find(s=>s.key===this.sportId);return t?t.group:""}get theme(){return Ae.theme}get isDark(){return Ae.isDark}getSportAbbr(){return{basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",icehockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",cricket:"CRI",rugby:"RUG",tennis:"TEN",golf:"GOLF"}[this.sportId]||"SPORT"}getCountdownText(){if(!this.scheduledAt)return"";const t=new Date;let s=this.scheduledAt;!s.includes("Z")&&!s.match(/[+-]\d{2}:\d{2}$/)&&(s=s+"Z");const n=new Date(s)-t;if(n<=0)return"";const r=Math.floor(n/(1e3*60*60)),o=Math.floor(n%(1e3*60*60)/(1e3*60));return r>24?`${Math.floor(r/24)}d ${r%24}h`:r>0?`${r}h ${o}m`:o>5?`${o} min`:"Starting Soon"}getMatchStatus(){const t=this.scoreboardData,s=this.homeScore!==null&&this.awayScore!==null;let a=!1;if(this.scheduledAt){let l=this.scheduledAt;!l.includes("Z")&&!l.match(/[+-]\d{2}:\d{2}$/)&&(l=l+"Z");const i=new Date(l),c=new Date(Date.now()-300*1e3);a=i<c}let n="UPCOMING",r=null;if(t?.time_remaining){const l=t.time_remaining;l==="Final"?(n="FINAL",r="Final"):l==="In Progress"?(n="IN_PROGRESS",r="In Progress"):(n="IN_PROGRESS",r=l)}else s&&a?(n="FINAL",r="Final"):(n="UPCOMING",r="Upcoming");const o=n==="UPCOMING"?this.getCountdownText():"";return{status:n,timeRemaining:r,countdown:o}}render(){const{status:t,timeRemaining:s,countdown:a}=this.getMatchStatus(),n=this.homeScore!==null&&this.awayScore!==null,r=this.scheduledAt?Qs.formatDateLocal(this.scheduledAt,{timeZoneName:"short"}):"",o=parseInt(this.homeScore),l=parseInt(this.awayScore),i=n&&t==="FINAL"&&o>l,c=n&&t==="FINAL"&&l>o;this.shadowRoot.innerHTML=`
      <style>
        ${ot()}

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
          ${n?`
            <span class="team-name ${i?"winner":c?"loser":""}">${this.homeTeam}</span>
            <span class="score ${i?"winner":c?"loser":""}">${this.homeScore}</span>
            <span class="bullet">-</span>
            <span class="team-name ${c?"winner":i?"loser":""}">${this.awayTeam}</span>
            <span class="score ${c?"winner":i?"loser":""}">${this.awayScore}</span>
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
        <div class="detail-row">Scheduled: ${r}</div>
        ${this.matchTitle?`<div class="detail-row">Match: ${this.matchTitle}</div>`:""}
      </div>
    `}}customElements.define("bma-match-status",lf);class Vt extends HTMLElement{static currentlyExpanded=null;constructor(){super(),this.attachShadow({mode:"open"}),this.expanded=!1}static get observedAttributes(){return["data-rank","data-username","data-user-guid","data-tournament-dollars","data-starting-dollars","data-total-betslips","data-total-payout","data-combined-betslips","data-user-matches","data-badge-class","data-is-current-user","data-sync-theme"]}get rank(){return this.getAttribute("data-rank")||""}get username(){return this.getAttribute("data-username")||"Unknown"}get userGuid(){return this.getAttribute("data-user-guid")||""}get tournamentDollars(){return this.getAttribute("data-tournament-dollars")||"0"}get startingDollars(){return this.getAttribute("data-starting-dollars")||"0"}get totalBetslips(){return this.getAttribute("data-total-betslips")||"0"}get totalPayout(){return this.getAttribute("data-total-payout")||"0"}get combinedBetslips(){const t=this.getAttribute("data-combined-betslips");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing combined_betslips:",s),[]}}get userMatches(){const t=this.getAttribute("data-user-matches");if(!t)return[];try{return JSON.parse(t)}catch(s){return console.error("[bma-leaderboard-card] Error parsing user_matches:",s),[]}}get badgeClass(){return this.getAttribute("data-badge-class")||""}get isCurrentUser(){return this.getAttribute("data-is-current-user")==="true"}get theme(){return this.getAttribute("data-sync-theme")||"dark"}connectedCallback(){this._unsub=Ae.subscribe(()=>{this.render()}),this.render(),this.attachEventListeners()}disconnectedCallback(){this._unsub&&this._unsub()}attributeChangedCallback(t,s,a){s!==a&&(this.render(),this.attachEventListeners())}toggleExpanded(){Vt.currentlyExpanded&&Vt.currentlyExpanded!==this&&Vt.currentlyExpanded.collapse(),this.expanded=!this.expanded;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");this.expanded?(t.classList.add("open"),s.classList.add("expanded"),Vt.currentlyExpanded=this):(t.classList.remove("open"),s.classList.remove("expanded"),Vt.currentlyExpanded===this&&(Vt.currentlyExpanded=null))}collapse(){this.expanded=!1;const t=this.shadowRoot.querySelector(".leaderboard-card__details"),s=this.shadowRoot.querySelector(".expand-icon");t&&t.classList.remove("open"),s&&s.classList.remove("expanded")}attachEventListeners(){const t=this.shadowRoot.querySelector(".expand-icon");t&&t.addEventListener("click",s=>{s.stopPropagation(),this.toggleExpanded()})}getBetStats(){const t=this.combinedBetslips;let s=0,a=0,n=0,r=0,o=0;return t.forEach(l=>{const i=l.bet||[];if(i.length===0)return;const c=i[0];Object.keys(c).filter(u=>u!=="short_title").forEach(u=>{const p=c[u];!p||typeof p!="object"||(p.reconciled===!0?parseFloat(p.payout||0)>0?s++:a++:(n++,r+=parseFloat(p.stake||p.wager||0),o+=parseFloat(p.payout||0)))})}),{wins:s,losses:a,pending:n,total:s+a+n,pendingStakes:r,pendingMaxPayout:o}}renderBetsTable(){const t=this.combinedBetslips,s=this.userMatches,a=this.isCurrentUser;if(!t||t.length===0)return'<p class="no-bets">No bets available</p>';const n=t.filter(i=>{const c=i.bet||[];if(c.length===0)return!1;if(a)return!0;const d=c[0],u=Object.keys(d).filter(p=>p!=="short_title")[0];return d[u]?.reconciled===!0});if(n.length===0)return'<p class="no-bets">No reconciled bets</p>';const r={};s.forEach(i=>{const c=i.guid||i.id||i.odds_id;c&&(r[c]=i)});const o={};n.forEach(i=>{const c=i.coreMatches__guid||i.match_guid||i.odds_id||"unknown";o[c]||(o[c]={bets:[],matchTitle:"Unknown Match",sportKey:"default"});const d=r[c];if(d){o[c].matchTitle=d.short_title||d.title||"Unknown Match";const u=d.sport_id,p=it.find(f=>f.key===u);o[c].sportKey=p?.group||"default"}o[c].bets.push(i)});let l="";return Object.keys(o).forEach(i=>{const c=o[i],d=c.sportKey||"default",u=c.matchTitle||"Unknown Match",p=c.bets.length;l+=`
                <div class="match-group-header">
                    <bma-sport-icon data-sport-group="${d}"></bma-sport-icon>
                    <span class="match-title">${u}</span>
                    <span class="match-bet-count">(${p} bet${p!==1?"s":""})</span>
                </div>
            `,c.bets.forEach(f=>{const b=f.bet||[];if(b.length===0)return;const m=b[0];Object.keys(m).filter(E=>E!=="short_title").forEach(E=>{const A=m[E];if(!A||typeof A!="object")return;const x=(A.type||"").toUpperCase(),y=parseFloat(A.stake||A.wager||0).toFixed(2),P=A.odds||"-",M=P>0?`+${P}`:`${P}`,R=parseFloat(A.payout||0).toFixed(2),w=A.reconciled===!0;let g="pending",h="Pending";w&&Number(R)>0?(g="won",h="Won"):w&&Number(R)===0?(g="lost",h="Lost"):w&&(g="reconciled",h="Settled"),l+=`<div class="bet-item bet-item--${g}">
                        <div class="bet-item__header">
                            <span class="bet-item__team">${E}</span>
                            <span class="bet-status-badge ${g}">${h}</span>
                        </div>
                        <div class="bet-item__detail">
                            <span>${x}</span>
                            <span>Stake: $${y}</span>
                            <span>Odds: ${M}</span>
                            <span class="${g==="won"?"payout-win":g==="lost"?"payout-loss":""}">Payout: $${R}</span>
                        </div>
                    </div>`})})}),l}render(){const t=this.isCurrentUser?"leaderboard-card--current-user":"",s=this.badgeClass?`<div class="badge-trophy ${this.badgeClass}"></div>`:"",a=parseFloat(this.tournamentDollars||0),n=parseFloat(this.startingDollars||0),r=a-n,o=r>=0?"+":"",l=r>0?"profit-up":r<0?"profit-down":"profit-even",i=this.getBetStats();this.shadowRoot.innerHTML=`
            <style>
                ${ot()}
                ${ts()}

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
                        <div class="kpi-card__value ${l}">${o}TD$ ${Math.abs(r).toFixed(2)}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Bet Record</div>
                        <div class="kpi-card__value">${i.wins}W - ${i.losses}L</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">At Risk</div>
                        <div class="kpi-card__value ${i.pending>0?"kpi-card__value--risk":"kpi-card__value--none"}">${i.pending>0?"TD$ "+i.pendingStakes.toFixed(0):"TD$ 0"}</div>
                    </div>
                    <div class="kpi-card">
                        <div class="kpi-card__label">Max Win</div>
                        <div class="kpi-card__value ${i.pending>0?"kpi-card__value--max-win":"kpi-card__value--none"}">${i.pending>0?"TD$ "+i.pendingMaxPayout.toFixed(0):"TD$ 0"}</div>
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
        `}}customElements.define("bma-leaderboard-card",Vt);class yl{static isPayout(t){if(!t?.Bet||!t?.Match)return console.error("[CoreBetSlip.isPayout] Invalid bet object - missing Bet or Match data"),!1;const{type:s,scope:a}=t.Bet,{home_team_id:n,home_team_score:r,away_team_id:o,away_team_score:l}=t.Match,i=s?.toUpperCase()||"",c=parseFloat(r)||0,d=parseFloat(l)||0;if(c===0&&d===0)return console.warn("[CoreBetSlip.isPayout] Invalid scores - both teams have 0 points"),!1;switch(console.log(`[CoreBetSlip.isPayout] Evaluating ${i} bet:`,{home:`${n} (${c})`,away:`${o} (${d})`,scope:a}),i){case"MONEY":return this._evaluateMoneyline(a.team_id,n,o,c,d);case"SPREAD":return this._evaluateSpread(a.team_id,a.point,n,o,c,d);case"TOTAL":return this._evaluateTotal(a.over,a.under,c,d);case"PROP":return console.warn("[CoreBetSlip.isPayout] PROP bet evaluation not implemented"),!1;case"PARLAY":return console.warn("[CoreBetSlip.isPayout] PARLAY bet evaluation not implemented"),!1;default:return console.warn("[CoreBetSlip.isPayout] Unknown bet type:",i),!1}}static _evaluateMoneyline(t,s,a,n,r){const o=t===s,l=t===a;if(!o&&!l)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const i=n>r,c=r>n;if(n===r)return console.log("[CoreBetSlip.isPayout] MONEY - PUSH (tie game)"),!1;const u=o&&i||l&&c;return console.log(`[CoreBetSlip.isPayout] MONEY - ${u?"WON":"LOST"}`),u}static _evaluateSpread(t,s,a,n,r,o){const l=t===a,i=t===n;if(!l&&!i)return console.warn("[CoreBetSlip.isPayout] Betted team does not match home or away team"),!1;const c=parseFloat(s)||0;let d=r,u=o;l?d=r+c:u=o+c;const p=d>u,f=u>d;if(d===u)return console.log("[CoreBetSlip.isPayout] SPREAD - PUSH (exact spread)"),!1;const m=l&&p||i&&f;return console.log(`[CoreBetSlip.isPayout] SPREAD (${c>0?"+":""}${c}) - ${m?"WON":"LOST"}`),m}static _evaluateTotal(t,s,a,n){const r=a+n,o=t&&t!=="";if(!o&&!(s&&s!==""))return console.warn("[CoreBetSlip.isPayout] No over/under value specified"),!1;const i=parseFloat(o?t:s);if(r===i)return console.log("[CoreBetSlip.isPayout] TOTAL - PUSH (exact line)"),!1;let c=!1;return o?(c=r>i,console.log(`[CoreBetSlip.isPayout] TOTAL OVER ${i} (actual: ${r}) - ${c?"WON":"LOST"}`)):(c=r<i,console.log(`[CoreBetSlip.isPayout] TOTAL UNDER ${i} (actual: ${r}) - ${c?"WON":"LOST"}`)),c}static calcPayout(t){if(!t?.Bet)return console.error("[CoreBetSlip] Invalid bet object - missing Bet data"),0;const{type:s,odds:a,stake:n}=t.Bet,r=s?.toUpperCase()||"",o=parseFloat(a)||0,l=parseFloat(n)||0;if(l<=0)return console.warn("[CoreBetSlip] Invalid stake amount:",l),0;if(o===0)return console.warn("[CoreBetSlip] Invalid odds value:",o),0;let i=0;switch(r){case"SPREAD":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] SPREAD payout calculated:",{odds:o,stake:l,payout:i});break;case"MONEY":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] MONEY payout calculated:",{odds:o,stake:l,payout:i});break;case"TOTAL":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] TOTAL payout calculated:",{odds:o,stake:l,payout:i});break;case"PROP":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] PROP payout calculated:",{odds:o,stake:l,payout:i});break;case"PARLAY":i=this.calcAmericanOddsPayout(o,l),console.log("[CoreBetSlip] PARLAY payout calculated (single odds):",{odds:o,stake:l,payout:i});break;default:console.warn("[CoreBetSlip] Unknown bet type:",r),i=0;break}return parseFloat(i.toFixed(2))}static calcAmericanOddsPayout(t,s){let a=0;return t>0?a=s*(t/100):t<0?a=s/(Math.abs(t)/100):a=0,s+a}static americanToDecimal(t){return t>0?t/100+1:t<0?100/Math.abs(t)+1:1}static calcImpliedProbability(t){return t>0?100/(t+100)*100:t<0?Math.abs(t)/(Math.abs(t)+100)*100:0}}function ko(e){return e!==null&&typeof e=="object"&&"constructor"in e&&e.constructor===Object}function fr(e={},t={}){const s=["__proto__","constructor","prototype"];Object.keys(t).filter(a=>s.indexOf(a)<0).forEach(a=>{typeof e[a]>"u"?e[a]=t[a]:ko(t[a])&&ko(e[a])&&Object.keys(t[a]).length>0&&fr(e[a],t[a])})}const vl={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}};function wt(){const e=typeof document<"u"?document:{};return fr(e,vl),e}const cf={document:vl,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return""}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)}};function He(){const e=typeof window<"u"?window:{};return fr(e,cf),e}function df(e=""){return e.trim().split(" ").filter(t=>!!t.trim())}function uf(e){const t=e;Object.keys(t).forEach(s=>{try{t[s]=null}catch{}try{delete t[s]}catch{}})}function wl(e,t=0){return setTimeout(e,t)}function ka(){return Date.now()}function pf(e){const t=He();let s;return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}function ff(e,t="x"){const s=He();let a,n,r;const o=pf(e);return s.WebKitCSSMatrix?(n=o.transform||o.webkitTransform,n.split(",").length>6&&(n=n.split(", ").map(l=>l.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix(n==="none"?"":n)):(r=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),a=r.toString().split(",")),t==="x"&&(s.WebKitCSSMatrix?n=r.m41:a.length===16?n=parseFloat(a[12]):n=parseFloat(a[4])),t==="y"&&(s.WebKitCSSMatrix?n=r.m42:a.length===16?n=parseFloat(a[13]):n=parseFloat(a[5])),n||0}function la(e){return typeof e=="object"&&e!==null&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)==="Object"}function hf(e){return typeof window<"u"&&typeof window.HTMLElement<"u"?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function qe(...e){const t=Object(e[0]);for(let s=1;s<e.length;s+=1){const a=e[s];if(a!=null&&!hf(a)){const n=Object.keys(Object(a)).filter(r=>r!=="__proto__"&&r!=="constructor"&&r!=="prototype");for(let r=0,o=n.length;r<o;r+=1){const l=n[r],i=Object.getOwnPropertyDescriptor(a,l);i!==void 0&&i.enumerable&&(la(t[l])&&la(a[l])?a[l].__swiper__?t[l]=a[l]:qe(t[l],a[l]):!la(t[l])&&la(a[l])?(t[l]={},a[l].__swiper__?t[l]=a[l]:qe(t[l],a[l])):t[l]=a[l])}}}return t}function _s(e,t,s){e.style.setProperty(t,s)}function xl({swiper:e,targetPosition:t,side:s}){const a=He(),n=-e.translate;let r=null,o;const l=e.params.speed;e.wrapperEl.style.scrollSnapType="none",a.cancelAnimationFrame(e.cssModeFrameID);const i=t>n?"next":"prev",c=(u,p)=>i==="next"&&u>=p||i==="prev"&&u<=p,d=()=>{o=new Date().getTime(),r===null&&(r=o);const u=Math.max(Math.min((o-r)/l,1),0),p=.5-Math.cos(u*Math.PI)/2;let f=n+p*(t-n);if(c(f,t)&&(f=t),e.wrapperEl.scrollTo({[s]:f}),c(f,t)){e.wrapperEl.style.overflow="hidden",e.wrapperEl.style.scrollSnapType="",setTimeout(()=>{e.wrapperEl.style.overflow="",e.wrapperEl.scrollTo({[s]:f})}),a.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=a.requestAnimationFrame(d)};d()}function Dt(e,t=""){const s=He(),a=[...e.children];return s.HTMLSlotElement&&e instanceof HTMLSlotElement&&a.push(...e.assignedElements()),t?a.filter(n=>n.matches(t)):a}function gf(e,t){const s=[t];for(;s.length>0;){const a=s.shift();if(e===a)return!0;s.push(...a.children,...a.shadowRoot?a.shadowRoot.children:[],...a.assignedElements?a.assignedElements():[])}}function mf(e,t){const s=He();let a=t.contains(e);return!a&&s.HTMLSlotElement&&t instanceof HTMLSlotElement&&(a=[...t.assignedElements()].includes(e),a||(a=gf(e,t))),a}function Aa(e){try{console.warn(e);return}catch{}}function $n(e,t=[]){const s=document.createElement(e);return s.classList.add(...Array.isArray(t)?t:df(t)),s}function bf(e,t){const s=[];for(;e.previousElementSibling;){const a=e.previousElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function _f(e,t){const s=[];for(;e.nextElementSibling;){const a=e.nextElementSibling;t?a.matches(t)&&s.push(a):s.push(a),e=a}return s}function Kt(e,t){return He().getComputedStyle(e,null).getPropertyValue(t)}function Ao(e){let t=e,s;if(t){for(s=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(s+=1);return s}}function yf(e,t){const s=[];let a=e.parentElement;for(;a;)s.push(a),a=a.parentElement;return s}function Po(e,t,s){const a=He();return e[t==="width"?"offsetWidth":"offsetHeight"]+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-right":"margin-top"))+parseFloat(a.getComputedStyle(e,null).getPropertyValue(t==="width"?"margin-left":"margin-bottom"))}let fn;function vf(){const e=He(),t=wt();return{smoothScroll:t.documentElement&&t.documentElement.style&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Tl(){return fn||(fn=vf()),fn}let hn;function wf({userAgent:e}={}){const t=Tl(),s=He(),a=s.navigator.platform,n=e||s.navigator.userAgent,r={ios:!1,android:!1},o=s.screen.width,l=s.screen.height,i=n.match(/(Android);?[\s\/]+([\d.]+)?/);let c=n.match(/(iPad)(?!\1).*OS\s([\d_]+)/);const d=n.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),p=a==="Win32";let f=a==="MacIntel";const b=["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"];return!c&&f&&t.touch&&b.indexOf(`${o}x${l}`)>=0&&(c=n.match(/(Version)\/([\d.]+)/),c||(c=[0,1,"13_0_0"]),f=!1),i&&!p&&(r.os="android",r.android=!0),(c||u||d)&&(r.os="ios",r.ios=!0),r}function Sl(e={}){return hn||(hn=wf(e)),hn}let gn;function xf(){const e=He(),t=Sl();let s=!1;function a(){const l=e.navigator.userAgent.toLowerCase();return l.indexOf("safari")>=0&&l.indexOf("chrome")<0&&l.indexOf("android")<0}if(a()){const l=String(e.navigator.userAgent);if(l.includes("Version/")){const[i,c]=l.split("Version/")[1].split(" ")[0].split(".").map(d=>Number(d));s=i<16||i===16&&c<2}}const n=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),r=a(),o=r||n&&t.ios;return{isSafari:s||r,needPerspectiveFix:s,need3dFix:o,isWebView:n}}function El(){return gn||(gn=xf()),gn}function Tf({swiper:e,on:t,emit:s}){const a=He();let n=null,r=null;const o=()=>{!e||e.destroyed||!e.initialized||(s("beforeResize"),s("resize"))},l=()=>{!e||e.destroyed||!e.initialized||(n=new ResizeObserver(d=>{r=a.requestAnimationFrame(()=>{const{width:u,height:p}=e;let f=u,b=p;d.forEach(({contentBoxSize:m,contentRect:k,target:E})=>{E&&E!==e.el||(f=k?k.width:(m[0]||m).inlineSize,b=k?k.height:(m[0]||m).blockSize)}),(f!==u||b!==p)&&o()})}),n.observe(e.el))},i=()=>{r&&a.cancelAnimationFrame(r),n&&n.unobserve&&e.el&&(n.unobserve(e.el),n=null)},c=()=>{!e||e.destroyed||!e.initialized||s("orientationchange")};t("init",()=>{if(e.params.resizeObserver&&typeof a.ResizeObserver<"u"){l();return}a.addEventListener("resize",o),a.addEventListener("orientationchange",c)}),t("destroy",()=>{i(),a.removeEventListener("resize",o),a.removeEventListener("orientationchange",c)})}function Sf({swiper:e,extendParams:t,on:s,emit:a}){const n=[],r=He(),o=(c,d={})=>{const u=r.MutationObserver||r.WebkitMutationObserver,p=new u(f=>{if(e.__preventObserver__)return;if(f.length===1){a("observerUpdate",f[0]);return}const b=function(){a("observerUpdate",f[0])};r.requestAnimationFrame?r.requestAnimationFrame(b):r.setTimeout(b,0)});p.observe(c,{attributes:typeof d.attributes>"u"?!0:d.attributes,childList:e.isElement||(typeof d.childList>"u"?!0:d).childList,characterData:typeof d.characterData>"u"?!0:d.characterData}),n.push(p)},l=()=>{if(e.params.observer){if(e.params.observeParents){const c=yf(e.hostEl);for(let d=0;d<c.length;d+=1)o(c[d])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}},i=()=>{n.forEach(c=>{c.disconnect()}),n.splice(0,n.length)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),s("init",l),s("destroy",i)}var Ef={on(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;const n=s?"unshift":"push";return e.split(" ").forEach(r=>{a.eventsListeners[r]||(a.eventsListeners[r]=[]),a.eventsListeners[r][n](t)}),a},once(e,t,s){const a=this;if(!a.eventsListeners||a.destroyed||typeof t!="function")return a;function n(...r){a.off(e,n),n.__emitterProxy&&delete n.__emitterProxy,t.apply(a,r)}return n.__emitterProxy=t,a.on(e,n,s)},onAny(e,t){const s=this;if(!s.eventsListeners||s.destroyed||typeof e!="function")return s;const a=t?"unshift":"push";return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[a](e),s},offAny(e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;const s=t.eventsAnyListeners.indexOf(e);return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this;return!s.eventsListeners||s.destroyed||!s.eventsListeners||e.split(" ").forEach(a=>{typeof t>"u"?s.eventsListeners[a]=[]:s.eventsListeners[a]&&s.eventsListeners[a].forEach((n,r)=>{(n===t||n.__emitterProxy&&n.__emitterProxy===t)&&s.eventsListeners[a].splice(r,1)})}),s},emit(...e){const t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let s,a,n;return typeof e[0]=="string"||Array.isArray(e[0])?(s=e[0],a=e.slice(1,e.length),n=t):(s=e[0].events,a=e[0].data,n=e[0].context||t),a.unshift(n),(Array.isArray(s)?s:s.split(" ")).forEach(o=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(l=>{l.apply(n,[o,...a])}),t.eventsListeners&&t.eventsListeners[o]&&t.eventsListeners[o].forEach(l=>{l.apply(n,a)})}),t}};function kf(){const e=this;let t,s;const a=e.el;typeof e.params.width<"u"&&e.params.width!==null?t=e.params.width:t=a.clientWidth,typeof e.params.height<"u"&&e.params.height!==null?s=e.params.height:s=a.clientHeight,!(t===0&&e.isHorizontal()||s===0&&e.isVertical())&&(t=t-parseInt(Kt(a,"padding-left")||0,10)-parseInt(Kt(a,"padding-right")||0,10),s=s-parseInt(Kt(a,"padding-top")||0,10)-parseInt(Kt(a,"padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))}function Af(){const e=this;function t(h,T){return parseFloat(h.getPropertyValue(e.getDirectionLabel(T))||0)}const s=e.params,{wrapperEl:a,slidesEl:n,rtlTranslate:r,wrongRTL:o}=e,l=e.virtual&&s.virtual.enabled,i=l?e.virtual.slides.length:e.slides.length,c=Dt(n,`.${e.params.slideClass}, swiper-slide`),d=l?e.virtual.slides.length:c.length;let u=[];const p=[],f=[];let b=s.slidesOffsetBefore;typeof b=="function"&&(b=s.slidesOffsetBefore.call(e));let m=s.slidesOffsetAfter;typeof m=="function"&&(m=s.slidesOffsetAfter.call(e));const k=e.snapGrid.length,E=e.slidesGrid.length,A=e.size-b-m;let x=s.spaceBetween,y=-b,P=0,M=0;if(typeof A>"u")return;typeof x=="string"&&x.indexOf("%")>=0?x=parseFloat(x.replace("%",""))/100*A:typeof x=="string"&&(x=parseFloat(x)),e.virtualSize=-x-b-m,c.forEach(h=>{r?h.style.marginLeft="":h.style.marginRight="",h.style.marginBottom="",h.style.marginTop=""}),s.centeredSlides&&s.cssMode&&(_s(a,"--swiper-centered-offset-before",""),_s(a,"--swiper-centered-offset-after","")),s.cssMode&&(_s(a,"--swiper-slides-offset-before",`${b}px`),_s(a,"--swiper-slides-offset-after",`${m}px`));const R=s.grid&&s.grid.rows>1&&e.grid;R?e.grid.initSlides(c):e.grid&&e.grid.unsetSlides();let w;const g=s.slidesPerView==="auto"&&s.breakpoints&&Object.keys(s.breakpoints).filter(h=>typeof s.breakpoints[h].slidesPerView<"u").length>0;for(let h=0;h<d;h+=1){w=0;const T=c[h];if(!(T&&(R&&e.grid.updateSlide(h,T,c),Kt(T,"display")==="none"))){if(l&&s.slidesPerView==="auto")s.virtual.slidesPerViewAutoSlideSize&&(w=s.virtual.slidesPerViewAutoSlideSize),w&&T&&(s.roundLengths&&(w=Math.floor(w)),T.style[e.getDirectionLabel("width")]=`${w}px`);else if(s.slidesPerView==="auto"){g&&(T.style[e.getDirectionLabel("width")]="");const _=getComputedStyle(T),C=T.style.transform,B=T.style.webkitTransform;if(C&&(T.style.transform="none"),B&&(T.style.webkitTransform="none"),s.roundLengths)w=e.isHorizontal()?Po(T,"width"):Po(T,"height");else{const K=t(_,"width"),V=t(_,"padding-left"),D=t(_,"padding-right"),I=t(_,"margin-left"),U=t(_,"margin-right"),J=_.getPropertyValue("box-sizing");if(J&&J==="border-box")w=K+I+U;else{const{clientWidth:Q,offsetWidth:le}=T;w=K+V+D+I+U+(le-Q)}}C&&(T.style.transform=C),B&&(T.style.webkitTransform=B),s.roundLengths&&(w=Math.floor(w))}else w=(A-(s.slidesPerView-1)*x)/s.slidesPerView,s.roundLengths&&(w=Math.floor(w)),T&&(T.style[e.getDirectionLabel("width")]=`${w}px`);T&&(T.swiperSlideSize=w),f.push(w),s.centeredSlides?(y=y+w/2+P/2+x,P===0&&h!==0&&(y=y-A/2-x),h===0&&(y=y-A/2-x),Math.abs(y)<1/1e3&&(y=0),s.roundLengths&&(y=Math.floor(y)),M%s.slidesPerGroup===0&&u.push(y),p.push(y)):(s.roundLengths&&(y=Math.floor(y)),(M-Math.min(e.params.slidesPerGroupSkip,M))%e.params.slidesPerGroup===0&&u.push(y),p.push(y),y=y+w+x),e.virtualSize+=w+x,P=w,M+=1}}if(e.virtualSize=Math.max(e.virtualSize,A)+m,r&&o&&(s.effect==="slide"||s.effect==="coverflow")&&(a.style.width=`${e.virtualSize+x}px`),s.setWrapperSize&&(a.style[e.getDirectionLabel("width")]=`${e.virtualSize+x}px`),R&&e.grid.updateWrapperSize(w,u),!s.centeredSlides){const h=s.slidesPerView!=="auto"&&s.slidesPerView%1!==0,T=s.snapToSlideEdge&&!s.loop&&(s.slidesPerView==="auto"||h);let _=u.length;if(T){let B;if(s.slidesPerView==="auto"){B=1;let K=0;for(let V=f.length-1;V>=0&&(K+=f[V]+(V<f.length-1?x:0),K<=A);V-=1)B=f.length-V}else B=Math.floor(s.slidesPerView);_=Math.max(d-B,0)}const C=[];for(let B=0;B<u.length;B+=1){let K=u[B];s.roundLengths&&(K=Math.floor(K)),T?B<=_&&C.push(K):u[B]<=e.virtualSize-A&&C.push(K)}u=C,Math.floor(e.virtualSize-A)-Math.floor(u[u.length-1])>1&&(T||u.push(e.virtualSize-A))}if(l&&s.loop){const h=f[0]+x;if(s.slidesPerGroup>1){const T=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/s.slidesPerGroup),_=h*s.slidesPerGroup;for(let C=0;C<T;C+=1)u.push(u[u.length-1]+_)}for(let T=0;T<e.virtual.slidesBefore+e.virtual.slidesAfter;T+=1)s.slidesPerGroup===1&&u.push(u[u.length-1]+h),p.push(p[p.length-1]+h),e.virtualSize+=h}if(u.length===0&&(u=[0]),x!==0){const h=e.isHorizontal()&&r?"marginLeft":e.getDirectionLabel("marginRight");c.filter((T,_)=>!s.cssMode||s.loop?!0:_!==c.length-1).forEach(T=>{T.style[h]=`${x}px`})}if(s.centeredSlides&&s.centeredSlidesBounds){let h=0;f.forEach(_=>{h+=_+(x||0)}),h-=x;const T=h>A?h-A:0;u=u.map(_=>_<=0?-b:_>T?T+m:_)}if(s.centerInsufficientSlides){let h=0;if(f.forEach(T=>{h+=T+(x||0)}),h-=x,h<A){const T=(A-h)/2;u.forEach((_,C)=>{u[C]=_-T}),p.forEach((_,C)=>{p[C]=_+T})}}if(Object.assign(e,{slides:c,snapGrid:u,slidesGrid:p,slidesSizesGrid:f}),s.centeredSlides&&s.cssMode&&!s.centeredSlidesBounds){_s(a,"--swiper-centered-offset-before",`${-u[0]}px`),_s(a,"--swiper-centered-offset-after",`${e.size/2-f[f.length-1]/2}px`);const h=-e.snapGrid[0],T=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(_=>_+h),e.slidesGrid=e.slidesGrid.map(_=>_+T)}if(d!==i&&e.emit("slidesLengthChange"),u.length!==k&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==E&&e.emit("slidesGridLengthChange"),s.watchSlidesProgress&&e.updateSlidesOffset(),e.emit("slidesUpdated"),!l&&!s.cssMode&&(s.effect==="slide"||s.effect==="fade")){const h=`${s.containerModifierClass}backface-hidden`,T=e.el.classList.contains(h);d<=s.maxBackfaceHiddenSlides?T||e.el.classList.add(h):T&&e.el.classList.remove(h)}}function Pf(e){const t=this,s=[],a=t.virtual&&t.params.virtual.enabled;let n=0,r;typeof e=="number"?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);const o=l=>a?t.slides[t.getSlideIndexByData(l)]:t.slides[l];if(t.params.slidesPerView!=="auto"&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(l=>{s.push(l)});else for(r=0;r<Math.ceil(t.params.slidesPerView);r+=1){const l=t.activeIndex+r;if(l>t.slides.length&&!a)break;s.push(o(l))}else s.push(o(t.activeIndex));for(r=0;r<s.length;r+=1)if(typeof s[r]<"u"){const l=s[r].offsetHeight;n=l>n?l:n}(n||n===0)&&(t.wrapperEl.style.height=`${n}px`)}function Of(){const e=this,t=e.slides,s=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let a=0;a<t.length;a+=1)t[a].swiperSlideOffset=(e.isHorizontal()?t[a].offsetLeft:t[a].offsetTop)-s-e.cssOverflowAdjustment()}const Oo=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function Cf(e=this&&this.translate||0){const t=this,s=t.params,{slides:a,rtlTranslate:n,snapGrid:r}=t;if(a.length===0)return;typeof a[0].swiperSlideOffset>"u"&&t.updateSlidesOffset();let o=-e;n&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let l=s.spaceBetween;typeof l=="string"&&l.indexOf("%")>=0?l=parseFloat(l.replace("%",""))/100*t.size:typeof l=="string"&&(l=parseFloat(l));for(let i=0;i<a.length;i+=1){const c=a[i];let d=c.swiperSlideOffset;s.cssMode&&s.centeredSlides&&(d-=a[0].swiperSlideOffset);const u=(o+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),p=(o-r[0]+(s.centeredSlides?t.minTranslate():0)-d)/(c.swiperSlideSize+l),f=-(o-d),b=f+t.slidesSizesGrid[i],m=f>=0&&f<=t.size-t.slidesSizesGrid[i],k=f>=0&&f<t.size-1||b>1&&b<=t.size||f<=0&&b>=t.size;k&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(i)),Oo(c,k,s.slideVisibleClass),Oo(c,m,s.slideFullyVisibleClass),c.progress=n?-u:u,c.originalProgress=n?-p:p}}function Lf(e){const t=this;if(typeof e>"u"){const d=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*d||0}const s=t.params,a=t.maxTranslate()-t.minTranslate();let{progress:n,isBeginning:r,isEnd:o,progressLoop:l}=t;const i=r,c=o;if(a===0)n=0,r=!0,o=!0;else{n=(e-t.minTranslate())/a;const d=Math.abs(e-t.minTranslate())<1,u=Math.abs(e-t.maxTranslate())<1;r=d||n<=0,o=u||n>=1,d&&(n=0),u&&(n=1)}if(s.loop){const d=t.getSlideIndexByData(0),u=t.getSlideIndexByData(t.slides.length-1),p=t.slidesGrid[d],f=t.slidesGrid[u],b=t.slidesGrid[t.slidesGrid.length-1],m=Math.abs(e);m>=p?l=(m-p)/b:l=(m+b-f)/b,l>1&&(l-=1)}Object.assign(t,{progress:n,progressLoop:l,isBeginning:r,isEnd:o}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!i&&t.emit("reachBeginning toEdge"),o&&!c&&t.emit("reachEnd toEdge"),(i&&!r||c&&!o)&&t.emit("fromEdge"),t.emit("progress",n)}const mn=(e,t,s)=>{t&&!e.classList.contains(s)?e.classList.add(s):!t&&e.classList.contains(s)&&e.classList.remove(s)};function Rf(){const e=this,{slides:t,params:s,slidesEl:a,activeIndex:n}=e,r=e.virtual&&s.virtual.enabled,o=e.grid&&s.grid&&s.grid.rows>1,l=u=>Dt(a,`.${s.slideClass}${u}, swiper-slide${u}`)[0];let i,c,d;if(r)if(s.loop){let u=n-e.virtual.slidesBefore;u<0&&(u=e.virtual.slides.length+u),u>=e.virtual.slides.length&&(u-=e.virtual.slides.length),i=l(`[data-swiper-slide-index="${u}"]`)}else i=l(`[data-swiper-slide-index="${n}"]`);else o?(i=t.find(u=>u.column===n),d=t.find(u=>u.column===n+1),c=t.find(u=>u.column===n-1)):i=t[n];i&&(o||(d=_f(i,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!d&&(d=t[0]),c=bf(i,`.${s.slideClass}, swiper-slide`)[0],s.loop&&!c===0&&(c=t[t.length-1]))),t.forEach(u=>{mn(u,u===i,s.slideActiveClass),mn(u,u===d,s.slideNextClass),mn(u,u===c,s.slidePrevClass)}),e.emitSlidesClasses()}const ga=(e,t)=>{if(!e||e.destroyed||!e.params)return;const s=()=>e.isElement?"swiper-slide":`.${e.params.slideClass}`,a=t.closest(s());if(a){let n=a.querySelector(`.${e.params.lazyPreloaderClass}`);!n&&e.isElement&&(a.shadowRoot?n=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{a.shadowRoot&&(n=a.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),n&&!n.lazyPreloaderManaged&&n.remove())})),n&&!n.lazyPreloaderManaged&&n.remove()}},bn=(e,t)=>{if(!e.slides[t])return;const s=e.slides[t].querySelector('[loading="lazy"]');s&&s.removeAttribute("loading")},zn=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext;const s=e.slides.length;if(!s||!t||t<0)return;t=Math.min(t,s);const a=e.params.slidesPerView==="auto"?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),n=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){const o=n,l=[o-t];l.push(...Array.from({length:t}).map((i,c)=>o+a+c)),e.slides.forEach((i,c)=>{l.includes(i.column)&&bn(e,c)});return}const r=n+a-1;if(e.params.rewind||e.params.loop)for(let o=n-t;o<=r+t;o+=1){const l=(o%s+s)%s;(l<n||l>r)&&bn(e,l)}else for(let o=Math.max(n-t,0);o<=Math.min(r+t,s-1);o+=1)o!==n&&(o>r||o<n)&&bn(e,o)};function Mf(e){const{slidesGrid:t,params:s}=e,a=e.rtlTranslate?e.translate:-e.translate;let n;for(let r=0;r<t.length;r+=1)typeof t[r+1]<"u"?a>=t[r]&&a<t[r+1]-(t[r+1]-t[r])/2?n=r:a>=t[r]&&a<t[r+1]&&(n=r+1):a>=t[r]&&(n=r);return s.normalizeSlideIndex&&(n<0||typeof n>"u")&&(n=0),n}function Df(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{snapGrid:a,params:n,activeIndex:r,realIndex:o,snapIndex:l}=t;let i=e,c;const d=f=>{let b=f-t.virtual.slidesBefore;return b<0&&(b=t.virtual.slides.length+b),b>=t.virtual.slides.length&&(b-=t.virtual.slides.length),b};if(typeof i>"u"&&(i=Mf(t)),a.indexOf(s)>=0)c=a.indexOf(s);else{const f=Math.min(n.slidesPerGroupSkip,i);c=f+Math.floor((i-f)/n.slidesPerGroup)}if(c>=a.length&&(c=a.length-1),i===r&&!t.params.loop){c!==l&&(t.snapIndex=c,t.emit("snapIndexChange"));return}if(i===r&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=d(i);return}const u=t.grid&&n.grid&&n.grid.rows>1;let p;if(t.virtual&&n.virtual.enabled)n.loop?p=d(i):p=i;else if(u){const f=t.slides.find(m=>m.column===i);let b=parseInt(f.getAttribute("data-swiper-slide-index"),10);Number.isNaN(b)&&(b=Math.max(t.slides.indexOf(f),0)),p=Math.floor(b/n.grid.rows)}else if(t.slides[i]){const f=t.slides[i].getAttribute("data-swiper-slide-index");f?p=parseInt(f,10):p=i}else p=i;Object.assign(t,{previousSnapIndex:l,snapIndex:c,previousRealIndex:o,realIndex:p,previousIndex:r,activeIndex:i}),t.initialized&&zn(t),t.emit("activeIndexChange"),t.emit("snapIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&(o!==p&&t.emit("realIndexChange"),t.emit("slideChange"))}function If(e,t){const s=this,a=s.params;let n=e.closest(`.${a.slideClass}, swiper-slide`);!n&&s.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(l=>{!n&&l.matches&&l.matches(`.${a.slideClass}, swiper-slide`)&&(n=l)});let r=!1,o;if(n){for(let l=0;l<s.slides.length;l+=1)if(s.slides[l]===n){r=!0,o=l;break}}if(n&&r)s.clickedSlide=n,s.virtual&&s.params.virtual.enabled?s.clickedIndex=parseInt(n.getAttribute("data-swiper-slide-index"),10):s.clickedIndex=o;else{s.clickedSlide=void 0,s.clickedIndex=void 0;return}a.slideToClickedSlide&&s.clickedIndex!==void 0&&s.clickedIndex!==s.activeIndex&&s.slideToClickedSlide()}var Nf={updateSize:kf,updateSlides:Af,updateAutoHeight:Pf,updateSlidesOffset:Of,updateSlidesProgress:Cf,updateProgress:Lf,updateSlidesClasses:Rf,updateActiveIndex:Df,updateClickedSlide:If};function Bf(e=this.isHorizontal()?"x":"y"){const t=this,{params:s,rtlTranslate:a,translate:n,wrapperEl:r}=t;if(s.virtualTranslate)return a?-n:n;if(s.cssMode)return n;let o=ff(r,e);return o+=t.cssOverflowAdjustment(),a&&(o=-o),o||0}function Ff(e,t){const s=this,{rtlTranslate:a,params:n,wrapperEl:r,progress:o}=s;let l=0,i=0;const c=0;s.isHorizontal()?l=a?-e:e:i=e,n.roundLengths&&(l=Math.floor(l),i=Math.floor(i)),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?l:i,n.cssMode?r[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-l:-i:n.virtualTranslate||(s.isHorizontal()?l-=s.cssOverflowAdjustment():i-=s.cssOverflowAdjustment(),r.style.transform=`translate3d(${l}px, ${i}px, ${c}px)`);let d;const u=s.maxTranslate()-s.minTranslate();u===0?d=0:d=(e-s.minTranslate())/u,d!==o&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)}function $f(){return-this.snapGrid[0]}function zf(){return-this.snapGrid[this.snapGrid.length-1]}function Hf(e=0,t=this.params.speed,s=!0,a=!0,n){const r=this,{params:o,wrapperEl:l}=r;if(r.animating&&o.preventInteractionOnTransition)return!1;const i=r.minTranslate(),c=r.maxTranslate();let d;if(a&&e>i?d=i:a&&e<c?d=c:d=e,r.updateProgress(d),o.cssMode){const u=r.isHorizontal();if(t===0)l[u?"scrollLeft":"scrollTop"]=-d;else{if(!r.support.smoothScroll)return xl({swiper:r,targetPosition:-d,side:u?"left":"top"}),!0;l.scrollTo({[u?"left":"top"]:-d,behavior:"smooth"})}return!0}return t===0?(r.setTransition(0),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(d),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function(p){!r||r.destroyed||p.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,r.animating=!1,s&&r.emit("transitionEnd"))}),r.wrapperEl.addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd))),!0}var Uf={getTranslate:Bf,setTranslate:Ff,minTranslate:$f,maxTranslate:zf,translateTo:Hf};function Gf(e,t){const s=this;s.params.cssMode||(s.wrapperEl.style.transitionDuration=`${e}ms`,s.wrapperEl.style.transitionDelay=e===0?"0ms":""),s.emit("setTransition",e,t)}function kl({swiper:e,runCallbacks:t,direction:s,step:a}){const{activeIndex:n,previousIndex:r}=e;let o=s;o||(n>r?o="next":n<r?o="prev":o="reset"),e.emit(`transition${a}`),t&&o==="reset"?e.emit(`slideResetTransition${a}`):t&&n!==r&&(e.emit(`slideChangeTransition${a}`),o==="next"?e.emit(`slideNextTransition${a}`):e.emit(`slidePrevTransition${a}`))}function jf(e=!0,t){const s=this,{params:a}=s;a.cssMode||(a.autoHeight&&s.updateAutoHeight(),kl({swiper:s,runCallbacks:e,direction:t,step:"Start"}))}function Yf(e=!0,t){const s=this,{params:a}=s;s.animating=!1,!a.cssMode&&(s.setTransition(0),kl({swiper:s,runCallbacks:e,direction:t,step:"End"}))}var Vf={setTransition:Gf,transitionStart:jf,transitionEnd:Yf};function Kf(e=0,t,s=!0,a,n){typeof e=="string"&&(e=parseInt(e,10));const r=this;let o=e;o<0&&(o=0);const{params:l,snapGrid:i,slidesGrid:c,previousIndex:d,activeIndex:u,rtlTranslate:p,wrapperEl:f,enabled:b}=r;if(!b&&!a&&!n||r.destroyed||r.animating&&l.preventInteractionOnTransition)return!1;typeof t>"u"&&(t=r.params.speed);const m=Math.min(r.params.slidesPerGroupSkip,o);let k=m+Math.floor((o-m)/r.params.slidesPerGroup);k>=i.length&&(k=i.length-1);const E=-i[k];if(l.normalizeSlideIndex)for(let R=0;R<c.length;R+=1){const w=-Math.floor(E*100),g=Math.floor(c[R]*100),h=Math.floor(c[R+1]*100);typeof c[R+1]<"u"?w>=g&&w<h-(h-g)/2?o=R:w>=g&&w<h&&(o=R+1):w>=g&&(o=R)}if(r.initialized&&o!==u&&(!r.allowSlideNext&&(p?E>r.translate&&E>r.minTranslate():E<r.translate&&E<r.minTranslate())||!r.allowSlidePrev&&E>r.translate&&E>r.maxTranslate()&&(u||0)!==o))return!1;o!==(d||0)&&s&&r.emit("beforeSlideChangeStart"),r.updateProgress(E);let A;o>u?A="next":o<u?A="prev":A="reset";const x=r.virtual&&r.params.virtual.enabled;if(!(x&&n)&&(p&&-E===r.translate||!p&&E===r.translate))return r.updateActiveIndex(o),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),l.effect!=="slide"&&r.setTranslate(E),A!=="reset"&&(r.transitionStart(s,A),r.transitionEnd(s,A)),!1;if(l.cssMode){const R=r.isHorizontal(),w=p?E:-E;if(t===0)x&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),x&&!r._cssModeVirtualInitialSet&&r.params.initialSlide>0?(r._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{f[R?"scrollLeft":"scrollTop"]=w})):f[R?"scrollLeft":"scrollTop"]=w,x&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._immediateVirtual=!1});else{if(!r.support.smoothScroll)return xl({swiper:r,targetPosition:w,side:R?"left":"top"}),!0;f.scrollTo({[R?"left":"top"]:w,behavior:"smooth"})}return!0}const M=El().isSafari;return x&&!n&&M&&r.isElement&&r.virtual.update(!1,!1,o),r.setTransition(t),r.setTranslate(E),r.updateActiveIndex(o),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,a),r.transitionStart(s,A),t===0?r.transitionEnd(s,A):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function(w){!r||r.destroyed||w.target===this&&(r.wrapperEl.removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,A))}),r.wrapperEl.addEventListener("transitionend",r.onSlideToWrapperTransitionEnd)),!0}function qf(e=0,t,s=!0,a){typeof e=="string"&&(e=parseInt(e,10));const n=this;if(n.destroyed)return;typeof t>"u"&&(t=n.params.speed);const r=n.grid&&n.params.grid&&n.params.grid.rows>1;let o=e;if(n.params.loop)if(n.virtual&&n.params.virtual.enabled)o=o+n.virtual.slidesBefore;else{let l;if(r){const m=o*n.params.grid.rows;l=n.slides.find(k=>k.getAttribute("data-swiper-slide-index")*1===m).column}else l=n.getSlideIndexByData(o);const i=r?Math.ceil(n.slides.length/n.params.grid.rows):n.slides.length,{centeredSlides:c,slidesOffsetBefore:d,slidesOffsetAfter:u}=n.params,p=c||!!d||!!u;let f=n.params.slidesPerView;f==="auto"?f=n.slidesPerViewDynamic():(f=Math.ceil(parseFloat(n.params.slidesPerView,10)),p&&f%2===0&&(f=f+1));let b=i-l<f;if(p&&(b=b||l<Math.ceil(f/2)),a&&p&&n.params.slidesPerView!=="auto"&&!r&&(b=!1),b){const m=p?l<n.activeIndex?"prev":"next":l-n.activeIndex-1<n.params.slidesPerView?"next":"prev";n.loopFix({direction:m,slideTo:!0,activeSlideIndex:m==="next"?l+1:l-i+1,slideRealIndex:m==="next"?n.realIndex:void 0})}if(r){const m=o*n.params.grid.rows;o=n.slides.find(k=>k.getAttribute("data-swiper-slide-index")*1===m).column}else o=n.getSlideIndexByData(o)}return requestAnimationFrame(()=>{n.slideTo(o,t,s,a)}),n}function Wf(e,t=!0,s){const a=this,{enabled:n,params:r,animating:o}=a;if(!n||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);let l=r.slidesPerGroup;r.slidesPerView==="auto"&&r.slidesPerGroup===1&&r.slidesPerGroupAuto&&(l=Math.max(a.slidesPerViewDynamic("current",!0),1));const i=a.activeIndex<r.slidesPerGroupSkip?1:l,c=a.virtual&&r.virtual.enabled;if(r.loop){if(o&&!c&&r.loopPreventsSliding)return!1;if(a.loopFix({direction:"next"}),a._clientLeft=a.wrapperEl.clientLeft,a.activeIndex===a.slides.length-1&&r.cssMode)return requestAnimationFrame(()=>{a.slideTo(a.activeIndex+i,e,t,s)}),!0}return r.rewind&&a.isEnd?a.slideTo(0,e,t,s):a.slideTo(a.activeIndex+i,e,t,s)}function Jf(e,t=!0,s){const a=this,{params:n,snapGrid:r,slidesGrid:o,rtlTranslate:l,enabled:i,animating:c}=a;if(!i||a.destroyed)return a;typeof e>"u"&&(e=a.params.speed);const d=a.virtual&&n.virtual.enabled;if(n.loop){if(c&&!d&&n.loopPreventsSliding)return!1;a.loopFix({direction:"prev"}),a._clientLeft=a.wrapperEl.clientLeft}const u=l?a.translate:-a.translate;function p(A){return A<0?-Math.floor(Math.abs(A)):Math.floor(A)}const f=p(u),b=r.map(A=>p(A)),m=n.freeMode&&n.freeMode.enabled;let k=r[b.indexOf(f)-1];if(typeof k>"u"&&(n.cssMode||m)){let A;r.forEach((x,y)=>{f>=x&&(A=y)}),typeof A<"u"&&(k=m?r[A]:r[A>0?A-1:A])}let E=0;if(typeof k<"u"&&(E=o.indexOf(k),E<0&&(E=a.activeIndex-1),n.slidesPerView==="auto"&&n.slidesPerGroup===1&&n.slidesPerGroupAuto&&(E=E-a.slidesPerViewDynamic("previous",!0)+1,E=Math.max(E,0))),n.rewind&&a.isBeginning){const A=a.params.virtual&&a.params.virtual.enabled&&a.virtual?a.virtual.slides.length-1:a.slides.length-1;return a.slideTo(A,e,t,s)}else if(n.loop&&a.activeIndex===0&&n.cssMode)return requestAnimationFrame(()=>{a.slideTo(E,e,t,s)}),!0;return a.slideTo(E,e,t,s)}function Xf(e,t=!0,s){const a=this;if(!a.destroyed)return typeof e>"u"&&(e=a.params.speed),a.slideTo(a.activeIndex,e,t,s)}function Qf(e,t=!0,s,a=.5){const n=this;if(n.destroyed)return;typeof e>"u"&&(e=n.params.speed);let r=n.activeIndex;const o=Math.min(n.params.slidesPerGroupSkip,r),l=o+Math.floor((r-o)/n.params.slidesPerGroup),i=n.rtlTranslate?n.translate:-n.translate;if(i>=n.snapGrid[l]){const c=n.snapGrid[l],d=n.snapGrid[l+1];i-c>(d-c)*a&&(r+=n.params.slidesPerGroup)}else{const c=n.snapGrid[l-1],d=n.snapGrid[l];i-c<=(d-c)*a&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,t,s)}function Zf(){const e=this;if(e.destroyed)return;const{params:t,slidesEl:s}=e,a=t.slidesPerView==="auto"?e.slidesPerViewDynamic():t.slidesPerView;let n=e.getSlideIndexWhenGrid(e.clickedIndex),r;const o=e.isElement?"swiper-slide":`.${t.slideClass}`,l=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;r=parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"),10),t.centeredSlides?e.slideToLoop(r):n>(l?(e.slides.length-a)/2-(e.params.grid.rows-1):e.slides.length-a)?(e.loopFix(),n=e.getSlideIndex(Dt(s,`${o}[data-swiper-slide-index="${r}"]`)[0]),wl(()=>{e.slideTo(n)})):e.slideTo(n)}else e.slideTo(n)}var eh={slideTo:Kf,slideToLoop:qf,slideNext:Wf,slidePrev:Jf,slideReset:Xf,slideToClosest:Qf,slideToClickedSlide:Zf};function th(e,t){const s=this,{params:a,slidesEl:n}=s;if(!a.loop||s.virtual&&s.params.virtual.enabled)return;const r=()=>{Dt(n,`.${a.slideClass}, swiper-slide`).forEach((b,m)=>{b.setAttribute("data-swiper-slide-index",m)})},o=()=>{const f=Dt(n,`.${a.slideBlankClass}`);f.forEach(b=>{b.remove()}),f.length>0&&(s.recalcSlides(),s.updateSlides())},l=s.grid&&a.grid&&a.grid.rows>1;a.loopAddBlankSlides&&(a.slidesPerGroup>1||l)&&o();const i=a.slidesPerGroup*(l?a.grid.rows:1),c=s.slides.length%i!==0,d=l&&s.slides.length%a.grid.rows!==0,u=f=>{for(let b=0;b<f;b+=1){const m=s.isElement?$n("swiper-slide",[a.slideBlankClass]):$n("div",[a.slideClass,a.slideBlankClass]);s.slidesEl.append(m)}};if(c){if(a.loopAddBlankSlides){const f=i-s.slides.length%i;u(f),s.recalcSlides(),s.updateSlides()}else Aa("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else if(d){if(a.loopAddBlankSlides){const f=a.grid.rows-s.slides.length%a.grid.rows;u(f),s.recalcSlides(),s.updateSlides()}else Aa("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");r()}else r();const p=a.centeredSlides||!!a.slidesOffsetBefore||!!a.slidesOffsetAfter;s.loopFix({slideRealIndex:e,direction:p?void 0:"next",initial:t})}function sh({slideRealIndex:e,slideTo:t=!0,direction:s,setTranslate:a,activeSlideIndex:n,initial:r,byController:o,byMousewheel:l}={}){const i=this;if(!i.params.loop)return;i.emit("beforeLoopFix");const{slides:c,allowSlidePrev:d,allowSlideNext:u,slidesEl:p,params:f}=i,{centeredSlides:b,slidesOffsetBefore:m,slidesOffsetAfter:k,initialSlide:E}=f,A=b||!!m||!!k;if(i.allowSlidePrev=!0,i.allowSlideNext=!0,i.virtual&&f.virtual.enabled){t&&(!A&&i.snapIndex===0?i.slideTo(i.virtual.slides.length,0,!1,!0):A&&i.snapIndex<f.slidesPerView?i.slideTo(i.virtual.slides.length+i.snapIndex,0,!1,!0):i.snapIndex===i.snapGrid.length-1&&i.slideTo(i.virtual.slidesBefore,0,!1,!0)),i.allowSlidePrev=d,i.allowSlideNext=u,i.emit("loopFix");return}let x=f.slidesPerView;x==="auto"?x=i.slidesPerViewDynamic():(x=Math.ceil(parseFloat(f.slidesPerView,10)),A&&x%2===0&&(x=x+1));const y=f.slidesPerGroupAuto?x:f.slidesPerGroup;let P=A?Math.max(y,Math.ceil(x/2)):y;P%y!==0&&(P+=y-P%y),P+=f.loopAdditionalSlides,i.loopedSlides=P;const M=i.grid&&f.grid&&f.grid.rows>1;c.length<x+P||i.params.effect==="cards"&&c.length<x+P*2?Aa("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"):M&&f.grid.fill==="row"&&Aa("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");const R=[],w=[],g=M?Math.ceil(c.length/f.grid.rows):c.length,h=r&&g-E<x&&!A;let T=h?E:i.activeIndex;typeof n>"u"?n=i.getSlideIndex(c.find(I=>I.classList.contains(f.slideActiveClass))):T=n;const _=s==="next"||!s,C=s==="prev"||!s;let B=0,K=0;const D=(M?c[n].column:n)+(A&&typeof a>"u"?-x/2+.5:0);if(D<P){B=Math.max(P-D,y);for(let I=0;I<P-D;I+=1){const U=I-Math.floor(I/g)*g;if(M){const J=g-U-1;for(let Q=c.length-1;Q>=0;Q-=1)c[Q].column===J&&R.push(Q)}else R.push(g-U-1)}}else if(D+x>g-P){K=Math.max(D-(g-P*2),y),h&&(K=Math.max(K,x-g+E+1));for(let I=0;I<K;I+=1){const U=I-Math.floor(I/g)*g;M?c.forEach((J,Q)=>{J.column===U&&w.push(Q)}):w.push(U)}}if(i.__preventObserver__=!0,requestAnimationFrame(()=>{i.__preventObserver__=!1}),i.params.effect==="cards"&&c.length<x+P*2&&(w.includes(n)&&w.splice(w.indexOf(n),1),R.includes(n)&&R.splice(R.indexOf(n),1)),C&&R.forEach(I=>{c[I].swiperLoopMoveDOM=!0,p.prepend(c[I]),c[I].swiperLoopMoveDOM=!1}),_&&w.forEach(I=>{c[I].swiperLoopMoveDOM=!0,p.append(c[I]),c[I].swiperLoopMoveDOM=!1}),i.recalcSlides(),f.slidesPerView==="auto"?i.updateSlides():M&&(R.length>0&&C||w.length>0&&_)&&i.slides.forEach((I,U)=>{i.grid.updateSlide(U,I,i.slides)}),f.watchSlidesProgress&&i.updateSlidesOffset(),t){if(R.length>0&&C){if(typeof e>"u"){const I=i.slidesGrid[T],J=i.slidesGrid[T+B]-I;l?i.setTranslate(i.translate-J):(i.slideTo(T+Math.ceil(B),0,!1,!0),a&&(i.touchEventsData.startTranslate=i.touchEventsData.startTranslate-J,i.touchEventsData.currentTranslate=i.touchEventsData.currentTranslate-J))}else if(a){const I=M?R.length/f.grid.rows:R.length;i.slideTo(i.activeIndex+I,0,!1,!0),i.touchEventsData.currentTranslate=i.translate}}else if(w.length>0&&_)if(typeof e>"u"){const I=i.slidesGrid[T],J=i.slidesGrid[T-K]-I;l?i.setTranslate(i.translate-J):(i.slideTo(T-K,0,!1,!0),a&&(i.touchEventsData.startTranslate=i.touchEventsData.startTranslate-J,i.touchEventsData.currentTranslate=i.touchEventsData.currentTranslate-J))}else{const I=M?w.length/f.grid.rows:w.length;i.slideTo(i.activeIndex-I,0,!1,!0)}}if(i.allowSlidePrev=d,i.allowSlideNext=u,i.controller&&i.controller.control&&!o){const I={slideRealIndex:e,direction:s,setTranslate:a,activeSlideIndex:n,byController:!0};Array.isArray(i.controller.control)?i.controller.control.forEach(U=>{!U.destroyed&&U.params.loop&&U.loopFix({...I,slideTo:U.params.slidesPerView===f.slidesPerView?t:!1})}):i.controller.control instanceof i.constructor&&i.controller.control.params.loop&&i.controller.control.loopFix({...I,slideTo:i.controller.control.params.slidesPerView===f.slidesPerView?t:!1})}i.emit("loopFix")}function ah(){const e=this,{params:t,slidesEl:s}=e;if(!t.loop||!s||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();const a=[];e.slides.forEach(n=>{const r=typeof n.swiperSlideIndex>"u"?n.getAttribute("data-swiper-slide-index")*1:n.swiperSlideIndex;a[r]=n}),e.slides.forEach(n=>{n.removeAttribute("data-swiper-slide-index")}),a.forEach(n=>{s.append(n)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var nh={loopCreate:th,loopFix:sh,loopDestroy:ah};function rh(e){const t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;const s=t.params.touchEventsTarget==="container"?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),s.style.cursor="move",s.style.cursor=e?"grabbing":"grab",t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function oh(){const e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget==="container"?"el":"wrapperEl"].style.cursor="",e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var ih={setGrabCursor:rh,unsetGrabCursor:oh};function lh(e,t=this){function s(a){if(!a||a===wt()||a===He())return null;a.assignedSlot&&(a=a.assignedSlot);const n=a.closest(e);return!n&&!a.getRootNode?null:n||s(a.getRootNode().host)}return s(t)}function Co(e,t,s){const a=He(),{params:n}=e,r=n.edgeSwipeDetection,o=n.edgeSwipeThreshold;return r&&(s<=o||s>=a.innerWidth-o)?r==="prevent"?(t.preventDefault(),!0):!1:!0}function ch(e){const t=this,s=wt();let a=e;a.originalEvent&&(a=a.originalEvent);const n=t.touchEventsData;if(a.type==="pointerdown"){if(n.pointerId!==null&&n.pointerId!==a.pointerId)return;n.pointerId=a.pointerId}else a.type==="touchstart"&&a.targetTouches.length===1&&(n.touchId=a.targetTouches[0].identifier);if(a.type==="touchstart"){Co(t,a,a.targetTouches[0].pageX);return}const{params:r,touches:o,enabled:l}=t;if(!l||!r.simulateTouch&&a.pointerType==="mouse"||t.animating&&r.preventInteractionOnTransition)return;!t.animating&&r.cssMode&&r.loop&&t.loopFix();let i=a.target;if(r.touchEventsTarget==="wrapper"&&!mf(i,t.wrapperEl)||"which"in a&&a.which===3||"button"in a&&a.button>0||n.isTouched&&n.isMoved)return;const c=!!r.noSwipingClass&&r.noSwipingClass!=="",d=a.composedPath?a.composedPath():a.path;c&&a.target&&a.target.shadowRoot&&d&&(i=d[0]);const u=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,p=!!(a.target&&a.target.shadowRoot);if(r.noSwiping&&(p?lh(u,i):i.closest(u))){t.allowClick=!0;return}if(r.swipeHandler&&!i.closest(r.swipeHandler))return;o.currentX=a.pageX,o.currentY=a.pageY;const f=o.currentX,b=o.currentY;if(!Co(t,a,f))return;Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=f,o.startY=b,n.touchStartTime=ka(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1);let m=!0;i.matches(n.focusableElements)&&(m=!1,i.nodeName==="SELECT"&&(n.isTouched=!1)),s.activeElement&&s.activeElement.matches(n.focusableElements)&&s.activeElement!==i&&(a.pointerType==="mouse"||a.pointerType!=="mouse"&&!i.matches(n.focusableElements))&&s.activeElement.blur();const k=m&&t.allowTouchMove&&r.touchStartPreventDefault;(r.touchStartForcePreventDefault||k)&&!i.isContentEditable&&a.preventDefault(),r.freeMode&&r.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",a)}function dh(e){const t=wt(),s=this,a=s.touchEventsData,{params:n,touches:r,rtlTranslate:o,enabled:l}=s;if(!l||!n.simulateTouch&&e.pointerType==="mouse")return;let i=e;if(i.originalEvent&&(i=i.originalEvent),i.type==="pointermove"&&(a.touchId!==null||i.pointerId!==a.pointerId))return;let c;if(i.type==="touchmove"){if(c=[...i.changedTouches].find(P=>P.identifier===a.touchId),!c||c.identifier!==a.touchId)return}else c=i;if(!a.isTouched){a.startMoving&&a.isScrolling&&s.emit("touchMoveOpposite",i);return}const d=c.pageX,u=c.pageY;if(i.preventedByNestedSwiper){r.startX=d,r.startY=u;return}if(!s.allowTouchMove){i.target.matches(a.focusableElements)||(s.allowClick=!1),a.isTouched&&(Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u}),a.touchStartTime=ka());return}if(n.touchReleaseOnEdges&&!n.loop)if(s.isVertical()){if(u<r.startY&&s.translate<=s.maxTranslate()||u>r.startY&&s.translate>=s.minTranslate()){a.isTouched=!1,a.isMoved=!1;return}}else{if(o&&(d>r.startX&&-s.translate<=s.maxTranslate()||d<r.startX&&-s.translate>=s.minTranslate()))return;if(!o&&(d<r.startX&&s.translate<=s.maxTranslate()||d>r.startX&&s.translate>=s.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(a.focusableElements)&&t.activeElement!==i.target&&i.pointerType!=="mouse"&&t.activeElement.blur(),t.activeElement&&i.target===t.activeElement&&i.target.matches(a.focusableElements)){a.isMoved=!0,s.allowClick=!1;return}a.allowTouchCallbacks&&s.emit("touchMove",i),r.previousX=r.currentX,r.previousY=r.currentY,r.currentX=d,r.currentY=u;const p=r.currentX-r.startX,f=r.currentY-r.startY;if(s.params.threshold&&Math.sqrt(p**2+f**2)<s.params.threshold)return;if(typeof a.isScrolling>"u"){let P;s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?a.isScrolling=!1:p*p+f*f>=25&&(P=Math.atan2(Math.abs(f),Math.abs(p))*180/Math.PI,a.isScrolling=s.isHorizontal()?P>n.touchAngle:90-P>n.touchAngle)}if(a.isScrolling&&s.emit("touchMoveOpposite",i),typeof a.startMoving>"u"&&(r.currentX!==r.startX||r.currentY!==r.startY)&&(a.startMoving=!0),a.isScrolling||i.type==="touchmove"&&a.preventTouchMoveFromPointerMove){a.isTouched=!1;return}if(!a.startMoving)return;s.allowClick=!1,!n.cssMode&&i.cancelable&&i.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&i.stopPropagation();let b=s.isHorizontal()?p:f,m=s.isHorizontal()?r.currentX-r.previousX:r.currentY-r.previousY;n.oneWayMovement&&(b=Math.abs(b)*(o?1:-1),m=Math.abs(m)*(o?1:-1)),r.diff=b,b*=n.touchRatio,o&&(b=-b,m=-m);const k=s.touchesDirection;s.swipeDirection=b>0?"prev":"next",s.touchesDirection=m>0?"prev":"next";const E=s.params.loop&&!n.cssMode,A=s.touchesDirection==="next"&&s.allowSlideNext||s.touchesDirection==="prev"&&s.allowSlidePrev;if(!a.isMoved){if(E&&A&&s.loopFix({direction:s.swipeDirection}),a.startTranslate=s.getTranslate(),s.setTransition(0),s.animating){const P=new window.CustomEvent("transitionend",{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});s.wrapperEl.dispatchEvent(P)}a.allowMomentumBounce=!1,n.grabCursor&&(s.allowSlideNext===!0||s.allowSlidePrev===!0)&&s.setGrabCursor(!0),s.emit("sliderFirstMove",i)}if(new Date().getTime(),n._loopSwapReset!==!1&&a.isMoved&&a.allowThresholdMove&&k!==s.touchesDirection&&E&&A&&Math.abs(b)>=1){Object.assign(r,{startX:d,startY:u,currentX:d,currentY:u,startTranslate:a.currentTranslate}),a.loopSwapReset=!0,a.startTranslate=a.currentTranslate;return}s.emit("sliderMove",i),a.isMoved=!0,a.currentTranslate=b+a.startTranslate;let x=!0,y=n.resistanceRatio;if(n.touchReleaseOnEdges&&(y=0),b>0?(E&&A&&a.allowThresholdMove&&a.currentTranslate>(n.centeredSlides?s.minTranslate()-s.slidesSizesGrid[s.activeIndex+1]-(n.slidesPerView!=="auto"&&s.slides.length-n.slidesPerView>=2?s.slidesSizesGrid[s.activeIndex+1]+s.params.spaceBetween:0)-s.params.spaceBetween:s.minTranslate())&&s.loopFix({direction:"prev",setTranslate:!0,activeSlideIndex:0}),a.currentTranslate>s.minTranslate()&&(x=!1,n.resistance&&(a.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+a.startTranslate+b)**y))):b<0&&(E&&A&&a.allowThresholdMove&&a.currentTranslate<(n.centeredSlides?s.maxTranslate()+s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween+(n.slidesPerView!=="auto"&&s.slides.length-n.slidesPerView>=2?s.slidesSizesGrid[s.slidesSizesGrid.length-1]+s.params.spaceBetween:0):s.maxTranslate())&&s.loopFix({direction:"next",setTranslate:!0,activeSlideIndex:s.slides.length-(n.slidesPerView==="auto"?s.slidesPerViewDynamic():Math.ceil(parseFloat(n.slidesPerView,10)))}),a.currentTranslate<s.maxTranslate()&&(x=!1,n.resistance&&(a.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-a.startTranslate-b)**y))),x&&(i.preventedByNestedSwiper=!0),!s.allowSlideNext&&s.swipeDirection==="next"&&a.currentTranslate<a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&s.swipeDirection==="prev"&&a.currentTranslate>a.startTranslate&&(a.currentTranslate=a.startTranslate),!s.allowSlidePrev&&!s.allowSlideNext&&(a.currentTranslate=a.startTranslate),n.threshold>0)if(Math.abs(b)>n.threshold||a.allowThresholdMove){if(!a.allowThresholdMove){a.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,a.currentTranslate=a.startTranslate,r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY;return}}else{a.currentTranslate=a.startTranslate;return}!n.followFinger||n.cssMode||((n.freeMode&&n.freeMode.enabled&&s.freeMode||n.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),n.freeMode&&n.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(a.currentTranslate),s.setTranslate(a.currentTranslate))}function uh(e){const t=this,s=t.touchEventsData;let a=e;a.originalEvent&&(a=a.originalEvent);let n;if(a.type==="touchend"||a.type==="touchcancel"){if(n=[...a.changedTouches].find(P=>P.identifier===s.touchId),!n||n.identifier!==s.touchId)return}else{if(s.touchId!==null||a.pointerId!==s.pointerId)return;n=a}if(["pointercancel","pointerout","pointerleave","contextmenu"].includes(a.type)&&!(["pointercancel","contextmenu"].includes(a.type)&&(t.browser.isSafari||t.browser.isWebView)))return;s.pointerId=null,s.touchId=null;const{params:o,touches:l,rtlTranslate:i,slidesGrid:c,enabled:d}=t;if(!d||!o.simulateTouch&&a.pointerType==="mouse")return;if(s.allowTouchCallbacks&&t.emit("touchEnd",a),s.allowTouchCallbacks=!1,!s.isTouched){s.isMoved&&o.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,s.startMoving=!1;return}o.grabCursor&&s.isMoved&&s.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);const u=ka(),p=u-s.touchStartTime;if(t.allowClick){const P=a.path||a.composedPath&&a.composedPath();t.updateClickedSlide(P&&P[0]||a.target,P),t.emit("tap click",a),p<300&&u-s.lastClickTime<300&&t.emit("doubleTap doubleClick",a)}if(s.lastClickTime=ka(),wl(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||l.diff===0&&!s.loopSwapReset||s.currentTranslate===s.startTranslate&&!s.loopSwapReset){s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;return}s.isTouched=!1,s.isMoved=!1,s.startMoving=!1;let f;if(o.followFinger?f=i?t.translate:-t.translate:f=-s.currentTranslate,o.cssMode)return;if(o.freeMode&&o.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}const b=f>=-t.maxTranslate()&&!t.params.loop;let m=0,k=t.slidesSizesGrid[0];for(let P=0;P<c.length;P+=P<o.slidesPerGroupSkip?1:o.slidesPerGroup){const M=P<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;typeof c[P+M]<"u"?(b||f>=c[P]&&f<c[P+M])&&(m=P,k=c[P+M]-c[P]):(b||f>=c[P])&&(m=P,k=c[c.length-1]-c[c.length-2])}let E=null,A=null;o.rewind&&(t.isBeginning?A=o.virtual&&o.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(E=0));const x=(f-c[m])/k,y=m<o.slidesPerGroupSkip-1?1:o.slidesPerGroup;if(p>o.longSwipesMs){if(!o.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection==="next"&&(x>=o.longSwipesRatio?t.slideTo(o.rewind&&t.isEnd?E:m+y):t.slideTo(m)),t.swipeDirection==="prev"&&(x>1-o.longSwipesRatio?t.slideTo(m+y):A!==null&&x<0&&Math.abs(x)>o.longSwipesRatio?t.slideTo(A):t.slideTo(m))}else{if(!o.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(a.target===t.navigation.nextEl||a.target===t.navigation.prevEl)?a.target===t.navigation.nextEl?t.slideTo(m+y):t.slideTo(m):(t.swipeDirection==="next"&&t.slideTo(E!==null?E:m+y),t.swipeDirection==="prev"&&t.slideTo(A!==null?A:m))}}function Lo(){const e=this,{params:t,el:s}=e;if(s&&s.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();const{allowSlideNext:a,allowSlidePrev:n,snapGrid:r}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();const l=o&&t.loop;(t.slidesPerView==="auto"||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!l?e.slideTo(e.slides.length-1,0,!1,!0):e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=n,e.allowSlideNext=a,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}function ph(e){const t=this;t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function fh(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:a}=e;if(!a)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let n;const r=e.maxTranslate()-e.minTranslate();r===0?n=0:n=(e.translate-e.minTranslate())/r,n!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}function hh(e){const t=this;ga(t,e.target),!(t.params.cssMode||t.params.slidesPerView!=="auto"&&!t.params.autoHeight)&&t.update()}function gh(){const e=this;e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction="auto"))}const Al=(e,t)=>{const s=wt(),{params:a,el:n,wrapperEl:r,device:o}=e,l=!!a.nested,i=t==="on"?"addEventListener":"removeEventListener",c=t;!n||typeof n=="string"||(s[i]("touchstart",e.onDocumentTouchStart,{passive:!1,capture:l}),n[i]("touchstart",e.onTouchStart,{passive:!1}),n[i]("pointerdown",e.onTouchStart,{passive:!1}),s[i]("touchmove",e.onTouchMove,{passive:!1,capture:l}),s[i]("pointermove",e.onTouchMove,{passive:!1,capture:l}),s[i]("touchend",e.onTouchEnd,{passive:!0}),s[i]("pointerup",e.onTouchEnd,{passive:!0}),s[i]("pointercancel",e.onTouchEnd,{passive:!0}),s[i]("touchcancel",e.onTouchEnd,{passive:!0}),s[i]("pointerout",e.onTouchEnd,{passive:!0}),s[i]("pointerleave",e.onTouchEnd,{passive:!0}),s[i]("contextmenu",e.onTouchEnd,{passive:!0}),(a.preventClicks||a.preventClicksPropagation)&&n[i]("click",e.onClick,!0),a.cssMode&&r[i]("scroll",e.onScroll),a.updateOnWindowResize?e[c](o.ios||o.android?"resize orientationchange observerUpdate":"resize observerUpdate",Lo,!0):e[c]("observerUpdate",Lo,!0),n[i]("load",e.onLoad,{capture:!0}))};function mh(){const e=this,{params:t}=e;e.onTouchStart=ch.bind(e),e.onTouchMove=dh.bind(e),e.onTouchEnd=uh.bind(e),e.onDocumentTouchStart=gh.bind(e),t.cssMode&&(e.onScroll=fh.bind(e)),e.onClick=ph.bind(e),e.onLoad=hh.bind(e),Al(e,"on")}function bh(){Al(this,"off")}var _h={attachEvents:mh,detachEvents:bh};const Ro=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function yh(){const e=this,{realIndex:t,initialized:s,params:a,el:n}=e,r=a.breakpoints;if(!r||r&&Object.keys(r).length===0)return;const o=wt(),l=a.breakpointsBase==="window"||!a.breakpointsBase?a.breakpointsBase:"container",i=["window","container"].includes(a.breakpointsBase)||!a.breakpointsBase?e.el:o.querySelector(a.breakpointsBase),c=e.getBreakpoint(r,l,i);if(!c||e.currentBreakpoint===c)return;const u=(c in r?r[c]:void 0)||e.originalParams,p=Ro(e,a),f=Ro(e,u),b=e.params.grabCursor,m=u.grabCursor,k=a.enabled;p&&!f?(n.classList.remove(`${a.containerModifierClass}grid`,`${a.containerModifierClass}grid-column`),e.emitContainerClasses()):!p&&f&&(n.classList.add(`${a.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill==="column"||!u.grid.fill&&a.grid.fill==="column")&&n.classList.add(`${a.containerModifierClass}grid-column`),e.emitContainerClasses()),b&&!m?e.unsetGrabCursor():!b&&m&&e.setGrabCursor(),["navigation","pagination","scrollbar"].forEach(M=>{if(typeof u[M]>"u")return;const R=a[M]&&a[M].enabled,w=u[M]&&u[M].enabled;R&&!w&&e[M].disable(),!R&&w&&e[M].enable()});const E=u.direction&&u.direction!==a.direction,A=a.loop&&(u.slidesPerView!==a.slidesPerView||E),x=a.loop;E&&s&&e.changeDirection(),qe(e.params,u);const y=e.params.enabled,P=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),k&&!y?e.disable():!k&&y&&e.enable(),e.currentBreakpoint=c,e.emit("_beforeBreakpoint",u),s&&(A?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!x&&P?(e.loopCreate(t),e.updateSlides()):x&&!P&&e.loopDestroy()),e.emit("breakpoint",u)}function vh(e,t="window",s){if(!e||t==="container"&&!s)return;let a=!1;const n=He(),r=t==="window"?n.innerHeight:s.clientHeight,o=Object.keys(e).map(l=>{if(typeof l=="string"&&l.indexOf("@")===0){const i=parseFloat(l.substr(1));return{value:r*i,point:l}}return{value:l,point:l}});o.sort((l,i)=>parseInt(l.value,10)-parseInt(i.value,10));for(let l=0;l<o.length;l+=1){const{point:i,value:c}=o[l];t==="window"?n.matchMedia(`(min-width: ${c}px)`).matches&&(a=i):c<=s.clientWidth&&(a=i)}return a||"max"}var wh={setBreakpoint:yh,getBreakpoint:vh};function xh(e,t){const s=[];return e.forEach(a=>{typeof a=="object"?Object.keys(a).forEach(n=>{a[n]&&s.push(t+n)}):typeof a=="string"&&s.push(t+a)}),s}function Th(){const e=this,{classNames:t,params:s,rtl:a,el:n,device:r}=e,o=xh(["initialized",s.direction,{"free-mode":e.params.freeMode&&s.freeMode.enabled},{autoheight:s.autoHeight},{rtl:a},{grid:s.grid&&s.grid.rows>1},{"grid-column":s.grid&&s.grid.rows>1&&s.grid.fill==="column"},{android:r.android},{ios:r.ios},{"css-mode":s.cssMode},{centered:s.cssMode&&s.centeredSlides},{"watch-progress":s.watchSlidesProgress}],s.containerModifierClass);t.push(...o),n.classList.add(...t),e.emitContainerClasses()}function Sh(){const e=this,{el:t,classNames:s}=e;!t||typeof t=="string"||(t.classList.remove(...s),e.emitContainerClasses())}var Eh={addClasses:Th,removeClasses:Sh};function kh(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:a}=s;if(a){const n=e.slides.length-1,r=e.slidesGrid[n]+e.slidesSizesGrid[n]+a*2;e.isLocked=e.size>r}else e.isLocked=e.snapGrid.length===1;s.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),s.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}var Ah={checkOverflow:kh},Mo={init:!0,direction:"horizontal",oneWayMovement:!1,swiperElementNodeName:"SWIPER-CONTAINER",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:"swiper",enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-blank",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",slideFullyVisibleClass:"swiper-slide-fully-visible",slideNextClass:"swiper-slide-next",slidePrevClass:"swiper-slide-prev",wrapperClass:"swiper-wrapper",lazyPreloaderClass:"swiper-lazy-preloader",lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Ph(e,t){return function(a={}){const n=Object.keys(a)[0],r=a[n];if(typeof r!="object"||r===null){qe(t,a);return}if(e[n]===!0&&(e[n]={enabled:!0}),n==="navigation"&&e[n]&&e[n].enabled&&!e[n].prevEl&&!e[n].nextEl&&(e[n].auto=!0),["pagination","scrollbar"].indexOf(n)>=0&&e[n]&&e[n].enabled&&!e[n].el&&(e[n].auto=!0),!(n in e&&"enabled"in r)){qe(t,a);return}typeof e[n]=="object"&&!("enabled"in e[n])&&(e[n].enabled=!0),e[n]||(e[n]={enabled:!1}),qe(t,a)}}const _n={eventsEmitter:Ef,update:Nf,translate:Uf,transition:Vf,slide:eh,loop:nh,grabCursor:ih,events:_h,breakpoints:wh,checkOverflow:Ah,classes:Eh},yn={};class st{constructor(...t){let s,a;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)==="Object"?a=t[0]:[s,a]=t,a||(a={}),a=qe({},a),s&&!a.el&&(a.el=s);const n=wt();if(a.el&&typeof a.el=="string"&&n.querySelectorAll(a.el).length>1){const i=[];return n.querySelectorAll(a.el).forEach(c=>{const d=qe({},a,{el:c});i.push(new st(d))}),i}const r=this;r.__swiper__=!0,r.support=Tl(),r.device=Sl({userAgent:a.userAgent}),r.browser=El(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],a.modules&&Array.isArray(a.modules)&&a.modules.forEach(i=>{typeof i=="function"&&r.modules.indexOf(i)<0&&r.modules.push(i)});const o={};r.modules.forEach(i=>{i({params:a,swiper:r,extendParams:Ph(a,o),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})});const l=qe({},Mo,o);return r.params=qe({},l,yn,a),r.originalParams=qe({},r.params),r.passedParams=qe({},a),r.params&&r.params.on&&Object.keys(r.params.on).forEach(i=>{r.on(i,r.params.on[i])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),Object.assign(r,{enabled:r.params.enabled,el:s,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return r.params.direction==="horizontal"},isVertical(){return r.params.direction==="vertical"},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}getDirectionLabel(t){return this.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}getSlideIndex(t){const{slidesEl:s,params:a}=this,n=Dt(s,`.${a.slideClass}, swiper-slide`),r=Ao(n[0]);return Ao(t)-r}getSlideIndexByData(t){return this.getSlideIndex(this.slides.find(s=>s.getAttribute("data-swiper-slide-index")*1===t))}getSlideIndexWhenGrid(t){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill==="column"?t=Math.floor(t/this.params.grid.rows):this.params.grid.fill==="row"&&(t=t%Math.ceil(this.slides.length/this.params.grid.rows))),t}recalcSlides(){const t=this,{slidesEl:s,params:a}=t;t.slides=Dt(s,`.${a.slideClass}, swiper-slide`)}enable(){const t=this;t.enabled||(t.enabled=!0,t.params.grabCursor&&t.setGrabCursor(),t.emit("enable"))}disable(){const t=this;t.enabled&&(t.enabled=!1,t.params.grabCursor&&t.unsetGrabCursor(),t.emit("disable"))}setProgress(t,s){const a=this;t=Math.min(Math.max(t,0),1);const n=a.minTranslate(),o=(a.maxTranslate()-n)*t+n;a.translateTo(o,typeof s>"u"?0:s),a.updateActiveIndex(),a.updateSlidesClasses()}emitContainerClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=t.el.className.split(" ").filter(a=>a.indexOf("swiper")===0||a.indexOf(t.params.containerModifierClass)===0);t.emit("_containerClasses",s.join(" "))}getSlideClasses(t){const s=this;return s.destroyed?"":t.className.split(" ").filter(a=>a.indexOf("swiper-slide")===0||a.indexOf(s.params.slideClass)===0).join(" ")}emitSlidesClasses(){const t=this;if(!t.params._emitClasses||!t.el)return;const s=[];t.slides.forEach(a=>{const n=t.getSlideClasses(a);s.push({slideEl:a,classNames:n}),t.emit("_slideClass",a,n)}),t.emit("_slideClasses",s)}slidesPerViewDynamic(t="current",s=!1){const a=this,{params:n,slides:r,slidesGrid:o,slidesSizesGrid:l,size:i,activeIndex:c}=a;let d=1;if(typeof n.slidesPerView=="number")return n.slidesPerView;if(n.centeredSlides){let u=r[c]?Math.ceil(r[c].swiperSlideSize):0,p;for(let f=c+1;f<r.length;f+=1)r[f]&&!p&&(u+=Math.ceil(r[f].swiperSlideSize),d+=1,u>i&&(p=!0));for(let f=c-1;f>=0;f-=1)r[f]&&!p&&(u+=r[f].swiperSlideSize,d+=1,u>i&&(p=!0))}else if(t==="current")for(let u=c+1;u<r.length;u+=1)(s?o[u]+l[u]-o[c]<i:o[u]-o[c]<i)&&(d+=1);else for(let u=c-1;u>=0;u-=1)o[c]-o[u]<i&&(d+=1);return d}update(){const t=this;if(!t||t.destroyed)return;const{snapGrid:s,params:a}=t;a.breakpoints&&t.setBreakpoint(),[...t.el.querySelectorAll('[loading="lazy"]')].forEach(o=>{o.complete&&ga(t,o)}),t.updateSize(),t.updateSlides(),t.updateProgress(),t.updateSlidesClasses();function n(){const o=t.rtlTranslate?t.translate*-1:t.translate,l=Math.min(Math.max(o,t.maxTranslate()),t.minTranslate());t.setTranslate(l),t.updateActiveIndex(),t.updateSlidesClasses()}let r;if(a.freeMode&&a.freeMode.enabled&&!a.cssMode)n(),a.autoHeight&&t.updateAutoHeight();else{if((a.slidesPerView==="auto"||a.slidesPerView>1)&&t.isEnd&&!a.centeredSlides){const o=t.virtual&&a.virtual.enabled?t.virtual.slides:t.slides;r=t.slideTo(o.length-1,0,!1,!0)}else r=t.slideTo(t.activeIndex,0,!1,!0);r||n()}a.watchOverflow&&s!==t.snapGrid&&t.checkOverflow(),t.emit("update")}changeDirection(t,s=!0){const a=this,n=a.params.direction;return t||(t=n==="horizontal"?"vertical":"horizontal"),t===n||t!=="horizontal"&&t!=="vertical"||(a.el.classList.remove(`${a.params.containerModifierClass}${n}`),a.el.classList.add(`${a.params.containerModifierClass}${t}`),a.emitContainerClasses(),a.params.direction=t,a.slides.forEach(r=>{t==="vertical"?r.style.width="":r.style.height=""}),a.emit("changeDirection"),s&&a.update()),a}changeLanguageDirection(t){const s=this;s.rtl&&t==="rtl"||!s.rtl&&t==="ltr"||(s.rtl=t==="rtl",s.rtlTranslate=s.params.direction==="horizontal"&&s.rtl,s.rtl?(s.el.classList.add(`${s.params.containerModifierClass}rtl`),s.el.dir="rtl"):(s.el.classList.remove(`${s.params.containerModifierClass}rtl`),s.el.dir="ltr"),s.update())}mount(t){const s=this;if(s.mounted)return!0;let a=t||s.params.el;if(typeof a=="string"&&(a=document.querySelector(a)),!a)return!1;a.swiper=s,a.parentNode&&a.parentNode.host&&a.parentNode.host.nodeName===s.params.swiperElementNodeName.toUpperCase()&&(s.isElement=!0);const n=()=>`.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;let o=a&&a.shadowRoot&&a.shadowRoot.querySelector?a.shadowRoot.querySelector(n()):Dt(a,n())[0];return!o&&s.params.createElements&&(o=$n("div",s.params.wrapperClass),a.append(o),Dt(a,`.${s.params.slideClass}`).forEach(l=>{o.append(l)})),Object.assign(s,{el:a,wrapperEl:o,slidesEl:s.isElement&&!a.parentNode.host.slideSlots?a.parentNode.host:o,hostEl:s.isElement?a.parentNode.host:a,mounted:!0,rtl:a.dir.toLowerCase()==="rtl"||Kt(a,"direction")==="rtl",rtlTranslate:s.params.direction==="horizontal"&&(a.dir.toLowerCase()==="rtl"||Kt(a,"direction")==="rtl"),wrongRTL:Kt(o,"display")==="-webkit-box"}),!0}init(t){const s=this;if(s.initialized||s.mount(t)===!1)return s;s.emit("beforeInit"),s.params.breakpoints&&s.setBreakpoint(),s.addClasses(),s.updateSize(),s.updateSlides(),s.params.watchOverflow&&s.checkOverflow(),s.params.grabCursor&&s.enabled&&s.setGrabCursor(),s.params.loop&&s.virtual&&s.params.virtual.enabled?s.slideTo(s.params.initialSlide+s.virtual.slidesBefore,0,s.params.runCallbacksOnInit,!1,!0):s.slideTo(s.params.initialSlide,0,s.params.runCallbacksOnInit,!1,!0),s.params.loop&&s.loopCreate(void 0,!0),s.attachEvents();const n=[...s.el.querySelectorAll('[loading="lazy"]')];return s.isElement&&n.push(...s.hostEl.querySelectorAll('[loading="lazy"]')),n.forEach(r=>{r.complete?ga(s,r):r.addEventListener("load",o=>{ga(s,o.target)})}),zn(s),s.initialized=!0,zn(s),s.emit("init"),s.emit("afterInit"),s}destroy(t=!0,s=!0){const a=this,{params:n,el:r,wrapperEl:o,slides:l}=a;return typeof a.params>"u"||a.destroyed||(a.emit("beforeDestroy"),a.initialized=!1,a.detachEvents(),n.loop&&a.loopDestroy(),s&&(a.removeClasses(),r&&typeof r!="string"&&r.removeAttribute("style"),o&&o.removeAttribute("style"),l&&l.length&&l.forEach(i=>{i.classList.remove(n.slideVisibleClass,n.slideFullyVisibleClass,n.slideActiveClass,n.slideNextClass,n.slidePrevClass),i.removeAttribute("style"),i.removeAttribute("data-swiper-slide-index")})),a.emit("destroy"),Object.keys(a.eventsListeners).forEach(i=>{a.off(i)}),t!==!1&&(a.el&&typeof a.el!="string"&&(a.el.swiper=null),uf(a)),a.destroyed=!0),null}static extendDefaults(t){qe(yn,t)}static get extendedDefaults(){return yn}static get defaults(){return Mo}static installModule(t){st.prototype.__modules__||(st.prototype.__modules__=[]);const s=st.prototype.__modules__;typeof t=="function"&&s.indexOf(t)<0&&s.push(t)}static use(t){return Array.isArray(t)?(t.forEach(s=>st.installModule(s)),st):(st.installModule(t),st)}}Object.keys(_n).forEach(e=>{Object.keys(_n[e]).forEach(t=>{st.prototype[t]=_n[e][t]})});st.use([Tf,Sf]);function Oh({swiper:e,extendParams:t,on:s,emit:a,params:n}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let r,o,l=n&&n.autoplay?n.autoplay.delay:3e3,i=n&&n.autoplay?n.autoplay.delay:3e3,c,d=new Date().getTime(),u,p,f,b,m,k;function E(D){!e||e.destroyed||!e.wrapperEl||D.target===e.wrapperEl&&(e.wrapperEl.removeEventListener("transitionend",E),!(k||D.detail&&D.detail.bySwiperTouchMove)&&g())}const A=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?u=!0:u&&(i=c,u=!1);const D=e.autoplay.paused?c:d+i-new Date().getTime();e.autoplay.timeLeft=D,a("autoplayTimeLeft",D,D/l),o=requestAnimationFrame(()=>{A()})},x=()=>{let D;return e.virtual&&e.params.virtual.enabled?D=e.slides.find(U=>U.classList.contains("swiper-slide-active")):D=e.slides[e.activeIndex],D?parseInt(D.getAttribute("data-swiper-autoplay"),10):void 0},y=()=>{let D=e.params.autoplay.delay;const I=x();return!Number.isNaN(I)&&I>0&&(D=I),D},P=D=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),A();let I=D;typeof I>"u"&&(I=y(),l=I,i=I),c=I;const U=e.params.speed,J=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(U,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,U,!0,!0),a("autoplay")):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(U,!0,!0),a("autoplay")):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,U,!0,!0),a("autoplay")),e.params.cssMode&&(d=new Date().getTime(),requestAnimationFrame(()=>{P()})))};return I>0?(clearTimeout(r),r=setTimeout(()=>{J()},I)):requestAnimationFrame(()=>{J()}),I},M=()=>{d=new Date().getTime(),e.autoplay.running=!0,P(),a("autoplayStart")},R=()=>{e.autoplay.running=!1,clearTimeout(r),cancelAnimationFrame(o),a("autoplayStop")},w=(D,I)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(r),D||(m=!0);const U=()=>{a("autoplayPause"),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener("transitionend",E):g()};if(e.autoplay.paused=!0,I){U();return}c=(c||e.params.autoplay.delay)-(new Date().getTime()-d),!(e.isEnd&&c<0&&!e.params.loop)&&(c<0&&(c=0),U())},g=()=>{e.isEnd&&c<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(d=new Date().getTime(),m?(m=!1,P(c)):P(),e.autoplay.paused=!1,a("autoplayResume"))},h=()=>{if(e.destroyed||!e.autoplay.running)return;const D=wt();D.visibilityState==="hidden"&&(m=!0,w(!0)),D.visibilityState==="visible"&&g()},T=D=>{D.pointerType==="mouse"&&(m=!0,k=!0,!(e.animating||e.autoplay.paused)&&w(!0))},_=D=>{D.pointerType==="mouse"&&(k=!1,e.autoplay.paused&&g())},C=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener("pointerenter",T),e.el.addEventListener("pointerleave",_))},B=()=>{e.el&&typeof e.el!="string"&&(e.el.removeEventListener("pointerenter",T),e.el.removeEventListener("pointerleave",_))},K=()=>{wt().addEventListener("visibilitychange",h)},V=()=>{wt().removeEventListener("visibilitychange",h)};s("init",()=>{e.params.autoplay.enabled&&(C(),K(),M())}),s("destroy",()=>{B(),V(),e.autoplay.running&&R()}),s("_freeModeStaticRelease",()=>{(f||m)&&g()}),s("_freeModeNoMomentumRelease",()=>{e.params.autoplay.disableOnInteraction?R():w(!0,!0)}),s("beforeTransitionStart",(D,I,U)=>{e.destroyed||!e.autoplay.running||(U||!e.params.autoplay.disableOnInteraction?w(!0,!0):R())}),s("sliderFirstMove",()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){R();return}p=!0,f=!1,m=!1,b=setTimeout(()=>{m=!0,f=!0,w(!0)},200)}}),s("touchEnd",()=>{if(!(e.destroyed||!e.autoplay.running||!p)){if(clearTimeout(b),clearTimeout(r),e.params.autoplay.disableOnInteraction){f=!1,p=!1;return}f&&e.params.cssMode&&g(),f=!1,p=!1}}),s("slideChange",()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(c=y(),l=y())}),Object.assign(e.autoplay,{start:M,stop:R,pause:w,resume:g})}const Ch={class:"home-layout"},Lh={class:"sticky-header-group"},Rh=["data-user-name"],Mh={class:"home-tabs",id:"home-tabs--id"},Dh={class:"home-tab home-tab--active","data-home-tab":"lobby"},Ih={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Nh={class:"home-tab","data-home-tab":"active"},Bh={width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",style:{"vertical-align":"-3px","margin-right":"4px"}},Fh={__name:"home_route",setup(e){const t=Tt(),s=_e();window.CoreBetSlip=yl;const a=()=>{const i=document.querySelector(".bet-grid__toggle"),c=document.querySelector(".bet-grid__toggle-text"),d=document.querySelector(".bet-grid__select"),u=document.querySelector(".bet-grid__slip");if(console.log("[Bet Grid Toggle] Initializing...",{toggleBtn:i,toggleText:c,selectSection:d,slipSection:u}),i&&c&&d&&u){const p=window.matchMedia("(orientation: portrait)").matches,f=window.matchMedia("(max-width: 768px)").matches;(p||f)&&(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip",console.log("[Bet Grid Toggle] Initial state set: select expanded, slip collapsed (drawer closed)")),i.addEventListener("click",b=>{console.log("[Bet Grid Toggle] Button clicked!"),b.preventDefault(),b.stopPropagation(),u.classList.contains("collapsed")?(d.classList.add("collapsed"),u.classList.remove("collapsed"),c.textContent="Close Bet Slip"):(d.classList.remove("collapsed"),u.classList.add("collapsed"),c.textContent="Open Bet Slip"),console.log("[Bet Grid Toggle] State changed:",{selectCollapsed:d.classList.contains("collapsed"),slipCollapsed:u.classList.contains("collapsed"),buttonText:c.textContent})}),console.log("[Bet Grid Toggle] Event listener attached")}else console.warn("[Bet Grid Toggle] Missing elements:",{toggleBtn:i,toggleText:c,selectSection:d,slipSection:u})};document.addEventListener("click",i=>{const c=i.target;if(c&&c.dataset?.promotionTopic){const d={timestamp:Date.now(),heroImg:c.dataset.promotionHeroImg||"",caption:c.dataset.promotionCaption||"",tagline:c.dataset.promotionTagline||"",toast:c.dataset.promotionToast||"",topic:c.dataset.promotionTopic||"",topicToken:c.dataset.promotionTopicToken||"",marquee:c.dataset.promotionMarquee||""};console.log("[home_route] Publishing PROMOTION__CLICK:",d),re.publish(s.hierTopics.PROMOTION__CLICK,JSON.stringify(d))}c&&c.dataset?.publishRouteHome&&(c.dataset.publishRouteHome.startsWith("ROUTE.HOME.SODAPOP_PLAY.")&&document.querySelectorAll("#sodapop_play .btn-info-sm").forEach(u=>{u===c?(u.style.background="var(--app-core-color--yellow-1__dark--brand, #ffcc33)",u.style.color="var(--app-core-color--green-1__dark--brand, #27794d)"):(u.style.background="#27794d1A",u.style.color="#fff")}),re.publish(c.dataset.publishRouteHome,`{"ts": ${Date.now()} }`)),c&&c.dataset?.sodapopClose&&neodigmSodaPop&&neodigmSodaPop.close()});const n=(i,c=!1,d="cards",u={})=>{const p=document.querySelector(".tournaments-grid");if(!p)return;p.innerHTML="",p.classList.toggle("tournaments-grid--list",d==="list");const f=document.getElementById("app"),b=f?.getAttribute("data-sync-theme")||"dark",m=f?.getAttribute("data-sync-lang")||"en",k=f?.getAttribute("data-sync-motif")||"brand",E=x=>{const y=document.createElement("bma-tournament-list-card");return y.setAttribute("data-bma-tourn-guid",x.guid||""),y.setAttribute("data-bma-tourn-caption",x.caption||""),y.setAttribute("data-bma-tourn-tagline",x.tagline||""),y.setAttribute("data-bma-tourn-status",x.status||""),y.setAttribute("data-bma-tourn-class",x.status||""),y.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(x.sports_allowed)?JSON.stringify(x.sports_allowed):""),y.setAttribute("data-bma-tourn-entities",x.entities?JSON.stringify(x.entities):""),y.setAttribute("data-bma-tourn-entry_fee",x.entry_fee||"0"),y.setAttribute("data-bma-tourn-tournament_dollars",x.tournament_dollars||"0"),y.setAttribute("data-bma-tourn-matches",x.matches_expanded?.length||"0"),y.setAttribute("data-bma-tourn-tags",Array.isArray(x.tags)?JSON.stringify(x.tags):"[]"),y.setAttribute("data-bma-tourn-window_start_time",x.window_start_time||""),y.setAttribute("data-bma-tourn-window_end_time",x.window_end_time||""),y.setAttribute("data-sync-theme",b),y},A=x=>{const y=document.createElement("article"),P=x.status||"DRAFT";y.className=`tournament-item tournament-status-${P.toLowerCase()}`;const M=document.createElement("bma-tournament-card");return M.setAttribute("data-bma-tourn-id",x.id||""),M.setAttribute("data-bma-tourn-guid",x.guid||""),M.setAttribute("data-bma-tourn-caption",x.caption||""),M.setAttribute("data-bma-tourn-tagline",x.tagline||""),M.setAttribute("data-bma-tourn-window_start_time",x.window_start_time||""),M.setAttribute("data-bma-tourn-window_end_time",x.window_end_time||""),M.setAttribute("data-bma-tourn-sports_allowed",Array.isArray(x.sports_allowed)?JSON.stringify(x.sports_allowed):x.sports_allowed||""),M.setAttribute("data-bma-tourn-entities",x.entities?JSON.stringify(x.entities):""),M.setAttribute("data-bma-tourn-tournament_dollars",x.tournament_dollars||""),M.setAttribute("data-bma-tourn-prize_distro",Array.isArray(x.prize_distro)?JSON.stringify(x.prize_distro):x.prize_distro||""),M.setAttribute("data-bma-tourn-matches",Array.isArray(x.matches_guids)?JSON.stringify(x.matches_guids):x.matches_guids||""),M.setAttribute("data-bma-tourn-matches_expanded",Array.isArray(x.matches_expanded)?JSON.stringify(x.matches_expanded):x.matches_expanded||""),M.setAttribute("data-bma-tourn-entry_fee",x.entry_fee||""),M.setAttribute("data-bma-tourn-rake",x.rake||""),M.setAttribute("data-bma-tourn-tags",Array.isArray(x.tags)?JSON.stringify(x.tags):x.tags||""),M.setAttribute("data-bma-tourn-comments",x.comments||""),M.setAttribute("data-bma-tourn-class",x.status||""),M.setAttribute("data-bma-tourn-status",x.status||""),M.setAttribute("data-sync-theme",b),M.setAttribute("data-sync-lang",m),M.setAttribute("data-sync-motif",k),M.setAttribute("data-n55-size","medium"),M.setAttribute("data-n55-enchanted-cta-ambient","none"),M.setAttribute("data-tourn-custom-css",""),M.setAttribute("data-tourn-trophy","0"),M.setAttribute("data-bma-tourn-focus",""),M.setAttribute("data-bma-tourn-wait","false"),y.appendChild(M),y};if(c){i.forEach(y=>{const P=document.createElement("div");P.className="tournament-category";const M=document.createElement("header");M.className="tournament-category-header";const R=document.createElement("div");R.className="category-title-line";const w=document.createElement("h2");if(w.className="category-title",w.textContent=y.title,R.appendChild(w),y.tournaments){const U=document.createElement("span");U.className="category-subtext",U.textContent=y.tournaments.length,R.appendChild(U)}const{tab:g="lobby",subStatus:h="all",sort:T="default",result:_="all",odds:C="all"}=u,K=y.title.toLowerCase().includes("completed"),V=!K&&g==="my",D=(U,J,Q)=>`<option value="${U}"${Q?" selected":""}>${J}</option>`;let I="";if(g==="lobby"?I=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${D("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="entryFee" disabled>
              ${D("free","Buy-in: Free",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="sort">
              ${D("default","Starting TD$: Default",T==="default")}
              ${D("td_high","Starting TD$: High to Low",T==="td_high")}
              ${D("td_low","Starting TD$: Low to High",T==="td_low")}
            </select>
          `:g==="my"&&V?I=`
            <select class="category-dropdown" data-filter-type="gameMode" disabled>
              ${D("default","Game Mode: Default",!0)}
            </select>
            <select class="category-dropdown" data-filter-type="subStatus">
              ${D("all","Status: All",h==="all")}
              ${D("active","Status: Active",h==="active")}
              ${D("upcoming","Status: Upcoming",h==="upcoming")}
            </select>
            <select class="category-dropdown" data-filter-type="odds">
              ${D("all","Odds: All",C==="all")}
              ${D("available","Odds: Available",C==="available")}
              ${D("none","Odds: Not Available",C==="none")}
            </select>
          `:(g==="my"&&K||g==="completed")&&(I=`
            <select class="category-dropdown" data-filter-type="result">
              ${D("all","Result: All",_==="all")}
              ${D("trophy","Result: Won Trophy",_==="trophy")}
              ${D("no_trophy","Result: No Trophy",_==="no_trophy")}
            </select>
          `),M.appendChild(R),I){const U=document.createElement("button");U.className="category-filter-toggle",U.setAttribute("aria-label","Toggle filters"),U.innerHTML='<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"/></svg> Sort & Filter <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" class="filter-chevron"><path d="M7 10l5 5 5-5z"/></svg>';const J=document.createElement("div");J.className="category-controls";const Q=localStorage.getItem("bma_view_mode")||"cards",le=document.createElement("span");le.className="category-view-btns",le.innerHTML=`
            <button class="category-view-btn${Q==="cards"?" category-view-btn--active":""}" data-view-mode="cards" aria-label="Card view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"/></svg>
            </button>
            <button class="category-view-btn${Q==="list"?" category-view-btn--active":""}" data-view-mode="list" aria-label="List view">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"/></svg>
            </button>
          `,J.appendChild(U),J.appendChild(le),M.appendChild(J)}if(I){const U=document.createElement("div");if(U.className="category-filter-row",U.style.display=window._bmaFilterRowOpen?"":"none",U.innerHTML=I,M.appendChild(U),window._bmaFilterRowOpen){const J=M.querySelector(".category-filter-toggle");J&&J.classList.add("category-filter-toggle--open")}}if(P.appendChild(M),p.appendChild(P),y.tournaments.length===0){const U=document.createElement("div");U.className="tournaments-empty",U.style.cssText="grid-column: 1 / -1; text-align: center; padding: 24px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",U.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="rgba(255,255,255,0.12)" style="margin-bottom: 12px;">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <p style="font-size: 0.9rem; font-weight: 600; color: rgba(255,255,255,0.35); margin: 0 0 6px;">No tournaments available</p>
            <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back later for new tournaments</p>
          `,p.appendChild(U)}else y.tournaments.forEach((U,J)=>{const Q=d==="list"?E(U):A(U);Q.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",Q.style.animationDelay=`${Math.min(J*50,300)}ms`,p.appendChild(Q)})});const x=p.dataset.filterContext;if(x!=="lobby"&&p.querySelectorAll("bma-tournament-card, bma-tournament-list-card").length===0){let y="No tournaments available",P="Check back later for new tournaments";x==="my"?(y="You haven't joined any tournaments yet",P="Head to the lobby to find tournaments"):x==="completed"&&(y="No completed tournaments yet",P="Tournaments will appear here once they finish");const M=document.createElement("div");M.className="tournaments-empty",M.style.cssText="grid-column: 1 / -1; text-align: center; padding: 48px 24px; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;",M.innerHTML=`
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)" style="margin-bottom: 16px;">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <p style="font-size: 1rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 8px;">${y}</p>
          <p style="font-size: 0.8rem; color: rgba(255,255,255,0.2); margin: 0;">${P}</p>
        `,p.appendChild(M)}}else i.forEach((x,y)=>{const P=d==="list"?E(x):A(x);P.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",P.style.animationDelay=`${Math.min(y*50,300)}ms`,p.appendChild(P)})},r=i=>{document.querySelectorAll("bma-tournament-card").forEach(d=>{d.setAttribute("data-sync-theme",i)})},o=i=>{const c=document.querySelectorAll("bma-tournament-card"),d=Date.now().toString();c.forEach(u=>{if(u===i){if(u.setAttribute("data-bma-tourn-focus",d),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="visible")}typeof neodigmMarquee<"u"&&neodigmMarquee.init()}else if(u.setAttribute("data-bma-tourn-focus",""),u.shadowRoot){const p=u.shadowRoot.querySelector(".card-focus__feedback");p&&(p.style.visibility="hidden")}})},l=i=>{const{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}=i.detail;console.log("[home_route] Tournament action:",{action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f}),o(i.target),re.publish("WC.TOURN_ACTION",JSON.stringify({action:c,tournamentId:d,tournamentGuid:u,tournamentStatus:p,...f,timestamp:Date.now()}))};return $t(async()=>{if(!s.appSession.session_user.authenticated){console.log("User not authenticated, redirecting to signin"),t.push({name:"signin_route"});return}const i=document.getElementById("app");if(i){const p=s.appCLIFeatures.features.theme?.state,f=s.appCLIFeatures.features.lang?.state,b=s.appCLIFeatures.features.motif?.state,m=s.appSession.session_user.guid;p&&(i.setAttribute("data-sync-theme",p),document.body.setAttribute("data-sync-theme",p)),f&&i.setAttribute("data-sync-lang",f),b&&i.setAttribute("data-sync-motif",b),m&&i.setAttribute("data-user-guid",m)}window._homeRouteRenderCards=n,window.initBetGridToggle=a;const c=re.subscribe("APP.ROUTE_SYNC",(p,f)=>{try{const b=JSON.parse(f);b.theme&&r(b.theme.state)}catch(b){console.error("[home_route] Failed to parse APP.ROUTE_SYNC data:",b)}});window._homeRoutePubSubToken=c,console.log("[home_route] Publishing ROUTE.HOME_ONMOUNT"),re.publish("ROUTE.HOME_ONMOUNT",JSON.stringify({timestamp:Date.now()})),document.addEventListener("bma-tournament-action",l);const d=document.querySelectorAll(".featured-swiper .swiper-slide").length||3,u=new st(".featured-swiper",{modules:[Oh],slidesPerView:1,spaceBetween:16,loop:d>3,centeredSlides:d===1,autoplay:d>3?{delay:3e3,disableOnInteraction:!1}:!1,breakpoints:{320:{slidesPerView:1,spaceBetween:12},640:{slidesPerView:Math.min(2,d),spaceBetween:16},1024:{slidesPerView:Math.min(3,d),spaceBetween:20},1280:{slidesPerView:Math.min(3,d),spaceBetween:24}}});window.featuredSwiper=u,re.publish(s.hierTopics.PROMOTION__LOAD,JSON.stringify({timestamp:Date.now()}))}),Fa(()=>{document.removeEventListener("bma-tournament-action",l),window.featuredSwiper&&(window.featuredSwiper.destroy(!0,!0),delete window.featuredSwiper),delete window._homeRouteRenderCards,delete window.initBetGridToggle,window._homeRoutePubSubToken&&re.unsubscribe(window._homeRoutePubSubToken)}),(i,c)=>(Ye(),nt("main",Ch,[H("div",Lh,[H("bma-app-head-top",{"data-user-name":Wt(s).appSession.session_user.name||"Guest"},null,8,Rh),c[0]||(c[0]=H("bma-app-head-mid",{"data-selected-tab":"head_mid_lobby"},null,-1))]),c[6]||(c[6]=H("section",{class:"featured-carousel-section"},[H("div",{class:"swiper featured-swiper"},[H("div",{class:"swiper-wrapper"})])],-1)),H("nav",Mh,[H("button",Dh,[(Ye(),nt("svg",Ih,[...c[1]||(c[1]=[H("path",{d:"M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"},null,-1)])])),c[2]||(c[2]=Ss(" Main Lobby ",-1))]),H("button",Nh,[(Ye(),nt("svg",Bh,[...c[3]||(c[3]=[H("path",{d:"M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"},null,-1)])])),c[4]||(c[4]=Ss(" Active Tourneys ",-1)),c[5]||(c[5]=H("span",{class:"home-tab__badge",id:"home-tab-active-badge",style:{display:"none"}},"0",-1))])]),c[7]||(c[7]=H("bma-app-head-sports",{"data-selected-chip":"all"},null,-1)),c[8]||(c[8]=H("section",{class:"tournaments-section"},[H("div",{class:"tournaments-grid"})],-1)),c[9]||(c[9]=H("bma-app-foot",{"data-selected-item":"foot_all_sports"},null,-1))]))}},$h={};function zh(e,t){return Ye(),nt("main",null,[...t[0]||(t[0]=[H("h1",null,"App FAQ",-1)])])}const ca=es($h,[["render",zh]]),Hh={};function Uh(e,t){return Ye(),nt("main",null,[...t[0]||(t[0]=[H("h1",null,"App Help",-1)])])}const Gh=es(Hh,[["render",Uh]]),Pt=class Pt{static getSessionId(){return this.sessionId||(this.sessionId=sessionStorage.getItem("sse_session_id"),this.sessionId?this.isDebug&&console.log("[SSE] Restored sessionId from sessionStorage:",this.sessionId):(this.sessionId=crypto.randomUUID(),sessionStorage.setItem("sse_session_id",this.sessionId),this.isDebug&&console.log("[SSE] Generated new sessionId:",this.sessionId))),this.sessionId}static async establishSSE(t,s,a,n=!0){this.strChat=a,this.isDebug=n;const r=this.getSessionId();console.log(" ~... sse client 'Q' | ","Q"),t=t.replaceAll("##SSEID##",s).replaceAll("##LASTKEY##",localStorage.getItem("sse_lastkey")||-1);const o=t.includes("?")?"&":"?";t=`${t}${o}sessionId=${r}`,this.isDebug&&console.warn(" ~... sse push uri | ",t),this.sseEvent&&(this.sseEvent.close(),this.sseEvent=null),this.sseEvent=new EventSource(t),this.sseEvent.onopen=function(l){Pt.onSSEOpen(l)},this.sseEvent.onmessage=function(l){Pt.onSSEMessage(l)},this.sseEvent.onerror=function(l){Pt.onSSEError(l)}}static async onSSEOpen(t){this.isDebug&&console.warn(" ~... sse push onSSEOpen ev | ",t)}static async onSSEMessage(t){let s=null;if(this.isDebug&&console.warn(" ~... sse push onSSEMessage ev | ",t),t?.data){localStorage.setItem("sse_lastkey",t?.data?.id||-1);try{if(s=JSON.parse(t.data),s?.class!="NO_MESSAGE")if(s?.class&&s?.msg)switch(s.class){case"BANNER_DISMISS":break;case"BANNER_MODAL":break;case"BANNER_MODAL_CLOSE":break;case"BUBBLE_CONFETTI":break;case"BUBBLE_MARQUEE":break;case"BUBBLE":break;case"CLI":break;case"CONSOLE":break;case"FEATURE_FLAG":break;case"MVV_POPUP":break;case"MVV_TOAST":s?.msg&&neodigmWired4Sound&&(neodigmWired4Sound.sound(5).vibrate(),neodigmToast.q(s.msg,"brand",4500),this.isDebug&&console.warn(" ~... sse push pushPackage.id class msg criterion  | ",s.id+" | "+s.class+" | "+s.msg+" | "+s.criterion));break;case"WEBNOTE":break;case"GUIDED_TOUR":break;case"META_MACRO":break;case"META_TEMPLATE":break;case"MVV_CAROUSEL":break;case"MVV_POPOVER":break;case"MVV_WIDGET":break;case"RECONNECT":break;case"TOURNAMENT_SYNC":this.isDebug&&console.warn(" ~... sse TOURNAMENT_SYNC | ",s),re.publish("SSE.CORE.TOURN_SYNC",JSON.stringify(s));break}else this.isDebug&&console.warn(" ~... sse push - invalid package - no class/msg");else this.isDebug&&console.warn(" ~... sse push - no message")}catch{this.isDebug&&console.warn(" ~... sse push - invalid package")}}}static async onSSEError(t){this.isDebug&&console.warn(" ~... sse push onSSEError ev | ",t)}static async disconnectSSE(t){this.isDebug&&console.warn(" ~... sse push disconnectSSE ev | ",t),this.sseEvent.close(),this.sseEvent=null}};Pt.sseEvent=null,Pt.strChat=null,Pt.isDebug=!0,Pt.sessionId=null;let Pa=Pt;class Bt{static neodigmOpt={neodigmToast:!0,N55_GTM_DL_TOAST:"n55_gtm_dl_toast",neodigmSodaPop:!0,N55_SP_DISABLE_SCROLL:!0,N55_GTM_DL_POP_OPEN:"n55_gtm_dl_pop_open",N55_GTM_DL_POP_CLOSE:"n55_gtm_dl_pop_close",neodigmWired4Sound:!0,W4S_VOLUME:.022,EVENT_SOUNDS:!0,neodigmParallax:!0,PRLX_MOBILE:!1,neodigmMarquee:!0,neodigmEnchantedCTA:!0,N55_CTA_RND_TOUCH:14001,N55_GTM_DL_CTA:"n55_gtm_dl_cta",N55_CTA_LONG_TAP:3400,N55_CTA_FX:["alternate","emit","flash_danger","flash_warning","radius","scroll","shake"],neodigmKPI:!0,N55_GTM_DL_KPI:"n55_gtm_dl_kpi",neodigmPWA:!0,N55_PWA_TEMPLATE_ID:"js-pup-n55-pwa",neodigmCarousel:!0,N55_GTM_DL_CARSL:"n55_gtm_dl_carsl",N55_CARO_BLUR:!0,neodigmTulip:!0,neodigmPopTart:!0,N55_GTM_DL_POPTRT:"n55_gtm_dl_poptrt",neodigmAgent:!0,API_baseURI:"https://a55-wtt-api-v1.onrender.com/",API_ver:"v1",neodigmPicnic:!0,N55_GTM_DL_PICNIC:"n55_gtm_dl_picnic",neodigmWWInterval:!0,neodigmMetronome:{countTo:116,neodigmMarquee:132},N55_ZIND:{PopTart:264},CONSOLE_LOG_VER:!0,N55_DEBUG_lOG:!1,N55_AMPM_THEME:"light",N55_EVENT_HAPTIC:!0,N55_FLASH_TITLE:!0,N55_GENRE_MOTIF:"neodigm",N55_THEME_DEFAULT:"brand",N55_THEME_COLORS:{brand:["EDBA08","915E00","🟧"],primary:["92a8d1","364C75","🟦"],secondary:["EDCED0","978284","🟫"],success:["009473","003817","🟩"],white:["FFFFFF","FDFDFD","⬜"],ghost:["ffffff","000000","⬜"],danger:["DD4124","810000","🟥"],warning:["F5DF4D","988200","🟨"],info:["7BC4C4","1F6868","🟦"],disabled:["868686","767676","⬜"],night:["6a6a6a","242424","⬛"],marcom:["B163A3","5F4B8B","🟪"],party:["FF6F61","C93F60","🟪"]},N55_APP_STATE:{CONTEXT:"body",FIRST_TAP:!1,ONLINE:!0,PWA_READY:!1,PWA_CONTAIN:!1,SHAKE:!1,CONTEXTMNU:!1,FOCUS:!0,AMPM:"light",REDUCE_MOTION:!1},ROOT:document.querySelector(":root"),N55_TYPE:"https://fonts.googleapis.com/css?family=Roboto+Condensed:wght@100;300;400|Roboto+Slab:wght@300|Roboto+Mono:wght@300|Material+Symbols+Outlined:opsz,wght,FILL,GRAD@40,300,0,0"};static neodigmUtils=((t=document)=>({ver:"4.0.0",isMobile:function(){return t.body.clientWidth<=768},isTouch:function(){return typeof document.body.ontouchstart<"u"},f1210:function(){return Math.floor(Math.random()*10+1)},f02x:function(s){return Math.floor(Math.random()*s)},fPromiseJS:async function(s,a){return new Promise((n,r)=>{const o=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});o.onload=n,o.onerror=r,s.getElementsByTagName("head")[0].appendChild(o)})},fAsyncJS:function(s,a,n){const r=Object.assign(s.createElement(LZString.decompress("㎆ぎॠข")),{type:LZString.decompress("அ〞샴ՠ蘆㠘쁎Ұΰ耀"),src:a});n&&(r.onload=function(){n()}),s.getElementsByTagName("head")[0].appendChild(r)},fAsyncCSS:function(s,a){let n=s.createElement("link");n.rel="stylesheet",n.href=a,s.getElementsByTagName("head")[0].appendChild(n)},data2prop:function(s){s=s.replace("data-","").toLowerCase();let a=s.split(""),n=[],r=!1;return a.forEach(o=>{o=="-"?r=!0:(n.push(r?o.toUpperCase():o),r=!1)}),n.join("")},doDataLayer:function(s,a){neodigmOpt.N55_DEBUG_lOG&&console.log("~ga | "+s+" | "+a),window.dataLayer&&window.dataLayer.push({event:s,msg:a})},isJSON:function(s){let a=!1;try{a=typeof JSON.parse(s)}catch{}return a=="object"},appStateListen:function(s){NeodigmKeylime.subscribe("mouseover",n=>{n?.target?.dataset?.n55TypeonHover&&neodigmUtils.typeOn(JSON.parse(n.target.dataset.n55TypeonHover))},!0),NeodigmKeylime.subscribe("click",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close();let r=neodigmUtils.walkDOM3(n?.target,"n55TypeonClick");r&&neodigmUtils.typeOn(JSON.parse(r))},!0),NeodigmKeylime.subscribe("touchstart",n=>{neodigmOpt.N55_APP_STATE.FIRST_TAP||(neodigmOpt.N55_APP_STATE.FIRST_TAP=!0),neodigmOpt.neodigmTulip&&neodigmTulip.close()},!0),NeodigmKeylime.subscribe("resize",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("orientationchange",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmCarousel&&neodigmCarousel.init(),neodigmOpt.neodigmTulip&&neodigmTulip.close(),neodigmOpt.neodigmPopTart&&neodigmPopTart.close()})},!0,window),NeodigmKeylime.subscribe("scroll",n=>{window.requestAnimationFrame(()=>{neodigmOpt.neodigmTulip&&neodigmTulip.close()})},!0,window),neodigmOpt.N55_APP_STATE.REDUCE_MOTION=!window.matchMedia("(prefers-reduced-motion: no-preference)").matches;let a=document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelector("[data-n55-Ampm-theme]")?.dataset.n55AmpmTheme;a&&(neodigmOpt.N55_AMPM_THEME=neodigmOpt.N55_APP_STATE.AMPM=a)},prettyTimeRETIRE:s=>{let a=new Date(s).toLocaleDateString(void 0,{year:"numeric",month:"short",day:"numeric"});return s=="Dec 31, 1969"&&(a=""),a},prettyTime:s=>new Date(s).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"}),capFirst:s=>s&&s[0].toUpperCase()+s.slice(1)||"",genHash:s=>(s=String(s),Math.abs(s.split("").reduce((a,n)=>(a<<5)-a+n.charCodeAt(0)|0,0))),flashTitle:(s=neodigmOpt.N55_THEME_DEFAULT,a=4e3)=>{neodigmOpt.N55_FLASH_TITLE&&(document?.n55Title||(document.n55Title=document.title),neodigmOpt?.N55_THEME_COLORS[s]&&(document.title=neodigmOpt.N55_THEME_COLORS[s][2]+document.n55Title),neodigmUtils.doSetT(function(){document.title=document.n55Title},a))},robinTheme:function(s=Object.keys(neodigmOpt.N55_THEME_COLORS)[0]){if(!neodigmMetronome.isPaused()){let a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme")];const n=56;a.forEach((o,l)=>{o.dataset.n55Theme!="disabled"&&(o.n55Theme||(o.n55Theme=o.dataset.n55Theme),setTimeout(function(){o.dataset.n55Theme=s},l*n),setTimeout(function(){o.dataset.n55Theme=o.n55Theme},l*(n+n)))}),a=[...document[neodigmOpt.N55_APP_STATE.CONTEXT].querySelectorAll("[data-n55-theme-pulse")];const r=256;a.forEach((o,l)=>{o.n55ThemePulse||(o.n55ThemePulse=o.dataset.n55ThemePulse),setTimeout(function(){o.dataset.n55ThemePulse=s},l*r),setTimeout(function(){o.dataset.n55ThemePulse=o.n55ThemePulse},l*r+3e3)}),neodigmUtils.flashTitle(s,2e3)}},countTo:async function(s,a,n=neodigmOpt.neodigmMetronome.countTo){const r=[16,n];return[...document.querySelectorAll(s)].forEach(function(o,l){let i=Math.abs(Number(o.textContent)-a);neodigmMetronome.unsubscribe(r[1]+l).subscribe(function(c){let d=Number(o.textContent);if(!Number.isNaN(d)&&!isNaN(d)&&a!=d){let u=i/r[0];u=Math.round(u),c!=0?o.textContent=d<a?d+u:d-u:o.textContent=a}},r[1]+l,r[0])}),neodigmUtils},typeOff:async function(s){let a=document.querySelector(s?.q1st);if(a){let n=a.textContent.length,r=window.getComputedStyle(a),o=Number(r.paddingTop.replace("px",""))+Number(r.paddingBottom.replace("px",""));for(a.offsetHeight&&(a.style.height=a.offsetHeight-o+"px");n;)setTimeout(()=>{a.textContent=a.textContent.replace(/.$/,"")},s.uniqueDelay*n--)}},typeOn:async function(s){let a=document.querySelector(s?.q1st);if(a){a.dataset.n55Typeon=0;let n=s.msg.replaceAll("|","   |   ")+"   ",r=n.split("|");if(s?.mode=="OFF")return neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay}),neodigmUtils;if(s?.mode=="RANDOM"&&r.length){let o=a.dataset.n55Typeon=neodigmUtils.f02x(r.length);n=r[o]}neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),neodigmMetronome.unsubscribe(s.uniqueDelay).subscribe(o=>{let l=n[n.length-(o+1)];l=="|"&&(l="",neodigmUtils.typeOff({q1st:s.q1st,uniqueDelay:s.uniqueDelay/a.textContent.length-4}),a.dataset.n55Typeon++),a.textContent+=l,s?.mode=="LOOP"&&o==0&&neodigmUtils.typeOn(s)},s.uniqueDelay,n.length)}return neodigmUtils},getValJSON:function(s,a){try{return JSON.parse(s)}catch{return JSON.parse('{ "'+a+'": "'+s+'" }')}},walkDOM3:function(s,a,n=!1){let r=null;if(!r&&s?.dataset[a]&&(r=s),!r&&s?.parentNode?.dataset[a]&&(r=s.parentNode),!r&&s.tagName!="BODY"&&s?.parentNode?.parentNode?.dataset[a]&&(r=s.parentNode.parentNode),r)return n?r:r.dataset[a]},doSetT:function(s,a){return neodigmOpt.neodigmWWInterval?window.setTimeoutN55(s,a):setTimeout(s,a)},shake:function(s,a=!0){return[...document.querySelectorAll(s)].forEach(function(n,r){n.classList.add("shake__an"),setTimeout(function(){n.classList.remove("shake__an")},460)}),Bt.neodigmUtils},hardReload:function(s="n55reset"){const a=new URLSearchParams(window.location.search);a.set(s,new Date().getTime());const n=a.toString();window.location.search=n}}))}const jh={class:"auth-page"},Yh={class:"auth-page-right"},Vh={class:"auth-card"},Kh={class:"form-group"},qh={class:"form-group"},Wh={class:"password-input-wrapper"},Jh=["type"],Xh={style:{"text-align":"right"}},Qh={class:"auth-link-center"},Zh={__name:"signin_route",setup(e){const t=Tt(),s=_e(),a=(p="signin")=>{t.push({name:p})};let n=null;const r=Ze(!1),o=()=>{r.value=!r.value},l=(p=3,f=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":p=3,f=1;break;case"white_label":p=3,f=4;break}const b=Math.floor(Math.random()*p)+f,m=document.querySelector(".img__bg")?.classList;m&&(m.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),m.add(`img__bg--${b}`)),n||(n=re.subscribe("APP__ROUTE_SYNC",(k,E)=>{const A=JSON.parse(E);switch(Object.keys(A)[0]){case"Motif":l();break;case"Lang":i();break}}))},i=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(m=>m.code==f)[0]?.copy;b=b.filter(m=>m[0]==p.dataset.syncMicrocopyText)[0],b&&(p.textContent=b[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(p=>{const f=s.appCLIFeatures?.features?.lang?.state;let b=s.appMeta.microcopy.language.filter(m=>m.code==f)[0]?.copy;b=b.filter(m=>m[0]==p.dataset.syncMicrocopyPlaceholder)[0],b&&(p.placeholder=b[1])})},c=p=>{Bt.neodigmUtils().shake(p||"#inp__text--email")},d=()=>{let p=document.querySelectorAll("#inp__text--email")[0].value;neodigmUtils.messageNotification("Cub vs. Cardianals","https://mach-five-group.github.io/bma-landing/Assets/Bet%20Max%20Action-Full%20Lockup-600.png"),s.doCLI(p)},u=()=>{const p=document.querySelector("#inp__text--email"),f=document.querySelector("#inp__text--password");let b=null,m=null;if(!p?.value)b="Please enter your email",m="#inp__text--email";else if(p.value.indexOf("@")===-1||p.value.indexOf(".")===-1)b="Please enter a valid email address",m="#inp__text--email";else if(!f?.value)b="Please enter your password",m="#inp__text--password";else if(f.value.length<10)b="Password must be at least 10 characters",m="#inp__text--password";else{const k={email:p.value,hash:Bt.neodigmUtils().genHash(f.value)};Se.doSignin(k,E=>{const y=(E?.entity?.tags||[]).find(P=>P.userName)?.userName||"";if(s.appSession.session_user.authenticated=!0,s.appSession.session_user.email=k.email,s.appSession.session_user.fname=E?.entity?.first,s.appSession.session_user.lname=E?.entity?.last,s.appSession.session_user.userName=y,s.appSession.session_user.name=y,s.appSession.session_user.guid=E?.entity?.guid,s.saveSessionUser(),s.appCLIFeatures.features.sse.state){const P=E?.entity?.guid||s.appSession.session_user.guid;Pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",P,s,!0)}})}b&&(c(m),neodigmToast.q(b,"danger"))};return $t(()=>{l(),i()}),(p,f)=>(Ye(),nt("div",jh,[f[10]||(f[10]=hs('<div class="auth-page-left" data-v-bdc22b93><div class="auth-bg" data-v-bdc22b93><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div><div class="auth-bg-image" data-v-bdc22b93></div></div><div class="auth-overlay" data-v-bdc22b93></div><div class="auth-branding-content" data-v-bdc22b93><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-bdc22b93><p class="auth-branding-tagline" data-v-bdc22b93>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-bdc22b93>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-bdc22b93> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",Yh,[H("div",Vh,[f[9]||(f[9]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title","data-sync-microcopy-text":"welcome_back"},"Welcome Back")],-1)),H("form",{class:"auth-form",onSubmit:Ua(u,["prevent"])},[H("div",Kh,[f[4]||(f[4]=H("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),H("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:f[0]||(f[0]=b=>d())},null,32)]),H("div",qh,[f[5]||(f[5]=H("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),H("div",Wh,[H("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password"},null,8,Jh),H("button",{type:"button",class:"password-toggle-btn",onClick:f[1]||(f[1]=b=>o()),tabindex:"-1"},[H("span",{class:Jt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),H("div",Xh,[H("a",{class:"auth-link",onClick:f[2]||(f[2]=b=>a("forgot_route")),"data-sync-microcopy-text":"forgot_password"},"Forgot Password?")]),f[8]||(f[8]=H("div",{class:"auth-actions"},[H("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_in"},"Sign In")],-1)),H("p",Qh,[f[6]||(f[6]=H("span",{"data-sync-microcopy-text":"dont_have_an_account"},"Don't have an account?",-1)),f[7]||(f[7]=Ss()),H("a",{class:"auth-link",onClick:f[3]||(f[3]=b=>a("signup_route")),"data-sync-microcopy-text":"sign_up"},"Sign Up")])],32)])])]))}},eg=es(Zh,[["__scopeId","data-v-bdc22b93"]]),tg={class:"auth-page"},sg={__name:"signout_route",setup(e){const t=Tt();_e();const s=()=>{mvvLegit.doSignout()},a=()=>{t.push({name:"home_route"})};return(n,r)=>(Ye(),nt("div",tg,[r[1]||(r[1]=hs('<div class="auth-page-left" data-v-119b5d43><div class="auth-bg" data-v-119b5d43><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div><div class="auth-bg-image" data-v-119b5d43></div></div><div class="auth-overlay" data-v-119b5d43></div><div class="auth-branding-content" data-v-119b5d43><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-119b5d43><p class="auth-branding-tagline" data-v-119b5d43>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-119b5d43>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-119b5d43> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",{class:"auth-page-right"},[H("div",{class:"auth-card"},[r[0]||(r[0]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title"},"Sign Out"),H("p",{class:"auth-subtitle"},"Confirm you want to sign out")],-1)),H("div",{class:"auth-actions"},[H("button",{onClick:s,class:"btn btn-red"}," Sign Out "),H("button",{onClick:a,class:"btn btn-outline"}," Cancel ")])])])]))}},ag=es(sg,[["__scopeId","data-v-119b5d43"]]),ng={class:"auth-page"},rg={class:"auth-page-right",style:{display:"block"}},og={class:"auth-card auth-card-wide"},ig={class:"form-group"},lg={class:"form-group"},cg={class:"form-group"},dg={class:"form-group"},ug={class:"form-group"},pg={class:"password-input-wrapper"},fg=["type"],hg={class:"form-group"},gg={class:"password-input-wrapper"},mg=["type"],bg={class:"form-group form-group-checkbox"},_g={class:"checkbox-label"},yg={class:"auth-link-center"},vg={__name:"signup_route",setup(e){const t=Tt(),s=_e(),a=(x="signin")=>{t.push({name:x})};let n=null,r=null;const o=Ze(!1),l=Ze(!1),i=Ze(!1),c=()=>{o.value=!o.value},d=()=>{l.value=!l.value},u=x=>{x.preventDefault(),re.publish(s.hierTopics.ROUTE__SIGNUP__TERMS,JSON.stringify({action:"open_and_accept",timestamp:Date.now()}))},p=(x=3,y=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":x=3,y=1;break;case"white_label":x=3,y=4;break}const P=Math.floor(Math.random()*x)+y,M=document.querySelector(".img__bg")?.classList;M&&(M.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),M.add(`img__bg--${P}`)),n||(n=re.subscribe("APP__ROUTE_SYNC",(R,w)=>{const g=JSON.parse(w);switch(Object.keys(g)[0]){case"Motif":p();break;case"Lang":f();break}}))},f=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(x=>{const y=s.appCLIFeatures?.features?.lang?.state;let P=s.appMeta.microcopy.language.filter(M=>M.code==y)[0]?.copy;P=P.filter(M=>M[0]==x.dataset.syncMicrocopyText)[0],P&&(x.textContent=P[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(x=>{const y=s.appCLIFeatures?.features?.lang?.state;let P=s.appMeta.microcopy.language.filter(M=>M.code==y)[0]?.copy;P=P.filter(M=>M[0]==x.dataset.syncMicrocopyPlaceholder)[0],P&&(x.placeholder=P[1])})},b=x=>{Bt.neodigmUtils().shake(x||"#inp__text--email")},m=()=>{let x=document.querySelectorAll("#inp__text--email")[0].value;s.doCLI(x)},k=x=>{const y=[];return x.length<10&&y.push("at least 10 characters"),/[a-z]/.test(x)||y.push("1 lowercase"),/[A-Z]/.test(x)||y.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(x)||y.push("1 special character"),/[^\x00-\x7F]/.test(x)&&y.push("ASCII characters only"),y},E=async()=>{const x=document.querySelector("#inp__text--username"),y=x?.value?.trim();if(y)try{(await Se.checkUserName(y)).userNameExists&&(neodigmToast.q("User name already taken|Please choose a different one","danger"),x.value="",x.focus())}catch(P){console.error("Error checking username:",P)}},A=()=>{const x=document.querySelector("#inp__text--first-name"),y=document.querySelector("#inp__text--last-name"),P=document.querySelector("#inp__text--email"),M=document.querySelector("#inp__text--username"),R=document.querySelector("#inp__text--password"),w=document.querySelector("#inp__text--verify-password");let g=null,h=null;if(!x?.value)g="Please enter your first name",h="#inp__text--first-name";else if(!y?.value)g="Please enter your last name",h="#inp__text--last-name";else if(!P?.value)g="Please enter your email",h="#inp__text--email";else if(P.value.indexOf("@")===-1||P.value.indexOf(".")===-1)g="Please enter a valid email address",h="#inp__text--email";else if(!M?.value)g="Please enter a user name",h="#inp__text--username";else if(!R?.value)g="Please enter a password",h="#inp__text--password";else{const T=k(R.value);if(T.length>0)g="Password must have:|"+T.join(", "),h="#inp__text--password";else if(!w?.value)g="Please verify your password",h="#inp__text--verify-password";else if(R.value!==w.value)g="Passwords do not match",h="#inp__text--verify-password";else{const _=x.value.trim(),C=y.value.trim(),B=[{userName:M.value.trim(),ts:Date.now()}],K={email:P.value,hash:Bt.neodigmUtils().genHash(R.value),first:_,last:C,company:"",phone:"",tags:B};Se.doSignup(K,V=>{V.ok&&setTimeout(()=>{mvvLegit.doUNVERF()},1e3)})}}g&&(b(h),neodigmToast.q(g,"danger"))};return $t(()=>{p(),f(),r||(r=re.subscribe(s.hierTopics.ROUTE__SIGNUP__TERMS,(x,y)=>{JSON.parse(y).action==="open_and_accept"&&(neodigmSodaPop.autoOpen("sodapop_terms"),i.value=!0)}))}),(x,y)=>(Ye(),nt("div",ng,[y[23]||(y[23]=hs('<div class="auth-page-left" data-v-3a55bbf1><div class="auth-bg" data-v-3a55bbf1><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div><div class="auth-bg-image" data-v-3a55bbf1></div></div><div class="auth-overlay" data-v-3a55bbf1></div><div class="auth-branding-content" data-v-3a55bbf1><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-3a55bbf1><p class="auth-branding-tagline" data-v-3a55bbf1>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-3a55bbf1>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-3a55bbf1> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",rg,[H("div",og,[H("form",{class:"auth-form",onSubmit:Ua(A,["prevent"])},[H("div",ig,[y[12]||(y[12]=H("label",{for:"inp__text--first-name","data-sync-microcopy-text":"first_name"},"First Name",-1)),H("input",{id:"inp__text--first-name",type:"text","data-sync-microcopy-placeholder":"enter_your_first_name",placeholder:"Enter your first name",onKeyup:y[0]||(y[0]=Ct(P=>A(),["enter"]))},null,32)]),H("div",lg,[y[13]||(y[13]=H("label",{for:"inp__text--last-name","data-sync-microcopy-text":"last_name"},"Last Name",-1)),H("input",{id:"inp__text--last-name",type:"text","data-sync-microcopy-placeholder":"enter_your_last_name",placeholder:"Enter your last name",onKeyup:y[1]||(y[1]=Ct(P=>A(),["enter"]))},null,32)]),H("div",cg,[y[14]||(y[14]=H("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),H("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onDblclick:y[2]||(y[2]=P=>m()),onKeyup:y[3]||(y[3]=Ct(P=>A(),["enter"]))},null,32)]),H("div",dg,[y[15]||(y[15]=H("label",{for:"inp__text--username","data-sync-microcopy-text":"username"},"Username",-1)),H("input",{id:"inp__text--username",type:"text","data-sync-microcopy-placeholder":"enter_your_username",placeholder:"Enter your username",onBlur:y[4]||(y[4]=P=>E()),onKeyup:y[5]||(y[5]=Ct(P=>A(),["enter"]))},null,32)]),H("div",ug,[y[16]||(y[16]=H("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),H("div",pg,[H("input",{id:"inp__text--password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:y[6]||(y[6]=Ct(P=>A(),["enter"]))},null,40,fg),H("button",{type:"button",class:"password-toggle-btn",onClick:y[7]||(y[7]=P=>c()),tabindex:"-1"},[H("span",{class:Jt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),y[17]||(y[17]=H("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),H("div",hg,[y[18]||(y[18]=H("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),H("div",gg,[H("input",{id:"inp__text--verify-password",type:l.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:y[8]||(y[8]=Ct(P=>A(),["enter"]))},null,40,mg),H("button",{type:"button",class:"password-toggle-btn",onClick:y[9]||(y[9]=P=>d()),tabindex:"-1"},[H("span",{class:Jt(l.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),H("div",bg,[H("label",_g,[vc(H("input",{type:"checkbox",id:"inp__checkbox--terms","onUpdate:modelValue":y[10]||(y[10]=P=>i.value=P),class:"terms-checkbox"},null,512),[[Zd,i.value]]),y[19]||(y[19]=H("span",{"data-sync-microcopy-text":"agree_to"},"Agree to",-1)),H("a",{href:"#",class:"terms-link","data-sync-microcopy-text":"terms",onClick:u},"Terms")])]),y[22]||(y[22]=H("div",{class:"auth-actions"},[H("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"sign_up"},"Sign Up")],-1)),H("p",yg,[y[20]||(y[20]=H("span",{"data-sync-microcopy-text":"already_have_an_account"},"Already have an account?",-1)),y[21]||(y[21]=Ss()),H("a",{class:"auth-link",onClick:y[11]||(y[11]=P=>a("signin_route")),"data-sync-microcopy-text":"log_in"},"Sign In")])],32)])])]))}},wg=es(vg,[["__scopeId","data-v-3a55bbf1"]]),xg={class:"auth-page"},Tg={class:"auth-page-right"},Sg={class:"auth-card"},Eg={class:"form-group"},kg={class:"auth-link-center"},Ag={__name:"forgot_route",setup(e){const t=Tt(),s=_e(),a=(c="signin_route")=>{t.push({name:c})};let n=null;const r=(c=3,d=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":c=3,d=1;break;case"white_label":c=3,d=4;break}const u=Math.floor(Math.random()*c)+d,p=document.querySelector(".img__bg")?.classList;p&&(p.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),p.add(`img__bg--${u}`)),n||(n=re.subscribe("APP__ROUTE_SYNC",(f,b)=>{const m=JSON.parse(b);switch(Object.keys(m)[0]){case"Motif":r();break;case"Lang":o();break}}))},o=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyText)[0],u&&(c.textContent=u[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(c=>{const d=s.appCLIFeatures?.features?.lang?.state;let u=s.appMeta.microcopy.language.filter(p=>p.code==d)[0]?.copy;u=u.filter(p=>p[0]==c.dataset.syncMicrocopyPlaceholder)[0],u&&(c.placeholder=u[1])})},l=c=>{Bt.neodigmUtils().shake(c||"#inp__text--email")},i=()=>{const c=document.querySelector("#inp__text--email");let d=null,u=null;if(!c?.value)d="Please enter your email address",u="#inp__text--email";else if(c.value.indexOf("@")===-1||c.value.indexOf(".")===-1)d="Please enter a valid email address",u="#inp__text--email";else{const p={method:"GET",headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/forgot?CODE="+encodeURIComponent(c.value),p).then(f=>f.json()).then(f=>{f.ok?(neodigmToast.q("Password reset email sent!|Please check your inbox","success"),setTimeout(()=>{a("verf_link_route")},2e3)):neodigmToast.q("Failed to send reset email|Please try again","danger")}).catch(f=>{neodigmToast.q("An error occurred|Please try again","danger")});return}d&&(l(u),neodigmToast.q(d,"danger"))};return $t(()=>{r(),o()}),(c,d)=>(Ye(),nt("div",xg,[d[7]||(d[7]=hs('<div class="auth-page-left"><div class="auth-bg"><div class="auth-bg-image"></div><div class="auth-bg-image"></div><div class="auth-bg-image"></div></div><div class="auth-overlay"></div><div class="auth-branding-content"><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img"><p class="auth-branding-tagline">Daily Tournament Betting</p><p class="auth-branding-subtitle">Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer"> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",Tg,[H("div",Sg,[d[6]||(d[6]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title","data-sync-microcopy-text":"forgot_password"},"Forgot Password"),H("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_email"},"Please enter your email to receive a password reset link")],-1)),H("form",{class:"auth-form",onSubmit:Ua(i,["prevent"])},[H("div",Eg,[d[2]||(d[2]=H("label",{for:"inp__text--email","data-sync-microcopy-text":"email"},"Email",-1)),H("input",{id:"inp__text--email",type:"text","data-sync-microcopy-placeholder":"enter_your_email",placeholder:"Enter your email",onKeyup:d[0]||(d[0]=Ct(u=>i(),["enter"]))},null,32)]),d[5]||(d[5]=H("div",{class:"auth-actions"},[H("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"send_reset_link"},"Send Reset Link")],-1)),H("p",kg,[d[3]||(d[3]=H("span",{"data-sync-microcopy-text":"remember_your_password"},"Remember your password?",-1)),d[4]||(d[4]=Ss()),H("a",{class:"auth-link",onClick:d[1]||(d[1]=u=>a("signin_route")),"data-sync-microcopy-text":"sign_in"},"Sign In")])],32)])])]))}},Pg={class:"auth-page"},Og={class:"auth-page-right"},Cg={class:"auth-card"},Lg={class:"form-group"},Rg={class:"password-input-wrapper"},Mg=["type"],Dg={class:"form-group"},Ig={class:"password-input-wrapper"},Ng=["type"],Bg={__name:"resethash_route",setup(e){const t=Tt(),s=_e(),a=()=>{t.push({name:"home_route"})};let n=null;const r=Ze(!1),o=Ze(!1),l=()=>{r.value=!r.value},i=()=>{o.value=!o.value},c=(b=3,m=1)=>{switch(s.appCLIFeatures.features.motif.state){case"brand":b=3,m=1;break;case"white_label":b=3,m=4;break}const k=Math.floor(Math.random()*b)+m,E=document.querySelector(".img__bg")?.classList;E&&(E.remove("img__bg--1","img__bg--2","img__bg--3","img__bg--4","img__bg--5","img__bg--6"),E.add(`img__bg--${k}`)),n||(n=re.subscribe("APP__ROUTE_SYNC",(A,x)=>{const y=JSON.parse(x);switch(Object.keys(y)[0]){case"Motif":c();break;case"Lang":d();break}}))},d=()=>{Array.from(document.querySelectorAll("[data-sync-microcopy-text]")).forEach(b=>{const m=s.appCLIFeatures?.features?.lang?.state;let k=s.appMeta.microcopy.language.filter(E=>E.code==m)[0]?.copy;k=k.filter(E=>E[0]==b.dataset.syncMicrocopyText)[0],k&&(b.textContent=k[1])}),Array.from(document.querySelectorAll("[data-sync-microcopy-placeholder]")).forEach(b=>{const m=s.appCLIFeatures?.features?.lang?.state;let k=s.appMeta.microcopy.language.filter(E=>E.code==m)[0]?.copy;k=k.filter(E=>E[0]==b.dataset.syncMicrocopyPlaceholder)[0],k&&(b.placeholder=k[1])})},u=b=>{Bt.neodigmUtils().shake(b||"#inp__text--password")},p=b=>{const m=[];return b.length<10&&m.push("at least 10 characters"),/[a-z]/.test(b)||m.push("1 lowercase"),/[A-Z]/.test(b)||m.push("1 uppercase"),/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(b)||m.push("1 special character"),/[^\x00-\x7F]/.test(b)&&m.push("ASCII characters only"),m},f=()=>{const b=document.querySelector("#inp__text--password"),m=document.querySelector("#inp__text--verify-password");let k=null,E=null;if(!b?.value)k="Please enter a password",E="#inp__text--password";else{const A=p(b.value);if(A.length>0)k="Password must have:|"+A.join(", "),E="#inp__text--password";else if(!m?.value)k="Please verify your password",E="#inp__text--verify-password";else if(b.value!==m.value)k="Passwords do not match",E="#inp__text--verify-password";else{const x=s.appSession.session_user.email||"",y={email:x,hash:Bt.neodigmUtils().genHash(b.value),modified_by:x},P={method:"POST",body:JSON.stringify(y),headers:Se.genHeaders()};fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/acctEntity/resetHash",P).then(M=>M.json()).then(M=>{M.ok?(neodigmToast.q("Password reset successful!|Signing you out...","success"),setTimeout(()=>{mvvLegit.doSignout()},4e3)):neodigmToast.q("Password reset failed|Please try again","danger")}).catch(M=>{neodigmToast.q("An error occurred|Please try again","danger")});return}}k&&(u(E),neodigmToast.q(k,"danger"))};return $t(()=>{c(),d()}),(b,m)=>(Ye(),nt("div",Pg,[m[9]||(m[9]=hs('<div class="auth-page-left" data-v-cef3f735><div class="auth-bg" data-v-cef3f735><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div><div class="auth-bg-image" data-v-cef3f735></div></div><div class="auth-overlay" data-v-cef3f735></div><div class="auth-branding-content" data-v-cef3f735><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-cef3f735><p class="auth-branding-tagline" data-v-cef3f735>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-cef3f735>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-cef3f735> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",Og,[H("div",Cg,[m[8]||(m[8]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title","data-sync-microcopy-text":"reset_password"},"Reset Password"),H("p",{class:"auth-subtitle","data-sync-microcopy-text":"please_enter_your_new_password"},"Please enter your new password")],-1)),H("form",{class:"auth-form",onSubmit:Ua(f,["prevent"])},[H("div",Lg,[m[4]||(m[4]=H("label",{for:"inp__text--password","data-sync-microcopy-text":"password"},"Password",-1)),H("div",Rg,[H("input",{id:"inp__text--password",type:r.value?"text":"password","data-sync-microcopy-placeholder":"enter_your_password",placeholder:"Enter your password",onKeyup:m[0]||(m[0]=Ct(k=>f(),["enter"]))},null,40,Mg),H("button",{type:"button",class:"password-toggle-btn",onClick:m[1]||(m[1]=k=>l()),tabindex:"-1"},[H("span",{class:Jt(r.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])]),m[5]||(m[5]=H("small",{"data-sync-microcopy-text":"must_be_at_least_10_characters_long"},"Must be at least 10 characters long",-1))]),H("div",Dg,[m[6]||(m[6]=H("label",{for:"inp__text--verify-password","data-sync-microcopy-text":"verify_password"},"Verify Password",-1)),H("div",Ig,[H("input",{id:"inp__text--verify-password",type:o.value?"text":"password","data-sync-microcopy-placeholder":"re_enter_your_password",placeholder:"Re-enter your password",onKeyup:m[2]||(m[2]=Ct(k=>f(),["enter"]))},null,40,Ng),H("button",{type:"button",class:"password-toggle-btn",onClick:m[3]||(m[3]=k=>i()),tabindex:"-1"},[H("span",{class:Jt(o.value?"eye-icon eye-icon--visible":"eye-icon eye-icon--hidden")},null,2)])])]),H("div",{class:"auth-actions"},[m[7]||(m[7]=H("button",{type:"submit",class:"btn btn-gold","data-sync-microcopy-text":"reset_password"},"Reset Password",-1)),H("button",{type:"button",onClick:a,class:"btn btn-outline"}," Cancel ")])],32)])])]))}},Fg=es(Bg,[["__scopeId","data-v-cef3f735"]]),$g={class:"auth-page"},zg={class:"auth-page-right"},Hg={class:"auth-card"},Ug={class:"verification-content"},Gg={class:"timer-display"},jg={__name:"verf_link_route",setup(e){const t=Tt();gl(),_e();const s=Ze(7200);let a=null;const n=o=>{const l=Math.floor(o/3600),i=Math.floor(o%3600/60),c=o%60;return`${l.toString().padStart(2,"0")}:${i.toString().padStart(2,"0")}:${c.toString().padStart(2,"0")}`},r=()=>{a=setInterval(()=>{s.value--,s.value<=0&&(clearInterval(a),neodigmWired4Sound.sound(14),t.push({name:"splash_route"}))},1e3)};return $t(()=>{r()}),Fa(()=>{a&&clearInterval(a)}),(o,l)=>(Ye(),nt("div",$g,[l[4]||(l[4]=hs('<div class="auth-page-left" data-v-f5b4a3c8><div class="auth-bg" data-v-f5b4a3c8><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div><div class="auth-bg-image" data-v-f5b4a3c8></div></div><div class="auth-overlay" data-v-f5b4a3c8></div><div class="auth-branding-content" data-v-f5b4a3c8><img src="https://bma-master.github.io/bma-core/img/BMT-White-Primary-.png" alt="BMA Logo" class="auth-logo-img" data-v-f5b4a3c8><p class="auth-branding-tagline" data-v-f5b4a3c8>Daily Tournament Betting</p><p class="auth-branding-subtitle" data-v-f5b4a3c8>Win Big. Play Smart. Compete Daily.</p></div><div class="auth-branding-footer" data-v-f5b4a3c8> © 2026 Bet Max Action. All rights reserved. </div></div>',1)),H("div",zg,[H("div",Hg,[l[3]||(l[3]=H("div",{class:"auth-header"},[H("h1",{class:"auth-title"},"Check Your Email"),H("p",{class:"auth-subtitle"},"A verification link has been sent to the email address you provided.")],-1)),H("div",Ug,[l[0]||(l[0]=H("p",{class:"verification-instructions"},"Please click on that link to continue.",-1)),l[1]||(l[1]=H("p",{class:"verification-note"},"The link will expire in 2 hours.",-1)),l[2]||(l[2]=H("p",{class:"verification-note"},"Remember to check your spam folder.",-1)),H("div",Gg,Go(n(s.value)),1)])])])]))}},Yg=es(jg,[["__scopeId","data-v-f5b4a3c8"]]),Hn=wp({history:ep(),routes:[{path:"/",name:"splash_route",component:Eo},{path:"/splash_route",name:"splash_route",component:Eo},{path:"/error_route",name:"error_route",component:ca},{path:"/forgot_route",name:"forgot_route",component:Ag},{path:"/resetforgot_route",name:"resetforgot_route",component:ca},{path:"/resethash_route",name:"resethash_route",component:Fg},{path:"/signin_route",name:"signin_route",component:eg},{path:"/signout_route",name:"signout_route",component:ag},{path:"/signup_route",name:"signup_route",component:wg},{path:"/verf_link_route",name:"verf_link_route",component:Yg},{path:"/offline_route",name:"offline_route",component:ca},{path:"/home_route",name:"home_route",component:Fh},{path:"/appFAQ",name:"appFAQ",component:ca},{path:"/appHelp",name:"appHelp",component:Gh}]});class Vg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this._countdownInterval=null}static get observedAttributes(){return["data-bma-tourn-guid","data-bma-tourn-caption","data-bma-tourn-tagline","data-bma-tourn-status","data-bma-tourn-class","data-bma-tourn-sports_allowed","data-bma-tourn-entities","data-bma-tourn-entry_fee","data-bma-tourn-tournament_dollars","data-bma-tourn-matches","data-bma-tourn-tags","data-bma-tourn-window_start_time","data-bma-tourn-window_end_time","data-user-rank","data-user-total","data-user-td-balance","data-user-bets","data-user-payout","data-sync-theme"]}connectedCallback(){this.render(),this.attachEventListeners(),this._startCountdown(),this._unsub=Ae.subscribe(()=>{this.render(),this.attachEventListeners()})}disconnectedCallback(){this._unsub&&this._unsub(),this._clearCountdown()}attributeChangedCallback(t,s,a){s!==a&&this.shadowRoot&&(this.render(),this.attachEventListeners())}get guid(){return this.getAttribute("data-bma-tourn-guid")||""}get caption(){return this.getAttribute("data-bma-tourn-caption")||"Tournament"}get tagline(){return this.getAttribute("data-bma-tourn-tagline")||""}get status(){return(this.getAttribute("data-bma-tourn-status")||"UPCOMING").toUpperCase()}get tournClass(){return(this.getAttribute("data-bma-tourn-class")||this.status).toUpperCase()}get sportsAllowed(){try{const t=this.getAttribute("data-bma-tourn-sports_allowed");return t?JSON.parse(t):[]}catch{return[]}}get entities(){try{const t=this.getAttribute("data-bma-tourn-entities"),s=t?JSON.parse(t):{guids:[],max:0};return{current:Array.isArray(s)?s[1]?.length||0:s.guids?.length||0,max:Array.isArray(s)?parseInt(s[0]?.max||0):s.max||0}}catch{return{current:0,max:0}}}get entryFee(){const t=this.getAttribute("data-bma-tourn-entry_fee");return!t||t==="0"||t==="0.00"?"Free":`$${t}`}get tournamentDollars(){return this.getAttribute("data-bma-tourn-tournament_dollars")||"0"}get matches(){return this.getAttribute("data-bma-tourn-matches")||"0"}get userRank(){return this.getAttribute("data-user-rank")||"-"}get userTotal(){return this.getAttribute("data-user-total")||"-"}get userTDBalance(){return this.getAttribute("data-user-td-balance")||"0"}get userBets(){return this.getAttribute("data-user-bets")||"0"}get userPayout(){return this.getAttribute("data-user-payout")||"0"}get windowStartTime(){return this.getAttribute("data-bma-tourn-window_start_time")||""}get windowEndTime(){return this.getAttribute("data-bma-tourn-window_end_time")||""}get theme(){return Ae.theme}isUserParticipating(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return!1;try{const a=this.getAttribute("data-bma-tourn-entities"),n=a?JSON.parse(a):{guids:[]};return(Array.isArray(n)?n[1]||[]:n.guids||[]).includes(s)}catch{return!1}}getUserTrophy(){const s=document.getElementById("app")?.dataset?.userGuid;if(!s)return null;try{const a=JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]");for(const n of a){if(typeof n!="object"||!n)continue;let r=null;if(n.entity_guid===s&&n.badge?r=n.badge:n[s]&&(r=n[s]),r?.includes("gold"))return"gold";if(r?.includes("silver"))return"silver";if(r?.includes("bronze"))return"bronze"}}catch{}return null}getCountdown(){const t=this.status==="UPCOMING"?this.windowStartTime:this.status==="LOCKED"?this.windowEndTime:null;if(!t)return null;let s=new Date(t);!t.includes("Z")&&!t.match(/[+-]\d{2}:\d{2}$/)&&(s=new Date(t+"Z"));const a=Date.now(),n=s.getTime()-a;if(n<=0)return null;const r=Math.floor(n/864e5),o=Math.floor(n%864e5/36e5),l=Math.floor(n%36e5/6e4);return r>0?`${r}d ${o}h`:o>0?`${o}h ${l}m`:`${l}m`}_startCountdown(){this._clearCountdown(),(this.status==="UPCOMING"||this.status==="LOCKED")&&(this._countdownInterval=setInterval(()=>{const t=this.shadowRoot?.querySelector(".ring__countdown");if(t){const s=this.getCountdown();t.textContent=s||"",s||(t.style.display="none")}},6e4))}_clearCountdown(){this._countdownInterval&&(clearInterval(this._countdownInterval),this._countdownInterval=null)}getSportsDisplay(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},s=this.sportsAllowed;if(!Array.isArray(s)||s.length===0)return'<bma-sport-icon sport="default" data-sport-group="default" style="width:20px;height:20px;"></bma-sport-icon>';const a=Math.min(s.length,3);let n="";for(let r=0;r<a;r++){const o=s[r].key||s[r],l=it.find(d=>d.key===o),i=l?l.group:"default",c=t[o]||o.replace(/^[a-z]+_/,"").toUpperCase();n+=`<span class="lc__sport-item"><bma-sport-icon sport="${o}" data-sport-group="${i}" style="width:20px;height:20px;"></bma-sport-icon><span class="lc__sport-label">${c}</span></span>`}return s.length>3&&(n+=`<span class="lc__sport-count" data-sport-overflow="true">+${s.length-3}</span>`),n}getSportsFullList(){const t={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"};return this.sportsAllowed.map(s=>{const a=s.key||s;return t[a]||a.replace(/^[a-z]+_/,"").toUpperCase()}).join(", ")}buildRing(t,s,a,n){const r=(t-s)/2,o=2*Math.PI*r,l=o-a/100*o,i=t/2;return`<svg class="ring__svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
            <circle cx="${i}" cy="${i}" r="${r}"
                fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="${s}" />
            <circle cx="${i}" cy="${i}" r="${r}"
                fill="none" stroke="${n}" stroke-width="${s}"
                stroke-linecap="round"
                stroke-dasharray="${o}"
                stroke-dashoffset="${l}"
                transform="rotate(-90 ${i} ${i})"
                style="transition: stroke-dashoffset 0.6s ease;" />
        </svg>`}dispatchAction(t){this.dispatchEvent(new CustomEvent("bma-tournament-action",{bubbles:!0,composed:!0,detail:{action:t,tournamentGuid:this.guid,tournamentId:this.guid,tournamentStatus:this.status,timestamp:Date.now()}}))}attachEventListeners(){this.shadowRoot.querySelectorAll("[data-action]").forEach(s=>{s.addEventListener("click",a=>{a.stopPropagation(),this.dispatchAction(s.dataset.action)})});const t=this.shadowRoot.querySelector("[data-sport-overflow]");t&&t.addEventListener("click",s=>{s.stopPropagation();const a=this.getSportsFullList();typeof neodigmToast<"u"&&neodigmToast.q(a,"info")})}render(){const t=this.isUserParticipating(),s=this.getUserTrophy(),a=this.status.toLowerCase(),n=t&&this.status!=="COMPLETED",r=!t&&this.status==="UPCOMING";this.userRank;const o=(this.entities.current/(this.entities.max||1)*100).toFixed(1);this.getCountdown();const i={upcoming:"#00E676",locked:"#F7C60D",completed:"#CD5659"}[a]||"#969696",c=52,d=3,u=E=>E.length>7?"sm":E.length>5?"md":"lg",p=`${this.entities.current}/${this.entities.max}`,f=u(p);let b="";s?b=`<span class="ring__trophy ring__trophy--${s}"></span>`:b=`<span class="ring__entrants ring__entrants--${f}">${this.entities.current}<span class="ring__entrants-sep">/</span>${this.entities.max}</span>`;const k=parseFloat(this.tournamentDollars).toLocaleString();this.shadowRoot.innerHTML=`
            <style>
                ${ot()}
                ${ts()}

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
                            ${this.buildRing(c,d,parseFloat(o),i)}
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
                        ${n?`<button class="lc__btn lc__btn--play" data-action="PLAY" aria-label="Play">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
                            Play
                        </button>`:""}
                        ${r?`<button class="lc__btn lc__btn--join" data-action="JOIN" aria-label="Join">
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
                        <div class="lc__stat-val">${this.matches==0?"TBD":this.matches+(()=>{try{return JSON.parse(this.getAttribute("data-bma-tourn-tags")||"[]").some(A=>A.override_last_match_close===!0)?"+":""}catch{return""}})()}</div>
                        <div class="lc__stat-label">Games</div>
                    </div>
                    <div class="lc__stat">
                        <div class="lc__stat-val">${this.entities.current}/${this.entities.max}</div>
                        <div class="lc__progress-bar">
                            <div class="lc__progress-fill" style="width: ${o}%; background: ${i};"></div>
                        </div>
                        <div class="lc__stat-label">Entrants</div>
                    </div>
                    <div class="lc__stat">
                        <div class="lc__stat-val lc__stat-val--accent">${k}</div>
                        <div class="lc__stat-label">Starting TD$</div>
                    </div>
                </div>

                <!-- Footer: Sports + Status -->
                <div class="lc__foot">
                    <div class="lc__sports">${this.getSportsDisplay()}</div>
                    <div class="lc__badges">
                        <span class="lc__status lc__status--${a}">${this.status==="LOCKED"?"IN PROGRESS":this.status==="UPCOMING"?"OPEN":this.status}</span>
                    </div>
                </div>
            </div>
        `}}customElements.define("bma-tournament-list-card",Vg);const Le={updateTDBalance(e,t){const s=document.querySelector(e);if(!s)return;t%1!==0?s.textContent=t.toFixed(2):neodigmUtils.countTo(e,t)},updateSummaryAndDashboard(e,t,s,a=null,n=0){const r=document.querySelector("#summary-balance"),o=document.querySelector("#summary-stake"),l=document.querySelector("#summary-payout");r&&(this.updateTDBalance("#summary-balance",e),e<0?r.classList.add("summary-cell__red"):r.classList.remove("summary-cell__red")),o&&(o.textContent=t.toFixed(2)),l&&(l.textContent=s.toFixed(2),s<0?l.classList.add("summary-cell__red"):l.classList.remove("summary-cell__red"));const i=document.getElementById("dashboard-td-balance"),c=document.getElementById("dashboard-td-pending");if(i){let d="";if(a){const p=a.tournament_dollars||0,f=e-p;f>0?d=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${f.toLocaleString()})</span>`:f<0&&(d=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${f.toLocaleString()})</span>`)}const u=e<0?"#FF5252":"#00E676";i.innerHTML=`<span style="color: ${u};">TD$ ${e.toLocaleString()}</span>${d}`}if(c){const d=n||s||0;let u="";d>0&&(u=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(→${d.toLocaleString()})</span>`),c.innerHTML=`TD$ ${t.toLocaleString()}${u}`}if(a&&a.tournament_dollars){const d=a.tournament_dollars,u=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(u){const f=Math.max(e/d*100,0);u.style.width=`${f}%`}const p=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(p){const f=Math.min(t/d*100,100);p.style.width=`${f}%`}}},categorizeTournaments(e,t,s,a,n={}){const r=[],{subStatus:o="all",sort:l="default",result:i="all",odds:c="all"}=n,d=R=>(R.entities?.guids||[]).includes(a),u=R=>R.status==="UPCOMING"||R.class==="UPCOMING",p=R=>R.status==="LOCKED"||R.class==="LOCKED",f=R=>u(R)||p(R),b=R=>R.status==="COMPLETED"||R.class==="COMPLETED",m=R=>Array.isArray(R.matches_expanded)&&R.matches_expanded.length>0,k=(R,w)=>(R.sports_allowed||[]).some(g=>g.key===w),E=R=>it.find(w=>w.key===R)?.title||R,A=R=>{const w=R.tags||[];for(const g of w)if(!(typeof g!="object"||!g)&&(g.entity_guid===a&&g.badge||g[a]))return!0;return!1},x=R=>{if(l==="default")return R;const w=[...R];switch(l){case"starting_soon":w.sort((g,h)=>new Date(g.window_start_time||0)-new Date(h.window_start_time||0));break;case"most_entrants":w.sort((g,h)=>(h.entities?.guids?.length||0)-(g.entities?.guids?.length||0));break;case"fewest_spots":w.sort((g,h)=>{const T=(g.entities?.max||0)-(g.entities?.guids?.length||0),_=(h.entities?.max||0)-(h.entities?.guids?.length||0);return T-_});break;case"recently_active":w.sort((g,h)=>new Date(h.status_time||0)-new Date(g.status_time||0));break;case"newest":w.sort((g,h)=>new Date(h.status_time||0)-new Date(g.status_time||0));break;case"td_high":w.sort((g,h)=>parseFloat(h.tournament_dollars||0)-parseFloat(g.tournament_dollars||0));break;case"td_low":w.sort((g,h)=>parseFloat(g.tournament_dollars||0)-parseFloat(h.tournament_dollars||0));break}return w},y=R=>i==="all"?R:i==="trophy"?R.filter(w=>A(w)):i==="no_trophy"?R.filter(w=>!A(w)):R;let P=e,M="";if(s==="multi"?(P=e.filter(R=>(R.sports_allowed?.length||0)>1),M="Multi-Sport "):s!=="all"&&(P=e.filter(R=>k(R,s)),M=E(s)+" "),t==="lobby"){let R=P;if(o==="open"?R=P.filter(w=>u(w)):o==="locked"?R=P.filter(w=>p(w)):o==="completed"&&(R=P.filter(w=>b(w))),o==="all"){const w=x(R.filter(T=>u(T)&&!d(T)));r.push({title:`Open Entry ${M}Tournaments`,tournaments:w});const g=x(R.filter(T=>p(T)&&!d(T)));g.length>0&&r.push({title:`In Progress - Entry Closed ${M}Tournaments`,tournaments:g});const h=x(R.filter(T=>b(T))).slice(0,20);h.length>0&&r.push({title:`Recently Completed ${M}Tournaments`,tournaments:h})}else{const w=x(R),g={open:"Open",locked:"In Progress",completed:"Completed"};w.length>0&&r.push({title:`${g[o]} ${M}Tournaments`,tournaments:w})}}else if(t==="my"){const R=P.filter(_=>d(_));let w=R.filter(_=>f(_));o==="active"?w=w.filter(_=>p(_)):o==="upcoming"&&(w=w.filter(_=>u(_))),c==="available"?w=w.filter(_=>m(_)):c==="none"&&(w=w.filter(_=>!m(_)));const g=x(w);r.push({title:`Your Active ${M}Tournaments`,tournaments:g});const h=y(R.filter(_=>b(_))),T=x(h);T.length>0&&r.push({title:`Your Completed ${M}Tournaments`,tournaments:T})}else if(t==="completed"){const R=x(y(P.filter(g=>d(g)&&b(g))));R.length>0&&r.push({title:`Your Completed ${M}Tournaments`,tournaments:R});const w=x(P.filter(g=>!d(g)&&b(g)));w.length>0&&r.push({title:`Other Completed ${M}Tournaments`,tournaments:w})}else r.push({title:"Tournaments",tournaments:e});return r},updateTournamentDashboard(e){if(!e)return;console.log("[Dashboard Update] Starting dashboard update for:",e.caption);const t=_e();t.appSession?.session_user?.guid;const s=e.tournament_dollars||1e4;let a=0,n=0,r=0;if(t.coreBetSlip&&t.coreBetSlip.length>0){const m=t.coreBetSlip[t.coreBetSlip.length-1].data.filter(k=>k.tournament_guid===e.guid);console.log("[Dashboard Update] Found",m.length,"existing bets for this tournament"),m.forEach(k=>{(k.bet||[]).forEach(A=>{Object.keys(A).filter(y=>y!=="short_title").forEach(y=>{const P=A[y];P&&(P.stake&&(a+=parseFloat(P.stake)),P.reconciled===!0&&P.payout>0&&(n+=parseFloat(P.payout)))})})})}const o=document.querySelector("#summary-stake");if(o){const b=parseFloat(o.textContent)||0;r=Math.max(0,b-a),console.log("[Dashboard Update] Summary total stakes:",b,"Pending:",r)}const l=a+r,i=s-a-r+n;console.log("[Dashboard Update] TD$:",s,"Committed:",a,"Pending:",r,"Payouts:",n,"=> Balance:",i);const c=document.getElementById("dashboard-td-balance");if(c){const b=i-s;let m="";b>0?m=`<span style="display: block; color: var(--status-upcoming-text, #00E676); font-size: 0.6em; margin-top: 2px;">(+${b.toLocaleString()})</span>`:b<0&&(m=`<span style="display: block; color: var(--status-locked-text, #F7C60D); font-size: 0.6em; margin-top: 2px;">(${b.toLocaleString()})</span>`);const k=i<0?"#FF5252":"#00E676";c.innerHTML=`<span style="color: ${k};">TD$ ${i.toLocaleString()}</span>${m}`}const d=document.getElementById("dashboard-td-pending"),u=document.querySelector(".tourn-dashboard__gauge-fill--pending");if(d){const b=r>0?r:l,m=n||0;let k="";if(m>0&&(k=` <span style="color: var(--status-upcoming-text, #00E676); font-size: 0.7em;">(→${m.toLocaleString()})</span>`),d.innerHTML=`TD$ ${b.toLocaleString()}${k}`,u){const E=Math.min(b/s*100,100);u.style.width=`${E}%`}}const p=document.querySelector(".tourn-dashboard__gauge-fill--balance");if(p){const b=Math.max(i/s*100,0);p.style.width=`${b}%`}const f=document.querySelector(".tourn-dashboard__gauge-fill--participants");if(f&&e){const b=e.entities?.guids?.length||0,m=e.entities?.max||100,k=b/m*100;f.style.width=`${k}%`}},renderMatchCards(e){if(!e)return;const t=document.querySelector(".select-grid");if(!t)return;if(t.innerHTML="",!e.matches_expanded||!Array.isArray(e.matches_expanded)||e.matches_expanded.length===0){t.innerHTML=`<div style="grid-column: 1 / -1; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 60vh; padding: 48px 24px; gap: 16px; text-align: center; animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="rgba(255,255,255,0.35)">
                    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                </svg>
                <p style="font-size: 1.05rem; font-weight: 700; color: rgba(255,255,255,0.85); margin: 0;">Check back soon for when matches are added!</p>
                <p style="font-size: 0.85rem; color: rgba(255,255,255,0.55); margin: 0; max-width: 320px;">Game lines drop a few days before each matchup</p>
            </div>`;return}const s=new Date,a=[...e.matches_expanded].sort((r,o)=>{const l=new Date(r.scheduled_at),i=new Date(o.scheduled_at),c=l<s,d=i<s;return c&&!d?1:!c&&d?-1:l-i}),n=()=>{const o=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let l=0;o&&_e().coreTourn.length>0&&(l=_e().coreTourn[_e().coreTourn.length-1].data.find(b=>b.guid===o)?.tournament_dollars||0);const i=document.querySelector(".bet-grid__slip-BETSLIP-content"),c=i?i.querySelectorAll("bma-bet-entry"):[],d=Array.from(c).map(p=>({matchGuid:p.getAttribute("data-match-guid"),type:p.getAttribute("data-content-type"),teamPoints:p.getAttribute("data-content-team-points"),odds:p.getAttribute("data-content-odds"),stake:p.getAttribute("data-stake"),payout:p.getAttribute("data-payout"),matchTitle:p.getAttribute("data-match-title"),abbreviatedTitle:p.getAttribute("data-abbreviated-title"),scheduledAt:p.getAttribute("data-scheduled-at")})),u=_e();re.publish(u.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:l,bets:d,timestamp:Date.now()}))};a.forEach(r=>{const l=new Date(r.scheduled_at)<s;let i=!1;try{i=(typeof r.scoreboard_data=="string"?JSON.parse(r.scoreboard_data):r.scoreboard_data)?.time_remaining?.toLowerCase()==="final"}catch{}const c=document.createElement("bma-bet-match-card");if(c.setAttribute("data-match-id",r.id),c.setAttribute("data-match-guid",r.odds_id||r.guid||r.id),c.setAttribute("data-match-title",r.title),c.setAttribute("data-match-short-title",r.short_title||r.title),c.setAttribute("data-scheduled-at",r.scheduled_at),c.setAttribute("data-home-team",r.home_team_id||"Home"),c.setAttribute("data-away-team",r.away_team_id||"Away"),c.setAttribute("data-is-disabled",l||i?"true":"false"),c.setAttribute("data-sync-theme","dark"),r.odds_markets){const d=typeof r.odds_markets=="string"?r.odds_markets:JSON.stringify(r.odds_markets);c.setAttribute("data-odds-markets",d)}if(r.scoreboard_data){const d=typeof r.scoreboard_data=="string"?r.scoreboard_data:JSON.stringify(r.scoreboard_data);c.setAttribute("data-scoreboard",d)}if(e&&e.tags){const d=typeof e.tags=="string"?e.tags:JSON.stringify(e.tags);c.setAttribute("data-tournament-tags",d)}if(r.sport_id)c.setAttribute("data-sport-key",r.sport_id);else if(e.sports_allowed&&e.sports_allowed.length===1){const d=e.sports_allowed[0];d&&d.key&&c.setAttribute("data-sport-key",d.key)}c.addEventListener("bet-button-click",d=>{const{betData:u,isActive:p,button:f}=d.detail;if(p){const b=document.querySelector(".bet-grid__slip-BETSLIP-content");if(b){const m=b.querySelectorAll("bma-bet-entry");let k=!1;m.forEach(E=>{if(k)return;const A=E.getAttribute("data-content-type"),x=E.getAttribute("data-content-odds");A===u.type&&x===u.price&&(E.remove(),k=!0)}),b.children.length===0&&(b.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>')}f.classList.remove("btn--active"),setTimeout(()=>{n()},100)}else{document.querySelectorAll("bma-bet-match-card").forEach(k=>{k.shadowRoot.querySelectorAll(".btn--selected").forEach(E=>{E.classList.remove("btn--selected")})}),f.classList.add("btn--selected"),f.classList.add("btn--active");const b=_e(),m=u.type;m==="spread"?re.publish(b.hierTopics.COREBETSLIP__SPREAD,JSON.stringify(u)):m==="money"?re.publish(b.hierTopics.COREBETSLIP__MONEY,JSON.stringify(u)):m==="total"&&re.publish(b.hierTopics.COREBETSLIP__TOTAL,JSON.stringify(u)),re.publish(b.hierTopics.COREBETSLIP,JSON.stringify(u))}}),t.appendChild(c)})},refreshPlayPopupUI(e,t){console.log("[app_events] Refreshing PLAY popup UI for tournament:",e);const s=document.querySelector("[data-publish-betslip]");s&&delete s.dataset.processing;const a=document.querySelector(".bet-grid__slip-BETSLIP-content");a&&(a.innerHTML='<div class="bet-slip__empty"><p>Select odds to create a new bet slip</p></div>');const n=_e();if(n.coreTourn.length>0){const l=n.coreTourn[n.coreTourn.length-1].data.find(i=>i.guid===e);l&&Le.renderMatchCards(l)}t?.rows&&(console.log("[app_events] Publishing SODAPOP__HYDRATE__COREBETSLIP with",t.rows.length,"bets"),setTimeout(()=>{re.publish(n.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(t))},100));const r=document.querySelector(".bet-grid__slip");r&&r.setAttribute("data-active-bet-tab","MYBETS")},disableExistingBetButtons(){const e=document.querySelectorAll(".bet-grid__slip-MYBETS bma-bet-existing"),t=Array.from(e).map(a=>{try{return JSON.parse(a.getAttribute("data-corebetslip")||"{}")}catch{return null}}).filter(Boolean);document.querySelectorAll("bma-bet-match-card").forEach(a=>{const n=a.getAttribute("data-match-guid"),r=a.getAttribute("data-home-team"),o=a.getAttribute("data-away-team");(a.shadowRoot?.querySelectorAll(".btn:not(.btn--empty)")||[]).forEach(i=>{if(i.disabled)return;const c=i.dataset.betType,p=i.dataset.team==="home"?r:o;t.some(b=>{if(b.coreMatches__guid!==n)return!1;const m=b.bet||[];if(m.length===0)return!1;const k=m[0],A=Object.keys(k).filter(P=>P!=="short_title")[0],y=k[A]?.type;return c==="total"?y===c:y===c&&A===p})&&(i.disabled=!0,i.classList.add("btn--disabled"))})})},updatePlayButton(){const e=_e(),t=document.querySelector(".play-cntr"),s=t?.dataset?.currentTournGuid,a=t?.dataset?.currentTournAction||"INFO",n=document.getElementById("btn-join__play--id");if(!n||!s||e.coreTourn.length===0)return;const o=e.coreTourn[e.coreTourn.length-1].data.find(d=>d.guid===s);if(!o)return;const l=e.appSession?.session_user?.guid,i=o.entities?.guids?.includes(l),c=o.status;n.style.display="none",!(c==="COMPLETED"||c==="LOCKED"&&!i)&&(n.style.display="",c==="UPCOMING"&&!i?a==="INFO"?(n.textContent="Join",n.dataset.requiresJoin="true"):a==="PLAY"&&(n.textContent="Play",n.dataset.requiresJoin="false"):(n.textContent="Play",n.dataset.requiresJoin="false"))},populateInfoPage(){const e=_e(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(_=>_.guid===s);if(!n)return;const r=document.getElementById("pop-play__caro-info-summary1--id");if(!r)return;const o=_=>{if(!_)return"N/A";let C=new Date(_);return!_.includes("Z")&&!_.match(/[+-]\d{2}:\d{2}$/)&&(C=new Date(_+"Z")),isNaN(C.getTime())?"Invalid Date":C.toLocaleString(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})},l=n.status?`info-row__value--${n.status.toLowerCase()}`:"",i={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",soccer_liga:"LIGA",soccer_seriea:"SERIE A",cricket_ipl:"IPL",cricket_intl:"CRICKET",rugby_union:"RUGBY",rugby_league:"RUGBY",mma_ufc:"UFC",boxing:"BOXING",tennis_atp:"ATP",tennis_wta:"WTA",golf_pga:"PGA",racing_nascar:"NASCAR",racing_f1:"F1"},c=n.sports_allowed&&Array.isArray(n.sports_allowed)?n.sports_allowed.map(_=>{const C=_.key||_,B=it.find(D=>D.key===C),K=B?B.group:"default",V=i[C]||B?.title||C;return`<span style="display: inline-flex; align-items: center; gap: 4px; margin-right: 8px;">
                    <bma-sport-icon sport="${C}" data-sport-group="${K}" style="width: 20px; height: 20px;"></bma-sport-icon>
                    <span style="font-size: 0.8rem; font-weight: 600; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;">${V}</span>
                </span>`}).join(""):"N/A",d=e.appSession?.session_user?.guid,u=n.entities?.guids?.includes(d),p=n.entities?.guids?.length||0,f=n.entities?.max||0,b=(p/(f||1)*100).toFixed(1),m=(()=>{const _=new Date(n.window_start_time),C=new Date(n.window_end_time),B=new Date;if(isNaN(_.getTime())||isNaN(C.getTime()))return"";const K=C-_,V=B-_;let D=0,I="";if(B<_){D=0;const U=_-B,J=Math.floor(U/864e5),Q=Math.floor(U%864e5/36e5);I=J>0?`First match in ${J}d ${Q}h`:`First match in ${Q}h`}else if(B>C){const U=new Date(C.getFullYear(),C.getMonth(),C.getDate()),J=new Date(B.getFullYear(),B.getMonth(),B.getDate());D=U.getTime()===J.getTime()?95:100,I=D===100?"Tournament Complete":"Last Day"}else{D=Math.min(100,V/K*100);const U=Math.ceil(K/864e5),J=Math.ceil(V/864e5);I=J>=U?"Last Day":`Day ${J} of ${U}`}return`<div class="info-row" style="flex-direction: column; align-items: stretch; gap: 8px;">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span class="info-row__label">Tournament Progress</span>
                    <span class="info-row__value" style="color: var(--status-locked-text, #F7C60D); font-weight: 600;">${I}</span>
                </div>
                <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${D.toFixed(1)}%; background: #F7C60D; border-radius: 3px; transition: width 0.6s ease;"></div>
                </div>
            </div>`})(),k=n.tags||[],A=k.some(_=>_.override_last_match_close===!0)?"+":"",x=(()=>{const _=k,C=_.some(de=>de.match_inprogress_lock===!0),B=C?"#F7C60D":"#00E676",K=C?"Locked Odds":"Live Odds",V=C?"Odds lock at game start":"Odds stay live during games",D=C?`<svg width="18" height="18" viewBox="0 0 24 24" fill="${B}"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2z"/></svg>`:`<svg width="18" height="18" viewBox="0 0 24 24" fill="${B}"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"/></svg>`,I=_.some(de=>de.override_last_match_close===!0),U=I?"#00E676":"rgba(255,255,255,0.5)",J=I?"On-going Format":"Fixed Format",Q=I?"New matches added as odds become available":"Match slate is fixed at tournament start",le=I?`<svg width="18" height="18" viewBox="0 0 24 24" fill="${U}"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/></svg>`:`<svg width="18" height="18" viewBox="0 0 24 24" fill="${U}"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>`;return`<div class="info-row" style="align-items: center;">
                <span style="display: inline-flex; align-items: center; gap: 8px;">
                    ${D}
                    <span style="color: ${B}; font-weight: 700; font-size: 0.85rem;">${K}</span>
                </span>
                <span class="info-row__value" style="color: rgba(255,255,255,0.4); font-size: 0.78rem;">${V}</span>
            </div>
            <div class="info-row" style="align-items: center;">
                <span style="display: inline-flex; align-items: center; gap: 8px;">
                    ${le}
                    <span style="color: ${U}; font-weight: 700; font-size: 0.85rem;">${J}</span>
                </span>
                <span class="info-row__value" style="color: rgba(255,255,255,0.4); font-size: 0.78rem;">${Q}</span>
            </div>`})(),y=(()=>{const C=(n.tags||[]).find(D=>D.badge_gold!==void 0||D.badge_silver!==void 0||D.badge_bronze!==void 0);if(!C)return null;const B=C.badge_gold||0,K=C.badge_silver||0,V=C.badge_bronze||0;return B===0&&K===0&&V===0?null:{gold:B,silver:K,bronze:V}})(),P=u?`<div class="info-status-banner info-status-banner--entered">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#00E676"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    <span>Entered</span>
                </div>`:n.status==="UPCOMING"?`<div class="info-status-banner info-status-banner--open">
                    <span>Open for Entry</span>
                </div>`:n.status==="LOCKED"?`<div class="info-status-banner info-status-banner--locked">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#969696"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>
                    <span>In Progress</span>
                </div>`:"",M=`
            <div class="info-section" style="margin-top: 12px;">
                ${m}
                <div class="info-row">
                    <span class="info-row__label">Status</span>
                    <span class="info-row__value ${l}">${n.status==="LOCKED"?"IN PROGRESS":n.status||"Unknown"}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Entry</span>
                    <span class="info-row__value" style="font-weight: 600;">FREE</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Tournament Dollars</span>
                    <span class="info-row__value" style="color: var(--status-upcoming-text, #00E676); font-weight: 700;">TD$ ${n.tournament_dollars||0}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Games</span>
                    <span class="info-row__value">${n.matches_expanded?.length||0}${A}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Sports</span>
                    <span class="info-row__value">${c}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">Start</span>
                    <span class="info-row__value">${o(n.window_start_time)}</span>
                </div>
                <div class="info-row">
                    <span class="info-row__label">End <span style="font-size: x-small; opacity: 0.5;">(estimated)</span></span>
                    <span class="info-row__value">${o(n.window_end_time)}</span>
                </div>
                <div class="info-row info-row--entrants">
                    <span class="info-row__label">Entrants</span>
                    <div class="info-row__value-with-bar">
                        <span class="info-row__value">${p} / ${f}</span>
                        <div class="info-progress-bar">
                            <div class="info-progress-fill" style="width: ${b}%"></div>
                        </div>
                    </div>
                </div>
            </div>
        `,R=y?`
            <div class="info-section">
                <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 20px 12px 0;">
                    ${y.silver>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 80px; height: 80px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #C0C0C0; margin-bottom: 6px;">&times;${y.silver}</span>
                        <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.3rem; font-weight: 800; color: #C0C0C0;">2nd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${y.gold>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 100px; height: 100px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: var(--status-locked-text, #FFD700); margin-bottom: 6px;">&times;${y.gold}</span>
                        <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.5rem; font-weight: 800; color: var(--status-locked-text, #FFD700);">1st</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                    ${y.bronze>0?`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                        <div style="width: 68px; height: 68px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                        <span style="font-size: 0.85rem; font-weight: 700; color: #DA954B; margin-bottom: 6px;">&times;${y.bronze}</span>
                        <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                            <span style="font-size: 1.2rem; font-weight: 800; color: #DA954B;">3rd</span>
                        </div>
                    </div>`:'<div style="flex: 1; max-width: 160px;"></div>'}
                </div>
                <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent); margin-top: 0;"></div>
            </div>
            <div class="info-section" style="margin-top: 24px;">
                <div class="info-section__title">Trophy Breakdown</div>
                ${y.gold>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-gold-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        1st Place
                    </span>
                    <span class="info-row__value" style="color: #FFD700; font-weight: 700;">Gold Trophy &times;${y.gold}</span>
                </div>`:""}
                ${y.silver>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-silver-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        2nd Place
                    </span>
                    <span class="info-row__value" style="color: #C0C0C0; font-weight: 700;">Silver Trophy &times;${y.silver}</span>
                </div>`:""}
                ${y.bronze>0?`<div class="info-row">
                    <span class="info-row__label" style="display: flex; align-items: center; gap: 8px;">
                        <span style="width: 24px; height: 24px; background-image: var(--trophy-bronze-tall); background-size: contain; background-repeat: no-repeat;"></span>
                        3rd Place
                    </span>
                    <span class="info-row__value" style="color: #DA954B; font-weight: 700;">Bronze Trophy &times;${y.bronze}</span>
                </div>`:""}
            </div>
        `:`<div class="info-empty-state">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.1)"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
            <p>No trophies configured for this tournament</p>
        </div>`,w=(()=>{if(!n.matches_expanded||!Array.isArray(n.matches_expanded)||n.matches_expanded.length===0)return`<div class="info-empty-state" style="animation: motion-fade-through-enter 210ms cubic-bezier(0.4, 0, 0.2, 1) both;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="rgba(255,255,255,0.15)">
                        <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
                    </svg>
                    <p style="font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0 0 6px;">Matches will be added once odds are available</p>
                    <p style="font-size: 0.78rem; color: rgba(255,255,255,0.2); margin: 0;">Check back closer to the tournament start</p>
                </div>`;let _=0,C=0,B=0;const K=new Date;n.matches_expanded.forEach(Q=>{let le=null;try{le=typeof Q.scoreboard_data=="string"?JSON.parse(Q.scoreboard_data):Q.scoreboard_data}catch{}le?.time_remaining?le.time_remaining.toLowerCase()==="final"?_++:C++:new Date(Q.scheduled_at)<K?_++:B++});const V=C>0?"live":"upcoming",D=[];_>0&&D.push(`<span class="match-filter-btn${V==="final"?" match-filter--active":""}" data-filter="final">${_} Final</span>`),C>0&&D.push(`<span class="match-filter-btn match-filter-btn--live${V==="live"?" match-filter--active":""}" data-filter="live">${C} Live</span>`),B>0&&D.push(`<span class="match-filter-btn match-filter-btn--upcoming${V==="upcoming"?" match-filter--active":""}" data-filter="upcoming">${B} Upcoming</span>`);const I=D.length>0?`<div class="match-filter-bar">${D.join("")}</div>`:"",U=new Date,J=n.matches_expanded.map(Q=>{const le=Q.scoreboard_data?typeof Q.scoreboard_data=="string"?Q.scoreboard_data:JSON.stringify(Q.scoreboard_data):"";let de="upcoming",fe=null;try{fe=typeof Q.scoreboard_data=="string"?JSON.parse(Q.scoreboard_data):Q.scoreboard_data}catch{}fe?.time_remaining?de=fe.time_remaining.toLowerCase()==="final"?"final":"live":de=new Date(Q.scheduled_at)<U?"final":"upcoming";const oe=de!==V;return`<bma-match-status
                    data-match-guid="${Q.guid||Q.odds_id||Q.id||""}"
                    data-match-title="${Q.short_title||Q.title||"Match"}"
                    data-match-scheduled-at="${Q.scheduled_at||""}"
                    data-match-home-team="${Q.home_team_id||"Home"}"
                    data-match-away-team="${Q.away_team_id||"Away"}"
                    data-match-home-score="${Q.home_team_score!==null&&Q.home_team_score!==void 0?Q.home_team_score:""}"
                    data-match-away-score="${Q.away_team_score!==null&&Q.away_team_score!==void 0?Q.away_team_score:""}"
                    data-match-scoreboard="${le.replace(/"/g,"&quot;")}"
                    data-match-sport-id="${Q.sport_id||""}"
                    data-match-status="${de}"
                    data-sync-theme="dark"
                    style="${oe?"display: none;":""}"
                ></bma-match-status>`}).join("");return`
                <div class="match-section-header" style="margin-bottom: 12px;">
                    ${I}
                </div>
                <div class="matches-scroll-container" id="info-matches-scroll" style="max-height: 480px; overflow-y: auto; position: relative; scrollbar-width: thin; scrollbar-color: rgba(255,255,255,0.15) transparent;">
                    ${J}
                </div>
                <div class="matches-scroll-fade" style="height: 32px; margin-top: -32px; position: relative; pointer-events: none; background: linear-gradient(to top, rgba(16,16,16,0.95), transparent); z-index: 1;"></div>
            `})();r.innerHTML=`
            ${P}
            <div class="info-section" style="margin-bottom: 16px;">
                <div class="info-section__title">Tournament Details</div>
                ${x}
            </div>
            <div class="info-sub-tabs">
                <button class="info-sub-tab info-sub-tab--active" data-info-tab="summary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>
                    Summary
                </button>
                <button class="info-sub-tab" data-info-tab="trophies">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>
                    Trophies
                </button>
                <button class="info-sub-tab" data-info-tab="matches">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/></svg>
                    Matches
                </button>
            </div>
            <div class="info-tab-panel" data-info-panel="summary">${M}</div>
            <div class="info-tab-panel" data-info-panel="trophies" style="display: none;">${R}</div>
            <div class="info-tab-panel" data-info-panel="matches" style="display: none;">${w}</div>
        `,r.querySelectorAll(".info-sub-tab").forEach(_=>{_.addEventListener("click",()=>{r.querySelectorAll(".info-sub-tab").forEach(B=>B.classList.remove("info-sub-tab--active")),_.classList.add("info-sub-tab--active");const C=_.dataset.infoTab;r.querySelectorAll(".info-tab-panel").forEach(B=>{B.style.display=B.dataset.infoPanel===C?"":"none"})})});const g=r.querySelector('[data-info-panel="matches"]');if(g){g.addEventListener("click",B=>{const K=B.target.closest(".match-filter-btn");K&&(g.querySelectorAll(".match-filter-btn").forEach(V=>V.classList.remove("match-filter--active")),K.classList.add("match-filter--active"),g.querySelectorAll("bma-match-status").forEach(V=>{V.style.display=V.dataset.matchStatus===K.dataset.filter?"":"none"}))});const _=g.querySelector(".matches-scroll-container"),C=g.querySelector(".matches-scroll-fade");if(_&&C){const B=()=>{C.style.opacity=_.scrollHeight-_.scrollTop-_.clientHeight<8?"0":"1"};_.addEventListener("scroll",B),setTimeout(B,100)}}const h=document.getElementById("pop-play__caro-info-summary2--id");h&&(h.innerHTML="");const T=document.getElementById("pop-play__caro-info-list--id");T&&(T.innerHTML="")},async populateLeaderboard(){const e=_e(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,a=e.appSession?.session_user?.guid;if(!s){console.warn("[appEvents] Cannot populate leaderboard: no tournament GUID");return}const n=document.getElementById("pop-play__caro-leaderboard--id");if(!n)return;let r=document.getElementById("leaderboard-loading-banner");r||(r=document.createElement("neodigm-juicebar"),r.id="leaderboard-loading-banner",r.setAttribute("role","progressbar"),r.setAttribute("data-n55-theme","warning"),r.setAttribute("data-n55-size","small"),r.innerHTML="<div></div>",r.style.cssText=`
                width: 100%;
                margin: 6px;
            `,n.parentNode.insertBefore(r,n)),r.style.visibility="visible";try{const o=await Se.fetchLeaderboard(s),l=o?.data||o?.rows;if(l&&l.length>0){const c=e.coreTourn[e.coreTourn.length-1]?.data.find(b=>b.guid===s);n.innerHTML=l.map((b,m)=>{let k="";if(c?.tags&&Array.isArray(c.tags)){const x=c.tags.find(y=>!!(typeof y=="object"&&y!==null&&(y.entity_guid===b.user_guid&&y.badge&&y.badge.startsWith("--badge__ribbon--")||y[b.user_guid]&&y[b.user_guid].startsWith("--badge__ribbon--"))));if(x){const y=x.badge||x[b.user_guid];y==="--badge__ribbon--gold"?k="badge-trophy--gold":y==="--badge__ribbon--silver"?k="badge-trophy--silver":y==="--badge__ribbon--bronze"&&(k="badge-trophy--bronze")}}const E=b.combined_betslips?typeof b.combined_betslips=="string"?b.combined_betslips:JSON.stringify(b.combined_betslips):"[]";let A="[]";if(b.combined_betslips&&c?.matches_expanded){const x=typeof b.combined_betslips=="string"?JSON.parse(b.combined_betslips):b.combined_betslips,y=[...new Set(x.map(M=>M.coreMatches__guid||M.match_guid||M.odds_id).filter(Boolean))],P=c.matches_expanded.filter(M=>{const R=M.guid||M.id||M.odds_id;return y.includes(R)});A=JSON.stringify(P)}return`
                        <bma-leaderboard-card
                            data-rank="${m+1}"
                            data-username="${b.username||"Unknown"}"
                            data-user-guid="${b.user_guid||""}"
                            data-tournament-dollars="${b.calculated_tournament_dollars||0}"
                            data-starting-dollars="${c?.tournament_dollars||0}"
                            data-total-betslips="${b.total_betslips||0}"
                            data-total-payout="${b.total_payout||0}"
                            data-combined-betslips="${E.replace(/"/g,"&quot;")}"
                            data-user-matches="${A.replace(/"/g,"&quot;")}"
                            data-badge-class="${k}"
                            data-is-current-user="${b.user_guid===a}"
                            data-sync-theme="dark"
                        ></bma-leaderboard-card>
                    `}).join(""),requestAnimationFrame(()=>{n.querySelectorAll("bma-leaderboard-card").forEach((b,m)=>{b.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",b.style.animationDelay=`${Math.min(m*60,400)}ms`})});const d=l.findIndex(b=>b.user_guid===a),u=d>=0?d+1:l.length,p=c?.entities?.guids?.length||l.length,f=document.getElementById("dashboard-rank");f&&(f.innerHTML=`<span class="tourn-dashboard__rank-text">${u}/${p}</span><span style="display: block; font-size: 0.6em; margin-top: 2px; visibility: hidden;">(0)</span>`)}else n.innerHTML=`
                    <div class="leaderboard-empty">
                        <p>No leaderboard data available yet.</p>
                        <p class="leaderboard-empty__subtitle">Be the first to place a bet!</p>
                    </div>
                `;setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}catch(o){console.error("[appEvents] Error fetching leaderboard:",o),n.innerHTML=`
                <div class="leaderboard-empty">
                    <p>Unable to load leaderboard data.</p>
                </div>
            `,setTimeout(()=>{r&&(r.style.visibility="hidden")},1800)}},hydratePlayPopup(){const e=_e(),s=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(!s||e.coreTourn.length===0)return;const n=e.coreTourn[e.coreTourn.length-1].data.find(r=>r.guid===s);n&&(console.log("[appEvents] Hydrating play popup for tournament:",s),this.populateInfoPage(),this.renderMatchCards(n),this.updateTournamentDashboard(n),this.updatePlayButton())},openFilterPopup(e,t){if(typeof neodigmSodaPop>"u")return;const{tab:s,subStatus:a,sort:n,result:r}=e,o=(c,d,u,p,f)=>`<button class="filter-chip${p?" filter-chip--active":""}${f?" filter-chip--disabled":""}" data-filter-type="${c}" data-filter-val="${d}">${u}</button>`;let l="";s==="lobby"?l+=`
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
                </div>`:s==="my"?l+=`
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
                </div>`:s==="completed"&&(l+=`
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
                </div>`);const i={lobby:{subStatus:"all",sort:"default",result:"all"},my:{subStatus:"all",sort:"default",result:"all"},completed:{subStatus:"all",sort:"default",result:"all"}};neodigmSodaPop.setOnAfterOpen(()=>{const c=document.getElementById("filter-popup__content--id");if(!c)return;c.innerHTML=`
                ${l}
                <div class="filter-actions">
                    <button class="filter-btn filter-btn--reset" id="filter-reset-btn">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/></svg>
                        Reset
                    </button>
                    <button class="filter-btn filter-btn--apply" id="filter-apply-btn">Apply</button>
                </div>
            `;let d={subStatus:a,sort:n,result:r};c.addEventListener("click",u=>{const p=u.target.closest(".filter-chip");if(!p||p.classList.contains("filter-chip--disabled"))return;const f=p.dataset.filterType,b=p.dataset.filterVal;d[f]=b,c.querySelectorAll(`[data-filter-type="${f}"]`).forEach(m=>m.classList.remove("filter-chip--active")),p.classList.add("filter-chip--active")}),document.getElementById("filter-reset-btn")?.addEventListener("click",()=>{const u=i[s]||i.lobby;d={...u},Object.keys(u).forEach(p=>{c.querySelectorAll(`[data-filter-type="${p}"]`).forEach(f=>f.classList.remove("filter-chip--active")),c.querySelector(`[data-filter-type="${p}"][data-filter-val="${u[p]}"]`)?.classList.add("filter-chip--active")})}),document.getElementById("filter-apply-btn")?.addEventListener("click",()=>{neodigmSodaPop.close(),t&&t(d)})}),neodigmSodaPop.autoOpen("sodapop_filters")},bindAppListeners(e){re.subscribe("APP",(w,g)=>{console.warn("~~ sub all APP | "+w+"|"+g)}),re.subscribe("WC",(w,g)=>{console.warn("~~ sub all WC  | "+w+"|"+g)}),re.subscribe("ROUTE",(w,g)=>{console.warn("~~ sub all ROUTE  | "+w+"|"+g)});let t="lobby",s="all",a="all",n="default",r="all",o="all",l=localStorage.getItem("bma_view_mode")||"cards";const i=()=>{s="all";const w=document.querySelector("bma-app-head-sports");w&&w.setAttribute("data-selected-chip","all")},c=()=>{const w=document.getElementById("filter-bar__count--id");if(!w)return;let g=0;a!=="all"&&g++,n!=="default"&&g++,r!=="all"&&g++,w.textContent=g,w.style.display=g>0?"":"none"},d=()=>{document.querySelectorAll(".home-tab").forEach(h=>h.classList.remove("home-tab--active"));const g=t==="my"?document.querySelector('[data-home-tab="active"]'):document.querySelector('[data-home-tab="lobby"]');g&&g.classList.add("home-tab--active")},u=()=>{a="all",n="default",r="all",o="all"};document.addEventListener("click",w=>{const g=w.target.closest(".category-filter-toggle");if(g){const _=g.closest(".tournament-category-header")?.querySelector(".category-filter-row");if(_){const C=_.style.display!=="none";_.style.display=C?"none":"",g.classList.toggle("category-filter-toggle--open",!C),window._bmaFilterRowOpen=!C}return}const h=w.target.closest("[data-view-mode]");if(h){const T=h.dataset.viewMode;if(T===l)return;l=T,localStorage.setItem("bma_view_mode",T),document.querySelectorAll("[data-view-mode]").forEach(_=>_.classList.remove("view-toggle__btn--active")),document.querySelectorAll(`[data-view-mode="${T}"]`).forEach(_=>_.classList.add("view-toggle__btn--active")),re.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"VIEW_MODE_CHANGE"}))}}),document.addEventListener("click",w=>{const g=w.target.closest("[data-home-tab]");if(!g)return;const T=g.dataset.homeTab==="active"?"my":"lobby";if(T===t)return;t=T,i(),u(),c(),document.querySelectorAll(".home-tab").forEach(C=>C.classList.remove("home-tab--active")),g.classList.add("home-tab--active");const _=document.querySelector("bma-app-head-mid");_&&_.setAttribute("data-selected-tab","head_mid_lobby"),re.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"HOME_TAB_CHANGE"}))}),document.addEventListener("change",w=>{const g=w.target.closest(".category-dropdown");if(!g)return;const h=g.dataset.filterType,T=g.value;h==="subStatus"?a=T:h==="sort"?n=T:h==="result"?r=T:h==="odds"&&(o=T),c(),re.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"DROPDOWN_FILTER_CHANGE"}))}),re.subscribe(e.hierTopics.COREBETSLIP,(w,g)=>{JSON.parse(g);let h=16;switch(w){case e.hierTopics.COREBETSLIP__BET:h=5,Qs.shootConfetti(),console.log("~~~  |  "+w+" | ",g);const T=document.querySelector("[data-bets-valid]");T&&(T.dataset.betsValid="false");const _=document.querySelector("neodigm-sodapop");_&&_.setAttribute("data-wait","true");const C=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry");if(C.length===0){console.warn("[app_events] No bets to submit"),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("No bets to submit","warning");break}const K=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,V=e.appSession?.session_user?.guid;if(!K||!V){console.error("[app_events] Missing tournament or user GUID"),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Missing tournament or user data","danger");break}const D=Array.from(C).map(oe=>{const pe=oe.getAttribute("data-content-team-points"),O=oe.getAttribute("data-content-odds"),q=oe.getAttribute("data-stake")||"0",$=oe.getAttribute("data-content-type"),X=oe.getAttribute("data-payout")||"0",ae=oe.getAttribute("data-match-guid")||"",v={};return v[pe]={type:$,stake:parseFloat(q),odds:parseFloat(O),payout:parseFloat(X),reconciled:!1},{acctEntity__guid:V,coreTournaments__guid:K,coreMatches__guid:ae,bet:[v],status:"PENDING"}});console.log("[app_events] Submitting bet slips:",D),Se.postBetSlips(D).then(oe=>{console.log("[app_events] Bet slips posted successfully:",oe);const pe=D.reduce((O,q)=>{const $=q.bet[0],X=Object.keys($)[0];return O+($[X]?.stake||0)},0);typeof neodigmToast<"u"&&neodigmToast.q(`Bets placed successfully!|Total Stake: TD$ ${pe.toFixed(2)}`,"success"),Se.fetchBetSlips(V,K).then(O=>{if(O?.rows){const q={timestamp:Date.now(),source:"API",data:O.rows};e.pushcoreBetSlip(q),console.log("[app_events] Refreshed bet slips in store:",O.rows.length,"items")}Le.refreshPlayPopupUI(K,O),_&&_.setAttribute("data-wait","false")}).catch(O=>{console.error("[app_events] Error fetching fresh bet slips:",O);const q=document.querySelector("[data-publish-betslip]");q&&delete q.dataset.processing,T&&(T.dataset.betsValid="true"),_&&_.setAttribute("data-wait","false"),typeof neodigmToast<"u"&&neodigmToast.q("Bets placed but failed to refresh|Please close and reopen","warning")})}).catch(oe=>{console.error("[app_events] Error posting bet slips:",oe);const pe=document.querySelector("[data-publish-betslip]");pe&&delete pe.dataset.processing,T&&(T.dataset.betsValid="true"),typeof neodigmToast<"u"&&neodigmToast.q("Failed to place bets|Please try again","danger"),_&&_.setAttribute("data-wait","false")});break;case e.hierTopics.COREBETSLIP__SPREAD:break;case e.hierTopics.COREBETSLIP__MONEY:break;case e.hierTopics.COREBETSLIP__TOTAL:break;case e.hierTopics.COREBETSLIP__CLOSE:h=24;break;case e.hierTopics.COREBETSLIP__TDSYNC:if(document.querySelector("#summary-balance")&&g){g=JSON.parse(g);const pe=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(e.coreBetSlip[0]?.data&&pe){const O=e.coreBetSlip[0].data.filter(Y=>Y.coreTournaments__guid===pe),q=[],$=[],X=[];O.forEach(Y=>{const j=Y.bet||[];if(j.length===0)return;const se=j[0];Object.keys(se).filter(F=>F!=="short_title").forEach(F=>{const z=se[F],Z=z?.reconciled!==!1,ee=parseFloat(z?.payout||0);Z?ee===0?$.push(Y):X.push(Y):q.push(Y)})});const ae=tt.search(q,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,v=tt.search($,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,S=ae+v,L=tt.search(X,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,G=g.tournament_dollars-S+L;Le.updateTDBalance("#summary-balance",G)}else Le.updateTDBalance("#summary-balance",g.tournament_dollars)}break;case e.hierTopics.COREBETSLIP__INTERSYNC:let U=0,J=0,Q=0;if(e.coreBetSlip.length>0){const pe=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(pe){const q=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(L=>L.coreTournaments__guid===pe),$=[],X=[],ae=[];q.forEach(L=>{const G=L.bet||[];if(G.length===0)return;const Y=G[0];Object.keys(Y).filter(se=>se!=="short_title").forEach(se=>{const te=Y[se],F=te?.reconciled!==!1,z=parseFloat(te?.payout||0);F?z===0?X.push(L):ae.push(L):$.push(L)})}),U=tt.search($,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,J=tt.search(ae,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0;const v=tt.search(X,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,S=tt.search(ae,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;Q=v+S}}let le=!0,de=0;const fe=document.querySelector("[data-bets-valid]");if(fe&&g){g=JSON.parse(g),g.pending_stake_sum=0,g.pending_payout_sum=0,g.bets.length||(le=!1),g.bets.forEach(ae=>{ae.stake=Number(ae.stake),ae.stake>0?g.pending_stake_sum+=ae.stake:le=!1}),document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry").forEach(ae=>{const v=parseFloat(ae.getAttribute("data-payout")||"0");g.pending_payout_sum+=v});const pe=U+g.pending_stake_sum,O=J+g.pending_payout_sum;de=parseFloat((g.tournament_dollars-pe-Q+J).toFixed(2));const $=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let X=null;$&&e.coreTourn.length>0&&(X=e.coreTourn[e.coreTourn.length-1]?.data?.find(v=>v.guid===$)),Le.updateSummaryAndDashboard(de,pe,O,X,g.pending_payout_sum||0),(g.tournament_dollars<0||de<0)&&(le=!1),fe.dataset.betsValid=le}break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h,"QUITE").vibrate()});const p=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;g&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(C=>C.guid===g)?.tournament_dollars||0),re.publish(e.hierTopics.COREBETSLIP__TDSYNC,JSON.stringify({tournament_dollars:h,timestamp:Date.now()}))},f=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;g&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(U=>U.guid===g)?.tournament_dollars||0);let T=0,_=0,C=0,B=0;if(e.coreBetSlip.length>0&&g){const I=e.coreBetSlip[e.coreBetSlip.length-1].data.filter(oe=>oe.coreTournaments__guid===g);console.log("[app_events] Filtered bets for tournament:",g,"found:",I.length),console.log("[app_events] Using latest bet slip data index:",e.coreBetSlip.length-1),console.log("[app_events] First bet sample:",I[0]);const U=[],J=[],Q=[];I.forEach(oe=>{const pe=oe.bet||[];if(pe.length===0)return;const O=pe[0];Object.keys(O).filter($=>$!=="short_title").forEach($=>{const X=O[$],ae=X?.reconciled!==!1,v=parseFloat(X?.payout||0);ae?v===0?J.push(oe):Q.push(oe):U.push(oe)})}),console.log("[app_events] Bet categories:",{unreconciled:U.length,reconciledZero:J.length,reconciledNonZero:Q.length});const le=tt.search(U,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,de=tt.search(J,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0,fe=tt.search(Q,"sum([].bet[].* | [].stake | map(&to_number(@), @)) || `0`")||0;C=de+fe,_=tt.search(Q,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,B=tt.search(U,"sum([].bet[].* | [].payout | map(&to_number(@), @)) || `0`")||0,T=le,console.log("[app_events] Balance calculation:",{unreconciledStakes:le,lostBetStakes:de,wonBetStakes:fe,allReconciledStakes:C,displayedStake:T,reconciledPayouts:_,tournamentDollars:h,calculatedBalance:h-T-C+_})}else console.warn("[app_events] No bet data found in Pinia store or missing tournamentGuid");const K=h-T-C+_;let V=null;g&&e.coreTourn.length>0&&(V=e.coreTourn[e.coreTourn.length-1].data.find(I=>I.guid===g)),Le.updateSummaryAndDashboard(K,T,_,V,B)};re.subscribe(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,(w,g)=>{const T=JSON.parse(g)?.rows||[],_=document.querySelector(".bet-grid__slip-MYBETS");if(!_)return;if(_.innerHTML="",T.length===0){_.innerHTML='<p style="color: var(--app-core-color--gray-6__dark--brand, #969696); text-align: center; padding: 20px;">No active bets</p>';const V=document.querySelector(".bet-grid__slip");V&&V.setAttribute("data-active-bet-tab","BETSLIP"),p();return}T.forEach(V=>{if((V.bet||[]).length===0)return;const I=document.createElement("bma-bet-existing");I.setAttribute("data-corebetslip",JSON.stringify(V)),_.appendChild(I)});const C=document.querySelector(".bet-grid__slip");C&&C.setAttribute("data-active-bet-tab","MYBETS"),_e().appCLIFeatures?.features?.disable_existing_bet_btn?.state===!0&&Le.disableExistingBetButtons(),setTimeout(()=>{console.log("[app_events] Calling updateSummaryFromExistingBets after HYDRATE, bet count:",T.length),console.log("[app_events] Pinia store bet count:",e.coreBetSlip[0]?.data?.length||0),f()},200)}),document.addEventListener("click",w=>{const g=w.target;if(g&&g.classList.contains("bet-slip-tab")){const h=g.dataset.betTab,T=document.querySelector(".bet-grid__slip");h&&T&&(T.setAttribute("data-active-bet-tab",h),neodigmWired4Sound&&neodigmWired4Sound.sound(3),console.log("[app_events] Switched to bet tab:",h))}if(g&&g.dataset.publishBetslip){if(document.querySelector("[data-bets-valid]")?.dataset?.betsValid!=="true"){console.warn("[app_events] Cannot submit - bets invalid or button disabled");return}if(g.dataset.processing==="true"){console.warn("[app_events] Bet submission already in progress");return}g.dataset.processing="true";const T=g.dataset.publishBetslip;re.publish(T,JSON.stringify({timestamp:Date.now()}))}});const b=()=>{const g=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;let h=0;g&&e.coreTourn.length>0&&(h=e.coreTourn[e.coreTourn.length-1].data.find(K=>K.guid===g)?.tournament_dollars||0);const T=document.querySelectorAll(".bet-grid__slip-BETSLIP-content bma-bet-entry"),_=Array.from(T).map(C=>({teamPoints:C.getAttribute("data-content-team-points"),odds:C.getAttribute("data-content-odds"),stake:C.getAttribute("data-stake")||"0",type:C.getAttribute("data-content-type"),abbreviatedTitle:C.getAttribute("data-abbreviated-title"),scheduledAt:C.getAttribute("data-scheduled-at")}));re.publish(e.hierTopics.COREBETSLIP__INTERSYNC,JSON.stringify({tournament_dollars:h,bets:_,timestamp:Date.now()}))},m=(w,g)=>{const h=JSON.parse(g),T=document.querySelector(".bet-grid__slip-BETSLIP-content");if(!T){console.error("[app_events] Bet slip container not found");return}const _=T.querySelector(".bet-slip__empty");_&&_.remove();let C="";h.type==="total"?C=h.team==="over"?"Over":"Under":h.team==="home"?C=h.homeTeam:h.team==="away"&&(C=h.awayTeam);let B=C;if(h.point)if(h.type==="spread"){const J=parseFloat(h.point)>0?`+${h.point}`:h.point;B=`${C} ${J}`}else h.type==="total"&&(B=`${C} ${h.point}`);const K=document.createElement("bma-bet-entry");K.setAttribute("data-content-team-points",B),K.setAttribute("data-content-odds",h.price||"0"),K.setAttribute("data-content-stake-text","0"),K.setAttribute("data-content-type",h.type||""),K.setAttribute("data-abbreviated-title",h.abbreviatedTitle||`${h.homeTeam} vs ${h.awayTeam}`),K.setAttribute("data-scheduled-at",h.scheduledAt||""),K.setAttribute("data-match-guid",h.matchGuid||""),K.setAttribute("data-home-team",h.homeTeam||""),K.setAttribute("data-away-team",h.awayTeam||""),K.setAttribute("data-bet-team",C||"");const D=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(D&&e.coreTourn.length>0){const Q=e.coreTourn[e.coreTourn.length-1].data.find(le=>le.guid===D);if(Q?.sports_allowed&&Q.sports_allowed.length>0){const le=Q.sports_allowed[0];K.setAttribute("data-sport-key",le.key||"");const de=it.find(fe=>fe.key===le.key);K.setAttribute("data-sport-group",de?.group||"")}}T.appendChild(K),console.log("[app_events] Bet entry appended to container:",K,"Container children:",T.children.length),setTimeout(()=>{E(K)},0);const I=document.querySelector(".bet-grid__slip");I&&(I.setAttribute("data-active-bet-tab","BETSLIP"),console.log("[app_events] Switched to BETSLIP tab"));const U=T.querySelectorAll("bma-bet-entry").length;U>=3?requestAnimationFrame(()=>{setTimeout(()=>{const J=document.querySelector(".bet-grid__slip");J&&(console.log("[app_events] Scrolling parent to bottom - bet count:",U,"scrollHeight:",J.scrollHeight,"current scrollTop:",J.scrollTop),J.scrollTo({top:J.scrollHeight,behavior:"smooth"}),setTimeout(()=>{console.log("[app_events] After scroll - scrollTop:",J.scrollTop)},500))},150)}):console.log("[app_events] Skipping scroll - only",U,"bet cards (need 3+)"),setTimeout(()=>{b()},200),console.log("[app_events] Created bet entry:",{teamPoints:B,odds:h.price,type:h.type})};re.subscribe(e.hierTopics.COREBETSLIP__SPREAD,(w,g)=>{m(w,g),k()}),re.subscribe(e.hierTopics.COREBETSLIP__MONEY,(w,g)=>{m(w,g),k()}),re.subscribe(e.hierTopics.COREBETSLIP__TOTAL,(w,g)=>{m(w,g),k()});function k(){const w=window.matchMedia("(orientation: portrait)").matches,g=window.matchMedia("(max-width: 768px)").matches;if(w||g){const h=document.querySelector(".bet-grid__select"),T=document.querySelector(".bet-grid__slip"),_=document.querySelector(".bet-grid__toggle-text");h&&T&&_&&(h.classList.add("collapsed"),T.classList.remove("collapsed"),_.textContent="Close Bet Slip",console.log("[app_events] Bet slip expanded on portrait mode"))}}const E=w=>{const g={sport:{key:w.getAttribute("data-sport-key")||"",group:w.getAttribute("data-sport-group")||""},Match:{scheduled_at:w.getAttribute("data-scheduled-at")||"",home_team_id:w.getAttribute("data-home-team")||"",home_team_score:"",away_team_id:w.getAttribute("data-away-team")||"",away_team_score:""},Bet:{scope:{team_id:w.getAttribute("data-bet-team")||"",over:"",under:""},type:w.getAttribute("data-content-type")||"",odds:w.getAttribute("data-content-odds")||"0",stake:w.getAttribute("data-stake")||"0"}},h=yl.calcPayout(g);w.setAttribute("data-payout",h.toString()),console.log("[app_events] Payout calculated:",{stake:g.Bet.stake,odds:g.Bet.odds,payout:h})};new MutationObserver(w=>{w.forEach(g=>{g.type==="attributes"&&g.attributeName==="data-stake"&&g.target.tagName==="BMA-BET-ENTRY"&&(console.log("[app_events] Stake changed:",g.target.getAttribute("data-stake")),E(g.target),clearTimeout(window.betSlipStakeTimeout),window.betSlipStakeTimeout=setTimeout(()=>{b()},300))})}).observe(document.body,{attributes:!0,attributeFilter:["data-stake"],subtree:!0}),console.log("[app_events] MutationObserver for stake changes initialized"),document.addEventListener("bma-bet-entry-remove",w=>{console.log("[app_events] Removing bet entry:",w.detail);const g=w.target,h=w.detail;g.remove(),setTimeout(()=>{const B=document.querySelector(".play-cntr")?.dataset?.currentTournGuid;if(B){const K=_e(),V=K.coreTourn[K.coreTourn.length-1];if(V&&V.data){const D=V.data.find(I=>I.guid===B);D&&Le.updateTournamentDashboard(D)}}},100),document.querySelectorAll("bma-bet-match-card").forEach(C=>{(C.shadowRoot?.querySelectorAll(".btn")||[]).forEach(K=>{const V=K.dataset.betType,D=K.dataset.price,I=V===h.type,U=D===h.odds;I&&U&&K.classList.contains("btn--active")&&(K.classList.remove("btn--active"),console.log("[app_events] Deactivated button via X removal:",{btnType:V,btnPrice:D}))})});const _=document.querySelector(".bet-grid__slip-BETSLIP-content");_&&_.children.length,setTimeout(()=>{b()},100)}),re.subscribe(e.hierTopics.CANVAS__HYDRATE__STATUS,(w,g)=>{const h=JSON.parse(g);h&&h.guid&&neodigmUtils&&neodigmUtils.shake(`[data-bma-tourn-guid="${h.guid}"]`)}),re.subscribe(e.hierTopics.WC__APP__FOOT,(w,g)=>{JSON.parse(g);let h=16;switch(w){case e.hierTopics.WC__APP__FOOT__ALL_SPORTS:re.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LOBBY,JSON.stringify({tab:"ALL_SPORTS",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_TOURNEYS:typeof neodigmToast<"u"&&neodigmToast.q("Private Contests coming soon","night",3e3);break;case e.hierTopics.WC__APP__FOOT__LEADERBOARD:re.publish(e.hierTopics.WC__APP__HEAD_MID__HEAD_MID_LEADERBOARD,JSON.stringify({tab:"LEADERBOARD",timestamp:Date.now()}));break;case e.hierTopics.WC__APP__FOOT__MY_PROFILE:re.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),re.subscribe(e.hierTopics.WC__APP__HEAD_SPORTS,(w,g)=>{const h=JSON.parse(g);let T=16;w=="WC.APP.HEAD_SPORTS.PREV"||w=="WC.APP.HEAD_SPORTS.NEXT"||w=="WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START"?T=3:(s=h.key||"all",console.log(`[app_events] Sports filter changed to: ${s} (${h.group})`),c(),re.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SPORT_FILTER_CHANGE"}))),T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()}),re.subscribe(e.hierTopics.WC__APP__HEAD_MID,(w,g)=>{JSON.parse(g);let h=16;switch(w){case"WC.APP.HEAD_MID.HEAD_MID_LOBBY":t="lobby",i(),u(),c(),d(),re.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_MY":typeof neodigmToast<"u"&&neodigmToast.q("Private Contests coming soon","night",3e3),h=24;break;case"WC.APP.HEAD_MID.HEAD_MID_COMPLETED":t="completed",i(),u(),c(),re.publish(e.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"FILTER_CHANGE"}));break;case"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD":h=16,typeof neodigmSodaPop<"u"&&neodigmSodaPop.autoOpen("sodapop_leaderboard");break;case"WC.APP.HEAD_MID.HEAD_MID_SQUAD":re.publish(e.hierTopics.WC__APP__HEAD_TOP__USER_PROFILE,JSON.stringify({tab:"USER_PROFILE",timestamp:Date.now()}));break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()}),re.subscribe(e.hierTopics.ROUTE__HOME__USER_PROFILE,async(w,g)=>{JSON.parse(g);let h=16;switch(w){case"ROUTE.HOME.USER_PROFILE.INSTALL_PWA":const T=window.deferredPWAPrompt;if(!T){console.log("No install prompt available"),typeof neodigmToast<"u"&&neodigmToast.q("PWA install not available","warning");return}try{T.prompt();const{outcome:C}=await T.userChoice;C==="accepted"?(console.log("PWA installed successfully"),window.deferredPWAPrompt=null,typeof neodigmToast<"u"&&neodigmToast.q("App installed successfully!","success"),h=8,neodigmSodaPop&&neodigmSodaPop.close()):(console.log("PWA install declined"),typeof neodigmToast<"u"&&neodigmToast.q("Install cancelled","night"))}catch(C){console.error("PWA install error:",C),typeof neodigmToast<"u"&&neodigmToast.q("Install failed","danger")}break;case"ROUTE.HOME.USER_PROFILE.TOGGLE_THEME":(()=>{const B=e.appCLIFeatures.features.theme.state==="dark"?"light":"dark";e.setFeaturePersistPub("theme",{state:B});const K=document.getElementById("app");K&&K.setAttribute("data-sync-theme",B),document.body.setAttribute("data-sync-theme",B)})(),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.RESET_PASSWORD":Hn.push({name:"resethash_route"}),neodigmSodaPop&&neodigmSodaPop.close();break;case"ROUTE.HOME.USER_PROFILE.SIGNOUT":Hn.push({name:"signout_route"}),neodigmSodaPop&&neodigmSodaPop.close();break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()});const x=w=>{document.querySelectorAll(".play-section").forEach(h=>{h.style.display="none",h.classList.remove("play-section--active")});const g=document.getElementById(`play-section-${w}`);g&&(g.style.display="",g.classList.add("play-section--active"))},y=(w,g)=>{const h=w.split(".").pop(),T=document.querySelectorAll(".play-cntr .btn-info-sm"),C=document.querySelector(".play-cntr")?.closest("neodigm-sodapop");x(h),T.forEach(B=>{(B.dataset.publishRouteHome?.split(".").pop()||"")===h?(B.classList.add("btn-info-sm--active"),B.classList.remove("btn-info-sm--inactive")):(B.classList.add("btn-info-sm--inactive"),B.classList.remove("btn-info-sm--active"))}),typeof neodigmWired4Sound<"u"&&neodigmWired4Sound.sound(3),C&&(C.style.overflow=h==="PLAY"?"hidden":"auto")};re.subscribe("ROUTE.HOME.SODAPOP_PLAY.INFO",y);let P=null;re.subscribe("ROUTE.HOME.SODAPOP_PLAY.LEADERBOARD",(w,g)=>{if(y(w),P){console.log("[appEvents] Leaderboard refresh debounced (cooling down)");return}P=setTimeout(()=>{P=null},2e3),console.log("[appEvents] Refreshing leaderboard data"),Le.populateLeaderboard()}),re.subscribe("ROUTE.HOME.SODAPOP_PLAY.PLAY",(w,g)=>{JSON.parse(g);const h=document.getElementById("btn-join__play--id");if(!h){console.warn("[app_events] PLAY button not found");return}const T=h.dataset.requiresJoin==="true",_=h.textContent.trim().toLowerCase();if(console.log("[app_events] PLAY button clicked - text:",_,"requiresJoin:",T),T&&_==="join"){const B=document.querySelector(".play-cntr")?.dataset?.currentTournGuid,K=_e();if(!B){console.error("[app_events] No tournament GUID found");return}console.log("[app_events] Executing JOIN for tournament:",B),re.publish(K.hierTopics.WC__TOURN_ACTION,JSON.stringify({action:"JOIN",tournamentGuid:B,timestamp:Date.now()})),h.textContent="Play",h.dataset.requiresJoin="false",setTimeout(()=>{y(w),console.log("[app_events] JOIN triggered, advancing carousel to PLAY page")},500)}else y(w),console.log("[app_events] Advancing carousel to PLAY page")}),re.subscribe(e.hierTopics.WC__APP__HEAD_TOP,(w,g)=>{JSON.parse(g);let h=10;switch(w){case"WC.APP.HEAD_TOP.USER_PROFILE":h=0,neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_my_profile"),setTimeout(()=>{neodigmCarousel.nav({id:"caro-user_profile",nav:"caro-page__badges"})},1200);break;case"WC.APP.HEAD_TOP.LOGO":const T=e.appSession.session_app.version,_=new Date().getFullYear();T&&neodigmToast&&neodigmToast.q(`${T} 4/10/2026, 3:43:57 PM|© ${_} Bet Max Action`,"night");break}h&&neodigmWired4Sound&&neodigmWired4Sound.sound(h).vibrate()});let M=null,R=null;re.subscribe(e.hierTopics.WC__TOURN_ACTION,(w,g)=>{const h=JSON.parse(g);let T=0;switch(h?.action){case"JOIN":T=512;break;case"PLAY":T=8;break;case"INFO":T=8;break}if(T){M=h?.tournamentGuid,R=h?.action,console.log("[app_events] Storing pending tourn data:",M,R);const _=e.appSession?.session_user?.guid,C=h?.tournamentGuid;_&&C?Se.fetchBetSlips(_,C).then(B=>{if(B?.rows){const K={timestamp:Date.now(),source:"API",data:B.rows};e.pushcoreBetSlip(K),console.log("[app_events] Bet slips fetched:",B.rows.length,"items")}setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play"),setTimeout(()=>{re.publish(e.hierTopics.SODAPOP__HYDRATE__COREBETSLIP,JSON.stringify(B))},3e3)},T)}).catch(B=>{console.error("[app_events] Error fetching bet slips:",B),setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},T)}):setTimeout(()=>{neodigmSodaPop&&neodigmSodaPop.autoOpen("sodapop_play")},T)}}),re.subscribe(e.hierTopics.WC__TOURN_ACTION,(w,g)=>{const h=JSON.parse(g);let T=16;switch(h?.action){case"FOCUS":T=3;break;case"SPORT_ICON":T=10;break;case"JOIN":T=5;break;case"PLAY":T=16;break}T&&neodigmWired4Sound&&neodigmWired4Sound.sound(T).vibrate()}),re.subscribe(e.hierTopics.WC__TOURN_ACTION,(w,g)=>{const h=JSON.parse(g);let T=0,_="night";switch(neodigmOpt&&neodigmOpt.EVENT_SOUNDS&&(neodigmOpt.EVENT_SOUNDS=!1),h?.tournamentStatus){case"UPCOMING":_="success";break;case"LOCKED":_="warning";break;case"COMPLETED":_="danger";break}switch(h?.action){case"SPORT_ICON":h?.sportTitle==h?.sportDescription?T=h?.sportTitle:T=h?.sportTitle+"|"+h?.sportDescription;break}T&&neodigmToast&&neodigmToast.q(T,_)}),re.subscribe(e.hierTopics.WC__TOURN_ACTION,async(w,g)=>{const h=JSON.parse(g);if(h?.action==="JOIN"){const _=_e().appSession?.session_user?.guid;if(!_){console.error("No entity guid found in session"),typeof neodigmToast<"u"&&neodigmToast.q("Please sign in to join tournaments","warning");return}const C=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);C&&(C.setAttribute("data-bma-tourn-wait","true"),Qs.shootConfetti());const B={acctEntityGuid:_,tournamentGuid:h.tournamentGuid};try{const K={method:"POST",body:JSON.stringify(B),headers:Se.genHeaders()};console.log("Posting to:",Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",B);const D=await(await fetch(Se.API_baseURI+"/m5t/"+Se.API_ver+"/coreTournaments/join",K)).json();if(console.log("Join response:",D),D.ok)typeof neodigmToast<"u"&&neodigmToast.q("Successfully joined tournament!","success"),setTimeout(()=>{const I=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);if(I){I.setAttribute("data-bma-tourn-wait","false");const U=I.getAttribute("data-bma-tourn-entities");if(U)try{const J=JSON.parse(U);J.guids.includes(_)||(J.guids.push(_),I.setAttribute("data-bma-tourn-entities",JSON.stringify(J)))}catch(J){console.error("Failed to parse entities:",J)}}},3e3);else{const I=D?.message||"Failed to join tournament";typeof neodigmToast<"u"&&neodigmToast.q(I,"danger");const U=document.querySelector(`bma-tournament-card[data-bma-tourn-guid="${h.tournamentGuid}"]`);U&&U.setAttribute("data-bma-tourn-wait","false")}}catch(K){console.error("Join tournament error:",K),typeof neodigmToast<"u"&&neodigmToast.q("Network error joining tournament","danger"),typeof neodigmUtils<"u"&&neodigmUtils.hardReload()}}}),re.subscribe(e.hierTopics.ROUTE__HOME_ONMOUNT,async(w,g)=>{console.log("[app_events] ROUTE__HOME_ONMOUNT event received");const h=_e();try{const T=await Se.fetchTournaments();console.log("[app_events] Tournaments fetched:",T),T?.rows&&Array.isArray(T.rows)?(h.pushCoreTourn({timestamp:Date.now(),source:"API",data:T.rows}),console.log("[app_events] Pushed to coreTourn, length:",h.coreTourn.length),re.publish(h.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now()}))):console.warn("[app_events] Invalid API response format:",T)}catch(T){console.error("[app_events] Error fetching tournaments:",T),typeof neodigmToast<"u"&&neodigmToast.q("Please Sign In","success")}}),re.subscribe(e.hierTopics.PROMOTION__LOAD,async(w,g)=>{console.log("[app_events] PROMOTION__LOAD event received");try{const h=await Se.fetchPromotions();if(console.log("[app_events] Promotions fetched:",h),h?.ok&&h?.data&&Array.isArray(h.data)){const T=h.data.filter(C=>C.class==="banner"&&C.status==="LIVE");console.log("[app_events] Banner promotions:",T);const _=document.querySelector(".featured-swiper .swiper-wrapper");if(!_){console.warn("[app_events] Swiper wrapper not found");return}if(_.innerHTML="",T.forEach((C,B)=>{const K=document.createElement("div");K.className="swiper-slide";const V=document.createElement("div");V.className=`featured-card featured-card--${B+1}`;const D=C.hero_img?encodeURI(C.hero_img):"";V.style.backgroundImage=`url("${D}")`,V.setAttribute("data-promotion-hero-img",C.hero_img||""),V.setAttribute("data-promotion-caption",C.caption||""),V.setAttribute("data-promotion-tagline",C.tagline||""),V.setAttribute("data-promotion-toast",C.toast||""),V.setAttribute("data-promotion-topic",C.topic?.topic||""),V.setAttribute("data-promotion-topic-token",C.topic?.token||""),V.setAttribute("data-promotion-marquee",C.maquee||""),K.appendChild(V),_.appendChild(K)}),console.log("[app_events] Created",T.length,"promotion slides"),window.featuredSwiper&&window.featuredSwiper.update(),T.length===1){const C=document.querySelector(".featured-swiper .swiper-wrapper");C&&(C.style.justifyContent="center")}}}catch(h){console.error("[app_events] Error fetching promotions:",h)}}),re.subscribe(e.hierTopics.PROMOTION__CLICK,(w,g)=>{console.log("[app_events] PROMOTION__CLICK event received");try{const h=JSON.parse(g);console.log("[app_events] Promotion clicked:",h),h.toast&&typeof neodigmToast<"u"&&neodigmToast.q(h.toast,"success"),typeof neodigmSodaPop<"u"&&(neodigmSodaPop.setOnAfterOpen(()=>{const T=document.querySelector(".l-promotion #promoHero");T&&h.heroImg&&(T.src=h.heroImg);const _=document.querySelector(".l-promotion #promCaption");_&&h.caption&&(_.textContent=h.caption);const C=document.querySelector(".l-promotion #promoTagline");return C&&h.tagline&&(/<[^>]+>/.test(h.tagline)?C.innerHTML=h.tagline:C.textContent=h.tagline),!0},"sodapop_promotion"),neodigmSodaPop.autoOpen("sodapop_promotion"))}catch(h){console.error("[app_events] Error handling promotion click:",h)}}),re.subscribe(e.hierTopics.ROUTE__HOME_HYDRATE,(w,g)=>{console.log("[app_events] ROUTE__HOME_HYDRATE event received");const h=_e();if(h.coreTourn.length===0){console.warn("[app_events] No tournament data in coreTourn array");return}const T=h.coreTourn[h.coreTourn.length-1],_=h.coreTourn.length>1?h.coreTourn[h.coreTourn.length-2]:null;console.log("[app_events] Hydrating with latest data:",T);const C=[];if(_){const D=T.data,I=_.data;D.forEach(U=>{const J=I.find(Q=>Q.guid===U.guid);J&&J.status!==U.status&&(console.log(`[app_events] Status changed for tournament ${U.guid}: ${J.status} -> ${U.status}`),C.push(U.guid))})}const B=h.appSession?.session_user?.guid,K=[...T.data].sort((D,I)=>{const U=D.status||D.class,J=I.status||I.class,Q=D.entities?.guids||[],le=I.entities?.guids||[],de=Q.includes(B),fe=le.includes(B),oe=(L,G)=>{const Y=new Date(L.status_time||0).getTime();return new Date(G.status_time||0).getTime()-Y},pe=U==="LOCKED"&&de,O=J==="LOCKED"&&fe;if(pe&&!O)return-1;if(!pe&&O)return 1;if(pe&&O)return oe(D,I);const q=U==="UPCOMING",$=J==="UPCOMING";if(q&&!$)return-1;if(!q&&$)return 1;if(q&&$)return oe(D,I);const X=U==="COMPLETED"&&de,ae=J==="COMPLETED"&&fe;if(X&&!ae)return-1;if(!X&&ae)return 1;if(X&&ae)return oe(D,I);const v=U==="COMPLETED"&&!de,S=J==="COMPLETED"&&!fe;return v&&!S?1:!v&&S?-1:oe(D,I)}),V=Le.categorizeTournaments(K,t,s,B,{subStatus:a,sort:n,result:r});if(console.log(`[app_events] Categorized into ${V.length} categories for filter: ${t}/${s} sub:${a} sort:${n} result:${r}`),window._homeRouteRenderCards&&typeof window._homeRouteRenderCards=="function"){const D=document.querySelector(".tournaments-grid");D&&(D.dataset.filterContext=t),window._homeRouteRenderCards(V,!0,l,{tab:t,subStatus:a,sort:n,result:r,odds:o});const I=K.filter(le=>{const de=le.status||le.class,fe=le.entities?.guids||[];return(de==="LOCKED"||de==="UPCOMING")&&fe.includes(B)}).length,U=document.querySelector("bma-app-foot");U&&U.setAttribute("data-active-count",String(I));const J=document.querySelector("bma-app-head-mid");J&&J.setAttribute("data-active-count",String(I));const Q=document.getElementById("home-tab-active-badge");if(Q&&(Q.textContent=I,Q.style.display=I>0?"":"none"),C.length>0){const le=T.data;C.forEach(de=>{const fe=le.find(oe=>oe.guid===de);if(fe){const oe=Math.floor(Math.random()*2e3)+1e3;setTimeout(()=>{re.publish(h.hierTopics.CANVAS__HYDRATE__STATUS,JSON.stringify({guid:de,status:fe.status,timestamp:Date.now()}))},oe)}})}}else console.warn("[app_events] window._homeRouteRenderCards not available")}),re.subscribe(e.hierTopics.SSE__CORE__TOURN_SYNC,(w,g)=>{console.log("[app_events] SSE__CORE__TOURN_SYNC event received:",g);const h=_e();try{const T=JSON.parse(g);console.log("[app_events] SSE tournament sync data:",T);const _=JSON.parse(T.msg);if(console.log("[app_events] Parsed tournaments array:",_),!Array.isArray(_)){console.warn("[app_events] SSE msg is not an array:",_);return}h.pushCoreTourn({timestamp:Date.now(),source:"SSE",data:_}),console.log("[app_events] Pushed SSE data to coreTourn, length:",h.coreTourn.length),re.publish(h.hierTopics.ROUTE__HOME_HYDRATE,JSON.stringify({timestamp:Date.now(),source:"SSE"})),typeof neodigmSodaPop<"u"&&neodigmSodaPop.isOpen()==="sodapop_play"&&(console.log("[SSE] Play popup is open, triggering real-time update"),Le.hydratePlayPopup())}catch(T){console.error("[app_events] Error processing SSE tournament sync:",T)}}),setTimeout(function(){neodigmSodaPop&&neodigmMarquee&&neodigmEnchantedCTA&&(neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{},1e3),neodigmMetronome.init().pause(800),neodigmMarquee.init().pause(1200),neodigmEnchantedCTA.init(),neodigmCarousel.init()}),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{NeodigmClaire.showCanv("neodigm-sodapop",.5).setTheme(["warning","success"]).initCanvOn("neodigm-sodapop").waxOn("neodigm-sodapop");const w=document.querySelector("#caption__my-profile");w&&(w.textContent="My Profile");const g=document.getElementById("profile-trophy-username");g&&(g.textContent=e.appSession?.session_user?.userName||e.appSession?.session_user?.name||"");const h=e.appSession?.session_user?.guid;if(console.log("[app_events] User GUID:",h),console.log("[app_events] coreTourn length:",e.coreTourn.length),!h||e.coreTourn.length===0){console.warn("[app_events] Missing user GUID or tournament data");return}const _=e.coreTourn[e.coreTourn.length-1].data;console.log("[app_events] Processing tournaments:",_.length);let C=0,B=0,K=0;_.forEach((V,D)=>{if(!V.tags||!Array.isArray(V.tags)){console.log(`[app_events] Tournament ${D} has no tags or tags not an array`);return}V.tags.forEach((I,U)=>{if(typeof I=="object"&&I!==null){let J=null;I.entity_guid===h&&I.badge?J=I.badge:I[h]&&(J=I[h]),J==="--badge__ribbon--gold"?C++:J==="--badge__ribbon--silver"?B++:J==="--badge__ribbon--bronze"&&K++}})}),setTimeout(()=>{let V=document.querySelectorAll(".badge-counter");if(V.length===0){const D=document.querySelector("neodigm-sodapop");D&&(V=D.querySelectorAll(".badge-counter"))}V.length>=3?(V[0].textContent=B,V[1].textContent=C,V[2].textContent=K,console.log("[app_events] Updated UI counters successfully")):console.warn("[app_events] Not enough counter elements found")},500),setTimeout(()=>{const V=document.querySelector("#profile-tournaments-list");if(!V||!h||e.coreTourn.length===0)return;const U=e.coreTourn[e.coreTourn.length-1].data.filter(de=>{try{return(typeof de.entities=="string"?JSON.parse(de.entities):de.entities)?.guids?.includes(h)}catch{return!1}}),J={LOCKED:0,UPCOMING:1,COMPLETED:2};U.sort((de,fe)=>{const oe=J[de.status]??3,pe=J[fe.status]??3;return oe!==pe?oe-pe:new Date(fe.status_time||0)-new Date(de.status_time||0)});const Q=de=>{let fe=U;if(de==="active"?fe=U.filter(oe=>oe.status==="LOCKED"||oe.status==="UPCOMING"):de==="completed"&&(fe=U.filter(oe=>oe.status==="COMPLETED")),fe.length===0){V.innerHTML='<div class="profile-tournaments__empty">No tournaments found</div>';return}V.innerHTML=fe.map(oe=>{const pe=oe.entities?JSON.stringify(oe.entities).replace(/"/g,"&quot;"):"",O=oe.tags?JSON.stringify(oe.tags).replace(/"/g,"&quot;"):"[]",q=oe.sports_allowed?JSON.stringify(oe.sports_allowed).replace(/"/g,"&quot;"):"[]";return`<bma-tournament-list-card
                                        data-bma-tourn-guid="${oe.guid||""}"
                                        data-bma-tourn-caption="${oe.caption||""}"
                                        data-bma-tourn-tagline="${oe.tagline||""}"
                                        data-bma-tourn-status="${oe.status||""}"
                                        data-bma-tourn-class="${oe.status||""}"
                                        data-bma-tourn-sports_allowed="${q}"
                                        data-bma-tourn-entities="${pe}"
                                        data-bma-tourn-entry_fee="${oe.entry_fee||0}"
                                        data-bma-tourn-tournament_dollars="${oe.tournament_dollars||0}"
                                        data-bma-tourn-matches="${oe.matches_expanded?.length||0}"
                                        data-bma-tourn-tags="${O}"
                                        data-bma-tourn-window_start_time="${oe.window_start_time||""}"
                                        data-bma-tourn-window_end_time="${oe.window_end_time||""}"
                                        data-sync-theme="dark"
                                    ></bma-tournament-list-card>`}).join(""),requestAnimationFrame(()=>{V.querySelectorAll("bma-tournament-list-card").forEach((oe,pe)=>{oe.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",oe.style.animationDelay=`${Math.min(pe*60,400)}ms`})})};Q("all");const le=document.querySelector(".profile-tournaments__filters");le&&le.addEventListener("click",de=>{const fe=de.target.closest(".profile-tourn-filter");fe&&(le.querySelectorAll(".profile-tourn-filter").forEach(oe=>oe.classList.remove("profile-tourn-filter--active")),fe.classList.add("profile-tourn-filter--active"),Q(fe.dataset.filter))})},600)},1e3)},"sodapop_my_profile"),neodigmSodaPop.setOnAfterOpen(function(){setTimeout(()=>{const w=_e(),g=document.querySelector(".play-cntr");M&&(g.dataset.currentTournGuid=M),R&&(g.dataset.currentTournAction=R);const h=g?.dataset?.currentTournGuid,T=g?.dataset?.currentTournAction||"INFO";console.log("[app_events] sodapop_play opened - GUID:",h,"action:",T),window.initBetGridToggle&&window.initBetGridToggle(),Le.updatePlayButton(),Le.populateInfoPage(),setTimeout(()=>{Le.populateLeaderboard()},600);let _=T==="PLAY"||T==="JOIN"?"PLAY":T;if(!h||w.coreTourn.length===0||w.coreTourn[w.coreTourn.length-1].data.find(Q=>Q.guid===h)?.status==="COMPLETED"&&(_="LEADERBOARD",console.log("[app_events] Tournament is COMPLETED, defaulting to LEADERBOARD")),_){const U=`ROUTE.HOME.SODAPOP_PLAY.${_}`;console.log("[app_events] Publishing initial topic:",U),re.publish(U,JSON.stringify({tournamentGuid:h,timestamp:Date.now()}))}if(!h||w.coreTourn.length===0)return;const B=w.coreTourn[w.coreTourn.length-1].data.find(U=>U.guid===h);Le.renderMatchCards(B);const K=document.querySelector("#pop-play__tourn-caption--id"),V=document.querySelector("#pop-play__tourn-tagline--id");K&&(K.textContent=B.caption),V&&(V.textContent=B.tagline),console.log("[Modal Debug] Updating dashboard for tournament:",B?.caption);const D=document.querySelector(".head-caption");console.log("[Modal Debug] Modal header found:",!!D),D&&console.log("[Modal Debug] Modal classes:",D.className),Le.updateTournamentDashboard(B);const I=document.getElementById("dashboard-rank");if(I){const U=B.entities?.guids?.length||0;I.innerHTML=`
                                <span class="tourn-dashboard__rank-text">-/${U}</span>                            `}},1e3)},"sodapop_play"))},3e3),setTimeout(function(){neodigmSodaPop&&neodigmSodaPop.setOnAfterOpen(async function(){const w=_e(),g=document.getElementById("global-leaderboard-container");if(g){g.innerHTML=`<div style="display: flex; flex-direction: column; align-items: center; gap: 24px; padding: 60px 24px;">
                        <p style="font-size: 1.125rem; font-weight: 600; color: rgba(255,255,255,0.4); margin: 0;">Loading Leaderboard...</p>
                        <div style="display: block; height: 8px; width: 80%; max-width: 400px; background-color: #242424; overflow: hidden; border-radius: 4px;">
                            <div style="height: 100%; background-color: var(--neodigm-theme-brand-alt, #F7C60D); animation: juicebar_linear 1s infinite ease-in-out; transform-origin: 0% 50%;"></div>
                        </div>
                    </div>`;try{const h=await Se.fetchGlobalLeaderboard(),T=h?.data||h?.rows||[];if(!T.length){g.innerHTML='<div class="leaderboard-empty"><p>No leaderboard data available yet.</p></div>',myContainer&&(myContainer.innerHTML='<div class="leaderboard-empty"><p>No tournament data yet.</p></div>');return}const _=g,C=w.appSession?.session_user?.guid,B={},K=w.coreTourn.length>0?w.coreTourn[w.coreTourn.length-1].data:[];T.forEach(O=>{const q=O.user_guid;B[q]||(B[q]={username:O.username||"Unknown",user_guid:q,totalTDWon:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set});const $=B[q];$.totalBets+=parseInt(O.total_betslips||0),$.tournamentsPlayed++;const X=K.find(ae=>ae.guid===O.tournament_guid);X&&(X.sports_allowed||[]).forEach(v=>$.sports.add(v.key||v))}),K.forEach(O=>{!O.tags||!Array.isArray(O.tags)||O.tags.forEach(q=>{if(typeof q!="object"||!q)return;let $=null,X=null;if(q.entity_guid&&q.badge){if(q.entity_guid==="SYSTEM")return;$=q.entity_guid,X=q.badge}else{const v=Object.keys(q);for(const S of v){const L=q[S];if(typeof L=="string"&&L.startsWith("--badge__ribbon--")){$=S,X=L;break}}}if(!$||!X)return;if(!B[$]){const v=T.find(S=>S.user_guid===$);B[$]={username:v?.username||$.substring(0,8),user_guid:$,totalTDWon:0,totalPayout:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set}}const ae=B[$];X==="--badge__ribbon--gold"?(ae.gold++,ae.tournamentsWon++):X==="--badge__ribbon--silver"?ae.silver++:X==="--badge__ribbon--bronze"&&ae.bronze++})});const V=K.filter(O=>(O.status||O.class)==="COMPLETED");(await Promise.all(V.map(O=>Se.fetchLeaderboard(O.guid).catch(()=>null)))).forEach(O=>{if(!O)return;(O?.data||O?.rows||[]).forEach($=>{const X=$.user_guid;B[X]||(B[X]={username:$.username||X.substring(0,8),user_guid:X,totalTDWon:0,totalBets:0,tournamentsPlayed:0,tournamentsWon:0,gold:0,silver:0,bronze:0,sports:new Set});const ae=B[X];$.username&&ae.username.length<=8&&!ae.username.includes(" ")&&(ae.username=$.username),(()=>{try{return $.combined_betslips?typeof $.combined_betslips=="string"?JSON.parse($.combined_betslips):$.combined_betslips:[]}catch{return[]}})().forEach(S=>{(S.bet||[]).forEach(G=>{Object.keys(G).forEach(Y=>{if(Y==="short_title")return;const j=G[Y];j&&j.reconciled===!0&&j.payout>0&&(ae.totalTDWon+=parseFloat(j.payout))})})})})}),console.log("[Global Leaderboard] Fetched per-tournament data for",V.length,"completed tournaments");const I=Object.values(B).filter(O=>O.username!=="Unknown"),U=I.filter(O=>O.gold+O.silver+O.bronze>0),J=new Set;I.forEach(O=>O.sports.forEach(q=>J.add(q)));const Q={basketball_nba:"NBA",basketball_ncaab:"NCAAB",football_nfl:"NFL",football_ncaaf:"NCAAF",icehockey_nhl:"NHL",hockey_nhl:"NHL",baseball_mlb:"MLB",soccer_mls:"MLS",soccer_epl:"EPL",soccer_uefa:"UEFA",mma_ufc:"UFC",boxing:"BOXING"},le=[{id:"overall",label:"Overall"},{id:"earnings",label:"TD$ Won"}];let de="all";const fe=(O,q)=>{let $=[...I],X;O==="overall"&&($=$.filter(F=>F.gold+F.silver+F.bronze>0)),O==="bysport"&&q&&q!=="all"&&($=$.filter(F=>F.sports.has(q)));const ae=_.querySelector(".glb__note");switch(ae&&ae.remove(),O){case"overall":$.sort((F,z)=>z.gold*100+z.silver*10+z.bronze-(F.gold*100+F.silver*10+F.bronze)||z.totalPayout-F.totalPayout||z.totalBets-F.totalBets),X=(F,z,Z,ee,ne)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${z<3?"glb__rank--top3":""}">#${z+1}</span>
                                                <span class="glb__avatar" style="background: ${ee};">${Z}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${F.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="display: flex; align-items: center; gap: 4px;">
                                                ${F.gold?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-gold-tall);"></div><span style="color: var(--status-locked-text, #FFD700);">${F.gold}</span></div>`:""}
                                                ${F.silver?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-silver-tall);"></div><span style="color: #C0C0C0;">${F.silver}</span></div>`:""}
                                                ${F.bronze?`<div class="glb__badge"><div class="glb__badge-icon" style="background-image: var(--trophy-bronze-tall);"></div><span style="color: #DA954B;">${F.bronze}</span></div>`:""}
                                            </span>
                                        </div>`;break;case"earnings":$=$.filter(F=>F.totalTDWon>0),$.sort((F,z)=>z.totalTDWon-F.totalTDWon),X=(F,z,Z,ee,ne)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${z<3?"glb__rank--top3":""}">#${z+1}</span>
                                                <span class="glb__avatar" style="background: ${ee};">${Z}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${F.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="font-weight: 800; color: var(--status-upcoming-text, #00E676); font-size: 0.95rem; font-family: 'Roboto', sans-serif;">TD$ ${Math.round(F.totalTDWon).toLocaleString()}</span>
                                        </div>`;break;case"bysport":$.sort((F,z)=>z.totalPayout-F.totalPayout||z.totalBets-F.totalBets),X=(F,z,Z,ee,ne)=>`
                                        <div class="info-row" style="display: flex; justify-content: space-between; align-items: center; padding: 12px 16px;">
                                            <span style="display: flex; align-items: center; gap: 8px;">
                                                <span class="glb__rank ${z<3?"glb__rank--top3":""}">#${z+1}</span>
                                                <span class="glb__avatar" style="background: ${ee};">${Z}</span>
                                                <span style="font-weight: 600; color: #FAFAFA;">${F.username}</span>
                                                ${ne?'<span class="glb__you-badge">YOU</span>':""}
                                            </span>
                                            <span style="display: flex; align-items: center; gap: 10px;">
                                                <span style="font-size: 0.75rem; color: rgba(255,255,255,0.4);">${F.totalBets} bets</span>
                                                <span style="font-weight: 800; color: var(--status-upcoming-text, #00E676); font-size: 0.95rem; font-family: 'Roboto', sans-serif;">TD$ ${F.totalPayout.toFixed(0)}</span>
                                            </span>
                                        </div>`;break}const v=_.querySelector(".glb__list");if(!v)return;if($.length===0){const F=O==="earnings"?"No TD$ won from reconciled bets yet":O==="bysport"?"No players found for this sport":"No leaderboard data available";v.innerHTML=`<div class="leaderboard-empty"><p>${F}</p></div>`;return}const S=["#2a3a2e","#3a3528","#3a2a2a","#2a303a","#332a3a","#2a3836","#3a2e28","#2e3234"],L=F=>S[F.charCodeAt(0)%S.length];let G="";if(O==="overall"&&$.length>=3){const F=(z,Z,ee,ne,ie)=>{const ue=$[z],me=ue.user_guid===C;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${Z===1?80:Z===2?64:56}px; height: ${Z===1?80:Z===2?64:56}px; background-image: var(${ne}); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 6px;"></div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${me?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${ue.username}${me?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: rgba(255,255,255,0.5); margin-bottom: 6px;">${ue.gold+ue.silver+ue.bronze} Trophies</span>
                                        <div style="width: 100%; height: ${ee}px; background: linear-gradient(180deg, ${ie}33 0%, ${ie}0D 100%); border-top: 3px solid ${ie}80; border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: ${ie};">${Z===1?"1st":Z===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};G=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${F(1,2,70,"--badge__silver","#C0C0C0")}
                                        ${F(0,1,90,"--badge__gold","#FFD700")}
                                        ${F(2,3,50,"--badge__bronze","#DA954B")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(255,215,0,0.3), rgba(192,192,192,0.3), rgba(218,149,75,0.3), transparent);"></div>
                                `}const Y='<div class="info-section__title">Rankings</div>',j='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by trophies — Gold weighted highest, then Silver, then Bronze</div>',se='<div style="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-upcoming-text, #00E676); font-weight: 600; background: rgba(0, 230, 118, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(0, 230, 118, 0.2);"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by total TD$ payouts from completed bets — does not include pending bets</div>';if(O==="bysport"&&!_.querySelector(".glb__note")){const z=document.createElement("div");z.className="glb__note",z.style.cssText="text-align: center; padding: 10px 16px; margin: 8px 16px; font-size: 0.78rem; color: var(--status-locked-text, #F7C60D); font-weight: 600; background: rgba(247, 198, 13, 0.08); border-radius: 8px; box-shadow: inset 0 0 0 1px rgba(247, 198, 13, 0.2);",z.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 6px;"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>Ranked by TD$ won in tournaments featuring this sport';const Z=_.querySelector(".glb__sport-filters");Z&&Z.parentNode.insertBefore(z,Z)}let te="";if(O==="earnings"&&$.length>=3){const F=(z,Z,ee,ne)=>{const ie=$[z],ue=ie.user_guid===C;return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                        <div style="width: ${Z===1?80:Z===2?64:56}px; height: ${Z===1?80:Z===2?64:56}px; margin-bottom: 6px;">
                                            <img src="https://raw.githubusercontent.com/BMA-Master/betmaxtourney/main/images/TD%24.webp" alt="TD$" style="width: 100%; height: 100%; object-fit: contain;">
                                        </div>
                                        <span style="font-size: 0.9rem; font-weight: 700; color: ${ue?"#00E676":"#FAFAFA"}; margin-bottom: 2px; text-align: center;">${ie.username}${ue?" (You)":""}</span>
                                        <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${Math.round(ie.totalTDWon).toLocaleString()}</span>
                                        <div style="width: 100%; height: ${ee}px; background: linear-gradient(180deg, rgba(0, 230, 118, 0.15) 0%, rgba(0, 230, 118, 0.03) 100%); border-top: 3px solid rgba(0, 230, 118, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                            <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-upcoming-text, #00E676);">${Z===1?"1st":Z===2?"2nd":"3rd"}</span>
                                        </div>
                                    </div>`};te=`
                                    <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                        ${F(1,2,70,"#00E676")}
                                        ${F(0,1,90,"#00E676")}
                                        ${F(2,3,50,"#00E676")}
                                    </div>
                                    <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(0, 230, 118, 0.3), transparent);"></div>
                                `}if(O==="overall")v.innerHTML=G+j+Y+$.map((F,z)=>{const Z=(F.username||"?")[0].toUpperCase(),ee=L(F.username),ne=F.user_guid===C;return X(F,z,Z,ee,ne)}).join("");else if(O==="earnings"){const F='<div class="info-section__title">TD$ Won</div>';v.innerHTML=te+se+F+$.map((z,Z)=>{const ee=(z.username||"?")[0].toUpperCase(),ne=L(z.username),ie=z.user_guid===C;return X(z,Z,ee,ne,ie)}).join("")}else if(O==="bysport"){let F="";if($.length>=3){const Z=(ee,ne,ie)=>{const ue=$[ee],me=ue.user_guid===C,be=L(ue.username),Re=(ue.username||"?")[0].toUpperCase();return`<div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 140px;">
                                            <span class="glb__avatar" style="background: ${be}; width: ${ne===1?48:38}px; height: ${ne===1?48:38}px; font-size: ${ne===1?"1rem":"0.8rem"};">${Re}</span>
                                            <span style="font-size: 0.9rem; font-weight: 700; color: ${me?"#00E676":"#FAFAFA"}; margin: 4px 0 2px; text-align: center;">${ue.username}${me?" (You)":""}</span>
                                            <span style="font-size: 0.78rem; font-weight: 600; color: var(--status-upcoming-text, #00E676); margin-bottom: 6px;">TD$ ${ue.totalPayout.toFixed(0)}</span>
                                            <div style="width: 100%; height: ${ie}px; background: linear-gradient(180deg, rgba(247, 198, 13, 0.15) 0%, rgba(247, 198, 13, 0.03) 100%); border-top: 3px solid rgba(247, 198, 13, 0.4); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                                                <span style="font-size: 1.2rem; font-weight: 800; color: var(--status-locked-text, #F7C60D);">${ne===1?"1st":ne===2?"2nd":"3rd"}</span>
                                            </div>
                                        </div>`};F=`
                                        <div style="display: flex; align-items: flex-end; justify-content: center; gap: 8px; padding: 20px 12px 0;">
                                            ${Z(1,2,70)}
                                            ${Z(0,1,90)}
                                            ${Z(2,3,50)}
                                        </div>
                                        <div style="height: 2px; background: linear-gradient(90deg, transparent, rgba(247, 198, 13, 0.3), transparent);"></div>
                                    `}const z='<div class="info-section__title">Rankings</div>';v.innerHTML=F+z+$.map((Z,ee)=>{const ne=(Z.username||"?")[0].toUpperCase(),ie=L(Z.username),ue=Z.user_guid===C;return X(Z,ee,ne,ie,ue)}).join("")}requestAnimationFrame(()=>{v.querySelectorAll(".glb__card, .info-row").forEach((F,z)=>{F.style.animation="motion-slide-up-enter 300ms cubic-bezier(0.4, 0, 0.2, 1) both",F.style.animationDelay=`${Math.min(z*50,400)}ms`})})},oe=[...J].map(O=>{const q=Q[O]||O.replace(/^[a-z]+_/,"").toUpperCase(),$=it.find(ae=>ae.key===O),X=$?$.group:"default";return`<button class="glb__sport-chip" data-sport="${O}">
                                <bma-sport-icon sport="${O}" data-sport-group="${X}" style="width: 18px; height: 18px; pointer-events: none;"></bma-sport-icon>
                                <span style="color: var(--status-locked-text, #F7C60D); pointer-events: none;">${q}</span>
                            </button>`}).join("");_.innerHTML=`
                            <div class="glb__tabs" style="animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                ${le.map((O,q)=>`
                                    <button class="glb__tab ${q===0?"glb__tab--active":""}" data-tab="${O.id}">${O.label}</button>
                                `).join("")}
                            </div>
                            <div class="glb__sport-filters" style="display: none; animation: motion-fade-enter 150ms cubic-bezier(0.4,0,0.2,1) both;">
                                <button class="glb__sport-chip glb__sport-chip--active" data-sport="all">All Sports</button>
                                ${oe}
                            </div>
                            <div class="glb__list info-section" style="overflow-y: auto; scrollbar-width: thin; scrollbar-color: var(--status-locked-text, #F7C60D) transparent; scrollbar-gutter: stable;"></div>
                        `;const pe=document.createElement("style");pe.textContent=`
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
                        `,_.prepend(pe),fe("overall"),_.querySelectorAll(".glb__tab").forEach(O=>{O.addEventListener("click",()=>{_.querySelectorAll(".glb__tab").forEach(X=>X.classList.remove("glb__tab--active")),O.classList.add("glb__tab--active");const q=O.dataset.tab,$=_.querySelector(".glb__sport-filters");$&&($.style.display=q==="bysport"?"flex":"none"),fe(q,q==="bysport"?de:void 0)})}),_.querySelectorAll(".glb__sport-chip").forEach(O=>{O.addEventListener("click",()=>{_.querySelectorAll(".glb__sport-chip").forEach(q=>q.classList.remove("glb__sport-chip--active")),O.classList.add("glb__sport-chip--active"),de=O.dataset.sport,fe("bysport",de)})})}catch(h){console.error("[appEvents] Error fetching global leaderboard:",h),container.innerHTML='<div class="leaderboard-empty"><p>Unable to load leaderboard data.</p></div>'}}},"sodapop_leaderboard")},3500),setTimeout(function(){neodigmSodaPop&&NeodigmClaire&&neodigmSodaPop.setOnClose(function(){return!0})},4e3)}},Kg={__name:"App",setup(e){const t=Tt(),s=_e();return $t(()=>{setTimeout(()=>{const a=s.appSession?.session_user?.guid,n=s.appSession?.session_user?.authenticated;a&&n&&s.appCLIFeatures.features.sse.state&&(console.log("[App] Reconnecting SSE for existing session, GUID:",a),Pa.establishSSE("https://machfive-bmacdev-rest.onrender.com/v5/sse?appid=BMACORE&sseid=##SSEID##&lastkey=##LASTKEY##",a,s,!0))},2e3)}),setTimeout(function(){neodigmOpt.mvvLegit&&mvvLegit.setNavConroller((a=null)=>{neodigmOpt.N55_DEBUG_lOG&&neodigmToast.q(`Legit route: ${a}`,"primary"),t.push({name:a})}).setOnState((a=null)=>{a&&neodigmOpt.ROOT&&(neodigmOpt.ROOT.dataset.mvvLegit=a)}).init({BASE:Se.API_baseURI})},2e3),setTimeout(()=>{Le.bindAppListeners(s)},3e3),t.beforeEach((a,n,r)=>{a.name=="splash_route"||a.name&&mvvLegit&&mvvLegit.isRouteAllowed(a.name)?r():r(!1)}),(a,n)=>(Ye(),Mr(Wt(hl),null,{default:En(({Component:r})=>[je(Md,{name:"slide-left"},{default:En(()=>[(Ye(),Mr(Nc(r)))]),_:2},1024)]),_:1}))}};class qg extends HTMLElement{constructor(){super(),this.clockInterval=null}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this.startClock(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this.clockInterval&&clearInterval(this.clockInterval),this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-user-name"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&this.render()}startClock(){this.updateTime(),this.clockInterval=setInterval(()=>{this.updateTime()},24e3)}updateTime(){const t=this.shadowRoot?.querySelector(".status-time");if(t){const s=new Date,a=s.toLocaleTimeString("en-US",{hour:"numeric",minute:"2-digit",hour12:!0}),n=s.toLocaleDateString("en-US",{month:"short",day:"numeric"});t.textContent=`${n} • ${a}`}}handleLogoClick(t){t.preventDefault(),re.publish("WC.APP.HEAD_TOP.LOGO",JSON.stringify({timestamp:Date.now()}))}handleProfileClick(t){t.preventDefault(),re.publish("WC.APP.HEAD_TOP.USER_PROFILE",JSON.stringify({timestamp:Date.now()}))}render(){const t=Ae.isDark,s=this.getAttribute("data-user-name")||"Guest";this.shadowRoot.innerHTML=`
      <style>
        ${ot()}
        ${ts()}

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

        @media ${pr.wide} {
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
          <div class="status-time">Loading...</div>
        </div>

        <div class="profile-section">
          <div class="profile-pill" id="profileIcon" role="button" tabindex="0" aria-label="User Profile">
            <div class="profile-icon"></div>
            <span class="profile-name">${s}</span>
          </div>
        </div>
      </div>
    `;const a=this.shadowRoot.querySelector("#logoLink"),n=this.shadowRoot.querySelector("#profileIcon");a&&a.addEventListener("click",r=>this.handleLogoClick(r)),n&&(n.addEventListener("click",r=>this.handleProfileClick(r)),n.addEventListener("keypress",r=>{(r.key==="Enter"||r.key===" ")&&this.handleProfileClick(r)})),this.updateTime()}}customElements.define("bma-app-head-top",qg);class Wg extends HTMLElement{constructor(){super(),this.selectedTab="head_mid_lobby"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-tab","data-active-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-tab"&&(this.selectedTab=a||"head_mid_lobby"),this.render())}handleTabClick(t,s){this.selectedTab=t,this.setAttribute("data-selected-tab",t),re.publish(s,JSON.stringify({tab:t,timestamp:Date.now()})),this.render()}render(){const t=Ae.isDark,s=[{name:"head_mid_lobby",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.HEAD_MID.HEAD_MID_LOBBY"},{name:"head_mid_my",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.HEAD_MID.HEAD_MID_MY"},{name:"head_mid_leaderboard",caption:"Leaderboards",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.HEAD_MID.HEAD_MID_LEADERBOARD"},{name:"head_mid_squad",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.HEAD_MID.HEAD_MID_SQUAD"}];parseInt(this.getAttribute("data-active-count"));const a=0,n=r=>{const o=this.selectedTab===r.name,l=r.name==="head_mid_my";return`
        <div
          class="nav-item ${o?"nav-selected":"nav-unselected"}"
          data-tab="${r.name}"
          role="button"
          tabindex="0"
          aria-label="${r.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${r.iconVar}"></div>
            ${l?`<span class="nav-badge">${a}</span>`:""}
          </div>
          <span class="nav-caption">${r.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${ot()}
        ${ts()}

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
        @media ${pr.mobile} {
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
        ${s.map(r=>n(r)).join("")}
      </div>
    `,s.forEach(r=>{const o=this.shadowRoot.querySelector(`[data-tab="${r.name}"]`);o&&(o.addEventListener("click",()=>this.handleTabClick(r.name,r.topic)),o.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleTabClick(r.name,r.topic))}))})}}customElements.define("bma-app-head-mid",Wg);class Jg extends HTMLElement{constructor(){super(),this.selectedChip="all",this.isInternalSelectionUpdate=!1,this.boundUpdateRailState=()=>this.updateRailState(),this.isPointerDown=!1,this.dragStartX=0,this.dragStartScrollLeft=0,this.dragDistance=0,this.dragStartTime=0,this.suppressClickUntil=0,this.scrollSettleTimer=null,this.isSnapping=!1,this.skipSnapUntil=0}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-chip"]}attributeChangedCallback(t,s,a){if(this.shadowRoot&&s!==a){if(t==="data-selected-chip"){if(this.selectedChip=a||"all",this.isInternalSelectionUpdate){this.isInternalSelectionUpdate=!1;return}if(this.updateChipSelection()){requestAnimationFrame(()=>this.alignSelectedChip());return}}this.render()}}handleChipClick(t,s){Date.now()<this.suppressClickUntil||(this.selectedChip=t,this.isInternalSelectionUpdate=!0,this.setAttribute("data-selected-chip",t),this.updateChipSelection(),re.publish("WC.APP.HEAD_SPORTS",JSON.stringify({key:t,group:s,timestamp:Date.now()})),requestAnimationFrame(()=>this.alignSelectedChip()))}updateChipSelection(){const t=this.shadowRoot?.querySelectorAll(".sport-chip");return t?.length?(t.forEach(s=>{const a=s.getAttribute("data-chip")===this.selectedChip;s.classList.toggle("chip-selected",a),s.classList.toggle("chip-unselected",!a)}),!0):!1}updateRailState(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(".head-sports-container"),n=this.shadowRoot?.querySelector("#navPrev"),r=this.shadowRoot?.querySelector("#navNext");if(!t||!s||!a||!n||!r)return;const o=Math.max(0,t.scrollWidth-t.clientWidth),l=o>8,i=t.scrollLeft<=4,c=t.scrollLeft>=o-4;a.classList.toggle("rail-has-overflow",l),t.classList.toggle("has-scroll",l),s.classList.toggle("has-overflow",l),s.classList.toggle("has-left-overflow",l&&!i),s.classList.toggle("has-right-overflow",l&&!c),n.classList.toggle("nav-disabled",!l||i),r.classList.toggle("nav-disabled",!l||c),n.setAttribute("aria-disabled",String(!l||i)),r.setAttribute("aria-disabled",String(!l||c)),n.tabIndex=!l||i?-1:0,r.tabIndex=!l||c?-1:0}alignSelectedChip(){const t=this.shadowRoot?.querySelector(".chips-container"),s=this.shadowRoot?.querySelector(".chips-wrapper"),a=this.shadowRoot?.querySelector(`[data-chip="${this.selectedChip}"]`);if(!t||!s||!a)return;const n=s.getBoundingClientRect(),r=a.getBoundingClientRect(),o=t.scrollWidth-t.clientWidth;if(r.left>=n.left&&r.right<=n.right)return;const l=12;let i;r.left<n.left?i=t.scrollLeft+(r.left-n.left)-l:i=t.scrollLeft+(r.right-n.right)+l,i=Math.max(0,Math.min(i,o)),!(Math.abs(t.scrollLeft-i)<6)&&(this.skipSnapUntil=Date.now()+260,t.scrollTo({left:i,behavior:"smooth"}))}scrollToPrev(){const t=this.shadowRoot.querySelector(".chips-container");if(t){if(t.scrollLeft<=4)return;t.scrollBy({left:-220,behavior:"smooth"})}}scrollToNext(){const t=this.shadowRoot.querySelector(".chips-container");if(t){const s=Math.max(0,t.scrollWidth-t.clientWidth);if(t.scrollLeft>=s-4)return;t.scrollBy({left:220,behavior:"smooth"})}}scheduleScrollSettle({shouldSnap:t=!0}={}){clearTimeout(this.scrollSettleTimer),this.scrollSettleTimer=setTimeout(()=>{this.updateRailState(),t&&!this.isPointerDown&&!this.isSnapping&&Date.now()>=this.skipSnapUntil&&this.softSnapToChip()},90)}softSnapToChip(){const t=this.shadowRoot?.querySelector(".chips-container");if(!t)return;const s=[...t.querySelectorAll(".sport-chip")];if(!s.length)return;const a=Math.max(0,t.scrollWidth-t.clientWidth);if(a<=8)return;const n=Number.parseFloat(getComputedStyle(t).paddingLeft)||0,r=t.scrollLeft;let o=r,l=Number.POSITIVE_INFINITY;s.forEach(i=>{const c=Math.max(0,Math.min(i.offsetLeft-n,a)),d=Math.max(0,Math.min(i.offsetLeft+i.offsetWidth-t.clientWidth+n,a));[c,d].forEach(u=>{const p=Math.abs(u-r);p<l&&(l=p,o=u)})}),!(l<8)&&(this.isSnapping=!0,t.scrollTo({left:o,behavior:"smooth"}),window.setTimeout(()=>{this.isSnapping=!1,this.updateRailState()},220))}initDragScroll(){const t=this.shadowRoot.querySelector(".chips-container");if(!t)return;t.addEventListener("mousedown",a=>{this.isPointerDown=!0,t.style.cursor="grabbing",this.dragStartX=a.pageX-t.offsetLeft,this.dragStartScrollLeft=t.scrollLeft,this.dragDistance=0,this.dragStartTime=Date.now(),re.publish("WC.APP.HEAD_SPORTS.HEAD_SPORTS_DRAG_START",JSON.stringify({action:"start",scrollPosition:this.dragStartScrollLeft,timestamp:Date.now()}))});const s=()=>{if(!this.isPointerDown)return;const a=Date.now()-this.dragStartTime,n=this.dragDistance>10||this.dragDistance>4&&a>180;this.isPointerDown=!1,t.style.cursor="grab",n&&(this.suppressClickUntil=Date.now()+220),this.scheduleScrollSettle({shouldSnap:this.dragDistance>4})};t.addEventListener("mouseleave",s),t.addEventListener("mouseup",s),t.addEventListener("mousemove",a=>{if(!this.isPointerDown)return;a.preventDefault();const r=(a.pageX-t.offsetLeft-this.dragStartX)*2;this.dragDistance=Math.max(this.dragDistance,Math.abs(r)),t.scrollLeft=this.dragStartScrollLeft-r}),t.addEventListener("scroll",()=>{this.updateRailState(),this.scheduleScrollSettle({shouldSnap:!0})},{passive:!0})}render(){const t=Ae.isDark,n=(_e().appMeta?.sports||[]).filter(p=>p.active===!0),r=["NFL","NBA","NHL","EPL","MLB","NCAAF","MMA","Boxing"],o=[...n].sort((p,f)=>{const b=p.title||p.description||"",m=f.title||f.description||"",k=r.indexOf(b),E=r.indexOf(m);return k!==-1&&E!==-1?k-E:k!==-1?-1:E!==-1?1:b.toLowerCase().localeCompare(m.toLowerCase())}),l=[{key:"all",group:"All",title:"All",description:"All Sports"},{key:"multi",group:"Multi",title:"Multi",description:"Multi-Sport Tournaments"},...o],i=p=>{const f=this.selectedChip===p.key,b=p.key==="all";let m="";return b?m='<svg class="home-icon" width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/></svg>':m=`<bma-sport-icon sport="${p.key}" data-sport-group="${p.group}"></bma-sport-icon>`,`
        <div
          class="sport-chip ${f?"chip-selected":"chip-unselected"}"
          data-chip="${p.key}"
          role="button"
          tabindex="0"
          aria-label="${p.description||p.title}"
        >
          <div class="chip-circle">
            ${m}
          </div>
          <span class="chip-title">${p.title||p.group}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${ot()}
        ${ts()}

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
            ${l.map(p=>i(p)).join("")}
          </div>
        </div>
        <aside class="nav-icon nav-next nav-icon__next" id="navNext" role="button" tabindex="0" aria-label="Scroll right"></aside>
      </div>
    `,l.forEach(p=>{const f=this.shadowRoot.querySelector(`[data-chip="${p.key}"]`);f&&f.addEventListener("click",()=>this.handleChipClick(p.key,p.group))});const c=this.shadowRoot.querySelector("#navPrev"),d=this.shadowRoot.querySelector("#navNext");c&&c.addEventListener("click",()=>this.scrollToPrev()),d&&d.addEventListener("click",()=>this.scrollToNext()),this.initDragScroll();const u=this.shadowRoot.querySelector(".chips-container");u&&(u.scrollLeft=0),requestAnimationFrame(()=>{u&&(u.scrollLeft=0),this.updateRailState()})}}customElements.define("bma-app-head-sports",Jg);class Xg extends HTMLElement{constructor(){super(),this.selectedItem="foot_all_sports"}connectedCallback(){this.attachShadow({mode:"open"}),this.render(),this._unsub=Ae.subscribe(()=>this.render())}disconnectedCallback(){this._unsub&&this._unsub()}static get observedAttributes(){return["data-sync-theme","data-selected-item","data-active-count"]}attributeChangedCallback(t,s,a){this.shadowRoot&&s!==a&&(t==="data-selected-item"&&(this.selectedItem=a||"foot_all_sports"),this.render())}handleItemClick(t,s){this.selectedItem=t,this.setAttribute("data-selected-item",t),re.publish(s,JSON.stringify({item:t,timestamp:Date.now()})),this.render()}render(){Ae.theme;const t=Ae.isDark,s=[{name:"foot_all_sports",caption:"Home",iconVar:"--nav-icon__sports--",topic:"WC.APP.FOOT.ALL_SPORTS"},{name:"foot_my_tourneys",caption:"Private Contests",iconVar:"--nav-icon__trophy--",topic:"WC.APP.FOOT.MY_TOURNEYS"},{name:"foot_leaderboard",caption:"Leaderboards",iconVar:"--nav-icon__leaderboard--",topic:"WC.APP.FOOT.LEADERBOARD"},{name:"foot_my_account",caption:"My Profile",iconVar:"--nav-icon__my_profile_circle--",topic:"WC.APP.FOOT.MY_PROFILE"}];parseInt(this.getAttribute("data-active-count"));const a=0,n=r=>{const o=this.selectedItem===r.name,l=r.name==="foot_my_tourneys";return`
        <div
          class="nav-item ${o?"nav-selected":"nav-unselected"}"
          data-item="${r.name}"
          role="button"
          tabindex="0"
          aria-label="${r.caption}"
        >
          <div class="nav-icon-wrap">
            <div class="nav-icon" data-icon-var="${r.iconVar}"></div>
            ${l?`<span class="nav-badge">${a}</span>`:""}
          </div>
          <span class="nav-caption">${r.caption}</span>
        </div>
      `};this.shadowRoot.innerHTML=`
      <style>
        ${ot()}
        ${ts()}

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
        @media ${pr.mobile} {
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
        ${s.map(r=>n(r)).join("")}
      </div>
    `,s.forEach(r=>{const o=this.shadowRoot.querySelector(`[data-item="${r.name}"]`);o&&(o.addEventListener("click",()=>this.handleItemClick(r.name,r.topic)),o.addEventListener("keypress",l=>{(l.key==="Enter"||l.key===" ")&&(l.preventDefault(),this.handleItemClick(r.name,r.topic))}))})}}customElements.define("bma-app-foot",Xg);class Qg extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["data-corebetslip"]}attributeChangedCallback(t,s,a){s!==a&&this.render()}get betSlipData(){const t=this.getAttribute("data-corebetslip");if(!t)return null;try{return JSON.parse(t)}catch(s){return console.error("[bma-bet-existing] Failed to parse data-corebetslip:",s),null}}render(){const t=this.betSlipData;if(!t){this.shadowRoot.innerHTML="<div>Invalid bet data</div>";return}const s=t.bet||[];if(s.length===0){this.shadowRoot.innerHTML="<div>No bet data</div>";return}const a=s[0],n=a.short_title||"Match Info N/A",o=Object.keys(a).filter(A=>A!=="short_title")[0]||"Unknown Team",l=a[o],i=l.odds||"N/A",c=l.type||"N/A",d=parseFloat(l.stake||0).toFixed(2),u=parseFloat(l.payout||0).toFixed(2),p=l.reconciled!==!1,f=p&&parseFloat(u)>parseFloat(d),b=p&&parseFloat(u)<=parseFloat(d);let m="";p?f?m="win":b&&(m="loss"):m="unreconciled";const k=t.status_time?Qs.formatDateLocal(t.status_time):"";let E=o;if(c==="spread"&&l.point){const A=parseFloat(l.point)>0?`+${l.point}`:l.point;E=`${o} ${A}`}else c==="total"&&l.point&&(E=`${l.team==="over"?"Over":"Under"} ${l.point}`);this.shadowRoot.innerHTML=`
      <style>
        ${ot()}
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

      <div class="bet-existing-card ${m}">
        <div class="grid_header">
          <div class="match_desc">${n}</div>
          <div class="match_date">${k}</div>
        </div>
        <div class="grid_content">
          <!-- Row 1 -->
          <div class="content_team_points">${E}</div>
          <div class="content_odds" data-odds-value="${i}">${i}</div>
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
    `}}customElements.define("bma-bet-existing",Qg);const Do=`
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
              <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.RESET_PASSWORD"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"/></svg>Reset Password</button>
              <button class="btn-info-sm" data-publish-route-home="ROUTE.HOME.USER_PROFILE.SIGNOUT"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style="vertical-align: -2px; margin-right: 4px;"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>Sign Out</button>
            </nav>
            <div class="badges-podium-wrapper info-section" style="margin: 16px auto; max-width: 720px;">
              <div id="profile-trophy-username" style="text-align: center; padding: 20px 16px 14px; font-size: 1.1rem; font-weight: 700; color: var(--status-locked-text, #F7C60D); letter-spacing: 0.03em;"></div>
              <div class="info-section__title">My Trophies</div>
              <div style="display: flex; align-items: flex-end; justify-content: center; gap: 10px; padding: 12px 12px 0;">

                <!-- Silver - 2nd place (left) -->
                <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                  <div style="width: 80px; height: 80px; background-image: var(--badge__silver); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                  <span style="font-size: 1.1rem; font-weight: 800; color: #C0C0C0; margin-bottom: 6px; text-shadow: 0 1px 4px rgba(0,0,0,0.5);" class="badge-counter">0</span>
                  <div style="width: 100%; height: 80px; background: linear-gradient(180deg, rgba(192,192,192,0.2) 0%, rgba(192,192,192,0.05) 100%); border-top: 3px solid rgba(192,192,192,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 1rem; font-weight: 700; color: #C0C0C0;">Silver</span>
                  </div>
                </div>

                <!-- Gold - 1st place (center, tallest) -->
                <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                  <div style="width: 100px; height: 100px; background-image: var(--badge__gold); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                  <span style="font-size: 1.3rem; font-weight: 800; color: var(--status-locked-text, #FFD700); margin-bottom: 6px; text-shadow: 0 1px 4px rgba(0,0,0,0.5);" class="badge-counter">0</span>
                  <div style="width: 100%; height: 110px; background: linear-gradient(180deg, rgba(255,215,0,0.2) 0%, rgba(255,215,0,0.05) 100%); border-top: 3px solid rgba(255,215,0,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 1.1rem; font-weight: 700; color: var(--status-locked-text, #FFD700);">Gold</span>
                  </div>
                </div>

                <!-- Bronze - 3rd place (right) -->
                <div style="display: flex; flex-direction: column; align-items: center; flex: 1; max-width: 160px;">
                  <div style="width: 68px; height: 68px; background-image: var(--badge__bronze); background-size: contain; background-repeat: no-repeat; background-position: center; margin-bottom: 8px;"></div>
                  <span style="font-size: 1rem; font-weight: 800; color: #DA954B; margin-bottom: 6px; text-shadow: 0 1px 4px rgba(0,0,0,0.5);" class="badge-counter">0</span>
                  <div style="width: 100%; height: 56px; background: linear-gradient(180deg, rgba(218,149,75,0.2) 0%, rgba(218,149,75,0.05) 100%); border-top: 3px solid rgba(218,149,75,0.5); border-radius: 4px 4px 0 0; display: flex; align-items: center; justify-content: center;">
                    <span style="font-size: 0.9rem; font-weight: 700; color: #DA954B;">Bronze</span>
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
        <div class="head-caption__back" data-sodapop-close="true" role="button" tabindex="0" aria-label="Back">
          <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </div>
        <section class="head-caption__content">
          <h3 id="pop-play__tourn-caption--id" class="pop-play__tourn-caption">Tournament</h3>
          <p id="pop-play__tourn-tagline--id" class="pop-play__tourn-tagline">Loading...</p>
        </section>
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

<!-- Play sections (mutually exclusive, managed by showPlaySection helper) -->
<div id="play-section-INFO" class="play-section play-section--active">
    <div id="pop-play__caro-info-summary2--id"></div>
    <div id="pop-play__caro-info-summary1--id"></div>
    <div id="pop-play__caro-info-list--id"></div>
</div>
<div id="play-section-PLAY" class="play-section" style="display: none; padding-top: 8px;">
  <article class="bet-grid">
    <section class="bet-grid__select">
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


`;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",Do)}):document.body.insertAdjacentHTML("beforeend",Do);window.deferredPWAPrompt=null;window.addEventListener("beforeinstallprompt",e=>{console.log("[Global] beforeinstallprompt event fired"),e.preventDefault(),window.deferredPWAPrompt=e,window.dispatchEvent(new CustomEvent("pwa-installable"))});window.addEventListener("appinstalled",()=>{console.log("[Global] appinstalled event fired"),window.deferredPWAPrompt=null,window.dispatchEvent(new CustomEvent("pwa-installed"))});const Va=ou(Kg);Va.config.devtools=!1;Va.use(cu());Va.use(Hn);Va.mount("#app");document.addEventListener("gesturestart",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gesturechange",function(e){e.preventDefault(),document.body.style.zoom=.99});document.addEventListener("gestureend",function(e){e.preventDefault(),document.body.style.zoom=1});if("serviceWorker"in navigator){let e=!1;navigator.serviceWorker.addEventListener("controllerchange",()=>{e||(e=!0,window.neodigmToast&&window.neodigmToast.q("App updated! Reloading...","success"),setTimeout(()=>{window.location.reload()},1e3))}),document.addEventListener("visibilitychange",()=>{document.hidden||navigator.serviceWorker.getRegistration().then(t=>{t?.update()})}),console.warn("%cMach Five Tech ✨ Chicago","color: #DD4124; font-size: 24px; font-weight: bold;")}window.addEventListener("resize",e=>{window.requestAnimationFrame(()=>{neodigmMetronome.subscribe(()=>{neodigmMetronome.unsubscribe(303),neodigmCarousel&&[...document.querySelectorAll("neodigm-carousel")].forEach(s=>{neodigmCarousel.init().nav({id:s.id,nav:"resize"},!1)})},303)})});
